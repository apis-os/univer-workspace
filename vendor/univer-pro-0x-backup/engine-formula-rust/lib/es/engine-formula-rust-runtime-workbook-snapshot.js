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
import { isRecord, name, serializeCellData } from "./internal-glue.js";
import { EXTERNAL_DATA_RESOURCE, EXTERNAL_DATA_SIGNATURE, XLSX_WORKBOOK_CALCULATION_RESOURCE } from "./engine-formula-rust-rust-upsert-reference-data-mutation-id.js";
function serializeRuntimeWorkbookSnapshot(input) {
  let {
      snapshot
    } = input,
    sheetOrder = snapshot.sheetOrder?.length > 0 ? snapshot.sheetOrder : Object.keys(snapshot.sheets ?? {}),
    calculation = serializeCalculation(snapshot),
    precisionAsDisplayed = calculation?.fullPrecision === !1,
    sheets = sheetOrder.map(sheetId => serializeSheetSnapshot(sheetId, snapshot.sheets?.[sheetId], snapshot.styles, precisionAsDisplayed)).filter(sheet => sheet != null);
  return {
    unitId: input.unitId || snapshot.id,
    name: snapshot.name,
    sheets,
    ...(calculation ? {
      calculation
    } : {}),
    resources: serializeResources(snapshot),
    definedNames: serializeDefinedNames(input.definedNames, snapshot),
    externalLinks: serializeExternalLinks(snapshot),
    tables: serializeTables(snapshot)
  };
}
function serializeResources(snapshot) {
  let resources = snapshot.resources;
  if (!resources || typeof resources != "object") return;
  let serialized = {};
  for (let [id, resource] of Object.entries(resources)) typeof resource?.name == "string" && (serialized[id] = {
    name: resource.name,
    data: resource.data
  });
  return Object.keys(serialized).length > 0 ? serialized : void 0;
}
function serializeCalculation(snapshot) {
  for (let resource of Object.values(snapshot.resources ?? {})) {
    if (resource?.name !== XLSX_WORKBOOK_CALCULATION_RESOURCE) continue;
    let data = parseResourceData(resource.data);
    if (!data || typeof data != "object") return;
    let fullPrecision = data.fullPrecision;
    return typeof fullPrecision == "boolean" ? {
      fullPrecision
    } : void 0;
  }
}
function serializeTables(snapshot) {
  for (let resource of Object.values(snapshot.resources ?? {})) {
    if (resource?.name !== "SHEET_TABLE_PLUGIN") continue;
    let data = parseResourceData(resource.data);
    if (!data || typeof data != "object") return;
    let tables = {};
    for (let [sheetId, sheetTables] of Object.entries(data)) {
      let tableList = sheetTables?.tables;
      if (Array.isArray(tableList)) for (let table of tableList) {
        let serialized = serializeTableSnapshot(sheetId, table, snapshot);
        serialized && (tables[serialized.name] = serialized.table);
      }
    }
    return Object.keys(tables).length > 0 ? tables : void 0;
  }
}
function serializeTableSnapshot(sheetId, table, snapshot) {
  if (!table || typeof table != "object") return null;
  let record = table,
    name2 = typeof record.name == "string" ? record.name : void 0,
    range = record.range;
  if (!name2 || !range || typeof range.startRow != "number" || typeof range.endRow != "number" || typeof range.startColumn != "number" || typeof range.endColumn != "number") return null;
  let columns = Array.isArray(record.columns) ? record.columns.map(column => {
      let displayName = column?.displayName;
      return typeof displayName == "string" ? {
        displayName
      } : null;
    }).filter(column => column != null) : [],
    showHeader = record.options?.showHeader !== !1,
    showFooter = typeof record.options?.showFooter == "boolean" ? record.options.showFooter : inferTableFooter(snapshot, sheetId, range.startRow, range.endRow, range.startColumn, range.endColumn);
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
  if (typeof data != "string") return data;
  try {
    return JSON.parse(data || "{}");
  } catch {
    return;
  }
}
function inferTableFooter(snapshot, sheetId, startRow, endRow, startColumn, endColumn) {
  let row = snapshot.sheets?.[sheetId]?.cellData?.[endRow];
  if (!row) return !1;
  for (let col = startColumn; col <= endColumn; col++) {
    let cell = row[col];
    if (cell && (typeof cell.f == "string" && /\bSUBTOTAL\s*\(/iu.test(cell.f) || col === startColumn && typeof cell.v == "string" && cell.v.trim().toLowerCase() === "total")) return !0;
  }
  return !1;
}
function serializeExternalLinks(snapshot) {
  let externalLinks = snapshot.externalLinks,
    serializedLinks = Array.isArray(externalLinks) ? externalLinks.map(link => serializeExternalLink(link)).filter(link => link != null) : [];
  return serializedLinks.push(...serializeExternalLinksFromResource(snapshot)), serializedLinks.length > 0 ? serializedLinks : void 0;
}
function serializeExternalLinksFromResource(snapshot) {
  let links = [];
  for (let resource of Object.values(snapshot.resources ?? {})) {
    if (resource?.name !== EXTERNAL_DATA_RESOURCE) continue;
    let data = parseResourceData(resource.data);
    if (isRecord(data)) {
      if (data.schemaVersion === 1 && Array.isArray(data.links)) {
        links.push(...data.links.map(link => serializeVersionedExternalLink(link)).filter(link => link != null));
        continue;
      }
      if (!(data.signature !== EXTERNAL_DATA_SIGNATURE || !isRecord(data.units))) for (let [unitId, unit] of Object.entries(data.units)) {
        let link = serializeExternalDataUnit(unitId, unit);
        link && links.push(link);
      }
    }
  }
  return links;
}
function serializeVersionedExternalLink(link) {
  if (!isRecord(link) || !Number.isInteger(link.slot) || Number(link.slot) <= 0 || !isRecord(link.target)) return null;
  let target = link.target,
    cache = isRecord(link.cache) ? link.cache : void 0,
    cachedSheets = Array.isArray(cache?.sheets) ? cache.sheets.map(sheet => serializeVersionedExternalSheet(sheet)).filter(sheet => sheet != null) : [],
    cachedNames = new Set(cachedSheets.map(sheet => sheet.name.toLocaleLowerCase())),
    uncachedSheets = Array.isArray(link.sheetNames) ? link.sheetNames.flatMap(item => {
      if (!isRecord(item)) return [];
      let {
        name: name2
      } = item;
      return typeof name2 != "string" || cachedNames.has(name2.toLocaleLowerCase()) ? [] : [{
        name: name2,
        rowCount: 1048576,
        columnCount: 16384,
        cellData: {},
        coverage: []
      }];
    }) : [],
    sheets = [...cachedSheets, ...uncachedSheets],
    definedNames = serializeVersionedExternalDefinedNames(link.definedNames),
    tables = serializeVersionedExternalTables(link.tables),
    aliases = [link.name, target.name, target.uri].filter(alias => typeof alias == "string" && alias.length > 0);
  return {
    ...(aliases.length > 0 ? {
      aliases: [...new Set(aliases)]
    } : {}),
    ...(definedNames ? {
      definedNames
    } : {}),
    sheets,
    ...(tables ? {
      tables
    } : {}),
    ...(typeof target.uri == "string" ? {
      target: target.uri
    } : typeof target.name == "string" ? {
      target: target.name
    } : typeof link.name == "string" ? {
      target: link.name
    } : {}),
    unitId: String(link.slot)
  };
}
function serializeVersionedExternalDefinedNames(value) {
  if (!Array.isArray(value)) return;
  let result = {};
  for (let item of value) !isRecord(item) || typeof item.name != "string" || (result[item.name] = {
    name: item.name,
    ...(typeof item.formulaOrRefString == "string" ? {
      formulaOrRefString: item.formulaOrRefString
    } : {})
  });
  return Object.keys(result).length > 0 ? result : void 0;
}
function serializeVersionedExternalTables(value) {
  if (!Array.isArray(value)) return;
  let result = {};
  for (let item of value) {
    if (!isRecord(item) || typeof item.name != "string" || typeof item.sheetName != "string" || !isRange(item.range)) continue;
    let columns = Array.isArray(item.columns) ? item.columns.flatMap(column => {
      if (!isRecord(column)) return [];
      let {
        name: name2
      } = column;
      return typeof name2 == "string" ? [{
        displayName: name2
      }] : [];
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
  if (Array.isArray(sheet.cells)) for (let cell of sheet.cells) {
    if (!isExternalCell(cell)) continue;
    let {
      row,
      column
    } = cell;
    (cellData[row] ??= {})[column] = {
      v: cell.value,
      ...(typeof cell.valueType == "number" ? {
        t: cell.valueType
      } : {})
    };
  }
  return {
    name: sheet.name,
    ...(typeof sheet.sheetId == "string" ? {
      sheetId: sheet.sheetId
    } : {}),
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
  if (!unit || typeof unit != "object") return null;
  let record = unit;
  if (!record.sheets || typeof record.sheets != "object") return null;
  let sheets = Object.values(record.sheets).map(sheet => serializeExternalSheet(sheet)).filter(sheet => sheet != null);
  if (sheets.length === 0) return null;
  let definedNames = serializeExternalDefinedNames(record.definedNames);
  return {
    ...(definedNames === void 0 ? {} : {
      definedNames
    }),
    sheets,
    ...(typeof record.target == "string" ? {
      target: record.target
    } : {}),
    unitId
  };
}
function serializeExternalLink(link) {
  if (!isRecord(link)) return null;
  let record = link;
  if (!Array.isArray(record.sheets)) return null;
  let sheets = record.sheets.map(sheet => serializeExternalSheet(sheet)).filter(sheet => sheet != null);
  if (sheets.length === 0) return null;
  let definedNames = serializeExternalDefinedNames(record.definedNames),
    tables = serializeExternalTables(record.tables);
  return {
    ...(definedNames === void 0 ? {} : {
      definedNames
    }),
    sheets,
    ...(tables === void 0 ? {} : {
      tables
    }),
    ...(typeof record.target == "string" ? {
      target: record.target
    } : {}),
    ...(typeof record.unitId == "string" ? {
      unitId: record.unitId
    } : {})
  };
}
function serializeExternalTables(value) {
  if (!isRecord(value)) return;
  let result = {};
  for (let [name2, table] of Object.entries(value)) !table || typeof table != "object" || isRustTableSnapshot(table) && (result[name2] = table);
  return Object.keys(result).length > 0 ? result : void 0;
}
function serializeExternalDefinedNames(value) {
  if (!isRecord(value)) return;
  let definedNames = {};
  for (let [key, item] of Object.entries(value)) {
    if (!isRecord(item)) continue;
    let record = item,
      name2 = typeof record.name == "string" ? record.name : key;
    definedNames[key] = {
      ...(typeof record.id == "string" ? {
        id: record.id
      } : {}),
      name: name2,
      ...(typeof record.formulaOrRefString == "string" ? {
        formulaOrRefString: record.formulaOrRefString
      } : {}),
      ...(typeof record.localSheetId == "string" ? {
        localSheetId: record.localSheetId
      } : {})
    };
  }
  return Object.keys(definedNames).length > 0 ? definedNames : void 0;
}
function serializeExternalSheet(sheet) {
  if (!sheet || typeof sheet != "object") return null;
  let record = sheet;
  return typeof record.name != "string" ? null : {
    name: record.name,
    ...(typeof record.sheetId == "string" ? {
      sheetId: record.sheetId
    } : {}),
    rowCount: typeof record.rowCount == "number" ? record.rowCount : 0,
    columnCount: typeof record.columnCount == "number" ? record.columnCount : 0,
    cellData: serializeCellData(record.cellData)
  };
}
function serializeDefinedNames(definedNames, snapshot) {
  let direct = definedNames && Object.keys(definedNames).length > 0 ? definedNames : extractDefinedNames(snapshot),
    sheetIds = new Set(Object.keys(snapshot.sheets ?? {})),
    sheetNameToId = new Map(Object.entries(snapshot.sheets ?? {}).map(([sheetId, sheet]) => [sheet.name, sheetId]));
  return Object.fromEntries(Object.entries(direct).map(([id, definedName]) => [id, {
    id: definedName.id,
    name: definedName.name,
    formulaOrRefString: definedName.formulaOrRefString,
    localSheetId: normalizeDefinedNameLocalSheetId(definedName.localSheetId, definedName.formulaOrRefString, sheetIds, sheetNameToId)
  }]));
}
function normalizeDefinedNameLocalSheetId(localSheetId, formulaOrRefString, sheetIds, sheetNameToId) {
  if (!localSheetId || localSheetId === "AllDefaultWorkbook") return localSheetId;
  let sheetName = extractLeadingSheetName(formulaOrRefString),
    sheetIdFromFormula = sheetName ? sheetNameToId.get(sheetName) : void 0;
  return sheetIdFromFormula && sheetIdFromFormula !== localSheetId ? sheetIdFromFormula : sheetIds.has(localSheetId) || !sheetName ? localSheetId : sheetIdFromFormula ?? localSheetId;
}
function extractLeadingSheetName(formulaOrRefString) {
  if (!formulaOrRefString) return;
  let quotedMatch = /^'((?:[^']|'')+)'!/.exec(formulaOrRefString);
  return quotedMatch ? quotedMatch[1].replace(/''/g, "'") : /^([^=!]+)!/.exec(formulaOrRefString)?.[1];
}
function extractDefinedNames(snapshot) {
  let direct = snapshot.definedNames;
  if (direct && Object.keys(direct).length > 0) return direct;
  for (let resource of Object.values(snapshot.resources ?? {})) {
    if (resource?.name !== "SHEET_DEFINED_NAME_PLUGIN") continue;
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
function serializeVisibilityData(data = {}) {
  let result = {};
  for (let [indexKey, metadata] of Object.entries(data)) !metadata || typeof metadata != "object" || !("hd" in metadata) || (result[Number(indexKey)] = {
    hd: metadata.hd
  });
  return result;
}
export { serializeRuntimeWorkbookSnapshot };
