Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/ui"),
  t = require("@univerjs-pro/exchange-client"),
  n = require("@univerjs/core"),
  r = require("@univerjs-pro/collaboration"),
  i = require("@univerjs-pro/license");
function a(_0x4362c4, _0x42f328) {
  return function (_0xc286a7, _0x5934c2) {
    _0x42f328(_0xc286a7, _0x5934c2, _0x4362c4);
  };
}
function o(_0x57bf5e, _0x59ebdd, _0x432565, _0x6acfd2) {
  var _0x26145b = arguments.length,
    _0x4978c3 =
      _0x26145b < 3
        ? _0x59ebdd
        : _0x6acfd2 === null
          ? (_0x6acfd2 = Object.getOwnPropertyDescriptor(_0x59ebdd, _0x432565))
          : _0x6acfd2,
    _0xde0efc;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4978c3 = Reflect.decorate(_0x57bf5e, _0x59ebdd, _0x432565, _0x6acfd2);
  else {
    for (var _0x4d7e67 = _0x57bf5e.length - 1; _0x4d7e67 >= 0; _0x4d7e67--)
      (_0xde0efc = _0x57bf5e[_0x4d7e67]) &&
        (_0x4978c3 =
          (_0x26145b < 3
            ? _0xde0efc(_0x4978c3)
            : _0x26145b > 3
              ? _0xde0efc(_0x59ebdd, _0x432565, _0x4978c3)
              : _0xde0efc(_0x59ebdd, _0x432565)) || _0x4978c3);
  }
  return (
    _0x26145b > 3 &&
      _0x4978c3 &&
      Object.defineProperty(_0x59ebdd, _0x432565, _0x4978c3),
    _0x4978c3
  );
}
function s(_0x42079b) {
  let _0x138383 = _0x42079b.doc;
  if (!_0x138383) return null;
  let _0x495398 = (0, r.b64EncodeUnicode)(
    r.textDecoder["decode"](_0x138383.originalMeta),
  );
  return {
    ..._0x42079b,
    workbook: {},
    doc: { ..._0x138383, originalMeta: _0x495398 },
    slide: undefined,
    board: undefined,
    pdf: undefined,
  };
}
const c = (0, n.createIdentifier)("docs-exchange-client.doc-exchange.service");
let l = class {
  constructor(_0x54533a) {
    this._exchangeService = _0x54533a;
  }
  importDocToUnitId(_0x469b11, _0xa6cbdf) {
    return this._exchangeService["importFileToUnitId"](
      _0x469b11,
      n.UniverInstanceType["UNIVER_DOC"],
      _0xa6cbdf ? { doc: _0xa6cbdf } : undefined,
    );
  }
  async importDocToSnapshot(_0x2d2cc4, _0x1986f1) {
    let _0x369afa = await this._exchangeService["importFileToJson"](
      _0x2d2cc4,
      n.UniverInstanceType["UNIVER_DOC"],
      _0x1986f1 ? { doc: _0x1986f1 } : undefined,
    );
    return _0x369afa != null && _0x369afa.snapshot
      ? this.transformSnapshotJsonToDocumentData(_0x369afa)
      : undefined;
  }
  exportDocByUnitId(_0x4d04f1) {
    return this._exchangeService["exportFileByUnitId"](
      _0x4d04f1,
      n.UniverInstanceType["UNIVER_DOC"],
      t.ExchangeFormat["DOCX"],
    );
  }
  async exportDocBySnapshot(_0x3a1e71) {
    let _0x341d56 = await this.transformDocumentDataToSnapshotJson(_0x3a1e71);
    return this._exchangeService["exportFileBySnapshot"](
      _0x341d56,
      n.UniverInstanceType["UNIVER_DOC"],
      t.ExchangeFormat["DOCX"],
    );
  }
  async transformSnapshotJsonToDocumentData(_0x753f3f) {
    return (0, r.transformSnapshotToDocumentData)(_0x753f3f.snapshot);
  }
  async transformDocumentDataToSnapshotJson(_0x44e23c) {
    let _0x50cedf = { metadata: undefined },
      _0x264850 = new t["ClientSnapshotServerService"](),
      { snapshot: _0x148700 } = await (0, r.transformDocumentDataToSnapshot)(
        _0x50cedf,
        _0x44e23c,
        _0x44e23c.id,
        _0x44e23c.rev ?? 0,
        _0x264850,
      ),
      _0x511f7c = s(_0x148700);
    if (!_0x511f7c)
      throw Error(
        "Failed\x20to\x20transform\x20Document\x20snapshot\x20to\x20string",
      );
    return { snapshot: _0x511f7c, sheetBlocks: {} };
  }
};
l = o([a(0, (0, n.Inject)(t.IExchangeService))], l);
function u(_0x2a7713) {
  switch (_0x2a7713) {
    case n.DocumentFlavor["MODERN"]:
      return { docType: t.ExchangeDocType["MODERN"] };
    case n.DocumentFlavor["TRADITIONAL"]:
      return { docType: t.ExchangeDocType["TRADITIONAL"] };
    default:
      return;
  }
}
const d = (0, n.createIdentifier)(
  "docs-exchange-client.doc-exchange-operate.service",
);
let f = class {
  constructor(_0x2d50f3, _0x55c686, _0x46a922, _0x132961) {
    ((this._docExchangeService = _0x2d50f3),
      (this._exchangeOperateService = _0x55c686),
      (this._univerInstanceService = _0x46a922),
      (this._resourceLoaderService = _0x132961));
  }
  importDocToUnitId() {
    let _0x398b8d = u(
      this._getCurrentDocument().getDocumentStyle().documentFlavor,
    );
    return this._exchangeOperateService["importFileToUnitId"](
      n.UniverInstanceType["UNIVER_DOC"],
      (_0x1f4c0d) =>
        this._docExchangeService["importDocToUnitId"](_0x1f4c0d, _0x398b8d),
    );
  }
  importDocToSnapshot() {
    let _0x127311 = u(
      this._getCurrentDocument().getDocumentStyle().documentFlavor,
    );
    return this._exchangeOperateService["importFileToSnapshot"](
      n.UniverInstanceType["UNIVER_DOC"],
      (_0x52b636) =>
        this._docExchangeService["importDocToSnapshot"](_0x52b636, _0x127311),
    );
  }
  exportDocByUnitId(_0x3074f0, _0xca3a3d) {
    let _0x49e7f1 = this._getCurrentDocument();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._docExchangeService["exportDocByUnitId"](
          _0x3074f0 ?? _0x49e7f1.getUnitId(),
        ),
      _0xca3a3d ?? _0x49e7f1.getSnapshot().title,
      t.ExchangeFormat["DOCX"],
    );
  }
  exportDocBySnapshot() {
    let _0xf98e0a = this._getCurrentDocument(),
      _0x4cc22e =
        this._resourceLoaderService["saveUnit"](_0xf98e0a.getUnitId()) ??
        _0xf98e0a.getSnapshot();
    return this._exchangeOperateService["exportFile"](
      () => this._docExchangeService["exportDocBySnapshot"](_0x4cc22e),
      _0x4cc22e.title,
      t.ExchangeFormat["DOCX"],
    );
  }
  _getCurrentDocument() {
    let _0x3563b2 = this._univerInstanceService["getCurrentUnitOfType"](
      n.UniverInstanceType["UNIVER_DOC"],
    );
    if (!_0x3563b2)
      throw Error(
        "No unit of type " +
          n.UniverInstanceType["UNIVER_DOC"] +
          " is currently active.",
      );
    return _0x3563b2;
  }
};
f = o(
  [
    a(0, (0, n.Inject)(c)),
    a(1, (0, n.Inject)(t.IExchangeOperateService)),
    a(2, n.IUniverInstanceService),
    a(3, n.IResourceLoaderService),
  ],
  f,
);
const p = {
    id: "docs-exchange-client.operation.import-doc",
    type: n.CommandType["OPERATION"],
    handler: async (_0x23077d) => {
      let _0x1c75ac = _0x23077d.get(d);
      return (
        (0, t.isCurrentUnitLoadedFromServer)(
          _0x23077d,
          n.UniverInstanceType["UNIVER_DOC"],
        )
          ? await _0x1c75ac.importDocToUnitId()
          : await _0x1c75ac.importDocToSnapshot(),
        true
      );
    },
  },
  m = {
    id: "docs-exchange-client.operation.export-doc",
    type: n.CommandType["OPERATION"],
    handler: async (_0x58aa85) => {
      let _0x156932 = _0x58aa85.get(d);
      return (
        (0, t.isCurrentUnitLoadedFromServer)(
          _0x58aa85,
          n.UniverInstanceType["UNIVER_DOC"],
        )
          ? await _0x156932.exportDocByUnitId()
          : await _0x156932.exportDocBySnapshot(),
        true
      );
    },
  },
  h = "docs-exchange-client.operation.exchange";
