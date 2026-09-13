import { BasesHistoryDiffService, UniverBasesHistoryPlugin } from "@univerjs-pro/bases-history";
import { ActivateBaseTableOperation, ActivateBaseViewOperation, BASE_CANVAS_COMPONENT_KEY, BASE_TOOLBAR_EXTRA_ACTIONS, BaseCanvasRenderComponent, IBaseCanvasRootResolverService, IBaseUIStateService, UniverBasesUIPlugin, createScopedBaseCanvasRootResolverService } from "@univerjs-pro/bases-ui";
import { AuthzIoHttpService, COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, CollaborationController, DataLoaderService, SnapshotServerOverHTTPService, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { LS_CONFIG_KEY, UniverLicensePlugin } from "@univerjs-pro/license";
import { BaseViewType, CommandType, DependentOn, Disposable, DisposableCollection, IAuthzIoService, ICommandService, IConfigService, ILogService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, ThemeService, Univer, UniverInstanceType, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { HistoryRestoreService, HistoryUnitAdapterRegistryService, UniverEditHistoryPlugin, isHistoryRestoreAcknowledgement } from "@univerjs-pro/edit-history";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { ComponentManager, ICanvasPopupService, IUIPartsService, UI_PLUGIN_CONFIG_KEY, UniverUIPlugin, connectInjector, useDependency } from "@univerjs/ui";
import { ApplyBaseJson1Mutation, BaseHistoryAction, BatchCreateBaseRecordsCommand, BatchDeleteBaseRecordsCommand, ChangeBaseFieldTypeCommand, CreateBaseChildRecordCommand, CreateBaseFieldCommand, CreateBaseRecordCommand, CreateBaseTableCommand, CreateBaseViewCommand, DeleteBaseFieldCommand, DeleteBaseRecordCommand, DeleteBaseTableCommand, DeleteBaseViewCommand, DuplicateBaseFieldCommand, DuplicateBaseRecordCommand, EnsureBaseTemporalViewDateFieldsCommand, MoveBaseFieldCommand, MoveBaseHierarchyRecordCommand, MoveBaseViewCommand, RenameBaseTableCommand, RenameBaseViewCommand, SetBaseKanbanGroupFieldCommand, SetBaseNameCommand, SetBaseRangeValuesCommand, SetBaseRecordValuesCommand, SetBaseTableHierarchyFieldCommand, SetBaseViewFieldOrderCommand, SetBaseViewFieldVisibleCommand, SetBaseViewFieldWidthCommand, SetBaseViewFilterCommand, SetBaseViewGroupCommand, SetBaseViewSortCommand, UniverBasesPlugin, UpdateBaseCellCommand, UpdateBaseFieldCommand, UpdateBaseFieldDescriptionCommand, UpdateBaseKanbanConfigCommand, UpdateBaseRecordOrderCommand, UpdateBaseViewConditionalColorRulesCommand, UpdateBaseViewConfigCommand } from "@univerjs-pro/bases";
import { BaseDashboardHistoryAction, BaseDashboardWidgetType, CreateBaseDashboardCommand, DeleteBaseDashboardCommand, RemoveBaseDashboardWidgetCommand, UniverBaseDashboardPlugin, UpdateBaseDashboardCommand, UpdateBasePivotViewCommand, UpsertBaseDashboardWidgetCommand } from "@univerjs-pro/bases-dashboard";
import { UniverBaseDashboardUIPlugin } from "@univerjs-pro/bases-dashboard-ui";
import { CollaborationEvent, ISnapshotServerService, SnapshotService, UniverCollaborationPlugin } from "@univerjs-pro/collaboration";
import { UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverNetworkPlugin } from "@univerjs/network";
import { BehaviorSubject, Subject, distinctUntilChanged, filter, firstValueFrom, map, takeUntil, timeout } from "rxjs";
import { HistoryActionSummaryService, HistoryCanvasHighlightService, HistoryRenderAdapterRegistryService, UniverEditHistoryUIPlugin } from "@univerjs-pro/edit-history-ui";
import { Badge, Button, Tooltip } from "@univerjs/design";
import { jsx, jsxs } from "react/jsx-runtime";
import { HistoryIcon } from "@univerjs/icons";
const I = "bases-history-ui.config",
  zt = {
    historyServerUrl: "/universer-api/history"
  };
export { I as BASES_HISTORY_UI_PLUGIN_CONFIG_KEY };
export { zt };
