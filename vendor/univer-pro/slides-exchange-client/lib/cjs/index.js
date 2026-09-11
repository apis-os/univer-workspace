Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/ui"),
 t = require("@univerjs-pro/exchange-client"),
 n = require("@univerjs/core"),
 r = require("@univerjs-pro/collaboration"),
 i = require("@univerjs-pro/license");
function a(_0x305beb, _0x1a033f) {
 return function (_0x2d6f1e, _0x236aea) {
 _0x1a033f(_0x2d6f1e, _0x236aea, _0x305beb);
 };
}
function o(_0x3eba51, _0x3b7663, _0x4e070f, _0xb39dd5) {
 var _0x1f16af = arguments.length,
 _0x430663 =
 _0x1f16af < 3
 ? _0x3b7663
 : _0xb39dd5 === null
 ? (_0xb39dd5 = Object.getOwnPropertyDescriptor(_0x3b7663, _0x4e070f))
 : _0xb39dd5,
 _0x4c84d7;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 _0x430663 = Reflect.decorate(_0x3eba51, _0x3b7663, _0x4e070f, _0xb39dd5);
 else {
 for (var _0x417f59 = _0x3eba51.length - 1; _0x417f59 >= 0; _0x417f59--)
 (_0x4c84d7 = _0x3eba51[_0x417f59]) &&
 (_0x430663 =
 (_0x1f16af < 3
 ? _0x4c84d7(_0x430663)
 : _0x1f16af > 3
 ? _0x4c84d7(_0x3b7663, _0x4e070f, _0x430663)
 : _0x4c84d7(_0x3b7663, _0x4e070f)) || _0x430663);
 }
 return (
 _0x1f16af > 3 &&
 _0x430663 &&
 Object.defineProperty(_0x3b7663, _0x4e070f, _0x430663),
 _0x430663
 );
}
function s(_0x367e23) {
 let _0x465195 = _0x367e23.slide ?? _0x367e23.doc;
 if (!_0x465195) return null;
 let _0xa7921d =
 typeof _0x465195.originalMeta == "string"
 ? _0x465195.originalMeta
 : (0, r.b64EncodeUnicode)(
 r.textDecoder["decode"](_0x465195.originalMeta),
 );
 return {
 ..._0x367e23,
 workbook: {},
 doc: {},
 slide: { ..._0x465195, originalMeta: _0xa7921d },
 board: undefined,
 pdf: undefined,
 };
}
const c = (0, n.createIdentifier)(
 "slides-exchange-client.slide-exchange.service",
);
let l = class {
 constructor(_0x29b6ab) {
 this._exchangeService = _0x29b6ab;
 }
 importSlideToUnitId(_0x16b0b2) {
 return this._exchangeService["importFileToUnitId"](
 _0x16b0b2,
 n.UniverInstanceType["UNIVER_SLIDE"],
 );
 }
 async importSlideToSnapshot(_0x3ad8fa) {
 let _0x19d0a5 = await this._exchangeService["importFileToJson"](
 _0x3ad8fa,
 n.UniverInstanceType["UNIVER_SLIDE"],
 );
 return _0x19d0a5 != null && _0x19d0a5.snapshot
 ? this.transformSnapshotJsonToSlideData(_0x19d0a5)
 : undefined;
 }
 exportSlideByUnitId(_0x4e4b3a) {
 return this._exchangeService["exportFileByUnitId"](
 _0x4e4b3a,
 n.UniverInstanceType["UNIVER_SLIDE"],
 t.ExchangeFormat["PPTX"],
 );
 }
 async exportSlideBySnapshot(_0x4f535f) {
 let _0x697c70 = await this.transformSlideDataToSnapshotJson(_0x4f535f);
 return this._exchangeService["exportFileBySnapshot"](
 _0x697c70,
 n.UniverInstanceType["UNIVER_SLIDE"],
 t.ExchangeFormat["PPTX"],
 );
 }
 async transformSnapshotJsonToSlideData(_0x5a2277) {
 return (0, r.transformSnapshotToSlideData)(_0x5a2277.snapshot);
 }
 async transformSlideDataToSnapshotJson(_0x7ea8e) {
 let _0x472ad6 = new t["ClientSnapshotServerService"](),
 { snapshot: _0x40b2f1 } = await (0, r.transformSlideDataToSnapshot)(
 _0x7ea8e.resources,
 _0x7ea8e,
 _0x7ea8e.id,
 _0x7ea8e.rev ?? 0,
 _0x472ad6,
 ),
 _0x426e11 = s(_0x40b2f1);
 if (!_0x426e11) throw Error("Failed to transform Slide snapshot to string");
 return { snapshot: _0x426e11, sheetBlocks: {} };
 }
};
l = o([a(0, (0, n.Inject)(t.IExchangeService))], l);
const u = (0, n.createIdentifier)(
 "slides-exchange-client.slide-exchange-operate.service",
);
let d = class {
 constructor(_0x2c8297, _0x615ed9, _0x51ba0f, _0x49652a) {
 ((this._slideExchangeService = _0x2c8297),
 (this._exchangeOperateService = _0x615ed9),
 (this._univerInstanceService = _0x51ba0f),
 (this._resourceLoaderService = _0x49652a));
 }
 importSlideToUnitId() {
 return this._exchangeOperateService["importFileToUnitId"](
 n.UniverInstanceType["UNIVER_SLIDE"],
 (_0x2d7409) =>
 this._slideExchangeService["importSlideToUnitId"](_0x2d7409),
 );
 }
 importSlideToSnapshot() {
 return this._exchangeOperateService["importFileToSnapshot"](
 n.UniverInstanceType["UNIVER_SLIDE"],
 (_0x3594a3) =>
 this._slideExchangeService["importSlideToSnapshot"](_0x3594a3),
 );
 }
 exportSlideByUnitId(_0x1fedd2, _0x5bac95) {
 let _0x4693e0 = this._getCurrentSlide();
 return this._exchangeOperateService["exportFile"](
 () =>
 this._slideExchangeService["exportSlideByUnitId"](
 _0x1fedd2 ?? _0x4693e0.getUnitId(),
 ),
 _0x5bac95 ?? _0x4693e0.getSnapshot().name,
 t.ExchangeFormat["PPTX"],
 );
 }
 exportSlideBySnapshot() {
 let _0x5ef827 = this._getCurrentSlide(),
 _0x4242e9 =
 this._resourceLoaderService["saveUnit"](_0x5ef827.getUnitId()) ??
 _0x5ef827.getSnapshot();
 return this._exchangeOperateService["exportFile"](
 () => this._slideExchangeService["exportSlideBySnapshot"](_0x4242e9),
 _0x4242e9.name,
 t.ExchangeFormat["PPTX"],
 );
 }
 _getCurrentSlide() {
 let _0x5bc4e6 = this._univerInstanceService["getCurrentUnitOfType"](
 n.UniverInstanceType["UNIVER_SLIDE"],
 );
 if (!_0x5bc4e6)
 throw Error(
 "No unit of type " +
 n.UniverInstanceType["UNIVER_SLIDE"] +
 " is currently active.",
 );
 return _0x5bc4e6;
 }
};
d = o(
 [
 a(0, (0, n.Inject)(c)),
 a(1, (0, n.Inject)(t.IExchangeOperateService)),
 a(2, n.IUniverInstanceService),
 a(3, n.IResourceLoaderService),
 ],
 d,
);
const f = {
 id: "slides-exchange-client.operation.import-slide",
 type: n.CommandType["OPERATION"],
 handler: async (_0x8be57f) => {
 let _0x36f18a = _0x8be57f.get(u);
 return (
 (0, t.isCurrentUnitLoadedFromServer)(
 _0x8be57f,
 n.UniverInstanceType["UNIVER_SLIDE"],
 )
 ? await _0x36f18a.importSlideToUnitId()
 : await _0x36f18a.importSlideToSnapshot(),
 true
 );
 },
 },
 p = {
 id: "slides-exchange-client.operation.export-slide",
 type: n.CommandType["OPERATION"],
 handler: async (_0x4cdef7) => {
 let _0x10f9ef = _0x4cdef7.get(u);
 return (
 (0, t.isCurrentUnitLoadedFromServer)(
 _0x4cdef7,
 n.UniverInstanceType["UNIVER_SLIDE"],
 )
 ? await _0x10f9ef.exportSlideByUnitId()
 : await _0x10f9ef.exportSlideBySnapshot(),
 true
 );
 },
 },
 m = "slides-exchange-client.operation.exchange";
