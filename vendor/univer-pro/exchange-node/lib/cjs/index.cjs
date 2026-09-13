"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
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
  BaseAttachmentPolicy: () => BaseAttachmentPolicy,
  BaseExportMode: () => BaseExportMode,
  BaseFormulaPolicy: () => BaseFormulaPolicy,
  BaseHeaderPolicy: () => BaseHeaderPolicy,
  BaseImagePolicy: () => BaseImagePolicy,
  BaseImportMode: () => BaseImportMode,
  BaseTypeInference: () => BaseTypeInference,
  CsvFormulaMode: () => CsvFormulaMode,
  CsvLineEnding: () => CsvLineEnding,
  CsvQuoteStyle: () => CsvQuoteStyle,
  CsvTypeInferenceMode: () => CsvTypeInferenceMode,
  CsvValueMode: () => CsvValueMode,
  DocxCompatibilityMode: () => DocxCompatibilityMode,
  ExchangeError: () => ExchangeError,
  ExchangeErrorCode: () => ExchangeErrorCode,
  ExchangeFormat: () => ExchangeFormat,
  FormulaCalculationMode: () => FormulaCalculationMode,
  exportSnapshotToBuffer: () => exportSnapshotToBuffer,
  exportSnapshotToFile: () => exportSnapshotToFile,
  exportToBuffer: () => exportToBuffer,
  exportToFile: () => exportToFile,
  importBuffer: () => importBuffer,
  importBufferToSnapshot: () => importBufferToSnapshot,
  importFile: () => importFile,
  importFileToSnapshot: () => importFileToSnapshot
});
module.exports = __toCommonJS(index_exports);
var import_collaboration = require("@univerjs-pro/collaboration"), import_core = require("@univerjs/core"), import_node_path = require("node:path"), import_promises = require("node:fs/promises");

// src/binding.ts
var import_node_module = require("node:module"), import_node_process = __toESM(require("node:process"), 1);

