import { ISheetExchangeService as var_core_value_sig76BA } from "@univerjs-pro/sheets-exchange-client";
import { FUniver as var_core_value_sigFBFA } from "@univerjs/core/facade";
var n = class extends var_core_value_sigFBFA {
  importSheetToUnitIdAsync(var_core_value_sig7524) {
    return this._injector["get"](var_core_value_sig76BA).importSheetToUnitId(var_core_value_sig7524);
  }
  importSheetToSnapshotAsync(var_core_value_sig2AD8) {
    return this._injector["get"](var_core_value_sig76BA).importSheetToSnapshot(var_core_value_sig2AD8);
  }
  exportSheetByUnitIdAsync(var_core_value_sig2AD0, var_core_value_sig3EEE, var_core_value_sigBC46) {
    return this._injector["get"](var_core_value_sig76BA).exportSheetByUnitId(var_core_value_sig2AD0, var_core_value_sig3EEE, var_core_value_sigBC46);
  }
  exportSheetBySnapshotAsync(var_core_value_sig3D7D, var_core_value_sig27E5, var_core_value_sig8061) {
    return this._injector["get"](var_core_value_sig76BA).exportSheetBySnapshot(var_core_value_sig3D7D, var_core_value_sig27E5, var_core_value_sig8061);
  }
  transformSnapshotJsonToWorkbookDataAsync(var_core_value_sig4D4C) {
    return this._injector["get"](var_core_value_sig76BA).transformSnapshotJsonToWorkbookData(var_core_value_sig4D4C);
  }
  transformWorkbookDataToSnapshotJsonAsync(var_core_value_sigC9E0) {
    return this._injector["get"](var_core_value_sig76BA).transformWorkbookDataToSnapshotJson(var_core_value_sigC9E0);
  }
};
var_core_value_sigFBFA.extend(n);
export {};
