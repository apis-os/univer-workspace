import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082 ?? undefined) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081;
}
export { Rt as hasSlideTableStyleChanged };
