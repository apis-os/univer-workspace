import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function wb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469442) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D451 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469441) ? Math.trunc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469441) : 0;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469442) {
    case 'decimalZero':
      return String(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D451).padStart(2, '0');
    case "lowerAlpha":
      return Mb(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D451).toLowerCase();
    case "upperAlpha":
      return Mb(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D451);
    case "lowerRoman":
      return Nb(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D451).toLowerCase();
    case 'upperRoman':
      return Nb(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D451);
    default:
      return String(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D451);
  }
}
function Mb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469471) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469471 <= 0) return String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469471);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469472 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469471,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB142 = '';
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469472 > 0;) --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469472, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB142 = String.fromCharCode(65 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469472 % 26) + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469472 = Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469472 / 26);
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB142;
}
function Nb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469475) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469475 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469475 >= 4000) return String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469475);
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A479 = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469476 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469475,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB144 = '';
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120] of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A479) for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469476 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119;) var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB144 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469476 -= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119;
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB144;
}
export { wb as formatPdfListOrdinal };
