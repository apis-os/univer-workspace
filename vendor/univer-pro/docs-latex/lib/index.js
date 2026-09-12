import {
  CommandType as _0x5b9b08,
  CustomRangeType as _0x7cc89c,
  DataStreamTreeTokenType as _0x385db2,
  DependentOn as _0x501d86,
  Disposable as _0x535287,
  ICommandService as _0x2f12d0,
  IConfigService as _0x2192c2,
  IResourceManagerService as _0x2fc6cd,
  IUndoRedoService as _0xe7955c,
  IUniverInstanceService as _0x404820,
  Inject as _0x5dcfaa,
  Injector as _0x65f4db,
  JSONX as _0x4994fb,
  Plugin as _0x1c9b7c,
  TextX as _0x56db75,
  UniverInstanceType as _0x149065,
  generateRandomId as _0x27d8c7,
  getBodySliceForTextXAction as _0x47ee9b,
  getCustomRangeInterval as _0x7db40b,
  getRichTextEditPath as _0x5b9d35,
  merge as _0x3d8e46,
  shiftExclusiveRangeOnDelete as _0x39f974,
  shiftExclusiveRangeOnInsert as _0x54b720,
  shiftInclusiveRangeOnDelete as _0x137a2f,
  shiftInclusiveRangeOnInsert as _0x3a2cd8,
} from "@univerjs/core";
import {
  DOC_SELECTION_OPTION_PRESERVE_CARET as _0x312d77,
  DocSelectionManagerService as _0x78ac4a,
  RichTextEditingMutation as _0x923e6a,
  UniverDocsPlugin as _0x3f08e0,
} from "@univerjs/docs";
import { Subject as _0x129fa3 } from "rxjs";
import { UniverLicensePlugin as _0x4e430a } from "@univerjs-pro/license";
const b = { displayMode: "inline", kind: "inline" };
function x(_0xf40d1d) {
  return { ...b, latex: "", ..._0xf40d1d };
}
function S(_0x168c62) {
  let _0x26b10e = (_0x168c62 == null ? undefined : _0x168c62.formulas) ?? {};
  return {
    formulas: Object.fromEntries(
      Object.entries(_0x26b10e).map(([_0x2c0df9, _0x4b0acb]) => [
        _0x2c0df9,
        x(_0x4b0acb),
      ]),
    ),
  };
}
function C(_0x2edbf5, _0xeba3fd, _0x3bc810) {
  let _0x4446fe = S(_0x2edbf5);
  return (
    (_0x4446fe.formulas[_0xeba3fd] = x({
      ..._0x4446fe.formulas[_0xeba3fd],
      ..._0x3bc810,
    })),
    _0x4446fe
  );
}
function de(_0x3f429a, _0x40d997) {
  let _0x1b2b10 = S(_0x3f429a);
  return (delete _0x1b2b10.formulas[_0x40d997], _0x1b2b10);
}
const fe = "univer-docs-latex-formula",
  w = new Set([
    _0x385db2.SECTION_BREAK,
    _0x385db2.TABLE_START,
    _0x385db2.TABLE_ROW_START,
    _0x385db2.TABLE_CELL_START,
    _0x385db2.TABLE_CELL_END,
    _0x385db2.TABLE_ROW_END,
    _0x385db2.TABLE_END,
    _0x385db2.COLUMN_GROUP_START,
    _0x385db2.COLUMN_START,
    _0x385db2.COLUMN_END,
    _0x385db2.COLUMN_GROUP_END,
    _0x385db2.BLOCK_START,
    _0x385db2.BLOCK_END,
    _0x385db2.CUSTOM_BLOCK,
  ]);
