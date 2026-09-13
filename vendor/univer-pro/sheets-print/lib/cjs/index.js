Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/license"),
  t = require("@univerjs-pro/print"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets"),
  i = require("@univerjs/ui"),
  a = require("rxjs"),
  o = require("@univerjs/engine-render"),
  s = require("@univerjs/sheets-ui"),
  c = require("@univerjs/design"),
  l = require("@univerjs/icons"),
  u = require("react"),
  d = require("react/jsx-runtime"),
  f = require("@univerjs/docs"),
  p = require("@univerjs/docs-ui");
const m = Number.parseInt(1788764290),
  h = "UNIVER_SHEET_PERMISSION_ALERT_DIALOG_ID";
function g(var_core_value_sig5E16) {
  "@babel/helpers - typeof";

  return g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig8EA0) {
    return typeof var_core_value_sig8EA0;
  } : function (var_core_value_sigA6F6) {
    return var_core_value_sigA6F6 && typeof Symbol == "function" && var_core_value_sigA6F6.constructor === Symbol && var_core_value_sigA6F6 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigA6F6;
  }, g(var_core_value_sig5E16);
}
function _(var_core_value_sig09F3, var_core_value_sig4592) {
  if (g(var_core_value_sig09F3) != "object" || !var_core_value_sig09F3) return var_core_value_sig09F3;
  var var_core_value_sigC5C4 = var_core_value_sig09F3[Symbol.toPrimitive];
  if (var_core_value_sigC5C4 !== undefined) {
    var var_core_value_sig1617 = var_core_value_sigC5C4.call(var_core_value_sig09F3, var_core_value_sig4592 || "default");
    if (g(var_core_value_sig1617) != "object") return var_core_value_sig1617;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig4592 === "string" ? String : Number)(var_core_value_sig09F3);
}
function v(var_core_value_sig4169) {
  var var_core_value_sig6D19 = _(var_core_value_sig4169, "string");
  return g(var_core_value_sig6D19) == "symbol" ? var_core_value_sig6D19 : var_core_value_sig6D19 + "";
}
function y(var_core_value_sig279C, var_core_value_sigAC51, var_core_value_sig8986) {
  return (var_core_value_sigAC51 = v(var_core_value_sigAC51)) in var_core_value_sig279C ? Object.defineProperty(var_core_value_sig279C, var_core_value_sigAC51, {
    value: var_core_value_sig8986,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig279C[var_core_value_sigAC51] = var_core_value_sig8986, var_core_value_sig279C;
}
const b = (0, n.createIdentifier)("univer-pro.sheet-print-dialog.service");
var x = class extends n.Disposable {
  constructor(...var_core_value_sigCDDA) {
    super(...var_core_value_sigCDDA), y(this, "visible$", new a["BehaviorSubject"](false)), y(this, "preparing$", new a["BehaviorSubject"](false));
  }
  get visible() {
    return this.visible$["getValue"]();
  }
  get preparing() {
    return this.preparing$["getValue"]();
  }
  open() {
    this.visible$["next"](true);
  }
  close() {
    this.visible$["next"](false);
  }
  setPreparing(var_core_value_sigE243) {
    this.preparing$["next"](var_core_value_sigE243);
  }
  dispose() {
    this.visible$["complete"](), this.preparing$["complete"](), super.dispose();
  }
};
let S = function (var_core_value_sigCAF7) {
    return var_core_value_sigCAF7.CurrentSheet = "CurrentSheet", var_core_value_sigCAF7.workbook = "Workbook", var_core_value_sigCAF7.CurrentSelection = "CurrentSelection", var_core_value_sigCAF7.AllSelection = "AllSelection", var_core_value_sigCAF7;
  }({}),
  C = function (var_core_value_sigED1C) {
    return var_core_value_sigED1C.PageSize = "PageSize", var_core_value_sigED1C.WorkbookTitle = "WorkbookTitle", var_core_value_sigED1C.WorksheetTitle = "WorksheetTitle", var_core_value_sigED1C.Date = "Date", var_core_value_sigED1C.Time = "Time", var_core_value_sigED1C;
  }({}),
  w = function (var_core_value_sig726E) {
    return var_core_value_sig726E.Row = "Row", var_core_value_sig726E.Column = "Column", var_core_value_sig726E;
  }({}),
  T = function (var_core_value_sig2CD3) {
    return var_core_value_sig2CD3.WorkbookTitle = "@WorkbookTitle", var_core_value_sig2CD3.WorksheetTitle = "@WorksheetTitle", var_core_value_sig2CD3.DateA = "@DateA", var_core_value_sig2CD3.DateB = "@DateB", var_core_value_sig2CD3.DateC = "@DateC", var_core_value_sig2CD3.DateD = "@DateD", var_core_value_sig2CD3.DateE = "@DateE", var_core_value_sig2CD3.TimeA = "@TimeA", var_core_value_sig2CD3.TimeB = "@TimeB", var_core_value_sig2CD3.TimeC = "@TimeC", var_core_value_sig2CD3.TimeD = "@TimeD", var_core_value_sig2CD3.Page = "@Page", var_core_value_sig2CD3.SheetPage = "@SheetPage", var_core_value_sig2CD3.PageTotal = "@TotalPage", var_core_value_sig2CD3.SheetPageTotal = "@TotalSheetPage", var_core_value_sig2CD3;
  }({});
const E = {
  topLeft: "",
  topCenter: "",
  topRight: "",
  bottomLeft: "",
  bottomCenter: "",
  bottomRight: ""
};
function D(var_core_value_sig038E, var_core_value_sigAA1E) {
  return function (var_core_value_sig74A8, var_core_value_sig21B2) {
    var_core_value_sigAA1E(var_core_value_sig74A8, var_core_value_sig21B2, var_core_value_sig038E);
  };
}
function O(var_core_value_sigC9F5, var_core_value_sig7EEA, var_core_value_sig59CE, var_core_value_sig33C8) {
  var var_core_value_sig957F = arguments.length,
    var_core_value_sig803B = var_core_value_sig957F < 3 ? var_core_value_sig7EEA : var_core_value_sig33C8 === null ? var_core_value_sig33C8 = Object.getOwnPropertyDescriptor(var_core_value_sig7EEA, var_core_value_sig59CE) : var_core_value_sig33C8,
    var_core_value_sig5830;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig803B = Reflect.decorate(var_core_value_sigC9F5, var_core_value_sig7EEA, var_core_value_sig59CE, var_core_value_sig33C8);else {
    for (var var_core_value_sig4A7C = var_core_value_sigC9F5.length - 1; var_core_value_sig4A7C >= 0; var_core_value_sig4A7C--) (var_core_value_sig5830 = var_core_value_sigC9F5[var_core_value_sig4A7C]) && (var_core_value_sig803B = (var_core_value_sig957F < 3 ? var_core_value_sig5830(var_core_value_sig803B) : var_core_value_sig957F > 3 ? var_core_value_sig5830(var_core_value_sig7EEA, var_core_value_sig59CE, var_core_value_sig803B) : var_core_value_sig5830(var_core_value_sig7EEA, var_core_value_sig59CE)) || var_core_value_sig803B);
  }
  return var_core_value_sig957F > 3 && var_core_value_sig803B && Object.defineProperty(var_core_value_sig7EEA, var_core_value_sig59CE, var_core_value_sig803B), var_core_value_sig803B;
}
const k = (0, n.createIdentifier)("univer-pro.sheet-print-manager.service"),
  A = var_core_value_sigF975 => Math.floor(var_core_value_sigF975 * 100) / 100,
  ee = {
    startColumn: 0,
    endColumn: 0,
    startRow: 0,
    endRow: 0
  },
  j = {
    startColumn: -1,
    startRow: -1,
    xSplit: 0,
    ySplit: 0
  };
let M = class {
  constructor(var_core_value_sigDE08, var_core_value_sigACCB, var_core_value_sig7F33, var_core_value_sig0C53) {
    this._univerInstanceService = var_core_value_sigDE08, this._sheetsSelectionsSrv = var_core_value_sigACCB, this._sheetPrintInterceptorService = var_core_value_sig7F33, this._renderManagerService = var_core_value_sig0C53, y(this, "_layoutConfig", {
      area: "CurrentSheet",
      subUnitIds: [],
      paperSize: n.PaperType["A4"],
      direction: t.PrintDirection["Portrait"],
      scale: t.PrintScale["Origin"],
      customScale: 1,
      freeze: ["Row", "Column"],
      margin: t.PrintPaperMargin["Normal"],
      maxRowsEachPage: 1 / 0,
      maxColumnsEachPage: 1 / 0,
      marginCustom: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    }), y(this, "_renderConfig", {
      gridlines: true,
      hAlign: t.PrintAlign["Middle"],
      vAlign: t.PrintAlign["Start"],
      headerFooter: [],
      headerFooterSetting: E,
      isCustomHeaderFooter: false
    }), y(this, "_layoutInfos", []), y(this, "_layoutInfos$", new a["BehaviorSubject"](this._layoutInfos)), y(this, "_layoutConfig$", new a["BehaviorSubject"](this._layoutConfig)), y(this, "_renderConfig$", new a.BehaviorSubject(this._renderConfig)), y(this, "_printViewDisposable", null), y(this, "layoutConfig$", this._layoutConfig$["asObservable"]()), y(this, "renderConfig$", this._renderConfig$["asObservable"]()), y(this, "layoutInfos$", this._layoutInfos$["asObservable"]().pipe((0, a.debounceTime)(300)));
  }
  get layoutInfos() {
    return this._layoutInfos;
  }
  get renderConfig() {
    return this._renderConfig;
  }
  get layoutConfig() {
    return this._layoutConfig;
  }
  get paperSize() {
    let {
      paperSize: var_core_value_sigEA04,
      direction: var_core_value_sig7A62,
      pageSizeCustom: var_core_value_sig8109
    } = this._layoutConfig;
    if (var_core_value_sig8109) return var_core_value_sig8109;
    let var_core_value_sig7565 = n.PAGE_SIZE[var_core_value_sigEA04];
    return var_core_value_sig7A62 === t.PrintDirection["Portrait"] ? {
      w: var_core_value_sig7565.width,
      h: var_core_value_sig7565.height
    } : {
      w: var_core_value_sig7565.height,
      h: var_core_value_sig7565.width
    };
  }
  get paperMargin() {
    return this._layoutConfig["margin"] === t.PrintPaperMargin["Custom"] ? this._layoutConfig["marginCustom"] : t.PaperMarginMap[this._layoutConfig["margin"]];
  }
  updateLayoutConfig(var_core_value_sigD4FB) {
    this._layoutConfig = {
      ...this._layoutConfig,
      ...var_core_value_sigD4FB
    }, this._layoutConfig$["next"](this._layoutConfig), this.reLayout();
  }
  replaceLayoutConfig(var_core_value_sig3E71) {
    this._layoutConfig = var_core_value_sig3E71, this._layoutConfig$["next"](this._layoutConfig), this.reLayout();
  }
  updateRenderConfig(var_core_value_sig01B3) {
    this._renderConfig = {
      ...this._renderConfig,
      ...var_core_value_sig01B3
    }, this._renderConfig$["next"](this._renderConfig);
  }
  replaceRenderConfig(var_core_value_sig7442) {
    this._renderConfig = var_core_value_sig7442, this._renderConfig$["next"](this._renderConfig);
  }
  reLayout() {
    this._layoutInfos = this._calculate(), this._layoutInfos$["next"](this._layoutInfos);
  }
  reset() {
    this._layoutInfos = [], this._layoutInfos$["next"](this._layoutInfos), this._layoutConfig = {
      ...this._layoutConfig,
      area: "CurrentSheet",
      maxRowsEachPage: 1 / 0,
      maxColumnsEachPage: 1 / 0
    }, this._layoutConfig$["next"](this._layoutConfig);
  }
  setPrintViewDisposable(var_core_value_sigDF87) {
    var var_core_value_sig9EE0;
    (var_core_value_sig9EE0 = this._printViewDisposable) == null || var_core_value_sig9EE0.dispose(), this._printViewDisposable = var_core_value_sigDF87;
  }
  disposePrintView() {
    var var_core_value_sigF051;
    (var_core_value_sigF051 = this._printViewDisposable) == null || var_core_value_sigF051.dispose(), this._printViewDisposable = null;
  }
  _calculate() {
    let var_core_value_sig0B45 = this._calculateSubSheetRange(),
      var_core_value_sig36F8 = [];
    return var_core_value_sig0B45.forEach(var_core_value_sigF4B9 => {
      if (var_core_value_sigF4B9) {
        let var_core_value_sig186C = this._calculateSheetPages(var_core_value_sigF4B9);
        var_core_value_sig186C && var_core_value_sig36F8.push(var_core_value_sig186C);
      }
    }), var_core_value_sig36F8;
  }
  _calculateSheetRangeById(var_core_value_sig03E1, var_core_value_sigBB57, var_core_value_sig7C4A) {
    var var_core_value_sigE799;
    let var_core_value_sigB601 = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SHEET"]).getSheetBySheetId(var_core_value_sigBB57);
    if (!var_core_value_sigB601) return;
    let var_core_value_sig8B71 = var_core_value_sigB601.getFreeze(),
      var_core_value_sigAEFB = var_core_value_sig7C4A ?? var_core_value_sigB601.getCellMatrixPrintRange(),
      var_core_value_sig826B = (var_core_value_sigE799 = this._renderManagerService["getRenderUnitById"](var_core_value_sig03E1)) == null ? undefined : var_core_value_sigE799.with(s.SheetSkeletonManagerService).ensureSkeleton(var_core_value_sigBB57);
    if (!var_core_value_sig826B) return;
    if (var_core_value_sigAEFB) {
      var var_core_value_sigCF89;
      var_core_value_sig826B == null || (var_core_value_sigCF89 = var_core_value_sig826B.overflowCache) == null || var_core_value_sigCF89.forValue((var_core_value_sigD955, var_core_value_sig48BD, var_core_value_sig429F) => {
        let {
          endColumn: var_core_value_sigF62A
        } = var_core_value_sig429F;
        var_core_value_sigF62A > var_core_value_sigAEFB.endColumn && (var_core_value_sigAEFB.endColumn = var_core_value_sigF62A);
      });
    }
    let var_core_value_sig00CB = this._sheetPrintInterceptorService["interceptor"].fetchThroughInterceptors(this._sheetPrintInterceptorService["interceptor"].getInterceptPoints().PRINTING_RANGE)(var_core_value_sigAEFB, {
      unitId: var_core_value_sig03E1,
      subUnitId: var_core_value_sigBB57
    });
    return var_core_value_sig00CB ? this._calculateFinalRange(var_core_value_sigBB57, {
      ...var_core_value_sig00CB,
      startColumn: Math.max(var_core_value_sig8B71.startColumn - var_core_value_sig8B71.xSplit, 0),
      startRow: Math.max(var_core_value_sig8B71.startRow - var_core_value_sig8B71.ySplit, 0)
    }) : null;
  }
  _calculateCurrentSelectionRange(var_core_value_sig77EE, var_core_value_sig9F76) {
    let var_core_value_sigB008 = this._sheetsSelectionsSrv["getWorkbookSelections"](var_core_value_sig77EE).getSelectionsOfWorksheet(var_core_value_sig9F76);
    return var_core_value_sigB008 ? var_core_value_sigB008.map(var_core_value_sig5CEE => this._calculateFinalRange(var_core_value_sig9F76, var_core_value_sig5CEE.range)) : [];
  }
  _calculateFinalRange(var_core_value_sig8721, var_core_value_sig08BA) {
    let var_core_value_sigDBB5 = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SHEET"]),
      var_core_value_sigCFAC = var_core_value_sigDBB5.getSheetBySheetId(var_core_value_sig8721),
      var_core_value_sig237B = this._layoutConfig,
      var_core_value_sigFEAB = var_core_value_sigDBB5.getUnitId(),
      var_core_value_sigE347 = this.paperSize,
      {
        top: var_core_value_sig3C5B,
        right: var_core_value_sig200B,
        bottom: var_core_value_sig3863,
        left: var_core_value_sigC97C
      } = this.paperMargin;
    var_core_value_sigE347.h -= var_core_value_sig3C5B + var_core_value_sig3863, var_core_value_sigE347.w -= var_core_value_sigC97C + var_core_value_sig200B;
    let var_core_value_sigC4B1 = this._renderManagerService["getRenderUnitById"](var_core_value_sigFEAB).with(s.SheetSkeletonManagerService);
    if (var_core_value_sig08BA.startRow > -1 && var_core_value_sig08BA.startColumn > -1) {
      let var_core_value_sigE92A = var_core_value_sigC4B1.ensureSkeleton(var_core_value_sig8721);
      if (!var_core_value_sigCFAC || !var_core_value_sigE92A) return null;
      let var_core_value_sig362B = var_core_value_sig08BA.startRow,
        var_core_value_sig5CA5 = var_core_value_sig08BA.endRow,
        var_core_value_sigE90F = var_core_value_sig08BA.startColumn,
        var_core_value_sigEFD4 = var_core_value_sig08BA.endColumn,
        var_core_value_sig861B = var_core_value_sigCFAC.getFreeze(),
        var_core_value_sig5237 = A(this._calculatePrintScale(var_core_value_sigE92A, var_core_value_sig08BA, var_core_value_sig861B)),
        var_core_value_sigBB00 = -1,
        var_core_value_sig7E54 = 0,
        var_core_value_sig9A8D = -1,
        var_core_value_sigC259 = 0,
        var_core_value_sig9C9F = var_core_value_sigE92A.columnWidthAccumulation,
        var_core_value_sigFDEA = var_core_value_sigE92A.rowHeightAccumulation;
      if (var_core_value_sig861B.xSplit && var_core_value_sig237B.freeze["includes"]("Column")) {
        if (var_core_value_sigEFD4 >= var_core_value_sig861B.startColumn) {
          let var_core_value_sig7524 = var_core_value_sig5237 * (var_core_value_sig9C9F[var_core_value_sig861B.startColumn - 1] - (var_core_value_sig9C9F[var_core_value_sig861B.startColumn - var_core_value_sig861B.xSplit - 1] || 0));
          var_core_value_sig7524 < var_core_value_sigE347.w && (var_core_value_sig9A8D = var_core_value_sig861B.startColumn, var_core_value_sigC259 = var_core_value_sig861B.xSplit, var_core_value_sigE347.w -= var_core_value_sig7524);
        } else {
          let var_core_value_sig2AD8 = var_core_value_sigEFD4 + 1,
            var_core_value_sig2AD0 = var_core_value_sigEFD4 + 1 - (var_core_value_sig861B.startColumn - var_core_value_sig861B.xSplit),
            var_core_value_sig3EEE = var_core_value_sig5237 * (var_core_value_sig9C9F[var_core_value_sig9A8D - 1] - (var_core_value_sig9C9F[var_core_value_sig9A8D - var_core_value_sigC259] - 1 || 0));
          var_core_value_sig3EEE < var_core_value_sigE347.w && (var_core_value_sig9A8D = var_core_value_sig2AD8, var_core_value_sigC259 = var_core_value_sig2AD0, var_core_value_sigE347.w -= var_core_value_sig3EEE);
        }
      }
      if (var_core_value_sigE90F = Math.max(var_core_value_sig9A8D, var_core_value_sigE90F), var_core_value_sig861B.ySplit && var_core_value_sig237B.freeze["includes"]("Row")) {
        if (var_core_value_sig5CA5 >= var_core_value_sig861B.startRow) {
          let var_core_value_sigBC46 = var_core_value_sigFDEA[var_core_value_sig861B.startRow] - var_core_value_sigFDEA[var_core_value_sig861B.startRow - var_core_value_sig861B.ySplit];
          var_core_value_sigBC46 < var_core_value_sigE347.h && (var_core_value_sigBB00 = var_core_value_sig861B.startRow, var_core_value_sig7E54 = var_core_value_sig861B.ySplit, var_core_value_sigE347.h -= var_core_value_sigBC46);
        } else var_core_value_sigBB00 = var_core_value_sig5CA5 + 1, var_core_value_sig7E54 = var_core_value_sig5CA5 + 1 - (var_core_value_sig861B.startRow - var_core_value_sig861B.ySplit), var_core_value_sigE347.h = var_core_value_sigE347.h - var_core_value_sigFDEA[var_core_value_sigBB00] - var_core_value_sigFDEA[var_core_value_sigBB00 - var_core_value_sig7E54];
      }
      return var_core_value_sig362B = Math.max(var_core_value_sigBB00, var_core_value_sig362B), {
        unitId: var_core_value_sigFEAB,
        subUnitId: var_core_value_sig8721,
        range: {
          startRow: var_core_value_sig362B,
          endRow: var_core_value_sig5CA5,
          startColumn: var_core_value_sigE90F,
          endColumn: var_core_value_sigEFD4
        },
        freeze: {
          startRow: var_core_value_sigBB00,
          startColumn: var_core_value_sig9A8D,
          xSplit: var_core_value_sigC259,
          ySplit: var_core_value_sig7E54
        },
        contentSize: var_core_value_sigE347,
        scale: var_core_value_sig5237
      };
    }
    return {
      unitId: var_core_value_sigFEAB,
      subUnitId: var_core_value_sig8721,
      range: ee,
      freeze: j,
      contentSize: var_core_value_sigE347,
      scale: 1
    };
  }
  _calculatePrintScale(var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937) {
    let var_core_value_sigCAD5 = var_core_value_sig1BD9.columnWidthAccumulation,
      var_core_value_sigE503 = var_core_value_sig1BD9.rowHeightAccumulation,
      {
        xSplit: var_core_value_sig48DD,
        ySplit: var_core_value_sig5E6A,
        startColumn: var_core_value_sigB7FC,
        startRow: var_core_value_sig9CD9
      } = var_core_value_sigA937,
      {
        startRow: var_core_value_sigFD0C,
        startColumn: var_core_value_sig849B
      } = var_core_value_sigE43E,
      {
        endColumn: var_core_value_sig5F1A,
        endRow: var_core_value_sigB455
      } = var_core_value_sigE43E;
    var_core_value_sigFD0C = var_core_value_sigB455 < var_core_value_sig9CD9 ? var_core_value_sigFD0C : Math.max(var_core_value_sig9CD9, var_core_value_sigFD0C), var_core_value_sig849B = var_core_value_sig5F1A < var_core_value_sigB7FC ? var_core_value_sig849B : Math.max(var_core_value_sigB7FC, var_core_value_sig849B);
    let {
        scale: var_core_value_sig5241,
        customScale: var_core_value_sigC6E5
      } = this._layoutConfig,
      var_core_value_sigCEFB = this.paperSize,
      var_core_value_sig1537 = this.paperMargin,
      var_core_value_sigE4C6 = var_core_value_sig48DD > 0 ? (var_core_value_sigCAD5[var_core_value_sigB7FC - 1] || 0) - (var_core_value_sigCAD5[var_core_value_sigB7FC - var_core_value_sig48DD - 1] || 0) : 0,
      var_core_value_sig4313 = var_core_value_sig5E6A > 0 ? (var_core_value_sigE503[var_core_value_sig9CD9 - 1] || 0) - (var_core_value_sigE503[var_core_value_sig9CD9 - var_core_value_sig5E6A - 1] || 0) : 0,
      var_core_value_sigFC87 = var_core_value_sigE503[var_core_value_sigB455] - (var_core_value_sigE503[var_core_value_sigFD0C - 1] || 0),
      var_core_value_sig156F = var_core_value_sigCAD5[var_core_value_sig5F1A] - (var_core_value_sigCAD5[var_core_value_sig849B - 1] || 0),
      var_core_value_sigDD51 = var_core_value_sigFC87 + var_core_value_sig4313,
      var_core_value_sigF057 = var_core_value_sig156F + var_core_value_sigE4C6;
    switch (var_core_value_sig5241) {
      case t.PrintScale["Custom"]:
        return var_core_value_sigC6E5;
      case t.PrintScale["FitWidth"]:
        return Math.min(1, (var_core_value_sigCEFB.w - var_core_value_sig1537.left - var_core_value_sig1537.right) / var_core_value_sigF057);
      case t.PrintScale["FitHeight"]:
        return Math.min(1, (var_core_value_sigCEFB.h - var_core_value_sig1537.top - var_core_value_sig1537.bottom) / var_core_value_sigDD51);
      case t.PrintScale["FitPage"]:
        return Math.min(1, (var_core_value_sigCEFB.w - var_core_value_sig1537.left - var_core_value_sig1537.right) / var_core_value_sigF057, (var_core_value_sigCEFB.h - var_core_value_sig1537.top - var_core_value_sig1537.bottom) / var_core_value_sigDD51);
      default:
        return 1;
    }
  }
  _calculateSubSheetRange() {
    let {
        area: var_core_value_sig72F6,
        subUnitIds: var_core_value_sig9FBA
      } = this._layoutConfig,
      var_core_value_sigFE01 = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SHEET"]),
      var_core_value_sigA2CE = var_core_value_sigFE01.getUnitId();
    switch (var_core_value_sig72F6) {
      case "CurrentSheet":
        {
          var var_core_value_sig1975;
          let var_core_value_sig8178 = (var_core_value_sig1975 = var_core_value_sigFE01.getActiveSheet()) == null ? undefined : var_core_value_sig1975.getSheetId();
          if (var_core_value_sig8178 != null) {
            let var_core_value_sig3D7D = this._calculateSheetRangeById(var_core_value_sigA2CE, var_core_value_sig8178);
            if (var_core_value_sig3D7D) return [var_core_value_sig3D7D];
            let var_core_value_sig27E5 = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SHEET"]),
              var_core_value_sig8061 = var_core_value_sig27E5.getActiveSheet();
            return var_core_value_sig8061 ? this._calculateCurrentSelectionRange(var_core_value_sig27E5.getUnitId(), var_core_value_sig8061.getSheetId()) : (console.warn("No active sheet found"), []);
          }
          return [];
        }
      case "CurrentSelection":
        {
          let var_core_value_sigE9ED = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SHEET"]),
            var_core_value_sigB577 = var_core_value_sigE9ED.getActiveSheet();
          return var_core_value_sigB577 ? this._calculateCurrentSelectionRange(var_core_value_sigE9ED.getUnitId(), var_core_value_sigB577.getSheetId()) : (console.warn("No active sheet found"), []);
        }
      case "AllSelection":
        return this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SHEET"]).getSheets().map(var_core_value_sig9572 => this._calculateCurrentSelectionRange(var_core_value_sigA2CE, var_core_value_sig9572.getSheetId())).flat();
      default:
        return (var_core_value_sig9FBA.length ? var_core_value_sig9FBA : var_core_value_sigFE01.getSheets().filter(var_core_value_sigD873 => !var_core_value_sigD873.isSheetHidden()).map(var_core_value_sigA12B => var_core_value_sigA12B.getSheetId())).map(var_core_value_sigF230 => this._calculateSheetRangeById(var_core_value_sigA2CE, typeof var_core_value_sigF230 == "string" ? var_core_value_sigF230 : var_core_value_sigF230.id, typeof var_core_value_sigF230 == "string" ? undefined : var_core_value_sigF230.range)).filter(Boolean);
    }
  }
  _calculateSheetPages(var_core_value_sig6EA1) {
    let {
        subUnitId: var_core_value_sig029F,
        range: var_core_value_sig3767,
        freeze: var_core_value_sig670B,
        unitId: var_core_value_sig6912,
        scale: var_core_value_sigE235,
        contentSize: var_core_value_sig7664
      } = var_core_value_sig6EA1,
      var_core_value_sig2281 = this._renderManagerService["getRenderUnitById"](var_core_value_sig6912).with(s.SheetSkeletonManagerService).ensureSkeleton(var_core_value_sig029F);
    if (!var_core_value_sig2281) return;
    let {
        rowHeightAccumulation: var_core_value_sig5E86,
        columnWidthAccumulation: var_core_value_sig6998
      } = var_core_value_sig2281,
      {
        w: var_core_value_sigF639,
        h: var_core_value_sigEAE5
      } = var_core_value_sig7664,
      {
        startRow: var_core_value_sigE94C,
        startColumn: var_core_value_sig6D47,
        endColumn: var_core_value_sigCB82,
        endRow: var_core_value_sigCF4E
      } = var_core_value_sig3767,
      var_core_value_sig6CAD = var_core_value_sig86D0 => {
        let var_core_value_sig4CD2 = var_core_value_sig86D0,
          var_core_value_sig48CA = this._layoutConfig["maxRowsEachPage"] <= var_core_value_sig670B.ySplit ? 1 / 0 : this._layoutConfig["maxRowsEachPage"] - 1 - var_core_value_sig670B.ySplit + var_core_value_sig86D0,
          var_core_value_sig50AF = var_core_value_sig86D0 === 0 ? 0 : var_core_value_sig5E86[var_core_value_sig86D0 - 1];
        for (; var_core_value_sig4CD2 < var_core_value_sigCF4E;) {
          let var_core_value_sig4D4C = (var_core_value_sig5E86[var_core_value_sig4CD2] - var_core_value_sig50AF) * var_core_value_sigE235,
            var_core_value_sigC9E0 = (var_core_value_sig5E86[var_core_value_sig4CD2 + 1] - var_core_value_sig50AF) * var_core_value_sigE235;
          if (var_core_value_sig4CD2++, var_core_value_sig4D4C >= var_core_value_sigEAE5 || var_core_value_sig4D4C < var_core_value_sigEAE5 && var_core_value_sigC9E0 > var_core_value_sigEAE5) return {
            startRow: var_core_value_sig86D0,
            endRow: Math.min(var_core_value_sig4CD2 - 1, var_core_value_sig48CA)
          };
        }
        return {
          startRow: var_core_value_sig86D0,
          endRow: Math.min(var_core_value_sig4CD2, var_core_value_sig48CA)
        };
      },
      var_core_value_sig8CF5 = var_core_value_sigA942 => {
        let var_core_value_sigA621 = var_core_value_sigA942,
          var_core_value_sigBBFF = var_core_value_sigA942 === 0 ? 0 : var_core_value_sig6998[var_core_value_sigA942 - 1],
          var_core_value_sig8889 = this._layoutConfig["maxColumnsEachPage"] <= var_core_value_sig670B.xSplit ? 1 / 0 : this._layoutConfig["maxColumnsEachPage"] - 1 - var_core_value_sig670B.xSplit + var_core_value_sigA942;
        for (; var_core_value_sigA621 < var_core_value_sigCB82;) {
          let var_core_value_sig76BA = (var_core_value_sig6998[var_core_value_sigA621] - var_core_value_sigBBFF) * var_core_value_sigE235,
            var_core_value_sigFBFA = (var_core_value_sig6998[var_core_value_sigA621 + 1] - var_core_value_sigBBFF) * var_core_value_sigE235;
          if (var_core_value_sigA621++, var_core_value_sig76BA < var_core_value_sigF639 && var_core_value_sigFBFA > var_core_value_sigF639 || var_core_value_sig76BA >= var_core_value_sigF639) return {
            startColumn: var_core_value_sigA942,
            endColumn: Math.min(var_core_value_sigA621 - 1, var_core_value_sig8889)
          };
        }
        return {
          startColumn: var_core_value_sigA942,
          endColumn: Math.min(var_core_value_sigA621, var_core_value_sig8889)
        };
      },
      var_core_value_sigDDD7 = [],
      var_core_value_sigB2CE = var_core_value_sigE94C;
    for (; var_core_value_sigB2CE <= var_core_value_sigCF4E;) {
      let var_core_value_sig09B8 = var_core_value_sig6CAD(var_core_value_sigB2CE);
      var_core_value_sigDDD7.push(var_core_value_sig09B8), var_core_value_sigB2CE = var_core_value_sig09B8.endRow + 1;
    }
    let var_core_value_sig443C = [],
      var_core_value_sig39B1 = var_core_value_sig6D47;
    for (; var_core_value_sig39B1 <= var_core_value_sigCB82;) {
      let var_core_value_sig6F91 = var_core_value_sig8CF5(var_core_value_sig39B1);
      var_core_value_sig443C.push(var_core_value_sig6F91), var_core_value_sig39B1 = var_core_value_sig6F91.endColumn + 1;
    }
    let var_core_value_sig210D = [];
    for (let var_core_value_sig32F8 = 0; var_core_value_sig32F8 < var_core_value_sigDDD7.length; var_core_value_sig32F8++) for (let var_core_value_sigF9C7 = 0; var_core_value_sigF9C7 < var_core_value_sig443C.length; var_core_value_sigF9C7++) var_core_value_sig210D.push({
      ...var_core_value_sigDDD7[var_core_value_sig32F8],
      ...var_core_value_sig443C[var_core_value_sigF9C7]
    });
    return {
      unitId: var_core_value_sig6912,
      subUnitId: var_core_value_sig029F,
      pages: var_core_value_sig210D,
      freeze: var_core_value_sig670B,
      scale: var_core_value_sigE235,
      pageSize: this.paperSize,
      margin: this.paperMargin
    };
  }
};
M = O([D(0, n.IUniverInstanceService), D(1, (0, n.Inject)(r.SheetsSelectionsService)), D(2, (0, n.Inject)(s.SheetPrintInterceptorService)), D(3, o.IRenderManagerService)], M);
const te = (var_core_value_sigCDAF, var_core_value_sigA298) => {
    if (!var_core_value_sigCDAF || !var_core_value_sigA298) return true;
    let var_core_value_sig0B40 = (0, e.getLicenseInfo)(var_core_value_sigCDAF, var_core_value_sigA298).message,
      var_core_value_sig330B = (0, e.isFeatureAuthorizedWithinTime)(var_core_value_sig0B40, "sf", m);
    return !((var_core_value_sig0B40 == null ? undefined : var_core_value_sig0B40.rt) === e.ReleaseType["NO_COMMERCIAL"] && !var_core_value_sig330B);
  },
  N = (var_core_value_sig3625, var_core_value_sig0B4E, var_core_value_sig0E9F) => {
    let var_core_value_sigE5BA = {
      page: var_core_value_sig3625,
      isPro: false,
      timeValid: false
    };
    if (!var_core_value_sig0B4E || !var_core_value_sig0E9F) return var_core_value_sigE5BA;
    let var_core_value_sig4A83 = (0, e.getLicenseInfo)(var_core_value_sig0B4E, var_core_value_sig0E9F);
    if (var_core_value_sig4A83.valid) {
      let var_core_value_sigB4B4 = var_core_value_sig4A83.message,
        var_core_value_sigD407 = (0, e.isFeatureAuthorizedWithinTime)(var_core_value_sigB4B4, "sf", m);
      var_core_value_sigE5BA.isPro = var_core_value_sigD407, var_core_value_sigE5BA.timeValid = var_core_value_sigD407, var_core_value_sigE5BA.page = (0, e.getSheetFeatureLimit)(var_core_value_sigB4B4, var_core_value_sigD407, "mpn", var_core_value_sig3625, var_core_value_sig3625, 0);
    }
    return var_core_value_sigE5BA;
  };
function P(var_core_value_sig58AA) {
  let {
    ls: var_core_value_sig84C4,
    pbk: var_core_value_sigB6F7
  } = var_core_value_sig58AA.get(n.IConfigService).getConfig(e.LS_CONFIG_KEY) ?? {};
  return N(3, var_core_value_sig84C4, var_core_value_sigB6F7).isPro;
}
const F = {
    id: "sheet.operation.print-open",
    type: n.CommandType["OPERATION"],
    handler: async var_core_value_sigB495 => {
      let var_core_value_sig70D0 = var_core_value_sigB495.get(b),
        var_core_value_sig2A8A = var_core_value_sigB495.get(n.IPermissionService),
        var_core_value_sig3782 = var_core_value_sigB495.get(n.LocaleService),
        var_core_value_sigD22E = var_core_value_sigB495.get(n.IUniverInstanceService),
        var_core_value_sig3455 = var_core_value_sigB495.get(i.IDialogService),
        {
          ls: var_core_value_sig5CEF,
          pbk: var_core_value_sig43D5
        } = var_core_value_sigB495.get(n.IConfigService).getConfig(e.LS_CONFIG_KEY) ?? {};
      if (!te(var_core_value_sig5CEF, var_core_value_sig43D5)) return false;
      let var_core_value_sig1395 = var_core_value_sigD22E.getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"]).getUnitId();
      if (!(var_core_value_sig2A8A.getPermissionPoint(new r.WorkbookPrintPermission(var_core_value_sig1395).id) ?? false)) {
        let var_core_value_sig63F3 = {
          id: h,
          title: {
            title: ""
          },
          children: {
            label: "UNIVER_SHEET_PERMISSION_ALERT_DIALOG",
            errorMsg: var_core_value_sig3782.t("sheets-print.permission.printErr")
          },
          width: 320,
          onClose: () => var_core_value_sig3455.close(h),
          className: "sheet-permission-user-dialog"
        };
        throw var_core_value_sig3455.open(var_core_value_sig63F3), Error("have not permission");
      }
      var_core_value_sig70D0.setPreparing(true), var_core_value_sig70D0.open();
      try {
        return await var_core_value_sigB495.get(t.IPrintPreparationService).prepare({
          unitId: var_core_value_sig1395,
          unitType: n.UniverInstanceType["UNIVER_SHEET"],
          dpr: 1
        }), true;
      } catch (var_core_value_sig6A71) {
        throw var_core_value_sig70D0.close(), var_core_value_sig6A71;
      } finally {
        var_core_value_sig70D0.setPreparing(false);
      }
    }
  },
  I = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.cancel-print",
    handler(var_core_value_sig9FA0) {
      let var_core_value_sig055E = var_core_value_sig9FA0.get(b),
        var_core_value_sig7C77 = var_core_value_sig9FA0.get(k);
      return var_core_value_sig055E.close(), var_core_value_sig7C77.reset(), true;
    }
  },
  L = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.confirm-print",
    handler() {
      return true;
    }
  },
  R = {
    id: "sheet.operation.print",
    type: n.CommandType["COMMAND"],
    handler(var_core_value_sig9578, var_core_value_sigA2D3) {
      if (!var_core_value_sigA2D3) return false;
      let var_core_value_sigC218 = var_core_value_sig9578.get(n.ICommandService),
        var_core_value_sigADEC = var_core_value_sig9578.get(k);
      return var_core_value_sigADEC.replaceLayoutConfig(var_core_value_sigA2D3.layoutConfig), var_core_value_sigADEC.replaceRenderConfig(var_core_value_sigA2D3.renderConfig), var_core_value_sigC218.syncExecuteCommand(L.id);
    }
  };
