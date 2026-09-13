import { PageElementTypeEnum, plainTextToSlideDocumentData, slideDocumentDataToPlainText } from '@univerjs-pro/slides';
import { DEFAULT_SLIDE_TABLE_COLUMN_COUNT, DEFAULT_SLIDE_TABLE_ELEMENT_LEFT, DEFAULT_SLIDE_TABLE_ELEMENT_ROTATION, DEFAULT_SLIDE_TABLE_ELEMENT_TOP, DEFAULT_SLIDE_TABLE_ROW_COUNT, DeleteSlideTableColumnsCommand, DeleteSlideTableRowsCommand, InsertSlideTableColumnsCommand, InsertSlideTableCommand, InsertSlideTableRowsCommand, MergeSlideTableCellsCommand, RemoveSlideTableCommand, SlideTableBorderDashEnum, SlideTableBorderPresetEnum, SlideTableFillTypeEnum, SlideTableGradientFillTypeEnum, SlideTablePictureFillModeEnum, SlideTableResourceService, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum, UnmergeSlideTableCellsCommand, UpdateSlideTableCommand, buildBorderPresetPatch, buildSlideTable, iterateSelectedSlideTableCells, mergeSlideTableCellStyle, normalizeSlideTableCellRange, resizeSlideTableGrid, resolveSlideTableBuildOptions } from '@univerjs-pro/slides-table';
import { FPageElement, FSlide } from '@univerjs-pro/slides/facade';
import { ICommandService, IPermissionService, RichTextValue, Tools, createParagraphId, generateRandomId } from '@univerjs/core';
import { FBase, FEnum } from '@univerjs/core/facade';
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476) {
  '@babel/helpers - typeof';

  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 && typeof Symbol == 'function' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 !== Symbol.prototype ? 'symbol' : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670;
  }, B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476);
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479) {
  if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478) != 'object' || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 || "default");
    if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478);
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, 'string');
  return B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 + '';
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491, {
    'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490;
}
var W = class extends FBase {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677;
      super(), this.unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, this.subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, U(this, 'table', {}), U(this, 'element', {}), U(this, "_values", undefined), U(this, "_textData", undefined), U(this, "_rows", 0), U(this, "_columns", 0), U(this, "_rowHeight", undefined), U(this, "_columnWidth", undefined), U(this, "_cellStyles", []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.table && (this.table = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.table)), this.table['id'] || (this.table['id'] = generateRandomId(6)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.element && (this.element = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.element)), this.element['id'] || (this.element['id'] = generateRandomId(6)), this.element["type"] = PageElementTypeEnum.Table, this.element["tableId"] = this.table['id'], this._rows = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = this.table['rows']) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.length) ?? DEFAULT_SLIDE_TABLE_ROW_COUNT, this._columns = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 = this.table["columns"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.length) ?? DEFAULT_SLIDE_TABLE_COLUMN_COUNT;
    }
    setValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684) {
      return this._values = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624]), this._handleMaxRowsColumns(this._rows, this._columns), this;
    }
    setTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) {
      return this._textData = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686), this._handleMaxRowsColumns(this._rows, this._columns), this;
    }
    setRichTextValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) {
      return this.setTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.getData())));
    }
    setRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690) {
      return this._handleMaxRowsColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, this._columns), this;
    }
    setColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) {
      return this._handleMaxRowsColumns(this._rows, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692), this;
    }
    setAbsolutePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695) {
      return this.element["transform"] = {
        ...this.element['transform'],
        'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694,
        'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695
      }, this;
    }
    setSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699) {
      return this.element["transform"] = {
        ...this.element["transform"],
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699
      }, this;
    }
    setRotation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102) {
      return this.element['transform'] = {
        ...this.element['transform'],
        'rotation': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102
      }, this;
    }
    setPlaceholder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) {
      return this.element['placeholder'] = {
        ...this.element['placeholder'],
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104
      }, this;
    }
    setRowHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
      return this._rowHeight = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106, this;
    }
    setColumnWidth(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) {
      return this._columnWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, this;
    }
    setCellStyles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110) {
      return this._cellStyles = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, this;
    }
    setOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112) {
      return this.table["options"] = {
        ...this.table['options'],
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112
      }, this;
    }
    setName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) {
      return this.table['name'] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, this;
    }
    setDescription(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116) {
      return this.table["description"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, this;
    }
    setStyleId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) {
      return this.table['styleId'] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, this;
    }
    setCustom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120) {
      return this.table["custom"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120, this;
    }
    build() {
      let {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122,
        columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123,
        resolvedOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124
      } = buildSlideTable({
        'tableId': this.table['id'],
        'values': this._values,
        'textData': this._textData,
        'rows': this._rows,
        'columns': this._columns,
        'rowHeight': this._rowHeight,
        'columnWidth': this._columnWidth,
        'cellStyles': this._cellStyles
      });
      return this.table["rows"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, this.table["columns"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123, this.element["transform"] = this._resolveElementTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124), {
        'unitId': this.unitId,
        'subUnitId': this.subUnitId,
        'createOptions': {
          'id': this.table['id'],
          'rows': this._rows,
          'columns': this._columns,
          'name': this.table["name"],
          'description': this.table["description"],
          'styleId': this.table["styleId"],
          'columnWidth': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.columnWidth,
          'rowHeight': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.rowHeight,
          'options': this.table["options"]
        },
        'table': this.table,
        'element': this.element
      };
    }
    _resolveElementTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = this.element["transform"],
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.columns * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.columnWidth,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.rows * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.rowHeight;
      return {
        'left': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.left) ?? DEFAULT_SLIDE_TABLE_ELEMENT_LEFT,
        'top': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.top) ?? DEFAULT_SLIDE_TABLE_ELEMENT_TOP,
        'width': Math.max((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.width) ?? 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D),
        'height': Math.max((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.height) ?? 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1),
        'rotation': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.rotation) ?? DEFAULT_SLIDE_TABLE_ELEMENT_ROTATION
      };
    }
    _handleMaxRowsColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = this._values) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.length) ?? 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = 0;
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 of this._values ?? []) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.length);
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = this._textData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135.length) ?? 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = 0;
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 of this._textData ?? []) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.length);
      this._rows = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6), this._columns = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7);
    }
  },
  G = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142) {
      this._table = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140, this._row = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, this._column = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142;
    }
    getTable() {
      return this._table;
    }
    getRowIndex() {
      return this._row;
    }
    getColumnIndex() {
      return this._column;
    }
    getData() {
      return this._table["getCellData"](this._row, this._column);
    }
    getText() {
      return this._table['getCellText'](this._row, this._column);
    }
    getTextData() {
      return this._table["getCellTextData"](this._row, this._column);
    }
    getRichText() {
      return this._table['getCellRichText'](this._row, this._column);
    }
    getStyle() {
      return this._table['getCellStyle'](this._row, this._column);
    }
    setText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) {
      return this._table["setCellText"](this._row, this._column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146);
    }
    setTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148) {
      return this._table["setCellTextData"](this._row, this._column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148);
    }
    setRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150) {
      return this._table["setCellRichText"](this._row, this._column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150);
    }
    setStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152) {
      return this._table["setCellStyle"](this._table["getCellRange"](this._row, this._column), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152);
    }
    setFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) {
      return this._table['setCellFill'](this._table["getCellRange"](this._row, this._column), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154);
    }
    setBackgroundColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156) {
      return this._table["setCellBackground"](this._table['getCellRange'](this._row, this._column), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156);
    }
    clearBackground() {
      return this.setFill(undefined);
    }
    setBorder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158) {
      return this._table["setBorder"](this._table['getCellRange'](this._row, this._column), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158);
    }
    mergeTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161) {
      return this._table["mergeCells"]({
        'startRow': this._row,
        'endRow': this._row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 - 1,
        'startColumn': this._column,
        'endColumn': this._column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 - 1
      });
    }
    unmerge() {
      return this._table['unmergeCell'](this._row, this._column);
    }
  };
export { W as FSlideTableBuilder, G as FSlideTableCell };
