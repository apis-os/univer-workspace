Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
 t = require("rxjs"),
 n = require("@univerjs-pro/print"),
 r = require("@univerjs-pro/slides-ui"),
 i = require("@univerjs-pro/slides"),
 a = require("@univerjs/engine-render"),
 o = require("@univerjs/ui"),
 s = require("@univerjs-pro/license"),
 c = require("@univerjs/icons"),
 l = require("@univerjs/design"),
 u = require("react"),
 d = require("react/jsx-runtime"),
 f = (function (_0x542706) {
 return (
 (_0x542706.FullPage = "FullPage"),
 (_0x542706.Handout = "Handout"),
 (_0x542706.NotesPage = "NotesPage"),
 _0x542706
 );
 })({}),
 p = (function (_0x5d618b) {
 return (
 (_0x5d618b.Horizontal = "Horizontal"),
 (_0x5d618b.Vertical = "Vertical"),
 _0x5d618b
 );
 })({});
function m(_0x26cbd1, _0x168195) {
 return _0x26cbd1 === undefined ? _0x168195 : _0x26cbd1;
}
function h(_0x2539b1) {
 let _0x1365e9 =
 (_0x2539b1 == null ? undefined : _0x2539b1.layout) ?? "FullPage",
 _0x49a0a7 = _0x1365e9 === "FullPage";
 return {
 layout: _0x1365e9,
 slidesPerPage: m(
 _0x2539b1 == null ? undefined : _0x2539b1.slidesPerPage,
 2,
 ),
 handoutOrder: m(
 _0x2539b1 == null ? undefined : _0x2539b1.handoutOrder,
 "Horizontal",
 ),
 paperSize: _0x2539b1 == null ? undefined : _0x2539b1.paperSize,
 direction: m(
 _0x2539b1 == null ? undefined : _0x2539b1.direction,
 _0x49a0a7 ? n.PrintDirection["Landscape"] : n.PrintDirection["Portrait"],
 ),
 margin: m(
 _0x2539b1 == null ? undefined : _0x2539b1.margin,
 _0x2539b1 != null && _0x2539b1.paperSize
 ? n.PrintPaperMargin["Normal"]
 : n.PrintPaperMargin["None"],
 ),
 marginCustom: m(_0x2539b1 == null ? undefined : _0x2539b1.marginCustom, {
 top: 0,
 right: 0,
 bottom: 0,
 left: 0,
 }),
 frameSlides: m(
 _0x2539b1 == null ? undefined : _0x2539b1.frameSlides,
 !_0x49a0a7,
 ),
 showSlideNumber: m(
 _0x2539b1 == null ? undefined : _0x2539b1.showSlideNumber,
 !_0x49a0a7,
 ),
 };
}
function g(
 _0x583f0d,
 _0x19ff2a,
 _0x4e0453,
 _0x2c3a1b = (_0x49b96a) => _0x49b96a.length * 14 * 0.55,
) {
 let _0x50637d = (0, r.resolveSlideLogicalPageSize)(_0x19ff2a),
 _0x17b039 = h(_0x4e0453);
 !(_0x4e0453 != null && _0x4e0453.direction) &&
 _0x17b039.layout === "FullPage" &&
 (_0x17b039.direction =
 _0x50637d.width >= _0x50637d.height
 ? n.PrintDirection["Landscape"]
 : n.PrintDirection["Portrait"]);
 let _0x10cf1b = v(_0x50637d, _0x17b039),
 _0x5e2d0f =
 _0x17b039.marg in === n.PrintPaperMargin["Custom"]
 ? _0x17b039.marginCustom
 : n.PaperMarginMap[_0x17b039.margin],
 _0x43473b = y(_0x10cf1b, _0x5e2d0f),
 _0x32888d;
 switch (_0x17b039.layout) {
 case "Handout":
 _0x32888d = b(
 _0x583f0d,
 _0x43473b,
 _0x17b039.slidesPerPage,
 _0x17b039.handoutOrder,
 );
 break;
 case "NotesPage":
 _0x32888d = C(_0x583f0d, _0x43473b, _0x2c3a1b);
 break;
 default:
 _0x32888d = _0x583f0d.map((_0x53947e) => ({
 key: "full-page-" + _0x53947e.pageId,
 slots: [{ source: _0x53947e, rect: _0x43473b }],
 }));
 break;
 }
 return {
 pageSize: _0x10cf1b,
 margin: _0x5e2d0f,
 options: _0x17b039,
 pages: _0x32888d,
 };
}
function _(_0x208287, _0x5d79a3) {
 let _0xa579e8 = (0, r.resolveSlideLogicalPageSize)(_0x5d79a3);
 return _0x208287.map(({ page: _0x3cfa00, index: _0x33e876 }) => {
 let _0x2fb7bd = _0x3cfa00.getData(),
 _0x3d3c24 = (0, r.resolveSlideLogicalPageSize)(
 _0x2fb7bd.pageSize ?? _0xa579e8,
 );
 return {
 index: _0x33e876,
 page: _0x3cfa00,
 pageId: _0x3cfa00.getId(),
 width: _0x3d3c24.width,
 height: _0x3d3c24.height,
 speakerNotes: _0x2fb7bd.speakerNotes ?? "",
 };
 });
}
function v(_0x122430, _0x402c9c) {
 let _0x4b5685 = _0x402c9c.paperSize
 ? e.PAGE_SIZE[_0x402c9c.paperSize]
 : _0x122430,
 _0x37095d = Math.min(_0x4b5685.width, _0x4b5685.height),
 _0x546707 = Math.max(_0x4b5685.width, _0x4b5685.height);
 return _0x402c9c.direction === n.PrintDirection["Portrait"]
 ? { width: _0x37095d, height: _0x546707 }
 : { width: _0x546707, height: _0x37095d };
}
function y(_0x5821b8, _0x51064e) {
 return {
 x: _0x51064e.left,
 y: _0x51064e.top,
 width: Math.max(1, _0x5821b8.width - _0x51064e.left - _0x51064e.right),
 height: Math.max(1, _0x5821b8.height - _0x51064e.top - _0x51064e.bottom),
 };
}
function b(_0x462785, _0x39e2dc, _0x5374f1, _0x5ba75a) {
 let _0x566e79 = [];
 for (
 let _0x5c0f84 = 0;
 _0x5c0f84 < _0x462785.length;
 _0x5c0f84 += _0x5374f1
 ) {
 let _0x96a656 = _0x462785.slice(_0x5c0f84, _0x5c0f84 + _0x5374f1),
 _0x3aabc4 = S(x(_0x39e2dc, _0x5374f1), _0x5374f1, _0x5ba75a);
 _0x566e79.push({
 key: "handout-" + _0x5c0f84 / _0x5374f1,
 slots: _0x96a656.map((_0x3f971f, _0x41c0be) => {
 let _0x53a780 = _0x3aabc4[_0x41c0be];
 if (_0x5374f1 !== 3) return { source: _0x3f971f, rect: _0x53a780 };
 let _0x355cf8 = (_0x53a780.width - 24) * 0.56;
 return {
 source: _0x3f971f,
 rect: { ..._0x53a780, width: _0x355cf8 },
 noteLinesRect: {
 x: _0x53a780.x + _0x355cf8 + 24,
 y: _0x53a780.y,
 width: Math.max(1, _0x53a780.width - _0x355cf8 - 24),
 height: _0x53a780.height,
 },
 };
 }),
 });
 }
 return _0x566e79;
}
function x(_0x206fa0, _0x34f91e) {
 let [_0x4afc54, _0xa2d86d] =
 _0x34f91e === 1
 ? [1, 1]
 : _0x34f91e === 2 || _0x34f91e === 3
 ? [1, _0x34f91e]
 : _0x34f91e === 4
 ? [2, 2]
 : _0x34f91e === 6
 ? [2, 3]
 : [3, 3],
 _0x5d41c4 = (_0x206fa0.width - 24 * (_0x4afc54 - 1)) / _0x4afc54,
 _0xb7b6b8 = (_0x206fa0.height - 24 * (_0xa2d86d - 1)) / _0xa2d86d,
 _0x473121 = [];
 for (let _0x303535 = 0; _0x303535 < _0xa2d86d; _0x303535++)
 for (let _0x179cda = 0; _0x179cda < _0x4afc54; _0x179cda++)
 _0x473121.push({
 x: _0x206fa0.x + _0x179cda * (_0x5d41c4 + 24),
 y: _0x206fa0.y + _0x303535 * (_0xb7b6b8 + 24),
 width: _0x5d41c4,
 height: _0xb7b6b8,
 });
 return _0x473121;
}
function S(_0x2eb39d, _0x5419d1, _0x3e2422) {
 if (_0x3e2422 === "Horizontal" || _0x5419d1 < 4) return _0x2eb39d;
 let _0x4c0d84 = _0x5419d1 === 9 ? 3 : 2,
 _0x581661 = _0x5419d1 / _0x4c0d84;
 return _0x2eb39d.map(
 (_0x536383, _0x3f8ca1) =>
 _0x2eb39d[
 (_0x3f8ca1 % _0x581661) * _0x4c0d84 + Math.floor(_0x3f8ca1 / _0x581661)
 ],
 );
}
function C(_0x1bd68a, _0x296e8c, _0x25d812) {
 let _0x4cd200 = [];
 for (let _0x28c279 of _0x1bd68a) {
 let _0x44f540 = _0x296e8c.height * 0.42,
 _0xfa8f6c = {
 x: _0x296e8c.x,
 y: _0x296e8c.y + _0x44f540 + 24,
 width: _0x296e8c.width,
 height: Math.max(1, _0x296e8c.height - _0x44f540 - 24),
 },
 _0x3ad3c6 = ee(_0x28c279.speakerNotes, _0xfa8f6c.width, _0x25d812),
 _0x89f36e = Math.max(1, Math.floor(_0xfa8f6c.height / 21)),
 _0x20d55b = Math.max(1, Math.floor(_0x296e8c.height / 21)),
 _0x19d859 = _0x3ad3c6.splice(0, _0x89f36e);
 _0x4cd200.push({
 key: "notes-" + _0x28c279.pageId + "-0",
 slots: [
 {
 source: _0x28c279,
 rect: {
 x: _0x296e8c.x,
 y: _0x296e8c.y,
 width: _0x296e8c.width,
 height: _0x44f540,
 },
 },
 ],
 notes: {
 lines: _0x19d859,
 rect: _0xfa8f6c,
 continuation: false,
 source: _0x28c279,
 },
 });
 let _0x2069a6 = 1;
 for (; _0x3ad3c6.length;)
 (_0x4cd200.push({
 key: "notes-" + _0x28c279.pageId + "-" + _0x2069a6,
 slots: [],
 notes: {
 lines: _0x3ad3c6.splice(0, _0x20d55b),
 rect: _0x296e8c,
 continuation: true,
 source: _0x28c279,
 },
 }),
 _0x2069a6++);
 }
 return _0x4cd200;
}
function ee(_0x333981, _0x3555b3, _0x46162f) {
 if (!_0x333981) return [];
 let _0x30f1b9 = _0x333981.replace(/\r\n/g, "\x0a").split("\x0a"),
 _0x10d08d = [];
 return (
 _0x30f1b9.forEach((_0xaf355) => {
 let _0x535213 = Array.from(_0xaf355);
 if (_0x535213.length === 0) _0x10d08d.push("");
 else {
 let _0x564638 = 0;
 for (; _0x564638 < _0x535213.length;) {
 let _0x531adf = _0x564638 + 1,
 _0x13a113 = _0x535213.length,
 _0x413e59 = _0x564638;
 for (; _0x531adf <= _0x13a113;) {
 let _0x3e3b9d = Math.floor((_0x531adf + _0x13a113) / 2);
 _0x46162f(_0x535213.slice(_0x564638, _0x3e3b9d).join("")) <=
 _0x3555b3
 ? ((_0x413e59 = _0x3e3b9d), (_0x531adf = _0x3e3b9d + 1))
 : (_0x13a113 = _0x3e3b9d - 1);
 }
 let _0x2dd4be = Math.max(_0x564638 + 1, _0x413e59);
 (_0x10d08d.push(_0x535213.slice(_0x564638, _0x2dd4be).join("")),
 (_0x564638 = _0x2dd4be));
 }
 }
 }),
 _0x10d08d
 );
}
function w() {
 return {
 layout: "FullPage",
 slidesPerPage: 2,
 handoutOrder: "Horizontal",
 paperSize: e.PaperType["A4"],
 direction: n.PrintDirection["Landscape"],
 margin: n.PrintPaperMargin["Normal"],
 frameSlides: false,
 showSlideNumber: false,
 };
}
function T(_0x335d89) {
 "@babel/helpers - typeof";
 return (
 (T =
 typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
 ? function (_0xa8c973) {
 return typeof _0xa8c973;
 }
 : function (_0x5e85c8) {
 return _0x5e85c8 &&
 typeof Symbol == "function" &&
 _0x5e85c8.constructor === Symbol &&
 _0x5e85c8 !== Symbol.prototype
 ? "symbol"
 : typeof _0x5e85c8;
 }),
 T(_0x335d89)
 );
}
function E(_0x3c2617, _0x4ba6c9) {
 if (T(_0x3c2617) != "object" || !_0x3c2617) return _0x3c2617;
 var _0x25f9b3 = _0x3c2617[Symbol.toPrimitive];
 if (_0x25f9b3 !== undefined) {
 var _0x129462 = _0x25f9b3.call(_0x3c2617, _0x4ba6c9 || "default");
 if (T(_0x129462) != "object") return _0x129462;
 throw TypeError("@@toPrimitive must return a primitive value.");
 }
 return (_0x4ba6c9 === "string" ? String : Number)(_0x3c2617);
}
function D(_0x32aa48) {
 var _0x4be638 = E(_0x32aa48, "string");
 return T(_0x4be638) == "symbol" ? _0x4be638 : _0x4be638 + "";
}
function O(_0x514a8e, _0x17cdf8, _0xe5307b) {
 return (
 (_0x17cdf8 = D(_0x17cdf8)) in _0x514a8e
 ? Object.defineProperty(_0x514a8e, _0x17cdf8, {
 value: _0xe5307b,
 enumerable: true,
 configurable: true,
 writable: true,
 })
 : (_0x514a8e[_0x17cdf8] = _0xe5307b),
 _0x514a8e
 );
}
const k = (0, e.createIdentifier)("univer-pro.slide-print-dialog.service");
var A = class extends e.Disposable {
 constructor(..._0x3e2daf) {
 (super(..._0x3e2daf),
 O(this, "_visible$", new t["BehaviorSubject"](false)),
 O(this, "_options$", new t["BehaviorSubject"](w())),
 O(this, "visible$", this._visible$["asObservable"]()),
 O(this, "options$", this._options$["asObservable"]()));
 }
 get visible() {
 return this._visible$["getValue"]();
 }
 get options() {
 return this._options$["getValue"]();
 }
 open(_0x48fcd9) {
 (this._options$["next"]({ ...w(), ..._0x48fcd9 }),
 this._visible$["next"](true));
 }
 close() {
 this._visible$["next"](false);
 }
 updateOptions(_0x2a0093) {
 this._options$["next"]({ ...this.options, ..._0x2a0093 });
 }
 dispose() {
 (this._visible$["complete"](),
 this._options$["complete"](),
 super.dispose());
 }
};
const j = {
 id: "slide.operation.print-open",
 type: e.CommandType["OPERATION"],
 handler(_0x903faa, _0x3c4740) {
 return (_0x903faa.get(k).open(_0x3c4740), true);
 },
 },
 M = {
 id: "slide.operation.print-close",
 type: e.CommandType["OPERATION"],
 handler(_0x2722ca) {
 return (_0x2722ca.get(k).close(), true);
 },
 };
