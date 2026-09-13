import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { Ho, Id, Jc, Jl, Lc, Md, Nf, Od, Ol, Pf, Q, Tf, Wc, Yl, ad, cu, dp, du, ed, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6, fu, gc, gl, iu, jd, kd, kf, lu, nl, of, ou, pc, qc, sf, td, up, uu, vc, vu, yf, zd, zl } from "./internal-core-endo.js";
function mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468202) {
  return [...new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468202.flatMap(({
    parameters: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404
  }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.forName ?? []))].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405 => pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468202) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468202.some(({
    parameters: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781
  }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.refForName === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.forName !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405));
}
function Kl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469157 = false) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469159;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A290 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160 ? cu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.algorithm, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.constraints) : false,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160 !== undefined && af(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.constraints),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A291 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156.nodes).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464097 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464097.parentId === undefined),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469162 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160 !== undefined && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A290 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A291 && !Jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156) && lu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.constraints)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469163 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469158 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.algorithm) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469158.type) === "composite" && mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.constraints),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469164 = Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A292 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469164 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469164.boundsByNodeId["size"] > 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469164.namedBoundsByNodeId['size'] > 0);
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.algorithm) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469159.type) !== "composite" || (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469157 || !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A290 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469163) && Jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.constraints["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464098 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464098.parameters['for'] === 'des' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464098.parameters['forName'] !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464098.type !== "primFontSz" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464098.type !== "secFontSz") || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A292 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469162 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469163) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469165 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.hasReferencedSelfDescendantPresentation === true ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.descendantAnchorNodeIdByNodeId : undefined,
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.descendantPresentationLayoutNames ? new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.descendantPresentationLayoutNames) : undefined,
    {
      boundsByNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469166,
      materialized: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469167
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469162 && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A291 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.presentationNameMapByNodeId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.hasIndexedCompositeDescendantPresentation === true && lu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.constraints)) ? iu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156) : Ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156, true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.itemLayoutNameByNodeId, false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469165 !== undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469165 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.hasReferencedSelfDescendantPresentation === true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.hasNonTextDescendantPresentation === true, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299163);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469166.size !== 0) return Yl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.algorithm, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.constraints, true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469165 !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160.presentationNameMapByNodeId);
}
function ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469181;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469182 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469183 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.viewport;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469182 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469181 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469182.algorithm) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469181.type) !== 'composite' || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469183) return;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299165 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469182.constraints["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099.parameters["forName"] ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099.parameters["forName"]] : [])),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464100 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464101;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464100,
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929929 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.nodes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464101.parentId;
      for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929929.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103);) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929929.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.nodes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104.parentId;
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102;
    },
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5992 = new Map();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.presentationShapeOrder) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469186;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110];
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.name)) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011 = gl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.name),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.dataNodeIds["length"] > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469184(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.dataNodeIds[0]) : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469185 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469182.itemLayoutNameByNodeId) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469185[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012] : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013.match(/(\d+)$/u)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469186[1],
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.replace(/\d*$/u, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015 = var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299165.has(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31) ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 : var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299165.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011 : undefined,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.dataNodeIds["length"] > 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.role === "node" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.role === 'text' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.role === "image");
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015) {
      if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19) return;
      continue;
    }
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5992.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015);
  }
  if (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5992.size === 0) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A386 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469182.itemAlgorithmByNodeId ?? {}),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A296 = [...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5992].some(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464112]) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464113 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464111],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464114 = yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464112);
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464113 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464113.role) === "node" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464114 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464114 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464113.shapeData["shapeType"];
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A387 = [...new Set(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5992.values())],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469187 = Jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.layout['id']),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A388 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469187, ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469187 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469187.variants) ?? [])].flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464119 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464119 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464119.presentationShapes) ?? []),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299166 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A388.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464120 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464120.role === "decoration" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464120.name && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A388.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016.role === "text" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016.name === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464120.name) ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464120.name] : [])),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A297 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A387.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464121 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299166.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464121));
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A386.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464122 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464122.type !== 'sp') || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A386.length === 0 && (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A296 || !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A297)) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A389 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A297 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A388.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464123 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464123.role === "decoration" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464123.name && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299165.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464123.name) ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464123.name] : []) : [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A390 = [...new Set([...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A387, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A389])],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469188 = gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469182.constraints, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469183, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469182.algorithm["parameters"].ar);
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A387.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464124 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469188.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464124))) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A391 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A390.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464125 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469188.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464125) ?? []),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1182 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A391.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464126 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464126.left)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1183 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A391.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464127 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464127.top)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1184 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A391.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464128 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464128.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464128.width)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1185 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A391.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129.height)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1186 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469183.width - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1184 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1182) / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1187 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469183.height - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1185 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1183) / 2;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180,
    'presentationShapes': Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.presentationShapeOrder["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464130 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464130],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464132 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5992.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464130),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464132 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469188.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464132) : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464132 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131.role === "node" ? yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464132) : undefined;
      return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133 ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131,
        'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464132,
        'shapeData': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464134 ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131.shapeData,
          'shapeType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464134
        } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131.shapeData,
        'transform': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131.transform,
          'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133.height,
          'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133.left + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1186,
          'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133.top + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1187,
          'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133.width
        }
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131];
    }))
  };
}
function fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B801(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469273) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469274 = Wc.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469272);
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469274 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469274.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469273))) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469275 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469272.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469273],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469275 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469275.name;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469275 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469276) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469277 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469275.dataNodeIds["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464208 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469272.nodes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464208] !== undefined);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469272.presentationShapeOrder['some'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464209 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469272.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464209];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464209 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469273 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469274.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464209) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210.name) !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210.role === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469275.role && sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210.name, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469276) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210.dataNodeIds['some'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469277.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094));
  })) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469278 = Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469272, {
    'allowIndirectCompositeCandidates': true
  });
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469277.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464213 => of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469278 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469278.namedBoundsByNodeId['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464213), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469276) !== undefined);
}
function Ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610346) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610347 = kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610346);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610347 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610347.layout["constraints"].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782.type === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610347.flowType && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782.parameters['for'] === 'ch' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782.parameters["ptType"] === "sibTrans" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782.parameters['refType'] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610347.flowType && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782.parameters["refForName"] !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610347.itemNames["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782.parameters["refForName"]))) === true;
}
function af(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610675) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610676 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610674.presentationShapeOrder["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465052 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465053 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610674.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465052];
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465053 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465053.dataNodeIds["length"]) === 1 && dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465053.role) ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465053] : [];
  });
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610676.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465056 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465056.role === "image") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610676.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465057 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465057.name !== undefined)) return false;
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59192 = new Map();
  return ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610675).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465058 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465059 = uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465058),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB86 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59192.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465059) ?? {
        'indexes': new Set(),
        'text': /(?:tx|text)/iu.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465058)
      };
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB86.indexes['add'](du(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465058)), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59192.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465059, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB86);
  }), [...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59192.values()].filter(({
    indexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465062,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465063
  }) => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465063 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610674.rootNodeIds["every"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465062.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343 + 1))).length === 1;
}
function Ff(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611085) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611086 = Nf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611086) return;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299225 = new Set(Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611086.descendantAnchorNodeIdByNodeId));
  if (Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084.nodes).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.parentId && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299225.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.id))) return;
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59228 = new Map();
  up(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465345 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611086.descendantAnchorNodeIdByNodeId[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465345];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346 && !var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59228.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59228.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465345);
  });
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299226 = new Set([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084.rootNodeIds, ...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59228.values()]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611087 = Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084.nodes).flatMap(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465350]) => {
      if (!var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299226.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465349)) return [];
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59228.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465349);
      return [[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465349, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465350,
        'childIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465350.childIds["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299226.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473))
      }]];
    }));
  var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59228.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465356) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611087[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611087[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355],
      'parentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465356
    };
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611088 = Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084.presentationShapes).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360]) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.dataNodeIds["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299226.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474)),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A193 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.textBindings) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299226.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.dataNodeId));
    return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360,
      'dataNodeIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465362,
      'textBindings': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A193 != null && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A193.length ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A193 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.textBindings
    }];
  }));
  return kf({
    ...nl({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084,
      'structureDirty': true,
      'nodes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611087,
      'presentationShapes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611088,
      'viewport': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611085
    }, {
      'scaleTemplateToViewport': true
    }),
    'structureDirty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084.structureDirty,
    'nodes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084.nodes,
    'rootNodeIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084.rootNodeIds
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611086.descendantAnchorNodeIdByNodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611086.presentationNames);
}
const Im = new WeakMap(),
  Lm = new WeakMap(),
  Rm = new WeakMap();
