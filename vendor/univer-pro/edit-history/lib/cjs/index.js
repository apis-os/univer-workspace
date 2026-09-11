Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
 t = require("@univerjs-pro/collaboration"),
 n = require("@univerjs-pro/license"),
 r = require("@univerjs/network"),
 i = require("@univerjs/protocol"),
 a = require("rxjs"),
 o = (function (_0x5dfbe9) {
 return (
 (_0x5dfbe9.HISTORY = "history"),
 (_0x5dfbe9.SNAPSHOT = "snapshot"),
 _0x5dfbe9
 );
 })({}),
 s = (function (_0x585e2d) {
 return (
 (_0x585e2d.DELETE = "delete"),
 (_0x585e2d.INSERT = "insert"),
 (_0x585e2d.UPDATE = "update"),
 _0x585e2d
 );
 })({}),
 c = (function (_0x24e0a8) {
 return (
 (_0x24e0a8.SUMMARY = "summary"),
 (_0x24e0a8.CHANGES = "changes"),
 (_0x24e0a8.FULL = "full"),
 _0x24e0a8
 );
 })({}),
 l = (function (_0x3ad5b3) {
 return (
 (_0x3ad5b3.DELETE = "delete"),
 (_0x3ad5b3.EQUAL = "equal"),
 (_0x3ad5b3.INSERT = "insert"),
 _0x3ad5b3
 );
 })({}),
 u = (function (_0x4cc417) {
 return (
 (_0x4cc417.ARRAY = "array"),
 (_0x4cc417.BOOLEAN = "boolean"),
 (_0x4cc417.COLOR = "color"),
 (_0x4cc417.FORMULA = "formula"),
 (_0x4cc417.GEOMETRY = "geometry"),
 (_0x4cc417.NULL = "null"),
 (_0x4cc417.NUMBER = "number"),
 (_0x4cc417.OBJECT = "object"),
 (_0x4cc417.POSITION = "position"),
 (_0x4cc417.REFERENCE = "reference"),
 (_0x4cc417.STYLE = "style"),
 (_0x4cc417.TEXT = "text"),
 (_0x4cc417.UNKNOWN = "unknown"),
 _0x4cc417
 );
 })({}),
 d = (function (_0x496a3d) {
 return (
 (_0x496a3d.UNIT = "unit"),
 (_0x496a3d.WORKBOOK = "workbook"),
 (_0x496a3d.WORKSHEET = "worksheet"),
 (_0x496a3d.CELL = "cell"),
 (_0x496a3d.ROW_COLUMN = "row-column"),
 (_0x496a3d.MOVE = "move"),
 (_0x496a3d.CONDITION_FORMAT = "condition-format"),
 (_0x496a3d.DATA_VALIDATION = "data-validation"),
 (_0x496a3d.SPARKLINE = "sparkline"),
 (_0x496a3d.TABLE = "table"),
 (_0x496a3d.SHAPE = "shape"),
 (_0x496a3d.CHART = "chart"),
 (_0x496a3d.PIVOT = "pivot"),
 (_0x496a3d.PARAGRAPH = "paragraph"),
 (_0x496a3d.TEXT_STYLE = "text-style"),
 (_0x496a3d.SECTION = "section"),
 (_0x496a3d.BLOCK_RANGE = "block-range"),
 (_0x496a3d.CUSTOM_RANGE = "custom-range"),
 (_0x496a3d.TABLE_RANGE = "table-range"),
 (_0x496a3d.CUSTOM_BLOCK = "custom-block"),
 (_0x496a3d.COLUMN_GROUP = "column-group"),
 (_0x496a3d.DRAWING = "drawing"),
 (_0x496a3d.HEADER = "header"),
 (_0x496a3d.FOOTER = "footer"),
 (_0x496a3d.DOCUMENT_STYLE = "document-style"),
 (_0x496a3d.DOCUMENT_SETTING = "document-setting"),
 (_0x496a3d.CUSTOM_DECORATION = "custom-decoration"),
 (_0x496a3d.DOC_HYPERLINK = "doc-hyperlink"),
 (_0x496a3d.DOC_CALLOUT = "doc-callout"),
 (_0x496a3d.DOC_QUOTE = "doc-quote"),
 (_0x496a3d.DOC_CHART = "doc-chart"),
 (_0x496a3d.DOC_CHART_DATA = "doc-chart-data"),
 (_0x496a3d.DOC_CODE = "doc-code"),
 (_0x496a3d.DOC_LATEX = "doc-latex"),
 (_0x496a3d.DOC_SHAPE_RESOURCE = "doc-shape-resource"),
 (_0x496a3d.DOC_TABLE_RESOURCE = "doc-table-resource"),
 (_0x496a3d.SLIDE = "slide"),
 (_0x496a3d.SLIDE_ELEMENT = "slide-element"),
 (_0x496a3d.SLIDE_TRANSITION = "slide-transition"),
 (_0x496a3d.SLIDE_TRANSITION_REFERENCE = "slide-transition-ref"),
 (_0x496a3d.SLIDE_MASTER = "slide-master"),
 (_0x496a3d.SLIDE_LAYOUT = "slide-layout"),
 (_0x496a3d.SLIDE_THEME = "slide-theme"),
 (_0x496a3d.SLIDE_CHART = "slide-chart"),
 (_0x496a3d.SLIDE_CHART_DATA = "slide-chart-data"),
 (_0x496a3d.SLIDE_TABLE = "slide-table"),
 (_0x496a3d.BASE = "base"),
 (_0x496a3d.FIELD = "field"),
 (_0x496a3d.RECORD = "record"),
 (_0x496a3d.VIEW = "view"),
 (_0x496a3d.BOARD_PAGE = "board-page"),
 (_0x496a3d.BOARD_ELEMENT = "board-element"),
 (_0x496a3d.BOARD_THEME = "board-theme"),
 (_0x496a3d.BOARD_CHART = "board-chart"),
 (_0x496a3d.BOARD_CHART_DATA = "board-chart-data"),
 (_0x496a3d.BOARD_TABLE = "board-table"),
 _0x496a3d
 );
 })({}),
 f = (function (_0x332aec) {
 return (
 (_0x332aec.DEGRADED = "degraded"),
 (_0x332aec.READY = "ready"),
 _0x332aec
 );
 })({}),
 p = (function (_0x30c83d) {
 return (
 (_0x30c83d.SHEET_SNAPSHOT_AXIS_IDENTITY_AMBIGUOUS =
 "sheet-snapshot-axis-identity-ambiguous"),
 (_0x30c83d.SHEET_STRUCTURAL_HISTORY_FALLBACK =
 "sheet-structural-history-partially-falls-back-to-snapshot-coordinates"),
 _0x30c83d
 );
 })({});
function ee(_0xea28bc, _0x379f3e) {
 if (JSON.stringify(_0xea28bc) > JSON.stringify(_0x379f3e))
 return ee(_0x379f3e, _0xea28bc).map((_0x18f303) => ({
 leftIndex: _0x18f303.rightIndex,
 rightIndex: _0x18f303.leftIndex,
 }));
 let _0x5d367e = new Map(
 _0x379f3e.map((_0x4b5618, _0x19cea7) => [_0x4b5618, _0x19cea7]),
 ),
 _0x3656b6 = _0xea28bc.flatMap((_0x1dc783, _0x58f849) => {
 let _0x34e924 = _0x5d367e.get(_0x1dc783);
 return _0x34e924 === undefined
 ? []
 : [{ leftIndex: _0x58f849, rightIndex: _0x34e924 }];
 }),
 _0x2ec477 = [],
 _0x492e10 = new Int32Array(_0x3656b6.length).fill(-1);
 _0x3656b6.forEach((_0x1fea64, _0x5bc712) => {
 let _0x31ef7e = 0,
 _0x5ac889 = _0x2ec477.length;
 for (; _0x31ef7e < _0x5ac889;) {
 let _0x5e14d3 = (_0x31ef7e + _0x5ac889) >>> 1;
 _0x3656b6[_0x2ec477[_0x5e14d3]].rightIndex < _0x1fea64.rightIndex
 ? (_0x31ef7e = _0x5e14d3 + 1)
 : (_0x5ac889 = _0x5e14d3);
 }
 (_0x31ef7e > 0 && (_0x492e10[_0x5bc712] = _0x2ec477[_0x31ef7e - 1]),
 (_0x2ec477[_0x31ef7e] = _0x5bc712));
 });
 let _0x556ffc = [];
 for (
 let _0x5ecdae = _0x2ec477[_0x2ec477.length - 1] ?? -1;
 _0x5ecdae >= 0;
 _0x5ecdae = _0x492e10[_0x5ecdae]
 )
 _0x556ffc.push(_0x3656b6[_0x5ecdae]);
 (_0x556ffc.reverse(),
 _0x556ffc.push({
 leftIndex: _0xea28bc.length,
 rightIndex: _0x379f3e.length,
 }));
 let _0x2c4221 = [],
 _0x3d8561 = 0,
 _0xe43c9d = 0;
 for (let _0x4764e6 of _0x556ffc) {
 for (; _0x3d8561 < _0x4764e6.leftIndex;)
 _0x2c4221.push({ leftIndex: _0x3d8561++, rightIndex: null });
 for (; _0xe43c9d < _0x4764e6.rightIndex;)
 _0x2c4221.push({ leftIndex: null, rightIndex: _0xe43c9d++ });
 _0x3d8561 < _0xea28bc.length &&
 _0xe43c9d < _0x379f3e.length &&
 _0x2c4221.push({ leftIndex: _0x3d8561++, rightIndex: _0xe43c9d++ });
 }
 return _0x2c4221;
}
const te = new Set([
 "angle",
 "height",
 "left",
 "rotation",
 "top",
 "transform",
 "width",
 "x",
 "y",
 ]),
 ne = new Set(["index", "order", "orderKey", "position", "zIndex"]),
 m = new Set([
 "background",
 "backgroundColor",
 "bold",
 "border",
 "fill",
 "fontFamily",
 "fontSize",
 "fontWeight",
 "italic",
 "lineHeight",
 "numberFormat",
 "opacity",
 "shadow",
 "stroke",
 "style",
 "textColor",
 "underline",
 ]),
 re = new Set([
 "dataSourceId",
 "endId",
 "layoutId",
 "masterId",
 "parentId",
 "refId",
 "sourceId",
 "startId",
 "targetId",
 ]);
