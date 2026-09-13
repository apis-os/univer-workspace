import { UniverBasesPlugin } from "@univerjs-pro/bases";
import { HistoryMutationService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, asRecord, buildScopedUnitComparison, buildSemanticComparisonItems, recordComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, IConfigService, Inject, Injector, JSON1, Plugin, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
function z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46183) {
  "@babel/helpers - typeof";

  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4656) {
    return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4656;
  } : function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658) {
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658 && typeof Symbol == "function" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658.constructor === Symbol && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658 !== Symbol.prototype ? "symbol" : typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658;
  }, z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46183);
}
function B(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186) {
  if (z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46185) != "object" || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46185) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46185;
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46185[Symbol.toPrimitive];
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187 !== undefined) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187.call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186 || "default");
    if (z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46188) != "object") return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46188;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186 === "string" ? String : Number)(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46185);
}
function V(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46193) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = B(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46193, "string");
  return z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46194) == "symbol" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46194 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46194 + "";
}
function H(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46197, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46198, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46199) {
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = V(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46198)) in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46197 ? Object.defineProperty(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46197, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46198, {
    value: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46199,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46197[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46198] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46199, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46197;
}
const U = ["rev", "createdAt", "updatedAt"],
  W = [UnitComparisonEntityType.BASE, UnitComparisonEntityType.TABLE, UnitComparisonEntityType.FIELD, UnitComparisonEntityType.RECORD, UnitComparisonEntityType.VIEW, UnitComparisonEntityType.CELL],
  G = withoutComparisonKeys("fields", "fieldOrder", "records", "recordOrder", "views", "viewOrder", "cellData", "colId", "colIndex", "rowId", "rowIndex", ...U);
var K = class {
  constructor() {
    H(this, "type", UniverInstanceType.UNIVER_BASE);
  }
  compare(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4660) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = asRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4660.leftData),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = asRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4660.rightData),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = asRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661.tables),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = asRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4662 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4662.tables),
      var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set([...Object.keys(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4663 ?? {}), ...Object.keys(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4664 ?? {})]),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = recordComparisonEntries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661.tableOrder, G),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = recordComparisonEntries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4664, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4662 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4662.tableOrder, G),
      var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [...buildSemanticComparisonItems({
        entityType: UnitComparisonEntityType.BASE,
        left: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661 === undefined ? [] : [{
          stableId: "base",
          position: 0,
          value: withoutComparisonKeys("tables", "tableOrder", "resources", ...U)(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661)
        }],
        right: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4662 === undefined ? [] : [{
          stableId: "base",
          position: 0,
          value: withoutComparisonKeys("tables", "tableOrder", "resources", ...U)(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4662)
        }]
      }), ...buildSemanticComparisonItems({
        entityType: UnitComparisonEntityType.TABLE,
        left: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4665,
        right: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4666
      }), ...[...var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992].flatMap(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466 => q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4664))],
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = buildScopedUnitComparison({
        entityType: UnitComparisonEntityType.TABLE,
        items: var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A,
        left: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4665,
        right: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4666
      });
    return {
      items: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4667.items,
      supportedEntityTypes: W,
      scopes: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4667.scopes,
      productContext: {
        type: UniverInstanceType.UNIVER_BASE,
        visualProjection: "raw-table-data"
      }
    };
  }
};
function q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46205) {
  let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = asRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46204 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46204[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203]) ?? {},
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = asRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46205 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46205[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203]) ?? {},
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46206 = asRecord(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.fields),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46207 = asRecord(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.fields),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = asRecord(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.records),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = asRecord(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.records);
  return [...J(UnitComparisonEntityType.FIELD, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46207, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.fieldOrder, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.fieldOrder, withoutComparisonKeys(...U)), ...J(UnitComparisonEntityType.RECORD, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46209, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.recordOrder, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.recordOrder, withoutComparisonKeys("values", "orderKey", ...U)), ...J(UnitComparisonEntityType.VIEW, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.views, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.views, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.viewOrder, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.viewOrder, withoutComparisonKeys("orderKey", ...U)), ...Y(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46207, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46209, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.fieldOrder, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.fieldOrder, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.recordOrder, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.recordOrder, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.primaryFieldId, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.primaryFieldId)];
}
function J(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46218, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46219, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46220, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46221, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223) {
  return buildSemanticComparisonItems({
    entityType: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46217,
    parentStableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46218,
    left: recordComparisonEntries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46219, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46221, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223),
    right: recordComparisonEntries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46220, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223)
  });
}
function Y(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46231, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46234, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46235, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46236, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46237, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46241) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46234, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46236, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46240),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46235, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46237, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46241),
    var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592 = new Map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46242.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4676 => [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4676.stableId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4676])),
    var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B593 = new Map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46243.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4677 => [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4677.stableId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4677]));
  return buildSemanticComparisonItems({
    entityType: UnitComparisonEntityType.CELL,
    parentStableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46231,
    left: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46242,
    right: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46243
  }).map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4678 => ({
    ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4678,
    locations: {
      left: X(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4678.locations["left"], var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.get(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4678.stableId), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46231),
      right: X(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4678.locations["right"], var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B593.get(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4678.stableId), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46231)
    }
  }));
}
function X(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46259) {
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46257 === null || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258 === undefined) return null;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46260 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46257.target;
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46260 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46260.kind) === "entity" ? {
    ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46257,
    parentStableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258.recordId,
    target: {
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46260,
      kind: "base-cell",
      tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46259,
      recordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258.recordId,
      fieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258.fieldId
    }
  } : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46257;
}
function Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46266, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46268, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46269) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46267);
  return Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46266, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46268).flatMap((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4680) => {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4681;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = asRecord((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = asRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46266 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46266[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4679])) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4681.values);
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4682 === undefined) return [];
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46269 == "string" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4682[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46269] : undefined,
      var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4683 == "string" || typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4683 == "number" ? String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4683) : undefined;
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46270.flatMap((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468) => {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D469;
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467 in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4682 ? [{
        stableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4679 + ":" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467,
        recordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4679,
        fieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467,
        position: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4680 * Math.max(1, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46270.length) + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468,
        displayName: [var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D469 = asRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46265 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46265[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467])) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D469.name].filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46 => typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46 == "string" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46.length > 0).join("\x20·\x20"),
        value: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4682[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467]
      }] : [];
    });
  });
}
function Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46277, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46278) {
  let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46277 ?? {},
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46278) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46278.filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4689 => typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4689 == "string" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4689 in var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4) : [],
    var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994 = new Set(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12);
  return [...var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12, ...Object.keys(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4690 => !var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4690))];
}
export { K as BasesUnitComparisonAdapter };
export { H };