// src/types.ts
var ExchangeFormat = /* @__PURE__ */ ((ExchangeFormat2) => (ExchangeFormat2.XLS = "xls", ExchangeFormat2.XLSX = "xlsx", ExchangeFormat2.CSV = "csv", ExchangeFormat2.TSV = "tsv", ExchangeFormat2.DOC = "doc", ExchangeFormat2.DOCX = "docx", ExchangeFormat2.PPT = "ppt", ExchangeFormat2.PPTX = "pptx", ExchangeFormat2))(ExchangeFormat || {}), FormulaCalculationMode = /* @__PURE__ */ ((FormulaCalculationMode2) => (FormulaCalculationMode2.FORCED = "forced", FormulaCalculationMode2.WHEN_EMPTY = "when_empty", FormulaCalculationMode2.NO = "no", FormulaCalculationMode2))(FormulaCalculationMode || {}), CsvTypeInferenceMode = /* @__PURE__ */ ((CsvTypeInferenceMode2) => (CsvTypeInferenceMode2.OFF = "off", CsvTypeInferenceMode2.SAFE = "safe", CsvTypeInferenceMode2.AGGRESSIVE = "aggressive", CsvTypeInferenceMode2))(CsvTypeInferenceMode || {}), CsvQuoteStyle = /* @__PURE__ */ ((CsvQuoteStyle2) => (CsvQuoteStyle2.MINIMAL = "minimal", CsvQuoteStyle2.ALWAYS = "always", CsvQuoteStyle2))(CsvQuoteStyle || {}), CsvLineEnding = /* @__PURE__ */ ((CsvLineEnding2) => (CsvLineEnding2.LF = "lf", CsvLineEnding2.CRLF = "cr_lf", CsvLineEnding2))(CsvLineEnding || {}), CsvValueMode = /* @__PURE__ */ ((CsvValueMode2) => (CsvValueMode2.DISPLAY = "display", CsvValueMode2.RAW = "raw", CsvValueMode2))(CsvValueMode || {}), CsvFormulaMode = /* @__PURE__ */ ((CsvFormulaMode2) => (CsvFormulaMode2.CACHED = "cached", CsvFormulaMode2.EXPRESSION = "expression", CsvFormulaMode2))(CsvFormulaMode || {}), BaseImportMode = /* @__PURE__ */ ((BaseImportMode2) => (BaseImportMode2.TABLES = "tables", BaseImportMode2.SHEETS = "sheets", BaseImportMode2.HYBRID = "hybrid", BaseImportMode2.AUTO = "auto", BaseImportMode2))(BaseImportMode || {}), BaseTypeInference = /* @__PURE__ */ ((BaseTypeInference2) => (BaseTypeInference2.NONE = "none", BaseTypeInference2.SAFE = "safe", BaseTypeInference2.AGGRESSIVE = "aggressive", BaseTypeInference2))(BaseTypeInference || {}), BaseFormulaPolicy = /* @__PURE__ */ ((BaseFormulaPolicy2) => (BaseFormulaPolicy2.VALUES = "values", BaseFormulaPolicy2.TEXT = "text", BaseFormulaPolicy2.FAIL = "fail", BaseFormulaPolicy2.CONVERT_THEN_VALUES = "convertThenValues", BaseFormulaPolicy2))(BaseFormulaPolicy || {}), BaseImagePolicy = /* @__PURE__ */ ((BaseImagePolicy2) => (BaseImagePolicy2.SAFE = "safe", BaseImagePolicy2.CELL_ONLY = "cell-only", BaseImagePolicy2.MEDIA_TABLE = "media-table", BaseImagePolicy2.NONE = "none", BaseImagePolicy2))(BaseImagePolicy || {}), BaseHeaderPolicy = /* @__PURE__ */ ((BaseHeaderPolicy2) => (BaseHeaderPolicy2.FIRST_ROW = "firstRow", BaseHeaderPolicy2.NONE = "none", BaseHeaderPolicy2))(BaseHeaderPolicy || {}), BaseExportMode = /* @__PURE__ */ ((BaseExportMode2) => (BaseExportMode2.TABLES = "tables", BaseExportMode2.RANGES = "ranges", BaseExportMode2))(BaseExportMode || {}), BaseAttachmentPolicy = /* @__PURE__ */ ((BaseAttachmentPolicy2) => (BaseAttachmentPolicy2.HYBRID = "hybrid", BaseAttachmentPolicy2.MANIFEST = "manifest", BaseAttachmentPolicy2.LINKS = "links", BaseAttachmentPolicy2.NONE = "none", BaseAttachmentPolicy2))(BaseAttachmentPolicy || {}), DocxCompatibilityMode = /* @__PURE__ */ ((DocxCompatibilityMode2) => (DocxCompatibilityMode2.TRADITIONAL = "traditional", DocxCompatibilityMode2.MODERN = "modern", DocxCompatibilityMode2))(DocxCompatibilityMode || {}), ExchangeErrorCode = /* @__PURE__ */ ((ExchangeErrorCode2) => (ExchangeErrorCode2.INVALID_ARGUMENT = "INVALID_ARGUMENT", ExchangeErrorCode2.UNSUPPORTED_FORMAT = "UNSUPPORTED_FORMAT", ExchangeErrorCode2.INVALID_FILE = "INVALID_FILE", ExchangeErrorCode2.INCOMPLETE_SNAPSHOT = "INCOMPLETE_SNAPSHOT", ExchangeErrorCode2.IO_ERROR = "IO_ERROR", ExchangeErrorCode2.NATIVE_LOAD_FAILED = "NATIVE_LOAD_FAILED", ExchangeErrorCode2.CONVERSION_FAILED = "CONVERSION_FAILED", ExchangeErrorCode2))(ExchangeErrorCode || {}), ExchangeError = class extends Error {
  constructor(code, message, options) {
    super(message, options);
    this.code = code;
  }
  code;
  name = "ExchangeError";
};

// src/binding.ts
var nativeBinding = null, nativeBindingSource = null, nodeRequire = (0, import_node_module.createRequire)(__filename);
function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}
async function loadNativeBinding() {
  if (nativeBinding)
    return nativeBinding;
  let errors = [];
  try {
    return nativeBinding = nodeRequire("@univerjs-pro/exchange-node-binding"), nativeBindingSource = "@univerjs-pro/exchange-node-binding", nativeBinding;
  } catch (error) {
    errors.push(`@univerjs-pro/exchange-node-binding: ${errorMessage(error)}`);
  }
  throw new ExchangeError(
    "NATIVE_LOAD_FAILED" /* NATIVE_LOAD_FAILED */,
    [
      "Failed to load native exchange binding.",
      `platform=${import_node_process.default.platform}`,
      `arch=${import_node_process.default.arch}`,
      "expected npm package=@univerjs-pro/exchange-node-binding",
      "attempted paths:",
      ...errors.map((item) => `- ${item}`)
    ].join(`
`)
  );
}

