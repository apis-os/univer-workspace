import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { Qc } from "./engine-shape-smart-art-data-from-layout.js";
import { dp, ip, up } from "./internal-core-endo.js";
function fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468512 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468513 = Qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468512.category);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468513) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468510;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468514 = up(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468510),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468515 = up(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468513),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5956 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468515.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463674) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468514[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463674]])),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5957 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468512.preservePresentationStyles === false ? new Map() : new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468510.presentationShapeOrder["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463675 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468510.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463675]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463676 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463676 !== undefined).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463677 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463677.role, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463677])),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468516 = el(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468512),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB167 = {},
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A326 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468513.presentationShapeOrder) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468517;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468513.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.dataNodeIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5956.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 !== undefined),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468517 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.textBindings) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468517.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5956.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.dataNodeId);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 === undefined ? [] : [{
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
          'dataNodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295
        }];
      });
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.dataNodeIds["length"] > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.length === 0 && dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.role)) continue;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 = 'layout-' + (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A326.length + 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.role === "image" ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468516.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298)).find(Boolean) : var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5957.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.role);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A326.push(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB167[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893,
      'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30,
      'dataNodeIds': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28,
      'textBindings': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29,
      'transform': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.transform
      },
      'shapeData': {
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.shapeData) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.shapeData),
        'shapeType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.shapeData["shapeType"],
        'shapeText': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.shapeData["shapeText"]
      }
    };
  }
  return fp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468515.length, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A326, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB167), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468510,
    'layout': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468513.layout
    },
    'viewport': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468513.viewport ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468513.viewport
    } : undefined,
    'structureDirty': undefined,
    'definitions': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468513.definitions,
    'topology': undefined,
    'presentationShapeOrder': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A326,
    'presentationShapes': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB167
  };
}
function el(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527.preservePresentationStyles === false ? new Map() : new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468526.presentationShapeOrder['flatMap'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463679 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463680;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468526.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463679];
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681.role) === 'image' && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681.shapeData["fill"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463680.fillImageSource ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681.dataNodeIds['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681]) : [];
  }));
}
function fp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611285) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611283; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282.length; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513++) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513 - 1],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611285[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.dataNodeIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522) && dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.role)),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51.length > 0 ? Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518.transform['top'])) : 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D298 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51.length > 0 ? Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.transform['top'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.transform['height'])) : 40;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611286;
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = "layout-" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284.length + 1);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284.push(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611285[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5] = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520,
        'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5,
        'dataNodeIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.dataNodeIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695),
        'textBindings': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611286 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.textBindings) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611286.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 => ({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696,
          'dataNodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.dataNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.dataNodeId
        })),
        'transform': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.transform,
          'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.transform["top"] + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D298 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297) * 1.1
        },
        'shapeData': pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.shapeData, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5)
      };
    }
  }
}
function pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611293) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611296 = ip(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611292),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611296.shapeText;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611297 || !("dataModel" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611297) || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611297.dataModel) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294.doc)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611296;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611297.dataModel["doc"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611298.id = "smart-art-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611293, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611298.body) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.paragraphs && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611298.body["paragraphs"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611298.body["paragraphs"].map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465515) => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465514,
    'paragraphId': "smart-art-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611293 + '-paragraph-' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465515 + 1)
  }))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611296;
}
function Xp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611603) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611602.layout['id'] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611603.id && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611602.layout["category"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611603.category ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611602 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611602,
    'layout': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611603
    }
  };
}
export { fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F as applySmartArtLayout, Xp as setSmartArtLayout };