var T = class extends Error {
  constructor() {
    super("Latex formula range cannot cross document structure boundaries");
  }
};
function pe(_0x223ae4) {
  let _0x32f0bf = N(_0x223ae4.documentData),
    _0x2accc6 = M(_0x32f0bf),
    { startOffset: _0x158c6f, endOffset: _0x639db5 } = ye(
      _0x2accc6,
      _0x223ae4.startOffset,
      _0x223ae4.endOffset,
    );
  be(_0x2accc6, _0x158c6f, _0x639db5);
  let _0x431234 = C(_0x223ae4.metadata, _0x223ae4.rangeId, {
    ...b,
    ..._0x223ae4.properties,
    latex: _0x223ae4.latex,
  });
  return (
    D(_0x2accc6, _0x158c6f, _0x639db5, _0x223ae4.latex),
    ve(
      _0x2accc6,
      _0x158c6f,
      _0x158c6f + _0x223ae4.latex["length"] - 1,
      _0x223ae4.rangeId,
    ),
    (_0x2accc6.customRanges = [
      ...(_0x2accc6.customRanges ?? []),
      _e(_0x223ae4.rangeId, _0x158c6f, _0x223ae4.latex["length"]),
    ].sort(
      (_0xbf8d53, _0x43cdc5) => _0xbf8d53.startIndex - _0x43cdc5.startIndex,
    )),
    {
      nextDocumentData: _0x32f0bf,
      nextMetadata: _0x431234,
      cursorOffset: _0x158c6f + _0x223ae4.latex["length"],
    }
  );
}
function me(_0x4f3514) {
  var _0x195397, _0x147dbe;
  let _0x4fd91b = N(_0x4f3514.documentData),
    _0xa745e5 = M(_0x4fd91b),
    _0x32ea2b =
      (_0x195397 = _0xa745e5.customRanges) == null
        ? undefined
        : _0x195397.find(
            (_0x16b183) =>
              _0x16b183.rangeId === _0x4f3514.rangeId && E(_0x16b183),
          );
  if (!_0x32ea2b) return null;
  let _0x50d70 = _0x32ea2b.startIndex,
    _0x5f0c33 = _0x7db40b(_0x32ea2b);
  return (
    D(_0xa745e5, _0x5f0c33.startOffset, _0x5f0c33.endOffset, _0x4f3514.latex),
    (_0xa745e5.customRanges = [
      ...(((_0x147dbe = _0xa745e5.customRanges) == null
        ? undefined
        : _0x147dbe.filter(
            (_0x11e278) => _0x11e278.rangeId !== _0x4f3514.rangeId,
          )) ?? []),
      _e(_0x4f3514.rangeId, _0x50d70, _0x4f3514.latex["length"]),
    ].sort(
      (_0x207fda, _0x3213e0) => _0x207fda.startIndex - _0x3213e0.startIndex,
    )),
    {
      nextDocumentData: _0x4fd91b,
      nextMetadata: C(_0x4f3514.metadata, _0x4f3514.rangeId, {
        ..._0x4f3514.properties,
        latex: _0x4f3514.latex,
      }),
      cursorOffset: _0x50d70 + _0x4f3514.latex["length"],
    }
  );
}
function he(_0x38e7c8) {
  var _0x3d09f0, _0x4aea01;
  let _0x8ad19a = N(_0x38e7c8.documentData),
    _0x39c47e = M(_0x8ad19a),
    _0x1c71a9 =
      (_0x3d09f0 = _0x39c47e.customRanges) == null
        ? undefined
        : _0x3d09f0.find(
            (_0x44a9aa) =>
              _0x44a9aa.rangeId === _0x38e7c8.rangeId && E(_0x44a9aa),
          );
  if (!_0x1c71a9) return null;
  let _0x12787f = _0x7db40b(_0x1c71a9),
    _0x52aabd = _0x38e7c8.text ?? "";
  return (
    D(_0x39c47e, _0x12787f.startOffset, _0x12787f.endOffset, _0x52aabd),
    (_0x39c47e.customRanges =
      (_0x4aea01 = _0x39c47e.customRanges) == null
        ? undefined
        : _0x4aea01.filter(
            (_0x2bfbab) => _0x2bfbab.rangeId !== _0x38e7c8.rangeId,
          )),
    {
      nextDocumentData: _0x8ad19a,
      nextMetadata: de(_0x38e7c8.metadata, _0x38e7c8.rangeId),
      cursorOffset: _0x12787f.startOffset + _0x52aabd.length,
    }
  );
}
function ge(_0x4b5e2b, _0x46305d) {
  if (!E(_0x4b5e2b)) return "";
  let _0x566def = _0x7db40b(_0x4b5e2b);
  return _0x46305d.slice(_0x566def.startOffset, _0x566def.endOffset);
}
function E(_0x158653) {
  var _0x27287f;
  return (
    (_0x158653 == null ? undefined : _0x158653.rangeType) ===
      _0x7cc89c.CUSTOM &&
    ((_0x27287f = _0x158653.properties) == null
      ? undefined
      : _0x27287f.kind) === "univer-docs-latex-formula"
  );
}
function _e(_0x1b0fcb, _0x57f3cd, _0x2e0e6e) {
  return {
    startIndex: _0x57f3cd,
    endIndex: _0x57f3cd + Math.max(0, _0x2e0e6e - 1),
    rangeId: _0x1b0fcb,
    rangeType: _0x7cc89c.CUSTOM,
    wholeEntity: true,
    properties: { kind: fe },
  };
}
function ve(_0x56a8c9, _0x4725a6, _0x39d30f, _0x565fac) {
  var _0x671e05;
  _0x56a8c9.customRanges =
    (_0x671e05 = _0x56a8c9.customRanges) == null
      ? undefined
      : _0x671e05.filter(
          (_0xac5ac0) =>
            _0xac5ac0.rangeId === _0x565fac ||
            !E(_0xac5ac0) ||
            _0xac5ac0.endIndex < _0x4725a6 ||
            _0xac5ac0.startIndex > _0x39d30f,
        );
}
function ye(_0x3122e2, _0x31a5e6, _0x2c2bdb) {
  let _0x519336 = Se(_0x3122e2),
    _0x1c5c50 = _0x31a5e6 ?? _0x519336,
    _0x1cb6e2 = _0x2c2bdb ?? _0x1c5c50;
  return {
    startOffset: xe(Math.min(_0x1c5c50, _0x1cb6e2), _0x519336),
    endOffset: xe(Math.max(_0x1c5c50, _0x1cb6e2), _0x519336),
  };
}
function be(_0x5f2c0c, _0x19d18d, _0x5741bd) {
  if (_0x19d18d === _0x5741bd) {
    if (w.has(_0x5f2c0c.dataStream[_0x19d18d])) throw new T();
    return;
  }
  for (let _0x3428c3 = _0x19d18d; _0x3428c3 < _0x5741bd; _0x3428c3++)
    if (
      _0x5f2c0c.dataStream[_0x3428c3] === _0x385db2.PARAGRAPH ||
      w.has(_0x5f2c0c.dataStream[_0x3428c3])
    )
      throw new T();
}
function xe(_0x4ec3db, _0x2deb39) {
  return Math.max(0, Math.min(_0x4ec3db, _0x2deb39));
}
function Se(_0x19637e) {
  return _0x19637e.dataStream["endsWith"](
    "" + _0x385db2.PARAGRAPH + _0x385db2.SECTION_BREAK,
  )
    ? Math.max(0, _0x19637e.dataStream["length"] - 2)
    : _0x19637e.dataStream["endsWith"](_0x385db2.SECTION_BREAK)
      ? Math.max(0, _0x19637e.dataStream["length"] - 1)
      : _0x19637e.dataStream["length"];
}
function D(_0x4760bf, _0x28654a, _0x1adeb1, _0x39824f) {
  (_0x1adeb1 > _0x28654a && we(_0x4760bf, _0x28654a, _0x1adeb1),
    Ce(_0x4760bf, _0x28654a, _0x39824f));
}
function Ce(_0xf16989, _0x5ca5c7, _0x114e5c) {
  _0x114e5c &&
    ((_0xf16989.dataStream =
      "" +
      _0xf16989.dataStream["slice"](0, _0x5ca5c7) +
      _0x114e5c +
      _0xf16989.dataStream["slice"](_0x5ca5c7)),
    Te(_0xf16989, _0x5ca5c7, _0x114e5c.length));
}
function we(_0x3976ce, _0x6547d5, _0x51a9d9) {
  let _0x39904e = _0x51a9d9 - _0x6547d5;
  ((_0x3976ce.dataStream =
    "" +
    _0x3976ce.dataStream["slice"](0, _0x6547d5) +
    _0x3976ce.dataStream["slice"](_0x51a9d9)),
    Ee(_0x3976ce, _0x6547d5, _0x39904e));
}
function Te(_0x2bd52a, _0x303ca, _0x31c326) {
  ((_0x2bd52a.paragraphs = O(_0x2bd52a.paragraphs, _0x303ca, _0x31c326)),
    (_0x2bd52a.sectionBreaks = O(_0x2bd52a.sectionBreaks, _0x303ca, _0x31c326)),
    (_0x2bd52a.customBlocks = O(_0x2bd52a.customBlocks, _0x303ca, _0x31c326)),
    (_0x2bd52a.textRuns = De(_0x2bd52a.textRuns, _0x303ca, _0x31c326)),
    (_0x2bd52a.tables = Oe(_0x2bd52a.tables, _0x303ca, _0x31c326)),
    (_0x2bd52a.columnGroups = A(_0x2bd52a.columnGroups, _0x303ca, _0x31c326)),
    (_0x2bd52a.customRanges = A(_0x2bd52a.customRanges, _0x303ca, _0x31c326)),
    (_0x2bd52a.customDecorations = A(
      _0x2bd52a.customDecorations,
      _0x303ca,
      _0x31c326,
    )),
    (_0x2bd52a.blockRanges = A(_0x2bd52a.blockRanges, _0x303ca, _0x31c326)));
}
function Ee(_0xa3150a, _0x34a802, _0x489590) {
  var _0x507c0e, _0x43e977;
  ((_0xa3150a.paragraphs = k(_0xa3150a.paragraphs, _0x34a802, _0x489590)),
    (_0xa3150a.sectionBreaks = k(
      _0xa3150a.sectionBreaks,
      _0x34a802,
      _0x489590,
    )),
    (_0xa3150a.customBlocks = k(_0xa3150a.customBlocks, _0x34a802, _0x489590)),
    (_0xa3150a.textRuns =
      (_0x507c0e = ke(
        (_0x43e977 = _0xa3150a.textRuns) == null
          ? undefined
          : _0x43e977.map((_0x34bc9f) => ({
              ..._0x34bc9f,
              startIndex: _0x34bc9f.st,
              endIndex: _0x34bc9f.ed,
            })),
        _0x34a802,
        _0x489590,
      )) == null
        ? undefined
        : _0x507c0e.map((_0x1644ec) => {
            let {
              startIndex: _0x5ad772,
              endIndex: _0x8c3801,
              ..._0x7ecd3d
            } = _0x1644ec;
            return { ..._0x7ecd3d, st: _0x5ad772, ed: _0x8c3801 };
          })),
    (_0xa3150a.tables = ke(_0xa3150a.tables, _0x34a802, _0x489590)),
    (_0xa3150a.columnGroups = j(_0xa3150a.columnGroups, _0x34a802, _0x489590)),
    (_0xa3150a.customRanges = j(_0xa3150a.customRanges, _0x34a802, _0x489590)),
    (_0xa3150a.customDecorations = j(
      _0xa3150a.customDecorations,
      _0x34a802,
      _0x489590,
    )),
    (_0xa3150a.blockRanges = j(_0xa3150a.blockRanges, _0x34a802, _0x489590)));
}
function O(_0x5cc911, _0x471fef, _0x41d29e) {
  return _0x5cc911 == null
    ? undefined
    : _0x5cc911.map((_0x140762) =>
        _0x140762.startIndex >= _0x471fef
          ? { ..._0x140762, startIndex: _0x140762.startIndex + _0x41d29e }
          : _0x140762,
      );
}
function k(_0x5c2b50, _0x36deb0, _0x3a2bf8) {
  let _0xbc4a8 = _0x36deb0 + _0x3a2bf8;
  return _0x5c2b50 == null
    ? undefined
    : _0x5c2b50
        .map((_0x3c2fe4) =>
          _0x3c2fe4.startIndex >= _0x36deb0 && _0x3c2fe4.startIndex < _0xbc4a8
            ? null
            : _0x3c2fe4.startIndex >= _0xbc4a8
              ? { ..._0x3c2fe4, startIndex: _0x3c2fe4.startIndex - _0x3a2bf8 }
              : _0x3c2fe4,
        )
        .filter((_0x1bbae9) => _0x1bbae9 != null);
}
function De(_0x11daf5, _0x49a993, _0x68d42f) {
  return _0x11daf5 == null
    ? undefined
    : _0x11daf5.map((_0x477537) =>
        _0x477537.st >= _0x49a993
          ? {
              ..._0x477537,
              st: _0x477537.st + _0x68d42f,
              ed: _0x477537.ed + _0x68d42f,
            }
          : _0x477537.ed > _0x49a993
            ? { ..._0x477537, ed: _0x477537.ed + _0x68d42f }
            : _0x477537,
      );
}
function A(_0x562314, _0x569eec, _0x16e5c7) {
  return _0x562314 == null
    ? undefined
    : _0x562314.map((_0x3f40be) => _0x3a2cd8(_0x3f40be, _0x569eec, _0x16e5c7));
}
function Oe(_0x260d73, _0x560901, _0x211f38) {
  return _0x260d73 == null
    ? undefined
    : _0x260d73.map((_0x4cd7ee) => _0x54b720(_0x4cd7ee, _0x560901, _0x211f38));
}
function j(_0x8bb852, _0x51a3be, _0x32f1b7) {
  return _0x8bb852 == null
    ? undefined
    : _0x8bb852
        .map((_0x5e2d3f) => _0x137a2f(_0x5e2d3f, _0x51a3be, _0x32f1b7))
        .filter((_0x4be99b) => _0x4be99b != null);
}
function ke(_0x3ee42f, _0x3e6389, _0x165178) {
  return _0x3ee42f == null
    ? undefined
    : _0x3ee42f
        .map((_0xfaa781) => _0x39f974(_0xfaa781, _0x3e6389, _0x165178))
        .filter((_0x2df5f1) => _0x2df5f1 != null);
}
function M(_0x559f6e) {
  if (!_0x559f6e.body)
    throw Error("Document body is required to insert docs latex formulas.");
  return _0x559f6e.body;
}
function N(_0x37ae8b) {
  return {
    ..._0x37ae8b,
    body: _0x37ae8b.body ? Ae(_0x37ae8b.body) : _0x37ae8b.body,
  };
}
function Ae(_0x579d8f) {
  var _0x2f4619,
    _0x4e6016,
    _0x5513e1,
    _0x2bd87f,
    _0x1d6c09,
    _0x1bf92b,
    _0x574dd8,
    _0x5b32ac,
    _0x5a0064;
  return {
    ..._0x579d8f,
    paragraphs:
      (_0x2f4619 = _0x579d8f.paragraphs) == null
        ? undefined
        : _0x2f4619.map((_0x19f516) => ({
            ..._0x19f516,
            bullet: P(_0x19f516.bullet),
            paragraphStyle: P(_0x19f516.paragraphStyle),
          })),
    sectionBreaks:
      (_0x4e6016 = _0x579d8f.sectionBreaks) == null
        ? undefined
        : _0x4e6016.map((_0x332610) => ({ ..._0x332610 })),
    textRuns:
      (_0x5513e1 = _0x579d8f.textRuns) == null
        ? undefined
        : _0x5513e1.map((_0x2bdc99) => ({ ..._0x2bdc99 })),
    tables:
      (_0x2bd87f = _0x579d8f.tables) == null
        ? undefined
        : _0x2bd87f.map((_0x3d5637) => ({ ..._0x3d5637 })),
    columnGroups:
      (_0x1d6c09 = _0x579d8f.columnGroups) == null
        ? undefined
        : _0x1d6c09.map((_0x404ff6) => {
            var _0x4e598c;
            return {
              ..._0x404ff6,
              columns:
                (_0x4e598c = _0x404ff6.columns) == null
                  ? undefined
                  : _0x4e598c.map((_0x36dc4b) => P(_0x36dc4b)),
            };
          }),
    blockRanges:
      (_0x1bf92b = _0x579d8f.blockRanges) == null
        ? undefined
        : _0x1bf92b.map((_0x1e1adf) => ({ ..._0x1e1adf })),
    customRanges:
      (_0x574dd8 = _0x579d8f.customRanges) == null
        ? undefined
        : _0x574dd8.map((_0x292be9) => ({ ..._0x292be9 })),
    customDecorations:
      (_0x5b32ac = _0x579d8f.customDecorations) == null
        ? undefined
        : _0x5b32ac.map((_0x3dab87) => ({ ..._0x3dab87 })),
    customBlocks:
      (_0x5a0064 = _0x579d8f.customBlocks) == null
        ? undefined
        : _0x5a0064.map((_0x5c0bec) => ({ ..._0x5c0bec })),
  };
}
function P(_0x11989f) {
  return Array.isArray(_0x11989f)
    ? _0x11989f.map((_0x8f67f5) => P(_0x8f67f5))
    : !_0x11989f || typeof _0x11989f != "object"
      ? _0x11989f
      : Object.fromEntries(
          Object.entries(_0x11989f).map(([_0x3f0d3e, _0x439b8b]) => [
            _0x3f0d3e,
            P(_0x439b8b),
          ]),
        );
}
function F(_0x47be39) {
  "@babel/helpers - typeof";
  return (
    (F =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4f4bcd) {
            return typeof _0x4f4bcd;
          }
        : function (_0x12985d) {
            return _0x12985d &&
              typeof Symbol == "function" &&
              _0x12985d.constructor === Symbol &&
              _0x12985d !== Symbol.prototype
              ? "symbol"
              : typeof _0x12985d;
          }),
    F(_0x47be39)
  );
}
function je(_0x4783c1, _0x312474) {
  if (F(_0x4783c1) != "object" || !_0x4783c1) return _0x4783c1;
  var _0x17a16e = _0x4783c1[Symbol.toPrimitive];
  if (_0x17a16e !== undefined) {
    var _0x211505 = _0x17a16e.call(_0x4783c1, _0x312474 || "default");
    if (F(_0x211505) != "object") return _0x211505;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x312474 === "string" ? String : Number)(_0x4783c1);
}
function Me(_0x3f35bf) {
  var _0x33fa45 = je(_0x3f35bf, "string");
  return F(_0x33fa45) == "symbol" ? _0x33fa45 : _0x33fa45 + "";
}
function I(_0x53fe1e, _0x504246, _0x43b76a) {
  return (
    (_0x504246 = Me(_0x504246)) in _0x53fe1e
      ? Object.defineProperty(_0x53fe1e, _0x504246, {
          value: _0x43b76a,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x53fe1e[_0x504246] = _0x43b76a),
    _0x53fe1e
  );
}
var L = class extends _0x535287 {
  constructor(..._0xf2ccb2) {
    (super(..._0xf2ccb2),
      I(this, "_resources", new Map()),
      I(this, "_change$", new _0x129fa3()),
      I(this, "change$", this._change$["asObservable"]()));
  }
  getFormula(_0x3fa807, _0xfa9b40) {
    var _0x5570c3;
    let _0x36ec28 =
      (_0x5570c3 = this._resources["get"](_0x3fa807)) == null
        ? undefined
        : _0x5570c3.formulas[_0xfa9b40];
    return _0x36ec28 ? { ..._0x36ec28 } : undefined;
  }
  setFormula(_0x426f01, _0x1942a1, _0x3f0b7a) {
    this._setResource(
      _0x426f01,
      _0x1942a1,
      C(this._resources["get"](_0x426f01), _0x1942a1, _0x3f0b7a),
    );
  }
  removeFormula(_0x1e7f44, _0x36689d) {
    this._setResource(
      _0x1e7f44,
      _0x36689d,
      de(this._resources["get"](_0x1e7f44), _0x36689d),
    );
  }
  serialize(_0x428a1e) {
    return S(this._resources["get"](_0x428a1e));
  }
  deserialize(_0x1d53b4, _0x38a43e) {
    (this._resources["set"](_0x1d53b4, S(_0x38a43e)),
      this._change$["next"]({ unitId: _0x1d53b4 }));
  }
  removeUnit(_0x5102e2) {
    (this._resources["delete"](_0x5102e2),
      this._change$["next"]({ unitId: _0x5102e2 }));
  }
  dispose() {
    (super.dispose(), this._resources["clear"](), this._change$["complete"]());
  }
  _setResource(_0x98bd8b, _0x161d95, _0x329599) {
    (this._resources["set"](_0x98bd8b, _0x329599),
      this._change$["next"]({ unitId: _0x98bd8b, rangeId: _0x161d95 }));
  }
};
const Ne = {
    id: "docs-latex.mutation.set-formula",
    type: _0x5b9b08.MUTATION,
    handler: (_0x334cb1, _0x42f69f) =>
      !(_0x42f69f != null && _0x42f69f.unitId) ||
      !_0x42f69f.rangeId ||
      !_0x42f69f.config
        ? false
        : (_0x334cb1
            .get(L)
            .setFormula(_0x42f69f.unitId, _0x42f69f.rangeId, _0x42f69f.config),
          true),
  },
  Pe = {
    id: "docs-latex.mutation.remove-formula",
    type: _0x5b9b08.MUTATION,
    handler: (_0x399ae4, _0x55b507) =>
      !(_0x55b507 != null && _0x55b507.unitId) || !_0x55b507.rangeId
        ? false
        : (_0x399ae4.get(L).removeFormula(_0x55b507.unitId, _0x55b507.rangeId),
          true),
  },
  R = {
    id: "docs-latex.command.insert-formula",
    type: _0x5b9b08.COMMAND,
    handler: (_0x8974bd, _0x54f78a) => {
      var _0xfdc452;
      if (!_0x54f78a) return false;
      let { latex: _0x42c715 } = _0x54f78a;
      if (!_0x42c715.trim()) return false;
      let _0x5ac521 = H(_0x8974bd, _0x54f78a.unitId);
      if (!_0x5ac521) return false;
      let _0x49e442 =
          _0x54f78a.startOffset != null || _0x54f78a.endOffset != null,
        _0x1016c7 = _0x49e442
          ? undefined
          : (_0x54f78a.selection ?? Ie(_0x8974bd, _0x5ac521.getUnitId())),
        _0x2ba48f = _0x49e442
          ? (_0x54f78a.segmentId ?? "")
          : (_0x54f78a.segmentId ??
            (_0x1016c7 == null ? undefined : _0x1016c7.segmentId) ??
            ""),
        _0x4f55dd = U(_0x8974bd, _0x5ac521, _0x2ba48f);
      if (!_0x4f55dd) return false;
      let _0x1debb8 = Re(_0x54f78a, _0x1016c7);
      if (!_0x1debb8) return false;
      let _0x42e63a = Le(
          _0x4f55dd.actionDocumentData["body"],
          _0x4f55dd.model,
          _0x4f55dd.unitId,
        ),
        _0x99e4bf = ze({
          documentData: _0x4f55dd.actionDocumentData,
          endOffset: _0x1debb8.endOffset,
          latex: _0x42c715,
          metadata: _0x4f55dd.model["serialize"](_0x4f55dd.unitId),
          properties: _0x54f78a.properties,
          rangeId: _0x42e63a,
          startOffset: _0x1debb8.startOffset,
        });
      if (!_0x99e4bf) return false;
      let _0x5ed5ba =
        (_0xfdc452 = _0x99e4bf.nextMetadata) == null
          ? undefined
          : _0xfdc452.formulas[_0x42e63a];
      return !_0x5ed5ba ||
        !K({
          actionDocumentData: _0x4f55dd.actionDocumentData,
          bodyPath: _0x5b9d35(_0x4f55dd.document, _0x2ba48f),
          commandService: _0x4f55dd.commandService,
          cursorOffset: _0x99e4bf.cursorOffset,
          nextDocumentData: _0x99e4bf.nextDocumentData,
          nextMetadataConfig: _0x5ed5ba,
          previousMetadataConfig: undefined,
          rangeId: _0x42e63a,
          segmentId: _0x2ba48f,
          selectionManager: _0x4f55dd.selectionManager,
          trigger: R.id,
          undoRedoService: _0x4f55dd.undoRedoService,
          unitId: _0x4f55dd.unitId,
        })
        ? false
        : {
            endOffset: _0x99e4bf.cursorOffset,
            rangeId: _0x42e63a,
            segmentId: _0x2ba48f,
            startOffset: _0x99e4bf.cursorOffset - _0x42c715.length,
          };
    },
  },
  z = {
    id: "docs-latex.command.update-formula",
    type: _0x5b9b08.COMMAND,
    handler: (_0x2fa21c, _0x3dcc64) => {
      var _0x420d2a;
      let _0x2de807 = _0x3dcc64 == null ? undefined : _0x3dcc64.latex;
      if (
        !(_0x3dcc64 != null && _0x3dcc64.rangeId) ||
        !(_0x2de807 != null && _0x2de807.trim())
      )
        return false;
      let _0x2bd0b9 = _0x3dcc64.segmentId ?? "",
        _0x3cf40b = H(_0x2fa21c, _0x3dcc64.unitId),
        _0x4ea07c = _0x3cf40b ? U(_0x2fa21c, _0x3cf40b, _0x2bd0b9) : null;
      if (!_0x4ea07c) return false;
      let _0x2dc372 = me({
        documentData: _0x4ea07c.actionDocumentData,
        latex: _0x2de807,
        metadata: _0x4ea07c.model["serialize"](_0x4ea07c.unitId),
        properties: _0x3dcc64.properties,
        rangeId: _0x3dcc64.rangeId,
      });
      if (!_0x2dc372) return false;
      let _0x53f342 =
        (_0x420d2a = _0x2dc372.nextMetadata) == null
          ? undefined
          : _0x420d2a.formulas[_0x3dcc64.rangeId];
      return _0x53f342
        ? K({
            actionDocumentData: _0x4ea07c.actionDocumentData,
            bodyPath: _0x5b9d35(_0x4ea07c.document, _0x2bd0b9),
            commandService: _0x4ea07c.commandService,
            cursorOffset: _0x2dc372.cursorOffset,
            nextDocumentData: _0x2dc372.nextDocumentData,
            nextMetadataConfig: _0x53f342,
            previousMetadataConfig: _0x4ea07c.model["getFormula"](
              _0x4ea07c.unitId,
              _0x3dcc64.rangeId,
            ),
            rangeId: _0x3dcc64.rangeId,
            segmentId: _0x2bd0b9,
            selectionManager: _0x4ea07c.selectionManager,
            trigger: z.id,
            undoRedoService: _0x4ea07c.undoRedoService,
            unitId: _0x4ea07c.unitId,
          })
        : false;
    },
  },
  B = {
    id: "docs-latex.command.remove-formula",
    type: _0x5b9b08.COMMAND,
    handler: (_0x70bd14, _0x433562) =>
      Fe(_0x70bd14, _0x433562, undefined, B.id),
  },
  V = {
    id: "docs-latex.command.replace-formula-with-text",
    type: _0x5b9b08.COMMAND,
    handler: (_0x43d5ac, _0x5a30bb) =>
      Fe(
        _0x43d5ac,
        _0x5a30bb,
        (_0x5a30bb == null ? undefined : _0x5a30bb.text) ?? "",
        V.id,
      ),
  };
function Fe(_0x12dcf2, _0x3ae874, _0x19ddde, _0x51d367) {
  if (!(_0x3ae874 != null && _0x3ae874.rangeId)) return false;
  let _0x5d346f = _0x3ae874.segmentId ?? "",
    _0x8aa7e0 = H(_0x12dcf2, _0x3ae874.unitId),
    _0x3bcdf6 = _0x8aa7e0 ? U(_0x12dcf2, _0x8aa7e0, _0x5d346f) : null;
  if (!_0x3bcdf6) return false;
  let _0x24bbd1 = he({
    documentData: _0x3bcdf6.actionDocumentData,
    metadata: _0x3bcdf6.model["serialize"](_0x3bcdf6.unitId),
    rangeId: _0x3ae874.rangeId,
    text: _0x19ddde,
  });
  return _0x24bbd1
    ? K({
        actionDocumentData: _0x3bcdf6.actionDocumentData,
        bodyPath: _0x5b9d35(_0x3bcdf6.document, _0x5d346f),
        commandService: _0x3bcdf6.commandService,
        cursorOffset: _0x24bbd1.cursorOffset,
        nextDocumentData: _0x24bbd1.nextDocumentData,
        nextMetadataConfig: undefined,
        previousMetadataConfig: _0x3bcdf6.model["getFormula"](
          _0x3bcdf6.unitId,
          _0x3ae874.rangeId,
        ),
        rangeId: _0x3ae874.rangeId,
        segmentId: _0x5d346f,
        selectionManager: _0x3bcdf6.selectionManager,
        trigger: _0x51d367,
        undoRedoService: _0x3bcdf6.undoRedoService,
        unitId: _0x3bcdf6.unitId,
      })
    : false;
}
function H(_0x1b3f20, _0x3b95cb) {
  let _0x51cabb = _0x1b3f20.get(_0x404820);
  return (
    (_0x3b95cb
      ? _0x51cabb.getUnit(_0x3b95cb, _0x149065.UNIVER_DOC)
      : _0x51cabb.getCurrentUnitOfType(_0x149065.UNIVER_DOC)) ?? null
  );
}
function U(_0x322fab, _0xda1a61, _0x3ad476) {
  if (_0xda1a61.getSnapshot().disabled) return null;
  let _0xf7d65d = _0xda1a61.getSelfOrHeaderFooterModel(_0x3ad476);
  return _0xf7d65d
    ? {
        actionDocumentData: _0xf7d65d.getSnapshot(),
        commandService: _0x322fab.get(_0x2f12d0),
        document: _0xda1a61,
        model: _0x322fab.get(L),
        selectionManager: _0x322fab.get(_0x78ac4a),
        undoRedoService: _0x322fab.get(_0xe7955c),
        unitId: _0xda1a61.getUnitId(),
      }
    : null;
}
function Ie(_0x198d5a, _0x2183ea) {
  var _0x2f6ddb;
  return (_0x2f6ddb = _0x198d5a
    .get(_0x78ac4a)
    .getTextRanges({ subUnitId: _0x2183ea, unitId: _0x2183ea })) == null
    ? undefined
    : _0x2f6ddb[0];
}
function Le(_0x54fee6, _0x5b2a91, _0x99c274) {
  var _0x309021;
  let _0x388adb = _0x27d8c7(6);
  for (
    ;
    (_0x54fee6 != null &&
      (_0x309021 = _0x54fee6.customRanges) != null &&
      _0x309021.some((_0x3bcde5) => _0x3bcde5.rangeId === _0x388adb)) ||
    _0x5b2a91.getFormula(_0x99c274, _0x388adb);
  )
    _0x388adb = _0x27d8c7(6);
  return _0x388adb;
}
function Re(_0x2db8f3, _0x3c3550) {
  return _0x2db8f3.startOffset != null || _0x2db8f3.endOffset != null
    ? _0x2db8f3.startOffset == null || _0x2db8f3.endOffset == null
      ? null
      : {
          endOffset: Math.max(_0x2db8f3.startOffset, _0x2db8f3.endOffset),
          startOffset: Math.min(_0x2db8f3.startOffset, _0x2db8f3.endOffset),
        }
    : !_0x3c3550 ||
        (_0x2db8f3.segmentId != null &&
          _0x2db8f3.segmentId !== (_0x3c3550.segmentId ?? ""))
      ? null
      : {
          endOffset: Math.max(_0x3c3550.startOffset, _0x3c3550.endOffset),
          startOffset: Math.min(_0x3c3550.startOffset, _0x3c3550.endOffset),
        };
}
function ze(_0x4f3685) {
  try {
    return pe(_0x4f3685);
  } catch (_0x30ecda) {
    if (_0x30ecda instanceof T) return null;
    throw _0x30ecda;
  }
}
function Be(_0x168078, _0x4a3b38, _0x481009, _0x4a7e13) {
  let _0x390090 = _0x168078.body,
    _0x4358bb = _0x4a3b38.body,
    _0x1db07a =
      Ve(_0x390090, _0x4358bb, _0x4a7e13) ??
      Ue(
        _0x390090 == null ? undefined : _0x390090.dataStream,
        _0x4358bb == null ? undefined : _0x4358bb.dataStream,
      );
  return [
    _0x1db07a && _0x4358bb ? He(_0x4358bb, _0x1db07a, _0x481009) : null,
    _0x1db07a ? null : Ge(_0x390090, _0x4358bb, _0x481009),
  ]
    .filter(Boolean)
    .reduce(
      (_0x100c91, _0x399a49) => _0x4994fb.compose(_0x100c91, _0x399a49),
      null,
    );
}
function Ve(_0x5ca6d2, _0x2fe56e, _0x7da14f) {
  var _0x680c0f, _0x13ea84;
  if (!_0x5ca6d2 || !_0x2fe56e || _0x5ca6d2.dataStream === _0x2fe56e.dataStream)
    return null;
  let _0x55159b =
      (_0x680c0f = _0x5ca6d2.customRanges) == null
        ? undefined
        : _0x680c0f.find(
            (_0x164981) => _0x164981.rangeId === _0x7da14f && E(_0x164981),
          ),
    _0x2647d0 =
      (_0x13ea84 = _0x2fe56e.customRanges) == null
        ? undefined
        : _0x13ea84.find(
            (_0x5f37d7) => _0x5f37d7.rangeId === _0x7da14f && E(_0x5f37d7),
          );
  if (!_0x55159b || !_0x2647d0) return null;
  let _0x5e20bc = _0x7db40b(_0x55159b),
    _0x13e86a = _0x7db40b(_0x2647d0);
  return _0x5e20bc.startOffset === _0x13e86a.startOffset
    ? {
        start: _0x5e20bc.startOffset,
        deleteLength: _0x5e20bc.endOffset - _0x5e20bc.startOffset,
        insertLength: _0x13e86a.endOffset - _0x13e86a.startOffset,
      }
    : null;
}
function He(_0x30a814, _0x148155, _0x2ae5b1) {
  let _0x1d539d = new _0x56db75();
  return (
    _0x1d539d.retain(_0x148155.start),
    _0x148155.insertLength > 0 &&
      _0x1d539d.insert(
        _0x148155.insertLength,
        _0x47ee9b(
          _0x30a814,
          _0x148155.start,
          _0x148155.start + _0x148155.insertLength,
          false,
        ),
      ),
    _0x148155.deleteLength > 0 && _0x1d539d.delete(_0x148155.deleteLength),
    _0x4994fb.getInstance().editOp(_0x1d539d.serialize(), _0x2ae5b1)
  );
}
function Ue(_0x2f5953, _0x3f11f8) {
  if (_0x2f5953 == null || _0x3f11f8 == null || _0x2f5953 === _0x3f11f8)
    return null;
  let _0x1118e7 = 0;
  for (
    ;
    _0x1118e7 < _0x2f5953.length &&
    _0x1118e7 < _0x3f11f8.length &&
    _0x2f5953[_0x1118e7] === _0x3f11f8[_0x1118e7];
  )
    _0x1118e7++;
  let _0x452b08 = _0x2f5953.length,
    _0x1aea04 = _0x3f11f8.length;
  for (
    ;
    _0x452b08 > _0x1118e7 &&
    _0x1aea04 > _0x1118e7 &&
    _0x2f5953[_0x452b08 - 1] === _0x3f11f8[_0x1aea04 - 1];
  )
    (_0x452b08--, _0x1aea04--);
  return {
    start: _0x1118e7,
    deleteLength: _0x452b08 - _0x1118e7,
    insertLength: _0x1aea04 - _0x1118e7,
  };
}
const We = [
  "paragraphs",
  "sectionBreaks",
  "tables",
  "columnGroups",
  "blockRanges",
  "customBlocks",
  "customRanges",
  "customDecorations",
  "textRuns",
];
function Ge(_0x1eeda4, _0x4c703c, _0x131d5a) {
  let _0x449be1 = [],
    _0x55a4eb = _0x1eeda4 ? Ke(_0x1eeda4) : undefined,
    _0xdfc0bf = _0x4c703c ? Ke(_0x4c703c) : undefined;
  for (let _0x2430da of We)
    W(
      _0x4994fb.getInstance(),
      [..._0x131d5a, _0x2430da],
      _0x55a4eb == null ? undefined : _0x55a4eb[_0x2430da],
      _0xdfc0bf == null ? undefined : _0xdfc0bf[_0x2430da],
      _0x449be1,
    );
  return _0x449be1.reduce(
    (_0x105f4d, _0x2166c7) => _0x4994fb.compose(_0x105f4d, _0x2166c7),
    null,
  );
}
function Ke(_0x1045c3) {
  return _0x1045c3;
}
function W(_0x11e438, _0x2ea1c1, _0x579408, _0x203046, _0x4bfbd3) {
  if (!G(_0x579408, _0x203046)) {
    if (_0x579408 == null) {
      _0x4bfbd3.push(_0x11e438.insertOp(_0x2ea1c1, _0x203046));
      return;
    }
    if (_0x203046 == null) {
      _0x4bfbd3.push(_0x11e438.removeOp(_0x2ea1c1, _0x579408));
      return;
    }
    if (Array.isArray(_0x579408) && Array.isArray(_0x203046)) {
      qe(_0x11e438, _0x2ea1c1, _0x579408, _0x203046, _0x4bfbd3);
      return;
    }
    if (Je(_0x579408) && Je(_0x203046)) {
      new Set([...Object.keys(_0x579408), ...Object.keys(_0x203046)]).forEach(
        (_0x3c5e04) => {
          W(
            _0x11e438,
            [..._0x2ea1c1, _0x3c5e04],
            _0x579408[_0x3c5e04],
            _0x203046[_0x3c5e04],
            _0x4bfbd3,
          );
        },
      );
      return;
    }
    _0x4bfbd3.push(_0x11e438.replaceOp(_0x2ea1c1, _0x579408, _0x203046));
  }
}
function qe(_0x43db9b, _0x19f327, _0x120c25, _0x14ea71, _0x2a9847) {
  if (_0x120c25.length === _0x14ea71.length) {
    _0x120c25.forEach((_0x30b8cb, _0x2f6205) =>
      W(
        _0x43db9b,
        [..._0x19f327, _0x2f6205],
        _0x30b8cb,
        _0x14ea71[_0x2f6205],
        _0x2a9847,
      ),
    );
    return;
  }
  let _0x4a9991 = 0;
  for (
    ;
    _0x4a9991 < _0x120c25.length &&
    _0x4a9991 < _0x14ea71.length &&
    G(_0x120c25[_0x4a9991], _0x14ea71[_0x4a9991]);
  )
    _0x4a9991++;
  let _0x2864c4 = _0x120c25.length - 1,
    _0x20e923 = _0x14ea71.length - 1;
  for (
    ;
    _0x2864c4 >= _0x4a9991 &&
    _0x20e923 >= _0x4a9991 &&
    G(_0x120c25[_0x2864c4], _0x14ea71[_0x20e923]);
  )
    (_0x2864c4--, _0x20e923--);
  for (let _0x5aa95a = _0x2864c4; _0x5aa95a >= _0x4a9991; _0x5aa95a--)
    _0x2a9847.push(
      _0x43db9b.removeOp([..._0x19f327, _0x5aa95a], _0x120c25[_0x5aa95a]),
    );
  for (let _0x5aa914 = _0x4a9991; _0x5aa914 <= _0x20e923; _0x5aa914++)
    _0x2a9847.push(
      _0x43db9b.insertOp([..._0x19f327, _0x5aa914], _0x14ea71[_0x5aa914]),
    );
}
function Je(_0xa2007e) {
  return (
    typeof _0xa2007e == "object" && !!_0xa2007e && !Array.isArray(_0xa2007e)
  );
}
function G(_0x18f5ff, _0x4a2dbc) {
  return JSON.stringify(_0x18f5ff) === JSON.stringify(_0x4a2dbc);
}
function K(_0x1b96e5) {
  let {
      actionDocumentData: _0x33f5c0,
      bodyPath: _0x350332,
      commandService: _0x4b5bb3,
      cursorOffset: _0x1f795c,
      nextDocumentData: _0x3e2205,
      nextMetadataConfig: _0x3ab4c6,
      previousMetadataConfig: _0x4de998,
      rangeId: _0xda95e3,
      segmentId: _0x4af3ce,
      selectionManager: _0x59ad70,
      trigger: _0x4537ab,
      undoRedoService: _0x44fc42,
      unitId: _0x4a3137,
    } = _0x1b96e5,
    _0x4ebb54 = Be(_0x33f5c0, _0x3e2205, _0x350332, _0xda95e3),
    _0xa10522 = Qe(_0x4a3137, _0xda95e3, _0x3ab4c6),
    _0x2626bc = Qe(_0x4a3137, _0xda95e3, _0x4de998),
    _0x1f2278 = _0x4ebb54
      ? Xe(_0x4a3137, _0x4af3ce, _0x1f795c, _0x4ebb54, _0x4537ab)
      : null,
    _0x55ee38 = null,
    _0x1d0440 = false;
  try {
    if (_0x1f2278) {
      let _0x5c07fa = _0x4b5bb3.syncExecuteCommand(
        _0x1f2278.id,
        _0x1f2278.params,
      );
      if (!_0x5c07fa) return false;
      _0x55ee38 = {
        id: _0x923e6a.id,
        params: {
          ..._0x5c07fa,
          noHistory: true,
          noNeedSetTextRange: true,
          segmentId: _0x4af3ce,
        },
      };
    }
    if (!_0x4b5bb3.syncExecuteCommand(_0xa10522.id, _0xa10522.params))
      return (Ze(_0x4b5bb3, _0x55ee38), false);
    ((_0x1d0440 = true),
      _0x44fc42.pushUndoRedo({
        id: _0x4537ab + ":" + _0xda95e3,
        redoMutations: [...(_0x1f2278 ? [_0x1f2278] : []), _0xa10522],
        undoMutations: [_0x2626bc, ...(_0x55ee38 ? [_0x55ee38] : [])],
        unitID: _0x4a3137,
      }));
  } catch (_0xf5584b) {
    try {
      _0x1d0440 && _0x4b5bb3.syncExecuteCommand(_0x2626bc.id, _0x2626bc.params);
    } finally {
      Ze(_0x4b5bb3, _0x55ee38);
    }
    throw _0xf5584b;
  }
  return (Ye(_0x59ad70, _0x4a3137, _0x4af3ce, _0x1f795c), true);
}
function Ye(_0x2a8234, _0x2b543a, _0x158cf4, _0xc4e561) {
  _0x2a8234.replaceDocRanges(
    [{ startOffset: _0xc4e561, endOffset: _0xc4e561, segmentId: _0x158cf4 }],
    { unitId: _0x2b543a, subUnitId: _0x2b543a },
    false,
    { [_0x312d77]: true },
  );
}
function Xe(_0x25d3e6, _0x2a79f9, _0x4af96e, _0x4f1a52, _0xea71a0) {
  return {
    id: _0x923e6a.id,
    params: {
      unitId: _0x25d3e6,
      actions: _0x4f1a52,
      segmentId: _0x2a79f9,
      textRanges: [
        {
          startOffset: _0x4af96e,
          endOffset: _0x4af96e,
          collapsed: true,
          segmentId: _0x2a79f9,
        },
      ],
      isEditing: false,
      noHistory: true,
      noNeedSetTextRange: true,
      trigger: _0xea71a0,
    },
  };
}
function Ze(_0x6ca3ea, _0x1e7270) {
  _0x1e7270 && _0x6ca3ea.syncExecuteCommand(_0x1e7270.id, _0x1e7270.params);
}
function Qe(_0x5493b0, _0x5a978e, _0x388714) {
  return _0x388714
    ? {
        id: Ne.id,
        params: { config: _0x388714, rangeId: _0x5a978e, unitId: _0x5493b0 },
      }
    : { id: Pe.id, params: { rangeId: _0x5a978e, unitId: _0x5493b0 } };
}
const q = "DOC_LATEX_PLUGIN",
  J = "docs-latex.config",
  Y = {};
var $e = "@univerjs-pro/docs-latex",
  et = "1.0.0-insiders.20260907-70fc579";
function X(_0x131174, _0x269873) {
  return function (_0x442425, _0x7e3ea9) {
    _0x269873(_0x442425, _0x7e3ea9, _0x131174);
  };
}
function Z(_0xe803bf, _0x1a115c, _0xe5cc4d, _0x50bfac) {
  var _0x1c7dec = arguments.length,
    _0x2abcb0 =
      _0x1c7dec < 3
        ? _0x1a115c
        : _0x50bfac === null
          ? (_0x50bfac = Object.getOwnPropertyDescriptor(_0x1a115c, _0xe5cc4d))
          : _0x50bfac,
    _0x37876e;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2abcb0 = Reflect.decorate(_0xe803bf, _0x1a115c, _0xe5cc4d, _0x50bfac);
  else {
    for (var _0x1732ce = _0xe803bf.length - 1; _0x1732ce >= 0; _0x1732ce--)
      (_0x37876e = _0xe803bf[_0x1732ce]) &&
        (_0x2abcb0 =
          (_0x1c7dec < 3
            ? _0x37876e(_0x2abcb0)
            : _0x1c7dec > 3
              ? _0x37876e(_0x1a115c, _0xe5cc4d, _0x2abcb0)
              : _0x37876e(_0x1a115c, _0xe5cc4d)) || _0x2abcb0);
  }
  return (
    _0x1c7dec > 3 &&
      _0x2abcb0 &&
      Object.defineProperty(_0x1a115c, _0xe5cc4d, _0x2abcb0),
    _0x2abcb0
  );
}
let Q = class extends _0x535287 {
  constructor(_0x8ebb40, _0x39877f) {
    (super(),
      (this._resourceManagerService = _0x8ebb40),
      (this._docsLatexModel = _0x39877f),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: q,
        businesses: [_0x149065.UNIVER_DOC],
        toJson: (_0x1574b1) =>
          JSON.stringify(this._docsLatexModel["serialize"](_0x1574b1)),
        parseJson: (_0x41e1d5) => S(JSON.parse(_0x41e1d5)),
        onLoad: (_0xe85092, _0x43e651) =>
          this._docsLatexModel["deserialize"](_0xe85092, _0x43e651),
        onUnLoad: (_0x197f0e) => this._docsLatexModel["removeUnit"](_0x197f0e),
      }),
    );
  }
};
Q = Z([X(0, _0x2fc6cd), X(1, _0x5dcfaa(L))], Q);
let $ = class extends _0x1c9b7c {
  constructor(_0x2b6b76 = Y, _0x301602, _0x268abc, _0x16f6ba) {
    (super(),
      (this._config = _0x2b6b76),
      (this._injector = _0x301602),
      (this._commandService = _0x268abc),
      (this._configService = _0x16f6ba));
    let { ..._0xdf68ed } = _0x3d8e46({}, Y, this._config);
    this._configService["setConfig"](J, _0xdf68ed);
  }
  onStarting() {
    (this._injector["add"]([L]),
      this._injector["add"]([Q]),
      this._injector["get"](L),
      this._injector["get"](Q),
      [Pe, Ne, R, B, V, z].forEach((_0x52abee) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x52abee)),
      ));
  }
};
(I($, "pluginName", q),
  I($, "packageName", $e),
  I($, "version", et),
  I($, "type", _0x149065.UNIVER_DOC),
  ($ = Z(
    [
      _0x501d86(_0x4e430a, _0x3f08e0),
      X(1, _0x5dcfaa(_0x65f4db)),
      X(2, _0x2f12d0),
      X(3, _0x2192c2),
    ],
    $,
  )));
export {
  b as DEFAULT_LATEX_FORMULA_PROPERTIES,
  fe as DOCS_LATEX_CUSTOM_RANGE_KIND,
  q as DOCS_LATEX_PLUGIN,
  J as DOCS_LATEX_PLUGIN_CONFIG_KEY,
  L as DocsLatexModel,
  R as InsertDocsLatexFormulaCommand,
  B as RemoveDocsLatexFormulaCommand,
  V as ReplaceDocsLatexFormulaWithTextCommand,
  $ as UniverDocsLatexPlugin,
  z as UpdateDocsLatexFormulaCommand,
  pe as buildInsertLatexFormulaActions,
  he as buildRemoveLatexFormulaActions,
  me as buildUpdateLatexFormulaActions,
  Y as defaultPluginConfig,
  ge as getFormulaLatexFromRange,
  E as isDocsLatexFormulaRange,
  x as normalizeDocsLatexFormulaConfig,
  S as normalizeDocsLatexMetadataResource,
};
