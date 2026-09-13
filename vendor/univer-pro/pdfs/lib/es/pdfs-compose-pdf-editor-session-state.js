import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { ct } from "./pdfs-pdf-editor-session-schema.js";
function Rv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987) {
  return {
    'schema': ct,
    'schemaVersion': 1,
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local["sessionId"],
    'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local['documentId'],
    'status': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local["status"],
    'mode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local['mode'],
    'baseDocumentRevision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local['baseUnitRevision'],
    'editState': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.durable,
    'mutationLog': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local['mutationLog'],
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local["selection"],
    'history': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local["history"],
    'drafts': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local['drafts'],
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local["metadata"] ? {
      'metadata': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468987.local["metadata"]
    } : {})
  };
}
export { Rv as composePdfEditorSessionState };
