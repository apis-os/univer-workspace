import { HistoryGatewayService, HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, alignComparisonIdentities, arrayComparisonEntries, asRecord, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BlockType, BooleanNumber, ColorKit, DependentOn, Disposable, IAuthzIoService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, TextDecoration, TextX, TextXActionType, Tools, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { ITransformService, RevertRevisionMutation, isTransformMutationsSuccess, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { st } from "./internal-glue.js";
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796 = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793);
  return Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795), new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.anchor["segmentId"])).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 = pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.textRuns ??= [];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.anchor["segmentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322).sort(Rt),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = 0;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.anchor["absoluteOffset"] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.dataStream["length"]),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.endOffset - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.anchor["absoluteOffset"]);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.kind === "delete" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.body) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.dataStream) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793);
        TextX.apply(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323, [{
          t: TextXActionType.RETAIN,
          len: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669
        }, {
          t: TextXActionType.INSERT,
          len: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.dataStream["length"],
          body: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613
        }]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.anchor["absoluteOffset"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.endOffset = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.dataStream["length"], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.dataStream["length"], yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796.delete);
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.dataStream["length"]);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.category !== "table" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.category !== "block-range" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.category !== "custom-range") {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.kind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793);
        ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614);
      }
      yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.kind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.anchor["absoluteOffset"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.endOffset = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670;
    });
  }), wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793), Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793), {
    snapshot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794,
    changes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795
  };
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803.headers) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.body) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803.footers) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.body) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803.body;
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813.dataStream["length"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813.textRuns = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813.textRuns ?? []), {
    st: 0,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814,
    ts: J("delete", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812)
  }], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813;
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820;
  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 <= 0 || TextX.apply(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819, [{
    t: TextXActionType.RETAIN,
    len: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820
  }, {
    t: TextXActionType.RETAIN,
    len: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46,
    body: {
      dataStream: "",
      textRuns: [{
        st: 0,
        ed: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46,
        ts: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822
      }]
    }
  }]);
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827 === "delete" ? {
    bg: {
      rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.delete["fill"]
    },
    st: Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.delete["stroke"])
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827 === "insert" ? {
    bg: {
      rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.insert["fill"]
    },
    ul: Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.insert["stroke"])
  } : {
    bg: {
      rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.update["fill"]
    },
    ol: Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.update["stroke"])
  };
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831) {
  return {
    s: BooleanNumber.TRUE,
    c: BooleanNumber.FALSE,
    cl: {
      rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831
    },
    t: TextDecoration.SINGLE
  };
}
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833 === "delete" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834.delete["fill"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833 === "insert" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834.insert["fill"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834.update["fill"];
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837) {
  return {
    insert: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837.insert["stroke"]),
    delete: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837.delete["stroke"]),
    update: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837.update["stroke"])
  };
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46839) {
  return new ColorKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46839).setAlpha(0.12).toRgbString();
}
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841 === "insert" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.insert : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841 === "delete" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.delete : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.update;
}
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.category !== "text" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.text || !bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.text) || [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.text].forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 === "\x0d" && xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848);
  });
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853) {
  return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853].every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 === "\x0d");
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855.paragraphs ?? [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.startIndex === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856);
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 < 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 = [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 + 1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48]].find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 ? St(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334) : false);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.paragraphStyle = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.paragraphStyle,
    shading: {
      backgroundColor: {
        rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857
      }
    }
  });
}
function St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864);
  return (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 - 1].startIndex + 1 : 0) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864.startIndex;
}
function Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867.paragraphs ?? [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 = 0;
  var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.startIndex + 1;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869 && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.paragraphStyle = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.paragraphStyle,
      shading: {
        backgroundColor: {
          rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870
        }
      }
    }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10;
  });
}
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.category !== "block-range" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.category !== "custom-range") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.anchor["segmentId"])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.body;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 = Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.startIndex, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.dataStream["length"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.endIndex + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.dataStream["length"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 = gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.kind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877);
    ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.kind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.category === "block-range" && Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.anchor["absoluteOffset"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.endOffset = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342;
  });
}
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882) ?? -1;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882.category === "block-range") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882.blockId)) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54]);
  }
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351.rangeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882.rangeId)) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54]);
}
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.category === "block-range" ? "blockRanges" : "customRanges",
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.structuralPath) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.indexOf(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23)) ?? -1;
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 < 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.structuralPath) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 + 1];
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896 : undefined;
}
function Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.category !== "table" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.tableId) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.anchor["segmentId"]);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.tableEdits) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.nextValue === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.previousValue !== undefined && Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.path, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.previousValue);
    }));
  });
}
function Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.indexOf("tableSource"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 + 1] : undefined;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910 != "string") return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 + 2);
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.length === 0 && Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908)) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905.tableSource ??= {};
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905.tableSource[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910 + "-history-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.id : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905.tableSource[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908,
      tableId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12
    }, jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12);
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911) {
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40[0] === "tableRows") {
      kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908);
      return;
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40[0] === "tableColumns" && At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908);
  }
}
function kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920[1];
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922 != "number") return;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.length === 2 && Ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921)) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.tableRows["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921);
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920[3];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.length === 4 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920[2] === "tableCells" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 == "number" && Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922]) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924.tableCells["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921);
  }
}
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932[1];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932.length === 2 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934 == "number" && It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.tableColumns["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933);
}
function jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939.tableId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942.tables) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.tableId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941);
  }));
}
function Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.category !== "table" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.tableId) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.anchor["segmentId"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.tableId],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.tables) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.tableId);
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.anchor["absoluteOffset"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365.startIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.endOffset = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365.endIndex, Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.backgroundColor = {
        rgb: gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.kind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949)
      };
    }));
  });
}
function Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960;
  if (!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.tableRows) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955.length || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.tableColumns) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.length || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.tableCells) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.length)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953.tableRows["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.tableCells);
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996 = new Set();
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.tableRows) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.tableCells["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681));
  }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.tableColumns) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953.tableRows["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.tableCells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683);
    });
  }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.tableCells) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960.forEach(({
    row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379,
    column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380
  }) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.tableCells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382);
  }), [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996];
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970 ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.headers) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970]) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.footers) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970]) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969;
}
function Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977) {
  return Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977) && typeof Reflect.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, "tableId") == "string" && Array.isArray(Reflect.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, "tableRows")) && Array.isArray(Reflect.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, "tableColumns"));
}
function Ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979) {
  return Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979) && Array.isArray(Reflect.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979, "tableCells"));
}
function It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981) {
  return Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981) && Q(Reflect.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981, "size"));
}
function Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983) {
  return Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983);
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985);
}
function Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.anchor["absoluteOffset"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988.anchor["absoluteOffset"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.kind === "delete" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988.kind !== "delete" ? -1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988.kind === "delete" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.kind !== "delete" ? 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.id["localeCompare"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988.id) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.anchor["absoluteOffset"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988.anchor["absoluteOffset"];
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993) {
  return Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993));
}
export { ft as createDocHistoryDisplay };