function g(_0x3b391a) {
  return {
    id: h,
    type: e.MenuItemType["SUBITEMS"],
    icon: "DirectExportIcon",
    tooltip: "docs-exchange-client.file",
    hidden$: (0, e.getMenuHiddenObservable)(
      _0x3b391a,
      n.UniverInstanceType["UNIVER_DOC"],
    ),
  };
}
function _() {
  return {
    id: p.id,
    type: e.MenuItemType["BUTTON"],
    title: "docs-exchange-client.upload",
    icon: "FolderIcon",
  };
}
function v() {
  return {
    id: m.id,
    type: e.MenuItemType["BUTTON"],
    title: "docs-exchange-client.download",
    icon: "ExportIcon",
  };
}
const y = {
  [e.RibbonStartGroup["OTHERS"]]: {
    [h]: {
      order: 0.3,
      gridLayout: { row: 1, column: 2, rowSpan: 2, showLabel: true },
      menuItemFactory: g,
      [p.id]: { order: 0, menuItemFactory: _ },
      [m.id]: { order: 1, menuItemFactory: v },
    },
  },
};
var b = "@univerjs-pro/docs-exchange-client",
  x = "1.0.0-insiders.20260907-70fc579";
const S = {};
let C = class extends n.Disposable {
  constructor(_0x161e8f, _0x103463) {
    (super(),
      (this._commandService = _0x161e8f),
      (this._menuManagerService = _0x103463),
      this._initCommands(),
      this._initMenus());
  }
  _initCommands() {
    [p, m].forEach((_0x1b9d02) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x1b9d02));
    });
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](y);
  }
};
C = o([a(0, n.ICommandService), a(1, e.IMenuManagerService)], C);
function w(_0x80361c) {
  "@babel/helpers - typeof";
  return (
    (w =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3c5d80) {
            return typeof _0x3c5d80;
          }
        : function (_0x164b28) {
            return _0x164b28 &&
              typeof Symbol == "function" &&
              _0x164b28.constructor === Symbol &&
              _0x164b28 !== Symbol.prototype
              ? "symbol"
              : typeof _0x164b28;
          }),
    w(_0x80361c)
  );
}
function T(_0x239e9e, _0x38836d) {
  if (w(_0x239e9e) != "object" || !_0x239e9e) return _0x239e9e;
  var _0x1017ce = _0x239e9e[Symbol.toPrimitive];
  if (_0x1017ce !== undefined) {
    var _0x2039b9 = _0x1017ce.call(_0x239e9e, _0x38836d || "default");
    if (w(_0x2039b9) != "object") return _0x2039b9;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x38836d === "string" ? String : Number)(_0x239e9e);
}
function E(_0x3d4a4e) {
  var _0x136fc3 = T(_0x3d4a4e, "string");
  return w(_0x136fc3) == "symbol" ? _0x136fc3 : _0x136fc3 + "";
}
function D(_0x87133, _0x1783d0, _0x4d787d) {
  return (
    (_0x1783d0 = E(_0x1783d0)) in _0x87133
      ? Object.defineProperty(_0x87133, _0x1783d0, {
          value: _0x4d787d,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x87133[_0x1783d0] = _0x4d787d),
    _0x87133
  );
}
let O = class extends n.Plugin {
  constructor(_0x59903e = S, _0x4092d5, _0x381b21) {
    (super(),
      (this._config = _0x59903e),
      (this._injector = _0x4092d5),
      (this._configService = _0x381b21));
    let { menu: _0x3d0824, ..._0x26505d } = (0, n.merge)({}, S, this._config);
    (_0x3d0824 &&
      this._configService["setConfig"]("menu", _0x3d0824, { merge: true }),
      this._configService["setConfig"](
        "docs-exchange-client.config",
        _0x26505d,
      ));
  }
  onStarting() {
    [[c, { useClass: l }], [d, { useClass: f }], [C]].forEach((_0xe7bee6) =>
      this._injector["add"](_0xe7bee6),
    );
  }
  onReady() {
    (0, n.touchDependencies)(this._injector, [[C]]);
  }
};
(D(O, "pluginName", "DOC_EXCHANGE_CLIENT_PLUGIN"),
  D(O, "packageName", b),
  D(O, "version", x),
  D(O, "type", n.UniverInstanceType["UNIVER_DOC"]),
  (O = o(
    [
      (0, n.DependentOn)(i.UniverLicensePlugin, t.UniverExchangeClientPlugin),
      a(1, (0, n.Inject)(n.Injector)),
      a(2, n.IConfigService),
    ],
    O,
  )),
  (exports.DocsExchangeClientMenuSchema = y),
  (exports.IDocExchangeService = c),
  Object.defineProperty(exports, "UniverDocsExchangeClientPlugin", {
    enumerable: true,
    get: function () {
      return O;
    },
  }));
