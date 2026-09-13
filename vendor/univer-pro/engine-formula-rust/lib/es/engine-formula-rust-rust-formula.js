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
import { executeDirtyFormulasOnRust, name, nativeBinding, rustEngineSyncState } from "./internal-glue.js";
import { loadNativeBinding } from "./engine-formula-rust-load-native-binding.js";
import { DEFAULT_INTERVAL_COUNT, FORMULA_TREE_TYPE_FEATURE, FORMULA_TREE_TYPE_NORMAL, FORMULA_TREE_TYPE_OTHER, MAX_EXTERNAL_REFERENCE_PASSES, MAX_FEATURE_CALCULATION_PASSES } from "./engine-formula-rust-irust-formula.js";
import { syncRustFormulaDependenciesOnRust } from "./engine-formula-rust-sync-rust-formula-dependencies-on-rust.js";
import { markRustFormulaDirtyOnRust } from "./engine-formula-rust-mark-rust-formula-dirty-on-rust.js";
import { rustExecutionOutputToFormulaCalculationPatch } from "./engine-formula-rust-rust-execution-output-to-formula-calculation-patch.js";
import { executeOnRust } from "./engine-formula-rust-execute-on-rust.js";
import { getRustDirtyDependenciesOnRust } from "./engine-formula-rust-rust-dirty-dependencies-on-rust.js";
import { buildRustDependencyGraphOnRust } from "./engine-formula-rust-rust-dependency-graph-on-rust.js";
function inspectRustFormulaDependencyGraphOnRust() {
  if (!nativeBinding) throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineInspectFormulaDependencyGraph();
}
function getRustEngineSyncState() {
  return {
    ...rustEngineSyncState
  };
}
function serializeRuntimeFeatureCellData(runtimeCellData) {
  let result = {};
  return Object.entries(runtimeCellData ?? {}).forEach(([unitId, sheetMap]) => {
    if (!sheetMap) return;
    let unitData = {};
    result[unitId] = unitData, Object.entries(sheetMap).forEach(([sheetId, matrix]) => {
      if (!matrix) return;
      let sheetData = {};
      unitData[sheetId] = sheetData, matrix.forValue((row, column, cell) => {
        if (cell == null) return;
        let rowData = sheetData[row] ??= {};
        rowData[column] = {
          v: cell.v,
          ...(typeof cell.t == "number" ? {
            t: cell.t
          } : {}),
          ...(cell.p != null ? {
            p: cell.p
          } : {}),
          ...(typeof cell.f == "string" ? {
            f: cell.f
          } : {}),
          ...(typeof cell.si == "string" ? {
            si: cell.si
          } : {}),
          ...(typeof cell.ref == "string" ? {
            ref: cell.ref
          } : {}),
          ...(typeof cell.xf == "string" ? {
            xf: cell.xf
          } : {}),
          ...(cell.s != null ? {
            s: cell.s
          } : {})
        };
      });
    });
  }), result;
}
function emitRustFormulaDebugEvent(event) {
  let hook = globalThis.__UNIVER_RUST_FORMULA_DEBUG_HOOK__;
  typeof hook == "function" && hook(event);
}
function firstResultBatchValue(output) {
  return output.resultBatches?.find(batch => batch.values.length > 0)?.values[0];
}
function resultBatchSheetCounts(output) {
  let counts = {};
  for (let batch of output.resultBatches ?? []) {
    let key = `${batch.unitId}/${batch.sheetId}`;
    counts[key] = (counts[key] ?? 0) + batch.values.length;
  }
  return counts;
}
var RustCalculateFormulaService = class extends Disposable3 {
  constructor(_configService, _currentConfigService, _runtimeService, _formulaDependencyGenerator, _featureCalculationManagerService, _otherFormulaManagerService, _commandService, _rustEngineSyncController, _formulaDataModel, _formulaReferenceDataService, _excelExternalReferenceModel, _superTableService) {
    super();
    this._configService = _configService;
    this._currentConfigService = _currentConfigService;
    this._runtimeService = _runtimeService;
    this._formulaDependencyGenerator = _formulaDependencyGenerator;
    this._featureCalculationManagerService = _featureCalculationManagerService;
    this._otherFormulaManagerService = _otherFormulaManagerService;
    this._commandService = _commandService;
    this._rustEngineSyncController = _rustEngineSyncController;
    this._formulaDataModel = _formulaDataModel;
    this._formulaReferenceDataService = _formulaReferenceDataService;
    this._excelExternalReferenceModel = _excelExternalReferenceModel;
    this._superTableService = _superTableService;
    this._commandService.hasCommand(SetFormulaCalculationResultMutation2.id) || this.disposeWithMe(this._commandService.registerCommand(SetFormulaCalculationResultMutation2)), this._commandService.hasCommand(SetArrayFormulaDataMutation.id) || this.disposeWithMe(this._commandService.registerCommand(SetArrayFormulaDataMutation));
  }
  _configService;
  _currentConfigService;
  _runtimeService;
  _formulaDependencyGenerator;
  _featureCalculationManagerService;
  _otherFormulaManagerService;
  _commandService;
  _rustEngineSyncController;
  _formulaDataModel;
  _formulaReferenceDataService;
  _excelExternalReferenceModel;
  _superTableService;
  _executionInProgressListener$ = new Subject();
  executionInProgressListener$ = this._executionInProgressListener$.asObservable();
  _executionCompleteListener$ = new Subject();
  executionCompleteListener$ = this._executionCompleteListener$.asObservable();
  _executeLock = new AsyncLock();
  _nativeLoaded = !1;
  _syncedSnapshotEpoch = -1;
  _syncedDependencyInvalidationEpoch = -1;
  _syncedExternalReferenceSignature = "{}";
  _externalFormulaDatasetConfig;
  _externalRequestCounter = 0;
  _externalRequestGeneration = -1;
  _externalInflight = /* @__PURE__ */new Map();
  _externalCompleted = /* @__PURE__ */new Map();
  dispose() {
    super.dispose(), this._executionInProgressListener$.complete(), this._executionCompleteListener$.complete();
  }
  stopFormulaExecution() {
    this._runtimeService.stopExecution();
  }
  setRuntimeFeatureCellData(featureId, featureData) {
    this._runtimeService.setRuntimeFeatureCellData(featureId, featureData);
  }
  setRuntimeFeatureRange(featureId, featureRange) {
    this._runtimeService.setRuntimeFeatureRange(featureId, featureRange);
  }
  async execute(formulaDatasetConfig) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), await this._rustEngineSyncController.waitForProjectionLoad(), this._externalFormulaDatasetConfig = formulaDatasetConfig, this._currentConfigService.load(formulaDatasetConfig), this._externalRequestGeneration++, this._externalInflight.clear(), this._externalCompleted.clear(), this._runtimeService.setFormulaExecuteStage(FormulaExecuteStageType.START), this._executionInProgressListener$.next(this._runtimeService.getRuntimeState()), this._runtimeService.reset();
    let cycleReferenceCount = Math.max(formulaDatasetConfig.maxIteration || 1, 1);
    await this._executeLock.acquire("FORMULA_EXECUTION_LOCK", async () => {
      this._runtimeService.setFormulaCycleIndex(0), (await this._executeStep(cycleReferenceCount)) > 0 ? this._runtimeService.markedAsSuccessfullyExecuted() : this._runtimeService.markedAsNoFunctionsExecuted(), this._runtimeService.setFormulaExecuteStage(FormulaExecuteStageType.CALCULATION_COMPLETED), this._executionInProgressListener$.next(this._runtimeService.getRuntimeState()), this._executionCompleteListener$.next(this._runtimeService.getAllRuntimeData()), this._runtimeService.reset();
    });
  }
  async _executeStep(maxIteration) {
    let syncedFeatures = this._syncRustFormulaDependencies(void 0, !0),
      previousFeatureSignatures = this._featureSignatureMap(syncedFeatures),
      executeStartedAt = performance.now(),
      outputJson = executeDirtyFormulasOnRust(maxIteration, !1, !1, !0),
      nativeAndSerializeMs = performance.now() - executeStartedAt,
      parseStartedAt = performance.now(),
      output = JSON.parse(outputJson),
      calculatedNodeCount = output.calculatedNodeCount,
      parseMs = performance.now() - parseStartedAt;
    output = await this._resolveExternalReferenceNeeds(output, maxIteration);
    let applyStartedAt = performance.now(),
      applyBreakdown = await this._applyRustDependencyOutput(output),
      applyMs = performance.now() - applyStartedAt;
    if (emitRustFormulaDebugEvent({
      type: "executeDirtyFormulas",
      payload: {
        calculatedNodeCount: output.calculatedNodeCount,
        hasCycle: output.hasCycle,
        cycleIterationCount: output.cycleIterationCount,
        parallelBatchCount: output.parallelBatchCount,
        parallelNodeCount: output.parallelNodeCount,
        errorCount: output.errors.length,
        resultBatchCount: output.resultBatches?.length ?? 0,
        firstResultBatchValue: firstResultBatchValue(output),
        resultBatchSheetCounts: resultBatchSheetCounts(output),
        timings: output.timings,
        functionProfile: output.functionProfile,
        bridgeTimings: {
          nativeAndSerializeMs,
          outputBytes: outputJson.length,
          parseMs,
          applyMs,
          applyConvertMs: applyBreakdown.convertMs,
          applyCommandMs: applyBreakdown.commandMs
        }
      }
    }), syncedFeatures.length > 0) for (let pass = 0; pass < MAX_FEATURE_CALCULATION_PASSES; pass++) {
      let refreshedFeatures = this._syncRustFormulaDependencyDefinitions(),
        changedFeatures = refreshedFeatures.filter(feature => previousFeatureSignatures.get(this._featureKey(feature)) !== feature.signature);
      if (changedFeatures.length === 0) break;
      this._markRustFormulaDirty(this._currentConfigService.getDirtyData(), this._dirtyFeatureMapFor(changedFeatures)), executeStartedAt = performance.now(), outputJson = executeDirtyFormulasOnRust(maxIteration, !1, !1, !0), nativeAndSerializeMs = performance.now() - executeStartedAt, parseStartedAt = performance.now(), output = JSON.parse(outputJson), calculatedNodeCount += output.calculatedNodeCount, parseMs = performance.now() - parseStartedAt, output = await this._resolveExternalReferenceNeeds(output, maxIteration), applyStartedAt = performance.now(), applyBreakdown = await this._applyRustDependencyOutput(output), applyMs = performance.now() - applyStartedAt, emitRustFormulaDebugEvent({
        type: "executeDirtyFormulas",
        payload: {
          calculatedNodeCount: output.calculatedNodeCount,
          hasCycle: output.hasCycle,
          cycleIterationCount: output.cycleIterationCount,
          parallelBatchCount: output.parallelBatchCount,
          parallelNodeCount: output.parallelNodeCount,
          errorCount: output.errors.length,
          resultBatchCount: output.resultBatches?.length ?? 0,
          firstResultBatchValue: firstResultBatchValue(output),
          resultBatchSheetCounts: resultBatchSheetCounts(output),
          timings: output.timings,
          functionProfile: output.functionProfile,
          bridgeTimings: {
            nativeAndSerializeMs,
            outputBytes: outputJson.length,
            parseMs,
            applyMs,
            applyConvertMs: applyBreakdown.convertMs,
            applyCommandMs: applyBreakdown.commandMs
          }
        }
      }), previousFeatureSignatures = this._featureSignatureMap(refreshedFeatures);
    }
    return calculatedNodeCount;
  }
  async _resolveExternalReferenceNeeds(initialOutput, maxIteration) {
    let config = this._externalFormulaDatasetConfig;
    if (!config) return initialOutput;
    let output = initialOutput;
    for (let pass = 0; pass < MAX_EXTERNAL_REFERENCE_PASSES; pass++) {
      let rangeNeeds = output.needsData ?? [],
        tableNeeds = output.tableNeedsData ?? [];
      if (rangeNeeds.length === 0 && tableNeeds.length === 0) break;
      let loadedRanges = await this._loadExternalReferenceNeeds(config, output, rangeNeeds, tableNeeds);
      if (loadedRanges.length === 0 || this._rustEngineSyncController.upsertReferenceData({
        ...config,
        allUnitData: this._currentConfigService.getUnitData(),
        unitSheetNameMap: this._currentConfigService.getSheetNameMap(),
        unitNameMap: this._currentConfigService.getUnitNameMap()
      }, loadedRanges, this._superTableService) === 0) break;
      this._syncRustFormulaDependencies(), output = JSON.parse(executeDirtyFormulasOnRust(maxIteration, !1, !1, !0));
    }
    return output;
  }
  async _loadExternalReferenceNeeds(config, output, rangeNeeds, tableNeeds) {
    let loaded = [];
    for (let need of rangeNeeds) {
      let binding = this._resolveRustExternalBinding(config, need.unitId);
      !binding || (await this._loadRustExternalReference(binding, {
        sheetName: need.sheetId,
        range: need.range
      })) !== !0 || loaded.push({
        ...need,
        ...(binding.dataUnitId !== need.unitId ? {
          dataUnitId: binding.dataUnitId
        } : {})
      });
    }
    for (let need of tableNeeds) {
      let binding = this._resolveRustExternalBinding(config, need.unitId);
      if (!binding) continue;
      let loadedReference = await this._loadRustExternalReference(binding, {
        tableName: need.tableName
      });
      if (loadedReference !== !0) {
        this._applyTableReferenceLoadError(output, need, loadedReference);
        continue;
      }
      let table = this._superTableService.getTable(binding.dataUnitId, need.tableName);
      table && loaded.push({
        unitId: need.unitId,
        dataUnitId: binding.dataUnitId,
        tableName: need.tableName,
        sheetId: table.sheetId,
        range: table.range
      });
    }
    return loaded;
  }
  _applyTableReferenceLoadError(output, need, error) {
    if (need.formulaId) {
      let unit = output.otherFormulaData ??= {},
        sheet = unit[need.ownerUnitId] ??= {},
        formulas = sheet[need.ownerSheetId] ??= {},
        rows = formulas[need.formulaId] ??= {},
        columns = rows[need.row] ??= {};
      columns[need.column] = error;
      return;
    }
    let batch = output.resultBatches.find(candidate => candidate.unitId === need.ownerUnitId && candidate.sheetId === need.ownerSheetId) ?? {
      unitId: need.ownerUnitId,
      sheetId: need.ownerSheetId,
      rows: [],
      cols: [],
      values: []
    };
    output.resultBatches.includes(batch) || output.resultBatches.push(batch);
    let index = batch.rows.findIndex((row, index2) => row === need.row && batch.cols[index2] === need.column);
    index >= 0 ? batch.values[index] = error : (batch.rows.push(need.row), batch.cols.push(need.column), batch.values.push(error));
  }
  async _loadRustExternalReference(binding, range) {
    let generation = this._externalRequestGeneration,
      calculationId = `rust-formula-calculation-${generation}`,
      request = {
        requestId: `rust-external-request-${++this._externalRequestCounter}`,
        calculationId,
        hostUnitId: binding.hostUnitId,
        ...(binding.referenceId ? {
          referenceId: binding.referenceId
        } : {}),
        ...(binding.bindingSlot ? {
          bindingSlot: binding.bindingSlot
        } : {}),
        syntheticUnitId: binding.dataUnitId,
        target: binding.target,
        ranges: [range],
        requireFresh: !0
      },
      key = [generation, binding.hostUnitId, binding.dataUnitId, range.sheetName, range.sheetId, range.tableName, range.range?.startRow, range.range?.endRow, range.range?.startColumn, range.range?.endColumn].join("\0"),
      completed = this._externalCompleted.get(key);
    if (completed != null) return completed;
    let pending = this._externalInflight.get(key);
    pending || (pending = this._formulaReferenceDataService.readData(request), this._externalInflight.set(key, pending));
    let response;
    try {
      response = await pending;
    } finally {
      this._externalInflight.get(key) === pending && this._externalInflight.delete(key);
    }
    return generation !== this._externalRequestGeneration || response.calculationId !== calculationId ? "#N/A" : response.error ? (this._externalCompleted.set(key, response.error), response.error) : response.sheets.length === 0 ? (this._externalCompleted.set(key, "#N/A"), "#N/A") : (this._materializeRustExternalReference(response, binding), this._externalCompleted.set(key, !0), !0);
  }
  _materializeRustExternalReference(response, binding) {
    let unitData = this._currentConfigService.getUnitData(),
      sheetNameMap = this._currentConfigService.getSheetNameMap(),
      unitNameMap = this._currentConfigService.getUnitNameMap(),
      sheets = unitData[binding.dataUnitId] ?? {},
      names = sheetNameMap[binding.dataUnitId] ?? {};
    for (let responseSheet of response.sheets) {
      let current = sheets[responseSheet.sheetId],
        cellData = current?.cellData ?? new ObjectMatrix3();
      for (let {
        row,
        column,
        cell
      } of responseSheet.cells) cellData.setValue(row, column, cell);
      sheets[responseSheet.sheetId] = {
        cellData,
        rowCount: Math.max(current?.rowCount ?? 0, responseSheet.rowCount),
        columnCount: Math.max(current?.columnCount ?? 0, responseSheet.columnCount),
        rowData: current?.rowData ?? {},
        columnData: current?.columnData ?? {}
      }, names[responseSheet.name] = responseSheet.sheetId;
    }
    unitData[binding.dataUnitId] = sheets, sheetNameMap[binding.dataUnitId] = names, unitNameMap[binding.dataUnitId] = {
      name: unitNameMap[binding.dataUnitId]?.name ?? binding.qualifier,
      unitType: binding.target.unitType
    }, this._currentConfigService.registerUnitData(unitData), this._currentConfigService.registerSheetNameMap(sheetNameMap), this._currentConfigService.registerUnitNameMap(unitNameMap);
    for (let table of response.tables ?? []) this._superTableService.registerTable(binding.dataUnitId, table.name, {
      sheetId: table.sheetId,
      range: table.range,
      titleMap: new Map(table.columns.map((column, index) => [column, index])),
      showHeader: table.showHeader
    });
  }
  _resolveRustExternalBinding(config, unitId) {
    let externalReferences = config.externalReferences ?? {};
    for (let [hostUnitId, resource] of Object.entries(externalReferences)) for (let [referenceId, reference] of Object.entries(resource.references)) if (createRustProductExternalSyntheticUnitId(hostUnitId, referenceId) === unitId) return {
      hostUnitId,
      dataUnitId: reference.sourceUnitId,
      qualifier: reference.qualifier,
      referenceId,
      target: {
        name: reference.qualifier,
        unitType: reference.sourceUnitType,
        sourceUnitId: reference.sourceUnitId
      }
    };
    let ooxml = this._parseOoxmlExternalSyntheticUnitId(unitId);
    if (!ooxml) return;
    let binding = this._excelExternalReferenceModel.resolveBinding(ooxml.hostUnitId, String(ooxml.slot));
    if (binding.status === "resolved") return {
      hostUnitId: ooxml.hostUnitId,
      dataUnitId: unitId,
      qualifier: String(ooxml.slot),
      bindingSlot: ooxml.slot,
      target: binding.link.target
    };
  }
  _parseOoxmlExternalSyntheticUnitId(unitId) {
    if (!unitId.startsWith("external:") || unitId.startsWith("external:product:")) return;
    let separator = unitId.lastIndexOf(":");
    if (!(separator <= 9 || !/^\d+$/.test(unitId.slice(separator + 1)))) try {
      return {
        hostUnitId: decodeURIComponent(unitId.slice(9, separator)),
        slot: Number(unitId.slice(separator + 1))
      };
    } catch {
      return;
    }
  }
  _buildRustInput() {
    let unitData = this._currentConfigService.getUnitData(),
      formulaData = this._currentConfigService.getFormulaData(),
      dirtyRanges = this._currentConfigService.getDirtyRanges(),
      config = this._configService.getConfig(ENGINE_FORMULA_PLUGIN_CONFIG_KEY);
    return {
      config: {
        maxIteration: config?.maxIteration ?? 1,
        intervalCount: config?.intervalCount ?? DEFAULT_INTERVAL_COUNT
      },
      formulaData: this._serializeFormulaData(formulaData),
      unitData: this._serializeUnitData(unitData),
      dirtyRanges: dirtyRanges || [],
      definedNames: {}
    };
  }
  _syncRustFormulaDependencies(dirtyUnitFeatureMapOverride, includeExternalReferences = !1) {
    let syncState = getRustEngineSyncState(),
      externalReferences = includeExternalReferences ? this._externalFormulaDatasetConfig?.externalReferences ?? {} : void 0,
      externalReferenceSignature = externalReferences ? JSON.stringify(externalReferences) : this._syncedExternalReferenceSignature,
      shouldSendExternalReferences = includeExternalReferences && (externalReferenceSignature !== "{}" || this._syncedExternalReferenceSignature !== "{}"),
      rebuildSheetFormulas = this._syncedSnapshotEpoch !== syncState.snapshotEpoch || this._syncedDependencyInvalidationEpoch !== syncState.dependencyInvalidationEpoch || shouldSendExternalReferences,
      collectStartedAt = performance.now(),
      state = this._collectRustFormulaDependencySyncState(),
      collectMs = performance.now() - collectStartedAt;
    if (!(shouldSendExternalReferences || rebuildSheetFormulas || state.featureCalculations.length > 0 || state.otherFormulas.length > 0)) return emitRustFormulaDebugEvent({
      type: "syncDependencies",
      payload: {
        rebuildSheetFormulas,
        skipped: !0,
        featureCalculationCount: 0,
        otherFormulaCount: 0,
        syncedFeatureCount: 0,
        timings: {
          collectMs,
          stringifyMs: 0,
          nativeMs: 0,
          parseMs: 0,
          totalMs: collectMs
        }
      }
    }), this._markRustFormulaDirty(state.dirtyData, dirtyUnitFeatureMapOverride, rebuildSheetFormulas), state.syncedFeatures;
    let stringifyStartedAt = performance.now(),
      inputJson = JSON.stringify({
        rebuildSheetFormulas,
        featureCalculations: state.featureCalculations,
        otherFormulas: state.otherFormulas,
        ...(shouldSendExternalReferences ? {
          externalReferences
        } : {})
      }),
      stringifyMs = performance.now() - stringifyStartedAt,
      nativeStartedAt = performance.now(),
      outputJson = syncRustFormulaDependenciesOnRust(inputJson),
      nativeMs = performance.now() - nativeStartedAt,
      parseStartedAt = performance.now(),
      output = JSON.parse(outputJson),
      parseMs = performance.now() - parseStartedAt;
    return emitRustFormulaDebugEvent({
      type: "syncDependencies",
      payload: {
        rebuildSheetFormulas,
        skipped: !1,
        featureCalculationCount: state.featureCalculations.length,
        otherFormulaCount: state.otherFormulas.length,
        syncedFeatureCount: state.syncedFeatures.length,
        timings: {
          collectMs,
          stringifyMs,
          nativeMs,
          parseMs,
          totalMs: collectMs + stringifyMs + nativeMs + parseMs,
          rust: output.timings
        }
      }
    }), rebuildSheetFormulas && (this._syncedSnapshotEpoch = syncState.snapshotEpoch, this._syncedDependencyInvalidationEpoch = syncState.dependencyInvalidationEpoch), includeExternalReferences && (this._syncedExternalReferenceSignature = externalReferenceSignature), this._markRustFormulaDirty(state.dirtyData, dirtyUnitFeatureMapOverride, rebuildSheetFormulas), state.syncedFeatures;
  }
  _syncRustFormulaDependencyDefinitions() {
    let state = this._collectRustFormulaDependencySyncState();
    return syncRustFormulaDependenciesOnRust(JSON.stringify({
      rebuildSheetFormulas: !1,
      featureCalculations: state.featureCalculations,
      otherFormulas: state.otherFormulas
    })), state.syncedFeatures;
  }
  _collectRustFormulaDependencySyncState() {
    let featureCalculations = [],
      syncedFeatures = [],
      dirtyData = this._currentConfigService.getDirtyData(),
      runtimeData = this._runtimeService.getAllRuntimeData();
    this._featureCalculationManagerService.getReferenceExecutorMap().forEach(sheetMap => {
      sheetMap.forEach(featureMap => {
        featureMap.forEach((params, featureId) => {
          let {
              runtimeCellData,
              dirtyRanges: featureDirtyRanges
            } = params.getDirtyData(dirtyData, runtimeData),
            serializedDirtyRanges = this._serializeFeatureDirtyRanges(featureDirtyRanges),
            serializedRuntimeCellData = serializeRuntimeFeatureCellData(runtimeCellData);
          this._runtimeService.setRuntimeFeatureCellData(featureId, runtimeCellData), this._runtimeService.setRuntimeFeatureRange(featureId, featureDirtyRanges), featureCalculations.push({
            unitId: params.unitId,
            sheetId: params.subUnitId,
            featureId,
            dependencyRanges: params.dependencyRanges.map(range => ({
              unitId: range.unitId,
              sheetId: range.sheetId,
              startRow: range.range.startRow,
              endRow: range.range.endRow,
              startColumn: range.range.startColumn,
              endColumn: range.range.endColumn
            })),
            dirtyRanges: serializedDirtyRanges,
            runtimeCellData: serializedRuntimeCellData
          }), syncedFeatures.push({
            unitId: params.unitId,
            sheetId: params.subUnitId,
            featureId,
            signature: JSON.stringify({
              dirtyRanges: serializedDirtyRanges,
              runtimeCellData: serializedRuntimeCellData
            })
          });
        });
      });
    });
    let otherFormulas = [],
      otherFormulaData = this._otherFormulaManagerService.getOtherFormulaData();
    return Object.entries(otherFormulaData).forEach(([unitId, sheetMap]) => {
      sheetMap && Object.entries(sheetMap).forEach(([sheetId, formulaMap]) => {
        formulaMap && Object.entries(formulaMap).forEach(([formulaId, item]) => {
          item && otherFormulas.push({
            unitId,
            sheetId,
            formulaId,
            formula: item.f,
            ranges: item.ranges
          });
        });
      });
    }), {
      dirtyData,
      featureCalculations,
      otherFormulas,
      syncedFeatures
    };
  }
  _markRustFormulaDirty(dirtyData, dirtyUnitFeatureMapOverride, forceCalculationOverride = !1) {
    let payload = {
        forceCalculation: forceCalculationOverride || dirtyData.forceCalculation,
        includeDirtyNodes: !1,
        includeCalculationOrder: !1,
        dirtyRanges: (dirtyData.dirtyRanges ?? []).map(range => ({
          unitId: range.unitId,
          sheetId: range.sheetId,
          startRow: range.range.startRow,
          endRow: range.range.endRow,
          startColumn: range.range.startColumn,
          endColumn: range.range.endColumn
        })),
        dirtyUnitFeatureMap: dirtyUnitFeatureMapOverride ?? dirtyData.dirtyUnitFeatureMap,
        dirtyUnitOtherFormulaMap: dirtyData.dirtyUnitOtherFormulaMap,
        dirtyNameMap: dirtyData.dirtyNameMap,
        dirtyDefinedNameMap: dirtyData.dirtyDefinedNameMap
      },
      stringifyStartedAt = performance.now(),
      inputJson = JSON.stringify(payload),
      stringifyMs = performance.now() - stringifyStartedAt,
      nativeStartedAt = performance.now(),
      outputJson = markRustFormulaDirtyOnRust(inputJson),
      nativeMs = performance.now() - nativeStartedAt,
      rustTimings;
    try {
      rustTimings = JSON.parse(outputJson).timings;
    } catch {
      rustTimings = void 0;
    }
    emitRustFormulaDebugEvent({
      type: "markDirty",
      payload: {
        ...payload,
        timings: {
          stringifyMs,
          nativeMs,
          totalMs: stringifyMs + nativeMs
        },
        rustTimings
      }
    });
  }
  _dirtyFeatureMapFor(features) {
    let dirtyMap = {};
    return features.forEach(({
      unitId,
      sheetId,
      featureId
    }) => {
      dirtyMap[unitId] = dirtyMap[unitId] ?? {}, dirtyMap[unitId][sheetId] = dirtyMap[unitId][sheetId] ?? {}, dirtyMap[unitId][sheetId][featureId] = !0;
    }), dirtyMap;
  }
  _featureKey(feature) {
    return `${feature.unitId}\0${feature.sheetId}\0${feature.featureId}`;
  }
  _featureSignatureMap(features) {
    return new Map(features.map(feature => [this._featureKey(feature), feature.signature]));
  }
  _serializeFeatureDirtyRanges(dirtyRanges) {
    let serialized = [];
    return Object.entries(dirtyRanges).forEach(([unitId, sheetMap]) => {
      sheetMap && Object.entries(sheetMap).forEach(([sheetId, ranges]) => {
        ranges && ranges.forEach(range => {
          serialized.push({
            unitId,
            sheetId,
            startRow: range.startRow,
            endRow: range.endRow,
            startColumn: range.startColumn,
            endColumn: range.endColumn
          });
        });
      });
    }), serialized;
  }
  _serializeFormulaData(formulaData) {
    let result = {};
    if (!formulaData || typeof formulaData != "object") return result;
    for (let [unitId, sheets] of Object.entries(formulaData)) if (!(!sheets || typeof sheets != "object")) {
      result[unitId] = {};
      for (let [sheetId, rows] of Object.entries(sheets)) if (!(!rows || typeof rows != "object")) {
        result[unitId][sheetId] = {};
        for (let [rowStr, cols] of Object.entries(rows)) {
          if (!cols || typeof cols != "object") continue;
          let row = Number(rowStr);
          result[unitId][sheetId][row] = {};
          for (let [colStr, item] of Object.entries(cols)) {
            let col = Number(colStr);
            if (typeof item == "string") result[unitId][sheetId][row][col] = item;else if (item && typeof item == "object" && typeof item.f == "string") {
              let formulaItem = item;
              result[unitId][sheetId][row][col] = {
                f: formulaItem.f,
                si: typeof formulaItem.si == "string" ? formulaItem.si : void 0,
                ref: typeof formulaItem.ref == "string" ? formulaItem.ref : void 0,
                x: typeof formulaItem.x == "number" ? formulaItem.x : void 0,
                y: typeof formulaItem.y == "number" ? formulaItem.y : void 0
              };
            }
          }
        }
      }
    }
    return result;
  }
  _serializeUnitData(unitData) {
    let result = {};
    if (!unitData) return result;
    for (let [unitId, sheets] of Object.entries(unitData)) {
      result[unitId] = {};
      for (let [sheetId, sheet] of Object.entries(sheets)) result[unitId][sheetId] = {
        cellData: this._serializeCellData(sheet.cellData),
        rowCount: sheet.rowCount ?? 0,
        columnCount: sheet.columnCount ?? 0
      };
    }
    return result;
  }
  _serializeCellData(cellData) {
    let result = {};
    if (!cellData || typeof cellData != "object") return result;
    let data = typeof cellData.getMatrix == "function" ? cellData.getMatrix() : cellData;
    for (let [rowStr, cols] of Object.entries(data)) {
      let row = Number(rowStr);
      if (Number.isFinite(row)) {
        result[row] = {};
        for (let [colStr, cell] of Object.entries(cols)) {
          let col = Number(colStr);
          Number.isFinite(col) && (result[row][col] = {
            v: cell?.v ?? null,
            t: cell?.t ?? void 0,
            p: cell?.p ?? void 0,
            f: cell?.f ?? void 0,
            s: cell?.s ?? void 0
          });
        }
      }
    }
    return result;
  }
  _applyRustOutput(_output) {}
  async _applyRustDependencyOutput(output) {
    let convertStartedAt = performance.now(),
      patch = rustExecutionOutputToFormulaCalculationPatch(output),
      convertMs = performance.now() - convertStartedAt,
      commandStartedAt = performance.now();
    return (patch.arrayFormulaRange || patch.arrayFormulaCellData) && (this._formulaDataModel.setArrayFormulaRange(patch.arrayFormulaRange ?? {}), this._formulaDataModel.setArrayFormulaCellData(patch.arrayFormulaCellData ?? {}), await this._commandService.executeCommand(SetArrayFormulaDataMutation.id, {
      arrayFormulaRange: this._formulaDataModel.getArrayFormulaRange(),
      arrayFormulaCellData: this._formulaDataModel.getArrayFormulaCellData(),
      arrayFormulaEmbedded: {}
    }, {
      onlyLocal: !0,
      fromRustFormulaEngine: !0
    })), await this._commandService.executeCommand(SetFormulaCalculationResultMutation2.id, {
      unitData: patch.unitData,
      unitOtherData: patch.unitOtherData
    }, {
      onlyLocal: !0,
      fromRustFormulaEngine: !0
    }), {
      convertMs,
      commandMs: performance.now() - commandStartedAt
    };
  }
  async calculate(formulaString) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0);
    let unitId = "__rust_formula_calculate__",
      sheetId = "__sheet__",
      input = {
        config: {
          maxIteration: 1,
          intervalCount: DEFAULT_INTERVAL_COUNT
        },
        formulaData: {
          [unitId]: {
            [sheetId]: {
              0: {
                0: formulaString
              }
            }
          }
        },
        unitData: {
          [unitId]: {
            [sheetId]: {
              rowCount: 1,
              columnCount: 1,
              cellData: {}
            }
          }
        },
        dirtyRanges: [],
        definedNames: {}
      };
    return JSON.parse(executeOnRust(JSON.stringify(input))).runtimeData?.[unitId]?.[sheetId]?.[0]?.[0] ?? null;
  }
  async executeFormulas(formulas, rowData) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), this._currentConfigService.loadDataLite(rowData);
    let unitData = this._currentConfigService.getUnitData(),
      formulaData = this._formulaStringMapToFormulaData(formulas),
      input = {
        config: {
          maxIteration: 1,
          intervalCount: DEFAULT_INTERVAL_COUNT
        },
        formulaData,
        unitData: this._serializeUnitData(unitData),
        dirtyRanges: [],
        definedNames: {}
      },
      output = JSON.parse(executeOnRust(JSON.stringify(input)));
    return this._formulaExecutionOutputToResultMap(formulas, output);
  }
  async getAllDependencyJson(_rowData) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), this._syncRustFormulaDependencyDefinitions();
    let graph = this._getRustDependencyGraph(),
      inspect = this._getRustInspectGraph();
    return this._rustAllDependencyJson(graph, inspect);
  }
  async getCellDependencyJson(unitId, sheetId, row, column, _rowData) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), this._syncRustFormulaDependencyDefinitions();
    let graph = this._getRustDependencyGraph(unitId),
      all = this._rustGraphDependencyJson(graph),
      current = all.find(item => item.unitId === unitId && item.subUnitId === sheetId && item.row === row && item.column === column);
    if (!current) return;
    let byId = new Map(all.map(item => [item.treeId, item]));
    return {
      ...current,
      children: current.children.map(id => byId.get(id)).filter(isFormulaDependencyTreeJson),
      parents: current.parents.map(id => byId.get(id)).filter(isFormulaDependencyTreeJson)
    };
  }
  async getRangeDependents(unitRanges) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), this._syncRustFormulaDependencyDefinitions();
    let graph = this._getRustDependencyGraph(),
      graphItems = this._rustGraphDependencyJson(graph),
      graphByCell = this._rustDependencyJsonByCell(graphItems),
      dirty = JSON.parse(getRustDirtyDependenciesOnRust(JSON.stringify(this._serializeUnitRanges(unitRanges))));
    return this._uniqueDependencyJson((dirty.direct ?? dirty.affected ?? []).map(cell => graphByCell.get(this._cellKey(cell))).filter(Boolean));
  }
  async getInRangeFormulas(unitRanges) {
    return this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), this._syncRustFormulaDependencyDefinitions(), this._rustGraphDependencyJson(this._getRustDependencyGraph()).filter(item => this._cellInUnitRanges(item.unitId, item.subUnitId, item.row, item.column, unitRanges));
  }
  async getDependentsAndInRangeFormulas(unitRanges) {
    let [dependents, inRanges] = await Promise.all([this.getRangeDependents(unitRanges), this.getInRangeFormulas(unitRanges)]);
    return {
      dependents,
      inRanges
    };
  }
  _formulaStringMapToFormulaData(formulas) {
    let formulaData = {};
    return Object.entries(formulas).forEach(([unitId, sheetMap]) => {
      sheetMap && (formulaData[unitId] = {}, Object.entries(sheetMap).forEach(([sheetId, rowMap]) => {
        rowMap && (formulaData[unitId][sheetId] = {}, Object.entries(rowMap).forEach(([rowKey, colMap]) => {
          if (!colMap) return;
          let row = Number(rowKey);
          formulaData[unitId][sheetId][row] = {}, Object.entries(colMap).forEach(([colKey, formulaList]) => {
            let formula = Array.isArray(formulaList) ? formulaList[0] : void 0;
            typeof formula == "string" && (formulaData[unitId][sheetId][row][Number(colKey)] = formula);
          });
        }));
      }));
    }), formulaData;
  }
  _formulaExecutionOutputToResultMap(formulas, output) {
    let result = {};
    return Object.entries(formulas).forEach(([unitId, sheetMap]) => {
      sheetMap && (result[unitId] = {}, Object.entries(sheetMap).forEach(([sheetId, rowMap]) => {
        rowMap && (result[unitId][sheetId] = {}, Object.entries(rowMap).forEach(([rowKey, colMap]) => {
          if (!colMap) return;
          let row = Number(rowKey);
          result[unitId][sheetId][row] = {}, Object.entries(colMap).forEach(([colKey, formulaList]) => {
            let col = Number(colKey),
              formulasForCell = Array.isArray(formulaList) ? formulaList : [],
              value = normalizeFormulaResultValue(output.runtimeData?.[unitId]?.[sheetId]?.[row]?.[col]);
            result[unitId][sheetId][row][col] = formulasForCell.map(formula => ({
              formula,
              value
            }));
          });
        }));
      }));
    }), result;
  }
  _getRustDependencyGraph(unitId) {
    return JSON.parse(buildRustDependencyGraphOnRust(unitId));
  }
  _getRustInspectGraph() {
    return JSON.parse(inspectRustFormulaDependencyGraphOnRust());
  }
  _rustAllDependencyJson(graph, inspect) {
    let cellItems = this._rustGraphDependencyJson(graph),
      seen = new Set(cellItems.map(item => item.treeId)),
      nonCellItems = (inspect.nodes ?? []).filter(item => item.node.nodeType !== "cellFormula" && !seen.has(item.index)).map(item => this._rustFormulaNodeToDependencyJson(item.index, item.node));
    return this._uniqueDependencyJson([...cellItems, ...nonCellItems]);
  }
  _rustGraphDependencyJson(graph) {
    return (graph.nodes ?? []).map(node => this._rustDependencyNodeToJson(node));
  }
  _rustDependencyNodeToJson(node) {
    return {
      children: node.children ?? [],
      parents: node.parents ?? [],
      treeId: node.id,
      formula: node.formula,
      row: node.row,
      column: node.column,
      unitId: node.unitId,
      subUnitId: node.sheetId,
      refOffsetX: node.offsetX ?? 0,
      refOffsetY: node.offsetY ?? 0,
      rangeList: (node.precedentRanges ?? []).map(range => this._rustRangeToUnitRange(range)),
      refTreeId: void 0,
      formulaId: node.formulaId ?? null,
      featureId: null,
      type: FORMULA_TREE_TYPE_NORMAL
    };
  }
  _rustFormulaNodeToDependencyJson(index, node) {
    return {
      children: [],
      parents: [],
      treeId: index,
      formula: "",
      row: node.row ?? -1,
      column: node.column ?? -1,
      unitId: node.unitId ?? "",
      subUnitId: node.sheetId ?? "",
      refOffsetX: node.refOffsetX ?? 0,
      refOffsetY: node.refOffsetY ?? 0,
      rangeList: [],
      refTreeId: void 0,
      formulaId: node.formulaId ?? null,
      featureId: node.featureId ?? null,
      type: node.nodeType === "featureCalculation" ? FORMULA_TREE_TYPE_FEATURE : FORMULA_TREE_TYPE_OTHER
    };
  }
  _rustRangeToUnitRange(range) {
    return {
      unitId: range.unitId,
      sheetId: range.sheetId,
      range: {
        startRow: range.startRow,
        endRow: range.endRow,
        startColumn: range.startColumn,
        endColumn: range.endColumn
      }
    };
  }
  _serializeUnitRanges(unitRanges) {
    return unitRanges.map(unitRange => ({
      unitId: unitRange.unitId,
      sheetId: unitRange.sheetId,
      startRow: unitRange.range.startRow,
      endRow: unitRange.range.endRow,
      startColumn: unitRange.range.startColumn,
      endColumn: unitRange.range.endColumn
    }));
  }
  _rustDependencyJsonByCell(items) {
    return new Map(items.map(item => [this._cellKey({
      unitId: item.unitId,
      sheetId: item.subUnitId,
      row: item.row,
      column: item.column
    }), item]));
  }
  _cellKey(cell) {
    return `${cell.unitId}\0${cell.sheetId}\0${cell.row}\0${cell.column}`;
  }
  _cellInUnitRanges(unitId, sheetId, row, column, unitRanges) {
    return unitRanges.some(unitRange => unitRange.unitId === unitId && unitRange.sheetId === sheetId && row >= unitRange.range.startRow && row <= unitRange.range.endRow && column >= unitRange.range.startColumn && column <= unitRange.range.endColumn);
  }
  _uniqueDependencyJson(items) {
    let seen = /* @__PURE__ */new Set(),
      result = [];
    return items.forEach(item => {
      !item || seen.has(item.treeId) || (seen.add(item.treeId), result.push(item));
    }), result;
  }
};
function createRustProductExternalSyntheticUnitId(hostUnitId, referenceId) {
  return `external:product:${encodeURIComponent(hostUnitId)}:${encodeURIComponent(referenceId)}`;
}
function isFormulaDependencyTreeJson(value) {
  return value !== void 0;
}
function normalizeFormulaResultValue(value) {
  return value == null || typeof value == "number" || typeof value == "string" || typeof value == "boolean" || Array.isArray(value) && value.every(isFormulaResultRow) ? value : null;
}
function isFormulaResultRow(value) {
  return Array.isArray(value) && value.every(item => item == null || typeof item == "number" || typeof item == "string" || typeof item == "boolean");
}

// src/plugin.ts

export { RustCalculateFormulaService };
