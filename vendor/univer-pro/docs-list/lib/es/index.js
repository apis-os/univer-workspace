import {
  BuildTextUtils as _0x5aa6ad,
  CommandType as _0x2bf5ad,
  DOC_RANGE_TYPE as _0x5dc1c7,
  DependentOn as _0x5a1db3,
  ICommandService as _0xe63e05,
  IConfigService as _0x50e058,
  IUniverInstanceService as _0x51ca50,
  Inject as _0xb620ac,
  Injector as _0x4bbd16,
  JSONX as _0x42f9e1,
  ListGlyphType as _0x2a3ea0,
  PRESET_LIST_TYPE as _0x57c1c1,
  Plugin as _0x5c6d71,
  Tools as _0x31485c,
  UniverInstanceType as _0x32da39,
  getParagraphContentStartOffset as _0x60a1ac,
  getParagraphContentStartOffsets as _0x4c9862,
  merge as _0x5cbd81,
} from "@univerjs/core";
import {
  DocSelectionManagerService as _0xa7ae46,
  RichTextEditingMutation as _0x195566,
  UniverDocsPlugin as _0x531243,
} from "@univerjs/docs";
import { UniverLicensePlugin as _0x58ef7f } from "@univerjs-pro/license";
let te = (function (_0x1b07b8) {
  return (
    (_0x1b07b8.Item = "item"),
    (_0x1b07b8.Level = "level"),
    (_0x1b07b8.List = "list"),
    _0x1b07b8
  );
})({});
function ne(_0x4e57be) {
  let _0x3526fa = _0x4e57be.documentData["body"],
    _0x1f1d51 = (_0x3526fa == null ? undefined : _0x3526fa.paragraphs) ?? [],
    _0x15b94c = w(_0x1f1d51, _0x4e57be.paragraphStartIndex);
  if (!_0x3526fa || !(_0x15b94c != null && _0x15b94c.bullet)) return [];
  let _0x3118ed = _0x4c9862(_0x3526fa);
  return T(_0x1f1d51, _0x15b94c, _0x4e57be.mode).map((_0x428c37) => ({
    startOffset:
      _0x3118ed.get(_0x428c37.startIndex) ?? _0x60a1ac(_0x3526fa, _0x428c37),
    endOffset: _0x428c37.startIndex,
    collapsed: false,
    rangeType: _0x5dc1c7.TEXT,
    segmentId: _0x4e57be.segmentId ?? "",
  }));
}
function re(_0x7d3513) {
  let _0x26002b = C(
    _0x7d3513.documentData,
    _0x7d3513.paragraphStartIndex,
    _0x7d3513.mode ?? "list",
  );
  return (
    (_0x26002b.level["glyphType"] = _0x7d3513.glyphType),
    delete _0x26002b.level["glyphSymbol"],
    { nextDocumentData: _0x26002b.nextDocumentData }
  );
}
function ie(_0x1e3874) {
  let _0x5ba41a = C(
    _0x1e3874.documentData,
    _0x1e3874.paragraphStartIndex,
    _0x1e3874.mode ?? "list",
  );
  return (
    (_0x5ba41a.level["glyphType"] = _0x2a3ea0.BULLET),
    (_0x5ba41a.level["glyphSymbol"] = _0x1e3874.symbol),
    { nextDocumentData: _0x5ba41a.nextDocumentData }
  );
}
function ae(_0x363b7c) {
  if (!x(_0x363b7c.documentData, _0x363b7c.paragraphStartIndex))
    return { nextDocumentData: A(_0x363b7c.documentData) };
  let _0x9028ac = C(
    _0x363b7c.documentData,
    _0x363b7c.paragraphStartIndex,
    _0x363b7c.mode ?? "list",
  );
  return (
    (_0x363b7c.mode === "list"
      ? Array.from(
          new Set(
            _0x9028ac.paragraphs["map"]((_0x3de527) => {
              var _0x4e58e8;
              return (_0x4e58e8 = _0x3de527.bullet) == null
                ? undefined
                : _0x4e58e8.nestingLevel;
            }).filter((_0x106916) => _0x106916 != null),
          ),
        )
      : [_0x9028ac.activeParagraph["bullet"].nestingLevel]
    ).forEach((_0x505348) => {
      (k(_0x9028ac.listData, _0x505348),
        (_0x9028ac.listData["nestingLevel"][_0x505348].glyphFormat =
          _0x363b7c.prefix + "%" + (_0x505348 + 1) + _0x363b7c.suffix));
    }),
    { nextDocumentData: _0x9028ac.nextDocumentData }
  );
}
function x(_0x4afb4b, _0x3af670) {
  var _0x245ab5, _0x1358d2;
  let _0x1ff863 = w(
      ((_0x245ab5 = _0x4afb4b.body) == null
        ? undefined
        : _0x245ab5.paragraphs) ?? [],
      _0x3af670,
    ),
    _0x1c6802 = _0x1ff863 == null ? undefined : _0x1ff863.bullet;
  if (!_0x1c6802) return false;
  let _0x3e4b87 =
    (_0x1358d2 = D(_0x4afb4b, _0x1c6802.listType)) == null ||
    (_0x1358d2 = _0x1358d2.nestingLevel) == null
      ? undefined
      : _0x1358d2[_0x1c6802.nestingLevel];
  return !!(
    _0x3e4b87 &&
    _0x3e4b87.glyphType !== _0x2a3ea0.BULLET &&
    !_0x3e4b87.glyphSymbol
  );
}
function oe(_0x181cb1) {
  var _0x1611f1;
  if (_0x181cb1.restartFromPrevious) return se(_0x181cb1);
  let _0x1f6777 = A(_0x181cb1.documentData),
    _0x2e694f =
      ((_0x1611f1 = _0x1f6777.body) == null
        ? undefined
        : _0x1611f1.paragraphs) ?? [],
    _0x13ea77 = w(_0x2e694f, _0x181cb1.paragraphStartIndex);
  if (
    !(_0x13ea77 != null && _0x13ea77.bullet) ||
    !x(_0x1f6777, _0x181cb1.paragraphStartIndex)
  )
    return { nextDocumentData: _0x1f6777 };
  let _0x24015d = D(_0x1f6777, _0x13ea77.bullet["listType"]);
  if (!_0x24015d) return { nextDocumentData: _0x1f6777 };
  let _0x212c77 = O(_0x13ea77);
  ((_0x1f6777.lists ??= {}),
    (_0x1f6777.lists[_0x212c77] = _0x31485c.deepClone(_0x24015d)),
    (_0x1f6777.lists[_0x212c77].listType = _0x212c77));
  let _0x12cfb6 = _0x13ea77.bullet["nestingLevel"];
  (k(_0x1f6777.lists[_0x212c77], _0x12cfb6),
    (_0x1f6777.lists[_0x212c77].nestingLevel[_0x12cfb6].startNumber =
      Math.max(1, _0x181cb1.startNumber) - 1));
  let _0x5e85d6 = le(_0x13ea77);
  return (
    E(_0x2e694f, _0x13ea77).forEach((_0x5f285e) => {
      _0x5f285e.bullet &&
        ((_0x5f285e.bullet["listId"] = _0x5e85d6),
        (_0x5f285e.bullet["listType"] = _0x212c77));
    }),
    { nextDocumentData: _0x1f6777 }
  );
}
function se(_0x43531b) {
  var _0x4ebcab;
  let _0x3cf9fc = A(_0x43531b.documentData),
    _0x1bbc42 =
      ((_0x4ebcab = _0x3cf9fc.body) == null
        ? undefined
        : _0x4ebcab.paragraphs) ?? [],
    _0x412511 = w(_0x1bbc42, _0x43531b.paragraphStartIndex);
  if (
    !(_0x412511 != null && _0x412511.bullet) ||
    !x(_0x3cf9fc, _0x43531b.paragraphStartIndex)
  )
    return { nextDocumentData: _0x3cf9fc };
  let _0x80544e = ce(_0x3cf9fc, _0x412511);
  return (
    !(_0x80544e != null && _0x80544e.bullet) ||
      _0x80544e.bullet["listId"] === _0x412511.bullet["listId"] ||
      E(_0x1bbc42, _0x412511).forEach((_0xc41f2a) => {
        _0xc41f2a.bullet &&
          ((_0xc41f2a.bullet["listId"] = _0x80544e.bullet["listId"]),
          (_0xc41f2a.bullet["listType"] = _0x80544e.bullet["listType"]));
      }),
    { nextDocumentData: _0x3cf9fc }
  );
}
function S(_0x2cb02f) {
  var _0x3c0dee;
  let _0x498e94 = A(_0x2cb02f.documentData),
    _0xc4a248 =
      ((_0x3c0dee = _0x498e94.body) == null
        ? undefined
        : _0x3c0dee.paragraphs) ?? [],
    _0x96fc0 = w(_0xc4a248, _0x2cb02f.paragraphStartIndex);
  if (!(_0x96fc0 != null && _0x96fc0.bullet))
    return { nextDocumentData: _0x498e94 };
  let _0x1c7a3b = D(_0x498e94, _0x96fc0.bullet["listType"]);
  return (
    T(_0xc4a248, _0x96fc0, _0x2cb02f.mode).forEach((_0x196e79) => {
      if (!_0x196e79.bullet) return;
      let _0x4f220b = Math.max(
        0,
        Math.min(8, _0x196e79.bullet["nestingLevel"] + _0x2cb02f.delta),
      );
      _0x4f220b !== _0x196e79.bullet["nestingLevel"] &&
        (_0x1c7a3b && k(_0x1c7a3b, _0x4f220b),
        (_0x196e79.bullet["nestingLevel"] = _0x4f220b));
    }),
    { nextDocumentData: _0x498e94 }
  );
}
function C(_0x2794f1, _0x3575e2, _0x3b7b5f) {
  var _0x4bdbc6;
  let _0x408dc3 = A(_0x2794f1),
    _0xb322b2 =
      ((_0x4bdbc6 = _0x408dc3.body) == null
        ? undefined
        : _0x4bdbc6.paragraphs) ?? [],
    _0x1ea6b4 = w(_0xb322b2, _0x3575e2);
  if (!(_0x1ea6b4 != null && _0x1ea6b4.bullet))
    throw Error("[DocsList]: List paragraph is not found.");
  let _0x409f52 = O(_0x1ea6b4),
    _0x3dbb2e = D(_0x408dc3, _0x1ea6b4.bullet["listType"]);
  if (!_0x3dbb2e)
    throw Error(
      "[DocsList]: List type " +
        _0x1ea6b4.bullet["listType"] +
        " is not found.",
    );
  ((_0x408dc3.lists ??= {}),
    (_0x408dc3.lists[_0x409f52] = _0x31485c.deepClone(_0x3dbb2e)),
    (_0x408dc3.lists[_0x409f52].listType = _0x409f52));
  let _0x38b0c8 = T(_0xb322b2, _0x1ea6b4, _0x3b7b5f);
  _0x38b0c8.forEach((_0x196ad0) => {
    _0x196ad0.bullet && (_0x196ad0.bullet["listType"] = _0x409f52);
  });
  let _0x7e4ab1 = _0x408dc3.lists[_0x409f52],
    _0x141315 = _0x1ea6b4.bullet["nestingLevel"];
  return (
    k(_0x7e4ab1, _0x141315),
    {
      nextDocumentData: _0x408dc3,
      paragraphs: _0x38b0c8,
      activeParagraph: _0x1ea6b4,
      listData: _0x7e4ab1,
      level: _0x7e4ab1.nestingLevel[_0x141315],
    }
  );
}
function w(_0x1eb064, _0x19e861) {
  return _0x1eb064.find(
    (_0x4c2e8f) => _0x4c2e8f.startIndex === _0x19e861 && _0x4c2e8f.bullet,
  );
}
function T(_0x242d5f, _0x1fff95, _0x1c65f5) {
  let _0x1f24fa = _0x1fff95.bullet;
  return _0x1f24fa
    ? _0x1c65f5 === "item"
      ? [_0x1fff95]
      : _0x242d5f.filter((_0xb99f09) => {
          let _0x18932c = _0xb99f09.bullet;
          return !_0x18932c || _0x18932c.listId !== _0x1f24fa.listId
            ? false
            : _0x1c65f5 === "list" ||
                _0x18932c.nestingLevel === _0x1f24fa.nestingLevel;
        })
    : [];
}
function E(_0x4286c0, _0x4b7537) {
  let _0x13212a = _0x4b7537.bullet,
    _0x2efcb4 = _0x4286c0.indexOf(_0x4b7537);
  if (!_0x13212a || _0x2efcb4 < 0) return [];
  let _0x5049ef = [];
  for (let _0x4562c9 = _0x2efcb4; _0x4562c9 < _0x4286c0.length; _0x4562c9++) {
    let _0x20cd6f = _0x4286c0[_0x4562c9],
      _0x3770c5 = _0x20cd6f.bullet;
    if (_0x3770c5) {
      if (
        _0x3770c5.listId !== _0x13212a.listId ||
        _0x3770c5.nestingLevel < _0x13212a.nestingLevel
      )
        break;
      _0x5049ef.push(_0x20cd6f);
    }
  }
  return _0x5049ef;
}
function ce(_0x2d53e5, _0x27ec85) {
  var _0x107be1;
  let _0x500269 =
      ((_0x107be1 = _0x2d53e5.body) == null
        ? undefined
        : _0x107be1.paragraphs) ?? [],
    _0x41d03e = _0x500269.indexOf(_0x27ec85),
    _0x3f7c9d = _0x27ec85.bullet;
  if (!(!_0x3f7c9d || _0x41d03e <= 0))
    for (let _0x3fda3d = _0x41d03e - 1; _0x3fda3d >= 0; _0x3fda3d--) {
      let _0x4fd988 = _0x500269[_0x3fda3d],
        _0x4e71d7 = _0x4fd988.bullet;
      if (
        _0x4e71d7 &&
        _0x4e71d7.nestingLevel === _0x3f7c9d.nestingLevel &&
        x(_0x2d53e5, _0x4fd988.startIndex)
      )
        return _0x4fd988;
    }
}
function D(_0x1aada7, _0x5ae27b) {
  var _0x3c25ac;
  return (
    ((_0x3c25ac = _0x1aada7.lists) == null
      ? undefined
      : _0x3c25ac[_0x5ae27b]) ?? _0x57c1c1[_0x5ae27b]
  );
}
function O(_0x1e4169) {
  return (
    "CUSTOM_LIST_" + _0x1e4169.bullet["listId"] + "_" + _0x1e4169.startIndex
  );
}
function le(_0x4e3c90) {
  return (
    "RESTART_LIST_" + _0x4e3c90.bullet["listId"] + "_" + _0x4e3c90.startIndex
  );
}
function k(_0x2a4804, _0x3a34ba) {
  let _0x8ba65 = _0x2a4804.nestingLevel[_0x2a4804.nestingLevel["length"] - 1];
  for (; _0x2a4804.nestingLevel["length"] <= _0x3a34ba;)
    _0x2a4804.nestingLevel["push"](_0x31485c.deepClone(_0x8ba65));
}
function A(_0x3cc1c4) {
  var _0xf6f6a2;
  return {
    ..._0x3cc1c4,
    body: _0x3cc1c4.body
      ? {
          ..._0x3cc1c4.body,
          paragraphs:
            (_0xf6f6a2 = _0x3cc1c4.body["paragraphs"]) == null
              ? undefined
              : _0xf6f6a2.map((_0x2206e0) => ({
                  ..._0x2206e0,
                  bullet: j(_0x2206e0.bullet),
                  paragraphStyle: j(_0x2206e0.paragraphStyle),
                })),
        }
      : _0x3cc1c4.body,
    lists: _0x3cc1c4.lists
      ? Object.fromEntries(
          Object.entries(_0x3cc1c4.lists).map(([_0x4c713f, _0x5fb14a]) => [
            _0x4c713f,
            _0x31485c.deepClone(_0x5fb14a),
          ]),
        )
      : _0x3cc1c4.lists,
  };
}
function j(_0x8f4b04) {
  return Array.isArray(_0x8f4b04)
    ? _0x8f4b04.map((_0xd83470) => j(_0xd83470))
    : !_0x8f4b04 || typeof _0x8f4b04 != "object"
      ? _0x8f4b04
      : Object.fromEntries(
          Object.entries(_0x8f4b04).map(([_0x27232c, _0x1d51d2]) => [
            _0x27232c,
            j(_0x1d51d2),
          ]),
        );
}
const M = {
    id: "docs-list.command.insert",
    type: _0x2bf5ad.COMMAND,
    handler: (_0x522d61, _0xea6ba4) => {
      var _0x53578d;
      if (!_0xea6ba4) return false;
      let {
          unitId: _0x525c91,
          listType: _0x556f9f,
          listId: _0x1a61ab,
          segmentId: _0x591d3c = "",
        } = _0xea6ba4,
        _0x349c10 = V(_0x522d61, _0x525c91);
      if (!_0x349c10) return false;
      let _0x18e4b7 =
        (_0x53578d = _0x349c10.getSelfOrHeaderFooterModel(_0x591d3c)) == null
          ? undefined
          : _0x53578d.getBody();
      if (!_0x18e4b7) return false;
      let { dataStream: _0x2cc04a = "", paragraphs: _0x114e75 = [] } =
          _0x18e4b7,
        _0x43839e = H(_0x522d61, _0xea6ba4);
      if (!_0x114e75.length || _0x43839e.length === 0) return false;
      let _0x32baf4 = _0x5aa6ad.range["getParagraphsInRanges"](
          _0x43839e,
          _0x114e75,
          _0x2cc04a,
        ),
        _0x429357 = _0x5aa6ad.paragraph["bullet"].set({
          paragraphs: _0x32baf4,
          listType: _0x556f9f,
          listId: _0x1a61ab,
          document: _0x349c10,
          segmentId: _0x591d3c,
        });
      if (!_0x429357) return false;
      let _0x54ca2b = _0x42f9e1
        .getInstance()
        .editOp(_0x429357.serialize(), U(_0x349c10, _0x591d3c));
      return !!_0x522d61
        .get(_0xe63e05)
        .syncExecuteCommand(_0x195566.id, {
          unitId: _0x349c10.getUnitId(),
          actions: _0x54ca2b,
          textRanges: _0x43839e,
          isEditing: false,
        });
    },
  },
  N = {
    id: "docs-list.command.select",
    type: _0x2bf5ad.COMMAND,
    handler: (_0x1bb0df, _0x55ee0a) => {
      if (!_0x55ee0a) return false;
      let _0x5a4405 = V(_0x1bb0df, _0x55ee0a.unitId);
      if (!_0x5a4405) return false;
      let _0xd32910 = ne({
        documentData: _0x5a4405.getSnapshot(),
        paragraphStartIndex: _0x55ee0a.paragraphStartIndex,
        mode: _0x55ee0a.mode ?? "item",
        segmentId: _0x55ee0a.segmentId,
      });
      return _0xd32910.length
        ? (_0x1bb0df
            .get(_0xa7ae46)
            .replaceDocRanges(
              _0xd32910,
              {
                unitId: _0x5a4405.getUnitId(),
                subUnitId: _0x5a4405.getUnitId(),
              },
              false,
              { forceFocus: true },
            ),
          true)
        : false;
    },
  },
  P = {
    id: "docs-list.command.set-glyph-type",
    type: _0x2bf5ad.COMMAND,
    handler: (_0x2a9f69, _0x26190e) => B(_0x2a9f69, _0x26190e, re),
  },
  F = {
    id: "docs-list.command.set-glyph-symbol",
    type: _0x2bf5ad.COMMAND,
    handler: (_0x8bb1b, _0xf6b53a) => B(_0x8bb1b, _0xf6b53a, ie),
  },
  I = {
    id: "docs-list.command.set-prefix-suffix",
    type: _0x2bf5ad.COMMAND,
    handler: (_0x1bc093, _0x4ec915) => B(_0x1bc093, _0x4ec915, ae),
  },
  L = {
    id: "docs-list.command.set-start-number",
    type: _0x2bf5ad.COMMAND,
    handler: (_0xf5953d, _0xf1ac99) => B(_0xf5953d, _0xf1ac99, oe),
  },
  R = {
    id: "docs-list.command.promote",
    type: _0x2bf5ad.COMMAND,
    handler: (_0x542a6c, _0x3d7fe8) =>
      B(_0x542a6c, _0x3d7fe8 && { ..._0x3d7fe8, delta: -1 }, S),
  },
  z = {
    id: "docs-list.command.demote",
    type: _0x2bf5ad.COMMAND,
    handler: (_0x3d56ba, _0x3689d3) =>
      B(_0x3d56ba, _0x3689d3 && { ..._0x3689d3, delta: 1 }, S),
  };
