import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.borders ? {
      'borders': {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657.borders),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.borders
      }
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.margins ? {
      'margins': {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657.margins),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.margins
      }
    } : {})
  };
  return Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658, "fill") && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.fill === undefined && delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108.fill, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108;
}
export { Z as mergeSlideTableCellStyle };
