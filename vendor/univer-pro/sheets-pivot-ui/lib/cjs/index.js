Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
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
function D(var_core_value_sigFEA0, var_core_value_sig931A, var_core_value_sigEE7D) {
  let var_core_value_sig3585 = var_core_value_sigEE7D.fieldIds,
    {
      fieldsConfig: var_core_value_sig31A8
    } = var_core_value_sig931A,
    {
      rowFields: var_core_value_sigA4DA,
      columnFields: var_core_value_sig6FC0,
      valueFields: var_core_value_sig6217,
      filterFields: var_core_value_sigB805,
      hiddenFields: var_core_value_sig4FAE,
      dimension: var_core_value_sig1FCC,
      measure: var_core_value_sigB7F9,
      valueIndex: var_core_value_sigB1A2,
      valuePosition: var_core_value_sig526D
    } = var_core_value_sig31A8,
    var_core_value_sigBDB5 = new Set();
  [...var_core_value_sigA4DA, ...var_core_value_sig6FC0, ...var_core_value_sig6217, ...var_core_value_sigB805, ...var_core_value_sig4FAE].forEach(var_core_value_sig7BAF => {
    let var_core_value_sig8F69 = var_core_value_sig1FCC[var_core_value_sig7BAF] || var_core_value_sigB7F9[var_core_value_sig7BAF];
    var_core_value_sig8F69 && var_core_value_sigBDB5.add(var_core_value_sig8F69.dataFieldId);
  });
  let var_core_value_sig59CE = var_core_value_sig3585.map(var_core_value_sig6884 => {
      let var_core_value_sig066E = var_core_value_sigEE7D.fields[var_core_value_sig6884];
      return {
        checked: var_core_value_sigBDB5.has(var_core_value_sig6884),
        dataFieldId: var_core_value_sig066E.id,
        id: var_core_value_sig066E.id,
        name: var_core_value_sig066E.name,
        type: var_core_value_sig066E.fieldDataType,
        pivotTableId: var_core_value_sigFEA0
      };
    }),
    var_core_value_sig3AD7 = var_core_value_sigA4DA.flatMap(var_core_value_sig9B0D => {
      let var_core_value_sig3D2C = var_core_value_sig1FCC[var_core_value_sig9B0D];
      return var_core_value_sig3D2C ? [{
        dataFieldId: var_core_value_sig3D2C.dataFieldId,
        tableFieldId: var_core_value_sig3D2C.id,
        displayName: var_core_value_sig3D2C.displayName
      }] : [];
    }),
    var_core_value_sig04E4 = var_core_value_sig6FC0.flatMap(var_core_value_sigC56D => {
      let var_core_value_sig3A17 = var_core_value_sig1FCC[var_core_value_sigC56D];
      return var_core_value_sig3A17 ? [{
        dataFieldId: var_core_value_sig3A17.dataFieldId,
        tableFieldId: var_core_value_sig3A17.id,
        displayName: var_core_value_sig3A17.displayName
      }] : [];
    }),
    var_core_value_sigD8F0 = var_core_value_sig6217.flatMap(var_core_value_sig938F => {
      let var_core_value_sigD948 = var_core_value_sigB7F9[var_core_value_sig938F];
      return var_core_value_sigD948 ? [{
        dataFieldId: var_core_value_sigD948.dataFieldId,
        tableFieldId: var_core_value_sigD948.id,
        displayName: var_core_value_sigD948.displayName,
        format: var_core_value_sigD948.format,
        subTotalType: var_core_value_sigD948.subtotal
      }] : [];
    }),
    var_core_value_sig1475 = var_core_value_sigB805.flatMap(var_core_value_sigBE5E => {
      let var_core_value_sig0281 = var_core_value_sig1FCC[var_core_value_sigBE5E];
      return var_core_value_sig0281 ? [{
        dataFieldId: var_core_value_sig0281.dataFieldId,
        tableFieldId: var_core_value_sig0281.id,
        displayName: var_core_value_sig0281.displayName
      }] : [];
    });
  return var_core_value_sigD8F0.length > 1 && (var_core_value_sig526D === l.PivotTableValuePositionEnum["Row"] ? var_core_value_sig3AD7 : var_core_value_sig04E4).splice(var_core_value_sigB1A2, 0, {
    dataFieldId: "",
    tableFieldId: "PivotMultipleValueId",
    displayName: "ΣValue"
  }), {
    sourceList: var_core_value_sig59CE,
    sourceRange: var_core_value_sig931A.sourceRangeInfo,
    rowFields: var_core_value_sig3AD7,
    columnFields: var_core_value_sig04E4,
    valueFields: var_core_value_sigD8F0,
    filterFields: var_core_value_sig1475,
    positionInfo: var_core_value_sig931A.targetCellInfo
  };
}
const O = {
  type: n.CommandType["OPERATION"],
  id: "sheet.operation.open-pivot-table-panel",
  async handler(var_core_value_sig08B7, var_core_value_sig2008) {
    let var_core_value_sig496B = var_core_value_sig2008 == null ? undefined : var_core_value_sig2008.pivotTableId;
    if (!var_core_value_sig496B) return false;
    let var_core_value_sig7161 = var_core_value_sig08B7.get(e.ISidebarService),
      var_core_value_sig2AB8 = var_core_value_sig08B7.get(n.IUniverInstanceService),
      var_core_value_sig3FCF = var_core_value_sig08B7.get(n.LocaleService),
      var_core_value_sig675A = var_core_value_sig08B7.get(t.SheetsPivotTableConfigModel),
      var_core_value_sig837F = (0, r.getSheetCommandTarget)(var_core_value_sig2AB8);
    if (!var_core_value_sig837F) return false;
    let {
        unitId: var_core_value_sig9D6E,
        subUnitId: var_core_value_sigB205
      } = var_core_value_sig837F,
      var_core_value_sigBF78 = var_core_value_sig675A.getPivotTableConfig(var_core_value_sig9D6E, var_core_value_sigB205, var_core_value_sig496B),
      var_core_value_sig8AF3 = var_core_value_sig675A.getCollection(var_core_value_sig9D6E, var_core_value_sig496B);
    if (!var_core_value_sigBF78 || !var_core_value_sig8AF3) return false;
    let var_core_value_sigA0CC = D(var_core_value_sig496B, var_core_value_sigBF78, var_core_value_sig8AF3),
      var_core_value_sigB3A1 = {
        header: {
          title: var_core_value_sig3FCF.t("sheets-pivot-ui.title")
        },
        id: v,
        children: {
          label: _,
          panelInfo: var_core_value_sigA0CC,
          version: Math.random(),
          setVersion: () => Math.random(),
          pivotTableId: var_core_value_sig496B,
          unitId: var_core_value_sig9D6E,
          subUnitId: var_core_value_sigB205
        },
        width: 346
      };
    return var_core_value_sig7161.open(var_core_value_sigB3A1), true;
  }
};
function k(var_core_value_sig1FB9) {
  "@babel/helpers - typeof";

  return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigED71) {
    return typeof var_core_value_sigED71;
  } : function (var_core_value_sig281C) {
    return var_core_value_sig281C && typeof Symbol == "function" && var_core_value_sig281C.constructor === Symbol && var_core_value_sig281C !== Symbol.prototype ? "symbol" : typeof var_core_value_sig281C;
  }, k(var_core_value_sig1FB9);
}
function A(var_core_value_sig53A9, var_core_value_sigDACD) {
  if (k(var_core_value_sig53A9) != "object" || !var_core_value_sig53A9) return var_core_value_sig53A9;
  var var_core_value_sig691E = var_core_value_sig53A9[Symbol.toPrimitive];
  if (var_core_value_sig691E !== undefined) {
    var var_core_value_sigD6D6 = var_core_value_sig691E.call(var_core_value_sig53A9, var_core_value_sigDACD || "default");
    if (k(var_core_value_sigD6D6) != "object") return var_core_value_sigD6D6;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigDACD === "string" ? String : Number)(var_core_value_sig53A9);
}
function j(var_core_value_sig0347) {
  var var_core_value_sig52A3 = A(var_core_value_sig0347, "string");
  return k(var_core_value_sig52A3) == "symbol" ? var_core_value_sig52A3 : var_core_value_sig52A3 + "";
}
function M(var_core_value_sigAD91, var_core_value_sigF64E, var_core_value_sig9B3D) {
  return (var_core_value_sigF64E = j(var_core_value_sigF64E)) in var_core_value_sigAD91 ? Object.defineProperty(var_core_value_sigAD91, var_core_value_sigF64E, {
    value: var_core_value_sig9B3D,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigAD91[var_core_value_sigF64E] = var_core_value_sig9B3D, var_core_value_sigAD91;
}
function N(var_core_value_sigB217, var_core_value_sig1FE6) {
  return function (var_core_value_sig3C92, var_core_value_sigB16B) {
    var_core_value_sig1FE6(var_core_value_sig3C92, var_core_value_sigB16B, var_core_value_sigB217);
  };
}
function P(var_core_value_sig2471, var_core_value_sigD1FC, var_core_value_sigE2F9, var_core_value_sigD689) {
  var var_core_value_sig7AE3 = arguments.length,
    var_core_value_sig1EB3 = var_core_value_sig7AE3 < 3 ? var_core_value_sigD1FC : var_core_value_sigD689 === null ? var_core_value_sigD689 = Object.getOwnPropertyDescriptor(var_core_value_sigD1FC, var_core_value_sigE2F9) : var_core_value_sigD689,
    var_core_value_sigE120;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig1EB3 = Reflect.decorate(var_core_value_sig2471, var_core_value_sigD1FC, var_core_value_sigE2F9, var_core_value_sigD689);else {
    for (var var_core_value_sigD6E7 = var_core_value_sig2471.length - 1; var_core_value_sigD6E7 >= 0; var_core_value_sigD6E7--) (var_core_value_sigE120 = var_core_value_sig2471[var_core_value_sigD6E7]) && (var_core_value_sig1EB3 = (var_core_value_sig7AE3 < 3 ? var_core_value_sigE120(var_core_value_sig1EB3) : var_core_value_sig7AE3 > 3 ? var_core_value_sigE120(var_core_value_sigD1FC, var_core_value_sigE2F9, var_core_value_sig1EB3) : var_core_value_sigE120(var_core_value_sigD1FC, var_core_value_sigE2F9)) || var_core_value_sig1EB3);
  }
  return var_core_value_sig7AE3 > 3 && var_core_value_sig1EB3 && Object.defineProperty(var_core_value_sigD1FC, var_core_value_sigE2F9, var_core_value_sig1EB3), var_core_value_sig1EB3;
}
let F = class extends n.Disposable {
  constructor(var_core_value_sig585D, var_core_value_sigE722, var_core_value_sig062A, var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683, var_core_value_sig26EC) {
    super(), this._sheetsSelectionsService = var_core_value_sig585D, this._univerInstanceService = var_core_value_sigE722, this._sheetsPivotTableAdaptorModel = var_core_value_sig062A, this._commandService = var_core_value_sig050A, this._sidebarService = var_core_value_sig8B32, this._dialogService = var_core_value_sig870F, this._injector = var_core_value_sigB683, this._permissionService = var_core_value_sig26EC, M(this, "_pivotTableId", undefined), M(this, "_pivotTablePanelVisible$", new c.Subject()), M(this, "pivotTablePanelVisible$", this._pivotTablePanelVisible$["asObservable"]()), M(this, "_isRangeSelectorFocus", false), M(this, "_isRangeSelector2Focus", false), this._initPanelOpen(), this._initSheetChange();
  }
  setIsRangeSelectorFocus(var_core_value_sigEEDB) {
    this._isRangeSelectorFocus = var_core_value_sigEEDB;
  }
  setIsRangeSelector2Focus(var_core_value_sig36E7) {
    this._isRangeSelector2Focus = var_core_value_sig36E7;
  }
  _setPivotTableId(var_core_value_sig6A78) {
    this._pivotTableId = var_core_value_sig6A78;
  }
  _closePivotPanel() {
    this._isRangeSelectorFocus || this._isRangeSelector2Focus || (this._setPivotTableId(undefined), this._sidebarService["close"](v));
  }
  _initPanelOpen() {
    let var_core_value_sigF7EF = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SHEET"]);
    if (var_core_value_sigF7EF) {
      let var_core_value_sigD4FB = var_core_value_sigF7EF.activeSheet$;
      this.disposeWithMe((0, c.merge)(var_core_value_sigD4FB, this._sheetsSelectionsService["selectionMoveEnd$"]).subscribe(() => {
        let var_core_value_sig877E = this._sheetsSelectionsService["getCurrentSelections"]();
        if (!var_core_value_sig877E) return;
        let var_core_value_sig20C8 = var_core_value_sig877E[var_core_value_sig877E.length - 1];
        if (!var_core_value_sig20C8) return;
        let var_core_value_sigE9A7 = var_core_value_sig20C8.primary;
        if (!var_core_value_sigE9A7) return;
        let var_core_value_sigBECE = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SHEET"]),
          var_core_value_sig1B22 = var_core_value_sigBECE == null ? undefined : var_core_value_sigBECE.getActiveSheet();
        if (!var_core_value_sigBECE || !var_core_value_sig1B22) return;
        let var_core_value_sig7F72 = var_core_value_sigBECE.getUnitId(),
          var_core_value_sig7B2A = var_core_value_sig1B22.getSheetId(),
          var_core_value_sig06CD = this._sheetsPivotTableAdaptorModel["getPivotTableIdByCell"](var_core_value_sig7F72, var_core_value_sig7B2A, var_core_value_sigE9A7.startRow, var_core_value_sigE9A7.startColumn);
        if (var_core_value_sig06CD) {
          var var_core_value_sigA5F1, var_core_value_sig97A2;
          let var_core_value_sig2259 = (0, t.unionPivotViewRange)((var_core_value_sigA5F1 = this._sheetsPivotTableAdaptorModel["getPivotItemRenderInfoCache"](var_core_value_sig7F72, var_core_value_sig7B2A, var_core_value_sig06CD)) == null ? undefined : var_core_value_sigA5F1.rangesInfo),
            var_core_value_sig9E2F = (0, r.checkRangesEditablePermission)(this._injector, var_core_value_sig7F72, var_core_value_sig7B2A, var_core_value_sig2259),
            var_core_value_sigD082 = (var_core_value_sig97A2 = this._permissionService["getPermissionPoint"](new r["WorksheetPivotTablePermission"](var_core_value_sig7F72, var_core_value_sig7B2A).id)) == null ? undefined : var_core_value_sig97A2.value;
          if (!var_core_value_sig9E2F || !var_core_value_sigD082) return;
          this._setPivotTableId(var_core_value_sig06CD), this._pivotTablePanelVisible$["next"](true), this._commandService["executeCommand"](O.id, {
            pivotTableId: var_core_value_sig06CD
          });
        } else this._closePivotPanel();
      })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig07E9 => {
        var_core_value_sig07E9.id === t.RemovePivotTableMutation["id"] && var_core_value_sig07E9.params["pivotTableId"] === this._pivotTableId && this._sidebarService["close"](v);
      }));
    }
  }
  _initSheetChange() {
    let var_core_value_sig27F9 = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SHEET"]);
    var_core_value_sig27F9 && this.disposeWithMe(var_core_value_sig27F9.sheetDisposed$["subscribe"](() => {
      this._sidebarService["close"]();
    })), this.disposeWithMe(this._sidebarService["sidebarOptions$"].subscribe(var_core_value_sig3E71 => {
      if (var_core_value_sig3E71.id === "UNIVER_SHEET_PIVOT_PANEL_ID") {
        let var_core_value_sig4F59 = !!var_core_value_sig3E71.visible;
        this._pivotTablePanelVisible$["next"](var_core_value_sig4F59), var_core_value_sig4F59 || this._dialogService["close"](S);
      }
    })), this.disposeWithMe(this._dialogService["getDialogs$"]().subscribe(var_core_value_sig01B3 => {
      let var_core_value_sig7442 = var_core_value_sig01B3.find(var_core_value_sigF564 => var_core_value_sigF564.id === G.componentKey);
      var_core_value_sig7442 && var_core_value_sig7442.open === false && this._dialogService["close"](G.componentKey);
    }));
  }
};
F = P([N(0, (0, n.Inject)(r.SheetsSelectionsService)), N(1, (0, n.Inject)(n.IUniverInstanceService)), N(2, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)), N(3, (0, n.Inject)(n.ICommandService)), N(4, (0, n.Inject)(e.ISidebarService)), N(5, (0, n.Inject)(e.IDialogService)), N(6, (0, n.Inject)(n.Injector)), N(7, (0, n.Inject)(n.IPermissionService))], F);
const I = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.open-pivot-table-filter-panel",
    async handler(var_core_value_sig3669, var_core_value_sig5CBC) {
      if (!var_core_value_sig5CBC) return false;
      let {
          row: var_core_value_sig20BE,
          col: var_core_value_sig6BD0,
          unitId: var_core_value_sig8C15,
          subUnitId: var_core_value_sig6DF7,
          tableFieldId: var_core_value_sigB411,
          pivotTableId: var_core_value_sigA81B
        } = var_core_value_sig5CBC,
        var_core_value_sigFE8D = var_core_value_sig3669.get(t.SheetsPivotTableAdaptorModel),
        var_core_value_sig8595 = var_core_value_sigA81B || var_core_value_sigFE8D.getPivotTableIdByCell(var_core_value_sig8C15, var_core_value_sig6DF7, var_core_value_sig20BE, var_core_value_sig6BD0);
      if (!var_core_value_sig8595) return false;
      let var_core_value_sigF8DE = var_core_value_sig3669.get(t.SheetsPivotRPCService),
        var_core_value_sigFE76 = var_core_value_sigFE8D.getPivotItemRenderInfoCache(var_core_value_sig8C15, var_core_value_sig6DF7, var_core_value_sig8595);
      if (!(var_core_value_sigFE76 != null && var_core_value_sigFE76.rangesInfo)) return false;
      let var_core_value_sig84C8 = var_core_value_sigFE8D.getPivotTableCellData(var_core_value_sig8C15, var_core_value_sig6DF7, var_core_value_sig20BE, var_core_value_sig6BD0),
        var_core_value_sig80C0 = (await var_core_value_sigF8DE.getPivotDisplayConfig({
          unitId: var_core_value_sig8C15,
          subUnitId: var_core_value_sig6DF7,
          pivotTableId: var_core_value_sig8595,
          params: {
            type: t.PivotDisplayDataType["Filter"],
            filter: {
              row: var_core_value_sig20BE,
              col: var_core_value_sig6BD0,
              tableFieldId: var_core_value_sigB411,
              cellData: var_core_value_sig84C8,
              pivotItemRenderInfoCache: var_core_value_sigFE76
            }
          }
        })).result["filter"];
      if (!var_core_value_sig80C0) return false;
      let var_core_value_sig22B4 = var_core_value_sig3669.get(e.IDialogService),
        var_core_value_sigBB37 = {
          id: b,
          draggable: true,
          mask: false,
          maskClosable: false,
          width: 336,
          dialogStyles: {
            header: {
              padding: "16px 16px 0",
              height: 0
            },
            body: {
              padding: "0 16px 16px"
            }
          },
          closable: false,
          children: {
            label: y,
            unitId: var_core_value_sig8C15,
            subUnitId: var_core_value_sig6DF7,
            key: var_core_value_sig20BE + "-" + var_core_value_sig6BD0 + "-" + (var_core_value_sigB411 || ""),
            filterItemInfo: var_core_value_sig80C0
          },
          onClose: () => {
            var_core_value_sig22B4.close(b);
          }
        };
      return var_core_value_sig22B4.open(var_core_value_sigBB37), true;
    }
  },
  L = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.open-pivot-table-field-setting-panel",
    handler(var_core_value_sig0C51, var_core_value_sigADA4) {
      if (!var_core_value_sigADA4) return false;
      let var_core_value_sig0E48 = var_core_value_sig0C51.get(n.LocaleService),
        {
          tableFieldId: var_core_value_sig495B,
          pivotTableId: var_core_value_sig310C,
          unitId: var_core_value_sig759E,
          subUnitId: var_core_value_sig6C80,
          tableFieldInfo: var_core_value_sig6B99,
          dataFieldInfo: var_core_value_sig6ADC
        } = var_core_value_sigADA4,
        var_core_value_sig41AD = var_core_value_sig0C51.get(e.IDialogService),
        var_core_value_sigDBC2 = {
          id: S,
          title: {
            title: var_core_value_sig0E48.t("sheets-pivot-ui.fieldSettings")
          },
          draggable: true,
          mask: false,
          maskClosable: false,
          width: 400,
          children: {
            label: x,
            tableFieldId: var_core_value_sig495B,
            pivotTableId: var_core_value_sig310C,
            tableFieldInfo: var_core_value_sig6B99,
            dataFieldInfo: var_core_value_sig6ADC,
            unitId: var_core_value_sig759E,
            subUnitId: var_core_value_sig6C80,
            version: Math.random(),
            key: "field-setting-" + (var_core_value_sig495B || ""),
            closeFn: () => {
              var_core_value_sig41AD.close(S);
            }
          },
          onClose: () => {
            var_core_value_sig41AD.close(S);
          }
        };
      return var_core_value_sig41AD.open(var_core_value_sigDBC2), true;
    }
  },
  R = [{
    label: "1930-08-05",
    suffix: "yyyy-MM-dd"
  }, {
    label: "1930/08/05",
    suffix: "yyyy/MM/dd"
  }, {
    label: "1930年08月05日",
    suffix: 'yyyy"年"MM"月"dd"日"'
  }, {
    label: "08-05",
    suffix: "MM-dd"
  }, {
    label: "8月5日",
    suffix: 'M"月"d"日"'
  }, {
    label: "13:30:30",
    suffix: "h:mm:ss"
  }, {
    label: "13:30",
    suffix: "h:mm"
  }, {
    label: "下午01:30",
    suffix: "A/P\x20hh:mm"
  }, {
    label: "下午1:30",
    suffix: "A/P h:mm"
  }, {
    label: "下午1:30:30",
    suffix: "A/P h:mm:ss"
  }, {
    label: "08-05 下午 01:30",
    suffix: "MM-dd A/P hh:mm"
  }],
  z = [{
    label: "(1,235)",
    suffix: "#,##0_);(#,##0)"
  }, {
    label: "(1,235) ",
    suffix: "#,##0_);[Red](#,##0)",
    color: "red"
  }, {
    label: "1,234.56",
    suffix: "#,##0.00_);#,##0.00"
  }, {
    label: "1,234.56",
    suffix: "#,##0.00_);[Red]#,##0.00",
    color: "red"
  }, {
    label: "-1,234.56",
    suffix: "#,##0.00_);-#,##0.00"
  }, {
    label: "-1,234.56",
    suffix: "#,##0.00_);[Red]-#,##0.00",
    color: "red"
  }],
  B = [{
    label: var_core_value_sig7739 => var_core_value_sig7739 + "1,235",
    suffix: var_core_value_sig4040 => "\x22" + var_core_value_sig4040 + "\x22#,##0.00_);\x22" + var_core_value_sig4040 + '"#,##0.00'
  }, {
    label: var_core_value_sig1AAA => var_core_value_sig1AAA + "1,235",
    suffix: var_core_value_sig58DB => "\x22" + var_core_value_sig58DB + '"#,##0.00_);[Red]"' + var_core_value_sig58DB + '"#,##0.00',
    color: "red"
  }, {
    label: var_core_value_sig4840 => "(" + var_core_value_sig4840 + "1,235)",
    suffix: var_core_value_sigB76D => "\x22" + var_core_value_sigB76D + "\x22#,##0.00_);(\x22" + var_core_value_sigB76D + '"#,##0.00)'
  }, {
    label: var_core_value_sig1015 => "(" + var_core_value_sig1015 + "1,235)",
    suffix: var_core_value_sig6223 => "\x22" + var_core_value_sig6223 + '"#,##0.00_);[Red]("' + var_core_value_sig6223 + '"#,##0.00)',
    color: "red"
  }, {
    label: var_core_value_sigC6B6 => "-" + var_core_value_sigC6B6 + "1,235",
    suffix: var_core_value_sig498A => "\x22" + var_core_value_sig498A + "\x22#,##0.00_);-\x22" + var_core_value_sig498A + "\x22#,##0.00"
  }, {
    label: var_core_value_sigEF45 => "-" + var_core_value_sigEF45 + "1,235",
    suffix: var_core_value_sig36FE => "\x22" + var_core_value_sig36FE + '"#,##0.00_);[Red]-"' + var_core_value_sig36FE + '"#,##0.00',
    color: "red"
  }],
  V = "PivotMultipleValueId";
function ee(var_core_value_sig3AF5, var_core_value_sig14E6) {
  let var_core_value_sig8690 = (0, t.isolateTextForBidiContext)(var_core_value_sig14E6, var_core_value_sig3AF5);
  return var_core_value_sig3AF5.includes("{0}") ? var_core_value_sig3AF5.replace("{0}", var_core_value_sig8690) : "" + var_core_value_sig3AF5 + var_core_value_sig8690;
}
const te = var_core_value_sigDF29 => {
  switch (var_core_value_sigDF29) {
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
function ne(var_core_value_sigC0F8, var_core_value_sig3C75) {
  switch (var_core_value_sig3C75.rangeType || n.RANGE_TYPE["NORMAL"]) {
    case n.RANGE_TYPE["NORMAL"]:
      return {
        startRow: var_core_value_sig3C75.startRow,
        startColumn: var_core_value_sig3C75.startColumn,
        endRow: var_core_value_sig3C75.endRow,
        endColumn: var_core_value_sig3C75.endColumn
      };
    case n.RANGE_TYPE["ROW"]:
      return {
        startRow: var_core_value_sig3C75.startRow,
        startColumn: 0,
        endRow: var_core_value_sig3C75.endRow,
        endColumn: var_core_value_sigC0F8.getColumnCount() - 1
      };
    case n.RANGE_TYPE["COLUMN"]:
      return {
        startRow: 0,
        startColumn: var_core_value_sig3C75.startColumn,
        endRow: var_core_value_sigC0F8.getRowCount() - 1,
        endColumn: var_core_value_sig3C75.endColumn
      };
    case n.RANGE_TYPE["ALL"]:
      return {
        startRow: 0,
        startColumn: 0,
        endRow: var_core_value_sigC0F8.getRowCount() - 1,
        endColumn: var_core_value_sigC0F8.getColumnCount() - 1
      };
  }
}
function re(var_core_value_sig992D, var_core_value_sigE4E4) {
  if (!var_core_value_sigE4E4 || !var_core_value_sig992D || var_core_value_sigE4E4.endRow - var_core_value_sigE4E4.startRow <= 0) return 1;
  let {
      startRow: var_core_value_sigA4B0,
      startColumn: var_core_value_sig5F50,
      endRow: var_core_value_sig4494,
      endColumn: var_core_value_sigFFAF
    } = ne(var_core_value_sig992D, var_core_value_sigE4E4),
    var_core_value_sig478B = var_core_value_sig992D.getCellMatrix(),
    var_core_value_sig1E21 = false;
  for (let var_core_value_sig393E = var_core_value_sigA4B0; var_core_value_sig393E <= var_core_value_sig4494; var_core_value_sig393E++) {
    for (let var_core_value_sig8CFA = var_core_value_sig5F50; var_core_value_sig8CFA <= var_core_value_sigFFAF; var_core_value_sig8CFA++) if (var_core_value_sig478B.getValue(var_core_value_sig393E, var_core_value_sig8CFA) != null) {
      var_core_value_sig1E21 = true;
      break;
    }
    if (var_core_value_sig1E21) break;
  }
  return var_core_value_sig1E21 ? 2 : 0;
}
async function ie(var_core_value_sig9DBF, var_core_value_sig36CC, var_core_value_sigA568) {
  let {
      commandService: var_core_value_sigD22D,
      pivotTableInfo: var_core_value_sig85D5,
      pivotTableId: var_core_value_sig5D2E,
      unitId: var_core_value_sig7221,
      subUnitId: var_core_value_sig0A5A
    } = var_core_value_sig9DBF,
    var_core_value_sigE6D6 = [],
    {
      rowFields: var_core_value_sig8507,
      columnFields: var_core_value_sig8A7F,
      filterFields: var_core_value_sig9E81,
      valueFields: var_core_value_sig8295
    } = var_core_value_sig85D5,
    var_core_value_sigA975 = [...var_core_value_sig8507, ...var_core_value_sig8A7F, ...var_core_value_sig9E81, ...var_core_value_sig8295];
  var_core_value_sig36CC === "PivotMultipleValueId" && var_core_value_sig8295.forEach(var_core_value_sigB609 => {
    var_core_value_sigE6D6.push(var_core_value_sigB609.tableFieldId);
  }), var_core_value_sigA568 === "source" && var_core_value_sigA975.forEach(var_core_value_sig390D => {
    var_core_value_sig390D.dataFieldId === var_core_value_sig36CC && var_core_value_sigE6D6.push(var_core_value_sig390D.tableFieldId);
  }), var_core_value_sigA568 !== "source" && var_core_value_sigA975.find(var_core_value_sigC928 => var_core_value_sigC928.tableFieldId === var_core_value_sig36CC) && var_core_value_sigE6D6.push(var_core_value_sig36CC), await var_core_value_sigD22D.executeCommand(t.RemovePivotFieldCommand["id"], {
    pivotTableId: var_core_value_sig5D2E,
    fieldIds: var_core_value_sigE6D6,
    unitId: var_core_value_sig7221,
    subUnitId: var_core_value_sig0A5A
  });
}
async function ae(var_core_value_sig1263, var_core_value_sig457C, var_core_value_sigA4E6, var_core_value_sig934F, var_core_value_sig74A7) {
  let var_core_value_sig3685 = {
    unitId: var_core_value_sig934F,
    subUnitId: var_core_value_sig74A7,
    token: var_core_value_sig457C,
    dataRangeInfo: var_core_value_sigA4E6
  };
  await var_core_value_sig1263.executeCommand(t.UpdatePivotTableSourceRangeCommand["id"], var_core_value_sig3685);
}
const oe = (var_core_value_sigC621, var_core_value_sig86D7) => {
  let {
      rowFields: var_core_value_sig431B,
      columnFields: var_core_value_sig5C7C,
      filterFields: var_core_value_sig87E2
    } = var_core_value_sigC621,
    var_core_value_sig2E04 = [...var_core_value_sig431B, ...var_core_value_sig5C7C, ...var_core_value_sig87E2],
    var_core_value_sig2EDD = [];
  return var_core_value_sig2E04.forEach(var_core_value_sig39B7 => {
    var_core_value_sig39B7.dataFieldId === var_core_value_sig86D7 && var_core_value_sig2EDD.push(var_core_value_sig39B7.tableFieldId);
  }), var_core_value_sig2EDD;
};
async function se(var_core_value_sig27D2, var_core_value_sig355D, var_core_value_sig8B21, var_core_value_sigEB36, var_core_value_sig5C27) {
  if (var_core_value_sig8B21 === "source" && var_core_value_sigEB36 === "source") return;
  let var_core_value_sigD494 = var_core_value_sig355D === V,
    {
      commandService: var_core_value_sigBF6D,
      pivotTableInfo: var_core_value_sigD051,
      pivotTableId: var_core_value_sig16D9,
      unitId: var_core_value_sigF378,
      subUnitId: var_core_value_sig5F6C
    } = var_core_value_sig27D2;
  if (var_core_value_sig8B21 === "source" && var_core_value_sigEB36 !== "source") {
    let {
        sourceList: var_core_value_sig18E0
      } = var_core_value_sigD051,
      var_core_value_sigE161 = var_core_value_sig18E0.find(var_core_value_sigDF87 => var_core_value_sigDF87.id === var_core_value_sig355D);
    if (var_core_value_sigE161) {
      let var_core_value_sig9EE0 = oe(var_core_value_sigD051, var_core_value_sig355D);
      if (var_core_value_sigEB36 !== "value" && var_core_value_sig9EE0.length > 0) {
        let var_core_value_sig2E11 = var_core_value_sig9EE0[0];
        await var_core_value_sigBF6D.executeCommand(t.MovePivotFieldCommand["id"], {
          pivotTableId: var_core_value_sig16D9,
          fieldId: var_core_value_sig2E11,
          area: te(var_core_value_sigEB36),
          index: var_core_value_sig5C27,
          unitId: var_core_value_sigF378,
          subUnitId: var_core_value_sig5F6C
        });
      } else await var_core_value_sigBF6D.executeCommand(t.AddPivotFieldCommand["id"], {
        pivotTableId: var_core_value_sig16D9,
        dataFieldId: var_core_value_sigE161.dataFieldId,
        fieldArea: te(var_core_value_sigEB36),
        index: var_core_value_sig5C27,
        unitId: var_core_value_sigF378,
        subUnitId: var_core_value_sig5F6C
      });
    }
  }
  if (var_core_value_sig8B21 !== "source" && var_core_value_sigEB36 === "source") {
    let {
        rowFields: var_core_value_sigBDEE,
        columnFields: var_core_value_sig1F40,
        filterFields: var_core_value_sig3FC7,
        valueFields: var_core_value_sig1E1B
      } = var_core_value_sigD051,
      var_core_value_sig3B10 = [...var_core_value_sigBDEE, ...var_core_value_sig1F40, ...var_core_value_sig3FC7, ...var_core_value_sig1E1B],
      var_core_value_sig89E6 = [];
    var_core_value_sigD494 ? var_core_value_sig1E1B.forEach(var_core_value_sigF051 => {
      var_core_value_sig89E6.push(var_core_value_sigF051.tableFieldId);
    }) : var_core_value_sig3B10.find(var_core_value_sig0B45 => var_core_value_sig0B45.tableFieldId === var_core_value_sig355D) && var_core_value_sig89E6.push(var_core_value_sig355D), await H(var_core_value_sig27D2, var_core_value_sig89E6);
    return;
  }
  var_core_value_sig8B21 !== "source" && var_core_value_sigEB36 !== "source" && (await le(var_core_value_sig27D2, var_core_value_sig355D, var_core_value_sig8B21, var_core_value_sigEB36, var_core_value_sig5C27));
}
async function H(var_core_value_sig7E85, var_core_value_sigF204) {
  let {
    commandService: var_core_value_sig7A15,
    pivotTableId: var_core_value_sigEEA6,
    unitId: var_core_value_sigEAE1,
    subUnitId: var_core_value_sigC69F
  } = var_core_value_sig7E85;
  await var_core_value_sig7A15.executeCommand(t.RemovePivotFieldCommand["id"], {
    pivotTableId: var_core_value_sigEEA6,
    fieldIds: var_core_value_sigF204,
    unitId: var_core_value_sigEAE1,
    subUnitId: var_core_value_sigC69F
  });
}
async function ce(var_core_value_sig0442, var_core_value_sig697A, var_core_value_sigDB65) {
  let {
    commandService: var_core_value_sig045E,
    pivotTableId: var_core_value_sig4524,
    unitId: var_core_value_sig64D5,
    subUnitId: var_core_value_sig9678
  } = var_core_value_sig0442;
  await var_core_value_sig045E.executeCommand(t.UpdatePivotValuePositionCommand["id"], {
    pivotTableId: var_core_value_sig4524,
    position: var_core_value_sig697A,
    index: var_core_value_sigDB65,
    unitId: var_core_value_sig64D5,
    subUnitId: var_core_value_sig9678
  });
}
async function le(var_core_value_sig5E74, var_core_value_sig75FC, var_core_value_sig639A, var_core_value_sig567C, var_core_value_sig825F) {
  let var_core_value_sig546D = var_core_value_sig75FC === V,
    {
      commandService: var_core_value_sig8078,
      pivotTableInfo: var_core_value_sigDCED,
      pivotTableId: var_core_value_sig2829,
      unitId: var_core_value_sig6EE2,
      subUnitId: var_core_value_sig4CCC
    } = var_core_value_sig5E74;
  if (var_core_value_sig546D) {
    let var_core_value_sig4743 = te(var_core_value_sig567C);
    (var_core_value_sig4743 === l.PivotTableFiledAreaEnum["Row"] || var_core_value_sig4743 === l.PivotTableFiledAreaEnum["Column"]) && (await var_core_value_sig8078.executeCommand(t.UpdatePivotValuePositionCommand["id"], {
      pivotTableId: var_core_value_sig2829,
      position: var_core_value_sig4743 === l.PivotTableFiledAreaEnum["Row"] ? l.PivotTableValuePositionEnum["Row"] : l.PivotTableValuePositionEnum["Column"],
      index: var_core_value_sig825F,
      unitId: var_core_value_sig6EE2,
      subUnitId: var_core_value_sig4CCC
    }));
    return;
  }
  let {
      rowFields: var_core_value_sig6E47,
      columnFields: var_core_value_sigB64D,
      filterFields: var_core_value_sig2407,
      valueFields: var_core_value_sigE4D0
    } = var_core_value_sigDCED,
    var_core_value_sigD5F1 = [...var_core_value_sig6E47, ...var_core_value_sigB64D, ...var_core_value_sig2407, ...var_core_value_sigE4D0].find(var_core_value_sigEB6A => var_core_value_sigEB6A.tableFieldId === var_core_value_sig75FC);
  if (var_core_value_sigD5F1) {
    let var_core_value_sig3D46 = [...var_core_value_sig6E47, ...var_core_value_sigB64D, ...var_core_value_sig2407];
    if (var_core_value_sig639A === "value" && var_core_value_sig567C !== "value" && var_core_value_sig3D46.find(var_core_value_sig36F8 => var_core_value_sig36F8.dataFieldId === var_core_value_sigD5F1.dataFieldId)) {
      await H(var_core_value_sig5E74, [var_core_value_sig75FC]);
      return;
    }
    await var_core_value_sig8078.executeCommand(t.MovePivotFieldCommand["id"], {
      pivotTableId: var_core_value_sig2829,
      fieldId: var_core_value_sig75FC,
      area: te(var_core_value_sig567C),
      index: var_core_value_sig825F,
      unitId: var_core_value_sig6EE2,
      subUnitId: var_core_value_sig4CCC
    });
  }
}
function ue(var_core_value_sigBC19, var_core_value_sig4F3C, var_core_value_sig8D44, var_core_value_sig1660, var_core_value_sigEE7B) {
  var_core_value_sigBC19.executeCommand(I.id, {
    row: -1,
    col: -1,
    unitId: var_core_value_sig4F3C,
    subUnitId: var_core_value_sig8D44,
    tableFieldId: var_core_value_sigEE7B,
    pivotTableId: var_core_value_sig1660
  });
}
function de(var_core_value_sig44DF, var_core_value_sig7E48, var_core_value_sig7B9E, var_core_value_sig5C3B, var_core_value_sig4002, var_core_value_sig4153) {
  let {
      sourceList: var_core_value_sig2825,
      rowFields: var_core_value_sig5FD0,
      columnFields: var_core_value_sigA7E3,
      valueFields: var_core_value_sigA784,
      filterFields: var_core_value_sig4406
    } = var_core_value_sig4153,
    var_core_value_sig6806 = [...var_core_value_sig5FD0, ...var_core_value_sigA7E3, ...var_core_value_sigA784, ...var_core_value_sig4406].find(var_core_value_sigCC93 => var_core_value_sigCC93.tableFieldId === var_core_value_sig7B9E),
    var_core_value_sigD4AA = var_core_value_sig2825.find(var_core_value_sig5964 => var_core_value_sig5964.id === (var_core_value_sig6806 == null ? undefined : var_core_value_sig6806.dataFieldId));
  if (var_core_value_sig6806 && var_core_value_sigD4AA) {
    let var_core_value_sig808B = {
      tableFieldId: var_core_value_sig7B9E,
      pivotTableId: var_core_value_sig7E48,
      unitId: var_core_value_sig5C3B,
      subUnitId: var_core_value_sig4002,
      tableFieldInfo: var_core_value_sig6806,
      dataFieldInfo: var_core_value_sigD4AA
    };
    var_core_value_sig44DF.executeCommand(L.id, var_core_value_sig808B);
  }
}
const fe = [{
    type: l.PivotSubtotalTypeEnum["average"],
    textKey: "sheets-pivot-ui.subtotal.average"
  }, {
    type: l.PivotSubtotalTypeEnum["count"],
    textKey: "sheets-pivot-ui.subtotal.count"
  }, {
    type: l.PivotSubtotalTypeEnum["countNums"],
    textKey: "sheets-pivot-ui.subtotal.countNums"
  }, {
    type: l.PivotSubtotalTypeEnum["max"],
    textKey: "sheets-pivot-ui.subtotal.max"
  }, {
    type: l.PivotSubtotalTypeEnum["min"],
    textKey: "sheets-pivot-ui.subtotal.min"
  }, {
    type: l.PivotSubtotalTypeEnum["product"],
    textKey: "sheets-pivot-ui.subtotal.product"
  }, {
    type: l.PivotSubtotalTypeEnum["stdDev"],
    textKey: "sheets-pivot-ui.subtotal.stdDev"
  }, {
    type: l.PivotSubtotalTypeEnum["stdDevp"],
    textKey: "sheets-pivot-ui.subtotal.stdDevp"
  }, {
    type: l.PivotSubtotalTypeEnum["sum"],
    textKey: "sheets-pivot-ui.subtotal.sum"
  }, {
    type: l.PivotSubtotalTypeEnum["var"],
    textKey: "sheets-pivot-ui.subtotal.var"
  }, {
    type: l.PivotSubtotalTypeEnum["varp"],
    textKey: "sheets-pivot-ui.subtotal.varp"
  }],
  U = (var_core_value_sigDC41, var_core_value_sigFB47 = 0) => var_core_value_sigDC41 ? n.numfmt["getFormatInfo"](var_core_value_sigDC41).maxDecimals ?? var_core_value_sigFB47 : var_core_value_sigFB47,
  pe = var_core_value_sig9B3D1 => Array(Math.min(Math.max(0, Number(var_core_value_sig9B3D1)), 30)).fill(0).join(""),
  W = (var_core_value_sigC1CF, var_core_value_sigEE12) => var_core_value_sigC1CF.split(";").map(var_core_value_sig2A26 => /\.0?/["test"](var_core_value_sig2A26) ? var_core_value_sig2A26.replace(/\.0*/g, "" + (var_core_value_sigEE12 > 0 ? "." : "") + pe(Number(var_core_value_sigEE12 || 0))) : /0[^0]?/["test"](var_core_value_sig2A26) ? var_core_value_sig2A26.replace(/0[^0]+|0$/, "0" + (var_core_value_sigEE12 > 0 ? "." : "") + pe(Number(var_core_value_sigEE12 || 0))) : var_core_value_sig2A26).join(";"),
  me = var_core_value_sigD70C => n.currencySymbols["find"](var_core_value_sig1179 => var_core_value_sigD70C.includes(var_core_value_sig1179)),
  he = var_core_value_sigF047 => !var_core_value_sigF047,
  ge = var_core_value_sigC2F9 => !!me(var_core_value_sigC2F9) && var_core_value_sigC2F9.startsWith("_("),
  _e = var_core_value_sig1F51 => !!me(var_core_value_sig1F51) && !var_core_value_sig1F51.startsWith("_("),
  ve = () => R.map(var_core_value_sigEA92 => ({
    label: var_core_value_sigEA92.label,
    value: var_core_value_sigEA92.suffix
  })),
  ye = var_core_value_sig29F5 => {
    let var_core_value_sig5A51 = n.numfmt["getFormatInfo"](var_core_value_sig29F5);
    return ve().map(var_core_value_sig8FD9 => var_core_value_sig8FD9.value).includes(var_core_value_sig29F5) || ["date", "datetime", "time"].includes(var_core_value_sig5A51.type);
  },
  be = () => z.map(var_core_value_sig1AE5 => ({
    label: var_core_value_sig1AE5.label,
    value: var_core_value_sig1AE5.suffix,
    color: var_core_value_sig1AE5.color
  })),
  xe = var_core_value_sigF1D1 => be().some(var_core_value_sig7100 => (0, n.isPatternEqualWithoutDecimal)(var_core_value_sig7100.value, var_core_value_sigF1D1)),
  Se = (var_core_value_sig370E, var_core_value_sigDE14) => {
    switch (var_core_value_sigDE14) {
      case l.PivotTableFiledAreaEnum["Row"]:
        return var_core_value_sig370E.rowFields["length"];
      case l.PivotTableFiledAreaEnum["Column"]:
        return var_core_value_sig370E.columnFields["length"];
      case l.PivotTableFiledAreaEnum["Filter"]:
        return var_core_value_sig370E.filterFields["length"];
      case l.PivotTableFiledAreaEnum["Value"]:
        return var_core_value_sig370E.valueFields["length"];
      default:
        return 0;
    }
  },
  Ce = (var_core_value_sig02CB, var_core_value_sig6CBB, var_core_value_sig68DA) => {
    for (let var_core_value_sigA19A of ["sheets-pivot-ui.averageName", "sheets-pivot-ui.countName", "sheets-pivot-ui.countNumsName", "sheets-pivot-ui.maxName", "sheets-pivot-ui.minName", "sheets-pivot-ui.productName", "sheets-pivot-ui.stdDevName", "sheets-pivot-ui.stdDevpName", "sheets-pivot-ui.sumName", "sheets-pivot-ui.varName", "sheets-pivot-ui.varpName"]) {
      let var_core_value_sig03E1 = var_core_value_sig68DA[var_core_value_sigA19A];
      if (var_core_value_sig03E1 + (0, t.isolateTextForBidiContext)(var_core_value_sig02CB, var_core_value_sig03E1) === var_core_value_sig6CBB || var_core_value_sig03E1 + var_core_value_sig02CB === var_core_value_sig6CBB) return true;
    }
    return false;
  },
  we = (var_core_value_sig64D8, var_core_value_sigD755, var_core_value_sigF897) => {
    let var_core_value_sigA578 = "";
    switch (var_core_value_sigF897) {
      case l.PivotSubtotalTypeEnum["average"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.averageName"];
        break;
      case l.PivotSubtotalTypeEnum["count"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.countName"];
        break;
      case l.PivotSubtotalTypeEnum["countNums"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.countNumsName"];
        break;
      case l.PivotSubtotalTypeEnum["max"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.maxName"];
        break;
      case l.PivotSubtotalTypeEnum["min"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.minName"];
        break;
      case l.PivotSubtotalTypeEnum["product"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.productName"];
        break;
      case l.PivotSubtotalTypeEnum["stdDev"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.stdDevName"];
        break;
      case l.PivotSubtotalTypeEnum["stdDevp"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.stdDevpName"];
        break;
      case l.PivotSubtotalTypeEnum["sum"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.sumName"];
        break;
      case l.PivotSubtotalTypeEnum["var"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.varName"];
        break;
      case l.PivotSubtotalTypeEnum["varp"]:
        var_core_value_sigA578 = var_core_value_sigD755["sheets-pivot-ui.varpName"];
        break;
      default:
        return var_core_value_sig64D8;
    }
    return var_core_value_sigA578 + (0, t.isolateTextForBidiContext)(var_core_value_sig64D8, var_core_value_sigA578);
  };
function Te(var_core_value_sig0260, var_core_value_sig034D) {
  if (!var_core_value_sig0260) return "NotFilter";
  if ((0, l.isManualPivotFilter)(var_core_value_sig0260)) {
    var var_core_value_sig89EC;
    return var_core_value_sig0260.isAll || ((var_core_value_sig89EC = var_core_value_sig034D.items) == null ? undefined : var_core_value_sig89EC.length) === var_core_value_sig0260.list["length"] ? "NotFilter" : "HasFilter";
  }
  return "NotFilter";
}
const Ee = var_core_value_sig9975 => {
    let [var_core_value_sigD6D9, var_core_value_sig2637] = (0, s.useState)(false),
      var_core_value_sigAF1D = (0, e.useDependency)(F);
    return (0, s.useEffect)(() => {
      var_core_value_sigAF1D.setIsRangeSelector2Focus(var_core_value_sigD6D9);
    }, [var_core_value_sigD6D9, var_core_value_sigAF1D]), (0, u.jsx)(o.RangeSelector, {
      ...var_core_value_sig9975,
      onFocusChange: var_core_value_sigD3F5 => {
        var var_core_value_sig3082;
        (var_core_value_sig3082 = var_core_value_sig9975.onFocusChange) == null || var_core_value_sig3082.call(var_core_value_sig9975, var_core_value_sigD3F5), var_core_value_sig2637(var_core_value_sigD3F5);
      }
    });
  },
  De = (var_core_value_sigC92D, var_core_value_sigEA3D, var_core_value_sig2841, var_core_value_sig9FE1, var_core_value_sig9DAA, var_core_value_sig1F8A) => (0, u.jsx)(Ee, {
    unitId: var_core_value_sigC92D,
    subUnitId: var_core_value_sigEA3D,
    initialValue: var_core_value_sig9FE1,
    onChange: (var_core_value_sigF5D1, var_core_value_sig8775) => var_core_value_sig2841(var_core_value_sig8775),
    maxRangeCount: 1,
    supportAcrossSheet: true,
    keepSheetReference: true
  }),
  Oe = (var_core_value_sigEBB4, var_core_value_sig2B74) => {
    switch (var_core_value_sigEBB4) {
      case 1:
        return var_core_value_sig2B74.t("sheets-pivot-ui.msg.invalidSize");
      case 0:
        return var_core_value_sig2B74.t("sheets-pivot-ui.msg.emptySourceRange");
      default:
        return "";
    }
  };
function G(var_core_value_sig0483) {
  let {
      unitId: var_core_value_sig4A48,
      sourceRange: var_core_value_sigD170,
      positionRange: var_core_value_sig90E5,
      sourceSheetName: var_core_value_sig7000,
      positionSheetName: var_core_value_sigD7C5,
      onConfirm: var_core_value_sig3633,
      onCancel: var_core_value_sig1DF5
    } = var_core_value_sig0483,
    var_core_value_sig90A3 = (0, e.useDependency)(n.LocaleService),
    var_core_value_sig28BE = (0, e.useDependency)(n.IUniverInstanceService),
    var_core_value_sig0224 = var_core_value_sig90A3.getDirection(),
    var_core_value_sig854B = var_core_value_sig28BE.getUnit(var_core_value_sig4A48),
    var_core_value_sig1FF6 = (0, s.useMemo)(() => var_core_value_sig854B.getActiveSheet().getSheetId(), [var_core_value_sig854B]),
    [var_core_value_sig4B27, var_core_value_sig3A41] = (0, s.useState)(var_core_value_sigD170),
    [var_core_value_sig269A, var_core_value_sigBF53] = (0, s.useState)(var_core_value_sig90E5),
    [var_core_value_sigD9BB, var_core_value_sigF549] = (0, s.useState)(var_core_value_sig7000),
    [var_core_value_sigC125, var_core_value_sigB63D] = (0, s.useState)(var_core_value_sigD7C5),
    var_core_value_sig8255 = (0, s.useRef)(undefined),
    [var_core_value_sigBFC7, var_core_value_sig933F] = (0, s.useState)(),
    [var_core_value_sig29DE, var_core_value_sig4AFB] = (0, s.useState)(t.PositionType["New"]),
    [var_core_value_sigC7EA, var_core_value_sigDAB9] = (0, s.useState)(true),
    [var_core_value_sig9CF7, var_core_value_sigCCE5] = (0, s.useState)(true),
    [var_core_value_sig5933, var_core_value_sig884B] = (0, s.useState)(undefined);
  (0, s.useEffect)(() => {
    let var_core_value_sig481B = re(var_core_value_sig854B.getSheetBySheetName(var_core_value_sigD9BB), var_core_value_sig4B27);
    var_core_value_sigCCE5(var_core_value_sig481B === 2), var_core_value_sig884B(Oe(var_core_value_sig481B, var_core_value_sig90A3));
  }, [var_core_value_sig4B27, var_core_value_sigD9BB, var_core_value_sig854B, var_core_value_sig90A3]);
  let var_core_value_sig4E30 = var_core_value_sig13D7 => {
      if ((0, a.serializeRangeWithSheet)(var_core_value_sigD9BB, var_core_value_sig4B27) === var_core_value_sig13D7) return;
      let var_core_value_sig90C0 = var_core_value_sig13D7.split(",").filter(var_core_value_sigBB57 => !!var_core_value_sigBB57).map(a.deserializeRangeWithSheet);
      if (Array.isArray(var_core_value_sig90C0) && var_core_value_sig90C0.length > 0) {
        let {
          range: var_core_value_sig7C4A,
          sheetName: var_core_value_sigE799
        } = var_core_value_sig90C0[0];
        var_core_value_sig3A41(var_core_value_sig7C4A), var_core_value_sigF549(var_core_value_sigE799);
      }
      var_core_value_sig90C0[0] || var_core_value_sig884B(var_core_value_sig90A3.t("sheets-pivot-ui.msg.emptySourceRange"));
    },
    var_core_value_sig9730 = De(var_core_value_sig4A48, var_core_value_sig1FF6, var_core_value_sigF1B2 => {
      if (var_core_value_sig269A && (0, a.serializeRangeWithSheet)(var_core_value_sigC125, var_core_value_sig269A) === var_core_value_sigF1B2) return;
      let var_core_value_sigC2BB = var_core_value_sigF1B2.split(",").filter(var_core_value_sigB601 => !!var_core_value_sigB601).map(a.deserializeRangeWithSheet);
      if (var_core_value_sigC2BB.length === 0) {
        var_core_value_sigBF53(null);
        return;
      }
      let var_core_value_sigD9DB = var_core_value_sigC2BB[0];
      var_core_value_sigBF53(var_core_value_sigD9DB.range), var_core_value_sigB63D(var_core_value_sigD9DB.sheetName || var_core_value_sig7000), var_core_value_sigD9DB.sheetName === var_core_value_sig7000 && n.Rectangle["intersects"](var_core_value_sigD9DB.range, var_core_value_sig4B27) ? var_core_value_sigDAB9(false) : var_core_value_sigDAB9(true);
    }, var_core_value_sig269A ? (0, a.serializeRangeWithSheet)(var_core_value_sigC125, var_core_value_sig269A) : "", false, var_core_value_sigBFC7),
    var_core_value_sig8E4A = () => !!(var_core_value_sig4B27 && var_core_value_sig269A && var_core_value_sigD9BB && var_core_value_sigC125 && var_core_value_sig29DE === t.PositionType["Existing"] && var_core_value_sigC7EA && var_core_value_sig9CF7) || !!(var_core_value_sig4B27 && var_core_value_sigD9BB && var_core_value_sig29DE === t.PositionType["New"] && var_core_value_sig9CF7);
  return (0, s.useEffect)(() => {
    var_core_value_sig933F(var_core_value_sig8255.current);
  }, []), (0, u.jsxs)("div", {
    ref: var_core_value_sig8255,
    dir: var_core_value_sig0224,
    children: [(0, u.jsx)("div", {
      className: "univer-mb-2 univer-h-5 univer-text-sm univer-font-medium",
      children: var_core_value_sig90A3.t("sheets-pivot-ui.dialog.source.sourceData")
    }), De(var_core_value_sig4A48, var_core_value_sig1FF6, var_core_value_sig4E30, (0, a.serializeRangeWithSheet)(var_core_value_sigD9BB, var_core_value_sig4B27), true, var_core_value_sigBFC7), var_core_value_sig5933 && (0, u.jsx)("div", {
      className: "univer-mt-2 univer-h-5 univer-text-xs univer-text-red-400",
      children: var_core_value_sig5933
    }), (0, u.jsx)("div", {
      className: "univer-mb-2 univer-mt-5 univer-h-5 univer-text-sm univer-font-medium",
      children: var_core_value_sig90A3.t("sheets-pivot-ui.dialog.source.position")
    }), (0, u.jsxs)(i.RadioGroup, {
      value: var_core_value_sig29DE,
      onChange: var_core_value_sigA363 => var_core_value_sig4AFB(var_core_value_sigA363),
      className: "univer-flex univer-flex-col univer-gap-2",
      children: [(0, u.jsx)(i.Radio, {
        value: t.PositionType["New"],
        children: var_core_value_sig90A3.t("sheets-pivot-ui.dialog.source.newSheet")
      }), (0, u.jsx)(i.Radio, {
        value: t.PositionType["Existing"],
        children: var_core_value_sig90A3.t("sheets-pivot-ui.dialog.source.existingSheet")
      })]
    }), var_core_value_sig29DE === t.PositionType["Existing"] && (0, u.jsxs)(u.Fragment, {
      children: [var_core_value_sig9730, !var_core_value_sigC7EA && (0, u.jsx)("span", {
        className: "univer-h-5 univer-text-sm univer-text-red-400",
        children: var_core_value_sig90A3.t("sheets-pivot-ui.dialog.source.intersect")
      })]
    }), (0, u.jsx)("footer", {
      className: "univer-mt-5",
      children: (0, u.jsxs)(i.ActionRow, {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [(0, u.jsx)(i.Button, {
          onClick: () => var_core_value_sig1DF5(),
          children: var_core_value_sig90A3.t("sheets-pivot-ui.dialog.cancel")
        }), (0, u.jsx)(i.Button, {
          variant: "primary",
          onClick: () => {
            var_core_value_sig8E4A() && (var_core_value_sig29DE === t.PositionType["Existing"] ? var_core_value_sig3633({
              sourceRange: var_core_value_sig4B27,
              sourceSheetName: var_core_value_sigD9BB,
              positionRange: var_core_value_sig269A,
              positionSheetName: var_core_value_sigC125,
              positionType: var_core_value_sig29DE
            }) : var_core_value_sig3633({
              sourceRange: var_core_value_sig4B27,
              sourceSheetName: var_core_value_sigD9BB,
              positionType: var_core_value_sig29DE
            }));
          },
          children: var_core_value_sig90A3.t("sheets-pivot-ui.dialog.ok")
        })]
      })
    })]
  });
}
G.componentKey = "univer.sheet.pivot-table-range-selector";
const K = {
  type: n.CommandType["OPERATION"],
  id: "sheet.operation.open-pivot-table-range-selector-panel",
  async handler(var_core_value_sig300B) {
    var var_core_value_sig8457;
    let var_core_value_sigB30D = var_core_value_sig300B.get(n.IUniverInstanceService),
      var_core_value_sigDB33 = var_core_value_sig300B.get(n.ICommandService),
      var_core_value_sig6C8C = (0, r.getSheetCommandTarget)(var_core_value_sigB30D),
      var_core_value_sig7A5E = var_core_value_sig300B.get(n.LocaleService);
    if (!var_core_value_sig6C8C) return false;
    let {
        unitId: var_core_value_sig838E,
        subUnitId: var_core_value_sig9A5B,
        worksheet: var_core_value_sigC860,
        workbook: var_core_value_sigE64C
      } = var_core_value_sig6C8C,
      var_core_value_sigF39B = var_core_value_sig300B.get(r.SheetsSelectionsService).getCurrentLastSelection(),
      var_core_value_sig9B88 = (var_core_value_sigF39B == null ? undefined : var_core_value_sigF39B.range) ?? {
        startRow: 0,
        endRow: 0,
        startColumn: 0,
        endColumn: 0,
        rangeType: n.RANGE_TYPE["NORMAL"]
      },
      var_core_value_sig992A = await ke(var_core_value_sig300B, var_core_value_sig838E, var_core_value_sig9A5B, (0, r.isSingleCellSelection)(var_core_value_sigF39B) ? (0, r.expandToContinuousRange)(var_core_value_sig9B88, {
        up: true,
        left: true,
        right: true,
        down: true
      }, var_core_value_sigC860) : var_core_value_sig9B88, var_core_value_sigC860.getName());
    if (!var_core_value_sig992A) return false;
    let var_core_value_sig6281;
    if (var_core_value_sig992A.positionType === t.PositionType["New"]) var_core_value_sig6281 = {
      row: 0,
      col: 0,
      unitId: var_core_value_sig838E,
      subUnitId: (0, n.generateRandomId)(),
      sheetName: var_core_value_sigE64C.generateNewSheetName("" + var_core_value_sig7A5E.t("sheets-pivot-ui.sheet"))
    };else {
      var var_core_value_sig9B01;
      var_core_value_sig6281 = {
        row: var_core_value_sig992A.positionRange["startRow"],
        col: var_core_value_sig992A.positionRange["startColumn"],
        unitId: var_core_value_sig838E,
        subUnitId: (var_core_value_sig9B01 = var_core_value_sigE64C.getSheets().find(var_core_value_sig8B71 => var_core_value_sig8B71.getName() === var_core_value_sig992A.positionSheetName)) == null ? undefined : var_core_value_sig9B01.getSheetId(),
        sheetName: var_core_value_sig992A.positionSheetName
      };
    }
    return var_core_value_sigDB33.executeCommand(t.AddPivotTableCommand["id"], {
      pivotTableConfig: {
        targetCellInfo: var_core_value_sig6281,
        sourceRangeInfo: {
          range: var_core_value_sig992A.sourceRange,
          unitId: var_core_value_sig838E,
          sheetName: var_core_value_sig992A.sourceSheetName,
          subUnitId: (var_core_value_sig8457 = var_core_value_sigE64C.getSheets().find(var_core_value_sigFBA5 => var_core_value_sigFBA5.getName() === var_core_value_sig992A.sourceSheetName)) == null ? undefined : var_core_value_sig8457.getSheetId()
        }
      },
      positionType: var_core_value_sig992A.positionType
    }), true;
  }
};
async function ke(var_core_value_sigA724, var_core_value_sig385E, var_core_value_sig10D3, var_core_value_sig41F2, var_core_value_sig32DD) {
  let var_core_value_sig7A88 = var_core_value_sigA724.get(e.IDialogService),
    var_core_value_sig6CFC = var_core_value_sigA724.get(n.LocaleService);
  return new Promise(var_core_value_sigAC47 => {
    let var_core_value_sigA06F,
      var_core_value_sig770E = {
        unitId: var_core_value_sig385E,
        subUnitId: var_core_value_sig10D3,
        sourceRange: var_core_value_sig41F2,
        positionRange: null,
        sourceSheetName: var_core_value_sig32DD,
        positionSheetName: var_core_value_sig32DD,
        onConfirm: var_core_value_sigAEFB => {
          var_core_value_sigAC47(var_core_value_sigAEFB), var_core_value_sigA06F == null || var_core_value_sigA06F.dispose();
        },
        onCancel: () => {
          var_core_value_sigAC47(null), var_core_value_sigA06F == null || var_core_value_sigA06F.dispose();
        }
      };
    var_core_value_sigA06F = var_core_value_sig7A88.open({
      id: G.componentKey,
      title: {
        title: var_core_value_sig6CFC.t("sheets-pivot-ui.dialog.source.insertPivotTable")
      },
      draggable: true,
      mask: false,
      maskClosable: false,
      children: {
        label: {
          name: G.componentKey,
          props: var_core_value_sig770E
        }
      },
      width: 400,
      onClose: () => {
        var_core_value_sigA06F.dispose();
      }
    });
  });
}
const Ae = {
  type: n.CommandType["OPERATION"],
  id: "sheet.operation.set-pivot-date-group",
  async handler(var_core_value_sig3EC0, var_core_value_sigEA69) {
    if (!var_core_value_sigEA69) return false;
    let var_core_value_sigF42A = q(var_core_value_sig3EC0);
    return var_core_value_sigF42A ? var_core_value_sig3EC0.get(n.ICommandService).executeCommand(t.SetPivotDateGroupCommand["id"], {
      unitId: var_core_value_sigF42A.unitId,
      subUnitId: var_core_value_sigF42A.subUnitId,
      pivotTableId: var_core_value_sigF42A.pivotTableId,
      tableFieldId: var_core_value_sigF42A.tableFieldId,
      dateType: var_core_value_sigEA69.dateType
    }) : false;
  }
};
function q(var_core_value_sig898E) {
  let var_core_value_sigC481 = (0, r.getSheetCommandTarget)(var_core_value_sig898E.get(n.IUniverInstanceService));
  if (!var_core_value_sigC481) return;
  let var_core_value_sig27B7 = var_core_value_sig898E.get(r.SheetsSelectionsService).getCurrentLastSelection(),
    var_core_value_sig2DAD = var_core_value_sig27B7 == null ? undefined : var_core_value_sig27B7.primary;
  if (!var_core_value_sig2DAD) return;
  let {
      unitId: var_core_value_sig00DE,
      subUnitId: var_core_value_sigEF7C
    } = var_core_value_sigC481,
    var_core_value_sig07E7 = var_core_value_sig2DAD.startRow,
    var_core_value_sig6005 = var_core_value_sig2DAD.startColumn,
    var_core_value_sig25A4 = var_core_value_sig898E.get(t.SheetsPivotTableAdaptorModel).getPivotTableIdByCell(var_core_value_sig00DE, var_core_value_sigEF7C, var_core_value_sig07E7, var_core_value_sig6005);
  if (!var_core_value_sig25A4) return;
  let var_core_value_sigB591 = je(var_core_value_sig898E, var_core_value_sig00DE, var_core_value_sigEF7C, var_core_value_sig25A4, var_core_value_sig07E7, var_core_value_sig6005);
  if (!var_core_value_sigB591) return;
  let var_core_value_sigB272 = var_core_value_sig898E.get(t.SheetsPivotTableConfigModel),
    var_core_value_sig6F52 = var_core_value_sigB272.getPivotTableConfig(var_core_value_sig00DE, var_core_value_sigEF7C, var_core_value_sig25A4),
    var_core_value_sig09C4 = var_core_value_sigB272.getCollection(var_core_value_sig00DE, var_core_value_sig25A4),
    var_core_value_sig8E3E = (0, t.getPivotDateGroupContext)(var_core_value_sig6F52 == null ? undefined : var_core_value_sig6F52.fieldsConfig, var_core_value_sig09C4, var_core_value_sigB591);
  if (var_core_value_sig8E3E) return {
    unitId: var_core_value_sig00DE,
    subUnitId: var_core_value_sigEF7C,
    pivotTableId: var_core_value_sig25A4,
    tableFieldId: var_core_value_sigB591,
    row: var_core_value_sig07E7,
    col: var_core_value_sig6005,
    dateGroupContext: var_core_value_sig8E3E
  };
}
function je(var_core_value_sigC3D3, var_core_value_sig1451, var_core_value_sigAD57, var_core_value_sig58A8, var_core_value_sigEC1A, var_core_value_sigBDED) {
  let var_core_value_sig4BFF = var_core_value_sigC3D3.get(t.SheetsPivotTableAdaptorModel).getPivotItemRenderInfoCache(var_core_value_sig1451, var_core_value_sigAD57, var_core_value_sig58A8);
  if (!var_core_value_sig4BFF) return;
  let var_core_value_sig40E7 = (0, t.resolvePivotSheetCell)(var_core_value_sigEC1A, var_core_value_sigBDED, var_core_value_sigC3D3.get(t.SheetsPivotTableAdaptorModel).getPivotTableCellData(var_core_value_sig1451, var_core_value_sigAD57, var_core_value_sigEC1A, var_core_value_sigBDED), var_core_value_sig4BFF);
  return var_core_value_sig40E7 == null ? undefined : var_core_value_sig40E7.tableFieldId;
}
const Me = [{
    type: l.PivotShowAsTypeEnum["normal"],
    localeKey: "sheets-pivot-ui.showValuesAs.normal",
    requiresParameters: false,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["percentOfGrandTotal"],
    localeKey: "sheets-pivot-ui.showValuesAs.percentOfGrandTotal",
    requiresParameters: false,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["percentOfRowTotal"],
    localeKey: "sheets-pivot-ui.showValuesAs.percentOfRowTotal",
    requiresParameters: false,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["percentOfColumnTotal"],
    localeKey: "sheets-pivot-ui.showValuesAs.percentOfColumnTotal",
    requiresParameters: false,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["percentOfParentRowTotal"],
    localeKey: "sheets-pivot-ui.showValuesAs.percentOfParentRowTotal",
    requiresParameters: false,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["percentOfParentColumnTotal"],
    localeKey: "sheets-pivot-ui.showValuesAs.percentOfParentColumnTotal",
    requiresParameters: false,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["index"],
    localeKey: "sheets-pivot-ui.showValuesAs.index",
    requiresParameters: false,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["percentOfParent"],
    localeKey: "sheets-pivot-ui.showValuesAs.percentOfParent",
    requiresParameters: true,
    baseItemMode: "none",
    parentFieldOnly: true
  }, {
    type: l.PivotShowAsTypeEnum["percentOf"],
    localeKey: "sheets-pivot-ui.showValuesAs.percentOf",
    requiresParameters: true,
    baseItemMode: "item"
  }, {
    type: l.PivotShowAsTypeEnum["differenceFrom"],
    localeKey: "sheets-pivot-ui.showValuesAs.differenceFrom",
    requiresParameters: true,
    baseItemMode: "item-or-relative"
  }, {
    type: l.PivotShowAsTypeEnum["percentDifferenceFrom"],
    localeKey: "sheets-pivot-ui.showValuesAs.percentDifferenceFrom",
    requiresParameters: true,
    baseItemMode: "item-or-relative"
  }, {
    type: l.PivotShowAsTypeEnum["runningTotal"],
    localeKey: "sheets-pivot-ui.showValuesAs.runningTotal",
    requiresParameters: true,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["percentRunningTotal"],
    localeKey: "sheets-pivot-ui.showValuesAs.percentRunningTotal",
    requiresParameters: true,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["rankAscending"],
    localeKey: "sheets-pivot-ui.showValuesAs.rankAscending",
    requiresParameters: true,
    baseItemMode: "none"
  }, {
    type: l.PivotShowAsTypeEnum["rankDescending"],
    localeKey: "sheets-pivot-ui.showValuesAs.rankDescending",
    requiresParameters: true,
    baseItemMode: "none"
  }],
  Ne = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.set-pivot-show-data-as",
    async handler(var_core_value_sigEDBA, var_core_value_sigE863) {
      let var_core_value_sig04B4 = var_core_value_sigE863 && Me.find(var_core_value_sig4654 => var_core_value_sig4654.type === var_core_value_sigE863.type);
      if (!var_core_value_sig04B4) return false;
      let var_core_value_sig1C07 = Pe(var_core_value_sigEDBA);
      if (!var_core_value_sig1C07) return false;
      if (!var_core_value_sig04B4.requiresParameters) return var_core_value_sigEDBA.get(n.ICommandService).executeCommand(t.UpdatePivotFieldSettingCommand["id"], {
        unitId: var_core_value_sig1C07.unitId,
        subUnitId: var_core_value_sig1C07.subUnitId,
        pivotTableId: var_core_value_sig1C07.pivotTableId,
        tableFieldId: var_core_value_sig1C07.tableFieldId,
        showDataAs: {
          type: var_core_value_sig04B4.type,
          baseFieldId: "",
          baseItem: ""
        },
        tableFieldInfo: var_core_value_sig1C07.tableFieldInfo,
        dataFieldInfo: var_core_value_sig1C07.dataFieldInfo
      });
      let var_core_value_sig93D6 = Fe(var_core_value_sigEDBA, var_core_value_sig1C07);
      if (!var_core_value_sig93D6) return false;
      let var_core_value_sigDD05 = J(var_core_value_sig93D6.config, var_core_value_sig93D6.collection, var_core_value_sig04B4);
      if (var_core_value_sigDD05.length === 0) return false;
      let var_core_value_sig3932 = {};
      if (var_core_value_sig04B4.baseItemMode !== "none") {
        try {
          var_core_value_sig3932 = await Ie(var_core_value_sigEDBA, var_core_value_sig93D6.config, var_core_value_sig1C07.pivotTableId, var_core_value_sigDD05);
        } catch {
          return false;
        }
        if (!var_core_value_sigDD05.some(var_core_value_sig826B => var_core_value_sig3932[var_core_value_sig826B] && (var_core_value_sig04B4.baseItemMode === "item-or-relative" || var_core_value_sig3932[var_core_value_sig826B].items["length"] > 0))) return false;
      }
      let var_core_value_sig48B2 = var_core_value_sigEDBA.get(e.IDialogService),
        var_core_value_sig57DF = var_core_value_sigEDBA.get(n.LocaleService),
        var_core_value_sigC985 = null,
        var_core_value_sig8DA6 = false,
        var_core_value_sigCA69 = false,
        var_core_value_sigB77C = () => {
          var_core_value_sig8DA6 || (var_core_value_sig8DA6 = true, var_core_value_sigC985 == null || var_core_value_sigC985.dispose(), var_core_value_sigC985 = null);
        };
      try {
        var_core_value_sigC985 = var_core_value_sig48B2.open({
          id: "UNIVER_SHEET_PIVOT_SHOW_DATA_AS_DIALOG_ID",
          title: {
            title: var_core_value_sig57DF.t("sheets-pivot-ui.showValuesAs.dialogTitle")
          },
          draggable: true,
          mask: true,
          maskClosable: false,
          width: 400,
          children: {
            label: {
              name: T,
              props: {
                unitId: var_core_value_sig1C07.unitId,
                subUnitId: var_core_value_sig1C07.subUnitId,
                pivotTableId: var_core_value_sig1C07.pivotTableId,
                tableFieldId: var_core_value_sig1C07.tableFieldId,
                type: var_core_value_sig04B4.type,
                baseItems: var_core_value_sig3932,
                onCancel: var_core_value_sigB77C,
                onConfirm: async var_core_value_sigCF89 => {
                  if (!var_core_value_sigCA69) {
                    var_core_value_sigCA69 = true;
                    try {
                      let var_core_value_sigDBB7 = Fe(var_core_value_sigEDBA, var_core_value_sig1C07);
                      if (!var_core_value_sigDBB7 || !Le(var_core_value_sigDBB7.config, var_core_value_sigDBB7.collection, var_core_value_sig04B4, var_core_value_sigCF89)) return;
                      if (var_core_value_sig04B4.baseItemMode !== "none" && var_core_value_sigCF89.baseItemType === undefined) {
                        var var_core_value_sig00CB;
                        if (!((var_core_value_sig00CB = (await Ie(var_core_value_sigEDBA, var_core_value_sigDBB7.config, var_core_value_sigDBB7.context["pivotTableId"], [var_core_value_sigCF89.baseFieldId]))[var_core_value_sigCF89.baseFieldId]) != null && var_core_value_sig00CB.items["includes"](var_core_value_sigCF89.baseItem))) return;
                      }
                      await var_core_value_sigEDBA.get(n.ICommandService).executeCommand(t.UpdatePivotFieldSettingCommand["id"], {
                        unitId: var_core_value_sigDBB7.context["unitId"],
                        subUnitId: var_core_value_sigDBB7.context["subUnitId"],
                        pivotTableId: var_core_value_sigDBB7.context["pivotTableId"],
                        tableFieldId: var_core_value_sigDBB7.context["tableFieldId"],
                        showDataAs: var_core_value_sigCF89,
                        tableFieldInfo: var_core_value_sigDBB7.context["tableFieldInfo"],
                        dataFieldInfo: var_core_value_sigDBB7.context["dataFieldInfo"]
                      });
                    } catch {} finally {
                      var_core_value_sigB77C();
                    }
                  }
                }
              }
            }
          },
          onClose: var_core_value_sigB77C
        });
      } catch {
        return var_core_value_sigB77C(), false;
      }
      return true;
    }
  };
function J(var_core_value_sig9AFF, var_core_value_sig3545, var_core_value_sig5EE4) {
  let {
    rowFields: var_core_value_sig7EAB,
    columnFields: var_core_value_sig56B9,
    dimension: var_core_value_sig90CF
  } = var_core_value_sig9AFF.fieldsConfig;
  return (var_core_value_sig5EE4.parentFieldOnly ? [...var_core_value_sig7EAB.slice(0, -1), ...var_core_value_sig56B9.slice(0, -1)] : [...var_core_value_sig7EAB, ...var_core_value_sig56B9]).filter(var_core_value_sigB26B => {
    let var_core_value_sig019B = var_core_value_sig90CF[var_core_value_sigB26B];
    return !!(var_core_value_sig019B && (var_core_value_sig3545.fields[var_core_value_sig019B.dataFieldId] || var_core_value_sig3545.customFields["find"](var_core_value_sig77EE => var_core_value_sig77EE.id === var_core_value_sig019B.dataFieldId)));
  });
}
function Pe(var_core_value_sigA386) {
  var var_core_value_sigCD6E, var_core_value_sigFD9D;
  let var_core_value_sigA2A4 = (0, r.getSheetCommandTarget)(var_core_value_sigA386.get(n.IUniverInstanceService)),
    var_core_value_sigA1AC = (var_core_value_sigCD6E = var_core_value_sigA386.get(r.SheetsSelectionsService).getCurrentLastSelection()) == null ? undefined : var_core_value_sigCD6E.primary;
  if (!var_core_value_sigA2A4 || !var_core_value_sigA1AC) return;
  let {
      unitId: var_core_value_sig6180,
      subUnitId: var_core_value_sigB93D
    } = var_core_value_sigA2A4,
    var_core_value_sigB17C = var_core_value_sigA1AC.startRow,
    var_core_value_sig69B6 = var_core_value_sigA1AC.startColumn,
    var_core_value_sig708D = var_core_value_sigA386.get(t.SheetsPivotTableAdaptorModel),
    var_core_value_sig1ED2 = var_core_value_sig708D.getPivotTableIdByCell(var_core_value_sig6180, var_core_value_sigB93D, var_core_value_sigB17C, var_core_value_sig69B6);
  if (!var_core_value_sig1ED2) return;
  let var_core_value_sig94C1 = var_core_value_sigA386.get(t.SheetsPivotTableConfigModel).getPivotTableConfig(var_core_value_sig6180, var_core_value_sigB93D, var_core_value_sig1ED2),
    var_core_value_sigABAC = var_core_value_sig708D.getPivotItemRenderInfoCache(var_core_value_sig6180, var_core_value_sigB93D, var_core_value_sig1ED2),
    var_core_value_sigFAE6 = var_core_value_sig708D.getPivotTableCellData(var_core_value_sig6180, var_core_value_sigB93D, var_core_value_sigB17C, var_core_value_sig69B6);
  if (!var_core_value_sig94C1 || !var_core_value_sigABAC) return;
  let var_core_value_sig06AC = (0, t.resolvePivotSheetCell)(var_core_value_sigB17C, var_core_value_sig69B6, var_core_value_sigFAE6, var_core_value_sigABAC);
  if (!var_core_value_sig06AC) return;
  let var_core_value_sig57E2 = (0, t.resolvePivotValueFieldId)(var_core_value_sig06AC, var_core_value_sig94C1.fieldsConfig["valueFields"]);
  if (var_core_value_sig57E2) return (var_core_value_sigFD9D = Fe(var_core_value_sigA386, {
    unitId: var_core_value_sig6180,
    subUnitId: var_core_value_sigB93D,
    pivotTableId: var_core_value_sig1ED2,
    tableFieldId: var_core_value_sig57E2
  })) == null ? undefined : var_core_value_sigFD9D.context;
}
function Fe(var_core_value_sig01FC, var_core_value_sig10FC) {
  let {
      unitId: var_core_value_sig5374,
      subUnitId: var_core_value_sigB66D,
      pivotTableId: var_core_value_sigD0F0,
      tableFieldId: var_core_value_sig8E31
    } = var_core_value_sig10FC,
    var_core_value_sig8339 = var_core_value_sig01FC.get(t.SheetsPivotTableConfigModel),
    var_core_value_sigA01E = var_core_value_sig8339.getPivotTableConfig(var_core_value_sig5374, var_core_value_sigB66D, var_core_value_sigD0F0),
    var_core_value_sigA41E = var_core_value_sig8339.getCollection(var_core_value_sig5374, var_core_value_sigD0F0),
    var_core_value_sig939C = var_core_value_sigA01E == null ? undefined : var_core_value_sigA01E.fieldsConfig["measure"][var_core_value_sig8E31];
  if (!var_core_value_sigA01E || !var_core_value_sigA41E || !var_core_value_sig939C || !var_core_value_sigA01E.fieldsConfig["valueFields"].includes(var_core_value_sig939C.id)) return;
  let var_core_value_sigA49E = var_core_value_sigA41E.fields[var_core_value_sig939C.dataFieldId] ?? var_core_value_sigA41E.customFields["find"](var_core_value_sigC6BC => var_core_value_sigC6BC.id === var_core_value_sig939C.dataFieldId);
  if (!var_core_value_sigA49E) return;
  let var_core_value_sig6DEB = {
    ...var_core_value_sig939C.showDataAs
  };
  return {
    config: var_core_value_sigA01E,
    collection: var_core_value_sigA41E,
    context: {
      unitId: var_core_value_sig5374,
      subUnitId: var_core_value_sigB66D,
      pivotTableId: var_core_value_sigD0F0,
      tableFieldId: var_core_value_sig939C.id,
      currentShowDataAs: var_core_value_sig6DEB,
      tableFieldInfo: {
        tableFieldId: var_core_value_sig939C.id,
        displayName: var_core_value_sig939C.displayName,
        dataFieldId: var_core_value_sig939C.dataFieldId,
        format: var_core_value_sig939C.format,
        subTotalType: var_core_value_sig939C.subtotal,
        showDataAs: {
          ...var_core_value_sig6DEB
        }
      },
      dataFieldInfo: {
        id: var_core_value_sigA49E.id,
        dataFieldId: var_core_value_sigA49E.id,
        name: var_core_value_sigA49E.name,
        type: var_core_value_sigA49E.fieldDataType,
        checked: true,
        pivotTableId: var_core_value_sigD0F0
      }
    }
  };
}
async function Ie(var_core_value_sig2F0D, var_core_value_sig5141, var_core_value_sigA9E0, var_core_value_sig751D) {
  let {
      unitId: var_core_value_sig2E9A,
      subUnitId: var_core_value_sigE105
    } = var_core_value_sig5141.targetCellInfo,
    var_core_value_sig0BD6 = var_core_value_sig5141.targetCellInfo,
    var_core_value_sig3070 = var_core_value_sig2F0D.get(t.SheetsPivotTableAdaptorModel).getPivotItemRenderInfoCache(var_core_value_sig2E9A, var_core_value_sigE105, var_core_value_sigA9E0);
  if (!var_core_value_sig3070) throw Error("[sheets-pivot-ui]: Pivot render cache is unavailable");
  return (await Promise.all(var_core_value_sig751D.map(async var_core_value_sig8EC2 => {
    try {
      return [var_core_value_sig8EC2, (await var_core_value_sig2F0D.get(t.SheetsPivotRPCService).getPivotDisplayConfig({
        unitId: var_core_value_sig2E9A,
        subUnitId: var_core_value_sigE105,
        pivotTableId: var_core_value_sigA9E0,
        params: {
          type: t.PivotDisplayDataType["Filter"],
          filter: {
            row: var_core_value_sig0BD6.row,
            col: var_core_value_sig0BD6.col,
            tableFieldId: var_core_value_sig8EC2,
            pivotItemRenderInfoCache: var_core_value_sig3070
          }
        }
      })).result["filter"]];
    } catch {
      return [var_core_value_sig8EC2, undefined];
    }
  }))).reduce((var_core_value_sigA8C3, [var_core_value_sig5276, var_core_value_sig031B]) => (var_core_value_sig031B && (var_core_value_sigA8C3[var_core_value_sig5276] = {
    items: var_core_value_sig031B.items,
    itemTypes: var_core_value_sig031B.itemTypes,
    format: var_core_value_sig031B.format
  }), var_core_value_sigA8C3), {});
}
function Le(var_core_value_sigC66D, var_core_value_sig8EC5, var_core_value_sig1056, var_core_value_sig6EE5) {
  return var_core_value_sig6EE5.type !== var_core_value_sig1056.type || !J(var_core_value_sigC66D, var_core_value_sig8EC5, var_core_value_sig1056).includes(var_core_value_sig6EE5.baseFieldId) ? false : var_core_value_sig1056.baseItemMode === "none" ? var_core_value_sig6EE5.baseItem === "" && var_core_value_sig6EE5.baseItemType === undefined : var_core_value_sig6EE5.baseItemType === undefined ? var_core_value_sig6EE5.baseItem !== "" : var_core_value_sig1056.baseItemMode === "item-or-relative" && var_core_value_sig6EE5.baseItem === "" && (var_core_value_sig6EE5.baseItemType === l.PivotShowAsBaseItemTypeEnum["previous"] || var_core_value_sig6EE5.baseItemType === l.PivotShowAsBaseItemTypeEnum["next"]);
}
function Re(var_core_value_sig9DD9) {
  return {
    ...var_core_value_sig9DD9,
    expected: Array.isArray(var_core_value_sig9DD9.expected) ? var_core_value_sig9DD9.expected["concat"]() : var_core_value_sig9DD9.expected
  };
}
function ze(var_core_value_sig09AC, var_core_value_sig1613) {
  let var_core_value_sigADC6 = var_core_value_sig09AC.get(t.SheetsPivotTableConfigModel).getPivotTableConfig(var_core_value_sig1613.unitId, var_core_value_sig1613.subUnitId, var_core_value_sig1613.pivotTableId);
  if (!(!var_core_value_sigADC6 || !var_core_value_sigADC6.fieldsConfig["dimension"][var_core_value_sig1613.targetFieldId] || !(var_core_value_sigADC6.fieldsConfig["rowFields"].includes(var_core_value_sig1613.targetFieldId) || var_core_value_sigADC6.fieldsConfig["columnFields"].includes(var_core_value_sig1613.targetFieldId)))) return var_core_value_sigADC6;
}
function Be(var_core_value_sig4620) {
  var var_core_value_sig07FB, var_core_value_sig617E;
  let var_core_value_sigC85E = (0, r.getSheetCommandTarget)(var_core_value_sig4620.get(n.IUniverInstanceService)),
    var_core_value_sig8293 = (var_core_value_sig07FB = var_core_value_sig4620.get(r.SheetsSelectionsService).getCurrentLastSelection()) == null ? undefined : var_core_value_sig07FB.primary;
  if (!var_core_value_sigC85E || !var_core_value_sig8293) return;
  let {
      unitId: var_core_value_sig050D,
      subUnitId: var_core_value_sig37AE
    } = var_core_value_sigC85E,
    var_core_value_sig5B51 = var_core_value_sig8293.startRow,
    var_core_value_sig64FF = var_core_value_sig8293.startColumn,
    var_core_value_sig86F4 = var_core_value_sig4620.get(t.SheetsPivotTableAdaptorModel),
    var_core_value_sig9E0F = var_core_value_sig86F4.getPivotTableIdByCell(var_core_value_sig050D, var_core_value_sig37AE, var_core_value_sig5B51, var_core_value_sig64FF);
  if (!var_core_value_sig9E0F) return;
  let var_core_value_sig3A42 = var_core_value_sig4620.get(t.SheetsPivotTableConfigModel).getPivotTableConfig(var_core_value_sig050D, var_core_value_sig37AE, var_core_value_sig9E0F),
    var_core_value_sig8802 = var_core_value_sig86F4.getPivotItemRenderInfoCache(var_core_value_sig050D, var_core_value_sig37AE, var_core_value_sig9E0F);
  if (!var_core_value_sig3A42 || !var_core_value_sig8802) return;
  let var_core_value_sig95D5 = (0, t.resolvePivotSheetCell)(var_core_value_sig5B51, var_core_value_sig64FF, var_core_value_sig86F4.getPivotTableCellData(var_core_value_sig050D, var_core_value_sig37AE, var_core_value_sig5B51, var_core_value_sig64FF), var_core_value_sig8802),
    var_core_value_sigE027 = var_core_value_sig95D5 && (0, t.resolvePivotValueFilterTarget)(var_core_value_sig95D5, var_core_value_sig3A42.fieldsConfig);
  if (!var_core_value_sigE027) return;
  let var_core_value_sigE537 = var_core_value_sig3A42.fieldsConfig["dimension"][var_core_value_sigE027.targetFieldId],
    var_core_value_sig5D84 = var_core_value_sig3A42.fieldsConfig["valueFields"].flatMap(var_core_value_sig9DC0 => {
      let var_core_value_sig95F0 = var_core_value_sig3A42.fieldsConfig["measure"][var_core_value_sig9DC0];
      return var_core_value_sig95F0 ? [{
        id: var_core_value_sig95F0.id,
        label: var_core_value_sig95F0.displayName
      }] : [];
    });
  if (!var_core_value_sigE537 || var_core_value_sig5D84.length === 0) return;
  let var_core_value_sigD120 = (var_core_value_sig617E = var_core_value_sig3A42.fieldsConfig["valueFilter"]) == null || (var_core_value_sig617E = var_core_value_sig617E.find(var_core_value_sig9CCB => var_core_value_sig9CCB.fieldId === var_core_value_sigE027.targetFieldId)) == null ? undefined : var_core_value_sig617E.filterInfo;
  return {
    unitId: var_core_value_sig050D,
    subUnitId: var_core_value_sig37AE,
    pivotTableId: var_core_value_sig9E0F,
    targetFieldId: var_core_value_sigE027.targetFieldId,
    targetFieldName: var_core_value_sigE537.displayName,
    valueFields: var_core_value_sig5D84,
    defaultValueFieldId: var_core_value_sigE027.defaultValueFieldId,
    ...(var_core_value_sigD120 ? {
      currentFilter: Re(var_core_value_sigD120)
    } : {})
  };
}
const Ve = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.set-pivot-value-filter",
    async handler(var_core_value_sigAA05) {
      let var_core_value_sigC04C = Be(var_core_value_sigAA05);
      if (!var_core_value_sigC04C) return false;
      let var_core_value_sig2069 = var_core_value_sigAA05.get(e.IDialogService),
        var_core_value_sig5176 = var_core_value_sigAA05.get(n.LocaleService),
        var_core_value_sig71A1 = null,
        var_core_value_sig72AD = false,
        var_core_value_sig9ABE = false,
        var_core_value_sig8EF0 = () => {
          var_core_value_sig72AD || (var_core_value_sig72AD = true, var_core_value_sig71A1 == null || var_core_value_sig71A1.dispose(), var_core_value_sig71A1 = null);
        },
        var_core_value_sig234B = async var_core_value_sigE718 => {
          if (!var_core_value_sig9ABE) {
            var_core_value_sig9ABE = true;
            try {
              let var_core_value_sig5B69 = ze(var_core_value_sigAA05, var_core_value_sigC04C);
              if (!var_core_value_sig5B69 || var_core_value_sigE718 && (!var_core_value_sig5B69.fieldsConfig["measure"][var_core_value_sigE718.valueFieldId] || !var_core_value_sig5B69.fieldsConfig["valueFields"].includes(var_core_value_sigE718.valueFieldId) || !(0, l.isValueFilterOperator)(var_core_value_sigE718.operator))) return;
              await var_core_value_sigAA05.get(n.ICommandService).executeCommand(t.SetPivotValueFilterCommand["id"], {
                unitId: var_core_value_sigC04C.unitId,
                subUnitId: var_core_value_sigC04C.subUnitId,
                pivotTableId: var_core_value_sigC04C.pivotTableId,
                fieldId: var_core_value_sigC04C.targetFieldId,
                valueFilterInfo: var_core_value_sigE718 ? {
                  ...var_core_value_sigE718,
                  type: l.PivotFilterTypeEnum["ValueFilter"],
                  expected: Array.isArray(var_core_value_sigE718.expected) ? var_core_value_sigE718.expected["concat"]() : var_core_value_sigE718.expected
                } : undefined
              });
            } catch {} finally {
              var_core_value_sig8EF0();
            }
          }
        };
      try {
        var_core_value_sig71A1 = var_core_value_sig2069.open({
          id: "UNIVER_SHEET_PIVOT_VALUE_FILTER_DIALOG_ID",
          title: {
            title: var_core_value_sig5176.t("sheets-pivot-ui.valueFilter.dialogTitle")
          },
          draggable: true,
          mask: true,
          maskClosable: false,
          width: 420,
          children: {
            label: {
              name: E,
              props: {
                targetFieldId: var_core_value_sigC04C.targetFieldId,
                targetFieldName: var_core_value_sigC04C.targetFieldName,
                valueFields: var_core_value_sigC04C.valueFields,
                defaultValueFieldId: var_core_value_sigC04C.defaultValueFieldId,
                currentFilter: var_core_value_sigC04C.currentFilter,
                onConfirm: var_core_value_sig9F76 => var_core_value_sig234B(var_core_value_sig9F76),
                onClear: () => var_core_value_sig234B(undefined),
                onCancel: var_core_value_sig8EF0
              }
            }
          },
          onClose: var_core_value_sig8EF0
        });
      } catch {
        return var_core_value_sig8EF0(), false;
      }
      return true;
    }
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
    "hour-minute": "sheets-pivot-ui.dateGroup.hourMinute"
  };
function Ke(var_core_value_sig8169) {
  return {
    id: K.id,
    type: e.MenuItemType["BUTTON"],
    icon: "PivotTableIcon",
    hidden$: (0, e.getMenuHiddenObservable)(var_core_value_sig8169, n.UniverInstanceType["UNIVER_SHEET"]),
    disabled$: (0, d.getObservableWithExclusiveRange$)(var_core_value_sig8169, (0, d.getCurrentRangeDisable$)(var_core_value_sig8169, {
      workbookTypes: [r.WorkbookEditablePermission],
      worksheetTypes: [r.WorksheetViewPermission, r.WorksheetPivotTablePermission],
      rangeTypes: [r.RangeProtectionPermissionViewPoint]
    })),
    tooltip: "sheets-pivot-ui.title",
    title: "sheets-pivot-ui.title"
  };
}
function qe(var_core_value_sigC5FB) {
  return {
    id: He,
    type: e.MenuItemType["SUBITEMS"],
    title: "sheets-pivot-ui.dateGroup.title",
    hidden$: Xe(var_core_value_sigC5FB)
  };
}
function Je(var_core_value_sig5453) {
  return var_core_value_sigAEC8 => ({
    id: Ye(var_core_value_sig5453),
    commandId: Ae.id,
    type: e.MenuItemType["BUTTON"],
    title: Ge[var_core_value_sig5453],
    params: {
      dateType: var_core_value_sig5453
    },
    disabled$: Ze(var_core_value_sigAEC8, var_core_value_sig5453),
    activated$: Qe(var_core_value_sigAEC8, var_core_value_sig5453)
  });
}
function Ye(var_core_value_sig8725) {
  return "sheet.pivot.context-menu.date-group." + var_core_value_sig8725;
}
function Xe(var_core_value_sig513B) {
  return $e(var_core_value_sig513B).pipe((0, c.map)(() => !q(var_core_value_sig513B)));
}
function Ze(var_core_value_sig5501, var_core_value_sig7784) {
  return $e(var_core_value_sig5501).pipe((0, c.map)(() => {
    let var_core_value_sigB977 = q(var_core_value_sig5501);
    return !var_core_value_sigB977 || (0, t.isPivotDateGroupTypeDisabled)(var_core_value_sigB977.dateGroupContext, var_core_value_sig7784);
  }));
}
function Qe(var_core_value_sigB706, var_core_value_sig5FD01) {
  return $e(var_core_value_sigB706).pipe((0, c.map)(() => {
    let var_core_value_sig2949 = q(var_core_value_sigB706);
    return (var_core_value_sig2949 == null ? undefined : var_core_value_sig2949.dateGroupContext["currentDateType"]) === var_core_value_sig5FD01;
  }));
}
function $e(var_core_value_sig77E3) {
  return var_core_value_sig77E3.get(r.SheetsSelectionsService).selectionMoveEnd$["pipe"]((0, c.startWith)(null));
}
const et = t.PIVOT_DATE_GROUP_TYPES["map"](var_core_value_sigB071 => ({
  dateType: var_core_value_sigB071,
  id: Ye(var_core_value_sigB071),
  menuItemFactory: Je(var_core_value_sigB071)
}));
function tt(var_core_value_sig15FE) {
  return {
    id: Ue,
    type: e.MenuItemType["SUBITEMS"],
    title: "sheets-pivot-ui.showValuesAs.title",
    hidden$: it(var_core_value_sig15FE).pipe((0, c.map)(() => !Pe(var_core_value_sig15FE)))
  };
}
function nt(var_core_value_sigCF47) {
  return var_core_value_sig308A => ({
    id: rt(var_core_value_sigCF47.type),
    commandId: Ne.id,
    type: e.MenuItemType["BUTTON"],
    title: var_core_value_sigCF47.localeKey,
    params: {
      type: var_core_value_sigCF47.type
    },
    activated$: it(var_core_value_sig308A).pipe((0, c.map)(() => {
      let var_core_value_sigB008 = Pe(var_core_value_sig308A);
      return !!(var_core_value_sigB008 && (var_core_value_sigB008.currentShowDataAs["type"] ?? l.PivotShowAsTypeEnum["normal"]) === var_core_value_sigCF47.type);
    }))
  });
}
function rt(var_core_value_sigB0F9) {
  return "sheet.pivot.context-menu.show-data-as." + var_core_value_sigB0F9;
}
function it(var_core_value_sigAF12) {
  return var_core_value_sigAF12.get(r.SheetsSelectionsService).selectionMoveEnd$["pipe"]((0, c.startWith)(null));
}
const at = Me.map(var_core_value_sigC60C => ({
  rule: var_core_value_sigC60C,
  id: rt(var_core_value_sigC60C.type),
  menuItemFactory: nt(var_core_value_sigC60C)
}));
function ot(var_core_value_sig1C3C) {
  return {
    id: We,
    commandId: Ve.id,
    type: e.MenuItemType["BUTTON"],
    title: "sheets-pivot-ui.valueFilter.title",
    hidden$: var_core_value_sig1C3C.get(r.SheetsSelectionsService).selectionMoveEnd$["pipe"]((0, c.startWith)(null), (0, c.map)(() => !Be(var_core_value_sig1C3C)))
  };
}
const st = et.reduce((var_core_value_sig71CF, var_core_value_sigC341, var_core_value_sigBA47) => (var_core_value_sig71CF[var_core_value_sigC341.id] = {
    order: var_core_value_sigBA47 + 1,
    menuItemFactory: var_core_value_sigC341.menuItemFactory
  }, var_core_value_sig71CF), {}),
  ct = at.reduce((var_core_value_sig3DF7, var_core_value_sigD49F, var_core_value_sigCECC) => (var_core_value_sig3DF7[var_core_value_sigD49F.id] = {
    order: var_core_value_sigCECC + 1,
    menuItemFactory: var_core_value_sigD49F.menuItemFactory
  }, var_core_value_sig3DF7), {}),
  lt = {
    [e.RibbonDataGroup["ORGANIZATION"]]: {
      [K.id]: {
        order: 1,
        gridLayout: {
          row: 2,
          column: 1
        },
        menuItemFactory: Ke
      }
    },
    [e.ContextMenuPosition["MAIN_AREA"]]: {
      [e.ContextMenuGroup["DATA"]]: {
        [K.id]: {
          order: 1,
          menuItemFactory: Ke
        },
        [He]: {
          order: 2,
          menuItemFactory: qe,
          ...st
        },
        [Ue]: {
          order: 3,
          menuItemFactory: tt,
          ...ct
        },
        [We]: {
          order: 4,
          menuItemFactory: ot
        }
      }
    },
    [e.ContextMenuPosition["COL_HEADER"]]: {
      [e.ContextMenuGroup["DATA"]]: {
        [K.id]: {
          order: 1,
          menuItemFactory: Ke
        },
        [He]: {
          order: 2,
          menuItemFactory: qe,
          ...st
        }
      }
    }
  };
var ut = "@univerjs-pro/sheets-pivot-ui",
  dt = "1.0.0-insiders.20260907-70fc579";
const ft = {};
function pt(var_core_value_sig0F47) {
  let {
      filterItemInfo: var_core_value_sig6B29,
      unitId: var_core_value_sig28E2,
      subUnitId: var_core_value_sig1578
    } = var_core_value_sig0F47,
    {
      format: var_core_value_sig52ED,
      filterInfo: var_core_value_sig135F,
      sortInfo: var_core_value_sig416D
    } = var_core_value_sig6B29,
    var_core_value_sigAD5D = (0, e.useDependency)(n.ICommandService),
    var_core_value_sig1B8A = (0, e.useDependency)(n.LocaleService),
    var_core_value_sigFB18 = (0, e.useDependency)(e.IDialogService),
    var_core_value_sig703C = (0, e.useDependency)(n.IUniverInstanceService),
    var_core_value_sig96CF = (0, e.useObservable)(var_core_value_sig1B8A.direction$, var_core_value_sig1B8A.getDirection()),
    [var_core_value_sig49F1, var_core_value_sig2F7B] = (0, s.useState)(false),
    [var_core_value_sigB0DF, var_core_value_sig2E44] = (0, s.useState)(() => var_core_value_sig6B29 ? (var_core_value_sig135F == null ? undefined : var_core_value_sig135F.list) ?? var_core_value_sig6B29.items : []),
    [var_core_value_sig8560, var_core_value_sig138D] = (0, s.useState)(var_core_value_sigB0DF.length === (var_core_value_sig6B29 == null ? undefined : var_core_value_sig6B29.items["length"])),
    [var_core_value_sig1E26, var_core_value_sig5C6C] = (0, s.useState)(() => {
      if (var_core_value_sig6B29) return var_core_value_sig416D == null ? undefined : var_core_value_sig416D.type;
    }),
    var_core_value_sigBE85 = () => {
      var_core_value_sigFB18.close(b);
    };
  if ((0, s.useEffect)(() => {
    var_core_value_sigB0DF.length ? var_core_value_sig2F7B(false) : var_core_value_sig2F7B(true), var_core_value_sigB0DF.length === var_core_value_sig6B29.items["length"] ? var_core_value_sig138D(true) : var_core_value_sig138D(false);
  }, [var_core_value_sigB0DF, var_core_value_sig6B29.items["length"]]), (0, s.useEffect)(() => {
    let var_core_value_sig528D = var_core_value_sig703C.getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sig528D) return;
    let var_core_value_sigA309 = var_core_value_sig528D.activeSheet$["subscribe"](var_core_value_sig8721 => {
      var_core_value_sig8721 && var_core_value_sig8721.getSheetId() !== var_core_value_sig1578 && var_core_value_sigBE85();
    });
    return () => var_core_value_sigA309 == null ? undefined : var_core_value_sigA309.unsubscribe();
  }, [var_core_value_sig1578]), !var_core_value_sig6B29) return;
  let var_core_value_sig56DE = () => {
      var_core_value_sig2E44(var_core_value_sig8560 ? [] : var_core_value_sig6B29.items), var_core_value_sig138D(!var_core_value_sig8560);
    },
    var_core_value_sig0278 = var_core_value_sig9E20 => {
      var_core_value_sigB0DF.find(var_core_value_sig08BA => var_core_value_sig08BA === var_core_value_sig9E20) ? var_core_value_sig2E44(var_core_value_sigB0DF.filter(var_core_value_sigDBB5 => var_core_value_sigDBB5 !== var_core_value_sig9E20)) : var_core_value_sig2E44([...var_core_value_sigB0DF, var_core_value_sig9E20]);
    },
    var_core_value_sig08A6 = () => {
      let {
        tableFieldId: var_core_value_sig26BB,
        pivotTableId: var_core_value_sig19B4
      } = var_core_value_sig6B29;
      !var_core_value_sig26BB || !var_core_value_sig19B4 || (var_core_value_sigAD5D.executeCommand(t.SetPivotFilterCommand["id"], {
        unitId: var_core_value_sig28E2,
        subUnitId: var_core_value_sig1578,
        pivotTableId: var_core_value_sig19B4,
        tableFieldId: var_core_value_sig26BB,
        items: var_core_value_sigB0DF,
        isAll: var_core_value_sig8560
      }), var_core_value_sigBE85());
    },
    var_core_value_sig04E1 = () => {
      var_core_value_sigBE85();
    },
    var_core_value_sigC504 = () => {
      let {
        tableFieldId: var_core_value_sig218A,
        pivotTableId: var_core_value_sig14CB
      } = var_core_value_sig6B29;
      !var_core_value_sig218A || !var_core_value_sig14CB || (var_core_value_sig2E44(var_core_value_sig6B29.items), var_core_value_sig138D(true), var_core_value_sigAD5D.executeCommand(t.SetPivotFilterCommand["id"], {
        unitId: var_core_value_sig28E2,
        subUnitId: var_core_value_sig1578,
        pivotTableId: var_core_value_sig14CB,
        tableFieldId: var_core_value_sig218A,
        items: var_core_value_sig6B29.items,
        isAll: true
      }), var_core_value_sigBE85());
    },
    var_core_value_sig0515 = var_core_value_sigFDEE => {
      let {
        tableFieldId: var_core_value_sigA676,
        pivotTableId: var_core_value_sigC27E
      } = var_core_value_sig6B29;
      !var_core_value_sigA676 || !var_core_value_sigC27E || (var_core_value_sigAD5D.executeCommand(t.SetPivotSortCommand["id"], {
        unitId: var_core_value_sig28E2,
        subUnitId: var_core_value_sig1578,
        pivotTableId: var_core_value_sigC27E,
        tableFieldId: var_core_value_sigA676,
        info: {
          type: var_core_value_sigFDEE
        }
      }), var_core_value_sig5C6C(var_core_value_sigFDEE), var_core_value_sigBE85());
    },
    var_core_value_sig9F34 = Te(var_core_value_sig135F, {
      items: var_core_value_sig6B29.items
    });
  return (0, u.jsxs)("div", {
    dir: var_core_value_sig96CF,
    children: [(0, u.jsxs)("div", {
      className: "univer-flex",
      children: [(0, u.jsxs)("div", {
        className: (0, i.clsx)("univer-flex\x20univer-h-8\x20univer-w-[140px]\x20univer-flex-1\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center\x20univer-rounded-l-md\x20univer-text-center\x20univer-text-sm\x20hover:univer-bg-gray-100\x20rtl:univer-rounded-l-none\x20rtl:univer-rounded-r-md\x20dark:hover:!univer-bg-gray-700", i.borderClassName, {
          "univer-bg-gray-100\x20dark:!univer-bg-gray-700": var_core_value_sig1E26 === l.PivotDataFieldSortOperatorEnum["ascending"]
        }),
        onClick: () => var_core_value_sig0515(l.PivotDataFieldSortOperatorEnum["ascending"]),
        children: [(0, u.jsx)(m.AscendingIcon, {}), var_core_value_sig1B8A.t("sheets-pivot-ui.dialog.filter.ascending")]
      }), (0, u.jsxs)("div", {
        className: (0, i.clsx)("univer-flex univer-h-8 univer-w-[140px] univer-flex-1 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-r-md univer-text-center univer-text-sm hover:univer-bg-gray-100 rtl:univer-rounded-l-md rtl:univer-rounded-r-none dark:hover:!univer-bg-gray-700", i.borderClassName, {
          "univer-bg-gray-100\x20dark:!univer-bg-gray-700": var_core_value_sig1E26 === l.PivotDataFieldSortOperatorEnum["descending"]
        }),
        onClick: () => var_core_value_sig0515(l.PivotDataFieldSortOperatorEnum["descending"]),
        children: [(0, u.jsx)(m.DescendingIcon, {}), var_core_value_sig1B8A.t("sheets-pivot-ui.dialog.filter.descending")]
      })]
    }), (0, u.jsx)("div", {
      className: (0, i.clsx)("univer-mx-0 univer-mb-4 univer-mt-3 univer-h-[300px] univer-rounded-lg univer-p-2", i.borderClassName),
      children: (0, u.jsxs)("div", {
        className: (0, i.clsx)("univer-h-full univer-overflow-y-auto", i.scrollbarClassName),
        children: [(0, u.jsx)("div", {
          className: "univer-mb-1 univer-box-border univer-h-7 univer-py-[5px] univer-pl-[22px] univer-pr-1 univer-text-sm rtl:univer-pl-1 rtl:univer-pr-[22px]",
          children: (0, u.jsx)(i.Checkbox, {
            checked: var_core_value_sig8560,
            onChange: var_core_value_sig56DE,
            indeterminate: var_core_value_sigB0DF.length > 0 && var_core_value_sigB0DF.length < var_core_value_sig6B29.items["length"],
            children: var_core_value_sig1B8A.t("sheets-pivot-ui.dialog.filter.selectAll")
          })
        }), var_core_value_sig6B29.items["map"]((var_core_value_sigA70D, var_core_value_sigCE10) => {
          var var_core_value_sigA3861;
          let var_core_value_sigCD82 = var_core_value_sigA70D,
            var_core_value_sig44DD = (var_core_value_sigA3861 = var_core_value_sig6B29.itemTypes) == null ? undefined : var_core_value_sigA3861[var_core_value_sigCE10];
          return var_core_value_sig44DD === l.PivotDataFieldDataTypeEnum["blank"] ? var_core_value_sigCD82 = var_core_value_sig1B8A.t("sheets-pivot-ui.dialog.filter.blank") : var_core_value_sig44DD === l.PivotDataFieldDataTypeEnum["date"] && (var_core_value_sigCD82 = var_core_value_sig52ED ? n.numfmt["format"](var_core_value_sig52ED, Number(var_core_value_sigCD82)) : var_core_value_sigCD82), (0, u.jsx)("div", {
            className: "univer-mb-1\x20univer-box-border\x20univer-h-7\x20univer-py-1\x20univer-pl-[22px]\x20univer-pr-1\x20univer-text-sm\x20rtl:univer-pl-1\x20rtl:univer-pr-[22px]",
            children: (0, u.jsx)(i.Checkbox, {
              checked: !!var_core_value_sigB0DF.find(var_core_value_sigCFAC => var_core_value_sigCFAC === var_core_value_sigA70D),
              onChange: () => var_core_value_sig0278(var_core_value_sigA70D),
              contentClassName: "univer-max-w-[200px] univer-truncate",
              children: var_core_value_sigCD82
            })
          }, var_core_value_sigA70D);
        })]
      })
    }), (0, u.jsxs)(i.ActionRow, {
      className: "univer-flex univer-items-center univer-justify-between",
      children: [(0, u.jsx)("div", {
        className: "univer-cursor-pointer univer-text-xs univer-text-primary-600",
        children: (0, u.jsx)(i.Button, {
          variant: "link",
          disabled: var_core_value_sig9F34 === "NotFilter",
          onClick: var_core_value_sigC504,
          children: var_core_value_sig1B8A.t("sheets-pivot-ui.dialog.filter.clearFilter")
        })
      }), (0, u.jsxs)(i.ActionRow, {
        className: "univer-flex univer-flex-1 univer-items-center univer-gap-3",
        children: [(0, u.jsx)(i.Button, {
          onClick: var_core_value_sig04E1,
          children: var_core_value_sig1B8A.t("sheets-pivot-ui.dialog.filter.cancel")
        }), (0, u.jsx)(i.Button, {
          variant: "primary",
          disabled: var_core_value_sig49F1,
          onClick: var_core_value_sig08A6,
          children: var_core_value_sig1B8A.t("sheets-pivot-ui.dialog.filter.confirm")
        })]
      })]
    })]
  });
}
const mt = ({
    handlePatternChange: var_core_value_sig0247
  }) => {
    let var_core_value_sig6030 = (0, e.useDependency)(n.LocaleService);
    return (0, s.useEffect)(() => {
      var_core_value_sig0247("");
    }, []), (0, u.jsx)("div", {
      className: "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
      children: var_core_value_sig6030.t("sheets-pivot-ui.dialog.numfmt.generalDesc")
    });
  },
  ht = ({
    originPattern: var_core_value_sig0137,
    handlePatternChange: var_core_value_sig14F3
  }) => {
    let var_core_value_sig34E8 = (0, e.useDependency)(n.LocaleService),
      var_core_value_sigCFE7 = n.currencySymbols["map"](var_core_value_sig96FA => ({
        label: var_core_value_sig96FA,
        value: var_core_value_sig96FA
      })),
      [var_core_value_sigECBC, var_core_value_sig65D2] = (0, s.useState)(() => U(var_core_value_sig0137 || "", 2)),
      [var_core_value_sig4306, var_core_value_sigFCD3] = (0, s.useState)(() => me(var_core_value_sig0137 ?? "") || var_core_value_sigCFE7[0].value);
    return (0, s.useEffect)(() => {
      var_core_value_sig14F3(W('_("' + var_core_value_sig4306 + "\x22*\x20#,##0" + (var_core_value_sigECBC > 0 ? ".0" : "") + "_)", var_core_value_sigECBC));
    }, []), (0, u.jsxs)("div", {
      className: "univer-mt-5",
      children: [(0, u.jsxs)("div", {
        className: "univer-flex univer-items-center univer-justify-between",
        children: [(0, u.jsxs)("div", {
          className: "univer-w-[136px]",
          children: [(0, u.jsx)("div", {
            className: "univer-mb-2 univer-text-sm univer-font-medium",
            children: var_core_value_sig34E8.t("sheets-pivot-ui.dialog.numfmt.decimalPlaces")
          }), (0, u.jsx)(i.InputNumber, {
            className: "univer-box-border univer-h-8",
            value: var_core_value_sigECBC,
            max: 20,
            min: 0,
            onChange: var_core_value_sigAB68 => {
              let var_core_value_sig040A = var_core_value_sigAB68 ?? 0;
              var_core_value_sig65D2(var_core_value_sig040A), var_core_value_sig14F3(W('_("' + var_core_value_sig4306 + "\x22*\x20#,##0" + (var_core_value_sig040A > 0 ? ".0" : "") + "_)", var_core_value_sig040A));
            }
          })]
        }), (0, u.jsxs)("div", {
          className: "univer-w-[136px]",
          children: [(0, u.jsx)("div", {
            className: "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
            children: var_core_value_sig34E8.t("sheets-pivot-ui.dialog.numfmt.currencyTypes")
          }), (0, u.jsx)(i.Select, {
            options: var_core_value_sigCFE7,
            value: var_core_value_sig4306,
            onChange: var_core_value_sig2AE0 => {
              var_core_value_sigFCD3(var_core_value_sig2AE0), var_core_value_sig14F3(W('_("' + var_core_value_sig2AE0 + '"* #,##0' + (var_core_value_sigECBC > 0 ? ".0" : "") + "_)", var_core_value_sigECBC));
            }
          })]
        })]
      }), (0, u.jsx)("div", {
        className: "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
        children: var_core_value_sig34E8.t("sheets-pivot-ui.dialog.numfmt.accountingDesc")
      })]
    });
  },
  gt = ({
    originPattern: var_core_value_sig147A,
    handlePatternChange: var_core_value_sig829F
  }) => {
    let var_core_value_sig534C = (0, e.useDependency)(n.LocaleService),
      var_core_value_sigABB7 = n.currencySymbols["map"](var_core_value_sigC349 => ({
        label: var_core_value_sigC349,
        value: var_core_value_sigC349
      })),
      [var_core_value_sig9071, var_core_value_sig01A9] = (0, s.useState)(() => U(var_core_value_sig147A || "", 2)),
      [var_core_value_sig9477, var_core_value_sig917C] = (0, s.useState)(() => me(var_core_value_sig147A ?? "") || var_core_value_sigABB7[0].value),
      var_core_value_sig27E2 = B.map(var_core_value_sig9D96 => ({
        label: var_core_value_sig9D96.label(var_core_value_sig9477),
        value: var_core_value_sig9D96.suffix(var_core_value_sig9477),
        color: var_core_value_sig9D96.color
      })),
      [var_core_value_sig10D7, var_core_value_sig5A1A] = (0, s.useState)(() => {
        var var_core_value_sig2776;
        return ((var_core_value_sig2776 = var_core_value_sig27E2.find(var_core_value_sig237B => (0, n.isPatternEqualWithoutDecimal)(var_core_value_sig237B.value, var_core_value_sig147A ?? ""))) == null ? undefined : var_core_value_sig2776.value) || var_core_value_sig27E2[0].value;
      });
    return (0, s.useEffect)(() => {
      var_core_value_sig829F(W(var_core_value_sig10D7, var_core_value_sig9071));
    }, []), (0, u.jsxs)("div", {
      className: "univer-mt-5",
      children: [(0, u.jsxs)("div", {
        className: "univer-flex univer-items-center univer-justify-between",
        children: [(0, u.jsxs)("div", {
          className: "univer-w-[136px]",
          children: [(0, u.jsx)("div", {
            className: "univer-mb-2 univer-text-sm univer-font-medium",
            children: var_core_value_sig534C.t("sheets-pivot-ui.dialog.numfmt.decimalPlaces")
          }), (0, u.jsx)(i.InputNumber, {
            className: "univer-box-border univer-h-8",
            value: var_core_value_sig9071,
            max: 20,
            min: 0,
            onChange: var_core_value_sig6FB2 => {
              var_core_value_sig6FB2 && (var_core_value_sig01A9(var_core_value_sig6FB2), var_core_value_sig829F(W(var_core_value_sig10D7, var_core_value_sig6FB2)));
            }
          })]
        }), (0, u.jsxs)("div", {
          className: "univer-w-[136px]",
          children: [(0, u.jsx)("div", {
            className: "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
            children: var_core_value_sig534C.t("sheets-pivot-ui.dialog.numfmt.currencyTypes")
          }), (0, u.jsx)(i.Select, {
            options: var_core_value_sigABB7,
            value: var_core_value_sig9477,
            onChange: var_core_value_sigEB43 => {
              var_core_value_sig917C(var_core_value_sigEB43);
              let var_core_value_sig4186 = B.map(var_core_value_sigFEAB => ({
                label: var_core_value_sigFEAB.label(var_core_value_sigEB43),
                value: var_core_value_sigFEAB.suffix(var_core_value_sigEB43),
                color: var_core_value_sigFEAB.color
              }));
              var_core_value_sig5A1A(var_core_value_sig4186[0].value), var_core_value_sig829F(W(var_core_value_sig4186[0].value, var_core_value_sig9071));
            }
          })]
        })]
      }), (0, u.jsxs)("div", {
        className: "univer-mt-4",
        children: [(0, u.jsx)("div", {
          className: "univer-mb-2 univer-text-sm univer-font-medium",
          children: var_core_value_sig534C.t("sheets-pivot-ui.dialog.numfmt.negativeNumberTypes")
        }), (0, u.jsx)(i.SelectList, {
          className: "univer-rounded-lg univer-p-2",
          options: var_core_value_sig27E2,
          value: var_core_value_sig10D7,
          onChange: var_core_value_sigF963 => {
            var_core_value_sig5A1A(var_core_value_sigF963), var_core_value_sig829F(W(var_core_value_sigF963, var_core_value_sig9071));
          }
        }), (0, u.jsx)("div", {
          className: "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
          children: var_core_value_sig534C.t("sheets-pivot-ui.dialog.numfmt.currencyDesc")
        })]
      })]
    });
  },
  _t = ({
    originPattern: var_core_value_sig77D2,
    handlePatternChange: var_core_value_sig625E
  }) => {
    let var_core_value_sig6F04 = (0, e.useDependency)(n.LocaleService),
      var_core_value_sig48DA = R.map(var_core_value_sigB608 => ({
        label: var_core_value_sigB608.label,
        value: var_core_value_sigB608.suffix
      })),
      [var_core_value_sigD327, var_core_value_sig6694] = (0, s.useState)(() => {
        if (var_core_value_sig77D2) {
          let var_core_value_sigE347 = var_core_value_sig48DA.find(var_core_value_sigB098 => var_core_value_sigB098.value === var_core_value_sig77D2);
          if (var_core_value_sigE347) return var_core_value_sigE347.value;
        }
        return var_core_value_sig48DA[0].value;
      });
    return (0, s.useEffect)(() => {
      var_core_value_sig625E(var_core_value_sigD327);
    }, []), (0, u.jsx)("div", {
      className: "univer-mt-5",
      children: (0, u.jsxs)("div", {
        className: "univer-mt-5",
        children: [(0, u.jsx)("div", {
          className: "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
          children: var_core_value_sig6F04.t("sheets-pivot-ui.dialog.numfmt.dateTypes")
        }), (0, u.jsx)("div", {
          children: (0, u.jsx)(i.SelectList, {
            className: "univer-rounded-lg univer-p-2",
            options: var_core_value_sig48DA,
            value: var_core_value_sigD327,
            onChange: var_core_value_sigF866 => {
              var_core_value_sig6694(var_core_value_sigF866), var_core_value_sig625E(var_core_value_sigF866);
            }
          })
        }), (0, u.jsx)("div", {
          className: "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
          children: var_core_value_sig6F04.t("sheets-pivot-ui.dialog.numfmt.dateDesc")
        })]
      })
    });
  },
  vt = ({
    originPattern: var_core_value_sig2A21,
    handlePatternChange: var_core_value_sig0836
  }) => {
    let var_core_value_sigD95C = (0, e.useDependency)(n.LocaleService),
      [var_core_value_sig692E, var_core_value_sig3FAF] = (0, s.useState)(() => U(var_core_value_sig2A21 || "", 0)),
      var_core_value_sig378B = z.map(var_core_value_sig5EFB => ({
        label: var_core_value_sig5EFB.label,
        value: var_core_value_sig5EFB.suffix,
        color: var_core_value_sig5EFB.color
      })),
      [var_core_value_sigDE50, var_core_value_sig3094] = (0, s.useState)(() => {
        let var_core_value_sig3A85 = var_core_value_sig378B.find(var_core_value_sig3C5B => (0, n.isPatternEqualWithoutDecimal)(var_core_value_sig3C5B.value, var_core_value_sig2A21 || ""));
        return (var_core_value_sig3A85 == null ? undefined : var_core_value_sig3A85.value) || var_core_value_sig378B[0].value;
      });
    return (0, s.useEffect)(() => {
      var_core_value_sig0836(W(var_core_value_sigDE50, Number(var_core_value_sig692E || 0)));
    }, []), (0, u.jsxs)("div", {
      className: "univer-mt-5",
      children: [(0, u.jsx)("div", {
        className: "univer-flex\x20univer-items-center\x20univer-justify-between",
        children: (0, u.jsxs)("div", {
          className: "univer-w-[136px]",
          children: [(0, u.jsx)("div", {
            className: "univer-mb-2 univer-text-sm univer-font-medium",
            children: var_core_value_sigD95C.t("sheets-pivot-ui.dialog.numfmt.decimalPlaces")
          }), (0, u.jsx)(i.InputNumber, {
            className: "univer-box-border\x20univer-h-8",
            value: var_core_value_sig692E,
            max: 20,
            min: 0,
            onChange: var_core_value_sig2682 => {
              var_core_value_sig2682 && (var_core_value_sig3FAF(var_core_value_sig2682), var_core_value_sig0836(W(var_core_value_sigDE50, Number(var_core_value_sig2682))));
            }
          })]
        })
      }), (0, u.jsxs)("div", {
        className: "univer-mt-4",
        children: [(0, u.jsx)("div", {
          className: "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
          children: var_core_value_sigD95C.t("sheets-pivot-ui.dialog.numfmt.negativeNumberTypes")
        }), (0, u.jsx)(i.SelectList, {
          className: "univer-rounded-lg univer-p-2",
          options: var_core_value_sig378B,
          value: var_core_value_sigDE50,
          onChange: var_core_value_sig4BB5 => {
            var_core_value_sig3FAF(U(var_core_value_sig4BB5, 0)), var_core_value_sig3094(var_core_value_sig4BB5), var_core_value_sig0836(var_core_value_sig4BB5);
          }
        }), (0, u.jsx)("div", {
          className: "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
          children: var_core_value_sigD95C.t("sheets-pivot-ui.dialog.numfmt.thousandthPercentileDesc")
        })]
      })]
    });
  },
  yt = ({
    unitId: var_core_value_sig86CC,
    subUnitId: var_core_value_sig7868,
    pivotTableId: var_core_value_sig9921,
    tableFieldId: var_core_value_sig59BF,
    originPattern: var_core_value_sigF001,
    tableFieldInfo: var_core_value_sigE511,
    dataFieldInfo: var_core_value_sig1C81
  }) => {
    let var_core_value_sig2C6A = (0, e.useDependency)(n.LocaleService),
      var_core_value_sig7207 = (0, e.useDependency)(e.IDialogService),
      var_core_value_sig297F = var_core_value_sig2C6A.getDirection(),
      var_core_value_sigA95A = (0, s.useMemo)(() => [{
        label: "sheets-pivot-ui.dialog.numfmt.general",
        component: mt,
        key: "sheet.numfmt.general"
      }, {
        label: "sheets-pivot-ui.dialog.numfmt.accounting",
        component: ht,
        key: "sheet.numfmt.accounting"
      }, {
        label: "sheets-pivot-ui.dialog.numfmt.currency",
        component: gt,
        key: "sheet.numfmt.currency"
      }, {
        label: "sheets-pivot-ui.dialog.numfmt.date",
        component: _t,
        key: "sheet.numfmt.date"
      }, {
        label: "sheets-pivot-ui.dialog.numfmt.thousandthPercentile",
        component: vt,
        key: "sheet.numfmt.thousandthPercentile"
      }].map(var_core_value_sig200B => ({
        ...var_core_value_sig200B,
        label: var_core_value_sig2C6A.t(var_core_value_sig200B.label)
      })), [var_core_value_sig2C6A]),
      var_core_value_sig94D6 = var_core_value_sigA95A.map(var_core_value_sig6709 => ({
        label: var_core_value_sig6709.label,
        value: var_core_value_sig6709.key
      })),
      [var_core_value_sigC22E, var_core_value_sig2321] = (0, s.useState)(() => [he, ge, _e, ye, xe].reduce((var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1) => var_core_value_sig3863 || (var_core_value_sigC97C(var_core_value_sigF001 ?? "") ? var_core_value_sigA95A[var_core_value_sigC4B1].key : ""), "") || var_core_value_sigA95A[0].key),
      [var_core_value_sigFF33, var_core_value_sig16E0] = (0, s.useState)(var_core_value_sigF001),
      var_core_value_sig213C = var_core_value_sig52CA => var_core_value_sig16E0(var_core_value_sig52CA),
      var_core_value_sig31F8 = var_core_value_sigC030 => {
        var_core_value_sig2321(var_core_value_sigC030);
      },
      var_core_value_sig6905 = var_core_value_sig88F6 => ({
        id: S,
        title: {
          title: var_core_value_sig2C6A.t("sheets-pivot-ui.fieldSettings")
        },
        draggable: true,
        mask: false,
        maskClosable: false,
        width: 400,
        children: {
          label: x,
          tableFieldId: var_core_value_sig59BF,
          pivotTableId: var_core_value_sig9921,
          unitId: var_core_value_sig86CC,
          subUnitId: var_core_value_sig7868,
          tableFieldInfo: var_core_value_sigE511,
          dataFieldInfo: var_core_value_sig1C81,
          key: "field-setting-" + (var_core_value_sig59BF || ""),
          closeFn: () => {
            var_core_value_sig7207.close(S);
          },
          format: var_core_value_sig88F6 ? var_core_value_sigFF33 : ""
        },
        onClose: () => {
          var_core_value_sig7207.close(S);
        }
      }),
      var_core_value_sigC3C0 = () => {
        var_core_value_sig7207.close(w);
        let var_core_value_sig37DB = var_core_value_sig6905(false);
        var_core_value_sig7207.open(var_core_value_sig37DB);
      };
    return (0, u.jsxs)("div", {
      dir: var_core_value_sig297F,
      children: [(0, u.jsx)("div", {
        className: "univer-flex",
        children: (0, u.jsxs)("div", {
          className: "univer-mb-5 univer-flex univer-h-6 univer-cursor-pointer univer-items-center univer-text-base univer-font-medium univer-leading-6",
          onClick: var_core_value_sigC3C0,
          children: [(0, u.jsx)(m.ArrowLeftIcon, {}), var_core_value_sig2C6A.t("sheets-pivot-ui.dialog.numfmt.fieldSetting")]
        })
      }), (0, u.jsx)("div", {
        className: "univer-mb-2 univer-h-5 univer-text-sm univer-font-medium univer-leading-5",
        children: var_core_value_sig2C6A.t("sheets-pivot-ui.dialog.numfmt.formatTypes")
      }), (0, u.jsx)("div", {
        children: (0, u.jsx)(i.Select, {
          className: "univer-w-full",
          value: var_core_value_sigC22E,
          options: var_core_value_sig94D6,
          onChange: var_core_value_sig5542 => var_core_value_sig31F8(var_core_value_sig5542)
        })
      }), (0, u.jsxs)("div", {
        children: [var_core_value_sigC22E === "sheet.numfmt.general" && (0, u.jsx)(mt, {
          originPattern: var_core_value_sigF001,
          handlePatternChange: var_core_value_sig213C
        }), var_core_value_sigC22E === "sheet.numfmt.accounting" && (0, u.jsx)(ht, {
          originPattern: var_core_value_sigF001,
          handlePatternChange: var_core_value_sig213C
        }), var_core_value_sigC22E === "sheet.numfmt.currency" && (0, u.jsx)(gt, {
          originPattern: var_core_value_sigF001,
          handlePatternChange: var_core_value_sig213C
        }), var_core_value_sigC22E === "sheet.numfmt.date" && (0, u.jsx)(_t, {
          originPattern: var_core_value_sigF001,
          handlePatternChange: var_core_value_sig213C
        }), var_core_value_sigC22E === "sheet.numfmt.thousandthPercentile" && (0, u.jsx)(vt, {
          originPattern: var_core_value_sigF001,
          handlePatternChange: var_core_value_sig213C
        })]
      }), (0, u.jsxs)(i.ActionRow, {
        className: "univer-mt-2 univer-flex univer-justify-end",
        children: [(0, u.jsx)(i.Button, {
          onClick: var_core_value_sigC3C0,
          children: var_core_value_sig2C6A.t("sheets-pivot-ui.dialog.numfmt.cancel")
        }), (0, u.jsx)(i.Button, {
          className: "univer-ml-3 rtl:univer-ml-0 rtl:univer-mr-3",
          variant: "primary",
          onClick: () => {
            var_core_value_sig7207.close(w);
            let var_core_value_sigE0A9 = var_core_value_sig6905(true);
            var_core_value_sig7207.open(var_core_value_sigE0A9);
          },
          children: var_core_value_sig2C6A.t("sheets-pivot-ui.dialog.numfmt.confirm")
        })]
      })]
    });
  },
  bt = [{
    label: "sheets-pivot-ui.config.pageDownThenOver",
    value: "false"
  }, {
    label: "sheets-pivot-ui.config.pageOverThenDown",
    value: "true"
  }],
  xt = [{
    label: "sheets-pivot-ui.config.layoutTabular",
    value: String(l.PivotLayoutTypeEnum["tabular"])
  }, {
    label: "sheets-pivot-ui.config.layoutCompact",
    value: String(l.PivotLayoutTypeEnum["compact"])
  }, {
    label: "sheets-pivot-ui.config.layoutOutline",
    value: String(l.PivotLayoutTypeEnum["outline"])
  }],
  St = [{
    label: "sheets-pivot-ui.config.rowSubtotalTop",
    value: String(l.PivotSubtotalPositionEnum["top"])
  }, {
    label: "sheets-pivot-ui.config.rowSubtotalBottom",
    value: String(l.PivotSubtotalPositionEnum["bottom"])
  }];
function Ct(var_core_value_sig1F39) {
  let {
      unitId: var_core_value_sig9256,
      subUnitId: var_core_value_sig98A0,
      pivotTableId: var_core_value_sig3EBD
    } = var_core_value_sig1F39,
    var_core_value_sig1AC3 = (0, e.useDependency)(n.ICommandService),
    var_core_value_sig66B8 = (0, e.useDependency)(n.ILogService),
    var_core_value_sig4C7F = (0, e.useDependency)(n.LocaleService),
    var_core_value_sig2543 = (0, e.useDependency)(t.SheetsPivotTableConfigModel),
    [var_core_value_sigB230, var_core_value_sig407E] = (0, s.useState)(() => {
      var var_core_value_sigA73E, var_core_value_sig7620;
      let var_core_value_sigB9FC = var_core_value_sig2543.getPivotTableConfig(var_core_value_sig9256, var_core_value_sig98A0, var_core_value_sig3EBD),
        var_core_value_sig5055 = (var_core_value_sigB9FC == null || (var_core_value_sigA73E = var_core_value_sigB9FC.fieldsConfig) == null ? undefined : var_core_value_sigA73E.options) ?? {};
      return {
        showRowSubtotal: var_core_value_sig5055.showRowSubtotal ?? true,
        showRowGrandTotal: var_core_value_sig5055.showRowGrandTotal ?? true,
        showColSubtotal: var_core_value_sig5055.showColSubtotal ?? true,
        showColGrandTotal: var_core_value_sig5055.showColGrandTotal ?? true,
        pageWrap: var_core_value_sig5055.pageWrap ?? 1,
        pageOverThenDown: var_core_value_sig5055.pageOverThenDown ?? false,
        repeatRowLabels: var_core_value_sig5055.repeatRowLabels ?? false,
        repeatColLabels: var_core_value_sig5055.repeatColLabels ?? false,
        layout: (var_core_value_sigB9FC == null || (var_core_value_sig7620 = var_core_value_sigB9FC.fieldsConfig) == null ? undefined : var_core_value_sig7620.layout) ?? l.PivotLayoutTypeEnum["tabular"],
        rowSubtotalPosition: var_core_value_sig5055.rowSubtotalPosition ?? l.PivotSubtotalPositionEnum["top"]
      };
    }),
    var_core_value_sig88CB = var_core_value_sig3801 => {
      let var_core_value_sig45F0 = {
        unitId: var_core_value_sig9256,
        subUnitId: var_core_value_sig98A0,
        pivotTableId: var_core_value_sig3EBD,
        options: var_core_value_sig3801
      };
      var_core_value_sig1AC3.executeCommand(t.SetPivotOptionCommand["id"], var_core_value_sig45F0).catch(var_core_value_sig1BD9 => var_core_value_sig66B8.error("[PivotConfigPanel]", var_core_value_sig1BD9)), var_core_value_sig407E(var_core_value_sigE43E => ({
        ...var_core_value_sigE43E,
        ...var_core_value_sig3801
      }));
    },
    var_core_value_sigD615 = var_core_value_sigBC91 => {
      let var_core_value_sigCB88 = {
        unitId: var_core_value_sig9256,
        subUnitId: var_core_value_sig98A0,
        pivotTableId: var_core_value_sig3EBD,
        layout: var_core_value_sigBC91
      };
      var_core_value_sig1AC3.executeCommand(t.SetPivotLayoutCommand["id"], var_core_value_sigCB88).catch(var_core_value_sigA937 => var_core_value_sig66B8.error("[PivotConfigPanel]", var_core_value_sigA937)), var_core_value_sig407E(var_core_value_sigCAD5 => ({
        ...var_core_value_sigCAD5,
        layout: var_core_value_sigBC91
      }));
    };
  return (0, u.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-4 univer-p-4",
    children: [(0, u.jsxs)("section", {
      children: [(0, u.jsx)("div", {
        className: "univer-mb-2 univer-text-sm univer-font-medium univer-text-gray-600",
        children: var_core_value_sig4C7F.t("sheets-pivot-ui.config.displaySection")
      }), (0, u.jsxs)("div", {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
        children: [(0, u.jsxs)("div", {
          className: "univer-flex univer-items-center univer-justify-between univer-gap-2",
          children: [(0, u.jsx)("span", {
            className: "univer-text-sm univer-text-gray-600",
            children: var_core_value_sig4C7F.t("sheets-pivot-ui.config.layout")
          }), (0, u.jsx)(i.Select, {
            className: "univer-w-36",
            value: String(var_core_value_sigB230.layout),
            options: xt.map(var_core_value_sig8D65 => ({
              ...var_core_value_sig8D65,
              label: var_core_value_sig4C7F.t(var_core_value_sig8D65.label)
            })),
            onChange: var_core_value_sig8122 => var_core_value_sigD615(Number(var_core_value_sig8122))
          })]
        }), (0, u.jsxs)("label", {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
          children: [(0, u.jsx)(i.Checkbox, {
            checked: var_core_value_sigB230.repeatRowLabels,
            disabled: var_core_value_sigB230.layout === l.PivotLayoutTypeEnum["compact"],
            onChange: var_core_value_sigEDC6 => var_core_value_sig88CB({
              repeatRowLabels: !!var_core_value_sigEDC6
            })
          }), var_core_value_sig4C7F.t("sheets-pivot-ui.config.repeatRowLabels")]
        }), (0, u.jsxs)("label", {
          className: "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-gap-2\x20univer-text-sm\x20univer-text-gray-600",
          children: [(0, u.jsx)(i.Checkbox, {
            checked: var_core_value_sigB230.repeatColLabels,
            onChange: var_core_value_sig611A => var_core_value_sig88CB({
              repeatColLabels: !!var_core_value_sig611A
            })
          }), var_core_value_sig4C7F.t("sheets-pivot-ui.config.repeatColLabels")]
        })]
      })]
    }), (0, u.jsxs)("section", {
      children: [(0, u.jsx)("div", {
        className: (0, i.clsx)("univer-mb-2 univer-text-sm univer-font-medium univer-text-gray-600"),
        children: var_core_value_sig4C7F.t("sheets-pivot-ui.config.totalsSection")
      }), (0, u.jsxs)("div", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [(0, u.jsxs)("label", {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
          children: [(0, u.jsx)(i.Checkbox, {
            checked: var_core_value_sigB230.showRowSubtotal,
            onChange: var_core_value_sig6BD9 => var_core_value_sig88CB({
              showRowSubtotal: !!var_core_value_sig6BD9
            })
          }), var_core_value_sig4C7F.t("sheets-pivot-ui.config.showRowSubtotal")]
        }), var_core_value_sigB230.layout === l.PivotLayoutTypeEnum["outline"] && (0, u.jsxs)("div", {
          className: "univer-flex univer-items-center univer-justify-between univer-gap-2",
          children: [(0, u.jsx)("span", {
            className: "univer-text-sm univer-text-gray-600",
            children: var_core_value_sig4C7F.t("sheets-pivot-ui.config.rowSubtotalPosition")
          }), (0, u.jsx)(i.Select, {
            className: "univer-w-36",
            value: String(var_core_value_sigB230.rowSubtotalPosition),
            options: St.map(var_core_value_sig7E56 => ({
              ...var_core_value_sig7E56,
              label: var_core_value_sig4C7F.t(var_core_value_sig7E56.label)
            })),
            onChange: var_core_value_sig4161 => var_core_value_sig88CB({
              rowSubtotalPosition: Number(var_core_value_sig4161)
            })
          })]
        }), (0, u.jsxs)("label", {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
          children: [(0, u.jsx)(i.Checkbox, {
            checked: var_core_value_sigB230.showRowGrandTotal,
            onChange: var_core_value_sig7580 => var_core_value_sig88CB({
              showRowGrandTotal: !!var_core_value_sig7580
            })
          }), var_core_value_sig4C7F.t("sheets-pivot-ui.config.showRowGrandTotal")]
        }), (0, u.jsxs)("label", {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
          children: [(0, u.jsx)(i.Checkbox, {
            checked: var_core_value_sigB230.showColSubtotal,
            onChange: var_core_value_sig1F18 => var_core_value_sig88CB({
              showColSubtotal: !!var_core_value_sig1F18
            })
          }), var_core_value_sig4C7F.t("sheets-pivot-ui.config.showColSubtotal")]
        }), (0, u.jsxs)("label", {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
          children: [(0, u.jsx)(i.Checkbox, {
            checked: var_core_value_sigB230.showColGrandTotal,
            onChange: var_core_value_sigD5A0 => var_core_value_sig88CB({
              showColGrandTotal: !!var_core_value_sigD5A0
            })
          }), var_core_value_sig4C7F.t("sheets-pivot-ui.config.showColGrandTotal")]
        })]
      })]
    }), (0, u.jsxs)("section", {
      children: [(0, u.jsx)("div", {
        className: "univer-mb-2\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-600",
        children: var_core_value_sig4C7F.t("sheets-pivot-ui.config.pageSection")
      }), (0, u.jsxs)("div", {
        className: "univer-flex univer-flex-col univer-gap-3",
        children: [(0, u.jsxs)("div", {
          className: "univer-flex univer-items-center univer-justify-between univer-gap-2",
          children: [(0, u.jsx)("span", {
            className: "univer-text-sm\x20univer-text-gray-600",
            children: var_core_value_sig4C7F.t("sheets-pivot-ui.config.pageWrap")
          }), (0, u.jsx)(i.InputNumber, {
            className: "univer-w-24",
            value: var_core_value_sigB230.pageWrap,
            min: 1,
            max: 20,
            onChange: var_core_value_sig81B2 => {
              let var_core_value_sigA0A5 = Number(var_core_value_sig81B2);
              Number.isFinite(var_core_value_sigA0A5) && var_core_value_sigA0A5 >= 1 && var_core_value_sig88CB({
                pageWrap: var_core_value_sigA0A5
              });
            }
          })]
        }), (0, u.jsxs)("div", {
          className: "univer-flex univer-items-center univer-justify-between univer-gap-2",
          children: [(0, u.jsx)("span", {
            className: "univer-text-sm univer-text-gray-600",
            children: var_core_value_sig4C7F.t("sheets-pivot-ui.config.pageDirection")
          }), (0, u.jsx)(i.Select, {
            className: "univer-w-36",
            value: String(var_core_value_sigB230.pageOverThenDown),
            options: bt.map(var_core_value_sig10AA => ({
              ...var_core_value_sig10AA,
              label: var_core_value_sig4C7F.t(var_core_value_sig10AA.label)
            })),
            onChange: var_core_value_sigE6D0 => var_core_value_sig88CB({
              pageOverThenDown: var_core_value_sigE6D0 === "true"
            })
          })]
        })]
      })]
    })]
  });
}
const wt = (0, s.createContext)(null),
  Tt = (0, s.createContext)(null);
function Et(var_core_value_sigB708, var_core_value_sig60EF) {
  return var_core_value_sigB708 === var_core_value_sig60EF ? true : !var_core_value_sigB708 || !var_core_value_sig60EF ? false : var_core_value_sigB708.droppableId === var_core_value_sig60EF.droppableId && var_core_value_sigB708.index === var_core_value_sig60EF.index;
}
function Dt(var_core_value_sigA6FB) {
  if (!(var_core_value_sigA6FB instanceof Element)) return null;
  let var_core_value_sigD6EA = var_core_value_sigA6FB.closest("[data-univer-dnd-droppable-id]");
  return var_core_value_sigD6EA instanceof HTMLElement ? var_core_value_sigD6EA : null;
}
function Ot(var_core_value_sigA2D3, var_core_value_sig727A, var_core_value_sig6AF1, var_core_value_sig3F6A) {
  let var_core_value_sig23B4 = Array.from(var_core_value_sigA2D3.querySelectorAll('[data-univer-dnd-item="true"]')).filter(var_core_value_sig8E91 => {
    let var_core_value_sig00BE = var_core_value_sig8E91.dataset["univerDndId"];
    return var_core_value_sig00BE ? var_core_value_sig00BE !== var_core_value_sig6AF1.draggableId || var_core_value_sig6AF1.source["droppableId"] !== var_core_value_sig3F6A : false;
  });
  if (!var_core_value_sig23B4.length) return 0;
  for (let var_core_value_sig7BB5 = 0; var_core_value_sig7BB5 < var_core_value_sig23B4.length - 1; var_core_value_sig7BB5++) {
    let var_core_value_sigE503 = var_core_value_sig23B4[var_core_value_sig7BB5].getBoundingClientRect();
    if (var_core_value_sig727A < var_core_value_sigE503.top + var_core_value_sigE503.height / 2) return var_core_value_sig7BB5;
  }
  let var_core_value_sig350C = var_core_value_sig23B4.length - 1,
    var_core_value_sig2335 = var_core_value_sig23B4[var_core_value_sig350C].getBoundingClientRect();
  return var_core_value_sig727A < var_core_value_sig2335.top + var_core_value_sig2335.height * 0.35 ? var_core_value_sig350C : var_core_value_sig23B4.length;
}
function kt() {
  let var_core_value_sig6233 = (0, s.useContext)(wt);
  if (!var_core_value_sig6233) throw Error("Draggable/Droppable must be used inside DragDropContext");
  return var_core_value_sig6233;
}
function At(var_core_value_sig4230) {
  let {
      children: var_core_value_sig6136,
      onDragEnd: var_core_value_sigD25E,
      onDragStart: var_core_value_sigE1BC,
      onDragUpdate: var_core_value_sigCF44
    } = var_core_value_sig4230,
    [var_core_value_sig3C97, var_core_value_sigA920] = (0, s.useState)(null),
    var_core_value_sigAD56 = (0, s.useRef)(null),
    var_core_value_sig0454 = (0, s.useCallback)((var_core_value_sig6AAD, var_core_value_sig1157) => {
      let var_core_value_sigA694 = {
        draggableId: var_core_value_sig6AAD,
        source: var_core_value_sig1157,
        destination: null
      };
      var_core_value_sigAD56.current = var_core_value_sigA694, var_core_value_sigA920(var_core_value_sigA694), var_core_value_sigE1BC == null || var_core_value_sigE1BC({
        draggableId: var_core_value_sig6AAD,
        source: var_core_value_sig1157
      }), var_core_value_sigCF44 == null || var_core_value_sigCF44({
        draggableId: var_core_value_sig6AAD,
        source: var_core_value_sig1157,
        destination: null
      });
    }, [var_core_value_sigE1BC, var_core_value_sigCF44]),
    var_core_value_sigEE1A = (0, s.useCallback)(var_core_value_sig18E01 => {
      let var_core_value_sig0428 = var_core_value_sigAD56.current;
      if (!var_core_value_sig0428 || Et(var_core_value_sig0428.destination, var_core_value_sig18E01)) return;
      let var_core_value_sigBE07 = {
        ...var_core_value_sig0428,
        destination: var_core_value_sig18E01
      };
      var_core_value_sigAD56.current = var_core_value_sigBE07, var_core_value_sigA920(var_core_value_sigBE07), var_core_value_sigCF44 == null || var_core_value_sigCF44({
        draggableId: var_core_value_sigBE07.draggableId,
        source: var_core_value_sigBE07.source,
        destination: var_core_value_sigBE07.destination
      });
    }, [var_core_value_sigCF44]),
    var_core_value_sig4107 = (0, s.useCallback)(async (var_core_value_sig555F, var_core_value_sig3D6F) => {
      let var_core_value_sig336C = var_core_value_sigAD56.current;
      var_core_value_sig336C && (var_core_value_sigAD56.current = null, var_core_value_sigA920(null), await (var_core_value_sigD25E == null ? undefined : var_core_value_sigD25E({
        draggableId: var_core_value_sig336C.draggableId,
        source: var_core_value_sig336C.source,
        destination: var_core_value_sig3D6F === undefined ? var_core_value_sig336C.destination : var_core_value_sig3D6F,
        reason: var_core_value_sig555F
      })));
    }, [var_core_value_sigD25E]);
  (0, s.useEffect)(() => {
    if (!var_core_value_sig3C97) return;
    let var_core_value_sig6E68 = var_core_value_sig48DD => {
      let var_core_value_sig5E6A = Dt(var_core_value_sig48DD.target);
      (!var_core_value_sig5E6A || var_core_value_sig5E6A.dataset["univerDndDropDisabled"] === "true") && var_core_value_sigEE1A(null);
    };
    return window.addEventListener("dragover", var_core_value_sig6E68, true), () => {
      window.removeEventListener("dragover", var_core_value_sig6E68, true);
    };
  }, [var_core_value_sig3C97, var_core_value_sigEE1A]);
  let var_core_value_sigF35C = (0, s.useMemo)(() => ({
    activeDrag: var_core_value_sig3C97,
    startDrag: var_core_value_sig0454,
    updateDestination: var_core_value_sigEE1A,
    endDrag: var_core_value_sig4107
  }), [var_core_value_sig3C97, var_core_value_sig0454, var_core_value_sigEE1A, var_core_value_sig4107]);
  return (0, u.jsx)(wt.Provider, {
    value: var_core_value_sigF35C,
    children: var_core_value_sig6136
  });
}
function jt(var_core_value_sigEF8D) {
  var var_core_value_sigE025;
  let {
      children: var_core_value_sigD549,
      droppableId: var_core_value_sigC79E,
      isDropDisabled: var_core_value_sig9221 = false
    } = var_core_value_sigEF8D,
    {
      activeDrag: var_core_value_sig0351,
      updateDestination: var_core_value_sig4686,
      endDrag: var_core_value_sig8E1C
    } = kt(),
    var_core_value_sigD719 = (0, s.useRef)(null),
    var_core_value_sig323C = {
      innerRef: (0, s.useCallback)(var_core_value_sig8DFE => {
        var_core_value_sigD719.current = var_core_value_sig8DFE;
      }, []),
      droppableProps: {
        onDragOver: (0, s.useCallback)(var_core_value_sig48EA => {
          if (!var_core_value_sig0351 || var_core_value_sig9221 || !var_core_value_sigD719.current) return;
          var_core_value_sig48EA.preventDefault();
          let var_core_value_sig5E16 = Ot(var_core_value_sigD719.current, var_core_value_sig48EA.clientY, var_core_value_sig0351, var_core_value_sigC79E);
          var_core_value_sig4686({
            droppableId: var_core_value_sigC79E,
            index: var_core_value_sig5E16
          });
        }, [var_core_value_sig0351, var_core_value_sig9221, var_core_value_sigC79E, var_core_value_sig4686]),
        onDrop: (0, s.useCallback)(var_core_value_sig09F3 => {
          var var_core_value_sig4592;
          if (!var_core_value_sig0351 || var_core_value_sig9221 || !var_core_value_sigD719.current) return;
          var_core_value_sig09F3.preventDefault();
          let var_core_value_sigC5C4 = (((var_core_value_sig4592 = var_core_value_sig0351.destination) == null ? undefined : var_core_value_sig4592.droppableId) === var_core_value_sigC79E ? var_core_value_sig0351.destination : null) ?? {
            droppableId: var_core_value_sigC79E,
            index: Ot(var_core_value_sigD719.current, var_core_value_sig09F3.clientY, var_core_value_sig0351, var_core_value_sigC79E)
          };
          return var_core_value_sig8E1C("DROP", var_core_value_sigC5C4);
        }, [var_core_value_sig0351, var_core_value_sig8E1C, var_core_value_sig9221, var_core_value_sigC79E]),
        "data-univer-dnd-droppable-id": var_core_value_sigC79E,
        "data-univer-dnd-drop-disabled": String(var_core_value_sig9221)
      },
      placeholder: null
    },
    var_core_value_sig015D = {
      isDraggingOver: !!(var_core_value_sig0351 && ((var_core_value_sigE025 = var_core_value_sig0351.destination) == null ? undefined : var_core_value_sigE025.droppableId) === var_core_value_sigC79E)
    };
  return (0, u.jsx)(Tt.Provider, {
    value: var_core_value_sigC79E,
    children: var_core_value_sigD549(var_core_value_sig323C, var_core_value_sig015D)
  });
}
function Mt(var_core_value_sigBF8B) {
  var var_core_value_sigF7CE;
  let {
      children: var_core_value_sig7CF1,
      draggableId: var_core_value_sigA552,
      index: var_core_value_sigAE32,
      isDragDisabled: var_core_value_sig9B4D = false
    } = var_core_value_sigBF8B,
    {
      activeDrag: var_core_value_sig2704,
      startDrag: var_core_value_sigD0CC,
      updateDestination: var_core_value_sigF347,
      endDrag: var_core_value_sig80C6
    } = kt(),
    var_core_value_sigEBFB = (0, s.useContext)(Tt),
    var_core_value_sigF3BF = (0, s.useRef)(null),
    var_core_value_sigAE58 = (0, s.useRef)(null),
    var_core_value_sig8E13 = (0, s.useRef)(false),
    var_core_value_sig3AAF = (0, s.useRef)(null),
    var_core_value_sig134E = (0, s.useRef)(null),
    var_core_value_sigA3C0 = (0, s.useRef)(false),
    var_core_value_sig723F = (0, s.useRef)(null),
    var_core_value_sigD044 = (0, s.useRef)(null),
    var_core_value_sig9797 = (0, s.useRef)(null),
    var_core_value_sig8533 = (0, s.useCallback)(var_core_value_sig1617 => {
      var_core_value_sigF3BF.current = var_core_value_sig1617;
    }, []),
    var_core_value_sig57C5 = (var_core_value_sig2704 == null ? undefined : var_core_value_sig2704.draggableId) === var_core_value_sigA552,
    var_core_value_sig0DE9 = (0, s.useCallback)(() => {
      var_core_value_sig134E.current &&= (window.clearTimeout(var_core_value_sig134E.current), null);
    }, []),
    var_core_value_sigB00D = (0, s.useCallback)(() => {
      var_core_value_sig0DE9(), var_core_value_sig9797.current = null, var_core_value_sig3AAF.current &&= (var_core_value_sig3AAF.current(), null), var_core_value_sig723F.current &&= (var_core_value_sig723F.current["remove"](), null), var_core_value_sigD044.current = null, var_core_value_sig8E13.current = false;
    }, [var_core_value_sig0DE9]);
  (0, s.useEffect)(() => var_core_value_sigB00D, [var_core_value_sigB00D]);
  let var_core_value_sig57C8 = (0, s.useCallback)((var_core_value_sig4169, var_core_value_sig6D19) => {
      if (var_core_value_sig723F.current) return;
      let var_core_value_sig279C = var_core_value_sigF3BF.current;
      if (!var_core_value_sig279C) return;
      let var_core_value_sigAC51 = var_core_value_sig279C.getBoundingClientRect(),
        var_core_value_sig8986 = var_core_value_sig4169 > 0 ? Math.max(0, var_core_value_sig4169 - var_core_value_sigAC51.left) : 12,
        var_core_value_sigCAF7 = var_core_value_sig6D19 > 0 ? Math.max(0, var_core_value_sig6D19 - var_core_value_sigAC51.top) : 12,
        var_core_value_sigED1C = var_core_value_sig279C.cloneNode(true);
      if (!(var_core_value_sigED1C instanceof HTMLDivElement)) return;
      let var_core_value_sig726E = var_core_value_sigED1C;
      var_core_value_sig726E.style["position"] = "fixed", var_core_value_sig726E.style["left"] = "0px", var_core_value_sig726E.style["top"] = "0px", var_core_value_sig726E.style["width"] = var_core_value_sigAC51.width + "px", var_core_value_sig726E.style["height"] = var_core_value_sigAC51.height + "px", var_core_value_sig726E.style["pointerEvents"] = "none", var_core_value_sig726E.style["opacity"] = "0.9", var_core_value_sig726E.style["zIndex"] = "2147483647", var_core_value_sig726E.style["boxSizing"] = "border-box", var_core_value_sig726E.style["transform"] = "translate(" + Math.max(0, var_core_value_sig4169 - var_core_value_sig8986) + "px, " + Math.max(0, var_core_value_sig6D19 - var_core_value_sigCAF7) + "px)", document.body["appendChild"](var_core_value_sig726E), var_core_value_sig723F.current = var_core_value_sig726E, var_core_value_sigD044.current = {
        x: var_core_value_sig8986,
        y: var_core_value_sigCAF7
      };
    }, []),
    var_core_value_sigC27D = (0, s.useCallback)((var_core_value_sig2CD3, var_core_value_sig038E) => {
      let var_core_value_sigAA1E = var_core_value_sig723F.current,
        var_core_value_sigC9F5 = var_core_value_sigD044.current;
      !var_core_value_sigAA1E || !var_core_value_sigC9F5 || (var_core_value_sigAA1E.style["transform"] = "translate(" + Math.max(0, var_core_value_sig2CD3 - var_core_value_sigC9F5.x) + "px, " + Math.max(0, var_core_value_sig038E - var_core_value_sigC9F5.y) + "px)");
    }, []),
    var_core_value_sig7B95 = (0, s.useCallback)((var_core_value_sig7EEA, var_core_value_sig59CE1) => {
      let var_core_value_sig33C8 = Dt(document.elementFromPoint(var_core_value_sig7EEA, var_core_value_sig59CE1));
      if (!var_core_value_sig33C8 || var_core_value_sig33C8.dataset["univerDndDropDisabled"] === "true") return null;
      let var_core_value_sig957F = var_core_value_sig33C8.dataset["univerDndDroppableId"];
      return var_core_value_sig957F ? {
        droppableId: var_core_value_sig957F,
        index: Ot(var_core_value_sig33C8, var_core_value_sig59CE1, {
          draggableId: var_core_value_sigA552,
          source: {
            droppableId: var_core_value_sigEBFB ?? "",
            index: var_core_value_sigAE32
          },
          destination: null
        }, var_core_value_sig957F)
      } : null;
    }, [var_core_value_sigA552, var_core_value_sigEBFB, var_core_value_sigAE32]),
    var_core_value_sig7D59 = (0, s.useCallback)((var_core_value_sig803B, var_core_value_sig5830, var_core_value_sig4A7C, var_core_value_sigF975) => {
      if (var_core_value_sig8E13.current || var_core_value_sigA3C0.current || var_core_value_sig9B4D || !var_core_value_sigEBFB) return;
      var_core_value_sig8E13.current = true, var_core_value_sig0DE9(), var_core_value_sigA3C0.current = false;
      try {
        var var_core_value_sigCDAF;
        (var_core_value_sigCDAF = var_core_value_sigF3BF.current) == null || var_core_value_sigCDAF.setPointerCapture(var_core_value_sig5830);
      } catch {}
      var_core_value_sig57C8(var_core_value_sig4A7C, var_core_value_sigF975), var_core_value_sigD0CC(var_core_value_sigA552, {
        droppableId: var_core_value_sigEBFB,
        index: var_core_value_sigAE32
      });
      let var_core_value_sigA298 = var_core_value_sig7B95(var_core_value_sig4A7C, var_core_value_sigF975);
      var_core_value_sigF347(var_core_value_sigA298);
      try {
        var_core_value_sig803B.preventDefault();
      } catch {}
    }, [var_core_value_sig0DE9, var_core_value_sigA552, var_core_value_sigEBFB, var_core_value_sigAE32, var_core_value_sig9B4D, var_core_value_sig57C8, var_core_value_sig7B95, var_core_value_sigD0CC, var_core_value_sigF347]),
    var_core_value_sig5863 = (0, s.useCallback)(var_core_value_sig0B40 => {
      if (var_core_value_sig9B4D || !var_core_value_sigEBFB || var_core_value_sig0B40.pointerType === "mouse" && var_core_value_sig0B40.button !== 0) return;
      var_core_value_sigA3C0.current = false;
      let var_core_value_sig330B = var_core_value_sig0B40.pointerId;
      var_core_value_sig9797.current = {
        pointerId: var_core_value_sig330B,
        pointerType: var_core_value_sig0B40.pointerType,
        startX: var_core_value_sig0B40.clientX,
        startY: var_core_value_sig0B40.clientY
      }, var_core_value_sig0DE9(), var_core_value_sig0B40.pointerType !== "mouse" && (var_core_value_sig134E.current = window.setTimeout(() => {
        let var_core_value_sigB7FC = var_core_value_sig9797.current;
        !var_core_value_sigB7FC || var_core_value_sigB7FC.pointerId !== var_core_value_sig330B || var_core_value_sig7D59(var_core_value_sig0B40.nativeEvent, var_core_value_sigB7FC.pointerId, var_core_value_sigB7FC.startX, var_core_value_sigB7FC.startY);
      }, 150));
      let var_core_value_sig3625 = var_core_value_sig9CD9 => {
          let var_core_value_sigFD0C = var_core_value_sig9797.current;
          if (!var_core_value_sigFD0C || var_core_value_sig9CD9.pointerId !== var_core_value_sigFD0C.pointerId) return;
          if (!var_core_value_sig8E13.current) {
            if (var_core_value_sigA3C0.current) {
              var_core_value_sigB00D();
              return;
            }
            if (var_core_value_sigFD0C.pointerType === "mouse") {
              let var_core_value_sigD0A8 = var_core_value_sig9CD9.clientX - var_core_value_sigFD0C.startX,
                var_core_value_sigF4B9 = var_core_value_sig9CD9.clientY - var_core_value_sigFD0C.startY;
              var_core_value_sigD0A8 * var_core_value_sigD0A8 + var_core_value_sigF4B9 * var_core_value_sigF4B9 >= 16 && var_core_value_sig7D59(var_core_value_sig9CD9, var_core_value_sigFD0C.pointerId, var_core_value_sig9CD9.clientX, var_core_value_sig9CD9.clientY);
            }
            return;
          }
          var_core_value_sigC27D(var_core_value_sig9CD9.clientX, var_core_value_sig9CD9.clientY);
          let var_core_value_sig849B = var_core_value_sig7B95(var_core_value_sig9CD9.clientX, var_core_value_sig9CD9.clientY);
          var_core_value_sigF347(var_core_value_sig849B);
          try {
            var_core_value_sig9CD9.preventDefault();
          } catch {}
        },
        var_core_value_sig0B4E = var_core_value_sig5F1A => {
          let var_core_value_sigB455 = var_core_value_sig9797.current;
          if (!var_core_value_sigB455 || var_core_value_sig5F1A.pointerId !== var_core_value_sigB455.pointerId) return;
          let var_core_value_sig5241 = var_core_value_sig8E13.current ? var_core_value_sig7B95(var_core_value_sig5F1A.clientX, var_core_value_sig5F1A.clientY) : null,
            var_core_value_sigC6E5 = var_core_value_sig8E13.current ? var_core_value_sig80C6(var_core_value_sig5241 ? "DROP" : "CANCEL", var_core_value_sig5241) : Promise.resolve();
          return var_core_value_sigB00D(), var_core_value_sigC6E5;
        };
      window.addEventListener("pointermove", var_core_value_sig3625, {
        capture: true,
        passive: false
      }), window.addEventListener("pointerup", var_core_value_sig0B4E, {
        capture: true
      }), window.addEventListener("pointercancel", var_core_value_sig0B4E, {
        capture: true
      }), var_core_value_sig3AAF.current = () => {
        window.removeEventListener("pointermove", var_core_value_sig3625, true), window.removeEventListener("pointerup", var_core_value_sig0B4E, true), window.removeEventListener("pointercancel", var_core_value_sig0B4E, true);
      };
    }, [var_core_value_sigB00D, var_core_value_sig0DE9, var_core_value_sigEBFB, var_core_value_sig80C6, var_core_value_sig9B4D, var_core_value_sig7B95, var_core_value_sig7D59, var_core_value_sigF347, var_core_value_sigC27D]),
    var_core_value_sig5BE7 = (0, s.useCallback)(var_core_value_sig0E9F => {
      let var_core_value_sigE5BA = var_core_value_sig0E9F.dataTransfer;
      if (!var_core_value_sigE5BA || typeof var_core_value_sigE5BA.setDragImage != "function") return;
      let var_core_value_sig4A83 = var_core_value_sig0E9F.currentTarget,
        var_core_value_sig58AA = var_core_value_sig4A83.cloneNode(true);
      if (!(var_core_value_sig58AA instanceof HTMLDivElement)) return;
      let var_core_value_sig84C4 = var_core_value_sig58AA;
      var_core_value_sig84C4.style["position"] = "fixed", var_core_value_sig84C4.style["left"] = "-9999px", var_core_value_sig84C4.style["top"] = "-9999px", var_core_value_sig84C4.style["width"] = var_core_value_sig4A83.getBoundingClientRect().width + "px", var_core_value_sig84C4.style["pointerEvents"] = "none", var_core_value_sig84C4.style["opacity"] = "0.95", var_core_value_sig84C4.style["zIndex"] = "2147483647", document.body["appendChild"](var_core_value_sig84C4);
      let var_core_value_sigB6F7 = var_core_value_sig4A83.getBoundingClientRect(),
        var_core_value_sigB495 = var_core_value_sig0E9F.clientX > 0 ? Math.max(0, var_core_value_sig0E9F.clientX - var_core_value_sigB6F7.left) : 12,
        var_core_value_sig70D0 = var_core_value_sig0E9F.clientY > 0 ? Math.max(0, var_core_value_sig0E9F.clientY - var_core_value_sigB6F7.top) : 12;
      var_core_value_sigE5BA.setDragImage(var_core_value_sig84C4, var_core_value_sigB495, var_core_value_sig70D0), var_core_value_sigAE58.current && var_core_value_sigAE58.current !== var_core_value_sig84C4 && var_core_value_sigAE58.current["remove"](), var_core_value_sigAE58.current = var_core_value_sig84C4;
    }, []),
    var_core_value_sigC74A = (0, s.useCallback)(var_core_value_sig2A8A => {
      if (var_core_value_sig8E13.current) {
        var_core_value_sig2A8A.preventDefault();
        return;
      }
      if (var_core_value_sig9B4D || !var_core_value_sigEBFB) {
        var_core_value_sig2A8A.preventDefault();
        return;
      }
      var_core_value_sigA3C0.current = true, var_core_value_sig0DE9(), var_core_value_sig9797.current = null, var_core_value_sig3AAF.current &&= (var_core_value_sig3AAF.current(), null);
      let var_core_value_sig3782 = var_core_value_sig2A8A.dataTransfer;
      if (var_core_value_sig3782) {
        try {
          var_core_value_sig3782.effectAllowed = "move";
        } catch {}
        try {
          var_core_value_sig3782.setData("text/plain", var_core_value_sigA552);
        } catch {}
      }
      try {
        var_core_value_sig5BE7(var_core_value_sig2A8A);
      } catch {}
      var_core_value_sigD0CC(var_core_value_sigA552, {
        droppableId: var_core_value_sigEBFB,
        index: var_core_value_sigAE32
      });
    }, [var_core_value_sig5BE7, var_core_value_sig0DE9, var_core_value_sigA552, var_core_value_sigEBFB, var_core_value_sigAE32, var_core_value_sig9B4D, var_core_value_sigD0CC]),
    var_core_value_sig8F6A = (0, s.useCallback)(() => (var_core_value_sigAE58.current &&= (var_core_value_sigAE58.current["remove"](), null), var_core_value_sig80C6("CANCEL", null)), [var_core_value_sig80C6]);
  return var_core_value_sig7CF1({
    innerRef: var_core_value_sig8533,
    draggableProps: {
      draggable: !var_core_value_sig9B4D,
      onDragStart: var_core_value_sigC74A,
      onDragEnd: var_core_value_sig8F6A,
      style: var_core_value_sig57C5 ? {
        opacity: 1
      } : undefined,
      "data-univer-dnd-item": "true",
      "data-univer-dnd-id": var_core_value_sigA552,
      "data-univer-dnd-index": String(var_core_value_sigAE32)
    },
    dragHandleProps: {
      onPointerDown: var_core_value_sig5863
    }
  }, {
    isDragging: var_core_value_sig57C5,
    draggingOver: var_core_value_sig2704 == null || (var_core_value_sigF7CE = var_core_value_sig2704.destination) == null ? undefined : var_core_value_sigF7CE.droppableId
  });
}
function Nt(var_core_value_sig46EA, var_core_value_sig626C) {
  switch (var_core_value_sig46EA) {
    case "filter":
      return var_core_value_sig626C.t("sheets-pivot-ui.filter");
    case "row":
      return var_core_value_sig626C.t("sheets-pivot-ui.row");
    case "column":
      return var_core_value_sig626C.t("sheets-pivot-ui.column");
    case "value":
      return var_core_value_sig626C.t("sheets-pivot-ui.value");
  }
}
function Pt(var_core_value_sig9077) {
  switch (var_core_value_sig9077) {
    case "filter":
      return (0, u.jsx)(m.FilterIcon, {
        className: "univer-flex univer-flex-row univer-gap-4"
      });
    case "row":
      return (0, u.jsx)(m.ColumnIcon, {
        className: "univer-flex univer-flex-row univer-gap-4"
      });
    case "column":
      return (0, u.jsx)(m.RowIcon, {
        className: "univer-flex univer-flex-row univer-gap-4"
      });
    case "value":
      return (0, u.jsx)(m.FunctionIcon, {
        className: "univer-flex univer-flex-row univer-gap-4"
      });
  }
}
function Ft(var_core_value_sigC76C) {
  switch (var_core_value_sigC76C) {
    case "filter":
      return (0, u.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [(0, u.jsx)("path", {
          d: "M4.99957\x201.875C2.84556\x201.875\x201.67491\x204.3932\x203.06336\x206.04001L11.5946\x2016.1587V26.4187C11.5946\x2027.4582\x2012.2298\x2028.3922\x2013.1966\x2028.7741L16.1601\x2029.9449C17.8221\x2030.6015\x2019.6232\x2029.3766\x2019.6232\x2027.5895V16.1587L28.1544\x206.04C29.5428\x204.3932\x2028.3722\x201.875\x2026.2182\x201.875H4.99957Z",
          fill: "#ECECEC"
        }), (0, u.jsx)("rect", {
          x: "21.9404",
          y: "17.8544",
          width: "7.59766",
          height: "2.2793",
          rx: "1.13965",
          fill: "#274FEE"
        }), (0, u.jsx)("rect", {
          x: "21.9404",
          y: "21.9067",
          width: "7.59766",
          height: "2.2793",
          rx: "1.13965",
          fill: "#274FEE"
        }), (0, u.jsx)("rect", {
          x: "21.9404",
          y: "25.959",
          width: "7.59766",
          height: "2.2793",
          rx: "1.13965",
          fill: "#274FEE"
        })]
      });
    case "row":
      return (0, u.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [(0, u.jsx)("path", {
          d: "M2 12.3661C2 12.0347 2.26863 11.7661 2.6 11.7661H9.24705C9.57842 11.7661 9.84705 12.0347 9.84705 12.3661V29.278C9.84705 29.6093 9.57842 29.878 9.24705 29.878H4C2.89543 29.878 2 28.9825 2 27.878V12.3661Z",
          fill: "#D8D8D8"
        }), (0, u.jsx)("path", {
          d: "M2 4.0863C2 2.98173 2.89543 2.0863 4 2.0863H9.24705C9.57842 2.0863 9.84705 2.35493 9.84705 2.6863V8.73981C9.84705 9.07118 9.57842 9.33981 9.24705 9.33981H2.6C2.26863 9.33981 2 9.07118 2 8.73981V4.0863Z",
          fill: "#D8D8D8"
        }), (0, u.jsx)("path", {
          d: "M12.2983 12.4011C12.2982 12.0697 12.5669 11.8009 12.8983 11.8009L29.3931 11.8009C29.7243 11.8009 29.9929 12.0694 29.9931 12.4007L29.9993 27.9129C29.9997 29.0178 29.1042 29.9137 27.9993 29.9137H12.9051C12.5738 29.9137 12.3053 29.6452 12.3051 29.314L12.2983 12.4011Z",
          fill: "#ECECEC"
        }), (0, u.jsx)("path", {
          d: "M12.2517 2.6863C12.2517 2.35493 12.5203 2.0863 12.8517 2.0863H27.9582C29.0628 2.0863 29.9582 2.98173 29.9582 4.0863V8.73627C29.9582 9.06764 29.6896 9.33627 29.3582 9.33627H12.8517C12.5203 9.33627 12.2517 9.06764 12.2517 8.73627L12.2517 2.6863Z",
          fill: "#274FEE"
        })]
      });
    case "column":
      return (0, u.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [(0, u.jsx)("path", {
          d: "M2 12.3661C2 12.0347 2.26863 11.7661 2.6 11.7661H9.24705C9.57842 11.7661 9.84705 12.0347 9.84705 12.3661V29.278C9.84705 29.6093 9.57842 29.878 9.24705 29.878H4C2.89543 29.878 2 28.9825 2 27.878V12.3661Z",
          fill: "#274FEE"
        }), (0, u.jsx)("path", {
          d: "M2\x204.0863C2\x202.98173\x202.89543\x202.0863\x204\x202.0863H9.24705C9.57842\x202.0863\x209.84705\x202.35493\x209.84705\x202.6863V8.73981C9.84705\x209.07118\x209.57842\x209.33981\x209.24705\x209.33981H2.6C2.26863\x209.33981\x202\x209.07118\x202\x208.73981V4.0863Z",
          fill: "#D8D8D8"
        }), (0, u.jsx)("path", {
          d: "M12.2637 2.6863C12.2637 2.35493 12.5323 2.0863 12.8637 2.0863H27.9702C29.0748 2.0863 29.9702 2.98173 29.9702 4.0863V8.73627C29.9702 9.06764 29.7016 9.33627 29.3702 9.33627H12.8637C12.5323 9.33627 12.2637 9.06764 12.2637 8.73627L12.2637 2.6863Z",
          fill: "#D8D8D8"
        }), (0, u.jsx)("path", {
          d: "M12.2982 12.4011C12.2981 12.0697 12.5667 11.8009 12.8982 11.8009L29.3929 11.8009C29.7242 11.8009 29.9928 12.0694 29.9929 12.4007L29.9992 27.9129C29.9996 29.0178 29.104 29.9137 27.9992 29.9137H12.905C12.5737 29.9137 12.3051 29.6452 12.305 29.314L12.2982 12.4011Z",
          fill: "#ECECEC"
        })]
      });
    case "value":
      return (0, u.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0\x200\x2032\x2032",
        fill: "none",
        children: [(0, u.jsx)("path", {
          d: "M2 12.3661C2 12.0347 2.26863 11.7661 2.6 11.7661H9.24705C9.57842 11.7661 9.84705 12.0347 9.84705 12.3661V29.278C9.84705 29.6093 9.57842 29.878 9.24705 29.878H4C2.89543 29.878 2 28.9825 2 27.878V12.3661Z",
          fill: "#D8D8D8"
        }), (0, u.jsx)("path", {
          d: "M2 4.0863C2 2.98173 2.89543 2.0863 4 2.0863H9.24705C9.57842 2.0863 9.84705 2.35493 9.84705 2.6863V8.73981C9.84705 9.07118 9.57842 9.33981 9.24705 9.33981H2.6C2.26863 9.33981 2 9.07118 2 8.73981V4.0863Z",
          fill: "#D8D8D8"
        }), (0, u.jsx)("path", {
          d: "M12.2637 2.6863C12.2637 2.35493 12.5323 2.0863 12.8637 2.0863H27.9702C29.0748 2.0863 29.9702 2.98173 29.9702 4.0863V8.73627C29.9702 9.06764 29.7016 9.33627 29.3702 9.33627H12.8637C12.5323 9.33627 12.2637 9.06764 12.2637 8.73627L12.2637 2.6863Z",
          fill: "#D8D8D8"
        }), (0, u.jsx)("path", {
          d: "M12.2982 12.4011C12.2981 12.0697 12.5667 11.8009 12.8982 11.8009L29.3929 11.8009C29.7242 11.8009 29.9928 12.0694 29.9929 12.4007L29.9992 27.9129C29.9996 29.0178 29.104 29.9137 27.9992 29.9137H12.905C12.5737 29.9137 12.3051 29.6452 12.305 29.314L12.2982 12.4011Z",
          fill: "#274FEE"
        })]
      });
  }
}
function It(var_core_value_sigB23A, var_core_value_sigBA66) {
  switch (var_core_value_sigB23A) {
    case "filter":
      return var_core_value_sigBA66.t("sheets-pivot-ui.filterDesc");
    case "row":
      return var_core_value_sigBA66.t("sheets-pivot-ui.rowDesc");
    case "column":
      return var_core_value_sigBA66.t("sheets-pivot-ui.columnDesc");
    case "value":
      return var_core_value_sigBA66.t("sheets-pivot-ui.valueDesc");
  }
}
function Lt(var_core_value_sig3DF0) {
  let var_core_value_sig0512 = (0, e.useDependency)(n.LocaleService),
    {
      areaType: var_core_value_sig4B2B
    } = var_core_value_sig3DF0,
    var_core_value_sigDF88 = It(var_core_value_sig4B2B, var_core_value_sig0512);
  return (0, u.jsxs)("div", {
    className: "univer-flex univer-h-[140px] univer-flex-col univer-items-center univer-justify-center univer-gap-1 univer-self-stretch univer-px-2",
    children: [(0, u.jsx)("div", {
      className: "univer-size-8",
      children: Ft(var_core_value_sig4B2B)
    }), (0, u.jsx)("div", {
      className: "univer-text-center univer-text-xs univer-leading-4 univer-text-gray-600 dark:!univer-text-gray-200",
      children: var_core_value_sigDF88
    })]
  });
}
function Y(var_core_value_sigDB93) {
  let {
      areaType: var_core_value_sig67CF,
      items: var_core_value_sigCA96,
      positionInfo: var_core_value_sig6C5E,
      pivotTableId: var_core_value_sig4997,
      pivotTableInfo: var_core_value_sig7290
    } = var_core_value_sigDB93,
    var_core_value_sigE835 = (0, e.useDependency)(n.LocaleService);
  return (0, u.jsxs)("div", {
    className: "univer-min-h-[200px]\x20univer-flex-1\x20univer-p-1",
    children: [(0, u.jsxs)("div", {
      className: "univer-mb-2\x20univer-mt-0\x20univer-flex\x20univer-w-full\x20univer-text-sm\x20univer-leading-4\x20univer-text-gray-900",
      children: [Pt(var_core_value_sig67CF), (0, u.jsx)("span", {
        className: "univer-inline-block univer-align-top",
        children: Nt(var_core_value_sig67CF, var_core_value_sigE835)
      })]
    }), (0, u.jsx)(jt, {
      droppableId: "" + var_core_value_sig67CF,
      isCombineEnabled: false,
      isDropDisabled: false,
      ignoreContainerClipping: false,
      direction: "vertical",
      children: (var_core_value_sigD22E, var_core_value_sig3455) => (0, u.jsx)("div", {
        className: (0, i.clsx)("univer-box-border\x20univer-h-[161px]\x20univer-w-full\x20univer-flex-col\x20univer-items-center\x20univer-justify-center\x20univer-overflow-x-hidden\x20univer-rounded-lg\x20univer-bg-gray-50\x20univer-py-2\x20dark:!univer-bg-gray-900", i.borderClassName, {
          "univer-border-primary-600": var_core_value_sig3455.isDraggingOver
        }),
        children: (0, u.jsx)("div", {
          className: (0, i.clsx)("univer-h-full\x20univer-overflow-y-auto", i.scrollbarClassName),
          children: (0, u.jsxs)("div", {
            ref: var_core_value_sigD22E.innerRef,
            className: "univer-box-border\x20univer-h-full\x20univer-px-2",
            ...var_core_value_sigD22E.droppableProps,
            children: [var_core_value_sigCA96.length > 0 && var_core_value_sigCA96.map((var_core_value_sigCEFB, var_core_value_sig1537) => (0, u.jsx)("div", {
              children: (0, u.jsx)(Mt, {
                isDragDisabled: false,
                draggableId: var_core_value_sigCEFB.tableFieldId,
                index: var_core_value_sig1537,
                children: (var_core_value_sigCE71, var_core_value_sig21D8) => (0, u.jsx)(u.Fragment, {
                  children: (0, u.jsx)("div", {
                    ref: var_core_value_sigCE71.innerRef,
                    ...var_core_value_sigCE71.draggableProps,
                    ...var_core_value_sigCE71.dragHandleProps,
                    style: var_core_value_sigCE71.draggableProps["style"],
                    className: (0, i.clsx)("univer-flex\x20univer-items-center\x20univer-gap-1\x20univer-self-stretch\x20univer-border\x20univer-border-transparent\x20univer-p-0.5\x20univer-leading-4\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700", var_core_value_sig21D8.draggingOver && "univer-border-primary-600"),
                    children: (0, u.jsx)(Rt, {
                      pivotTableId: var_core_value_sig4997,
                      positionInfo: var_core_value_sig6C5E,
                      item: var_core_value_sigCEFB,
                      areaType: var_core_value_sig67CF,
                      pivotTableInfo: var_core_value_sig7290
                    })
                  })
                })
              }, var_core_value_sigCEFB.tableFieldId)
            }, var_core_value_sigCEFB.tableFieldId)), var_core_value_sigCA96.length === 0 && (0, u.jsx)(Lt, {
              areaType: var_core_value_sig67CF
            })]
          })
        })
      })
    })]
  });
}
function Rt(var_core_value_sig4644) {
  let {
      areaType: var_core_value_sig9DED,
      item: var_core_value_sig7DE6,
      positionInfo: var_core_value_sig120E,
      pivotTableId: var_core_value_sigD79B,
      pivotTableInfo: var_core_value_sig92A3
    } = var_core_value_sig4644,
    {
      unitId: var_core_value_sig8911,
      subUnitId: var_core_value_sig8D1B
    } = var_core_value_sig120E,
    var_core_value_sigA915 = var_core_value_sig7DE6.tableFieldId === V,
    var_core_value_sigE1F7 = (0, e.useDependency)(n.ICommandService),
    var_core_value_sig4BE7 = (0, e.useDependency)(n.LocaleService),
    var_core_value_sigF9FF = () => {
      if (var_core_value_sigA915) {
        let var_core_value_sigE4C6 = (var_core_value_sig92A3.valueFields || []).map(var_core_value_sig2B65 => var_core_value_sig2B65.tableFieldId);
        H({
          pivotTableId: var_core_value_sigD79B,
          unitId: var_core_value_sig8911,
          subUnitId: var_core_value_sig8D1B,
          commandService: var_core_value_sigE1F7
        }, var_core_value_sigE4C6);
      } else H({
        pivotTableId: var_core_value_sigD79B,
        unitId: var_core_value_sig8911,
        subUnitId: var_core_value_sig8D1B,
        commandService: var_core_value_sigE1F7
      }, [var_core_value_sig7DE6.tableFieldId]);
    },
    var_core_value_sigE0E3 = () => {
      !var_core_value_sig8911 || !var_core_value_sig8D1B || ue(var_core_value_sigE1F7, var_core_value_sig8911, var_core_value_sig8D1B, var_core_value_sigD79B, var_core_value_sig7DE6.tableFieldId);
    },
    var_core_value_sig3AB3 = () => {
      !var_core_value_sig8911 || !var_core_value_sig8D1B || de(var_core_value_sigE1F7, var_core_value_sigD79B, var_core_value_sig7DE6.tableFieldId, var_core_value_sig8911, var_core_value_sig8D1B, var_core_value_sig92A3);
    },
    var_core_value_sig816E = var_core_value_sig5CEF => {
      let var_core_value_sig43D5 = var_core_value_sig5CEF === "column" ? l.PivotTableValuePositionEnum["Row"] : l.PivotTableValuePositionEnum["Column"],
        var_core_value_sig1395 = var_core_value_sig5CEF === "column" ? var_core_value_sig92A3.rowFields["length"] : var_core_value_sig92A3.columnFields["length"];
      ce({
        pivotTableId: var_core_value_sigD79B,
        unitId: var_core_value_sig8911,
        subUnitId: var_core_value_sig8D1B,
        commandService: var_core_value_sigE1F7
      }, var_core_value_sig43D5, var_core_value_sig1395);
    },
    var_core_value_sigE6F3 = (0, u.jsxs)("div", {
      className: "univer-inline-flex univer-flex-col univer-rounded-lg univer-border univer-border-gray-200 univer-bg-gray-0 univer-p-2 univer-shadow-lg",
      children: [(0, u.jsx)("div", {
        className: "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 dark:!univer-text-gray-0",
        onClick: () => {
          var_core_value_sigF9FF();
        },
        children: var_core_value_sig4BE7.t("sheets-pivot-ui.removeField")
      }), var_core_value_sig9DED !== "value" && !var_core_value_sigA915 && (0, u.jsx)("div", {
        className: "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-self-stretch\x20univer-px-2\x20univer-py-1.5\x20univer-text-sm\x20univer-leading-5\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
        onClick: () => {
          var_core_value_sigE0E3();
        },
        children: var_core_value_sig4BE7.t("sheets-pivot-ui.filterField")
      }), var_core_value_sigA915 && (0, u.jsx)("div", {
        className: "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-self-stretch\x20univer-px-2\x20univer-py-1.5\x20univer-text-sm\x20univer-leading-5\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
        onClick: () => {
          var_core_value_sig816E(var_core_value_sig9DED);
        },
        children: var_core_value_sig9DED === "column" ? var_core_value_sig4BE7.t("sheets-pivot-ui.moveToRow") : var_core_value_sig4BE7.t("sheets-pivot-ui.moveToColumn")
      }), var_core_value_sig9DED === "value" && (0, u.jsx)("div", {
        className: "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 dark:!univer-text-gray-0",
        onClick: () => {
          var_core_value_sig3AB3();
        },
        children: var_core_value_sig4BE7.t("sheets-pivot-ui.fieldSettings")
      })]
    }),
    var_core_value_sig3EE1 = (0, u.jsx)("bdi", {
      dir: "auto",
      children: var_core_value_sigA915 ? var_core_value_sig4BE7.t("sheets-pivot-ui.multipleValue") : var_core_value_sig7DE6.displayName
    });
  return (0, u.jsxs)(u.Fragment, {
    children: [(0, u.jsx)(m.GripVerticalIcon, {}), (0, u.jsx)("div", {
      className: "univer-max-w-[66px] univer-flex-1 univer-shrink-0 univer-truncate univer-text-xs univer-leading-4 univer-text-gray-800 dark:!univer-text-gray-100",
      children: (0, u.jsx)(i.Tooltip, {
        title: var_core_value_sig3EE1,
        children: var_core_value_sig3EE1
      })
    }), (0, u.jsx)("div", {
      className: "univer-cursor-pointer",
      children: (0, u.jsx)(i.Dropdown, {
        align: "end",
        overlay: var_core_value_sigE6F3,
        children: (0, u.jsx)("span", {
          children: (0, u.jsx)(m.MoreHorizontalIcon, {})
        })
      })
    })]
  });
}
function zt(var_core_value_sig9673) {
  var var_core_value_sig4917;
  let var_core_value_sig3BE6 = (0, e.useDependency)(n.IUniverInstanceService),
    var_core_value_sigA1C9 = (0, e.useDependency)(n.LocaleService),
    var_core_value_sig77D6 = (0, e.useDependency)(n.ICommandService),
    var_core_value_sigE3CE = (0, e.useDependency)(F),
    {
      sourceRangeInfo: var_core_value_sig219B,
      refreshHandler: var_core_value_sig4493,
      pivotTableId: var_core_value_sig8B9C,
      positionInfo: var_core_value_sigA35B
    } = var_core_value_sig9673,
    {
      unitId: var_core_value_sig82DD,
      range: var_core_value_sigAAC7,
      subUnitId: var_core_value_sig1999
    } = var_core_value_sig219B,
    var_core_value_sigFB45 = var_core_value_sig3BE6.getUnit(var_core_value_sig82DD),
    var_core_value_sigB86C = (var_core_value_sigFB45 == null || (var_core_value_sig4917 = var_core_value_sigFB45.getSheetBySheetId(var_core_value_sig1999)) == null ? undefined : var_core_value_sig4917.getName()) ?? "",
    [var_core_value_sigD892, var_core_value_sig6086] = (0, s.useState)(undefined),
    var_core_value_sigAED2 = (0, s.useRef)(var_core_value_sigD892);
  var_core_value_sigAED2.current = var_core_value_sigD892;
  let [var_core_value_sig3516, var_core_value_sigCDCD] = (0, s.useState)(var_core_value_sigAAC7),
    [var_core_value_sig206A, var_core_value_sig1EFE] = (0, s.useState)(var_core_value_sigB86C),
    [var_core_value_sig9904, var_core_value_sig39C7] = (0, s.useState)(false);
  (0, s.useEffect)(() => {
    var_core_value_sigE3CE.setIsRangeSelectorFocus(var_core_value_sig9904);
  }, [var_core_value_sig9904, var_core_value_sigE3CE]), (0, s.useEffect)(() => {
    var_core_value_sigCDCD(var_core_value_sig219B.range), var_core_value_sig1EFE(var_core_value_sigB86C);
  }, [var_core_value_sig219B, var_core_value_sigB86C]);
  let var_core_value_sigA022 = (0, s.useMemo)(() => (0, n.debounce)(async var_core_value_sig4313 => {
    let var_core_value_sigFC87 = var_core_value_sig4313.split(",").filter(var_core_value_sigD7EA => !!var_core_value_sigD7EA).map(a.deserializeRangeWithSheet);
    if (!var_core_value_sigFC87[0]) return;
    let var_core_value_sig156F = var_core_value_sigFC87[0];
    if (!var_core_value_sigFB45 || var_core_value_sigAED2.current) return;
    let var_core_value_sigDD51 = var_core_value_sig156F.sheetName || var_core_value_sig219B.sheetName;
    var_core_value_sigCDCD(var_core_value_sig156F.range), var_core_value_sig1EFE(var_core_value_sigDD51);
    let var_core_value_sigF057 = {
      unitId: var_core_value_sig82DD,
      subUnitId: var_core_value_sigFB45.getSheetBySheetName(var_core_value_sigDD51).getSheetId(),
      range: {
        ...var_core_value_sig156F.range
      },
      sheetName: var_core_value_sigDD51
    };
    await ae(var_core_value_sig77D6, var_core_value_sig8B9C, var_core_value_sigF057, var_core_value_sigA35B.unitId, var_core_value_sigA35B.subUnitId), var_core_value_sig4493();
  }, 300, {
    leading: false,
    maxWait: 1000,
    trailing: true
  }), []);
  return (0, u.jsxs)("div", {
    className: "univer-mb-4",
    children: [(0, u.jsxs)("div", {
      className: "univer-mb-2 univer-flex univer-h-5 univer-justify-between univer-text-sm univer-leading-5",
      children: [(0, u.jsx)("span", {
        className: "univer-text-justify univer-text-gray-900 dark:!univer-text-gray-0",
        children: var_core_value_sigA1C9.t("sheets-pivot-ui.sourceRangeLabel")
      }), (0, u.jsx)("span", {
        className: "univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
        children: var_core_value_sigA1C9.t("sheets-pivot-ui.sourceRangePlaceholder")
      })]
    }), (0, u.jsxs)("div", {
      className: "univer-relative",
      children: [(0, u.jsx)(o.RangeSelector, {
        unitId: var_core_value_sig82DD,
        subUnitId: var_core_value_sig1999,
        initialValue: (0, a.serializeRangeWithSheet)(var_core_value_sig206A, var_core_value_sig3516),
        onChange: (var_core_value_sig9FA0, var_core_value_sig055E) => {
          (0, a.serializeRangeWithSheet)(var_core_value_sig206A, var_core_value_sig3516) !== var_core_value_sig055E && var_core_value_sigA022(var_core_value_sig055E);
        },
        keepSheetReference: true,
        supportAcrossSheet: true,
        onVerify: (var_core_value_sig7C77, var_core_value_sig9578) => {
          let var_core_value_sigA2D31 = var_core_value_sig9578.split(",").filter(var_core_value_sig72F6 => !!var_core_value_sig72F6);
          if (!var_core_value_sigA2D31[0]) {
            var_core_value_sig6086(var_core_value_sigA1C9.t("sheets-pivot-ui.msg.emptySourceRange"));
            return;
          }
          if (!var_core_value_sig7C77) {
            var_core_value_sig6086(var_core_value_sigA1C9.t("sheets-pivot-ui.msg.invalidSize"));
            return;
          }
          let var_core_value_sigC218 = (0, a.deserializeRangeWithSheet)(var_core_value_sigA2D31[0]),
            var_core_value_sigADEC = var_core_value_sigC218.sheetName || var_core_value_sig219B.sheetName;
          if (var_core_value_sigFB45) switch (re(var_core_value_sigFB45.getSheetBySheetName(var_core_value_sigADEC), var_core_value_sigC218.range)) {
            case 2:
              var_core_value_sig6086(undefined);
              break;
            case 0:
              var_core_value_sig6086(var_core_value_sigA1C9.t("sheets-pivot-ui.msg.emptySourceRange"));
              break;
            case 1:
              var_core_value_sig6086(var_core_value_sigA1C9.t("sheets-pivot-ui.msg.invalidSize"));
              break;
          }
        },
        maxRangeCount: 1,
        onFocusChange: var_core_value_sig3D8E => {
          var_core_value_sig39C7(var_core_value_sig3D8E);
        },
        onRangeSelectorDialogVisibleChange: var_core_value_sig37E5 => {
          var_core_value_sig39C7(!!var_core_value_sig37E5);
        }
      }), var_core_value_sigD892 ? (0, u.jsx)("div", {
        className: "univer-my-1\x20univer-text-xs\x20univer-text-red-500",
        children: var_core_value_sigD892
      }) : null]
    })]
  });
}
function Bt(var_core_value_sig913A) {
  let {
    type: var_core_value_sig991D
  } = var_core_value_sig913A;
  switch (var_core_value_sig991D) {
    case l.PivotDataFieldDataTypeEnum["text"]:
      return (0, u.jsx)(m.TextIcon, {
        className: "univer-mx-1.5 univer-my-0 univer-h-4 univer-text-xs univer-text-gray-200 dark:!univer-text-gray-600"
      });
    case l.PivotDataFieldDataTypeEnum["number"]:
      return (0, u.jsx)(m.NumberIcon, {
        className: "univer-mx-1.5\x20univer-my-0\x20univer-h-4\x20univer-text-xs\x20univer-text-gray-200\x20dark:!univer-text-gray-600"
      });
    case l.PivotDataFieldDataTypeEnum["date"]:
      return (0, u.jsx)(m.CalendarIcon, {
        className: "univer-mx-1.5 univer-my-0 univer-h-4 univer-text-xs univer-text-gray-200 dark:!univer-text-gray-600"
      });
  }
}
function Vt(var_core_value_sig3E9C) {
  let {
      name: var_core_value_sig7835,
      dataFieldId: var_core_value_sig1257,
      checked: var_core_value_sig97E2,
      type: var_core_value_sigBFA3,
      refreshHandler: var_core_value_sig6663,
      pivotTableId: var_core_value_sigB250,
      draggingId: var_core_value_sig4EAB,
      pivotTableInfo: var_core_value_sig2FD0,
      unitId: var_core_value_sig035C,
      subUnitId: var_core_value_sigA7F0
    } = var_core_value_sig3E9C,
    [var_core_value_sig6AE2, var_core_value_sigFD17] = (0, s.useState)(false),
    var_core_value_sigA5E0 = (0, e.useDependency)(n.ICommandService),
    var_core_value_sigC38F = (0, e.useDependency)(n.LocaleService);
  if (!var_core_value_sig2FD0) return null;
  let {
      rowFields: var_core_value_sigFAFE,
      columnFields: var_core_value_sig2B86,
      filterFields: var_core_value_sig8873,
      valueFields: var_core_value_sigB9C5
    } = var_core_value_sig2FD0,
    var_core_value_sig511D = [...var_core_value_sigFAFE, ...var_core_value_sig2B86, ...var_core_value_sig8873, ...var_core_value_sigB9C5],
    var_core_value_sig1610 = async var_core_value_sigF079 => {
      let var_core_value_sigFCA0 = !!var_core_value_sigF079,
        var_core_value_sigC84D = false;
      if (var_core_value_sigFCA0) {
        let var_core_value_sig9FBA = {
          pivotTableId: var_core_value_sigB250,
          dataFieldId: var_core_value_sig1257,
          fieldArea: var_core_value_sigBFA3 === l.PivotDataFieldDataTypeEnum["number"] ? l.PivotTableFiledAreaEnum["Value"] : l.PivotTableFiledAreaEnum["Row"],
          unitId: var_core_value_sig035C,
          subUnitId: var_core_value_sigA7F0,
          index: var_core_value_sigBFA3 === l.PivotDataFieldDataTypeEnum["number"] ? var_core_value_sigB9C5.length : var_core_value_sigFAFE.length
        };
        var_core_value_sigC84D = await var_core_value_sigA5E0.executeCommand(t.AddPivotFieldCommand["id"], var_core_value_sig9FBA);
      } else {
        let var_core_value_sigFE01 = [];
        var_core_value_sig511D.forEach(var_core_value_sigB33B => {
          var_core_value_sigB33B.dataFieldId === var_core_value_sig1257 && var_core_value_sigFE01.push(var_core_value_sigB33B.tableFieldId);
        }), var_core_value_sigC84D = await var_core_value_sigA5E0.executeCommand(t.RemovePivotFieldCommand["id"], {
          pivotTableId: var_core_value_sigB250,
          fieldIds: var_core_value_sigFE01,
          unitId: var_core_value_sig035C,
          subUnitId: var_core_value_sigA7F0
        });
      }
      var_core_value_sigC84D && var_core_value_sig6663();
    },
    var_core_value_sig23AB = async var_core_value_sigF2BC => {
      let var_core_value_sigD37B = false,
        var_core_value_sigFA28 = "";
      if ([...var_core_value_sigFAFE, ...var_core_value_sig2B86, ...var_core_value_sig8873].forEach(var_core_value_sigA2CE => {
        var_core_value_sigA2CE.dataFieldId === var_core_value_sig1257 && (var_core_value_sigD37B = true, var_core_value_sigFA28 = var_core_value_sigA2CE.tableFieldId);
      }), var_core_value_sigD37B && var_core_value_sigF2BC !== l.PivotTableFiledAreaEnum["Value"]) {
        if (var_core_value_sigB250) {
          let var_core_value_sig24B9 = Se(var_core_value_sig2FD0, var_core_value_sigF2BC),
            var_core_value_sigE627 = {
              pivotTableId: var_core_value_sigB250,
              area: var_core_value_sigF2BC,
              index: var_core_value_sig24B9,
              fieldId: var_core_value_sigFA28,
              unitId: var_core_value_sig035C,
              subUnitId: var_core_value_sigA7F0
            };
          (await var_core_value_sigA5E0.executeCommand(t.MovePivotFieldCommand["id"], var_core_value_sigE627)) && var_core_value_sig6663();
        }
      } else {
        if (var_core_value_sigB250) {
          let var_core_value_sigEF3E = {
            pivotTableId: var_core_value_sigB250,
            dataFieldId: var_core_value_sig1257,
            fieldArea: var_core_value_sigF2BC,
            unitId: var_core_value_sig035C,
            subUnitId: var_core_value_sigA7F0,
            index: Se(var_core_value_sig2FD0, var_core_value_sigF2BC)
          };
          (await var_core_value_sigA5E0.executeCommand(t.AddPivotFieldCommand["id"], var_core_value_sigEF3E)) && var_core_value_sig6663();
        }
      }
    };
  return (0, u.jsxs)("div", {
    className: (0, i.clsx)("univer-group univer-relative univer-box-border univer-flex univer-h-8 univer-w-full univer-flex-row univer-items-center univer-rounded-md univer-px-1 univer-py-2 univer-leading-4 univer-transition-all hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700", {
      "univer-flex\x20univer-bg-gray-100\x20dark:!univer-bg-gray-700": var_core_value_sig4EAB === var_core_value_sig1257
    }),
    id: "source-" + var_core_value_sig1257,
    onContextMenu: var_core_value_sig93BE => {
      var_core_value_sig93BE.preventDefault(), var_core_value_sigFD17(true);
    },
    children: [(0, u.jsx)("span", {
      className: "univer-mr-2 univer-w-4 rtl:univer-ml-2 rtl:univer-mr-0",
      children: (0, u.jsx)(m.GripVerticalIcon, {})
    }), (0, u.jsx)(i.Checkbox, {
      className: "univer-w-[14px] univer-text-sm univer-text-gray-200",
      checked: var_core_value_sig97E2,
      onChange: var_core_value_sig1610
    }), (0, u.jsxs)("div", {
      className: "univer-flex\x20univer-min-w-0\x20univer-flex-1\x20univer-items-center\x20univer-text-xs\x20univer-leading-4\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
      children: [(0, u.jsx)(Bt, {
        type: var_core_value_sigBFA3
      }), (0, u.jsx)("span", {
        className: "univer-truncate",
        children: var_core_value_sig7835
      })]
    }), (0, u.jsx)(i.Dropdown, {
      align: "end",
      side: "bottom",
      open: var_core_value_sig6AE2,
      onOpenChange: var_core_value_sigFD17,
      overlay: (0, u.jsxs)("div", {
        children: [(0, u.jsx)("div", {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
          onClick: () => {
            var_core_value_sigFD17(false), var_core_value_sig23AB(l.PivotTableFiledAreaEnum["Row"]);
          },
          children: var_core_value_sigC38F.t("sheets-pivot-ui.addToRow")
        }), (0, u.jsx)("div", {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
          onClick: () => {
            var_core_value_sigFD17(false), var_core_value_sig23AB(l.PivotTableFiledAreaEnum["Column"]);
          },
          children: var_core_value_sigC38F.t("sheets-pivot-ui.addToColumn")
        }), (0, u.jsx)("div", {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
          onClick: () => {
            var_core_value_sigFD17(false), var_core_value_sig23AB(l.PivotTableFiledAreaEnum["Value"]);
          },
          children: var_core_value_sigC38F.t("sheets-pivot-ui.addToValue")
        }), (0, u.jsx)("div", {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
          onClick: () => {
            var_core_value_sigFD17(false), var_core_value_sig23AB(l.PivotTableFiledAreaEnum["Filter"]);
          },
          children: var_core_value_sigC38F.t("sheets-pivot-ui.addToFilter")
        })]
      }),
      children: (0, u.jsx)("div", {
        className: (0, i.clsx)("univer-ml-1 univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-md univer-transition-opacity hover:univer-bg-gray-200 rtl:univer-ml-0 rtl:univer-mr-1 dark:hover:!univer-bg-gray-700", {
          "univer-opacity-100": var_core_value_sig6AE2,
          "univer-opacity-0\x20group-hover:univer-opacity-100": !var_core_value_sig6AE2
        }),
        onMouseDown: var_core_value_sigABEC => var_core_value_sigABEC.stopPropagation(),
        onClick: var_core_value_sig2712 => var_core_value_sig2712.stopPropagation(),
        children: (0, u.jsx)(m.MoreDownIcon, {
          className: "univer-text-gray-400 dark:!univer-text-gray-500"
        })
      })
    })]
  }, var_core_value_sig1257);
}
function Ht(var_core_value_sigA15D) {
  let {
      sourceList: var_core_value_sig7E90,
      refreshHandler: var_core_value_sig03F7,
      pivotTableId: var_core_value_sig756F,
      pivotTableInfo: var_core_value_sig0DB1,
      unitId: var_core_value_sig4950,
      draggingId: var_core_value_sig4424,
      subUnitId: var_core_value_sig57E8
    } = var_core_value_sigA15D,
    var_core_value_sig76B6 = (0, e.useDependency)(n.LocaleService),
    [var_core_value_sig89BC, var_core_value_sig2191] = (0, s.useState)(""),
    var_core_value_sig3B2E = var_core_value_sig89BC.trim().toLocaleLowerCase(),
    var_core_value_sig5A9A = var_core_value_sig3B2E ? var_core_value_sig7E90.filter(var_core_value_sig0B9E => var_core_value_sig0B9E.name["toLocaleLowerCase"]().includes(var_core_value_sig3B2E)) : var_core_value_sig7E90;
  return (0, u.jsxs)("div", {
    className: "univer-mb-4 univer-flex univer-min-h-0 univer-flex-1 univer-flex-col",
    children: [(0, u.jsx)("p", {
      className: "univer-mb-1 univer-mt-0 univer-text-sm univer-font-medium univer-leading-5 univer-text-gray-900 dark:!univer-text-gray-0",
      children: var_core_value_sig76B6.t("sheets-pivot-ui.sourceFieldTile")
    }), (0, u.jsx)("p", {
      className: "univer-mb-2 univer-mt-0 univer-text-xs univer-leading-4 univer-text-gray-600 dark:!univer-text-gray-200",
      children: var_core_value_sig76B6.t("sheets-pivot-ui.sourceFieldDescription")
    }), (0, u.jsx)(i.Input, {
      allowClear: true,
      className: "univer-mb-2",
      placeholder: var_core_value_sig76B6.t("sheets-pivot-ui.searchFieldPlaceholder"),
      slot: (0, u.jsx)(m.SearchIcon, {}),
      value: var_core_value_sig89BC,
      onChange: var_core_value_sig2191
    }), (0, u.jsx)("div", {
      className: (0, i.clsx)("univer-box-border univer-min-h-0 univer-flex-1 univer-rounded-lg univer-bg-gray-0 univer-p-2 dark:!univer-bg-gray-900", i.borderClassName),
      children: (0, u.jsx)("div", {
        className: (0, i.clsx)("univer-relative\x20univer-h-full\x20univer-overflow-y-auto", i.scrollbarClassName),
        "data-testid": "pivot-source-field-viewport",
        children: (0, u.jsx)(jt, {
          droppableId: "source",
          direction: "vertical",
          isCombineEnabled: false,
          ignoreContainerClipping: false,
          isDropDisabled: true,
          children: var_core_value_sigC545 => (0, u.jsxs)("div", {
            ref: var_core_value_sigC545.innerRef,
            className: "univer-box-border univer-h-full univer-px-2",
            ...var_core_value_sigC545.droppableProps,
            children: [var_core_value_sig5A9A.map((var_core_value_sig1975, var_core_value_sig6EA1) => (0, u.jsx)("div", {
              className: "univer-relative univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-1 univer-self-stretch univer-border univer-border-transparent univer-p-0.5 univer-leading-4 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
              children: (0, u.jsx)(Mt, {
                draggableId: var_core_value_sig1975.id,
                isDragDisabled: false,
                index: var_core_value_sig6EA1,
                children: ({
                  innerRef: var_core_value_sig273D,
                  draggableProps: var_core_value_sig9A0D,
                  dragHandleProps: var_core_value_sigA319
                }) => (0, u.jsx)("div", {
                  ref: var_core_value_sig273D,
                  ...var_core_value_sig9A0D,
                  ...var_core_value_sigA319,
                  className: "univer-h-8 univer-w-full",
                  style: var_core_value_sig9A0D.style,
                  children: (0, u.jsx)(Vt, {
                    draggingId: var_core_value_sig4424,
                    unitId: var_core_value_sig4950,
                    subUnitId: var_core_value_sig57E8,
                    ...var_core_value_sig1975,
                    refreshHandler: var_core_value_sig03F7,
                    pivotTableId: var_core_value_sig756F,
                    pivotTableInfo: var_core_value_sig0DB1
                  })
                })
              }, var_core_value_sig1975.id)
            }, var_core_value_sig1975.id)), var_core_value_sig5A9A.length === 0 && (0, u.jsx)("div", {
              className: "univer-py-4\x20univer-text-center\x20univer-text-xs\x20univer-text-gray-500",
              children: var_core_value_sig76B6.t("sheets-pivot-ui.noMatchingFields")
            })]
          })
        })
      })
    })]
  });
}
function Ut(var_core_value_sigB524) {
  let {
      pivotTableId: var_core_value_sig8CFB,
      version: var_core_value_sigB52C,
      unitId: var_core_value_sigA4B8,
      subUnitId: var_core_value_sigFF9C,
      panelInfo: var_core_value_sig278D
    } = var_core_value_sigB524,
    var_core_value_sigC0FE = (0, e.useDependency)(t.SheetsPivotTableConfigModel),
    var_core_value_sigDD22 = (0, e.useObservable)(var_core_value_sigC0FE.configVersion$),
    var_core_value_sig2D35 = (0, e.useDependency)(t.SheetsPivotRPCService),
    var_core_value_sig7A4B = (0, e.useObservable)((0, e.useDependency)(F).pivotTablePanelVisible$, true),
    var_core_value_sigE50A = (0, e.useDependency)(n.ICommandService),
    var_core_value_sigC8AC = (0, e.useDependency)(n.ILogService),
    [var_core_value_sig8E63, var_core_value_sig300D] = (0, s.useState)(var_core_value_sig278D),
    [var_core_value_sig520B, var_core_value_sigFE26] = (0, s.useState)(null),
    var_core_value_sig1019 = (0, s.useCallback)(async () => {
      if (!var_core_value_sigC0FE.getPivotTableConfig(var_core_value_sigA4B8, var_core_value_sigFF9C, var_core_value_sig8CFB)) return;
      let var_core_value_sig12A7 = await var_core_value_sig2D35.getPivotDisplayConfig({
        unitId: var_core_value_sigA4B8,
        subUnitId: var_core_value_sigFF9C,
        pivotTableId: var_core_value_sig8CFB,
        params: {
          type: t.PivotDisplayDataType["Panel"],
          panel: {
            pivotTableId: var_core_value_sig8CFB
          }
        }
      });
      var_core_value_sig12A7.result["panel"] && var_core_value_sig300D(var_core_value_sig12A7.result["panel"]);
    }, [var_core_value_sig8CFB, var_core_value_sig2D35, var_core_value_sigC0FE, var_core_value_sigFF9C, var_core_value_sigA4B8]);
  (0, s.useEffect)(() => {
    var_core_value_sig1019().catch(var_core_value_sig029F => var_core_value_sigC8AC.error("[PivotPanel]", var_core_value_sig029F));
  }, [var_core_value_sigC8AC, var_core_value_sigDD22, var_core_value_sig8CFB, var_core_value_sig1019, var_core_value_sigB52C]);
  let var_core_value_sig32AB = async var_core_value_sig6F4E => {
      let {
        source: var_core_value_sigA021,
        destination: var_core_value_sig49D9,
        draggableId: var_core_value_sig320C
      } = var_core_value_sig6F4E;
      var_core_value_sigFE26(null);
      let var_core_value_sigE7F0 = {
          pivotTableInfo: var_core_value_sig8E63,
          pivotTableId: var_core_value_sig8CFB,
          commandService: var_core_value_sigE50A,
          unitId: var_core_value_sigA4B8,
          subUnitId: var_core_value_sigFF9C
        },
        var_core_value_sigE837 = var_core_value_sigA021.droppableId;
      if (var_core_value_sig49D9 && var_core_value_sig49D9.droppableId) {
        let var_core_value_sig3767 = var_core_value_sig49D9.droppableId;
        await se(var_core_value_sigE7F0, var_core_value_sig320C, var_core_value_sigE837, var_core_value_sig3767, var_core_value_sig49D9.index), await var_core_value_sig1019();
      }
      var_core_value_sig49D9 === null && (await ie(var_core_value_sigE7F0, var_core_value_sig320C, var_core_value_sigE837), await var_core_value_sig1019());
    },
    var_core_value_sig72BE = var_core_value_sig34F4 => {
      var_core_value_sigFE26({
        draggingId: var_core_value_sig34F4.draggableId
      });
    },
    var_core_value_sig3E4A = var_core_value_sigA45D => {
      let {
        draggableId: var_core_value_sig1BC7,
        destination: var_core_value_sig4956,
        source: var_core_value_sigCC9E
      } = var_core_value_sigA45D;
      var_core_value_sigFE26({
        draggingId: var_core_value_sig1BC7,
        destination: var_core_value_sig4956,
        source: var_core_value_sigCC9E
      });
    };
  if (!var_core_value_sig7A4B || !var_core_value_sig8E63) return null;
  let {
    sourceList: var_core_value_sig3171,
    rowFields: var_core_value_sigEBC4,
    columnFields: var_core_value_sig788B,
    filterFields: var_core_value_sig9A80,
    valueFields: var_core_value_sig7C69,
    sourceRange: var_core_value_sig01EF,
    positionInfo: var_core_value_sig3603
  } = var_core_value_sig8E63;
  return (0, u.jsxs)("div", {
    className: (0, i.clsx)("univer-mt-4\x20univer-flex\x20univer-h-[calc(100%-16px)]\x20univer-min-h-0\x20univer-w-full\x20univer-flex-col\x20univer-overflow-y-auto\x20univer-overflow-x-hidden", i.scrollbarClassName),
    children: [(0, u.jsx)(zt, {
      sourceRangeInfo: var_core_value_sig01EF,
      pivotTableId: var_core_value_sig8CFB,
      refreshHandler: var_core_value_sig1019,
      positionInfo: var_core_value_sig3603
    }), (0, u.jsxs)(At, {
      onDragEnd: var_core_value_sig32AB,
      onDragStart: var_core_value_sig72BE,
      onDragUpdate: var_core_value_sig3E4A,
      children: [(0, u.jsx)(Ht, {
        draggingId: (var_core_value_sig520B == null ? undefined : var_core_value_sig520B.draggingId) ?? "",
        sourceList: var_core_value_sig3171,
        refreshHandler: var_core_value_sig1019,
        pivotTableId: var_core_value_sig8CFB,
        pivotTableInfo: var_core_value_sig8E63,
        unitId: var_core_value_sigA4B8,
        subUnitId: var_core_value_sigFF9C
      }), (0, u.jsx)(Wt, {
        rowFields: var_core_value_sigEBC4,
        columnFields: var_core_value_sig788B,
        filterFields: var_core_value_sig9A80,
        valueFields: var_core_value_sig7C69,
        refreshHandler: var_core_value_sig1019,
        positionInfo: var_core_value_sig3603,
        pivotTableId: var_core_value_sig8CFB,
        pivotTableInfo: var_core_value_sig8E63
      })]
    })]
  });
}
function Wt(var_core_value_sigC163) {
  let {
    rowFields: var_core_value_sigF5F3,
    columnFields: var_core_value_sig5E69,
    filterFields: var_core_value_sig7B39,
    valueFields: var_core_value_sigDCAB,
    refreshHandler: var_core_value_sigF569,
    pivotTableInfo: var_core_value_sig2A9F,
    positionInfo: var_core_value_sigB14A,
    pivotTableId: var_core_value_sig4401
  } = var_core_value_sigC163;
  return (0, u.jsxs)("div", {
    className: "univer-shrink-0",
    "data-testid": "pivot-field-areas",
    children: [(0, u.jsxs)("div", {
      className: "univer-flex univer-flex-row univer-gap-4",
      children: [(0, u.jsx)(Y, {
        areaType: "filter",
        items: var_core_value_sig7B39,
        positionInfo: var_core_value_sigB14A,
        pivotTableId: var_core_value_sig4401,
        pivotTableInfo: var_core_value_sig2A9F,
        refreshHandler: var_core_value_sigF569
      }), (0, u.jsx)(Y, {
        areaType: "column",
        items: var_core_value_sig5E69,
        positionInfo: var_core_value_sigB14A,
        pivotTableId: var_core_value_sig4401,
        pivotTableInfo: var_core_value_sig2A9F,
        refreshHandler: var_core_value_sigF569
      })]
    }), (0, u.jsxs)("div", {
      className: "univer-flex univer-flex-row univer-gap-4",
      children: [(0, u.jsx)(Y, {
        areaType: "row",
        items: var_core_value_sigF5F3,
        positionInfo: var_core_value_sigB14A,
        pivotTableId: var_core_value_sig4401,
        pivotTableInfo: var_core_value_sig2A9F,
        refreshHandler: var_core_value_sigF569
      }), (0, u.jsx)(Y, {
        areaType: "value",
        items: var_core_value_sigDCAB,
        positionInfo: var_core_value_sigB14A,
        pivotTableId: var_core_value_sig4401,
        pivotTableInfo: var_core_value_sig2A9F,
        refreshHandler: var_core_value_sigF569
      })]
    })]
  });
}
function Gt(var_core_value_sig4D6A) {
  let {
      className: var_core_value_sigEF80,
      unitId: var_core_value_sig526D1,
      subUnitId: var_core_value_sigD78B,
      pivotTableId: var_core_value_sigCB8C
    } = var_core_value_sig4D6A,
    [var_core_value_sigD217, var_core_value_sigEB0F] = (0, s.useState)(0),
    var_core_value_sigDC44 = (0, e.useDependency)(n.LocaleService),
    var_core_value_sigDEFC = var_core_value_sigDC44.getDirection();
  return (0, u.jsxs)("div", {
    className: (0, i.clsx)("univer-flex univer-size-full univer-min-h-0 univer-flex-col", var_core_value_sigEF80),
    dir: var_core_value_sigDEFC,
    children: [(0, u.jsxs)("div", {
      className: "univer-flex univer-shrink-0 univer-items-center univer-border-b univer-border-gray-200",
      children: [(0, u.jsxs)("div", {
        className: (0, i.clsx)("univer-mr-5 univer-cursor-default univer-py-4 univer-text-center univer-text-sm univer-font-semibold rtl:univer-ml-5 rtl:univer-mr-0", var_core_value_sigD217 === 0 ? "univer-text-primary-600" : "univer-text-gray-500"),
        onClick: () => var_core_value_sigEB0F(0),
        children: [var_core_value_sigDC44.t("sheets-pivot-ui.fieldPanel"), (0, u.jsx)("div", {
          className: (0, i.clsx)("univer-mx-auto\x20univer-mt-2\x20univer-h-1\x20univer-w-1/2\x20univer-rounded-md", {
            "univer-bg-primary-600": var_core_value_sigD217 === 0,
            "univer-bg-transparent": var_core_value_sigD217 !== 0
          })
        })]
      }), (0, u.jsxs)("div", {
        className: (0, i.clsx)("univer-mr-5 univer-cursor-default univer-py-4 univer-text-center univer-text-sm univer-font-semibold rtl:univer-ml-5 rtl:univer-mr-0", {
          "univer-text-primary-600": var_core_value_sigD217 === 1,
          "univer-text-gray-500": var_core_value_sigD217 !== 1
        }),
        onClick: () => var_core_value_sigEB0F(1),
        children: [var_core_value_sigDC44.t("sheets-pivot-ui.configPanel"), (0, u.jsx)("div", {
          className: (0, i.clsx)("univer-mx-auto univer-mt-2 univer-h-1 univer-w-1/2 univer-rounded-md univer-bg-primary-600", {
            "univer-bg-primary-600": var_core_value_sigD217 === 1,
            "univer-bg-transparent": var_core_value_sigD217 !== 1
          })
        })]
      })]
    }), (0, u.jsx)("div", {
      className: (0, i.clsx)("univer-min-h-0\x20univer-flex-1", var_core_value_sigD217 === 0 ? "univer-overflow-hidden" : "univer-overflow-auto"),
      children: var_core_value_sigD217 === 0 ? (0, u.jsx)(Ut, {
        ...var_core_value_sig4D6A
      }) : (0, u.jsx)(Ct, {
        unitId: var_core_value_sig526D1,
        subUnitId: var_core_value_sigD78B,
        pivotTableId: var_core_value_sigCB8C
      })
    })]
  });
}
function Kt(var_core_value_sigE842) {
  let {
      unitId: var_core_value_sigA77A,
      subUnitId: var_core_value_sig0701,
      pivotTableId: var_core_value_sig5DCA,
      tableFieldId: var_core_value_sigF1AB,
      type: var_core_value_sig902F
    } = var_core_value_sigE842,
    var_core_value_sig6BD7 = JSON.stringify([var_core_value_sigA77A, var_core_value_sig0701, var_core_value_sig5DCA, var_core_value_sigF1AB, var_core_value_sig902F]);
  return (0, u.jsx)(qt, {
    ...var_core_value_sigE842
  }, var_core_value_sig6BD7);
}
function qt({
  unitId: var_core_value_sig63E0,
  subUnitId: var_core_value_sig1B87,
  pivotTableId: var_core_value_sig580B,
  tableFieldId: var_core_value_sig4836,
  type: var_core_value_sig4C06,
  baseItems: var_core_value_sig4D56,
  onConfirm: var_core_value_sig7C26,
  onCancel: var_core_value_sigBC59
}) {
  var var_core_value_sig544E;
  let var_core_value_sigCE8A = (0, e.useDependency)(t.SheetsPivotTableConfigModel),
    var_core_value_sig0718 = (0, e.useDependency)(n.LocaleService),
    var_core_value_sig1B221 = (0, e.useObservable)(var_core_value_sig0718.direction$, var_core_value_sig0718.getDirection()),
    var_core_value_sig8854 = Me.find(var_core_value_sig444C => var_core_value_sig444C.type === var_core_value_sig4C06),
    var_core_value_sig5275 = var_core_value_sigCE8A.getPivotTableConfig(var_core_value_sig63E0, var_core_value_sig1B87, var_core_value_sig580B),
    var_core_value_sig4F9D = var_core_value_sig5275 == null || (var_core_value_sig544E = var_core_value_sig5275.fieldsConfig["measure"][var_core_value_sig4836]) == null ? undefined : var_core_value_sig544E.showDataAs,
    var_core_value_sig278E = () => {
      var var_core_value_sigE42E;
      if ((var_core_value_sig4F9D == null ? undefined : var_core_value_sig4F9D.type) !== var_core_value_sig4C06 || !var_core_value_sig4F9D.baseFieldId) return "";
      if (var_core_value_sig4F9D.baseItemType === l.PivotShowAsBaseItemTypeEnum["previous"]) return "relative:previous";
      if (var_core_value_sig4F9D.baseItemType === l.PivotShowAsBaseItemTypeEnum["next"]) return "relative:next";
      let var_core_value_sigF039 = ((var_core_value_sigE42E = var_core_value_sig4D56[var_core_value_sig4F9D.baseFieldId]) == null ? undefined : var_core_value_sigE42E.items["indexOf"](var_core_value_sig4F9D.baseItem)) ?? -1;
      return var_core_value_sigF039 < 0 ? "" : "item:" + var_core_value_sigF039;
    },
    [var_core_value_sig2921, var_core_value_sig3959] = (0, s.useState)((var_core_value_sig4F9D == null ? undefined : var_core_value_sig4F9D.type) === var_core_value_sig4C06 ? var_core_value_sig4F9D.baseFieldId : ""),
    [var_core_value_sig926F, var_core_value_sig9414] = (0, s.useState)(var_core_value_sig278E),
    var_core_value_sig32E7 = (0, s.useRef)(false),
    [var_core_value_sigD8C3, var_core_value_sig3A44] = (0, s.useState)(false),
    var_core_value_sig0642 = var_core_value_sigCE8A.getPivotTableConfig(var_core_value_sig63E0, var_core_value_sig1B87, var_core_value_sig580B),
    var_core_value_sig786E = var_core_value_sigCE8A.getCollection(var_core_value_sig63E0, var_core_value_sig580B),
    var_core_value_sigFC47 = var_core_value_sig0642 == null ? undefined : var_core_value_sig0642.fieldsConfig["measure"][var_core_value_sig4836],
    var_core_value_sig48E2 = !!(var_core_value_sigFC47 && var_core_value_sig786E && (var_core_value_sig786E.fields[var_core_value_sigFC47.dataFieldId] || var_core_value_sig786E.customFields["find"](var_core_value_sigA321 => var_core_value_sigA321.id === var_core_value_sigFC47.dataFieldId))),
    var_core_value_sig2FCA = (var_core_value_sig0642 && var_core_value_sig786E && var_core_value_sig8854 ? J(var_core_value_sig0642, var_core_value_sig786E, var_core_value_sig8854) : []).filter(var_core_value_sigBF4C => {
      let var_core_value_sig3457 = var_core_value_sig4D56[var_core_value_sigBF4C];
      return (var_core_value_sig8854 == null ? undefined : var_core_value_sig8854.baseItemMode) === "none" || !!(var_core_value_sig3457 && ((var_core_value_sig8854 == null ? undefined : var_core_value_sig8854.baseItemMode) === "item-or-relative" || var_core_value_sig3457.items["length"] > 0));
    }),
    var_core_value_sig04F2 = var_core_value_sig2FCA.map(var_core_value_sig4A08 => ({
      label: var_core_value_sig0642.fieldsConfig["dimension"][var_core_value_sig4A08].displayName,
      value: var_core_value_sig4A08
    })),
    var_core_value_sig2CFC = var_core_value_sig0642 == null ? undefined : var_core_value_sig0642.fieldsConfig["dimension"][var_core_value_sig2921],
    var_core_value_sig5CEB = var_core_value_sig2CFC && var_core_value_sig786E && (var_core_value_sig786E.fields[var_core_value_sig2CFC.dataFieldId] ?? var_core_value_sig786E.customFields["find"](var_core_value_sig1BC4 => var_core_value_sig1BC4.id === var_core_value_sig2CFC.dataFieldId)),
    var_core_value_sig4935 = var_core_value_sig4D56[var_core_value_sig2921],
    var_core_value_sig1832 = (var_core_value_sig4935 == null ? undefined : var_core_value_sig4935.items["map"]((var_core_value_sig9EAB, var_core_value_sigA5C3) => {
      let var_core_value_sig3A1E = var_core_value_sig4935.itemTypes[var_core_value_sigA5C3],
        var_core_value_sigDC92 = var_core_value_sig9EAB;
      return var_core_value_sig3A1E === l.PivotDataFieldDataTypeEnum["blank"] ? var_core_value_sigDC92 = var_core_value_sig0718.t("sheets-pivot-ui.dialog.filter.blank") : var_core_value_sig3A1E === l.PivotDataFieldDataTypeEnum["other"] ? var_core_value_sigDC92 = var_core_value_sig0718.t("sheets-pivot-ui.showValuesAs.other") : (var_core_value_sig3A1E === l.PivotDataFieldDataTypeEnum["date"] || var_core_value_sig3A1E === l.PivotDataFieldDataTypeEnum["number"]) && var_core_value_sig4935.format && (var_core_value_sigDC92 = n.numfmt["format"](var_core_value_sig4935.format, Number(var_core_value_sig9EAB))), {
        label: var_core_value_sigDC92,
        value: "item:" + var_core_value_sigA5C3,
        itemKey: var_core_value_sig9EAB
      };
    })) ?? [];
  (var_core_value_sig8854 == null ? undefined : var_core_value_sig8854.baseItemMode) === "item-or-relative" && var_core_value_sig1832.push({
    label: var_core_value_sig0718.t("sheets-pivot-ui.showValuesAs.previous"),
    value: "relative:previous",
    itemKey: "",
    itemType: l.PivotShowAsBaseItemTypeEnum["previous"]
  }, {
    label: var_core_value_sig0718.t("sheets-pivot-ui.showValuesAs.next"),
    value: "relative:next",
    itemKey: "",
    itemType: l.PivotShowAsBaseItemTypeEnum["next"]
  });
  let var_core_value_sig79D7 = var_core_value_sig1832.find(var_core_value_sig3515 => var_core_value_sig3515.value === var_core_value_sig926F),
    var_core_value_sig5E01 = !!(var_core_value_sig8854 != null && var_core_value_sig8854.baseItemMode && var_core_value_sig8854.baseItemMode !== "none"),
    var_core_value_sigBBE4 = !!(var_core_value_sig8854 && var_core_value_sig0642 && var_core_value_sig786E && var_core_value_sig48E2 && var_core_value_sig0642.fieldsConfig["valueFields"].includes(var_core_value_sig4836) && var_core_value_sig2FCA.includes(var_core_value_sig2921) && var_core_value_sig5CEB && (!var_core_value_sig5E01 || var_core_value_sig79D7));
  return (0, u.jsxs)("div", {
    dir: var_core_value_sig1B221,
    children: [(0, u.jsxs)("div", {
      className: "univer-mb-4",
      children: [(0, u.jsx)("div", {
        className: "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
        children: var_core_value_sig0718.t("sheets-pivot-ui.showValuesAs.baseField")
      }), (0, u.jsx)(i.Select, {
        className: "univer-w-full",
        value: var_core_value_sig2921,
        options: var_core_value_sig04F2,
        onChange: var_core_value_sigC2A0 => {
          var_core_value_sig3959(var_core_value_sigC2A0), var_core_value_sig9414("");
        }
      })]
    }), var_core_value_sig5E01 && (0, u.jsxs)("div", {
      className: "univer-mb-4",
      children: [(0, u.jsx)("div", {
        className: "univer-mb-2 univer-text-sm univer-font-medium",
        children: var_core_value_sig0718.t("sheets-pivot-ui.showValuesAs.baseItem")
      }), (0, u.jsx)(i.Select, {
        className: "univer-w-full",
        value: var_core_value_sig926F,
        options: var_core_value_sig1832,
        disabled: !var_core_value_sig2921,
        onChange: var_core_value_sig9414
      })]
    }), (0, u.jsxs)("div", {
      className: "univer-flex univer-justify-end univer-gap-3",
      children: [(0, u.jsx)(i.Button, {
        onClick: var_core_value_sigBC59,
        children: var_core_value_sig0718.t("sheets-pivot-ui.showValuesAs.cancel")
      }), (0, u.jsx)(i.Button, {
        variant: "primary",
        disabled: !var_core_value_sigBBE4 || var_core_value_sigD8C3,
        onClick: async () => {
          let var_core_value_sig7C65 = var_core_value_sigCE8A.getPivotTableConfig(var_core_value_sig63E0, var_core_value_sig1B87, var_core_value_sig580B),
            var_core_value_sig7F05 = var_core_value_sigCE8A.getCollection(var_core_value_sig63E0, var_core_value_sig580B),
            var_core_value_sig41F3 = var_core_value_sig7C65 == null ? undefined : var_core_value_sig7C65.fieldsConfig["measure"][var_core_value_sig4836];
          if (!var_core_value_sig8854 || !var_core_value_sig7C65 || !var_core_value_sig7F05 || !var_core_value_sig41F3 || var_core_value_sig32E7.current || !var_core_value_sig7C65.fieldsConfig["valueFields"].includes(var_core_value_sig4836) || !(var_core_value_sig7F05.fields[var_core_value_sig41F3.dataFieldId] || var_core_value_sig7F05.customFields["find"](var_core_value_sig670B => var_core_value_sig670B.id === var_core_value_sig41F3.dataFieldId)) || !J(var_core_value_sig7C65, var_core_value_sig7F05, var_core_value_sig8854).includes(var_core_value_sig2921) || var_core_value_sig5E01 && !var_core_value_sig79D7) return;
          let var_core_value_sigF455 = {
            type: var_core_value_sig4C06,
            baseFieldId: var_core_value_sig2921,
            baseItem: (var_core_value_sig79D7 == null ? undefined : var_core_value_sig79D7.itemKey) ?? ""
          };
          (var_core_value_sig79D7 == null ? undefined : var_core_value_sig79D7.itemType) !== undefined && (var_core_value_sigF455.baseItemType = var_core_value_sig79D7.itemType), var_core_value_sig32E7.current = true, var_core_value_sig3A44(true);
          try {
            await var_core_value_sig7C26(var_core_value_sigF455);
          } catch {} finally {
            var_core_value_sig32E7.current = false, var_core_value_sig3A44(false);
          }
        },
        children: var_core_value_sig0718.t("sheets-pivot-ui.showValuesAs.ok")
      })]
    })]
  });
}
const Jt = [{
  id: "equal",
  localeKey: "sheets-pivot-ui.valueFilter.equal",
  operator: l.ST_PivotFilterOperatorEnum["valueEqual"]
}, {
  id: "notEqual",
  localeKey: "sheets-pivot-ui.valueFilter.notEqual",
  operator: l.ST_PivotFilterOperatorEnum["valueNotEqual"]
}, {
  id: "greaterThan",
  localeKey: "sheets-pivot-ui.valueFilter.greaterThan",
  operator: l.ST_PivotFilterOperatorEnum["valueGreaterThan"]
}, {
  id: "greaterThanOrEqual",
  localeKey: "sheets-pivot-ui.valueFilter.greaterThanOrEqual",
  operator: l.ST_PivotFilterOperatorEnum["valueGreaterThanOrEqual"]
}, {
  id: "lessThan",
  localeKey: "sheets-pivot-ui.valueFilter.lessThan",
  operator: l.ST_PivotFilterOperatorEnum["valueLessThan"]
}, {
  id: "lessThanOrEqual",
  localeKey: "sheets-pivot-ui.valueFilter.lessThanOrEqual",
  operator: l.ST_PivotFilterOperatorEnum["valueLessThanOrEqual"]
}, {
  id: "between",
  localeKey: "sheets-pivot-ui.valueFilter.between",
  operator: l.ST_PivotFilterOperatorEnum["valueBetween"],
  isBetween: true
}, {
  id: "notBetween",
  localeKey: "sheets-pivot-ui.valueFilter.notBetween",
  operator: l.ST_PivotFilterOperatorEnum["valueNotBetween"],
  isBetween: true
}, {
  id: "topCount",
  localeKey: "sheets-pivot-ui.valueFilter.topCount",
  operator: l.ST_PivotFilterOperatorEnum["count"],
  isCount: true
}, {
  id: "bottomCount",
  localeKey: "sheets-pivot-ui.valueFilter.bottomCount",
  operator: l.ST_PivotFilterOperatorEnum["count"],
  isBottom: true,
  isCount: true
}, {
  id: "topPercent",
  localeKey: "sheets-pivot-ui.valueFilter.topPercent",
  operator: l.ST_PivotFilterOperatorEnum["percent"],
  isPercent: true
}, {
  id: "bottomPercent",
  localeKey: "sheets-pivot-ui.valueFilter.bottomPercent",
  operator: l.ST_PivotFilterOperatorEnum["percent"],
  isBottom: true,
  isPercent: true
}];
function Yt(var_core_value_sig96B3) {
  var var_core_value_sig9CF2;
  return (var_core_value_sig96B3 == null ? undefined : var_core_value_sig96B3.operator) === l.ST_PivotFilterOperatorEnum["count"] ? var_core_value_sig96B3.isBottom ? "bottomCount" : "topCount" : (var_core_value_sig96B3 == null ? undefined : var_core_value_sig96B3.operator) === l.ST_PivotFilterOperatorEnum["percent"] ? var_core_value_sig96B3.isBottom ? "bottomPercent" : "topPercent" : ((var_core_value_sig9CF2 = Jt.find(var_core_value_sig6E78 => var_core_value_sig6E78.operator === (var_core_value_sig96B3 == null ? undefined : var_core_value_sig96B3.operator))) == null ? undefined : var_core_value_sig9CF2.id) ?? "greaterThan";
}
function Xt({
  targetFieldId: var_core_value_sig666D,
  targetFieldName: var_core_value_sigBD53,
  valueFields: var_core_value_sigD11F,
  defaultValueFieldId: var_core_value_sig62231,
  currentFilter: var_core_value_sig7653,
  onConfirm: var_core_value_sigF65B,
  onClear: var_core_value_sig4A94,
  onCancel: var_core_value_sigEB59
}) {
  let var_core_value_sigD9B0 = (0, e.useDependency)(n.LocaleService),
    var_core_value_sigB7D6 = (0, e.useObservable)(var_core_value_sigD9B0.direction$, var_core_value_sigD9B0.getDirection()),
    var_core_value_sigCF1F = var_core_value_sig7653 == null ? undefined : var_core_value_sig7653.expected,
    [var_core_value_sig4DD1, var_core_value_sig1293] = (0, s.useState)(() => {
      let var_core_value_sigB3EE = var_core_value_sig7653 == null ? undefined : var_core_value_sig7653.valueFieldId;
      return var_core_value_sigB3EE && var_core_value_sigD11F.some(var_core_value_sig6912 => var_core_value_sig6912.id === var_core_value_sigB3EE) ? var_core_value_sigB3EE : var_core_value_sig62231 && var_core_value_sigD11F.some(var_core_value_sigE235 => var_core_value_sigE235.id === var_core_value_sig62231) ? var_core_value_sig62231 : var_core_value_sigD11F.length === 1 ? var_core_value_sigD11F[0].id : "";
    }),
    [var_core_value_sigC999, var_core_value_sig9D8F] = (0, s.useState)(() => Yt(var_core_value_sig7653)),
    [var_core_value_sig8270, var_core_value_sig95D9] = (0, s.useState)(() => Number(Array.isArray(var_core_value_sigCF1F) ? var_core_value_sigCF1F[0] : var_core_value_sigCF1F ?? 0)),
    [var_core_value_sig0E92, var_core_value_sig45CD] = (0, s.useState)(() => Array.isArray(var_core_value_sigCF1F) ? Number(var_core_value_sigCF1F[1]) : 0),
    var_core_value_sigAD84 = (0, s.useRef)(false),
    [var_core_value_sigD513, var_core_value_sig36BD] = (0, s.useState)(false),
    var_core_value_sig0413 = Jt.find(var_core_value_sigC50A => var_core_value_sigC50A.id === var_core_value_sigC999),
    var_core_value_sig15B6 = var_core_value_sig8270 !== "" && Number.isFinite(var_core_value_sig8270),
    var_core_value_sigFEBF = !var_core_value_sig0413.isBetween || var_core_value_sig0E92 !== "" && Number.isFinite(var_core_value_sig0E92),
    var_core_value_sigBBA2 = !var_core_value_sig0413.isCount || Number.isInteger(var_core_value_sig8270) && Number(var_core_value_sig8270) >= 1,
    var_core_value_sigC9A1 = !var_core_value_sig0413.isPercent || Number(var_core_value_sig8270) >= 0 && Number(var_core_value_sig8270) <= 100,
    var_core_value_sigE469 = !!(var_core_value_sigD11F.some(var_core_value_sig11D0 => var_core_value_sig11D0.id === var_core_value_sig4DD1) && var_core_value_sig15B6 && var_core_value_sigFEBF && var_core_value_sigBBA2 && var_core_value_sigC9A1),
    var_core_value_sigA499 = async var_core_value_sigB8ED => {
      if (!var_core_value_sigAD84.current) {
        var_core_value_sigAD84.current = true, var_core_value_sig36BD(true);
        try {
          await var_core_value_sigB8ED();
        } catch {} finally {
          var_core_value_sigAD84.current = false, var_core_value_sig36BD(false);
        }
      }
    };
  return (0, u.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-4",
    "data-target-field-id": var_core_value_sig666D,
    dir: var_core_value_sigB7D6,
    children: [(0, u.jsx)("div", {
      className: "univer-text-sm univer-font-medium",
      children: (0, u.jsx)("bdi", {
        dir: "auto",
        children: var_core_value_sigBD53
      })
    }), (0, u.jsxs)("label", {
      className: "univer-flex univer-flex-col univer-gap-2 univer-text-sm",
      children: [var_core_value_sigD9B0.t("sheets-pivot-ui.valueFilter.valueField"), (0, u.jsxs)("select", {
        className: "univer-h-8 univer-rounded univer-border univer-border-gray-200 univer-bg-white univer-px-2 dark:!univer-border-gray-500 dark:!univer-bg-gray-700",
        "data-testid": "pivot-value-filter-value-field",
        value: var_core_value_sig4DD1,
        onChange: var_core_value_sig8EAE => var_core_value_sig1293(var_core_value_sig8EAE.target["value"]),
        children: [(0, u.jsx)("option", {
          value: "",
          children: var_core_value_sigD9B0.t("sheets-pivot-ui.valueFilter.selectValueField")
        }), var_core_value_sigD11F.map(var_core_value_sig1CDD => (0, u.jsx)("option", {
          value: var_core_value_sig1CDD.id,
          children: var_core_value_sig1CDD.label
        }, var_core_value_sig1CDD.id))]
      })]
    }), (0, u.jsxs)("label", {
      className: "univer-flex univer-flex-col univer-gap-2 univer-text-sm",
      children: [var_core_value_sigD9B0.t("sheets-pivot-ui.valueFilter.condition"), (0, u.jsx)("select", {
        className: "univer-h-8 univer-rounded univer-border univer-border-gray-200 univer-bg-white univer-px-2 dark:!univer-border-gray-500 dark:!univer-bg-gray-700",
        "data-testid": "pivot-value-filter-rule",
        value: var_core_value_sigC999,
        onChange: var_core_value_sig0DB11 => var_core_value_sig9D8F(var_core_value_sig0DB11.target["value"]),
        children: Jt.map(var_core_value_sig68A2 => (0, u.jsx)("option", {
          value: var_core_value_sig68A2.id,
          children: var_core_value_sigD9B0.t(var_core_value_sig68A2.localeKey)
        }, var_core_value_sig68A2.id))
      })]
    }), (0, u.jsxs)("div", {
      className: "univer-flex univer-gap-2",
      children: [(0, u.jsx)("input", {
        "aria-label": var_core_value_sigD9B0.t("sheets-pivot-ui.valueFilter.condition"),
        className: "univer-h-8 univer-min-w-0 univer-flex-1 univer-rounded univer-border univer-border-gray-200 univer-px-2 dark:!univer-border-gray-500",
        "data-testid": "pivot-value-filter-expected",
        type: "number",
        min: var_core_value_sig0413.isCount ? 1 : var_core_value_sig0413.isPercent ? 0 : undefined,
        max: var_core_value_sig0413.isPercent ? 100 : undefined,
        step: var_core_value_sig0413.isCount ? 1 : undefined,
        value: var_core_value_sig8270,
        onChange: var_core_value_sigCC17 => var_core_value_sig95D9(var_core_value_sigCC17.target["value"] === "" ? "" : Number(var_core_value_sigCC17.target["value"]))
      }), var_core_value_sig0413.isBetween && (0, u.jsx)("input", {
        "aria-label": var_core_value_sigD9B0.t("sheets-pivot-ui.valueFilter.condition"),
        className: "univer-h-8 univer-min-w-0 univer-flex-1 univer-rounded univer-border univer-border-gray-200 univer-px-2 dark:!univer-border-gray-500",
        "data-testid": "pivot-value-filter-expected",
        type: "number",
        value: var_core_value_sig0E92,
        onChange: var_core_value_sig32AE => var_core_value_sig45CD(var_core_value_sig32AE.target["value"] === "" ? "" : Number(var_core_value_sig32AE.target["value"]))
      })]
    }), (0, u.jsxs)("div", {
      className: "univer-flex univer-justify-between univer-gap-3",
      children: [(0, u.jsx)(i.Button, {
        "data-testid": "pivot-value-filter-clear",
        disabled: var_core_value_sigD513,
        onClick: () => var_core_value_sigA499(var_core_value_sig4A94),
        children: var_core_value_sigD9B0.t("sheets-pivot-ui.valueFilter.clear")
      }), (0, u.jsxs)("div", {
        className: "univer-flex\x20univer-gap-3",
        children: [(0, u.jsx)(i.Button, {
          disabled: var_core_value_sigD513,
          onClick: var_core_value_sigEB59,
          children: var_core_value_sigD9B0.t("sheets-pivot-ui.valueFilter.cancel")
        }), (0, u.jsx)(i.Button, {
          "data-testid": "pivot-value-filter-confirm",
          variant: "primary",
          disabled: !var_core_value_sigE469 || var_core_value_sigD513,
          onClick: () => var_core_value_sigA499(async () => {
            if (!var_core_value_sigE469) return;
            let var_core_value_sig7664 = {
              operator: var_core_value_sig0413.operator,
              expected: var_core_value_sig0413.isBetween ? [Number(var_core_value_sig8270), Number(var_core_value_sig0E92)] : Number(var_core_value_sig8270),
              valueFieldId: var_core_value_sig4DD1
            };
            var_core_value_sig0413.isBottom && (var_core_value_sig7664.isBottom = true), await var_core_value_sigF65B(var_core_value_sig7664);
          }),
          children: var_core_value_sigD9B0.t("sheets-pivot-ui.valueFilter.ok")
        })]
      })]
    })]
  });
}
function Zt(var_core_value_sig4CC3) {
  let {
      pivotTableId: var_core_value_sig70B3,
      tableFieldId: var_core_value_sig422B,
      closeFn: var_core_value_sig1038,
      unitId: var_core_value_sigC3E6,
      subUnitId: var_core_value_sig3710,
      format: var_core_value_sig9726,
      tableFieldInfo: var_core_value_sigFC9B,
      dataFieldInfo: var_core_value_sig943E,
      version: var_core_value_sigEF36
    } = var_core_value_sig4CC3,
    [var_core_value_sigD4B1, var_core_value_sigE5D8] = (0, s.useState)(var_core_value_sigFC9B.displayName),
    [var_core_value_sig74AF, var_core_value_sigBABA] = (0, s.useState)(var_core_value_sigFC9B.subTotalType),
    var_core_value_sigA723 = (0, e.useDependency)(n.LocaleService),
    var_core_value_sig991C = (0, e.useDependency)(n.ICommandService),
    var_core_value_sigF909 = (0, e.useDependency)(e.IDialogService),
    var_core_value_sigDD0E = {
      ...(0, e.useDependency)(t.SheetsPivotTableConfigModel).getTextInfo()
    };
  for (let var_core_value_sigC753 of ["sheets-pivot-ui.averageName", "sheets-pivot-ui.countName", "sheets-pivot-ui.countNumsName", "sheets-pivot-ui.maxName", "sheets-pivot-ui.minName", "sheets-pivot-ui.productName", "sheets-pivot-ui.stdDevName", "sheets-pivot-ui.stdDevpName", "sheets-pivot-ui.sumName", "sheets-pivot-ui.varName", "sheets-pivot-ui.varpName"]) var_core_value_sigDD0E[var_core_value_sigC753] = var_core_value_sigA723.t(var_core_value_sigC753);
  if ((0, s.useEffect)(() => {
    var_core_value_sigE5D8(var_core_value_sigFC9B.displayName), var_core_value_sigBABA(var_core_value_sigFC9B.subTotalType);
  }, [var_core_value_sigEF36]), !var_core_value_sigFC9B || !var_core_value_sig943E) return;
  let var_core_value_sigF2A0 = var_core_value_sig943E.name,
    var_core_value_sig116F = var_core_value_sigA723.getDirection(),
    var_core_value_sigA64C = var_core_value_sig9726 ?? var_core_value_sigFC9B.format,
    var_core_value_sigAF94 = fe.map(var_core_value_sigFFD1 => ({
      value: "" + var_core_value_sigFFD1.type,
      type: var_core_value_sigFFD1.type,
      label: var_core_value_sigA723.t(var_core_value_sigFFD1.textKey)
    })),
    var_core_value_sig1E9F = var_core_value_sig81AE => {
      let var_core_value_sigF79F = var_core_value_sig81AE;
      if (Array.isArray(var_core_value_sig81AE) && (var_core_value_sigF79F = var_core_value_sig81AE[0]), var_core_value_sigF79F !== undefined) {
        let var_core_value_sig2281 = Number(var_core_value_sigF79F);
        var_core_value_sigBABA(var_core_value_sig2281), Ce(var_core_value_sigF2A0, var_core_value_sigD4B1, var_core_value_sigDD0E) && var_core_value_sigE5D8(we(var_core_value_sigF2A0, var_core_value_sigDD0E, var_core_value_sig2281));
      }
    };
  return (0, u.jsxs)("div", {
    dir: var_core_value_sig116F,
    children: [(0, u.jsxs)("div", {
      className: "univer-flex univer-items-center univer-justify-between univer-self-stretch univer-leading-5",
      children: [(0, u.jsx)("span", {
        className: "univer-text-sm univer-font-medium univer-leading-5 univer-text-gray-900",
        children: var_core_value_sigA723.t("sheets-pivot-ui.dialog.fieldName")
      }), (0, u.jsx)("span", {
        className: "univer-text-xs univer-leading-4 univer-text-gray-600",
        children: ee(var_core_value_sigA723.t("sheets-pivot-ui.dialog.sourceName"), var_core_value_sigF2A0)
      })]
    }), (0, u.jsx)("div", {
      children: (0, u.jsx)(i.Input, {
        className: "univer-mb-5 univer-mt-2 univer-box-border univer-h-8 univer-w-full univer-rounded-md univer-py-1.5 univer-text-sm univer-leading-5",
        value: var_core_value_sigD4B1,
        onChange: var_core_value_sig0E54 => var_core_value_sigE5D8(var_core_value_sig0E54)
      })
    }), (0, u.jsx)("label", {
      className: "univer-mb-2\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
      children: var_core_value_sigA723.t("sheets-pivot-ui.dialog.summarizeBy")
    }), (0, u.jsx)("div", {
      className: (0, i.clsx)("univer-h-40\x20univer-flex-1\x20univer-overflow-y-auto\x20univer-rounded-lg", i.borderClassName, i.scrollbarClassName),
      children: var_core_value_sigAF94.map(var_core_value_sig3B17 => (0, u.jsxs)("div", {
        className: "univer-flex univer-items-center univer-gap-1.5 univer-self-stretch univer-rounded-md univer-px-2 univer-py-1.5 univer-text-sm univer-capitalize univer-leading-5",
        onClick: () => var_core_value_sig1E9F(var_core_value_sig3B17.value),
        children: [(0, u.jsx)("span", {
          className: "univer-w-4 univer-text-base univer-text-primary-600",
          children: (0, u.jsx)(m.CheckMarkIcon, {
            className: (0, i.clsx)({
              "univer-hidden": var_core_value_sig74AF !== var_core_value_sig3B17.type
            })
          })
        }), (0, u.jsx)("span", {
          children: var_core_value_sig3B17.label
        })]
      }, var_core_value_sig3B17.type))
    }), (0, u.jsx)("footer", {
      className: "univer-mt-5",
      children: (0, u.jsxs)(i.ActionRow, {
        className: "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-self-stretch",
        children: [(0, u.jsx)(i.Button, {
          className: "univer-flex univer-h-8 univer-cursor-pointer univer-items-center univer-justify-center univer-gap-1.5 univer-rounded univer-border-none univer-bg-gray-0 univer-px-3 univer-text-primary-600",
          onClick: () => {
            let var_core_value_sig6C4A = {
              id: S,
              draggable: true,
              mask: false,
              maskClosable: false,
              width: 400,
              children: {
                label: C,
                unitId: var_core_value_sigC3E6,
                subUnitId: var_core_value_sig3710,
                pivotTableId: var_core_value_sig70B3,
                tableFieldId: var_core_value_sig422B,
                originPattern: var_core_value_sigA64C,
                tableFieldInfo: var_core_value_sigFC9B,
                dataFieldInfo: var_core_value_sig943E
              },
              dialogStyles: {
                header: {
                  padding: "20px 24px 0",
                  height: 0
                },
                body: {
                  padding: "0 24px 20px"
                }
              },
              closable: false,
              onClose: () => {
                var_core_value_sigF909.close(S);
              }
            };
            var_core_value_sigF909.open(var_core_value_sig6C4A);
          },
          children: var_core_value_sigA723.t("sheets-pivot-ui.dialog.format")
        }), (0, u.jsxs)(i.ActionRow, {
          className: "univer-flex univer-flex-1 univer-gap-2 univer-text-sm rtl:univer-flex-row-reverse",
          children: [(0, u.jsx)(i.Button, {
            onClick: () => {
              var_core_value_sig1038 && var_core_value_sig1038();
            },
            children: var_core_value_sigA723.t("sheets-pivot-ui.dialog.cancel")
          }), (0, u.jsx)(i.Button, {
            variant: "primary",
            disabled: var_core_value_sigD4B1 === "",
            onClick: () => {
              let var_core_value_sig73D9 = var_core_value_sigFC9B.displayName,
                var_core_value_sigEAF8 = var_core_value_sigFC9B.subTotalType,
                var_core_value_sig0455 = var_core_value_sigFC9B.format,
                var_core_value_sig737C = var_core_value_sig73D9 === var_core_value_sigD4B1 ? undefined : var_core_value_sigD4B1,
                var_core_value_sig5AF5 = var_core_value_sigEAF8 === var_core_value_sig74AF ? undefined : var_core_value_sig74AF,
                var_core_value_sig9DE4 = var_core_value_sig0455 === var_core_value_sigA64C ? undefined : var_core_value_sigA64C;
              if (var_core_value_sig73D9 !== var_core_value_sigD4B1 || var_core_value_sigEAF8 !== var_core_value_sig74AF || var_core_value_sig0455 !== var_core_value_sig9DE4) {
                let var_core_value_sig5E86 = {
                  displayName: var_core_value_sig737C,
                  subtotalType: var_core_value_sig5AF5,
                  format: var_core_value_sig9DE4,
                  tableFieldId: var_core_value_sig422B,
                  pivotTableId: var_core_value_sig70B3,
                  unitId: var_core_value_sigC3E6,
                  subUnitId: var_core_value_sig3710,
                  tableFieldInfo: var_core_value_sigFC9B,
                  dataFieldInfo: var_core_value_sig943E
                };
                var_core_value_sig991C.executeCommand(t.UpdatePivotFieldSettingCommand["id"], var_core_value_sig5E86);
              }
              var_core_value_sig1038 && var_core_value_sig1038();
            },
            children: var_core_value_sigA723.t("sheets-pivot-ui.dialog.ok")
          })]
        })]
      })
    })]
  });
}
let X = class extends n.Disposable {
  constructor(var_core_value_sig77FA, var_core_value_sigA4A7) {
    super(), this._componentManager = var_core_value_sig77FA, this._iconManager = var_core_value_sigA4A7, this._registerComponents(), this._registerIcons();
  }
  _registerComponents() {
    [[G.componentKey, G], [_, Gt], [y, pt], [x, Zt], [C, yt], [T, Kt], [E, Xt]].forEach(([var_core_value_sig6998, var_core_value_sigF639]) => {
      this.disposeWithMe(this._componentManager["register"](var_core_value_sig6998, var_core_value_sigF639));
    });
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      PivotTableIcon: m.PivotTableIcon
    }));
  }
};
X = P([N(0, (0, n.Inject)(e.ComponentManager)), N(1, (0, n.Inject)(e.IconManager))], X);
let Z = class extends n.Disposable {
  constructor(var_core_value_sigA4DF, var_core_value_sigCC9D, var_core_value_sig90F5, var_core_value_sigD2BA, var_core_value_sigCD3A, var_core_value_sig519D, var_core_value_sigC7E7) {
    var var_core_value_sig6E1C;
    super(), this._localeService = var_core_value_sigA4DF, this._sheetInterceptorService = var_core_value_sigCC9D, this._injector = var_core_value_sig90F5, this._confirmService = var_core_value_sigD2BA, this._sheetsPivotTableService = var_core_value_sigCD3A, this._configService = var_core_value_sig519D, this._sheetPermissionCheckController = var_core_value_sigC7E7, M(this, "_defaultOverride", false), this._initUIInterceptListener(), this._defaultOverride = ((var_core_value_sig6E1C = this._configService["getConfig"](t.SHEETS_PIVOT_PLUGIN_CONFIG_KEY)) == null ? undefined : var_core_value_sig6E1C.defaultOverride) ?? false;
  }
  _getPivotAppliedRanges(var_core_value_sigFABC, var_core_value_sig413D, var_core_value_sig5BCE) {
    return (0, t.getPivotAppliedRanges)(var_core_value_sigFABC, var_core_value_sig413D, var_core_value_sig5BCE, this._localeService["getDirection"]());
  }
  _initUIInterceptListener() {
    this._sheetsPivotTableService["asyncInterceptor"].interceptAsync(this._sheetsPivotTableService["asyncInterceptor"].getInterceptPoints().PIVOT_PERFORM_CHECK, {
      handler: async (var_core_value_sigEAE5, var_core_value_sigE94C) => {
        let {
            cellInfo: var_core_value_sig6D47,
            view: var_core_value_sigCB82,
            isEmpty: var_core_value_sigCF4E
          } = var_core_value_sigE94C,
          {
            unitId: var_core_value_sig6CAD,
            subUnitId: var_core_value_sig8CF5
          } = var_core_value_sig6D47,
          var_core_value_sigDDD7 = this._getPivotAppliedRanges(var_core_value_sig6D47, var_core_value_sigCB82, var_core_value_sigCF4E);
        if (!(0, r.checkRangesEditablePermission)(this._injector, var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7)) {
          let var_core_value_sig2D58 = this._localeService["t"]("sheets-pivot-ui.msg.permissionError");
          this._sheetPermissionCheckController["blockExecuteWithoutPermission"](var_core_value_sig2D58);
        }
        let var_core_value_sigB2CE = this._sheetInterceptorService["generateMutationsByRanges"]({
            unitId: var_core_value_sig6CAD,
            subUnitId: var_core_value_sig8CF5,
            ranges: var_core_value_sigDDD7
          }),
          var_core_value_sig443C = (0, t.generateSetRangeValueMutations)(this._injector, var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7);
        if (var_core_value_sigB2CE.redos["length"] || var_core_value_sig443C.shouldClear) {
          if (this._defaultOverride) return Promise.resolve(true);
          {
            let var_core_value_sig5CEE = await this._confirmService["confirm"]({
              id: "sheet-pivot.confirm.add-sheet-pivot",
              title: {
                title: this._localeService["t"]("sheets-pivot-ui.perform.tips")
              },
              children: {
                title: this._localeService["t"]("sheets-pivot-ui.perform.info")
              },
              cancelText: this._localeService["t"]("sheets-pivot-ui.perform.cancel"),
              confirmText: this._localeService["t"]("sheets-pivot-ui.perform.confirm")
            });
            return Promise.resolve(var_core_value_sig5CEE);
          }
        }
        return Promise.resolve(true);
      }
    });
  }
};
Z = P([N(0, (0, n.Inject)(n.LocaleService)), N(1, (0, n.Inject)(r.SheetInterceptorService)), N(2, (0, n.Inject)(n.Injector)), N(3, (0, n.Inject)(n.IConfirmService)), N(4, (0, n.Inject)(t.SheetsPivotTableService)), N(5, (0, n.Inject)(n.IConfigService)), N(6, (0, n.Inject)(r.SheetPermissionCheckController))], Z);
let Qt = class extends n.Disposable {
  constructor(var_core_value_sig8EF01, var_core_value_sig78AC, var_core_value_sig4CEF) {
    super(), this._univerInstanceService = var_core_value_sig8EF01, this._sheetsPivotTableAdaptorModel = var_core_value_sig78AC, this._sheetClipboardService = var_core_value_sig4CEF, this._initialize();
  }
  _initialize() {
    let var_core_value_sigD57D = this,
      var_core_value_sig2CC7,
      var_core_value_sig4784;
    this.disposeWithMe(this._sheetClipboardService["addClipboardHook"]({
      id: t.SHEET_PIVOT_TABLE_PLUGIN,
      onBeforeCopy(var_core_value_sig39B1, var_core_value_sig210D) {
        let var_core_value_sigB4B4 = var_core_value_sigD57D._univerInstanceService["getUnit"](var_core_value_sig39B1, n.UniverInstanceType["UNIVER_SHEET"]);
        var_core_value_sigB4B4 && (var_core_value_sig2CC7 = var_core_value_sigD57D._sheetsPivotTableAdaptorModel["getSubUnitPivotMatrix"](var_core_value_sig39B1, var_core_value_sig210D), var_core_value_sig4784 = var_core_value_sigB4B4.getStyles());
      },
      onAfterCopy() {
        var_core_value_sig2CC7 = null, var_core_value_sig4784 = null;
      },
      getCellValueBySpecialMatrix(var_core_value_sigD407, var_core_value_sig63F3) {
        if (!var_core_value_sig2CC7) return;
        let var_core_value_sig6A71 = var_core_value_sig2CC7 == null ? undefined : var_core_value_sig2CC7.getValue(var_core_value_sigD407, var_core_value_sig63F3);
        if (var_core_value_sig6A71) {
          var var_core_value_sig3BF6;
          return {
            ...var_core_value_sig6A71,
            s: var_core_value_sig4784 == null ? undefined : var_core_value_sig4784.get(var_core_value_sig6A71.s),
            displayV: ((var_core_value_sig3BF6 = var_core_value_sig6A71.v) == null ? undefined : var_core_value_sig3BF6.toString()) || ""
          };
        }
      }
    }));
  }
};
Qt = P([N(0, (0, n.Inject)(n.IUniverInstanceService)), N(1, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)), N(2, d.ISheetClipboardService)], Qt);
const $t = [r.InsertRowCommand["id"], r.RemoveColCommand["id"], r.RemoveRowCommand["id"], r.InsertColCommand["id"]];
let en = class extends n.Disposable {
  constructor(var_core_value_sigC39E, var_core_value_sig16C7, var_core_value_sig7481, var_core_value_sig08A3, var_core_value_sig77D8, var_core_value_sig78A3, var_core_value_sig649B, var_core_value_sig6256, var_core_value_sigE7A6) {
    var var_core_value_sigB505;
    super(), this._injector = var_core_value_sigC39E, this._univerInstanceService = var_core_value_sig16C7, this._sheetsPivotTableAdaptorModel = var_core_value_sig7481, this._sheetInterceptorService = var_core_value_sig08A3, this._confirmService = var_core_value_sig77D8, this._localeService = var_core_value_sig78A3, this._sheetsPivotTableConfigModel = var_core_value_sig649B, this._messageService = var_core_value_sig6256, this._configService = var_core_value_sigE7A6, M(this, "_defaultOverride", false), this._initMoveRangeConfirmCheck(), this._initRowColOperationCheck(), this._defaultOverride = ((var_core_value_sigB505 = this._configService["getConfig"](t.SHEETS_PIVOT_PLUGIN_CONFIG_KEY)) == null ? undefined : var_core_value_sigB505.defaultOverride) ?? false;
  }
  _initMoveRangeConfirmCheck() {
    this.disposeWithMe(this._sheetInterceptorService["interceptBeforeCommand"]({
      performCheck: async var_core_value_sig38CE => {
        if (var_core_value_sig38CE.id === r.MoveRangeCommand["id"]) {
          let var_core_value_sig223F = (0, r.getSheetCommandTarget)(this._univerInstanceService);
          if (!var_core_value_sig223F) return Promise.resolve(false);
          let {
              unitId: var_core_value_sigD749,
              subUnitId: var_core_value_sigCFFA
            } = var_core_value_sig223F,
            {
              fromRange: var_core_value_sig58C1,
              toRange: var_core_value_sig5090
            } = var_core_value_sig38CE.params,
            var_core_value_sigC368 = this._sheetsPivotTableConfigModel["getSubUnitPivotConfigs"](var_core_value_sigD749, var_core_value_sigCFFA);
          if (!(var_core_value_sigC368 != null && var_core_value_sigC368.size)) return Promise.resolve(true);
          for (let [var_core_value_sigE92A, var_core_value_sig362B] of var_core_value_sigC368) {
            let {
                targetCellInfo: var_core_value_sig186C
              } = var_core_value_sig362B,
              {
                row: var_core_value_sigD955,
                col: var_core_value_sig48BD
              } = var_core_value_sig186C,
              var_core_value_sig429F = var_core_value_sigD955 - var_core_value_sig58C1.startRow,
              var_core_value_sigF62A = var_core_value_sig48BD - var_core_value_sig58C1.startColumn,
              var_core_value_sig8178 = {
                row: var_core_value_sig5090.startRow + var_core_value_sig429F,
                col: var_core_value_sig5090.startColumn + var_core_value_sigF62A
              },
              var_core_value_sigE9ED = var_core_value_sig8178.row - var_core_value_sig186C.row,
              var_core_value_sigB577 = var_core_value_sig8178.col - var_core_value_sig186C.col,
              var_core_value_sig9572 = this._sheetsPivotTableAdaptorModel["getPivotItemRenderInfoCache"](var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sigE92A),
              var_core_value_sigD873 = var_core_value_sig9572 == null ? undefined : var_core_value_sig9572.rangesInfo;
            if (!var_core_value_sigD873) return Promise.resolve(true);
            let var_core_value_sigA12B = [];
            Object.keys(var_core_value_sigD873).forEach(var_core_value_sigC9E0 => {
              var_core_value_sigD873[var_core_value_sigC9E0].forEach(var_core_value_sigBC46 => {
                let var_core_value_sig3D7D = {
                  ...var_core_value_sigBC46
                };
                var_core_value_sig3D7D.startRow = var_core_value_sigBC46.startRow + var_core_value_sigE9ED, var_core_value_sig3D7D.endRow = var_core_value_sigBC46.endRow + var_core_value_sigE9ED, var_core_value_sig3D7D.startColumn = var_core_value_sigBC46.startColumn + var_core_value_sigB577, var_core_value_sig3D7D.endColumn = var_core_value_sigBC46.endColumn + var_core_value_sigB577, var_core_value_sigA12B.push(var_core_value_sig3D7D);
              });
            });
            let var_core_value_sigF230 = this._sheetInterceptorService["generateMutationsByRanges"]({
                unitId: var_core_value_sigD749,
                subUnitId: var_core_value_sigCFFA,
                ranges: var_core_value_sigA12B
              }),
              var_core_value_sig09B8 = (0, t.generateSetRangeValueMutations)(this._injector, var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sigA12B);
            if (var_core_value_sigF230.redos["length"] || var_core_value_sig09B8.shouldClear) {
              if (this._defaultOverride) return Promise.resolve(true);
              {
                let var_core_value_sig27E5 = await this._confirmService["confirm"]({
                  id: "sheet-pivot.confirm.add-sheet-pivot",
                  title: {
                    title: this._localeService["t"]("sheets-pivot-ui.perform.tips")
                  },
                  children: {
                    title: this._localeService["t"]("sheets-pivot-ui.perform.info")
                  },
                  cancelText: this._localeService["t"]("sheets-pivot-ui.perform.cancel"),
                  confirmText: this._localeService["t"]("sheets-pivot-ui.perform.confirm")
                });
                return Promise.resolve(var_core_value_sig27E5);
              }
            }
          }
        }
        return Promise.resolve(true);
      }
    }));
  }
  _initRowColOperationCheck() {
    this.disposeWithMe(this._sheetInterceptorService["interceptBeforeCommand"]({
      performCheck: async var_core_value_sig62B7 => {
        if ($t.includes(var_core_value_sig62B7.id)) {
          let var_core_value_sigAD561 = var_core_value_sig62B7.params,
            {
              range: var_core_value_sigDB4A
            } = var_core_value_sigAD561,
            var_core_value_sig6418 = (0, r.getSheetCommandTarget)(this._univerInstanceService),
            var_core_value_sig1896 = var_core_value_sigAD561.unitId || (var_core_value_sig6418 == null ? undefined : var_core_value_sig6418.unitId),
            var_core_value_sig0285 = var_core_value_sigAD561.subUnitId || (var_core_value_sig6418 == null ? undefined : var_core_value_sig6418.subUnitId);
          if (!var_core_value_sig1896 || !var_core_value_sig0285) return Promise.resolve(true);
          let var_core_value_sig777D = this._sheetsPivotTableConfigModel["getSubUnitPivotConfigs"](var_core_value_sig1896, var_core_value_sig0285);
          if (var_core_value_sig777D != null && var_core_value_sig777D.size) for (let [var_core_value_sig5CA5, var_core_value_sigE90F] of var_core_value_sig777D) {
            let var_core_value_sig6F91 = this._sheetsPivotTableAdaptorModel["getPivotItemRenderInfoCache"](var_core_value_sig1896, var_core_value_sig0285, var_core_value_sig5CA5);
            if (var_core_value_sig6F91 != null && var_core_value_sig6F91.rangesInfo) {
              for (let var_core_value_sig8061 of Object.keys(var_core_value_sig6F91.rangesInfo)) if (var_core_value_sig6F91.rangesInfo[var_core_value_sig8061].some(var_core_value_sig2AD8 => n.Rectangle["intersects"](var_core_value_sig2AD8, var_core_value_sigDB4A))) return this._messageService["show"]({
                type: i.MessageType["Error"],
                content: this._localeService["t"]("sheets-pivot-ui.perform.rowColError")
              }), Promise.resolve(false);
            }
          }
        }
        return Promise.resolve(true);
      }
    }));
  }
};
en = P([N(0, (0, n.Inject)(n.Injector)), N(1, (0, n.Inject)(n.IUniverInstanceService)), N(2, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)), N(3, (0, n.Inject)(r.SheetInterceptorService)), N(4, (0, n.Inject)(n.IConfirmService)), N(5, (0, n.Inject)(n.LocaleService)), N(6, (0, n.Inject)(t.SheetsPivotTableConfigModel)), N(7, (0, n.Inject)(e.IMessageService)), N(8, (0, n.Inject)(n.IConfigService))], en);
const tn = [h.InsertTextCommand["id"], g.IMEInputCommand["id"], d.SetCellEditVisibleOperation["id"]];
let nn = class extends n.Disposable {
  constructor(var_core_value_sig7428, var_core_value_sig1DCE, var_core_value_sig0567, var_core_value_sigA7F3, var_core_value_sigEACD, var_core_value_sig901E) {
    super(), this._sheetsSelectionsService = var_core_value_sig7428, this._univerInstanceService = var_core_value_sig1DCE, this._sheetsPivotTableAdaptorModel = var_core_value_sig0567, this._commandService = var_core_value_sigA7F3, this._sheetsPivotTableConfigModel = var_core_value_sigEACD, this._localeService = var_core_value_sig901E, this._initEditListener();
  }
  _initEditListener() {
    this.disposeWithMe(this._commandService["beforeCommandExecuted"](var_core_value_sig37A8 => {
      if (tn.includes(var_core_value_sig37A8.id)) {
        var var_core_value_sigA90D;
        let var_core_value_sig3F4C = (var_core_value_sigA90D = this._sheetsSelectionsService["getCurrentLastSelection"]()) == null ? undefined : var_core_value_sigA90D.primary;
        if (!var_core_value_sig3F4C) return;
        let {
            actualRow: var_core_value_sigD65A,
            actualColumn: var_core_value_sig5A13
          } = var_core_value_sig3F4C,
          var_core_value_sigF593 = (0, n.cellToRange)(var_core_value_sigD65A, var_core_value_sig5A13),
          var_core_value_sig3607 = (0, r.getSheetCommandTarget)(this._univerInstanceService, var_core_value_sig37A8.params);
        if (!var_core_value_sig3607) return;
        let {
            unitId: var_core_value_sigB512,
            subUnitId: var_core_value_sigF2E6
          } = var_core_value_sig3607,
          var_core_value_sig34C8 = this._sheetsPivotTableConfigModel["getSubUnitPivotConfigs"](var_core_value_sigB512, var_core_value_sigF2E6);
        if (var_core_value_sig34C8 != null && var_core_value_sig34C8.size) for (let [var_core_value_sigEFD4] of var_core_value_sig34C8) {
          let var_core_value_sigF9C7 = this._sheetsPivotTableAdaptorModel["getPivotItemRenderInfoCache"](var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sigEFD4);
          if (var_core_value_sigF9C7 != null && var_core_value_sigF9C7.rangesInfo) {
            for (let var_core_value_sig4D4C of Object.keys(var_core_value_sigF9C7.rangesInfo)) if (var_core_value_sigF9C7.rangesInfo[var_core_value_sig4D4C].some(var_core_value_sig2AD0 => n.Rectangle["intersects"](var_core_value_sig2AD0, var_core_value_sigF593))) throw new n["CustomCommandExecutionError"](this._localeService["t"]("sheets-pivot-ui.msg.editCellError"));
          }
        }
      }
    }));
  }
};
nn = P([N(0, (0, n.Inject)(r.SheetsSelectionsService)), N(1, (0, n.Inject)(n.IUniverInstanceService)), N(2, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)), N(3, (0, n.Inject)(n.ICommandService)), N(4, (0, n.Inject)(t.SheetsPivotTableConfigModel)), N(5, (0, n.Inject)(n.LocaleService))], nn);
let rn = class extends n.Disposable {
  constructor(var_core_value_sigF7BB) {
    super(), this._menuManagerService = var_core_value_sigF7BB, this._initMenu();
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](lt);
  }
};
rn = P([N(0, e.IMenuManagerService)], rn);
let an = class extends n.Disposable {
  constructor(var_core_value_sigFA38, var_core_value_sig102B, var_core_value_sigA7DB, var_core_value_sig5EEE) {
    super(), this._sheetsPivotTableAdaptorModel = var_core_value_sigFA38, this._formatPainterService = var_core_value_sig102B, this._messageService = var_core_value_sigA7DB, this._localeService = var_core_value_sig5EEE, this._initFormatPainterListener();
  }
  _initFormatPainterListener() {
    let var_core_value_sig65B4 = this._sheetsPivotTableAdaptorModel,
      var_core_value_sigF98E = this._messageService,
      var_core_value_sigA470 = this._localeService;
    this._formatPainterService["addHook"]({
      id: "pivot-format-painter-hook",
      onBeforeApply(var_core_value_sig7A3C) {
        let {
          redoMutationsInfo: var_core_value_sig0511
        } = var_core_value_sig7A3C;
        for (let var_core_value_sigB744 of var_core_value_sig0511) if (var_core_value_sigB744.id === r.AddWorksheetMergeMutation["id"]) {
          let {
            unitId: var_core_value_sig861B,
            subUnitId: var_core_value_sig5237,
            ranges: var_core_value_sigBB00
          } = var_core_value_sigB744.params;
          for (let var_core_value_sig8895 of var_core_value_sigBB00) if (var_core_value_sig65B4.getIntersectsPivotTable(var_core_value_sig861B, var_core_value_sig5237, var_core_value_sig8895).length > 0) return var_core_value_sigF98E.show({
            type: i.MessageType["Error"],
            content: var_core_value_sigA470.t("sheets-pivot-ui.msg.mergeCellError")
          }), false;
        }
        return true;
      }
    });
  }
};
an = P([N(0, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)), N(1, (0, n.Inject)(d.IFormatPainterService)), N(2, (0, n.Inject)(e.IMessageService)), N(3, (0, n.Inject)(n.LocaleService))], an);
let on = class extends n.Disposable {
  constructor(var_core_value_sig19A1, var_core_value_sig81F7, var_core_value_sigBE51) {
    super(), this._sheetPrintInterceptorService = var_core_value_sig19A1, this._sheetsPivotTableAdaptorModel = var_core_value_sig81F7, this._sheetsPivotTableConfigModel = var_core_value_sigBE51, this._initPrintArea();
  }
  _initPrintArea() {
    this.disposeWithMe(this._sheetPrintInterceptorService["interceptor"].intercept(this._sheetPrintInterceptorService["interceptor"].getInterceptPoints().PRINTING_RANGE, {
      handler: (var_core_value_sig1F44, var_core_value_sigCB04, var_core_value_sig947E) => {
        let {
            unitId: var_core_value_sig4545,
            subUnitId: var_core_value_sigF39A
          } = var_core_value_sigCB04,
          var_core_value_sigF79C = (var_core_value_sig1F44 == null ? undefined : var_core_value_sig1F44.startRow) ?? 1 / 0,
          var_core_value_sig2E54 = (var_core_value_sig1F44 == null ? undefined : var_core_value_sig1F44.endRow) ?? -1 / 0,
          var_core_value_sig7658 = (var_core_value_sig1F44 == null ? undefined : var_core_value_sig1F44.startColumn) ?? 1 / 0,
          var_core_value_sigDCF5 = (var_core_value_sig1F44 == null ? undefined : var_core_value_sig1F44.endColumn) ?? -1 / 0,
          var_core_value_sigC786 = this._sheetsPivotTableConfigModel["getSubUnitPivotConfigs"](var_core_value_sig4545, var_core_value_sigF39A);
        if (!var_core_value_sigC786) return var_core_value_sig947E(var_core_value_sig1F44);
        for (let [var_core_value_sigEAE2, var_core_value_sigE68A] of var_core_value_sigC786) {
          var var_core_value_sigC0D9;
          let var_core_value_sig7E54 = (var_core_value_sigC0D9 = this._sheetsPivotTableAdaptorModel["getPivotItemRenderInfoCache"](var_core_value_sig4545, var_core_value_sigF39A, var_core_value_sigEAE2)) == null ? undefined : var_core_value_sigC0D9.rangesInfo;
          var_core_value_sig7E54 && Object.values(var_core_value_sig7E54).forEach(var_core_value_sigC80B => {
            var_core_value_sigC80B.forEach(var_core_value_sig76BA => {
              let {
                startRow: var_core_value_sigFBFA,
                endRow: var_core_value_sigF602,
                startColumn: var_core_value_sig1BBD,
                endColumn: var_core_value_sigF704
              } = var_core_value_sig76BA;
              var_core_value_sigF79C = Math.min(var_core_value_sigFBFA, var_core_value_sigF79C), var_core_value_sig2E54 = Math.max(var_core_value_sigF602, var_core_value_sig2E54), var_core_value_sig7658 = Math.min(var_core_value_sig1BBD, var_core_value_sig7658), var_core_value_sigDCF5 = Math.max(var_core_value_sigF704, var_core_value_sigDCF5);
            });
          });
        }
        let var_core_value_sigF0511 = {
          startRow: var_core_value_sigF79C,
          endRow: var_core_value_sig2E54,
          startColumn: var_core_value_sig7658,
          endColumn: var_core_value_sigDCF5
        };
        return (0, n.isValidRange)(var_core_value_sigF0511) ? var_core_value_sig947E(var_core_value_sigF0511) : var_core_value_sig947E(var_core_value_sig1F44);
      }
    }));
  }
};
on = P([N(0, (0, n.Inject)(d.SheetPrintInterceptorService)), N(1, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)), N(2, (0, n.Inject)(t.SheetsPivotTableConfigModel))], on), new Path2D("M3.30363 3C2.79117 3 2.51457 3.60097 2.84788 3.99024L6.8 8.60593V12.5662C6.8 12.7184 6.8864 12.8575 7.02289 12.9249L8.76717 13.7863C8.96655 13.8847 9.2 13.7396 9.2 13.5173V8.60593L13.1521 3.99024C13.4854 3.60097 13.2088 3 12.6964 3H3.30363Z");
var Q = class {
  static drawNoSetting(var_core_value_sigAAD1, var_core_value_sigBC1A, var_core_value_sig3F3A, var_core_value_sigA984) {
    var_core_value_sigAAD1.save(), p.Rect["drawWith"](var_core_value_sigAAD1, {
      radius: 2,
      width: 16,
      height: 16,
      fill: var_core_value_sigA984
    }), var_core_value_sigAAD1.lineCap = "square", var_core_value_sigAAD1.strokeStyle = var_core_value_sig3F3A, var_core_value_sigAAD1.scale(var_core_value_sigBC1A / 16, var_core_value_sigBC1A / 16), var_core_value_sigAAD1.beginPath(), var_core_value_sigAAD1.lineWidth = 1, var_core_value_sigAAD1.lineCap = "round", var_core_value_sigAAD1.moveTo(3, 4), var_core_value_sigAAD1.lineTo(13, 4), var_core_value_sigAAD1.moveTo(4.5, 8), var_core_value_sigAAD1.lineTo(11.5, 8), var_core_value_sigAAD1.moveTo(6, 12), var_core_value_sigAAD1.lineTo(10, 12), var_core_value_sigAAD1.stroke(), var_core_value_sigAAD1.restore();
  }
  static drawExpand(var_core_value_sigA504, var_core_value_sig05FF, var_core_value_sigFBF0, var_core_value_sig2F95, var_core_value_sigF0E1) {
    let var_core_value_sig2D8D = (var_core_value_sigF0E1 - var_core_value_sig05FF) / 2;
    var_core_value_sigA504.save(), var_core_value_sigA504.fillStyle = var_core_value_sig2F95, var_core_value_sigA504.strokeStyle = var_core_value_sigFBF0, var_core_value_sigA504.beginPath(), var_core_value_sigA504.moveTo(6, var_core_value_sig2D8D), var_core_value_sigA504.lineTo(4 + var_core_value_sig05FF - 2, var_core_value_sig2D8D), var_core_value_sigA504.arcTo(4 + var_core_value_sig05FF, var_core_value_sig2D8D, 4 + var_core_value_sig05FF, var_core_value_sig2D8D + 2, 2), var_core_value_sigA504.lineTo(4 + var_core_value_sig05FF, var_core_value_sig2D8D + var_core_value_sig05FF - 2), var_core_value_sigA504.arcTo(4 + var_core_value_sig05FF, var_core_value_sig2D8D + var_core_value_sig05FF, 4 + var_core_value_sig05FF - 2, var_core_value_sig2D8D + var_core_value_sig05FF, 2), var_core_value_sigA504.lineTo(6, var_core_value_sig2D8D + var_core_value_sig05FF), var_core_value_sigA504.arcTo(4, var_core_value_sig2D8D + var_core_value_sig05FF, 4, var_core_value_sig2D8D + var_core_value_sig05FF - 2, 2), var_core_value_sigA504.lineTo(4, var_core_value_sig2D8D + 2), var_core_value_sigA504.arcTo(4, var_core_value_sig2D8D, 6, var_core_value_sig2D8D, 2), var_core_value_sigA504.closePath(), var_core_value_sigA504.stroke(), var_core_value_sigA504.fill(), var_core_value_sigA504.beginPath(), var_core_value_sigA504.moveTo(4 + var_core_value_sig05FF / 2, var_core_value_sig2D8D + 2), var_core_value_sigA504.lineTo(4 + var_core_value_sig05FF / 2, var_core_value_sig2D8D + var_core_value_sig05FF - 2), var_core_value_sigA504.moveTo(6, var_core_value_sig2D8D + var_core_value_sig05FF / 2), var_core_value_sigA504.lineTo(4 + var_core_value_sig05FF - 2, var_core_value_sig2D8D + var_core_value_sig05FF / 2), var_core_value_sigA504.stroke(), var_core_value_sigA504.restore();
  }
  static drawCollapse(var_core_value_sigE5A6, var_core_value_sigF449, var_core_value_sig38C5, var_core_value_sigC87D, var_core_value_sigCCDC) {
    let var_core_value_sigC310 = (var_core_value_sigCCDC - var_core_value_sigF449) / 2;
    var_core_value_sigE5A6.save(), var_core_value_sigE5A6.fillStyle = var_core_value_sigC87D, var_core_value_sigE5A6.strokeStyle = var_core_value_sig38C5, var_core_value_sigE5A6.beginPath(), var_core_value_sigE5A6.moveTo(6, var_core_value_sigC310), var_core_value_sigE5A6.lineTo(4 + var_core_value_sigF449 - 2, var_core_value_sigC310), var_core_value_sigE5A6.arcTo(4 + var_core_value_sigF449, var_core_value_sigC310, 4 + var_core_value_sigF449, var_core_value_sigC310 + 2, 2), var_core_value_sigE5A6.lineTo(4 + var_core_value_sigF449, var_core_value_sigC310 + var_core_value_sigF449 - 2), var_core_value_sigE5A6.arcTo(4 + var_core_value_sigF449, var_core_value_sigC310 + var_core_value_sigF449, 4 + var_core_value_sigF449 - 2, var_core_value_sigC310 + var_core_value_sigF449, 2), var_core_value_sigE5A6.lineTo(6, var_core_value_sigC310 + var_core_value_sigF449), var_core_value_sigE5A6.arcTo(4, var_core_value_sigC310 + var_core_value_sigF449, 4, var_core_value_sigC310 + var_core_value_sigF449 - 2, 2), var_core_value_sigE5A6.lineTo(4, var_core_value_sigC310 + 2), var_core_value_sigE5A6.arcTo(4, var_core_value_sigC310, 6, var_core_value_sigC310, 2), var_core_value_sigE5A6.closePath(), var_core_value_sigE5A6.fill(), var_core_value_sigE5A6.stroke(), var_core_value_sigE5A6.beginPath(), var_core_value_sigE5A6.moveTo(6, var_core_value_sigC310 + var_core_value_sigF449 / 2), var_core_value_sigE5A6.lineTo(4 + var_core_value_sigF449 - 2, var_core_value_sigC310 + var_core_value_sigF449 / 2), var_core_value_sigE5A6.stroke(), var_core_value_sigE5A6.restore();
  }
  static drawIconByPath(var_core_value_sigA4E8, var_core_value_sigDC07, var_core_value_sig3474, var_core_value_sig4E80) {
    var_core_value_sigA4E8.save(), var_core_value_sigA4E8.strokeStyle = var_core_value_sig3474, var_core_value_sigA4E8.fillStyle = var_core_value_sig4E80, p.Rect["drawWith"](var_core_value_sigA4E8, {
      radius: 2,
      width: 16,
      height: 16,
      fill: var_core_value_sig4E80
    }), var_core_value_sigDC07.forEach(var_core_value_sig5825 => {
      let var_core_value_sig4EB7 = new Path2D(var_core_value_sig5825);
      var_core_value_sigA4E8.fillStyle = var_core_value_sig3474, var_core_value_sigA4E8.fill(var_core_value_sig4EB7, "evenodd");
    }), var_core_value_sigA4E8.restore();
  }
};
const sn = ["M3.30363 3C2.79117 3 2.51457 3.60097 2.84788 3.99024L6.8 8.60593V12.5662C6.8 12.7184 6.8864 12.8575 7.02289 12.9249L8.76717 13.7863C8.96655 13.8847 9.2 13.7396 9.2 13.5173V8.60593L13.1521 3.99024C13.4854 3.60097 13.2088 3 12.6964 3H3.30363Z"],
  cn = ["M12.4008 13.1831C12.6907 13.1831 12.9258 12.9481 12.9258 12.6581V4.60873L14.013 5.69597C14.218 5.901 14.5505 5.901 14.7555 5.69597C14.9605 5.49094 14.9605 5.15853 14.7555 4.95351L12.7721 2.97017C12.5671 2.76515 12.2347 2.76515 12.0297 2.97017L10.0463 4.95351C9.84132 5.15853 9.84132 5.49094 10.0463 5.69597C10.2514 5.901 10.5838 5.901 10.7888 5.69597L11.8758 4.60901V12.6581C11.8758 12.9481 12.1108 13.1831 12.4008 13.1831Z", "M1.28069 4.85447C0.842195 4.33439 1.21191 3.5391 1.89218 3.5391H8.59333C9.2736 3.5391 9.64331 4.33439 9.20482 4.85447L6.51052 8.0501V11.6601C6.51052 12.2245 5.94174 12.6114 5.41683 12.404L4.48092 12.0343C4.1756 11.9136 3.97498 11.6187 3.97498 11.2904V8.0501L1.28069 4.85447Z"],
  ln = ["M12.4008 2.81641C12.6907 2.81641 12.9258 3.05146 12.9258 3.34141V11.3908L14.013 10.3036C14.218 10.0986 14.5505 10.0986 14.7555 10.3036C14.9605 10.5086 14.9605 10.841 14.7555 11.046L12.7721 13.0294C12.5671 13.2344 12.2347 13.2344 12.0297 13.0294L10.0463 11.046C9.84132 10.841 9.84132 10.5086 10.0463 10.3036C10.2514 10.0986 10.5838 10.0986 10.7888 10.3036L11.8758 11.3905V3.34141C11.8758 3.05146 12.1108 2.81641 12.4008 2.81641Z", "M1.28069\x204.85444C0.842195\x204.33435\x201.21191\x203.53906\x201.89218\x203.53906H8.59333C9.2736\x203.53906\x209.64331\x204.33435\x209.20482\x204.85443L6.51052\x208.05006V11.6601C6.51052\x2012.2245\x205.94174\x2012.6113\x205.41683\x2012.404L4.48092\x2012.0342C4.1756\x2011.9136\x203.97498\x2011.6186\x203.97498\x2011.2903V8.05006L1.28069\x204.85444Z"],
  un = ["M11.9003\x2013.7046C11.9003\x2013.9969\x2011.6633\x2014.2339\x2011.371\x2014.2339C11.0787\x2014.2339\x2010.8417\x2013.9969\x2010.8417\x2013.7046V3.57272L9.74577\x204.66862C9.53906\x204.87534\x209.20391\x204.87534\x208.9972\x204.66862C8.79048\x204.46191\x208.79048\x204.12676\x208.9972\x203.92005L10.9969\x201.92039C11.2036\x201.71368\x2011.5387\x201.71368\x2011.7454\x201.92039L13.7451\x203.92005C13.9518\x204.12676\x2013.9518\x204.46191\x2013.7451\x204.66862C13.5384\x204.87534\x2013.2032\x204.87534\x2012.9965\x204.66862L11.9003\x203.57243V13.7046Z", "M2.69779\x2010.0113C2.40546\x2010.0113\x202.16847\x209.77429\x202.16847\x209.48196C2.16847\x209.18962\x202.40546\x208.95264\x202.69779\x208.95264H6.67804C6.89213\x208.95264\x207.08514\x209.0816\x207.16707\x209.2794C7.249\x209.47719\x207.20371\x209.70486\x207.05233\x209.85624L3.97569\x2012.9329H6.67804C6.97038\x2012.9329\x207.20736\x2013.1699\x207.20736\x2013.4622C7.20736\x2013.7545\x206.97038\x2013.9915\x206.67804\x2013.9915H2.69779C2.4837\x2013.9915\x202.29069\x2013.8626\x202.20876\x2013.6648C2.12684\x2013.467\x202.17212\x2013.2393\x202.32351\x2013.0879L5.40015\x2010.0113H2.69779Z", "M5.51638\x202.58693C5.23363\x201.81542\x204.14248\x201.81543\x203.85973\x202.58693L2.13245\x207.29995C2.03185\x207.57443\x202.17281\x207.87849\x202.4473\x207.97909C2.72178\x208.07969\x203.02584\x207.93872\x203.12644\x207.66424L3.64346\x206.25351L3.64504\x206.25351H5.73266L6.24968\x207.66424C6.35027\x207.93872\x206.65433\x208.07969\x206.92882\x207.97909C7.2033\x207.87849\x207.34426\x207.57443\x207.24367\x207.29995L5.51638\x202.58693ZM5.34467\x205.19487L4.68806\x203.40325L4.03144\x205.19487H5.34467Z"],
  dn = ["M11.9003\x202.29495C11.9003\x202.00261\x2011.6633\x201.76562\x2011.371\x201.76562C11.0787\x201.76562\x2010.8417\x202.00261\x2010.8417\x202.29495V12.4268L9.74577\x2011.3309C9.53906\x2011.1242\x209.20391\x2011.1242\x208.9972\x2011.3309C8.79048\x2011.5376\x208.79048\x2011.8727\x208.9972\x2012.0795L10.9969\x2014.0791C11.2036\x2014.2858\x2011.5387\x2014.2858\x2011.7454\x2014.0791L13.7451\x2012.0795C13.9518\x2011.8727\x2013.9518\x2011.5376\x2013.7451\x2011.3309C13.5384\x2011.1242\x2013.2032\x2011.1242\x2012.9965\x2011.3309L11.9003\x2012.4271V2.29495Z", "M2.69792 10.0113C2.40558 10.0113 2.16859 9.77429 2.16859 9.48196C2.16859 9.18962 2.40558 8.95264 2.69792 8.95264H6.67816C6.89225 8.95264 7.08526 9.0816 7.16719 9.2794C7.24912 9.47719 7.20384 9.70486 7.05245 9.85624L3.97581 12.9329H6.67816C6.9705 12.9329 7.20749 13.1699 7.20749 13.4622C7.20749 13.7545 6.9705 13.9915 6.67816 13.9915H2.69792C2.48383 13.9915 2.29082 13.8626 2.20889 13.6648C2.12696 13.467 2.17224 13.2393 2.32363 13.0879L5.40027 10.0113H2.69792Z", "M5.5165 2.58693C5.23375 1.81542 4.1426 1.81543 3.85985 2.58693L2.13257 7.29995C2.03197 7.57443 2.17294 7.8785 2.44742 7.97909C2.7219 8.07969 3.02596 7.93872 3.12656 7.66424L3.64358 6.25351L3.64516 6.25351H5.73278L6.2498 7.66424C6.35039 7.93872 6.65446 8.07969 6.92894 7.97909C7.20342 7.8785 7.34438 7.57443 7.24379 7.29995L5.5165 2.58693ZM5.34479 5.19487L4.68818 3.40325L4.03156 5.19487H5.34479Z"],
  fn = new Set([l.PivotCellStyleTypeEnum["FilterAll"], l.PivotCellStyleTypeEnum["FilterPartial"], l.PivotCellStyleTypeEnum["FilterSingle"], l.PivotCellStyleTypeEnum["FilterNoneSortNone"], l.PivotCellStyleTypeEnum["FilteredSortAsc"], l.PivotCellStyleTypeEnum["FilteredSortDesc"], l.PivotCellStyleTypeEnum["FilteredSortNone"], l.PivotCellStyleTypeEnum["FilterNoneSortAsc"], l.PivotCellStyleTypeEnum["FilterNoneSortDesc"]]),
  pn = new Set([l.PivotCellStyleTypeEnum["Expand"], l.PivotCellStyleTypeEnum["Collapse"]]);
let mn = class extends p.Shape {
  constructor(var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C, var_core_value_sig7D42) {
    super(var_core_value_sigD23B, var_core_value_sig2B2A), this._commandService = var_core_value_sig0B5C, this._themeService = var_core_value_sig7D42, M(this, "_cellWidth", 0), M(this, "_cellHeight", 0), M(this, "_hovered", false), M(this, "_pivotParams", undefined), this.setShapeProps(var_core_value_sig2B2A), this.onPointerDown$["subscribeEvent"](var_core_value_sig73AF => this.onPointerDown(var_core_value_sig73AF)), this.onPointerEnter$["subscribeEvent"](() => this.onPointerEnter()), this.onPointerLeave$["subscribeEvent"](() => this.onPointerLeave());
  }
  setShapeProps(var_core_value_sig8FDE) {
    var_core_value_sig8FDE.cellHeight !== undefined && (this._cellHeight = var_core_value_sig8FDE.cellHeight), var_core_value_sig8FDE.cellWidth !== undefined && (this._cellWidth = var_core_value_sig8FDE.cellWidth), var_core_value_sig8FDE.pivotParams !== undefined && (this._pivotParams = var_core_value_sig8FDE.pivotParams), this.transformByState({
      width: var_core_value_sig8FDE.width,
      height: var_core_value_sig8FDE.height
    });
  }
  onPointerDown(var_core_value_sig78E6) {
    if (var_core_value_sig78E6.button === 2) return;
    let {
      col: var_core_value_sig541F,
      row: var_core_value_sig417B,
      unitId: var_core_value_sigAA90,
      subUnitId: var_core_value_sigE92D,
      buttonType: var_core_value_sig9940
    } = this._pivotParams;
    fn.has(var_core_value_sig9940) ? setTimeout(() => {
      this._commandService["executeCommand"](I.id, {
        row: var_core_value_sig417B,
        col: var_core_value_sig541F,
        unitId: var_core_value_sigAA90,
        subUnitId: var_core_value_sigE92D
      });
    }, 200) : this._commandService["executeCommand"](t.SetPivotCollapseCommand["id"], {
      row: var_core_value_sig417B,
      col: var_core_value_sig541F,
      unitId: var_core_value_sigAA90,
      subUnitId: var_core_value_sigE92D,
      collapse: var_core_value_sig9940 === l.PivotCellStyleTypeEnum["Expand"]
    });
  }
  onPointerEnter() {
    this._hovered = true, this.setCursor(p.CURSOR_TYPE["POINTER"]), this.makeDirty(true);
  }
  onPointerLeave() {
    this._hovered = false, this.setCursor(p.CURSOR_TYPE["DEFAULT"]), this.makeDirty(true);
  }
  _draw(var_core_value_sig682D) {
    var var_core_value_sig1435, var_core_value_sig4082;
    if (!((var_core_value_sig1435 = this._pivotParams) != null && var_core_value_sig1435.buttonType)) return;
    let var_core_value_sigC049 = this._themeService["getColorFromTheme"]("primary.600"),
      var_core_value_sigE5C3 = this._themeService["getColorFromTheme"]("gray.50");
    var_core_value_sig682D.save();
    let var_core_value_sigCCAA = new Path2D();
    var_core_value_sigCCAA.rect(0, 0, this._cellWidth, this._cellHeight), var_core_value_sig682D.clip(var_core_value_sigCCAA), ((var_core_value_sig4082 = this._pivotParams) == null ? undefined : var_core_value_sig4082.buttonType) === l.PivotCellStyleTypeEnum["Collapse"] ? Q.drawExpand(var_core_value_sig682D, 12, var_core_value_sigC049, var_core_value_sigE5C3, this._cellHeight) : this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["Expand"] ? Q.drawCollapse(var_core_value_sig682D, 12, var_core_value_sigC049, var_core_value_sigE5C3, this._cellHeight) : this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["FilterAll"] || this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["FilterNoneSortNone"] ? Q.drawNoSetting(var_core_value_sig682D, 16, var_core_value_sigC049, var_core_value_sigE5C3) : this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["FilterPartial"] || this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["FilterSingle"] || this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["FilteredSortNone"] ? Q.drawIconByPath(var_core_value_sig682D, sn, var_core_value_sigC049, var_core_value_sigE5C3) : this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["FilterNoneSortAsc"] ? Q.drawIconByPath(var_core_value_sig682D, un, var_core_value_sigC049, var_core_value_sigE5C3) : this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["FilterNoneSortDesc"] ? Q.drawIconByPath(var_core_value_sig682D, dn, var_core_value_sigC049, var_core_value_sigE5C3) : this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["FilteredSortAsc"] ? Q.drawIconByPath(var_core_value_sig682D, cn, var_core_value_sigC049, var_core_value_sigE5C3) : this._pivotParams["buttonType"] === l.PivotCellStyleTypeEnum["FilteredSortDesc"] && Q.drawIconByPath(var_core_value_sig682D, ln, var_core_value_sigC049, var_core_value_sigE5C3), var_core_value_sig682D.restore();
  }
};
mn = P([N(2, n.ICommandService), N(3, (0, n.Inject)(n.ThemeService))], mn);
function hn(var_core_value_sig3CC6, var_core_value_sig041B, var_core_value_sig3610) {
  let {
    startX: var_core_value_sig62F3,
    startY: var_core_value_sig8063,
    endX: var_core_value_sig555A,
    endY: var_core_value_sigF562
  } = var_core_value_sig3610;
  return {
    left: (var_core_value_sig041B === "filter" ? var_core_value_sig3CC6 !== "rtl" : var_core_value_sig3CC6 === "rtl") ? var_core_value_sig555A - 16 - 1 : var_core_value_sig62F3 + 1,
    top: var_core_value_sig041B === "filter" ? var_core_value_sigF562 - 16 - 1 : var_core_value_sig8063 + 1
  };
}
let gn = class extends n.Disposable {
  constructor(var_core_value_sigF32D, var_core_value_sig9427, var_core_value_sig21F4, var_core_value_sigA345, var_core_value_sigA468, var_core_value_sig1561, var_core_value_sigDF14, var_core_value_sig842F, var_core_value_sigC4C0) {
    super(), this._context = var_core_value_sigF32D, this._injector = var_core_value_sig9427, this._sheetsPivotTableAdaptorModel = var_core_value_sig21F4, this._sheetSkeletonManagerService = var_core_value_sigA345, this._sheetsPivotTableConfigModel = var_core_value_sigA468, this._commandService = var_core_value_sig1561, this._sheetPermissionCheckController = var_core_value_sigDF14, this._permissionService = var_core_value_sig842F, this._localeService = var_core_value_sigC4C0, M(this, "_pivotButtonShapesArr", []), this._initButtonRender(), this._initSkeleton(), this._initListener();
  }
  _initButtonRender() {
    this.disposeWithMe((0, c.merge)(this._sheetsPivotTableAdaptorModel["viewUpdate$"].pipe((0, c.auditTime)(0)), this._sheetSkeletonManagerService["currentSkeleton$"], this._sheetsPivotTableConfigModel["pivotConfigChange$"], this._permissionService["permissionPointUpdate$"].pipe((0, c.auditTime)(100))).subscribe(() => {
      if (!this._context["unit"]) return;
      let var_core_value_sig548A = this._context["unitId"],
        var_core_value_sigE026 = this._context["unit"].getActiveSheet().getSheetId(),
        {
          scene: var_core_value_sig339E
        } = this._context,
        var_core_value_sig7550 = this._localeService["getDirection"](),
        var_core_value_sig2983 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
      if (!var_core_value_sig2983) return;
      let var_core_value_sigE1B0 = this._pivotButtonShapesArr;
      var_core_value_sigE1B0.forEach(var_core_value_sig3E68 => var_core_value_sig3E68.dispose()), var_core_value_sigE1B0.splice(0, var_core_value_sigE1B0.length), this._sheetsPivotTableAdaptorModel["getSubUnitPivotMatrix"](var_core_value_sig548A, var_core_value_sigE026).forValue((var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F) => {
        if (var_core_value_sig492F != null && var_core_value_sig492F.pbt) {
          let var_core_value_sig9A8D = "sheets-pivot-button-" + var_core_value_sigF4C5 + "-" + var_core_value_sig5410 + "-" + var_core_value_sig548A + "-" + var_core_value_sigE026,
            {
              startX: var_core_value_sigC259,
              startY: var_core_value_sig9C9F,
              endX: var_core_value_sigFDEA,
              endY: var_core_value_sig86D0
            } = (0, d.getCoordByCell)(var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig339E, var_core_value_sig2983),
            var_core_value_sig4CD2 = var_core_value_sigFDEA - var_core_value_sigC259,
            var_core_value_sig48CA = var_core_value_sig86D0 - var_core_value_sig9C9F;
          if (var_core_value_sig48CA < 16 / 2 || var_core_value_sig4CD2 < 16 / 2 || this._sheetPermissionCheckController["permissionCheckWithRanges"]({
            workbookTypes: [r.WorkbookEditablePermission],
            worksheetTypes: [r.WorksheetViewPermission, r.WorksheetEditPermission, r.WorksheetPivotTablePermission],
            rangeTypes: [r.RangeProtectionPermissionViewPoint, r.RangeProtectionPermissionEditPoint]
          }, [{
            startRow: var_core_value_sigF4C5,
            endRow: var_core_value_sigF4C5,
            startColumn: var_core_value_sig5410,
            endColumn: var_core_value_sig5410
          }], var_core_value_sig548A, var_core_value_sigE026) === false) return;
          let var_core_value_sig50AF;
          if (fn.has(var_core_value_sig492F.pbt)) {
            let {
              left: var_core_value_sig284F,
              top: var_core_value_sigE154
            } = hn(var_core_value_sig7550, "filter", {
              startX: var_core_value_sigC259,
              startY: var_core_value_sig9C9F,
              endX: var_core_value_sigFDEA,
              endY: var_core_value_sig86D0
            });
            var_core_value_sig50AF = {
              left: var_core_value_sig284F,
              top: var_core_value_sigE154,
              height: 16,
              width: 16,
              zIndex: 5000,
              cellWidth: var_core_value_sig4CD2,
              cellHeight: var_core_value_sig48CA,
              pivotParams: {
                col: var_core_value_sig5410,
                row: var_core_value_sigF4C5,
                unitId: var_core_value_sig548A,
                subUnitId: var_core_value_sigE026,
                buttonType: var_core_value_sig492F.pbt
              }
            };
          } else {
            if (pn.has(var_core_value_sig492F.pbt)) {
              let {
                left: var_core_value_sig2BCF,
                top: var_core_value_sig0D69
              } = hn(var_core_value_sig7550, "collapse", {
                startX: var_core_value_sigC259,
                startY: var_core_value_sig9C9F,
                endX: var_core_value_sigFDEA,
                endY: var_core_value_sig86D0
              });
              var_core_value_sig50AF = {
                left: var_core_value_sig2BCF,
                top: var_core_value_sig0D69,
                height: 16,
                width: 16,
                zIndex: 5000,
                cellWidth: var_core_value_sig4CD2,
                cellHeight: var_core_value_sig48CA,
                pivotParams: {
                  col: var_core_value_sig5410,
                  row: var_core_value_sigF4C5,
                  unitId: var_core_value_sig548A,
                  subUnitId: var_core_value_sigE026,
                  buttonType: var_core_value_sig492F.pbt
                }
              };
            } else return;
          }
          let var_core_value_sigA942 = this._injector["createInstance"](mn, var_core_value_sig9A8D, var_core_value_sig50AF);
          var_core_value_sigE1B0.push(var_core_value_sigA942);
        }
      }), var_core_value_sigE1B0.length && var_core_value_sig339E.addObjects(var_core_value_sigE1B0), var_core_value_sig339E.makeDirty();
    }));
  }
  _initSkeleton() {
    var var_core_value_sig214A;
    this.disposeWithMe(this._sheetsPivotTableAdaptorModel["markDirty$"].subscribe(({
      unitId: var_core_value_sigD4FF,
      subUnitId: var_core_value_sig1E5B
    }) => {
      if (var_core_value_sigD4FF === this._context["unitId"] && (this._sheetSkeletonManagerService["makeDirty"]({
        sheetId: var_core_value_sig1E5B
      }), this._context["unit"].getActiveSheet().getSheetId() === var_core_value_sig1E5B)) {
        var var_core_value_sigB680;
        this._sheetSkeletonManagerService["reCalculate"](), (var_core_value_sigB680 = this._context["mainComponent"]) == null || var_core_value_sigB680.makeDirty();
      }
    }));
    let var_core_value_sigCCC3 = this._context["unitId"];
    this._context["unit"].getSheets().forEach(var_core_value_sig1F64 => {
      var var_core_value_sigDD1C;
      let var_core_value_sig2C39 = var_core_value_sig1F64.getSheetId();
      (var_core_value_sigDD1C = this._sheetsPivotTableAdaptorModel["getSubUnitPivotRenderCache"](var_core_value_sigCCC3, var_core_value_sig2C39)) != null && var_core_value_sigDD1C.size && this._sheetSkeletonManagerService["makeDirty"]({
        sheetId: var_core_value_sig2C39
      });
    }), this._sheetSkeletonManagerService["reCalculate"](), (var_core_value_sig214A = this._context["mainComponent"]) == null || var_core_value_sig214A.makeDirty();
  }
  _initListener() {
    let var_core_value_sig986E = new n["DisposableCollection"](),
      {
        spreadsheet: var_core_value_sig537C
      } = (0, d.getSheetObject)(this._context["unit"], this._context);
    var_core_value_sig986E.add(var_core_value_sig537C.onDblclick$["subscribeEvent"](var_core_value_sigB7D1 => {
      if (var_core_value_sigB7D1.button === 2) return;
      let var_core_value_sig64F0 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
      if (var_core_value_sig64F0 == null) return;
      let var_core_value_sig85B1 = this._context["scene"],
        {
          row: var_core_value_sig3141,
          column: var_core_value_sig2162
        } = (0, d.getCoordByOffset)(var_core_value_sigB7D1.offsetX, var_core_value_sigB7D1.offsetY, var_core_value_sig85B1, var_core_value_sig64F0);
      this._commandService["executeCommand"](t.PivotDrillDownCommand["id"], {
        row: var_core_value_sig3141,
        col: var_core_value_sig2162
      });
    }));
  }
};
gn = P([N(1, (0, n.Inject)(n.Injector)), N(2, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)), N(3, (0, n.Inject)(d.SheetSkeletonManagerService)), N(4, (0, n.Inject)(t.SheetsPivotTableConfigModel)), N(5, (0, n.Inject)(n.ICommandService)), N(6, (0, n.Inject)(r.SheetPermissionCheckController)), N(7, (0, n.Inject)(n.IPermissionService)), N(8, (0, n.Inject)(n.LocaleService))], gn);
var _n = class e extends p.Shape {
  constructor(var_core_value_sigBBBC) {
    super("SHEET_PIVOT_MOVE_KEY"), M(this, "_moveType", undefined), this._moveType = var_core_value_sigBBBC;
  }
  _draw(var_core_value_sig5440) {
    this.width !== 0 && this.height !== 0 && e.drawWith(var_core_value_sig5440, this);
  }
  static drawWith(var_core_value_sigE28B, var_core_value_sig0FD9) {
    let var_core_value_sig5649 = var_core_value_sig0FD9._moveType;
    if (var_core_value_sigE28B.save(), var_core_value_sigE28B.strokeStyle = "#8bc34a", var_core_value_sigE28B.lineWidth = 2, var_core_value_sig5649 === "row") {
      let var_core_value_sig2EAD = var_core_value_sig0FD9.width;
      if (!var_core_value_sig2EAD) return;
      var_core_value_sigE28B.beginPath(), var_core_value_sigE28B.moveTo(0, 0), var_core_value_sigE28B.lineTo(0 + var_core_value_sig2EAD, 0), var_core_value_sigE28B.moveTo(0, 0 - 20 / 2), var_core_value_sigE28B.lineTo(0, 10), var_core_value_sigE28B.moveTo(0 + var_core_value_sig2EAD, 0 - 20 / 2), var_core_value_sigE28B.lineTo(0 + var_core_value_sig2EAD, 10);
    } else {
      let var_core_value_sig6774 = var_core_value_sig0FD9.height;
      if (!var_core_value_sig6774) return;
      var_core_value_sigE28B.moveTo(0, 0), var_core_value_sigE28B.lineTo(0, 0 + var_core_value_sig6774), var_core_value_sigE28B.moveTo(0 - 20 / 2, 0), var_core_value_sigE28B.lineTo(10, 0), var_core_value_sigE28B.moveTo(0 - 20 / 2, 0 + var_core_value_sig6774), var_core_value_sigE28B.lineTo(10, 0 + var_core_value_sig6774);
    }
    var_core_value_sigE28B.stroke(), var_core_value_sigE28B.restore();
  }
};
let vn = class extends n.Disposable {
  constructor(var_core_value_sigAF82, var_core_value_sig21A2, var_core_value_sig5C1D, var_core_value_sig4CBA, var_core_value_sig8E65, var_core_value_sig772C) {
    super(), this._context = var_core_value_sigAF82, this._sheetsPivotTableAdaptorModel = var_core_value_sig21A2, this._sheetSkeletonManagerService = var_core_value_sig5C1D, this._commandService = var_core_value_sig4CBA, this._selectionRenderService = var_core_value_sig8E65, this._sheetsSelectionsService = var_core_value_sig772C, M(this, "_pivotSelectionMoveShape", undefined), M(this, "_scenePointerMoveSubscribe", undefined), M(this, "_scenePointerUpSubscribe", undefined), M(this, "_selectionControl", undefined), M(this, "_moveStartRange", undefined), M(this, "_moveStartCellIndex", undefined), M(this, "_moveRowOrCol", "row"), M(this, "_targetRange", undefined), M(this, "_movePivotId", undefined), this._initControl();
  }
  _controlMoving(var_core_value_sigF309, var_core_value_sig44F9) {
    let var_core_value_sigE532 = this._context["scene"],
      var_core_value_sigF381 = var_core_value_sigE532.getScrollXYInfoByViewport(p.Vector2["FromArray"]([var_core_value_sigF309, var_core_value_sig44F9])),
      {
        scaleX: var_core_value_sigCB92,
        scaleY: var_core_value_sigC844
      } = var_core_value_sigE532.getAncestorScale(),
      var_core_value_sig2ED4 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!var_core_value_sig2ED4 || !this._moveStartRange || !this._moveStartCellIndex) return;
    let {
      row: var_core_value_sig0477,
      column: var_core_value_sig6FDF
    } = var_core_value_sig2ED4.getCellIndexByOffset(var_core_value_sigF309, var_core_value_sig44F9, var_core_value_sigCB92, var_core_value_sigC844, var_core_value_sigF381);
    if (this._moveRowOrCol === "row") {
      var var_core_value_sig27C4;
      let var_core_value_sig340D = 0,
        var_core_value_sig82D4 = 0,
        var_core_value_sigBDE4 = this._moveStartRange["endColumn"] - this._moveStartRange["startColumn"] + 1;
      if (this._moveStartCellIndex["column"] === this._moveStartRange["startColumn"]) var_core_value_sig340D = var_core_value_sig6FDF, var_core_value_sig82D4 = var_core_value_sig6FDF + var_core_value_sigBDE4 - 1;else {
        if (this._moveStartCellIndex["column"] === this._moveStartRange["endColumn"]) var_core_value_sig82D4 = var_core_value_sig6FDF, var_core_value_sig340D = var_core_value_sig6FDF - var_core_value_sigBDE4 + 1;else {
          let var_core_value_sigA621 = this._moveStartCellIndex["column"] - this._moveStartRange["startColumn"];
          var_core_value_sig340D = var_core_value_sig6FDF - var_core_value_sigA621, var_core_value_sig82D4 = var_core_value_sig6FDF - var_core_value_sigA621 + var_core_value_sigBDE4 - 1;
        }
      }
      let var_core_value_sig7DF1 = var_core_value_sig2ED4.getCellWithCoordByIndex(var_core_value_sig0477, var_core_value_sig340D),
        var_core_value_sigDC86 = var_core_value_sig2ED4.getCellWithCoordByIndex(var_core_value_sig0477, var_core_value_sig82D4),
        {
          startX: var_core_value_sig0B0C,
          endY: var_core_value_sigA39E
        } = var_core_value_sig7DF1,
        {
          endX: var_core_value_sigBBEE
        } = var_core_value_sigDC86;
      this._targetRange = {
        startRow: var_core_value_sig0477,
        endRow: var_core_value_sig0477,
        startColumn: var_core_value_sig340D,
        endColumn: var_core_value_sig82D4
      }, (var_core_value_sig27C4 = this._pivotSelectionMoveShape) == null || var_core_value_sig27C4.transformByState({
        left: var_core_value_sig0B0C,
        top: var_core_value_sigA39E,
        width: var_core_value_sigBBEE - var_core_value_sig0B0C,
        height: 20
      });
    } else {
      var var_core_value_sig3E1A;
      let var_core_value_sig011D = 0,
        var_core_value_sig6167 = 0,
        var_core_value_sig65A1 = this._moveStartRange["endRow"] - this._moveStartRange["startRow"] + 1;
      if (this._moveStartCellIndex["row"] === this._moveStartRange["startRow"]) var_core_value_sig011D = var_core_value_sig0477, var_core_value_sig6167 = var_core_value_sig0477 + var_core_value_sig65A1 - 1;else {
        if (this._moveStartCellIndex["row"] === this._moveStartRange["endRow"]) var_core_value_sig6167 = var_core_value_sig0477, var_core_value_sig011D = var_core_value_sig0477 - var_core_value_sig65A1 + 1;else {
          let var_core_value_sigBBFF = this._moveStartCellIndex["row"] - this._moveStartRange["startRow"];
          var_core_value_sig011D = var_core_value_sig0477 - var_core_value_sigBBFF, var_core_value_sig6167 = var_core_value_sig0477 - var_core_value_sigBBFF + var_core_value_sig65A1 - 1;
        }
      }
      let var_core_value_sig7F19 = var_core_value_sig2ED4.getCellWithCoordByIndex(var_core_value_sig011D, var_core_value_sig6FDF),
        var_core_value_sig7827 = var_core_value_sig2ED4.getCellWithCoordByIndex(var_core_value_sig6167, var_core_value_sig6FDF),
        {
          startX: var_core_value_sig652C,
          startY: var_core_value_sig7E32
        } = var_core_value_sig7F19,
        {
          endY: var_core_value_sig4C07
        } = var_core_value_sig7827;
      this._targetRange = {
        startColumn: var_core_value_sig6FDF,
        endColumn: var_core_value_sig6FDF,
        startRow: var_core_value_sig011D,
        endRow: var_core_value_sig6167
      }, (var_core_value_sig3E1A = this._pivotSelectionMoveShape) == null || var_core_value_sig3E1A.transformByState({
        left: var_core_value_sig652C,
        top: var_core_value_sig7E32,
        width: 20,
        height: var_core_value_sig4C07 - var_core_value_sig7E32
      });
    }
  }
  _controlPointerDownHandler(var_core_value_sig7FB0) {
    var var_core_value_sig5215, var_core_value_sig5204, var_core_value_sig5E11;
    (var_core_value_sig5215 = this._selectionControl) == null || var_core_value_sig5215.setControlExtensionDisable(false), this._context["scene"].setCursor(p.CURSOR_TYPE["DEFAULT"]);
    let var_core_value_sig4D58 = this._sheetsSelectionsService["getCurrentSelections"]();
    if (!var_core_value_sig4D58.length || var_core_value_sig4D58.length > 1) return;
    let var_core_value_sig2DBD = var_core_value_sig4D58[0].range,
      var_core_value_sig424E = this._context["unit"],
      var_core_value_sigF481 = var_core_value_sig424E.getActiveSheet(),
      var_core_value_sigD7F2 = var_core_value_sig424E.getUnitId(),
      var_core_value_sig7CF3 = var_core_value_sigF481.getSheetId(),
      var_core_value_sig9DC6 = this._sheetsPivotTableAdaptorModel["getSubUnitPivotRenderCache"](var_core_value_sigD7F2, var_core_value_sig7CF3);
    if (!(var_core_value_sig9DC6 != null && var_core_value_sig9DC6.size)) return;
    let var_core_value_sig6643 = Array.from(var_core_value_sig9DC6).find(([var_core_value_sig79AB, var_core_value_sig8E74]) => {
      let {
        rangesInfo: var_core_value_sig104C
      } = var_core_value_sig8E74;
      if (!var_core_value_sig104C) return false;
      let {
          rowRanges: var_core_value_sig841D,
          colRanges: var_core_value_sig90CB
        } = var_core_value_sig104C,
        var_core_value_sigBDF5 = var_core_value_sig841D[0],
        var_core_value_sigACC6 = var_core_value_sig90CB[0],
        var_core_value_sig1614 = false;
      return var_core_value_sigBDF5 && (var_core_value_sig1614 = n.Rectangle["realContain"](var_core_value_sigBDF5, var_core_value_sig2DBD), this._moveRowOrCol = "row"), !var_core_value_sig1614 && var_core_value_sigACC6 && (var_core_value_sig1614 = n.Rectangle["realContain"](var_core_value_sigACC6, var_core_value_sig2DBD), this._moveRowOrCol = "col"), var_core_value_sig1614;
    });
    if (!var_core_value_sig6643) return;
    this._movePivotId = var_core_value_sig6643[0], this._pivotSelectionMoveShape || (this._pivotSelectionMoveShape = new _n(this._moveRowOrCol), this._context["scene"].addObject(this._pivotSelectionMoveShape));
    let var_core_value_sig4124 = this._context["scene"],
      var_core_value_sigBF1C = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!var_core_value_sigBF1C) return;
    let {
        offsetX: var_core_value_sigEEEF,
        offsetY: var_core_value_sig9A01
      } = var_core_value_sig7FB0,
      var_core_value_sig674F = var_core_value_sig4124.getCoordRelativeToViewport(p.Vector2["FromArray"]([var_core_value_sigEEEF, var_core_value_sig9A01])),
      {
        x: var_core_value_sigC8F6,
        y: var_core_value_sig8A26
      } = var_core_value_sig674F,
      var_core_value_sigD073 = var_core_value_sig4124.getScrollXYInfoByViewport(var_core_value_sig674F),
      {
        scaleX: var_core_value_sigF631,
        scaleY: var_core_value_sig2278
      } = var_core_value_sig4124.getAncestorScale(),
      {
        row: var_core_value_sig7053,
        column: var_core_value_sig52F1
      } = var_core_value_sigBF1C.getCellIndexByOffset(var_core_value_sigC8F6, var_core_value_sig8A26, var_core_value_sigF631, var_core_value_sig2278, var_core_value_sigD073),
      var_core_value_sig1E74 = (var_core_value_sig5204 = this._selectionControl) == null ? undefined : var_core_value_sig5204.model["getRange"]();
    if (this._moveStartRange = var_core_value_sig1E74, !var_core_value_sig1E74) return;
    let var_core_value_sig1E84 = 0;
    var_core_value_sig1E84 = var_core_value_sig7053 < var_core_value_sig1E74.startRow ? var_core_value_sig1E74.startRow : var_core_value_sig7053 > var_core_value_sig1E74.endRow ? var_core_value_sig1E74.endRow : var_core_value_sig7053;
    let var_core_value_sig133B = 0;
    var_core_value_sig133B = var_core_value_sig52F1 < var_core_value_sig1E74.startColumn ? var_core_value_sig1E74.startColumn : var_core_value_sig52F1 > var_core_value_sig1E74.endColumn ? var_core_value_sig1E74.endColumn : var_core_value_sig52F1, this._moveStartCellIndex = {
      row: var_core_value_sig1E84,
      column: var_core_value_sig133B
    }, (var_core_value_sig5E11 = this._selectionControl) == null || var_core_value_sig5E11.setControlExtensionDisable(true), this._scenePointerMoveSubscribe = var_core_value_sig4124.onPointerMove$["subscribeEvent"](var_core_value_sig85C3 => {
      let {
          offsetX: var_core_value_sigB996,
          offsetY: var_core_value_sig4BBA
        } = var_core_value_sig85C3,
        {
          x: var_core_value_sig6201,
          y: var_core_value_sig5151
        } = var_core_value_sig4124.getCoordRelativeToViewport(p.Vector2["FromArray"]([var_core_value_sigB996, var_core_value_sig4BBA]));
      this._controlMoving(var_core_value_sig6201, var_core_value_sig5151), var_core_value_sig4124.setCursor(p.CURSOR_TYPE["MOVE"]);
    }), this._scenePointerUpSubscribe = var_core_value_sig4124.onPointerUp$["subscribeEvent"](var_core_value_sigB542 => {
      var var_core_value_sigBB6C, var_core_value_sigE2BF, var_core_value_sigB8C7;
      (var_core_value_sigBB6C = this._scenePointerMoveSubscribe) == null || var_core_value_sigBB6C.unsubscribe(), this._scenePointerMoveSubscribe = null, (var_core_value_sigE2BF = this._selectionControl) == null || var_core_value_sigE2BF.setControlExtensionDisable(false), this._selectionControl = null, var_core_value_sig4124.setCursor(p.CURSOR_TYPE["DEFAULT"]), var_core_value_sig4124.removeObject(this._pivotSelectionMoveShape), this._pivotSelectionMoveShape = null, this._updatePivotSort(), (var_core_value_sigB8C7 = this._scenePointerUpSubscribe) == null || var_core_value_sigB8C7.unsubscribe(), this._scenePointerUpSubscribe = null;
    });
  }
  _updatePivotSort() {
    if (!this._moveStartRange || !this._targetRange || !this._movePivotId) return;
    let var_core_value_sig69B8 = this._context["unit"].getUnitId(),
      var_core_value_sig983D = this._context["unit"].getActiveSheet().getSheetId();
    if (this._moveRowOrCol === "row") {
      var var_core_value_sig9A03;
      let var_core_value_sigA56E = (var_core_value_sig9A03 = this._sheetsPivotTableAdaptorModel["getSubUnitPivotRenderCache"](var_core_value_sig69B8, var_core_value_sig983D)) == null ? undefined : var_core_value_sig9A03.get(this._movePivotId);
      if (!var_core_value_sigA56E) return;
      let var_core_value_sig1998 = this._sheetsPivotTableAdaptorModel["getSubUnitPivotMatrix"](var_core_value_sig69B8, var_core_value_sig983D);
      if (!var_core_value_sig1998) return;
      let var_core_value_sigFF19 = [],
        var_core_value_sig43B8 = "",
        {
          headerMap: var_core_value_sigD98F,
          rangesInfo: var_core_value_sig66C0
        } = var_core_value_sigA56E;
      for (let var_core_value_sig8EA0 = this._moveStartRange["startColumn"]; var_core_value_sig8EA0 <= this._moveStartRange["endColumn"]; var_core_value_sig8EA0++) {
        var var_core_value_sig3363;
        let var_core_value_sig8889 = var_core_value_sigD98F == null || (var_core_value_sig3363 = var_core_value_sigD98F.rowHeaderMap) == null ? undefined : var_core_value_sig3363[var_core_value_sig8EA0];
        if (!var_core_value_sig8889) continue;
        var_core_value_sig43B8 = var_core_value_sig8889.tableFieldId;
        let var_core_value_sig32F8 = var_core_value_sig66C0 == null ? undefined : var_core_value_sig66C0.rowRanges,
          var_core_value_sig5B67 = var_core_value_sig32F8 == null ? undefined : var_core_value_sig32F8[0];
        if (!var_core_value_sig5B67) continue;
        let var_core_value_sig1758 = {
          ...var_core_value_sig5B67,
          startColumn: var_core_value_sig8EA0,
          endColumn: var_core_value_sig8EA0
        };
        for (let var_core_value_sig4632 = var_core_value_sig1758.startRow; var_core_value_sig4632 <= var_core_value_sig1758.endRow; var_core_value_sig4632++) {
          let var_core_value_sig480E = var_core_value_sig1998.getValue(var_core_value_sig4632, var_core_value_sig8EA0);
          if (!var_core_value_sig480E) continue;
          let {
            v: var_core_value_sig26DB,
            pbt: var_core_value_sigF0F9
          } = var_core_value_sig480E;
          var_core_value_sig26DB && var_core_value_sigF0F9 !== l.PivotCellStyleTypeEnum["Subtotal"] && var_core_value_sigF0F9 !== l.PivotCellStyleTypeEnum["GrandTotal"] && (typeof var_core_value_sig26DB == "string" ? var_core_value_sigFF19[var_core_value_sig4632] = var_core_value_sig26DB : typeof var_core_value_sig26DB == "number" && (var_core_value_sigFF19[var_core_value_sig4632] = var_core_value_sig26DB.toString()));
        }
        break;
      }
      if (!var_core_value_sig43B8) return;
      let var_core_value_sig9D15 = this._moveStartRange["startRow"],
        var_core_value_sigB785 = this._moveStartRange["endRow"] - this._moveStartRange["startRow"] + 1,
        var_core_value_sig130F = this._targetRange["startRow"];
      if (var_core_value_sig9D15 < var_core_value_sig130F) {
        let var_core_value_sigA6F6 = var_core_value_sigFF19.splice(var_core_value_sig9D15, var_core_value_sigB785);
        var_core_value_sigFF19.splice(var_core_value_sig130F - var_core_value_sigB785, 0, ...var_core_value_sigA6F6);
      } else {
        let var_core_value_sigCDDA = var_core_value_sigFF19.splice(var_core_value_sig9D15, var_core_value_sigB785);
        var_core_value_sigFF19.splice(var_core_value_sig130F, 0, ...var_core_value_sigCDDA);
      }
      let var_core_value_sigC0E3 = var_core_value_sigFF19.filter(var_core_value_sigE243 => var_core_value_sigE243 !== undefined);
      this._commandService["executeCommand"](t.SetPivotSortCommand["id"], {
        unitId: var_core_value_sig69B8,
        subUnitId: var_core_value_sig983D,
        pivotTableId: this._movePivotId,
        tableFieldId: var_core_value_sig43B8,
        info: {
          type: l.PivotDataFieldSortOperatorEnum["custom"],
          customOrder: var_core_value_sigC0E3
        }
      });
    } else {
      var var_core_value_sigF64A;
      let var_core_value_sig52F7 = (var_core_value_sigF64A = this._sheetsPivotTableAdaptorModel["getSubUnitPivotRenderCache"](var_core_value_sig69B8, var_core_value_sig983D)) == null ? undefined : var_core_value_sigF64A.get(this._movePivotId);
      if (!var_core_value_sig52F7) return;
      let var_core_value_sig866F = this._sheetsPivotTableAdaptorModel["getSubUnitPivotMatrix"](var_core_value_sig69B8, var_core_value_sig983D);
      if (!var_core_value_sig866F) return;
      let var_core_value_sigDE3D = [],
        var_core_value_sigF175 = "",
        {
          headerMap: var_core_value_sig6A18,
          rangesInfo: var_core_value_sig4E3D
        } = var_core_value_sig52F7;
      for (let var_core_value_sig74A8 = this._moveStartRange["startRow"]; var_core_value_sig74A8 <= this._moveStartRange["endRow"]; var_core_value_sig74A8++) {
        var var_core_value_sig25EC;
        let var_core_value_sig4805 = var_core_value_sig6A18 == null || (var_core_value_sig25EC = var_core_value_sig6A18.colHeaderMap) == null ? undefined : var_core_value_sig25EC[var_core_value_sig74A8];
        if (!var_core_value_sig4805) continue;
        var_core_value_sigF175 = var_core_value_sig4805.tableFieldId;
        let var_core_value_sigE67E = var_core_value_sig4E3D == null ? undefined : var_core_value_sig4E3D.colRanges,
          var_core_value_sig2902 = var_core_value_sigE67E == null ? undefined : var_core_value_sigE67E[0];
        if (!var_core_value_sig2902) continue;
        let var_core_value_sig9989 = {
          ...var_core_value_sig2902,
          startRow: var_core_value_sig74A8,
          endRow: var_core_value_sig74A8
        };
        for (let var_core_value_sig12F2 = var_core_value_sig9989.startColumn; var_core_value_sig12F2 <= var_core_value_sig9989.endColumn; var_core_value_sig12F2++) {
          let var_core_value_sig1A0F = var_core_value_sig866F.getValue(var_core_value_sig74A8, var_core_value_sig12F2);
          if (!var_core_value_sig1A0F) continue;
          let {
            v: var_core_value_sigFBA4,
            pbt: var_core_value_sig4383
          } = var_core_value_sig1A0F;
          if (var_core_value_sigFBA4 && var_core_value_sig4383 !== l.PivotCellStyleTypeEnum["Subtotal"] && var_core_value_sig4383 !== l.PivotCellStyleTypeEnum["GrandTotal"]) {
            if (typeof var_core_value_sigFBA4 == "string") {
              let var_core_value_sig3EEE = var_core_value_sig52F7.projection ? (0, t.mapPivotSheetColumn)(var_core_value_sig52F7.projection, var_core_value_sig12F2) : var_core_value_sig12F2;
              var_core_value_sigDE3D[var_core_value_sig3EEE] = var_core_value_sigFBA4;
            } else {
              if (typeof var_core_value_sigFBA4 == "number") {
                let var_core_value_sig7524 = var_core_value_sig52F7.projection ? (0, t.mapPivotSheetColumn)(var_core_value_sig52F7.projection, var_core_value_sig12F2) : var_core_value_sig12F2;
                var_core_value_sigDE3D[var_core_value_sig7524] = var_core_value_sigFBA4.toString();
              }
            }
          }
        }
        break;
      }
      if (!var_core_value_sigF175) return;
      let var_core_value_sig49B0 = var_core_value_sig52F7.projection ? (0, t.mapPivotSheetRange)(var_core_value_sig52F7.projection, this._moveStartRange) : this._moveStartRange,
        var_core_value_sig2547 = var_core_value_sig52F7.projection ? (0, t.mapPivotSheetRange)(var_core_value_sig52F7.projection, this._targetRange) : this._targetRange,
        var_core_value_sigBCA9 = var_core_value_sig49B0.startColumn,
        var_core_value_sig4CDF = this._moveStartRange["endColumn"] - this._moveStartRange["startColumn"] + 1,
        var_core_value_sig3F79 = var_core_value_sig2547.startColumn;
      if (var_core_value_sigBCA9 < var_core_value_sig3F79) {
        let var_core_value_sig21B2 = var_core_value_sigDE3D.splice(var_core_value_sigBCA9, var_core_value_sig4CDF);
        var_core_value_sigDE3D.splice(var_core_value_sig3F79 - var_core_value_sig4CDF, 0, ...var_core_value_sig21B2);
      } else {
        let var_core_value_sigDE08 = var_core_value_sigDE3D.splice(var_core_value_sigBCA9, var_core_value_sig4CDF);
        var_core_value_sigDE3D.splice(var_core_value_sig3F79, 0, ...var_core_value_sigDE08);
      }
      let var_core_value_sig880E = var_core_value_sigDE3D.filter(var_core_value_sigACCB => var_core_value_sigACCB !== undefined);
      this._commandService["executeCommand"](t.SetPivotSortCommand["id"], {
        unitId: var_core_value_sig69B8,
        subUnitId: var_core_value_sig983D,
        pivotTableId: this._movePivotId,
        tableFieldId: var_core_value_sigF175,
        info: {
          type: l.PivotDataFieldSortOperatorEnum["custom"],
          customOrder: var_core_value_sig880E
        }
      });
    }
  }
  _initControl() {
    this.disposeWithMe(this._sheetsSelectionsService["selectionMoveEnd$"].subscribe(() => {
      let var_core_value_sigC9ED = this._selectionRenderService["getSelectionControls"]();
      if (this._selectionControl = var_core_value_sigC9ED[var_core_value_sigC9ED.length - 1], this._selectionControl && this._selectionControl["setControlExtensionDisable"](false), !this._selectionControl) return;
      let {
        leftControl: var_core_value_sigB57B,
        rightControl: var_core_value_sig780B,
        topControl: var_core_value_sig7D1B,
        bottomControl: var_core_value_sig7BE0
      } = this._selectionControl;
      [var_core_value_sigB57B, var_core_value_sig780B, var_core_value_sig7D1B, var_core_value_sig7BE0].forEach(var_core_value_sig7F33 => {
        var_core_value_sig7F33.onPointerDown$["subscribeEvent"](this._controlPointerDownHandler["bind"](this));
      });
    }));
  }
  dispose() {
    var var_core_value_sigA790, var_core_value_sig9A5E;
    (var_core_value_sigA790 = this._scenePointerMoveSubscribe) == null || var_core_value_sigA790.unsubscribe(), this._scenePointerMoveSubscribe = null, (var_core_value_sig9A5E = this._scenePointerUpSubscribe) == null || var_core_value_sig9A5E.unsubscribe(), this._scenePointerUpSubscribe = null, this._selectionControl = null, this._moveStartRange = null, this._moveStartCellIndex = null, this._targetRange = null, super.dispose();
  }
};
vn = P([N(1, (0, n.Inject)(t.SheetsPivotTableAdaptorModel)), N(2, (0, n.Inject)(d.SheetSkeletonManagerService)), N(3, (0, n.Inject)(n.ICommandService)), N(4, d.ISheetSelectionRenderService), N(5, (0, n.Inject)(r.SheetsSelectionsService))], vn);
let yn = class extends n.Disposable {
  constructor(var_core_value_sig01B9, var_core_value_sigD6A9, var_core_value_sig0FCF) {
    super(), this._mergeCellController = var_core_value_sig01B9, this._univerInstanceService = var_core_value_sigD6A9, this._sheetsPivotTableConfigModel = var_core_value_sig0FCF, this._initMenuInterceptor();
  }
  _initMenuInterceptor() {
    this.disposeWithMe(this._mergeCellController["interceptor"].intercept(this._mergeCellController["interceptor"].getInterceptPoints().MERGE_CELL_INTERCEPTOR_CHECK, {
      handler: (var_core_value_sig7D40, var_core_value_sig6C7E) => {
        let var_core_value_sig68BE = (0, r.getSheetCommandTarget)(this._univerInstanceService);
        if (!var_core_value_sig68BE) return var_core_value_sig7D40;
        let {
            unitId: var_core_value_sig04C6,
            subUnitId: var_core_value_sigCA05
          } = var_core_value_sig68BE,
          var_core_value_sig2F2B = this._sheetsPivotTableConfigModel["getSubUnitPivotConfigs"](var_core_value_sig04C6, var_core_value_sigCA05),
          var_core_value_sig70AF = [];
        return var_core_value_sig2F2B && var_core_value_sig2F2B.forEach((var_core_value_sig0C53, var_core_value_sigEA04) => {
          var var_core_value_sig7A62;
          let var_core_value_sig8109 = (var_core_value_sig7A62 = this._sheetsPivotTableConfigModel["getPivotTableRangeInfo"](var_core_value_sig04C6, var_core_value_sigCA05, var_core_value_sigEA04)) == null ? undefined : var_core_value_sig7A62.rangeInfo;
          var_core_value_sig8109 && Object.keys(var_core_value_sig8109).forEach(var_core_value_sig698E => {
            let var_core_value_sig2809 = var_core_value_sig8109[var_core_value_sig698E];
            Array.isArray(var_core_value_sig2809) && var_core_value_sig70AF.push(...var_core_value_sig2809);
          });
        }), var_core_value_sig70AF.length && var_core_value_sig6C7E.some(var_core_value_sig7565 => var_core_value_sig70AF.some(var_core_value_sig2DAB => n.Rectangle["intersects"](var_core_value_sig2DAB, var_core_value_sig7565))) ? true : var_core_value_sig7D40;
      }
    }));
  }
};
yn = P([N(0, (0, n.Inject)(r.MergeCellController)), N(1, (0, n.Inject)(n.IUniverInstanceService)), N(2, (0, n.Inject)(t.SheetsPivotTableConfigModel))], yn);
let $ = class extends n.Plugin {
  constructor(var_core_value_sigCF96 = ft, var_core_value_sigC4E9, var_core_value_sigF612, var_core_value_sigAA6C, var_core_value_sig8BFA) {
    super(), this._config = var_core_value_sigCF96, this._injector = var_core_value_sigC4E9, this._commandService = var_core_value_sigF612, this._renderManagerService = var_core_value_sigAA6C, this._configService = var_core_value_sig8BFA;
    let {
      menu: var_core_value_sig236B,
      ...var_core_value_sig1951
    } = (0, n.merge)({}, ft, this._config);
    var_core_value_sig236B && this._configService["setConfig"]("menu", var_core_value_sig236B, {
      merge: true
    }), this._configService["setConfig"]("sheets-pivot-ui.config", var_core_value_sig1951), this._initRegisterCommand();
  }
  onStarting() {
    this._injector["add"]([X]), this._injector["get"](X), [[rn], [yn], [en], [F], [on], [nn], [an], [Z], [Qt]].forEach(var_core_value_sigD04E => this._injector["add"](var_core_value_sigD04E)), this._injector["get"](Z);
  }
  onReady() {
    this._registerRenderModules(), this._injector["get"](rn);
  }
  onRendered() {
    this._injector["get"](en), this._injector["get"](F), this._injector["get"](on), this._injector["get"](nn), this._injector["get"](an), this._injector["get"](Qt);
  }
  onSteady() {
    this._injector["get"](yn);
  }
  _registerRenderModules() {
    [[gn], [vn]].forEach(var_core_value_sigB99B => {
      this.disposeWithMe(this._renderManagerService["registerRenderModule"](n.UniverInstanceType["UNIVER_SHEET"], var_core_value_sigB99B));
    });
  }
  _initRegisterCommand() {
    [O, K, I, L, Ae, Ne, Ve].forEach(var_core_value_sig5A75 => this._commandService["registerCommand"](var_core_value_sig5A75));
  }
};
M($, "pluginName", t.SHEET_PIVOT_TABLE_PLUGIN + "_UI_PLUGIN"), M($, "packageName", ut), M($, "version", dt), M($, "type", n.UniverInstanceType["UNIVER_SHEET"]), $ = P([(0, n.DependentOn)(f.UniverLicensePlugin, p.UniverRenderEnginePlugin, r.UniverSheetsPlugin, t.UniverSheetsPivotTablePlugin, d.UniverSheetsUIPlugin), N(1, (0, n.Inject)(n.Injector)), N(2, (0, n.Inject)(n.ICommandService)), N(3, p.IRenderManagerService), N(4, n.IConfigService)], $), exports.SheetsPivotTableUIMenuSchema = lt, Object.defineProperty(exports, "UniverSheetsPivotTableUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
