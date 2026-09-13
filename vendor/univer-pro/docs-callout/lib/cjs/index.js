Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/core"),
  t = require("rxjs"),
  n = require("@univerjs/docs"),
  r = require("@univerjs-pro/license");
const i = {
  icon: "🎨",
  showIcon: true,
  backgroundColor: "",
  borderColor: "",
  borderWidth: 1,
  borderOpacity: 1,
  borderStyle: e.DashStyleType["SOLID"],
  borderRadius: 8,
  paddingTop: 16,
  paddingRight: 20,
  paddingBottom: 16,
  paddingLeft: 20,
  iconSize: 24,
  iconGap: 16
};
function a(var_core_value_sig34C8) {
  let var_core_value_sigB744 = (var_core_value_sig34C8 == null ? undefined : var_core_value_sig34C8.callouts) ?? {};
  return {
    callouts: Object.fromEntries(Object.entries(var_core_value_sigB744).map(([var_core_value_sig1BBD, var_core_value_sigF704]) => [var_core_value_sig1BBD, o(var_core_value_sigF704)]))
  };
}
function o(var_core_value_sigEAE2) {
  return {
    icon: s(var_core_value_sigEAE2, "icon"),
    showIcon: s(var_core_value_sigEAE2, "showIcon"),
    backgroundColor: s(var_core_value_sigEAE2, "backgroundColor"),
    borderColor: s(var_core_value_sigEAE2, "borderColor"),
    borderWidth: s(var_core_value_sigEAE2, "borderWidth"),
    borderOpacity: s(var_core_value_sigEAE2, "borderOpacity"),
    borderStyle: s(var_core_value_sigEAE2, "borderStyle"),
    borderRadius: s(var_core_value_sigEAE2, "borderRadius"),
    paddingTop: s(var_core_value_sigEAE2, "paddingTop"),
    paddingRight: s(var_core_value_sigEAE2, "paddingRight"),
    paddingBottom: s(var_core_value_sigEAE2, "paddingBottom"),
    paddingLeft: s(var_core_value_sigEAE2, "paddingLeft"),
    iconSize: s(var_core_value_sigEAE2, "iconSize"),
    iconGap: s(var_core_value_sigEAE2, "iconGap")
  };
}
function s(var_core_value_sigE68A, var_core_value_sig3E68) {
  return (var_core_value_sigE68A == null ? undefined : var_core_value_sigE68A[var_core_value_sig3E68]) ?? i[var_core_value_sig3E68];
}
function c(var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F) {
  let var_core_value_sig8EA0 = a(var_core_value_sigF4C5);
  return var_core_value_sig8EA0.callouts[var_core_value_sig5410] = o({
    ...var_core_value_sig8EA0.callouts[var_core_value_sig5410],
    ...var_core_value_sig492F
  }), var_core_value_sig8EA0;
}
function l(var_core_value_sigA6F6, var_core_value_sigCDDA) {
  let var_core_value_sigE243 = a(var_core_value_sigA6F6);
  return delete var_core_value_sigE243.callouts[var_core_value_sigCDDA], var_core_value_sigE243;
}
function u(var_core_value_sig74A8) {
  "@babel/helpers - typeof";

  return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig2BCF) {
    return typeof var_core_value_sig2BCF;
  } : function (var_core_value_sig0D69) {
    return var_core_value_sig0D69 && typeof Symbol == "function" && var_core_value_sig0D69.constructor === Symbol && var_core_value_sig0D69 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig0D69;
  }, u(var_core_value_sig74A8);
}
function d(var_core_value_sig21B2, var_core_value_sigDE08) {
  if (u(var_core_value_sig21B2) != "object" || !var_core_value_sig21B2) return var_core_value_sig21B2;
  var var_core_value_sigACCB = var_core_value_sig21B2[Symbol.toPrimitive];
  if (var_core_value_sigACCB !== undefined) {
    var var_core_value_sig7F33 = var_core_value_sigACCB.call(var_core_value_sig21B2, var_core_value_sigDE08 || "default");
    if (u(var_core_value_sig7F33) != "object") return var_core_value_sig7F33;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigDE08 === "string" ? String : Number)(var_core_value_sig21B2);
}
function f(var_core_value_sig0C53) {
  var var_core_value_sigEA04 = d(var_core_value_sig0C53, "string");
  return u(var_core_value_sigEA04) == "symbol" ? var_core_value_sigEA04 : var_core_value_sigEA04 + "";
}
function p(var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565) {
  return (var_core_value_sig8109 = f(var_core_value_sig8109)) in var_core_value_sig7A62 ? Object.defineProperty(var_core_value_sig7A62, var_core_value_sig8109, {
    value: var_core_value_sig7565,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig7A62[var_core_value_sig8109] = var_core_value_sig7565, var_core_value_sig7A62;
}
var m = class extends e.Disposable {
  constructor(...var_core_value_sig480E) {
    super(...var_core_value_sig480E), p(this, "_resources", new Map()), p(this, "_change$", new t["Subject"]()), p(this, "change$", this._change$["asObservable"]());
  }
  getCalloutConfig(var_core_value_sig26DB, var_core_value_sigF0F9) {
    return a(this._resources["get"](var_core_value_sig26DB)).callouts[var_core_value_sigF0F9];
  }
  setCalloutConfig(var_core_value_sig1A0F, var_core_value_sigFBA4, var_core_value_sig4383) {
    this._setResource(var_core_value_sig1A0F, var_core_value_sigFBA4, c(this._resources["get"](var_core_value_sig1A0F), var_core_value_sigFBA4, var_core_value_sig4383));
  }
  removeCallout(var_core_value_sig186C, var_core_value_sigD955) {
    this._setResource(var_core_value_sig186C, var_core_value_sigD955, l(this._resources["get"](var_core_value_sig186C), var_core_value_sigD955));
  }
  serialize(var_core_value_sig48BD) {
    return a(this._resources["get"](var_core_value_sig48BD));
  }
  deserialize(var_core_value_sig429F, var_core_value_sigF62A) {
    this._resources["set"](var_core_value_sig429F, a(var_core_value_sigF62A)), this._change$["next"]({
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
const h = {
    id: "docs-callout.mutation.set-config",
    type: e.CommandType["MUTATION"],
    handler: (var_core_value_sigD4FB, var_core_value_sig3E71) => !(var_core_value_sig3E71 != null && var_core_value_sig3E71.unitId) || !var_core_value_sig3E71.blockId ? false : (var_core_value_sigD4FB.get(m).setCalloutConfig(var_core_value_sig3E71.unitId, var_core_value_sig3E71.blockId, var_core_value_sig3E71.config), true)
  },
  g = {
    id: "docs-callout.mutation.remove-config",
    type: e.CommandType["MUTATION"],
    handler: (var_core_value_sig01B3, var_core_value_sig7442) => !(var_core_value_sig7442 != null && var_core_value_sig7442.unitId) || !var_core_value_sig7442.blockId ? false : (var_core_value_sig01B3.get(m).removeCallout(var_core_value_sig7442.unitId, var_core_value_sig7442.blockId), true)
  },
  ee = i.paddingLeft + i.iconSize + i.iconGap,
  te = i.paddingRight;
var _ = class extends Error {
  constructor(var_core_value_sigD873 = "Insert range cannot cross table cell boundaries") {
    super(var_core_value_sigD873);
  }
};
function ne(var_core_value_sigDF87) {
  var var_core_value_sig9EE0;
  let var_core_value_sigF051 = S(var_core_value_sigDF87.documentData),
    var_core_value_sig0B45 = w(var_core_value_sigF051),
    var_core_value_sig36F8 = re(var_core_value_sigDF87.startOffset, var_core_value_sigDF87.endOffset),
    var_core_value_sig03E1 = var_core_value_sig36F8 ? (var_core_value_sig9EE0 = var_core_value_sig0B45.blockRanges) == null ? undefined : var_core_value_sig9EE0.find(var_core_value_sigA12B => {
      let var_core_value_sigF230 = (0, e.getBlockRangeInterval)(var_core_value_sigA12B);
      return var_core_value_sigF230.startOffset === var_core_value_sig36F8.startOffset && var_core_value_sigF230.endOffset === var_core_value_sig36F8.endOffset;
    }) : undefined,
    {
      startOffset: var_core_value_sigBB57,
      endOffset: var_core_value_sig7C4A
    } = var_core_value_sig03E1 ? var_core_value_sig36F8 : pe(var_core_value_sig0B45, var_core_value_sigDF87.startOffset, var_core_value_sigDF87.endOffset, var_core_value_sigDF87.insertionMode);
  if (!var_core_value_sig03E1 && ie(var_core_value_sig0B45, var_core_value_sigBB57, var_core_value_sig7C4A)) throw new _("Insert range cannot overlap an existing document block");
  let var_core_value_sigE799 = ge(var_core_value_sig0B45, var_core_value_sigBB57, var_core_value_sig7C4A),
    var_core_value_sigB601 = (var_core_value_sig03E1 == null ? undefined : var_core_value_sig03E1.blockId) ?? var_core_value_sigDF87.blockId,
    var_core_value_sig8B71 = c(var_core_value_sigDF87.metadata, var_core_value_sigB601, o(var_core_value_sigDF87.config));
  if (var_core_value_sig03E1) return var_core_value_sig03E1.blockType = e.DocumentBlockRangeType["CALLOUT"], ae(var_core_value_sig0B45, var_core_value_sigBB57, var_core_value_sig7C4A), y(var_core_value_sig0B45, var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigE799), O(var_core_value_sig0B45, var_core_value_sig03E1), {
    nextDocumentData: var_core_value_sigF051,
    nextMetadata: var_core_value_sig8B71,
    cursorOffset: var_core_value_sigBB57 + 1
  };
  if (var_core_value_sigBB57 === var_core_value_sig7C4A) {
    var var_core_value_sigAEFB, var_core_value_sig826B;
    let var_core_value_sig09B8 = "" + e.DataStreamTreeTokenType["BLOCK_START"] + e.DataStreamTreeTokenType["PARAGRAPH"] + e.DataStreamTreeTokenType["BLOCK_END"];
    k(var_core_value_sig0B45, var_core_value_sigBB57, var_core_value_sig09B8, {
      paragraphs: [{
        startIndex: 1,
        paragraphId: (0, e.createParagraphId)(new Set((var_core_value_sigAEFB = var_core_value_sig0B45.paragraphs) == null ? undefined : var_core_value_sigAEFB.map(var_core_value_sig2AD8 => var_core_value_sig2AD8.paragraphId))),
        paragraphStyle: v(true, true, var_core_value_sigE799)
      }],
      blockRanges: [{
        blockId: var_core_value_sigB601,
        blockType: e.DocumentBlockRangeType["CALLOUT"],
        startIndex: 0,
        endIndex: var_core_value_sig09B8.length - 1
      }]
    });
    let var_core_value_sig6F91 = (var_core_value_sig826B = var_core_value_sig0B45.blockRanges) == null ? undefined : var_core_value_sig826B.find(var_core_value_sig2AD0 => var_core_value_sig2AD0.blockId === var_core_value_sigB601);
    return var_core_value_sig6F91 && O(var_core_value_sig0B45, var_core_value_sig6F91), {
      nextDocumentData: var_core_value_sigF051,
      nextMetadata: var_core_value_sig8B71,
      cursorOffset: var_core_value_sigBB57 + 1
    };
  }
  k(var_core_value_sig0B45, var_core_value_sig7C4A, e.DataStreamTreeTokenType["BLOCK_END"]), k(var_core_value_sig0B45, var_core_value_sigBB57, e.DataStreamTreeTokenType["BLOCK_START"]), y(var_core_value_sig0B45, var_core_value_sigBB57, var_core_value_sig7C4A + 1, var_core_value_sigE799);
  let var_core_value_sigCF89 = {
    blockId: var_core_value_sigB601,
    blockType: e.DocumentBlockRangeType["CALLOUT"],
    startIndex: var_core_value_sigBB57,
    endIndex: var_core_value_sig7C4A + 1
  };
  return var_core_value_sig0B45.blockRanges = [...(var_core_value_sig0B45.blockRanges ?? []), var_core_value_sigCF89].sort((var_core_value_sigF9C7, var_core_value_sig8895) => var_core_value_sigF9C7.startIndex - var_core_value_sig8895.startIndex), O(var_core_value_sig0B45, var_core_value_sigCF89), {
    nextDocumentData: var_core_value_sigF051,
    nextMetadata: var_core_value_sig8B71,
    cursorOffset: var_core_value_sigBB57 + 1
  };
}
function re(var_core_value_sig00CB, var_core_value_sig77EE) {
  return var_core_value_sig00CB == null || var_core_value_sig77EE == null || var_core_value_sig00CB === var_core_value_sig77EE ? null : {
    startOffset: Math.min(var_core_value_sig00CB, var_core_value_sig77EE),
    endOffset: Math.max(var_core_value_sig00CB, var_core_value_sig77EE)
  };
}
function ie(var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig8721) {
  return (var_core_value_sig9F76.blockRanges ?? []).some(var_core_value_sigC80B => {
    let var_core_value_sig284F = (0, e.getBlockRangeInterval)(var_core_value_sigC80B);
    return var_core_value_sigB008 === var_core_value_sig8721 ? (0, e.containsInteriorInsertionOffset)(var_core_value_sig284F, var_core_value_sigB008) : (0, e.intersectsOperationalIntervals)(var_core_value_sig284F, {
      startOffset: var_core_value_sigB008,
      endOffset: var_core_value_sig8721
    });
  });
}
function ae(var_core_value_sig08BA, var_core_value_sigDBB5, var_core_value_sigCFAC) {
  (var_core_value_sig08BA.paragraphs ?? []).filter(var_core_value_sigE154 => var_core_value_sigE154.startIndex > var_core_value_sigDBB5 && var_core_value_sigE154.startIndex < var_core_value_sigCFAC).forEach(var_core_value_sig4632 => {
    let var_core_value_sig12F2 = {
      ...(var_core_value_sig4632.paragraphStyle ?? {})
    };
    delete var_core_value_sig12F2.textStyle, var_core_value_sig4632.paragraphStyle = var_core_value_sig12F2;
  });
}
function v(var_core_value_sig237B, var_core_value_sigFEAB, var_core_value_sigE347 = false) {
  return {
    indentStart: {
      v: ee
    },
    indentEnd: {
      v: te
    },
    keepLines: e.BooleanNumber["TRUE"],
    keepNext: var_core_value_sigFEAB ? e.BooleanNumber["FALSE"] : e.BooleanNumber["TRUE"],
    widowControl: e.BooleanNumber["TRUE"],
    ...(var_core_value_sig237B && var_core_value_sigE347 ? {
      spaceAbove: {
        v: 8
      }
    } : {}),
    ...(var_core_value_sigFEAB ? {
      spaceBelow: {
        v: 0
      }
    } : {})
  };
}
function y(var_core_value_sig3C5B, var_core_value_sig200B, var_core_value_sig3863, var_core_value_sigC97C = false) {
  let var_core_value_sigC4B1 = (var_core_value_sig3C5B.paragraphs ?? []).filter(var_core_value_sig2259 => var_core_value_sig2259.startIndex > var_core_value_sig200B && var_core_value_sig2259.startIndex < var_core_value_sig3863);
  var_core_value_sigC4B1.forEach((var_core_value_sig9E2F, var_core_value_sigD082) => {
    var_core_value_sig9E2F.paragraphStyle = {
      ...(var_core_value_sig9E2F.paragraphStyle ?? {}),
      ...v(var_core_value_sigD082 === 0, var_core_value_sigD082 === var_core_value_sigC4B1.length - 1, var_core_value_sigC97C)
    };
  });
}
function oe(var_core_value_sig1BD9) {
  let var_core_value_sigE43E = {
    ...(var_core_value_sig1BD9 ?? {})
  };
  return delete var_core_value_sigE43E.indentStart, delete var_core_value_sigE43E.indentEnd, delete var_core_value_sigE43E.spaceAbove, delete var_core_value_sigE43E.spaceBelow, delete var_core_value_sigE43E.keepLines, delete var_core_value_sigE43E.keepNext, delete var_core_value_sigE43E.widowControl, var_core_value_sigE43E;
}
function se(var_core_value_sigA937) {
  var var_core_value_sigCAD5, var_core_value_sigE503;
  let var_core_value_sig48DD = S(var_core_value_sigA937.documentData),
    var_core_value_sig5E6A = w(var_core_value_sig48DD),
    var_core_value_sigB7FC = (var_core_value_sigCAD5 = var_core_value_sig5E6A.blockRanges) == null ? undefined : var_core_value_sigCAD5.find(var_core_value_sigDBB7 => var_core_value_sigDBB7.blockId === var_core_value_sigA937.blockId && var_core_value_sigDBB7.blockType === e.DocumentBlockRangeType["CALLOUT"]);
  if (!var_core_value_sigB7FC) return {
    nextDocumentData: var_core_value_sig48DD,
    nextMetadata: a(var_core_value_sigA937.metadata),
    cursorOffset: 0
  };
  let var_core_value_sig9CD9 = (0, e.getBlockRangeInterval)(var_core_value_sigB7FC);
  return A(var_core_value_sig5E6A, var_core_value_sig9CD9.startOffset, var_core_value_sig9CD9.endOffset), var_core_value_sig5E6A.blockRanges = (var_core_value_sigE503 = var_core_value_sig5E6A.blockRanges) == null ? undefined : var_core_value_sigE503.filter(var_core_value_sigD0A8 => var_core_value_sigD0A8.blockId !== var_core_value_sigA937.blockId), {
    nextDocumentData: var_core_value_sig48DD,
    nextMetadata: l(var_core_value_sigA937.metadata, var_core_value_sigA937.blockId),
    cursorOffset: var_core_value_sigB7FC.startIndex
  };
}
function b(var_core_value_sigFD0C) {
  var var_core_value_sig849B, var_core_value_sig5F1A;
  let var_core_value_sigB455 = S(var_core_value_sigFD0C.documentData),
    var_core_value_sig5241 = w(var_core_value_sigB455),
    var_core_value_sigC6E5 = (var_core_value_sig849B = var_core_value_sig5241.blockRanges) == null ? undefined : var_core_value_sig849B.find(var_core_value_sigF4B9 => var_core_value_sigF4B9.blockId === var_core_value_sigFD0C.blockId && var_core_value_sigF4B9.blockType === e.DocumentBlockRangeType["CALLOUT"]);
  if (!var_core_value_sigC6E5) return null;
  let var_core_value_sigCEFB = D(var_core_value_sigC6E5);
  return (var_core_value_sig5241.paragraphs ?? []).filter(var_core_value_sig5CEE => var_core_value_sig5CEE.startIndex > var_core_value_sigC6E5.startIndex && var_core_value_sig5CEE.startIndex < var_core_value_sigCEFB).forEach(var_core_value_sigE92A => {
    var_core_value_sigE92A.paragraphStyle = oe(var_core_value_sigE92A.paragraphStyle);
  }), A(var_core_value_sig5241, var_core_value_sigCEFB, var_core_value_sigCEFB + 1), A(var_core_value_sig5241, var_core_value_sigC6E5.startIndex, var_core_value_sigC6E5.startIndex + 1), var_core_value_sig5241.blockRanges = (var_core_value_sig5F1A = var_core_value_sig5241.blockRanges) == null ? undefined : var_core_value_sig5F1A.filter(var_core_value_sig362B => var_core_value_sig362B.blockId !== var_core_value_sigFD0C.blockId), {
    nextDocumentData: var_core_value_sigB455,
    nextMetadata: l(var_core_value_sigFD0C.metadata, var_core_value_sigFD0C.blockId),
    cursorOffset: var_core_value_sigC6E5.startIndex
  };
}
function x(var_core_value_sig1537) {
  let var_core_value_sigE4C6 = S(var_core_value_sig1537.documentData),
    var_core_value_sig4313 = w(var_core_value_sigE4C6),
    var_core_value_sigFC87 = de(var_core_value_sig4313, var_core_value_sig1537.cursorOffset);
  return var_core_value_sigFC87 && ce(var_core_value_sigE4C6, var_core_value_sig4313, var_core_value_sigFC87, var_core_value_sig1537.cursorOffset, var_core_value_sig1537.metadata, var_core_value_sig1537.paragraphStartIndex) || null;
}
function ce(var_core_value_sig156F, var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sig9FBA, var_core_value_sigFE01) {
  let var_core_value_sigA2CE = xe(var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sigFE01);
  if (!var_core_value_sigA2CE) return null;
  let var_core_value_sig1975 = var_core_value_sigA2CE.endTokenOffset - 1;
  return A(var_core_value_sigDD51, var_core_value_sigA2CE.paragraph["startIndex"], var_core_value_sigA2CE.paragraph["startIndex"] + 1), {
    nextDocumentData: var_core_value_sig156F,
    nextMetadata: a(var_core_value_sig9FBA),
    cursorOffset: var_core_value_sig1975
  };
}
function le(var_core_value_sig6EA1, var_core_value_sig029F) {
  var var_core_value_sig3767;
  return var_core_value_sig6EA1 == null || (var_core_value_sig3767 = var_core_value_sig6EA1.blockRanges) == null ? undefined : var_core_value_sig3767.find(var_core_value_sig5CA5 => var_core_value_sig5CA5.blockType === e.DocumentBlockRangeType["CALLOUT"] && var_core_value_sig5CA5.startIndex <= var_core_value_sig029F && var_core_value_sig029F <= var_core_value_sig5CA5.endIndex);
}
function ue(var_core_value_sig670B) {
  let var_core_value_sig6912 = var_core_value_sig670B.documentData["body"];
  if (!var_core_value_sig6912) return false;
  let var_core_value_sigE235 = var_core_value_sig670B.direction === "left" ? var_core_value_sig670B.cursorOffset - 1 : var_core_value_sig670B.cursorOffset,
    var_core_value_sig7664 = var_core_value_sig670B.direction === "right" ? var_core_value_sig670B.cursorOffset + 1 : var_core_value_sigE235;
  return (var_core_value_sig6912.blockRanges ?? []).some(var_core_value_sigE90F => var_core_value_sigE90F.blockType === e.DocumentBlockRangeType["CALLOUT"] ? var_core_value_sigE235 === var_core_value_sigE90F.startIndex || var_core_value_sig7664 === var_core_value_sigE90F.startIndex : false);
}
function de(var_core_value_sig2281, var_core_value_sig5E86) {
  var var_core_value_sig6998;
  return (var_core_value_sig6998 = var_core_value_sig2281.blockRanges) == null ? undefined : var_core_value_sig6998.find(var_core_value_sigEFD4 => {
    let var_core_value_sig861B = D(var_core_value_sigEFD4);
    return var_core_value_sigEFD4.blockType === e.DocumentBlockRangeType["CALLOUT"] && var_core_value_sigEFD4.startIndex <= var_core_value_sig5E86 && var_core_value_sig5E86 <= var_core_value_sig861B + 2;
  });
}
function S(var_core_value_sigF639) {
  return {
    ...var_core_value_sigF639,
    body: var_core_value_sigF639.body ? fe(var_core_value_sigF639.body) : var_core_value_sigF639.body
  };
}
function fe(var_core_value_sigEAE5) {
  var var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82, var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sigB2CE, var_core_value_sig443C;
  return {
    ...var_core_value_sigEAE5,
    paragraphs: (var_core_value_sigE94C = var_core_value_sigEAE5.paragraphs) == null ? undefined : var_core_value_sigE94C.map(var_core_value_sig5237 => ({
      ...var_core_value_sig5237,
      bullet: C(var_core_value_sig5237.bullet),
      paragraphStyle: C(var_core_value_sig5237.paragraphStyle)
    })),
    sectionBreaks: (var_core_value_sig6D47 = var_core_value_sigEAE5.sectionBreaks) == null ? undefined : var_core_value_sig6D47.map(var_core_value_sigBB00 => ({
      ...var_core_value_sigBB00
    })),
    textRuns: (var_core_value_sigCB82 = var_core_value_sigEAE5.textRuns) == null ? undefined : var_core_value_sigCB82.map(var_core_value_sig7E54 => ({
      ...var_core_value_sig7E54
    })),
    tables: (var_core_value_sigCF4E = var_core_value_sigEAE5.tables) == null ? undefined : var_core_value_sigCF4E.map(var_core_value_sig9A8D => ({
      ...var_core_value_sig9A8D
    })),
    columnGroups: (var_core_value_sig6CAD = var_core_value_sigEAE5.columnGroups) == null ? undefined : var_core_value_sig6CAD.map(var_core_value_sigC259 => {
      var var_core_value_sig9C9F;
      return {
        ...var_core_value_sigC259,
        columns: (var_core_value_sig9C9F = var_core_value_sigC259.columns) == null ? undefined : var_core_value_sig9C9F.map(var_core_value_sig3EEE => C(var_core_value_sig3EEE))
      };
    }),
    blockRanges: (var_core_value_sig8CF5 = var_core_value_sigEAE5.blockRanges) == null ? undefined : var_core_value_sig8CF5.map(var_core_value_sigFDEA => ({
      ...var_core_value_sigFDEA
    })),
    customRanges: (var_core_value_sigDDD7 = var_core_value_sigEAE5.customRanges) == null ? undefined : var_core_value_sigDDD7.map(var_core_value_sig86D0 => ({
      ...var_core_value_sig86D0
    })),
    customDecorations: (var_core_value_sigB2CE = var_core_value_sigEAE5.customDecorations) == null ? undefined : var_core_value_sigB2CE.map(var_core_value_sig4CD2 => ({
      ...var_core_value_sig4CD2
    })),
    customBlocks: (var_core_value_sig443C = var_core_value_sigEAE5.customBlocks) == null ? undefined : var_core_value_sig443C.map(var_core_value_sig48CA => ({
      ...var_core_value_sig48CA
    }))
  };
}
function C(var_core_value_sig39B1) {
  return Array.isArray(var_core_value_sig39B1) ? var_core_value_sig39B1.map(var_core_value_sig50AF => C(var_core_value_sig50AF)) : !var_core_value_sig39B1 || typeof var_core_value_sig39B1 != "object" ? var_core_value_sig39B1 : Object.fromEntries(Object.entries(var_core_value_sig39B1).map(([var_core_value_sigA942, var_core_value_sigA621]) => [var_core_value_sigA942, C(var_core_value_sigA621)]));
}
function w(var_core_value_sig210D) {
  if (!var_core_value_sig210D.body) throw Error("Document body is required");
  return var_core_value_sig210D.body;
}
function pe(var_core_value_sigB4B4, var_core_value_sigD407, var_core_value_sig63F3, var_core_value_sig6A71 = "convert-paragraph") {
  if (var_core_value_sigD407 == null || var_core_value_sig63F3 == null) {
    let var_core_value_sigBBFF = he(var_core_value_sigB4B4);
    return {
      startOffset: var_core_value_sigBBFF,
      endOffset: var_core_value_sigBBFF
    };
  }
  let var_core_value_sig3BF6 = Math.min(var_core_value_sigD407, var_core_value_sig63F3),
    var_core_value_sig38CE = Math.max(var_core_value_sigD407, var_core_value_sig63F3),
    var_core_value_sig62B7 = be(var_core_value_sigB4B4, var_core_value_sig3BF6, var_core_value_sig38CE);
  return var_core_value_sig3BF6 === var_core_value_sig38CE ? var_core_value_sig6A71 === "insert-new" ? {
    startOffset: var_core_value_sig3BF6,
    endOffset: var_core_value_sig38CE
  } : me(var_core_value_sigB4B4, var_core_value_sig3BF6, var_core_value_sig62B7) : _e(var_core_value_sigB4B4, var_core_value_sig3BF6, var_core_value_sig38CE, var_core_value_sig62B7);
}
function me(var_core_value_sig37A8, var_core_value_sigA90D, var_core_value_sig7A3C) {
  let var_core_value_sig0511 = ve(var_core_value_sig37A8, var_core_value_sigA90D);
  if (var_core_value_sig0511) {
    let var_core_value_sig8889 = T(var_core_value_sig37A8, var_core_value_sig0511, var_core_value_sig7A3C);
    if (var_core_value_sig8889 < var_core_value_sig0511.startIndex) return {
      startOffset: var_core_value_sig8889,
      endOffset: var_core_value_sig7A3C ? Math.min(var_core_value_sig0511.startIndex + 1, var_core_value_sig7A3C.endOffset) : var_core_value_sig0511.startIndex + 1
    };
  }
  let var_core_value_sig1F44 = var_core_value_sigA90D === 0 && var_core_value_sig37A8.dataStream[0] === e.DataStreamTreeTokenType["PARAGRAPH"] ? 1 : var_core_value_sigA90D;
  return {
    startOffset: var_core_value_sig1F44,
    endOffset: var_core_value_sig1F44
  };
}
function he(var_core_value_sigCB04) {
  let var_core_value_sig947E = var_core_value_sigCB04.dataStream;
  return var_core_value_sig947E.endsWith(e.DataStreamTreeTokenType["SECTION_BREAK"]) ? Math.max(0, var_core_value_sig947E.length - 1) : var_core_value_sig947E.length;
}
function ge(var_core_value_sig4545, var_core_value_sigF39A, var_core_value_sigF79C) {
  var var_core_value_sig2E54;
  let var_core_value_sig7658 = Math.min(var_core_value_sigF39A, var_core_value_sigF79C),
    var_core_value_sigDCF5 = Math.max(var_core_value_sigF39A, var_core_value_sigF79C);
  return !!((var_core_value_sig2E54 = var_core_value_sig4545.tables) != null && var_core_value_sig2E54.some(var_core_value_sig32F8 => var_core_value_sig7658 > var_core_value_sig32F8.startIndex && var_core_value_sig7658 < var_core_value_sig32F8.endIndex || var_core_value_sigDCF5 > var_core_value_sig32F8.startIndex && var_core_value_sigDCF5 < var_core_value_sig32F8.endIndex || var_core_value_sig7658 <= var_core_value_sig32F8.startIndex && var_core_value_sigDCF5 >= var_core_value_sig32F8.endIndex));
}
function _e(var_core_value_sigC786, var_core_value_sigC0D9, var_core_value_sigF0511, var_core_value_sig5825) {
  let var_core_value_sig4EB7 = [...(var_core_value_sigC786.paragraphs ?? [])].sort((var_core_value_sig5B67, var_core_value_sig1758) => var_core_value_sig5B67.startIndex - var_core_value_sig1758.startIndex),
    var_core_value_sig73AF = (0, e.getParagraphContentStartOffsets)(var_core_value_sigC786),
    var_core_value_sig548A = var_core_value_sig4EB7.find(var_core_value_sig4805 => T(var_core_value_sigC786, var_core_value_sig4805, var_core_value_sig5825, var_core_value_sig73AF) <= var_core_value_sigC0D9 && var_core_value_sigC0D9 <= var_core_value_sig4805.startIndex),
    var_core_value_sigE026 = var_core_value_sig4EB7.find(var_core_value_sigE67E => var_core_value_sigE67E.startIndex >= var_core_value_sigF0511 - 1) ?? var_core_value_sig4EB7[var_core_value_sig4EB7.length - 1];
  return {
    startOffset: var_core_value_sig548A ? T(var_core_value_sigC786, var_core_value_sig548A, var_core_value_sig5825, var_core_value_sig73AF) : var_core_value_sigC0D9,
    endOffset: var_core_value_sigE026 ? ye(var_core_value_sigE026, var_core_value_sig5825) : var_core_value_sigF0511
  };
}
function ve(var_core_value_sig339E, var_core_value_sig7550) {
  let var_core_value_sig2983 = [...(var_core_value_sig339E.paragraphs ?? [])].sort((var_core_value_sig2902, var_core_value_sig9989) => var_core_value_sig2902.startIndex - var_core_value_sig9989.startIndex),
    var_core_value_sigE1B0 = (0, e.getParagraphContentStartOffsets)(var_core_value_sig339E);
  return var_core_value_sig2983.find(var_core_value_sig698E => (var_core_value_sigE1B0.get(var_core_value_sig698E.startIndex) ?? 0) <= var_core_value_sig7550 && var_core_value_sig7550 <= var_core_value_sig698E.startIndex);
}
function T(var_core_value_sigD4FF, var_core_value_sig1E5B, var_core_value_sigB680, var_core_value_sig1F64) {
  let var_core_value_sigDD1C = (var_core_value_sig1F64 == null ? undefined : var_core_value_sig1F64.get(var_core_value_sig1E5B.startIndex)) ?? (0, e.getParagraphContentStartOffset)(var_core_value_sigD4FF, var_core_value_sig1E5B);
  return var_core_value_sigB680 ? Math.max(var_core_value_sigDD1C, var_core_value_sigB680.startOffset) : var_core_value_sigDD1C;
}
function ye(var_core_value_sig2C39, var_core_value_sigB7D1) {
  let var_core_value_sig64F0 = var_core_value_sig2C39.startIndex + 1;
  return var_core_value_sigB7D1 ? Math.min(var_core_value_sig64F0, var_core_value_sigB7D1.endOffset) : var_core_value_sig64F0;
}
function be(var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162) {
  let var_core_value_sig2EAD = E(var_core_value_sig85B1, var_core_value_sig3141),
    var_core_value_sig6774 = E(var_core_value_sig85B1, var_core_value_sig3141 === var_core_value_sig2162 ? var_core_value_sig2162 : Math.max(var_core_value_sig3141, var_core_value_sig2162 - 1));
  if (!(!var_core_value_sig2EAD && !var_core_value_sig6774)) {
    if (!var_core_value_sig2EAD || !var_core_value_sig6774 || var_core_value_sig2EAD.startTokenOffset !== var_core_value_sig6774.startTokenOffset || var_core_value_sig2EAD.endTokenOffset !== var_core_value_sig6774.endTokenOffset) throw new _();
    return var_core_value_sig2EAD;
  }
}
function E(var_core_value_sig340D, var_core_value_sig82D4) {
  let var_core_value_sigBDE4 = var_core_value_sig340D.dataStream,
    var_core_value_sig7DF1 = -1;
  for (let var_core_value_sig2809 = Math.min(var_core_value_sig82D4, var_core_value_sigBDE4.length - 1); var_core_value_sig2809 >= 0; var_core_value_sig2809--) {
    let var_core_value_sigBC46 = var_core_value_sigBDE4[var_core_value_sig2809];
    if (var_core_value_sigBC46 === e.DataStreamTreeTokenType["TABLE_CELL_END"]) return;
    if (var_core_value_sigBC46 === e.DataStreamTreeTokenType["TABLE_CELL_START"]) {
      var_core_value_sig7DF1 = var_core_value_sig2809;
      break;
    }
  }
  if (var_core_value_sig7DF1 < 0) return;
  let var_core_value_sigDC86 = var_core_value_sigBDE4.indexOf(e.DataStreamTreeTokenType["TABLE_CELL_END"], var_core_value_sig7DF1 + 1);
  if (!(var_core_value_sigDC86 < 0 || var_core_value_sig82D4 < var_core_value_sig7DF1 + 1 || var_core_value_sig82D4 > var_core_value_sigDC86 - 1)) return {
    startOffset: var_core_value_sig7DF1 + 1,
    endOffset: Math.max(var_core_value_sig7DF1 + 1, var_core_value_sigDC86 - 1),
    startTokenOffset: var_core_value_sig7DF1,
    endTokenOffset: var_core_value_sigDC86
  };
}
function D(var_core_value_sig0B0C) {
  return (0, e.getBlockRangeInterval)(var_core_value_sig0B0C).endOffset - 1;
}
function xe(var_core_value_sigA39E, var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167) {
  let var_core_value_sig65A1 = D(var_core_value_sigBBEE),
    var_core_value_sig7F19 = (var_core_value_sigA39E.paragraphs ?? []).find(var_core_value_sig2DAB => var_core_value_sig2DAB.startIndex === var_core_value_sig65A1 + 1);
  if (!var_core_value_sig7F19 || var_core_value_sig6167 != null && var_core_value_sig7F19.startIndex !== var_core_value_sig6167 || var_core_value_sig011D < var_core_value_sig65A1 || var_core_value_sig011D > var_core_value_sig7F19.startIndex + 1 || var_core_value_sigA39E.dataStream[var_core_value_sig7F19.startIndex] !== e.DataStreamTreeTokenType["PARAGRAPH"]) return null;
  let var_core_value_sig7827 = (0, e.getParagraphContentStartOffset)(var_core_value_sigA39E, var_core_value_sig7F19),
    var_core_value_sig652C = var_core_value_sigA39E.dataStream["slice"](var_core_value_sig7827, var_core_value_sig7F19.startIndex);
  return Array.from(var_core_value_sig652C).every(var_core_value_sig877E => var_core_value_sig877E === e.DataStreamTreeTokenType["BLOCK_END"]) ? {
    paragraph: var_core_value_sig7F19,
    endTokenOffset: var_core_value_sig65A1
  } : null;
}
function O(var_core_value_sig7E32, var_core_value_sig4C07) {
  var var_core_value_sig79AB;
  let var_core_value_sig8E74 = D(var_core_value_sig4C07),
    var_core_value_sig104C = var_core_value_sig7E32.dataStream[var_core_value_sig8E74 + 1];
  (var_core_value_sig104C === e.DataStreamTreeTokenType["SECTION_BREAK"] || var_core_value_sig104C === undefined) && k(var_core_value_sig7E32, var_core_value_sig8E74 + 1, e.DataStreamTreeTokenType["PARAGRAPH"], {
    paragraphs: [{
      startIndex: 0,
      paragraphId: (0, e.createParagraphId)(new Set((var_core_value_sig79AB = var_core_value_sig7E32.paragraphs) == null ? undefined : var_core_value_sig79AB.map(var_core_value_sig20C8 => var_core_value_sig20C8.paragraphId)))
    }]
  });
}
function k(var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5, var_core_value_sigACC6 = {}) {
  var var_core_value_sig1614, var_core_value_sig85C3;
  var_core_value_sigBDF5 && (var_core_value_sig841D.dataStream = "" + var_core_value_sig841D.dataStream["slice"](0, var_core_value_sig90CB) + var_core_value_sigBDF5 + var_core_value_sig841D.dataStream["slice"](var_core_value_sig90CB), Se(var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5.length), (var_core_value_sig1614 = var_core_value_sigACC6.paragraphs) != null && var_core_value_sig1614.length && (var_core_value_sig841D.paragraphs = [...(var_core_value_sig841D.paragraphs ?? []), ...var_core_value_sigACC6.paragraphs["map"](var_core_value_sigE9A7 => ({
    ...var_core_value_sigE9A7,
    startIndex: var_core_value_sigE9A7.startIndex + var_core_value_sig90CB
  }))].sort((var_core_value_sigBECE, var_core_value_sig1B22) => var_core_value_sigBECE.startIndex - var_core_value_sig1B22.startIndex)), (var_core_value_sig85C3 = var_core_value_sigACC6.blockRanges) != null && var_core_value_sig85C3.length && (var_core_value_sig841D.blockRanges = [...(var_core_value_sig841D.blockRanges ?? []), ...var_core_value_sigACC6.blockRanges["map"](var_core_value_sig7F72 => ({
    ...var_core_value_sig7F72,
    startIndex: var_core_value_sig7F72.startIndex + var_core_value_sig90CB,
    endIndex: var_core_value_sig7F72.endIndex + var_core_value_sig90CB
  }))].sort((var_core_value_sig7B2A, var_core_value_sig06CD) => var_core_value_sig7B2A.startIndex - var_core_value_sig06CD.startIndex)));
}
function A(var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sig6201) {
  let var_core_value_sig5151 = var_core_value_sig6201 - var_core_value_sig4BBA;
  var_core_value_sigB996.dataStream = "" + var_core_value_sigB996.dataStream["slice"](0, var_core_value_sig4BBA) + var_core_value_sigB996.dataStream["slice"](var_core_value_sig6201), Ce(var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sig5151);
}
function Se(var_core_value_sigB542, var_core_value_sigBB6C, var_core_value_sigE2BF) {
  var_core_value_sigB542.paragraphs = j(var_core_value_sigB542.paragraphs, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.sectionBreaks = j(var_core_value_sigB542.sectionBreaks, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.customBlocks = j(var_core_value_sigB542.customBlocks, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.textRuns = we(var_core_value_sigB542.textRuns, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.tables = Te(var_core_value_sigB542.tables, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.columnGroups = N(var_core_value_sigB542.columnGroups, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.customRanges = N(var_core_value_sigB542.customRanges, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.customDecorations = N(var_core_value_sigB542.customDecorations, var_core_value_sigBB6C, var_core_value_sigE2BF), var_core_value_sigB542.blockRanges = N(var_core_value_sigB542.blockRanges, var_core_value_sigBB6C, var_core_value_sigE2BF);
}
function Ce(var_core_value_sigB8C7, var_core_value_sigA56E, var_core_value_sig1998) {
  var var_core_value_sigFF19, var_core_value_sig43B8;
  var_core_value_sigB8C7.paragraphs = M(var_core_value_sigB8C7.paragraphs, var_core_value_sigA56E, var_core_value_sig1998), var_core_value_sigB8C7.sectionBreaks = M(var_core_value_sigB8C7.sectionBreaks, var_core_value_sigA56E, var_core_value_sig1998), var_core_value_sigB8C7.customBlocks = M(var_core_value_sigB8C7.customBlocks, var_core_value_sigA56E, var_core_value_sig1998), var_core_value_sigB8C7.textRuns = (var_core_value_sigFF19 = F((var_core_value_sig43B8 = var_core_value_sigB8C7.textRuns) == null ? undefined : var_core_value_sig43B8.map(var_core_value_sigA5F1 => ({
    ...var_core_value_sigA5F1,
    startIndex: var_core_value_sigA5F1.st,
    endIndex: var_core_value_sigA5F1.ed
  })), var_core_value_sigA56E, var_core_value_sig1998)) == null ? undefined : var_core_value_sigFF19.map(var_core_value_sig97A2 => {
    let {
      startIndex: var_core_value_sig07E9,
      endIndex: var_core_value_sig4F59,
      ...var_core_value_sigF564
    } = var_core_value_sig97A2;
    return {
      ...var_core_value_sigF564,
      st: var_core_value_sig07E9,
      ed: var_core_value_sig4F59
    };
  }), var_core_value_sigB8C7.tables = F(var_core_value_sigB8C7.tables, var_core_value_sigA56E, var_core_value_sig1998), var_core_value_sigB8C7.columnGroups = P(var_core_value_sigB8C7.columnGroups, var_core_value_sigA56E, var_core_value_sig1998), var_core_value_sigB8C7.customRanges = P(var_core_value_sigB8C7.customRanges, var_core_value_sigA56E, var_core_value_sig1998), var_core_value_sigB8C7.customDecorations = P(var_core_value_sigB8C7.customDecorations, var_core_value_sigA56E, var_core_value_sig1998), var_core_value_sigB8C7.blockRanges = P(var_core_value_sigB8C7.blockRanges, var_core_value_sigA56E, var_core_value_sig1998);
}
function j(var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig9D15) {
  return var_core_value_sigD98F == null ? undefined : var_core_value_sigD98F.map(var_core_value_sig8CFA => var_core_value_sig8CFA.startIndex >= var_core_value_sig66C0 ? {
    ...var_core_value_sig8CFA,
    startIndex: var_core_value_sig8CFA.startIndex + var_core_value_sig9D15
  } : var_core_value_sig8CFA);
}
function M(var_core_value_sigB785, var_core_value_sig130F, var_core_value_sigC0E3) {
  let var_core_value_sig52F7 = var_core_value_sig130F + var_core_value_sigC0E3;
  return var_core_value_sigB785 == null ? undefined : var_core_value_sigB785.map(var_core_value_sig2E11 => var_core_value_sig2E11.startIndex >= var_core_value_sig130F && var_core_value_sig2E11.startIndex < var_core_value_sig52F7 ? null : var_core_value_sig2E11.startIndex >= var_core_value_sig52F7 ? {
    ...var_core_value_sig2E11,
    startIndex: var_core_value_sig2E11.startIndex - var_core_value_sigC0E3
  } : var_core_value_sig2E11).filter(var_core_value_sig5B69 => var_core_value_sig5B69 != null);
}
function we(var_core_value_sig866F, var_core_value_sigDE3D, var_core_value_sigF175) {
  return var_core_value_sig866F == null ? undefined : var_core_value_sig866F.map(var_core_value_sigB098 => var_core_value_sigB098.st >= var_core_value_sigDE3D ? {
    ...var_core_value_sigB098,
    st: var_core_value_sigB098.st + var_core_value_sigF175,
    ed: var_core_value_sigB098.ed + var_core_value_sigF175
  } : var_core_value_sigB098.ed > var_core_value_sigDE3D ? {
    ...var_core_value_sigB098,
    ed: var_core_value_sigB098.ed + var_core_value_sigF175
  } : var_core_value_sigB098);
}
function N(var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0) {
  return var_core_value_sig6A18 == null ? undefined : var_core_value_sig6A18.map(var_core_value_sigCE71 => (0, e.shiftInclusiveRangeOnInsert)(var_core_value_sigCE71, var_core_value_sig4E3D, var_core_value_sig49B0));
}
function Te(var_core_value_sig2547, var_core_value_sigBCA9, var_core_value_sig4CDF) {
  return var_core_value_sig2547 == null ? undefined : var_core_value_sig2547.map(var_core_value_sig21D8 => (0, e.shiftExclusiveRangeOnInsert)(var_core_value_sig21D8, var_core_value_sigBCA9, var_core_value_sig4CDF));
}
function P(var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sigC9ED) {
  return var_core_value_sig3F79 == null ? undefined : var_core_value_sig3F79.map(var_core_value_sig2B65 => (0, e.shiftInclusiveRangeOnDelete)(var_core_value_sig2B65, var_core_value_sig880E, var_core_value_sigC9ED)).filter(var_core_value_sigD7EA => var_core_value_sigD7EA != null);
}
function F(var_core_value_sigB57B, var_core_value_sig780B, var_core_value_sig7D1B) {
  return var_core_value_sigB57B == null ? undefined : var_core_value_sigB57B.map(var_core_value_sigB33B => (0, e.shiftExclusiveRangeOnDelete)(var_core_value_sigB33B, var_core_value_sig780B, var_core_value_sig7D1B)).filter(var_core_value_sig24B9 => var_core_value_sig24B9 != null);
}
const I = {
    id: "docs-callout.command.insert-below",
    type: e.CommandType["COMMAND"],
    handler: var_core_value_sig7BE0 => {
      var var_core_value_sig7D40;
      if ((0, n.isHeaderFooterSelection)(K(var_core_value_sig7BE0))) return false;
      let var_core_value_sig6C7E = (0, n.getContentInsertRange)(var_core_value_sig7BE0);
      if (var_core_value_sig6C7E) return var_core_value_sig7BE0.get(e.ICommandService).syncExecuteCommand(R.id, {
        startOffset: var_core_value_sig6C7E.startOffset,
        endOffset: var_core_value_sig6C7E.endOffset,
        insertionMode: "insert-new",
        unitId: var_core_value_sig6C7E.unitId
      });
      let var_core_value_sig68BE = De(var_core_value_sig7BE0);
      if (!var_core_value_sig68BE) return false;
      let var_core_value_sig04C6 = (var_core_value_sig7D40 = var_core_value_sig7BE0.get(e.IUniverInstanceService).getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"])) == null ? undefined : var_core_value_sig7D40.getBody(),
        var_core_value_sigCA05 = var_core_value_sig04C6 ? (0, e.getParagraphFollowingBlockOffset)(var_core_value_sig04C6, var_core_value_sig68BE) : var_core_value_sig68BE.startIndex + 1;
      return var_core_value_sig7BE0.get(e.ICommandService).syncExecuteCommand(R.id, {
        startOffset: var_core_value_sigCA05,
        endOffset: var_core_value_sigCA05
      });
    }
  },
  L = {
    id: "docs-callout.command.consume-boundary-delete",
    type: e.CommandType["COMMAND"],
    handler: () => true
  },
  R = {
    id: "docs-callout.command.insert",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig2F2B, var_core_value_sig70AF) => {
      let var_core_value_sigD04E = G(var_core_value_sig2F2B, var_core_value_sig70AF == null ? undefined : var_core_value_sig70AF.unitId);
      if (!var_core_value_sigD04E) return false;
      let var_core_value_sigB99B = K(var_core_value_sig2F2B);
      if ((0, n.isHeaderFooterSelection)(var_core_value_sigB99B)) return false;
      let var_core_value_sig5A75 = var_core_value_sigD04E.model["serialize"](var_core_value_sigD04E.unitId),
        var_core_value_sig7BAF = Ee(var_core_value_sig70AF, var_core_value_sigB99B),
        var_core_value_sig8F69 = je(var_core_value_sigD04E.previousDocumentData, var_core_value_sig7BAF);
      if (var_core_value_sig8F69) {
        if (var_core_value_sig8F69.blockType !== e.DocumentBlockRangeType["CALLOUT"]) return false;
        let var_core_value_sigE627 = b({
          blockId: var_core_value_sig8F69.blockId,
          documentData: var_core_value_sigD04E.previousDocumentData,
          metadata: var_core_value_sig5A75
        });
        if (!var_core_value_sigE627) return false;
        let var_core_value_sigEF3E = Y(var_core_value_sigD04E.commandService, var_core_value_sigD04E.unitId, var_core_value_sigD04E.previousDocumentData, var_core_value_sigE627.nextDocumentData, R.id, var_core_value_sigE627.cursorOffset);
        return var_core_value_sigEF3E && var_core_value_sigD04E.model["deserialize"](var_core_value_sigD04E.unitId, var_core_value_sigE627.nextMetadata), var_core_value_sigEF3E;
      }
      let var_core_value_sig6884 = (var_core_value_sig70AF == null ? undefined : var_core_value_sig70AF.blockId) ?? (0, e.generateRandomId)(6),
        var_core_value_sig066E;
      try {
        var_core_value_sig066E = ne({
          blockId: var_core_value_sig6884,
          config: var_core_value_sig70AF == null ? undefined : var_core_value_sig70AF.config,
          documentData: var_core_value_sigD04E.previousDocumentData,
          endOffset: var_core_value_sig7BAF == null ? undefined : var_core_value_sig7BAF.endOffset,
          insertionMode: var_core_value_sig70AF == null ? undefined : var_core_value_sig70AF.insertionMode,
          metadata: var_core_value_sig5A75,
          startOffset: var_core_value_sig7BAF == null ? undefined : var_core_value_sig7BAF.startOffset
        });
      } catch (var_core_value_sig273D) {
        if (var_core_value_sig273D instanceof _) return false;
        throw var_core_value_sig273D;
      }
      let var_core_value_sig9B0D = Y(var_core_value_sigD04E.commandService, var_core_value_sigD04E.unitId, var_core_value_sigD04E.previousDocumentData, var_core_value_sig066E.nextDocumentData, R.id, var_core_value_sig066E.cursorOffset);
      return var_core_value_sig9B0D && var_core_value_sigD04E.model["deserialize"](var_core_value_sigD04E.unitId, var_core_value_sig066E.nextMetadata), var_core_value_sig9B0D;
    }
  },
  z = {
    id: "docs-callout.command.update",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig3D2C, var_core_value_sigC56D) => {
      if (!var_core_value_sigC56D) return false;
      let var_core_value_sig3A17 = G(var_core_value_sig3D2C, var_core_value_sigC56D.unitId);
      if (!var_core_value_sig3A17) return false;
      let var_core_value_sig938F = var_core_value_sig3A17.model["getCalloutConfig"](var_core_value_sig3A17.unitId, var_core_value_sigC56D.blockId);
      if (!var_core_value_sig938F || !ke(var_core_value_sig3A17.previousDocumentData, var_core_value_sigC56D.blockId)) return false;
      let var_core_value_sigD948 = o({
          ...var_core_value_sig938F,
          ...var_core_value_sigC56D.config
        }),
        var_core_value_sigBE5E = {
          blockId: var_core_value_sigC56D.blockId,
          config: var_core_value_sigD948,
          unitId: var_core_value_sig3A17.unitId
        },
        var_core_value_sig0281 = {
          blockId: var_core_value_sigC56D.blockId,
          config: var_core_value_sig938F,
          unitId: var_core_value_sig3A17.unitId
        };
      return var_core_value_sig3A17.commandService["syncExecuteCommand"](h.id, var_core_value_sigBE5E) ? (var_core_value_sig3D2C.get(e.IUndoRedoService).pushUndoRedo({
        unitID: var_core_value_sig3A17.unitId,
        redoMutations: [{
          id: h.id,
          params: var_core_value_sigBE5E
        }],
        undoMutations: [{
          id: h.id,
          params: var_core_value_sig0281
        }]
      }), true) : false;
    }
  },
  B = {
    id: "docs-callout.command.set-text-color",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigED71, var_core_value_sig281C) => {
      if (!var_core_value_sig281C) return false;
      let var_core_value_sig3C92 = G(var_core_value_sigED71, var_core_value_sig281C.unitId);
      if (!var_core_value_sig3C92) return false;
      let var_core_value_sigB16B = Ae(var_core_value_sig3C92.previousDocumentData, var_core_value_sig281C.blockId, var_core_value_sig281C.value);
      return var_core_value_sigB16B ? !!var_core_value_sig3C92.commandService["syncExecuteCommand"](n.RichTextEditingMutation["id"], {
        unitId: var_core_value_sig3C92.unitId,
        actions: var_core_value_sigB16B,
        textRanges: null,
        noNeedSetTextRange: true,
        isEditing: false,
        trigger: B.id
      }) : false;
    }
  },
  V = {
    id: "docs-callout.command.reset-colors",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig585D, var_core_value_sigE722) => {
      if (!var_core_value_sigE722) return false;
      let var_core_value_sig062A = G(var_core_value_sig585D, var_core_value_sigE722.unitId);
      if (!var_core_value_sig062A) return false;
      let var_core_value_sig050A = var_core_value_sig062A.model["getCalloutConfig"](var_core_value_sig062A.unitId, var_core_value_sigE722.blockId);
      if (!var_core_value_sig050A || !ke(var_core_value_sig062A.previousDocumentData, var_core_value_sigE722.blockId)) return false;
      let var_core_value_sig8B32 = o({
        ...var_core_value_sig050A,
        backgroundColor: "",
        borderColor: "",
        borderOpacity: i.borderOpacity,
        borderStyle: i.borderStyle,
        borderWidth: i.borderWidth
      });
      return ze(var_core_value_sig585D, var_core_value_sig062A.commandService, var_core_value_sig062A.unitId, var_core_value_sigE722.blockId, var_core_value_sig050A, var_core_value_sig8B32, Ae(var_core_value_sig062A.previousDocumentData, var_core_value_sigE722.blockId, null));
    }
  },
  H = {
    id: "docs-callout.command.delete",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig870F, var_core_value_sigB683) => {
      let var_core_value_sig26EC = G(var_core_value_sig870F, var_core_value_sigB683 == null ? undefined : var_core_value_sigB683.unitId);
      if (!var_core_value_sig26EC) return false;
      let var_core_value_sigEEDB = (var_core_value_sigB683 == null ? undefined : var_core_value_sigB683.blockId) ?? Oe(var_core_value_sig26EC.previousDocumentData, K(var_core_value_sig870F));
      if (!var_core_value_sigEEDB) return false;
      let var_core_value_sig36E7 = se({
          blockId: var_core_value_sigEEDB,
          documentData: var_core_value_sig26EC.previousDocumentData,
          metadata: var_core_value_sig26EC.model["serialize"](var_core_value_sig26EC.unitId)
        }),
        var_core_value_sig6A78 = Y(var_core_value_sig26EC.commandService, var_core_value_sig26EC.unitId, var_core_value_sig26EC.previousDocumentData, var_core_value_sig36E7.nextDocumentData, H.id, var_core_value_sig36E7.cursorOffset);
      return var_core_value_sig6A78 && var_core_value_sig26EC.model["deserialize"](var_core_value_sig26EC.unitId, var_core_value_sig36E7.nextMetadata), var_core_value_sig6A78;
    }
  },
  U = {
    id: "docs-callout.command.unwrap",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigF7EF, var_core_value_sig27F9) => {
      if (!var_core_value_sig27F9) return false;
      let var_core_value_sig393E = G(var_core_value_sigF7EF, var_core_value_sig27F9.unitId);
      if (!var_core_value_sig393E) return false;
      let var_core_value_sigB609 = b({
        blockId: var_core_value_sig27F9.blockId,
        documentData: var_core_value_sig393E.previousDocumentData,
        metadata: var_core_value_sig393E.model["serialize"](var_core_value_sig393E.unitId)
      });
      if (!var_core_value_sigB609) return false;
      let var_core_value_sig390D = var_core_value_sig393E.model["getCalloutConfig"](var_core_value_sig393E.unitId, var_core_value_sig27F9.blockId);
      return var_core_value_sig390D ? Be(var_core_value_sigF7EF, var_core_value_sig393E.commandService, var_core_value_sig393E.unitId, var_core_value_sig27F9.blockId, var_core_value_sig390D, var_core_value_sig393E.previousDocumentData, var_core_value_sigB609.nextDocumentData, var_core_value_sigB609.cursorOffset) : Y(var_core_value_sig393E.commandService, var_core_value_sig393E.unitId, var_core_value_sig393E.previousDocumentData, var_core_value_sigB609.nextDocumentData, U.id, var_core_value_sigB609.cursorOffset);
    }
  },
  W = {
    id: "docs-callout.command.cancel-empty-paragraph",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigC928, var_core_value_sig39B7) => {
      if (!var_core_value_sig39B7) return false;
      let var_core_value_sig18E0 = G(var_core_value_sigC928, var_core_value_sig39B7.unitId);
      if (!var_core_value_sig18E0) return false;
      let var_core_value_sigE161 = x({
        cursorOffset: var_core_value_sig39B7.cursorOffset,
        documentData: var_core_value_sig18E0.previousDocumentData,
        metadata: var_core_value_sig18E0.model["serialize"](var_core_value_sig18E0.unitId),
        paragraphStartIndex: var_core_value_sig39B7.paragraphStartIndex
      });
      if (!var_core_value_sigE161) return false;
      let var_core_value_sigBDEE = Y(var_core_value_sig18E0.commandService, var_core_value_sig18E0.unitId, var_core_value_sig18E0.previousDocumentData, var_core_value_sigE161.nextDocumentData, W.id, var_core_value_sigE161.cursorOffset);
      return var_core_value_sigBDEE && var_core_value_sig18E0.model["deserialize"](var_core_value_sig18E0.unitId, var_core_value_sigE161.nextMetadata), var_core_value_sigBDEE;
    }
  };
function G(var_core_value_sig1F40, var_core_value_sig3FC7) {
  let var_core_value_sig1E1B = var_core_value_sig1F40.get(e.IUniverInstanceService),
    var_core_value_sig3B10 = var_core_value_sig3FC7 ? var_core_value_sig1E1B.getUnit(var_core_value_sig3FC7, e.UniverInstanceType["UNIVER_DOC"]) : var_core_value_sig1E1B.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]);
  return var_core_value_sig3B10 ? {
    commandService: var_core_value_sig1F40.get(e.ICommandService),
    model: var_core_value_sig1F40.get(m),
    previousDocumentData: var_core_value_sig3B10.getSnapshot(),
    unitId: var_core_value_sig3B10.getUnitId()
  } : null;
}
function K(var_core_value_sig89E6) {
  var var_core_value_sig4743;
  return (var_core_value_sig4743 = var_core_value_sig89E6.get(n.DocSelectionManagerService).getTextRanges()) == null ? undefined : var_core_value_sig4743[0];
}
function Ee(var_core_value_sigEB6A, var_core_value_sig3D46) {
  let var_core_value_sigCC93 = (var_core_value_sigEB6A == null ? undefined : var_core_value_sigEB6A.startOffset) ?? (var_core_value_sig3D46 == null ? undefined : var_core_value_sig3D46.startOffset),
    var_core_value_sig5964 = (var_core_value_sigEB6A == null ? undefined : var_core_value_sigEB6A.endOffset) ?? (var_core_value_sig3D46 == null ? undefined : var_core_value_sig3D46.endOffset);
  if (var_core_value_sigCC93 != null && var_core_value_sig5964 != null) return {
    endOffset: Math.max(var_core_value_sigCC93, var_core_value_sig5964),
    startOffset: Math.min(var_core_value_sigCC93, var_core_value_sig5964)
  };
}
function De(var_core_value_sig808B) {
  let var_core_value_sig2A26 = K(var_core_value_sig808B);
  if (!var_core_value_sig2A26) return null;
  let var_core_value_sig1179 = var_core_value_sig808B.get(e.IUniverInstanceService).getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
    var_core_value_sigEA92 = var_core_value_sig1179 == null ? undefined : var_core_value_sig1179.getBody();
  return var_core_value_sigEA92 ? e.BuildTextUtils["range"].getParagraphsInRange(var_core_value_sig2A26, var_core_value_sigEA92.paragraphs ?? [], var_core_value_sigEA92.dataStream ?? "")[0] ?? null : null;
}
function Oe(var_core_value_sig8FD9, var_core_value_sig1AE5) {
  var var_core_value_sig7100;
  if (var_core_value_sig1AE5) return (var_core_value_sig7100 = le(var_core_value_sig8FD9.body, var_core_value_sig1AE5.startOffset)) == null ? undefined : var_core_value_sig7100.blockId;
}
function ke(var_core_value_sigA19A, var_core_value_sigD3F5) {
  var var_core_value_sig3082;
  return ((var_core_value_sig3082 = var_core_value_sigA19A.body) == null || (var_core_value_sig3082 = var_core_value_sig3082.blockRanges) == null ? undefined : var_core_value_sig3082.some(var_core_value_sig9A0D => var_core_value_sig9A0D.blockId === var_core_value_sigD3F5 && var_core_value_sig9A0D.blockType === e.DocumentBlockRangeType["CALLOUT"])) ?? false;
}
function Ae(var_core_value_sigF5D1, var_core_value_sig8775, var_core_value_sig481B) {
  var var_core_value_sig13D7, var_core_value_sig90C0;
  let var_core_value_sigF1B2 = (var_core_value_sig13D7 = var_core_value_sigF5D1.body) == null || (var_core_value_sig13D7 = var_core_value_sig13D7.blockRanges) == null ? undefined : var_core_value_sig13D7.find(var_core_value_sigA319 => var_core_value_sigA319.blockId === var_core_value_sig8775 && var_core_value_sigA319.blockType === e.DocumentBlockRangeType["CALLOUT"]);
  if (!var_core_value_sigF1B2) return null;
  let var_core_value_sigC2BB = var_core_value_sigF1B2.startIndex + 1,
    var_core_value_sigD9DB = var_core_value_sigF1B2.endIndex;
  if (var_core_value_sigD9DB <= var_core_value_sigC2BB) return null;
  let var_core_value_sigA363 = new e["TextX"]();
  var_core_value_sigA363.push({
    t: e.TextXActionType["RETAIN"],
    len: var_core_value_sigC2BB
  }), var_core_value_sigA363.push({
    t: e.TextXActionType["RETAIN"],
    len: var_core_value_sigD9DB - var_core_value_sigC2BB,
    body: {
      dataStream: "",
      textRuns: [{
        st: 0,
        ed: var_core_value_sigD9DB - var_core_value_sigC2BB,
        ts: {
          cl: {
            rgb: var_core_value_sig481B
          }
        }
      }]
    }
  });
  let var_core_value_sigFBA5 = e.JSONX["getInstance"](),
    var_core_value_sigAC47 = var_core_value_sigFBA5.editOp(var_core_value_sigA363.serialize(), ["body"]);
  return ((var_core_value_sig90C0 = var_core_value_sigF5D1.body) == null ? undefined : var_core_value_sig90C0.textRuns) == null ? var_core_value_sig481B == null ? null : var_core_value_sigFBA5.insertOp(["body", "textRuns"], [{
    st: var_core_value_sigC2BB,
    ed: var_core_value_sigD9DB,
    ts: {
      cl: {
        rgb: var_core_value_sig481B
      }
    }
  }]) : var_core_value_sigAC47;
}
function je(var_core_value_sigA06F, var_core_value_sig770E) {
  var var_core_value_sig4654;
  if (!var_core_value_sig770E) return;
  let var_core_value_sigB26B = Me(var_core_value_sig770E);
  return (var_core_value_sig4654 = var_core_value_sigA06F.body) == null || (var_core_value_sig4654 = var_core_value_sig4654.blockRanges) == null ? undefined : var_core_value_sig4654.find(var_core_value_sig2D58 => {
    let var_core_value_sig223F = (0, e.getBlockRangeInterval)(var_core_value_sig2D58);
    return var_core_value_sig770E.startOffset === var_core_value_sig770E.endOffset ? (0, e.containsInteriorInsertionOffset)(var_core_value_sig223F, var_core_value_sigB26B) : (0, e.containsStreamIndex)(var_core_value_sig223F, var_core_value_sigB26B);
  });
}
function Me(var_core_value_sig019B) {
  return var_core_value_sig019B.startOffset === var_core_value_sig019B.endOffset ? var_core_value_sig019B.startOffset : var_core_value_sig019B.startOffset + 1;
}
function Ne(var_core_value_sigC6BC, var_core_value_sig8EC2) {
  let var_core_value_sigA8C3 = var_core_value_sigC6BC.body,
    var_core_value_sig5276 = var_core_value_sig8EC2.body,
    var_core_value_sig031B = (0, e.getSingleDataStreamChange)(var_core_value_sigA8C3, var_core_value_sig5276),
    var_core_value_sig9DC0 = [],
    var_core_value_sig95F0 = var_core_value_sig031B && var_core_value_sig5276 ? Pe(var_core_value_sig5276, var_core_value_sig031B) : null,
    var_core_value_sig9CCB = var_core_value_sig031B ? null : Fe(var_core_value_sigA8C3, var_core_value_sig5276);
  return var_core_value_sig95F0 && var_core_value_sig9DC0.push(var_core_value_sig95F0), var_core_value_sig9CCB && var_core_value_sig9DC0.push(var_core_value_sig9CCB), var_core_value_sig9DC0.reduce((var_core_value_sigD749, var_core_value_sigCFFA) => e.JSONX["compose"](var_core_value_sigD749, var_core_value_sigCFFA), null);
}
function Pe(var_core_value_sigE718, var_core_value_sigAEC8) {
  let var_core_value_sigB977 = new e.TextX();
  return var_core_value_sigB977.retain(var_core_value_sigAEC8.start), var_core_value_sigAEC8.insertLength > 0 && var_core_value_sigB977.insert(var_core_value_sigAEC8.insertLength, (0, e.getBodySliceForTextXAction)(var_core_value_sigE718, var_core_value_sigAEC8.start, var_core_value_sigAEC8.start + var_core_value_sigAEC8.insertLength, false)), var_core_value_sigAEC8.deleteLength > 0 && var_core_value_sigB977.delete(var_core_value_sigAEC8.deleteLength), e.JSONX["getInstance"]().editOp(var_core_value_sigB977.serialize(), ["body"]);
}
function Fe(var_core_value_sig2949, var_core_value_sig308A) {
  let var_core_value_sig528D = [];
  for (let var_core_value_sig58C1 of Ie) q(e.JSONX["getInstance"](), ["body", var_core_value_sig58C1], var_core_value_sig2949 == null ? undefined : var_core_value_sig2949[var_core_value_sig58C1], var_core_value_sig308A == null ? undefined : var_core_value_sig308A[var_core_value_sig58C1], var_core_value_sig528D);
  return var_core_value_sig528D.reduce((var_core_value_sig5090, var_core_value_sigC368) => e.JSONX["compose"](var_core_value_sig5090, var_core_value_sigC368), null);
}
const Ie = ["paragraphs", "sectionBreaks", "tables", "columnGroups", "blockRanges", "customBlocks", "customRanges", "customDecorations", "textRuns"];
function q(var_core_value_sigA309, var_core_value_sig9E20, var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sig218A) {
  if (!J(var_core_value_sig26BB, var_core_value_sig19B4)) {
    if (var_core_value_sig26BB == null) {
      var_core_value_sig218A.push(var_core_value_sigA309.insertOp(var_core_value_sig9E20, var_core_value_sig19B4));
      return;
    }
    if (var_core_value_sig19B4 == null) {
      var_core_value_sig218A.push(var_core_value_sigA309.removeOp(var_core_value_sig9E20, var_core_value_sig26BB));
      return;
    }
    if (Array.isArray(var_core_value_sig26BB) && Array.isArray(var_core_value_sig19B4)) {
      Le(var_core_value_sigA309, var_core_value_sig9E20, var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sig218A);
      return;
    }
    if (Re(var_core_value_sig26BB) && Re(var_core_value_sig19B4)) {
      new Set([...Object.keys(var_core_value_sig26BB), ...Object.keys(var_core_value_sig19B4)]).forEach(var_core_value_sig7524 => {
        q(var_core_value_sigA309, [...var_core_value_sig9E20, var_core_value_sig7524], var_core_value_sig26BB[var_core_value_sig7524], var_core_value_sig19B4[var_core_value_sig7524], var_core_value_sig218A);
      });
      return;
    }
    var_core_value_sig218A.push(var_core_value_sigA309.replaceOp(var_core_value_sig9E20, var_core_value_sig26BB, var_core_value_sig19B4));
  }
}
function Le(var_core_value_sig14CB, var_core_value_sigFDEE, var_core_value_sigA676, var_core_value_sigC27E, var_core_value_sigA70D) {
  if (var_core_value_sigA676.length === var_core_value_sigC27E.length) {
    var_core_value_sigA676.forEach((var_core_value_sig3D7D, var_core_value_sig27E5) => q(var_core_value_sig14CB, [...var_core_value_sigFDEE, var_core_value_sig27E5], var_core_value_sig3D7D, var_core_value_sigC27E[var_core_value_sig27E5], var_core_value_sigA70D));
    return;
  }
  let var_core_value_sigCE10 = 0;
  for (; var_core_value_sigCE10 < var_core_value_sigA676.length && var_core_value_sigCE10 < var_core_value_sigC27E.length && J(var_core_value_sigA676[var_core_value_sigCE10], var_core_value_sigC27E[var_core_value_sigCE10]);) var_core_value_sigCE10++;
  let var_core_value_sigA386 = var_core_value_sigA676.length - 1,
    var_core_value_sigCD82 = var_core_value_sigC27E.length - 1;
  for (; var_core_value_sigA386 >= var_core_value_sigCE10 && var_core_value_sigCD82 >= var_core_value_sigCE10 && J(var_core_value_sigA676[var_core_value_sigA386], var_core_value_sigC27E[var_core_value_sigCD82]);) var_core_value_sigA386--, var_core_value_sigCD82--;
  for (let var_core_value_sigAD56 = var_core_value_sigA386; var_core_value_sigAD56 >= var_core_value_sigCE10; var_core_value_sigAD56--) var_core_value_sigA70D.push(var_core_value_sig14CB.removeOp([...var_core_value_sigFDEE, var_core_value_sigAD56], var_core_value_sigA676[var_core_value_sigAD56]));
  for (let var_core_value_sigDB4A = var_core_value_sigCE10; var_core_value_sigDB4A <= var_core_value_sigCD82; var_core_value_sigDB4A++) var_core_value_sigA70D.push(var_core_value_sig14CB.insertOp([...var_core_value_sigFDEE, var_core_value_sigDB4A], var_core_value_sigC27E[var_core_value_sigDB4A]));
}
function Re(var_core_value_sig44DD) {
  return typeof var_core_value_sig44DD == "object" && !!var_core_value_sig44DD && !Array.isArray(var_core_value_sig44DD);
}
function J(var_core_value_sig96FA, var_core_value_sigAB68) {
  return JSON.stringify(var_core_value_sig96FA) === JSON.stringify(var_core_value_sigAB68);
}
function Y(var_core_value_sig040A, var_core_value_sig2AE0, var_core_value_sigC349, var_core_value_sig9D96, var_core_value_sig2776, var_core_value_sig6FB2) {
  let var_core_value_sigEB43 = Ne(var_core_value_sigC349, var_core_value_sig9D96);
  return var_core_value_sigEB43 ? !!var_core_value_sig040A.syncExecuteCommand(n.RichTextEditingMutation["id"], {
    unitId: var_core_value_sig2AE0,
    actions: var_core_value_sigEB43,
    textRanges: var_core_value_sig6FB2 == null ? [] : [{
      startOffset: var_core_value_sig6FB2,
      endOffset: var_core_value_sig6FB2,
      collapsed: true
    }],
    isEditing: false,
    trigger: var_core_value_sig2776
  }) : false;
}
function ze(var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866, var_core_value_sig5EFB, var_core_value_sig3A85, var_core_value_sig2682) {
  let var_core_value_sig4BB5 = {
      unitId: var_core_value_sigB608,
      blockId: var_core_value_sigF866,
      config: var_core_value_sig3A85
    },
    var_core_value_sig6709 = {
      unitId: var_core_value_sigB608,
      blockId: var_core_value_sigF866,
      config: var_core_value_sig5EFB
    },
    var_core_value_sig52CA = [{
      id: h.id,
      params: var_core_value_sig4BB5
    }],
    var_core_value_sigC030 = [{
      id: h.id,
      params: var_core_value_sig6709
    }];
  if (!var_core_value_sigF963.syncExecuteCommand(h.id, var_core_value_sig4BB5)) return false;
  if (var_core_value_sig2682) {
    let var_core_value_sig6418 = {
        unitId: var_core_value_sigB608,
        actions: var_core_value_sig2682,
        textRanges: null,
        noNeedSetTextRange: true,
        isEditing: false,
        noHistory: true,
        trigger: V.id
      },
      var_core_value_sig1896 = var_core_value_sigF963.syncExecuteCommand(n.RichTextEditingMutation["id"], var_core_value_sig6418);
    if (!var_core_value_sig1896) return var_core_value_sigF963.syncExecuteCommand(h.id, var_core_value_sig6709), false;
    var_core_value_sig52CA.push({
      id: n.RichTextEditingMutation["id"],
      params: var_core_value_sig6418
    }), var_core_value_sigC030.unshift({
      id: n.RichTextEditingMutation["id"],
      params: {
        ...var_core_value_sig1896,
        noHistory: true
      }
    });
  }
  return var_core_value_sig4186.get(e.IUndoRedoService).pushUndoRedo({
    unitID: var_core_value_sigB608,
    redoMutations: var_core_value_sig52CA,
    undoMutations: var_core_value_sigC030
  }), true;
}
function Be(var_core_value_sig88F6, var_core_value_sig37DB, var_core_value_sig5542, var_core_value_sigE0A9, var_core_value_sigA73E, var_core_value_sig7620, var_core_value_sigB9FC, var_core_value_sig5055) {
  let var_core_value_sig3801 = Ne(var_core_value_sig7620, var_core_value_sigB9FC);
  if (!var_core_value_sig3801) return false;
  let var_core_value_sig45F0 = {
      unitId: var_core_value_sig5542,
      actions: var_core_value_sig3801,
      textRanges: [{
        startOffset: var_core_value_sig5055,
        endOffset: var_core_value_sig5055,
        collapsed: true
      }],
      isEditing: false,
      noHistory: true,
      trigger: U.id
    },
    var_core_value_sigBC91 = var_core_value_sig37DB.syncExecuteCommand(n.RichTextEditingMutation["id"], var_core_value_sig45F0);
  if (!var_core_value_sigBC91) return false;
  let var_core_value_sigCB88 = {
    unitId: var_core_value_sig5542,
    blockId: var_core_value_sigE0A9
  };
  if (!var_core_value_sig37DB.syncExecuteCommand(g.id, var_core_value_sigCB88)) return var_core_value_sig37DB.syncExecuteCommand(n.RichTextEditingMutation["id"], {
    ...var_core_value_sigBC91,
    noHistory: true
  }), false;
  let var_core_value_sig8D65 = {
    unitId: var_core_value_sig5542,
    blockId: var_core_value_sigE0A9,
    config: var_core_value_sigA73E
  };
  return var_core_value_sig88F6.get(e.IUndoRedoService).pushUndoRedo({
    unitID: var_core_value_sig5542,
    redoMutations: [{
      id: n.RichTextEditingMutation["id"],
      params: var_core_value_sig45F0
    }, {
      id: g.id,
      params: var_core_value_sigCB88
    }],
    undoMutations: [{
      id: n.RichTextEditingMutation["id"],
      params: {
        ...var_core_value_sigBC91,
        noHistory: true
      }
    }, {
      id: h.id,
      params: var_core_value_sig8D65
    }]
  }), true;
}
const X = "DOC_CALLOUT_PLUGIN";
var Ve = "@univerjs-pro/docs-callout",
  He = "1.0.0-insiders.20260907-70fc579";
const Ue = {};
function Z(var_core_value_sig8122, var_core_value_sigEDC6) {
  return function (var_core_value_sig0285, var_core_value_sig777D) {
    var_core_value_sigEDC6(var_core_value_sig0285, var_core_value_sig777D, var_core_value_sig8122);
  };
}
function We(var_core_value_sig611A, var_core_value_sig6BD9, var_core_value_sig7E56, var_core_value_sig4161) {
  var var_core_value_sig7580 = arguments.length,
    var_core_value_sig1F18 = var_core_value_sig7580 < 3 ? var_core_value_sig6BD9 : var_core_value_sig4161 === null ? var_core_value_sig4161 = Object.getOwnPropertyDescriptor(var_core_value_sig6BD9, var_core_value_sig7E56) : var_core_value_sig4161,
    var_core_value_sigD5A0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig1F18 = Reflect.decorate(var_core_value_sig611A, var_core_value_sig6BD9, var_core_value_sig7E56, var_core_value_sig4161);else {
    for (var var_core_value_sig81B2 = var_core_value_sig611A.length - 1; var_core_value_sig81B2 >= 0; var_core_value_sig81B2--) (var_core_value_sigD5A0 = var_core_value_sig611A[var_core_value_sig81B2]) && (var_core_value_sig1F18 = (var_core_value_sig7580 < 3 ? var_core_value_sigD5A0(var_core_value_sig1F18) : var_core_value_sig7580 > 3 ? var_core_value_sigD5A0(var_core_value_sig6BD9, var_core_value_sig7E56, var_core_value_sig1F18) : var_core_value_sigD5A0(var_core_value_sig6BD9, var_core_value_sig7E56)) || var_core_value_sig1F18);
  }
  return var_core_value_sig7580 > 3 && var_core_value_sig1F18 && Object.defineProperty(var_core_value_sig6BD9, var_core_value_sig7E56, var_core_value_sig1F18), var_core_value_sig1F18;
}
let Q = class extends e.Disposable {
  constructor(var_core_value_sig3F4C, var_core_value_sigD65A) {
    super(), this._resourceManagerService = var_core_value_sig3F4C, this._docsCalloutModel = var_core_value_sigD65A, this._initResource();
  }
  _initResource() {
    this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: X,
      businesses: [e.UniverInstanceType["UNIVER_DOC"]],
      toJson: var_core_value_sig8061 => JSON.stringify(this._docsCalloutModel["serialize"](var_core_value_sig8061)),
      parseJson: var_core_value_sig4D4C => a(JSON.parse(var_core_value_sig4D4C)),
      onLoad: (var_core_value_sigC9E0, var_core_value_sig76BA) => this._docsCalloutModel["deserialize"](var_core_value_sigC9E0, var_core_value_sig76BA),
      onUnLoad: var_core_value_sigFBFA => this._docsCalloutModel["removeUnit"](var_core_value_sigFBFA)
    }));
  }
};
Q = We([Z(0, e.IResourceManagerService), Z(1, (0, e.Inject)(m))], Q);
let $ = class extends e.Plugin {
  constructor(var_core_value_sig5A13 = Ue, var_core_value_sigF593, var_core_value_sig3607, var_core_value_sigB512) {
    super(), this._config = var_core_value_sig5A13, this._injector = var_core_value_sigF593, this._commandService = var_core_value_sig3607, this._configService = var_core_value_sigB512;
    let {
      ...var_core_value_sigF2E6
    } = (0, e.merge)({}, Ue, this._config);
    this._configService["setConfig"]("docs-callout.config", var_core_value_sigF2E6);
  }
  onStarting() {
    this._injector["add"]([m]), this._injector["add"]([Q]), this._injector["get"](m), this._injector["get"](Q), [W, L, H, U, I, R, V, B, z, h, g].forEach(var_core_value_sigF602 => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigF602)));
  }
};
p($, "pluginName", X), p($, "packageName", Ve), p($, "version", He), p($, "type", e.UniverInstanceType["UNIVER_DOC"]), $ = We([(0, e.DependentOn)(r.UniverLicensePlugin, n.UniverDocsPlugin), Z(1, (0, e.Inject)(e.Injector)), Z(2, e.ICommandService), Z(3, e.IConfigService)], $), exports.DEFAULT_CALLOUT_CONFIG = i, exports.DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN = "orange.50", exports.DOCS_CALLOUT_BORDER_COLOR_TOKEN = "orange.200", exports.DOCS_CALLOUT_PLUGIN = X, exports.DocsCalloutCancelEmptyParagraphCommand = W, exports.DocsCalloutConsumeBoundaryDeleteCommand = L, exports.DocsCalloutDeleteCommand = H, exports.DocsCalloutInsertBelowCommand = I, exports.DocsCalloutInsertCommand = R, exports.DocsCalloutModel = m, exports.DocsCalloutResetColorsCommand = V, exports.DocsCalloutSetTextColorCommand = B, exports.DocsCalloutUnwrapCommand = U, exports.DocsCalloutUpdateCommand = z, exports.RemoveDocsCalloutConfigMutation = g, exports.SetDocsCalloutConfigMutation = h, Object.defineProperty(exports, "UniverDocsCalloutPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.buildCancelEmptyCalloutParagraphActions = x, exports.isCalloutBoundaryDelete = ue, exports.normalizeDocsCalloutConfig = o, exports.normalizeDocsCalloutMetadataResource = a;
