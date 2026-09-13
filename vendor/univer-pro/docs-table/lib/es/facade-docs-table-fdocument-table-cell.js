import { DEFAULT_DOCS_TABLE_CELL_MARGIN, DocsTableBorderPreset, DocsTableColumnInsertPosition, DocsTableColumnType, DocsTableDeleteColumnsCommand, DocsTableDeleteRowsCommand, DocsTableDeleteTableCommand, DocsTableInsertPosition, DocsTableInsertTableCommand, DocsTableInsertTablePosition, DocsTableModel, DocsTableRowInsertPosition, DocsTableSelectionKind, DocsTableSelectionService, DocsTableSortDirection, buildDistributeTableColumnsMutationActions, buildDistributeTableRowsMutationActions, buildInsertTableColumnsMutationActions, buildInsertTableRowsMutationActions, buildInsertTableTitleRowMutationActions, buildMergeCellsMutationActions, buildMoveFloatingTableMutationActions, buildMoveTableColumnsMutationActions, buildMoveTableRowsMutationActions, buildMoveTableToOffsetMutationActions, buildResizeTableColumnActionsFromWidth, buildResizeTableRowActionsFromHeight, buildSetTableBackgroundMutationActions, buildSetTableBorderMutationActions, buildSetTableCellMarginMutationActions, buildSetTableCellTextMutationActions, buildSetTableDefaultCellMarginMutationActions, buildSetTableHeaderRowCountMutationActions, buildSortTableMutationActions, buildUnmergeCellsMutationActions, executeRichTextTableActions, getTableActionBodyPath, getTableRangeById } from '@univerjs-pro/docs-table';
import { DashStyleType, ICommandService, Inject, Injector, TableRowHeightRule, Tools, generateRandomId } from '@univerjs/core';
import { FEnum } from '@univerjs/core/facade';
import { FDocument } from '@univerjs/docs/facade';
var q = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629) {
    this._table = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, this._row = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, this._column = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629;
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
  setMargin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) {
    return this._table["setCellMargin"](this._table["getCellRange"](this._row, this._column), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633);
  }
  clearMarginOverride() {
    return this._table["setCellMargin"](this._table["getCellRange"](this._row, this._column), null);
  }
  setText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) {
    return this._table['setCellText'](this._row, this._column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635);
  }
  setBackgroundColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637) {
    return this._table['setCellBackground'](this._table["getCellRange"](this._row, this._column), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637);
  }
  setBorder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) {
    return this._table['setBorder'](this._table["getCellRange"](this._row, this._column), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639);
  }
  mergeTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642) {
    return this._table["mergeCells"]({
      'startRow': this._row,
      'startColumn': this._column,
      'endRow': this._row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 - 1,
      'endColumn': this._column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 - 1
    });
  }
  unmerge() {
    return this._table["unmergeCells"](this._table["getCellRange"](this._row, this._column));
  }
};
export { q as FDocumentTableCell };
