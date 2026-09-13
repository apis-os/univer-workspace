import { AddBoardElementMutation as var_core_value_sigB098, RemoveBoardElementMutation as var_core_value_sigCE71, RemoveBoardElementOnlyMutation as var_core_value_sig21D8, UniverBoardsPlugin as var_core_value_sig2B65 } from "@univerjs-pro/boards";
import { HistoryMutationService as var_core_value_sigD7EA, HistoryUnitAdapterRegistryService as var_core_value_sigB33B, UnitComparisonAdapterRegistryService as var_core_value_sig24B9, UnitComparisonEntityType as var_core_value_sigE627, UniverEditHistoryPlugin as var_core_value_sigEF3E, asRecord as var_core_value_sig273D, buildScopedUnitComparison as var_core_value_sig9A0D, buildSemanticComparisonItems as var_core_value_sigA319, recordComparisonEntries as var_core_value_sig2D58, resourceComparisonEntries as var_core_value_sig223F, withoutComparisonKeys as var_core_value_sigD749 } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin as var_core_value_sigCFFA } from "@univerjs-pro/license";
import { DependentOn as var_core_value_sig58C1, Disposable as var_core_value_sig5090, IAuthzIoService as var_core_value_sigC368, IConfigService as var_core_value_sigAD56, IUniverInstanceService as var_core_value_sigDB4A, Inject as var_core_value_sig6418, Injector as var_core_value_sig1896, Plugin as var_core_value_sig0285, UniverInstanceType as var_core_value_sig777D, merge as var_core_value_sig3F4C, registerDependencies as var_core_value_sigD65A } from "@univerjs/core";
import { UnitAction as var_core_value_sig5A13, UnitObject as var_core_value_sigF593 } from "@univerjs/protocol";
var O = "@univerjs-pro/boards-history",
  k = "1.0.0-insiders.20260907-70fc579";
