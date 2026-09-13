import { FormulaCacheEligibilityService as var_core_value_sig45F0, FormulaLastValuePersistenceService as var_core_value_sigBC91, HostExternalReferenceModel as var_core_value_sigCB88, UniverProFormulaEnginePlugin as var_core_value_sig8D65, buildUpsertHostExternalReferenceMutations as var_core_value_sig8122, collectFormulaExternalReferenceQualifiers as var_core_value_sigEDC6, getScalarFormulaResultCell as var_core_value_sig611A, resolveFormulaResultPresentation as var_core_value_sig6BD9, resolveHostFormulaExternalReferences as var_core_value_sig7E56, toFormulaLastValue as var_core_value_sig4161 } from "@univerjs-pro/engine-formula";
import { CellValueType as var_core_value_sig7580, CommandType as var_core_value_sig1F18, CustomRangeType as var_core_value_sigD5A0, DataStreamTreeTokenType as var_core_value_sig81B2, DependentOn as var_core_value_sigA0A5, Disposable as var_core_value_sig10AA, ICommandService as var_core_value_sigE6D0, IConfigService as var_core_value_sig8E91, IResourceManagerService as var_core_value_sig00BE, IUndoRedoService as var_core_value_sig7BB5, IUniverInstanceService as var_core_value_sig6AAD, Inject as var_core_value_sig1157, Injector as var_core_value_sigA694, JSONX as var_core_value_sig18E0, Plugin as var_core_value_sig0428, TextX as var_core_value_sigBE07, Tools as var_core_value_sig555F, UniverInstanceType as var_core_value_sig3D6F, generateRandomId as var_core_value_sig336C, getBodySliceForTextXAction as var_core_value_sig6E68, getCustomRangeInterval as var_core_value_sig8DFE, getParagraphContentStartOffset as var_core_value_sig48EA, getRichTextEditPath as var_core_value_sig5E16, merge as var_core_value_sig09F3, shiftExclusiveRangeOnDelete as var_core_value_sig4592, shiftExclusiveRangeOnInsert as var_core_value_sigC5C4, shiftInclusiveRangeOnDelete as var_core_value_sig1617, shiftInclusiveRangeOnInsert as var_core_value_sig4169, touchDependencies as var_core_value_sig6D19 } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET as var_core_value_sig279C, DocSelectionManagerService as var_core_value_sigAC51, DocTextResolverService as var_core_value_sig8986, RichTextEditingMutation as var_core_value_sigCAF7, UniverDocsPlugin as var_core_value_sigED1C } from "@univerjs/docs";
import { FormulaResultStatus as var_core_value_sig726E, LexerTreeBuilder as var_core_value_sig2CD3, OtherFormulaBizType as var_core_value_sig038E, RegisterOtherFormulaService as var_core_value_sigAA1E } from "@univerjs/engine-formula";
import { Subject as var_core_value_sigC9F5 } from "rxjs";
import { UniverLicensePlugin as var_core_value_sig7EEA } from "@univerjs-pro/license";
const y = "DOC_FORMULA_PLUGIN",
  je = 1,
  Me = "univer-docs-formula",
  Ne = "￼";
