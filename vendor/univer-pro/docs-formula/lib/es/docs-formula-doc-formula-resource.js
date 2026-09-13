import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, buildUpsertHostExternalReferenceMutations, collectFormulaExternalReferenceQualifiers, getScalarFormulaResultCell, resolveFormulaResultPresentation, resolveHostFormulaExternalReferences, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { CellValueType, CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, Tools, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getParagraphContentStartOffset, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert, touchDependencies } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, DocTextResolverService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { FormulaResultStatus, LexerTreeBuilder, OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { S } from "./internal-core-endo.js";
import { Pe } from "./docs-formula-doc-formula-config.js";
import { y } from "./docs-formula-doc-formula-plugin.js";
function x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 != "object" || !S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, ["schemaVersion", "formulas"]) || !("schemaVersion" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.schemaVersion !== 1 || !("formulas" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.formulas || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.formulas != "object" || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.formulas) ? false : Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.formulas).every(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.length > 0 && Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656));
}
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253) {
    super(), this._resourceManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, this._docFormulaModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253, this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: y,
      businesses: [UniverInstanceType.UNIVER_DOC],
      toJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 => JSON.stringify(this._docFormulaModel["serialize"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631)),
      parseJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632),
      onLoad: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) => {
        this._docFormulaModel["load"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634);
      },
      onUnLoad: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 => this._docFormulaModel["removeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637)
    }));
  }
};
export { x as isDocFormulaResource, X as DocFormulaResourceController };
