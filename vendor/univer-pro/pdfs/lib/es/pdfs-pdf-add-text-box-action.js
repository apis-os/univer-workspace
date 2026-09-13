import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { G, Hu, J, K, Qd, Rd, Td, Vd, id, kd, q, zd } from "./internal-core-endo.js";
import { ym } from "./pdfs-pdf-list-definition-from-preset.js";
import { Am } from "./pdfs-derive-pdf-editor-text-edit.js";
import { jm } from "./pdfs-pdf-editor-text-runs-edit.js";
import { Gp } from "./pdfs-pdf-add-divider-action.js";
function qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465767) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465763,
    'objectIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465764],
    'blocks': [fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF12(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465766)],
    'runs': {
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465766]: {
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465766,
        'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465767.text,
        'fontFamily': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465767.fontFamily ?? DEFAULT_STYLES.ff,
        'fontSize': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465767.fontSize ?? 12,
        'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465767.fill ?? "#111111"
      }
    }
  };
}
function Qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465813) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465811,
    'type': 'textBox',
    'origin': "user-created",
    'editability': 'semantic',
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465813.bbox,
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465813.transform,
    'textStoryId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465812,
    'autoFit': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465813.autoFit ?? "resizeShape",
    'autoFitMinHeight': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465813.autoFitMinHeight ?? Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465813.bbox[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465813.bbox[1]),
    'visible': true
  };
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF12(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465817, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465819 = {}) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465817,
    'runIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465818],
    'role': "paragraph",
    ...ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465819)
  };
}
function ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB164 = {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.align !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB164.align = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.align), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.lineHeight !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB164.lineHeight = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.lineHeight), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.indent !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB164.indent = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.indent), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.firstLineIndent !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB164.firstLineIndent = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.firstLineIndent), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.rightIndent !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB164.rightIndent = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.rightIndent), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.spacingBefore !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB164.spacingBefore = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.spacingBefore), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.spacingAfter !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB164.spacingAfter = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465823.spacingAfter), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB164;
}
function td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465826) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465825,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465826
  };
}
function nd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166 = {};
  return 'align' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166.align = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465829.align ?? null), "lineHeight" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166.lineHeight = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465829.lineHeight ?? null), "indent" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166.indent = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465829.indent ?? null), 'firstLineIndent' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166.firstLineIndent = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465829.firstLineIndent ?? null), "rightIndent" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166.rightIndent = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465829.rightIndent ?? null), 'spacingBefore' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166.spacingBefore = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465829.spacingBefore ?? null), "spacingAfter" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166.spacingAfter = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465829.spacingAfter ?? null), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166;
}
function rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833) {
  return ed({
    'align': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833.align,
    'lineHeight': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833.lineHeight,
    'indent': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833.indent,
    'firstLineIndent': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833.firstLineIndent,
    'rightIndent': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833.rightIndent,
    'spacingBefore': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833.spacingBefore,
    'spacingAfter': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833.spacingAfter
  });
}
function ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465845) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465845;
}
function od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A287 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.previousBbox, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.nextBbox, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.pageBottom],
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A38 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.nextBbox[0] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.previousBbox[0] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.nextBbox[1] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.previousBbox[1] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.nextBbox[2] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.previousBbox[2],
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A39 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.nextBbox[3] >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.nextBbox[1] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.nextBbox[3] <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.pageBottom;
  if (!(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A287.every(Number.isFinite) && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A38 && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A39)) return {
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465847.selection,
    'warnings': [{
      'code': "pdf-paragraph-bbox-invalid",
      'message': "Paragraph auto-fit must preserve its frame width and top edge and stay inside the page."
    }]
  };
}
function sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465856) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465851,
    'objectIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465852],
    'lists': {
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465855.id]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465855
    },
    'blocks': [{
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465853,
      'runIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465854],
      'role': 'listItem',
      'listItem': {
        'listId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465855.id,
        'level': 0
      }
    }],
    'runs': {
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465854]: {
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465854,
        'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465856.text,
        'fontFamily': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465856.fontFamily ?? DEFAULT_STYLES.ff,
        'fontSize': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465856.fontSize ?? 12,
        'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465856.fill ?? "#111111"
      }
    }
  };
}
function cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465865) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465863,
    'type': "textBox",
    'origin': "user-created",
    'editability': 'semantic',
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465865.bbox,
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465865.transform,
    'textStoryId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465864,
    'autoFit': "none",
    'visible': true
  };
}
function ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465872) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465874;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465873 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465869.editState['overlayTextStories'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465870]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465873 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465873.lists) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465873[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465871]) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465874 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465869.editState["textStoryPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465870]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465874 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465874.listPatches) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465874[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465871]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465872;
}
function ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465882, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465885 = "user") {
  return K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465881, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465882.mutationId, "mutation"), "upsertTextListDefinition", {
    'kind': 'textRun',
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465882.storyId
  }, {
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465882.storyId,
    'definition': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465883,
    'previous': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465884
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465885);
}
function dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465895 = "user") {
  return K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465891, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465892.mutationId, "mutation"), 'updateTextBlock', {
    'kind': 'textRun',
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465892.storyId
  }, {
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465892.storyId,
    'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465892.blockId,
    'patch': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465894,
    'previous': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465893
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465895);
}
function fd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465902, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465903, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465905) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465906;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465907 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465901.editState["overlayTextStories"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465902],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465908 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465907 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465906 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465907.lists) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465906[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465903];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465908 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465907.blocks['some'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465904 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.listItem) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168.listId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465903;
  })) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465909 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465901, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465901, undefined, "mutation"), "removeTextListDefinition", {
    'kind': "textRun",
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465902
  }, {
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465902,
    'listId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465903,
    'previous': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465908
  });
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465909.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465909.id + "_inverse", 'upsertTextListDefinition', {
    'kind': "textRun",
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465902
  }, {
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465902,
    'definition': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465908
  }, "undo"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465905.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465909);
}
function pd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465921) {
  return {
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465919.selection,
    'warnings': [{
      'code': "pdf-list-definition-missing",
      'message': "List definition " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465921 + " was not found in story " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465920 + '.'
    }]
  };
}
function md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465927) {
  return {
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465925.selection,
    'warnings': [{
      'code': "pdf-paragraph-block-missing",
      'message': 'Paragraph\x20block\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465927 + " was not found in story " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465926 + '.'
    }]
  };
}
function hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465933) {
  return {
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465931.selection,
    'warnings': [{
      'code': "pdf-paragraph-previous-block-missing",
      'message': "Paragraph block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465933 + " has no previous block in story " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465932 + '.'
    }]
  };
}
function gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465939) {
  return {
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465937.selection,
    'warnings': [{
      'code': 'pdf-list-block-missing',
      'message': "List block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465939 + " was not found in story " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465938 + '.'
    }]
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465943) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465943) ? Math.max(0, Math.min(8, Math.trunc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465943))) : 0;
}
function vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB168 = {
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.text,
    'fontFamily': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.fontFamily ?? DEFAULT_STYLES.ff,
    'fontSize': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.fontSize ?? 12,
    'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.fill ?? "#111111",
    'fillOpacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.fillOpacity,
    'bold': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.bold,
    'italic': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.italic,
    'writingMode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.writingMode
  };
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465945,
    'type': "textBox",
    'origin': "user-created",
    'editability': 'semantic',
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.bbox,
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.transform,
    'runs': [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB168],
    'autoFit': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.autoFit,
    'writingMode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.writingMode,
    'textAnchor': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465946.textAnchor,
    'visible': true
  };
}
function Fd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466089, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466091) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466091) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466092 = Ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466089, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466090),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB180 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177 of Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466091)) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB180[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466092 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466092[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177];
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB180;
}
function Id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466098) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466099, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466100;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466101 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466099 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466097.editState["objectPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466098]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466099 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466099.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466099.textAnchor;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466101 !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466101 ?? undefined;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466102 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466097.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466098]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466100.object;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466102 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466102.type) === "textBox" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466102.textAnchor : undefined;
}
function Ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466110) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466111;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466112 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466111 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466109.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466110]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466111.object;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466112 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466112.type) === "textBox") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466113;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466113 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466112.runs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466113[0];
  }
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466112 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466112.type) === "textRun") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466112.run;
}
function Gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466162) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466165;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466166 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466161.editState['objectPatches'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466162]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466163.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466163.runs;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466166) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466166.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188.text).join('');
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466167 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466164 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466161.editState["objectPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466162]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466164 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466164.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466164.text;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466167 !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466167;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466168 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466165 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466161.editState['overlayObjects'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466162]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466165.object;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466168 ? ef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466168) : undefined;
}
function ef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466239) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466239.type === 'textBox') {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466240;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466240 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466239.runs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466240.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410.text).join('')) ?? '';
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466239.type === "textRun") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466239.run["text"];
}
const Bm = {
    'id': "pdf.editor.action.addTextBox",
    'description': "Insert an editable PDF text box overlay.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467225 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.batchId, "batch"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467226 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.mutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467227 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.inverseMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467228 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.objectId, "object"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467229 = vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224);
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467225, 'insertText', [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467226,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223.now,
          'kind': "addObject",
          'source': "user",
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.pageId,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467228
          },
          'payload': {
            'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467229,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.pageId,
            'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.layerId,
            'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.zIndex,
            'selectAfterApply': true
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467227,
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223.now,
            'kind': "removeObject",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.pageId,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467228
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467228,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.pageId,
              'tombstone': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467229,
              'reason': "delete"
            }
          }
        }]),
        'selection': q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467224.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467223.now)
      };
    }
  },
  Vm = {
    'id': 'pdf.editor.action.addParagraph',
    'description': 'Insert\x20an\x20editable\x20semantic\x20PDF\x20paragraph.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467239 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.batchId, "batch"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467240 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.objectId, "object"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467241 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.storyId, 'story'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467242 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.blockId, "block"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467243 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.runId, 'run'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467244 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.addStoryMutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467245 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.addObjectMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467246 = qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467247 = Qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467248 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467244, "addTextStory", {
          'kind': "textRun",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467240,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467241,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467243
        }, {
          'story': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467246
        });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467248.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467244 + "_inverse", "removeTextStory", {
        'kind': "textRun",
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.pageId,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467240,
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467241,
        'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467243
      }, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467241,
        'previousStory': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467246
      }, "undo");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467249 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467245, "addObject", {
        'kind': "object",
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.pageId,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467240
      }, {
        'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467247,
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.pageId,
        'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.layerId,
        'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.zIndex,
        'selectAfterApply': true
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467249.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467245 + "_inverse", "removeObject", {
        'kind': "object",
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.pageId,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467240
      }, {
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467240,
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.pageId,
        'tombstone': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467247,
        'reason': "delete"
      }, 'undo'), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467239, "insertParagraph", [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467249]),
        'selection': Td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467240, {
          'start': 0,
          'end': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467238.text["length"]
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467237.now, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467243)
      };
    }
  },
  Hm = {
    'id': "pdf.editor.action.insertParagraphBlock",
    'description': "Insert a semantic PDF paragraph block.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467265;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467266 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.blockId, 'block'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467267 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.runId, "run"),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB222 = {
          ...fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF12(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.blockStyle),
          'runIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467267, ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.followingRunIds ?? [])]
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB223 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.runStyle,
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467267,
          'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.text,
          'fontSize': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467265 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.runStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467265.fontSize) ?? 12
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467268 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467263, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.mutationId, "mutation"), "insertTextBlock", {
          'kind': "textRun",
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.storyId,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467267
        }, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.storyId,
          'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.index,
          'block': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB222,
          'runs': [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB223]
        });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467268.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467268.id + "_inverse", 'removeTextBlock', {
        'kind': "textRun",
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.storyId,
        'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467267
      }, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.storyId,
        'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467266,
        'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.index,
        'previousBlock': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB222,
        'previousRuns': [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB223]
      }, "undo"), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467263, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467264.batchId, "batch"), "editParagraph", [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467268]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467263.selection
      };
    }
  },
  Um = {
    'id': "pdf.editor.action.removeParagraphBlock",
    'description': "Remove a semantic PDF paragraph block.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467277 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467275.editState["overlayTextStories"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.storyId],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467278 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.currentBlock ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467277 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467277.blocks['find'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.blockId)),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D381 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467277 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467277.blocks['findIndex'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.blockId)) ?? -1;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467278 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D381 < 0) return md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.blockId);
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.currentRuns ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467278.runIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461434 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467277 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467277.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461434]).filter(ad),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467279 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467275, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.mutationId, "mutation"), 'removeTextBlock', {
          'kind': "textRun",
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.storyId,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467278.runIds[0]
        }, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.storyId,
          'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.blockId,
          'index': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D381,
          'previousBlock': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467278,
          'previousRuns': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A361
        });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467279.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467279.id + "_inverse", "insertTextBlock", {
        'kind': "textRun",
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.storyId,
        'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467278.runIds[0]
      }, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.storyId,
        'index': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D381,
        'block': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467278,
        'runs': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A361
      }, "undo"), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467275, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467276.batchId, "batch"), "editParagraph", [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467279]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467275.selection
      };
    }
  },
  Wm = {
    'id': "pdf.editor.action.updateParagraphStyle",
    'description': "Update semantic PDF paragraph styling.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467287 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467285.editState['overlayTextStories'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286.storyId],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286.currentBlock ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467287 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467287.blocks["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286.blockId));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467288) return md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286.blockId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467289 = ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286.patch);
      if (!Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467289).length) return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467285.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467290 = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467289),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467291 = td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467289);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467290.inverse = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467285, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286,
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467290.id + "_inverse"
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467291, nd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467289), 'undo'), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467285, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467286.batchId, "batch"), "editParagraph", [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467290]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467285.selection
      };
    }
  },
  Gm = {
    'id': "pdf.editor.action.editParagraph",
    'description': 'Edit\x20semantic\x20PDF\x20paragraph\x20text\x20and\x20frame\x20geometry\x20atomically.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467301;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467302 = od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467302) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467302;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467303 = nh.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467299, {
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.objectId,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.storyId,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.runId,
          'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.range,
          'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.text,
          'previousText': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.previousText,
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.textMutationId,
          'inverseMutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.textInverseMutationId
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A363 = [...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467301 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467303.batch) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467301.mutations) ?? [])];
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A363.push(...dh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300, {
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.transformMutationId,
        'inverseMutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.transformInverseMutationId
      })), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467299, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467300.batchId, "batch"), "editParagraph", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A363),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467303.selection ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467299.selection
      };
    }
  },
  Km = {
    'id': "pdf.editor.action.splitParagraph",
    'description': "Split a semantic PDF paragraph into two blocks.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467312;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467313 = od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467313) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467313;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467314 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309.editState["overlayTextStories"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.storyId],
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D383 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467314 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467314.blocks["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.blockId)) ?? -1,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D383 >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467314 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467314.blocks[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D383] : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467316 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467314 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467314.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.runId];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467314 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467316 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315.runIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.runId)) return md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.blockId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467317 = Vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.range, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.text["length"]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467318 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.text["slice"](0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467317.start),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467319 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.text["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467317.end),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467320 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.blockIdAfter, 'block'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467321 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.runIdAfter, "run"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467322 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315.runIds['indexOf'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.runId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467323 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315.runIds["slice"](0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467322 + 1),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467324 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315.runIds["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467322 + 1),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467325 = nh.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, {
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.objectId,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.storyId,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.runId,
          'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467318,
          'previousText': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.previousText,
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.textMutationId
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467326 = Hm.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.storyId,
          'index': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D383 + 1,
          'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467319,
          'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467320,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467321,
          'blockStyle': rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315),
          'runStyle': id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467316),
          'followingRunIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467324,
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.insertMutationId
        }),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB226 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315,
          'runIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467323
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467327 = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.storyId,
          'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315.id,
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.blockMutationId
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315, {
          'runIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467323
        });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467327.inverse = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.storyId,
        'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315.id,
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467327.id + "_inverse"
      }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB226, {
        'runIds': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467315.runIds]
      }, "undo");
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A365 = [...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467311 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467325.batch) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467311.mutations) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467327, ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467312 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467326.batch) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467312.mutations) ?? []), ...dh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310, {
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.transformMutationId
      })];
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.batchId, "batch"), "editParagraph", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A365),
        'selection': Td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.objectId, {
          'start': 0,
          'end': 0
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467309.now, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467310.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467321)
      };
    }
  },
  qm = {
    'id': 'pdf.editor.action.mergeParagraph',
    'description': 'Merge\x20a\x20semantic\x20PDF\x20paragraph\x20into\x20its\x20previous\x20block.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467350;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467351 = od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467351) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467351;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347.editState["overlayTextStories"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.storyId],
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D385 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352.blocks["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.blockId)) ?? -1,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467353 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D385 >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352.blocks[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D385] : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D385 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352.blocks[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D385 - 1] : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467355 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354.runIds['slice'](-1)[0],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467356 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467355 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467355] : undefined;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467352 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467353 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467355 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467356 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467353.runIds[0] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.runId) return hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.blockId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467357 = nh.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, {
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.objectId,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.storyId,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.runId,
          'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.text,
          'previousText': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.previousText,
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.textMutationId
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A367 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354.runIds, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467353.runIds],
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB228 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354,
          'runIds': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A367
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467358 = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.storyId,
          'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354.id,
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.blockMutationId
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354, {
          'runIds': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A367
        });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467358.inverse = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.storyId,
        'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354.id,
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467358.id + "_inverse"
      }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB228, {
        'runIds': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467354.runIds]
      }, "undo");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467359 = Um.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.storyId,
          'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.blockId,
          'currentBlock': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467353,
          'currentRuns': [],
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.removeMutationId
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A368 = [...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467349 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467357.batch) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467349.mutations) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467358, ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467350 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467359.batch) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467350.mutations) ?? []), ...dh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348, {
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.transformMutationId
        })];
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.batchId, 'batch'), "editParagraph", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A368),
        'selection': Td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.objectId, {
          'start': 0,
          'end': 0
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467347.now, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467348.runId)
      };
    }
  },
  Jm = {
    'id': "pdf.editor.action.addList",
    'description': 'Insert\x20an\x20editable\x20semantic\x20PDF\x20list.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467375 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.batchId, "batch"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.objectId, "object"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467377 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.storyId, "story"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467378 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.listId, "list"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467379 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.blockId, "block"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467380 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.runId, "run"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467381 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.addStoryMutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467382 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.addObjectMutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467383 = sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467380, {
          ...ym(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.presetId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467378),
          'kind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.kind
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467384 = cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467385 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467381, "addTextStory", {
          'kind': "textRun",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467377,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467380
        }, {
          'story': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467383
        });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467385.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467381 + "_inverse", "removeTextStory", {
        'kind': 'textRun',
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.pageId,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376,
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467377,
        'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467380
      }, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467377,
        'previousStory': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467383
      }, "undo");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467386 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467382, "addObject", {
        'kind': "object",
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.pageId,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376
      }, {
        'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467384,
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.pageId,
        'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.layerId,
        'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.zIndex,
        'selectAfterApply': true
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467386.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467382 + "_inverse", 'removeObject', {
        'kind': "object",
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.pageId,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376
      }, {
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376,
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.pageId,
        'tombstone': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467384,
        'reason': 'delete'
      }, "undo"), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467375, "insertList", [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467386]),
        'selection': q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467374.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467373.now)
      };
    }
  },
  Ym = {
    'id': "pdf.editor.action.changeListStyle",
    'description': "Change the marker style for a semantic PDF list.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467403 = ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402.listId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402.currentDefinition);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467403) return pd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402.listId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467404 = ym(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402.presetId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402.listId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467405 = ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467403);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467405.inverse = ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467401, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402,
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467405.id + "_inverse"
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467404, "undo"), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467401, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467402.batchId, "batch"), 'editList', [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467405])
      };
    }
  },
  Xm = {
    'id': "pdf.editor.action.convertParagraphToList",
    'description': 'Convert\x20a\x20semantic\x20PDF\x20paragraph\x20to\x20a\x20list\x20item.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467413 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411.editState['overlayTextStories'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.storyId],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467414 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.currentBlock ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467413 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467413.blocks["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.blockId));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467414 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467414.listItem) return md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.blockId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467415 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.listId, "list"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467416 = ym(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.presetId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467415),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467417 = ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.storyId,
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.definitionMutationId
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467416, undefined);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467417.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467417.id + '_inverse', "removeTextListDefinition", {
        'kind': "textRun",
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.storyId
      }, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.storyId,
        'listId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467415,
        'previous': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467416
      }, "undo");
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB230 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467414,
          'role': "listItem",
          'listItem': {
            'listId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467415,
            'level': 0
          }
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467418 = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.storyId,
          'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.blockId,
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.blockMutationId
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467414, {
          'role': "listItem",
          'listItem': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB230.listItem
        });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467418.inverse = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.storyId,
        'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.blockId,
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467418.id + "_inverse"
      }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB230, {
        'role': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467414.role ?? null,
        'listItem': null
      }, "undo"), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467412.batchId, "batch"), "editList", [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467418])
      };
    }
  },
  Zm = {
    'id': "pdf.editor.action.setListStartNumber",
    'description': "Set the starting number for a semantic PDF list level.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467429 = ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428.listId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428.currentDefinition);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467429) return pd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428.listId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467430 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428.level),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D387 = Math.max(1, Math.trunc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428.startAt)),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB232 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467429,
          'levels': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467429.levels["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439.level === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467430 ? {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439,
            'startAt': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D387
          } : {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439
          })
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467431 = ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467429);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467431.inverse = ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467427, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428,
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467431.id + "_inverse"
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467429, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB232, "undo"), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467427, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467428.batchId, 'batch'), "editList", [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467431])
      };
    }
  },
  Qm = {
    'id': "pdf.editor.action.insertListItem",
    'description': 'Insert\x20a\x20semantic\x20PDF\x20list\x20item.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467439 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.blockId, "block"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467440 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.runId, "run"),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB234 = {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467439,
          'runIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467440],
          'role': "listItem",
          'listItem': {
            'listId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.listId,
            'level': fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.level)
          }
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A371 = [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467440,
          'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.text,
          'fontFamily': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.fontFamily,
          'fontSize': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.fontSize ?? 12,
          'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.fill ?? "#111111"
        }],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467441 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467437, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.mutationId, "mutation"), "insertTextBlock", {
          'kind': "textRun",
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.storyId,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467440
        }, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.storyId,
          'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.index,
          'block': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB234,
          'runs': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A371
        });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467441.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467441.id + '_inverse', "removeTextBlock", {
        'kind': "textRun",
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.storyId,
        'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467440
      }, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.storyId,
        'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467439,
        'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.index,
        'previousBlock': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB234,
        'previousRuns': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A371
      }, "undo"), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467437, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467438.batchId, 'batch'), 'editList', [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467441])
      };
    }
  },
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB323 = {
    'id': "pdf.editor.action.removeListItem",
    'description': "Remove a semantic PDF list item.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467449;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467450 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467447.editState['overlayTextStories'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.storyId],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467451 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.currentBlock ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467450 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467450.blocks["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461440 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461440.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.blockId));
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467451 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467451.listItem)) return gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.blockId);
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D389 = Math.max(0, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467450 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467450.blocks["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.blockId)) ?? 0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467452 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.currentRuns ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467451.runIds["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467450 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467450.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442] ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467450.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442]] : []),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467453 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467447, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.mutationId, 'mutation'), "removeTextBlock", {
          'kind': "textRun",
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.storyId
        }, {
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.storyId,
          'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467451.id,
          'index': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D389,
          'previousBlock': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467451,
          'previousRuns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467452
        });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467453.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467453.id + "_inverse", 'insertTextBlock', {
        'kind': "textRun",
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.storyId,
        'runId': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467449 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467452[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467449.id
      }, {
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.storyId,
        'index': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D389,
        'block': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467451,
        'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467452
      }, "undo"), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467447, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467448.batchId, 'batch'), 'editList', [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467453])
      };
    }
  },
  eh = {
    'id': "pdf.editor.action.exitList",
    'description': "Exit a semantic PDF list for one text block.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467461.editState['overlayTextStories'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462.storyId],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462.currentBlock ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467463 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467463.blocks["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462.blockId));
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467464 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467464.listItem)) return gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462.blockId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467465 = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467464, {
        'role': "paragraph",
        'listItem': null
      });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467465.inverse = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467461, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462,
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467465.id + "_inverse"
      }, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467464,
        'role': 'paragraph',
        'listItem': undefined
      }, {
        'role': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467464.role ?? null,
        'listItem': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467464.listItem
      }, "undo");
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A373 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467465];
      return fd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467464.listItem["listId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467464.id, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A373), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467461, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467462.batchId, "batch"), "editList", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A373)
      };
    }
  },
  th = {
    'id': "pdf.editor.action.changeListLevel",
    'description': "Increase or decrease a semantic PDF list item level.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467473 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467471.editState['overlayTextStories'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472.storyId],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472.currentBlock ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467473 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467473.blocks['find'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472.blockId));
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474.listItem)) return gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472.blockId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467475 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474.listItem["level"] + Math.trunc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472.delta));
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467475 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474.listItem["level"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467473) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467473.blocks["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474.id),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467473.blocks[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445 - 1] : undefined;
        if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461446 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461446.listItem) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461446.listItem['level'] < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467475 - 1) return {
          'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467471.selection,
          'warnings': [{
            'code': 'pdf-list-level-parent-missing',
            'message': "A list item cannot be indented without a preceding parent level."
          }]
        };
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467475 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474.listItem["level"]) return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467471.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467476 = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474, {
        'listItem': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474.listItem,
          'level': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467475
        }
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467476.inverse = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467471, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472,
        'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467476.id + "_inverse"
      }, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474,
        'listItem': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474.listItem,
          'level': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467475
        }
      }, {
        'listItem': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467474.listItem
      }, 'undo'), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467471, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467472.batchId, "batch"), 'editList', [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467476])
      };
    }
  },
  nh = {
    'id': "pdf.editor.action.editText",
    'description': 'Edit\x20semantic\x20PDF\x20text\x20object\x20content.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467486;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467487 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.batchId, 'batch'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467488 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.mutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467489 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.inverseMutationId, 'mutation'),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.previousText ?? Qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.runId) ?? Gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId) ?? '',
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467490 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467485 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467485.object,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A44 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.storyId && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.runId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467490 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467490.type) === "textBox",
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467491 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A44 ? zd(Rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId)) : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467492 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A44 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.range ? Am(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.text) : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467492 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467492.range) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.range ? Vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.range, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108.length) : undefined),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467494 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467492 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467492.text) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.text,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467495 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467491 ? jm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467491, {
          'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493 ?? {
            'start': 0,
            'end': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108.length
          },
          'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467494
        }) : undefined,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB236 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493 ? {
          'start': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493.start,
          'end': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467494.length
        } : undefined,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A375 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493 ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493.end) : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB109 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.range && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467494.length : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.text["length"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467496 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.pageId ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467486 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.editState['overlayObjects'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467486.pageId),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A376 = [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467488,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.now,
          'kind': "updateTextContent",
          'source': "user",
          'target': {
            'kind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.storyId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.runId ? 'textRun' : "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467496,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId,
            'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.storyId,
            'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.runId
          },
          'payload': {
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467496,
            'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.storyId,
            'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.runId,
            'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467493,
            'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467494,
            'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467495
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467489,
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.now,
            'kind': "updateTextContent",
            'source': "undo",
            'target': {
              'kind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.storyId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.runId ? 'textRun' : "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467496,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId,
              'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.storyId,
              'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.runId
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467496,
              'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.storyId,
              'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.runId,
              'range': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB236,
              'text': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A375,
              'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467491
            }
          }
        }];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.bbox && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467496 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467490 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467490.bbox["every"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449;
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447 === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.bbox) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448]);
      })) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467497;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453 = Gp.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483, {
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467496,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId,
          'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.bbox,
          'previousBbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467490.bbox,
          'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.transformMutationId,
          'inverseMutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.transformInverseMutationId
        });
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A376.push(...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467497 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453.batch) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467497.mutations) ?? []));
      }
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467487, "editText", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A376),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467496 ? Td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467496, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.objectId, {
          'start': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB109,
          'end': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB109
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.now, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467484.runId) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467483.selection
      };
    }
  },
  rh = {
    'id': 'pdf.editor.action.updateTextStyle',
    'description': "Update semantic PDF text object styling.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.textStyle && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.textAnchor === undefined) return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.selection
      };
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.storyId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.textStyle) return ih(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514,
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.storyId,
        'textStyle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.textStyle
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467515 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.batchId, 'batch'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467516 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.mutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467517 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.inverseMutationId, "mutation"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467518 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.pageId ?? kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.objectId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467519 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.previousTextStyle ?? Fd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.textStyle),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467520 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.previousTextAnchor ?? Id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.objectId) ?? null;
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467515, "editStyle", [{
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467516,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.now,
          'kind': "updateObjectStyle",
          'source': "user",
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467518,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.objectId
          },
          'payload': {
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.objectId,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467518,
            'textStyle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.textStyle,
            'textAnchor': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.textAnchor
          },
          'inverse': {
            'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467517,
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.now,
            'kind': "updateObjectStyle",
            'source': "undo",
            'target': {
              'kind': "object",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467518,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.objectId
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.objectId,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467518,
              'textStyle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467519,
              'textAnchor': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467520
            }
          }
        }]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467518 ? q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467518, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467514.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.now) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467513.selection
      };
    }
  };
