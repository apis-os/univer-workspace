Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/ui"),
  t = require("@univerjs-pro/exchange-client"),
  n = require("@univerjs/core"),
  r = require("@univerjs-pro/collaboration"),
  i = require("@univerjs/sheets"),
  a = require("@univerjs/sheets-ui"),
  o = require("@univerjs-pro/license");
const s = {
  minSheetRowCount: 1,
  minSheetColumnCount: 1,
  disableCellImageConversion: true,
};
function c(_0x455f80, _0x27260f) {
  return function (_0x2b88af, _0x3a2ed9) {
    _0x27260f(_0x2b88af, _0x3a2ed9, _0x455f80);
  };
}
function l(_0x3b3034, _0x1f8d19, _0x3ebfa7, _0x50d7c3) {
  var _0xa3d78e = arguments.length,
    _0x1d2a6b =
      _0xa3d78e < 3
        ? _0x1f8d19
        : _0x50d7c3 === null
          ? (_0x50d7c3 = Object.getOwnPropertyDescriptor(_0x1f8d19, _0x3ebfa7))
          : _0x50d7c3,
    _0x538442;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1d2a6b = Reflect.decorate(_0x3b3034, _0x1f8d19, _0x3ebfa7, _0x50d7c3);
  else {
    for (var _0x2b16d6 = _0x3b3034.length - 1; _0x2b16d6 >= 0; _0x2b16d6--)
      (_0x538442 = _0x3b3034[_0x2b16d6]) &&
        (_0x1d2a6b =
          (_0xa3d78e < 3
            ? _0x538442(_0x1d2a6b)
            : _0xa3d78e > 3
              ? _0x538442(_0x1f8d19, _0x3ebfa7, _0x1d2a6b)
              : _0x538442(_0x1f8d19, _0x3ebfa7)) || _0x1d2a6b);
  }
  return (
    _0xa3d78e > 3 &&
      _0x1d2a6b &&
      Object.defineProperty(_0x1f8d19, _0x3ebfa7, _0x1d2a6b),
    _0x1d2a6b
  );
}
const u = (0, n.createIdentifier)(
  "sheets-exchange-client.sheet-exchange.service",
);
let d = class {
  constructor(_0x1c6699, _0x4eca87) {
    ((this._exchangeService = _0x1c6699), (this._configService = _0x4eca87));
  }
  importSheetToUnitId(_0x1452bd) {
    let _0x150eb8 = this._createImportOptions();
    return this._exchangeService["importFileToUnitId"](
      _0x1452bd,
      n.UniverInstanceType["UNIVER_SHEET"],
      { sheet: _0x150eb8 },
    );
  }
  async importSheetToSnapshot(_0x383a7e) {
    let _0x5ddcbc = this._createImportOptions(),
      _0x397b54 = await this._exchangeService["importFileToJson"](
        _0x383a7e,
        n.UniverInstanceType["UNIVER_SHEET"],
        { sheet: _0x5ddcbc },
      );
    return _0x397b54
      ? this.transformSnapshotJsonToWorkbookData(_0x397b54)
      : undefined;
  }
  exportSheetByUnitId(
    _0x153b8e,
    _0x53eee9 = t.ExchangeFormat["XLSX"],
    _0xcc53c1,
  ) {
    let _0x1ac5c1 = this._createExportOptions(_0x53eee9, _0xcc53c1);
    return this._exchangeService["exportFileByUnitId"](
      _0x153b8e,
      n.UniverInstanceType["UNIVER_SHEET"],
      _0x53eee9,
      { sheet: _0x1ac5c1 },
    );
  }
  async exportSheetBySnapshot(
    _0x49555f,
    _0x3b1c79 = t.ExchangeFormat["XLSX"],
    _0x351318,
  ) {
    let _0x29633a = await this.transformWorkbookDataToSnapshotJson(_0x49555f),
      _0x1a1b66 = this._createExportOptions(_0x3b1c79, _0x351318);
    return this._exchangeService["exportFileBySnapshot"](
      _0x29633a,
      n.UniverInstanceType["UNIVER_SHEET"],
      _0x3b1c79,
      { sheet: _0x1a1b66 },
    );
  }
  transformSnapshotJsonToWorkbookData(_0x18bc5a) {
    let _0x149d79 = Object.values(_0x18bc5a.sheetBlocks || {}).map(
      (_0x18c4ee) => ({
        ..._0x18c4ee,
        data: _0x18c4ee.data
          ? JSON.parse((0, r.b64DecodeUnicode)(_0x18c4ee.data))
          : undefined,
      }),
    );
    return (0, r.transformSnapshotToWorkbookData)(
      _0x18bc5a.snapshot,
      _0x149d79,
    );
  }
  async transformWorkbookDataToSnapshotJson(_0x4b537c) {
    let _0x138f02 = { metadata: undefined },
      _0x4f783f = new t["ClientSnapshotServerService"](),
      { snapshot: _0x28fd61 } = await (0, r.transformWorkbookDataToSnapshot)(
        _0x138f02,
        _0x4b537c,
        _0x4b537c.id,
        _0x4b537c.rev ?? 0,
        _0x4f783f,
      ),
      _0x45bf40 = (0, t.transformWorkbookSnapshotMetaToString)(_0x28fd61);
    if (!_0x45bf40)
      throw Error("Failed\x20to\x20transform\x20snapshot\x20to\x20string");
    return {
      snapshot: _0x45bf40,
      sheetBlocks: (0, t.transformSheetBlockMetaToString)(
        await (0, r.getSheetBlocksFromSnapshot)(_0x28fd61, _0x4f783f),
      ),
    };
  }
  _getConfig() {
    return (
      this._configService["getConfig"]("sheets-exchange-client.config") ?? s
    );
  }
  _createImportOptions() {
    let { minSheetRowCount: _0x3bfba0, minSheetColumnCount: _0x5020db } =
      this._getConfig();
    return { minSheetRowCount: _0x3bfba0, minSheetColumnCount: _0x5020db };
  }
  _createExportOptions(_0xa1580c, _0x3c2b05) {
    let { disableCellImageConversion: _0xca3d19 } = this._getConfig();
    return {
      useImageUrl: _0xca3d19,
      ...(_0xa1580c !== t.ExchangeFormat["XLSX"] && _0x3c2b05
        ? { csv: { sheetId: _0x3c2b05 } }
        : {}),
    };
  }
};
d = l([c(0, (0, n.Inject)(t.IExchangeService)), c(1, n.IConfigService)], d);
const f = (0, n.createIdentifier)(
  "sheets-exchange-client.sheet-exchange-operate.service",
);
let p = class {
  constructor(_0x3f294d, _0x95a34b, _0x2299fb, _0x1a21ee) {
    ((this._sheetExchangeService = _0x3f294d),
      (this._exchangeOperateService = _0x95a34b),
      (this._univerInstanceService = _0x2299fb),
      (this._resourceLoaderService = _0x1a21ee));
  }
  importSheetToUnitId() {
    return this._exchangeOperateService["importFileToUnitId"](
      n.UniverInstanceType["UNIVER_SHEET"],
      (_0x4f0f25) =>
        this._sheetExchangeService["importSheetToUnitId"](_0x4f0f25),
    );
  }
  importSheetToSnapshot() {
    return this._exchangeOperateService["importFileToSnapshot"](
      n.UniverInstanceType["UNIVER_SHEET"],
      (_0x2db2aa) =>
        this._sheetExchangeService["importSheetToSnapshot"](_0x2db2aa),
    );
  }
  exportSheetByUnitId(
    _0x3806c9,
    _0x2b2bb8,
    _0x468042 = t.ExchangeFormat["XLSX"],
    _0x49c898,
  ) {
    let _0x14e8fc = this._getCurrentWorkbook();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._sheetExchangeService["exportSheetByUnitId"](
          _0x3806c9 ?? _0x14e8fc.getUnitId(),
          _0x468042,
          _0x49c898,
        ),
      _0x2b2bb8 ?? _0x14e8fc.getSnapshot().name,
      _0x468042,
    );
  }
  exportSheetBySnapshot(_0x391959 = t.ExchangeFormat["XLSX"], _0xb05974) {
    let _0x4dcf29 = this._getCurrentWorkbook(),
      _0x16086b =
        this._resourceLoaderService["saveUnit"](_0x4dcf29.getUnitId()) ??
        _0x4dcf29.getSnapshot();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._sheetExchangeService["exportSheetBySnapshot"](
          _0x16086b,
          _0x391959,
          _0xb05974,
        ),
      _0x16086b.name,
      _0x391959,
    );
  }
  _getCurrentWorkbook() {
    let _0x267f5d = this._univerInstanceService["getCurrentUnitOfType"](
      n.UniverInstanceType["UNIVER_SHEET"],
    );
    if (!_0x267f5d)
      throw Error(
        "No unit of type " +
          n.UniverInstanceType["UNIVER_SHEET"] +
          "\x20is\x20currently\x20active.",
      );
    return _0x267f5d;
  }
};
p = l(
  [
    c(0, (0, n.Inject)(u)),
    c(1, (0, n.Inject)(t.IExchangeOperateService)),
    c(2, n.IUniverInstanceService),
    c(3, n.IResourceLoaderService),
  ],
  p,
);
function m(_0x15aa1b) {
  var _0x576de3, _0xdb9367;
  return {
    selectedId:
      ((_0x576de3 = _0x15aa1b.getActiveSheet(true)) == null
        ? undefined
        : _0x576de3.getSheetId()) ??
      ((_0xdb9367 = _0x15aa1b.getSheets()[0]) == null
        ? undefined
        : _0xdb9367.getSheetId()) ??
      "",
    items: _0x15aa1b
      .getSheets()
      .map((_0x3372f7) => ({
        label: _0x3372f7.getName(),
        value: _0x3372f7.getSheetId(),
      })),
  };
}
const h = {
    id: "sheets-exchange-client.operation.import-sheet",
    type: n.CommandType["OPERATION"],
    handler: async (_0x5c79fe) => {
      let _0x332430 = _0x5c79fe.get(f);
      return (
        (0, t.isCurrentUnitLoadedFromServer)(
          _0x5c79fe,
          n.UniverInstanceType["UNIVER_SHEET"],
        )
          ? await _0x332430.importSheetToUnitId()
          : await _0x332430.importSheetToSnapshot(),
        true
      );
    },
  },
  g = {
    id: "sheets-exchange-client.operation.export-sheet-by-format",
    type: n.CommandType["OPERATION"],
    handler: async (_0x4e5cad, _0x32dd75) => {
      if (!_0x32dd75) return false;
      let _0x279e43 = _0x4e5cad.get(f);
      return (
        (0, t.isCurrentUnitLoadedFromServer)(
          _0x4e5cad,
          n.UniverInstanceType["UNIVER_SHEET"],
        )
          ? await _0x279e43.exportSheetByUnitId(
              undefined,
              undefined,
              _0x32dd75.format,
              _0x32dd75.sheetId,
            )
          : await _0x279e43.exportSheetBySnapshot(
              _0x32dd75.format,
              _0x32dd75.sheetId,
            ),
        true
      );
    },
  },
  _ = {
    id: "sheets-exchange-client.operation.export-sheet",
    type: n.CommandType["OPERATION"],
    handler: (_0x3fd07c) => {
      let _0x434c88 = _0x3fd07c
        .get(n.IUniverInstanceService)
        .getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"]);
      if (!_0x434c88) return false;
      let _0x13a946 = m(_0x434c88),
        _0x30d15b = _0x3fd07c.get(e.IDialogService),
        _0x50c04c = _0x3fd07c.get(n.ICommandService),
        _0x4dfb8d = _0x3fd07c.get(n.LocaleService),
        _0x154f13 = null,
        _0x15b4f2 = () => {
          (_0x154f13 == null || _0x154f13.dispose(), (_0x154f13 = null));
        };
      return (
        (_0x154f13 = _0x30d15b.open({
          id: "sheets-exchange-client.dialog.export-format",
          title: { title: _0x4dfb8d.t("sheets-exchange-client.download") },
          width: 420,
          draggable: false,
          mask: true,
          maskClosable: false,
          children: {
            label: {
              name: t.EXPORT_FORMAT_DIALOG,
              props: {
                formats: [
                  t.ExchangeFormat["XLSX"],
                  t.ExchangeFormat["CSV"],
                  t.ExchangeFormat["TSV"],
                ],
                ..._0x13a946,
                onCancel: _0x15b4f2,
                onConfirm: async (_0x4b644c, _0x400f6b) => {
                  (await _0x50c04c.executeCommand(g.id, {
                    format: _0x4b644c,
                    sheetId: _0x400f6b,
                  }),
                    _0x15b4f2());
                },
              },
            },
          },
          onClose: _0x15b4f2,
        })),
        true
      );
    },
  },
  v = "sheets-exchange-client.operation.exchange";
