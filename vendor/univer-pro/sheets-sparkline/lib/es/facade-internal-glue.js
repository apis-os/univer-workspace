import { AddSheetSparklineCommand, RemoveSheetSparklineCommand, SetSheetSparklineCommand, SparklineDataSourceModel, SparklineTypeEnum } from "@univerjs-pro/sheets-sparkline";
import { ICommandService, Inject, Injector, Tools } from "@univerjs/core";
import { FWorksheet } from "@univerjs/sheets/facade";
import { FEnum, FEventName, FUniver } from "@univerjs/core/facade";
import { SheetsSelectionsService } from "@univerjs/sheets";
import { g } from "./facade-sheets-sparkline-fsparkline.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 } from "./facade-sheets-sparkline-fsparkline-group.js";
function m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150);
  };
}
function h(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159;
}
g = h([m(5, Inject(Injector))], g);
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = h([m(5, Inject(Injector))], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168);
var v = class extends FWorksheet {
  addSparkline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
    if (this._commandService["syncExecuteCommand"](AddSheetSparklineCommand.id, {
      sourceRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
      targetRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105,
      targetInfo: {
        unitId: this._workbook["getUnitId"](),
        subUnitId: this._worksheet["getSheetId"]()
      },
      config: {
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106
      }
    })) {
      let {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646,
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105[0];
      return this.getSparklineByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647);
    }
  }
  getAllSubSparkline() {
    return this._injector["get"](SparklineDataSourceModel).getSubUnitSparkline(this._workbook["getUnitId"](), this._worksheet["getSheetId"]());
  }
  composeSparkline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = this._injector["get"](SparklineDataSourceModel),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D++) {
      let {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635,
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631++) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622++) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getSparkline(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getSparklineById(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462);
            break;
          }
        }
      }
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 && this._commandService["executeCommand"](SetSheetSparklineCommand.id, {
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110,
      combine: true,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112,
      isChangeDataSource: false
    });
  }
  unComposeSparkline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = this._injector["get"](SparklineDataSourceModel),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1++) {
      let {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639,
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632++) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623++) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.getSparkline(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.getSparklineById(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463);
            break;
          }
        }
      }
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 || this._commandService["executeCommand"](SetSheetSparklineCommand.id, {
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116,
      unCombine: true,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118,
      isChangeDataSource: false
    });
  }
  getSparklineByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = this._injector["get"](SparklineDataSourceModel),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 = this._workbook["getUnitId"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 = this._worksheet["getSheetId"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.getSparkline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) return this._injector["createInstance"](g, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123);
  }
  getSparklineGroupByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = this._injector["get"](SparklineDataSourceModel),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 = this._workbook["getUnitId"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = this._worksheet["getSheetId"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.getSparkline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139) return this._injector["createInstance"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135);
  }
};
FWorksheet.extend(v);
var y = class extends FEnum {
  get SparklineTypeEnum() {
    return SparklineTypeEnum;
  }
};
FEnum.extend(y);
var b = class extends FEventName {
  get SheetSparklineChanged() {
    return "SheetSparklineChanged";
  }
};
FEventName.extend(b);
var x = class extends FUniver {
  _initialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.get(ICommandService);
    this.disposeWithMe(this.registerEventHandler(this.Event["SheetSparklineChanged"], () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.id === SetSheetSparklineCommand.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.params;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.isChangeDataSource) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 = this.getActiveWorkbook(),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.getActiveSheet();
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) return;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.getId(),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.getSheetId(),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = this._injector["get"](SheetsSelectionsService),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = this._injector["get"](SparklineDataSourceModel),
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.ranges) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.getCurrentSelections().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.range),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.getSparklineCache().sparklineAnchorMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627),
            var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set();
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => {
            let {
              startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469,
              endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610,
              startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611,
              endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468;
            for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464++) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461++) {
              var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613;
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.matrix["getValue"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.groupId;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
            }
          });
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
            workbook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624,
            worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625,
            sparklines: Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.getSparklineById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621)
          };
          if (this.fireEvent(this.Event["SheetSparklineChanged"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.cancel) throw Error("Sheet create canceled by facade api.");
        }
      }
    })));
  }
};
FUniver.extend(x);
