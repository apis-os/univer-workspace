import { BoardElementType, InsertBoardTableOperation } from '@univerjs-pro/boards';
import { BoardDiagramTablePreset, DeleteBoardTableColumnsCommand, DeleteBoardTableRowsCommand, InsertBoardTableColumnsCommand, InsertBoardTableRowsCommand, MergeBoardTableCellsCommand, MoveBoardTableColumnsCommand, MoveBoardTableRowsCommand, RemoveBoardTableCommand, ResizeBoardTableColumnsCommand, ResizeBoardTableRowsCommand, SetBoardTableBorderPresetCommand, SetBoardTableCellStyleCommand, SetBoardTableCellTextCommand, UnmergeBoardTableCellsCommand, UpdateBoardTableCommand } from '@univerjs-pro/boards-table';
import { FBoard, createBoardFacadeRichTextValue } from '@univerjs-pro/boards/facade';
import { SlideTableBorderDashEnum, SlideTableBorderPresetEnum, SlideTableFillTypeEnum, SlideTableGradientFillTypeEnum, SlideTablePictureFillModeEnum, SlideTableResourceService, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum } from '@univerjs-pro/slides-table';
import { DocumentFlavor, ICommandService, Tools, createParagraphId, generateRandomId } from '@univerjs/core';
import { FEnum } from '@univerjs/core/facade';
var P = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628) {
      this._board = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, this._pageId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, this._elementId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, this._resourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628;
    }
    getId() {
      return this._elementId;
    }
    getTableId() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = this._getElement()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.tableId) ?? null;
    }
    getData() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = this.getTableId();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 ? this._resourceService["getTable"](this._board["getId"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) ?? null : null;
    }
    getStructure() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = this.getData();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 ? {
        'rowCount': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.rows["length"],
        'columnCount': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.columns["length"],
        'rowHeights': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.height ?? null),
        'columnWidths': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.width),
        'mergedRanges': L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638)
      } : null;
    }
    getValues() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = this.getData()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.cells['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.textData)))) ?? [];
    }
    getCellInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644;
      if (!Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 < 0) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 = this.getData(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = this.getTableId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = createBoardFacadeRichTextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.textData ?? V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, ''));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.startRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.endRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.startColumn && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.endColumn) ?? null;
      return {
        'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642,
        'column': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
        'text': I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.textData),
        'richText': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648,
        'style': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.style ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.style) : null,
        'mergeRange': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649
        } : null,
        'isMergeAnchor': !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.startRow === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.startColumn === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643
      };
    }
    getCellRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660;
      if (!Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 < 0) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = this.getTableId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = this.getData()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659];
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 ? null : createBoardFacadeRichTextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.textData ?? V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659, ''));
    }
    getRichTextValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = this.getData(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = this.getTableId();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.rows['length'] === 0) return [];
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 ?? {
        'startRow': 0,
        'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.rows["length"] - 1,
        'startColumn': 0,
        'endColumn': (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.rows[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.cells["length"]) ?? 1) - 1
      };
      if (!R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB)) return [];
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = [];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.startRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 <= var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.endRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616++) {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [];
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.startColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 <= var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.endColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465++) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616].cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465],
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = createBoardFacadeRichTextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.textData ?? V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, ''));
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) return [];
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462);
        }
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.push(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A);
      }
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1;
    }
    getCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678;
      if (!Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 < 0) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = this.getData()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.style;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) : null;
    }
    setValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = 0) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = this.getData(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = this.getTableId();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684.length === 0 || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 < 0) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.rows),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false;
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2++) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2];
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) return false;
        for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D++) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D],
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D];
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 != "string") return false;
          if (I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.textData) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) {
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.textData) continue;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.textData);
            if (Tools.diffValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.textData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46)) continue;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.textData = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true;
            continue;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.textData = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true;
        }
      }
      return !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A || this._commandService["syncExecuteCommand"](UpdateBoardTableCommand.id, {
        'unitId': this._board["getId"](),
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688,
        'patch': {
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689
        }
      });
    }
    setRichTextValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 = 0) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = this.getData(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = this.getTableId();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 || !z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 ? !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.changed || this._commandService["syncExecuteCommand"](UpdateBoardTableCommand.id, {
        'unitId': this._board["getId"](),
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100,
        'patch': {
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.rows
        }
      }) : false;
    }
    setCellText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = this.getTableId();
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 < 0 ? false : this._commandService["syncExecuteCommand"](SetBoardTableCellTextCommand.id, {
        'unitId': this._board["getId"](),
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111,
        'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
        'column': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109,
        'textData': V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110)
      });
    }
    setCellTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = this.getTableId();
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 < 0 ? false : this._commandService['syncExecuteCommand'](SetBoardTableCellTextCommand.id, {
        'unitId': this._board["getId"](),
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119,
        'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116,
        'column': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117,
        'textData': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 ? H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) : null
      });
    }
    setCellRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126) {
      return this.setCellTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.getData()));
    }
    setCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = this.getTableId();
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 && this._commandService["syncExecuteCommand"](SetBoardTableCellStyleCommand.id, {
        'unitId': this._board['getId'](),
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132,
        'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130,
        'style': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131
      });
    }
    setBorderPreset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = this.getTableId();
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 && this._commandService["syncExecuteCommand"](SetBoardTableBorderPresetCommand.id, {
        'unitId': this._board["getId"](),
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139,
        'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136,
        'preset': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137,
        'border': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138
      });
    }
    insertRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) {
      return this._executeWithElement(InsertBoardTableRowsCommand.id, {
        'rowIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144,
        'count': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146
      });
    }
    insertColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152) {
      return this._executeWithElement(InsertBoardTableColumnsCommand.id, {
        'columnIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150,
        'count': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152
      });
    }
    deleteRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) {
      return this._execute({
        'commandId': DeleteBoardTableRowsCommand.id,
        'params': {
          'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156,
          'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157
        }
      });
    }
    deleteColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161) {
      return this._execute({
        'commandId': DeleteBoardTableColumnsCommand.id,
        'params': {
          'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160,
          'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161
        }
      });
    }
    resizeRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166) {
      return this._execute({
        'commandId': ResizeBoardTableRowsCommand.id,
        'params': {
          'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164,
          'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165,
          'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166
        }
      });
    }
    resizeColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) {
      return this._execute({
        'commandId': ResizeBoardTableColumnsCommand.id,
        'params': {
          'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170,
          'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171,
          'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172
        }
      });
    }
    moveRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179) {
      return this._execute({
        'commandId': MoveBoardTableRowsCommand.id,
        'params': {
          'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176,
          'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177,
          'targetRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178,
          'position': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179
        }
      });
    }
    moveColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187) {
      return this._execute({
        'commandId': MoveBoardTableColumnsCommand.id,
        'params': {
          'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184,
          'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185,
          'targetColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186,
          'position': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187
        }
      });
    }
    mergeCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192) {
      return this._execute({
        'commandId': MergeBoardTableCellsCommand.id,
        'params': {
          'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192
        }
      });
    }
    unmergeCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195) {
      return this._execute({
        'commandId': UnmergeBoardTableCellsCommand.id,
        'params': {
          'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194,
          'column': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195
        }
      });
    }
    remove() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = this.getTableId();
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 && this._commandService['syncExecuteCommand'](RemoveBoardTableCommand.id, {
        'unitId': this._board["getId"](),
        'subUnitId': this._pageId,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198,
        'elementId': this._elementId
      });
    }
    _getElement() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 = this._board["getElement"](this._elementId);
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.type) === BoardElementType.Table ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 : null;
    }
    _executeWithElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203) {
      return this._execute({
        'commandId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202,
        'params': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203,
          'subUnitId': this._pageId,
          'elementId': this._elementId
        }
      });
    }
    _execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 = this.getTableId();
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 && this._commandService["syncExecuteCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.commandId, {
        'unitId': this._board['getId'](),
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.params
      });
    }
  },
  F = class extends FBoard {
    insertTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = this.getData().activePageId,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.elementId ?? generateRandomId(8);
      return this.getElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212) ? null : this._injector['get'](ICommandService).syncExecuteCommand(InsertBoardTableOperation.id, {
        'unitId': this.getId(),
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211,
        'elementId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212,
        'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.left,
        'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.top,
        'parentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.parentId,
        'laneId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.laneId,
        'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.rows,
        'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.columns,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.width,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.height,
        'diagramPreset': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.diagramPreset
      }) ? this._createTableFacade(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211) : null;
    }
    getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = this.getData().activePageId,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = this.getElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216);
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.type) === BoardElementType.Table ? this._createTableFacade(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217) : null;
    }
    getTables() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 = this.getData().activePageId;
      return this.findElements({
        'elementType': BoardElementType.Table,
        'includeHidden': true,
        'includeLocked': true
      }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.type === BoardElementType.Table).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => this._createTableFacade(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222));
    }
    _createTableFacade(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225) {
      return new P(this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, this._injector["get"](ICommandService), this._injector["get"](SlideTableResourceService));
    }
  };
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.dataStream) ?? '').replace(/\r\n$/, '').replace(/\r/g, '\x0a');
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.rows["flatMap"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.cells['flatMap']((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) => {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.rowSpan ?? 1),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.columnSpan ?? 1);
    return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 > 1 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 > 1 ? [{
      'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229,
      'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 - 1,
      'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620,
      'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 - 1
    }] : [];
  }));
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.endRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.endColumn].every(Number.isInteger) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.startRow >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.startColumn >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.endRow >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.startRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.endColumn >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.startColumn && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.endRow < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.rows["length"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.rows["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.endRow + 1).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.endColumn < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.cells["length"]);
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.length) ?? 0;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.length > 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 > 0 && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252) && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.length === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8);
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.rows),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260[0].length,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = false;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7++) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) return null;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.getData != "function") return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.getData());
      Tools.diffValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.textData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.textData = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = true);
    }
  }
  return {
    'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263,
    'changed': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2
  };
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.replace(/\r\n/g, '\x0a').replace(/\r/g, '\x0a');
  return H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, {
    'id': "BOARD_TABLE_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273,
    'body': {
      'dataStream': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB.replace(/\n/g, '\x0d') + '\x0d\x0a'
    },
    'documentStyle': {}
  });
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283.dataStream) ?? '').replace(/\r\n/g, '\x0d').replace(/\n/g, '\x0d'),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2.endsWith('\x0d') ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 + '\x0a' : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 + '\x0d\x0a' : '\x0d\x0a',
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = Array.from(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3.matchAll(/\r/g), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.index),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.paragraphs) ?? [],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.paragraphId).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237;
      return {
        ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236],
        'startIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235,
        'paragraphId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.paragraphId) ?? createParagraphId(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299)
      };
    });
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286,
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.id ?? "BOARD_TABLE_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281,
    'body': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.body,
      'dataStream': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
      'paragraphs': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4,
      'textRuns': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.textRuns) ?? []
    },
    'documentStyle': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.documentStyle,
      'documentFlavor': DocumentFlavor.UNSPECIFIED
    }
  };
}
export { P as FBoardTable };
export { F };