function z(var_core_value_sig3D8E, var_core_value_sig37E5) {
  switch (var_core_value_sig3D8E) {
    case "@WorkbookTitle":
      return var_core_value_sig37E5.workbook["name"];
    case "@WorksheetTitle":
      return var_core_value_sig37E5.worksheet["getName"]();
    case "@Page":
      return "" + var_core_value_sig37E5.page;
    case "@TotalPage":
      return "" + var_core_value_sig37E5.pageTotal;
    case "@TotalSheetPage":
      return "" + var_core_value_sig37E5.sheetPageTotal;
    case "@SheetPage":
      return "" + var_core_value_sig37E5.sheetPage;
    case "@DateA":
      return var_core_value_sig37E5.now["format"](var_core_value_sig37E5.localeService["t"]("sheets-print.headerFooter.dateA"));
    case "@DateB":
      return var_core_value_sig37E5.now["format"](var_core_value_sig37E5.localeService["t"]("sheets-print.headerFooter.dateB"));
    case "@DateC":
      return var_core_value_sig37E5.now["format"](var_core_value_sig37E5.localeService["t"]("sheets-print.headerFooter.dateC"));
    case "@DateD":
      return var_core_value_sig37E5.now["format"](var_core_value_sig37E5.localeService["t"]("sheets-print.headerFooter.dateD"));
    case "@DateE":
      return var_core_value_sig37E5.now["format"](var_core_value_sig37E5.localeService["t"]("sheets-print.headerFooter.dateE"));
    case "@TimeA":
      return var_core_value_sig37E5.now["format"](var_core_value_sig37E5.localeService["t"]("sheets-print.headerFooter.timeA"));
    case "@TimeB":
      return var_core_value_sig37E5.now["format"](var_core_value_sig37E5.localeService["t"]("sheets-print.headerFooter.timeB"));
    case "@TimeC":
      return var_core_value_sig37E5.now["format"](var_core_value_sig37E5.localeService["t"]("sheets-print.headerFooter.timeC"));
    case "@TimeD":
      return var_core_value_sig37E5.now["format"](var_core_value_sig37E5.localeService["t"]("sheets-print.headerFooter.timeD"));
  }
}
const ne = Object.values(T);
function B(var_core_value_sigF079, var_core_value_sigFCA0) {
  let var_core_value_sigC84D = var_core_value_sigF079;
  return ne.forEach(var_core_value_sig3BF6 => {
    var_core_value_sigC84D = var_core_value_sigC84D.replaceAll(var_core_value_sig3BF6, z(var_core_value_sig3BF6, var_core_value_sigFCA0));
  }), var_core_value_sigC84D;
}
const V = "@[]@";
function re(var_core_value_sigF2BC, var_core_value_sigD37B) {
  let var_core_value_sigFA28 = var_core_value_sigF2BC;
  var_core_value_sigD37B.forEach(var_core_value_sig38CE => {
    var_core_value_sigFA28 = var_core_value_sigFA28.replaceAll(var_core_value_sig38CE.value, "" + V + var_core_value_sig38CE.label + V);
  });
  let var_core_value_sig93BE = var_core_value_sigFA28.split(V),
    var_core_value_sigABEC = n.RichTextBuilder["create"]();
  return var_core_value_sig93BE.forEach((var_core_value_sig62B7, var_core_value_sig37A8) => {
    if (var_core_value_sig62B7) {
      if (var_core_value_sig37A8 % 2 == 1) {
        let var_core_value_sig8895 = var_core_value_sig62B7,
          var_core_value_sigC80B = {
            id: "d",
            documentStyle: {},
            drawings: {},
            drawingsOrder: [],
            body: {
              dataStream: var_core_value_sig62B7,
              customBlocks: [],
              customRanges: [{
                startIndex: 0,
                endIndex: var_core_value_sig62B7.length - 1,
                rangeId: (0, n.generateRandomId)(),
                rangeType: n.CustomRangeType["MENTION"],
                properties: {
                  value: var_core_value_sigD37B.find(var_core_value_sigF602 => var_core_value_sigF602.label === var_core_value_sig8895).value
                }
              }]
            }
          };
        var_core_value_sigABEC.insertRichText(var_core_value_sigC80B);
      } else var_core_value_sigABEC.insertText(var_core_value_sig62B7);
    }
  }), var_core_value_sigABEC.getData();
}
function ie(var_core_value_sig2712) {
  var var_core_value_sig0B9E;
  if (!(var_core_value_sig2712 != null && var_core_value_sig2712.body)) return "";
  let var_core_value_sigC545 = n.RichTextBuilder["create"](n.Tools["deepClone"](var_core_value_sig2712));
  for (; (var_core_value_sig0B9E = var_core_value_sigC545.getData().body["customRanges"]) != null && var_core_value_sig0B9E.length;) {
    let var_core_value_sig5B67 = var_core_value_sigC545.getData().body["customRanges"][0];
    if (!var_core_value_sig5B67) break;
    var_core_value_sigC545.delete(var_core_value_sig5B67.startIndex, var_core_value_sig5B67.endIndex + 1 - var_core_value_sig5B67.startIndex), var_core_value_sigC545.insertText(var_core_value_sig5B67.startIndex, var_core_value_sig5B67.properties["value"]);
  }
  return var_core_value_sigC545.getData().body["dataStream"];
}
function ae(var_core_value_sig12A7, var_core_value_sig6F4E) {
  var_core_value_sig12A7.getExtensionsByOrder().forEach(var_core_value_sigA90D => {
    var var_core_value_sig7A3C;
    let var_core_value_sig0511 = (var_core_value_sig7A3C = var_core_value_sigA90D.copyForPrinting) == null ? undefined : var_core_value_sig7A3C.call(var_core_value_sigA90D);
    var_core_value_sig0511 && var_core_value_sig6F4E.register(var_core_value_sig0511);
  });
}
var H = class extends n.Disposable {
  get _watermarkConfig() {
    return this._renderConfig["watermark"];
  }
  get key() {
    return this._key;
  }
  get engine() {
    return this._engine;
  }
  get container() {
    return this._container;
  }
  get root() {
    return this._root;
  }
  get renderConfig() {
    return this._renderConfig;
  }
  set renderConfig(var_core_value_sig1F44) {
    this._renderConfig = var_core_value_sig1F44;
  }
  constructor(var_core_value_sigCB04, var_core_value_sig947E, var_core_value_sig4545, var_core_value_sigF39A = true, var_core_value_sigF79C = 1) {
    super(), this._accessor = var_core_value_sigCB04, this._config = var_core_value_sig947E, this._renderConfig = var_core_value_sig4545, this._isPreview = var_core_value_sigF39A, this._previewScale = var_core_value_sigF79C, y(this, "_engine", undefined), y(this, "_scene", undefined), y(this, "_key", undefined), y(this, "_unitId", undefined), y(this, "_subUnitId", undefined), y(this, "_viewMain", undefined), y(this, "_viewLeft", undefined), y(this, "_viewTop", undefined), y(this, "_viewLeftTop", undefined), y(this, "_viewRowBottom", null), y(this, "_viewColumnRight", null), y(this, "_container", document.createElement("div")), y(this, "_root", document.createElement("div")), y(this, "_skeleton", undefined), y(this, "_univerInstanceService", undefined), y(this, "_dirty", true), y(this, "_targetRender", undefined), y(this, "_effects", new n["DisposableCollection"]()), y(this, "_resourceCollector", new s["SheetPrintingResourceCollector"]()), y(this, "_spreadsheetObject", undefined), y(this, "_totalWidth", 0), y(this, "_totalHeight", 0);
    let {
      unitId: var_core_value_sig2E54,
      subUnitId: var_core_value_sig7658
    } = this._config;
    this._unitId = var_core_value_sig2E54, this._subUnitId = var_core_value_sig7658, this._key = var_core_value_sig2E54 + "_" + var_core_value_sig7658, this._univerInstanceService = this._accessor["get"](n.IUniverInstanceService);
    let var_core_value_sigDCF5 = this._accessor["get"](o.IRenderManagerService);
    this._targetRender = var_core_value_sigDCF5.getRenderUnitById(var_core_value_sig2E54);
    let var_core_value_sigC786 = this._targetRender["with"](s.SheetSkeletonManagerService).ensureSkeleton(var_core_value_sig7658);
    this._skeleton = var_core_value_sigC786, this._root["className"] = "__root", this._initRenderer();
  }
  dispose() {
    var var_core_value_sigC0D9;
    super.dispose(), this._effects["dispose"](), (var_core_value_sigC0D9 = this._container["parentElement"]) == null || var_core_value_sigC0D9.removeChild(this._container);
  }
  get paperSize() {
    let {
      w: var_core_value_sigF0511,
      h: var_core_value_sig5825
    } = this._config["pageSize"];
    return {
      w: var_core_value_sigF0511 * this._previewScale,
      h: var_core_value_sig5825 * this._previewScale
    };
  }
  get margin() {
    let var_core_value_sig4EB7 = this._config["margin"];
    return {
      top: var_core_value_sig4EB7.top * this._previewScale,
      bottom: var_core_value_sig4EB7.bottom * this._previewScale,
      left: var_core_value_sig4EB7.left * this._previewScale,
      right: var_core_value_sig4EB7.right * this._previewScale
    };
  }
  _initRenderer() {
    let var_core_value_sig73AF = this.paperSize,
      var_core_value_sig548A = this._config["scale"] * this._previewScale,
      var_core_value_sigE026 = this._isPreview ? Math.max(1, window.devicePixelRatio) : 1;
    this._engine = new o.Engine("", {
      elementWidth: var_core_value_sig73AF.w,
      elementHeight: var_core_value_sig73AF.h,
      dpr: var_core_value_sigE026,
      renderMode: o.CanvasRenderMode["Printing"]
    }), this._scene = new o.Scene(this._key, this._engine), this._scene["scale"](var_core_value_sig548A, var_core_value_sig548A), this._engine["mount"](this._container, this._isPreview), this._engine["getCanvas"]().getContext().setId(this._key + "_" + (0, n.generateRandomId)(4)), this._addComponent(), this._addViewport(), this.disposeWithMe({
      dispose: () => {
        this._engine["dispose"](), this._scene["dispose"](), this.clearMemory();
      }
    });
  }
  clearMemory() {
    this._skeleton["resetCache"]();
  }
  setPreviewScale(var_core_value_sig339E) {
    this._scene["scale"](this._config["scale"] * var_core_value_sig339E, this._config["scale"] * var_core_value_sig339E), this._previewScale = var_core_value_sig339E, this.markDirty(true);
  }
  updateConfig(var_core_value_sig7550) {
    this._config = var_core_value_sig7550, this.markDirty(true);
  }
  markDirty(var_core_value_sig2983) {
    this._dirty = var_core_value_sig2983;
  }
  _addComponent() {
    var var_core_value_sigE1B0;
    let var_core_value_sigD4FF = new o["Spreadsheet"]("__SpreadsheetPrintRender__", this._skeleton, false);
    var_core_value_sigD4FF.isPrinting = true;
    let var_core_value_sig1E5B = (var_core_value_sigE1B0 = this._targetRender) == null ? undefined : var_core_value_sigE1B0.mainComponent;
    if (var_core_value_sig1E5B && ae(var_core_value_sig1E5B, var_core_value_sigD4FF), this._scene["addObject"](var_core_value_sigD4FF), this._spreadsheetObject = var_core_value_sigD4FF, this._config["includeHeaderDimensions"]) {
      let var_core_value_sig1758 = new o.SpreadsheetRowHeader("__RowHeaderPrint__", this._skeleton),
        var_core_value_sig4805 = new o["SpreadsheetColumnHeader"]("__ColumnHeaderPrint__", this._skeleton);
      this._scene["addObjects"]([var_core_value_sig1758, var_core_value_sig4805], 1);
    }
    let var_core_value_sigB680 = this._accessor["get"](s.SheetPrintInterceptorService);
    var_core_value_sigB680.interceptor["fetchThroughInterceptors"](var_core_value_sigB680.interceptor["getInterceptPoints"]().PRINTING_COMPONENT_COLLECT)(undefined, {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      scene: this._scene,
      engine: this._engine,
      root: this._root,
      worksheet: this._skeleton["worksheet"],
      skeleton: this._skeleton,
      range: this._config["range"],
      offset: this._getTranslateOffset(),
      spreadsheet: this._spreadsheetObject,
      resourceCollector: this._resourceCollector
    });
  }
  _addViewport() {
    this._viewMain = new o.Viewport(o.SHEET_VIEWPORT_KEY["VIEW_MAIN"], this._scene, {
      explicitViewportWidthSet: true,
      explicitViewportHeightSet: true
    }), this._viewLeft = new o["Viewport"](o.SHEET_VIEWPORT_KEY["VIEW_MAIN_LEFT"], this._scene, {
      explicitViewportWidthSet: true,
      explicitViewportHeightSet: true
    }), this._viewTop = new o["Viewport"](o.SHEET_VIEWPORT_KEY["VIEW_MAIN_TOP"], this._scene, {
      explicitViewportWidthSet: true,
      explicitViewportHeightSet: true
    }), this._viewLeftTop = new o["Viewport"](o.SHEET_VIEWPORT_KEY["VIEW_MAIN_LEFT_TOP"], this._scene, {
      explicitViewportWidthSet: true,
      explicitViewportHeightSet: true
    }), this._config["includeHeaderDimensions"] && (this._viewRowBottom = new o["Viewport"](o.SHEET_VIEWPORT_KEY["VIEW_ROW_BOTTOM"], this._scene, {
      explicitViewportWidthSet: true,
      explicitViewportHeightSet: true
    }), this._viewColumnRight = new o["Viewport"](o.SHEET_VIEWPORT_KEY["VIEW_COLUMN_RIGHT"], this._scene, {
      explicitViewportWidthSet: true,
      explicitViewportHeightSet: true
    }));
  }
  _resizeViewport() {
    let {
        freeze: var_core_value_sig1F64,
        range: var_core_value_sigDD1C
      } = this._config,
      {
        xSplit: var_core_value_sig2C39,
        ySplit: var_core_value_sigB7D1,
        startColumn: var_core_value_sig64F0,
        startRow: var_core_value_sig85B1
      } = var_core_value_sig1F64,
      {
        rowHeaderWidth: var_core_value_sig3141,
        columnHeaderHeight: var_core_value_sig2162
      } = this._skeleton;
    this._scene["scale"](this._config["scale"] * this._previewScale, this._config["scale"] * this._previewScale);
    let var_core_value_sig2EAD = this._skeleton["getNoMergeCellWithCoordByIndex"](var_core_value_sig85B1 - var_core_value_sigB7D1, var_core_value_sig64F0 - var_core_value_sig2C39, false),
      var_core_value_sig6774 = this._skeleton["getNoMergeCellWithCoordByIndex"](var_core_value_sig85B1, var_core_value_sig64F0, false),
      var_core_value_sig340D = var_core_value_sig2C39 > 0 ? var_core_value_sig6774.startX - var_core_value_sig2EAD.startX : 0,
      var_core_value_sig82D4 = var_core_value_sigB7D1 > 0 ? var_core_value_sig6774.startY - var_core_value_sig2EAD.startY : 0,
      var_core_value_sigBDE4 = {
        startX: var_core_value_sig2C39 > 0 ? var_core_value_sig2EAD.startX : 0,
        endX: var_core_value_sig2C39 > 0 ? var_core_value_sig6774.startX : 0,
        startY: var_core_value_sigB7D1 > 0 ? var_core_value_sig2EAD.startY : 0,
        endY: var_core_value_sigB7D1 > 0 ? var_core_value_sig6774.startY : 0
      },
      var_core_value_sig7DF1 = this._skeleton["getNoMergeCellWithCoordByIndex"](var_core_value_sigDD1C.startRow, var_core_value_sigDD1C.startColumn, false),
      var_core_value_sigDC86 = this._scene["getPrecisionScale"](),
      var_core_value_sig0B0C = var_core_value_sigE67E => (0, o.fixLineWidthByScale)(var_core_value_sigE67E, var_core_value_sigDC86.scaleX),
      var_core_value_sigA39E = var_core_value_sig2902 => (0, o.fixLineWidthByScale)(var_core_value_sig2902, var_core_value_sigDC86.scaleY),
      var_core_value_sigBBEE = this._skeleton["getNoMergeCellWithCoordByIndex"](var_core_value_sigDD1C.endRow, var_core_value_sigDD1C.endColumn, false),
      var_core_value_sig011D = Math.max(0, var_core_value_sig0B0C(var_core_value_sigBBEE.endX) - Math.max(var_core_value_sig7DF1.startX, var_core_value_sigBDE4.endX)),
      var_core_value_sig6167 = Math.max(0, var_core_value_sigA39E(var_core_value_sigBBEE.endY) - var_core_value_sigA39E(Math.max(var_core_value_sig7DF1.startY, var_core_value_sigBDE4.endY))),
      var_core_value_sig65A1 = 1 / Math.max(var_core_value_sigDC86.scaleX, var_core_value_sigDC86.scaleY),
      var_core_value_sig7F19 = this._config["includeHeaderDimensions"] ? var_core_value_sig3141 : 0,
      var_core_value_sig7827 = this._config["includeHeaderDimensions"] ? var_core_value_sig2162 : 0,
      var_core_value_sig652C = var_core_value_sig7F19 + var_core_value_sig340D + var_core_value_sig011D + var_core_value_sig65A1,
      var_core_value_sig7E32 = var_core_value_sig7827 + var_core_value_sig82D4 + var_core_value_sig6167 + var_core_value_sig65A1;
    this._totalWidth = var_core_value_sig652C, this._totalHeight = var_core_value_sig7E32;
    let var_core_value_sig4C07 = {
        x: var_core_value_sig340D,
        y: var_core_value_sig82D4
      },
      var_core_value_sig79AB = var_core_value_sig65A1,
      var_core_value_sig8E74 = var_core_value_sig65A1,
      var_core_value_sig104C = {
        x: var_core_value_sig0B0C(var_core_value_sigBBEE.endX) - var_core_value_sig0B0C(var_core_value_sig011D) - var_core_value_sig0B0C(Math.max(var_core_value_sig7DF1.startX, var_core_value_sigBDE4.endX)),
        y: var_core_value_sigA39E(var_core_value_sigBBEE.endY) - var_core_value_sigA39E(var_core_value_sig6167) - var_core_value_sigA39E(Math.max(var_core_value_sig7DF1.startY, var_core_value_sigBDE4.endY))
      };
    if (var_core_value_sig2C39 > 0 && var_core_value_sigB7D1 > 0 ? (this._viewLeftTop["enable"](), this._viewLeftTop["resizeWhenFreezeChange"]({
      top: 0,
      left: 0,
      height: var_core_value_sigA39E(var_core_value_sig4C07.y),
      width: var_core_value_sig0B0C(var_core_value_sig4C07.x)
    }), this._viewLeftTop["updateScrollVal"]({
      viewportScrollX: var_core_value_sig0B0C(var_core_value_sigBDE4.startX) + var_core_value_sig0B0C(var_core_value_sig3141),
      viewportScrollY: var_core_value_sigA39E(var_core_value_sigBDE4.startY) + var_core_value_sigA39E(var_core_value_sig2162)
    })) : this._viewLeftTop["disable"](), var_core_value_sig2C39 > 0 ? (this._viewLeft["enable"](), this._viewLeft["resizeWhenFreezeChange"]({
      top: var_core_value_sig0B0C(var_core_value_sig4C07.y),
      left: 0,
      height: var_core_value_sigA39E(var_core_value_sig6167) + var_core_value_sig79AB + var_core_value_sig104C.y,
      width: var_core_value_sig0B0C(var_core_value_sig4C07.x)
    }), this._viewLeft["updateScrollVal"]({
      viewportScrollX: var_core_value_sig0B0C(var_core_value_sigBDE4.startX) + var_core_value_sig0B0C(var_core_value_sig3141),
      viewportScrollY: var_core_value_sigA39E(var_core_value_sig7DF1.startY) + var_core_value_sigA39E(var_core_value_sig2162) - var_core_value_sigA39E(var_core_value_sig4C07.y)
    })) : this._viewLeft["disable"](), var_core_value_sigB7D1 > 0 ? (this._viewTop["enable"](), this._viewTop["resizeWhenFreezeChange"]({
      top: 0,
      left: var_core_value_sig0B0C(var_core_value_sig4C07.x),
      height: var_core_value_sigA39E(var_core_value_sig4C07.y),
      width: var_core_value_sig0B0C(var_core_value_sig011D) + var_core_value_sig8E74 + var_core_value_sig104C.x
    }), this._viewTop["updateScrollVal"]({
      viewportScrollX: var_core_value_sig0B0C(var_core_value_sig7DF1.startX) + var_core_value_sig0B0C(var_core_value_sig3141) - var_core_value_sig0B0C(var_core_value_sig4C07.x),
      viewportScrollY: var_core_value_sigA39E(var_core_value_sigBDE4.startY) + var_core_value_sigA39E(var_core_value_sig2162)
    })) : this._viewTop["disable"](), this._config["includeHeaderDimensions"]) {
      let var_core_value_sig9989 = var_core_value_sig0B0C(var_core_value_sig3141),
        var_core_value_sig698E = var_core_value_sigA39E(var_core_value_sig2162),
        var_core_value_sig2809 = var_core_value_sig0B0C(var_core_value_sig011D) + var_core_value_sig8E74 + var_core_value_sig104C.x,
        var_core_value_sig2DAB = var_core_value_sigA39E(var_core_value_sig6167) + var_core_value_sig79AB + var_core_value_sig104C.y;
      this._viewMain["resizeWhenFreezeChange"]({
        top: var_core_value_sig698E,
        left: var_core_value_sig9989,
        height: var_core_value_sig2DAB,
        width: var_core_value_sig2809
      }), this._viewMain["updateScrollVal"]({
        viewportScrollX: var_core_value_sig0B0C(var_core_value_sig7DF1.startX),
        viewportScrollY: var_core_value_sigA39E(var_core_value_sig7DF1.startY)
      }), this._viewRowBottom && this._viewColumnRight && (this._viewColumnRight["enable"](), this._viewColumnRight["resizeWhenFreezeChange"]({
        top: 0,
        left: var_core_value_sig9989,
        height: var_core_value_sig698E,
        width: var_core_value_sig2809
      }), this._viewColumnRight["updateScrollVal"]({
        viewportScrollX: var_core_value_sig0B0C(var_core_value_sig7DF1.startX),
        viewportScrollY: 0
      }), this._viewRowBottom["enable"](), this._viewRowBottom["resizeWhenFreezeChange"]({
        top: var_core_value_sig698E,
        left: 0,
        height: var_core_value_sig2DAB,
        width: var_core_value_sig9989
      }), this._viewRowBottom["updateScrollVal"]({
        viewportScrollX: 0,
        viewportScrollY: var_core_value_sigA39E(var_core_value_sig7DF1.startY)
      }));
    } else this._viewMain["resizeWhenFreezeChange"]({
      top: var_core_value_sigA39E(var_core_value_sig4C07.y),
      left: var_core_value_sig0B0C(var_core_value_sig4C07.x),
      height: var_core_value_sigA39E(var_core_value_sig6167) + var_core_value_sig79AB + var_core_value_sig104C.y,
      width: var_core_value_sig0B0C(var_core_value_sig011D) + var_core_value_sig8E74 + var_core_value_sig104C.x
    }), this._viewMain["updateScrollVal"]({
      viewportScrollX: var_core_value_sig0B0C(var_core_value_sig7DF1.startX) + var_core_value_sig0B0C(var_core_value_sig3141) - var_core_value_sig0B0C(var_core_value_sig4C07.x),
      viewportScrollY: var_core_value_sigA39E(var_core_value_sig7DF1.startY) + var_core_value_sigA39E(var_core_value_sig2162) - var_core_value_sigA39E(var_core_value_sig4C07.y)
    });
  }
  _getTranslateOffset() {
    let var_core_value_sig841D = this.margin,
      {
        vAlign: var_core_value_sig90CB,
        hAlign: var_core_value_sigBDF5
      } = this._renderConfig,
      var_core_value_sigACC6 = Math.max(this._scene["scaleX"], this._scene["scaleY"]),
      var_core_value_sig1614;
    switch (var_core_value_sigBDF5) {
      case t.PrintAlign["Start"]:
        var_core_value_sig1614 = var_core_value_sig841D.left;
        break;
      case t.PrintAlign["End"]:
        var_core_value_sig1614 = this.paperSize["w"] - this._totalWidth * var_core_value_sigACC6 - var_core_value_sig841D.right;
        break;
      default:
        var_core_value_sig1614 = var_core_value_sig841D.left + (this.paperSize["w"] - this._totalWidth * var_core_value_sigACC6 - var_core_value_sig841D.left - var_core_value_sig841D.right) / 2;
        break;
    }
    let var_core_value_sig85C3;
    switch (var_core_value_sig90CB) {
      case t.PrintAlign["Start"]:
        var_core_value_sig85C3 = var_core_value_sig841D.top;
        break;
      case t.PrintAlign["End"]:
        var_core_value_sig85C3 = this.paperSize["h"] - this._totalHeight * var_core_value_sigACC6 - var_core_value_sig841D.bottom;
        break;
      default:
        var_core_value_sig85C3 = (this.paperSize["h"] - this._totalHeight * var_core_value_sigACC6 - var_core_value_sig841D.top - var_core_value_sig841D.bottom) / 2 + var_core_value_sig841D.top;
        break;
    }
    return {
      offsetX: Math.round(var_core_value_sig1614),
      offsetY: Math.round(var_core_value_sig85C3),
      scale: var_core_value_sigACC6
    };
  }
  prepare() {
    this._resizeViewport(), this._effects["dispose"](), this._effects = new n["DisposableCollection"]();
    let var_core_value_sigB996 = this._accessor["get"](s.SheetPrintInterceptorService),
      {
        offsetX: var_core_value_sig4BBA,
        offsetY: var_core_value_sig6201,
        scale: var_core_value_sig5151
      } = this._getTranslateOffset(),
      var_core_value_sigB542 = var_core_value_sig4BBA,
      var_core_value_sigBB6C = var_core_value_sig6201;
    this._root["style"].left = var_core_value_sigB542 + "px", this._root["style"].top = var_core_value_sigBB6C + "px";
    let var_core_value_sigE2BF = this._totalWidth * var_core_value_sig5151,
      var_core_value_sigB8C7 = this._totalHeight * var_core_value_sig5151;
    this._root["style"].width = var_core_value_sigE2BF + "px", this._root["style"].height = var_core_value_sigB8C7 + "px", this._root["style"].position = "absolute", this._root["style"].overflow = "hidden", var_core_value_sigB996.interceptor["fetchThroughInterceptors"](var_core_value_sigB996.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT)(this._effects, {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      scene: this._scene,
      engine: this._engine,
      root: this._root,
      worksheet: this._skeleton["worksheet"],
      skeleton: this._skeleton,
      range: this._config["range"],
      offset: this._getTranslateOffset(),
      resourceCollector: this._resourceCollector
    });
  }
  _renderMainScene() {
    this._dirty && this.prepare();
    let var_core_value_sigA56E = this._engine["getCanvas"]().getContext(),
      {
        gridlines: var_core_value_sig1998
      } = this._renderConfig,
      {
        offsetX: var_core_value_sigFF19,
        offsetY: var_core_value_sig43B8
      } = this._getTranslateOffset();
    this._spreadsheetObject["setForceDisableGridlines"](!var_core_value_sig1998), this._spreadsheetObject["makeForceDirty"](), this._scene["makeDirty"](), var_core_value_sigA56E.save(), var_core_value_sigA56E.translateWithPrecision(var_core_value_sigFF19, var_core_value_sig43B8), this._scene["render"](), var_core_value_sigA56E.restore();
  }
  _renderHeaderFooterByCustom(var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig9D15) {
    let {
        w: var_core_value_sigB785,
        h: var_core_value_sig130F
      } = this.paperSize,
      var_core_value_sigC0E3 = this._engine["getCanvas"]().getContext();
    var_core_value_sigC0E3.save(), var_core_value_sigC0E3.font = "13px " + o.DEFAULT_FONTFACE_PLANE;
    let var_core_value_sig52F7 = 19 * this._previewScale,
      var_core_value_sig866F = 20 * this._previewScale,
      var_core_value_sigDE3D = {
        workbook: var_core_value_sig66C0,
        worksheet: var_core_value_sig9D15,
        now: (0, n.dateKit)(),
        localeService: this._accessor["get"](n.LocaleService),
        page: this._config["page"],
        pageTotal: this._config["pageTotal"],
        sheetPageTotal: this._config["sheetPageTotal"],
        sheetPage: this._config["sheetPage"]
      };
    if (var_core_value_sigD98F.topLeft) {
      let var_core_value_sig877E = B(var_core_value_sigD98F.topLeft, var_core_value_sigDE3D);
      var_core_value_sigC0E3.fillText(var_core_value_sig877E, var_core_value_sig52F7, var_core_value_sig866F);
    }
    if (var_core_value_sigD98F.topCenter) {
      let var_core_value_sig20C8 = B(var_core_value_sigD98F.topCenter, var_core_value_sigDE3D),
        var_core_value_sigE9A7 = var_core_value_sigC0E3.measureText(var_core_value_sig20C8);
      var_core_value_sigC0E3.fillText(var_core_value_sig20C8, (var_core_value_sigB785 - var_core_value_sigE9A7.width) / 2, var_core_value_sig866F);
    }
    if (var_core_value_sigD98F.topRight) {
      let var_core_value_sigBECE = B(var_core_value_sigD98F.topRight, var_core_value_sigDE3D),
        var_core_value_sig1B22 = var_core_value_sigC0E3.measureText(var_core_value_sigBECE);
      var_core_value_sigC0E3.fillText(var_core_value_sigBECE, var_core_value_sigB785 - var_core_value_sig1B22.width - var_core_value_sig52F7, var_core_value_sig866F);
    }
    if (var_core_value_sigD98F.bottomLeft) {
      let var_core_value_sig7F72 = B(var_core_value_sigD98F.bottomLeft, var_core_value_sigDE3D);
      var_core_value_sigC0E3.fillText(var_core_value_sig7F72, var_core_value_sig52F7, var_core_value_sig130F - var_core_value_sig866F);
    }
    if (var_core_value_sigD98F.bottomCenter) {
      let var_core_value_sig7B2A = B(var_core_value_sigD98F.bottomCenter, var_core_value_sigDE3D),
        var_core_value_sig06CD = var_core_value_sigC0E3.measureText(var_core_value_sig7B2A);
      var_core_value_sigC0E3.fillText(var_core_value_sig7B2A, (var_core_value_sigB785 - var_core_value_sig06CD.width) / 2, var_core_value_sig130F - var_core_value_sig866F);
    }
    if (var_core_value_sigD98F.bottomRight) {
      let var_core_value_sigA5F1 = B(var_core_value_sigD98F.bottomRight, var_core_value_sigDE3D),
        var_core_value_sig97A2 = var_core_value_sigC0E3.measureText(var_core_value_sigA5F1);
      var_core_value_sigC0E3.fillText(var_core_value_sigA5F1, var_core_value_sigB785 - var_core_value_sig97A2.width - var_core_value_sig52F7, var_core_value_sig130F - var_core_value_sig866F);
    }
    var_core_value_sigC0E3.restore();
  }
  _renderHeaderFooter() {
    let var_core_value_sigF175 = this._univerInstanceService["getUnit"](this._config["unitId"], n.UniverInstanceType["UNIVER_SHEET"]),
      var_core_value_sig6A18 = var_core_value_sigF175 == null ? undefined : var_core_value_sigF175.getSheetBySheetId(this._config["subUnitId"]),
      {
        headerFooter: var_core_value_sig4E3D,
        isCustomHeaderFooter: var_core_value_sig49B0,
        headerFooterSetting: var_core_value_sig2547
      } = this._renderConfig,
      {
        w: var_core_value_sigBCA9,
        h: var_core_value_sig4CDF
      } = this.paperSize,
      var_core_value_sig3F79 = this._engine["getCanvas"]().getContext();
    if (!var_core_value_sigF175 || !var_core_value_sig6A18) return;
    if (var_core_value_sig49B0 && var_core_value_sig2547) {
      this._renderHeaderFooterByCustom(var_core_value_sig2547, var_core_value_sigF175, var_core_value_sig6A18);
      return;
    }
    var_core_value_sig3F79.save(), var_core_value_sig3F79.font = "13px\x20" + o.DEFAULT_FONTFACE_PLANE;
    let var_core_value_sig880E = 19 * this._previewScale,
      var_core_value_sigC9ED = 20 * this._previewScale;
    if (var_core_value_sig4E3D.includes("Date") || var_core_value_sig4E3D.includes("Time")) {
      let var_core_value_sig07E9 = new Date().toLocaleString();
      var_core_value_sig4E3D.includes("Date") ? var_core_value_sig4E3D.includes("Time") || (var_core_value_sig07E9 = new Date().toLocaleDateString()) : var_core_value_sig07E9 = new Date().toLocaleTimeString(), var_core_value_sig3F79.fillText(var_core_value_sig07E9, var_core_value_sig880E, var_core_value_sig4CDF - var_core_value_sigC9ED);
    }
    var_core_value_sig4E3D.forEach(var_core_value_sig4F59 => {
      switch (var_core_value_sig4F59) {
        case "WorkbookTitle":
          {
            let var_core_value_sig1BBD = var_core_value_sigF175.name,
              var_core_value_sigF704 = var_core_value_sig3F79.measureText(var_core_value_sig1BBD),
              var_core_value_sig2BCF = var_core_value_sigF704.fontBoundingBoxAscent + var_core_value_sigF704.fontBoundingBoxDescent;
            var_core_value_sig3F79.fillText(var_core_value_sig1BBD, var_core_value_sig880E, var_core_value_sigC9ED + var_core_value_sig2BCF);
            break;
          }
        case "WorksheetTitle":
          {
            let var_core_value_sig0D69 = var_core_value_sig6A18.getName(),
              var_core_value_sig480E = var_core_value_sig3F79.measureText(var_core_value_sig0D69),
              var_core_value_sig26DB = var_core_value_sig480E.fontBoundingBoxAscent + var_core_value_sig480E.fontBoundingBoxDescent;
            var_core_value_sig3F79.fillText(var_core_value_sig0D69, var_core_value_sigBCA9 - (var_core_value_sig480E.width + var_core_value_sig880E), var_core_value_sigC9ED + var_core_value_sig26DB);
            break;
          }
        case "PageSize":
          {
            let var_core_value_sigF0F9 = "" + this._config["page"],
              var_core_value_sig1A0F = var_core_value_sig3F79.measureText(var_core_value_sigF0F9);
            var_core_value_sig3F79.fillText(var_core_value_sigF0F9, var_core_value_sigBCA9 - (var_core_value_sig1A0F.width + var_core_value_sig880E), var_core_value_sig4CDF - var_core_value_sigC9ED);
            break;
          }
        default:
          break;
      }
    }), var_core_value_sig3F79.restore();
  }
  _renderLimitWaterMark() {
    let var_core_value_sigB57B = this._accessor["get"](n.LocaleService),
      var_core_value_sig780B = this._engine["getCanvas"]().getContext();
    var_core_value_sig780B.save();
    let var_core_value_sig7D1B = 20 * this._previewScale;
    var_core_value_sig780B.fillStyle = "rgba(0,0,0,0.3)", var_core_value_sig780B.font = "12px " + o.DEFAULT_FONTFACE_PLANE;
    let var_core_value_sig7BE0 = var_core_value_sig780B.measureText(var_core_value_sigB57B.t("sheets-print.limit.waterMark")),
      var_core_value_sig7D40 = (this.paperSize["w"] - var_core_value_sig7BE0.width) / 2,
      var_core_value_sig6C7E = var_core_value_sig7BE0.fontBoundingBoxAscent + var_core_value_sig7BE0.fontBoundingBoxDescent;
    var_core_value_sig780B.fillText(var_core_value_sigB57B.t("sheets-print.limit.waterMark"), var_core_value_sig7D40, var_core_value_sig7D1B + var_core_value_sig6C7E), var_core_value_sig780B.fillText(var_core_value_sigB57B.t("sheets-print.limit.waterMark"), var_core_value_sig7D40, this.paperSize["h"] - var_core_value_sig7D1B), var_core_value_sig780B.restore();
  }
  render() {
    this._engine["clearCanvas"](), this._renderMainScene(), this._renderHeaderFooter(), this._watermarkConfig && (0, o.renderWatermark)(this._engine["getCanvas"]().getContext(), this._watermarkConfig, this._watermarkConfig["image"], this._accessor["get"](n.UserManagerService).getCurrentUser());
  }
  renderOnReady() {
    let var_core_value_sig68BE = this.engine["onTransformChange$"].subscribeEvent(() => {
      this.render();
    });
    this.disposeWithMe(var_core_value_sig68BE), this.waitForReady().then(() => this.render());
  }
  waitForReady(var_core_value_sig04C6) {
    return this._resourceCollector["wait"](var_core_value_sig04C6);
  }
  getImage() {
    return this._engine["getCanvas"]().toDataURL("image/png", 1);
  }
};
function oe(var_core_value_sigA021) {
  let var_core_value_sig49D9 = var_core_value_sigA021.reduce((var_core_value_sigCA05, var_core_value_sig2F2B) => var_core_value_sigCA05 + var_core_value_sig2F2B.pages["length"], 0),
    var_core_value_sig320C = new Map(),
    var_core_value_sigE7F0 = new Map();
  var_core_value_sigA021.forEach(var_core_value_sig70AF => {
    let var_core_value_sigD04E = var_core_value_sig70AF.pages["length"],
      var_core_value_sigB99B = var_core_value_sigE7F0.get(var_core_value_sig70AF.subUnitId) ?? 0;
    var_core_value_sigE7F0.set(var_core_value_sig70AF.subUnitId, var_core_value_sigD04E + var_core_value_sigB99B);
  });
  let var_core_value_sigE837 = 0;
  return var_core_value_sigA021.map(var_core_value_sig5A75 => {
    let var_core_value_sig7BAF = var_core_value_sig5A75.pages["length"],
      var_core_value_sig8F69 = var_core_value_sig320C.get(var_core_value_sig5A75.subUnitId) ?? 0,
      var_core_value_sig6884 = var_core_value_sig5A75.pages["map"]((var_core_value_sigF564, var_core_value_sig8CFA) => (var_core_value_sigE837++, {
        ...var_core_value_sig5A75,
        range: var_core_value_sigF564,
        page: var_core_value_sigE837,
        pageTotal: var_core_value_sig49D9,
        sheetPageTotal: var_core_value_sigE7F0.get(var_core_value_sig5A75.subUnitId),
        sheetPage: var_core_value_sig8CFA + 1 + var_core_value_sig8F69
      }));
    return var_core_value_sig320C.has(var_core_value_sig5A75.subUnitId) ? var_core_value_sig320C.set(var_core_value_sig5A75.subUnitId, var_core_value_sig320C.get(var_core_value_sig5A75.subUnitId) + var_core_value_sig7BAF) : var_core_value_sig320C.set(var_core_value_sig5A75.subUnitId, var_core_value_sig7BAF), var_core_value_sig6884;
  }).flat();
}
let se = 0,
  U = class {
    constructor(var_core_value_sig066E, var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sigC56D, var_core_value_sig3A17, var_core_value_sig938F, var_core_value_sigD948) {
      this._injector = var_core_value_sig066E, this._printDialogService = var_core_value_sig9B0D, this._sheetPrintManagerService = var_core_value_sig3D2C, this._renderManagerService = var_core_value_sigC56D, this._messageService = var_core_value_sig3A17, this._configService = var_core_value_sig938F, this._printPreparationService = var_core_value_sigD948;
    }
    async print(var_core_value_sigBE5E, var_core_value_sig0281) {
      await Promise.all(Array.from(new Set(var_core_value_sigBE5E.map(var_core_value_sig2E11 => var_core_value_sig2E11.unitId)), var_core_value_sig5B69 => this._printPreparationService["prepare"]({
        unitId: var_core_value_sig5B69,
        unitType: n.UniverInstanceType["UNIVER_SHEET"],
        dpr: 1
      })));
      let var_core_value_sigED71 = oe(var_core_value_sigBE5E),
        {
          ls: var_core_value_sig281C,
          pbk: var_core_value_sig3C92
        } = this._configService["getConfig"](e.LS_CONFIG_KEY) ?? {},
        var_core_value_sigB16B = (0, e.isLocalCheck)() ? 1 / 0 : N(3, var_core_value_sig281C, var_core_value_sig3C92).page;
      var_core_value_sigED71 = var_core_value_sigED71.slice(0, var_core_value_sigB16B);
      let var_core_value_sig585D = document.createElement("div");
      var_core_value_sig585D.className = t.PRINT_CONTAINER_CLASS;
      let var_core_value_sigE722 = var_core_value_sigED71.map(var_core_value_sigB098 => {
        let var_core_value_sigCE71 = new H(this._injector, var_core_value_sigB098, var_core_value_sig0281, false);
        return var_core_value_sigCE71.container["className"] = t.PRINT_CANVAS_CLASS, var_core_value_sigCE71;
      });
      var_core_value_sigE722.forEach(var_core_value_sig21D8 => {
        var_core_value_sig585D.appendChild(var_core_value_sig21D8.container), var_core_value_sig21D8.container["appendChild"](var_core_value_sig21D8.root), var_core_value_sig21D8.prepare(), var_core_value_sig21D8.markDirty(false);
      });
      let var_core_value_sig062A = this._sheetPrintManagerService["layoutConfig"],
        var_core_value_sig050A = n.PAGE_SIZE[var_core_value_sig062A.paperSize],
        var_core_value_sig8B32 = (0, t.createPrintStyle)(var_core_value_sig050A.width, var_core_value_sig050A.height, var_core_value_sig062A.direction);
      return document.body["appendChild"](var_core_value_sig8B32), document.body["appendChild"](var_core_value_sig585D), await Promise.all(var_core_value_sigE722.map(var_core_value_sig2B65 => var_core_value_sig2B65.waitForReady())), new Promise(var_core_value_sigD7EA => {
        window.onbeforeprint = () => {
          var_core_value_sigE722.forEach(var_core_value_sigFBA4 => {
            var_core_value_sigFBA4.render(), var_core_value_sigFBA4.clearMemory();
          });
        }, window.onafterprint = () => {
          var_core_value_sigE722.forEach(var_core_value_sig4383 => {
            var_core_value_sig4383.dispose();
          }), document.body["removeChild"](var_core_value_sig585D), document.body["removeChild"](var_core_value_sig8B32), this._printDialogService["close"](), this._sheetPrintManagerService["reset"](), this._messageService["removeAll"](), var_core_value_sigE722 = [], var_core_value_sigD7EA(true);
        }, window.print();
      });
    }
    getRangeImage(var_core_value_sig870F, var_core_value_sigB683, var_core_value_sig26EC, var_core_value_sigEEDB) {
      if (!P(this._injector)) {
        let var_core_value_sigB33B = (Date.now() - se) / 1000;
        if (se = Date.now(), var_core_value_sigB33B <= 30) return false;
      }
      let var_core_value_sig36E7 = this._renderManagerService["getRenderUnitById"](var_core_value_sig870F);
      if (!var_core_value_sig36E7) return false;
      let var_core_value_sig6A78 = var_core_value_sig36E7.with(s.SheetSkeletonManagerService).ensureSkeleton(var_core_value_sigB683);
      if (!var_core_value_sig6A78) return false;
      let var_core_value_sigF7EF = var_core_value_sig6A78.columnWidthAccumulation[var_core_value_sig26EC.endColumn] - (var_core_value_sig6A78.columnWidthAccumulation[var_core_value_sig26EC.startColumn - 1] || 0),
        var_core_value_sig27F9 = var_core_value_sig6A78.rowHeightAccumulation[var_core_value_sig26EC.endRow] - (var_core_value_sig6A78.rowHeightAccumulation[var_core_value_sig26EC.startRow - 1] || 0),
        var_core_value_sig393E = var_core_value_sig6A78.columnHeaderHeight,
        var_core_value_sigB609 = var_core_value_sig6A78.rowHeaderWidth,
        var_core_value_sig390D = 1.5,
        var_core_value_sigC928 = new H(this._injector, {
          unitId: var_core_value_sig870F,
          subUnitId: var_core_value_sigB683,
          range: var_core_value_sig26EC,
          freeze: j,
          scale: var_core_value_sig390D,
          page: 1,
          pageSize: var_core_value_sigEEDB ? {
            w: (var_core_value_sigF7EF + var_core_value_sigB609) * var_core_value_sig390D + 1,
            h: (var_core_value_sig27F9 + var_core_value_sig393E) * var_core_value_sig390D + 1
          } : {
            w: var_core_value_sigF7EF * var_core_value_sig390D + 1,
            h: var_core_value_sig27F9 * var_core_value_sig390D + 1
          },
          margin: t.PaperMarginMap[t.PrintPaperMargin["None"]],
          pageTotal: 1,
          sheetPageTotal: 1,
          sheetPage: 1,
          includeHeaderDimensions: var_core_value_sigEEDB ?? false
        }, {
          gridlines: true,
          hAlign: t.PrintAlign["Middle"],
          vAlign: t.PrintAlign["Middle"],
          headerFooter: [],
          headerFooterSetting: E,
          isCustomHeaderFooter: false
        }, false),
        var_core_value_sig39B7 = document.createElement("div");
      var_core_value_sig39B7.className = t.PRINT_CONTAINER_CLASS, var_core_value_sigC928.container["className"] = t.PRINT_CANVAS_CLASS, var_core_value_sig39B7.appendChild(var_core_value_sigC928.container), document.body["appendChild"](var_core_value_sig39B7), var_core_value_sigC928.prepare(), var_core_value_sigC928.render();
      let var_core_value_sig18E0 = var_core_value_sigC928.getImage();
      return var_core_value_sigC928.dispose(), document.body["removeChild"](var_core_value_sig39B7), var_core_value_sig18E0;
    }
  };
