Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/core"),
  t = require("@univerjs/docs"),
  n = require("@univerjs-pro/license"),
  r = function (var_core_value_sig2259) {
    return var_core_value_sig2259.Item = "item", var_core_value_sig2259.Level = "level", var_core_value_sig2259.List = "list", var_core_value_sig2259;
  }({});
function i(var_core_value_sig9E2F) {
  let var_core_value_sigD082 = var_core_value_sig9E2F.documentData["body"],
    var_core_value_sigDBB7 = (var_core_value_sigD082 == null ? undefined : var_core_value_sigD082.paragraphs) ?? [],
    var_core_value_sigD0A8 = p(var_core_value_sigDBB7, var_core_value_sig9E2F.paragraphStartIndex);
  if (!var_core_value_sigD082 || !(var_core_value_sigD0A8 != null && var_core_value_sigD0A8.bullet)) return [];
  let var_core_value_sigF4B9 = (0, e.getParagraphContentStartOffsets)(var_core_value_sigD082);
  return m(var_core_value_sigDBB7, var_core_value_sigD0A8, var_core_value_sig9E2F.mode).map(var_core_value_sig4D4C => ({
    startOffset: var_core_value_sigF4B9.get(var_core_value_sig4D4C.startIndex) ?? (0, e.getParagraphContentStartOffset)(var_core_value_sigD082, var_core_value_sig4D4C),
    endOffset: var_core_value_sig4D4C.startIndex,
    collapsed: false,
    rangeType: e.DOC_RANGE_TYPE["TEXT"],
    segmentId: var_core_value_sig9E2F.segmentId ?? ""
  }));
}
function a(var_core_value_sig5CEE) {
  let var_core_value_sigE92A = f(var_core_value_sig5CEE.documentData, var_core_value_sig5CEE.paragraphStartIndex, var_core_value_sig5CEE.mode ?? "list");
  return var_core_value_sigE92A.level["glyphType"] = var_core_value_sig5CEE.glyphType, delete var_core_value_sigE92A.level["glyphSymbol"], {
    nextDocumentData: var_core_value_sigE92A.nextDocumentData
  };
}
function o(var_core_value_sig362B) {
  let var_core_value_sig5CA5 = f(var_core_value_sig362B.documentData, var_core_value_sig362B.paragraphStartIndex, var_core_value_sig362B.mode ?? "list");
  return var_core_value_sig5CA5.level["glyphType"] = e.ListGlyphType["BULLET"], var_core_value_sig5CA5.level["glyphSymbol"] = var_core_value_sig362B.symbol, {
    nextDocumentData: var_core_value_sig5CA5.nextDocumentData
  };
}
function s(var_core_value_sigE90F) {
  if (!c(var_core_value_sigE90F.documentData, var_core_value_sigE90F.paragraphStartIndex)) return {
    nextDocumentData: x(var_core_value_sigE90F.documentData)
  };
  let var_core_value_sigEFD4 = f(var_core_value_sigE90F.documentData, var_core_value_sigE90F.paragraphStartIndex, var_core_value_sigE90F.mode ?? "list");
  return (var_core_value_sigE90F.mode === "list" ? Array.from(new Set(var_core_value_sigEFD4.paragraphs["map"](var_core_value_sigC9E0 => {
    var var_core_value_sig76BA;
    return (var_core_value_sig76BA = var_core_value_sigC9E0.bullet) == null ? undefined : var_core_value_sig76BA.nestingLevel;
  }).filter(var_core_value_sigFBFA => var_core_value_sigFBFA != null))) : [var_core_value_sigEFD4.activeParagraph["bullet"].nestingLevel]).forEach(var_core_value_sigF602 => {
    b(var_core_value_sigEFD4.listData, var_core_value_sigF602), var_core_value_sigEFD4.listData["nestingLevel"][var_core_value_sigF602].glyphFormat = var_core_value_sigE90F.prefix + "%" + (var_core_value_sigF602 + 1) + var_core_value_sigE90F.suffix;
  }), {
    nextDocumentData: var_core_value_sigEFD4.nextDocumentData
  };
}
function c(var_core_value_sig861B, var_core_value_sig5237) {
  var var_core_value_sigBB00, var_core_value_sig7E54;
  let var_core_value_sig9A8D = p(((var_core_value_sigBB00 = var_core_value_sig861B.body) == null ? undefined : var_core_value_sigBB00.paragraphs) ?? [], var_core_value_sig5237),
    var_core_value_sigC259 = var_core_value_sig9A8D == null ? undefined : var_core_value_sig9A8D.bullet;
  if (!var_core_value_sigC259) return false;
  let var_core_value_sig9C9F = (var_core_value_sig7E54 = _(var_core_value_sig861B, var_core_value_sigC259.listType)) == null || (var_core_value_sig7E54 = var_core_value_sig7E54.nestingLevel) == null ? undefined : var_core_value_sig7E54[var_core_value_sigC259.nestingLevel];
  return !!(var_core_value_sig9C9F && var_core_value_sig9C9F.glyphType !== e.ListGlyphType["BULLET"] && !var_core_value_sig9C9F.glyphSymbol);
}
function l(var_core_value_sigFDEA) {
  var var_core_value_sig86D0;
  if (var_core_value_sigFDEA.restartFromPrevious) return u(var_core_value_sigFDEA);
  let var_core_value_sig4CD2 = x(var_core_value_sigFDEA.documentData),
    var_core_value_sig48CA = ((var_core_value_sig86D0 = var_core_value_sig4CD2.body) == null ? undefined : var_core_value_sig86D0.paragraphs) ?? [],
    var_core_value_sig50AF = p(var_core_value_sig48CA, var_core_value_sigFDEA.paragraphStartIndex);
  if (!(var_core_value_sig50AF != null && var_core_value_sig50AF.bullet) || !c(var_core_value_sig4CD2, var_core_value_sigFDEA.paragraphStartIndex)) return {
    nextDocumentData: var_core_value_sig4CD2
  };
  let var_core_value_sigA942 = _(var_core_value_sig4CD2, var_core_value_sig50AF.bullet["listType"]);
  if (!var_core_value_sigA942) return {
    nextDocumentData: var_core_value_sig4CD2
  };
  let var_core_value_sigA621 = v(var_core_value_sig50AF);
  var_core_value_sig4CD2.lists ??= {}, var_core_value_sig4CD2.lists[var_core_value_sigA621] = e.Tools["deepClone"](var_core_value_sigA942), var_core_value_sig4CD2.lists[var_core_value_sigA621].listType = var_core_value_sigA621;
  let var_core_value_sigBBFF = var_core_value_sig50AF.bullet["nestingLevel"];
  b(var_core_value_sig4CD2.lists[var_core_value_sigA621], var_core_value_sigBBFF), var_core_value_sig4CD2.lists[var_core_value_sigA621].nestingLevel[var_core_value_sigBBFF].startNumber = Math.max(1, var_core_value_sigFDEA.startNumber) - 1;
  let var_core_value_sig8889 = y(var_core_value_sig50AF);
  return h(var_core_value_sig48CA, var_core_value_sig50AF).forEach(var_core_value_sig1BBD => {
    var_core_value_sig1BBD.bullet && (var_core_value_sig1BBD.bullet["listId"] = var_core_value_sig8889, var_core_value_sig1BBD.bullet["listType"] = var_core_value_sigA621);
  }), {
    nextDocumentData: var_core_value_sig4CD2
  };
}
function u(var_core_value_sig32F8) {
  var var_core_value_sig5B67;
  let var_core_value_sig1758 = x(var_core_value_sig32F8.documentData),
    var_core_value_sig4805 = ((var_core_value_sig5B67 = var_core_value_sig1758.body) == null ? undefined : var_core_value_sig5B67.paragraphs) ?? [],
    var_core_value_sigE67E = p(var_core_value_sig4805, var_core_value_sig32F8.paragraphStartIndex);
  if (!(var_core_value_sigE67E != null && var_core_value_sigE67E.bullet) || !c(var_core_value_sig1758, var_core_value_sig32F8.paragraphStartIndex)) return {
    nextDocumentData: var_core_value_sig1758
  };
  let var_core_value_sig2902 = g(var_core_value_sig1758, var_core_value_sigE67E);
  return !(var_core_value_sig2902 != null && var_core_value_sig2902.bullet) || var_core_value_sig2902.bullet["listId"] === var_core_value_sigE67E.bullet["listId"] || h(var_core_value_sig4805, var_core_value_sigE67E).forEach(var_core_value_sigF704 => {
    var_core_value_sigF704.bullet && (var_core_value_sigF704.bullet["listId"] = var_core_value_sig2902.bullet["listId"], var_core_value_sigF704.bullet["listType"] = var_core_value_sig2902.bullet["listType"]);
  }), {
    nextDocumentData: var_core_value_sig1758
  };
}
function d(var_core_value_sig9989) {
  var var_core_value_sig698E;
  let var_core_value_sig2809 = x(var_core_value_sig9989.documentData),
    var_core_value_sig2DAB = ((var_core_value_sig698E = var_core_value_sig2809.body) == null ? undefined : var_core_value_sig698E.paragraphs) ?? [],
    var_core_value_sig877E = p(var_core_value_sig2DAB, var_core_value_sig9989.paragraphStartIndex);
  if (!(var_core_value_sig877E != null && var_core_value_sig877E.bullet)) return {
    nextDocumentData: var_core_value_sig2809
  };
  let var_core_value_sig20C8 = _(var_core_value_sig2809, var_core_value_sig877E.bullet["listType"]);
  return m(var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig9989.mode).forEach(var_core_value_sig2BCF => {
    if (!var_core_value_sig2BCF.bullet) return;
    let var_core_value_sig0D69 = Math.max(0, Math.min(8, var_core_value_sig2BCF.bullet["nestingLevel"] + var_core_value_sig9989.delta));
    var_core_value_sig0D69 !== var_core_value_sig2BCF.bullet["nestingLevel"] && (var_core_value_sig20C8 && b(var_core_value_sig20C8, var_core_value_sig0D69), var_core_value_sig2BCF.bullet["nestingLevel"] = var_core_value_sig0D69);
  }), {
    nextDocumentData: var_core_value_sig2809
  };
}
function f(var_core_value_sigE9A7, var_core_value_sigBECE, var_core_value_sig1B22) {
  var var_core_value_sig7F72;
  let var_core_value_sig7B2A = x(var_core_value_sigE9A7),
    var_core_value_sig06CD = ((var_core_value_sig7F72 = var_core_value_sig7B2A.body) == null ? undefined : var_core_value_sig7F72.paragraphs) ?? [],
    var_core_value_sigA5F1 = p(var_core_value_sig06CD, var_core_value_sigBECE);
  if (!(var_core_value_sigA5F1 != null && var_core_value_sigA5F1.bullet)) throw Error("[DocsList]: List paragraph is not found.");
  let var_core_value_sig97A2 = v(var_core_value_sigA5F1),
    var_core_value_sig07E9 = _(var_core_value_sig7B2A, var_core_value_sigA5F1.bullet["listType"]);
  if (!var_core_value_sig07E9) throw Error("[DocsList]:\x20List\x20type\x20" + var_core_value_sigA5F1.bullet["listType"] + "\x20is\x20not\x20found.");
  var_core_value_sig7B2A.lists ??= {}, var_core_value_sig7B2A.lists[var_core_value_sig97A2] = e.Tools["deepClone"](var_core_value_sig07E9), var_core_value_sig7B2A.lists[var_core_value_sig97A2].listType = var_core_value_sig97A2;
  let var_core_value_sig4F59 = m(var_core_value_sig06CD, var_core_value_sigA5F1, var_core_value_sig1B22);
  var_core_value_sig4F59.forEach(var_core_value_sig480E => {
    var_core_value_sig480E.bullet && (var_core_value_sig480E.bullet["listType"] = var_core_value_sig97A2);
  });
  let var_core_value_sigF564 = var_core_value_sig7B2A.lists[var_core_value_sig97A2],
    var_core_value_sig8CFA = var_core_value_sigA5F1.bullet["nestingLevel"];
  return b(var_core_value_sigF564, var_core_value_sig8CFA), {
    nextDocumentData: var_core_value_sig7B2A,
    paragraphs: var_core_value_sig4F59,
    activeParagraph: var_core_value_sigA5F1,
    listData: var_core_value_sigF564,
    level: var_core_value_sigF564.nestingLevel[var_core_value_sig8CFA]
  };
}
function p(var_core_value_sig2E11, var_core_value_sig5B69) {
  return var_core_value_sig2E11.find(var_core_value_sig26DB => var_core_value_sig26DB.startIndex === var_core_value_sig5B69 && var_core_value_sig26DB.bullet);
}
function m(var_core_value_sigB098, var_core_value_sigCE71, var_core_value_sig21D8) {
  let var_core_value_sig2B65 = var_core_value_sigCE71.bullet;
  return var_core_value_sig2B65 ? var_core_value_sig21D8 === "item" ? [var_core_value_sigCE71] : var_core_value_sigB098.filter(var_core_value_sigF0F9 => {
    let var_core_value_sig1A0F = var_core_value_sigF0F9.bullet;
    return !var_core_value_sig1A0F || var_core_value_sig1A0F.listId !== var_core_value_sig2B65.listId ? false : var_core_value_sig21D8 === "list" || var_core_value_sig1A0F.nestingLevel === var_core_value_sig2B65.nestingLevel;
  }) : [];
}
function h(var_core_value_sigD7EA, var_core_value_sigB33B) {
  let var_core_value_sig24B9 = var_core_value_sigB33B.bullet,
    var_core_value_sigE627 = var_core_value_sigD7EA.indexOf(var_core_value_sigB33B);
  if (!var_core_value_sig24B9 || var_core_value_sigE627 < 0) return [];
  let var_core_value_sigEF3E = [];
  for (let var_core_value_sigFBA4 = var_core_value_sigE627; var_core_value_sigFBA4 < var_core_value_sigD7EA.length; var_core_value_sigFBA4++) {
    let var_core_value_sig2AD8 = var_core_value_sigD7EA[var_core_value_sigFBA4],
      var_core_value_sig2AD0 = var_core_value_sig2AD8.bullet;
    if (var_core_value_sig2AD0) {
      if (var_core_value_sig2AD0.listId !== var_core_value_sig24B9.listId || var_core_value_sig2AD0.nestingLevel < var_core_value_sig24B9.nestingLevel) break;
      var_core_value_sigEF3E.push(var_core_value_sig2AD8);
    }
  }
  return var_core_value_sigEF3E;
}
function g(var_core_value_sig273D, var_core_value_sig9A0D) {
  var var_core_value_sigA319;
  let var_core_value_sig2D58 = ((var_core_value_sigA319 = var_core_value_sig273D.body) == null ? undefined : var_core_value_sigA319.paragraphs) ?? [],
    var_core_value_sig223F = var_core_value_sig2D58.indexOf(var_core_value_sig9A0D),
    var_core_value_sigD749 = var_core_value_sig9A0D.bullet;
  if (!(!var_core_value_sigD749 || var_core_value_sig223F <= 0)) for (let var_core_value_sig4383 = var_core_value_sig223F - 1; var_core_value_sig4383 >= 0; var_core_value_sig4383--) {
    let var_core_value_sig3EEE = var_core_value_sig2D58[var_core_value_sig4383],
      var_core_value_sigBC46 = var_core_value_sig3EEE.bullet;
    if (var_core_value_sigBC46 && var_core_value_sigBC46.nestingLevel === var_core_value_sigD749.nestingLevel && c(var_core_value_sig273D, var_core_value_sig3EEE.startIndex)) return var_core_value_sig3EEE;
  }
}
function _(var_core_value_sigCFFA, var_core_value_sig58C1) {
  var var_core_value_sig5090;
  return ((var_core_value_sig5090 = var_core_value_sigCFFA.lists) == null ? undefined : var_core_value_sig5090[var_core_value_sig58C1]) ?? e.PRESET_LIST_TYPE[var_core_value_sig58C1];
}
function v(var_core_value_sigC368) {
  return "CUSTOM_LIST_" + var_core_value_sigC368.bullet["listId"] + "_" + var_core_value_sigC368.startIndex;
}
function y(var_core_value_sigAD56) {
  return "RESTART_LIST_" + var_core_value_sigAD56.bullet["listId"] + "_" + var_core_value_sigAD56.startIndex;
}
function b(var_core_value_sigDB4A, var_core_value_sig6418) {
  let var_core_value_sig1896 = var_core_value_sigDB4A.nestingLevel[var_core_value_sigDB4A.nestingLevel["length"] - 1];
  for (; var_core_value_sigDB4A.nestingLevel["length"] <= var_core_value_sig6418;) var_core_value_sigDB4A.nestingLevel["push"](e.Tools["deepClone"](var_core_value_sig1896));
}
function x(var_core_value_sig0285) {
  var var_core_value_sig777D;
  return {
    ...var_core_value_sig0285,
    body: var_core_value_sig0285.body ? {
      ...var_core_value_sig0285.body,
      paragraphs: (var_core_value_sig777D = var_core_value_sig0285.body["paragraphs"]) == null ? undefined : var_core_value_sig777D.map(var_core_value_sig186C => ({
        ...var_core_value_sig186C,
        bullet: S(var_core_value_sig186C.bullet),
        paragraphStyle: S(var_core_value_sig186C.paragraphStyle)
      }))
    } : var_core_value_sig0285.body,
    lists: var_core_value_sig0285.lists ? Object.fromEntries(Object.entries(var_core_value_sig0285.lists).map(([var_core_value_sigD955, var_core_value_sig48BD]) => [var_core_value_sigD955, e.Tools["deepClone"](var_core_value_sig48BD)])) : var_core_value_sig0285.lists
  };
}
function S(var_core_value_sig3F4C) {
  return Array.isArray(var_core_value_sig3F4C) ? var_core_value_sig3F4C.map(var_core_value_sig429F => S(var_core_value_sig429F)) : !var_core_value_sig3F4C || typeof var_core_value_sig3F4C != "object" ? var_core_value_sig3F4C : Object.fromEntries(Object.entries(var_core_value_sig3F4C).map(([var_core_value_sigF62A, var_core_value_sig8178]) => [var_core_value_sigF62A, S(var_core_value_sig8178)]));
}
const C = {
    id: "docs-list.command.insert",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigD65A, var_core_value_sig5A13) => {
      var var_core_value_sigF593;
      if (!var_core_value_sig5A13) return false;
      let {
          unitId: var_core_value_sig3607,
          listType: var_core_value_sigB512,
          listId: var_core_value_sigF2E6,
          segmentId: var_core_value_sig34C8 = ""
        } = var_core_value_sig5A13,
        var_core_value_sigB744 = M(var_core_value_sigD65A, var_core_value_sig3607);
      if (!var_core_value_sigB744) return false;
      let var_core_value_sigEAE2 = (var_core_value_sigF593 = var_core_value_sigB744.getSelfOrHeaderFooterModel(var_core_value_sig34C8)) == null ? undefined : var_core_value_sigF593.getBody();
      if (!var_core_value_sigEAE2) return false;
      let {
          dataStream: var_core_value_sigE68A = "",
          paragraphs: var_core_value_sig3E68 = []
        } = var_core_value_sigEAE2,
        var_core_value_sigF4C5 = N(var_core_value_sigD65A, var_core_value_sig5A13);
      if (!var_core_value_sig3E68.length || var_core_value_sigF4C5.length === 0) return false;
      let var_core_value_sig5410 = e.BuildTextUtils["range"].getParagraphsInRanges(var_core_value_sigF4C5, var_core_value_sig3E68, var_core_value_sigE68A),
        var_core_value_sig492F = e.BuildTextUtils["paragraph"].bullet["set"]({
          paragraphs: var_core_value_sig5410,
          listType: var_core_value_sigB512,
          listId: var_core_value_sigF2E6,
          document: var_core_value_sigB744,
          segmentId: var_core_value_sig34C8
        });
      if (!var_core_value_sig492F) return false;
      let var_core_value_sig8EA0 = e.JSONX["getInstance"]().editOp(var_core_value_sig492F.serialize(), P(var_core_value_sigB744, var_core_value_sig34C8));
      return !!var_core_value_sigD65A.get(e.ICommandService).syncExecuteCommand(t.RichTextEditingMutation["id"], {
        unitId: var_core_value_sigB744.getUnitId(),
        actions: var_core_value_sig8EA0,
        textRanges: var_core_value_sigF4C5,
        isEditing: false
      });
    }
  },
  w = {
    id: "docs-list.command.select",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigA6F6, var_core_value_sigCDDA) => {
      if (!var_core_value_sigCDDA) return false;
      let var_core_value_sigE243 = M(var_core_value_sigA6F6, var_core_value_sigCDDA.unitId);
      if (!var_core_value_sigE243) return false;
      let var_core_value_sig74A8 = i({
        documentData: var_core_value_sigE243.getSnapshot(),
        paragraphStartIndex: var_core_value_sigCDDA.paragraphStartIndex,
        mode: var_core_value_sigCDDA.mode ?? "item",
        segmentId: var_core_value_sigCDDA.segmentId
      });
      return var_core_value_sig74A8.length ? (var_core_value_sigA6F6.get(t.DocSelectionManagerService).replaceDocRanges(var_core_value_sig74A8, {
        unitId: var_core_value_sigE243.getUnitId(),
        subUnitId: var_core_value_sigE243.getUnitId()
      }, false, {
        forceFocus: true
      }), true) : false;
    }
  },
  T = {
    id: "docs-list.command.set-glyph-type",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig21B2, var_core_value_sigDE08) => j(var_core_value_sig21B2, var_core_value_sigDE08, a)
  },
  E = {
    id: "docs-list.command.set-glyph-symbol",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigACCB, var_core_value_sig7F33) => j(var_core_value_sigACCB, var_core_value_sig7F33, o)
  },
  D = {
    id: "docs-list.command.set-prefix-suffix",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig0C53, var_core_value_sigEA04) => j(var_core_value_sig0C53, var_core_value_sigEA04, s)
  },
  O = {
    id: "docs-list.command.set-start-number",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig7A62, var_core_value_sig8109) => j(var_core_value_sig7A62, var_core_value_sig8109, l)
  },
  k = {
    id: "docs-list.command.promote",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig7565, var_core_value_sigD4FB) => j(var_core_value_sig7565, var_core_value_sigD4FB && {
      ...var_core_value_sigD4FB,
      delta: -1
    }, d)
  },
  A = {
    id: "docs-list.command.demote",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig3E71, var_core_value_sig01B3) => j(var_core_value_sig3E71, var_core_value_sig01B3 && {
      ...var_core_value_sig01B3,
      delta: 1
    }, d)
  };
