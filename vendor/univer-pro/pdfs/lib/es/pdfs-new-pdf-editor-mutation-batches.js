import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { ip } from "./internal-core-endo.js";
import { op } from "./pdfs-pdf-editor-mutation-log-runtime-index.js";
function sp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466585 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466585.batches === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586.batches) return [];
  if (ip.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466585) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586.batches["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466585.batches['length']);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466587 = op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466585);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586.batches["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466587.batchById["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.id));
}
export { sp as getNewPdfEditorMutationBatches };
