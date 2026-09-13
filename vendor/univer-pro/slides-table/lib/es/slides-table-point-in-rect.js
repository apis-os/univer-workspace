import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.x && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.width && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.y && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.height;
}
export { Rn as isPointInRect };
