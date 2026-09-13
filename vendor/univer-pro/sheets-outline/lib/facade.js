import { AddDimensionOutlineCommand as var_core_value_sig0D69, ClearDimensionOutlinesCommand as var_core_value_sig480E, DimensionOutlineAxis as var_core_value_sig26DB, DimensionOutlineErrorReason as var_core_value_sigF0F9, RemoveDimensionOutlineCommand as var_core_value_sig1A0F, SetDimensionOutlineCollapsedCommand as var_core_value_sigFBA4, SheetsOutlineModel as var_core_value_sig4383 } from "@univerjs-pro/sheets-outline";
import { FEnum as var_core_value_sig186C } from "@univerjs/core/facade";
import { FWorksheet as var_core_value_sigD955 } from "@univerjs/sheets/facade";
var l = class extends var_core_value_sig186C {
  get DimensionOutlineAxis() {
    return var_core_value_sig26DB;
  }
  get DimensionOutlineErrorReason() {
    return var_core_value_sigF0F9;
  }
};
var_core_value_sig186C.extend(l);
var u = class extends var_core_value_sigD955 {
  addRowOutline(var_core_value_sig2AD8, var_core_value_sig2AD0) {
    return this._addDimensionOutline(var_core_value_sig26DB.ROW, var_core_value_sig2AD8, var_core_value_sig2AD0);
  }
  addColumnOutline(var_core_value_sig3EEE, var_core_value_sigBC46) {
    return this._addDimensionOutline(var_core_value_sig26DB.COLUMN, var_core_value_sig3EEE, var_core_value_sigBC46);
  }
  removeDimensionOutline(var_core_value_sig3D7D) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig1A0F.id, {
      unitId: this._workbook["getUnitId"](),
      subUnitId: this._worksheet["getSheetId"](),
      outlineId: var_core_value_sig3D7D
    }), this;
  }
  setDimensionOutlineCollapsed(var_core_value_sig27E5, var_core_value_sig8061) {
    return this._commandService["syncExecuteCommand"](var_core_value_sigFBA4.id, {
      unitId: this._workbook["getUnitId"](),
      subUnitId: this._worksheet["getSheetId"](),
      outlineId: var_core_value_sig27E5,
      collapsed: var_core_value_sig8061
    }), this;
  }
  clearDimensionOutlines(var_core_value_sig4D4C, var_core_value_sigC9E0, var_core_value_sig76BA) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig480E.id, {
      unitId: this._workbook["getUnitId"](),
      subUnitId: this._worksheet["getSheetId"](),
      axis: var_core_value_sig4D4C,
      start: var_core_value_sigC9E0,
      end: var_core_value_sig76BA
    }), this;
  }
  getDimensionOutlines(var_core_value_sigFBFA) {
    let var_core_value_sigF602 = this._injector["get"](var_core_value_sig4383).getOutlines(this._workbook["getUnitId"](), this._worksheet["getSheetId"]());
    return var_core_value_sigFBFA ? var_core_value_sigF602.filter(var_core_value_sig7524 => var_core_value_sig7524.axis === var_core_value_sigFBFA) : var_core_value_sigF602;
  }
  _addDimensionOutline(var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig2BCF) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig0D69.id, {
      unitId: this._workbook["getUnitId"](),
      subUnitId: this._worksheet["getSheetId"](),
      axis: var_core_value_sig1BBD,
      start: var_core_value_sigF704,
      end: var_core_value_sigF704 + var_core_value_sig2BCF - 1
    }), this;
  }
};
var_core_value_sigD955.extend(u);
export {};
