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
import { isRustFormulaRelevantMutation } from "./engine-formula-rust-rust-formula-relevant.js";
import { RUST_SET_SUPER_TABLES_MUTATION_ID } from "./engine-formula-rust-rust-upsert-reference-data-mutation-id.js";
import { name, version } from "./internal-glue.js";
import { RustEngineSyncController } from "./engine-formula-rust-rust-engine-sync.js";
import { IRustCalculateFormulaService } from "./engine-formula-rust-irust-formula.js";
import { RustCalculateFormulaService } from "./engine-formula-rust-rust-formula.js";
var RustSameRuntimeProjectionController = class extends Disposable2 {
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
  _baseProjectionStructures = /* @__PURE__ */new Map();
  _initialize() {
    for (let base of this._univerInstanceService.getAllUnitsForType(UniverInstanceType.UNIVER_BASE)) this._rustEngineSyncController.setProjectionManagedTableUnit(base.getUnitId()), this._rememberBaseProjectionStructure(base.getSnapshot());
    this._initialProjectionLoad = this._loadAllWorkbookProjections(), this.disposeWithMe(toDisposable(this._univerInstanceService.getTypeOfUnitAdded$(UniverInstanceType.UNIVER_SHEET).subscribe(({
      unit
    }) => {
      this._enqueueProjectionDelta(() => {
        this._rustEngineSyncController.upsertProjectionWorkbook({
          unitId: unit.getUnitId(),
          snapshot: unit.getSnapshot()
        });
      });
    }))), this.disposeWithMe(toDisposable(this._univerInstanceService.getTypeOfUnitAdded$(UniverInstanceType.UNIVER_BASE).subscribe(({
      unit
    }) => {
      this._rustEngineSyncController.setProjectionManagedTableUnit(unit.getUnitId()), this._rememberBaseProjectionStructure(unit.getSnapshot()), this._enqueueProjectionDelta(() => this._upsertBaseProjection(unit.getUnitId()));
    }))), this.disposeWithMe(this._commandService.onCommandExecuted(command => {
      command.type !== CommandType2.MUTATION || !hasUnitId2(command.params) || this._univerInstanceService.getUnit(command.params.unitId, UniverInstanceType.UNIVER_BASE) && (hasTrigger(command.params) && command.params.trigger === SetFormulaCalculationResultMutation.id || isRustFormulaRelevantMutation(command.id) || this._enqueueProjectionDelta(() => this._syncBaseMutation(command)));
    })), this.disposeWithMe(toDisposable(this._univerInstanceService.getTypeOfUnitDisposed$(UniverInstanceType.UNIVER_BASE).subscribe(base => {
      this._baseProjectionStructures.delete(base.getUnitId()), this._rustEngineSyncController.unsetProjectionManagedTableUnit(base.getUnitId()), this._enqueueProjectionDelta(() => this._rustEngineSyncController.disposeProjectionWorkbook(base.getUnitId()));
    }))), this.disposeWithMe(toDisposable(this._univerInstanceService.getTypeOfUnitDisposed$(UniverInstanceType.UNIVER_SHEET).subscribe(workbook => {
      this._enqueueProjectionDelta(() => this._rustEngineSyncController.disposeProjectionWorkbook(workbook.getUnitId()));
    }))), this.disposeWithMe(toDisposable(() => {
      this._projectionDeltaQueue = Promise.resolve();
    }));
  }
  _enqueueProjectionDelta(task) {
    this._projectionDeltaQueue = this._projectionDeltaQueue.then(() => this._initialProjectionLoad).then(() => {
      if (!this._disposed) return task();
    }).catch(() => {}), this._rustEngineSyncController.setProjectionDeltaBarrier(this._projectionDeltaQueue);
  }
  async _syncBaseMutation(command) {
    if (!hasUnitId2(command.params)) return;
    let unitId = command.params.unitId,
      dirtyData = this._activeDirtyManagerService.get(command.id)?.getDirtyData(command),
      dirtyRanges = (dirtyData?.dirtyRanges ?? []).filter(dirtyRange => dirtyRange.unitId === unitId),
      hasStructureInvalidation = !!dirtyData?.clearDependencyTreeCache?.[unitId] || !!(dirtyData?.forceCalculation && dirtyRanges.length === 0);
    if (dirtyRanges.length > 0 && !hasStructureInvalidation) {
      this._applyBaseDirtyRanges(unitId, dirtyRanges);
      return;
    }
    hasStructureInvalidation && this._isBaseProjectionStructureUnchanged(unitId) || hasStructureInvalidation && this._applyBaseFieldInsertion(unitId, dirtyRanges) || (await this._upsertBaseProjection(unitId));
  }
  _applyBaseFieldInsertion(unitId, dirtyRanges) {
    let base = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_BASE),
      previous = this._baseProjectionStructures.get(unitId);
    if (!base || !previous) return !1;
    let snapshot = base.getSnapshot(),
      insertion = findSingleBaseFieldInsertion(previous, snapshot);
    if (!insertion) return !1;
    let projectionData = this._getBaseProjectionData(unitId),
      sheet = projectionData?.calculationData.allUnitData[unitId]?.[insertion.tableId];
    if (!projectionData || !sheet) return !1;
    let formulaData = projectionData.formulaData[unitId]?.[insertion.tableId],
      cellValue = {};
    for (let row = 0; row < sheet.rowCount; row++) {
      let value = sheet.cellData.getValue(row, insertion.column),
        formula = formulaData?.[row]?.[insertion.column];
      cellValue[row] = {
        [insertion.column]: formula ? {
          ...value,
          ...formula
        } : value ?? null
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
      dirtyRanges: [{
        unitId,
        sheetId: insertion.tableId,
        range: insertedRange
      }]
    }), this._rustEngineSyncController.applyProjectionMutation({
      id: RUST_SET_SUPER_TABLES_MUTATION_ID,
      params: {
        unitId,
        tables: this._getBaseTableEntries(insertion.tableId, snapshot, createBaseFormulaTableNameMap(snapshot)).map(([tableName, reference]) => ({
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
    let {
        calculationData,
        formulaData
      } = projectionData,
      rangesBySheet = /* @__PURE__ */new Map();
    for (let dirtyRange of dirtyRanges) {
      let ranges = rangesBySheet.get(dirtyRange.sheetId) ?? [];
      ranges.push(dirtyRange), rangesBySheet.set(dirtyRange.sheetId, ranges);
    }
    for (let [sheetId, ranges] of rangesBySheet) {
      let sheet = calculationData.allUnitData[unitId]?.[sheetId];
      if (!sheet) continue;
      let cellValue = {};
      for (let {
        range
      } of ranges) for (let row = range.startRow; row <= range.endRow; row++) for (let column = range.startColumn; column <= range.endColumn; column++) {
        let value = sheet.cellData.getValue(row, column),
          formula = formulaData[unitId]?.[sheetId]?.[row]?.[column];
        (cellValue[row] ??= {})[column] = formula ? {
          ...value,
          ...formula
        } : value ?? null;
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
    let {
        calculationData,
        formulaData
      } = projectionData,
      workbook = this._createBaseWorkbookProjection(unitId, calculationData.allUnitData, calculationData.unitSheetNameMap, calculationData.unitNameMap, formulaData);
    workbook && this._rustEngineSyncController.upsertProjectionWorkbook(workbook);
    let base = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_BASE);
    base && this._rememberBaseProjectionStructure(base.getSnapshot());
  }
  _rememberBaseProjectionStructure(snapshot) {
    this._baseProjectionStructures.set(snapshot.id, createBaseProjectionStructure(snapshot));
  }
  _isBaseProjectionStructureUnchanged(unitId) {
    let base = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_BASE),
      previous = this._baseProjectionStructures.get(unitId);
    return !!(base && previous && isSameBaseProjectionStructure(previous, createBaseProjectionStructure(base.getSnapshot())));
  }
  _getBaseProjectionData(unitId) {
    let base = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_BASE);
    if (!base) return null;
    let snapshot = base.getSnapshot(),
      allUnitData = {
        [unitId]: {}
      },
      unitSheetNameMap = {
        [unitId]: {}
      },
      unitNameMap = {
        [unitId]: {
          name: snapshot.name,
          unitType: UniverInstanceType.UNIVER_BASE
        }
      },
      formulaData = {
        [unitId]: {}
      },
      formulaTableNames = createBaseFormulaTableNameMap(snapshot),
      normalizeFormulaTableReferences = createBaseFormulaTableReferenceNormalizer(snapshot, formulaTableNames);
    for (let table of Object.values(snapshot.tables)) {
      let fieldOrder = table.fieldOrder;
      allUnitData[unitId][table.id] = {
        cellData: new ObjectMatrix2(buildBaseRuntimeCellData(table)),
        rowCount: baseRecordOrder(table).length,
        columnCount: fieldOrder.length,
        rowData: {},
        columnData: {}
      }, unitSheetNameMap[unitId][formulaTableNames.get(table.id)] = table.id;
      let tableFormulaData = {},
        normalizedFormulaByFieldId = /* @__PURE__ */new Map(),
        recordOrder = baseRecordOrder(table);
      for (let row = 0; row < recordOrder.length; row++) if (table.records[recordOrder[row]]) for (let column = 0; column < fieldOrder.length; column++) {
        let field = table.fields[fieldOrder[column]];
        if (!field || field.type !== "formula") continue;
        let formula = String(field.config?.formula ?? "").trim();
        if (!formula) continue;
        let normalizedFormula = normalizedFormulaByFieldId.get(field.id);
        normalizedFormula == null && (normalizedFormula = normalizeBaseFormulaForEngine(formula, table, formulaTableNames, normalizeFormulaTableReferences), normalizedFormulaByFieldId.set(field.id, normalizedFormula)), (tableFormulaData[row] ??= {})[column] = {
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
    let workbooks = this._univerInstanceService.getAllUnitsForType(UniverInstanceType.UNIVER_SHEET).map(workbook => ({
        unitId: workbook.getUnitId(),
        snapshot: workbook.getSnapshot()
      })),
      calculationData = this._formulaDataModel.getCalculateData(),
      formulaData = this._formulaDataModel.getFormulaData(),
      baseWorkbooks = this._univerInstanceService.getAllUnitsForType(UniverInstanceType.UNIVER_BASE).map(base => this._createBaseWorkbookProjection(base.getUnitId(), calculationData.allUnitData, calculationData.unitSheetNameMap, calculationData.unitNameMap ?? {}, formulaData)).filter(workbook => workbook != null);
    workbooks.push(...baseWorkbooks), await this._rustEngineSyncController.loadProjection(workbooks);
  }
  _createBaseWorkbookProjection(unitId, allUnitData, unitSheetNameMap, unitNameMap, formulaData) {
    let unitData = allUnitData[unitId];
    if (!unitData) return null;
    let sheetNameMap = unitSheetNameMap[unitId] ?? {},
      sheetOrder = Object.keys(unitData),
      resources = this._createBaseTableResource(unitId),
      sheets = {};
    for (let sheetId of sheetOrder) {
      let sheet = unitData[sheetId];
      if (!sheet) continue;
      let cellData = this._rawCellData(sheet.cellData);
      for (let [rowKey, row] of Object.entries(formulaData[unitId]?.[sheetId] ?? {})) for (let [columnKey, formula] of Object.entries(row ?? {})) {
        if (!formula) continue;
        let rowIndex = Number(rowKey),
          columnIndex = Number(columnKey),
          current = cellData[rowIndex]?.[columnIndex] ?? {};
        (cellData[rowIndex] ??= {})[columnIndex] = {
          ...current,
          ...formula
        };
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
        locale: LocaleType.EN_US,
        styles: {},
        sheetOrder,
        sheets,
        resources
      }
    };
  }
  _createBaseTableResource(unitId) {
    let base = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_BASE);
    if (base) {
      let snapshot = base.getSnapshot(),
        tables = Object.values(snapshot.tables),
        formulaTableNames = createBaseFormulaTableNameMap(snapshot),
        data2 = {};
      for (let table of tables) for (let [name2, reference] of this._getBaseTableEntries(table.id, snapshot, formulaTableNames)) {
        let columns = Array.from(reference.titleMap.entries()).toSorted((left, right) => left[1] - right[1]).map(([displayName]) => ({
          displayName
        }));
        (data2[table.id] ??= {
          tables: []
        }).tables.push({
          name: name2,
          range: reference.range,
          columns,
          options: {
            showHeader: reference.showHeader !== !1
          }
        });
      }
      return [{
        name: "SHEET_TABLE_PLUGIN",
        data: JSON.stringify(data2)
      }];
    }
    let tableMap = this._superTableService.getTableMap(unitId);
    if (!tableMap) return [];
    let data = {};
    for (let [name2, table] of tableMap) {
      let columns = Array.from(table.titleMap.entries()).toSorted((left, right) => left[1] - right[1]).map(([displayName]) => ({
        displayName
      }));
      (data[table.sheetId] ??= {
        tables: []
      }).tables.push({
        name: name2,
        range: table.range,
        columns,
        options: {
          showHeader: table.showHeader !== !1
        }
      });
    }
    return [{
      name: "SHEET_TABLE_PLUGIN",
      data: JSON.stringify(data)
    }];
  }
  _getBaseTableEntries(tableId, snapshot, formulaTableNames) {
    let table = snapshot.tables[tableId];
    if (!table) return [];
    let recordCount = baseRecordOrder(table).length,
      fieldOrder = table.fieldOrder,
      reference = {
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
    let raw = cellData.getMatrix(),
      result = {};
    for (let [row, values] of Object.entries(raw ?? {})) {
      let rowData = {};
      for (let [column, value] of Object.entries(values ?? {})) value && (rowData[Number(column)] = {
        ...value
      });
      result[Number(row)] = rowData;
    }
    return result;
  }
};
function createBaseProjectionStructure(snapshot) {
  let formulaTableNames = createBaseFormulaTableNameMap(snapshot);
  return {
    unitName: snapshot.name,
    tables: Object.fromEntries(Object.values(snapshot.tables).map(table => [table.id, {
      formulaName: formulaTableNames.get(table.id),
      fieldOrder: [...table.fieldOrder],
      recordOrder: baseRecordOrder(table),
      fieldSignatures: Object.fromEntries(Object.entries(table.fields).map(([fieldId, field]) => [fieldId, JSON.stringify(field)]))
    }]))
  };
}
function isSameBaseProjectionStructure(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}
function findSingleBaseFieldInsertion(previous, snapshot) {
  let current = createBaseProjectionStructure(snapshot),
    previousTableIds = Object.keys(previous.tables).toSorted(),
    currentTableIds = Object.keys(current.tables).toSorted();
  if (JSON.stringify(previousTableIds) !== JSON.stringify(currentTableIds)) return null;
  let insertion = null;
  for (let tableId of currentTableIds) {
    let before = previous.tables[tableId],
      after = current.tables[tableId];
    if (!before || !after || before.formulaName !== after.formulaName || JSON.stringify(before.recordOrder) !== JSON.stringify(after.recordOrder)) return null;
    for (let fieldId of before.fieldOrder) if (before.fieldSignatures[fieldId] !== after.fieldSignatures[fieldId]) return null;
    if (JSON.stringify(before.fieldOrder) === JSON.stringify(after.fieldOrder)) continue;
    if (insertion || after.fieldOrder.length !== before.fieldOrder.length + 1) return null;
    let column = after.fieldOrder.findIndex((fieldId, index) => fieldId !== before.fieldOrder[index]);
    if (column < 0) return null;
    let withoutInserted = after.fieldOrder.filter((_, index) => index !== column);
    if (JSON.stringify(withoutInserted) !== JSON.stringify(before.fieldOrder)) return null;
    insertion = {
      tableId,
      column
    };
  }
  return insertion;
}
var BASE_LEGACY_FIELD_REF_PATTERN = /\{([^}]+)\}/g,
  BASE_TABLE_REFERENCE_PREFIX = /\b[A-Z_][\w.]*\[/gi,
  BASE_SCOPED_FIELD_REF_PATTERN = /(^|[^\w[])\[\[\s*#(This Row|Data)\s*\],\s*\[([^\]]+)\]\]/gi,
  BASE_CURRENT_ROW_FIELD_REF_PATTERN = /(^|[^\w[])\[@\[([^\]]+)\]\](?!\])/g,
  BASE_BRACKET_FIELD_REF_PATTERN = /(^|[^A-Za-z0-9_[\]])\[([^\]]+)\]/g,
  BASE_EXTERNAL_A1_REF_PATTERN = /(?:'\[[^\]]+\](?:[^']|'')+'|\[[^\]]+\][^\s'!]+)!\$?[A-Z]{1,3}\$?\d+(?::\$?[A-Z]{1,3}\$?\d+)?/gi,
  BASE_EXTERNAL_STRUCTURED_REFERENCE_PREFIX = /(?:'((?:[^']|'')+)'|\[[^\]]+\]|[A-Za-z0-9_.-]+)![^\s![\]]+\[/g;
function normalizeBaseFormulaForEngine(formula, currentTable, formulaTableNames, normalizeFormulaTableReferences) {
  let canonicalFormula = normalizeFormulaTableReferences(formula),
    references = [],
    hold = reference => `__BASE_FORMULA_REF_${references.push(reference) - 1}__`;
  return protectBaseTableReferences(protectBaseExternalReferences(canonicalFormula, hold), hold).replace(BASE_LEGACY_FIELD_REF_PATTERN, (_match, fieldName) => hold(createEngineThisRowRef(currentTable, fieldName, formulaTableNames))).replace(BASE_SCOPED_FIELD_REF_PATTERN, (_match, prefix, scope, fieldName) => {
    let tableName = formulaTableNames.get(currentTable.id) ?? currentTable.name;
    return `${prefix}${hold(`${tableName}[[#${scope}],[${fieldName}]]`)}`;
  }).replace(BASE_CURRENT_ROW_FIELD_REF_PATTERN, (_match, prefix, fieldName) => `${prefix}${hold(createEngineThisRowRef(currentTable, fieldName, formulaTableNames))}`).replace(BASE_BRACKET_FIELD_REF_PATTERN, (_match, prefix, fieldName) => `${prefix}${hold(createEngineThisRowRef(currentTable, fieldName, formulaTableNames))}`).replace(/__BASE_FORMULA_REF_(\d+)__/g, (_match, index) => references[Number(index)] ?? "");
}
function protectBaseTableReferences(formula, replace) {
  return protectBaseStructuredReferences(formula, BASE_TABLE_REFERENCE_PREFIX, replace);
}
function protectBaseExternalReferences(formula, replace) {
  let withProtectedA1 = formula.replace(BASE_EXTERNAL_A1_REF_PATTERN, (reference, offset) => isInsideBaseFormulaString(formula, offset) ? reference : replace(reference));
  return protectBaseExternalStructuredReferences(withProtectedA1, replace);
}
function protectBaseExternalStructuredReferences(formula, replace) {
  return protectBaseStructuredReferences(formula, BASE_EXTERNAL_STRUCTURED_REFERENCE_PREFIX, replace);
}
function protectBaseStructuredReferences(formula, prefixPattern, replace) {
  let spans = [];
  prefixPattern.lastIndex = 0;
  let match;
  for (; (match = prefixPattern.exec(formula)) != null;) {
    if (isInsideBaseFormulaString(formula, match.index)) continue;
    let openBracket = prefixPattern.lastIndex - 1,
      depth = 0;
    for (let index = openBracket; index < formula.length; index++) if (formula[index] === "[" && depth++, formula[index] === "]" && (depth--, depth === 0)) {
      spans.push({
        start: match.index,
        end: index + 1
      }), prefixPattern.lastIndex = index + 1;
      break;
    }
  }
  if (spans.length === 0) return formula;
  let result = "",
    offset = 0;
  for (let span of spans) result += formula.slice(offset, span.start), result += replace(formula.slice(span.start, span.end)), offset = span.end;
  return result + formula.slice(offset);
}
function isInsideBaseFormulaString(formula, position) {
  let inString = !1;
  for (let index = 0; index < position; index++) if (formula[index] === '"') {
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
  return table.recordOrder ? table.recordOrder.filter(recordId => table.records[recordId] != null) : Object.values(table.records ?? {}).toSorted((left, right) => left.orderKey.localeCompare(right.orderKey)).map(record => record.id);
}
function buildBaseRuntimeCellData(table) {
  let cellData = {
      ...table.cellData
    },
    fieldOrder = table.fieldOrder,
    recordOrder = baseRecordOrder(table);
  for (let row = 0; row < recordOrder.length; row++) {
    let record = table.records[recordOrder[row]];
    if (record) {
      cellData[row] = {
        ...cellData[row]
      };
      for (let column = 0; column < fieldOrder.length; column++) {
        let fieldId = fieldOrder[column];
        table.fields[fieldId] && Object.prototype.hasOwnProperty.call(record.values ?? {}, fieldId) && (cellData[row][column] = toBaseRuntimeCellData(record.values[fieldId], table.fields[fieldId]));
      }
    }
  }
  return cellData;
}
function toBaseRuntimeCellData(value, field) {
  if (isBaseCellData(value)) return {
    ...value,
    t: inferBaseRuntimeCellType(value.v ?? null)
  };
  if (field?.type === "attachment") return {
    v: "",
    t: CellValueType2.STRING
  };
  if (Array.isArray(value)) return {
    v: value.join(", "),
    t: CellValueType2.STRING
  };
  if (field?.type === "link" && value && typeof value == "object") {
    let link = value;
    return {
      v: String(link.text ?? link.url ?? ""),
      t: CellValueType2.STRING
    };
  }
  return value === null || typeof value == "string" || typeof value == "number" || typeof value == "boolean" ? {
    v: value,
    t: inferBaseRuntimeCellType(value)
  } : {
    v: null,
    t: null
  };
}
function inferBaseRuntimeCellType(value) {
  return typeof value == "number" ? CellValueType2.NUMBER : typeof value == "boolean" ? CellValueType2.BOOLEAN : typeof value == "string" ? CellValueType2.STRING : null;
}
function isBaseCellData(value) {
  return value != null && typeof value == "object" && ["v", "t", "p", "f", "si"].some(key => Object.prototype.hasOwnProperty.call(value, key));
}
function hasUnitId2(value) {
  return value != null && typeof value == "object" && "unitId" in value && typeof value.unitId == "string";
}
function hasTrigger(value) {
  return "trigger" in value && typeof value.trigger == "string";
}
var DEFAULT_RUST_FORMULA_PLUGIN_CONFIG = {},
  UniverRustFormulaEnginePlugin = class extends UniverProFormulaEnginePlugin {
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
      super.onReady(), !this._config?.notExecuteFormula && this._config?.useRustEngine !== !1 && touchDependencies(this._injector, [[RustEngineSyncController], [RustSameRuntimeProjectionController]]);
    }
    /**
     * UniverProFormulaEnginePlugin invokes this hook before its single DI
     * registration pass.
     */
    _extendFormulaExecutionDependencies(dependencies) {
      if (this._config?.useRustEngine !== !1 && !this._config?.notExecuteFormula) {
        let calculateServiceIndex = dependencies.findIndex(dependency => Array.isArray(dependency) && dependency[0] === ICalculateFormulaService),
          rustDependencies = [[RustEngineSyncController], [RustSameRuntimeProjectionController], [IRustCalculateFormulaService, {
            useClass: RustCalculateFormulaService
          }],
          // eslint-disable-next-line react/no-unnecessary-use-prefix
          [ICalculateFormulaService, {
            useFactory: () => this._injector.get(IRustCalculateFormulaService)
          }]];
        calculateServiceIndex >= 0 && dependencies.splice(calculateServiceIndex, 1), dependencies.push(...rustDependencies);
      }
    }
  };
export { UniverRustFormulaEnginePlugin };
export { RustSameRuntimeProjectionController };
