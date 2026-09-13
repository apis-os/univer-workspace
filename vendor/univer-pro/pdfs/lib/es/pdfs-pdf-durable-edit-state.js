import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Pv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978 = 0) {
  return {
    'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468977,
    'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978,
    'overlayTextStories': {},
    'overlayDisplayLists': {},
    'textStoryPatches': {},
    'overlayObjects': {},
    'objectPatches': {},
    'pagePatches': {},
    'sourceSuppressions': {},
    'replacementLinks': {},
    'managedResources': {}
  };
}
export { Pv as createPdfDurableEditState };
