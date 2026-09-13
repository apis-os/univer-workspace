Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/edit-history"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs-pro/slides"),
  r = require("@univerjs/core"),
  i = require("@univerjs/protocol");
var a = "@univerjs-pro/slides-history",
  o = "1.0.0-insiders.20260907-70fc579";
const s = {};
function c(var_core_value_sig861B, var_core_value_sig5237) {
  return function (var_core_value_sig480E, var_core_value_sig26DB) {
    var_core_value_sig5237(var_core_value_sig480E, var_core_value_sig26DB, var_core_value_sig861B);
  };
}
function l(var_core_value_sigBB00, var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259) {
  var var_core_value_sig9C9F = ox2a51a8,
    var_core_value_sigFDEA = arguments.length,
    var_core_value_sig86D0 = var_core_value_sigFDEA < 3 ? var_core_value_sig7E54 : var_core_value_sigC259 === null ? var_core_value_sigC259 = Object[var_core_value_sig9C9F(343)](var_core_value_sig7E54, var_core_value_sig9A8D) : var_core_value_sigC259,
    var_core_value_sig4CD2;
  if (typeof Reflect == var_core_value_sig9C9F(340) && typeof Reflect[var_core_value_sig9C9F(269)] == var_core_value_sig9C9F(351)) var_core_value_sig86D0 = Reflect[var_core_value_sig9C9F(269)](var_core_value_sigBB00, var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259);else {
    for (var var_core_value_sig48CA = var_core_value_sigBB00[var_core_value_sig9C9F(281)] - 1; var_core_value_sig48CA >= 0; var_core_value_sig48CA--) (var_core_value_sig4CD2 = var_core_value_sigBB00[var_core_value_sig48CA]) && (var_core_value_sig86D0 = (var_core_value_sigFDEA < 3 ? var_core_value_sig4CD2(var_core_value_sig86D0) : var_core_value_sigFDEA > 3 ? var_core_value_sig4CD2(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sig86D0) : var_core_value_sig4CD2(var_core_value_sig7E54, var_core_value_sig9A8D)) || var_core_value_sig86D0);
  }
  return var_core_value_sigFDEA > 3 && var_core_value_sig86D0 && Object[var_core_value_sig9C9F(283)](var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sig86D0), var_core_value_sig86D0;
}
let u = class extends r.Disposable {
  constructor(var_core_value_sigF0F9, var_core_value_sig1A0F, var_core_value_sigFBA4, var_core_value_sig4383) {
    super(), this._authzIoService = var_core_value_sig1A0F, this._commandService = var_core_value_sigFBA4, this._univerInstanceService = var_core_value_sig4383, this.disposeWithMe(var_core_value_sigF0F9.register({
      type: r.UniverInstanceType["UNIVER_SLIDE"],
      canView: var_core_value_sig7524 => this._hasPermission(var_core_value_sig7524, i.UnitAction["ViewHistory"]),
      canRevert: var_core_value_sig2AD8 => !!this._getSlide(var_core_value_sig2AD8) && this._hasPermission(var_core_value_sig2AD8, i.UnitAction["RecoverHistory"]),
      captureLocation: var_core_value_sig2AD0 => {
        var var_core_value_sig3EEE = ox1c30d5,
          var_core_value_sigBC46;
        return {
          slideId: (var_core_value_sigBC46 = this._getSlide(var_core_value_sig2AD0)) == null || (var_core_value_sigBC46 = var_core_value_sigBC46.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sigBC46[var_core_value_sig3EEE(352)]()
        };
      },
      restoreLocation: (var_core_value_sig3D7D, var_core_value_sig27E5) => this._restoreLocation(var_core_value_sig3D7D, d(var_core_value_sig27E5) ? var_core_value_sig27E5 : undefined)
    }));
  }
  async _restoreLocation(var_core_value_sig186C, var_core_value_sigD955) {
    var var_core_value_sig48BD = ox2a51a8,
      var_core_value_sig429F;
    !(var_core_value_sigD955 != null && var_core_value_sigD955[var_core_value_sig48BD(295)]) || !((var_core_value_sig429F = this[var_core_value_sig48BD(231)](var_core_value_sig186C)) != null && var_core_value_sig429F[var_core_value_sig48BD(261)][var_core_value_sig48BD(229)](var_core_value_sigD955[var_core_value_sig48BD(295)])) || (await this[var_core_value_sig48BD(253)].executeCommand(n.SetActiveSlideCommand["id"], {
      unitId: var_core_value_sig186C,
      subUnitId: var_core_value_sigD955[var_core_value_sig48BD(295)]
    }));
  }
  _getSlide(var_core_value_sigF62A) {
    return this._univerInstanceService["getUnit"](var_core_value_sigF62A, r.UniverInstanceType["UNIVER_SLIDE"]) ?? null;
  }
  async _hasPermission(var_core_value_sig8178, var_core_value_sigE9ED) {
    return (await this._authzIoService["allowed"]({
      unitID: var_core_value_sig8178,
      objectID: var_core_value_sig8178,
      objectType: i.UnitObject["Slide"],
      actions: [var_core_value_sigE9ED]
    })).some(var_core_value_sig8061 => var_core_value_sig8061.action === var_core_value_sigE9ED && var_core_value_sig8061.allowed);
  }
};
u = l([c(0, (0, r.Inject)(e.HistoryUnitAdapterRegistryService)), c(1, r.IAuthzIoService), c(2, r.ICommandService), c(3, r.IUniverInstanceService)], u);
function d(var_core_value_sig50AF) {
  return typeof var_core_value_sig50AF == "object" && !!var_core_value_sig50AF && (!("slideId" in var_core_value_sig50AF) || typeof var_core_value_sig50AF.slideId == "string");
}
function f(var_core_value_sigA942) {
  return var_core_value_sigA942.flatMap((var_core_value_sigB577, var_core_value_sig9572) => m(var_core_value_sigB577.mutation["params"]).map((var_core_value_sig4D4C, var_core_value_sigC9E0) => ({
    id: var_core_value_sigB577.revision + ":" + var_core_value_sig9572 + ":" + var_core_value_sigC9E0,
    kind: p(var_core_value_sigB577.mutation["id"]),
    label: var_core_value_sig4D4C.drawingId ? "slide:element" : "slide:page",
    memberId: var_core_value_sigB577.memberId,
    slideId: var_core_value_sig4D4C.slideId,
    drawingId: var_core_value_sig4D4C.drawingId
  })));
}
function p(var_core_value_sigA621) {
  return var_core_value_sigA621 === n.AddSlideElementMutation["id"] || var_core_value_sigA621 === n.AddSlidePageMutation["id"] || var_core_value_sigA621 === n.InsertDrawingObjectMutation["id"] ? "insert" : var_core_value_sigA621 === n.RemoveSlideElementMutation["id"] || var_core_value_sigA621 === n.RemoveSlidePageMutation["id"] ? "delete" : "update";
}
function m(var_core_value_sigBBFF) {
  if (!y(var_core_value_sigBBFF)) return [];
  let var_core_value_sig8889 = h(var_core_value_sigBBFF, "subUnitId") ?? h(var_core_value_sigBBFF, "slideId") ?? h(var_core_value_sigBBFF, "pageId") ?? g(var_core_value_sigBBFF, "slide");
  if (!var_core_value_sig8889) return [];
  let var_core_value_sig32F8 = [h(var_core_value_sigBBFF, "drawingId"), g(var_core_value_sigBBFF, "element"), ..._(var_core_value_sigBBFF, "drawings"), ..._(var_core_value_sigBBFF, "objects"), ...v(var_core_value_sigBBFF, "drawingIds")].filter(var_core_value_sigD873 => !!var_core_value_sigD873),
    var_core_value_sig5B67 = [...new Set(var_core_value_sig32F8)];
  return var_core_value_sig5B67.length ? var_core_value_sig5B67.map(var_core_value_sigA12B => ({
    slideId: var_core_value_sig8889,
    drawingId: var_core_value_sigA12B
  })) : [{
    slideId: var_core_value_sig8889
  }];
}
function h(var_core_value_sig1758, var_core_value_sig4805) {
  return typeof var_core_value_sig1758[var_core_value_sig4805] == "string" ? var_core_value_sig1758[var_core_value_sig4805] : undefined;
}
function g(var_core_value_sigE67E, var_core_value_sig2902) {
  if (y(var_core_value_sigE67E[var_core_value_sig2902])) return h(var_core_value_sigE67E[var_core_value_sig2902], "id") ?? h(var_core_value_sigE67E[var_core_value_sig2902], "drawingId");
}
function _(var_core_value_sig9989, var_core_value_sig698E) {
  return Array.isArray(var_core_value_sig9989[var_core_value_sig698E]) ? var_core_value_sig9989[var_core_value_sig698E].flatMap(var_core_value_sigF230 => y(var_core_value_sigF230) ? [h(var_core_value_sigF230, "id") ?? h(var_core_value_sigF230, "drawingId")].filter(var_core_value_sig76BA => !!var_core_value_sig76BA) : []) : [];
}
function v(var_core_value_sig2809, var_core_value_sig2DAB) {
  return Array.isArray(var_core_value_sig2809[var_core_value_sig2DAB]) ? var_core_value_sig2809[var_core_value_sig2DAB].filter(var_core_value_sig09B8 => typeof var_core_value_sig09B8 == "string") : [];
}
function y(var_core_value_sig877E) {
  return typeof var_core_value_sig877E == "object" && !!var_core_value_sig877E;
}
let b = class {
  constructor(var_core_value_sig6F91) {
    this._mutationService = var_core_value_sig6F91;
  }
  async compare(var_core_value_sigF9C7, var_core_value_sig8895) {
    return f(await this._mutationService["load"](var_core_value_sigF9C7, var_core_value_sig8895));
  }
};
b = l([c(0, (0, r.Inject)(e.HistoryMutationService))], b);
function x(var_core_value_sig20C8) {
  "@babel/helpers - typeof";

  return x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigC80B) {
    return typeof var_core_value_sigC80B;
  } : function (var_core_value_sig284F) {
    return var_core_value_sig284F && typeof Symbol == "function" && var_core_value_sig284F.constructor === Symbol && var_core_value_sig284F !== Symbol.prototype ? "symbol" : typeof var_core_value_sig284F;
  }, x(var_core_value_sig20C8);
}
function S(var_core_value_sigE9A7, var_core_value_sigBECE) {
  if (x(var_core_value_sigE9A7) != "object" || !var_core_value_sigE9A7) return var_core_value_sigE9A7;
  var var_core_value_sig1B22 = var_core_value_sigE9A7[Symbol.toPrimitive];
  if (var_core_value_sig1B22 !== undefined) {
    var var_core_value_sig7F72 = var_core_value_sig1B22.call(var_core_value_sigE9A7, var_core_value_sigBECE || "default");
    if (x(var_core_value_sig7F72) != "object") return var_core_value_sig7F72;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigBECE === "string" ? String : Number)(var_core_value_sigE9A7);
}
function C(var_core_value_sig7B2A) {
  var var_core_value_sig06CD = ox2a51a8,
    var_core_value_sigA5F1 = S(var_core_value_sig7B2A, var_core_value_sig06CD(353));
  return x(var_core_value_sigA5F1) == var_core_value_sig06CD(276) ? var_core_value_sigA5F1 : var_core_value_sigA5F1 + "";
}
function w(var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig4F59) {
  return (var_core_value_sig07E9 = C(var_core_value_sig07E9)) in var_core_value_sig97A2 ? Object.defineProperty(var_core_value_sig97A2, var_core_value_sig07E9, {
    value: var_core_value_sig4F59,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig97A2[var_core_value_sig07E9] = var_core_value_sig4F59, var_core_value_sig97A2;
}
const T = [e.UnitComparisonEntityType["UNIT"], e.UnitComparisonEntityType["SLIDE"], e.UnitComparisonEntityType["SLIDE_ELEMENT"], e.UnitComparisonEntityType["SLIDE_TRANSITION"], e.UnitComparisonEntityType["SLIDE_TRANSITION_REFERENCE"], e.UnitComparisonEntityType["SLIDE_MASTER"], e.UnitComparisonEntityType["SLIDE_LAYOUT"], e.UnitComparisonEntityType["SLIDE_THEME"], e.UnitComparisonEntityType["SLIDE_CHART"], e.UnitComparisonEntityType["SLIDE_CHART_DATA"], e.UnitComparisonEntityType["SLIDE_TABLE"]],
  E = (0, e.withoutComparisonKeys)("slides", "slideOrder", "resources", "transitionRecords", "slideTransitionRefs", "masterPages", "layoutPages", "theme", "activeSlideId", "zoomRatio", "rev");
var D = class {
  constructor() {
    w(this, "type", r.UniverInstanceType["UNIVER_SLIDE"]);
  }
  compare(var_core_value_sigE154) {
    let var_core_value_sig4632 = (0, e.asRecord)(var_core_value_sigE154.leftData),
      var_core_value_sig12F2 = (0, e.asRecord)(var_core_value_sigE154.rightData),
      var_core_value_sig2259 = (0, e.asRecord)(var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.slides),
      var_core_value_sig9E2F = (0, e.asRecord)(var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.slides),
      var_core_value_sigD082 = new Set([...Object.keys(var_core_value_sig2259 ?? {}), ...Object.keys(var_core_value_sig9E2F ?? {})]),
      var_core_value_sigDBB7 = (0, e.withoutComparisonKeys)("elements", "elementOrder"),
      var_core_value_sigD0A8 = (0, e.recordComparisonEntries)(var_core_value_sig2259, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.slideOrder, var_core_value_sigDBB7),
      var_core_value_sigF4B9 = (0, e.recordComparisonEntries)(var_core_value_sig9E2F, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.slideOrder, var_core_value_sigDBB7),
      var_core_value_sig5CEE = [...k(e.UnitComparisonEntityType["UNIT"], E(var_core_value_sig4632), E(var_core_value_sig12F2)), ...(0, e.buildSemanticComparisonItems)({
        entityType: e.UnitComparisonEntityType["SLIDE"],
        left: var_core_value_sigD0A8,
        right: var_core_value_sigF4B9
      }), ...[...var_core_value_sigD082].flatMap(var_core_value_sigFBFA => {
        var var_core_value_sigF602 = ox34638c,
          var_core_value_sig1BBD,
          var_core_value_sigF704,
          var_core_value_sig2BCF,
          var_core_value_sig0D69;
        return (0, e[var_core_value_sigF602(255)])({
          entityType: e[var_core_value_sigF602(241)][var_core_value_sigF602(357)],
          parentStableId: var_core_value_sigFBFA,
          left: (0, e[var_core_value_sigF602(292)])((var_core_value_sig1BBD = (0, e[var_core_value_sigF602(347)])(var_core_value_sig2259 == null ? undefined : var_core_value_sig2259[var_core_value_sigFBFA])) == null ? undefined : var_core_value_sig1BBD[var_core_value_sigF602(358)], (var_core_value_sigF704 = (0, e[var_core_value_sigF602(347)])(var_core_value_sig2259 == null ? undefined : var_core_value_sig2259[var_core_value_sigFBFA])) == null ? undefined : var_core_value_sigF704[var_core_value_sigF602(249)]),
          right: (0, e[var_core_value_sigF602(292)])((var_core_value_sig2BCF = (0, e.asRecord)(var_core_value_sig9E2F == null ? undefined : var_core_value_sig9E2F[var_core_value_sigFBFA])) == null ? undefined : var_core_value_sig2BCF[var_core_value_sigF602(358)], (var_core_value_sig0D69 = (0, e[var_core_value_sigF602(347)])(var_core_value_sig9E2F == null ? undefined : var_core_value_sig9E2F[var_core_value_sigFBFA])) == null ? undefined : var_core_value_sig0D69[var_core_value_sigF602(249)])
        });
      }), ...O(e.UnitComparisonEntityType["SLIDE_TRANSITION"], var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.transitionRecords, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.transitionRecords), ...O(e.UnitComparisonEntityType["SLIDE_TRANSITION_REFERENCE"], var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.slideTransitionRefs, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.slideTransitionRefs), ...O(e.UnitComparisonEntityType["SLIDE_MASTER"], var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.masterPages, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.masterPages), ...O(e.UnitComparisonEntityType["SLIDE_LAYOUT"], var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.layoutPages, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.layoutPages), ...k(e.UnitComparisonEntityType["SLIDE_THEME"], var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.theme, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.theme), ...A(e.UnitComparisonEntityType["SLIDE_CHART"], var_core_value_sigE154, "SLIDE_CHART_PLUGIN", "charts"), ...A(e.UnitComparisonEntityType["SLIDE_CHART_DATA"], var_core_value_sigE154, "SLIDE_CHART_PLUGIN", "dataSources"), ...A(e.UnitComparisonEntityType["SLIDE_TABLE"], var_core_value_sigE154, "SLIDE_TABLE_PLUGIN", "tables")],
      var_core_value_sigE92A = (0, e.buildScopedUnitComparison)({
        entityType: e.UnitComparisonEntityType["SLIDE"],
        items: var_core_value_sig5CEE,
        left: var_core_value_sigD0A8,
        right: var_core_value_sigF4B9,
        references: {
          left: (0, e.recordComparisonEntries)(var_core_value_sig2259, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.slideOrder),
          right: (0, e.recordComparisonEntries)(var_core_value_sig9E2F, var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.slideOrder)
        }
      });
    return {
      items: var_core_value_sigE92A.items,
      supportedEntityTypes: T,
      scopes: var_core_value_sigE92A.scopes,
      productContext: {
        type: r.UniverInstanceType["UNIVER_SLIDE"]
      }
    };
  }
};
function O(var_core_value_sigF564, var_core_value_sig8CFA, var_core_value_sig2E11) {
  return (0, e.buildSemanticComparisonItems)({
    entityType: var_core_value_sigF564,
    left: (0, e.recordComparisonEntries)(var_core_value_sig8CFA, undefined),
    right: (0, e.recordComparisonEntries)(var_core_value_sig2E11, undefined)
  });
}
function k(var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sigCE71) {
  return (0, e.buildSemanticComparisonItems)({
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
function A(var_core_value_sig21D8, var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigB33B) {
  return (0, e.buildSemanticComparisonItems)({
    entityType: var_core_value_sig21D8,
    left: (0, e.resourceComparisonEntries)(var_core_value_sig2B65.leftData, var_core_value_sigD7EA, var_core_value_sigB33B),
    right: (0, e.resourceComparisonEntries)(var_core_value_sig2B65.rightData, var_core_value_sigD7EA, var_core_value_sigB33B)
  });
}
let j = class extends r.Plugin {
  constructor(var_core_value_sig362B = s, var_core_value_sig5CA5, var_core_value_sigE90F) {
    super(), this._config = var_core_value_sig362B, this._injector = var_core_value_sig5CA5, this._configService = var_core_value_sigE90F;
    let {
      ...var_core_value_sigEFD4
    } = (0, r.merge)({}, s, this._config);
    this._configService["setConfig"]("slides-history.config", var_core_value_sigEFD4);
  }
  onStarting() {
    (0, r.registerDependencies)(this._injector, [[b], [u], [D]]), this.disposeWithMe(this._injector["get"](e.UnitComparisonAdapterRegistryService).register(this._injector["get"](D))), this._injector["get"](u);
  }
};
w(j, "pluginName", "UNIVER_SLIDES_HISTORY_PLUGIN"), w(j, "packageName", a), w(j, "version", o), w(j, "type", r.UniverInstanceType["UNIVER_SLIDE"]), j = l([(0, r.DependentOn)(t.UniverLicensePlugin, e.UniverEditHistoryPlugin, n.UniverSlidesPlugin), c(1, (0, r.Inject)(r.Injector)), c(2, r.IConfigService)], j), Object.defineProperty(exports, "SlidesHistoryDiffService", {
  enumerable: true,
  get: function () {
    return b;
  }
}), exports.SlidesUnitComparisonAdapter = D, Object.defineProperty(exports, "UniverSlidesHistoryPlugin", {
  enumerable: true,
  get: function () {
    return j;
  }
});
