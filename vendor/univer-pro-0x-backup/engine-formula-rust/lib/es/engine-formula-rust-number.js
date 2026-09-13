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
import { ensureNativeBinding, nativeBinding, parseJsonOutput } from "./internal-glue.js";
function formatNumberBatchOnRust(inputJson) {
  if (!nativeBinding) throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustNumfmtFormatBatch(inputJson);
}
function parseNumberFormatInputBatchOnRust(inputJson) {
  if (!nativeBinding) throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustNumfmtParseBatch(inputJson);
}
async function formatNumberBatch(input) {
  return await ensureNativeBinding(), parseJsonOutput(formatNumberBatchOnRust(JSON.stringify(input)));
}
async function parseNumberFormatBatch(input) {
  return await ensureNativeBinding(), parseJsonOutput(parseNumberFormatInputBatchOnRust(JSON.stringify(input)));
}
export { formatNumberBatch, parseNumberFormatBatch };
