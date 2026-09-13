import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, buildUpsertHostExternalReferenceMutations, collectFormulaExternalReferenceQualifiers, getScalarFormulaResultCell, resolveFormulaResultPresentation, resolveHostFormulaExternalReferences, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { CellValueType, CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, Tools, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getParagraphContentStartOffset, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert, touchDependencies } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, DocTextResolverService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { FormulaResultStatus, LexerTreeBuilder, OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
const y = "DOC_FORMULA_PLUGIN",
  je = 1,
  Me = "univer-docs-formula",
  Ne = "￼";
export { y as DOC_FORMULA_PLUGIN, je as DOC_FORMULA_SCHEMA_VERSION, Me as DOC_FORMULA_CUSTOM_RANGE_KIND, Ne as DOC_FORMULA_OBJECT_REPLACEMENT };
