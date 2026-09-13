import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { k, se } from "./internal-glue.js";
import { w } from "./slides-table-slide-table-multi-cell-range.js";
function oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 = se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 > 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 > 1) return {
    'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472,
    'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 - 1,
    'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473,
    'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 - 1
  };
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.hMerge && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.vMerge) return {
    'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472,
    'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472,
    'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473,
    'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473
  };
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.rows["length"]; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6++) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.rows[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6].cells["length"]; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1++) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.rows[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6].cells[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1],
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
        'startRow': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6,
        'endRow': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 + k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) - 1,
        'startColumn': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1,
        'endColumn': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 + se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) - 1
      };
    if (w(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 >= var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.startRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 <= var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.endRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 >= var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.startColumn && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 <= var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.endColumn) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1;
  }
  return null;
}
export { oe as findSlideTableMergeRange };
