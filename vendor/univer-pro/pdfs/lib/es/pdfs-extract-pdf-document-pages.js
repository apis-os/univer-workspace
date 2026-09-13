import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { V, Xl, Yl, bl, hl } from "./internal-core-endo.js";
import { ke } from "./pdfs-empty-asset-store.js";
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291) {
  let {
      sourceDocument: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291,
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929926 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291.pageIds),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292.pages["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929926.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.id)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294 = bl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465295 = jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.pageIds),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465296 = jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.objectIds),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465297 = jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.displayListIds),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465298 = jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.assetIds),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465299 = jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.textStoryIds),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB136 = {
      'pageIdMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465295,
      'objectIdMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465296,
      'displayListIdMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465297,
      'assetIdMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465298,
      'textStoryIdMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465299
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465300 = Yl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027) => ({
      ...V(Xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB136),
      'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027
    }))),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465301 = Dl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.objectIds, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB136),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302 = Ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.displayListIds, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB136),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303 = kl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.textStoryIds, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB136),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304 = Al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292.assets, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.assetIds, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB136);
  return {
    'document': {
      ...Xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292),
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291.documentId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292.id + "_extract",
      'title': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291.title ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292.title,
      'pages': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465300,
      'objects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465301,
      'displayLists': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302,
      'textStories': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303,
      'assets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304,
      'metadata': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292.metadata,
        'extractedFromDocumentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292.id,
        'extractedPageIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.id)
      }
    },
    'pages': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465300,
    'pageIdMap': Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465295),
    'objectIdMap': Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465296),
    'displayListIdMap': Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465297),
    'assetIdMap': Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465298),
    'textStoryIdMap': Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465299)
  };
}
function Dl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB138 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB138[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049] = V(Xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359));
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB138;
}
function Ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465365) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB140 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465364) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465363.displayLists[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB140[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050] = V(Xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465365));
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB140;
}
function kl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB142 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465369.textStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB142[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051] = V(Xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371));
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB142;
}
function Al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378 = ke();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052 of hl) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465376) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141] = V(Xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377));
    }
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378;
}
function jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383) {
  return new Map(Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053]));
}
export { fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11 as extractPdfDocumentPages };
