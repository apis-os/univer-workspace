import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Cd, G, J, K, Tf, Y, cm, kd, kf, lf, mf, q, sf } from "./internal-core-endo.js";
import { Sp } from "./pdfs-hit-test-pdf-editor-edit-state.js";
import { Cp } from "./pdfs-pdf-editor-selection-from-hit.js";
import { Bf } from "./pdfs-pdf-editor-managed-image-resource.js";
import { Gp, Wp, Yp } from "./pdfs-pdf-add-divider-action.js";
function yd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465949, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465951) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465949,
    'type': 'image',
    'origin': "user-created",
    'editability': 'semantic',
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465951.bbox,
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465951.transform,
    'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465950,
    'crop': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465951.crop,
    'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465951.opacity,
    'visible': true
  };
}
function xd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465967, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465968;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB172 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.source,
    'pageId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465967 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465967.pageId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.pageId,
    'operatorIds': Tf((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465968 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465968.operatorIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.displayOperationIds)
  };
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465965,
    'type': "image",
    'origin': "imported-native",
    'editability': "semantic",
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.bbox,
    'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.assetId,
    'crop': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.crop,
    'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.opacity,
    'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB172,
    'visible': true
  };
}
function Od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466027, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466028) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A293 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466027.editState["overlayObjects"]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466028 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.pageId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466028).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.zIndex);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A293.length ? Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A293) + 1 : 0;
}
function Md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466057, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466058) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466059, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466060;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466061 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466059 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466057.editState["objectPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466058]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466059 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466059.image) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466059.assetId;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466061) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466061;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466062 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466060 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466057.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466058]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466060.object;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466062 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466062.type) === 'image' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466062.assetId : undefined;
}
function Nd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466069, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466070) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466071, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466072;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466073 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466071 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466069.editState["objectPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466070]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466071.image;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466073 && 'cropRect' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466073) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466073.cropRect ?? undefined;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466074 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466072 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466069.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466070]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466072.object;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466074 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466074.type) === "image" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466074.crop : undefined;
}
function Pd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466082) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466083;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466084 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466083 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466081.editState["objectPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466082]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466083.image;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466084 && 'sourceRect' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466084) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466084.sourceRect ?? undefined;
}
function uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466303) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466304 = yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466301),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466305 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466304.transform ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466304.bbox : Cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466304.bbox, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466303[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466303[1]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466306 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466304.transform ? kf(wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466303[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466303[1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466304.transform) : undefined;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466304,
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466302,
    'origin': "user-created",
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466305,
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466306,
    'source': undefined
  };
}
function df(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466315) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466316 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466315, undefined, "story"),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5956 = new Map(Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466313.runs).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466315, undefined, 'run')])),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5957 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466313.blocks["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.id, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466315, undefined, "block")])),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958 = new Map(Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466313.lists ?? {}).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466315, undefined, "list")]));
  return {
    ...vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466313),
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466316,
    'objectIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466314],
    'source': undefined,
    'blocks': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466313.blocks["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228,
      'id': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5957.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228.id),
      'runIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228.runIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5956.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411)),
      'listItem': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228.listItem ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228.listItem,
        'listId': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228.listItem["listId"]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228.listItem["listId"],
        'sourceLabelObjectIds': undefined
      } : undefined,
      'source': undefined
    })),
    'runs': Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466313.runs).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230]) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5956.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229);
      return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231,
        'source': undefined
      }];
    })),
    'lists': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466313.lists ? Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466313.lists).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236]) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235);
      return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237,
        'source': undefined
      }];
    })) : undefined
  };
}
function ff(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466325) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5962 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466322.rows['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241.id, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466325, undefined, "tableRow")])),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5963 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466322.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242.id, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466325, undefined, "tableColumn")])),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5964 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466322.cells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243.id, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466325, undefined, "tableCell")])),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A297 = [],
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5965 = new Map();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466322.cells) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466323[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244.contentStoryId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 = df(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466325);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A297.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5965.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244.contentStoryId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413.id);
  }
  return {
    'object': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466321,
      'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466322.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245,
        'id': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5962.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.id)
      })),
      'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466322.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246,
        'id': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5963.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246.id)
      })),
      'cells': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466322.cells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247,
        'id': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5964.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247.id),
        'rowId': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5962.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247.rowId),
        'columnId': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5963.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247.columnId),
        'contentStoryId': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5965.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247.contentStoryId)
      }))
    },
    'stories': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A297
  };
}
function pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466334) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466335 = lf([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466332.assetId, ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466332.softMaskAssetId ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466332.softMaskAssetId] : [])]),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5970 = new Map(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A299 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466335) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466333[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466334, undefined, 'asset');
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5970.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A299.push({
      ...bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414),
      'asset': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.asset,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415
      }
    });
  }
  return {
    'object': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466331,
      'assetId': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5970.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466332.assetId),
      'softMaskAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466332.softMaskAssetId ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5970.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466332.softMaskAssetId) : undefined
    },
    'resources': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A299
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F9(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466368) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466369 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466367, undefined, "mutation"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466370 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466368.asset['id'],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466371 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466369, 'registerResource', {
      'kind': "asset",
      'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466370
    }, {
      'resource': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466368
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466371.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466369 + "_inverse", "unregisterResource", {
    'kind': "asset",
    'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466370
  }, {
    'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466370
  }, 'undo'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466371;
}
function vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466377) {
  return typeof structuredClone == 'function' ? structuredClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466377) : JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466377));
}
function yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379) {
  return typeof structuredClone == "function" ? structuredClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379) : JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379));
}
function bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466381) {
  return typeof structuredClone == "function" ? structuredClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466381) : JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466381));
}
function xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466384) {
  return JSON.stringify(Sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466383)) === JSON.stringify(Sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466384));
}
function Sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466387) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466387) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466387.map(Sf) : !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466387 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466387 != "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466387 : Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466387).sort().reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466387[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250] = Sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249;
  }, {});
}
function Cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466391) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466389[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466389[1] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466389[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466389[3] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466391];
}
function wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466396) {
  return [1, 0, 0, 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466396];
}
const Qp = {
    'id': "pdf.editor.action.reorderObject",
    'description': "Change an editable PDF object order inside its page layer.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.editState['overlayObjects'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.objectId];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875) return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466876 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875.zIndex,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D363 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.zIndex ?? Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466876 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.delta ?? 0));
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D363 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466876) return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466877 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.pageId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875.pageId,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB206 = {
          'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.mutationId, "mutation"),
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.now,
          'kind': 'reorderObject',
          'source': "user",
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466877,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.objectId
          },
          'payload': {
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.objectId,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466877,
            'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875.layerId,
            'zIndex': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D363
          },
          'inverse': {
            'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.inverseMutationId, "mutation"),
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.now,
            'kind': "reorderObject",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466877,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.objectId
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.objectId,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466877,
              'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875.layerId,
              'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466876
            }
          }
        };
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.batchId, "batch"), "arrangeObject", [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB206]),
        'selection': q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873.now)
      };
    }
  },
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB322 = {
    'id': 'pdf.editor.action.pasteObjects',
    'description': "Paste copied PDF overlay objects as new editable objects.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466886, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466888;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466889 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.clipboard) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885.overlayObjects) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.editState["overlayObjects"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466890 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466886 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.clipboard) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466886.textStories) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.editState["overlayTextStories"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466891 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466887 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.clipboard) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466887.managedResources) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.editState["managedResources"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466892 = lf((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466888 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.objectIds) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466888.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.objectIds : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.clipboard ? Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.clipboard["overlayObjects"]) : sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.selection)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466893 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.batchId, 'batch'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466894 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.pageId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.selection["activePageId"],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A323 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.offset ?? [0, 0],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466895 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.zIndexStart ?? Od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466894),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A324 = [],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A325 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466892.flatMap((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332) => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466889[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331];
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334) return [];
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.objectIdMap) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331]) ?? J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883, undefined, "object"),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466894 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.pageId,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337 = uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A323),
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43 = [],
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44 = [];
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337.type === "textBox" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.object['type'] === "textBox") {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.object["textStoryId"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466890[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.object["textStoryId"]] : undefined;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.clipboard && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.object["textStoryId"] && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454) return [];
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 = df(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883);
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337.textStoryId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337.runs = undefined;
            }
          } else {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337.type === "table" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.object["type"] === "table") {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = ff(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883);
              if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149) return [];
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.object, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.stories);
            } else {
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.clipboard && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337.type === "image" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.object["type"] === "image") {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883);
                if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660) return [];
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.object, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.resources);
              }
            }
          }
          let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB54 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466895 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332;
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A324.push({
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336
          });
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21 = {
            'id': Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.mutationIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332, "mutation"),
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.now,
            'kind': "addObject",
            'source': "user",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335
            },
            'payload': {
              'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336,
              'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.layerId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.layerId,
              'zIndex': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB54,
              'selectAfterApply': true
            },
            'inverse': {
              'id': Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.inverseMutationIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332, "mutation"),
              'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.documentId,
              'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.clientId,
              'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.baseRevision + 1,
              'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.now,
              'kind': 'removeObject',
              'source': "undo",
              'target': {
                'kind': "object",
                'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336,
                'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335
              },
              'payload': {
                'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335,
                'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336,
                'tombstone': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337,
                'reason': 'delete'
              }
            }
          };
          return [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F9(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455)), ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456 => mf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456)), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21];
        });
      return {
        'batch': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A325.length ? G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466893, 'paste', var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A325) : undefined,
        'selection': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A325.length ? Cd(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.now) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883.selection
      };
    }
  },
  em = {
    'id': "pdf.editor.action.selectAtPoint",
    'description': "Select the PDF editor target at a model-space point.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466909, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466911 = Sp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466909.editState, {
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.pageId,
        'point': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.point,
        'tolerance': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.tolerance ?? 0,
        'mode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.mode ?? "select",
        'includeLocked': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.includeLocked,
        'includeInvisible': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.includeInvisible,
        'includeNative': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.includeNative,
        'nativeImageTargets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.nativeImageTargets,
        'nativeFormXObjectTargets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.nativeFormXObjectTargets,
        'nativeTextTargets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.nativeTextTargets,
        'formFieldTargets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.formFieldTargets,
        'linkAnnotationTargets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910.linkAnnotationTargets
      });
      return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466911.primary ? Cp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466911.primary, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466909.now) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466909.selection
      };
    }
  },
  tm = {
    'id': 'pdf.editor.action.addImage',
    'description': "Register and insert an editable PDF image overlay.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917 = Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.resource, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.assetId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917.asset['id'],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466919 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.batchId, "batch"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.registerMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466921 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.addObjectMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466922 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.objectId, "object"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466923 = yd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466922, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466924 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.editState['managedResources'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466924 && !xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917)) throw Error("Managed resource conflict for asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918 + '.');
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB208 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466924 ? undefined : {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.now,
          'kind': 'registerResource',
          'source': 'user',
          'target': {
            'kind': "asset",
            'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918
          },
          'payload': {
            'resource': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920 + "_inverse",
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.now,
            'kind': 'unregisterResource',
            'source': "undo",
            'target': {
              'kind': "asset",
              'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918
            },
            'payload': {
              'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918
            }
          }
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB209 = {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466921,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.now,
          'kind': "addObject",
          'source': "user",
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.pageId,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466922
          },
          'payload': {
            'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466923,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.pageId,
            'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.layerId,
            'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.zIndex,
            'selectAfterApply': true
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466921 + "_inverse",
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.now,
            'kind': "removeObject",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.pageId,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466922
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466922,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.pageId,
              'tombstone': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466923,
              'reason': "delete"
            }
          }
        };
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466919, "insertImage", var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB208 ? [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB208, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB209] : [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB209]),
        'selection': q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466922, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915.now)
      };
    }
  },
  nm = {
    'id': "pdf.editor.action.updateManagedImage",
    'description': "Update a managed PDF image resource and placement atomically.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.objectId];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937.pageId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.pageId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937.object["type"] !== "image") return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938 = Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.resource),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937.object["assetId"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466940 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935.editState['managedResources'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935.editState['managedResources'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938.asset['id']];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941 && !xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938)) throw Error("PDF managed resource " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938.asset['id'] + " already exists with different content.");
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A329 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941 ? [] : [fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F9(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938)],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A330 = [im.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, {
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.objectId,
          'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938.asset['id'],
          'previousAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939
        }), Gp.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, {
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.objectId,
          'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.bbox,
          'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.transform
        }), am.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, {
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.objectId,
          'cropRect': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.cropRect
        })];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.opacity !== undefined && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A330.push(Wp.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, {
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.pageId,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.objectId,
        'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.opacity
      })), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A330.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345.batch && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A329.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345.batch["mutations"]);
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938.asset['id'] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466940) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, undefined, 'mutation'),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347, "unregisterResource", {
            'kind': "asset",
            'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939
          }, {
            'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939
          });
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347 + "_inverse", 'registerResource', {
          'kind': "asset",
          'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939
        }, {
          'resource': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466940
        }, "undo"), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A329.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348);
      }
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.batchId, "batch"), "replaceImage", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A329),
        'selection': q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935.now)
      };
    }
  },
  rm = {
    'id': 'pdf.editor.action.removeManagedImage',
    'description': 'Remove\x20a\x20managed\x20PDF\x20image\x20and\x20release\x20its\x20unreferenced\x20resource.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466949, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466950) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466951 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466949.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466950.objectId];
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466951 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466951.pageId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466950.pageId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466951.object["type"] !== "image" ? {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466949.selection
      } : Yp.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466949, {
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466950.pageId,
        'objectIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466950.objectId],
        'batchId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466950.batchId
      });
    }
  },
  im = {
    'id': "pdf.editor.action.replaceImage",
    'description': "Replace the image asset used by an editable PDF image object.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466957 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.batchId, "batch"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466958 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.mutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466959 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.inverseMutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466960 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.pageId ?? kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.objectId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466961 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.previousAssetId ?? Md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.objectId);
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466957, "replaceImage", [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466958,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.now,
          'kind': "replaceImage",
          'source': 'user',
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466960,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.objectId
          },
          'payload': {
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.objectId,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466960,
            'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.assetId,
            'previousAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466961
          },
          'inverse': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466961 ? {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466959,
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.now,
            'kind': "replaceImage",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466960,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.objectId
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.objectId,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466960,
              'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466961,
              'previousAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.assetId
            }
          } : undefined
        }]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466960 ? q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466956.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.now) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466955.selection
      };
    }
  },
  am = {
    'id': "pdf.editor.action.cropImage",
    'description': "Crop an editable PDF image object.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466971 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.batchId, "batch"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466972 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.mutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466973 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.inverseMutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466974 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.pageId ?? kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.objectId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466975 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.previousCropRect ?? Nd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.objectId) ?? null,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466976 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.previousSourceRect ?? Pd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.objectId) ?? null;
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466971, "cropImage", [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466972,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.now,
          'kind': "cropImage",
          'source': 'user',
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466974,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.objectId
          },
          'payload': {
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.objectId,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466974,
            'cropRect': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.cropRect,
            'sourceRect': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.sourceRect
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466973,
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.now,
            'kind': "cropImage",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466974,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.objectId
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.objectId,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466974,
              'cropRect': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466975,
              'sourceRect': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466976
            }
          }
        }]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466974 ? q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466970.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.now) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466969.selection
      };
    }
  },
  om = {
    'id': "pdf.editor.action.promoteNativeImage",
    'description': 'Promote\x20native\x20PDF\x20image\x20into\x20an\x20editable\x20image\x20object.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466988;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466989 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.batchId, "batch"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466990 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.addObjectMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466991 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.suppressionMutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466992 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.replacementLinkMutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.objectId, "object"),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.suppressionId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993 + '_source_suppression',
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.replacementLinkId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993 + "_replacement_link",
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466994 = xd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466995 = new Date(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.now).toISOString(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.source,
          'pageId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466987 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466987.pageId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
          'operatorIds': Tf((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466988 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466988.operatorIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.displayOperationIds)
        };
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466989, "promoteNativeImage", [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466991,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.now,
          'kind': "setSourceSuppression",
          'source': "user",
          'target': {
            'kind': "sourceSpan",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
            'displayOperationIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.displayOperationIds,
            'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212
          },
          'payload': {
            'suppression': {
              'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104,
              'sourceId': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212.sourceId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.documentId,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
              'operatorIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.displayOperationIds,
              'operationPath': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212.operationPath,
              'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212,
              'reason': 'replaced-by-semantic-object',
              'exportDisposition': 'remove',
              'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466995
            }
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466991 + '_inverse',
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.now,
            'kind': "setSourceSuppression",
            'source': "undo",
            'target': {
              'kind': "sourceSpan",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
              'displayOperationIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.displayOperationIds,
              'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212
            },
            'payload': {
              'suppression': {
                'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104,
                'sourceId': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212.sourceId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.documentId,
                'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
                'operatorIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.displayOperationIds,
                'operationPath': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212.operationPath,
                'source': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212,
                'reason': "hidden-for-export",
                'exportDisposition': "preserve-native",
                'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466995,
                'notes': "Undo native image promotion."
              }
            }
          }
        }, {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466990,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.now,
          'kind': "addObject",
          'source': 'user',
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993
          },
          'payload': {
            'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466994,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
            'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.layerId,
            'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.zIndex,
            'selectAfterApply': true,
            'sourceSuppressionId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466990 + "_inverse",
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.now,
            'kind': "removeObject",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
              'tombstone': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466994,
              'reason': "replace"
            }
          }
        }, {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466992,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.now,
          'kind': "setReplacementLink",
          'source': "user",
          'target': {
            'kind': 'object',
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993
          },
          'payload': {
            'link': {
              'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105,
              'suppressionId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104,
              'replacementObjectIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993],
              'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466995
            }
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466992 + "_inverse",
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.now,
            'kind': "setReplacementLink",
            'source': "undo",
            'target': {
              'kind': 'object',
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993
            },
            'payload': {
              'link': {
                'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105,
                'suppressionId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104,
                'replacementObjectIds': [],
                'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466995,
                'notes': "Undo native image promotion."
              }
            }
          }
        }]),
        'selection': q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466986.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466985.now)
      };
    }
  },
  sm = {
    'id': 'pdf.editor.action.insertPage',
    'description': "Insert a PDF page and record an undoable page mutation.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467009 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.batchId, 'batch'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467010 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.mutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467011 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.inverseMutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467012 = cm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.orderedPageIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.page['id'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.atIndex);
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467009, "editPage", [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467010,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007.now,
          'kind': "insertPage",
          'source': "user",
          'target': {
            'kind': "page",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.page['id']
          },
          'payload': {
            'page': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.page,
            'atIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.atIndex,
            'orderedPageIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467012
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467011,
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007.now,
            'kind': "removePage",
            'source': "undo",
            'target': {
              'kind': "page",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.page['id']
            },
            'payload': {
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.page['id'],
              'tombstone': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.page,
              'orderedPageIds': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467008.orderedPageIds]
            }
          }
        }]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467007.selection
      };
    }
  };
export { Qp as pdfReorderObjectAction, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB322 as pdfPasteObjectsAction, em as pdfSelectAtPointAction, tm as pdfAddImageAction, nm as pdfUpdateManagedImageAction, rm as pdfRemoveManagedImageAction, im as pdfReplaceImageAction, am as pdfCropImageAction, om as pdfPromoteNativeImageAction, sm as pdfInsertPageAction };
