"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  IRustCalculateFormulaService: () => IRustCalculateFormulaService,
  RUST_FORMULA_RELEVANT_MUTATIONS: () => RUST_FORMULA_RELEVANT_MUTATIONS,
  RUST_INCREMENTAL_DEPENDENCY_MUTATIONS: () => RUST_INCREMENTAL_DEPENDENCY_MUTATIONS,
  RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID: () => RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID,
  RUST_UPSERT_REFERENCE_DATA_MUTATION_ID: () => RUST_UPSERT_REFERENCE_DATA_MUTATION_ID,
  RustCalculateFormulaService: () => RustCalculateFormulaService,
  RustEngineSyncController: () => RustEngineSyncController,
  RustFormulaProjectionService: () => RustFormulaProjectionService,
  UniverRustFormulaEnginePlugin: () => UniverRustFormulaEnginePlugin,
  analyzeNumberFormatBatch: () => analyzeNumberFormatBatch,
  applyMutationOnRust: () => applyMutationOnRust,
  buildLexerTreeOnRust: () => buildLexerTreeOnRust,
  buildRustDependencyGraphOnRust: () => buildRustDependencyGraphOnRust,
  buildSequenceNodesOnRust: () => buildSequenceNodesOnRust,
  checkIfAddBracketOnRust: () => checkIfAddBracketOnRust,
  clearRustFormulaDependenciesOnRust: () => clearRustFormulaDependenciesOnRust,
  clearRustFormulaDirtyOnRust: () => clearRustFormulaDirtyOnRust,
  createFormulaProjectionDesyncSignal: () => createFormulaProjectionDesyncSignal,
  createProjectionWorkbookUpsertMutation: () => createProjectionWorkbookUpsertMutation,
  disposeAllWorkbooksOnRust: () => disposeAllWorkbooksOnRust,
  disposeWorkbookOnRust: () => disposeWorkbookOnRust,
  executeOnRust: () => executeOnRust,
  formatNumberBatch: () => formatNumberBatch,
  getNativeBindingSource: () => getNativeBindingSource,
  getRustCellOnRust: () => getRustCellOnRust,
  getRustDirtyDependenciesOnRust: () => getRustDirtyDependenciesOnRust,
  getRustFormulaDataOnRust: () => getRustFormulaDataOnRust,
  getRustModelStats: () => getRustModelStats,
  getRustSheetStateOnRust: () => getRustSheetStateOnRust,
  isRustFormulaRelevantMutation: () => isRustFormulaRelevantMutation,
  isRustIncrementalDependencyMutation: () => isRustIncrementalDependencyMutation,
  loadNativeBinding: () => loadNativeBinding,
  loadSnapshotOnRust: () => loadSnapshotOnRust,
  markRustFormulaDirtyOnRust: () => markRustFormulaDirtyOnRust,
  materializeWorkbookSnapshot: () => materializeWorkbookSnapshot,
  materializeWorkbookSnapshotOnRust: () => materializeWorkbookSnapshotOnRust,
  parseNumberFormatBatch: () => parseNumberFormatBatch,
  parseNumberFormatMatrixBatch: () => parseNumberFormatMatrixBatch,
  rustExecutionOutputToFormulaCalculationPatch: () => rustExecutionOutputToFormulaCalculationPatch,
  serializeRuntimeWorkbookSnapshot: () => serializeRuntimeWorkbookSnapshot,
  serializeRuntimeWorkbookSnapshots: () => serializeRuntimeWorkbookSnapshots,
  syncRustFormulaDependenciesOnRust: () => syncRustFormulaDependenciesOnRust
});
module.exports = __toCommonJS(index_exports);

// src/binding.ts
var import_node_module = require("node:module"), import_node_process = __toESM(require("node:process"), 1), nativeBinding = null, nativeBindingSource = null, nodeRequire = (0, import_node_module.createRequire)(__filename);
function getNativeBindingSource() {
  return nativeBindingSource;
}
function formatBindingLoadError(error) {
  return error instanceof Error ? error.message : String(error);
}
function createBindingLoadFailure(errors) {
  return new Error(
    [
      "Failed to load native formula engine binding.",
      `platform=${import_node_process.default.platform}`,
      `arch=${import_node_process.default.arch}`,
      "expected npm package=@univerjs-pro/engine-formula-rust-binding",
      "attempted paths:",
      ...errors.map((item) => `- ${item}`)
    ].join(`
`)
  );
}
async function loadNativeBinding() {
  if (nativeBinding)
    return nativeBinding;
  if (typeof import_node_process.default < "u" && import_node_process.default.versions?.node) {
    let errors = [];
    try {
      return nativeBinding = nodeRequire("@univerjs-pro/engine-formula-rust-binding"), nativeBindingSource = "@univerjs-pro/engine-formula-rust-binding", nativeBinding;
    } catch (error) {
      errors.push(`@univerjs-pro/engine-formula-rust-binding: ${formatBindingLoadError(error)}`);
    }
    throw createBindingLoadFailure(errors);
  } else
    throw new Error("WASM binding not yet implemented");
}
function executeOnRust(inputJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.formulaEngineExecute(inputJson);
}
function buildLexerTreeOnRust(formula, transformSuffix = !0) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.formulaLexerTreeBuild(formula, transformSuffix);
}
function buildSequenceNodesOnRust(formula) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.formulaSequenceNodesBuild(formula);
}
function checkIfAddBracketOnRust(formula) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.formulaCheckIfAddBracket(formula);
}
function formatNumberBatchOnRust(inputJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustNumfmtFormatBatch(inputJson);
}
function parseNumberFormatInputBatchOnRust(inputJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustNumfmtParseBatch(inputJson);
}
function parseNumberFormatMatrixBatchOnRust(inputJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustNumfmtParseMatrixBatch(inputJson);
}
function analyzeNumberFormatBatchOnRust(inputJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustNumfmtAnalyzeBatch(inputJson);
}
function loadSnapshotOnRust(snapshotJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineLoadSnapshot(snapshotJson);
}
function loadSnapshotBinaryOnRust(snapshotBytes) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineLoadSnapshotBinary(snapshotBytes);
}
function applyMutationOnRust(mutationJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineApplyMutation(mutationJson);
}
function disposeWorkbookOnRust(unitId) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineDisposeWorkbook(unitId);
}
function disposeAllWorkbooksOnRust() {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineDisposeAllWorkbooks();
}
function getRustModelStats() {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineGetModelStats();
}
function getRustCellOnRust(unitId, sheetId, row, col) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineGetCell(unitId, sheetId, row, col);
}
function getRustSheetStateOnRust(unitId, sheetId) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineGetSheetState(unitId, sheetId);
}
function getRustFormulaDataOnRust(unitId) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineGetFormulaData(unitId);
}
function buildRustDependencyGraphOnRust(unitId) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineBuildDependencyGraph(unitId);
}
function getRustDirtyDependenciesOnRust(dirtyRangesJson, unitId) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineGetDirtyDependencies(dirtyRangesJson, unitId);
}
function syncRustFormulaDependenciesOnRust(inputJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineSyncFormulaDependencies(inputJson);
}
function inspectRustFormulaDependencyGraphOnRust() {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineInspectFormulaDependencyGraph();
}
function markRustFormulaDirtyOnRust(inputJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineMarkFormulaDirty(inputJson);
}
function clearRustFormulaDependenciesOnRust(inputJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineClearFormulaDependencies(inputJson);
}
function clearRustFormulaDirtyOnRust() {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineClearFormulaDirty();
}
function executeDirtyFormulasOnRust(maxIteration, includeCalculatedNodes, includeRuntimeData, includeResultBatches) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineExecuteDirtyFormulas(
    maxIteration,
    includeCalculatedNodes,
    includeRuntimeData,
    includeResultBatches
  );
}
function materializeWorkbookSnapshotOnRust(workbookJson, unitId, rev, dirtyInputJson) {
  if (!nativeBinding)
    throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustMaterializeWorkbookSnapshot(workbookJson, unitId, rev, dirtyInputJson);
}

// src/controllers/rust-engine-sync.controller.ts
var import_core2 = require("@univerjs/core");

