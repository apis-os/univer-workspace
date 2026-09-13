import { PageElementTypeEnum as var_core_value_sig9D15, plainTextToSlideDocumentData as var_core_value_sigB785, slideDocumentDataToPlainText as var_core_value_sig130F } from '@univerjs-pro/slides';
import { DEFAULT_SLIDE_TABLE_COLUMN_COUNT as var_core_value_sigC0E3, DEFAULT_SLIDE_TABLE_ELEMENT_LEFT as var_core_value_sig52F7, DEFAULT_SLIDE_TABLE_ELEMENT_ROTATION as var_core_value_sig866F, DEFAULT_SLIDE_TABLE_ELEMENT_TOP as var_core_value_sigDE3D, DEFAULT_SLIDE_TABLE_ROW_COUNT as var_core_value_sigF175, DeleteSlideTableColumnsCommand as var_core_value_sig6A18, DeleteSlideTableRowsCommand as var_core_value_sig4E3D, InsertSlideTableColumnsCommand as var_core_value_sig49B0, InsertSlideTableCommand as var_core_value_sig2547, InsertSlideTableRowsCommand as var_core_value_sigBCA9, MergeSlideTableCellsCommand as var_core_value_sig4CDF, RemoveSlideTableCommand as var_core_value_sig3F79, SlideTableBorderDashEnum as var_core_value_sig880E, SlideTableBorderPresetEnum as var_core_value_sigC9ED, SlideTableFillTypeEnum as var_core_value_sigB57B, SlideTableGradientFillTypeEnum as var_core_value_sig780B, SlideTablePictureFillModeEnum as var_core_value_sig7D1B, SlideTableResourceService as var_core_value_sig7BE0, SlideTableTextDirectionEnum as var_core_value_sig7D40, SlideTableVerticalAlignEnum as var_core_value_sig6C7E, UnmergeSlideTableCellsCommand as var_core_value_sig68BE, UpdateSlideTableCommand as var_core_value_sig04C6, buildBorderPresetPatch as var_core_value_sigCA05, buildSlideTable as var_core_value_sig2F2B, iterateSelectedSlideTableCells as var_core_value_sig70AF, mergeSlideTableCellStyle as var_core_value_sigD04E, normalizeSlideTableCellRange as var_core_value_sigB99B, resizeSlideTableGrid as var_core_value_sig5A75, resolveSlideTableBuildOptions as var_core_value_sig7BAF } from '@univerjs-pro/slides-table';
import { FPageElement as var_core_value_sig8F69, FSlide as var_core_value_sig6884 } from '@univerjs-pro/slides/facade';
import { ICommandService as var_core_value_sig066E, IPermissionService as var_core_value_sig9B0D, RichTextValue as var_core_value_sig3D2C, Tools as var_core_value_sigC56D, createParagraphId as var_core_value_sig3A17, generateRandomId as var_core_value_sig938F } from '@univerjs/core';
import { FBase as var_core_value_sigD948, FEnum as var_core_value_sigBE5E } from '@univerjs/core/facade';
function B(var_core_value_sig1F64) {
  '@babel/helpers - typeof';

  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigE92A) {
    return typeof var_core_value_sigE92A;
  } : function (var_core_value_sig362B) {
    return var_core_value_sig362B && typeof Symbol == 'function' && var_core_value_sig362B.constructor === Symbol && var_core_value_sig362B !== Symbol.prototype ? 'symbol' : typeof var_core_value_sig362B;
  }, B(var_core_value_sig1F64);
}
;
function V(var_core_value_sigDD1C, var_core_value_sig2C39) {
  if (B(var_core_value_sigDD1C) != 'object' || !var_core_value_sigDD1C) return var_core_value_sigDD1C;
  var var_core_value_sigB7D1 = var_core_value_sigDD1C[Symbol.toPrimitive];
  if (var_core_value_sigB7D1 !== undefined) {
    var var_core_value_sig64F0 = var_core_value_sigB7D1.call(var_core_value_sigDD1C, var_core_value_sig2C39 || "default");
    if (B(var_core_value_sig64F0) != "object") return var_core_value_sig64F0;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig2C39 === "string" ? String : Number)(var_core_value_sigDD1C);
}
;
function H(var_core_value_sig85B1) {
  var var_core_value_sig3141 = V(var_core_value_sig85B1, 'string');
  return B(var_core_value_sig3141) == "symbol" ? var_core_value_sig3141 : var_core_value_sig3141 + '';
}
;
function U(var_core_value_sig2162, var_core_value_sig2EAD, var_core_value_sig6774) {
  return (var_core_value_sig2EAD = H(var_core_value_sig2EAD)) in var_core_value_sig2162 ? Object.defineProperty(var_core_value_sig2162, var_core_value_sig2EAD, {
    'value': var_core_value_sig6774,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_core_value_sig2162[var_core_value_sig2EAD] = var_core_value_sig6774, var_core_value_sig2162;
}
var W = class extends var_core_value_sigD948 {
    constructor(var_core_value_sig5CA5, var_core_value_sigE90F, var_core_value_sigEFD4, var_core_value_sig861B) {
      var var_core_value_sig5237, var_core_value_sigBB00;
      super(), this.unitId = var_core_value_sig5CA5, this.subUnitId = var_core_value_sigE90F, this._injector = var_core_value_sigEFD4, U(this, 'table', {}), U(this, 'element', {}), U(this, "_values", undefined), U(this, "_textData", undefined), U(this, "_rows", 0), U(this, "_columns", 0), U(this, "_rowHeight", undefined), U(this, "_columnWidth", undefined), U(this, "_cellStyles", []), var_core_value_sig861B != null && var_core_value_sig861B.table && (this.table = var_core_value_sigC56D.deepClone(var_core_value_sig861B.table)), this.table['id'] || (this.table['id'] = var_core_value_sig938F(6)), var_core_value_sig861B != null && var_core_value_sig861B.element && (this.element = var_core_value_sigC56D.deepClone(var_core_value_sig861B.element)), this.element['id'] || (this.element['id'] = var_core_value_sig938F(6)), this.element["type"] = var_core_value_sig9D15.Table, this.element["tableId"] = this.table['id'], this._rows = ((var_core_value_sig5237 = this.table['rows']) == null ? undefined : var_core_value_sig5237.length) ?? var_core_value_sigF175, this._columns = ((var_core_value_sigBB00 = this.table["columns"]) == null ? undefined : var_core_value_sigBB00.length) ?? var_core_value_sigC0E3;
    }
    setValues(var_core_value_sig7E54) {
      return this._values = var_core_value_sig7E54.map(var_core_value_sigF704 => [...var_core_value_sigF704]), this._handleMaxRowsColumns(this._rows, this._columns), this;
    }
    setTextData(var_core_value_sig9A8D) {
      return this._textData = var_core_value_sigC56D.deepClone(var_core_value_sig9A8D), this._handleMaxRowsColumns(this._rows, this._columns), this;
    }
    setRichTextValues(var_core_value_sigC259) {
      return this.setTextData(var_core_value_sigC259.map(var_core_value_sig2BCF => var_core_value_sig2BCF.map(var_core_value_sig7524 => var_core_value_sig7524.getData())));
    }
    setRows(var_core_value_sig9C9F) {
      return this._handleMaxRowsColumns(var_core_value_sig9C9F, this._columns), this;
    }
    setColumns(var_core_value_sigFDEA) {
      return this._handleMaxRowsColumns(this._rows, var_core_value_sigFDEA), this;
    }
    setAbsolutePosition(var_core_value_sig86D0, var_core_value_sig4CD2) {
      return this.element["transform"] = {
        ...this.element['transform'],
        'left': var_core_value_sig86D0,
        'top': var_core_value_sig4CD2
      }, this;
    }
    setSize(var_core_value_sig48CA, var_core_value_sig50AF) {
      return this.element["transform"] = {
        ...this.element["transform"],
        'width': var_core_value_sig48CA,
        'height': var_core_value_sig50AF
      }, this;
    }
    setRotation(var_core_value_sigA942) {
      return this.element['transform'] = {
        ...this.element['transform'],
        'rotation': var_core_value_sigA942
      }, this;
    }
    setPlaceholder(var_core_value_sigA621) {
      return this.element['placeholder'] = {
        ...this.element['placeholder'],
        ...var_core_value_sigA621
      }, this;
    }
    setRowHeight(var_core_value_sigBBFF) {
      return this._rowHeight = var_core_value_sigBBFF, this;
    }
    setColumnWidth(var_core_value_sig8889) {
      return this._columnWidth = var_core_value_sig8889, this;
    }
    setCellStyles(var_core_value_sig32F8) {
      return this._cellStyles = var_core_value_sig32F8, this;
    }
    setOptions(var_core_value_sig5B67) {
      return this.table["options"] = {
        ...this.table['options'],
        ...var_core_value_sig5B67
      }, this;
    }
    setName(var_core_value_sig1758) {
      return this.table['name'] = var_core_value_sig1758, this;
    }
    setDescription(var_core_value_sig4805) {
      return this.table["description"] = var_core_value_sig4805, this;
    }
    setStyleId(var_core_value_sigE67E) {
      return this.table['styleId'] = var_core_value_sigE67E, this;
    }
    setCustom(var_core_value_sig2902) {
      return this.table["custom"] = var_core_value_sig2902, this;
    }
    build() {
      let {
        rows: var_core_value_sig9989,
        columns: var_core_value_sig698E,
        resolvedOptions: var_core_value_sig2809
      } = var_core_value_sig2F2B({
        'tableId': this.table['id'],
        'values': this._values,
        'textData': this._textData,
        'rows': this._rows,
        'columns': this._columns,
        'rowHeight': this._rowHeight,
        'columnWidth': this._columnWidth,
        'cellStyles': this._cellStyles
      });
      return this.table["rows"] = var_core_value_sig9989, this.table["columns"] = var_core_value_sig698E, this.element["transform"] = this._resolveElementTransform(var_core_value_sig2809), {
        'unitId': this.unitId,
        'subUnitId': this.subUnitId,
        'createOptions': {
          'id': this.table['id'],
          'rows': this._rows,
          'columns': this._columns,
          'name': this.table["name"],
          'description': this.table["description"],
          'styleId': this.table["styleId"],
          'columnWidth': var_core_value_sig2809.columnWidth,
          'rowHeight': var_core_value_sig2809.rowHeight,
          'options': this.table["options"]
        },
        'table': this.table,
        'element': this.element
      };
    }
    _resolveElementTransform(var_core_value_sig2DAB) {
      let var_core_value_sig877E = this.element["transform"],
        var_core_value_sig20C8 = var_core_value_sig2DAB.columns * var_core_value_sig2DAB.columnWidth,
        var_core_value_sigE9A7 = var_core_value_sig2DAB.rows * var_core_value_sig2DAB.rowHeight;
      return {
        'left': (var_core_value_sig877E == null ? undefined : var_core_value_sig877E.left) ?? var_core_value_sig52F7,
        'top': (var_core_value_sig877E == null ? undefined : var_core_value_sig877E.top) ?? var_core_value_sigDE3D,
        'width': Math.max((var_core_value_sig877E == null ? undefined : var_core_value_sig877E.width) ?? 0, var_core_value_sig20C8),
        'height': Math.max((var_core_value_sig877E == null ? undefined : var_core_value_sig877E.height) ?? 0, var_core_value_sigE9A7),
        'rotation': (var_core_value_sig877E == null ? undefined : var_core_value_sig877E.rotation) ?? var_core_value_sig866F
      };
    }
    _handleMaxRowsColumns(var_core_value_sigBECE, var_core_value_sig1B22) {
      var var_core_value_sig7F72, var_core_value_sig7B2A;
      let var_core_value_sig06CD = ((var_core_value_sig7F72 = this._values) == null ? undefined : var_core_value_sig7F72.length) ?? 0,
        var_core_value_sigA5F1 = 0;
      for (let var_core_value_sig0D69 of this._values ?? []) var_core_value_sigA5F1 = Math.max(var_core_value_sigA5F1, var_core_value_sig0D69.length);
      let var_core_value_sig97A2 = ((var_core_value_sig7B2A = this._textData) == null ? undefined : var_core_value_sig7B2A.length) ?? 0,
        var_core_value_sig07E9 = 0;
      for (let var_core_value_sig480E of this._textData ?? []) var_core_value_sig07E9 = Math.max(var_core_value_sig07E9, var_core_value_sig480E.length);
      this._rows = Math.max(var_core_value_sigBECE, var_core_value_sig06CD, var_core_value_sig97A2), this._columns = Math.max(var_core_value_sig1B22, var_core_value_sigA5F1, var_core_value_sig07E9);
    }
  },
  G = class {
    constructor(var_core_value_sig4F59, var_core_value_sigF564, var_core_value_sig8CFA) {
      this._table = var_core_value_sig4F59, this._row = var_core_value_sigF564, this._column = var_core_value_sig8CFA;
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
    setText(var_core_value_sig2E11) {
      return this._table["setCellText"](this._row, this._column, var_core_value_sig2E11);
    }
    setTextData(var_core_value_sig5B69) {
      return this._table["setCellTextData"](this._row, this._column, var_core_value_sig5B69);
    }
    setRichText(var_core_value_sigB098) {
      return this._table["setCellRichText"](this._row, this._column, var_core_value_sigB098);
    }
    setStyle(var_core_value_sigCE71) {
      return this._table["setCellStyle"](this._table["getCellRange"](this._row, this._column), var_core_value_sigCE71);
    }
    setFill(var_core_value_sig21D8) {
      return this._table['setCellFill'](this._table["getCellRange"](this._row, this._column), var_core_value_sig21D8);
    }
    setBackgroundColor(var_core_value_sig2B65) {
      return this._table["setCellBackground"](this._table['getCellRange'](this._row, this._column), var_core_value_sig2B65);
    }
    clearBackground() {
      return this.setFill(undefined);
    }
    setBorder(var_core_value_sigD7EA) {
      return this._table["setBorder"](this._table['getCellRange'](this._row, this._column), var_core_value_sigD7EA);
    }
    mergeTo(var_core_value_sigB33B, var_core_value_sig24B9) {
      return this._table["mergeCells"]({
        'startRow': this._row,
        'endRow': this._row + var_core_value_sigB33B - 1,
        'startColumn': this._column,
        'endColumn': this._column + var_core_value_sig24B9 - 1
      });
    }
    unmerge() {
      return this._table['unmergeCell'](this._row, this._column);
    }
  };
function K(var_core_value_sig340D, var_core_value_sig82D4) {
  return function (var_core_value_sigE627, var_core_value_sigEF3E) {
    var_core_value_sig82D4(var_core_value_sigE627, var_core_value_sigEF3E, var_core_value_sig340D);
  };
}
;
function q(var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C) {
  var var_core_value_sigA39E = arguments.length,
    var_core_value_sigBBEE = var_core_value_sigA39E < 3 ? var_core_value_sig7DF1 : var_core_value_sig0B0C === null ? var_core_value_sig0B0C = Object.getOwnPropertyDescriptor(var_core_value_sig7DF1, var_core_value_sigDC86) : var_core_value_sig0B0C,
    var_core_value_sig011D;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigBBEE = Reflect.decorate(var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C);else {
    for (var var_core_value_sig6167 = var_core_value_sigBDE4.length - 1; var_core_value_sig6167 >= 0; var_core_value_sig6167--) (var_core_value_sig011D = var_core_value_sigBDE4[var_core_value_sig6167]) && (var_core_value_sigBBEE = (var_core_value_sigA39E < 3 ? var_core_value_sig011D(var_core_value_sigBBEE) : var_core_value_sigA39E > 3 ? var_core_value_sig011D(var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sigBBEE) : var_core_value_sig011D(var_core_value_sig7DF1, var_core_value_sigDC86)) || var_core_value_sigBBEE);
  }
  return var_core_value_sigA39E > 3 && var_core_value_sigBBEE && Object.defineProperty(var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sigBBEE), var_core_value_sigBBEE;
}
let J = class extends var_core_value_sig8F69 {
  constructor(var_core_value_sig273D, var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sig2D58, var_core_value_sig223F, var_core_value_sigD749, var_core_value_sigCFFA) {
    super(var_core_value_sig273D, var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sig2D58, var_core_value_sig223F, var_core_value_sigD749, var_core_value_sigCFFA), this.slideModel = var_core_value_sig2D58, this.injector = var_core_value_sig223F;
  }
  getTableId() {
    return this.getData().tableId;
  }
  getTableData() {
    let var_core_value_sig58C1 = this._injector["get"](var_core_value_sig7BE0).getTable(this.unitId, this.getTableId());
    if (!var_core_value_sig58C1) throw Error("Slide table resource \"" + this.getTableId() + "\" was not found.");
    return var_core_value_sig58C1;
  }
  describe() {
    let var_core_value_sig5090 = this.getTableData();
    return {
      'id': var_core_value_sig5090.id,
      'elementId': this.getId(),
      'rowCount': var_core_value_sig5090.rows["length"],
      'columnCount': var_core_value_sig5090.columns["length"],
      'name': var_core_value_sig5090.name,
      'description': var_core_value_sig5090.description,
      'styleId': var_core_value_sig5090.styleId,
      'options': {
        ...var_core_value_sig5090.options
      },
      'columns': var_core_value_sig5090.columns["map"]((var_core_value_sig26DB, var_core_value_sigF0F9) => ({
        'index': var_core_value_sigF0F9,
        'width': var_core_value_sig26DB.width
      })),
      'rows': var_core_value_sig5090.rows["map"]((var_core_value_sig1A0F, var_core_value_sigFBA4) => ({
        'index': var_core_value_sigFBA4,
        'height': var_core_value_sig1A0F.height
      })),
      'sampleRows': var_core_value_sig5090.rows["map"]((var_core_value_sig4383, var_core_value_sig186C) => var_core_value_sig5090.columns["map"]((var_core_value_sig2AD8, var_core_value_sig2AD0) => this.getCellText(var_core_value_sig186C, var_core_value_sig2AD0))).filter(var_core_value_sigD955 => var_core_value_sigD955.some(var_core_value_sig3EEE => var_core_value_sig3EEE.length > 0)).slice(0, 5)
    };
  }
  getRowCount() {
    return this.getTableData().rows['length'];
  }
  getColumnCount() {
    return this.getTableData().columns['length'];
  }
  getCell(var_core_value_sigC368, var_core_value_sigAD56) {
    var var_core_value_sigDB4A;
    return (var_core_value_sigDB4A = this.getTableData().rows[var_core_value_sigC368]) != null && var_core_value_sigDB4A.cells[var_core_value_sigAD56] ? this._injector["createInstance"](G, this, var_core_value_sigC368, var_core_value_sigAD56) : null;
  }
  getCellData(var_core_value_sig6418, var_core_value_sig1896) {
    var var_core_value_sig0285;
    let var_core_value_sig777D = (var_core_value_sig0285 = this.getTableData().rows[var_core_value_sig6418]) == null ? undefined : var_core_value_sig0285.cells[var_core_value_sig1896];
    return var_core_value_sig777D ? var_core_value_sigC56D.deepClone(var_core_value_sig777D) : null;
  }
  getCellText(var_core_value_sig3F4C, var_core_value_sigD65A) {
    var var_core_value_sig5A13;
    let var_core_value_sigF593 = (var_core_value_sig5A13 = this.getTableData().rows[var_core_value_sig3F4C]) == null || (var_core_value_sig5A13 = var_core_value_sig5A13.cells[var_core_value_sigD65A]) == null ? undefined : var_core_value_sig5A13.textData;
    return var_core_value_sigF593 ? var_core_value_sig130F(var_core_value_sigF593) : '';
  }
  getCellTextData(var_core_value_sig3607, var_core_value_sigB512) {
    var var_core_value_sigF2E6;
    let var_core_value_sig34C8 = (var_core_value_sigF2E6 = this.getTableData().rows[var_core_value_sig3607]) == null || (var_core_value_sigF2E6 = var_core_value_sigF2E6.cells[var_core_value_sigB512]) == null ? undefined : var_core_value_sigF2E6.textData;
    return var_core_value_sig34C8 ? var_core_value_sigC56D.deepClone(var_core_value_sig34C8) : undefined;
  }
  getCellRichText(var_core_value_sigB744, var_core_value_sigEAE2) {
    let var_core_value_sigE68A = this.getCellTextData(var_core_value_sigB744, var_core_value_sigEAE2);
    return var_core_value_sigE68A ? var_core_value_sig3D2C.create(var_core_value_sigE68A) : null;
  }
  getCellStyle(var_core_value_sig3E68, var_core_value_sigF4C5) {
    var var_core_value_sig5410;
    let var_core_value_sig492F = (var_core_value_sig5410 = this.getTableData().rows[var_core_value_sig3E68]) == null || (var_core_value_sig5410 = var_core_value_sig5410.cells[var_core_value_sigF4C5]) == null ? undefined : var_core_value_sig5410.style;
    return var_core_value_sig492F ? var_core_value_sigC56D.deepClone(var_core_value_sig492F) : undefined;
  }
  getTableRange() {
    return {
      'startRow': 0,
      'endRow': Math.max(0, this.getRowCount() - 1),
      'startColumn': 0,
      'endColumn': Math.max(0, this.getColumnCount() - 1)
    };
  }
  getCellRange(var_core_value_sig8EA0, var_core_value_sigA6F6) {
    return {
      'startRow': var_core_value_sig8EA0,
      'endRow': var_core_value_sig8EA0,
      'startColumn': var_core_value_sigA6F6,
      'endColumn': var_core_value_sigA6F6
    };
  }
  getRowsRange(var_core_value_sigCDDA, var_core_value_sigE243 = 1) {
    return {
      'startRow': var_core_value_sigCDDA,
      'endRow': var_core_value_sigCDDA + var_core_value_sigE243 - 1,
      'startColumn': 0,
      'endColumn': Math.max(0, this.getColumnCount() - 1)
    };
  }
  getColumnsRange(var_core_value_sig74A8, var_core_value_sig21B2 = 1) {
    return {
      'startRow': 0,
      'endRow': Math.max(0, this.getRowCount() - 1),
      'startColumn': var_core_value_sig74A8,
      'endColumn': var_core_value_sig74A8 + var_core_value_sig21B2 - 1
    };
  }
  toBuilder() {
    let var_core_value_sigDE08 = this.getTableData(),
      var_core_value_sigACCB = this.getData();
    return this._injector["createInstance"](W, this.unitId, this.subUnitId, this._injector, {
      'table': var_core_value_sigDE08,
      'element': var_core_value_sigACCB
    });
  }
  insertRowsBefore(var_core_value_sig7F33, var_core_value_sig0C53 = 1, var_core_value_sigEA04) {
    return this._injector["get"](var_core_value_sig066E).syncExecuteCommand(var_core_value_sigBCA9.id, {
      'unitId': this.unitId,
      'subUnitId': this.subUnitId,
      'elementId': this.elementId,
      'tableId': this.getTableId(),
      'rowIndex': var_core_value_sig7F33,
      'count': var_core_value_sig0C53,
      'height': var_core_value_sigEA04
    });
  }
  insertRowsAfter(var_core_value_sig7A62, var_core_value_sig8109 = 1, var_core_value_sig7565) {
    return this.insertRowsBefore(var_core_value_sig7A62 + 1, var_core_value_sig8109, var_core_value_sig7565);
  }
  appendRows(var_core_value_sigD4FB = 1, var_core_value_sig3E71) {
    return this.insertRowsBefore(this.getRowCount(), var_core_value_sigD4FB, var_core_value_sig3E71);
  }
  deleteRows(var_core_value_sig01B3, var_core_value_sig7442 = 1) {
    return this._injector['get'](var_core_value_sig066E).syncExecuteCommand(var_core_value_sig4E3D.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'startRow': var_core_value_sig01B3,
      'endRow': var_core_value_sig01B3 + var_core_value_sig7442 - 1
    });
  }
  insertColumnsBefore(var_core_value_sigDF87, var_core_value_sig9EE0 = 1, var_core_value_sigF051) {
    return this._injector["get"](var_core_value_sig066E).syncExecuteCommand(var_core_value_sig49B0.id, {
      'unitId': this.unitId,
      'subUnitId': this.subUnitId,
      'elementId': this.elementId,
      'tableId': this.getTableId(),
      'columnIndex': var_core_value_sigDF87,
      'count': var_core_value_sig9EE0,
      'width': var_core_value_sigF051
    });
  }
  insertColumnsAfter(var_core_value_sig0B45, var_core_value_sig36F8 = 1, var_core_value_sig03E1) {
    return this.insertColumnsBefore(var_core_value_sig0B45 + 1, var_core_value_sig36F8, var_core_value_sig03E1);
  }
  appendColumns(var_core_value_sigBB57 = 1, var_core_value_sig7C4A) {
    return this.insertColumnsBefore(this.getColumnCount(), var_core_value_sigBB57, var_core_value_sig7C4A);
  }
  deleteColumns(var_core_value_sigE799, var_core_value_sigB601 = 1) {
    return this._injector["get"](var_core_value_sig066E).syncExecuteCommand(var_core_value_sig6A18.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'startColumn': var_core_value_sigE799,
      'endColumn': var_core_value_sigE799 + var_core_value_sigB601 - 1
    });
  }
  mergeCells(var_core_value_sig8B71) {
    return this._injector['get'](var_core_value_sig066E).syncExecuteCommand(var_core_value_sig4CDF.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'range': var_core_value_sigB99B(var_core_value_sig8B71)
    });
  }
  unmergeCell(var_core_value_sigAEFB, var_core_value_sig826B) {
    return this._injector['get'](var_core_value_sig066E).syncExecuteCommand(var_core_value_sig68BE.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'row': var_core_value_sigAEFB,
      'column': var_core_value_sig826B
    });
  }
  remove() {
    return this._injector["get"](var_core_value_sig066E).syncExecuteCommand(var_core_value_sig3F79.id, {
      'unitId': this.unitId,
      'subUnitId': this.subUnitId,
      'tableId': this.getTableId(),
      'elementId': this.getId()
    });
  }
  setCellText(var_core_value_sigCF89, var_core_value_sig00CB, var_core_value_sig77EE) {
    return this.setCellTextData(var_core_value_sigCF89, var_core_value_sig00CB, var_core_value_sigB785(var_core_value_sig77EE, {
      'id': 'SLIDE_TABLE_CELL_' + this.getTableId() + '_' + var_core_value_sigCF89 + '_' + var_core_value_sig00CB
    }));
  }
  setCellTextData(var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig8721) {
    return this._updateRows(var_core_value_sig48BD => {
      var var_core_value_sig429F;
      let var_core_value_sigF62A = (var_core_value_sig429F = var_core_value_sig48BD[var_core_value_sig9F76]) == null ? undefined : var_core_value_sig429F.cells[var_core_value_sigB008];
      return var_core_value_sigF62A ? (var_core_value_sigF62A.textData = var_core_value_sigC56D.deepClone(var_core_value_sig8721), true) : false;
    });
  }
  setCellRichText(var_core_value_sig08BA, var_core_value_sigDBB5, var_core_value_sigCFAC) {
    return this.setCellTextData(var_core_value_sig08BA, var_core_value_sigDBB5, var_core_value_sigCFAC.getData());
  }
  setCellStyle(var_core_value_sig237B, var_core_value_sigFEAB) {
    return this._updateRows(var_core_value_sig8178 => {
      let var_core_value_sigE9ED = false;
      return var_core_value_sig70AF(var_core_value_sig8178, var_core_value_sig237B, var_core_value_sigBC46 => {
        var_core_value_sigBC46.style = var_core_value_sigD04E(var_core_value_sigBC46.style, var_core_value_sigFEAB), var_core_value_sigE9ED = true;
      }), var_core_value_sigE9ED;
    });
  }
  setCellFill(var_core_value_sigE347, var_core_value_sig3C5B) {
    return this.setCellStyle(var_core_value_sigE347, {
      'fill': var_core_value_sig3C5B
    });
  }
  setCellBackground(var_core_value_sig200B, var_core_value_sig3863) {
    return this.setCellFill(var_core_value_sig200B, {
      'color': var_core_value_sig3863,
      'alpha': 1
    });
  }
  clearCellBackground(var_core_value_sigC97C) {
    return this.setCellFill(var_core_value_sigC97C, undefined);
  }
  setTableBackground(var_core_value_sigC4B1) {
    return this.setCellBackground(this.getTableRange(), var_core_value_sigC4B1);
  }
  setBorder(var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937 = var_core_value_sigC9ED.All) {
    return this._updateRows(var_core_value_sigB577 => {
      let {
        changed: var_core_value_sig9572
      } = var_core_value_sigCA05(var_core_value_sigB577, var_core_value_sig1BD9, var_core_value_sigA937, var_core_value_sigE43E);
      return var_core_value_sig9572;
    });
  }
  setTableBorder(var_core_value_sigCAD5, var_core_value_sigE503 = var_core_value_sigC9ED.All) {
    return this.setBorder(this.getTableRange(), var_core_value_sigCAD5, var_core_value_sigE503);
  }
  setCellHorizontalAlign(var_core_value_sig48DD, var_core_value_sig5E6A) {
    return this._updateRows(var_core_value_sigD873 => {
      let var_core_value_sigA12B = false;
      return var_core_value_sig70AF(var_core_value_sigD873, var_core_value_sig48DD, (var_core_value_sig3D7D, var_core_value_sig27E5, var_core_value_sig8061) => {
        var_core_value_sig3D7D.textData = Y(var_core_value_sig3D7D.textData, var_core_value_sig5E6A, "SLIDE_TABLE_CELL_" + this.getTableId() + '_' + var_core_value_sig27E5 + '_' + var_core_value_sig8061), var_core_value_sigA12B = true;
      }), var_core_value_sigA12B;
    });
  }
  setCellVerticalAlign(var_core_value_sigB7FC, var_core_value_sig9CD9) {
    return this.setCellStyle(var_core_value_sigB7FC, {
      'verticalAlign': var_core_value_sig9CD9
    });
  }
  setCellTextDirection(var_core_value_sigFD0C, var_core_value_sig849B) {
    return this.setCellStyle(var_core_value_sigFD0C, {
      'textDirection': var_core_value_sig849B
    });
  }
  setCellTextStyle(var_core_value_sig5F1A, var_core_value_sigB455) {
    return this._updateRows(var_core_value_sigF230 => {
      let var_core_value_sig09B8 = false;
      return var_core_value_sig70AF(var_core_value_sigF230, var_core_value_sig5F1A, (var_core_value_sig4D4C, var_core_value_sigC9E0, var_core_value_sig76BA) => {
        var_core_value_sig4D4C.textData = X(var_core_value_sig4D4C.textData, var_core_value_sigB455, "SLIDE_TABLE_CELL_" + this.getTableId() + '_' + var_core_value_sigC9E0 + '_' + var_core_value_sig76BA), var_core_value_sig09B8 = true;
      }), var_core_value_sig09B8;
    });
  }
  setCellTextColor(var_core_value_sig5241, var_core_value_sigC6E5) {
    return this.setCellTextStyle(var_core_value_sig5241, {
      'cl': {
        'rgb': var_core_value_sigC6E5
      }
    });
  }
  setCellTextFill(var_core_value_sigCEFB, var_core_value_sig1537) {
    return this._updateRows(var_core_value_sig6F91 => {
      let var_core_value_sigF9C7 = false;
      return var_core_value_sig70AF(var_core_value_sig6F91, var_core_value_sigCEFB, (var_core_value_sigFBFA, var_core_value_sigF602, var_core_value_sig1BBD) => {
        var_core_value_sigFBFA.textData = Z(var_core_value_sigFBFA.textData, var_core_value_sig1537, 'SLIDE_TABLE_CELL_' + this.getTableId() + '_' + var_core_value_sigF602 + '_' + var_core_value_sig1BBD), var_core_value_sigF9C7 = true;
      }), var_core_value_sigF9C7;
    });
  }
  setRowHeight(var_core_value_sigE4C6, var_core_value_sig4313) {
    return this._updateRows(var_core_value_sig8895 => {
      let var_core_value_sigC80B = var_core_value_sig8895[var_core_value_sigE4C6];
      return var_core_value_sigC80B ? (var_core_value_sigC80B.height = var_core_value_sig4313, true) : false;
    });
  }
  setColumnWidth(var_core_value_sigFC87, var_core_value_sig156F) {
    let var_core_value_sigDD51 = var_core_value_sigC56D.deepClone(this.getTableData().columns);
    return var_core_value_sigDD51[var_core_value_sigFC87] ? (var_core_value_sigDD51[var_core_value_sigFC87].width = var_core_value_sig156F, this._updateTable({
      'columns': var_core_value_sigDD51
    })) : false;
  }
  resize(var_core_value_sigF057, var_core_value_sig72F6) {
    let var_core_value_sig9FBA = var_core_value_sig5A75(this.getTableData(), var_core_value_sigF057, var_core_value_sig72F6);
    return this._updateTable({
      'rows': var_core_value_sig9FBA.rows,
      'columns': var_core_value_sig9FBA.columns
    });
  }
  distributeRows(var_core_value_sigFE01 = 0, var_core_value_sigA2CE = this.getRowCount()) {
    let var_core_value_sig1975 = var_core_value_sigC56D.deepClone(this.getTableData().rows),
      var_core_value_sig6EA1 = Math.min(var_core_value_sig1975.length - 1, var_core_value_sigFE01 + var_core_value_sigA2CE - 1),
      var_core_value_sig029F = var_core_value_sig1975.slice(var_core_value_sigFE01, var_core_value_sig6EA1 + 1);
    if (!var_core_value_sig029F.length) return false;
    let var_core_value_sig3767 = var_core_value_sig029F.reduce((var_core_value_sig284F, var_core_value_sigE154) => var_core_value_sig284F + (var_core_value_sigE154.height ?? 24), 0) / var_core_value_sig029F.length;
    for (let var_core_value_sig4632 = var_core_value_sigFE01; var_core_value_sig4632 <= var_core_value_sig6EA1; var_core_value_sig4632 += 1) var_core_value_sig1975[var_core_value_sig4632].height = var_core_value_sig3767;
    return this._updateTable({
      'rows': var_core_value_sig1975
    });
  }
  distributeColumns(var_core_value_sig670B = 0, var_core_value_sig6912 = this.getColumnCount()) {
    let var_core_value_sigE235 = var_core_value_sigC56D.deepClone(this.getTableData().columns),
      var_core_value_sig7664 = Math.min(var_core_value_sigE235.length - 1, var_core_value_sig670B + var_core_value_sig6912 - 1),
      var_core_value_sig2281 = var_core_value_sigE235.slice(var_core_value_sig670B, var_core_value_sig7664 + 1);
    if (!var_core_value_sig2281.length) return false;
    let var_core_value_sig5E86 = var_core_value_sig2281.reduce((var_core_value_sig12F2, var_core_value_sig2259) => var_core_value_sig12F2 + var_core_value_sig2259.width, 0) / var_core_value_sig2281.length;
    for (let var_core_value_sig9E2F = var_core_value_sig670B; var_core_value_sig9E2F <= var_core_value_sig7664; var_core_value_sig9E2F += 1) var_core_value_sigE235[var_core_value_sig9E2F].width = var_core_value_sig5E86;
    return this._updateTable({
      'columns': var_core_value_sigE235
    });
  }
  setOptions(var_core_value_sig6998) {
    return this._updateTable({
      'options': var_core_value_sig6998
    });
  }
  setTableStyle(var_core_value_sigF639) {
    let var_core_value_sigEAE5 = !Object.prototype["hasOwnProperty"].call(var_core_value_sigF639, 'fill') || this.setCellFill(this.getTableRange(), var_core_value_sigF639.fill),
      var_core_value_sigE94C = !var_core_value_sigF639.border || this.setTableBorder(var_core_value_sigF639.border),
      var_core_value_sig6D47 = !var_core_value_sigF639.options || this.setOptions(var_core_value_sigF639.options);
    return var_core_value_sigEAE5 && var_core_value_sigE94C && var_core_value_sig6D47;
  }
  setTableName(var_core_value_sigCB82) {
    return this._updateTable({
      'name': var_core_value_sigCB82
    });
  }
  setTableDescription(var_core_value_sigCF4E) {
    return this._updateTable({
      'description': var_core_value_sigCF4E
    });
  }
  setStyleId(var_core_value_sig6CAD) {
    return this._updateTable({
      'styleId': var_core_value_sig6CAD
    });
  }
  setCustom(var_core_value_sig8CF5) {
    return this._updateTable({
      'custom': var_core_value_sig8CF5
    });
  }
  _updateTable(var_core_value_sigDDD7) {
    return this._injector["get"](var_core_value_sig066E).syncExecuteCommand(var_core_value_sig04C6.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'patch': var_core_value_sigDDD7
    });
  }
  _updateRows(var_core_value_sigB2CE) {
    let var_core_value_sig443C = var_core_value_sigC56D.deepClone(this.getTableData().rows);
    return var_core_value_sigB2CE(var_core_value_sig443C) ? this._updateTable({
      'rows': var_core_value_sig443C
    }) : false;
  }
};
J = q([K(5, var_core_value_sig066E), K(6, var_core_value_sig9B0D)], J);
function Y(var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig7827) {
  var var_core_value_sig652C, var_core_value_sig7E32;
  let var_core_value_sig4C07 = Q(var_core_value_sig65A1, var_core_value_sig7827),
    var_core_value_sig79AB = var_core_value_sig4C07.body,
    var_core_value_sig8E74 = (var_core_value_sig652C = var_core_value_sig79AB.paragraphs) != null && var_core_value_sig652C.length ? var_core_value_sig79AB.paragraphs : [$()];
  return {
    ...var_core_value_sig4C07,
    'body': {
      ...var_core_value_sig79AB,
      'paragraphs': var_core_value_sig8E74.map(var_core_value_sig39B1 => ({
        ...var_core_value_sig39B1,
        'paragraphStyle': {
          ...var_core_value_sig39B1.paragraphStyle,
          'horizontalAlign': var_core_value_sig7F19
        }
      }))
    },
    'documentStyle': {
      ...var_core_value_sig4C07.documentStyle,
      'renderConfig': {
        ...((var_core_value_sig7E32 = var_core_value_sig4C07.documentStyle) == null ? undefined : var_core_value_sig7E32.renderConfig),
        'horizontalAlign': var_core_value_sig7F19
      }
    }
  };
}
;
function X(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sig90CB) {
  var var_core_value_sigBDF5;
  let var_core_value_sigACC6 = Q(var_core_value_sig104C, var_core_value_sig90CB),
    var_core_value_sig1614 = var_core_value_sigACC6.body,
    var_core_value_sig85C3 = var_core_value_sig1614.dataStream ?? '\x0d\x0a',
    var_core_value_sigB996 = Math.max(0, var_core_value_sig85C3.length - 2),
    var_core_value_sig4BBA = (var_core_value_sig1614.textRuns ?? []).map(var_core_value_sig210D => ({
      ...var_core_value_sig210D,
      'ts': {
        ...var_core_value_sig210D.ts,
        ...var_core_value_sig841D
      }
    }));
  return var_core_value_sigB996 > 0 && var_core_value_sig4BBA.length === 0 && var_core_value_sig4BBA.push({
    'st': 0,
    'ed': var_core_value_sigB996,
    'ts': var_core_value_sig841D
  }), {
    ...var_core_value_sigACC6,
    'body': {
      ...var_core_value_sig1614,
      'dataStream': var_core_value_sig85C3,
      'textRuns': var_core_value_sig4BBA
    },
    'documentStyle': {
      ...var_core_value_sigACC6.documentStyle,
      'textStyle': {
        ...((var_core_value_sigBDF5 = var_core_value_sigACC6.documentStyle) == null ? undefined : var_core_value_sigBDF5.textStyle),
        ...var_core_value_sig841D
      }
    }
  };
}
;
function Z(var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542) {
  let var_core_value_sigBB6C = ne(var_core_value_sig5151);
  return X(var_core_value_sig6201, {
    ...(var_core_value_sig5151 ? {
      'textFill': var_core_value_sig5151
    } : {
      'textFill': undefined
    }),
    ...(var_core_value_sigBB6C ? {
      'cl': {
        'rgb': var_core_value_sigBB6C
      }
    } : {
      'cl': undefined
    })
  }, var_core_value_sigB542);
}
;
function ne(var_core_value_sigE2BF) {
  if (!var_core_value_sigE2BF || var_core_value_sigE2BF.type === "none") return (var_core_value_sigE2BF == null ? undefined : var_core_value_sigE2BF.type) === "none" ? 'rgba(0,\x200,\x200,\x200)' : undefined;
  if (var_core_value_sigE2BF.type === 'gradient') {
    var var_core_value_sigB8C7;
    return ((var_core_value_sigB8C7 = var_core_value_sigE2BF.gradient) == null || (var_core_value_sigB8C7 = var_core_value_sigB8C7.stops) == null || (var_core_value_sigB8C7 = var_core_value_sigB8C7[0]) == null ? undefined : var_core_value_sigB8C7.color) ?? var_core_value_sigE2BF.color;
  }
  return var_core_value_sigE2BF.color;
}
;
function Q(var_core_value_sigA56E, var_core_value_sig1998) {
  var var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F;
  let var_core_value_sig66C0 = var_core_value_sigC56D.deepClone(var_core_value_sigA56E ?? {
    'id': var_core_value_sig1998,
    'body': {
      'dataStream': '\x0d\x0a',
      'paragraphs': [$()],
      'textRuns': []
    },
    'documentStyle': {}
  });
  return {
    ...var_core_value_sig66C0,
    'id': var_core_value_sig66C0.id ?? var_core_value_sig1998,
    'body': {
      'dataStream': ((var_core_value_sigFF19 = var_core_value_sig66C0.body) == null ? undefined : var_core_value_sigFF19.dataStream) ?? '\x0d\x0a',
      'paragraphs': (var_core_value_sig43B8 = var_core_value_sig66C0.body) != null && (var_core_value_sig43B8 = var_core_value_sig43B8.paragraphs) != null && var_core_value_sig43B8.length ? var_core_value_sig66C0.body["paragraphs"] : [$()],
      'textRuns': ((var_core_value_sigD98F = var_core_value_sig66C0.body) == null ? undefined : var_core_value_sigD98F.textRuns) ?? [],
      ...var_core_value_sig66C0.body
    },
    'documentStyle': var_core_value_sig66C0.documentStyle ?? {}
  };
}
;
function $() {
  return {
    'startIndex': 0,
    'paragraphId': var_core_value_sig3A17(new Set())
  };
}
var re = class extends var_core_value_sig6884 {
  newTable(var_core_value_sigB4B4) {
    let var_core_value_sigD407 = this._slideModel["getUnitId"](),
      var_core_value_sig63F3 = this.getId();
    return var_core_value_sigB4B4 ? typeof var_core_value_sigB4B4 == "string" ? this._injector['createInstance'](W, var_core_value_sigD407, var_core_value_sig63F3, this._injector, {
      'element': {
        'id': var_core_value_sigB4B4
      }
    }) : var_core_value_sigB4B4.toBuilder() : this._injector["createInstance"](W, var_core_value_sigD407, var_core_value_sig63F3, this._injector);
  }
  insertTable(var_core_value_sig6A71, var_core_value_sig3BF6) {
    let var_core_value_sig38CE = this._injector["get"](var_core_value_sig066E),
      var_core_value_sig62B7 = this._slideModel["getUnitId"](),
      var_core_value_sig37A8 = this.getId(),
      {
        createOptions: var_core_value_sigA90D,
        table: var_core_value_sig7A3C,
        element: var_core_value_sig0511
      } = var_core_value_sig6A71,
      var_core_value_sig1F44 = var_core_value_sig7A3C.id ?? var_core_value_sig938F(6);
    return var_core_value_sig38CE.syncExecuteCommand(var_core_value_sig2547.id, {
      'unitId': var_core_value_sig62B7,
      'subUnitId': var_core_value_sig37A8,
      'createOptions': var_core_value_sigA90D,
      'table': {
        ...var_core_value_sig7A3C,
        'id': var_core_value_sig1F44
      },
      'element': var_core_value_sig0511,
      'insertIndex': var_core_value_sig3BF6
    }) ? this.getTableById(var_core_value_sig1F44) : null;
  }
  insertTableFromData(var_core_value_sigCB04, var_core_value_sig947E) {
    if (var_core_value_sigCB04.length === 0 || var_core_value_sigCB04.every(var_core_value_sigD082 => var_core_value_sigD082.length === 0)) throw Error('Values\x20must\x20contain\x20at\x20least\x20one\x20non-empty\x20cell.');
    let var_core_value_sig4545 = this._injector['get'](var_core_value_sig066E),
      var_core_value_sigF39A = this._slideModel["getUnitId"](),
      var_core_value_sigF79C = this.getId(),
      var_core_value_sig2E54 = (var_core_value_sig947E == null ? undefined : var_core_value_sig947E.id) ?? var_core_value_sig938F(6),
      var_core_value_sig7658 = var_core_value_sig7BAF({
        ...var_core_value_sig947E,
        'values': var_core_value_sigCB04
      }),
      var_core_value_sigDCF5 = {
        ...var_core_value_sig947E,
        'id': var_core_value_sig2E54,
        ...var_core_value_sig7658
      },
      {
        rows: var_core_value_sigC786,
        columns: var_core_value_sigC0D9
      } = var_core_value_sig2F2B({
        'tableId': var_core_value_sig2E54,
        'values': var_core_value_sigCB04,
        ...var_core_value_sigDCF5
      });
    return var_core_value_sig4545.syncExecuteCommand(var_core_value_sig2547.id, {
      'unitId': var_core_value_sigF39A,
      'subUnitId': var_core_value_sigF79C,
      'createOptions': var_core_value_sigDCF5,
      'table': {
        'id': var_core_value_sig2E54,
        'rows': var_core_value_sigC786,
        'columns': var_core_value_sigC0D9
      },
      'element': {
        'transform': {
          'width': var_core_value_sig7658.columns * var_core_value_sig7658.columnWidth,
          'height': var_core_value_sig7658.rows * var_core_value_sig7658.rowHeight
        }
      }
    }) ? this.getTableById(var_core_value_sig2E54) : null;
  }
  getTables() {
    let var_core_value_sigF0511 = this._slideModel["getUnitId"](),
      var_core_value_sig5825 = this.getId(),
      {
        elementOrder: var_core_value_sig4EB7,
        elements: var_core_value_sig73AF
      } = this.getData();
    return var_core_value_sig4EB7.map(var_core_value_sigDBB7 => var_core_value_sig73AF[var_core_value_sigDBB7]).filter(var_core_value_sigD0A8 => (var_core_value_sigD0A8 == null ? undefined : var_core_value_sigD0A8.type) === var_core_value_sig9D15.Table).map(var_core_value_sigF4B9 => this._injector["createInstance"](J, var_core_value_sigF0511, var_core_value_sig5825, var_core_value_sigF4B9.id, this._slideModel, this._injector));
  }
  getTableById(var_core_value_sig548A) {
    return this.getTables().find(var_core_value_sig5CEE => var_core_value_sig5CEE.getId() === var_core_value_sig548A || var_core_value_sig5CEE.getTableId() === var_core_value_sig548A) ?? null;
  }
  getTableAt(var_core_value_sigE026) {
    let var_core_value_sig339E = this.getTables();
    return var_core_value_sigE026 >= 0 && var_core_value_sigE026 < var_core_value_sig339E.length ? var_core_value_sig339E[var_core_value_sigE026] : null;
  }
  updateTable(var_core_value_sig7550) {
    let var_core_value_sig2983 = this._injector["get"](var_core_value_sig066E),
      var_core_value_sigE1B0 = this._slideModel["getUnitId"](),
      {
        table: var_core_value_sigD4FF,
        element: var_core_value_sig1E5B
      } = var_core_value_sig7550;
    if (!var_core_value_sigD4FF.id) throw Error("Table id is required for updating a table.");
    if (!this.getElementById(var_core_value_sig1E5B.id)) throw Error("Slide table element \"" + var_core_value_sig1E5B.id + "\" was not found on this slide.");
    if (!var_core_value_sig2983.syncExecuteCommand(var_core_value_sig04C6.id, {
      'unitId': var_core_value_sigE1B0,
      'tableId': var_core_value_sigD4FF.id,
      'patch': {
        ...var_core_value_sigD4FF
      }
    })) throw Error("Failed to update the table.");
    return this.getTableById(var_core_value_sigD4FF.id);
  }
  removeTable(var_core_value_sigB680) {
    return var_core_value_sigB680.remove() ?? false;
  }
};
var_core_value_sig6884.extend(re);
var ie = class extends var_core_value_sigBE5E {
  get SlideTableFillTypeEnum() {
    return var_core_value_sigB57B;
  }
  get SlideTableGradientFillTypeEnum() {
    return var_core_value_sig780B;
  }
  get SlideTablePictureFillModeEnum() {
    return var_core_value_sig7D1B;
  }
  get SlideTableBorderDashEnum() {
    return var_core_value_sig880E;
  }
  get SlideTableBorderPresetEnum() {
    return var_core_value_sigC9ED;
  }
  get SlideTableVerticalAlignEnum() {
    return var_core_value_sig6C7E;
  }
  get SlideTableTextDirectionEnum() {
    return var_core_value_sig7D40;
  }
};
var_core_value_sigBE5E.extend(ie);
export { J as FSlideTable, W as FSlideTableBuilder, G as FSlideTableCell };
