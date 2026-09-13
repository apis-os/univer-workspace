import { ColumnLayoutType as var_core_value_sig58DB, ColumnResponsiveType as var_core_value_sig4840, CommandType as var_core_value_sigB76D, DataStreamTreeTokenType as var_core_value_sig1015, DependentOn as var_core_value_sig6223, DocumentFlavor as var_core_value_sigC6B6, ICommandService as var_core_value_sig498A, IConfigService as var_core_value_sigEF45, IUniverInstanceService as var_core_value_sig36FE, Inject as var_core_value_sig3AF5, Injector as var_core_value_sig14E6, JSONX as var_core_value_sig8690, ObjectRelativeFromH as var_core_value_sigDF29, ObjectRelativeFromV as var_core_value_sigC0F8, Plugin as var_core_value_sig3C75, TableAlignmentType as var_core_value_sig992D, TableRowHeightRule as var_core_value_sigE4E4, TableSizeType as var_core_value_sigA4B0, TableTextWrapType as var_core_value_sig5F50, TextX as var_core_value_sig4494, Tools as var_core_value_sigFFAF, UniverInstanceType as var_core_value_sig478B, containsInteriorInsertionOffset as var_core_value_sig1E21, createParagraphId as var_core_value_sig9DBF, createSectionId as var_core_value_sig36CC, generateRandomId as var_core_value_sigA568, getBlockRangeInterval as var_core_value_sigD22D, getColumnGroupRangeInterval as var_core_value_sig85D5, getTableRangeInterval as var_core_value_sig5D2E, merge as var_core_value_sig7221, shiftExclusiveRangeOnInsert as var_core_value_sig0A5A, shiftInclusiveRangeOnInsert as var_core_value_sigE6D6 } from "@univerjs/core";
import { DocSelectionManagerService as var_core_value_sig8507, RichTextEditingMutation as var_core_value_sig8A7F, UniverDocsPlugin as var_core_value_sig9E81, consumeContentInsertRange as var_core_value_sig8295 } from "@univerjs/docs";
import { getDocsTableRenderViewport as var_core_value_sigA975 } from "@univerjs/engine-render";
import { UniverLicensePlugin as var_core_value_sig1263 } from "@univerjs-pro/license";
const ue = 5;
let de = function (var_core_value_sig6201) {
  return var_core_value_sig6201.LEFT = "left", var_core_value_sig6201.RIGHT = "right", var_core_value_sig6201;
}({});
const O = {
  COLUMN_GROUP_START: "\x12",
  COLUMN_START: "\x13",
  COLUMN_END: "\x14",
  COLUMN_GROUP_END: "\x15"
};
function k(var_core_value_sig5151, var_core_value_sigB542) {
  var var_core_value_sigBB6C, var_core_value_sigE2BF;
  let var_core_value_sigB8C7 = (var_core_value_sigBB6C = var_core_value_sig5151.body) == null || (var_core_value_sigBB6C = var_core_value_sigBB6C.columnGroups) == null ? undefined : var_core_value_sigBB6C.find(var_core_value_sig8889 => var_core_value_sig8889.columnGroupId === var_core_value_sigB542),
    var_core_value_sigA56E = (var_core_value_sigE2BF = var_core_value_sig5151.body) == null ? undefined : var_core_value_sigE2BF.dataStream;
  if (!var_core_value_sigB8C7 || !var_core_value_sigA56E || var_core_value_sigA56E[var_core_value_sigB8C7.startIndex] !== O.COLUMN_GROUP_START || var_core_value_sigA56E[var_core_value_sigB8C7.endIndex] !== O.COLUMN_GROUP_END) return null;
  let var_core_value_sig1998 = var_core_value_sig85D5(var_core_value_sigB8C7);
  return fe(var_core_value_sigA56E, var_core_value_sig1998.startOffset, var_core_value_sig1998.endOffset, var_core_value_sigB542, var_core_value_sigB8C7);
}
function fe(var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig9D15) {
  let var_core_value_sigB785 = [],
    var_core_value_sig130F = -1;
  for (let var_core_value_sig32F8 = var_core_value_sig43B8; var_core_value_sig32F8 < var_core_value_sigD98F; var_core_value_sig32F8++) {
    let var_core_value_sig48BD = var_core_value_sigFF19[var_core_value_sig32F8];
    if (var_core_value_sig48BD === O.COLUMN_START) {
      var_core_value_sig130F = var_core_value_sig32F8;
      continue;
    }
    if (var_core_value_sig48BD === O.COLUMN_END && var_core_value_sig130F >= 0) {
      var var_core_value_sigC0E3;
      let var_core_value_sig7524 = var_core_value_sigB785.length;
      var_core_value_sigB785.push({
        column: var_core_value_sig7524,
        columnId: ((var_core_value_sigC0E3 = var_core_value_sig9D15.columns) == null || (var_core_value_sigC0E3 = var_core_value_sigC0E3[var_core_value_sig7524]) == null ? undefined : var_core_value_sigC0E3.columnId) ?? String(var_core_value_sig7524),
        startOffset: var_core_value_sig130F,
        endOffset: var_core_value_sig32F8
      }), var_core_value_sig130F = -1;
    }
  }
  return {
    columnGroupId: var_core_value_sig66C0,
    startOffset: var_core_value_sig43B8,
    endOffset: var_core_value_sigD98F,
    columns: var_core_value_sigB785,
    source: var_core_value_sig9D15
  };
}
function A(var_core_value_sig52F7) {
  return {
    ...var_core_value_sig52F7,
    body: var_core_value_sig52F7.body ? pe(var_core_value_sig52F7.body) : var_core_value_sig52F7.body
  };
}
function pe(var_core_value_sig866F) {
  var var_core_value_sigDE3D, var_core_value_sigF175, var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547, var_core_value_sigBCA9, var_core_value_sig4CDF, var_core_value_sig3F79;
  return {
    ...var_core_value_sig866F,
    paragraphs: (var_core_value_sigDE3D = var_core_value_sig866F.paragraphs) == null ? undefined : var_core_value_sigDE3D.map(var_core_value_sig5B67 => ({
      ...var_core_value_sig5B67,
      bullet: j(var_core_value_sig5B67.bullet),
      paragraphStyle: j(var_core_value_sig5B67.paragraphStyle)
    })),
    sectionBreaks: (var_core_value_sigF175 = var_core_value_sig866F.sectionBreaks) == null ? undefined : var_core_value_sigF175.map(var_core_value_sig1758 => ({
      ...var_core_value_sig1758
    })),
    textRuns: (var_core_value_sig6A18 = var_core_value_sig866F.textRuns) == null ? undefined : var_core_value_sig6A18.map(var_core_value_sig4805 => ({
      ...var_core_value_sig4805
    })),
    tables: (var_core_value_sig4E3D = var_core_value_sig866F.tables) == null ? undefined : var_core_value_sig4E3D.map(var_core_value_sigE67E => ({
      ...var_core_value_sigE67E
    })),
    columnGroups: (var_core_value_sig49B0 = var_core_value_sig866F.columnGroups) == null ? undefined : var_core_value_sig49B0.map(var_core_value_sig2902 => {
      var var_core_value_sig9989;
      return {
        ...var_core_value_sig2902,
        columns: (var_core_value_sig9989 = var_core_value_sig2902.columns) == null ? undefined : var_core_value_sig9989.map(var_core_value_sig429F => j(var_core_value_sig429F))
      };
    }),
    blockRanges: (var_core_value_sig2547 = var_core_value_sig866F.blockRanges) == null ? undefined : var_core_value_sig2547.map(var_core_value_sig698E => ({
      ...var_core_value_sig698E
    })),
    customRanges: (var_core_value_sigBCA9 = var_core_value_sig866F.customRanges) == null ? undefined : var_core_value_sigBCA9.map(var_core_value_sig2809 => ({
      ...var_core_value_sig2809
    })),
    customDecorations: (var_core_value_sig4CDF = var_core_value_sig866F.customDecorations) == null ? undefined : var_core_value_sig4CDF.map(var_core_value_sig2DAB => ({
      ...var_core_value_sig2DAB
    })),
    customBlocks: (var_core_value_sig3F79 = var_core_value_sig866F.customBlocks) == null ? undefined : var_core_value_sig3F79.map(var_core_value_sig877E => ({
      ...var_core_value_sig877E
    }))
  };
}
function j(var_core_value_sig880E) {
  return Array.isArray(var_core_value_sig880E) ? var_core_value_sig880E.map(var_core_value_sig20C8 => j(var_core_value_sig20C8)) : !var_core_value_sig880E || typeof var_core_value_sig880E != "object" ? var_core_value_sig880E : Object.fromEntries(Object.entries(var_core_value_sig880E).map(([var_core_value_sigE9A7, var_core_value_sigBECE]) => [var_core_value_sigE9A7, j(var_core_value_sigBECE)]));
}
const me = new Set([var_core_value_sig1015.BLOCK_END, O.COLUMN_START, O.COLUMN_END, O.COLUMN_GROUP_END, var_core_value_sig1015.TABLE_ROW_START, var_core_value_sig1015.TABLE_CELL_START, var_core_value_sig1015.TABLE_CELL_END, var_core_value_sig1015.TABLE_ROW_END, var_core_value_sig1015.TABLE_END]);
function M(var_core_value_sigC9ED, var_core_value_sigB57B) {
  if (!Ce(var_core_value_sigC9ED)) return false;
  let var_core_value_sig780B = var_core_value_sigC9ED.body;
  return !(var_core_value_sig780B != null && var_core_value_sig780B.dataStream) || Se(var_core_value_sig780B.dataStream[var_core_value_sigB57B]) ? false : !(var_core_value_sig780B.columnGroups ?? []).some(var_core_value_sig1B22 => var_core_value_sig1E21(var_core_value_sig85D5(var_core_value_sig1B22), var_core_value_sigB57B)) && !(var_core_value_sig780B.tables ?? []).some(var_core_value_sig7F72 => var_core_value_sig1E21(var_core_value_sig5D2E(var_core_value_sig7F72), var_core_value_sigB57B)) && !(var_core_value_sig780B.blockRanges ?? []).some(var_core_value_sig7B2A => var_core_value_sig1E21(var_core_value_sigD22D(var_core_value_sig7B2A), var_core_value_sigB57B));
}
function he(var_core_value_sig7D1B) {
  let var_core_value_sig7BE0 = A(var_core_value_sig7D1B.documentData),
    var_core_value_sig7D40 = ge(var_core_value_sig7BE0),
    var_core_value_sig6C7E = Math.max(0, Math.min(var_core_value_sig7D1B.offset, var_core_value_sig7D40.dataStream["length"]));
  if (!Ce(var_core_value_sig7BE0)) throw Error("[DocsColumn]: Column groups can only be inserted in modern documents.");
  if (!M(var_core_value_sig7BE0, var_core_value_sig6C7E)) throw Error("[DocsColumn]: Cannot insert a column group inside table, column group, or document block ranges.");
  let var_core_value_sig68BE = Math.max(2, var_core_value_sig7D1B.columnCount ?? var_core_value_sig7D1B.columnIds["length"]);
  if (var_core_value_sig68BE > 5) throw Error("[DocsColumn]: Cannot create more than five columns.");
  let var_core_value_sig04C6 = _e(var_core_value_sig7D1B.columnIds, var_core_value_sig68BE),
    var_core_value_sigCA05 = ye(var_core_value_sig68BE, xe(var_core_value_sig7D40), be(var_core_value_sig7D40, var_core_value_sig6C7E)),
    var_core_value_sig2F2B = var_core_value_sigCA05.dataStream,
    var_core_value_sig70AF = var_core_value_sig6C7E + var_core_value_sigCA05.columnGroupEndIndex;
  return var_core_value_sig7D40.dataStream = "" + var_core_value_sig7D40.dataStream["slice"](0, var_core_value_sig6C7E) + var_core_value_sig2F2B + var_core_value_sig7D40.dataStream["slice"](var_core_value_sig6C7E), var_core_value_sig7D40.paragraphs = [...N(var_core_value_sig7D40.paragraphs ?? [], var_core_value_sig6C7E, var_core_value_sig2F2B.length), ...var_core_value_sigCA05.paragraphs["map"](var_core_value_sig06CD => ({
    ...var_core_value_sig06CD,
    startIndex: var_core_value_sig06CD.startIndex + var_core_value_sig6C7E
  }))].sort((var_core_value_sigA5F1, var_core_value_sig97A2) => var_core_value_sigA5F1.startIndex - var_core_value_sig97A2.startIndex), var_core_value_sig7D40.sectionBreaks = [...N(var_core_value_sig7D40.sectionBreaks ?? [], var_core_value_sig6C7E, var_core_value_sig2F2B.length), ...var_core_value_sigCA05.sectionBreaks["map"](var_core_value_sig07E9 => ({
    ...var_core_value_sig07E9,
    startIndex: var_core_value_sig07E9.startIndex + var_core_value_sig6C7E
  }))].sort((var_core_value_sig4F59, var_core_value_sigF564) => var_core_value_sig4F59.startIndex - var_core_value_sigF564.startIndex), var_core_value_sig7D40.textRuns = we(var_core_value_sig7D40.textRuns ?? [], var_core_value_sig6C7E, var_core_value_sig2F2B.length), var_core_value_sig7D40.customBlocks = N(var_core_value_sig7D40.customBlocks ?? [], var_core_value_sig6C7E, var_core_value_sig2F2B.length), var_core_value_sig7D40.blockRanges = (var_core_value_sig7D40.blockRanges ?? []).map(var_core_value_sig8CFA => var_core_value_sigE6D6(var_core_value_sig8CFA, var_core_value_sig6C7E, var_core_value_sig2F2B.length)), var_core_value_sig7D40.customRanges = (var_core_value_sig7D40.customRanges ?? []).map(var_core_value_sig2E11 => var_core_value_sigE6D6(var_core_value_sig2E11, var_core_value_sig6C7E, var_core_value_sig2F2B.length)), var_core_value_sig7D40.customDecorations = (var_core_value_sig7D40.customDecorations ?? []).map(var_core_value_sig5B69 => var_core_value_sigE6D6(var_core_value_sig5B69, var_core_value_sig6C7E, var_core_value_sig2F2B.length)), var_core_value_sig7D40.tables = (var_core_value_sig7D40.tables ?? []).map(var_core_value_sigB098 => var_core_value_sig0A5A(var_core_value_sigB098, var_core_value_sig6C7E, var_core_value_sig2F2B.length)), var_core_value_sig7D40.columnGroups = [...(var_core_value_sig7D40.columnGroups ?? []).map(var_core_value_sigCE71 => var_core_value_sigE6D6(var_core_value_sigCE71, var_core_value_sig6C7E, var_core_value_sig2F2B.length)), {
    startIndex: var_core_value_sig6C7E,
    endIndex: var_core_value_sig70AF,
    columnGroupId: var_core_value_sig7D1B.columnGroupId,
    columns: var_core_value_sig04C6.map(var_core_value_sig21D8 => ({
      columnId: var_core_value_sig21D8,
      widthRatio: 1
    })),
    gap: {
      v: ve(var_core_value_sig7D1B.gap)
    },
    layout: var_core_value_sig58DB.FIXED,
    responsive: var_core_value_sig4840.STACK
  }].sort((var_core_value_sig2B65, var_core_value_sigD7EA) => var_core_value_sig2B65.startIndex - var_core_value_sigD7EA.startIndex), {
    nextDocumentData: var_core_value_sig7BE0,
    inserted: {
      columnGroupId: var_core_value_sig7D1B.columnGroupId,
      columnIds: var_core_value_sig04C6
    }
  };
}
function ge(var_core_value_sigD04E) {
  return var_core_value_sigD04E.body ??= {
    dataStream: var_core_value_sig1015.SECTION_BREAK,
    paragraphs: [],
    sectionBreaks: [{
      sectionId: var_core_value_sig36CC(new Set()),
      startIndex: 0
    }],
    columnGroups: []
  }, var_core_value_sigD04E.body["dataStream"] ??= var_core_value_sig1015.SECTION_BREAK, var_core_value_sigD04E.body["paragraphs"] ??= [], var_core_value_sigD04E.body["sectionBreaks"] ??= [], var_core_value_sigD04E.body["columnGroups"] ??= [], var_core_value_sigD04E.body;
}
function _e(var_core_value_sigB99B, var_core_value_sig5A75) {
  return Array.from({
    length: var_core_value_sig5A75
  }, (var_core_value_sigB33B, var_core_value_sig24B9) => var_core_value_sigB99B[var_core_value_sig24B9] ?? "column-" + (var_core_value_sig24B9 + 1));
}
function ve(var_core_value_sig7BAF) {
  return typeof var_core_value_sig7BAF == "number" && Number.isFinite(var_core_value_sig7BAF) && var_core_value_sig7BAF >= 0 ? var_core_value_sig7BAF : 12;
}
function ye(var_core_value_sig8F69, var_core_value_sig6884, var_core_value_sig066E) {
  let var_core_value_sig9B0D = O.COLUMN_GROUP_START,
    var_core_value_sig3D2C = [],
    var_core_value_sigC56D = [];
  for (let var_core_value_sigE627 = 0; var_core_value_sigE627 < var_core_value_sig8F69; var_core_value_sigE627++) var_core_value_sig9B0D += "" + O.COLUMN_START + var_core_value_sig1015.PARAGRAPH + O.COLUMN_END, var_core_value_sig3D2C.push({
    startIndex: var_core_value_sig9B0D.length - 2,
    paragraphId: var_core_value_sig9DBF(var_core_value_sig6884)
  });
  var_core_value_sig9B0D += O.COLUMN_GROUP_END;
  let var_core_value_sig3A17 = var_core_value_sig9B0D.length - 1;
  return var_core_value_sig066E && (var_core_value_sig9B0D += var_core_value_sig1015.PARAGRAPH, var_core_value_sig3D2C.push({
    startIndex: var_core_value_sig9B0D.length - 1,
    paragraphId: var_core_value_sig9DBF(var_core_value_sig6884)
  })), {
    columnGroupEndIndex: var_core_value_sig3A17,
    dataStream: var_core_value_sig9B0D,
    paragraphs: var_core_value_sig3D2C,
    sectionBreaks: var_core_value_sigC56D
  };
}
function be(var_core_value_sig938F, var_core_value_sigD948) {
  let var_core_value_sigBE5E = var_core_value_sig938F.dataStream[var_core_value_sigD948];
  return var_core_value_sigBE5E === var_core_value_sig1015.SECTION_BREAK || var_core_value_sigBE5E === undefined;
}
function xe(var_core_value_sig0281) {
  return new Set((var_core_value_sig0281.paragraphs ?? []).map(var_core_value_sigEF3E => var_core_value_sigEF3E.paragraphId));
}
function Se(var_core_value_sigED71) {
  return var_core_value_sigED71 != null && me.has(var_core_value_sigED71);
}
function Ce(var_core_value_sig281C) {
  var var_core_value_sig3C92;
  return ((var_core_value_sig3C92 = var_core_value_sig281C.documentStyle) == null ? undefined : var_core_value_sig3C92.documentFlavor) === var_core_value_sigC6B6.MODERN;
}
function N(var_core_value_sigB16B, var_core_value_sig585D, var_core_value_sigE722) {
  return var_core_value_sigB16B.map(var_core_value_sig273D => var_core_value_sig273D.startIndex >= var_core_value_sig585D ? {
    ...var_core_value_sig273D,
    startIndex: var_core_value_sig273D.startIndex + var_core_value_sigE722
  } : var_core_value_sig273D);
}
function we(var_core_value_sig062A, var_core_value_sig050A, var_core_value_sig8B32) {
  return var_core_value_sig062A.map(var_core_value_sig9A0D => var_core_value_sig9A0D.st >= var_core_value_sig050A ? {
    ...var_core_value_sig9A0D,
    st: var_core_value_sig9A0D.st + var_core_value_sig8B32,
    ed: var_core_value_sig9A0D.ed + var_core_value_sig8B32
  } : var_core_value_sig9A0D.ed > var_core_value_sig050A ? {
    ...var_core_value_sig9A0D,
    ed: var_core_value_sig9A0D.ed + var_core_value_sig8B32
  } : var_core_value_sig9A0D);
}
function P(var_core_value_sig870F, var_core_value_sigB683) {
  let var_core_value_sig26EC = var_core_value_sig870F.get(var_core_value_sig36FE),
    var_core_value_sigEEDB = var_core_value_sigB683 ? var_core_value_sig26EC.getUnit(var_core_value_sigB683, var_core_value_sig478B.UNIVER_DOC) : var_core_value_sig26EC.getCurrentUnitOfType(var_core_value_sig478B.UNIVER_DOC),
    var_core_value_sig36E7 = var_core_value_sigEEDB == null ? undefined : var_core_value_sigEEDB.getSnapshot(),
    var_core_value_sig6A78 = var_core_value_sigEEDB == null ? undefined : var_core_value_sigEEDB.getUnitId();
  return !var_core_value_sig36E7 || !var_core_value_sig6A78 ? null : {
    commandService: var_core_value_sig870F.get(var_core_value_sig498A),
    snapshot: var_core_value_sig36E7,
    unitId: var_core_value_sig6A78
  };
}
function F(var_core_value_sigF7EF, var_core_value_sig27F9, var_core_value_sig393E) {
  return var_core_value_sig27F9 ? !!var_core_value_sigF7EF.commandService["syncExecuteCommand"](var_core_value_sig8A7F.id, {
    unitId: var_core_value_sigF7EF.unitId,
    actions: var_core_value_sig27F9,
    textRanges: var_core_value_sig393E
  }) : false;
}
function Te(var_core_value_sigB609, var_core_value_sig390D, var_core_value_sigC928) {
  var var_core_value_sig39B7, var_core_value_sig18E0;
  let var_core_value_sigE161 = var_core_value_sig8690.getInstance(),
    var_core_value_sigBDEE = ((var_core_value_sig39B7 = var_core_value_sigB609.body) == null || (var_core_value_sig39B7 = var_core_value_sig39B7.columnGroups) == null ? undefined : var_core_value_sig39B7.findIndex(var_core_value_sigA319 => var_core_value_sigA319.columnGroupId === var_core_value_sig390D)) ?? -1,
    var_core_value_sig1F40 = var_core_value_sigBDEE >= 0 ? (var_core_value_sig18E0 = var_core_value_sigB609.body) == null || (var_core_value_sig18E0 = var_core_value_sig18E0.columnGroups) == null ? undefined : var_core_value_sig18E0[var_core_value_sigBDEE] : undefined;
  return !(var_core_value_sig1F40 != null && var_core_value_sig1F40.columns) || var_core_value_sig1F40.columns["length"] !== var_core_value_sigC928.length || var_core_value_sig1F40.columns["length"] < 2 || var_core_value_sigC928.some(var_core_value_sig2D58 => !Number.isFinite(var_core_value_sig2D58) || var_core_value_sig2D58 <= 0) ? null : var_core_value_sig1F40.columns["map"]((var_core_value_sig223F, var_core_value_sigD749) => {
    let var_core_value_sigCFFA = var_core_value_sigC928[var_core_value_sigD749];
    return var_core_value_sig223F.widthRatio === var_core_value_sigCFFA ? null : var_core_value_sigE161.replaceOp(["body", "columnGroups", var_core_value_sigBDEE, "columns", var_core_value_sigD749, "widthRatio"], var_core_value_sig223F.widthRatio, var_core_value_sigCFFA);
  }).filter(Boolean).reduce((var_core_value_sig58C1, var_core_value_sig5090) => var_core_value_sig8690.compose(var_core_value_sig58C1, var_core_value_sig5090), null);
}
function Ee(var_core_value_sig3FC7, var_core_value_sig1E1B, var_core_value_sig3B10, var_core_value_sig89E6, var_core_value_sig4743) {
  var var_core_value_sigEB6A;
  let var_core_value_sig3D46 = var_core_value_sig3FC7.body,
    var_core_value_sigCC93 = k(var_core_value_sig3FC7, var_core_value_sig1E1B),
    var_core_value_sig5964 = var_core_value_sigCC93 == null ? undefined : var_core_value_sigCC93.source["columns"],
    var_core_value_sig808B = (var_core_value_sig3D46 == null || (var_core_value_sigEB6A = var_core_value_sig3D46.columnGroups) == null ? undefined : var_core_value_sigEB6A.findIndex(var_core_value_sigC368 => var_core_value_sigC368.columnGroupId === var_core_value_sig1E1B)) ?? -1,
    var_core_value_sig2A26 = (var_core_value_sig5964 == null ? undefined : var_core_value_sig5964.findIndex(var_core_value_sigAD56 => var_core_value_sigAD56.columnId === var_core_value_sig3B10)) ?? -1,
    var_core_value_sig1179 = var_core_value_sig2A26 >= 0 ? var_core_value_sigCC93 == null ? undefined : var_core_value_sigCC93.columns[var_core_value_sig2A26] : undefined;
  if (!(var_core_value_sig3D46 != null && var_core_value_sig3D46.dataStream) || !var_core_value_sigCC93 || !var_core_value_sig5964 || var_core_value_sig808B < 0 || var_core_value_sig2A26 < 0 || !var_core_value_sig1179 || var_core_value_sig5964.length !== var_core_value_sigCC93.columns["length"] || var_core_value_sig5964.length >= 5) return null;
  let var_core_value_sigEA92 = var_core_value_sig89E6 === "left" ? var_core_value_sig2A26 : var_core_value_sig2A26 + 1,
    var_core_value_sig8FD9 = var_core_value_sig89E6 === "left" ? var_core_value_sig1179.startOffset : var_core_value_sig1179.endOffset + 1,
    var_core_value_sig1AE5 = ze(var_core_value_sig3D46),
    var_core_value_sig7100 = var_core_value_sig8690.getInstance(),
    var_core_value_sigA19A = L(var_core_value_sig8FD9, var_core_value_sig1AE5, 0),
    var_core_value_sigD3F5 = {
      columnId: var_core_value_sig4743,
      widthRatio: 1
    };
  return {
    actions: He([var_core_value_sigA19A, var_core_value_sig7100.insertOp(["body", "columnGroups", var_core_value_sig808B, "columns", var_core_value_sigEA92], var_core_value_sigD3F5)]),
    cursorOffset: var_core_value_sig8FD9 + 1
  };
}
function De(var_core_value_sig3082, var_core_value_sigF5D1, var_core_value_sig8775) {
  let var_core_value_sig481B = Oe(var_core_value_sig3082, var_core_value_sigF5D1);
  if (!var_core_value_sig481B) return null;
  let {
      group: var_core_value_sig13D7,
      groupIndex: var_core_value_sig90C0,
      sourceColumns: var_core_value_sigF1B2
    } = var_core_value_sig481B,
    var_core_value_sigC2BB = var_core_value_sigF1B2.findIndex(var_core_value_sigDB4A => var_core_value_sigDB4A.columnId === var_core_value_sig8775);
  if (var_core_value_sigC2BB < 0 || var_core_value_sigF1B2.length <= 2) return null;
  let var_core_value_sigD9DB = var_core_value_sig13D7.columns[var_core_value_sigC2BB],
    var_core_value_sigA363 = var_core_value_sigF1B2[var_core_value_sigC2BB];
  if (!var_core_value_sigD9DB || !var_core_value_sigA363) return null;
  let var_core_value_sigFBA5 = var_core_value_sigD9DB.startOffset,
    var_core_value_sigAC47 = var_core_value_sigD9DB.endOffset + 1,
    var_core_value_sigA06F = var_core_value_sig13D7.columns[var_core_value_sigC2BB + 1] ?? var_core_value_sig13D7.columns[var_core_value_sigC2BB - 1],
    var_core_value_sig770E = var_core_value_sig8690.getInstance();
  return {
    actions: He([L(var_core_value_sigFBA5, undefined, var_core_value_sigAC47 - var_core_value_sigFBA5), var_core_value_sig770E.removeOp(["body", "columnGroups", var_core_value_sig90C0, "columns", var_core_value_sigC2BB], z(var_core_value_sigA363))]),
    cursorOffset: (var_core_value_sigC2BB < var_core_value_sigF1B2.length - 1 ? var_core_value_sigFBA5 : var_core_value_sigA06F.startOffset) + 1
  };
}
function Oe(var_core_value_sig4654, var_core_value_sigB26B) {
  var var_core_value_sig019B;
  let var_core_value_sigC6BC = var_core_value_sig4654.body,
    var_core_value_sig8EC2 = k(var_core_value_sig4654, var_core_value_sigB26B),
    var_core_value_sigA8C3 = var_core_value_sig8EC2 == null ? undefined : var_core_value_sig8EC2.source["columns"],
    var_core_value_sig5276 = (var_core_value_sigC6BC == null || (var_core_value_sig019B = var_core_value_sigC6BC.columnGroups) == null ? undefined : var_core_value_sig019B.findIndex(var_core_value_sig6418 => var_core_value_sig6418.columnGroupId === var_core_value_sigB26B)) ?? -1;
  return !(var_core_value_sigC6BC != null && var_core_value_sigC6BC.dataStream) || !var_core_value_sig8EC2 || !var_core_value_sigA8C3 || var_core_value_sig5276 < 0 || var_core_value_sigA8C3.length !== var_core_value_sig8EC2.columns["length"] ? null : {
    group: var_core_value_sig8EC2,
    groupIndex: var_core_value_sig5276,
    sourceColumns: var_core_value_sigA8C3
  };
}
function ke(var_core_value_sig031B, var_core_value_sig9DC0) {
  let var_core_value_sig95F0 = var_core_value_sig031B.body;
  if (!(var_core_value_sig95F0 != null && var_core_value_sig95F0.dataStream)) return null;
  let var_core_value_sig9CCB = Math.max(0, Math.min(var_core_value_sig9DC0.offset, var_core_value_sig95F0.dataStream["length"])),
    var_core_value_sigE718 = Math.max(2, var_core_value_sig9DC0.columnCount);
  return !M(var_core_value_sig031B, var_core_value_sig9CCB) || var_core_value_sigE718 > 5 || var_core_value_sig9DC0.widthRatios && (var_core_value_sig9DC0.widthRatios["length"] !== var_core_value_sigE718 || var_core_value_sig9DC0.widthRatios["some"](var_core_value_sig1896 => !Number.isFinite(var_core_value_sig1896) || var_core_value_sig1896 <= 0)) ? null : {
    actions: L(var_core_value_sig9CCB, Be(var_core_value_sig95F0, {
      ...var_core_value_sig9DC0,
      columnCount: var_core_value_sigE718,
      offset: var_core_value_sig9CCB
    }), 0),
    cursorOffset: var_core_value_sig9CCB + 2
  };
}
function Ae(var_core_value_sigAEC8, var_core_value_sigB977) {
  var var_core_value_sig2949;
  let var_core_value_sig308A = var_core_value_sigAEC8.body,
    var_core_value_sig528D = var_core_value_sig308A == null || (var_core_value_sig2949 = var_core_value_sig308A.columnGroups) == null ? undefined : var_core_value_sig2949.find(var_core_value_sig0285 => var_core_value_sig0285.columnGroupId === var_core_value_sigB977);
  if (!(var_core_value_sig308A != null && var_core_value_sig308A.dataStream) || !var_core_value_sig528D) return null;
  let var_core_value_sigA309 = var_core_value_sig528D.startIndex,
    var_core_value_sig9E20 = var_core_value_sig85D5(var_core_value_sig528D).endOffset;
  return {
    actions: L(var_core_value_sigA309, var_core_value_sig308A.dataStream["length"] === var_core_value_sig9E20 - var_core_value_sigA309 ? Ve(var_core_value_sig308A) : undefined, var_core_value_sig9E20 - var_core_value_sigA309),
    cursorOffset: var_core_value_sigA309
  };
}
function je(var_core_value_sig26BB) {
  let var_core_value_sig19B4 = var_core_value_sig26BB.body;
  if (!var_core_value_sig19B4) return null;
  let var_core_value_sig218A = var_core_value_sig19B4.dataStream ?? "",
    var_core_value_sig14CB = var_core_value_sig19B4.columnGroups ?? [],
    var_core_value_sigFDEE = Me(var_core_value_sig14CB),
    var_core_value_sigA676 = new Set();
  var_core_value_sigFDEE.forEach(var_core_value_sig777D => {
    Ne(var_core_value_sig218A, var_core_value_sig14CB[var_core_value_sig777D]).forEach(var_core_value_sigF62A => var_core_value_sigA676.add(var_core_value_sigF62A));
  }), var_core_value_sig14CB.forEach((var_core_value_sig3F4C, var_core_value_sigD65A) => {
    !var_core_value_sigFDEE.has(var_core_value_sigD65A) && Pe(var_core_value_sig218A, var_core_value_sig3F4C, var_core_value_sigA676) && (var_core_value_sigFDEE.add(var_core_value_sigD65A), Ne(var_core_value_sig218A, var_core_value_sig3F4C).forEach(var_core_value_sig8178 => var_core_value_sigA676.add(var_core_value_sig8178)));
  });
  let var_core_value_sigC27E = [];
  var_core_value_sig14CB.forEach((var_core_value_sig5A13, var_core_value_sigF593) => {
    var_core_value_sigFDEE.has(var_core_value_sigF593) || Fe(var_core_value_sigC27E, var_core_value_sig5A13, var_core_value_sigF593, var_core_value_sig218A, var_core_value_sigA676);
  });
  let var_core_value_sigA70D = var_core_value_sig8690.getInstance();
  [...var_core_value_sigFDEE].sort((var_core_value_sig3607, var_core_value_sigB512) => var_core_value_sigB512 - var_core_value_sig3607).forEach(var_core_value_sigF2E6 => {
    var_core_value_sigC27E.push(var_core_value_sigA70D.removeOp(["body", "columnGroups", var_core_value_sigF2E6], z(var_core_value_sig14CB[var_core_value_sigF2E6])));
  });
  let var_core_value_sigCE10 = Re(var_core_value_sig19B4, var_core_value_sigA676);
  return var_core_value_sigCE10 && var_core_value_sigC27E.push(var_core_value_sigCE10), var_core_value_sigC27E.length ? He(var_core_value_sigC27E) : null;
}
function Me(var_core_value_sigA386) {
  let var_core_value_sigCD82 = new Set();
  return var_core_value_sigA386.forEach((var_core_value_sig34C8, var_core_value_sigB744) => {
    var_core_value_sigA386.some((var_core_value_sigE9ED, var_core_value_sigB577) => var_core_value_sigB577 !== var_core_value_sigB744 && var_core_value_sig34C8.startIndex > var_core_value_sigE9ED.startIndex && var_core_value_sig34C8.endIndex < var_core_value_sigE9ED.endIndex) && var_core_value_sigCD82.add(var_core_value_sigB744);
  }), var_core_value_sigCD82;
}
function Ne(var_core_value_sig44DD, var_core_value_sig96FA) {
  let var_core_value_sigAB68 = var_core_value_sig85D5(var_core_value_sig96FA).endOffset,
    var_core_value_sig040A = new Set([O.COLUMN_GROUP_START, O.COLUMN_START, O.COLUMN_END, O.COLUMN_GROUP_END]),
    var_core_value_sig2AE0 = [];
  for (let var_core_value_sigEAE2 = var_core_value_sig96FA.startIndex; var_core_value_sigEAE2 < var_core_value_sigAB68; var_core_value_sigEAE2++) var_core_value_sig040A.has(var_core_value_sig44DD[var_core_value_sigEAE2]) && var_core_value_sig2AE0.push(var_core_value_sigEAE2);
  return var_core_value_sig2AE0;
}
function Pe(var_core_value_sigC349, var_core_value_sig9D96, var_core_value_sig2776) {
  let var_core_value_sig6FB2 = var_core_value_sig85D5(var_core_value_sig9D96).endOffset,
    var_core_value_sigEB43 = -1,
    var_core_value_sig4186 = 0;
  for (let var_core_value_sigE68A = var_core_value_sig9D96.startIndex; var_core_value_sigE68A < var_core_value_sig6FB2; var_core_value_sigE68A++) {
    if (var_core_value_sig2776.has(var_core_value_sigE68A)) continue;
    let var_core_value_sig9572 = var_core_value_sigC349[var_core_value_sigE68A];
    if (var_core_value_sig9572 === O.COLUMN_START) {
      if (var_core_value_sigEB43 >= 0) return true;
      var_core_value_sigEB43 = var_core_value_sigE68A;
    } else {
      if (var_core_value_sig9572 === O.COLUMN_END) {
        if (var_core_value_sigEB43 < 0) return true;
        var_core_value_sig4186++, var_core_value_sigEB43 = -1;
      }
    }
  }
  return var_core_value_sigEB43 >= 0 || var_core_value_sig4186 < 2 || var_core_value_sig4186 > 5;
}
function Fe(var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866, var_core_value_sig5EFB, var_core_value_sig3A85) {
  var var_core_value_sig2682;
  let var_core_value_sig4BB5 = Ie(var_core_value_sig5EFB, var_core_value_sigB608, var_core_value_sig3A85);
  if (var_core_value_sig4BB5 === 0) return;
  let var_core_value_sig6709 = Le(var_core_value_sigB608, var_core_value_sig4BB5),
    var_core_value_sig52CA = Number.isFinite((var_core_value_sig2682 = var_core_value_sigB608.gap) == null ? undefined : var_core_value_sig2682.v) && var_core_value_sigB608.gap["v"] >= 0 ? {
      v: var_core_value_sigB608.gap["v"]
    } : {
      v: 12
    },
    var_core_value_sigC030 = var_core_value_sig8690.getInstance();
  I(var_core_value_sigF963, var_core_value_sigC030, ["body", "columnGroups", var_core_value_sigF866, "columns"], var_core_value_sigB608.columns, var_core_value_sig6709), I(var_core_value_sigF963, var_core_value_sigC030, ["body", "columnGroups", var_core_value_sigF866, "gap"], var_core_value_sigB608.gap, var_core_value_sig52CA), I(var_core_value_sigF963, var_core_value_sigC030, ["body", "columnGroups", var_core_value_sigF866, "layout"], var_core_value_sigB608.layout, var_core_value_sigB608.layout ?? var_core_value_sig58DB.FIXED), I(var_core_value_sigF963, var_core_value_sigC030, ["body", "columnGroups", var_core_value_sigF866, "responsive"], var_core_value_sigB608.responsive, var_core_value_sigB608.responsive ?? var_core_value_sig4840.STACK);
}
function Ie(var_core_value_sig88F6, var_core_value_sig37DB, var_core_value_sig5542) {
  let var_core_value_sigE0A9 = var_core_value_sig85D5(var_core_value_sig37DB).endOffset,
    var_core_value_sigA73E = 0;
  for (let var_core_value_sig3E68 = var_core_value_sig37DB.startIndex; var_core_value_sig3E68 < var_core_value_sigE0A9; var_core_value_sig3E68++) !var_core_value_sig5542.has(var_core_value_sig3E68) && var_core_value_sig88F6[var_core_value_sig3E68] === O.COLUMN_START && var_core_value_sigA73E++;
  return var_core_value_sigA73E;
}
function Le(var_core_value_sig7620, var_core_value_sigB9FC) {
  return Array.from({
    length: var_core_value_sigB9FC
  }, (var_core_value_sigF4C5, var_core_value_sig5410) => {
    var var_core_value_sig492F;
    let var_core_value_sig8EA0 = (var_core_value_sig492F = var_core_value_sig7620.columns) == null ? undefined : var_core_value_sig492F[var_core_value_sig5410];
    return var_core_value_sig8EA0 ? {
      ...z(var_core_value_sig8EA0),
      widthRatio: Number.isFinite(var_core_value_sig8EA0.widthRatio) && var_core_value_sig8EA0.widthRatio > 0 ? var_core_value_sig8EA0.widthRatio : 1
    } : {
      columnId: var_core_value_sig7620.columnGroupId + "-column-" + (var_core_value_sig5410 + 1),
      widthRatio: 1
    };
  });
}
function I(var_core_value_sig5055, var_core_value_sig3801, var_core_value_sig45F0, var_core_value_sigBC91, var_core_value_sigCB88) {
  var_core_value_sigFFAF.diffValue(var_core_value_sigBC91, var_core_value_sigCB88) || var_core_value_sig5055.push(var_core_value_sigBC91 == null ? var_core_value_sig3801.insertOp(var_core_value_sig45F0, z(var_core_value_sigCB88)) : var_core_value_sig3801.replaceOp(var_core_value_sig45F0, z(var_core_value_sigBC91), z(var_core_value_sigCB88)));
}
function Re(var_core_value_sig8D65, var_core_value_sig8122) {
  var var_core_value_sigEDC6;
  let var_core_value_sig611A = [...var_core_value_sig8122].sort((var_core_value_sigA6F6, var_core_value_sigCDDA) => var_core_value_sigA6F6 - var_core_value_sigCDDA),
    var_core_value_sig6BD9 = (((var_core_value_sigEDC6 = var_core_value_sig8D65.dataStream) == null ? undefined : var_core_value_sigEDC6.length) ?? 0) === var_core_value_sig611A.length;
  if (!var_core_value_sig611A.length && !var_core_value_sig6BD9) return null;
  let var_core_value_sig7E56 = new var_core_value_sig4494(),
    var_core_value_sig4161 = 0;
  if (var_core_value_sig6BD9) {
    let var_core_value_sigE243 = Ve(var_core_value_sig8D65);
    var_core_value_sig7E56.insert(var_core_value_sigE243.dataStream["length"], var_core_value_sigE243);
  }
  for (let var_core_value_sig74A8 = 0; var_core_value_sig74A8 < var_core_value_sig611A.length;) {
    let var_core_value_sigD873 = var_core_value_sig611A[var_core_value_sig74A8],
      var_core_value_sigA12B = var_core_value_sigD873 + 1;
    for (; var_core_value_sig74A8 + 1 < var_core_value_sig611A.length && var_core_value_sig611A[var_core_value_sig74A8 + 1] === var_core_value_sigA12B;) var_core_value_sig74A8++, var_core_value_sigA12B++;
    var_core_value_sigD873 > var_core_value_sig4161 && var_core_value_sig7E56.retain(var_core_value_sigD873 - var_core_value_sig4161), var_core_value_sig7E56.delete(var_core_value_sigA12B - var_core_value_sigD873), var_core_value_sig4161 = var_core_value_sigA12B, var_core_value_sig74A8++;
  }
  return var_core_value_sig8690.getInstance().editOp(var_core_value_sig7E56.serialize(), ["body"]);
}
function ze(var_core_value_sig7580) {
  var var_core_value_sig1F18;
  let var_core_value_sigD5A0 = R(var_core_value_sig7580);
  return {
    dataStream: "" + O.COLUMN_START + var_core_value_sig1015.PARAGRAPH + var_core_value_sig1015.SECTION_BREAK + O.COLUMN_END,
    paragraphs: [{
      startIndex: 1,
      paragraphId: var_core_value_sig9DBF(var_core_value_sigD5A0)
    }],
    sectionBreaks: [{
      sectionId: var_core_value_sig36CC(new Set((var_core_value_sig1F18 = var_core_value_sig7580.sectionBreaks) == null ? undefined : var_core_value_sig1F18.map(var_core_value_sig21B2 => var_core_value_sig21B2.sectionId))),
      startIndex: 2
    }]
  };
}
function Be(var_core_value_sig81B2, var_core_value_sigA0A5) {
  let var_core_value_sig10AA = R(var_core_value_sig81B2),
    var_core_value_sigE6D0 = Array.from({
      length: var_core_value_sigA0A5.columnCount
    }, (var_core_value_sigDE08, var_core_value_sigACCB) => var_core_value_sigA0A5.columnIds[var_core_value_sigACCB] ?? "column-" + (var_core_value_sigACCB + 1)),
    var_core_value_sig8E91 = O.COLUMN_GROUP_START,
    var_core_value_sig00BE = [];
  for (let var_core_value_sig7F33 = 0; var_core_value_sig7F33 < var_core_value_sigA0A5.columnCount; var_core_value_sig7F33++) var_core_value_sig8E91 += "" + O.COLUMN_START + var_core_value_sig1015.PARAGRAPH + O.COLUMN_END, var_core_value_sig00BE.push({
    startIndex: var_core_value_sig8E91.length - 2,
    paragraphId: var_core_value_sig9DBF(var_core_value_sig10AA)
  });
  var_core_value_sig8E91 += O.COLUMN_GROUP_END;
  let var_core_value_sig7BB5 = var_core_value_sig8E91.length - 1;
  return be(var_core_value_sig81B2, var_core_value_sigA0A5.offset) && (var_core_value_sig8E91 += var_core_value_sig1015.PARAGRAPH, var_core_value_sig00BE.push({
    startIndex: var_core_value_sig8E91.length - 1,
    paragraphId: var_core_value_sig9DBF(var_core_value_sig10AA)
  })), {
    dataStream: var_core_value_sig8E91,
    paragraphs: var_core_value_sig00BE,
    sectionBreaks: [],
    columnGroups: [{
      startIndex: 0,
      endIndex: var_core_value_sig7BB5,
      columnGroupId: var_core_value_sigA0A5.columnGroupId,
      columns: var_core_value_sigE6D0.map((var_core_value_sig0C53, var_core_value_sigEA04) => {
        var var_core_value_sig7A62;
        return {
          columnId: var_core_value_sig0C53,
          widthRatio: ((var_core_value_sig7A62 = var_core_value_sigA0A5.widthRatios) == null ? undefined : var_core_value_sig7A62[var_core_value_sigEA04]) ?? 1
        };
      }),
      gap: {
        v: Ue(var_core_value_sigA0A5.gap)
      },
      layout: var_core_value_sig58DB.FIXED,
      responsive: var_core_value_sig4840.STACK
    }]
  };
}
function Ve(var_core_value_sig6AAD) {
  var var_core_value_sig1157;
  return {
    dataStream: "" + var_core_value_sig1015.PARAGRAPH + var_core_value_sig1015.SECTION_BREAK,
    paragraphs: [{
      startIndex: 0,
      paragraphId: var_core_value_sig9DBF(R(var_core_value_sig6AAD))
    }],
    sectionBreaks: [{
      sectionId: var_core_value_sig36CC(new Set((var_core_value_sig1157 = var_core_value_sig6AAD.sectionBreaks) == null ? undefined : var_core_value_sig1157.map(var_core_value_sig8109 => var_core_value_sig8109.sectionId))),
      startIndex: 1
    }]
  };
}
function L(var_core_value_sigA694, var_core_value_sig18E01, var_core_value_sig0428) {
  let var_core_value_sigBE07 = new var_core_value_sig4494();
  return var_core_value_sigA694 > 0 && var_core_value_sigBE07.retain(var_core_value_sigA694), var_core_value_sig18E01 != null && var_core_value_sig18E01.dataStream["length"] && var_core_value_sigBE07.insert(var_core_value_sig18E01.dataStream["length"], var_core_value_sig18E01), var_core_value_sig0428 > 0 && var_core_value_sigBE07.delete(var_core_value_sig0428), var_core_value_sig8690.getInstance().editOp(var_core_value_sigBE07.serialize(), ["body"]);
}
function He(var_core_value_sig555F) {
  return var_core_value_sig555F.reduce((var_core_value_sig7565, var_core_value_sigD4FB) => var_core_value_sig8690.compose(var_core_value_sig7565, var_core_value_sigD4FB), null);
}
function R(var_core_value_sig3D6F) {
  return new Set((var_core_value_sig3D6F.paragraphs ?? []).map(var_core_value_sig3E71 => var_core_value_sig3E71.paragraphId));
}
function Ue(var_core_value_sig336C) {
  return typeof var_core_value_sig336C == "number" && Number.isFinite(var_core_value_sig336C) && var_core_value_sig336C >= 0 ? var_core_value_sig336C : 12;
}
function z(var_core_value_sig6E68) {
  return Array.isArray(var_core_value_sig6E68) ? var_core_value_sig6E68.map(var_core_value_sig01B3 => z(var_core_value_sig01B3)) : !var_core_value_sig6E68 || typeof var_core_value_sig6E68 != "object" ? var_core_value_sig6E68 : Object.fromEntries(Object.entries(var_core_value_sig6E68).map(([var_core_value_sig7442, var_core_value_sigDF87]) => [var_core_value_sig7442, z(var_core_value_sigDF87)]));
}
const We = {
    id: "doc.command.resize-column-group",
    type: var_core_value_sigB76D.COMMAND,
    handler: (var_core_value_sig8DFE, var_core_value_sig48EA) => {
      let var_core_value_sig5E16 = P(var_core_value_sig8DFE, var_core_value_sig48EA == null ? undefined : var_core_value_sig48EA.unitId);
      return !var_core_value_sig5E16 || !var_core_value_sig48EA ? false : F(var_core_value_sig5E16, Te(var_core_value_sig5E16.snapshot, var_core_value_sig48EA.columnGroupId, var_core_value_sig48EA.widthRatios), []);
    }
  },
  Ge = {
    id: "doc.command.add-column",
    type: var_core_value_sigB76D.COMMAND,
    handler: (var_core_value_sig09F3, var_core_value_sig4592) => {
      let var_core_value_sigC5C4 = P(var_core_value_sig09F3, var_core_value_sig4592 == null ? undefined : var_core_value_sig4592.unitId);
      if (!var_core_value_sigC5C4 || !var_core_value_sig4592) return false;
      let var_core_value_sig1617 = var_core_value_sig4592.columnId ?? var_core_value_sigA568(6);
      try {
        let var_core_value_sig9EE0 = Ee(var_core_value_sigC5C4.snapshot, var_core_value_sig4592.columnGroupId, var_core_value_sig4592.targetColumnId, var_core_value_sig4592.position, var_core_value_sig1617);
        return var_core_value_sig9EE0 ? F(var_core_value_sigC5C4, var_core_value_sig9EE0.actions, [{
          startOffset: var_core_value_sig9EE0.cursorOffset,
          endOffset: var_core_value_sig9EE0.cursorOffset,
          collapsed: true
        }]) : false;
      } catch {
        return false;
      }
    }
  },
  Ke = {
    id: "doc.command.delete-column",
    type: var_core_value_sigB76D.COMMAND,
    handler: (var_core_value_sig4169, var_core_value_sig6D19) => {
      let var_core_value_sig279C = P(var_core_value_sig4169, var_core_value_sig6D19 == null ? undefined : var_core_value_sig6D19.unitId);
      if (!var_core_value_sig279C || !var_core_value_sig6D19) return false;
      try {
        let var_core_value_sigF051 = De(var_core_value_sig279C.snapshot, var_core_value_sig6D19.columnGroupId, var_core_value_sig6D19.columnId);
        return var_core_value_sigF051 ? F(var_core_value_sig279C, var_core_value_sigF051.actions, [{
          startOffset: var_core_value_sigF051.cursorOffset,
          endOffset: var_core_value_sigF051.cursorOffset,
          collapsed: true
        }]) : false;
      } catch {
        return false;
      }
    }
  },
  qe = {
    id: "doc.command.delete-column-group",
    type: var_core_value_sigB76D.COMMAND,
    handler: (var_core_value_sigAC51, var_core_value_sig8986) => {
      let var_core_value_sigCAF7 = P(var_core_value_sigAC51, var_core_value_sig8986 == null ? undefined : var_core_value_sig8986.unitId);
      if (!var_core_value_sigCAF7 || !var_core_value_sig8986) return false;
      try {
        let var_core_value_sig0B45 = Ae(var_core_value_sigCAF7.snapshot, var_core_value_sig8986.columnGroupId);
        return var_core_value_sig0B45 ? F(var_core_value_sigCAF7, var_core_value_sig0B45.actions, [{
          startOffset: var_core_value_sig0B45.cursorOffset,
          endOffset: var_core_value_sig0B45.cursorOffset,
          collapsed: true
        }]) : false;
      } catch {
        return false;
      }
    }
  },
  Je = {
    id: "doc.command.normalize-column-groups",
    type: var_core_value_sigB76D.COMMAND,
    handler: (var_core_value_sigED1C, var_core_value_sig726E) => {
      let var_core_value_sig2CD3 = P(var_core_value_sigED1C, var_core_value_sig726E == null ? undefined : var_core_value_sig726E.unitId);
      return var_core_value_sig2CD3 ? F(var_core_value_sig2CD3, je(var_core_value_sig2CD3.snapshot)) : false;
    }
  },
  Ye = {
    id: "doc.command.insert-column-group",
    type: var_core_value_sigB76D.COMMAND,
    handler: (var_core_value_sig038E, var_core_value_sigAA1E) => {
      let var_core_value_sigC9F5 = Ze(var_core_value_sigAA1E),
        var_core_value_sig7EEA = P(var_core_value_sig038E, var_core_value_sigC9F5.unitId);
      if (!var_core_value_sig7EEA) return false;
      let var_core_value_sig59CE = et(var_core_value_sig038E, var_core_value_sig7EEA.unitId, var_core_value_sigC9F5);
      if (typeof var_core_value_sig59CE != "number") return false;
      let var_core_value_sig33C8 = B(var_core_value_sig7EEA.snapshot, var_core_value_sig59CE, {
          snapToParagraphEnd: true
        }),
        var_core_value_sig957F = Qe(var_core_value_sigC9F5),
        var_core_value_sig803B = var_core_value_sigC9F5.columnGroupId ?? var_core_value_sigA568(6),
        var_core_value_sig5830 = Array.from({
          length: var_core_value_sig957F
        }, (var_core_value_sig36F8, var_core_value_sig03E1) => {
          var var_core_value_sigBB57;
          return ((var_core_value_sigBB57 = var_core_value_sigC9F5.columnIds) == null ? undefined : var_core_value_sigBB57[var_core_value_sig03E1]) ?? var_core_value_sigA568(6);
        });
      try {
        let var_core_value_sig7C4A = ke(var_core_value_sig7EEA.snapshot, {
          columnGroupId: var_core_value_sig803B,
          columnIds: var_core_value_sig5830,
          columnCount: var_core_value_sig957F,
          offset: var_core_value_sig33C8,
          gap: var_core_value_sigC9F5.gap,
          widthRatios: var_core_value_sigC9F5.widthRatios
        });
        return var_core_value_sig7C4A ? F(var_core_value_sig7EEA, var_core_value_sig7C4A.actions, [{
          startOffset: var_core_value_sig7C4A.cursorOffset,
          endOffset: var_core_value_sig7C4A.cursorOffset,
          collapsed: true
        }]) : false;
      } catch {
        return false;
      }
    }
  };
