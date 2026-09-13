import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF13(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467721) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722 = yh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467721);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722) return {
    'kind': "none"
  };
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.kind) {
    case "page":
      return {
        'kind': 'page',
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.pageId
      };
    case "textRange":
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.objectId ? vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.pageId, 'text') : {
        'kind': 'none'
      };
    case "object":
      return vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.pageId);
    case 'formField':
      return {
        'kind': "formField",
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.pageId,
        'widgetObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.widgetObjectId,
        'fieldObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.fieldObjectId,
        'fieldName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.fieldName,
        'fieldType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.fieldType
      };
    case "sourceSpan":
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467723;
      return {
        'kind': "source",
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.pageId,
        'displayOperationIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.displayOperationIds ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467723 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467723.operatorIds)
      };
    case 'controlHandle':
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.objectId ? vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467722.pageId) : {
        'kind': "none"
      };
    default:
      return {
        'kind': 'none'
      };
  }
}
function vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467727, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467730) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467731 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467727.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467728],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467731 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467731.object;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732) return {
    'kind': "none"
  };
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB242 = {
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467729 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467731.pageId,
    'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467728,
    'objectType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.type,
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.bbox,
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.transform
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467730 === "text" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.type === "textBox" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.type === 'textRun') return {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB242,
    'kind': "text"
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.type === "image") return {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB242,
    'kind': "image",
    'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.assetId
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.type === "rawPdfGroup") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467733;
    return {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB242,
      'kind': "formXObject",
      'objectRef': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467733 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.nativeSnapshot) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467733 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467733.objectRefs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467733[0],
      'displayListIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467732.displayListIds
    };
  }
  return {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB242,
    'kind': "object"
  };
}
function yh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467741) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467741.selection['anchors'].find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467741.selection["primaryAnchorId"]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467741.selection["anchors"][0];
}
export { fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF13 as resolvePdfEditorActiveEditor };
