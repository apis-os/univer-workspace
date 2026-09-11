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

export function liveShareCommands(api: LiveShareFacade): {
  readonly present: () => void;
  readonly stop: () => void;
  readonly follow: () => void;
} {
  return {
    present: () => {
      api.startPresenting?.();
    },
    stop: () => {
      if (api.getLiveShareStatus?.() === "following") {
        api.stopFollowing?.();
        return;
      }
      api.stopPresenting?.();
    },
    follow: () => {
      api.startFollowing?.();
    },
  };
}
