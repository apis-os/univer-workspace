import { BooleanNumber, BuildTextUtils, CommandType, DashStyleType, DataStreamTreeTokenType, DependentOn, DocumentBlockRangeType, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, JSONX, PRESERVE_INSERTED_PARAGRAPH_IDS, Plugin, TextX, TextXActionType, UniverInstanceType, containsInteriorInsertionOffset, containsStreamIndex, createParagraphId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getParagraphContentStartOffset, getParagraphContentStartOffsets, getParagraphFollowingBlockOffset, getSingleDataStreamChange, intersectsOperationalIntervals, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange, isHeaderFooterSelection } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874 } from "./docs-quote-plugin.js";
var v = class extends Error {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = "Insert\x20range\x20cannot\x20cross\x20table\x20cell\x20boundaries") {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610);
  }
};
function y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.blockType === DocumentBlockRangeType.QUOTE && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.startIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 + 2;
  });
}
function b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 = false) {
  return {
    indentStart: {
      v: 22
    },
    keepLines: BooleanNumber.TRUE,
    keepNext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 ? BooleanNumber.FALSE : BooleanNumber.TRUE,
    widowControl: BooleanNumber.TRUE,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 ? {
      spaceAbove: {
        v: 8
      }
    } : {})
  };
}
function x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 = false) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.paragraphs ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.startIndex > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.startIndex < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322);
  var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.paragraphStyle = {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.paragraphStyle ?? {}),
      ...b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 === 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.length - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323)
    };
  });
}
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 ?? {})
  };
  return delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.borderLeft, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.indentStart, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.spaceAbove, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.spaceBelow, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.keepLines, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.keepNext, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.widowControl, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6;
}
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.paragraphs ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.startIndex > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.startIndex < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332);
}
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.dataStream["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.startIndex);
  return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 === DataStreamTreeTokenType.BLOCK_START || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 === DataStreamTreeTokenType.BLOCK_END);
}
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384,
    body: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.body ? Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.body) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.body
  };
}
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386,
    paragraphs: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.paragraphs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655,
      bullet: T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.bullet),
      paragraphStyle: T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.paragraphStyle)
    })),
    sectionBreaks: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.sectionBreaks) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656
    })),
    textRuns: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.textRuns) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657
    })),
    tables: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.tables) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658
    })),
    columnGroups: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.columnGroups) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660;
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659,
        columns: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.columns) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465))
      };
    }),
    blockRanges: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663
    })),
    customRanges: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664
    })),
    customDecorations: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.customDecorations) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665
    })),
    customBlocks: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.customBlocks) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666
    }))
  };
}
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 => T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667)) : !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 != "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 : Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669)]));
}
function E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.body) throw Error("Document\x20body\x20is\x20required");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.body;
}
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494) {
  return Math.max(getParagraphContentStartOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493.startIndex + 1);
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498) {
  return getBlockRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498).endOffset - 1;
}
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529 = {}) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.dataStream = "" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.dataStream["slice"](0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.dataStream["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527), qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.length), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.paragraphs) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.length && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.paragraphs = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.paragraphs ?? []), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.paragraphs["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.startIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527
  }))].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.startIndex)), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.blockRanges) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.length && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.blockRanges = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.blockRanges ?? []), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.blockRanges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.startIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527,
    endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.endIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527
  }))].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.startIndex)));
}
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538.dataStream = "" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538.dataStream["slice"](0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538.dataStream["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540), Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21);
}
function qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.paragraphs = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.paragraphs, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.sectionBreaks = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.sectionBreaks, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.customBlocks = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.customBlocks, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.textRuns = Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.textRuns, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.tables = Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.tables, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.columnGroups = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.columnGroups, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.customRanges = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.customRanges, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.customDecorations = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.customDecorations, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.blockRanges = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.blockRanges, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546);
}
function Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.paragraphs = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.paragraphs, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.sectionBreaks = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.sectionBreaks, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.customBlocks = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.customBlocks, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.textRuns = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 = Ze((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.textRuns) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.st,
    endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.ed
  })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 => {
    let {
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691,
      endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693,
      st: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691,
      ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692
    };
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.tables = Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.tables, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.columnGroups = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.columnGroups, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.customRanges = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.customRanges, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.customDecorations = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.customDecorations, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.blockRanges = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.blockRanges, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552);
}
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.startIndex >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.startIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698);
}
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.startIndex >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.startIndex < var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.startIndex >= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 != null);
}
function Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.st >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101,
    st: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.st + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.ed + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.ed > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.ed + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101);
}
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 => shiftInclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580));
}
function Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 => shiftExclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586));
}
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 => shiftInclusiveRangeOnDelete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 != null);
}
function Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 => shiftExclusiveRangeOnDelete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 != null);
}
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.body,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.blockId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.blockType === DocumentBlockRangeType.QUOTE);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741 = JSONX.getInstance(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = [];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.textColor != null) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740.startIndex + 1,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740.endIndex;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 > var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739.textRuns == null) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741.insertOp(["body", "textRuns"], [{
        st: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1,
        ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120,
        ts: {
          cl: {
            rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.textColor
          }
        }
      }]));else {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = new TextX();
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.push({
          t: TextXActionType.RETAIN,
          len: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.push({
          t: TextXActionType.RETAIN,
          len: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1,
          body: {
            dataStream: "",
            textRuns: [{
              st: 0,
              ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1,
              ts: {
                cl: {
                  rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.textColor
                }
              }
            }]
          }
        }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741.editOp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.serialize(), ["body"]));
      }
    }
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.lineColor != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739.paragraphs ?? []).forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.startIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740.startIndex || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.startIndex >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740.endIndex) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = ["body", "paragraphs", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, "paragraphStyle"],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, "borderLeft"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.paragraphStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.borderLeft,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
        color: {
          rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.lineColor
        },
        width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.width) ?? 2,
        dashStyle: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.dashStyle) ?? DashStyleType.SOLID,
        padding: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.padding) ?? 0
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.paragraphStyle == null ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741.insertOp(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, {
      borderLeft: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2
    })) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 == null ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741.insertOp(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2)) : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741.replaceOp(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2));
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742 = null;
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742 = JSONX.compose(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129);
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742;
}
var gt = "@univerjs-pro/docs-quote",
  var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = "1.0.0-insiders.20260907-70fc579";
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836);
  };
}
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845;
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854) {
  "@babel/helpers - typeof";

  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152;
  }, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854);
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857) {
  if (Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 || "default");
    if (Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856);
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865 = bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864, "string");
  return Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865 + "";
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869 = xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868;
}
Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874, "pluginName", var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874, "packageName", gt), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874, "version", var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874, "type", UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874 = yt([DependentOn(UniverLicensePlugin, UniverDocsPlugin), X(1, Inject(Injector)), X(2, ICommandService), X(3, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874);
export { w, E, v, x, j, b, y, C, Ne, O, k, S, M, st };