function zm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611909;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611910 = Rm.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611910) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611910;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611911 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908.viewport,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611912 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611912 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611912.algorithm,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A422 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913.parameters['linDir']) === "fromT" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913.parameters['linDir']) === 'fromB',
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611914 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A422 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913.parameters["horzAlign"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913.parameters["vertAlign"],
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A423 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611913.type) === "lin" && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611909 = Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611909.hasPartitionedCrossAxisFlow) === true;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611911 || !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A423 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611914 !== "ctr" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611914 !== 'mid') {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB93 = {
      'left': 0,
      'top': 0
    };
    return Rm.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB93), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB93;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611915 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908.presentationShapeOrder["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465668 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465668];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669] : [];
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A620 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611915.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465672 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465672.dataNodeIds["length"] > 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465672.role === 'image' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465672.role === 'node' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465672.role === "text")),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611916 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A620.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A620 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611915;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611916.length === 0) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94 = {
      'left': 0,
      'top': 0
    };
    return Rm.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94;
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1822 = Math.min(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611916.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465673 => var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A422 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465673.transform["left"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465673.transform['top'])),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1823 = Math.max(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611916.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465674 => var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A422 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465674.transform["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465674.transform['width'] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465674.transform['top'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465674.transform["height"])),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1824 = ((var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A422 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611911.width : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611911.height) - (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1823 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1822)) / 2 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1822,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB219 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A422 ? {
      'left': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1824,
      'top': 0
    } : {
      'left': 0,
      'top': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1824
    };
  return Rm.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611908, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB219), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB219;
}
function Bm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611927) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611928 = zm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611926);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611928.left === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611928.top === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611927 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611927,
    'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611927.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611928.left,
    'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611927.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611928.top
  };
}
function Vm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.algorithm;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === "lin" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] === undefined && fu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === "composite" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.hasInlineSelfDescendantPresentation) === true && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.itemLayoutNameByNodeId ?? {}).length === 0) return false;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A426 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.nodes).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465675 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465675.parentId !== undefined),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A427 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === "composite" && Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['ar']) > 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935 = Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932, {
      'allowIndirectCompositeCandidates': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A426 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === "composite" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === 'sp' || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.isCompositeDelegate) === true)
    }),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1828 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['ar']),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299257 = new Set(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611936 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465676 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465677;
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299257.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465676) || (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299257.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465676), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465677 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.nodes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465676]) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465677.childIds["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611936));
    };
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.rootNodeIds['forEach'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611936);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611937 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.presentationShapeOrder['some'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465680 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465681;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A212 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465680]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465681.dataNodeIds) ?? [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A213 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A212.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548;
        return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299257.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547) && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.nodes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548.parentId) !== undefined;
      }),
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929961 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A213.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551 => Km(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551))),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465682 = var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929961.size === 1 ? [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929961][0] : undefined;
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A213.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465682 !== undefined && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A212.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465682);
  });
  if (Pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932)) return false;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A428 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A427 && Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1828) && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1828 > 0 && (!Jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A426) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935 !== undefined || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A427 && Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1828) && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1828 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.rootNodeIds["length"] === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611937;
  if (Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1828) && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1828 > 0 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A428) return false;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A429 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.isHierarchyDelegate) === true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === 'lin' && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['linDir'] === "fromB" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] === "fromL" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] === "fromR" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] === 'fromT'),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611938 = Ho(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.constraints, Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.itemLayoutNameByNodeId ?? {})),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611939 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611938 && vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.constraints, Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.itemLayoutNameByNodeId ?? {})),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A430 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.nodes).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686.parentId !== undefined),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299258 = new Set(Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.itemLayoutNameByNodeId ?? {})),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A431 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === 'snake' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['flowDir'] === 'col' && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A430 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299258.has("firstNode") && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299258.has("lastNode"),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A432 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611939 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A430,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A433 = td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932) || ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932) && !Jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A434 = zd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.rootNodeIds) !== undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611940 = Id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.rootNodeIds),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611941 = Od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611942 = Tf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611943 = Ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611944 = jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611945 = Md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611946 = zl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A435 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === "lin" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] === "fromT" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['linDir'] === "fromB"),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A436 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === "lin" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] === "fromL" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] === "fromR"),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB270 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A435 ? 'w' : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A436 ? 'h' : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611947 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB270 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.constraints["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465687 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465687.type === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB270 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465687.parameters['refType'] === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB270 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465687.parameters["refFor"] === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465687.parameters["refForName"] === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465687.parameters['val'] === undefined),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611948 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611949 = vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611950 = qc[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.layout['id']] ?? qc[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.layout['id'].replace(/#\d+$/, '')],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1829 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611950 && Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611950.nodes["length"], ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611950.variants ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465688 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465688.nodes["length"])),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A437 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1829 === undefined || Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.nodes).length <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1829,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A438 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935.hasPartitionedCrossAxisFlow) === true && new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.rootNodeIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465689 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935.itemLayoutNameByNodeId[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465689])).size > 1;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["fallback"] === '2D' && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A429 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type !== "lin" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['linDir'] !== 'fromT' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] !== 'fromB' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["vertAlign"] !== "mid" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['nodeVertAlign'] !== 't' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["nodeHorzAlign"] !== 'l' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["nodeHorzAlign"] !== 'r') && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611938 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A432 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611941 && (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A438 || !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A437) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type) === "composite" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["horzAlign"] === 'none' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['vertAlign'] === "none") return false;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A439 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.descendantAnchorNodeIdByNodeId) !== undefined,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A622 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.itemConstraintsByNodeId ?? {}).flat(),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A440 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === 'lin' && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] === "fromT" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['linDir'] === "fromB") && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A622.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465690 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465690.type === 'l' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465690.type === 't'),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299259 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.presentationShapeOrder["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465691 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465692;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465691]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465692.dataNodeIds) ?? [];
    })),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A441 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type === "lin" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters['linDir'] === "fromL" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["linDir"] === "fromR") && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["nodeVertAlign"] === 't' && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935.hasCrossAxisFlow) === true && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.nodes).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465695 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299259.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465695)),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A442 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935 !== undefined && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935.namedBoundsByNodeId["values"]()].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465696 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465696.size > 1) && (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932.nodes).length > 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.hasQuarterTurnDescendantPresentation === true) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.parameters["fallback"] === '1D' || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A440 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A622.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697.type["endsWith"]("Off")));
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935 !== undefined || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A428 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611948 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611949 || ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933) && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.isCompositeDelegate) === true || !Jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611932) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611933.constraints["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.type === "sibSp" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.parameters['fact'] !== undefined)) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A429 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A439 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A433 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A431 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A434 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611940 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611947 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611946 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A432 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611943 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611944 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611945 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611942 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611941) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611934.type !== 'lin' || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A430 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935.hasCrossAxisFlow) === true || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611935.hasPartitionedCrossAxisFlow) === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611947 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A441 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A442 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611938 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A432 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611948 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611949 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611943 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611944 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611945 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611946 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611942 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611941);
}
function Hm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611973 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970.viewport;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611973 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611973.width === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611973.height === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611974 = Im.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970);
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611974 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611974.width) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611974.height === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611974.data;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB221 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970,
      'structureDirty': true,
      'viewport': {
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972
      }
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611975 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611976 = Ff(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970, {
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972
    });
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611976) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465699 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611976;
    return Im.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970, {
      'data': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465699,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465699;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611977 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611978 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611977 ? undefined : ql(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB221);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611978) return Im.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970, {
    'data': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611978,
    'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972,
    'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611978;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611979 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611977 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611975 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611975.isCompositeDelegate) === true && ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611975) || jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970) ? undefined : Kl(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970.structureDirty === true);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611979) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465700 = Um(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611979);
    return Im.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970, {
      'data': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465700,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465700;
  }
  if (!Vm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465701 = Um(Wm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970));
    return Im.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970, {
      'data': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465701,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465701;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611980 = Wm(nl(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB221, {
    'scaleTemplateToViewport': true
  }));
  return Im.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611970, {
    'data': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611980,
    'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611972,
    'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611971
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611980;
}
function Um(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611993;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611994 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611995 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992.viewport;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611995 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611994 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611993 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611994.algorithm) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611993.type) !== "composite" || !(Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611994.algorithm["parameters"].ar) > 0) || Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992.nodes).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465702 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465702.parentId !== undefined)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992;
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59252 = new Map();
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611994.constraints["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465704 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.parameters["forName"],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D778 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.parameters["val"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465704 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.type !== 'h' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.type !== 'w' || !Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D778) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D778 > 1.000001) return;
    let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929963 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59252.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465704) ?? new Set();
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929963.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.type), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59252.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465704, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929963);
  }), [...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59252.values()].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465707 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465707.size === 2)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611996 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992.presentationShapeOrder["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465708 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465708];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709.dataNodeIds['some'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992.nodes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552] !== undefined) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709.role !== "text" ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709] : [];
  });
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611996.length === 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1832 = Math.min(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611996.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465712 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465712.transform["left"])),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1833 = Math.min(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611996.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465713 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465713.transform["top"])),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1834 = Math.max(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611996.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465714 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465714.transform["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465714.transform["width"])),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1835 = Math.max(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611996.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465715 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465715.transform["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465715.transform["height"])),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1836 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611995.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611995.height, 1) * 0.0001,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A460 = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1832) <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1836 && Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1834 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611995.width) <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1836,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A461 = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1833) <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1836 && Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1835 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611995.height) <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1836;
  if (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A460 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A461) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1837 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A461 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611995.width - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1834 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1832) / 2 : 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1838 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A460 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611995.height - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1835 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1833) / 2 : 0;
  return Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1837) < 0.000001 && Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1838) < 0.000001 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992,
    'presentationShapes': Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992.presentationShapeOrder["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465716 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611992.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465716];
      return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465716, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717 && {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717,
        'transform': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717.transform,
          'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717.transform["left"] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1837,
          'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717.transform['top'] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1838
        }
      }];
    }))
  };
}
function Wm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612003;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612004 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612005 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002.viewport;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612004 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612005 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612003 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612004.algorithm) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612003.type) !== "lin" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612004.algorithm["parameters"].fallback !== '2D') return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299263 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612004.constraints["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465720 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465721 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465720.parameters["forName"];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465720.type === 'h' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465720.parameters["for"] === "des" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465720.parameters["refType"] === 'w' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465721 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612004.constraints["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.type === 'w' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.parameters['for'] === "des" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.parameters["forName"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465721 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.parameters['refType'] === 'h' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.parameters['refFor'] === "des" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.parameters["refForName"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465721) ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465721] : [];
  }));
  if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299263.size === 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A624 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002.presentationShapeOrder['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465724 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465724]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465725 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465725.role === "node" && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299263.has(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465725.name) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465726.split(/\s/u, 1)[0]) ?? '');
    }),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1846 = Math.min(1, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A624.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729.transform['width'] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729.transform['height'] > 0 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729.transform["height"] / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729.transform["width"]] : []));
  if (!Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1846) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1846 >= 0.999999) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1847 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612005.width / 2;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002,
    'presentationShapes': Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612002.presentationShapes).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731,
      'transform': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731.transform,
        'left': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1847 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731.transform["left"] - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1847) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1846,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731.transform["width"] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1846
      }
    }]))
  };
}
function Gm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612010, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612011) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612012;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612013 = Lm.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612011);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612013 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612012 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612010.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612013]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612012.transform) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612011) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612013;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612014 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612010.presentationShapeOrder["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465733;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465733 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612010.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465733.transform) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612011;
  });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612014 && Lm.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612011, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612014), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612014;
}
function Km(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612020, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612021) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612022;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612023 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612021,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612024 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612022 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612020.nodes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612023]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612022.parentId,
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299265 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612023]);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612024 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299265.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612024);) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612025;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612023 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612024, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299265.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612024), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612024 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612025 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612020.nodes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612023]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612025.parentId;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612023;
}
function qm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612034) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612032.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612034];
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035.name)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612036 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035.name,
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299267 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035.dataNodeIds),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299268 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035.dataNodeIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465736 => Km(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465736))),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612037 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465737 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612033.presentationShapeOrder["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612033.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554];
      return !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.name) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.role !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465737 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465737 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035.role && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.textSource !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035.textSource || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.name["replace"](/\d+$/u, '') !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612036.replace(/\d+$/u, '') ? [] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555];
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612038 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612037(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035.role),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612039 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612038.length > 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612035.role !== 'text' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612038 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612037("node"),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A626 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612039.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465738 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465738.dataNodeIds["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299267.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558)));
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A626.length === 1) return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A626[0].transform;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A627 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612039.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465739 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465739.dataNodeIds["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299268.has(Km(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559))));
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A627.length === 1 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A627[0].transform : undefined;
}
function Jm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612048, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612049, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612050, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612051) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612049 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612050 ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612049 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612051 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612048 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612048 / 2;
}
function Ym(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612057, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612058, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612059) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612060;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612061 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612056.viewport;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612061) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612057;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1850 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612058 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612061.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612059 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612061.height),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612062 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612060 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612056)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612060.algorithm,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612063 = zm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612056),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1851 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612058 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612061.width * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1850) / 2,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612064 = Jm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612059 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612061.height * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612062 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612062.parameters["vertAlign"], 't', 'b');
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612057,
    'left': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1851 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612057.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612063.left) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1850,
    'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612064 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612057.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612063.top) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1850,
    'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612057.width * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1850,
    'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612057.height * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1850
  };
}
function Xm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612075, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612077) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612078 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612074.viewport;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612078 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612078.width <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612078.height <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612076 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612077 <= 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612075;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612079 = Gm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612075);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612079 && fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B801(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612079)) return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612075,
    'height': 0,
    'width': 0
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080 = Hm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612077);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612074) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612081;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465740 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612079 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612081 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612079]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612081.transform);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465740) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612082;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612082 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080.viewport) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612082.width) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612076 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080.viewport["height"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612077 ? Bm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465740) : Ym(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465740, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612077);
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612079 && fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B801(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612079)) return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612075,
      'height': 0,
      'width': 0
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465741 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612079 ? qm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612079) : undefined;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465741) return Bm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465741);
  }
  return Ym(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612075, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612077);
}
export { Xm as resolveSmartArtPresentationTransform };
