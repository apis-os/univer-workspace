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
import { RUST_SET_SUPER_TABLES_MUTATION_ID } from "./engine-formula-rust-rust-upsert-reference-data-mutation-id.js";
import { RustEngineSyncController } from "./engine-formula-rust-rust-engine-sync.js";
import { loadNativeBinding } from "./engine-formula-rust-load-native-binding.js";
import { RustSameRuntimeProjectionController, UniverRustFormulaEnginePlugin } from "./engine-formula-rust-rust-formula-engine-plugin.js";
import { RustCalculateFormulaService } from "./engine-formula-rust-rust-formula.js";
var nativeBinding = null,
  nativeBindingSource = null,
  nodeRequire = createRequire(import.meta.url);
function executeDirtyFormulasOnRust(maxIteration, includeCalculatedNodes, includeRuntimeData, includeResultBatches) {
  if (!nativeBinding) throw new Error("Native binding not loaded. Call loadNativeBinding() first.");
  return nativeBinding.rustEngineExecuteDirtyFormulas(maxIteration, includeCalculatedNodes, includeRuntimeData, includeResultBatches);
}
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
    tables: params.tables.map(entry => {
      let normalized = normalizeSetSuperTableMutationParams(isRecord(entry) ? {
        ...entry,
        unitId: params.unitId
      } : entry);
      if (!isRecord(normalized)) return normalized;
      let {
        unitId: _unitId,
        ...table
      } = normalized;
      return table;
    })
  };
}
function normalizeSetSuperTableMutationParams(params) {
  if (!isRecord(params) || !isRecord(params.reference)) return params ?? {};
  let reference = params.reference,
    table = serializeRuntimeSuperTable(reference);
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
  let sheetId = reference.sheetId,
    range = reference.range;
  if (typeof sheetId != "string" || !isRecord(range) || typeof range.startRow != "number" || typeof range.endRow != "number" || typeof range.startColumn != "number" || typeof range.endColumn != "number") return null;
  let columns = (reference.titleMap instanceof Map ? Array.from(reference.titleMap.entries()) : isRecord(reference.titleMap) ? Object.entries(reference.titleMap) : []).filter(entry => typeof entry[0] == "string" && typeof entry[1] == "number").toSorted((left, right) => left[1] - right[1]).map(([displayName]) => ({
    displayName
  }));
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
  return value instanceof Map ? Object.fromEntries(Array.from(value.entries(), ([key, entryValue]) => [String(key), normalizeRuntimeValue(entryValue)])) : Array.isArray(value) ? value.map(normalizeRuntimeValue) : isRecord(value) ? Object.fromEntries(Object.entries(value).map(([key, entryValue]) => [key, normalizeRuntimeValue(entryValue)])) : value;
}
function serializeCellData(cellData = {}, styles, precisionAsDisplayed = !1) {
  let result = {},
    rawCellData = cellData instanceof ObjectMatrix ? cellData.getMatrix() : cellData;
  for (let [rowKey, row] of Object.entries(rawCellData ?? {})) {
    if (!row) continue;
    let serializedRow = {};
    for (let [colKey, cell] of Object.entries(row)) {
      if (!cell || typeof cell != "object") continue;
      let cellRecord = cell,
        value = {};
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
function isLegacyArrayFormulaCell(cell) {
  let custom = cell.custom;
  if (!custom || typeof custom != "object") return !1;
  let xlsx = custom._xlsx;
  return xlsx != null && typeof xlsx == "object" && xlsx.legacyArrayFormula === !0;
}
function inferDisplayPrecision(styleId, styles) {
  if (typeof styleId != "string" || !styles || typeof styles != "object") return;
  let style = styles[styleId];
  if (!style || typeof style != "object") return;
  let numberFormat = style.n;
  if (!numberFormat || typeof numberFormat != "object") return;
  let pattern = numberFormat.pattern;
  return typeof pattern == "string" ? inferFixedNumberFormatPrecision(pattern) : void 0;
}
function inferFixedNumberFormatPrecision(pattern) {
  let cleaned = (pattern.split(";")[0] ?? pattern).replace(/"[^"]*"/gu, "").replace(/\\./gu, "").replace(/_.|\*./gu, "");
  if (!/[0#?]/u.test(cleaned) || /[%Ee]|[ymdhsa]/iu.test(cleaned)) return;
  let decimalMatch = cleaned.match(/\.([0#?]+)/u);
  return decimalMatch?.[1] ? decimalMatch[1].length : 0;
}
function isRecord(value) {
  return typeof value == "object" && value !== null && !Array.isArray(value);
}

// src/controllers/rust-engine-sync.controller.ts
var rustEngineSyncState = {
  snapshotEpoch: 0,
  dependencyInvalidationEpoch: 0
};
setDependencies(RustEngineSyncController, [ICommandService]);

// src/numfmt.ts
var nativeBindingReady = null;
function ensureNativeBinding() {
  return nativeBindingReady ??= loadNativeBinding().catch(error => {
    throw nativeBindingReady = null, error;
  }), nativeBindingReady;
}
function parseJsonOutput(output) {
  return JSON.parse(output);
}
var name = "@univerjs-pro/engine-formula-rust",
  version = "1.0.0-insiders.20260907-70fc579";

// src/controllers/rust-same-runtime-projection.controller.ts
setDependencies2(RustSameRuntimeProjectionController, [IUniverInstanceService, RustEngineSyncController, FormulaDataModel, ISuperTableService, ICommandService2, IActiveDirtyManagerService]);

// src/services/calculate-formula.service.ts
setDependencies3(RustCalculateFormulaService, [IConfigService, IFormulaCurrentConfigService, IFormulaRuntimeService, IFormulaDependencyGenerator, IFeatureCalculationManagerService, IOtherFormulaManagerService, ICommandService3, RustEngineSyncController, FormulaDataModel2, IFormulaReferenceDataService, ExternalReferenceModel, ISuperTableService2]);
setDependencies4(UniverRustFormulaEnginePlugin, [Injector, IConfigService2], 1);

// src/services/workbook-snapshot-materializer.ts

export { nativeBindingSource, nativeBinding, nodeRequire, ensureNativeBinding, parseJsonOutput, isRecord, serializeRuntimeSuperTable, name, serializeCellData, rustEngineSyncState, normalizeRustEngineMutation, executeDirtyFormulasOnRust, version };
