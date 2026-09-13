import { HistoryMutationService as var_core_value_sig24B9, HistoryUnitAdapterRegistryService as var_core_value_sigE627, UnitComparisonAdapterRegistryService as var_core_value_sigEF3E, UnitComparisonEntityType as var_core_value_sig273D, UniverEditHistoryPlugin as var_core_value_sig9A0D, asRecord as var_core_value_sigA319, buildScopedUnitComparison as var_core_value_sig2D58, buildSemanticComparisonItems as var_core_value_sig223F, recordComparisonEntries as var_core_value_sigD749, resourceComparisonEntries as var_core_value_sigCFFA, withoutComparisonKeys as var_core_value_sig58C1 } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin as var_core_value_sig5090 } from "@univerjs-pro/license";
import { AddSlideElementMutation as var_core_value_sigC368, AddSlidePageMutation as var_core_value_sigAD56, InsertDrawingObjectMutation as var_core_value_sigDB4A, RemoveSlideElementMutation as var_core_value_sig6418, RemoveSlidePageMutation as var_core_value_sig1896, SetActiveSlideCommand as var_core_value_sig0285, UniverSlidesPlugin as var_core_value_sig777D } from "@univerjs-pro/slides";
import { DependentOn as var_core_value_sig3F4C, Disposable as var_core_value_sigD65A, IAuthzIoService as var_core_value_sig5A13, ICommandService as var_core_value_sigF593, IConfigService as var_core_value_sig3607, IUniverInstanceService as var_core_value_sigB512, Inject as var_core_value_sigF2E6, Injector as var_core_value_sig34C8, Plugin as var_core_value_sigB744, UniverInstanceType as var_core_value_sigEAE2, merge as var_core_value_sigE68A, registerDependencies as var_core_value_sig3E68 } from "@univerjs/core";
import { UnitAction as var_core_value_sigF4C5, UnitObject as var_core_value_sig5410 } from "@univerjs/protocol";
var O = "@univerjs-pro/slides-history",
  k = "1.0.0-insiders.20260907-70fc579";
