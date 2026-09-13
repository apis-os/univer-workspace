import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { hn, qn, w } from "./internal-core-endo.js";
function Sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462695) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462696 = qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462695),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462696) {
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 == "string" && hn.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737)) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 === 'd0') return {
        'width': w(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91, 0)
      };
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 === 'd1') return {
        'width': w(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91, 0),
        'bbox': [w(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91, 2) ?? 0, w(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91, 3) ?? 0, w(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91, 4) ?? 0, w(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91, 5) ?? 0]
      };
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91.length = 0;
      continue;
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737);
  }
  return {};
}
export { Sn as parsePdfType3GlyphMetrics };
