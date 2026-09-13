import { BoardElementType as var_core_value_sigE347, InsertBoardTableOperation as var_core_value_sig3C5B } from '@univerjs-pro/boards';
import { BoardDiagramTablePreset as var_core_value_sig200B, DeleteBoardTableColumnsCommand as var_core_value_sig3863, DeleteBoardTableRowsCommand as var_core_value_sigC97C, InsertBoardTableColumnsCommand as var_core_value_sigC4B1, InsertBoardTableRowsCommand as var_core_value_sig1BD9, MergeBoardTableCellsCommand as var_core_value_sigE43E, MoveBoardTableColumnsCommand as var_core_value_sigA937, MoveBoardTableRowsCommand as var_core_value_sigCAD5, RemoveBoardTableCommand as var_core_value_sigE503, ResizeBoardTableColumnsCommand as var_core_value_sig48DD, ResizeBoardTableRowsCommand as var_core_value_sig5E6A, SetBoardTableBorderPresetCommand as var_core_value_sigB7FC, SetBoardTableCellStyleCommand as var_core_value_sig9CD9, SetBoardTableCellTextCommand as var_core_value_sigFD0C, UnmergeBoardTableCellsCommand as var_core_value_sig849B, UpdateBoardTableCommand as var_core_value_sig5F1A } from '@univerjs-pro/boards-table';
import { FBoard as var_core_value_sigB455, createBoardFacadeRichTextValue as var_core_value_sig5241 } from '@univerjs-pro/boards/facade';
import { SlideTableBorderDashEnum as var_core_value_sigC6E5, SlideTableBorderPresetEnum as var_core_value_sigCEFB, SlideTableFillTypeEnum as var_core_value_sig1537, SlideTableGradientFillTypeEnum as var_core_value_sigE4C6, SlideTablePictureFillModeEnum as var_core_value_sig4313, SlideTableResourceService as var_core_value_sigFC87, SlideTableTextDirectionEnum as var_core_value_sig156F, SlideTableVerticalAlignEnum as var_core_value_sigDD51 } from '@univerjs-pro/slides-table';
import { DocumentFlavor as var_core_value_sigF057, ICommandService as var_core_value_sig72F6, Tools as var_core_value_sig9FBA, createParagraphId as var_core_value_sigFE01, generateRandomId as var_core_value_sigA2CE } from '@univerjs/core';
import { FEnum as var_core_value_sig1975 } from '@univerjs/core/facade';
var P = class {
    constructor(var_core_value_sig8178, var_core_value_sigE9ED, var_core_value_sigB577, var_core_value_sig9572, var_core_value_sigD873) {
      this._board = var_core_value_sig8178, this._pageId = var_core_value_sigE9ED, this._elementId = var_core_value_sigB577, this._commandService = var_core_value_sig9572, this._resourceService = var_core_value_sigD873;
    }
    getId() {
      return this._elementId;
    }
    getTableId() {
      var var_core_value_sigA12B;
      return ((var_core_value_sigA12B = this._getElement()) == null ? undefined : var_core_value_sigA12B.tableId) ?? null;
    }
    getData() {
      let var_core_value_sigF230 = this.getTableId();
      return var_core_value_sigF230 ? this._resourceService["getTable"](this._board["getId"](), var_core_value_sigF230) ?? null : null;
    }
    getStructure() {
      let var_core_value_sig09B8 = this.getData();
      return var_core_value_sig09B8 ? {
        'rowCount': var_core_value_sig09B8.rows["length"],
        'columnCount': var_core_value_sig09B8.columns["length"],
        'rowHeights': var_core_value_sig09B8.rows["map"](var_core_value_sig2BCF => var_core_value_sig2BCF.height ?? null),
        'columnWidths': var_core_value_sig09B8.columns["map"](var_core_value_sig0D69 => var_core_value_sig0D69.width),
        'mergedRanges': L(var_core_value_sig09B8)
      } : null;
    }
    getValues() {
      var var_core_value_sig6F91;
      return ((var_core_value_sig6F91 = this.getData()) == null ? undefined : var_core_value_sig6F91.rows["map"](var_core_value_sig480E => var_core_value_sig480E.cells['map'](var_core_value_sig76BA => I(var_core_value_sig76BA.textData)))) ?? [];
    }
    getCellInfo(var_core_value_sigF9C7, var_core_value_sig8895) {
      var var_core_value_sigC80B;
      if (!Number.isInteger(var_core_value_sigF9C7) || !Number.isInteger(var_core_value_sig8895) || var_core_value_sigF9C7 < 0 || var_core_value_sig8895 < 0) return null;
      let var_core_value_sig284F = this.getData(),
        var_core_value_sigE154 = this.getTableId(),
        var_core_value_sig4632 = var_core_value_sig284F == null || (var_core_value_sigC80B = var_core_value_sig284F.rows[var_core_value_sigF9C7]) == null ? undefined : var_core_value_sigC80B.cells[var_core_value_sig8895];
      if (!var_core_value_sig284F || !var_core_value_sigE154 || !var_core_value_sig4632) return null;
      let var_core_value_sig12F2 = var_core_value_sig5241(var_core_value_sig4632.textData ?? V(var_core_value_sigE154, var_core_value_sigF9C7, var_core_value_sig8895, ''));
      if (!var_core_value_sig12F2) return null;
      let var_core_value_sig2259 = L(var_core_value_sig284F).find(var_core_value_sig26DB => var_core_value_sigF9C7 >= var_core_value_sig26DB.startRow && var_core_value_sigF9C7 <= var_core_value_sig26DB.endRow && var_core_value_sig8895 >= var_core_value_sig26DB.startColumn && var_core_value_sig8895 <= var_core_value_sig26DB.endColumn) ?? null;
      return {
        'row': var_core_value_sigF9C7,
        'column': var_core_value_sig8895,
        'text': I(var_core_value_sig4632.textData),
        'richText': var_core_value_sig12F2,
        'style': var_core_value_sig4632.style ? var_core_value_sig9FBA.deepClone(var_core_value_sig4632.style) : null,
        'mergeRange': var_core_value_sig2259 ? {
          ...var_core_value_sig2259
        } : null,
        'isMergeAnchor': !!var_core_value_sig2259 && var_core_value_sig2259.startRow === var_core_value_sigF9C7 && var_core_value_sig2259.startColumn === var_core_value_sig8895
      };
    }
    getCellRichText(var_core_value_sig9E2F, var_core_value_sigD082) {
      var var_core_value_sigDBB7;
      if (!Number.isInteger(var_core_value_sig9E2F) || !Number.isInteger(var_core_value_sigD082) || var_core_value_sig9E2F < 0 || var_core_value_sigD082 < 0) return null;
      let var_core_value_sigD0A8 = this.getTableId(),
        var_core_value_sigF4B9 = (var_core_value_sigDBB7 = this.getData()) == null || (var_core_value_sigDBB7 = var_core_value_sigDBB7.rows[var_core_value_sig9E2F]) == null ? undefined : var_core_value_sigDBB7.cells[var_core_value_sigD082];
      return !var_core_value_sigD0A8 || !var_core_value_sigF4B9 ? null : var_core_value_sig5241(var_core_value_sigF4B9.textData ?? V(var_core_value_sigD0A8, var_core_value_sig9E2F, var_core_value_sigD082, ''));
    }
    getRichTextValues(var_core_value_sig5CEE) {
      var var_core_value_sigE92A;
      let var_core_value_sig362B = this.getData(),
        var_core_value_sig5CA5 = this.getTableId();
      if (!var_core_value_sig362B || !var_core_value_sig5CA5 || var_core_value_sig362B.rows['length'] === 0) return [];
      let var_core_value_sigE90F = var_core_value_sig5CEE ?? {
        'startRow': 0,
        'endRow': var_core_value_sig362B.rows["length"] - 1,
        'startColumn': 0,
        'endColumn': (((var_core_value_sigE92A = var_core_value_sig362B.rows[0]) == null ? undefined : var_core_value_sigE92A.cells["length"]) ?? 1) - 1
      };
      if (!R(var_core_value_sig362B, var_core_value_sigE90F)) return [];
      let var_core_value_sigEFD4 = [];
      for (let var_core_value_sigF0F9 = var_core_value_sigE90F.startRow; var_core_value_sigF0F9 <= var_core_value_sigE90F.endRow; var_core_value_sigF0F9++) {
        let var_core_value_sigFBFA = [];
        for (let var_core_value_sig3D7D = var_core_value_sigE90F.startColumn; var_core_value_sig3D7D <= var_core_value_sigE90F.endColumn; var_core_value_sig3D7D++) {
          let var_core_value_sig2AD8 = var_core_value_sig362B.rows[var_core_value_sigF0F9].cells[var_core_value_sig3D7D],
            var_core_value_sig2AD0 = var_core_value_sig5241(var_core_value_sig2AD8.textData ?? V(var_core_value_sig5CA5, var_core_value_sigF0F9, var_core_value_sig3D7D, ''));
          if (!var_core_value_sig2AD0) return [];
          var_core_value_sigFBFA.push(var_core_value_sig2AD0);
        }
        var_core_value_sigEFD4.push(var_core_value_sigFBFA);
      }
      return var_core_value_sigEFD4;
    }
    getCellStyle(var_core_value_sig861B, var_core_value_sig5237) {
      var var_core_value_sigBB00;
      if (!Number.isInteger(var_core_value_sig861B) || !Number.isInteger(var_core_value_sig5237) || var_core_value_sig861B < 0 || var_core_value_sig5237 < 0) return null;
      let var_core_value_sig7E54 = (var_core_value_sigBB00 = this.getData()) == null || (var_core_value_sigBB00 = var_core_value_sigBB00.rows[var_core_value_sig861B]) == null || (var_core_value_sigBB00 = var_core_value_sigBB00.cells[var_core_value_sig5237]) == null ? undefined : var_core_value_sigBB00.style;
      return var_core_value_sig7E54 ? var_core_value_sig9FBA.deepClone(var_core_value_sig7E54) : null;
    }
    setValues(var_core_value_sig9A8D, var_core_value_sigC259 = 0, var_core_value_sig9C9F = 0) {
      let var_core_value_sigFDEA = this.getData(),
        var_core_value_sig86D0 = this.getTableId();
      if (!var_core_value_sigFDEA || !var_core_value_sig86D0 || var_core_value_sig9A8D.length === 0 || !Number.isInteger(var_core_value_sigC259) || !Number.isInteger(var_core_value_sig9C9F) || var_core_value_sigC259 < 0 || var_core_value_sig9C9F < 0) return false;
      let var_core_value_sig4CD2 = var_core_value_sig9FBA.deepClone(var_core_value_sigFDEA.rows),
        var_core_value_sig48CA = false;
      for (let var_core_value_sig1A0F = 0; var_core_value_sig1A0F < var_core_value_sig9A8D.length; var_core_value_sig1A0F++) {
        let var_core_value_sigF602 = var_core_value_sig9A8D[var_core_value_sig1A0F],
          var_core_value_sig1BBD = var_core_value_sig4CD2[var_core_value_sigC259 + var_core_value_sig1A0F];
        if (!var_core_value_sig1BBD || !var_core_value_sigF602) return false;
        for (let var_core_value_sig27E5 = 0; var_core_value_sig27E5 < var_core_value_sigF602.length; var_core_value_sig27E5++) {
          let var_core_value_sig3EEE = var_core_value_sig1BBD.cells[var_core_value_sig9C9F + var_core_value_sig27E5],
            var_core_value_sigBC46 = var_core_value_sigF602[var_core_value_sig27E5];
          if (!var_core_value_sig3EEE || typeof var_core_value_sigBC46 != "string") return false;
          if (I(var_core_value_sig3EEE.textData) === var_core_value_sigBC46) {
            if (!var_core_value_sig3EEE.textData) continue;
            let var_core_value_sig7524 = H(var_core_value_sig86D0, var_core_value_sigC259 + var_core_value_sig1A0F, var_core_value_sig9C9F + var_core_value_sig27E5, var_core_value_sig3EEE.textData);
            if (var_core_value_sig9FBA.diffValue(var_core_value_sig3EEE.textData, var_core_value_sig7524)) continue;
            var_core_value_sig3EEE.textData = var_core_value_sig7524, var_core_value_sig48CA = true;
            continue;
          }
          var_core_value_sig3EEE.textData = V(var_core_value_sig86D0, var_core_value_sigC259 + var_core_value_sig1A0F, var_core_value_sig9C9F + var_core_value_sig27E5, var_core_value_sigBC46), var_core_value_sig48CA = true;
        }
      }
      return !var_core_value_sig48CA || this._commandService["syncExecuteCommand"](var_core_value_sig5F1A.id, {
        'unitId': this._board["getId"](),
        'tableId': var_core_value_sig86D0,
        'patch': {
          'rows': var_core_value_sig4CD2
        }
      });
    }
    setRichTextValues(var_core_value_sig50AF, var_core_value_sigA942 = 0, var_core_value_sigA621 = 0) {
      let var_core_value_sigBBFF = this.getData(),
        var_core_value_sig8889 = this.getTableId();
      if (!var_core_value_sigBBFF || !var_core_value_sig8889 || !z(var_core_value_sig50AF, var_core_value_sigA942, var_core_value_sigA621)) return false;
      let var_core_value_sig32F8 = B(var_core_value_sigBBFF, var_core_value_sig50AF, var_core_value_sigA942, var_core_value_sigA621);
      return var_core_value_sig32F8 ? !var_core_value_sig32F8.changed || this._commandService["syncExecuteCommand"](var_core_value_sig5F1A.id, {
        'unitId': this._board["getId"](),
        'tableId': var_core_value_sig8889,
        'patch': {
          'rows': var_core_value_sig32F8.rows
        }
      }) : false;
    }
    setCellText(var_core_value_sig5B67, var_core_value_sig1758, var_core_value_sig4805) {
      let var_core_value_sigE67E = this.getTableId();
      return !var_core_value_sigE67E || !Number.isInteger(var_core_value_sig5B67) || !Number.isInteger(var_core_value_sig1758) || var_core_value_sig5B67 < 0 || var_core_value_sig1758 < 0 ? false : this._commandService["syncExecuteCommand"](var_core_value_sigFD0C.id, {
        'unitId': this._board["getId"](),
        'tableId': var_core_value_sigE67E,
        'row': var_core_value_sig5B67,
        'column': var_core_value_sig1758,
        'textData': V(var_core_value_sigE67E, var_core_value_sig5B67, var_core_value_sig1758, var_core_value_sig4805)
      });
    }
    setCellTextData(var_core_value_sig2902, var_core_value_sig9989, var_core_value_sig698E) {
      let var_core_value_sig2809 = this.getTableId();
      return !var_core_value_sig2809 || !Number.isInteger(var_core_value_sig2902) || !Number.isInteger(var_core_value_sig9989) || var_core_value_sig2902 < 0 || var_core_value_sig9989 < 0 ? false : this._commandService['syncExecuteCommand'](var_core_value_sigFD0C.id, {
        'unitId': this._board["getId"](),
        'tableId': var_core_value_sig2809,
        'row': var_core_value_sig2902,
        'column': var_core_value_sig9989,
        'textData': var_core_value_sig698E ? H(var_core_value_sig2809, var_core_value_sig2902, var_core_value_sig9989, var_core_value_sig698E) : null
      });
    }
    setCellRichText(var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8) {
      return this.setCellTextData(var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig9FBA.deepClone(var_core_value_sig20C8.getData()));
    }
    setCellStyle(var_core_value_sigE9A7, var_core_value_sigBECE) {
      let var_core_value_sig1B22 = this.getTableId();
      return !!var_core_value_sig1B22 && this._commandService["syncExecuteCommand"](var_core_value_sig9CD9.id, {
        'unitId': this._board['getId'](),
        'tableId': var_core_value_sig1B22,
        'range': var_core_value_sigE9A7,
        'style': var_core_value_sigBECE
      });
    }
    setBorderPreset(var_core_value_sig7F72, var_core_value_sig7B2A, var_core_value_sig06CD) {
      let var_core_value_sigA5F1 = this.getTableId();
      return !!var_core_value_sigA5F1 && this._commandService["syncExecuteCommand"](var_core_value_sigB7FC.id, {
        'unitId': this._board["getId"](),
        'tableId': var_core_value_sigA5F1,
        'range': var_core_value_sig7F72,
        'preset': var_core_value_sig7B2A,
        'border': var_core_value_sig06CD
      });
    }
    insertRows(var_core_value_sig97A2, var_core_value_sig07E9 = 1, var_core_value_sig4F59) {
      return this._executeWithElement(var_core_value_sig1BD9.id, {
        'rowIndex': var_core_value_sig97A2,
        'count': var_core_value_sig07E9,
        'height': var_core_value_sig4F59
      });
    }
    insertColumns(var_core_value_sigF564, var_core_value_sig8CFA = 1, var_core_value_sig2E11) {
      return this._executeWithElement(var_core_value_sigC4B1.id, {
        'columnIndex': var_core_value_sigF564,
        'count': var_core_value_sig8CFA,
        'width': var_core_value_sig2E11
      });
    }
    deleteRows(var_core_value_sig5B69, var_core_value_sigB098) {
      return this._execute({
        'commandId': var_core_value_sigC97C.id,
        'params': {
          'startRow': var_core_value_sig5B69,
          'endRow': var_core_value_sigB098
        }
      });
    }
    deleteColumns(var_core_value_sigCE71, var_core_value_sig21D8) {
      return this._execute({
        'commandId': var_core_value_sig3863.id,
        'params': {
          'startColumn': var_core_value_sigCE71,
          'endColumn': var_core_value_sig21D8
        }
      });
    }
    resizeRows(var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigB33B) {
      return this._execute({
        'commandId': var_core_value_sig5E6A.id,
        'params': {
          'startRow': var_core_value_sig2B65,
          'endRow': var_core_value_sigD7EA,
          'height': var_core_value_sigB33B
        }
      });
    }
    resizeColumns(var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sigEF3E) {
      return this._execute({
        'commandId': var_core_value_sig48DD.id,
        'params': {
          'startColumn': var_core_value_sig24B9,
          'endColumn': var_core_value_sigE627,
          'width': var_core_value_sigEF3E
        }
      });
    }
    moveRows(var_core_value_sig273D, var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sig2D58) {
      return this._execute({
        'commandId': var_core_value_sigCAD5.id,
        'params': {
          'startRow': var_core_value_sig273D,
          'endRow': var_core_value_sig9A0D,
          'targetRow': var_core_value_sigA319,
          'position': var_core_value_sig2D58
        }
      });
    }
    moveColumns(var_core_value_sig223F, var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sig58C1) {
      return this._execute({
        'commandId': var_core_value_sigA937.id,
        'params': {
          'startColumn': var_core_value_sig223F,
          'endColumn': var_core_value_sigD749,
          'targetColumn': var_core_value_sigCFFA,
          'position': var_core_value_sig58C1
        }
      });
    }
    mergeCells(var_core_value_sig5090) {
      return this._execute({
        'commandId': var_core_value_sigE43E.id,
        'params': {
          'range': var_core_value_sig5090
        }
      });
    }
    unmergeCell(var_core_value_sigC368, var_core_value_sigAD56) {
      return this._execute({
        'commandId': var_core_value_sig849B.id,
        'params': {
          'row': var_core_value_sigC368,
          'column': var_core_value_sigAD56
        }
      });
    }
    remove() {
      let var_core_value_sigDB4A = this.getTableId();
      return !!var_core_value_sigDB4A && this._commandService['syncExecuteCommand'](var_core_value_sigE503.id, {
        'unitId': this._board["getId"](),
        'subUnitId': this._pageId,
        'tableId': var_core_value_sigDB4A,
        'elementId': this._elementId
      });
    }
    _getElement() {
      let var_core_value_sig6418 = this._board["getElement"](this._elementId);
      return (var_core_value_sig6418 == null ? undefined : var_core_value_sig6418.type) === var_core_value_sigE347.Table ? var_core_value_sig6418 : null;
    }
    _executeWithElement(var_core_value_sig1896, var_core_value_sig0285) {
      return this._execute({
        'commandId': var_core_value_sig1896,
        'params': {
          ...var_core_value_sig0285,
          'subUnitId': this._pageId,
          'elementId': this._elementId
        }
      });
    }
    _execute(var_core_value_sig777D) {
      let var_core_value_sig3F4C = this.getTableId();
      return !!var_core_value_sig3F4C && this._commandService["syncExecuteCommand"](var_core_value_sig777D.commandId, {
        'unitId': this._board['getId'](),
        'tableId': var_core_value_sig3F4C,
        ...var_core_value_sig777D.params
      });
    }
  },
  F = class extends var_core_value_sigB455 {
    insertTable(var_core_value_sigD65A) {
      let var_core_value_sig5A13 = this.getData().activePageId,
        var_core_value_sigF593 = var_core_value_sigD65A.elementId ?? var_core_value_sigA2CE(8);
      return this.getElement(var_core_value_sigF593) ? null : this._injector['get'](var_core_value_sig72F6).syncExecuteCommand(var_core_value_sig3C5B.id, {
        'unitId': this.getId(),
        'subUnitId': var_core_value_sig5A13,
        'elementId': var_core_value_sigF593,
        'left': var_core_value_sigD65A.left,
        'top': var_core_value_sigD65A.top,
        'parentId': var_core_value_sigD65A.parentId,
        'laneId': var_core_value_sigD65A.laneId,
        'rows': var_core_value_sigD65A.rows,
        'columns': var_core_value_sigD65A.columns,
        'width': var_core_value_sigD65A.width,
        'height': var_core_value_sigD65A.height,
        'diagramPreset': var_core_value_sigD65A.diagramPreset
      }) ? this._createTableFacade(var_core_value_sigF593, var_core_value_sig5A13) : null;
    }
    getTable(var_core_value_sig3607) {
      let var_core_value_sigB512 = this.getData().activePageId,
        var_core_value_sigF2E6 = this.getElement(var_core_value_sig3607);
      return (var_core_value_sigF2E6 == null ? undefined : var_core_value_sigF2E6.type) === var_core_value_sigE347.Table ? this._createTableFacade(var_core_value_sig3607, var_core_value_sigB512) : null;
    }
    getTables() {
      let var_core_value_sig34C8 = this.getData().activePageId;
      return this.findElements({
        'elementType': var_core_value_sigE347.Table,
        'includeHidden': true,
        'includeLocked': true
      }).filter(var_core_value_sigFBA4 => var_core_value_sigFBA4.type === var_core_value_sigE347.Table).map(var_core_value_sig4383 => this._createTableFacade(var_core_value_sig4383.id, var_core_value_sig34C8));
    }
    _createTableFacade(var_core_value_sigB744, var_core_value_sigEAE2) {
      return new P(this, var_core_value_sigEAE2, var_core_value_sigB744, this._injector["get"](var_core_value_sig72F6), this._injector["get"](var_core_value_sigFC87));
    }
  };
