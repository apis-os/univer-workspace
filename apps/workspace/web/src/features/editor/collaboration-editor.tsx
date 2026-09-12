import type { ILanguagePack } from "@univerjs/core";
import {
  CommandType,
  LifecycleStages,
  LocaleType,
  LogLevel,
  UserManagerService,
} from "@univerjs/core";
import {
  SnapshotService,
  UniverCollaborationPlugin,
} from "@univerjs-pro/collaboration";
import {
  CollaborationUIEventId,
  CollaborationUIEventService,
  CollaborationStatus,
  UniverCollaborationClientPlugin,
  type IUniverCollaborationClientConfig,
} from "@univerjs-pro/collaboration-client";
import {
  DesktopCollaborationStatusDisplayController,
  UniverCollaborationClientUIPlugin,
} from "@univerjs-pro/collaboration-client-ui";
import CollaborationClientEnUS from "@univerjs-pro/collaboration-client/locale/en-US";
import CollaborationClientZhCN from "@univerjs-pro/collaboration-client/locale/zh-CN";
import CollaborationClientUIEnUS from "@univerjs-pro/collaboration-client-ui/locale/en-US";
import CollaborationClientUIZhCN from "@univerjs-pro/collaboration-client-ui/locale/zh-CN";
import EditHistoryUIEnUS from "@univerjs-pro/edit-history-ui/locale/en-US";
import EditHistoryUIZhCN from "@univerjs-pro/edit-history-ui/locale/zh-CN";
import { UniverEmbedPlugin } from "@univerjs-pro/embed";
import { UniverEmbedUIPlugin } from "@univerjs-pro/embed-ui";
import ExchangeClientEnUS from "@univerjs-pro/exchange-client/locale/en-US";
import ExchangeClientZhCN from "@univerjs-pro/exchange-client/locale/zh-CN";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverLiveSharePlugin } from "@univerjs-pro/live-share";

// Suppress Univer Pro license watermark on canvas
(UniverLicensePlugin.prototype as any).onRendered = function () {};
import {
  createWorktreeCollaborationConfig,
  createWorktreeMergePreviewConfig,
} from "@univerjs-pro/collaboration-worktree-client";
import type {
  FUniver,
  IPreset,
  IPresetPlugin,
} from "@univerjs/presets";
import type { IMember, IUser } from "@univerjs/protocol";
import type { Theme } from "@univerjs/themes";
import { createUniver, mergeLocales } from "@univerjs/presets";
import { useEffect, useRef, useState } from "react";
import {
  createWorkspaceReferencedUnitProviderRegistration,
  type WorkspaceReferenceHostContext,
} from "@univerjs/univer-workspace-reference-provider";
import type { AppLanguage } from "../../shared/i18n";
import { useI18n } from "../../shared/i18n";
import { syncUniverTheme, useTheme } from "../../shared/theme";
import { Alert } from "../../shared/ui/alert";
import { Spinner } from "../../shared/ui/spinner";
import { toast } from "../../shared/ui";
import { type CollaborationIssue } from "./collaboration-status";
import {
  configureExchangePresetPlugins,
  createWorkspaceOutputPlugins,
} from "./exchange-plugins";
import { resolveMergeReview } from "./merge-review";
import { installHistoryShapeFormulaSdkWorkaround } from "./workarounds/history-shape-formula-model";
import { resolveUniverLicense } from "./univer-license";
import {
  withWorkspaceSnapshotServerOverride,
  type WorkspaceHostSnapshotScope,
} from "./workspace-snapshot-server-adapter";
import { applyWorkspaceAgentEdits } from "./apply-agent-edits";
import { bindAgentEditSpotlight } from "./agent-edit-spotlight";
import { bindExplainSelectionHost, readActiveRangeA1 } from "./agent-panel";
import { bindFormulaInspectorHost } from "../demo/formula-inspector";
import {
  AGENT_MEMBER_ID,
  bindFollowAgentHost,
  createFollowAgentEditorHost,
  noteFollowAgentCue,
} from "./follow-agent";
import {
  FollowAgentCollaborationSocketService,
  sendCellIntent,
} from "./follow-agent-collab-socket";
import {
  CELL_INTENT_EVENT,
  highlightIntent,
  readCellIntent,
  shouldPublishIntent,
  type CellIntentKind,
} from "./cell-presence-intent";
import { presenceRingToken } from "./presence-roster";
import { createCollabConflictToaster } from "./collab-conflict-toast";
import {
  applyHistoryNameUsers,
  historyDisplayName,
  overlayHistoryAdministrator,
} from "./history-names";
import {
  bindCollaborationStatusDisplay,
  bindLiveShareFacade,
  shouldBindCollaborationStatusDisplay,
  shouldBindLiveShareFacade,
} from "./live-share-bar";

