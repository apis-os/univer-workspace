Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/ui"),
  t = require("@univerjs-pro/sheets-pivot"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets"),
  i = require("@univerjs/design"),
  a = require("@univerjs/engine-formula"),
  o = require("@univerjs/sheets-formula-ui"),
  s = require("react"),
  c = require("rxjs"),
  l = require("@univerjs-pro/engine-pivot"),
  u = require("react/jsx-runtime"),
  d = require("@univerjs/sheets-ui"),
  f = require("@univerjs-pro/license"),
  p = require("@univerjs/engine-render"),
  m = require("@univerjs/icons"),
  h = require("@univerjs/docs"),
  g = require("@univerjs/docs-ui");
const _ = "UNIVER_SHEET_PIVOT_PANEL",
  v = "UNIVER_SHEET_PIVOT_PANEL_ID",
  y = "UNIVER_SHEET_PIVOT_FILTER_PANEL",
  b = "UNIVER_SHEET_PIVOT_FILTER_PANEL_ID",
  x = "UNIVER_SHEET_PIVOT_FIELD_SETTING",
  S = "UNIVER_SHEET_PIVOT_FIELD_SETTING_ID",
  C = "UNIVER_SHEET_PIVOT_FIELD_NUMFMT",
  w = "UNIVER_SHEET_PIVOT_FIELD_NUMFMT_ID",
  T = "UNIVER_SHEET_PIVOT_SHOW_DATA_AS_DIALOG",
  E = "UNIVER_SHEET_PIVOT_VALUE_FILTER_DIALOG";
function D(_0x58e190, _0x656b34, _0x1bb004) {
  let _0x1d17a0 = _0x1bb004.fieldIds,
    { fieldsConfig: _0x223104 } = _0x656b34,
    {
      rowFields: _0x37d29e,
      columnFields: _0x2cdf75,
      valueFields: _0x4d6714,
      filterFields: _0x1450d0,
      hiddenFields: _0x20eb07,
      dimension: _0x55498b,
      measure: _0x1f0688,
      valueIndex: _0x1fed12,
      valuePosition: _0x2369e5,
    } = _0x223104,
    _0x573f50 = new Set();
  [
    ..._0x37d29e,
    ..._0x2cdf75,
    ..._0x4d6714,
    ..._0x1450d0,
    ..._0x20eb07,
  ].forEach((_0x1858e2) => {
    let _0x40724f = _0x55498b[_0x1858e2] || _0x1f0688[_0x1858e2];
    _0x40724f && _0x573f50.add(_0x40724f.dataFieldId);
  });
  let _0x58b93d = _0x1d17a0.map((_0x13ec91) => {
      let _0x251427 = _0x1bb004.fields[_0x13ec91];
      return {
        checked: _0x573f50.has(_0x13ec91),
        dataFieldId: _0x251427.id,
        id: _0x251427.id,
        name: _0x251427.name,
        type: _0x251427.fieldDataType,
        pivotTableId: _0x58e190,
      };
    }),
    _0x1cb50b = _0x37d29e.flatMap((_0x223c5c) => {
      let _0x36fd8e = _0x55498b[_0x223c5c];
      return _0x36fd8e
        ? [
            {
              dataFieldId: _0x36fd8e.dataFieldId,
              tableFieldId: _0x36fd8e.id,
              displayName: _0x36fd8e.displayName,
            },
          ]
        : [];
    }),
    _0x44dc6b = _0x2cdf75.flatMap((_0x43f67a) => {
      let _0x38f4a0 = _0x55498b[_0x43f67a];
      return _0x38f4a0
        ? [
            {
              dataFieldId: _0x38f4a0.dataFieldId,
              tableFieldId: _0x38f4a0.id,
              displayName: _0x38f4a0.displayName,
            },
          ]
        : [];
    }),
    _0x1e156f = _0x4d6714.flatMap((_0x42387d) => {
      let _0xe3aa50 = _0x1f0688[_0x42387d];
      return _0xe3aa50
        ? [
            {
              dataFieldId: _0xe3aa50.dataFieldId,
              tableFieldId: _0xe3aa50.id,
              displayName: _0xe3aa50.displayName,
              format: _0xe3aa50.format,
              subTotalType: _0xe3aa50.subtotal,
            },
          ]
        : [];
    }),
    _0x533578 = _0x1450d0.flatMap((_0x420dce) => {
      let _0x51f274 = _0x55498b[_0x420dce];
      return _0x51f274
        ? [
            {
              dataFieldId: _0x51f274.dataFieldId,
              tableFieldId: _0x51f274.id,
              displayName: _0x51f274.displayName,
            },
          ]
        : [];
    });
  return (
    _0x1e156f.length > 1 &&
      (_0x2369e5 === l.PivotTableValuePositionEnum["Row"]
        ? _0x1cb50b
        : _0x44dc6b
      ).splice(_0x1fed12, 0, {
        dataFieldId: "",
        tableFieldId: "PivotMultipleValueId",
        displayName: "ΣValue",
      }),
    {
      sourceList: _0x58b93d,
      sourceRange: _0x656b34.sourceRangeInfo,
      rowFields: _0x1cb50b,
      columnFields: _0x44dc6b,
      valueFields: _0x1e156f,
      filterFields: _0x533578,
      positionInfo: _0x656b34.targetCellInfo,
    }
  );
}
const O = {
  type: n.CommandType["OPERATION"],
  id: "sheet.operation.open-pivot-table-panel",
  async handler(_0x145959, _0x5051b4) {
    let _0x288588 = _0x5051b4 == null ? undefined : _0x5051b4.pivotTableId;
    if (!_0x288588) return false;
    let _0x460ead = _0x145959.get(e.ISidebarService),
      _0x29323f = _0x145959.get(n.IUniverInstanceService),
      _0x2adc1d = _0x145959.get(n.LocaleService),
      _0x4be616 = _0x145959.get(t.SheetsPivotTableConfigModel),
      _0x531d2b = (0, r.getSheetCommandTarget)(_0x29323f);
    if (!_0x531d2b) return false;
    let { unitId: _0x11a2f8, subUnitId: _0x502eae } = _0x531d2b,
      _0x549b1e = _0x4be616.getPivotTableConfig(
        _0x11a2f8,
        _0x502eae,
        _0x288588,
      ),
      _0x3c79b7 = _0x4be616.getCollection(_0x11a2f8, _0x288588);
    if (!_0x549b1e || !_0x3c79b7) return false;
    let _0x43c024 = D(_0x288588, _0x549b1e, _0x3c79b7),
      _0x598503 = {
        header: { title: _0x2adc1d.t("sheets-pivot-ui.title") },
        id: v,
        children: {
          label: _,
          panelInfo: _0x43c024,
          version: Math.random(),
          setVersion: () => Math.random(),
          pivotTableId: _0x288588,
          unitId: _0x11a2f8,
          subUnitId: _0x502eae,
        },
        width: 346,
      };
    return (_0x460ead.open(_0x598503), true);
  },
};
function k(_0x5de495) {
  "@babel/helpers - typeof";
  return (
    (k =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x579b5b) {
            return typeof _0x579b5b;
          }
        : function (_0x3e870) {
            return _0x3e870 &&
              typeof Symbol == "function" &&
              _0x3e870.constructor === Symbol &&
              _0x3e870 !== Symbol.prototype
              ? "symbol"
              : typeof _0x3e870;
          }),
    k(_0x5de495)
  );
}
function A(_0x18d4be, _0x340171) {
  if (k(_0x18d4be) != "object" || !_0x18d4be) return _0x18d4be;
  var _0x1fa7dc = _0x18d4be[Symbol.toPrimitive];
  if (_0x1fa7dc !== undefined) {
    var _0x28bf3b = _0x1fa7dc.call(_0x18d4be, _0x340171 || "default");
    if (k(_0x28bf3b) != "object") return _0x28bf3b;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x340171 === "string" ? String : Number)(_0x18d4be);
}
function j(_0x5262cf) {
  var _0x4d350d = A(_0x5262cf, "string");
  return k(_0x4d350d) == "symbol" ? _0x4d350d : _0x4d350d + "";
}
function M(_0x47e5d6, _0x206b5e, _0x186e2a) {
  return (
    (_0x206b5e = j(_0x206b5e)) in _0x47e5d6
      ? Object.defineProperty(_0x47e5d6, _0x206b5e, {
          value: _0x186e2a,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x47e5d6[_0x206b5e] = _0x186e2a),
    _0x47e5d6
  );
}
function N(_0x3f393f, _0x15252f) {
  return function (_0x48dde3, _0x138e5c) {
    _0x15252f(_0x48dde3, _0x138e5c, _0x3f393f);
  };
}
function P(_0x1f8da6, _0x2a94e9, _0x27fd33, _0x59a347) {
  var _0x49de14 = arguments.length,
    _0x2b4269 =
      _0x49de14 < 3
        ? _0x2a94e9
        : _0x59a347 === null
          ? (_0x59a347 = Object.getOwnPropertyDescriptor(_0x2a94e9, _0x27fd33))
          : _0x59a347,
    _0x2da61a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2b4269 = Reflect.decorate(_0x1f8da6, _0x2a94e9, _0x27fd33, _0x59a347);
  else {
    for (var _0x146b49 = _0x1f8da6.length - 1; _0x146b49 >= 0; _0x146b49--)
      (_0x2da61a = _0x1f8da6[_0x146b49]) &&
        (_0x2b4269 =
          (_0x49de14 < 3
            ? _0x2da61a(_0x2b4269)
            : _0x49de14 > 3
              ? _0x2da61a(_0x2a94e9, _0x27fd33, _0x2b4269)
              : _0x2da61a(_0x2a94e9, _0x27fd33)) || _0x2b4269);
  }
  return (
    _0x49de14 > 3 &&
      _0x2b4269 &&
      Object.defineProperty(_0x2a94e9, _0x27fd33, _0x2b4269),
    _0x2b4269
  );
}
let F = class extends n.Disposable {
  constructor(
    _0x934961,
    _0x3b5484,
    _0x510739,
    _0x6d8dc9,
    _0x3204ff,
    _0x174230,
    _0x3d424d,
    _0x4b4f06,
  ) {
    (super(),
      (this._sheetsSelectionsService = _0x934961),
      (this._univerInstanceService = _0x3b5484),
      (this._sheetsPivotTableAdaptorModel = _0x510739),
      (this._commandService = _0x6d8dc9),
      (this._sidebarService = _0x3204ff),
      (this._dialogService = _0x174230),
      (this._injector = _0x3d424d),
      (this._permissionService = _0x4b4f06),
      M(this, "_pivotTableId", undefined),
      M(this, "_pivotTablePanelVisible$", new c.Subject()),
      M(
        this,
        "pivotTablePanelVisible$",
        this._pivotTablePanelVisible$["asObservable"](),
      ),
      M(this, "_isRangeSelectorFocus", false),
      M(this, "_isRangeSelector2Focus", false),
      this._initPanelOpen(),
      this._initSheetChange());
  }
  setIsRangeSelectorFocus(_0x40aae6) {
    this._isRangeSelectorFocus = _0x40aae6;
  }
  setIsRangeSelector2Focus(_0x5470c2) {
    this._isRangeSelector2Focus = _0x5470c2;
  }
  _setPivotTableId(_0x3c882b) {
    this._pivotTableId = _0x3c882b;
  }
  _closePivotPanel() {
    this._isRangeSelectorFocus ||
      this._isRangeSelector2Focus ||
      (this._setPivotTableId(undefined), this._sidebarService["close"](v));
  }
  _initPanelOpen() {
    let _0x5cbd20 = this._univerInstanceService["getCurrentUnitOfType"](
      n.UniverInstanceType["UNIVER_SHEET"],
    );
    if (_0x5cbd20) {
      let _0x261272 = _0x5cbd20.activeSheet$;
      (this.disposeWithMe(
        (0, c.merge)(
          _0x261272,
          this._sheetsSelectionsService["selectionMoveEnd$"],
        ).subscribe(() => {
          let _0x3af55a =
            this._sheetsSelectionsService["getCurrentSelections"]();
          if (!_0x3af55a) return;
          let _0x2aaadd = _0x3af55a[_0x3af55a.length - 1];
          if (!_0x2aaadd) return;
          let _0x4dc802 = _0x2aaadd.primary;
          if (!_0x4dc802) return;
          let _0x53ad12 = this._univerInstanceService["getCurrentUnitOfType"](
              n.UniverInstanceType["UNIVER_SHEET"],
            ),
            _0x297c1d =
              _0x53ad12 == null ? undefined : _0x53ad12.getActiveSheet();
          if (!_0x53ad12 || !_0x297c1d) return;
          let _0xbde0d = _0x53ad12.getUnitId(),
            _0xeadbc9 = _0x297c1d.getSheetId(),
            _0x2fca3a = this._sheetsPivotTableAdaptorModel[
              "getPivotTableIdByCell"
            ](_0xbde0d, _0xeadbc9, _0x4dc802.startRow, _0x4dc802.startColumn);
          if (_0x2fca3a) {
            var _0x1737f8, _0x3be89b;
            let _0x37cfca = (0, t.unionPivotViewRange)(
                (_0x1737f8 = this._sheetsPivotTableAdaptorModel[
                  "getPivotItemRenderInfoCache"
                ](_0xbde0d, _0xeadbc9, _0x2fca3a)) == null
                  ? undefined
                  : _0x1737f8.rangesInfo,
              ),
              _0x4cf682 = (0, r.checkRangesEditablePermission)(
                this._injector,
                _0xbde0d,
                _0xeadbc9,
                _0x37cfca,
              ),
              _0x3e0463 =
                (_0x3be89b = this._permissionService["getPermissionPoint"](
                  new r["WorksheetPivotTablePermission"](_0xbde0d, _0xeadbc9)
                    .id,
                )) == null
                  ? undefined
                  : _0x3be89b.value;
            if (!_0x4cf682 || !_0x3e0463) return;
            (this._setPivotTableId(_0x2fca3a),
              this._pivotTablePanelVisible$["next"](true),
              this._commandService["executeCommand"](O.id, {
                pivotTableId: _0x2fca3a,
              }));
          } else this._closePivotPanel();
        }),
      ),
        this.disposeWithMe(
          this._commandService["onCommandExecuted"]((_0x4cd301) => {
            _0x4cd301.id === t.RemovePivotTableMutation["id"] &&
              _0x4cd301.params["pivotTableId"] === this._pivotTableId &&
              this._sidebarService["close"](v);
          }),
        ));
    }
  }
  _initSheetChange() {
    let _0x3d71cc = this._univerInstanceService["getCurrentUnitOfType"](
      n.UniverInstanceType["UNIVER_SHEET"],
    );
    (_0x3d71cc &&
      this.disposeWithMe(
        _0x3d71cc.sheetDisposed$["subscribe"](() => {
          this._sidebarService["close"]();
        }),
      ),
      this.disposeWithMe(
        this._sidebarService["sidebarOptions$"].subscribe((_0x28d4f3) => {
          if (_0x28d4f3.id === "UNIVER_SHEET_PIVOT_PANEL_ID") {
            let _0x5212a6 = !!_0x28d4f3.visible;
            (this._pivotTablePanelVisible$["next"](_0x5212a6),
              _0x5212a6 || this._dialogService["close"](S));
          }
        }),
      ),
      this.disposeWithMe(
        this._dialogService["getDialogs$"]().subscribe((_0x4850bf) => {
          let _0x529b12 = _0x4850bf.find(
            (_0x42436c) => _0x42436c.id === G.componentKey,
          );
          _0x529b12 &&
            _0x529b12.open === false &&
            this._dialogService["close"](G.componentKey);
        }),
      ));
  }
};
F = P(
  [
    N(0, (0, n.Inject)(r.SheetsSelectionsService)),
    N(1, (0, n.Inject)(n.IUniverInstanceService)),
    N(2, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)),
    N(3, (0, n.Inject)(n.ICommandService)),
    N(4, (0, n.Inject)(e.ISidebarService)),
    N(5, (0, n.Inject)(e.IDialogService)),
    N(6, (0, n.Inject)(n.Injector)),
    N(7, (0, n.Inject)(n.IPermissionService)),
  ],
  F,
);
const I = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.open-pivot-table-filter-panel",
    async handler(_0x530585, _0xbf2888) {
      if (!_0xbf2888) return false;
      let {
          row: _0x52f799,
          col: _0x3e65da,
          unitId: _0x2c08b5,
          subUnitId: _0x54e91f,
          tableFieldId: _0x6d977d,
          pivotTableId: _0x4292cc,
        } = _0xbf2888,
        _0x3dfbb3 = _0x530585.get(t.SheetsPivotTableAdaptorModel),
        _0x38e357 =
          _0x4292cc ||
          _0x3dfbb3.getPivotTableIdByCell(
            _0x2c08b5,
            _0x54e91f,
            _0x52f799,
            _0x3e65da,
          );
      if (!_0x38e357) return false;
      let _0x231578 = _0x530585.get(t.SheetsPivotRPCService),
        _0x304682 = _0x3dfbb3.getPivotItemRenderInfoCache(
          _0x2c08b5,
          _0x54e91f,
          _0x38e357,
        );
      if (!(_0x304682 != null && _0x304682.rangesInfo)) return false;
      let _0x3ea33a = _0x3dfbb3.getPivotTableCellData(
          _0x2c08b5,
          _0x54e91f,
          _0x52f799,
          _0x3e65da,
        ),
        _0x168109 = (
          await _0x231578.getPivotDisplayConfig({
            unitId: _0x2c08b5,
            subUnitId: _0x54e91f,
            pivotTableId: _0x38e357,
            params: {
              type: t.PivotDisplayDataType["Filter"],
              filter: {
                row: _0x52f799,
                col: _0x3e65da,
                tableFieldId: _0x6d977d,
                cellData: _0x3ea33a,
                pivotItemRenderInfoCache: _0x304682,
              },
            },
          })
        ).result["filter"];
      if (!_0x168109) return false;
      let _0xc80f4c = _0x530585.get(e.IDialogService),
        _0x3b818f = {
          id: b,
          draggable: true,
          mask: false,
          maskClosable: false,
          width: 336,
          dialogStyles: {
            header: { padding: "16px 16px 0", height: 0 },
            body: { padding: "0 16px 16px" },
          },
          closable: false,
          children: {
            label: y,
            unitId: _0x2c08b5,
            subUnitId: _0x54e91f,
            key: _0x52f799 + "-" + _0x3e65da + "-" + (_0x6d977d || ""),
            filterItemInfo: _0x168109,
          },
          onClose: () => {
            _0xc80f4c.close(b);
          },
        };
      return (_0xc80f4c.open(_0x3b818f), true);
    },
  },
  L = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.open-pivot-table-field-setting-panel",
    handler(_0x2eed11, _0x25059b) {
      if (!_0x25059b) return false;
      let _0x5e10b9 = _0x2eed11.get(n.LocaleService),
        {
          tableFieldId: _0x3a0e0a,
          pivotTableId: _0x16eefb,
          unitId: _0x13d2bc,
          subUnitId: _0x1955f8,
          tableFieldInfo: _0x48a8aa,
          dataFieldInfo: _0xff69a8,
        } = _0x25059b,
        _0x287d61 = _0x2eed11.get(e.IDialogService),
        _0x37bfa6 = {
          id: S,
          title: { title: _0x5e10b9.t("sheets-pivot-ui.fieldSettings") },
          draggable: true,
          mask: false,
          maskClosable: false,
          width: 400,
          children: {
            label: x,
            tableFieldId: _0x3a0e0a,
            pivotTableId: _0x16eefb,
            tableFieldInfo: _0x48a8aa,
            dataFieldInfo: _0xff69a8,
            unitId: _0x13d2bc,
            subUnitId: _0x1955f8,
            version: Math.random(),
            key: "field-setting-" + (_0x3a0e0a || ""),
            closeFn: () => {
              _0x287d61.close(S);
            },
          },
          onClose: () => {
            _0x287d61.close(S);
          },
        };
      return (_0x287d61.open(_0x37bfa6), true);
    },
  },
  R = [
    { label: "1930-08-05", suffix: "yyyy-MM-dd" },
    { label: "1930/08/05", suffix: "yyyy/MM/dd" },
    { label: "1930年08月05日", suffix: 'yyyy"年"MM"月"dd"日"' },
    { label: "08-05", suffix: "MM-dd" },
    { label: "8月5日", suffix: 'M"月"d"日"' },
    { label: "13:30:30", suffix: "h:mm:ss" },
    { label: "13:30", suffix: "h:mm" },
    { label: "下午01:30", suffix: "A/P\x20hh:mm" },
    { label: "下午1:30", suffix: "A/P h:mm" },
    { label: "下午1:30:30", suffix: "A/P h:mm:ss" },
    { label: "08-05 下午 01:30", suffix: "MM-dd A/P hh:mm" },
  ],
  z = [
    { label: "(1,235)", suffix: "#,##0_);(#,##0)" },
    { label: "(1,235) ", suffix: "#,##0_);[Red](#,##0)", color: "red" },
    { label: "1,234.56", suffix: "#,##0.00_);#,##0.00" },
    { label: "1,234.56", suffix: "#,##0.00_);[Red]#,##0.00", color: "red" },
    { label: "-1,234.56", suffix: "#,##0.00_);-#,##0.00" },
    { label: "-1,234.56", suffix: "#,##0.00_);[Red]-#,##0.00", color: "red" },
  ],
  B = [
    {
      label: (_0x4e0ee8) => _0x4e0ee8 + "1,235",
      suffix: (_0x287798) =>
        "\x22" + _0x287798 + "\x22#,##0.00_);\x22" + _0x287798 + '"#,##0.00',
    },
    {
      label: (_0x31a977) => _0x31a977 + "1,235",
      suffix: (_0x4a9ec4) =>
        "\x22" + _0x4a9ec4 + '"#,##0.00_);[Red]"' + _0x4a9ec4 + '"#,##0.00',
      color: "red",
    },
    {
      label: (_0x40f653) => "(" + _0x40f653 + "1,235)",
      suffix: (_0x5c9157) =>
        "\x22" + _0x5c9157 + "\x22#,##0.00_);(\x22" + _0x5c9157 + '"#,##0.00)',
    },
    {
      label: (_0x53f5e8) => "(" + _0x53f5e8 + "1,235)",
      suffix: (_0x5de8d9) =>
        "\x22" + _0x5de8d9 + '"#,##0.00_);[Red]("' + _0x5de8d9 + '"#,##0.00)',
      color: "red",
    },
    {
      label: (_0x1b5729) => "-" + _0x1b5729 + "1,235",
      suffix: (_0x44270c) =>
        "\x22" +
        _0x44270c +
        "\x22#,##0.00_);-\x22" +
        _0x44270c +
        "\x22#,##0.00",
    },
    {
      label: (_0x593d8c) => "-" + _0x593d8c + "1,235",
      suffix: (_0x3a2618) =>
        "\x22" + _0x3a2618 + '"#,##0.00_);[Red]-"' + _0x3a2618 + '"#,##0.00',
      color: "red",
    },
  ],
  V = "PivotMultipleValueId";
