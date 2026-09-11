function _0x224d(_0x450652, _0x5ca31d) {
  _0x450652 = _0x450652 - 0x197;
  const _0x1b3b72 = _0x1b3b();
  let _0x224daa = _0x1b3b72[_0x450652];
  return _0x224daa;
}
const _0x281a12 = _0x224d;
(function (_0x364155, _0x33e6e5) {
  const _0x37d63b = _0x224d,
    _0xb9c614 = _0x364155();
  while (!![]) {
    try {
      const _0xf42229 =
        parseInt(_0x37d63b(0x199)) / 0x1 +
        parseInt(_0x37d63b(0x197)) / 0x2 +
        parseInt(_0x37d63b(0x1b0)) / 0x3 +
        -parseInt(_0x37d63b(0x1b1)) / 0x4 +
        -parseInt(_0x37d63b(0x19b)) / 0x5 +
        -parseInt(_0x37d63b(0x1a2)) / 0x6 +
        (-parseInt(_0x37d63b(0x1b3)) / 0x7) *
          (parseInt(_0x37d63b(0x1ab)) / 0x8);
      if (_0xf42229 === _0x33e6e5) break;
      else _0xb9c614["push"](_0xb9c614["shift"]());
    } catch (_0x4fb485) {
      _0xb9c614["push"](_0xb9c614["shift"]());
    }
  }
})(_0x1b3b, 0x4da15);
function _0x1b3b() {
  const _0x47c58c = [
    "Collaboration\x20room\x20is\x20full.\x20You\x20edits\x20would\x20be\x20saved\x20locally.",
    "Formula\x20calculation\x20queue\x20is\x20full,\x20waiting\x20for\x20available\x20slot...",
    "There\x20is\x20a\x20conflict\x20between\x20your\x20local\x20copy\x20and\x20the\x20copy\x20on\x20the\x20server.\x20Please\x20save\x20your\x20local\x20edits,\x20because\x20they\x20will\x20be\x20lost\x20when\x20you\x20reload\x20the\x20page.",
    "828568lBGcUj",
    "Your\x20login\x20has\x20expired,\x20click\x20OK\x20to\x20re-login,\x20click\x20Cancel\x20to\x20save\x20your\x20local\x20edits.",
    "Connection\x20failed,\x20we\x20retry\x20in\x20a\x20while.",
    "Collaboration\x20Conflict",
    "Syncing...",
    "642564IXljBM",
    "1033036nNBiSV",
    "Click\x20to\x20Reconnect",
    "14Pnfbqn",
    "1032388dtuqcS",
    "Your\x20actions\x20are\x20conflicting\x20with\x20the\x20server\x27s\x20permissions.\x20Please\x20save\x20your\x20local\x20edits\x20elsewhere\x20as\x20they\x20will\x20be\x20discarded\x20after\x20refreshing\x20the\x20page.",
    "183372CXQkqz",
    "Edit\x20conflicts",
    "155625UBsfYj",
    "Unable\x20to\x20perform\x20formula\x20calculation\x20at\x20this\x20time.\x20Please\x20try\x20again\x20later.",
    "Local\x20file",
    "You\x20have\x20offline\x20edits\x20that\x20have\x20not\x20been\x20saved\x20to\x20the\x20server.\x20Please\x20check\x20your\x20network\x20and\x20try\x20again.",
    "Authentication\x20Error",
    "The\x20server\x20is\x20not\x20responding\x20to\x20your\x20collaboration\x20request.\x20Your\x20edits\x20would\x20be\x20saved\x20locally.",
    "You\x20opened\x20the\x20same\x20file\x20in\x20another\x20tab.\x20In\x20case\x20of\x20data\x20missing,\x20you\x20cannot\x20edit\x20on\x20this\x20tab.",
    "595530MdGDJH",
    "Editing\x20privileges\x20were\x20revoked\x20because\x20the\x20collaborative\x20room\x20was\x20closed.",
    "Synced",
    "Syncing\x20server\x20data...",
    "Refresh\x20page",
    "Connection\x20failed,\x20please\x20check\x20your\x20network.",
  ];
  _0x1b3b = function () {
    return _0x47c58c;
  };
  return _0x1b3b();
}
const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: _0x281a12(0x1b2) } },
    collabStatus: {
      fetchMiss: _0x281a12(0x1a5),
      conflict: _0x281a12(0x19a),
      notCollab: _0x281a12(0x19d),
      synced: _0x281a12(0x1a4),
      syncing: _0x281a12(0x1af),
      offline: "Offline,\x20edits\x20would\x20be\x20save\x20on\x20local",
    },
    snapshotLoading: {
      timeout:
        "Loading\x20stopped\x20at\x20{0}/{1}.\x20Refresh\x20the\x20page\x20to\x20try\x20again.",
      refresh: _0x281a12(0x1a6),
    },
    session: {
      "connection-failed": _0x281a12(0x1a7),
      "will-retry": _0x281a12(0x1ad),
      "room-full": _0x281a12(0x1a8),
      "collaboration-timeout": _0x281a12(0x1a0),
    },
    conflict: { title: _0x281a12(0x1ae), content: _0x281a12(0x1aa) },
    permission: { title: _0x281a12(0x19f), content: _0x281a12(0x198) },
    collaboration: {
      "offline-data-not-saved": _0x281a12(0x19e),
      "single-unit": { warning: _0x281a12(0x1a1) },
      closeRoom: _0x281a12(0x1a3),
    },
    auth: { needGotoLoginAlert: _0x281a12(0x1ac) },
    formula: {
      calculation: {
        started: "Formula\x20calculation\x20started.",
        waiting: _0x281a12(0x1a9),
        unable: _0x281a12(0x19c),
      },
    },
  },
};
module["exports"] = e;