const A = {};
function j(var_core_value_sig861B, var_core_value_sig5237) {
  return function (var_core_value_sig480E, var_core_value_sig26DB) {
    var_core_value_sig5237(var_core_value_sig480E, var_core_value_sig26DB, var_core_value_sig861B);
  };
}
function M(var_core_value_sigBB00, var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259) {
  var var_core_value_sig9C9F = ox59e17e,
    var_core_value_sigFDEA = arguments[var_core_value_sig9C9F(126)],
    var_core_value_sig86D0 = var_core_value_sigFDEA < 3 ? var_core_value_sig7E54 : var_core_value_sigC259 === null ? var_core_value_sigC259 = Object[var_core_value_sig9C9F(123)](var_core_value_sig7E54, var_core_value_sig9A8D) : var_core_value_sigC259,
    var_core_value_sig4CD2;
  if (typeof Reflect == var_core_value_sig9C9F(140) && typeof Reflect[var_core_value_sig9C9F(184)] == var_core_value_sig9C9F(212)) var_core_value_sig86D0 = Reflect[var_core_value_sig9C9F(184)](var_core_value_sigBB00, var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259);else {
    for (var var_core_value_sig48CA = var_core_value_sigBB00[var_core_value_sig9C9F(126)] - 1; var_core_value_sig48CA >= 0; var_core_value_sig48CA--) (var_core_value_sig4CD2 = var_core_value_sigBB00[var_core_value_sig48CA]) && (var_core_value_sig86D0 = (var_core_value_sigFDEA < 3 ? var_core_value_sig4CD2(var_core_value_sig86D0) : var_core_value_sigFDEA > 3 ? var_core_value_sig4CD2(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sig86D0) : var_core_value_sig4CD2(var_core_value_sig7E54, var_core_value_sig9A8D)) || var_core_value_sig86D0);
  }
  return var_core_value_sigFDEA > 3 && var_core_value_sig86D0 && Object[var_core_value_sig9C9F(206)](var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sig86D0), var_core_value_sig86D0;
}
let N = class extends var_core_value_sigD65A {
  constructor(var_core_value_sigF0F9, var_core_value_sig1A0F, var_core_value_sigFBA4, var_core_value_sig4383) {
    super(), this._authzIoService = var_core_value_sig1A0F, this._commandService = var_core_value_sigFBA4, this._univerInstanceService = var_core_value_sig4383, this.disposeWithMe(var_core_value_sigF0F9.register({
      type: var_core_value_sigEAE2.UNIVER_SLIDE,
      canView: var_core_value_sig7524 => this._hasPermission(var_core_value_sig7524, var_core_value_sigF4C5.ViewHistory),
      canRevert: var_core_value_sig2AD8 => !!this._getSlide(var_core_value_sig2AD8) && this._hasPermission(var_core_value_sig2AD8, var_core_value_sigF4C5.RecoverHistory),
      captureLocation: var_core_value_sig2AD0 => {
        var var_core_value_sig3EEE = ox31fcaa,
          var_core_value_sigBC46;
        return {
          slideId: (var_core_value_sigBC46 = this[var_core_value_sig3EEE(174)](var_core_value_sig2AD0)) == null || (var_core_value_sigBC46 = var_core_value_sigBC46[var_core_value_sig3EEE(162)][var_core_value_sig3EEE(205)]()) == null ? undefined : var_core_value_sigBC46[var_core_value_sig3EEE(129)]()
        };
      },
      restoreLocation: (var_core_value_sig3D7D, var_core_value_sig27E5) => this._restoreLocation(var_core_value_sig3D7D, P(var_core_value_sig27E5) ? var_core_value_sig27E5 : undefined)
    }));
  }
  async _restoreLocation(var_core_value_sig186C, var_core_value_sigD955) {
    var var_core_value_sig48BD = ox59e17e,
      var_core_value_sig429F;
    !(var_core_value_sigD955 != null && var_core_value_sigD955[var_core_value_sig48BD(167)]) || !((var_core_value_sig429F = this[var_core_value_sig48BD(174)](var_core_value_sig186C)) != null && var_core_value_sig429F[var_core_value_sig48BD(162)][var_core_value_sig48BD(181)](var_core_value_sigD955.slideId)) || (await this[var_core_value_sig48BD(157)].executeCommand(var_core_value_sig0285.id, {
      unitId: var_core_value_sig186C,
      subUnitId: var_core_value_sigD955[var_core_value_sig48BD(167)]
    }));
  }
  _getSlide(var_core_value_sigF62A) {
    return this._univerInstanceService["getUnit"](var_core_value_sigF62A, var_core_value_sigEAE2.UNIVER_SLIDE) ?? null;
  }
  async _hasPermission(var_core_value_sig8178, var_core_value_sigE9ED) {
    return (await this._authzIoService["allowed"]({
      unitID: var_core_value_sig8178,
      objectID: var_core_value_sig8178,
      objectType: var_core_value_sig5410.Slide,
      actions: [var_core_value_sigE9ED]
    })).some(var_core_value_sig8061 => var_core_value_sig8061.action === var_core_value_sigE9ED && var_core_value_sig8061.allowed);
  }
};
N = M([j(0, var_core_value_sigF2E6(var_core_value_sigE627)), j(1, var_core_value_sig5A13), j(2, var_core_value_sigF593), j(3, var_core_value_sigB512)], N);
function P(var_core_value_sig50AF) {
  return typeof var_core_value_sig50AF == "object" && !!var_core_value_sig50AF && (!("slideId" in var_core_value_sig50AF) || typeof var_core_value_sig50AF.slideId == "string");
}
function F(var_core_value_sigA942) {
  return var_core_value_sigA942.flatMap((var_core_value_sigB577, var_core_value_sig9572) => L(var_core_value_sigB577.mutation["params"]).map((var_core_value_sig4D4C, var_core_value_sigC9E0) => ({
    id: var_core_value_sigB577.revision + ":" + var_core_value_sig9572 + ":" + var_core_value_sigC9E0,
    kind: I(var_core_value_sigB577.mutation["id"]),
    label: var_core_value_sig4D4C.drawingId ? "slide:element" : "slide:page",
    memberId: var_core_value_sigB577.memberId,
    slideId: var_core_value_sig4D4C.slideId,
    drawingId: var_core_value_sig4D4C.drawingId
  })));
}
function I(var_core_value_sigA621) {
  return var_core_value_sigA621 === var_core_value_sigC368.id || var_core_value_sigA621 === var_core_value_sigAD56.id || var_core_value_sigA621 === var_core_value_sigDB4A.id ? "insert" : var_core_value_sigA621 === var_core_value_sig6418.id || var_core_value_sigA621 === var_core_value_sig1896.id ? "delete" : "update";
}
function L(var_core_value_sigBBFF) {
  if (!H(var_core_value_sigBBFF)) return [];
  let var_core_value_sig8889 = R(var_core_value_sigBBFF, "subUnitId") ?? R(var_core_value_sigBBFF, "slideId") ?? R(var_core_value_sigBBFF, "pageId") ?? z(var_core_value_sigBBFF, "slide");
  if (!var_core_value_sig8889) return [];
  let var_core_value_sig32F8 = [R(var_core_value_sigBBFF, "drawingId"), z(var_core_value_sigBBFF, "element"), ...B(var_core_value_sigBBFF, "drawings"), ...B(var_core_value_sigBBFF, "objects"), ...V(var_core_value_sigBBFF, "drawingIds")].filter(var_core_value_sigD873 => !!var_core_value_sigD873),
    var_core_value_sig5B67 = [...new Set(var_core_value_sig32F8)];
  return var_core_value_sig5B67.length ? var_core_value_sig5B67.map(var_core_value_sigA12B => ({
    slideId: var_core_value_sig8889,
    drawingId: var_core_value_sigA12B
  })) : [{
    slideId: var_core_value_sig8889
  }];
}
function R(var_core_value_sig1758, var_core_value_sig4805) {
  return typeof var_core_value_sig1758[var_core_value_sig4805] == "string" ? var_core_value_sig1758[var_core_value_sig4805] : undefined;
}
function z(var_core_value_sigE67E, var_core_value_sig2902) {
  if (H(var_core_value_sigE67E[var_core_value_sig2902])) return R(var_core_value_sigE67E[var_core_value_sig2902], "id") ?? R(var_core_value_sigE67E[var_core_value_sig2902], "drawingId");
}
function B(var_core_value_sig9989, var_core_value_sig698E) {
  return Array.isArray(var_core_value_sig9989[var_core_value_sig698E]) ? var_core_value_sig9989[var_core_value_sig698E].flatMap(var_core_value_sigF230 => H(var_core_value_sigF230) ? [R(var_core_value_sigF230, "id") ?? R(var_core_value_sigF230, "drawingId")].filter(var_core_value_sig76BA => !!var_core_value_sig76BA) : []) : [];
}
function V(var_core_value_sig2809, var_core_value_sig2DAB) {
  return Array.isArray(var_core_value_sig2809[var_core_value_sig2DAB]) ? var_core_value_sig2809[var_core_value_sig2DAB].filter(var_core_value_sig09B8 => typeof var_core_value_sig09B8 == "string") : [];
}
function H(var_core_value_sig877E) {
  return typeof var_core_value_sig877E == "object" && !!var_core_value_sig877E;
}
let U = class {
  constructor(var_core_value_sig6F91) {
    this._mutationService = var_core_value_sig6F91;
  }
  async compare(var_core_value_sigF9C7, var_core_value_sig8895) {
    return F(await this._mutationService["load"](var_core_value_sigF9C7, var_core_value_sig8895));
  }
};
U = M([j(0, var_core_value_sigF2E6(var_core_value_sig24B9))], U);
function W(var_core_value_sig20C8) {
  "@babel/helpers - typeof";

  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigC80B) {
    return typeof var_core_value_sigC80B;
  } : function (var_core_value_sig284F) {
    return var_core_value_sig284F && typeof Symbol == "function" && var_core_value_sig284F.constructor === Symbol && var_core_value_sig284F !== Symbol.prototype ? "symbol" : typeof var_core_value_sig284F;
  }, W(var_core_value_sig20C8);
}
function G(var_core_value_sigE9A7, var_core_value_sigBECE) {
  if (W(var_core_value_sigE9A7) != "object" || !var_core_value_sigE9A7) return var_core_value_sigE9A7;
  var var_core_value_sig1B22 = var_core_value_sigE9A7[Symbol.toPrimitive];
  if (var_core_value_sig1B22 !== undefined) {
    var var_core_value_sig7F72 = var_core_value_sig1B22.call(var_core_value_sigE9A7, var_core_value_sigBECE || "default");
    if (W(var_core_value_sig7F72) != "object") return var_core_value_sig7F72;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigBECE === "string" ? String : Number)(var_core_value_sigE9A7);
}
function K(var_core_value_sig7B2A) {
  var var_core_value_sig06CD = ox59e17e,
    var_core_value_sigA5F1 = G(var_core_value_sig7B2A, var_core_value_sig06CD(171));
  return W(var_core_value_sigA5F1) == var_core_value_sig06CD(191) ? var_core_value_sigA5F1 : var_core_value_sigA5F1 + "";
}
function q(var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig4F59) {
  return (var_core_value_sig07E9 = K(var_core_value_sig07E9)) in var_core_value_sig97A2 ? Object.defineProperty(var_core_value_sig97A2, var_core_value_sig07E9, {
    value: var_core_value_sig4F59,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig97A2[var_core_value_sig07E9] = var_core_value_sig4F59, var_core_value_sig97A2;
}
const ae = [var_core_value_sig273D.UNIT, var_core_value_sig273D.SLIDE, var_core_value_sig273D.SLIDE_ELEMENT, var_core_value_sig273D.SLIDE_TRANSITION, var_core_value_sig273D.SLIDE_TRANSITION_REFERENCE, var_core_value_sig273D.SLIDE_MASTER, var_core_value_sig273D.SLIDE_LAYOUT, var_core_value_sig273D.SLIDE_THEME, var_core_value_sig273D.SLIDE_CHART, var_core_value_sig273D.SLIDE_CHART_DATA, var_core_value_sig273D.SLIDE_TABLE],
  J = var_core_value_sig58C1("slides", "slideOrder", "resources", "transitionRecords", "slideTransitionRefs", "masterPages", "layoutPages", "theme", "activeSlideId", "zoomRatio", "rev");
var Y = class {
  constructor() {
    q(this, "type", var_core_value_sigEAE2.UNIVER_SLIDE);
  }
  compare(var_core_value_sigE154) {
    let var_core_value_sig4632 = var_core_value_sigA319(var_core_value_sigE154.leftData),
      var_core_value_sig12F2 = var_core_value_sigA319(var_core_value_sigE154.rightData),
      var_core_value_sig2259 = var_core_value_sigA319(var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.slides),
      var_core_value_sig9E2F = var_core_value_sigA319(var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.slides),
      var_core_value_sigD082 = new Set([...Object.keys(var_core_value_sig2259 ?? {}), ...Object.keys(var_core_value_sig9E2F ?? {})]),
      var_core_value_sigDBB7 = var_core_value_sig58C1("elements", "elementOrder"),
      var_core_value_sigD0A8 = var_core_value_sigD749(var_core_value_sig2259, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.slideOrder, var_core_value_sigDBB7),
      var_core_value_sigF4B9 = var_core_value_sigD749(var_core_value_sig9E2F, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.slideOrder, var_core_value_sigDBB7),
      var_core_value_sig5CEE = [...Z(var_core_value_sig273D.UNIT, J(var_core_value_sig4632), J(var_core_value_sig12F2)), ...var_core_value_sig223F({
        entityType: var_core_value_sig273D.SLIDE,
        left: var_core_value_sigD0A8,
        right: var_core_value_sigF4B9
      }), ...[...var_core_value_sigD082].flatMap(var_core_value_sigFBFA => {
        var var_core_value_sigF602 = ox496c68,
          var_core_value_sig1BBD,
          var_core_value_sigF704,
          var_core_value_sig2BCF,
          var_core_value_sig0D69;
        return var_core_value_sig223F({
          entityType: var_core_value_sig273D[var_core_value_sigF602(154)],
          parentStableId: var_core_value_sigFBFA,
          left: var_core_value_sigD749((var_core_value_sig1BBD = var_core_value_sigA319(var_core_value_sig2259 == null ? undefined : var_core_value_sig2259[var_core_value_sigFBFA])) == null ? undefined : var_core_value_sig1BBD[var_core_value_sigF602(211)], (var_core_value_sigF704 = var_core_value_sigA319(var_core_value_sig2259 == null ? undefined : var_core_value_sig2259[var_core_value_sigFBFA])) == null ? undefined : var_core_value_sigF704[var_core_value_sigF602(190)]),
          right: var_core_value_sigD749((var_core_value_sig2BCF = var_core_value_sigA319(var_core_value_sig9E2F == null ? undefined : var_core_value_sig9E2F[var_core_value_sigFBFA])) == null ? undefined : var_core_value_sig2BCF[var_core_value_sigF602(211)], (var_core_value_sig0D69 = var_core_value_sigA319(var_core_value_sig9E2F == null ? undefined : var_core_value_sig9E2F[var_core_value_sigFBFA])) == null ? undefined : var_core_value_sig0D69.elementOrder)
        });
      }), ...X(var_core_value_sig273D.SLIDE_TRANSITION, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.transitionRecords, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.transitionRecords), ...X(var_core_value_sig273D.SLIDE_TRANSITION_REFERENCE, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.slideTransitionRefs, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.slideTransitionRefs), ...X(var_core_value_sig273D.SLIDE_MASTER, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.masterPages, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.masterPages), ...X(var_core_value_sig273D.SLIDE_LAYOUT, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.layoutPages, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.layoutPages), ...Z(var_core_value_sig273D.SLIDE_THEME, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.theme, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.theme), ...Q(var_core_value_sig273D.SLIDE_CHART, var_core_value_sigE154, "SLIDE_CHART_PLUGIN", "charts"), ...Q(var_core_value_sig273D.SLIDE_CHART_DATA, var_core_value_sigE154, "SLIDE_CHART_PLUGIN", "dataSources"), ...Q(var_core_value_sig273D.SLIDE_TABLE, var_core_value_sigE154, "SLIDE_TABLE_PLUGIN", "tables")],
      var_core_value_sigE92A = var_core_value_sig2D58({
        entityType: var_core_value_sig273D.SLIDE,
        items: var_core_value_sig5CEE,
        left: var_core_value_sigD0A8,
        right: var_core_value_sigF4B9,
        references: {
          left: var_core_value_sigD749(var_core_value_sig2259, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.slideOrder),
          right: var_core_value_sigD749(var_core_value_sig9E2F, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.slideOrder)
        }
      });
    return {
      items: var_core_value_sigE92A.items,
      supportedEntityTypes: ae,
      scopes: var_core_value_sigE92A.scopes,
      productContext: {
        type: var_core_value_sigEAE2.UNIVER_SLIDE
      }
    };
  }
};
function X(var_core_value_sigF564, var_core_value_sig8CFA, var_core_value_sig2E11) {
  return var_core_value_sig223F({
    entityType: var_core_value_sigF564,
    left: var_core_value_sigD749(var_core_value_sig8CFA, undefined),
    right: var_core_value_sigD749(var_core_value_sig2E11, undefined)
  });
}
function Z(var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sigCE71) {
  return var_core_value_sig223F({
    entityType: var_core_value_sig5B69,
    left: var_core_value_sigB098 === undefined ? [] : [{
      stableId: "root",
      position: 0,
      value: var_core_value_sigB098
    }],
    right: var_core_value_sigCE71 === undefined ? [] : [{
      stableId: "root",
      position: 0,
      value: var_core_value_sigCE71
    }]
  });
}
function Q(var_core_value_sig21D8, var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigB33B) {
  return var_core_value_sig223F({
    entityType: var_core_value_sig21D8,
    left: var_core_value_sigCFFA(var_core_value_sig2B65.leftData, var_core_value_sigD7EA, var_core_value_sigB33B),
    right: var_core_value_sigCFFA(var_core_value_sig2B65.rightData, var_core_value_sigD7EA, var_core_value_sigB33B)
  });
}
let $ = class extends var_core_value_sigB744 {
  constructor(var_core_value_sig362B = A, var_core_value_sig5CA5, var_core_value_sigE90F) {
    super(), this._config = var_core_value_sig362B, this._injector = var_core_value_sig5CA5, this._configService = var_core_value_sigE90F;
    let {
      ...var_core_value_sigEFD4
    } = var_core_value_sigE68A({}, A, this._config);
    this._configService["setConfig"]("slides-history.config", var_core_value_sigEFD4);
  }
  onStarting() {
    var_core_value_sig3E68(this._injector, [[U], [N], [Y]]), this.disposeWithMe(this._injector["get"](var_core_value_sigEF3E).register(this._injector["get"](Y))), this._injector["get"](N);
  }
};
q($, "pluginName", "UNIVER_SLIDES_HISTORY_PLUGIN"), q($, "packageName", O), q($, "version", k), q($, "type", var_core_value_sigEAE2.UNIVER_SLIDE), $ = M([var_core_value_sig3F4C(var_core_value_sig5090, var_core_value_sig9A0D, var_core_value_sig777D), j(1, var_core_value_sigF2E6(var_core_value_sig34C8)), j(2, var_core_value_sig3607)], $);
export { U as SlidesHistoryDiffService, Y as SlidesUnitComparisonAdapter, $ as UniverSlidesHistoryPlugin };
