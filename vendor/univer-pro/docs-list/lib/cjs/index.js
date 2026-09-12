Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs/docs"),
  n = require("@univerjs-pro/license"),
  r = (function (_0x23dfc8) {
    return (
      (_0x23dfc8.Item = "item"),
      (_0x23dfc8.Level = "level"),
      (_0x23dfc8.List = "list"),
      _0x23dfc8
    );
  })({});
function i(_0x28cc90) {
  let _0x9b453 = _0x28cc90.documentData["body"],
    _0x3b3250 = (_0x9b453 == null ? undefined : _0x9b453.paragraphs) ?? [],
    _0x36d2fd = p(_0x3b3250, _0x28cc90.paragraphStartIndex);
  if (!_0x9b453 || !(_0x36d2fd != null && _0x36d2fd.bullet)) return [];
  let _0x3ca868 = (0, e.getParagraphContentStartOffsets)(_0x9b453);
  return m(_0x3b3250, _0x36d2fd, _0x28cc90.mode).map((_0x468c75) => ({
    startOffset:
      _0x3ca868.get(_0x468c75.startIndex) ??
      (0, e.getParagraphContentStartOffset)(_0x9b453, _0x468c75),
    endOffset: _0x468c75.startIndex,
    collapsed: false,
    rangeType: e.DOC_RANGE_TYPE["TEXT"],
    segmentId: _0x28cc90.segmentId ?? "",
  }));
}
function a(_0x35b79c) {
  let _0x327c03 = f(
    _0x35b79c.documentData,
    _0x35b79c.paragraphStartIndex,
    _0x35b79c.mode ?? "list",
  );
  return (
    (_0x327c03.level["glyphType"] = _0x35b79c.glyphType),
    delete _0x327c03.level["glyphSymbol"],
    { nextDocumentData: _0x327c03.nextDocumentData }
  );
}
function o(_0x51c485) {
  let _0x4f5df6 = f(
    _0x51c485.documentData,
    _0x51c485.paragraphStartIndex,
    _0x51c485.mode ?? "list",
  );
  return (
    (_0x4f5df6.level["glyphType"] = e.ListGlyphType["BULLET"]),
    (_0x4f5df6.level["glyphSymbol"] = _0x51c485.symbol),
    { nextDocumentData: _0x4f5df6.nextDocumentData }
  );
}
function s(_0x3a4eca) {
  if (!c(_0x3a4eca.documentData, _0x3a4eca.paragraphStartIndex))
    return { nextDocumentData: x(_0x3a4eca.documentData) };
  let _0x647234 = f(
    _0x3a4eca.documentData,
    _0x3a4eca.paragraphStartIndex,
    _0x3a4eca.mode ?? "list",
  );
  return (
    (_0x3a4eca.mode === "list"
      ? Array.from(
          new Set(
            _0x647234.paragraphs["map"]((_0x4f9390) => {
              var _0x165f10;
              return (_0x165f10 = _0x4f9390.bullet) == null
                ? undefined
                : _0x165f10.nestingLevel;
            }).filter((_0x5cc8e8) => _0x5cc8e8 != null),
          ),
        )
      : [_0x647234.activeParagraph["bullet"].nestingLevel]
    ).forEach((_0x47fb64) => {
      (b(_0x647234.listData, _0x47fb64),
        (_0x647234.listData["nestingLevel"][_0x47fb64].glyphFormat =
          _0x3a4eca.prefix + "%" + (_0x47fb64 + 1) + _0x3a4eca.suffix));
    }),
    { nextDocumentData: _0x647234.nextDocumentData }
  );
}
function c(_0x172abe, _0x1608a4) {
  var _0xc90dc3, _0x5b12b8;
  let _0x445a6c = p(
      ((_0xc90dc3 = _0x172abe.body) == null
        ? undefined
        : _0xc90dc3.paragraphs) ?? [],
      _0x1608a4,
    ),
    _0x3a5184 = _0x445a6c == null ? undefined : _0x445a6c.bullet;
  if (!_0x3a5184) return false;
  let _0x21b541 =
    (_0x5b12b8 = _(_0x172abe, _0x3a5184.listType)) == null ||
    (_0x5b12b8 = _0x5b12b8.nestingLevel) == null
      ? undefined
      : _0x5b12b8[_0x3a5184.nestingLevel];
  return !!(
    _0x21b541 &&
    _0x21b541.glyphType !== e.ListGlyphType["BULLET"] &&
    !_0x21b541.glyphSymbol
  );
}
function l(_0x3ae95e) {
  var _0x59f830;
  if (_0x3ae95e.restartFromPrevious) return u(_0x3ae95e);
  let _0x59b969 = x(_0x3ae95e.documentData),
    _0x5638a1 =
      ((_0x59f830 = _0x59b969.body) == null
        ? undefined
        : _0x59f830.paragraphs) ?? [],
    _0x2bcaa3 = p(_0x5638a1, _0x3ae95e.paragraphStartIndex);
  if (
    !(_0x2bcaa3 != null && _0x2bcaa3.bullet) ||
    !c(_0x59b969, _0x3ae95e.paragraphStartIndex)
  )
    return { nextDocumentData: _0x59b969 };
  let _0x52b50d = _(_0x59b969, _0x2bcaa3.bullet["listType"]);
  if (!_0x52b50d) return { nextDocumentData: _0x59b969 };
  let _0x53ae7d = v(_0x2bcaa3);
  ((_0x59b969.lists ??= {}),
    (_0x59b969.lists[_0x53ae7d] = e.Tools["deepClone"](_0x52b50d)),
    (_0x59b969.lists[_0x53ae7d].listType = _0x53ae7d));
  let _0x582712 = _0x2bcaa3.bullet["nestingLevel"];
  (b(_0x59b969.lists[_0x53ae7d], _0x582712),
    (_0x59b969.lists[_0x53ae7d].nestingLevel[_0x582712].startNumber =
      Math.max(1, _0x3ae95e.startNumber) - 1));
  let _0x5aef4e = y(_0x2bcaa3);
  return (
    h(_0x5638a1, _0x2bcaa3).forEach((_0x5dce9c) => {
      _0x5dce9c.bullet &&
        ((_0x5dce9c.bullet["listId"] = _0x5aef4e),
        (_0x5dce9c.bullet["listType"] = _0x53ae7d));
    }),
    { nextDocumentData: _0x59b969 }
  );
}
function u(_0x288306) {
  var _0x4109b6;
  let _0xcc6ad4 = x(_0x288306.documentData),
    _0x3caf28 =
      ((_0x4109b6 = _0xcc6ad4.body) == null
        ? undefined
        : _0x4109b6.paragraphs) ?? [],
    _0x1036fb = p(_0x3caf28, _0x288306.paragraphStartIndex);
  if (
    !(_0x1036fb != null && _0x1036fb.bullet) ||
    !c(_0xcc6ad4, _0x288306.paragraphStartIndex)
  )
    return { nextDocumentData: _0xcc6ad4 };
  let _0x57c4f5 = g(_0xcc6ad4, _0x1036fb);
  return (
    !(_0x57c4f5 != null && _0x57c4f5.bullet) ||
      _0x57c4f5.bullet["listId"] === _0x1036fb.bullet["listId"] ||
      h(_0x3caf28, _0x1036fb).forEach((_0x1c7d99) => {
        _0x1c7d99.bullet &&
          ((_0x1c7d99.bullet["listId"] = _0x57c4f5.bullet["listId"]),
          (_0x1c7d99.bullet["listType"] = _0x57c4f5.bullet["listType"]));
      }),
    { nextDocumentData: _0xcc6ad4 }
  );
}
function d(_0x53a2a5) {
  var _0x8a30de;
  let _0x3414a0 = x(_0x53a2a5.documentData),
    _0x53926d =
      ((_0x8a30de = _0x3414a0.body) == null
        ? undefined
        : _0x8a30de.paragraphs) ?? [],
    _0xb821d9 = p(_0x53926d, _0x53a2a5.paragraphStartIndex);
  if (!(_0xb821d9 != null && _0xb821d9.bullet))
    return { nextDocumentData: _0x3414a0 };
  let _0x3eca52 = _(_0x3414a0, _0xb821d9.bullet["listType"]);
  return (
    m(_0x53926d, _0xb821d9, _0x53a2a5.mode).forEach((_0x1f1e43) => {
      if (!_0x1f1e43.bullet) return;
      let _0x5ba10e = Math.max(
        0,
        Math.min(8, _0x1f1e43.bullet["nestingLevel"] + _0x53a2a5.delta),
      );
      _0x5ba10e !== _0x1f1e43.bullet["nestingLevel"] &&
        (_0x3eca52 && b(_0x3eca52, _0x5ba10e),
        (_0x1f1e43.bullet["nestingLevel"] = _0x5ba10e));
    }),
    { nextDocumentData: _0x3414a0 }
  );
}
function f(_0x1e0a97, _0x391566, _0x106871) {
  var _0x155ca3;
  let _0x520e32 = x(_0x1e0a97),
    _0x4eaa07 =
      ((_0x155ca3 = _0x520e32.body) == null
        ? undefined
        : _0x155ca3.paragraphs) ?? [],
    _0x1bc0f1 = p(_0x4eaa07, _0x391566);
  if (!(_0x1bc0f1 != null && _0x1bc0f1.bullet))
    throw Error("[DocsList]: List paragraph is not found.");
  let _0x346ea9 = v(_0x1bc0f1),
    _0x1d069e = _(_0x520e32, _0x1bc0f1.bullet["listType"]);
  if (!_0x1d069e)
    throw Error(
      "[DocsList]:\x20List\x20type\x20" +
        _0x1bc0f1.bullet["listType"] +
        "\x20is\x20not\x20found.",
    );
  ((_0x520e32.lists ??= {}),
    (_0x520e32.lists[_0x346ea9] = e.Tools["deepClone"](_0x1d069e)),
    (_0x520e32.lists[_0x346ea9].listType = _0x346ea9));
  let _0x28d4ee = m(_0x4eaa07, _0x1bc0f1, _0x106871);
  _0x28d4ee.forEach((_0x42a780) => {
    _0x42a780.bullet && (_0x42a780.bullet["listType"] = _0x346ea9);
  });
  let _0x18acd5 = _0x520e32.lists[_0x346ea9],
    _0x3e563c = _0x1bc0f1.bullet["nestingLevel"];
  return (
    b(_0x18acd5, _0x3e563c),
    {
      nextDocumentData: _0x520e32,
      paragraphs: _0x28d4ee,
      activeParagraph: _0x1bc0f1,
      listData: _0x18acd5,
      level: _0x18acd5.nestingLevel[_0x3e563c],
    }
  );
}
function p(_0x42c7b8, _0x391dce) {
  return _0x42c7b8.find(
    (_0x57e2d7) => _0x57e2d7.startIndex === _0x391dce && _0x57e2d7.bullet,
  );
}
function m(_0x12b197, _0x55b591, _0x168c49) {
  let _0x2f802c = _0x55b591.bullet;
  return _0x2f802c
    ? _0x168c49 === "item"
      ? [_0x55b591]
      : _0x12b197.filter((_0x50890f) => {
          let _0x45de0f = _0x50890f.bullet;
          return !_0x45de0f || _0x45de0f.listId !== _0x2f802c.listId
            ? false
            : _0x168c49 === "list" ||
                _0x45de0f.nestingLevel === _0x2f802c.nestingLevel;
        })
    : [];
}
function h(_0x4978f6, _0xb22651) {
  let _0xa1eea9 = _0xb22651.bullet,
    _0xf1ca8f = _0x4978f6.indexOf(_0xb22651);
  if (!_0xa1eea9 || _0xf1ca8f < 0) return [];
  let _0x55fc89 = [];
  for (let _0x3b34c0 = _0xf1ca8f; _0x3b34c0 < _0x4978f6.length; _0x3b34c0++) {
    let _0x24ccf1 = _0x4978f6[_0x3b34c0],
      _0x422407 = _0x24ccf1.bullet;
    if (_0x422407) {
      if (
        _0x422407.listId !== _0xa1eea9.listId ||
        _0x422407.nestingLevel < _0xa1eea9.nestingLevel
      )
        break;
      _0x55fc89.push(_0x24ccf1);
    }
  }
  return _0x55fc89;
}
function g(_0xac491, _0x330958) {
  var _0x48c479;
  let _0x571ec7 =
      ((_0x48c479 = _0xac491.body) == null
        ? undefined
        : _0x48c479.paragraphs) ?? [],
    _0x1789d8 = _0x571ec7.indexOf(_0x330958),
    _0x1a4704 = _0x330958.bullet;
  if (!(!_0x1a4704 || _0x1789d8 <= 0))
    for (let _0x26843a = _0x1789d8 - 1; _0x26843a >= 0; _0x26843a--) {
      let _0x4fa542 = _0x571ec7[_0x26843a],
        _0x2cc2d9 = _0x4fa542.bullet;
      if (
        _0x2cc2d9 &&
        _0x2cc2d9.nestingLevel === _0x1a4704.nestingLevel &&
        c(_0xac491, _0x4fa542.startIndex)
      )
        return _0x4fa542;
    }
}
function _(_0x2540c0, _0x3bca1a) {
  var _0x1ac26b;
  return (
    ((_0x1ac26b = _0x2540c0.lists) == null
      ? undefined
      : _0x1ac26b[_0x3bca1a]) ?? e.PRESET_LIST_TYPE[_0x3bca1a]
  );
}
function v(_0x4c8a02) {
  return (
    "CUSTOM_LIST_" + _0x4c8a02.bullet["listId"] + "_" + _0x4c8a02.startIndex
  );
}
function y(_0x6ad72c) {
  return (
    "RESTART_LIST_" + _0x6ad72c.bullet["listId"] + "_" + _0x6ad72c.startIndex
  );
}
function b(_0xf77c, _0x577a98) {
  let _0x3fdd67 = _0xf77c.nestingLevel[_0xf77c.nestingLevel["length"] - 1];
  for (; _0xf77c.nestingLevel["length"] <= _0x577a98;)
    _0xf77c.nestingLevel["push"](e.Tools["deepClone"](_0x3fdd67));
}
function x(_0x43a138) {
  var _0x44d889;
  return {
    ..._0x43a138,
    body: _0x43a138.body
      ? {
          ..._0x43a138.body,
          paragraphs:
            (_0x44d889 = _0x43a138.body["paragraphs"]) == null
              ? undefined
              : _0x44d889.map((_0x43c094) => ({
                  ..._0x43c094,
                  bullet: S(_0x43c094.bullet),
                  paragraphStyle: S(_0x43c094.paragraphStyle),
                })),
        }
      : _0x43a138.body,
    lists: _0x43a138.lists
      ? Object.fromEntries(
          Object.entries(_0x43a138.lists).map(([_0x395a93, _0x203e07]) => [
            _0x395a93,
            e.Tools["deepClone"](_0x203e07),
          ]),
        )
      : _0x43a138.lists,
  };
}
function S(_0x3c0d88) {
  return Array.isArray(_0x3c0d88)
    ? _0x3c0d88.map((_0x5e91a8) => S(_0x5e91a8))
    : !_0x3c0d88 || typeof _0x3c0d88 != "object"
      ? _0x3c0d88
      : Object.fromEntries(
          Object.entries(_0x3c0d88).map(([_0x3860ab, _0x13e1d2]) => [
            _0x3860ab,
            S(_0x13e1d2),
          ]),
        );
}
const C = {
    id: "docs-list.command.insert",
    type: e.CommandType["COMMAND"],
    handler: (_0x5617c4, _0x1153fc) => {
      var _0x1ef1ea;
      if (!_0x1153fc) return false;
      let {
          unitId: _0x3fde65,
          listType: _0x2f87b5,
          listId: _0x135fec,
          segmentId: _0x5e6c7a = "",
        } = _0x1153fc,
        _0x55c25b = M(_0x5617c4, _0x3fde65);
      if (!_0x55c25b) return false;
      let _0x5bc81 =
        (_0x1ef1ea = _0x55c25b.getSelfOrHeaderFooterModel(_0x5e6c7a)) == null
          ? undefined
          : _0x1ef1ea.getBody();
      if (!_0x5bc81) return false;
      let { dataStream: _0x590830 = "", paragraphs: _0x4262c5 = [] } = _0x5bc81,
        _0x4c7a95 = N(_0x5617c4, _0x1153fc);
      if (!_0x4262c5.length || _0x4c7a95.length === 0) return false;
      let _0x427134 = e.BuildTextUtils["range"].getParagraphsInRanges(
          _0x4c7a95,
          _0x4262c5,
          _0x590830,
        ),
        _0x255c45 = e.BuildTextUtils["paragraph"].bullet["set"]({
          paragraphs: _0x427134,
          listType: _0x2f87b5,
          listId: _0x135fec,
          document: _0x55c25b,
          segmentId: _0x5e6c7a,
        });
      if (!_0x255c45) return false;
      let _0x8f7fff = e.JSONX["getInstance"]().editOp(
        _0x255c45.serialize(),
        P(_0x55c25b, _0x5e6c7a),
      );
      return !!_0x5617c4
        .get(e.ICommandService)
        .syncExecuteCommand(t.RichTextEditingMutation["id"], {
          unitId: _0x55c25b.getUnitId(),
          actions: _0x8f7fff,
          textRanges: _0x4c7a95,
          isEditing: false,
        });
    },
  },
  w = {
    id: "docs-list.command.select",
    type: e.CommandType["COMMAND"],
    handler: (_0x5e39d1, _0x4e9196) => {
      if (!_0x4e9196) return false;
      let _0x2ea5e8 = M(_0x5e39d1, _0x4e9196.unitId);
      if (!_0x2ea5e8) return false;
      let _0x5c04e1 = i({
        documentData: _0x2ea5e8.getSnapshot(),
        paragraphStartIndex: _0x4e9196.paragraphStartIndex,
        mode: _0x4e9196.mode ?? "item",
        segmentId: _0x4e9196.segmentId,
      });
      return _0x5c04e1.length
        ? (_0x5e39d1
            .get(t.DocSelectionManagerService)
            .replaceDocRanges(
              _0x5c04e1,
              {
                unitId: _0x2ea5e8.getUnitId(),
                subUnitId: _0x2ea5e8.getUnitId(),
              },
              false,
              { forceFocus: true },
            ),
          true)
        : false;
    },
  },
  T = {
    id: "docs-list.command.set-glyph-type",
    type: e.CommandType["COMMAND"],
    handler: (_0xf006c0, _0x1addda) => j(_0xf006c0, _0x1addda, a),
  },
  E = {
    id: "docs-list.command.set-glyph-symbol",
    type: e.CommandType["COMMAND"],
    handler: (_0x2aaf14, _0x48f623) => j(_0x2aaf14, _0x48f623, o),
  },
  D = {
    id: "docs-list.command.set-prefix-suffix",
    type: e.CommandType["COMMAND"],
    handler: (_0x3a014f, _0x51164a) => j(_0x3a014f, _0x51164a, s),
  },
  O = {
    id: "docs-list.command.set-start-number",
    type: e.CommandType["COMMAND"],
    handler: (_0x464de2, _0x411c66) => j(_0x464de2, _0x411c66, l),
  },
  k = {
    id: "docs-list.command.promote",
    type: e.CommandType["COMMAND"],
    handler: (_0x395920, _0x578d78) =>
      j(_0x395920, _0x578d78 && { ..._0x578d78, delta: -1 }, d),
  },
  A = {
    id: "docs-list.command.demote",
    type: e.CommandType["COMMAND"],
    handler: (_0x4c4d04, _0x27389d) =>
      j(_0x4c4d04, _0x27389d && { ..._0x27389d, delta: 1 }, d),
  };
