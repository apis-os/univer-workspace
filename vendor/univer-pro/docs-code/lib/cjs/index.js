Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/core"),
  t = require("rxjs"),
  n = require("@univerjs/docs"),
  r = require("@univerjs-pro/license");
const i = {
  language: "javascript",
  showLineNumbers: false,
  tabSize: 4,
  wrap: true
};
function a(var_core_value_sigD65A) {
  return {
    ...i,
    ...var_core_value_sigD65A
  };
}
function o(var_core_value_sig5A13) {
  let var_core_value_sigF593 = (var_core_value_sig5A13 == null ? undefined : var_core_value_sig5A13.codes) ?? {};
  return {
    codes: Object.fromEntries(Object.entries(var_core_value_sigF593).map(([var_core_value_sig1BBD, var_core_value_sigF704]) => [var_core_value_sig1BBD, a(var_core_value_sigF704)]))
  };
}
function s(var_core_value_sig3607, var_core_value_sigB512, var_core_value_sigF2E6) {
  let var_core_value_sig34C8 = o(var_core_value_sig3607);
  return var_core_value_sig34C8.codes[var_core_value_sigB512] = a({
    ...var_core_value_sig34C8.codes[var_core_value_sigB512],
    ...var_core_value_sigF2E6
  }), var_core_value_sig34C8;
}
function c(var_core_value_sigB744, var_core_value_sigEAE2) {
  let var_core_value_sigE68A = o(var_core_value_sigB744);
  return delete var_core_value_sigE68A.codes[var_core_value_sigEAE2], var_core_value_sigE68A;
}
function l(var_core_value_sig3E68) {
  "@babel/helpers - typeof";

  return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig2BCF) {
    return typeof var_core_value_sig2BCF;
  } : function (var_core_value_sig0D69) {
    return var_core_value_sig0D69 && typeof Symbol == "function" && var_core_value_sig0D69.constructor === Symbol && var_core_value_sig0D69 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig0D69;
  }, l(var_core_value_sig3E68);
}
function u(var_core_value_sigF4C5, var_core_value_sig5410) {
  if (l(var_core_value_sigF4C5) != "object" || !var_core_value_sigF4C5) return var_core_value_sigF4C5;
  var var_core_value_sig492F = var_core_value_sigF4C5[Symbol.toPrimitive];
  if (var_core_value_sig492F !== undefined) {
    var var_core_value_sig8EA0 = var_core_value_sig492F.call(var_core_value_sigF4C5, var_core_value_sig5410 || "default");
    if (l(var_core_value_sig8EA0) != "object") return var_core_value_sig8EA0;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig5410 === "string" ? String : Number)(var_core_value_sigF4C5);
}
function d(var_core_value_sigA6F6) {
  var var_core_value_sigCDDA = u(var_core_value_sigA6F6, "string");
  return l(var_core_value_sigCDDA) == "symbol" ? var_core_value_sigCDDA : var_core_value_sigCDDA + "";
}
function f(var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sig21B2) {
  return (var_core_value_sig74A8 = d(var_core_value_sig74A8)) in var_core_value_sigE243 ? Object.defineProperty(var_core_value_sigE243, var_core_value_sig74A8, {
    value: var_core_value_sig21B2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigE243[var_core_value_sig74A8] = var_core_value_sig21B2, var_core_value_sigE243;
}
var p = class extends e.Disposable {
  constructor(...var_core_value_sig480E) {
    super(...var_core_value_sig480E), f(this, "_resources", new Map()), f(this, "_change$", new t["Subject"]()), f(this, "change$", this._change$["asObservable"]());
  }
  getCodeConfig(var_core_value_sig26DB, var_core_value_sigF0F9) {
    return o(this._resources["get"](var_core_value_sig26DB)).codes[var_core_value_sigF0F9];
  }
  setCodeConfig(var_core_value_sig1A0F, var_core_value_sigFBA4, var_core_value_sig4383) {
    this._setResource(var_core_value_sig1A0F, var_core_value_sigFBA4, s(this._resources["get"](var_core_value_sig1A0F), var_core_value_sigFBA4, var_core_value_sig4383));
  }
  removeCode(var_core_value_sig186C, var_core_value_sigD955) {
    this._setResource(var_core_value_sig186C, var_core_value_sigD955, c(this._resources["get"](var_core_value_sig186C), var_core_value_sigD955));
  }
  serialize(var_core_value_sig48BD) {
    return o(this._resources["get"](var_core_value_sig48BD));
  }
  deserialize(var_core_value_sig429F, var_core_value_sigF62A) {
    this._resources["set"](var_core_value_sig429F, o(var_core_value_sigF62A)), this._change$["next"]({
      unitId: var_core_value_sig429F
    });
  }
  removeUnit(var_core_value_sig8178) {
    this._resources["delete"](var_core_value_sig8178), this._change$["next"]({
      unitId: var_core_value_sig8178
    });
  }
  dispose() {
    super.dispose(), this._resources["clear"](), this._change$["complete"]();
  }
  _setResource(var_core_value_sigE9ED, var_core_value_sigB577, var_core_value_sig9572) {
    this._resources["set"](var_core_value_sigE9ED, var_core_value_sig9572), this._change$["next"]({
      unitId: var_core_value_sigE9ED,
      blockId: var_core_value_sigB577
    });
  }
};
const m = {
    id: "docs-code.mutation.set-config",
    type: e.CommandType["MUTATION"],
    handler: (var_core_value_sigDE08, var_core_value_sigACCB) => !(var_core_value_sigACCB != null && var_core_value_sigACCB.unitId) || !var_core_value_sigACCB.blockId ? false : (var_core_value_sigDE08.get(p).setCodeConfig(var_core_value_sigACCB.unitId, var_core_value_sigACCB.blockId, var_core_value_sigACCB.config), true)
  },
  h = {
    id: "docs-code.mutation.remove-config",
    type: e.CommandType["MUTATION"],
    handler: (var_core_value_sig7F33, var_core_value_sig0C53) => !(var_core_value_sig0C53 != null && var_core_value_sig0C53.unitId) || !var_core_value_sig0C53.blockId ? false : (var_core_value_sig7F33.get(p).removeCode(var_core_value_sig0C53.unitId, var_core_value_sig0C53.blockId), true)
  },
  g = "monospace";
var _ = class extends Error {
  constructor(var_core_value_sigD873 = "Insert range cannot cross table cell boundaries") {
    super(var_core_value_sigD873);
  }
};
function ee(var_core_value_sigEA04) {
  var var_core_value_sig7A62;
  let var_core_value_sig8109 = S(var_core_value_sigEA04.documentData),
    var_core_value_sig7565 = w(var_core_value_sig8109),
    var_core_value_sigD4FB = ne(var_core_value_sigEA04.startOffset, var_core_value_sigEA04.endOffset),
    var_core_value_sig3E71 = var_core_value_sigD4FB ? (var_core_value_sig7A62 = var_core_value_sig7565.blockRanges) == null ? undefined : var_core_value_sig7A62.find(var_core_value_sigA12B => {
      let var_core_value_sigF230 = (0, e.getBlockRangeInterval)(var_core_value_sigA12B);
      return var_core_value_sigF230.startOffset === var_core_value_sigD4FB.startOffset && var_core_value_sigF230.endOffset === var_core_value_sigD4FB.endOffset;
    }) : undefined,
    {
      startOffset: var_core_value_sig01B3,
      endOffset: var_core_value_sig7442
    } = var_core_value_sig3E71 ? var_core_value_sigD4FB : me(var_core_value_sig7565, var_core_value_sigEA04.startOffset, var_core_value_sigEA04.endOffset, var_core_value_sigEA04.insertionMode);
  if (!var_core_value_sig3E71 && re(var_core_value_sig7565, var_core_value_sig01B3, var_core_value_sig7442)) throw new _("Insert range cannot overlap an existing document block");
  let var_core_value_sigDF87 = _e(var_core_value_sig7565, var_core_value_sig01B3, var_core_value_sig7442),
    var_core_value_sig9EE0 = (var_core_value_sig3E71 == null ? undefined : var_core_value_sig3E71.blockId) ?? var_core_value_sigEA04.blockId,
    var_core_value_sigF051 = s(var_core_value_sigEA04.metadata, var_core_value_sig9EE0, {
      ...i,
      ...var_core_value_sigEA04.config
    });
  if (var_core_value_sig3E71) return var_core_value_sig3E71.blockType = e.DocumentBlockRangeType["CODE"], te(var_core_value_sig7565, var_core_value_sig01B3, var_core_value_sig7442), le(var_core_value_sig7565, var_core_value_sig01B3, var_core_value_sig7442, var_core_value_sigDF87), O(var_core_value_sig7565, var_core_value_sig3E71), {
    nextDocumentData: var_core_value_sig8109,
    nextMetadata: var_core_value_sigF051,
    cursorOffset: var_core_value_sig01B3 + 1
  };
  if (var_core_value_sig01B3 === var_core_value_sig7442) {
    var var_core_value_sig0B45, var_core_value_sig36F8;
    let var_core_value_sig09B8 = "" + e.DataStreamTreeTokenType["BLOCK_START"] + e.DataStreamTreeTokenType["PARAGRAPH"] + e.DataStreamTreeTokenType["BLOCK_END"];
    k(var_core_value_sig7565, var_core_value_sig01B3, var_core_value_sig09B8, {
      paragraphs: [{
        startIndex: 1,
        paragraphId: (0, e.createParagraphId)(new Set((var_core_value_sig0B45 = var_core_value_sig7565.paragraphs) == null ? undefined : var_core_value_sig0B45.map(var_core_value_sig2AD8 => var_core_value_sig2AD8.paragraphId))),
        paragraphStyle: x(true, true, var_core_value_sigDF87)
      }],
      blockRanges: [{
        blockId: var_core_value_sig9EE0,
        blockType: e.DocumentBlockRangeType["CODE"],
        startIndex: 0,
        endIndex: var_core_value_sig09B8.length - 1
      }]
    });
    let var_core_value_sig6F91 = (var_core_value_sig36F8 = var_core_value_sig7565.blockRanges) == null ? undefined : var_core_value_sig36F8.find(var_core_value_sig2AD0 => var_core_value_sig2AD0.blockId === var_core_value_sig9EE0);
    return var_core_value_sig6F91 && O(var_core_value_sig7565, var_core_value_sig6F91), {
      nextDocumentData: var_core_value_sig8109,
      nextMetadata: var_core_value_sigF051,
      cursorOffset: var_core_value_sig01B3 + 1
    };
  }
  k(var_core_value_sig7565, var_core_value_sig7442, e.DataStreamTreeTokenType["BLOCK_END"]), k(var_core_value_sig7565, var_core_value_sig01B3, e.DataStreamTreeTokenType["BLOCK_START"]), le(var_core_value_sig7565, var_core_value_sig01B3, var_core_value_sig7442 + 1, var_core_value_sigDF87);
  let var_core_value_sig03E1 = {
    blockId: var_core_value_sig9EE0,
    blockType: e.DocumentBlockRangeType["CODE"],
    startIndex: var_core_value_sig01B3,
    endIndex: var_core_value_sig7442 + 1
  };
  return var_core_value_sig7565.blockRanges = [...(var_core_value_sig7565.blockRanges ?? []), var_core_value_sig03E1].sort((var_core_value_sigF9C7, var_core_value_sig8895) => var_core_value_sigF9C7.startIndex - var_core_value_sig8895.startIndex), O(var_core_value_sig7565, var_core_value_sig03E1), {
    nextDocumentData: var_core_value_sig8109,
    nextMetadata: var_core_value_sigF051,
    cursorOffset: var_core_value_sig01B3 + 1
  };
}
function te(var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigE799) {
  (var_core_value_sigBB57.paragraphs ?? []).filter(var_core_value_sigC80B => var_core_value_sigC80B.startIndex > var_core_value_sig7C4A && var_core_value_sigC80B.startIndex < var_core_value_sigE799).forEach(var_core_value_sig284F => {
    let var_core_value_sigE154 = {
      ...(var_core_value_sig284F.paragraphStyle ?? {})
    };
    delete var_core_value_sigE154.spaceAbove, delete var_core_value_sigE154.spaceBelow, var_core_value_sig284F.paragraphStyle = var_core_value_sigE154;
  });
}
function ne(var_core_value_sigB601, var_core_value_sig8B71) {
  return var_core_value_sigB601 == null || var_core_value_sig8B71 == null || var_core_value_sigB601 === var_core_value_sig8B71 ? null : {
    startOffset: Math.min(var_core_value_sigB601, var_core_value_sig8B71),
    endOffset: Math.max(var_core_value_sigB601, var_core_value_sig8B71)
  };
}
function re(var_core_value_sigAEFB, var_core_value_sig826B, var_core_value_sigCF89) {
  return (var_core_value_sigAEFB.blockRanges ?? []).some(var_core_value_sig4632 => {
    let var_core_value_sig12F2 = (0, e.getBlockRangeInterval)(var_core_value_sig4632);
    return var_core_value_sig826B === var_core_value_sigCF89 ? (0, e.containsInteriorInsertionOffset)(var_core_value_sig12F2, var_core_value_sig826B) : (0, e.intersectsOperationalIntervals)(var_core_value_sig12F2, {
      startOffset: var_core_value_sig826B,
      endOffset: var_core_value_sigCF89
    });
  });
}
function ie(var_core_value_sig00CB) {
  return {
    nextDocumentData: S(var_core_value_sig00CB.documentData),
    nextMetadata: s(var_core_value_sig00CB.metadata, var_core_value_sig00CB.blockId, var_core_value_sig00CB.config),
    cursorOffset: 0
  };
}
function v(var_core_value_sig77EE) {
  let var_core_value_sig9F76 = S(var_core_value_sig77EE.documentData),
    var_core_value_sigB008 = w(var_core_value_sig9F76),
    var_core_value_sig8721 = b(var_core_value_sigB008, var_core_value_sig77EE.blockId);
  if (!var_core_value_sig8721) return null;
  let var_core_value_sig08BA = fe(var_core_value_sigB008, var_core_value_sig8721);
  return {
    nextDocumentData: var_core_value_sig9F76,
    nextMetadata: c(var_core_value_sig77EE.metadata, var_core_value_sig77EE.blockId),
    cursorOffset: var_core_value_sig08BA
  };
}
function ae(var_core_value_sigDBB5) {
  var var_core_value_sigCFAC;
  let var_core_value_sig237B = S(var_core_value_sigDBB5.documentData),
    var_core_value_sigFEAB = w(var_core_value_sig237B),
    var_core_value_sigE347 = b(var_core_value_sigFEAB, var_core_value_sigDBB5.blockId);
  if (!var_core_value_sigE347) return null;
  let var_core_value_sig3C5B = (0, e.getBlockRangeInterval)(var_core_value_sigE347);
  return A(var_core_value_sigFEAB, var_core_value_sig3C5B.startOffset, var_core_value_sig3C5B.endOffset), var_core_value_sigFEAB.blockRanges = (var_core_value_sigCFAC = var_core_value_sigFEAB.blockRanges) == null ? undefined : var_core_value_sigCFAC.filter(var_core_value_sig2259 => var_core_value_sig2259.blockId !== var_core_value_sigDBB5.blockId), {
    nextDocumentData: var_core_value_sig237B,
    nextMetadata: c(var_core_value_sigDBB5.metadata, var_core_value_sigDBB5.blockId),
    cursorOffset: var_core_value_sigE347.startIndex
  };
}
function y(var_core_value_sig200B) {
  let var_core_value_sig3863 = S(var_core_value_sig200B.documentData),
    var_core_value_sigC97C = w(var_core_value_sig3863),
    var_core_value_sigC4B1 = ce(var_core_value_sigC97C, var_core_value_sig200B.cursorOffset);
  return var_core_value_sigC4B1 && oe(var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig200B.cursorOffset, var_core_value_sig200B.paragraphStartIndex) || null;
}
function oe(var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigE503) {
  let var_core_value_sig48DD = Se(var_core_value_sigE43E, var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigE503);
  if (!var_core_value_sig48DD) return null;
  let var_core_value_sig5E6A = var_core_value_sig48DD.endTokenOffset - 1;
  return A(var_core_value_sigE43E, var_core_value_sig48DD.paragraph["startIndex"], var_core_value_sig48DD.paragraph["startIndex"] + 1), {
    nextDocumentData: var_core_value_sig1BD9,
    cursorOffset: var_core_value_sig5E6A
  };
}
function b(var_core_value_sigB7FC, var_core_value_sig9CD9) {
  var var_core_value_sigFD0C;
  return var_core_value_sigB7FC == null || (var_core_value_sigFD0C = var_core_value_sigB7FC.blockRanges) == null ? undefined : var_core_value_sigFD0C.find(var_core_value_sig9E2F => var_core_value_sig9E2F.blockType === e.DocumentBlockRangeType["CODE"] && var_core_value_sig9E2F.blockId === var_core_value_sig9CD9);
}
function se(var_core_value_sig849B) {
  let var_core_value_sig5F1A = var_core_value_sig849B.documentData["body"];
  if (!var_core_value_sig5F1A) return false;
  let var_core_value_sigB455 = var_core_value_sig849B.direction === "left" ? var_core_value_sig849B.cursorOffset - 1 : var_core_value_sig849B.cursorOffset,
    var_core_value_sig5241 = var_core_value_sig849B.direction === "right" ? var_core_value_sig849B.cursorOffset + 1 : var_core_value_sigB455;
  return (var_core_value_sig5F1A.blockRanges ?? []).some(var_core_value_sigD082 => var_core_value_sigD082.blockType === e.DocumentBlockRangeType["CODE"] ? var_core_value_sigB455 === var_core_value_sigD082.startIndex || var_core_value_sigB455 === var_core_value_sigD082.endIndex || var_core_value_sig5241 === var_core_value_sigD082.startIndex || var_core_value_sig5241 === var_core_value_sigD082.endIndex : false);
}
function ce(var_core_value_sigC6E5, var_core_value_sigCEFB) {
  var var_core_value_sig1537;
  return (var_core_value_sig1537 = var_core_value_sigC6E5.blockRanges) == null ? undefined : var_core_value_sig1537.find(var_core_value_sigDBB7 => {
    let var_core_value_sigD0A8 = D(var_core_value_sigDBB7);
    return var_core_value_sigDBB7.blockType === e.DocumentBlockRangeType["CODE"] && var_core_value_sigDBB7.startIndex <= var_core_value_sigCEFB && var_core_value_sigCEFB <= var_core_value_sigD0A8 + 2;
  });
}
function x(var_core_value_sigE4C6, var_core_value_sig4313, var_core_value_sigFC87 = false) {
  return {
    indentEnd: {
      v: 20
    },
    indentStart: {
      v: 20
    },
    keepLines: e.BooleanNumber["TRUE"],
    keepNext: var_core_value_sig4313 ? e.BooleanNumber["FALSE"] : e.BooleanNumber["TRUE"],
    widowControl: e.BooleanNumber["TRUE"],
    ...(var_core_value_sigE4C6 && var_core_value_sigFC87 ? {
      spaceAbove: {
        v: 8
      }
    } : {}),
    textStyle: {
      ff: g,
      fs: 12
    }
  };
}
function le(var_core_value_sig156F, var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6 = false) {
  let var_core_value_sig9FBA = (var_core_value_sig156F.paragraphs ?? []).filter(var_core_value_sigF4B9 => var_core_value_sigF4B9.startIndex > var_core_value_sigDD51 && var_core_value_sigF4B9.startIndex < var_core_value_sigF057);
  var_core_value_sig9FBA.forEach((var_core_value_sig5CEE, var_core_value_sigE92A) => {
    var_core_value_sig5CEE.paragraphStyle = {
      ...(var_core_value_sig5CEE.paragraphStyle ?? {}),
      ...x(var_core_value_sigE92A === 0, var_core_value_sigE92A === var_core_value_sig9FBA.length - 1, var_core_value_sig72F6)
    };
  });
}
function ue(var_core_value_sigFE01) {
  var var_core_value_sigA2CE, var_core_value_sig1975;
  let var_core_value_sig6EA1 = {
    ...(var_core_value_sigFE01 ?? {})
  };
  return delete var_core_value_sig6EA1.indentEnd, delete var_core_value_sig6EA1.indentStart, delete var_core_value_sig6EA1.spaceAbove, delete var_core_value_sig6EA1.spaceBelow, delete var_core_value_sig6EA1.keepLines, delete var_core_value_sig6EA1.keepNext, delete var_core_value_sig6EA1.widowControl, ((var_core_value_sigA2CE = var_core_value_sig6EA1.textStyle) == null ? undefined : var_core_value_sigA2CE.ff) === g && ((var_core_value_sig1975 = var_core_value_sig6EA1.textStyle) == null ? undefined : var_core_value_sig1975.fs) === 12 && delete var_core_value_sig6EA1.textStyle, var_core_value_sig6EA1;
}
function de(var_core_value_sig029F, var_core_value_sig3767) {
  let var_core_value_sig670B = D(var_core_value_sig3767);
  return (var_core_value_sig029F.paragraphs ?? []).filter(var_core_value_sig362B => var_core_value_sig362B.startIndex > var_core_value_sig3767.startIndex && var_core_value_sig362B.startIndex < var_core_value_sig670B);
}
function fe(var_core_value_sig6912, var_core_value_sigE235) {
  var var_core_value_sig7664;
  let var_core_value_sig2281 = D(var_core_value_sigE235);
  return de(var_core_value_sig6912, var_core_value_sigE235).forEach(var_core_value_sig5CA5 => {
    var_core_value_sig5CA5.paragraphStyle = ue(var_core_value_sig5CA5.paragraphStyle);
  }), A(var_core_value_sig6912, var_core_value_sig2281, var_core_value_sig2281 + 1), A(var_core_value_sig6912, var_core_value_sigE235.startIndex, var_core_value_sigE235.startIndex + 1), var_core_value_sig6912.blockRanges = (var_core_value_sig7664 = var_core_value_sig6912.blockRanges) == null ? undefined : var_core_value_sig7664.filter(var_core_value_sigE90F => var_core_value_sigE90F.blockId !== var_core_value_sigE235.blockId), var_core_value_sigE235.startIndex;
}
function S(var_core_value_sig5E86) {
  return {
    ...var_core_value_sig5E86,
    body: var_core_value_sig5E86.body ? pe(var_core_value_sig5E86.body) : var_core_value_sig5E86.body
  };
}
function pe(var_core_value_sig6998) {
  var var_core_value_sigF639, var_core_value_sigEAE5, var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82, var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7;
  return {
    ...var_core_value_sig6998,
    paragraphs: (var_core_value_sigF639 = var_core_value_sig6998.paragraphs) == null ? undefined : var_core_value_sigF639.map(var_core_value_sigEFD4 => ({
      ...var_core_value_sigEFD4,
      bullet: C(var_core_value_sigEFD4.bullet),
      paragraphStyle: C(var_core_value_sigEFD4.paragraphStyle)
    })),
    sectionBreaks: (var_core_value_sigEAE5 = var_core_value_sig6998.sectionBreaks) == null ? undefined : var_core_value_sigEAE5.map(var_core_value_sig861B => ({
      ...var_core_value_sig861B
    })),
    textRuns: (var_core_value_sigE94C = var_core_value_sig6998.textRuns) == null ? undefined : var_core_value_sigE94C.map(var_core_value_sig5237 => ({
      ...var_core_value_sig5237
    })),
    tables: (var_core_value_sig6D47 = var_core_value_sig6998.tables) == null ? undefined : var_core_value_sig6D47.map(var_core_value_sigBB00 => ({
      ...var_core_value_sigBB00
    })),
    columnGroups: (var_core_value_sigCB82 = var_core_value_sig6998.columnGroups) == null ? undefined : var_core_value_sigCB82.map(var_core_value_sig7E54 => {
      var var_core_value_sig9A8D;
      return {
        ...var_core_value_sig7E54,
        columns: (var_core_value_sig9A8D = var_core_value_sig7E54.columns) == null ? undefined : var_core_value_sig9A8D.map(var_core_value_sig3EEE => C(var_core_value_sig3EEE))
      };
    }),
    blockRanges: (var_core_value_sigCF4E = var_core_value_sig6998.blockRanges) == null ? undefined : var_core_value_sigCF4E.map(var_core_value_sigC259 => ({
      ...var_core_value_sigC259
    })),
    customRanges: (var_core_value_sig6CAD = var_core_value_sig6998.customRanges) == null ? undefined : var_core_value_sig6CAD.map(var_core_value_sig9C9F => ({
      ...var_core_value_sig9C9F
    })),
    customDecorations: (var_core_value_sig8CF5 = var_core_value_sig6998.customDecorations) == null ? undefined : var_core_value_sig8CF5.map(var_core_value_sigFDEA => ({
      ...var_core_value_sigFDEA
    })),
    customBlocks: (var_core_value_sigDDD7 = var_core_value_sig6998.customBlocks) == null ? undefined : var_core_value_sigDDD7.map(var_core_value_sig86D0 => ({
      ...var_core_value_sig86D0
    }))
  };
}
function C(var_core_value_sigB2CE) {
  return Array.isArray(var_core_value_sigB2CE) ? var_core_value_sigB2CE.map(var_core_value_sig4CD2 => C(var_core_value_sig4CD2)) : !var_core_value_sigB2CE || typeof var_core_value_sigB2CE != "object" ? var_core_value_sigB2CE : Object.fromEntries(Object.entries(var_core_value_sigB2CE).map(([var_core_value_sig48CA, var_core_value_sig50AF]) => [var_core_value_sig48CA, C(var_core_value_sig50AF)]));
}
function w(var_core_value_sig443C) {
  if (!var_core_value_sig443C.body) throw Error("Document body is required");
  return var_core_value_sig443C.body;
}
function me(var_core_value_sig39B1, var_core_value_sig210D, var_core_value_sigB4B4, var_core_value_sigD407 = "convert-paragraph") {
  if (var_core_value_sig210D == null || var_core_value_sigB4B4 == null) {
    let var_core_value_sigA942 = ge(var_core_value_sig39B1);
    return {
      startOffset: var_core_value_sigA942,
      endOffset: var_core_value_sigA942
    };
  }
  let var_core_value_sig63F3 = Math.min(var_core_value_sig210D, var_core_value_sigB4B4),
    var_core_value_sig6A71 = Math.max(var_core_value_sig210D, var_core_value_sigB4B4),
    var_core_value_sig3BF6 = xe(var_core_value_sig39B1, var_core_value_sig63F3, var_core_value_sig6A71);
  return var_core_value_sig63F3 === var_core_value_sig6A71 ? var_core_value_sigD407 === "insert-new" ? {
    startOffset: var_core_value_sig63F3,
    endOffset: var_core_value_sig6A71
  } : he(var_core_value_sig39B1, var_core_value_sig63F3, var_core_value_sig3BF6) : ve(var_core_value_sig39B1, var_core_value_sig63F3, var_core_value_sig6A71, var_core_value_sig3BF6);
}
function he(var_core_value_sig38CE, var_core_value_sig62B7, var_core_value_sig37A8) {
  let var_core_value_sigA90D = ye(var_core_value_sig38CE, var_core_value_sig62B7);
  if (var_core_value_sigA90D) {
    let var_core_value_sigA621 = T(var_core_value_sig38CE, var_core_value_sigA90D, var_core_value_sig37A8);
    if (var_core_value_sigA621 < var_core_value_sigA90D.startIndex) return {
      startOffset: var_core_value_sigA621,
      endOffset: var_core_value_sig37A8 ? Math.min(var_core_value_sigA90D.startIndex + 1, var_core_value_sig37A8.endOffset) : var_core_value_sigA90D.startIndex + 1
    };
  }
  let var_core_value_sig7A3C = var_core_value_sig62B7 === 0 && var_core_value_sig38CE.dataStream[0] === e.DataStreamTreeTokenType["PARAGRAPH"] ? 1 : var_core_value_sig62B7;
  return {
    startOffset: var_core_value_sig7A3C,
    endOffset: var_core_value_sig7A3C
  };
}
function ge(var_core_value_sig0511) {
  return var_core_value_sig0511.dataStream["endsWith"](e.DataStreamTreeTokenType["SECTION_BREAK"]) ? Math.max(0, var_core_value_sig0511.dataStream["length"] - 1) : var_core_value_sig0511.dataStream["length"];
}
function _e(var_core_value_sig1F44, var_core_value_sigCB04, var_core_value_sig947E) {
  var var_core_value_sig4545;
  let var_core_value_sigF39A = Math.min(var_core_value_sigCB04, var_core_value_sig947E),
    var_core_value_sigF79C = Math.max(var_core_value_sigCB04, var_core_value_sig947E);
  return !!((var_core_value_sig4545 = var_core_value_sig1F44.tables) != null && var_core_value_sig4545.some(var_core_value_sigBBFF => var_core_value_sigF39A > var_core_value_sigBBFF.startIndex && var_core_value_sigF39A < var_core_value_sigBBFF.endIndex || var_core_value_sigF79C > var_core_value_sigBBFF.startIndex && var_core_value_sigF79C < var_core_value_sigBBFF.endIndex || var_core_value_sigF39A <= var_core_value_sigBBFF.startIndex && var_core_value_sigF79C >= var_core_value_sigBBFF.endIndex));
}
function ve(var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigC786) {
  let var_core_value_sigC0D9 = [...(var_core_value_sig2E54.paragraphs ?? [])].sort((var_core_value_sig8889, var_core_value_sig32F8) => var_core_value_sig8889.startIndex - var_core_value_sig32F8.startIndex),
    var_core_value_sigF0511 = (0, e.getParagraphContentStartOffsets)(var_core_value_sig2E54),
    var_core_value_sig5825 = var_core_value_sigC0D9.find(var_core_value_sig5B67 => T(var_core_value_sig2E54, var_core_value_sig5B67, var_core_value_sigC786, var_core_value_sigF0511) <= var_core_value_sig7658 && var_core_value_sig7658 <= var_core_value_sig5B67.startIndex),
    var_core_value_sig4EB7 = var_core_value_sigC0D9.find(var_core_value_sig1758 => var_core_value_sig1758.startIndex >= var_core_value_sigDCF5 - 1) ?? var_core_value_sigC0D9[var_core_value_sigC0D9.length - 1];
  return {
    startOffset: var_core_value_sig5825 ? T(var_core_value_sig2E54, var_core_value_sig5825, var_core_value_sigC786, var_core_value_sigF0511) : var_core_value_sig7658,
    endOffset: var_core_value_sig4EB7 ? be(var_core_value_sig4EB7, var_core_value_sigC786) : var_core_value_sigDCF5
  };
}
function ye(var_core_value_sig73AF, var_core_value_sig548A) {
  let var_core_value_sigE026 = [...(var_core_value_sig73AF.paragraphs ?? [])].sort((var_core_value_sig4805, var_core_value_sigE67E) => var_core_value_sig4805.startIndex - var_core_value_sigE67E.startIndex),
    var_core_value_sig339E = (0, e.getParagraphContentStartOffsets)(var_core_value_sig73AF);
  return var_core_value_sigE026.find(var_core_value_sig2902 => (var_core_value_sig339E.get(var_core_value_sig2902.startIndex) ?? 0) <= var_core_value_sig548A && var_core_value_sig548A <= var_core_value_sig2902.startIndex);
}
function T(var_core_value_sig7550, var_core_value_sig2983, var_core_value_sigE1B0, var_core_value_sigD4FF) {
  let var_core_value_sig1E5B = (var_core_value_sigD4FF == null ? undefined : var_core_value_sigD4FF.get(var_core_value_sig2983.startIndex)) ?? (0, e.getParagraphContentStartOffset)(var_core_value_sig7550, var_core_value_sig2983);
  return var_core_value_sigE1B0 ? Math.max(var_core_value_sig1E5B, var_core_value_sigE1B0.startOffset) : var_core_value_sig1E5B;
}
function be(var_core_value_sigB680, var_core_value_sig1F64) {
  let var_core_value_sigDD1C = var_core_value_sigB680.startIndex + 1;
  return var_core_value_sig1F64 ? Math.min(var_core_value_sigDD1C, var_core_value_sig1F64.endOffset) : var_core_value_sigDD1C;
}
function xe(var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0) {
  let var_core_value_sig85B1 = E(var_core_value_sig2C39, var_core_value_sigB7D1),
    var_core_value_sig3141 = E(var_core_value_sig2C39, var_core_value_sigB7D1 === var_core_value_sig64F0 ? var_core_value_sig64F0 : Math.max(var_core_value_sigB7D1, var_core_value_sig64F0 - 1));
  if (!(!var_core_value_sig85B1 && !var_core_value_sig3141)) {
    if (!var_core_value_sig85B1 || !var_core_value_sig3141 || var_core_value_sig85B1.startTokenOffset !== var_core_value_sig3141.startTokenOffset || var_core_value_sig85B1.endTokenOffset !== var_core_value_sig3141.endTokenOffset) throw new _();
    return var_core_value_sig85B1;
  }
}
function E(var_core_value_sig2162, var_core_value_sig2EAD) {
  let var_core_value_sig6774 = var_core_value_sig2162.dataStream,
    var_core_value_sig340D = -1;
  for (let var_core_value_sig9989 = Math.min(var_core_value_sig2EAD, var_core_value_sig6774.length - 1); var_core_value_sig9989 >= 0; var_core_value_sig9989--) {
    let var_core_value_sigBC46 = var_core_value_sig6774[var_core_value_sig9989];
    if (var_core_value_sigBC46 === e.DataStreamTreeTokenType["TABLE_CELL_END"]) return;
    if (var_core_value_sigBC46 === e.DataStreamTreeTokenType["TABLE_CELL_START"]) {
      var_core_value_sig340D = var_core_value_sig9989;
      break;
    }
  }
  if (var_core_value_sig340D < 0) return;
  let var_core_value_sig82D4 = var_core_value_sig6774.indexOf(e.DataStreamTreeTokenType["TABLE_CELL_END"], var_core_value_sig340D + 1);
  if (!(var_core_value_sig82D4 < 0 || var_core_value_sig2EAD < var_core_value_sig340D + 1 || var_core_value_sig2EAD > var_core_value_sig82D4 - 1)) return {
    startOffset: var_core_value_sig340D + 1,
    endOffset: Math.max(var_core_value_sig340D + 1, var_core_value_sig82D4 - 1),
    startTokenOffset: var_core_value_sig340D,
    endTokenOffset: var_core_value_sig82D4
  };
}
function D(var_core_value_sigBDE4) {
  return (0, e.getBlockRangeInterval)(var_core_value_sigBDE4).endOffset - 1;
}
function Se(var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C, var_core_value_sigA39E) {
  let var_core_value_sigBBEE = D(var_core_value_sigDC86),
    var_core_value_sig011D = (var_core_value_sig7DF1.paragraphs ?? []).find(var_core_value_sig698E => var_core_value_sig698E.startIndex === var_core_value_sigBBEE + 1);
  if (!var_core_value_sig011D || var_core_value_sigA39E != null && var_core_value_sig011D.startIndex !== var_core_value_sigA39E || var_core_value_sig0B0C != null && (var_core_value_sig0B0C < var_core_value_sigBBEE || var_core_value_sig0B0C > var_core_value_sig011D.startIndex + 1) || var_core_value_sig7DF1.dataStream[var_core_value_sig011D.startIndex] !== e.DataStreamTreeTokenType["PARAGRAPH"]) return null;
  let var_core_value_sig6167 = (0, e.getParagraphContentStartOffset)(var_core_value_sig7DF1, var_core_value_sig011D),
    var_core_value_sig65A1 = var_core_value_sig7DF1.dataStream["slice"](var_core_value_sig6167, var_core_value_sig011D.startIndex);
  return Array.from(var_core_value_sig65A1).every(var_core_value_sig2809 => var_core_value_sig2809 === e.DataStreamTreeTokenType["BLOCK_END"]) ? {
    paragraph: var_core_value_sig011D,
    endTokenOffset: var_core_value_sigBBEE
  } : null;
}
function O(var_core_value_sig7F19, var_core_value_sig7827) {
  var var_core_value_sig652C;
  let var_core_value_sig7E32 = D(var_core_value_sig7827),
    var_core_value_sig4C07 = var_core_value_sig7F19.dataStream[var_core_value_sig7E32 + 1];
  (var_core_value_sig4C07 === e.DataStreamTreeTokenType["SECTION_BREAK"] || var_core_value_sig4C07 === undefined) && k(var_core_value_sig7F19, var_core_value_sig7E32 + 1, e.DataStreamTreeTokenType["PARAGRAPH"], {
    paragraphs: [{
      startIndex: 0,
      paragraphId: (0, e.createParagraphId)(new Set((var_core_value_sig652C = var_core_value_sig7F19.paragraphs) == null ? undefined : var_core_value_sig652C.map(var_core_value_sig2DAB => var_core_value_sig2DAB.paragraphId)))
    }]
  });
}
function k(var_core_value_sig79AB, var_core_value_sig8E74, var_core_value_sig104C, var_core_value_sig841D = {}) {
  var var_core_value_sig90CB, var_core_value_sigBDF5;
  var_core_value_sig104C && (var_core_value_sig79AB.dataStream = "" + var_core_value_sig79AB.dataStream["slice"](0, var_core_value_sig8E74) + var_core_value_sig104C + var_core_value_sig79AB.dataStream["slice"](var_core_value_sig8E74), Ce(var_core_value_sig79AB, var_core_value_sig8E74, var_core_value_sig104C.length), (var_core_value_sig90CB = var_core_value_sig841D.paragraphs) != null && var_core_value_sig90CB.length && (var_core_value_sig79AB.paragraphs = [...(var_core_value_sig79AB.paragraphs ?? []), ...var_core_value_sig841D.paragraphs["map"](var_core_value_sig877E => ({
    ...var_core_value_sig877E,
    startIndex: var_core_value_sig877E.startIndex + var_core_value_sig8E74
  }))].sort((var_core_value_sig20C8, var_core_value_sigE9A7) => var_core_value_sig20C8.startIndex - var_core_value_sigE9A7.startIndex)), (var_core_value_sigBDF5 = var_core_value_sig841D.blockRanges) != null && var_core_value_sigBDF5.length && (var_core_value_sig79AB.blockRanges = [...(var_core_value_sig79AB.blockRanges ?? []), ...var_core_value_sig841D.blockRanges["map"](var_core_value_sigBECE => ({
    ...var_core_value_sigBECE,
    startIndex: var_core_value_sigBECE.startIndex + var_core_value_sig8E74,
    endIndex: var_core_value_sigBECE.endIndex + var_core_value_sig8E74
  }))].sort((var_core_value_sig1B22, var_core_value_sig7F72) => var_core_value_sig1B22.startIndex - var_core_value_sig7F72.startIndex)));
}
function A(var_core_value_sigACC6, var_core_value_sig1614, var_core_value_sig85C3) {
  let var_core_value_sigB996 = var_core_value_sig85C3 - var_core_value_sig1614;
  var_core_value_sigACC6.dataStream = "" + var_core_value_sigACC6.dataStream["slice"](0, var_core_value_sig1614) + var_core_value_sigACC6.dataStream["slice"](var_core_value_sig85C3), we(var_core_value_sigACC6, var_core_value_sig1614, var_core_value_sigB996);
}
function Ce(var_core_value_sig4BBA, var_core_value_sig6201, var_core_value_sig5151) {
  var_core_value_sig4BBA.paragraphs = j(var_core_value_sig4BBA.paragraphs, var_core_value_sig6201, var_core_value_sig5151), var_core_value_sig4BBA.sectionBreaks = j(var_core_value_sig4BBA.sectionBreaks, var_core_value_sig6201, var_core_value_sig5151), var_core_value_sig4BBA.customBlocks = j(var_core_value_sig4BBA.customBlocks, var_core_value_sig6201, var_core_value_sig5151), var_core_value_sig4BBA.textRuns = Te(var_core_value_sig4BBA.textRuns, var_core_value_sig6201, var_core_value_sig5151), var_core_value_sig4BBA.tables = Ee(var_core_value_sig4BBA.tables, var_core_value_sig6201, var_core_value_sig5151), var_core_value_sig4BBA.columnGroups = N(var_core_value_sig4BBA.columnGroups, var_core_value_sig6201, var_core_value_sig5151), var_core_value_sig4BBA.customRanges = N(var_core_value_sig4BBA.customRanges, var_core_value_sig6201, var_core_value_sig5151), var_core_value_sig4BBA.customDecorations = N(var_core_value_sig4BBA.customDecorations, var_core_value_sig6201, var_core_value_sig5151), var_core_value_sig4BBA.blockRanges = N(var_core_value_sig4BBA.blockRanges, var_core_value_sig6201, var_core_value_sig5151);
}
function we(var_core_value_sigB542, var_core_value_sigBB6C, var_core_value_sigE2BF) {
  var var_core_value_sigB8C7, var_core_value_sigA56E;
  var_core_value_sigB542.paragraphs = M(var_core_value_sigB542.paragraphs, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.sectionBreaks = M(var_core_value_sigB542.sectionBreaks, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.customBlocks = M(var_core_value_sigB542.customBlocks, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.textRuns = (var_core_value_sigB8C7 = F((var_core_value_sigA56E = var_core_value_sigB542.textRuns) == null ? undefined : var_core_value_sigA56E.map(var_core_value_sig7B2A => ({
    ...var_core_value_sig7B2A,
    startIndex: var_core_value_sig7B2A.st,
    endIndex: var_core_value_sig7B2A.ed
  })), var_core_value_sigBB6C, var_core_value_sigE2BF)) == null ? undefined : var_core_value_sigB8C7.map(var_core_value_sig06CD => {
    let {
      startIndex: var_core_value_sigA5F1,
      endIndex: var_core_value_sig97A2,
      ...var_core_value_sig07E9
    } = var_core_value_sig06CD;
    return {
      ...var_core_value_sig07E9,
      st: var_core_value_sigA5F1,
      ed: var_core_value_sig97A2
    };
  }), var_core_value_sigB542.tables = F(var_core_value_sigB542.tables, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.columnGroups = P(var_core_value_sigB542.columnGroups, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.customRanges = P(var_core_value_sigB542.customRanges, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.customDecorations = P(var_core_value_sigB542.customDecorations, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.blockRanges = P(var_core_value_sigB542.blockRanges, var_core_value_sigBB6C, var_core_value_sigE2BF);
}
function j(var_core_value_sig1998, var_core_value_sigFF19, var_core_value_sig43B8) {
  return var_core_value_sig1998 == null ? undefined : var_core_value_sig1998.map(var_core_value_sig4F59 => var_core_value_sig4F59.startIndex >= var_core_value_sigFF19 ? {
    ...var_core_value_sig4F59,
    startIndex: var_core_value_sig4F59.startIndex + var_core_value_sig43B8
  } : var_core_value_sig4F59);
}
function M(var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig9D15) {
  let var_core_value_sigB785 = var_core_value_sig66C0 + var_core_value_sig9D15;
  return var_core_value_sigD98F == null ? undefined : var_core_value_sigD98F.map(var_core_value_sigF564 => var_core_value_sigF564.startIndex >= var_core_value_sig66C0 && var_core_value_sigF564.startIndex < var_core_value_sigB785 ? null : var_core_value_sigF564.startIndex >= var_core_value_sigB785 ? {
    ...var_core_value_sigF564,
    startIndex: var_core_value_sigF564.startIndex - var_core_value_sig9D15
  } : var_core_value_sigF564).filter(var_core_value_sig8CFA => var_core_value_sig8CFA != null);
}
function Te(var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7) {
  return var_core_value_sig130F == null ? undefined : var_core_value_sig130F.map(var_core_value_sig2E11 => var_core_value_sig2E11.st >= var_core_value_sigC0E3 ? {
    ...var_core_value_sig2E11,
    st: var_core_value_sig2E11.st + var_core_value_sig52F7,
    ed: var_core_value_sig2E11.ed + var_core_value_sig52F7
  } : var_core_value_sig2E11.ed > var_core_value_sigC0E3 ? {
    ...var_core_value_sig2E11,
    ed: var_core_value_sig2E11.ed + var_core_value_sig52F7
  } : var_core_value_sig2E11);
}
function N(var_core_value_sig866F, var_core_value_sigDE3D, var_core_value_sigF175) {
  return var_core_value_sig866F == null ? undefined : var_core_value_sig866F.map(var_core_value_sig5B69 => (0, e.shiftInclusiveRangeOnInsert)(var_core_value_sig5B69, var_core_value_sigDE3D, var_core_value_sigF175));
}
function Ee(var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0) {
  return var_core_value_sig6A18 == null ? undefined : var_core_value_sig6A18.map(var_core_value_sigB098 => (0, e.shiftExclusiveRangeOnInsert)(var_core_value_sigB098, var_core_value_sig4E3D, var_core_value_sig49B0));
}
function P(var_core_value_sig2547, var_core_value_sigBCA9, var_core_value_sig4CDF) {
  return var_core_value_sig2547 == null ? undefined : var_core_value_sig2547.map(var_core_value_sigCE71 => (0, e.shiftInclusiveRangeOnDelete)(var_core_value_sigCE71, var_core_value_sigBCA9, var_core_value_sig4CDF)).filter(var_core_value_sig21D8 => var_core_value_sig21D8 != null);
}
function F(var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sigC9ED) {
  return var_core_value_sig3F79 == null ? undefined : var_core_value_sig3F79.map(var_core_value_sig2B65 => (0, e.shiftExclusiveRangeOnDelete)(var_core_value_sig2B65, var_core_value_sig880E, var_core_value_sigC9ED)).filter(var_core_value_sigD7EA => var_core_value_sigD7EA != null);
}
const I = {
    id: "docs-code.command.insert-below",
    type: e.CommandType["COMMAND"],
    handler: var_core_value_sigB57B => {
      var var_core_value_sig780B;
      if ((0, n.isHeaderFooterSelection)(W(var_core_value_sigB57B))) return false;
      let var_core_value_sig7D1B = (0, n.getContentInsertRange)(var_core_value_sigB57B);
      if (var_core_value_sig7D1B) return var_core_value_sigB57B.get(e.ICommandService).syncExecuteCommand(R.id, {
        startOffset: var_core_value_sig7D1B.startOffset,
        endOffset: var_core_value_sig7D1B.endOffset,
        insertionMode: "insert-new",
        unitId: var_core_value_sig7D1B.unitId
      });
      let var_core_value_sig7BE0 = je(var_core_value_sigB57B);
      if (!var_core_value_sig7BE0) return false;
      let var_core_value_sig7D40 = (var_core_value_sig780B = var_core_value_sigB57B.get(e.IUniverInstanceService).getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"])) == null ? undefined : var_core_value_sig780B.getBody(),
        var_core_value_sig6C7E = var_core_value_sig7D40 ? (0, e.getParagraphFollowingBlockOffset)(var_core_value_sig7D40, var_core_value_sig7BE0) : var_core_value_sig7BE0.startIndex + 1;
      return var_core_value_sigB57B.get(e.ICommandService).syncExecuteCommand(R.id, {
        startOffset: var_core_value_sig6C7E,
        endOffset: var_core_value_sig6C7E
      });
    }
  },
  L = {
    id: "docs-code.command.consume-boundary-delete",
    type: e.CommandType["COMMAND"],
    handler: () => true
  },
  R = {
    id: "docs-code.command.insert",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig68BE, var_core_value_sig04C6) => {
      let var_core_value_sigCA05 = U(var_core_value_sig68BE, var_core_value_sig04C6 == null ? undefined : var_core_value_sig04C6.unitId);
      if (!var_core_value_sigCA05) return false;
      let var_core_value_sig2F2B = W(var_core_value_sig68BE);
      if ((0, n.isHeaderFooterSelection)(var_core_value_sig2F2B)) return false;
      let var_core_value_sig70AF = var_core_value_sigCA05.model["serialize"](var_core_value_sigCA05.unitId),
        var_core_value_sigD04E = Oe(var_core_value_sig04C6, var_core_value_sig2F2B),
        var_core_value_sigB99B = ke(var_core_value_sigCA05.previousDocumentData, var_core_value_sigD04E);
      if (var_core_value_sigB99B) {
        if (var_core_value_sigB99B.blockType !== e.DocumentBlockRangeType["CODE"]) return false;
        let var_core_value_sigB33B = v({
          blockId: var_core_value_sigB99B.blockId,
          documentData: var_core_value_sigCA05.previousDocumentData,
          metadata: var_core_value_sig70AF
        });
        if (!var_core_value_sigB33B) return false;
        let var_core_value_sig24B9 = J(var_core_value_sigCA05.commandService, var_core_value_sigCA05.selectionManager, var_core_value_sigCA05.unitId, var_core_value_sigCA05.previousDocumentData, var_core_value_sigB33B.nextDocumentData, R.id, var_core_value_sigB33B.cursorOffset);
        return var_core_value_sig24B9 && var_core_value_sigB33B.nextMetadata && var_core_value_sigCA05.model["deserialize"](var_core_value_sigCA05.unitId, var_core_value_sigB33B.nextMetadata), var_core_value_sig24B9;
      }
      let var_core_value_sig5A75 = (var_core_value_sig04C6 == null ? undefined : var_core_value_sig04C6.blockId) ?? (0, e.generateRandomId)(6),
        var_core_value_sig7BAF;
      try {
        var_core_value_sig7BAF = ee({
          blockId: var_core_value_sig5A75,
          config: var_core_value_sig04C6 == null ? undefined : var_core_value_sig04C6.config,
          documentData: var_core_value_sigCA05.previousDocumentData,
          endOffset: var_core_value_sigD04E == null ? undefined : var_core_value_sigD04E.endOffset,
          insertionMode: var_core_value_sig04C6 == null ? undefined : var_core_value_sig04C6.insertionMode,
          metadata: var_core_value_sig70AF,
          startOffset: var_core_value_sigD04E == null ? undefined : var_core_value_sigD04E.startOffset
        });
      } catch (var_core_value_sigE627) {
        if (var_core_value_sigE627 instanceof _) return false;
        throw var_core_value_sigE627;
      }
      let var_core_value_sig8F69 = J(var_core_value_sigCA05.commandService, var_core_value_sigCA05.selectionManager, var_core_value_sigCA05.unitId, var_core_value_sigCA05.previousDocumentData, var_core_value_sig7BAF.nextDocumentData, R.id, var_core_value_sig7BAF.cursorOffset);
      return var_core_value_sig8F69 && var_core_value_sig7BAF.nextMetadata && var_core_value_sigCA05.model["deserialize"](var_core_value_sigCA05.unitId, var_core_value_sig7BAF.nextMetadata), var_core_value_sig8F69;
    }
  },
  z = {
    id: "docs-code.command.update",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig6884, var_core_value_sig066E) => {
      if (!var_core_value_sig066E) return false;
      let var_core_value_sig9B0D = U(var_core_value_sig6884, var_core_value_sig066E.unitId);
      if (!var_core_value_sig9B0D) return false;
      let var_core_value_sig3D2C = ie({
        blockId: var_core_value_sig066E.blockId,
        config: var_core_value_sig066E.config,
        documentData: var_core_value_sig9B0D.previousDocumentData,
        metadata: var_core_value_sig9B0D.model["serialize"](var_core_value_sig9B0D.unitId)
      });
      return var_core_value_sig3D2C.nextMetadata && var_core_value_sig9B0D.model["deserialize"](var_core_value_sig9B0D.unitId, var_core_value_sig3D2C.nextMetadata), true;
    }
  },
  De = {
    id: "docs-code.command.exit",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigC56D, var_core_value_sig3A17) => B.handler(var_core_value_sigC56D, var_core_value_sig3A17)
  },
  B = {
    id: "docs-code.command.unwrap",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig938F, var_core_value_sigD948) => {
      if (!var_core_value_sigD948) return false;
      let var_core_value_sigBE5E = U(var_core_value_sig938F, var_core_value_sigD948 == null ? undefined : var_core_value_sigD948.unitId);
      if (!var_core_value_sigBE5E) return false;
      let var_core_value_sig0281 = v({
        blockId: var_core_value_sigD948.blockId,
        documentData: var_core_value_sigBE5E.previousDocumentData,
        metadata: var_core_value_sigBE5E.model["serialize"](var_core_value_sigBE5E.unitId)
      });
      if (!var_core_value_sig0281) return false;
      let var_core_value_sigED71 = J(var_core_value_sigBE5E.commandService, var_core_value_sigBE5E.selectionManager, var_core_value_sigBE5E.unitId, var_core_value_sigBE5E.previousDocumentData, var_core_value_sig0281.nextDocumentData, B.id, var_core_value_sig0281.cursorOffset);
      return var_core_value_sigED71 && var_core_value_sig0281.nextMetadata && var_core_value_sigBE5E.model["deserialize"](var_core_value_sigBE5E.unitId, var_core_value_sig0281.nextMetadata), var_core_value_sigED71;
    }
  },
  V = {
    id: "docs-code.command.remove",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig281C, var_core_value_sig3C92) => {
      if (!var_core_value_sig3C92) return false;
      let var_core_value_sigB16B = U(var_core_value_sig281C, var_core_value_sig3C92 == null ? undefined : var_core_value_sig3C92.unitId);
      if (!var_core_value_sigB16B) return false;
      let var_core_value_sig585D = ae({
        blockId: var_core_value_sig3C92.blockId,
        documentData: var_core_value_sigB16B.previousDocumentData,
        metadata: var_core_value_sigB16B.model["serialize"](var_core_value_sigB16B.unitId)
      });
      if (!var_core_value_sig585D) return false;
      let var_core_value_sigE722 = J(var_core_value_sigB16B.commandService, var_core_value_sigB16B.selectionManager, var_core_value_sigB16B.unitId, var_core_value_sigB16B.previousDocumentData, var_core_value_sig585D.nextDocumentData, V.id, var_core_value_sig585D.cursorOffset);
      return var_core_value_sigE722 && var_core_value_sig585D.nextMetadata && var_core_value_sigB16B.model["deserialize"](var_core_value_sigB16B.unitId, var_core_value_sig585D.nextMetadata), var_core_value_sigE722;
    }
  },
  H = {
    id: "docs-code.command.cancel-empty-paragraph",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig062A, var_core_value_sig050A) => {
      var var_core_value_sig8B32;
      let var_core_value_sig870F = U(var_core_value_sig062A, var_core_value_sig050A == null ? undefined : var_core_value_sig050A.unitId);
      if (!var_core_value_sig870F) return false;
      let var_core_value_sigB683 = (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.cursorOffset) ?? ((var_core_value_sig8B32 = W(var_core_value_sig062A)) == null ? undefined : var_core_value_sig8B32.startOffset);
      if (var_core_value_sigB683 == null) return false;
      let var_core_value_sig26EC = y({
        cursorOffset: var_core_value_sigB683,
        documentData: var_core_value_sig870F.previousDocumentData,
        paragraphStartIndex: var_core_value_sig050A == null ? undefined : var_core_value_sig050A.paragraphStartIndex
      });
      return var_core_value_sig26EC ? J(var_core_value_sig870F.commandService, var_core_value_sig870F.selectionManager, var_core_value_sig870F.unitId, var_core_value_sig870F.previousDocumentData, var_core_value_sig26EC.nextDocumentData, H.id, var_core_value_sig26EC.cursorOffset) : false;
    }
  };
function U(var_core_value_sigEEDB, var_core_value_sig36E7) {
  let var_core_value_sig6A78 = var_core_value_sigEEDB.get(e.IUniverInstanceService),
    var_core_value_sigF7EF = var_core_value_sig36E7 ? var_core_value_sig6A78.getUnit(var_core_value_sig36E7, e.UniverInstanceType["UNIVER_DOC"]) : var_core_value_sig6A78.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]);
  return var_core_value_sigF7EF ? {
    commandService: var_core_value_sigEEDB.get(e.ICommandService),
    model: var_core_value_sigEEDB.get(p),
    previousDocumentData: var_core_value_sigF7EF.getSnapshot(),
    selectionManager: var_core_value_sigEEDB.get(n.DocSelectionManagerService),
    unitId: var_core_value_sigF7EF.getUnitId()
  } : null;
}
function W(var_core_value_sig27F9) {
  var var_core_value_sig393E;
  return (var_core_value_sig393E = var_core_value_sig27F9.get(n.DocSelectionManagerService).getTextRanges()) == null ? undefined : var_core_value_sig393E[0];
}
function Oe(var_core_value_sigB609, var_core_value_sig390D) {
  let var_core_value_sigC928 = (var_core_value_sigB609 == null ? undefined : var_core_value_sigB609.startOffset) ?? (var_core_value_sig390D == null ? undefined : var_core_value_sig390D.startOffset),
    var_core_value_sig39B7 = (var_core_value_sigB609 == null ? undefined : var_core_value_sigB609.endOffset) ?? (var_core_value_sig390D == null ? undefined : var_core_value_sig390D.endOffset);
  if (var_core_value_sigC928 != null && var_core_value_sig39B7 != null) return {
    endOffset: Math.max(var_core_value_sigC928, var_core_value_sig39B7),
    startOffset: Math.min(var_core_value_sigC928, var_core_value_sig39B7)
  };
}
function ke(var_core_value_sig18E0, var_core_value_sigE161) {
  var var_core_value_sigBDEE;
  if (!var_core_value_sigE161) return;
  let var_core_value_sig1F40 = Ae(var_core_value_sigE161);
  return (var_core_value_sigBDEE = var_core_value_sig18E0.body) == null || (var_core_value_sigBDEE = var_core_value_sigBDEE.blockRanges) == null ? undefined : var_core_value_sigBDEE.find(var_core_value_sigEF3E => {
    let var_core_value_sig273D = (0, e.getBlockRangeInterval)(var_core_value_sigEF3E);
    return var_core_value_sigE161.startOffset === var_core_value_sigE161.endOffset ? (0, e.containsInteriorInsertionOffset)(var_core_value_sig273D, var_core_value_sig1F40) : (0, e.containsStreamIndex)(var_core_value_sig273D, var_core_value_sig1F40);
  });
}
function Ae(var_core_value_sig3FC7) {
  return var_core_value_sig3FC7.startOffset === var_core_value_sig3FC7.endOffset ? var_core_value_sig3FC7.startOffset : var_core_value_sig3FC7.startOffset + 1;
}
function je(var_core_value_sig1E1B) {
  let var_core_value_sig3B10 = W(var_core_value_sig1E1B);
  if (!var_core_value_sig3B10) return null;
  let var_core_value_sig89E6 = var_core_value_sig1E1B.get(e.IUniverInstanceService).getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
    var_core_value_sig4743 = var_core_value_sig89E6 == null ? undefined : var_core_value_sig89E6.getBody();
  return var_core_value_sig4743 ? e.BuildTextUtils["range"].getParagraphsInRange(var_core_value_sig3B10, var_core_value_sig4743.paragraphs ?? [], var_core_value_sig4743.dataStream ?? "")[0] ?? null : null;
}
function Me(var_core_value_sigEB6A, var_core_value_sig3D46) {
  let var_core_value_sigCC93 = var_core_value_sigEB6A.body,
    var_core_value_sig5964 = var_core_value_sig3D46.body,
    var_core_value_sig808B = (0, e.getSingleDataStreamChange)(var_core_value_sigCC93, var_core_value_sig5964);
  return [var_core_value_sig808B && var_core_value_sig5964 ? Ne(var_core_value_sig5964, var_core_value_sig808B) : null, var_core_value_sig808B ? null : Pe(var_core_value_sigCC93, var_core_value_sig5964)].filter(Boolean).reduce((var_core_value_sig9A0D, var_core_value_sigA319) => e.JSONX["compose"](var_core_value_sig9A0D, var_core_value_sigA319), null);
}
function Ne(var_core_value_sig2A26, var_core_value_sig1179) {
  let var_core_value_sigEA92 = new e["TextX"]();
  return var_core_value_sigEA92.retain(var_core_value_sig1179.start), var_core_value_sig1179.insertLength > 0 && var_core_value_sigEA92.insert(var_core_value_sig1179.insertLength, (0, e.getBodySliceForTextXAction)(var_core_value_sig2A26, var_core_value_sig1179.start, var_core_value_sig1179.start + var_core_value_sig1179.insertLength, false)), var_core_value_sig1179.deleteLength > 0 && var_core_value_sigEA92.delete(var_core_value_sig1179.deleteLength), e.JSONX["getInstance"]().editOp(var_core_value_sigEA92.serialize(), ["body"]);
}
function Pe(var_core_value_sig8FD9, var_core_value_sig1AE5) {
  let var_core_value_sig7100 = [],
    var_core_value_sigA19A = var_core_value_sig8FD9 ? G(var_core_value_sig8FD9) : undefined,
    var_core_value_sigD3F5 = var_core_value_sig1AE5 ? G(var_core_value_sig1AE5) : undefined;
  for (let var_core_value_sig2D58 of Fe) K(e.JSONX["getInstance"](), ["body", var_core_value_sig2D58], var_core_value_sigA19A == null ? undefined : var_core_value_sigA19A[var_core_value_sig2D58], var_core_value_sigD3F5 == null ? undefined : var_core_value_sigD3F5[var_core_value_sig2D58], var_core_value_sig7100);
  return var_core_value_sig7100.reduce((var_core_value_sig223F, var_core_value_sigD749) => e.JSONX["compose"](var_core_value_sig223F, var_core_value_sigD749), null);
}
const Fe = ["paragraphs", "sectionBreaks", "tables", "columnGroups", "blockRanges", "customBlocks", "customRanges", "customDecorations", "textRuns"];
function G(var_core_value_sig3082) {
  return var_core_value_sig3082;
}
function K(var_core_value_sigF5D1, var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sig90C0) {
  if (!q(var_core_value_sig481B, var_core_value_sig13D7)) {
    if (var_core_value_sig481B == null) {
      var_core_value_sig90C0.push(var_core_value_sigF5D1.insertOp(var_core_value_sig8775, var_core_value_sig13D7));
      return;
    }
    if (var_core_value_sig13D7 == null) {
      var_core_value_sig90C0.push(var_core_value_sigF5D1.removeOp(var_core_value_sig8775, var_core_value_sig481B));
      return;
    }
    if (Array.isArray(var_core_value_sig481B) && Array.isArray(var_core_value_sig13D7)) {
      Ie(var_core_value_sigF5D1, var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sig90C0);
      return;
    }
    if (Le(var_core_value_sig481B) && Le(var_core_value_sig13D7)) {
      new Set([...Object.keys(var_core_value_sig481B), ...Object.keys(var_core_value_sig13D7)]).forEach(var_core_value_sig7524 => {
        K(var_core_value_sigF5D1, [...var_core_value_sig8775, var_core_value_sig7524], var_core_value_sig481B[var_core_value_sig7524], var_core_value_sig13D7[var_core_value_sig7524], var_core_value_sig90C0);
      });
      return;
    }
    var_core_value_sig90C0.push(var_core_value_sigF5D1.replaceOp(var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7));
  }
}
function Ie(var_core_value_sigF1B2, var_core_value_sigC2BB, var_core_value_sigD9DB, var_core_value_sigA363, var_core_value_sigFBA5) {
  if (var_core_value_sigD9DB.length === var_core_value_sigA363.length) {
    var_core_value_sigD9DB.forEach((var_core_value_sig3D7D, var_core_value_sig27E5) => K(var_core_value_sigF1B2, [...var_core_value_sigC2BB, var_core_value_sig27E5], var_core_value_sig3D7D, var_core_value_sigA363[var_core_value_sig27E5], var_core_value_sigFBA5));
    return;
  }
  let var_core_value_sigAC47 = 0;
  for (; var_core_value_sigAC47 < var_core_value_sigD9DB.length && var_core_value_sigAC47 < var_core_value_sigA363.length && q(var_core_value_sigD9DB[var_core_value_sigAC47], var_core_value_sigA363[var_core_value_sigAC47]);) var_core_value_sigAC47++;
  let var_core_value_sigA06F = var_core_value_sigD9DB.length - 1,
    var_core_value_sig770E = var_core_value_sigA363.length - 1;
  for (; var_core_value_sigA06F >= var_core_value_sigAC47 && var_core_value_sig770E >= var_core_value_sigAC47 && q(var_core_value_sigD9DB[var_core_value_sigA06F], var_core_value_sigA363[var_core_value_sig770E]);) var_core_value_sigA06F--, var_core_value_sig770E--;
  for (let var_core_value_sigCFFA = var_core_value_sigA06F; var_core_value_sigCFFA >= var_core_value_sigAC47; var_core_value_sigCFFA--) var_core_value_sigFBA5.push(var_core_value_sigF1B2.removeOp([...var_core_value_sigC2BB, var_core_value_sigCFFA], var_core_value_sigD9DB[var_core_value_sigCFFA]));
  for (let var_core_value_sig58C1 = var_core_value_sigAC47; var_core_value_sig58C1 <= var_core_value_sig770E; var_core_value_sig58C1++) var_core_value_sigFBA5.push(var_core_value_sigF1B2.insertOp([...var_core_value_sigC2BB, var_core_value_sig58C1], var_core_value_sigA363[var_core_value_sig58C1]));
}
function Le(var_core_value_sig4654) {
  return typeof var_core_value_sig4654 == "object" && !!var_core_value_sig4654 && !Array.isArray(var_core_value_sig4654);
}
function q(var_core_value_sigB26B, var_core_value_sig019B) {
  return JSON.stringify(var_core_value_sigB26B) === JSON.stringify(var_core_value_sig019B);
}
function J(var_core_value_sigC6BC, var_core_value_sig8EC2, var_core_value_sigA8C3, var_core_value_sig5276, var_core_value_sig031B, var_core_value_sig9DC0, var_core_value_sig95F0) {
  let var_core_value_sig9CCB = Me(var_core_value_sig5276, var_core_value_sig031B);
  return var_core_value_sig9CCB ? !!var_core_value_sigC6BC.syncExecuteCommand(n.RichTextEditingMutation["id"], {
    unitId: var_core_value_sigA8C3,
    actions: var_core_value_sig9CCB,
    textRanges: [{
      startOffset: var_core_value_sig95F0,
      endOffset: var_core_value_sig95F0,
      collapsed: true
    }],
    isEditing: false,
    trigger: var_core_value_sig9DC0
  }) : (var_core_value_sig8EC2.replaceDocRanges([{
    startOffset: var_core_value_sig95F0,
    endOffset: var_core_value_sig95F0
  }], {
    unitId: var_core_value_sigA8C3,
    subUnitId: var_core_value_sigA8C3
  }, false), true);
}
const Y = "DOC_CODE_PLUGIN";
var Re = "@univerjs-pro/docs-code",
  ze = "1.0.0-insiders.20260907-70fc579";
const Be = {};
function X(var_core_value_sigE718, var_core_value_sigAEC8) {
  return function (var_core_value_sig5090, var_core_value_sigC368) {
    var_core_value_sigAEC8(var_core_value_sig5090, var_core_value_sigC368, var_core_value_sigE718);
  };
}
function Z(var_core_value_sigB977, var_core_value_sig2949, var_core_value_sig308A, var_core_value_sig528D) {
  var var_core_value_sigA309 = arguments.length,
    var_core_value_sig9E20 = var_core_value_sigA309 < 3 ? var_core_value_sig2949 : var_core_value_sig528D === null ? var_core_value_sig528D = Object.getOwnPropertyDescriptor(var_core_value_sig2949, var_core_value_sig308A) : var_core_value_sig528D,
    var_core_value_sig26BB;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig9E20 = Reflect.decorate(var_core_value_sigB977, var_core_value_sig2949, var_core_value_sig308A, var_core_value_sig528D);else {
    for (var var_core_value_sig19B4 = var_core_value_sigB977.length - 1; var_core_value_sig19B4 >= 0; var_core_value_sig19B4--) (var_core_value_sig26BB = var_core_value_sigB977[var_core_value_sig19B4]) && (var_core_value_sig9E20 = (var_core_value_sigA309 < 3 ? var_core_value_sig26BB(var_core_value_sig9E20) : var_core_value_sigA309 > 3 ? var_core_value_sig26BB(var_core_value_sig2949, var_core_value_sig308A, var_core_value_sig9E20) : var_core_value_sig26BB(var_core_value_sig2949, var_core_value_sig308A)) || var_core_value_sig9E20);
  }
  return var_core_value_sigA309 > 3 && var_core_value_sig9E20 && Object.defineProperty(var_core_value_sig2949, var_core_value_sig308A, var_core_value_sig9E20), var_core_value_sig9E20;
}
let Q = class extends e.Disposable {
  constructor(var_core_value_sigAD56, var_core_value_sigDB4A) {
    super(), this._resourceManagerService = var_core_value_sigAD56, this._docsCodeModel = var_core_value_sigDB4A, this._initResource();
  }
  _initResource() {
    this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: Y,
      businesses: [e.UniverInstanceType["UNIVER_DOC"]],
      toJson: var_core_value_sig8061 => JSON.stringify(this._docsCodeModel["serialize"](var_core_value_sig8061)),
      parseJson: var_core_value_sig4D4C => o(JSON.parse(var_core_value_sig4D4C)),
      onLoad: (var_core_value_sigC9E0, var_core_value_sig76BA) => this._docsCodeModel["deserialize"](var_core_value_sigC9E0, var_core_value_sig76BA),
      onUnLoad: var_core_value_sigFBFA => this._docsCodeModel["removeUnit"](var_core_value_sigFBFA)
    }));
  }
};
Q = Z([X(0, e.IResourceManagerService), X(1, (0, e.Inject)(p))], Q);
let $ = class extends e.Plugin {
  constructor(var_core_value_sig6418 = Be, var_core_value_sig1896, var_core_value_sig0285, var_core_value_sig777D) {
    super(), this._config = var_core_value_sig6418, this._injector = var_core_value_sig1896, this._commandService = var_core_value_sig0285, this._configService = var_core_value_sig777D;
    let {
      ...var_core_value_sig3F4C
    } = (0, e.merge)({}, Be, this._config);
    this._configService["setConfig"]("docs-code.config", var_core_value_sig3F4C);
  }
  onStarting() {
    this._injector["add"]([p]), this._injector["add"]([Q]), this._injector["get"](p), this._injector["get"](Q), [R, I, z, B, V, De, H, L, m, h].forEach(var_core_value_sigF602 => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigF602)));
  }
};
f($, "pluginName", Y), f($, "packageName", Re), f($, "version", ze), f($, "type", e.UniverInstanceType["UNIVER_DOC"]), $ = Z([(0, e.DependentOn)(r.UniverLicensePlugin, n.UniverDocsPlugin), X(1, (0, e.Inject)(e.Injector)), X(2, e.ICommandService), X(3, e.IConfigService)], $), exports.DOCS_CODE_PLUGIN = Y, exports.DocsCodeCancelEmptyParagraphCommand = H, exports.DocsCodeConsumeBoundaryDeleteCommand = L, exports.DocsCodeInsertBelowCommand = I, exports.DocsCodeInsertCommand = R, exports.DocsCodeModel = p, exports.DocsCodeRemoveCommand = V, exports.DocsCodeUnwrapCommand = B, exports.DocsCodeUpdateCommand = z, exports.RemoveDocsCodeConfigMutation = h, exports.SetDocsCodeConfigMutation = m, Object.defineProperty(exports, "UniverDocsCodePlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.buildCancelEmptyCodeParagraphActions = y, exports.isCodeBoundaryDelete = se, exports.normalizeDocsCodeConfig = a, exports.normalizeDocsCodeMetadataResource = o;
