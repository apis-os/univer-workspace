import { AddSheetSparklineCommand, RemoveSheetSparklineCommand, SetSheetSparklineCommand, SparklineDataSourceModel, SparklineTypeEnum } from "@univerjs-pro/sheets-sparkline";
import { ICommandService, Inject, Injector, Tools } from "@univerjs/core";
import { FWorksheet } from "@univerjs/sheets/facade";
import { FEnum, FEventName, FUniver } from "@univerjs/core/facade";
import { SheetsSelectionsService } from "@univerjs/sheets";
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) {
    this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, this._subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, this._groupId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, this._row = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, this._col = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681;
  }
  changeDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = this._injector["get"](SparklineDataSourceModel),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = this._injector["get"](ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.getSparklineById(this._unitId, this._subUnitId, this._groupId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) return;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692,
      isChangeDataSource: true,
      changeDataSourceInfo: {
        groupId: this._groupId,
        resetType: "group",
        sourceRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688,
        targetRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689,
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
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.syncExecuteCommand(SetSheetSparklineCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6), this._row = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689[0].startRow, this._col = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689[0].startColumn, this;
  }
  removeSparklineGroup() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 = this._injector["get"](ICommandService),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
        isSingle: false,
        ranges: [{
          startRow: this._row,
          startColumn: this._col,
          endRow: this._row,
          endColumn: this._col
        }]
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.syncExecuteCommand(RemoveSheetSparklineCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8);
  }
  setConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = this._injector["get"](SparklineDataSourceModel).getSparklineById(this._unitId, this._subUnitId, this._groupId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101) {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
        config: {
          config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100,
          sparklines: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.sparklines
        },
        isChangeDataSource: false
      };
      this._injector["get"](ICommandService).syncExecuteCommand(SetSheetSparklineCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1);
    }
    return this;
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 as FSparklineGroup };
