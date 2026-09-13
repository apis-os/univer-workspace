import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { We } from "./internal-glue.js";
function Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682) {
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679.rows["length"] === 0) return Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679),
    {
      start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684,
      end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685
    } = We(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110].height = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.rev += 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683;
}
export { Ce as resizeSlideTableRows };