function B(_0x5e968a, _0x5a0a61, _0x2b49bb) {
  if (!_0x5a0a61) return false;
  let _0x5dedb8 = V(_0x5e968a, _0x5a0a61.unitId);
  if (!_0x5dedb8) return false;
  let _0x4322a0 = _0x5dedb8.getSnapshot(),
    _0x178307 = _0x5a0a61.mode ?? "list",
    _0x53f2de = ue(
      _0x4322a0,
      _0x2b49bb({ ..._0x5a0a61, documentData: _0x4322a0, mode: _0x178307 })
        .nextDocumentData,
    );
  return _0x53f2de
    ? !!_0x5e968a
        .get(_0xe63e05)
        .syncExecuteCommand(_0x195566.id, {
          unitId: _0x5dedb8.getUnitId(),
          actions: _0x53f2de,
          textRanges: null,
          isEditing: false,
          noNeedSetTextRange: true,
        })
    : false;
}
function V(_0xf510ff, _0x5b7999) {
  let _0x5e1d91 = _0xf510ff.get(_0x51ca50);
  return _0x5b7999
    ? (_0x5e1d91.getUnit(_0x5b7999, _0x32da39.UNIVER_DOC) ?? null)
    : (_0x5e1d91.getCurrentUnitOfType(_0x32da39.UNIVER_DOC) ?? null);
}
function H(_0x422a03, _0x352673) {
  if (_0x352673.startOffset != null || _0x352673.endOffset != null) {
    let _0x3ef7a0 = _0x352673.startOffset ?? _0x352673.endOffset ?? 0,
      _0x3dc6eb = _0x352673.endOffset ?? _0x3ef7a0;
    return [
      {
        startOffset: _0x3ef7a0,
        endOffset: _0x3dc6eb,
        collapsed: _0x3ef7a0 === _0x3dc6eb,
        rangeType: _0x5dc1c7.TEXT,
        segmentId: _0x352673.segmentId ?? "",
        style: null,
      },
    ];
  }
  return _0x422a03.get(_0xa7ae46).getDocRanges() ?? [];
}
function U(_0x515b6c, _0x3804a1 = "") {
  if (!_0x3804a1) return ["body"];
  let { headers: _0x1daa5a, footers: _0x10b5d1 } = _0x515b6c.getSnapshot();
  if ((_0x1daa5a == null ? undefined : _0x1daa5a[_0x3804a1]) != null)
    return ["headers", _0x3804a1, "body"];
  if ((_0x10b5d1 == null ? undefined : _0x10b5d1[_0x3804a1]) != null)
    return ["footers", _0x3804a1, "body"];
  throw Error("Segment id not found in headers or footers");
}
function ue(_0x280eaf, _0x510793) {
  var _0x42b980, _0x32fbec;
  let _0x5cd034 = [];
  return (
    W(
      _0x42f9e1.getInstance(),
      ["body", "paragraphs"],
      (_0x42b980 = _0x280eaf.body) == null ? undefined : _0x42b980.paragraphs,
      (_0x32fbec = _0x510793.body) == null ? undefined : _0x32fbec.paragraphs,
      _0x5cd034,
    ),
    W(
      _0x42f9e1.getInstance(),
      ["lists"],
      _0x280eaf.lists,
      _0x510793.lists,
      _0x5cd034,
    ),
    _0x5cd034.reduce(
      (_0x2fc752, _0xd2de0c) => _0x42f9e1.compose(_0x2fc752, _0xd2de0c),
      null,
    )
  );
}
function W(_0x145523, _0x126d82, _0x31a571, _0x3e90e2, _0xdbea0c) {
  if (!K(_0x31a571, _0x3e90e2)) {
    if (_0x31a571 == null) {
      _0xdbea0c.push(_0x145523.insertOp(_0x126d82, _0x3e90e2));
      return;
    }
    if (_0x3e90e2 == null) {
      _0xdbea0c.push(_0x145523.removeOp(_0x126d82, _0x31a571));
      return;
    }
    if (Array.isArray(_0x31a571) && Array.isArray(_0x3e90e2)) {
      de(_0x145523, _0x126d82, _0x31a571, _0x3e90e2, _0xdbea0c);
      return;
    }
    if (G(_0x31a571) && G(_0x3e90e2)) {
      new Set([...Object.keys(_0x31a571), ...Object.keys(_0x3e90e2)]).forEach(
        (_0x5f50b0) => {
          W(
            _0x145523,
            [..._0x126d82, _0x5f50b0],
            _0x31a571[_0x5f50b0],
            _0x3e90e2[_0x5f50b0],
            _0xdbea0c,
          );
        },
      );
      return;
    }
    _0xdbea0c.push(_0x145523.replaceOp(_0x126d82, _0x31a571, _0x3e90e2));
  }
}
function de(_0xebff7e, _0x559376, _0x275a6c, _0x1a9c3a, _0x5491cd) {
  if (_0x275a6c.length === _0x1a9c3a.length) {
    _0x275a6c.forEach((_0x1a6d79, _0x2fabe4) =>
      W(
        _0xebff7e,
        [..._0x559376, _0x2fabe4],
        _0x1a6d79,
        _0x1a9c3a[_0x2fabe4],
        _0x5491cd,
      ),
    );
    return;
  }
  let _0x3acc06 = 0;
  for (
    ;
    _0x3acc06 < _0x275a6c.length &&
    _0x3acc06 < _0x1a9c3a.length &&
    K(_0x275a6c[_0x3acc06], _0x1a9c3a[_0x3acc06]);
  )
    _0x3acc06++;
  let _0x1db750 = _0x275a6c.length - 1,
    _0x339ec0 = _0x1a9c3a.length - 1;
  for (
    ;
    _0x1db750 >= _0x3acc06 &&
    _0x339ec0 >= _0x3acc06 &&
    K(_0x275a6c[_0x1db750], _0x1a9c3a[_0x339ec0]);
  )
    (_0x1db750--, _0x339ec0--);
  for (let _0x492d47 = _0x1db750; _0x492d47 >= _0x3acc06; _0x492d47--)
    _0x5491cd.push(
      _0xebff7e.removeOp([..._0x559376, _0x492d47], _0x275a6c[_0x492d47]),
    );
  for (let _0x52cc63 = _0x3acc06; _0x52cc63 <= _0x339ec0; _0x52cc63++)
    _0x5491cd.push(
      _0xebff7e.insertOp([..._0x559376, _0x52cc63], _0x1a9c3a[_0x52cc63]),
    );
}
function G(_0x12d5c1) {
  return (
    typeof _0x12d5c1 == "object" && !!_0x12d5c1 && !Array.isArray(_0x12d5c1)
  );
}
function K(_0x5976f2, _0x103c70) {
  return JSON.stringify(_0x5976f2) === JSON.stringify(_0x103c70);
}
const q = "DOCS_LIST_PLUGIN",
  fe =
    "࿁,o,O,ଠ,൦,ᆼ,౦,🔴,॰,∘,੦,໐,0,࿀,ᄋ,೦,૦,〇,०,ཕ,↤,↥,↦,↧,↨,↩,↪,↫,↬,↭,↮,↯,↰,↱,↲,↳,↴,↵,↶,↷,↸,↹,↺,↻,↼,↽,↾,↿,⇀,⇁,⇂,⇃,⇄,⇅,⇆,⇇,⇈,⇉,⇊,⇋,⇌,⇍,⇎,⇏,⇐,⇑,⇒,⇓,⇔,⇕,⇖,⇗,⇘,⇙,⇚,⇛,⇜,⇝,⇞,⇟,⇠,⇡,⇢,⇣,⇤,⇥,⇦,⇧,⇨,⇩,⇪,⇫,⇬,⇭,⇮,⇯,⇰,⇱,⇲,⇳,⇴,⇵,⇶,⇷,⇸,⇹,⇺,⇻,⇼,⇽,⇾,⇿,⍅,⍆,⍇,⍈,⍏,⍐,⍖,⍗,⏩,⏪,⏫,⏬,⏭,⏮,⏯,➔,➘,➙,➚,➛,➜,➝,➞,➟,➠,➡,➢,➣,➤,➥,➦,➧,➨,➩,➪,➫,➬,➭,➮,➯,➱,➲,➳,➴,➵,➶,➷,➸,➹,➺,➻,➼,➽,➾,⟰,⟱,⟲,⟳,⟴,⟵,⟶,⟷,⟸,⟹,⟺,⟻,⟼,⟽,⟾,⟿,⤀,⤁,⤂,⤃,⤄,⤅,⤆,⤇,⤈,⤉,⤊,⤋,⤌,⤍,⤎,⤏,⤐,⤑,⤒,⤓,⤔,⤕,⤖,⤗,⤘,⤝,⤞,⤟,⤠,⤡,⤢,⤣,⤤,⤥,⤦,⤧,⤨,⤩,⤪,⤭,⤮,⤯,⤰,⤱,⤲,⤳,⤴,⤵,⤶,⤷,⤸,⤹,⤺,⤻,⤼,⤽,⤾,⤿,⥀,⥁,⥂,⥃,⥄,⥅,⥆,⥇,⥈,⥉,⥊,⥋,⥌,⥍,⥎,⥏,⥐,⥑,⥒,⥓,⥔,⥕,⥖,⥗,⥘,⥙,⥚,⥛,⥜,⥝,⥞,⥟,⥠,⥡,⥢,⥣,⥤,⥥,⥦,⥧,⥨,⥩,⥪,⥫,⥬,⥭,⥮,⥯,⥱,⥲,⥳,⥴,⥵,⥶,⥷,⥸,⥹,⥺,⥻,⦽,⧪,⧫,⧬,⧭,⬀,⬁,⬂,⬃,⬄,⬅,⬆,⬇,⬈,⬉,⬊,⬋,⬌,⬍,⬎,⬏,⬐,⬑,⬰,⬱,⬲,⬳,⬴,⬵,⬶,⬷,⬸,⬹,⬺,⬻,⬼,⬽,⬾,⬿,⭀,⭁,⭂,⭃,⭄,⭅,⭆,⭇,⭈,⭉,⭊,⭋,⭌,🔀,🔁,🔂,🔃,🔄,🔙,🔚,🔛,🔜,🔝,🔺,🔻,🔼,🔽,￩,￪,￫,￬,͍,͎,͐,͑,͒,͓,͔,͕,͖,͢,᷾,᷿,⃔,⃕,⃖,⃗,ꜛ,ꜜ"[
      "split"
    ](",");
