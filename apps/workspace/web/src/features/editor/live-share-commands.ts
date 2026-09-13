export interface LiveShareFacade {
  readonly startPresenting?: () => void;
  readonly stopPresenting?: () => void;
  readonly startFollowing?: () => void;
  readonly stopFollowing?: () => void;
  readonly getLiveShareStatus?: () => unknown;
}

export function isLiveShareFacadeAvailable(
  api: unknown
): api is LiveShareFacade {
  if (!api || typeof api !== "object") return false;
  const candidate = api as LiveShareFacade;
  return (
    typeof candidate.startPresenting === "function" &&
    typeof candidate.stopPresenting === "function" &&
    typeof candidate.startFollowing === "function" &&
    typeof candidate.stopFollowing === "function"
  );
}

export function shouldBindLiveShareFacade(
  api: { readonly getActiveWorkbook?: () => unknown } | undefined
): boolean {
  try {
    return Boolean(api?.getActiveWorkbook?.());
  } catch {
    return false;
  }
}

export function shouldBindCollaborationStatusDisplay(
  showCustom: boolean,
  loading: boolean,
  error: unknown
): boolean {
  return Boolean(showCustom && !loading && !error);
}

function runLiveShareCommand(run: () => void): void {
  try {
    run();
  } catch {
    // Live Share Facade throws without a workbook or LiveShareCoordinator.
  }
}

export function liveShareCommands(api: LiveShareFacade): {
  readonly present: () => void;
  readonly stop: () => void;
  readonly follow: () => void;
} {
  return {
    present: () => {
      runLiveShareCommand(() => {
        api.startPresenting?.();
      });
    },
    stop: () => {
      runLiveShareCommand(() => {
        if (api.getLiveShareStatus?.() === "following") {
          api.stopFollowing?.();
          return;
        }
        api.stopPresenting?.();
      });
    },
    follow: () => {
      runLiveShareCommand(() => {
        api.startFollowing?.();
      });
    },
  };
}