function ie(_0x4a7b2d) {
 let _0x271526 = new Map(),
 _0x2964f6 = new Map();
 for (let _0x2ae8da of _0x4a7b2d.left)
 _0x271526.set(_0x2ae8da.stableId, _0x2ae8da);
 for (let _0x1a4c80 of _0x4a7b2d.right)
 _0x2964f6.set(_0x1a4c80.stableId, _0x1a4c80);
 let _0x57558b = h(_0x4a7b2d.left, _0x2964f6),
 _0x3ab986 = h(_0x4a7b2d.right, _0x271526),
 _0xc40704 = [];
 for (let [_0x1a71d3, _0x39114b] of _0x271526) {
 let _0x468d74 = g(
 _0x4a7b2d,
 _0x1a71d3,
 _0x39114b,
 _0x2964f6.get(_0x1a71d3),
 _0x57558b,
 _0x3ab986,
 );
 _0x468d74 !== undefined && _0xc40704.push(_0x468d74);
 }
 for (let [_0x12a318, _0x1a3c99] of _0x2964f6)
 if (!_0x271526.has(_0x12a318)) {
 let _0x1d2f13 = g(
 _0x4a7b2d,
 _0x12a318,
 undefined,
 _0x1a3c99,
 _0x57558b,
 _0x3ab986,
 );
 _0x1d2f13 !== undefined && _0xc40704.push(_0x1d2f13);
 }
 return _0xc40704;
}
function h(_0x2eceb8, _0x1b413b) {
 let _0x2334db = new Map(),
 _0x5670b4 = 0;
 for (let _0x155ad2 of _0x2eceb8)
 _0x1b413b.has(_0x155ad2.stableId) &&
 _0x2334db.set(_0x155ad2.stableId, _0x5670b4++);
 return _0x2334db;
}
function g(_0x2bda92, _0x5c8385, _0x12feaa, _0x49c8b9, _0x42d191, _0x496169) {
 let _0xa2adea = ae(_0x12feaa, _0x49c8b9),
 _0x40657a = oe(_0x5c8385, _0x12feaa, _0x49c8b9, _0x42d191, _0x496169);
 if (se(_0x12feaa, _0x49c8b9, _0x40657a)) return;
 let _0x2c1f7a =
 _0x2bda92.parentStableId === undefined
 ? [_0x2bda92.entityType, _0x5c8385]
 : [_0x2bda92.entityType, _0x2bda92.parentStableId, _0x5c8385],
 _0x5eee16 = y(
 _0x12feaa == null ? undefined : _0x12feaa.value,
 _0x49c8b9 == null ? undefined : _0x49c8b9.value,
 _0xa2adea,
 );
 ce(_0x5eee16, _0x12feaa, _0x49c8b9, _0x40657a);
 let _0x4be84e =
 (_0x49c8b9 == null ? undefined : _0x49c8b9.displayName) ??
 (_0x12feaa == null ? undefined : _0x12feaa.displayName);
 return {
 id: [_0x2bda92.entityType, _0x2bda92.parentStableId, _0xa2adea, _0x5c8385]
 .filter(Boolean)
 .join(":"),
 stableId: _0x5c8385,
 ...(_0x2bda92.parentStableId === undefined
 ? {}
 : { parentStableId: _0x2bda92.parentStableId }),
 kind: _0xa2adea,
 entityType: _0x2bda92.entityType,
 path: _0x2c1f7a,
 ...(_0x4be84e === undefined ? {} : { displayName: _0x4be84e }),
 moved: _0x40657a,
 changes: _0x5eee16,
 locations: {
 left: v(_0x2bda92, _0x5c8385, _0x2c1f7a, _0x12feaa),
 right: v(_0x2bda92, _0x5c8385, _0x2c1f7a, _0x49c8b9),
 },
 values: {
 ...(_0x12feaa === undefined ? {} : { left: _0x12feaa.value }),
 ...(_0x49c8b9 === undefined ? {} : { right: _0x49c8b9.value }),
 },
 };
}
function ae(_0x353388, _0x176323) {
 return _0x353388 === undefined
 ? "insert"
 : _0x176323 === undefined
 ? "delete"
 : "update";
}
function oe(_0x159df4, _0xa1b8a7, _0xfbf91, _0x6bcca2, _0x7e46b7) {
 return (
 _0xa1b8a7 !== undefined &&
 _0xfbf91 !== undefined &&
 _0x6bcca2.get(_0x159df4) !== _0x7e46b7.get(_0x159df4)
 );
}
function se(_0x47aeb5, _0x3cab04, _0x591588) {
 return (
 _0x47aeb5 !== undefined &&
 _0x3cab04 !== undefined &&
 !_0x591588 &&
 _(_0x47aeb5.value, _0x3cab04.value)
 );
}
function _(_0x1dcb9a, _0x29ac36) {
 if (_0x1dcb9a === _0x29ac36) return true;
 let _0x313660 = w(_0x1dcb9a),
 _0xb4a315 = w(_0x29ac36);
 if (_0x313660 !== undefined && _0xb4a315 !== undefined) {
 let _0x2ea779 = Object.keys(_0x313660);
 return (
 _0x2ea779.length === Object.keys(_0xb4a315).length &&
 _0x2ea779.every(
 (_0x2caf25) =>
 Object.prototype["hasOwnProperty"].call(_0xb4a315, _0x2caf25) &&
 _(_0x313660[_0x2caf25], _0xb4a315[_0x2caf25]),
 )
 );
 }
 return T(_0x1dcb9a) === T(_0x29ac36);
}
function ce(_0xf1038a, _0xd1a77b, _0x2a1886, _0x55a3a0) {
 !_0x55a3a0 ||
 _0xf1038a.some((_0x3cc9e5) => _0x3cc9e5.valueType === "position") ||
 _0xf1038a.push({
 path: ["position"],
 kind: "update",
 valueType: "position",
 before: (_0xd1a77b == null ? undefined : _0xd1a77b.position) ?? null,
 after: (_0x2a1886 == null ? undefined : _0x2a1886.position) ?? null,
 });
}
function v(_0x39dbc8, _0x9950a8, _0x557ba5, _0x464407) {
 if (_0x464407 === undefined) return null;
 let _0x56f5da = _0x464407.nativeStableId ?? _0x9950a8;
 return {
 path: _0x557ba5,
 stableId: _0x56f5da,
 ...(_0x39dbc8.parentStableId === undefined
 ? {}
 : { parentStableId: _0x39dbc8.parentStableId }),
 position: _0x464407.position,
 target: {
 kind: "entity",
 entityType: _0x39dbc8.entityType,
 stableId: _0x56f5da,
 comparisonStableId: _0x9950a8,
 ...(_0x39dbc8.parentStableId === undefined
 ? {}
 : { parentStableId: _0x39dbc8.parentStableId }),
 },
 };
}
function y(_0x10d797, _0x51b2b8, _0x2edee5 = "update") {
 if (_0x2edee5 !== "update") {
 let _0x1898e0 = _0x2edee5 === "delete" ? _0x10d797 : _0x51b2b8,
 _0x2ab6ac = [];
 return (b(_0x1898e0, [], _0x2edee5, _0x2ab6ac), _0x2ab6ac);
 }
 let _0x1ecde0 = [];
 E(_0x10d797, _0x51b2b8, [], _0x1ecde0);
 let _0x5d6bf6 = new Set();
 return _0x1ecde0
 .filter((_0x1eeabf) => {
 let _0xa1e671 = T([
 _0x1eeabf.sourcePath ?? _0x1eeabf.path,
 _0x1eeabf.kind,
 _0x1eeabf.before,
 _0x1eeabf.after,
 ]);
 return _0x5d6bf6.has(_0xa1e671)
 ? false
 : (_0x5d6bf6.add(_0xa1e671), true);
 })
 .sort((_0x314a23, _0x4bab4a) =>
 T(_0x314a23.path).localeCompare(T(_0x4bab4a.path)),
 );
}
function b(_0x37da62, _0x45a830, _0x3d2488, _0x138274) {
 let _0x3258d6 = w(_0x37da62);
 if (_0x3258d6 !== undefined && Object.keys(_0x3258d6).length > 0) {
 for (let _0x2aeec5 of Object.keys(_0x3258d6).sort())
 b(_0x3258d6[_0x2aeec5], [..._0x45a830, _0x2aeec5], _0x3d2488, _0x138274);
 return;
 }
 let _0xab33d5 = D(_0x45a830);
 _0x138274.push({
 path: _0xab33d5,
 ...(T(_0xab33d5) === T(_0x45a830) ? {} : { sourcePath: _0x45a830 }),
 kind: _0x3d2488,
 valueType: O(_0xab33d5, _0x37da62),
 ...(_0x3d2488 === "delete" ? { before: _0x37da62 } : { after: _0x37da62 }),
 });
}
function x(_0x4e3f30, _0x52a537, _0x489d40 = (_0xce1d7b) => _0xce1d7b) {
 let _0x4ffc8d = w(_0x4e3f30) ?? {},
 _0x5586f6 = Array.isArray(_0x52a537)
 ? _0x52a537.filter(
 (_0x4c1f2d) => typeof _0x4c1f2d == "string" && _0x4c1f2d in _0x4ffc8d,
 )
 : [],
 _0x22d736 = new Set(_0x5586f6);
 return [
 ..._0x5586f6,
 ...Object.keys(_0x4ffc8d)
 .filter((_0x3150cc) => !_0x22d736.has(_0x3150cc))
 .sort(),
 ].map((_0x1a9ae1, _0x39f136) => {
 let _0x36b2d1 = M(_0x4ffc8d[_0x1a9ae1]);
 return {
 stableId: _0x1a9ae1,
 position: _0x39f136,
 ...(_0x36b2d1 === undefined ? {} : { displayName: _0x36b2d1 }),
 value: _0x489d40(_0x4ffc8d[_0x1a9ae1]),
 };
 });
}
function le(_0x4e852c) {
 return S(_0x4e852c).scopes;
}
function S(_0x56050d) {
 let _0x15cc3e = new Map(
 _0x56050d.left["map"]((_0x42fa22) => [_0x42fa22.stableId, _0x42fa22]),
 ),
 _0x6f7aaa = new Map(
 _0x56050d.right["map"]((_0x4781a4) => [_0x4781a4.stableId, _0x4781a4]),
 ),
 _0x214545 = new Set([..._0x15cc3e.keys(), ..._0x6f7aaa.keys()]),
 _0x5e15c8 = ue(_0x56050d.items, _0x214545, _0x56050d.references),
 _0x51027f = _0x56050d.items["map"]((_0x38e3d3, _0x40569d) => {
 let _0x2a68e0 = _0x5e15c8[_0x40569d];
 return _0x2a68e0 === undefined
 ? _0x38e3d3
 : {
 ..._0x38e3d3,
 scope: { entityType: _0x56050d.entityType, stableId: _0x2a68e0 },
 };
 });
 return {
 items: _0x51027f,
 scopes: de(
 _0x56050d.entityType,
 _0x51027f,
 _0x56050d.left,
 _0x56050d.right,
 _0x15cc3e,
 _0x6f7aaa,
 ),
 };
}
function ue(_0x1e43a7, _0x1715c4, _0xed307b) {
 let _0x17da77 = new Map();
 _0x1e43a7.forEach((_0x5415a7, _0x3132bd) => {
 let _0x45e846 = _0x17da77.get(_0x5415a7.stableId) ?? [];
 (_0x45e846.push(_0x3132bd), _0x17da77.set(_0x5415a7.stableId, _0x45e846));
 });
 let _0x54d63b = new Set(_0x17da77.keys()),
 _0x890cc4 = _0x1e43a7.map((_0x350d13) =>
 _0x350d13.scope !== undefined &&
 _0x1715c4.has(_0x350d13.scope["stableId"])
 ? _0x350d13.scope["stableId"]
 : _0x1715c4.has(_0x350d13.stableId)
 ? _0x350d13.stableId
 : _0x350d13.parentStableId !== undefined &&
 _0x1715c4.has(_0x350d13.parentStableId)
 ? _0x350d13.parentStableId
 : undefined,
 ),
 _0x5ad903 = _0x890cc4.flatMap((_0x2ee927, _0x32c322) =>
 _0x2ee927 === undefined ? [] : [_0x32c322],
 );
 for (let _0x1c8685 of [
 ...((_0xed307b == null ? undefined : _0xed307b.left) ?? []),
 ...((_0xed307b == null ? undefined : _0xed307b.right) ?? []),
 ])
 _0x1715c4.has(_0x1c8685.stableId) &&
 C(
 _0x1c8685.value,
 _0x1c8685.stableId,
 _0x17da77,
 _0x54d63b,
 _0x890cc4,
 _0x5ad903,
 );
 for (let _0x5ecc66 = 0; _0x5ecc66 < _0x5ad903.length; _0x5ecc66 += 1) {
 let _0x49bfa3 = _0x5ad903[_0x5ecc66],
 _0x2a7360 = _0x890cc4[_0x49bfa3],
 _0x50396e = _0x1e43a7[_0x49bfa3];
 _0x2a7360 !== undefined &&
 _0x50396e !== undefined &&
 C(
 _0x50396e.values,
 _0x2a7360,
 _0x17da77,
 _0x54d63b,
 _0x890cc4,
 _0x5ad903,
 );
 }
 return _0x890cc4;
}
function de(_0x500d2f, _0x55da49, _0x15d81f, _0x132a88, _0x449646, _0x4d6fe6) {
 let _0x40722b = new Map(),
 _0xd8d4fc = new Map();
 for (let _0x39fb00 of _0x55da49) {
 var _0x2661dd;
 let _0x1084ef =
 (_0x2661dd = _0x39fb00.scope) == null ? undefined : _0x2661dd.stableId;
 _0x1084ef !== undefined &&
 (_0x40722b.set(_0x1084ef, (_0x40722b.get(_0x1084ef) ?? 0) + 1),
 _0x39fb00.entityType === _0x500d2f &&
 _0xd8d4fc.set(_0x1084ef, _0x39fb00));
 }
 return pe(_0x15d81f, _0x132a88).flatMap((_0x3c8881) => {
 let _0x29d60a = _0x40722b.get(_0x3c8881);
 if (_0x29d60a === undefined) return [];
 let _0x598b4d = _0x449646.get(_0x3c8881),
 _0xbcc62f = _0x4d6fe6.get(_0x3c8881),
 _0x56c324 = _0xd8d4fc.get(_0x3c8881);
 return [
 {
 entityType: _0x500d2f,
 stableId: _0x3c8881,
 displayName:
 (_0xbcc62f == null ? undefined : _0xbcc62f.displayName) ??
 (_0x598b4d == null ? undefined : _0x598b4d.displayName) ??
 _0x3c8881,
 kind:
 _0x598b4d === undefined
 ? "insert"
 : _0xbcc62f === undefined
 ? "delete"
 : "update",
 changeCount: _0x29d60a,
 moved: (_0x56c324 == null ? undefined : _0x56c324.moved) ?? false,
 locations: {
 left: me(_0x500d2f, _0x3c8881, _0x598b4d),
 right: me(_0x500d2f, _0x3c8881, _0xbcc62f),
 },
 },
 ];
 });
}
function C(_0x449717, _0x305bee, _0x378b38, _0x3fa775, _0x1ba139, _0x1e3ee7) {
 for (let _0x10a1f9 of fe(_0x449717, _0x3fa775))
 for (let _0x2b3e8d of _0x378b38.get(_0x10a1f9) ?? [])
 _0x1ba139[_0x2b3e8d] === undefined &&
 ((_0x1ba139[_0x2b3e8d] = _0x305bee), _0x1e3ee7.push(_0x2b3e8d));
}
function fe(_0x1615bc, _0x2e99de) {
 let _0x2e2d3b = new Set(),
 _0x16ed56 = [_0x1615bc],
 _0x5e527b = new Set();
 for (; _0x16ed56.length > 0;) {
 let _0x3228e0 = _0x16ed56.pop();
 if (typeof _0x3228e0 == "string") {
 _0x2e99de.has(_0x3228e0) && _0x2e2d3b.add(_0x3228e0);
 continue;
 }
 typeof _0x3228e0 != "object" ||
 !_0x3228e0 ||
 _0x5e527b.has(_0x3228e0) ||
 (_0x5e527b.add(_0x3228e0),
 _0x16ed56.push(
 ...(Array.isArray(_0x3228e0) ? _0x3228e0 : Object.values(_0x3228e0)),
 ));
 }
 return _0x2e2d3b;
}
function pe(_0x355ca7, _0x3ef876) {
 let _0x40480f = _0x3ef876.map((_0x676733) => _0x676733.stableId),
 _0x47da82 = new Set(_0x40480f),
 _0x15ee17 = new Map(),
 _0x470eed = [];
 for (let _0x442625 of _0x355ca7) {
 if (!_0x47da82.has(_0x442625.stableId)) {
 _0x470eed.push(_0x442625.stableId);
 continue;
 }
 _0x470eed.length > 0 &&
 (_0x15ee17.set(_0x442625.stableId, _0x470eed), (_0x470eed = []));
 }
 return _0x40480f
 .flatMap((_0x548395) => [...(_0x15ee17.get(_0x548395) ?? []), _0x548395])
 .concat(_0x470eed);
}
function me(_0x31ce82, _0x146891, _0x4dc664) {
 return _0x4dc664 === undefined
 ? null
 : {
 path: [_0x31ce82, _0x146891],
 stableId: _0x4dc664.nativeStableId ?? _0x146891,
 position: _0x4dc664.position,
 target: {
 kind: "entity",
 entityType: _0x31ce82,
 stableId: _0x4dc664.nativeStableId ?? _0x146891,
 comparisonStableId: _0x146891,
 },
 };
}
function he(_0x143c8c, _0x4b40f9, _0x25bee2 = (_0x509194) => _0x509194) {
 return (Array.isArray(_0x143c8c) ? _0x143c8c : []).flatMap(
 (_0x1300c6, _0x5afbac) => {
 let _0x1eb361 = w(_0x1300c6),
 _0x44e2c7 = _0x1eb361 == null ? undefined : _0x1eb361[_0x4b40f9];
 if (typeof _0x44e2c7 != "string") return [];
 let _0x3ad75c = M(_0x1300c6);
 return [
 {
 stableId: _0x44e2c7,
 position: _0x5afbac,
 ...(_0x3ad75c === undefined ? {} : { displayName: _0x3ad75c }),
 value: _0x25bee2(_0x1300c6),
 },
 ];
 },
 );
}
function ge(_0x2bf843, _0x4a3cae, _0x2ecb3e) {
 var _0x4f55e3, _0x5eb55b, _0x382b5e;
 let _0x440650 = (
 Array.isArray(
 (_0x4f55e3 = w(_0x2bf843)) == null ? undefined : _0x4f55e3.resources,
 )
 ? (_0x5eb55b = w(_0x2bf843)) == null
 ? undefined
 : _0x5eb55b.resources
 : []
 )
 .map(w)
 .find(
 (_0x328bea) =>
 (_0x328bea == null ? undefined : _0x328bea.name) === _0x4a3cae,
 );
 if (_0x440650 === undefined) return [];
 let _0x3b641c = _0x440650.data;
 if (typeof _0x3b641c == "string")
 try {
 _0x3b641c = JSON.parse(_0x3b641c);
 } catch {
 return [{ stableId: "resource", position: 0, value: _0x3b641c }];
 }
 let _0x44a95c =
 _0x2ecb3e === undefined
 ? _0x3b641c
 : (_0x382b5e = w(_0x3b641c)) == null
 ? undefined
 : _0x382b5e[_0x2ecb3e];
 return Array.isArray(_0x44a95c)
 ? _0x44a95c.map((_0x394ad6, _0x2556a1) => {
 let _0x59bb9d = M(_0x394ad6);
 return {
 stableId: xe(_0x394ad6, _0x2556a1),
 position: _0x2556a1,
 ...(_0x59bb9d === undefined ? {} : { displayName: _0x59bb9d }),
 value: _0x394ad6,
 };
 })
 : x(_0x44a95c, undefined);
}
function w(_0x1a0600) {
 return typeof _0x1a0600 == "object" && _0x1a0600 && !Array.isArray(_0x1a0600)
 ? _0x1a0600
 : undefined;
}
function _e(..._0x1baaa2) {
 return (_0x2a25d7) => {
 let _0x1d6d29 = w(_0x2a25d7);
 return _0x1d6d29 === undefined
 ? _0x2a25d7
 : Object.fromEntries(
 Object.entries(_0x1d6d29).filter(
 ([_0xf8f04e]) => !_0x1baaa2.includes(_0xf8f04e),
 ),
 );
 };
}
function T(_0x5959fc) {
 if (Array.isArray(_0x5959fc)) return "[" + _0x5959fc.map(T).join(",") + "]";
 let _0x17c058 = w(_0x5959fc);
 return _0x17c058 === undefined
 ? (JSON.stringify(_0x5959fc) ?? "undefined")
 : "{" +
 Object.keys(_0x17c058)
 .sort()
 .map(
 (_0x4ff0ae) =>
 JSON.stringify(_0x4ff0ae) + ":" + T(_0x17c058[_0x4ff0ae]),
 )
 .join(",") +
 "}";
}
function E(_0x69cfd9, _0x55d3e6, _0x3143d4, _0x149247) {
 if (_(_0x69cfd9, _0x55d3e6)) return;
 if (
 Array.isArray(_0x69cfd9) &&
 Array.isArray(_0x55d3e6) &&
 !ve(_0x69cfd9) &&
 !ve(_0x55d3e6)
 ) {
 for (
 let _0x1c3def = 0;
 _0x1c3def < Math.max(_0x69cfd9.length, _0x55d3e6.length);
 _0x1c3def += 1
 ) {
 let _0x4c7acf = [..._0x3143d4, String(_0x1c3def)];
 if (_0x1c3def < _0x69cfd9.length && _0x1c3def < _0x55d3e6.length)
 E(_0x69cfd9[_0x1c3def], _0x55d3e6[_0x1c3def], _0x4c7acf, _0x149247);
 else {
 let _0xec18bd = _0x1c3def < _0x69cfd9.length ? "delete" : "insert";
 b(
 _0x1c3def < _0x69cfd9.length
 ? _0x69cfd9[_0x1c3def]
 : _0x55d3e6[_0x1c3def],
 _0x4c7acf,
 _0xec18bd,
 _0x149247,
 );
 }
 }
 return;
 }
 let _0x9cc8f0 = w(_0x69cfd9),
 _0x44daa7 = w(_0x55d3e6);
 if (_0x9cc8f0 !== undefined && _0x44daa7 !== undefined) {
 let _0x3ce104 = [
 ...new Set([...Object.keys(_0x9cc8f0), ...Object.keys(_0x44daa7)]),
 ].sort();
 for (let _0x2ee8e2 of _0x3ce104) {
 let _0x2e822e = Object.prototype["hasOwnProperty"].call(
 _0x9cc8f0,
 _0x2ee8e2,
 ),
 _0x5e24d0 = Object.prototype["hasOwnProperty"].call(
 _0x44daa7,
 _0x2ee8e2,
 );
 if (_0x2e822e && _0x5e24d0) {
 E(
 _0x9cc8f0[_0x2ee8e2],
 _0x44daa7[_0x2ee8e2],
 [..._0x3143d4, _0x2ee8e2],
 _0x149247,
 );
 continue;
 }
 let _0xf02221 = D([..._0x3143d4, _0x2ee8e2]),
 _0x1b0a0f = _0x2e822e ? "delete" : "insert",
 _0x5121e2 = _0x2e822e ? _0x9cc8f0[_0x2ee8e2] : _0x44daa7[_0x2ee8e2];
 _0x149247.push({
 path: _0xf02221,
 ...(T(_0xf02221) === T([..._0x3143d4, _0x2ee8e2])
 ? {}
 : { sourcePath: [..._0x3143d4, _0x2ee8e2] }),
 kind: _0x1b0a0f,
 valueType: O(_0xf02221, _0x5121e2),
 ...(_0x2e822e ? { before: _0x5121e2 } : { after: _0x5121e2 }),
 });
 }
 return;
 }
 let _0x3e860f = D(_0x3143d4),
 _0x42f8ca = O(_0x3e860f, _0x55d3e6 === undefined ? _0x69cfd9 : _0x55d3e6);
 _0x149247.push({
 path: _0x3e860f,
 ...(T(_0x3e860f) === T(_0x3143d4) ? {} : { sourcePath: _0x3143d4 }),
 kind: "update",
 valueType: _0x42f8ca,
 before: _0x69cfd9,
 after: _0x55d3e6,
 ...ye(_0x69cfd9, _0x55d3e6, _0x42f8ca),
 });
}
function ve(_0x554ae0) {
 for (let _0x136f1b = 0; _0x136f1b < _0x554ae0.length; _0x136f1b += 1)
 if (!Object.prototype["hasOwnProperty"].call(_0x554ae0, _0x136f1b))
 return true;
 return false;
}
function D(_0x3ceb0d) {
 if (
 _0x3ceb0d[_0x3ceb0d.length - 1] === "dataStream" &&
 _0x3ceb0d.includes("body")
 )
 return ["text"];
 if (_0x3ceb0d[0] === "values" && _0x3ceb0d.length === 2)
 return ["field", _0x3ceb0d[1]];
 let _0x33e8f2 = _0x3ceb0d.findIndex((_0x1022c4) => te.has(_0x1022c4));
 if (_0x33e8f2 >= 0) return ["geometry", ..._0x3ceb0d.slice(_0x33e8f2)];
 let _0x500699 = _0x3ceb0d.findIndex((_0x3116aa) => m.has(_0x3116aa));
 return _0x500699 >= 0
 ? [
 "style",
 ..._0x3ceb0d.slice(_0x500699 + +(_0x3ceb0d[_0x500699] === "style")),
 ]
 : _0x3ceb0d;
}
function O(_0x2cce3e, _0x5ce5ca) {
 var _0x2b0a05;
 let _0x52af3a =
 ((_0x2b0a05 = _0x2cce3e[_0x2cce3e.length - 1]) == null
 ? undefined
 : _0x2b0a05.toLocaleLowerCase()) ?? "";
 return _0x52af3a.includes("formula") || _0x52af3a === "f"
 ? "formula"
 : _0x2cce3e.some(
 (_0x23fc90) => _0x23fc90 === "geometry" || te.has(_0x23fc90),
 )
 ? "geometry"
 : _0x2cce3e.some(
 (_0x25b8d6) => _0x25b8d6 === "position" || ne.has(_0x25b8d6),
 )
 ? "position"
 : _0x2cce3e.some((_0x481f75) =>
 _0x481f75.toLocaleLowerCase().includes("color"),
 )
 ? "color"
 : _0x2cce3e.some(
 (_0x43338f) => _0x43338f === "style" || m.has(_0x43338f),
 )
 ? "style"
 : _0x2cce3e.some(
 (_0x34a91f) =>
 re.has(_0x34a91f) || /(?:Id|Ref)$/u.test(_0x34a91f),
 )
 ? "reference"
 : _0x5ce5ca === null
 ? "null"
 : Array.isArray(_0x5ce5ca)
 ? "array"
 : typeof _0x5ce5ca == "boolean"
 ? "boolean"
 : typeof _0x5ce5ca == "number"
 ? "number"
 : typeof _0x5ce5ca == "string"
 ? "text"
 : w(_0x5ce5ca) === undefined
 ? "unknown"
 : "object";
}
function ye(_0x3ace4f, _0xcc5241, _0x429189) {
 if (
 typeof _0x3ace4f != "string" ||
 typeof _0xcc5241 != "string" ||
 (_0x429189 !== "text" && _0x429189 !== "formula")
 )
 return {};
 let _0x19fce1 = _0x3ace4f > _0xcc5241,
 _0x434254 = _0x19fce1 ? _0xcc5241 : _0x3ace4f,
 _0x1a3029 = _0x19fce1 ? _0x3ace4f : _0xcc5241,
 _0x29ba88 = _0x429189 === "text" ? Array.from(_0x434254) : A(_0x434254),
 _0x342766 = _0x429189 === "text" ? Array.from(_0x1a3029) : A(_0x1a3029),
 _0x522940 = 0;
 for (
 ;
 _0x522940 < _0x29ba88.length &&
 _0x522940 < _0x342766.length &&
 _0x29ba88[_0x522940] === _0x342766[_0x522940];
 )
 _0x522940 += 1;
 let _0x97044e = 0;
 for (
 ;
 _0x97044e < _0x29ba88.length - _0x522940 &&
 _0x97044e < _0x342766.length - _0x522940 &&
 _0x29ba88[_0x29ba88.length - 1 - _0x97044e] ===
 _0x342766[_0x342766.length - 1 - _0x97044e];
 )
 _0x97044e += 1;
 let _0x1e0010 = _0x29ba88.slice(_0x522940, _0x29ba88.length - _0x97044e),
 _0x4a5b1c = _0x342766.slice(_0x522940, _0x342766.length - _0x97044e),
 _0x37d835 =
 _0x1e0010.length + _0x4a5b1c.length > 800
 ? {
 left: _0x1e0010.length
 ? [{ kind: "delete", text: _0x1e0010.join("") }]
 : [],
 right: _0x4a5b1c.length
 ? [{ kind: "insert", text: _0x4a5b1c.join("") }]
 : [],
 }
 : be(_0x1e0010, _0x4a5b1c),
 _0x42daa6 = {
 left: k(
 _0x37d835.left,
 _0x29ba88.slice(0, _0x522940).join(""),
 _0x29ba88.slice(_0x29ba88.length - _0x97044e).join(""),
 ),
 right: k(
 _0x37d835.right,
 _0x342766.slice(0, _0x522940).join(""),
 _0x342766.slice(_0x342766.length - _0x97044e).join(""),
 ),
 };
 return {
 segments: _0x19fce1
 ? {
 left: _0x42daa6.right["map"]((_0xfd3730) => ({
 ..._0xfd3730,
 kind: _0xfd3730.kind === "equal" ? _0xfd3730.kind : "delete",
 })),
 right: _0x42daa6.left["map"]((_0x31bfea) => ({
 ..._0x31bfea,
 kind: _0x31bfea.kind === "equal" ? _0x31bfea.kind : "insert",
 })),
 }
 : _0x42daa6,
 };
}
function k(_0x41a162, _0x32eaee, _0x22fffc) {
 let _0x151b65 = [];
 _0x32eaee && j(_0x151b65, { kind: "equal", text: _0x32eaee });
 for (let _0x155778 of _0x41a162) j(_0x151b65, _0x155778);
 return (
 _0x22fffc && j(_0x151b65, { kind: "equal", text: _0x22fffc }),
 _0x151b65
 );
}
function A(_0x1df9d3) {
 return (
 _0x1df9d3.match(
 /(\r?\n|\s+|\$?[A-Za-z]+\$?\d+|[A-Za-z_]+[A-Za-z0-9_]*|[0-9]+(?:\.\d+)?|[\u3400-\u9FFF]|.)/gu,
 ) ?? []
 );
}
function be(_0x48d991, _0x3fa9d8) {
 let _0x39a74f = Array.from(
 { length: _0x48d991.length + 1 },
 () => new Uint16Array(_0x3fa9d8.length + 1),
 );
 for (let _0x3d347b = 1; _0x3d347b <= _0x48d991.length; _0x3d347b += 1)
 for (let _0x594dd4 = 1; _0x594dd4 <= _0x3fa9d8.length; _0x594dd4 += 1)
 _0x39a74f[_0x3d347b][_0x594dd4] =
 _0x48d991[_0x3d347b - 1] === _0x3fa9d8[_0x594dd4 - 1]
 ? _0x39a74f[_0x3d347b - 1][_0x594dd4 - 1] + 1
 : Math.max(
 _0x39a74f[_0x3d347b - 1][_0x594dd4],
 _0x39a74f[_0x3d347b][_0x594dd4 - 1],
 );
 let _0x56b4ba = [],
 _0x2e9026 = _0x48d991.length,
 _0x1a28ad = _0x3fa9d8.length;
 for (; _0x2e9026 > 0 || _0x1a28ad > 0;)
 _0x2e9026 > 0 &&
 _0x1a28ad > 0 &&
 _0x48d991[_0x2e9026 - 1] === _0x3fa9d8[_0x1a28ad - 1]
 ? (_0x56b4ba.push({ kind: "equal", text: _0x48d991[_0x2e9026 - 1] }),
 --_0x2e9026,
 --_0x1a28ad)
 : _0x2e9026 > 0 &&
 (_0x1a28ad === 0 ||
 _0x39a74f[_0x2e9026 - 1][_0x1a28ad] >=
 _0x39a74f[_0x2e9026][_0x1a28ad - 1])
 ? (_0x56b4ba.push({ kind: "delete", text: _0x48d991[_0x2e9026 - 1] }),
 --_0x2e9026)
 : (_0x56b4ba.push({ kind: "insert", text: _0x3fa9d8[_0x1a28ad - 1] }),
 --_0x1a28ad);
 let _0x291ea1 = [],
 _0x3f2ba8 = [];
 for (let _0x1bef24 of _0x56b4ba.reverse())
 (_0x1bef24.kind !== "insert" && j(_0x291ea1, _0x1bef24),
 _0x1bef24.kind !== "delete" && j(_0x3f2ba8, _0x1bef24));
 return { left: _0x291ea1, right: _0x3f2ba8 };
}
function j(_0x540664, _0x22f963) {
 let _0x15cead = _0x540664[_0x540664.length - 1];
 (_0x15cead == null ? undefined : _0x15cead.kind) === _0x22f963.kind
 ? (_0x15cead.text += _0x22f963.text)
 : _0x540664.push({ ..._0x22f963 });
}
function xe(_0x5af674, _0x499712) {
 if (typeof _0x5af674 == "string") return _0x5af674;
 let _0xd1c6c6 = w(_0x5af674);
 return (
 [
 _0xd1c6c6 == null ? undefined : _0xd1c6c6.id,
 _0xd1c6c6 == null ? undefined : _0xd1c6c6.chartId,
 _0xd1c6c6 == null ? undefined : _0xd1c6c6.tableId,
 _0xd1c6c6 == null ? undefined : _0xd1c6c6.formulaId,
 _0xd1c6c6 == null ? undefined : _0xd1c6c6.rangeId,
 _0xd1c6c6 == null ? undefined : _0xd1c6c6.blockId,
 _0xd1c6c6 == null ? undefined : _0xd1c6c6.linkId,
 _0xd1c6c6 == null ? undefined : _0xd1c6c6.drawingId,
 ].find((_0x5b631c) => typeof _0x5b631c == "string") ?? "entry-" + _0x499712
 );
}
function M(_0x4bae45, _0x4e15cb = 0) {
 if (_0x4e15cb > 6) return;
 if (typeof _0x4bae45 == "string") return N(_0x4bae45);
 if (typeof _0x4bae45 == "number" || typeof _0x4bae45 == "boolean")
 return String(_0x4bae45);
 if (Array.isArray(_0x4bae45)) {
 for (
 let _0x523a15 = 0;
 _0x523a15 < Math.min(8, _0x4bae45.length);
 _0x523a15++
 ) {
 let _0x13482e = M(_0x4bae45[_0x523a15], _0x4e15cb + 1);
 if (_0x13482e !== undefined) return _0x13482e;
 }
 return;
 }
 let _0x400bf3 = w(_0x4bae45);
 if (_0x400bf3 !== undefined) {
 for (let _0x20ecbc of [
 "title",
 "label",
 "text",
 "caption",
 "description",
 "dataStream",
 "formula",
 "code",
 ]) {
 let _0xb92fa3 = _0x400bf3[_0x20ecbc];
 if (typeof _0xb92fa3 == "string") {
 let _0x3fc448 = N(_0xb92fa3);
 if (_0x3fc448 !== undefined) return _0x3fc448;
 }
 }
 for (let _0x213d58 of [
 "textData",
 "body",
 "shapeData",
 "dataModel",
 "content",
 "props",
 "value",
 "values",
 ]) {
 let _0x387bdc = M(_0x400bf3[_0x213d58], _0x4e15cb + 1);
 if (_0x387bdc !== undefined) return _0x387bdc;
 }
 return typeof _0x400bf3.name == "string" ? N(_0x400bf3.name) : undefined;
 }
}
function N(_0x2a2827) {
 let _0x305a10 = "",
 _0x31ec0a = false;
 for (let _0x519204 of _0x2a2827) {
 let _0x2ac094 = _0x519204.charCodeAt(0);
 if (
 _0x2ac094 <= 32 ||
 (_0x2ac094 >= 127 && _0x2ac094 <= 159) ||
 /\s/u.test(_0x519204)
 ) {
 _0x31ec0a = _0x305a10.length > 0;
 continue;
 }
 if (
 ((_0x305a10 += _0x31ec0a ? "\x20" + _0x519204 : _0x519204),
 (_0x31ec0a = false),
 _0x305a10.length > 72)
 )
 return _0x305a10.slice(0, 69).trimEnd() + "…";
 }
 return _0x305a10 || undefined;
}
function P(_0x238981) {
 "@babel/helpers - typeof";
 return (
 (P =
 typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
 ? function (_0x3a753c) {
 return typeof _0x3a753c;
 }
 : function (_0x5ebc34) {
 return _0x5ebc34 &&
 typeof Symbol == "function" &&
 _0x5ebc34.constructor === Symbol &&
 _0x5ebc34 !== Symbol.prototype
 ? "symbol"
 : typeof _0x5ebc34;
 }),
 P(_0x238981)
 );
}
function Se(_0x59e503, _0x188793) {
 if (P(_0x59e503) != "object" || !_0x59e503) return _0x59e503;
 var _0x3f50c7 = _0x59e503[Symbol.toPrimitive];
 if (_0x3f50c7 !== undefined) {
 var _0xeda22b = _0x3f50c7.call(_0x59e503, _0x188793 || "default");
 if (P(_0xeda22b) != "object") return _0xeda22b;
 throw TypeError(
 "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
 );
 }
 return (_0x188793 === "string" ? String : Number)(_0x59e503);
}
function Ce(_0x509e6e) {
 var _0x598844 = Se(_0x509e6e, "string");
 return P(_0x598844) == "symbol" ? _0x598844 : _0x598844 + "";
}
function F(_0x22456c, _0x4c1b8c, _0x18ee39) {
 return (
 (_0x4c1b8c = Ce(_0x4c1b8c)) in _0x22456c
 ? Object.defineProperty(_0x22456c, _0x4c1b8c, {
 value: _0x18ee39,
 enumerable: true,
 configurable: true,
 writable: true,
 })
 : (_0x22456c[_0x4c1b8c] = _0x18ee39),
 _0x22456c
 );
}
var I = class extends e.Disposable {
 constructor(..._0x3d31f8) {
 (super(..._0x3d31f8), F(this, "_adapters", new Map()));
 }
 register(_0x2ed66f) {
 if (this._adapters["has"](_0x2ed66f.type))
 throw Error(
 "[UnitComparisonAdapterRegistryService]: Adapter for unit type " +
 _0x2ed66f.type +
 " is registered.",
 );
 return (
 this._adapters["set"](_0x2ed66f.type, _0x2ed66f),
 (0, e.toDisposable)(() => {
 this._adapters["get"](_0x2ed66f.type) === _0x2ed66f &&
 this._adapters["delete"](_0x2ed66f.type);
 })
 );
 }
 get(_0x15a0af) {
 return this._adapters["get"](_0x15a0af);
 }
 dispose() {
 (this._adapters["clear"](), super.dispose());
 }
};
const L = 1000;
function we(_0x55305d) {
 let _0x2f342a = new Map();
 for (let _0x5d581f of _0x55305d) {
 if (_0x2f342a.has(_0x5d581f.type))
 throw Error(
 "[createUnitComparisonEngine]: Adapter for unit type " +
 _0x5d581f.type +
 " is already registered.",
 );
 _0x2f342a.set(_0x5d581f.type, _0x5d581f);
 }
 let _0xa2bdee = (_0xf6ff52) => {
 let _0x4121ab = _0x2f342a.get(_0xf6ff52);
 if (!_0x4121ab)
 throw Error(
 "[createUnitComparisonEngine]:\x20No\x20comparison\x20adapter\x20for\x20unit\x20type\x20" +
 _0xf6ff52 +
 ".",
 );
 return _0x4121ab;
 };
 return {
 compare(_0x4cb381) {
 let { query: _0x23fb5c, ..._0x14d097 } = _0x4cb381;
 return z(R(_0x14d097, _0xa2bdee(_0x4cb381.type)), _0x23fb5c);
 },
 prepare: (_0xd8254a) => R(_0xd8254a, _0xa2bdee(_0xd8254a.type)),
 query: z,
 };
}
function R(_0x5a734e, _0x4d3782) {
 let _0xaf28f6 = B(_0x5a734e),
 _0x4ea697 = _0x4d3782.compare({
 unitId: _0xaf28f6.unitId,
 leftData: _0xaf28f6.leftData,
 rightData: _0xaf28f6.rightData,
 leftChangesets: _0xaf28f6.leftChangesets ?? [],
 rightChangesets: _0xaf28f6.rightChangesets ?? [],
 }),
 _0x47a9ce = _0x4ea697.scopes ?? [],
 _0x4eb6a7 = new Map(
 _0x47a9ce.map((_0x15ab0e) => [_0x15ab0e.stableId, _0x15ab0e]),
 );
 return {
 metadata: {
 comparisonId: _0xaf28f6.comparisonId,
 unitId: _0xaf28f6.unitId,
 ...(_0xaf28f6.unitName === undefined
 ? {}
 : { unitName: _0xaf28f6.unitName }),
 type: _0xaf28f6.type,
 fidelity: _0xaf28f6.fidelity,
 ...(_0xaf28f6.commonBaseRevision === undefined
 ? {}
 : { commonBaseRevision: _0xaf28f6.commonBaseRevision }),
 stale: _0xaf28f6.stale ?? false,
 },
 adapterResult: {
 ..._0x4ea697,
 items: _0x4ea697.items["map"]((_0x5e1e6f) => {
 let _0x18ca0b = _0x4eb6a7.get(_0x5e1e6f.stableId),
 _0xadb7ca =
 (_0x18ca0b == null ? undefined : _0x18ca0b.entityType) ===
 _0x5e1e6f.entityType
 ? _0x18ca0b
 : _0x5e1e6f.parentStableId === undefined
 ? undefined
 : _0x4eb6a7.get(_0x5e1e6f.parentStableId);
 return _0xadb7ca === undefined
 ? _0x5e1e6f
 : {
 ..._0x5e1e6f,
 scope: {
 entityType: _0xadb7ca.entityType,
 stableId: _0xadb7ca.stableId,
 },
 };
 }),
 },
 };
}
function z(_0x16680c, _0x34d7ce = {}) {
 let { adapterResult: _0x32dbec, metadata: _0x4ff125 } = _0x16680c,
 _0x5dbc7a = Ee(_0x32dbec.items, _0x34d7ce),
 _0x45d196 = V(_0x34d7ce.offset, 0, 0, 2 ** 53 - 1),
 _0x590735 = V(_0x34d7ce.limit, 100, 1, L),
 _0x17dd6b = _0x5dbc7a
 .slice(_0x45d196, _0x45d196 + _0x590735)
 .map((_0x140c96) => De(_0x140c96, _0x34d7ce.detail)),
 _0x5ddbd5 = _0x32dbec.unsupportedMutationIds ?? [],
 _0x45d951 = Te(_0x32dbec.productContext, _0x34d7ce);
 return B({
 schemaVersion: 1,
 comparisonId: _0x4ff125.comparisonId,
 unit: {
 unitId: _0x4ff125.unitId,
 type: _0x4ff125.type,
 ...(_0x4ff125.unitName === undefined ? {} : { name: _0x4ff125.unitName }),
 },
 fidelity: _0x4ff125.fidelity,
 ...(_0x4ff125.commonBaseRevision === undefined
 ? {}
 : { commonBaseRevision: _0x4ff125.commonBaseRevision }),
 stale: _0x4ff125.stale,
 detail: _0x34d7ce.detail ?? "changes",
 summary: Oe(_0x32dbec.items),
 coverage: { supportedEntityTypes: _0x32dbec.supportedEntityTypes },
 scopes: _0x32dbec.scopes ?? [],
 page: {
 offset: _0x45d196,
 limit: _0x590735,
 matched: _0x5dbc7a.length,
 hasMore: _0x45d196 + _0x17dd6b.length < _0x5dbc7a.length,
 },
 items: _0x17dd6b,
 diagnostics: {
 readiness:
 _0x5ddbd5.length || _0x32dbec.readiness === "degraded"
 ? "degraded"
 : "ready",
 unsupportedMutationIds: _0x5ddbd5,
 codes: _0x32dbec.diagnosticCodes ?? [],
 },
 ...(_0x45d951 === undefined ? {} : { productContext: _0x45d951 }),
 });
}
function B(_0x22f1e6) {
 if (Array.isArray(_0x22f1e6))
 return _0x22f1e6.map((_0x2603f9) => B(_0x2603f9));
 if (typeof _0x22f1e6 == "object" && _0x22f1e6) {
 let _0x3ab8e7 = Object.getPrototypeOf(_0x22f1e6);
 if (_0x3ab8e7 === Object.prototype || _0x3ab8e7 === null) {
 let _0x5d050d = Object.fromEntries(
 Object.entries(_0x22f1e6).map(([_0x5f3a4d, _0x202d58]) => [
 _0x5f3a4d,
 B(_0x202d58),
 ]),
 );
 return Object.setPrototypeOf(_0x5d050d, _0x3ab8e7);
 }
 }
 return e.Tools["deepClone"](_0x22f1e6);
}
function V(_0x57a32f, _0x37804, _0xcef562, _0x4a1c59) {
 return _0x57a32f === undefined || !Number.isFinite(_0x57a32f)
 ? _0x37804
 : Math.min(_0x4a1c59, Math.max(_0xcef562, Math.trunc(_0x57a32f)));
}
function Te(_0x495aee, _0x5c649e) {
 if (
 (_0x495aee == null ? undefined : _0x495aee.type) !==
 e.UniverInstanceType["UNIVER_DOC"]
 )
 return _0x495aee;
 let _0x177e53 = V(_0x5c649e.contextOffset, 0, 0, 2 ** 53 - 1),
 _0xd20975 = V(_0x5c649e.contextLimit, L, 1, L),
 _0x86b3de = _0x495aee.paragraphAlignment["slice"](
 _0x177e53,
 _0x177e53 + _0xd20975,
 );
 return {
 ..._0x495aee,
 paragraphAlignment: _0x86b3de,
 paragraphAlignmentPage: {
 offset: _0x177e53,
 limit: _0xd20975,
 matched: _0x495aee.paragraphAlignment["length"],
 hasMore:
 _0x177e53 + _0x86b3de.length < _0x495aee.paragraphAlignment["length"],
 },
 };
}
function Ee(_0x100149, _0x27c51f) {
 var _0x4672e9;
 let _0x45243e =
 (_0x4672e9 = _0x27c51f.search) == null
 ? undefined
 : _0x4672e9.trim().toLocaleLowerCase();
 return _0x100149.filter((_0x356a68) => {
 var _0x3f1952, _0x4a3617, _0x241505, _0x4a56f3, _0x4d6885;
 return ((_0x3f1952 = _0x27c51f.kinds) != null &&
 _0x3f1952.length &&
 !_0x27c51f.kinds["includes"](_0x356a68.kind)) ||
 ((_0x4a3617 = _0x27c51f.entityTypes) != null &&
 _0x4a3617.length &&
 !_0x27c51f.entityTypes["includes"](_0x356a68.entityType)) ||
 (_0x27c51f.parentStableId !== undefined &&
 _0x356a68.parentStableId !== _0x27c51f.parentStableId &&
 ((_0x241505 = _0x356a68.locations["left"]) == null
 ? undefined
 : _0x241505.parentStableId) !== _0x27c51f.parentStableId &&
 ((_0x4a56f3 = _0x356a68.locations["right"]) == null
 ? undefined
 : _0x4a56f3.parentStableId) !== _0x27c51f.parentStableId) ||
 (_0x27c51f.scope !== undefined &&
 (((_0x4d6885 = _0x356a68.scope) == null
 ? undefined
 : _0x4d6885.entityType) !== _0x27c51f.scope["entityType"] ||
 _0x356a68.scope["stableId"] !== _0x27c51f.scope["stableId"]))
 ? false
 : !_0x45243e ||
 [
 _0x356a68.displayName,
 _0x356a68.stableId,
 _0x356a68.parentStableId,
 ..._0x356a68.path,
 ..._0x356a68.changes["flatMap"]((_0x1b2868) => [
 ..._0x1b2868.path,
 T(_0x1b2868.before),
 T(_0x1b2868.after),
 ]),
 ].some((_0x3506c2) =>
 _0x3506c2 == null
 ? undefined
 : _0x3506c2.toLocaleLowerCase().includes(_0x45243e),
 );
 });
}
function De(_0x213ad6, _0x4bdea2 = "changes") {
 if (_0x4bdea2 === "full") return _0x213ad6;
 if (_0x4bdea2 === "summary") {
 let { values: _0x39e885, ..._0x23163b } = _0x213ad6;
 return { ..._0x23163b, changes: [] };
 }
 let { values: _0x442fb0, ..._0x100b09 } = _0x213ad6;
 return _0x100b09;
}
function Oe(_0x19699c) {
 let _0x1b8d90 = {},
 _0x4f55f5 = 0,
 _0x42c58d = 0,
 _0x28b728 = 0,
 _0x371072 = 0;
 for (let _0x146f42 of _0x19699c)
 (_0x146f42.kind === "insert"
 ? (_0x4f55f5 += 1)
 : _0x146f42.kind === "delete"
 ? (_0x42c58d += 1)
 : (_0x28b728 += 1),
 _0x146f42.moved && (_0x371072 += 1),
 (_0x1b8d90[_0x146f42.entityType] =
 (_0x1b8d90[_0x146f42.entityType] ?? 0) + 1));
 return {
 total: _0x19699c.length,
 insert: _0x4f55f5,
 delete: _0x42c58d,
 update: _0x28b728,
 moved: _0x371072,
 byEntityType: _0x1b8d90,
 };
}
function H(_0x1c453e, _0x4eca99) {
 return function (_0x27dd00, _0x1655b4) {
 _0x4eca99(_0x27dd00, _0x1655b4, _0x1c453e);
 };
}
function U(_0x2a41e7, _0x24756f, _0x1a9bc3, _0x4670d7) {
 var _0x47e1e3 = arguments.length,
 _0x579864 =
 _0x47e1e3 < 3
 ? _0x24756f
 : _0x4670d7 === null
 ? (_0x4670d7 = Object.getOwnPropertyDescriptor(_0x24756f, _0x1a9bc3))
 : _0x4670d7,
 _0x137de4;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 _0x579864 = Reflect.decorate(_0x2a41e7, _0x24756f, _0x1a9bc3, _0x4670d7);
 else {
 for (var _0x19548b = _0x2a41e7.length - 1; _0x19548b >= 0; _0x19548b--)
 (_0x137de4 = _0x2a41e7[_0x19548b]) &&
 (_0x579864 =
 (_0x47e1e3 < 3
 ? _0x137de4(_0x579864)
 : _0x47e1e3 > 3
 ? _0x137de4(_0x24756f, _0x1a9bc3, _0x579864)
 : _0x137de4(_0x24756f, _0x1a9bc3)) || _0x579864);
 }
 return (
 _0x47e1e3 > 3 &&
 _0x579864 &&
 Object.defineProperty(_0x24756f, _0x1a9bc3, _0x579864),
 _0x579864
 );
}
let W = class {
 constructor(_0x2be580) {
 this._adapterRegistry = _0x2be580;
 }
 compare(_0x105537) {
 let { query: _0x30ef51, ..._0x4ec6f5 } = _0x105537;
 return this.query(this.prepare(_0x4ec6f5), _0x30ef51);
 }
 prepare(_0x4334f9) {
 let _0x331edd = this._adapterRegistry["get"](_0x4334f9.type);
 if (!_0x331edd)
 throw Error(
 "[UnitComparisonService]:\x20No\x20comparison\x20adapter\x20for\x20unit\x20type\x20" +
 _0x4334f9.type +
 ".",
 );
 return R(_0x4334f9, _0x331edd);
 }
 query(_0xdb5953, _0x2d2cfc = {}) {
 return z(_0xdb5953, _0x2d2cfc);
 }
};
W = U([H(0, (0, e.Inject)(I))], W);
const G = "edit-history.config",
 K = { historyServerUrl: "/universer-api/history", pageSize: 20 };
