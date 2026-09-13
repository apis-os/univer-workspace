import { BooleanNumber as var_core_value_sig3D6F, BuildTextUtils as var_core_value_sig336C, CommandType as var_core_value_sig6E68, DashStyleType as var_core_value_sig8DFE, DataStreamTreeTokenType as var_core_value_sig48EA, DependentOn as var_core_value_sig5E16, DocumentBlockRangeType as var_core_value_sig09F3, ICommandService as var_core_value_sig4592, IConfigService as var_core_value_sigC5C4, IUniverInstanceService as var_core_value_sig1617, Inject as var_core_value_sig4169, Injector as var_core_value_sig6D19, JSONX as var_core_value_sig279C, PRESERVE_INSERTED_PARAGRAPH_IDS as var_core_value_sigAC51, Plugin as var_core_value_sig8986, TextX as var_core_value_sigCAF7, TextXActionType as var_core_value_sigED1C, UniverInstanceType as var_core_value_sig726E, containsInteriorInsertionOffset as var_core_value_sig2CD3, containsStreamIndex as var_core_value_sig038E, createParagraphId as var_core_value_sigAA1E, generateRandomId as var_core_value_sigC9F5, getBlockRangeInterval as var_core_value_sig7EEA, getBodySliceForTextXAction as var_core_value_sig59CE, getParagraphContentStartOffset as var_core_value_sig33C8, getParagraphContentStartOffsets as var_core_value_sig957F, getParagraphFollowingBlockOffset as var_core_value_sig803B, getSingleDataStreamChange as var_core_value_sig5830, intersectsOperationalIntervals as var_core_value_sig4A7C, merge as var_core_value_sigF975, shiftExclusiveRangeOnDelete as var_core_value_sigCDAF, shiftExclusiveRangeOnInsert as var_core_value_sigA298, shiftInclusiveRangeOnDelete as var_core_value_sig0B40, shiftInclusiveRangeOnInsert as var_core_value_sig330B } from "@univerjs/core";
import { DocSelectionManagerService as var_core_value_sig3625, RichTextEditingMutation as var_core_value_sig0B4E, UniverDocsPlugin as var_core_value_sig0E9F, getContentInsertRange as var_core_value_sigE5BA, isHeaderFooterSelection as var_core_value_sig4A83 } from "@univerjs/docs";
import { UniverLicensePlugin as var_core_value_sig58AA } from "@univerjs-pro/license";
var v = class extends Error {
  constructor(var_core_value_sigC9E0 = "Insert\x20range\x20cannot\x20cross\x20table\x20cell\x20boundaries") {
    super(var_core_value_sigC9E0);
  }
};
function Se(var_core_value_sigF2E6) {
  var var_core_value_sig34C8;
  let var_core_value_sigB744 = w(var_core_value_sigF2E6.documentData),
    var_core_value_sigEAE2 = E(var_core_value_sigB744),
    var_core_value_sigE68A = Ce(var_core_value_sigF2E6.startOffset, var_core_value_sigF2E6.endOffset),
    var_core_value_sig3E68 = var_core_value_sigE68A ? (var_core_value_sig34C8 = var_core_value_sigEAE2.blockRanges) == null ? undefined : var_core_value_sig34C8.find(var_core_value_sig76BA => {
      let var_core_value_sigFBFA = var_core_value_sig7EEA(var_core_value_sig76BA);
      return var_core_value_sigFBFA.startOffset === var_core_value_sigE68A.startOffset && var_core_value_sigFBFA.endOffset === var_core_value_sigE68A.endOffset;
    }) : undefined,
    {
      startOffset: var_core_value_sigF4C5,
      endOffset: var_core_value_sig5410
    } = var_core_value_sig3E68 ? var_core_value_sigE68A : Le(var_core_value_sigEAE2, var_core_value_sigF2E6.startOffset, var_core_value_sigF2E6.endOffset, var_core_value_sigF2E6.insertionMode);
  if (!var_core_value_sig3E68 && we(var_core_value_sigEAE2, var_core_value_sigF4C5, var_core_value_sig5410)) throw new v("Insert range cannot overlap an existing document block");
  let var_core_value_sig492F = Be(var_core_value_sigEAE2, var_core_value_sigF4C5, var_core_value_sig5410),
    var_core_value_sig8EA0 = (var_core_value_sig3E68 == null ? undefined : var_core_value_sig3E68.blockId) ?? var_core_value_sigF2E6.blockId;
  if (var_core_value_sig3E68) return var_core_value_sig3E68.blockType = var_core_value_sig09F3.QUOTE, Te(var_core_value_sigEAE2, var_core_value_sigF4C5, var_core_value_sig5410), x(var_core_value_sigEAE2, var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F), A(var_core_value_sigEAE2, var_core_value_sig3E68), {
    nextDocumentData: var_core_value_sigB744,
    cursorOffset: var_core_value_sigF4C5 + 1
  };
  if (var_core_value_sigF4C5 === var_core_value_sig5410) {
    var var_core_value_sigA6F6, var_core_value_sigCDDA;
    let var_core_value_sigF602 = "" + var_core_value_sig48EA.BLOCK_START + var_core_value_sig48EA.PARAGRAPH + var_core_value_sig48EA.BLOCK_END;
    j(var_core_value_sigEAE2, var_core_value_sigF4C5, var_core_value_sigF602, {
      paragraphs: [{
        startIndex: 1,
        paragraphId: var_core_value_sigAA1E(new Set((var_core_value_sigA6F6 = var_core_value_sigEAE2.paragraphs) == null ? undefined : var_core_value_sigA6F6.map(var_core_value_sig2AD0 => var_core_value_sig2AD0.paragraphId))),
        paragraphStyle: b(true, true, var_core_value_sig492F)
      }],
      blockRanges: [{
        blockId: var_core_value_sig8EA0,
        blockType: var_core_value_sig09F3.QUOTE,
        startIndex: 0,
        endIndex: var_core_value_sigF602.length - 1
      }]
    });
    let var_core_value_sig1BBD = (var_core_value_sigCDDA = var_core_value_sigEAE2.blockRanges) == null ? undefined : var_core_value_sigCDDA.find(var_core_value_sig3EEE => var_core_value_sig3EEE.blockId === var_core_value_sig8EA0);
    return var_core_value_sig1BBD && A(var_core_value_sigEAE2, var_core_value_sig1BBD), {
      nextDocumentData: var_core_value_sigB744,
      cursorOffset: var_core_value_sigF4C5 + 1
    };
  }
  j(var_core_value_sigEAE2, var_core_value_sig5410, var_core_value_sig48EA.BLOCK_END), j(var_core_value_sigEAE2, var_core_value_sigF4C5, var_core_value_sig48EA.BLOCK_START), x(var_core_value_sigEAE2, var_core_value_sigF4C5, var_core_value_sig5410 + 1, var_core_value_sig492F);
  let var_core_value_sigE243 = {
    blockId: var_core_value_sig8EA0,
    blockType: var_core_value_sig09F3.QUOTE,
    startIndex: var_core_value_sigF4C5,
    endIndex: var_core_value_sig5410 + 1
  };
  return var_core_value_sigEAE2.blockRanges = [...(var_core_value_sigEAE2.blockRanges ?? []), var_core_value_sigE243].sort((var_core_value_sigF704, var_core_value_sig2BCF) => var_core_value_sigF704.startIndex - var_core_value_sig2BCF.startIndex), A(var_core_value_sigEAE2, var_core_value_sigE243), {
    nextDocumentData: var_core_value_sigB744,
    cursorOffset: var_core_value_sigF4C5 + 1
  };
}
function Ce(var_core_value_sig74A8, var_core_value_sig21B2) {
  return var_core_value_sig74A8 == null || var_core_value_sig21B2 == null || var_core_value_sig74A8 === var_core_value_sig21B2 ? null : {
    startOffset: Math.min(var_core_value_sig74A8, var_core_value_sig21B2),
    endOffset: Math.max(var_core_value_sig74A8, var_core_value_sig21B2)
  };
}
function we(var_core_value_sigDE08, var_core_value_sigACCB, var_core_value_sig7F33) {
  return (var_core_value_sigDE08.blockRanges ?? []).some(var_core_value_sig0D69 => {
    let var_core_value_sig480E = var_core_value_sig7EEA(var_core_value_sig0D69);
    return var_core_value_sigACCB === var_core_value_sig7F33 ? var_core_value_sig2CD3(var_core_value_sig480E, var_core_value_sigACCB) : var_core_value_sig4A7C(var_core_value_sig480E, {
      startOffset: var_core_value_sigACCB,
      endOffset: var_core_value_sig7F33
    });
  });
}
function Te(var_core_value_sig0C53, var_core_value_sigEA04, var_core_value_sig7A62) {
  (var_core_value_sig0C53.paragraphs ?? []).filter(var_core_value_sig26DB => var_core_value_sig26DB.startIndex > var_core_value_sigEA04 && var_core_value_sig26DB.startIndex < var_core_value_sig7A62).forEach(var_core_value_sigF0F9 => {
    let var_core_value_sig1A0F = {
      ...(var_core_value_sigF0F9.paragraphStyle ?? {})
    };
    delete var_core_value_sig1A0F.indentEnd, delete var_core_value_sig1A0F.spaceAbove, delete var_core_value_sig1A0F.spaceBelow, delete var_core_value_sig1A0F.textStyle, var_core_value_sigF0F9.paragraphStyle = var_core_value_sig1A0F;
  });
}
function Ee(var_core_value_sig8109) {
  var var_core_value_sig7565, var_core_value_sigD4FB;
  let var_core_value_sig3E71 = w(var_core_value_sig8109.documentData),
    var_core_value_sig01B3 = E(var_core_value_sig3E71),
    var_core_value_sig7442 = y(var_core_value_sig01B3, var_core_value_sig8109.cursorOffset);
  if (!var_core_value_sig7442) return null;
  let var_core_value_sigDF87 = C(var_core_value_sig01B3, var_core_value_sig7442),
    var_core_value_sig9EE0 = var_core_value_sigDF87[var_core_value_sigDF87.length - 1];
  if (!var_core_value_sig9EE0 || !Ne(var_core_value_sig01B3, var_core_value_sig7442, var_core_value_sig9EE0) || var_core_value_sig8109.cursorOffset < var_core_value_sig9EE0.startIndex) return null;
  let var_core_value_sigF051 = O(var_core_value_sig01B3, var_core_value_sig7442, var_core_value_sig9EE0),
    var_core_value_sig0B45 = var_core_value_sig7EEA(var_core_value_sig7442),
    var_core_value_sig36F8 = var_core_value_sig0B45.endOffset - 1;
  if (var_core_value_sigF051 >= var_core_value_sig36F8) return null;
  var_core_value_sig01B3.dataStream = [var_core_value_sig01B3.dataStream["slice"](0, var_core_value_sigF051), var_core_value_sig48EA.BLOCK_END, var_core_value_sig01B3.dataStream["slice"](var_core_value_sigF051, var_core_value_sig36F8), var_core_value_sig01B3.dataStream["slice"](var_core_value_sig0B45.endOffset)].join(""), L(var_core_value_sig01B3.paragraphs, var_core_value_sigF051, var_core_value_sig7442.endIndex, 1), L(var_core_value_sig01B3.sectionBreaks, var_core_value_sigF051, var_core_value_sig7442.endIndex, 1), L(var_core_value_sig01B3.customBlocks, var_core_value_sigF051, var_core_value_sig7442.endIndex, 1), Qe(var_core_value_sig01B3.textRuns, var_core_value_sigF051, var_core_value_sig7442.endIndex, 1), R(var_core_value_sig01B3.tables, var_core_value_sigF051, var_core_value_sig7442.endIndex, 1), R(var_core_value_sig01B3.customRanges, var_core_value_sigF051, var_core_value_sig7442.endIndex, 1), R(var_core_value_sig01B3.customDecorations, var_core_value_sigF051, var_core_value_sig7442.endIndex, 1), (var_core_value_sig7565 = var_core_value_sig01B3.blockRanges) == null || var_core_value_sig7565.forEach(var_core_value_sigFBA4 => {
    var_core_value_sigFBA4 === var_core_value_sig7442 || var_core_value_sigFBA4.blockId === var_core_value_sig7442.blockId ? var_core_value_sigFBA4.endIndex = var_core_value_sigF051 : var_core_value_sigFBA4.startIndex >= var_core_value_sigF051 && var_core_value_sigFBA4.startIndex < var_core_value_sig7442.endIndex && (var_core_value_sigFBA4.startIndex += 1, var_core_value_sigFBA4.endIndex += 1);
  });
  let var_core_value_sig03E1 = C(var_core_value_sig01B3, {
    ...var_core_value_sig7442,
    endIndex: var_core_value_sigF051
  });
  var_core_value_sig03E1.forEach((var_core_value_sig4383, var_core_value_sig186C) => {
    var_core_value_sig4383.paragraphStyle = {
      ...(var_core_value_sig4383.paragraphStyle ?? {}),
      ...b(var_core_value_sig186C === 0, var_core_value_sig186C === var_core_value_sig03E1.length - 1)
    };
  });
  let var_core_value_sigBB57 = (var_core_value_sigD4FB = var_core_value_sig01B3.paragraphs) == null ? undefined : var_core_value_sigD4FB.find(var_core_value_sigD955 => var_core_value_sigD955.startIndex === var_core_value_sigF051 + 1);
  return var_core_value_sigBB57 && (var_core_value_sigBB57.paragraphStyle = S(var_core_value_sigBB57.paragraphStyle)), {
    nextDocumentData: var_core_value_sig3E71,
    cursorOffset: var_core_value_sigF051 + 1
  };
}
function De(var_core_value_sig7C4A) {
  let var_core_value_sigE799 = E(var_core_value_sig7C4A.documentData),
    var_core_value_sigB601 = y(var_core_value_sigE799, var_core_value_sig7C4A.cursorOffset);
  if (!var_core_value_sigB601) return null;
  let var_core_value_sig8B71 = C(var_core_value_sigE799, var_core_value_sigB601),
    var_core_value_sigAEFB = var_core_value_sig8B71[var_core_value_sig8B71.length - 1];
  if (!var_core_value_sigAEFB || !Ne(var_core_value_sigE799, var_core_value_sigB601, var_core_value_sigAEFB) || var_core_value_sig7C4A.cursorOffset < var_core_value_sigAEFB.startIndex) return null;
  let var_core_value_sig826B = O(var_core_value_sigE799, var_core_value_sigB601, var_core_value_sigAEFB),
    var_core_value_sigCF89 = var_core_value_sig7EEA(var_core_value_sigB601);
  if (var_core_value_sig826B >= var_core_value_sigCF89.endOffset - 1) return null;
  let var_core_value_sig00CB = var_core_value_sig59CE(var_core_value_sigE799, var_core_value_sigCF89.startOffset, var_core_value_sigCF89.endOffset, false),
    var_core_value_sig77EE = Ee({
      documentData: {
        ...var_core_value_sig7C4A.documentData,
        body: var_core_value_sig00CB
      },
      cursorOffset: var_core_value_sig7C4A.cursorOffset - var_core_value_sigCF89.startOffset
    });
  if (!(var_core_value_sig77EE != null && var_core_value_sig77EE.nextDocumentData["body"])) return null;
  let var_core_value_sig9F76 = var_core_value_sigCF89.endOffset - var_core_value_sigCF89.startOffset;
  var_core_value_sig77EE.nextDocumentData["body"][var_core_value_sigAC51] = true;
  let var_core_value_sigB008 = new var_core_value_sigCAF7();
  return var_core_value_sigB008.retain(var_core_value_sigCF89.startOffset), var_core_value_sigB008.insert(var_core_value_sig9F76, var_core_value_sig77EE.nextDocumentData["body"]), var_core_value_sigB008.delete(var_core_value_sig9F76), {
    actions: var_core_value_sig279C.getInstance().editOp(var_core_value_sigB008.serialize(), ["body"]),
    cursorOffset: var_core_value_sigCF89.startOffset + var_core_value_sig77EE.cursorOffset
  };
}
function Oe(var_core_value_sig8721) {
  var var_core_value_sig08BA, var_core_value_sigDBB5;
  let var_core_value_sigCFAC = w(var_core_value_sig8721.documentData),
    var_core_value_sig237B = E(var_core_value_sigCFAC),
    var_core_value_sigFEAB = (var_core_value_sig08BA = var_core_value_sig237B.blockRanges) == null ? undefined : var_core_value_sig08BA.find(var_core_value_sig48BD => var_core_value_sig48BD.blockId === var_core_value_sig8721.blockId && var_core_value_sig48BD.blockType === var_core_value_sig09F3.QUOTE);
  if (!var_core_value_sigFEAB) return null;
  let var_core_value_sigE347 = k(var_core_value_sigFEAB);
  return (var_core_value_sig237B.paragraphs ?? []).filter(var_core_value_sig429F => var_core_value_sig429F.startIndex > var_core_value_sigFEAB.startIndex && var_core_value_sig429F.startIndex < var_core_value_sigE347).forEach(var_core_value_sigF62A => {
    var_core_value_sigF62A.paragraphStyle = S(var_core_value_sigF62A.paragraphStyle);
  }), M(var_core_value_sig237B, var_core_value_sigE347, var_core_value_sigE347 + 1), M(var_core_value_sig237B, var_core_value_sigFEAB.startIndex, var_core_value_sigFEAB.startIndex + 1), var_core_value_sig237B.blockRanges = (var_core_value_sigDBB5 = var_core_value_sig237B.blockRanges) == null ? undefined : var_core_value_sigDBB5.filter(var_core_value_sig8178 => var_core_value_sig8178.blockId !== var_core_value_sig8721.blockId), {
    nextDocumentData: var_core_value_sigCFAC,
    cursorOffset: var_core_value_sigFEAB.startIndex
  };
}
function ke(var_core_value_sig3C5B) {
  var var_core_value_sig200B, var_core_value_sig3863;
  let var_core_value_sigC97C = w(var_core_value_sig3C5B.documentData),
    var_core_value_sigC4B1 = E(var_core_value_sigC97C),
    var_core_value_sig1BD9 = (var_core_value_sig200B = var_core_value_sigC4B1.blockRanges) == null ? undefined : var_core_value_sig200B.find(var_core_value_sigE9ED => var_core_value_sigE9ED.blockId === var_core_value_sig3C5B.blockId && var_core_value_sigE9ED.blockType === var_core_value_sig09F3.QUOTE);
  if (!var_core_value_sig1BD9) return null;
  let var_core_value_sigE43E = var_core_value_sig7EEA(var_core_value_sig1BD9);
  return M(var_core_value_sigC4B1, var_core_value_sigE43E.startOffset, var_core_value_sigE43E.endOffset), var_core_value_sigC4B1.blockRanges = (var_core_value_sig3863 = var_core_value_sigC4B1.blockRanges) == null ? undefined : var_core_value_sig3863.filter(var_core_value_sigB577 => var_core_value_sigB577.blockId !== var_core_value_sig3C5B.blockId), {
    nextDocumentData: var_core_value_sigC97C,
    cursorOffset: var_core_value_sig1BD9.startIndex
  };
}
function Ae(var_core_value_sigA937) {
  let var_core_value_sigCAD5 = w(var_core_value_sigA937.documentData),
    var_core_value_sigE503 = E(var_core_value_sigCAD5),
    var_core_value_sig48DD = y(var_core_value_sigE503, var_core_value_sigA937.cursorOffset);
  return var_core_value_sig48DD && (je(var_core_value_sigCAD5, var_core_value_sigE503, var_core_value_sig48DD, var_core_value_sigA937.cursorOffset, var_core_value_sigA937.paragraphStartIndex) || Me(var_core_value_sigCAD5, var_core_value_sigE503, var_core_value_sig48DD, var_core_value_sigA937.cursorOffset)) || null;
}
function je(var_core_value_sig5E6A, var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sigFD0C, var_core_value_sig849B) {
  let var_core_value_sig5F1A = Ke(var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sigFD0C, var_core_value_sig849B);
  if (!var_core_value_sig5F1A) return null;
  let var_core_value_sigB455 = var_core_value_sig5F1A.endTokenOffset - 1;
  return M(var_core_value_sigB7FC, var_core_value_sig5F1A.paragraph["startIndex"], var_core_value_sig5F1A.paragraph["startIndex"] + 1), {
    nextDocumentData: var_core_value_sig5E6A,
    cursorOffset: var_core_value_sigB455
  };
}
function Me(var_core_value_sig5241, var_core_value_sigC6E5, var_core_value_sigCEFB, var_core_value_sig1537) {
  if (var_core_value_sig1537 !== var_core_value_sigCEFB.startIndex + 1) return null;
  let var_core_value_sigE4C6 = C(var_core_value_sigC6E5, var_core_value_sigCEFB),
    var_core_value_sig4313 = var_core_value_sigE4C6[0];
  return !var_core_value_sig4313 || O(var_core_value_sigC6E5, var_core_value_sigCEFB, var_core_value_sig4313) !== var_core_value_sig1537 ? null : var_core_value_sigE4C6.length === 1 ? Pe(var_core_value_sig5241, var_core_value_sigC6E5, var_core_value_sigCEFB, var_core_value_sig4313) : Fe(var_core_value_sig5241, var_core_value_sigC6E5, var_core_value_sigCEFB, var_core_value_sig4313);
}
function y(var_core_value_sigFC87, var_core_value_sig156F) {
  var var_core_value_sigDD51;
  return (var_core_value_sigDD51 = var_core_value_sigFC87.blockRanges) == null ? undefined : var_core_value_sigDD51.find(var_core_value_sig9572 => {
    let var_core_value_sigD873 = k(var_core_value_sig9572);
    return var_core_value_sig9572.blockType === var_core_value_sig09F3.QUOTE && var_core_value_sig9572.startIndex <= var_core_value_sig156F && var_core_value_sig156F <= var_core_value_sigD873 + 2;
  });
}
function b(var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sig9FBA = false) {
  return {
    indentStart: {
      v: 22
    },
    keepLines: var_core_value_sig3D6F.TRUE,
    keepNext: var_core_value_sig72F6 ? var_core_value_sig3D6F.FALSE : var_core_value_sig3D6F.TRUE,
    widowControl: var_core_value_sig3D6F.TRUE,
    ...(var_core_value_sigF057 && var_core_value_sig9FBA ? {
      spaceAbove: {
        v: 8
      }
    } : {})
  };
}
function x(var_core_value_sigFE01, var_core_value_sigA2CE, var_core_value_sig1975, var_core_value_sig6EA1 = false) {
  let var_core_value_sig029F = (var_core_value_sigFE01.paragraphs ?? []).filter(var_core_value_sigA12B => var_core_value_sigA12B.startIndex > var_core_value_sigA2CE && var_core_value_sigA12B.startIndex < var_core_value_sig1975);
  var_core_value_sig029F.forEach((var_core_value_sigF230, var_core_value_sig09B8) => {
    var_core_value_sigF230.paragraphStyle = {
      ...(var_core_value_sigF230.paragraphStyle ?? {}),
      ...b(var_core_value_sig09B8 === 0, var_core_value_sig09B8 === var_core_value_sig029F.length - 1, var_core_value_sig6EA1)
    };
  });
}
function S(var_core_value_sig3767) {
  let var_core_value_sig670B = {
    ...(var_core_value_sig3767 ?? {})
  };
  return delete var_core_value_sig670B.borderLeft, delete var_core_value_sig670B.indentStart, delete var_core_value_sig670B.spaceAbove, delete var_core_value_sig670B.spaceBelow, delete var_core_value_sig670B.keepLines, delete var_core_value_sig670B.keepNext, delete var_core_value_sig670B.widowControl, var_core_value_sig670B;
}
function C(var_core_value_sig6912, var_core_value_sigE235) {
  let var_core_value_sig7664 = k(var_core_value_sigE235);
  return (var_core_value_sig6912.paragraphs ?? []).filter(var_core_value_sig6F91 => var_core_value_sig6F91.startIndex > var_core_value_sigE235.startIndex && var_core_value_sig6F91.startIndex < var_core_value_sig7664);
}
function Ne(var_core_value_sig2281, var_core_value_sig5E86, var_core_value_sig6998) {
  let var_core_value_sigF639 = O(var_core_value_sig2281, var_core_value_sig5E86, var_core_value_sig6998),
    var_core_value_sigEAE5 = var_core_value_sig2281.dataStream["slice"](var_core_value_sigF639, var_core_value_sig6998.startIndex);
  return Array.from(var_core_value_sigEAE5).every(var_core_value_sigF9C7 => var_core_value_sigF9C7 === var_core_value_sig48EA.BLOCK_START || var_core_value_sigF9C7 === var_core_value_sig48EA.BLOCK_END);
}
function Pe(var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82, var_core_value_sigCF4E) {
  var var_core_value_sig6CAD, var_core_value_sig8CF5;
  let var_core_value_sigDDD7 = var_core_value_sigCB82.startIndex,
    var_core_value_sigB2CE = k(var_core_value_sigCB82);
  M(var_core_value_sig6D47, var_core_value_sigB2CE, var_core_value_sigB2CE + 1), M(var_core_value_sig6D47, var_core_value_sigCB82.startIndex, var_core_value_sigCB82.startIndex + 1), var_core_value_sig6D47.blockRanges = (var_core_value_sig6CAD = var_core_value_sig6D47.blockRanges) == null ? undefined : var_core_value_sig6CAD.filter(var_core_value_sig8895 => var_core_value_sig8895.blockId !== var_core_value_sigCB82.blockId);
  let var_core_value_sig443C = (var_core_value_sig8CF5 = var_core_value_sig6D47.paragraphs) == null ? undefined : var_core_value_sig8CF5.find(var_core_value_sigC80B => var_core_value_sigC80B.startIndex === var_core_value_sigCF4E.startIndex - 1);
  return var_core_value_sig443C && (var_core_value_sig443C.paragraphStyle = S(var_core_value_sig443C.paragraphStyle)), {
    nextDocumentData: var_core_value_sigE94C,
    cursorOffset: var_core_value_sigDDD7
  };
}
function Fe(var_core_value_sig39B1, var_core_value_sig210D, var_core_value_sigB4B4, var_core_value_sigD407) {
  var var_core_value_sig63F3, var_core_value_sig6A71;
  let var_core_value_sig3BF6 = var_core_value_sigD407.startIndex,
    var_core_value_sig38CE = var_core_value_sigB4B4.startIndex;
  j(var_core_value_sig210D, var_core_value_sigD407.startIndex + 1, var_core_value_sig48EA.BLOCK_START), M(var_core_value_sig210D, var_core_value_sigB4B4.startIndex, var_core_value_sigB4B4.startIndex + 1);
  let var_core_value_sig62B7 = (var_core_value_sig63F3 = var_core_value_sig210D.paragraphs) == null ? undefined : var_core_value_sig63F3.find(var_core_value_sig284F => var_core_value_sig284F.startIndex === var_core_value_sig3BF6 - 1),
    var_core_value_sig37A8 = (var_core_value_sig6A71 = var_core_value_sig210D.blockRanges) == null ? undefined : var_core_value_sig6A71.find(var_core_value_sigE154 => var_core_value_sigE154.blockId === var_core_value_sigB4B4.blockId);
  return var_core_value_sig62B7 && (var_core_value_sig62B7.paragraphStyle = S(var_core_value_sig62B7.paragraphStyle), var_core_value_sig37A8 && (var_core_value_sig37A8.startIndex = var_core_value_sig62B7.startIndex + 1)), var_core_value_sig37A8 && x(var_core_value_sig210D, var_core_value_sig37A8.startIndex, var_core_value_sig37A8.endIndex), {
    nextDocumentData: var_core_value_sig39B1,
    cursorOffset: var_core_value_sig38CE
  };
}
function w(var_core_value_sigA90D) {
  return {
    ...var_core_value_sigA90D,
    body: var_core_value_sigA90D.body ? Ie(var_core_value_sigA90D.body) : var_core_value_sigA90D.body
  };
}
function Ie(var_core_value_sig7A3C) {
  var var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04, var_core_value_sig947E, var_core_value_sig4545, var_core_value_sigF39A, var_core_value_sigF79C, var_core_value_sig2E54, var_core_value_sig7658;
  return {
    ...var_core_value_sig7A3C,
    paragraphs: (var_core_value_sig0511 = var_core_value_sig7A3C.paragraphs) == null ? undefined : var_core_value_sig0511.map(var_core_value_sig4632 => ({
      ...var_core_value_sig4632,
      bullet: T(var_core_value_sig4632.bullet),
      paragraphStyle: T(var_core_value_sig4632.paragraphStyle)
    })),
    sectionBreaks: (var_core_value_sig1F44 = var_core_value_sig7A3C.sectionBreaks) == null ? undefined : var_core_value_sig1F44.map(var_core_value_sig12F2 => ({
      ...var_core_value_sig12F2
    })),
    textRuns: (var_core_value_sigCB04 = var_core_value_sig7A3C.textRuns) == null ? undefined : var_core_value_sigCB04.map(var_core_value_sig2259 => ({
      ...var_core_value_sig2259
    })),
    tables: (var_core_value_sig947E = var_core_value_sig7A3C.tables) == null ? undefined : var_core_value_sig947E.map(var_core_value_sig9E2F => ({
      ...var_core_value_sig9E2F
    })),
    columnGroups: (var_core_value_sig4545 = var_core_value_sig7A3C.columnGroups) == null ? undefined : var_core_value_sig4545.map(var_core_value_sigD082 => {
      var var_core_value_sigDBB7;
      return {
        ...var_core_value_sigD082,
        columns: (var_core_value_sigDBB7 = var_core_value_sigD082.columns) == null ? undefined : var_core_value_sigDBB7.map(var_core_value_sigBC46 => T(var_core_value_sigBC46))
      };
    }),
    blockRanges: (var_core_value_sigF39A = var_core_value_sig7A3C.blockRanges) == null ? undefined : var_core_value_sigF39A.map(var_core_value_sigD0A8 => ({
      ...var_core_value_sigD0A8
    })),
    customRanges: (var_core_value_sigF79C = var_core_value_sig7A3C.customRanges) == null ? undefined : var_core_value_sigF79C.map(var_core_value_sigF4B9 => ({
      ...var_core_value_sigF4B9
    })),
    customDecorations: (var_core_value_sig2E54 = var_core_value_sig7A3C.customDecorations) == null ? undefined : var_core_value_sig2E54.map(var_core_value_sig5CEE => ({
      ...var_core_value_sig5CEE
    })),
    customBlocks: (var_core_value_sig7658 = var_core_value_sig7A3C.customBlocks) == null ? undefined : var_core_value_sig7658.map(var_core_value_sigE92A => ({
      ...var_core_value_sigE92A
    }))
  };
}
function T(var_core_value_sigDCF5) {
  return Array.isArray(var_core_value_sigDCF5) ? var_core_value_sigDCF5.map(var_core_value_sig362B => T(var_core_value_sig362B)) : !var_core_value_sigDCF5 || typeof var_core_value_sigDCF5 != "object" ? var_core_value_sigDCF5 : Object.fromEntries(Object.entries(var_core_value_sigDCF5).map(([var_core_value_sig5CA5, var_core_value_sigE90F]) => [var_core_value_sig5CA5, T(var_core_value_sigE90F)]));
}
function E(var_core_value_sigC786) {
  if (!var_core_value_sigC786.body) throw Error("Document\x20body\x20is\x20required");
  return var_core_value_sigC786.body;
}
function Le(var_core_value_sigC0D9, var_core_value_sigF0511, var_core_value_sig5825, var_core_value_sig4EB7 = "convert-paragraph") {
  if (var_core_value_sigF0511 == null || var_core_value_sig5825 == null) {
    let var_core_value_sigEFD4 = ze(var_core_value_sigC0D9);
    return {
      startOffset: var_core_value_sigEFD4,
      endOffset: var_core_value_sigEFD4
    };
  }
  let var_core_value_sig73AF = Math.min(var_core_value_sigF0511, var_core_value_sig5825),
    var_core_value_sig548A = Math.max(var_core_value_sigF0511, var_core_value_sig5825),
    var_core_value_sigE026 = We(var_core_value_sigC0D9, var_core_value_sig73AF, var_core_value_sig548A);
  return var_core_value_sig73AF === var_core_value_sig548A ? var_core_value_sig4EB7 === "insert-new" ? {
    startOffset: var_core_value_sig73AF,
    endOffset: var_core_value_sig548A
  } : Re(var_core_value_sigC0D9, var_core_value_sig73AF, var_core_value_sigE026) : Ve(var_core_value_sigC0D9, var_core_value_sig73AF, var_core_value_sig548A, var_core_value_sigE026);
}
function Re(var_core_value_sig339E, var_core_value_sig7550, var_core_value_sig2983) {
  let var_core_value_sigE1B0 = He(var_core_value_sig339E, var_core_value_sig7550);
  if (var_core_value_sigE1B0) {
    let var_core_value_sig861B = D(var_core_value_sig339E, var_core_value_sigE1B0, var_core_value_sig2983);
    if (var_core_value_sig861B < var_core_value_sigE1B0.startIndex) return {
      startOffset: var_core_value_sig861B,
      endOffset: var_core_value_sig2983 ? Math.min(var_core_value_sigE1B0.startIndex + 1, var_core_value_sig2983.endOffset) : var_core_value_sigE1B0.startIndex + 1
    };
  }
  let var_core_value_sigD4FF = var_core_value_sig7550 === 0 && var_core_value_sig339E.dataStream[0] === var_core_value_sig48EA.PARAGRAPH ? 1 : var_core_value_sig7550;
  return {
    startOffset: var_core_value_sigD4FF,
    endOffset: var_core_value_sigD4FF
  };
}
function ze(var_core_value_sig1E5B) {
  return var_core_value_sig1E5B.dataStream["endsWith"](var_core_value_sig48EA.SECTION_BREAK) ? Math.max(0, var_core_value_sig1E5B.dataStream["length"] - 1) : var_core_value_sig1E5B.dataStream["length"];
}
function Be(var_core_value_sigB680, var_core_value_sig1F64, var_core_value_sigDD1C) {
  var var_core_value_sig2C39;
  let var_core_value_sigB7D1 = Math.min(var_core_value_sig1F64, var_core_value_sigDD1C),
    var_core_value_sig64F0 = Math.max(var_core_value_sig1F64, var_core_value_sigDD1C);
  return !!((var_core_value_sig2C39 = var_core_value_sigB680.tables) != null && var_core_value_sig2C39.some(var_core_value_sig5237 => var_core_value_sigB7D1 > var_core_value_sig5237.startIndex && var_core_value_sigB7D1 < var_core_value_sig5237.endIndex || var_core_value_sig64F0 > var_core_value_sig5237.startIndex && var_core_value_sig64F0 < var_core_value_sig5237.endIndex || var_core_value_sigB7D1 <= var_core_value_sig5237.startIndex && var_core_value_sig64F0 >= var_core_value_sig5237.endIndex));
}
function Ve(var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig2EAD) {
  let var_core_value_sig6774 = [...(var_core_value_sig85B1.paragraphs ?? [])].sort((var_core_value_sigBB00, var_core_value_sig7E54) => var_core_value_sigBB00.startIndex - var_core_value_sig7E54.startIndex),
    var_core_value_sig340D = var_core_value_sig957F(var_core_value_sig85B1),
    var_core_value_sig82D4 = var_core_value_sig6774.find(var_core_value_sig9A8D => D(var_core_value_sig85B1, var_core_value_sig9A8D, var_core_value_sig2EAD, var_core_value_sig340D) <= var_core_value_sig3141 && var_core_value_sig3141 <= var_core_value_sig9A8D.startIndex),
    var_core_value_sigBDE4 = var_core_value_sig6774.find(var_core_value_sigC259 => var_core_value_sigC259.startIndex >= var_core_value_sig2162 - 1) ?? var_core_value_sig6774[var_core_value_sig6774.length - 1];
  return {
    startOffset: var_core_value_sig82D4 ? D(var_core_value_sig85B1, var_core_value_sig82D4, var_core_value_sig2EAD, var_core_value_sig340D) : var_core_value_sig3141,
    endOffset: var_core_value_sigBDE4 ? Ue(var_core_value_sigBDE4, var_core_value_sig2EAD) : var_core_value_sig2162
  };
}
function He(var_core_value_sig7DF1, var_core_value_sigDC86) {
  let var_core_value_sig0B0C = [...(var_core_value_sig7DF1.paragraphs ?? [])].sort((var_core_value_sig9C9F, var_core_value_sigFDEA) => var_core_value_sig9C9F.startIndex - var_core_value_sigFDEA.startIndex),
    var_core_value_sigA39E = var_core_value_sig957F(var_core_value_sig7DF1);
  return var_core_value_sig0B0C.find(var_core_value_sig86D0 => (var_core_value_sigA39E.get(var_core_value_sig86D0.startIndex) ?? 0) <= var_core_value_sigDC86 && var_core_value_sigDC86 <= var_core_value_sig86D0.startIndex);
}
function D(var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1) {
  let var_core_value_sig7F19 = (var_core_value_sig65A1 == null ? undefined : var_core_value_sig65A1.get(var_core_value_sig011D.startIndex)) ?? var_core_value_sig33C8(var_core_value_sigBBEE, var_core_value_sig011D);
  return var_core_value_sig6167 ? Math.max(var_core_value_sig7F19, var_core_value_sig6167.startOffset) : var_core_value_sig7F19;
}
function Ue(var_core_value_sig7827, var_core_value_sig652C) {
  let var_core_value_sig7E32 = var_core_value_sig7827.startIndex + 1;
  return var_core_value_sig652C ? Math.min(var_core_value_sig7E32, var_core_value_sig652C.endOffset) : var_core_value_sig7E32;
}
function We(var_core_value_sig4C07, var_core_value_sig79AB, var_core_value_sig8E74) {
  let var_core_value_sig104C = Ge(var_core_value_sig4C07, var_core_value_sig79AB),
    var_core_value_sig841D = Ge(var_core_value_sig4C07, var_core_value_sig79AB === var_core_value_sig8E74 ? var_core_value_sig8E74 : Math.max(var_core_value_sig79AB, var_core_value_sig8E74 - 1));
  if (!(!var_core_value_sig104C && !var_core_value_sig841D)) {
    if (!var_core_value_sig104C || !var_core_value_sig841D || var_core_value_sig104C.startTokenOffset !== var_core_value_sig841D.startTokenOffset || var_core_value_sig104C.endTokenOffset !== var_core_value_sig841D.endTokenOffset) throw new v();
    return var_core_value_sig104C;
  }
}
function Ge(var_core_value_sig90CB, var_core_value_sigBDF5) {
  let var_core_value_sigACC6 = var_core_value_sig90CB.dataStream,
    var_core_value_sig1614 = -1;
  for (let var_core_value_sig4CD2 = Math.min(var_core_value_sigBDF5, var_core_value_sigACC6.length - 1); var_core_value_sig4CD2 >= 0; var_core_value_sig4CD2--) {
    let var_core_value_sig3D7D = var_core_value_sigACC6[var_core_value_sig4CD2];
    if (var_core_value_sig3D7D === var_core_value_sig48EA.TABLE_CELL_END) return;
    if (var_core_value_sig3D7D === var_core_value_sig48EA.TABLE_CELL_START) {
      var_core_value_sig1614 = var_core_value_sig4CD2;
      break;
    }
  }
  if (var_core_value_sig1614 < 0) return;
  let var_core_value_sig85C3 = var_core_value_sigACC6.indexOf(var_core_value_sig48EA.TABLE_CELL_END, var_core_value_sig1614 + 1);
  if (!(var_core_value_sig85C3 < 0 || var_core_value_sigBDF5 < var_core_value_sig1614 + 1 || var_core_value_sigBDF5 > var_core_value_sig85C3 - 1)) return {
    startOffset: var_core_value_sig1614 + 1,
    endOffset: Math.max(var_core_value_sig1614 + 1, var_core_value_sig85C3 - 1),
    startTokenOffset: var_core_value_sig1614,
    endTokenOffset: var_core_value_sig85C3
  };
}
function O(var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sig6201) {
  return Math.max(var_core_value_sig33C8(var_core_value_sigB996, var_core_value_sig6201), var_core_value_sig4BBA.startIndex + 1);
}
function k(var_core_value_sig5151) {
  return var_core_value_sig7EEA(var_core_value_sig5151).endOffset - 1;
}
function Ke(var_core_value_sigB542, var_core_value_sigBB6C, var_core_value_sigE2BF, var_core_value_sigB8C7) {
  let var_core_value_sigA56E = k(var_core_value_sigBB6C),
    var_core_value_sig1998 = (var_core_value_sigB542.paragraphs ?? []).find(var_core_value_sig48CA => var_core_value_sig48CA.startIndex === var_core_value_sigA56E + 1);
  if (!var_core_value_sig1998 || var_core_value_sigB8C7 != null && var_core_value_sig1998.startIndex !== var_core_value_sigB8C7 || var_core_value_sigE2BF < var_core_value_sigA56E || var_core_value_sigE2BF > var_core_value_sig1998.startIndex + 1 || var_core_value_sigB542.dataStream[var_core_value_sig1998.startIndex] !== var_core_value_sig48EA.PARAGRAPH) return null;
  let var_core_value_sigFF19 = var_core_value_sig33C8(var_core_value_sigB542, var_core_value_sig1998),
    var_core_value_sig43B8 = var_core_value_sigB542.dataStream["slice"](var_core_value_sigFF19, var_core_value_sig1998.startIndex);
  return Array.from(var_core_value_sig43B8).every(var_core_value_sig50AF => var_core_value_sig50AF === var_core_value_sig48EA.BLOCK_END) ? {
    paragraph: var_core_value_sig1998,
    endTokenOffset: var_core_value_sigA56E
  } : null;
}
function A(var_core_value_sigD98F, var_core_value_sig66C0) {
  var var_core_value_sig9D15;
  let var_core_value_sigB785 = k(var_core_value_sig66C0),
    var_core_value_sig130F = var_core_value_sigD98F.dataStream[var_core_value_sigB785 + 1];
  (var_core_value_sig130F === var_core_value_sig48EA.SECTION_BREAK || var_core_value_sig130F === undefined) && j(var_core_value_sigD98F, var_core_value_sigB785 + 1, var_core_value_sig48EA.PARAGRAPH, {
    paragraphs: [{
      startIndex: 0,
      paragraphId: var_core_value_sigAA1E(new Set((var_core_value_sig9D15 = var_core_value_sigD98F.paragraphs) == null ? undefined : var_core_value_sig9D15.map(var_core_value_sigA942 => var_core_value_sigA942.paragraphId)))
    }]
  });
}
function j(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F, var_core_value_sigDE3D = {}) {
  var var_core_value_sigF175, var_core_value_sig6A18;
  var_core_value_sig866F && (var_core_value_sigC0E3.dataStream = "" + var_core_value_sigC0E3.dataStream["slice"](0, var_core_value_sig52F7) + var_core_value_sig866F + var_core_value_sigC0E3.dataStream["slice"](var_core_value_sig52F7), qe(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F.length), (var_core_value_sigF175 = var_core_value_sigDE3D.paragraphs) != null && var_core_value_sigF175.length && (var_core_value_sigC0E3.paragraphs = [...(var_core_value_sigC0E3.paragraphs ?? []), ...var_core_value_sigDE3D.paragraphs["map"](var_core_value_sigA621 => ({
    ...var_core_value_sigA621,
    startIndex: var_core_value_sigA621.startIndex + var_core_value_sig52F7
  }))].sort((var_core_value_sigBBFF, var_core_value_sig8889) => var_core_value_sigBBFF.startIndex - var_core_value_sig8889.startIndex)), (var_core_value_sig6A18 = var_core_value_sigDE3D.blockRanges) != null && var_core_value_sig6A18.length && (var_core_value_sigC0E3.blockRanges = [...(var_core_value_sigC0E3.blockRanges ?? []), ...var_core_value_sigDE3D.blockRanges["map"](var_core_value_sig32F8 => ({
    ...var_core_value_sig32F8,
    startIndex: var_core_value_sig32F8.startIndex + var_core_value_sig52F7,
    endIndex: var_core_value_sig32F8.endIndex + var_core_value_sig52F7
  }))].sort((var_core_value_sig5B67, var_core_value_sig1758) => var_core_value_sig5B67.startIndex - var_core_value_sig1758.startIndex)));
}
function M(var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547) {
  let var_core_value_sigBCA9 = var_core_value_sig2547 - var_core_value_sig49B0;
  var_core_value_sig4E3D.dataStream = "" + var_core_value_sig4E3D.dataStream["slice"](0, var_core_value_sig49B0) + var_core_value_sig4E3D.dataStream["slice"](var_core_value_sig2547), Je(var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sigBCA9);
}
function qe(var_core_value_sig4CDF, var_core_value_sig3F79, var_core_value_sig880E) {
  var_core_value_sig4CDF.paragraphs = N(var_core_value_sig4CDF.paragraphs, var_core_value_sig3F79, var_core_value_sig880E), var_core_value_sig4CDF.sectionBreaks = N(var_core_value_sig4CDF.sectionBreaks, var_core_value_sig3F79, var_core_value_sig880E), var_core_value_sig4CDF.customBlocks = N(var_core_value_sig4CDF.customBlocks, var_core_value_sig3F79, var_core_value_sig880E), var_core_value_sig4CDF.textRuns = Ye(var_core_value_sig4CDF.textRuns, var_core_value_sig3F79, var_core_value_sig880E), var_core_value_sig4CDF.tables = Xe(var_core_value_sig4CDF.tables, var_core_value_sig3F79, var_core_value_sig880E), var_core_value_sig4CDF.columnGroups = F(var_core_value_sig4CDF.columnGroups, var_core_value_sig3F79, var_core_value_sig880E), var_core_value_sig4CDF.customRanges = F(var_core_value_sig4CDF.customRanges, var_core_value_sig3F79, var_core_value_sig880E), var_core_value_sig4CDF.customDecorations = F(var_core_value_sig4CDF.customDecorations, var_core_value_sig3F79, var_core_value_sig880E), var_core_value_sig4CDF.blockRanges = F(var_core_value_sig4CDF.blockRanges, var_core_value_sig3F79, var_core_value_sig880E);
}
function Je(var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B) {
  var var_core_value_sig7D1B, var_core_value_sig7BE0;
  var_core_value_sigC9ED.paragraphs = P(var_core_value_sigC9ED.paragraphs, var_core_value_sigB57B, var_core_value_sig780B), var_core_value_sigC9ED.sectionBreaks = P(var_core_value_sigC9ED.sectionBreaks, var_core_value_sigB57B, var_core_value_sig780B), var_core_value_sigC9ED.customBlocks = P(var_core_value_sigC9ED.customBlocks, var_core_value_sigB57B, var_core_value_sig780B), var_core_value_sigC9ED.textRuns = (var_core_value_sig7D1B = Ze((var_core_value_sig7BE0 = var_core_value_sigC9ED.textRuns) == null ? undefined : var_core_value_sig7BE0.map(var_core_value_sig4805 => ({
    ...var_core_value_sig4805,
    startIndex: var_core_value_sig4805.st,
    endIndex: var_core_value_sig4805.ed
  })), var_core_value_sigB57B, var_core_value_sig780B)) == null ? undefined : var_core_value_sig7D1B.map(var_core_value_sigE67E => {
    let {
      startIndex: var_core_value_sig2902,
      endIndex: var_core_value_sig9989,
      ...var_core_value_sig698E
    } = var_core_value_sigE67E;
    return {
      ...var_core_value_sig698E,
      st: var_core_value_sig2902,
      ed: var_core_value_sig9989
    };
  }), var_core_value_sigC9ED.tables = Ze(var_core_value_sigC9ED.tables, var_core_value_sigB57B, var_core_value_sig780B), var_core_value_sigC9ED.columnGroups = I(var_core_value_sigC9ED.columnGroups, var_core_value_sigB57B, var_core_value_sig780B), var_core_value_sigC9ED.customRanges = I(var_core_value_sigC9ED.customRanges, var_core_value_sigB57B, var_core_value_sig780B), var_core_value_sigC9ED.customDecorations = I(var_core_value_sigC9ED.customDecorations, var_core_value_sigB57B, var_core_value_sig780B), var_core_value_sigC9ED.blockRanges = I(var_core_value_sigC9ED.blockRanges, var_core_value_sigB57B, var_core_value_sig780B);
}
function N(var_core_value_sig7D40, var_core_value_sig6C7E, var_core_value_sig68BE) {
  return var_core_value_sig7D40 == null ? undefined : var_core_value_sig7D40.map(var_core_value_sig2809 => var_core_value_sig2809.startIndex >= var_core_value_sig6C7E ? {
    ...var_core_value_sig2809,
    startIndex: var_core_value_sig2809.startIndex + var_core_value_sig68BE
  } : var_core_value_sig2809);
}
function P(var_core_value_sig04C6, var_core_value_sigCA05, var_core_value_sig2F2B) {
  let var_core_value_sig70AF = var_core_value_sigCA05 + var_core_value_sig2F2B;
  return var_core_value_sig04C6 == null ? undefined : var_core_value_sig04C6.map(var_core_value_sig2DAB => var_core_value_sig2DAB.startIndex >= var_core_value_sigCA05 && var_core_value_sig2DAB.startIndex < var_core_value_sig70AF ? null : var_core_value_sig2DAB.startIndex >= var_core_value_sig70AF ? {
    ...var_core_value_sig2DAB,
    startIndex: var_core_value_sig2DAB.startIndex - var_core_value_sig2F2B
  } : var_core_value_sig2DAB).filter(var_core_value_sig877E => var_core_value_sig877E != null);
}
function Ye(var_core_value_sigD04E, var_core_value_sigB99B, var_core_value_sig5A75) {
  return var_core_value_sigD04E == null ? undefined : var_core_value_sigD04E.map(var_core_value_sig20C8 => var_core_value_sig20C8.st >= var_core_value_sigB99B ? {
    ...var_core_value_sig20C8,
    st: var_core_value_sig20C8.st + var_core_value_sig5A75,
    ed: var_core_value_sig20C8.ed + var_core_value_sig5A75
  } : var_core_value_sig20C8.ed > var_core_value_sigB99B ? {
    ...var_core_value_sig20C8,
    ed: var_core_value_sig20C8.ed + var_core_value_sig5A75
  } : var_core_value_sig20C8);
}
function F(var_core_value_sig7BAF, var_core_value_sig8F69, var_core_value_sig6884) {
  return var_core_value_sig7BAF == null ? undefined : var_core_value_sig7BAF.map(var_core_value_sigE9A7 => var_core_value_sig330B(var_core_value_sigE9A7, var_core_value_sig8F69, var_core_value_sig6884));
}
function Xe(var_core_value_sig066E, var_core_value_sig9B0D, var_core_value_sig3D2C) {
  return var_core_value_sig066E == null ? undefined : var_core_value_sig066E.map(var_core_value_sigBECE => var_core_value_sigA298(var_core_value_sigBECE, var_core_value_sig9B0D, var_core_value_sig3D2C));
}
function I(var_core_value_sigC56D, var_core_value_sig3A17, var_core_value_sig938F) {
  return var_core_value_sigC56D == null ? undefined : var_core_value_sigC56D.map(var_core_value_sig1B22 => var_core_value_sig0B40(var_core_value_sig1B22, var_core_value_sig3A17, var_core_value_sig938F)).filter(var_core_value_sig7F72 => var_core_value_sig7F72 != null);
}
function Ze(var_core_value_sigD948, var_core_value_sigBE5E, var_core_value_sig0281) {
  return var_core_value_sigD948 == null ? undefined : var_core_value_sigD948.map(var_core_value_sig7B2A => var_core_value_sigCDAF(var_core_value_sig7B2A, var_core_value_sigBE5E, var_core_value_sig0281)).filter(var_core_value_sig06CD => var_core_value_sig06CD != null);
}
function L(var_core_value_sigED71, var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sigB16B) {
  var_core_value_sigED71 == null || var_core_value_sigED71.forEach(var_core_value_sigA5F1 => {
    var_core_value_sigA5F1.startIndex >= var_core_value_sig281C && var_core_value_sigA5F1.startIndex < var_core_value_sig3C92 && (var_core_value_sigA5F1.startIndex += var_core_value_sigB16B);
  });
}
function Qe(var_core_value_sig585D, var_core_value_sigE722, var_core_value_sig062A, var_core_value_sig050A) {
  var_core_value_sig585D == null || var_core_value_sig585D.forEach(var_core_value_sig97A2 => {
    var_core_value_sig97A2.st >= var_core_value_sigE722 && var_core_value_sig97A2.st < var_core_value_sig062A ? (var_core_value_sig97A2.st += var_core_value_sig050A, var_core_value_sig97A2.ed += var_core_value_sig050A) : var_core_value_sig97A2.ed > var_core_value_sigE722 && var_core_value_sig97A2.ed < var_core_value_sig062A && (var_core_value_sig97A2.ed += var_core_value_sig050A);
  });
}
function R(var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683, var_core_value_sig26EC) {
  var_core_value_sig8B32 == null || var_core_value_sig8B32.forEach(var_core_value_sig07E9 => {
    var_core_value_sig07E9.startIndex >= var_core_value_sig870F && var_core_value_sig07E9.startIndex < var_core_value_sigB683 ? (var_core_value_sig07E9.startIndex += var_core_value_sig26EC, var_core_value_sig07E9.endIndex += var_core_value_sig26EC) : var_core_value_sig07E9.endIndex > var_core_value_sig870F && var_core_value_sig07E9.endIndex < var_core_value_sigB683 && (var_core_value_sig07E9.endIndex += var_core_value_sig26EC);
  });
}
const $e = "DOCS_QUOTE_PLUGIN",
  et = "gray.300",
  tt = 2,
  nt = {
    id: "docs-quote.command.insert-below",
    type: var_core_value_sig6E68.COMMAND,
    handler: var_core_value_sigEEDB => {
      var var_core_value_sig36E7;
      if (var_core_value_sig4A83(K(var_core_value_sigEEDB))) return false;
      let var_core_value_sig6A78 = var_core_value_sigE5BA(var_core_value_sigEEDB);
      if (var_core_value_sig6A78) return var_core_value_sigEEDB.get(var_core_value_sig4592).syncExecuteCommand(z.id, {
        startOffset: var_core_value_sig6A78.startOffset,
        endOffset: var_core_value_sig6A78.endOffset,
        insertionMode: "insert-new",
        unitId: var_core_value_sig6A78.unitId
      });
      let var_core_value_sigF7EF = ot(var_core_value_sigEEDB);
      if (!var_core_value_sigF7EF) return false;
      let var_core_value_sig27F9 = (var_core_value_sig36E7 = var_core_value_sigEEDB.get(var_core_value_sig1617).getCurrentUnitOfType(var_core_value_sig726E.UNIVER_DOC)) == null ? undefined : var_core_value_sig36E7.getBody(),
        var_core_value_sig393E = var_core_value_sig27F9 ? var_core_value_sig803B(var_core_value_sig27F9, var_core_value_sigF7EF) : var_core_value_sigF7EF.startIndex + 1;
      return var_core_value_sigEEDB.get(var_core_value_sig4592).syncExecuteCommand(z.id, {
        startOffset: var_core_value_sig393E,
        endOffset: var_core_value_sig393E
      });
    }
  },
  z = {
    id: "docs-quote.command.insert",
    type: var_core_value_sig6E68.COMMAND,
    handler: (var_core_value_sigB609, var_core_value_sig390D) => {
      let var_core_value_sigC928 = G(var_core_value_sigB609, var_core_value_sig390D == null ? undefined : var_core_value_sig390D.unitId);
      if (!var_core_value_sigC928) return false;
      let var_core_value_sig39B7 = K(var_core_value_sigB609);
      if (var_core_value_sig4A83(var_core_value_sig39B7)) return false;
      let var_core_value_sig18E0 = rt(var_core_value_sig390D, var_core_value_sig39B7),
        var_core_value_sigE161 = it(var_core_value_sigC928.previousDocumentData, var_core_value_sig18E0);
      if (var_core_value_sigE161) {
        if (var_core_value_sigE161.blockType !== var_core_value_sig09F3.QUOTE) return false;
        let var_core_value_sig4F59 = Oe({
          blockId: var_core_value_sigE161.blockId,
          documentData: var_core_value_sigC928.previousDocumentData
        });
        return var_core_value_sig4F59 ? Y(var_core_value_sigC928.commandService, var_core_value_sigC928.unitId, var_core_value_sigC928.previousDocumentData, var_core_value_sig4F59.nextDocumentData, z.id, var_core_value_sig4F59.cursorOffset) : false;
      }
      let var_core_value_sigBDEE;
      try {
        var_core_value_sigBDEE = Se({
          blockId: (var_core_value_sig390D == null ? undefined : var_core_value_sig390D.blockId) ?? var_core_value_sigC9F5(6),
          documentData: var_core_value_sigC928.previousDocumentData,
          endOffset: var_core_value_sig18E0 == null ? undefined : var_core_value_sig18E0.endOffset,
          insertionMode: var_core_value_sig390D == null ? undefined : var_core_value_sig390D.insertionMode,
          startOffset: var_core_value_sig18E0 == null ? undefined : var_core_value_sig18E0.startOffset
        });
      } catch (var_core_value_sigF564) {
        if (var_core_value_sigF564 instanceof v) return false;
        throw var_core_value_sigF564;
      }
      return Y(var_core_value_sigC928.commandService, var_core_value_sigC928.unitId, var_core_value_sigC928.previousDocumentData, var_core_value_sigBDEE.nextDocumentData, z.id, var_core_value_sigBDEE.cursorOffset);
    }
  },
  B = {
    id: "docs-quote.command.exit",
    type: var_core_value_sig6E68.COMMAND,
    handler: (var_core_value_sig1F40, var_core_value_sig3FC7) => {
      var var_core_value_sig1E1B;
      let var_core_value_sig3B10 = G(var_core_value_sig1F40, var_core_value_sig3FC7 == null ? undefined : var_core_value_sig3FC7.unitId);
      if (!var_core_value_sig3B10) return false;
      let var_core_value_sig89E6 = (var_core_value_sig3FC7 == null ? undefined : var_core_value_sig3FC7.cursorOffset) ?? ((var_core_value_sig1E1B = K(var_core_value_sig1F40)) == null ? undefined : var_core_value_sig1E1B.startOffset);
      if (var_core_value_sig89E6 == null) return false;
      let var_core_value_sig4743 = De({
        cursorOffset: var_core_value_sig89E6,
        documentData: var_core_value_sig3B10.previousDocumentData
      });
      return var_core_value_sig4743 ? ht(var_core_value_sig3B10.commandService, var_core_value_sig3B10.unitId, var_core_value_sig4743.actions, B.id, var_core_value_sig4743.cursorOffset) : false;
    }
  },
  V = {
    id: "docs-quote.command.unwrap",
    type: var_core_value_sig6E68.COMMAND,
    handler: (var_core_value_sigEB6A, var_core_value_sig3D46) => {
      if (!var_core_value_sig3D46) return false;
      let var_core_value_sigCC93 = G(var_core_value_sigEB6A, var_core_value_sig3D46.unitId);
      if (!var_core_value_sigCC93) return false;
      let var_core_value_sig5964 = Oe({
        blockId: var_core_value_sig3D46.blockId,
        documentData: var_core_value_sigCC93.previousDocumentData
      });
      return var_core_value_sig5964 ? Y(var_core_value_sigCC93.commandService, var_core_value_sigCC93.unitId, var_core_value_sigCC93.previousDocumentData, var_core_value_sig5964.nextDocumentData, V.id, var_core_value_sig5964.cursorOffset) : false;
    }
  },
  H = {
    id: "docs-quote.command.update-style",
    type: var_core_value_sig6E68.COMMAND,
    handler: (var_core_value_sig808B, var_core_value_sig2A26) => {
      if (!var_core_value_sig2A26 || var_core_value_sig2A26.lineColor == null && var_core_value_sig2A26.textColor == null) return false;
      let var_core_value_sig1179 = G(var_core_value_sig808B, var_core_value_sig2A26.unitId);
      if (!var_core_value_sig1179) return false;
      let var_core_value_sigEA92 = st(var_core_value_sig1179.previousDocumentData, var_core_value_sig2A26);
      return var_core_value_sigEA92 ? !!var_core_value_sig1179.commandService["syncExecuteCommand"](var_core_value_sig0B4E.id, {
        unitId: var_core_value_sig1179.unitId,
        actions: var_core_value_sigEA92,
        textRanges: null,
        noNeedSetTextRange: true,
        isEditing: false,
        trigger: H.id
      }) : false;
    }
  },
  U = {
    id: "docs-quote.command.remove",
    type: var_core_value_sig6E68.COMMAND,
    handler: (var_core_value_sig8FD9, var_core_value_sig1AE5) => {
      if (!var_core_value_sig1AE5) return false;
      let var_core_value_sig7100 = G(var_core_value_sig8FD9, var_core_value_sig1AE5.unitId);
      if (!var_core_value_sig7100) return false;
      let var_core_value_sigA19A = ke({
        blockId: var_core_value_sig1AE5.blockId,
        documentData: var_core_value_sig7100.previousDocumentData
      });
      return var_core_value_sigA19A ? Y(var_core_value_sig7100.commandService, var_core_value_sig7100.unitId, var_core_value_sig7100.previousDocumentData, var_core_value_sigA19A.nextDocumentData, U.id, var_core_value_sigA19A.cursorOffset) : false;
    }
  },
  W = {
    id: "docs-quote.command.cancel-empty-paragraph",
    type: var_core_value_sig6E68.COMMAND,
    handler: (var_core_value_sigD3F5, var_core_value_sig3082) => {
      var var_core_value_sigF5D1;
      let var_core_value_sig8775 = G(var_core_value_sigD3F5, var_core_value_sig3082 == null ? undefined : var_core_value_sig3082.unitId);
      if (!var_core_value_sig8775) return false;
      let var_core_value_sig481B = (var_core_value_sig3082 == null ? undefined : var_core_value_sig3082.cursorOffset) ?? ((var_core_value_sigF5D1 = K(var_core_value_sigD3F5)) == null ? undefined : var_core_value_sigF5D1.startOffset);
      if (var_core_value_sig481B == null) return false;
      let var_core_value_sig13D7 = Ae({
        cursorOffset: var_core_value_sig481B,
        documentData: var_core_value_sig8775.previousDocumentData,
        paragraphStartIndex: var_core_value_sig3082 == null ? undefined : var_core_value_sig3082.paragraphStartIndex
      });
      return var_core_value_sig13D7 ? Y(var_core_value_sig8775.commandService, var_core_value_sig8775.unitId, var_core_value_sig8775.previousDocumentData, var_core_value_sig13D7.nextDocumentData, W.id, var_core_value_sig13D7.cursorOffset) : false;
    }
  };
