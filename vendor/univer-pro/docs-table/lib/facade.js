import { DEFAULT_DOCS_TABLE_CELL_MARGIN as var_core_value_sig5825, DocsTableBorderPreset as var_core_value_sig4EB7, DocsTableColumnInsertPosition as var_core_value_sig73AF, DocsTableColumnType as var_core_value_sig548A, DocsTableDeleteColumnsCommand as var_core_value_sigE026, DocsTableDeleteRowsCommand as var_core_value_sig339E, DocsTableDeleteTableCommand as var_core_value_sig7550, DocsTableInsertPosition as var_core_value_sig2983, DocsTableInsertTableCommand as var_core_value_sigE1B0, DocsTableInsertTablePosition as var_core_value_sigD4FF, DocsTableModel as var_core_value_sig1E5B, DocsTableRowInsertPosition as var_core_value_sigB680, DocsTableSelectionKind as var_core_value_sig1F64, DocsTableSelectionService as var_core_value_sigDD1C, DocsTableSortDirection as var_core_value_sig2C39, buildDistributeTableColumnsMutationActions as var_core_value_sigB7D1, buildDistributeTableRowsMutationActions as var_core_value_sig64F0, buildInsertTableColumnsMutationActions as var_core_value_sig85B1, buildInsertTableRowsMutationActions as var_core_value_sig3141, buildInsertTableTitleRowMutationActions as var_core_value_sig2162, buildMergeCellsMutationActions as var_core_value_sig2EAD, buildMoveFloatingTableMutationActions as var_core_value_sig6774, buildMoveTableColumnsMutationActions as var_core_value_sig340D, buildMoveTableRowsMutationActions as var_core_value_sig82D4, buildMoveTableToOffsetMutationActions as var_core_value_sigBDE4, buildResizeTableColumnActionsFromWidth as var_core_value_sig7DF1, buildResizeTableRowActionsFromHeight as var_core_value_sigDC86, buildSetTableBackgroundMutationActions as var_core_value_sig0B0C, buildSetTableBorderMutationActions as var_core_value_sigA39E, buildSetTableCellMarginMutationActions as var_core_value_sigBBEE, buildSetTableCellTextMutationActions as var_core_value_sig011D, buildSetTableDefaultCellMarginMutationActions as var_core_value_sig6167, buildSetTableHeaderRowCountMutationActions as var_core_value_sig65A1, buildSortTableMutationActions as var_core_value_sig7F19, buildUnmergeCellsMutationActions as var_core_value_sig7827, executeRichTextTableActions as var_core_value_sig652C, getTableActionBodyPath as var_core_value_sig7E32, getTableRangeById as var_core_value_sig4C07 } from '@univerjs-pro/docs-table';
import { DashStyleType as var_core_value_sig79AB, ICommandService as var_core_value_sig8E74, Inject as var_core_value_sig104C, Injector as var_core_value_sig841D, TableRowHeightRule as var_core_value_sig90CB, Tools as var_core_value_sigBDF5, generateRandomId as var_core_value_sigACC6 } from '@univerjs/core';
import { FEnum as var_core_value_sig1614 } from '@univerjs/core/facade';
import { FDocument as var_core_value_sig85C3 } from '@univerjs/docs/facade';
var K = class extends var_core_value_sig1614 {
  get DocsTableInsertTablePosition() {
    return var_core_value_sigD4FF;
  }
  get DocsTableColumnType() {
    return var_core_value_sig548A;
  }
  get DocsTableSelectionKind() {
    return var_core_value_sig1F64;
  }
  get DocsTableRowInsertPosition() {
    return var_core_value_sigB680;
  }
  get DocsTableColumnInsertPosition() {
    return var_core_value_sig73AF;
  }
  get DocsTableBorderPreset() {
    return var_core_value_sig4EB7;
  }
  get DocsTableSortDirection() {
    return var_core_value_sig2C39;
  }
  get DashStyleType() {
    return var_core_value_sig79AB;
  }
};
var_core_value_sig1614.extend(K);
var q = class {
  constructor(var_core_value_sigFBA4, var_core_value_sig4383, var_core_value_sig186C) {
    this._table = var_core_value_sigFBA4, this._row = var_core_value_sig4383, this._column = var_core_value_sig186C;
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
  getText() {
    return this._table["getCellText"](this._row, this._column);
  }
  getContentRange() {
    return this._table["getCellContentRange"](this._row, this._column);
  }
  getInsertOffset() {
    return this._table['getCellInsertOffset'](this._row, this._column);
  }
  getMargin() {
    return this._table['getCellMargin'](this._row, this._column);
  }
  getMarginOverride() {
    return this._table["getCellMarginOverride"](this._row, this._column);
  }
  setMargin(var_core_value_sigD955) {
    return this._table["setCellMargin"](this._table["getCellRange"](this._row, this._column), var_core_value_sigD955);
  }
  clearMarginOverride() {
    return this._table["setCellMargin"](this._table["getCellRange"](this._row, this._column), null);
  }
  setText(var_core_value_sig48BD) {
    return this._table['setCellText'](this._row, this._column, var_core_value_sig48BD);
  }
  setBackgroundColor(var_core_value_sig429F) {
    return this._table['setCellBackground'](this._table["getCellRange"](this._row, this._column), var_core_value_sig429F);
  }
  setBorder(var_core_value_sigF62A) {
    return this._table['setBorder'](this._table["getCellRange"](this._row, this._column), var_core_value_sigF62A);
  }
  mergeTo(var_core_value_sig8178, var_core_value_sigE9ED) {
    return this._table["mergeCells"]({
      'startRow': this._row,
      'startColumn': this._column,
      'endRow': this._row + var_core_value_sig8178 - 1,
      'endColumn': this._column + var_core_value_sigE9ED - 1
    });
  }
  unmerge() {
    return this._table["unmergeCells"](this._table["getCellRange"](this._row, this._column));
  }
};
function J(var_core_value_sig6A71) {
  '@babel/helpers - typeof';

  return J = typeof Symbol == 'function' && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigB577) {
    return typeof var_core_value_sigB577;
  } : function (var_core_value_sig9572) {
    return var_core_value_sig9572 && typeof Symbol == "function" && var_core_value_sig9572.constructor === Symbol && var_core_value_sig9572 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig9572;
  }, J(var_core_value_sig6A71);
}
;
function Y(var_core_value_sig3BF6, var_core_value_sig38CE) {
  if (J(var_core_value_sig3BF6) != 'object' || !var_core_value_sig3BF6) return var_core_value_sig3BF6;
  var var_core_value_sig62B7 = var_core_value_sig3BF6[Symbol.toPrimitive];
  if (var_core_value_sig62B7 !== undefined) {
    var var_core_value_sig37A8 = var_core_value_sig62B7.call(var_core_value_sig3BF6, var_core_value_sig38CE || 'default');
    if (J(var_core_value_sig37A8) != "object") return var_core_value_sig37A8;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig38CE === "string" ? String : Number)(var_core_value_sig3BF6);
}
;
function X(var_core_value_sigA90D) {
  var var_core_value_sig7A3C = Y(var_core_value_sigA90D, "string");
  return J(var_core_value_sig7A3C) == "symbol" ? var_core_value_sig7A3C : var_core_value_sig7A3C + '';
}
;
function Z(var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04) {
  return (var_core_value_sig1F44 = X(var_core_value_sig1F44)) in var_core_value_sig0511 ? Object.defineProperty(var_core_value_sig0511, var_core_value_sig1F44, {
    'value': var_core_value_sigCB04,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_core_value_sig0511[var_core_value_sig1F44] = var_core_value_sigCB04, var_core_value_sig0511;
}
;
function Q(var_core_value_sig947E, var_core_value_sig4545) {
  return function (var_core_value_sigD873, var_core_value_sigA12B) {
    var_core_value_sig4545(var_core_value_sigD873, var_core_value_sigA12B, var_core_value_sig947E);
  };
}
;
function te(var_core_value_sigF39A, var_core_value_sigF79C, var_core_value_sig2E54, var_core_value_sig7658) {
  var var_core_value_sigDCF5 = arguments.length,
    var_core_value_sigC786 = var_core_value_sigDCF5 < 3 ? var_core_value_sigF79C : var_core_value_sig7658 === null ? var_core_value_sig7658 = Object.getOwnPropertyDescriptor(var_core_value_sigF79C, var_core_value_sig2E54) : var_core_value_sig7658,
    var_core_value_sigC0D9;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigC786 = Reflect.decorate(var_core_value_sigF39A, var_core_value_sigF79C, var_core_value_sig2E54, var_core_value_sig7658);else {
    for (var var_core_value_sigF051 = var_core_value_sigF39A.length - 1; var_core_value_sigF051 >= 0; var_core_value_sigF051--) (var_core_value_sigC0D9 = var_core_value_sigF39A[var_core_value_sigF051]) && (var_core_value_sigC786 = (var_core_value_sigDCF5 < 3 ? var_core_value_sigC0D9(var_core_value_sigC786) : var_core_value_sigDCF5 > 3 ? var_core_value_sigC0D9(var_core_value_sigF79C, var_core_value_sig2E54, var_core_value_sigC786) : var_core_value_sigC0D9(var_core_value_sigF79C, var_core_value_sig2E54)) || var_core_value_sigC786);
  }
  return var_core_value_sigDCF5 > 3 && var_core_value_sigC786 && Object.defineProperty(var_core_value_sigF79C, var_core_value_sig2E54, var_core_value_sigC786), var_core_value_sigC786;
}
let $ = class {
  constructor(var_core_value_sigF230, var_core_value_sig09B8, var_core_value_sig6F91, var_core_value_sigF9C7, var_core_value_sig8895) {
    this._document = var_core_value_sigF230, this._tableId = var_core_value_sig09B8, this._segmentId = var_core_value_sig6F91, this._commandService = var_core_value_sigF9C7, this._injector = var_core_value_sig8895, Z(this, '_unitId', undefined), this._unitId = this._document["getId"]();
  }
  getId() {
    return this._tableId;
  }
  getSegmentId() {
    return this._segmentId;
  }
  getInfo() {
    return {
      'id': this._tableId,
      'rowCount': this.getRowCount(),
      'columnCount': this.getColumnCount(),
      'metadata': this.getMetadata(),
      'source': this.getSource()
    };
  }
  describe() {
    let var_core_value_sigC80B = this.getMetadata(),
      var_core_value_sig284F = this.getSource(),
      var_core_value_sigE154 = this.getColumnCount();
    return {
      'id': this._tableId,
      'rowCount': this.getRowCount(),
      'columnCount': var_core_value_sigE154,
      'headerRowCount': (var_core_value_sigC80B == null ? undefined : var_core_value_sigC80B.headerRowCount) ?? 0,
      'titleRow': (var_core_value_sigC80B == null ? undefined : var_core_value_sigC80B.titleRow) ?? false,
      'columns': Array.from({
        'length': var_core_value_sigE154
      }, (var_core_value_sig3EEE, var_core_value_sigBC46) => {
        var var_core_value_sig3D7D, var_core_value_sig27E5;
        return {
          'index': var_core_value_sigBC46,
          'type': var_core_value_sigC80B == null || (var_core_value_sig3D7D = var_core_value_sigC80B.columnTypes) == null || (var_core_value_sig3D7D = var_core_value_sig3D7D[var_core_value_sigBC46]) == null ? undefined : var_core_value_sig3D7D.type,
          'width': var_core_value_sig284F == null || (var_core_value_sig27E5 = var_core_value_sig284F.tableColumns[var_core_value_sigBC46]) == null ? undefined : var_core_value_sig27E5.size["width"].v
        };
      }),
      'sampleRows': Array.from({
        'length': this.getRowCount()
      }, (var_core_value_sig8061, var_core_value_sig4D4C) => Array.from({
        'length': var_core_value_sigE154
      }, (var_core_value_sig7524, var_core_value_sig2AD8) => this.getCellText(var_core_value_sig4D4C, var_core_value_sig2AD8))).filter(var_core_value_sigC9E0 => var_core_value_sigC9E0.some(var_core_value_sig2AD0 => var_core_value_sig2AD0.length > 0)).slice(0, 5)
    };
  }
  getRowCount() {
    var var_core_value_sig4632;
    return ((var_core_value_sig4632 = this.getSource()) == null ? undefined : var_core_value_sig4632.tableRows['length']) ?? 0;
  }
  getColumnCount() {
    var var_core_value_sig12F2;
    return ((var_core_value_sig12F2 = this.getSource()) == null ? undefined : var_core_value_sig12F2.tableColumns["length"]) ?? 0;
  }
  getCell(var_core_value_sig2259, var_core_value_sig9E2F) {
    var var_core_value_sigD082;
    return (var_core_value_sigD082 = this.getSource()) != null && (var_core_value_sigD082 = var_core_value_sigD082.tableRows[var_core_value_sig2259]) != null && var_core_value_sigD082.tableCells[var_core_value_sig9E2F] ? this._injector["createInstance"](q, this, var_core_value_sig2259, var_core_value_sig9E2F) : null;
  }
  getCellText(var_core_value_sigDBB7, var_core_value_sigD0A8) {
    var var_core_value_sigF4B9, var_core_value_sig5CEE;
    let var_core_value_sigE92A = (var_core_value_sigF4B9 = var_core_value_sig4C07(this._getDocumentData(), this._tableId)) == null || (var_core_value_sigF4B9 = var_core_value_sigF4B9.rows[var_core_value_sigDBB7]) == null ? undefined : var_core_value_sigF4B9.cells[var_core_value_sigD0A8];
    return var_core_value_sigE92A ? ((var_core_value_sig5CEE = this._getDocumentData().body) == null ? undefined : var_core_value_sig5CEE.dataStream['slice'](var_core_value_sigE92A.startOffset + 1, var_core_value_sigE92A.endOffset).replace(/\r\n$/, '')) ?? '' : '';
  }
  getCellMargin(var_core_value_sig362B, var_core_value_sig5CA5) {
    var var_core_value_sigE90F;
    let var_core_value_sigEFD4 = this.getSource(),
      var_core_value_sig861B = var_core_value_sigEFD4 == null || (var_core_value_sigE90F = var_core_value_sigEFD4.tableRows[var_core_value_sig362B]) == null ? undefined : var_core_value_sigE90F.tableCells[var_core_value_sig5CA5];
    return var_core_value_sig861B ? var_core_value_sigBDF5.deepClone(var_core_value_sig861B.margin ?? var_core_value_sigEFD4.cellMargin ?? var_core_value_sig5825) : null;
  }
  getCellMarginOverride(var_core_value_sig5237, var_core_value_sigBB00) {
    var var_core_value_sig7E54;
    let var_core_value_sig9A8D = (var_core_value_sig7E54 = this.getSource()) == null || (var_core_value_sig7E54 = var_core_value_sig7E54.tableRows[var_core_value_sig5237]) == null ? undefined : var_core_value_sig7E54.tableCells[var_core_value_sigBB00];
    return var_core_value_sig9A8D != null && var_core_value_sig9A8D.margin ? var_core_value_sigBDF5.deepClone(var_core_value_sig9A8D.margin) : null;
  }
  getDefaultCellMargin() {
    var var_core_value_sigC259;
    return var_core_value_sigBDF5.deepClone(((var_core_value_sigC259 = this.getSource()) == null ? undefined : var_core_value_sigC259.cellMargin) ?? var_core_value_sig5825);
  }
  getDefaultCellMarginOverride() {
    var var_core_value_sig9C9F;
    let var_core_value_sigFDEA = (var_core_value_sig9C9F = this.getSource()) == null ? undefined : var_core_value_sig9C9F.cellMargin;
    return var_core_value_sigFDEA ? var_core_value_sigBDF5.deepClone(var_core_value_sigFDEA) : null;
  }
  getMetadata() {
    return this._injector["get"](var_core_value_sig1E5B).getTableMetadata(this._unitId, this._tableId);
  }
  getSource() {
    var var_core_value_sig86D0;
    return (var_core_value_sig86D0 = this._getDocumentData().tableSource) == null ? undefined : var_core_value_sig86D0[this._tableId];
  }
  getRange() {
    return var_core_value_sig4C07(this._getDocumentData(), this._tableId);
  }
  getTableRange() {
    return {
      'startRow': 0,
      'endRow': Math.max(0, this.getRowCount() - 1),
      'startColumn': 0,
      'endColumn': Math.max(0, this.getColumnCount() - 1)
    };
  }
  getCellRange(var_core_value_sig4CD2, var_core_value_sig48CA) {
    return {
      'startRow': var_core_value_sig4CD2,
      'endRow': var_core_value_sig4CD2,
      'startColumn': var_core_value_sig48CA,
      'endColumn': var_core_value_sig48CA
    };
  }
  getCellContentRange(var_core_value_sig50AF, var_core_value_sigA942) {
    var var_core_value_sigA621;
    let var_core_value_sigBBFF = (var_core_value_sigA621 = var_core_value_sig4C07(this._getDocumentData(), this._tableId)) == null || (var_core_value_sigA621 = var_core_value_sigA621.rows[var_core_value_sig50AF]) == null ? undefined : var_core_value_sigA621.cells[var_core_value_sigA942];
    if (!var_core_value_sigBBFF) return null;
    let var_core_value_sig8889 = var_core_value_sigBBFF.startOffset + 1;
    return {
      'startOffset': var_core_value_sig8889,
      'endOffset': Math.max(var_core_value_sig8889, var_core_value_sigBBFF.endOffset - 1),
      'segmentId': this._segmentId
    };
  }
  getCellInsertOffset(var_core_value_sig32F8, var_core_value_sig5B67) {
    let var_core_value_sig1758 = this.getCellContentRange(var_core_value_sig32F8, var_core_value_sig5B67);
    return var_core_value_sig1758 ? Math.max(var_core_value_sig1758.startOffset, var_core_value_sig1758.endOffset - 1) : null;
  }
  getRowRange(var_core_value_sig4805) {
    return this.getRowsRange(var_core_value_sig4805, 1);
  }
  getRowsRange(var_core_value_sigE67E, var_core_value_sig2902 = 1) {
    return {
      'startRow': var_core_value_sigE67E,
      'endRow': var_core_value_sigE67E + var_core_value_sig2902 - 1,
      'startColumn': 0,
      'endColumn': Math.max(0, this.getColumnCount() - 1)
    };
  }
  getColumnRange(var_core_value_sig9989) {
    return this.getColumnsRange(var_core_value_sig9989, 1);
  }
  getColumnsRange(var_core_value_sig698E, var_core_value_sig2809 = 1) {
    return {
      'startRow': 0,
      'endRow': Math.max(0, this.getRowCount() - 1),
      'startColumn': var_core_value_sig698E,
      'endColumn': var_core_value_sig698E + var_core_value_sig2809 - 1
    };
  }
  selectTable() {
    return this.selectRange(this.getTableRange(), var_core_value_sig1F64.Table);
  }
  selectRow(var_core_value_sig2DAB) {
    return this.selectRows(var_core_value_sig2DAB, 1);
  }
  selectRows(var_core_value_sig877E, var_core_value_sig20C8 = 1) {
    return this.selectRange(this.getRowsRange(var_core_value_sig877E, var_core_value_sig20C8), var_core_value_sig1F64.Row);
  }
  selectColumn(var_core_value_sigE9A7) {
    return this.selectColumns(var_core_value_sigE9A7, 1);
  }
  selectColumns(var_core_value_sigBECE, var_core_value_sig1B22 = 1) {
    return this.selectRange(this.getColumnsRange(var_core_value_sigBECE, var_core_value_sig1B22), var_core_value_sig1F64.Column);
  }
  selectCell(var_core_value_sig7F72, var_core_value_sig7B2A) {
    return this.selectRange(this.getCellRange(var_core_value_sig7F72, var_core_value_sig7B2A), var_core_value_sig1F64.Cell);
  }
  selectRange(var_core_value_sig06CD, var_core_value_sigA5F1 = var_core_value_sig1F64.Range) {
    return this._injector["get"](var_core_value_sigDD1C).setStructuralSelection({
      ...var_core_value_sig06CD,
      'kind': var_core_value_sigA5F1,
      'segmentId': this._segmentId,
      'tableId': this._tableId
    }), true;
  }
  insertRowBefore(var_core_value_sig97A2) {
    return this.insertRowsBefore(var_core_value_sig97A2, 1);
  }
  insertRowAfter(var_core_value_sig07E9) {
    return this.insertRowsAfter(var_core_value_sig07E9, 1);
  }
  insertRowsBefore(var_core_value_sig4F59, var_core_value_sigF564) {
    let var_core_value_sig8CFA = this._getDocumentData(),
      var_core_value_sig2E11 = var_core_value_sig3141(var_core_value_sig8CFA, this._tableId, var_core_value_sig4F59, var_core_value_sigF564, var_core_value_sig2983.Above, this._getBodyPath());
    return var_core_value_sig2E11 ? this._mutateActions(var_core_value_sig8CFA, var_core_value_sig2E11.actions) : false;
  }
  insertRowsAfter(var_core_value_sig5B69, var_core_value_sigB098) {
    let var_core_value_sigCE71 = this._getDocumentData(),
      var_core_value_sig21D8 = var_core_value_sig3141(var_core_value_sigCE71, this._tableId, var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sig2983.Below, this._getBodyPath());
    return var_core_value_sig21D8 ? this._mutateActions(var_core_value_sigCE71, var_core_value_sig21D8.actions) : false;
  }
  appendRow() {
    return this.insertRowsAfter(Math.max(0, this.getRowCount() - 1), 1);
  }
  insertColumnBefore(var_core_value_sig2B65) {
    return this.insertColumnsBefore(var_core_value_sig2B65, 1);
  }
  insertColumnAfter(var_core_value_sigD7EA) {
    return this.insertColumnsAfter(var_core_value_sigD7EA, 1);
  }
  insertColumnsBefore(var_core_value_sigB33B, var_core_value_sig24B9) {
    let var_core_value_sigE627 = this._getDocumentData(),
      var_core_value_sigEF3E = var_core_value_sig85B1(var_core_value_sigE627, this._tableId, var_core_value_sigB33B, var_core_value_sig24B9, var_core_value_sig2983.Left, {
        'bodyPath': this._getBodyPath()
      });
    return var_core_value_sigEF3E ? this._mutateActions(var_core_value_sigE627, var_core_value_sigEF3E.actions) : false;
  }
  insertColumnsAfter(var_core_value_sig273D, var_core_value_sig9A0D) {
    let var_core_value_sigA319 = this._getDocumentData(),
      var_core_value_sig2D58 = var_core_value_sig85B1(var_core_value_sigA319, this._tableId, var_core_value_sig273D, var_core_value_sig9A0D, var_core_value_sig2983.Right, {
        'bodyPath': this._getBodyPath()
      });
    return var_core_value_sig2D58 ? this._mutateActions(var_core_value_sigA319, var_core_value_sig2D58.actions) : false;
  }
  appendColumn() {
    return this.insertColumnsAfter(Math.max(0, this.getColumnCount() - 1), 1);
  }
  deleteRow(var_core_value_sig223F) {
    return this.deleteRows(var_core_value_sig223F, 1);
  }
  deleteRows(var_core_value_sigD749, var_core_value_sigCFFA = 1) {
    return !!this._commandService["syncExecuteCommand"](var_core_value_sig339E.id, {
      'endRow': var_core_value_sigD749 + var_core_value_sigCFFA - 1,
      'segmentId': this._segmentId,
      'startRow': var_core_value_sigD749,
      'tableId': this._tableId,
      'unitId': this._unitId
    });
  }
  deleteColumn(var_core_value_sig58C1) {
    return this.deleteColumns(var_core_value_sig58C1, 1);
  }
  deleteColumns(var_core_value_sig5090, var_core_value_sigC368 = 1) {
    return !!this._commandService['syncExecuteCommand'](var_core_value_sigE026.id, {
      'endColumn': var_core_value_sig5090 + var_core_value_sigC368 - 1,
      'segmentId': this._segmentId,
      'startColumn': var_core_value_sig5090,
      'tableId': this._tableId,
      'unitId': this._unitId
    });
  }
  deleteTable() {
    return !!this._commandService["syncExecuteCommand"](var_core_value_sig7550.id, {
      'segmentId': this._segmentId,
      'tableId': this._tableId,
      'unitId': this._unitId
    });
  }
  moveTableBy(var_core_value_sigAD56, var_core_value_sigDB4A) {
    let var_core_value_sig6418 = this._getDocumentData();
    return this._mutateActions(var_core_value_sig6418, var_core_value_sig6774(var_core_value_sig6418, this._tableId, var_core_value_sigAD56, var_core_value_sigDB4A));
  }
  moveTableToOffset(var_core_value_sig1896) {
    let var_core_value_sig0285 = this._getDocumentData();
    return this._mutateActions(var_core_value_sig0285, var_core_value_sigBDE4(var_core_value_sig0285, this._tableId, var_core_value_sig1896, this._getBodyPath()));
  }
  moveRow(var_core_value_sig777D, var_core_value_sig3F4C, var_core_value_sigD65A = var_core_value_sig2983.Above) {
    return this.moveRows(var_core_value_sig777D, 1, var_core_value_sig3F4C, var_core_value_sigD65A);
  }
  moveRows(var_core_value_sig5A13, var_core_value_sigF593, var_core_value_sig3607, var_core_value_sigB512 = var_core_value_sig2983.Above) {
    let var_core_value_sigF2E6 = this._getDocumentData(),
      var_core_value_sig34C8 = var_core_value_sig82D4(var_core_value_sigF2E6, this._tableId, var_core_value_sig5A13, var_core_value_sig3607, var_core_value_sigF593, var_core_value_sigB512, this._getBodyPath());
    return var_core_value_sig34C8 ? this._mutateActions(var_core_value_sigF2E6, var_core_value_sig34C8.actions) : false;
  }
  moveColumn(var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A = var_core_value_sig2983.Left) {
    return this.moveColumns(var_core_value_sigB744, 1, var_core_value_sigEAE2, var_core_value_sigE68A);
  }
  moveColumns(var_core_value_sig3E68, var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F = var_core_value_sig2983.Left) {
    let var_core_value_sig8EA0 = this._getDocumentData(),
      var_core_value_sigA6F6 = var_core_value_sig340D(var_core_value_sig8EA0, this._tableId, var_core_value_sig3E68, var_core_value_sig5410, var_core_value_sigF4C5, var_core_value_sig492F, this._getBodyPath());
    return var_core_value_sigA6F6 ? this._mutateActions(var_core_value_sig8EA0, var_core_value_sigA6F6.actions) : false;
  }
  mergeCells(var_core_value_sigCDDA) {
    try {
      let var_core_value_sig76BA = this._getDocumentData(),
        var_core_value_sigFBFA = var_core_value_sig2EAD({
          'documentData': var_core_value_sig76BA,
          'tableId': this._tableId,
          ...var_core_value_sigCDDA
        });
      return var_core_value_sigFBFA ? this._mutateActions(var_core_value_sig76BA, var_core_value_sigFBFA.actions, var_core_value_sigCDDA) : false;
    } catch {
      return false;
    }
  }
  unmergeCells(var_core_value_sigE243) {
    try {
      let var_core_value_sigF602 = this._getDocumentData(),
        var_core_value_sig1BBD = var_core_value_sig7827({
          'documentData': var_core_value_sigF602,
          'tableId': this._tableId,
          ...var_core_value_sigE243
        });
      return var_core_value_sig1BBD ? this._mutateActions(var_core_value_sigF602, var_core_value_sig1BBD.actions, var_core_value_sigE243) : false;
    } catch {
      return false;
    }
  }
  setCellText(var_core_value_sig74A8, var_core_value_sig21B2, var_core_value_sigDE08) {
    let var_core_value_sigACCB = this._getDocumentData(),
      var_core_value_sig7F33 = var_core_value_sig7E32(this._document["getDocumentDataModel"]().getSnapshot(), this._segmentId);
    return this._mutateActions(var_core_value_sigACCB, var_core_value_sig011D({
      'documentData': var_core_value_sigACCB,
      'tableId': this._tableId,
      'row': var_core_value_sig74A8,
      'column': var_core_value_sig21B2,
      'text': var_core_value_sigDE08
    }, var_core_value_sig7F33), this.getCellRange(var_core_value_sig74A8, var_core_value_sig21B2));
  }
  setCellBackground(var_core_value_sig0C53, var_core_value_sigEA04) {
    let var_core_value_sig7A62 = this._getDocumentData();
    return this._mutateActions(var_core_value_sig7A62, var_core_value_sig0B0C(var_core_value_sig7A62, {
      'tableId': this._tableId,
      ...var_core_value_sig0C53,
      'value': var_core_value_sigEA04
    }), var_core_value_sig0C53);
  }
  setCellMargin(var_core_value_sig8109, var_core_value_sig7565) {
    let var_core_value_sigD4FB = this._getDocumentData();
    return this._mutateActions(var_core_value_sigD4FB, var_core_value_sigBBEE({
      'documentData': var_core_value_sigD4FB,
      'tableId': this._tableId,
      ...var_core_value_sig8109,
      'margin': var_core_value_sig7565
    }), var_core_value_sig8109);
  }
  setDefaultCellMargin(var_core_value_sig3E71) {
    let var_core_value_sig01B3 = this._getDocumentData();
    return this._mutateActions(var_core_value_sig01B3, var_core_value_sig6167(var_core_value_sig01B3, this._tableId, var_core_value_sig3E71));
  }
  setBorder(var_core_value_sig7442, var_core_value_sigDF87) {
    let var_core_value_sig9EE0 = this._getDocumentData();
    return this._mutateActions(var_core_value_sig9EE0, var_core_value_sigA39E({
      'documentData': var_core_value_sig9EE0,
      'tableId': this._tableId,
      ...var_core_value_sig7442,
      'preset': var_core_value_sigDF87.preset ?? var_core_value_sig4EB7.All,
      'border': var_core_value_sigDF87.border ?? {
        'color': {
          'rgb': var_core_value_sigDF87.color ?? "#1f1f1f"
        },
        'width': {
          'v': var_core_value_sigDF87.width ?? 1
        },
        'dashStyle': var_core_value_sig79AB.SOLID
      }
    }), var_core_value_sig7442);
  }
  setTableBackground(var_core_value_sigF0511) {
    return this.setCellBackground(this.getTableRange(), var_core_value_sigF0511);
  }
  setTableBorder(var_core_value_sig0B45) {
    return this.setBorder(this.getTableRange(), var_core_value_sig0B45);
  }
  setTableStyle(var_core_value_sig36F8) {
    let var_core_value_sig03E1 = !var_core_value_sig36F8.backgroundColor || this.setTableBackground(var_core_value_sig36F8.backgroundColor),
      var_core_value_sigBB57 = !var_core_value_sig36F8.border || this.setTableBorder(var_core_value_sig36F8.border);
    return var_core_value_sig03E1 && var_core_value_sigBB57;
  }
  setRowHeight(var_core_value_sig7C4A, var_core_value_sigE799, var_core_value_sigB601 = var_core_value_sig90CB.AT_LEAST) {
    var var_core_value_sig8B71;
    let var_core_value_sigAEFB = this._getDocumentData();
    return (var_core_value_sig8B71 = var_core_value_sigAEFB.tableSource) != null && (var_core_value_sig8B71 = var_core_value_sig8B71[this._tableId]) != null && var_core_value_sig8B71.tableRows[var_core_value_sig7C4A] ? this._mutateActions(var_core_value_sigAEFB, var_core_value_sigDC86(var_core_value_sigAEFB, this._tableId, var_core_value_sig7C4A, var_core_value_sigE799, var_core_value_sigB601)) : false;
  }
  getRowHeight(var_core_value_sig826B) {
    var var_core_value_sigCF89;
    let var_core_value_sig00CB = (var_core_value_sigCF89 = this.getSource()) == null || (var_core_value_sigCF89 = var_core_value_sigCF89.tableRows[var_core_value_sig826B]) == null ? undefined : var_core_value_sigCF89.trHeight;
    return var_core_value_sig00CB ? var_core_value_sigBDF5.deepClone(var_core_value_sig00CB) : null;
  }
  setColumnWidth(var_core_value_sig77EE, var_core_value_sig9F76) {
    var var_core_value_sigB008;
    let var_core_value_sig8721 = this._getDocumentData();
    return (var_core_value_sigB008 = var_core_value_sig8721.tableSource) != null && (var_core_value_sigB008 = var_core_value_sigB008[this._tableId]) != null && var_core_value_sigB008.tableColumns[var_core_value_sig77EE] ? this._mutateActions(var_core_value_sig8721, var_core_value_sig7DF1(var_core_value_sig8721, this._tableId, var_core_value_sig77EE, var_core_value_sig9F76)) : false;
  }
  distributeRows(var_core_value_sig08BA = 0, var_core_value_sigDBB5 = this.getRowCount()) {
    let var_core_value_sigCFAC = this._getDocumentData();
    return this._mutateActions(var_core_value_sigCFAC, var_core_value_sig64F0(var_core_value_sigCFAC, this._tableId, var_core_value_sig08BA, var_core_value_sig08BA + var_core_value_sigDBB5 - 1));
  }
  distributeColumns(var_core_value_sig237B = 0, var_core_value_sigFEAB = this.getColumnCount()) {
    let var_core_value_sigE347 = this._getDocumentData();
    return this._mutateActions(var_core_value_sigE347, var_core_value_sigB7D1(var_core_value_sigE347, this._tableId, var_core_value_sig237B, var_core_value_sig237B + var_core_value_sigFEAB - 1));
  }
  getHeaderRowCount() {
    var var_core_value_sig3C5B;
    return ((var_core_value_sig3C5B = this.getMetadata()) == null ? undefined : var_core_value_sig3C5B.headerRowCount) ?? 0;
  }
  setHeaderRowCount(var_core_value_sig200B) {
    let var_core_value_sig3863 = this._injector['get'](var_core_value_sig1E5B),
      var_core_value_sigC97C = this._getDocumentData(),
      var_core_value_sigC4B1 = var_core_value_sig65A1(var_core_value_sigC97C, this._tableId, var_core_value_sig200B);
    if (!var_core_value_sigC4B1) return false;
    let var_core_value_sig1BD9 = this._mutateActions(var_core_value_sigC97C, var_core_value_sigC4B1.actions);
    return var_core_value_sig1BD9 && var_core_value_sig3863.setHeaderRowCount(this._unitId, this._tableId, var_core_value_sigC4B1.headerRowCount), var_core_value_sig1BD9;
  }
  pinHeaderRows(var_core_value_sigE43E) {
    return this.setHeaderRowCount(var_core_value_sigE43E);
  }
  hasTitleRow() {
    var var_core_value_sigA937;
    return ((var_core_value_sigA937 = this.getMetadata()) == null ? undefined : var_core_value_sigA937.titleRow) ?? false;
  }
  insertTitleRow() {
    let var_core_value_sigCAD5 = this._injector['get'](var_core_value_sig1E5B),
      var_core_value_sigE503 = this._getDocumentData(),
      var_core_value_sig48DD = var_core_value_sig2162(var_core_value_sigE503, this._tableId, this._getBodyPath());
    if (!var_core_value_sig48DD) return false;
    let var_core_value_sig5E6A = this._mutateActions(var_core_value_sigE503, var_core_value_sig48DD.actions);
    return var_core_value_sig5E6A && var_core_value_sigCAD5.setTitleRow(this._unitId, this._tableId, true), var_core_value_sig5E6A;
  }
  setColumnType(var_core_value_sigB7FC, var_core_value_sig9CD9) {
    return this._injector["get"](var_core_value_sig1E5B).setColumnType(this._unitId, this._tableId, var_core_value_sigB7FC, var_core_value_sig9CD9), true;
  }
  sortByColumn(var_core_value_sigFD0C, var_core_value_sig849B) {
    let var_core_value_sig5F1A = this._getDocumentData();
    return this._mutateActions(var_core_value_sig5F1A, var_core_value_sig7F19(var_core_value_sig5F1A, this._serializeModel(), this._tableId, var_core_value_sigFD0C, var_core_value_sig849B, this._getBodyPath()));
  }
  _getDocumentData() {
    let var_core_value_sigB455 = this._document["getDocumentDataModel"]().getSnapshot();
    return this._segmentId ? {
      ...this._document["getDocumentDataModel"](this._segmentId).getSnapshot(),
      'documentStyle': var_core_value_sigB455.documentStyle,
      'tableSource': var_core_value_sigB455.tableSource
    } : var_core_value_sigB455;
  }
  _serializeModel() {
    return this._injector["get"](var_core_value_sig1E5B).serialize(this._unitId);
  }
  _getBodyPath() {
    return var_core_value_sig7E32(this._document["getDocumentDataModel"]().getSnapshot(), this._segmentId);
  }
  _mutateActions(var_core_value_sig5241, var_core_value_sigC6E5, var_core_value_sigCEFB) {
    return var_core_value_sig652C(this._commandService, this._unitId, var_core_value_sig5241, var_core_value_sigC6E5, var_core_value_sigCEFB ? {
      'tableId': this._tableId,
      'segmentId': this._segmentId,
      ...var_core_value_sigCEFB
    } : undefined);
  }
};
$ = te([Q(3, var_core_value_sig8E74), Q(4, var_core_value_sig104C(var_core_value_sig841D))], $);
var ne = class extends var_core_value_sig85C3 {
  getTables(var_core_value_sig1537 = '') {
    return this._getTables(var_core_value_sig1537).map(var_core_value_sigF704 => this._createFDocumentTable(var_core_value_sigF704.tableId, var_core_value_sig1537));
  }
  getTable(var_core_value_sigE4C6, var_core_value_sig4313 = '') {
    return this._getTables(var_core_value_sig4313).some(var_core_value_sig2BCF => var_core_value_sig2BCF.tableId === var_core_value_sigE4C6) ? this._createFDocumentTable(var_core_value_sigE4C6, var_core_value_sig4313) : null;
  }
  getTableAt(var_core_value_sigFC87, var_core_value_sig156F = '') {
    var var_core_value_sigDD51;
    let var_core_value_sigF057 = (var_core_value_sigDD51 = this._getTables(var_core_value_sig156F)[var_core_value_sigFC87]) == null ? undefined : var_core_value_sigDD51.tableId;
    return var_core_value_sigF057 ? this._createFDocumentTable(var_core_value_sigF057, var_core_value_sig156F) : null;
  }
  getTableAtSelection() {
    let var_core_value_sig72F6 = this._injector["get"](var_core_value_sigDD1C).getStableTableSelection();
    return var_core_value_sig72F6 != null && var_core_value_sig72F6.tableId ? this._createFDocumentTable(var_core_value_sig72F6.tableId, var_core_value_sig72F6.segmentId) : null;
  }
  findTableByText(var_core_value_sig9FBA, var_core_value_sigFE01 = '') {
    return this.findTables(var_core_value_sig9FBA, var_core_value_sigFE01)[0] ?? null;
  }
  findTables(var_core_value_sigA2CE, var_core_value_sig1975 = '') {
    let var_core_value_sig6EA1 = this._getTableDocumentData(var_core_value_sig1975),
      var_core_value_sig029F = typeof var_core_value_sigA2CE == "string" ? {
        'text': var_core_value_sigA2CE
      } : var_core_value_sigA2CE;
    return this.getTables(var_core_value_sig1975).filter(var_core_value_sig0D69 => {
      let var_core_value_sig480E = var_core_value_sig0D69.getId();
      return !(var_core_value_sig029F.tableId && var_core_value_sig480E !== var_core_value_sig029F.tableId || var_core_value_sig029F.text && !this._tableContainsText(var_core_value_sig6EA1, var_core_value_sig480E, var_core_value_sig029F.text) || var_core_value_sig029F.headerText && !this._rowContainsText(var_core_value_sig0D69, 0, var_core_value_sig029F.headerText) || var_core_value_sig029F.titleText && !this._rowContainsText(var_core_value_sig0D69, 0, var_core_value_sig029F.titleText));
    });
  }
  insertTable(var_core_value_sig3767, var_core_value_sig670B, var_core_value_sig6912 = {}) {
    let var_core_value_sigE235 = this._injector["get"](var_core_value_sig8E74),
      var_core_value_sig7664 = var_core_value_sig6912.tableId ?? var_core_value_sigACC6(6);
    return var_core_value_sigE235.syncExecuteCommand(var_core_value_sigE1B0.id, {
      ...var_core_value_sig6912,
      'unitId': this.getId(),
      'rows': var_core_value_sig3767,
      'columns': var_core_value_sig670B,
      'tableId': var_core_value_sig7664
    }) ? this._createFDocumentTable(var_core_value_sig7664, var_core_value_sig6912.segmentId ?? '') : null;
  }
  insertTableFromData(var_core_value_sig2281, var_core_value_sig5E86 = {}) {
    let var_core_value_sig6998 = this._injector['get'](var_core_value_sig8E74),
      var_core_value_sigF639 = var_core_value_sig5E86.tableId ?? var_core_value_sigACC6(6);
    return var_core_value_sig6998.syncExecuteCommand(var_core_value_sigE1B0.id, {
      ...var_core_value_sig5E86,
      'unitId': this.getId(),
      'values': var_core_value_sig2281,
      'tableId': var_core_value_sigF639
    }) ? this._createFDocumentTable(var_core_value_sigF639, var_core_value_sig5E86.segmentId ?? '') : null;
  }
  _getTables(var_core_value_sigEAE5 = '') {
    let {
      tables: var_core_value_sigE94C = []
    } = this.getBody(var_core_value_sigEAE5);
    return var_core_value_sigE94C;
  }
  _getTableDocumentData(var_core_value_sig6D47 = '') {
    let var_core_value_sigCB82 = this.getDocumentDataModel().getSnapshot();
    return var_core_value_sig6D47 ? {
      ...this.getDocumentDataModel(var_core_value_sig6D47).getSnapshot(),
      'documentStyle': var_core_value_sigCB82.documentStyle,
      'tableSource': var_core_value_sigCB82.tableSource
    } : var_core_value_sigCB82;
  }
  _createFDocumentTable(var_core_value_sigCF4E, var_core_value_sig6CAD = '') {
    return this._injector['createInstance']($, this, var_core_value_sigCF4E, var_core_value_sig6CAD);
  }
  _tableContainsText(var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sigB2CE) {
    var var_core_value_sig443C;
    let var_core_value_sig39B1 = var_core_value_sig4C07(var_core_value_sig8CF5, var_core_value_sigDDD7);
    if (!var_core_value_sig39B1) return false;
    let var_core_value_sig210D = (var_core_value_sig443C = var_core_value_sig8CF5.body) == null ? undefined : var_core_value_sig443C.dataStream;
    return var_core_value_sig210D ? var_core_value_sig210D.slice(var_core_value_sig39B1.startOffset, var_core_value_sig39B1.endOffset).includes(var_core_value_sigB2CE) : false;
  }
  _rowContainsText(var_core_value_sigB4B4, var_core_value_sigD407, var_core_value_sig63F3) {
    return Array.from({
      'length': var_core_value_sigB4B4.getColumnCount()
    }, (var_core_value_sig26DB, var_core_value_sigF0F9) => var_core_value_sigB4B4.getCellText(var_core_value_sigD407, var_core_value_sigF0F9)).some(var_core_value_sig1A0F => var_core_value_sig1A0F.includes(var_core_value_sig63F3));
  }
};
var_core_value_sig85C3.extend(ne);
export { $ as FDocumentTable, q as FDocumentTableCell };
