import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { xp } from "./pdfs-pdf-overlay-object-hit-test-provider.js";
function Sp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466653 = xp) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466653.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.hitTest(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466652)).sort(Dp);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466652.includePageFallback !== false && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466654.push(Op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466652)), {
    'request': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466652,
    'hits': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466654,
    'primary': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466654[0]
  };
}
function Dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686.priority - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466685.priority || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686.zIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466685.zIndex || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466685.distance - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686.distance || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686.confidence - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466685.confidence;
}
function Op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466689) {
  return {
    'id': "hit_page_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466689.pageId,
    'kind': "page",
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466689.pageId,
    'distance': 0,
    'zIndex': -1 / 0,
    'priority': 0,
    'confidence': 1
  };
}
export { Sp as hitTestPdfEditorEditState };
