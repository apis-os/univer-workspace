import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { ap } from "./pdfs-pdf-editor-edit-state-runtime-index.js";
import { Jh, Lh, Rh, Uh, Wh, X, ig, ng } from "./internal-core-endo.js";
import { Dm } from "./pdfs-pdf-editor-text-story-patch.js";
import { Em } from "./pdfs-clone-pdf-editor-text-story.js";
import { Bf } from "./pdfs-pdf-editor-managed-image-resource.js";
const Sh = new WeakMap();
function Eh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467783) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467783.document,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467783.session,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467786 = Dh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467783.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467783.sourcePage);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467786) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467787 = ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467785.editState),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467788 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467787.getActiveSourceSuppressionsForPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467783.pageId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467789 = Oh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467783.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467783.objectIds),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467790 = kh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467789),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467791 = Nh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784.textStories, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467790),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467792 = ig(Ah(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467783.displayListIds), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467787);
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784,
    'pages': ng([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467786], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467785),
    'objects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467789,
    'displayLists': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467792,
    'textStories': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467791,
    'assets': Ph(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467785),
    'edits': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784.edits,
      'suppressions': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784.edits["suppressions"],
        ...Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467788.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461517 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461517.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461517]))
      },
      'replacements': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467784.edits['replacements'],
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467785.editState["replacementLinks"]
      }
    }
  };
}
function Dh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467803, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467805, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467806) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467807;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467808 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467804.editState["pagePatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467805];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467808 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467808.deleted) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467806 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467803.pages["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467805) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467807 = Uh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467804).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519.page['id'] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467805)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467807.page);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467809 ? Wh(X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467809), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467808) : undefined;
}
function Oh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467817, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467820) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929960 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467820);
  (ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467818.editState).overlaysByPage["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467819) ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520.object['visible'] !== false).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929960.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521.object['id']));
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB246 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522 of var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929960) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467818.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522];
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.pageId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467819) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.object["visible"] !== false && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB246[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.object));
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467817.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467818.editState["objectPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 ? Jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.visible !== false && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB246[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485);
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB246;
}
function kh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467825) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929962 = new Set();
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467825).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523 => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.type === "textBox" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.textStoryId) {
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929962.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.textStoryId);
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.type === 'table' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.cells['forEach'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929962.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486.contentStoryId));
  }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929962;
}
function Ah(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467828, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467830) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB248 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467827.displayLists,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467828.editState["overlayDisplayLists"]
    },
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929964 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467830),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929965 = new Set();
  jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467829, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929964, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929965);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467831 = Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929964),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467832 = Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929965),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D395 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D395 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467831.length || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467832.length;) {
    for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D395 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467831.length;) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB248[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467831[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D395++]];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 && jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929964, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467832);
    }
    for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467832.length;) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = Mh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467832[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396++]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 && jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929964, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467832);
    }
  }
  return Object.fromEntries(Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929964).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB248[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526 ? [[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526]] : [];
  }));
}
function jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467842 = [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467843 = [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467844 = '', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467845 = new WeakSet()) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839 == "string") {
    /displayListIds?$/i.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467844) && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467840.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467840.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467842.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839)) : /assetIds?$/i.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467844) && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467841.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467841.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467843.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839));
    return;
  }
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839 != "object" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467845.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839))) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467845.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839), Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839)) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 => jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467845));
      return;
    }
    Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467839).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488]) => jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467845));
  }
}
function Mh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467854) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467853.assets)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467854];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489;
  }
}
function Nh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467857, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467859) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB250 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467859) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467858.editState["overlayTextStories"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467857[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 = Dm(Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467858.editState['textStoryPatches'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530]);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB250[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491);
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB250;
}
function Ph(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467864) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A401 = Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467864.editState["managedResources"]);
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A401.length === 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467863.assets;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467865 = Sh.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467863.assets);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467865 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467865 = new WeakMap(), Sh.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467863.assets, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467865));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467866 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467865.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467864.editState["managedResources"]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467866) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467866;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB252 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467863.assets["images"]
  };
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532] of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A401) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 = Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493 = Lh(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493) {
      if (!Rh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.asset)) throw Error("Cannot materialize managed image asset \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531 + '\x22:\x20conflicting\x20source\x20asset\x20metadata.');
      continue;
    }
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB252[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.asset);
  }
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB253 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467863.assets,
    'images': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB252
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467865.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467864.editState["managedResources"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB253), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB253;
}
export { Eh as materializePdfEditorPageProjection };
