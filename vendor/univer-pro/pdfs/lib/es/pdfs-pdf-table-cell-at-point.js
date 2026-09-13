import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { su } from "./pdfs-pdf-table-cell-rect.js";
function cu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465560) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D313 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465559.bbox[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465559.bbox[2]),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D314 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465559.bbox[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465559.bbox[3]);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465559.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125 = su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125[2] === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D313,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125[3] === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D314;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465560[0] >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125[0] && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465560[0] < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125[2] || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465560[0] <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125[2]) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465560[1] >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125[1] && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465560[1] < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125[3] || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465560[1] <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125[3]);
  });
}
export { cu as getPdfTableCellAtPoint };
