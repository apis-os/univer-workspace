const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Click\x20to\x20Reconnect" } },
    collabStatus: {
      fetchMiss: "Syncing\x20server\x20data...",
      conflict: "Edit conflicts",
      notCollab: "Local file",
      synced: "Synced",
      syncing: "Syncing...",
      offline: "Offline, edits would be save on local",
    },
    snapshotLoading: {
      timeout:
        "Loading\x20stopped\x20at\x20{0}/{1}.\x20Refresh\x20the\x20page\x20to\x20try\x20again.",
      refresh: "Refresh\x20page",
    },
    session: {
      "connection-failed": "Connection failed, please check your network.",
      "will-retry": "Connection\x20failed,\x20we\x20retry\x20in\x20a\x20while.",
      "room-full":
        "Collaboration room is full. You edits would be saved locally.",
      "collaboration-timeout":
        "The server is not responding to your collaboration request. Your edits would be saved locally.",
    },
    conflict: {
      title: "Collaboration Conflict",
      content:
        "There is a conflict between your local copy and the copy on the server. Please save your local edits, because they will be lost when you reload the page.",
    },
    permission: {
      title: "Authentication\x20Error",
      content:
        "Your actions are conflicting with the server's permissions. Please save your local edits elsewhere as they will be discarded after refreshing the page.",
    },
    collaboration: {
      "offline-data-not-saved":
        "You\x20have\x20offline\x20edits\x20that\x20have\x20not\x20been\x20saved\x20to\x20the\x20server.\x20Please\x20check\x20your\x20network\x20and\x20try\x20again.",
      "single-unit": {
        warning:
          "You opened the same file in another tab. In case of data missing, you cannot edit on this tab.",
      },
      closeRoom:
        "Editing privileges were revoked because the collaborative room was closed.",
    },
    auth: {
      needGotoLoginAlert:
        "Your login has expired, click OK to re-login, click Cancel to save your local edits.",
    },
    formula: {
      calculation: {
        started: "Formula calculation started.",
        waiting:
          "Formula calculation queue is full, waiting for available slot...",
        unable:
          "Unable to perform formula calculation at this time. Please try again later.",
      },
    },
  },
};
export { e as default };
