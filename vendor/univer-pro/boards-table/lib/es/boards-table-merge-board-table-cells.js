import { SlideTableBorderDashEnum, SlideTableFillTypeEnum, SlideTableModelService, SlideTableResourceService, SlideTableVerticalAlignEnum, UniverSlidesTablePlugin, buildBorderPresetPatch, buildFrozenSlideTableTheme, buildSlideTableCellTextDataPatch, buildUpdatedSlideTableSnapshot, canMoveSlideTableColumns, canMoveSlideTableRows, createSlideTableResourceHook, deleteSlideTableColumns, deleteSlideTableRows, freezeSlideTableTheme, hasSlideTableStyleChanged, insertSlideTableColumns, insertSlideTableRows, mergeSlideTableCells, moveSlideTableColumns, moveSlideTableRows, resizeSlideTableColumns, resizeSlideTableRows, resolveSlideTableScaledInsertSizeDelta, resolveSlideTableThemePalette, setSlideTableCellStyle, unmergeSlideTableCells } from '@univerjs-pro/slides-table';
import { BooleanNumber, CommandType, DEFAULT_STYLES, DependentOn, Disposable, DocumentFlavor, GridType, HorizontalAlign, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, createParagraphId, createSectionId, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddBoardElementMutation, BoardElementType, IBoardElementService, IBoardTableAdapterService, RemoveBoardElementMutation, RemoveBoardElementOperation, SetBoardThemeOperation, UniverBoardsPlugin, UpdateBoardElementMutation, createAddBoardElementsMutationInfos, resolveBoardSemanticThemeStyle } from '@univerjs-pro/boards';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { L } from "./boards-table-board-table.js";
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) return true;
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325) || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326)) return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325) && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) => R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636]));
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 != "object" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 != 'object') return false;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13 = Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.length === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13.length && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.every(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638]) => R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637]));
}
function ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 <= 0) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 = B(Math.min(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329), z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330)), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 - 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = B(Math.max(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329), z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330)), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 - 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = B(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 - 1),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 === "before" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 + 1;
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 + 1;
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) ? Math.trunc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) : 0;
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349) {
  return Math.min(Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348), Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349));
}
const Be = {
    'id': 'board.command.merge-table-cells',
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356,
          range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359 = mergeSlideTableCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357);
      return R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.rows, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.rows) ? true : !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353.get(ICommandService).syncExecuteCommand(L.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356,
        'patch': {
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.rows
        }
      });
    }
  },
  Ve = {
    'id': 'board.command.move-table-columns',
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
          startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371,
          endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372,
          targetColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373,
          position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 || !canMoveSlideTableColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375, {
        'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371,
        'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372
      }, {
        'column': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373,
        'position': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374
      })) return false;
      if (ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.columns["length"])) return true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 = moveSlideTableColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.rev !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.rev && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.get(ICommandService).syncExecuteCommand(L.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
        'patch': {
          'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.columns,
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.rows
        }
      });
    }
  },
  He = {
    'id': "board.command.move-table-rows",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390,
          startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391,
          endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392,
          targetRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393,
          position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 || !canMoveSlideTableRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, {
        'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391,
        'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392
      }, {
        'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393,
        'position': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394
      })) return false;
      if (ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.rows["length"])) return true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 = moveSlideTableRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.rev !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.rev && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.get(ICommandService).syncExecuteCommand(L.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390,
        'patch': {
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.rows
        }
      });
    }
  },
  Ue = {
    'id': 'board.command.remove-table',
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.tableId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.elementId) return false;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.get(IBoardElementService).getElementByParam({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410,
          'elementId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413.element;
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.type !== BoardElementType.Table || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.tableId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 ? false : !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.get(ICommandService).syncExecuteCommand(RemoveBoardElementOperation.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410,
        'elementId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412
      });
    }
  },
  We = {
    'id': "board.command.resize-table-columns",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426,
          startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427,
          endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.columns["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 + 1);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 + 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.width ?? 96) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429)) return true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 = resizeSlideTableColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.rev !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.rev && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423.get(ICommandService).syncExecuteCommand(L.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426,
        'patch': {
          'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.columns
        }
      });
    }
  },
  Ge = {
    'id': "board.command.resize-table-rows",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446,
          startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447,
          endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.rows["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 + 1);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 + 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.height ?? 24) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449)) return true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 = resizeSlideTableRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.rev !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.rev && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.get(ICommandService).syncExecuteCommand(L.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446,
        'patch': {
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.rows
        }
      });
    }
  },
  Ke = {
    'id': "board.command.set-table-border-preset",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466,
          range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467,
          preset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468,
          border: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470) return false;
      let {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471
      } = buildBorderPresetPatch(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.rows), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469);
      return R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.rows) ? true : !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.get(ICommandService).syncExecuteCommand(L.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466,
        'patch': {
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471
        }
      });
    }
  },
  qe = {
    'id': "board.command.set-table-cell-style",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484,
          range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485,
          style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488 = setSlideTableCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486);
      return R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.rows, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.rows) ? true : !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481.get(ICommandService).syncExecuteCommand(L.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484,
        'patch': {
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.rows
        }
      });
    }
  },
  Je = {
    'id': "board.command.set-table-cell-text",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501,
          row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502,
          column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503,
          textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503])) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 = buildSlideTableCellTextDataPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504);
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 || !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.get(ICommandService).syncExecuteCommand(L.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501,
        'patch': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506
      });
    }
  },
  Ye = {
    'id': "board.command.unmerge-table-cells",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520,
          row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521,
          column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 = unmergeSlideTableCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522);
      return R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.rows, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.rows) ? true : !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.get(ICommandService).syncExecuteCommand(L.id, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519,
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520,
        'patch': {
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.rows
        }
      });
    }
  },
  V = {
    'id': 'board.mutation.remove-table',
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534.tableId) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.get(SlideTableResourceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.get(SlideTableModelService);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535.removeTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534.tableId) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536.notifyTableRemoved(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534.tableId), true) : false;
    }
  };
export { Be as MergeBoardTableCellsCommand, Ve as MoveBoardTableColumnsCommand, He as MoveBoardTableRowsCommand, Ue as RemoveBoardTableCommand, We as ResizeBoardTableColumnsCommand, Ge as ResizeBoardTableRowsCommand, Ke as SetBoardTableBorderPresetCommand, qe as SetBoardTableCellStyleCommand, Je as SetBoardTableCellTextCommand, Ye as UnmergeBoardTableCellsCommand, V as RemoveBoardTableMutation };
