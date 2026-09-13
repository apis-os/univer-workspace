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
var IRustCalculateFormulaService = createIdentifier("engine-formula-rust.calculate-formula.service"),
  DEFAULT_INTERVAL_COUNT = 500,
  MAX_FEATURE_CALCULATION_PASSES = 8,
  MAX_EXTERNAL_REFERENCE_PASSES = 8,
  FORMULA_TREE_TYPE_NORMAL = 0,
  FORMULA_TREE_TYPE_OTHER = 1,
  FORMULA_TREE_TYPE_FEATURE = 2;
export { IRustCalculateFormulaService };
export { MAX_FEATURE_CALCULATION_PASSES, MAX_EXTERNAL_REFERENCE_PASSES, DEFAULT_INTERVAL_COUNT, FORMULA_TREE_TYPE_NORMAL, FORMULA_TREE_TYPE_FEATURE, FORMULA_TREE_TYPE_OTHER };
