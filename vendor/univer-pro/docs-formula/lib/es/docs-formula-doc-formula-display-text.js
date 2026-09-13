import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, buildUpsertHostExternalReferenceMutations, collectFormulaExternalReferenceQualifiers, getScalarFormulaResultCell, resolveFormulaResultPresentation, resolveHostFormulaExternalReferences, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { CellValueType, CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, Tools, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getParagraphContentStartOffset, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert, touchDependencies } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, DocTextResolverService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { FormulaResultStatus, LexerTreeBuilder, OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { w } from "./docs-formula-doc-formula-range.js";
import { Ot } from "./docs-formula-degrade-doc-formula-document-data.js";
import { Ve } from "./internal-core-endo.js";
let Z = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258) {
    super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256, this._formulaService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.register({
      resolve: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.filter(w).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => ({
          startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.startIndex,
          endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.endIndex + 1,
          text: this.resolveFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.rangeId)
        }))) ?? [];
      }
    })), this.disposeWithMe(this._formulaService["presentationChanged$"].subscribe(({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644
    }) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.notifyTextChanged(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644);
    }));
  }
  resolveFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 = this._formulaService["getResult"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262,
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263
    })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.text) ?? "";
  }
  resolveText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268, UniverInstanceType.UNIVER_DOC),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.getBody();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273) return "";
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.dataStream["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.startIndex >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.endIndex < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.startIndex)) ?? [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.endIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 + 1;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 = "" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.slice(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D) + this.resolveFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.rangeId) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1);
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274;
  }
  degradeDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282) {
    return Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282);
  }
  degradeBody(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = {}) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287;
    return Ve({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284,
      body: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285,
      documentStyle: {}
    }, (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.filter(w)) ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => ({
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.rangeId,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.rangeId] ?? this.resolveFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.rangeId)
    }))).body ?? {
      dataStream: ""
    };
  }
};
export { Z as DocFormulaDisplayTextService };