function b() {
  return {
    schemaVersion: 1,
    formulas: {}
  };
}
function x(var_core_value_sigDD51) {
  return !var_core_value_sigDD51 || typeof var_core_value_sigDD51 != "object" || !S(var_core_value_sigDD51, ["schemaVersion", "formulas"]) || !("schemaVersion" in var_core_value_sigDD51) || var_core_value_sigDD51.schemaVersion !== 1 || !("formulas" in var_core_value_sigDD51) || !var_core_value_sigDD51.formulas || typeof var_core_value_sigDD51.formulas != "object" || Array.isArray(var_core_value_sigDD51.formulas) ? false : Object.entries(var_core_value_sigDD51.formulas).every(([var_core_value_sigDBB7, var_core_value_sigD0A8]) => var_core_value_sigDBB7.length > 0 && Pe(var_core_value_sigD0A8));
}
function Pe(var_core_value_sigF057) {
  return !var_core_value_sigF057 || typeof var_core_value_sigF057 != "object" || !S(var_core_value_sigF057, ["formula", "numberFormat", "lastValue"]) || !("formula" in var_core_value_sigF057) || typeof var_core_value_sigF057.formula != "string" || !var_core_value_sigF057.formula["trim"]() || "numberFormat" in var_core_value_sigF057 && var_core_value_sigF057.numberFormat != null && (typeof var_core_value_sigF057.numberFormat != "object" || !S(var_core_value_sigF057.numberFormat, ["pattern"]) || !("pattern" in var_core_value_sigF057.numberFormat) || typeof var_core_value_sigF057.numberFormat["pattern"] != "string") ? false : !("lastValue" in var_core_value_sigF057) || var_core_value_sigF057.lastValue == null || Fe(var_core_value_sigF057.lastValue);
}
function Fe(var_core_value_sig72F6) {
  return !var_core_value_sig72F6 || typeof var_core_value_sig72F6 != "object" || !S(var_core_value_sig72F6, ["v", "t", "pattern"]) || !("v" in var_core_value_sig72F6) || var_core_value_sig72F6.v !== null && typeof var_core_value_sig72F6.v != "string" && typeof var_core_value_sig72F6.v != "number" && typeof var_core_value_sig72F6.v != "boolean" || "t" in var_core_value_sig72F6 && var_core_value_sig72F6.t != null && !Ie(var_core_value_sig72F6.t) ? false : !("pattern" in var_core_value_sig72F6) || var_core_value_sig72F6.pattern == null || typeof var_core_value_sig72F6.pattern == "string";
}
function S(var_core_value_sig9FBA, var_core_value_sigFE01) {
  let var_core_value_sigA2CE = new Set(var_core_value_sigFE01);
  return Object.keys(var_core_value_sig9FBA).every(var_core_value_sigF4B9 => var_core_value_sigA2CE.has(var_core_value_sigF4B9));
}
function Ie(var_core_value_sig1975) {
  return typeof var_core_value_sig1975 == "number" && Object.values(var_core_value_sig7580).includes(var_core_value_sig1975);
}
const Le = new Set([var_core_value_sig81B2.SECTION_BREAK, var_core_value_sig81B2.TABLE_START, var_core_value_sig81B2.TABLE_ROW_START, var_core_value_sig81B2.TABLE_CELL_START, var_core_value_sig81B2.TABLE_CELL_END, var_core_value_sig81B2.TABLE_ROW_END, var_core_value_sig81B2.TABLE_END, var_core_value_sig81B2.COLUMN_GROUP_START, var_core_value_sig81B2.COLUMN_START, var_core_value_sig81B2.COLUMN_END, var_core_value_sig81B2.COLUMN_GROUP_END, var_core_value_sig81B2.BLOCK_START, var_core_value_sig81B2.BLOCK_END, var_core_value_sig81B2.CUSTOM_BLOCK]);
var C = class extends Error {
  constructor() {
    super("Doc Formula range cannot cross document structure boundaries");
  }
};
function Re(var_core_value_sig6EA1) {
  var var_core_value_sig029F, var_core_value_sig3767;
  let var_core_value_sig670B = var_core_value_sig555F.deepClone(var_core_value_sig6EA1.documentData),
    var_core_value_sig6912 = j(var_core_value_sig670B),
    {
      startOffset: var_core_value_sigE235,
      endOffset: var_core_value_sig7664
    } = We(var_core_value_sig6912, var_core_value_sig6EA1.startOffset, var_core_value_sig6EA1.endOffset);
  He(var_core_value_sig6912, var_core_value_sigE235, var_core_value_sig7664);
  let var_core_value_sig2281 = ((var_core_value_sig029F = var_core_value_sig6912.customRanges) == null ? undefined : var_core_value_sig029F.filter(var_core_value_sig5CEE => {
    if (!w(var_core_value_sig5CEE)) return false;
    let var_core_value_sigE92A = var_core_value_sig8DFE(var_core_value_sig5CEE);
    return var_core_value_sigE92A.endOffset > var_core_value_sigE235 && var_core_value_sigE92A.startOffset < var_core_value_sig7664;
  }).map(var_core_value_sig362B => var_core_value_sig362B.rangeId)) ?? [];
  qe(var_core_value_sig6912, var_core_value_sigE235, var_core_value_sig7664, "￼"), var_core_value_sig6912.customRanges = [...(((var_core_value_sig3767 = var_core_value_sig6912.customRanges) == null ? undefined : var_core_value_sig3767.filter(var_core_value_sig5CA5 => !var_core_value_sig2281.includes(var_core_value_sig5CA5.rangeId) && var_core_value_sig5CA5.rangeId !== var_core_value_sig6EA1.rangeId)) ?? []), Ue(var_core_value_sig6EA1.rangeId, var_core_value_sigE235)].sort((var_core_value_sigE90F, var_core_value_sigEFD4) => var_core_value_sigE90F.startIndex - var_core_value_sigEFD4.startIndex);
  let var_core_value_sig5E86 = E(var_core_value_sig6EA1.resource);
  return var_core_value_sig2281.forEach(var_core_value_sig861B => {
    delete var_core_value_sig5E86.formulas[var_core_value_sig861B];
  }), var_core_value_sig5E86.formulas[var_core_value_sig6EA1.rangeId] = var_core_value_sig555F.deepClone(var_core_value_sig6EA1.config), {
    nextDocumentData: var_core_value_sig670B,
    nextResource: var_core_value_sig5E86,
    cursorOffset: var_core_value_sigE235 + 1
  };
}
function ze(var_core_value_sig6998) {
  var var_core_value_sigF639, var_core_value_sigEAE5;
  let var_core_value_sigE94C = var_core_value_sig555F.deepClone(var_core_value_sig6998.documentData),
    var_core_value_sig6D47 = (var_core_value_sigF639 = j(var_core_value_sigE94C).customRanges) == null ? undefined : var_core_value_sigF639.find(var_core_value_sig5237 => var_core_value_sig5237.rangeId === var_core_value_sig6998.rangeId && w(var_core_value_sig5237));
  if (!var_core_value_sig6D47 || !((var_core_value_sigEAE5 = var_core_value_sig6998.resource) != null && var_core_value_sigEAE5.formulas[var_core_value_sig6998.rangeId])) return null;
  let var_core_value_sigCB82 = E(var_core_value_sig6998.resource);
  return var_core_value_sigCB82.formulas[var_core_value_sig6998.rangeId] = var_core_value_sig555F.deepClone(var_core_value_sig6998.config), {
    nextDocumentData: var_core_value_sigE94C,
    nextResource: var_core_value_sigCB82,
    cursorOffset: var_core_value_sig6D47.endIndex + 1
  };
}
function Be(var_core_value_sigCF4E) {
  let var_core_value_sig6CAD = var_core_value_sig555F.deepClone(var_core_value_sigCF4E.documentData),
    var_core_value_sig8CF5 = Je(var_core_value_sig6CAD, var_core_value_sigCF4E.rangeId, var_core_value_sigCF4E.text ?? "");
  if (var_core_value_sig8CF5 == null) return null;
  let var_core_value_sigDDD7 = E(var_core_value_sigCF4E.resource);
  return delete var_core_value_sigDDD7.formulas[var_core_value_sigCF4E.rangeId], {
    nextDocumentData: var_core_value_sig6CAD,
    nextResource: var_core_value_sigDDD7,
    cursorOffset: var_core_value_sig8CF5
  };
}
function Ve(var_core_value_sigB2CE, var_core_value_sig443C) {
  var var_core_value_sig39B1;
  let var_core_value_sig210D = var_core_value_sig555F.deepClone(var_core_value_sigB2CE),
    var_core_value_sigB4B4 = var_core_value_sig210D.body;
  if (!var_core_value_sigB4B4) return var_core_value_sig210D;
  let var_core_value_sigD407 = new Map(var_core_value_sig443C.map(var_core_value_sigBB00 => [var_core_value_sigBB00.rangeId, var_core_value_sigBB00.text])),
    var_core_value_sig63F3 = ((var_core_value_sig39B1 = var_core_value_sigB4B4.customRanges) == null ? undefined : var_core_value_sig39B1.filter(var_core_value_sig7E54 => w(var_core_value_sig7E54) && var_core_value_sigD407.has(var_core_value_sig7E54.rangeId)).sort((var_core_value_sig9A8D, var_core_value_sigC259) => var_core_value_sigC259.startIndex - var_core_value_sig9A8D.startIndex)) ?? [];
  for (let var_core_value_sig9C9F of var_core_value_sig63F3) Je(var_core_value_sig210D, var_core_value_sig9C9F.rangeId, var_core_value_sigD407.get(var_core_value_sig9C9F.rangeId) ?? "");
  return var_core_value_sig210D;
}
function w(var_core_value_sig6A71) {
  var var_core_value_sig3BF6;
  return (var_core_value_sig6A71 == null ? undefined : var_core_value_sig6A71.rangeType) === var_core_value_sigD5A0.CUSTOM && var_core_value_sig6A71.wholeEntity === true && ((var_core_value_sig3BF6 = var_core_value_sig6A71.properties) == null ? undefined : var_core_value_sig3BF6.kind) === "univer-docs-formula";
}
function T(var_core_value_sig38CE, var_core_value_sig62B7) {
  var var_core_value_sig37A8;
  return var_core_value_sig38CE == null || (var_core_value_sig37A8 = var_core_value_sig38CE.customRanges) == null ? undefined : var_core_value_sig37A8.find(var_core_value_sigFDEA => var_core_value_sigFDEA.rangeId === var_core_value_sig62B7 && w(var_core_value_sigFDEA));
}
function He(var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511) {
  if (var_core_value_sig7A3C === var_core_value_sig0511) {
    if (Le.has(var_core_value_sigA90D.dataStream[var_core_value_sig7A3C])) throw new C();
    return;
  }
  for (let var_core_value_sig86D0 = var_core_value_sig7A3C; var_core_value_sig86D0 < var_core_value_sig0511; var_core_value_sig86D0++) if (var_core_value_sigA90D.dataStream[var_core_value_sig86D0] === var_core_value_sig81B2.PARAGRAPH || Le.has(var_core_value_sigA90D.dataStream[var_core_value_sig86D0])) throw new C();
}
function Ue(var_core_value_sig1F44, var_core_value_sigCB04) {
  return {
    startIndex: var_core_value_sigCB04,
    endIndex: var_core_value_sigCB04,
    rangeId: var_core_value_sig1F44,
    rangeType: var_core_value_sigD5A0.CUSTOM,
    wholeEntity: true,
    properties: {
      kind: Me
    }
  };
}
function E(var_core_value_sig947E) {
  return var_core_value_sig947E ? var_core_value_sig555F.deepClone(var_core_value_sig947E) : b();
}
function We(var_core_value_sig4545, var_core_value_sigF39A, var_core_value_sigF79C) {
  let var_core_value_sig2E54 = Ke(var_core_value_sig4545),
    var_core_value_sig7658 = var_core_value_sigF39A ?? var_core_value_sig2E54,
    var_core_value_sigDCF5 = var_core_value_sigF79C ?? var_core_value_sig7658;
  return {
    startOffset: Ge(Math.min(var_core_value_sig7658, var_core_value_sigDCF5), var_core_value_sig2E54),
    endOffset: Ge(Math.max(var_core_value_sig7658, var_core_value_sigDCF5), var_core_value_sig2E54)
  };
}
function Ge(var_core_value_sigC786, var_core_value_sigC0D9) {
  return Math.max(0, Math.min(var_core_value_sigC786, var_core_value_sigC0D9));
}
function Ke(var_core_value_sigF051) {
  return var_core_value_sigF051.dataStream["endsWith"]("" + var_core_value_sig81B2.PARAGRAPH + var_core_value_sig81B2.SECTION_BREAK) ? Math.max(0, var_core_value_sigF051.dataStream["length"] - 2) : var_core_value_sigF051.dataStream["endsWith"](var_core_value_sig81B2.SECTION_BREAK) ? Math.max(0, var_core_value_sigF051.dataStream["length"] - 1) : var_core_value_sigF051.dataStream["length"];
}
function qe(var_core_value_sig5825, var_core_value_sig4EB7, var_core_value_sig73AF, var_core_value_sig548A) {
  var_core_value_sig73AF > var_core_value_sig4EB7 && Xe(var_core_value_sig5825, var_core_value_sig4EB7, var_core_value_sig73AF), Ye(var_core_value_sig5825, var_core_value_sig4EB7, var_core_value_sig548A);
}
function Je(var_core_value_sigE026, var_core_value_sig339E, var_core_value_sig7550) {
  var var_core_value_sig2983, var_core_value_sigE1B0;
  let var_core_value_sigD4FF = j(var_core_value_sigE026),
    var_core_value_sig1E5B = (var_core_value_sig2983 = var_core_value_sigD4FF.customRanges) == null ? undefined : var_core_value_sig2983.find(var_core_value_sig4CD2 => var_core_value_sig4CD2.rangeId === var_core_value_sig339E && w(var_core_value_sig4CD2));
  if (!var_core_value_sig1E5B) return null;
  let var_core_value_sigB680 = var_core_value_sig8DFE(var_core_value_sig1E5B);
  return qe(var_core_value_sigD4FF, var_core_value_sigB680.startOffset, var_core_value_sigB680.endOffset, var_core_value_sig7550), var_core_value_sigD4FF.customRanges = (var_core_value_sigE1B0 = var_core_value_sigD4FF.customRanges) == null ? undefined : var_core_value_sigE1B0.filter(var_core_value_sig48CA => var_core_value_sig48CA.rangeId !== var_core_value_sig339E), var_core_value_sigB680.startOffset + var_core_value_sig7550.length;
}
function Ye(var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig2C39) {
  var_core_value_sig2C39 && (var_core_value_sig1F64.dataStream = "" + var_core_value_sig1F64.dataStream["slice"](0, var_core_value_sigDD1C) + var_core_value_sig2C39 + var_core_value_sig1F64.dataStream["slice"](var_core_value_sigDD1C), Ze(var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig2C39.length));
}
function Xe(var_core_value_sigB7D1, var_core_value_sig64F0, var_core_value_sig85B1) {
  let var_core_value_sig3141 = var_core_value_sig85B1 - var_core_value_sig64F0;
  var_core_value_sigB7D1.dataStream = "" + var_core_value_sigB7D1.dataStream["slice"](0, var_core_value_sig64F0) + var_core_value_sigB7D1.dataStream["slice"](var_core_value_sig85B1), Qe(var_core_value_sigB7D1, var_core_value_sig64F0, var_core_value_sig3141);
}
function Ze(var_core_value_sig2162, var_core_value_sig2EAD, var_core_value_sig6774) {
  var_core_value_sig2162.paragraphs = D(var_core_value_sig2162.paragraphs, var_core_value_sig2EAD, var_core_value_sig6774), var_core_value_sig2162.sectionBreaks = D(var_core_value_sig2162.sectionBreaks, var_core_value_sig2EAD, var_core_value_sig6774), var_core_value_sig2162.customBlocks = D(var_core_value_sig2162.customBlocks, var_core_value_sig2EAD, var_core_value_sig6774), var_core_value_sig2162.textRuns = $e(var_core_value_sig2162.textRuns, var_core_value_sig2EAD, var_core_value_sig6774), var_core_value_sig2162.tables = et(var_core_value_sig2162.tables, var_core_value_sig2EAD, var_core_value_sig6774), var_core_value_sig2162.columnGroups = k(var_core_value_sig2162.columnGroups, var_core_value_sig2EAD, var_core_value_sig6774), var_core_value_sig2162.customRanges = k(var_core_value_sig2162.customRanges, var_core_value_sig2EAD, var_core_value_sig6774), var_core_value_sig2162.customDecorations = k(var_core_value_sig2162.customDecorations, var_core_value_sig2EAD, var_core_value_sig6774), var_core_value_sig2162.blockRanges = k(var_core_value_sig2162.blockRanges, var_core_value_sig2EAD, var_core_value_sig6774);
}
function Qe(var_core_value_sig340D, var_core_value_sig82D4, var_core_value_sigBDE4) {
  var var_core_value_sig7DF1, var_core_value_sigDC86;
  var_core_value_sig340D.paragraphs = O(var_core_value_sig340D.paragraphs, var_core_value_sig82D4, var_core_value_sigBDE4), var_core_value_sig340D.sectionBreaks = O(var_core_value_sig340D.sectionBreaks, var_core_value_sig82D4, var_core_value_sigBDE4), var_core_value_sig340D.customBlocks = O(var_core_value_sig340D.customBlocks, var_core_value_sig82D4, var_core_value_sigBDE4), var_core_value_sig340D.textRuns = (var_core_value_sig7DF1 = tt((var_core_value_sigDC86 = var_core_value_sig340D.textRuns) == null ? undefined : var_core_value_sigDC86.map(var_core_value_sig50AF => ({
    ...var_core_value_sig50AF,
    startIndex: var_core_value_sig50AF.st,
    endIndex: var_core_value_sig50AF.ed
  })), var_core_value_sig82D4, var_core_value_sigBDE4)) == null ? undefined : var_core_value_sig7DF1.map(var_core_value_sigA942 => {
    let {
      startIndex: var_core_value_sigA621,
      endIndex: var_core_value_sigBBFF,
      ...var_core_value_sig8889
    } = var_core_value_sigA942;
    return {
      ...var_core_value_sig8889,
      st: var_core_value_sigA621,
      ed: var_core_value_sigBBFF
    };
  }), var_core_value_sig340D.tables = tt(var_core_value_sig340D.tables, var_core_value_sig82D4, var_core_value_sigBDE4), var_core_value_sig340D.columnGroups = A(var_core_value_sig340D.columnGroups, var_core_value_sig82D4, var_core_value_sigBDE4), var_core_value_sig340D.customRanges = A(var_core_value_sig340D.customRanges, var_core_value_sig82D4, var_core_value_sigBDE4), var_core_value_sig340D.customDecorations = A(var_core_value_sig340D.customDecorations, var_core_value_sig82D4, var_core_value_sigBDE4), var_core_value_sig340D.blockRanges = A(var_core_value_sig340D.blockRanges, var_core_value_sig82D4, var_core_value_sigBDE4);
}
function D(var_core_value_sig0B0C, var_core_value_sigA39E, var_core_value_sigBBEE) {
  return var_core_value_sig0B0C == null ? undefined : var_core_value_sig0B0C.map(var_core_value_sig32F8 => var_core_value_sig32F8.startIndex >= var_core_value_sigA39E ? {
    ...var_core_value_sig32F8,
    startIndex: var_core_value_sig32F8.startIndex + var_core_value_sigBBEE
  } : var_core_value_sig32F8);
}
function O(var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1) {
  let var_core_value_sig7F19 = var_core_value_sig6167 + var_core_value_sig65A1;
  return var_core_value_sig011D == null ? undefined : var_core_value_sig011D.map(var_core_value_sig5B67 => var_core_value_sig5B67.startIndex >= var_core_value_sig6167 && var_core_value_sig5B67.startIndex < var_core_value_sig7F19 ? null : var_core_value_sig5B67.startIndex >= var_core_value_sig7F19 ? {
    ...var_core_value_sig5B67,
    startIndex: var_core_value_sig5B67.startIndex - var_core_value_sig65A1
  } : var_core_value_sig5B67).filter(var_core_value_sig1758 => var_core_value_sig1758 != null);
}
function $e(var_core_value_sig7827, var_core_value_sig652C, var_core_value_sig7E32) {
  return var_core_value_sig7827 == null ? undefined : var_core_value_sig7827.map(var_core_value_sig4805 => var_core_value_sig4805.st >= var_core_value_sig652C ? {
    ...var_core_value_sig4805,
    st: var_core_value_sig4805.st + var_core_value_sig7E32,
    ed: var_core_value_sig4805.ed + var_core_value_sig7E32
  } : var_core_value_sig4805.ed > var_core_value_sig652C ? {
    ...var_core_value_sig4805,
    ed: var_core_value_sig4805.ed + var_core_value_sig7E32
  } : var_core_value_sig4805);
}
function k(var_core_value_sig4C07, var_core_value_sig79AB, var_core_value_sig8E74) {
  return var_core_value_sig4C07 == null ? undefined : var_core_value_sig4C07.map(var_core_value_sigE67E => var_core_value_sig4169(var_core_value_sigE67E, var_core_value_sig79AB, var_core_value_sig8E74));
}
function et(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sig90CB) {
  return var_core_value_sig104C == null ? undefined : var_core_value_sig104C.map(var_core_value_sig2902 => var_core_value_sigC5C4(var_core_value_sig2902, var_core_value_sig841D, var_core_value_sig90CB));
}
function A(var_core_value_sigBDF5, var_core_value_sigACC6, var_core_value_sig1614) {
  return var_core_value_sigBDF5 == null ? undefined : var_core_value_sigBDF5.map(var_core_value_sig9989 => var_core_value_sig1617(var_core_value_sig9989, var_core_value_sigACC6, var_core_value_sig1614)).filter(var_core_value_sig698E => var_core_value_sig698E != null);
}
function tt(var_core_value_sig85C3, var_core_value_sigB996, var_core_value_sig4BBA) {
  return var_core_value_sig85C3 == null ? undefined : var_core_value_sig85C3.map(var_core_value_sig2809 => var_core_value_sig4592(var_core_value_sig2809, var_core_value_sigB996, var_core_value_sig4BBA)).filter(var_core_value_sig2DAB => var_core_value_sig2DAB != null);
}
function j(var_core_value_sig6201) {
  if (!var_core_value_sig6201.body) throw Error("Document main body is required to insert Doc Formula.");
  return var_core_value_sig6201.body;
}
function M(var_core_value_sig5151) {
  "@babel/helpers - typeof";

  return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig877E) {
    return typeof var_core_value_sig877E;
  } : function (var_core_value_sig20C8) {
    return var_core_value_sig20C8 && typeof Symbol == "function" && var_core_value_sig20C8.constructor === Symbol && var_core_value_sig20C8 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig20C8;
  }, M(var_core_value_sig5151);
}
function nt(var_core_value_sigB542, var_core_value_sigBB6C) {
  if (M(var_core_value_sigB542) != "object" || !var_core_value_sigB542) return var_core_value_sigB542;
  var var_core_value_sigE2BF = var_core_value_sigB542[Symbol.toPrimitive];
  if (var_core_value_sigE2BF !== undefined) {
    var var_core_value_sigB8C7 = var_core_value_sigE2BF.call(var_core_value_sigB542, var_core_value_sigBB6C || "default");
    if (M(var_core_value_sigB8C7) != "object") return var_core_value_sigB8C7;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigBB6C === "string" ? String : Number)(var_core_value_sigB542);
}
function rt(var_core_value_sigA56E) {
  var var_core_value_sig1998 = nt(var_core_value_sigA56E, "string");
  return M(var_core_value_sig1998) == "symbol" ? var_core_value_sig1998 : var_core_value_sig1998 + "";
}
function N(var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F) {
  return (var_core_value_sig43B8 = rt(var_core_value_sig43B8)) in var_core_value_sigFF19 ? Object.defineProperty(var_core_value_sigFF19, var_core_value_sig43B8, {
    value: var_core_value_sigD98F,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigFF19[var_core_value_sig43B8] = var_core_value_sigD98F, var_core_value_sigFF19;
}
var P = class extends var_core_value_sig10AA {
  constructor(...var_core_value_sigE9A7) {
    super(...var_core_value_sigE9A7), N(this, "_resources", new Map()), N(this, "_rawResources", new Map()), N(this, "_loadErrors", new Map()), N(this, "_change$", new var_core_value_sigC9F5()), N(this, "change$", this._change$["asObservable"]());
  }
  getFormula(var_core_value_sigBECE, var_core_value_sig1B22) {
    var var_core_value_sig7F72;
    let var_core_value_sig7B2A = (var_core_value_sig7F72 = this._resources["get"](var_core_value_sigBECE)) == null ? undefined : var_core_value_sig7F72.formulas[var_core_value_sig1B22];
    return var_core_value_sig7B2A ? var_core_value_sig555F.deepClone(var_core_value_sig7B2A) : undefined;
  }
  getFormulas(var_core_value_sig06CD) {
    var var_core_value_sigA5F1;
    return var_core_value_sig555F.deepClone(((var_core_value_sigA5F1 = this._resources["get"](var_core_value_sig06CD)) == null ? undefined : var_core_value_sigA5F1.formulas) ?? {});
  }
  getResource(var_core_value_sig97A2) {
    let var_core_value_sig07E9 = this._resources["get"](var_core_value_sig97A2);
    return var_core_value_sig07E9 ? var_core_value_sig555F.deepClone(var_core_value_sig07E9) : undefined;
  }
  setFormula(var_core_value_sig4F59, var_core_value_sigF564, var_core_value_sig8CFA) {
    return this.setFormulas(var_core_value_sig4F59, {
      [var_core_value_sigF564]: var_core_value_sig8CFA
    });
  }
  setResource(var_core_value_sig2E11, var_core_value_sig5B69) {
    return this._loadErrors["has"](var_core_value_sig2E11) || !x(var_core_value_sig5B69) ? false : (this._resources["set"](var_core_value_sig2E11, var_core_value_sig555F.deepClone(var_core_value_sig5B69)), this._change$["next"]({
      unitId: var_core_value_sig2E11
    }), true);
  }
  setFormulas(var_core_value_sigB098, var_core_value_sigCE71) {
    if (this._loadErrors["has"](var_core_value_sigB098) || !Object.keys(var_core_value_sigCE71).length || !x({
      schemaVersion: 1,
      formulas: var_core_value_sigCE71
    })) return false;
    let var_core_value_sig21D8 = this._resources["get"](var_core_value_sigB098) ?? b(),
      var_core_value_sig2B65 = var_core_value_sig555F.deepClone(var_core_value_sig21D8);
    return Object.assign(var_core_value_sig2B65.formulas, var_core_value_sig555F.deepClone(var_core_value_sigCE71)), this._resources["set"](var_core_value_sigB098, var_core_value_sig2B65), this._change$["next"]({
      unitId: var_core_value_sigB098,
      rangeIds: Object.keys(var_core_value_sigCE71)
    }), true;
  }
  removeFormula(var_core_value_sigD7EA, var_core_value_sigB33B) {
    if (this._loadErrors["has"](var_core_value_sigD7EA)) return false;
    let var_core_value_sig24B9 = this._resources["get"](var_core_value_sigD7EA);
    if (!(var_core_value_sig24B9 != null && var_core_value_sig24B9.formulas[var_core_value_sigB33B])) return false;
    let var_core_value_sigE627 = var_core_value_sig555F.deepClone(var_core_value_sig24B9);
    return delete var_core_value_sigE627.formulas[var_core_value_sigB33B], this._resources["set"](var_core_value_sigD7EA, var_core_value_sigE627), this._change$["next"]({
      unitId: var_core_value_sigD7EA,
      rangeIds: [var_core_value_sigB33B]
    }), true;
  }
  load(var_core_value_sigEF3E, var_core_value_sig273D) {
    return var_core_value_sig273D && typeof var_core_value_sig273D == "object" && "schemaVersion" in var_core_value_sig273D && var_core_value_sig273D.schemaVersion !== 1 ? (this._preserveInvalid(var_core_value_sigEF3E, var_core_value_sig273D, "unsupported-version"), false) : x(var_core_value_sig273D) ? (this._resources["set"](var_core_value_sigEF3E, var_core_value_sig555F.deepClone(var_core_value_sig273D)), this._rawResources["delete"](var_core_value_sigEF3E), this._loadErrors["delete"](var_core_value_sigEF3E), this._change$["next"]({
      unitId: var_core_value_sigEF3E
    }), true) : (this._preserveInvalid(var_core_value_sigEF3E, var_core_value_sig273D, "invalid-resource"), false);
  }
  serialize(var_core_value_sig9A0D) {
    let var_core_value_sigA319 = this._resources["get"](var_core_value_sig9A0D);
    return var_core_value_sigA319 ? var_core_value_sig555F.deepClone(var_core_value_sigA319) : this._rawResources["has"](var_core_value_sig9A0D) ? var_core_value_sig555F.deepClone(this._rawResources["get"](var_core_value_sig9A0D)) : b();
  }
  getLoadError(var_core_value_sig2D58) {
    return this._loadErrors["get"](var_core_value_sig2D58);
  }
  removeUnit(var_core_value_sig223F) {
    this._resources["delete"](var_core_value_sig223F), this._rawResources["delete"](var_core_value_sig223F), this._loadErrors["delete"](var_core_value_sig223F), this._change$["next"]({
      unitId: var_core_value_sig223F
    });
  }
  dispose() {
    this._resources["clear"](), this._rawResources["clear"](), this._loadErrors["clear"](), this._change$["complete"](), super.dispose();
  }
  _preserveInvalid(var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sig58C1) {
    this._resources["delete"](var_core_value_sigD749), this._rawResources["set"](var_core_value_sigD749, var_core_value_sig555F.deepClone(var_core_value_sigCFFA)), this._loadErrors["set"](var_core_value_sigD749, var_core_value_sig58C1), this._change$["next"]({
      unitId: var_core_value_sigD749
    });
  }
};
let it = function (var_core_value_sig66C0) {
  return var_core_value_sig66C0.EMPTY = "empty", var_core_value_sig66C0.PENDING = "pending", var_core_value_sig66C0.SUCCESS = "success", var_core_value_sig66C0.ERROR = "error", var_core_value_sig66C0;
}({});
function F(var_core_value_sig9D15, var_core_value_sigB785) {
  return function (var_core_value_sig5090, var_core_value_sigC368) {
    var_core_value_sigB785(var_core_value_sig5090, var_core_value_sigC368, var_core_value_sig9D15);
  };
}
function I(var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F) {
  var var_core_value_sigDE3D = arguments.length,
    var_core_value_sigF175 = var_core_value_sigDE3D < 3 ? var_core_value_sigC0E3 : var_core_value_sig866F === null ? var_core_value_sig866F = Object.getOwnPropertyDescriptor(var_core_value_sigC0E3, var_core_value_sig52F7) : var_core_value_sig866F,
    var_core_value_sig6A18;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigF175 = Reflect.decorate(var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F);else {
    for (var var_core_value_sig4E3D = var_core_value_sig130F.length - 1; var_core_value_sig4E3D >= 0; var_core_value_sig4E3D--) (var_core_value_sig6A18 = var_core_value_sig130F[var_core_value_sig4E3D]) && (var_core_value_sigF175 = (var_core_value_sigDE3D < 3 ? var_core_value_sig6A18(var_core_value_sigF175) : var_core_value_sigDE3D > 3 ? var_core_value_sig6A18(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sigF175) : var_core_value_sig6A18(var_core_value_sigC0E3, var_core_value_sig52F7)) || var_core_value_sigF175);
  }
  return var_core_value_sigDE3D > 3 && var_core_value_sigF175 && Object.defineProperty(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sigF175), var_core_value_sigF175;
}
let L = class extends var_core_value_sig10AA {
  constructor(var_core_value_sigAD56, var_core_value_sigDB4A, var_core_value_sig6418) {
    super(), this._model = var_core_value_sigAD56, this._registrationService = var_core_value_sigDB4A, this._hostExternalReferenceModel = var_core_value_sig6418, N(this, "_registrations", new Map()), N(this, "_formulaKeys", new Map()), N(this, "_presentationChanged$", new var_core_value_sigC9F5()), N(this, "presentationChanged$", this._presentationChanged$["asObservable"]()), this.disposeWithMe(this._registrationService["formulaResult$"].subscribe(var_core_value_sigF602 => {
      for (let var_core_value_sig2AD0 of Object.values(var_core_value_sigF602)) for (let var_core_value_sig2AD8 of Object.values(var_core_value_sig2AD0)) var_core_value_sig2AD8.forEach(var_core_value_sig7524 => this._updateFormulaResult(var_core_value_sig7524));
    }));
  }
  syncUnit(var_core_value_sig1896) {
    var var_core_value_sig0285;
    let var_core_value_sig777D = var_core_value_sig1896.getUnitId(),
      var_core_value_sig3F4C = ((var_core_value_sig0285 = var_core_value_sig1896.getSnapshot().body) == null || (var_core_value_sig0285 = var_core_value_sig0285.customRanges) == null ? undefined : var_core_value_sig0285.filter(w)) ?? [],
      var_core_value_sigD65A = this._model["getFormulas"](var_core_value_sig777D),
      var_core_value_sig5A13 = new Set();
    for (let var_core_value_sig1BBD of var_core_value_sig3F4C) {
      let var_core_value_sig3EEE = var_core_value_sigD65A[var_core_value_sig1BBD.rangeId];
      var_core_value_sig3EEE && (var_core_value_sig5A13.add(R(var_core_value_sig777D, var_core_value_sig1BBD.rangeId)), this.register({
        unitId: var_core_value_sig777D,
        rangeId: var_core_value_sig1BBD.rangeId
      }, var_core_value_sig3EEE));
    }
    for (let var_core_value_sigF704 of Array.from(this._registrations["values"]())) var_core_value_sigF704.unitId === var_core_value_sig777D && !var_core_value_sig5A13.has(R(var_core_value_sigF704.unitId, var_core_value_sigF704.rangeId)) && this.unregister(var_core_value_sigF704);
  }
  register(var_core_value_sigF593, var_core_value_sig3607) {
    let var_core_value_sigB512 = R(var_core_value_sigF593.unitId, var_core_value_sigF593.rangeId),
      var_core_value_sigF2E6 = this._registrations["get"](var_core_value_sigB512),
      var_core_value_sig34C8 = this._hostExternalReferenceModel["getRevision"](var_core_value_sigF593.unitId);
    if (var_core_value_sigF2E6 && var_core_value_sigF2E6.config["formula"] === var_core_value_sig3607.formula && var_core_value_sigF2E6.referenceRevision === var_core_value_sig34C8) {
      var_core_value_sigF2E6.config = var_core_value_sig3607;
      let var_core_value_sig2BCF = var_core_value_sigF2E6.formulaId ? this._registrationService["getFormulaValueSync"](var_core_value_sigF2E6.unitId, var_core_value_sigF2E6.unitId, var_core_value_sigF2E6.formulaId) ?? undefined : undefined;
      var_core_value_sigF2E6.liveResult = var_core_value_sig2BCF, this._setPresentation(var_core_value_sigB512, z(var_core_value_sig3607, var_core_value_sig2BCF));
      return;
    }
    var_core_value_sigF2E6 != null && var_core_value_sigF2E6.formulaId && this._deleteRegistration(var_core_value_sigF2E6);
    let var_core_value_sigB744 = {
      ...var_core_value_sigF593,
      config: var_core_value_sig3607,
      referenceRevision: var_core_value_sig34C8,
      presentation: z(var_core_value_sig3607, undefined)
    };
    if (this._registrations["set"](var_core_value_sigB512, var_core_value_sigB744), !var_core_value_sig3607.formula["trim"]()) return;
    let var_core_value_sigEAE2 = this._registrationService["registerFormulaWithRange"](var_core_value_sigF593.unitId, var_core_value_sigF593.unitId, var_core_value_sig3607.formula, undefined, {
      rangeId: var_core_value_sigF593.rangeId
    }, var_core_value_sig038E.DOC, var_core_value_sigF593.rangeId);
    var_core_value_sigB744.formulaId = var_core_value_sigEAE2, this._formulaKeys["set"](var_core_value_sigEAE2, var_core_value_sigB512);
  }
  unregister(var_core_value_sigE68A) {
    let var_core_value_sig3E68 = R(var_core_value_sigE68A.unitId, var_core_value_sigE68A.rangeId),
      var_core_value_sigF4C5 = this._registrations["get"](var_core_value_sig3E68);
    var_core_value_sigF4C5 && (this._deleteRegistration(var_core_value_sigF4C5), this._registrations["delete"](var_core_value_sig3E68));
  }
  unregisterUnit(var_core_value_sig5410) {
    for (let var_core_value_sig0D69 of Array.from(this._registrations["values"]())) var_core_value_sig0D69.unitId === var_core_value_sig5410 && this.unregister(var_core_value_sig0D69);
  }
  getPresentation(var_core_value_sig492F) {
    var var_core_value_sig8EA0;
    return (var_core_value_sig8EA0 = this._registrations["get"](R(var_core_value_sig492F.unitId, var_core_value_sig492F.rangeId))) == null ? undefined : var_core_value_sig8EA0.presentation;
  }
  getResult(var_core_value_sigA6F6) {
    let var_core_value_sigCDDA = this._registrations["get"](R(var_core_value_sigA6F6.unitId, var_core_value_sigA6F6.rangeId));
    return var_core_value_sigCDDA ? B(var_core_value_sigCDDA) : undefined;
  }
  getRegisteredFormulas() {
    return Array.from(this._registrations["values"](), var_core_value_sig480E => ({
      identity: {
        unitId: var_core_value_sig480E.unitId,
        rangeId: var_core_value_sig480E.rangeId
      },
      config: var_core_value_sig480E.config,
      referenceRevision: var_core_value_sig480E.referenceRevision,
      ...(var_core_value_sig480E.liveResult ? {
        liveResult: var_core_value_sig480E.liveResult
      } : null)
    }));
  }
  dispose() {
    for (let var_core_value_sig26DB of this._registrations["values"]()) this._deleteRegistration(var_core_value_sig26DB);
    this._registrations["clear"](), this._formulaKeys["clear"](), this._presentationChanged$["complete"](), super.dispose();
  }
  _updateFormulaResult(var_core_value_sigE243) {
    let var_core_value_sig74A8 = this._formulaKeys["get"](var_core_value_sigE243.formulaId),
      var_core_value_sig21B2 = var_core_value_sig74A8 ? this._registrations["get"](var_core_value_sig74A8) : undefined;
    !var_core_value_sig74A8 || !var_core_value_sig21B2 || (var_core_value_sig21B2.liveResult = var_core_value_sigE243, this._setPresentation(var_core_value_sig74A8, z(var_core_value_sig21B2.config, var_core_value_sigE243)));
  }
  _setPresentation(var_core_value_sigDE08, var_core_value_sigACCB) {
    var var_core_value_sig7F33, var_core_value_sig0C53;
    let var_core_value_sigEA04 = this._registrations["get"](var_core_value_sigDE08);
    if (!var_core_value_sigEA04 || at(var_core_value_sigEA04.presentation, var_core_value_sigACCB)) return;
    let var_core_value_sig7A62 = var_core_value_sigEA04.presentation,
      var_core_value_sig8109 = B(var_core_value_sigEA04);
    var_core_value_sigEA04.presentation = var_core_value_sigACCB, this._presentationChanged$["next"]({
      unitId: var_core_value_sigEA04.unitId,
      rangeId: var_core_value_sigEA04.rangeId,
      presentation: var_core_value_sigACCB,
      previousPresentation: var_core_value_sig7A62,
      result: B(var_core_value_sigEA04),
      previousResult: {
        ...var_core_value_sig8109,
        ...var_core_value_sig7A62,
        value: (var_core_value_sig7F33 = var_core_value_sig7A62.cell) == null ? undefined : var_core_value_sig7F33.v,
        valueType: ((var_core_value_sig0C53 = var_core_value_sig7A62.cell) == null ? undefined : var_core_value_sig0C53.t) ?? undefined
      }
    });
  }
  _deleteRegistration(var_core_value_sig7565) {
    var_core_value_sig7565.formulaId && (this._registrationService["deleteFormula"](var_core_value_sig7565.unitId, var_core_value_sig7565.unitId, [var_core_value_sig7565.formulaId]), this._formulaKeys["delete"](var_core_value_sig7565.formulaId));
  }
};
L = I([F(0, var_core_value_sig1157(P)), F(1, var_core_value_sig1157(var_core_value_sigAA1E)), F(2, var_core_value_sig1157(var_core_value_sigCB88))], L);
function R(var_core_value_sig49B0, var_core_value_sig2547) {
  return var_core_value_sig49B0 + "\x00" + var_core_value_sig2547;
}
function z(var_core_value_sigBCA9, var_core_value_sig4CDF) {
  return var_core_value_sig6BD9({
    numberFormat: var_core_value_sigBCA9.numberFormat,
    lastValue: var_core_value_sigBCA9.lastValue,
    result: var_core_value_sig4CDF
  });
}
function B(var_core_value_sig3F79) {
  var var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B;
  let var_core_value_sig780B = var_core_value_sig3F79.presentation,
    var_core_value_sig7D1B = var_core_value_sig3F79.config["formula"].trim() ? var_core_value_sig780B.stale || var_core_value_sig780B.cell == null ? "pending" : ((var_core_value_sig880E = var_core_value_sig3F79.liveResult) == null ? undefined : var_core_value_sig880E.status) === var_core_value_sig726E.ERROR ? "error" : "success" : "empty";
  return {
    ...var_core_value_sig780B,
    status: var_core_value_sig7D1B,
    value: (var_core_value_sigC9ED = var_core_value_sig780B.cell) == null ? undefined : var_core_value_sigC9ED.v,
    valueType: ((var_core_value_sigB57B = var_core_value_sig780B.cell) == null ? undefined : var_core_value_sigB57B.t) ?? undefined
  };
}
function at(var_core_value_sig7BE0, var_core_value_sig7D40) {
  var var_core_value_sig6C7E, var_core_value_sig68BE, var_core_value_sig04C6, var_core_value_sigCA05;
  return var_core_value_sig7BE0.text === var_core_value_sig7D40.text && var_core_value_sig7BE0.color === var_core_value_sig7D40.color && var_core_value_sig7BE0.pattern === var_core_value_sig7D40.pattern && var_core_value_sig7BE0.source === var_core_value_sig7D40.source && var_core_value_sig7BE0.stale === var_core_value_sig7D40.stale && ((var_core_value_sig6C7E = var_core_value_sig7BE0.cell) == null ? undefined : var_core_value_sig6C7E.t) === ((var_core_value_sig68BE = var_core_value_sig7D40.cell) == null ? undefined : var_core_value_sig68BE.t) && Object.is((var_core_value_sig04C6 = var_core_value_sig7BE0.cell) == null ? undefined : var_core_value_sig04C6.v, (var_core_value_sigCA05 = var_core_value_sig7D40.cell) == null ? undefined : var_core_value_sigCA05.v);
}
const ot = {
    id: "docs-formula.mutation.set-formula",
    type: var_core_value_sig1F18.MUTATION,
    handler: (var_core_value_sig2F2B, var_core_value_sig70AF) => !(var_core_value_sig70AF != null && var_core_value_sig70AF.unitId) || !var_core_value_sig70AF.rangeId || !var_core_value_sig70AF.config ? false : var_core_value_sig2F2B.get(P).setFormula(var_core_value_sig70AF.unitId, var_core_value_sig70AF.rangeId, var_core_value_sig70AF.config)
  },
  st = {
    id: "docs-formula.mutation.remove-formula",
    type: var_core_value_sig1F18.MUTATION,
    handler: (var_core_value_sigD04E, var_core_value_sigB99B) => !(var_core_value_sigB99B != null && var_core_value_sigB99B.unitId) || !var_core_value_sigB99B.rangeId ? false : var_core_value_sigD04E.get(P).removeFormula(var_core_value_sigB99B.unitId, var_core_value_sigB99B.rangeId)
  },
  V = {
    id: "docs-formula.mutation.set-resource",
    type: var_core_value_sig1F18.MUTATION,
    handler: (var_core_value_sig5A75, var_core_value_sig7BAF) => !(var_core_value_sig7BAF != null && var_core_value_sig7BAF.unitId) || !var_core_value_sig7BAF.resource ? false : var_core_value_sig5A75.get(P).setResource(var_core_value_sig7BAF.unitId, var_core_value_sig7BAF.resource)
  },
  H = {
    id: "docs-formula.mutation.set-last-values",
    type: var_core_value_sig1F18.MUTATION,
    handler: (var_core_value_sig8F69, var_core_value_sig6884) => {
      if (!(var_core_value_sig6884 != null && var_core_value_sig6884.unitId) || !var_core_value_sig6884.updates["length"]) return false;
      let var_core_value_sig066E = var_core_value_sig8F69.get(P),
        var_core_value_sig9B0D = var_core_value_sig8F69.get(var_core_value_sigCB88),
        var_core_value_sig3D2C = var_core_value_sig066E.getResource(var_core_value_sig6884.unitId);
      if (!var_core_value_sig3D2C) return false;
      let var_core_value_sigC56D = var_core_value_sig555F.deepClone(var_core_value_sig3D2C),
        var_core_value_sig3A17 = false;
      for (let var_core_value_sigD4FB of var_core_value_sig6884.updates) {
        var var_core_value_sig938F, var_core_value_sigD948, var_core_value_sigBE5E, var_core_value_sig0281;
        let var_core_value_sigF0F9 = var_core_value_sigC56D.formulas[var_core_value_sigD4FB.rangeId];
        !var_core_value_sigF0F9 || var_core_value_sigF0F9.formula !== var_core_value_sigD4FB.expectedFormula || ((var_core_value_sig938F = var_core_value_sigF0F9.numberFormat) == null ? undefined : var_core_value_sig938F.pattern) !== var_core_value_sigD4FB.expectedNumberFormat || var_core_value_sig9B0D.getRevision(var_core_value_sig6884.unitId) !== var_core_value_sigD4FB.expectedReferenceRevision || (((var_core_value_sigD948 = var_core_value_sigF0F9.lastValue) == null ? undefined : var_core_value_sigD948.v) !== var_core_value_sigD4FB.lastValue["v"] || ((var_core_value_sigBE5E = var_core_value_sigF0F9.lastValue) == null ? undefined : var_core_value_sigBE5E.t) !== var_core_value_sigD4FB.lastValue["t"] || ((var_core_value_sig0281 = var_core_value_sigF0F9.lastValue) == null ? undefined : var_core_value_sig0281.pattern) !== var_core_value_sigD4FB.lastValue["pattern"]) && (var_core_value_sigF0F9.lastValue = var_core_value_sig555F.deepClone(var_core_value_sigD4FB.lastValue), var_core_value_sig3A17 = true);
      }
      return !var_core_value_sig3A17 || var_core_value_sig066E.setResource(var_core_value_sig6884.unitId, var_core_value_sigC56D);
    }
  },
  U = {
    id: "docs-formula.command.insert",
    type: var_core_value_sig1F18.COMMAND,
    handler: (var_core_value_sigED71, var_core_value_sig281C) => {
      if (!(var_core_value_sig281C != null && var_core_value_sig281C.formula["trim"]())) return false;
      let var_core_value_sig3C92 = q(var_core_value_sigED71, var_core_value_sig281C.unitId, "");
      if (!var_core_value_sig3C92) return false;
      let var_core_value_sigB16B = ft(var_core_value_sig281C.target, var_core_value_sig3C92.body, dt(var_core_value_sigED71, var_core_value_sig3C92.unitId));
      if (!var_core_value_sigB16B) return false;
      let var_core_value_sig585D = pt(var_core_value_sigED71, var_core_value_sig3C92.unitId, var_core_value_sig281C.formula, var_core_value_sig281C.externalReferences ?? []);
      if (!var_core_value_sig585D) return false;
      let var_core_value_sigE722 = mt(var_core_value_sig3C92.body, var_core_value_sig3C92.model, var_core_value_sig3C92.unitId),
        var_core_value_sig062A = ht({
          documentData: var_core_value_sig3C92.documentData,
          resource: var_core_value_sig3C92.resource,
          rangeId: var_core_value_sigE722,
          config: {
            formula: var_core_value_sig281C.formula,
            ...(var_core_value_sig281C.numberFormat ? {
              numberFormat: var_core_value_sig281C.numberFormat
            } : null)
          },
          startOffset: var_core_value_sigB16B.startOffset,
          endOffset: var_core_value_sigB16B.endOffset
        });
      if (!var_core_value_sig062A) return false;
      let var_core_value_sig050A = var_core_value_sig8122(var_core_value_sigED71, var_core_value_sig3C92.unitId, var_core_value_sig585D);
      return !var_core_value_sig050A || !J({
        accessor: var_core_value_sigED71,
        document: var_core_value_sig3C92.document,
        unitId: var_core_value_sig3C92.unitId,
        trigger: U.id,
        rangeId: var_core_value_sigE722,
        previousResource: var_core_value_sig3C92.resource,
        nextResource: var_core_value_sig062A.nextResource,
        previousDocumentData: var_core_value_sig3C92.documentData,
        nextDocumentData: var_core_value_sig062A.nextDocumentData,
        cursorOffset: var_core_value_sig062A.cursorOffset,
        externalMutations: var_core_value_sig050A
      }) ? false : {
        rangeId: var_core_value_sigE722,
        startOffset: var_core_value_sig062A.cursorOffset - 1,
        endOffset: var_core_value_sig062A.cursorOffset
      };
    }
  },
  W = {
    id: "docs-formula.command.update",
    type: var_core_value_sig1F18.COMMAND,
    handler: (var_core_value_sig8B32, var_core_value_sig870F) => {
      if (!(var_core_value_sig870F != null && var_core_value_sig870F.rangeId) || !var_core_value_sig870F.formula["trim"]()) return false;
      let var_core_value_sigB683 = q(var_core_value_sig8B32, var_core_value_sig870F.unitId, ""),
        var_core_value_sig26EC = var_core_value_sigB683 == null ? undefined : var_core_value_sigB683.model["getFormula"](var_core_value_sigB683.unitId, var_core_value_sig870F.rangeId),
        var_core_value_sigEEDB = var_core_value_sigB683 ? T(var_core_value_sigB683.documentData["body"], var_core_value_sig870F.rangeId) : undefined;
      if (!var_core_value_sigB683 || !var_core_value_sig26EC || !var_core_value_sigEEDB) return false;
      let var_core_value_sig36E7 = pt(var_core_value_sig8B32, var_core_value_sigB683.unitId, var_core_value_sig870F.formula, var_core_value_sig870F.externalReferences ?? []);
      if (!var_core_value_sig36E7) return false;
      let var_core_value_sig6A78 = var_core_value_sig8122(var_core_value_sig8B32, var_core_value_sigB683.unitId, var_core_value_sig36E7);
      if (!var_core_value_sig6A78) return false;
      let var_core_value_sigF7EF = Ct(var_core_value_sigB683.resource);
      return var_core_value_sigF7EF.formulas[var_core_value_sig870F.rangeId] = {
        formula: var_core_value_sig870F.formula,
        ...(var_core_value_sig870F.numberFormat ? {
          numberFormat: var_core_value_sig870F.numberFormat
        } : var_core_value_sig26EC.numberFormat ? {
          numberFormat: var_core_value_sig26EC.numberFormat
        } : null)
      }, J({
        accessor: var_core_value_sig8B32,
        document: var_core_value_sigB683.document,
        unitId: var_core_value_sigB683.unitId,
        trigger: W.id,
        rangeId: var_core_value_sig870F.rangeId,
        previousResource: var_core_value_sigB683.resource,
        nextResource: var_core_value_sigF7EF,
        cursorOffset: var_core_value_sigEEDB.endIndex + 1,
        externalMutations: var_core_value_sig6A78
      });
    }
  },
  G = {
    id: "docs-formula.command.set-number-format",
    type: var_core_value_sig1F18.COMMAND,
    handler: (var_core_value_sig27F9, var_core_value_sig393E) => {
      if (!(var_core_value_sig393E != null && var_core_value_sig393E.rangeId)) return false;
      let var_core_value_sigB609 = q(var_core_value_sig27F9, var_core_value_sig393E.unitId, ""),
        var_core_value_sig390D = var_core_value_sigB609 == null ? undefined : var_core_value_sigB609.model["getFormula"](var_core_value_sigB609.unitId, var_core_value_sig393E.rangeId),
        var_core_value_sigC928 = var_core_value_sigB609 ? T(var_core_value_sigB609.documentData["body"], var_core_value_sig393E.rangeId) : undefined;
      if (!var_core_value_sigB609 || !var_core_value_sig390D || !var_core_value_sigC928) return false;
      let var_core_value_sig39B7 = Ct(var_core_value_sigB609.resource);
      return var_core_value_sig39B7.formulas[var_core_value_sig393E.rangeId] = {
        ...var_core_value_sig390D,
        ...(var_core_value_sig393E.numberFormat ? {
          numberFormat: var_core_value_sig393E.numberFormat
        } : null)
      }, var_core_value_sig393E.numberFormat || delete var_core_value_sig39B7.formulas[var_core_value_sig393E.rangeId].numberFormat, J({
        accessor: var_core_value_sig27F9,
        document: var_core_value_sigB609.document,
        unitId: var_core_value_sigB609.unitId,
        trigger: G.id,
        rangeId: var_core_value_sig393E.rangeId,
        previousResource: var_core_value_sigB609.resource,
        nextResource: var_core_value_sig39B7,
        cursorOffset: var_core_value_sigC928.endIndex + 1,
        externalMutations: {}
      });
    }
  },
  K = {
    id: "docs-formula.command.remove",
    type: var_core_value_sig1F18.COMMAND,
    handler: (var_core_value_sig18E01, var_core_value_sigE161) => ut(var_core_value_sig18E01, var_core_value_sigE161, "", K.id)
  },
  ct = {
    id: "docs-formula.command.replace-with-text",
    type: var_core_value_sig1F18.COMMAND,
    handler: (var_core_value_sigBDEE, var_core_value_sig1F40) => ut(var_core_value_sigBDEE, var_core_value_sig1F40, (var_core_value_sig1F40 == null ? undefined : var_core_value_sig1F40.text) ?? "", ct.id)
  },
  lt = {
    id: "docs-formula.command.convert-to-text",
    type: var_core_value_sig1F18.COMMAND,
    handler: (var_core_value_sig3FC7, var_core_value_sig1E1B) => {
      if (!(var_core_value_sig1E1B != null && var_core_value_sig1E1B.rangeId)) return false;
      let var_core_value_sig3B10 = q(var_core_value_sig3FC7, var_core_value_sig1E1B.unitId, "");
      if (!var_core_value_sig3B10) return false;
      let var_core_value_sig89E6 = var_core_value_sig3FC7.get(L).getResult({
        unitId: var_core_value_sig3B10.unitId,
        rangeId: var_core_value_sig1E1B.rangeId
      });
      return var_core_value_sig89E6 ? ut(var_core_value_sig3FC7, var_core_value_sig1E1B, var_core_value_sig89E6.text, lt.id) : false;
    }
  };
function ut(var_core_value_sig4743, var_core_value_sigEB6A, var_core_value_sig3D46, var_core_value_sigCC93) {
  if (!(var_core_value_sigEB6A != null && var_core_value_sigEB6A.rangeId)) return false;
  let var_core_value_sig5964 = q(var_core_value_sig4743, var_core_value_sigEB6A.unitId, "");
  if (!var_core_value_sig5964) return false;
  let var_core_value_sig808B = Be({
    documentData: var_core_value_sig5964.documentData,
    resource: var_core_value_sig5964.resource,
    rangeId: var_core_value_sigEB6A.rangeId,
    text: var_core_value_sig3D46
  });
  return var_core_value_sig808B ? J({
    accessor: var_core_value_sig4743,
    document: var_core_value_sig5964.document,
    unitId: var_core_value_sig5964.unitId,
    trigger: var_core_value_sigCC93,
    rangeId: var_core_value_sigEB6A.rangeId,
    previousResource: var_core_value_sig5964.resource,
    nextResource: var_core_value_sig808B.nextResource,
    previousDocumentData: var_core_value_sig5964.documentData,
    nextDocumentData: var_core_value_sig808B.nextDocumentData,
    cursorOffset: var_core_value_sig808B.cursorOffset,
    externalMutations: {}
  }) : false;
}
function q(var_core_value_sig2A26, var_core_value_sig1179, var_core_value_sigEA92) {
  if (var_core_value_sigEA92) return null;
  let var_core_value_sig8FD9 = var_core_value_sig2A26.get(var_core_value_sig6AAD),
    var_core_value_sig1AE5 = (var_core_value_sig1179 ? var_core_value_sig8FD9.getUnit(var_core_value_sig1179, var_core_value_sig3D6F.UNIVER_DOC) : var_core_value_sig8FD9.getCurrentUnitOfType(var_core_value_sig3D6F.UNIVER_DOC)) ?? null;
  if (!var_core_value_sig1AE5) return null;
  let var_core_value_sig7100 = var_core_value_sig1AE5.getSnapshot(),
    var_core_value_sigA19A = var_core_value_sig7100.body;
  if (var_core_value_sig7100.disabled || !var_core_value_sigA19A) return null;
  let var_core_value_sigD3F5 = var_core_value_sig2A26.get(P);
  return var_core_value_sigD3F5.getLoadError(var_core_value_sig1AE5.getUnitId()) ? null : {
    document: var_core_value_sig1AE5,
    body: var_core_value_sigA19A,
    documentData: var_core_value_sig7100,
    model: var_core_value_sigD3F5,
    resource: var_core_value_sigD3F5.getResource(var_core_value_sig1AE5.getUnitId()) ?? b(),
    unitId: var_core_value_sig1AE5.getUnitId()
  };
}
function dt(var_core_value_sig3082, var_core_value_sigF5D1) {
  var var_core_value_sig8775;
  return (var_core_value_sig8775 = var_core_value_sig3082.get(var_core_value_sigAC51).getTextRanges({
    subUnitId: var_core_value_sigF5D1,
    unitId: var_core_value_sigF5D1
  })) == null ? undefined : var_core_value_sig8775[0];
}
function ft(var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sig90C0) {
  if ((var_core_value_sig481B == null ? undefined : var_core_value_sig481B.type) === "paragraph") {
    var var_core_value_sigF1B2;
    let var_core_value_sig3E71 = ((var_core_value_sigF1B2 = var_core_value_sig13D7.paragraphs) == null ? undefined : var_core_value_sigF1B2.filter(var_core_value_sig1A0F => var_core_value_sig1A0F.paragraphId === var_core_value_sig481B.paragraphId)) ?? [];
    if (var_core_value_sig3E71.length !== 1) return null;
    let var_core_value_sig01B3 = var_core_value_sig3E71[0],
      var_core_value_sig7442 = var_core_value_sig48EA(var_core_value_sig13D7, var_core_value_sig01B3),
      var_core_value_sigDF87 = var_core_value_sig01B3.startIndex - var_core_value_sig7442,
      var_core_value_sig9EE0 = var_core_value_sig481B.position === "end" ? var_core_value_sigDF87 : var_core_value_sig481B.position;
    if (!Number.isInteger(var_core_value_sig9EE0) || var_core_value_sig9EE0 < 0 || var_core_value_sig9EE0 > var_core_value_sigDF87) return null;
    let var_core_value_sigF0511 = var_core_value_sig7442 + var_core_value_sig9EE0;
    return {
      startOffset: var_core_value_sigF0511,
      endOffset: var_core_value_sigF0511
    };
  }
  if ((var_core_value_sig481B == null ? undefined : var_core_value_sig481B.type) === "range") return !Number.isInteger(var_core_value_sig481B.startOffset) || !Number.isInteger(var_core_value_sig481B.endOffset) ? null : {
    startOffset: Math.min(var_core_value_sig481B.startOffset, var_core_value_sig481B.endOffset),
    endOffset: Math.max(var_core_value_sig481B.startOffset, var_core_value_sig481B.endOffset)
  };
  let var_core_value_sigC2BB = (var_core_value_sig481B == null ? undefined : var_core_value_sig481B.type) === "selection" ? var_core_value_sig481B.selection : var_core_value_sig90C0;
  return !var_core_value_sigC2BB || var_core_value_sigC2BB.segmentId ? null : {
    startOffset: Math.min(var_core_value_sigC2BB.startOffset, var_core_value_sigC2BB.endOffset),
    endOffset: Math.max(var_core_value_sigC2BB.startOffset, var_core_value_sigC2BB.endOffset)
  };
}
function pt(var_core_value_sigD9DB, var_core_value_sigA363, var_core_value_sigFBA5, var_core_value_sigAC47) {
  let var_core_value_sigA06F = var_core_value_sigD9DB.get(var_core_value_sig2CD3),
    var_core_value_sig770E = var_core_value_sigFBA5.startsWith("=") ? var_core_value_sigFBA5.slice(1) : var_core_value_sigFBA5,
    var_core_value_sig4654 = var_core_value_sigA06F.sequenceNodesBuilder(var_core_value_sig770E);
  if (!var_core_value_sig4654) return null;
  let var_core_value_sigB26B = var_core_value_sigD9DB.get(var_core_value_sigCB88),
    var_core_value_sig019B = var_core_value_sig7E56({
      qualifiers: var_core_value_sigEDC6(var_core_value_sig4654),
      explicitReferences: var_core_value_sigAC47 ?? [],
      resolveBinding: var_core_value_sig0B45 => var_core_value_sigB26B.resolveBinding(var_core_value_sigA363, var_core_value_sig0B45)
    });
  return var_core_value_sig019B.status === "resolved" ? var_core_value_sig019B.references : null;
}
function mt(var_core_value_sigC6BC, var_core_value_sig8EC2, var_core_value_sigA8C3) {
  var var_core_value_sig5276;
  let var_core_value_sig031B = var_core_value_sig336C(6);
  for (; var_core_value_sigC6BC != null && (var_core_value_sig5276 = var_core_value_sigC6BC.customRanges) != null && var_core_value_sig5276.some(var_core_value_sigFBA4 => var_core_value_sigFBA4.rangeId === var_core_value_sig031B) || var_core_value_sig8EC2.getFormula(var_core_value_sigA8C3, var_core_value_sig031B);) var_core_value_sig031B = var_core_value_sig336C(6);
  return var_core_value_sig031B;
}
function ht(var_core_value_sig9DC0) {
  try {
    return Re(var_core_value_sig9DC0);
  } catch (var_core_value_sig36F8) {
    if (var_core_value_sig36F8 instanceof C) return null;
    throw var_core_value_sig36F8;
  }
}
function gt(var_core_value_sig95F0) {
  let var_core_value_sig9CCB = var_core_value_sig95F0.previousDocumentData && var_core_value_sig95F0.nextDocumentData ? vt(var_core_value_sig95F0.document, var_core_value_sig95F0.unitId, var_core_value_sig95F0.previousDocumentData, var_core_value_sig95F0.nextDocumentData, var_core_value_sig95F0.cursorOffset, var_core_value_sig95F0.trigger) : null;
  return var_core_value_sig95F0.previousDocumentData && var_core_value_sig95F0.nextDocumentData && !var_core_value_sig9CCB ? null : {
    documentRedo: var_core_value_sig9CCB,
    resourceRedo: {
      id: V.id,
      params: {
        unitId: var_core_value_sig95F0.unitId,
        resource: var_core_value_sig95F0.nextResource
      }
    },
    resourceUndo: {
      id: V.id,
      params: {
        unitId: var_core_value_sig95F0.unitId,
        resource: var_core_value_sig95F0.previousResource
      }
    }
  };
}
function _t(var_core_value_sigE718, var_core_value_sigAEC8, var_core_value_sigB977, var_core_value_sig2949) {
  var_core_value_sig2949.pushUndoRedo({
    id: var_core_value_sigE718.trigger + ":" + var_core_value_sigE718.rangeId,
    unitID: var_core_value_sigE718.unitId,
    redoMutations: [...(var_core_value_sigE718.externalMutations["redoMutation"] ? [var_core_value_sigE718.externalMutations["redoMutation"]] : []), ...(var_core_value_sigAEC8.documentRedo ? [var_core_value_sigAEC8.documentRedo] : []), var_core_value_sigAEC8.resourceRedo],
    undoMutations: [var_core_value_sigAEC8.resourceUndo, ...(var_core_value_sigB977 ? [var_core_value_sigB977] : []), ...(var_core_value_sigE718.externalMutations["undoMutation"] ? [var_core_value_sigE718.externalMutations["undoMutation"]] : [])]
  });
}
function J(var_core_value_sig308A) {
  let var_core_value_sig528D = var_core_value_sig308A.accessor["get"](var_core_value_sigE6D0),
    var_core_value_sigA309 = var_core_value_sig308A.accessor["get"](var_core_value_sig7BB5),
    var_core_value_sig9E20 = var_core_value_sig308A.accessor["get"](var_core_value_sigAC51),
    var_core_value_sig26BB = gt(var_core_value_sig308A);
  if (!var_core_value_sig26BB) return false;
  let var_core_value_sig19B4 = false,
    var_core_value_sig218A = null,
    var_core_value_sig14CB = false;
  try {
    if (var_core_value_sig308A.externalMutations["redoMutation"]) {
      if (!var_core_value_sig528D.syncExecuteCommand(var_core_value_sig308A.externalMutations["redoMutation"].id, var_core_value_sig308A.externalMutations["redoMutation"].params)) return false;
      var_core_value_sig19B4 = true;
    }
    if (var_core_value_sig26BB.documentRedo) {
      let var_core_value_sig4383 = var_core_value_sig528D.syncExecuteCommand(var_core_value_sig26BB.documentRedo["id"], var_core_value_sig26BB.documentRedo["params"]);
      if (!var_core_value_sig4383) return bt(var_core_value_sig528D, var_core_value_sig308A.externalMutations, var_core_value_sig19B4), false;
      var_core_value_sig218A = {
        id: var_core_value_sigCAF7.id,
        params: {
          ...var_core_value_sig4383,
          noHistory: true,
          noNeedSetTextRange: true,
          segmentId: ""
        }
      };
    }
    if (!var_core_value_sig528D.syncExecuteCommand(var_core_value_sig26BB.resourceRedo["id"], var_core_value_sig26BB.resourceRedo["params"])) return yt(var_core_value_sig528D, var_core_value_sig218A), bt(var_core_value_sig528D, var_core_value_sig308A.externalMutations, var_core_value_sig19B4), false;
    var_core_value_sig14CB = true, _t(var_core_value_sig308A, var_core_value_sig26BB, var_core_value_sig218A, var_core_value_sigA309);
  } catch (var_core_value_sig03E1) {
    throw var_core_value_sig14CB && var_core_value_sig528D.syncExecuteCommand(var_core_value_sig26BB.resourceUndo["id"], var_core_value_sig26BB.resourceUndo["params"]), yt(var_core_value_sig528D, var_core_value_sig218A), bt(var_core_value_sig528D, var_core_value_sig308A.externalMutations, var_core_value_sig19B4), var_core_value_sig03E1;
  }
  return var_core_value_sig9E20.replaceDocRanges([{
    startOffset: var_core_value_sig308A.cursorOffset,
    endOffset: var_core_value_sig308A.cursorOffset,
    segmentId: ""
  }], {
    unitId: var_core_value_sig308A.unitId,
    subUnitId: var_core_value_sig308A.unitId
  }, false, {
    [var_core_value_sig279C]: true
  }), true;
}
function vt(var_core_value_sigFDEE, var_core_value_sigA676, var_core_value_sigC27E, var_core_value_sigA70D, var_core_value_sigCE10, var_core_value_sigA386) {
  let var_core_value_sigCD82 = xt(var_core_value_sigC27E, var_core_value_sigA70D, var_core_value_sig5E16(var_core_value_sigFDEE, ""));
  return var_core_value_sigCD82 ? {
    id: var_core_value_sigCAF7.id,
    params: {
      unitId: var_core_value_sigA676,
      actions: var_core_value_sigCD82,
      segmentId: "",
      textRanges: [{
        startOffset: var_core_value_sigCE10,
        endOffset: var_core_value_sigCE10,
        collapsed: true,
        segmentId: ""
      }],
      isEditing: false,
      noHistory: true,
      noNeedSetTextRange: true,
      trigger: var_core_value_sigA386
    }
  } : null;
}
function yt(var_core_value_sig44DD, var_core_value_sig96FA) {
  var_core_value_sig96FA && var_core_value_sig44DD.syncExecuteCommand(var_core_value_sig96FA.id, var_core_value_sig96FA.params);
}
function bt(var_core_value_sigAB68, var_core_value_sig040A, var_core_value_sig2AE0) {
  var_core_value_sig2AE0 && var_core_value_sig040A.undoMutation && var_core_value_sigAB68.syncExecuteCommand(var_core_value_sig040A.undoMutation["id"], var_core_value_sig040A.undoMutation["params"]);
}
function xt(var_core_value_sigC349, var_core_value_sig9D96, var_core_value_sig2776) {
  let var_core_value_sig6FB2 = var_core_value_sigC349.body,
    var_core_value_sigEB43 = var_core_value_sig9D96.body,
    var_core_value_sig4186 = St(var_core_value_sig6FB2 == null ? undefined : var_core_value_sig6FB2.dataStream, var_core_value_sigEB43 == null ? undefined : var_core_value_sigEB43.dataStream);
  if (!var_core_value_sig4186 || !var_core_value_sigEB43) return null;
  let var_core_value_sigF963 = new var_core_value_sigBE07();
  return var_core_value_sigF963.retain(var_core_value_sig4186.start), var_core_value_sig4186.insertLength > 0 && var_core_value_sigF963.insert(var_core_value_sig4186.insertLength, var_core_value_sig6E68(var_core_value_sigEB43, var_core_value_sig4186.start, var_core_value_sig4186.start + var_core_value_sig4186.insertLength, false)), var_core_value_sig4186.deleteLength > 0 && var_core_value_sigF963.delete(var_core_value_sig4186.deleteLength), var_core_value_sig18E0.getInstance().editOp(var_core_value_sigF963.serialize(), var_core_value_sig2776);
}
function St(var_core_value_sigB608, var_core_value_sigF866) {
  if (var_core_value_sigB608 == null || var_core_value_sigF866 == null || var_core_value_sigB608 === var_core_value_sigF866) return null;
  let var_core_value_sig5EFB = 0;
  for (; var_core_value_sig5EFB < var_core_value_sigB608.length && var_core_value_sig5EFB < var_core_value_sigF866.length && var_core_value_sigB608[var_core_value_sig5EFB] === var_core_value_sigF866[var_core_value_sig5EFB];) var_core_value_sig5EFB += 1;
  let var_core_value_sig3A85 = var_core_value_sigB608.length,
    var_core_value_sig2682 = var_core_value_sigF866.length;
  for (; var_core_value_sig3A85 > var_core_value_sig5EFB && var_core_value_sig2682 > var_core_value_sig5EFB && var_core_value_sigB608[var_core_value_sig3A85 - 1] === var_core_value_sigF866[var_core_value_sig2682 - 1];) --var_core_value_sig3A85, --var_core_value_sig2682;
  return {
    start: var_core_value_sig5EFB,
    deleteLength: var_core_value_sig3A85 - var_core_value_sig5EFB,
    insertLength: var_core_value_sig2682 - var_core_value_sig5EFB
  };
}
function Ct(var_core_value_sig4BB5) {
  return {
    schemaVersion: 1,
    formulas: Object.fromEntries(Object.entries(var_core_value_sig4BB5.formulas).map(([var_core_value_sigBB57, var_core_value_sig7C4A]) => [var_core_value_sigBB57, {
      ...var_core_value_sig7C4A,
      ...(var_core_value_sig7C4A.numberFormat ? {
        numberFormat: {
          ...var_core_value_sig7C4A.numberFormat
        }
      } : null),
      ...(var_core_value_sig7C4A.lastValue ? {
        lastValue: {
          ...var_core_value_sig7C4A.lastValue
        }
      } : null)
    }]))
  };
}
let Y = class extends var_core_value_sig10AA {
  constructor(var_core_value_sigE799, var_core_value_sigB601, var_core_value_sig8B71, var_core_value_sigAEFB) {
    super(), this._instanceService = var_core_value_sigE799, this._commandService = var_core_value_sigB601, this._model = var_core_value_sig8B71, this._service = var_core_value_sigAEFB, N(this, "_pendingUnitIds", new Set()), N(this, "_syncScheduled", false), N(this, "_isDisposed", false), this._instanceService["getAllUnitsForType"](var_core_value_sig3D6F.UNIVER_DOC).forEach(var_core_value_sig186C => this._service["syncUnit"](var_core_value_sig186C)), this.disposeWithMe(this._model["change$"].subscribe(({
      unitId: var_core_value_sigD955
    }) => this._syncUnit(var_core_value_sigD955))), this.disposeWithMe(this._instanceService["unitAdded$"].subscribe(({
      unit: var_core_value_sig48BD
    }) => {
      var_core_value_sig48BD.type === var_core_value_sig3D6F.UNIVER_DOC && this._queueSync(var_core_value_sig48BD.getUnitId());
    })), this.disposeWithMe(this._instanceService["unitDisposed$"].subscribe(var_core_value_sig429F => {
      this._service["unregisterUnit"](var_core_value_sig429F.getUnitId());
    })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sigF62A => {
      if (var_core_value_sigF62A.id === var_core_value_sigCAF7.id && wt(var_core_value_sigF62A.params)) {
        let var_core_value_sigBC46 = var_core_value_sigF62A.params;
        var_core_value_sigBC46.segmentId || this._syncUnit(var_core_value_sigBC46.unitId);
      }
    }));
  }
  dispose() {
    this._isDisposed = true, super.dispose();
  }
  _queueSync(var_core_value_sig826B) {
    this._pendingUnitIds["add"](var_core_value_sig826B), !this._syncScheduled && (this._syncScheduled = true, queueMicrotask(() => {
      if (this._syncScheduled = false, this._isDisposed) return;
      let var_core_value_sig8178 = Array.from(this._pendingUnitIds);
      this._pendingUnitIds["clear"](), var_core_value_sig8178.forEach(var_core_value_sig3D7D => this._syncUnit(var_core_value_sig3D7D));
    }));
  }
  _syncUnit(var_core_value_sigCF89) {
    let var_core_value_sig00CB = this._instanceService["getUnit"](var_core_value_sigCF89, var_core_value_sig3D6F.UNIVER_DOC);
    var_core_value_sig00CB && this._service["syncUnit"](var_core_value_sig00CB);
  }
};
Y = I([F(0, var_core_value_sig6AAD), F(1, var_core_value_sigE6D0), F(2, var_core_value_sig1157(P)), F(3, var_core_value_sig1157(L))], Y);
function wt(var_core_value_sig6709) {
  return typeof var_core_value_sig6709 == "object" && !!var_core_value_sig6709 && "unitId" in var_core_value_sig6709 && typeof var_core_value_sig6709.unitId == "string" && (!("segmentId" in var_core_value_sig6709) || var_core_value_sig6709.segmentId === undefined || typeof var_core_value_sig6709.segmentId == "string");
}
let X = class extends var_core_value_sig10AA {
  constructor(var_core_value_sig77EE, var_core_value_sig9F76) {
    super(), this._resourceManagerService = var_core_value_sig77EE, this._docFormulaModel = var_core_value_sig9F76, this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: y,
      businesses: [var_core_value_sig3D6F.UNIVER_DOC],
      toJson: var_core_value_sigE9ED => JSON.stringify(this._docFormulaModel["serialize"](var_core_value_sigE9ED)),
      parseJson: var_core_value_sigB577 => JSON.parse(var_core_value_sigB577),
      onLoad: (var_core_value_sig9572, var_core_value_sigD873) => {
        this._docFormulaModel["load"](var_core_value_sig9572, var_core_value_sigD873);
      },
      onUnLoad: var_core_value_sigA12B => this._docFormulaModel["removeUnit"](var_core_value_sigA12B)
    }));
  }
};
X = I([F(0, var_core_value_sig00BE), F(1, var_core_value_sig1157(P))], X);
var Tt = "@univerjs-pro/docs-formula",
  Et = "1.0.0-insiders.20260907-70fc579";
