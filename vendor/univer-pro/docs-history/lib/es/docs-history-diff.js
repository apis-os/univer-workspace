import { HistoryGatewayService, HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, alignComparisonIdentities, arrayComparisonEntries, asRecord, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BlockType, BooleanNumber, ColorKit, DependentOn, Disposable, IAuthzIoService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, TextDecoration, TextX, TextXActionType, Tools, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { ITransformService, RevertRevisionMutation, isTransformMutationsSuccess, parseProtocolChangeset } from "@univerjs-pro/collaboration";
function Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [];
  return T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, [], (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139) => {
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.et === "TextX" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.et === "text-x") && ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.e) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.push({
      actions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.e,
      path: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139
    });
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14;
}
function Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = [];
  return T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, [], (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.et !== "TextX" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.et !== "text-x" && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.oi !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.od !== undefined) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.push({
      path: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143,
      previousValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.od,
      nextValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.oi
    }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.li !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.ld !== undefined) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.push({
      path: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143,
      previousValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.ld,
      nextValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.li
    }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.i !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.r !== undefined) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.push({
      path: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143,
      previousValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.r,
      nextValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.i
    }));
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16;
}
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433) {
  if (!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.length === 0) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 => {
    Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) ? T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433) : De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) : Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18);
  });
}
function De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 == "string" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 == "number";
}
function Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439);
}
function ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 || !("t" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148) || !("len" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148) ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.t === TextXActionType.INSERT || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.t === TextXActionType.DELETE || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.t === TextXActionType.RETAIN) && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.len == "number");
}
function Ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20 = [],
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = 0;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.forEach(({
    mutation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149,
    memberId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150,
    revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151
  }) => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.id === RevertRevisionMutation.id) {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.params["revision"] : 0;
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.push({
        id: A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20++),
        kind: "restore",
        category: "metadata",
        anchor: k("", 0),
        endOffset: 0,
        memberId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150,
        revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151,
        restoredRevision: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D
      });
      return;
    }
    if (!Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.length,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.params;
    Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.actions).forEach(({
      actions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630
    }) => {
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.segmentId ?? "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20);
    }), Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.actions).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.segmentId ?? "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 += 1);
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.splice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.push(...Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154));
  }), {
    changes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.sort(j),
    hasRevisionBarrier: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A
  };
}
function Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.body && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 = Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.len, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.t !== TextXActionType.DELETE && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.len);
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455;
}
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.push({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166,
        id: A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476++),
        memberId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468,
        revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469
      });
    };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.dataStream && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477({
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464,
    category: "text",
    anchor: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466),
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.dataStream,
    body: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464 === "modify") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.textRuns) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477({
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464,
      category: "style",
      anchor: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.st),
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.ed
    }));
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.paragraphs) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477({
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464,
    category: "paragraph",
    anchor: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.startIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.paragraphId),
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.startIndex + 1
  })), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.sectionBreaks) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477({
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464,
    category: "section",
    anchor: {
      ...k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.startIndex),
      sectionId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.sectionId
    },
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.startIndex + 1
  })), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.customRanges) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477({
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464,
    category: "custom-range",
    anchor: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.startIndex),
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.endIndex + 1,
    rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.rangeId,
    rangeType: Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.rangeType)
  })), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.blockRanges) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477({
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464,
    category: "block-range",
    anchor: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.startIndex),
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.endIndex + 1,
    blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.blockId,
    blockType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.blockType
  })), Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476;
}
function Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 = Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.path);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.nextValue ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.previousValue,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502 = Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.path, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 = Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, "startIndex") ?? Ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495) ?? 0,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 = Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, "endIndex") ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503 = Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 = He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.path, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 === "table" ? Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.path) : {};
  return {
    id: A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499),
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503,
    category: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500,
    anchor: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24),
    endOffset: Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 + 1, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13),
    memberId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497,
    revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498,
    rangeId: O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, "rangeId"),
    blockId: O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, "blockId"),
    structuralPath: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.path],
    tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504,
    tableRows: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.row == null ? undefined : [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.row],
    tableColumns: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.column == null ? undefined : [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.column],
    tableCells: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.cell,
    tableEdits: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 === "table" ? [We(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495)] : undefined,
    drawingId: qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.path, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501),
    columnGroupId: O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, "columnGroupId")
  };
}
function Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 = "modify";
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.previousValue === undefined ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 = "insert" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.nextValue === undefined && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 = "delete"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 !== "table" || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 === "modify" || Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.path) ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 : "modify";
}
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.indexOf("tableSource");
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 < 0) return false;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.length === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 + 2 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 + 1] == "string") return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.length - 2];
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.length - 1] == "number" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 === "tableRows" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 === "tableColumns" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 === "tableCells");
}
function Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.category !== "table" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.tableId) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172);
      return;
    }
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.tableId) ?? [];
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.tableId, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2);
  }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.push(Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174))), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.sort(j);
}
function Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 = ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 === "modify" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175.kind === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177;
      return !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.tableEdits) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.length);
    }) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525[0];
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525[0],
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526,
    anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527.anchor,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527.endOffset,
    body: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527.body,
    tableRows: E(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.tableRows ?? [])),
    tableColumns: E(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.tableColumns ?? [])),
    tableCells: Be(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.tableCells ?? [])),
    tableEdits: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.tableEdits ?? [])
  };
}
function ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.kind === "insert"),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.kind === "delete");
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 ? "insert" : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? "delete" : "modify";
}
function E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 = [...new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533)].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 : undefined;
}
function Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592 = new Map();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.row + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538 = [...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.values()].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.row - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.row || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.column - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.column);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538 : undefined;
}
function Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("tableSource") ? "table" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("blockRanges") ? "block-range" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("customRanges") ? "custom-range" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("tables") ? "table" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("drawings") ? "drawing" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("customBlocks") ? "custom-block" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("columnGroups") ? "column-group" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("paragraphs") ? "paragraph" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("sectionBreaks") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("headers") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.includes("footers") ? "section" : null;
}
function He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.indexOf("tableSource"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 + 1] : undefined;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545 : O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, "tableId");
}
function Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549.indexOf("tableRows"),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549.indexOf("tableColumns"),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549.indexOf("tableCells"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32);
  return {
    row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 == null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 : undefined,
    column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551,
    cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 == null ? undefined : [{
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552
    }]
  };
}
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 + 1] : undefined;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 : undefined;
}
function We(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563) {
  return {
    path: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563.path],
    previousValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563.previousValue,
    nextValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563.nextValue
  };
}
function Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565[1];
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 === "headers" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 === "footers") && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566;
}
function Ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573.path[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573.path["length"] - 1];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 === "startIndex" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 === "endIndex") return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573.nextValue == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573.nextValue : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573.previousValue == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573.previousValue : undefined;
}
function qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577.indexOf("drawings"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 + 1] : undefined;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 : O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, "drawingId");
}
function Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583 != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 = Reflect.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584);
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 : undefined;
}
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 = Reflect.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590);
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 : undefined;
}
function Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.id === RevertRevisionMutation.id && "revision" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.params && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.params["revision"] == "number";
}
function Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.id === RichTextEditingMutation.id && "unitId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.params && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.params["unitId"] == "string" && "actions" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.params && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.params["actions"]);
}
function Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606;
  (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599.tables) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603({
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600,
    category: "table",
    anchor: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.startIndex),
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.endIndex,
    tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.tableId
  })), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599.customBlocks) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603({
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600,
    category: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.blockType === BlockType.DRAWING ? "drawing" : "custom-block",
    anchor: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.startIndex),
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.startIndex + 1,
    blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.blockId,
    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.blockType === BlockType.DRAWING ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.blockId : undefined
  })), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599.columnGroups) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603({
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600,
    category: "column-group",
    anchor: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.startIndex),
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.endIndex + 1,
    columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.columnGroupId
  }));
}
function Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.t) {
    case TextXActionType.INSERT:
      return "insert";
    case TextXActionType.DELETE:
      return "delete";
    case TextXActionType.RETAIN:
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.body ? "modify" : null;
    default:
      return null;
  }
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619) {
  return {
    segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617,
    paragraphId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619,
    offsetInParagraph: 0,
    absoluteOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618,
    affinity: "forward"
  };
}
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636;
}
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.anchor["segmentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.anchor["segmentId"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.anchor["absoluteOffset"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.anchor["absoluteOffset"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.id["localeCompare"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.id) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.anchor["absoluteOffset"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.anchor["absoluteOffset"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.anchor["segmentId"].localeCompare(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.anchor["segmentId"]);
}
let M = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201) {
    this._gateway = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, this._transformService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201;
  }
  async compare(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 = await this._gateway["fetchChangesets"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.changesets["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = parseProtocolChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.mutations["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.id !== RichTextEditingMutation.id && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.id !== RevertRevisionMutation.id ? [] : [{
          mutation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610,
          memberId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.memberID || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.userID || "unknownUser",
          revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.revision
        }]);
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = Ae(this._transformAfterLastRevisionBarrier(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207));
    return {
      comparison: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205,
      members: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.members,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208
    };
  }
  _transformAfterLastRevisionBarrier(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = -1;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.mutation["id"] === RevertRevisionMutation.id && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642);
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8] : undefined,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 + 1),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.flatMap((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) => this._transformEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 + 1)));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5] : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5;
  }
  _transformEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.mutation];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = this._transformService["transformMutations"](var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.mutation]);
      if (!isTransformMutationsSuccess(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648)) throw Error("[DocsHistoryDiffService]:\x20Failed\x20to\x20transform\x20document\x20history\x20mutations.");
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.m1Prime;
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218,
      mutation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651
    }));
  }
};
export { M as DocsHistoryDiffService };
