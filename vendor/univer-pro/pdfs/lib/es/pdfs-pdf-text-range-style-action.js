import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Bd, G, Hu, J, K, Rd, Td, Vd, kd, zd } from "./internal-core-endo.js";
function Hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466141) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466142 = Vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466140, Bd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466139));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466142.start === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466142.end) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A295 = [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D333 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466139) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D333,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.text['length'],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466142.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466142.end, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A295.push({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181
      }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D333 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27;
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.text["slice"](0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.text["slice"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.text['slice'](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A295.push({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181,
      'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A295.push({
      ...Hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466141),
      'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A295.push({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181,
      'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409
    }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D333 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27;
  }
  return Ud(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A295);
}
function Ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466147) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466147.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182.length - 1];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184 && Wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184.text += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183.text : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182.push({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182;
  }, []);
}
function Wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466150) {
  let {
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466151,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466152
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466149,
    {
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466153,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466154
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466150;
  return JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466152) === JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466154);
}
const ah = {
  'id': "pdf.editor.action.updateTextRangeStyle",
  'description': "Update semantic PDF text styling for a local text range.",
  'execute'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.storyId && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.runId) return {
      'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.selection
    };
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.storyId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.runId) return oh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467543 = zd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.previousRuns ?? Rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.objectId)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467544 = Hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.range, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.textStyle);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467544) return {
      'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.selection
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467545 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.batchId, 'batch'),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467546 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.mutationId, "mutation"),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467547 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.inverseMutationId, "mutation"),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467548 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.pageId ?? kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.objectId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467549 = Vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.range, Bd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467543));
    return {
      'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467545, "editStyle", [{
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467546,
        'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.documentId,
        'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.clientId,
        'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.baseRevision + 1,
        'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.now,
        'kind': "updateTextContent",
        'source': "user",
        'target': {
          'kind': 'object',
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467548,
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.objectId
        },
        'payload': {
          'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.objectId,
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467548,
          'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467549,
          'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467544
        },
        'inverse': {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467547,
          'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.documentId,
          'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.clientId,
          'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.baseRevision + 1,
          'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.now,
          'kind': "updateTextContent",
          'source': "undo",
          'target': {
            'kind': "object",
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467548,
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.objectId
          },
          'payload': {
            'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.objectId,
            'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467548,
            'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467543
          }
        }
      }]),
      'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467548 ? Td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467542.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.now) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467541.selection
    };
  }
};
function oh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559.editState["overlayTextStories"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.storyId],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467562 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.runId],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467563 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561.blocks["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461465 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461465.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.blockId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461465.runIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.runId));
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467562 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467563) return {
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559.selection,
    'warnings': [{
      'code': 'pdf-text-story-run-missing',
      'message': "PDF text story run " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.runId + " was not found in story " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.storyId + '.',
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.pageId,
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.objectId
    }]
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467564 = Vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.range, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467562.text["length"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467565 = Hd([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467562], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.textStyle);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467565) return {
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559.selection
  };
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A385 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467565.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467) => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466,
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467 === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467562.id : J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559, undefined, 'run')
    })),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A386 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A385.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468.id),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467566 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.pageId ?? kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.objectId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467567 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.mutationId, "mutation"), "updateTextContent", {
      'kind': "textRun",
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467566,
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.objectId,
      'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561.id,
      'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467562.id
    }, {
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.objectId,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467566,
      'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561.id,
      'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467563.id,
      'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467562.id,
      'replacedRunIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467562.id],
      'runs': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A385
    });
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467567.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.inverseMutationId, "mutation"), "updateTextContent", {
    'kind': 'textRun',
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467566,
    'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.objectId,
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561.id,
    'runId': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A385[0].id
  }, {
    'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.objectId,
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467566,
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561.id,
    'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467563.id,
    'runId': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A385[0].id,
    'replacedRunIds': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A386,
    'runs': [zd([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467562])[0]]
  }, 'undo');
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D391 = +(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467564.start > 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467568 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A385[Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D391, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A385.length - 1)];
  return {
    'batch': G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.batchId, "batch"), "editStyle", [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467567]),
    'selection': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467566 ? Td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467560.objectId, {
      'start': 0,
      'end': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467568.text['length']
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559.now, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467561.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467568.id) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467559.selection
  };
}
export { ah as pdfUpdateTextRangeStyleAction };
