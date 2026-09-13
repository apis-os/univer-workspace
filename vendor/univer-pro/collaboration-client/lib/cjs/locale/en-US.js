const e = {
  "collaboration-client": {
    collabClient: {
      tooltip: {
        reconnect: "Click\x20to\x20Reconnect"
      }
    },
    collabStatus: {
      fetchMiss: "Syncing server data...",
      conflict: "Edit conflicts",
      notCollab: "Local\x20file",
      synced: "Synced",
      syncing: "Syncing...",
      offline: "Offline,\x20edits\x20would\x20be\x20save\x20on\x20local"
    },
    session: {
      "connection-failed": "Connection\x20failed.\x20Please\x20check\x20your\x20network.",
      "will-retry": "Connection failed. We will retry in a while.",
      "room-full": "The document has reached its collaboration limit. Your edits will be cached locally.",
      "join-failed": "Failed\x20to\x20join\x20collaboration.\x20Please\x20try\x20again\x20later.\x20Your\x20edits\x20will\x20be\x20cached\x20locally.",
      "room-not-exists": "Failed to join collaboration. Your edits will be cached locally.",
      "room-permission-denied": "No collaboration permission. Your edits will be cached locally.",
      "room-cnt-exceeds": "Number of collaborative documents exceeds the limit. Your edits will be cached locally.",
      "collaboration-timeout": "The\x20server\x20is\x20not\x20responding\x20to\x20your\x20collaboration\x20request.\x20Your\x20edits\x20would\x20be\x20saved\x20locally."
    },
    conflict: {
      title: "Collaboration Conflict",
      content: "There is a conflict between your local copy and the copy on the server. Please save your local edits, because they will be lost when you reload the page."
    },
    permission: {
      title: "Authentication Error",
      content: "Your\x20actions\x20are\x20conflicting\x20with\x20the\x20server\x27s\x20permissions.\x20Please\x20save\x20your\x20local\x20edits\x20elsewhere\x20as\x20they\x20will\x20be\x20discarded\x20after\x20refreshing\x20the\x20page."
    },
    collaboration: {
      "single-unit": {
        warning: "You opened the same file in another tab. In case of data missing, you cannot edit on this tab."
      },
      closeRoom: "Editing privileges were revoked because the collaborative room was closed."
    },
    auth: {
      needGotoLoginAlert: "Your login has expired, click OK to re-login, click Cancel to save your local edits."
    }
  }
};
module.exports = e;
