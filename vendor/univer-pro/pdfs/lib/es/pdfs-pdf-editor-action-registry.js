import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function au(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465535 = []) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5952 = new Map(),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB152 = {
      'list'() {
        return [...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5952.values()];
      },
      'get'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098) {
        return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5952.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098);
      },
      'register'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100) {
        return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5952.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB152;
      },
      'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5952.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104) : {
          'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103.selection,
          'warnings': [{
            'code': 'pdf-editor-action-not-found',
            'message': "PDF editor action not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102
          }]
        };
      }
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465535.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461110 => var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB152.register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461110)), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB152;
}
export { au as createPdfEditorActionRegistry };
