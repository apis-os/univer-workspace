import {
  BASE_TOOLBAR_EXTRA_ACTIONS as _0x50a763,
  IBaseUIStateService as _0x5152d4,
  UniverBasesUIPlugin as _0x3152d1,
} from "@univerjs-pro/bases-ui";
import {
  ClientSnapshotServerService as _0x5d676f,
  EXPORT_FORMAT_DIALOG as _0x4204f4,
  ExchangeBaseExportMode as _0x1a3a91,
  ExchangeBaseFormulaPolicy as _0x2386b4,
  ExchangeBaseImportMode as _0x40dd4d,
  ExchangeFormat as _0x1345f5,
  IExchangeOperateService as _0x3a2e36,
  IExchangeService as _0x5598ee,
  UniverExchangeClientPlugin as _0x5231d9,
  isCurrentUnitLoadedFromServer as _0x5ea3b4,
  transformSheetBlockMetaToString as _0x57eb9a,
  transformWorkbookSnapshotMetaToString as _0x428a54,
} from "@univerjs-pro/exchange-client";
import { UniverLicensePlugin as _0x47a895 } from "@univerjs-pro/license";
import {
  CommandType as _0x6ca2c3,
  DependentOn as _0x394955,
  Disposable as _0x58b158,
  ICommandService as _0x2a8cf9,
  IConfigService as _0x1e9f44,
  IResourceLoaderService as _0x2cc849,
  IUniverInstanceService as _0x3d3b13,
  Inject as _0x5cfd16,
  Injector as _0x2dcd77,
  LocaleService as _0x46736,
  Plugin as _0x4afdf1,
  UniverInstanceType as _0x1b21bb,
  createIdentifier as _0x50e905,
  merge as _0x5d2a98,
} from "@univerjs/core";
import {
  IDialogService as _0x3deae8,
  IUIPartsService as _0x513a29,
  connectInjector as _0x580724,
  useDependency as _0x5d9bd2,
} from "@univerjs/ui";
import {
  b64DecodeUnicode as _0x14f4b4,
  getSheetBlocksFromSnapshot as _0x4f06fc,
  transformBaseDataToSnapshot as _0x8c2d2c,
  transformSnapshotToBaseData as _0x5e9d71,
} from "@univerjs-pro/collaboration";
import {
  Button as _0x2c369e,
  DropdownMenu as _0x2cf2f1,
  Tooltip as _0x192920,
} from "@univerjs/design";
import {
  DirectExportIcon as _0x10c6b0,
  ExportIcon as _0x4fde04,
  FolderIcon as _0x135274,
  MoreDownIcon as _0x3f31b1,
} from "@univerjs/icons";
import { jsx as _0x3b3c16, jsxs as _0x5c1f78 } from "react/jsx-runtime";
var L = "@univerjs-pro/bases-exchange-client",
  R = "1.0.0-insiders.20260907-70fc579";