U = O([D(0, (0, n.Inject)(n.Injector)), D(1, b), D(2, k), D(3, o.IRenderManagerService), D(4, i.IMessageService), D(5, n.IConfigService), D(6, t.IPrintPreparationService)], U);
function ce(var_core_value_sig34F4, var_core_value_sigA45D) {
  let var_core_value_sig1BC7 = atob(var_core_value_sig34F4.split(",")[1]),
    var_core_value_sig4956 = new ArrayBuffer(var_core_value_sig1BC7.length),
    var_core_value_sigCC9E = new Uint8Array(var_core_value_sig4956);
  for (let var_core_value_sigE161 = 0; var_core_value_sigE161 < var_core_value_sig1BC7.length; var_core_value_sigE161++) var_core_value_sigCC9E[var_core_value_sigE161] = var_core_value_sig1BC7.charCodeAt(var_core_value_sigE161);
  return new Blob([var_core_value_sig4956], {
    type: var_core_value_sigA45D
  });
}
const W = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.screenshot",
    async handler(var_core_value_sig444C) {
      var var_core_value_sigE42E;
      let var_core_value_sigF039 = var_core_value_sig444C.get(r.SheetsSelectionsService),
        var_core_value_sigA321 = (var_core_value_sigE42E = var_core_value_sigF039.getCurrentSelections()) == null ? undefined : var_core_value_sigE42E[0],
        var_core_value_sigBF4C = var_core_value_sig444C.get(U),
        var_core_value_sig3457 = var_core_value_sigF039.getCurrentLastSelection(),
        var_core_value_sig4A08 = var_core_value_sig444C.get(i.IMessageService),
        var_core_value_sig1BC4 = var_core_value_sig444C.get(n.IUniverInstanceService),
        var_core_value_sig9EAB = var_core_value_sig444C.get(n.LocaleService);
      if (!var_core_value_sigA321 || !var_core_value_sig3457) return false;
      let var_core_value_sigA5C3 = (0, r.getSheetCommandTarget)(var_core_value_sig1BC4);
      if (!var_core_value_sigA5C3) return false;
      let {
          unitId: var_core_value_sig3A1E,
          subUnitId: var_core_value_sigDC92
        } = var_core_value_sigA5C3,
        var_core_value_sig3515 = var_core_value_sigBF4C.getRangeImage(var_core_value_sig3A1E, var_core_value_sigDC92, var_core_value_sigA321.range);
      if (!var_core_value_sig3515) return false;
      try {
        return await navigator.clipboard["write"]([new ClipboardItem({
          "image/png": ce(var_core_value_sig3515, "image/png")
        })]), var_core_value_sig4A08.show({
          type: c.MessageType["Success"],
          content: var_core_value_sig9EAB.t("sheets-print.screenshot.success")
        }), true;
      } catch {
        return var_core_value_sig4A08.show({
          type: c.MessageType["Error"],
          content: var_core_value_sig9EAB.t("sheets-print.screenshot.fail")
        }), false;
      }
    }
  },
  G = (0, n.createIdentifier)("univer-pro.print-grid.service");