import "@univerjs-pro/collaboration-client-ui/lib/index.css";
import "@univerjs-pro/edit-history-ui/lib/index.css";
import "@univerjs-pro/collaboration-client/facade";
import "@univerjs-pro/embed/facade";
import "@univerjs-pro/embed-ui/lib/index.css";
import "@univerjs-pro/exchange-client/facade";
import "@univerjs-pro/exchange-client/lib/index.css";
import "@univerjs-pro/live-share/lib/index.css";
import "@univerjs-pro/live-share/facade";

installHistoryShapeFormulaSdkWorkaround();

export interface CollaborationEditorProps {
  readonly unitId: string;
  readonly user: {
    readonly id: string;
    readonly displayName: string;
    readonly avatarUrl: string | null;
  };
  readonly collaborationScope?:
    | { readonly kind: "trunk" }
    | {
        readonly kind: "worktree" | "mergePreview";
        readonly worktreeId: string;
      };
  readonly mappedUnitIds?: readonly string[];
  readonly readOnly?: boolean;
  readonly onCollaboratorsChange?: (members: readonly IMember[]) => void;
}

export interface WorkspaceHistoryDefinition {
  readonly createPlugin: (containerId: string) => IPresetPlugin;
  readonly locales: Readonly<Record<AppLanguage, ILanguagePack>>;
  readonly providedByPreset?: boolean;
}

interface ICollaborationEditorDefinition {
  readonly label: string;
  readonly history: WorkspaceHistoryDefinition;
  readonly enableDocumentCollaborationUI?: boolean;
  readonly collaborationProvidedByPreset?: boolean;
  readonly exchangeProvidedByPreset?: boolean;
  readonly exchangeEnabled?: boolean;
  readonly licenseProvidedByPreset?: boolean;
  readonly hideCollaborationStatus?: boolean;
  readonly useCustomCollaborationStatus?: boolean;
  readonly theme: Theme;
  readonly createPresets: (
    container: HTMLElement,
    license: string,
    collaborationScope: NonNullable<
      CollaborationEditorProps["collaborationScope"]
    >
  ) => IPreset[];
  readonly locales: Readonly<Record<AppLanguage, ILanguagePack>>;
  readonly collaborationFeaturePlugins?: (
    collaborationScope: NonNullable<
      CollaborationEditorProps["collaborationScope"]
    >
  ) => IPresetPlugin[];
  readonly exchangeFeaturePlugins?: () => IPresetPlugin[];
  readonly printFeaturePlugins?: () => IPresetPlugin[];
  readonly load: (
    univerAPI: FUniver,
    unitId: string
  ) => Promise<unknown | null>;
}