function h(_0x25109f) {
 return {
 id: m,
 type: e.MenuItemType["SUBITEMS"],
 icon: "DirectExportIcon",
 tooltip: "slides-exchange-client.file",
 hidden$: (0, e.getMenuHiddenObservable)(
 _0x25109f,
 n.UniverInstanceType["UNIVER_SLIDE"],
 ),
 };
}
function g() {
 return {
 id: f.id,
 type: e.MenuItemType["BUTTON"],
 title: "slides-exchange-client.upload",
 icon: "FolderIcon",
 };
}
function _() {
 return {
 id: p.id,
 type: e.MenuItemType["BUTTON"],
 title: "slides-exchange-client.download",
 icon: "ExportIcon",
 };
}
const v = {
 [e.RibbonStartGroup["OTHERS"]]: {
 [m]: {
 order: 0.3,
 gridLayout: { row: 1, column: 3, rowSpan: 2, showLabel: true },
 menuItemFactory: h,
 [f.id]: { order: 0, menuItemFactory: g },
 [p.id]: { order: 1, menuItemFactory: _ },
 },
 },
};
var y = "@univerjs-pro/slides-exchange-client",
 b = "1.0.0-insiders.20260907-70fc579";
const x = {};
let S = class extends n.Disposable {
 constructor(_0x4360fe, _0xa33048) {
 (super(),
 (this._commandService = _0x4360fe),
 (this._menuManagerService = _0xa33048),
 this._initCommands(),
 this._initMenus());
 }
 _initCommands() {
 [f, p].forEach((_0x34258c) => {
 this.disposeWithMe(this._commandService["registerCommand"](_0x34258c));
 });
 }
 _initMenus() {
 this._menuManagerService["mergeMenu"](v);
 }
};
S = o([a(0, n.ICommandService), a(1, e.IMenuManagerService)], S);
function C(_0x55b403) {
 "@babel/helpers - typeof";
 return (
 (C =
 typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
 ? function (_0x464998) {
 return typeof _0x464998;
 }
 : function (_0x7a7887) {
 return _0x7a7887 &&
 typeof Symbol == "function" &&
 _0x7a7887.constructor === Symbol &&
 _0x7a7887 !== Symbol.prototype
 ? "symbol"
 : typeof _0x7a7887;
 }),
 C(_0x55b403)
 );
}
function w(_0x4b9a13, _0x4fb3ae) {
 if (C(_0x4b9a13) != "object" || !_0x4b9a13) return _0x4b9a13;
 var _0x52a2f7 = _0x4b9a13[Symbol.toPrimitive];
 if (_0x52a2f7 !== undefined) {
 var _0xe3bd13 = _0x52a2f7.call(_0x4b9a13, _0x4fb3ae || "default");
 if (C(_0xe3bd13) != "object") return _0xe3bd13;
 throw TypeError("@@toPrimitive must return a primitive value.");
 }
 return (_0x4fb3ae === "string" ? String : Number)(_0x4b9a13);
}
function T(_0xe1bc54) {
 var _0x72c9c2 = w(_0xe1bc54, "string");
 return C(_0x72c9c2) == "symbol" ? _0x72c9c2 : _0x72c9c2 + "";
}
function E(_0x3be69d, _0x3d97da, _0x932c73) {
 return (
 (_0x3d97da = T(_0x3d97da)) in _0x3be69d
 ? Object.defineProperty(_0x3be69d, _0x3d97da, {
 value: _0x932c73,
 enumerable: true,
 configurable: true,
 writable: true,
 })
 : (_0x3be69d[_0x3d97da] = _0x932c73),
 _0x3be69d
 );
}
let D = class extends n.Plug in {
 constructor(_0x5d51de = x, _0x2f98e7, _0x54e548) {
 (super(),
 (this._config = _0x5d51de),
 (this._injector = _0x2f98e7),
 (this._configService = _0x54e548));
 let { menu: _0x43e3e6, ..._0x278f44 } = (0, n.merge)({}, x, this._config);
 (_0x43e3e6 &&
 this._configService["setConfig"]("menu", _0x43e3e6, { merge: true }),
 this._configService["setConfig"](
 "slides-exchange-client.config",
 _0x278f44,
 ));
 }
 onStarting() {
 [[c, { useClass: l }], [u, { useClass: d }], [S]].forEach((_0x3acd91) =>
 this._injector["add"](_0x3acd91),
 );
 }
 onReady() {
 this._injector["get"](S);
 }
};
(E(D, "pluginName", "SLIDES_EXCHANGE_CLIENT_PLUGIN"),
 E(D, "packageName", y),
 E(D, "version", b),
 E(D, "type", n.UniverInstanceType["UNIVER_SLIDE"]),
 (D = o(
 [
 (0, n.DependentOn)(i.UniverLicensePlugin, t.UniverExchangeClientPlugin),
 a(1, (0, n.Inject)(n.Injector)),
 a(2, n.IConfigService),
 ],
 D,
 )),
 (exports.ISlideExchangeService = c),
 (exports.SlidesExchangeClientMenuSchema = v),
 Object.defineProperty(exports, "UniverSlidesExchangeClientPlugin", {
 enumerable: true,
 get: function () {
 return D;
 },
 }));