var le = class extends n.Disposable {
  constructor(...var_core_value_sigBDEE) {
    super(...var_core_value_sigBDEE), y(this, "_visible$", new a["BehaviorSubject"](false)), y(this, "visible$", this._visible$);
  }
  get visible() {
    return this._visible$["value"];
  }
  show() {
    this._visible$["next"](true);
  }
  hide() {
    this._visible$["next"](false);
  }
  dispose() {
    super.dispose(), this._visible$["complete"]();
  }
};
const ue = "PRINT_GRID_SIDEBAR_COMPONENT",
  K = {
    id: "sheet.operation.open-print-grid-sidebar",
    type: n.CommandType["OPERATION"],
    handler: var_core_value_sigC2A0 => {
      let var_core_value_sig7C65 = var_core_value_sigC2A0.get(i.ISidebarService),
        var_core_value_sig7F05 = var_core_value_sigC2A0.get(G),
        var_core_value_sig41F3 = var_core_value_sigC2A0.get(k),
        var_core_value_sigF455 = var_core_value_sigC2A0.get(n.LocaleService);
      return var_core_value_sig41F3.reLayout(), var_core_value_sig7F05.show(), var_core_value_sig7C65.open({
        header: {
          title: var_core_value_sigF455.t("sheets-print.grid.title")
        },
        children: {
          label: ue
        },
        onClose: () => {},
        width: 312
      }), true;
    }
  },
  q = {
    id: "sheet.operation.close-print-grid-sidebar",
    type: n.CommandType["OPERATION"],
    handler: var_core_value_sig6E78 => {
      let var_core_value_sigB3EE = var_core_value_sig6E78.get(i.ISidebarService);
      return var_core_value_sig6E78.get(G).hide(), var_core_value_sigB3EE.close(), true;
    }
  },
  de = "sheet.menu.print";
