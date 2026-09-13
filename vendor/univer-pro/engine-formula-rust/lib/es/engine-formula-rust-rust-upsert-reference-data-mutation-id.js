import { createRequire } from "node:module";
import process from "node:process";
import { CommandType, Disposable, ICommandService, setDependencies } from "@univerjs/core";
import { CellValueType, ObjectMatrix } from "@univerjs/core";
import { IConfigService as IConfigService2, Injector, setDependencies as setDependencies4, touchDependencies } from "@univerjs/core";
import { ICalculateFormulaService } from "@univerjs/engine-formula";
import { UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { CellValueType as CellValueType2, CommandType as CommandType2, createBaseFormulaTableReferenceNormalizer, createBaseFormulaTableNameMap, Disposable as Disposable2, ICommandService as ICommandService2, IUniverInstanceService, LocaleType, ObjectMatrix as ObjectMatrix2, setDependencies as setDependencies2, toDisposable, UniverInstanceType } from "@univerjs/core";
import { FormulaDataModel, IActiveDirtyManagerService, ISuperTableService, SetFormulaCalculationResultMutation } from "@univerjs/engine-formula";
import { AsyncLock, createIdentifier, Disposable as Disposable3, ICommandService as ICommandService3, IConfigService, ObjectMatrix as ObjectMatrix3, setDependencies as setDependencies3 } from "@univerjs/core";
import { ENGINE_FORMULA_PLUGIN_CONFIG_KEY, FormulaDataModel as FormulaDataModel2, FormulaExecuteStageType, IFeatureCalculationManagerService, IFormulaCurrentConfigService, IFormulaDependencyGenerator, IFormulaRuntimeService, IOtherFormulaManagerService, ISuperTableService as ISuperTableService2, SetArrayFormulaDataMutation, SetFormulaCalculationResultMutation as SetFormulaCalculationResultMutation2 } from "@univerjs/engine-formula";
import { ExternalReferenceModel, IFormulaReferenceDataService } from "@univerjs-pro/engine-formula";
import { Subject } from "rxjs";
import { Buffer } from "node:buffer";
var XLSX_WORKBOOK_CALCULATION_RESOURCE = "UNIVER_CLI_XLSX_WORKBOOK_CALCULATION_PLUGIN",
  EXTERNAL_DATA_RESOURCE = "SHEET_EXTERNAL_DATA_PLUGIN",
  EXTERNAL_DATA_SIGNATURE = "external_data",
  RUST_UPSERT_REFERENCE_DATA_MUTATION_ID = "formula.mutation.upsert-reference-data",
  RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID = "formula.mutation.upsert-projection-workbook",
  RUST_SET_SUPER_TABLES_MUTATION_ID = "formula.mutation.set-super-tables",
  RUST_FORMULA_RELEVANT_MUTATIONS = /* @__PURE__ */new Set(["sheet.mutation.set-range-values", "sheet.mutation.insert-row", "sheet.mutation.insert-col", "sheet.mutation.insert-sheet", "sheet.mutation.move-range", "sheet.mutation.move-rows", "sheet.mutation.move-columns", "sheet.mutation.move-cols", "sheet.mutation.remove-col", "sheet.mutation.remove-rows", "sheet.mutation.remove-sheet", "sheet.mutation.set-col-hidden", "sheet.mutation.set-col-visible", "sheet.mutation.set-row-hidden", "sheet.mutation.set-row-visible", "sheet.mutation.set-worksheet-name", "sheet.mutation.reorder-range", "sheet.mutation.set-worksheet-row-count", "sheet.mutation.set-worksheet-column-count", "formula.mutation.set-array-formula-data", "formula.mutation.set-defined-name", "formula.mutation.set-feature-calculation", "formula.mutation.set-formula-data", "formula.mutation.set-image-formula-data", "formula.mutation.set-other-formula", "formula.mutation.set-super-table", RUST_SET_SUPER_TABLES_MUTATION_ID, "formula.mutation.set-super-table-option", "formula.mutation.remove-defined-name", "formula.mutation.remove-feature-calculation", "formula.mutation.remove-other-formula", "formula.mutation.remove-super-table", RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID]),
  RUST_INCREMENTAL_DEPENDENCY_MUTATIONS = /* @__PURE__ */new Set(["sheet.mutation.set-range-values"]);
export { RUST_UPSERT_REFERENCE_DATA_MUTATION_ID, RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID, RUST_FORMULA_RELEVANT_MUTATIONS, RUST_INCREMENTAL_DEPENDENCY_MUTATIONS };
export { RUST_SET_SUPER_TABLES_MUTATION_ID, XLSX_WORKBOOK_CALCULATION_RESOURCE, EXTERNAL_DATA_RESOURCE, EXTERNAL_DATA_SIGNATURE };