// src/services/rust-formula-projection.service.ts
var import_core = require("@univerjs/core");
var XLSX_WORKBOOK_CALCULATION_RESOURCE = "UNIVER_CLI_XLSX_WORKBOOK_CALCULATION_PLUGIN", EXTERNAL_DATA_RESOURCE = "SHEET_EXTERNAL_DATA_PLUGIN", EXTERNAL_DATA_SIGNATURE = "external_data", RUST_UPSERT_REFERENCE_DATA_MUTATION_ID = "formula.mutation.upsert-reference-data", RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID = "formula.mutation.upsert-projection-workbook", RUST_SET_SUPER_TABLES_MUTATION_ID = "formula.mutation.set-super-tables", RUST_FORMULA_RELEVANT_MUTATIONS = /* @__PURE__ */ new Set([
  "sheet.mutation.set-range-values",
  "sheet.mutation.insert-row",
  "sheet.mutation.insert-col",
  "sheet.mutation.insert-sheet",
  "sheet.mutation.move-range",
  "sheet.mutation.move-rows",
  "sheet.mutation.move-columns",
  "sheet.mutation.move-cols",
  "sheet.mutation.remove-col",
  "sheet.mutation.remove-rows",
  "sheet.mutation.remove-sheet",
  "sheet.mutation.set-col-hidden",
  "sheet.mutation.set-col-visible",
  "sheet.mutation.set-row-hidden",
  "sheet.mutation.set-row-visible",
  "sheet.mutation.set-worksheet-name",
  "sheet.mutation.reorder-range",
  "sheet.mutation.set-worksheet-row-count",
  "sheet.mutation.set-worksheet-column-count",
  "formula.mutation.set-array-formula-data",
  "formula.mutation.set-defined-name",
  "formula.mutation.set-feature-calculation",
  "formula.mutation.set-formula-data",
  "formula.mutation.set-image-formula-data",
  "formula.mutation.set-other-formula",
  "formula.mutation.set-super-table",
  RUST_SET_SUPER_TABLES_MUTATION_ID,
  "formula.mutation.set-super-table-option",
  "formula.mutation.remove-defined-name",
  "formula.mutation.remove-feature-calculation",
  "formula.mutation.remove-other-formula",
  "formula.mutation.remove-super-table",
  RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID
]), RUST_INCREMENTAL_DEPENDENCY_MUTATIONS = /* @__PURE__ */ new Set(["sheet.mutation.set-range-values"]);
function isRustFormulaRelevantMutation(id) {
  return RUST_FORMULA_RELEVANT_MUTATIONS.has(id);
}
function isRustIncrementalDependencyMutation(id) {
  return RUST_INCREMENTAL_DEPENDENCY_MUTATIONS.has(id);
}
function createReferenceDataUpsertMutations(config, needs, tableService) {
  let unitNameMap = config.unitNameMap, grouped = /* @__PURE__ */ new Map();
  for (let need of needs) {
    let key = `${need.unitId}\0${need.sheetId}`, group = grouped.get(key) ?? [];
    group.push(need), grouped.set(key, group);
  }
  return Array.from(grouped.values()).flatMap((group) => {
    let first = group[0], dataUnitId = first.dataUnitId ?? first.unitId, unitData = config.allUnitData?.[dataUnitId], sheetNameMap = config.unitSheetNameMap?.[dataUnitId] ?? {}, resolvedSheetId = unitData?.[first.sheetId] ? first.sheetId : sheetNameMap[first.sheetId] ?? first.sheetId, sheet = unitData?.[resolvedSheetId];
    if (!sheet)
      return [];
    let sheetName = Object.entries(sheetNameMap).find(([, sheetId]) => sheetId === resolvedSheetId)?.[0] ?? first.sheetId, ranges = group.map(({ range }) => range), tables = Object.fromEntries(
      group.flatMap(({ tableName }) => tableName ? [tableName] : []).filter((tableName, index, names) => names.indexOf(tableName) === index).flatMap((tableName) => {
        let table = tableService?.getTable(dataUnitId, tableName), serialized = isRecord(table) ? serializeRuntimeSuperTable(table) : null;
        return serialized ? [[tableName, serialized]] : [];
      })
    );
    return [
      {
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
          ...Object.keys(tables).length > 0 ? { tables } : {}
        },
        dirtyRanges: ranges.map((range) => ({
          unitId: first.unitId,
          sheetId: resolvedSheetId,
          range
        }))
      }
    ];
  });
}
function serializeRuntimeWorkbookSnapshots(workbooks) {
  return {
    workbooks: workbooks.map((workbook) => serializeRuntimeWorkbookSnapshot(workbook))
  };
}
function serializeRuntimeWorkbookSnapshot(input) {
  let { snapshot } = input, sheetOrder = snapshot.sheetOrder?.length > 0 ? snapshot.sheetOrder : Object.keys(snapshot.sheets ?? {}), calculation = serializeCalculation(snapshot), precisionAsDisplayed = calculation?.fullPrecision === !1, sheets = sheetOrder.map(
    (sheetId) => serializeSheetSnapshot(sheetId, snapshot.sheets?.[sheetId], snapshot.styles, precisionAsDisplayed)
  ).filter((sheet) => sheet != null);
  return {
    unitId: input.unitId || snapshot.id,
    name: snapshot.name,
    sheets,
    ...calculation ? { calculation } : {},
    resources: serializeResources(snapshot),
    definedNames: serializeDefinedNames(input.definedNames, snapshot),
    externalLinks: serializeExternalLinks(snapshot),
    tables: serializeTables(snapshot)
  };
}
function createProjectionWorkbookUpsertMutation(input) {
  return {
    id: RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID,
    params: {
      workbook: serializeRuntimeWorkbookSnapshot(input)
    },
    dirtyRanges: []
  };
}
function rustExecutionOutputToFormulaCalculationPatch(output) {
  let arrayFormulaOutput = output;
  return {
    unitData: output.resultBatches?.length ? resultBatchesToUnitData(output.resultBatches) : runtimeDataToUnitData(output.runtimeData),
    unitOtherData: otherFormulaDataToUnitOtherData(output.otherFormulaData),
    ...arrayFormulaOutput.arrayFormulaRange ? { arrayFormulaRange: arrayFormulaOutput.arrayFormulaRange } : {},
    ...arrayFormulaOutput.arrayFormulaCellData ? { arrayFormulaCellData: arrayFormulaCellDataToUnitData(arrayFormulaOutput.arrayFormulaCellData) } : {},
    errors: output.errors?.map((error) => ({
      code: "RUST_FORMULA_CALCULATION_ERROR",
      unitId: error.unitId,
      sheetId: error.sheetId,
      row: error.row,
      column: error.column,
      message: error.message
    }))
  };
}
function arrayFormulaCellDataToUnitData(input) {
  let result = {};
  for (let [unitId, sheetMap] of Object.entries(input)) {
    let unitData = {};
    result[unitId] = unitData;
    for (let [sheetId, rowMap] of Object.entries(sheetMap)) {
      let sheetData = {};
      unitData[sheetId] = sheetData;
      for (let [rowKey, colMap] of Object.entries(rowMap)) {
        let rowData = {};
        sheetData[Number(rowKey)] = rowData;
        for (let [colKey, value] of Object.entries(colMap))
          rowData[Number(colKey)] = cellDataFromRustValue(value);
      }
    }
  }
  return result;
}
function otherFormulaDataToUnitOtherData(otherFormulaData) {
  let unitOtherData = {};
  return Object.entries(otherFormulaData ?? {}).forEach(([unitId, sheetMap]) => {
    if (!sheetMap) return;
    let unitSheetData = {};
    unitOtherData[unitId] = unitSheetData, Object.entries(sheetMap).forEach(([sheetId, formulaMap]) => {
      if (!formulaMap) return;
      let sheetData = {};
      unitSheetData[sheetId] = sheetData, Object.entries(formulaMap).forEach(([formulaId, rowMap]) => {
        if (!rowMap) return;
        let formulaData = {};
        sheetData[formulaId] = formulaData, Object.entries(rowMap).forEach(([rowKey, colMap]) => {
          if (!colMap) return;
          let row = Number(rowKey), rowData = {};
          formulaData[row] = rowData, Object.entries(colMap).forEach(([colKey, value]) => {
            rowData[Number(colKey)] = [[cellDataFromRustValue(value)]];
          });
        });
      });
    });
  }), unitOtherData;
}
function createFormulaProjectionDesyncSignal(reason, error, mutationId) {
  return {
    reason,
    mutationId,
    message: error instanceof Error ? error.message : String(error)
  };
}
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
      let output = JSON.parse(
        executeDirtyFormulasOnRust(maxIteration, !1, !1, !0)
      );
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
      return clearRustFormulaDirtyOnRust(), clearRustFormulaDependenciesOnRust(
        JSON.stringify({
          unitId: "",
          clearSheetFormulas: !0,
          clearFeatureFormulas: !0,
          clearOtherFormulas: !0
        })
      ), {
        stats: JSON.parse(loadSnapshotOnRust(JSON.stringify({ workbooks: [] })))
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
      return { stats: JSON.parse(disposeWorkbookOnRust(unitId)) };
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
function normalizeRustEngineMutation(mutation) {
  let params = mutation.id === "formula.mutation.set-super-table" ? normalizeSetSuperTableMutationParams(mutation.params) : mutation.id === RUST_SET_SUPER_TABLES_MUTATION_ID ? normalizeSetSuperTablesMutationParams(mutation.params) : mutation.params ?? {};
  return {
    id: mutation.id,
    params,
    dirtyRanges: Array.isArray(mutation.dirtyRanges) ? mutation.dirtyRanges : []
  };
}
function normalizeSetSuperTablesMutationParams(params) {
  return !isRecord(params) || typeof params.unitId != "string" || !Array.isArray(params.tables) ? params ?? {} : {
    ...params,
    tables: params.tables.map((entry) => {
      let normalized = normalizeSetSuperTableMutationParams(
        isRecord(entry) ? { ...entry, unitId: params.unitId } : entry
      );
      if (!isRecord(normalized)) return normalized;
      let { unitId: _unitId, ...table } = normalized;
      return table;
    })
  };
}
function normalizeSetSuperTableMutationParams(params) {
  if (!isRecord(params) || !isRecord(params.reference))
    return params ?? {};
  let reference = params.reference, table = serializeRuntimeSuperTable(reference);
  return table ? {
    ...params,
    reference: normalizeRuntimeValue(reference),
    table
  } : {
    ...params,
    reference: normalizeRuntimeValue(reference)
  };
}
function serializeRuntimeSuperTable(reference) {
  let sheetId = reference.sheetId, range = reference.range;
  if (typeof sheetId != "string" || !isRecord(range) || typeof range.startRow != "number" || typeof range.endRow != "number" || typeof range.startColumn != "number" || typeof range.endColumn != "number")
    return null;
  let columns = (reference.titleMap instanceof Map ? Array.from(reference.titleMap.entries()) : isRecord(reference.titleMap) ? Object.entries(reference.titleMap) : []).filter((entry) => typeof entry[0] == "string" && typeof entry[1] == "number").toSorted((left, right) => left[1] - right[1]).map(([displayName]) => ({ displayName }));
  return {
    sheetId,
    range: {
      startRow: range.startRow,
      endRow: range.endRow,
      startColumn: range.startColumn,
      endColumn: range.endColumn
    },
    columns,
    showHeader: reference.showHeader !== !1,
    showFooter: reference.showFooter === !0
  };
}
function normalizeRuntimeValue(value) {
  return value instanceof Map ? Object.fromEntries(
    Array.from(value.entries(), ([key, entryValue]) => [String(key), normalizeRuntimeValue(entryValue)])
  ) : Array.isArray(value) ? value.map(normalizeRuntimeValue) : isRecord(value) ? Object.fromEntries(
    Object.entries(value).map(([key, entryValue]) => [key, normalizeRuntimeValue(entryValue)])
  ) : value;
}
function resultBatchesToUnitData(resultBatches) {
  let unitData = {};
  for (let batch of resultBatches) {
    let unitSheetData = unitData[batch.unitId] ?? {};
    unitData[batch.unitId] = unitSheetData;
    let sheetData = unitSheetData[batch.sheetId] ?? {};
    unitSheetData[batch.sheetId] = sheetData;
    for (let index = 0; index < batch.values.length; index++) {
      let row = batch.rows[index], col = batch.cols[index], value = batch.values[index], rowData = sheetData[row] ?? {};
      sheetData[row] = rowData, rowData[col] = cellDataFromRustValue(value);
    }
  }
  return unitData;
}
function runtimeDataToUnitData(runtimeData) {
  let unitData = {};
  return Object.entries(runtimeData ?? {}).forEach(([unitId, sheetMap]) => {
    if (!sheetMap) return;
    let unitSheetData = {};
    unitData[unitId] = unitSheetData, Object.entries(sheetMap).forEach(([sheetId, rowMap]) => {
      if (!rowMap) return;
      let sheetData = {};
      unitSheetData[sheetId] = sheetData, Object.entries(rowMap).forEach(([rowKey, colMap]) => {
        if (!colMap) return;
        let row = Number(rowKey), rowData = {};
        sheetData[row] = rowData, Object.entries(colMap).forEach(([colKey, value]) => {
          rowData[Number(colKey)] = cellDataFromRustValue(value);
        });
      });
    });
  }), unitData;
}
function cellDataFromRustValue(value) {
  if (value == null)
    return null;
  if (typeof value == "number")
    return { t: import_core.CellValueType.NUMBER, v: value };
  if (typeof value == "boolean")
    return { t: import_core.CellValueType.BOOLEAN, v: value };
  if (typeof value == "string")
    return { t: import_core.CellValueType.STRING, v: value };
  if (isRecord(value)) {
    let cell = sanitizeCoreCellData(value);
    if (Object.keys(cell).length > 0)
      return cell;
  }
  return { v: value };
}
function sanitizeCoreCellData(value) {
  let cell = {};
  for (let key of ["v", "t", "p", "s", "f", "si", "ref", "xf", "custom"])
    key in value && (cell[key] = value[key]);
  return cell;
}
function serializeResources(snapshot) {
  let resources = snapshot.resources;
  if (!resources || typeof resources != "object")
    return;
  let serialized = {};
  for (let [id, resource] of Object.entries(resources))
    typeof resource?.name == "string" && (serialized[id] = {
      name: resource.name,
      data: resource.data
    });
  return Object.keys(serialized).length > 0 ? serialized : void 0;
}
function serializeCalculation(snapshot) {
  for (let resource of Object.values(
    snapshot.resources ?? {}
  )) {
    if (resource?.name !== XLSX_WORKBOOK_CALCULATION_RESOURCE)
      continue;
    let data = parseResourceData(resource.data);
    if (!data || typeof data != "object")
      return;
    let fullPrecision = data.fullPrecision;
    return typeof fullPrecision == "boolean" ? { fullPrecision } : void 0;
  }
}
function serializeTables(snapshot) {
  for (let resource of Object.values(
    snapshot.resources ?? {}
  )) {
    if (resource?.name !== "SHEET_TABLE_PLUGIN")
      continue;
    let data = parseResourceData(resource.data);
    if (!data || typeof data != "object")
      return;
    let tables = {};
    for (let [sheetId, sheetTables] of Object.entries(data)) {
      let tableList = sheetTables?.tables;
      if (Array.isArray(tableList))
        for (let table of tableList) {
          let serialized = serializeTableSnapshot(sheetId, table, snapshot);
          serialized && (tables[serialized.name] = serialized.table);
        }
    }
    return Object.keys(tables).length > 0 ? tables : void 0;
  }
}
function serializeTableSnapshot(sheetId, table, snapshot) {
  if (!table || typeof table != "object")
    return null;
  let record = table, name2 = typeof record.name == "string" ? record.name : void 0, range = record.range;
  if (!name2 || !range || typeof range.startRow != "number" || typeof range.endRow != "number" || typeof range.startColumn != "number" || typeof range.endColumn != "number")
    return null;
  let columns = Array.isArray(record.columns) ? record.columns.map((column) => {
    let displayName = column?.displayName;
    return typeof displayName == "string" ? { displayName } : null;
  }).filter((column) => column != null) : [], showHeader = record.options?.showHeader !== !1, showFooter = typeof record.options?.showFooter == "boolean" ? record.options.showFooter : inferTableFooter(snapshot, sheetId, range.startRow, range.endRow, range.startColumn, range.endColumn);
  return {
    name: name2,
    table: {
      sheetId,
      range: {
        startRow: range.startRow,
        endRow: range.endRow,
        startColumn: range.startColumn,
        endColumn: range.endColumn
      },
      columns,
      showHeader,
      showFooter
    }
  };
}
function parseResourceData(data) {
  if (typeof data != "string")
    return data;
  try {
    return JSON.parse(data || "{}");
  } catch {
    return;
  }
}
function inferTableFooter(snapshot, sheetId, startRow, endRow, startColumn, endColumn) {
  let row = snapshot.sheets?.[sheetId]?.cellData?.[endRow];
  if (!row)
    return !1;
  for (let col = startColumn; col <= endColumn; col++) {
    let cell = row[col];
    if (cell && (typeof cell.f == "string" && /\bSUBTOTAL\s*\(/iu.test(cell.f) || col === startColumn && typeof cell.v == "string" && cell.v.trim().toLowerCase() === "total"))
      return !0;
  }
  return !1;
}
function serializeExternalLinks(snapshot) {
  let externalLinks = snapshot.externalLinks, serializedLinks = Array.isArray(externalLinks) ? externalLinks.map((link) => serializeExternalLink(link)).filter((link) => link != null) : [];
  return serializedLinks.push(...serializeExternalLinksFromResource(snapshot)), serializedLinks.length > 0 ? serializedLinks : void 0;
}
function serializeExternalLinksFromResource(snapshot) {
  let links = [];
  for (let resource of Object.values(
    snapshot.resources ?? {}
  )) {
    if (resource?.name !== EXTERNAL_DATA_RESOURCE)
      continue;
    let data = parseResourceData(resource.data);
    if (isRecord(data)) {
      if (data.schemaVersion === 1 && Array.isArray(data.links)) {
        links.push(
          ...data.links.map((link) => serializeVersionedExternalLink(link)).filter((link) => link != null)
        );
        continue;
      }
      if (!(data.signature !== EXTERNAL_DATA_SIGNATURE || !isRecord(data.units)))
        for (let [unitId, unit] of Object.entries(data.units)) {
          let link = serializeExternalDataUnit(unitId, unit);
          link && links.push(link);
        }
    }
  }
  return links;
}
function serializeVersionedExternalLink(link) {
  if (!isRecord(link) || !Number.isInteger(link.slot) || Number(link.slot) <= 0 || !isRecord(link.target))
    return null;
  let target = link.target, cache = isRecord(link.cache) ? link.cache : void 0, cachedSheets = Array.isArray(cache?.sheets) ? cache.sheets.map((sheet) => serializeVersionedExternalSheet(sheet)).filter((sheet) => sheet != null) : [], cachedNames = new Set(cachedSheets.map((sheet) => sheet.name.toLocaleLowerCase())), uncachedSheets = Array.isArray(link.sheetNames) ? link.sheetNames.flatMap((item) => {
    if (!isRecord(item)) return [];
    let { name: name2 } = item;
    return typeof name2 != "string" || cachedNames.has(name2.toLocaleLowerCase()) ? [] : [
      {
        name: name2,
        rowCount: 1048576,
        columnCount: 16384,
        cellData: {},
        coverage: []
      }
    ];
  }) : [], sheets = [...cachedSheets, ...uncachedSheets], definedNames = serializeVersionedExternalDefinedNames(link.definedNames), tables = serializeVersionedExternalTables(link.tables), aliases = [link.name, target.name, target.uri].filter(
    (alias) => typeof alias == "string" && alias.length > 0
  );
  return {
    ...aliases.length > 0 ? { aliases: [...new Set(aliases)] } : {},
    ...definedNames ? { definedNames } : {},
    sheets,
    ...tables ? { tables } : {},
    ...typeof target.uri == "string" ? { target: target.uri } : typeof target.name == "string" ? { target: target.name } : typeof link.name == "string" ? { target: link.name } : {},
    unitId: String(link.slot)
  };
}
function serializeVersionedExternalDefinedNames(value) {
  if (!Array.isArray(value))
    return;
  let result = {};
  for (let item of value)
    !isRecord(item) || typeof item.name != "string" || (result[item.name] = {
      name: item.name,
      ...typeof item.formulaOrRefString == "string" ? { formulaOrRefString: item.formulaOrRefString } : {}
    });
  return Object.keys(result).length > 0 ? result : void 0;
}
function serializeVersionedExternalTables(value) {
  if (!Array.isArray(value))
    return;
  let result = {};
  for (let item of value) {
    if (!isRecord(item) || typeof item.name != "string" || typeof item.sheetName != "string" || !isRange(item.range)) continue;
    let columns = Array.isArray(item.columns) ? item.columns.flatMap((column) => {
      if (!isRecord(column)) return [];
      let { name: name2 } = column;
      return typeof name2 == "string" ? [{ displayName: name2 }] : [];
    }) : [];
    result[item.name] = {
      sheetId: item.sheetName,
      range: item.range,
      columns,
      showHeader: item.showHeader !== !1
    };
  }
  return Object.keys(result).length > 0 ? result : void 0;
}
function serializeVersionedExternalSheet(sheet) {
  if (!isRecord(sheet) || typeof sheet.name != "string") return null;
  let cellData = {};
  if (Array.isArray(sheet.cells))
    for (let cell of sheet.cells) {
      if (!isExternalCell(cell)) continue;
      let { row, column } = cell;
      (cellData[row] ??= {})[column] = {
        v: cell.value,
        ...typeof cell.valueType == "number" ? { t: cell.valueType } : {}
      };
    }
  return {
    name: sheet.name,
    ...typeof sheet.sheetId == "string" ? { sheetId: sheet.sheetId } : {},
    rowCount: typeof sheet.rowCount == "number" ? sheet.rowCount : 0,
    columnCount: typeof sheet.columnCount == "number" ? sheet.columnCount : 0,
    cellData,
    coverage: Array.isArray(sheet.coverage) ? sheet.coverage.filter(isRange) : []
  };
}
function isRange(value) {
  return value != null && typeof value == "object" && "startRow" in value && typeof value.startRow == "number" && "endRow" in value && typeof value.endRow == "number" && "startColumn" in value && typeof value.startColumn == "number" && "endColumn" in value && typeof value.endColumn == "number";
}
function isRustTableSnapshot(value) {
  return value != null && typeof value == "object" && "sheetId" in value && typeof value.sheetId == "string" && "range" in value && isRange(value.range) && "columns" in value && Array.isArray(value.columns);
}
function isExternalCell(value) {
  return isRecord(value) && Number.isInteger(value.row) && Number.isInteger(value.column);
}
function serializeExternalDataUnit(unitId, unit) {
  if (!unit || typeof unit != "object")
    return null;
  let record = unit;
  if (!record.sheets || typeof record.sheets != "object")
    return null;
  let sheets = Object.values(record.sheets).map((sheet) => serializeExternalSheet(sheet)).filter((sheet) => sheet != null);
  if (sheets.length === 0)
    return null;
  let definedNames = serializeExternalDefinedNames(record.definedNames);
  return {
    ...definedNames === void 0 ? {} : { definedNames },
    sheets,
    ...typeof record.target == "string" ? { target: record.target } : {},
    unitId
  };
}
function serializeExternalLink(link) {
  if (!isRecord(link))
    return null;
  let record = link;
  if (!Array.isArray(record.sheets))
    return null;
  let sheets = record.sheets.map((sheet) => serializeExternalSheet(sheet)).filter((sheet) => sheet != null);
  if (sheets.length === 0)
    return null;
  let definedNames = serializeExternalDefinedNames(record.definedNames), tables = serializeExternalTables(record.tables);
  return {
    ...definedNames === void 0 ? {} : { definedNames },
    sheets,
    ...tables === void 0 ? {} : { tables },
    ...typeof record.target == "string" ? { target: record.target } : {},
    ...typeof record.unitId == "string" ? { unitId: record.unitId } : {}
  };
}
function serializeExternalTables(value) {
  if (!isRecord(value)) return;
  let result = {};
  for (let [name2, table] of Object.entries(value))
    !table || typeof table != "object" || isRustTableSnapshot(table) && (result[name2] = table);
  return Object.keys(result).length > 0 ? result : void 0;
}
function serializeExternalDefinedNames(value) {
  if (!isRecord(value))
    return;
  let definedNames = {};
  for (let [key, item] of Object.entries(value)) {
    if (!isRecord(item))
      continue;
    let record = item, name2 = typeof record.name == "string" ? record.name : key;
    definedNames[key] = {
      ...typeof record.id == "string" ? { id: record.id } : {},
      name: name2,
      ...typeof record.formulaOrRefString == "string" ? { formulaOrRefString: record.formulaOrRefString } : {},
      ...typeof record.localSheetId == "string" ? { localSheetId: record.localSheetId } : {}
    };
  }
  return Object.keys(definedNames).length > 0 ? definedNames : void 0;
}
function serializeExternalSheet(sheet) {
  if (!sheet || typeof sheet != "object")
    return null;
  let record = sheet;
  return typeof record.name != "string" ? null : {
    name: record.name,
    ...typeof record.sheetId == "string" ? { sheetId: record.sheetId } : {},
    rowCount: typeof record.rowCount == "number" ? record.rowCount : 0,
    columnCount: typeof record.columnCount == "number" ? record.columnCount : 0,
    cellData: serializeCellData(record.cellData)
  };
}
function serializeDefinedNames(definedNames, snapshot) {
  let direct = definedNames && Object.keys(definedNames).length > 0 ? definedNames : extractDefinedNames(snapshot), sheetIds = new Set(Object.keys(snapshot.sheets ?? {})), sheetNameToId = new Map(
    Object.entries(snapshot.sheets ?? {}).map(([sheetId, sheet]) => [sheet.name, sheetId])
  );
  return Object.fromEntries(
    Object.entries(direct).map(([id, definedName]) => [
      id,
      {
        id: definedName.id,
        name: definedName.name,
        formulaOrRefString: definedName.formulaOrRefString,
        localSheetId: normalizeDefinedNameLocalSheetId(
          definedName.localSheetId,
          definedName.formulaOrRefString,
          sheetIds,
          sheetNameToId
        )
      }
    ])
  );
}
function normalizeDefinedNameLocalSheetId(localSheetId, formulaOrRefString, sheetIds, sheetNameToId) {
  if (!localSheetId || localSheetId === "AllDefaultWorkbook")
    return localSheetId;
  let sheetName = extractLeadingSheetName(formulaOrRefString), sheetIdFromFormula = sheetName ? sheetNameToId.get(sheetName) : void 0;
  return sheetIdFromFormula && sheetIdFromFormula !== localSheetId ? sheetIdFromFormula : sheetIds.has(localSheetId) || !sheetName ? localSheetId : sheetIdFromFormula ?? localSheetId;
}
function extractLeadingSheetName(formulaOrRefString) {
  if (!formulaOrRefString)
    return;
  let quotedMatch = /^'((?:[^']|'')+)'!/.exec(formulaOrRefString);
  return quotedMatch ? quotedMatch[1].replace(/''/g, "'") : /^([^=!]+)!/.exec(formulaOrRefString)?.[1];
}
function extractDefinedNames(snapshot) {
  let direct = snapshot.definedNames;
  if (direct && Object.keys(direct).length > 0)
    return direct;
  for (let resource of Object.values(
    snapshot.resources ?? {}
  )) {
    if (resource?.name !== "SHEET_DEFINED_NAME_PLUGIN")
      continue;
    let data = parseResourceData(resource.data);
    return data && typeof data == "object" ? data : {};
  }
  return {};
}
function serializeSheetSnapshot(sheetId, sheet, styles, precisionAsDisplayed) {
  return sheet ? {
    sheetId: sheet.id ?? sheetId,
    name: sheet.name,
    rowCount: sheet.rowCount ?? 0,
    columnCount: sheet.columnCount ?? 0,
    transitionEvaluation: sheet.transitionEvaluation === !0,
    cellData: serializeCellData(sheet.cellData, styles, precisionAsDisplayed),
    rowData: serializeVisibilityData(sheet.rowData),
    columnData: serializeVisibilityData(sheet.columnData)
  } : null;
}
function serializeCellData(cellData = {}, styles, precisionAsDisplayed = !1) {
  let result = {}, rawCellData = cellData instanceof import_core.ObjectMatrix ? cellData.getMatrix() : cellData;
  for (let [rowKey, row] of Object.entries(rawCellData ?? {})) {
    if (!row)
      continue;
    let serializedRow = {};
    for (let [colKey, cell] of Object.entries(row)) {
      if (!cell || typeof cell != "object")
        continue;
      let cellRecord = cell, value = {};
      if ("v" in cellRecord && (value.v = cellRecord.v), typeof cellRecord.t == "number" && (value.t = cellRecord.t), "p" in cellRecord && (value.p = cellRecord.p), typeof cellRecord.f == "string" && (value.f = cellRecord.f), typeof cellRecord.si == "string" && (value.si = cellRecord.si), typeof cellRecord.ref == "string") {
        let hasFormula = typeof cellRecord.f == "string" && cellRecord.f.length > 0;
        typeof cellRecord.si == "string" || hasFormula && isLegacyArrayFormulaCell(cellRecord) ? value.ref = cellRecord.ref : hasFormula && (value.dynamicArrayRef = cellRecord.ref);
      }
      if (typeof cellRecord.xf == "string" && (value.xf = cellRecord.xf), "s" in cellRecord && (value.s = cellRecord.s), precisionAsDisplayed && typeof cellRecord.f == "string") {
        let displayPrecision = inferDisplayPrecision(cellRecord.s, styles);
        displayPrecision !== void 0 && (value.displayPrecision = displayPrecision);
      }
      Object.keys(value).length > 0 && (serializedRow[Number(colKey)] = value);
    }
    Object.keys(serializedRow).length > 0 && (result[Number(rowKey)] = serializedRow);
  }
  return result;
}
function serializeCellDataInRanges(cellData, ranges) {
  let serialized = serializeCellData(cellData), result = {};
  for (let [rowKey, row] of Object.entries(serialized)) {
    let rowIndex = Number(rowKey);
    for (let [columnKey, value] of Object.entries(row)) {
      let columnIndex = Number(columnKey);
      ranges.some(
        (range) => rowIndex >= range.startRow && rowIndex <= range.endRow && columnIndex >= range.startColumn && columnIndex <= range.endColumn
      ) && ((result[rowIndex] ??= {})[columnIndex] = value);
    }
  }
  return result;
}
function isLegacyArrayFormulaCell(cell) {
  let custom = cell.custom;
  if (!custom || typeof custom != "object")
    return !1;
  let xlsx = custom._xlsx;
  return xlsx != null && typeof xlsx == "object" && xlsx.legacyArrayFormula === !0;
}
function inferDisplayPrecision(styleId, styles) {
  if (typeof styleId != "string" || !styles || typeof styles != "object")
    return;
  let style = styles[styleId];
  if (!style || typeof style != "object")
    return;
  let numberFormat = style.n;
  if (!numberFormat || typeof numberFormat != "object")
    return;
  let pattern = numberFormat.pattern;
  return typeof pattern == "string" ? inferFixedNumberFormatPrecision(pattern) : void 0;
}
function inferFixedNumberFormatPrecision(pattern) {
  let cleaned = (pattern.split(";")[0] ?? pattern).replace(/"[^"]*"/gu, "").replace(/\\./gu, "").replace(/_.|\*./gu, "");
  if (!/[0#?]/u.test(cleaned) || /[%Ee]|[ymdhsa]/iu.test(cleaned))
    return;
  let decimalMatch = cleaned.match(/\.([0#?]+)/u);
  return decimalMatch?.[1] ? decimalMatch[1].length : 0;
}
function serializeVisibilityData(data = {}) {
  let result = {};
  for (let [indexKey, metadata] of Object.entries(data))
    !metadata || typeof metadata != "object" || !("hd" in metadata) || (result[Number(indexKey)] = {
      hd: metadata.hd
    });
  return result;
}
function errorToFormulaCalculationError(code, error) {
  return {
    code,
    message: error instanceof Error ? error.message : String(error)
  };
}
function isRecord(value) {
  return typeof value == "object" && value !== null && !Array.isArray(value);
}

// src/controllers/rust-engine-sync.controller.ts
var rustEngineSyncState = {
  snapshotEpoch: 0,
  dependencyInvalidationEpoch: 0
};
function getRustEngineSyncState() {
  return { ...rustEngineSyncState };
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
  if (!value || typeof value != "object")
    return {};
  let cellValueCells = 0;
  for (let row of Object.values(value))
    !row || typeof row != "object" || (cellValueCells += Object.keys(row).length);
  return {
    cellValueRows: Object.keys(value).length,
    cellValueCells
  };
}
function hasObjectMatrixValues(value) {
  return !value || typeof value != "object" ? !1 : Object.values(value).some(
    (row) => row != null && typeof row == "object" && Object.keys(row).length > 0
  );
}
function hasRecordEntries(value) {
  return value != null && typeof value == "object" && Object.keys(value).length > 0;
}
function countDisplayPrecisionCells(snapshot) {
  let count = 0;
  for (let workbook of snapshot.workbooks)
    for (let sheet of workbook.sheets)
      for (let row of Object.values(sheet.cellData))
        for (let cell of Object.values(row))
          typeof cell.displayPrecision == "number" && (count += 1);
  return count;
}
var RustEngineSyncController = class extends import_core2.Disposable {
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
  _projectionManagedTableUnits = /* @__PURE__ */ new Set();
  _initialize() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command, options) => {
        this._shouldSyncMutation(command, options) && this._queueOrSyncMutation(this._serializeMutation(command, options));
      })
    );
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
    do
      barrier = this._projectionDeltaBarrier, await barrier;
    while (barrier !== this._projectionDeltaBarrier);
  }
  setProjectionDeltaBarrier(barrier) {
    this._projectionDeltaBarrier = barrier;
  }
  async _loadProjection(workbooks) {
    await loadNativeBinding(), this._nativeReady = !0;
    let serializeStartedAt = performance.now(), snapshot = serializeRuntimeWorkbookSnapshots(workbooks);
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
    return mutations.forEach((mutation) => this._queueOrSyncMutation(mutation)), mutations.length;
  }
  disposeProjectionWorkbook(unitId) {
    if (!(!this._nativeReady || !this._snapshotLoaded))
      try {
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
    let precisionAsDisplayedWorkbookCount = snapshot.workbooks.filter(
      (workbook) => workbook.calculation?.fullPrecision === !1
    ).length, displayPrecisionCellCount = countDisplayPrecisionCells(snapshot), pendingCountCoveredBySnapshot = this._pendingMutations.length, stringifyStartedAt = performance.now(), snapshotJson = JSON.stringify(snapshot), stringifyMs = performance.now() - stringifyStartedAt, snapshotBuffer = globalThis.Buffer?.from(snapshotJson), nativeStartedAt = performance.now(), nativeOutput = snapshotBuffer ? loadSnapshotBinaryOnRust(snapshotBuffer) : loadSnapshotOnRust(snapshotJson), nativeMs = performance.now() - nativeStartedAt, nativeTimings;
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
    for (; this._pendingMutations.length > 0; ) {
      let mutation = this._pendingMutations.shift();
      mutation && this._syncMutation(mutation);
    }
  }
  _syncMutation(mutation) {
    let totalStartedAt = performance.now(), stringifyStartedAt = performance.now(), payload = JSON.stringify(normalizeRustEngineMutation(mutation)), stringifyMs = performance.now() - stringifyStartedAt, nativeStartedAt = performance.now();
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
          ...summarizeObjectMatrixPayload(
            mutation.params?.cellValue
          )
        }
      });
    }
  }
  _markProjectionDesynced() {
    this._nativeReady = !1, this._snapshotLoaded = !1;
  }
  _shouldSyncMutation(command, options) {
    if (command.type !== import_core2.CommandType.MUTATION || !isRustFormulaRelevantMutation(command.id) || (command.id === "formula.mutation.set-super-table" || command.id === "formula.mutation.remove-super-table") && hasUnitId(command.params) && this._projectionManagedTableUnits.has(command.params.unitId))
      return !1;
    let syncOptions = options;
    if (syncOptions?.fromRustFormulaEngine === !0 || syncOptions?.applyFormulaCalculationResult === !0 || command.id === "sheet.mutation.set-range-values" && !hasObjectMatrixValues(command.params?.cellValue))
      return !1;
    if (command.id === "formula.mutation.set-formula-calculation-result") {
      let params = command.params;
      if (!hasRecordEntries(params?.unitData) && !hasRecordEntries(params?.unitOtherData))
        return !1;
    }
    if (command.id === "formula.mutation.set-array-formula-data") {
      let params = command.params;
      if (!hasRecordEntries(params?.arrayFormulaRange) && !hasRecordEntries(params?.arrayFormulaCellData) && !hasRecordEntries(params?.arrayFormulaEmbedded))
        return !1;
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
(0, import_core2.setDependencies)(RustEngineSyncController, [import_core2.ICommandService]);

// src/numfmt.ts
var nativeBindingReady = null;
function ensureNativeBinding() {
  return nativeBindingReady ??= loadNativeBinding().catch((error) => {
    throw nativeBindingReady = null, error;
  }), nativeBindingReady;
}
function parseJsonOutput(output) {
  return JSON.parse(output);
}
async function formatNumberBatch(input) {
  return await ensureNativeBinding(), parseJsonOutput(formatNumberBatchOnRust(JSON.stringify(input)));
}
async function parseNumberFormatBatch(input) {
  return await ensureNativeBinding(), parseJsonOutput(parseNumberFormatInputBatchOnRust(JSON.stringify(input)));
}
async function parseNumberFormatMatrixBatch(input) {
  return await ensureNativeBinding(), parseJsonOutput(
    parseNumberFormatMatrixBatchOnRust(JSON.stringify(input))
  );
}
async function analyzeNumberFormatBatch(input) {
  return await ensureNativeBinding(), parseJsonOutput(analyzeNumberFormatBatchOnRust(JSON.stringify(input)));
}

// src/plugin.ts
var import_core5 = require("@univerjs/core"), import_engine_formula4 = require("@univerjs/engine-formula"), import_engine_formula5 = require("@univerjs-pro/engine-formula");

// package.json
var name = "@univerjs-pro/engine-formula-rust", version = "1.0.0-insiders.20260907-70fc579";

// src/controllers/rust-same-runtime-projection.controller.ts
var import_core3 = require("@univerjs/core"), import_engine_formula = require("@univerjs/engine-formula");
var RustSameRuntimeProjectionController = class extends import_core3.Disposable {
  constructor(_univerInstanceService, _rustEngineSyncController, _formulaDataModel, _superTableService, _commandService, _activeDirtyManagerService) {
    super();
    this._univerInstanceService = _univerInstanceService;
    this._rustEngineSyncController = _rustEngineSyncController;
    this._formulaDataModel = _formulaDataModel;
    this._superTableService = _superTableService;
    this._commandService = _commandService;
    this._activeDirtyManagerService = _activeDirtyManagerService;
    this._initialize();
  }
  _univerInstanceService;
  _rustEngineSyncController;
  _formulaDataModel;
  _superTableService;
  _commandService;
  _activeDirtyManagerService;
  _initialProjectionLoad = Promise.resolve();
  _projectionDeltaQueue = Promise.resolve();
  _baseProjectionStructures = /* @__PURE__ */ new Map();
  _initialize() {
    for (let base of this._univerInstanceService.getAllUnitsForType(
      import_core3.UniverInstanceType.UNIVER_BASE
    ))
      this._rustEngineSyncController.setProjectionManagedTableUnit(base.getUnitId()), this._rememberBaseProjectionStructure(base.getSnapshot());
    this._initialProjectionLoad = this._loadAllWorkbookProjections(), this.disposeWithMe(
      (0, import_core3.toDisposable)(
        this._univerInstanceService.getTypeOfUnitAdded$(import_core3.UniverInstanceType.UNIVER_SHEET).subscribe(({ unit }) => {
          this._enqueueProjectionDelta(() => {
            this._rustEngineSyncController.upsertProjectionWorkbook({
              unitId: unit.getUnitId(),
              snapshot: unit.getSnapshot()
            });
          });
        })
      )
    ), this.disposeWithMe(
      (0, import_core3.toDisposable)(
        this._univerInstanceService.getTypeOfUnitAdded$(import_core3.UniverInstanceType.UNIVER_BASE).subscribe(({ unit }) => {
          this._rustEngineSyncController.setProjectionManagedTableUnit(unit.getUnitId()), this._rememberBaseProjectionStructure(unit.getSnapshot()), this._enqueueProjectionDelta(() => this._upsertBaseProjection(unit.getUnitId()));
        })
      )
    ), this.disposeWithMe(
      this._commandService.onCommandExecuted((command) => {
        command.type !== import_core3.CommandType.MUTATION || !hasUnitId2(command.params) || this._univerInstanceService.getUnit(command.params.unitId, import_core3.UniverInstanceType.UNIVER_BASE) && (hasTrigger(command.params) && command.params.trigger === import_engine_formula.SetFormulaCalculationResultMutation.id || isRustFormulaRelevantMutation(command.id) || this._enqueueProjectionDelta(() => this._syncBaseMutation(command)));
      })
    ), this.disposeWithMe(
      (0, import_core3.toDisposable)(
        this._univerInstanceService.getTypeOfUnitDisposed$(import_core3.UniverInstanceType.UNIVER_BASE).subscribe((base) => {
          this._baseProjectionStructures.delete(base.getUnitId()), this._rustEngineSyncController.unsetProjectionManagedTableUnit(base.getUnitId()), this._enqueueProjectionDelta(
            () => this._rustEngineSyncController.disposeProjectionWorkbook(base.getUnitId())
          );
        })
      )
    ), this.disposeWithMe(
      (0, import_core3.toDisposable)(
        this._univerInstanceService.getTypeOfUnitDisposed$(import_core3.UniverInstanceType.UNIVER_SHEET).subscribe((workbook) => {
          this._enqueueProjectionDelta(
            () => this._rustEngineSyncController.disposeProjectionWorkbook(workbook.getUnitId())
          );
        })
      )
    ), this.disposeWithMe(
      (0, import_core3.toDisposable)(() => {
        this._projectionDeltaQueue = Promise.resolve();
      })
    );
  }
  _enqueueProjectionDelta(task) {
    this._projectionDeltaQueue = this._projectionDeltaQueue.then(() => this._initialProjectionLoad).then(() => {
      if (!this._disposed)
        return task();
    }).catch(() => {
    }), this._rustEngineSyncController.setProjectionDeltaBarrier(this._projectionDeltaQueue);
  }
  async _syncBaseMutation(command) {
    if (!hasUnitId2(command.params)) return;
    let unitId = command.params.unitId, dirtyData = this._activeDirtyManagerService.get(command.id)?.getDirtyData(command), dirtyRanges = (dirtyData?.dirtyRanges ?? []).filter((dirtyRange) => dirtyRange.unitId === unitId), hasStructureInvalidation = !!dirtyData?.clearDependencyTreeCache?.[unitId] || !!(dirtyData?.forceCalculation && dirtyRanges.length === 0);
    if (dirtyRanges.length > 0 && !hasStructureInvalidation) {
      this._applyBaseDirtyRanges(unitId, dirtyRanges);
      return;
    }
    hasStructureInvalidation && this._isBaseProjectionStructureUnchanged(unitId) || hasStructureInvalidation && this._applyBaseFieldInsertion(unitId, dirtyRanges) || await this._upsertBaseProjection(unitId);
  }
  _applyBaseFieldInsertion(unitId, dirtyRanges) {
    let base = this._univerInstanceService.getUnit(unitId, import_core3.UniverInstanceType.UNIVER_BASE), previous = this._baseProjectionStructures.get(unitId);
    if (!base || !previous) return !1;
    let snapshot = base.getSnapshot(), insertion = findSingleBaseFieldInsertion(previous, snapshot);
    if (!insertion) return !1;
    let projectionData = this._getBaseProjectionData(unitId), sheet = projectionData?.calculationData.allUnitData[unitId]?.[insertion.tableId];
    if (!projectionData || !sheet) return !1;
    let formulaData = projectionData.formulaData[unitId]?.[insertion.tableId], cellValue = {};
    for (let row = 0; row < sheet.rowCount; row++) {
      let value = sheet.cellData.getValue(row, insertion.column), formula = formulaData?.[row]?.[insertion.column];
      cellValue[row] = {
        [insertion.column]: formula ? { ...value, ...formula } : value ?? null
      };
    }
    let insertedRange = {
      startRow: 0,
      endRow: Math.max(0, sheet.rowCount - 1),
      startColumn: insertion.column,
      endColumn: insertion.column
    };
    return this._rustEngineSyncController.applyProjectionMutation({
      id: "sheet.mutation.insert-col",
      params: {
        unitId,
        subUnitId: insertion.tableId,
        range: insertedRange
      },
      dirtyRanges: []
    }), this._rustEngineSyncController.applyProjectionMutation({
      id: "sheet.mutation.set-range-values",
      params: {
        unitId,
        subUnitId: insertion.tableId,
        cellValue
      },
      dirtyRanges: [
        {
          unitId,
          sheetId: insertion.tableId,
          range: insertedRange
        }
      ]
    }), this._rustEngineSyncController.applyProjectionMutation({
      id: RUST_SET_SUPER_TABLES_MUTATION_ID,
      params: {
        unitId,
        tables: this._getBaseTableEntries(
          insertion.tableId,
          snapshot,
          (0, import_core3.createBaseFormulaTableNameMap)(snapshot)
        ).map(([tableName, reference]) => ({
          tableName,
          reference
        }))
      },
      dirtyRanges: []
    }), dirtyRanges.length > 0 && this._applyBaseDirtyRanges(unitId, dirtyRanges), this._rememberBaseProjectionStructure(snapshot), !0;
  }
  _applyBaseDirtyRanges(unitId, dirtyRanges) {
    let projectionData = this._getBaseProjectionData(unitId);
    if (!projectionData) return;
    let { calculationData, formulaData } = projectionData, rangesBySheet = /* @__PURE__ */ new Map();
    for (let dirtyRange of dirtyRanges) {
      let ranges = rangesBySheet.get(dirtyRange.sheetId) ?? [];
      ranges.push(dirtyRange), rangesBySheet.set(dirtyRange.sheetId, ranges);
    }
    for (let [sheetId, ranges] of rangesBySheet) {
      let sheet = calculationData.allUnitData[unitId]?.[sheetId];
      if (!sheet) continue;
      let cellValue = {};
      for (let { range } of ranges)
        for (let row = range.startRow; row <= range.endRow; row++)
          for (let column = range.startColumn; column <= range.endColumn; column++) {
            let value = sheet.cellData.getValue(row, column), formula = formulaData[unitId]?.[sheetId]?.[row]?.[column];
            (cellValue[row] ??= {})[column] = formula ? { ...value, ...formula } : value ?? null;
          }
      this._rustEngineSyncController.applyProjectionMutation({
        id: "sheet.mutation.set-range-values",
        params: {
          unitId,
          subUnitId: sheetId,
          cellValue
        },
        dirtyRanges: ranges
      });
    }
  }
  async _upsertBaseProjection(unitId) {
    let projectionData = this._getBaseProjectionData(unitId);
    if (!projectionData) return;
    let { calculationData, formulaData } = projectionData, workbook = this._createBaseWorkbookProjection(
      unitId,
      calculationData.allUnitData,
      calculationData.unitSheetNameMap,
      calculationData.unitNameMap,
      formulaData
    );
    workbook && this._rustEngineSyncController.upsertProjectionWorkbook(workbook);
    let base = this._univerInstanceService.getUnit(unitId, import_core3.UniverInstanceType.UNIVER_BASE);
    base && this._rememberBaseProjectionStructure(base.getSnapshot());
  }
  _rememberBaseProjectionStructure(snapshot) {
    this._baseProjectionStructures.set(snapshot.id, createBaseProjectionStructure(snapshot));
  }
  _isBaseProjectionStructureUnchanged(unitId) {
    let base = this._univerInstanceService.getUnit(unitId, import_core3.UniverInstanceType.UNIVER_BASE), previous = this._baseProjectionStructures.get(unitId);
    return !!(base && previous && isSameBaseProjectionStructure(previous, createBaseProjectionStructure(base.getSnapshot())));
  }
  _getBaseProjectionData(unitId) {
    let base = this._univerInstanceService.getUnit(unitId, import_core3.UniverInstanceType.UNIVER_BASE);
    if (!base) return null;
    let snapshot = base.getSnapshot(), allUnitData = { [unitId]: {} }, unitSheetNameMap = { [unitId]: {} }, unitNameMap = {
      [unitId]: {
        name: snapshot.name,
        unitType: import_core3.UniverInstanceType.UNIVER_BASE
      }
    }, formulaData = { [unitId]: {} }, formulaTableNames = (0, import_core3.createBaseFormulaTableNameMap)(snapshot), normalizeFormulaTableReferences = (0, import_core3.createBaseFormulaTableReferenceNormalizer)(snapshot, formulaTableNames);
    for (let table of Object.values(snapshot.tables)) {
      let fieldOrder = table.fieldOrder;
      allUnitData[unitId][table.id] = {
        cellData: new import_core3.ObjectMatrix(
          buildBaseRuntimeCellData(table)
        ),
        rowCount: baseRecordOrder(table).length,
        columnCount: fieldOrder.length,
        rowData: {},
        columnData: {}
      }, unitSheetNameMap[unitId][formulaTableNames.get(table.id)] = table.id;
      let tableFormulaData = {}, normalizedFormulaByFieldId = /* @__PURE__ */ new Map(), recordOrder = baseRecordOrder(table);
      for (let row = 0; row < recordOrder.length; row++)
        if (table.records[recordOrder[row]])
          for (let column = 0; column < fieldOrder.length; column++) {
            let field = table.fields[fieldOrder[column]];
            if (!field || field.type !== "formula") continue;
            let formula = String(field.config?.formula ?? "").trim();
            if (!formula) continue;
            let normalizedFormula = normalizedFormulaByFieldId.get(field.id);
            normalizedFormula == null && (normalizedFormula = normalizeBaseFormulaForEngine(
              formula,
              table,
              formulaTableNames,
              normalizeFormulaTableReferences
            ), normalizedFormulaByFieldId.set(field.id, normalizedFormula)), (tableFormulaData[row] ??= {})[column] = {
              f: normalizedFormula,
              si: field.id
            };
          }
      formulaData[unitId][table.id] = tableFormulaData;
    }
    return {
      calculationData: {
        allUnitData,
        unitSheetNameMap,
        unitNameMap
      },
      formulaData
    };
  }
  async _loadAllWorkbookProjections() {
    let workbooks = this._univerInstanceService.getAllUnitsForType(import_core3.UniverInstanceType.UNIVER_SHEET).map((workbook) => ({
      unitId: workbook.getUnitId(),
      snapshot: workbook.getSnapshot()
    })), calculationData = this._formulaDataModel.getCalculateData(), formulaData = this._formulaDataModel.getFormulaData(), baseWorkbooks = this._univerInstanceService.getAllUnitsForType(import_core3.UniverInstanceType.UNIVER_BASE).map(
      (base) => this._createBaseWorkbookProjection(
        base.getUnitId(),
        calculationData.allUnitData,
        calculationData.unitSheetNameMap,
        calculationData.unitNameMap ?? {},
        formulaData
      )
    ).filter((workbook) => workbook != null);
    workbooks.push(...baseWorkbooks), await this._rustEngineSyncController.loadProjection(workbooks);
  }
  _createBaseWorkbookProjection(unitId, allUnitData, unitSheetNameMap, unitNameMap, formulaData) {
    let unitData = allUnitData[unitId];
    if (!unitData) return null;
    let sheetNameMap = unitSheetNameMap[unitId] ?? {}, sheetOrder = Object.keys(unitData), resources = this._createBaseTableResource(unitId), sheets = {};
    for (let sheetId of sheetOrder) {
      let sheet = unitData[sheetId];
      if (!sheet) continue;
      let cellData = this._rawCellData(sheet.cellData);
      for (let [rowKey, row] of Object.entries(formulaData[unitId]?.[sheetId] ?? {}))
        for (let [columnKey, formula] of Object.entries(row ?? {})) {
          if (!formula) continue;
          let rowIndex = Number(rowKey), columnIndex = Number(columnKey), current = cellData[rowIndex]?.[columnIndex] ?? {};
          (cellData[rowIndex] ??= {})[columnIndex] = { ...current, ...formula };
        }
      sheets[sheetId] = {
        id: sheetId,
        name: Object.entries(sheetNameMap).find(([, currentSheetId]) => currentSheetId === sheetId)?.[0] ?? sheetId,
        rowCount: sheet.rowCount,
        columnCount: sheet.columnCount,
        cellData,
        rowData: sheet.rowData,
        columnData: sheet.columnData
      };
    }
    return {
      unitId,
      snapshot: {
        id: unitId,
        name: unitNameMap[unitId]?.name ?? unitId,
        appVersion: "",
        locale: import_core3.LocaleType.EN_US,
        styles: {},
        sheetOrder,
        sheets,
        resources
      }
    };
  }
  _createBaseTableResource(unitId) {
    let base = this._univerInstanceService.getUnit(unitId, import_core3.UniverInstanceType.UNIVER_BASE);
    if (base) {
      let snapshot = base.getSnapshot(), tables = Object.values(snapshot.tables), formulaTableNames = (0, import_core3.createBaseFormulaTableNameMap)(snapshot), data2 = {};
      for (let table of tables)
        for (let [name2, reference] of this._getBaseTableEntries(table.id, snapshot, formulaTableNames)) {
          let columns = Array.from(reference.titleMap.entries()).toSorted((left, right) => left[1] - right[1]).map(([displayName]) => ({ displayName }));
          (data2[table.id] ??= { tables: [] }).tables.push({
            name: name2,
            range: reference.range,
            columns,
            options: { showHeader: reference.showHeader !== !1 }
          });
        }
      return [
        {
          name: "SHEET_TABLE_PLUGIN",
          data: JSON.stringify(data2)
        }
      ];
    }
    let tableMap = this._superTableService.getTableMap(unitId);
    if (!tableMap) return [];
    let data = {};
    for (let [name2, table] of tableMap) {
      let columns = Array.from(table.titleMap.entries()).toSorted((left, right) => left[1] - right[1]).map(([displayName]) => ({ displayName }));
      (data[table.sheetId] ??= { tables: [] }).tables.push({
        name: name2,
        range: table.range,
        columns,
        options: { showHeader: table.showHeader !== !1 }
      });
    }
    return [
      {
        name: "SHEET_TABLE_PLUGIN",
        data: JSON.stringify(data)
      }
    ];
  }
  _getBaseTableEntries(tableId, snapshot, formulaTableNames) {
    let table = snapshot.tables[tableId];
    if (!table) return [];
    let recordCount = baseRecordOrder(table).length, fieldOrder = table.fieldOrder, reference = {
      sheetId: table.id,
      range: {
        startRow: 0,
        endRow: Math.max(0, recordCount - 1),
        startColumn: 0,
        endColumn: Math.max(0, fieldOrder.length - 1)
      },
      titleMap: new Map(fieldOrder.map((fieldId, index) => [table.fields[fieldId]?.name ?? fieldId, index])),
      showHeader: !1
    };
    return [[formulaTableNames.get(table.id), reference]];
  }
  _rawCellData(cellData) {
    let raw = cellData.getMatrix(), result = {};
    for (let [row, values] of Object.entries(raw ?? {})) {
      let rowData = {};
      for (let [column, value] of Object.entries(values ?? {}))
        value && (rowData[Number(column)] = { ...value });
      result[Number(row)] = rowData;
    }
    return result;
  }
};
function createBaseProjectionStructure(snapshot) {
  let formulaTableNames = (0, import_core3.createBaseFormulaTableNameMap)(snapshot);
  return {
    unitName: snapshot.name,
    tables: Object.fromEntries(
      Object.values(snapshot.tables).map((table) => [
        table.id,
        {
          formulaName: formulaTableNames.get(table.id),
          fieldOrder: [...table.fieldOrder],
          recordOrder: baseRecordOrder(table),
          fieldSignatures: Object.fromEntries(
            Object.entries(table.fields).map(([fieldId, field]) => [fieldId, JSON.stringify(field)])
          )
        }
      ])
    )
  };
}
function isSameBaseProjectionStructure(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}
function findSingleBaseFieldInsertion(previous, snapshot) {
  let current = createBaseProjectionStructure(snapshot), previousTableIds = Object.keys(previous.tables).toSorted(), currentTableIds = Object.keys(current.tables).toSorted();
  if (JSON.stringify(previousTableIds) !== JSON.stringify(currentTableIds)) return null;
  let insertion = null;
  for (let tableId of currentTableIds) {
    let before = previous.tables[tableId], after = current.tables[tableId];
    if (!before || !after || before.formulaName !== after.formulaName || JSON.stringify(before.recordOrder) !== JSON.stringify(after.recordOrder)) return null;
    for (let fieldId of before.fieldOrder)
      if (before.fieldSignatures[fieldId] !== after.fieldSignatures[fieldId]) return null;
    if (JSON.stringify(before.fieldOrder) === JSON.stringify(after.fieldOrder)) continue;
    if (insertion || after.fieldOrder.length !== before.fieldOrder.length + 1) return null;
    let column = after.fieldOrder.findIndex((fieldId, index) => fieldId !== before.fieldOrder[index]);
    if (column < 0) return null;
    let withoutInserted = after.fieldOrder.filter((_, index) => index !== column);
    if (JSON.stringify(withoutInserted) !== JSON.stringify(before.fieldOrder)) return null;
    insertion = { tableId, column };
  }
  return insertion;
}
var BASE_LEGACY_FIELD_REF_PATTERN = /\{([^}]+)\}/g, BASE_TABLE_REFERENCE_PREFIX = /\b[A-Z_][\w.]*\[/gi, BASE_SCOPED_FIELD_REF_PATTERN = /(^|[^\w[])\[\[\s*#(This Row|Data)\s*\],\s*\[([^\]]+)\]\]/gi, BASE_CURRENT_ROW_FIELD_REF_PATTERN = /(^|[^\w[])\[@\[([^\]]+)\]\](?!\])/g, BASE_BRACKET_FIELD_REF_PATTERN = /(^|[^A-Za-z0-9_[\]])\[([^\]]+)\]/g, BASE_EXTERNAL_A1_REF_PATTERN = /(?:'\[[^\]]+\](?:[^']|'')+'|\[[^\]]+\][^\s'!]+)!\$?[A-Z]{1,3}\$?\d+(?::\$?[A-Z]{1,3}\$?\d+)?/gi, BASE_EXTERNAL_STRUCTURED_REFERENCE_PREFIX = /(?:'((?:[^']|'')+)'|\[[^\]]+\]|[A-Za-z0-9_.-]+)![^\s![\]]+\[/g;
function normalizeBaseFormulaForEngine(formula, currentTable, formulaTableNames, normalizeFormulaTableReferences) {
  let canonicalFormula = normalizeFormulaTableReferences(formula), references = [], hold = (reference) => `__BASE_FORMULA_REF_${references.push(reference) - 1}__`;
  return protectBaseTableReferences(protectBaseExternalReferences(canonicalFormula, hold), hold).replace(
    BASE_LEGACY_FIELD_REF_PATTERN,
    (_match, fieldName) => hold(createEngineThisRowRef(currentTable, fieldName, formulaTableNames))
  ).replace(BASE_SCOPED_FIELD_REF_PATTERN, (_match, prefix, scope, fieldName) => {
    let tableName = formulaTableNames.get(currentTable.id) ?? currentTable.name;
    return `${prefix}${hold(`${tableName}[[#${scope}],[${fieldName}]]`)}`;
  }).replace(BASE_CURRENT_ROW_FIELD_REF_PATTERN, (_match, prefix, fieldName) => `${prefix}${hold(createEngineThisRowRef(currentTable, fieldName, formulaTableNames))}`).replace(BASE_BRACKET_FIELD_REF_PATTERN, (_match, prefix, fieldName) => `${prefix}${hold(createEngineThisRowRef(currentTable, fieldName, formulaTableNames))}`).replace(
    /__BASE_FORMULA_REF_(\d+)__/g,
    (_match, index) => references[Number(index)] ?? ""
  );
}
function protectBaseTableReferences(formula, replace) {
  return protectBaseStructuredReferences(formula, BASE_TABLE_REFERENCE_PREFIX, replace);
}
function protectBaseExternalReferences(formula, replace) {
  let withProtectedA1 = formula.replace(
    BASE_EXTERNAL_A1_REF_PATTERN,
    (reference, offset) => isInsideBaseFormulaString(formula, offset) ? reference : replace(reference)
  );
  return protectBaseExternalStructuredReferences(withProtectedA1, replace);
}
function protectBaseExternalStructuredReferences(formula, replace) {
  return protectBaseStructuredReferences(formula, BASE_EXTERNAL_STRUCTURED_REFERENCE_PREFIX, replace);
}
function protectBaseStructuredReferences(formula, prefixPattern, replace) {
  let spans = [];
  prefixPattern.lastIndex = 0;
  let match;
  for (; (match = prefixPattern.exec(formula)) != null; ) {
    if (isInsideBaseFormulaString(formula, match.index)) continue;
    let openBracket = prefixPattern.lastIndex - 1, depth = 0;
    for (let index = openBracket; index < formula.length; index++)
      if (formula[index] === "[" && depth++, formula[index] === "]" && (depth--, depth === 0)) {
        spans.push({ start: match.index, end: index + 1 }), prefixPattern.lastIndex = index + 1;
        break;
      }
  }
  if (spans.length === 0) return formula;
  let result = "", offset = 0;
  for (let span of spans)
    result += formula.slice(offset, span.start), result += replace(formula.slice(span.start, span.end)), offset = span.end;
  return result + formula.slice(offset);
}
function isInsideBaseFormulaString(formula, position) {
  let inString = !1;
  for (let index = 0; index < position; index++)
    if (formula[index] === '"') {
      if (inString && formula[index + 1] === '"') {
        index++;
        continue;
      }
      inString = !inString;
    }
  return inString;
}
function createEngineThisRowRef(table, fieldName, formulaTableNames) {
  return `${formulaTableNames.get(table.id) ?? table.name}[[#This Row],[${fieldName}]]`;
}
function baseRecordOrder(table) {
  return table.recordOrder ? table.recordOrder.filter((recordId) => table.records[recordId] != null) : Object.values(table.records ?? {}).toSorted((left, right) => left.orderKey.localeCompare(right.orderKey)).map((record) => record.id);
}
function buildBaseRuntimeCellData(table) {
  let cellData = { ...table.cellData }, fieldOrder = table.fieldOrder, recordOrder = baseRecordOrder(table);
  for (let row = 0; row < recordOrder.length; row++) {
    let record = table.records[recordOrder[row]];
    if (record) {
      cellData[row] = { ...cellData[row] };
      for (let column = 0; column < fieldOrder.length; column++) {
        let fieldId = fieldOrder[column];
        table.fields[fieldId] && Object.prototype.hasOwnProperty.call(record.values ?? {}, fieldId) && (cellData[row][column] = toBaseRuntimeCellData(record.values[fieldId], table.fields[fieldId]));
      }
    }
  }
  return cellData;
}
function toBaseRuntimeCellData(value, field) {
  if (isBaseCellData(value))
    return { ...value, t: inferBaseRuntimeCellType(value.v ?? null) };
  if (field?.type === "attachment")
    return { v: "", t: import_core3.CellValueType.STRING };
  if (Array.isArray(value))
    return { v: value.join(", "), t: import_core3.CellValueType.STRING };
  if (field?.type === "link" && value && typeof value == "object") {
    let link = value;
    return { v: String(link.text ?? link.url ?? ""), t: import_core3.CellValueType.STRING };
  }
  return value === null || typeof value == "string" || typeof value == "number" || typeof value == "boolean" ? { v: value, t: inferBaseRuntimeCellType(value) } : { v: null, t: null };
}
function inferBaseRuntimeCellType(value) {
  return typeof value == "number" ? import_core3.CellValueType.NUMBER : typeof value == "boolean" ? import_core3.CellValueType.BOOLEAN : typeof value == "string" ? import_core3.CellValueType.STRING : null;
}
function isBaseCellData(value) {
  return value != null && typeof value == "object" && ["v", "t", "p", "f", "si"].some((key) => Object.prototype.hasOwnProperty.call(value, key));
}
function hasUnitId2(value) {
  return value != null && typeof value == "object" && "unitId" in value && typeof value.unitId == "string";
}
function hasTrigger(value) {
  return "trigger" in value && typeof value.trigger == "string";
}
(0, import_core3.setDependencies)(RustSameRuntimeProjectionController, [
  import_core3.IUniverInstanceService,
  RustEngineSyncController,
  import_engine_formula.FormulaDataModel,
  import_engine_formula.ISuperTableService,
  import_core3.ICommandService,
  import_engine_formula.IActiveDirtyManagerService
]);

// src/services/calculate-formula.service.ts
var import_core4 = require("@univerjs/core"), import_engine_formula2 = require("@univerjs/engine-formula"), import_engine_formula3 = require("@univerjs-pro/engine-formula"), import_rxjs = require("rxjs");
var IRustCalculateFormulaService = (0, import_core4.createIdentifier)(
  "engine-formula-rust.calculate-formula.service"
), DEFAULT_INTERVAL_COUNT = 500, MAX_FEATURE_CALCULATION_PASSES = 8, MAX_EXTERNAL_REFERENCE_PASSES = 8, FORMULA_TREE_TYPE_NORMAL = 0, FORMULA_TREE_TYPE_OTHER = 1, FORMULA_TREE_TYPE_FEATURE = 2;
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
          ...typeof cell.t == "number" ? { t: cell.t } : {},
          ...cell.p != null ? { p: cell.p } : {},
          ...typeof cell.f == "string" ? { f: cell.f } : {},
          ...typeof cell.si == "string" ? { si: cell.si } : {},
          ...typeof cell.ref == "string" ? { ref: cell.ref } : {},
          ...typeof cell.xf == "string" ? { xf: cell.xf } : {},
          ...cell.s != null ? { s: cell.s } : {}
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
  return output.resultBatches?.find((batch) => batch.values.length > 0)?.values[0];
}
function resultBatchSheetCounts(output) {
  let counts = {};
  for (let batch of output.resultBatches ?? []) {
    let key = `${batch.unitId}/${batch.sheetId}`;
    counts[key] = (counts[key] ?? 0) + batch.values.length;
  }
  return counts;
}
var RustCalculateFormulaService = class extends import_core4.Disposable {
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
    this._commandService.hasCommand(import_engine_formula2.SetFormulaCalculationResultMutation.id) || this.disposeWithMe(this._commandService.registerCommand(import_engine_formula2.SetFormulaCalculationResultMutation)), this._commandService.hasCommand(import_engine_formula2.SetArrayFormulaDataMutation.id) || this.disposeWithMe(this._commandService.registerCommand(import_engine_formula2.SetArrayFormulaDataMutation));
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
  _executionInProgressListener$ = new import_rxjs.Subject();
  executionInProgressListener$ = this._executionInProgressListener$.asObservable();
  _executionCompleteListener$ = new import_rxjs.Subject();
  executionCompleteListener$ = this._executionCompleteListener$.asObservable();
  _executeLock = new import_core4.AsyncLock();
  _nativeLoaded = !1;
  _syncedSnapshotEpoch = -1;
  _syncedDependencyInvalidationEpoch = -1;
  _syncedExternalReferenceSignature = "{}";
  _externalFormulaDatasetConfig;
  _externalRequestCounter = 0;
  _externalRequestGeneration = -1;
  _externalInflight = /* @__PURE__ */ new Map();
  _externalCompleted = /* @__PURE__ */ new Map();
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
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), await this._rustEngineSyncController.waitForProjectionLoad(), this._externalFormulaDatasetConfig = formulaDatasetConfig, this._currentConfigService.load(formulaDatasetConfig), this._externalRequestGeneration++, this._externalInflight.clear(), this._externalCompleted.clear(), this._runtimeService.setFormulaExecuteStage(import_engine_formula2.FormulaExecuteStageType.START), this._executionInProgressListener$.next(this._runtimeService.getRuntimeState()), this._runtimeService.reset();
    let cycleReferenceCount = Math.max(formulaDatasetConfig.maxIteration || 1, 1);
    await this._executeLock.acquire("FORMULA_EXECUTION_LOCK", async () => {
      this._runtimeService.setFormulaCycleIndex(0), await this._executeStep(cycleReferenceCount) > 0 ? this._runtimeService.markedAsSuccessfullyExecuted() : this._runtimeService.markedAsNoFunctionsExecuted(), this._runtimeService.setFormulaExecuteStage(import_engine_formula2.FormulaExecuteStageType.CALCULATION_COMPLETED), this._executionInProgressListener$.next(this._runtimeService.getRuntimeState()), this._executionCompleteListener$.next(this._runtimeService.getAllRuntimeData()), this._runtimeService.reset();
    });
  }
  async _executeStep(maxIteration) {
    let syncedFeatures = this._syncRustFormulaDependencies(void 0, !0), previousFeatureSignatures = this._featureSignatureMap(syncedFeatures), executeStartedAt = performance.now(), outputJson = executeDirtyFormulasOnRust(maxIteration, !1, !1, !0), nativeAndSerializeMs = performance.now() - executeStartedAt, parseStartedAt = performance.now(), output = JSON.parse(outputJson), calculatedNodeCount = output.calculatedNodeCount, parseMs = performance.now() - parseStartedAt;
    output = await this._resolveExternalReferenceNeeds(output, maxIteration);
    let applyStartedAt = performance.now(), applyBreakdown = await this._applyRustDependencyOutput(output), applyMs = performance.now() - applyStartedAt;
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
    }), syncedFeatures.length > 0)
      for (let pass = 0; pass < MAX_FEATURE_CALCULATION_PASSES; pass++) {
        let refreshedFeatures = this._syncRustFormulaDependencyDefinitions(), changedFeatures = refreshedFeatures.filter(
          (feature) => previousFeatureSignatures.get(this._featureKey(feature)) !== feature.signature
        );
        if (changedFeatures.length === 0)
          break;
        this._markRustFormulaDirty(
          this._currentConfigService.getDirtyData(),
          this._dirtyFeatureMapFor(changedFeatures)
        ), executeStartedAt = performance.now(), outputJson = executeDirtyFormulasOnRust(maxIteration, !1, !1, !0), nativeAndSerializeMs = performance.now() - executeStartedAt, parseStartedAt = performance.now(), output = JSON.parse(outputJson), calculatedNodeCount += output.calculatedNodeCount, parseMs = performance.now() - parseStartedAt, output = await this._resolveExternalReferenceNeeds(output, maxIteration), applyStartedAt = performance.now(), applyBreakdown = await this._applyRustDependencyOutput(output), applyMs = performance.now() - applyStartedAt, emitRustFormulaDebugEvent({
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
      let rangeNeeds = output.needsData ?? [], tableNeeds = output.tableNeedsData ?? [];
      if (rangeNeeds.length === 0 && tableNeeds.length === 0) break;
      let loadedRanges = await this._loadExternalReferenceNeeds(config, output, rangeNeeds, tableNeeds);
      if (loadedRanges.length === 0 || this._rustEngineSyncController.upsertReferenceData(
        {
          ...config,
          allUnitData: this._currentConfigService.getUnitData(),
          unitSheetNameMap: this._currentConfigService.getSheetNameMap(),
          unitNameMap: this._currentConfigService.getUnitNameMap()
        },
        loadedRanges,
        this._superTableService
      ) === 0) break;
      this._syncRustFormulaDependencies(), output = JSON.parse(executeDirtyFormulasOnRust(maxIteration, !1, !1, !0));
    }
    return output;
  }
  async _loadExternalReferenceNeeds(config, output, rangeNeeds, tableNeeds) {
    let loaded = [];
    for (let need of rangeNeeds) {
      let binding = this._resolveRustExternalBinding(config, need.unitId);
      !binding || await this._loadRustExternalReference(binding, {
        sheetName: need.sheetId,
        range: need.range
      }) !== !0 || loaded.push({
        ...need,
        ...binding.dataUnitId !== need.unitId ? { dataUnitId: binding.dataUnitId } : {}
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
      let unit = output.otherFormulaData ??= {}, sheet = unit[need.ownerUnitId] ??= {}, formulas = sheet[need.ownerSheetId] ??= {}, rows = formulas[need.formulaId] ??= {}, columns = rows[need.row] ??= {};
      columns[need.column] = error;
      return;
    }
    let batch = output.resultBatches.find(
      (candidate) => candidate.unitId === need.ownerUnitId && candidate.sheetId === need.ownerSheetId
    ) ?? {
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
    let generation = this._externalRequestGeneration, calculationId = `rust-formula-calculation-${generation}`, request = {
      requestId: `rust-external-request-${++this._externalRequestCounter}`,
      calculationId,
      hostUnitId: binding.hostUnitId,
      ...binding.referenceId ? { referenceId: binding.referenceId } : {},
      ...binding.bindingSlot ? { bindingSlot: binding.bindingSlot } : {},
      syntheticUnitId: binding.dataUnitId,
      target: binding.target,
      ranges: [range],
      requireFresh: !0
    }, key = [
      generation,
      binding.hostUnitId,
      binding.dataUnitId,
      range.sheetName,
      range.sheetId,
      range.tableName,
      range.range?.startRow,
      range.range?.endRow,
      range.range?.startColumn,
      range.range?.endColumn
    ].join("\0"), completed = this._externalCompleted.get(key);
    if (completed != null)
      return completed;
    let pending = this._externalInflight.get(key);
    pending || (pending = this._formulaReferenceDataService.readData(
      request
    ), this._externalInflight.set(key, pending));
    let response;
    try {
      response = await pending;
    } finally {
      this._externalInflight.get(key) === pending && this._externalInflight.delete(key);
    }
    return generation !== this._externalRequestGeneration || response.calculationId !== calculationId ? "#N/A" : response.error ? (this._externalCompleted.set(key, response.error), response.error) : response.sheets.length === 0 ? (this._externalCompleted.set(key, "#N/A"), "#N/A") : (this._materializeRustExternalReference(response, binding), this._externalCompleted.set(key, !0), !0);
  }
  _materializeRustExternalReference(response, binding) {
    let unitData = this._currentConfigService.getUnitData(), sheetNameMap = this._currentConfigService.getSheetNameMap(), unitNameMap = this._currentConfigService.getUnitNameMap(), sheets = unitData[binding.dataUnitId] ?? {}, names = sheetNameMap[binding.dataUnitId] ?? {};
    for (let responseSheet of response.sheets) {
      let current = sheets[responseSheet.sheetId], cellData = current?.cellData ?? new import_core4.ObjectMatrix();
      for (let { row, column, cell } of responseSheet.cells)
        cellData.setValue(row, column, cell);
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
    for (let table of response.tables ?? [])
      this._superTableService.registerTable(binding.dataUnitId, table.name, {
        sheetId: table.sheetId,
        range: table.range,
        titleMap: new Map(table.columns.map((column, index) => [column, index])),
        showHeader: table.showHeader
      });
  }
  _resolveRustExternalBinding(config, unitId) {
    let externalReferences = config.externalReferences ?? {};
    for (let [hostUnitId, resource] of Object.entries(externalReferences))
      for (let [referenceId, reference] of Object.entries(resource.references))
        if (createRustProductExternalSyntheticUnitId(hostUnitId, referenceId) === unitId)
          return {
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
    if (binding.status === "resolved")
      return {
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
    if (!(separator <= 9 || !/^\d+$/.test(unitId.slice(separator + 1))))
      try {
        return {
          hostUnitId: decodeURIComponent(unitId.slice(9, separator)),
          slot: Number(unitId.slice(separator + 1))
        };
      } catch {
        return;
      }
  }
  _buildRustInput() {
    let unitData = this._currentConfigService.getUnitData(), formulaData = this._currentConfigService.getFormulaData(), dirtyRanges = this._currentConfigService.getDirtyRanges(), config = this._configService.getConfig(import_engine_formula2.ENGINE_FORMULA_PLUGIN_CONFIG_KEY);
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
    let syncState = getRustEngineSyncState(), externalReferences = includeExternalReferences ? this._externalFormulaDatasetConfig?.externalReferences ?? {} : void 0, externalReferenceSignature = externalReferences ? JSON.stringify(externalReferences) : this._syncedExternalReferenceSignature, shouldSendExternalReferences = includeExternalReferences && (externalReferenceSignature !== "{}" || this._syncedExternalReferenceSignature !== "{}"), rebuildSheetFormulas = this._syncedSnapshotEpoch !== syncState.snapshotEpoch || this._syncedDependencyInvalidationEpoch !== syncState.dependencyInvalidationEpoch || shouldSendExternalReferences, collectStartedAt = performance.now(), state = this._collectRustFormulaDependencySyncState(), collectMs = performance.now() - collectStartedAt;
    if (!(shouldSendExternalReferences || rebuildSheetFormulas || state.featureCalculations.length > 0 || state.otherFormulas.length > 0))
      return emitRustFormulaDebugEvent({
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
    let stringifyStartedAt = performance.now(), inputJson = JSON.stringify({
      rebuildSheetFormulas,
      featureCalculations: state.featureCalculations,
      otherFormulas: state.otherFormulas,
      ...shouldSendExternalReferences ? { externalReferences } : {}
    }), stringifyMs = performance.now() - stringifyStartedAt, nativeStartedAt = performance.now(), outputJson = syncRustFormulaDependenciesOnRust(inputJson), nativeMs = performance.now() - nativeStartedAt, parseStartedAt = performance.now(), output = JSON.parse(outputJson), parseMs = performance.now() - parseStartedAt;
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
    return syncRustFormulaDependenciesOnRust(
      JSON.stringify({
        rebuildSheetFormulas: !1,
        featureCalculations: state.featureCalculations,
        otherFormulas: state.otherFormulas
      })
    ), state.syncedFeatures;
  }
  _collectRustFormulaDependencySyncState() {
    let featureCalculations = [], syncedFeatures = [], dirtyData = this._currentConfigService.getDirtyData(), runtimeData = this._runtimeService.getAllRuntimeData();
    this._featureCalculationManagerService.getReferenceExecutorMap().forEach((sheetMap) => {
      sheetMap.forEach((featureMap) => {
        featureMap.forEach((params, featureId) => {
          let { runtimeCellData, dirtyRanges: featureDirtyRanges } = params.getDirtyData(
            dirtyData,
            runtimeData
          ), serializedDirtyRanges = this._serializeFeatureDirtyRanges(featureDirtyRanges), serializedRuntimeCellData = serializeRuntimeFeatureCellData(runtimeCellData);
          this._runtimeService.setRuntimeFeatureCellData(featureId, runtimeCellData), this._runtimeService.setRuntimeFeatureRange(featureId, featureDirtyRanges), featureCalculations.push({
            unitId: params.unitId,
            sheetId: params.subUnitId,
            featureId,
            dependencyRanges: params.dependencyRanges.map((range) => ({
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
    let otherFormulas = [], otherFormulaData = this._otherFormulaManagerService.getOtherFormulaData();
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
    }), { dirtyData, featureCalculations, otherFormulas, syncedFeatures };
  }
  _markRustFormulaDirty(dirtyData, dirtyUnitFeatureMapOverride, forceCalculationOverride = !1) {
    let payload = {
      forceCalculation: forceCalculationOverride || dirtyData.forceCalculation,
      includeDirtyNodes: !1,
      includeCalculationOrder: !1,
      dirtyRanges: (dirtyData.dirtyRanges ?? []).map((range) => ({
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
    }, stringifyStartedAt = performance.now(), inputJson = JSON.stringify(payload), stringifyMs = performance.now() - stringifyStartedAt, nativeStartedAt = performance.now(), outputJson = markRustFormulaDirtyOnRust(inputJson), nativeMs = performance.now() - nativeStartedAt, rustTimings;
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
    return features.forEach(({ unitId, sheetId, featureId }) => {
      dirtyMap[unitId] = dirtyMap[unitId] ?? {}, dirtyMap[unitId][sheetId] = dirtyMap[unitId][sheetId] ?? {}, dirtyMap[unitId][sheetId][featureId] = !0;
    }), dirtyMap;
  }
  _featureKey(feature) {
    return `${feature.unitId}\0${feature.sheetId}\0${feature.featureId}`;
  }
  _featureSignatureMap(features) {
    return new Map(features.map((feature) => [this._featureKey(feature), feature.signature]));
  }
  _serializeFeatureDirtyRanges(dirtyRanges) {
    let serialized = [];
    return Object.entries(dirtyRanges).forEach(([unitId, sheetMap]) => {
      sheetMap && Object.entries(sheetMap).forEach(([sheetId, ranges]) => {
        ranges && ranges.forEach((range) => {
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
    for (let [unitId, sheets] of Object.entries(formulaData))
      if (!(!sheets || typeof sheets != "object")) {
        result[unitId] = {};
        for (let [sheetId, rows] of Object.entries(sheets))
          if (!(!rows || typeof rows != "object")) {
            result[unitId][sheetId] = {};
            for (let [rowStr, cols] of Object.entries(rows)) {
              if (!cols || typeof cols != "object")
                continue;
              let row = Number(rowStr);
              result[unitId][sheetId][row] = {};
              for (let [colStr, item] of Object.entries(cols)) {
                let col = Number(colStr);
                if (typeof item == "string")
                  result[unitId][sheetId][row][col] = item;
                else if (item && typeof item == "object" && typeof item.f == "string") {
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
      for (let [sheetId, sheet] of Object.entries(sheets))
        result[unitId][sheetId] = {
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
  _applyRustOutput(_output) {
  }
  async _applyRustDependencyOutput(output) {
    let convertStartedAt = performance.now(), patch = rustExecutionOutputToFormulaCalculationPatch(output), convertMs = performance.now() - convertStartedAt, commandStartedAt = performance.now();
    return (patch.arrayFormulaRange || patch.arrayFormulaCellData) && (this._formulaDataModel.setArrayFormulaRange(patch.arrayFormulaRange ?? {}), this._formulaDataModel.setArrayFormulaCellData(patch.arrayFormulaCellData ?? {}), await this._commandService.executeCommand(
      import_engine_formula2.SetArrayFormulaDataMutation.id,
      {
        arrayFormulaRange: this._formulaDataModel.getArrayFormulaRange(),
        arrayFormulaCellData: this._formulaDataModel.getArrayFormulaCellData(),
        arrayFormulaEmbedded: {}
      },
      {
        onlyLocal: !0,
        fromRustFormulaEngine: !0
      }
    )), await this._commandService.executeCommand(
      import_engine_formula2.SetFormulaCalculationResultMutation.id,
      {
        unitData: patch.unitData,
        unitOtherData: patch.unitOtherData
      },
      {
        onlyLocal: !0,
        fromRustFormulaEngine: !0
      }
    ), {
      convertMs,
      commandMs: performance.now() - commandStartedAt
    };
  }
  async calculate(formulaString) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0);
    let unitId = "__rust_formula_calculate__", sheetId = "__sheet__", input = {
      config: { maxIteration: 1, intervalCount: DEFAULT_INTERVAL_COUNT },
      formulaData: {
        [unitId]: {
          [sheetId]: {
            0: { 0: formulaString }
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
    let unitData = this._currentConfigService.getUnitData(), formulaData = this._formulaStringMapToFormulaData(formulas), input = {
      config: { maxIteration: 1, intervalCount: DEFAULT_INTERVAL_COUNT },
      formulaData,
      unitData: this._serializeUnitData(unitData),
      dirtyRanges: [],
      definedNames: {}
    }, output = JSON.parse(executeOnRust(JSON.stringify(input)));
    return this._formulaExecutionOutputToResultMap(formulas, output);
  }
  async getAllDependencyJson(_rowData) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), this._syncRustFormulaDependencyDefinitions();
    let graph = this._getRustDependencyGraph(), inspect = this._getRustInspectGraph();
    return this._rustAllDependencyJson(graph, inspect);
  }
  async getCellDependencyJson(unitId, sheetId, row, column, _rowData) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), this._syncRustFormulaDependencyDefinitions();
    let graph = this._getRustDependencyGraph(unitId), all = this._rustGraphDependencyJson(graph), current = all.find(
      (item) => item.unitId === unitId && item.subUnitId === sheetId && item.row === row && item.column === column
    );
    if (!current)
      return;
    let byId = new Map(all.map((item) => [item.treeId, item]));
    return {
      ...current,
      children: current.children.map((id) => byId.get(id)).filter(isFormulaDependencyTreeJson),
      parents: current.parents.map((id) => byId.get(id)).filter(isFormulaDependencyTreeJson)
    };
  }
  async getRangeDependents(unitRanges) {
    this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), this._syncRustFormulaDependencyDefinitions();
    let graph = this._getRustDependencyGraph(), graphItems = this._rustGraphDependencyJson(graph), graphByCell = this._rustDependencyJsonByCell(graphItems), dirty = JSON.parse(
      getRustDirtyDependenciesOnRust(JSON.stringify(this._serializeUnitRanges(unitRanges)))
    );
    return this._uniqueDependencyJson(
      (dirty.direct ?? dirty.affected ?? []).map((cell) => graphByCell.get(this._cellKey(cell))).filter(Boolean)
    );
  }
  async getInRangeFormulas(unitRanges) {
    return this._nativeLoaded || (await loadNativeBinding(), this._nativeLoaded = !0), this._syncRustFormulaDependencyDefinitions(), this._rustGraphDependencyJson(this._getRustDependencyGraph()).filter(
      (item) => this._cellInUnitRanges(item.unitId, item.subUnitId, item.row, item.column, unitRanges)
    );
  }
  async getDependentsAndInRangeFormulas(unitRanges) {
    let [dependents, inRanges] = await Promise.all([
      this.getRangeDependents(unitRanges),
      this.getInRangeFormulas(unitRanges)
    ]);
    return { dependents, inRanges };
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
            let col = Number(colKey), formulasForCell = Array.isArray(formulaList) ? formulaList : [], value = normalizeFormulaResultValue(
              output.runtimeData?.[unitId]?.[sheetId]?.[row]?.[col]
            );
            result[unitId][sheetId][row][col] = formulasForCell.map((formula) => ({ formula, value }));
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
    let cellItems = this._rustGraphDependencyJson(graph), seen = new Set(cellItems.map((item) => item.treeId)), nonCellItems = (inspect.nodes ?? []).filter((item) => item.node.nodeType !== "cellFormula" && !seen.has(item.index)).map((item) => this._rustFormulaNodeToDependencyJson(item.index, item.node));
    return this._uniqueDependencyJson([...cellItems, ...nonCellItems]);
  }
  _rustGraphDependencyJson(graph) {
    return (graph.nodes ?? []).map((node) => this._rustDependencyNodeToJson(node));
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
      rangeList: (node.precedentRanges ?? []).map((range) => this._rustRangeToUnitRange(range)),
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
    return unitRanges.map((unitRange) => ({
      unitId: unitRange.unitId,
      sheetId: unitRange.sheetId,
      startRow: unitRange.range.startRow,
      endRow: unitRange.range.endRow,
      startColumn: unitRange.range.startColumn,
      endColumn: unitRange.range.endColumn
    }));
  }
  _rustDependencyJsonByCell(items) {
    return new Map(
      items.map((item) => [
        this._cellKey({
          unitId: item.unitId,
          sheetId: item.subUnitId,
          row: item.row,
          column: item.column
        }),
        item
      ])
    );
  }
  _cellKey(cell) {
    return `${cell.unitId}\0${cell.sheetId}\0${cell.row}\0${cell.column}`;
  }
  _cellInUnitRanges(unitId, sheetId, row, column, unitRanges) {
    return unitRanges.some(
      (unitRange) => unitRange.unitId === unitId && unitRange.sheetId === sheetId && row >= unitRange.range.startRow && row <= unitRange.range.endRow && column >= unitRange.range.startColumn && column <= unitRange.range.endColumn
    );
  }
  _uniqueDependencyJson(items) {
    let seen = /* @__PURE__ */ new Set(), result = [];
    return items.forEach((item) => {
      !item || seen.has(item.treeId) || (seen.add(item.treeId), result.push(item));
    }), result;
  }
};
(0, import_core4.setDependencies)(RustCalculateFormulaService, [
  import_core4.IConfigService,
  import_engine_formula2.IFormulaCurrentConfigService,
  import_engine_formula2.IFormulaRuntimeService,
  import_engine_formula2.IFormulaDependencyGenerator,
  import_engine_formula2.IFeatureCalculationManagerService,
  import_engine_formula2.IOtherFormulaManagerService,
  import_core4.ICommandService,
  RustEngineSyncController,
  import_engine_formula2.FormulaDataModel,
  import_engine_formula3.IFormulaReferenceDataService,
  import_engine_formula3.ExternalReferenceModel,
  import_engine_formula2.ISuperTableService
]);
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
  return Array.isArray(value) && value.every(
    (item) => item == null || typeof item == "number" || typeof item == "string" || typeof item == "boolean"
  );
}

// src/plugin.ts
var DEFAULT_RUST_FORMULA_PLUGIN_CONFIG = {}, UniverRustFormulaEnginePlugin = class extends import_engine_formula5.UniverProFormulaEnginePlugin {
  constructor(_config = DEFAULT_RUST_FORMULA_PLUGIN_CONFIG, _injector, _configService) {
    super(_config, _injector, _configService);
    this._config = _config;
    this._injector = _injector;
    this._configService = _configService;
  }
  _config;
  _injector;
  _configService;
  static packageName = name;
  static version = version;
  onReady() {
    super.onReady(), !this._config?.notExecuteFormula && this._config?.useRustEngine !== !1 && (0, import_core5.touchDependencies)(this._injector, [[RustEngineSyncController], [RustSameRuntimeProjectionController]]);
  }
  /**
   * UniverProFormulaEnginePlugin invokes this hook before its single DI
   * registration pass.
   */
  _extendFormulaExecutionDependencies(dependencies) {
    if (this._config?.useRustEngine !== !1 && !this._config?.notExecuteFormula) {
      let calculateServiceIndex = dependencies.findIndex(
        (dependency) => Array.isArray(dependency) && dependency[0] === import_engine_formula4.ICalculateFormulaService
      ), rustDependencies = [
        [RustEngineSyncController],
        [RustSameRuntimeProjectionController],
        [IRustCalculateFormulaService, { useClass: RustCalculateFormulaService }],
        // eslint-disable-next-line react/no-unnecessary-use-prefix
        [import_engine_formula4.ICalculateFormulaService, { useFactory: () => this._injector.get(IRustCalculateFormulaService) }]
      ];
      calculateServiceIndex >= 0 && dependencies.splice(calculateServiceIndex, 1), dependencies.push(...rustDependencies);
    }
  }
};
(0, import_core5.setDependencies)(UniverRustFormulaEnginePlugin, [import_core5.Injector, import_core5.IConfigService], 1);

// src/services/workbook-snapshot-materializer.ts
var import_node_buffer = require("node:buffer");
async function materializeWorkbookSnapshot(workbook, unitID, rev, dirtyInput) {
  await loadNativeBinding();
  let result = await materializeWorkbookSnapshotOnRust(
    import_node_buffer.Buffer.from(JSON.stringify(workbook)),
    unitID,
    rev,
    dirtyInput == null ? void 0 : JSON.stringify(dirtyInput)
  ), draft = JSON.parse(result.snapshotDraftJson.toString("utf8")), encoder = new TextEncoder(), sheets = Object.fromEntries(
    Object.entries(draft.workbook.sheets).map(([sheetID, sheet]) => {
      let { originalMetaJson: originalMetaJson2, ...meta } = sheet;
      return [sheetID, { ...meta, originalMeta: encoder.encode(originalMetaJson2) }];
    })
  ), { originalMetaJson, ...workbookMeta } = draft.workbook;
  return {
    snapshot: {
      unitID: draft.unitID,
      type: draft.type,
      rev: draft.rev,
      workbook: {
        ...workbookMeta,
        sheets,
        originalMeta: encoder.encode(originalMetaJson)
      },
      doc: void 0,
      slide: void 0,
      board: void 0
    },
    sheetBlocks: Object.fromEntries(result.sheetBlocks.map(({ sheetId, blocks }) => [sheetId, blocks])),
    warnings: JSON.parse(result.warningsJson.toString("utf8")),
    calculationStats: JSON.parse(result.calculationStatsJson.toString("utf8"))
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IRustCalculateFormulaService,
  RUST_FORMULA_RELEVANT_MUTATIONS,
  RUST_INCREMENTAL_DEPENDENCY_MUTATIONS,
  RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID,
  RUST_UPSERT_REFERENCE_DATA_MUTATION_ID,
  RustCalculateFormulaService,
  RustEngineSyncController,
  RustFormulaProjectionService,
  UniverRustFormulaEnginePlugin,
  analyzeNumberFormatBatch,
  applyMutationOnRust,
  buildLexerTreeOnRust,
  buildRustDependencyGraphOnRust,
  buildSequenceNodesOnRust,
  checkIfAddBracketOnRust,
  clearRustFormulaDependenciesOnRust,
  clearRustFormulaDirtyOnRust,
  createFormulaProjectionDesyncSignal,
  createProjectionWorkbookUpsertMutation,
  disposeAllWorkbooksOnRust,
  disposeWorkbookOnRust,
  executeOnRust,
  formatNumberBatch,
  getNativeBindingSource,
  getRustCellOnRust,
  getRustDirtyDependenciesOnRust,
  getRustFormulaDataOnRust,
  getRustModelStats,
  getRustSheetStateOnRust,
  isRustFormulaRelevantMutation,
  isRustIncrementalDependencyMutation,
  loadNativeBinding,
  loadSnapshotOnRust,
  markRustFormulaDirtyOnRust,
  materializeWorkbookSnapshot,
  materializeWorkbookSnapshotOnRust,
  parseNumberFormatBatch,
  parseNumberFormatMatrixBatch,
  rustExecutionOutputToFormulaCalculationPatch,
  serializeRuntimeWorkbookSnapshot,
  serializeRuntimeWorkbookSnapshots,
  syncRustFormulaDependenciesOnRust
});
