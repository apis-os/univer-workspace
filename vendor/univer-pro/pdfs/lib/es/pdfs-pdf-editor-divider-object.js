import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Lu } from "./pdfs-default-pdf-editor-divider-stroke.js";
function zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.type !== "path") return false;
  if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.metadata) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.univerEditorObjectKind) === Lu.univerEditorObjectKind) return true;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.origin !== 'user-created' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.editability !== "semantic" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.commands["length"] !== 2) return false;
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465700] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.commands;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465699 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465699.type) !== "moveTo" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465700 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465700.type) !== "lineTo") return false;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D319 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.bbox[2] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.bbox[0]),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D320 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.bbox[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.bbox[1]) / 2;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D319 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465699.point[0] === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465699.point[1] === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D320 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465700.point[0] === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D319 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465700.point[1] === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D320;
}
export { zu as isPdfEditorDividerObject };
