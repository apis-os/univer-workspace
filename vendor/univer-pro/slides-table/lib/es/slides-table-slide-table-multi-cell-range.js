import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { C } from "./slides-table-slide-table-cell-range.js";
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428.startRow !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428.endRow || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428.startColumn !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428.endColumn;
}
export { w as isSlideTableMultiCellRange };