var ke = "@univerjs-pro/edit-history",
 Ae = "1.0.0-insiders.20260907-70fc579",
 q = class extends e.Disposable {
 constructor(..._0x306d6a) {
 (super(..._0x306d6a), F(this, "_adapters", new Map()));
 }
 register(_0x31966d) {
 if (this._adapters["has"](_0x31966d.type))
 throw Error(
 "[HistoryUnitAdapterRegistryService]: Adapter for unit type " +
 _0x31966d.type +
 "\x20is\x20already\x20registered.",
 );
 return (
 this._adapters["set"](_0x31966d.type, _0x31966d),
 (0, e.toDisposable)(() => {
 this._adapters["get"](_0x31966d.type) === _0x31966d &&
 this._adapters["delete"](_0x31966d.type);
 })
 );
 }
 get(_0x444171) {
 return this._adapters["get"](_0x444171);
 }
 dispose() {
 (this._adapters["clear"](), super.dispose());
 }
 };
const J = {
 id: "edit-history.command.restore-history",
 type: e.CommandType["COMMAND"],
 handler: async (_0x477dcc, _0x429513) => {
 if (!_0x429513) return false;
 let _0x392788 = _0x477dcc.get(q).get(_0x429513.type);
 if (!_0x392788)
 throw Error(
 "[RestoreHistoryCommand]: No history adapter is registered for unit type " +
 _0x429513.type +
 ".",
 );
 if (!(await _0x392788.canRevert(_0x429513.unitId)))
 throw Error(
 "[RestoreHistoryCommand]: The current user cannot restore history for this unit.",
 );
 let _0x2ae3e4 = _0x477dcc
 .get(e.IUniverInstanceService)
 .getUnit(_0x429513.unitId, _0x429513.type);
 if (!_0x2ae3e4)
 throw Error(
 "[RestoreHistoryCommand]: Unit " +
 _0x429513.unitId +
 " is not available.",
 );
 let _0x250d5d = _0x2ae3e4.getRev();
 return (await _0x477dcc
 .get(e.ICommandService)
 .executeCommand(t.RevertRevisionMutation["id"], {
 unitId: _0x429513.unitId,
 revision: _0x429513.revision,
 }))
 ? (_0x477dcc
 .get(e.IUndoRedoService)
 .pushUndoRedo({
 unitID: _0x429513.unitId,
 undoMutations: [
 {
 id: t.RevertRevisionMutation["id"],
 params: { unitId: _0x429513.unitId, revision: _0x250d5d },
 },
 ],
 redoMutations: [
 {
 id: t.RevertRevisionMutation["id"],
 params: {
 unitId: _0x429513.unitId,
 revision: _0x429513.revision,
 },
 },
 ],
 }),
 true)
 : false;
 },
};
let Y = class {
 constructor(_0x50fea0, _0x4787c7) {
 ((this._configService = _0x50fea0), (this._httpService = _0x4787c7));
 }
 async fetchVersions(_0xd4f941, _0x3d4f2b = {}) {
 var _0x72ded7;
 let _0x4cb7b2 = new URL();
 SearchParams();
 (_0x4cb7b2.set("length", String(this._getPageSize())),
 _0x3d4f2b.lastLabel && _0x4cb7b2.set("lastLabel", _0x3d4f2b.lastLabel),
 (_0x72ded7 = _0x3d4f2b.userIds) == null ||
 _0x72ded7.forEach((_0xc56017) =>
 _0x4cb7b2.append("userIds", _0xc56017),
 ),
 _0x3d4f2b.orig in && _0x4cb7b2.set("origin", String(_0x3d4f2b.origin)));
 let _0x430c18 = (
 await this._httpService["get"](
 this._getApiPrefix() +
 "/" +
 _0xd4f941 +
 "/list?" +
 _0x4cb7b2.toString(),
 )
 ).body;
 return (
 this._assertOk(_0x430c18.error, "list versions"),
 {
 hasMore: _0x430c18.hasMore,
 lastLabel: _0x430c18.lastLabel,
 versions: Pe(_0x430c18),
 members: Ne(_0x430c18.entities["users"]),
 }
 );
 }
 async fetchCreators(_0x2b56fc) {
 let _0x531c44 = await this._httpService["get"](
 this._getApiPrefix() + "/" + _0x2b56fc + "/creators",
 );
 return (
 this._assertOk(_0x531c44.body["error"], "list creators"),
 _0x531c44.body["creators"] ?? []
 );
 }
 async fetchVersionDetails(_0x37f48b, _0x1dcdc4) {
 if (_0x1dcdc4.startRevision === _0x1dcdc4.endRevision) return [];
 let _0x59b8c3 = await this.fetchChangesets(_0x37f48b, {
 baseRevision: Math.max(0, _0x1dcdc4.startRevision - 1),
 targetRevision: _0x1dcdc4.endRevision,
 });
 return [..._0x59b8c3.changesets].reverse().map((_0x41b13a) => {
 let _0x14e270 = (0, t.parseProtocolChangeset)(_0x41b13a),
 _0x314f93 =
 _0x59b8c3.members[_0x14e270.userID] ??
 _0x59b8c3.members[_0x14e270.memberID],
 _0x4d0b73 =
 _0x314f93 != null && _0x314f93.anonymous
 ? ""
 : ((_0x314f93 == null ? undefined : _0x314f93.name) ?? "");
 return {
 unitId: _0x37f48b,
 id: _0x1dcdc4.id + ":revision:" + _0x14e270.revision,
 startRevision: _0x14e270.revision,
 endRevision: _0x14e270.revision,
 createTime: _0x41b13a.createTime
 ? Number(_0x41b13a.createTime) * 1000
 : undefined,
 creatorName: _0x4d0b73,
 creatorNames: _0x4d0b73 ? [_0x4d0b73] : [],
 isAnonymous: !!(_0x314f93 != null && _0x314f93.anonymous),
 commands: je(_0x14e270.mutations),
 mutations: _0x14e270.mutations,
 additionalFields: _0x14e270.additionalFields,
 isDetail: true,
 parentId: _0x1dcdc4.id,
 };
 });
 }
 async fetchChangesets(_0x1347db, _0x2e9bba) {
 if (_0x2e9bba.targetRevision < _0x2e9bba.baseRevision)
 throw Error(
 "[HistoryGatewayService]:\x20targetRevision\x20must\x20be\x20greater\x20than\x20or\x20equal\x20to\x20baseRevision.",
 );
 if (_0x2e9bba.targetRevision === _0x2e9bba.baseRevision)
 return { comparison: _0x2e9bba, changesets: [], members: {} };
 let _0x36439a = _0x2e9bba.baseRevision + 1,
 _0x4942a7 = await this._httpService["get"](
 this._getApiPrefix() +
 "/" +
 _0x1347db +
 "/cs?startRevision=" +
 _0x36439a +
 "&endRevision=" +
 _0x2e9bba.targetRevision,
 );
 return (
 this._assertOk(_0x4942a7.body["error"], "load changesets"),
 {
 comparison: _0x2e9bba,
 changesets: _0x4942a7.body["changesets"] ?? [],
 members: Ne(_0x4942a7.body["users"] ?? {}),
 }
 );
 }
 _getApiPrefix() {
 var _0x48db60;
 return (
 ((_0x48db60 = this._configService["getConfig"]("edit-history.config")) ==
 null
 ? undefined
 : _0x48db60.historyServerUrl) ?? "/universer-api/history"
 );
 }
 _getPageSize() {
 var _0xe83270;
 return (
 ((_0xe83270 = this._configService["getConfig"]("edit-history.config")) ==
 null
 ? undefined
 : _0xe83270.pageSize) ?? 20
 );
 }
 _assertOk(_0x29da92, _0x20edef) {
 if (!_0x29da92 || _0x29da92.code !== i.ErrorCode["OK"])
 throw Error(
 "[HistoryGatewayService]:\x20Failed\x20to\x20" +
 _0x20edef +
 (_0x29da92 != null && _0x29da92.message
 ? ":\x20" + _0x29da92.message
 : "."),
 );
 }
};
Y = U([H(0, e.IConfigService), H(1, (0, e.Inject)(r.HTTPService))], Y);
function je(_0x5820fa) {
 if (!_0x5820fa) return [];
 let _0x4d1927 = _0x5820fa.flatMap((_0x2929fb) => {
 let _0x109e5b = Me(_0x2929fb.params);
 return _0x109e5b ? [_0x109e5b, _0x2929fb.id] : [_0x2929fb.id];
 });
 return [...new Set(_0x4d1927)];
}
function Me(_0x5d4c4a) {
 if (!(
 typeof _0x5d4c4a != "object" ||
 !_0x5d4c4a ||
 !("trigger" in _0x5d4c4a)
 ))
 return typeof _0x5d4c4a.trigger == "string" ? _0x5d4c4a.trigger : undefined;
}
function Ne(_0x106ee3) {
 return Object.fromEntries(
 Object.entries(_0x106ee3).map(([_0x3a64a7, _0x1937db]) => [
 _0x3a64a7,
 {
 userId: _0x1937db.userID || _0x3a64a7,
 name: _0x1937db.name,
 avatar: _0x1937db.avatar,
 anonymous: !!_0x1937db.anonymous,
 },
 ]),
 );
}
function Pe(_0x231e2e) {
 return _0x231e2e.historyIds["flatMap"]((_0x34cb52) => {
 let _0x55d577 = _0x231e2e.entities["datas"][_0x34cb52];
 if (!_0x55d577) return [];
 let _0x410338 = _0x231e2e.entities["users"][_0x55d577.userId],
 _0x23093d = !!(_0x410338 != null && _0x410338.anonymous);
 return [
 {
 unitId: _0x55d577.unitId,
 id: _0x34cb52,
 startRevision: Number(_0x55d577.startRevision),
 endRevision: Number(_0x55d577.endRevision),
 createTime: _0x55d577.createTime
 ? Number(_0x55d577.createTime)
 : undefined,
 creatorName: _0x23093d
 ? ""
 : ((_0x410338 == null ? undefined : _0x410338.name) ?? ""),
 creatorNames: _0x55d577.userIds["map"]((_0x10f026) => {
 var _0x32dcb6;
 return (
 ((_0x32dcb6 = _0x231e2e.entities["users"][_0x10f026]) == null
 ? undefined
 : _0x32dcb6.name) ?? ""
 );
 }).filter(Boolean),
 isAnonymous: _0x23093d,
 commands: _0x55d577.command,
 recoverTime: _0x55d577.recoverTime
 ? Number(_0x55d577.recoverTime)
 : undefined,
 additionalFields: _0x55d577.additionalFields,
 startRevisionCreateTime: _0x55d577.startRevCreateTime
 ? Number(_0x55d577.startRevCreateTime)
 : undefined,
 endRevisionCreateTime: _0x55d577.endRevCreateTime
 ? Number(_0x55d577.endRevCreateTime)
 : undefined,
 },
 ];
 });
}
let X = class {
 constructor(_0x356e35) {
 this._gateway = _0x356e35;
 }
 async load(_0x189b59, _0x5802a0) {
 return (
 await this._gateway["fetchChangesets"](_0x189b59, _0x5802a0)
 ).changesets["flatMap"]((_0x1421aa) => {
 let _0x4f448d = (0, t.parseProtocolChangeset)(_0x1421aa),
 _0x53f8f1 = _0x4f448d.memberID || _0x4f448d.userID || "unknownUser";
 return _0x4f448d.mutations["map"]((_0xd0313d) => ({
 mutation: _0xd0313d,
 memberId: _0x53f8f1,
 revision: _0x4f448d.revision,
 }));
 });
 }
};
X = U([H(0, (0, e.Inject)(Y))], X);
let Z = class {
 constructor(_0x578142) {
 this._commandService = _0x578142;
 }
 async restore(_0x2c81dc, _0x469ee4, _0x5a027a) {
 return !!(await this._commandService["executeCommand"](J.id, {
 unitId: _0x2c81dc,
 type: _0x469ee4,
 revision: _0x5a027a,
 }));
 }
};
Z = U([H(0, e.ICommandService)], Z);
let Fe = (function (_0x39e62d) {
 return (
 (_0x39e62d.Idle = "idle"),
 (_0x39e62d.Opening = "opening"),
 (_0x39e62d.Ready = "ready"),
 (_0x39e62d.LoadingMore = "loading-more"),
 (_0x39e62d.Error = "error"),
 (_0x39e62d.Closing = "closing"),
 _0x39e62d
 );
 })({}),
 Q = class extends e.Disposable {
 constructor(_0x4deb54) {
 (super(),
 (this._gateway = _0x4deb54),
 F(this, "_status$", new a["BehaviorSubject"]("idle")),
 F(this, "status$", this._status$["asObservable"]()),
 F(this, "_versions$", new a["BehaviorSubject"]([])),
 F(this, "versions$", this._versions$["asObservable"]()),
 F(this, "_currentVersion$", new a["BehaviorSubject"](null)),
 F(this, "currentVersion$", this._currentVersion$["asObservable"]()),
 F(this, "_creators$", new a["BehaviorSubject"]([])),
 F(this, "creators$", this._creators$["asObservable"]()),
 F(this, "_members$", new a["BehaviorSubject"]({})),
 F(this, "members$", this._members$["asObservable"]()),
 F(this, "_error$", new a["BehaviorSubject"](null)),
 F(this, "error$", this._error$["asObservable"]()),
 F(this, "_descriptor", null),
 F(this, "_query", {}),
 F(this, "_hasMore", false),
 F(this, "_lastLabel", ""),
 F(this, "_sessionGeneration", 0),
 F(this, "_listRequestGeneration", 0),
 F(this, "_versionDetails", new Map()),
 F(this, "_versionDetailRequests", new Map()));
 }
 get descriptor() {
 return this._descriptor;
 }
 get currentVersion() {
 return this._currentVersion$["value"];
 }
 get hasMore() {
 return this._hasMore;
 }
 async open(_0x38711f, _0x4dda24 = {}) {
 let _0x59bc8e = ++this._sessionGeneration,
 _0x17004d = ++this._listRequestGeneration;
 (this._versionDetails["clear"](),
 this._versionDetailRequests["clear"](),
 (this._descriptor = _0x38711f),
 (this._query = _0x4dda24),
 this._status$["next"]("opening"),
 this._error$["next"](null));
 try {
 let _0x1d7225 = await this._gateway["fetchVersions"](
 _0x38711f.unitId,
 _0x4dda24,
 );
 if (
 _0x59bc8e !== this._sessionGeneration ||
 _0x17004d !== this._listRequestGeneration
 )
 return;
 let _0x135dd4 = [Ie(_0x38711f.unitId)];
 (_0x1d7225.versions["length"] > 0 &&
 (_0x135dd4 = _0x1d7225.versions["map"]((_0x1de7a8, _0x400ebb) =>
 _0x400ebb === 0 ? { ..._0x1de7a8, isCurrent: true } : _0x1de7a8,
 )),
 this._versions$["next"](_0x135dd4),
 this._members$["next"](_0x1d7225.members),
 this._currentVersion$["next"](_0x135dd4[0]),
 (this._hasMore = _0x1d7225.hasMore),
 (this._lastLabel = _0x1d7225.lastLabel),
 this._status$["next"]("ready"),
 this._loadCreators(_0x38711f.unitId, _0x59bc8e));
 } catch (_0x52b4ea) {
 if (
 _0x59bc8e !== this._sessionGeneration ||
 _0x17004d !== this._listRequestGeneration
 )
 return;
 let _0x4483f8 =
 _0x52b4ea instanceof Error ? _0x52b4ea : Error(String(_0x52b4ea));
 throw (
 this._error$["next"](_0x4483f8),
 this._status$["next"]("error"),
 _0x4483f8
 );
 }
 }
 _loadCreators(_0x1350cc, _0x538a31) {
 this._gateway["fetchCreators"](_0x1350cc)
 .then((_0x43ee0e) => {
 _0x538a31 === this._sessionGeneration &&
 this._creators$["next"](_0x43ee0e);
 })
 .catch(() => {
 _0x538a31 === this._sessionGeneration && this._creators$["next"]([]);
 });
 }
 async loadMore() {
 if (
 !this._descriptor ||
 !this._hasMore ||
 !this._lastLabel ||
 this._status$["value"] === "loading-more"
 )
 return;
 let _0x4de8c5 = this._sessionGeneration,
 _0x46afec = ++this._listRequestGeneration;
 (this._status$["next"]("loading-more"), this._error$["next"](null));
 try {
 let _0x297847 = await this._gateway["fetchVersions"](
 this._descriptor["unitId"],
 { ...this._query, lastLabel: this._lastLabel },
 );
 if (
 _0x4de8c5 !== this._sessionGeneration ||
 _0x46afec !== this._listRequestGeneration
 )
 return;
 (this._versions$["next"]([
 ...this._versions$["value"],
 ..._0x297847.versions,
 ]),
 this._members$["next"]({
 ...this._members$["value"],
 ..._0x297847.members,
 }),
 (this._hasMore = _0x297847.hasMore),
 (this._lastLabel = _0x297847.lastLabel),
 this._status$["next"]("ready"));
 } catch (_0x5ce63e) {
 if (
 _0x4de8c5 !== this._sessionGeneration ||
 _0x46afec !== this._listRequestGeneration
 )
 return;
 let _0x251e6f =
 _0x5ce63e instanceof Error ? _0x5ce63e : Error(String(_0x5ce63e));
 throw (
 this._error$["next"](_0x251e6f),
 this._status$["next"]("error"),
 _0x251e6f
 );
 }
 }
 async loadVersionDetails(_0x2f284f) {
 let _0x3eb3a2 = this._versionDetails["get"](_0x2f284f);
 if (_0x3eb3a2) return _0x3eb3a2;
 let _0x2e7505 = this._versionDetailRequests["get"](_0x2f284f);
 if (_0x2e7505) return _0x2e7505;
 let _0x28fafc = this._versions$["value"].find(
 (_0x28712c) => _0x28712c.id === _0x2f284f,
 );
 if (!_0x28fafc)
 throw Error(
 "[HistorySessionService]: Unknown history version " + _0x2f284f + ".",
 );
 let _0x3922d8 = this._sessionGeneration,
 _0x17f929 = this._gateway["fetchVersionDetails"](
 _0x28fafc.unitId,
 _0x28fafc,
 )
 .then((_0x23f6d8) =>
 _0x3922d8 === this._sessionGeneration
 ? (this._versionDetails["set"](_0x2f284f, _0x23f6d8), _0x23f6d8)
 : [],
 )
 .finally(() => {
 this._versionDetailRequests["get"](_0x2f284f) === _0x17f929 &&
 this._versionDetailRequests["delete"](_0x2f284f);
 });
 return (
 this._versionDetailRequests["set"](_0x2f284f, _0x17f929),
 _0x17f929
 );
 }
 selectVersion(_0x1b1cf1) {
 let _0x364ef8 =
 typeof _0x1b1cf1 == "string"
 ? this._versions$["value"].find(
 (_0x2337b1) => _0x2337b1.id === _0x1b1cf1,
 )
 : _0x1b1cf1;
 if (!_0x364ef8)
 throw Error(
 "[HistorySessionService]: Unknown history version " +
 String(_0x1b1cf1) +
 ".",
 );
 return (this._currentVersion$["next"](_0x364ef8), _0x364ef8);
 }
 close() {
 (++this._sessionGeneration,
 ++this._listRequestGeneration,
 this._status$["next"]("closing"),
 (this._descriptor = null),
 (this._query = {}),
 (this._hasMore = false),
 (this._lastLabel = ""),
 this._versionDetails["clear"](),
 this._versionDetailRequests["clear"](),
 this._versions$["next"]([]),
 this._currentVersion$["next"](null),
 this._creators$["next"]([]),
 this._members$["next"]({}),
 this._error$["next"](null),
 this._status$["next"]("idle"));
 }
 dispose() {
 (this.close(),
 this._status$["complete"](),
 this._versions$["complete"](),
 this._currentVersion$["complete"](),
 this._creators$["complete"](),
 this._members$["complete"](),
 this._error$["complete"](),
 super.dispose());
 }
 };