function j(var_core_value_sig7442, var_core_value_sigDF87, var_core_value_sig9EE0) {
  if (!var_core_value_sigDF87) return false;
  let var_core_value_sigF051 = M(var_core_value_sig7442, var_core_value_sigDF87.unitId);
  if (!var_core_value_sigF051) return false;
  let var_core_value_sig0B45 = var_core_value_sigF051.getSnapshot(),
    var_core_value_sig36F8 = var_core_value_sigDF87.mode ?? "list",
    var_core_value_sig03E1 = F(var_core_value_sig0B45, var_core_value_sig9EE0({
      ...var_core_value_sigDF87,
      documentData: var_core_value_sig0B45,
      mode: var_core_value_sig36F8
    }).nextDocumentData);
  return var_core_value_sig03E1 ? !!var_core_value_sig7442.get(e.ICommandService).syncExecuteCommand(t.RichTextEditingMutation["id"], {
    unitId: var_core_value_sigF051.getUnitId(),
    actions: var_core_value_sig03E1,
    textRanges: null,
    isEditing: false,
    noNeedSetTextRange: true
  }) : false;
}
function M(var_core_value_sigBB57, var_core_value_sig7C4A) {
  let var_core_value_sigE799 = var_core_value_sigBB57.get(e.IUniverInstanceService);
  return var_core_value_sig7C4A ? var_core_value_sigE799.getUnit(var_core_value_sig7C4A, e.UniverInstanceType["UNIVER_DOC"]) ?? null : var_core_value_sigE799.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]) ?? null;
}
function N(var_core_value_sigB601, var_core_value_sig8B71) {
  if (var_core_value_sig8B71.startOffset != null || var_core_value_sig8B71.endOffset != null) {
    let var_core_value_sigE9ED = var_core_value_sig8B71.startOffset ?? var_core_value_sig8B71.endOffset ?? 0,
      var_core_value_sigB577 = var_core_value_sig8B71.endOffset ?? var_core_value_sigE9ED;
    return [{
      startOffset: var_core_value_sigE9ED,
      endOffset: var_core_value_sigB577,
      collapsed: var_core_value_sigE9ED === var_core_value_sigB577,
      rangeType: e.DOC_RANGE_TYPE["TEXT"],
      segmentId: var_core_value_sig8B71.segmentId ?? "",
      style: null
    }];
  }
  return var_core_value_sigB601.get(t.DocSelectionManagerService).getDocRanges() ?? [];
}
function P(var_core_value_sigAEFB, var_core_value_sig826B = "") {
  if (!var_core_value_sig826B) return ["body"];
  let {
    headers: var_core_value_sigCF89,
    footers: var_core_value_sig00CB
  } = var_core_value_sigAEFB.getSnapshot();
  if ((var_core_value_sigCF89 == null ? undefined : var_core_value_sigCF89[var_core_value_sig826B]) != null) return ["headers", var_core_value_sig826B, "body"];
  if ((var_core_value_sig00CB == null ? undefined : var_core_value_sig00CB[var_core_value_sig826B]) != null) return ["footers", var_core_value_sig826B, "body"];
  throw Error("Segment id not found in headers or footers");
}
function F(var_core_value_sig77EE, var_core_value_sig9F76) {
  var var_core_value_sigB008, var_core_value_sig8721;
  let var_core_value_sig08BA = [];
  return I(e.JSONX["getInstance"](), ["body", "paragraphs"], (var_core_value_sigB008 = var_core_value_sig77EE.body) == null ? undefined : var_core_value_sigB008.paragraphs, (var_core_value_sig8721 = var_core_value_sig9F76.body) == null ? undefined : var_core_value_sig8721.paragraphs, var_core_value_sig08BA), I(e.JSONX["getInstance"](), ["lists"], var_core_value_sig77EE.lists, var_core_value_sig9F76.lists, var_core_value_sig08BA), var_core_value_sig08BA.reduce((var_core_value_sig9572, var_core_value_sigD873) => e.JSONX["compose"](var_core_value_sig9572, var_core_value_sigD873), null);
}
function I(var_core_value_sigDBB5, var_core_value_sigCFAC, var_core_value_sig237B, var_core_value_sigFEAB, var_core_value_sigE347) {
  if (!z(var_core_value_sig237B, var_core_value_sigFEAB)) {
    if (var_core_value_sig237B == null) {
      var_core_value_sigE347.push(var_core_value_sigDBB5.insertOp(var_core_value_sigCFAC, var_core_value_sigFEAB));
      return;
    }
    if (var_core_value_sigFEAB == null) {
      var_core_value_sigE347.push(var_core_value_sigDBB5.removeOp(var_core_value_sigCFAC, var_core_value_sig237B));
      return;
    }
    if (Array.isArray(var_core_value_sig237B) && Array.isArray(var_core_value_sigFEAB)) {
      L(var_core_value_sigDBB5, var_core_value_sigCFAC, var_core_value_sig237B, var_core_value_sigFEAB, var_core_value_sigE347);
      return;
    }
    if (R(var_core_value_sig237B) && R(var_core_value_sigFEAB)) {
      new Set([...Object.keys(var_core_value_sig237B), ...Object.keys(var_core_value_sigFEAB)]).forEach(var_core_value_sig7524 => {
        I(var_core_value_sigDBB5, [...var_core_value_sigCFAC, var_core_value_sig7524], var_core_value_sig237B[var_core_value_sig7524], var_core_value_sigFEAB[var_core_value_sig7524], var_core_value_sigE347);
      });
      return;
    }
    var_core_value_sigE347.push(var_core_value_sigDBB5.replaceOp(var_core_value_sigCFAC, var_core_value_sig237B, var_core_value_sigFEAB));
  }
}
function L(var_core_value_sig3C5B, var_core_value_sig200B, var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1) {
  if (var_core_value_sig3863.length === var_core_value_sigC97C.length) {
    var_core_value_sig3863.forEach((var_core_value_sig3D7D, var_core_value_sig27E5) => I(var_core_value_sig3C5B, [...var_core_value_sig200B, var_core_value_sig27E5], var_core_value_sig3D7D, var_core_value_sigC97C[var_core_value_sig27E5], var_core_value_sigC4B1));
    return;
  }
  let var_core_value_sig1BD9 = 0;
  for (; var_core_value_sig1BD9 < var_core_value_sig3863.length && var_core_value_sig1BD9 < var_core_value_sigC97C.length && z(var_core_value_sig3863[var_core_value_sig1BD9], var_core_value_sigC97C[var_core_value_sig1BD9]);) var_core_value_sig1BD9++;
  let var_core_value_sigE43E = var_core_value_sig3863.length - 1,
    var_core_value_sigA937 = var_core_value_sigC97C.length - 1;
  for (; var_core_value_sigE43E >= var_core_value_sig1BD9 && var_core_value_sigA937 >= var_core_value_sig1BD9 && z(var_core_value_sig3863[var_core_value_sigE43E], var_core_value_sigC97C[var_core_value_sigA937]);) var_core_value_sigE43E--, var_core_value_sigA937--;
  for (let var_core_value_sigA12B = var_core_value_sigE43E; var_core_value_sigA12B >= var_core_value_sig1BD9; var_core_value_sigA12B--) var_core_value_sigC4B1.push(var_core_value_sig3C5B.removeOp([...var_core_value_sig200B, var_core_value_sigA12B], var_core_value_sig3863[var_core_value_sigA12B]));
  for (let var_core_value_sigF230 = var_core_value_sig1BD9; var_core_value_sigF230 <= var_core_value_sigA937; var_core_value_sigF230++) var_core_value_sigC4B1.push(var_core_value_sig3C5B.insertOp([...var_core_value_sig200B, var_core_value_sigF230], var_core_value_sigC97C[var_core_value_sigF230]));
}
function R(var_core_value_sigCAD5) {
  return typeof var_core_value_sigCAD5 == "object" && !!var_core_value_sigCAD5 && !Array.isArray(var_core_value_sigCAD5);
}
function z(var_core_value_sigE503, var_core_value_sig48DD) {
  return JSON.stringify(var_core_value_sigE503) === JSON.stringify(var_core_value_sig48DD);
}
const B = "DOCS_LIST_PLUGIN",
  V = "࿁,o,O,ଠ,൦,ᆼ,౦,🔴,॰,∘,੦,໐,0,࿀,ᄋ,೦,૦,〇,०,ཕ,↤,↥,↦,↧,↨,↩,↪,↫,↬,↭,↮,↯,↰,↱,↲,↳,↴,↵,↶,↷,↸,↹,↺,↻,↼,↽,↾,↿,⇀,⇁,⇂,⇃,⇄,⇅,⇆,⇇,⇈,⇉,⇊,⇋,⇌,⇍,⇎,⇏,⇐,⇑,⇒,⇓,⇔,⇕,⇖,⇗,⇘,⇙,⇚,⇛,⇜,⇝,⇞,⇟,⇠,⇡,⇢,⇣,⇤,⇥,⇦,⇧,⇨,⇩,⇪,⇫,⇬,⇭,⇮,⇯,⇰,⇱,⇲,⇳,⇴,⇵,⇶,⇷,⇸,⇹,⇺,⇻,⇼,⇽,⇾,⇿,⍅,⍆,⍇,⍈,⍏,⍐,⍖,⍗,⏩,⏪,⏫,⏬,⏭,⏮,⏯,➔,➘,➙,➚,➛,➜,➝,➞,➟,➠,➡,➢,➣,➤,➥,➦,➧,➨,➩,➪,➫,➬,➭,➮,➯,➱,➲,➳,➴,➵,➶,➷,➸,➹,➺,➻,➼,➽,➾,⟰,⟱,⟲,⟳,⟴,⟵,⟶,⟷,⟸,⟹,⟺,⟻,⟼,⟽,⟾,⟿,⤀,⤁,⤂,⤃,⤄,⤅,⤆,⤇,⤈,⤉,⤊,⤋,⤌,⤍,⤎,⤏,⤐,⤑,⤒,⤓,⤔,⤕,⤖,⤗,⤘,⤝,⤞,⤟,⤠,⤡,⤢,⤣,⤤,⤥,⤦,⤧,⤨,⤩,⤪,⤭,⤮,⤯,⤰,⤱,⤲,⤳,⤴,⤵,⤶,⤷,⤸,⤹,⤺,⤻,⤼,⤽,⤾,⤿,⥀,⥁,⥂,⥃,⥄,⥅,⥆,⥇,⥈,⥉,⥊,⥋,⥌,⥍,⥎,⥏,⥐,⥑,⥒,⥓,⥔,⥕,⥖,⥗,⥘,⥙,⥚,⥛,⥜,⥝,⥞,⥟,⥠,⥡,⥢,⥣,⥤,⥥,⥦,⥧,⥨,⥩,⥪,⥫,⥬,⥭,⥮,⥯,⥱,⥲,⥳,⥴,⥵,⥶,⥷,⥸,⥹,⥺,⥻,⦽,⧪,⧫,⧬,⧭,⬀,⬁,⬂,⬃,⬄,⬅,⬆,⬇,⬈,⬉,⬊,⬋,⬌,⬍,⬎,⬏,⬐,⬑,⬰,⬱,⬲,⬳,⬴,⬵,⬶,⬷,⬸,⬹,⬺,⬻,⬼,⬽,⬾,⬿,⭀,⭁,⭂,⭃,⭄,⭅,⭆,⭇,⭈,⭉,⭊,⭋,⭌,🔀,🔁,🔂,🔃,🔄,🔙,🔚,🔛,🔜,🔝,🔺,🔻,🔼,🔽,￩,￪,￫,￬,͍,͎,͐,͑,͒,͓,͔,͕,͖,͢,᷾,᷿,⃔,⃕,⃖,⃗,ꜛ,ꜜ"["split"](",");
