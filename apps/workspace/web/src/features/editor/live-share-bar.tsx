import { CollaborationStatus } from "@univerjs-pro/collaboration-client";
import { useEffect, useState } from "react";
import { useI18n } from "../../shared/i18n";
import { Button } from "../../shared/ui";
import { cn } from "../../shared/utils/cn";
import {
  collaborationStatusMessageKey,
  type CollaborationIssue,
} from "./collaboration-status";
import {
  followAgentCommand,
  stopFollowAgent,
} from "./follow-agent";
import {
  isLiveShareFacadeAvailable,
  liveShareCommands,
  type LiveShareFacade,
} from "./live-share-commands";

export type { LiveShareFacade } from "./live-share-commands";
export {
  isLiveShareFacadeAvailable,
  liveShareCommands,
  shouldBindCollaborationStatusDisplay,
  shouldBindLiveShareFacade,
} from "./live-share-commands";

export interface CollaborationStatusSnapshot {
  readonly status: CollaborationStatus;
  readonly issue: CollaborationIssue;
}

const liveShareListeners = new Set<() => void>();
let boundLiveShareFacade: LiveShareFacade | undefined;

const statusListeners = new Set<() => void>();
let boundCollaborationStatus: CollaborationStatusSnapshot | null = null;

export function bindLiveShareFacade(api: LiveShareFacade | undefined): void {
  boundLiveShareFacade = api;
  for (const listener of liveShareListeners) listener();
}

export function bindCollaborationStatusDisplay(
  snapshot: CollaborationStatusSnapshot | null
): void {
  boundCollaborationStatus = snapshot;
  for (const listener of statusListeners) listener();
}

function useBoundLiveShareFacade(): LiveShareFacade | undefined {
  const [api, setApi] = useState(boundLiveShareFacade);
  useEffect(() => {
    const sync = () => setApi(boundLiveShareFacade);
    liveShareListeners.add(sync);
    sync();
    return () => {
      liveShareListeners.delete(sync);
    };
  }, []);
  return api;
}

function useBoundCollaborationStatus(): CollaborationStatusSnapshot | null {
  const [snapshot, setSnapshot] = useState(boundCollaborationStatus);
  useEffect(() => {
    const sync = () => setSnapshot(boundCollaborationStatus);
    statusListeners.add(sync);
    sync();
    return () => {
      statusListeners.delete(sync);
    };
  }, []);
  return snapshot;
}

export function LiveShareBar({
  api,
}: {
  readonly api?: LiveShareFacade;
} = {}) {
  const { t } = useI18n();
  const bound = useBoundLiveShareFacade();
  const resolved = api ?? bound;
  if (!isLiveShareFacadeAvailable(resolved)) return null;
  const commands = liveShareCommands(resolved);
  return (
    <div className="flex items-center gap-1">
      <Button size="sm" variant="secondary" onClick={commands.present}>
        Present
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => {
          stopFollowAgent();
          commands.stop();
        }}
      >
        Stop
      </Button>
      <Button size="sm" variant="secondary" onClick={followAgentCommand}>
        {t("followAgent")}
      </Button>
    </div>
  );
}

export function CollaborationStatusChip() {
  const { t } = useI18n();
  const snapshot = useBoundCollaborationStatus();
  if (!snapshot) return null;
  const { status, issue } = snapshot;
  return (
    <span
      className={cn(
        "flex items-center gap-1.5 rounded-full border border-border bg-background/85 py-1 pr-2.5 pl-2 text-xs font-medium shadow-sm backdrop-blur-sm",
        status === CollaborationStatus.SYNCED &&
          "text-success-soft-foreground",
        status === CollaborationStatus.CONFLICT &&
          "text-destructive-soft-foreground",
        status === CollaborationStatus.OFFLINE &&
          "text-warning-soft-foreground",
        status !== CollaborationStatus.SYNCED &&
          status !== CollaborationStatus.CONFLICT &&
          status !== CollaborationStatus.OFFLINE &&
          "text-muted-foreground"
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === CollaborationStatus.SYNCED && "bg-success",
          status === CollaborationStatus.CONFLICT && "bg-destructive",
          status === CollaborationStatus.OFFLINE && "bg-warning",
          status !== CollaborationStatus.SYNCED &&
            status !== CollaborationStatus.CONFLICT &&
            status !== CollaborationStatus.OFFLINE &&
            "bg-subtle-foreground"
        )}
      />
      {t(collaborationStatusMessageKey(status, issue))}
    </span>
  );
}
