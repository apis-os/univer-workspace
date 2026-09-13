import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 = {}) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.values) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924.length) ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.textData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925.length) ?? 0;
  return {
    'rows': Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.rows ?? 3),
    'columns': Math.max(1, lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.values), lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.textData), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.columns ?? 3),
    'rowHeight': Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.rowHeight ?? 36),
    'columnWidth': Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.columnWidth ?? 120)
  };
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 ?? []) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.length);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40;
}
export { ot as resolveSlideTableBuildOptions };