function j(_0x330b45, _0x1b8f5b, _0xd82728) {
  if (!_0x1b8f5b) return false;
  let _0x2e4f9b = M(_0x330b45, _0x1b8f5b.unitId);
  if (!_0x2e4f9b) return false;
  let _0x2388e6 = _0x2e4f9b.getSnapshot(),
    _0xde55aa = _0x1b8f5b.mode ?? "list",
    _0xa1be07 = F(
      _0x2388e6,
      _0xd82728({ ..._0x1b8f5b, documentData: _0x2388e6, mode: _0xde55aa })
        .nextDocumentData,
    );
  return _0xa1be07
    ? !!_0x330b45
        .get(e.ICommandService)
        .syncExecuteCommand(t.RichTextEditingMutation["id"], {
          unitId: _0x2e4f9b.getUnitId(),
          actions: _0xa1be07,
          textRanges: null,
          isEditing: false,
          noNeedSetTextRange: true,
        })
    : false;
}
function M(_0x26b365, _0x49b956) {
  let _0x2a0e37 = _0x26b365.get(e.IUniverInstanceService);
  return _0x49b956
    ? (_0x2a0e37.getUnit(_0x49b956, e.UniverInstanceType["UNIVER_DOC"]) ?? null)
    : (_0x2a0e37.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]) ??
        null);
}
function N(_0x34fdd4, _0x10579c) {
  if (_0x10579c.startOffset != null || _0x10579c.endOffset != null) {
    let _0x4677c3 = _0x10579c.startOffset ?? _0x10579c.endOffset ?? 0,
      _0x231eee = _0x10579c.endOffset ?? _0x4677c3;
    return [
      {
        startOffset: _0x4677c3,
        endOffset: _0x231eee,
        collapsed: _0x4677c3 === _0x231eee,
        rangeType: e.DOC_RANGE_TYPE["TEXT"],
        segmentId: _0x10579c.segmentId ?? "",
        style: null,
      },
    ];
  }
  return _0x34fdd4.get(t.DocSelectionManagerService).getDocRanges() ?? [];
}
function P(_0x944717, _0x32174c = "") {
  if (!_0x32174c) return ["body"];
  let { headers: _0x45348c, footers: _0x681fe4 } = _0x944717.getSnapshot();
  if ((_0x45348c == null ? undefined : _0x45348c[_0x32174c]) != null)
    return ["headers", _0x32174c, "body"];
  if ((_0x681fe4 == null ? undefined : _0x681fe4[_0x32174c]) != null)
    return ["footers", _0x32174c, "body"];
  throw Error("Segment id not found in headers or footers");
}
function F(_0x1c40df, _0x4596ea) {
  var _0x3ec001, _0x37d2e5;
  let _0x25665c = [];
  return (
    I(
      e.JSONX["getInstance"](),
      ["body", "paragraphs"],
      (_0x3ec001 = _0x1c40df.body) == null ? undefined : _0x3ec001.paragraphs,
      (_0x37d2e5 = _0x4596ea.body) == null ? undefined : _0x37d2e5.paragraphs,
      _0x25665c,
    ),
    I(
      e.JSONX["getInstance"](),
      ["lists"],
      _0x1c40df.lists,
      _0x4596ea.lists,
      _0x25665c,
    ),
    _0x25665c.reduce(
      (_0x548508, _0xfdb151) => e.JSONX["compose"](_0x548508, _0xfdb151),
      null,
    )
  );
}
function I(_0x5beb2d, _0x3c9ac6, _0x199e7e, _0xcba881, _0x30eebd) {
  if (!z(_0x199e7e, _0xcba881)) {
    if (_0x199e7e == null) {
      _0x30eebd.push(_0x5beb2d.insertOp(_0x3c9ac6, _0xcba881));
      return;
    }
    if (_0xcba881 == null) {
      _0x30eebd.push(_0x5beb2d.removeOp(_0x3c9ac6, _0x199e7e));
      return;
    }
    if (Array.isArray(_0x199e7e) && Array.isArray(_0xcba881)) {
      L(_0x5beb2d, _0x3c9ac6, _0x199e7e, _0xcba881, _0x30eebd);
      return;
    }
    if (R(_0x199e7e) && R(_0xcba881)) {
      new Set([...Object.keys(_0x199e7e), ...Object.keys(_0xcba881)]).forEach(
        (_0x3cf0c6) => {
          I(
            _0x5beb2d,
            [..._0x3c9ac6, _0x3cf0c6],
            _0x199e7e[_0x3cf0c6],
            _0xcba881[_0x3cf0c6],
            _0x30eebd,
          );
        },
      );
      return;
    }
    _0x30eebd.push(_0x5beb2d.replaceOp(_0x3c9ac6, _0x199e7e, _0xcba881));
  }
}
function L(_0x43fb01, _0x529dcc, _0x20288d, _0x4443ce, _0x1330f4) {
  if (_0x20288d.length === _0x4443ce.length) {
    _0x20288d.forEach((_0x533cd2, _0x126e51) =>
      I(
        _0x43fb01,
        [..._0x529dcc, _0x126e51],
        _0x533cd2,
        _0x4443ce[_0x126e51],
        _0x1330f4,
      ),
    );
    return;
  }
  let _0x496e2c = 0;
  for (
    ;
    _0x496e2c < _0x20288d.length &&
    _0x496e2c < _0x4443ce.length &&
    z(_0x20288d[_0x496e2c], _0x4443ce[_0x496e2c]);
  )
    _0x496e2c++;
  let _0x14eae5 = _0x20288d.length - 1,
    _0x102f09 = _0x4443ce.length - 1;
  for (
    ;
    _0x14eae5 >= _0x496e2c &&
    _0x102f09 >= _0x496e2c &&
    z(_0x20288d[_0x14eae5], _0x4443ce[_0x102f09]);
  )
    (_0x14eae5--, _0x102f09--);
  for (let _0x3d7e05 = _0x14eae5; _0x3d7e05 >= _0x496e2c; _0x3d7e05--)
    _0x1330f4.push(
      _0x43fb01.removeOp([..._0x529dcc, _0x3d7e05], _0x20288d[_0x3d7e05]),
    );
  for (let _0x589954 = _0x496e2c; _0x589954 <= _0x102f09; _0x589954++)
    _0x1330f4.push(
      _0x43fb01.insertOp([..._0x529dcc, _0x589954], _0x4443ce[_0x589954]),
    );
}
function R(_0x3b0cc5) {
  return (
    typeof _0x3b0cc5 == "object" && !!_0x3b0cc5 && !Array.isArray(_0x3b0cc5)
  );
}
function z(_0x5f5468, _0x8617f0) {
  return JSON.stringify(_0x5f5468) === JSON.stringify(_0x8617f0);
}
const B = "DOCS_LIST_PLUGIN",
  V =
    "࿁,o,O,ଠ,൦,ᆼ,౦,🔴,॰,∘,੦,໐,0,࿀,ᄋ,೦,૦,〇,०,ཕ,↤,↥,↦,↧,↨,↩,↪,↫,↬,↭,↮,↯,↰,↱,↲,↳,↴,↵,↶,↷,↸,↹,↺,↻,↼,↽,↾,↿,⇀,⇁,⇂,⇃,⇄,⇅,⇆,⇇,⇈,⇉,⇊,⇋,⇌,⇍,⇎,⇏,⇐,⇑,⇒,⇓,⇔,⇕,⇖,⇗,⇘,⇙,⇚,⇛,⇜,⇝,⇞,⇟,⇠,⇡,⇢,⇣,⇤,⇥,⇦,⇧,⇨,⇩,⇪,⇫,⇬,⇭,⇮,⇯,⇰,⇱,⇲,⇳,⇴,⇵,⇶,⇷,⇸,⇹,⇺,⇻,⇼,⇽,⇾,⇿,⍅,⍆,⍇,⍈,⍏,⍐,⍖,⍗,⏩,⏪,⏫,⏬,⏭,⏮,⏯,➔,➘,➙,➚,➛,➜,➝,➞,➟,➠,➡,➢,➣,➤,➥,➦,➧,➨,➩,➪,➫,➬,➭,➮,➯,➱,➲,➳,➴,➵,➶,➷,➸,➹,➺,➻,➼,➽,➾,⟰,⟱,⟲,⟳,⟴,⟵,⟶,⟷,⟸,⟹,⟺,⟻,⟼,⟽,⟾,⟿,⤀,⤁,⤂,⤃,⤄,⤅,⤆,⤇,⤈,⤉,⤊,⤋,⤌,⤍,⤎,⤏,⤐,⤑,⤒,⤓,⤔,⤕,⤖,⤗,⤘,⤝,⤞,⤟,⤠,⤡,⤢,⤣,⤤,⤥,⤦,⤧,⤨,⤩,⤪,⤭,⤮,⤯,⤰,⤱,⤲,⤳,⤴,⤵,⤶,⤷,⤸,⤹,⤺,⤻,⤼,⤽,⤾,⤿,⥀,⥁,⥂,⥃,⥄,⥅,⥆,⥇,⥈,⥉,⥊,⥋,⥌,⥍,⥎,⥏,⥐,⥑,⥒,⥓,⥔,⥕,⥖,⥗,⥘,⥙,⥚,⥛,⥜,⥝,⥞,⥟,⥠,⥡,⥢,⥣,⥤,⥥,⥦,⥧,⥨,⥩,⥪,⥫,⥬,⥭,⥮,⥯,⥱,⥲,⥳,⥴,⥵,⥶,⥷,⥸,⥹,⥺,⥻,⦽,⧪,⧫,⧬,⧭,⬀,⬁,⬂,⬃,⬄,⬅,⬆,⬇,⬈,⬉,⬊,⬋,⬌,⬍,⬎,⬏,⬐,⬑,⬰,⬱,⬲,⬳,⬴,⬵,⬶,⬷,⬸,⬹,⬺,⬻,⬼,⬽,⬾,⬿,⭀,⭁,⭂,⭃,⭄,⭅,⭆,⭇,⭈,⭉,⭊,⭋,⭌,🔀,🔁,🔂,🔃,🔄,🔙,🔚,🔛,🔜,🔝,🔺,🔻,🔼,🔽,￩,￪,￫,￬,͍,͎,͐,͑,͒,͓,͔,͕,͖,͢,᷾,᷿,⃔,⃕,⃖,⃗,ꜛ,ꜜ"[
      "split"
    ](",");
