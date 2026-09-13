import { HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonDiagnosticCode, UnitComparisonEntityType, UnitComparisonReadiness, UniverEditHistoryPlugin, alignComparisonIdentities, asRecord, buildScopedUnitComparison, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, stableJson, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { RangeProtectionPermissionEditPoint, RangeProtectionRuleModel, SelectRangeCommand, SetWorksheetActivateCommand, SheetsSelectionsService, UniverSheetsPlugin, WorkbookEditablePermission, WorkbookRecoverHistoryPermission, WorkbookViewHistoryPermission, WorksheetEditPermission } from "@univerjs/sheets";
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299) {
  "@babel/helpers - typeof";

  return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120;
  }, D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299);
}
function ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302) {
  if (D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 || "default");
    if (D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301);
}
function ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 = ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, "string");
  return D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 + "";
}
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 = ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313;
}
const be = [UnitComparisonEntityType.WORKBOOK, UnitComparisonEntityType.WORKSHEET, UnitComparisonEntityType.CELL, UnitComparisonEntityType.ROW_COLUMN, UnitComparisonEntityType.CONDITION_FORMAT, UnitComparisonEntityType.DATA_VALIDATION, UnitComparisonEntityType.SPARKLINE, UnitComparisonEntityType.TABLE, UnitComparisonEntityType.SHAPE, UnitComparisonEntityType.CHART, UnitComparisonEntityType.PIVOT],
  xe = [[UnitComparisonEntityType.CONDITION_FORMAT, "SHEET_CONDITIONAL_FORMATTING_PLUGIN"], [UnitComparisonEntityType.DATA_VALIDATION, "SHEET_DATA_VALIDATION_PLUGIN"], [UnitComparisonEntityType.SPARKLINE, "SHEET_SPARKLINE_PLUGIN"], [UnitComparisonEntityType.TABLE, "SHEET_TABLE_PLUGIN"], [UnitComparisonEntityType.SHAPE, "SHEET_DRAWING_PLUGIN"], [UnitComparisonEntityType.CHART, "SHEET_CHART_PLUGIN"], [UnitComparisonEntityType.PIVOT, "SHEET_PIVOT_TABLE_PLUGIN"]],
  Se = new Set(["sheet.mutation.insert-col", "sheet.mutation.insert-row", "sheet.mutation.move-columns", "sheet.mutation.move-cols", "sheet.mutation.move-rows", "sheet.mutation.remove-col", "sheet.mutation.remove-rows"]),
  k = new Set([...Se, "sheet.mutation.insert-sheet", "sheet.mutation.remove-sheet"]),
  A = /(?:^|\.)(?:insert|remove|delete|move|reorder)-(?:(?:row|rows|col|cols|column|columns)(?:-|$)|(?:sheet|sheets)$)/iu;
