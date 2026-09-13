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
import { isRecord, name, nativeBinding, normalizeRustEngineMutation, rustEngineSyncState, serializeCellData, serializeRuntimeSuperTable } from "./internal-glue.js";
import { RUST_UPSERT_REFERENCE_DATA_MUTATION_ID } from "./engine-formula-rust-rust-upsert-reference-data-mutation-id.js";
import { loadNativeBinding } from "./engine-formula-rust-load-native-binding.js";
import { serializeRuntimeWorkbookSnapshots } from "./engine-formula-rust-runtime-workbook-snapshots.js";
import { createProjectionWorkbookUpsertMutation } from "./engine-formula-rust-projection-workbook-upsert.js";
import { disposeWorkbookOnRust } from "./engine-formula-rust-dispose-workbook-on-rust.js";
import { disposeAllWorkbooksOnRust } from "./engine-formula-rust-dispose-all-workbooks-on-rust.js";
import { loadSnapshotOnRust } from "./engine-formula-rust-load-snapshot-on-rust.js";
import { applyMutationOnRust } from "./engine-formula-rust-mutation-on-rust.js";
import { isRustIncrementalDependencyMutation } from "./engine-formula-rust-rust-incremental-dependency.js";
import { isRustFormulaRelevantMutation } from "./engine-formula-rust-rust-formula-relevant.js";
function loadSnapshotBinaryOnRust(snapshotBytes) {
  if (!nativeBinding) throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineLoadSnapshotBinary(snapshotBytes);
}
function createReferenceDataUpsertMutations(config, needs, tableService) {
  let unitNameMap = config.unitNameMap,
    grouped = /* @__PURE__ */new Map();
  for (let need of needs) {
    let key = `${need.unitId}\0${need.sheetId}`,
      group = grouped.get(key) ?? [];
    group.push(need), grouped.set(key, group);
  }
  return Array.from(grouped.values()).flatMap(group => {
    let first = group[0],
      dataUnitId = first.dataUnitId ?? first.unitId,
      unitData = config.allUnitData?.[dataUnitId],
      sheetNameMap = config.unitSheetNameMap?.[dataUnitId] ?? {},
      resolvedSheetId = unitData?.[first.sheetId] ? first.sheetId : sheetNameMap[first.sheetId] ?? first.sheetId,
      sheet = unitData?.[resolvedSheetId];
    if (!sheet) return [];
    let sheetName = Object.entries(sheetNameMap).find(([, sheetId]) => sheetId === resolvedSheetId)?.[0] ?? first.sheetId,
      ranges = group.map(({
        range
      }) => range),
      tables = Object.fromEntries(group.flatMap(({
        tableName
      }) => tableName ? [tableName] : []).filter((tableName, index, names) => names.indexOf(tableName) === index).flatMap(tableName => {
        let table = tableService?.getTable(dataUnitId, tableName),
          serialized = isRecord(table) ? serializeRuntimeSuperTable(table) : null;
        return serialized ? [[tableName, serialized]] : [];
      }));
    return [{
      id: RUST_UPSERT_REFERENCE_DATA_MUTATION_ID,
      params: {
        unitId: first.unitId,
        name: unitNameMap?.[dataUnitId]?.name,
        sheet: {
          name: sheetName,
          sheetId: resolvedSheetId,
          rowCount: sheet.rowCount,
          columnCount: sheet.columnCount,
          coverage: ranges,
          cellData: serializeCellDataInRanges(sheet.cellData, ranges)
        },
        ...(Object.keys(tables).length > 0 ? {
          tables
        } : {})
      },
      dirtyRanges: ranges.map(range => ({
        unitId: first.unitId,
        sheetId: resolvedSheetId,
        range
      }))
    }];
  });
}
function serializeCellDataInRanges(cellData, ranges) {
  let serialized = serializeCellData(cellData),
    result = {};
  for (let [rowKey, row] of Object.entries(serialized)) {
    let rowIndex = Number(rowKey);
    for (let [columnKey, value] of Object.entries(row)) {
      let columnIndex = Number(columnKey);
      ranges.some(range => rowIndex >= range.startRow && rowIndex <= range.endRow && columnIndex >= range.startColumn && columnIndex <= range.endColumn) && ((result[rowIndex] ??= {})[columnIndex] = value);
    }
  }
  return result;
}
function markRustSnapshotLoaded() {
  rustEngineSyncState.snapshotEpoch += 1, rustEngineSyncState.dependencyInvalidationEpoch += 1;
}
function markRustFormulaDependenciesInvalidated() {
  rustEngineSyncState.dependencyInvalidationEpoch += 1;
}
function emitRustEngineSyncDebugEvent(event) {
  let hook = globalThis.__UNIVER_RUST_FORMULA_DEBUG_HOOK__;
  typeof hook == "function" && hook(event);
}
function summarizeObjectMatrixPayload(value) {
  if (!value || typeof value != "object") return {};
  let cellValueCells = 0;
  for (let row of Object.values(value)) !row || typeof row != "object" || (cellValueCells += Object.keys(row).length);
  return {
    cellValueRows: Object.keys(value).length,
    cellValueCells
  };
}
function hasObjectMatrixValues(value) {
  return !value || typeof value != "object" ? !1 : Object.values(value).some(row => row != null && typeof row == "object" && Object.keys(row).length > 0);
}
function hasRecordEntries(value) {
  return value != null && typeof value == "object" && Object.keys(value).length > 0;
}
function countDisplayPrecisionCells(snapshot) {
  let count = 0;
  for (let workbook of snapshot.workbooks) for (let sheet of workbook.sheets) for (let row of Object.values(sheet.cellData)) for (let cell of Object.values(row)) typeof cell.displayPrecision == "number" && (count += 1);
  return count;
}
var RustEngineSyncController = class extends Disposable {
  constructor(_commandService) {
    super();
    this._commandService = _commandService;
    this._initialize();
  }
  _commandService;
  _nativeReady = !1;
  _snapshotLoaded = !1;
  _projectionLoadPromise = null;
  _projectionDeltaBarrier = Promise.resolve();
  _pendingMutations = [];
  _projectionManagedTableUnits = /* @__PURE__ */new Set();
  _initialize() {
    this.disposeWithMe(this._commandService.onCommandExecuted((command, options) => {
      this._shouldSyncMutation(command, options) && this._queueOrSyncMutation(this._serializeMutation(command, options));
    }));
  }
  async loadProjection(workbooks) {
    let loadPromise = this._loadProjection(workbooks);
    this._projectionLoadPromise = loadPromise;
    try {
      await loadPromise;
    } finally {
      this._projectionLoadPromise === loadPromise && (this._projectionLoadPromise = null);
    }
  }
  async waitForProjectionLoad() {
    await this._projectionLoadPromise;
    let barrier;
    do barrier = this._projectionDeltaBarrier, await barrier; while (barrier !== this._projectionDeltaBarrier);
  }
  setProjectionDeltaBarrier(barrier) {
    this._projectionDeltaBarrier = barrier;
  }
  async _loadProjection(workbooks) {
    await loadNativeBinding(), this._nativeReady = !0;
    let serializeStartedAt = performance.now(),
      snapshot = serializeRuntimeWorkbookSnapshots(workbooks);
    this._loadSerializedSnapshot(snapshot, performance.now() - serializeStartedAt);
  }
  applyProjectionMutation(mutation) {
    this._queueOrSyncMutation(mutation);
  }
  upsertProjectionWorkbook(workbook) {
    this._queueOrSyncMutation(createProjectionWorkbookUpsertMutation(workbook));
  }
  setProjectionManagedTableUnit(unitId) {
    this._projectionManagedTableUnits.add(unitId);
  }
  unsetProjectionManagedTableUnit(unitId) {
    this._projectionManagedTableUnits.delete(unitId);
  }
  upsertReferenceData(config, needs, tableService) {
    let mutations = createReferenceDataUpsertMutations(config, needs, tableService);
    return mutations.forEach(mutation => this._queueOrSyncMutation(mutation)), mutations.length;
  }
  disposeProjectionWorkbook(unitId) {
    if (!(!this._nativeReady || !this._snapshotLoaded)) try {
      disposeWorkbookOnRust(unitId), markRustFormulaDependenciesInvalidated();
    } catch {
      this._markProjectionDesynced();
    }
  }
  dispose() {
    if (super.dispose(), this._pendingMutations.length = 0, this._projectionManagedTableUnits.clear(), this._projectionLoadPromise = null, this._projectionDeltaBarrier = Promise.resolve(), !this._nativeReady) {
      this._snapshotLoaded = !1;
      return;
    }
    try {
      disposeAllWorkbooksOnRust();
    } catch {
      this._markProjectionDesynced();
      return;
    }
    this._nativeReady = !1, this._snapshotLoaded = !1;
  }
  _loadSerializedSnapshot(snapshot, serializeMs) {
    let precisionAsDisplayedWorkbookCount = snapshot.workbooks.filter(workbook => workbook.calculation?.fullPrecision === !1).length,
      displayPrecisionCellCount = countDisplayPrecisionCells(snapshot),
      pendingCountCoveredBySnapshot = this._pendingMutations.length,
      stringifyStartedAt = performance.now(),
      snapshotJson = JSON.stringify(snapshot),
      stringifyMs = performance.now() - stringifyStartedAt,
      snapshotBuffer = globalThis.Buffer?.from(snapshotJson),
      nativeStartedAt = performance.now(),
      nativeOutput = snapshotBuffer ? loadSnapshotBinaryOnRust(snapshotBuffer) : loadSnapshotOnRust(snapshotJson),
      nativeMs = performance.now() - nativeStartedAt,
      nativeTimings;
    try {
      nativeTimings = JSON.parse(nativeOutput).timingsMs;
    } catch {
      nativeTimings = void 0;
    }
    emitRustEngineSyncDebugEvent({
      type: "loadSnapshot",
      payload: {
        workbookCount: snapshot.workbooks.length,
        serializeMs,
        stringifyMs,
        nativeMs,
        precisionAsDisplayedWorkbookCount,
        displayPrecisionCellCount,
        snapshotBytes: snapshotBuffer?.byteLength ?? snapshotJson.length,
        transport: snapshotBuffer ? "binary-json" : "string-json",
        nativeTimings
      }
    }), this._pendingMutations.splice(0, pendingCountCoveredBySnapshot), this._snapshotLoaded = !0, markRustSnapshotLoaded(), this._flushPendingMutations();
  }
  _queueOrSyncMutation(mutation) {
    if (!this._nativeReady || !this._snapshotLoaded) {
      this._pendingMutations.push(mutation);
      return;
    }
    this._syncMutation(mutation);
  }
  _flushPendingMutations() {
    for (; this._pendingMutations.length > 0;) {
      let mutation = this._pendingMutations.shift();
      mutation && this._syncMutation(mutation);
    }
  }
  _syncMutation(mutation) {
    let totalStartedAt = performance.now(),
      stringifyStartedAt = performance.now(),
      payload = JSON.stringify(normalizeRustEngineMutation(mutation)),
      stringifyMs = performance.now() - stringifyStartedAt,
      nativeStartedAt = performance.now();
    try {
      applyMutationOnRust(payload), isRustIncrementalDependencyMutation(mutation.id) || markRustFormulaDependenciesInvalidated();
    } catch {
      this._markProjectionDesynced();
    } finally {
      emitRustEngineSyncDebugEvent({
        type: "applyMutation",
        payload: {
          id: mutation.id,
          stringifyMs,
          nativeMs: performance.now() - nativeStartedAt,
          totalMs: performance.now() - totalStartedAt,
          ...summarizeObjectMatrixPayload(mutation.params?.cellValue)
        }
      });
    }
  }
  _markProjectionDesynced() {
    this._nativeReady = !1, this._snapshotLoaded = !1;
  }
  _shouldSyncMutation(command, options) {
    if (command.type !== CommandType.MUTATION || !isRustFormulaRelevantMutation(command.id) || (command.id === "formula.mutation.set-super-table" || command.id === "formula.mutation.remove-super-table") && hasUnitId(command.params) && this._projectionManagedTableUnits.has(command.params.unitId)) return !1;
    let syncOptions = options;
    if (syncOptions?.fromRustFormulaEngine === !0 || syncOptions?.applyFormulaCalculationResult === !0 || command.id === "sheet.mutation.set-range-values" && !hasObjectMatrixValues(command.params?.cellValue)) return !1;
    if (command.id === "formula.mutation.set-formula-calculation-result") {
      let params = command.params;
      if (!hasRecordEntries(params?.unitData) && !hasRecordEntries(params?.unitOtherData)) return !1;
    }
    if (command.id === "formula.mutation.set-array-formula-data") {
      let params = command.params;
      if (!hasRecordEntries(params?.arrayFormulaRange) && !hasRecordEntries(params?.arrayFormulaCellData) && !hasRecordEntries(params?.arrayFormulaEmbedded)) return !1;
    }
    return !0;
  }
  _serializeMutation(command, options) {
    let dirtyRanges = options?.dirtyRanges;
    return {
      id: command.id,
      params: command.params ?? {},
      dirtyRanges: Array.isArray(dirtyRanges) ? dirtyRanges : []
    };
  }
};
function hasUnitId(value) {
  return value != null && typeof value == "object" && "unitId" in value && typeof value.unitId == "string";
}
export { RustEngineSyncController };
