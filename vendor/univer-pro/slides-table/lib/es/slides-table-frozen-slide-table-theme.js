import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { B } from "./slides-table-default-slide-table-theme-presets.js";
import { It } from "./slides-table-default-slide-table-themes.js";
import { Bt } from "./slides-table-freeze-slide-table-theme.js";
function zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087 = B) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088 = It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087)[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088) return Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088);
}
export { zt as buildFrozenSlideTableTheme };