var j = class {
  constructor() {
    O(this, "type", UniverInstanceType.UNIVER_SHEET);
  }
  compare(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.leftData),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.rightData),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.sheets),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.sheets),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 = withoutComparisonKeys("cellData", "rowData", "columnData"),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 = recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.sheetOrder, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.sheetOrder, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127),
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set([...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 ?? {}), ...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 ?? {})]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.leftChangesets, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.rightChangesets, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 => Se.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.id)),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13 = [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A)),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [...we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126), ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.items), ...xe.flatMap(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629]) => Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.leftData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.rightData, [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992]))],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = [...new Set([...J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130), ...J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131), ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.unsupportedMutationIds)])].sort(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992].flatMap((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.parentStableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.entityType === UnitComparisonEntityType.WORKSHEET && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.stableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631).length;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) return [];
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631]),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631]);
        return [{
          sheetId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631,
          name: typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.name) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.name : typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.name) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.name : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631,
          changeCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633,
          rows: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632].rows,
          columns: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632].columns
        }];
      }),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.snapshotAxisAmbiguous),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = buildScopedUnitComparison({
        entityType: UnitComparisonEntityType.WORKSHEET,
        items: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129
      });
    return {
      items: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.items,
      supportedEntityTypes: be,
      scopes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.scopes,
      productContext: {
        type: UniverInstanceType.UNIVER_SHEET,
        sheets: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15
      },
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.length || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? {
        unsupportedMutationIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132,
        readiness: UnitComparisonReadiness.DEGRADED,
        diagnosticCodes: [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.length ? [UnitComparisonDiagnosticCode.SHEET_STRUCTURAL_HISTORY_FALLBACK] : []), ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? [UnitComparisonDiagnosticCode.SHEET_SNAPSHOT_AXIS_IDENTITY_AMBIGUOUS] : [])]
      } : {})
    };
  }
};
function Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 === undefined) return;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.styles) ?? {},
    {
      styles: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322
    } = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5, "defaultStyle");
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.sheets === undefined ? {} : {
      sheets: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.sheets, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 : {
          ...N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5, "defaultStyle"),
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.cellData === undefined ? {} : {
            cellData: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.cellData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5)))
          }),
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.rowData === undefined ? {} : {
            rowData: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.rowData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5))
          }),
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.columnData === undefined ? {} : {
            columnData: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.columnData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5))
          })
        };
      })
    })
  };
}
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 : N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, "s");
}
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335];
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 == "string" && Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336) ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336]
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333;
}
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 : Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151)]));
}
function we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350) {
  return [...buildSemanticComparisonItems({
    entityType: UnitComparisonEntityType.WORKBOOK,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347 === undefined ? [] : [{
      stableId: "workbook",
      position: 0,
      value: withoutComparisonKeys("sheets", "sheetOrder", "resources", "rev")(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347)
    }],
    right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348 === undefined ? [] : [{
      stableId: "workbook",
      position: 0,
      value: withoutComparisonKeys("sheets", "sheetOrder", "resources", "rev")(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348)
    }]
  }), ...buildSemanticComparisonItems({
    entityType: UnitComparisonEntityType.WORKSHEET,
    left: recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.sheetOrder, withoutComparisonKeys("cellData", "rowData", "columnData")),
    right: recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348.sheetOrder, withoutComparisonKeys("cellData", "rowData", "columnData"))
  })];
}
function Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 => R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152) || R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152)) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 => buildSemanticComparisonItems({
    entityType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355,
    parentStableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153,
    left: z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355),
    right: z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355)
  }).map(F)) : buildSemanticComparisonItems({
    entityType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355,
    left: resourceComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356),
    right: resourceComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356)
  }).map(F);
}
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.locations[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = asRecord((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.values) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154]);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 === null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 === undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.range),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.ranges) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.ranges : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.target,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159.map(I).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 !== undefined);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.kind) === "entity" ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156,
      target: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160,
        kind: "sheet-range",
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 === undefined ? {} : {
          range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161
        }),
        ...(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19 === undefined ? {} : {
          ranges: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19
        })
      }
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156;
  };
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369,
    locations: {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370("left"),
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370("right")
    }
  };
}
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373);
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 === undefined || !Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.startRow) || !Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.endRow) || !Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.startColumn) || !Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.endColumn))) return {
    startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.startRow,
    endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.endRow,
    startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.startColumn,
    endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.endColumn
  };
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 = Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 === undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.id;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 === "SHEET_SPARKLINE_PLUGIN" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 == "string" && asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382]) !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 === "SHEET_TABLE_PLUGIN") return Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171]) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171);
    return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.tables) ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.tables["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 : {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647,
        columns: Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.columns) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.columns["map"](withoutComparisonKeys("id")) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.columns
      };
    })] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171];
  }));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 === "SHEET_PIVOT_TABLE_PLUGIN" && asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.pivotTableConfigs) !== undefined) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.pivotTableConfigs),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.dataFieldManagerConfig) ?? {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {};
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = asRecord((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 = asRecord(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.collections) ?? {};
      for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463] of Object.entries(asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) ?? {})) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462] = Object.fromEntries(Object.entries(asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463) ?? {}).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, {
        ...asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461),
        ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46] === undefined ? {} : {
          collection: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46]
        })
      }]));
    }
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380;
}
function Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 = (Array.isArray((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.resources) ? asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391).resources : []).map(asRecord).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.name) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392);
  if (typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.data) != "string") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.data;
  try {
    return JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.data);
  } catch {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.data;
  }
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 !== undefined && (Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400) || Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.sheetId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.subUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400;
  }));
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 === undefined ? [] : Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 === UnitComparisonEntityType.SHAPE ? De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406]) : B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406]) : B(Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408).filter(([, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182]) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.sheetId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.subUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406;
  })));
}
function De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.data);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 === undefined ? B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413) : recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415, Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.order) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.order["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 == "string") : undefined);
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419) {
  return (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188) => [String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187]) : recordComparisonEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, undefined).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.stableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.value])).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = ["id", "ruleId", "cfId", "uid", "tableId", "chartId", "pivotTableId"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652]).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 == "string") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.name, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.title, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = asRecord((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = asRecord((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.style)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.titles)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.title)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.content].find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 == "string");
    return {
      stableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 === undefined ? {} : {
        displayName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198
      })
    };
  });
}
function Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429 = ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429.leftRows === undefined ? V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, "row") : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429.leftColumns === undefined ? V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, "column") : undefined,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 === undefined ? {} : {
        leftRows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.left,
        rightRows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.right
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 === undefined ? {} : {
        leftColumns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.left,
        rightColumns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.right
      })
    };
  return {
    snapshotAxisAmbiguous: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.ambiguous) === true || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.ambiguous) === true,
    items: [...buildSemanticComparisonItems({
      entityType: UnitComparisonEntityType.CELL,
      parentStableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421,
      left: K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.cellData, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.leftRows, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.leftColumns),
      right: K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428.cellData, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.rightRows, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.rightColumns)
    }), ...q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.rowData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428.rowData, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.leftRows, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.rightRows), ...q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.columnData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428.columnData, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.leftColumns, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.rightColumns)],
    unsupportedMutationIds: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.unsupportedMutationIds,
    rows: W(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.leftRows, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.rightRows, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, "row"), Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, "row")),
    columns: W(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.leftColumns, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.rightColumns, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, "column"), Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, "column"))
  };
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 === undefined) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447) return;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 = U(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 = U(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = [...new Set([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.keys(), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.keys(), ...[...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.keys()].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19)])].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213) => Number((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212) ?? "") !== (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213) ?? "")),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19), 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = 0,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450[0] ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18) + 1;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, 0) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19);
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 + 1] ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 + 1, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4);
  }
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 > 0 ? [{
      prefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 + ":snapshot",
      start: 0,
      count: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18
    }] : [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216
    }));
  return X(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20, 0, [{
    prefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 + ":snapshot-extra",
    start: 0,
    count: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19
  }]), {
    left: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26,
    right: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25,
    ambiguous: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB !== 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 !== 0
  };
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 === "row" ? "rowCount" : "columnCount"];
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 == "number" && Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 : undefined;
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map();
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218] of Object.entries(asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.cellData) ?? {})) for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657] of Object.entries(asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218) ?? {})) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217);
    if (!Number.isInteger(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 || !Number.isInteger(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < 0) continue;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D) ?? [];
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.push([var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657]), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A);
  }
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.rowData : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.columnData) ?? {},
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994 = new Set([...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.keys(), ...Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9).map(Number)]);
  return new Map([...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 => Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220, stableJson({
    cells: (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220) ?? []).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658[0] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659[0]),
    dimension: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220]
  })]));
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 > 0 ? [{
      prefix: "coordinate",
      start: 0,
      count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479
    }] : []),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 > 0 ? [{
      prefix: "coordinate",
      start: 0,
      count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480
    }] : []),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592 = new Map();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 of [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30]) {
    let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.prefix) ?? new Set();
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.start), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.count), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.prefix, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991);
  }
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B593 = new Map([...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592].map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661)])),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = 0;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 => {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B593.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.prefix).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.start && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.count),
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.slice(0, -1).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) => ({
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.prefix + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469,
            position: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.start,
            count: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 + 1] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469
          }));
        return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.count, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2;
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30);
  return alignComparisonIdentities(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.id), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227.id)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 => ({
    leftStart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.leftIndex === null ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.leftIndex].position,
    rightStart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.rightIndex === null ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.rightIndex].position,
    count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.leftIndex === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.rightIndex].count : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.leftIndex].count
  }));
}
function ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 === undefined) return {
    unsupportedMutationIds: []
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.identities !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.identities !== undefined,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.identities !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.identities !== undefined;
  return {
    ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 ? {
      leftRows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.identities,
      rightRows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.identities
    } : {}),
    ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 ? {
      leftColumns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.identities,
      rightColumns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.identities
    } : {}),
    unsupportedMutationIds: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.unsupportedMutationIds, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.unsupportedMutationIds, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.unsupportedMutationIds, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.unsupportedMutationIds, ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 ? [] : G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, "row")), ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 ? [] : G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, "column"))]
  };
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514) {
  return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.params["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 && ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.id);
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519) ?? {};
  return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11).map(Number).filter(Number.isInteger).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 => {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = asRecord(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11[String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233)]) ?? {};
    return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3).map(Number).filter(Number.isInteger).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666);
      return {
        stableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 === undefined ? "row:coordinate:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 : Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233)) + "|" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 === undefined ? "column:coordinate:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 : Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666)),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 === undefined ? {} : {
          nativeStableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667
        }),
        position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 * 16384 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666,
        value: Ae(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3[String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666)])
      };
    });
  });
}
function Ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 === undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525;
  let {
    f: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527,
    s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528,
    t: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529,
    v: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 === undefined ? {} : {
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527 === undefined ? {} : {
      formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529 === undefined ? {} : {
      valueType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 === undefined ? {} : {
      style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528
    })
  };
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596 = new Map();
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236] of [[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542]]) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 ?? []) {
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.prefix) ?? new Set();
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.start), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.count), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.prefix, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299);
    }
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 of Object.keys(asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236) ?? {}).map(Number).filter(Number.isSafeInteger)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 !== undefined && (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.prefix).add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.start), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.prefix).add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.start + 1));
    }
  }
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B597 = new Map([...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596].map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237, [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671)])),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545 = Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B597),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546 = Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B597),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.stableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239])),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.stableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240]));
  return buildSemanticComparisonItems({
    entityType: UnitComparisonEntityType.ROW_COLUMN,
    parentStableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545,
    right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546
  }).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241,
    locations: {
      left: je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.locations["left"], var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.stableId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540),
      right: je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.locations["right"], var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.stableId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540)
    }
  }));
}
function je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 === null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 === undefined) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.target;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.kind) === "entity" ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555,
    target: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558,
      kind: "sheet-axis",
      axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557,
      start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.position,
      end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.position + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.count - 1
    }
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555;
}
function Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563) ?? {};
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 === undefined) return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13).map(Number).filter(Number.isSafeInteger).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 => ({
    stableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244,
    position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244,
    count: 1,
    value: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13[String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244)] ?? {}
  }));
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 = 0;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 => {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.prefix).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.start && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.count),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.slice(0, -1).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674) => {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 + 1] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.start;
        return {
          stableId: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.prefix + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.prefix + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 + "-" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 - 1),
          nativeStableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 + ":" + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6,
          position: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6,
          count: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5,
          value: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13[String(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6)] ?? {}
        };
      });
    return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.count, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22;
  });
}
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 < 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571 ?? []) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.count) return {
      prefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.prefix,
      start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573,
      count: 1
    };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 -= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.count;
  }
}
function Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 = Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 === undefined ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579.prefix + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579.start;
}
function Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.mutations;
    return (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 : []).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677);
      if (typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.id) != "string") return [];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 ??= Ve(stableJson({
        changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583,
        snapshot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584
      }));
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26;
      return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 += 1, [{
        branchIdentity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585,
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.id,
        params: Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.data),
        sequence: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679
      }];
    });
  });
}
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 != "string") return asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589) ?? {};
  try {
    return asRecord(JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589)) ?? {};
  } catch {
    return {};
  }
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.id).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 => A.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255) && !k.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255));
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.params["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594 && ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.id !== "sheet.mutation.insert-sheet" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.id !== "sheet.mutation.remove-sheet" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.params["subUnitId"] === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.params["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594) && A.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.id) && (!k.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.id) || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.params["subUnitId"] != "string"));
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.length > 0) return {
    unsupportedMutationIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.id)
  };
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 - var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.params["range"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 === undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.end - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.start + 1;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.id["startsWith"]("sheet.mutation.insert-") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.id["startsWith"]("sheet.mutation.remove-") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259;
  }, 0);
  if (!Number.isSafeInteger(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 < 0 || !Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597)) return {
    unsupportedMutationIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.id)
  };
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 > 0 ? [{
      prefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 + ":base",
      start: 0,
      count: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28
    }] : [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.id["startsWith"]("sheet.mutation.insert-")) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.params["range"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.start > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598) return {
        unsupportedMutationIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.id]
      };
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.end - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.start + 1;
      X(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.start, 0, [{
        prefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 + ":insert:" + Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266),
        start: 0,
        count: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2
      }]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.id["startsWith"]("sheet.mutation.remove-")) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.params["range"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.end >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598) return {
        unsupportedMutationIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.id]
      };
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.end - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.start + 1;
      X(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.start, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3, []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 -= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3;
      continue;
    }
    if (!Le(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598)) return {
      unsupportedMutationIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.id]
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 ? {
    identities: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35,
    unsupportedMutationIds: []
  } : {
    unsupportedMutationIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.id)
  };
}
function Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.params["sourceRange"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.params["targetRange"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.end >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.start > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.start > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.start && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.start <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.end) return false;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.end - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.start + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.start, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30, []);
  return X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.start > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.start ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.start - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.start, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611), true;
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 = Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 = Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619.splice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622);
}
function Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 === 0) return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.count) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14, 1, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683,
      count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633
    }, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683,
      start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633,
      count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.count - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633
    }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 + 1;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 -= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.count;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.length;
}
function ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 === "sheet.mutation.insert-row" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 === "sheet.mutation.remove-rows" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 === "sheet.mutation.move-rows" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 === "sheet.mutation.insert-col" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 === "sheet.mutation.remove-col" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 === "sheet.mutation.move-columns" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 === "sheet.mutation.move-cols";
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 === "row" ? "rowCount" : "columnCount"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 === "row" ? "rowData" : "columnData"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641.cellData),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 === "row" ? Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 ?? {}).map(Number) : Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 ?? {}).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 => Object.keys(asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) ?? {}).map(Number));
  return [...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644 ?? {}).map(Number), ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39].filter(Number.isInteger).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270) => Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 + 1), typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 : 0);
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653 = asRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652 === "row" ? "startRow" : "startColumn"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652 === "row" ? "endRow" : "endColumn"];
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 == "number" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 == "number" && Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654) && Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 ? {
    start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654,
    end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655
  } : undefined;
}
function Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661) {
  return Ve(stableJson({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.id,
    branchIdentity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.branchIdentity,
    sequence: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.sequence,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.params["subUnitId"],
    range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.params["range"],
    sourceRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.params["sourceRange"],
    targetRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.params["targetRange"]
  }));
}
function Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = 2166136261;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 += 1) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 ^= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.charCodeAt(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = Math.imul(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32, 16777619);
  return (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 >>> 0).toString(36);
}
function He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = "";
  do var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = String.fromCharCode(65 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 % 26) + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = Math.floor(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 / 26) - 1; while (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 >= 0);
  return "" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665 + 1);
}
export { j as SheetsUnitComparisonAdapter };
export { O };
