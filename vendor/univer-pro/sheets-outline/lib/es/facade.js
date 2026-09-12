import {
  AddDimensionOutlineCommand as _0x52b1ea,
  ClearDimensionOutlinesCommand as _0x3128b4,
  DimensionOutlineAxis as _0xec9ea6,
  DimensionOutlineErrorReason as _0x583df5,
  RemoveDimensionOutlineCommand as _0x2b0904,
  SetDimensionOutlineCollapsedCommand as _0x6cf218,
  SheetsOutlineModel as _0x10049b,
} from "@univerjs-pro/sheets-outline";
import { FEnum as _0x7f3e79 } from "@univerjs/core/facade";
import { FWorksheet as _0x6dc6c2 } from "@univerjs/sheets/facade";
var l = class extends _0x7f3e79 {
  get DimensionOutlineAxis() {
    return _0xec9ea6;
  }
  get DimensionOutlineErrorReason() {
    return _0x583df5;
  }
};
_0x7f3e79.extend(l);
var u = class extends _0x6dc6c2 {
  addRowOutline(_0x42839f, _0x1113c9) {
    return this._addDimensionOutline(_0xec9ea6.ROW, _0x42839f, _0x1113c9);
  }
  addColumnOutline(_0x40831e, _0x49566b) {
    return this._addDimensionOutline(_0xec9ea6.COLUMN, _0x40831e, _0x49566b);
  }
  removeDimensionOutline(_0xda9d92) {
    return (
      this._commandService["syncExecuteCommand"](_0x2b0904.id, {
        unitId: this._workbook["getUnitId"](),
        subUnitId: this._worksheet["getSheetId"](),
        outlineId: _0xda9d92,
      }),
      this
    );
  }
  setDimensionOutlineCollapsed(_0x43fe57, _0x14ec7b) {
    return (
      this._commandService["syncExecuteCommand"](_0x6cf218.id, {
        unitId: this._workbook["getUnitId"](),
        subUnitId: this._worksheet["getSheetId"](),
        outlineId: _0x43fe57,
        collapsed: _0x14ec7b,
      }),
      this
    );
  }
  clearDimensionOutlines(_0x5a00c0, _0x73b594, _0x2c7be5) {
    return (
      this._commandService["syncExecuteCommand"](_0x3128b4.id, {
        unitId: this._workbook["getUnitId"](),
        subUnitId: this._worksheet["getSheetId"](),
        axis: _0x5a00c0,
        start: _0x73b594,
        end: _0x2c7be5,
      }),
      this
    );
  }
  getDimensionOutlines(_0xc012dc) {
    let _0x14bb30 = this._injector["get"](_0x10049b).getOutlines(
      this._workbook["getUnitId"](),
      this._worksheet["getSheetId"](),
    );
    return _0xc012dc
      ? _0x14bb30.filter((_0x12d7c8) => _0x12d7c8.axis === _0xc012dc)
      : _0x14bb30;
  }
  _addDimensionOutline(_0x12c1c3, _0x10398a, _0x583562) {
    return (
      this._commandService["syncExecuteCommand"](_0x52b1ea.id, {
        unitId: this._workbook["getUnitId"](),
        subUnitId: this._worksheet["getSheetId"](),
        axis: _0x12c1c3,
        start: _0x10398a,
        end: _0x10398a + _0x583562 - 1,
      }),
      this
    );
  }
};
_0x6dc6c2.extend(u);
export {};
