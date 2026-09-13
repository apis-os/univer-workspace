import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { Dm, Jf, Om, Tm, nl, wm } from "./internal-core-endo.js";
function Tp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611359) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611360 = Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611359),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611361 = km(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611359),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299247 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611360.parentId === undefined ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611360.id] : []),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611362 = Jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358.nodes)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611361.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465524) || (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465524] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611360.parentId) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465526 = Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611360.parentId);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465526.id] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465526,
      'childIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465526.childIds["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611359)
    };
  }
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299248 = new Set(Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358.presentationShapes).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527.dataNodeIds["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611361.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527.role !== 'background' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527.dataNodeIds["length"] === 0 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299247.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611362.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527.id) ?? '')).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465528 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465528.id)),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB202 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465530] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358.presentationShapes)) var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299248.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465529) || (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB202[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465529] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465530);
  return nl({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358,
    'structureDirty': true,
    'rootNodeIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358.rootNodeIds["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611359),
    'nodes': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201,
    'presentationShapeOrder': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611358.presentationShapeOrder["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465532 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299248.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465532)),
    'presentationShapes': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB202
  });
}
function Ep(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611369) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611370 = Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611369.nodeId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611371 = Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611369.targetNodeId);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611370.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611371.id || km(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611370.id).has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611371.id)) throw Error("A SmartArt node cannot be moved into its own subtree.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611372 = Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611370),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611373 = Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611370.id);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611369.position === 'below') {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465533 = Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611371.id);
    return nl({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611372,
      'structureDirty': true,
      'nodes': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611372.nodes,
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465533.id]: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465533,
          'childIds': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465533.childIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611370.id]
        },
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611370.id]: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611373,
          'parentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465533.id
        }
      }
    });
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611369.position === "above" ? nl(Om(wm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611372, Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611371.id), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611373))) : nl(Om(Tm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611372, Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611371.id), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611369.position === "after")));
}
function kp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611396) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611397 = Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611395),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A416 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611396.role !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611396.role !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611397.role;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611394,
    'structureDirty': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A416 ? true : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611394.structureDirty,
    'nodes': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611394.nodes,
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611395]: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611397,
        'role': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611396.role ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611397.role,
        'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611396.text ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611397.text,
        'fontSizeMode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611396.fontSizeMode ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611397.fontSizeMode
      }
    }
  };
}
function Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611836, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611837) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611837.parentId) return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611836,
    'rootNodeIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611836.rootNodeIds["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465644 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465644 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611837.id)
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611838 = Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611836, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611837.parentId);
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611836,
    'nodes': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611836.nodes,
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611838.id]: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611838,
        'childIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611838.childIds['filter'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465645 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465645 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611837.id)
      }
    }
  };
}
function km(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611851) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299255 = new Set(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611852 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465646 => {
      if (!var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299255.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465646)) {
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299255.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465646);
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 of Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465646).childIds) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611852(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525);
      }
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611852(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611851), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299255;
}
export { Tp as deleteSmartArtNode, Ep as moveSmartArtNode, kp as updateSmartArtNode };
