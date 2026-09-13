import { AddSheetSparklineCommand as var_core_value_sig223F, RemoveSheetSparklineCommand as var_core_value_sigD749, SetSheetSparklineCommand as var_core_value_sigCFFA, SparklineDataSourceModel as var_core_value_sig58C1, SparklineTypeEnum as var_core_value_sig5090 } from "@univerjs-pro/sheets-sparkline";
import { ICommandService as var_core_value_sigC368, Inject as var_core_value_sigAD56, Injector as var_core_value_sigDB4A, Tools as var_core_value_sig6418 } from "@univerjs/core";
import { FWorksheet as var_core_value_sig1896 } from "@univerjs/sheets/facade";
import { FEnum as var_core_value_sig0285, FEventName as var_core_value_sig777D, FUniver as var_core_value_sig3F4C } from "@univerjs/core/facade";
import { SheetsSelectionsService as var_core_value_sigD65A } from "@univerjs/sheets";
function m(var_core_value_sig2B65, var_core_value_sigD7EA) {
  return function (var_core_value_sigD082, var_core_value_sigDBB7) {
    var_core_value_sigD7EA(var_core_value_sigD082, var_core_value_sigDBB7, var_core_value_sig2B65);
  };
}
function h(var_core_value_sigB33B, var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sigEF3E) {
  var var_core_value_sig273D = arguments.length,
    var_core_value_sig9A0D = var_core_value_sig273D < 3 ? var_core_value_sig24B9 : var_core_value_sigEF3E === null ? var_core_value_sigEF3E = Object.getOwnPropertyDescriptor(var_core_value_sig24B9, var_core_value_sigE627) : var_core_value_sigEF3E,
    var_core_value_sigA319;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig9A0D = Reflect.decorate(var_core_value_sigB33B, var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sigEF3E);else {
    for (var var_core_value_sig2D58 = var_core_value_sigB33B.length - 1; var_core_value_sig2D58 >= 0; var_core_value_sig2D58--) (var_core_value_sigA319 = var_core_value_sigB33B[var_core_value_sig2D58]) && (var_core_value_sig9A0D = (var_core_value_sig273D < 3 ? var_core_value_sigA319(var_core_value_sig9A0D) : var_core_value_sig273D > 3 ? var_core_value_sigA319(var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sig9A0D) : var_core_value_sigA319(var_core_value_sig24B9, var_core_value_sigE627)) || var_core_value_sig9A0D);
  }
  return var_core_value_sig273D > 3 && var_core_value_sig9A0D && Object.defineProperty(var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sig9A0D), var_core_value_sig9A0D;
}
let g = class {
  constructor(var_core_value_sigD0A8, var_core_value_sigF4B9, var_core_value_sig5CEE, var_core_value_sigE92A, var_core_value_sig362B, var_core_value_sig5CA5) {
    this._unitId = var_core_value_sigD0A8, this._subUnitId = var_core_value_sigF4B9, this._groupId = var_core_value_sig5CEE, this._row = var_core_value_sigE92A, this._col = var_core_value_sig362B, this._injector = var_core_value_sig5CA5;
  }
  changeDataSource(var_core_value_sigE90F, var_core_value_sigEFD4) {
    let var_core_value_sig861B = this._injector["get"](var_core_value_sig58C1),
      var_core_value_sig5237 = this._injector["get"](var_core_value_sigC368),
      var_core_value_sigBB00 = var_core_value_sig861B.getSparklineById(this._unitId, this._subUnitId, this._groupId);
    if (!var_core_value_sigBB00) return;
    let var_core_value_sig7E54 = {
      config: var_core_value_sigBB00,
      isChangeDataSource: true,
      changeDataSourceInfo: {
        groupId: this._groupId,
        resetType: "item",
        sourceRanges: [var_core_value_sigE90F],
        targetRanges: [var_core_value_sigEFD4],
        primary: {
          startRow: this._row,
          startColumn: this._col,
          endRow: this._row,
          endColumn: this._col,
          actualRow: this._row,
          actualColumn: this._col,
          isMerged: false,
          isMergedMainCell: false
        }
      }
    };
    return var_core_value_sig5237.syncExecuteCommand(var_core_value_sigCFFA.id, var_core_value_sig7E54), this._row = var_core_value_sigEFD4.startRow, this._col = var_core_value_sigEFD4.startColumn, this;
  }
  removeSparkline() {
    let var_core_value_sig9A8D = this._injector["get"](var_core_value_sigC368),
      var_core_value_sigC259 = {
        isSingle: true,
        ranges: [{
          startRow: this._row,
          startColumn: this._col,
          endRow: this._row,
          endColumn: this._col
        }]
      };
    var_core_value_sig9A8D.syncExecuteCommand(var_core_value_sigD749.id, var_core_value_sigC259);
  }
};
g = h([m(5, var_core_value_sigAD56(var_core_value_sigDB4A))], g);
let _ = class {
  constructor(var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA, var_core_value_sig50AF) {
    this._unitId = var_core_value_sig9C9F, this._subUnitId = var_core_value_sigFDEA, this._groupId = var_core_value_sig86D0, this._row = var_core_value_sig4CD2, this._col = var_core_value_sig48CA, this._injector = var_core_value_sig50AF;
  }
  changeDataSource(var_core_value_sigA942, var_core_value_sigA621) {
    let var_core_value_sigBBFF = this._injector["get"](var_core_value_sig58C1),
      var_core_value_sig8889 = this._injector["get"](var_core_value_sigC368),
      var_core_value_sig32F8 = var_core_value_sigBBFF.getSparklineById(this._unitId, this._subUnitId, this._groupId);
    if (!var_core_value_sig32F8) return;
    let var_core_value_sig5B67 = {
      config: var_core_value_sig32F8,
      isChangeDataSource: true,
      changeDataSourceInfo: {
        groupId: this._groupId,
        resetType: "group",
        sourceRanges: var_core_value_sigA942,
        targetRanges: var_core_value_sigA621,
        primary: {
          startRow: this._row,
          startColumn: this._col,
          endRow: this._row,
          endColumn: this._col,
          actualRow: this._row,
          actualColumn: this._col,
          isMerged: false,
          isMergedMainCell: false
        }
      }
    };
    return var_core_value_sig8889.syncExecuteCommand(var_core_value_sigCFFA.id, var_core_value_sig5B67), this._row = var_core_value_sigA621[0].startRow, this._col = var_core_value_sigA621[0].startColumn, this;
  }
  removeSparklineGroup() {
    let var_core_value_sig1758 = this._injector["get"](var_core_value_sigC368),
      var_core_value_sig4805 = {
        isSingle: false,
        ranges: [{
          startRow: this._row,
          startColumn: this._col,
          endRow: this._row,
          endColumn: this._col
        }]
      };
    var_core_value_sig1758.syncExecuteCommand(var_core_value_sigD749.id, var_core_value_sig4805);
  }
  setConfig(var_core_value_sigE67E) {
    let var_core_value_sig2902 = this._injector["get"](var_core_value_sig58C1).getSparklineById(this._unitId, this._subUnitId, this._groupId);
    if (var_core_value_sig2902) {
      let var_core_value_sigE154 = {
        config: {
          config: var_core_value_sigE67E,
          sparklines: var_core_value_sig2902.sparklines
        },
        isChangeDataSource: false
      };
      this._injector["get"](var_core_value_sigC368).syncExecuteCommand(var_core_value_sigCFFA.id, var_core_value_sigE154);
    }
    return this;
  }
};
_ = h([m(5, var_core_value_sigAD56(var_core_value_sigDB4A))], _);
var v = class extends var_core_value_sig1896 {
  addSparkline(var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig2809) {
    if (this._commandService["syncExecuteCommand"](var_core_value_sig223F.id, {
      sourceRanges: var_core_value_sig9989,
      targetRanges: var_core_value_sig698E,
      targetInfo: {
        unitId: this._workbook["getUnitId"](),
        subUnitId: this._worksheet["getSheetId"]()
      },
      config: {
        type: var_core_value_sig2809
      }
    })) {
      let {
        startRow: var_core_value_sig4632,
        startColumn: var_core_value_sig12F2
      } = var_core_value_sig698E[0];
      return this.getSparklineByCell(var_core_value_sig4632, var_core_value_sig12F2);
    }
  }
  getAllSubSparkline() {
    return this._injector["get"](var_core_value_sig58C1).getSubUnitSparkline(this._workbook["getUnitId"](), this._worksheet["getSheetId"]());
  }
  composeSparkline(var_core_value_sig2DAB) {
    let var_core_value_sig877E = this._injector["get"](var_core_value_sig58C1),
      var_core_value_sig20C8;
    for (let var_core_value_sig2259 = 0; var_core_value_sig2259 < var_core_value_sig2DAB.length; var_core_value_sig2259++) {
      let {
        startRow: var_core_value_sig9572,
        endRow: var_core_value_sigD873,
        startColumn: var_core_value_sigA12B,
        endColumn: var_core_value_sigF230
      } = var_core_value_sig2DAB[var_core_value_sig2259];
      for (let var_core_value_sig8178 = var_core_value_sig9572; var_core_value_sig8178 <= var_core_value_sigD873; var_core_value_sig8178++) for (let var_core_value_sig0D69 = var_core_value_sigA12B; var_core_value_sig0D69 <= var_core_value_sigF230; var_core_value_sig0D69++) {
        let var_core_value_sig3D7D = var_core_value_sig877E.getSparkline(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), var_core_value_sig8178, var_core_value_sig0D69);
        if (var_core_value_sig3D7D) {
          let var_core_value_sig2AD0 = var_core_value_sig877E.getSparklineById(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), var_core_value_sig3D7D);
          if (var_core_value_sig2AD0) {
            var_core_value_sig20C8 = var_core_value_sig6418.deepClone(var_core_value_sig2AD0);
            break;
          }
        }
      }
    }
    var_core_value_sig20C8 && this._commandService["executeCommand"](var_core_value_sigCFFA.id, {
      ranges: var_core_value_sig2DAB,
      combine: true,
      config: var_core_value_sig20C8,
      isChangeDataSource: false
    });
  }
  unComposeSparkline(var_core_value_sigE9A7) {
    let var_core_value_sigBECE = this._injector["get"](var_core_value_sig58C1),
      var_core_value_sig1B22;
    for (let var_core_value_sig9E2F = 0; var_core_value_sig9E2F < var_core_value_sigE9A7.length; var_core_value_sig9E2F++) {
      let {
        startRow: var_core_value_sig09B8,
        endRow: var_core_value_sig6F91,
        startColumn: var_core_value_sigF9C7,
        endColumn: var_core_value_sig8895
      } = var_core_value_sigE9A7[var_core_value_sig9E2F];
      for (let var_core_value_sigE9ED = var_core_value_sig09B8; var_core_value_sigE9ED <= var_core_value_sig6F91; var_core_value_sigE9ED++) for (let var_core_value_sig480E = var_core_value_sigF9C7; var_core_value_sig480E <= var_core_value_sig8895; var_core_value_sig480E++) {
        let var_core_value_sig27E5 = var_core_value_sigBECE.getSparkline(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), var_core_value_sigE9ED, var_core_value_sig480E);
        if (var_core_value_sig27E5) {
          let var_core_value_sig3EEE = var_core_value_sigBECE.getSparklineById(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), var_core_value_sig27E5);
          if (var_core_value_sig3EEE) {
            var_core_value_sig1B22 = var_core_value_sig6418.deepClone(var_core_value_sig3EEE);
            break;
          }
        }
      }
    }
    var_core_value_sig1B22 || this._commandService["executeCommand"](var_core_value_sigCFFA.id, {
      ranges: var_core_value_sigE9A7,
      unCombine: true,
      config: var_core_value_sig1B22,
      isChangeDataSource: false
    });
  }
  getSparklineByCell(var_core_value_sig7F72, var_core_value_sig7B2A) {
    let var_core_value_sig06CD = this._injector["get"](var_core_value_sig58C1),
      var_core_value_sigA5F1 = this._workbook["getUnitId"](),
      var_core_value_sig97A2 = this._worksheet["getSheetId"](),
      var_core_value_sig07E9 = var_core_value_sig06CD.getSparkline(var_core_value_sigA5F1, var_core_value_sig97A2, var_core_value_sig7F72, var_core_value_sig7B2A);
    if (var_core_value_sig07E9) return this._injector["createInstance"](g, var_core_value_sigA5F1, var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig7F72, var_core_value_sig7B2A);
  }
  getSparklineGroupByCell(var_core_value_sig4F59, var_core_value_sigF564) {
    let var_core_value_sig8CFA = this._injector["get"](var_core_value_sig58C1),
      var_core_value_sig2E11 = this._workbook["getUnitId"](),
      var_core_value_sig5B69 = this._worksheet["getSheetId"](),
      var_core_value_sigB098 = var_core_value_sig8CFA.getSparkline(var_core_value_sig2E11, var_core_value_sig5B69, var_core_value_sig4F59, var_core_value_sigF564);
    if (var_core_value_sigB098) return this._injector["createInstance"](_, var_core_value_sig2E11, var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sig4F59, var_core_value_sigF564);
  }
};
var_core_value_sig1896.extend(v);
var y = class extends var_core_value_sig0285 {
  get SparklineTypeEnum() {
    return var_core_value_sig5090;
  }
};
var_core_value_sig0285.extend(y);
var b = class extends var_core_value_sig777D {
  get SheetSparklineChanged() {
    return "SheetSparklineChanged";
  }
};
var_core_value_sig777D.extend(b);
var x = class extends var_core_value_sig3F4C {
  _initialize(var_core_value_sigCE71) {
    let var_core_value_sig21D8 = var_core_value_sigCE71.get(var_core_value_sigC368);
    this.disposeWithMe(this.registerEventHandler(this.Event["SheetSparklineChanged"], () => var_core_value_sig21D8.onCommandExecuted(var_core_value_sigC80B => {
      if (var_core_value_sigC80B.id === var_core_value_sigCFFA.id) {
        let var_core_value_sigB577 = var_core_value_sigC80B.params;
        if (!var_core_value_sigB577.isChangeDataSource) {
          var var_core_value_sig284F;
          let var_core_value_sig26DB = this.getActiveWorkbook(),
            var_core_value_sigF0F9 = var_core_value_sig26DB == null ? undefined : var_core_value_sig26DB.getActiveSheet();
          if (!var_core_value_sig26DB || !var_core_value_sigF0F9) return;
          let var_core_value_sig1A0F = var_core_value_sig26DB.getId(),
            var_core_value_sigFBA4 = var_core_value_sigF0F9.getSheetId(),
            var_core_value_sig4383 = this._injector["get"](var_core_value_sigD65A),
            var_core_value_sig186C = this._injector["get"](var_core_value_sig58C1),
            var_core_value_sigD955 = (var_core_value_sigB577 == null ? undefined : var_core_value_sigB577.ranges) ?? var_core_value_sig4383.getCurrentSelections().map(var_core_value_sig8061 => var_core_value_sig8061.range),
            var_core_value_sig48BD = (var_core_value_sig284F = var_core_value_sig186C.getSparklineCache().sparklineAnchorMap["get"](var_core_value_sig1A0F)) == null ? undefined : var_core_value_sig284F.get(var_core_value_sigFBA4),
            var_core_value_sig429F = new Set();
          var_core_value_sigD955.forEach(var_core_value_sig4D4C => {
            let {
              startRow: var_core_value_sigC9E0,
              endRow: var_core_value_sig76BA,
              startColumn: var_core_value_sigFBFA,
              endColumn: var_core_value_sigF602
            } = var_core_value_sig4D4C;
            for (let var_core_value_sigBC46 = var_core_value_sigC9E0; var_core_value_sigBC46 <= var_core_value_sig76BA; var_core_value_sigBC46++) for (let var_core_value_sig2AD8 = var_core_value_sigFBFA; var_core_value_sig2AD8 <= var_core_value_sigF602; var_core_value_sig2AD8++) {
              var var_core_value_sig1BBD;
              let var_core_value_sig7524 = var_core_value_sig48BD == null || (var_core_value_sig1BBD = var_core_value_sig48BD.matrix["getValue"](var_core_value_sigBC46, var_core_value_sig2AD8)) == null ? undefined : var_core_value_sig1BBD.groupId;
              var_core_value_sig7524 && var_core_value_sig429F.add(var_core_value_sig7524);
            }
          });
          let var_core_value_sigF62A = {
            workbook: var_core_value_sig26DB,
            worksheet: var_core_value_sigF0F9,
            sparklines: Array.from(var_core_value_sig429F).map(var_core_value_sigF704 => var_core_value_sig186C.getSparklineById(var_core_value_sig1A0F, var_core_value_sigFBA4, var_core_value_sigF704)).filter(var_core_value_sig2BCF => !!var_core_value_sig2BCF)
          };
          if (this.fireEvent(this.Event["SheetSparklineChanged"], var_core_value_sigF62A), var_core_value_sigF62A.cancel) throw Error("Sheet create canceled by facade api.");
        }
      }
    })));
  }
};
var_core_value_sig3F4C.extend(x);
export { g as FSparkline, _ as FSparklineGroup };
