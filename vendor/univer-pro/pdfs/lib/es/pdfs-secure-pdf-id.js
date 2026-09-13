import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Fb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469483) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469484;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469484 = globalThis.crypto) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469484.getRandomValues;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485 != 'function') throw TypeError('Secure\x20PDF\x20ID\x20generation\x20is\x20unavailable.');
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A481 = new Uint8Array(16);
  try {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.call(globalThis.crypto, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A481);
  } catch {
    throw Error("Secure PDF ID generation failed.");
  }
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB146 = '';
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A481) var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB146 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122.toString(16).padStart(2, '0');
  return '' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469483 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB146;
}
export { Fb as createSecurePdfId };