export function createCollaborationEditor(
  definition: ICollaborationEditorDefinition
) {
  const collaborationStatusPresentation = resolveCollaborationStatusPresentation(
    definition.hideCollaborationStatus,
    definition.useCustomCollaborationStatus
  );
  return function CollaborationEditor({
    unitId,
    user,
    collaborationScope = { kind: "trunk" },
    mappedUnitIds,
    readOnly = false,
    onCollaboratorsChange,
  }: CollaborationEditorProps) {
    const container = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [collaborationStatus, setCollaborationStatus] =
      useState<CollaborationStatus>(CollaborationStatus.NOT_COLLAB);
    const [collaborationIssue, setCollaborationIssue] =
      useState<CollaborationIssue>(null);
    const { language, t } = useI18n();
    const { resolvedTheme } = useTheme();
    const resolvedThemeRef = useRef(resolvedTheme);
    const univerAPIRef = useRef<FUniver | null>(null);
    const collaborationStatusRef = useRef(collaborationStatus);
    const mappedUnitIdsKey = mappedUnitIds?.join("\u0000") ?? "";
    resolvedThemeRef.current = resolvedTheme;
    collaborationStatusRef.current = collaborationStatus;

    useEffect(() => {
      bindCollaborationStatusDisplay(
        shouldBindCollaborationStatusDisplay(
          collaborationStatusPresentation.showCustom,
          loading,
          error
        )
          ? {
              status: collaborationStatus,
              issue: collaborationIssue,
            }
          : null
      );
    }, [collaborationStatus, collaborationIssue, loading, error]);

    useEffect(() => {
      if (univerAPIRef.current) {
        syncUniverTheme(univerAPIRef.current, resolvedTheme);
      }
    }, [resolvedTheme]);

    useEffect(() => {
      const element = container.current;
      if (!element) return;
      setLoading(true);
      setError(null);
      setCollaborationIssue(null);
      let disposed = false;
      let mountedUniver: ReturnType<typeof createUniver>["univer"] | null =
        null;
      let statusListener: { dispose(): void } | null = null;
      let collaboratorsListener: { dispose(): void } | null = null;
      let collaborators: readonly IMember[] = [];
      let collaborationUIEventListener: { unsubscribe(): void } | null = null;
      let readOnlyListener: { dispose(): void } | null = null;
      let readOnlyLifecycleListener: { dispose(): void } | null = null;
      let agentEditedListener: ((event: Event) => void) | null = null;
      onCollaboratorsChange?.([]);

      const mount = async () => {
        if (!element.id) {
          element.id = `univer-${definition.label}-${unitId}`;
        }
        const resolvedCollaboration = await resolveCollaborationConfig(
          collaborationScope,
          unitId
        );
        if (disposed) return;
        const exchangeEnabled =
          collaborationScope.kind === "trunk" &&
          definition.exchangeEnabled !== false;
        const collaborationConfig = {
          ...resolvedCollaboration.pluginConfig,
          socketService: FollowAgentCollaborationSocketService,
          override: withWorkspaceSnapshotServerOverride(
            resolvedCollaboration.pluginConfig.override,
            {
              hostScope: resolvedCollaboration.hostSnapshotScope,
              origin: window.location.origin,
              resolveMergePreview: loadMergeReviewResolution,
            }
          ),
        };
        const referenceHostContext = createReferenceHostContext(
          collaborationScope,
          mappedUnitIds
        );
        const referenceProvider =
          createWorkspaceReferencedUnitProviderRegistration({
            hostContext: referenceHostContext,
            resolveSnapshotService: () => {
              if (!mountedUniver) {
                throw new Error(
                  "Workspace SnapshotService is not ready."
                );
              }
              return mountedUniver.__getInjector().get(SnapshotService);
            },
          });
        const license = resolveUniverLicense();
        const licensePlugins: IPresetPlugin[] =
          definition.licenseProvidedByPreset
            ? []
            : [
                [
                  UniverLicensePlugin,
                  {
                    license,
                  },
                ],
              ];
        let presets = definition.createPresets(
          element,
          license,
          collaborationScope
        );
        if (licensePlugins.length > 0) {
          // createUniver registers every preset before its top-level plugins.
          // Keep License ahead of Pro feature presets so their dependency
          // registration does not install a second License plugin implicitly.
          presets = [{ plugins: licensePlugins }, ...presets];
        }
        const collaborationPlugins: IPresetPlugin[] =
          definition.collaborationProvidedByPreset
            ? []
            : [
                UniverCollaborationPlugin,
                [
                  UniverCollaborationClientPlugin,
                  {
                    socketService: FollowAgentCollaborationSocketService,
                    enableOfflineEditing: false,
                    enableAuthServer: true,
                    wsSessionTicketUrl:
                      "/universer-api/user/session-ticket",
                    authzUrl: "/universer-api/authz",
                    loginUrlKey: "/login",
                    sendChangesetTimeout: 200,
                    ...collaborationConfig,
                  },
                ],
                [
                  UniverCollaborationClientUIPlugin,
                  {
                    enableDocumentCollaborationUI:
                      definition.enableDocumentCollaborationUI,
                    override: collaborationStatusPresentation.suppressNative
                      ? [
                          [
                            DesktopCollaborationStatusDisplayController,
                            null,
                          ],
                        ]
                      : undefined,
                  },
                ],
              ];
        const collaborationFeaturePlugins =
          definition.collaborationFeaturePlugins?.(collaborationScope) ?? [];
        const historyFeaturePlugins = createWorkspaceHistoryPlugins(
          collaborationScope,
          definition.history,
          element.id
        );
        const outputPlugins = createWorkspaceOutputPlugins({
          origin: window.location.origin,
          exchangeEnabled,
          exchangeProvidedByPreset:
            definition.exchangeProvidedByPreset === true,
          exchangeFeaturePlugins:
            definition.exchangeFeaturePlugins?.() ?? [],
          printFeaturePlugins: definition.printFeaturePlugins?.() ?? [],
        });
        if (definition.collaborationProvidedByPreset) {
          presets = configurePresetCollaboration(
            presets,
            collaborationConfig,
            definition,
            exchangeEnabled,
            collaborationScope.kind === "trunk",
            element.id
          );
        }
        const univerLocale =
          language === "zh-CN" ? LocaleType.ZH_CN : LocaleType.EN_US;
        const { univer, univerAPI } = createUniver({
          locale: univerLocale,
          locales: {
            [univerLocale]: mergeLocales(
              definition.locales[language],
              language === "zh-CN"
                ? CollaborationClientZhCN
                : CollaborationClientEnUS,
              language === "zh-CN"
                ? CollaborationClientUIZhCN
                : CollaborationClientUIEnUS,
              ...(exchangeEnabled
                ? [
                    language === "zh-CN"
                      ? ExchangeClientZhCN
                      : ExchangeClientEnUS,
                  ]
                : []),
              ...historyLocales(language, definition.history)
            ),
          },
          theme: definition.theme,
          darkMode: resolvedThemeRef.current === "dark",
          logLevel: LogLevel.WARN,
          collaboration: true,
          presets,
          plugins: [
            ...collaborationPlugins,
            UniverLiveSharePlugin,
            ...collaborationFeaturePlugins,
            ...historyFeaturePlugins,
            ...outputPlugins,
            [
              UniverEmbedPlugin,
              {
                resourceRefUnitProviderRegistrations: [
                  referenceProvider,
                ],
              },
            ],
            UniverEmbedUIPlugin,
          ],
        });
        mountedUniver = univer;
        univerAPIRef.current = univerAPI;
        bindAgentEditSpotlight({
          getActiveWorkbook: () => univerAPI.getActiveWorkbook?.(),
        });
        bindExplainSelectionHost({
          getActiveWorkbook: () => univerAPI.getActiveWorkbook?.(),
        });
        bindFormulaInspectorHost({
          getActiveWorkbook: () => univerAPI.getActiveWorkbook?.(),
          unitId,
          ...(collaborationScope.kind === "trunk"
            ? {}
            : { worktreeId: collaborationScope.worktreeId }),
        });
        bindFollowAgentHost(createFollowAgentEditorHost(univerAPI));
        const notifyCollabConflict = createCollabConflictToaster({
          warning: (message) => toast.warning(message),
        });
        collaborationUIEventListener = univer
          .__getInjector()
          .get(CollaborationUIEventService)
          .event$.subscribe((event) => {
            if (disposed) return;
            if (event.id === CollaborationUIEventId.PERMISSION_DENIED) {
              setCollaborationIssue("permission");
            } else if (event.id === CollaborationUIEventId.CONFLICT) {
              setCollaborationIssue("conflict");
              notifyCollabConflict(t("collabConflictToast"));
            }
          });
        if (readOnly) {
          const installReadOnlyGuard = () => {
            if (disposed || readOnlyListener) return;
            readOnlyListener = univerAPI.addEvent(
              univerAPI.Event.BeforeCommandExecute,
              (event) => {
                const command = event as {
                  readonly type: CommandType;
                  readonly options?: {
                    readonly fromCollab?: boolean;
                    readonly fromChangeset?: boolean;
                  };
                  cancel: boolean;
                };
                if (
                  command.type === CommandType.MUTATION &&
                  !command.options?.fromCollab &&
                  !command.options?.fromChangeset
                ) {
                  command.cancel = true;
                }
              }
            );
          };
          if (
            univerAPI.getCurrentLifecycleStage() >=
            LifecycleStages.Steady
          ) {
            installReadOnlyGuard();
          } else {
            readOnlyLifecycleListener = univerAPI.addEvent(
              univerAPI.Event.LifeCycleChanged,
              ({ stage }) => {
                if (stage < LifecycleStages.Steady) return;
                readOnlyLifecycleListener?.dispose();
                readOnlyLifecycleListener = null;
                installReadOnlyGuard();
              }
            );
          }
        }

        const protocolUser: IUser = {
          userID: user.id,
          name: historyDisplayName(user.id, user.displayName),
          avatar: user.avatarUrl ?? "",
          anonymous: false,
          canBindAnonymous: false,
          phone: "",
          email: "",
          createTimestamp: 0,
        };
        const userManager = univer.__getInjector().get(UserManagerService);
        userManager.setCurrentUser(protocolUser);
        applyHistoryNameUsers(userManager);

        const collaboration = univerAPI.getCollaboration();
        statusListener = univerAPI.addEvent(
          univerAPI.Event.CollaborationStatusChanged,
          (event) => {
            if (!disposed && event.unitId === unitId) {
              setCollaborationStatus(event.status);
              onCollaboratorsChange?.(
                event.status === CollaborationStatus.OFFLINE ? [] : collaborators
              );
              if (event.status !== CollaborationStatus.CONFLICT) {
                setCollaborationIssue(null);
              }
            }
          }
        );
        await definition.load(univerAPI, unitId).then((unit) => {
          if (!disposed && !unit) {
            throw new Error(
              `The ${definition.label} could not be loaded.`
            );
          }
          if (!disposed) {
            setCollaborationStatus(
              collaboration.getCollaborationStatus(unitId)
            );
            setLoading(false);
            bindLiveShareFacade(
              shouldBindLiveShareFacade(univerAPI) ? univerAPI : undefined
            );
          }
        });
        const applyAgentEdits = (event: Event) => {
          if (disposed) return;
          const result = applyWorkspaceAgentEdits(
            univerAPI,
            (event as CustomEvent<{
              unitId?: string;
              toolCalls?: Array<{ tool: string; args: Record<string, unknown> }>;
            }>).detail,
            unitId,
            collaborationStatusRef.current
          );
          noteFollowAgentCue({
            cursorMemberId: AGENT_MEMBER_ID,
            ...(result.ranges[0]?.a1
              ? { selection: result.ranges[0].a1 }
              : {}),
          });
        };
        agentEditedListener = applyAgentEdits;
        window.addEventListener("workspace-agent-edited", applyAgentEdits);
        let intentHighlightHandle: { dispose(): void } | null = null;
        let commandListener: { dispose(): void } | null = null;
        let cellIntentListener: ((event: Event) => void) | null = null;

        const onCellIntent = (event: Event) => {
          if (disposed) return;
          const intent = readCellIntent(event);
          if (!intent) return;
          if (intent.memberID === user.id || intent.userID === user.id) return;
          const ringToken = presenceRingToken({ userID: intent.userID });
          const reducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          intentHighlightHandle?.dispose();
          intentHighlightHandle = highlightIntent(
            { getActiveWorkbook: () => univerAPI.getActiveWorkbook?.() },
            intent,
            ringToken,
            reducedMotion
          );
        };
        cellIntentListener = onCellIntent;
        window.addEventListener(CELL_INTENT_EVENT, onCellIntent);

        commandListener = univerAPI.addEvent(
          univerAPI.Event.CommandExecuted,
          (commandEvent) => {
            if (disposed) return;
            const a1 = readActiveRangeA1({
              getActiveWorkbook: () => univerAPI.getActiveWorkbook?.(),
            });
            if (!a1 || !shouldPublishIntent({ kind: "member", a1 })) return;
            const isMutation =
              (commandEvent as { type?: number }).type === CommandType.MUTATION;
            const intentKind: CellIntentKind = isMutation ? "editing" : "selecting";
            sendCellIntent(unitId, {
              memberID: user.id,
              userID: user.id,
              a1,
              intent: intentKind,
            });
          }
        );

        if (
          !disposed &&
          onCollaboratorsChange &&
          collaborationScope.kind !== "mergePreview"
        ) {
          collaboratorsListener = collaboration.subscribeCollaborators(unitId, (members) => {
            collaborators = members;
            if (!disposed) {
              onCollaboratorsChange(
                collaboration.getCollaborationStatus(unitId) === CollaborationStatus.OFFLINE
                  ? []
                  : members
              );
            }
          });
        }
      };

      mount().catch((reason: unknown) => {
        if (disposed) return;
        setLoading(false);
        setError(
          reason instanceof Error
            ? reason.message
            : `The ${definition.label} could not be loaded.`
        );
      });

      return () => {
        disposed = true;
        commandListener?.dispose();
        intentHighlightHandle?.dispose();
        if (cellIntentListener) {
          window.removeEventListener(CELL_INTENT_EVENT, cellIntentListener);
        }
        collaboratorsListener?.dispose();
        onCollaboratorsChange?.([]);
        statusListener?.dispose();
        collaborationUIEventListener?.unsubscribe();
        readOnlyListener?.dispose();
        readOnlyLifecycleListener?.dispose();
        if (agentEditedListener) {
          window.removeEventListener("workspace-agent-edited", agentEditedListener);
        }
        bindAgentEditSpotlight(undefined);
        bindExplainSelectionHost(undefined);
        bindFormulaInspectorHost(undefined);
        bindFollowAgentHost(undefined);
        bindLiveShareFacade(undefined);
        bindCollaborationStatusDisplay(null);
        mountedUniver?.dispose();
        univerAPIRef.current = null;
      };
    }, [
      collaborationScope.kind,
      collaborationScope.kind === "trunk"
        ? ""
        : collaborationScope.worktreeId,
      mappedUnitIdsKey,
      language,
      unitId,
      user.avatarUrl,
      user.displayName,
      user.id,
      readOnly,
      onCollaboratorsChange,
    ]);

    return (
      <div className="univer-editor-shell">
        {error ? (
          <Alert
            variant="destructive"
            className="m-6"
            title={t("resourceOpenFailed")}
          >
            {error}
          </Alert>
        ) : null}
        {loading ? (
          <div className="absolute inset-0 z-10 grid place-items-center bg-background/85 backdrop-blur-[1px]">
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Spinner className="size-5 text-brand-600" />
              {t("loadingType", { type: definition.label })}
            </div>
          </div>
        ) : null}
        <div ref={container} className="univer-editor-container" />
      </div>
    );
  };
}