const z = {
  importSourceMode: _0x40dd4d.AUTO,
  importFormulaPolicy: _0x2386b4.CONVERT_THEN_VALUES,
  exportStructureMode: _0x1a3a91.TABLES,
  exportFormulaPolicy: _0x2386b4.FAIL,
};
function B(_0x33ea3a, _0xd09b63) {
  return function (_0x344fae, _0xd664b2) {
    _0xd09b63(_0x344fae, _0xd664b2, _0x33ea3a);
  };
}
function V(_0x9052b7, _0x4e59e6, _0x578732, _0x2185c2) {
  var _0x38f772 = arguments.length,
    _0x2488d6 =
      _0x38f772 < 3
        ? _0x4e59e6
        : _0x2185c2 === null
          ? (_0x2185c2 = Object.getOwnPropertyDescriptor(_0x4e59e6, _0x578732))
          : _0x2185c2,
    _0x4b617b;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2488d6 = Reflect.decorate(_0x9052b7, _0x4e59e6, _0x578732, _0x2185c2);
  else {
    for (var _0x5add79 = _0x9052b7.length - 1; _0x5add79 >= 0; _0x5add79--)
      (_0x4b617b = _0x9052b7[_0x5add79]) &&
        (_0x2488d6 =
          (_0x38f772 < 3
            ? _0x4b617b(_0x2488d6)
            : _0x38f772 > 3
              ? _0x4b617b(_0x4e59e6, _0x578732, _0x2488d6)
              : _0x4b617b(_0x4e59e6, _0x578732)) || _0x2488d6);
  }
  return (
    _0x38f772 > 3 &&
      _0x2488d6 &&
      Object.defineProperty(_0x4e59e6, _0x578732, _0x2488d6),
    _0x2488d6
  );
}
const H = _0x50e905("bases-exchange-client.base-exchange.service");
let U = class {
  constructor(_0x494ab3, _0xb3af1f) {
    ((this._exchangeService = _0x494ab3), (this._configService = _0xb3af1f));
  }
  importBaseToUnitId(_0x38194f) {
    let _0x2639af = this._createImportOptions();
    return this._exchangeService["importFileToUnitId"](
      _0x38194f,
      _0x1b21bb.UNIVER_BASE,
      { base: _0x2639af },
    );
  }
  async importBaseToSnapshot(_0x30df6d) {
    let _0x71d73e = this._createImportOptions(),
      _0x915497 = await this._exchangeService["importFileToJson"](
        _0x30df6d,
        _0x1b21bb.UNIVER_BASE,
        { base: _0x71d73e },
      );
    return _0x915497
      ? this.transformSnapshotJsonToBaseData(_0x915497)
      : undefined;
  }
  exportBaseByUnitId(_0x4e635b, _0x19bba5 = _0x1345f5.XLSX, _0x219ac7) {
    let _0xc60545 = this._createExportOptions(_0x19bba5, _0x219ac7);
    return this._exchangeService["exportFileByUnitId"](
      _0x4e635b,
      _0x1b21bb.UNIVER_BASE,
      _0x19bba5,
      _0xc60545 ? { base: _0xc60545 } : undefined,
    );
  }
  async exportBaseBySnapshot(_0x3c57c0, _0x10272f = _0x1345f5.XLSX, _0x478faa) {
    let _0xc3a892 = await this.transformBaseDataToSnapshotJson(_0x3c57c0),
      _0x5ce258 = this._createExportOptions(_0x10272f, _0x478faa);
    return this._exchangeService["exportFileBySnapshot"](
      _0xc3a892,
      _0x1b21bb.UNIVER_BASE,
      _0x10272f,
      _0x5ce258 ? { base: _0x5ce258 } : undefined,
    );
  }
  transformSnapshotJsonToBaseData(_0x541c6c) {
    let _0x135b74 = Object.values(_0x541c6c.sheetBlocks || {}).map(
      (_0x217ccb) => ({
        ..._0x217ccb,
        data: _0x217ccb.data
          ? JSON.parse(_0x14f4b4(_0x217ccb.data))
          : undefined,
      }),
    );
    return _0x5e9d71(_0x541c6c.snapshot, _0x135b74);
  }
  async transformBaseDataToSnapshotJson(_0x52a7b7) {
    let _0x3fff26 = { metadata: undefined },
      _0x371666 = new _0x5d676f(),
      { snapshot: _0x52d401 } = await _0x8c2d2c(
        _0x3fff26,
        _0x52a7b7,
        _0x52a7b7.id,
        _0x52a7b7.rev ?? 0,
        _0x371666,
      ),
      _0x36199d = _0x428a54(_0x52d401);
    if (!_0x36199d) throw Error("Failed to transform Base snapshot to string");
    return {
      snapshot: _0x36199d,
      sheetBlocks: _0x57eb9a(await _0x4f06fc(_0x52d401, _0x371666)),
    };
  }
  _getConfig() {
    return (
      this._configService["getConfig"]("bases-exchange-client.config") ?? z
    );
  }
  _createImportOptions() {
    let _0x188fce = this._getConfig();
    return {
      xlsx: {
        baseMode: _0x188fce.importSourceMode,
        baseFormulaPolicy: _0x188fce.importFormulaPolicy,
      },
    };
  }
  _createExportOptions(_0x158cf8, _0x5f075f) {
    if (_0x158cf8 === _0x1345f5.XLSX) {
      let _0x2a2269 = this._getConfig();
      return {
        xlsx: {
          baseExportMode: _0x2a2269.exportStructureMode,
          baseFormulaPolicy: _0x2a2269.exportFormulaPolicy,
        },
      };
    }
    return _0x5f075f ? { csv: { tableId: _0x5f075f } } : undefined;
  }
};
U = V([B(0, _0x5cfd16(_0x5598ee)), B(1, _0x1e9f44)], U);
const W = _0x50e905("bases-exchange-client.base-exchange-operate.service");
let G = class {
  constructor(_0x2ae2e1, _0x508fb5, _0x59546e, _0x1c884e) {
    ((this._baseExchangeService = _0x2ae2e1),
      (this._exchangeOperateService = _0x508fb5),
      (this._univerInstanceService = _0x59546e),
      (this._resourceLoaderService = _0x1c884e));
  }
  importBaseToUnitId() {
    return this._exchangeOperateService["importFileToUnitId"](
      _0x1b21bb.UNIVER_BASE,
      (_0x323fd5) => this._baseExchangeService["importBaseToUnitId"](_0x323fd5),
    );
  }
  importBaseToSnapshot() {
    return this._exchangeOperateService["importFileToSnapshot"](
      _0x1b21bb.UNIVER_BASE,
      (_0x228e34) =>
        this._baseExchangeService["importBaseToSnapshot"](_0x228e34),
    );
  }
  exportBaseByUnitId(_0x3773bd, _0x1a2d4e) {
    let _0x273534 = this._getCurrentBase();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._baseExchangeService["exportBaseByUnitId"](
          _0x273534.getUnitId(),
          _0x3773bd,
          _0x1a2d4e,
        ),
      _0x273534.getSnapshot().name,
      _0x3773bd,
    );
  }
  exportBaseBySnapshot(_0x3f2f06, _0x3c2ea7) {
    let _0x113beb = this._getCurrentBase(),
      _0x43dfff =
        this._resourceLoaderService["saveUnit"](_0x113beb.getUnitId()) ??
        _0x113beb.getSnapshot();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._baseExchangeService["exportBaseBySnapshot"](
          _0x43dfff,
          _0x3f2f06,
          _0x3c2ea7,
        ),
      _0x43dfff.name,
      _0x3f2f06,
    );
  }
  _getCurrentBase() {
    let _0x38edc1 = this._univerInstanceService["getCurrentUnitOfType"](
      _0x1b21bb.UNIVER_BASE,
    );
    if (!_0x38edc1)
      throw Error(
        "No\x20unit\x20of\x20type\x20" +
          _0x1b21bb.UNIVER_BASE +
          " is currently active.",
      );
    return _0x38edc1;
  }
};
G = V(
  [
    B(0, _0x5cfd16(H)),
    B(1, _0x5cfd16(_0x3a2e36)),
    B(2, _0x3d3b13),
    B(3, _0x2cc849),
  ],
  G,
);
function ue(_0x248873, _0x5b2978) {
  var _0x1c9386;
  let _0x54315e = _0x248873.getSnapshot(),
    _0x581895 = _0x54315e.tableOrder["map"](
      (_0x4d42bf) => _0x54315e.tables[_0x4d42bf],
    )
      .filter(Boolean)
      .map((_0x357f33) => ({ label: _0x357f33.name, value: _0x357f33.id }));
  return {
    selectedId: _0x581895.some((_0x374f6c) => _0x374f6c.value === _0x5b2978)
      ? _0x5b2978
      : (((_0x1c9386 = _0x581895[0]) == null ? undefined : _0x1c9386.value) ??
        ""),
    items: _0x581895,
  };
}
const K = {
    id: "bases-exchange-client.operation.import-base",
    type: _0x6ca2c3.OPERATION,
    handler: async (_0x3cfa17) => {
      let _0x435ae2 = _0x3cfa17.get(W);
      return (
        _0x5ea3b4(_0x3cfa17, _0x1b21bb.UNIVER_BASE)
          ? await _0x435ae2.importBaseToUnitId()
          : await _0x435ae2.importBaseToSnapshot(),
        true
      );
    },
  },
  q = {
    id: "bases-exchange-client.operation.export-base-by-format",
    type: _0x6ca2c3.OPERATION,
    handler: async (_0xb1a24c, _0xe23279) => {
      if (!_0xe23279) return false;
      let _0x4dc054 = _0xb1a24c.get(W);
      return (
        _0x5ea3b4(_0xb1a24c, _0x1b21bb.UNIVER_BASE)
          ? await _0x4dc054.exportBaseByUnitId(
              _0xe23279.format,
              _0xe23279.tableId,
            )
          : await _0x4dc054.exportBaseBySnapshot(
              _0xe23279.format,
              _0xe23279.tableId,
            ),
        true
      );
    },
  },
  J = {
    id: "bases-exchange-client.operation.export-base",
    type: _0x6ca2c3.OPERATION,
    handler: (_0xdc2247) => {
      let _0x16f632 = _0xdc2247
        .get(_0x3d3b13)
        .getCurrentUnitOfType(_0x1b21bb.UNIVER_BASE);
      if (!_0x16f632) return false;
      let _0x20347f = ue(
          _0x16f632,
          _0xdc2247.get(_0x5152d4).getState().activeTableId,
        ),
        _0x5975ad = _0xdc2247.get(_0x3deae8),
        _0x144020 = _0xdc2247.get(_0x2a8cf9),
        _0x574552 = _0xdc2247.get(_0x46736),
        _0x49e866 = null,
        _0x431508 = () => {
          (_0x49e866 == null || _0x49e866.dispose(), (_0x49e866 = null));
        };
      return (
        (_0x49e866 = _0x5975ad.open({
          id: "bases-exchange-client.dialog.export-format",
          title: { title: _0x574552.t("bases-exchange-client.download") },
          width: 420,
          draggable: false,
          mask: true,
          maskClosable: false,
          children: {
            label: {
              name: _0x4204f4,
              props: {
                formats: [_0x1345f5.XLSX, _0x1345f5.CSV, _0x1345f5.TSV],
                ..._0x20347f,
                onCancel: _0x431508,
                onConfirm: async (_0x40e34e, _0x13d1eb) => {
                  (await _0x144020.executeCommand(q.id, {
                    format: _0x40e34e,
                    tableId: _0x13d1eb,
                  }),
                    _0x431508());
                },
              },
            },
          },
          onClose: _0x431508,
        })),
        true
      );
    },
  };