Q = U([H(0, (0, e.Inject)(Y))], Q);
function Ie(_0x38ba33) {
 return {
 unitId: _0x38ba33,
 id: _0x38ba33 + ":current",
 startRevision: 1,
 endRevision: 0,
 creatorName: "",
 creatorNames: [],
 isAnonymous: false,
 commands: [],
 isCurrent: true,
 };
}
let $ = class extends e.Plug in {
 constructor(_0x3f812e = K, _0x129518, _0x2169d9, _0x4c5dbe) {
 (super(),
 (this._config = _0x3f812e),
 (this._injector = _0x129518),
 (this._configService = _0x2169d9),
 (this._commandService = _0x4c5dbe));
 let { ..._0x998074 } = (0, e.merge)({}, K, this._config);
 this._configService["setConfig"](G, _0x998074);
 }
 onStarting() {
 (this.disposeWithMe(this._commandService["registerCommand"](J)),
 (0, e.registerDependencies)(this._injector, [
 [Y],
 [X],
 [Z],
 [q],
 [Q],
 [I],
 [W],
 ]));
 }
};
(F($, "pluginName", "UNIVER_EDIT_HISTORY_PLUGIN"),
 F($, "packageName", ke),
 F($, "version", Ae),
 F($, "type", e.UniverInstanceType["UNIVER_UNKNOWN"]),
 ($ = U(
 [
 (0, e.DependentOn)(n.UniverLicensePlugin, t.UniverCollaborationPlugin),
 H(1, (0, e.Inject)(e.Injector)),
 H(2, e.IConfigService),
 H(3, e.ICommandService),
 ],
 $,
 )));