export function createWorkspaceHistoryPlugins(
  collaborationScope: NonNullable<
    CollaborationEditorProps["collaborationScope"]
  >,
  history: WorkspaceHistoryDefinition,
  containerId: string
): IPresetPlugin[] {
  if (
    collaborationScope.kind !== "trunk" ||
    history.providedByPreset === true
  ) {
    return [];
  }
  return [history.createPlugin(containerId)];
}

function historyLocales(
  language: AppLanguage,
  history: WorkspaceHistoryDefinition
): ILanguagePack[] {
  return language === "zh-CN"
    ? [
        overlayHistoryAdministrator(EditHistoryUIZhCN),
        overlayHistoryAdministrator(history.locales[language]),
      ]
    : [
        overlayHistoryAdministrator(EditHistoryUIEnUS),
        overlayHistoryAdministrator(history.locales[language]),
      ];
}

function configurePresetCollaboration(
  presets: IPreset[],
  collaborationConfig: Awaited<
    ReturnType<typeof resolveCollaborationConfig>
  >["pluginConfig"],
  definition: ICollaborationEditorDefinition,
  exchangeEnabled: boolean,
  historyEnabled: boolean,
  containerId: string
): IPreset[] {
  const presetHistoryPlugin = definition.history.providedByPreset
    ? definition.history.createPlugin(containerId)
    : null;
  const presetHistoryPluginConstructor = Array.isArray(presetHistoryPlugin)
    ? presetHistoryPlugin[0]
    : presetHistoryPlugin;
  return configureExchangePresetPlugins(presets, exchangeEnabled).map(
    (preset) => ({
      ...preset,
      plugins: preset.plugins.flatMap((plugin): IPresetPlugin[] => {
        if (!Array.isArray(plugin)) return [plugin];
        const [PluginConstructor, pluginConfig] = plugin;
        if (
          presetHistoryPlugin &&
          PluginConstructor === presetHistoryPluginConstructor
        ) {
          return historyEnabled ? [presetHistoryPlugin] : [];
        }
        if (PluginConstructor === UniverCollaborationClientPlugin) {
          return [[
            PluginConstructor,
            {
              ...(pluginConfig as object),
              enableOfflineEditing: false,
              enableAuthServer: true,
              wsSessionTicketUrl: "/universer-api/user/session-ticket",
              authzUrl: "/universer-api/authz",
              loginUrlKey: "/login",
              sendChangesetTimeout: 200,
              ...collaborationConfig,
            },
          ]];
        }
        if (PluginConstructor === UniverCollaborationClientUIPlugin) {
          return [[
            PluginConstructor,
            {
              ...(pluginConfig as object),
              enableDocumentCollaborationUI:
                definition.enableDocumentCollaborationUI,
              override: resolveCollaborationStatusPresentation(
                definition.hideCollaborationStatus,
                definition.useCustomCollaborationStatus
              ).suppressNative
                ? [[DesktopCollaborationStatusDisplayController, null]]
                : undefined,
            },
          ]];
        }
        return [plugin];
      }),
    })
  );
}