function Y() {
  var _0x10e411;
  let _0x5a790e = _0x5d9bd2(_0x2a8cf9),
    _0x578f91 = _0x5d9bd2(_0x1e9f44),
    _0x26dedc = _0x5d9bd2(_0x46736),
    _0x23a78f = _0x26dedc.t("bases-exchange-client.file");
  return _0x3b3c16(_0x192920, {
    title: _0x23a78f,
    placement: "top",
    children: _0x3b3c16(_0x2cf2f1, {
      align: "end",
      sideOffset: 8,
      items: [
        ...((_0x10e411 = _0x578f91.getConfig("menu")) != null &&
        (_0x10e411 = _0x10e411[K.id]) != null &&
        _0x10e411.hidden
          ? []
          : [
              {
                type: "item",
                children: _0x5c1f78("span", {
                  className: "univer-flex univer-items-center univer-gap-2",
                  children: [
                    _0x3b3c16(_0x135274, {}),
                    _0x26dedc.t("bases-exchange-client.upload"),
                  ],
                }),
                onSelect: () => _0x5a790e.executeCommand(K.id),
              },
            ]),
        {
          type: "item",
          children: _0x5c1f78("span", {
            className: "univer-flex univer-items-center univer-gap-2",
            children: [
              _0x3b3c16(_0x4fde04, {}),
              _0x26dedc.t("bases-exchange-client.download"),
            ],
          }),
          onSelect: () => _0x5a790e.executeCommand(J.id),
        },
      ],
      children: _0x5c1f78(_0x2c369e, {
        type: "button",
        variant: "text",
        className: "univer-h-8 univer-gap-1 univer-px-2",
        "aria-label": _0x23a78f,
        children: [
          _0x3b3c16(_0x10c6b0, {}),
          _0x3b3c16(_0x3f31b1, { className: "univer-size-3" }),
        ],
      }),
    }),
  });
}
let X = class extends _0x58b158 {
  constructor(_0x2c2bd3, _0x19b4d7, _0x354dec) {
    (super(),
      (this._commandService = _0x2c2bd3),
      [K, J, q].forEach((_0x12f713) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x12f713));
      }),
      this.disposeWithMe(
        _0x354dec.registerComponent(_0x50a763, () => _0x580724(Y, _0x19b4d7)),
      ));
  }
};
X = V([B(0, _0x2a8cf9), B(1, _0x5cfd16(_0x2dcd77)), B(2, _0x513a29)], X);
function Z(_0x2a3708) {
  "@babel/helpers - typeof";
  return (
    (Z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x15e5c9) {
            return typeof _0x15e5c9;
          }
        : function (_0x3243c3) {
            return _0x3243c3 &&
              typeof Symbol == "function" &&
              _0x3243c3.constructor === Symbol &&
              _0x3243c3 !== Symbol.prototype
              ? "symbol"
              : typeof _0x3243c3;
          }),
    Z(_0x2a3708)
  );
}
function de(_0x8c68be, _0x2ef14c) {
  if (Z(_0x8c68be) != "object" || !_0x8c68be) return _0x8c68be;
  var _0x3a921b = _0x8c68be[Symbol.toPrimitive];
  if (_0x3a921b !== undefined) {
    var _0x553a94 = _0x3a921b.call(_0x8c68be, _0x2ef14c || "default");
    if (Z(_0x553a94) != "object") return _0x553a94;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x2ef14c === "string" ? String : Number)(_0x8c68be);
}
function fe(_0x4bf7e2) {
  var _0x18b2ea = de(_0x4bf7e2, "string");
  return Z(_0x18b2ea) == "symbol" ? _0x18b2ea : _0x18b2ea + "";
}
function Q(_0x2d9a97, _0x1c0bc1, _0x84334f) {
  return (
    (_0x1c0bc1 = fe(_0x1c0bc1)) in _0x2d9a97
      ? Object.defineProperty(_0x2d9a97, _0x1c0bc1, {
          value: _0x84334f,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2d9a97[_0x1c0bc1] = _0x84334f),
    _0x2d9a97
  );
}
let $ = class extends _0x4afdf1 {
  constructor(_0x2f847f = z, _0x799b90, _0xb04dc6) {
    (super(),
      (this._config = _0x2f847f),
      (this._injector = _0x799b90),
      (this._configService = _0xb04dc6));
    let { menu: _0x226147, ..._0x4f60bc } = _0x5d2a98({}, z, this._config);
    (_0x226147 &&
      this._configService["setConfig"]("menu", _0x226147, { merge: true }),
      this._configService["setConfig"](
        "bases-exchange-client.config",
        _0x4f60bc,
      ));
  }
  onStarting() {
    [[H, { useClass: U }], [W, { useClass: G }], [X]].forEach((_0x1f384f) =>
      this._injector["add"](_0x1f384f),
    );
  }
  onReady() {
    this._injector["get"](X);
  }
};
(Q($, "pluginName", "BASES_EXCHANGE_CLIENT_PLUGIN"),
  Q($, "packageName", L),
  Q($, "version", R),
  Q($, "type", _0x1b21bb.UNIVER_BASE),
  ($ = V(
    [
      _0x394955(_0x47a895, _0x3152d1, _0x5231d9),
      B(1, _0x5cfd16(_0x2dcd77)),
      B(2, _0x1e9f44),
    ],
    $,
  )));
export { H as IBaseExchangeService, $ as UniverBasesExchangeClientPlugin };
