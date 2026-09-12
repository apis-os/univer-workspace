import {
  IDialogService as _0xf8c4d0,
  IMenuManagerService as _0x19cc3e,
  MenuItemType as _0x2bf353,
  RibbonStartGroup as _0x337d2e,
  getMenuHiddenObservable as _0x21ce2f,
} from "@univerjs/ui";
import {
  ClientSnapshotServerService as _0x5b5172,
  EXPORT_FORMAT_DIALOG as _0x4fb483,
  ExchangeFormat as _0x110f34,
  IExchangeOperateService as _0x4cd48d,
  IExchangeService as _0x4af3f7,
  UniverExchangeClientPlugin as _0x3e9530,
  isCurrentUnitLoadedFromServer as _0x59e115,
  transformSheetBlockMetaToString as _0x4d6370,
  transformWorkbookSnapshotMetaToString as _0x355bb0,
} from "@univerjs-pro/exchange-client";
import {
  CommandType as _0x1105ad,
  DependentOn as _0x568dbe,
  Disposable as _0x4d6c23,
  ICommandService as _0x47b8e2,
  IConfigService as _0x2f9974,
  IResourceLoaderService as _0x5a1975,
  IUniverInstanceService as _0x23ec4f,
  Inject as _0x38f2ed,
  Injector as _0x3a2499,
  LocaleService as _0x273944,
  Plugin as _0x213501,
  UniverInstanceType as _0x420332,
  createIdentifier as _0x1ce3c4,
  merge as _0x4cdccc,
} from "@univerjs/core";
import {
  b64DecodeUnicode as _0x5b906f,
  getSheetBlocksFromSnapshot as _0x2f5569,
  transformSnapshotToWorkbookData as _0x793b57,
  transformWorkbookDataToSnapshot as _0x7b492b,
} from "@univerjs-pro/collaboration";
import { WorkbookExportPermission as _0x5effed } from "@univerjs/sheets";
import { getCurrentRangeDisable$ as _0x5256e9 } from "@univerjs/sheets-ui";
import { UniverLicensePlugin as _0x2ba742 } from "@univerjs-pro/license";
const M = {
  minSheetRowCount: 1,
  minSheetColumnCount: 1,
  disableCellImageConversion: true,
};
function N(_0x5806b0, _0x5872bb) {
  return function (_0x423e3b, _0x624d1e) {
    _0x5872bb(_0x423e3b, _0x624d1e, _0x5806b0);
  };
}
function P(_0x5816b2, _0x5a8ebe, _0x416a9e, _0x16a850) {
  var _0x1874a3 = arguments.length,
    _0x12b41f =
      _0x1874a3 < 3
        ? _0x5a8ebe
        : _0x16a850 === null
          ? (_0x16a850 = Object.getOwnPropertyDescriptor(_0x5a8ebe, _0x416a9e))
          : _0x16a850,
    _0x397fc3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x12b41f = Reflect.decorate(_0x5816b2, _0x5a8ebe, _0x416a9e, _0x16a850);
  else {
    for (var _0x58cef5 = _0x5816b2.length - 1; _0x58cef5 >= 0; _0x58cef5--)
      (_0x397fc3 = _0x5816b2[_0x58cef5]) &&
        (_0x12b41f =
          (_0x1874a3 < 3
            ? _0x397fc3(_0x12b41f)
            : _0x1874a3 > 3
              ? _0x397fc3(_0x5a8ebe, _0x416a9e, _0x12b41f)
              : _0x397fc3(_0x5a8ebe, _0x416a9e)) || _0x12b41f);
  }
  return (
    _0x1874a3 > 3 &&
      _0x12b41f &&
      Object.defineProperty(_0x5a8ebe, _0x416a9e, _0x12b41f),
    _0x12b41f
  );
}
const F = _0x1ce3c4("sheets-exchange-client.sheet-exchange.service");
let I = class {
  constructor(_0x494b83, _0x532d66) {
    ((this._exchangeService = _0x494b83), (this._configService = _0x532d66));
  }
  importSheetToUnitId(_0x153683) {
    let _0x4d698b = this._createImportOptions();
    return this._exchangeService["importFileToUnitId"](
      _0x153683,
      _0x420332.UNIVER_SHEET,
      { sheet: _0x4d698b },
    );
  }
  async importSheetToSnapshot(_0x278eb7) {
    let _0x211ed3 = this._createImportOptions(),
      _0xe56ed2 = await this._exchangeService["importFileToJson"](
        _0x278eb7,
        _0x420332.UNIVER_SHEET,
        { sheet: _0x211ed3 },
      );
    return _0xe56ed2
      ? this.transformSnapshotJsonToWorkbookData(_0xe56ed2)
      : undefined;
  }
  exportSheetByUnitId(_0x2d021e, _0x2edfad = _0x110f34.XLSX, _0x4e734b) {
    let _0x3f275d = this._createExportOptions(_0x2edfad, _0x4e734b);
    return this._exchangeService["exportFileByUnitId"](
      _0x2d021e,
      _0x420332.UNIVER_SHEET,
      _0x2edfad,
      { sheet: _0x3f275d },
    );
  }
  async exportSheetBySnapshot(
    _0x3d21aa,
    _0x5d44ff = _0x110f34.XLSX,
    _0x234381,
  ) {
    let _0x4405d0 = await this.transformWorkbookDataToSnapshotJson(_0x3d21aa),
      _0x3ca22c = this._createExportOptions(_0x5d44ff, _0x234381);
    return this._exchangeService["exportFileBySnapshot"](
      _0x4405d0,
      _0x420332.UNIVER_SHEET,
      _0x5d44ff,
      { sheet: _0x3ca22c },
    );
  }
  transformSnapshotJsonToWorkbookData(_0x1df3fa) {
    let _0x10f126 = Object.values(_0x1df3fa.sheetBlocks || {}).map(
      (_0x5221f5) => ({
        ..._0x5221f5,
        data: _0x5221f5.data
          ? JSON.parse(_0x5b906f(_0x5221f5.data))
          : undefined,
      }),
    );
    return _0x793b57(_0x1df3fa.snapshot, _0x10f126);
  }
  async transformWorkbookDataToSnapshotJson(_0xe51dd0) {
    let _0x42e58d = { metadata: undefined },
      _0x112714 = new _0x5b5172(),
      { snapshot: _0x5f25c4 } = await _0x7b492b(
        _0x42e58d,
        _0xe51dd0,
        _0xe51dd0.id,
        _0xe51dd0.rev ?? 0,
        _0x112714,
      ),
      _0x2b8883 = _0x355bb0(_0x5f25c4);
    if (!_0x2b8883)
      throw Error("Failed\x20to\x20transform\x20snapshot\x20to\x20string");
    return {
      snapshot: _0x2b8883,
      sheetBlocks: _0x4d6370(await _0x2f5569(_0x5f25c4, _0x112714)),
    };
  }
  _getConfig() {
    return (
      this._configService["getConfig"]("sheets-exchange-client.config") ?? M
    );
  }
  _createImportOptions() {
    let { minSheetRowCount: _0x3ad71a, minSheetColumnCount: _0x49750 } =
      this._getConfig();
    return { minSheetRowCount: _0x3ad71a, minSheetColumnCount: _0x49750 };
  }
  _createExportOptions(_0x316d99, _0x921ff7) {
    let { disableCellImageConversion: _0x136bde } = this._getConfig();
    return {
      useImageUrl: _0x136bde,
      ...(_0x316d99 !== _0x110f34.XLSX && _0x921ff7
        ? { csv: { sheetId: _0x921ff7 } }
        : {}),
    };
  }
};
I = P([N(0, _0x38f2ed(_0x4af3f7)), N(1, _0x2f9974)], I);
const L = _0x1ce3c4("sheets-exchange-client.sheet-exchange-operate.service");
let R = class {
  constructor(_0x2b4e64, _0x1d0da7, _0x516ff3, _0x3f55e2) {
    ((this._sheetExchangeService = _0x2b4e64),
      (this._exchangeOperateService = _0x1d0da7),
      (this._univerInstanceService = _0x516ff3),
      (this._resourceLoaderService = _0x3f55e2));
  }
  importSheetToUnitId() {
    return this._exchangeOperateService["importFileToUnitId"](
      _0x420332.UNIVER_SHEET,
      (_0x3c61f7) =>
        this._sheetExchangeService["importSheetToUnitId"](_0x3c61f7),
    );
  }
  importSheetToSnapshot() {
    return this._exchangeOperateService["importFileToSnapshot"](
      _0x420332.UNIVER_SHEET,
      (_0x484f2a) =>
        this._sheetExchangeService["importSheetToSnapshot"](_0x484f2a),
    );
  }
  exportSheetByUnitId(
    _0x215f97,
    _0x3fee6b,
    _0x25b8d9 = _0x110f34.XLSX,
    _0x1ca696,
  ) {
    let _0x4dcf6d = this._getCurrentWorkbook();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._sheetExchangeService["exportSheetByUnitId"](
          _0x215f97 ?? _0x4dcf6d.getUnitId(),
          _0x25b8d9,
          _0x1ca696,
        ),
      _0x3fee6b ?? _0x4dcf6d.getSnapshot().name,
      _0x25b8d9,
    );
  }
  exportSheetBySnapshot(_0x57f2c0 = _0x110f34.XLSX, _0x749b91) {
    let _0x22184b = this._getCurrentWorkbook(),
      _0x4bfbe5 =
        this._resourceLoaderService["saveUnit"](_0x22184b.getUnitId()) ??
        _0x22184b.getSnapshot();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._sheetExchangeService["exportSheetBySnapshot"](
          _0x4bfbe5,
          _0x57f2c0,
          _0x749b91,
        ),
      _0x4bfbe5.name,
      _0x57f2c0,
    );
  }
  _getCurrentWorkbook() {
    let _0x66c108 = this._univerInstanceService["getCurrentUnitOfType"](
      _0x420332.UNIVER_SHEET,
    );
    if (!_0x66c108)
      throw Error(
        "No\x20unit\x20of\x20type\x20" +
          _0x420332.UNIVER_SHEET +
          "\x20is\x20currently\x20active.",
      );
    return _0x66c108;
  }
};
R = P(
  [
    N(0, _0x38f2ed(F)),
    N(1, _0x38f2ed(_0x4cd48d)),
    N(2, _0x23ec4f),
    N(3, _0x5a1975),
  ],
  R,
);
function z(_0x152a7c) {
  var _0x6b5b9f, _0x4206fc;
  return {
    selectedId:
      ((_0x6b5b9f = _0x152a7c.getActiveSheet(true)) == null
        ? undefined
        : _0x6b5b9f.getSheetId()) ??
      ((_0x4206fc = _0x152a7c.getSheets()[0]) == null
        ? undefined
        : _0x4206fc.getSheetId()) ??
      "",
    items: _0x152a7c
      .getSheets()
      .map((_0x8af4c0) => ({
        label: _0x8af4c0.getName(),
        value: _0x8af4c0.getSheetId(),
      })),
  };
}
const B = {
    id: "sheets-exchange-client.operation.import-sheet",
    type: _0x1105ad.OPERATION,
    handler: async (_0x183d52) => {
      let _0x5c444d = _0x183d52.get(L);
      return (
        _0x59e115(_0x183d52, _0x420332.UNIVER_SHEET)
          ? await _0x5c444d.importSheetToUnitId()
          : await _0x5c444d.importSheetToSnapshot(),
        true
      );
    },
  },
  V = {
    id: "sheets-exchange-client.operation.export-sheet-by-format",
    type: _0x1105ad.OPERATION,
    handler: async (_0x16a491, _0xc65f01) => {
      if (!_0xc65f01) return false;
      let _0x150a28 = _0x16a491.get(L);
      return (
        _0x59e115(_0x16a491, _0x420332.UNIVER_SHEET)
          ? await _0x150a28.exportSheetByUnitId(
              undefined,
              undefined,
              _0xc65f01.format,
              _0xc65f01.sheetId,
            )
          : await _0x150a28.exportSheetBySnapshot(
              _0xc65f01.format,
              _0xc65f01.sheetId,
            ),
        true
      );
    },
  },
  H = {
    id: "sheets-exchange-client.operation.export-sheet",
    type: _0x1105ad.OPERATION,
    handler: (_0x20d4cd) => {
      let _0x2dfba4 = _0x20d4cd
        .get(_0x23ec4f)
        .getCurrentUnitOfType(_0x420332.UNIVER_SHEET);
      if (!_0x2dfba4) return false;
      let _0x1d4380 = z(_0x2dfba4),
        _0x4caf92 = _0x20d4cd.get(_0xf8c4d0),
        _0x237be4 = _0x20d4cd.get(_0x47b8e2),
        _0x54e541 = _0x20d4cd.get(_0x273944),
        _0x47f10d = null,
        _0x295c22 = () => {
          (_0x47f10d == null || _0x47f10d.dispose(), (_0x47f10d = null));
        };
      return (
        (_0x47f10d = _0x4caf92.open({
          id: "sheets-exchange-client.dialog.export-format",
          title: { title: _0x54e541.t("sheets-exchange-client.download") },
          width: 420,
          draggable: false,
          mask: true,
          maskClosable: false,
          children: {
            label: {
              name: _0x4fb483,
              props: {
                formats: [_0x110f34.XLSX, _0x110f34.CSV, _0x110f34.TSV],
                ..._0x1d4380,
                onCancel: _0x295c22,
                onConfirm: async (_0x3bd898, _0x52c056) => {
                  (await _0x237be4.executeCommand(V.id, {
                    format: _0x3bd898,
                    sheetId: _0x52c056,
                  }),
                    _0x295c22());
                },
              },
            },
          },
          onClose: _0x295c22,
        })),
        true
      );
    },
  },
  U = "sheets-exchange-client.operation.exchange";