function y(_0x57c054) {
  return {
    id: v,
    type: e.MenuItemType["SUBITEMS"],
    icon: "DirectExportIcon",
    tooltip: "sheets-exchange-client.file",
    hidden$: (0, e.getMenuHiddenObservable)(
      _0x57c054,
      n.UniverInstanceType["UNIVER_SHEET"],
    ),
    disabled$: (0, a.getCurrentRangeDisable$)(_0x57c054, {
      workbookTypes: [i.WorkbookExportPermission],
    }),
  };
}
function b() {
  return {
    id: h.id,
    type: e.MenuItemType["BUTTON"],
    title: "sheets-exchange-client.upload",
    icon: "FolderIcon",
  };
}
function x() {
  return {
    id: _.id,
    type: e.MenuItemType["BUTTON"],
    title: "sheets-exchange-client.download",
    icon: "ExportIcon",
  };
}
const S = {
  [e.RibbonStartGroup["OTHERS"]]: {
    [v]: {
      order: 0.03,
      gridLayout: { row: 1, column: 2, rowSpan: 2, showLabel: true },
      menuItemFactory: y,
      [h.id]: { order: 0, menuItemFactory: b },
      [_.id]: { order: 1, menuItemFactory: x },
    },
  },
};
var C = "@univerjs-pro/sheets-exchange-client",
  w = "1.0.0-insiders.20260907-70fc579";