// src/snapshot-collector.ts
var import_protocol = require("@univerjs/protocol");
function createSnapshotCollector() {
  let sheetBlocks = /* @__PURE__ */ new Map();
  return {
    // The public Pro conversion functions accept the host-wide service
    // contract even though these conversion paths use its two write methods.
    service: {
      async saveSheetBlock(_context, { block }) {
        return block ? (sheetBlocks.set(block.id, block), {
          blockID: block.id,
          error: { code: import_protocol.ErrorCode.OK, message: "" }
        }) : {
          blockID: "",
          error: { code: import_protocol.ErrorCode.UNDEFINED, message: "block is required" }
        };
      },
      async saveSnapshot() {
        return { error: { code: import_protocol.ErrorCode.OK, message: "" } };
      }
    },
    get sheetBlocks() {
      return [...sheetBlocks.values()];
    }
  };
}

// src/snapshot.ts
var import_node_buffer = require("node:buffer");
function bufferView(bytes) {
  return import_node_buffer.Buffer.isBuffer(bytes) ? bytes : import_node_buffer.Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}
function takeMetadata(owner, kind, metadata, ownerId) {
  if (!owner)
    return owner;
  let { originalMeta, ...rest } = owner;
  if (originalMeta instanceof Uint8Array)
    metadata.push({ kind, ownerId, data: bufferView(originalMeta) });
  else if (originalMeta != null)
    throw new TypeError(`${kind} originalMeta must be a Uint8Array`);
  return rest;
}
function toNativeSnapshot(value) {
  let metadata = [], source = value.snapshot, snapshot = { ...source }, sourceWorkbook = source.workbook;
  if (sourceWorkbook) {
    let workbook = takeMetadata(sourceWorkbook, "workbook", metadata), sourceSheets = sourceWorkbook.sheets;
    sourceSheets && (workbook.sheets = Object.fromEntries(
      Object.entries(sourceSheets).map(([sheetId, sheet]) => [
        sheetId,
        takeMetadata(sheet, "worksheet", metadata, sheetId)
      ])
    )), snapshot.workbook = workbook;
  }
  for (let kind of ["doc", "slide"]) {
    let owner = source[kind];
    owner && (snapshot[kind] = takeMetadata(owner, kind, metadata));
  }
  return {
    snapshotJson: import_node_buffer.Buffer.from(JSON.stringify(snapshot)),
    metadata,
    sheetBlocks: value.sheetBlocks.map((block) => ({
      id: block.id,
      startRow: block.startRow,
      endRow: block.endRow,
      data: bufferView(block.data)
    }))
  };
}
function restoreMetadata(snapshot, metadata) {
  for (let entry of metadata) {
    let owner;
    if (entry.kind === "worksheet") {
      let sheets = snapshot.workbook?.sheets;
      owner = entry.ownerId ? sheets?.[entry.ownerId] : void 0;
    } else {
      if (entry.kind !== "workbook" && entry.kind !== "doc" && entry.kind !== "slide")
        throw new TypeError(`unsupported native snapshot metadata kind ${entry.kind}`);
      owner = snapshot[entry.kind];
    }
    if (!owner)
      throw new TypeError(`native snapshot metadata owner ${entry.kind}/${entry.ownerId ?? ""} is missing`);
    owner.originalMeta = entry.data;
  }
}
function fromNativeSnapshot(value) {
  let snapshot = JSON.parse(value.snapshotJson.toString("utf8"));
  return restoreMetadata(snapshot, value.metadata), {
    snapshot,
    sheetBlocks: value.sheetBlocks.map((block) => ({
      id: block.id,
      startRow: block.startRow,
      endRow: block.endRow,
      data: block.data
    }))
  };
}

