Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/bases-ui"),
  t = require("@univerjs-pro/exchange-client"),
  n = require("@univerjs-pro/license"),
  r = require("@univerjs/core"),
  i = require("@univerjs/ui"),
  a = require("@univerjs-pro/collaboration"),
  o = require("@univerjs/design"),
  s = require("@univerjs/icons"),
  c = require("react/jsx-runtime");
var l = "@univerjs-pro/bases-exchange-client",
  u = "1.0.0-insiders.20260907-70fc579";
const d = {
  importSourceMode: t.ExchangeBaseImportMode["AUTO"],
  importFormulaPolicy: t.ExchangeBaseFormulaPolicy["CONVERT_THEN_VALUES"],
  exportStructureMode: t.ExchangeBaseExportMode["TABLES"],
  exportFormulaPolicy: t.ExchangeBaseFormulaPolicy["FAIL"],
};
function f(_0x380c28, _0x285bfb) {
  return function (_0x561750, _0x16989b) {
    _0x285bfb(_0x561750, _0x16989b, _0x380c28);
  };
}
function p(_0x1e9a73, _0x5ccb2f, _0xda2f66, _0x47f5eb) {
  var _0xae3a24 = arguments.length,
    _0x2d3bf7 =
      _0xae3a24 < 3
        ? _0x5ccb2f
        : _0x47f5eb === null
          ? (_0x47f5eb = Object.getOwnPropertyDescriptor(_0x5ccb2f, _0xda2f66))
          : _0x47f5eb,
    _0x8fb3dc;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2d3bf7 = Reflect.decorate(_0x1e9a73, _0x5ccb2f, _0xda2f66, _0x47f5eb);
  else {
    for (var _0x36ad9e = _0x1e9a73.length - 1; _0x36ad9e >= 0; _0x36ad9e--)
      (_0x8fb3dc = _0x1e9a73[_0x36ad9e]) &&
        (_0x2d3bf7 =
          (_0xae3a24 < 3
            ? _0x8fb3dc(_0x2d3bf7)
            : _0xae3a24 > 3
              ? _0x8fb3dc(_0x5ccb2f, _0xda2f66, _0x2d3bf7)
              : _0x8fb3dc(_0x5ccb2f, _0xda2f66)) || _0x2d3bf7);
  }
  return (
    _0xae3a24 > 3 &&
      _0x2d3bf7 &&
      Object.defineProperty(_0x5ccb2f, _0xda2f66, _0x2d3bf7),
    _0x2d3bf7
  );
}
const m = (0, r.createIdentifier)(
  "bases-exchange-client.base-exchange.service",
);
let h = class {
  constructor(_0x56a2cc, _0x27e497) {
    ((this._exchangeService = _0x56a2cc), (this._configService = _0x27e497));
  }
  importBaseToUnitId(_0x214f7c) {
    let _0x3975fe = this._createImportOptions();
    return this._exchangeService["importFileToUnitId"](
      _0x214f7c,
      r.UniverInstanceType["UNIVER_BASE"],
      { base: _0x3975fe },
    );
  }
  async importBaseToSnapshot(_0x55bf7c) {
    let _0x29b07d = this._createImportOptions(),
      _0x3a1391 = await this._exchangeService["importFileToJson"](
        _0x55bf7c,
        r.UniverInstanceType["UNIVER_BASE"],
        { base: _0x29b07d },
      );
    return _0x3a1391
      ? this.transformSnapshotJsonToBaseData(_0x3a1391)
      : undefined;
  }
  exportBaseByUnitId(
    _0x596e44,
    _0x24a6f0 = t.ExchangeFormat["XLSX"],
    _0x50c255,
  ) {
    let _0x5681b3 = this._createExportOptions(_0x24a6f0, _0x50c255);
    return this._exchangeService["exportFileByUnitId"](
      _0x596e44,
      r.UniverInstanceType["UNIVER_BASE"],
      _0x24a6f0,
      _0x5681b3 ? { base: _0x5681b3 } : undefined,
    );
  }
  async exportBaseBySnapshot(
    _0x197e49,
    _0x11a904 = t.ExchangeFormat["XLSX"],
    _0x13bac8,
  ) {
    let _0xd81f43 = await this.transformBaseDataToSnapshotJson(_0x197e49),
      _0x610c4f = this._createExportOptions(_0x11a904, _0x13bac8);
    return this._exchangeService["exportFileBySnapshot"](
      _0xd81f43,
      r.UniverInstanceType["UNIVER_BASE"],
      _0x11a904,
      _0x610c4f ? { base: _0x610c4f } : undefined,
    );
  }
  transformSnapshotJsonToBaseData(_0x3acf0d) {
    let _0x17ee6e = Object.values(_0x3acf0d.sheetBlocks || {}).map(
      (_0x3a39c0) => ({
        ..._0x3a39c0,
        data: _0x3a39c0.data
          ? JSON.parse((0, a.b64DecodeUnicode)(_0x3a39c0.data))
          : undefined,
      }),
    );
    return (0, a.transformSnapshotToBaseData)(_0x3acf0d.snapshot, _0x17ee6e);
  }
  async transformBaseDataToSnapshotJson(_0x230243) {
    let _0x2a1900 = { metadata: undefined },
      _0x31920d = new t["ClientSnapshotServerService"](),
      { snapshot: _0x596d07 } = await (0, a.transformBaseDataToSnapshot)(
        _0x2a1900,
        _0x230243,
        _0x230243.id,
        _0x230243.rev ?? 0,
        _0x31920d,
      ),
      _0x372e43 = (0, t.transformWorkbookSnapshotMetaToString)(_0x596d07);
    if (!_0x372e43)
      throw Error(
        "Failed\x20to\x20transform\x20Base\x20snapshot\x20to\x20string",
      );
    return {
      snapshot: _0x372e43,
      sheetBlocks: (0, t.transformSheetBlockMetaToString)(
        await (0, a.getSheetBlocksFromSnapshot)(_0x596d07, _0x31920d),
      ),
    };
  }
  _getConfig() {
    return (
      this._configService["getConfig"]("bases-exchange-client.config") ?? d
    );
  }
  _createImportOptions() {
    let _0x779cf1 = this._getConfig();
    return {
      xlsx: {
        baseMode: _0x779cf1.importSourceMode,
        baseFormulaPolicy: _0x779cf1.importFormulaPolicy,
      },
    };
  }
  _createExportOptions(_0x58941c, _0x5a2beb) {
    if (_0x58941c === t.ExchangeFormat["XLSX"]) {
      let _0xebafee = this._getConfig();
      return {
        xlsx: {
          baseExportMode: _0xebafee.exportStructureMode,
          baseFormulaPolicy: _0xebafee.exportFormulaPolicy,
        },
      };
    }
    return _0x5a2beb ? { csv: { tableId: _0x5a2beb } } : undefined;
  }
};
h = p([f(0, (0, r.Inject)(t.IExchangeService)), f(1, r.IConfigService)], h);
const g = (0, r.createIdentifier)(
  "bases-exchange-client.base-exchange-operate.service",
);
let _ = class {
  constructor(_0x345d13, _0x379f92, _0x27e9c1, _0x39fb97) {
    ((this._baseExchangeService = _0x345d13),
      (this._exchangeOperateService = _0x379f92),
      (this._univerInstanceService = _0x27e9c1),
      (this._resourceLoaderService = _0x39fb97));
  }
  importBaseToUnitId() {
    return this._exchangeOperateService["importFileToUnitId"](
      r.UniverInstanceType["UNIVER_BASE"],
      (_0xd57a61) => this._baseExchangeService["importBaseToUnitId"](_0xd57a61),
    );
  }
  importBaseToSnapshot() {
    return this._exchangeOperateService["importFileToSnapshot"](
      r.UniverInstanceType["UNIVER_BASE"],
      (_0x202e71) =>
        this._baseExchangeService["importBaseToSnapshot"](_0x202e71),
    );
  }
  exportBaseByUnitId(_0x52b8a6, _0xbe21d3) {
    let _0x4954e7 = this._getCurrentBase();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._baseExchangeService["exportBaseByUnitId"](
          _0x4954e7.getUnitId(),
          _0x52b8a6,
          _0xbe21d3,
        ),
      _0x4954e7.getSnapshot().name,
      _0x52b8a6,
    );
  }
  exportBaseBySnapshot(_0x455701, _0x13ee90) {
    let _0x5b89ac = this._getCurrentBase(),
      _0x2b2516 =
        this._resourceLoaderService["saveUnit"](_0x5b89ac.getUnitId()) ??
        _0x5b89ac.getSnapshot();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._baseExchangeService["exportBaseBySnapshot"](
          _0x2b2516,
          _0x455701,
          _0x13ee90,
        ),
      _0x2b2516.name,
      _0x455701,
    );
  }
  _getCurrentBase() {
    let _0x2d765f = this._univerInstanceService["getCurrentUnitOfType"](
      r.UniverInstanceType["UNIVER_BASE"],
    );
    if (!_0x2d765f)
      throw Error(
        "No\x20unit\x20of\x20type\x20" +
          r.UniverInstanceType["UNIVER_BASE"] +
          " is currently active.",
      );
    return _0x2d765f;
  }
};
_ = p(
  [
    f(0, (0, r.Inject)(m)),
    f(1, (0, r.Inject)(t.IExchangeOperateService)),
    f(2, r.IUniverInstanceService),
    f(3, r.IResourceLoaderService),
  ],
  _,
);
function v(_0x503445, _0x2cd70b) {
  var _0x494caf;
  let _0x2555bf = _0x503445.getSnapshot(),
    _0x18888b = _0x2555bf.tableOrder["map"](
      (_0x4376b0) => _0x2555bf.tables[_0x4376b0],
    )
      .filter(Boolean)
      .map((_0x2f0772) => ({ label: _0x2f0772.name, value: _0x2f0772.id }));
  return {
    selectedId: _0x18888b.some((_0x20de18) => _0x20de18.value === _0x2cd70b)
      ? _0x2cd70b
      : (((_0x494caf = _0x18888b[0]) == null ? undefined : _0x494caf.value) ??
        ""),
    items: _0x18888b,
  };
}
const y = {
    id: "bases-exchange-client.operation.import-base",
    type: r.CommandType["OPERATION"],
    handler: async (_0xa0178b) => {
      let _0x44e243 = _0xa0178b.get(g);
      return (
        (0, t.isCurrentUnitLoadedFromServer)(
          _0xa0178b,
          r.UniverInstanceType["UNIVER_BASE"],
        )
          ? await _0x44e243.importBaseToUnitId()
          : await _0x44e243.importBaseToSnapshot(),
        true
      );
    },
  },
  b = {
    id: "bases-exchange-client.operation.export-base-by-format",
    type: r.CommandType["OPERATION"],
    handler: async (_0x115ae9, _0x55b12c) => {
      if (!_0x55b12c) return false;
      let _0x5c6426 = _0x115ae9.get(g);
      return (
        (0, t.isCurrentUnitLoadedFromServer)(
          _0x115ae9,
          r.UniverInstanceType["UNIVER_BASE"],
        )
          ? await _0x5c6426.exportBaseByUnitId(
              _0x55b12c.format,
              _0x55b12c.tableId,
            )
          : await _0x5c6426.exportBaseBySnapshot(
              _0x55b12c.format,
              _0x55b12c.tableId,
            ),
        true
      );
    },
  },
  x = {
    id: "bases-exchange-client.operation.export-base",
    type: r.CommandType["OPERATION"],
    handler: (_0x38c52d) => {
      let _0x417db7 = _0x38c52d
        .get(r.IUniverInstanceService)
        .getCurrentUnitOfType(r.UniverInstanceType["UNIVER_BASE"]);
      if (!_0x417db7) return false;
      let _0x303129 = v(
          _0x417db7,
          _0x38c52d.get(e.IBaseUIStateService).getState().activeTableId,
        ),
        _0x59cef4 = _0x38c52d.get(i.IDialogService),
        _0x374e18 = _0x38c52d.get(r.ICommandService),
        _0x13218c = _0x38c52d.get(r.LocaleService),
        _0x36f21f = null,
        _0x448690 = () => {
          (_0x36f21f == null || _0x36f21f.dispose(), (_0x36f21f = null));
        };
      return (
        (_0x36f21f = _0x59cef4.open({
          id: "bases-exchange-client.dialog.export-format",
          title: { title: _0x13218c.t("bases-exchange-client.download") },
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
                ..._0x303129,
                onCancel: _0x448690,
                onConfirm: async (_0xa6a22b, _0x238881) => {
                  (await _0x374e18.executeCommand(b.id, {
                    format: _0xa6a22b,
                    tableId: _0x238881,
                  }),
                    _0x448690());
                },
              },
            },
          },
          onClose: _0x448690,
        })),
        true
      );
    },
  };
