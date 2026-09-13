import { HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonDiagnosticCode, UnitComparisonEntityType, UnitComparisonReadiness, UniverEditHistoryPlugin, alignComparisonIdentities, asRecord, buildScopedUnitComparison, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, stableJson, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { RangeProtectionPermissionEditPoint, RangeProtectionRuleModel, SelectRangeCommand, SetWorksheetActivateCommand, SheetsSelectionsService, UniverSheetsPlugin, WorkbookEditablePermission, WorkbookRecoverHistoryPermission, WorkbookViewHistoryPermission, WorksheetEditPermission } from "@univerjs/sheets";
const w = "sheets-history.config",
  pe = {};
export { w as SHEETS_HISTORY_PLUGIN_CONFIG_KEY };
export { pe };
