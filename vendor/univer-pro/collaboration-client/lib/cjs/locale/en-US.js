function _0x265f(_0x54f1f6, _0x1ba175) {
  _0x54f1f6 = _0x54f1f6 - 0x166;
  const _0x9c90c6 = _0x9c90();
  let _0x265f18 = _0x9c90c6[_0x54f1f6];
  return _0x265f18;
}
const _0x45a23b = _0x265f;
function _0x9c90() {
  const _0x507a8d = [
    "702RkamqI",
    "1VcDdXD",
    "Your\x20login\x20has\x20expired,\x20click\x20OK\x20to\x20re-login,\x20click\x20Cancel\x20to\x20save\x20your\x20local\x20edits.",
    "You\x20opened\x20the\x20same\x20file\x20in\x20another\x20tab.\x20In\x20case\x20of\x20data\x20missing,\x20you\x20cannot\x20edit\x20on\x20this\x20tab.",
    "Number\x20of\x20collaborative\x20documents\x20exceeds\x20the\x20limit.\x20Your\x20edits\x20will\x20be\x20cached\x20locally.",
    "11jRDqeA",
    "No\x20collaboration\x20permission.\x20Your\x20edits\x20will\x20be\x20cached\x20locally.",
    "Edit\x20conflicts",
    "There\x20is\x20a\x20conflict\x20between\x20your\x20local\x20copy\x20and\x20the\x20copy\x20on\x20the\x20server.\x20Please\x20save\x20your\x20local\x20edits,\x20because\x20they\x20will\x20be\x20lost\x20when\x20you\x20reload\x20the\x20page.",
    "8JnbmxO",
    "Authentication\x20Error",
    "1145258eTkfXt",
    "Failed\x20to\x20join\x20collaboration.\x20Your\x20edits\x20will\x20be\x20cached\x20locally.",
    "93897jZHbiO",
    "2785380MjSNSi",
    "12365208GbZWKg",
    "25459YKaiYc",
    "47080sCHrgP",
    "288620avvMUK",
    "Editing\x20privileges\x20were\x20revoked\x20because\x20the\x20collaborative\x20room\x20was\x20closed.",
    "117WsMKbR",
    "Collaboration\x20Conflict",
    "Connection\x20failed.\x20We\x20will\x20retry\x20in\x20a\x20while.",
    "Syncing\x20server\x20data...",
    "The\x20document\x20has\x20reached\x20its\x20collaboration\x20limit.\x20Your\x20edits\x20will\x20be\x20cached\x20locally.",
  ];
  _0x9c90 = function () {
    return _0x507a8d;
  };
  return _0x9c90();
}
(function (_0x45d671, _0x27aa54) {
  const _0x1700fd = _0x265f,
    _0x108877 = _0x45d671();
  while (!![]) {
    try {
      const _0x27ccd1 =
        (parseInt(_0x1700fd(0x170)) / 0x1) *
          (parseInt(_0x1700fd(0x17a)) / 0x2) +
        (-parseInt(_0x1700fd(0x17c)) / 0x3) *
          (parseInt(_0x1700fd(0x178)) / 0x4) +
        parseInt(_0x1700fd(0x17d)) / 0x5 +
        (parseInt(_0x1700fd(0x16f)) / 0x6) *
          (parseInt(_0x1700fd(0x166)) / 0x7) +
        (parseInt(_0x1700fd(0x167)) / 0x8) *
          (-parseInt(_0x1700fd(0x16a)) / 0x9) +
        (parseInt(_0x1700fd(0x168)) / 0xa) *
          (-parseInt(_0x1700fd(0x174)) / 0xb) +
        -parseInt(_0x1700fd(0x17e)) / 0xc;
      if (_0x27ccd1 === _0x27aa54) break;
      else _0x108877["push"](_0x108877["shift"]());
    } catch (_0x1ba675) {
      _0x108877["push"](_0x108877["shift"]());
    }
  }
})(_0x9c90, 0x571e3);
const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Click\x20to\x20Reconnect" } },
    collabStatus: {
      fetchMiss: _0x45a23b(0x16d),
      conflict: _0x45a23b(0x176),
      notCollab: "Local\x20file",
      synced: "Synced",
      syncing: "Syncing...",
      offline: "Offline,\x20edits\x20would\x20be\x20save\x20on\x20local",
    },
    session: {
      "connection-failed":
        "Connection\x20failed.\x20Please\x20check\x20your\x20network.",
      "will-retry": _0x45a23b(0x16c),
      "room-full": _0x45a23b(0x16e),
      "join-failed":
        "Failed\x20to\x20join\x20collaboration.\x20Please\x20try\x20again\x20later.\x20Your\x20edits\x20will\x20be\x20cached\x20locally.",
      "room-not-exists": _0x45a23b(0x17b),
      "room-permission-denied": _0x45a23b(0x175),
      "room-cnt-exceeds": _0x45a23b(0x173),
      "collaboration-timeout":
        "The\x20server\x20is\x20not\x20responding\x20to\x20your\x20collaboration\x20request.\x20Your\x20edits\x20would\x20be\x20saved\x20locally.",
    },
    conflict: { title: _0x45a23b(0x16b), content: _0x45a23b(0x177) },
    permission: {
      title: _0x45a23b(0x179),
      content:
        "Your\x20actions\x20are\x20conflicting\x20with\x20the\x20server\x27s\x20permissions.\x20Please\x20save\x20your\x20local\x20edits\x20elsewhere\x20as\x20they\x20will\x20be\x20discarded\x20after\x20refreshing\x20the\x20page.",
    },
    collaboration: {
      "single-unit": { warning: _0x45a23b(0x172) },
      closeRoom: _0x45a23b(0x169),
    },
    auth: { needGotoLoginAlert: _0x45a23b(0x171) },
  },
};
module["exports"] = e;