function ih(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529.editState["overlayTextStories"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.storyId],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A379 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.runIds ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531.blocks["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454.runIds)) ?? [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A380 = [...new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A379)].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531 || !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A380.length) return {
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529.selection,
    'warnings': [{
      'code': "pdf-text-story-runs-missing",
      'message': "PDF text story " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.storyId + " has no editable runs.",
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.pageId,
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.objectId
    }]
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467532 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.pageId ?? kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.objectId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467533 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.mutationId, "mutation"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467534 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.inverseMutationId, "mutation"),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A381 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A380.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459 = Hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.textStyle),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458 === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467533 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467533 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458, "updateTextContent", {
          'kind': "textRun",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467532,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.objectId,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531.id,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457.id
        }, {
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.objectId,
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467532,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531.id,
          'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457.id,
          'runs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459]
        });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458 === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467534 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467534 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458, "updateTextContent", {
        'kind': "textRun",
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467532,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.objectId,
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531.id,
        'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457.id
      }, {
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.objectId,
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467532,
        'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467531.id,
        'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457.id,
        'runs': [zd([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457])[0]]
      }, 'undo'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460;
    });
  return {
    'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467530.batchId, "batch"), "editStyle", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A381),
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467529.selection
  };
}
function dh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467645) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467646;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467644.previousBbox["every"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467644.nextBbox[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477]) ? [] : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467646 = Gp.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467643, {
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467644.pageId,
    'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467644.objectId,
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467644.nextBbox,
    'previousBbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467644.previousBbox,
    'mutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467645.mutationId,
    'inverseMutationId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467645.inverseMutationId
  }).batch) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467646.mutations) ?? [];
}
export { Bm as pdfAddTextBoxAction, Vm as pdfAddParagraphAction, Hm as pdfInsertParagraphBlockAction, Um as pdfRemoveParagraphBlockAction, Wm as pdfUpdateParagraphStyleAction, Gm as pdfEditParagraphAction, Km as pdfSplitParagraphAction, qm as pdfMergeParagraphAction, Jm as pdfAddListAction, Ym as pdfChangeListStyleAction, Xm as pdfConvertParagraphToListAction, Zm as pdfSetListStartNumberAction, Qm as pdfInsertListItemAction, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB323 as pdfRemoveListItemAction, eh as pdfExitListAction, th as pdfChangeListLevelAction, nh as pdfEditTextAction, rh as pdfUpdateTextStyleAction };
