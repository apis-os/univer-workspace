import { AddSheetSparklineCommand, RemoveSheetSparklineCommand, SetSheetSparklineCommand, SparklineDataSourceModel, SparklineTypeEnum } from "@univerjs-pro/sheets-sparkline";
import { ICommandService, Inject, Injector, Tools } from "@univerjs/core";
import { FWorksheet } from "@univerjs/sheets/facade";
import { FEnum, FEventName, FUniver } from "@univerjs/core/facade";
import { SheetsSelectionsService } from "@univerjs/sheets";
let g = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657) {
    this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, this._subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, this._groupId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, this._row = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, this._col = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657;
  }
  changeDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = this._injector["get"](SparklineDataSourceModel),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = this._injector["get"](ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.getSparklineById(this._unitId, this._subUnitId, this._groupId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668) return;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668,
      isChangeDataSource: true,
      changeDataSourceInfo: {
        groupId: this._groupId,
        resetType: "item",
        sourceRanges: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664],
        targetRanges: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665],
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
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.syncExecuteCommand(SetSheetSparklineCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2), this._row = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.startRow, this._col = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.startColumn, this;
  }
  removeSparkline() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = this._injector["get"](ICommandService),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
        isSingle: true,
        ranges: [{
          startRow: this._row,
          startColumn: this._col,
          endRow: this._row,
          endColumn: this._col
        }]
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.syncExecuteCommand(RemoveSheetSparklineCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4);
  }
};
export { g as FSparkline };
