import {
  FormulaCacheEligibilityService as _0x22a3f1,
  FormulaLastValuePersistenceService as _0xcc7331,
  HostExternalReferenceModel as _0x80dbb6,
  UniverProFormulaEnginePlugin as _0x546f77,
  buildUpsertHostExternalReferenceMutations as _0x460482,
  collectFormulaExternalReferenceQualifiers as _0x479065,
  getScalarFormulaResultCell as _0x476080,
  resolveFormulaResultPresentation as _0x4b1422,
  resolveHostFormulaExternalReferences as _0x5bacae,
  toFormulaLastValue as _0x3d3cbe,
} from "@univerjs-pro/engine-formula";
import {
  CellValueType as _0x579370,
  CommandType as _0xa3c7d9,
  CustomRangeType as _0x453df9,
  DataStreamTreeTokenType as _0xc349f1,
  DependentOn as _0x472c14,
  Disposable as _0x225d31,
  ICommandService as _0x29c310,
  IConfigService as _0x2156c2,
  IResourceManagerService as _0xc05524,
  IUndoRedoService as _0x16ed43,
  IUniverInstanceService as _0x48e860,
  Inject as _0x29531a,
  Injector as _0x38c69b,
  JSONX as _0x118c87,
  Plugin as _0x4692c2,
  TextX as _0x2b0b33,
  Tools as _0x547fb8,
  UniverInstanceType as _0x452e99,
  generateRandomId as _0x2586e9,
  getBodySliceForTextXAction as _0x85185,
  getCustomRangeInterval as _0xea5688,
  getParagraphContentStartOffset as _0x2e032c,
  getRichTextEditPath as _0x34e76b,
  merge as _0x515b3d,
  shiftExclusiveRangeOnDelete as _0x16ac88,
  shiftExclusiveRangeOnInsert as _0x3c994e,
  shiftInclusiveRangeOnDelete as _0x25ebf0,
  shiftInclusiveRangeOnInsert as _0x20711d,
  touchDependencies as _0x2288c7,
} from "@univerjs/core";
import {
  DOC_SELECTION_OPTION_PRESERVE_CARET as _0x45ee95,
  DocSelectionManagerService as _0x51c614,
  DocTextResolverService as _0x34cb38,
  RichTextEditingMutation as _0x485e97,
  UniverDocsPlugin as _0x3d6ca7,
} from "@univerjs/docs";
import {
  FormulaResultStatus as _0x28d2f3,
  LexerTreeBuilder as _0x401c55,
  OtherFormulaBizType as _0x2dfdb6,
  RegisterOtherFormulaService as _0x2f32b4,
} from "@univerjs/engine-formula";
import { Subject as _0x26aa73 } from "rxjs";
import { UniverLicensePlugin as _0xcf8179 } from "@univerjs-pro/license";
const y = "DOC_FORMULA_PLUGIN",
  je = 1,
  Me = "univer-docs-formula",
  Ne = "￼";