function G(var_core_value_sig90C0, var_core_value_sigF1B2) {
  let var_core_value_sigC2BB = var_core_value_sig90C0.get(var_core_value_sig1617),
    var_core_value_sigD9DB = var_core_value_sigF1B2 ? var_core_value_sigC2BB.getUnit(var_core_value_sigF1B2, var_core_value_sig726E.UNIVER_DOC) : var_core_value_sigC2BB.getCurrentUnitOfType(var_core_value_sig726E.UNIVER_DOC);
  return var_core_value_sigD9DB ? {
    commandService: var_core_value_sig90C0.get(var_core_value_sig4592),
    previousDocumentData: var_core_value_sigD9DB.getSnapshot(),
    unitId: var_core_value_sigD9DB.getUnitId()
  } : null;
}
function K(var_core_value_sigA363) {
  var var_core_value_sigFBA5;
  return (var_core_value_sigFBA5 = var_core_value_sigA363.get(var_core_value_sig3625).getTextRanges()) == null ? undefined : var_core_value_sigFBA5[0];
}
function rt(var_core_value_sigAC47, var_core_value_sigA06F) {
  let var_core_value_sig770E = (var_core_value_sigAC47 == null ? undefined : var_core_value_sigAC47.startOffset) ?? (var_core_value_sigA06F == null ? undefined : var_core_value_sigA06F.startOffset),
    var_core_value_sig4654 = (var_core_value_sigAC47 == null ? undefined : var_core_value_sigAC47.endOffset) ?? (var_core_value_sigA06F == null ? undefined : var_core_value_sigA06F.endOffset);
  if (var_core_value_sig770E != null && var_core_value_sig4654 != null) return {
    endOffset: Math.max(var_core_value_sig770E, var_core_value_sig4654),
    startOffset: Math.min(var_core_value_sig770E, var_core_value_sig4654)
  };
}
function it(var_core_value_sigB26B, var_core_value_sig019B) {
  var var_core_value_sigC6BC;
  if (!var_core_value_sig019B) return;
  let var_core_value_sig8EC2 = at(var_core_value_sig019B);
  return (var_core_value_sigC6BC = var_core_value_sigB26B.body) == null || (var_core_value_sigC6BC = var_core_value_sigC6BC.blockRanges) == null ? undefined : var_core_value_sigC6BC.find(var_core_value_sig8CFA => {
    let var_core_value_sig2E11 = var_core_value_sig7EEA(var_core_value_sig8CFA);
    return var_core_value_sig019B.startOffset === var_core_value_sig019B.endOffset ? var_core_value_sig2CD3(var_core_value_sig2E11, var_core_value_sig8EC2) : var_core_value_sig038E(var_core_value_sig2E11, var_core_value_sig8EC2);
  });
}
function at(var_core_value_sigA8C3) {
  return var_core_value_sigA8C3.startOffset === var_core_value_sigA8C3.endOffset ? var_core_value_sigA8C3.startOffset : var_core_value_sigA8C3.startOffset + 1;
}
function ot(var_core_value_sig5276) {
  let var_core_value_sig031B = K(var_core_value_sig5276);
  if (!var_core_value_sig031B) return null;
  let var_core_value_sig9DC0 = var_core_value_sig5276.get(var_core_value_sig1617).getCurrentUnitOfType(var_core_value_sig726E.UNIVER_DOC),
    var_core_value_sig95F0 = var_core_value_sig9DC0 == null ? undefined : var_core_value_sig9DC0.getBody();
  return var_core_value_sig95F0 ? var_core_value_sig336C.range["getParagraphsInRange"](var_core_value_sig031B, var_core_value_sig95F0.paragraphs ?? [], var_core_value_sig95F0.dataStream ?? "")[0] ?? null : null;
}
function st(var_core_value_sig9CCB, var_core_value_sigE718) {
  var var_core_value_sigAEC8;
  let var_core_value_sigB977 = var_core_value_sig9CCB.body,
    var_core_value_sig2949 = var_core_value_sigB977 == null || (var_core_value_sigAEC8 = var_core_value_sigB977.blockRanges) == null ? undefined : var_core_value_sigAEC8.find(var_core_value_sig5B69 => var_core_value_sig5B69.blockId === var_core_value_sigE718.blockId && var_core_value_sig5B69.blockType === var_core_value_sig09F3.QUOTE);
  if (!var_core_value_sigB977 || !var_core_value_sig2949) return null;
  let var_core_value_sig308A = var_core_value_sig279C.getInstance(),
    var_core_value_sig528D = [];
  if (var_core_value_sigE718.textColor != null) {
    let var_core_value_sigB098 = var_core_value_sig2949.startIndex + 1,
      var_core_value_sigCE71 = var_core_value_sig2949.endIndex;
    if (var_core_value_sigCE71 > var_core_value_sigB098) {
      if (var_core_value_sigB977.textRuns == null) var_core_value_sig528D.push(var_core_value_sig308A.insertOp(["body", "textRuns"], [{
        st: var_core_value_sigB098,
        ed: var_core_value_sigCE71,
        ts: {
          cl: {
            rgb: var_core_value_sigE718.textColor
          }
        }
      }]));else {
        let var_core_value_sig7524 = new var_core_value_sigCAF7();
        var_core_value_sig7524.push({
          t: var_core_value_sigED1C.RETAIN,
          len: var_core_value_sigB098
        }), var_core_value_sig7524.push({
          t: var_core_value_sigED1C.RETAIN,
          len: var_core_value_sigCE71 - var_core_value_sigB098,
          body: {
            dataStream: "",
            textRuns: [{
              st: 0,
              ed: var_core_value_sigCE71 - var_core_value_sigB098,
              ts: {
                cl: {
                  rgb: var_core_value_sigE718.textColor
                }
              }
            }]
          }
        }), var_core_value_sig528D.push(var_core_value_sig308A.editOp(var_core_value_sig7524.serialize(), ["body"]));
      }
    }
  }
  var_core_value_sigE718.lineColor != null && (var_core_value_sigB977.paragraphs ?? []).forEach((var_core_value_sig21D8, var_core_value_sig2B65) => {
    var var_core_value_sigD7EA;
    if (var_core_value_sig21D8.startIndex <= var_core_value_sig2949.startIndex || var_core_value_sig21D8.startIndex >= var_core_value_sig2949.endIndex) return;
    let var_core_value_sigB33B = ["body", "paragraphs", var_core_value_sig2B65, "paragraphStyle"],
      var_core_value_sig24B9 = [...var_core_value_sigB33B, "borderLeft"],
      var_core_value_sigE627 = (var_core_value_sigD7EA = var_core_value_sig21D8.paragraphStyle) == null ? undefined : var_core_value_sigD7EA.borderLeft,
      var_core_value_sigEF3E = {
        color: {
          rgb: var_core_value_sigE718.lineColor
        },
        width: (var_core_value_sigE627 == null ? undefined : var_core_value_sigE627.width) ?? 2,
        dashStyle: (var_core_value_sigE627 == null ? undefined : var_core_value_sigE627.dashStyle) ?? var_core_value_sig8DFE.SOLID,
        padding: (var_core_value_sigE627 == null ? undefined : var_core_value_sigE627.padding) ?? 0
      };
    var_core_value_sig21D8.paragraphStyle == null ? var_core_value_sig528D.push(var_core_value_sig308A.insertOp(var_core_value_sigB33B, {
      borderLeft: var_core_value_sigEF3E
    })) : var_core_value_sigE627 == null ? var_core_value_sig528D.push(var_core_value_sig308A.insertOp(var_core_value_sig24B9, var_core_value_sigEF3E)) : var_core_value_sig528D.push(var_core_value_sig308A.replaceOp(var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sigEF3E));
  });
  let var_core_value_sigA309 = null;
  return var_core_value_sig528D.forEach(var_core_value_sig273D => {
    var_core_value_sigA309 = var_core_value_sig279C.compose(var_core_value_sigA309, var_core_value_sig273D);
  }), var_core_value_sigA309;
}
function ct(var_core_value_sig9E20, var_core_value_sig26BB) {
  let var_core_value_sig19B4 = var_core_value_sig9E20.body,
    var_core_value_sig218A = var_core_value_sig26BB.body,
    var_core_value_sig14CB = var_core_value_sig5830(var_core_value_sig19B4, var_core_value_sig218A),
    var_core_value_sigFDEE = [],
    var_core_value_sigA676 = var_core_value_sig14CB && var_core_value_sig218A ? ut(var_core_value_sig218A, var_core_value_sig14CB) : null,
    var_core_value_sigC27E = var_core_value_sig14CB && var_core_value_sig14CB.deleteLength === var_core_value_sig14CB.insertLength ? lt(var_core_value_sig19B4, var_core_value_sig218A) : null,
    var_core_value_sigA70D = var_core_value_sig14CB ? null : dt(var_core_value_sig19B4, var_core_value_sig218A);
  return var_core_value_sigA676 && var_core_value_sigFDEE.push(var_core_value_sigA676), var_core_value_sigC27E && var_core_value_sigFDEE.push(var_core_value_sigC27E), var_core_value_sigA70D && var_core_value_sigFDEE.push(var_core_value_sigA70D), var_core_value_sigFDEE.reduce((var_core_value_sig9A0D, var_core_value_sigA319) => var_core_value_sig279C.compose(var_core_value_sig9A0D, var_core_value_sigA319), null);
}
function lt(var_core_value_sigCE10, var_core_value_sigA386) {
  let var_core_value_sigCD82 = var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10.blockRanges,
    var_core_value_sig44DD = var_core_value_sigA386 == null ? undefined : var_core_value_sigA386.blockRanges;
  if (!(var_core_value_sigCD82 != null && var_core_value_sigCD82.length) || !(var_core_value_sig44DD != null && var_core_value_sig44DD.length) || var_core_value_sigCD82.length !== var_core_value_sig44DD.length) return null;
  let var_core_value_sig96FA = var_core_value_sig279C.getInstance(),
    var_core_value_sigAB68 = [];
  return var_core_value_sigCD82.forEach((var_core_value_sig2D58, var_core_value_sig223F) => {
    let var_core_value_sigD749 = var_core_value_sig44DD[var_core_value_sig223F];
    var_core_value_sig2D58.blockId === (var_core_value_sigD749 == null ? undefined : var_core_value_sigD749.blockId) && (var_core_value_sig2D58.startIndex !== var_core_value_sigD749.startIndex && var_core_value_sigAB68.push(var_core_value_sig96FA.replaceOp(["body", "blockRanges", var_core_value_sig223F, "startIndex"], var_core_value_sig2D58.startIndex, var_core_value_sigD749.startIndex)), var_core_value_sig2D58.endIndex !== var_core_value_sigD749.endIndex && var_core_value_sigAB68.push(var_core_value_sig96FA.replaceOp(["body", "blockRanges", var_core_value_sig223F, "endIndex"], var_core_value_sig2D58.endIndex, var_core_value_sigD749.endIndex)));
  }), var_core_value_sigAB68.reduce((var_core_value_sigCFFA, var_core_value_sig58C1) => var_core_value_sig279C.compose(var_core_value_sigCFFA, var_core_value_sig58C1), null);
}
function ut(var_core_value_sig040A, var_core_value_sig2AE0) {
  let var_core_value_sigC349 = new var_core_value_sigCAF7();
  return var_core_value_sigC349.retain(var_core_value_sig2AE0.start), var_core_value_sig2AE0.insertLength > 0 && var_core_value_sigC349.insert(var_core_value_sig2AE0.insertLength, var_core_value_sig59CE(var_core_value_sig040A, var_core_value_sig2AE0.start, var_core_value_sig2AE0.start + var_core_value_sig2AE0.insertLength, false)), var_core_value_sig2AE0.deleteLength > 0 && var_core_value_sigC349.delete(var_core_value_sig2AE0.deleteLength), var_core_value_sig279C.getInstance().editOp(var_core_value_sigC349.serialize(), ["body"]);
}
function dt(var_core_value_sig9D96, var_core_value_sig2776) {
  let var_core_value_sig6FB2 = [];
  for (let var_core_value_sig5090 of ft) q(var_core_value_sig279C.getInstance(), ["body", var_core_value_sig5090], var_core_value_sig9D96 == null ? undefined : var_core_value_sig9D96[var_core_value_sig5090], var_core_value_sig2776 == null ? undefined : var_core_value_sig2776[var_core_value_sig5090], var_core_value_sig6FB2);
  return var_core_value_sig6FB2.reduce((var_core_value_sigC368, var_core_value_sigAD56) => var_core_value_sig279C.compose(var_core_value_sigC368, var_core_value_sigAD56), null);
}
const ft = ["paragraphs", "sectionBreaks", "tables", "columnGroups", "blockRanges", "customBlocks", "customRanges", "customDecorations", "textRuns"];
function q(var_core_value_sigEB43, var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866) {
  if (!J(var_core_value_sigF963, var_core_value_sigB608)) {
    if (var_core_value_sigF963 == null) {
      var_core_value_sigF866.push(var_core_value_sigEB43.insertOp(var_core_value_sig4186, var_core_value_sigB608));
      return;
    }
    if (var_core_value_sigB608 == null) {
      var_core_value_sigF866.push(var_core_value_sigEB43.removeOp(var_core_value_sig4186, var_core_value_sigF963));
      return;
    }
    if (Array.isArray(var_core_value_sigF963) && Array.isArray(var_core_value_sigB608)) {
      pt(var_core_value_sigEB43, var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866);
      return;
    }
    if (mt(var_core_value_sigF963) && mt(var_core_value_sigB608)) {
      new Set([...Object.keys(var_core_value_sigF963), ...Object.keys(var_core_value_sigB608)]).forEach(var_core_value_sig2AD8 => {
        q(var_core_value_sigEB43, [...var_core_value_sig4186, var_core_value_sig2AD8], var_core_value_sigF963[var_core_value_sig2AD8], var_core_value_sigB608[var_core_value_sig2AD8], var_core_value_sigF866);
      });
      return;
    }
    var_core_value_sigF866.push(var_core_value_sigEB43.replaceOp(var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608));
  }
}
function pt(var_core_value_sig5EFB, var_core_value_sig3A85, var_core_value_sig2682, var_core_value_sig4BB5, var_core_value_sig6709) {
  if (var_core_value_sig2682.length === var_core_value_sig4BB5.length) {
    var_core_value_sig2682.forEach((var_core_value_sig27E5, var_core_value_sig8061) => q(var_core_value_sig5EFB, [...var_core_value_sig3A85, var_core_value_sig8061], var_core_value_sig27E5, var_core_value_sig4BB5[var_core_value_sig8061], var_core_value_sig6709));
    return;
  }
  let var_core_value_sig52CA = 0;
  for (; var_core_value_sig52CA < var_core_value_sig2682.length && var_core_value_sig52CA < var_core_value_sig4BB5.length && J(var_core_value_sig2682[var_core_value_sig52CA], var_core_value_sig4BB5[var_core_value_sig52CA]);) var_core_value_sig52CA++;
  let var_core_value_sigC030 = var_core_value_sig2682.length - 1,
    var_core_value_sig88F6 = var_core_value_sig4BB5.length - 1;
  for (; var_core_value_sigC030 >= var_core_value_sig52CA && var_core_value_sig88F6 >= var_core_value_sig52CA && J(var_core_value_sig2682[var_core_value_sigC030], var_core_value_sig4BB5[var_core_value_sig88F6]);) var_core_value_sigC030--, var_core_value_sig88F6--;
  for (let var_core_value_sigDB4A = var_core_value_sigC030; var_core_value_sigDB4A >= var_core_value_sig52CA; var_core_value_sigDB4A--) var_core_value_sig6709.push(var_core_value_sig5EFB.removeOp([...var_core_value_sig3A85, var_core_value_sigDB4A], var_core_value_sig2682[var_core_value_sigDB4A]));
  for (let var_core_value_sig6418 = var_core_value_sig52CA; var_core_value_sig6418 <= var_core_value_sig88F6; var_core_value_sig6418++) var_core_value_sig6709.push(var_core_value_sig5EFB.insertOp([...var_core_value_sig3A85, var_core_value_sig6418], var_core_value_sig4BB5[var_core_value_sig6418]));
}
function mt(var_core_value_sig37DB) {
  return typeof var_core_value_sig37DB == "object" && !!var_core_value_sig37DB && !Array.isArray(var_core_value_sig37DB);
}
function J(var_core_value_sig5542, var_core_value_sigE0A9) {
  return JSON.stringify(var_core_value_sig5542) === JSON.stringify(var_core_value_sigE0A9);
}
function Y(var_core_value_sigA73E, var_core_value_sig7620, var_core_value_sigB9FC, var_core_value_sig5055, var_core_value_sig3801, var_core_value_sig45F0) {
  let var_core_value_sigBC91 = ct(var_core_value_sigB9FC, var_core_value_sig5055);
  return var_core_value_sigBC91 ? !!var_core_value_sigA73E.syncExecuteCommand(var_core_value_sig0B4E.id, {
    unitId: var_core_value_sig7620,
    actions: var_core_value_sigBC91,
    textRanges: [{
      startOffset: var_core_value_sig45F0,
      endOffset: var_core_value_sig45F0,
      collapsed: true
    }],
    isEditing: false,
    trigger: var_core_value_sig3801
  }) : false;
}
function ht(var_core_value_sigCB88, var_core_value_sig8D65, var_core_value_sig8122, var_core_value_sigEDC6, var_core_value_sig611A) {
  return !!var_core_value_sigCB88.syncExecuteCommand(var_core_value_sig0B4E.id, {
    unitId: var_core_value_sig8D65,
    actions: var_core_value_sig8122,
    textRanges: [{
      startOffset: var_core_value_sig611A,
      endOffset: var_core_value_sig611A,
      collapsed: true
    }],
    isEditing: false,
    trigger: var_core_value_sigEDC6
  });
}
var gt = "@univerjs-pro/docs-quote",
  _t = "1.0.0-insiders.20260907-70fc579";
