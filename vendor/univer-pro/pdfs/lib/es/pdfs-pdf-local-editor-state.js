import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { jv } from "./pdfs-pdf-editor-local-state-schema.js";
function Fv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981) {
  return {
    'schema': jv,
    'schemaVersion': 1,
    'sessionId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.sessionId,
    'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.documentId,
    'status': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.status ?? 'active',
    'mode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.mode ?? "select",
    'inkColor': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.inkColor ?? "#2563eb",
    'baseUnitRevision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.baseUnitRevision ?? 1,
    'mutationLog': {
      'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.documentId,
      'batches': [],
      'pendingMutationIds': [],
      'acknowledgedMutationIds': {},
      'rejectedMutationIds': {}
    },
    'selection': {
      'anchors': [],
      'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.now ?? Date.now()
    },
    'history': {
      'undoBatchIds': [],
      'redoBatchIds': [],
      'checkpointRevision': 0
    },
    'drafts': {},
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.metadata ? {
      'metadata': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468981.metadata
    } : {})
  };
}
export { Fv as createPdfLocalEditorState };
