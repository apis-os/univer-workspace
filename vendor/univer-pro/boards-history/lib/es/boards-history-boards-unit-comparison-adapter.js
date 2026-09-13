import { AddBoardElementMutation, RemoveBoardElementMutation, RemoveBoardElementOnlyMutation, UniverBoardsPlugin } from "@univerjs-pro/boards";
import { HistoryMutationService, HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, asRecord, buildScopedUnitComparison, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, IAuthzIoService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { UnitAction, UnitObject } from "@univerjs/protocol";
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132) {
  "@babel/helpers - typeof";

  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654;
  }, U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132);
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) {
  if (U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 || "default");
    if (U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134);
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 = ox658695,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143(401));
  return U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144) == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143(377) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 + "";
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148;
}
const q = [UnitComparisonEntityType.UNIT, UnitComparisonEntityType.BOARD_PAGE, UnitComparisonEntityType.BOARD_ELEMENT, UnitComparisonEntityType.BOARD_THEME, UnitComparisonEntityType.BOARD_CHART, UnitComparisonEntityType.BOARD_CHART_DATA, UnitComparisonEntityType.BOARD_TABLE],
  J = withoutComparisonKeys("pages", "pageOrder", "slides", "slideOrder", "elements", "resources", "theme", "rev", "activePageId", "activeSlideId", "zoomRatio");
var Y = class {
  constructor() {
    K(this, "type", UniverInstanceType.UNIVER_BOARD);
  }
  compare(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.leftData),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.rightData),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.pages,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.pages,
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set([...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 ?? {}), ...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 ?? {})]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = withoutComparisonKeys("elements", "elementOrder"),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.order, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.order, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [...Z(UnitComparisonEntityType.UNIT, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657), J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658)), ...buildSemanticComparisonItems({
        entityType: UnitComparisonEntityType.BOARD_PAGE,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665
      }), ...[...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299].flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = ox557ce9,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617;
        return buildSemanticComparisonItems({
          entityType: UnitComparisonEntityType.BOARD_ELEMENT,
          parentStableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612,
          left: recordComparisonEntries((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.elements, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613(404)]),
          right: recordComparisonEntries((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.elements, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613(404)])
        });
      }), ...buildSemanticComparisonItems({
        entityType: UnitComparisonEntityType.BOARD_ELEMENT,
        left: recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.elements, undefined),
        right: recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.elements, undefined)
      }), ...Z(UnitComparisonEntityType.BOARD_THEME, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.theme, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.theme), ...Q(UnitComparisonEntityType.BOARD_CHART, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, "BOARD_CHART_PLUGIN", "charts"), ...Q(UnitComparisonEntityType.BOARD_CHART_DATA, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, "BOARD_CHART_PLUGIN", "dataSources"), ...Q(UnitComparisonEntityType.BOARD_TABLE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, "BOARD_TABLE_PLUGIN", "tables")],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = buildScopedUnitComparison({
        entityType: UnitComparisonEntityType.BOARD_PAGE,
        items: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665,
        references: {
          left: recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.order),
          right: recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.order)
        }
      });
    return {
      items: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.items,
      supportedEntityTypes: q,
      scopes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.scopes,
      productContext: {
        type: UniverInstanceType.UNIVER_BOARD
      }
    };
  }
};
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.slides),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.slideOrder;
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.length > 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 !== undefined && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155).length > 0 ? {
    pages: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155,
    order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156
  } : {
    pages: asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.pages),
    order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.pageOrder
  };
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162) {
  return buildSemanticComparisonItems({
    entityType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 === undefined ? [] : [{
      stableId: "root",
      position: 0,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161
    }],
    right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 === undefined ? [] : [{
      stableId: "root",
      position: 0,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162
    }]
  });
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169) {
  return buildSemanticComparisonItems({
    entityType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166,
    left: resourceComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.leftData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169),
    right: resourceComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.rightData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169)
  });
}
export { Y as BoardsUnitComparisonAdapter };
export { K };