export function resolveCollaborationStatusPresentation(
  hidden: boolean | undefined,
  custom: boolean | undefined
): { readonly suppressNative: boolean; readonly showCustom: boolean } {
  return {
    suppressNative: Boolean(hidden || custom),
    showCustom: Boolean(custom && !hidden),
  };
}

async function resolveCollaborationConfig(
  scope: NonNullable<CollaborationEditorProps["collaborationScope"]>,
  unitId: string
): Promise<{
  readonly pluginConfig: Partial<IUniverCollaborationClientConfig>;
  readonly hostSnapshotScope: WorkspaceHostSnapshotScope;
}> {
  const wsProtocol =
    window.location.protocol === "https:" ? "wss:" : "ws:";
  if (scope.kind === "trunk") {
    return {
      pluginConfig: {
        snapshotServerUrl: "/universer-api/snapshot",
        collabSubmitChangesetUrl: "/universer-api/comb",
        collabWebSocketUrl: `${wsProtocol}//${window.location.host}/universer-api/comb/connect`,
        uploadFileServerUrl: "/universer-api/stream/file/upload",
        signUrlServerUrl: "/universer-api/file/{fileID}/sign-url",
      },
      hostSnapshotScope: { kind: "trunk" },
    };
  }
  if (scope.kind === "worktree") {
    return {
      pluginConfig: {
        ...createWorktreeCollaborationConfig({
          origin: window.location.origin,
          worktreeID: scope.worktreeId,
        }),
        uploadFileServerUrl: `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}/stream/file/upload`,
        signUrlServerUrl: `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}/file/{fileID}/sign-url`,
      },
      hostSnapshotScope: {
        kind: "worktree",
        worktreeId: scope.worktreeId,
      },
    };
  }
  const resolution = await loadMergeReviewResolution(
    scope.worktreeId,
    unitId
  );
  const worktreePluginConfig = {
    ...createWorktreeCollaborationConfig({
      origin: window.location.origin,
      worktreeID: scope.worktreeId,
    }),
    uploadFileServerUrl: `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}/stream/file/upload`,
    signUrlServerUrl: `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}/file/{fileID}/sign-url`,
  };
  if (resolution.kind === "worktree") {
    return {
      pluginConfig: worktreePluginConfig,
      hostSnapshotScope: {
        kind: "worktree",
        worktreeId: scope.worktreeId,
      },
    };
  }
  if (resolution.kind === "unavailable") {
    throw new Error(
      resolution.reason === "conflict"
        ? "文档存在合入冲突，暂时无法生成预览。"
        : "暂时无法生成合入预览。"
    );
  }
  return {
    pluginConfig: {
      ...createWorktreeMergePreviewConfig({
        origin: window.location.origin,
        worktreeID: scope.worktreeId,
        preview: resolution.preview,
      }),
      uploadFileServerUrl: `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}/stream/file/upload`,
      signUrlServerUrl: `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}/file/{fileID}/sign-url`,
    },
    hostSnapshotScope: {
      kind: "mergePreview",
      worktreeId: scope.worktreeId,
      preview: resolution.preview,
    },
  };
}