const Dt = {};
let Z = class extends var_core_value_sig10AA {
  constructor(var_core_value_sigB008, var_core_value_sig8721, var_core_value_sig08BA) {
    super(), this._univerInstanceService = var_core_value_sigB008, this._formulaService = var_core_value_sig8721, this.disposeWithMe(var_core_value_sig08BA.register({
      resolve: (var_core_value_sigF230, var_core_value_sig09B8) => {
        var var_core_value_sig6F91;
        return ((var_core_value_sig6F91 = var_core_value_sig09B8.customRanges) == null ? undefined : var_core_value_sig6F91.filter(w).map(var_core_value_sig27E5 => ({
          startOffset: var_core_value_sig27E5.startIndex,
          endOffset: var_core_value_sig27E5.endIndex + 1,
          text: this.resolveFormula(var_core_value_sigF230, var_core_value_sig27E5.rangeId)
        }))) ?? [];
      }
    })), this.disposeWithMe(this._formulaService["presentationChanged$"].subscribe(({
      unitId: var_core_value_sigF9C7
    }) => {
      var_core_value_sig08BA.notifyTextChanged(var_core_value_sigF9C7);
    }));
  }
  resolveFormula(var_core_value_sigDBB5, var_core_value_sigCFAC) {
    var var_core_value_sig237B;
    return ((var_core_value_sig237B = this._formulaService["getResult"]({
      unitId: var_core_value_sigDBB5,
      rangeId: var_core_value_sigCFAC
    })) == null ? undefined : var_core_value_sig237B.text) ?? "";
  }
  resolveText(var_core_value_sigFEAB, var_core_value_sigE347, var_core_value_sig3C5B) {
    var var_core_value_sig200B;
    let var_core_value_sig3863 = this._univerInstanceService["getUnit"](var_core_value_sigFEAB, var_core_value_sig3D6F.UNIVER_DOC),
      var_core_value_sigC97C = var_core_value_sig3863 == null ? undefined : var_core_value_sig3863.getBody();
    if (!var_core_value_sigC97C) return "";
    let var_core_value_sigC4B1 = var_core_value_sigC97C.dataStream["slice"](var_core_value_sigE347, var_core_value_sig3C5B),
      var_core_value_sig1BD9 = ((var_core_value_sig200B = var_core_value_sigC97C.customRanges) == null ? undefined : var_core_value_sig200B.filter(var_core_value_sig8895 => w(var_core_value_sig8895) && var_core_value_sig8895.startIndex >= var_core_value_sigE347 && var_core_value_sig8895.endIndex < var_core_value_sig3C5B).sort((var_core_value_sigC80B, var_core_value_sig284F) => var_core_value_sig284F.startIndex - var_core_value_sigC80B.startIndex)) ?? [];
    for (let var_core_value_sigE154 of var_core_value_sig1BD9) {
      let var_core_value_sig8061 = var_core_value_sigE154.startIndex - var_core_value_sigE347,
        var_core_value_sig4D4C = var_core_value_sigE154.endIndex - var_core_value_sigE347 + 1;
      var_core_value_sigC4B1 = "" + var_core_value_sigC4B1.slice(0, var_core_value_sig8061) + this.resolveFormula(var_core_value_sigFEAB, var_core_value_sigE154.rangeId) + var_core_value_sigC4B1.slice(var_core_value_sig4D4C);
    }
    return var_core_value_sigC4B1;
  }
  degradeDocumentData(var_core_value_sigE43E) {
    return Ot(var_core_value_sigE43E);
  }
  degradeBody(var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigE503 = {}) {
    var var_core_value_sig48DD;
    return Ve({
      id: var_core_value_sigA937,
      body: var_core_value_sigCAD5,
      documentStyle: {}
    }, (((var_core_value_sig48DD = var_core_value_sigCAD5.customRanges) == null ? undefined : var_core_value_sig48DD.filter(w)) ?? []).map(var_core_value_sig4632 => ({
      rangeId: var_core_value_sig4632.rangeId,
      text: var_core_value_sigE503[var_core_value_sig4632.rangeId] ?? this.resolveFormula(var_core_value_sigA937, var_core_value_sig4632.rangeId)
    }))).body ?? {
      dataStream: ""
    };
  }
};
Z = I([F(0, var_core_value_sig6AAD), F(1, var_core_value_sig1157(L)), F(2, var_core_value_sig1157(var_core_value_sig8986))], Z);
function Ot(var_core_value_sig52CA) {
  var var_core_value_sigC030, var_core_value_sig88F6;
  let var_core_value_sig37DB = kt(var_core_value_sig52CA),
    var_core_value_sig5542 = Ve(var_core_value_sig52CA, (((var_core_value_sigC030 = var_core_value_sig52CA.body) == null || (var_core_value_sigC030 = var_core_value_sigC030.customRanges) == null ? undefined : var_core_value_sigC030.filter(w)) ?? []).map(var_core_value_sig5E6A => ({
      rangeId: var_core_value_sig5E6A.rangeId,
      text: At(var_core_value_sig37DB == null ? undefined : var_core_value_sig37DB.formulas[var_core_value_sig5E6A.rangeId])
    })));
  return var_core_value_sig5542.resources = (var_core_value_sig88F6 = var_core_value_sig5542.resources) == null ? undefined : var_core_value_sig88F6.filter(var_core_value_sigB7FC => var_core_value_sigB7FC.name !== y), var_core_value_sig5542;
}
function kt(var_core_value_sigE0A9) {
  var var_core_value_sigA73E;
  let var_core_value_sig7620 = (var_core_value_sigA73E = var_core_value_sigE0A9.resources) == null || (var_core_value_sigA73E = var_core_value_sigA73E.find(var_core_value_sig9CD9 => var_core_value_sig9CD9.name === "DOC_FORMULA_PLUGIN")) == null ? undefined : var_core_value_sigA73E.data;
  if (var_core_value_sig7620) try {
    let var_core_value_sigFD0C = JSON.parse(var_core_value_sig7620);
    return x(var_core_value_sigFD0C) ? var_core_value_sigFD0C : undefined;
  } catch {
    return;
  }
}
function At(var_core_value_sigB9FC) {
  return var_core_value_sigB9FC ? var_core_value_sig6BD9({
    lastValue: var_core_value_sigB9FC.lastValue,
    numberFormat: var_core_value_sigB9FC.numberFormat
  }).text : "";
}
let Q = class extends var_core_value_sig10AA {
  constructor(var_core_value_sig849B, var_core_value_sig5F1A, var_core_value_sigB455) {
    super(), this._formulaService = var_core_value_sig849B, this._cacheEligibilityService = var_core_value_sig5F1A, this.disposeWithMe(var_core_value_sigB455.registerProvider(this));
  }
  collectMutations(var_core_value_sig5241) {
    let var_core_value_sigC6E5 = new Map();
    for (let var_core_value_sig12F2 of this._formulaService["getRegisteredFormulas"]()) {
      var var_core_value_sigCEFB;
      if (!this._cacheEligibilityService["assess"](var_core_value_sig12F2.config["formula"], var_core_value_sig12F2.liveResult).eligible) continue;
      let var_core_value_sigC9E0 = var_core_value_sig611A(var_core_value_sig12F2.liveResult),
        var_core_value_sig76BA = var_core_value_sigC9E0 ? var_core_value_sig4161(var_core_value_sigC9E0) : null;
      if (!var_core_value_sig76BA || jt(var_core_value_sig12F2.config["lastValue"], var_core_value_sig76BA)) continue;
      let var_core_value_sigFBFA = var_core_value_sigC6E5.get(var_core_value_sig12F2.identity["unitId"]) ?? [];
      var_core_value_sigFBFA.push({
        rangeId: var_core_value_sig12F2.identity["rangeId"],
        expectedFormula: var_core_value_sig12F2.config["formula"],
        expectedNumberFormat: (var_core_value_sigCEFB = var_core_value_sig12F2.config["numberFormat"]) == null ? undefined : var_core_value_sigCEFB.pattern,
        expectedReferenceRevision: var_core_value_sig12F2.referenceRevision,
        lastValue: var_core_value_sig76BA
      }), var_core_value_sigC6E5.set(var_core_value_sig12F2.identity["unitId"], var_core_value_sigFBFA);
    }
    return Array.from(var_core_value_sigC6E5, ([var_core_value_sig2259, var_core_value_sig9E2F]) => ({
      id: H.id,
      params: {
        unitId: var_core_value_sig2259,
        updates: var_core_value_sig9E2F
      }
    }));
  }
};
Q = I([F(0, var_core_value_sig1157(L)), F(1, var_core_value_sig1157(var_core_value_sig45F0)), F(2, var_core_value_sig1157(var_core_value_sigBC91))], Q);
function jt(var_core_value_sig5055, var_core_value_sig3801) {
  return (var_core_value_sig5055 == null ? undefined : var_core_value_sig5055.v) === var_core_value_sig3801.v && (var_core_value_sig5055 == null ? undefined : var_core_value_sig5055.t) === var_core_value_sig3801.t && (var_core_value_sig5055 == null ? undefined : var_core_value_sig5055.pattern) === var_core_value_sig3801.pattern;
}
let $ = class extends var_core_value_sig0428 {
  constructor(var_core_value_sig1537 = Dt, var_core_value_sigE4C6, var_core_value_sig4313, var_core_value_sigFC87) {
    super(), this._config = var_core_value_sig1537, this._injector = var_core_value_sigE4C6, this._commandService = var_core_value_sig4313, this._configService = var_core_value_sigFC87;
    let {
      ...var_core_value_sig156F
    } = var_core_value_sig09F3({}, Dt, this._config);
    this._configService["setConfig"]("docs-formula.config", var_core_value_sig156F);
  }
  onStarting() {
    this._injector["add"]([P]), this._injector["add"]([L]), this._injector["add"]([X]), this._injector["add"]([Y]), this._injector["add"]([Q]), this._injector["add"]([Z]), var_core_value_sig6D19(this._injector, [[P], [X], [Y], [Q], [Z]]), [ot, st, V, H, U, W, G, K, ct, lt].forEach(var_core_value_sigD082 => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigD082)));
  }
};
N($, "pluginName", y), N($, "packageName", Tt), N($, "version", Et), N($, "type", var_core_value_sig3D6F.UNIVER_DOC), $ = I([var_core_value_sigA0A5(var_core_value_sig7EEA, var_core_value_sig8D65, var_core_value_sigED1C), F(1, var_core_value_sig1157(var_core_value_sigA694)), F(2, var_core_value_sigE6D0), F(3, var_core_value_sig8E91)], $);
export { lt as ConvertDocFormulaToTextCommand, Me as DOC_FORMULA_CUSTOM_RANGE_KIND, Ne as DOC_FORMULA_OBJECT_REPLACEMENT, y as DOC_FORMULA_PLUGIN, je as DOC_FORMULA_SCHEMA_VERSION, Z as DocFormulaDisplayTextService, Y as DocFormulaLifecycleController, P as DocFormulaModel, X as DocFormulaResourceController, it as DocFormulaResultStatus, L as DocFormulaService, U as InsertDocFormulaCommand, C as InvalidDocFormulaInsertRangeError, K as RemoveDocFormulaCommand, st as RemoveDocFormulaMutation, ct as ReplaceDocFormulaWithTextCommand, H as SetDocFormulaLastValuesMutation, ot as SetDocFormulaMutation, G as SetDocFormulaNumberFormatCommand, V as SetDocFormulaResourceMutation, $ as UniverDocsFormulaPlugin, W as UpdateDocFormulaCommand, He as assertSafeDocFormulaInsertRange, Re as buildInsertDocFormulaActions, Be as buildRemoveDocFormulaActions, ze as buildUpdateDocFormulaActions, b as createEmptyDocFormulaResource, Ot as degradeDocFormulaDocumentData, T as findDocFormulaRange, Pe as isDocFormulaConfig, w as isDocFormulaRange, x as isDocFormulaResource, Fe as isFormulaLastValue };
