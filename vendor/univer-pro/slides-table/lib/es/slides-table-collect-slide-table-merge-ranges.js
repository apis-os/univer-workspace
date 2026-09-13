import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { k, se } from "./internal-glue.js";
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.rows["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.cells["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.hMerge || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.vMerge) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 <= 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 <= 1 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
        'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680,
        'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 - 1,
        'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617,
        'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 - 1
      });
    });
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4;
}
export { A as collectSlideTableMergeRanges };
