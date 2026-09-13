import { SlideTableBorderDashEnum, SlideTableFillTypeEnum, SlideTableModelService, SlideTableResourceService, SlideTableVerticalAlignEnum, UniverSlidesTablePlugin, buildBorderPresetPatch, buildFrozenSlideTableTheme, buildSlideTableCellTextDataPatch, buildUpdatedSlideTableSnapshot, canMoveSlideTableColumns, canMoveSlideTableRows, createSlideTableResourceHook, deleteSlideTableColumns, deleteSlideTableRows, freezeSlideTableTheme, hasSlideTableStyleChanged, insertSlideTableColumns, insertSlideTableRows, mergeSlideTableCells, moveSlideTableColumns, moveSlideTableRows, resizeSlideTableColumns, resizeSlideTableRows, resolveSlideTableScaledInsertSizeDelta, resolveSlideTableThemePalette, setSlideTableCellStyle, unmergeSlideTableCells } from '@univerjs-pro/slides-table';
import { BooleanNumber, CommandType, DEFAULT_STYLES, DependentOn, Disposable, DocumentFlavor, GridType, HorizontalAlign, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, createParagraphId, createSectionId, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddBoardElementMutation, BoardElementType, IBoardElementService, IBoardTableAdapterService, RemoveBoardElementMutation, RemoveBoardElementOperation, SetBoardThemeOperation, UniverBoardsPlugin, UpdateBoardElementMutation, createAddBoardElementsMutationInfos, resolveBoardSemanticThemeStyle } from '@univerjs-pro/boards';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { I } from "./boards-table-board-table.js";
import { Me } from "./internal-glue.js";
const Le = {
  'id': "board.command.insert-table-rows",
  'type': CommandType.COMMAND,
  'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
        rowIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303,
        count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 = 1
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 = insertSlideTableRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.height ?? Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303)),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26 = {
        'id': I.id,
        'params': {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301,
          'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306
        }
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27 = {
        'id': I.id,
        'params': {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301,
          'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305
        }
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 = Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306, "row"),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 ? [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.redoMutation] : [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.undoMutation, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27] : [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27];
    return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.get(IUndoRedoService).pushUndoRedo({
      'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301,
      'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9,
      'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8
    }), true) : false;
  }
};
function Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 - 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.height) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.height);
}
export { Le as InsertBoardTableRowsCommand };