var H = "@univerjs-pro/docs-list",
  U = "1.0.0-insiders.20260907-70fc579";
const W = {};
function G(var_core_value_sig5E6A, var_core_value_sigB7FC) {
  return function (var_core_value_sig09B8, var_core_value_sig6F91) {
    var_core_value_sigB7FC(var_core_value_sig09B8, var_core_value_sig6F91, var_core_value_sig5E6A);
  };
}
function K(var_core_value_sig9CD9, var_core_value_sigFD0C, var_core_value_sig849B, var_core_value_sig5F1A) {
  var var_core_value_sigB455 = arguments.length,
    var_core_value_sig5241 = var_core_value_sigB455 < 3 ? var_core_value_sigFD0C : var_core_value_sig5F1A === null ? var_core_value_sig5F1A = Object.getOwnPropertyDescriptor(var_core_value_sigFD0C, var_core_value_sig849B) : var_core_value_sig5F1A,
    var_core_value_sigC6E5;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig5241 = Reflect.decorate(var_core_value_sig9CD9, var_core_value_sigFD0C, var_core_value_sig849B, var_core_value_sig5F1A);else {
    for (var var_core_value_sigCEFB = var_core_value_sig9CD9.length - 1; var_core_value_sigCEFB >= 0; var_core_value_sigCEFB--) (var_core_value_sigC6E5 = var_core_value_sig9CD9[var_core_value_sigCEFB]) && (var_core_value_sig5241 = (var_core_value_sigB455 < 3 ? var_core_value_sigC6E5(var_core_value_sig5241) : var_core_value_sigB455 > 3 ? var_core_value_sigC6E5(var_core_value_sigFD0C, var_core_value_sig849B, var_core_value_sig5241) : var_core_value_sigC6E5(var_core_value_sigFD0C, var_core_value_sig849B)) || var_core_value_sig5241);
  }
  return var_core_value_sigB455 > 3 && var_core_value_sig5241 && Object.defineProperty(var_core_value_sigFD0C, var_core_value_sig849B, var_core_value_sig5241), var_core_value_sig5241;
}
function q(var_core_value_sig1537) {
  "@babel/helpers - typeof";

  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigF9C7) {
    return typeof var_core_value_sigF9C7;
  } : function (var_core_value_sig8895) {
    return var_core_value_sig8895 && typeof Symbol == "function" && var_core_value_sig8895.constructor === Symbol && var_core_value_sig8895 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig8895;
  }, q(var_core_value_sig1537);
}
function J(var_core_value_sigE4C6, var_core_value_sig4313) {
  if (q(var_core_value_sigE4C6) != "object" || !var_core_value_sigE4C6) return var_core_value_sigE4C6;
  var var_core_value_sigFC87 = var_core_value_sigE4C6[Symbol.toPrimitive];
  if (var_core_value_sigFC87 !== undefined) {
    var var_core_value_sig156F = var_core_value_sigFC87.call(var_core_value_sigE4C6, var_core_value_sig4313 || "default");
    if (q(var_core_value_sig156F) != "object") return var_core_value_sig156F;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig4313 === "string" ? String : Number)(var_core_value_sigE4C6);
}
function Y(var_core_value_sigDD51) {
  var var_core_value_sigF057 = J(var_core_value_sigDD51, "string");
  return q(var_core_value_sigF057) == "symbol" ? var_core_value_sigF057 : var_core_value_sigF057 + "";
}
function X(var_core_value_sig72F6, var_core_value_sig9FBA, var_core_value_sigFE01) {
  return (var_core_value_sig9FBA = Y(var_core_value_sig9FBA)) in var_core_value_sig72F6 ? Object.defineProperty(var_core_value_sig72F6, var_core_value_sig9FBA, {
    value: var_core_value_sigFE01,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig72F6[var_core_value_sig9FBA] = var_core_value_sigFE01, var_core_value_sig72F6;
}
let Z = class extends e.Plugin {
  constructor(var_core_value_sigC80B = W, var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632) {
    super(), this._config = var_core_value_sigC80B, this._injector = var_core_value_sig284F, this._commandService = var_core_value_sigE154, this._configService = var_core_value_sig4632;
    let {
      ...var_core_value_sig12F2
    } = (0, e.merge)({}, W, this._config);
    this._configService["setConfig"]("docs-list.config", var_core_value_sig12F2);
  }
  onStarting() {
    [A, C, k, w, E, T, D, O].forEach(var_core_value_sig8061 => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig8061)));
  }
};
X(Z, "pluginName", B), X(Z, "packageName", H), X(Z, "version", U), X(Z, "type", e.UniverInstanceType["UNIVER_DOC"]), Z = K([(0, e.DependentOn)(n.UniverLicensePlugin, t.UniverDocsPlugin), G(1, (0, e.Inject)(e.Injector)), G(2, e.ICommandService), G(3, e.IConfigService)], Z), exports.DOCS_LIST_MORE_BULLETS = V, exports.DOCS_LIST_PLUGIN = B, exports.DocsListDemoteCommand = A, exports.DocsListInsertCommand = C, exports.DocsListPromoteCommand = k, exports.DocsListSelectCommand = w, exports.DocsListSelectionMode = r, exports.DocsListSetGlyphSymbolCommand = E, exports.DocsListSetGlyphTypeCommand = T, exports.DocsListSetPrefixSuffixCommand = D, exports.DocsListSetStartNumberCommand = O, Object.defineProperty(exports, "UniverDocsListPlugin", {
  enumerable: true,
  get: function () {
    return Z;
  }
});
