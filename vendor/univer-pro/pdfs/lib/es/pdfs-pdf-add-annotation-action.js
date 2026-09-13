import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { G, J, Tf, kd, q } from "./internal-core-endo.js";
function Sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465976;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB174 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.source,
    'pageId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465975 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465975.pageId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.pageId,
    'operatorIds': Tf((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465976 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465976.operatorIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.displayOperationIds)
  };
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465973,
    'type': "rawPdfGroup",
    'origin': 'imported-native',
    'editability': 'visual-only',
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.bbox,
    'displayListIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.displayListId ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.displayListId] : undefined,
    'nativeSnapshot': {
      'objectRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.objectRef ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.objectRef] : undefined,
      'displayListId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974.displayListId
    },
    'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB174,
    'visible': true
  };
}
function Ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466016) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB88 = "selection_" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015.widgetObjectId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015.fieldObjectId);
  return {
    'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015.pageId,
    'primaryAnchorId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB88,
    'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466016,
    'anchors': [{
      'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB88,
      'kind': "formField",
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015.pageId,
      'widgetObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015.widgetObjectId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015.fieldObjectId,
      'fieldObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015.fieldObjectId,
      'fieldName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015.fieldName,
      'fieldType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466015.fieldType
    }]
  };
}
function Ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466039, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466040) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466042;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466043 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466041 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466039.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466040]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466041.object,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466044 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466043 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466043.type) === "annotation" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466043.link : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466045 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466042 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466039.editState["objectPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466040]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466042 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466042.annotation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466042.link;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466045) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466044;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB176 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466044
  };
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466045)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176 === null ? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB176[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB176[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176);
  return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB176).length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB176 : undefined;
}
function jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466053, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB178 = {};
  return 'actionType' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466053 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB178.actionType = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054.actionType) ?? null), "uri" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466053 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB178.uri = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054.uri) ?? null), "dest" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466053 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB178.dest = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054.dest) ?? null), "pageId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466053 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB178.pageId = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054.pageId) ?? null), "border" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466053 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB178.border = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054.border) ?? null), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB178;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F8(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466234) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466235;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466235 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466233.editState['objectPatches'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466234]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466235 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466235.formField) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466235.value;
}
const Af = {
    'id': "pdf.editor.action.addAnnotation",
    'description': "Add a PDF markup or ink annotation.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466427 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.objectId, "object"),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186 = {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466427,
          'type': "annotation",
          'origin': "user-created",
          'editability': "semantic",
          'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.bbox,
          'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.transform,
          'annotationType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.annotationType,
          'markup': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.markup,
          'ink': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.ink
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB187 = {
          'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.mutationId, "mutation"),
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425.now,
          'kind': 'addAnnotation',
          'source': "user",
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.pageId,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466427
          },
          'payload': {
            'object': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.pageId,
            'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.layerId,
            'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.zIndex,
            'selectAfterApply': false
          },
          'inverse': {
            'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.inverseMutationId, "mutation"),
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425.now,
            'kind': "removeAnnotation",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.pageId,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466427
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466427,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.pageId,
              'tombstone': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186,
              'reason': "delete"
            }
          }
        };
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466426.batchId, "batch"), "editAnnotation", [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB187]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466425.selection
      };
    }
  },
  jf = {
    'id': "pdf.editor.action.updateLinkAnnotation",
    'description': 'Update\x20a\x20PDF\x20Link\x20annotation\x20action\x20and\x20border.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432) {
      if (!Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.patch).length) return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466433 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.pageId ?? kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.objectId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466434 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.previousLink ?? Ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.objectId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466435 = jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.patch, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466434),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB190 = {
          'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.mutationId, "mutation"),
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.now,
          'kind': 'updateAnnotation',
          'source': "user",
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466433,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.objectId
          },
          'payload': {
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.objectId,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466433,
            'annotation': {
              'link': {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.patch
              }
            }
          },
          'inverse': {
            'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.inverseMutationId, "mutation"),
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.now,
            'kind': 'updateAnnotation',
            'source': 'undo',
            'target': {
              'kind': 'object',
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466433,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.objectId
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.objectId,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466433,
              'annotation': {
                'link': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466435
              }
            }
          }
        };
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.batchId, "batch"), "editAnnotation", [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB190]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466433 ? q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466432.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.now) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466431.selection
      };
    }
  },
  Mf = {
    'id': "pdf.editor.action.editFormField",
    'description': "Edit an AcroForm field value.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466443 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.batchId, "batch"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466444 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.mutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466445 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.inverseMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.previousValue ?? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F8(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.fieldObjectId);
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466443, "editFormField", [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466444,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441.now,
          'kind': "updateFormField",
          'source': "user",
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.pageId,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.fieldObjectId
          },
          'payload': {
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.pageId,
            'fieldObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.fieldObjectId,
            'widgetObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.widgetObjectId,
            'fieldName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.fieldName,
            'fieldType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.fieldType,
            'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.value,
            'previousValue': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466446,
            'choices': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.choices
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466445,
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441.now,
            'kind': "updateFormField",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.pageId,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.fieldObjectId
            },
            'payload': {
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.pageId,
              'fieldObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.fieldObjectId,
              'widgetObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.widgetObjectId,
              'fieldName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.fieldName,
              'fieldType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.fieldType,
              'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466446,
              'previousValue': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.value,
              'choices': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442.choices
            }
          }
        }]),
        'selection': Ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466441.now)
      };
    }
  },
  Nf = {
    'id': "pdf.editor.action.promoteNativeFormXObject",
    'description': 'Promote\x20native\x20PDF\x20Form\x20XObject\x20into\x20an\x20editable\x20raw\x20group.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466456;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466457 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.batchId, "batch"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466458 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.addObjectMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466459 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.suppressionMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466460 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.replacementLinkMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.objectId, 'object'),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.suppressionId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461 + "_source_suppression",
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.replacementLinkId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461 + "_replacement_link",
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466462 = Sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466463 = new Date(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.now).toISOString(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.source,
          'pageId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466455 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466455.pageId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
          'operatorIds': Tf((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466456 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466456.operatorIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.displayOperationIds)
        };
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466457, "promoteNativeFormXObject", [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466459,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.now,
          'kind': 'setSourceSuppression',
          'source': 'user',
          'target': {
            'kind': "sourceSpan",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
            'displayOperationIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.displayOperationIds,
            'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192
          },
          'payload': {
            'suppression': {
              'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92,
              'sourceId': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192.sourceId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.documentId,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
              'operatorIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.displayOperationIds,
              'operationPath': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192.operationPath,
              'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192,
              'reason': "replaced-by-semantic-object",
              'exportDisposition': 'remove',
              'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466463
            }
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466459 + "_inverse",
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.now,
            'kind': "setSourceSuppression",
            'source': "undo",
            'target': {
              'kind': 'sourceSpan',
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
              'displayOperationIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.displayOperationIds,
              'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192
            },
            'payload': {
              'suppression': {
                'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92,
                'sourceId': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192.sourceId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.documentId,
                'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
                'operatorIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.displayOperationIds,
                'operationPath': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192.operationPath,
                'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192,
                'reason': "hidden-for-export",
                'exportDisposition': 'preserve-native',
                'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466463,
                'notes': 'Undo\x20native\x20Form\x20XObject\x20promotion.'
              }
            }
          }
        }, {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466458,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.now,
          'kind': "addObject",
          'source': "user",
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461
          },
          'payload': {
            'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466462,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
            'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.layerId,
            'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.zIndex,
            'selectAfterApply': true,
            'sourceSuppressionId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466458 + "_inverse",
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.now,
            'kind': 'removeObject',
            'source': "undo",
            'target': {
              'kind': 'object',
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
              'tombstone': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466462,
              'reason': 'replace'
            }
          }
        }, {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466460,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.now,
          'kind': "setReplacementLink",
          'source': 'user',
          'target': {
            'kind': 'object',
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461
          },
          'payload': {
            'link': {
              'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93,
              'suppressionId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92,
              'replacementObjectIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461],
              'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466463
            }
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466460 + "_inverse",
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.now,
            'kind': "setReplacementLink",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461
            },
            'payload': {
              'link': {
                'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93,
                'suppressionId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92,
                'replacementObjectIds': [],
                'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466463,
                'notes': "Undo native Form XObject promotion."
              }
            }
          }
        }]),
        'selection': q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466454.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466453.now)
      };
    }
  },
  Pf = /^[A-Za-z0-9][A-Za-z0-9._-]*$/,
  Ff = new Set(["asset", "source", 'imageSourceType', "mimeType", "fileName", 'byteLength']),
  If = new Set("id.type.source.checksum.mimeType.fileName.byteLength.metadata.width.height.sourceKind.xObjectSubtype.rawStreamAssetId.decodedAssetId.previewAssetId.objectRef.resourceName.colorSpace.decode.decodeParms.filters.bitsPerComponent.interpolate.maskKind.colorKeyMask.maskAssetId.softMaskAssetId.matte.sMaskInData"["split"]('.')),
  Lf = ["checksum", "mimeType", "fileName", "rawStreamAssetId", "decodedAssetId", "previewAssetId", "objectRef", "resourceName", 'colorSpace', 'maskAssetId', 'softMaskAssetId'],
  Rf = Symbol("omit-json-property");
export { Af as pdfAddAnnotationAction, jf as pdfUpdateLinkAnnotationAction, Mf as pdfEditFormFieldAction, Nf as pdfPromoteNativeFormXObjectAction };
export { Pf, Ff, If, Lf, Rf };
