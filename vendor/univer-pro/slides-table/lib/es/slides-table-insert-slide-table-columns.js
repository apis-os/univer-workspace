import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { M, Me, P, Pe, j, je, rn } from "./internal-glue.js";
import { fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1 } from "./internal-core-endo.js";
import { q } from "./slides-table-slide-table-resource.js";
import { X } from "./slides-table-slide-table.js";
function ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = 96) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = P(M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.columns["length"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 = Array.from({
      'length': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560
    }, () => ({
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556
    }));
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.columns["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559, 0, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.rows['forEach'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.cells['splice'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559, 0, ...Array.from({
      'length': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.length
    }, () => Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696)));
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.rev += 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562;
}
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788 - 1] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788];
}
function Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799 <= 0 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797.startColumn ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797,
    'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797.startColumn + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799,
    'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797.endColumn + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797.endColumn ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797,
    'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797.endColumn + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799
  } : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797
  };
}
const on = {
  'id': "slide.command.insert-slide-table-columns",
  'type': CommandType.COMMAND,
  'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.get(q),
      {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301,
        columnIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302,
        count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303 = 1
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.get(ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.get(IUndoRedoService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307 = ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298.width ?? sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302)),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46 = {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300,
        'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47 = {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300,
        'table': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48 = {
        'id': X.id,
        'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49 = {
        'id': X.id,
        'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308 = rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307, 'column'),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308 ? [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308.redoMutation] : [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308.undoMutation, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49] : [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49];
    return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306.pushUndoRedo({
      'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300,
      'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19,
      'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18
    }), true) : false;
  }
};
function sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 - 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323.width) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324.width);
}
export { ge as insertSlideTableColumns, on as InsertSlideTableColumnsCommand };
