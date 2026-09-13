import { SlideTableBorderDashEnum, SlideTableFillTypeEnum, SlideTableModelService, SlideTableResourceService, SlideTableVerticalAlignEnum, UniverSlidesTablePlugin, buildBorderPresetPatch, buildFrozenSlideTableTheme, buildSlideTableCellTextDataPatch, buildUpdatedSlideTableSnapshot, canMoveSlideTableColumns, canMoveSlideTableRows, createSlideTableResourceHook, deleteSlideTableColumns, deleteSlideTableRows, freezeSlideTableTheme, hasSlideTableStyleChanged, insertSlideTableColumns, insertSlideTableRows, mergeSlideTableCells, moveSlideTableColumns, moveSlideTableRows, resizeSlideTableColumns, resizeSlideTableRows, resolveSlideTableScaledInsertSizeDelta, resolveSlideTableThemePalette, setSlideTableCellStyle, unmergeSlideTableCells } from '@univerjs-pro/slides-table';
import { BooleanNumber, CommandType, DEFAULT_STYLES, DependentOn, Disposable, DocumentFlavor, GridType, HorizontalAlign, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, createParagraphId, createSectionId, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddBoardElementMutation, BoardElementType, IBoardElementService, IBoardTableAdapterService, RemoveBoardElementMutation, RemoveBoardElementOperation, SetBoardThemeOperation, UniverBoardsPlugin, UpdateBoardElementMutation, createAddBoardElementsMutationInfos, resolveBoardSemanticThemeStyle } from '@univerjs-pro/boards';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { I } from "./boards-table-board-table.js";
import { Me } from "./internal-glue.js";
const Fe = {
  'id': 'board.command.insert-table-columns',
  'type': CommandType.COMMAND,
  'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276,
        columnIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277,
        count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 = 1
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 = insertSlideTableColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.width ?? Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277)),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = {
        'id': I.id,
        'params': {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275,
          'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280
        }
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23 = {
        'id': I.id,
        'params': {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275,
          'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279
        }
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280, "column"),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 ? [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.redoMutation] : [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.undoMutation, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23] : [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23];
    return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.get(IUndoRedoService).pushUndoRedo({
      'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275,
      'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5,
      'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4
    }), true) : false;
  }
};
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 - 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.width) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.width);
}
export { Fe as InsertBoardTableColumnsCommand };
