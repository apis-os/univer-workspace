import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { jv } from "./pdfs-pdf-editor-local-state-schema.js";
function Lv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985) {
  return {
    'durable': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.editState,
    'local': {
      'schema': jv,
      'schemaVersion': 1,
      'sessionId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.id,
      'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.documentId,
      'status': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.status,
      'mode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.mode,
      'baseUnitRevision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.baseDocumentRevision,
      'mutationLog': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.mutationLog,
      'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.selection,
      'history': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.history,
      'drafts': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.drafts,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.metadata ? {
        'metadata': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468985.metadata
      } : {})
    },
    'ephemeral': {}
  };
}
export { Lv as splitPdfEditorSessionState };