function S() {
  var _0xf61fc4;
  let _0x45a50a = (0, i.useDependency)(r.ICommandService),
    _0x2341a3 = (0, i.useDependency)(r.IConfigService),
    _0x4e036a = (0, i.useDependency)(r.LocaleService),
    _0x42eb0b = _0x4e036a.t("bases-exchange-client.file");
  return (0, c.jsx)(o.Tooltip, {
    title: _0x42eb0b,
    placement: "top",
    children: (0, c.jsx)(o.DropdownMenu, {
      align: "end",
      sideOffset: 8,
      items: [
        ...((_0xf61fc4 = _0x2341a3.getConfig("menu")) != null &&
        (_0xf61fc4 = _0xf61fc4[y.id]) != null &&
        _0xf61fc4.hidden
          ? []
          : [
              {
                type: "item",
                children: (0, c.jsxs)("span", {
                  className:
                    "univer-flex\x20univer-items-center\x20univer-gap-2",
                  children: [
                    (0, c.jsx)(s.FolderIcon, {}),
                    _0x4e036a.t("bases-exchange-client.upload"),
                  ],
                }),
                onSelect: () => _0x45a50a.executeCommand(y.id),
              },
            ]),
        {
          type: "item",
          children: (0, c.jsxs)("span", {
            className: "univer-flex univer-items-center univer-gap-2",
            children: [
              (0, c.jsx)(s.ExportIcon, {}),
              _0x4e036a.t("bases-exchange-client.download"),
            ],
          }),
          onSelect: () => _0x45a50a.executeCommand(x.id),
        },
      ],
      children: (0, c.jsxs)(o.Button, {
        type: "button",
        variant: "text",
        className: "univer-h-8 univer-gap-1 univer-px-2",
        "aria-label": _0x42eb0b,
        children: [
          (0, c.jsx)(s.DirectExportIcon, {}),
          (0, c.jsx)(s.MoreDownIcon, { className: "univer-size-3" }),
        ],
      }),
    }),
  });
}
let C = class extends r.Disposable {
  constructor(_0x380704, _0x58829b, _0x2afe62) {
    (super(),
      (this._commandService = _0x380704),
      [y, x, b].forEach((_0x30d225) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x30d225));
      }),
      this.disposeWithMe(
        _0x2afe62.registerComponent(e.BASE_TOOLBAR_EXTRA_ACTIONS, () =>
          (0, i.connectInjector)(S, _0x58829b),
        ),
      ));
  }
};
C = p(
  [
    f(0, r.ICommandService),
    f(1, (0, r.Inject)(r.Injector)),
    f(2, i.IUIPartsService),
  ],
  C,
);
function w(_0x2d8e6f) {
  "@babel/helpers - typeof";
  return (
    (w =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x47b7b9) {
            return typeof _0x47b7b9;
          }
        : function (_0x1a59e4) {
            return _0x1a59e4 &&
              typeof Symbol == "function" &&
              _0x1a59e4.constructor === Symbol &&
              _0x1a59e4 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1a59e4;
          }),
    w(_0x2d8e6f)
  );
}
function T(_0x597fdc, _0x1e9481) {
  if (w(_0x597fdc) != "object" || !_0x597fdc) return _0x597fdc;
  var _0x37e2b1 = _0x597fdc[Symbol.toPrimitive];
  if (_0x37e2b1 !== undefined) {
    var _0x41599e = _0x37e2b1.call(_0x597fdc, _0x1e9481 || "default");
    if (w(_0x41599e) != "object") return _0x41599e;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x1e9481 === "string" ? String : Number)(_0x597fdc);
}
function E(_0x1c81b7) {
  var _0x387e72 = T(_0x1c81b7, "string");
  return w(_0x387e72) == "symbol" ? _0x387e72 : _0x387e72 + "";
}
function D(_0x2bc733, _0x575a3f, _0x28b329) {
  return (
    (_0x575a3f = E(_0x575a3f)) in _0x2bc733
      ? Object.defineProperty(_0x2bc733, _0x575a3f, {
          value: _0x28b329,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2bc733[_0x575a3f] = _0x28b329),
    _0x2bc733
  );
}
let O = class extends r.Plugin {
  constructor(_0x4fe7fe = d, _0x2d7852, _0x44e9da) {
    (super(),
      (this._config = _0x4fe7fe),
      (this._injector = _0x2d7852),
      (this._configService = _0x44e9da));
    let { menu: _0x60bb6b, ..._0x3ca1c9 } = (0, r.merge)({}, d, this._config);
    (_0x60bb6b &&
      this._configService["setConfig"]("menu", _0x60bb6b, { merge: true }),
      this._configService["setConfig"](
        "bases-exchange-client.config",
        _0x3ca1c9,
      ));
  }
  onStarting() {
    [[m, { useClass: h }], [g, { useClass: _ }], [C]].forEach((_0x53da0d) =>
      this._injector["add"](_0x53da0d),
    );
  }
  onReady() {
    this._injector["get"](C);
  }
};
(D(O, "pluginName", "BASES_EXCHANGE_CLIENT_PLUGIN"),
  D(O, "packageName", l),
  D(O, "version", u),
  D(O, "type", r.UniverInstanceType["UNIVER_BASE"]),
  (O = p(
    [
      (0, r.DependentOn)(
        n.UniverLicensePlugin,
        e.UniverBasesUIPlugin,
        t.UniverExchangeClientPlugin,
      ),
      f(1, (0, r.Inject)(r.Injector)),
      f(2, r.IConfigService),
    ],
    O,
  )),
  (exports.IBaseExchangeService = m),
  Object.defineProperty(exports, "UniverBasesExchangeClientPlugin", {
    enumerable: true,
    get: function () {
      return O;
    },
  }));
