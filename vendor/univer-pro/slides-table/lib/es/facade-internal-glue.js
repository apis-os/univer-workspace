import { PageElementTypeEnum, plainTextToSlideDocumentData, slideDocumentDataToPlainText } from '@univerjs-pro/slides';
import { DEFAULT_SLIDE_TABLE_COLUMN_COUNT, DEFAULT_SLIDE_TABLE_ELEMENT_LEFT, DEFAULT_SLIDE_TABLE_ELEMENT_ROTATION, DEFAULT_SLIDE_TABLE_ELEMENT_TOP, DEFAULT_SLIDE_TABLE_ROW_COUNT, DeleteSlideTableColumnsCommand, DeleteSlideTableRowsCommand, InsertSlideTableColumnsCommand, InsertSlideTableCommand, InsertSlideTableRowsCommand, MergeSlideTableCellsCommand, RemoveSlideTableCommand, SlideTableBorderDashEnum, SlideTableBorderPresetEnum, SlideTableFillTypeEnum, SlideTableGradientFillTypeEnum, SlideTablePictureFillModeEnum, SlideTableResourceService, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum, UnmergeSlideTableCellsCommand, UpdateSlideTableCommand, buildBorderPresetPatch, buildSlideTable, iterateSelectedSlideTableCells, mergeSlideTableCellStyle, normalizeSlideTableCellRange, resizeSlideTableGrid, resolveSlideTableBuildOptions } from '@univerjs-pro/slides-table';
import { FPageElement, FSlide } from '@univerjs-pro/slides/facade';
import { ICommandService, IPermissionService, RichTextValue, Tools, createParagraphId, generateRandomId } from '@univerjs/core';
import { FBase, FEnum } from '@univerjs/core/facade';
import { J } from "./facade-slides-table-fslide-table.js";
import { W } from "./facade-slides-table-fslide-table-builder.js";
;
;
;
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496);
  };
}
;
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505;
}
J = q([K(5, ICommandService), K(6, IPermissionService)], J);
;
;
;
;
;
var re = class extends FSlide {
  newTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 = this._slideModel["getUnitId"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 = this.getId();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 ? typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 == "string" ? this._injector['createInstance'](W, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410, this._injector, {
      'element': {
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408
      }
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.toBuilder() : this._injector["createInstance"](W, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410, this._injector);
  }
  insertTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = this._injector["get"](ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417 = this._slideModel["getUnitId"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 = this.getId(),
      {
        createOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419,
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.id ?? generateRandomId(6);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.syncExecuteCommand(InsertSlideTableCommand.id, {
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418,
      'createOptions': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419,
      'table': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422
      },
      'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421,
      'insertIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415
    }) ? this.getTableById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422) : null;
  }
  insertTableFromData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.length === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.length === 0)) throw Error('Values\x20must\x20contain\x20at\x20least\x20one\x20non-empty\x20cell.');
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 = this._injector['get'](ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 = this._slideModel["getUnitId"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436 = this.getId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.id) ?? generateRandomId(6),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = resolveSlideTableBuildOptions({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433,
        'values': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438
      },
      {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439,
        columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440
      } = buildSlideTable({
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437,
        'values': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432,
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.syncExecuteCommand(InsertSlideTableCommand.id, {
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436,
      'createOptions': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB,
      'table': {
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437,
        'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439,
        'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440
      },
      'element': {
        'transform': {
          'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.columns * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.columnWidth,
          'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.rows * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.rowHeight
        }
      }
    }) ? this.getTableById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) : null;
  }
  getTables() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = this._slideModel["getUnitId"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = this.getId(),
      {
        elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452,
        elements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453
      } = this.getData();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.type) === PageElementTypeEnum.Table).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => this._injector["createInstance"](J, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.id, this._slideModel, this._injector));
  }
  getTableById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458) {
    return this.getTables().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.getId() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.getTableId() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458) ?? null;
  }
  getTableAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 = this.getTables();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460] : null;
  }
  updateTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465 = this._injector["get"](ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 = this._slideModel["getUnitId"](),
      {
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.id) throw Error("Table id is required for updating a table.");
    if (!this.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.id)) throw Error("Slide table element \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.id + "\" was not found on this slide.");
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.syncExecuteCommand(UpdateSlideTableCommand.id, {
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466,
      'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.id,
      'patch': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467
      }
    })) throw Error("Failed to update the table.");
    return this.getTableById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.id);
  }
  removeTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.remove() ?? false;
  }
};
FSlide.extend(re);
var ie = class extends FEnum {
  get SlideTableFillTypeEnum() {
    return SlideTableFillTypeEnum;
  }
  get SlideTableGradientFillTypeEnum() {
    return SlideTableGradientFillTypeEnum;
  }
  get SlideTablePictureFillModeEnum() {
    return SlideTablePictureFillModeEnum;
  }
  get SlideTableBorderDashEnum() {
    return SlideTableBorderDashEnum;
  }
  get SlideTableBorderPresetEnum() {
    return SlideTableBorderPresetEnum;
  }
  get SlideTableVerticalAlignEnum() {
    return SlideTableVerticalAlignEnum;
  }
  get SlideTableTextDirectionEnum() {
    return SlideTableTextDirectionEnum;
  }
};
FEnum.extend(ie);