function fe(var_core_value_sigC50A) {
  return {
    id: de,
    type: i.MenuItemType["SUBITEMS"],
    icon: "PrintIcon",
    tooltip: "sheets-print.menu",
    hidden$: (0, i.getMenuHiddenObservable)(var_core_value_sigC50A, n.UniverInstanceType["UNIVER_SHEET"]),
    disabled$: (0, s.getCurrentRangeDisable$)(var_core_value_sigC50A, {
      workbookTypes: [r.WorkbookPrintPermission]
    })
  };
}
function pe() {
  return {
    id: F.id,
    type: i.MenuItemType["BUTTON"],
    title: "sheets-print.menu",
    icon: "PrintIcon"
  };
}
function me(var_core_value_sig11D0) {
  return {
    id: W.id,
    type: i.MenuItemType["BUTTON"],
    title: "sheets-print.screenshot.title",
    icon: "DownloadImageIcon",
    tooltip: "sheets-print.screenshot.title",
    hidden$: (0, i.getMenuHiddenObservable)(var_core_value_sig11D0, n.UniverInstanceType["UNIVER_SHEET"]),
    disabled$: (0, s.getCurrentRangeDisable$)(var_core_value_sig11D0, {
      workbookTypes: [r.WorkbookPrintPermission, r.WorkbookCopyPermission, r.WorkbookViewPermission],
      worksheetTypes: [r.WorksheetCopyPermission, r.WorksheetViewPermission],
      rangeTypes: [r.RangeProtectionPermissionViewPoint]
    })
  };
}
function he() {
  return {
    id: K.id,
    type: i.MenuItemType["BUTTON"],
    title: "sheets-print.grid.title",
    icon: "DocSettingIcon"
  };
}
const ge = {
  [i.RibbonStartGroup["OTHERS"]]: {
    [de]: {
      order: 0.01,
      gridLayout: {
        row: 1,
        column: 3,
        rowSpan: 2,
        columnSpan: 2,
        showLabel: true
      },
      menuItemFactory: fe,
      [F.id]: {
        order: 0,
        menuItemFactory: pe
      },
      [K.id]: {
        order: 1,
        menuItemFactory: he
      }
    }
  },
  [i.ContextMenuPosition["MAIN_AREA"]]: {
    [i.ContextMenuGroup["OTHERS"]]: {
      [W.id]: {
        order: 2.1,
        menuItemFactory: me
      }
    }
  }
};
var _e = "@univerjs-pro/sheets-print",
  ve = "1.0.0-insiders.20260907-70fc579";
