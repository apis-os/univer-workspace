import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11 } from "./pdfs-extract-pdf-document-pages.js";
function vl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A279 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.groups["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033 = yl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.sourceDocument, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.pageIds);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033.length === 0) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034 = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11({
        'sourceDocument': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.sourceDocument,
        'pageIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033,
        'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.documentId ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.createDocumentId) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.sourceDocument)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.sourceDocument['id'] + '_split_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030 + 1),
        'title': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.title ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.createTitle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.sourceDocument)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.sourceDocument["title"]
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034.document,
        'metadata': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034.document['metadata'],
          'splitFromDocumentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.sourceDocument['id'],
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.id ? {
            'splitGroupId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.id
          } : {}),
          'splitGroupIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030,
          'splitPageIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033
        }
      };
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A279.push({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034,
      'document': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11,
      'groupId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.id,
      'groupIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030,
      'sourcePageIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033
    });
  }), {
    'sourceDocumentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.sourceDocument['id'],
    'groups': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A279,
    'documents': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A279.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041.document)
  };
}
function yl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465322) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929928 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465322);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465321.pages["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461042 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461042.id).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929928.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043));
}
export { vl as splitPdfDocumentPages };
