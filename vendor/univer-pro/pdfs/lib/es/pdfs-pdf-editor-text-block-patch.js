import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Om(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137,
    'runIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.runIds ? [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.runIds] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.runIds,
    'role': Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.role, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.role),
    'listItem': Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.listItem, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.listItem),
    'align': Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.align, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.align),
    'lineHeight': Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.lineHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.lineHeight),
    'indent': Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.indent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.indent),
    'firstLineIndent': Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.firstLineIndent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.firstLineIndent),
    'rightIndent': Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.rightIndent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.rightIndent),
    'spacingBefore': Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.spacingBefore, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.spacingBefore),
    'spacingAfter': Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467138.spacingAfter, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467137.spacingAfter)
  };
}
function Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467196) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467195 === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467195 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467196;
}
export { Om as applyPdfEditorTextBlockPatch };