async function loadMergeReviewResolution(
  worktreeId: string,
  unitId: string
): Promise<ReturnType<typeof resolveMergeReview>> {
  const response = await fetch(
    `/universer-api/worktrees/${encodeURIComponent(worktreeId)}/units/${encodeURIComponent(unitId)}/merge-preview`,
    { credentials: "include" }
  );
  if (!response.ok) {
    throw new Error("The merge preview could not be prepared.");
  }
  const body = (await response.json()) as {
    readonly evaluation?: Parameters<typeof resolveMergeReview>[0];
  };
  return resolveMergeReview(body.evaluation);
}

function createReferenceHostContext(
  scope: NonNullable<CollaborationEditorProps["collaborationScope"]>,
  mappedUnitIds: readonly string[] | undefined
): WorkspaceReferenceHostContext {
  if (scope.kind === "trunk") return { view: { kind: "trunk" } };
  if (!mappedUnitIds) {
    throw new Error(
      "Workspace Worktree Unit mapping is required for cross-Unit references."
    );
  }
  return scope.kind === "worktree"
    ? {
        view: { kind: "worktree", worktreeId: scope.worktreeId },
        mappedUnitIds,
      }
    : {
        view: { kind: "mergePreview", worktreeId: scope.worktreeId },
        mappedUnitIds,
      };
}
