import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Ie } from "./pdfs-pdf-document.js";
import { Fe } from "./pdfs-pdf-page.js";
function Gv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469017) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A455 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469017.sources),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469018 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A455.length === 1 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A455[0] : undefined;
  return {
    ...Ie({
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469017.id,
      'title': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469017.title,
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469017.source,
      'sources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469017.sources,
      'pages': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469017.pageDirectory["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.sourceId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469018,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.sourcePageIndex ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.sourceId === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469018 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.index : undefined);
        return {
          ...Fe({
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.pageId,
            'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.index,
            'label': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.label,
            'size': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.size,
            'rotation': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.rotation,
            ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812 !== undefined ? {
              'source': {
                'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811,
                'pageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812
              }
            } : {})
          }),
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.thumbnailAssetId ? {
            'thumbnailAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.thumbnailAssetId
          } : {})
        };
      }),
      'outlines': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469017.outlines
    }),
    'coordinate': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469017.coordinate
  };
}
export { Gv as createPdfDocumentFromShell };