function Xe(var_core_value_sig4A7C, var_core_value_sigF975) {
  return !var_core_value_sig4A7C || typeof var_core_value_sigF975 != "number" ? false : M(var_core_value_sig4A7C, B(var_core_value_sig4A7C, var_core_value_sigF975));
}
function B(var_core_value_sigCDAF, var_core_value_sigA298, var_core_value_sig0B40 = {}) {
  let var_core_value_sig330B = var_core_value_sigCDAF.body;
  if (!(var_core_value_sig330B != null && var_core_value_sig330B.dataStream)) return var_core_value_sigA298;
  if (nt(var_core_value_sigCDAF, var_core_value_sigA298)) return var_core_value_sigA298 + 1;
  if (!var_core_value_sig0B40.snapToParagraphEnd) return var_core_value_sigA298;
  let var_core_value_sig3625 = [...(var_core_value_sig330B.paragraphs ?? [])].sort((var_core_value_sigE799, var_core_value_sigB601) => var_core_value_sigE799.startIndex - var_core_value_sigB601.startIndex).find(var_core_value_sig8B71 => var_core_value_sigA298 <= var_core_value_sig8B71.startIndex && !it(var_core_value_sig330B.dataStream, var_core_value_sigA298, var_core_value_sig8B71.startIndex));
  return var_core_value_sig3625 ? var_core_value_sig3625.startIndex + 1 : var_core_value_sigA298;
}
function Ze(var_core_value_sig0B4E) {
  return typeof var_core_value_sig0B4E == "string" || typeof var_core_value_sig0B4E == "number" ? {
    value: var_core_value_sig0B4E
  } : var_core_value_sig0B4E ?? {};
}
function Qe(var_core_value_sig0E9F) {
  var var_core_value_sigE5BA;
  return var_core_value_sig0E9F.value == null ? var_core_value_sig0E9F.columnCount ?? Math.max(2, ((var_core_value_sigE5BA = var_core_value_sig0E9F.columnIds) == null ? undefined : var_core_value_sigE5BA.length) ?? 2) : $e(var_core_value_sig0E9F.value) ?? 2;
}
function $e(var_core_value_sig4A83) {
  let var_core_value_sig58AA = Number(var_core_value_sig4A83);
  return Number.isFinite(var_core_value_sig58AA) ? Math.max(2, Math.min(5, Math.trunc(var_core_value_sig58AA))) : null;
}
function et(var_core_value_sig84C4, var_core_value_sigB6F7, var_core_value_sigB495) {
  if (typeof var_core_value_sigB495.offset == "number") return var_core_value_sigB495.offset;
  let var_core_value_sig70D0 = var_core_value_sig8295(var_core_value_sig84C4, var_core_value_sigB6F7);
  if (var_core_value_sig70D0) return var_core_value_sig70D0.startOffset;
  let var_core_value_sig2A8A = tt(var_core_value_sig84C4);
  return !var_core_value_sig2A8A || var_core_value_sig2A8A.collapsed === false || var_core_value_sig2A8A.startOffset !== var_core_value_sig2A8A.endOffset ? null : var_core_value_sig2A8A.startOffset;
}
function tt(var_core_value_sig3782) {
  try {
    return var_core_value_sig3782.get(var_core_value_sig8507).getActiveTextRange() ?? null;
  } catch {
    return null;
  }
}
function nt(var_core_value_sigD22E, var_core_value_sig3455) {
  var var_core_value_sig5CEF;
  let var_core_value_sig43D5 = (var_core_value_sig5CEF = var_core_value_sigD22E.body) == null || (var_core_value_sig5CEF = var_core_value_sig5CEF.dataStream) == null ? undefined : var_core_value_sig5CEF[var_core_value_sig3455];
  return (var_core_value_sig43D5 === var_core_value_sig1015.TABLE_END || var_core_value_sig43D5 === O.COLUMN_GROUP_END || var_core_value_sig43D5 === var_core_value_sig1015.BLOCK_END) && M(var_core_value_sigD22E, var_core_value_sig3455 + 1);
}
const rt = new Set([var_core_value_sig1015.BLOCK_START, var_core_value_sig1015.BLOCK_END, O.COLUMN_GROUP_START, O.COLUMN_START, O.COLUMN_END, O.COLUMN_GROUP_END, var_core_value_sig1015.TABLE_START, var_core_value_sig1015.TABLE_ROW_START, var_core_value_sig1015.TABLE_CELL_START, var_core_value_sig1015.TABLE_CELL_END, var_core_value_sig1015.TABLE_ROW_END, var_core_value_sig1015.TABLE_END]);
function it(var_core_value_sig1395, var_core_value_sig9FA0, var_core_value_sig055E) {
  for (let var_core_value_sigAEFB = var_core_value_sig9FA0; var_core_value_sigAEFB <= var_core_value_sig055E; var_core_value_sigAEFB++) if (rt.has(var_core_value_sig1395[var_core_value_sigAEFB])) return true;
  return false;
}
function at(var_core_value_sig7C77) {
  let var_core_value_sig9578 = A(var_core_value_sig7C77.documentData),
    var_core_value_sigA2D3 = var_core_value_sig9578.body,
    var_core_value_sigC218 = k(var_core_value_sig9578, var_core_value_sig7C77.columnGroupId),
    var_core_value_sigADEC = var_core_value_sigC218 == null ? undefined : var_core_value_sigC218.source;
  if (!(var_core_value_sigA2D3 != null && var_core_value_sigA2D3.dataStream) || !var_core_value_sigC218 || !(var_core_value_sigADEC != null && var_core_value_sigADEC.columns)) throw Error("[DocsColumn]: Cannot insert a column into a missing column group.");
  lt(var_core_value_sigC218.columns["length"], var_core_value_sigADEC.columns["length"]);
  let var_core_value_sig3D8E = var_core_value_sigADEC.columns["findIndex"](var_core_value_sig826B => var_core_value_sig826B.columnId === var_core_value_sig7C77.targetColumnId),
    var_core_value_sig37E5 = var_core_value_sigC218.columns[var_core_value_sig3D8E];
  if (var_core_value_sig3D8E < 0 || !var_core_value_sig37E5) throw Error("[DocsColumn]: Cannot insert a column next to an unknown target column.");
  if (var_core_value_sigADEC.columns["length"] >= 5) throw Error("[DocsColumn]: Cannot add more than five columns.");
  let var_core_value_sigF079 = var_core_value_sig7C77.position === "left" ? var_core_value_sig3D8E : var_core_value_sig3D8E + 1,
    var_core_value_sigFCA0 = var_core_value_sig7C77.position === "left" ? var_core_value_sig37E5.startOffset : var_core_value_sig37E5.endOffset + 1,
    var_core_value_sigC84D = st(ct(var_core_value_sigA2D3)),
    var_core_value_sigF2BC = var_core_value_sigC84D.dataStream["length"];
  var_core_value_sigA2D3.dataStream = "" + var_core_value_sigA2D3.dataStream["slice"](0, var_core_value_sigFCA0) + var_core_value_sigC84D.dataStream + var_core_value_sigA2D3.dataStream["slice"](var_core_value_sigFCA0), var_core_value_sigA2D3.paragraphs = [...V(var_core_value_sigA2D3.paragraphs ?? [], var_core_value_sigFCA0, var_core_value_sigF2BC), ...var_core_value_sigC84D.paragraphs["map"](var_core_value_sigCF89 => ({
    ...var_core_value_sigCF89,
    startIndex: var_core_value_sigCF89.startIndex + var_core_value_sigFCA0
  }))].sort((var_core_value_sig00CB, var_core_value_sig77EE) => var_core_value_sig00CB.startIndex - var_core_value_sig77EE.startIndex), var_core_value_sigA2D3.sectionBreaks = [...V(var_core_value_sigA2D3.sectionBreaks ?? [], var_core_value_sigFCA0, var_core_value_sigF2BC), ...var_core_value_sigC84D.sectionBreaks["map"](var_core_value_sig9F76 => ({
    ...var_core_value_sig9F76,
    startIndex: var_core_value_sig9F76.startIndex + var_core_value_sigFCA0
  }))].sort((var_core_value_sigB008, var_core_value_sig8721) => var_core_value_sigB008.startIndex - var_core_value_sig8721.startIndex), var_core_value_sigA2D3.textRuns = ut(var_core_value_sigA2D3.textRuns ?? [], var_core_value_sigFCA0, var_core_value_sigF2BC), var_core_value_sigA2D3.customBlocks = V(var_core_value_sigA2D3.customBlocks ?? [], var_core_value_sigFCA0, var_core_value_sigF2BC), var_core_value_sigA2D3.blockRanges = (var_core_value_sigA2D3.blockRanges ?? []).map(var_core_value_sig08BA => var_core_value_sigE6D6(var_core_value_sig08BA, var_core_value_sigFCA0, var_core_value_sigF2BC)), var_core_value_sigA2D3.customRanges = (var_core_value_sigA2D3.customRanges ?? []).map(var_core_value_sigDBB5 => var_core_value_sigE6D6(var_core_value_sigDBB5, var_core_value_sigFCA0, var_core_value_sigF2BC)), var_core_value_sigA2D3.customDecorations = (var_core_value_sigA2D3.customDecorations ?? []).map(var_core_value_sigCFAC => var_core_value_sigE6D6(var_core_value_sigCFAC, var_core_value_sigFCA0, var_core_value_sigF2BC)), var_core_value_sigA2D3.tables = (var_core_value_sigA2D3.tables ?? []).map(var_core_value_sig237B => var_core_value_sig0A5A(var_core_value_sig237B, var_core_value_sigFCA0, var_core_value_sigF2BC)), var_core_value_sigA2D3.columnGroups = (var_core_value_sigA2D3.columnGroups ?? []).map(var_core_value_sigFEAB => var_core_value_sigE6D6(var_core_value_sigFEAB, var_core_value_sigFCA0, var_core_value_sigF2BC));
  let var_core_value_sigD37B = ot(var_core_value_sigA2D3, var_core_value_sig7C77.columnGroupId);
  if (!(var_core_value_sigD37B != null && var_core_value_sigD37B.columns)) throw Error("[DocsColumn]: Cannot update a missing column group after insertion.");
  return var_core_value_sigD37B.columns = [...var_core_value_sigADEC.columns["slice"](0, var_core_value_sigF079), {
    columnId: var_core_value_sig7C77.columnId,
    widthRatio: 1
  }, ...var_core_value_sigADEC.columns["slice"](var_core_value_sigF079)], {
    nextDocumentData: var_core_value_sig9578,
    inserted: {
      columnGroupId: var_core_value_sig7C77.columnGroupId,
      columnId: var_core_value_sig7C77.columnId,
      column: var_core_value_sigF079
    }
  };
}
function ot(var_core_value_sigFA28, var_core_value_sig93BE) {
  var var_core_value_sigABEC;
  return (var_core_value_sigABEC = var_core_value_sigFA28.columnGroups) == null ? undefined : var_core_value_sigABEC.find(var_core_value_sigE347 => var_core_value_sigE347.columnGroupId === var_core_value_sig93BE);
}
function st(var_core_value_sig2712) {
  return {
    dataStream: "" + O.COLUMN_START + var_core_value_sig1015.PARAGRAPH + var_core_value_sig1015.SECTION_BREAK + O.COLUMN_END,
    paragraphs: [{
      startIndex: 1,
      paragraphId: var_core_value_sig9DBF(var_core_value_sig2712)
    }],
    sectionBreaks: [{
      sectionId: var_core_value_sig36CC(new Set()),
      startIndex: 2
    }]
  };
}
function ct(var_core_value_sig0B9E) {
  return new Set((var_core_value_sig0B9E.paragraphs ?? []).map(var_core_value_sig3C5B => var_core_value_sig3C5B.paragraphId));
}
function lt(var_core_value_sigC545, var_core_value_sig12A7) {
  if (var_core_value_sigC545 !== var_core_value_sig12A7) throw Error("[DocsColumn]: Cannot edit a column group with mismatched source and stream columns.");
}
function V(var_core_value_sig6F4E, var_core_value_sigA021, var_core_value_sig49D9) {
  return var_core_value_sig6F4E.map(var_core_value_sig200B => var_core_value_sig200B.startIndex >= var_core_value_sigA021 ? {
    ...var_core_value_sig200B,
    startIndex: var_core_value_sig200B.startIndex + var_core_value_sig49D9
  } : var_core_value_sig200B);
}
function ut(var_core_value_sig320C, var_core_value_sigE7F0, var_core_value_sigE837) {
  return var_core_value_sig320C.map(var_core_value_sig3863 => var_core_value_sig3863.st >= var_core_value_sigE7F0 ? {
    ...var_core_value_sig3863,
    st: var_core_value_sig3863.st + var_core_value_sigE837,
    ed: var_core_value_sig3863.ed + var_core_value_sigE837
  } : var_core_value_sig3863.ed > var_core_value_sigE7F0 ? {
    ...var_core_value_sig3863,
    ed: var_core_value_sig3863.ed + var_core_value_sigE837
  } : var_core_value_sig3863);
}
function dt(var_core_value_sig34F4) {
  var var_core_value_sigA45D;
  let var_core_value_sig1BC7 = var_core_value_sig34F4.source["columns"],
    var_core_value_sig4956 = var_core_value_sig34F4.separatorIndex;
  if (var_core_value_sig1BC7.length < 2 || var_core_value_sig4956 < 0 || var_core_value_sig4956 >= var_core_value_sig1BC7.length - 1) return null;
  let var_core_value_sigCC9E = Math.max(0, ((var_core_value_sigA45D = var_core_value_sig34F4.source["gap"]) == null ? undefined : var_core_value_sigA45D.v) ?? 0),
    var_core_value_sig444C = Math.max(0, var_core_value_sig34F4.availableWidth - var_core_value_sigCC9E * (var_core_value_sig1BC7.length - 1)),
    var_core_value_sigE42E = ft(var_core_value_sig1BC7.map(var_core_value_sigC97C => var_core_value_sigC97C.widthRatio), var_core_value_sig444C),
    var_core_value_sigF039 = var_core_value_sig1BC7.map(var_core_value_sigC4B1 => {
      var var_core_value_sig1BD9;
      return Math.max(0, ((var_core_value_sig1BD9 = var_core_value_sigC4B1.minWidth) == null ? undefined : var_core_value_sig1BD9.v) ?? 0);
    }),
    var_core_value_sigA321 = var_core_value_sig4956,
    var_core_value_sigBF4C = var_core_value_sig4956 + 1,
    var_core_value_sig3457 = var_core_value_sigE42E[var_core_value_sigA321] + var_core_value_sigE42E[var_core_value_sigBF4C],
    var_core_value_sig4A08 = Math.min(var_core_value_sigF039[var_core_value_sigA321], var_core_value_sig3457),
    var_core_value_sig1BC4 = Math.min(var_core_value_sigF039[var_core_value_sigBF4C], Math.max(0, var_core_value_sig3457 - var_core_value_sig4A08)),
    var_core_value_sig9EAB = mt(var_core_value_sigE42E[var_core_value_sigA321] + var_core_value_sig34F4.delta, var_core_value_sig4A08, Math.max(var_core_value_sig4A08, var_core_value_sig3457 - var_core_value_sig1BC4));
  return var_core_value_sigE42E[var_core_value_sigA321] = var_core_value_sig9EAB, var_core_value_sigE42E[var_core_value_sigBF4C] = var_core_value_sig3457 - var_core_value_sig9EAB, var_core_value_sigE42E;
}
function ft(var_core_value_sigA5C3, var_core_value_sig3A1E) {
  let var_core_value_sigDC92 = var_core_value_sigA5C3.reduce((var_core_value_sigE43E, var_core_value_sigA937) => var_core_value_sigE43E + pt(var_core_value_sigA937), 0) || var_core_value_sigA5C3.length;
  return var_core_value_sigA5C3.map(var_core_value_sigCAD5 => var_core_value_sig3A1E * pt(var_core_value_sigCAD5) / var_core_value_sigDC92);
}
function pt(var_core_value_sig3515) {
  return Math.max(0, var_core_value_sig3515 || 0) || 1;
}
function mt(var_core_value_sigC2A0, var_core_value_sig7C65, var_core_value_sig7F05) {
  return Math.min(var_core_value_sig7F05, Math.max(var_core_value_sig7C65, var_core_value_sigC2A0));
}
function ht(var_core_value_sig41F3, var_core_value_sigF455, var_core_value_sig6E78) {
  let {
    docsLeft: var_core_value_sigB3EE = 0,
    pageMarginTop: var_core_value_sigC50A = 0,
    tableCellInsetX: var_core_value_sig11D0 = 0,
    unitId: var_core_value_sigB8ED = ""
  } = var_core_value_sigF455;
  var_core_value_sig41F3.forEach((var_core_value_sigE503, var_core_value_sig48DD) => {
    var var_core_value_sig5E6A;
    let var_core_value_sigB7FC = ((var_core_value_sigE503.pageHeight === 1 / 0 ? 0 : var_core_value_sigE503.pageHeight) + var_core_value_sigC50A) * var_core_value_sig48DD + var_core_value_sigE503.marginTop,
      var_core_value_sig9CD9 = var_core_value_sigE503.marginLeft;
    H(var_core_value_sigE503, {
      pageIndex: var_core_value_sig48DD,
      pageLeft: var_core_value_sig9CD9,
      pageTop: var_core_value_sigB7FC,
      source: "page",
      getBounds: (var_core_value_sigF230, var_core_value_sig09B8, var_core_value_sig6F91) => yt(var_core_value_sigF230, var_core_value_sig09B8, var_core_value_sig6F91.columns["length"], var_core_value_sig9CD9)
    }, var_core_value_sig6E78), (var_core_value_sig5E6A = var_core_value_sigE503.skeTables) == null || var_core_value_sig5E6A.forEach((var_core_value_sigF9C7, var_core_value_sig8895) => {
      _t(var_core_value_sigF9C7, var_core_value_sig8895, var_core_value_sig48DD, var_core_value_sig9CD9, var_core_value_sigB7FC, var_core_value_sigB3EE, var_core_value_sig11D0, var_core_value_sigB8ED, var_core_value_sig6E78);
    }), vt(var_core_value_sigE503, var_core_value_sig9CD9, var_core_value_sigB7FC, (var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632) => {
      var var_core_value_sig12F2;
      H(var_core_value_sigC80B, {
        pageIndex: var_core_value_sig48DD,
        pageLeft: var_core_value_sig284F,
        pageTop: var_core_value_sigE154,
        source: "column",
        getBounds: (var_core_value_sig2AD8, var_core_value_sig2AD0) => ({
          lineWidth: Math.max(W(var_core_value_sig2AD0.width), var_core_value_sig4632 - var_core_value_sig2AD0.left),
          visualLeft: var_core_value_sig284F + var_core_value_sig2AD0.left,
          visualWidth: Math.max(W(var_core_value_sig2AD0.width), var_core_value_sig4632 - var_core_value_sig2AD0.left)
        })
      }, var_core_value_sig6E78), (var_core_value_sig12F2 = var_core_value_sigC80B.skeTables) == null || var_core_value_sig12F2.forEach((var_core_value_sig3EEE, var_core_value_sigBC46) => {
        _t(var_core_value_sig3EEE, var_core_value_sigBC46, var_core_value_sig48DD, var_core_value_sig284F, var_core_value_sigE154, var_core_value_sigB3EE, var_core_value_sig11D0, var_core_value_sigB8ED, var_core_value_sig6E78);
      });
    });
  });
}
function gt(var_core_value_sig8EAE, var_core_value_sig1CDD = {}) {
  let {
      docsLeft: var_core_value_sigCC17 = 0,
      docsTop: var_core_value_sig32AE = 0,
      pageMarginTop: var_core_value_sigC753 = 0,
      resolveViewport: var_core_value_sigFFD1 = false,
      skeFooters: var_core_value_sig0DB1,
      skeHeaders: var_core_value_sig68A2,
      tableCellInsetX: var_core_value_sig81AE = 0,
      unitId: var_core_value_sigF79F = ""
    } = var_core_value_sig1CDD,
    var_core_value_sig0E54 = [];
  return var_core_value_sig8EAE.forEach((var_core_value_sigFD0C, var_core_value_sig849B) => {
    var var_core_value_sig5F1A, var_core_value_sigB455;
    let var_core_value_sig5241 = ((var_core_value_sigFD0C.pageHeight === 1 / 0 ? 0 : var_core_value_sigFD0C.pageHeight) + var_core_value_sigC753) * var_core_value_sig849B + var_core_value_sigFD0C.marginTop + var_core_value_sig32AE,
      var_core_value_sigC6E5 = var_core_value_sigFD0C.marginLeft + var_core_value_sigCC17;
    U({
      contexts: var_core_value_sig0E54,
      docsLeft: var_core_value_sigCC17,
      page: var_core_value_sigFD0C,
      pageIndex: var_core_value_sig849B,
      pageLeft: var_core_value_sigC6E5,
      pageTop: var_core_value_sig5241,
      rootPage: var_core_value_sigFD0C,
      resolveViewport: var_core_value_sigFFD1,
      source: "page",
      tableCellInsetX: var_core_value_sig81AE,
      unitId: var_core_value_sigF79F
    });
    let var_core_value_sigCEFB = var_core_value_sig5241 - var_core_value_sigFD0C.marginTop,
      var_core_value_sig1537 = var_core_value_sigCC17 + var_core_value_sigFD0C.marginLeft,
      var_core_value_sigE4C6 = var_core_value_sigFD0C.headerId == null || var_core_value_sig68A2 == null || (var_core_value_sig5F1A = var_core_value_sig68A2.get(var_core_value_sigFD0C.headerId)) == null ? undefined : var_core_value_sig5F1A.get(var_core_value_sigFD0C.pageWidth);
    var_core_value_sigE4C6 != null && U({
      contexts: var_core_value_sig0E54,
      docsLeft: var_core_value_sigCC17,
      page: var_core_value_sigE4C6,
      pageIndex: var_core_value_sig849B,
      pageLeft: var_core_value_sig1537,
      pageTop: var_core_value_sigCEFB + var_core_value_sigE4C6.marginTop,
      rootPage: var_core_value_sigFD0C,
      resolveViewport: var_core_value_sigFFD1,
      source: "header",
      tableCellInsetX: var_core_value_sig81AE,
      unitId: var_core_value_sigF79F
    });
    let var_core_value_sig4313 = var_core_value_sigFD0C.footerId == null || var_core_value_sig0DB1 == null || (var_core_value_sigB455 = var_core_value_sig0DB1.get(var_core_value_sigFD0C.footerId)) == null ? undefined : var_core_value_sigB455.get(var_core_value_sigFD0C.pageWidth);
    var_core_value_sig4313 != null && U({
      contexts: var_core_value_sig0E54,
      docsLeft: var_core_value_sigCC17,
      page: var_core_value_sig4313,
      pageIndex: var_core_value_sig849B,
      pageLeft: var_core_value_sig1537,
      pageTop: var_core_value_sigCEFB + var_core_value_sigFD0C.pageHeight - var_core_value_sig4313.height - var_core_value_sig4313.marginBottom + var_core_value_sig4313.marginTop,
      rootPage: var_core_value_sigFD0C,
      resolveViewport: var_core_value_sigFFD1,
      source: "footer",
      tableCellInsetX: var_core_value_sig81AE,
      unitId: var_core_value_sigF79F
    }), vt(var_core_value_sigFD0C, var_core_value_sigC6E5, var_core_value_sig5241, (var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082) => {
      U({
        contexts: var_core_value_sig0E54,
        docsLeft: var_core_value_sigCC17,
        page: var_core_value_sig2259,
        pageIndex: var_core_value_sig849B,
        pageLeft: var_core_value_sig9E2F,
        pageTop: var_core_value_sigD082,
        rootPage: var_core_value_sigFD0C,
        resolveViewport: var_core_value_sigFFD1,
        source: "column",
        tableCellInsetX: var_core_value_sig81AE,
        unitId: var_core_value_sigF79F
      });
    });
  }), var_core_value_sig0E54;
}
function _t(var_core_value_sig3B17, var_core_value_sig6C4A, var_core_value_sig73D9, var_core_value_sigEAF8, var_core_value_sig0455, var_core_value_sig737C, var_core_value_sig5AF5, var_core_value_sig9DE4, var_core_value_sig77FA) {
  let var_core_value_sigA4A7 = var_core_value_sigA975(var_core_value_sig9DE4, Ct(var_core_value_sig3B17.tableId ?? var_core_value_sig6C4A)),
    var_core_value_sigA4DF = xt(var_core_value_sigA4A7),
    var_core_value_sigCC9D = St(var_core_value_sigEAF8, var_core_value_sig3B17.left, var_core_value_sigA4A7, var_core_value_sig737C),
    var_core_value_sig90F5 = var_core_value_sigCC9D + (var_core_value_sigA4DF ? var_core_value_sigA4A7.viewportWidth : var_core_value_sig3B17.width),
    var_core_value_sigD2BA = var_core_value_sigA4DF ? var_core_value_sigA4A7.scrollLeft : 0,
    var_core_value_sigCD3A = var_core_value_sigEAF8 + var_core_value_sig3B17.left,
    var_core_value_sig519D = var_core_value_sig0455 + var_core_value_sig3B17.top;
  var_core_value_sig3B17.rows["forEach"](var_core_value_sigFC87 => {
    var_core_value_sigFC87.cells["forEach"](var_core_value_sigDBB7 => {
      let var_core_value_sigD0A8 = var_core_value_sigDBB7.marginLeft ?? 0,
        var_core_value_sigF4B9 = var_core_value_sigDBB7.marginRight ?? 0,
        var_core_value_sig5CEE = var_core_value_sigDBB7.marginTop ?? 0,
        var_core_value_sigE92A = var_core_value_sigDBB7.pageWidth ?? 0,
        var_core_value_sig362B = var_core_value_sigCD3A + (var_core_value_sigDBB7.left ?? 0) - var_core_value_sigD2BA + var_core_value_sigD0A8,
        var_core_value_sig5CA5 = var_core_value_sig519D + (var_core_value_sigFC87.top ?? 0) + var_core_value_sig5CEE,
        var_core_value_sigE90F = var_core_value_sig362B + var_core_value_sigE92A - var_core_value_sigD0A8 - var_core_value_sigF4B9,
        var_core_value_sigEFD4 = var_core_value_sig362B + var_core_value_sig5AF5,
        var_core_value_sig861B = var_core_value_sigE90F - var_core_value_sig5AF5,
        var_core_value_sig5237 = Math.max(0, var_core_value_sig861B - var_core_value_sigEFD4),
        var_core_value_sigBB00 = var_core_value_sigCC9D,
        var_core_value_sig7E54 = Math.min(var_core_value_sigE90F, var_core_value_sig90F5);
      var_core_value_sig5237 <= 0 || Math.min(var_core_value_sig861B, var_core_value_sig7E54) <= Math.max(var_core_value_sigEFD4, var_core_value_sigBB00) || H(var_core_value_sigDBB7, {
        clipLeft: var_core_value_sigBB00,
        clipRight: var_core_value_sig7E54,
        pageIndex: var_core_value_sig73D9,
        pageLeft: var_core_value_sig362B,
        pageTop: var_core_value_sig5CA5,
        source: "table",
        visualLeft: var_core_value_sigEFD4,
        visualWidth: var_core_value_sig5237
      }, var_core_value_sig77FA);
    });
  });
}
function H(var_core_value_sigC7E7, var_core_value_sig6E1C, var_core_value_sigFABC) {
  var_core_value_sigC7E7.sections["forEach"](var_core_value_sig156F => {
    var_core_value_sig156F.columns["forEach"](var_core_value_sig9A8D => {
      var_core_value_sig9A8D.lines["forEach"](var_core_value_sig3D7D => {
        var var_core_value_sig27E5;
        let var_core_value_sig8061 = (var_core_value_sig27E5 = var_core_value_sig6E1C.getBounds) == null ? undefined : var_core_value_sig27E5.call(var_core_value_sig6E1C, var_core_value_sigC7E7, var_core_value_sig9A8D, var_core_value_sig156F);
        var_core_value_sigFABC({
          clipLeft: var_core_value_sig6E1C.clipLeft,
          clipRight: var_core_value_sig6E1C.clipRight,
          column: var_core_value_sig9A8D,
          line: var_core_value_sig3D7D,
          lineWidth: (var_core_value_sig8061 == null ? undefined : var_core_value_sig8061.lineWidth) ?? (var_core_value_sig8061 == null ? undefined : var_core_value_sig8061.visualWidth) ?? W(var_core_value_sig9A8D.width),
          page: var_core_value_sigC7E7,
          pageIndex: var_core_value_sig6E1C.pageIndex,
          pageLeft: var_core_value_sig6E1C.pageLeft,
          section: var_core_value_sig156F,
          sectionTop: var_core_value_sig6E1C.pageTop + var_core_value_sig156F.top,
          source: var_core_value_sig6E1C.source,
          visualLeft: (var_core_value_sig8061 == null ? undefined : var_core_value_sig8061.visualLeft) ?? var_core_value_sig6E1C.visualLeft,
          visualWidth: (var_core_value_sig8061 == null ? undefined : var_core_value_sig8061.visualWidth) ?? var_core_value_sig6E1C.visualWidth
        });
      });
    });
  });
}
function U(var_core_value_sig413D) {
  var var_core_value_sig5BCE;
  let {
    contexts: var_core_value_sig8EF0,
    docsLeft: var_core_value_sig78AC,
    page: var_core_value_sig4CEF,
    pageIndex: var_core_value_sigD57D,
    pageLeft: var_core_value_sig2CC7,
    pageTop: var_core_value_sig4784,
    resolveViewport: var_core_value_sigC39E,
    rootPage: var_core_value_sig16C7,
    source: var_core_value_sig7481,
    tableCellInsetX: var_core_value_sig08A3,
    unitId: var_core_value_sig77D8
  } = var_core_value_sig413D;
  (var_core_value_sig5BCE = var_core_value_sig4CEF.skeTables) == null || var_core_value_sig5BCE.forEach((var_core_value_sigDD51, var_core_value_sigF057) => {
    let var_core_value_sig72F6 = var_core_value_sigDD51.tableId ?? var_core_value_sigF057,
      var_core_value_sig9FBA = var_core_value_sig2CC7 + var_core_value_sigDD51.left,
      var_core_value_sigFE01 = var_core_value_sig4784 + var_core_value_sigDD51.top,
      var_core_value_sigA2CE = Ct(var_core_value_sig72F6),
      var_core_value_sig1975 = var_core_value_sigC39E ? var_core_value_sigA975(var_core_value_sig77D8, var_core_value_sigA2CE) : null,
      var_core_value_sig6EA1 = xt(var_core_value_sig1975),
      var_core_value_sig029F = St(var_core_value_sig2CC7, var_core_value_sigDD51.left, var_core_value_sig1975, var_core_value_sig78AC),
      var_core_value_sig3767 = var_core_value_sig029F + (var_core_value_sig6EA1 ? var_core_value_sig1975.viewportWidth : var_core_value_sigDD51.width),
      var_core_value_sig670B = var_core_value_sig6EA1 ? var_core_value_sig1975.scrollLeft : 0,
      var_core_value_sig6912 = [];
    var_core_value_sigDD51.rows["forEach"]((var_core_value_sigC259, var_core_value_sig9C9F) => {
      var_core_value_sigC259.cells["forEach"]((var_core_value_sig4D4C, var_core_value_sigC9E0) => {
        if (var_core_value_sig4D4C.isMergedCellCovered) return;
        let var_core_value_sig76BA = var_core_value_sig4D4C.marginLeft ?? 0,
          var_core_value_sigFBFA = var_core_value_sig4D4C.marginRight ?? 0,
          var_core_value_sigF602 = var_core_value_sig4D4C.marginTop ?? 0,
          var_core_value_sig1BBD = var_core_value_sig4D4C.marginBottom ?? 0,
          var_core_value_sigF704 = var_core_value_sig4D4C.pageWidth ?? 0,
          var_core_value_sig2BCF = var_core_value_sig4D4C.pageHeight ?? 0,
          var_core_value_sig0D69 = var_core_value_sigFE01 + (var_core_value_sigC259.top ?? 0) + var_core_value_sigF602,
          var_core_value_sig480E = var_core_value_sig9FBA + (var_core_value_sig4D4C.left ?? 0) - var_core_value_sig670B + var_core_value_sig76BA,
          var_core_value_sig26DB = var_core_value_sig480E + var_core_value_sigF704 - var_core_value_sig76BA - var_core_value_sigFBFA,
          var_core_value_sigF0F9 = var_core_value_sig480E + var_core_value_sig08A3,
          var_core_value_sig1A0F = var_core_value_sig26DB - var_core_value_sig08A3,
          var_core_value_sigFBA4 = Math.max(0, var_core_value_sig1A0F - var_core_value_sigF0F9),
          var_core_value_sig4383 = var_core_value_sig029F,
          var_core_value_sig186C = Math.min(var_core_value_sig26DB, var_core_value_sig3767);
        var_core_value_sigFBA4 <= 0 || Math.min(var_core_value_sig1A0F, var_core_value_sig186C) <= Math.max(var_core_value_sigF0F9, var_core_value_sig4383) || var_core_value_sig6912.push({
          cell: var_core_value_sig4D4C,
          cellRect: {
            bottom: var_core_value_sig0D69 + var_core_value_sig2BCF - var_core_value_sig1BBD - var_core_value_sigF602,
            left: var_core_value_sig480E,
            right: var_core_value_sig26DB,
            top: var_core_value_sig0D69
          },
          clipLeft: var_core_value_sig4383,
          clipRight: var_core_value_sig186C,
          columnIndex: var_core_value_sigC9E0,
          pageLeft: var_core_value_sig480E,
          pageTop: var_core_value_sig0D69,
          row: var_core_value_sigC259,
          rowIndex: var_core_value_sig9C9F,
          visualLeft: var_core_value_sigF0F9,
          visualWidth: var_core_value_sigFBA4
        });
      });
    }), var_core_value_sig8EF0.push({
      cells: var_core_value_sig6912,
      page: var_core_value_sig4CEF,
      pageIndex: var_core_value_sigD57D,
      pageLeft: var_core_value_sig2CC7,
      pageTop: var_core_value_sig4784,
      rootPage: var_core_value_sig16C7,
      source: var_core_value_sig7481,
      table: var_core_value_sigDD51,
      tableId: var_core_value_sig72F6,
      tableRect: {
        bottom: var_core_value_sigFE01 + var_core_value_sigDD51.height,
        left: var_core_value_sig9FBA,
        right: var_core_value_sig9FBA + var_core_value_sigDD51.width,
        top: var_core_value_sigFE01
      }
    });
  });
}
function vt(var_core_value_sig78A3, var_core_value_sig649B, var_core_value_sig6256, var_core_value_sigE7A6) {
  var var_core_value_sigB505;
  (var_core_value_sigB505 = var_core_value_sig78A3.skeColumnGroups) == null || var_core_value_sigB505.forEach(var_core_value_sigE235 => {
    var_core_value_sigE235.columns["forEach"](var_core_value_sigFDEA => {
      let var_core_value_sig86D0 = Math.max(0, (var_core_value_sigFDEA.width ?? var_core_value_sigFDEA.page["pageWidth"] ?? 0) - var_core_value_sigFDEA.page["marginLeft"] - var_core_value_sigFDEA.page["marginRight"]);
      var_core_value_sigE7A6(var_core_value_sigFDEA.page, var_core_value_sig649B + var_core_value_sigE235.left + var_core_value_sigFDEA.left + var_core_value_sigFDEA.page["marginLeft"], var_core_value_sig6256 + var_core_value_sigE235.top + var_core_value_sigFDEA.top + var_core_value_sigFDEA.page["marginTop"], var_core_value_sig86D0);
    });
  });
}
function yt(var_core_value_sig7428, var_core_value_sig1DCE, var_core_value_sig0567, var_core_value_sigA7F3) {
  if (var_core_value_sig0567 !== 1 || !Number.isFinite(var_core_value_sig7428.pageWidth)) return;
  let var_core_value_sigEACD = var_core_value_sigA7F3 + var_core_value_sig1DCE.left,
    var_core_value_sig901E = var_core_value_sig7428.pageWidth - var_core_value_sig7428.marginRight,
    var_core_value_sigF7BB = Math.max(0, var_core_value_sig901E - var_core_value_sigEACD),
    var_core_value_sigFA38 = Math.max(0, var_core_value_sig7428.pageWidth - var_core_value_sig7428.marginLeft - var_core_value_sig7428.marginRight);
  return var_core_value_sigF7BB > 0 ? {
    lineWidth: var_core_value_sigFA38,
    visualLeft: var_core_value_sigEACD,
    visualWidth: var_core_value_sigF7BB
  } : undefined;
}
function W(var_core_value_sig102B) {
  return Number.isFinite(var_core_value_sig102B) ? var_core_value_sig102B : 0;
}
function bt(var_core_value_sigA7DB) {
  return (var_core_value_sigA7DB.leadingInsetLeft ?? 0) + var_core_value_sigA7DB.contentWidth + (var_core_value_sigA7DB.trailingInsetRight ?? 0);
}
function xt(var_core_value_sig5EEE) {
  return var_core_value_sig5EEE != null && bt(var_core_value_sig5EEE) > var_core_value_sig5EEE.viewportWidth;
}
function St(var_core_value_sig65B4, var_core_value_sigF98E, var_core_value_sigA470, var_core_value_sig19A1) {
  let var_core_value_sig81F7 = var_core_value_sigA470 == null ? undefined : var_core_value_sigA470.viewportLeft;
  return var_core_value_sig81F7 == null ? var_core_value_sig65B4 + var_core_value_sigF98E : var_core_value_sig81F7 - var_core_value_sig19A1;
}
function Ct(var_core_value_sigBE51) {
  return var_core_value_sigBE51.includes("#-#") ? var_core_value_sigBE51.split("#-#")[0] : var_core_value_sigBE51;
}
function wt(var_core_value_sigAAD1) {
  let var_core_value_sigBC1A = A(var_core_value_sigAAD1),
    var_core_value_sig3F3A = var_core_value_sigBC1A.body;
  if (!var_core_value_sig3F3A) return {
    nextDocumentData: var_core_value_sigBC1A,
    changed: false
  };
  var_core_value_sig3F3A.dataStream ??= "";
  let var_core_value_sigA984 = Tt(var_core_value_sigBC1A);
  var_core_value_sigA984 = Et(var_core_value_sigBC1A) || var_core_value_sigA984;
  let var_core_value_sigA504 = var_core_value_sig3F3A.columnGroups ?? [];
  if (var_core_value_sigA504.length === 0) return var_core_value_sigA984 = Nt(var_core_value_sigBC1A) || var_core_value_sigA984, {
    nextDocumentData: var_core_value_sigBC1A,
    changed: var_core_value_sigA984
  };
  for (let var_core_value_sig7664 of var_core_value_sigA504) var_core_value_sigA984 = Pt(var_core_value_sig7664, var_core_value_sig3F3A.dataStream) || var_core_value_sigA984;
  return var_core_value_sigA984 = Nt(var_core_value_sigBC1A) || var_core_value_sigA984, {
    nextDocumentData: var_core_value_sigBC1A,
    changed: var_core_value_sigA984
  };
}
function Tt(var_core_value_sig05FF) {
  let var_core_value_sigFBF0 = var_core_value_sig05FF.body,
    var_core_value_sig2F95 = Dt((var_core_value_sigFBF0 == null ? undefined : var_core_value_sigFBF0.columnGroups) ?? []);
  return !(var_core_value_sigFBF0 != null && var_core_value_sigFBF0.dataStream) || var_core_value_sig2F95.length === 0 ? false : (var_core_value_sig2F95.sort((var_core_value_sig2281, var_core_value_sig5E86) => var_core_value_sig5E86.startIndex - var_core_value_sig2281.startIndex).forEach(var_core_value_sig6998 => Ot(var_core_value_sig05FF, var_core_value_sig6998)), true);
}
function Et(var_core_value_sigF0E1) {
  let var_core_value_sig2D8D = var_core_value_sigF0E1.body,
    var_core_value_sigE5A6 = (var_core_value_sig2D8D == null ? undefined : var_core_value_sig2D8D.columnGroups) ?? [];
  if (!(var_core_value_sig2D8D != null && var_core_value_sig2D8D.dataStream) || var_core_value_sigE5A6.length === 0) return false;
  let var_core_value_sigF449 = var_core_value_sigE5A6.filter(var_core_value_sigF639 => zt(var_core_value_sig2D8D.dataStream, var_core_value_sigF639.startIndex, var_core_value_sigF639.endIndex));
  return var_core_value_sigF449.length === 0 ? false : (var_core_value_sigF449.sort((var_core_value_sigEAE5, var_core_value_sigE94C) => var_core_value_sigE94C.startIndex - var_core_value_sigEAE5.startIndex).forEach(var_core_value_sig6D47 => kt(var_core_value_sigF0E1, var_core_value_sig6D47)), true);
}
function Dt(var_core_value_sig38C5) {
  return (var_core_value_sig38C5 ?? []).filter(var_core_value_sigCB82 => (var_core_value_sig38C5 ?? []).some(var_core_value_sig4CD2 => var_core_value_sig4CD2.columnGroupId !== var_core_value_sigCB82.columnGroupId && var_core_value_sigCB82.startIndex > var_core_value_sig4CD2.startIndex && var_core_value_sigCB82.endIndex < var_core_value_sig4CD2.endIndex));
}
function Ot(var_core_value_sigC87D, var_core_value_sigCCDC) {
  kt(var_core_value_sigC87D, var_core_value_sigCCDC);
}
function kt(var_core_value_sigC310, var_core_value_sigA4E8) {
  let var_core_value_sigDC07 = var_core_value_sigC310.body,
    var_core_value_sig3474 = var_core_value_sig85D5(var_core_value_sigA4E8).endOffset,
    var_core_value_sig4E80 = At(var_core_value_sigDC07.dataStream, var_core_value_sigA4E8.startIndex, var_core_value_sig3474);
  var_core_value_sigDC07.dataStream = jt(var_core_value_sigDC07.dataStream, var_core_value_sig4E80), var_core_value_sigDC07.paragraphs = G(var_core_value_sigDC07.paragraphs ?? [], var_core_value_sig4E80), var_core_value_sigDC07.sectionBreaks = G(var_core_value_sigDC07.sectionBreaks ?? [], var_core_value_sig4E80), var_core_value_sigDC07.customBlocks = G(var_core_value_sigDC07.customBlocks ?? [], var_core_value_sig4E80), var_core_value_sigDC07.blockRanges = K(var_core_value_sigDC07.blockRanges ?? [], var_core_value_sig4E80), var_core_value_sigDC07.customRanges = K(var_core_value_sigDC07.customRanges ?? [], var_core_value_sig4E80), var_core_value_sigDC07.customDecorations = K(var_core_value_sigDC07.customDecorations ?? [], var_core_value_sig4E80), var_core_value_sigDC07.tables = K(var_core_value_sigDC07.tables ?? [], var_core_value_sig4E80), var_core_value_sigDC07.columnGroups = K((var_core_value_sigDC07.columnGroups ?? []).filter(var_core_value_sigCF4E => var_core_value_sigCF4E.columnGroupId !== var_core_value_sigA4E8.columnGroupId), var_core_value_sig4E80), var_core_value_sigDC07.textRuns = Mt(var_core_value_sigDC07.textRuns ?? [], var_core_value_sig4E80);
}
function At(var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C) {
  let var_core_value_sig7D42 = new Set([O.COLUMN_GROUP_START, O.COLUMN_START, O.COLUMN_END, O.COLUMN_GROUP_END]),
    var_core_value_sig8FDE = [];
  for (let var_core_value_sig6CAD = var_core_value_sig2B2A; var_core_value_sig6CAD < var_core_value_sig0B5C; var_core_value_sig6CAD++) var_core_value_sig7D42.has(var_core_value_sigD23B[var_core_value_sig6CAD]) && var_core_value_sig8FDE.push(var_core_value_sig6CAD);
  return var_core_value_sig8FDE;
}
function jt(var_core_value_sig78E6, var_core_value_sig541F) {
  let var_core_value_sig417B = new Set(var_core_value_sig541F),
    var_core_value_sigAA90 = "";
  for (let var_core_value_sig8CF5 = 0; var_core_value_sig8CF5 < var_core_value_sig78E6.length; var_core_value_sig8CF5++) var_core_value_sig417B.has(var_core_value_sig8CF5) || (var_core_value_sigAA90 += var_core_value_sig78E6[var_core_value_sig8CF5]);
  return var_core_value_sigAA90;
}
function G(var_core_value_sigE92D, var_core_value_sig9940) {
  return var_core_value_sigE92D.map(var_core_value_sigDDD7 => ({
    ...var_core_value_sigDDD7,
    startIndex: q(var_core_value_sigDDD7.startIndex, var_core_value_sig9940)
  })).sort((var_core_value_sigB2CE, var_core_value_sig443C) => var_core_value_sigB2CE.startIndex - var_core_value_sig443C.startIndex);
}
function K(var_core_value_sig682D, var_core_value_sig1435) {
  return var_core_value_sig682D.map(var_core_value_sig39B1 => ({
    ...var_core_value_sig39B1,
    startIndex: q(var_core_value_sig39B1.startIndex, var_core_value_sig1435),
    endIndex: q(var_core_value_sig39B1.endIndex, var_core_value_sig1435)
  })).sort((var_core_value_sig210D, var_core_value_sigB4B4) => var_core_value_sig210D.startIndex - var_core_value_sigB4B4.startIndex);
}
function Mt(var_core_value_sig4082, var_core_value_sigC049) {
  return var_core_value_sig4082.map(var_core_value_sigD407 => ({
    ...var_core_value_sigD407,
    st: q(var_core_value_sigD407.st, var_core_value_sigC049),
    ed: q(var_core_value_sigD407.ed, var_core_value_sigC049)
  })).sort((var_core_value_sig63F3, var_core_value_sig6A71) => var_core_value_sig63F3.st - var_core_value_sig6A71.st);
}
function q(var_core_value_sigE5C3, var_core_value_sigCCAA) {
  return var_core_value_sigE5C3 - var_core_value_sigCCAA.filter(var_core_value_sig3BF6 => var_core_value_sig3BF6 < var_core_value_sigE5C3).length;
}
function Nt(var_core_value_sigF32D) {
  let var_core_value_sig9427 = var_core_value_sigF32D.body;
  return !var_core_value_sig9427 || var_core_value_sig9427.dataStream["length"] > 0 ? false : (var_core_value_sig9427.dataStream = "" + var_core_value_sig1015.PARAGRAPH + var_core_value_sig1015.SECTION_BREAK, var_core_value_sig9427.paragraphs = [{
    startIndex: 0,
    paragraphId: var_core_value_sig9DBF(new Set((var_core_value_sig9427.paragraphs ?? []).map(var_core_value_sig38CE => var_core_value_sig38CE.paragraphId)))
  }], var_core_value_sig9427.sectionBreaks = [{
    sectionId: var_core_value_sig36CC(new Set()),
    startIndex: 1
  }], true);
}
function Pt(var_core_value_sig21F4, var_core_value_sigA345) {
  var var_core_value_sigA468;
  let var_core_value_sig1561 = Rt(var_core_value_sigA345, var_core_value_sig21F4.startIndex, var_core_value_sig21F4.endIndex);
  if (var_core_value_sig1561 === 0) return false;
  let var_core_value_sigDF14 = Ft(var_core_value_sig21F4.columnGroupId, var_core_value_sig21F4.columns ?? [], var_core_value_sig1561),
    var_core_value_sig842F = Lt(var_core_value_sig21F4.gap),
    var_core_value_sigC4C0 = !Bt(var_core_value_sig21F4.columns ?? [], var_core_value_sigDF14),
    var_core_value_sig214A = ((var_core_value_sigA468 = var_core_value_sig21F4.gap) == null ? undefined : var_core_value_sigA468.v) !== var_core_value_sig842F.v,
    var_core_value_sigCCC3 = var_core_value_sig21F4.layout == null,
    var_core_value_sig986E = var_core_value_sig21F4.responsive == null;
  return !var_core_value_sigC4C0 && !var_core_value_sig214A && !var_core_value_sigCCC3 && !var_core_value_sig986E ? false : (var_core_value_sig21F4.columns = var_core_value_sigDF14, var_core_value_sig21F4.gap = var_core_value_sig842F, var_core_value_sig21F4.layout ??= var_core_value_sig58DB.FIXED, var_core_value_sig21F4.responsive ??= var_core_value_sig4840.STACK, true);
}
function Ft(var_core_value_sig537C, var_core_value_sigBBBC, var_core_value_sig5440) {
  return Array.from({
    length: var_core_value_sig5440
  }, (var_core_value_sig62B7, var_core_value_sig37A8) => {
    let var_core_value_sigA90D = var_core_value_sigBBBC[var_core_value_sig37A8];
    return var_core_value_sigA90D ? {
      ...var_core_value_sigA90D,
      widthRatio: It(var_core_value_sigA90D.widthRatio)
    } : {
      columnId: var_core_value_sig537C + "-column-" + (var_core_value_sig37A8 + 1),
      widthRatio: 1
    };
  });
}
function It(var_core_value_sigE28B) {
  return Number.isFinite(var_core_value_sigE28B) && var_core_value_sigE28B > 0 ? var_core_value_sigE28B : 1;
}
function Lt(var_core_value_sig0FD9) {
  return Number.isFinite(var_core_value_sig0FD9 == null ? undefined : var_core_value_sig0FD9.v) && var_core_value_sig0FD9.v >= 0 ? {
    v: var_core_value_sig0FD9.v
  } : {
    v: 12
  };
}
function Rt(var_core_value_sig5649, var_core_value_sigAF82, var_core_value_sig21A2) {
  let var_core_value_sig5C1D = var_core_value_sig85D5({
      startIndex: var_core_value_sigAF82,
      endIndex: var_core_value_sig21A2
    }).endOffset,
    var_core_value_sig4CBA = 0;
  for (let var_core_value_sig7A3C = var_core_value_sigAF82; var_core_value_sig7A3C < var_core_value_sig5C1D; var_core_value_sig7A3C++) var_core_value_sig5649[var_core_value_sig7A3C] === O.COLUMN_START && var_core_value_sig4CBA++;
  return var_core_value_sig4CBA;
}
function zt(var_core_value_sig8E65, var_core_value_sig772C, var_core_value_sigF309) {
  if (var_core_value_sig8E65[var_core_value_sig772C] !== O.COLUMN_GROUP_START || var_core_value_sig8E65[var_core_value_sigF309] !== O.COLUMN_GROUP_END) return true;
  let var_core_value_sig44F9 = var_core_value_sig85D5({
      startIndex: var_core_value_sig772C,
      endIndex: var_core_value_sigF309
    }).endOffset,
    var_core_value_sigE532 = -1,
    var_core_value_sigF381 = 0;
  for (let var_core_value_sig0511 = var_core_value_sig772C; var_core_value_sig0511 < var_core_value_sig44F9; var_core_value_sig0511++) {
    let var_core_value_sig48CA = var_core_value_sig8E65[var_core_value_sig0511];
    if (var_core_value_sig48CA === O.COLUMN_START) {
      if (var_core_value_sigE532 >= 0) return true;
      var_core_value_sigE532 = var_core_value_sig0511;
      continue;
    }
    if (var_core_value_sig48CA === O.COLUMN_END) {
      if (var_core_value_sigE532 < 0) return true;
      var_core_value_sigF381++, var_core_value_sigE532 = -1;
    }
  }
  return var_core_value_sigE532 >= 0 || var_core_value_sigF381 < 2 || var_core_value_sigF381 > 5;
}
function Bt(var_core_value_sigCB92, var_core_value_sigC844) {
  return var_core_value_sigCB92.length === var_core_value_sigC844.length && var_core_value_sigCB92.every((var_core_value_sig1F44, var_core_value_sigCB04) => {
    let var_core_value_sig947E = var_core_value_sigC844[var_core_value_sigCB04];
    return var_core_value_sig1F44.columnId === var_core_value_sig947E.columnId && var_core_value_sig1F44.widthRatio === var_core_value_sig947E.widthRatio && var_core_value_sigFFAF.diffValue(var_core_value_sig1F44.minWidth, var_core_value_sig947E.minWidth);
  });
}
function Vt(var_core_value_sig2ED4, var_core_value_sig0477 = {}) {
  var var_core_value_sig6FDF;
  let var_core_value_sig27C4 = wt(var_core_value_sig2ED4).nextDocumentData,
    var_core_value_sig3E1A = A(var_core_value_sig27C4),
    var_core_value_sig7FB0 = var_core_value_sig3E1A.body,
    var_core_value_sig5215 = var_core_value_sig27C4.body,
    var_core_value_sig5204 = [...((var_core_value_sig5215 == null ? undefined : var_core_value_sig5215.columnGroups) ?? [])].sort((var_core_value_sig4545, var_core_value_sigF39A) => var_core_value_sig4545.startIndex - var_core_value_sigF39A.startIndex);
  if (!var_core_value_sig7FB0 || !var_core_value_sig5215 || !Ht(var_core_value_sig7FB0.dataStream, var_core_value_sig5215.dataStream, var_core_value_sig5204)) return {
    nextDocumentData: var_core_value_sig3E1A,
    tableIdsByColumnGroupId: {}
  };
  let var_core_value_sig5E11 = {},
    var_core_value_sig4D58 = new Set([...Object.keys(var_core_value_sig27C4.tableSource ?? {}), ...(((var_core_value_sig6FDF = var_core_value_sig27C4.body) == null ? undefined : var_core_value_sig6FDF.tables) ?? []).map(var_core_value_sigF79C => var_core_value_sigF79C.tableId)]),
    var_core_value_sig2DBD = Ut(var_core_value_sig5215.dataStream, var_core_value_sig5204),
    var_core_value_sig424E = var_core_value_sig5204.map(var_core_value_sig2E54 => {
      let var_core_value_sig7658 = Xt(var_core_value_sig2E54.columnGroupId, var_core_value_sig4D58, var_core_value_sig0477.tableIdFactory);
      return var_core_value_sig5E11[var_core_value_sig2E54.columnGroupId] = var_core_value_sig7658, {
        startIndex: J(var_core_value_sig2E54.startIndex, var_core_value_sig5204),
        endIndex: J(Gt(var_core_value_sig2E54), var_core_value_sig5204),
        tableId: var_core_value_sig7658
      };
    });
  return var_core_value_sig7FB0.dataStream = var_core_value_sig2DBD, var_core_value_sig7FB0.paragraphs = $t(var_core_value_sig7FB0.paragraphs ?? [], var_core_value_sig5204), var_core_value_sig7FB0.sectionBreaks = $t(var_core_value_sig7FB0.sectionBreaks ?? [], var_core_value_sig5204), var_core_value_sig7FB0.customBlocks = $t(var_core_value_sig7FB0.customBlocks ?? [], var_core_value_sig5204), var_core_value_sig7FB0.textRuns = en(var_core_value_sig7FB0.textRuns ?? [], var_core_value_sig5204), var_core_value_sig7FB0.blockRanges = Y(var_core_value_sig7FB0.blockRanges ?? [], var_core_value_sig5204), var_core_value_sig7FB0.customRanges = Y(var_core_value_sig7FB0.customRanges ?? [], var_core_value_sig5204), var_core_value_sig7FB0.customDecorations = Y(var_core_value_sig7FB0.customDecorations ?? [], var_core_value_sig5204), var_core_value_sig7FB0.tables = [...Y(var_core_value_sig7FB0.tables ?? [], var_core_value_sig5204), ...var_core_value_sig424E].sort((var_core_value_sigDCF5, var_core_value_sigC786) => var_core_value_sigDCF5.startIndex - var_core_value_sigC786.startIndex), var_core_value_sig7FB0.columnGroups = [], var_core_value_sig3E1A.tableSource = {
    ...var_core_value_sig3E1A.tableSource,
    ...Object.fromEntries(var_core_value_sig5204.map(var_core_value_sigC0D9 => [var_core_value_sig5E11[var_core_value_sigC0D9.columnGroupId], Kt(var_core_value_sig27C4, var_core_value_sigC0D9, var_core_value_sig5E11[var_core_value_sigC0D9.columnGroupId])]))
  }, {
    nextDocumentData: var_core_value_sig3E1A,
    tableIdsByColumnGroupId: var_core_value_sig5E11
  };
}
function Ht(var_core_value_sigF481, var_core_value_sigD7F2, var_core_value_sig7CF3) {
  return !!(var_core_value_sigF481 && var_core_value_sigD7F2 && var_core_value_sig7CF3.length > 0);
}
function Ut(var_core_value_sig9DC6, var_core_value_sig6643) {
  let var_core_value_sig4124 = 0,
    var_core_value_sigBF1C = "";
  return var_core_value_sig6643.forEach(var_core_value_sigF0511 => {
    var_core_value_sigBF1C += var_core_value_sig9DC6.slice(var_core_value_sig4124, var_core_value_sigF0511.startIndex), var_core_value_sigBF1C += Wt(var_core_value_sig9DC6, var_core_value_sigF0511), var_core_value_sig4124 = Gt(var_core_value_sigF0511);
  }), var_core_value_sigBF1C + var_core_value_sig9DC6.slice(var_core_value_sig4124);
}
function Wt(var_core_value_sigEEEF, var_core_value_sig9A01) {
  let var_core_value_sig674F = {
      ...var_core_value_sig1015,
      ...O
    },
    var_core_value_sigC8F6 = "" + var_core_value_sig674F.TABLE_START + var_core_value_sig674F.TABLE_ROW_START,
    var_core_value_sig8A26 = Gt(var_core_value_sig9A01);
  for (let var_core_value_sig5825 = var_core_value_sig9A01.startIndex; var_core_value_sig5825 < var_core_value_sig8A26; var_core_value_sig5825++) {
    let var_core_value_sig50AF = var_core_value_sigEEEF[var_core_value_sig5825];
    if (var_core_value_sig50AF !== var_core_value_sig674F.COLUMN_GROUP_START && var_core_value_sig50AF !== var_core_value_sig674F.COLUMN_GROUP_END) {
      if (var_core_value_sig50AF === var_core_value_sig674F.COLUMN_START) {
        var_core_value_sigC8F6 += var_core_value_sig674F.TABLE_CELL_START;
        continue;
      }
      if (var_core_value_sig50AF === var_core_value_sig674F.COLUMN_END) {
        var_core_value_sigC8F6 += var_core_value_sig674F.TABLE_CELL_END;
        continue;
      }
      var_core_value_sigC8F6 += var_core_value_sig50AF;
    }
  }
  return "" + var_core_value_sigC8F6 + var_core_value_sig674F.TABLE_ROW_END + var_core_value_sig674F.TABLE_END;
}
function Gt(var_core_value_sigD073) {
  return var_core_value_sig85D5(var_core_value_sigD073).endOffset;
}
function Kt(var_core_value_sigF631, var_core_value_sig2278, var_core_value_sig7053) {
  var var_core_value_sig52F1;
  let var_core_value_sig1E74 = var_core_value_sig2278.columns ?? [],
    var_core_value_sig1E84 = Math.max(1, var_core_value_sig1E74.length, Zt(((var_core_value_sig52F1 = var_core_value_sigF631.body) == null ? undefined : var_core_value_sig52F1.dataStream) ?? "", var_core_value_sig2278)),
    var_core_value_sig133B = Qt(var_core_value_sigF631),
    var_core_value_sig69B8 = Array.from({
      length: var_core_value_sig1E84
    }, (var_core_value_sig4EB7, var_core_value_sig73AF) => {
      var var_core_value_sig548A;
      return qt((var_core_value_sig548A = var_core_value_sig1E74[var_core_value_sig73AF]) == null ? undefined : var_core_value_sig548A.widthRatio);
    }),
    var_core_value_sig983D = var_core_value_sig69B8.reduce((var_core_value_sigE026, var_core_value_sig339E) => var_core_value_sigE026 + var_core_value_sig339E, 0) || var_core_value_sig1E84,
    var_core_value_sig9A03 = Array.from({
      length: var_core_value_sig1E84
    }, (var_core_value_sig7550, var_core_value_sig2983) => {
      let var_core_value_sigE1B0 = var_core_value_sig69B8[var_core_value_sig2983];
      return Yt(var_core_value_sig133B * var_core_value_sigE1B0 / var_core_value_sig983D);
    });
  return {
    tableRows: [{
      tableCells: Array.from({
        length: var_core_value_sig1E84
      }, () => Jt()),
      trHeight: {
        val: {
          v: 30
        },
        hRule: var_core_value_sigE4E4.AUTO
      }
    }],
    tableColumns: var_core_value_sig9A03,
    tableId: var_core_value_sig7053,
    align: var_core_value_sig992D.START,
    indent: {
      v: 0
    },
    textWrap: var_core_value_sig5F50.NONE,
    position: {
      positionH: {
        relativeFrom: var_core_value_sigDF29.PAGE,
        posOffset: 0
      },
      positionV: {
        relativeFrom: var_core_value_sigC0F8.PAGE,
        posOffset: 0
      }
    },
    dist: {
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0
    },
    cellMargin: {
      start: {
        v: 10
      },
      end: {
        v: 10
      },
      top: {
        v: 5
      },
      bottom: {
        v: 5
      }
    },
    size: {
      type: var_core_value_sigA4B0.UNSPECIFIED,
      width: {
        v: var_core_value_sig133B
      }
    }
  };
}
function qt(var_core_value_sig3363) {
  return Number.isFinite(var_core_value_sig3363) && (var_core_value_sig3363 ?? 0) > 0 ? var_core_value_sig3363 : 1;
}
function Jt() {
  return {
    margin: {
      start: {
        v: 10
      },
      end: {
        v: 10
      },
      top: {
        v: 5
      },
      bottom: {
        v: 5
      }
    }
  };
}
function Yt(var_core_value_sigF64A) {
  return {
    size: {
      type: var_core_value_sigA4B0.SPECIFIED,
      width: {
        v: var_core_value_sigF64A
      }
    }
  };
}
function Xt(var_core_value_sig25EC, var_core_value_sigA790, var_core_value_sig9A5E) {
  let var_core_value_sig01B9 = (var_core_value_sig9A5E == null ? undefined : var_core_value_sig9A5E(var_core_value_sig25EC)) ?? var_core_value_sig25EC + "-table",
    var_core_value_sigD6A9 = var_core_value_sig01B9,
    var_core_value_sig0FCF = 1;
  for (; var_core_value_sigA790.has(var_core_value_sigD6A9);) var_core_value_sigD6A9 = var_core_value_sig01B9 + "-" + var_core_value_sig0FCF++;
  return var_core_value_sigA790.add(var_core_value_sigD6A9), var_core_value_sigD6A9;
}
function Zt(var_core_value_sigCF96, var_core_value_sigC4E9) {
  let var_core_value_sigF612 = 0;
  for (let var_core_value_sigD4FF = var_core_value_sigC4E9.startIndex; var_core_value_sigD4FF < var_core_value_sigC4E9.endIndex; var_core_value_sigD4FF++) var_core_value_sigCF96[var_core_value_sigD4FF] === O.COLUMN_START && var_core_value_sigF612++;
  return var_core_value_sigF612;
}
function Qt(var_core_value_sigAA6C) {
  var var_core_value_sig8BFA, var_core_value_sig236B, var_core_value_sig1951;
  let var_core_value_sigFEA0 = (var_core_value_sig8BFA = var_core_value_sigAA6C.documentStyle) == null ? undefined : var_core_value_sig8BFA.pageSize,
    var_core_value_sig931A = (var_core_value_sigFEA0 == null ? undefined : var_core_value_sigFEA0.width) ?? 0,
    var_core_value_sigEE7D = ((var_core_value_sig236B = var_core_value_sigAA6C.documentStyle) == null ? undefined : var_core_value_sig236B.marginLeft) ?? 0,
    var_core_value_sig3585 = ((var_core_value_sig1951 = var_core_value_sigAA6C.documentStyle) == null ? undefined : var_core_value_sig1951.marginRight) ?? 0;
  return Math.max(0, var_core_value_sig931A - var_core_value_sigEE7D - var_core_value_sig3585);
}
function J(var_core_value_sig31A8, var_core_value_sigA4DA) {
  return var_core_value_sig31A8 + var_core_value_sigA4DA.reduce((var_core_value_sig1E5B, var_core_value_sigB680) => var_core_value_sig31A8 <= var_core_value_sigB680.startIndex ? var_core_value_sig1E5B : var_core_value_sig1E5B + (var_core_value_sig31A8 < var_core_value_sigB680.endIndex ? 1 : 2), 0);
}
function $t(var_core_value_sig6FC0, var_core_value_sig6217) {
  return var_core_value_sig6FC0.map(var_core_value_sig1F64 => ({
    ...var_core_value_sig1F64,
    startIndex: J(var_core_value_sig1F64.startIndex, var_core_value_sig6217)
  }));
}
function Y(var_core_value_sigB805, var_core_value_sig4FAE) {
  return var_core_value_sigB805.map(var_core_value_sigDD1C => ({
    ...var_core_value_sigDD1C,
    startIndex: J(var_core_value_sigDD1C.startIndex, var_core_value_sig4FAE),
    endIndex: J(var_core_value_sigDD1C.endIndex, var_core_value_sig4FAE)
  }));
}
function en(var_core_value_sig1FCC, var_core_value_sigB7F9) {
  return var_core_value_sig1FCC.map(var_core_value_sig2C39 => ({
    ...var_core_value_sig2C39,
    st: J(var_core_value_sig2C39.st, var_core_value_sigB7F9),
    ed: J(var_core_value_sig2C39.ed, var_core_value_sigB7F9)
  }));
}
const tn = new Set([O.COLUMN_GROUP_START, O.COLUMN_START, O.COLUMN_END, O.COLUMN_GROUP_END]);
function nn(var_core_value_sigB1A2, var_core_value_sig526D) {
  return var_core_value_sigB1A2.columns["some"](var_core_value_sigB7D1 => var_core_value_sig526D > var_core_value_sigB7D1.startOffset && var_core_value_sig526D < var_core_value_sigB7D1.endOffset);
}
function rn(var_core_value_sigBDB5, var_core_value_sig59CE1) {
  var var_core_value_sig3AD7;
  let var_core_value_sig04E4 = (var_core_value_sig3AD7 = var_core_value_sigBDB5.body) == null || (var_core_value_sig3AD7 = var_core_value_sig3AD7.dataStream) == null ? undefined : var_core_value_sig3AD7[var_core_value_sig59CE1];
  return var_core_value_sig04E4 != null && tn.has(var_core_value_sig04E4);
}
function an(var_core_value_sigD8F0, var_core_value_sig1475, var_core_value_sig08B7) {
  return on(var_core_value_sigD8F0, var_core_value_sig08B7) != null && !sn(var_core_value_sigD8F0, var_core_value_sig1475);
}
function on(var_core_value_sig2008, var_core_value_sig496B) {
  var var_core_value_sig7161;
  let var_core_value_sig2AB8 = ((var_core_value_sig7161 = var_core_value_sig2008.body) == null ? undefined : var_core_value_sig7161.columnGroups) ?? [];
  for (let var_core_value_sig64F0 of var_core_value_sig2AB8) {
    let var_core_value_sigA942 = k(var_core_value_sig2008, var_core_value_sig64F0.columnGroupId);
    if (var_core_value_sigA942 && nn(var_core_value_sigA942, var_core_value_sig496B)) return var_core_value_sigA942;
  }
  return null;
}
function sn(var_core_value_sig3FCF, var_core_value_sig675A) {
  var var_core_value_sig837F, var_core_value_sig9D6E;
  let var_core_value_sigB205 = ((var_core_value_sig837F = var_core_value_sig3FCF.body) == null ? undefined : var_core_value_sig837F.dataStream) ?? "",
    var_core_value_sigBF78 = Math.max(0, Math.min(var_core_value_sig675A.startOffset, var_core_value_sig675A.endOffset)),
    var_core_value_sig8AF3 = Math.min(var_core_value_sigB205.length - 1, Math.max(var_core_value_sig675A.startOffset, var_core_value_sig675A.endOffset));
  for (let var_core_value_sig85B1 = var_core_value_sigBF78; var_core_value_sig85B1 <= var_core_value_sig8AF3; var_core_value_sig85B1++) if (rn(var_core_value_sig3FCF, var_core_value_sig85B1)) return true;
  return (((var_core_value_sig9D6E = var_core_value_sig3FCF.body) == null ? undefined : var_core_value_sig9D6E.columnGroups) ?? []).some(var_core_value_sig3141 => cn(var_core_value_sigBF78, var_core_value_sig8AF3, var_core_value_sig3141.startIndex, var_core_value_sig3141.endIndex));
}
function cn(var_core_value_sigA0CC, var_core_value_sigB3A1, var_core_value_sig1FB9, var_core_value_sig53A9) {
  return var_core_value_sigA0CC <= var_core_value_sig1FB9 && var_core_value_sigB3A1 >= var_core_value_sig53A9;
}
function ln(var_core_value_sigDACD) {
  let var_core_value_sig691E = A(var_core_value_sigDACD.documentData),
    var_core_value_sigD6D6 = var_core_value_sig691E.body;
  if (!(var_core_value_sigD6D6 != null && var_core_value_sigD6D6.dataStream)) return {
    nextDocumentData: var_core_value_sig691E,
    movedRange: var_core_value_sigDACD.movedRange,
    changed: false
  };
  let var_core_value_sig0347 = un(var_core_value_sig691E);
  if (var_core_value_sig0347.length === 0) return {
    nextDocumentData: var_core_value_sig691E,
    movedRange: var_core_value_sigDACD.movedRange,
    changed: false
  };
  let var_core_value_sig52A3 = new Set((var_core_value_sigD6D6.paragraphs ?? []).map(var_core_value_sig2162 => var_core_value_sig2162.paragraphId)),
    var_core_value_sigAD91 = {
      ...var_core_value_sigDACD.movedRange
    },
    var_core_value_sigF64E = 0;
  return var_core_value_sig0347.forEach(var_core_value_sig2EAD => {
    let var_core_value_sig6774 = var_core_value_sig2EAD + var_core_value_sigF64E,
      var_core_value_sig340D = fn(var_core_value_sig52A3);
    pn(var_core_value_sigD6D6, var_core_value_sig6774, var_core_value_sig340D), var_core_value_sigAD91 = mn(var_core_value_sigAD91, var_core_value_sig6774, var_core_value_sig340D.dataStream["length"]), var_core_value_sigF64E += var_core_value_sig340D.dataStream["length"];
  }), {
    nextDocumentData: var_core_value_sig691E,
    movedRange: var_core_value_sigAD91,
    changed: true
  };
}
function un(var_core_value_sig9B3D) {
  let var_core_value_sigB217 = var_core_value_sig9B3D.body,
    var_core_value_sig1FE6 = [];
  for (let var_core_value_sig82D4 of (var_core_value_sigB217 == null ? undefined : var_core_value_sigB217.columnGroups) ?? []) {
    let var_core_value_sigA621 = k(var_core_value_sig9B3D, var_core_value_sig82D4.columnGroupId);
    var_core_value_sigA621 && var_core_value_sigA621.columns["forEach"](var_core_value_sigD955 => {
      dn(var_core_value_sigB217, var_core_value_sigD955.startOffset, var_core_value_sigD955.endOffset) || var_core_value_sig1FE6.push(var_core_value_sigD955.endOffset);
    });
  }
  return var_core_value_sig1FE6.sort((var_core_value_sigBDE4, var_core_value_sig7DF1) => var_core_value_sigBDE4 - var_core_value_sig7DF1);
}
function dn(var_core_value_sig2471, var_core_value_sigD1FC, var_core_value_sigE2F9) {
  return (var_core_value_sig2471.paragraphs ?? []).some(var_core_value_sigDC86 => var_core_value_sigDC86.startIndex > var_core_value_sigD1FC && var_core_value_sigDC86.startIndex < var_core_value_sigE2F9);
}
function fn(var_core_value_sigD689) {
  let var_core_value_sig7AE3 = var_core_value_sig9DBF(var_core_value_sigD689);
  return var_core_value_sigD689.add(var_core_value_sig7AE3), {
    dataStream: "" + var_core_value_sig1015.PARAGRAPH + var_core_value_sig1015.SECTION_BREAK,
    paragraphs: [{
      startIndex: 0,
      paragraphId: var_core_value_sig7AE3
    }],
    sectionBreaks: [{
      sectionId: var_core_value_sig36CC(new Set()),
      startIndex: 1
    }]
  };
}
function pn(var_core_value_sig1EB3, var_core_value_sigE120, var_core_value_sigD6E7) {
  let var_core_value_sig3669 = var_core_value_sigD6E7.dataStream["length"];
  var_core_value_sig1EB3.dataStream = "" + var_core_value_sig1EB3.dataStream["slice"](0, var_core_value_sigE120) + var_core_value_sigD6E7.dataStream + var_core_value_sig1EB3.dataStream["slice"](var_core_value_sigE120), var_core_value_sig1EB3.paragraphs = [...X(var_core_value_sig1EB3.paragraphs ?? [], var_core_value_sigE120, var_core_value_sig3669), ...var_core_value_sigD6E7.paragraphs["map"](var_core_value_sig0B0C => ({
    ...var_core_value_sig0B0C,
    startIndex: var_core_value_sig0B0C.startIndex + var_core_value_sigE120
  }))].sort((var_core_value_sigA39E, var_core_value_sigBBEE) => var_core_value_sigA39E.startIndex - var_core_value_sigBBEE.startIndex), var_core_value_sig1EB3.sectionBreaks = [...X(var_core_value_sig1EB3.sectionBreaks ?? [], var_core_value_sigE120, var_core_value_sig3669), ...var_core_value_sigD6E7.sectionBreaks["map"](var_core_value_sig011D => ({
    ...var_core_value_sig011D,
    startIndex: var_core_value_sig011D.startIndex + var_core_value_sigE120
  }))].sort((var_core_value_sig6167, var_core_value_sig65A1) => var_core_value_sig6167.startIndex - var_core_value_sig65A1.startIndex), var_core_value_sig1EB3.textRuns = hn(var_core_value_sig1EB3.textRuns ?? [], var_core_value_sigE120, var_core_value_sig3669), var_core_value_sig1EB3.customBlocks = X(var_core_value_sig1EB3.customBlocks ?? [], var_core_value_sigE120, var_core_value_sig3669), var_core_value_sig1EB3.blockRanges = (var_core_value_sig1EB3.blockRanges ?? []).map(var_core_value_sig7F19 => var_core_value_sigE6D6(var_core_value_sig7F19, var_core_value_sigE120, var_core_value_sig3669)), var_core_value_sig1EB3.customRanges = (var_core_value_sig1EB3.customRanges ?? []).map(var_core_value_sig7827 => var_core_value_sigE6D6(var_core_value_sig7827, var_core_value_sigE120, var_core_value_sig3669)), var_core_value_sig1EB3.customDecorations = (var_core_value_sig1EB3.customDecorations ?? []).map(var_core_value_sig652C => var_core_value_sigE6D6(var_core_value_sig652C, var_core_value_sigE120, var_core_value_sig3669)), var_core_value_sig1EB3.tables = (var_core_value_sig1EB3.tables ?? []).map(var_core_value_sig7E32 => var_core_value_sig0A5A(var_core_value_sig7E32, var_core_value_sigE120, var_core_value_sig3669)), var_core_value_sig1EB3.columnGroups = (var_core_value_sig1EB3.columnGroups ?? []).map(var_core_value_sig4C07 => var_core_value_sigE6D6(var_core_value_sig4C07, var_core_value_sigE120, var_core_value_sig3669));
}
function mn(var_core_value_sig5CBC, var_core_value_sig20BE, var_core_value_sig6BD0) {
  return var_core_value_sig5CBC.startOffset >= var_core_value_sig20BE ? {
    startOffset: var_core_value_sig5CBC.startOffset + var_core_value_sig6BD0,
    endOffset: var_core_value_sig5CBC.endOffset + var_core_value_sig6BD0
  } : var_core_value_sig5CBC.endOffset > var_core_value_sig20BE ? {
    ...var_core_value_sig5CBC,
    endOffset: var_core_value_sig5CBC.endOffset + var_core_value_sig6BD0
  } : var_core_value_sig5CBC;
}
function X(var_core_value_sig8C15, var_core_value_sig6DF7, var_core_value_sigB411) {
  return var_core_value_sig8C15.map(var_core_value_sig79AB => var_core_value_sig79AB.startIndex >= var_core_value_sig6DF7 ? {
    ...var_core_value_sig79AB,
    startIndex: var_core_value_sig79AB.startIndex + var_core_value_sigB411
  } : var_core_value_sig79AB);
}
function hn(var_core_value_sigA81B, var_core_value_sigFE8D, var_core_value_sig8595) {
  return var_core_value_sigA81B.map(var_core_value_sig8E74 => var_core_value_sig8E74.st >= var_core_value_sigFE8D ? {
    ...var_core_value_sig8E74,
    st: var_core_value_sig8E74.st + var_core_value_sig8595,
    ed: var_core_value_sig8E74.ed + var_core_value_sig8595
  } : var_core_value_sig8E74.ed > var_core_value_sigFE8D ? {
    ...var_core_value_sig8E74,
    ed: var_core_value_sig8E74.ed + var_core_value_sig8595
  } : var_core_value_sig8E74);
}
var gn = "@univerjs-pro/docs-column",
  _n = "1.0.0-insiders.20260907-70fc579";
