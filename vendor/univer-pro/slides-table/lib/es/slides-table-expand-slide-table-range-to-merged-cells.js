import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { A } from "./slides-table-collect-slide-table-merge-ranges.js";
import { C } from "./slides-table-slide-table-cell-range.js";
import { fe } from "./internal-glue.js";
function ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493 = A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = true;
  for (; var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2;) {
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = false;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493) !fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) || pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 = {
      'startRow': Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.startRow),
      'endRow': Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.endRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.endRow),
      'startColumn': Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.startColumn),
      'endColumn': Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.endColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.endColumn)
    }, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = true);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494;
}
function pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.startRow <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.startRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.endRow >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.endRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.startColumn <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.startColumn && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.endColumn >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.endColumn;
}
export { ce as expandSlideTableRangeToMergedCells };
