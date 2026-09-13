import { PageElementTypeEnum, plainTextToSlideDocumentData, slideDocumentDataToPlainText } from '@univerjs-pro/slides';
import { DEFAULT_SLIDE_TABLE_COLUMN_COUNT, DEFAULT_SLIDE_TABLE_ELEMENT_LEFT, DEFAULT_SLIDE_TABLE_ELEMENT_ROTATION, DEFAULT_SLIDE_TABLE_ELEMENT_TOP, DEFAULT_SLIDE_TABLE_ROW_COUNT, DeleteSlideTableColumnsCommand, DeleteSlideTableRowsCommand, InsertSlideTableColumnsCommand, InsertSlideTableCommand, InsertSlideTableRowsCommand, MergeSlideTableCellsCommand, RemoveSlideTableCommand, SlideTableBorderDashEnum, SlideTableBorderPresetEnum, SlideTableFillTypeEnum, SlideTableGradientFillTypeEnum, SlideTablePictureFillModeEnum, SlideTableResourceService, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum, UnmergeSlideTableCellsCommand, UpdateSlideTableCommand, buildBorderPresetPatch, buildSlideTable, iterateSelectedSlideTableCells, mergeSlideTableCellStyle, normalizeSlideTableCellRange, resizeSlideTableGrid, resolveSlideTableBuildOptions } from '@univerjs-pro/slides-table';
import { FPageElement, FSlide } from '@univerjs-pro/slides/facade';
import { ICommandService, IPermissionService, RichTextValue, Tools, createParagraphId, generateRandomId } from '@univerjs/core';
import { FBase, FEnum } from '@univerjs/core/facade';
import { G, W } from "./facade-slides-table-fslide-table-builder.js";
let J = class extends FPageElement {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174), this.slideModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, this.injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172;
  }
  getTableId() {
    return this.getData().tableId;
  }
  getTableData() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 = this._injector["get"](SlideTableResourceService).getTable(this.unitId, this.getTableId());
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182) throw Error("Slide table resource \"" + this.getTableId() + "\" was not found.");
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182;
  }
  describe() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = this.getTableData();
    return {
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.id,
      'elementId': this.getId(),
      'rowCount': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.rows["length"],
      'columnCount': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.columns["length"],
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.name,
      'description': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.description,
      'styleId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.styleId,
      'options': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.options
      },
      'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.columns["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629) => ({
        'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.width
      })),
      'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.rows["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) => ({
        'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.height
      })),
      'sampleRows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.rows["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.columns["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) => this.getCellText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462))).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.length > 0)).slice(0, 5)
    };
  }
  getRowCount() {
    return this.getTableData().rows['length'];
  }
  getColumnCount() {
    return this.getTableData().columns['length'];
  }
  getCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = this.getTableData().rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187] ? this._injector["createInstance"](G, this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187) : null;
  }
  getCellData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = this.getTableData().rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195) : null;
  }
  getCellText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = this.getTableData().rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.textData;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 ? slideDocumentDataToPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203) : '';
  }
  getCellTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = this.getTableData().rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.textData;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211) : undefined;
  }
  getCellRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = this.getCellTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 ? RichTextValue.create(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218) : null;
  }
  getCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 = this.getTableData().rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.style;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225) : undefined;
  }
  getTableRange() {
    return {
      'startRow': 0,
      'endRow': Math.max(0, this.getRowCount() - 1),
      'startColumn': 0,
      'endColumn': Math.max(0, this.getColumnCount() - 1)
    };
  }
  getCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231) {
    return {
      'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230,
      'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230,
      'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231,
      'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231
    };
  }
  getRowsRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = 1) {
    return {
      'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234,
      'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 - 1,
      'startColumn': 0,
      'endColumn': Math.max(0, this.getColumnCount() - 1)
    };
  }
  getColumnsRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 = 1) {
    return {
      'startRow': 0,
      'endRow': Math.max(0, this.getRowCount() - 1),
      'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238,
      'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 - 1
    };
  }
  toBuilder() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = this.getTableData(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = this.getData();
    return this._injector["createInstance"](W, this.unitId, this.subUnitId, this._injector, {
      'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242,
      'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243
    });
  }
  insertRowsBefore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248) {
    return this._injector["get"](ICommandService).syncExecuteCommand(InsertSlideTableRowsCommand.id, {
      'unitId': this.unitId,
      'subUnitId': this.subUnitId,
      'elementId': this.elementId,
      'tableId': this.getTableId(),
      'rowIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246,
      'count': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248
    });
  }
  insertRowsAfter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254) {
    return this.insertRowsBefore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254);
  }
  appendRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259) {
    return this.insertRowsBefore(this.getRowCount(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259);
  }
  deleteRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 = 1) {
    return this._injector['get'](ICommandService).syncExecuteCommand(DeleteSlideTableRowsCommand.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262,
      'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 - 1
    });
  }
  insertColumnsBefore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) {
    return this._injector["get"](ICommandService).syncExecuteCommand(InsertSlideTableColumnsCommand.id, {
      'unitId': this.unitId,
      'subUnitId': this.subUnitId,
      'elementId': this.elementId,
      'tableId': this.getTableId(),
      'columnIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266,
      'count': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268
    });
  }
  insertColumnsAfter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274) {
    return this.insertColumnsBefore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274);
  }
  appendColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279) {
    return this.insertColumnsBefore(this.getColumnCount(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279);
  }
  deleteColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = 1) {
    return this._injector["get"](ICommandService).syncExecuteCommand(DeleteSlideTableColumnsCommand.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282,
      'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 - 1
    });
  }
  mergeCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286) {
    return this._injector['get'](ICommandService).syncExecuteCommand(MergeSlideTableCellsCommand.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'range': normalizeSlideTableCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286)
    });
  }
  unmergeCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289) {
    return this._injector['get'](ICommandService).syncExecuteCommand(UnmergeSlideTableCellsCommand.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288,
      'column': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289
    });
  }
  remove() {
    return this._injector["get"](ICommandService).syncExecuteCommand(RemoveSlideTableCommand.id, {
      'unitId': this.unitId,
      'subUnitId': this.subUnitId,
      'tableId': this.getTableId(),
      'elementId': this.getId()
    });
  }
  setCellText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294) {
    return this.setCellTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, plainTextToSlideDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294, {
      'id': 'SLIDE_TABLE_CELL_' + this.getTableId() + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293
    }));
  }
  setCellTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300) {
    return this._updateRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.textData = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300), true) : false;
    });
  }
  setCellRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306) {
    return this.setCellTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.getData());
  }
  setCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311) {
    return this._updateRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false;
      return iterateSelectedSlideTableCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.style = mergeSlideTableCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.style, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true;
      }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A;
    });
  }
  setCellFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315) {
    return this.setCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, {
      'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315
    });
  }
  setCellBackground(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319) {
    return this.setCellFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318, {
      'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319,
      'alpha': 1
    });
  }
  clearCellBackground(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322) {
    return this.setCellFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322, undefined);
  }
  setTableBackground(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324) {
    return this.setCellBackground(this.getTableRange(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324);
  }
  setBorder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 = SlideTableBorderPresetEnum.All) {
    return this._updateRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => {
      let {
        changed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644
      } = buildBorderPresetPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644;
    });
  }
  setTableBorder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 = SlideTableBorderPresetEnum.All) {
    return this.setBorder(this.getTableRange(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333);
  }
  setCellHorizontalAlign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337) {
    return this._updateRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = false;
      return iterateSelectedSlideTableCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.textData = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.textData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, "SLIDE_TABLE_CELL_" + this.getTableId() + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = true;
      }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2;
    });
  }
  setCellVerticalAlign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341) {
    return this.setCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340, {
      'verticalAlign': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341
    });
  }
  setCellTextDirection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) {
    return this.setCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, {
      'textDirection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345
    });
  }
  setCellTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349) {
    return this._updateRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 => {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = false;
      return iterateSelectedSlideTableCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.textData = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.textData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, "SLIDE_TABLE_CELL_" + this.getTableId() + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = true;
      }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4;
    });
  }
  setCellTextColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353) {
    return this.setCellTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, {
      'cl': {
        'rgb': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353
      }
    });
  }
  setCellTextFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357) {
    return this._updateRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = false;
      return iterateSelectedSlideTableCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.textData = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.textData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357, 'SLIDE_TABLE_CELL_' + this.getTableId() + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = true;
      }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6;
    });
  }
  setRowHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361) {
    return this._updateRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.height = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, true) : false;
    });
  }
  setColumnWidth(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 = Tools.deepClone(this.getTableData().columns);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364] ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364].width = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, this._updateTable({
      'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366
    })) : false;
  }
  resize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = resizeSlideTableGrid(this.getTableData(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371);
    return this._updateTable({
      'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.rows,
      'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.columns
    });
  }
  distributeRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 = this.getRowCount()) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 = Tools.deepClone(this.getTableData().rows),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.length - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 - 1),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 + 1);
    if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length) return false;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.height ?? 24), 0) / var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 += 1) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659].height = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13;
    return this._updateTable({
      'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378
    });
  }
  distributeColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 = this.getColumnCount()) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384 = Tools.deepClone(this.getTableData().columns),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.length - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 - 1),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 + 1);
    if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length) return false;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.width, 0) / var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 += 1) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662].width = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17;
    return this._updateTable({
      'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384
    });
  }
  setOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388) {
    return this._updateTable({
      'options': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388
    });
  }
  setTableStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390) {
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = !Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390, 'fill') || this.setCellFill(this.getTableRange(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.fill),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.border || this.setTableBorder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.border),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.options || this.setOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.options);
    return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10;
  }
  setTableName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392) {
    return this._updateTable({
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392
    });
  }
  setTableDescription(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394) {
    return this._updateTable({
      'description': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394
    });
  }
  setStyleId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396) {
    return this._updateTable({
      'styleId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396
    });
  }
  setCustom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398) {
    return this._updateTable({
      'custom': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398
    });
  }
  _updateTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400) {
    return this._injector["get"](ICommandService).syncExecuteCommand(UpdateSlideTableCommand.id, {
      'unitId': this.unitId,
      'tableId': this.getTableId(),
      'patch': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400
    });
  }
  _updateRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 = Tools.deepClone(this.getTableData().rows);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403) ? this._updateTable({
      'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403
    }) : false;
  }
};
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.body,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.paragraphs) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.paragraphs : [fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1()];
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519,
    'body': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520,
      'paragraphs': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406,
        'paragraphStyle': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.paragraphStyle,
          'horizontalAlign': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515
        }
      }))
    },
    'documentStyle': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.documentStyle,
      'renderConfig': {
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518.renderConfig),
        'horizontalAlign': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515
      }
    }
  };
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.body,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.dataStream ?? '\x0d\x0a',
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = Math.max(0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB.length - 2),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.textRuns ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407,
      'ts': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.ts,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529
      }
    }));
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.length === 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push({
    'st': 0,
    'ed': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22,
    'ts': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529
  }), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532,
    'body': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533,
      'dataStream': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
      'textRuns': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6
    },
    'documentStyle': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.documentStyle,
      'textStyle': {
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.textStyle),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529
      }
    }
  };
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543 = ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541);
  return X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541 ? {
      'textFill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541
    } : {
      'textFill': undefined
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543 ? {
      'cl': {
        'rgb': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543
      }
    } : {
      'cl': undefined
    })
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542);
}
function ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.type === "none") return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.type) === "none" ? 'rgba(0,\x200,\x200,\x200)' : undefined;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.type === 'gradient') {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.gradient) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549.stops) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.color;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.color;
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 ?? {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553,
    'body': {
      'dataStream': '\x0d\x0a',
      'paragraphs': [fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1()],
      'textRuns': []
    },
    'documentStyle': {}
  });
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557,
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.id ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553,
    'body': {
      'dataStream': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.dataStream) ?? '\x0d\x0a',
      'paragraphs': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.body) != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.paragraphs) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.body["paragraphs"] : [fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1()],
      'textRuns': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.textRuns) ?? [],
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.body
    },
    'documentStyle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.documentStyle ?? {}
  };
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1() {
  return {
    'startIndex': 0,
    'paragraphId': createParagraphId(new Set())
  };
}
export { J as FSlideTable };