const vt = {};
function X(var_core_value_sig6BD9, var_core_value_sig7E56) {
  return function (var_core_value_sig1896, var_core_value_sig0285) {
    var_core_value_sig7E56(var_core_value_sig1896, var_core_value_sig0285, var_core_value_sig6BD9);
  };
}
function yt(var_core_value_sig4161, var_core_value_sig7580, var_core_value_sig1F18, var_core_value_sigD5A0) {
  var var_core_value_sig81B2 = arguments.length,
    var_core_value_sigA0A5 = var_core_value_sig81B2 < 3 ? var_core_value_sig7580 : var_core_value_sigD5A0 === null ? var_core_value_sigD5A0 = Object.getOwnPropertyDescriptor(var_core_value_sig7580, var_core_value_sig1F18) : var_core_value_sigD5A0,
    var_core_value_sig10AA;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigA0A5 = Reflect.decorate(var_core_value_sig4161, var_core_value_sig7580, var_core_value_sig1F18, var_core_value_sigD5A0);else {
    for (var var_core_value_sigE6D0 = var_core_value_sig4161.length - 1; var_core_value_sigE6D0 >= 0; var_core_value_sigE6D0--) (var_core_value_sig10AA = var_core_value_sig4161[var_core_value_sigE6D0]) && (var_core_value_sigA0A5 = (var_core_value_sig81B2 < 3 ? var_core_value_sig10AA(var_core_value_sigA0A5) : var_core_value_sig81B2 > 3 ? var_core_value_sig10AA(var_core_value_sig7580, var_core_value_sig1F18, var_core_value_sigA0A5) : var_core_value_sig10AA(var_core_value_sig7580, var_core_value_sig1F18)) || var_core_value_sigA0A5);
  }
  return var_core_value_sig81B2 > 3 && var_core_value_sigA0A5 && Object.defineProperty(var_core_value_sig7580, var_core_value_sig1F18, var_core_value_sigA0A5), var_core_value_sigA0A5;
}
function Z(var_core_value_sig8E91) {
  "@babel/helpers - typeof";

  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig777D) {
    return typeof var_core_value_sig777D;
  } : function (var_core_value_sig3F4C) {
    return var_core_value_sig3F4C && typeof Symbol == "function" && var_core_value_sig3F4C.constructor === Symbol && var_core_value_sig3F4C !== Symbol.prototype ? "symbol" : typeof var_core_value_sig3F4C;
  }, Z(var_core_value_sig8E91);
}
function bt(var_core_value_sig00BE, var_core_value_sig7BB5) {
  if (Z(var_core_value_sig00BE) != "object" || !var_core_value_sig00BE) return var_core_value_sig00BE;
  var var_core_value_sig6AAD = var_core_value_sig00BE[Symbol.toPrimitive];
  if (var_core_value_sig6AAD !== undefined) {
    var var_core_value_sig1157 = var_core_value_sig6AAD.call(var_core_value_sig00BE, var_core_value_sig7BB5 || "default");
    if (Z(var_core_value_sig1157) != "object") return var_core_value_sig1157;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig7BB5 === "string" ? String : Number)(var_core_value_sig00BE);
}
function xt(var_core_value_sigA694) {
  var var_core_value_sig18E01 = bt(var_core_value_sigA694, "string");
  return Z(var_core_value_sig18E01) == "symbol" ? var_core_value_sig18E01 : var_core_value_sig18E01 + "";
}
function Q(var_core_value_sig0428, var_core_value_sigBE07, var_core_value_sig555F) {
  return (var_core_value_sigBE07 = xt(var_core_value_sigBE07)) in var_core_value_sig0428 ? Object.defineProperty(var_core_value_sig0428, var_core_value_sigBE07, {
    value: var_core_value_sig555F,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig0428[var_core_value_sigBE07] = var_core_value_sig555F, var_core_value_sig0428;
}
let $ = class extends var_core_value_sig8986 {
  constructor(var_core_value_sigD65A = vt, var_core_value_sig5A13, var_core_value_sigF593, var_core_value_sig3607) {
    super(), this._config = var_core_value_sigD65A, this._injector = var_core_value_sig5A13, this._commandService = var_core_value_sigF593, this._configService = var_core_value_sig3607;
    let {
      ...var_core_value_sigB512
    } = var_core_value_sigF975({}, vt, this._config);
    this._configService["setConfig"]("docs-quote.config", var_core_value_sigB512);
  }
  onStarting() {
    [z, nt, V, U, B, W, H].forEach(var_core_value_sig4D4C => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig4D4C)));
  }
};
Q($, "pluginName", $e), Q($, "packageName", gt), Q($, "version", _t), Q($, "type", var_core_value_sig726E.UNIVER_DOC), $ = yt([var_core_value_sig5E16(var_core_value_sig58AA, var_core_value_sig0E9F), X(1, var_core_value_sig4169(var_core_value_sig6D19)), X(2, var_core_value_sig4592), X(3, var_core_value_sigC5C4)], $);
export { et as DOCS_QUOTE_LINE_COLOR_TOKEN, tt as DOCS_QUOTE_LINE_WIDTH, $e as DOCS_QUOTE_PLUGIN, W as DocsQuoteCancelEmptyParagraphCommand, B as DocsQuoteExitCommand, nt as DocsQuoteInsertBelowCommand, z as DocsQuoteInsertCommand, U as DocsQuoteRemoveCommand, V as DocsQuoteUnwrapCommand, H as DocsQuoteUpdateStyleCommand, $ as UniverDocsQuotePlugin, Ae as buildCancelEmptyQuoteParagraphActions, Ee as buildExitQuoteActions };