function W(_0x2af642) {
  return {
    id: U,
    type: _0x2bf353.SUBITEMS,
    icon: "DirectExportIcon",
    tooltip: "sheets-exchange-client.file",
    hidden$: _0x21ce2f(_0x2af642, _0x420332.UNIVER_SHEET),
    disabled$: _0x5256e9(_0x2af642, { workbookTypes: [_0x5effed] }),
  };
}
function G() {
  return {
    id: B.id,
    type: _0x2bf353.BUTTON,
    title: "sheets-exchange-client.upload",
    icon: "FolderIcon",
  };
}
function K() {
  return {
    id: H.id,
    type: _0x2bf353.BUTTON,
    title: "sheets-exchange-client.download",
    icon: "ExportIcon",
  };
}
const q = {
  [_0x337d2e.OTHERS]: {
    [U]: {
      order: 0.03,
      gridLayout: { row: 1, column: 2, rowSpan: 2, showLabel: true },
      menuItemFactory: W,
      [B.id]: { order: 0, menuItemFactory: G },
      [H.id]: { order: 1, menuItemFactory: K },
    },
  },
};
var J = "@univerjs-pro/sheets-exchange-client",
  Y = "1.0.0-insiders.20260907-70fc579";
let X = class extends _0x4d6c23 {
  constructor(_0x4b5b4a, _0x282a79) {
    (super(),
      (this._commandService = _0x4b5b4a),
      (this._menuManagerService = _0x282a79),
      this._initCommands(),
      this._initMenus());
  }
  _initCommands() {
    [B, H, V].forEach((_0x4f6e87) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x4f6e87));
    });
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](q);
  }
};
X = P([N(0, _0x47b8e2), N(1, _0x19cc3e)], X);
function Z(_0x5f25a1) {
  "@babel/helpers - typeof";
  return (
    (Z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2e0bc8) {
            return typeof _0x2e0bc8;
          }
        : function (_0x550429) {
            return _0x550429 &&
              typeof Symbol == "function" &&
              _0x550429.constructor === Symbol &&
              _0x550429 !== Symbol.prototype
              ? "symbol"
              : typeof _0x550429;
          }),
    Z(_0x5f25a1)
  );
}
function re(_0x4c69f1, _0x25630e) {
  if (Z(_0x4c69f1) != "object" || !_0x4c69f1) return _0x4c69f1;
  var _0x4e5461 = _0x4c69f1[Symbol.toPrimitive];
  if (_0x4e5461 !== undefined) {
    var _0x1b1459 = _0x4e5461.call(_0x4c69f1, _0x25630e || "default");
    if (Z(_0x1b1459) != "object") return _0x1b1459;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x25630e === "string" ? String : Number)(_0x4c69f1);
}
function ie(_0x523171) {
  var _0x52e0f6 = re(_0x523171, "string");
  return Z(_0x52e0f6) == "symbol" ? _0x52e0f6 : _0x52e0f6 + "";
}
function Q(_0x27585c, _0x5793d7, _0x46f42c) {
  return (
    (_0x5793d7 = ie(_0x5793d7)) in _0x27585c
      ? Object.defineProperty(_0x27585c, _0x5793d7, {
          value: _0x46f42c,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x27585c[_0x5793d7] = _0x46f42c),
    _0x27585c
  );
}
let $ = class extends _0x213501 {
  constructor(_0xef38f8 = M, _0x1f9558, _0x408ba0) {
    (super(),
      (this._config = _0xef38f8),
      (this._injector = _0x1f9558),
      (this._configService = _0x408ba0));
    let { menu: _0x3a4bad, ..._0x17ffe7 } = _0x4cdccc({}, M, this._config);
    (_0x3a4bad &&
      this._configService["setConfig"]("menu", _0x3a4bad, { merge: true }),
      this._configService["setConfig"](
        "sheets-exchange-client.config",
        _0x17ffe7,
      ));
  }
  onStarting() {
    [[F, { useClass: I }], [L, { useClass: R }], [X]].forEach((_0x268433) =>
      this._injector["add"](_0x268433),
    );
  }
  onReady() {
    this._injector["get"](X);
  }
};
(Q($, "pluginName", "SHEET_EXCHANGE_CLIENT_PLUGIN"),
  Q($, "packageName", J),
  Q($, "version", Y),
  Q($, "type", _0x420332.UNIVER_SHEET),
  ($ = P(
    [
      _0x568dbe(_0x2ba742, _0x3e9530),
      N(1, _0x38f2ed(_0x3a2499)),
      N(2, _0x2f9974),
    ],
    $,
  )));
export {
  F as ISheetExchangeService,
  q as SheetsExchangeClientMenuSchema,
  $ as UniverSheetsExchangeClientPlugin,
};