var H = "@univerjs-pro/docs-list",
  U = "1.0.0-insiders.20260907-70fc579";
const W = {};
function G(_0x15fc1d, _0x45044d) {
  return function (_0x2d18c1, _0xcf7264) {
    _0x45044d(_0x2d18c1, _0xcf7264, _0x15fc1d);
  };
}
function K(_0x4a25b2, _0x1e6f74, _0x2557a7, _0xdfad90) {
  var _0x349a6c = arguments.length,
    _0x178a81 =
      _0x349a6c < 3
        ? _0x1e6f74
        : _0xdfad90 === null
          ? (_0xdfad90 = Object.getOwnPropertyDescriptor(_0x1e6f74, _0x2557a7))
          : _0xdfad90,
    _0x4ffe14;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x178a81 = Reflect.decorate(_0x4a25b2, _0x1e6f74, _0x2557a7, _0xdfad90);
  else {
    for (var _0x282bec = _0x4a25b2.length - 1; _0x282bec >= 0; _0x282bec--)
      (_0x4ffe14 = _0x4a25b2[_0x282bec]) &&
        (_0x178a81 =
          (_0x349a6c < 3
            ? _0x4ffe14(_0x178a81)
            : _0x349a6c > 3
              ? _0x4ffe14(_0x1e6f74, _0x2557a7, _0x178a81)
              : _0x4ffe14(_0x1e6f74, _0x2557a7)) || _0x178a81);
  }
  return (
    _0x349a6c > 3 &&
      _0x178a81 &&
      Object.defineProperty(_0x1e6f74, _0x2557a7, _0x178a81),
    _0x178a81
  );
}
function q(_0x518fbe) {
  "@babel/helpers - typeof";
  return (
    (q =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x21e094) {
            return typeof _0x21e094;
          }
        : function (_0x584bfc) {
            return _0x584bfc &&
              typeof Symbol == "function" &&
              _0x584bfc.constructor === Symbol &&
              _0x584bfc !== Symbol.prototype
              ? "symbol"
              : typeof _0x584bfc;
          }),
    q(_0x518fbe)
  );
}
function J(_0x4adbdb, _0x40ab1b) {
  if (q(_0x4adbdb) != "object" || !_0x4adbdb) return _0x4adbdb;
  var _0x48cae7 = _0x4adbdb[Symbol.toPrimitive];
  if (_0x48cae7 !== undefined) {
    var _0x252e03 = _0x48cae7.call(_0x4adbdb, _0x40ab1b || "default");
    if (q(_0x252e03) != "object") return _0x252e03;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x40ab1b === "string" ? String : Number)(_0x4adbdb);
}
function Y(_0x1392d5) {
  var _0x571908 = J(_0x1392d5, "string");
  return q(_0x571908) == "symbol" ? _0x571908 : _0x571908 + "";
}
function X(_0x4db278, _0x1332ea, _0x35b3ec) {
  return (
    (_0x1332ea = Y(_0x1332ea)) in _0x4db278
      ? Object.defineProperty(_0x4db278, _0x1332ea, {
          value: _0x35b3ec,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4db278[_0x1332ea] = _0x35b3ec),
    _0x4db278
  );
}
let Z = class extends e.Plugin {
  constructor(_0x3f7c4a = W, _0x5ac922, _0x2dd1c5, _0x21eb60) {
    (super(),
      (this._config = _0x3f7c4a),
      (this._injector = _0x5ac922),
      (this._commandService = _0x2dd1c5),
      (this._configService = _0x21eb60));
    let { ..._0x7ba36c } = (0, e.merge)({}, W, this._config);
    this._configService["setConfig"]("docs-list.config", _0x7ba36c);
  }
  onStarting() {
    [A, C, k, w, E, T, D, O].forEach((_0xc237d2) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0xc237d2)),
    );
  }
};
(X(Z, "pluginName", B),
  X(Z, "packageName", H),
  X(Z, "version", U),
  X(Z, "type", e.UniverInstanceType["UNIVER_DOC"]),
  (Z = K(
    [
      (0, e.DependentOn)(n.UniverLicensePlugin, t.UniverDocsPlugin),
      G(1, (0, e.Inject)(e.Injector)),
      G(2, e.ICommandService),
      G(3, e.IConfigService),
    ],
    Z,
  )),
  (exports.DOCS_LIST_MORE_BULLETS = V),
  (exports.DOCS_LIST_PLUGIN = B),
  (exports.DocsListDemoteCommand = A),
  (exports.DocsListInsertCommand = C),
  (exports.DocsListPromoteCommand = k),
  (exports.DocsListSelectCommand = w),
  (exports.DocsListSelectionMode = r),
  (exports.DocsListSetGlyphSymbolCommand = E),
  (exports.DocsListSetGlyphTypeCommand = T),
  (exports.DocsListSetPrefixSuffixCommand = D),
  (exports.DocsListSetStartNumberCommand = O),
  Object.defineProperty(exports, "UniverDocsListPlugin", {
    enumerable: true,
    get: function () {
      return Z;
    },
  }));
