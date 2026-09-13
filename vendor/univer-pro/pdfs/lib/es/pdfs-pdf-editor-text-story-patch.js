import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Em } from "./pdfs-clone-pdf-editor-text-story.js";
import { Rm } from "./internal-core-endo.js";
import { Om } from "./pdfs-pdf-editor-text-block-patch.js";
import { km } from "./pdfs-pdf-editor-text-story-run-edit.js";
function Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132) return Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467131);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132.removed) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133 = Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467131),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5988 = new Map();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132.insertedBlocks ?? []) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.blocks["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.block['id'])) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462 = Rm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.index, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.blocks["length"]),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5988.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462) ?? 0;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.blocks['splice'](Rm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.blocks["length"]), 0, zm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.block)), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5988.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 + 1);
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.runs) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.id] = zm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151);
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132.blockPatches && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.blocks = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.blocks["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411;
    if (!Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132.blockPatches, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410.id)) return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132.blockPatches) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410.id];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412 === null ? [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412 === undefined ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410] : [Om(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412)];
  }));
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132.runPatches ?? {})) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417 === null) {
      delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416];
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463,
      ...zm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417),
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416
    });
  }
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132.runTextEdits ?? {})) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.reduce(km, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464));
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132.listPatches) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.lists
    };
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467132.listPatches)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 === null ? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465] : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465] = zm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133.lists = Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23 : undefined;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467133;
}
function zm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467221) {
  return JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467221));
}
export { Dm as applyPdfEditorTextStoryPatch };