function ee(_0x3c62de, _0xdb7a48) {
  let _0x24a2ea = (0, t.isolateTextForBidiContext)(_0xdb7a48, _0x3c62de);
  return _0x3c62de.includes("{0}")
    ? _0x3c62de.replace("{0}", _0x24a2ea)
    : "" + _0x3c62de + _0x24a2ea;
}
const te = (_0x75d961) => {
  switch (_0x75d961) {
    case "filter":
      return l.PivotTableFiledAreaEnum["Filter"];
    case "row":
      return l.PivotTableFiledAreaEnum["Row"];
    case "column":
      return l.PivotTableFiledAreaEnum["Column"];
    case "value":
      return l.PivotTableFiledAreaEnum["Value"];
    default:
      return l.PivotTableFiledAreaEnum["Row"];
  }
};
function ne(_0x48723b, _0x54ae25) {
  switch (_0x54ae25.rangeType || n.RANGE_TYPE["NORMAL"]) {
    case n.RANGE_TYPE["NORMAL"]:
      return {
        startRow: _0x54ae25.startRow,
        startColumn: _0x54ae25.startColumn,
        endRow: _0x54ae25.endRow,
        endColumn: _0x54ae25.endColumn,
      };
    case n.RANGE_TYPE["ROW"]:
      return {
        startRow: _0x54ae25.startRow,
        startColumn: 0,
        endRow: _0x54ae25.endRow,
        endColumn: _0x48723b.getColumnCount() - 1,
      };
    case n.RANGE_TYPE["COLUMN"]:
      return {
        startRow: 0,
        startColumn: _0x54ae25.startColumn,
        endRow: _0x48723b.getRowCount() - 1,
        endColumn: _0x54ae25.endColumn,
      };
    case n.RANGE_TYPE["ALL"]:
      return {
        startRow: 0,
        startColumn: 0,
        endRow: _0x48723b.getRowCount() - 1,
        endColumn: _0x48723b.getColumnCount() - 1,
      };
  }
}
function re(_0x105c57, _0x2dbac5) {
  if (!_0x2dbac5 || !_0x105c57 || _0x2dbac5.endRow - _0x2dbac5.startRow <= 0)
    return 1;
  let {
      startRow: _0x1d5d51,
      startColumn: _0x59b9b9,
      endRow: _0x558c80,
      endColumn: _0x334f6b,
    } = ne(_0x105c57, _0x2dbac5),
    _0x5a3d35 = _0x105c57.getCellMatrix(),
    _0x1a854e = false;
  for (let _0x2743c4 = _0x1d5d51; _0x2743c4 <= _0x558c80; _0x2743c4++) {
    for (let _0x409a87 = _0x59b9b9; _0x409a87 <= _0x334f6b; _0x409a87++)
      if (_0x5a3d35.getValue(_0x2743c4, _0x409a87) != null) {
        _0x1a854e = true;
        break;
      }
    if (_0x1a854e) break;
  }
  return _0x1a854e ? 2 : 0;
}
async function ie(_0x3a4019, _0x447fb9, _0x1a27bb) {
  let {
      commandService: _0x4bf72c,
      pivotTableInfo: _0x54eee9,
      pivotTableId: _0x2922a3,
      unitId: _0x1effe0,
      subUnitId: _0x338b46,
    } = _0x3a4019,
    _0x1d08cb = [],
    {
      rowFields: _0x4be65e,
      columnFields: _0x229da2,
      filterFields: _0x2b74da,
      valueFields: _0x3d1d88,
    } = _0x54eee9,
    _0x3eb338 = [..._0x4be65e, ..._0x229da2, ..._0x2b74da, ..._0x3d1d88];
  (_0x447fb9 === "PivotMultipleValueId" &&
    _0x3d1d88.forEach((_0x46696d) => {
      _0x1d08cb.push(_0x46696d.tableFieldId);
    }),
    _0x1a27bb === "source" &&
      _0x3eb338.forEach((_0x3147df) => {
        _0x3147df.dataFieldId === _0x447fb9 &&
          _0x1d08cb.push(_0x3147df.tableFieldId);
      }),
    _0x1a27bb !== "source" &&
      _0x3eb338.find((_0x390ec4) => _0x390ec4.tableFieldId === _0x447fb9) &&
      _0x1d08cb.push(_0x447fb9),
    await _0x4bf72c.executeCommand(t.RemovePivotFieldCommand["id"], {
      pivotTableId: _0x2922a3,
      fieldIds: _0x1d08cb,
      unitId: _0x1effe0,
      subUnitId: _0x338b46,
    }));
}
async function ae(_0x2ff788, _0x17dbe0, _0x423d3a, _0x4cd9f1, _0x5a63fa) {
  let _0x42aa37 = {
    unitId: _0x4cd9f1,
    subUnitId: _0x5a63fa,
    token: _0x17dbe0,
    dataRangeInfo: _0x423d3a,
  };
  await _0x2ff788.executeCommand(
    t.UpdatePivotTableSourceRangeCommand["id"],
    _0x42aa37,
  );
}
const oe = (_0x51f4d4, _0x6fba69) => {
  let {
      rowFields: _0x26d142,
      columnFields: _0x2af457,
      filterFields: _0x276512,
    } = _0x51f4d4,
    _0x3fb2f2 = [..._0x26d142, ..._0x2af457, ..._0x276512],
    _0x4cdf75 = [];
  return (
    _0x3fb2f2.forEach((_0x1ea391) => {
      _0x1ea391.dataFieldId === _0x6fba69 &&
        _0x4cdf75.push(_0x1ea391.tableFieldId);
    }),
    _0x4cdf75
  );
};
async function se(_0x67dd66, _0xa1d176, _0x1f3a41, _0x5b410a, _0x46a65b) {
  if (_0x1f3a41 === "source" && _0x5b410a === "source") return;
  let _0x3b264f = _0xa1d176 === V,
    {
      commandService: _0xf600c6,
      pivotTableInfo: _0x7f3fd1,
      pivotTableId: _0x67b03d,
      unitId: _0x2a005a,
      subUnitId: _0x47c69c,
    } = _0x67dd66;
  if (_0x1f3a41 === "source" && _0x5b410a !== "source") {
    let { sourceList: _0x504cee } = _0x7f3fd1,
      _0x4aeed1 = _0x504cee.find((_0x1a4335) => _0x1a4335.id === _0xa1d176);
    if (_0x4aeed1) {
      let _0x10b0b6 = oe(_0x7f3fd1, _0xa1d176);
      if (_0x5b410a !== "value" && _0x10b0b6.length > 0) {
        let _0x50a0b6 = _0x10b0b6[0];
        await _0xf600c6.executeCommand(t.MovePivotFieldCommand["id"], {
          pivotTableId: _0x67b03d,
          fieldId: _0x50a0b6,
          area: te(_0x5b410a),
          index: _0x46a65b,
          unitId: _0x2a005a,
          subUnitId: _0x47c69c,
        });
      } else
        await _0xf600c6.executeCommand(t.AddPivotFieldCommand["id"], {
          pivotTableId: _0x67b03d,
          dataFieldId: _0x4aeed1.dataFieldId,
          fieldArea: te(_0x5b410a),
          index: _0x46a65b,
          unitId: _0x2a005a,
          subUnitId: _0x47c69c,
        });
    }
  }
  if (_0x1f3a41 !== "source" && _0x5b410a === "source") {
    let {
        rowFields: _0x358020,
        columnFields: _0x247e50,
        filterFields: _0x3bde2c,
        valueFields: _0x4a20d1,
      } = _0x7f3fd1,
      _0xc3dcdb = [..._0x358020, ..._0x247e50, ..._0x3bde2c, ..._0x4a20d1],
      _0x5b61f5 = [];
    (_0x3b264f
      ? _0x4a20d1.forEach((_0x215bbc) => {
          _0x5b61f5.push(_0x215bbc.tableFieldId);
        })
      : _0xc3dcdb.find((_0xa5d8c) => _0xa5d8c.tableFieldId === _0xa1d176) &&
        _0x5b61f5.push(_0xa1d176),
      await H(_0x67dd66, _0x5b61f5));
    return;
  }
  _0x1f3a41 !== "source" &&
    _0x5b410a !== "source" &&
    (await le(_0x67dd66, _0xa1d176, _0x1f3a41, _0x5b410a, _0x46a65b));
}
async function H(_0x1c8c99, _0x5e0457) {
  let {
    commandService: _0x1e9c89,
    pivotTableId: _0x5b25cf,
    unitId: _0x398a7a,
    subUnitId: _0x39e781,
  } = _0x1c8c99;
  await _0x1e9c89.executeCommand(t.RemovePivotFieldCommand["id"], {
    pivotTableId: _0x5b25cf,
    fieldIds: _0x5e0457,
    unitId: _0x398a7a,
    subUnitId: _0x39e781,
  });
}
async function ce(_0x3ce30b, _0x177573, _0x12c314) {
  let {
    commandService: _0x420d10,
    pivotTableId: _0x5116e6,
    unitId: _0x92779e,
    subUnitId: _0x39b6b8,
  } = _0x3ce30b;
  await _0x420d10.executeCommand(t.UpdatePivotValuePositionCommand["id"], {
    pivotTableId: _0x5116e6,
    position: _0x177573,
    index: _0x12c314,
    unitId: _0x92779e,
    subUnitId: _0x39b6b8,
  });
}
async function le(_0x23d174, _0x1f4c9b, _0x41606c, _0x42f37a, _0x1ad235) {
  let _0x53d1ec = _0x1f4c9b === V,
    {
      commandService: _0x29b674,
      pivotTableInfo: _0x4d28c2,
      pivotTableId: _0x4753dd,
      unitId: _0x4dea3c,
      subUnitId: _0x3ba827,
    } = _0x23d174;
  if (_0x53d1ec) {
    let _0x2dac33 = te(_0x42f37a);
    (_0x2dac33 === l.PivotTableFiledAreaEnum["Row"] ||
      _0x2dac33 === l.PivotTableFiledAreaEnum["Column"]) &&
      (await _0x29b674.executeCommand(t.UpdatePivotValuePositionCommand["id"], {
        pivotTableId: _0x4753dd,
        position:
          _0x2dac33 === l.PivotTableFiledAreaEnum["Row"]
            ? l.PivotTableValuePositionEnum["Row"]
            : l.PivotTableValuePositionEnum["Column"],
        index: _0x1ad235,
        unitId: _0x4dea3c,
        subUnitId: _0x3ba827,
      }));
    return;
  }
  let {
      rowFields: _0x4aaac2,
      columnFields: _0x425a6c,
      filterFields: _0x54a7e6,
      valueFields: _0x21888c,
    } = _0x4d28c2,
    _0x42e338 = [..._0x4aaac2, ..._0x425a6c, ..._0x54a7e6, ..._0x21888c].find(
      (_0x50360a) => _0x50360a.tableFieldId === _0x1f4c9b,
    );
  if (_0x42e338) {
    let _0x2d5e41 = [..._0x4aaac2, ..._0x425a6c, ..._0x54a7e6];
    if (
      _0x41606c === "value" &&
      _0x42f37a !== "value" &&
      _0x2d5e41.find(
        (_0x3436c8) => _0x3436c8.dataFieldId === _0x42e338.dataFieldId,
      )
    ) {
      await H(_0x23d174, [_0x1f4c9b]);
      return;
    }
    await _0x29b674.executeCommand(t.MovePivotFieldCommand["id"], {
      pivotTableId: _0x4753dd,
      fieldId: _0x1f4c9b,
      area: te(_0x42f37a),
      index: _0x1ad235,
      unitId: _0x4dea3c,
      subUnitId: _0x3ba827,
    });
  }
}
function ue(_0x45ce6a, _0x1148f0, _0x477c47, _0x3deceb, _0x26563f) {
  _0x45ce6a.executeCommand(I.id, {
    row: -1,
    col: -1,
    unitId: _0x1148f0,
    subUnitId: _0x477c47,
    tableFieldId: _0x26563f,
    pivotTableId: _0x3deceb,
  });
}
function de(_0x2fa2ad, _0x3f48df, _0xd7329c, _0x576cf5, _0x47a275, _0x408a99) {
  let {
      sourceList: _0x59d00f,
      rowFields: _0x5bba07,
      columnFields: _0x5bb444,
      valueFields: _0x3a541b,
      filterFields: _0x268b15,
    } = _0x408a99,
    _0x34912e = [..._0x5bba07, ..._0x5bb444, ..._0x3a541b, ..._0x268b15].find(
      (_0x4b9c5b) => _0x4b9c5b.tableFieldId === _0xd7329c,
    ),
    _0x376799 = _0x59d00f.find(
      (_0x1e0d7a) =>
        _0x1e0d7a.id ===
        (_0x34912e == null ? undefined : _0x34912e.dataFieldId),
    );
  if (_0x34912e && _0x376799) {
    let _0x48c7b9 = {
      tableFieldId: _0xd7329c,
      pivotTableId: _0x3f48df,
      unitId: _0x576cf5,
      subUnitId: _0x47a275,
      tableFieldInfo: _0x34912e,
      dataFieldInfo: _0x376799,
    };
    _0x2fa2ad.executeCommand(L.id, _0x48c7b9);
  }
}
const fe = [
    {
      type: l.PivotSubtotalTypeEnum["average"],
      textKey: "sheets-pivot-ui.subtotal.average",
    },
    {
      type: l.PivotSubtotalTypeEnum["count"],
      textKey: "sheets-pivot-ui.subtotal.count",
    },
    {
      type: l.PivotSubtotalTypeEnum["countNums"],
      textKey: "sheets-pivot-ui.subtotal.countNums",
    },
    {
      type: l.PivotSubtotalTypeEnum["max"],
      textKey: "sheets-pivot-ui.subtotal.max",
    },
    {
      type: l.PivotSubtotalTypeEnum["min"],
      textKey: "sheets-pivot-ui.subtotal.min",
    },
    {
      type: l.PivotSubtotalTypeEnum["product"],
      textKey: "sheets-pivot-ui.subtotal.product",
    },
    {
      type: l.PivotSubtotalTypeEnum["stdDev"],
      textKey: "sheets-pivot-ui.subtotal.stdDev",
    },
    {
      type: l.PivotSubtotalTypeEnum["stdDevp"],
      textKey: "sheets-pivot-ui.subtotal.stdDevp",
    },
    {
      type: l.PivotSubtotalTypeEnum["sum"],
      textKey: "sheets-pivot-ui.subtotal.sum",
    },
    {
      type: l.PivotSubtotalTypeEnum["var"],
      textKey: "sheets-pivot-ui.subtotal.var",
    },
    {
      type: l.PivotSubtotalTypeEnum["varp"],
      textKey: "sheets-pivot-ui.subtotal.varp",
    },
  ],
  U = (_0x1a8568, _0x25a6d5 = 0) =>
    _0x1a8568
      ? (n.numfmt["getFormatInfo"](_0x1a8568).maxDecimals ?? _0x25a6d5)
      : _0x25a6d5,
  pe = (_0x34c994) =>
    Array(Math.min(Math.max(0, Number(_0x34c994)), 30))
      .fill(0)
      .join(""),
  W = (_0x22b5b0, _0x5c32e9) =>
    _0x22b5b0
      .split(";")
      .map((_0x1d20ed) =>
        /\.0?/["test"](_0x1d20ed)
          ? _0x1d20ed.replace(
              /\.0*/g,
              "" + (_0x5c32e9 > 0 ? "." : "") + pe(Number(_0x5c32e9 || 0)),
            )
          : /0[^0]?/["test"](_0x1d20ed)
            ? _0x1d20ed.replace(
                /0[^0]+|0$/,
                "0" + (_0x5c32e9 > 0 ? "." : "") + pe(Number(_0x5c32e9 || 0)),
              )
            : _0x1d20ed,
      )
      .join(";"),
  me = (_0x17b61f) =>
    n.currencySymbols["find"]((_0xeb4b52) => _0x17b61f.includes(_0xeb4b52)),
  he = (_0xc622d) => !_0xc622d,
  ge = (_0x1ad089) => !!me(_0x1ad089) && _0x1ad089.startsWith("_("),
  _e = (_0x4727b5) => !!me(_0x4727b5) && !_0x4727b5.startsWith("_("),
  ve = () =>
    R.map((_0x5df7b9) => ({ label: _0x5df7b9.label, value: _0x5df7b9.suffix })),
  ye = (_0x6fc6d8) => {
    let _0x3a178c = n.numfmt["getFormatInfo"](_0x6fc6d8);
    return (
      ve()
        .map((_0x59d24a) => _0x59d24a.value)
        .includes(_0x6fc6d8) ||
      ["date", "datetime", "time"].includes(_0x3a178c.type)
    );
  },
  be = () =>
    z.map((_0x3ac387) => ({
      label: _0x3ac387.label,
      value: _0x3ac387.suffix,
      color: _0x3ac387.color,
    })),
  xe = (_0x550858) =>
    be().some((_0x23eb11) =>
      (0, n.isPatternEqualWithoutDecimal)(_0x23eb11.value, _0x550858),
    ),
  Se = (_0x1696be, _0x38e694) => {
    switch (_0x38e694) {
      case l.PivotTableFiledAreaEnum["Row"]:
        return _0x1696be.rowFields["length"];
      case l.PivotTableFiledAreaEnum["Column"]:
        return _0x1696be.columnFields["length"];
      case l.PivotTableFiledAreaEnum["Filter"]:
        return _0x1696be.filterFields["length"];
      case l.PivotTableFiledAreaEnum["Value"]:
        return _0x1696be.valueFields["length"];
      default:
        return 0;
    }
  },
  Ce = (_0x242e94, _0x1d0b4d, _0x4732bf) => {
    for (let _0x4fbda6 of [
      "sheets-pivot-ui.averageName",
      "sheets-pivot-ui.countName",
      "sheets-pivot-ui.countNumsName",
      "sheets-pivot-ui.maxName",
      "sheets-pivot-ui.minName",
      "sheets-pivot-ui.productName",
      "sheets-pivot-ui.stdDevName",
      "sheets-pivot-ui.stdDevpName",
      "sheets-pivot-ui.sumName",
      "sheets-pivot-ui.varName",
      "sheets-pivot-ui.varpName",
    ]) {
      let _0x32248c = _0x4732bf[_0x4fbda6];
      if (
        _0x32248c + (0, t.isolateTextForBidiContext)(_0x242e94, _0x32248c) ===
          _0x1d0b4d ||
        _0x32248c + _0x242e94 === _0x1d0b4d
      )
        return true;
    }
    return false;
  },
  we = (_0x215194, _0x4ee06f, _0x5735bc) => {
    let _0x3fa639 = "";
    switch (_0x5735bc) {
      case l.PivotSubtotalTypeEnum["average"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.averageName"];
        break;
      case l.PivotSubtotalTypeEnum["count"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.countName"];
        break;
      case l.PivotSubtotalTypeEnum["countNums"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.countNumsName"];
        break;
      case l.PivotSubtotalTypeEnum["max"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.maxName"];
        break;
      case l.PivotSubtotalTypeEnum["min"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.minName"];
        break;
      case l.PivotSubtotalTypeEnum["product"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.productName"];
        break;
      case l.PivotSubtotalTypeEnum["stdDev"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.stdDevName"];
        break;
      case l.PivotSubtotalTypeEnum["stdDevp"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.stdDevpName"];
        break;
      case l.PivotSubtotalTypeEnum["sum"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.sumName"];
        break;
      case l.PivotSubtotalTypeEnum["var"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.varName"];
        break;
      case l.PivotSubtotalTypeEnum["varp"]:
        _0x3fa639 = _0x4ee06f["sheets-pivot-ui.varpName"];
        break;
      default:
        return _0x215194;
    }
    return _0x3fa639 + (0, t.isolateTextForBidiContext)(_0x215194, _0x3fa639);
  };
function Te(_0x595578, _0x3d46c1) {
  if (!_0x595578) return "NotFilter";
  if ((0, l.isManualPivotFilter)(_0x595578)) {
    var _0x29b9e9;
    return _0x595578.isAll ||
      ((_0x29b9e9 = _0x3d46c1.items) == null ? undefined : _0x29b9e9.length) ===
        _0x595578.list["length"]
      ? "NotFilter"
      : "HasFilter";
  }
  return "NotFilter";
}
const Ee = (_0x48713c) => {
    let [_0x28d335, _0x39513e] = (0, s.useState)(false),
      _0x1f4a23 = (0, e.useDependency)(F);
    return (
      (0, s.useEffect)(() => {
        _0x1f4a23.setIsRangeSelector2Focus(_0x28d335);
      }, [_0x28d335, _0x1f4a23]),
      (0, u.jsx)(o.RangeSelector, {
        ..._0x48713c,
        onFocusChange: (_0x1aef65) => {
          var _0x3ac59f;
          ((_0x3ac59f = _0x48713c.onFocusChange) == null ||
            _0x3ac59f.call(_0x48713c, _0x1aef65),
            _0x39513e(_0x1aef65));
        },
      })
    );
  },
  De = (_0x3fbf06, _0x1351d4, _0x43cbbd, _0x41076e, _0x412fc6, _0x7b1db8) =>
    (0, u.jsx)(Ee, {
      unitId: _0x3fbf06,
      subUnitId: _0x1351d4,
      initialValue: _0x41076e,
      onChange: (_0x74f93b, _0xf230d0) => _0x43cbbd(_0xf230d0),
      maxRangeCount: 1,
      supportAcrossSheet: true,
      keepSheetReference: true,
    }),
  Oe = (_0x35d3a8, _0x5a91f2) => {
    switch (_0x35d3a8) {
      case 1:
        return _0x5a91f2.t("sheets-pivot-ui.msg.invalidSize");
      case 0:
        return _0x5a91f2.t("sheets-pivot-ui.msg.emptySourceRange");
      default:
        return "";
    }
  };
function G(_0x5a382e) {
  let {
      unitId: _0x63a74c,
      sourceRange: _0x55e443,
      positionRange: _0x8c00d2,
      sourceSheetName: _0x4d895c,
      positionSheetName: _0x54990,
      onConfirm: _0x190ba1,
      onCancel: _0x559759,
    } = _0x5a382e,
    _0x18ae55 = (0, e.useDependency)(n.LocaleService),
    _0x305b45 = (0, e.useDependency)(n.IUniverInstanceService),
    _0x3fb1cc = _0x18ae55.getDirection(),
    _0x4dec2f = _0x305b45.getUnit(_0x63a74c),
    _0x27e494 = (0, s.useMemo)(
      () => _0x4dec2f.getActiveSheet().getSheetId(),
      [_0x4dec2f],
    ),
    [_0xcabd, _0x1fb96d] = (0, s.useState)(_0x55e443),
    [_0xd8990d, _0x2d74d1] = (0, s.useState)(_0x8c00d2),
    [_0x2ad5dc, _0x2d238e] = (0, s.useState)(_0x4d895c),
    [_0x3e18df, _0x1635a2] = (0, s.useState)(_0x54990),
    _0x3025a9 = (0, s.useRef)(undefined),
    [_0x5e8a78, _0x2fbb16] = (0, s.useState)(),
    [_0x5e7f5b, _0x3fbfaf] = (0, s.useState)(t.PositionType["New"]),
    [_0x61d260, _0x54a22c] = (0, s.useState)(true),
    [_0x45a13c, _0x1a4447] = (0, s.useState)(true),
    [_0x56c86f, _0x5292ce] = (0, s.useState)(undefined);
  (0, s.useEffect)(() => {
    let _0x556bcb = re(_0x4dec2f.getSheetBySheetName(_0x2ad5dc), _0xcabd);
    (_0x1a4447(_0x556bcb === 2), _0x5292ce(Oe(_0x556bcb, _0x18ae55)));
  }, [_0xcabd, _0x2ad5dc, _0x4dec2f, _0x18ae55]);
  let _0x36b7b8 = (_0x2fa47c) => {
      if ((0, a.serializeRangeWithSheet)(_0x2ad5dc, _0xcabd) === _0x2fa47c)
        return;
      let _0x2f61bc = _0x2fa47c
        .split(",")
        .filter((_0x4e9fb8) => !!_0x4e9fb8)
        .map(a.deserializeRangeWithSheet);
      if (Array.isArray(_0x2f61bc) && _0x2f61bc.length > 0) {
        let { range: _0x15a4ab, sheetName: _0x3c6475 } = _0x2f61bc[0];
        (_0x1fb96d(_0x15a4ab), _0x2d238e(_0x3c6475));
      }
      _0x2f61bc[0] ||
        _0x5292ce(_0x18ae55.t("sheets-pivot-ui.msg.emptySourceRange"));
    },
    _0x65169f = De(
      _0x63a74c,
      _0x27e494,
      (_0x7e1342) => {
        if (
          _0xd8990d &&
          (0, a.serializeRangeWithSheet)(_0x3e18df, _0xd8990d) === _0x7e1342
        )
          return;
        let _0x5f57b7 = _0x7e1342
          .split(",")
          .filter((_0x148c58) => !!_0x148c58)
          .map(a.deserializeRangeWithSheet);
        if (_0x5f57b7.length === 0) {
          _0x2d74d1(null);
          return;
        }
        let _0x15e0a7 = _0x5f57b7[0];
        (_0x2d74d1(_0x15e0a7.range),
          _0x1635a2(_0x15e0a7.sheetName || _0x4d895c),
          _0x15e0a7.sheetName === _0x4d895c &&
          n.Rectangle["intersects"](_0x15e0a7.range, _0xcabd)
            ? _0x54a22c(false)
            : _0x54a22c(true));
      },
      _0xd8990d ? (0, a.serializeRangeWithSheet)(_0x3e18df, _0xd8990d) : "",
      false,
      _0x5e8a78,
    ),
    _0x592303 = () =>
      !!(
        _0xcabd &&
        _0xd8990d &&
        _0x2ad5dc &&
        _0x3e18df &&
        _0x5e7f5b === t.PositionType["Existing"] &&
        _0x61d260 &&
        _0x45a13c
      ) ||
      !!(
        _0xcabd &&
        _0x2ad5dc &&
        _0x5e7f5b === t.PositionType["New"] &&
        _0x45a13c
      );
  return (
    (0, s.useEffect)(() => {
      _0x2fbb16(_0x3025a9.current);
    }, []),
    (0, u.jsxs)("div", {
      ref: _0x3025a9,
      dir: _0x3fb1cc,
      children: [
        (0, u.jsx)("div", {
          className: "univer-mb-2 univer-h-5 univer-text-sm univer-font-medium",
          children: _0x18ae55.t("sheets-pivot-ui.dialog.source.sourceData"),
        }),
        De(
          _0x63a74c,
          _0x27e494,
          _0x36b7b8,
          (0, a.serializeRangeWithSheet)(_0x2ad5dc, _0xcabd),
          true,
          _0x5e8a78,
        ),
        _0x56c86f &&
          (0, u.jsx)("div", {
            className:
              "univer-mt-2 univer-h-5 univer-text-xs univer-text-red-400",
            children: _0x56c86f,
          }),
        (0, u.jsx)("div", {
          className:
            "univer-mb-2 univer-mt-5 univer-h-5 univer-text-sm univer-font-medium",
          children: _0x18ae55.t("sheets-pivot-ui.dialog.source.position"),
        }),
        (0, u.jsxs)(i.RadioGroup, {
          value: _0x5e7f5b,
          onChange: (_0x35771f) => _0x3fbfaf(_0x35771f),
          className: "univer-flex univer-flex-col univer-gap-2",
          children: [
            (0, u.jsx)(i.Radio, {
              value: t.PositionType["New"],
              children: _0x18ae55.t("sheets-pivot-ui.dialog.source.newSheet"),
            }),
            (0, u.jsx)(i.Radio, {
              value: t.PositionType["Existing"],
              children: _0x18ae55.t(
                "sheets-pivot-ui.dialog.source.existingSheet",
              ),
            }),
          ],
        }),
        _0x5e7f5b === t.PositionType["Existing"] &&
          (0, u.jsxs)(u.Fragment, {
            children: [
              _0x65169f,
              !_0x61d260 &&
                (0, u.jsx)("span", {
                  className: "univer-h-5 univer-text-sm univer-text-red-400",
                  children: _0x18ae55.t(
                    "sheets-pivot-ui.dialog.source.intersect",
                  ),
                }),
            ],
          }),
        (0, u.jsx)("footer", {
          className: "univer-mt-5",
          children: (0, u.jsxs)(i.ActionRow, {
            className: "univer-flex univer-justify-end univer-gap-2",
            children: [
              (0, u.jsx)(i.Button, {
                onClick: () => _0x559759(),
                children: _0x18ae55.t("sheets-pivot-ui.dialog.cancel"),
              }),
              (0, u.jsx)(i.Button, {
                variant: "primary",
                onClick: () => {
                  _0x592303() &&
                    (_0x5e7f5b === t.PositionType["Existing"]
                      ? _0x190ba1({
                          sourceRange: _0xcabd,
                          sourceSheetName: _0x2ad5dc,
                          positionRange: _0xd8990d,
                          positionSheetName: _0x3e18df,
                          positionType: _0x5e7f5b,
                        })
                      : _0x190ba1({
                          sourceRange: _0xcabd,
                          sourceSheetName: _0x2ad5dc,
                          positionType: _0x5e7f5b,
                        }));
                },
                children: _0x18ae55.t("sheets-pivot-ui.dialog.ok"),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
G.componentKey = "univer.sheet.pivot-table-range-selector";
const K = {
  type: n.CommandType["OPERATION"],
  id: "sheet.operation.open-pivot-table-range-selector-panel",
  async handler(_0x31664f) {
    var _0x3670f1;
    let _0x3b1de8 = _0x31664f.get(n.IUniverInstanceService),
      _0x4823d7 = _0x31664f.get(n.ICommandService),
      _0x4d8cec = (0, r.getSheetCommandTarget)(_0x3b1de8),
      _0x527547 = _0x31664f.get(n.LocaleService);
    if (!_0x4d8cec) return false;
    let {
        unitId: _0x5105af,
        subUnitId: _0x46d714,
        worksheet: _0x571760,
        workbook: _0x4d0941,
      } = _0x4d8cec,
      _0x178f3f = _0x31664f
        .get(r.SheetsSelectionsService)
        .getCurrentLastSelection(),
      _0x17b56e = (_0x178f3f == null ? undefined : _0x178f3f.range) ?? {
        startRow: 0,
        endRow: 0,
        startColumn: 0,
        endColumn: 0,
        rangeType: n.RANGE_TYPE["NORMAL"],
      },
      _0x3760b8 = await ke(
        _0x31664f,
        _0x5105af,
        _0x46d714,
        (0, r.isSingleCellSelection)(_0x178f3f)
          ? (0, r.expandToContinuousRange)(
              _0x17b56e,
              { up: true, left: true, right: true, down: true },
              _0x571760,
            )
          : _0x17b56e,
        _0x571760.getName(),
      );
    if (!_0x3760b8) return false;
    let _0x8ad960;
    if (_0x3760b8.positionType === t.PositionType["New"])
      _0x8ad960 = {
        row: 0,
        col: 0,
        unitId: _0x5105af,
        subUnitId: (0, n.generateRandomId)(),
        sheetName: _0x4d0941.generateNewSheetName(
          "" + _0x527547.t("sheets-pivot-ui.sheet"),
        ),
      };
    else {
      var _0x367031;
      _0x8ad960 = {
        row: _0x3760b8.positionRange["startRow"],
        col: _0x3760b8.positionRange["startColumn"],
        unitId: _0x5105af,
        subUnitId:
          (_0x367031 = _0x4d0941
            .getSheets()
            .find(
              (_0x360f7c) =>
                _0x360f7c.getName() === _0x3760b8.positionSheetName,
            )) == null
            ? undefined
            : _0x367031.getSheetId(),
        sheetName: _0x3760b8.positionSheetName,
      };
    }
    return (
      _0x4823d7.executeCommand(t.AddPivotTableCommand["id"], {
        pivotTableConfig: {
          targetCellInfo: _0x8ad960,
          sourceRangeInfo: {
            range: _0x3760b8.sourceRange,
            unitId: _0x5105af,
            sheetName: _0x3760b8.sourceSheetName,
            subUnitId:
              (_0x3670f1 = _0x4d0941
                .getSheets()
                .find(
                  (_0x254a25) =>
                    _0x254a25.getName() === _0x3760b8.sourceSheetName,
                )) == null
                ? undefined
                : _0x3670f1.getSheetId(),
          },
        },
        positionType: _0x3760b8.positionType,
      }),
      true
    );
  },
};
async function ke(_0x2fa5a7, _0x2a6b76, _0x41828d, _0x2683a2, _0x2c01b2) {
  let _0x423fac = _0x2fa5a7.get(e.IDialogService),
    _0x38ed7e = _0x2fa5a7.get(n.LocaleService);
  return new Promise((_0x5a8592) => {
    let _0x4a8eb8,
      _0x501b0a = {
        unitId: _0x2a6b76,
        subUnitId: _0x41828d,
        sourceRange: _0x2683a2,
        positionRange: null,
        sourceSheetName: _0x2c01b2,
        positionSheetName: _0x2c01b2,
        onConfirm: (_0x153918) => {
          (_0x5a8592(_0x153918), _0x4a8eb8 == null || _0x4a8eb8.dispose());
        },
        onCancel: () => {
          (_0x5a8592(null), _0x4a8eb8 == null || _0x4a8eb8.dispose());
        },
      };
    _0x4a8eb8 = _0x423fac.open({
      id: G.componentKey,
      title: {
        title: _0x38ed7e.t("sheets-pivot-ui.dialog.source.insertPivotTable"),
      },
      draggable: true,
      mask: false,
      maskClosable: false,
      children: { label: { name: G.componentKey, props: _0x501b0a } },
      width: 400,
      onClose: () => {
        _0x4a8eb8.dispose();
      },
    });
  });
}
const Ae = {
  type: n.CommandType["OPERATION"],
  id: "sheet.operation.set-pivot-date-group",
  async handler(_0x375d0a, _0x5ddc61) {
    if (!_0x5ddc61) return false;
    let _0x2711a7 = q(_0x375d0a);
    return _0x2711a7
      ? _0x375d0a
          .get(n.ICommandService)
          .executeCommand(t.SetPivotDateGroupCommand["id"], {
            unitId: _0x2711a7.unitId,
            subUnitId: _0x2711a7.subUnitId,
            pivotTableId: _0x2711a7.pivotTableId,
            tableFieldId: _0x2711a7.tableFieldId,
            dateType: _0x5ddc61.dateType,
          })
      : false;
  },
};
function q(_0x13fc12) {
  let _0x3a8515 = (0, r.getSheetCommandTarget)(
    _0x13fc12.get(n.IUniverInstanceService),
  );
  if (!_0x3a8515) return;
  let _0x520be6 = _0x13fc12
      .get(r.SheetsSelectionsService)
      .getCurrentLastSelection(),
    _0x2a161d = _0x520be6 == null ? undefined : _0x520be6.primary;
  if (!_0x2a161d) return;
  let { unitId: _0x56e36e, subUnitId: _0x40a910 } = _0x3a8515,
    _0x5b190b = _0x2a161d.startRow,
    _0x2390ca = _0x2a161d.startColumn,
    _0x34c9f6 = _0x13fc12
      .get(t.SheetsPivotTableAdaptorModel)
      .getPivotTableIdByCell(_0x56e36e, _0x40a910, _0x5b190b, _0x2390ca);
  if (!_0x34c9f6) return;
  let _0x15d5fe = je(
    _0x13fc12,
    _0x56e36e,
    _0x40a910,
    _0x34c9f6,
    _0x5b190b,
    _0x2390ca,
  );
  if (!_0x15d5fe) return;
  let _0x294835 = _0x13fc12.get(t.SheetsPivotTableConfigModel),
    _0x8a2fae = _0x294835.getPivotTableConfig(_0x56e36e, _0x40a910, _0x34c9f6),
    _0x362a22 = _0x294835.getCollection(_0x56e36e, _0x34c9f6),
    _0x14f3fe = (0, t.getPivotDateGroupContext)(
      _0x8a2fae == null ? undefined : _0x8a2fae.fieldsConfig,
      _0x362a22,
      _0x15d5fe,
    );
  if (_0x14f3fe)
    return {
      unitId: _0x56e36e,
      subUnitId: _0x40a910,
      pivotTableId: _0x34c9f6,
      tableFieldId: _0x15d5fe,
      row: _0x5b190b,
      col: _0x2390ca,
      dateGroupContext: _0x14f3fe,
    };
}
function je(_0xf1968b, _0x258b02, _0x967223, _0x1cbda8, _0x583ff8, _0x25c7e4) {
  let _0xa2a24e = _0xf1968b
    .get(t.SheetsPivotTableAdaptorModel)
    .getPivotItemRenderInfoCache(_0x258b02, _0x967223, _0x1cbda8);
  if (!_0xa2a24e) return;
  let _0x57a6f0 = (0, t.resolvePivotSheetCell)(
    _0x583ff8,
    _0x25c7e4,
    _0xf1968b
      .get(t.SheetsPivotTableAdaptorModel)
      .getPivotTableCellData(_0x258b02, _0x967223, _0x583ff8, _0x25c7e4),
    _0xa2a24e,
  );
  return _0x57a6f0 == null ? undefined : _0x57a6f0.tableFieldId;
}
const Me = [
    {
      type: l.PivotShowAsTypeEnum["normal"],
      localeKey: "sheets-pivot-ui.showValuesAs.normal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["percentOfGrandTotal"],
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfGrandTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["percentOfRowTotal"],
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfRowTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["percentOfColumnTotal"],
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfColumnTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["percentOfParentRowTotal"],
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfParentRowTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["percentOfParentColumnTotal"],
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfParentColumnTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["index"],
      localeKey: "sheets-pivot-ui.showValuesAs.index",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["percentOfParent"],
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfParent",
      requiresParameters: true,
      baseItemMode: "none",
      parentFieldOnly: true,
    },
    {
      type: l.PivotShowAsTypeEnum["percentOf"],
      localeKey: "sheets-pivot-ui.showValuesAs.percentOf",
      requiresParameters: true,
      baseItemMode: "item",
    },
    {
      type: l.PivotShowAsTypeEnum["differenceFrom"],
      localeKey: "sheets-pivot-ui.showValuesAs.differenceFrom",
      requiresParameters: true,
      baseItemMode: "item-or-relative",
    },
    {
      type: l.PivotShowAsTypeEnum["percentDifferenceFrom"],
      localeKey: "sheets-pivot-ui.showValuesAs.percentDifferenceFrom",
      requiresParameters: true,
      baseItemMode: "item-or-relative",
    },
    {
      type: l.PivotShowAsTypeEnum["runningTotal"],
      localeKey: "sheets-pivot-ui.showValuesAs.runningTotal",
      requiresParameters: true,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["percentRunningTotal"],
      localeKey: "sheets-pivot-ui.showValuesAs.percentRunningTotal",
      requiresParameters: true,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["rankAscending"],
      localeKey: "sheets-pivot-ui.showValuesAs.rankAscending",
      requiresParameters: true,
      baseItemMode: "none",
    },
    {
      type: l.PivotShowAsTypeEnum["rankDescending"],
      localeKey: "sheets-pivot-ui.showValuesAs.rankDescending",
      requiresParameters: true,
      baseItemMode: "none",
    },
  ],
  Ne = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.set-pivot-show-data-as",
    async handler(_0x3f2250, _0x46f7ba) {
      let _0x2133d0 =
        _0x46f7ba && Me.find((_0x4514c6) => _0x4514c6.type === _0x46f7ba.type);
      if (!_0x2133d0) return false;
      let _0x20792f = Pe(_0x3f2250);
      if (!_0x20792f) return false;
      if (!_0x2133d0.requiresParameters)
        return _0x3f2250
          .get(n.ICommandService)
          .executeCommand(t.UpdatePivotFieldSettingCommand["id"], {
            unitId: _0x20792f.unitId,
            subUnitId: _0x20792f.subUnitId,
            pivotTableId: _0x20792f.pivotTableId,
            tableFieldId: _0x20792f.tableFieldId,
            showDataAs: { type: _0x2133d0.type, baseFieldId: "", baseItem: "" },
            tableFieldInfo: _0x20792f.tableFieldInfo,
            dataFieldInfo: _0x20792f.dataFieldInfo,
          });
      let _0x201a11 = Fe(_0x3f2250, _0x20792f);
      if (!_0x201a11) return false;
      let _0x391e87 = J(_0x201a11.config, _0x201a11.collection, _0x2133d0);
      if (_0x391e87.length === 0) return false;
      let _0x323c07 = {};
      if (_0x2133d0.baseItemMode !== "none") {
        try {
          _0x323c07 = await Ie(
            _0x3f2250,
            _0x201a11.config,
            _0x20792f.pivotTableId,
            _0x391e87,
          );
        } catch {
          return false;
        }
        if (
          !_0x391e87.some(
            (_0x29efa0) =>
              _0x323c07[_0x29efa0] &&
              (_0x2133d0.baseItemMode === "item-or-relative" ||
                _0x323c07[_0x29efa0].items["length"] > 0),
          )
        )
          return false;
      }
      let _0x58d717 = _0x3f2250.get(e.IDialogService),
        _0x5a0151 = _0x3f2250.get(n.LocaleService),
        _0x117826 = null,
        _0x158e0d = false,
        _0x19d757 = false,
        _0x443f42 = () => {
          _0x158e0d ||
            ((_0x158e0d = true),
            _0x117826 == null || _0x117826.dispose(),
            (_0x117826 = null));
        };
      try {
        _0x117826 = _0x58d717.open({
          id: "UNIVER_SHEET_PIVOT_SHOW_DATA_AS_DIALOG_ID",
          title: {
            title: _0x5a0151.t("sheets-pivot-ui.showValuesAs.dialogTitle"),
          },
          draggable: true,
          mask: true,
          maskClosable: false,
          width: 400,
          children: {
            label: {
              name: T,
              props: {
                unitId: _0x20792f.unitId,
                subUnitId: _0x20792f.subUnitId,
                pivotTableId: _0x20792f.pivotTableId,
                tableFieldId: _0x20792f.tableFieldId,
                type: _0x2133d0.type,
                baseItems: _0x323c07,
                onCancel: _0x443f42,
                onConfirm: async (_0x191473) => {
                  if (!_0x19d757) {
                    _0x19d757 = true;
                    try {
                      let _0x1a403f = Fe(_0x3f2250, _0x20792f);
                      if (
                        !_0x1a403f ||
                        !Le(
                          _0x1a403f.config,
                          _0x1a403f.collection,
                          _0x2133d0,
                          _0x191473,
                        )
                      )
                        return;
                      if (
                        _0x2133d0.baseItemMode !== "none" &&
                        _0x191473.baseItemType === undefined
                      ) {
                        var _0x115d37;
                        if (!(
                          (_0x115d37 = (
                            await Ie(
                              _0x3f2250,
                              _0x1a403f.config,
                              _0x1a403f.context["pivotTableId"],
                              [_0x191473.baseFieldId],
                            )
                          )[_0x191473.baseFieldId]) != null &&
                          _0x115d37.items["includes"](_0x191473.baseItem)
                        ))
                          return;
                      }
                      await _0x3f2250
                        .get(n.ICommandService)
                        .executeCommand(
                          t.UpdatePivotFieldSettingCommand["id"],
                          {
                            unitId: _0x1a403f.context["unitId"],
                            subUnitId: _0x1a403f.context["subUnitId"],
                            pivotTableId: _0x1a403f.context["pivotTableId"],
                            tableFieldId: _0x1a403f.context["tableFieldId"],
                            showDataAs: _0x191473,
                            tableFieldInfo: _0x1a403f.context["tableFieldInfo"],
                            dataFieldInfo: _0x1a403f.context["dataFieldInfo"],
                          },
                        );
                    } catch {
                    } finally {
                      _0x443f42();
                    }
                  }
                },
              },
            },
          },
          onClose: _0x443f42,
        });
      } catch {
        return (_0x443f42(), false);
      }
      return true;
    },
  };
function J(_0x4316ed, _0x1915a0, _0xae3844) {
  let {
    rowFields: _0x26dfc3,
    columnFields: _0x44da96,
    dimension: _0xe5fa9,
  } = _0x4316ed.fieldsConfig;
  return (
    _0xae3844.parentFieldOnly
      ? [..._0x26dfc3.slice(0, -1), ..._0x44da96.slice(0, -1)]
      : [..._0x26dfc3, ..._0x44da96]
  ).filter((_0x3f6758) => {
    let _0x261004 = _0xe5fa9[_0x3f6758];
    return !!(
      _0x261004 &&
      (_0x1915a0.fields[_0x261004.dataFieldId] ||
        _0x1915a0.customFields["find"](
          (_0x4235b9) => _0x4235b9.id === _0x261004.dataFieldId,
        ))
    );
  });
}
function Pe(_0x5f0c1e) {
  var _0x22ffbb, _0x497d29;
  let _0xdd150a = (0, r.getSheetCommandTarget)(
      _0x5f0c1e.get(n.IUniverInstanceService),
    ),
    _0x4d6341 =
      (_0x22ffbb = _0x5f0c1e
        .get(r.SheetsSelectionsService)
        .getCurrentLastSelection()) == null
        ? undefined
        : _0x22ffbb.primary;
  if (!_0xdd150a || !_0x4d6341) return;
  let { unitId: _0x2fe9e7, subUnitId: _0x16a1f3 } = _0xdd150a,
    _0x32e78e = _0x4d6341.startRow,
    _0x57fe54 = _0x4d6341.startColumn,
    _0x77354b = _0x5f0c1e.get(t.SheetsPivotTableAdaptorModel),
    _0x4a960f = _0x77354b.getPivotTableIdByCell(
      _0x2fe9e7,
      _0x16a1f3,
      _0x32e78e,
      _0x57fe54,
    );
  if (!_0x4a960f) return;
  let _0x51e937 = _0x5f0c1e
      .get(t.SheetsPivotTableConfigModel)
      .getPivotTableConfig(_0x2fe9e7, _0x16a1f3, _0x4a960f),
    _0x44eacb = _0x77354b.getPivotItemRenderInfoCache(
      _0x2fe9e7,
      _0x16a1f3,
      _0x4a960f,
    ),
    _0x4a4a1c = _0x77354b.getPivotTableCellData(
      _0x2fe9e7,
      _0x16a1f3,
      _0x32e78e,
      _0x57fe54,
    );
  if (!_0x51e937 || !_0x44eacb) return;
  let _0x401226 = (0, t.resolvePivotSheetCell)(
    _0x32e78e,
    _0x57fe54,
    _0x4a4a1c,
    _0x44eacb,
  );
  if (!_0x401226) return;
  let _0x25832a = (0, t.resolvePivotValueFieldId)(
    _0x401226,
    _0x51e937.fieldsConfig["valueFields"],
  );
  if (_0x25832a)
    return (_0x497d29 = Fe(_0x5f0c1e, {
      unitId: _0x2fe9e7,
      subUnitId: _0x16a1f3,
      pivotTableId: _0x4a960f,
      tableFieldId: _0x25832a,
    })) == null
      ? undefined
      : _0x497d29.context;
}
function Fe(_0x528aa2, _0x143119) {
  let {
      unitId: _0x5adacf,
      subUnitId: _0x363a88,
      pivotTableId: _0x16de7e,
      tableFieldId: _0x233273,
    } = _0x143119,
    _0x547812 = _0x528aa2.get(t.SheetsPivotTableConfigModel),
    _0x5f2ae1 = _0x547812.getPivotTableConfig(_0x5adacf, _0x363a88, _0x16de7e),
    _0x411bf0 = _0x547812.getCollection(_0x5adacf, _0x16de7e),
    _0x3bfb68 =
      _0x5f2ae1 == null
        ? undefined
        : _0x5f2ae1.fieldsConfig["measure"][_0x233273];
  if (
    !_0x5f2ae1 ||
    !_0x411bf0 ||
    !_0x3bfb68 ||
    !_0x5f2ae1.fieldsConfig["valueFields"].includes(_0x3bfb68.id)
  )
    return;
  let _0x3a444b =
    _0x411bf0.fields[_0x3bfb68.dataFieldId] ??
    _0x411bf0.customFields["find"](
      (_0x419c6c) => _0x419c6c.id === _0x3bfb68.dataFieldId,
    );
  if (!_0x3a444b) return;
  let _0x2cf7c7 = { ..._0x3bfb68.showDataAs };
  return {
    config: _0x5f2ae1,
    collection: _0x411bf0,
    context: {
      unitId: _0x5adacf,
      subUnitId: _0x363a88,
      pivotTableId: _0x16de7e,
      tableFieldId: _0x3bfb68.id,
      currentShowDataAs: _0x2cf7c7,
      tableFieldInfo: {
        tableFieldId: _0x3bfb68.id,
        displayName: _0x3bfb68.displayName,
        dataFieldId: _0x3bfb68.dataFieldId,
        format: _0x3bfb68.format,
        subTotalType: _0x3bfb68.subtotal,
        showDataAs: { ..._0x2cf7c7 },
      },
      dataFieldInfo: {
        id: _0x3a444b.id,
        dataFieldId: _0x3a444b.id,
        name: _0x3a444b.name,
        type: _0x3a444b.fieldDataType,
        checked: true,
        pivotTableId: _0x16de7e,
      },
    },
  };
}
async function Ie(_0x574ae8, _0x59a097, _0x22ae09, _0x52dd20) {
  let { unitId: _0x4b9734, subUnitId: _0x1a76c8 } = _0x59a097.targetCellInfo,
    _0x1a29de = _0x59a097.targetCellInfo,
    _0x22f702 = _0x574ae8
      .get(t.SheetsPivotTableAdaptorModel)
      .getPivotItemRenderInfoCache(_0x4b9734, _0x1a76c8, _0x22ae09);
  if (!_0x22f702)
    throw Error("[sheets-pivot-ui]: Pivot render cache is unavailable");
  return (
    await Promise.all(
      _0x52dd20.map(async (_0x1d45e6) => {
        try {
          return [
            _0x1d45e6,
            (
              await _0x574ae8
                .get(t.SheetsPivotRPCService)
                .getPivotDisplayConfig({
                  unitId: _0x4b9734,
                  subUnitId: _0x1a76c8,
                  pivotTableId: _0x22ae09,
                  params: {
                    type: t.PivotDisplayDataType["Filter"],
                    filter: {
                      row: _0x1a29de.row,
                      col: _0x1a29de.col,
                      tableFieldId: _0x1d45e6,
                      pivotItemRenderInfoCache: _0x22f702,
                    },
                  },
                })
            ).result["filter"],
          ];
        } catch {
          return [_0x1d45e6, undefined];
        }
      }),
    )
  ).reduce(
    (_0x5a6947, [_0x52b865, _0x2a594f]) => (
      _0x2a594f &&
        (_0x5a6947[_0x52b865] = {
          items: _0x2a594f.items,
          itemTypes: _0x2a594f.itemTypes,
          format: _0x2a594f.format,
        }),
      _0x5a6947
    ),
    {},
  );
}
function Le(_0x4b71e2, _0x216fd0, _0x5d4741, _0x11d64c) {
  return _0x11d64c.type !== _0x5d4741.type ||
    !J(_0x4b71e2, _0x216fd0, _0x5d4741).includes(_0x11d64c.baseFieldId)
    ? false
    : _0x5d4741.baseItemMode === "none"
      ? _0x11d64c.baseItem === "" && _0x11d64c.baseItemType === undefined
      : _0x11d64c.baseItemType === undefined
        ? _0x11d64c.baseItem !== ""
        : _0x5d4741.baseItemMode === "item-or-relative" &&
          _0x11d64c.baseItem === "" &&
          (_0x11d64c.baseItemType ===
            l.PivotShowAsBaseItemTypeEnum["previous"] ||
            _0x11d64c.baseItemType === l.PivotShowAsBaseItemTypeEnum["next"]);
}
function Re(_0x56b3a1) {
  return {
    ..._0x56b3a1,
    expected: Array.isArray(_0x56b3a1.expected)
      ? _0x56b3a1.expected["concat"]()
      : _0x56b3a1.expected,
  };
}
function ze(_0x59d5fb, _0xf18356) {
  let _0x3c5d23 = _0x59d5fb
    .get(t.SheetsPivotTableConfigModel)
    .getPivotTableConfig(
      _0xf18356.unitId,
      _0xf18356.subUnitId,
      _0xf18356.pivotTableId,
    );
  if (!(
    !_0x3c5d23 ||
    !_0x3c5d23.fieldsConfig["dimension"][_0xf18356.targetFieldId] ||
    !(
      _0x3c5d23.fieldsConfig["rowFields"].includes(_0xf18356.targetFieldId) ||
      _0x3c5d23.fieldsConfig["columnFields"].includes(_0xf18356.targetFieldId)
    )
  ))
    return _0x3c5d23;
}
function Be(_0x27ca1b) {
  var _0x5d8ca7, _0x3e1dde;
  let _0xada5ab = (0, r.getSheetCommandTarget)(
      _0x27ca1b.get(n.IUniverInstanceService),
    ),
    _0x5b120c =
      (_0x5d8ca7 = _0x27ca1b
        .get(r.SheetsSelectionsService)
        .getCurrentLastSelection()) == null
        ? undefined
        : _0x5d8ca7.primary;
  if (!_0xada5ab || !_0x5b120c) return;
  let { unitId: _0x5c22ba, subUnitId: _0x8d06b9 } = _0xada5ab,
    _0x62aac7 = _0x5b120c.startRow,
    _0x12f805 = _0x5b120c.startColumn,
    _0x19a319 = _0x27ca1b.get(t.SheetsPivotTableAdaptorModel),
    _0x5456a7 = _0x19a319.getPivotTableIdByCell(
      _0x5c22ba,
      _0x8d06b9,
      _0x62aac7,
      _0x12f805,
    );
  if (!_0x5456a7) return;
  let _0xf20835 = _0x27ca1b
      .get(t.SheetsPivotTableConfigModel)
      .getPivotTableConfig(_0x5c22ba, _0x8d06b9, _0x5456a7),
    _0x1ad29c = _0x19a319.getPivotItemRenderInfoCache(
      _0x5c22ba,
      _0x8d06b9,
      _0x5456a7,
    );
  if (!_0xf20835 || !_0x1ad29c) return;
  let _0x2b0117 = (0, t.resolvePivotSheetCell)(
      _0x62aac7,
      _0x12f805,
      _0x19a319.getPivotTableCellData(
        _0x5c22ba,
        _0x8d06b9,
        _0x62aac7,
        _0x12f805,
      ),
      _0x1ad29c,
    ),
    _0x15d23f =
      _0x2b0117 &&
      (0, t.resolvePivotValueFilterTarget)(_0x2b0117, _0xf20835.fieldsConfig);
  if (!_0x15d23f) return;
  let _0x1c7868 = _0xf20835.fieldsConfig["dimension"][_0x15d23f.targetFieldId],
    _0x541488 = _0xf20835.fieldsConfig["valueFields"].flatMap((_0x1992dd) => {
      let _0x488628 = _0xf20835.fieldsConfig["measure"][_0x1992dd];
      return _0x488628
        ? [{ id: _0x488628.id, label: _0x488628.displayName }]
        : [];
    });
  if (!_0x1c7868 || _0x541488.length === 0) return;
  let _0x1cb5ba =
    (_0x3e1dde = _0xf20835.fieldsConfig["valueFilter"]) == null ||
    (_0x3e1dde = _0x3e1dde.find(
      (_0x2aed3a) => _0x2aed3a.fieldId === _0x15d23f.targetFieldId,
    )) == null
      ? undefined
      : _0x3e1dde.filterInfo;
  return {
    unitId: _0x5c22ba,
    subUnitId: _0x8d06b9,
    pivotTableId: _0x5456a7,
    targetFieldId: _0x15d23f.targetFieldId,
    targetFieldName: _0x1c7868.displayName,
    valueFields: _0x541488,
    defaultValueFieldId: _0x15d23f.defaultValueFieldId,
    ...(_0x1cb5ba ? { currentFilter: Re(_0x1cb5ba) } : {}),
  };
}
const Ve = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.set-pivot-value-filter",
    async handler(_0x1c3bea) {
      let _0x4711c5 = Be(_0x1c3bea);
      if (!_0x4711c5) return false;
      let _0x107d71 = _0x1c3bea.get(e.IDialogService),
        _0x5903d3 = _0x1c3bea.get(n.LocaleService),
        _0x2ba6fe = null,
        _0x461235 = false,
        _0x1a1a56 = false,
        _0x37b99c = () => {
          _0x461235 ||
            ((_0x461235 = true),
            _0x2ba6fe == null || _0x2ba6fe.dispose(),
            (_0x2ba6fe = null));
        },
        _0x22d864 = async (_0x181b15) => {
          if (!_0x1a1a56) {
            _0x1a1a56 = true;
            try {
              let _0x5c7b5a = ze(_0x1c3bea, _0x4711c5);
              if (
                !_0x5c7b5a ||
                (_0x181b15 &&
                  (!_0x5c7b5a.fieldsConfig["measure"][_0x181b15.valueFieldId] ||
                    !_0x5c7b5a.fieldsConfig["valueFields"].includes(
                      _0x181b15.valueFieldId,
                    ) ||
                    !(0, l.isValueFilterOperator)(_0x181b15.operator)))
              )
                return;
              await _0x1c3bea
                .get(n.ICommandService)
                .executeCommand(t.SetPivotValueFilterCommand["id"], {
                  unitId: _0x4711c5.unitId,
                  subUnitId: _0x4711c5.subUnitId,
                  pivotTableId: _0x4711c5.pivotTableId,
                  fieldId: _0x4711c5.targetFieldId,
                  valueFilterInfo: _0x181b15
                    ? {
                        ..._0x181b15,
                        type: l.PivotFilterTypeEnum["ValueFilter"],
                        expected: Array.isArray(_0x181b15.expected)
                          ? _0x181b15.expected["concat"]()
                          : _0x181b15.expected,
                      }
                    : undefined,
                });
            } catch {
            } finally {
              _0x37b99c();
            }
          }
        };
      try {
        _0x2ba6fe = _0x107d71.open({
          id: "UNIVER_SHEET_PIVOT_VALUE_FILTER_DIALOG_ID",
          title: {
            title: _0x5903d3.t("sheets-pivot-ui.valueFilter.dialogTitle"),
          },
          draggable: true,
          mask: true,
          maskClosable: false,
          width: 420,
          children: {
            label: {
              name: E,
              props: {
                targetFieldId: _0x4711c5.targetFieldId,
                targetFieldName: _0x4711c5.targetFieldName,
                valueFields: _0x4711c5.valueFields,
                defaultValueFieldId: _0x4711c5.defaultValueFieldId,
                currentFilter: _0x4711c5.currentFilter,
                onConfirm: (_0x570378) => _0x22d864(_0x570378),
                onClear: () => _0x22d864(undefined),
                onCancel: _0x37b99c,
              },
            },
          },
          onClose: _0x37b99c,
        });
      } catch {
        return (_0x37b99c(), false);
      }
      return true;
    },
  },
  He = "sheet.pivot.context-menu.date-group",
  Ue = "sheet.pivot.context-menu.show-data-as",
  We = "sheet.pivot.context-menu.value-filter",
  Ge = {
    year: "sheets-pivot-ui.dateGroup.year",
    "year-quarter": "sheets-pivot-ui.dateGroup.yearQuarter",
    quarter: "sheets-pivot-ui.dateGroup.quarter",
    "year-month": "sheets-pivot-ui.dateGroup.yearMonth",
    month: "sheets-pivot-ui.dateGroup.month",
    "month-date": "sheets-pivot-ui.dateGroup.monthDate",
    "year-month-date": "sheets-pivot-ui.dateGroup.yearMonthDate",
    date: "sheets-pivot-ui.dateGroup.date",
    hour: "sheets-pivot-ui.dateGroup.hour",
    minute: "sheets-pivot-ui.dateGroup.minute",
    "hour-minute": "sheets-pivot-ui.dateGroup.hourMinute",
  };
function Ke(_0x23777e) {
  return {
    id: K.id,
    type: e.MenuItemType["BUTTON"],
    icon: "PivotTableIcon",
    hidden$: (0, e.getMenuHiddenObservable)(
      _0x23777e,
      n.UniverInstanceType["UNIVER_SHEET"],
    ),
    disabled$: (0, d.getObservableWithExclusiveRange$)(
      _0x23777e,
      (0, d.getCurrentRangeDisable$)(_0x23777e, {
        workbookTypes: [r.WorkbookEditablePermission],
        worksheetTypes: [
          r.WorksheetViewPermission,
          r.WorksheetPivotTablePermission,
        ],
        rangeTypes: [r.RangeProtectionPermissionViewPoint],
      }),
    ),
    tooltip: "sheets-pivot-ui.title",
    title: "sheets-pivot-ui.title",
  };
}
function qe(_0x987baa) {
  return {
    id: He,
    type: e.MenuItemType["SUBITEMS"],
    title: "sheets-pivot-ui.dateGroup.title",
    hidden$: Xe(_0x987baa),
  };
}
function Je(_0x40d754) {
  return (_0xb35a9b) => ({
    id: Ye(_0x40d754),
    commandId: Ae.id,
    type: e.MenuItemType["BUTTON"],
    title: Ge[_0x40d754],
    params: { dateType: _0x40d754 },
    disabled$: Ze(_0xb35a9b, _0x40d754),
    activated$: Qe(_0xb35a9b, _0x40d754),
  });
}
function Ye(_0x9387d1) {
  return "sheet.pivot.context-menu.date-group." + _0x9387d1;
}
function Xe(_0x13e021) {
  return $e(_0x13e021).pipe((0, c.map)(() => !q(_0x13e021)));
}
function Ze(_0x4ffe45, _0xdb9969) {
  return $e(_0x4ffe45).pipe(
    (0, c.map)(() => {
      let _0x37a4af = q(_0x4ffe45);
      return (
        !_0x37a4af ||
        (0, t.isPivotDateGroupTypeDisabled)(
          _0x37a4af.dateGroupContext,
          _0xdb9969,
        )
      );
    }),
  );
}
function Qe(_0x412217, _0x54f624) {
  return $e(_0x412217).pipe(
    (0, c.map)(() => {
      let _0x2e566d = q(_0x412217);
      return (
        (_0x2e566d == null
          ? undefined
          : _0x2e566d.dateGroupContext["currentDateType"]) === _0x54f624
      );
    }),
  );
}
function $e(_0x1f43e4) {
  return _0x1f43e4
    .get(r.SheetsSelectionsService)
    .selectionMoveEnd$["pipe"]((0, c.startWith)(null));
}
const et = t.PIVOT_DATE_GROUP_TYPES["map"]((_0x167e45) => ({
  dateType: _0x167e45,
  id: Ye(_0x167e45),
  menuItemFactory: Je(_0x167e45),
}));
function tt(_0x5e8ec2) {
  return {
    id: Ue,
    type: e.MenuItemType["SUBITEMS"],
    title: "sheets-pivot-ui.showValuesAs.title",
    hidden$: it(_0x5e8ec2).pipe((0, c.map)(() => !Pe(_0x5e8ec2))),
  };
}
function nt(_0xf7ce18) {
  return (_0x4ccb3a) => ({
    id: rt(_0xf7ce18.type),
    commandId: Ne.id,
    type: e.MenuItemType["BUTTON"],
    title: _0xf7ce18.localeKey,
    params: { type: _0xf7ce18.type },
    activated$: it(_0x4ccb3a).pipe(
      (0, c.map)(() => {
        let _0x29a489 = Pe(_0x4ccb3a);
        return !!(
          _0x29a489 &&
          (_0x29a489.currentShowDataAs["type"] ??
            l.PivotShowAsTypeEnum["normal"]) === _0xf7ce18.type
        );
      }),
    ),
  });
}
function rt(_0x4a295b) {
  return "sheet.pivot.context-menu.show-data-as." + _0x4a295b;
}
function it(_0x53fe3f) {
  return _0x53fe3f
    .get(r.SheetsSelectionsService)
    .selectionMoveEnd$["pipe"]((0, c.startWith)(null));
}
const at = Me.map((_0x3af1e6) => ({
  rule: _0x3af1e6,
  id: rt(_0x3af1e6.type),
  menuItemFactory: nt(_0x3af1e6),
}));
function ot(_0x7994dd) {
  return {
    id: We,
    commandId: Ve.id,
    type: e.MenuItemType["BUTTON"],
    title: "sheets-pivot-ui.valueFilter.title",
    hidden$: _0x7994dd.get(r.SheetsSelectionsService).selectionMoveEnd$["pipe"](
      (0, c.startWith)(null),
      (0, c.map)(() => !Be(_0x7994dd)),
    ),
  };
}
const st = et.reduce(
    (_0x17d920, _0x25edf6, _0x56a940) => (
      (_0x17d920[_0x25edf6.id] = {
        order: _0x56a940 + 1,
        menuItemFactory: _0x25edf6.menuItemFactory,
      }),
      _0x17d920
    ),
    {},
  ),
  ct = at.reduce(
    (_0x475132, _0x12c7d0, _0x191217) => (
      (_0x475132[_0x12c7d0.id] = {
        order: _0x191217 + 1,
        menuItemFactory: _0x12c7d0.menuItemFactory,
      }),
      _0x475132
    ),
    {},
  ),
  lt = {
    [e.RibbonDataGroup["ORGANIZATION"]]: {
      [K.id]: {
        order: 1,
        gridLayout: { row: 2, column: 1 },
        menuItemFactory: Ke,
      },
    },
    [e.ContextMenuPosition["MAIN_AREA"]]: {
      [e.ContextMenuGroup["DATA"]]: {
        [K.id]: { order: 1, menuItemFactory: Ke },
        [He]: { order: 2, menuItemFactory: qe, ...st },
        [Ue]: { order: 3, menuItemFactory: tt, ...ct },
        [We]: { order: 4, menuItemFactory: ot },
      },
    },
    [e.ContextMenuPosition["COL_HEADER"]]: {
      [e.ContextMenuGroup["DATA"]]: {
        [K.id]: { order: 1, menuItemFactory: Ke },
        [He]: { order: 2, menuItemFactory: qe, ...st },
      },
    },
  };
var ut = "@univerjs-pro/sheets-pivot-ui",
  dt = "1.0.0-insiders.20260907-70fc579";
const ft = {};
function pt(_0x5b89c9) {
  let {
      filterItemInfo: _0x18e846,
      unitId: _0x33870b,
      subUnitId: _0x33dc6c,
    } = _0x5b89c9,
    {
      format: _0x204027,
      filterInfo: _0x3a22ef,
      sortInfo: _0x1ef672,
    } = _0x18e846,
    _0x5d3f3a = (0, e.useDependency)(n.ICommandService),
    _0x492804 = (0, e.useDependency)(n.LocaleService),
    _0x399e10 = (0, e.useDependency)(e.IDialogService),
    _0x13d26d = (0, e.useDependency)(n.IUniverInstanceService),
    _0x374e2a = (0, e.useObservable)(
      _0x492804.direction$,
      _0x492804.getDirection(),
    ),
    [_0x3e7921, _0x287d00] = (0, s.useState)(false),
    [_0x4846fa, _0x211b79] = (0, s.useState)(() =>
      _0x18e846
        ? ((_0x3a22ef == null ? undefined : _0x3a22ef.list) ?? _0x18e846.items)
        : [],
    ),
    [_0x41d1dd, _0x44613c] = (0, s.useState)(
      _0x4846fa.length ===
        (_0x18e846 == null ? undefined : _0x18e846.items["length"]),
    ),
    [_0x4c5a81, _0x2cedcb] = (0, s.useState)(() => {
      if (_0x18e846) return _0x1ef672 == null ? undefined : _0x1ef672.type;
    }),
    _0x564bdc = () => {
      _0x399e10.close(b);
    };
  if (
    ((0, s.useEffect)(() => {
      (_0x4846fa.length ? _0x287d00(false) : _0x287d00(true),
        _0x4846fa.length === _0x18e846.items["length"]
          ? _0x44613c(true)
          : _0x44613c(false));
    }, [_0x4846fa, _0x18e846.items["length"]]),
    (0, s.useEffect)(() => {
      let _0xef38c5 = _0x13d26d.getCurrentUnitOfType(
        n.UniverInstanceType["UNIVER_SHEET"],
      );
      if (!_0xef38c5) return;
      let _0x58164e = _0xef38c5.activeSheet$["subscribe"]((_0x44d5c7) => {
        _0x44d5c7 && _0x44d5c7.getSheetId() !== _0x33dc6c && _0x564bdc();
      });
      return () => (_0x58164e == null ? undefined : _0x58164e.unsubscribe());
    }, [_0x33dc6c]),
    !_0x18e846)
  )
    return;
  let _0x3a98e4 = () => {
      (_0x211b79(_0x41d1dd ? [] : _0x18e846.items), _0x44613c(!_0x41d1dd));
    },
    _0x351a90 = (_0x4e4f3a) => {
      _0x4846fa.find((_0x17aeab) => _0x17aeab === _0x4e4f3a)
        ? _0x211b79(_0x4846fa.filter((_0x5cb623) => _0x5cb623 !== _0x4e4f3a))
        : _0x211b79([..._0x4846fa, _0x4e4f3a]);
    },
    _0x25c3ef = () => {
      let { tableFieldId: _0x14b7f3, pivotTableId: _0x506287 } = _0x18e846;
      !_0x14b7f3 ||
        !_0x506287 ||
        (_0x5d3f3a.executeCommand(t.SetPivotFilterCommand["id"], {
          unitId: _0x33870b,
          subUnitId: _0x33dc6c,
          pivotTableId: _0x506287,
          tableFieldId: _0x14b7f3,
          items: _0x4846fa,
          isAll: _0x41d1dd,
        }),
        _0x564bdc());
    },
    _0x4cb13b = () => {
      _0x564bdc();
    },
    _0x46b395 = () => {
      let { tableFieldId: _0x55bd28, pivotTableId: _0x3a6b12 } = _0x18e846;
      !_0x55bd28 ||
        !_0x3a6b12 ||
        (_0x211b79(_0x18e846.items),
        _0x44613c(true),
        _0x5d3f3a.executeCommand(t.SetPivotFilterCommand["id"], {
          unitId: _0x33870b,
          subUnitId: _0x33dc6c,
          pivotTableId: _0x3a6b12,
          tableFieldId: _0x55bd28,
          items: _0x18e846.items,
          isAll: true,
        }),
        _0x564bdc());
    },
    _0x1d02c3 = (_0x375101) => {
      let { tableFieldId: _0x364427, pivotTableId: _0x29ce14 } = _0x18e846;
      !_0x364427 ||
        !_0x29ce14 ||
        (_0x5d3f3a.executeCommand(t.SetPivotSortCommand["id"], {
          unitId: _0x33870b,
          subUnitId: _0x33dc6c,
          pivotTableId: _0x29ce14,
          tableFieldId: _0x364427,
          info: { type: _0x375101 },
        }),
        _0x2cedcb(_0x375101),
        _0x564bdc());
    },
    _0x1c1eef = Te(_0x3a22ef, { items: _0x18e846.items });
  return (0, u.jsxs)("div", {
    dir: _0x374e2a,
    children: [
      (0, u.jsxs)("div", {
        className: "univer-flex",
        children: [
          (0, u.jsxs)("div", {
            className: (0, i.clsx)(
              "univer-flex\x20univer-h-8\x20univer-w-[140px]\x20univer-flex-1\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center\x20univer-rounded-l-md\x20univer-text-center\x20univer-text-sm\x20hover:univer-bg-gray-100\x20rtl:univer-rounded-l-none\x20rtl:univer-rounded-r-md\x20dark:hover:!univer-bg-gray-700",
              i.borderClassName,
              {
                "univer-bg-gray-100\x20dark:!univer-bg-gray-700":
                  _0x4c5a81 === l.PivotDataFieldSortOperatorEnum["ascending"],
              },
            ),
            onClick: () =>
              _0x1d02c3(l.PivotDataFieldSortOperatorEnum["ascending"]),
            children: [
              (0, u.jsx)(m.AscendingIcon, {}),
              _0x492804.t("sheets-pivot-ui.dialog.filter.ascending"),
            ],
          }),
          (0, u.jsxs)("div", {
            className: (0, i.clsx)(
              "univer-flex univer-h-8 univer-w-[140px] univer-flex-1 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-r-md univer-text-center univer-text-sm hover:univer-bg-gray-100 rtl:univer-rounded-l-md rtl:univer-rounded-r-none dark:hover:!univer-bg-gray-700",
              i.borderClassName,
              {
                "univer-bg-gray-100\x20dark:!univer-bg-gray-700":
                  _0x4c5a81 === l.PivotDataFieldSortOperatorEnum["descending"],
              },
            ),
            onClick: () =>
              _0x1d02c3(l.PivotDataFieldSortOperatorEnum["descending"]),
            children: [
              (0, u.jsx)(m.DescendingIcon, {}),
              _0x492804.t("sheets-pivot-ui.dialog.filter.descending"),
            ],
          }),
        ],
      }),
      (0, u.jsx)("div", {
        className: (0, i.clsx)(
          "univer-mx-0 univer-mb-4 univer-mt-3 univer-h-[300px] univer-rounded-lg univer-p-2",
          i.borderClassName,
        ),
        children: (0, u.jsxs)("div", {
          className: (0, i.clsx)(
            "univer-h-full univer-overflow-y-auto",
            i.scrollbarClassName,
          ),
          children: [
            (0, u.jsx)("div", {
              className:
                "univer-mb-1 univer-box-border univer-h-7 univer-py-[5px] univer-pl-[22px] univer-pr-1 univer-text-sm rtl:univer-pl-1 rtl:univer-pr-[22px]",
              children: (0, u.jsx)(i.Checkbox, {
                checked: _0x41d1dd,
                onChange: _0x3a98e4,
                indeterminate:
                  _0x4846fa.length > 0 &&
                  _0x4846fa.length < _0x18e846.items["length"],
                children: _0x492804.t(
                  "sheets-pivot-ui.dialog.filter.selectAll",
                ),
              }),
            }),
            _0x18e846.items["map"]((_0x54f9db, _0x1efbcd) => {
              var _0x3bdef0;
              let _0x20a4ac = _0x54f9db,
                _0xac9033 =
                  (_0x3bdef0 = _0x18e846.itemTypes) == null
                    ? undefined
                    : _0x3bdef0[_0x1efbcd];
              return (
                _0xac9033 === l.PivotDataFieldDataTypeEnum["blank"]
                  ? (_0x20a4ac = _0x492804.t(
                      "sheets-pivot-ui.dialog.filter.blank",
                    ))
                  : _0xac9033 === l.PivotDataFieldDataTypeEnum["date"] &&
                    (_0x20a4ac = _0x204027
                      ? n.numfmt["format"](_0x204027, Number(_0x20a4ac))
                      : _0x20a4ac),
                (0, u.jsx)(
                  "div",
                  {
                    className:
                      "univer-mb-1\x20univer-box-border\x20univer-h-7\x20univer-py-1\x20univer-pl-[22px]\x20univer-pr-1\x20univer-text-sm\x20rtl:univer-pl-1\x20rtl:univer-pr-[22px]",
                    children: (0, u.jsx)(i.Checkbox, {
                      checked: !!_0x4846fa.find(
                        (_0x527cb7) => _0x527cb7 === _0x54f9db,
                      ),
                      onChange: () => _0x351a90(_0x54f9db),
                      contentClassName: "univer-max-w-[200px] univer-truncate",
                      children: _0x20a4ac,
                    }),
                  },
                  _0x54f9db,
                )
              );
            }),
          ],
        }),
      }),
      (0, u.jsxs)(i.ActionRow, {
        className: "univer-flex univer-items-center univer-justify-between",
        children: [
          (0, u.jsx)("div", {
            className:
              "univer-cursor-pointer univer-text-xs univer-text-primary-600",
            children: (0, u.jsx)(i.Button, {
              variant: "link",
              disabled: _0x1c1eef === "NotFilter",
              onClick: _0x46b395,
              children: _0x492804.t(
                "sheets-pivot-ui.dialog.filter.clearFilter",
              ),
            }),
          }),
          (0, u.jsxs)(i.ActionRow, {
            className:
              "univer-flex univer-flex-1 univer-items-center univer-gap-3",
            children: [
              (0, u.jsx)(i.Button, {
                onClick: _0x4cb13b,
                children: _0x492804.t("sheets-pivot-ui.dialog.filter.cancel"),
              }),
              (0, u.jsx)(i.Button, {
                variant: "primary",
                disabled: _0x3e7921,
                onClick: _0x25c3ef,
                children: _0x492804.t("sheets-pivot-ui.dialog.filter.confirm"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const mt = ({ handlePatternChange: _0x1eb23d }) => {
    let _0x577400 = (0, e.useDependency)(n.LocaleService);
    return (
      (0, s.useEffect)(() => {
        _0x1eb23d("");
      }, []),
      (0, u.jsx)("div", {
        className:
          "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
        children: _0x577400.t("sheets-pivot-ui.dialog.numfmt.generalDesc"),
      })
    );
  },
  ht = ({ originPattern: _0x455a16, handlePatternChange: _0x42acf8 }) => {
    let _0x719013 = (0, e.useDependency)(n.LocaleService),
      _0x1c9e4 = n.currencySymbols["map"]((_0x249004) => ({
        label: _0x249004,
        value: _0x249004,
      })),
      [_0x520a29, _0x1cba4b] = (0, s.useState)(() => U(_0x455a16 || "", 2)),
      [_0x1775b2, _0x56ce08] = (0, s.useState)(
        () => me(_0x455a16 ?? "") || _0x1c9e4[0].value,
      );
    return (
      (0, s.useEffect)(() => {
        _0x42acf8(
          W(
            '_("' +
              _0x1775b2 +
              "\x22*\x20#,##0" +
              (_0x520a29 > 0 ? ".0" : "") +
              "_)",
            _0x520a29,
          ),
        );
      }, []),
      (0, u.jsxs)("div", {
        className: "univer-mt-5",
        children: [
          (0, u.jsxs)("div", {
            className: "univer-flex univer-items-center univer-justify-between",
            children: [
              (0, u.jsxs)("div", {
                className: "univer-w-[136px]",
                children: [
                  (0, u.jsx)("div", {
                    className: "univer-mb-2 univer-text-sm univer-font-medium",
                    children: _0x719013.t(
                      "sheets-pivot-ui.dialog.numfmt.decimalPlaces",
                    ),
                  }),
                  (0, u.jsx)(i.InputNumber, {
                    className: "univer-box-border univer-h-8",
                    value: _0x520a29,
                    max: 20,
                    min: 0,
                    onChange: (_0xae270) => {
                      let _0x590d0d = _0xae270 ?? 0;
                      (_0x1cba4b(_0x590d0d),
                        _0x42acf8(
                          W(
                            '_("' +
                              _0x1775b2 +
                              "\x22*\x20#,##0" +
                              (_0x590d0d > 0 ? ".0" : "") +
                              "_)",
                            _0x590d0d,
                          ),
                        ));
                    },
                  }),
                ],
              }),
              (0, u.jsxs)("div", {
                className: "univer-w-[136px]",
                children: [
                  (0, u.jsx)("div", {
                    className:
                      "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
                    children: _0x719013.t(
                      "sheets-pivot-ui.dialog.numfmt.currencyTypes",
                    ),
                  }),
                  (0, u.jsx)(i.Select, {
                    options: _0x1c9e4,
                    value: _0x1775b2,
                    onChange: (_0x48b706) => {
                      (_0x56ce08(_0x48b706),
                        _0x42acf8(
                          W(
                            '_("' +
                              _0x48b706 +
                              '"* #,##0' +
                              (_0x520a29 > 0 ? ".0" : "") +
                              "_)",
                            _0x520a29,
                          ),
                        ));
                    },
                  }),
                ],
              }),
            ],
          }),
          (0, u.jsx)("div", {
            className:
              "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
            children: _0x719013.t(
              "sheets-pivot-ui.dialog.numfmt.accountingDesc",
            ),
          }),
        ],
      })
    );
  },
  gt = ({ originPattern: _0x583b3c, handlePatternChange: _0x33ab60 }) => {
    let _0x3837c6 = (0, e.useDependency)(n.LocaleService),
      _0x1a355c = n.currencySymbols["map"]((_0x12be00) => ({
        label: _0x12be00,
        value: _0x12be00,
      })),
      [_0x367175, _0x4c8f22] = (0, s.useState)(() => U(_0x583b3c || "", 2)),
      [_0x1ae5fa, _0x43ae14] = (0, s.useState)(
        () => me(_0x583b3c ?? "") || _0x1a355c[0].value,
      ),
      _0x418552 = B.map((_0x165949) => ({
        label: _0x165949.label(_0x1ae5fa),
        value: _0x165949.suffix(_0x1ae5fa),
        color: _0x165949.color,
      })),
      [_0x2f9340, _0x3e93ed] = (0, s.useState)(() => {
        var _0xd1d0c9;
        return (
          ((_0xd1d0c9 = _0x418552.find((_0x2fcf4b) =>
            (0, n.isPatternEqualWithoutDecimal)(
              _0x2fcf4b.value,
              _0x583b3c ?? "",
            ),
          )) == null
            ? undefined
            : _0xd1d0c9.value) || _0x418552[0].value
        );
      });
    return (
      (0, s.useEffect)(() => {
        _0x33ab60(W(_0x2f9340, _0x367175));
      }, []),
      (0, u.jsxs)("div", {
        className: "univer-mt-5",
        children: [
          (0, u.jsxs)("div", {
            className: "univer-flex univer-items-center univer-justify-between",
            children: [
              (0, u.jsxs)("div", {
                className: "univer-w-[136px]",
                children: [
                  (0, u.jsx)("div", {
                    className: "univer-mb-2 univer-text-sm univer-font-medium",
                    children: _0x3837c6.t(
                      "sheets-pivot-ui.dialog.numfmt.decimalPlaces",
                    ),
                  }),
                  (0, u.jsx)(i.InputNumber, {
                    className: "univer-box-border univer-h-8",
                    value: _0x367175,
                    max: 20,
                    min: 0,
                    onChange: (_0x2fa8) => {
                      _0x2fa8 &&
                        (_0x4c8f22(_0x2fa8), _0x33ab60(W(_0x2f9340, _0x2fa8)));
                    },
                  }),
                ],
              }),
              (0, u.jsxs)("div", {
                className: "univer-w-[136px]",
                children: [
                  (0, u.jsx)("div", {
                    className:
                      "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
                    children: _0x3837c6.t(
                      "sheets-pivot-ui.dialog.numfmt.currencyTypes",
                    ),
                  }),
                  (0, u.jsx)(i.Select, {
                    options: _0x1a355c,
                    value: _0x1ae5fa,
                    onChange: (_0x57195e) => {
                      _0x43ae14(_0x57195e);
                      let _0x93e721 = B.map((_0x3d6d96) => ({
                        label: _0x3d6d96.label(_0x57195e),
                        value: _0x3d6d96.suffix(_0x57195e),
                        color: _0x3d6d96.color,
                      }));
                      (_0x3e93ed(_0x93e721[0].value),
                        _0x33ab60(W(_0x93e721[0].value, _0x367175)));
                    },
                  }),
                ],
              }),
            ],
          }),
          (0, u.jsxs)("div", {
            className: "univer-mt-4",
            children: [
              (0, u.jsx)("div", {
                className: "univer-mb-2 univer-text-sm univer-font-medium",
                children: _0x3837c6.t(
                  "sheets-pivot-ui.dialog.numfmt.negativeNumberTypes",
                ),
              }),
              (0, u.jsx)(i.SelectList, {
                className: "univer-rounded-lg univer-p-2",
                options: _0x418552,
                value: _0x2f9340,
                onChange: (_0x613928) => {
                  (_0x3e93ed(_0x613928), _0x33ab60(W(_0x613928, _0x367175)));
                },
              }),
              (0, u.jsx)("div", {
                className:
                  "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
                children: _0x3837c6.t(
                  "sheets-pivot-ui.dialog.numfmt.currencyDesc",
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  _t = ({ originPattern: _0x29eeb9, handlePatternChange: _0x51753d }) => {
    let _0x2390c1 = (0, e.useDependency)(n.LocaleService),
      _0x4cb3b9 = R.map((_0x2dbee5) => ({
        label: _0x2dbee5.label,
        value: _0x2dbee5.suffix,
      })),
      [_0x317c8f, _0x1809ed] = (0, s.useState)(() => {
        if (_0x29eeb9) {
          let _0x33fbbe = _0x4cb3b9.find(
            (_0x265b1b) => _0x265b1b.value === _0x29eeb9,
          );
          if (_0x33fbbe) return _0x33fbbe.value;
        }
        return _0x4cb3b9[0].value;
      });
    return (
      (0, s.useEffect)(() => {
        _0x51753d(_0x317c8f);
      }, []),
      (0, u.jsx)("div", {
        className: "univer-mt-5",
        children: (0, u.jsxs)("div", {
          className: "univer-mt-5",
          children: [
            (0, u.jsx)("div", {
              className: "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
              children: _0x2390c1.t("sheets-pivot-ui.dialog.numfmt.dateTypes"),
            }),
            (0, u.jsx)("div", {
              children: (0, u.jsx)(i.SelectList, {
                className: "univer-rounded-lg univer-p-2",
                options: _0x4cb3b9,
                value: _0x317c8f,
                onChange: (_0x50bdc0) => {
                  (_0x1809ed(_0x50bdc0), _0x51753d(_0x50bdc0));
                },
              }),
            }),
            (0, u.jsx)("div", {
              className:
                "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
              children: _0x2390c1.t("sheets-pivot-ui.dialog.numfmt.dateDesc"),
            }),
          ],
        }),
      })
    );
  },
  vt = ({ originPattern: _0x455a62, handlePatternChange: _0x495fd1 }) => {
    let _0x2f9765 = (0, e.useDependency)(n.LocaleService),
      [_0x140ba7, _0x406d23] = (0, s.useState)(() => U(_0x455a62 || "", 0)),
      _0x2998ff = z.map((_0x267806) => ({
        label: _0x267806.label,
        value: _0x267806.suffix,
        color: _0x267806.color,
      })),
      [_0x1efd4b, _0x37275a] = (0, s.useState)(() => {
        let _0x4999c8 = _0x2998ff.find((_0x305596) =>
          (0, n.isPatternEqualWithoutDecimal)(_0x305596.value, _0x455a62 || ""),
        );
        return (
          (_0x4999c8 == null ? undefined : _0x4999c8.value) ||
          _0x2998ff[0].value
        );
      });
    return (
      (0, s.useEffect)(() => {
        _0x495fd1(W(_0x1efd4b, Number(_0x140ba7 || 0)));
      }, []),
      (0, u.jsxs)("div", {
        className: "univer-mt-5",
        children: [
          (0, u.jsx)("div", {
            className:
              "univer-flex\x20univer-items-center\x20univer-justify-between",
            children: (0, u.jsxs)("div", {
              className: "univer-w-[136px]",
              children: [
                (0, u.jsx)("div", {
                  className: "univer-mb-2 univer-text-sm univer-font-medium",
                  children: _0x2f9765.t(
                    "sheets-pivot-ui.dialog.numfmt.decimalPlaces",
                  ),
                }),
                (0, u.jsx)(i.InputNumber, {
                  className: "univer-box-border\x20univer-h-8",
                  value: _0x140ba7,
                  max: 20,
                  min: 0,
                  onChange: (_0x3ddc18) => {
                    _0x3ddc18 &&
                      (_0x406d23(_0x3ddc18),
                      _0x495fd1(W(_0x1efd4b, Number(_0x3ddc18))));
                  },
                }),
              ],
            }),
          }),
          (0, u.jsxs)("div", {
            className: "univer-mt-4",
            children: [
              (0, u.jsx)("div", {
                className:
                  "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
                children: _0x2f9765.t(
                  "sheets-pivot-ui.dialog.numfmt.negativeNumberTypes",
                ),
              }),
              (0, u.jsx)(i.SelectList, {
                className: "univer-rounded-lg univer-p-2",
                options: _0x2998ff,
                value: _0x1efd4b,
                onChange: (_0x344aa9) => {
                  (_0x406d23(U(_0x344aa9, 0)),
                    _0x37275a(_0x344aa9),
                    _0x495fd1(_0x344aa9));
                },
              }),
              (0, u.jsx)("div", {
                className:
                  "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
                children: _0x2f9765.t(
                  "sheets-pivot-ui.dialog.numfmt.thousandthPercentileDesc",
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  yt = ({
    unitId: _0x153921,
    subUnitId: _0x2d7b74,
    pivotTableId: _0x37b041,
    tableFieldId: _0x5a6c2c,
    originPattern: _0x468473,
    tableFieldInfo: _0x5266a0,
    dataFieldInfo: _0xf2fc78,
  }) => {
    let _0x4f124c = (0, e.useDependency)(n.LocaleService),
      _0xc30993 = (0, e.useDependency)(e.IDialogService),
      _0x5b64df = _0x4f124c.getDirection(),
      _0x5b6275 = (0, s.useMemo)(
        () =>
          [
            {
              label: "sheets-pivot-ui.dialog.numfmt.general",
              component: mt,
              key: "sheet.numfmt.general",
            },
            {
              label: "sheets-pivot-ui.dialog.numfmt.accounting",
              component: ht,
              key: "sheet.numfmt.accounting",
            },
            {
              label: "sheets-pivot-ui.dialog.numfmt.currency",
              component: gt,
              key: "sheet.numfmt.currency",
            },
            {
              label: "sheets-pivot-ui.dialog.numfmt.date",
              component: _t,
              key: "sheet.numfmt.date",
            },
            {
              label: "sheets-pivot-ui.dialog.numfmt.thousandthPercentile",
              component: vt,
              key: "sheet.numfmt.thousandthPercentile",
            },
          ].map((_0x21a7c9) => ({
            ..._0x21a7c9,
            label: _0x4f124c.t(_0x21a7c9.label),
          })),
        [_0x4f124c],
      ),
      _0x46d7d6 = _0x5b6275.map((_0x4057c4) => ({
        label: _0x4057c4.label,
        value: _0x4057c4.key,
      })),
      [_0x1f4b47, _0x59a8a8] = (0, s.useState)(
        () =>
          [he, ge, _e, ye, xe].reduce(
            (_0xf84c3, _0x5b6b48, _0x5dca97) =>
              _0xf84c3 ||
              (_0x5b6b48(_0x468473 ?? "") ? _0x5b6275[_0x5dca97].key : ""),
            "",
          ) || _0x5b6275[0].key,
      ),
      [_0x31224b, _0x358a89] = (0, s.useState)(_0x468473),
      _0x10f712 = (_0x5af95b) => _0x358a89(_0x5af95b),
      _0x38f53a = (_0x4441ec) => {
        _0x59a8a8(_0x4441ec);
      },
      _0x5b2a57 = (_0x71373f) => ({
        id: S,
        title: { title: _0x4f124c.t("sheets-pivot-ui.fieldSettings") },
        draggable: true,
        mask: false,
        maskClosable: false,
        width: 400,
        children: {
          label: x,
          tableFieldId: _0x5a6c2c,
          pivotTableId: _0x37b041,
          unitId: _0x153921,
          subUnitId: _0x2d7b74,
          tableFieldInfo: _0x5266a0,
          dataFieldInfo: _0xf2fc78,
          key: "field-setting-" + (_0x5a6c2c || ""),
          closeFn: () => {
            _0xc30993.close(S);
          },
          format: _0x71373f ? _0x31224b : "",
        },
        onClose: () => {
          _0xc30993.close(S);
        },
      }),
      _0x40ec29 = () => {
        _0xc30993.close(w);
        let _0x4ea10d = _0x5b2a57(false);
        _0xc30993.open(_0x4ea10d);
      };
    return (0, u.jsxs)("div", {
      dir: _0x5b64df,
      children: [
        (0, u.jsx)("div", {
          className: "univer-flex",
          children: (0, u.jsxs)("div", {
            className:
              "univer-mb-5 univer-flex univer-h-6 univer-cursor-pointer univer-items-center univer-text-base univer-font-medium univer-leading-6",
            onClick: _0x40ec29,
            children: [
              (0, u.jsx)(m.ArrowLeftIcon, {}),
              _0x4f124c.t("sheets-pivot-ui.dialog.numfmt.fieldSetting"),
            ],
          }),
        }),
        (0, u.jsx)("div", {
          className:
            "univer-mb-2 univer-h-5 univer-text-sm univer-font-medium univer-leading-5",
          children: _0x4f124c.t("sheets-pivot-ui.dialog.numfmt.formatTypes"),
        }),
        (0, u.jsx)("div", {
          children: (0, u.jsx)(i.Select, {
            className: "univer-w-full",
            value: _0x1f4b47,
            options: _0x46d7d6,
            onChange: (_0x4bf61a) => _0x38f53a(_0x4bf61a),
          }),
        }),
        (0, u.jsxs)("div", {
          children: [
            _0x1f4b47 === "sheet.numfmt.general" &&
              (0, u.jsx)(mt, {
                originPattern: _0x468473,
                handlePatternChange: _0x10f712,
              }),
            _0x1f4b47 === "sheet.numfmt.accounting" &&
              (0, u.jsx)(ht, {
                originPattern: _0x468473,
                handlePatternChange: _0x10f712,
              }),
            _0x1f4b47 === "sheet.numfmt.currency" &&
              (0, u.jsx)(gt, {
                originPattern: _0x468473,
                handlePatternChange: _0x10f712,
              }),
            _0x1f4b47 === "sheet.numfmt.date" &&
              (0, u.jsx)(_t, {
                originPattern: _0x468473,
                handlePatternChange: _0x10f712,
              }),
            _0x1f4b47 === "sheet.numfmt.thousandthPercentile" &&
              (0, u.jsx)(vt, {
                originPattern: _0x468473,
                handlePatternChange: _0x10f712,
              }),
          ],
        }),
        (0, u.jsxs)(i.ActionRow, {
          className: "univer-mt-2 univer-flex univer-justify-end",
          children: [
            (0, u.jsx)(i.Button, {
              onClick: _0x40ec29,
              children: _0x4f124c.t("sheets-pivot-ui.dialog.numfmt.cancel"),
            }),
            (0, u.jsx)(i.Button, {
              className: "univer-ml-3 rtl:univer-ml-0 rtl:univer-mr-3",
              variant: "primary",
              onClick: () => {
                _0xc30993.close(w);
                let _0x20c153 = _0x5b2a57(true);
                _0xc30993.open(_0x20c153);
              },
              children: _0x4f124c.t("sheets-pivot-ui.dialog.numfmt.confirm"),
            }),
          ],
        }),
      ],
    });
  },
  bt = [
    { label: "sheets-pivot-ui.config.pageDownThenOver", value: "false" },
    { label: "sheets-pivot-ui.config.pageOverThenDown", value: "true" },
  ],
  xt = [
    {
      label: "sheets-pivot-ui.config.layoutTabular",
      value: String(l.PivotLayoutTypeEnum["tabular"]),
    },
    {
      label: "sheets-pivot-ui.config.layoutCompact",
      value: String(l.PivotLayoutTypeEnum["compact"]),
    },
    {
      label: "sheets-pivot-ui.config.layoutOutline",
      value: String(l.PivotLayoutTypeEnum["outline"]),
    },
  ],
  St = [
    {
      label: "sheets-pivot-ui.config.rowSubtotalTop",
      value: String(l.PivotSubtotalPositionEnum["top"]),
    },
    {
      label: "sheets-pivot-ui.config.rowSubtotalBottom",
      value: String(l.PivotSubtotalPositionEnum["bottom"]),
    },
  ];
function Ct(_0x33ac76) {
  let {
      unitId: _0x513034,
      subUnitId: _0x3828c6,
      pivotTableId: _0x542325,
    } = _0x33ac76,
    _0x2b7431 = (0, e.useDependency)(n.ICommandService),
    _0x12d042 = (0, e.useDependency)(n.ILogService),
    _0x1ffa22 = (0, e.useDependency)(n.LocaleService),
    _0x336666 = (0, e.useDependency)(t.SheetsPivotTableConfigModel),
    [_0x3e4e8a, _0x45b884] = (0, s.useState)(() => {
      var _0x41da4c, _0x2de2d0;
      let _0x4f2422 = _0x336666.getPivotTableConfig(
          _0x513034,
          _0x3828c6,
          _0x542325,
        ),
        _0x4652d9 =
          (_0x4f2422 == null || (_0x41da4c = _0x4f2422.fieldsConfig) == null
            ? undefined
            : _0x41da4c.options) ?? {};
      return {
        showRowSubtotal: _0x4652d9.showRowSubtotal ?? true,
        showRowGrandTotal: _0x4652d9.showRowGrandTotal ?? true,
        showColSubtotal: _0x4652d9.showColSubtotal ?? true,
        showColGrandTotal: _0x4652d9.showColGrandTotal ?? true,
        pageWrap: _0x4652d9.pageWrap ?? 1,
        pageOverThenDown: _0x4652d9.pageOverThenDown ?? false,
        repeatRowLabels: _0x4652d9.repeatRowLabels ?? false,
        repeatColLabels: _0x4652d9.repeatColLabels ?? false,
        layout:
          (_0x4f2422 == null || (_0x2de2d0 = _0x4f2422.fieldsConfig) == null
            ? undefined
            : _0x2de2d0.layout) ?? l.PivotLayoutTypeEnum["tabular"],
        rowSubtotalPosition:
          _0x4652d9.rowSubtotalPosition ?? l.PivotSubtotalPositionEnum["top"],
      };
    }),
    _0x136fd8 = (_0xbaed5) => {
      let _0x2e9dc7 = {
        unitId: _0x513034,
        subUnitId: _0x3828c6,
        pivotTableId: _0x542325,
        options: _0xbaed5,
      };
      (_0x2b7431
        .executeCommand(t.SetPivotOptionCommand["id"], _0x2e9dc7)
        .catch((_0x1d2d67) => _0x12d042.error("[PivotConfigPanel]", _0x1d2d67)),
        _0x45b884((_0x3e8118) => ({ ..._0x3e8118, ..._0xbaed5 })));
    },
    _0x23d7c5 = (_0x3d724f) => {
      let _0x502c7b = {
        unitId: _0x513034,
        subUnitId: _0x3828c6,
        pivotTableId: _0x542325,
        layout: _0x3d724f,
      };
      (_0x2b7431
        .executeCommand(t.SetPivotLayoutCommand["id"], _0x502c7b)
        .catch((_0x3fba59) => _0x12d042.error("[PivotConfigPanel]", _0x3fba59)),
        _0x45b884((_0x38e9d3) => ({ ..._0x38e9d3, layout: _0x3d724f })));
    };
  return (0, u.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-4 univer-p-4",
    children: [
      (0, u.jsxs)("section", {
        children: [
          (0, u.jsx)("div", {
            className:
              "univer-mb-2 univer-text-sm univer-font-medium univer-text-gray-600",
            children: _0x1ffa22.t("sheets-pivot-ui.config.displaySection"),
          }),
          (0, u.jsxs)("div", {
            className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
            children: [
              (0, u.jsxs)("div", {
                className:
                  "univer-flex univer-items-center univer-justify-between univer-gap-2",
                children: [
                  (0, u.jsx)("span", {
                    className: "univer-text-sm univer-text-gray-600",
                    children: _0x1ffa22.t("sheets-pivot-ui.config.layout"),
                  }),
                  (0, u.jsx)(i.Select, {
                    className: "univer-w-36",
                    value: String(_0x3e4e8a.layout),
                    options: xt.map((_0x1a1ac3) => ({
                      ..._0x1a1ac3,
                      label: _0x1ffa22.t(_0x1a1ac3.label),
                    })),
                    onChange: (_0x1a5608) => _0x23d7c5(Number(_0x1a5608)),
                  }),
                ],
              }),
              (0, u.jsxs)("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  (0, u.jsx)(i.Checkbox, {
                    checked: _0x3e4e8a.repeatRowLabels,
                    disabled:
                      _0x3e4e8a.layout === l.PivotLayoutTypeEnum["compact"],
                    onChange: (_0x469802) =>
                      _0x136fd8({ repeatRowLabels: !!_0x469802 }),
                  }),
                  _0x1ffa22.t("sheets-pivot-ui.config.repeatRowLabels"),
                ],
              }),
              (0, u.jsxs)("label", {
                className:
                  "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-gap-2\x20univer-text-sm\x20univer-text-gray-600",
                children: [
                  (0, u.jsx)(i.Checkbox, {
                    checked: _0x3e4e8a.repeatColLabels,
                    onChange: (_0x4cf716) =>
                      _0x136fd8({ repeatColLabels: !!_0x4cf716 }),
                  }),
                  _0x1ffa22.t("sheets-pivot-ui.config.repeatColLabels"),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, u.jsxs)("section", {
        children: [
          (0, u.jsx)("div", {
            className: (0, i.clsx)(
              "univer-mb-2 univer-text-sm univer-font-medium univer-text-gray-600",
            ),
            children: _0x1ffa22.t("sheets-pivot-ui.config.totalsSection"),
          }),
          (0, u.jsxs)("div", {
            className: "univer-flex univer-flex-col univer-gap-2",
            children: [
              (0, u.jsxs)("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  (0, u.jsx)(i.Checkbox, {
                    checked: _0x3e4e8a.showRowSubtotal,
                    onChange: (_0x2a4c66) =>
                      _0x136fd8({ showRowSubtotal: !!_0x2a4c66 }),
                  }),
                  _0x1ffa22.t("sheets-pivot-ui.config.showRowSubtotal"),
                ],
              }),
              _0x3e4e8a.layout === l.PivotLayoutTypeEnum["outline"] &&
                (0, u.jsxs)("div", {
                  className:
                    "univer-flex univer-items-center univer-justify-between univer-gap-2",
                  children: [
                    (0, u.jsx)("span", {
                      className: "univer-text-sm univer-text-gray-600",
                      children: _0x1ffa22.t(
                        "sheets-pivot-ui.config.rowSubtotalPosition",
                      ),
                    }),
                    (0, u.jsx)(i.Select, {
                      className: "univer-w-36",
                      value: String(_0x3e4e8a.rowSubtotalPosition),
                      options: St.map((_0x279811) => ({
                        ..._0x279811,
                        label: _0x1ffa22.t(_0x279811.label),
                      })),
                      onChange: (_0x475b76) =>
                        _0x136fd8({ rowSubtotalPosition: Number(_0x475b76) }),
                    }),
                  ],
                }),
              (0, u.jsxs)("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  (0, u.jsx)(i.Checkbox, {
                    checked: _0x3e4e8a.showRowGrandTotal,
                    onChange: (_0x218b2d) =>
                      _0x136fd8({ showRowGrandTotal: !!_0x218b2d }),
                  }),
                  _0x1ffa22.t("sheets-pivot-ui.config.showRowGrandTotal"),
                ],
              }),
              (0, u.jsxs)("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  (0, u.jsx)(i.Checkbox, {
                    checked: _0x3e4e8a.showColSubtotal,
                    onChange: (_0x2fd079) =>
                      _0x136fd8({ showColSubtotal: !!_0x2fd079 }),
                  }),
                  _0x1ffa22.t("sheets-pivot-ui.config.showColSubtotal"),
                ],
              }),
              (0, u.jsxs)("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  (0, u.jsx)(i.Checkbox, {
                    checked: _0x3e4e8a.showColGrandTotal,
                    onChange: (_0x147c16) =>
                      _0x136fd8({ showColGrandTotal: !!_0x147c16 }),
                  }),
                  _0x1ffa22.t("sheets-pivot-ui.config.showColGrandTotal"),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, u.jsxs)("section", {
        children: [
          (0, u.jsx)("div", {
            className:
              "univer-mb-2\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-600",
            children: _0x1ffa22.t("sheets-pivot-ui.config.pageSection"),
          }),
          (0, u.jsxs)("div", {
            className: "univer-flex univer-flex-col univer-gap-3",
            children: [
              (0, u.jsxs)("div", {
                className:
                  "univer-flex univer-items-center univer-justify-between univer-gap-2",
                children: [
                  (0, u.jsx)("span", {
                    className: "univer-text-sm\x20univer-text-gray-600",
                    children: _0x1ffa22.t("sheets-pivot-ui.config.pageWrap"),
                  }),
                  (0, u.jsx)(i.InputNumber, {
                    className: "univer-w-24",
                    value: _0x3e4e8a.pageWrap,
                    min: 1,
                    max: 20,
                    onChange: (_0x359146) => {
                      let _0x3e32af = Number(_0x359146);
                      Number.isFinite(_0x3e32af) &&
                        _0x3e32af >= 1 &&
                        _0x136fd8({ pageWrap: _0x3e32af });
                    },
                  }),
                ],
              }),
              (0, u.jsxs)("div", {
                className:
                  "univer-flex univer-items-center univer-justify-between univer-gap-2",
                children: [
                  (0, u.jsx)("span", {
                    className: "univer-text-sm univer-text-gray-600",
                    children: _0x1ffa22.t(
                      "sheets-pivot-ui.config.pageDirection",
                    ),
                  }),
                  (0, u.jsx)(i.Select, {
                    className: "univer-w-36",
                    value: String(_0x3e4e8a.pageOverThenDown),
                    options: bt.map((_0x2a4a04) => ({
                      ..._0x2a4a04,
                      label: _0x1ffa22.t(_0x2a4a04.label),
                    })),
                    onChange: (_0x235b55) =>
                      _0x136fd8({ pageOverThenDown: _0x235b55 === "true" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const wt = (0, s.createContext)(null),
  Tt = (0, s.createContext)(null);
function Et(_0x4c5c1e, _0x6cd9ee) {
  return _0x4c5c1e === _0x6cd9ee
    ? true
    : !_0x4c5c1e || !_0x6cd9ee
      ? false
      : _0x4c5c1e.droppableId === _0x6cd9ee.droppableId &&
        _0x4c5c1e.index === _0x6cd9ee.index;
}
function Dt(_0xc90453) {
  if (!(_0xc90453 instanceof Element)) return null;
  let _0x3e5fdd = _0xc90453.closest("[data-univer-dnd-droppable-id]");
  return _0x3e5fdd instanceof HTMLElement ? _0x3e5fdd : null;
}
function Ot(_0x568288, _0x4d1a5e, _0x1f111b, _0x38b308) {
  let _0x5c49c3 = Array.from(
    _0x568288.querySelectorAll('[data-univer-dnd-item="true"]'),
  ).filter((_0x15680d) => {
    let _0x546994 = _0x15680d.dataset["univerDndId"];
    return _0x546994
      ? _0x546994 !== _0x1f111b.draggableId ||
          _0x1f111b.source["droppableId"] !== _0x38b308
      : false;
  });
  if (!_0x5c49c3.length) return 0;
  for (let _0x850781 = 0; _0x850781 < _0x5c49c3.length - 1; _0x850781++) {
    let _0x3123c8 = _0x5c49c3[_0x850781].getBoundingClientRect();
    if (_0x4d1a5e < _0x3123c8.top + _0x3123c8.height / 2) return _0x850781;
  }
  let _0x4d5a10 = _0x5c49c3.length - 1,
    _0x204c16 = _0x5c49c3[_0x4d5a10].getBoundingClientRect();
  return _0x4d1a5e < _0x204c16.top + _0x204c16.height * 0.35
    ? _0x4d5a10
    : _0x5c49c3.length;
}
function kt() {
  let _0x224a7b = (0, s.useContext)(wt);
  if (!_0x224a7b)
    throw Error("Draggable/Droppable must be used inside DragDropContext");
  return _0x224a7b;
}
function At(_0x414db4) {
  let {
      children: _0x23f6dc,
      onDragEnd: _0x2de6bd,
      onDragStart: _0xe43a4d,
      onDragUpdate: _0x1e8e77,
    } = _0x414db4,
    [_0x376e27, _0x43a99a] = (0, s.useState)(null),
    _0x3ca07c = (0, s.useRef)(null),
    _0x244718 = (0, s.useCallback)(
      (_0x216725, _0x169516) => {
        let _0x9c646e = {
          draggableId: _0x216725,
          source: _0x169516,
          destination: null,
        };
        ((_0x3ca07c.current = _0x9c646e),
          _0x43a99a(_0x9c646e),
          _0xe43a4d == null ||
            _0xe43a4d({ draggableId: _0x216725, source: _0x169516 }),
          _0x1e8e77 == null ||
            _0x1e8e77({
              draggableId: _0x216725,
              source: _0x169516,
              destination: null,
            }));
      },
      [_0xe43a4d, _0x1e8e77],
    ),
    _0x6c5dcc = (0, s.useCallback)(
      (_0x255634) => {
        let _0x41614a = _0x3ca07c.current;
        if (!_0x41614a || Et(_0x41614a.destination, _0x255634)) return;
        let _0xf6522d = { ..._0x41614a, destination: _0x255634 };
        ((_0x3ca07c.current = _0xf6522d),
          _0x43a99a(_0xf6522d),
          _0x1e8e77 == null ||
            _0x1e8e77({
              draggableId: _0xf6522d.draggableId,
              source: _0xf6522d.source,
              destination: _0xf6522d.destination,
            }));
      },
      [_0x1e8e77],
    ),
    _0x21d7f0 = (0, s.useCallback)(
      async (_0x4bd5fe, _0x287d17) => {
        let _0x36b717 = _0x3ca07c.current;
        _0x36b717 &&
          ((_0x3ca07c.current = null),
          _0x43a99a(null),
          await (_0x2de6bd == null
            ? undefined
            : _0x2de6bd({
                draggableId: _0x36b717.draggableId,
                source: _0x36b717.source,
                destination:
                  _0x287d17 === undefined ? _0x36b717.destination : _0x287d17,
                reason: _0x4bd5fe,
              })));
      },
      [_0x2de6bd],
    );
  (0, s.useEffect)(() => {
    if (!_0x376e27) return;
    let _0x247f4c = (_0x354952) => {
      let _0x552190 = Dt(_0x354952.target);
      (!_0x552190 || _0x552190.dataset["univerDndDropDisabled"] === "true") &&
        _0x6c5dcc(null);
    };
    return (
      window.addEventListener("dragover", _0x247f4c, true),
      () => {
        window.removeEventListener("dragover", _0x247f4c, true);
      }
    );
  }, [_0x376e27, _0x6c5dcc]);
  let _0x9c264c = (0, s.useMemo)(
    () => ({
      activeDrag: _0x376e27,
      startDrag: _0x244718,
      updateDestination: _0x6c5dcc,
      endDrag: _0x21d7f0,
    }),
    [_0x376e27, _0x244718, _0x6c5dcc, _0x21d7f0],
  );
  return (0, u.jsx)(wt.Provider, { value: _0x9c264c, children: _0x23f6dc });
}
function jt(_0x4eaf04) {
  var _0x558e20;
  let {
      children: _0x5a7993,
      droppableId: _0x2027a3,
      isDropDisabled: _0x44d3c4 = false,
    } = _0x4eaf04,
    {
      activeDrag: _0x21c33e,
      updateDestination: _0x1c1a1f,
      endDrag: _0x47738e,
    } = kt(),
    _0x544534 = (0, s.useRef)(null),
    _0x212aeb = {
      innerRef: (0, s.useCallback)((_0x1c9339) => {
        _0x544534.current = _0x1c9339;
      }, []),
      droppableProps: {
        onDragOver: (0, s.useCallback)(
          (_0x1826cc) => {
            if (!_0x21c33e || _0x44d3c4 || !_0x544534.current) return;
            _0x1826cc.preventDefault();
            let _0x50308f = Ot(
              _0x544534.current,
              _0x1826cc.clientY,
              _0x21c33e,
              _0x2027a3,
            );
            _0x1c1a1f({ droppableId: _0x2027a3, index: _0x50308f });
          },
          [_0x21c33e, _0x44d3c4, _0x2027a3, _0x1c1a1f],
        ),
        onDrop: (0, s.useCallback)(
          (_0x3aa7e5) => {
            var _0x266d3b;
            if (!_0x21c33e || _0x44d3c4 || !_0x544534.current) return;
            _0x3aa7e5.preventDefault();
            let _0xe008c9 = (((_0x266d3b = _0x21c33e.destination) == null
              ? undefined
              : _0x266d3b.droppableId) === _0x2027a3
              ? _0x21c33e.destination
              : null) ?? {
              droppableId: _0x2027a3,
              index: Ot(
                _0x544534.current,
                _0x3aa7e5.clientY,
                _0x21c33e,
                _0x2027a3,
              ),
            };
            return _0x47738e("DROP", _0xe008c9);
          },
          [_0x21c33e, _0x47738e, _0x44d3c4, _0x2027a3],
        ),
        "data-univer-dnd-droppable-id": _0x2027a3,
        "data-univer-dnd-drop-disabled": String(_0x44d3c4),
      },
      placeholder: null,
    },
    _0x5f3fb7 = {
      isDraggingOver: !!(
        _0x21c33e &&
        ((_0x558e20 = _0x21c33e.destination) == null
          ? undefined
          : _0x558e20.droppableId) === _0x2027a3
      ),
    };
  return (0, u.jsx)(Tt.Provider, {
    value: _0x2027a3,
    children: _0x5a7993(_0x212aeb, _0x5f3fb7),
  });
}
function Mt(_0x5846c5) {
  var _0x1d9232;
  let {
      children: _0x543f13,
      draggableId: _0x35d91d,
      index: _0x52b70c,
      isDragDisabled: _0x2075e4 = false,
    } = _0x5846c5,
    {
      activeDrag: _0x4f8d58,
      startDrag: _0x542872,
      updateDestination: _0x2089a2,
      endDrag: _0x882920,
    } = kt(),
    _0x27dc7d = (0, s.useContext)(Tt),
    _0x1d93b4 = (0, s.useRef)(null),
    _0x38d0be = (0, s.useRef)(null),
    _0x10c8f3 = (0, s.useRef)(false),
    _0xf46754 = (0, s.useRef)(null),
    _0x20b61f = (0, s.useRef)(null),
    _0x39e8a4 = (0, s.useRef)(false),
    _0x423444 = (0, s.useRef)(null),
    _0x53d7de = (0, s.useRef)(null),
    _0x267a9f = (0, s.useRef)(null),
    _0x3ef7ba = (0, s.useCallback)((_0x14c0a5) => {
      _0x1d93b4.current = _0x14c0a5;
    }, []),
    _0x27739a =
      (_0x4f8d58 == null ? undefined : _0x4f8d58.draggableId) === _0x35d91d,
    _0x4f9d50 = (0, s.useCallback)(() => {
      _0x20b61f.current &&= (window.clearTimeout(_0x20b61f.current), null);
    }, []),
    _0x49a271 = (0, s.useCallback)(() => {
      (_0x4f9d50(),
        (_0x267a9f.current = null),
        (_0xf46754.current &&= (_0xf46754.current(), null)),
        (_0x423444.current &&= (_0x423444.current["remove"](), null)),
        (_0x53d7de.current = null),
        (_0x10c8f3.current = false));
    }, [_0x4f9d50]);
  (0, s.useEffect)(() => _0x49a271, [_0x49a271]);
  let _0x5a3c9c = (0, s.useCallback)((_0x4bf306, _0x3f9066) => {
      if (_0x423444.current) return;
      let _0x27d0c8 = _0x1d93b4.current;
      if (!_0x27d0c8) return;
      let _0x54229f = _0x27d0c8.getBoundingClientRect(),
        _0x30dace =
          _0x4bf306 > 0 ? Math.max(0, _0x4bf306 - _0x54229f.left) : 12,
        _0x54c138 = _0x3f9066 > 0 ? Math.max(0, _0x3f9066 - _0x54229f.top) : 12,
        _0x2faa00 = _0x27d0c8.cloneNode(true);
      if (!(_0x2faa00 instanceof HTMLDivElement)) return;
      let _0x22010d = _0x2faa00;
      ((_0x22010d.style["position"] = "fixed"),
        (_0x22010d.style["left"] = "0px"),
        (_0x22010d.style["top"] = "0px"),
        (_0x22010d.style["width"] = _0x54229f.width + "px"),
        (_0x22010d.style["height"] = _0x54229f.height + "px"),
        (_0x22010d.style["pointerEvents"] = "none"),
        (_0x22010d.style["opacity"] = "0.9"),
        (_0x22010d.style["zIndex"] = "2147483647"),
        (_0x22010d.style["boxSizing"] = "border-box"),
        (_0x22010d.style["transform"] =
          "translate(" +
          Math.max(0, _0x4bf306 - _0x30dace) +
          "px, " +
          Math.max(0, _0x3f9066 - _0x54c138) +
          "px)"),
        document.body["appendChild"](_0x22010d),
        (_0x423444.current = _0x22010d),
        (_0x53d7de.current = { x: _0x30dace, y: _0x54c138 }));
    }, []),
    _0x5123ef = (0, s.useCallback)((_0x86819b, _0x4e2c9c) => {
      let _0x416c77 = _0x423444.current,
        _0x40918f = _0x53d7de.current;
      !_0x416c77 ||
        !_0x40918f ||
        (_0x416c77.style["transform"] =
          "translate(" +
          Math.max(0, _0x86819b - _0x40918f.x) +
          "px, " +
          Math.max(0, _0x4e2c9c - _0x40918f.y) +
          "px)");
    }, []),
    _0x173aa4 = (0, s.useCallback)(
      (_0x24d9ed, _0x1fbc7e) => {
        let _0x2882a3 = Dt(document.elementFromPoint(_0x24d9ed, _0x1fbc7e));
        if (!_0x2882a3 || _0x2882a3.dataset["univerDndDropDisabled"] === "true")
          return null;
        let _0xd6495e = _0x2882a3.dataset["univerDndDroppableId"];
        return _0xd6495e
          ? {
              droppableId: _0xd6495e,
              index: Ot(
                _0x2882a3,
                _0x1fbc7e,
                {
                  draggableId: _0x35d91d,
                  source: { droppableId: _0x27dc7d ?? "", index: _0x52b70c },
                  destination: null,
                },
                _0xd6495e,
              ),
            }
          : null;
      },
      [_0x35d91d, _0x27dc7d, _0x52b70c],
    ),
    _0x1895c0 = (0, s.useCallback)(
      (_0x2dd1fb, _0x11fd74, _0x40879f, _0x1694e9) => {
        if (_0x10c8f3.current || _0x39e8a4.current || _0x2075e4 || !_0x27dc7d)
          return;
        ((_0x10c8f3.current = true), _0x4f9d50(), (_0x39e8a4.current = false));
        try {
          var _0x36456d;
          (_0x36456d = _0x1d93b4.current) == null ||
            _0x36456d.setPointerCapture(_0x11fd74);
        } catch {}
        (_0x5a3c9c(_0x40879f, _0x1694e9),
          _0x542872(_0x35d91d, { droppableId: _0x27dc7d, index: _0x52b70c }));
        let _0x4b7efd = _0x173aa4(_0x40879f, _0x1694e9);
        _0x2089a2(_0x4b7efd);
        try {
          _0x2dd1fb.preventDefault();
        } catch {}
      },
      [
        _0x4f9d50,
        _0x35d91d,
        _0x27dc7d,
        _0x52b70c,
        _0x2075e4,
        _0x5a3c9c,
        _0x173aa4,
        _0x542872,
        _0x2089a2,
      ],
    ),
    _0x540084 = (0, s.useCallback)(
      (_0x44caa8) => {
        if (
          _0x2075e4 ||
          !_0x27dc7d ||
          (_0x44caa8.pointerType === "mouse" && _0x44caa8.button !== 0)
        )
          return;
        _0x39e8a4.current = false;
        let _0x437cad = _0x44caa8.pointerId;
        ((_0x267a9f.current = {
          pointerId: _0x437cad,
          pointerType: _0x44caa8.pointerType,
          startX: _0x44caa8.clientX,
          startY: _0x44caa8.clientY,
        }),
          _0x4f9d50(),
          _0x44caa8.pointerType !== "mouse" &&
            (_0x20b61f.current = window.setTimeout(() => {
              let _0xd4a58 = _0x267a9f.current;
              !_0xd4a58 ||
                _0xd4a58.pointerId !== _0x437cad ||
                _0x1895c0(
                  _0x44caa8.nativeEvent,
                  _0xd4a58.pointerId,
                  _0xd4a58.startX,
                  _0xd4a58.startY,
                );
            }, 150)));
        let _0x440bda = (_0x5278dc) => {
            let _0x2cb577 = _0x267a9f.current;
            if (!_0x2cb577 || _0x5278dc.pointerId !== _0x2cb577.pointerId)
              return;
            if (!_0x10c8f3.current) {
              if (_0x39e8a4.current) {
                _0x49a271();
                return;
              }
              if (_0x2cb577.pointerType === "mouse") {
                let _0x54ba71 = _0x5278dc.clientX - _0x2cb577.startX,
                  _0x33a627 = _0x5278dc.clientY - _0x2cb577.startY;
                _0x54ba71 * _0x54ba71 + _0x33a627 * _0x33a627 >= 16 &&
                  _0x1895c0(
                    _0x5278dc,
                    _0x2cb577.pointerId,
                    _0x5278dc.clientX,
                    _0x5278dc.clientY,
                  );
              }
              return;
            }
            _0x5123ef(_0x5278dc.clientX, _0x5278dc.clientY);
            let _0x526434 = _0x173aa4(_0x5278dc.clientX, _0x5278dc.clientY);
            _0x2089a2(_0x526434);
            try {
              _0x5278dc.preventDefault();
            } catch {}
          },
          _0x27607b = (_0x4cb3ad) => {
            let _0x5a8f8b = _0x267a9f.current;
            if (!_0x5a8f8b || _0x4cb3ad.pointerId !== _0x5a8f8b.pointerId)
              return;
            let _0x239480 = _0x10c8f3.current
                ? _0x173aa4(_0x4cb3ad.clientX, _0x4cb3ad.clientY)
                : null,
              _0x8b5c37 = _0x10c8f3.current
                ? _0x882920(_0x239480 ? "DROP" : "CANCEL", _0x239480)
                : Promise.resolve();
            return (_0x49a271(), _0x8b5c37);
          };
        (window.addEventListener("pointermove", _0x440bda, {
          capture: true,
          passive: false,
        }),
          window.addEventListener("pointerup", _0x27607b, { capture: true }),
          window.addEventListener("pointercancel", _0x27607b, {
            capture: true,
          }),
          (_0xf46754.current = () => {
            (window.removeEventListener("pointermove", _0x440bda, true),
              window.removeEventListener("pointerup", _0x27607b, true),
              window.removeEventListener("pointercancel", _0x27607b, true));
          }));
      },
      [
        _0x49a271,
        _0x4f9d50,
        _0x27dc7d,
        _0x882920,
        _0x2075e4,
        _0x173aa4,
        _0x1895c0,
        _0x2089a2,
        _0x5123ef,
      ],
    ),
    _0x956399 = (0, s.useCallback)((_0x53d90c) => {
      let _0x307825 = _0x53d90c.dataTransfer;
      if (!_0x307825 || typeof _0x307825.setDragImage != "function") return;
      let _0x82bbfb = _0x53d90c.currentTarget,
        _0x21258c = _0x82bbfb.cloneNode(true);
      if (!(_0x21258c instanceof HTMLDivElement)) return;
      let _0x125193 = _0x21258c;
      ((_0x125193.style["position"] = "fixed"),
        (_0x125193.style["left"] = "-9999px"),
        (_0x125193.style["top"] = "-9999px"),
        (_0x125193.style["width"] =
          _0x82bbfb.getBoundingClientRect().width + "px"),
        (_0x125193.style["pointerEvents"] = "none"),
        (_0x125193.style["opacity"] = "0.95"),
        (_0x125193.style["zIndex"] = "2147483647"),
        document.body["appendChild"](_0x125193));
      let _0x4dfbde = _0x82bbfb.getBoundingClientRect(),
        _0x4d0206 =
          _0x53d90c.clientX > 0
            ? Math.max(0, _0x53d90c.clientX - _0x4dfbde.left)
            : 12,
        _0x3a32e1 =
          _0x53d90c.clientY > 0
            ? Math.max(0, _0x53d90c.clientY - _0x4dfbde.top)
            : 12;
      (_0x307825.setDragImage(_0x125193, _0x4d0206, _0x3a32e1),
        _0x38d0be.current &&
          _0x38d0be.current !== _0x125193 &&
          _0x38d0be.current["remove"](),
        (_0x38d0be.current = _0x125193));
    }, []),
    _0x308892 = (0, s.useCallback)(
      (_0x40ad47) => {
        if (_0x10c8f3.current) {
          _0x40ad47.preventDefault();
          return;
        }
        if (_0x2075e4 || !_0x27dc7d) {
          _0x40ad47.preventDefault();
          return;
        }
        ((_0x39e8a4.current = true),
          _0x4f9d50(),
          (_0x267a9f.current = null),
          (_0xf46754.current &&= (_0xf46754.current(), null)));
        let _0x47e8dd = _0x40ad47.dataTransfer;
        if (_0x47e8dd) {
          try {
            _0x47e8dd.effectAllowed = "move";
          } catch {}
          try {
            _0x47e8dd.setData("text/plain", _0x35d91d);
          } catch {}
        }
        try {
          _0x956399(_0x40ad47);
        } catch {}
        _0x542872(_0x35d91d, { droppableId: _0x27dc7d, index: _0x52b70c });
      },
      [
        _0x956399,
        _0x4f9d50,
        _0x35d91d,
        _0x27dc7d,
        _0x52b70c,
        _0x2075e4,
        _0x542872,
      ],
    ),
    _0x1a1f8f = (0, s.useCallback)(
      () => (
        (_0x38d0be.current &&= (_0x38d0be.current["remove"](), null)),
        _0x882920("CANCEL", null)
      ),
      [_0x882920],
    );
  return _0x543f13(
    {
      innerRef: _0x3ef7ba,
      draggableProps: {
        draggable: !_0x2075e4,
        onDragStart: _0x308892,
        onDragEnd: _0x1a1f8f,
        style: _0x27739a ? { opacity: 1 } : undefined,
        "data-univer-dnd-item": "true",
        "data-univer-dnd-id": _0x35d91d,
        "data-univer-dnd-index": String(_0x52b70c),
      },
      dragHandleProps: { onPointerDown: _0x540084 },
    },
    {
      isDragging: _0x27739a,
      draggingOver:
        _0x4f8d58 == null || (_0x1d9232 = _0x4f8d58.destination) == null
          ? undefined
          : _0x1d9232.droppableId,
    },
  );
}
function Nt(_0x1be7f7, _0x4083e7) {
  switch (_0x1be7f7) {
    case "filter":
      return _0x4083e7.t("sheets-pivot-ui.filter");
    case "row":
      return _0x4083e7.t("sheets-pivot-ui.row");
    case "column":
      return _0x4083e7.t("sheets-pivot-ui.column");
    case "value":
      return _0x4083e7.t("sheets-pivot-ui.value");
  }
}
function Pt(_0x3d99c8) {
  switch (_0x3d99c8) {
    case "filter":
      return (0, u.jsx)(m.FilterIcon, {
        className: "univer-flex univer-flex-row univer-gap-4",
      });
    case "row":
      return (0, u.jsx)(m.ColumnIcon, {
        className: "univer-flex univer-flex-row univer-gap-4",
      });
    case "column":
      return (0, u.jsx)(m.RowIcon, {
        className: "univer-flex univer-flex-row univer-gap-4",
      });
    case "value":
      return (0, u.jsx)(m.FunctionIcon, {
        className: "univer-flex univer-flex-row univer-gap-4",
      });
  }
}
function Ft(_0x42f94b) {
  switch (_0x42f94b) {
    case "filter":
      return (0, u.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [
          (0, u.jsx)("path", {
            d: "M4.99957\x201.875C2.84556\x201.875\x201.67491\x204.3932\x203.06336\x206.04001L11.5946\x2016.1587V26.4187C11.5946\x2027.4582\x2012.2298\x2028.3922\x2013.1966\x2028.7741L16.1601\x2029.9449C17.8221\x2030.6015\x2019.6232\x2029.3766\x2019.6232\x2027.5895V16.1587L28.1544\x206.04C29.5428\x204.3932\x2028.3722\x201.875\x2026.2182\x201.875H4.99957Z",
            fill: "#ECECEC",
          }),
          (0, u.jsx)("rect", {
            x: "21.9404",
            y: "17.8544",
            width: "7.59766",
            height: "2.2793",
            rx: "1.13965",
            fill: "#274FEE",
          }),
          (0, u.jsx)("rect", {
            x: "21.9404",
            y: "21.9067",
            width: "7.59766",
            height: "2.2793",
            rx: "1.13965",
            fill: "#274FEE",
          }),
          (0, u.jsx)("rect", {
            x: "21.9404",
            y: "25.959",
            width: "7.59766",
            height: "2.2793",
            rx: "1.13965",
            fill: "#274FEE",
          }),
        ],
      });
    case "row":
      return (0, u.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [
          (0, u.jsx)("path", {
            d: "M2 12.3661C2 12.0347 2.26863 11.7661 2.6 11.7661H9.24705C9.57842 11.7661 9.84705 12.0347 9.84705 12.3661V29.278C9.84705 29.6093 9.57842 29.878 9.24705 29.878H4C2.89543 29.878 2 28.9825 2 27.878V12.3661Z",
            fill: "#D8D8D8",
          }),
          (0, u.jsx)("path", {
            d: "M2 4.0863C2 2.98173 2.89543 2.0863 4 2.0863H9.24705C9.57842 2.0863 9.84705 2.35493 9.84705 2.6863V8.73981C9.84705 9.07118 9.57842 9.33981 9.24705 9.33981H2.6C2.26863 9.33981 2 9.07118 2 8.73981V4.0863Z",
            fill: "#D8D8D8",
          }),
          (0, u.jsx)("path", {
            d: "M12.2983 12.4011C12.2982 12.0697 12.5669 11.8009 12.8983 11.8009L29.3931 11.8009C29.7243 11.8009 29.9929 12.0694 29.9931 12.4007L29.9993 27.9129C29.9997 29.0178 29.1042 29.9137 27.9993 29.9137H12.9051C12.5738 29.9137 12.3053 29.6452 12.3051 29.314L12.2983 12.4011Z",
            fill: "#ECECEC",
          }),
          (0, u.jsx)("path", {
            d: "M12.2517 2.6863C12.2517 2.35493 12.5203 2.0863 12.8517 2.0863H27.9582C29.0628 2.0863 29.9582 2.98173 29.9582 4.0863V8.73627C29.9582 9.06764 29.6896 9.33627 29.3582 9.33627H12.8517C12.5203 9.33627 12.2517 9.06764 12.2517 8.73627L12.2517 2.6863Z",
            fill: "#274FEE",
          }),
        ],
      });
    case "column":
      return (0, u.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [
          (0, u.jsx)("path", {
            d: "M2 12.3661C2 12.0347 2.26863 11.7661 2.6 11.7661H9.24705C9.57842 11.7661 9.84705 12.0347 9.84705 12.3661V29.278C9.84705 29.6093 9.57842 29.878 9.24705 29.878H4C2.89543 29.878 2 28.9825 2 27.878V12.3661Z",
            fill: "#274FEE",
          }),
          (0, u.jsx)("path", {
            d: "M2\x204.0863C2\x202.98173\x202.89543\x202.0863\x204\x202.0863H9.24705C9.57842\x202.0863\x209.84705\x202.35493\x209.84705\x202.6863V8.73981C9.84705\x209.07118\x209.57842\x209.33981\x209.24705\x209.33981H2.6C2.26863\x209.33981\x202\x209.07118\x202\x208.73981V4.0863Z",
            fill: "#D8D8D8",
          }),
          (0, u.jsx)("path", {
            d: "M12.2637 2.6863C12.2637 2.35493 12.5323 2.0863 12.8637 2.0863H27.9702C29.0748 2.0863 29.9702 2.98173 29.9702 4.0863V8.73627C29.9702 9.06764 29.7016 9.33627 29.3702 9.33627H12.8637C12.5323 9.33627 12.2637 9.06764 12.2637 8.73627L12.2637 2.6863Z",
            fill: "#D8D8D8",
          }),
          (0, u.jsx)("path", {
            d: "M12.2982 12.4011C12.2981 12.0697 12.5667 11.8009 12.8982 11.8009L29.3929 11.8009C29.7242 11.8009 29.9928 12.0694 29.9929 12.4007L29.9992 27.9129C29.9996 29.0178 29.104 29.9137 27.9992 29.9137H12.905C12.5737 29.9137 12.3051 29.6452 12.305 29.314L12.2982 12.4011Z",
            fill: "#ECECEC",
          }),
        ],
      });
    case "value":
      return (0, u.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0\x200\x2032\x2032",
        fill: "none",
        children: [
          (0, u.jsx)("path", {
            d: "M2 12.3661C2 12.0347 2.26863 11.7661 2.6 11.7661H9.24705C9.57842 11.7661 9.84705 12.0347 9.84705 12.3661V29.278C9.84705 29.6093 9.57842 29.878 9.24705 29.878H4C2.89543 29.878 2 28.9825 2 27.878V12.3661Z",
            fill: "#D8D8D8",
          }),
          (0, u.jsx)("path", {
            d: "M2 4.0863C2 2.98173 2.89543 2.0863 4 2.0863H9.24705C9.57842 2.0863 9.84705 2.35493 9.84705 2.6863V8.73981C9.84705 9.07118 9.57842 9.33981 9.24705 9.33981H2.6C2.26863 9.33981 2 9.07118 2 8.73981V4.0863Z",
            fill: "#D8D8D8",
          }),
          (0, u.jsx)("path", {
            d: "M12.2637 2.6863C12.2637 2.35493 12.5323 2.0863 12.8637 2.0863H27.9702C29.0748 2.0863 29.9702 2.98173 29.9702 4.0863V8.73627C29.9702 9.06764 29.7016 9.33627 29.3702 9.33627H12.8637C12.5323 9.33627 12.2637 9.06764 12.2637 8.73627L12.2637 2.6863Z",
            fill: "#D8D8D8",
          }),
          (0, u.jsx)("path", {
            d: "M12.2982 12.4011C12.2981 12.0697 12.5667 11.8009 12.8982 11.8009L29.3929 11.8009C29.7242 11.8009 29.9928 12.0694 29.9929 12.4007L29.9992 27.9129C29.9996 29.0178 29.104 29.9137 27.9992 29.9137H12.905C12.5737 29.9137 12.3051 29.6452 12.305 29.314L12.2982 12.4011Z",
            fill: "#274FEE",
          }),
        ],
      });
  }
}
function It(_0x3ff1da, _0x5752e8) {
  switch (_0x3ff1da) {
    case "filter":
      return _0x5752e8.t("sheets-pivot-ui.filterDesc");
    case "row":
      return _0x5752e8.t("sheets-pivot-ui.rowDesc");
    case "column":
      return _0x5752e8.t("sheets-pivot-ui.columnDesc");
    case "value":
      return _0x5752e8.t("sheets-pivot-ui.valueDesc");
  }
}
function Lt(_0x36890d) {
  let _0x2f5a82 = (0, e.useDependency)(n.LocaleService),
    { areaType: _0x10481a } = _0x36890d,
    _0x1d6066 = It(_0x10481a, _0x2f5a82);
  return (0, u.jsxs)("div", {
    className:
      "univer-flex univer-h-[140px] univer-flex-col univer-items-center univer-justify-center univer-gap-1 univer-self-stretch univer-px-2",
    children: [
      (0, u.jsx)("div", {
        className: "univer-size-8",
        children: Ft(_0x10481a),
      }),
      (0, u.jsx)("div", {
        className:
          "univer-text-center univer-text-xs univer-leading-4 univer-text-gray-600 dark:!univer-text-gray-200",
        children: _0x1d6066,
      }),
    ],
  });
}
function Y(_0x1e21a2) {
  let {
      areaType: _0x595f79,
      items: _0x1ebf68,
      positionInfo: _0x4b93bc,
      pivotTableId: _0x461718,
      pivotTableInfo: _0xff72dc,
    } = _0x1e21a2,
    _0x3650da = (0, e.useDependency)(n.LocaleService);
  return (0, u.jsxs)("div", {
    className: "univer-min-h-[200px]\x20univer-flex-1\x20univer-p-1",
    children: [
      (0, u.jsxs)("div", {
        className:
          "univer-mb-2\x20univer-mt-0\x20univer-flex\x20univer-w-full\x20univer-text-sm\x20univer-leading-4\x20univer-text-gray-900",
        children: [
          Pt(_0x595f79),
          (0, u.jsx)("span", {
            className: "univer-inline-block univer-align-top",
            children: Nt(_0x595f79, _0x3650da),
          }),
        ],
      }),
      (0, u.jsx)(jt, {
        droppableId: "" + _0x595f79,
        isCombineEnabled: false,
        isDropDisabled: false,
        ignoreContainerClipping: false,
        direction: "vertical",
        children: (_0x336197, _0xdc8662) =>
          (0, u.jsx)("div", {
            className: (0, i.clsx)(
              "univer-box-border\x20univer-h-[161px]\x20univer-w-full\x20univer-flex-col\x20univer-items-center\x20univer-justify-center\x20univer-overflow-x-hidden\x20univer-rounded-lg\x20univer-bg-gray-50\x20univer-py-2\x20dark:!univer-bg-gray-900",
              i.borderClassName,
              { "univer-border-primary-600": _0xdc8662.isDraggingOver },
            ),
            children: (0, u.jsx)("div", {
              className: (0, i.clsx)(
                "univer-h-full\x20univer-overflow-y-auto",
                i.scrollbarClassName,
              ),
              children: (0, u.jsxs)("div", {
                ref: _0x336197.innerRef,
                className: "univer-box-border\x20univer-h-full\x20univer-px-2",
                ..._0x336197.droppableProps,
                children: [
                  _0x1ebf68.length > 0 &&
                    _0x1ebf68.map((_0x4594f8, _0x3bb4be) =>
                      (0, u.jsx)(
                        "div",
                        {
                          children: (0, u.jsx)(
                            Mt,
                            {
                              isDragDisabled: false,
                              draggableId: _0x4594f8.tableFieldId,
                              index: _0x3bb4be,
                              children: (_0xc285f6, _0x1b12c3) =>
                                (0, u.jsx)(u.Fragment, {
                                  children: (0, u.jsx)("div", {
                                    ref: _0xc285f6.innerRef,
                                    ..._0xc285f6.draggableProps,
                                    ..._0xc285f6.dragHandleProps,
                                    style: _0xc285f6.draggableProps["style"],
                                    className: (0, i.clsx)(
                                      "univer-flex\x20univer-items-center\x20univer-gap-1\x20univer-self-stretch\x20univer-border\x20univer-border-transparent\x20univer-p-0.5\x20univer-leading-4\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700",
                                      _0x1b12c3.draggingOver &&
                                        "univer-border-primary-600",
                                    ),
                                    children: (0, u.jsx)(Rt, {
                                      pivotTableId: _0x461718,
                                      positionInfo: _0x4b93bc,
                                      item: _0x4594f8,
                                      areaType: _0x595f79,
                                      pivotTableInfo: _0xff72dc,
                                    }),
                                  }),
                                }),
                            },
                            _0x4594f8.tableFieldId,
                          ),
                        },
                        _0x4594f8.tableFieldId,
                      ),
                    ),
                  _0x1ebf68.length === 0 &&
                    (0, u.jsx)(Lt, { areaType: _0x595f79 }),
                ],
              }),
            }),
          }),
      }),
    ],
  });
}
function Rt(_0xd07fc3) {
  let {
      areaType: _0x59a7a2,
      item: _0x379a6d,
      positionInfo: _0x3c3a52,
      pivotTableId: _0x3cf092,
      pivotTableInfo: _0x4b7f48,
    } = _0xd07fc3,
    { unitId: _0x4ff6a2, subUnitId: _0x2a6b61 } = _0x3c3a52,
    _0x9e43e8 = _0x379a6d.tableFieldId === V,
    _0x5e3aa7 = (0, e.useDependency)(n.ICommandService),
    _0x57d85c = (0, e.useDependency)(n.LocaleService),
    _0x2e6ff2 = () => {
      if (_0x9e43e8) {
        let _0x109d17 = (_0x4b7f48.valueFields || []).map(
          (_0x41c607) => _0x41c607.tableFieldId,
        );
        H(
          {
            pivotTableId: _0x3cf092,
            unitId: _0x4ff6a2,
            subUnitId: _0x2a6b61,
            commandService: _0x5e3aa7,
          },
          _0x109d17,
        );
      } else
        H(
          {
            pivotTableId: _0x3cf092,
            unitId: _0x4ff6a2,
            subUnitId: _0x2a6b61,
            commandService: _0x5e3aa7,
          },
          [_0x379a6d.tableFieldId],
        );
    },
    _0x3bf6f2 = () => {
      !_0x4ff6a2 ||
        !_0x2a6b61 ||
        ue(_0x5e3aa7, _0x4ff6a2, _0x2a6b61, _0x3cf092, _0x379a6d.tableFieldId);
    },
    _0x55deb8 = () => {
      !_0x4ff6a2 ||
        !_0x2a6b61 ||
        de(
          _0x5e3aa7,
          _0x3cf092,
          _0x379a6d.tableFieldId,
          _0x4ff6a2,
          _0x2a6b61,
          _0x4b7f48,
        );
    },
    _0x523a03 = (_0x50f088) => {
      let _0x441811 =
          _0x50f088 === "column"
            ? l.PivotTableValuePositionEnum["Row"]
            : l.PivotTableValuePositionEnum["Column"],
        _0x133c5f =
          _0x50f088 === "column"
            ? _0x4b7f48.rowFields["length"]
            : _0x4b7f48.columnFields["length"];
      ce(
        {
          pivotTableId: _0x3cf092,
          unitId: _0x4ff6a2,
          subUnitId: _0x2a6b61,
          commandService: _0x5e3aa7,
        },
        _0x441811,
        _0x133c5f,
      );
    },
    _0xf01a8f = (0, u.jsxs)("div", {
      className:
        "univer-inline-flex univer-flex-col univer-rounded-lg univer-border univer-border-gray-200 univer-bg-gray-0 univer-p-2 univer-shadow-lg",
      children: [
        (0, u.jsx)("div", {
          className:
            "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 dark:!univer-text-gray-0",
          onClick: () => {
            _0x2e6ff2();
          },
          children: _0x57d85c.t("sheets-pivot-ui.removeField"),
        }),
        _0x59a7a2 !== "value" &&
          !_0x9e43e8 &&
          (0, u.jsx)("div", {
            className:
              "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-self-stretch\x20univer-px-2\x20univer-py-1.5\x20univer-text-sm\x20univer-leading-5\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
            onClick: () => {
              _0x3bf6f2();
            },
            children: _0x57d85c.t("sheets-pivot-ui.filterField"),
          }),
        _0x9e43e8 &&
          (0, u.jsx)("div", {
            className:
              "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-self-stretch\x20univer-px-2\x20univer-py-1.5\x20univer-text-sm\x20univer-leading-5\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
            onClick: () => {
              _0x523a03(_0x59a7a2);
            },
            children:
              _0x59a7a2 === "column"
                ? _0x57d85c.t("sheets-pivot-ui.moveToRow")
                : _0x57d85c.t("sheets-pivot-ui.moveToColumn"),
          }),
        _0x59a7a2 === "value" &&
          (0, u.jsx)("div", {
            className:
              "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 dark:!univer-text-gray-0",
            onClick: () => {
              _0x55deb8();
            },
            children: _0x57d85c.t("sheets-pivot-ui.fieldSettings"),
          }),
      ],
    }),
    _0x28ae07 = (0, u.jsx)("bdi", {
      dir: "auto",
      children: _0x9e43e8
        ? _0x57d85c.t("sheets-pivot-ui.multipleValue")
        : _0x379a6d.displayName,
    });
  return (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(m.GripVerticalIcon, {}),
      (0, u.jsx)("div", {
        className:
          "univer-max-w-[66px] univer-flex-1 univer-shrink-0 univer-truncate univer-text-xs univer-leading-4 univer-text-gray-800 dark:!univer-text-gray-100",
        children: (0, u.jsx)(i.Tooltip, {
          title: _0x28ae07,
          children: _0x28ae07,
        }),
      }),
      (0, u.jsx)("div", {
        className: "univer-cursor-pointer",
        children: (0, u.jsx)(i.Dropdown, {
          align: "end",
          overlay: _0xf01a8f,
          children: (0, u.jsx)("span", {
            children: (0, u.jsx)(m.MoreHorizontalIcon, {}),
          }),
        }),
      }),
    ],
  });
}
function zt(_0x35ec21) {
  var _0x5abcd8;
  let _0x36cd78 = (0, e.useDependency)(n.IUniverInstanceService),
    _0x82be71 = (0, e.useDependency)(n.LocaleService),
    _0x5670fd = (0, e.useDependency)(n.ICommandService),
    _0x399317 = (0, e.useDependency)(F),
    {
      sourceRangeInfo: _0x957a26,
      refreshHandler: _0x4d8dc9,
      pivotTableId: _0x1b45bd,
      positionInfo: _0x5e832a,
    } = _0x35ec21,
    { unitId: _0x4eb852, range: _0x295463, subUnitId: _0x2d1ded } = _0x957a26,
    _0xb69be9 = _0x36cd78.getUnit(_0x4eb852),
    _0x15a541 =
      (_0xb69be9 == null ||
      (_0x5abcd8 = _0xb69be9.getSheetBySheetId(_0x2d1ded)) == null
        ? undefined
        : _0x5abcd8.getName()) ?? "",
    [_0x5c89bd, _0x245ced] = (0, s.useState)(undefined),
    _0x399c14 = (0, s.useRef)(_0x5c89bd);
  _0x399c14.current = _0x5c89bd;
  let [_0x262b25, _0x12a2f2] = (0, s.useState)(_0x295463),
    [_0x3bfd57, _0xafd5d8] = (0, s.useState)(_0x15a541),
    [_0x4ae9b7, _0x4f720f] = (0, s.useState)(false);
  ((0, s.useEffect)(() => {
    _0x399317.setIsRangeSelectorFocus(_0x4ae9b7);
  }, [_0x4ae9b7, _0x399317]),
    (0, s.useEffect)(() => {
      (_0x12a2f2(_0x957a26.range), _0xafd5d8(_0x15a541));
    }, [_0x957a26, _0x15a541]));
  let _0x9ca1a8 = (0, s.useMemo)(
    () =>
      (0, n.debounce)(
        async (_0x4c63f5) => {
          let _0x5f2a18 = _0x4c63f5
            .split(",")
            .filter((_0x2fb7c0) => !!_0x2fb7c0)
            .map(a.deserializeRangeWithSheet);
          if (!_0x5f2a18[0]) return;
          let _0x4921bc = _0x5f2a18[0];
          if (!_0xb69be9 || _0x399c14.current) return;
          let _0x30d359 = _0x4921bc.sheetName || _0x957a26.sheetName;
          (_0x12a2f2(_0x4921bc.range), _0xafd5d8(_0x30d359));
          let _0x5a2ecb = {
            unitId: _0x4eb852,
            subUnitId: _0xb69be9.getSheetBySheetName(_0x30d359).getSheetId(),
            range: { ..._0x4921bc.range },
            sheetName: _0x30d359,
          };
          (await ae(
            _0x5670fd,
            _0x1b45bd,
            _0x5a2ecb,
            _0x5e832a.unitId,
            _0x5e832a.subUnitId,
          ),
            _0x4d8dc9());
        },
        300,
        { leading: false, maxWait: 1000, trailing: true },
      ),
    [],
  );
  return (0, u.jsxs)("div", {
    className: "univer-mb-4",
    children: [
      (0, u.jsxs)("div", {
        className:
          "univer-mb-2 univer-flex univer-h-5 univer-justify-between univer-text-sm univer-leading-5",
        children: [
          (0, u.jsx)("span", {
            className:
              "univer-text-justify univer-text-gray-900 dark:!univer-text-gray-0",
            children: _0x82be71.t("sheets-pivot-ui.sourceRangeLabel"),
          }),
          (0, u.jsx)("span", {
            className:
              "univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
            children: _0x82be71.t("sheets-pivot-ui.sourceRangePlaceholder"),
          }),
        ],
      }),
      (0, u.jsxs)("div", {
        className: "univer-relative",
        children: [
          (0, u.jsx)(o.RangeSelector, {
            unitId: _0x4eb852,
            subUnitId: _0x2d1ded,
            initialValue: (0, a.serializeRangeWithSheet)(_0x3bfd57, _0x262b25),
            onChange: (_0xfea22, _0x5d2ce0) => {
              (0, a.serializeRangeWithSheet)(_0x3bfd57, _0x262b25) !==
                _0x5d2ce0 && _0x9ca1a8(_0x5d2ce0);
            },
            keepSheetReference: true,
            supportAcrossSheet: true,
            onVerify: (_0x9b1e20, _0x52803c) => {
              let _0x29b2d3 = _0x52803c
                .split(",")
                .filter((_0x4c6326) => !!_0x4c6326);
              if (!_0x29b2d3[0]) {
                _0x245ced(_0x82be71.t("sheets-pivot-ui.msg.emptySourceRange"));
                return;
              }
              if (!_0x9b1e20) {
                _0x245ced(_0x82be71.t("sheets-pivot-ui.msg.invalidSize"));
                return;
              }
              let _0x85c7d5 = (0, a.deserializeRangeWithSheet)(_0x29b2d3[0]),
                _0x32c181 = _0x85c7d5.sheetName || _0x957a26.sheetName;
              if (_0xb69be9)
                switch (
                  re(_0xb69be9.getSheetBySheetName(_0x32c181), _0x85c7d5.range)
                ) {
                  case 2:
                    _0x245ced(undefined);
                    break;
                  case 0:
                    _0x245ced(
                      _0x82be71.t("sheets-pivot-ui.msg.emptySourceRange"),
                    );
                    break;
                  case 1:
                    _0x245ced(_0x82be71.t("sheets-pivot-ui.msg.invalidSize"));
                    break;
                }
            },
            maxRangeCount: 1,
            onFocusChange: (_0x5ef168) => {
              _0x4f720f(_0x5ef168);
            },
            onRangeSelectorDialogVisibleChange: (_0x124f84) => {
              _0x4f720f(!!_0x124f84);
            },
          }),
          _0x5c89bd
            ? (0, u.jsx)("div", {
                className:
                  "univer-my-1\x20univer-text-xs\x20univer-text-red-500",
                children: _0x5c89bd,
              })
            : null,
        ],
      }),
    ],
  });
}
function Bt(_0x39ab5c) {
  let { type: _0x42520c } = _0x39ab5c;
  switch (_0x42520c) {
    case l.PivotDataFieldDataTypeEnum["text"]:
      return (0, u.jsx)(m.TextIcon, {
        className:
          "univer-mx-1.5 univer-my-0 univer-h-4 univer-text-xs univer-text-gray-200 dark:!univer-text-gray-600",
      });
    case l.PivotDataFieldDataTypeEnum["number"]:
      return (0, u.jsx)(m.NumberIcon, {
        className:
          "univer-mx-1.5\x20univer-my-0\x20univer-h-4\x20univer-text-xs\x20univer-text-gray-200\x20dark:!univer-text-gray-600",
      });
    case l.PivotDataFieldDataTypeEnum["date"]:
      return (0, u.jsx)(m.CalendarIcon, {
        className:
          "univer-mx-1.5 univer-my-0 univer-h-4 univer-text-xs univer-text-gray-200 dark:!univer-text-gray-600",
      });
  }
}
function Vt(_0x469d24) {
  let {
      name: _0x457767,
      dataFieldId: _0x1093bb,
      checked: _0x5dcd16,
      type: _0x441a07,
      refreshHandler: _0x567a0c,
      pivotTableId: _0x47e64a,
      draggingId: _0x3c3240,
      pivotTableInfo: _0x5a28e3,
      unitId: _0x505ce4,
      subUnitId: _0xc9aca0,
    } = _0x469d24,
    [_0x4bffb0, _0x42ece3] = (0, s.useState)(false),
    _0x21cb2e = (0, e.useDependency)(n.ICommandService),
    _0x3da7d3 = (0, e.useDependency)(n.LocaleService);
  if (!_0x5a28e3) return null;
  let {
      rowFields: _0x13f043,
      columnFields: _0x2935a7,
      filterFields: _0x499390,
      valueFields: _0x5c9eac,
    } = _0x5a28e3,
    _0x1c88f1 = [..._0x13f043, ..._0x2935a7, ..._0x499390, ..._0x5c9eac],
    _0x5eb5f8 = async (_0x4a31a5) => {
      let _0x15f363 = !!_0x4a31a5,
        _0x37d2bb = false;
      if (_0x15f363) {
        let _0x338281 = {
          pivotTableId: _0x47e64a,
          dataFieldId: _0x1093bb,
          fieldArea:
            _0x441a07 === l.PivotDataFieldDataTypeEnum["number"]
              ? l.PivotTableFiledAreaEnum["Value"]
              : l.PivotTableFiledAreaEnum["Row"],
          unitId: _0x505ce4,
          subUnitId: _0xc9aca0,
          index:
            _0x441a07 === l.PivotDataFieldDataTypeEnum["number"]
              ? _0x5c9eac.length
              : _0x13f043.length,
        };
        _0x37d2bb = await _0x21cb2e.executeCommand(
          t.AddPivotFieldCommand["id"],
          _0x338281,
        );
      } else {
        let _0x30a120 = [];
        (_0x1c88f1.forEach((_0x18f1a5) => {
          _0x18f1a5.dataFieldId === _0x1093bb &&
            _0x30a120.push(_0x18f1a5.tableFieldId);
        }),
          (_0x37d2bb = await _0x21cb2e.executeCommand(
            t.RemovePivotFieldCommand["id"],
            {
              pivotTableId: _0x47e64a,
              fieldIds: _0x30a120,
              unitId: _0x505ce4,
              subUnitId: _0xc9aca0,
            },
          )));
      }
      _0x37d2bb && _0x567a0c();
    },
    _0x2c2607 = async (_0x415a4b) => {
      let _0x490964 = false,
        _0x382c29 = "";
      if (
        ([..._0x13f043, ..._0x2935a7, ..._0x499390].forEach((_0x459225) => {
          _0x459225.dataFieldId === _0x1093bb &&
            ((_0x490964 = true), (_0x382c29 = _0x459225.tableFieldId));
        }),
        _0x490964 && _0x415a4b !== l.PivotTableFiledAreaEnum["Value"])
      ) {
        if (_0x47e64a) {
          let _0x2db8c7 = Se(_0x5a28e3, _0x415a4b),
            _0x58f205 = {
              pivotTableId: _0x47e64a,
              area: _0x415a4b,
              index: _0x2db8c7,
              fieldId: _0x382c29,
              unitId: _0x505ce4,
              subUnitId: _0xc9aca0,
            };
          (await _0x21cb2e.executeCommand(
            t.MovePivotFieldCommand["id"],
            _0x58f205,
          )) && _0x567a0c();
        }
      } else {
        if (_0x47e64a) {
          let _0x59ab44 = {
            pivotTableId: _0x47e64a,
            dataFieldId: _0x1093bb,
            fieldArea: _0x415a4b,
            unitId: _0x505ce4,
            subUnitId: _0xc9aca0,
            index: Se(_0x5a28e3, _0x415a4b),
          };
          (await _0x21cb2e.executeCommand(
            t.AddPivotFieldCommand["id"],
            _0x59ab44,
          )) && _0x567a0c();
        }
      }
    };
  return (0, u.jsxs)(
    "div",
    {
      className: (0, i.clsx)(
        "univer-group univer-relative univer-box-border univer-flex univer-h-8 univer-w-full univer-flex-row univer-items-center univer-rounded-md univer-px-1 univer-py-2 univer-leading-4 univer-transition-all hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
        {
          "univer-flex\x20univer-bg-gray-100\x20dark:!univer-bg-gray-700":
            _0x3c3240 === _0x1093bb,
        },
      ),
      id: "source-" + _0x1093bb,
      onContextMenu: (_0x10338b) => {
        (_0x10338b.preventDefault(), _0x42ece3(true));
      },
      children: [
        (0, u.jsx)("span", {
          className: "univer-mr-2 univer-w-4 rtl:univer-ml-2 rtl:univer-mr-0",
          children: (0, u.jsx)(m.GripVerticalIcon, {}),
        }),
        (0, u.jsx)(i.Checkbox, {
          className: "univer-w-[14px] univer-text-sm univer-text-gray-200",
          checked: _0x5dcd16,
          onChange: _0x5eb5f8,
        }),
        (0, u.jsxs)("div", {
          className:
            "univer-flex\x20univer-min-w-0\x20univer-flex-1\x20univer-items-center\x20univer-text-xs\x20univer-leading-4\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
          children: [
            (0, u.jsx)(Bt, { type: _0x441a07 }),
            (0, u.jsx)("span", {
              className: "univer-truncate",
              children: _0x457767,
            }),
          ],
        }),
        (0, u.jsx)(i.Dropdown, {
          align: "end",
          side: "bottom",
          open: _0x4bffb0,
          onOpenChange: _0x42ece3,
          overlay: (0, u.jsxs)("div", {
            children: [
              (0, u.jsx)("div", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
                onClick: () => {
                  (_0x42ece3(false),
                    _0x2c2607(l.PivotTableFiledAreaEnum["Row"]));
                },
                children: _0x3da7d3.t("sheets-pivot-ui.addToRow"),
              }),
              (0, u.jsx)("div", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
                onClick: () => {
                  (_0x42ece3(false),
                    _0x2c2607(l.PivotTableFiledAreaEnum["Column"]));
                },
                children: _0x3da7d3.t("sheets-pivot-ui.addToColumn"),
              }),
              (0, u.jsx)("div", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
                onClick: () => {
                  (_0x42ece3(false),
                    _0x2c2607(l.PivotTableFiledAreaEnum["Value"]));
                },
                children: _0x3da7d3.t("sheets-pivot-ui.addToValue"),
              }),
              (0, u.jsx)("div", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
                onClick: () => {
                  (_0x42ece3(false),
                    _0x2c2607(l.PivotTableFiledAreaEnum["Filter"]));
                },
                children: _0x3da7d3.t("sheets-pivot-ui.addToFilter"),
              }),
            ],
          }),
          children: (0, u.jsx)("div", {
            className: (0, i.clsx)(
              "univer-ml-1 univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-md univer-transition-opacity hover:univer-bg-gray-200 rtl:univer-ml-0 rtl:univer-mr-1 dark:hover:!univer-bg-gray-700",
              {
                "univer-opacity-100": _0x4bffb0,
                "univer-opacity-0\x20group-hover:univer-opacity-100":
                  !_0x4bffb0,
              },
            ),
            onMouseDown: (_0x5c72cb) => _0x5c72cb.stopPropagation(),
            onClick: (_0x3f2d48) => _0x3f2d48.stopPropagation(),
            children: (0, u.jsx)(m.MoreDownIcon, {
              className: "univer-text-gray-400 dark:!univer-text-gray-500",
            }),
          }),
        }),
      ],
    },
    _0x1093bb,
  );
}
function Ht(_0x2dabc6) {
  let {
      sourceList: _0x27f852,
      refreshHandler: _0x36704d,
      pivotTableId: _0x15e755,
      pivotTableInfo: _0x70a4f1,
      unitId: _0x5095da,
      draggingId: _0x1b8aba,
      subUnitId: _0x234649,
    } = _0x2dabc6,
    _0x34d25b = (0, e.useDependency)(n.LocaleService),
    [_0xf56207, _0x2a7370] = (0, s.useState)(""),
    _0x5eac96 = _0xf56207.trim().toLocaleLowerCase(),
    _0x308988 = _0x5eac96
      ? _0x27f852.filter((_0x5063a5) =>
          _0x5063a5.name["toLocaleLowerCase"]().includes(_0x5eac96),
        )
      : _0x27f852;
  return (0, u.jsxs)("div", {
    className:
      "univer-mb-4 univer-flex univer-min-h-0 univer-flex-1 univer-flex-col",
    children: [
      (0, u.jsx)("p", {
        className:
          "univer-mb-1 univer-mt-0 univer-text-sm univer-font-medium univer-leading-5 univer-text-gray-900 dark:!univer-text-gray-0",
        children: _0x34d25b.t("sheets-pivot-ui.sourceFieldTile"),
      }),
      (0, u.jsx)("p", {
        className:
          "univer-mb-2 univer-mt-0 univer-text-xs univer-leading-4 univer-text-gray-600 dark:!univer-text-gray-200",
        children: _0x34d25b.t("sheets-pivot-ui.sourceFieldDescription"),
      }),
      (0, u.jsx)(i.Input, {
        allowClear: true,
        className: "univer-mb-2",
        placeholder: _0x34d25b.t("sheets-pivot-ui.searchFieldPlaceholder"),
        slot: (0, u.jsx)(m.SearchIcon, {}),
        value: _0xf56207,
        onChange: _0x2a7370,
      }),
      (0, u.jsx)("div", {
        className: (0, i.clsx)(
          "univer-box-border univer-min-h-0 univer-flex-1 univer-rounded-lg univer-bg-gray-0 univer-p-2 dark:!univer-bg-gray-900",
          i.borderClassName,
        ),
        children: (0, u.jsx)("div", {
          className: (0, i.clsx)(
            "univer-relative\x20univer-h-full\x20univer-overflow-y-auto",
            i.scrollbarClassName,
          ),
          "data-testid": "pivot-source-field-viewport",
          children: (0, u.jsx)(jt, {
            droppableId: "source",
            direction: "vertical",
            isCombineEnabled: false,
            ignoreContainerClipping: false,
            isDropDisabled: true,
            children: (_0x74ada4) =>
              (0, u.jsxs)("div", {
                ref: _0x74ada4.innerRef,
                className: "univer-box-border univer-h-full univer-px-2",
                ..._0x74ada4.droppableProps,
                children: [
                  _0x308988.map((_0x8e9d91, _0x51dcec) =>
                    (0, u.jsx)(
                      "div",
                      {
                        className:
                          "univer-relative univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-1 univer-self-stretch univer-border univer-border-transparent univer-p-0.5 univer-leading-4 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
                        children: (0, u.jsx)(
                          Mt,
                          {
                            draggableId: _0x8e9d91.id,
                            isDragDisabled: false,
                            index: _0x51dcec,
                            children: ({
                              innerRef: _0x20bdc5,
                              draggableProps: _0x226f28,
                              dragHandleProps: _0x539343,
                            }) =>
                              (0, u.jsx)("div", {
                                ref: _0x20bdc5,
                                ..._0x226f28,
                                ..._0x539343,
                                className: "univer-h-8 univer-w-full",
                                style: _0x226f28.style,
                                children: (0, u.jsx)(Vt, {
                                  draggingId: _0x1b8aba,
                                  unitId: _0x5095da,
                                  subUnitId: _0x234649,
                                  ..._0x8e9d91,
                                  refreshHandler: _0x36704d,
                                  pivotTableId: _0x15e755,
                                  pivotTableInfo: _0x70a4f1,
                                }),
                              }),
                          },
                          _0x8e9d91.id,
                        ),
                      },
                      _0x8e9d91.id,
                    ),
                  ),
                  _0x308988.length === 0 &&
                    (0, u.jsx)("div", {
                      className:
                        "univer-py-4\x20univer-text-center\x20univer-text-xs\x20univer-text-gray-500",
                      children: _0x34d25b.t("sheets-pivot-ui.noMatchingFields"),
                    }),
                ],
              }),
          }),
        }),
      }),
    ],
  });
}
function Ut(_0x14b75c) {
  let {
      pivotTableId: _0x5d3c55,
      version: _0x5624b6,
      unitId: _0x159cb0,
      subUnitId: _0x6be7c3,
      panelInfo: _0x2fd819,
    } = _0x14b75c,
    _0x55bf8d = (0, e.useDependency)(t.SheetsPivotTableConfigModel),
    _0x541157 = (0, e.useObservable)(_0x55bf8d.configVersion$),
    _0x343bb8 = (0, e.useDependency)(t.SheetsPivotRPCService),
    _0x4f7030 = (0, e.useObservable)(
      (0, e.useDependency)(F).pivotTablePanelVisible$,
      true,
    ),
    _0x3483f5 = (0, e.useDependency)(n.ICommandService),
    _0xb6286c = (0, e.useDependency)(n.ILogService),
    [_0x34c0aa, _0x44a31d] = (0, s.useState)(_0x2fd819),
    [_0x39708a, _0x2aff9a] = (0, s.useState)(null),
    _0x30f06a = (0, s.useCallback)(async () => {
      if (!_0x55bf8d.getPivotTableConfig(_0x159cb0, _0x6be7c3, _0x5d3c55))
        return;
      let _0x141280 = await _0x343bb8.getPivotDisplayConfig({
        unitId: _0x159cb0,
        subUnitId: _0x6be7c3,
        pivotTableId: _0x5d3c55,
        params: {
          type: t.PivotDisplayDataType["Panel"],
          panel: { pivotTableId: _0x5d3c55 },
        },
      });
      _0x141280.result["panel"] && _0x44a31d(_0x141280.result["panel"]);
    }, [_0x5d3c55, _0x343bb8, _0x55bf8d, _0x6be7c3, _0x159cb0]);
  (0, s.useEffect)(() => {
    _0x30f06a().catch((_0x51cc9b) =>
      _0xb6286c.error("[PivotPanel]", _0x51cc9b),
    );
  }, [_0xb6286c, _0x541157, _0x5d3c55, _0x30f06a, _0x5624b6]);
  let _0x3d54fe = async (_0x388fda) => {
      let {
        source: _0x197290,
        destination: _0x233b1b,
        draggableId: _0x4757b1,
      } = _0x388fda;
      _0x2aff9a(null);
      let _0x220080 = {
          pivotTableInfo: _0x34c0aa,
          pivotTableId: _0x5d3c55,
          commandService: _0x3483f5,
          unitId: _0x159cb0,
          subUnitId: _0x6be7c3,
        },
        _0x179bb3 = _0x197290.droppableId;
      if (_0x233b1b && _0x233b1b.droppableId) {
        let _0x3fadd7 = _0x233b1b.droppableId;
        (await se(_0x220080, _0x4757b1, _0x179bb3, _0x3fadd7, _0x233b1b.index),
          await _0x30f06a());
      }
      _0x233b1b === null &&
        (await ie(_0x220080, _0x4757b1, _0x179bb3), await _0x30f06a());
    },
    _0x143406 = (_0x57d58e) => {
      _0x2aff9a({ draggingId: _0x57d58e.draggableId });
    },
    _0x2b99bf = (_0x58f82a) => {
      let {
        draggableId: _0x45e7fc,
        destination: _0x3c94a7,
        source: _0x26c007,
      } = _0x58f82a;
      _0x2aff9a({
        draggingId: _0x45e7fc,
        destination: _0x3c94a7,
        source: _0x26c007,
      });
    };
  if (!_0x4f7030 || !_0x34c0aa) return null;
  let {
    sourceList: _0x410da9,
    rowFields: _0x1571cd,
    columnFields: _0x1b3b8f,
    filterFields: _0x28aabe,
    valueFields: _0x5b1785,
    sourceRange: _0x36e2d7,
    positionInfo: _0x2a5832,
  } = _0x34c0aa;
  return (0, u.jsxs)("div", {
    className: (0, i.clsx)(
      "univer-mt-4\x20univer-flex\x20univer-h-[calc(100%-16px)]\x20univer-min-h-0\x20univer-w-full\x20univer-flex-col\x20univer-overflow-y-auto\x20univer-overflow-x-hidden",
      i.scrollbarClassName,
    ),
    children: [
      (0, u.jsx)(zt, {
        sourceRangeInfo: _0x36e2d7,
        pivotTableId: _0x5d3c55,
        refreshHandler: _0x30f06a,
        positionInfo: _0x2a5832,
      }),
      (0, u.jsxs)(At, {
        onDragEnd: _0x3d54fe,
        onDragStart: _0x143406,
        onDragUpdate: _0x2b99bf,
        children: [
          (0, u.jsx)(Ht, {
            draggingId:
              (_0x39708a == null ? undefined : _0x39708a.draggingId) ?? "",
            sourceList: _0x410da9,
            refreshHandler: _0x30f06a,
            pivotTableId: _0x5d3c55,
            pivotTableInfo: _0x34c0aa,
            unitId: _0x159cb0,
            subUnitId: _0x6be7c3,
          }),
          (0, u.jsx)(Wt, {
            rowFields: _0x1571cd,
            columnFields: _0x1b3b8f,
            filterFields: _0x28aabe,
            valueFields: _0x5b1785,
            refreshHandler: _0x30f06a,
            positionInfo: _0x2a5832,
            pivotTableId: _0x5d3c55,
            pivotTableInfo: _0x34c0aa,
          }),
        ],
      }),
    ],
  });
}
function Wt(_0x1829bd) {
  let {
    rowFields: _0x4adfe0,
    columnFields: _0x260620,
    filterFields: _0x2d8a80,
    valueFields: _0x100e46,
    refreshHandler: _0x2bb9ff,
    pivotTableInfo: _0x517086,
    positionInfo: _0x45a692,
    pivotTableId: _0x3c1b6e,
  } = _0x1829bd;
  return (0, u.jsxs)("div", {
    className: "univer-shrink-0",
    "data-testid": "pivot-field-areas",
    children: [
      (0, u.jsxs)("div", {
        className: "univer-flex univer-flex-row univer-gap-4",
        children: [
          (0, u.jsx)(Y, {
            areaType: "filter",
            items: _0x2d8a80,
            positionInfo: _0x45a692,
            pivotTableId: _0x3c1b6e,
            pivotTableInfo: _0x517086,
            refreshHandler: _0x2bb9ff,
          }),
          (0, u.jsx)(Y, {
            areaType: "column",
            items: _0x260620,
            positionInfo: _0x45a692,
            pivotTableId: _0x3c1b6e,
            pivotTableInfo: _0x517086,
            refreshHandler: _0x2bb9ff,
          }),
        ],
      }),
      (0, u.jsxs)("div", {
        className: "univer-flex univer-flex-row univer-gap-4",
        children: [
          (0, u.jsx)(Y, {
            areaType: "row",
            items: _0x4adfe0,
            positionInfo: _0x45a692,
            pivotTableId: _0x3c1b6e,
            pivotTableInfo: _0x517086,
            refreshHandler: _0x2bb9ff,
          }),
          (0, u.jsx)(Y, {
            areaType: "value",
            items: _0x100e46,
            positionInfo: _0x45a692,
            pivotTableId: _0x3c1b6e,
            pivotTableInfo: _0x517086,
            refreshHandler: _0x2bb9ff,
          }),
        ],
      }),
    ],
  });
}
function Gt(_0x206912) {
  let {
      className: _0x207f1e,
      unitId: _0x200629,
      subUnitId: _0x1306d4,
      pivotTableId: _0x568392,
    } = _0x206912,
    [_0x4ff632, _0x51ec4f] = (0, s.useState)(0),
    _0x193efc = (0, e.useDependency)(n.LocaleService),
    _0x3f10c2 = _0x193efc.getDirection();
  return (0, u.jsxs)("div", {
    className: (0, i.clsx)(
      "univer-flex univer-size-full univer-min-h-0 univer-flex-col",
      _0x207f1e,
    ),
    dir: _0x3f10c2,
    children: [
      (0, u.jsxs)("div", {
        className:
          "univer-flex univer-shrink-0 univer-items-center univer-border-b univer-border-gray-200",
        children: [
          (0, u.jsxs)("div", {
            className: (0, i.clsx)(
              "univer-mr-5 univer-cursor-default univer-py-4 univer-text-center univer-text-sm univer-font-semibold rtl:univer-ml-5 rtl:univer-mr-0",
              _0x4ff632 === 0
                ? "univer-text-primary-600"
                : "univer-text-gray-500",
            ),
            onClick: () => _0x51ec4f(0),
            children: [
              _0x193efc.t("sheets-pivot-ui.fieldPanel"),
              (0, u.jsx)("div", {
                className: (0, i.clsx)(
                  "univer-mx-auto\x20univer-mt-2\x20univer-h-1\x20univer-w-1/2\x20univer-rounded-md",
                  {
                    "univer-bg-primary-600": _0x4ff632 === 0,
                    "univer-bg-transparent": _0x4ff632 !== 0,
                  },
                ),
              }),
            ],
          }),
          (0, u.jsxs)("div", {
            className: (0, i.clsx)(
              "univer-mr-5 univer-cursor-default univer-py-4 univer-text-center univer-text-sm univer-font-semibold rtl:univer-ml-5 rtl:univer-mr-0",
              {
                "univer-text-primary-600": _0x4ff632 === 1,
                "univer-text-gray-500": _0x4ff632 !== 1,
              },
            ),
            onClick: () => _0x51ec4f(1),
            children: [
              _0x193efc.t("sheets-pivot-ui.configPanel"),
              (0, u.jsx)("div", {
                className: (0, i.clsx)(
                  "univer-mx-auto univer-mt-2 univer-h-1 univer-w-1/2 univer-rounded-md univer-bg-primary-600",
                  {
                    "univer-bg-primary-600": _0x4ff632 === 1,
                    "univer-bg-transparent": _0x4ff632 !== 1,
                  },
                ),
              }),
            ],
          }),
        ],
      }),
      (0, u.jsx)("div", {
        className: (0, i.clsx)(
          "univer-min-h-0\x20univer-flex-1",
          _0x4ff632 === 0 ? "univer-overflow-hidden" : "univer-overflow-auto",
        ),
        children:
          _0x4ff632 === 0
            ? (0, u.jsx)(Ut, { ..._0x206912 })
            : (0, u.jsx)(Ct, {
                unitId: _0x200629,
                subUnitId: _0x1306d4,
                pivotTableId: _0x568392,
              }),
      }),
    ],
  });
}
function Kt(_0x34fd26) {
  let {
      unitId: _0x2d80ff,
      subUnitId: _0xb6fdf7,
      pivotTableId: _0x4361cf,
      tableFieldId: _0x1049d6,
      type: _0x1fa391,
    } = _0x34fd26,
    _0x1202c7 = JSON.stringify([
      _0x2d80ff,
      _0xb6fdf7,
      _0x4361cf,
      _0x1049d6,
      _0x1fa391,
    ]);
  return (0, u.jsx)(qt, { ..._0x34fd26 }, _0x1202c7);
}
function qt({
  unitId: _0x1c8669,
  subUnitId: _0x5b61fa,
  pivotTableId: _0x41ae24,
  tableFieldId: _0x2e8294,
  type: _0x2203b2,
  baseItems: _0x915140,
  onConfirm: _0x42501c,
  onCancel: _0x2e6c6a,
}) {
  var _0x41f84d;
  let _0x511aa9 = (0, e.useDependency)(t.SheetsPivotTableConfigModel),
    _0xc7e781 = (0, e.useDependency)(n.LocaleService),
    _0x5da7e8 = (0, e.useObservable)(
      _0xc7e781.direction$,
      _0xc7e781.getDirection(),
    ),
    _0x57828d = Me.find((_0x54a287) => _0x54a287.type === _0x2203b2),
    _0x2a258e = _0x511aa9.getPivotTableConfig(_0x1c8669, _0x5b61fa, _0x41ae24),
    _0x14f860 =
      _0x2a258e == null ||
      (_0x41f84d = _0x2a258e.fieldsConfig["measure"][_0x2e8294]) == null
        ? undefined
        : _0x41f84d.showDataAs,
    _0xfa1e75 = () => {
      var _0x2195c4;
      if (
        (_0x14f860 == null ? undefined : _0x14f860.type) !== _0x2203b2 ||
        !_0x14f860.baseFieldId
      )
        return "";
      if (_0x14f860.baseItemType === l.PivotShowAsBaseItemTypeEnum["previous"])
        return "relative:previous";
      if (_0x14f860.baseItemType === l.PivotShowAsBaseItemTypeEnum["next"])
        return "relative:next";
      let _0x3f1458 =
        ((_0x2195c4 = _0x915140[_0x14f860.baseFieldId]) == null
          ? undefined
          : _0x2195c4.items["indexOf"](_0x14f860.baseItem)) ?? -1;
      return _0x3f1458 < 0 ? "" : "item:" + _0x3f1458;
    },
    [_0x2e4b12, _0x2430dc] = (0, s.useState)(
      (_0x14f860 == null ? undefined : _0x14f860.type) === _0x2203b2
        ? _0x14f860.baseFieldId
        : "",
    ),
    [_0x8297d5, _0x2f8bf6] = (0, s.useState)(_0xfa1e75),
    _0x556509 = (0, s.useRef)(false),
    [_0x1d94ba, _0x53ba22] = (0, s.useState)(false),
    _0x119a4d = _0x511aa9.getPivotTableConfig(_0x1c8669, _0x5b61fa, _0x41ae24),
    _0x592551 = _0x511aa9.getCollection(_0x1c8669, _0x41ae24),
    _0x49024e =
      _0x119a4d == null
        ? undefined
        : _0x119a4d.fieldsConfig["measure"][_0x2e8294],
    _0x4f60e7 = !!(
      _0x49024e &&
      _0x592551 &&
      (_0x592551.fields[_0x49024e.dataFieldId] ||
        _0x592551.customFields["find"](
          (_0x554967) => _0x554967.id === _0x49024e.dataFieldId,
        ))
    ),
    _0x10ab0a = (
      _0x119a4d && _0x592551 && _0x57828d
        ? J(_0x119a4d, _0x592551, _0x57828d)
        : []
    ).filter((_0x2e2a5c) => {
      let _0x22262a = _0x915140[_0x2e2a5c];
      return (
        (_0x57828d == null ? undefined : _0x57828d.baseItemMode) === "none" ||
        !!(
          _0x22262a &&
          ((_0x57828d == null ? undefined : _0x57828d.baseItemMode) ===
            "item-or-relative" ||
            _0x22262a.items["length"] > 0)
        )
      );
    }),
    _0x2ce6f3 = _0x10ab0a.map((_0x4a51f5) => ({
      label: _0x119a4d.fieldsConfig["dimension"][_0x4a51f5].displayName,
      value: _0x4a51f5,
    })),
    _0x3a2dc2 =
      _0x119a4d == null
        ? undefined
        : _0x119a4d.fieldsConfig["dimension"][_0x2e4b12],
    _0x3090b9 =
      _0x3a2dc2 &&
      _0x592551 &&
      (_0x592551.fields[_0x3a2dc2.dataFieldId] ??
        _0x592551.customFields["find"](
          (_0x45fac6) => _0x45fac6.id === _0x3a2dc2.dataFieldId,
        )),
    _0x1f3677 = _0x915140[_0x2e4b12],
    _0x548db2 =
      (_0x1f3677 == null
        ? undefined
        : _0x1f3677.items["map"]((_0xff52e6, _0x39eb18) => {
            let _0x1da3b4 = _0x1f3677.itemTypes[_0x39eb18],
              _0x23f7d4 = _0xff52e6;
            return (
              _0x1da3b4 === l.PivotDataFieldDataTypeEnum["blank"]
                ? (_0x23f7d4 = _0xc7e781.t(
                    "sheets-pivot-ui.dialog.filter.blank",
                  ))
                : _0x1da3b4 === l.PivotDataFieldDataTypeEnum["other"]
                  ? (_0x23f7d4 = _0xc7e781.t(
                      "sheets-pivot-ui.showValuesAs.other",
                    ))
                  : (_0x1da3b4 === l.PivotDataFieldDataTypeEnum["date"] ||
                      _0x1da3b4 === l.PivotDataFieldDataTypeEnum["number"]) &&
                    _0x1f3677.format &&
                    (_0x23f7d4 = n.numfmt["format"](
                      _0x1f3677.format,
                      Number(_0xff52e6),
                    )),
              {
                label: _0x23f7d4,
                value: "item:" + _0x39eb18,
                itemKey: _0xff52e6,
              }
            );
          })) ?? [];
  (_0x57828d == null ? undefined : _0x57828d.baseItemMode) ===
    "item-or-relative" &&
    _0x548db2.push(
      {
        label: _0xc7e781.t("sheets-pivot-ui.showValuesAs.previous"),
        value: "relative:previous",
        itemKey: "",
        itemType: l.PivotShowAsBaseItemTypeEnum["previous"],
      },
      {
        label: _0xc7e781.t("sheets-pivot-ui.showValuesAs.next"),
        value: "relative:next",
        itemKey: "",
        itemType: l.PivotShowAsBaseItemTypeEnum["next"],
      },
    );
  let _0x3ca4e8 = _0x548db2.find((_0x1a4957) => _0x1a4957.value === _0x8297d5),
    _0x3d5624 = !!(
      _0x57828d != null &&
      _0x57828d.baseItemMode &&
      _0x57828d.baseItemMode !== "none"
    ),
    _0x21e065 = !!(
      _0x57828d &&
      _0x119a4d &&
      _0x592551 &&
      _0x4f60e7 &&
      _0x119a4d.fieldsConfig["valueFields"].includes(_0x2e8294) &&
      _0x10ab0a.includes(_0x2e4b12) &&
      _0x3090b9 &&
      (!_0x3d5624 || _0x3ca4e8)
    );
  return (0, u.jsxs)("div", {
    dir: _0x5da7e8,
    children: [
      (0, u.jsxs)("div", {
        className: "univer-mb-4",
        children: [
          (0, u.jsx)("div", {
            className: "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
            children: _0xc7e781.t("sheets-pivot-ui.showValuesAs.baseField"),
          }),
          (0, u.jsx)(i.Select, {
            className: "univer-w-full",
            value: _0x2e4b12,
            options: _0x2ce6f3,
            onChange: (_0x1d8211) => {
              (_0x2430dc(_0x1d8211), _0x2f8bf6(""));
            },
          }),
        ],
      }),
      _0x3d5624 &&
        (0, u.jsxs)("div", {
          className: "univer-mb-4",
          children: [
            (0, u.jsx)("div", {
              className: "univer-mb-2 univer-text-sm univer-font-medium",
              children: _0xc7e781.t("sheets-pivot-ui.showValuesAs.baseItem"),
            }),
            (0, u.jsx)(i.Select, {
              className: "univer-w-full",
              value: _0x8297d5,
              options: _0x548db2,
              disabled: !_0x2e4b12,
              onChange: _0x2f8bf6,
            }),
          ],
        }),
      (0, u.jsxs)("div", {
        className: "univer-flex univer-justify-end univer-gap-3",
        children: [
          (0, u.jsx)(i.Button, {
            onClick: _0x2e6c6a,
            children: _0xc7e781.t("sheets-pivot-ui.showValuesAs.cancel"),
          }),
          (0, u.jsx)(i.Button, {
            variant: "primary",
            disabled: !_0x21e065 || _0x1d94ba,
            onClick: async () => {
              let _0x35f47a = _0x511aa9.getPivotTableConfig(
                  _0x1c8669,
                  _0x5b61fa,
                  _0x41ae24,
                ),
                _0x158e08 = _0x511aa9.getCollection(_0x1c8669, _0x41ae24),
                _0x54800f =
                  _0x35f47a == null
                    ? undefined
                    : _0x35f47a.fieldsConfig["measure"][_0x2e8294];
              if (
                !_0x57828d ||
                !_0x35f47a ||
                !_0x158e08 ||
                !_0x54800f ||
                _0x556509.current ||
                !_0x35f47a.fieldsConfig["valueFields"].includes(_0x2e8294) ||
                !(
                  _0x158e08.fields[_0x54800f.dataFieldId] ||
                  _0x158e08.customFields["find"](
                    (_0x14ba0c) => _0x14ba0c.id === _0x54800f.dataFieldId,
                  )
                ) ||
                !J(_0x35f47a, _0x158e08, _0x57828d).includes(_0x2e4b12) ||
                (_0x3d5624 && !_0x3ca4e8)
              )
                return;
              let _0x4bc974 = {
                type: _0x2203b2,
                baseFieldId: _0x2e4b12,
                baseItem:
                  (_0x3ca4e8 == null ? undefined : _0x3ca4e8.itemKey) ?? "",
              };
              ((_0x3ca4e8 == null ? undefined : _0x3ca4e8.itemType) !==
                undefined && (_0x4bc974.baseItemType = _0x3ca4e8.itemType),
                (_0x556509.current = true),
                _0x53ba22(true));
              try {
                await _0x42501c(_0x4bc974);
              } catch {
              } finally {
                ((_0x556509.current = false), _0x53ba22(false));
              }
            },
            children: _0xc7e781.t("sheets-pivot-ui.showValuesAs.ok"),
          }),
        ],
      }),
    ],
  });
}
const Jt = [
  {
    id: "equal",
    localeKey: "sheets-pivot-ui.valueFilter.equal",
    operator: l.ST_PivotFilterOperatorEnum["valueEqual"],
  },
  {
    id: "notEqual",
    localeKey: "sheets-pivot-ui.valueFilter.notEqual",
    operator: l.ST_PivotFilterOperatorEnum["valueNotEqual"],
  },
  {
    id: "greaterThan",
    localeKey: "sheets-pivot-ui.valueFilter.greaterThan",
    operator: l.ST_PivotFilterOperatorEnum["valueGreaterThan"],
  },
  {
    id: "greaterThanOrEqual",
    localeKey: "sheets-pivot-ui.valueFilter.greaterThanOrEqual",
    operator: l.ST_PivotFilterOperatorEnum["valueGreaterThanOrEqual"],
  },
  {
    id: "lessThan",
    localeKey: "sheets-pivot-ui.valueFilter.lessThan",
    operator: l.ST_PivotFilterOperatorEnum["valueLessThan"],
  },
  {
    id: "lessThanOrEqual",
    localeKey: "sheets-pivot-ui.valueFilter.lessThanOrEqual",
    operator: l.ST_PivotFilterOperatorEnum["valueLessThanOrEqual"],
  },
  {
    id: "between",
    localeKey: "sheets-pivot-ui.valueFilter.between",
    operator: l.ST_PivotFilterOperatorEnum["valueBetween"],
    isBetween: true,
  },
  {
    id: "notBetween",
    localeKey: "sheets-pivot-ui.valueFilter.notBetween",
    operator: l.ST_PivotFilterOperatorEnum["valueNotBetween"],
    isBetween: true,
  },
  {
    id: "topCount",
    localeKey: "sheets-pivot-ui.valueFilter.topCount",
    operator: l.ST_PivotFilterOperatorEnum["count"],
    isCount: true,
  },
  {
    id: "bottomCount",
    localeKey: "sheets-pivot-ui.valueFilter.bottomCount",
    operator: l.ST_PivotFilterOperatorEnum["count"],
    isBottom: true,
    isCount: true,
  },
  {
    id: "topPercent",
    localeKey: "sheets-pivot-ui.valueFilter.topPercent",
    operator: l.ST_PivotFilterOperatorEnum["percent"],
    isPercent: true,
  },
  {
    id: "bottomPercent",
    localeKey: "sheets-pivot-ui.valueFilter.bottomPercent",
    operator: l.ST_PivotFilterOperatorEnum["percent"],
    isBottom: true,
    isPercent: true,
  },
];
function Yt(_0x23371f) {
  var _0x7827df;
  return (_0x23371f == null ? undefined : _0x23371f.operator) ===
    l.ST_PivotFilterOperatorEnum["count"]
    ? _0x23371f.isBottom
      ? "bottomCount"
      : "topCount"
    : (_0x23371f == null ? undefined : _0x23371f.operator) ===
        l.ST_PivotFilterOperatorEnum["percent"]
      ? _0x23371f.isBottom
        ? "bottomPercent"
        : "topPercent"
      : (((_0x7827df = Jt.find(
          (_0x5457c4) =>
            _0x5457c4.operator ===
            (_0x23371f == null ? undefined : _0x23371f.operator),
        )) == null
          ? undefined
          : _0x7827df.id) ?? "greaterThan");
}
function Xt({
  targetFieldId: _0x42b635,
  targetFieldName: _0x3a138a,
  valueFields: _0x55af01,
  defaultValueFieldId: _0x5923e5,
  currentFilter: _0x1e4d19,
  onConfirm: _0x43db5b,
  onClear: _0x2322fc,
  onCancel: _0xf9ee4d,
}) {
  let _0x22077f = (0, e.useDependency)(n.LocaleService),
    _0x4826f7 = (0, e.useObservable)(
      _0x22077f.direction$,
      _0x22077f.getDirection(),
    ),
    _0x8ca51 = _0x1e4d19 == null ? undefined : _0x1e4d19.expected,
    [_0xa6a58c, _0x38401a] = (0, s.useState)(() => {
      let _0x54a424 = _0x1e4d19 == null ? undefined : _0x1e4d19.valueFieldId;
      return _0x54a424 &&
        _0x55af01.some((_0x57e44f) => _0x57e44f.id === _0x54a424)
        ? _0x54a424
        : _0x5923e5 && _0x55af01.some((_0x3e9161) => _0x3e9161.id === _0x5923e5)
          ? _0x5923e5
          : _0x55af01.length === 1
            ? _0x55af01[0].id
            : "";
    }),
    [_0x25f365, _0x98238a] = (0, s.useState)(() => Yt(_0x1e4d19)),
    [_0xd0441f, _0x1b813c] = (0, s.useState)(() =>
      Number(Array.isArray(_0x8ca51) ? _0x8ca51[0] : (_0x8ca51 ?? 0)),
    ),
    [_0x5925a1, _0x501f57] = (0, s.useState)(() =>
      Array.isArray(_0x8ca51) ? Number(_0x8ca51[1]) : 0,
    ),
    _0x552be0 = (0, s.useRef)(false),
    [_0x4abc21, _0x3e0c06] = (0, s.useState)(false),
    _0x5f2371 = Jt.find((_0x7b4751) => _0x7b4751.id === _0x25f365),
    _0x3d9279 = _0xd0441f !== "" && Number.isFinite(_0xd0441f),
    _0x51ab0b =
      !_0x5f2371.isBetween || (_0x5925a1 !== "" && Number.isFinite(_0x5925a1)),
    _0x36791a =
      !_0x5f2371.isCount ||
      (Number.isInteger(_0xd0441f) && Number(_0xd0441f) >= 1),
    _0x3a97b8 =
      !_0x5f2371.isPercent ||
      (Number(_0xd0441f) >= 0 && Number(_0xd0441f) <= 100),
    _0x4fb57c = !!(
      _0x55af01.some((_0x7c5e2a) => _0x7c5e2a.id === _0xa6a58c) &&
      _0x3d9279 &&
      _0x51ab0b &&
      _0x36791a &&
      _0x3a97b8
    ),
    _0x4f8219 = async (_0x3053a5) => {
      if (!_0x552be0.current) {
        ((_0x552be0.current = true), _0x3e0c06(true));
        try {
          await _0x3053a5();
        } catch {
        } finally {
          ((_0x552be0.current = false), _0x3e0c06(false));
        }
      }
    };
  return (0, u.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-4",
    "data-target-field-id": _0x42b635,
    dir: _0x4826f7,
    children: [
      (0, u.jsx)("div", {
        className: "univer-text-sm univer-font-medium",
        children: (0, u.jsx)("bdi", { dir: "auto", children: _0x3a138a }),
      }),
      (0, u.jsxs)("label", {
        className: "univer-flex univer-flex-col univer-gap-2 univer-text-sm",
        children: [
          _0x22077f.t("sheets-pivot-ui.valueFilter.valueField"),
          (0, u.jsxs)("select", {
            className:
              "univer-h-8 univer-rounded univer-border univer-border-gray-200 univer-bg-white univer-px-2 dark:!univer-border-gray-500 dark:!univer-bg-gray-700",
            "data-testid": "pivot-value-filter-value-field",
            value: _0xa6a58c,
            onChange: (_0x58a558) => _0x38401a(_0x58a558.target["value"]),
            children: [
              (0, u.jsx)("option", {
                value: "",
                children: _0x22077f.t(
                  "sheets-pivot-ui.valueFilter.selectValueField",
                ),
              }),
              _0x55af01.map((_0x9ecd1) =>
                (0, u.jsx)(
                  "option",
                  { value: _0x9ecd1.id, children: _0x9ecd1.label },
                  _0x9ecd1.id,
                ),
              ),
            ],
          }),
        ],
      }),
      (0, u.jsxs)("label", {
        className: "univer-flex univer-flex-col univer-gap-2 univer-text-sm",
        children: [
          _0x22077f.t("sheets-pivot-ui.valueFilter.condition"),
          (0, u.jsx)("select", {
            className:
              "univer-h-8 univer-rounded univer-border univer-border-gray-200 univer-bg-white univer-px-2 dark:!univer-border-gray-500 dark:!univer-bg-gray-700",
            "data-testid": "pivot-value-filter-rule",
            value: _0x25f365,
            onChange: (_0x4de818) => _0x98238a(_0x4de818.target["value"]),
            children: Jt.map((_0x105aac) =>
              (0, u.jsx)(
                "option",
                {
                  value: _0x105aac.id,
                  children: _0x22077f.t(_0x105aac.localeKey),
                },
                _0x105aac.id,
              ),
            ),
          }),
        ],
      }),
      (0, u.jsxs)("div", {
        className: "univer-flex univer-gap-2",
        children: [
          (0, u.jsx)("input", {
            "aria-label": _0x22077f.t("sheets-pivot-ui.valueFilter.condition"),
            className:
              "univer-h-8 univer-min-w-0 univer-flex-1 univer-rounded univer-border univer-border-gray-200 univer-px-2 dark:!univer-border-gray-500",
            "data-testid": "pivot-value-filter-expected",
            type: "number",
            min: _0x5f2371.isCount ? 1 : _0x5f2371.isPercent ? 0 : undefined,
            max: _0x5f2371.isPercent ? 100 : undefined,
            step: _0x5f2371.isCount ? 1 : undefined,
            value: _0xd0441f,
            onChange: (_0x38dc71) =>
              _0x1b813c(
                _0x38dc71.target["value"] === ""
                  ? ""
                  : Number(_0x38dc71.target["value"]),
              ),
          }),
          _0x5f2371.isBetween &&
            (0, u.jsx)("input", {
              "aria-label": _0x22077f.t(
                "sheets-pivot-ui.valueFilter.condition",
              ),
              className:
                "univer-h-8 univer-min-w-0 univer-flex-1 univer-rounded univer-border univer-border-gray-200 univer-px-2 dark:!univer-border-gray-500",
              "data-testid": "pivot-value-filter-expected",
              type: "number",
              value: _0x5925a1,
              onChange: (_0x21eb78) =>
                _0x501f57(
                  _0x21eb78.target["value"] === ""
                    ? ""
                    : Number(_0x21eb78.target["value"]),
                ),
            }),
        ],
      }),
      (0, u.jsxs)("div", {
        className: "univer-flex univer-justify-between univer-gap-3",
        children: [
          (0, u.jsx)(i.Button, {
            "data-testid": "pivot-value-filter-clear",
            disabled: _0x4abc21,
            onClick: () => _0x4f8219(_0x2322fc),
            children: _0x22077f.t("sheets-pivot-ui.valueFilter.clear"),
          }),
          (0, u.jsxs)("div", {
            className: "univer-flex\x20univer-gap-3",
            children: [
              (0, u.jsx)(i.Button, {
                disabled: _0x4abc21,
                onClick: _0xf9ee4d,
                children: _0x22077f.t("sheets-pivot-ui.valueFilter.cancel"),
              }),
              (0, u.jsx)(i.Button, {
                "data-testid": "pivot-value-filter-confirm",
                variant: "primary",
                disabled: !_0x4fb57c || _0x4abc21,
                onClick: () =>
                  _0x4f8219(async () => {
                    if (!_0x4fb57c) return;
                    let _0x13b831 = {
                      operator: _0x5f2371.operator,
                      expected: _0x5f2371.isBetween
                        ? [Number(_0xd0441f), Number(_0x5925a1)]
                        : Number(_0xd0441f),
                      valueFieldId: _0xa6a58c,
                    };
                    (_0x5f2371.isBottom && (_0x13b831.isBottom = true),
                      await _0x43db5b(_0x13b831));
                  }),
                children: _0x22077f.t("sheets-pivot-ui.valueFilter.ok"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Zt(_0xde6c0) {
  let {
      pivotTableId: _0x5f020d,
      tableFieldId: _0x22dd2b,
      closeFn: _0x4f217a,
      unitId: _0x245221,
      subUnitId: _0x5ad268,
      format: _0x4ca228,
      tableFieldInfo: _0x489311,
      dataFieldInfo: _0x3e9edf,
      version: _0xd44d54,
    } = _0xde6c0,
    [_0x21fb92, _0x4114b7] = (0, s.useState)(_0x489311.displayName),
    [_0xcb687c, _0x15ee5e] = (0, s.useState)(_0x489311.subTotalType),
    _0x139320 = (0, e.useDependency)(n.LocaleService),
    _0x437c88 = (0, e.useDependency)(n.ICommandService),
    _0x23acfe = (0, e.useDependency)(e.IDialogService),
    _0x187e27 = {
      ...(0, e.useDependency)(t.SheetsPivotTableConfigModel).getTextInfo(),
    };
  for (let _0x4accff of [
    "sheets-pivot-ui.averageName",
    "sheets-pivot-ui.countName",
    "sheets-pivot-ui.countNumsName",
    "sheets-pivot-ui.maxName",
    "sheets-pivot-ui.minName",
    "sheets-pivot-ui.productName",
    "sheets-pivot-ui.stdDevName",
    "sheets-pivot-ui.stdDevpName",
    "sheets-pivot-ui.sumName",
    "sheets-pivot-ui.varName",
    "sheets-pivot-ui.varpName",
  ])
    _0x187e27[_0x4accff] = _0x139320.t(_0x4accff);
  if (
    ((0, s.useEffect)(() => {
      (_0x4114b7(_0x489311.displayName), _0x15ee5e(_0x489311.subTotalType));
    }, [_0xd44d54]),
    !_0x489311 || !_0x3e9edf)
  )
    return;
  let _0x54915a = _0x3e9edf.name,
    _0x465c54 = _0x139320.getDirection(),
    _0xbc1fbc = _0x4ca228 ?? _0x489311.format,
    _0x3b7c49 = fe.map((_0x3f4d76) => ({
      value: "" + _0x3f4d76.type,
      type: _0x3f4d76.type,
      label: _0x139320.t(_0x3f4d76.textKey),
    })),
    _0x31c0fe = (_0x5d78c5) => {
      let _0x6b0515 = _0x5d78c5;
      if (
        (Array.isArray(_0x5d78c5) && (_0x6b0515 = _0x5d78c5[0]),
        _0x6b0515 !== undefined)
      ) {
        let _0x4cc644 = Number(_0x6b0515);
        (_0x15ee5e(_0x4cc644),
          Ce(_0x54915a, _0x21fb92, _0x187e27) &&
            _0x4114b7(we(_0x54915a, _0x187e27, _0x4cc644)));
      }
    };
  return (0, u.jsxs)("div", {
    dir: _0x465c54,
    children: [
      (0, u.jsxs)("div", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-self-stretch univer-leading-5",
        children: [
          (0, u.jsx)("span", {
            className:
              "univer-text-sm univer-font-medium univer-leading-5 univer-text-gray-900",
            children: _0x139320.t("sheets-pivot-ui.dialog.fieldName"),
          }),
          (0, u.jsx)("span", {
            className: "univer-text-xs univer-leading-4 univer-text-gray-600",
            children: ee(
              _0x139320.t("sheets-pivot-ui.dialog.sourceName"),
              _0x54915a,
            ),
          }),
        ],
      }),
      (0, u.jsx)("div", {
        children: (0, u.jsx)(i.Input, {
          className:
            "univer-mb-5 univer-mt-2 univer-box-border univer-h-8 univer-w-full univer-rounded-md univer-py-1.5 univer-text-sm univer-leading-5",
          value: _0x21fb92,
          onChange: (_0xeab516) => _0x4114b7(_0xeab516),
        }),
      }),
      (0, u.jsx)("label", {
        className:
          "univer-mb-2\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
        children: _0x139320.t("sheets-pivot-ui.dialog.summarizeBy"),
      }),
      (0, u.jsx)("div", {
        className: (0, i.clsx)(
          "univer-h-40\x20univer-flex-1\x20univer-overflow-y-auto\x20univer-rounded-lg",
          i.borderClassName,
          i.scrollbarClassName,
        ),
        children: _0x3b7c49.map((_0x582290) =>
          (0, u.jsxs)(
            "div",
            {
              className:
                "univer-flex univer-items-center univer-gap-1.5 univer-self-stretch univer-rounded-md univer-px-2 univer-py-1.5 univer-text-sm univer-capitalize univer-leading-5",
              onClick: () => _0x31c0fe(_0x582290.value),
              children: [
                (0, u.jsx)("span", {
                  className:
                    "univer-w-4 univer-text-base univer-text-primary-600",
                  children: (0, u.jsx)(m.CheckMarkIcon, {
                    className: (0, i.clsx)({
                      "univer-hidden": _0xcb687c !== _0x582290.type,
                    }),
                  }),
                }),
                (0, u.jsx)("span", { children: _0x582290.label }),
              ],
            },
            _0x582290.type,
          ),
        ),
      }),
      (0, u.jsx)("footer", {
        className: "univer-mt-5",
        children: (0, u.jsxs)(i.ActionRow, {
          className:
            "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-self-stretch",
          children: [
            (0, u.jsx)(i.Button, {
              className:
                "univer-flex univer-h-8 univer-cursor-pointer univer-items-center univer-justify-center univer-gap-1.5 univer-rounded univer-border-none univer-bg-gray-0 univer-px-3 univer-text-primary-600",
              onClick: () => {
                let _0x41ae65 = {
                  id: S,
                  draggable: true,
                  mask: false,
                  maskClosable: false,
                  width: 400,
                  children: {
                    label: C,
                    unitId: _0x245221,
                    subUnitId: _0x5ad268,
                    pivotTableId: _0x5f020d,
                    tableFieldId: _0x22dd2b,
                    originPattern: _0xbc1fbc,
                    tableFieldInfo: _0x489311,
                    dataFieldInfo: _0x3e9edf,
                  },
                  dialogStyles: {
                    header: { padding: "20px 24px 0", height: 0 },
                    body: { padding: "0 24px 20px" },
                  },
                  closable: false,
                  onClose: () => {
                    _0x23acfe.close(S);
                  },
                };
                _0x23acfe.open(_0x41ae65);
              },
              children: _0x139320.t("sheets-pivot-ui.dialog.format"),
            }),
            (0, u.jsxs)(i.ActionRow, {
              className:
                "univer-flex univer-flex-1 univer-gap-2 univer-text-sm rtl:univer-flex-row-reverse",
              children: [
                (0, u.jsx)(i.Button, {
                  onClick: () => {
                    _0x4f217a && _0x4f217a();
                  },
                  children: _0x139320.t("sheets-pivot-ui.dialog.cancel"),
                }),
                (0, u.jsx)(i.Button, {
                  variant: "primary",
                  disabled: _0x21fb92 === "",
                  onClick: () => {
                    let _0x111808 = _0x489311.displayName,
                      _0x1d89e6 = _0x489311.subTotalType,
                      _0x1e70b2 = _0x489311.format,
                      _0x4d9d6b =
                        _0x111808 === _0x21fb92 ? undefined : _0x21fb92,
                      _0x203ff8 =
                        _0x1d89e6 === _0xcb687c ? undefined : _0xcb687c,
                      _0x5a3719 =
                        _0x1e70b2 === _0xbc1fbc ? undefined : _0xbc1fbc;
                    if (
                      _0x111808 !== _0x21fb92 ||
                      _0x1d89e6 !== _0xcb687c ||
                      _0x1e70b2 !== _0x5a3719
                    ) {
                      let _0x41d73a = {
                        displayName: _0x4d9d6b,
                        subtotalType: _0x203ff8,
                        format: _0x5a3719,
                        tableFieldId: _0x22dd2b,
                        pivotTableId: _0x5f020d,
                        unitId: _0x245221,
                        subUnitId: _0x5ad268,
                        tableFieldInfo: _0x489311,
                        dataFieldInfo: _0x3e9edf,
                      };
                      _0x437c88.executeCommand(
                        t.UpdatePivotFieldSettingCommand["id"],
                        _0x41d73a,
                      );
                    }
                    _0x4f217a && _0x4f217a();
                  },
                  children: _0x139320.t("sheets-pivot-ui.dialog.ok"),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
let X = class extends n.Disposable {
  constructor(_0x1ef9c9, _0x1111e7) {
    (super(),
      (this._componentManager = _0x1ef9c9),
      (this._iconManager = _0x1111e7),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    [
      [G.componentKey, G],
      [_, Gt],
      [y, pt],
      [x, Zt],
      [C, yt],
      [T, Kt],
      [E, Xt],
    ].forEach(([_0x46a7f0, _0x25442f]) => {
      this.disposeWithMe(
        this._componentManager["register"](_0x46a7f0, _0x25442f),
      );
    });
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ PivotTableIcon: m.PivotTableIcon }),
    );
  }
};
X = P(
  [N(0, (0, n.Inject)(e.ComponentManager)), N(1, (0, n.Inject)(e.IconManager))],
  X,
);
let Z = class extends n.Disposable {
  constructor(
    _0x3d5a30,
    _0x2892d1,
    _0x59afd2,
    _0x407c67,
    _0x15f4a1,
    _0x28517d,
    _0x39fbf3,
  ) {
    var _0x37fe61;
    (super(),
      (this._localeService = _0x3d5a30),
      (this._sheetInterceptorService = _0x2892d1),
      (this._injector = _0x59afd2),
      (this._confirmService = _0x407c67),
      (this._sheetsPivotTableService = _0x15f4a1),
      (this._configService = _0x28517d),
      (this._sheetPermissionCheckController = _0x39fbf3),
      M(this, "_defaultOverride", false),
      this._initUIInterceptListener(),
      (this._defaultOverride =
        ((_0x37fe61 = this._configService["getConfig"](
          t.SHEETS_PIVOT_PLUGIN_CONFIG_KEY,
        )) == null
          ? undefined
          : _0x37fe61.defaultOverride) ?? false));
  }
  _getPivotAppliedRanges(_0x4b5c41, _0x545c77, _0x29f7c9) {
    return (0, t.getPivotAppliedRanges)(
      _0x4b5c41,
      _0x545c77,
      _0x29f7c9,
      this._localeService["getDirection"](),
    );
  }
  _initUIInterceptListener() {
    this._sheetsPivotTableService["asyncInterceptor"].interceptAsync(
      this._sheetsPivotTableService["asyncInterceptor"].getInterceptPoints()
        .PIVOT_PERFORM_CHECK,
      {
        handler: async (_0x4e9110, _0x509ee2) => {
          let {
              cellInfo: _0x752533,
              view: _0x43a5fc,
              isEmpty: _0x5a3fa7,
            } = _0x509ee2,
            { unitId: _0x306db0, subUnitId: _0x9e74c4 } = _0x752533,
            _0x446b74 = this._getPivotAppliedRanges(
              _0x752533,
              _0x43a5fc,
              _0x5a3fa7,
            );
          if (
            !(0, r.checkRangesEditablePermission)(
              this._injector,
              _0x306db0,
              _0x9e74c4,
              _0x446b74,
            )
          ) {
            let _0x254745 = this._localeService["t"](
              "sheets-pivot-ui.msg.permissionError",
            );
            this._sheetPermissionCheckController[
              "blockExecuteWithoutPermission"
            ](_0x254745);
          }
          let _0x22d59d = this._sheetInterceptorService[
              "generateMutationsByRanges"
            ]({ unitId: _0x306db0, subUnitId: _0x9e74c4, ranges: _0x446b74 }),
            _0xbfeccf = (0, t.generateSetRangeValueMutations)(
              this._injector,
              _0x306db0,
              _0x9e74c4,
              _0x446b74,
            );
          if (_0x22d59d.redos["length"] || _0xbfeccf.shouldClear) {
            if (this._defaultOverride) return Promise.resolve(true);
            {
              let _0x4383a1 = await this._confirmService["confirm"]({
                id: "sheet-pivot.confirm.add-sheet-pivot",
                title: {
                  title: this._localeService["t"](
                    "sheets-pivot-ui.perform.tips",
                  ),
                },
                children: {
                  title: this._localeService["t"](
                    "sheets-pivot-ui.perform.info",
                  ),
                },
                cancelText: this._localeService["t"](
                  "sheets-pivot-ui.perform.cancel",
                ),
                confirmText: this._localeService["t"](
                  "sheets-pivot-ui.perform.confirm",
                ),
              });
              return Promise.resolve(_0x4383a1);
            }
          }
          return Promise.resolve(true);
        },
      },
    );
  }
};
Z = P(
  [
    N(0, (0, n.Inject)(n.LocaleService)),
    N(1, (0, n.Inject)(r.SheetInterceptorService)),
    N(2, (0, n.Inject)(n.Injector)),
    N(3, (0, n.Inject)(n.IConfirmService)),
    N(4, (0, n.Inject)(t.SheetsPivotTableService)),
    N(5, (0, n.Inject)(n.IConfigService)),
    N(6, (0, n.Inject)(r.SheetPermissionCheckController)),
  ],
  Z,
);
let Qt = class extends n.Disposable {
  constructor(_0x4683cf, _0x31e690, _0x496c2d) {
    (super(),
      (this._univerInstanceService = _0x4683cf),
      (this._sheetsPivotTableAdaptorModel = _0x31e690),
      (this._sheetClipboardService = _0x496c2d),
      this._initialize());
  }
  _initialize() {
    let _0x21d87d = this,
      _0x4f743f,
      _0x31964b;
    this.disposeWithMe(
      this._sheetClipboardService["addClipboardHook"]({
        id: t.SHEET_PIVOT_TABLE_PLUGIN,
        onBeforeCopy(_0xdf240, _0x5894b5) {
          let _0x171abd = _0x21d87d._univerInstanceService["getUnit"](
            _0xdf240,
            n.UniverInstanceType["UNIVER_SHEET"],
          );
          _0x171abd &&
            ((_0x4f743f = _0x21d87d._sheetsPivotTableAdaptorModel[
              "getSubUnitPivotMatrix"
            ](_0xdf240, _0x5894b5)),
            (_0x31964b = _0x171abd.getStyles()));
        },
        onAfterCopy() {
          ((_0x4f743f = null), (_0x31964b = null));
        },
        getCellValueBySpecialMatrix(_0x365992, _0x2218bf) {
          if (!_0x4f743f) return;
          let _0x5cd33c =
            _0x4f743f == null
              ? undefined
              : _0x4f743f.getValue(_0x365992, _0x2218bf);
          if (_0x5cd33c) {
            var _0x56b2da;
            return {
              ..._0x5cd33c,
              s: _0x31964b == null ? undefined : _0x31964b.get(_0x5cd33c.s),
              displayV:
                ((_0x56b2da = _0x5cd33c.v) == null
                  ? undefined
                  : _0x56b2da.toString()) || "",
            };
          }
        },
      }),
    );
  }
};
Qt = P(
  [
    N(0, (0, n.Inject)(n.IUniverInstanceService)),
    N(1, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)),
    N(2, d.ISheetClipboardService),
  ],
  Qt,
);
const $t = [
  r.InsertRowCommand["id"],
  r.RemoveColCommand["id"],
  r.RemoveRowCommand["id"],
  r.InsertColCommand["id"],
];
let en = class extends n.Disposable {
  constructor(
    _0x53566f,
    _0x40c467,
    _0x4b8e2c,
    _0x5e1af4,
    _0x23fb63,
    _0x3331ab,
    _0xfc686b,
    _0x346549,
    _0x182597,
  ) {
    var _0x27d243;
    (super(),
      (this._injector = _0x53566f),
      (this._univerInstanceService = _0x40c467),
      (this._sheetsPivotTableAdaptorModel = _0x4b8e2c),
      (this._sheetInterceptorService = _0x5e1af4),
      (this._confirmService = _0x23fb63),
      (this._localeService = _0x3331ab),
      (this._sheetsPivotTableConfigModel = _0xfc686b),
      (this._messageService = _0x346549),
      (this._configService = _0x182597),
      M(this, "_defaultOverride", false),
      this._initMoveRangeConfirmCheck(),
      this._initRowColOperationCheck(),
      (this._defaultOverride =
        ((_0x27d243 = this._configService["getConfig"](
          t.SHEETS_PIVOT_PLUGIN_CONFIG_KEY,
        )) == null
          ? undefined
          : _0x27d243.defaultOverride) ?? false));
  }
  _initMoveRangeConfirmCheck() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptBeforeCommand"]({
        performCheck: async (_0x920a38) => {
          if (_0x920a38.id === r.MoveRangeCommand["id"]) {
            let _0x2a37fc = (0, r.getSheetCommandTarget)(
              this._univerInstanceService,
            );
            if (!_0x2a37fc) return Promise.resolve(false);
            let { unitId: _0x56a23b, subUnitId: _0x1fb9c5 } = _0x2a37fc,
              { fromRange: _0x134589, toRange: _0x477ae1 } = _0x920a38.params,
              _0x2d0cf1 = this._sheetsPivotTableConfigModel[
                "getSubUnitPivotConfigs"
              ](_0x56a23b, _0x1fb9c5);
            if (!(_0x2d0cf1 != null && _0x2d0cf1.size))
              return Promise.resolve(true);
            for (let [_0x4ba344, _0x5afdc8] of _0x2d0cf1) {
              let { targetCellInfo: _0x4f8863 } = _0x5afdc8,
                { row: _0x470b07, col: _0xe4ae03 } = _0x4f8863,
                _0x370b28 = _0x470b07 - _0x134589.startRow,
                _0x594cbf = _0xe4ae03 - _0x134589.startColumn,
                _0x38fabc = {
                  row: _0x477ae1.startRow + _0x370b28,
                  col: _0x477ae1.startColumn + _0x594cbf,
                },
                _0x8db97f = _0x38fabc.row - _0x4f8863.row,
                _0x2fa71c = _0x38fabc.col - _0x4f8863.col,
                _0x5ecd9e = this._sheetsPivotTableAdaptorModel[
                  "getPivotItemRenderInfoCache"
                ](_0x56a23b, _0x1fb9c5, _0x4ba344),
                _0x5750b0 =
                  _0x5ecd9e == null ? undefined : _0x5ecd9e.rangesInfo;
              if (!_0x5750b0) return Promise.resolve(true);
              let _0x38dba6 = [];
              Object.keys(_0x5750b0).forEach((_0x538820) => {
                _0x5750b0[_0x538820].forEach((_0x59f21b) => {
                  let _0x1f2abf = { ..._0x59f21b };
                  ((_0x1f2abf.startRow = _0x59f21b.startRow + _0x8db97f),
                    (_0x1f2abf.endRow = _0x59f21b.endRow + _0x8db97f),
                    (_0x1f2abf.startColumn = _0x59f21b.startColumn + _0x2fa71c),
                    (_0x1f2abf.endColumn = _0x59f21b.endColumn + _0x2fa71c),
                    _0x38dba6.push(_0x1f2abf));
                });
              });
              let _0x47925a = this._sheetInterceptorService[
                  "generateMutationsByRanges"
                ]({
                  unitId: _0x56a23b,
                  subUnitId: _0x1fb9c5,
                  ranges: _0x38dba6,
                }),
                _0x241598 = (0, t.generateSetRangeValueMutations)(
                  this._injector,
                  _0x56a23b,
                  _0x1fb9c5,
                  _0x38dba6,
                );
              if (_0x47925a.redos["length"] || _0x241598.shouldClear) {
                if (this._defaultOverride) return Promise.resolve(true);
                {
                  let _0x22e1a4 = await this._confirmService["confirm"]({
                    id: "sheet-pivot.confirm.add-sheet-pivot",
                    title: {
                      title: this._localeService["t"](
                        "sheets-pivot-ui.perform.tips",
                      ),
                    },
                    children: {
                      title: this._localeService["t"](
                        "sheets-pivot-ui.perform.info",
                      ),
                    },
                    cancelText: this._localeService["t"](
                      "sheets-pivot-ui.perform.cancel",
                    ),
                    confirmText: this._localeService["t"](
                      "sheets-pivot-ui.perform.confirm",
                    ),
                  });
                  return Promise.resolve(_0x22e1a4);
                }
              }
            }
          }
          return Promise.resolve(true);
        },
      }),
    );
  }
  _initRowColOperationCheck() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptBeforeCommand"]({
        performCheck: async (_0x26cc41) => {
          if ($t.includes(_0x26cc41.id)) {
            let _0x3c07be = _0x26cc41.params,
              { range: _0xedca2a } = _0x3c07be,
              _0x53cb7e = (0, r.getSheetCommandTarget)(
                this._univerInstanceService,
              ),
              _0x56f6c6 =
                _0x3c07be.unitId ||
                (_0x53cb7e == null ? undefined : _0x53cb7e.unitId),
              _0x41c8cc =
                _0x3c07be.subUnitId ||
                (_0x53cb7e == null ? undefined : _0x53cb7e.subUnitId);
            if (!_0x56f6c6 || !_0x41c8cc) return Promise.resolve(true);
            let _0x421408 = this._sheetsPivotTableConfigModel[
              "getSubUnitPivotConfigs"
            ](_0x56f6c6, _0x41c8cc);
            if (_0x421408 != null && _0x421408.size)
              for (let [_0x12217a, _0x2d6a72] of _0x421408) {
                let _0x39cb73 = this._sheetsPivotTableAdaptorModel[
                  "getPivotItemRenderInfoCache"
                ](_0x56f6c6, _0x41c8cc, _0x12217a);
                if (_0x39cb73 != null && _0x39cb73.rangesInfo) {
                  for (let _0x292509 of Object.keys(_0x39cb73.rangesInfo))
                    if (
                      _0x39cb73.rangesInfo[_0x292509].some((_0x4e42b8) =>
                        n.Rectangle["intersects"](_0x4e42b8, _0xedca2a),
                      )
                    )
                      return (
                        this._messageService["show"]({
                          type: i.MessageType["Error"],
                          content: this._localeService["t"](
                            "sheets-pivot-ui.perform.rowColError",
                          ),
                        }),
                        Promise.resolve(false)
                      );
                }
              }
          }
          return Promise.resolve(true);
        },
      }),
    );
  }
};
en = P(
  [
    N(0, (0, n.Inject)(n.Injector)),
    N(1, (0, n.Inject)(n.IUniverInstanceService)),
    N(2, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)),
    N(3, (0, n.Inject)(r.SheetInterceptorService)),
    N(4, (0, n.Inject)(n.IConfirmService)),
    N(5, (0, n.Inject)(n.LocaleService)),
    N(6, (0, n.Inject)(t.SheetsPivotTableConfigModel)),
    N(7, (0, n.Inject)(e.IMessageService)),
    N(8, (0, n.Inject)(n.IConfigService)),
  ],
  en,
);
const tn = [
  h.InsertTextCommand["id"],
  g.IMEInputCommand["id"],
  d.SetCellEditVisibleOperation["id"],
];
let nn = class extends n.Disposable {
  constructor(
    _0x191ffe,
    _0x215e4a,
    _0x23ef10,
    _0x2f466f,
    _0x35caa6,
    _0x292359,
  ) {
    (super(),
      (this._sheetsSelectionsService = _0x191ffe),
      (this._univerInstanceService = _0x215e4a),
      (this._sheetsPivotTableAdaptorModel = _0x23ef10),
      (this._commandService = _0x2f466f),
      (this._sheetsPivotTableConfigModel = _0x35caa6),
      (this._localeService = _0x292359),
      this._initEditListener());
  }
  _initEditListener() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x19b8ae) => {
        if (tn.includes(_0x19b8ae.id)) {
          var _0x1d0ff6;
          let _0x1637e0 =
            (_0x1d0ff6 =
              this._sheetsSelectionsService["getCurrentLastSelection"]()) ==
            null
              ? undefined
              : _0x1d0ff6.primary;
          if (!_0x1637e0) return;
          let { actualRow: _0x129d88, actualColumn: _0x2040ac } = _0x1637e0,
            _0x1928e6 = (0, n.cellToRange)(_0x129d88, _0x2040ac),
            _0x5ed491 = (0, r.getSheetCommandTarget)(
              this._univerInstanceService,
              _0x19b8ae.params,
            );
          if (!_0x5ed491) return;
          let { unitId: _0x179514, subUnitId: _0x2ae7bf } = _0x5ed491,
            _0x4ccc6f = this._sheetsPivotTableConfigModel[
              "getSubUnitPivotConfigs"
            ](_0x179514, _0x2ae7bf);
          if (_0x4ccc6f != null && _0x4ccc6f.size)
            for (let [_0xc5b3a1] of _0x4ccc6f) {
              let _0x568152 = this._sheetsPivotTableAdaptorModel[
                "getPivotItemRenderInfoCache"
              ](_0x179514, _0x2ae7bf, _0xc5b3a1);
              if (_0x568152 != null && _0x568152.rangesInfo) {
                for (let _0x550790 of Object.keys(_0x568152.rangesInfo))
                  if (
                    _0x568152.rangesInfo[_0x550790].some((_0x22661d) =>
                      n.Rectangle["intersects"](_0x22661d, _0x1928e6),
                    )
                  )
                    throw new n["CustomCommandExecutionError"](
                      this._localeService["t"](
                        "sheets-pivot-ui.msg.editCellError",
                      ),
                    );
              }
            }
        }
      }),
    );
  }
};
nn = P(
  [
    N(0, (0, n.Inject)(r.SheetsSelectionsService)),
    N(1, (0, n.Inject)(n.IUniverInstanceService)),
    N(2, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)),
    N(3, (0, n.Inject)(n.ICommandService)),
    N(4, (0, n.Inject)(t.SheetsPivotTableConfigModel)),
    N(5, (0, n.Inject)(n.LocaleService)),
  ],
  nn,
);
let rn = class extends n.Disposable {
  constructor(_0x1a2004) {
    (super(), (this._menuManagerService = _0x1a2004), this._initMenu());
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](lt);
  }
};
rn = P([N(0, e.IMenuManagerService)], rn);
let an = class extends n.Disposable {
  constructor(_0x2a6a40, _0x82dcab, _0x2338c0, _0x34c2a4) {
    (super(),
      (this._sheetsPivotTableAdaptorModel = _0x2a6a40),
      (this._formatPainterService = _0x82dcab),
      (this._messageService = _0x2338c0),
      (this._localeService = _0x34c2a4),
      this._initFormatPainterListener());
  }
  _initFormatPainterListener() {
    let _0xf98243 = this._sheetsPivotTableAdaptorModel,
      _0x3bd782 = this._messageService,
      _0x50279e = this._localeService;
    this._formatPainterService["addHook"]({
      id: "pivot-format-painter-hook",
      onBeforeApply(_0x10ed3c) {
        let { redoMutationsInfo: _0xd093a7 } = _0x10ed3c;
        for (let _0x162643 of _0xd093a7)
          if (_0x162643.id === r.AddWorksheetMergeMutation["id"]) {
            let {
              unitId: _0x26ee37,
              subUnitId: _0x4766ff,
              ranges: _0x30d7d6,
            } = _0x162643.params;
            for (let _0xaf9b62 of _0x30d7d6)
              if (
                _0xf98243.getIntersectsPivotTable(
                  _0x26ee37,
                  _0x4766ff,
                  _0xaf9b62,
                ).length > 0
              )
                return (
                  _0x3bd782.show({
                    type: i.MessageType["Error"],
                    content: _0x50279e.t("sheets-pivot-ui.msg.mergeCellError"),
                  }),
                  false
                );
          }
        return true;
      },
    });
  }
};
an = P(
  [
    N(0, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)),
    N(1, (0, n.Inject)(d.IFormatPainterService)),
    N(2, (0, n.Inject)(e.IMessageService)),
    N(3, (0, n.Inject)(n.LocaleService)),
  ],
  an,
);
let on = class extends n.Disposable {
  constructor(_0x3bc008, _0x203302, _0xb1656e) {
    (super(),
      (this._sheetPrintInterceptorService = _0x3bc008),
      (this._sheetsPivotTableAdaptorModel = _0x203302),
      (this._sheetsPivotTableConfigModel = _0xb1656e),
      this._initPrintArea());
  }
  _initPrintArea() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_RANGE,
        {
          handler: (_0x8a7d1d, _0x4e2be5, _0x104f00) => {
            let { unitId: _0x55c0e0, subUnitId: _0x1d6b3c } = _0x4e2be5,
              _0x4d7f31 =
                (_0x8a7d1d == null ? undefined : _0x8a7d1d.startRow) ?? 1 / 0,
              _0x280df4 =
                (_0x8a7d1d == null ? undefined : _0x8a7d1d.endRow) ?? -1 / 0,
              _0x416233 =
                (_0x8a7d1d == null ? undefined : _0x8a7d1d.startColumn) ??
                1 / 0,
              _0x3dd00a =
                (_0x8a7d1d == null ? undefined : _0x8a7d1d.endColumn) ?? -1 / 0,
              _0x463085 = this._sheetsPivotTableConfigModel[
                "getSubUnitPivotConfigs"
              ](_0x55c0e0, _0x1d6b3c);
            if (!_0x463085) return _0x104f00(_0x8a7d1d);
            for (let [_0x491b37, _0x4a37da] of _0x463085) {
              var _0x18fcd9;
              let _0x328a5f =
                (_0x18fcd9 = this._sheetsPivotTableAdaptorModel[
                  "getPivotItemRenderInfoCache"
                ](_0x55c0e0, _0x1d6b3c, _0x491b37)) == null
                  ? undefined
                  : _0x18fcd9.rangesInfo;
              _0x328a5f &&
                Object.values(_0x328a5f).forEach((_0x5a411b) => {
                  _0x5a411b.forEach((_0x5c4029) => {
                    let {
                      startRow: _0x726cbb,
                      endRow: _0x11107d,
                      startColumn: _0x126a3f,
                      endColumn: _0x19a0da,
                    } = _0x5c4029;
                    ((_0x4d7f31 = Math.min(_0x726cbb, _0x4d7f31)),
                      (_0x280df4 = Math.max(_0x11107d, _0x280df4)),
                      (_0x416233 = Math.min(_0x126a3f, _0x416233)),
                      (_0x3dd00a = Math.max(_0x19a0da, _0x3dd00a)));
                  });
                });
            }
            let _0x309950 = {
              startRow: _0x4d7f31,
              endRow: _0x280df4,
              startColumn: _0x416233,
              endColumn: _0x3dd00a,
            };
            return (0, n.isValidRange)(_0x309950)
              ? _0x104f00(_0x309950)
              : _0x104f00(_0x8a7d1d);
          },
        },
      ),
    );
  }
};
((on = P(
  [
    N(0, (0, n.Inject)(d.SheetPrintInterceptorService)),
    N(1, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)),
    N(2, (0, n.Inject)(t.SheetsPivotTableConfigModel)),
  ],
  on,
)),
  new Path2D(
    "M3.30363 3C2.79117 3 2.51457 3.60097 2.84788 3.99024L6.8 8.60593V12.5662C6.8 12.7184 6.8864 12.8575 7.02289 12.9249L8.76717 13.7863C8.96655 13.8847 9.2 13.7396 9.2 13.5173V8.60593L13.1521 3.99024C13.4854 3.60097 13.2088 3 12.6964 3H3.30363Z",
  ));
var Q = class {
  static drawNoSetting(_0x2f1c81, _0x590dc2, _0x35f4fa, _0xe85267) {
    (_0x2f1c81.save(),
      p.Rect["drawWith"](_0x2f1c81, {
        radius: 2,
        width: 16,
        height: 16,
        fill: _0xe85267,
      }),
      (_0x2f1c81.lineCap = "square"),
      (_0x2f1c81.strokeStyle = _0x35f4fa),
      _0x2f1c81.scale(_0x590dc2 / 16, _0x590dc2 / 16),
      _0x2f1c81.beginPath(),
      (_0x2f1c81.lineWidth = 1),
      (_0x2f1c81.lineCap = "round"),
      _0x2f1c81.moveTo(3, 4),
      _0x2f1c81.lineTo(13, 4),
      _0x2f1c81.moveTo(4.5, 8),
      _0x2f1c81.lineTo(11.5, 8),
      _0x2f1c81.moveTo(6, 12),
      _0x2f1c81.lineTo(10, 12),
      _0x2f1c81.stroke(),
      _0x2f1c81.restore());
  }
  static drawExpand(_0x3f09be, _0x4b07b4, _0xb5dfc9, _0x34131f, _0x207a3e) {
    let _0x59f19f = (_0x207a3e - _0x4b07b4) / 2;
    (_0x3f09be.save(),
      (_0x3f09be.fillStyle = _0x34131f),
      (_0x3f09be.strokeStyle = _0xb5dfc9),
      _0x3f09be.beginPath(),
      _0x3f09be.moveTo(6, _0x59f19f),
      _0x3f09be.lineTo(4 + _0x4b07b4 - 2, _0x59f19f),
      _0x3f09be.arcTo(
        4 + _0x4b07b4,
        _0x59f19f,
        4 + _0x4b07b4,
        _0x59f19f + 2,
        2,
      ),
      _0x3f09be.lineTo(4 + _0x4b07b4, _0x59f19f + _0x4b07b4 - 2),
      _0x3f09be.arcTo(
        4 + _0x4b07b4,
        _0x59f19f + _0x4b07b4,
        4 + _0x4b07b4 - 2,
        _0x59f19f + _0x4b07b4,
        2,
      ),
      _0x3f09be.lineTo(6, _0x59f19f + _0x4b07b4),
      _0x3f09be.arcTo(
        4,
        _0x59f19f + _0x4b07b4,
        4,
        _0x59f19f + _0x4b07b4 - 2,
        2,
      ),
      _0x3f09be.lineTo(4, _0x59f19f + 2),
      _0x3f09be.arcTo(4, _0x59f19f, 6, _0x59f19f, 2),
      _0x3f09be.closePath(),
      _0x3f09be.stroke(),
      _0x3f09be.fill(),
      _0x3f09be.beginPath(),
      _0x3f09be.moveTo(4 + _0x4b07b4 / 2, _0x59f19f + 2),
      _0x3f09be.lineTo(4 + _0x4b07b4 / 2, _0x59f19f + _0x4b07b4 - 2),
      _0x3f09be.moveTo(6, _0x59f19f + _0x4b07b4 / 2),
      _0x3f09be.lineTo(4 + _0x4b07b4 - 2, _0x59f19f + _0x4b07b4 / 2),
      _0x3f09be.stroke(),
      _0x3f09be.restore());
  }
  static drawCollapse(_0x1b66a1, _0x1a773d, _0x481170, _0xc2cac9, _0x4a61c1) {
    let _0xaf9cb4 = (_0x4a61c1 - _0x1a773d) / 2;
    (_0x1b66a1.save(),
      (_0x1b66a1.fillStyle = _0xc2cac9),
      (_0x1b66a1.strokeStyle = _0x481170),
      _0x1b66a1.beginPath(),
      _0x1b66a1.moveTo(6, _0xaf9cb4),
      _0x1b66a1.lineTo(4 + _0x1a773d - 2, _0xaf9cb4),
      _0x1b66a1.arcTo(
        4 + _0x1a773d,
        _0xaf9cb4,
        4 + _0x1a773d,
        _0xaf9cb4 + 2,
        2,
      ),
      _0x1b66a1.lineTo(4 + _0x1a773d, _0xaf9cb4 + _0x1a773d - 2),
      _0x1b66a1.arcTo(
        4 + _0x1a773d,
        _0xaf9cb4 + _0x1a773d,
        4 + _0x1a773d - 2,
        _0xaf9cb4 + _0x1a773d,
        2,
      ),
      _0x1b66a1.lineTo(6, _0xaf9cb4 + _0x1a773d),
      _0x1b66a1.arcTo(
        4,
        _0xaf9cb4 + _0x1a773d,
        4,
        _0xaf9cb4 + _0x1a773d - 2,
        2,
      ),
      _0x1b66a1.lineTo(4, _0xaf9cb4 + 2),
      _0x1b66a1.arcTo(4, _0xaf9cb4, 6, _0xaf9cb4, 2),
      _0x1b66a1.closePath(),
      _0x1b66a1.fill(),
      _0x1b66a1.stroke(),
      _0x1b66a1.beginPath(),
      _0x1b66a1.moveTo(6, _0xaf9cb4 + _0x1a773d / 2),
      _0x1b66a1.lineTo(4 + _0x1a773d - 2, _0xaf9cb4 + _0x1a773d / 2),
      _0x1b66a1.stroke(),
      _0x1b66a1.restore());
  }
  static drawIconByPath(_0x17b5ea, _0x38e27f, _0x1a4529, _0xc6f5af) {
    (_0x17b5ea.save(),
      (_0x17b5ea.strokeStyle = _0x1a4529),
      (_0x17b5ea.fillStyle = _0xc6f5af),
      p.Rect["drawWith"](_0x17b5ea, {
        radius: 2,
        width: 16,
        height: 16,
        fill: _0xc6f5af,
      }),
      _0x38e27f.forEach((_0x118bff) => {
        let _0x4b92a2 = new Path2D(_0x118bff);
        ((_0x17b5ea.fillStyle = _0x1a4529),
          _0x17b5ea.fill(_0x4b92a2, "evenodd"));
      }),
      _0x17b5ea.restore());
  }
};
const sn = [
    "M3.30363 3C2.79117 3 2.51457 3.60097 2.84788 3.99024L6.8 8.60593V12.5662C6.8 12.7184 6.8864 12.8575 7.02289 12.9249L8.76717 13.7863C8.96655 13.8847 9.2 13.7396 9.2 13.5173V8.60593L13.1521 3.99024C13.4854 3.60097 13.2088 3 12.6964 3H3.30363Z",
  ],
  cn = [
    "M12.4008 13.1831C12.6907 13.1831 12.9258 12.9481 12.9258 12.6581V4.60873L14.013 5.69597C14.218 5.901 14.5505 5.901 14.7555 5.69597C14.9605 5.49094 14.9605 5.15853 14.7555 4.95351L12.7721 2.97017C12.5671 2.76515 12.2347 2.76515 12.0297 2.97017L10.0463 4.95351C9.84132 5.15853 9.84132 5.49094 10.0463 5.69597C10.2514 5.901 10.5838 5.901 10.7888 5.69597L11.8758 4.60901V12.6581C11.8758 12.9481 12.1108 13.1831 12.4008 13.1831Z",
    "M1.28069 4.85447C0.842195 4.33439 1.21191 3.5391 1.89218 3.5391H8.59333C9.2736 3.5391 9.64331 4.33439 9.20482 4.85447L6.51052 8.0501V11.6601C6.51052 12.2245 5.94174 12.6114 5.41683 12.404L4.48092 12.0343C4.1756 11.9136 3.97498 11.6187 3.97498 11.2904V8.0501L1.28069 4.85447Z",
  ],
  ln = [
    "M12.4008 2.81641C12.6907 2.81641 12.9258 3.05146 12.9258 3.34141V11.3908L14.013 10.3036C14.218 10.0986 14.5505 10.0986 14.7555 10.3036C14.9605 10.5086 14.9605 10.841 14.7555 11.046L12.7721 13.0294C12.5671 13.2344 12.2347 13.2344 12.0297 13.0294L10.0463 11.046C9.84132 10.841 9.84132 10.5086 10.0463 10.3036C10.2514 10.0986 10.5838 10.0986 10.7888 10.3036L11.8758 11.3905V3.34141C11.8758 3.05146 12.1108 2.81641 12.4008 2.81641Z",
    "M1.28069\x204.85444C0.842195\x204.33435\x201.21191\x203.53906\x201.89218\x203.53906H8.59333C9.2736\x203.53906\x209.64331\x204.33435\x209.20482\x204.85443L6.51052\x208.05006V11.6601C6.51052\x2012.2245\x205.94174\x2012.6113\x205.41683\x2012.404L4.48092\x2012.0342C4.1756\x2011.9136\x203.97498\x2011.6186\x203.97498\x2011.2903V8.05006L1.28069\x204.85444Z",
  ],
  un = [
    "M11.9003\x2013.7046C11.9003\x2013.9969\x2011.6633\x2014.2339\x2011.371\x2014.2339C11.0787\x2014.2339\x2010.8417\x2013.9969\x2010.8417\x2013.7046V3.57272L9.74577\x204.66862C9.53906\x204.87534\x209.20391\x204.87534\x208.9972\x204.66862C8.79048\x204.46191\x208.79048\x204.12676\x208.9972\x203.92005L10.9969\x201.92039C11.2036\x201.71368\x2011.5387\x201.71368\x2011.7454\x201.92039L13.7451\x203.92005C13.9518\x204.12676\x2013.9518\x204.46191\x2013.7451\x204.66862C13.5384\x204.87534\x2013.2032\x204.87534\x2012.9965\x204.66862L11.9003\x203.57243V13.7046Z",
    "M2.69779\x2010.0113C2.40546\x2010.0113\x202.16847\x209.77429\x202.16847\x209.48196C2.16847\x209.18962\x202.40546\x208.95264\x202.69779\x208.95264H6.67804C6.89213\x208.95264\x207.08514\x209.0816\x207.16707\x209.2794C7.249\x209.47719\x207.20371\x209.70486\x207.05233\x209.85624L3.97569\x2012.9329H6.67804C6.97038\x2012.9329\x207.20736\x2013.1699\x207.20736\x2013.4622C7.20736\x2013.7545\x206.97038\x2013.9915\x206.67804\x2013.9915H2.69779C2.4837\x2013.9915\x202.29069\x2013.8626\x202.20876\x2013.6648C2.12684\x2013.467\x202.17212\x2013.2393\x202.32351\x2013.0879L5.40015\x2010.0113H2.69779Z",
    "M5.51638\x202.58693C5.23363\x201.81542\x204.14248\x201.81543\x203.85973\x202.58693L2.13245\x207.29995C2.03185\x207.57443\x202.17281\x207.87849\x202.4473\x207.97909C2.72178\x208.07969\x203.02584\x207.93872\x203.12644\x207.66424L3.64346\x206.25351L3.64504\x206.25351H5.73266L6.24968\x207.66424C6.35027\x207.93872\x206.65433\x208.07969\x206.92882\x207.97909C7.2033\x207.87849\x207.34426\x207.57443\x207.24367\x207.29995L5.51638\x202.58693ZM5.34467\x205.19487L4.68806\x203.40325L4.03144\x205.19487H5.34467Z",
  ],
  dn = [
    "M11.9003\x202.29495C11.9003\x202.00261\x2011.6633\x201.76562\x2011.371\x201.76562C11.0787\x201.76562\x2010.8417\x202.00261\x2010.8417\x202.29495V12.4268L9.74577\x2011.3309C9.53906\x2011.1242\x209.20391\x2011.1242\x208.9972\x2011.3309C8.79048\x2011.5376\x208.79048\x2011.8727\x208.9972\x2012.0795L10.9969\x2014.0791C11.2036\x2014.2858\x2011.5387\x2014.2858\x2011.7454\x2014.0791L13.7451\x2012.0795C13.9518\x2011.8727\x2013.9518\x2011.5376\x2013.7451\x2011.3309C13.5384\x2011.1242\x2013.2032\x2011.1242\x2012.9965\x2011.3309L11.9003\x2012.4271V2.29495Z",
    "M2.69792 10.0113C2.40558 10.0113 2.16859 9.77429 2.16859 9.48196C2.16859 9.18962 2.40558 8.95264 2.69792 8.95264H6.67816C6.89225 8.95264 7.08526 9.0816 7.16719 9.2794C7.24912 9.47719 7.20384 9.70486 7.05245 9.85624L3.97581 12.9329H6.67816C6.9705 12.9329 7.20749 13.1699 7.20749 13.4622C7.20749 13.7545 6.9705 13.9915 6.67816 13.9915H2.69792C2.48383 13.9915 2.29082 13.8626 2.20889 13.6648C2.12696 13.467 2.17224 13.2393 2.32363 13.0879L5.40027 10.0113H2.69792Z",
    "M5.5165 2.58693C5.23375 1.81542 4.1426 1.81543 3.85985 2.58693L2.13257 7.29995C2.03197 7.57443 2.17294 7.8785 2.44742 7.97909C2.7219 8.07969 3.02596 7.93872 3.12656 7.66424L3.64358 6.25351L3.64516 6.25351H5.73278L6.2498 7.66424C6.35039 7.93872 6.65446 8.07969 6.92894 7.97909C7.20342 7.8785 7.34438 7.57443 7.24379 7.29995L5.5165 2.58693ZM5.34479 5.19487L4.68818 3.40325L4.03156 5.19487H5.34479Z",
  ],
  fn = new Set([
    l.PivotCellStyleTypeEnum["FilterAll"],
    l.PivotCellStyleTypeEnum["FilterPartial"],
    l.PivotCellStyleTypeEnum["FilterSingle"],
    l.PivotCellStyleTypeEnum["FilterNoneSortNone"],
    l.PivotCellStyleTypeEnum["FilteredSortAsc"],
    l.PivotCellStyleTypeEnum["FilteredSortDesc"],
    l.PivotCellStyleTypeEnum["FilteredSortNone"],
    l.PivotCellStyleTypeEnum["FilterNoneSortAsc"],
    l.PivotCellStyleTypeEnum["FilterNoneSortDesc"],
  ]),
  pn = new Set([
    l.PivotCellStyleTypeEnum["Expand"],
    l.PivotCellStyleTypeEnum["Collapse"],
  ]);
let mn = class extends p.Shape {
  constructor(_0x2c72b2, _0x106685, _0x5454ba, _0x258907) {
    (super(_0x2c72b2, _0x106685),
      (this._commandService = _0x5454ba),
      (this._themeService = _0x258907),
      M(this, "_cellWidth", 0),
      M(this, "_cellHeight", 0),
      M(this, "_hovered", false),
      M(this, "_pivotParams", undefined),
      this.setShapeProps(_0x106685),
      this.onPointerDown$["subscribeEvent"]((_0x4fb3d8) =>
        this.onPointerDown(_0x4fb3d8),
      ),
      this.onPointerEnter$["subscribeEvent"](() => this.onPointerEnter()),
      this.onPointerLeave$["subscribeEvent"](() => this.onPointerLeave()));
  }
  setShapeProps(_0x145658) {
    (_0x145658.cellHeight !== undefined &&
      (this._cellHeight = _0x145658.cellHeight),
      _0x145658.cellWidth !== undefined &&
        (this._cellWidth = _0x145658.cellWidth),
      _0x145658.pivotParams !== undefined &&
        (this._pivotParams = _0x145658.pivotParams),
      this.transformByState({
        width: _0x145658.width,
        height: _0x145658.height,
      }));
  }
  onPointerDown(_0x130a06) {
    if (_0x130a06.button === 2) return;
    let {
      col: _0x2ff74e,
      row: _0x27355e,
      unitId: _0x3d073c,
      subUnitId: _0x4b1b3b,
      buttonType: _0x4c1003,
    } = this._pivotParams;
    fn.has(_0x4c1003)
      ? setTimeout(() => {
          this._commandService["executeCommand"](I.id, {
            row: _0x27355e,
            col: _0x2ff74e,
            unitId: _0x3d073c,
            subUnitId: _0x4b1b3b,
          });
        }, 200)
      : this._commandService["executeCommand"](
          t.SetPivotCollapseCommand["id"],
          {
            row: _0x27355e,
            col: _0x2ff74e,
            unitId: _0x3d073c,
            subUnitId: _0x4b1b3b,
            collapse: _0x4c1003 === l.PivotCellStyleTypeEnum["Expand"],
          },
        );
  }
  onPointerEnter() {
    ((this._hovered = true),
      this.setCursor(p.CURSOR_TYPE["POINTER"]),
      this.makeDirty(true));
  }
  onPointerLeave() {
    ((this._hovered = false),
      this.setCursor(p.CURSOR_TYPE["DEFAULT"]),
      this.makeDirty(true));
  }
  _draw(_0x4a1be2) {
    var _0x3bc688, _0x1de2fe;
    if (!((_0x3bc688 = this._pivotParams) != null && _0x3bc688.buttonType))
      return;
    let _0xcdd4ab = this._themeService["getColorFromTheme"]("primary.600"),
      _0x3e5788 = this._themeService["getColorFromTheme"]("gray.50");
    _0x4a1be2.save();
    let _0x84efdc = new Path2D();
    (_0x84efdc.rect(0, 0, this._cellWidth, this._cellHeight),
      _0x4a1be2.clip(_0x84efdc),
      ((_0x1de2fe = this._pivotParams) == null
        ? undefined
        : _0x1de2fe.buttonType) === l.PivotCellStyleTypeEnum["Collapse"]
        ? Q.drawExpand(_0x4a1be2, 12, _0xcdd4ab, _0x3e5788, this._cellHeight)
        : this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["Expand"]
          ? Q.drawCollapse(
              _0x4a1be2,
              12,
              _0xcdd4ab,
              _0x3e5788,
              this._cellHeight,
            )
          : this._pivotParams["buttonType"] ===
                l.PivotCellStyleTypeEnum["FilterAll"] ||
              this._pivotParams["buttonType"] ===
                l.PivotCellStyleTypeEnum["FilterNoneSortNone"]
            ? Q.drawNoSetting(_0x4a1be2, 16, _0xcdd4ab, _0x3e5788)
            : this._pivotParams["buttonType"] ===
                  l.PivotCellStyleTypeEnum["FilterPartial"] ||
                this._pivotParams["buttonType"] ===
                  l.PivotCellStyleTypeEnum["FilterSingle"] ||
                this._pivotParams["buttonType"] ===
                  l.PivotCellStyleTypeEnum["FilteredSortNone"]
              ? Q.drawIconByPath(_0x4a1be2, sn, _0xcdd4ab, _0x3e5788)
              : this._pivotParams["buttonType"] ===
                  l.PivotCellStyleTypeEnum["FilterNoneSortAsc"]
                ? Q.drawIconByPath(_0x4a1be2, un, _0xcdd4ab, _0x3e5788)
                : this._pivotParams["buttonType"] ===
                    l.PivotCellStyleTypeEnum["FilterNoneSortDesc"]
                  ? Q.drawIconByPath(_0x4a1be2, dn, _0xcdd4ab, _0x3e5788)
                  : this._pivotParams["buttonType"] ===
                      l.PivotCellStyleTypeEnum["FilteredSortAsc"]
                    ? Q.drawIconByPath(_0x4a1be2, cn, _0xcdd4ab, _0x3e5788)
                    : this._pivotParams["buttonType"] ===
                        l.PivotCellStyleTypeEnum["FilteredSortDesc"] &&
                      Q.drawIconByPath(_0x4a1be2, ln, _0xcdd4ab, _0x3e5788),
      _0x4a1be2.restore());
  }
};
mn = P([N(2, n.ICommandService), N(3, (0, n.Inject)(n.ThemeService))], mn);
function hn(_0x2e54bf, _0x2c53a8, _0x4cad10) {
  let {
    startX: _0x3ba165,
    startY: _0xc22db,
    endX: _0x484724,
    endY: _0x39899c,
  } = _0x4cad10;
  return {
    left: (_0x2c53a8 === "filter" ? _0x2e54bf !== "rtl" : _0x2e54bf === "rtl")
      ? _0x484724 - 16 - 1
      : _0x3ba165 + 1,
    top: _0x2c53a8 === "filter" ? _0x39899c - 16 - 1 : _0xc22db + 1,
  };
}
let gn = class extends n.Disposable {
  constructor(
    _0x531ad1,
    _0x1e6ec0,
    _0x4fa436,
    _0x32858c,
    _0x2484c7,
    _0x33f4bc,
    _0x1906f9,
    _0xd72ead,
    _0x2ee7da,
  ) {
    (super(),
      (this._context = _0x531ad1),
      (this._injector = _0x1e6ec0),
      (this._sheetsPivotTableAdaptorModel = _0x4fa436),
      (this._sheetSkeletonManagerService = _0x32858c),
      (this._sheetsPivotTableConfigModel = _0x2484c7),
      (this._commandService = _0x33f4bc),
      (this._sheetPermissionCheckController = _0x1906f9),
      (this._permissionService = _0xd72ead),
      (this._localeService = _0x2ee7da),
      M(this, "_pivotButtonShapesArr", []),
      this._initButtonRender(),
      this._initSkeleton(),
      this._initListener());
  }
  _initButtonRender() {
    this.disposeWithMe(
      (0, c.merge)(
        this._sheetsPivotTableAdaptorModel["viewUpdate$"].pipe(
          (0, c.auditTime)(0),
        ),
        this._sheetSkeletonManagerService["currentSkeleton$"],
        this._sheetsPivotTableConfigModel["pivotConfigChange$"],
        this._permissionService["permissionPointUpdate$"].pipe(
          (0, c.auditTime)(100),
        ),
      ).subscribe(() => {
        if (!this._context["unit"]) return;
        let _0x37214f = this._context["unitId"],
          _0x2ca018 = this._context["unit"].getActiveSheet().getSheetId(),
          { scene: _0x53d92f } = this._context,
          _0x55988d = this._localeService["getDirection"](),
          _0x55a110 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
        if (!_0x55a110) return;
        let _0x257ab6 = this._pivotButtonShapesArr;
        (_0x257ab6.forEach((_0x54ea30) => _0x54ea30.dispose()),
          _0x257ab6.splice(0, _0x257ab6.length),
          this._sheetsPivotTableAdaptorModel["getSubUnitPivotMatrix"](
            _0x37214f,
            _0x2ca018,
          ).forValue((_0x2c8932, _0x5cd745, _0x1ab5aa) => {
            if (_0x1ab5aa != null && _0x1ab5aa.pbt) {
              let _0x1add26 =
                  "sheets-pivot-button-" +
                  _0x2c8932 +
                  "-" +
                  _0x5cd745 +
                  "-" +
                  _0x37214f +
                  "-" +
                  _0x2ca018,
                {
                  startX: _0x5f08e0,
                  startY: _0x3b7c15,
                  endX: _0x2b443f,
                  endY: _0x3993d2,
                } = (0, d.getCoordByCell)(
                  _0x2c8932,
                  _0x5cd745,
                  _0x53d92f,
                  _0x55a110,
                ),
                _0x3dd9d5 = _0x2b443f - _0x5f08e0,
                _0x3cd70e = _0x3993d2 - _0x3b7c15;
              if (
                _0x3cd70e < 16 / 2 ||
                _0x3dd9d5 < 16 / 2 ||
                this._sheetPermissionCheckController[
                  "permissionCheckWithRanges"
                ](
                  {
                    workbookTypes: [r.WorkbookEditablePermission],
                    worksheetTypes: [
                      r.WorksheetViewPermission,
                      r.WorksheetEditPermission,
                      r.WorksheetPivotTablePermission,
                    ],
                    rangeTypes: [
                      r.RangeProtectionPermissionViewPoint,
                      r.RangeProtectionPermissionEditPoint,
                    ],
                  },
                  [
                    {
                      startRow: _0x2c8932,
                      endRow: _0x2c8932,
                      startColumn: _0x5cd745,
                      endColumn: _0x5cd745,
                    },
                  ],
                  _0x37214f,
                  _0x2ca018,
                ) === false
              )
                return;
              let _0x1d32c1;
              if (fn.has(_0x1ab5aa.pbt)) {
                let { left: _0x141c1d, top: _0x2a0bee } = hn(
                  _0x55988d,
                  "filter",
                  {
                    startX: _0x5f08e0,
                    startY: _0x3b7c15,
                    endX: _0x2b443f,
                    endY: _0x3993d2,
                  },
                );
                _0x1d32c1 = {
                  left: _0x141c1d,
                  top: _0x2a0bee,
                  height: 16,
                  width: 16,
                  zIndex: 5000,
                  cellWidth: _0x3dd9d5,
                  cellHeight: _0x3cd70e,
                  pivotParams: {
                    col: _0x5cd745,
                    row: _0x2c8932,
                    unitId: _0x37214f,
                    subUnitId: _0x2ca018,
                    buttonType: _0x1ab5aa.pbt,
                  },
                };
              } else {
                if (pn.has(_0x1ab5aa.pbt)) {
                  let { left: _0x4edb64, top: _0x4c26a1 } = hn(
                    _0x55988d,
                    "collapse",
                    {
                      startX: _0x5f08e0,
                      startY: _0x3b7c15,
                      endX: _0x2b443f,
                      endY: _0x3993d2,
                    },
                  );
                  _0x1d32c1 = {
                    left: _0x4edb64,
                    top: _0x4c26a1,
                    height: 16,
                    width: 16,
                    zIndex: 5000,
                    cellWidth: _0x3dd9d5,
                    cellHeight: _0x3cd70e,
                    pivotParams: {
                      col: _0x5cd745,
                      row: _0x2c8932,
                      unitId: _0x37214f,
                      subUnitId: _0x2ca018,
                      buttonType: _0x1ab5aa.pbt,
                    },
                  };
                } else return;
              }
              let _0x3e2864 = this._injector["createInstance"](
                mn,
                _0x1add26,
                _0x1d32c1,
              );
              _0x257ab6.push(_0x3e2864);
            }
          }),
          _0x257ab6.length && _0x53d92f.addObjects(_0x257ab6),
          _0x53d92f.makeDirty());
      }),
    );
  }
  _initSkeleton() {
    var _0xb7997a;
    this.disposeWithMe(
      this._sheetsPivotTableAdaptorModel["markDirty$"].subscribe(
        ({ unitId: _0x27645a, subUnitId: _0x590d94 }) => {
          if (
            _0x27645a === this._context["unitId"] &&
            (this._sheetSkeletonManagerService["makeDirty"]({
              sheetId: _0x590d94,
            }),
            this._context["unit"].getActiveSheet().getSheetId() === _0x590d94)
          ) {
            var _0x384230;
            (this._sheetSkeletonManagerService["reCalculate"](),
              (_0x384230 = this._context["mainComponent"]) == null ||
                _0x384230.makeDirty());
          }
        },
      ),
    );
    let _0x40285a = this._context["unitId"];
    (this._context["unit"].getSheets().forEach((_0x2f1c1a) => {
      var _0x48411b;
      let _0x1830ff = _0x2f1c1a.getSheetId();
      (_0x48411b = this._sheetsPivotTableAdaptorModel[
        "getSubUnitPivotRenderCache"
      ](_0x40285a, _0x1830ff)) != null &&
        _0x48411b.size &&
        this._sheetSkeletonManagerService["makeDirty"]({ sheetId: _0x1830ff });
    }),
      this._sheetSkeletonManagerService["reCalculate"](),
      (_0xb7997a = this._context["mainComponent"]) == null ||
        _0xb7997a.makeDirty());
  }
  _initListener() {
    let _0x1b9d54 = new n["DisposableCollection"](),
      { spreadsheet: _0x13e1da } = (0, d.getSheetObject)(
        this._context["unit"],
        this._context,
      );
    _0x1b9d54.add(
      _0x13e1da.onDblclick$["subscribeEvent"]((_0x31c523) => {
        if (_0x31c523.button === 2) return;
        let _0x39fdef =
          this._sheetSkeletonManagerService["getCurrentSkeleton"]();
        if (_0x39fdef == null) return;
        let _0x45c7a9 = this._context["scene"],
          { row: _0x471a1c, column: _0x532f43 } = (0, d.getCoordByOffset)(
            _0x31c523.offsetX,
            _0x31c523.offsetY,
            _0x45c7a9,
            _0x39fdef,
          );
        this._commandService["executeCommand"](t.PivotDrillDownCommand["id"], {
          row: _0x471a1c,
          col: _0x532f43,
        });
      }),
    );
  }
};
gn = P(
  [
    N(1, (0, n.Inject)(n.Injector)),
    N(2, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)),
    N(3, (0, n.Inject)(d.SheetSkeletonManagerService)),
    N(4, (0, n.Inject)(t.SheetsPivotTableConfigModel)),
    N(5, (0, n.Inject)(n.ICommandService)),
    N(6, (0, n.Inject)(r.SheetPermissionCheckController)),
    N(7, (0, n.Inject)(n.IPermissionService)),
    N(8, (0, n.Inject)(n.LocaleService)),
  ],
  gn,
);
var _n = class e extends p.Shape {
  constructor(_0xc68eb6) {
    (super("SHEET_PIVOT_MOVE_KEY"),
      M(this, "_moveType", undefined),
      (this._moveType = _0xc68eb6));
  }
  _draw(_0x3f61e1) {
    this.width !== 0 && this.height !== 0 && e.drawWith(_0x3f61e1, this);
  }
  static drawWith(_0x3627b7, _0x6cee89) {
    let _0x5c8c36 = _0x6cee89._moveType;
    if (
      (_0x3627b7.save(),
      (_0x3627b7.strokeStyle = "#8bc34a"),
      (_0x3627b7.lineWidth = 2),
      _0x5c8c36 === "row")
    ) {
      let _0x78943d = _0x6cee89.width;
      if (!_0x78943d) return;
      (_0x3627b7.beginPath(),
        _0x3627b7.moveTo(0, 0),
        _0x3627b7.lineTo(0 + _0x78943d, 0),
        _0x3627b7.moveTo(0, 0 - 20 / 2),
        _0x3627b7.lineTo(0, 10),
        _0x3627b7.moveTo(0 + _0x78943d, 0 - 20 / 2),
        _0x3627b7.lineTo(0 + _0x78943d, 10));
    } else {
      let _0x25711b = _0x6cee89.height;
      if (!_0x25711b) return;
      (_0x3627b7.moveTo(0, 0),
        _0x3627b7.lineTo(0, 0 + _0x25711b),
        _0x3627b7.moveTo(0 - 20 / 2, 0),
        _0x3627b7.lineTo(10, 0),
        _0x3627b7.moveTo(0 - 20 / 2, 0 + _0x25711b),
        _0x3627b7.lineTo(10, 0 + _0x25711b));
    }
    (_0x3627b7.stroke(), _0x3627b7.restore());
  }
};
let vn = class extends n.Disposable {
  constructor(
    _0x3888d6,
    _0x520482,
    _0x21c429,
    _0x12fcd8,
    _0x5280b7,
    _0x15498a,
  ) {
    (super(),
      (this._context = _0x3888d6),
      (this._sheetsPivotTableAdaptorModel = _0x520482),
      (this._sheetSkeletonManagerService = _0x21c429),
      (this._commandService = _0x12fcd8),
      (this._selectionRenderService = _0x5280b7),
      (this._sheetsSelectionsService = _0x15498a),
      M(this, "_pivotSelectionMoveShape", undefined),
      M(this, "_scenePointerMoveSubscribe", undefined),
      M(this, "_scenePointerUpSubscribe", undefined),
      M(this, "_selectionControl", undefined),
      M(this, "_moveStartRange", undefined),
      M(this, "_moveStartCellIndex", undefined),
      M(this, "_moveRowOrCol", "row"),
      M(this, "_targetRange", undefined),
      M(this, "_movePivotId", undefined),
      this._initControl());
  }
  _controlMoving(_0x4c603c, _0x397919) {
    let _0x45f400 = this._context["scene"],
      _0x421b61 = _0x45f400.getScrollXYInfoByViewport(
        p.Vector2["FromArray"]([_0x4c603c, _0x397919]),
      ),
      { scaleX: _0x32f426, scaleY: _0x4c575b } = _0x45f400.getAncestorScale(),
      _0x4e3beb = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!_0x4e3beb || !this._moveStartRange || !this._moveStartCellIndex)
      return;
    let { row: _0xe359a8, column: _0x2a4440 } = _0x4e3beb.getCellIndexByOffset(
      _0x4c603c,
      _0x397919,
      _0x32f426,
      _0x4c575b,
      _0x421b61,
    );
    if (this._moveRowOrCol === "row") {
      var _0x394f7d;
      let _0x284b9e = 0,
        _0x1128bc = 0,
        _0x43235f =
          this._moveStartRange["endColumn"] -
          this._moveStartRange["startColumn"] +
          1;
      if (
        this._moveStartCellIndex["column"] ===
        this._moveStartRange["startColumn"]
      )
        ((_0x284b9e = _0x2a4440), (_0x1128bc = _0x2a4440 + _0x43235f - 1));
      else {
        if (
          this._moveStartCellIndex["column"] ===
          this._moveStartRange["endColumn"]
        )
          ((_0x1128bc = _0x2a4440), (_0x284b9e = _0x2a4440 - _0x43235f + 1));
        else {
          let _0x2a5c07 =
            this._moveStartCellIndex["column"] -
            this._moveStartRange["startColumn"];
          ((_0x284b9e = _0x2a4440 - _0x2a5c07),
            (_0x1128bc = _0x2a4440 - _0x2a5c07 + _0x43235f - 1));
        }
      }
      let _0x558bbe = _0x4e3beb.getCellWithCoordByIndex(_0xe359a8, _0x284b9e),
        _0xd01a1a = _0x4e3beb.getCellWithCoordByIndex(_0xe359a8, _0x1128bc),
        { startX: _0x1a58e7, endY: _0x102fa0 } = _0x558bbe,
        { endX: _0x475ce9 } = _0xd01a1a;
      ((this._targetRange = {
        startRow: _0xe359a8,
        endRow: _0xe359a8,
        startColumn: _0x284b9e,
        endColumn: _0x1128bc,
      }),
        (_0x394f7d = this._pivotSelectionMoveShape) == null ||
          _0x394f7d.transformByState({
            left: _0x1a58e7,
            top: _0x102fa0,
            width: _0x475ce9 - _0x1a58e7,
            height: 20,
          }));
    } else {
      var _0x1f6465;
      let _0x44ed48 = 0,
        _0x4daf11 = 0,
        _0x585dd3 =
          this._moveStartRange["endRow"] - this._moveStartRange["startRow"] + 1;
      if (this._moveStartCellIndex["row"] === this._moveStartRange["startRow"])
        ((_0x44ed48 = _0xe359a8), (_0x4daf11 = _0xe359a8 + _0x585dd3 - 1));
      else {
        if (this._moveStartCellIndex["row"] === this._moveStartRange["endRow"])
          ((_0x4daf11 = _0xe359a8), (_0x44ed48 = _0xe359a8 - _0x585dd3 + 1));
        else {
          let _0x5c8fcd =
            this._moveStartCellIndex["row"] - this._moveStartRange["startRow"];
          ((_0x44ed48 = _0xe359a8 - _0x5c8fcd),
            (_0x4daf11 = _0xe359a8 - _0x5c8fcd + _0x585dd3 - 1));
        }
      }
      let _0x4ea026 = _0x4e3beb.getCellWithCoordByIndex(_0x44ed48, _0x2a4440),
        _0x43ec77 = _0x4e3beb.getCellWithCoordByIndex(_0x4daf11, _0x2a4440),
        { startX: _0x381842, startY: _0x4fe580 } = _0x4ea026,
        { endY: _0x2255a0 } = _0x43ec77;
      ((this._targetRange = {
        startColumn: _0x2a4440,
        endColumn: _0x2a4440,
        startRow: _0x44ed48,
        endRow: _0x4daf11,
      }),
        (_0x1f6465 = this._pivotSelectionMoveShape) == null ||
          _0x1f6465.transformByState({
            left: _0x381842,
            top: _0x4fe580,
            width: 20,
            height: _0x2255a0 - _0x4fe580,
          }));
    }
  }
  _controlPointerDownHandler(_0x2dad5a) {
    var _0x312a3d, _0x718c90, _0xfe1388;
    ((_0x312a3d = this._selectionControl) == null ||
      _0x312a3d.setControlExtensionDisable(false),
      this._context["scene"].setCursor(p.CURSOR_TYPE["DEFAULT"]));
    let _0x197583 = this._sheetsSelectionsService["getCurrentSelections"]();
    if (!_0x197583.length || _0x197583.length > 1) return;
    let _0x5aecc9 = _0x197583[0].range,
      _0x3915cf = this._context["unit"],
      _0x5968c4 = _0x3915cf.getActiveSheet(),
      _0x273814 = _0x3915cf.getUnitId(),
      _0x4a725e = _0x5968c4.getSheetId(),
      _0x442a17 = this._sheetsPivotTableAdaptorModel[
        "getSubUnitPivotRenderCache"
      ](_0x273814, _0x4a725e);
    if (!(_0x442a17 != null && _0x442a17.size)) return;
    let _0x5c2217 = Array.from(_0x442a17).find(([_0x472661, _0x1bc45b]) => {
      let { rangesInfo: _0x2d0cc8 } = _0x1bc45b;
      if (!_0x2d0cc8) return false;
      let { rowRanges: _0x47daba, colRanges: _0x5c965d } = _0x2d0cc8,
        _0x1ba355 = _0x47daba[0],
        _0x3f0515 = _0x5c965d[0],
        _0x164fdf = false;
      return (
        _0x1ba355 &&
          ((_0x164fdf = n.Rectangle["realContain"](_0x1ba355, _0x5aecc9)),
          (this._moveRowOrCol = "row")),
        !_0x164fdf &&
          _0x3f0515 &&
          ((_0x164fdf = n.Rectangle["realContain"](_0x3f0515, _0x5aecc9)),
          (this._moveRowOrCol = "col")),
        _0x164fdf
      );
    });
    if (!_0x5c2217) return;
    ((this._movePivotId = _0x5c2217[0]),
      this._pivotSelectionMoveShape ||
        ((this._pivotSelectionMoveShape = new _n(this._moveRowOrCol)),
        this._context["scene"].addObject(this._pivotSelectionMoveShape)));
    let _0xaa0f2a = this._context["scene"],
      _0x5f2311 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!_0x5f2311) return;
    let { offsetX: _0x458e31, offsetY: _0x2c05cb } = _0x2dad5a,
      _0x2f0999 = _0xaa0f2a.getCoordRelativeToViewport(
        p.Vector2["FromArray"]([_0x458e31, _0x2c05cb]),
      ),
      { x: _0x1e7152, y: _0x55ae6e } = _0x2f0999,
      _0x4a73d3 = _0xaa0f2a.getScrollXYInfoByViewport(_0x2f0999),
      { scaleX: _0x41fd73, scaleY: _0x518b9a } = _0xaa0f2a.getAncestorScale(),
      { row: _0x2932d9, column: _0x1a47f8 } = _0x5f2311.getCellIndexByOffset(
        _0x1e7152,
        _0x55ae6e,
        _0x41fd73,
        _0x518b9a,
        _0x4a73d3,
      ),
      _0x32c8c1 =
        (_0x718c90 = this._selectionControl) == null
          ? undefined
          : _0x718c90.model["getRange"]();
    if (((this._moveStartRange = _0x32c8c1), !_0x32c8c1)) return;
    let _0x37e0d5 = 0;
    _0x37e0d5 =
      _0x2932d9 < _0x32c8c1.startRow
        ? _0x32c8c1.startRow
        : _0x2932d9 > _0x32c8c1.endRow
          ? _0x32c8c1.endRow
          : _0x2932d9;
    let _0x2802c9 = 0;
    ((_0x2802c9 =
      _0x1a47f8 < _0x32c8c1.startColumn
        ? _0x32c8c1.startColumn
        : _0x1a47f8 > _0x32c8c1.endColumn
          ? _0x32c8c1.endColumn
          : _0x1a47f8),
      (this._moveStartCellIndex = { row: _0x37e0d5, column: _0x2802c9 }),
      (_0xfe1388 = this._selectionControl) == null ||
        _0xfe1388.setControlExtensionDisable(true),
      (this._scenePointerMoveSubscribe = _0xaa0f2a.onPointerMove$[
        "subscribeEvent"
      ]((_0x546d45) => {
        let { offsetX: _0x1381fe, offsetY: _0xe5b7ac } = _0x546d45,
          { x: _0x3a2b45, y: _0x260aee } = _0xaa0f2a.getCoordRelativeToViewport(
            p.Vector2["FromArray"]([_0x1381fe, _0xe5b7ac]),
          );
        (this._controlMoving(_0x3a2b45, _0x260aee),
          _0xaa0f2a.setCursor(p.CURSOR_TYPE["MOVE"]));
      })),
      (this._scenePointerUpSubscribe = _0xaa0f2a.onPointerUp$["subscribeEvent"](
        (_0xdebedc) => {
          var _0x5452fe, _0xd80cdf, _0x100272;
          ((_0x5452fe = this._scenePointerMoveSubscribe) == null ||
            _0x5452fe.unsubscribe(),
            (this._scenePointerMoveSubscribe = null),
            (_0xd80cdf = this._selectionControl) == null ||
              _0xd80cdf.setControlExtensionDisable(false),
            (this._selectionControl = null),
            _0xaa0f2a.setCursor(p.CURSOR_TYPE["DEFAULT"]),
            _0xaa0f2a.removeObject(this._pivotSelectionMoveShape),
            (this._pivotSelectionMoveShape = null),
            this._updatePivotSort(),
            (_0x100272 = this._scenePointerUpSubscribe) == null ||
              _0x100272.unsubscribe(),
            (this._scenePointerUpSubscribe = null));
        },
      )));
  }
  _updatePivotSort() {
    if (!this._moveStartRange || !this._targetRange || !this._movePivotId)
      return;
    let _0x2ece91 = this._context["unit"].getUnitId(),
      _0x589656 = this._context["unit"].getActiveSheet().getSheetId();
    if (this._moveRowOrCol === "row") {
      var _0x2206bc;
      let _0x1bfcb7 =
        (_0x2206bc = this._sheetsPivotTableAdaptorModel[
          "getSubUnitPivotRenderCache"
        ](_0x2ece91, _0x589656)) == null
          ? undefined
          : _0x2206bc.get(this._movePivotId);
      if (!_0x1bfcb7) return;
      let _0xc0e5d1 = this._sheetsPivotTableAdaptorModel[
        "getSubUnitPivotMatrix"
      ](_0x2ece91, _0x589656);
      if (!_0xc0e5d1) return;
      let _0x2599fd = [],
        _0x562803 = "",
        { headerMap: _0x23f14b, rangesInfo: _0x1239c5 } = _0x1bfcb7;
      for (
        let _0x18b9de = this._moveStartRange["startColumn"];
        _0x18b9de <= this._moveStartRange["endColumn"];
        _0x18b9de++
      ) {
        var _0x118b96;
        let _0x265392 =
          _0x23f14b == null || (_0x118b96 = _0x23f14b.rowHeaderMap) == null
            ? undefined
            : _0x118b96[_0x18b9de];
        if (!_0x265392) continue;
        _0x562803 = _0x265392.tableFieldId;
        let _0x260398 = _0x1239c5 == null ? undefined : _0x1239c5.rowRanges,
          _0x19250f = _0x260398 == null ? undefined : _0x260398[0];
        if (!_0x19250f) continue;
        let _0x419810 = {
          ..._0x19250f,
          startColumn: _0x18b9de,
          endColumn: _0x18b9de,
        };
        for (
          let _0x1c36d6 = _0x419810.startRow;
          _0x1c36d6 <= _0x419810.endRow;
          _0x1c36d6++
        ) {
          let _0x2dc5bb = _0xc0e5d1.getValue(_0x1c36d6, _0x18b9de);
          if (!_0x2dc5bb) continue;
          let { v: _0x3af390, pbt: _0x871339 } = _0x2dc5bb;
          _0x3af390 &&
            _0x871339 !== l.PivotCellStyleTypeEnum["Subtotal"] &&
            _0x871339 !== l.PivotCellStyleTypeEnum["GrandTotal"] &&
            (typeof _0x3af390 == "string"
              ? (_0x2599fd[_0x1c36d6] = _0x3af390)
              : typeof _0x3af390 == "number" &&
                (_0x2599fd[_0x1c36d6] = _0x3af390.toString()));
        }
        break;
      }
      if (!_0x562803) return;
      let _0x47dfb1 = this._moveStartRange["startRow"],
        _0x45dd9e =
          this._moveStartRange["endRow"] - this._moveStartRange["startRow"] + 1,
        _0x503da8 = this._targetRange["startRow"];
      if (_0x47dfb1 < _0x503da8) {
        let _0x2515ac = _0x2599fd.splice(_0x47dfb1, _0x45dd9e);
        _0x2599fd.splice(_0x503da8 - _0x45dd9e, 0, ..._0x2515ac);
      } else {
        let _0x20bdc1 = _0x2599fd.splice(_0x47dfb1, _0x45dd9e);
        _0x2599fd.splice(_0x503da8, 0, ..._0x20bdc1);
      }
      let _0x426c81 = _0x2599fd.filter((_0x44f45f) => _0x44f45f !== undefined);
      this._commandService["executeCommand"](t.SetPivotSortCommand["id"], {
        unitId: _0x2ece91,
        subUnitId: _0x589656,
        pivotTableId: this._movePivotId,
        tableFieldId: _0x562803,
        info: {
          type: l.PivotDataFieldSortOperatorEnum["custom"],
          customOrder: _0x426c81,
        },
      });
    } else {
      var _0x3e88af;
      let _0x4d92c =
        (_0x3e88af = this._sheetsPivotTableAdaptorModel[
          "getSubUnitPivotRenderCache"
        ](_0x2ece91, _0x589656)) == null
          ? undefined
          : _0x3e88af.get(this._movePivotId);
      if (!_0x4d92c) return;
      let _0x471f88 = this._sheetsPivotTableAdaptorModel[
        "getSubUnitPivotMatrix"
      ](_0x2ece91, _0x589656);
      if (!_0x471f88) return;
      let _0x381180 = [],
        _0x572c15 = "",
        { headerMap: _0x42d4e6, rangesInfo: _0x2599f9 } = _0x4d92c;
      for (
        let _0x421ed4 = this._moveStartRange["startRow"];
        _0x421ed4 <= this._moveStartRange["endRow"];
        _0x421ed4++
      ) {
        var _0x503569;
        let _0x33d703 =
          _0x42d4e6 == null || (_0x503569 = _0x42d4e6.colHeaderMap) == null
            ? undefined
            : _0x503569[_0x421ed4];
        if (!_0x33d703) continue;
        _0x572c15 = _0x33d703.tableFieldId;
        let _0x27fd87 = _0x2599f9 == null ? undefined : _0x2599f9.colRanges,
          _0x271cca = _0x27fd87 == null ? undefined : _0x27fd87[0];
        if (!_0x271cca) continue;
        let _0x530fd2 = {
          ..._0x271cca,
          startRow: _0x421ed4,
          endRow: _0x421ed4,
        };
        for (
          let _0x563200 = _0x530fd2.startColumn;
          _0x563200 <= _0x530fd2.endColumn;
          _0x563200++
        ) {
          let _0x59188d = _0x471f88.getValue(_0x421ed4, _0x563200);
          if (!_0x59188d) continue;
          let { v: _0x2b11c6, pbt: _0x5d690d } = _0x59188d;
          if (
            _0x2b11c6 &&
            _0x5d690d !== l.PivotCellStyleTypeEnum["Subtotal"] &&
            _0x5d690d !== l.PivotCellStyleTypeEnum["GrandTotal"]
          ) {
            if (typeof _0x2b11c6 == "string") {
              let _0x251a52 = _0x4d92c.projection
                ? (0, t.mapPivotSheetColumn)(_0x4d92c.projection, _0x563200)
                : _0x563200;
              _0x381180[_0x251a52] = _0x2b11c6;
            } else {
              if (typeof _0x2b11c6 == "number") {
                let _0x3b572d = _0x4d92c.projection
                  ? (0, t.mapPivotSheetColumn)(_0x4d92c.projection, _0x563200)
                  : _0x563200;
                _0x381180[_0x3b572d] = _0x2b11c6.toString();
              }
            }
          }
        }
        break;
      }
      if (!_0x572c15) return;
      let _0x4b8877 = _0x4d92c.projection
          ? (0, t.mapPivotSheetRange)(_0x4d92c.projection, this._moveStartRange)
          : this._moveStartRange,
        _0x120dcd = _0x4d92c.projection
          ? (0, t.mapPivotSheetRange)(_0x4d92c.projection, this._targetRange)
          : this._targetRange,
        _0x10e008 = _0x4b8877.startColumn,
        _0x28eaab =
          this._moveStartRange["endColumn"] -
          this._moveStartRange["startColumn"] +
          1,
        _0x3689ba = _0x120dcd.startColumn;
      if (_0x10e008 < _0x3689ba) {
        let _0x4dbb99 = _0x381180.splice(_0x10e008, _0x28eaab);
        _0x381180.splice(_0x3689ba - _0x28eaab, 0, ..._0x4dbb99);
      } else {
        let _0x46b285 = _0x381180.splice(_0x10e008, _0x28eaab);
        _0x381180.splice(_0x3689ba, 0, ..._0x46b285);
      }
      let _0x2a3ec3 = _0x381180.filter((_0x498f73) => _0x498f73 !== undefined);
      this._commandService["executeCommand"](t.SetPivotSortCommand["id"], {
        unitId: _0x2ece91,
        subUnitId: _0x589656,
        pivotTableId: this._movePivotId,
        tableFieldId: _0x572c15,
        info: {
          type: l.PivotDataFieldSortOperatorEnum["custom"],
          customOrder: _0x2a3ec3,
        },
      });
    }
  }
  _initControl() {
    this.disposeWithMe(
      this._sheetsSelectionsService["selectionMoveEnd$"].subscribe(() => {
        let _0x4c8cef = this._selectionRenderService["getSelectionControls"]();
        if (
          ((this._selectionControl = _0x4c8cef[_0x4c8cef.length - 1]),
          this._selectionControl &&
            this._selectionControl["setControlExtensionDisable"](false),
          !this._selectionControl)
        )
          return;
        let {
          leftControl: _0x334eff,
          rightControl: _0x4531a4,
          topControl: _0x35602a,
          bottomControl: _0x1a84f4,
        } = this._selectionControl;
        [_0x334eff, _0x4531a4, _0x35602a, _0x1a84f4].forEach((_0x3dad2d) => {
          _0x3dad2d.onPointerDown$["subscribeEvent"](
            this._controlPointerDownHandler["bind"](this),
          );
        });
      }),
    );
  }
  dispose() {
    var _0x583058, _0x4dbb18;
    ((_0x583058 = this._scenePointerMoveSubscribe) == null ||
      _0x583058.unsubscribe(),
      (this._scenePointerMoveSubscribe = null),
      (_0x4dbb18 = this._scenePointerUpSubscribe) == null ||
        _0x4dbb18.unsubscribe(),
      (this._scenePointerUpSubscribe = null),
      (this._selectionControl = null),
      (this._moveStartRange = null),
      (this._moveStartCellIndex = null),
      (this._targetRange = null),
      super.dispose());
  }
};
vn = P(
  [
    N(1, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)),
    N(2, (0, n.Inject)(d.SheetSkeletonManagerService)),
    N(3, (0, n.Inject)(n.ICommandService)),
    N(4, d.ISheetSelectionRenderService),
    N(5, (0, n.Inject)(r.SheetsSelectionsService)),
  ],
  vn,
);
let yn = class extends n.Disposable {
  constructor(_0xdf1e1f, _0x35225d, _0x4cdcb8) {
    (super(),
      (this._mergeCellController = _0xdf1e1f),
      (this._univerInstanceService = _0x35225d),
      (this._sheetsPivotTableConfigModel = _0x4cdcb8),
      this._initMenuInterceptor());
  }
  _initMenuInterceptor() {
    this.disposeWithMe(
      this._mergeCellController["interceptor"].intercept(
        this._mergeCellController["interceptor"].getInterceptPoints()
          .MERGE_CELL_INTERCEPTOR_CHECK,
        {
          handler: (_0x3b10cd, _0x11f816) => {
            let _0x48d02c = (0, r.getSheetCommandTarget)(
              this._univerInstanceService,
            );
            if (!_0x48d02c) return _0x3b10cd;
            let { unitId: _0x21b04a, subUnitId: _0x1af9e2 } = _0x48d02c,
              _0x551457 = this._sheetsPivotTableConfigModel[
                "getSubUnitPivotConfigs"
              ](_0x21b04a, _0x1af9e2),
              _0x32e242 = [];
            return (
              _0x551457 &&
                _0x551457.forEach((_0x2669c1, _0x2438ab) => {
                  var _0x345be8;
                  let _0x6218dd =
                    (_0x345be8 = this._sheetsPivotTableConfigModel[
                      "getPivotTableRangeInfo"
                    ](_0x21b04a, _0x1af9e2, _0x2438ab)) == null
                      ? undefined
                      : _0x345be8.rangeInfo;
                  _0x6218dd &&
                    Object.keys(_0x6218dd).forEach((_0x49fa4b) => {
                      let _0x22b105 = _0x6218dd[_0x49fa4b];
                      Array.isArray(_0x22b105) && _0x32e242.push(..._0x22b105);
                    });
                }),
              _0x32e242.length &&
              _0x11f816.some((_0x49de21) =>
                _0x32e242.some((_0x294b39) =>
                  n.Rectangle["intersects"](_0x294b39, _0x49de21),
                ),
              )
                ? true
                : _0x3b10cd
            );
          },
        },
      ),
    );
  }
};
yn = P(
  [
    N(0, (0, n.Inject)(r.MergeCellController)),
    N(1, (0, n.Inject)(n.IUniverInstanceService)),
    N(2, (0, n.Inject)(t.SheetsPivotTableConfigModel)),
  ],
  yn,
);
let $ = class extends n.Plugin {
  constructor(_0x5cc25b = ft, _0x57b79f, _0xec7706, _0x13d9fe, _0x1b80ff) {
    (super(),
      (this._config = _0x5cc25b),
      (this._injector = _0x57b79f),
      (this._commandService = _0xec7706),
      (this._renderManagerService = _0x13d9fe),
      (this._configService = _0x1b80ff));
    let { menu: _0x5a3c1b, ..._0x4c20db } = (0, n.merge)({}, ft, this._config);
    (_0x5a3c1b &&
      this._configService["setConfig"]("menu", _0x5a3c1b, { merge: true }),
      this._configService["setConfig"]("sheets-pivot-ui.config", _0x4c20db),
      this._initRegisterCommand());
  }
  onStarting() {
    (this._injector["add"]([X]),
      this._injector["get"](X),
      [[rn], [yn], [en], [F], [on], [nn], [an], [Z], [Qt]].forEach(
        (_0x5678d6) => this._injector["add"](_0x5678d6),
      ),
      this._injector["get"](Z));
  }
  onReady() {
    (this._registerRenderModules(), this._injector["get"](rn));
  }
  onRendered() {
    (this._injector["get"](en),
      this._injector["get"](F),
      this._injector["get"](on),
      this._injector["get"](nn),
      this._injector["get"](an),
      this._injector["get"](Qt));
  }
  onSteady() {
    this._injector["get"](yn);
  }
  _registerRenderModules() {
    [[gn], [vn]].forEach((_0x1f577c) => {
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          n.UniverInstanceType["UNIVER_SHEET"],
          _0x1f577c,
        ),
      );
    });
  }
  _initRegisterCommand() {
    [O, K, I, L, Ae, Ne, Ve].forEach((_0x1ae45c) =>
      this._commandService["registerCommand"](_0x1ae45c),
    );
  }
};
(M($, "pluginName", t.SHEET_PIVOT_TABLE_PLUGIN + "_UI_PLUGIN"),
  M($, "packageName", ut),
  M($, "version", dt),
  M($, "type", n.UniverInstanceType["UNIVER_SHEET"]),
  ($ = P(
    [
      (0, n.DependentOn)(
        f.UniverLicensePlugin,
        p.UniverRenderEnginePlugin,
        r.UniverSheetsPlugin,
        t.UniverSheetsPivotTablePlugin,
        d.UniverSheetsUIPlugin,
      ),
      N(1, (0, n.Inject)(n.Injector)),
      N(2, (0, n.Inject)(n.ICommandService)),
      N(3, p.IRenderManagerService),
      N(4, n.IConfigService),
    ],
    $,
  )),
  (exports.SheetsPivotTableUIMenuSchema = lt),
  Object.defineProperty(exports, "UniverSheetsPivotTableUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