let Le = (function (_0x5ee4f5) {
 return (
 (_0x5ee4f5[(_0x5ee4f5.Unspecified = 0)] = "Unspecified"),
 (_0x5ee4f5[(_0x5ee4f5.User = 1)] = "User"),
 (_0x5ee4f5[(_0x5ee4f5.Character = 2)] = "Character"),
 _0x5ee4f5
 );
})({});
function Re(_0x36e5db) {
 return {
 baseRevision: Math.max(0, _0x36e5db.startRevision - 1),
 targetRevision: _0x36e5db.endRevision,
 };
}
function ze(_0x537aec, _0x30167a) {
 return (0, t.parseProtocolChangeset)(_0x537aec.data).mutations["some"](
 (_0x373784) =>
 _0x373784.id === t.RevertRevisionMutation["id"] &&
 Reflect.get(_0x373784.params, "revision") === _0x30167a,
 );
}
((exports.EDIT_HISTORY_PLUGIN_CONFIG_KEY = G),
 Object.defineProperty(exports, "HistoryGatewayService", {
 enumerable: true,
 get: function () {
 return Y;
 },
 }),
 Object.defineProperty(exports, "HistoryMutationService", {
 enumerable: true,
 get: function () {
 return X;
 },
 }),
 (exports.HistoryOrig in = Le),
 Object.defineProperty(exports, "HistoryRestoreService", {
 enumerable: true,
 get: function () {
 return Z;
 },
 }),
 Object.defineProperty(exports, "HistorySessionService", {
 enumerable: true,
 get: function () {
 return Q;
 },
 }),
 (exports.HistorySessionStatus = Fe),
 (exports.HistoryUnitAdapterRegistryService = q),
 (exports.UnitComparisonAdapterRegistryService = I),
 (exports.UnitComparisonChangeKind = s),
 (exports.UnitComparisonDetailLevel = c),
 (exports.UnitComparisonDiagnosticCode = p),
 (exports.UnitComparisonEntityType = d),
 (exports.UnitComparisonFidelity = o),
 (exports.UnitComparisonReadiness = f),
 (exports.UnitComparisonSegmentKind = l),
 Object.defineProperty(exports, "UnitComparisonService", {
 enumerable: true,
 get: function () {
 return W;
 },
 }),
 (exports.UnitComparisonValueType = u),
 Object.defineProperty(exports, "UniverEditHistoryPlugin", {
 enumerable: true,
 get: function () {
 return $;
 },
 }),
 (exports.alignComparisonIdentities = ee),
 (exports.arrayComparisonEntries = he),
 (exports.asRecord = w),
 (exports.buildScopedUnitComparison = S),
 (exports.buildSemanticComparisonItems = ie),
 (exports.buildSemanticLeafChanges = y),
 (exports.buildUnitComparisonScopes = le),
 (exports.createUnitComparisonEngine = we),
 (exports.getVersionComparison = Re),
 (exports.isHistoryRestoreAcknowledgement = ze),
 (exports.recordComparisonEntries = x),
 (exports.resourceComparisonEntries = ge),
 (exports.stableJson = T),
 (exports.withoutComparisonKeys = _e));
