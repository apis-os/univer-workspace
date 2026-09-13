import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { ou } from "./pdfs-pdf-table-grid.js";
import { mu } from "./pdfs-default-pdf-table-style-id.js";
import { G, J, K, Y, kd, mf, q } from "./internal-core-endo.js";
import { Wm, rh } from "./pdfs-pdf-add-text-box-action.js";
function Gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465725, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465727, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.bbox,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A36 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.bbox['every'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144 => Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144)) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465727 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465728,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.rows["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.rows["every"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.id && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.height) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.height > 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.columns['length'] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.columns['every'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.id && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.width) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.width > 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465733 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.cells ? Jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.rows, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.columns, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.cells) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.rows['length'] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465725.rows['length'] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.columns["length"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465725.columns["length"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.rows["every"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.id === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465725.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149.id);
    }) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.columns['every']((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461155;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461153.id === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465725.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461155.id);
    });
  if (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A36 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465733) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465734 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.rows["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.height, 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.columns['reduce']((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162.width, 0);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465734 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465728 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465727;
}
function Ju(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465773, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465774, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465775, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465777, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465778) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465773,
    'objectIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465774],
    'blocks': [{
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465775,
      'runIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465776],
      'role': "tableDataCell"
    }],
    'runs': {
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465776]: {
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465776,
        'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465777,
        'fontFamily': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465778.fontFamily ?? DEFAULT_STYLES.ff,
        'fontSize': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465778.fontSize ?? 12,
        'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465778.fill ?? "#111111"
      }
    }
  };
}
function Yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465788, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465791 = ou({
    'width': Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790.bbox[2] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790.bbox[0]),
    'height': Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790.bbox[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790.bbox[1]),
    'rowIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465786,
    'columnIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465787,
    'cells': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465788.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164) => ({
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163,
      'contentStoryId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465789[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164]
    }))
  });
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465785,
    'type': 'table',
    'origin': "user-created",
    'editability': 'semantic',
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790.bbox,
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790.transform,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465791,
    'styleId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790.styleId ?? "univerPrimaryPlainGrid",
    'options': {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790.options ?? mu)
    },
    'defaultCellStyle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465790.defaultCellStyle,
    'semantic': {
      'role': "table"
    },
    'visible': true
  };
}
function Xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465799, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465800) {
  if (!Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465799) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465799 <= 0) throw RangeError('PDF\x20table\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465800 + " must be a positive integer.");
}
function Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465805, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465806) {
  return Array.from({
    'length': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465805
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166) => Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465806));
}
function Kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466179) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466180;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466181 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466180 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466177.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466178]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466180.object;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466181 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466181.type) === "table" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466181.cells['find'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466179) : undefined;
}
function qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466189) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466190;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466190 = Kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466189)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466190.style;
}
function Jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197.length !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466195.length * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196.length) return false;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929940 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466195.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190.id)),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929941 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.id)),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929942 = new Set(),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929943 = new Set();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929942.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.id) || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929943.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.contentStoryId) ? false : (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929942.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.id), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929943.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.contentStoryId), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929940.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.rowId) && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929941.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.columnId) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.rowSpan === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.columnSpan === 1));
}
function Xd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB182 = {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219.fill !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB182.fill = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219.fill), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219.verticalAlign !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB182.verticalAlign = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219.verticalAlign), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB182;
}
function Zd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466222) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB184 = {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466222.fill !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB184.fill = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221.fill) ?? null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466222.verticalAlign !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB184.verticalAlign = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221.verticalAlign) ?? null), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB184;
}
function hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466357 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466353, undefined, 'mutation'),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466358 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466357, "removeTextStory", {
      'kind': 'textRun',
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466354,
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466355,
      'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356.id
    }, {
      'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356.id,
      'previousStory': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466358.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466357 + "_inverse", 'addTextStory', {
    'kind': "textRun",
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466354,
    'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466355,
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356.id
  }, {
    'story': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356
  }, 'undo'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466358;
}
function gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466365) {
  return JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466365));
}
const fh = 10000,
  ph = {
    'id': "pdf.editor.action.addTable",
    'description': 'Insert\x20an\x20editable\x20structured\x20PDF\x20table.',
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652) {
      Xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.rowCount, 'rowCount'), Xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.columnCount, 'columnCount');
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467653 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.batchId, 'batch'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467654 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.tableId, "object"),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.rowCount * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.columnCount;
      if (!Number.isSafeInteger(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393 > fh) throw RangeError("PDF table cannot contain more than " + fh + " cells.");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467655 = Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.rowIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.rowCount, 'tableRow'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467656 = Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.columnIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.columnCount, "tableColumn"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467657 = Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.cellIds, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393, 'tableCell'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467658 = Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.storyIds, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393, "story"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467659 = Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.blockIds, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393, 'block'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467660 = Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.runIds, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393, "run"),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467658.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479) => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480;
          return Ju(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467659[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467660[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479], ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.cellTexts) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479]) ?? '', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652);
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467661 = Yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A392 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A391.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485) => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.addStoryMutationIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485, "mutation"),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486, "addTextStory", {
              'kind': "textRun",
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.pageId,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467654,
              'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484.id,
              'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467660[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485]
            }, {
              'story': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484
            });
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486 + "_inverse", "removeTextStory", {
            'kind': "textRun",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.pageId,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467654,
            'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484.id,
            'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467660[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485]
          }, {
            'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484.id,
            'previousStory': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484
          }, 'undo'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487;
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467662 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.addObjectMutationId, 'mutation'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467663 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467662, "addObject", {
          'kind': 'object',
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.pageId,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467654
        }, {
          'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467661,
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.pageId,
          'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.layerId,
          'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.zIndex,
          'selectAfterApply': true
        });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467663.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467662 + '_inverse', 'removeObject', {
        'kind': "object",
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.pageId,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467654
      }, {
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467654,
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.pageId,
        'tombstone': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467661,
        'reason': "delete"
      }, "undo"), {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467653, "insertTable", [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A392, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467663]),
        'selection': q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467652.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467651.now)
      };
    }
  },
  mh = {
    'id': "pdf.editor.action.updateTableCellStyle",
    'description': "Update local PDF table cell styling.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467679 = Xd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.patch),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467680 = Kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.tableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.cellId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467680) return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.currentStyle ?? qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.tableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.cellId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.pageId ?? kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.tableId),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A395 = [];
      if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467679).length && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A395.push({
        'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.mutationId, "mutation"),
        'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.documentId,
        'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.clientId,
        'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.baseRevision + 1,
        'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.now,
        'kind': 'updateTableCellStyle',
        'source': "user",
        'target': {
          'kind': "object",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467682,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.tableId
        },
        'payload': {
          'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.tableId,
          'cellId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.cellId,
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467682,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467679
        },
        'inverse': {
          'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.inverseMutationId, "mutation"),
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.now,
          'kind': "updateTableCellStyle",
          'source': 'undo',
          'target': {
            'kind': 'object',
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467682,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.tableId
          },
          'payload': {
            'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.tableId,
            'cellId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.cellId,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467682,
            ...Zd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467679)
          }
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.fontColor !== undefined) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467683;
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A395.push(...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467683 = rh.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, {
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467682,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.tableId,
          'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467680.contentStoryId,
          'textStyle': {
            'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.fontColor
          }
        }).batch) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467683.mutations) ?? []));
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.horizontalAlignment !== undefined) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.editState["overlayTextStories"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467680.contentStoryId];
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.blocks["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478;
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A395.push(...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478 = Wm.execute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, {
            'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.id,
            'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.id,
            'patch': {
              'align': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.horizontalAlignment
            },
            'currentBlock': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477
          }).batch) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.mutations) ?? []));
        });
      }
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A395.length ? {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467678.batchId, 'batch'), "editStyle", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A395),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.selection
      } : {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467677.selection
      };
    }
  },
  hh = {
    'id': "pdf.editor.action.resizeTable",
    'description': "Resize a PDF table and its row/column grid.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467693;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.tableId];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467694 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467694.object["type"] !== "table") return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467694.object;
      if (!Gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692)) return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.pageId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467694.pageId,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467697 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.mutationId, 'mutation'), 'updateTableGeometry', {
          'kind': "object",
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467696,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.tableId
        }, {
          'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.tableId,
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467696,
          'bbox': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.bbox],
          'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493 => ({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493
          })),
          'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494 => ({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494
          })),
          'cells': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.cells) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467693.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495 => gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495))
        });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467697.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.inverseMutationId, "mutation"), "updateTableGeometry", {
        'kind': 'object',
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467696,
        'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.tableId
      }, {
        'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.tableId,
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467696,
        'bbox': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467695.bbox],
        'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467695.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496 => ({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496
        })),
        'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467695.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497 => ({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497
        })),
        'cells': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467695.cells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 => gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498))
      }, "undo");
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A397 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.addedStories ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499 => mf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.tableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499)),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A398 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.removedStories ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 => hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.tableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500));
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467692.batchId, 'batch'), 'transformObject', [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467697, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A398]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467691.selection
      };
    }
  },
  gh = {
    'id': "pdf.editor.action.updateTableTheme",
    'description': "Update PDF table theme styling.",
    'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467707 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.editState['overlayObjects'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.tableId];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467707 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467707.object["type"] !== "table" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.styleId && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.options) return {
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.selection
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467708 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467707.object,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467709 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.pageId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467707.pageId,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.styleId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467708.styleId ?? "univerPrimaryPlainGrid",
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467710 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.options ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467708.options ?? mu,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467711 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.currentStyleId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467708.styleId,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467712 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.currentOptions ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467708.options,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB240 = {
          'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.mutationId, 'mutation'),
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.now,
          'kind': "updateObjectStyle",
          'source': 'user',
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467709,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.tableId
          },
          'payload': {
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.tableId,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467709,
            'styleId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116,
            'tableStyleOptions': {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467710
            }
          },
          'inverse': {
            'id': J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.inverseMutationId, "mutation"),
            'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.documentId,
            'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.clientId,
            'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.baseRevision + 1,
            'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.now,
            'kind': "updateObjectStyle",
            'source': 'undo',
            'target': {
              'kind': 'object',
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467709,
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.tableId
            },
            'payload': {
              'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.tableId,
              'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467709,
              'styleId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467711 ?? null,
              'tableStyleOptions': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467712 ? {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467712
              } : null
            }
          }
        };
      return {
        'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467706.batchId, "batch"), "editStyle", [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB240]),
        'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467705.selection
      };
    }
  };
export { ph as pdfAddTableAction, mh as pdfUpdateTableCellStyleAction, hh as pdfResizeTableAction, gh as pdfUpdateTableThemeAction };
