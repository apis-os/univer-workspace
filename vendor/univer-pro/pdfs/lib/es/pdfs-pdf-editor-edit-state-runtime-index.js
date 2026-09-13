import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { np } from "./internal-core-endo.js";
function ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466576 = np.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466576) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466576;
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5972 = new Map(),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5973 = new Map(),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5974 = new Map(),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5975 = new Map();
  Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.overlayObjects).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260 => {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5972.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.pageId) ?? [];
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5972.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.pageId, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5973.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.pageId, Math.max(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5973.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.pageId) ?? -1 / 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.zIndex)), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5974.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.object['id'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.pageId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.object["type"] === "textBox" ? fp(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.object["textStoryId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.pageId) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.object["type"] === "table" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.object["cells"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 => {
      fp(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.contentStoryId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.pageId);
    });
  });
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A303 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.sourceSuppressions).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262.exportDisposition !== "preserve-native"),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A304 = [],
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5976 = new Map(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466577 = lp();
  var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A303.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263 => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.pageId) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5976.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.pageId) ?? [];
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5976.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.pageId, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11);
    } else var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A304.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263);
    up(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263);
  });
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5977 = new Map(),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB194 = {
      'overlaysByPage': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5972,
      'maxOverlayZIndexByPage': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5973,
      'pageIdByOverlayObjectId': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5974,
      'pageIdsByTextStoryId': var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5975,
      'activeSourceSuppressions': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A303,
      'getActiveSourceSuppressionsForPage'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5977.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266;
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41 = [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A304, ...(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5976.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265) ?? [])];
        return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5977.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41;
      },
      'isSourceOperationSuppressed'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274;
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466577.global["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466577.byPage["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271)) === true || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466577.byDisplayList["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271)) === true || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466577.byPageAndDisplayList["get"](dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270))) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271)) === true;
      }
    };
  return np.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB194), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB194;
}
function lp() {
  return {
    'global': new Set(),
    'byPage': new Map(),
    'byDisplayList': new Map(),
    'byPageAndDisplayList': new Map()
  };
}
function up(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466597;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929948 = new Set([...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.operatorIds ?? []), ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466597 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466597.operatorIds) ?? [])]);
  if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929948.size === 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466598;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.pageId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.displayListId) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284 = dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.displayListId);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466598 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595.byPageAndDisplayList["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284) ?? new Set(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595.byPageAndDisplayList["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466598);
  } else var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.pageId ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466598 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595.byPage['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.pageId) ?? new Set(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595.byPage['set'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466598)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.displayListId ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466598 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595.byDisplayList["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.displayListId) ?? new Set(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595.byDisplayList['set'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596.displayListId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466598)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466598 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595.global;
  var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929948.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466598.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285));
}
function dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466603, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466604) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466603 + '\x00' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466604;
}
function fp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466607, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466609) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466608) return;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466607.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466608) ?? new Set();
  var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466609), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466607.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466608, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950);
}
export { ap as getPdfEditorEditStateRuntimeIndex };