var N = class {
 constructor() {
 O(this, "_transformers", new Set());
 }
 register(_0x225c96) {
 return (
 this._transformers["add"](_0x225c96),
 (0, e.toDisposable)(() => this._transformers["delete"](_0x225c96))
 );
 }
 transform(_0x251f8d, _0x586ea7) {
 return Array.from(this._transformers).reduce(
 (_0x47cb32, _0x4a7cf4) => _0x4a7cf4(_0x47cb32, _0x586ea7),
 _0x251f8d,
 );
 }
};
function P(_0x4ee496, _0x551f87) {
 let _0xe9edd2 = {};
 return {
 data: _0xe9edd2,
 order: _0x551f87.filter((_0x1c3cee) => {
 let _0x4a727a = _0x4ee496[_0x1c3cee];
 return (0, r.isThumbnailRenderableDrawing)(_0x4a727a)
 ? ((_0xe9edd2[_0x1c3cee] = _0x4a727a), true)
 : false;
 }),
 };
}
function te(_0x5656d8, _0x3ce52d, _0x111c68) {
 let _0x6eb02c = _0x3ce52d.getUnitId(),
 _0x3c42fd = _0x111c68.getId(),
 _0x257c21 = _0x5656d8.getDrawingData(_0x6eb02c, _0x3c42fd),
 _0x249264 = _0x5656d8.getDrawingOrder(_0x6eb02c, _0x3c42fd);
 if (_0x249264.some((_0x34655f) => !!_0x257c21[_0x34655f]))
 return P(_0x257c21, _0x249264);
 let _0x2a1eed = (0, i.resolvedSlideLayersToDrawingMap)(
 _0x6eb02c,
 _0x3c42fd,
 _0x111c68.resolveElements(),
 _0x3ce52d.getThemeDataForPage(_0x3c42fd),
 );
 return P(_0x2a1eed.data, _0x2a1eed.order);
}
var ne = class extends e.Disposable {
 get container() {
 return this._container;
 }
 get root() {
 return this._root;
 }
 get _pageSize() {
 return (0, r.resolveSlideLogicalPageSize)(
 this._slidePage["getData"]().pageSize ??
 this._slideModel["getSnapshot"]().defaultPageSize,
 );
 }
 constructor(_0x1e2f9d, _0x40fb7b, _0x68e79a, _0x4acbff, _0x3ffab4 = false) {
 (super(),
 (this._injector = _0x1e2f9d),
 (this._slideDrawingService = _0x40fb7b),
 (this._slideModel = _0x68e79a),
 (this._slidePage = _0x4acbff),
 (this._autoRender = _0x3ffab4),
 O(this, "_container", document.createElement("div")),
 O(this, "_root", document.createElement("div")),
 O(this, "_engine", undefined),
 O(this, "_scene", undefined),
 O(this, "_objectProvider", undefined),
 O(this, "_renderObjectMap", new Map()),
 O(this, "_drawingTransformService", undefined),
 (this._drawingTransformService = this._injector["get"](N)),
 (this._objectProvider = this._injector["createInstance"](
 r.ObjectProvider,
 )),
 this._initRenderer(),
 this.disposeWithMe({
 dispose: () => {
 (this._renderObjectMap["clear"](),
 this._scene["dispose"](),
 this._engine["dispose"]());
 },
 }));
 }
 _initRenderer() {
 let _0x3f739e = "slide-print-" + (0, e.generateRandomId)(4),
 { width: _0x54c3b3, height: _0x332af4 } = this._pageSize;
 ((this._engine = new a["Engine"]("", {
 elementWidth: _0x54c3b3,
 elementHeight: _0x332af4,
 dpr: 1,
 renderMode: a.CanvasRenderMode["Printing"],
 })),
 (this._scene = new a.Scene(_0x3f739e, this._engine)),
 this._scene["disableObjectsEvent"](),
 this._scene["transformByState"]({
 width: _0x54c3b3,
 height: _0x332af4,
 scaleX: 1,
 scaleY: 1,
 }),
 new a["Viewport"](a.MAIN_VIEW_PORT_KEY, this._scene, {
 left: 0,
 top: 0,
 width: _0x54c3b3,
 height: _0x332af4,
 active: true,
 }).openClip(),
 this._engine["mount"](this._container, false),
 this._engine["getCanvas"]()
 .getContext()
 .setId(_0x3f739e + "_" + (0, e.generateRandomId)(4)),
 this._renderSlidePage());
 }
 _renderSlidePage() {
 let _0x45473d = this._slideModel["getUnitId"](),
 _0x3f55d6 = this._slidePage["getId"](),
 { width: _0x2a8d25, height: _0x3611ef } = this._pageSize,
 _0x2157ac = this._scene,
 _0x27d3d9 = this._injector["createInstance"](
 r.SlidePageBackgroundObject,
 "slide-print-page-background-" + _0x45473d + "-" + _0x3f55d6,
 {
 left: 0,
 top: 0,
 width: _0x2a8d25,
 height: _0x3611ef,
 background: this._slidePage["resolveBackground"](),
 evented: false,
 zIndex: 1,
 },
 );
 (_0x2157ac.addObject(_0x27d3d9, 0),
 this._renderObjectMap["set"](_0x27d3d9.oKey, _0x27d3d9));
 let { data: _0x41f16f, order: _0x2654d6 } = this._drawingTransformService[
 "transform"
 ](te(this._slideDrawingService, this._slideModel, this._slidePage), {
 slideModel: this._slideModel,
 slidePage: this._slidePage,
 }),
 _0x46196a = (0, r.resolveGroupFillInheritance)(_0x41f16f),
 _0x4d73ac = new r["SlidePageClipGroup"](
 "slide-print-page-clip-" + _0x45473d + "-" + _0x3f55d6,
 { left: 0, top: 0, width: _0x2a8d25, height: _0x3611ef },
 );
 (_0x2157ac.addObject(_0x4d73ac, 0),
 this._renderObjectMap["set"](_0x4d73ac.oKey, _0x4d73ac),
 this._objectProvider["convertToRenderObjects"](_0x46196a, _0x2654d6, {
 unitId: _0x45473d,
 subUnitId: _0x3f55d6,
 pageOffsetLeft: 0,
 pageOffsetTop: 0,
 sceneType: i.SlideSceneTypeEnum["PRESENTATION"],
 showPlaceholder: false,
 requestRender: () => this._requestRender(),
 }).forEach((_0x5ac065) => {
 (_0x2157ac.addObject(_0x5ac065, a.DRAWING_OBJECT_LAYER_INDEX),
 this._renderObjectMap["set"](_0x5ac065.oKey, _0x5ac065));
 }),
 (0, r.assembleGroupHierarchy)(_0x46196a, _0x2654d6, _0x2157ac, {
 unitId: _0x45473d,
 subUnitId: _0x3f55d6,
 pageOffsetLeft: 0,
 pageOffsetTop: 0,
 sceneType: i.SlideSceneTypeEnum["PRESENTATION"],
 showPlaceholder: false,
 objectProvider: this._objectProvider,
 renderObjectMap: this._renderObjectMap,
 requestRender: () => this._requestRender(),
 }),
 _0x2157ac.makeDirty(true));
 }
 prepare() {
 ((this._root["style"].position = "absolute"),
 (this._root["style"].top = "0px"),
 (this._root["style"].left = "0px"),
 (this._root["style"].width = "100%"),
 (this._root["style"].height = "100%"));
 }
 render() {
 let _0x216414 = this._engine["getCanvas"]().getContext();
 (this._scene["makeDirty"](true),
 _0x216414.save(),
 this._scene["render"](),
 _0x216414.restore());
 }
 _requestRender() {
 (this._scene["makeDirty"](true), this._autoRender && this.render());
 }
};
const F = "univer-slide-print-page";
var I = class extends e.Disposable {
 constructor(
 _0x1d8869,
 _0xff67c6,
 _0x533614,
 _0x4503e3,
 _0x16d85a,
 _0x1b081b,
 _0x3df117,
 ) {
 (super(),
 (this._document = _0x1d8869),
 (this._injector = _0xff67c6),
 (this._slideDrawingService = _0x533614),
 (this._slideModel = _0x4503e3),
 (this._plan = _0x16d85a),
 (this._pageSize = _0x1b081b),
 (this._options = _0x3df117),
 O(this, "container", undefined),
 O(this, "_slideViews", []),
 (this.container = this._document["createElement"]("div")),
 (this.container["className"] = F),
 (this.container["style"].position = "relative"),
 (this.container["style"].width = this._pageSize["width"] + "px"),
 (this.container["style"].height = this._pageSize["height"] + "px"),
 (this.container["style"].background = "#fff"),
 (this.container["style"].color = "#000"),
 (this.container["style"].overflow = "hidden"),
 this._mountSlides(),
 this._mountNotes());
 }
 render() {
 this._slideViews["forEach"]((_0x2e654f) => _0x2e654f.render());
 }
 dispose() {
 (this._slideViews["forEach"]((_0x5211a2) => _0x5211a2.dispose()),
 (this._slideViews["length"] = 0),
 this.container["remove"](),
 super.dispose());
 }
 _mountSlides() {
 this._plan["slots"].forEach((_0x217171) => {
 let _0x183e48 = this._document["createElement"]("div");
 ((_0x183e48.className = "univer-slide-print-slot"),
 R(_0x183e48, _0x217171.rect),
 (_0x183e48.style["overflow"] = "hidden"),
 this.container["appendChild"](_0x183e48));
 let _0x2b5fbd = this._options["showSlideNumber"] ? 20 : 0,
 _0x5d4b2b = {
 ..._0x217171.rect,
 x: 0,
 y: 0,
 height: Math.max(1, _0x217171.rect["height"] - _0x2b5fbd),
 },
 _0x4e58b7 =
 _0x217171.source["width"] ||
 this._slideModel["getSnapshot"]().defaultPageSize["width"],
 _0x22948a =
 _0x217171.source["height"] ||
 this._slideModel["getSnapshot"]().defaultPageSize["height"],
 _0x1e03ec = L(_0x4e58b7, _0x22948a, _0x5d4b2b),
 _0x49309a = new ne(
 this._injector,
 this._slideDrawingService,
 this._slideModel,
 _0x217171.source["page"],
 this._options["preview"] ?? false,
 );
 if (
 (_0x49309a.prepare(),
 (_0x49309a.container["className"] = "univer-slide-print-surface"),
 (_0x49309a.container["style"].position = "absolute"),
 (_0x49309a.container["style"].left = _0x1e03ec.x + "px"),
 (_0x49309a.container["style"].top = _0x1e03ec.y + "px"),
 (_0x49309a.container["style"].width = _0x4e58b7 + "px"),
 (_0x49309a.container["style"].height = _0x22948a + "px"),
 (_0x49309a.container["style"].transform =
 "scale(" + _0x1e03ec.width / _0x4e58b7 + ")"),
 (_0x49309a.container["style"].transformOrig in = "top left"),
 _0x49309a.container["appendChild"](_0x49309a.root),
 _0x183e48.appendChild(_0x49309a.container),
 this._slideViews["push"](_0x49309a),
 this._options["frameSlides"])
 ) {
 let _0x1e5a75 = this._document["createElement"]("div");
 (R(_0x1e5a75, _0x1e03ec),
 (_0x1e5a75.style["border"] = "1px\x20solid\x20currentColor"),
 (_0x1e5a75.style["boxSizing"] = "border-box"),
 (_0x1e5a75.style["opacity"] = "0.5"),
 (_0x1e5a75.style["pointerEvents"] = "none"),
 _0x183e48.appendChild(_0x1e5a75));
 }
 if (this._options["showSlideNumber"]) {
 let _0x1c46ae = this._document["createElement"]("div");
 ((_0x1c46ae.textContent = String(_0x217171.source["index"] + 1)),
 (_0x1c46ae.style["position"] = "absolute"),
 (_0x1c46ae.style["left"] = "0"),
 (_0x1c46ae.style["right"] = "0"),
 (_0x1c46ae.style["bottom"] = "0"),
 (_0x1c46ae.style["height"] = "20px"),
 (_0x1c46ae.style["font"] = "12px/20px Arial, sans-serif"),
 (_0x1c46ae.style["textAlign"] = "center"),
 _0x183e48.appendChild(_0x1c46ae));
 }
 _0x217171.noteLinesRect &&
 this._mountHandoutLines(_0x217171.noteLinesRect);
 });
 }
 _mountHandoutLines(_0xcd5616) {
 let _0x5ac1a8 = this._document["createElement"]("div");
 (R(_0x5ac1a8, _0xcd5616),
 (_0x5ac1a8.style["display"] = "flex"),
 (_0x5ac1a8.style["flexDirection"] = "column"),
 (_0x5ac1a8.style["justifyContent"] = "space-evenly"));
 for (let _0x43c045 = 0; _0x43c045 < 6; _0x43c045++) {
 let _0x4846d4 = this._document["createElement"]("div");
 ((_0x4846d4.style["borderBottom"] = "1px\x20solid\x20currentColor"),
 (_0x4846d4.style["opacity"] = "0.4"),
 _0x5ac1a8.appendChild(_0x4846d4));
 }
 this.container["appendChild"](_0x5ac1a8);
 }
 _mountNotes() {
 let _0x19595e = this._plan["notes"];
 if (!_0x19595e) return;
 let _0x7c070f = this._document["createElement"]("div");
 (R(_0x7c070f, _0x19595e.rect),
 (_0x7c070f.style["boxSizing"] = "border-box"),
 (_0x7c070f.style["font"] = "14px/21px Arial, sans-serif"),
 (_0x7c070f.style["overflow"] = "hidden"),
 (_0x7c070f.style["whiteSpace"] = "pre"),
 (_0x7c070f.dir = "auto"),
 _0x19595e.lines["forEach"]((_0x59ba14) => {
 let _0x1d952e = this._document["createElement"]("div");
 ((_0x1d952e.style["height"] = "21px"),
 (_0x1d952e.textContent = _0x59ba14 || "\u00a0"),
 _0x7c070f.appendChild(_0x1d952e));
 }),
 this.container["appendChild"](_0x7c070f));
 }
};
function L(_0x4758d7, _0x2dfb9c, _0x54d8b7) {
 let _0x343cc4 = Math.min(
 _0x54d8b7.width / _0x4758d7,
 _0x54d8b7.height / _0x2dfb9c,
 ),
 _0x564227 = _0x4758d7 * _0x343cc4,
 _0x1c7c6e = _0x2dfb9c * _0x343cc4;
 return {
 x: _0x54d8b7.x + (_0x54d8b7.width - _0x564227) / 2,
 y: _0x54d8b7.y + (_0x54d8b7.height - _0x1c7c6e) / 2,
 width: _0x564227,
 height: _0x1c7c6e,
 };
}
function R(_0x14db89, _0x46cfcc) {
 ((_0x14db89.style["position"] = "absolute"),
 (_0x14db89.style["left"] = _0x46cfcc.x + "px"),
 (_0x14db89.style["top"] = _0x46cfcc.y + "px"),
 (_0x14db89.style["width"] = _0x46cfcc.width + "px"),
 (_0x14db89.style["height"] = _0x46cfcc.height + "px"));
}
function z(_0x182b05, _0x2e3421, _0x56b48a) {
 let _0x39bb37 = _0x182b05.createElement("style"),
 _0x391c68 = _0x56b48a.paperSize
 ? "size:\x20" +
 _0x56b48a.paperSize +
 "\x20" +
 _0x56b48a.direction["toLowerCase"]() +
 ";"
 : "";
 return (
 (_0x39bb37.className = "offline-printing-css"),
 (_0x39bb37.textContent =
 "\n html, body {\n margin: 0;\n padding: 0;\n }\n ." +
 n.PRINT_CONTAINER_CLASS +
 "\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20." +
 F +
 " {\n position: relative;\n width: " +
 _0x2e3421.width +
 "px;\n height: " +
 _0x2e3421.height +
 "px;\n overflow: hidden;\n }\n @media print {\n @page {\n size: " +
 _0x2e3421.width +
 "px\x20" +
 _0x2e3421.height +
 "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
 _0x391c68 +
 "\n margin: 0;\n }\n ." +
 F +
 " {\n break-after: page;\n page-break-after: always;\n }\n ." +
 F +
 ":last-child\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20break-after:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20page-break-after:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20"),
 _0x39bb37
 );
}
function B(_0x157a0b) {
 return (
 Number.isFinite(_0x157a0b.from) &&
 Number.isFinite(_0x157a0b.to) &&
 _0x157a0b.from <= _0x157a0b.to
 );
}
function V(_0x38aaf, _0x511bf4) {
 return Math.max(0, Math.min(_0x511bf4 - 1, _0x38aaf - 1));
}
function H(_0x44e15a, _0x4e9b42) {
 if (_0x44e15a <= 0) return [];
 if (!_0x4e9b42)
 return Array.from(
 { length: _0x44e15a },
 (_0x4dd2f5, _0x5a0402) => _0x5a0402,
 );
 let _0x3c7b10 = new Set();
 return (
 _0x4e9b42.forEach((_0x5f1872) => {
 if (!B(_0x5f1872) || _0x5f1872.to < 1 || _0x5f1872.from > _0x44e15a)
 return;
 let _0xe7ae4b = V(_0x5f1872.from, _0x44e15a),
 _0x29605a = V(_0x5f1872.to, _0x44e15a);
 for (let _0x2cde16 = _0xe7ae4b; _0x2cde16 <= _0x29605a; _0x2cde16 += 1)
 _0x3c7b10.add(_0x2cde16);
 }),
 Array.from(_0x3c7b10).sort((_0x42c7bd, _0x397955) => _0x42c7bd - _0x397955)
 );
}
function U(_0x8a612d, _0xfe071b) {
 return function (_0x51a80d, _0x156d3e) {
 _0xfe071b(_0x51a80d, _0x156d3e, _0x8a612d);
 };
}
function W(_0x447049, _0x1abbbb, _0x1ce172, _0x5c8715) {
 var _0x40dfb9 = arguments.length,
 _0x1b039d =
 _0x40dfb9 < 3
 ? _0x1abbbb
 : _0x5c8715 === null
 ? (_0x5c8715 = Object.getOwnPropertyDescriptor(_0x1abbbb, _0x1ce172))
 : _0x5c8715,
 _0x55af99;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 _0x1b039d = Reflect.decorate(_0x447049, _0x1abbbb, _0x1ce172, _0x5c8715);
 else {
 for (var _0x403184 = _0x447049.length - 1; _0x403184 >= 0; _0x403184--)
 (_0x55af99 = _0x447049[_0x403184]) &&
 (_0x1b039d =
 (_0x40dfb9 < 3
 ? _0x55af99(_0x1b039d)
 : _0x40dfb9 > 3
 ? _0x55af99(_0x1abbbb, _0x1ce172, _0x1b039d)
 : _0x55af99(_0x1abbbb, _0x1ce172)) || _0x1b039d);
 }
 return (
 _0x40dfb9 > 3 &&
 _0x1b039d &&
 Object.defineProperty(_0x1abbbb, _0x1ce172, _0x1b039d),
 _0x1b039d
 );
}
let G = class extends e.Disposable {
 constructor(_0xd44414, _0x2758d1, _0x127bef, _0x54ac01, _0x34bd1e) {
 (super(),
 (this._univerInstanceService = _0xd44414),
 (this._injector = _0x2758d1),
 (this._slideDrawingService = _0x127bef),
 (this._renderManagerService = _0x54ac01),
 (this._printPreparationService = _0x34bd1e),
 O(this, "_printing", false));
 }
 async print(_0x277245, _0x35856e) {
 if (this._printing) return Promise.resolve(false);
 let _0x2698ab = this._univerInstanceService["getUnit"](
 _0x277245,
 e.UniverInstanceType["UNIVER_SLIDE"],
 );
 if (!_0x2698ab) return Promise.resolve(false);
 let _0x1660f9 = _0x2698ab.getSnapshot(),
 _0xed37f1 = H(
 _0x1660f9.slideOrder["length"],
 _0x35856e == null ? undefined : _0x35856e.range,
 )
 .map((_0x546eb3) => ({
 index: _0x546eb3,
 page: _0x2698ab.pageManager["getSlide"](
 _0x1660f9.slideOrder[_0x546eb3],
 ),
 }))
 .filter((_0x38624b) => !!_0x38624b.page);
 if (_0xed37f1.length === 0) return false;
 this._printing = true;
 try {
 await this._printPreparationService["prepare"]({
 unitId: _0x277245,
 unitType: e.UniverInstanceType["UNIVER_SLIDE"],
 dpr: 1,
 });
 } catch (_0x2bb3c1) {
 throw ((this._printing = false), _0x2bb3c1);
 }
 let _0x2372ea = this._createPrintFrame();
 if (!_0x2372ea) return ((this._printing = false), false);
 try {
 let _0x43a003 = this._preparePrintResources(
 _0x2372ea,
 _0x2698ab,
 _0xed37f1,
 _0x35856e,
 );
 return this._printPreparedPages(
 _0x277245,
 _0x1660f9.slideOrder,
 _0x2372ea,
 _0x43a003,
 );
 } catch (_0x55ac65) {
 return (
 _0x2372ea.frame["remove"](),
 (this._printing = false),
 Promise.reject(_0x55ac65)
 );
 }
 }
 _preparePrintResources(_0x3fd82f, _0x5d0acf, _0x5ef510, _0x55e303) {
 let _0x3008c9 = _0x5d0acf.getSnapshot(),
 _0x3e7bec =
 _0x3fd82f.document["createElement"]("canvas").getContext("2d");
 _0x3e7bec && (_0x3e7bec.font = "14px Arial, sans-serif");
 let _0x1c5d26 = g(
 _(_0x5ef510, _0x3008c9.defaultPageSize),
 _0x3008c9.defaultPageSize,
 _0x55e303,
 (_0x59db28) =>
 (_0x3e7bec == null
 ? undefined
 : _0x3e7bec.measureText(_0x59db28).width) ??
 _0x59db28.length * 14 * 0.55,
 ),
 _0x32e9b2 = z(_0x3fd82f.document, _0x1c5d26.pageSize, _0x1c5d26.options),
 _0x3e72f0 = _0x3fd82f.document["createElement"]("div");
 _0x3e72f0.className = n.PRINT_CONTAINER_CLASS;
 let _0x159f5b = _0x1c5d26.pages["map"](
 (_0x421270) =>
 new I(
 _0x3fd82f.document,
 this._injector,
 this._slideDrawingService,
 _0x5d0acf,
 _0x421270,
 _0x1c5d26.pageSize,
 _0x1c5d26.options,
 ),
 );
 return (
 _0x159f5b.forEach((_0x3f1ce7) =>
 _0x3e72f0.appendChild(_0x3f1ce7.container),
 ),
 _0x3fd82f.document["head"].appendChild(_0x32e9b2),
 _0x3fd82f.document["body"].appendChild(_0x3e72f0),
 { container: _0x3e72f0, pageInstances: _0x159f5b, style: _0x32e9b2 }
 );
 }
 _printPreparedPages(_0x3c0aa1, _0x22f27c, _0x1f8d49, _0x4212b2) {
 let {
 container: _0xe3b914,
 pageInstances: _0x3bf5ac,
 style: _0x439a25,
 } = _0x4212b2,
 _0x36cac4 = _0x1f8d49.window,
 _0x4b0aeb = _0x36cac4.onbeforeprint,
 _0xeb0db2 = _0x36cac4.onafterprint;
 return new Promise((_0x5e0780) => {
 let _0x3c89fa = (_0x1ff101) => {
 (_0x3bf5ac.forEach((_0x2ef2a6) => _0x2ef2a6.dispose()),
 _0xe3b914.remove(),
 _0x439a25.remove(),
 (_0x36cac4.onbeforeprint = _0x4b0aeb),
 (_0x36cac4.onafterprint = _0xeb0db2),
 _0x1f8d49.frame["remove"](),
 this._restoreThumbnailRenders(_0x3c0aa1, _0x22f27c),
 (this._printing = false),
 _0x5e0780(_0x1ff101));
 };
 setTimeout(() => {
 if (
 ((_0x36cac4.onbeforeprint = (_0x48b6f5) => {
 (_0x4b0aeb == null || _0x4b0aeb.call(_0x36cac4, _0x48b6f5),
 _0x3bf5ac.forEach((_0x35f609) => _0x35f609.render()));
 }),
 (_0x36cac4.onafterprint = (_0x56565c) => {
 (_0xeb0db2 == null || _0xeb0db2.call(_0x36cac4, _0x56565c),
 _0x3c89fa(true));
 }),
 typeof _0x36cac4.print != "function")
 ) {
 _0x3c89fa(false);
 return;
 }
 try {
 _0x36cac4.print();
 } catch {
 _0x3c89fa(false);
 }
 }, 100);
 });
 }
 _createPrintFrame() {
 let _0x2bfc85 = document.createElement("iframe");
 (_0x2bfc85.setAttribute("aria-hidden", "true"),
 _0x2bfc85.setAttribute("data-univer-slides-print-frame", "true"),
 (_0x2bfc85.style["position"] = "fixed"),
 (_0x2bfc85.style["left"] = "-10000px"),
 (_0x2bfc85.style["top"] = "0"),
 (_0x2bfc85.style["width"] = "1px"),
 (_0x2bfc85.style["height"] = "1px"),
 (_0x2bfc85.style["border"] = "0"),
 (_0x2bfc85.style["pointerEvents"] = "none"),
 document.body["appendChild"](_0x2bfc85));
 let _0x46a5f9 = _0x2bfc85.contentWindow,
 _0x4fbe32 =
 _0x2bfc85.contentDocument ??
 (_0x46a5f9 == null ? undefined : _0x46a5f9.document);
 return !_0x46a5f9 || !_0x4fbe32
 ? (_0x2bfc85.remove(), null)
 : (_0x4fbe32.open(),
 _0x4fbe32.write(
 "<!doctype html><html><head></head><body></body></html>",
 ),
 _0x4fbe32.close(),
 { frame: _0x2bfc85, document: _0x4fbe32, window: _0x46a5f9 });
 }
 _restoreThumbnailRenders(_0x5ca13e, _0x37ae04) {
 _0x37ae04.forEach((_0x505ebd) => {
 let _0x27b2ed = this._renderManagerService["getRenderUnitById"](
 _0x5ca13e + "-thumb-" + _0x505ebd,
 );
 _0x27b2ed &&
 (_0x27b2ed.engine["resize"](),
 _0x27b2ed.scene["makeDirty"](true),
 _0x27b2ed.scene["render"]());
 });
 }
};
G = W(
 [
 U(0, e.IUniverInstanceService),
 U(1, (0, e.Inject)(e.Injector)),
 U(2, i.ISlideDrawingService),
 U(3, a.IRenderManagerService),
 U(4, n.IPrintPreparationService),
 ],
 G,
);
const K = {
 id: "slide.operation.print",
 type: e.CommandType["OPERATION"],
 handler: async (_0x3d585f, _0x57eaea) => {
 let _0x129833 = _0x3d585f.get(e.IUniverInstanceService),
 _0x422111 = _0x3d585f.get(G),
 _0x2fbda4 = _0x129833.getCurrentUnitOfType(
 e.UniverInstanceType["UNIVER_SLIDE"],
 );
 return _0x2fbda4
 ? _0x422111.print(_0x2fbda4.getUnitId(), _0x57eaea)
 : false;
 },
};
function q(_0x2fdac2) {
 return {
 id: j.id,
 type: o.MenuItemType["BUTTON"],
 title: "slides-print.menu",
 icon: "PrintIcon",
 tooltip: "slides-print.menu",
 hidden$: (0, o.getMenuHiddenObservable)(
 _0x2fdac2,
 e.UniverInstanceType["UNIVER_SLIDE"],
 ),
 };
}
const J = {
 [o.RibbonStartGroup["OTHERS"]]: {
 [j.id]: {
 order: 0.2,
 gridLayout: { row: 1, column: 2, rowSpan: 2, showLabel: true },
 menuItemFactory: q,
 },
 },
};
var re = "@univerjs-pro/slides-print",
 ie = "1.0.0-insiders.20260907-70fc579";
