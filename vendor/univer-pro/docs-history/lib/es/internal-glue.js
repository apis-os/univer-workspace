import { HistoryGatewayService, HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, alignComparisonIdentities, arrayComparisonEntries, asRecord, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BlockType, BooleanNumber, ColorKit, DependentOn, Disposable, IAuthzIoService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, TextDecoration, TextX, TextXActionType, Tools, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { ITransformService, RevertRevisionMutation, isTransformMutationsSuccess, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { q, w } from "./docs-history-plugin.js";
import { M } from "./docs-history-diff.js";
import { P } from "./docs-history-docs-unit-comparison-adapter.js";
var be = "@univerjs-pro/docs-history",
  xe = "1.0.0-insiders.20260907-70fc579";
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407);
  };
}
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416;
}
w = C([S(0, Inject(HistoryUnitAdapterRegistryService)), S(1, IAuthzIoService), S(2, IUniverInstanceService), S(3, Inject(DocSelectionManagerService))], w);
M = C([S(0, Inject(HistoryGatewayService)), S(1, ITransformService)], M);
const nt = new Set(["\x08", "\x0a", "\x0b", "\x0e", "\x0f", "\x10", "\x11", "\x12", "\x13", "\x14", "\x15", "\x1a", "\x1b", "\x1c", "\x1d", "\x1e", "\x1f"]),
  rt = [UnitComparisonEntityType.PARAGRAPH, UnitComparisonEntityType.TEXT_STYLE, UnitComparisonEntityType.SECTION, UnitComparisonEntityType.BLOCK_RANGE, UnitComparisonEntityType.CUSTOM_RANGE, UnitComparisonEntityType.TABLE_RANGE, UnitComparisonEntityType.CUSTOM_BLOCK, UnitComparisonEntityType.COLUMN_GROUP, UnitComparisonEntityType.TABLE, UnitComparisonEntityType.DRAWING, UnitComparisonEntityType.HEADER, UnitComparisonEntityType.FOOTER, UnitComparisonEntityType.DOCUMENT_STYLE, UnitComparisonEntityType.DOCUMENT_SETTING, UnitComparisonEntityType.CUSTOM_DECORATION, UnitComparisonEntityType.DOC_HYPERLINK, UnitComparisonEntityType.DOC_CALLOUT, UnitComparisonEntityType.DOC_QUOTE, UnitComparisonEntityType.DOC_CHART, UnitComparisonEntityType.DOC_CHART_DATA, UnitComparisonEntityType.DOC_CODE, UnitComparisonEntityType.DOC_LATEX, UnitComparisonEntityType.DOC_SHAPE_RESOURCE, UnitComparisonEntityType.DOC_TABLE_RESOURCE];
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707 && nt.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708] ?? "");) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708 += 1;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708;
}
P(q, "pluginName", "UNIVER_DOCS_HISTORY_PLUGIN"), P(q, "packageName", be), P(q, "version", xe), P(q, "type", UniverInstanceType.UNIVER_DOC), q = C([DependentOn(UniverLicensePlugin, UniverEditHistoryPlugin, UniverDocsPlugin), S(1, Inject(Injector)), S(2, IConfigService)], q);
export { rt, st };