let T = class extends n.Disposable {
  constructor(_0x30bbb1, _0x13a371) {
    (super(),
      (this._commandService = _0x30bbb1),
      (this._menuManagerService = _0x13a371),
      this._initCommands(),
      this._initMenus());
  }
  _initCommands() {
    [h, _, g].forEach((_0x454e6a) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x454e6a));
    });
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](S);
  }
};
T = l([c(0, n.ICommandService), c(1, e.IMenuManagerService)], T);
function E(_0x3b61bf) {
  "@babel/helpers - typeof";
  return (
    (E =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2edc31) {
            return typeof _0x2edc31;
          }
        : function (_0x3c8b70) {
            return _0x3c8b70 &&
              typeof Symbol == "function" &&
              _0x3c8b70.constructor === Symbol &&
              _0x3c8b70 !== Symbol.prototype
              ? "symbol"
              : typeof _0x3c8b70;
          }),
    E(_0x3b61bf)
  );
}
function D(_0x4a6159, _0x4d49a1) {
  if (E(_0x4a6159) != "object" || !_0x4a6159) return _0x4a6159;
  var _0x275dc9 = _0x4a6159[Symbol.toPrimitive];
  if (_0x275dc9 !== undefined) {
    var _0x5b96f6 = _0x275dc9.call(_0x4a6159, _0x4d49a1 || "default");
    if (E(_0x5b96f6) != "object") return _0x5b96f6;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x4d49a1 === "string" ? String : Number)(_0x4a6159);
}
function O(_0x3e10d5) {
  var _0x37b2b5 = D(_0x3e10d5, "string");
  return E(_0x37b2b5) == "symbol" ? _0x37b2b5 : _0x37b2b5 + "";
}
function k(_0x3535ff, _0x20a21c, _0x2be354) {
  return (
    (_0x20a21c = O(_0x20a21c)) in _0x3535ff
      ? Object.defineProperty(_0x3535ff, _0x20a21c, {
          value: _0x2be354,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3535ff[_0x20a21c] = _0x2be354),
    _0x3535ff
  );
}
let A = class extends n.Plugin {
  constructor(_0x3ae6dd = s, _0x506c3b, _0x1d096b) {
    (super(),
      (this._config = _0x3ae6dd),
      (this._injector = _0x506c3b),
      (this._configService = _0x1d096b));
    let { menu: _0x12ef65, ..._0xffa4fd } = (0, n.merge)({}, s, this._config);
    (_0x12ef65 &&
      this._configService["setConfig"]("menu", _0x12ef65, { merge: true }),
      this._configService["setConfig"](
        "sheets-exchange-client.config",
        _0xffa4fd,
      ));
  }
  onStarting() {
    [[u, { useClass: d }], [f, { useClass: p }], [T]].forEach((_0x2467fa) =>
      this._injector["add"](_0x2467fa),
    );
  }
  onReady() {
    this._injector["get"](T);
  }
};
(k(A, "pluginName", "SHEET_EXCHANGE_CLIENT_PLUGIN"),
  k(A, "packageName", C),
  k(A, "version", w),
  k(A, "type", n.UniverInstanceType["UNIVER_SHEET"]),
  (A = l(
    [
      (0, n.DependentOn)(o.UniverLicensePlugin, t.UniverExchangeClientPlugin),
      c(1, (0, n.Inject)(n.Injector)),
      c(2, n.IConfigService),
    ],
    A,
  )),
  (exports.ISheetExchangeService = u),
  (exports.SheetsExchangeClientMenuSchema = S),
  Object.defineProperty(exports, "UniverSheetsExchangeClientPlugin", {
    enumerable: true,
    get: function () {
      return A;
    },
  }));