const Y = {};
let X = class extends e.Disposable {
 constructor(_0x28343f) {
 (super(), (this._iconManager = _0x28343f), this._registerIcons());
 }
 _registerIcons() {
 this.disposeWithMe(
 this._iconManager["register"]({ PrintIcon: c.PrintIcon }),
 );
 }
};
X = W([U(0, (0, e.Inject)(o.IconManager))], X);
function ae(_0x98b97, _0x192cda) {
 let _0x5466b7 = _0x98b97.trim();
 if (!_0x5466b7) return { valid: true };
 let _0x452082 = [];
 for (let _0x2702a6 of _0x5466b7.split(",")) {
 let _0x1942c5 = /^\s*(\d+)(?:\s*-\s*(\d+))?\s*$/["exec"](_0x2702a6);
 if (!_0x1942c5) return { valid: false };
 let _0x5a940a = Number(_0x1942c5[1]),
 _0x4847b2 = Number(_0x1942c5[2] ?? _0x1942c5[1]);
 if (_0x5a940a < 1 || _0x4847b2 < _0x5a940a || _0x4847b2 > _0x192cda)
 return { valid: false };
 _0x452082.push({ from: _0x5a940a, to: _0x4847b2 });
 }
 return { valid: true, range: _0x452082 };
}
function oe(_0x5c5ab8) {
 return (
 (_0x5c5ab8 == null
 ? undefined
 : _0x5c5ab8
 .map(({ from: _0x5bc356, to: _0x38cc15 }) =>
 _0x5bc356 === _0x38cc15
 ? String(_0x5bc356)
 : _0x5bc356 + "-" + _0x38cc15,
 )
 .join(",")) ?? ""
 );
}
const Z = [1, 2, 3, 4, 6, 9];
function se({ model: _0x5f4d15, page: _0x587d25, plan: _0x270d57 }) {
 let _0x125ee1 = (0, u.useRef)(null),
 _0x2294b2 = (0, o.useDependency)(e.Injector),
 _0x4843d1 = (0, o.useDependency)(i.ISlideDrawingService),
 _0x628ee9 = Math.min(1, 560 / _0x270d57.pageSize["width"]);
 return (
 (0, u.useEffect)(() => {
 let _0x452da5 = _0x125ee1.current;
 if (!_0x452da5) return;
 let _0x53b300 = new I(
 document,
 _0x2294b2,
 _0x4843d1,
 _0x5f4d15,
 _0x587d25,
 _0x270d57.pageSize,
 { ..._0x270d57.options, preview: true },
 );
 return (
 (_0x53b300.container["style"].transform = "scale(" + _0x628ee9 + ")"),
 (_0x53b300.container["style"].transformOrig in = "top\x20left"),
 _0x53b300.container["classList"].add("univer-shadow-sm"),
 _0x452da5.appendChild(_0x53b300.container),
 _0x53b300.render(),
 () => _0x53b300.dispose()
 );
 }, [_0x2294b2, _0x5f4d15, _0x587d25, _0x270d57, _0x628ee9, _0x4843d1]),
 (0, d.jsx)("div", {
 ref: _0x125ee1,
 className: "univer-relative univer-mx-auto univer-mb-7",
 style: {
 width: _0x270d57.pageSize["width"] * _0x628ee9,
 height: _0x270d57.pageSize["height"] * _0x628ee9,
 },
 })
 );
}
function ce({ totalSlides: _0x2a0a31 }) {
 let _0x5331a8 = (0, o.useDependency)(k),
 _0x4e76a7 = (0, o.useObservable)(_0x5331a8.options$, _0x5331a8.options),
 _0x491b9c = (0, o.useDependency)(e.LocaleService),
 [_0x494a10, _0x1d1ad6] = (0, u.useState)(() => oe(_0x4e76a7.range)),
 [_0x52e8cd, _0x390cec] = (0, u.useState)(true),
 _0x23f593 = _0x4e76a7.layout ?? "FullPage",
 _0x54f5c4 = _0x4e76a7.slidesPerPage ?? 2;
 return (0, d.jsx)("div", {
 className: (0, l.clsx)(
 "univer-h-full univer-overflow-y-auto",
 l.scrollbarClassName,
 ),
 children: (0, d.jsxs)("div", {
 className: "univer-p-4",
 children: [
 (0, d.jsxs)(l.FormLayout, {
 label: _0x491b9c.t("slides-print.settings.range"),
 children: [
 (0, d.jsx)(l.Input, {
 value: _0x494a10,
 placeholder: _0x491b9c.t(
 "slides-print.settings.rangePlaceholder",
 ),
 onChange: (_0x1b24c6) => {
 _0x1d1ad6(_0x1b24c6);
 let _0x511199 = ae(_0x1b24c6, _0x2a0a31);
 (_0x390cec(_0x511199.valid),
 _0x511199.valid &&
 _0x5331a8.updateOptions({ range: _0x511199.range }));
 },
 }),
 !_0x52e8cd &&
 (0, d.jsx)("div", {
 className: "univer-mt-1 univer-text-xs univer-text-red-500",
 children: _0x491b9c.t("slides-print.settings.rangeInvalid"),
 }),
 ],
 }),
 (0, d.jsx)(l.FormLayout, {
 label: _0x491b9c.t("slides-print.settings.layout"),
 children: (0, d.jsx)(l.Select, {
 className: "univer-w-full",
 value: _0x23f593,
 options: [
 {
 label: _0x491b9c.t("slides-print.settings.fullPage"),
 value: "FullPage",
 },
 {
 label: _0x491b9c.t("slides-print.settings.notesPage"),
 value: "NotesPage",
 },
 {
 label: _0x491b9c.t("slides-print.settings.handout"),
 value: "Handout",
 },
 ],
 onChange: (_0x3cfc6a) => {
 let _0xd54903 = Object.values(f).find(
 (_0x4ee75c) => _0x4ee75c === _0x3cfc6a,
 );
 _0xd54903 &&
 _0x5331a8.updateOptions({
 layout: _0xd54903,
 direction:
 _0xd54903 === "FullPage"
 ? n.PrintDirection["Landscape"]
 : n.PrintDirection["Portrait"],
 frameSlides: _0xd54903 !== "FullPage",
 showSlideNumber: _0xd54903 !== "FullPage",
 });
 },
 }),
 }),
 _0x23f593 === "Handout" &&
 (0, d.jsxs)(d.Fragment, {
 children: [
 (0, d.jsx)(l.FormLayout, {
 label: _0x491b9c.t("slides-print.settings.slidesPerPage"),
 children: (0, d.jsx)(l.Select, {
 className: "univer-w-full",
 value: String(_0x54f5c4),
 options: Z.map((_0x2aba53) => ({
 label: String(_0x2aba53),
 value: String(_0x2aba53),
 })),
 onChange: (_0x20b1c3) => {
 let _0x21ec5d = Z.find(
 (_0xbc9ac3) => String(_0xbc9ac3) === _0x20b1c3,
 );
 _0x21ec5d &&
 _0x5331a8.updateOptions({ slidesPerPage: _0x21ec5d });
 },
 }),
 }),
 _0x54f5c4 >= 4 &&
 (0, d.jsx)(l.FormLayout, {
 label: _0x491b9c.t("slides-print.settings.order"),
 children: (0, d.jsxs)(l.RadioGroup, {
 value: _0x4e76a7.handoutOrder ?? "Horizontal",
 onChange: (_0xce1f39) => {
 (_0xce1f39 === "Horizontal" ||
 _0xce1f39 === "Vertical") &&
 _0x5331a8.updateOptions({ handoutOrder: _0xce1f39 });
 },
 children: [
 (0, d.jsx)(l.Radio, {
 value: "Horizontal",
 children: _0x491b9c.t(
 "slides-print.settings.horizontal",
 ),
 }),
 (0, d.jsx)(l.Radio, {
 value: "Vertical",
 children: _0x491b9c.t("slides-print.settings.vertical"),
 }),
 ],
 }),
 }),
 ],
 }),
 (0, d.jsx)(l.FormLayout, {
 label: _0x491b9c.t("slides-print.settings.paperSize"),
 children: (0, d.jsx)(l.Select, {
 className: "univer-w-full",
 value: _0x4e76a7.paperSize ?? e.PaperType["A4"],
 options: e.PAPER_TYPES["map"]((_0x5bb706) => ({
 label: _0x5bb706,
 value: _0x5bb706,
 })),
 onChange: (_0x5c1aa4) => {
 let _0x340107 = e.PAPER_TYPES["find"](
 (_0x5951ec) => _0x5951ec === _0x5c1aa4,
 );
 _0x340107 && _0x5331a8.updateOptions({ paperSize: _0x340107 });
 },
 }),
 }),
 (0, d.jsx)(l.FormLayout, {
 label: _0x491b9c.t("slides-print.settings.orientation"),
 children: (0, d.jsxs)(l.RadioGroup, {
 value: _0x4e76a7.direction ?? n.PrintDirection["Landscape"],
 onChange: (_0x5d3409) => {
 (_0x5d3409 === n.PrintDirection["Portrait"] ||
 _0x5d3409 === n.PrintDirection["Landscape"]) &&
 _0x5331a8.updateOptions({ direction: _0x5d3409 });
 },
 children: [
 (0, d.jsx)(l.Radio, {
 value: n.PrintDirection["Portrait"],
 children: _0x491b9c.t("slides-print.settings.portrait"),
 }),
 (0, d.jsx)(l.Radio, {
 value: n.PrintDirection["Landscape"],
 children: _0x491b9c.t("slides-print.settings.landscape"),
 }),
 ],
 }),
 }),
 (0, d.jsx)(l.FormLayout, {
 label: _0x491b9c.t("slides-print.settings.margin"),
 children: (0, d.jsx)(l.Select, {
 className: "univer-w-full",
 value: _0x4e76a7.marg in ?? n.PrintPaperMargin["Normal"],
 options: [
 {
 label: _0x491b9c.t("slides-print.settings.normal"),
 value: n.PrintPaperMargin["Normal"],
 },
 {
 label: _0x491b9c.t("slides-print.settings.narrow"),
 value: n.PrintPaperMargin["Narrow"],
 },
 {
 label: _0x491b9c.t("slides-print.settings.wide"),
 value: n.PrintPaperMargin["Wide"],
 },
 {
 label: _0x491b9c.t("slides-print.settings.none"),
 value: n.PrintPaperMargin["None"],
 },
 ],
 onChange: (_0x5b45d4) => {
 (_0x5b45d4 === n.PrintPaperMargin["Normal"] ||
 _0x5b45d4 === n.PrintPaperMargin["Narrow"] ||
 _0x5b45d4 === n.PrintPaperMargin["Wide"] ||
 _0x5b45d4 === n.PrintPaperMargin["None"]) &&
 _0x5331a8.updateOptions({ margin: _0x5b45d4 });
 },
 }),
 }),
 (0, d.jsx)(l.FormLayout, {
 label: _0x491b9c.t("slides-print.settings.formatting"),
 children: (0, d.jsxs)("div", {
 className: "univer-flex univer-flex-col univer-gap-3",
 children: [
 (0, d.jsx)(l.Checkbox, {
 checked: _0x4e76a7.frameSlides ?? false,
 onChange: (_0x347686) => {
 typeof _0x347686 == "boolean" &&
 _0x5331a8.updateOptions({ frameSlides: _0x347686 });
 },
 children: _0x491b9c.t("slides-print.settings.frameSlides"),
 }),
 (0, d.jsx)(l.Checkbox, {
 checked: _0x4e76a7.showSlideNumber ?? false,
 onChange: (_0x937a2a) => {
 typeof _0x937a2a == "boolean" &&
 _0x5331a8.updateOptions({ showSlideNumber: _0x937a2a });
 },
 children: _0x491b9c.t("slides-print.settings.slideNumber"),
 }),
 ],
 }),
 }),
 ],
 }),
 });
}
function le() {
 let _0x468d45 = (0, o.useDependency)(e.ICommandService),
 _0x5147e3 = (0, o.useDependency)(k),
 _0x1263ab = (0, o.useObservable)(_0x5147e3.options$, _0x5147e3.options),
 _0x4bd4b3 = (0, o.useDependency)(e.IUniverInstanceService),
 _0x46df77 = (0, o.useDependency)(e.LocaleService),
 _0x201024 = (0, o.useDependency)(n.IPrintPreparationService),
 [_0x552106, _0x1a6aea] = (0, u.useState)(false),
 [_0x2fdc2c, _0x54497f] = (0, u.useState)(),
 [_0x54f344] = (0, u.useState)(() => {
 var _0x1c3217;
 return (_0x1c3217 = _0x4bd4b3.getCurrentUnitOfType(
 e.UniverInstanceType["UNIVER_SLIDE"],
 )) == null
 ? undefined
 : _0x1c3217.getUnitId();
 }),
 _0x1b8d6f = _0x54f344
 ? _0x4bd4b3.getUnit(_0x54f344, e.UniverInstanceType["UNIVER_SLIDE"])
 : undefined,
 _0x51d8b1 = _0x1b8d6f == null ? undefined : _0x1b8d6f.getSnapshot(),
 _0x515ce4 = (0, u.useMemo)(() => {
 if (!_0x1b8d6f || !_0x51d8b1 || _0x2fdc2c !== _0x54f344) return;
 let _0x11b8ec = (0, r.resolveSlideLogicalPageSize)(
 _0x51d8b1.defaultPageSize,
 ),
 _0xbec662 = _(
 H(_0x51d8b1.slideOrder["length"], _0x1263ab.range)
 .map((_0x4aff06) => ({
 index: _0x4aff06,
 page: _0x1b8d6f.pageManager["getSlide"](
 _0x51d8b1.slideOrder[_0x4aff06],
 ),
 }))
 .filter((_0x2b6643) => !!_0x2b6643.page),
 _0x11b8ec,
 ),
 _0x46ac06 = document.createElement("canvas").getContext("2d");
 return (
 _0x46ac06 && (_0x46ac06.font = "14px Arial, sans-serif"),
 g(
 _0xbec662,
 _0x11b8ec,
 _0x1263ab,
 (_0x4feed0) =>
 (_0x46ac06 == null
 ? undefined
 : _0x46ac06.measureText(_0x4feed0).width) ??
 _0x4feed0.length * 14 * 0.55,
 )
 );
 }, [_0x1b8d6f, _0x1263ab, _0x2fdc2c, _0x51d8b1, _0x54f344]);
 return (
 (0, u.useEffect)(() => {
 if (!_0x1b8d6f || !_0x54f344) return;
 let _0x442cc4 = true;
 return (
 _0x201024
 .prepare({
 unitId: _0x54f344,
 unitType: e.UniverInstanceType["UNIVER_SLIDE"],
 dpr: 1,
 })
 .then(
 () => {
 _0x442cc4 && _0x54497f(_0x54f344);
 },
 () => {
 _0x442cc4 && _0x54497f(undefined);
 },
 ),
 () => {
 _0x442cc4 = false;
 }
 );
 }, [_0x1b8d6f, _0x201024, _0x54f344]),
 !_0x1b8d6f || !_0x51d8b1
 ? null
 : (0, d.jsxs)("div", {
 className:
 "univer-absolute univer-inset-0 univer-z-[100] univer-flex univer-size-full univer-flex-col univer-overflow-hidden univer-bg-gray-100 dark:!univer-bg-gray-900",
 children: [
 (0, d.jsxs)("div", {
 className: (0, l.clsx)(
 "univer-flex univer-h-16 univer-items-center univer-justify-between univer-bg-gray-0 univer-px-4 dark:!univer-bg-gray-900",
 l.borderBottomClassName,
 ),
 children: [
 (0, d.jsx)("div", {
 className:
 "univer-ml-2\x20univer-text-base\x20univer-font-medium\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
 children: _0x46df77.t(
 "slides-print.header.pages",
 String(
 (_0x515ce4 == null
 ? undefined
 : _0x515ce4.pages["length"]) ?? 0,
 ),
 ),
 }),
 (0, d.jsxs)("div", {
 className: "univer-flex\x20univer-gap-2",
 children: [
 (0, d.jsx)(l.Button, {
 disabled: _0x552106,
 onClick: () => _0x468d45.executeCommand(M.id),
 children: _0x46df77.t("slides-print.header.cancel"),
 }),
 (0, d.jsx)(l.Button, {
 variant: "primary",
 disabled:
 _0x552106 ||
 !(_0x515ce4 != null && _0x515ce4.pages["length"]),
 onClick: async () => {
 _0x1a6aea(true);
 try {
 (await _0x468d45.executeCommand(K.id, _0x1263ab)) &&
 (await _0x468d45.executeCommand(M.id));
 } finally {
 _0x1a6aea(false);
 }
 },
 children: _0x552106
 ? _0x46df77.t("slides-print.header.printing")
 : _0x46df77.t("slides-print.header.next"),
 }),
 ],
 }),
 ],
 }),
 (0, d.jsxs)("div", {
 className: "univer-flex univer-flex-1 univer-overflow-hidden",
 children: [
 (0, d.jsx)("div", {
 className: (0, l.clsx)(
 "univer-flex-1 univer-overflow-auto univer-p-7",
 l.scrollbarClassName,
 ),
 "aria-busy": !_0x515ce4,
 children: _0x515ce4
 ? _0x515ce4.pages["map"]((_0x330312) =>
 (0, d.jsx)(
 se,
 {
 model: _0x1b8d6f,
 page: _0x330312,
 plan: _0x515ce4,
 },
 _0x330312.key,
 ),
 )
 : (0, d.jsx)("div", {
 className:
 "univer-flex univer-size-full univer-items-center univer-justify-center",
 role: "status",
 "aria-label": _0x46df77.t(
 "slides-print.header.printing",
 ),
 children: (0, d.jsx)(c.LoadingMultiIcon, {
 className:
 "univer-size-8 univer-animate-spin univer-text-gray-500",
 "aria-hidden": "true",
 }),
 }),
 }),
 (0, d.jsx)("div", {
 className:
 "univer-box-border univer-h-full univer-w-[312px] univer-flex-none univer-bg-gray-0 dark:!univer-bg-gray-900",
 children: (0, d.jsx)(ce, {
 totalSlides: _0x51d8b1.slideOrder["length"],
 }),
 }),
 ],
 }),
 ],
 })
 );
}
function ue() {
 let _0x1fecae = (0, o.useDependency)(k);
 return (0, o.useObservable)(_0x1fecae.visible$, _0x1fecae.visible)
 ? (0, d.jsx)(le, {})
 : null;
}
let Q = class extends e.Disposable {
 constructor(_0x6fb095, _0x30edd9, _0x29bb73, _0x22f3af) {
 (super(),
 (this._commandService = _0x6fb095),
 (this._menuManagerService = _0x30edd9),
 (this._uiPartsService = _0x29bb73),
 (this._injector = _0x22f3af),
 this._initCommands(),
 this._initUIParts(),
 this._initMenus());
 }
 _initCommands() {
 [K, j, M].forEach((_0x4e656c) =>
 this.disposeWithMe(this._commandService["registerCommand"](_0x4e656c)),
 );
 }
 _initUIParts() {
 this.disposeWithMe(
 this._uiPartsService["registerComponent"](o.BuiltInUIPart["GLOBAL"], () =>
 (0, o.connectInjector)(ue, this._injector),
 ),
 );
 }
 _initMenus() {
 this._menuManagerService["mergeMenu"](J);
 }
};
Q = W(
 [
 U(0, e.ICommandService),
 U(1, o.IMenuManagerService),
 U(2, o.IUIPartsService),
 U(3, (0, e.Inject)(e.Injector)),
 ],
 Q,
);
let $ = class extends e.Plug in {
 constructor(_0x5f3fbf = Y, _0x2fd86e, _0x3c8910) {
 (super(),
 (this._config = _0x5f3fbf),
 (this._injector = _0x2fd86e),
 (this._configService = _0x3c8910));
 let { menu: _0x59e69e, ..._0x575485 } = (0, e.merge)({}, Y, this._config);
 (_0x59e69e &&
 this._configService["setConfig"]("menu", _0x59e69e, { merge: true }),
 this._configService["setConfig"]("slides-print.config", _0x575485));
 }
 onStarting() {
 (this._injector["has"](n.IPrintPreparationService) ||
 this._injector["add"]([
 n.IPrintPreparationService,
 { useClass: n.PrintPreparationService },
 ]),
 this._injector["add"]([X]),
 this._injector["get"](X),
 this._injector["has"](N) || this._injector["add"]([N]),
 (0, e.registerDependencies)(this._injector, [
 [G],
 [k, { useClass: A }],
 [Q],
 ]));
 }
 onReady() {
 this._injector["get"](Q);
 }
};
(O($, "pluginName", "SLIDES_PRINT_PLUGIN"),
 O($, "packageName", re),
 O($, "version", ie),
 O($, "type", e.UniverInstanceType["UNIVER_SLIDE"]),
 ($ = W(
 [
 (0, e.DependentOn)(
 s.UniverLicensePlugin,
 a.UniverRenderEnginePlugin,
 i.UniverSlidesPlugin,
 r.UniverSlidesUIPlugin,
 ),
 U(1, (0, e.Inject)(e.Injector)),
 U(2, e.IConfigService),
 ],
 $,
 )),
 (exports.OpenSlidePrintDialogOperation = j),
 (exports.SlidePrintDrawingTransformService = N),
 (exports.SlidePrintHandoutOrder = p),
 (exports.SlidePrintLayoutType = f),
 (exports.SlidePrintOperation = K),
 (exports.SlidesPrintMenuSchema = J),
 Object.defineProperty(exports, "UniverSlidesPrintPlugin", {
 enumerable: true,
 get: function () {
 return $;
 },
 }));