var pe = "@univerjs-pro/docs-list",
  J = "1.0.0-insiders.20260907-70fc579";
const Y = {};
function X(_0x131e11, _0x5f12d6) {
  return function (_0x586527, _0x3b3b7f) {
    _0x5f12d6(_0x586527, _0x3b3b7f, _0x131e11);
  };
}
function me(_0xed64f9, _0x23c918, _0x242fb3, _0x11df8f) {
  var _0x2e0f4e = arguments.length,
    _0x4593c0 =
      _0x2e0f4e < 3
        ? _0x23c918
        : _0x11df8f === null
          ? (_0x11df8f = Object.getOwnPropertyDescriptor(_0x23c918, _0x242fb3))
          : _0x11df8f,
    _0x3ebca0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4593c0 = Reflect.decorate(_0xed64f9, _0x23c918, _0x242fb3, _0x11df8f);
  else {
    for (var _0x38691b = _0xed64f9.length - 1; _0x38691b >= 0; _0x38691b--)
      (_0x3ebca0 = _0xed64f9[_0x38691b]) &&
        (_0x4593c0 =
          (_0x2e0f4e < 3
            ? _0x3ebca0(_0x4593c0)
            : _0x2e0f4e > 3
              ? _0x3ebca0(_0x23c918, _0x242fb3, _0x4593c0)
              : _0x3ebca0(_0x23c918, _0x242fb3)) || _0x4593c0);
  }
  return (
    _0x2e0f4e > 3 &&
      _0x4593c0 &&
      Object.defineProperty(_0x23c918, _0x242fb3, _0x4593c0),
    _0x4593c0
  );
}
function Z(_0x1a075d) {
  "@babel/helpers - typeof";
  return (
    (Z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x58b242) {
            return typeof _0x58b242;
          }
        : function (_0xebf916) {
            return _0xebf916 &&
              typeof Symbol == "function" &&
              _0xebf916.constructor === Symbol &&
              _0xebf916 !== Symbol.prototype
              ? "symbol"
              : typeof _0xebf916;
          }),
    Z(_0x1a075d)
  );
}
function he(_0x94fd18, _0xa2fa71) {
  if (Z(_0x94fd18) != "object" || !_0x94fd18) return _0x94fd18;
  var _0x20088d = _0x94fd18[Symbol.toPrimitive];
  if (_0x20088d !== undefined) {
    var _0x3d6d10 = _0x20088d.call(_0x94fd18, _0xa2fa71 || "default");
    if (Z(_0x3d6d10) != "object") return _0x3d6d10;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0xa2fa71 === "string" ? String : Number)(_0x94fd18);
}
function ge(_0x2a8f36) {
  var _0x1a881a = he(_0x2a8f36, "string");
  return Z(_0x1a881a) == "symbol" ? _0x1a881a : _0x1a881a + "";
}
function Q(_0x22a699, _0x45305a, _0x502a00) {
  return (
    (_0x45305a = ge(_0x45305a)) in _0x22a699
      ? Object.defineProperty(_0x22a699, _0x45305a, {
          value: _0x502a00,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x22a699[_0x45305a] = _0x502a00),
    _0x22a699
  );
}
let $ = class extends _0x5c6d71 {
  constructor(_0x149f35 = Y, _0x390ba8, _0x551102, _0x214464) {
    (super(),
      (this._config = _0x149f35),
      (this._injector = _0x390ba8),
      (this._commandService = _0x551102),
      (this._configService = _0x214464));
    let { ..._0x13398b } = _0x5cbd81({}, Y, this._config);
    this._configService["setConfig"]("docs-list.config", _0x13398b);
  }
  onStarting() {
    [z, M, R, N, F, P, I, L].forEach((_0x33f6ac) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x33f6ac)),
    );
  }
};
(Q($, "pluginName", q),
  Q($, "packageName", pe),
  Q($, "version", J),
  Q($, "type", _0x32da39.UNIVER_DOC),
  ($ = me(
    [
      _0x5a1db3(_0x58ef7f, _0x531243),
      X(1, _0xb620ac(_0x4bbd16)),
      X(2, _0xe63e05),
      X(3, _0x50e058),
    ],
    $,
  )));
export {
  fe as DOCS_LIST_MORE_BULLETS,
  q as DOCS_LIST_PLUGIN,
  z as DocsListDemoteCommand,
  M as DocsListInsertCommand,
  R as DocsListPromoteCommand,
  N as DocsListSelectCommand,
  te as DocsListSelectionMode,
  F as DocsListSetGlyphSymbolCommand,
  P as DocsListSetGlyphTypeCommand,
  I as DocsListSetPrefixSuffixCommand,
  L as DocsListSetStartNumberCommand,
  $ as UniverDocsListPlugin,
};