function I(var_core_value_sigDE08) {
  var var_core_value_sigACCB;
  return ((var_core_value_sigDE08 == null || (var_core_value_sigACCB = var_core_value_sigDE08.body) == null ? undefined : var_core_value_sigACCB.dataStream) ?? '').replace(/\r\n$/, '').replace(/\r/g, '\x0a');
}
;
function L(var_core_value_sig7F33) {
  return var_core_value_sig7F33.rows["flatMap"]((var_core_value_sigE68A, var_core_value_sig3E68) => var_core_value_sigE68A.cells['flatMap']((var_core_value_sig186C, var_core_value_sigD955) => {
    let var_core_value_sig48BD = Math.max(1, var_core_value_sig186C.rowSpan ?? 1),
      var_core_value_sig429F = Math.max(1, var_core_value_sig186C.columnSpan ?? 1);
    return var_core_value_sig48BD > 1 || var_core_value_sig429F > 1 ? [{
      'startRow': var_core_value_sig3E68,
      'endRow': var_core_value_sig3E68 + var_core_value_sig48BD - 1,
      'startColumn': var_core_value_sigD955,
      'endColumn': var_core_value_sigD955 + var_core_value_sig429F - 1
    }] : [];
  }));
}
;
function R(var_core_value_sig0C53, var_core_value_sigEA04) {
  return [var_core_value_sigEA04.startRow, var_core_value_sigEA04.endRow, var_core_value_sigEA04.startColumn, var_core_value_sigEA04.endColumn].every(Number.isInteger) && var_core_value_sigEA04.startRow >= 0 && var_core_value_sigEA04.startColumn >= 0 && var_core_value_sigEA04.endRow >= var_core_value_sigEA04.startRow && var_core_value_sigEA04.endColumn >= var_core_value_sigEA04.startColumn && var_core_value_sigEA04.endRow < var_core_value_sig0C53.rows["length"] && var_core_value_sig0C53.rows["slice"](var_core_value_sigEA04.startRow, var_core_value_sigEA04.endRow + 1).every(var_core_value_sigF4C5 => var_core_value_sigEA04.endColumn < var_core_value_sigF4C5.cells["length"]);
}
;
function z(var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565) {
  var var_core_value_sigD4FB;
  let var_core_value_sig3E71 = ((var_core_value_sigD4FB = var_core_value_sig7A62[0]) == null ? undefined : var_core_value_sigD4FB.length) ?? 0;
  return var_core_value_sig7A62.length > 0 && var_core_value_sig3E71 > 0 && Number.isInteger(var_core_value_sig8109) && Number.isInteger(var_core_value_sig7565) && var_core_value_sig8109 >= 0 && var_core_value_sig7565 >= 0 && var_core_value_sig7A62.every(var_core_value_sig5410 => var_core_value_sig5410.length === var_core_value_sig3E71);
}
;
function B(var_core_value_sig01B3, var_core_value_sig7442, var_core_value_sigDF87, var_core_value_sig9EE0) {
  let var_core_value_sigF051 = var_core_value_sig9FBA.deepClone(var_core_value_sig01B3.rows),
    var_core_value_sig0B45 = var_core_value_sig7442[0].length,
    var_core_value_sig36F8 = false;
  for (let var_core_value_sig492F = 0; var_core_value_sig492F < var_core_value_sig7442.length; var_core_value_sig492F++) {
    let var_core_value_sigF62A = var_core_value_sigF051[var_core_value_sigDF87 + var_core_value_sig492F];
    if (!var_core_value_sigF62A) return null;
    for (let var_core_value_sigF704 = 0; var_core_value_sigF704 < var_core_value_sig0B45; var_core_value_sigF704++) {
      let var_core_value_sig8061 = var_core_value_sigF62A.cells[var_core_value_sig9EE0 + var_core_value_sigF704],
        var_core_value_sig4D4C = var_core_value_sig7442[var_core_value_sig492F][var_core_value_sigF704];
      if (!var_core_value_sig8061 || !var_core_value_sig4D4C || typeof var_core_value_sig4D4C.getData != "function") return null;
      let var_core_value_sigC9E0 = H(var_core_value_sig01B3.id, var_core_value_sigDF87 + var_core_value_sig492F, var_core_value_sig9EE0 + var_core_value_sigF704, var_core_value_sig4D4C.getData());
      var_core_value_sig9FBA.diffValue(var_core_value_sig8061.textData, var_core_value_sigC9E0) || (var_core_value_sig8061.textData = var_core_value_sigC9E0, var_core_value_sig36F8 = true);
    }
  }
  return {
    'rows': var_core_value_sigF051,
    'changed': var_core_value_sig36F8
  };
}
;
function V(var_core_value_sig03E1, var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigE799) {
  let var_core_value_sigB601 = var_core_value_sigE799.replace(/\r\n/g, '\x0a').replace(/\r/g, '\x0a');
  return H(var_core_value_sig03E1, var_core_value_sigBB57, var_core_value_sig7C4A, {
    'id': "BOARD_TABLE_" + var_core_value_sig03E1 + '_' + var_core_value_sigBB57 + '_' + var_core_value_sig7C4A,
    'body': {
      'dataStream': var_core_value_sigB601.replace(/\n/g, '\x0d') + '\x0d\x0a'
    },
    'documentStyle': {}
  });
}
;
function H(var_core_value_sig8B71, var_core_value_sigAEFB, var_core_value_sig826B, var_core_value_sigCF89) {
  var var_core_value_sig00CB, var_core_value_sig77EE, var_core_value_sig9F76;
  let var_core_value_sigB008 = var_core_value_sig9FBA.deepClone(var_core_value_sigCF89),
    var_core_value_sig8721 = (((var_core_value_sig00CB = var_core_value_sigB008.body) == null ? undefined : var_core_value_sig00CB.dataStream) ?? '').replace(/\r\n/g, '\x0d').replace(/\n/g, '\x0d'),
    var_core_value_sig08BA = var_core_value_sig8721 ? var_core_value_sig8721.endsWith('\x0d') ? var_core_value_sig8721 + '\x0a' : var_core_value_sig8721 + '\x0d\x0a' : '\x0d\x0a',
    var_core_value_sigDBB5 = Array.from(var_core_value_sig08BA.matchAll(/\r/g), var_core_value_sig8EA0 => var_core_value_sig8EA0.index),
    var_core_value_sigCFAC = ((var_core_value_sig77EE = var_core_value_sigB008.body) == null ? undefined : var_core_value_sig77EE.paragraphs) ?? [],
    var_core_value_sig237B = new Set(var_core_value_sigCFAC.map(var_core_value_sigA6F6 => var_core_value_sigA6F6.paragraphId).filter(var_core_value_sigCDDA => !!var_core_value_sigCDDA)),
    var_core_value_sigFEAB = var_core_value_sigDBB5.map((var_core_value_sigE243, var_core_value_sig74A8) => {
      var var_core_value_sig21B2;
      return {
        ...var_core_value_sigCFAC[var_core_value_sig74A8],
        'startIndex': var_core_value_sigE243,
        'paragraphId': ((var_core_value_sig21B2 = var_core_value_sigCFAC[var_core_value_sig74A8]) == null ? undefined : var_core_value_sig21B2.paragraphId) ?? var_core_value_sigFE01(var_core_value_sig237B)
      };
    });
  return {
    ...var_core_value_sigB008,
    'id': var_core_value_sigB008.id ?? "BOARD_TABLE_" + var_core_value_sig8B71 + '_' + var_core_value_sigAEFB + '_' + var_core_value_sig826B,
    'body': {
      ...var_core_value_sigB008.body,
      'dataStream': var_core_value_sig08BA,
      'paragraphs': var_core_value_sigFEAB,
      'textRuns': ((var_core_value_sig9F76 = var_core_value_sigB008.body) == null ? undefined : var_core_value_sig9F76.textRuns) ?? []
    },
    'documentStyle': {
      ...var_core_value_sigB008.documentStyle,
      'documentFlavor': var_core_value_sigF057.UNSPECIFIED
    }
  };
}
var_core_value_sigB455.extend(F);
var U = class extends var_core_value_sig1975 {
  get BoardTableDiagramPreset() {
    return var_core_value_sig200B;
  }
  get BoardTableFillTypeEnum() {
    return var_core_value_sig1537;
  }
  get BoardTableGradientFillTypeEnum() {
    return var_core_value_sigE4C6;
  }
  get BoardTablePictureFillModeEnum() {
    return var_core_value_sig4313;
  }
  get BoardTableBorderDashEnum() {
    return var_core_value_sigC6E5;
  }
  get BoardTableBorderPresetEnum() {
    return var_core_value_sigCEFB;
  }
  get BoardTableVerticalAlignEnum() {
    return var_core_value_sigDD51;
  }
  get BoardTableTextDirectionEnum() {
    return var_core_value_sig156F;
  }
};
var_core_value_sig1975.extend(U);
export { P as FBoardTable };