function b() {
  return { schemaVersion: 1, formulas: {} };
}
function x(_0x1ff7b9) {
  return !_0x1ff7b9 ||
    typeof _0x1ff7b9 != "object" ||
    !S(_0x1ff7b9, ["schemaVersion", "formulas"]) ||
    !("schemaVersion" in _0x1ff7b9) ||
    _0x1ff7b9.schemaVersion !== 1 ||
    !("formulas" in _0x1ff7b9) ||
    !_0x1ff7b9.formulas ||
    typeof _0x1ff7b9.formulas != "object" ||
    Array.isArray(_0x1ff7b9.formulas)
    ? false
    : Object.entries(_0x1ff7b9.formulas).every(
        ([_0x1059fd, _0x556a8a]) => _0x1059fd.length > 0 && Pe(_0x556a8a),
      );
}
function Pe(_0x2f80c5) {
  return !_0x2f80c5 ||
    typeof _0x2f80c5 != "object" ||
    !S(_0x2f80c5, ["formula", "numberFormat", "lastValue"]) ||
    !("formula" in _0x2f80c5) ||
    typeof _0x2f80c5.formula != "string" ||
    !_0x2f80c5.formula["trim"]() ||
    ("numberFormat" in _0x2f80c5 &&
      _0x2f80c5.numberFormat != null &&
      (typeof _0x2f80c5.numberFormat != "object" ||
        !S(_0x2f80c5.numberFormat, ["pattern"]) ||
        !("pattern" in _0x2f80c5.numberFormat) ||
        typeof _0x2f80c5.numberFormat["pattern"] != "string"))
    ? false
    : !("lastValue" in _0x2f80c5) ||
        _0x2f80c5.lastValue == null ||
        Fe(_0x2f80c5.lastValue);
}
function Fe(_0x28aafe) {
  return !_0x28aafe ||
    typeof _0x28aafe != "object" ||
    !S(_0x28aafe, ["v", "t", "pattern"]) ||
    !("v" in _0x28aafe) ||
    (_0x28aafe.v !== null &&
      typeof _0x28aafe.v != "string" &&
      typeof _0x28aafe.v != "number" &&
      typeof _0x28aafe.v != "boolean") ||
    ("t" in _0x28aafe && _0x28aafe.t != null && !Ie(_0x28aafe.t))
    ? false
    : !("pattern" in _0x28aafe) ||
        _0x28aafe.pattern == null ||
        typeof _0x28aafe.pattern == "string";
}
function S(_0x377807, _0x49d6f2) {
  let _0x36ad0a = new Set(_0x49d6f2);
  return Object.keys(_0x377807).every((_0x585424) => _0x36ad0a.has(_0x585424));
}
function Ie(_0xb26274) {
  return (
    typeof _0xb26274 == "number" && Object.values(_0x579370).includes(_0xb26274)
  );
}
const Le = new Set([
  _0xc349f1.SECTION_BREAK,
  _0xc349f1.TABLE_START,
  _0xc349f1.TABLE_ROW_START,
  _0xc349f1.TABLE_CELL_START,
  _0xc349f1.TABLE_CELL_END,
  _0xc349f1.TABLE_ROW_END,
  _0xc349f1.TABLE_END,
  _0xc349f1.COLUMN_GROUP_START,
  _0xc349f1.COLUMN_START,
  _0xc349f1.COLUMN_END,
  _0xc349f1.COLUMN_GROUP_END,
  _0xc349f1.BLOCK_START,
  _0xc349f1.BLOCK_END,
  _0xc349f1.CUSTOM_BLOCK,
]);
var C = class extends Error {
  constructor() {
    super("Doc Formula range cannot cross document structure boundaries");
  }
};
function Re(_0x3ba947) {
  var _0x1ea0c9, _0x1c3f0b;
  let _0x39fa89 = _0x547fb8.deepClone(_0x3ba947.documentData),
    _0xc1f439 = j(_0x39fa89),
    { startOffset: _0x4fac82, endOffset: _0x71de02 } = We(
      _0xc1f439,
      _0x3ba947.startOffset,
      _0x3ba947.endOffset,
    );
  He(_0xc1f439, _0x4fac82, _0x71de02);
  let _0x403e5d =
    ((_0x1ea0c9 = _0xc1f439.customRanges) == null
      ? undefined
      : _0x1ea0c9
          .filter((_0x3eb337) => {
            if (!w(_0x3eb337)) return false;
            let _0x323e8b = _0xea5688(_0x3eb337);
            return (
              _0x323e8b.endOffset > _0x4fac82 &&
              _0x323e8b.startOffset < _0x71de02
            );
          })
          .map((_0x42fcc9) => _0x42fcc9.rangeId)) ?? [];
  (qe(_0xc1f439, _0x4fac82, _0x71de02, "￼"),
    (_0xc1f439.customRanges = [
      ...(((_0x1c3f0b = _0xc1f439.customRanges) == null
        ? undefined
        : _0x1c3f0b.filter(
            (_0x441036) =>
              !_0x403e5d.includes(_0x441036.rangeId) &&
              _0x441036.rangeId !== _0x3ba947.rangeId,
          )) ?? []),
      Ue(_0x3ba947.rangeId, _0x4fac82),
    ].sort(
      (_0x4c91a5, _0x1e00f6) => _0x4c91a5.startIndex - _0x1e00f6.startIndex,
    )));
  let _0x1d6fa2 = E(_0x3ba947.resource);
  return (
    _0x403e5d.forEach((_0x6cd029) => {
      delete _0x1d6fa2.formulas[_0x6cd029];
    }),
    (_0x1d6fa2.formulas[_0x3ba947.rangeId] = _0x547fb8.deepClone(
      _0x3ba947.config,
    )),
    {
      nextDocumentData: _0x39fa89,
      nextResource: _0x1d6fa2,
      cursorOffset: _0x4fac82 + 1,
    }
  );
}
function ze(_0x3084e9) {
  var _0x42db8b, _0x4b96ab;
  let _0x3fe211 = _0x547fb8.deepClone(_0x3084e9.documentData),
    _0x282abb =
      (_0x42db8b = j(_0x3fe211).customRanges) == null
        ? undefined
        : _0x42db8b.find(
            (_0x33b5dd) =>
              _0x33b5dd.rangeId === _0x3084e9.rangeId && w(_0x33b5dd),
          );
  if (
    !_0x282abb ||
    !(
      (_0x4b96ab = _0x3084e9.resource) != null &&
      _0x4b96ab.formulas[_0x3084e9.rangeId]
    )
  )
    return null;
  let _0x2b1c08 = E(_0x3084e9.resource);
  return (
    (_0x2b1c08.formulas[_0x3084e9.rangeId] = _0x547fb8.deepClone(
      _0x3084e9.config,
    )),
    {
      nextDocumentData: _0x3fe211,
      nextResource: _0x2b1c08,
      cursorOffset: _0x282abb.endIndex + 1,
    }
  );
}
function Be(_0x5d3d73) {
  let _0xa8dff0 = _0x547fb8.deepClone(_0x5d3d73.documentData),
    _0x2314ca = Je(_0xa8dff0, _0x5d3d73.rangeId, _0x5d3d73.text ?? "");
  if (_0x2314ca == null) return null;
  let _0x276501 = E(_0x5d3d73.resource);
  return (
    delete _0x276501.formulas[_0x5d3d73.rangeId],
    {
      nextDocumentData: _0xa8dff0,
      nextResource: _0x276501,
      cursorOffset: _0x2314ca,
    }
  );
}
function Ve(_0x589478, _0x8621d2) {
  var _0x4e4b84;
  let _0x8cdaf6 = _0x547fb8.deepClone(_0x589478),
    _0x57b476 = _0x8cdaf6.body;
  if (!_0x57b476) return _0x8cdaf6;
  let _0xfd00c0 = new Map(
      _0x8621d2.map((_0xd2044c) => [_0xd2044c.rangeId, _0xd2044c.text]),
    ),
    _0x1da31e =
      ((_0x4e4b84 = _0x57b476.customRanges) == null
        ? undefined
        : _0x4e4b84
            .filter(
              (_0x16f255) => w(_0x16f255) && _0xfd00c0.has(_0x16f255.rangeId),
            )
            .sort(
              (_0x398fd4, _0x5d7458) =>
                _0x5d7458.startIndex - _0x398fd4.startIndex,
            )) ?? [];
  for (let _0x3d3515 of _0x1da31e)
    Je(_0x8cdaf6, _0x3d3515.rangeId, _0xfd00c0.get(_0x3d3515.rangeId) ?? "");
  return _0x8cdaf6;
}
function w(_0x48de66) {
  var _0x353c9f;
  return (
    (_0x48de66 == null ? undefined : _0x48de66.rangeType) ===
      _0x453df9.CUSTOM &&
    _0x48de66.wholeEntity === true &&
    ((_0x353c9f = _0x48de66.properties) == null
      ? undefined
      : _0x353c9f.kind) === "univer-docs-formula"
  );
}
function T(_0x100de0, _0xfa04c) {
  var _0x283572;
  return _0x100de0 == null || (_0x283572 = _0x100de0.customRanges) == null
    ? undefined
    : _0x283572.find(
        (_0x1fee3c) => _0x1fee3c.rangeId === _0xfa04c && w(_0x1fee3c),
      );
}
function He(_0x213e13, _0x47b21c, _0x5cc896) {
  if (_0x47b21c === _0x5cc896) {
    if (Le.has(_0x213e13.dataStream[_0x47b21c])) throw new C();
    return;
  }
  for (let _0x110fe1 = _0x47b21c; _0x110fe1 < _0x5cc896; _0x110fe1++)
    if (
      _0x213e13.dataStream[_0x110fe1] === _0xc349f1.PARAGRAPH ||
      Le.has(_0x213e13.dataStream[_0x110fe1])
    )
      throw new C();
}
function Ue(_0x17ae15, _0xd0c341) {
  return {
    startIndex: _0xd0c341,
    endIndex: _0xd0c341,
    rangeId: _0x17ae15,
    rangeType: _0x453df9.CUSTOM,
    wholeEntity: true,
    properties: { kind: Me },
  };
}
function E(_0x19d64d) {
  return _0x19d64d ? _0x547fb8.deepClone(_0x19d64d) : b();
}
function We(_0xf90771, _0x24344a, _0x2373e4) {
  let _0x1975f9 = Ke(_0xf90771),
    _0x2965a6 = _0x24344a ?? _0x1975f9,
    _0x216f5f = _0x2373e4 ?? _0x2965a6;
  return {
    startOffset: Ge(Math.min(_0x2965a6, _0x216f5f), _0x1975f9),
    endOffset: Ge(Math.max(_0x2965a6, _0x216f5f), _0x1975f9),
  };
}
function Ge(_0x1bb0ad, _0x3b837e) {
  return Math.max(0, Math.min(_0x1bb0ad, _0x3b837e));
}
function Ke(_0x376582) {
  return _0x376582.dataStream["endsWith"](
    "" + _0xc349f1.PARAGRAPH + _0xc349f1.SECTION_BREAK,
  )
    ? Math.max(0, _0x376582.dataStream["length"] - 2)
    : _0x376582.dataStream["endsWith"](_0xc349f1.SECTION_BREAK)
      ? Math.max(0, _0x376582.dataStream["length"] - 1)
      : _0x376582.dataStream["length"];
}
function qe(_0x5cb5e6, _0x3843bc, _0x17c28f, _0x12189d) {
  (_0x17c28f > _0x3843bc && Xe(_0x5cb5e6, _0x3843bc, _0x17c28f),
    Ye(_0x5cb5e6, _0x3843bc, _0x12189d));
}
function Je(_0x675c4c, _0x7d3e9d, _0x36d3e9) {
  var _0x9b0cd6, _0x33af95;
  let _0x1aaf8d = j(_0x675c4c),
    _0x5b1142 =
      (_0x9b0cd6 = _0x1aaf8d.customRanges) == null
        ? undefined
        : _0x9b0cd6.find(
            (_0x30997d) => _0x30997d.rangeId === _0x7d3e9d && w(_0x30997d),
          );
  if (!_0x5b1142) return null;
  let _0x3f9f7b = _0xea5688(_0x5b1142);
  return (
    qe(_0x1aaf8d, _0x3f9f7b.startOffset, _0x3f9f7b.endOffset, _0x36d3e9),
    (_0x1aaf8d.customRanges =
      (_0x33af95 = _0x1aaf8d.customRanges) == null
        ? undefined
        : _0x33af95.filter((_0x2076b8) => _0x2076b8.rangeId !== _0x7d3e9d)),
    _0x3f9f7b.startOffset + _0x36d3e9.length
  );
}
function Ye(_0x4d5771, _0x56e555, _0x9426e0) {
  _0x9426e0 &&
    ((_0x4d5771.dataStream =
      "" +
      _0x4d5771.dataStream["slice"](0, _0x56e555) +
      _0x9426e0 +
      _0x4d5771.dataStream["slice"](_0x56e555)),
    Ze(_0x4d5771, _0x56e555, _0x9426e0.length));
}
function Xe(_0x3ee458, _0x4ab83c, _0x4febf5) {
  let _0x3a08f5 = _0x4febf5 - _0x4ab83c;
  ((_0x3ee458.dataStream =
    "" +
    _0x3ee458.dataStream["slice"](0, _0x4ab83c) +
    _0x3ee458.dataStream["slice"](_0x4febf5)),
    Qe(_0x3ee458, _0x4ab83c, _0x3a08f5));
}
function Ze(_0x2796f0, _0x18e559, _0x5201bd) {
  ((_0x2796f0.paragraphs = D(_0x2796f0.paragraphs, _0x18e559, _0x5201bd)),
    (_0x2796f0.sectionBreaks = D(
      _0x2796f0.sectionBreaks,
      _0x18e559,
      _0x5201bd,
    )),
    (_0x2796f0.customBlocks = D(_0x2796f0.customBlocks, _0x18e559, _0x5201bd)),
    (_0x2796f0.textRuns = $e(_0x2796f0.textRuns, _0x18e559, _0x5201bd)),
    (_0x2796f0.tables = et(_0x2796f0.tables, _0x18e559, _0x5201bd)),
    (_0x2796f0.columnGroups = k(_0x2796f0.columnGroups, _0x18e559, _0x5201bd)),
    (_0x2796f0.customRanges = k(_0x2796f0.customRanges, _0x18e559, _0x5201bd)),
    (_0x2796f0.customDecorations = k(
      _0x2796f0.customDecorations,
      _0x18e559,
      _0x5201bd,
    )),
    (_0x2796f0.blockRanges = k(_0x2796f0.blockRanges, _0x18e559, _0x5201bd)));
}
function Qe(_0x4b02eb, _0x16df36, _0x4fef5c) {
  var _0x5b5058, _0x5e1b0f;
  ((_0x4b02eb.paragraphs = O(_0x4b02eb.paragraphs, _0x16df36, _0x4fef5c)),
    (_0x4b02eb.sectionBreaks = O(
      _0x4b02eb.sectionBreaks,
      _0x16df36,
      _0x4fef5c,
    )),
    (_0x4b02eb.customBlocks = O(_0x4b02eb.customBlocks, _0x16df36, _0x4fef5c)),
    (_0x4b02eb.textRuns =
      (_0x5b5058 = tt(
        (_0x5e1b0f = _0x4b02eb.textRuns) == null
          ? undefined
          : _0x5e1b0f.map((_0x191383) => ({
              ..._0x191383,
              startIndex: _0x191383.st,
              endIndex: _0x191383.ed,
            })),
        _0x16df36,
        _0x4fef5c,
      )) == null
        ? undefined
        : _0x5b5058.map((_0x48bc8a) => {
            let {
              startIndex: _0x460d05,
              endIndex: _0x23b218,
              ..._0x3e6240
            } = _0x48bc8a;
            return { ..._0x3e6240, st: _0x460d05, ed: _0x23b218 };
          })),
    (_0x4b02eb.tables = tt(_0x4b02eb.tables, _0x16df36, _0x4fef5c)),
    (_0x4b02eb.columnGroups = A(_0x4b02eb.columnGroups, _0x16df36, _0x4fef5c)),
    (_0x4b02eb.customRanges = A(_0x4b02eb.customRanges, _0x16df36, _0x4fef5c)),
    (_0x4b02eb.customDecorations = A(
      _0x4b02eb.customDecorations,
      _0x16df36,
      _0x4fef5c,
    )),
    (_0x4b02eb.blockRanges = A(_0x4b02eb.blockRanges, _0x16df36, _0x4fef5c)));
}
function D(_0x112eaf, _0x45a4ea, _0x4012df) {
  return _0x112eaf == null
    ? undefined
    : _0x112eaf.map((_0x2f8c8a) =>
        _0x2f8c8a.startIndex >= _0x45a4ea
          ? { ..._0x2f8c8a, startIndex: _0x2f8c8a.startIndex + _0x4012df }
          : _0x2f8c8a,
      );
}
function O(_0x527f7b, _0x135d68, _0x1359c4) {
  let _0xabdda3 = _0x135d68 + _0x1359c4;
  return _0x527f7b == null
    ? undefined
    : _0x527f7b
        .map((_0x2666ae) =>
          _0x2666ae.startIndex >= _0x135d68 && _0x2666ae.startIndex < _0xabdda3
            ? null
            : _0x2666ae.startIndex >= _0xabdda3
              ? { ..._0x2666ae, startIndex: _0x2666ae.startIndex - _0x1359c4 }
              : _0x2666ae,
        )
        .filter((_0x2f23d4) => _0x2f23d4 != null);
}
function $e(_0x28886a, _0x3ed13c, _0x1c943f) {
  return _0x28886a == null
    ? undefined
    : _0x28886a.map((_0xbed6db) =>
        _0xbed6db.st >= _0x3ed13c
          ? {
              ..._0xbed6db,
              st: _0xbed6db.st + _0x1c943f,
              ed: _0xbed6db.ed + _0x1c943f,
            }
          : _0xbed6db.ed > _0x3ed13c
            ? { ..._0xbed6db, ed: _0xbed6db.ed + _0x1c943f }
            : _0xbed6db,
      );
}
function k(_0x4a358c, _0x48dc0f, _0xaae257) {
  return _0x4a358c == null
    ? undefined
    : _0x4a358c.map((_0x464249) => _0x20711d(_0x464249, _0x48dc0f, _0xaae257));
}
function et(_0x3925b8, _0xb332d, _0x26cf85) {
  return _0x3925b8 == null
    ? undefined
    : _0x3925b8.map((_0x4c5221) => _0x3c994e(_0x4c5221, _0xb332d, _0x26cf85));
}
function A(_0x2b1f26, _0x507e35, _0x32b786) {
  return _0x2b1f26 == null
    ? undefined
    : _0x2b1f26
        .map((_0x13d6af) => _0x25ebf0(_0x13d6af, _0x507e35, _0x32b786))
        .filter((_0x499b85) => _0x499b85 != null);
}
function tt(_0x2b5d1d, _0x39cdb6, _0x164939) {
  return _0x2b5d1d == null
    ? undefined
    : _0x2b5d1d
        .map((_0x13bfff) => _0x16ac88(_0x13bfff, _0x39cdb6, _0x164939))
        .filter((_0x254103) => _0x254103 != null);
}
function j(_0x487109) {
  if (!_0x487109.body)
    throw Error("Document main body is required to insert Doc Formula.");
  return _0x487109.body;
}
function M(_0x207e46) {
  "@babel/helpers - typeof";
  return (
    (M =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2dcbcf) {
            return typeof _0x2dcbcf;
          }
        : function (_0x43a94f) {
            return _0x43a94f &&
              typeof Symbol == "function" &&
              _0x43a94f.constructor === Symbol &&
              _0x43a94f !== Symbol.prototype
              ? "symbol"
              : typeof _0x43a94f;
          }),
    M(_0x207e46)
  );
}
function nt(_0x5421bd, _0x194643) {
  if (M(_0x5421bd) != "object" || !_0x5421bd) return _0x5421bd;
  var _0x403fb6 = _0x5421bd[Symbol.toPrimitive];
  if (_0x403fb6 !== undefined) {
    var _0xd3ed88 = _0x403fb6.call(_0x5421bd, _0x194643 || "default");
    if (M(_0xd3ed88) != "object") return _0xd3ed88;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x194643 === "string" ? String : Number)(_0x5421bd);
}
function rt(_0x59c766) {
  var _0x2e2e2b = nt(_0x59c766, "string");
  return M(_0x2e2e2b) == "symbol" ? _0x2e2e2b : _0x2e2e2b + "";
}
function N(_0x13c920, _0x6bbba2, _0x129304) {
  return (
    (_0x6bbba2 = rt(_0x6bbba2)) in _0x13c920
      ? Object.defineProperty(_0x13c920, _0x6bbba2, {
          value: _0x129304,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x13c920[_0x6bbba2] = _0x129304),
    _0x13c920
  );
}
var P = class extends _0x225d31 {
  constructor(..._0x288ee1) {
    (super(..._0x288ee1),
      N(this, "_resources", new Map()),
      N(this, "_rawResources", new Map()),
      N(this, "_loadErrors", new Map()),
      N(this, "_change$", new _0x26aa73()),
      N(this, "change$", this._change$["asObservable"]()));
  }
  getFormula(_0x80a947, _0x4bcecf) {
    var _0x21c4e6;
    let _0x31a32e =
      (_0x21c4e6 = this._resources["get"](_0x80a947)) == null
        ? undefined
        : _0x21c4e6.formulas[_0x4bcecf];
    return _0x31a32e ? _0x547fb8.deepClone(_0x31a32e) : undefined;
  }
  getFormulas(_0x573c36) {
    var _0xaad9c1;
    return _0x547fb8.deepClone(
      ((_0xaad9c1 = this._resources["get"](_0x573c36)) == null
        ? undefined
        : _0xaad9c1.formulas) ?? {},
    );
  }
  getResource(_0x43de45) {
    let _0x1d05d0 = this._resources["get"](_0x43de45);
    return _0x1d05d0 ? _0x547fb8.deepClone(_0x1d05d0) : undefined;
  }
  setFormula(_0x197833, _0x4920b8, _0x3a533c) {
    return this.setFormulas(_0x197833, { [_0x4920b8]: _0x3a533c });
  }
  setResource(_0x458469, _0x5ae6f7) {
    return this._loadErrors["has"](_0x458469) || !x(_0x5ae6f7)
      ? false
      : (this._resources["set"](_0x458469, _0x547fb8.deepClone(_0x5ae6f7)),
        this._change$["next"]({ unitId: _0x458469 }),
        true);
  }
  setFormulas(_0x2580a7, _0x57f2e4) {
    if (
      this._loadErrors["has"](_0x2580a7) ||
      !Object.keys(_0x57f2e4).length ||
      !x({ schemaVersion: 1, formulas: _0x57f2e4 })
    )
      return false;
    let _0x509998 = this._resources["get"](_0x2580a7) ?? b(),
      _0x5996cd = _0x547fb8.deepClone(_0x509998);
    return (
      Object.assign(_0x5996cd.formulas, _0x547fb8.deepClone(_0x57f2e4)),
      this._resources["set"](_0x2580a7, _0x5996cd),
      this._change$["next"]({
        unitId: _0x2580a7,
        rangeIds: Object.keys(_0x57f2e4),
      }),
      true
    );
  }
  removeFormula(_0x3fa0da, _0x26b236) {
    if (this._loadErrors["has"](_0x3fa0da)) return false;
    let _0x2b4f1f = this._resources["get"](_0x3fa0da);
    if (!(_0x2b4f1f != null && _0x2b4f1f.formulas[_0x26b236])) return false;
    let _0x4cff6e = _0x547fb8.deepClone(_0x2b4f1f);
    return (
      delete _0x4cff6e.formulas[_0x26b236],
      this._resources["set"](_0x3fa0da, _0x4cff6e),
      this._change$["next"]({ unitId: _0x3fa0da, rangeIds: [_0x26b236] }),
      true
    );
  }
  load(_0x1b244a, _0x1044e7) {
    return _0x1044e7 &&
      typeof _0x1044e7 == "object" &&
      "schemaVersion" in _0x1044e7 &&
      _0x1044e7.schemaVersion !== 1
      ? (this._preserveInvalid(_0x1b244a, _0x1044e7, "unsupported-version"),
        false)
      : x(_0x1044e7)
        ? (this._resources["set"](_0x1b244a, _0x547fb8.deepClone(_0x1044e7)),
          this._rawResources["delete"](_0x1b244a),
          this._loadErrors["delete"](_0x1b244a),
          this._change$["next"]({ unitId: _0x1b244a }),
          true)
        : (this._preserveInvalid(_0x1b244a, _0x1044e7, "invalid-resource"),
          false);
  }
  serialize(_0x4d6df2) {
    let _0x545c7d = this._resources["get"](_0x4d6df2);
    return _0x545c7d
      ? _0x547fb8.deepClone(_0x545c7d)
      : this._rawResources["has"](_0x4d6df2)
        ? _0x547fb8.deepClone(this._rawResources["get"](_0x4d6df2))
        : b();
  }
  getLoadError(_0x2f2f8f) {
    return this._loadErrors["get"](_0x2f2f8f);
  }
  removeUnit(_0x4e7812) {
    (this._resources["delete"](_0x4e7812),
      this._rawResources["delete"](_0x4e7812),
      this._loadErrors["delete"](_0x4e7812),
      this._change$["next"]({ unitId: _0x4e7812 }));
  }
  dispose() {
    (this._resources["clear"](),
      this._rawResources["clear"](),
      this._loadErrors["clear"](),
      this._change$["complete"](),
      super.dispose());
  }
  _preserveInvalid(_0x1d38b5, _0xe98b44, _0x150401) {
    (this._resources["delete"](_0x1d38b5),
      this._rawResources["set"](_0x1d38b5, _0x547fb8.deepClone(_0xe98b44)),
      this._loadErrors["set"](_0x1d38b5, _0x150401),
      this._change$["next"]({ unitId: _0x1d38b5 }));
  }
};
let it = (function (_0xc1c057) {
  return (
    (_0xc1c057.EMPTY = "empty"),
    (_0xc1c057.PENDING = "pending"),
    (_0xc1c057.SUCCESS = "success"),
    (_0xc1c057.ERROR = "error"),
    _0xc1c057
  );
})({});
function F(_0x219469, _0xf9eb8d) {
  return function (_0x1ece7d, _0x1a9cfe) {
    _0xf9eb8d(_0x1ece7d, _0x1a9cfe, _0x219469);
  };
}
function I(_0x5af7bf, _0x31da7a, _0x3d32de, _0x416be2) {
  var _0x174d2b = arguments.length,
    _0x3519f4 =
      _0x174d2b < 3
        ? _0x31da7a
        : _0x416be2 === null
          ? (_0x416be2 = Object.getOwnPropertyDescriptor(_0x31da7a, _0x3d32de))
          : _0x416be2,
    _0x284bc3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3519f4 = Reflect.decorate(_0x5af7bf, _0x31da7a, _0x3d32de, _0x416be2);
  else {
    for (var _0x10c89d = _0x5af7bf.length - 1; _0x10c89d >= 0; _0x10c89d--)
      (_0x284bc3 = _0x5af7bf[_0x10c89d]) &&
        (_0x3519f4 =
          (_0x174d2b < 3
            ? _0x284bc3(_0x3519f4)
            : _0x174d2b > 3
              ? _0x284bc3(_0x31da7a, _0x3d32de, _0x3519f4)
              : _0x284bc3(_0x31da7a, _0x3d32de)) || _0x3519f4);
  }
  return (
    _0x174d2b > 3 &&
      _0x3519f4 &&
      Object.defineProperty(_0x31da7a, _0x3d32de, _0x3519f4),
    _0x3519f4
  );
}
let L = class extends _0x225d31 {
  constructor(_0x272f53, _0x2445b8, _0x37e001) {
    (super(),
      (this._model = _0x272f53),
      (this._registrationService = _0x2445b8),
      (this._hostExternalReferenceModel = _0x37e001),
      N(this, "_registrations", new Map()),
      N(this, "_formulaKeys", new Map()),
      N(this, "_presentationChanged$", new _0x26aa73()),
      N(
        this,
        "presentationChanged$",
        this._presentationChanged$["asObservable"](),
      ),
      this.disposeWithMe(
        this._registrationService["formulaResult$"].subscribe((_0x1b9b46) => {
          for (let _0x2896e2 of Object.values(_0x1b9b46))
            for (let _0x35cd06 of Object.values(_0x2896e2))
              _0x35cd06.forEach((_0x5dbd27) =>
                this._updateFormulaResult(_0x5dbd27),
              );
        }),
      ));
  }
  syncUnit(_0x5b6abe) {
    var _0x327de9;
    let _0xbcb4e9 = _0x5b6abe.getUnitId(),
      _0x25f143 =
        ((_0x327de9 = _0x5b6abe.getSnapshot().body) == null ||
        (_0x327de9 = _0x327de9.customRanges) == null
          ? undefined
          : _0x327de9.filter(w)) ?? [],
      _0x1154c0 = this._model["getFormulas"](_0xbcb4e9),
      _0x2bcdf2 = new Set();
    for (let _0xa6233c of _0x25f143) {
      let _0x3683a9 = _0x1154c0[_0xa6233c.rangeId];
      _0x3683a9 &&
        (_0x2bcdf2.add(R(_0xbcb4e9, _0xa6233c.rangeId)),
        this.register(
          { unitId: _0xbcb4e9, rangeId: _0xa6233c.rangeId },
          _0x3683a9,
        ));
    }
    for (let _0x2fb97e of Array.from(this._registrations["values"]()))
      _0x2fb97e.unitId === _0xbcb4e9 &&
        !_0x2bcdf2.has(R(_0x2fb97e.unitId, _0x2fb97e.rangeId)) &&
        this.unregister(_0x2fb97e);
  }
  register(_0x1f2a77, _0x182a01) {
    let _0x3bc97e = R(_0x1f2a77.unitId, _0x1f2a77.rangeId),
      _0x3ce8b6 = this._registrations["get"](_0x3bc97e),
      _0x2d4d34 = this._hostExternalReferenceModel["getRevision"](
        _0x1f2a77.unitId,
      );
    if (
      _0x3ce8b6 &&
      _0x3ce8b6.config["formula"] === _0x182a01.formula &&
      _0x3ce8b6.referenceRevision === _0x2d4d34
    ) {
      _0x3ce8b6.config = _0x182a01;
      let _0x338490 = _0x3ce8b6.formulaId
        ? (this._registrationService["getFormulaValueSync"](
            _0x3ce8b6.unitId,
            _0x3ce8b6.unitId,
            _0x3ce8b6.formulaId,
          ) ?? undefined)
        : undefined;
      ((_0x3ce8b6.liveResult = _0x338490),
        this._setPresentation(_0x3bc97e, z(_0x182a01, _0x338490)));
      return;
    }
    _0x3ce8b6 != null &&
      _0x3ce8b6.formulaId &&
      this._deleteRegistration(_0x3ce8b6);
    let _0x4d2b31 = {
      ..._0x1f2a77,
      config: _0x182a01,
      referenceRevision: _0x2d4d34,
      presentation: z(_0x182a01, undefined),
    };
    if (
      (this._registrations["set"](_0x3bc97e, _0x4d2b31),
      !_0x182a01.formula["trim"]())
    )
      return;
    let _0x5d3dae = this._registrationService["registerFormulaWithRange"](
      _0x1f2a77.unitId,
      _0x1f2a77.unitId,
      _0x182a01.formula,
      undefined,
      { rangeId: _0x1f2a77.rangeId },
      _0x2dfdb6.DOC,
      _0x1f2a77.rangeId,
    );
    ((_0x4d2b31.formulaId = _0x5d3dae),
      this._formulaKeys["set"](_0x5d3dae, _0x3bc97e));
  }
  unregister(_0x1c3a01) {
    let _0x566706 = R(_0x1c3a01.unitId, _0x1c3a01.rangeId),
      _0x89cd73 = this._registrations["get"](_0x566706);
    _0x89cd73 &&
      (this._deleteRegistration(_0x89cd73),
      this._registrations["delete"](_0x566706));
  }
  unregisterUnit(_0x4e2ee6) {
    for (let _0xff8b97 of Array.from(this._registrations["values"]()))
      _0xff8b97.unitId === _0x4e2ee6 && this.unregister(_0xff8b97);
  }
  getPresentation(_0x40da4b) {
    var _0x5d0125;
    return (_0x5d0125 = this._registrations["get"](
      R(_0x40da4b.unitId, _0x40da4b.rangeId),
    )) == null
      ? undefined
      : _0x5d0125.presentation;
  }
  getResult(_0x7827bc) {
    let _0x1fe8a1 = this._registrations["get"](
      R(_0x7827bc.unitId, _0x7827bc.rangeId),
    );
    return _0x1fe8a1 ? B(_0x1fe8a1) : undefined;
  }
  getRegisteredFormulas() {
    return Array.from(this._registrations["values"](), (_0x3f76e3) => ({
      identity: { unitId: _0x3f76e3.unitId, rangeId: _0x3f76e3.rangeId },
      config: _0x3f76e3.config,
      referenceRevision: _0x3f76e3.referenceRevision,
      ...(_0x3f76e3.liveResult ? { liveResult: _0x3f76e3.liveResult } : null),
    }));
  }
  dispose() {
    for (let _0x33823d of this._registrations["values"]())
      this._deleteRegistration(_0x33823d);
    (this._registrations["clear"](),
      this._formulaKeys["clear"](),
      this._presentationChanged$["complete"](),
      super.dispose());
  }
  _updateFormulaResult(_0x173754) {
    let _0x4c2d98 = this._formulaKeys["get"](_0x173754.formulaId),
      _0x4fb21e = _0x4c2d98 ? this._registrations["get"](_0x4c2d98) : undefined;
    !_0x4c2d98 ||
      !_0x4fb21e ||
      ((_0x4fb21e.liveResult = _0x173754),
      this._setPresentation(_0x4c2d98, z(_0x4fb21e.config, _0x173754)));
  }
  _setPresentation(_0x3ce090, _0x167d93) {
    var _0x167592, _0x3424e8;
    let _0x27402c = this._registrations["get"](_0x3ce090);
    if (!_0x27402c || at(_0x27402c.presentation, _0x167d93)) return;
    let _0x2b26c5 = _0x27402c.presentation,
      _0x301a26 = B(_0x27402c);
    ((_0x27402c.presentation = _0x167d93),
      this._presentationChanged$["next"]({
        unitId: _0x27402c.unitId,
        rangeId: _0x27402c.rangeId,
        presentation: _0x167d93,
        previousPresentation: _0x2b26c5,
        result: B(_0x27402c),
        previousResult: {
          ..._0x301a26,
          ..._0x2b26c5,
          value: (_0x167592 = _0x2b26c5.cell) == null ? undefined : _0x167592.v,
          valueType:
            ((_0x3424e8 = _0x2b26c5.cell) == null ? undefined : _0x3424e8.t) ??
            undefined,
        },
      }));
  }
  _deleteRegistration(_0x175355) {
    _0x175355.formulaId &&
      (this._registrationService["deleteFormula"](
        _0x175355.unitId,
        _0x175355.unitId,
        [_0x175355.formulaId],
      ),
      this._formulaKeys["delete"](_0x175355.formulaId));
  }
};
L = I(
  [F(0, _0x29531a(P)), F(1, _0x29531a(_0x2f32b4)), F(2, _0x29531a(_0x80dbb6))],
  L,
);
function R(_0x139138, _0x8762f6) {
  return _0x139138 + "\x00" + _0x8762f6;
}
function z(_0x439cdc, _0x5a9c71) {
  return _0x4b1422({
    numberFormat: _0x439cdc.numberFormat,
    lastValue: _0x439cdc.lastValue,
    result: _0x5a9c71,
  });
}
function B(_0x65b554) {
  var _0x29c95c, _0x366aa6, _0x52c7bb;
  let _0x1895c1 = _0x65b554.presentation,
    _0x425f10 = _0x65b554.config["formula"].trim()
      ? _0x1895c1.stale || _0x1895c1.cell == null
        ? "pending"
        : ((_0x29c95c = _0x65b554.liveResult) == null
              ? undefined
              : _0x29c95c.status) === _0x28d2f3.ERROR
          ? "error"
          : "success"
      : "empty";
  return {
    ..._0x1895c1,
    status: _0x425f10,
    value: (_0x366aa6 = _0x1895c1.cell) == null ? undefined : _0x366aa6.v,
    valueType:
      ((_0x52c7bb = _0x1895c1.cell) == null ? undefined : _0x52c7bb.t) ??
      undefined,
  };
}
function at(_0x494fbd, _0x257590) {
  var _0x486a0c, _0xb8d46c, _0x446323, _0x5e1075;
  return (
    _0x494fbd.text === _0x257590.text &&
    _0x494fbd.color === _0x257590.color &&
    _0x494fbd.pattern === _0x257590.pattern &&
    _0x494fbd.source === _0x257590.source &&
    _0x494fbd.stale === _0x257590.stale &&
    ((_0x486a0c = _0x494fbd.cell) == null ? undefined : _0x486a0c.t) ===
      ((_0xb8d46c = _0x257590.cell) == null ? undefined : _0xb8d46c.t) &&
    Object.is(
      (_0x446323 = _0x494fbd.cell) == null ? undefined : _0x446323.v,
      (_0x5e1075 = _0x257590.cell) == null ? undefined : _0x5e1075.v,
    )
  );
}
const ot = {
    id: "docs-formula.mutation.set-formula",
    type: _0xa3c7d9.MUTATION,
    handler: (_0x14e4af, _0x45ef04) =>
      !(_0x45ef04 != null && _0x45ef04.unitId) ||
      !_0x45ef04.rangeId ||
      !_0x45ef04.config
        ? false
        : _0x14e4af
            .get(P)
            .setFormula(_0x45ef04.unitId, _0x45ef04.rangeId, _0x45ef04.config),
  },
  st = {
    id: "docs-formula.mutation.remove-formula",
    type: _0xa3c7d9.MUTATION,
    handler: (_0x5a14fe, _0x52f6f5) =>
      !(_0x52f6f5 != null && _0x52f6f5.unitId) || !_0x52f6f5.rangeId
        ? false
        : _0x5a14fe.get(P).removeFormula(_0x52f6f5.unitId, _0x52f6f5.rangeId),
  },
  V = {
    id: "docs-formula.mutation.set-resource",
    type: _0xa3c7d9.MUTATION,
    handler: (_0x193412, _0x39f08a) =>
      !(_0x39f08a != null && _0x39f08a.unitId) || !_0x39f08a.resource
        ? false
        : _0x193412.get(P).setResource(_0x39f08a.unitId, _0x39f08a.resource),
  },
  H = {
    id: "docs-formula.mutation.set-last-values",
    type: _0xa3c7d9.MUTATION,
    handler: (_0x3a1d11, _0x500aa2) => {
      if (
        !(_0x500aa2 != null && _0x500aa2.unitId) ||
        !_0x500aa2.updates["length"]
      )
        return false;
      let _0x26b6d0 = _0x3a1d11.get(P),
        _0x37394d = _0x3a1d11.get(_0x80dbb6),
        _0x38f19e = _0x26b6d0.getResource(_0x500aa2.unitId);
      if (!_0x38f19e) return false;
      let _0x1020a9 = _0x547fb8.deepClone(_0x38f19e),
        _0x5e62bd = false;
      for (let _0x283648 of _0x500aa2.updates) {
        var _0x16f08a, _0x3e65e6, _0x13718e, _0x28bd2b;
        let _0xc50425 = _0x1020a9.formulas[_0x283648.rangeId];
        !_0xc50425 ||
          _0xc50425.formula !== _0x283648.expectedFormula ||
          ((_0x16f08a = _0xc50425.numberFormat) == null
            ? undefined
            : _0x16f08a.pattern) !== _0x283648.expectedNumberFormat ||
          _0x37394d.getRevision(_0x500aa2.unitId) !==
            _0x283648.expectedReferenceRevision ||
          ((((_0x3e65e6 = _0xc50425.lastValue) == null
            ? undefined
            : _0x3e65e6.v) !== _0x283648.lastValue["v"] ||
            ((_0x13718e = _0xc50425.lastValue) == null
              ? undefined
              : _0x13718e.t) !== _0x283648.lastValue["t"] ||
            ((_0x28bd2b = _0xc50425.lastValue) == null
              ? undefined
              : _0x28bd2b.pattern) !== _0x283648.lastValue["pattern"]) &&
            ((_0xc50425.lastValue = _0x547fb8.deepClone(_0x283648.lastValue)),
            (_0x5e62bd = true)));
      }
      return !_0x5e62bd || _0x26b6d0.setResource(_0x500aa2.unitId, _0x1020a9);
    },
  },
  U = {
    id: "docs-formula.command.insert",
    type: _0xa3c7d9.COMMAND,
    handler: (_0x291a3e, _0x44b9e0) => {
      if (!(_0x44b9e0 != null && _0x44b9e0.formula["trim"]())) return false;
      let _0x361396 = q(_0x291a3e, _0x44b9e0.unitId, "");
      if (!_0x361396) return false;
      let _0x1a9446 = ft(
        _0x44b9e0.target,
        _0x361396.body,
        dt(_0x291a3e, _0x361396.unitId),
      );
      if (!_0x1a9446) return false;
      let _0x369b56 = pt(
        _0x291a3e,
        _0x361396.unitId,
        _0x44b9e0.formula,
        _0x44b9e0.externalReferences ?? [],
      );
      if (!_0x369b56) return false;
      let _0x4b1401 = mt(_0x361396.body, _0x361396.model, _0x361396.unitId),
        _0x53d11e = ht({
          documentData: _0x361396.documentData,
          resource: _0x361396.resource,
          rangeId: _0x4b1401,
          config: {
            formula: _0x44b9e0.formula,
            ...(_0x44b9e0.numberFormat
              ? { numberFormat: _0x44b9e0.numberFormat }
              : null),
          },
          startOffset: _0x1a9446.startOffset,
          endOffset: _0x1a9446.endOffset,
        });
      if (!_0x53d11e) return false;
      let _0x3babbe = _0x460482(_0x291a3e, _0x361396.unitId, _0x369b56);
      return !_0x3babbe ||
        !J({
          accessor: _0x291a3e,
          document: _0x361396.document,
          unitId: _0x361396.unitId,
          trigger: U.id,
          rangeId: _0x4b1401,
          previousResource: _0x361396.resource,
          nextResource: _0x53d11e.nextResource,
          previousDocumentData: _0x361396.documentData,
          nextDocumentData: _0x53d11e.nextDocumentData,
          cursorOffset: _0x53d11e.cursorOffset,
          externalMutations: _0x3babbe,
        })
        ? false
        : {
            rangeId: _0x4b1401,
            startOffset: _0x53d11e.cursorOffset - 1,
            endOffset: _0x53d11e.cursorOffset,
          };
    },
  },
  W = {
    id: "docs-formula.command.update",
    type: _0xa3c7d9.COMMAND,
    handler: (_0x4c0af5, _0x24d021) => {
      if (
        !(_0x24d021 != null && _0x24d021.rangeId) ||
        !_0x24d021.formula["trim"]()
      )
        return false;
      let _0x5367ea = q(_0x4c0af5, _0x24d021.unitId, ""),
        _0xa1a4f0 =
          _0x5367ea == null
            ? undefined
            : _0x5367ea.model["getFormula"](
                _0x5367ea.unitId,
                _0x24d021.rangeId,
              ),
        _0x2135c9 = _0x5367ea
          ? T(_0x5367ea.documentData["body"], _0x24d021.rangeId)
          : undefined;
      if (!_0x5367ea || !_0xa1a4f0 || !_0x2135c9) return false;
      let _0x153c61 = pt(
        _0x4c0af5,
        _0x5367ea.unitId,
        _0x24d021.formula,
        _0x24d021.externalReferences ?? [],
      );
      if (!_0x153c61) return false;
      let _0x41e9b4 = _0x460482(_0x4c0af5, _0x5367ea.unitId, _0x153c61);
      if (!_0x41e9b4) return false;
      let _0x2bb547 = Ct(_0x5367ea.resource);
      return (
        (_0x2bb547.formulas[_0x24d021.rangeId] = {
          formula: _0x24d021.formula,
          ...(_0x24d021.numberFormat
            ? { numberFormat: _0x24d021.numberFormat }
            : _0xa1a4f0.numberFormat
              ? { numberFormat: _0xa1a4f0.numberFormat }
              : null),
        }),
        J({
          accessor: _0x4c0af5,
          document: _0x5367ea.document,
          unitId: _0x5367ea.unitId,
          trigger: W.id,
          rangeId: _0x24d021.rangeId,
          previousResource: _0x5367ea.resource,
          nextResource: _0x2bb547,
          cursorOffset: _0x2135c9.endIndex + 1,
          externalMutations: _0x41e9b4,
        })
      );
    },
  },
  G = {
    id: "docs-formula.command.set-number-format",
    type: _0xa3c7d9.COMMAND,
    handler: (_0x2d5a54, _0x2e9658) => {
      if (!(_0x2e9658 != null && _0x2e9658.rangeId)) return false;
      let _0x2b2501 = q(_0x2d5a54, _0x2e9658.unitId, ""),
        _0x2febe3 =
          _0x2b2501 == null
            ? undefined
            : _0x2b2501.model["getFormula"](
                _0x2b2501.unitId,
                _0x2e9658.rangeId,
              ),
        _0x22fb5c = _0x2b2501
          ? T(_0x2b2501.documentData["body"], _0x2e9658.rangeId)
          : undefined;
      if (!_0x2b2501 || !_0x2febe3 || !_0x22fb5c) return false;
      let _0x106099 = Ct(_0x2b2501.resource);
      return (
        (_0x106099.formulas[_0x2e9658.rangeId] = {
          ..._0x2febe3,
          ...(_0x2e9658.numberFormat
            ? { numberFormat: _0x2e9658.numberFormat }
            : null),
        }),
        _0x2e9658.numberFormat ||
          delete _0x106099.formulas[_0x2e9658.rangeId].numberFormat,
        J({
          accessor: _0x2d5a54,
          document: _0x2b2501.document,
          unitId: _0x2b2501.unitId,
          trigger: G.id,
          rangeId: _0x2e9658.rangeId,
          previousResource: _0x2b2501.resource,
          nextResource: _0x106099,
          cursorOffset: _0x22fb5c.endIndex + 1,
          externalMutations: {},
        })
      );
    },
  },
  K = {
    id: "docs-formula.command.remove",
    type: _0xa3c7d9.COMMAND,
    handler: (_0x4c073e, _0x5637ab) => ut(_0x4c073e, _0x5637ab, "", K.id),
  },
  ct = {
    id: "docs-formula.command.replace-with-text",
    type: _0xa3c7d9.COMMAND,
    handler: (_0x1e010c, _0x219269) =>
      ut(
        _0x1e010c,
        _0x219269,
        (_0x219269 == null ? undefined : _0x219269.text) ?? "",
        ct.id,
      ),
  },
  lt = {
    id: "docs-formula.command.convert-to-text",
    type: _0xa3c7d9.COMMAND,
    handler: (_0x57645c, _0xf79301) => {
      if (!(_0xf79301 != null && _0xf79301.rangeId)) return false;
      let _0x15ec13 = q(_0x57645c, _0xf79301.unitId, "");
      if (!_0x15ec13) return false;
      let _0x935a1d = _0x57645c
        .get(L)
        .getResult({ unitId: _0x15ec13.unitId, rangeId: _0xf79301.rangeId });
      return _0x935a1d
        ? ut(_0x57645c, _0xf79301, _0x935a1d.text, lt.id)
        : false;
    },
  };
function ut(_0xf340b2, _0x28d22b, _0x3b7596, _0x3721cb) {
  if (!(_0x28d22b != null && _0x28d22b.rangeId)) return false;
  let _0x2a1907 = q(_0xf340b2, _0x28d22b.unitId, "");
  if (!_0x2a1907) return false;
  let _0x1d5224 = Be({
    documentData: _0x2a1907.documentData,
    resource: _0x2a1907.resource,
    rangeId: _0x28d22b.rangeId,
    text: _0x3b7596,
  });
  return _0x1d5224
    ? J({
        accessor: _0xf340b2,
        document: _0x2a1907.document,
        unitId: _0x2a1907.unitId,
        trigger: _0x3721cb,
        rangeId: _0x28d22b.rangeId,
        previousResource: _0x2a1907.resource,
        nextResource: _0x1d5224.nextResource,
        previousDocumentData: _0x2a1907.documentData,
        nextDocumentData: _0x1d5224.nextDocumentData,
        cursorOffset: _0x1d5224.cursorOffset,
        externalMutations: {},
      })
    : false;
}
function q(_0x1113a4, _0x5be8cb, _0x1bd5f0) {
  if (_0x1bd5f0) return null;
  let _0x129280 = _0x1113a4.get(_0x48e860),
    _0x32f37c =
      (_0x5be8cb
        ? _0x129280.getUnit(_0x5be8cb, _0x452e99.UNIVER_DOC)
        : _0x129280.getCurrentUnitOfType(_0x452e99.UNIVER_DOC)) ?? null;
  if (!_0x32f37c) return null;
  let _0x45fe89 = _0x32f37c.getSnapshot(),
    _0x41806d = _0x45fe89.body;
  if (_0x45fe89.disabled || !_0x41806d) return null;
  let _0xc38d70 = _0x1113a4.get(P);
  return _0xc38d70.getLoadError(_0x32f37c.getUnitId())
    ? null
    : {
        document: _0x32f37c,
        body: _0x41806d,
        documentData: _0x45fe89,
        model: _0xc38d70,
        resource: _0xc38d70.getResource(_0x32f37c.getUnitId()) ?? b(),
        unitId: _0x32f37c.getUnitId(),
      };
}
function dt(_0x58ae75, _0x12df58) {
  var _0x123682;
  return (_0x123682 = _0x58ae75
    .get(_0x51c614)
    .getTextRanges({ subUnitId: _0x12df58, unitId: _0x12df58 })) == null
    ? undefined
    : _0x123682[0];
}
function ft(_0x417ee6, _0x3ee72e, _0x828ca4) {
  if ((_0x417ee6 == null ? undefined : _0x417ee6.type) === "paragraph") {
    var _0x17ecb3;
    let _0x469542 =
      ((_0x17ecb3 = _0x3ee72e.paragraphs) == null
        ? undefined
        : _0x17ecb3.filter(
            (_0x6ac0a1) => _0x6ac0a1.paragraphId === _0x417ee6.paragraphId,
          )) ?? [];
    if (_0x469542.length !== 1) return null;
    let _0x13a2ea = _0x469542[0],
      _0x34ea3d = _0x2e032c(_0x3ee72e, _0x13a2ea),
      _0x1e20fb = _0x13a2ea.startIndex - _0x34ea3d,
      _0x4d0f02 = _0x417ee6.position === "end" ? _0x1e20fb : _0x417ee6.position;
    if (!Number.isInteger(_0x4d0f02) || _0x4d0f02 < 0 || _0x4d0f02 > _0x1e20fb)
      return null;
    let _0x371dd4 = _0x34ea3d + _0x4d0f02;
    return { startOffset: _0x371dd4, endOffset: _0x371dd4 };
  }
  if ((_0x417ee6 == null ? undefined : _0x417ee6.type) === "range")
    return !Number.isInteger(_0x417ee6.startOffset) ||
      !Number.isInteger(_0x417ee6.endOffset)
      ? null
      : {
          startOffset: Math.min(_0x417ee6.startOffset, _0x417ee6.endOffset),
          endOffset: Math.max(_0x417ee6.startOffset, _0x417ee6.endOffset),
        };
  let _0x281bc5 =
    (_0x417ee6 == null ? undefined : _0x417ee6.type) === "selection"
      ? _0x417ee6.selection
      : _0x828ca4;
  return !_0x281bc5 || _0x281bc5.segmentId
    ? null
    : {
        startOffset: Math.min(_0x281bc5.startOffset, _0x281bc5.endOffset),
        endOffset: Math.max(_0x281bc5.startOffset, _0x281bc5.endOffset),
      };
}
function pt(_0x39f111, _0x16410d, _0x125292, _0x58cc76) {
  let _0x260cb0 = _0x39f111.get(_0x401c55),
    _0x2d44ca = _0x125292.startsWith("=") ? _0x125292.slice(1) : _0x125292,
    _0x4ffee5 = _0x260cb0.sequenceNodesBuilder(_0x2d44ca);
  if (!_0x4ffee5) return null;
  let _0x202ae5 = _0x39f111.get(_0x80dbb6),
    _0x1ec884 = _0x5bacae({
      qualifiers: _0x479065(_0x4ffee5),
      explicitReferences: _0x58cc76 ?? [],
      resolveBinding: (_0x4e18d3) =>
        _0x202ae5.resolveBinding(_0x16410d, _0x4e18d3),
    });
  return _0x1ec884.status === "resolved" ? _0x1ec884.references : null;
}
function mt(_0x401688, _0x366eb6, _0x5bf13c) {
  var _0x26824f;
  let _0x2875e6 = _0x2586e9(6);
  for (
    ;
    (_0x401688 != null &&
      (_0x26824f = _0x401688.customRanges) != null &&
      _0x26824f.some((_0x18a370) => _0x18a370.rangeId === _0x2875e6)) ||
    _0x366eb6.getFormula(_0x5bf13c, _0x2875e6);
  )
    _0x2875e6 = _0x2586e9(6);
  return _0x2875e6;
}
function ht(_0x2924ad) {
  try {
    return Re(_0x2924ad);
  } catch (_0x4b1a96) {
    if (_0x4b1a96 instanceof C) return null;
    throw _0x4b1a96;
  }
}
function gt(_0x459801) {
  let _0x19f072 =
    _0x459801.previousDocumentData && _0x459801.nextDocumentData
      ? vt(
          _0x459801.document,
          _0x459801.unitId,
          _0x459801.previousDocumentData,
          _0x459801.nextDocumentData,
          _0x459801.cursorOffset,
          _0x459801.trigger,
        )
      : null;
  return _0x459801.previousDocumentData &&
    _0x459801.nextDocumentData &&
    !_0x19f072
    ? null
    : {
        documentRedo: _0x19f072,
        resourceRedo: {
          id: V.id,
          params: {
            unitId: _0x459801.unitId,
            resource: _0x459801.nextResource,
          },
        },
        resourceUndo: {
          id: V.id,
          params: {
            unitId: _0x459801.unitId,
            resource: _0x459801.previousResource,
          },
        },
      };
}
function _t(_0x384224, _0x57f43d, _0x48bb09, _0x1c5cc9) {
  _0x1c5cc9.pushUndoRedo({
    id: _0x384224.trigger + ":" + _0x384224.rangeId,
    unitID: _0x384224.unitId,
    redoMutations: [
      ...(_0x384224.externalMutations["redoMutation"]
        ? [_0x384224.externalMutations["redoMutation"]]
        : []),
      ...(_0x57f43d.documentRedo ? [_0x57f43d.documentRedo] : []),
      _0x57f43d.resourceRedo,
    ],
    undoMutations: [
      _0x57f43d.resourceUndo,
      ...(_0x48bb09 ? [_0x48bb09] : []),
      ...(_0x384224.externalMutations["undoMutation"]
        ? [_0x384224.externalMutations["undoMutation"]]
        : []),
    ],
  });
}
function J(_0x36f160) {
  let _0x29177c = _0x36f160.accessor["get"](_0x29c310),
    _0x2a6f43 = _0x36f160.accessor["get"](_0x16ed43),
    _0x20b767 = _0x36f160.accessor["get"](_0x51c614),
    _0x1ae399 = gt(_0x36f160);
  if (!_0x1ae399) return false;
  let _0x62101a = false,
    _0x22c3b8 = null,
    _0x3bc99d = false;
  try {
    if (_0x36f160.externalMutations["redoMutation"]) {
      if (
        !_0x29177c.syncExecuteCommand(
          _0x36f160.externalMutations["redoMutation"].id,
          _0x36f160.externalMutations["redoMutation"].params,
        )
      )
        return false;
      _0x62101a = true;
    }
    if (_0x1ae399.documentRedo) {
      let _0x21e857 = _0x29177c.syncExecuteCommand(
        _0x1ae399.documentRedo["id"],
        _0x1ae399.documentRedo["params"],
      );
      if (!_0x21e857)
        return (bt(_0x29177c, _0x36f160.externalMutations, _0x62101a), false);
      _0x22c3b8 = {
        id: _0x485e97.id,
        params: {
          ..._0x21e857,
          noHistory: true,
          noNeedSetTextRange: true,
          segmentId: "",
        },
      };
    }
    if (
      !_0x29177c.syncExecuteCommand(
        _0x1ae399.resourceRedo["id"],
        _0x1ae399.resourceRedo["params"],
      )
    )
      return (
        yt(_0x29177c, _0x22c3b8),
        bt(_0x29177c, _0x36f160.externalMutations, _0x62101a),
        false
      );
    ((_0x3bc99d = true), _t(_0x36f160, _0x1ae399, _0x22c3b8, _0x2a6f43));
  } catch (_0x23acf1) {
    throw (
      _0x3bc99d &&
        _0x29177c.syncExecuteCommand(
          _0x1ae399.resourceUndo["id"],
          _0x1ae399.resourceUndo["params"],
        ),
      yt(_0x29177c, _0x22c3b8),
      bt(_0x29177c, _0x36f160.externalMutations, _0x62101a),
      _0x23acf1
    );
  }
  return (
    _0x20b767.replaceDocRanges(
      [
        {
          startOffset: _0x36f160.cursorOffset,
          endOffset: _0x36f160.cursorOffset,
          segmentId: "",
        },
      ],
      { unitId: _0x36f160.unitId, subUnitId: _0x36f160.unitId },
      false,
      { [_0x45ee95]: true },
    ),
    true
  );
}
function vt(_0x456020, _0x2f4045, _0x4958e6, _0x40a4cf, _0x5040c0, _0x3c2319) {
  let _0x573232 = xt(_0x4958e6, _0x40a4cf, _0x34e76b(_0x456020, ""));
  return _0x573232
    ? {
        id: _0x485e97.id,
        params: {
          unitId: _0x2f4045,
          actions: _0x573232,
          segmentId: "",
          textRanges: [
            {
              startOffset: _0x5040c0,
              endOffset: _0x5040c0,
              collapsed: true,
              segmentId: "",
            },
          ],
          isEditing: false,
          noHistory: true,
          noNeedSetTextRange: true,
          trigger: _0x3c2319,
        },
      }
    : null;
}
function yt(_0xebf90c, _0x2603c4) {
  _0x2603c4 && _0xebf90c.syncExecuteCommand(_0x2603c4.id, _0x2603c4.params);
}
function bt(_0xc344d7, _0x2d79d6, _0x56bc4b) {
  _0x56bc4b &&
    _0x2d79d6.undoMutation &&
    _0xc344d7.syncExecuteCommand(
      _0x2d79d6.undoMutation["id"],
      _0x2d79d6.undoMutation["params"],
    );
}
function xt(_0x26b427, _0x4bd72b, _0x4f5450) {
  let _0x5b9356 = _0x26b427.body,
    _0xcc861e = _0x4bd72b.body,
    _0x5e0b4c = St(
      _0x5b9356 == null ? undefined : _0x5b9356.dataStream,
      _0xcc861e == null ? undefined : _0xcc861e.dataStream,
    );
  if (!_0x5e0b4c || !_0xcc861e) return null;
  let _0x1eb7dc = new _0x2b0b33();
  return (
    _0x1eb7dc.retain(_0x5e0b4c.start),
    _0x5e0b4c.insertLength > 0 &&
      _0x1eb7dc.insert(
        _0x5e0b4c.insertLength,
        _0x85185(
          _0xcc861e,
          _0x5e0b4c.start,
          _0x5e0b4c.start + _0x5e0b4c.insertLength,
          false,
        ),
      ),
    _0x5e0b4c.deleteLength > 0 && _0x1eb7dc.delete(_0x5e0b4c.deleteLength),
    _0x118c87.getInstance().editOp(_0x1eb7dc.serialize(), _0x4f5450)
  );
}
function St(_0x165b7c, _0x3ec705) {
  if (_0x165b7c == null || _0x3ec705 == null || _0x165b7c === _0x3ec705)
    return null;
  let _0x22e26b = 0;
  for (
    ;
    _0x22e26b < _0x165b7c.length &&
    _0x22e26b < _0x3ec705.length &&
    _0x165b7c[_0x22e26b] === _0x3ec705[_0x22e26b];
  )
    _0x22e26b += 1;
  let _0x415de3 = _0x165b7c.length,
    _0x489f6b = _0x3ec705.length;
  for (
    ;
    _0x415de3 > _0x22e26b &&
    _0x489f6b > _0x22e26b &&
    _0x165b7c[_0x415de3 - 1] === _0x3ec705[_0x489f6b - 1];
  )
    (--_0x415de3, --_0x489f6b);
  return {
    start: _0x22e26b,
    deleteLength: _0x415de3 - _0x22e26b,
    insertLength: _0x489f6b - _0x22e26b,
  };
}
function Ct(_0x38be5a) {
  return {
    schemaVersion: 1,
    formulas: Object.fromEntries(
      Object.entries(_0x38be5a.formulas).map(([_0x2b9e8a, _0x28a49b]) => [
        _0x2b9e8a,
        {
          ..._0x28a49b,
          ...(_0x28a49b.numberFormat
            ? { numberFormat: { ..._0x28a49b.numberFormat } }
            : null),
          ...(_0x28a49b.lastValue
            ? { lastValue: { ..._0x28a49b.lastValue } }
            : null),
        },
      ]),
    ),
  };
}
let Y = class extends _0x225d31 {
  constructor(_0x5444f1, _0x5f0c9e, _0xab427a, _0xc0fe19) {
    (super(),
      (this._instanceService = _0x5444f1),
      (this._commandService = _0x5f0c9e),
      (this._model = _0xab427a),
      (this._service = _0xc0fe19),
      N(this, "_pendingUnitIds", new Set()),
      N(this, "_syncScheduled", false),
      N(this, "_isDisposed", false),
      this._instanceService["getAllUnitsForType"](_0x452e99.UNIVER_DOC).forEach(
        (_0x338d41) => this._service["syncUnit"](_0x338d41),
      ),
      this.disposeWithMe(
        this._model["change$"].subscribe(({ unitId: _0x45bb28 }) =>
          this._syncUnit(_0x45bb28),
        ),
      ),
      this.disposeWithMe(
        this._instanceService["unitAdded$"].subscribe(({ unit: _0x23709e }) => {
          _0x23709e.type === _0x452e99.UNIVER_DOC &&
            this._queueSync(_0x23709e.getUnitId());
        }),
      ),
      this.disposeWithMe(
        this._instanceService["unitDisposed$"].subscribe((_0x316fdb) => {
          this._service["unregisterUnit"](_0x316fdb.getUnitId());
        }),
      ),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0xa746c3) => {
          if (_0xa746c3.id === _0x485e97.id && wt(_0xa746c3.params)) {
            let _0x2c7901 = _0xa746c3.params;
            _0x2c7901.segmentId || this._syncUnit(_0x2c7901.unitId);
          }
        }),
      ));
  }
  dispose() {
    ((this._isDisposed = true), super.dispose());
  }
  _queueSync(_0x20aae1) {
    (this._pendingUnitIds["add"](_0x20aae1),
      !this._syncScheduled &&
        ((this._syncScheduled = true),
        queueMicrotask(() => {
          if (((this._syncScheduled = false), this._isDisposed)) return;
          let _0x29752e = Array.from(this._pendingUnitIds);
          (this._pendingUnitIds["clear"](),
            _0x29752e.forEach((_0x180e93) => this._syncUnit(_0x180e93)));
        })));
  }
  _syncUnit(_0x2a9299) {
    let _0x16744c = this._instanceService["getUnit"](
      _0x2a9299,
      _0x452e99.UNIVER_DOC,
    );
    _0x16744c && this._service["syncUnit"](_0x16744c);
  }
};
Y = I(
  [F(0, _0x48e860), F(1, _0x29c310), F(2, _0x29531a(P)), F(3, _0x29531a(L))],
  Y,
);
function wt(_0x2d6a26) {
  return (
    typeof _0x2d6a26 == "object" &&
    !!_0x2d6a26 &&
    "unitId" in _0x2d6a26 &&
    typeof _0x2d6a26.unitId == "string" &&
    (!("segmentId" in _0x2d6a26) ||
      _0x2d6a26.segmentId === undefined ||
      typeof _0x2d6a26.segmentId == "string")
  );
}
let X = class extends _0x225d31 {
  constructor(_0xf544b4, _0x32926a) {
    (super(),
      (this._resourceManagerService = _0xf544b4),
      (this._docFormulaModel = _0x32926a),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"]({
          pluginName: y,
          businesses: [_0x452e99.UNIVER_DOC],
          toJson: (_0x2773ff) =>
            JSON.stringify(this._docFormulaModel["serialize"](_0x2773ff)),
          parseJson: (_0x1d47e3) => JSON.parse(_0x1d47e3),
          onLoad: (_0x297151, _0x452230) => {
            this._docFormulaModel["load"](_0x297151, _0x452230);
          },
          onUnLoad: (_0x1b9b0f) =>
            this._docFormulaModel["removeUnit"](_0x1b9b0f),
        }),
      ));
  }
};
X = I([F(0, _0xc05524), F(1, _0x29531a(P))], X);
var Tt = "@univerjs-pro/docs-formula",
  Et = "1.0.0-insiders.20260907-70fc579";
