import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { ot } from "./slides-table-slide-table-options.js";
import { q } from "./slides-table-slide-table-resource.js";
import { Y } from "./slides-table-slide-table-model.js";
import { ve } from "./slides-table-slide-table-columns.js";
import { fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F } from "./slides-table-slide-table-rows.js";
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930 = ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.rows; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7++) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
      'cells': []
    };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.rowHeight > 0 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.height = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.rowHeight);
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.columns; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D++) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {},
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929.textData) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) ?? ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929.tableId, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929.values) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.textData = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462));
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929.cellStyles) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.row === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.column === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.style;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.style = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.columnWidth > 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 === 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9.push({
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.columnWidth
      }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.cells["push"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB);
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2);
  }
  return {
    'rows': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8,
    'columns': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9,
    'resolvedOptions': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930
  };
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940 === undefined ? undefined : plainTextToSlideDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940, {
    'id': "SLIDE_TABLE_CELL_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942
  });
}
const X = {
    'id': "slide.mutation.set-slide-table",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216) => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217,
          table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218,
          theme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215.get(q),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215.get(Y);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.setTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.notifyTableChanged(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218.id), true;
    }
  },
  tn = {
    'id': 'slide.command.delete-slide-table-columns',
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.get(q),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233,
          startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234,
          endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.get(IUndoRedoService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232,
          'table': ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235)
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232,
          'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237.syncExecuteCommand(X.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232,
        'undoMutations': [{
          'id': X.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
        }],
        'redoMutations': [{
          'id': X.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32
        }]
      }), true) : false;
    }
  },
  nn = {
    'id': "slide.command.delete-slide-table-rows",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249.get(q),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253,
          startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254,
          endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249.get(IUndoRedoService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252,
          'table': fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255)
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252,
          'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.syncExecuteCommand(X.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252,
        'undoMutations': [{
          'id': X.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37
        }],
        'redoMutations': [{
          'id': X.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36
        }]
      }), true) : false;
    }
  };
export { st as buildSlideTable, X as SetSlideTableMutation, tn as DeleteSlideTableColumnsCommand, nn as DeleteSlideTableRowsCommand };