// src/index.ts
var FORMAT_BY_EXTENSION = {
  ".xls": "xls" /* XLS */,
  ".xlsx": "xlsx" /* XLSX */,
  ".csv": "csv" /* CSV */,
  ".tsv": "tsv" /* TSV */,
  ".doc": "doc" /* DOC */,
  ".docx": "docx" /* DOCX */,
  ".ppt": "ppt" /* PPT */,
  ".pptx": "pptx" /* PPTX */
};
function normalizeWorkbookSheetOrder(data) {
  let existingOrder = Array.isArray(data.sheetOrder) ? data.sheetOrder.filter((sheetId) => typeof sheetId == "string") : [], ordered = new Set(existingOrder), missingSheetIds = Object.keys(data.sheets).filter((sheetId) => !ordered.has(sheetId));
  return missingSheetIds.length === 0 ? data : { ...data, sheetOrder: [...existingOrder, ...missingSheetIds] };
}
function exchangeError(error, fallback) {
  if (error instanceof ExchangeError)
    return error;
  let message = error instanceof Error ? error.message : String(error), nativeCode = /^\[([A-Z_]+)]\s*/.exec(message)?.[1];
  return nativeCode && Object.values(ExchangeErrorCode).includes(nativeCode) ? new ExchangeError(nativeCode, message.replace(/^\[[A-Z_]+]\s*/, ""), {
    cause: error
  }) : error instanceof TypeError ? new ExchangeError("INVALID_ARGUMENT" /* INVALID_ARGUMENT */, message, { cause: error }) : new ExchangeError(fallback, message, { cause: error });
}
function resolveFormat(fileName, format) {
  if (format)
    return format;
  let inferred = FORMAT_BY_EXTENSION[(0, import_node_path.extname)(fileName).toLowerCase()];
  if (!inferred)
    throw new ExchangeError(
      "UNSUPPORTED_FORMAT" /* UNSUPPORTED_FORMAT */,
      `Cannot infer an exchange format from fileName: ${fileName}`
    );
  return inferred;
}
function nativeUnitType(type) {
  switch (type) {
    case import_core.UniverInstanceType.UNIVER_SHEET:
      return "sheet";
    case import_core.UniverInstanceType.UNIVER_BASE:
      return "base";
    case import_core.UniverInstanceType.UNIVER_DOC:
      return "doc";
    case import_core.UniverInstanceType.UNIVER_SLIDE:
      return "slide";
    default:
      throw new ExchangeError("INVALID_ARGUMENT" /* INVALID_ARGUMENT */, `Unsupported Univer unit type: ${type}`);
  }
}
function nativeImportOptions(options, fileName) {
  return {
    format: resolveFormat(fileName, options.format),
    unitType: nativeUnitType(options.type),
    fileName,
    unitId: options.unitId,
    minSheetRowCount: "minSheetRowCount" in options ? options.minSheetRowCount : void 0,
    minSheetColumnCount: "minSheetColumnCount" in options ? options.minSheetColumnCount : void 0,
    compatibilityMode: "compatibilityMode" in options ? options.compatibilityMode : void 0,
    csv: "csv" in options ? options.csv : void 0,
    base: options.type === import_core.UniverInstanceType.UNIVER_BASE ? {
      mode: options.mode,
      typeInference: options.typeInference,
      formulaPolicy: options.formulaPolicy,
      imagePolicy: options.imagePolicy,
      maxCells: options.maxCells,
      mapping: options.mapping
    } : void 0,
    formulaCalculation: "formulaCalculation" in options ? options.formulaCalculation : void 0
  };
}
function nativeExportOptions(options) {
  return {
    format: options.format,
    unitType: nativeUnitType(options.type),
    csv: "csv" in options ? options.csv : void 0,
    base: options.type === import_core.UniverInstanceType.UNIVER_BASE && options.format === "xlsx" /* XLSX */ ? {
      mode: options.mode,
      formulaPolicy: options.formulaPolicy,
      attachmentPolicy: options.attachmentPolicy,
      mapping: options.mapping
    } : void 0,
    formulaCalculation: "formulaCalculation" in options ? options.formulaCalculation : void 0
  };
}
async function importSnapshot(input, options, fileName) {
  try {
    let result = await (await loadNativeBinding()).exchangeImportToSnapshot(
      input,
      JSON.stringify(nativeImportOptions(options, fileName))
    );
    return fromNativeSnapshot(result);
  } catch (error) {
    throw exchangeError(error, "CONVERSION_FAILED" /* CONVERSION_FAILED */);
  }
}
async function snapshotToMemory(snapshot, type) {
  try {
    switch (type) {
      case import_core.UniverInstanceType.UNIVER_SHEET:
        return await (0, import_collaboration.transformSnapshotToWorkbookData)(snapshot.snapshot, snapshot.sheetBlocks);
      case import_core.UniverInstanceType.UNIVER_BASE:
        return await (0, import_collaboration.transformSnapshotToBaseData)(snapshot.snapshot, snapshot.sheetBlocks);
      case import_core.UniverInstanceType.UNIVER_DOC:
        return (0, import_collaboration.transformSnapshotToDocumentData)(snapshot.snapshot);
      case import_core.UniverInstanceType.UNIVER_SLIDE:
        return (0, import_collaboration.transformSnapshotToSlideData)(snapshot.snapshot);
      default:
        throw new TypeError(`Unsupported Univer unit type: ${type}`);
    }
  } catch (error) {
    throw exchangeError(error, "CONVERSION_FAILED" /* CONVERSION_FAILED */);
  }
}
async function memoryToSnapshot(data, options) {
  try {
    let unitId = data.id;
    if (!unitId)
      throw new ExchangeError("INVALID_ARGUMENT" /* INVALID_ARGUMENT */, "Export data must have a non-empty id");
    let rev = data.rev ?? 0, collector = createSnapshotCollector();
    switch (options.type) {
      case import_core.UniverInstanceType.UNIVER_SHEET: {
        let workbook = normalizeWorkbookSheetOrder(data), { snapshot } = await (0, import_collaboration.transformWorkbookDataToSnapshot)(
          { metadata: void 0 },
          workbook,
          unitId,
          rev,
          collector.service
        );
        return { snapshot, sheetBlocks: collector.sheetBlocks };
      }
      case import_core.UniverInstanceType.UNIVER_BASE: {
        let { snapshot } = await (0, import_collaboration.transformBaseDataToSnapshot)(
          { metadata: void 0 },
          data,
          unitId,
          rev,
          collector.service
        );
        return { snapshot, sheetBlocks: collector.sheetBlocks };
      }
      case import_core.UniverInstanceType.UNIVER_DOC: {
        let { snapshot } = await (0, import_collaboration.transformDocumentDataToSnapshot)(
          { metadata: void 0 },
          data,
          unitId,
          rev,
          collector.service
        );
        return { snapshot, sheetBlocks: [] };
      }
      case import_core.UniverInstanceType.UNIVER_SLIDE: {
        let slide = data, { snapshot } = await (0, import_collaboration.transformSlideDataToSnapshot)(
          slide.resources,
          slide,
          unitId,
          rev,
          collector.service
        );
        return { snapshot, sheetBlocks: [] };
      }
      default:
        throw new TypeError("Unsupported Univer unit type");
    }
  } catch (error) {
    throw exchangeError(error, "CONVERSION_FAILED" /* CONVERSION_FAILED */);
  }
}
async function importFile(path, options) {
  let snapshot = await importFileToSnapshot(path, options);
  return snapshotToMemory(snapshot, options.type);
}
async function importBuffer(input, options) {
  let snapshot = await importSnapshot(input, options, options.fileName);
  return snapshotToMemory(snapshot, options.type);
}
async function importFileToSnapshot(path, options) {
  let fileName = options.fileName ?? (0, import_node_path.basename)(path), input;
  try {
    input = await (0, import_promises.readFile)(path);
  } catch (error) {
    throw exchangeError(error, "IO_ERROR" /* IO_ERROR */);
  }
  return importSnapshot(input, options, fileName);
}
async function importBufferToSnapshot(input, options) {
  return importSnapshot(input, options, options.fileName);
}
async function exportToBuffer(data, options) {
  return exportSnapshotToBuffer(await memoryToSnapshot(data, options), options);
}
async function exportToFile(data, path, options) {
  await exportSnapshotToFile(await memoryToSnapshot(data, options), path, options);
}
async function exportSnapshotToBuffer(snapshot, options) {
  try {
    return await (await loadNativeBinding()).exchangeExportSnapshot(
      toNativeSnapshot(snapshot),
      JSON.stringify(nativeExportOptions(options))
    );
  } catch (error) {
    throw exchangeError(error, "CONVERSION_FAILED" /* CONVERSION_FAILED */);
  }
}
async function exportSnapshotToFile(snapshot, path, options) {
  let output = await exportSnapshotToBuffer(snapshot, options);
  try {
    await (0, import_promises.writeFile)(path, output);
  } catch (error) {
    throw exchangeError(error, "IO_ERROR" /* IO_ERROR */);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseAttachmentPolicy,
  BaseExportMode,
  BaseFormulaPolicy,
  BaseHeaderPolicy,
  BaseImagePolicy,
  BaseImportMode,
  BaseTypeInference,
  CsvFormulaMode,
  CsvLineEnding,
  CsvQuoteStyle,
  CsvTypeInferenceMode,
  CsvValueMode,
  DocxCompatibilityMode,
  ExchangeError,
  ExchangeErrorCode,
  ExchangeFormat,
  FormulaCalculationMode,
  exportSnapshotToBuffer,
  exportSnapshotToFile,
  exportToBuffer,
  exportToFile,
  importBuffer,
  importBufferToSnapshot,
  importFile,
  importFileToSnapshot
});