const Dt = {};
let Z = class extends _0x225d31 {
  constructor(_0x21180b, _0x5df385, _0x2ee263) {
    (super(),
      (this._univerInstanceService = _0x21180b),
      (this._formulaService = _0x5df385),
      this.disposeWithMe(
        _0x2ee263.register({
          resolve: (_0x1f6b9d, _0x40b19f) => {
            var _0x488a07;
            return (
              ((_0x488a07 = _0x40b19f.customRanges) == null
                ? undefined
                : _0x488a07
                    .filter(w)
                    .map((_0x52bde3) => ({
                      startOffset: _0x52bde3.startIndex,
                      endOffset: _0x52bde3.endIndex + 1,
                      text: this.resolveFormula(_0x1f6b9d, _0x52bde3.rangeId),
                    }))) ?? []
            );
          },
        }),
      ),
      this.disposeWithMe(
        this._formulaService["presentationChanged$"].subscribe(
          ({ unitId: _0x1fe2ec }) => {
            _0x2ee263.notifyTextChanged(_0x1fe2ec);
          },
        ),
      ));
  }
  resolveFormula(_0x3f56d3, _0x185198) {
    var _0xf695cf;
    return (
      ((_0xf695cf = this._formulaService["getResult"]({
        unitId: _0x3f56d3,
        rangeId: _0x185198,
      })) == null
        ? undefined
        : _0xf695cf.text) ?? ""
    );
  }
  resolveText(_0x4a72db, _0x3b0457, _0x380e87) {
    var _0x15f80d;
    let _0x1a0d38 = this._univerInstanceService["getUnit"](
        _0x4a72db,
        _0x452e99.UNIVER_DOC,
      ),
      _0x286d9c = _0x1a0d38 == null ? undefined : _0x1a0d38.getBody();
    if (!_0x286d9c) return "";
    let _0x5ec0b3 = _0x286d9c.dataStream["slice"](_0x3b0457, _0x380e87),
      _0x2984ec =
        ((_0x15f80d = _0x286d9c.customRanges) == null
          ? undefined
          : _0x15f80d
              .filter(
                (_0x51eafe) =>
                  w(_0x51eafe) &&
                  _0x51eafe.startIndex >= _0x3b0457 &&
                  _0x51eafe.endIndex < _0x380e87,
              )
              .sort(
                (_0x4a320b, _0x14a3f9) =>
                  _0x14a3f9.startIndex - _0x4a320b.startIndex,
              )) ?? [];
    for (let _0x1555eb of _0x2984ec) {
      let _0x5afe6c = _0x1555eb.startIndex - _0x3b0457,
        _0x5ecd89 = _0x1555eb.endIndex - _0x3b0457 + 1;
      _0x5ec0b3 =
        "" +
        _0x5ec0b3.slice(0, _0x5afe6c) +
        this.resolveFormula(_0x4a72db, _0x1555eb.rangeId) +
        _0x5ec0b3.slice(_0x5ecd89);
    }
    return _0x5ec0b3;
  }
  degradeDocumentData(_0x5ce288) {
    return Ot(_0x5ce288);
  }
  degradeBody(_0xcc961c, _0x572581, _0x7678da = {}) {
    var _0x1d2b50;
    return (
      Ve(
        { id: _0xcc961c, body: _0x572581, documentStyle: {} },
        (
          ((_0x1d2b50 = _0x572581.customRanges) == null
            ? undefined
            : _0x1d2b50.filter(w)) ?? []
        ).map((_0x15bb8b) => ({
          rangeId: _0x15bb8b.rangeId,
          text:
            _0x7678da[_0x15bb8b.rangeId] ??
            this.resolveFormula(_0xcc961c, _0x15bb8b.rangeId),
        })),
      ).body ?? { dataStream: "" }
    );
  }
};
Z = I([F(0, _0x48e860), F(1, _0x29531a(L)), F(2, _0x29531a(_0x34cb38))], Z);
function Ot(_0x16c58e) {
  var _0x525a59, _0x3cae7e;
  let _0x320b36 = kt(_0x16c58e),
    _0x4be38f = Ve(
      _0x16c58e,
      (
        ((_0x525a59 = _0x16c58e.body) == null ||
        (_0x525a59 = _0x525a59.customRanges) == null
          ? undefined
          : _0x525a59.filter(w)) ?? []
      ).map((_0x406347) => ({
        rangeId: _0x406347.rangeId,
        text: At(
          _0x320b36 == null ? undefined : _0x320b36.formulas[_0x406347.rangeId],
        ),
      })),
    );
  return (
    (_0x4be38f.resources =
      (_0x3cae7e = _0x4be38f.resources) == null
        ? undefined
        : _0x3cae7e.filter((_0xd156dc) => _0xd156dc.name !== y)),
    _0x4be38f
  );
}
function kt(_0x34c9a9) {
  var _0x4e05f8;
  let _0x995b1a =
    (_0x4e05f8 = _0x34c9a9.resources) == null ||
    (_0x4e05f8 = _0x4e05f8.find(
      (_0x368b57) => _0x368b57.name === "DOC_FORMULA_PLUGIN",
    )) == null
      ? undefined
      : _0x4e05f8.data;
  if (_0x995b1a)
    try {
      let _0x2c9571 = JSON.parse(_0x995b1a);
      return x(_0x2c9571) ? _0x2c9571 : undefined;
    } catch {
      return;
    }
}
function At(_0x438b0f) {
  return _0x438b0f
    ? _0x4b1422({
        lastValue: _0x438b0f.lastValue,
        numberFormat: _0x438b0f.numberFormat,
      }).text
    : "";
}
let Q = class extends _0x225d31 {
  constructor(_0x48b481, _0x74c976, _0x485273) {
    (super(),
      (this._formulaService = _0x48b481),
      (this._cacheEligibilityService = _0x74c976),
      this.disposeWithMe(_0x485273.registerProvider(this)));
  }
  collectMutations(_0x3ca4ae) {
    let _0x971145 = new Map();
    for (let _0x4275b7 of this._formulaService["getRegisteredFormulas"]()) {
      var _0x19e228;
      if (
        !this._cacheEligibilityService["assess"](
          _0x4275b7.config["formula"],
          _0x4275b7.liveResult,
        ).eligible
      )
        continue;
      let _0x268e13 = _0x476080(_0x4275b7.liveResult),
        _0x4708 = _0x268e13 ? _0x3d3cbe(_0x268e13) : null;
      if (!_0x4708 || jt(_0x4275b7.config["lastValue"], _0x4708)) continue;
      let _0x36c651 = _0x971145.get(_0x4275b7.identity["unitId"]) ?? [];
      (_0x36c651.push({
        rangeId: _0x4275b7.identity["rangeId"],
        expectedFormula: _0x4275b7.config["formula"],
        expectedNumberFormat:
          (_0x19e228 = _0x4275b7.config["numberFormat"]) == null
            ? undefined
            : _0x19e228.pattern,
        expectedReferenceRevision: _0x4275b7.referenceRevision,
        lastValue: _0x4708,
      }),
        _0x971145.set(_0x4275b7.identity["unitId"], _0x36c651));
    }
    return Array.from(_0x971145, ([_0x2b83dc, _0x4b5b4a]) => ({
      id: H.id,
      params: { unitId: _0x2b83dc, updates: _0x4b5b4a },
    }));
  }
};
Q = I(
  [F(0, _0x29531a(L)), F(1, _0x29531a(_0x22a3f1)), F(2, _0x29531a(_0xcc7331))],
  Q,
);
function jt(_0x2f004e, _0x3e4748) {
  return (
    (_0x2f004e == null ? undefined : _0x2f004e.v) === _0x3e4748.v &&
    (_0x2f004e == null ? undefined : _0x2f004e.t) === _0x3e4748.t &&
    (_0x2f004e == null ? undefined : _0x2f004e.pattern) === _0x3e4748.pattern
  );
}
let $ = class extends _0x4692c2 {
  constructor(_0x2383a8 = Dt, _0x226994, _0x251dfc, _0x313af0) {
    (super(),
      (this._config = _0x2383a8),
      (this._injector = _0x226994),
      (this._commandService = _0x251dfc),
      (this._configService = _0x313af0));
    let { ..._0x5021b7 } = _0x515b3d({}, Dt, this._config);
    this._configService["setConfig"]("docs-formula.config", _0x5021b7);
  }
  onStarting() {
    (this._injector["add"]([P]),
      this._injector["add"]([L]),
      this._injector["add"]([X]),
      this._injector["add"]([Y]),
      this._injector["add"]([Q]),
      this._injector["add"]([Z]),
      _0x2288c7(this._injector, [[P], [X], [Y], [Q], [Z]]),
      [ot, st, V, H, U, W, G, K, ct, lt].forEach((_0x859b96) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x859b96)),
      ));
  }
};
(N($, "pluginName", y),
  N($, "packageName", Tt),
  N($, "version", Et),
  N($, "type", _0x452e99.UNIVER_DOC),
  ($ = I(
    [
      _0x472c14(_0xcf8179, _0x546f77, _0x3d6ca7),
      F(1, _0x29531a(_0x38c69b)),
      F(2, _0x29c310),
      F(3, _0x2156c2),
    ],
    $,
  )));
