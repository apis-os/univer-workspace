import { SlideTableBorderDashEnum, SlideTableFillTypeEnum, SlideTableModelService, SlideTableResourceService, SlideTableVerticalAlignEnum, UniverSlidesTablePlugin, buildBorderPresetPatch, buildFrozenSlideTableTheme, buildSlideTableCellTextDataPatch, buildUpdatedSlideTableSnapshot, canMoveSlideTableColumns, canMoveSlideTableRows, createSlideTableResourceHook, deleteSlideTableColumns, deleteSlideTableRows, freezeSlideTableTheme, hasSlideTableStyleChanged, insertSlideTableColumns, insertSlideTableRows, mergeSlideTableCells, moveSlideTableColumns, moveSlideTableRows, resizeSlideTableColumns, resizeSlideTableRows, resolveSlideTableScaledInsertSizeDelta, resolveSlideTableThemePalette, setSlideTableCellStyle, unmergeSlideTableCells } from '@univerjs-pro/slides-table';
import { BooleanNumber, CommandType, DEFAULT_STYLES, DependentOn, Disposable, DocumentFlavor, GridType, HorizontalAlign, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, createParagraphId, createSectionId, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddBoardElementMutation, BoardElementType, IBoardElementService, IBoardTableAdapterService, RemoveBoardElementMutation, RemoveBoardElementOperation, SetBoardThemeOperation, UniverBoardsPlugin, UpdateBoardElementMutation, createAddBoardElementsMutationInfos, resolveBoardSemanticThemeStyle } from '@univerjs-pro/boards';
import { UniverLicensePlugin } from '@univerjs-pro/license';
const I = {
    'id': "board.mutation.set-table",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169;
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.unitId) || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.table) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.id)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.get(SlideTableResourceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.get(SlideTableModelService);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.setTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.theme), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.notifyTableChanged(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.table['id']), true;
    }
  },
  L = {
    'id': "board.command.update-table",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.get(SlideTableResourceService),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181,
          patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.themeId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.getTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.themeId) : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = hasSlideTableStyleChanged(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.styleId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.styleId);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = undefined, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12.themeId = null, typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.styleId == "string" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.get(ThemeService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.styleId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12.themeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.id)));
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180,
          'table': buildUpdatedSlideTableSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12)
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180,
          'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.theme = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.theme = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.syncExecuteCommand(I.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180,
        'undoMutations': [{
          'id': I.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14
        }],
        'redoMutations': [{
          'id': I.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13
        }]
      }), true) : false;
    }
  };
function ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.getTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 ? freezeSlideTableTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206) : buildFrozenSlideTableTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, resolveSlideTableThemePalette(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.getColorFromTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632)));
}
export { I as SetBoardTableMutation, L as UpdateBoardTableCommand };
