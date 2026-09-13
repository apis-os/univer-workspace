import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Ge } from "./internal-glue.js";
function we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696) {
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.columns['length'] === 0) return Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693),
    {
      start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698,
      end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699
    } = Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111].width = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697.rev += 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697;
}
export { we as resizeSlideTableColumns };
