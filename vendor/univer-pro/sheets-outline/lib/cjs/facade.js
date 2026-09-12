let e = require("@univerjs-pro/sheets-outline"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/sheets/facade");
var r = class extends t.FEnum {
  get DimensionOutlineAxis() {
    return e.DimensionOutlineAxis;
  }
  get DimensionOutlineErrorReason() {
    return e.DimensionOutlineErrorReason;
  }
};
t.FEnum["extend"](r);
var i = class extends n.FWorksheet {
  addRowOutline(_0x258399, _0x29d0fe) {
    return this._addDimensionOutline(
      e.DimensionOutlineAxis["ROW"],
      _0x258399,
      _0x29d0fe,
    );
  }
  addColumnOutline(_0x1a6409, _0x318d21) {
    return this._addDimensionOutline(
      e.DimensionOutlineAxis["COLUMN"],
      _0x1a6409,
      _0x318d21,
    );
  }
  removeDimensionOutline(_0x341b73) {
    return (
      this._commandService["syncExecuteCommand"](
        e.RemoveDimensionOutlineCommand["id"],
        {
          unitId: this._workbook["getUnitId"](),
          subUnitId: this._worksheet["getSheetId"](),
          outlineId: _0x341b73,
        },
      ),
      this
    );
  }
  setDimensionOutlineCollapsed(_0x2d2050, _0x18f4d4) {
    return (
      this._commandService["syncExecuteCommand"](
        e.SetDimensionOutlineCollapsedCommand["id"],
        {
          unitId: this._workbook["getUnitId"](),
          subUnitId: this._worksheet["getSheetId"](),
          outlineId: _0x2d2050,
          collapsed: _0x18f4d4,
        },
      ),
      this
    );
  }
  clearDimensionOutlines(_0x3aebac, _0x494e4c, _0x230cd7) {
    return (
      this._commandService["syncExecuteCommand"](
        e.ClearDimensionOutlinesCommand["id"],
        {
          unitId: this._workbook["getUnitId"](),
          subUnitId: this._worksheet["getSheetId"](),
          axis: _0x3aebac,
          start: _0x494e4c,
          end: _0x230cd7,
        },
      ),
      this
    );
  }
  getDimensionOutlines(_0x2e9cd7) {
    let _0x3246ea = this._injector["get"](e.SheetsOutlineModel).getOutlines(
      this._workbook["getUnitId"](),
      this._worksheet["getSheetId"](),
    );
    return _0x2e9cd7
      ? _0x3246ea.filter((_0x85a983) => _0x85a983.axis === _0x2e9cd7)
      : _0x3246ea;
  }
  _addDimensionOutline(_0x35e06c, _0x193509, _0x26d538) {
    return (
      this._commandService["syncExecuteCommand"](
        e.AddDimensionOutlineCommand["id"],
        {
          unitId: this._workbook["getUnitId"](),
          subUnitId: this._worksheet["getSheetId"](),
          axis: _0x35e06c,
          start: _0x193509,
          end: _0x193509 + _0x26d538 - 1,
        },
      ),
      this
    );
  }
};
n.FWorksheet["extend"](i);