export {
  lt as ConvertDocFormulaToTextCommand,
  Me as DOC_FORMULA_CUSTOM_RANGE_KIND,
  Ne as DOC_FORMULA_OBJECT_REPLACEMENT,
  y as DOC_FORMULA_PLUGIN,
  je as DOC_FORMULA_SCHEMA_VERSION,
  Z as DocFormulaDisplayTextService,
  Y as DocFormulaLifecycleController,
  P as DocFormulaModel,
  X as DocFormulaResourceController,
  it as DocFormulaResultStatus,
  L as DocFormulaService,
  U as InsertDocFormulaCommand,
  C as InvalidDocFormulaInsertRangeError,
  K as RemoveDocFormulaCommand,
  st as RemoveDocFormulaMutation,
  ct as ReplaceDocFormulaWithTextCommand,
  H as SetDocFormulaLastValuesMutation,
  ot as SetDocFormulaMutation,
  G as SetDocFormulaNumberFormatCommand,
  V as SetDocFormulaResourceMutation,
  $ as UniverDocsFormulaPlugin,
  W as UpdateDocFormulaCommand,
  He as assertSafeDocFormulaInsertRange,
  Re as buildInsertDocFormulaActions,
  Be as buildRemoveDocFormulaActions,
  ze as buildUpdateDocFormulaActions,
  b as createEmptyDocFormulaResource,
  Ot as degradeDocFormulaDocumentData,
  T as findDocFormulaRange,
  Pe as isDocFormulaConfig,
  w as isDocFormulaRange,
  x as isDocFormulaResource,
  Fe as isFormulaLastValue,
};