const vn = {};
function yn(var_core_value_sigF8DE, var_core_value_sigFE76) {
  return function (var_core_value_sig104C, var_core_value_sig841D) {
    var_core_value_sigFE76(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sigF8DE);
  };
}
function bn(var_core_value_sig84C8, var_core_value_sig80C0, var_core_value_sig22B4, var_core_value_sigBB37) {
  var var_core_value_sig0C51 = arguments.length,
    var_core_value_sigADA4 = var_core_value_sig0C51 < 3 ? var_core_value_sig80C0 : var_core_value_sigBB37 === null ? var_core_value_sigBB37 = Object.getOwnPropertyDescriptor(var_core_value_sig80C0, var_core_value_sig22B4) : var_core_value_sigBB37,
    var_core_value_sig0E48;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigADA4 = Reflect.decorate(var_core_value_sig84C8, var_core_value_sig80C0, var_core_value_sig22B4, var_core_value_sigBB37);else {
    for (var var_core_value_sig495B = var_core_value_sig84C8.length - 1; var_core_value_sig495B >= 0; var_core_value_sig495B--) (var_core_value_sig0E48 = var_core_value_sig84C8[var_core_value_sig495B]) && (var_core_value_sigADA4 = (var_core_value_sig0C51 < 3 ? var_core_value_sig0E48(var_core_value_sigADA4) : var_core_value_sig0C51 > 3 ? var_core_value_sig0E48(var_core_value_sig80C0, var_core_value_sig22B4, var_core_value_sigADA4) : var_core_value_sig0E48(var_core_value_sig80C0, var_core_value_sig22B4)) || var_core_value_sigADA4);
  }
  return var_core_value_sig0C51 > 3 && var_core_value_sigADA4 && Object.defineProperty(var_core_value_sig80C0, var_core_value_sig22B4, var_core_value_sigADA4), var_core_value_sigADA4;
}
function Z(var_core_value_sig310C) {
  "@babel/helpers - typeof";

  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig90CB) {
    return typeof var_core_value_sig90CB;
  } : function (var_core_value_sigBDF5) {
    return var_core_value_sigBDF5 && typeof Symbol == "function" && var_core_value_sigBDF5.constructor === Symbol && var_core_value_sigBDF5 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigBDF5;
  }, Z(var_core_value_sig310C);
}
function xn(var_core_value_sig759E, var_core_value_sig6C80) {
  if (Z(var_core_value_sig759E) != "object" || !var_core_value_sig759E) return var_core_value_sig759E;
  var var_core_value_sig6B99 = var_core_value_sig759E[Symbol.toPrimitive];
  if (var_core_value_sig6B99 !== undefined) {
    var var_core_value_sig6ADC = var_core_value_sig6B99.call(var_core_value_sig759E, var_core_value_sig6C80 || "default");
    if (Z(var_core_value_sig6ADC) != "object") return var_core_value_sig6ADC;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig6C80 === "string" ? String : Number)(var_core_value_sig759E);
}
function Sn(var_core_value_sig41AD) {
  var var_core_value_sigDBC2 = xn(var_core_value_sig41AD, "string");
  return Z(var_core_value_sigDBC2) == "symbol" ? var_core_value_sigDBC2 : var_core_value_sigDBC2 + "";
}
function Q(var_core_value_sig7739, var_core_value_sig4040, var_core_value_sig1AAA) {
  return (var_core_value_sig4040 = Sn(var_core_value_sig4040)) in var_core_value_sig7739 ? Object.defineProperty(var_core_value_sig7739, var_core_value_sig4040, {
    value: var_core_value_sig1AAA,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig7739[var_core_value_sig4040] = var_core_value_sig1AAA, var_core_value_sig7739;
}
let $ = class extends var_core_value_sig3C75 {
  constructor(var_core_value_sigACC6 = vn, var_core_value_sig1614, var_core_value_sig85C3, var_core_value_sigB996) {
    super(), this._config = var_core_value_sigACC6, this._injector = var_core_value_sig1614, this._configService = var_core_value_sig85C3, this._commandService = var_core_value_sigB996;
    let {
      ...var_core_value_sig4BBA
    } = var_core_value_sig7221({}, vn, this._config);
    this._configService["setConfig"]("docs-column.config", var_core_value_sig4BBA);
  }
  onStarting() {
    [Ye, Ge, Ke, qe, We, Je].forEach(var_core_value_sigBBFF => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigBBFF)));
  }
};
Q($, "pluginName", "DOCS_COLUMN_PLUGIN"), Q($, "packageName", gn), Q($, "version", _n), Q($, "type", var_core_value_sig478B.UNIVER_DOC), $ = bn([var_core_value_sig6223(var_core_value_sig1263, var_core_value_sig9E81), yn(1, var_core_value_sig3AF5(var_core_value_sig14E6)), yn(2, var_core_value_sigEF45), yn(3, var_core_value_sig498A)], $);
export { Ge as AddDocColumnCommand, O as ColumnDataStreamTreeTokenType, de as ColumnPosition, ue as DOCS_COLUMN_MAX_COLUMN_COUNT, Ke as DeleteDocColumnCommand, qe as DeleteDocColumnGroupCommand, Ye as InsertDocColumnGroupCommand, Je as NormalizeDocColumnGroupCommand, We as ResizeDocColumnGroupCommand, $ as UniverDocsColumnPlugin, at as buildInsertColumnActions, he as buildInsertColumnGroupActions, dt as calculateResizeDragWidthRatios, an as canMoveRangeToColumnContent, Xe as canResolveDocsColumnInsertOffset, ht as documentSkeletonLineIterator, gt as documentSkeletonTableIterator, Vt as downgradeColumnGroupsToTables, k as getColumnGroupRangeById, rn as isColumnStructuralOffset, nn as isOffsetInsideColumnContent, B as normalizeDocsColumnInsertOffset, ln as normalizeEmptyColumnsAfterMove };
