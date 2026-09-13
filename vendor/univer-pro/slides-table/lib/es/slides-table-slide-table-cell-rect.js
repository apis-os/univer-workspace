import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Vn } from "./slides-table-slide-table-cell-text-margins.js";
import { Un } from "./internal-glue.js";
function Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737) {
  let {
      cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738,
      includeMargins: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743 = false,
      tableHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739,
      tableWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740,
      targetHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741,
      targetWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744 = Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740, 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745 = Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739, 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743 ? Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738.style["margins"]) : undefined,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.left) ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.right) ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.top) ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.bottom) ?? 0;
  return {
    'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738.bounds["left"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68,
    'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738.bounds["top"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70,
    'width': Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738.bounds["width"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69),
    'height': Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738.bounds["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71)
  };
}
function Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763 = Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762;
}
export { Hn as resolveSlideTableCellRect };
