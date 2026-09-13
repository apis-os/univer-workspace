import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { nb } from "./internal-core-endo.js";
function Zy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469283 = nb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469279),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280.documentShell ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280.documentShell["pageDirectory"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.pageId) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280.document["pages"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956.id),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A462 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280.documentShell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282.pageBlocks['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957.blockId)) ?? [];
  rb("page", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A461), rb("block", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A462);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284 = tb("page", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469285 = tb("block", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280.documentShell ? {
    'pageIdMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284,
    'blockIdMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469285,
    'objectIdMap': {},
    'displayListIdMap': {},
    'textStoryIdMap': {}
  } : {
    'pageIdMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284,
    'blockIdMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469285,
    'objectIdMap': tb("object", Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280.document['objects']), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281),
    'displayListIdMap': tb("displayList", Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280.document["displayLists"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281),
    'textStoryIdMap': tb('textStory', Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280.document["textStories"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281)
  };
}
function tb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469316) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB306 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469314) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 < 8; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 += 1) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469316(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469315.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672)) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672;
        break;
      }
    }
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621) throw Error("Unable to allocate a unique PDF " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469313 + " id for " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968 + '\x20after\x208\x20attempts.');
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469315.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB306[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621;
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB306;
}
function rb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469328) {
  if (new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469328).size !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469328.length) throw Error("PDF append source contains duplicate " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469327 + " ids.");
}
export { Zy as createPdfAppendInstancePlan };
