const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Click to Reconnect" } },
    collabStatus: {
      fetchMiss: "Syncing server data...",
      conflict: "Edit conflicts",
      notCollab: "Local file",
      synced: "Synced",
      syncing: "Syncing...",
      offline: "Offline,\x20edits\x20would\x20be\x20save\x20on\x20local",
    },
    snapshotLoading: {
      timeout:
        "Loading\x20stopped\x20at\x20{0}/{1}.\x20Refresh\x20the\x20page\x20to\x20try\x20again.",
      refresh: "Refresh page",
    },
    session: {
      "connection-failed": "Connection failed, please check your network.",
      "will-retry": "Connection failed, we retry in a while.",
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
      title: "Authentication Error",
      content:
        "Your actions are conflicting with the server's permissions. Please save your local edits elsewhere as they will be discarded after refreshing the page.",
    },
    collaboration: {
      "offline-data-not-saved":
        "You have offline edits that have not been saved to the server. Please check your network and try again.",
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
        started: "Formula\x20calculation\x20started.",
        waiting:
          "Formula calculation queue is full, waiting for available slot...",
        unable:
          "Unable to perform formula calculation at this time. Please try again later.",
      },
    },
  },
};
module.exports = e;
