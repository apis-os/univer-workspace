import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { E } from "./slides-table-iterate-selected-slide-table-cells.js";
import { Z } from "./slides-table-merge-slide-table-cell-style.js";
function jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = false;
  return E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670.rows, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.style = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.style, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = true;
  }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670.rev += 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670;
}
export { jn as setSlideTableCellStyle };
