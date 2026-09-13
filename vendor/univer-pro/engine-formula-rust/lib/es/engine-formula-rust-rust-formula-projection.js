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
import { loadSnapshotOnRust } from "./engine-formula-rust-load-snapshot-on-rust.js";
import { serializeRuntimeWorkbookSnapshots } from "./engine-formula-rust-runtime-workbook-snapshots.js";
import { createFormulaProjectionDesyncSignal } from "./engine-formula-rust-formula-projection-desync-signal.js";
import { applyMutationOnRust } from "./engine-formula-rust-mutation-on-rust.js";
import { executeDirtyFormulasOnRust, normalizeRustEngineMutation } from "./internal-glue.js";
import { isRustIncrementalDependencyMutation } from "./engine-formula-rust-rust-incremental-dependency.js";
import { syncRustFormulaDependenciesOnRust } from "./engine-formula-rust-sync-rust-formula-dependencies-on-rust.js";
import { markRustFormulaDirtyOnRust } from "./engine-formula-rust-mark-rust-formula-dirty-on-rust.js";
import { rustExecutionOutputToFormulaCalculationPatch } from "./engine-formula-rust-rust-execution-output-to-formula-calculation-patch.js";
import { clearRustFormulaDirtyOnRust } from "./engine-formula-rust-clear-rust-formula-dirty-on-rust.js";
import { clearRustFormulaDependenciesOnRust } from "./engine-formula-rust-clear-rust-formula-dependencies-on-rust.js";
import { disposeWorkbookOnRust } from "./engine-formula-rust-dispose-workbook-on-rust.js";
import { loadNativeBinding } from "./engine-formula-rust-load-native-binding.js";
var RustFormulaProjectionService = class {
  _nativeLoaded = !1;
  async load(workbooks) {
    await this._ensureNativeLoaded();
    try {
      return {
        stats: JSON.parse(loadSnapshotOnRust(JSON.stringify(serializeRuntimeWorkbookSnapshots(workbooks))))
      };
    } catch (error) {
      return {
        desync: createFormulaProjectionDesyncSignal("snapshot-load-failed", error),
        errors: [errorToFormulaCalculationError("RUST_FORMULA_LOAD_ERROR", error)]
      };
    }
  }
  async applyMutation(mutation) {
    await this._ensureNativeLoaded();
    try {
      return {
        stats: JSON.parse(applyMutationOnRust(JSON.stringify(normalizeRustEngineMutation(mutation)))),
        dependencyInvalidated: !isRustIncrementalDependencyMutation(mutation.id)
      };
    } catch (error) {
      return {
        dependencyInvalidated: !0,
        desync: createFormulaProjectionDesyncSignal("mutation-apply-failed", error, mutation.id),
        errors: [errorToFormulaCalculationError("RUST_FORMULA_MUTATION_ERROR", error)]
      };
    }
  }
  async syncFormulaDependencies(input) {
    return await this._ensureNativeLoaded(), JSON.parse(syncRustFormulaDependenciesOnRust(JSON.stringify(input)));
  }
  async markDirty(input) {
    return await this._ensureNativeLoaded(), JSON.parse(markRustFormulaDirtyOnRust(JSON.stringify(input)));
  }
  async calculateDirty(maxIteration = 1) {
    await this._ensureNativeLoaded();
    try {
      let output = JSON.parse(executeDirtyFormulasOnRust(maxIteration, !1, !1, !0));
      return rustExecutionOutputToFormulaCalculationPatch(output);
    } catch (error) {
      return {
        unitData: {},
        unitOtherData: {},
        desync: createFormulaProjectionDesyncSignal("dirty-calculation-failed", error),
        errors: [errorToFormulaCalculationError("RUST_FORMULA_CALCULATION_ERROR", error)]
      };
    }
  }
  async reset() {
    await this._ensureNativeLoaded();
    try {
      return clearRustFormulaDirtyOnRust(), clearRustFormulaDependenciesOnRust(JSON.stringify({
        unitId: "",
        clearSheetFormulas: !0,
        clearFeatureFormulas: !0,
        clearOtherFormulas: !0
      })), {
        stats: JSON.parse(loadSnapshotOnRust(JSON.stringify({
          workbooks: []
        })))
      };
    } catch (error) {
      return {
        desync: createFormulaProjectionDesyncSignal("projection-reset-failed", error),
        errors: [errorToFormulaCalculationError("RUST_FORMULA_RESET_ERROR", error)]
      };
    }
  }
  async disposeWorkbook(unitId) {
    await this._ensureNativeLoaded();
    try {
      return {
        stats: JSON.parse(disposeWorkbookOnRust(unitId))
      };
    } catch (error) {
      return {
        desync: createFormulaProjectionDesyncSignal("workbook-dispose-failed", error),
        errors: [errorToFormulaCalculationError("RUST_FORMULA_DISPOSE_ERROR", error)]
      };
    }
  }
  async _ensureNativeLoaded() {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0);
  }
};
function errorToFormulaCalculationError(code, error) {
  return {
    code,
    message: error instanceof Error ? error.message : String(error)
  };
}
export { RustFormulaProjectionService };
