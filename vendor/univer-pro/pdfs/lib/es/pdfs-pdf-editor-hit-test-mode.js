import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
let pp = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613.SELECT = "select", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613.TEXT = 'text', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613.IMAGE = "image", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613.SHAPE = "shape", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613.ANNOTATE = "annotate", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613.FORM = "form", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613.DEBUG = "debug", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613;
  }({}),
  mp = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615.PAGE = 'page', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615.OBJECT = "object", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615.TABLE_CELL = 'tableCell', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615.TEXT_RANGE = "textRange", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615.SOURCE_SPAN = "sourceSpan", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615.FORM_FIELD = "formField", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615.HANDLE = "handle", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615;
  }({});
export { pp as PdfEditorHitTestMode, mp as PdfEditorHitKind };