const A = {};
function j(var_core_value_sigE92A, var_core_value_sig362B) {
  return function (var_core_value_sig2BCF, var_core_value_sig0D69) {
    var_core_value_sig362B(var_core_value_sig2BCF, var_core_value_sig0D69, var_core_value_sigE92A);
  };
}
function M(var_core_value_sig5CA5, var_core_value_sigE90F, var_core_value_sigEFD4, var_core_value_sig861B) {
  var var_core_value_sig5237 = ox658695,
    var_core_value_sigBB00 = arguments[var_core_value_sig5237(335)],
    var_core_value_sig7E54 = var_core_value_sigBB00 < 3 ? var_core_value_sigE90F : var_core_value_sig861B === null ? var_core_value_sig861B = Object[var_core_value_sig5237(408)](var_core_value_sigE90F, var_core_value_sigEFD4) : var_core_value_sig861B,
    var_core_value_sig9A8D;
  if (typeof Reflect == var_core_value_sig5237(364) && typeof Reflect[var_core_value_sig5237(351)] == var_core_value_sig5237(346)) var_core_value_sig7E54 = Reflect[var_core_value_sig5237(351)](var_core_value_sig5CA5, var_core_value_sigE90F, var_core_value_sigEFD4, var_core_value_sig861B);else {
    for (var var_core_value_sigC259 = var_core_value_sig5CA5.length - 1; var_core_value_sigC259 >= 0; var_core_value_sigC259--) (var_core_value_sig9A8D = var_core_value_sig5CA5[var_core_value_sigC259]) && (var_core_value_sig7E54 = (var_core_value_sigBB00 < 3 ? var_core_value_sig9A8D(var_core_value_sig7E54) : var_core_value_sigBB00 > 3 ? var_core_value_sig9A8D(var_core_value_sigE90F, var_core_value_sigEFD4, var_core_value_sig7E54) : var_core_value_sig9A8D(var_core_value_sigE90F, var_core_value_sigEFD4)) || var_core_value_sig7E54);
  }
  return var_core_value_sigBB00 > 3 && var_core_value_sig7E54 && Object.defineProperty(var_core_value_sigE90F, var_core_value_sigEFD4, var_core_value_sig7E54), var_core_value_sig7E54;
}
let N = class extends var_core_value_sig5090 {
  constructor(var_core_value_sig480E, var_core_value_sig26DB, var_core_value_sigF0F9) {
    super(), this._authzIoService = var_core_value_sig26DB, this._univerInstanceService = var_core_value_sigF0F9, this.disposeWithMe(var_core_value_sig480E.register({
      type: var_core_value_sig777D.UNIVER_BOARD,
      canView: var_core_value_sig7524 => this._hasPermission(var_core_value_sig7524, var_core_value_sig5A13.ViewHistory),
      canRevert: var_core_value_sig2AD8 => !!this._getBoard(var_core_value_sig2AD8) && this._hasPermission(var_core_value_sig2AD8, var_core_value_sig5A13.RecoverHistory),
      captureLocation: var_core_value_sig2AD0 => {
        var var_core_value_sig3EEE = ox5728d8,
          var_core_value_sigBC46;
        return {
          pageId: (var_core_value_sigBC46 = this[var_core_value_sig3EEE(355)](var_core_value_sig2AD0)) == null ? undefined : var_core_value_sigBC46[var_core_value_sig3EEE(363)]()
        };
      },
      restoreLocation: () => undefined
    }));
  }
  _getBoard(var_core_value_sig1A0F) {
    return this._univerInstanceService["getUnit"](var_core_value_sig1A0F, var_core_value_sig777D.UNIVER_BOARD) ?? null;
  }
  async _hasPermission(var_core_value_sigFBA4, var_core_value_sig4383) {
    return (await this._authzIoService["allowed"]({
      unitID: var_core_value_sigFBA4,
      objectID: var_core_value_sigFBA4,
      objectType: var_core_value_sigF593.Board,
      actions: [var_core_value_sig4383]
    })).some(var_core_value_sig3D7D => var_core_value_sig3D7D.action === var_core_value_sig4383 && var_core_value_sig3D7D.allowed);
  }
};
N = M([j(0, var_core_value_sig6418(var_core_value_sigB33B)), j(1, var_core_value_sigC368), j(2, var_core_value_sigDB4A)], N);
function P(var_core_value_sig9C9F) {
  return var_core_value_sig9C9F.flatMap((var_core_value_sig186C, var_core_value_sigD955) => I(var_core_value_sig186C.mutation["params"]).map((var_core_value_sig27E5, var_core_value_sig8061) => ({
    id: var_core_value_sig186C.revision + ":" + var_core_value_sigD955 + ":" + var_core_value_sig8061,
    kind: F(var_core_value_sig186C.mutation["id"]),
    label: var_core_value_sig27E5.elementId ? "board:element" : "board:page",
    memberId: var_core_value_sig186C.memberId,
    pageId: var_core_value_sig27E5.pageId,
    elementId: var_core_value_sig27E5.elementId
  })));
}
function F(var_core_value_sigFDEA) {
  return var_core_value_sigFDEA === var_core_value_sigB098.id ? "insert" : var_core_value_sigFDEA === var_core_value_sigCE71.id || var_core_value_sigFDEA === var_core_value_sig21D8.id ? "delete" : "update";
}
function I(var_core_value_sig86D0) {
  if (!V(var_core_value_sig86D0)) return [];
  let var_core_value_sig4CD2 = L(var_core_value_sig86D0, "subUnitId") ?? L(var_core_value_sig86D0, "pageId");
  if (!var_core_value_sig4CD2) return [];
  let var_core_value_sig48CA = [L(var_core_value_sig86D0, "elementId"), R(var_core_value_sig86D0, "element"), ...B(var_core_value_sig86D0, "elementIds"), ...z(var_core_value_sig86D0, "elements")].filter(var_core_value_sig48BD => !!var_core_value_sig48BD),
    var_core_value_sig50AF = [...new Set(var_core_value_sig48CA)];
  return var_core_value_sig50AF.length ? var_core_value_sig50AF.map(var_core_value_sig429F => ({
    pageId: var_core_value_sig4CD2,
    elementId: var_core_value_sig429F
  })) : [{
    pageId: var_core_value_sig4CD2
  }];
}
function L(var_core_value_sigA942, var_core_value_sigA621) {
  return typeof var_core_value_sigA942[var_core_value_sigA621] == "string" ? var_core_value_sigA942[var_core_value_sigA621] : undefined;
}
function R(var_core_value_sigBBFF, var_core_value_sig8889) {
  if (V(var_core_value_sigBBFF[var_core_value_sig8889])) return L(var_core_value_sigBBFF[var_core_value_sig8889], "id") ?? L(var_core_value_sigBBFF[var_core_value_sig8889], "elementId");
}
function z(var_core_value_sig32F8, var_core_value_sig5B67) {
  return Array.isArray(var_core_value_sig32F8[var_core_value_sig5B67]) ? var_core_value_sig32F8[var_core_value_sig5B67].flatMap(var_core_value_sigF62A => V(var_core_value_sigF62A) ? [L(var_core_value_sigF62A, "id") ?? L(var_core_value_sigF62A, "elementId")].filter(var_core_value_sig4D4C => !!var_core_value_sig4D4C) : []) : [];
}
function B(var_core_value_sig1758, var_core_value_sig4805) {
  return Array.isArray(var_core_value_sig1758[var_core_value_sig4805]) ? var_core_value_sig1758[var_core_value_sig4805].filter(var_core_value_sig8178 => typeof var_core_value_sig8178 == "string") : [];
}
function V(var_core_value_sigE67E) {
  return typeof var_core_value_sigE67E == "object" && !!var_core_value_sigE67E;
}
let H = class {
  constructor(var_core_value_sigE9ED) {
    this._mutationService = var_core_value_sigE9ED;
  }
  async compare(var_core_value_sigB577, var_core_value_sig9572) {
    return P(await this._mutationService["load"](var_core_value_sigB577, var_core_value_sig9572));
  }
};
H = M([j(0, var_core_value_sig6418(var_core_value_sigD7EA))], H);
function U(var_core_value_sig2902) {
  "@babel/helpers - typeof";

  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigD873) {
    return typeof var_core_value_sigD873;
  } : function (var_core_value_sigA12B) {
    return var_core_value_sigA12B && typeof Symbol == "function" && var_core_value_sigA12B.constructor === Symbol && var_core_value_sigA12B !== Symbol.prototype ? "symbol" : typeof var_core_value_sigA12B;
  }, U(var_core_value_sig2902);
}
function W(var_core_value_sig9989, var_core_value_sig698E) {
  if (U(var_core_value_sig9989) != "object" || !var_core_value_sig9989) return var_core_value_sig9989;
  var var_core_value_sig2809 = var_core_value_sig9989[Symbol.toPrimitive];
  if (var_core_value_sig2809 !== undefined) {
    var var_core_value_sig2DAB = var_core_value_sig2809.call(var_core_value_sig9989, var_core_value_sig698E || "default");
    if (U(var_core_value_sig2DAB) != "object") return var_core_value_sig2DAB;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig698E === "string" ? String : Number)(var_core_value_sig9989);
}
function G(var_core_value_sig877E) {
  var var_core_value_sig20C8 = ox658695,
    var_core_value_sigE9A7 = W(var_core_value_sig877E, var_core_value_sig20C8(401));
  return U(var_core_value_sigE9A7) == var_core_value_sig20C8(377) ? var_core_value_sigE9A7 : var_core_value_sigE9A7 + "";
}
function K(var_core_value_sigBECE, var_core_value_sig1B22, var_core_value_sig7F72) {
  return (var_core_value_sig1B22 = G(var_core_value_sig1B22)) in var_core_value_sigBECE ? Object.defineProperty(var_core_value_sigBECE, var_core_value_sig1B22, {
    value: var_core_value_sig7F72,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigBECE[var_core_value_sig1B22] = var_core_value_sig7F72, var_core_value_sigBECE;
}
const q = [var_core_value_sigE627.UNIT, var_core_value_sigE627.BOARD_PAGE, var_core_value_sigE627.BOARD_ELEMENT, var_core_value_sigE627.BOARD_THEME, var_core_value_sigE627.BOARD_CHART, var_core_value_sigE627.BOARD_CHART_DATA, var_core_value_sigE627.BOARD_TABLE],
  J = var_core_value_sigD749("pages", "pageOrder", "slides", "slideOrder", "elements", "resources", "theme", "rev", "activePageId", "activeSlideId", "zoomRatio");
var Y = class {
  constructor() {
    K(this, "type", var_core_value_sig777D.UNIVER_BOARD);
  }
  compare(var_core_value_sigF230) {
    let var_core_value_sig09B8 = var_core_value_sig273D(var_core_value_sigF230.leftData),
      var_core_value_sig6F91 = var_core_value_sig273D(var_core_value_sigF230.rightData),
      var_core_value_sigF9C7 = X(var_core_value_sig09B8),
      var_core_value_sig8895 = X(var_core_value_sig6F91),
      var_core_value_sigC80B = var_core_value_sigF9C7.pages,
      var_core_value_sig284F = var_core_value_sig8895.pages,
      var_core_value_sigE154 = new Set([...Object.keys(var_core_value_sigC80B ?? {}), ...Object.keys(var_core_value_sig284F ?? {})]),
      var_core_value_sig4632 = var_core_value_sigD749("elements", "elementOrder"),
      var_core_value_sig12F2 = var_core_value_sig2D58(var_core_value_sigC80B, var_core_value_sigF9C7.order, var_core_value_sig4632),
      var_core_value_sig2259 = var_core_value_sig2D58(var_core_value_sig284F, var_core_value_sig8895.order, var_core_value_sig4632),
      var_core_value_sig9E2F = [...Z(var_core_value_sigE627.UNIT, J(var_core_value_sig09B8), J(var_core_value_sig6F91)), ...var_core_value_sigA319({
        entityType: var_core_value_sigE627.BOARD_PAGE,
        left: var_core_value_sig12F2,
        right: var_core_value_sig2259
      }), ...[...var_core_value_sigE154].flatMap(var_core_value_sigC9E0 => {
        var var_core_value_sig76BA = ox557ce9,
          var_core_value_sigFBFA,
          var_core_value_sigF602,
          var_core_value_sig1BBD,
          var_core_value_sigF704;
        return var_core_value_sigA319({
          entityType: var_core_value_sigE627.BOARD_ELEMENT,
          parentStableId: var_core_value_sigC9E0,
          left: var_core_value_sig2D58((var_core_value_sigFBFA = var_core_value_sig273D(var_core_value_sigC80B == null ? undefined : var_core_value_sigC80B[var_core_value_sigC9E0])) == null ? undefined : var_core_value_sigFBFA.elements, (var_core_value_sigF602 = var_core_value_sig273D(var_core_value_sigC80B == null ? undefined : var_core_value_sigC80B[var_core_value_sigC9E0])) == null ? undefined : var_core_value_sigF602[var_core_value_sig76BA(404)]),
          right: var_core_value_sig2D58((var_core_value_sig1BBD = var_core_value_sig273D(var_core_value_sig284F == null ? undefined : var_core_value_sig284F[var_core_value_sigC9E0])) == null ? undefined : var_core_value_sig1BBD.elements, (var_core_value_sigF704 = var_core_value_sig273D(var_core_value_sig284F == null ? undefined : var_core_value_sig284F[var_core_value_sigC9E0])) == null ? undefined : var_core_value_sigF704[var_core_value_sig76BA(404)])
        });
      }), ...var_core_value_sigA319({
        entityType: var_core_value_sigE627.BOARD_ELEMENT,
        left: var_core_value_sig2D58(var_core_value_sig09B8 == null ? undefined : var_core_value_sig09B8.elements, undefined),
        right: var_core_value_sig2D58(var_core_value_sig6F91 == null ? undefined : var_core_value_sig6F91.elements, undefined)
      }), ...Z(var_core_value_sigE627.BOARD_THEME, var_core_value_sig09B8 == null ? undefined : var_core_value_sig09B8.theme, var_core_value_sig6F91 == null ? undefined : var_core_value_sig6F91.theme), ...Q(var_core_value_sigE627.BOARD_CHART, var_core_value_sigF230, "BOARD_CHART_PLUGIN", "charts"), ...Q(var_core_value_sigE627.BOARD_CHART_DATA, var_core_value_sigF230, "BOARD_CHART_PLUGIN", "dataSources"), ...Q(var_core_value_sigE627.BOARD_TABLE, var_core_value_sigF230, "BOARD_TABLE_PLUGIN", "tables")],
      var_core_value_sigD082 = var_core_value_sig9A0D({
        entityType: var_core_value_sigE627.BOARD_PAGE,
        items: var_core_value_sig9E2F,
        left: var_core_value_sig12F2,
        right: var_core_value_sig2259,
        references: {
          left: var_core_value_sig2D58(var_core_value_sigC80B, var_core_value_sigF9C7.order),
          right: var_core_value_sig2D58(var_core_value_sig284F, var_core_value_sig8895.order)
        }
      });
    return {
      items: var_core_value_sigD082.items,
      supportedEntityTypes: q,
      scopes: var_core_value_sigD082.scopes,
      productContext: {
        type: var_core_value_sig777D.UNIVER_BOARD
      }
    };
  }
};
function X(var_core_value_sig7B2A) {
  let var_core_value_sig06CD = var_core_value_sig273D(var_core_value_sig7B2A == null ? undefined : var_core_value_sig7B2A.slides),
    var_core_value_sigA5F1 = var_core_value_sig7B2A == null ? undefined : var_core_value_sig7B2A.slideOrder;
  return Array.isArray(var_core_value_sigA5F1) && var_core_value_sigA5F1.length > 0 || var_core_value_sig06CD !== undefined && Object.keys(var_core_value_sig06CD).length > 0 ? {
    pages: var_core_value_sig06CD,
    order: var_core_value_sigA5F1
  } : {
    pages: var_core_value_sig273D(var_core_value_sig7B2A == null ? undefined : var_core_value_sig7B2A.pages),
    order: var_core_value_sig7B2A == null ? undefined : var_core_value_sig7B2A.pageOrder
  };
}
function Z(var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig4F59) {
  return var_core_value_sigA319({
    entityType: var_core_value_sig97A2,
    left: var_core_value_sig07E9 === undefined ? [] : [{
      stableId: "root",
      position: 0,
      value: var_core_value_sig07E9
    }],
    right: var_core_value_sig4F59 === undefined ? [] : [{
      stableId: "root",
      position: 0,
      value: var_core_value_sig4F59
    }]
  });
}
function Q(var_core_value_sigF564, var_core_value_sig8CFA, var_core_value_sig2E11, var_core_value_sig5B69) {
  return var_core_value_sigA319({
    entityType: var_core_value_sigF564,
    left: var_core_value_sig223F(var_core_value_sig8CFA.leftData, var_core_value_sig2E11, var_core_value_sig5B69),
    right: var_core_value_sig223F(var_core_value_sig8CFA.rightData, var_core_value_sig2E11, var_core_value_sig5B69)
  });
}
let $ = class extends var_core_value_sig0285 {
  constructor(var_core_value_sigDBB7 = A, var_core_value_sigD0A8, var_core_value_sigF4B9) {
    super(), this._config = var_core_value_sigDBB7, this._injector = var_core_value_sigD0A8, this._configService = var_core_value_sigF4B9;
    let {
      ...var_core_value_sig5CEE
    } = var_core_value_sig3F4C({}, A, this._config);
    this._configService["setConfig"]("boards-history.config", var_core_value_sig5CEE);
  }
  onStarting() {
    var_core_value_sigD65A(this._injector, [[H], [N], [Y]]), this.disposeWithMe(this._injector["get"](var_core_value_sig24B9).register(this._injector["get"](Y))), this._injector["get"](N);
  }
};
K($, "pluginName", "UNIVER_BOARDS_HISTORY_PLUGIN"), K($, "packageName", O), K($, "version", k), K($, "type", var_core_value_sig777D.UNIVER_BOARD), $ = M([var_core_value_sig58C1(var_core_value_sigCFFA, var_core_value_sigEF3E, var_core_value_sig2B65), j(1, var_core_value_sig6418(var_core_value_sig1896)), j(2, var_core_value_sigAD56)], $);
export { H as BoardsHistoryDiffService, Y as BoardsUnitComparisonAdapter, $ as UniverBoardsHistoryPlugin };
