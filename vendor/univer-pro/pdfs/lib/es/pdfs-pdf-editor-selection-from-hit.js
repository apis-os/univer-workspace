import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Cp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466660) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102 = "selection_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.id;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.kind) {
    case "textRange":
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466667;
      return {
        'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
        'primaryAnchorId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
        'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466660,
        'focus': {
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.objectId,
          'storyId': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466661 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466661.storyId,
          'runId': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466662.runId,
          'caretOffset': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466663 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466663.caretOffset) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466664 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466664.range['start']) ?? 0
        },
        'anchors': [{
          'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
          'kind': "textRange",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.objectId,
          'cellId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.cellId,
          'storyId': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466665 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466665.storyId,
          'runId': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466666 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466666.runId,
          'range': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466667.range) ?? {
            'start': 0,
            'end': 0
          }
        }]
      };
    case "object":
      return {
        'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
        'primaryAnchorId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
        'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466660,
        'anchors': [{
          'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
          'kind': "object",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.objectId
        }]
      };
    case 'tableCell':
      return {
        'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
        'primaryAnchorId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
        'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466660,
        'focus': {
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.objectId,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.storyId,
          'caretOffset': 0
        },
        'anchors': [{
          'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
          'kind': "tableCell",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.objectId,
          'cellId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.cellId,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.storyId
        }]
      };
    case "handle":
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466668;
      return {
        'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
        'primaryAnchorId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
        'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466660,
        'anchors': [{
          'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
          'kind': "controlHandle",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.objectId,
          'handleId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.handle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466668.handleId) ?? "unknown"
        }]
      };
    case "sourceSpan":
      return {
        'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
        'primaryAnchorId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
        'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466660,
        'anchors': [{
          'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
          'kind': "sourceSpan",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
          'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.source,
          'displayOperationIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.displayOperationIds
        }]
      };
    case 'formField':
      return {
        'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
        'primaryAnchorId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
        'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466660,
        'anchors': [{
          'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
          'kind': 'formField',
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
          'widgetObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.objectId,
          'fieldObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.fieldObjectId,
          'fieldName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.fieldName,
          'fieldType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.fieldType
        }]
      };
    default:
      return {
        'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId,
        'primaryAnchorId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
        'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466660,
        'anchors': [{
          'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102,
          'kind': 'page',
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.pageId
        }]
      };
  }
}
export { Cp as createPdfEditorSelectionFromHit };