const ye = {},
  be = (0, u.memo)(function () {
    var var_core_value_sigB8ED, var_core_value_sig8EAE, var_core_value_sig1CDD, var_core_value_sig0DB1;
    let var_core_value_sig68A2 = (0, i.useDependency)(k),
      var_core_value_sigCC17 = (0, i.useDependency)(n.ICommandService),
      var_core_value_sig32AE = (0, i.useObservable)(var_core_value_sig68A2.layoutConfig$, var_core_value_sig68A2.layoutConfig),
      var_core_value_sigC753 = (0, i.useDependency)(n.LocaleService),
      var_core_value_sigFFD1 = (0, i.useDependency)(n.IUniverInstanceService).getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sigFFD1) return console.error("No workbook found"), null;
    let var_core_value_sig81AE = var_core_value_sigFFD1.getActiveSheet();
    if (!var_core_value_sig81AE) return console.error("No active sheet found"), null;
    let var_core_value_sigF79F = (var_core_value_sig1F40, var_core_value_sig3FC7) => {
        let var_core_value_sig1E1B = Math.max(0, var_core_value_sig3FC7 || 0),
          var_core_value_sig3B10 = var_core_value_sig32AE.marginCustom || {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          };
        var_core_value_sig68A2.updateLayoutConfig({
          marginCustom: {
            ...var_core_value_sig3B10,
            [var_core_value_sig1F40]: var_core_value_sig1E1B
          }
        });
      },
      var_core_value_sig0E54 = var_core_value_sig81AE.getFreeze(),
      var_core_value_sig3B17 = var_core_value_sig0E54.xSplit <= 0,
      var_core_value_sig6C4A = var_core_value_sig0E54.ySplit <= 0,
      var_core_value_sig73D9 = () => {
        var_core_value_sigCC17.executeCommand(q.id);
      };
    return (0, d.jsxs)("div", {
      className: (0, c.clsx)("univer-flex\x20univer-h-full\x20univer-flex-col", c.scrollbarClassName),
      children: [(0, d.jsxs)("div", {
        className: "univer-flex-1 univer-overflow-y-auto",
        children: [(0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigC753.t("sheets-print.area.title"),
          children: (0, d.jsx)(c.Select, {
            className: "univer-w-full",
            value: "" + var_core_value_sig32AE.area,
            onChange: var_core_value_sig89E6 => {
              var_core_value_sig68A2.updateLayoutConfig({
                area: var_core_value_sig89E6
              });
            },
            options: [{
              label: var_core_value_sigC753.t("sheets-print.area.currentSheet"),
              value: "CurrentSheet"
            }, {
              label: var_core_value_sigC753.t("sheets-print.area.currentSelection"),
              value: "CurrentSelection"
            }]
          })
        }), (0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigC753.t("sheets-print.size.title"),
          children: (0, d.jsx)(c.Select, {
            className: "univer-w-full",
            value: var_core_value_sig32AE.paperSize,
            options: [{
              label: var_core_value_sigC753.t("sheets-print.size.letter"),
              value: n.PaperType["Letter"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.tabloid"),
              value: n.PaperType["Tabloid"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.legal"),
              value: n.PaperType["Legal"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.statement"),
              value: n.PaperType["Statement"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.executive"),
              value: n.PaperType["Executive"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.folio"),
              value: n.PaperType["Folio"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.a3"),
              value: n.PaperType["A3"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.a4"),
              value: n.PaperType["A4"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.a5"),
              value: n.PaperType["A5"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.b4"),
              value: n.PaperType["B4"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.size.b5"),
              value: n.PaperType["B5"]
            }],
            onChange: var_core_value_sig4743 => {
              var_core_value_sig68A2.updateLayoutConfig({
                paperSize: var_core_value_sig4743
              });
            }
          })
        }), (0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigC753.t("sheets-print.margin.title"),
          children: (0, d.jsx)(c.Select, {
            className: "univer-w-full",
            value: var_core_value_sig32AE.margin,
            options: [{
              label: var_core_value_sigC753.t("sheets-print.margin.normal"),
              value: t.PrintPaperMargin["Normal"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.margin.narrow"),
              value: t.PrintPaperMargin["Narrow"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.margin.wide"),
              value: t.PrintPaperMargin["Wide"]
            }, {
              label: var_core_value_sigC753.t("sheets-print.margin.custom"),
              value: t.PrintPaperMargin["Custom"]
            }],
            onChange: var_core_value_sigEB6A => {
              let var_core_value_sig3D46 = t.PaperMarginMap[var_core_value_sig32AE.margin];
              var_core_value_sig68A2.updateLayoutConfig({
                margin: var_core_value_sigEB6A,
                marginCustom: var_core_value_sigEB6A === t.PrintPaperMargin["Custom"] ? var_core_value_sig3D46 : t.PaperMarginMap[var_core_value_sigEB6A]
              });
            }
          })
        }), var_core_value_sig32AE.margin === t.PrintPaperMargin["Custom"] && (0, d.jsx)(c.FormLayout, {
          children: (0, d.jsxs)("div", {
            className: "univer-grid univer-grid-cols-2 univer-gap-2",
            children: [(0, d.jsxs)("div", {
              children: [(0, d.jsx)("label", {
                className: "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                children: var_core_value_sigC753.t("sheets-print.margin.top")
              }), (0, d.jsx)(c.Input, {
                type: "number",
                value: String(((var_core_value_sigB8ED = var_core_value_sig32AE.marginCustom) == null ? undefined : var_core_value_sigB8ED.top) || 0),
                onChange: var_core_value_sigCC93 => var_core_value_sigF79F("top", Number(var_core_value_sigCC93))
              })]
            }), (0, d.jsxs)("div", {
              children: [(0, d.jsx)("label", {
                className: "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                children: var_core_value_sigC753.t("sheets-print.margin.bottom")
              }), (0, d.jsx)(c.Input, {
                type: "number",
                value: String(((var_core_value_sig8EAE = var_core_value_sig32AE.marginCustom) == null ? undefined : var_core_value_sig8EAE.bottom) || 0),
                onChange: var_core_value_sig5964 => var_core_value_sigF79F("bottom", Number(var_core_value_sig5964))
              })]
            }), (0, d.jsxs)("div", {
              children: [(0, d.jsx)("label", {
                className: "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                children: var_core_value_sigC753.t("sheets-print.margin.left")
              }), (0, d.jsx)(c.Input, {
                type: "number",
                value: String(((var_core_value_sig1CDD = var_core_value_sig32AE.marginCustom) == null ? undefined : var_core_value_sig1CDD.left) || 0),
                onChange: var_core_value_sig808B => var_core_value_sigF79F("left", Number(var_core_value_sig808B))
              })]
            }), (0, d.jsxs)("div", {
              children: [(0, d.jsx)("label", {
                className: "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                children: var_core_value_sigC753.t("sheets-print.margin.right")
              }), (0, d.jsx)(c.Input, {
                type: "number",
                value: String(((var_core_value_sig0DB1 = var_core_value_sig32AE.marginCustom) == null ? undefined : var_core_value_sig0DB1.right) || 0),
                onChange: var_core_value_sig2A26 => var_core_value_sigF79F("right", Number(var_core_value_sig2A26))
              })]
            })]
          })
        }), (0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigC753.t("sheets-print.orientation.title"),
          children: (0, d.jsxs)(c.RadioGroup, {
            value: var_core_value_sig32AE.direction,
            onChange: var_core_value_sig1179 => {
              var_core_value_sig68A2.updateLayoutConfig({
                direction: var_core_value_sig1179
              });
            },
            children: [(0, d.jsx)(c.Radio, {
              value: t.PrintDirection["Portrait"],
              children: var_core_value_sigC753.t("sheets-print.orientation.portrait")
            }), (0, d.jsx)(c.Radio, {
              value: t.PrintDirection["Landscape"],
              children: var_core_value_sigC753.t("sheets-print.orientation.landscape")
            })]
          })
        }), (0, d.jsx)(c.FormLayout, {
          collapsable: true,
          label: var_core_value_sigC753.t("sheets-print.freeze.title"),
          children: (0, d.jsxs)(c.CheckboxGroup, {
            direction: "vertical",
            value: var_core_value_sig32AE.freeze,
            onChange: var_core_value_sigEA92 => {
              var_core_value_sig68A2.updateLayoutConfig({
                freeze: var_core_value_sigEA92
              });
            },
            children: [(0, d.jsx)(c.Checkbox, {
              disabled: var_core_value_sig6C4A,
              value: "Row",
              children: var_core_value_sigC753.t("sheets-print.freeze.row")
            }), (0, d.jsx)(c.Checkbox, {
              disabled: var_core_value_sig3B17,
              value: "Column",
              children: var_core_value_sigC753.t("sheets-print.freeze.column")
            })]
          })
        }), (0, d.jsxs)(c.FormLayout, {
          collapsable: true,
          defaultCollapsed: true,
          label: var_core_value_sigC753.t("sheets-print.area.limit"),
          children: [(0, d.jsx)(c.FormLayout, {
            className: "univer-mb-2",
            label: var_core_value_sigC753.t("sheets-print.area.maxRowsEachPage"),
            children: (0, d.jsx)(c.Input, {
              value: var_core_value_sig32AE.maxRowsEachPage === 1 / 0 ? "" : "" + var_core_value_sig32AE.maxRowsEachPage,
              onChange: var_core_value_sig8FD9 => {
                var_core_value_sig68A2.updateLayoutConfig({
                  maxRowsEachPage: !var_core_value_sig8FD9 || Number.isNaN(Number(var_core_value_sig8FD9)) ? 1 / 0 : Number(var_core_value_sig8FD9)
                });
              }
            })
          }), (0, d.jsx)(c.FormLayout, {
            label: var_core_value_sigC753.t("sheets-print.area.maxColumnsEachPage"),
            children: (0, d.jsx)(c.Input, {
              value: var_core_value_sig32AE.maxColumnsEachPage === 1 / 0 ? "" : "" + var_core_value_sig32AE.maxColumnsEachPage,
              onChange: var_core_value_sig1AE5 => {
                var_core_value_sig68A2.updateLayoutConfig({
                  maxColumnsEachPage: !var_core_value_sig1AE5 || Number.isNaN(Number(var_core_value_sig1AE5)) ? 1 / 0 : Number(var_core_value_sig1AE5)
                });
              }
            })
          })]
        })]
      }), (0, d.jsxs)("div", {
        className: "univer-space-y-2 univer-border-t univer-pb-4",
        children: [(0, d.jsx)(c.Button, {
          type: "submit",
          variant: "primary",
          className: "univer-w-full",
          onClick: () => {
            var_core_value_sigCC17.executeCommand(F.id), var_core_value_sig73D9();
          },
          children: var_core_value_sigC753.t("sheets-print.menu")
        }), (0, d.jsx)(c.Button, {
          type: "button",
          className: "univer-w-full",
          onClick: var_core_value_sig73D9,
          children: var_core_value_sigC753.t("sheets-print.grid.closeAndHide")
        })]
      })]
    });
  });
let J = class extends n.Disposable {
  constructor(var_core_value_sig7100, var_core_value_sigA19A) {
    super(), this._componentManager = var_core_value_sig7100, this._iconManager = var_core_value_sigA19A, this._registerIcons(), this._registerComponents();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      DocSettingIcon: l.DocSettingIcon,
      PrintIcon: l.PrintIcon
    }));
  }
  _registerComponents() {
    this._componentManager["register"](ue, be);
  }
};
J = O([D(0, (0, n.Inject)(i.ComponentManager)), D(1, (0, n.Inject)(i.IconManager))], J);
const xe = [6, 4];
var Se = class extends o.SheetExtension {
  constructor(var_core_value_sigD3F5, var_core_value_sig3082) {
    super(), this._printGridService = var_core_value_sigD3F5, this._printManagerService = var_core_value_sig3082, y(this, "uKey", "PrintGridExtension"), y(this, "Z_INDEX", 61);
  }
  draw(var_core_value_sigF5D1, var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7) {
    if (var_core_value_sigF5D1.__mode === "printing" || !this._printGridService["visible"]) return;
    let {
      worksheet: var_core_value_sig90C0
    } = var_core_value_sig481B;
    if (!var_core_value_sig90C0) return;
    let var_core_value_sigF1B2 = this._printManagerService["layoutInfos"],
      var_core_value_sigC2BB = var_core_value_sig90C0.getUnitId(),
      var_core_value_sigD9DB = var_core_value_sig90C0.getSheetId(),
      var_core_value_sigA363 = var_core_value_sigF1B2.find(var_core_value_sig24B9 => var_core_value_sig24B9.unitId === var_core_value_sigC2BB && var_core_value_sig24B9.subUnitId === var_core_value_sigD9DB);
    var_core_value_sigA363 && this._drawPrintGrid(var_core_value_sigF5D1, var_core_value_sig481B, var_core_value_sigA363);
  }
  _drawPrintGrid(var_core_value_sigFBA5, var_core_value_sigAC47, var_core_value_sigA06F) {
    let {
        pages: var_core_value_sig770E
      } = var_core_value_sigA06F,
      {
        rowHeightAccumulation: var_core_value_sig4654,
        columnWidthAccumulation: var_core_value_sigB26B
      } = var_core_value_sigAC47;
    var_core_value_sigFBA5.save(), var_core_value_sigFBA5.strokeStyle = "#1890ff", var_core_value_sigFBA5.lineWidth = 2, var_core_value_sigFBA5.setLineDash(xe);
    let var_core_value_sig019B = new Set(),
      var_core_value_sigC6BC = new Set();
    var_core_value_sig770E.forEach(var_core_value_sigE627 => {
      let {
          startRow: var_core_value_sigEF3E,
          endRow: var_core_value_sig273D,
          startColumn: var_core_value_sig9A0D,
          endColumn: var_core_value_sigA319
        } = var_core_value_sigE627,
        var_core_value_sig2D58 = var_core_value_sigEF3E === 0 ? 0 : var_core_value_sig4654[var_core_value_sigEF3E - 1],
        var_core_value_sig223F = var_core_value_sig4654[var_core_value_sig273D],
        var_core_value_sigD749 = var_core_value_sig9A0D === 0 ? 0 : var_core_value_sigB26B[var_core_value_sig9A0D - 1],
        var_core_value_sigCFFA = var_core_value_sigB26B[var_core_value_sigA319];
      var_core_value_sig019B.add(var_core_value_sig2D58), var_core_value_sig019B.add(var_core_value_sig223F), var_core_value_sigC6BC.add(var_core_value_sigD749), var_core_value_sigC6BC.add(var_core_value_sigCFFA);
    });
    let var_core_value_sig8EC2 = Math.min(...Array.from(var_core_value_sigC6BC)),
      var_core_value_sigA8C3 = Math.max(...Array.from(var_core_value_sigC6BC)),
      var_core_value_sig5276 = Math.min(...Array.from(var_core_value_sig019B)),
      var_core_value_sig031B = Math.max(...Array.from(var_core_value_sig019B));
    var_core_value_sig019B.forEach(var_core_value_sig58C1 => {
      var_core_value_sigFBA5.beginPath(), var_core_value_sigFBA5.moveTo(var_core_value_sig8EC2, var_core_value_sig58C1), var_core_value_sigFBA5.lineTo(var_core_value_sigA8C3, var_core_value_sig58C1), var_core_value_sigFBA5.stroke();
    }), var_core_value_sigC6BC.forEach(var_core_value_sig5090 => {
      var_core_value_sigFBA5.beginPath(), var_core_value_sigFBA5.moveTo(var_core_value_sig5090, var_core_value_sig5276), var_core_value_sigFBA5.lineTo(var_core_value_sig5090, var_core_value_sig031B), var_core_value_sigFBA5.stroke();
    }), var_core_value_sigFBA5.restore();
  }
};
let Y = class extends n.Disposable {
  constructor(var_core_value_sig9DC0, var_core_value_sig95F0, var_core_value_sig9CCB) {
    super(), this._context = var_core_value_sig9DC0;
    let var_core_value_sigE718 = this._context["mainComponent"];
    this.disposeWithMe(var_core_value_sigE718.register(new Se(var_core_value_sig95F0, var_core_value_sig9CCB)));
  }
};
Y = O([D(1, G), D(2, k)], Y);
function Ce(var_core_value_sigEAF8) {
  let [var_core_value_sig0455, var_core_value_sig737C] = (0, u.useState)();
  return (0, u.useEffect)(() => {
    var_core_value_sigEAF8.then(var_core_value_sigC368 => {
      var_core_value_sig737C(() => var_core_value_sigC368);
    });
  }, []), var_core_value_sig0455;
}
const X = ({
    icon: var_core_value_sig5AF5,
    items: var_core_value_sig9DE4,
    active: var_core_value_sig77FA,
    onChange: var_core_value_sigA4A7,
    onHover: var_core_value_sigA4DF,
    popupDirection: var_core_value_sigCC9D = "top"
  }) => (0, d.jsxs)("div", {
    className: "univer-relative\x20univer-inline-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-gap-1\x20univer-rounded\x20univer-bg-gray-0\x20univer-px-2\x20univer-py-1\x20hover:univer-bg-gray-200\x20dark:!univer-bg-gray-900\x20hover:dark:!univer-bg-gray-700",
    onMouseEnter: () => var_core_value_sigA4DF == null ? undefined : var_core_value_sigA4DF(true),
    onMouseLeave: () => var_core_value_sigA4DF == null ? undefined : var_core_value_sigA4DF(false),
    children: [(0, d.jsx)("div", {
      className: "univer-flex univer-size-5 univer-items-center univer-justify-center univer-text-gray-900 dark:!univer-text-gray-0",
      children: var_core_value_sig5AF5
    }), (0, d.jsx)(l.MoreDownIcon, {
      className: "univer-size-3\x20univer-text-gray-900\x20univer-transition-transform\x20dark:!univer-text-gray-0"
    }), var_core_value_sig77FA && (0, d.jsx)("div", {
      style: {
        [var_core_value_sigCC9D]: "100%"
      },
      className: "univer-absolute univer-left-0 univer-z-[1000] univer-min-w-[200px] univer-px-0 univer-py-2",
      children: (0, d.jsx)("div", {
        className: "univer-solid univer-rounded-lg univer-border univer-border-gray-200 univer-bg-gray-0 univer-p-2 univer-shadow-lg dark:!univer-border-gray-700",
        children: var_core_value_sig9DE4.map(var_core_value_sigAEC8 => (0, d.jsxs)("div", {
          className: "univer-flex univer-cursor-pointer univer-flex-row univer-items-center univer-justify-between univer-rounded-md univer-px-2 univer-py-1.5 hover:univer-rounded hover:univer-bg-gray-300",
          onClick: () => {
            var_core_value_sigA4A7 == null || var_core_value_sigA4A7(var_core_value_sigAEC8.value), var_core_value_sigA4DF == null || var_core_value_sigA4DF(false);
          },
          children: [(0, d.jsx)("div", {
            className: "univer-text-base univer-text-gray-900 dark:!univer-text-gray-0",
            children: var_core_value_sigAEC8.label
          }), (0, d.jsx)("div", {
            className: "univer-text-sm univer-text-gray-600 dark:!univer-text-gray-200",
            children: var_core_value_sigAEC8.desc
          })]
        }, var_core_value_sigAEC8.value))
      })
    })]
  }),
  we = var_core_value_sig90F5 => {
    let {
        onSelect: var_core_value_sigD2BA,
        popupDirection: var_core_value_sigCD3A
      } = var_core_value_sig90F5,
      [var_core_value_sig519D, var_core_value_sigC7E7] = (0, u.useState)(),
      var_core_value_sig6E1C = (0, i.useDependency)(n.LocaleService),
      var_core_value_sigFABC = (0, i.useDependency)(n.IUniverInstanceService).getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"]),
      var_core_value_sig413D = var_core_value_sigFABC.getActiveSheet(),
      var_core_value_sig5BCE = (0, u.useMemo)(() => (0, n.dateKit)(), []),
      var_core_value_sig8EF0 = (0, u.useMemo)(() => [{
        value: "@Page",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.page"),
        desc: z("@Page", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@SheetPage",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.sheetPage"),
        desc: z("@SheetPage", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@TotalPage",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.pageTotal"),
        desc: z("@TotalPage", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@TotalSheetPage",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.sheetPageTotal"),
        desc: z("@TotalSheetPage", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }], [var_core_value_sig6E1C]),
      var_core_value_sig78AC = (0, u.useMemo)(() => [{
        value: "@WorkbookTitle",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.title"),
        desc: z("@WorkbookTitle", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@WorksheetTitle",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.sheet"),
        desc: z("@WorksheetTitle", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }], [var_core_value_sig6E1C]),
      var_core_value_sig4CEF = (0, u.useMemo)(() => [{
        value: "@DateA",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.dateA"),
        desc: z("@DateA", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@DateB",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.dateB"),
        desc: z("@DateB", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@DateC",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.dateC"),
        desc: z("@DateC", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@DateD",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.dateD"),
        desc: z("@DateD", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }], [var_core_value_sig6E1C]),
      var_core_value_sigD57D = (0, u.useMemo)(() => [{
        value: "@TimeA",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.timeA"),
        desc: z("@TimeA", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@TimeB",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.timeB"),
        desc: z("@TimeB", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@TimeC",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.timeC"),
        desc: z("@TimeC", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }, {
        value: "@TimeD",
        label: var_core_value_sig6E1C.t("sheets-print.headerFooter.display.timeD"),
        desc: z("@TimeD", {
          workbook: var_core_value_sigFABC,
          worksheet: var_core_value_sig413D,
          page: 1,
          sheetPage: 1,
          pageTotal: 99,
          sheetPageTotal: 99,
          localeService: var_core_value_sig6E1C,
          now: var_core_value_sig5BCE
        })
      }], [var_core_value_sig6E1C]);
    return (0, d.jsxs)("div", {
      className: (0, c.clsx)("univer-rounded-md\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow\x20dark:!univer-bg-gray-900", c.borderClassName),
      children: [(0, d.jsx)(X, {
        icon: (0, d.jsx)(l.SheetIcon, {}),
        items: var_core_value_sig8EF0,
        onHover: var_core_value_sigB977 => var_core_value_sigC7E7(var_core_value_sigB977 ? "sheet" : ""),
        active: var_core_value_sig519D === "sheet",
        onChange: var_core_value_sigD2BA,
        popupDirection: var_core_value_sigCD3A
      }), (0, d.jsx)(X, {
        icon: (0, d.jsx)(l.TextIcon, {}),
        items: var_core_value_sig78AC,
        onHover: var_core_value_sig2949 => var_core_value_sigC7E7(var_core_value_sig2949 ? "text" : ""),
        active: var_core_value_sig519D === "text",
        onChange: var_core_value_sigD2BA,
        popupDirection: var_core_value_sigCD3A
      }), (0, d.jsx)(X, {
        icon: (0, d.jsx)(l.CalendarIcon, {}),
        items: var_core_value_sig4CEF,
        onHover: var_core_value_sig308A => var_core_value_sigC7E7(var_core_value_sig308A ? "date" : ""),
        active: var_core_value_sig519D === "date",
        onChange: var_core_value_sigD2BA,
        popupDirection: var_core_value_sigCD3A
      }), (0, d.jsx)(X, {
        icon: (0, d.jsx)(l.ClockIcon, {}),
        items: var_core_value_sigD57D,
        onHover: var_core_value_sig528D => var_core_value_sigC7E7(var_core_value_sig528D ? "time" : ""),
        active: var_core_value_sig519D === "time",
        onChange: var_core_value_sigD2BA,
        popupDirection: var_core_value_sigCD3A
      })]
    });
  };
function Te({
  width: var_core_value_sig2CC7 = 697,
  height: var_core_value_sig4784 = 553,
  cols: var_core_value_sigC39E = 8,
  rows: var_core_value_sig16C7 = 24,
  cellWidth: var_core_value_sig7481 = 87,
  cellHeight: var_core_value_sig08A3 = 23,
  strokeColor: var_core_value_sig77D8 = "#E5E5E5"
}) {
  let var_core_value_sig78A3 = (0, u.useMemo)(() => {
    let var_core_value_sigA309 = [];
    for (let var_core_value_sigAD56 = 0; var_core_value_sigAD56 < var_core_value_sig16C7; var_core_value_sigAD56++) for (let var_core_value_sig284F = 0; var_core_value_sig284F < var_core_value_sigC39E; var_core_value_sig284F++) var_core_value_sigA309.push((0, d.jsx)("rect", {
      x: var_core_value_sig284F * var_core_value_sig7481 + 0.5,
      y: var_core_value_sigAD56 * var_core_value_sig08A3 + 0.5,
      width: var_core_value_sig7481,
      height: var_core_value_sig08A3,
      stroke: var_core_value_sig77D8
    }, var_core_value_sigAD56 + "-" + var_core_value_sig284F));
    return var_core_value_sigA309;
  }, [var_core_value_sig16C7, var_core_value_sigC39E, var_core_value_sig7481, var_core_value_sig08A3, var_core_value_sig77D8]);
  return (0, d.jsx)("svg", {
    width: var_core_value_sig2CC7,
    height: var_core_value_sig4784,
    viewBox: "0 0 " + var_core_value_sig2CC7 + "\x20" + var_core_value_sig4784,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: var_core_value_sig78A3
  });
}
const Z = var_core_value_sig649B => {
    let {
        value: var_core_value_sig6256,
        onChange: var_core_value_sigE7A6,
        popupDirection: var_core_value_sigB505 = "top"
      } = var_core_value_sig649B,
      var_core_value_sig7428 = (0, i.useDependency)(n.LocaleService),
      var_core_value_sig1DCE = (0, i.useDependency)(p.IEditorService),
      [var_core_value_sig0567, var_core_value_sigA7F3] = (0, u.useState)(false),
      var_core_value_sigEACD = (0, u.useRef)(null),
      var_core_value_sig901E = (0, i.useDependency)(n.ICommandService),
      var_core_value_sigF7BB = [{
        value: "@Page",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.page")
      }, {
        value: "@SheetPage",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.sheetPage")
      }, {
        value: "@TotalPage",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.pageTotal")
      }, {
        value: "@TotalSheetPage",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.sheetPageTotal")
      }],
      var_core_value_sigFA38 = [{
        value: "@WorkbookTitle",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.title")
      }, {
        value: "@WorksheetTitle",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.sheet")
      }],
      var_core_value_sig102B = [{
        value: "@DateA",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.dateA")
      }, {
        value: "@DateB",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.dateB")
      }, {
        value: "@DateC",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.dateC")
      }, {
        value: "@DateD",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.dateD")
      }],
      var_core_value_sigA7DB = [{
        value: "@TimeA",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.timeA")
      }, {
        value: "@TimeB",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.timeB")
      }, {
        value: "@TimeC",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.timeC")
      }, {
        value: "@TimeD",
        label: var_core_value_sig7428.t("sheets-print.headerFooter.display.timeD")
      }],
      var_core_value_sig5EEE = [...var_core_value_sigF7BB, ...var_core_value_sigFA38, ...var_core_value_sig102B, ...var_core_value_sigA7DB],
      [var_core_value_sig65B4] = (0, u.useState)(() => re(var_core_value_sig6256, var_core_value_sig5EEE));
    return (0, d.jsxs)("div", {
      className: "univer-relative univer-mx-2 univer-my-0 univer-flex-grow",
      children: [(0, d.jsx)(p.RichTextEditor, {
        editorRef: var_core_value_sigEACD,
        initialValue: var_core_value_sig65B4,
        onChange: var_core_value_sig9E20 => {
          var_core_value_sigE7A6 == null || var_core_value_sigE7A6(ie(var_core_value_sig9E20));
        },
        onFocusChange: var_core_value_sig26BB => {
          var_core_value_sigA7F3(var_core_value_sig26BB);
        },
        onClickOutside: () => {
          var var_core_value_sig19B4;
          (var_core_value_sig19B4 = var_core_value_sigEACD.current) == null || var_core_value_sig19B4.setSelectionRanges([]), var_core_value_sig1DCE.blur();
        },
        placeholder: var_core_value_sig7428.t("sheets-print.headerFooter.placeholder")
      }), (0, d.jsx)("div", {
        className: "univer-absolute univer-left-0 univer-z-[100]",
        style: {
          [var_core_value_sigB505]: 36
        },
        children: var_core_value_sig0567 && (0, d.jsx)(we, {
          popupDirection: var_core_value_sigB505,
          onSelect: async var_core_value_sig218A => {
            var var_core_value_sig14CB;
            let var_core_value_sigFDEE = (var_core_value_sig14CB = var_core_value_sigEACD.current) == null ? undefined : var_core_value_sig14CB.getEditorId();
            if (!var_core_value_sigEACD.current) return;
            let var_core_value_sigA676 = var_core_value_sigEACD.current["getCursorPosition"]();
            if (var_core_value_sigA676 < 0) return;
            let var_core_value_sigC27E = var_core_value_sig5EEE.find(var_core_value_sigDB4A => var_core_value_sigDB4A.value === var_core_value_sig218A);
            if (!var_core_value_sigC27E) return;
            let var_core_value_sigA70D = {
              dataStream: var_core_value_sigC27E.label,
              customRanges: [{
                startIndex: 0,
                endIndex: var_core_value_sigC27E.label["length"] - 1,
                rangeId: (0, n.generateRandomId)(),
                rangeType: n.CustomRangeType["MENTION"],
                properties: {
                  value: var_core_value_sigC27E.value
                },
                wholeEntity: true
              }]
            };
            await (0, n.awaitTime)(0);
            let var_core_value_sigCE10 = n.BuildTextUtils["selection"].replace({
              selection: {
                startOffset: var_core_value_sigA676,
                endOffset: var_core_value_sigA676,
                collapsed: true
              },
              body: var_core_value_sigA70D,
              doc: var_core_value_sigEACD.current["getDocumentDataModel"]()
            });
            if (!var_core_value_sigCE10) return;
            let var_core_value_sigA386 = {
                id: f.RichTextEditingMutation["id"],
                params: {
                  unitId: var_core_value_sigFDEE,
                  actions: [],
                  textRanges: [{
                    startOffset: var_core_value_sigA676 + var_core_value_sigA70D.dataStream["length"],
                    endOffset: var_core_value_sigA676 + var_core_value_sigA70D.dataStream["length"],
                    collapsed: true
                  }],
                  trigger: "mually"
                }
              },
              var_core_value_sigCD82 = n.JSONX["getInstance"]();
            var_core_value_sigA386.params["actions"] = var_core_value_sigCD82.editOp(var_core_value_sigCE10.serialize()), var_core_value_sig901E.syncExecuteCommand(var_core_value_sigA386.id, var_core_value_sigA386.params), setTimeout(() => {
              var_core_value_sig1DCE.focus(var_core_value_sigFDEE);
            }, 0);
          }
        })
      })]
    });
  },
  Ee = var_core_value_sigF98E => {
    let {
        onClose: var_core_value_sigA470
      } = var_core_value_sigF98E,
      var_core_value_sig19A1 = (0, i.useDependency)(k),
      var_core_value_sig81F7 = var_core_value_sig19A1.renderConfig["headerFooterSetting"] ?? E,
      [var_core_value_sigBE51, var_core_value_sigAAD1] = (0, u.useState)(var_core_value_sig81F7.topLeft),
      [var_core_value_sigBC1A, var_core_value_sig3F3A] = (0, u.useState)(var_core_value_sig81F7.topCenter),
      [var_core_value_sigA984, var_core_value_sigA504] = (0, u.useState)(var_core_value_sig81F7.topRight),
      [var_core_value_sig05FF, var_core_value_sigFBF0] = (0, u.useState)(var_core_value_sig81F7.bottomLeft),
      [var_core_value_sig2F95, var_core_value_sigF0E1] = (0, u.useState)(var_core_value_sig81F7.bottomCenter),
      [var_core_value_sig2D8D, var_core_value_sigE5A6] = (0, u.useState)(var_core_value_sig81F7.bottomRight),
      var_core_value_sigF449 = (0, i.useDependency)(n.LocaleService);
    return (0, d.jsxs)("div", {
      className: "univer-absolute univer-inset-0 univer-z-[100] univer-flex univer-size-full univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
      children: [(0, d.jsxs)("div", {
        className: (0, c.clsx)("univer-box-border univer-flex univer-h-16 univer-w-full univer-flex-none univer-flex-row univer-items-center univer-justify-between univer-bg-gray-0 univer-px-4 dark:!univer-bg-gray-900", c.borderBottomClassName),
        children: [(0, d.jsx)("div", {
          className: "univer-ml-2 univer-text-lg univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
          children: var_core_value_sigF449.t("sheets-print.headerFooter.editCustomHeadFooter")
        }), (0, d.jsxs)("div", {
          className: "univer-relative\x20first:univer-mr-2",
          children: [(0, d.jsx)(c.Button, {
            className: "univer-mr-2",
            onClick: () => {
              var_core_value_sigA470();
            },
            children: var_core_value_sigF449.t("sheets-print.header.cancel")
          }), (0, d.jsx)(c.Button, {
            variant: "primary",
            onClick: () => {
              var_core_value_sigA470(), var_core_value_sig19A1.updateRenderConfig({
                headerFooterSetting: {
                  topLeft: var_core_value_sigBE51,
                  topCenter: var_core_value_sigBC1A,
                  topRight: var_core_value_sigA984,
                  bottomLeft: var_core_value_sig05FF,
                  bottomCenter: var_core_value_sig2F95,
                  bottomRight: var_core_value_sig2D8D
                }
              });
            },
            children: var_core_value_sigF449.t("sheets-print.headerFooter.submit")
          })]
        })]
      }), (0, d.jsx)("div", {
        className: "univer-flex univer-flex-1 univer-flex-col univer-overflow-hidden",
        children: (0, d.jsx)("div", {
          className: "univer-relative univer-box-border univer-flex univer-flex-1 univer-items-center univer-justify-center univer-overflow-hidden univer-bg-gray-200 dark:!univer-bg-gray-700",
          children: (0, d.jsxs)("div", {
            className: "unier-w-[761px] univer-mx-auto univer-my-4 univer-box-border univer-flex univer-flex-col univer-items-center univer-bg-gray-0 univer-px-6 univer-py-7 univer-shadow-lg dark:!univer-bg-gray-900",
            children: [(0, d.jsxs)("div", {
              className: "univer-flex univer-w-full",
              children: [(0, d.jsx)(Z, {
                value: var_core_value_sigBE51,
                onChange: var_core_value_sig44DD => var_core_value_sigAAD1(var_core_value_sig44DD)
              }), (0, d.jsx)(Z, {
                value: var_core_value_sigBC1A,
                onChange: var_core_value_sig96FA => var_core_value_sig3F3A(var_core_value_sig96FA)
              }), (0, d.jsx)(Z, {
                value: var_core_value_sigA984,
                onChange: var_core_value_sigAB68 => var_core_value_sigA504(var_core_value_sigAB68)
              })]
            }), (0, d.jsx)("div", {
              className: "univer-mx-2 univer-my-5",
              children: (0, d.jsx)(Te, {})
            }), (0, d.jsxs)("div", {
              className: "univer-flex univer-w-full",
              children: [(0, d.jsx)(Z, {
                popupDirection: "bottom",
                value: var_core_value_sig05FF,
                onChange: var_core_value_sig040A => var_core_value_sigFBF0(var_core_value_sig040A)
              }), (0, d.jsx)(Z, {
                popupDirection: "bottom",
                value: var_core_value_sig2F95,
                onChange: var_core_value_sig2AE0 => var_core_value_sigF0E1(var_core_value_sig2AE0)
              }), (0, d.jsx)(Z, {
                popupDirection: "bottom",
                value: var_core_value_sig2D8D,
                onChange: var_core_value_sigC349 => var_core_value_sigE5A6(var_core_value_sigC349)
              })]
            })]
          })
        })
      })]
    });
  },
  De = (var_core_value_sig38C5, var_core_value_sigC87D) => {
    let var_core_value_sigCCDC = (0, u.useRef)(false);
    (0, u.useEffect)(() => {
      if (var_core_value_sigCCDC.current) return var_core_value_sig38C5();
      var_core_value_sigCCDC.current = true;
    }, var_core_value_sigC87D);
  },
  Oe = (0, u.forwardRef)((var_core_value_sigC310, var_core_value_sigA4E8) => {
    let {
        config: var_core_value_sigDC07,
        previewScale: var_core_value_sig3474
      } = var_core_value_sigC310,
      var_core_value_sig4E80 = (0, i.useDependency)(k),
      var_core_value_sigD23B = (0, i.useDependency)(n.Injector),
      var_core_value_sig2B2A = (0, u.useRef)(null),
      var_core_value_sig0B5C = var_core_value_sig4E80.paperSize,
      var_core_value_sig7D42 = (0, i.useObservable)(var_core_value_sig4E80.renderConfig$, var_core_value_sig4E80.renderConfig),
      var_core_value_sig8FDE = (0, i.useObservable)(var_core_value_sig4E80.layoutConfig$, var_core_value_sig4E80.layoutConfig),
      var_core_value_sig78E6 = Math.round(var_core_value_sig3474 * (794 / var_core_value_sig0B5C.w) * 10) / 10,
      [var_core_value_sig541F] = (0, u.useState)(() => new H(var_core_value_sigD23B, var_core_value_sigDC07, var_core_value_sig7D42, true, var_core_value_sig78E6));
    return (0, u.useEffect)(() => (var_core_value_sig2B2A.current && (var_core_value_sig541F.container["style"].width = "100%", var_core_value_sig541F.container["style"].height = "100%", var_core_value_sig541F.container["style"].position = "relative", var_core_value_sig2B2A.current["appendChild"](var_core_value_sig541F.container), var_core_value_sig541F.container["appendChild"](var_core_value_sig541F.root)), var_core_value_sig541F.render(), var_core_value_sig541F.renderOnReady(), () => {
      var var_core_value_sig6418;
      queueMicrotask(() => var_core_value_sig541F.dispose()), (var_core_value_sig6418 = var_core_value_sig2B2A.current) == null || var_core_value_sig6418.removeChild(var_core_value_sig541F.container);
    }), [var_core_value_sig541F]), De(() => {
      var_core_value_sig541F.renderConfig = var_core_value_sig7D42, var_core_value_sig541F.render();
    }, [var_core_value_sig7D42]), De(() => {
      var_core_value_sig541F.setPreviewScale(var_core_value_sig78E6), var_core_value_sig541F.engine["resize"](), var_core_value_sig541F.render();
    }, [var_core_value_sig78E6]), De(() => {
      var_core_value_sig541F.updateConfig(var_core_value_sigDC07), var_core_value_sig541F.render();
    }, [var_core_value_sigDC07.freeze["startRow"], var_core_value_sigDC07.freeze["startColumn"], var_core_value_sigDC07.freeze["xSplit"], var_core_value_sigDC07.freeze["ySplit"], var_core_value_sigDC07.range["startRow"], var_core_value_sigDC07.range["endRow"], var_core_value_sigDC07.range["startColumn"], var_core_value_sigDC07.range["endColumn"], var_core_value_sigDC07.scale, var_core_value_sig8FDE.margin]), (0, d.jsx)("div", {
      ref: var_core_value_sigA4E8,
      children: (0, d.jsx)("div", {
        ref: var_core_value_sig2B2A,
        className: "univer-relative univer-mx-auto univer-mt-7 univer-flex-none univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900",
        style: {
          width: var_core_value_sig0B5C.w * var_core_value_sig78E6,
          height: var_core_value_sig0B5C.h * var_core_value_sig78E6
        }
      })
    });
  }),
  ke = (0, u.memo)(({
    onShowFooterHeaderEditor: var_core_value_sig417B
  }) => {
    var var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sig9940, var_core_value_sig682D, var_core_value_sig1435;
    let var_core_value_sig4082 = (0, i.useDependency)(k),
      var_core_value_sigC049 = (0, i.useObservable)(var_core_value_sig4082.layoutConfig$, var_core_value_sig4082.layoutConfig),
      var_core_value_sigE5C3 = (0, i.useObservable)(var_core_value_sig4082.renderConfig$, var_core_value_sig4082.renderConfig),
      var_core_value_sigCCAA = (0, i.useDependency)(n.LocaleService),
      var_core_value_sigF32D = (0, i.useDependency)(n.IUniverInstanceService),
      var_core_value_sig9427 = (0, i.useDependency)(n.ILocalStorageService),
      [var_core_value_sig21F4, var_core_value_sigA345] = (0, u.useState)(null),
      var_core_value_sigA468 = ((var_core_value_sigAA90 = (0, i.useDependency)(n.IConfigService).getConfig("sheets-print.config")) == null ? undefined : var_core_value_sigAA90.enforceWatermark) ?? false;
    (0, u.useEffect)(() => {
      let var_core_value_sig9D96 = false;
      return var_core_value_sig9427.getItem(o.UNIVER_WATERMARK_STORAGE_KEY).then(var_core_value_sig1896 => {
        if (var_core_value_sig9D96) return;
        let var_core_value_sig0285, var_core_value_sig777D;
        (var_core_value_sig1896 == null ? undefined : var_core_value_sig1896.type) === o.IWatermarkTypeEnum["Image"] && var_core_value_sig1896.config["image"] && (var_core_value_sig0285 = new Image(), var_core_value_sig0285.src = var_core_value_sig1896.config["image"].url), (var_core_value_sig1896 == null ? undefined : var_core_value_sig1896.type) === o.IWatermarkTypeEnum["UserInfo"] && var_core_value_sig1896 != null && var_core_value_sig1896.config["userInfo"] && (var_core_value_sig777D = var_core_value_sig1896.config["userInfo"]);
        let var_core_value_sig3F4C = var_core_value_sig1896 ? {
          ...var_core_value_sig1896,
          user: var_core_value_sig777D,
          image: var_core_value_sig0285
        } : null;
        var_core_value_sigA345(var_core_value_sig3F4C), var_core_value_sigA468 && var_core_value_sig4082.updateRenderConfig({
          watermark: var_core_value_sig3F4C
        });
      }), () => {
        var_core_value_sig9D96 = true;
      };
    }, [var_core_value_sigA468, var_core_value_sig9427, var_core_value_sig4082]);
    let var_core_value_sig1561 = var_core_value_sigF32D.getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"]),
      var_core_value_sigDF14 = var_core_value_sig1561.getSheets().filter(var_core_value_sig2776 => !var_core_value_sig2776.isSheetHidden()),
      var_core_value_sig842F = var_core_value_sig1561.getActiveSheet();
    if (!var_core_value_sig842F) return console.error("No active sheet found"), null;
    let var_core_value_sigC4C0 = (var_core_value_sig6FB2, var_core_value_sigEB43) => {
        let var_core_value_sig4186 = Math.max(0, var_core_value_sigEB43 || 0),
          var_core_value_sigF963 = var_core_value_sigC049.marginCustom || {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          };
        var_core_value_sig4082.updateLayoutConfig({
          marginCustom: {
            ...var_core_value_sigF963,
            [var_core_value_sig6FB2]: var_core_value_sig4186
          }
        });
      },
      var_core_value_sig214A = var_core_value_sig842F.getFreeze(),
      var_core_value_sigCCC3 = var_core_value_sigC049.area !== "Workbook" && var_core_value_sig214A.xSplit <= 0,
      var_core_value_sig986E = var_core_value_sigC049.area !== "Workbook" && var_core_value_sig214A.ySplit <= 0;
    return (0, d.jsx)("div", {
      className: (0, c.clsx)("univer-h-full\x20univer-overflow-y-auto", c.scrollbarClassName),
      children: (0, d.jsxs)("div", {
        className: "univer-p-4",
        children: [(0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigCCAA.t("sheets-print.area.title"),
          children: (0, d.jsx)(c.Select, {
            className: "univer-w-full",
            value: "" + var_core_value_sigC049.area,
            onChange: var_core_value_sigB608 => {
              var_core_value_sigB608 === "Workbook" ? var_core_value_sig4082.updateLayoutConfig({
                area: var_core_value_sigB608,
                subUnitIds: var_core_value_sigDF14.map(var_core_value_sigD65A => var_core_value_sigD65A.getSheetId())
              }) : var_core_value_sig4082.updateLayoutConfig({
                area: var_core_value_sigB608
              });
            },
            options: [{
              label: var_core_value_sigCCAA.t("sheets-print.area.currentSheet"),
              value: "CurrentSheet"
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.area.workbook"),
              value: "Workbook"
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.area.currentSelection"),
              value: "CurrentSelection"
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.area.allSelection"),
              value: "AllSelection"
            }]
          })
        }), var_core_value_sigC049.area === "Workbook" ? (0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigCCAA.t("sheets-print.selection.title"),
          children: (0, d.jsx)(c.Dropdown, {
            overlay: (0, d.jsx)("div", {
              className: (0, c.clsx)("univer-h-[200px] univer-w-[--radix-popper-anchor-width] univer-overflow-y-auto", c.scrollbarClassName),
              children: (0, d.jsx)(c.CheckboxGroup, {
                direction: "vertical",
                className: "univer-p-3",
                value: var_core_value_sigC049.subUnitIds["map"](var_core_value_sigF866 => typeof var_core_value_sigF866 == "string" ? var_core_value_sigF866 : var_core_value_sigF866.id),
                onChange: var_core_value_sig5EFB => {
                  let var_core_value_sig3A85 = new Set(var_core_value_sig5EFB);
                  if (var_core_value_sig3A85.size === 0) var_core_value_sig4082.updateLayoutConfig({
                    subUnitIds: var_core_value_sigDF14.map(var_core_value_sig5A13 => var_core_value_sig5A13.getSheetId())
                  });else {
                    let var_core_value_sigF593 = [];
                    var_core_value_sigDF14.forEach(var_core_value_sigE154 => {
                      let var_core_value_sig4632 = var_core_value_sigE154.getSheetId();
                      var_core_value_sig3A85.has(var_core_value_sig4632) && var_core_value_sigF593.push(var_core_value_sig4632);
                    }), var_core_value_sig4082.updateLayoutConfig({
                      subUnitIds: var_core_value_sigF593
                    });
                  }
                },
                children: var_core_value_sigDF14.map(var_core_value_sig2682 => (0, d.jsx)(c.Checkbox, {
                  value: var_core_value_sig2682.getSheetId(),
                  children: var_core_value_sig2682.getName()
                }, var_core_value_sig2682.getSheetId()))
              })
            }),
            children: (0, d.jsxs)("div", {
              className: (0, c.clsx)("univer-box-border univer-inline-flex univer-h-8 univer-w-full univer-min-w-36 univer-cursor-pointer univer-items-center univer-justify-between univer-gap-2 univer-rounded-lg univer-bg-gray-0 univer-px-2.5 univer-text-sm univer-transition-colors univer-duration-200 hover:univer-border-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-gray-0", c.borderClassName),
              children: [(0, d.jsx)("span", {
                className: "univer-text-gray-500",
                children: var_core_value_sigC049.subUnitIds["length"] === var_core_value_sigDF14.length || var_core_value_sigC049.subUnitIds["length"] === 0 ? var_core_value_sigCCAA.t("sheets-print.selection.allWorkbook") : "" + var_core_value_sigC049.subUnitIds["length"] + var_core_value_sigCCAA.t("sheets-print.selection.workbookUnit")
              }), (0, d.jsx)(l.MoreDownIcon, {})]
            })
          })
        }) : null, (0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigCCAA.t("sheets-print.size.title"),
          children: (0, d.jsx)(c.Select, {
            className: "univer-w-full",
            value: var_core_value_sigC049.paperSize,
            options: [{
              label: var_core_value_sigCCAA.t("sheets-print.size.letter"),
              value: n.PaperType["Letter"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.tabloid"),
              value: n.PaperType["Tabloid"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.legal"),
              value: n.PaperType["Legal"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.statement"),
              value: n.PaperType["Statement"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.executive"),
              value: n.PaperType["Executive"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.folio"),
              value: n.PaperType["Folio"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.a3"),
              value: n.PaperType["A3"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.a4"),
              value: n.PaperType["A4"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.a5"),
              value: n.PaperType["A5"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.b4"),
              value: n.PaperType["B4"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.size.b5"),
              value: n.PaperType["B5"]
            }],
            onChange: var_core_value_sig4BB5 => {
              var_core_value_sig4082.updateLayoutConfig({
                paperSize: var_core_value_sig4BB5
              });
            }
          })
        }), (0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigCCAA.t("sheets-print.margin.title"),
          children: (0, d.jsx)(c.Select, {
            className: "univer-w-full",
            value: var_core_value_sigC049.margin,
            options: [{
              label: var_core_value_sigCCAA.t("sheets-print.margin.normal"),
              value: t.PrintPaperMargin["Normal"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.margin.narrow"),
              value: t.PrintPaperMargin["Narrow"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.margin.wide"),
              value: t.PrintPaperMargin["Wide"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.margin.custom"),
              value: t.PrintPaperMargin["Custom"]
            }],
            onChange: var_core_value_sig6709 => {
              let var_core_value_sig52CA = t.PaperMarginMap[var_core_value_sigC049.margin];
              var_core_value_sig4082.updateLayoutConfig({
                margin: var_core_value_sig6709,
                marginCustom: var_core_value_sig6709 === t.PrintPaperMargin["Custom"] ? var_core_value_sig52CA : t.PaperMarginMap[var_core_value_sig6709]
              });
            }
          })
        }), var_core_value_sigC049.margin === t.PrintPaperMargin["Custom"] && (0, d.jsx)(c.FormLayout, {
          children: (0, d.jsxs)("div", {
            className: "univer-grid univer-grid-cols-2 univer-gap-2",
            children: [(0, d.jsxs)("div", {
              children: [(0, d.jsx)("label", {
                className: "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                children: var_core_value_sigCCAA.t("sheets-print.margin.top")
              }), (0, d.jsx)(c.Input, {
                type: "number",
                value: String(((var_core_value_sigE92D = var_core_value_sigC049.marginCustom) == null ? undefined : var_core_value_sigE92D.top) || 0),
                onChange: var_core_value_sigC030 => var_core_value_sigC4C0("top", Number(var_core_value_sigC030))
              })]
            }), (0, d.jsxs)("div", {
              children: [(0, d.jsx)("label", {
                className: "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                children: var_core_value_sigCCAA.t("sheets-print.margin.bottom")
              }), (0, d.jsx)(c.Input, {
                type: "number",
                value: String(((var_core_value_sig9940 = var_core_value_sigC049.marginCustom) == null ? undefined : var_core_value_sig9940.bottom) || 0),
                onChange: var_core_value_sig88F6 => var_core_value_sigC4C0("bottom", Number(var_core_value_sig88F6))
              })]
            }), (0, d.jsxs)("div", {
              children: [(0, d.jsx)("label", {
                className: "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                children: var_core_value_sigCCAA.t("sheets-print.margin.left")
              }), (0, d.jsx)(c.Input, {
                type: "number",
                value: String(((var_core_value_sig682D = var_core_value_sigC049.marginCustom) == null ? undefined : var_core_value_sig682D.left) || 0),
                onChange: var_core_value_sig37DB => var_core_value_sigC4C0("left", Number(var_core_value_sig37DB))
              })]
            }), (0, d.jsxs)("div", {
              children: [(0, d.jsx)("label", {
                className: "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                children: var_core_value_sigCCAA.t("sheets-print.margin.right")
              }), (0, d.jsx)(c.Input, {
                type: "number",
                value: String(((var_core_value_sig1435 = var_core_value_sigC049.marginCustom) == null ? undefined : var_core_value_sig1435.right) || 0),
                onChange: var_core_value_sig5542 => var_core_value_sigC4C0("right", Number(var_core_value_sig5542))
              })]
            })]
          })
        }), (0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigCCAA.t("sheets-print.orientation.title"),
          children: (0, d.jsxs)(c.RadioGroup, {
            value: var_core_value_sigC049.direction,
            onChange: var_core_value_sigE0A9 => {
              var_core_value_sig4082.updateLayoutConfig({
                direction: var_core_value_sigE0A9
              });
            },
            children: [(0, d.jsx)(c.Radio, {
              value: t.PrintDirection["Portrait"],
              children: var_core_value_sigCCAA.t("sheets-print.orientation.portrait")
            }), (0, d.jsx)(c.Radio, {
              value: t.PrintDirection["Landscape"],
              children: var_core_value_sigCCAA.t("sheets-print.orientation.landscape")
            })]
          })
        }), (0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigCCAA.t("sheets-print.scale.title"),
          children: (0, d.jsx)(c.Select, {
            className: "univer-w-full",
            value: var_core_value_sigC049.scale,
            options: [{
              label: var_core_value_sigCCAA.t("sheets-print.scale.normal"),
              value: t.PrintScale["Origin"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.scale.fitWidth"),
              value: t.PrintScale["FitWidth"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.scale.fitHeight"),
              value: t.PrintScale["FitHeight"]
            }, {
              label: var_core_value_sigCCAA.t("sheets-print.scale.fitPage"),
              value: t.PrintScale["FitPage"]
            }],
            onChange: var_core_value_sigA73E => {
              var_core_value_sig4082.updateLayoutConfig({
                scale: var_core_value_sigA73E
              });
            }
          })
        }), (0, d.jsxs)(c.FormLayout, {
          label: var_core_value_sigCCAA.t("sheets-print.formatting.title"),
          children: [(0, d.jsx)(c.Checkbox, {
            checked: var_core_value_sigE5C3.gridlines,
            onChange: var_core_value_sig7620 => {
              var_core_value_sig4082.updateRenderConfig({
                gridlines: var_core_value_sig7620
              });
            },
            children: var_core_value_sigCCAA.t("sheets-print.formatting.skeleton")
          }), var_core_value_sig21F4 && !var_core_value_sigA468 ? (0, d.jsx)("div", {
            className: "univer-mt-3",
            children: (0, d.jsx)(c.Checkbox, {
              checked: !!var_core_value_sigE5C3.watermark,
              onChange: async var_core_value_sigB9FC => {
                var_core_value_sigB9FC ? var_core_value_sig4082.updateRenderConfig({
                  watermark: var_core_value_sig21F4
                }) : var_core_value_sig4082.updateRenderConfig({
                  watermark: undefined
                });
              },
              children: var_core_value_sigCCAA.t("sheets-print.formatting.waterMark")
            })
          }) : null]
        }), (0, d.jsx)(c.FormLayout, {
          label: var_core_value_sigCCAA.t("sheets-print.align.title"),
          children: (0, d.jsxs)("div", {
            className: "univer-flex univer-gap-2",
            children: [(0, d.jsx)(c.Select, {
              className: "!univer-min-w-0\x20univer-flex-1",
              value: var_core_value_sigE5C3.hAlign,
              options: [{
                label: var_core_value_sigCCAA.t("sheets-print.align.horizontal.middle"),
                value: t.PrintAlign["Middle"]
              }, {
                label: var_core_value_sigCCAA.t("sheets-print.align.horizontal.start"),
                value: t.PrintAlign["Start"]
              }, {
                label: var_core_value_sigCCAA.t("sheets-print.align.horizontal.end"),
                value: t.PrintAlign["End"]
              }],
              onChange: var_core_value_sig5055 => {
                var_core_value_sig4082.updateRenderConfig({
                  hAlign: var_core_value_sig5055
                });
              }
            }), (0, d.jsx)(c.Select, {
              className: "!univer-min-w-0 univer-flex-1",
              value: var_core_value_sigE5C3.vAlign,
              options: [{
                label: var_core_value_sigCCAA.t("sheets-print.align.vertical.start"),
                value: t.PrintAlign["Start"]
              }, {
                label: var_core_value_sigCCAA.t("sheets-print.align.vertical.end"),
                value: t.PrintAlign["End"]
              }, {
                label: var_core_value_sigCCAA.t("sheets-print.align.vertical.middle"),
                value: t.PrintAlign["Middle"]
              }],
              onChange: var_core_value_sig3801 => {
                var_core_value_sig4082.updateRenderConfig({
                  vAlign: var_core_value_sig3801
                });
              }
            })]
          })
        }), (0, d.jsxs)(c.FormLayout, {
          collapsable: true,
          label: var_core_value_sigCCAA.t("sheets-print.headerFooter.title"),
          children: [(0, d.jsxs)(c.CheckboxGroup, {
            direction: "vertical",
            disabled: var_core_value_sigE5C3.isCustomHeaderFooter,
            value: var_core_value_sigE5C3.headerFooter,
            onChange: var_core_value_sig45F0 => {
              var_core_value_sig4082.updateRenderConfig({
                headerFooter: var_core_value_sig45F0
              });
            },
            children: [(0, d.jsx)(c.Checkbox, {
              value: "PageSize",
              children: var_core_value_sigCCAA.t("sheets-print.headerFooter.page")
            }), (0, d.jsx)(c.Checkbox, {
              value: "WorkbookTitle",
              children: var_core_value_sigCCAA.t("sheets-print.headerFooter.workbook")
            }), (0, d.jsx)(c.Checkbox, {
              value: "WorksheetTitle",
              children: var_core_value_sigCCAA.t("sheets-print.headerFooter.sheet")
            }), (0, d.jsx)(c.Checkbox, {
              value: "Date",
              children: var_core_value_sigCCAA.t("sheets-print.headerFooter.date")
            }), (0, d.jsx)(c.Checkbox, {
              value: "Time",
              children: var_core_value_sigCCAA.t("sheets-print.headerFooter.time")
            })]
          }), (0, d.jsx)(c.FormLayout, {
            className: "univer-mt-3",
            label: (0, d.jsx)(c.Checkbox, {
              checked: var_core_value_sigE5C3.isCustomHeaderFooter,
              onChange: () => {
                var_core_value_sig4082.updateRenderConfig({
                  isCustomHeaderFooter: !var_core_value_sigE5C3.isCustomHeaderFooter
                });
              },
              children: var_core_value_sigCCAA.t("sheets-print.headerFooter.customHeadFooter")
            }),
            children: var_core_value_sigE5C3.isCustomHeaderFooter ? (0, d.jsx)(c.Button, {
              className: "univer-my-1 univer-p-0",
              size: "small",
              variant: "link",
              onClick: () => {
                var_core_value_sig417B();
              },
              children: var_core_value_sigCCAA.t("sheets-print.headerFooter.editCustomHeadFooter")
            }) : null
          })]
        }), (0, d.jsx)(c.FormLayout, {
          collapsable: true,
          label: var_core_value_sigCCAA.t("sheets-print.freeze.title"),
          children: (0, d.jsxs)(c.CheckboxGroup, {
            direction: "vertical",
            value: var_core_value_sigC049.freeze,
            onChange: var_core_value_sigBC91 => {
              var_core_value_sig4082.updateLayoutConfig({
                freeze: var_core_value_sigBC91
              });
            },
            children: [(0, d.jsx)(c.Checkbox, {
              disabled: var_core_value_sig986E,
              value: "Row",
              children: var_core_value_sigCCAA.t("sheets-print.freeze.row")
            }), (0, d.jsx)(c.Checkbox, {
              disabled: var_core_value_sigCCC3,
              value: "Column",
              children: var_core_value_sigCCAA.t("sheets-print.freeze.column")
            })]
          })
        }), (0, d.jsxs)(c.FormLayout, {
          collapsable: true,
          defaultCollapsed: true,
          label: var_core_value_sigCCAA.t("sheets-print.area.limit"),
          children: [(0, d.jsx)(c.FormLayout, {
            className: "univer-mb-2",
            label: var_core_value_sigCCAA.t("sheets-print.area.maxRowsEachPage"),
            children: (0, d.jsx)(c.Input, {
              value: var_core_value_sigC049.maxRowsEachPage === 1 / 0 ? "" : "" + var_core_value_sigC049.maxRowsEachPage,
              onChange: var_core_value_sigCB88 => {
                var_core_value_sig4082.updateLayoutConfig({
                  maxRowsEachPage: !var_core_value_sigCB88 || Number.isNaN(Number(var_core_value_sigCB88)) ? 1 / 0 : Number(var_core_value_sigCB88)
                });
              }
            })
          }), (0, d.jsx)(c.FormLayout, {
            label: var_core_value_sigCCAA.t("sheets-print.area.maxColumnsEachPage"),
            children: (0, d.jsx)(c.Input, {
              value: var_core_value_sigC049.maxColumnsEachPage === 1 / 0 ? "" : "" + var_core_value_sigC049.maxColumnsEachPage,
              onChange: var_core_value_sig8D65 => {
                var_core_value_sig4082.updateLayoutConfig({
                  maxColumnsEachPage: !var_core_value_sig8D65 || Number.isNaN(Number(var_core_value_sig8D65)) ? 1 / 0 : Number(var_core_value_sig8D65)
                });
              }
            })
          })]
        })]
      })
    });
  }),
  Ae = 0.1,
  je = () => {
    let [var_core_value_sig537C, var_core_value_sigBBBC] = (0, u.useState)(false),
      var_core_value_sig5440 = (0, i.useDependency)(k),
      var_core_value_sigE28B = (0, i.useDependency)(n.ICommandService),
      var_core_value_sig0FD9 = (0, i.useObservable)(var_core_value_sig5440.layoutInfos$, []),
      [var_core_value_sig5649, var_core_value_sigAF82] = (0, u.useState)(1),
      [var_core_value_sig21A2, var_core_value_sig5C1D] = (0, u.useState)(false),
      var_core_value_sig4CBA = (0, i.useDependency)(b),
      var_core_value_sig8E65 = (0, i.useObservable)(var_core_value_sig4CBA.preparing$, var_core_value_sig4CBA.preparing),
      var_core_value_sig772C = (0, i.useDependency)(n.IUniverInstanceService),
      var_core_value_sigF309 = (0, i.useDependency)(n.LocaleService),
      var_core_value_sig44F9 = (0, i.useDependency)(n.Injector),
      {
        ls: var_core_value_sigE532,
        pbk: var_core_value_sigF381
      } = (0, i.useDependency)(n.IConfigService).getConfig(e.LS_CONFIG_KEY) ?? {},
      {
        limit: var_core_value_sigCB92,
        isPro: var_core_value_sigC844
      } = (0, u.useMemo)(() => {
        let {
          page: var_core_value_sig8122,
          isPro: var_core_value_sigEDC6
        } = N(3, var_core_value_sigE532, var_core_value_sigF381);
        return {
          limit: var_core_value_sig8122,
          isPro: var_core_value_sigEDC6
        };
      }, [var_core_value_sigE532, var_core_value_sigF381]),
      var_core_value_sig2ED4 = (0, u.useRef)(null),
      var_core_value_sig0477 = (0, i.useDependency)(i.IMessageService),
      var_core_value_sig6FDF = Ce(import(`@univerjs-pro/collaboration-client`).then(var_core_value_sig611A => var_core_value_sig611A.CollaborationController, () => undefined));
    (0, u.useEffect)(() => {
      var var_core_value_sig6BD9;
      if (!var_core_value_sig6FDF) return;
      let var_core_value_sig7E56 = var_core_value_sig772C.getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"]);
      if (!var_core_value_sig7E56) return;
      let var_core_value_sig4161 = var_core_value_sig7E56.getUnitId(),
        var_core_value_sig7580 = var_core_value_sig44F9.get(var_core_value_sig6FDF, n.Quantity["OPTIONAL"]),
        var_core_value_sig1F18 = var_core_value_sig7580 == null || (var_core_value_sig6BD9 = var_core_value_sig7580.getCollabEntity(var_core_value_sig4161)) == null ? undefined : var_core_value_sig6BD9.pauseCollaboration();
      return () => {
        var_core_value_sig1F18 == null || var_core_value_sig1F18.dispose();
      };
    }, [var_core_value_sig6FDF, var_core_value_sig44F9, var_core_value_sig772C]);
    let var_core_value_sig27C4 = (0, u.useMemo)(() => oe(var_core_value_sig0FD9), [var_core_value_sig0FD9]),
      var_core_value_sig3E1A = (0, u.useMemo)(() => var_core_value_sig27C4.slice(0, var_core_value_sigCB92), [var_core_value_sig27C4, var_core_value_sigCB92]),
      var_core_value_sig7FB0 = var_core_value_sig5440.paperSize,
      var_core_value_sig5215 = Math.round(var_core_value_sig5649 * (794 / var_core_value_sig7FB0.w) * 10) / 10,
      [var_core_value_sig5204, {
        wrapperStyle: var_core_value_sig5E11,
        containerProps: var_core_value_sig4D58
      }] = (0, i.useVirtualList)(var_core_value_sig3E1A, {
        containerTarget: var_core_value_sig2ED4,
        itemHeight: var_core_value_sig7FB0.h * var_core_value_sig5215 + 28,
        overscan: 5
      }),
      var_core_value_sig2DBD = () => {
        var_core_value_sigE28B.executeCommand(I.id);
      },
      var_core_value_sig424E = () => {
        var_core_value_sig5C1D(true), var_core_value_sig0477.show({
          content: var_core_value_sigF309.t("sheets-print.header.printing"),
          type: c.MessageType["Loading"]
        }), setTimeout(() => {
          var_core_value_sigE28B.executeCommand(L.id);
        }, 300);
      },
      var_core_value_sigF481 = (0, i.useEvent)(() => {
        var_core_value_sigBBBC(true);
      });
    return (0, d.jsxs)("div", {
      className: "univer-absolute univer-inset-0 univer-z-[100] univer-box-border univer-flex univer-size-full univer-flex-col univer-overflow-hidden univer-bg-gray-100 dark:!univer-bg-gray-900",
      children: [var_core_value_sig537C && (0, d.jsx)(Ee, {
        onClose: () => var_core_value_sigBBBC(false)
      }), var_core_value_sig21A2 && (0, d.jsx)("div", {
        className: "univer-pointer-events-none univer-absolute univer-inset-0 univer-z-[1010] univer-flex univer-justify-center"
      }), (0, d.jsxs)("div", {
        className: (0, c.clsx)("univer-flex univer-h-16 univer-items-center univer-justify-between univer-bg-gray-0 univer-px-4 dark:!univer-bg-gray-900", c.borderBottomClassName),
        children: [(0, d.jsxs)("div", {
          className: "univer-ml-2 univer-text-base univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
          children: [var_core_value_sigF309.t("sheets-print.header.total"), var_core_value_sig3E1A.length, var_core_value_sigF309.t("sheets-print.header.pages")]
        }), (0, d.jsxs)("div", {
          className: "univer-flex univer-gap-2",
          children: [(0, d.jsx)(c.Button, {
            onClick: var_core_value_sig2DBD,
            children: var_core_value_sigF309.t("sheets-print.header.cancel")
          }), (0, d.jsx)(c.Button, {
            variant: "primary",
            disabled: var_core_value_sig8E65,
            onClick: var_core_value_sig424E,
            children: var_core_value_sigF309.t("sheets-print.header.next")
          })]
        })]
      }), (0, d.jsxs)("div", {
        className: "univer-flex\x20univer-flex-1\x20univer-overflow-hidden",
        children: [(0, d.jsxs)("div", {
          className: "univer-relative univer-box-border univer-flex univer-flex-1 univer-flex-col univer-overflow-hidden",
          children: [(0, d.jsx)("div", {
            ref: var_core_value_sig2ED4,
            className: (0, c.clsx)("univer-flex-1\x20univer-overflow-auto", c.scrollbarClassName),
            "aria-busy": var_core_value_sig8E65,
            ...var_core_value_sig4D58,
            children: var_core_value_sig8E65 ? (0, d.jsx)("div", {
              className: "univer-flex univer-size-full univer-items-center univer-justify-center",
              role: "status",
              "aria-label": var_core_value_sigF309.t("sheets-print.header.printing"),
              children: (0, d.jsx)(l.LoadingMultiIcon, {
                className: "univer-size-8 univer-animate-spin univer-text-gray-500",
                "aria-hidden": "true"
              })
            }) : (0, d.jsx)("div", {
              style: var_core_value_sig5E11,
              children: var_core_value_sig5204.map(var_core_value_sigD5A0 => (0, d.jsx)(Oe, {
                config: var_core_value_sigD5A0.data,
                page: var_core_value_sigD5A0.data["page"],
                previewScale: var_core_value_sig5649
              }, var_core_value_sigD5A0.data["unitId"] + ":" + var_core_value_sigD5A0.data["subUnitId"] + ":" + var_core_value_sigD5A0.data["page"] + ":" + var_core_value_sigD5A0.data["range"].startRow + ":" + var_core_value_sigD5A0.data["range"].startColumn + ":" + var_core_value_sigD5A0.data["range"].endRow + ":" + var_core_value_sigD5A0.data["range"].endColumn))
            })
          }), !var_core_value_sig8E65 && !var_core_value_sigC844 && (0, d.jsx)("div", {
            className: "univer-my-4 univer-text-center",
            children: (0, d.jsx)("a", {
              href: var_core_value_sigF309.t("sheets-print.limit.link"),
              target: "_blank",
              rel: "noreferrer noopener",
              children: var_core_value_sigF309.t("sheets-print.limit.page").replace("{limit}", "" + var_core_value_sigCB92)
            })
          }), !var_core_value_sig8E65 && !var_core_value_sig537C && (0, d.jsxs)("div", {
            className: "univer-absolute\x20univer-bottom-4\x20univer-right-4\x20univer-z-[1000]",
            children: [(0, d.jsx)("div", {
              className: "univer-z-[100] univer-mt-2 univer-flex univer-size-8 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-full univer-bg-gray-0 univer-shadow dark:!univer-bg-gray-900",
              onClick: () => {
                var_core_value_sigAF82(Math.min(var_core_value_sig5649 + Ae, 2));
              },
              children: (0, d.jsx)(l.IncreaseIcon, {})
            }), (0, d.jsx)("div", {
              className: "univer-z-[100] univer-mt-2 univer-flex univer-size-8 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-full univer-bg-gray-0 univer-shadow dark:!univer-bg-gray-900",
              onClick: () => {
                var_core_value_sigAF82(Math.max(var_core_value_sig5649 - Ae, 0.5));
              },
              children: (0, d.jsx)(l.ReduceIcon, {})
            })]
          })]
        }), (0, d.jsx)("div", {
          className: "univer-box-border univer-h-full univer-w-[312px] univer-flex-none univer-bg-gray-0 dark:!univer-bg-gray-900",
          children: (0, d.jsx)(ke, {
            onShowFooterHeaderEditor: var_core_value_sigF481
          })
        })]
      })]
    });
  },
  Me = () => {
    let var_core_value_sigD7F2 = (0, i.useDependency)(b);
    return (0, i.useObservable)(var_core_value_sigD7F2.visible$, var_core_value_sigD7F2.visible) ? (0, d.jsx)(je, {}) : null;
  },
  Ne = {
    id: F.id,
    binding: i.KeyCode["P"] | i.MetaKeys["CTRL_COMMAND"],
    preconditions: s.whenSheetEditorFocused
  };
let Q = class extends n.Disposable {
  constructor(var_core_value_sig81B2, var_core_value_sigA0A5, var_core_value_sig10AA, var_core_value_sigE6D0, var_core_value_sig8E91, var_core_value_sig00BE, var_core_value_sig7BB5, var_core_value_sig6AAD, var_core_value_sig1157, var_core_value_sigA694) {
    super(), this._printDialogService = var_core_value_sig81B2, this._commandService = var_core_value_sigA0A5, this._sheetPrintManagerService = var_core_value_sig10AA, this._sheetPrintClientService = var_core_value_sigE6D0, this._menuManagerService = var_core_value_sig8E91, this._shortcutService = var_core_value_sig00BE, this._injector = var_core_value_sig7BB5, this._univerInstanceService = var_core_value_sig6AAD, this._renderManagerService = var_core_value_sig1157, this._uiPartsService = var_core_value_sigA694, this._initCommands(), this._initUIParts(), this._initMenus(), this._initShortcuts(), this._initCommandListener(), this._initConfigChangeListener(), this._initMutationListener();
  }
  _initCommands() {
    [F, I, L, W, R, K, q].forEach(var_core_value_sig3607 => this._commandService["registerCommand"](var_core_value_sig3607));
  }
  _initUIParts() {
    this.disposeWithMe(this._uiPartsService["registerComponent"](i.BuiltInUIPart["GLOBAL"], () => (0, i.connectInjector)(Me, this._injector)));
  }
  _initShortcuts() {
    [Ne].forEach(var_core_value_sigB512 => {
      this._shortcutService["registerShortcut"](var_core_value_sigB512);
    });
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](ge);
  }
  _initConfigChangeListener() {
    this.disposeWithMe(this._printDialogService["visible$"].subscribe(var_core_value_sigF2E6 => {
      var_core_value_sigF2E6 && this._sheetPrintManagerService["reLayout"]();
    }));
  }
  _print() {
    let var_core_value_sig18E01 = this._sheetPrintManagerService["layoutInfos"],
      var_core_value_sig0428 = this._sheetPrintManagerService["renderConfig"];
    return this._sheetPrintClientService["print"](var_core_value_sig18E01, var_core_value_sig0428);
  }
  _initCommandListener() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig34C8 => {
      var_core_value_sig34C8.id === L.id && this._print();
    }));
  }
  _initMutationListener() {
    let var_core_value_sigBE07 = this._injector["get"](G);
    this.disposeWithMe(var_core_value_sigBE07.visible$["subscribe"](() => {
      let var_core_value_sigB744 = this._univerInstanceService["getCurrentUnitOfType"](2);
      if (var_core_value_sigB744) {
        let var_core_value_sig12F2 = var_core_value_sigB744.getUnitId(),
          var_core_value_sig2259 = this._renderManagerService["getRenderUnitById"](var_core_value_sig12F2);
        if (var_core_value_sig2259) {
          var var_core_value_sigEAE2;
          (var_core_value_sigEAE2 = var_core_value_sig2259.mainComponent) == null || var_core_value_sigEAE2.makeDirty();
        }
      }
    })), this.disposeWithMe(this._sheetPrintManagerService["layoutConfig$"].subscribe(() => {
      if (!var_core_value_sigBE07.visible) return;
      this._sheetPrintManagerService["reLayout"]();
      let var_core_value_sigE68A = this._univerInstanceService["getCurrentUnitOfType"](2);
      if (var_core_value_sigE68A) {
        let var_core_value_sig9E2F = var_core_value_sigE68A.getUnitId(),
          var_core_value_sigD082 = this._renderManagerService["getRenderUnitById"](var_core_value_sig9E2F);
        if (var_core_value_sigD082) {
          var var_core_value_sig3E68;
          (var_core_value_sig3E68 = var_core_value_sigD082.mainComponent) == null || var_core_value_sig3E68.makeDirty();
        }
      }
    })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sigF4C5 => {
      if (!var_core_value_sigBE07.visible || [F.id, I.id, L.id, R.id, K.id, q.id].includes(var_core_value_sigF4C5.id)) return;
      this._sheetPrintManagerService["reLayout"]();
      let var_core_value_sig5410 = this._univerInstanceService["getCurrentUnitOfType"](2);
      if (var_core_value_sig5410) {
        let var_core_value_sigDBB7 = var_core_value_sig5410.getUnitId(),
          var_core_value_sigD0A8 = this._renderManagerService["getRenderUnitById"](var_core_value_sigDBB7);
        if (var_core_value_sigD0A8) {
          var var_core_value_sig492F;
          (var_core_value_sig492F = var_core_value_sigD0A8.mainComponent) == null || var_core_value_sig492F.makeDirty();
        }
      }
    }));
  }
};
Q = O([D(0, b), D(1, n.ICommandService), D(2, k), D(3, (0, n.Inject)(U)), D(4, i.IMenuManagerService), D(5, i.IShortcutService), D(6, (0, n.Inject)(n.Injector)), D(7, n.IUniverInstanceService), D(8, o.IRenderManagerService), D(9, i.IUIPartsService)], Q);
let $ = class extends n.Plugin {
  constructor(var_core_value_sig555F = ye, var_core_value_sig3D6F, var_core_value_sig336C, var_core_value_sig6E68) {
    super(), this._config = var_core_value_sig555F, this._injector = var_core_value_sig3D6F, this._configService = var_core_value_sig336C, this._renderManagerService = var_core_value_sig6E68;
    let {
      menu: var_core_value_sig8DFE,
      ...var_core_value_sig48EA
    } = (0, n.merge)({}, ye, this._config);
    var_core_value_sig8DFE && this._configService["setConfig"]("menu", var_core_value_sig8DFE, {
      merge: true
    }), this._configService["setConfig"]("sheets-print.config", var_core_value_sig48EA);
  }
  onReady() {
    this._injector["has"](t.IPrintPreparationService) || this._injector["add"]([t.IPrintPreparationService, {
      useClass: t.PrintPreparationService
    }]), (0, n.registerDependencies)(this._injector, [[k, {
      useClass: M
    }], [b, {
      useClass: x
    }], [G, {
      useClass: le
    }], [U], [J], [Q]]), this.disposeWithMe(this._renderManagerService["registerRenderModule"](n.UniverInstanceType["UNIVER_SHEET"], [Y])), (0, n.touchDependencies)(this._injector, [[J], [Q]]);
  }
};
y($, "pluginName", "SHEET_PRINT_PLUGIN"), y($, "packageName", _e), y($, "version", ve), y($, "type", n.UniverInstanceType["UNIVER_SHEET"]), $ = O([(0, n.DependentOn)(e.UniverLicensePlugin, o.UniverRenderEnginePlugin, r.UniverSheetsPlugin, s.UniverSheetsUIPlugin), D(1, (0, n.Inject)(n.Injector)), D(2, n.IConfigService), D(3, o.IRenderManagerService)], $), exports.CancelSheetPrintOperation = I, exports.ConfirmSheetPrintOperation = L, exports.ISheetPrintManagerService = k, exports.PrintArea = S, exports.PrintFreeze = w, exports.PrintHeaderFooter = C, exports.PrintHeaderFooterSymbol = T, exports.SheetPrintCanvasView = H, Object.defineProperty(exports, "SheetPrintClientService", {
  enumerable: true,
  get: function () {
    return U;
  }
}), exports.SheetPrintOpenOperation = F, exports.SheetScreenShotOperation = W, exports.SheetsPrintMenuSchema = ge, Object.defineProperty(exports, "UniverSheetsPrintPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.defaultHeaderFooter = E, exports.hasPrintFacadePermission = P;
