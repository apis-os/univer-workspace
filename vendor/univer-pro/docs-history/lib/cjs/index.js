Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/edit-history"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core"),
  r = require("@univerjs/docs"),
  i = require("@univerjs/protocol"),
  a = require("@univerjs-pro/collaboration");
const o = "docs-history.config",
  s = {};
var c = "@univerjs-pro/docs-history",
  l = "1.0.0-insiders.20260907-70fc579";
function u(var_core_value_sigE1B0, var_core_value_sigD4FF) {
  let var_core_value_sig1E5B = [...(var_core_value_sigD4FF.paragraphs ?? [])].sort((var_core_value_sig1758, var_core_value_sig4805) => var_core_value_sig1758.startIndex - var_core_value_sig4805.startIndex),
    var_core_value_sigB680 = var_core_value_sig1E5B.findIndex(var_core_value_sigE67E => var_core_value_sigE67E.paragraphId === var_core_value_sigE1B0.paragraphId || var_core_value_sigE67E.paragraphId === var_core_value_sigE1B0.nextParagraphId),
    var_core_value_sig1F64 = var_core_value_sigB680 >= 0 ? var_core_value_sig1E5B[var_core_value_sigB680] : undefined,
    var_core_value_sigDD1C = var_core_value_sigB680 > 0 ? var_core_value_sig1E5B[var_core_value_sigB680 - 1] : var_core_value_sig1E5B.find(var_core_value_sig2902 => var_core_value_sig2902.paragraphId === var_core_value_sigE1B0.previousParagraphId),
    var_core_value_sig2C39 = var_core_value_sig1F64 || var_core_value_sigDD1C ? ((var_core_value_sigDD1C == null ? undefined : var_core_value_sigDD1C.startIndex) ?? -1) + 1 : var_core_value_sigE1B0.absoluteOffset,
    var_core_value_sigB7D1 = Math.max(0, var_core_value_sigD4FF.dataStream["length"] - 1),
    var_core_value_sig64F0 = (var_core_value_sig1F64 == null ? undefined : var_core_value_sig1F64.startIndex) ?? var_core_value_sigB7D1,
    var_core_value_sig85B1 = d(var_core_value_sig2C39 + (var_core_value_sig1F64 || var_core_value_sigDD1C ? var_core_value_sigE1B0.offsetInParagraph : 0), 0, var_core_value_sig64F0);
  return {
    startOffset: var_core_value_sig85B1,
    endOffset: d(var_core_value_sig2C39 + (var_core_value_sig1F64 || var_core_value_sigDD1C ? var_core_value_sigE1B0.endOffsetInParagraph ?? var_core_value_sigE1B0.offsetInParagraph : 0), var_core_value_sig85B1, var_core_value_sig64F0)
  };
}
function d(var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig2EAD) {
  return Math.min(var_core_value_sig2EAD, Math.max(var_core_value_sig2162, var_core_value_sig3141));
}
function f(var_core_value_sig6774, var_core_value_sig340D) {
  return function (var_core_value_sig9989, var_core_value_sig698E) {
    var_core_value_sig340D(var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig6774);
  };
}
function p(var_core_value_sig82D4, var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86) {
  var var_core_value_sig0B0C = arguments.length,
    var_core_value_sigA39E = var_core_value_sig0B0C < 3 ? var_core_value_sigBDE4 : var_core_value_sigDC86 === null ? var_core_value_sigDC86 = Object.getOwnPropertyDescriptor(var_core_value_sigBDE4, var_core_value_sig7DF1) : var_core_value_sigDC86,
    var_core_value_sigBBEE;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigA39E = Reflect.decorate(var_core_value_sig82D4, var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86);else {
    for (var var_core_value_sig011D = var_core_value_sig82D4.length - 1; var_core_value_sig011D >= 0; var_core_value_sig011D--) (var_core_value_sigBBEE = var_core_value_sig82D4[var_core_value_sig011D]) && (var_core_value_sigA39E = (var_core_value_sig0B0C < 3 ? var_core_value_sigBBEE(var_core_value_sigA39E) : var_core_value_sig0B0C > 3 ? var_core_value_sigBBEE(var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigA39E) : var_core_value_sigBBEE(var_core_value_sigBDE4, var_core_value_sig7DF1)) || var_core_value_sigA39E);
  }
  return var_core_value_sig0B0C > 3 && var_core_value_sigA39E && Object.defineProperty(var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigA39E), var_core_value_sigA39E;
}
let m = class extends n.Disposable {
  constructor(var_core_value_sig2809, var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8) {
    super(), this._authzIoService = var_core_value_sig2DAB, this._univerInstanceService = var_core_value_sig877E, this._selectionManagerService = var_core_value_sig20C8, this.disposeWithMe(var_core_value_sig2809.register({
      type: n.UniverInstanceType["UNIVER_DOC"],
      canView: var_core_value_sig480E => this._hasPermission(var_core_value_sig480E, i.UnitAction["ViewHistory"]),
      canRevert: async var_core_value_sig26DB => {
        var var_core_value_sigF0F9;
        return !!this._getDocument(var_core_value_sig26DB) && !((var_core_value_sigF0F9 = this._getDocument(var_core_value_sig26DB)) != null && var_core_value_sigF0F9.getSnapshot().disabled) && (await this._hasPermission(var_core_value_sig26DB, i.UnitAction["RecoverHistory"]));
      },
      captureLocation: var_core_value_sig1A0F => this._captureLocation(var_core_value_sig1A0F),
      restoreLocation: (var_core_value_sigFBA4, var_core_value_sig4383) => this._restoreLocation(var_core_value_sigFBA4, h(var_core_value_sig4383) ? var_core_value_sig4383 : undefined)
    }));
  }
  _captureLocation(var_core_value_sigE9A7) {
    var var_core_value_sigBECE;
    let var_core_value_sig1B22 = this._getDocument(var_core_value_sigE9A7),
      var_core_value_sig7F72 = this._selectionManagerService["getActiveTextRange"](),
      var_core_value_sig7B2A = (var_core_value_sig7F72 == null ? undefined : var_core_value_sig7F72.segmentId) ?? "",
      var_core_value_sig06CD = var_core_value_sig1B22 == null || (var_core_value_sigBECE = var_core_value_sig1B22.getSelfOrHeaderFooterModel(var_core_value_sig7B2A)) == null ? undefined : var_core_value_sigBECE.getBody();
    if (!var_core_value_sig1B22 || !var_core_value_sig7F72 || !var_core_value_sig06CD) return;
    let var_core_value_sigA5F1 = [...(var_core_value_sig06CD.paragraphs ?? [])].sort((var_core_value_sig186C, var_core_value_sigD955) => var_core_value_sig186C.startIndex - var_core_value_sigD955.startIndex),
      var_core_value_sig97A2 = var_core_value_sigA5F1.findIndex(var_core_value_sig48BD => var_core_value_sig48BD.startIndex >= var_core_value_sig7F72.startOffset),
      var_core_value_sig07E9 = var_core_value_sig97A2 >= 0 ? var_core_value_sigA5F1[var_core_value_sig97A2] : undefined,
      var_core_value_sig4F59;
    var_core_value_sig97A2 > 0 ? var_core_value_sig4F59 = var_core_value_sigA5F1[var_core_value_sig97A2 - 1] : var_core_value_sig97A2 < 0 && (var_core_value_sig4F59 = var_core_value_sigA5F1[var_core_value_sigA5F1.length - 1]);
    let var_core_value_sigF564 = var_core_value_sig4F59 ? var_core_value_sig4F59.startIndex + 1 : 0,
      var_core_value_sig8CFA = [...(var_core_value_sig06CD.sectionBreaks ?? [])].sort((var_core_value_sig429F, var_core_value_sigF62A) => var_core_value_sig429F.startIndex - var_core_value_sigF62A.startIndex).find(var_core_value_sig8178 => var_core_value_sig8178.startIndex >= var_core_value_sig7F72.startOffset);
    return {
      segmentId: var_core_value_sig7B2A,
      sectionId: var_core_value_sig8CFA == null ? undefined : var_core_value_sig8CFA.sectionId,
      paragraphId: (var_core_value_sig07E9 == null ? undefined : var_core_value_sig07E9.paragraphId) ?? (var_core_value_sig4F59 == null ? undefined : var_core_value_sig4F59.paragraphId),
      previousParagraphId: var_core_value_sig4F59 == null ? undefined : var_core_value_sig4F59.paragraphId,
      nextParagraphId: var_core_value_sig07E9 == null ? undefined : var_core_value_sig07E9.paragraphId,
      absoluteOffset: var_core_value_sig7F72.startOffset,
      offsetInParagraph: Math.max(0, var_core_value_sig7F72.startOffset - var_core_value_sigF564),
      endOffsetInParagraph: Math.max(0, var_core_value_sig7F72.endOffset - var_core_value_sigF564),
      affinity: "forward"
    };
  }
  _restoreLocation(var_core_value_sig2E11, var_core_value_sig5B69) {
    var var_core_value_sigB098;
    let var_core_value_sigCE71 = (var_core_value_sigB098 = this._getDocument(var_core_value_sig2E11)) == null || (var_core_value_sigB098 = var_core_value_sigB098.getSelfOrHeaderFooterModel((var_core_value_sig5B69 == null ? undefined : var_core_value_sig5B69.segmentId) ?? "")) == null ? undefined : var_core_value_sigB098.getBody();
    if (!var_core_value_sigCE71 || !var_core_value_sig5B69) return;
    let {
      startOffset: var_core_value_sig21D8,
      endOffset: var_core_value_sig2B65
    } = u(var_core_value_sig5B69, var_core_value_sigCE71);
    this._selectionManagerService["replaceDocRanges"]([{
      startOffset: var_core_value_sig21D8,
      endOffset: var_core_value_sig2B65,
      segmentId: var_core_value_sig5B69.segmentId
    }]);
  }
  _getDocument(var_core_value_sigD7EA) {
    return this._univerInstanceService["getUnit"](var_core_value_sigD7EA, n.UniverInstanceType["UNIVER_DOC"]) ?? null;
  }
  async _hasPermission(var_core_value_sigB33B, var_core_value_sig24B9) {
    return (await this._authzIoService["allowed"]({
      unitID: var_core_value_sigB33B,
      objectID: var_core_value_sigB33B,
      objectType: i.UnitObject["Document"],
      actions: [var_core_value_sig24B9]
    })).some(var_core_value_sigE9ED => var_core_value_sigE9ED.action === var_core_value_sig24B9 && var_core_value_sigE9ED.allowed);
  }
};
m = p([f(0, (0, n.Inject)(e.HistoryUnitAdapterRegistryService)), f(1, n.IAuthzIoService), f(2, n.IUniverInstanceService), f(3, (0, n.Inject)(r.DocSelectionManagerService))], m);
function h(var_core_value_sig6167) {
  return typeof var_core_value_sig6167 == "object" && !!var_core_value_sig6167 && "segmentId" in var_core_value_sig6167 && typeof var_core_value_sig6167.segmentId == "string" && "absoluteOffset" in var_core_value_sig6167 && typeof var_core_value_sig6167.absoluteOffset == "number" && "offsetInParagraph" in var_core_value_sig6167 && typeof var_core_value_sig6167.offsetInParagraph == "number";
}
function ee(var_core_value_sig65A1) {
  let var_core_value_sig7F19 = [];
  return g(var_core_value_sig65A1, [], (var_core_value_sigE627, var_core_value_sigEF3E) => {
    (var_core_value_sigE627.et === "TextX" || var_core_value_sigE627.et === "text-x") && ie(var_core_value_sigE627.e) && var_core_value_sig7F19.push({
      actions: var_core_value_sigE627.e,
      path: var_core_value_sigEF3E
    });
  }), var_core_value_sig7F19;
}
function te(var_core_value_sig7827) {
  let var_core_value_sig652C = [];
  return g(var_core_value_sig7827, [], (var_core_value_sig273D, var_core_value_sig9A0D) => {
    var_core_value_sig273D.et !== "TextX" && var_core_value_sig273D.et !== "text-x" && ((var_core_value_sig273D.oi !== undefined || var_core_value_sig273D.od !== undefined) && var_core_value_sig652C.push({
      path: var_core_value_sig9A0D,
      previousValue: var_core_value_sig273D.od,
      nextValue: var_core_value_sig273D.oi
    }), (var_core_value_sig273D.li !== undefined || var_core_value_sig273D.ld !== undefined) && var_core_value_sig652C.push({
      path: var_core_value_sig9A0D,
      previousValue: var_core_value_sig273D.ld,
      nextValue: var_core_value_sig273D.li
    }), (var_core_value_sig273D.i !== undefined || var_core_value_sig273D.r !== undefined) && var_core_value_sig652C.push({
      path: var_core_value_sig9A0D,
      previousValue: var_core_value_sig273D.r,
      nextValue: var_core_value_sig273D.i
    }));
  }), var_core_value_sig652C;
}
function g(var_core_value_sig7E32, var_core_value_sig4C07, var_core_value_sig79AB) {
  if (!Array.isArray(var_core_value_sig7E32) || var_core_value_sig7E32.length === 0) return;
  let var_core_value_sig8E74 = [...var_core_value_sig4C07];
  var_core_value_sig7E32.forEach(var_core_value_sigA319 => {
    Array.isArray(var_core_value_sigA319) ? g(var_core_value_sigA319, var_core_value_sig8E74, var_core_value_sig79AB) : ne(var_core_value_sigA319) ? var_core_value_sig8E74.push(var_core_value_sigA319) : re(var_core_value_sigA319) && var_core_value_sig79AB(var_core_value_sigA319, var_core_value_sig8E74);
  });
}
function ne(var_core_value_sig104C) {
  return typeof var_core_value_sig104C == "string" || typeof var_core_value_sig104C == "number";
}
function re(var_core_value_sig841D) {
  return typeof var_core_value_sig841D == "object" && !!var_core_value_sig841D && !Array.isArray(var_core_value_sig841D);
}
function ie(var_core_value_sig90CB) {
  return Array.isArray(var_core_value_sig90CB) && var_core_value_sig90CB.every(var_core_value_sig2D58 => typeof var_core_value_sig2D58 != "object" || !var_core_value_sig2D58 || !("t" in var_core_value_sig2D58) || !("len" in var_core_value_sig2D58) ? false : (var_core_value_sig2D58.t === n.TextXActionType["INSERT"] || var_core_value_sig2D58.t === n.TextXActionType["DELETE"] || var_core_value_sig2D58.t === n.TextXActionType["RETAIN"]) && typeof var_core_value_sig2D58.len == "number");
}
function ae(var_core_value_sigBDF5) {
  let var_core_value_sigACC6 = [],
    var_core_value_sig1614 = false,
    var_core_value_sig85C3 = 0;
  return var_core_value_sigBDF5.forEach(({
    mutation: var_core_value_sig223F,
    memberId: var_core_value_sigD749,
    revision: var_core_value_sigCFFA
  }) => {
    if (var_core_value_sig223F.id === a.RevertRevisionMutation["id"]) {
      var_core_value_sig1614 = true;
      let var_core_value_sigB577 = xe(var_core_value_sig223F) ? var_core_value_sig223F.params["revision"] : 0;
      var_core_value_sigACC6.push({
        id: w(var_core_value_sigCFFA, var_core_value_sig85C3++),
        kind: "restore",
        category: "metadata",
        anchor: C("", 0),
        endOffset: 0,
        memberId: var_core_value_sigD749,
        revision: var_core_value_sigCFFA,
        restoredRevision: var_core_value_sigB577
      });
      return;
    }
    if (!Se(var_core_value_sig223F)) return;
    let var_core_value_sig58C1 = var_core_value_sigACC6.length,
      var_core_value_sig5090 = var_core_value_sig223F.params;
    ee(var_core_value_sig5090.actions).forEach(({
      actions: var_core_value_sig9572
    }) => {
      var_core_value_sig85C3 = _(var_core_value_sig9572, var_core_value_sig5090.segmentId ?? "", var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sig85C3, var_core_value_sigACC6);
    }), te(var_core_value_sig5090.actions).forEach(var_core_value_sigD873 => {
      let var_core_value_sigA12B = se(var_core_value_sigD873, var_core_value_sig5090.segmentId ?? "", var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sig85C3);
      var_core_value_sigA12B && (var_core_value_sigACC6.push(var_core_value_sigA12B), var_core_value_sig85C3 += 1);
    });
    let var_core_value_sigC368 = var_core_value_sigACC6.splice(var_core_value_sig58C1);
    var_core_value_sigACC6.push(...ue(var_core_value_sigC368));
  }), {
    changes: var_core_value_sigACC6.sort(T),
    hasRevisionBarrier: var_core_value_sig1614
  };
}
function oe(var_core_value_sigB996, var_core_value_sig4BBA) {
  return var_core_value_sigB996.map(var_core_value_sigAD56 => ({
    ...var_core_value_sigAD56,
    anchor: Te(var_core_value_sigAD56.anchor, var_core_value_sig4BBA[var_core_value_sigAD56.anchor["segmentId"]])
  }));
}
function _(var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C, var_core_value_sigE2BF, var_core_value_sigB8C7) {
  let var_core_value_sigA56E = 0,
    var_core_value_sig1998 = var_core_value_sigE2BF;
  return var_core_value_sig6201.forEach(var_core_value_sigDB4A => {
    let var_core_value_sig6418 = we(var_core_value_sigDB4A);
    var_core_value_sig6418 && var_core_value_sigDB4A.body && (var_core_value_sig1998 = v(var_core_value_sigDB4A.body, var_core_value_sig6418, var_core_value_sig5151, var_core_value_sigA56E, var_core_value_sigDB4A.len, var_core_value_sigB542, var_core_value_sigBB6C, var_core_value_sig1998, var_core_value_sigB8C7)), var_core_value_sigDB4A.t !== n.TextXActionType["DELETE"] && (var_core_value_sigA56E += var_core_value_sigDB4A.len);
  }), var_core_value_sig1998;
}
function v(var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig9D15, var_core_value_sigB785, var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7) {
  var var_core_value_sig866F, var_core_value_sigDE3D, var_core_value_sigF175, var_core_value_sig6A18;
  let var_core_value_sig4E3D = var_core_value_sigC0E3,
    var_core_value_sig49B0 = var_core_value_sig1896 => {
      var_core_value_sig52F7.push({
        ...var_core_value_sig1896,
        id: w(var_core_value_sig130F, var_core_value_sig4E3D++),
        memberId: var_core_value_sigB785,
        revision: var_core_value_sig130F
      });
    };
  if (var_core_value_sigFF19.dataStream && var_core_value_sig49B0({
    kind: var_core_value_sig43B8,
    category: "text",
    anchor: C(var_core_value_sigD98F, var_core_value_sig66C0),
    endOffset: var_core_value_sig66C0 + var_core_value_sig9D15,
    text: var_core_value_sigFF19.dataStream,
    body: var_core_value_sigFF19
  }), var_core_value_sig43B8 === "modify") {
    var var_core_value_sig2547;
    (var_core_value_sig2547 = var_core_value_sigFF19.textRuns) == null || var_core_value_sig2547.forEach(var_core_value_sigF230 => var_core_value_sig49B0({
      kind: var_core_value_sig43B8,
      category: "style",
      anchor: C(var_core_value_sigD98F, var_core_value_sig66C0 + var_core_value_sigF230.st),
      endOffset: var_core_value_sig66C0 + var_core_value_sigF230.ed
    }));
  }
  return (var_core_value_sig866F = var_core_value_sigFF19.paragraphs) == null || var_core_value_sig866F.forEach(var_core_value_sig0285 => var_core_value_sig49B0({
    kind: var_core_value_sig43B8,
    category: "paragraph",
    anchor: C(var_core_value_sigD98F, var_core_value_sig66C0 + var_core_value_sig0285.startIndex, var_core_value_sig0285.paragraphId),
    endOffset: var_core_value_sig66C0 + var_core_value_sig0285.startIndex + 1
  })), (var_core_value_sigDE3D = var_core_value_sigFF19.sectionBreaks) == null || var_core_value_sigDE3D.forEach(var_core_value_sig777D => var_core_value_sig49B0({
    kind: var_core_value_sig43B8,
    category: "section",
    anchor: {
      ...C(var_core_value_sigD98F, var_core_value_sig66C0 + var_core_value_sig777D.startIndex),
      sectionId: var_core_value_sig777D.sectionId
    },
    endOffset: var_core_value_sig66C0 + var_core_value_sig777D.startIndex + 1
  })), (var_core_value_sigF175 = var_core_value_sigFF19.customRanges) == null || var_core_value_sigF175.forEach(var_core_value_sig3F4C => var_core_value_sig49B0({
    kind: var_core_value_sig43B8,
    category: "custom-range",
    anchor: C(var_core_value_sigD98F, var_core_value_sig66C0 + var_core_value_sig3F4C.startIndex),
    endOffset: var_core_value_sig66C0 + var_core_value_sig3F4C.endIndex + 1,
    rangeId: var_core_value_sig3F4C.rangeId,
    rangeType: Number(var_core_value_sig3F4C.rangeType)
  })), (var_core_value_sig6A18 = var_core_value_sigFF19.blockRanges) == null || var_core_value_sig6A18.forEach(var_core_value_sigD65A => var_core_value_sig49B0({
    kind: var_core_value_sig43B8,
    category: "block-range",
    anchor: C(var_core_value_sigD98F, var_core_value_sig66C0 + var_core_value_sigD65A.startIndex),
    endOffset: var_core_value_sig66C0 + var_core_value_sigD65A.endIndex + 1,
    blockId: var_core_value_sigD65A.blockId,
    blockType: var_core_value_sigD65A.blockType
  })), Ce(var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig49B0), var_core_value_sig4E3D;
}
function se(var_core_value_sigBCA9, var_core_value_sig4CDF, var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sigC9ED) {
  let var_core_value_sigB57B = me(var_core_value_sigBCA9.path);
  if (!var_core_value_sigB57B) return null;
  let var_core_value_sig780B = var_core_value_sigBCA9.nextValue ?? var_core_value_sigBCA9.previousValue,
    var_core_value_sig7D1B = ve(var_core_value_sigBCA9.path, var_core_value_sig4CDF),
    var_core_value_sig7BE0 = x(var_core_value_sig780B, "startIndex") ?? ye(var_core_value_sigBCA9) ?? 0,
    var_core_value_sig7D40 = x(var_core_value_sig780B, "endIndex") ?? var_core_value_sig7BE0 + 1,
    var_core_value_sig6C7E = ce(var_core_value_sigBCA9, var_core_value_sigB57B),
    var_core_value_sig68BE = he(var_core_value_sigBCA9.path, var_core_value_sig780B),
    var_core_value_sig04C6 = var_core_value_sigB57B === "table" ? ge(var_core_value_sigBCA9.path) : {};
  return {
    id: w(var_core_value_sig880E, var_core_value_sigC9ED),
    kind: var_core_value_sig6C7E,
    category: var_core_value_sigB57B,
    anchor: C(var_core_value_sig7D1B, var_core_value_sig7BE0),
    endOffset: Math.max(var_core_value_sig7BE0 + 1, var_core_value_sig7D40),
    memberId: var_core_value_sig3F79,
    revision: var_core_value_sig880E,
    rangeId: S(var_core_value_sig780B, "rangeId"),
    blockId: S(var_core_value_sig780B, "blockId"),
    structuralPath: [...var_core_value_sigBCA9.path],
    tableId: var_core_value_sig68BE,
    tableRows: var_core_value_sig04C6.row == null ? undefined : [var_core_value_sig04C6.row],
    tableColumns: var_core_value_sig04C6.column == null ? undefined : [var_core_value_sig04C6.column],
    tableCells: var_core_value_sig04C6.cell,
    tableEdits: var_core_value_sigB57B === "table" ? [_e(var_core_value_sigBCA9)] : undefined,
    drawingId: be(var_core_value_sigBCA9.path, var_core_value_sig780B),
    columnGroupId: S(var_core_value_sig780B, "columnGroupId")
  };
}
function ce(var_core_value_sigCA05, var_core_value_sig2F2B) {
  let var_core_value_sig70AF = "modify";
  return var_core_value_sigCA05.previousValue === undefined ? var_core_value_sig70AF = "insert" : var_core_value_sigCA05.nextValue === undefined && (var_core_value_sig70AF = "delete"), var_core_value_sig2F2B !== "table" || var_core_value_sig70AF === "modify" || le(var_core_value_sigCA05.path) ? var_core_value_sig70AF : "modify";
}
function le(var_core_value_sigD04E) {
  let var_core_value_sigB99B = var_core_value_sigD04E.indexOf("tableSource");
  if (var_core_value_sigB99B < 0) return false;
  if (var_core_value_sigD04E.length === var_core_value_sigB99B + 2 && typeof var_core_value_sigD04E[var_core_value_sigB99B + 1] == "string") return true;
  let var_core_value_sig5A75 = var_core_value_sigD04E[var_core_value_sigD04E.length - 2];
  return typeof var_core_value_sigD04E[var_core_value_sigD04E.length - 1] == "number" && (var_core_value_sig5A75 === "tableRows" || var_core_value_sig5A75 === "tableColumns" || var_core_value_sig5A75 === "tableCells");
}
function ue(var_core_value_sig7BAF) {
  let var_core_value_sig8F69 = new Map(),
    var_core_value_sig6884 = [];
  return var_core_value_sig7BAF.forEach(var_core_value_sig5A13 => {
    if (var_core_value_sig5A13.category !== "table" || !var_core_value_sig5A13.tableId) {
      var_core_value_sig6884.push(var_core_value_sig5A13);
      return;
    }
    let var_core_value_sigF593 = var_core_value_sig8F69.get(var_core_value_sig5A13.tableId) ?? [];
    var_core_value_sigF593.push(var_core_value_sig5A13), var_core_value_sig8F69.set(var_core_value_sig5A13.tableId, var_core_value_sigF593);
  }), var_core_value_sig8F69.forEach(var_core_value_sig3607 => var_core_value_sig6884.push(de(var_core_value_sig3607))), var_core_value_sig6884.sort(T);
}
function de(var_core_value_sig066E) {
  let var_core_value_sig9B0D = fe(var_core_value_sig066E),
    var_core_value_sig3D2C = var_core_value_sig9B0D === "modify" ? var_core_value_sig066E : var_core_value_sig066E.filter(var_core_value_sigB512 => var_core_value_sigB512.kind === var_core_value_sig9B0D),
    var_core_value_sigC56D = var_core_value_sig066E.find(var_core_value_sigF2E6 => {
      var var_core_value_sig34C8;
      return !((var_core_value_sig34C8 = var_core_value_sigF2E6.tableEdits) != null && var_core_value_sig34C8.length);
    }) ?? var_core_value_sig066E[0];
  return {
    ...var_core_value_sig066E[0],
    kind: var_core_value_sig9B0D,
    anchor: var_core_value_sigC56D.anchor,
    endOffset: var_core_value_sigC56D.endOffset,
    body: var_core_value_sigC56D.body,
    tableRows: y(var_core_value_sig3D2C.flatMap(var_core_value_sigB744 => var_core_value_sigB744.tableRows ?? [])),
    tableColumns: y(var_core_value_sig3D2C.flatMap(var_core_value_sigEAE2 => var_core_value_sigEAE2.tableColumns ?? [])),
    tableCells: pe(var_core_value_sig3D2C.flatMap(var_core_value_sigE68A => var_core_value_sigE68A.tableCells ?? [])),
    tableEdits: var_core_value_sig066E.flatMap(var_core_value_sig3E68 => var_core_value_sig3E68.tableEdits ?? [])
  };
}
function fe(var_core_value_sig3A17) {
  let var_core_value_sig938F = var_core_value_sig3A17.some(var_core_value_sigF4C5 => var_core_value_sigF4C5.kind === "insert"),
    var_core_value_sigD948 = var_core_value_sig3A17.some(var_core_value_sig5410 => var_core_value_sig5410.kind === "delete");
  return var_core_value_sig938F && !var_core_value_sigD948 ? "insert" : var_core_value_sigD948 && !var_core_value_sig938F ? "delete" : "modify";
}
function y(var_core_value_sigBE5E) {
  let var_core_value_sig0281 = [...new Set(var_core_value_sigBE5E)].sort((var_core_value_sig492F, var_core_value_sig8EA0) => var_core_value_sig492F - var_core_value_sig8EA0);
  return var_core_value_sig0281.length ? var_core_value_sig0281 : undefined;
}
function pe(var_core_value_sigED71) {
  let var_core_value_sig281C = new Map();
  var_core_value_sigED71.forEach(var_core_value_sigA6F6 => var_core_value_sig281C.set(var_core_value_sigA6F6.row + ":" + var_core_value_sigA6F6.column, var_core_value_sigA6F6));
  let var_core_value_sig3C92 = [...var_core_value_sig281C.values()].sort((var_core_value_sigCDDA, var_core_value_sigE243) => var_core_value_sigCDDA.row - var_core_value_sigE243.row || var_core_value_sigCDDA.column - var_core_value_sigE243.column);
  return var_core_value_sig3C92.length ? var_core_value_sig3C92 : undefined;
}
function me(var_core_value_sigB16B) {
  return var_core_value_sigB16B.includes("tableSource") ? "table" : var_core_value_sigB16B.includes("blockRanges") ? "block-range" : var_core_value_sigB16B.includes("customRanges") ? "custom-range" : var_core_value_sigB16B.includes("tables") ? "table" : var_core_value_sigB16B.includes("drawings") ? "drawing" : var_core_value_sigB16B.includes("customBlocks") ? "custom-block" : var_core_value_sigB16B.includes("columnGroups") ? "column-group" : var_core_value_sigB16B.includes("paragraphs") ? "paragraph" : var_core_value_sigB16B.includes("sectionBreaks") || var_core_value_sigB16B.includes("headers") || var_core_value_sigB16B.includes("footers") ? "section" : null;
}
function he(var_core_value_sig585D, var_core_value_sigE722) {
  let var_core_value_sig062A = var_core_value_sig585D.indexOf("tableSource"),
    var_core_value_sig050A = var_core_value_sig062A >= 0 ? var_core_value_sig585D[var_core_value_sig062A + 1] : undefined;
  return typeof var_core_value_sig050A == "string" ? var_core_value_sig050A : S(var_core_value_sigE722, "tableId");
}
function ge(var_core_value_sig8B32) {
  let var_core_value_sig870F = var_core_value_sig8B32.indexOf("tableRows"),
    var_core_value_sigB683 = var_core_value_sig8B32.indexOf("tableColumns"),
    var_core_value_sig26EC = var_core_value_sig8B32.indexOf("tableCells"),
    var_core_value_sigEEDB = b(var_core_value_sig8B32, var_core_value_sig870F),
    var_core_value_sig36E7 = b(var_core_value_sig8B32, var_core_value_sigB683),
    var_core_value_sig6A78 = b(var_core_value_sig8B32, var_core_value_sig26EC);
  return {
    row: var_core_value_sig6A78 == null ? var_core_value_sigEEDB : undefined,
    column: var_core_value_sig36E7,
    cell: var_core_value_sigEEDB == null || var_core_value_sig6A78 == null ? undefined : [{
      row: var_core_value_sigEEDB,
      column: var_core_value_sig6A78
    }]
  };
}
function b(var_core_value_sigF7EF, var_core_value_sig27F9) {
  let var_core_value_sig393E = var_core_value_sig27F9 >= 0 ? var_core_value_sigF7EF[var_core_value_sig27F9 + 1] : undefined;
  return typeof var_core_value_sig393E == "number" ? var_core_value_sig393E : undefined;
}
function _e(var_core_value_sigB609) {
  return {
    path: [...var_core_value_sigB609.path],
    previousValue: var_core_value_sigB609.previousValue,
    nextValue: var_core_value_sigB609.nextValue
  };
}
function ve(var_core_value_sig390D, var_core_value_sigC928) {
  let var_core_value_sig39B7 = var_core_value_sig390D[0],
    var_core_value_sig18E0 = var_core_value_sig390D[1];
  return (var_core_value_sig39B7 === "headers" || var_core_value_sig39B7 === "footers") && typeof var_core_value_sig18E0 == "string" ? var_core_value_sig18E0 : var_core_value_sigC928;
}
function ye(var_core_value_sigE161) {
  let var_core_value_sigBDEE = var_core_value_sigE161.path[var_core_value_sigE161.path["length"] - 1];
  if (var_core_value_sigBDEE === "startIndex" || var_core_value_sigBDEE === "endIndex") return typeof var_core_value_sigE161.nextValue == "number" ? var_core_value_sigE161.nextValue : typeof var_core_value_sigE161.previousValue == "number" ? var_core_value_sigE161.previousValue : undefined;
}
function be(var_core_value_sig1F40, var_core_value_sig3FC7) {
  let var_core_value_sig1E1B = var_core_value_sig1F40.indexOf("drawings"),
    var_core_value_sig3B10 = var_core_value_sig1E1B >= 0 ? var_core_value_sig1F40[var_core_value_sig1E1B + 1] : undefined;
  return typeof var_core_value_sig3B10 == "string" ? var_core_value_sig3B10 : S(var_core_value_sig3FC7, "drawingId");
}
function x(var_core_value_sig89E6, var_core_value_sig4743) {
  if (typeof var_core_value_sig89E6 != "object" || !var_core_value_sig89E6) return;
  let var_core_value_sigEB6A = Reflect.get(var_core_value_sig89E6, var_core_value_sig4743);
  return typeof var_core_value_sigEB6A == "number" ? var_core_value_sigEB6A : undefined;
}
function S(var_core_value_sig3D46, var_core_value_sigCC93) {
  if (typeof var_core_value_sig3D46 != "object" || !var_core_value_sig3D46) return;
  let var_core_value_sig5964 = Reflect.get(var_core_value_sig3D46, var_core_value_sigCC93);
  return typeof var_core_value_sig5964 == "string" ? var_core_value_sig5964 : undefined;
}
function xe(var_core_value_sig808B) {
  return var_core_value_sig808B.id === a.RevertRevisionMutation["id"] && "revision" in var_core_value_sig808B.params && typeof var_core_value_sig808B.params["revision"] == "number";
}
function Se(var_core_value_sig2A26) {
  return var_core_value_sig2A26.id === r.RichTextEditingMutation["id"] && "unitId" in var_core_value_sig2A26.params && typeof var_core_value_sig2A26.params["unitId"] == "string" && "actions" in var_core_value_sig2A26.params && Array.isArray(var_core_value_sig2A26.params["actions"]);
}
function Ce(var_core_value_sig1179, var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5, var_core_value_sig7100) {
  var var_core_value_sigA19A, var_core_value_sigD3F5, var_core_value_sig3082;
  (var_core_value_sigA19A = var_core_value_sig1179.tables) == null || var_core_value_sigA19A.forEach(var_core_value_sig74A8 => var_core_value_sig7100({
    kind: var_core_value_sigEA92,
    category: "table",
    anchor: C(var_core_value_sig8FD9, var_core_value_sig1AE5 + var_core_value_sig74A8.startIndex),
    endOffset: var_core_value_sig1AE5 + var_core_value_sig74A8.endIndex,
    tableId: var_core_value_sig74A8.tableId
  })), (var_core_value_sigD3F5 = var_core_value_sig1179.customBlocks) == null || var_core_value_sigD3F5.forEach(var_core_value_sig21B2 => var_core_value_sig7100({
    kind: var_core_value_sigEA92,
    category: var_core_value_sig21B2.blockType === n.BlockType["DRAWING"] ? "drawing" : "custom-block",
    anchor: C(var_core_value_sig8FD9, var_core_value_sig1AE5 + var_core_value_sig21B2.startIndex),
    endOffset: var_core_value_sig1AE5 + var_core_value_sig21B2.startIndex + 1,
    blockId: var_core_value_sig21B2.blockId,
    drawingId: var_core_value_sig21B2.blockType === n.BlockType["DRAWING"] ? var_core_value_sig21B2.blockId : undefined
  })), (var_core_value_sig3082 = var_core_value_sig1179.columnGroups) == null || var_core_value_sig3082.forEach(var_core_value_sigDE08 => var_core_value_sig7100({
    kind: var_core_value_sigEA92,
    category: "column-group",
    anchor: C(var_core_value_sig8FD9, var_core_value_sig1AE5 + var_core_value_sigDE08.startIndex),
    endOffset: var_core_value_sig1AE5 + var_core_value_sigDE08.endIndex + 1,
    columnGroupId: var_core_value_sigDE08.columnGroupId
  }));
}
function we(var_core_value_sigF5D1) {
  switch (var_core_value_sigF5D1.t) {
    case n.TextXActionType["INSERT"]:
      return "insert";
    case n.TextXActionType["DELETE"]:
      return "delete";
    case n.TextXActionType["RETAIN"]:
      return var_core_value_sigF5D1.body ? "modify" : null;
    default:
      return null;
  }
}
function C(var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7) {
  return {
    segmentId: var_core_value_sig8775,
    paragraphId: var_core_value_sig13D7,
    offsetInParagraph: 0,
    absoluteOffset: var_core_value_sig481B,
    affinity: "forward"
  };
}
function Te(var_core_value_sig90C0, var_core_value_sigF1B2) {
  if (!var_core_value_sigF1B2) return var_core_value_sig90C0;
  let var_core_value_sigC2BB = [...(var_core_value_sigF1B2.paragraphs ?? [])].sort((var_core_value_sigACCB, var_core_value_sig7F33) => var_core_value_sigACCB.startIndex - var_core_value_sig7F33.startIndex),
    var_core_value_sigD9DB = var_core_value_sigC2BB.findIndex(var_core_value_sig0C53 => var_core_value_sig0C53.startIndex >= var_core_value_sig90C0.absoluteOffset),
    var_core_value_sigA363 = var_core_value_sigD9DB >= 0 ? var_core_value_sigC2BB[var_core_value_sigD9DB] : undefined,
    var_core_value_sigFBA5;
  var_core_value_sigD9DB > 0 ? var_core_value_sigFBA5 = var_core_value_sigC2BB[var_core_value_sigD9DB - 1] : var_core_value_sigD9DB < 0 && (var_core_value_sigFBA5 = var_core_value_sigC2BB[var_core_value_sigC2BB.length - 1]);
  let var_core_value_sigAC47 = var_core_value_sigFBA5 ? var_core_value_sigFBA5.startIndex + 1 : 0,
    var_core_value_sigA06F = [...(var_core_value_sigF1B2.sectionBreaks ?? [])].sort((var_core_value_sigEA04, var_core_value_sig7A62) => var_core_value_sigEA04.startIndex - var_core_value_sig7A62.startIndex).find(var_core_value_sig8109 => var_core_value_sig8109.startIndex >= var_core_value_sig90C0.absoluteOffset);
  return {
    ...var_core_value_sig90C0,
    paragraphId: var_core_value_sig90C0.paragraphId ?? (var_core_value_sigA363 == null ? undefined : var_core_value_sigA363.paragraphId) ?? (var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.paragraphId),
    previousParagraphId: var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.paragraphId,
    nextParagraphId: var_core_value_sigA363 == null ? undefined : var_core_value_sigA363.paragraphId,
    sectionId: var_core_value_sig90C0.sectionId ?? (var_core_value_sigA06F == null ? undefined : var_core_value_sigA06F.sectionId),
    offsetInParagraph: Math.max(0, var_core_value_sig90C0.absoluteOffset - var_core_value_sigAC47)
  };
}
function w(var_core_value_sig770E, var_core_value_sig4654) {
  return var_core_value_sig770E + ":" + var_core_value_sig4654;
}
function T(var_core_value_sigB26B, var_core_value_sig019B) {
  return var_core_value_sigB26B.anchor["segmentId"] === var_core_value_sig019B.anchor["segmentId"] ? var_core_value_sigB26B.anchor["absoluteOffset"] === var_core_value_sig019B.anchor["absoluteOffset"] ? var_core_value_sigB26B.id["localeCompare"](var_core_value_sig019B.id) : var_core_value_sigB26B.anchor["absoluteOffset"] - var_core_value_sig019B.anchor["absoluteOffset"] : var_core_value_sigB26B.anchor["segmentId"].localeCompare(var_core_value_sig019B.anchor["segmentId"]);
}
let E = class {
  constructor(var_core_value_sig7565, var_core_value_sigD4FB) {
    this._gateway = var_core_value_sig7565, this._transformService = var_core_value_sigD4FB;
  }
  async compare(var_core_value_sig3E71, var_core_value_sig01B3) {
    let var_core_value_sig7442 = await this._gateway["fetchChangesets"](var_core_value_sig3E71, var_core_value_sig01B3),
      var_core_value_sigDF87 = var_core_value_sig7442.changesets["flatMap"](var_core_value_sig09B8 => {
        let var_core_value_sig6F91 = (0, a.parseProtocolChangeset)(var_core_value_sig09B8);
        return var_core_value_sig6F91.mutations["flatMap"](var_core_value_sigF602 => var_core_value_sigF602.id !== r.RichTextEditingMutation["id"] && var_core_value_sigF602.id !== a.RevertRevisionMutation["id"] ? [] : [{
          mutation: var_core_value_sigF602,
          memberId: var_core_value_sig6F91.memberID || var_core_value_sig6F91.userID || "unknownUser",
          revision: var_core_value_sig6F91.revision
        }]);
      }),
      var_core_value_sig9EE0 = ae(this._transformAfterLastRevisionBarrier(var_core_value_sigDF87));
    return {
      comparison: var_core_value_sig01B3,
      members: var_core_value_sig7442.members,
      ...var_core_value_sig9EE0
    };
  }
  _transformAfterLastRevisionBarrier(var_core_value_sigF051) {
    let var_core_value_sig0B45 = -1;
    var_core_value_sigF051.forEach((var_core_value_sigF9C7, var_core_value_sig8895) => {
      var_core_value_sigF9C7.mutation["id"] === a.RevertRevisionMutation["id"] && (var_core_value_sig0B45 = var_core_value_sig8895);
    });
    let var_core_value_sig36F8 = var_core_value_sig0B45 >= 0 ? var_core_value_sigF051[var_core_value_sig0B45] : undefined,
      var_core_value_sig03E1 = var_core_value_sigF051.slice(var_core_value_sig0B45 + 1),
      var_core_value_sigBB57 = var_core_value_sig03E1.flatMap((var_core_value_sigC80B, var_core_value_sig284F) => this._transformEntry(var_core_value_sigC80B, var_core_value_sig03E1.slice(var_core_value_sig284F + 1)));
    return var_core_value_sig36F8 ? [var_core_value_sig36F8, ...var_core_value_sigBB57] : var_core_value_sigBB57;
  }
  _transformEntry(var_core_value_sig7C4A, var_core_value_sigE799) {
    let var_core_value_sigB601 = [var_core_value_sig7C4A.mutation];
    return var_core_value_sigE799.forEach(var_core_value_sigE154 => {
      let var_core_value_sig4632 = this._transformService["transformMutations"](var_core_value_sigB601, [var_core_value_sigE154.mutation]);
      if (!(0, a.isTransformMutationsSuccess)(var_core_value_sig4632)) throw Error("[DocsHistoryDiffService]:\x20Failed\x20to\x20transform\x20document\x20history\x20mutations.");
      var_core_value_sigB601 = var_core_value_sig4632.m1Prime;
    }), var_core_value_sigB601.map(var_core_value_sig12F2 => ({
      ...var_core_value_sig7C4A,
      mutation: var_core_value_sig12F2
    }));
  }
};
E = p([f(0, (0, n.Inject)(e.HistoryGatewayService)), f(1, a.ITransformService)], E);
function D(var_core_value_sigC6BC) {
  "@babel/helpers - typeof";

  return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig8B71) {
    return typeof var_core_value_sig8B71;
  } : function (var_core_value_sigAEFB) {
    return var_core_value_sigAEFB && typeof Symbol == "function" && var_core_value_sigAEFB.constructor === Symbol && var_core_value_sigAEFB !== Symbol.prototype ? "symbol" : typeof var_core_value_sigAEFB;
  }, D(var_core_value_sigC6BC);
}
function O(var_core_value_sig8EC2, var_core_value_sigA8C3) {
  if (D(var_core_value_sig8EC2) != "object" || !var_core_value_sig8EC2) return var_core_value_sig8EC2;
  var var_core_value_sig5276 = var_core_value_sig8EC2[Symbol.toPrimitive];
  if (var_core_value_sig5276 !== undefined) {
    var var_core_value_sig031B = var_core_value_sig5276.call(var_core_value_sig8EC2, var_core_value_sigA8C3 || "default");
    if (D(var_core_value_sig031B) != "object") return var_core_value_sig031B;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigA8C3 === "string" ? String : Number)(var_core_value_sig8EC2);
}
function Ee(var_core_value_sig9DC0) {
  var var_core_value_sig95F0 = O(var_core_value_sig9DC0, "string");
  return D(var_core_value_sig95F0) == "symbol" ? var_core_value_sig95F0 : var_core_value_sig95F0 + "";
}
function k(var_core_value_sig9CCB, var_core_value_sigE718, var_core_value_sigAEC8) {
  return (var_core_value_sigE718 = Ee(var_core_value_sigE718)) in var_core_value_sig9CCB ? Object.defineProperty(var_core_value_sig9CCB, var_core_value_sigE718, {
    value: var_core_value_sigAEC8,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig9CCB[var_core_value_sigE718] = var_core_value_sigAEC8, var_core_value_sig9CCB;
}
const De = new Set(["\x08", "\x0a", "\x0b", "\x0e", "\x0f", "\x10", "\x11", "\x12", "\x13", "\x14", "\x15", "\x1a", "\x1b", "\x1c", "\x1d", "\x1e", "\x1f"]),
  Oe = [e.UnitComparisonEntityType["PARAGRAPH"], e.UnitComparisonEntityType["TEXT_STYLE"], e.UnitComparisonEntityType["SECTION"], e.UnitComparisonEntityType["BLOCK_RANGE"], e.UnitComparisonEntityType["CUSTOM_RANGE"], e.UnitComparisonEntityType["TABLE_RANGE"], e.UnitComparisonEntityType["CUSTOM_BLOCK"], e.UnitComparisonEntityType["COLUMN_GROUP"], e.UnitComparisonEntityType["TABLE"], e.UnitComparisonEntityType["DRAWING"], e.UnitComparisonEntityType["HEADER"], e.UnitComparisonEntityType["FOOTER"], e.UnitComparisonEntityType["DOCUMENT_STYLE"], e.UnitComparisonEntityType["DOCUMENT_SETTING"], e.UnitComparisonEntityType["CUSTOM_DECORATION"], e.UnitComparisonEntityType["DOC_HYPERLINK"], e.UnitComparisonEntityType["DOC_CALLOUT"], e.UnitComparisonEntityType["DOC_QUOTE"], e.UnitComparisonEntityType["DOC_CHART"], e.UnitComparisonEntityType["DOC_CHART_DATA"], e.UnitComparisonEntityType["DOC_CODE"], e.UnitComparisonEntityType["DOC_LATEX"], e.UnitComparisonEntityType["DOC_SHAPE_RESOURCE"], e.UnitComparisonEntityType["DOC_TABLE_RESOURCE"]];
var A = class {
  constructor() {
    k(this, "type", n.UniverInstanceType["UNIVER_DOC"]);
  }
  compare(var_core_value_sig826B) {
    let var_core_value_sigCF89 = (0, e.asRecord)(var_core_value_sig826B.leftData),
      var_core_value_sig00CB = (0, e.asRecord)(var_core_value_sig826B.rightData),
      var_core_value_sig77EE = (0, e.asRecord)(var_core_value_sigCF89 == null ? undefined : var_core_value_sigCF89.body),
      var_core_value_sig9F76 = (0, e.asRecord)(var_core_value_sig00CB == null ? undefined : var_core_value_sig00CB.body),
      [var_core_value_sigB008, var_core_value_sig8721] = N(M(var_core_value_sig77EE), M(var_core_value_sig9F76)),
      var_core_value_sig08BA = ke(var_core_value_sigCF89, var_core_value_sig00CB);
    return {
      items: [...j(var_core_value_sig77EE, var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig8721), ...Ae(var_core_value_sigCF89, var_core_value_sig00CB), ...je(var_core_value_sig826B), ...var_core_value_sig08BA.items],
      supportedEntityTypes: Oe,
      productContext: {
        type: n.UniverInstanceType["UNIVER_DOC"],
        paragraphAlignment: [...H(var_core_value_sigB008, var_core_value_sig8721), ...var_core_value_sig08BA.alignment]
      }
    };
  }
};
function ke(var_core_value_sigB977, var_core_value_sig2949) {
  let var_core_value_sig308A = [],
    var_core_value_sig528D = [];
  for (let var_core_value_sigDBB5 of ["headers", "footers"]) {
    let var_core_value_sig2259 = (0, e.asRecord)(var_core_value_sigB977 == null ? undefined : var_core_value_sigB977[var_core_value_sigDBB5]) ?? {},
      var_core_value_sig9E2F = (0, e.asRecord)(var_core_value_sig2949 == null ? undefined : var_core_value_sig2949[var_core_value_sigDBB5]) ?? {};
    for (let var_core_value_sig1BBD of [...new Set([...Object.keys(var_core_value_sig2259), ...Object.keys(var_core_value_sig9E2F)])].sort()) {
      var var_core_value_sigA309, var_core_value_sig9E20;
      let var_core_value_sig3EEE = (0, e.asRecord)((var_core_value_sigA309 = (0, e.asRecord)(var_core_value_sig2259[var_core_value_sig1BBD])) == null ? undefined : var_core_value_sigA309.body),
        var_core_value_sigBC46 = (0, e.asRecord)((var_core_value_sig9E20 = (0, e.asRecord)(var_core_value_sig9E2F[var_core_value_sig1BBD])) == null ? undefined : var_core_value_sig9E20.body),
        [var_core_value_sig3D7D, var_core_value_sig27E5] = N(M(var_core_value_sig3EEE), M(var_core_value_sigBC46)),
        var_core_value_sig8061 = [var_core_value_sigDBB5, var_core_value_sig1BBD, "body"],
        var_core_value_sig4D4C = var_core_value_sigDBB5 + ":" + var_core_value_sig1BBD;
      for (let var_core_value_sig2AD8 of j(var_core_value_sig3EEE, var_core_value_sigBC46, var_core_value_sig3D7D, var_core_value_sig27E5)) var_core_value_sig308A.push({
        ...var_core_value_sig2AD8,
        id: var_core_value_sig4D4C + ":" + var_core_value_sig2AD8.id,
        parentStableId: var_core_value_sig4D4C,
        path: [...var_core_value_sig8061, ...var_core_value_sig2AD8.path],
        locations: {
          left: var_core_value_sig2AD8.locations["left"] === null ? null : {
            ...var_core_value_sig2AD8.locations["left"],
            parentStableId: var_core_value_sig4D4C,
            path: [...var_core_value_sig8061, ...var_core_value_sig2AD8.locations["left"].path]
          },
          right: var_core_value_sig2AD8.locations["right"] === null ? null : {
            ...var_core_value_sig2AD8.locations["right"],
            parentStableId: var_core_value_sig4D4C,
            path: [...var_core_value_sig8061, ...var_core_value_sig2AD8.locations["right"].path]
          }
        }
      });
      var_core_value_sig528D.push(...H(var_core_value_sig3D7D, var_core_value_sig27E5).map(var_core_value_sig2AD0 => ({
        ...var_core_value_sig2AD0,
        segmentPath: var_core_value_sig8061
      })));
    }
  }
  return {
    items: var_core_value_sig308A,
    alignment: var_core_value_sig528D
  };
}
function j(var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sig218A, var_core_value_sig14CB) {
  return [...V(e.UnitComparisonEntityType["PARAGRAPH"], var_core_value_sig218A, var_core_value_sig14CB), ...V(e.UnitComparisonEntityType["TEXT_STYLE"], P(var_core_value_sig26BB, var_core_value_sig218A), P(var_core_value_sig19B4, var_core_value_sig14CB)), ...V(e.UnitComparisonEntityType["SECTION"], (0, e.arrayComparisonEntries)(var_core_value_sig26BB == null ? undefined : var_core_value_sig26BB.sectionBreaks, "sectionId", (0, e.withoutComparisonKeys)("startIndex")), (0, e.arrayComparisonEntries)(var_core_value_sig19B4 == null ? undefined : var_core_value_sig19B4.sectionBreaks, "sectionId", (0, e.withoutComparisonKeys)("startIndex"))), ...L(e.UnitComparisonEntityType["BLOCK_RANGE"], var_core_value_sig26BB, var_core_value_sig19B4, "blockRanges", "blockId"), ...L(e.UnitComparisonEntityType["CUSTOM_RANGE"], var_core_value_sig26BB, var_core_value_sig19B4, "customRanges", "rangeId"), ...L(e.UnitComparisonEntityType["TABLE_RANGE"], var_core_value_sig26BB, var_core_value_sig19B4, "tables", "tableId"), ...V(e.UnitComparisonEntityType["CUSTOM_BLOCK"], (0, e.arrayComparisonEntries)(var_core_value_sig26BB == null ? undefined : var_core_value_sig26BB.customBlocks, "blockId", (0, e.withoutComparisonKeys)("startIndex")), (0, e.arrayComparisonEntries)(var_core_value_sig19B4 == null ? undefined : var_core_value_sig19B4.customBlocks, "blockId", (0, e.withoutComparisonKeys)("startIndex"))), ...L(e.UnitComparisonEntityType["COLUMN_GROUP"], var_core_value_sig26BB, var_core_value_sig19B4, "columnGroups", "columnGroupId"), ...z(e.UnitComparisonEntityType["CUSTOM_DECORATION"], var_core_value_sig26BB == null ? undefined : var_core_value_sig26BB.customDecorations, var_core_value_sig19B4 == null ? undefined : var_core_value_sig19B4.customDecorations)];
}
function Ae(var_core_value_sigFDEE, var_core_value_sigA676) {
  return [...R(e.UnitComparisonEntityType["TABLE"], var_core_value_sigFDEE == null ? undefined : var_core_value_sigFDEE.tableSource, var_core_value_sigA676 == null ? undefined : var_core_value_sigA676.tableSource), ...R(e.UnitComparisonEntityType["DRAWING"], var_core_value_sigFDEE == null ? undefined : var_core_value_sigFDEE.drawings, var_core_value_sigA676 == null ? undefined : var_core_value_sigA676.drawings), ...R(e.UnitComparisonEntityType["HEADER"], var_core_value_sigFDEE == null ? undefined : var_core_value_sigFDEE.headers, var_core_value_sigA676 == null ? undefined : var_core_value_sigA676.headers, (0, e.withoutComparisonKeys)("body")), ...R(e.UnitComparisonEntityType["FOOTER"], var_core_value_sigFDEE == null ? undefined : var_core_value_sigFDEE.footers, var_core_value_sigA676 == null ? undefined : var_core_value_sigA676.footers, (0, e.withoutComparisonKeys)("body")), ...z(e.UnitComparisonEntityType["DOCUMENT_STYLE"], var_core_value_sigFDEE == null ? undefined : var_core_value_sigFDEE.documentStyle, var_core_value_sigA676 == null ? undefined : var_core_value_sigA676.documentStyle), ...z(e.UnitComparisonEntityType["DOCUMENT_SETTING"], var_core_value_sigFDEE == null ? undefined : var_core_value_sigFDEE.settings, var_core_value_sigA676 == null ? undefined : var_core_value_sigA676.settings)];
}
function je(var_core_value_sigC27E) {
  return [...B(e.UnitComparisonEntityType["DOC_HYPERLINK"], var_core_value_sigC27E, "DOC_HYPER_LINK_PLUGIN", "links"), ...B(e.UnitComparisonEntityType["DOC_CALLOUT"], var_core_value_sigC27E, "DOC_CALLOUT_PLUGIN", "callouts"), ...B(e.UnitComparisonEntityType["DOC_QUOTE"], var_core_value_sigC27E, "DOC_QUOTE_PLUGIN", "quotes"), ...B(e.UnitComparisonEntityType["DOC_CHART"], var_core_value_sigC27E, "DOC_CHART_PLUGIN", "charts"), ...B(e.UnitComparisonEntityType["DOC_CHART_DATA"], var_core_value_sigC27E, "DOC_CHART_PLUGIN", "dataSources"), ...B(e.UnitComparisonEntityType["DOC_CODE"], var_core_value_sigC27E, "DOC_CODE_PLUGIN", "codes"), ...B(e.UnitComparisonEntityType["DOC_LATEX"], var_core_value_sigC27E, "DOC_LATEX_PLUGIN", "formulas"), ...B(e.UnitComparisonEntityType["DOC_SHAPE_RESOURCE"], var_core_value_sigC27E, "DOC_SHAPE_PLUGIN"), ...B(e.UnitComparisonEntityType["DOC_TABLE_RESOURCE"], var_core_value_sigC27E, "DOC_TABLE_PLUGIN", "tables")];
}
function M(var_core_value_sigA70D) {
  let var_core_value_sigCE10 = Array.isArray(var_core_value_sigA70D == null ? undefined : var_core_value_sigA70D.paragraphs) ? var_core_value_sigA70D.paragraphs : [],
    var_core_value_sigA386 = typeof (var_core_value_sigA70D == null ? undefined : var_core_value_sigA70D.dataStream) == "string" ? var_core_value_sigA70D.dataStream : "",
    var_core_value_sigCD82 = [];
  var_core_value_sigCE10.forEach((var_core_value_sigCFAC, var_core_value_sig237B) => {
    let var_core_value_sigFEAB = (0, e.asRecord)(var_core_value_sigCFAC);
    typeof (var_core_value_sigFEAB == null ? undefined : var_core_value_sigFEAB.paragraphId) == "string" && typeof var_core_value_sigFEAB.startIndex == "number" && var_core_value_sigCD82.push({
      paragraph: var_core_value_sigFEAB,
      position: var_core_value_sig237B
    });
  }), var_core_value_sigCD82.sort((var_core_value_sigE347, var_core_value_sig3C5B) => var_core_value_sigE347.paragraph["startIndex"] - var_core_value_sig3C5B.paragraph["startIndex"]);
  let var_core_value_sig44DD = Ne(var_core_value_sigA70D, var_core_value_sigA386, var_core_value_sigCD82);
  return var_core_value_sigCD82.flatMap(({
    paragraph: var_core_value_sig200B,
    position: var_core_value_sig3863
  }, var_core_value_sigC97C) => {
    var var_core_value_sigC4B1;
    let var_core_value_sig1BD9 = var_core_value_sig200B.startIndex;
    if (var_core_value_sigA386[var_core_value_sig1BD9] === "\x00") return [];
    let var_core_value_sigE43E = (var_core_value_sigC4B1 = var_core_value_sigCD82[var_core_value_sigC97C - 1]) == null ? undefined : var_core_value_sigC4B1.paragraph["startIndex"],
      var_core_value_sigA937 = Me(var_core_value_sigA386, (var_core_value_sigE43E ?? -1) + 1, var_core_value_sig1BD9),
      var_core_value_sigCAD5 = var_core_value_sig44DD.get(var_core_value_sig200B.paragraphId) ?? var_core_value_sig200B.paragraphId,
      var_core_value_sigE503 = var_core_value_sigA386.slice(var_core_value_sigA937, var_core_value_sig1BD9);
    return [{
      stableId: var_core_value_sigCAD5,
      nativeStableId: var_core_value_sig200B.paragraphId,
      position: var_core_value_sig3863,
      ...(var_core_value_sigE503.trim() ? {
        displayName: var_core_value_sigE503.trim().slice(0, 72)
      } : {}),
      value: {
        ...(0, e.asRecord)((0, e.withoutComparisonKeys)("paragraphId", "startIndex")(var_core_value_sig200B)),
        text: var_core_value_sigE503
      }
    }];
  });
}
function N(var_core_value_sig96FA, var_core_value_sigAB68) {
  let var_core_value_sig040A = var_core_value_sig48DD => {
      var var_core_value_sig5E6A, var_core_value_sigB7FC;
      return ((var_core_value_sig5E6A = /^(table:.*):row:\d+:cell:\d+:paragraph:\d+$/u.exec(var_core_value_sig48DD.stableId)) == null ? undefined : var_core_value_sig5E6A[1]) ?? ((var_core_value_sigB7FC = /^(column-group:.*):column:\d+:paragraph:\d+$/u.exec(var_core_value_sig48DD.stableId)) == null ? undefined : var_core_value_sigB7FC[1]);
    },
    var_core_value_sig2AE0 = new Set(var_core_value_sig96FA.map(var_core_value_sig9CD9 => var_core_value_sig9CD9.nativeStableId)),
    var_core_value_sigC349 = new Set(var_core_value_sigAB68.map(var_core_value_sigFD0C => var_core_value_sigFD0C.nativeStableId)),
    var_core_value_sig9D96 = new Set([...var_core_value_sig96FA, ...var_core_value_sigAB68].filter(var_core_value_sig849B => var_core_value_sig849B.nativeStableId !== undefined && var_core_value_sig2AE0.has(var_core_value_sig849B.nativeStableId) && var_core_value_sigC349.has(var_core_value_sig849B.nativeStableId)).map(var_core_value_sig040A).filter(var_core_value_sig5F1A => var_core_value_sig5F1A !== undefined)),
    var_core_value_sig2776 = var_core_value_sigB455 => {
      let var_core_value_sig5241 = var_core_value_sig040A(var_core_value_sigB455);
      return var_core_value_sig5241 !== undefined && var_core_value_sig9D96.has(var_core_value_sig5241) && var_core_value_sigB455.nativeStableId !== undefined ? {
        ...var_core_value_sigB455,
        stableId: var_core_value_sigB455.nativeStableId
      } : var_core_value_sigB455;
    };
  return [var_core_value_sig96FA.map(var_core_value_sig2776), var_core_value_sigAB68.map(var_core_value_sig2776)];
}
function P(var_core_value_sig6FB2, var_core_value_sigEB43) {
  let var_core_value_sig4186 = (Array.isArray(var_core_value_sig6FB2 == null ? undefined : var_core_value_sig6FB2.textRuns) ? var_core_value_sig6FB2.textRuns : []).flatMap(var_core_value_sigC6E5 => {
      let var_core_value_sigCEFB = (0, e.asRecord)(var_core_value_sigC6E5);
      return typeof (var_core_value_sigCEFB == null ? undefined : var_core_value_sigCEFB.st) != "number" || typeof var_core_value_sigCEFB.ed != "number" ? [] : [{
        run: var_core_value_sigCEFB,
        start: var_core_value_sigCEFB.st,
        end: var_core_value_sigCEFB.ed
      }];
    }).sort((var_core_value_sig1537, var_core_value_sigE4C6) => var_core_value_sig1537.start - var_core_value_sigE4C6.start || var_core_value_sig1537.end - var_core_value_sigE4C6.end),
    var_core_value_sigF963 = (Array.isArray(var_core_value_sig6FB2 == null ? undefined : var_core_value_sig6FB2.paragraphs) ? var_core_value_sig6FB2.paragraphs : []).map(e.asRecord).flatMap(var_core_value_sig4313 => typeof (var_core_value_sig4313 == null ? undefined : var_core_value_sig4313.paragraphId) == "string" && typeof var_core_value_sig4313.startIndex == "number" ? [{
      nativeStableId: var_core_value_sig4313.paragraphId,
      end: var_core_value_sig4313.startIndex
    }] : []).sort((var_core_value_sigFC87, var_core_value_sig156F) => var_core_value_sigFC87.end - var_core_value_sig156F.end),
    var_core_value_sigB608 = new Map(),
    var_core_value_sigF866 = -1,
    var_core_value_sig5EFB = 0;
  for (let var_core_value_sigDD51 of var_core_value_sigF963) {
    let var_core_value_sigD082 = var_core_value_sigF866 + 1;
    for (; var_core_value_sig5EFB < var_core_value_sig4186.length && var_core_value_sig4186[var_core_value_sig5EFB].end <= var_core_value_sigD082;) var_core_value_sig5EFB += 1;
    let var_core_value_sigDBB7 = [];
    for (let var_core_value_sigF704 = var_core_value_sig5EFB; var_core_value_sigF704 < var_core_value_sig4186.length; var_core_value_sigF704 += 1) {
      let var_core_value_sigC9E0 = var_core_value_sig4186[var_core_value_sigF704];
      if (var_core_value_sigC9E0.start >= var_core_value_sigDD51.end) break;
      var_core_value_sigDBB7.push({
        ...var_core_value_sigC9E0.run,
        st: Math.max(var_core_value_sigC9E0.start, var_core_value_sigD082) - var_core_value_sigD082,
        ed: Math.min(var_core_value_sigC9E0.end, var_core_value_sigDD51.end) - var_core_value_sigD082
      });
    }
    var_core_value_sigB608.set(var_core_value_sigDD51.nativeStableId, var_core_value_sigDBB7), var_core_value_sigF866 = var_core_value_sigDD51.end;
  }
  return var_core_value_sigEB43.map(var_core_value_sigF057 => ({
    ...var_core_value_sigF057,
    value: var_core_value_sigB608.get(var_core_value_sigF057.nativeStableId ?? var_core_value_sigF057.stableId) ?? []
  }));
}
function Me(var_core_value_sig3A85, var_core_value_sig2682, var_core_value_sig4BB5) {
  let var_core_value_sig6709 = var_core_value_sig2682;
  for (; var_core_value_sig6709 < var_core_value_sig4BB5 && De.has(var_core_value_sig3A85[var_core_value_sig6709] ?? "");) var_core_value_sig6709 += 1;
  return var_core_value_sig6709;
}
function Ne(var_core_value_sig52CA, var_core_value_sigC030, var_core_value_sig88F6) {
  let var_core_value_sig37DB = new Map();
  return I(F(var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.tables, "tableId", "table"), var_core_value_sig88F6, var_core_value_sigC030, "table", var_core_value_sig37DB), I(F(var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.columnGroups, "columnGroupId", "column-group"), var_core_value_sig88F6, var_core_value_sigC030, "column", var_core_value_sig37DB), var_core_value_sig37DB;
}
function F(var_core_value_sig5542, var_core_value_sigE0A9, var_core_value_sigA73E) {
  let var_core_value_sig7620 = [];
  return (Array.isArray(var_core_value_sig5542) ? var_core_value_sig5542 : []).forEach((var_core_value_sig72F6, var_core_value_sig9FBA) => {
    let var_core_value_sigFE01 = (0, e.asRecord)(var_core_value_sig72F6);
    typeof (var_core_value_sigFE01 == null ? undefined : var_core_value_sigFE01.startIndex) == "number" && typeof var_core_value_sigFE01.endIndex == "number" && var_core_value_sig7620.push({
      start: var_core_value_sigFE01.startIndex,
      end: var_core_value_sigFE01.endIndex,
      id: typeof var_core_value_sigFE01[var_core_value_sigE0A9] == "string" ? var_core_value_sigFE01[var_core_value_sigE0A9] : var_core_value_sigA73E + "-" + var_core_value_sig9FBA
    });
  }), var_core_value_sig7620.sort((var_core_value_sigA2CE, var_core_value_sig1975) => var_core_value_sigA2CE.start - var_core_value_sig1975.start || var_core_value_sigA2CE.end - var_core_value_sig1975.end);
}
function I(var_core_value_sigB9FC, var_core_value_sig5055, var_core_value_sig3801, var_core_value_sig45F0, var_core_value_sigBC91) {
  let var_core_value_sigCB88 = 0;
  for (let var_core_value_sig6EA1 of var_core_value_sigB9FC) {
    for (; var_core_value_sigCB88 < var_core_value_sig5055.length && var_core_value_sig5055[var_core_value_sigCB88].paragraph["startIndex"] <= var_core_value_sig6EA1.start;) var_core_value_sigCB88 += 1;
    let var_core_value_sigD0A8 = var_core_value_sigCB88,
      var_core_value_sigF4B9 = var_core_value_sig6EA1.start,
      var_core_value_sig5CEE = -1,
      var_core_value_sigE92A = -1,
      var_core_value_sig362B = 0;
    for (; var_core_value_sigD0A8 < var_core_value_sig5055.length;) {
      let var_core_value_sig76BA = var_core_value_sig5055[var_core_value_sigD0A8].paragraph;
      if (var_core_value_sig76BA.startIndex >= var_core_value_sig6EA1.end) break;
      for (; var_core_value_sigF4B9 < var_core_value_sig76BA.startIndex;) {
        let var_core_value_sig7524 = var_core_value_sig3801[var_core_value_sigF4B9];
        var_core_value_sig45F0 === "table" && var_core_value_sig7524 === "\x1b" ? (var_core_value_sig5CEE += 1, var_core_value_sigE92A = -1) : var_core_value_sig45F0 === "table" && var_core_value_sig7524 === "\x1c" ? (var_core_value_sigE92A += 1, var_core_value_sig362B = 0) : var_core_value_sig45F0 === "column" && var_core_value_sig7524 === "\x13" ? (var_core_value_sig5CEE += 1, var_core_value_sig362B = 0) : var_core_value_sig7524 === "\x0d" && (var_core_value_sig362B += 1), var_core_value_sigF4B9 += 1;
      }
      let var_core_value_sigFBFA = Pe(var_core_value_sig45F0, var_core_value_sig5CEE, var_core_value_sigE92A, var_core_value_sig362B);
      var_core_value_sigFBFA !== undefined && !var_core_value_sigBC91.has(var_core_value_sig76BA.paragraphId) && var_core_value_sigBC91.set(var_core_value_sig76BA.paragraphId, (var_core_value_sig45F0 === "table" ? "table" : "column-group") + ":" + var_core_value_sig6EA1.id + ":" + var_core_value_sigFBFA), var_core_value_sigD0A8 += 1;
    }
    var_core_value_sigCB88 = var_core_value_sigD0A8;
  }
}
function Pe(var_core_value_sig8D65, var_core_value_sig8122, var_core_value_sigEDC6, var_core_value_sig611A) {
  return var_core_value_sig8D65 === "table" ? var_core_value_sig8122 < 0 || var_core_value_sigEDC6 < 0 ? undefined : "row:" + var_core_value_sig8122 + ":cell:" + var_core_value_sigEDC6 + ":paragraph:" + var_core_value_sig611A : var_core_value_sig8122 < 0 ? undefined : "column:" + var_core_value_sig8122 + ":paragraph:" + var_core_value_sig611A;
}
function L(var_core_value_sig6BD9, var_core_value_sig7E56, var_core_value_sig4161, var_core_value_sig7580, var_core_value_sig1F18) {
  let var_core_value_sigD5A0 = var_core_value_sig029F => {
    let var_core_value_sig3767 = Array.isArray(var_core_value_sig029F == null ? undefined : var_core_value_sig029F[var_core_value_sig7580]) ? var_core_value_sig029F[var_core_value_sig7580] : [],
      var_core_value_sig670B = typeof (var_core_value_sig029F == null ? undefined : var_core_value_sig029F.dataStream) == "string" ? var_core_value_sig029F.dataStream : "";
    return (0, e.arrayComparisonEntries)(var_core_value_sig3767, var_core_value_sig1F18, (0, e.withoutComparisonKeys)("startIndex", "endIndex")).map(var_core_value_sig5CA5 => {
      let var_core_value_sigE90F = (0, e.asRecord)(var_core_value_sig3767[var_core_value_sig5CA5.position]),
        var_core_value_sigEFD4 = typeof (var_core_value_sigE90F == null ? undefined : var_core_value_sigE90F.startIndex) == "number" && typeof var_core_value_sigE90F.endIndex == "number" ? Fe(var_core_value_sig670B.slice(var_core_value_sigE90F.startIndex, var_core_value_sigE90F.endIndex + 1)) : "";
      return var_core_value_sigEFD4 ? {
        ...var_core_value_sig5CA5,
        displayName: var_core_value_sigEFD4
      } : var_core_value_sig5CA5;
    });
  };
  return V(var_core_value_sig6BD9, var_core_value_sigD5A0(var_core_value_sig7E56), var_core_value_sigD5A0(var_core_value_sig4161));
}
function Fe(var_core_value_sig81B2) {
  let var_core_value_sigA0A5 = "";
  for (let var_core_value_sig6912 of var_core_value_sig81B2) {
    let var_core_value_sig861B = var_core_value_sig6912.codePointAt(0);
    if (var_core_value_sig861B <= 31 || var_core_value_sig861B >= 127 && var_core_value_sig861B <= 159 || /\s/u.test(var_core_value_sig6912) ? var_core_value_sigA0A5 && !var_core_value_sigA0A5.endsWith("\x20") && (var_core_value_sigA0A5 += "\x20") : var_core_value_sigA0A5 += var_core_value_sig6912, var_core_value_sigA0A5.length >= 72) break;
  }
  return var_core_value_sigA0A5.trim();
}
function R(var_core_value_sig10AA, var_core_value_sigE6D0, var_core_value_sig8E91, var_core_value_sig00BE = var_core_value_sig5237 => var_core_value_sig5237) {
  return V(var_core_value_sig10AA, (0, e.recordComparisonEntries)(var_core_value_sigE6D0, undefined, var_core_value_sig00BE), (0, e.recordComparisonEntries)(var_core_value_sig8E91, undefined, var_core_value_sig00BE));
}
function z(var_core_value_sig7BB5, var_core_value_sig6AAD, var_core_value_sig1157) {
  return V(var_core_value_sig7BB5, var_core_value_sig6AAD === undefined ? [] : [{
    stableId: "root",
    position: 0,
    value: var_core_value_sig6AAD
  }], var_core_value_sig1157 === undefined ? [] : [{
    stableId: "root",
    position: 0,
    value: var_core_value_sig1157
  }]);
}
function B(var_core_value_sigA694, var_core_value_sig18E01, var_core_value_sig0428, var_core_value_sigBE07) {
  let var_core_value_sig555F = var_core_value_sigE235 => (0, e.resourceComparisonEntries)(var_core_value_sigE235, var_core_value_sig0428, var_core_value_sigBE07).map(var_core_value_sigBB00 => {
    let var_core_value_sig7E54 = (0, e.asRecord)(var_core_value_sigBB00.value),
      var_core_value_sig9A8D = var_core_value_sigA694 === e.UnitComparisonEntityType["DOC_CODE"] ? var_core_value_sig7E54 == null ? undefined : var_core_value_sig7E54.language : undefined;
    return var_core_value_sigBB00.displayName === undefined && typeof var_core_value_sig9A8D == "string" && var_core_value_sig9A8D.trim() ? {
      ...var_core_value_sigBB00,
      displayName: var_core_value_sig9A8D.trim().slice(0, 72)
    } : var_core_value_sigBB00;
  });
  return V(var_core_value_sigA694, var_core_value_sig555F(var_core_value_sig18E01.leftData), var_core_value_sig555F(var_core_value_sig18E01.rightData));
}
function V(var_core_value_sig3D6F, var_core_value_sig336C, var_core_value_sig6E68) {
  return (0, e.buildSemanticComparisonItems)({
    entityType: var_core_value_sig3D6F,
    left: var_core_value_sig336C,
    right: var_core_value_sig6E68
  });
}
function H(var_core_value_sig8DFE, var_core_value_sig48EA) {
  return (0, e.alignComparisonIdentities)(var_core_value_sig8DFE.map(var_core_value_sig7664 => var_core_value_sig7664.stableId), var_core_value_sig48EA.map(var_core_value_sig2281 => var_core_value_sig2281.stableId)).map(var_core_value_sig5E86 => {
    let var_core_value_sig6998 = var_core_value_sig5E86.leftIndex === null ? undefined : var_core_value_sig8DFE[var_core_value_sig5E86.leftIndex],
      var_core_value_sigF639 = var_core_value_sig5E86.rightIndex === null ? undefined : var_core_value_sig48EA[var_core_value_sig5E86.rightIndex];
    return {
      stableId: (var_core_value_sig6998 ?? var_core_value_sigF639).stableId,
      leftPosition: (var_core_value_sig6998 == null ? undefined : var_core_value_sig6998.position) ?? null,
      rightPosition: (var_core_value_sigF639 == null ? undefined : var_core_value_sigF639.position) ?? null,
      leftNativeStableId: (var_core_value_sig6998 == null ? undefined : var_core_value_sig6998.nativeStableId) ?? null,
      rightNativeStableId: (var_core_value_sigF639 == null ? undefined : var_core_value_sigF639.nativeStableId) ?? null,
      presence: var_core_value_sig6998 === undefined ? "right" : var_core_value_sigF639 === undefined ? "left" : "paired"
    };
  });
}
let U = class extends n.Plugin {
  constructor(var_core_value_sigEAE5 = s, var_core_value_sigE94C, var_core_value_sig6D47) {
    super(), this._config = var_core_value_sigEAE5, this._injector = var_core_value_sigE94C, this._configService = var_core_value_sig6D47;
    let {
      ...var_core_value_sigCB82
    } = (0, n.merge)({}, s, this._config);
    this._configService["setConfig"](o, var_core_value_sigCB82);
  }
  onStarting() {
    (0, n.registerDependencies)(this._injector, [[E], [m], [A]]), this.disposeWithMe(this._injector["get"](e.UnitComparisonAdapterRegistryService).register(this._injector["get"](A))), this._injector["get"](m);
  }
};
k(U, "pluginName", "UNIVER_DOCS_HISTORY_PLUGIN"), k(U, "packageName", c), k(U, "version", l), k(U, "type", n.UniverInstanceType["UNIVER_DOC"]), U = p([(0, n.DependentOn)(t.UniverLicensePlugin, e.UniverEditHistoryPlugin, r.UniverDocsPlugin), f(1, (0, n.Inject)(n.Injector)), f(2, n.IConfigService)], U);
function Ie(var_core_value_sig5E16, var_core_value_sig09F3, var_core_value_sig4592) {
  let var_core_value_sigC5C4 = n.Tools["deepClone"](var_core_value_sig5E16),
    var_core_value_sig1617 = n.Tools["deepClone"](var_core_value_sig09F3),
    var_core_value_sig4169 = ze(var_core_value_sig4592);
  return Je(var_core_value_sigC5C4, var_core_value_sig1617), new Set(var_core_value_sig1617.map(var_core_value_sigCF4E => var_core_value_sigCF4E.anchor["segmentId"])).forEach(var_core_value_sig6CAD => {
    let var_core_value_sig8CF5 = Le(var_core_value_sigC5C4, var_core_value_sig6CAD);
    if (!var_core_value_sig8CF5) return;
    var_core_value_sig8CF5.textRuns ??= [];
    let var_core_value_sigDDD7 = var_core_value_sig1617.filter(var_core_value_sigC259 => var_core_value_sigC259.anchor["segmentId"] === var_core_value_sig6CAD).sort(it),
      var_core_value_sigB2CE = 0;
    var_core_value_sigDDD7.forEach(var_core_value_sig9C9F => {
      var var_core_value_sigFDEA;
      let var_core_value_sig86D0 = $(var_core_value_sig9C9F.anchor["absoluteOffset"] + var_core_value_sigB2CE, 0, var_core_value_sig8CF5.dataStream["length"]),
        var_core_value_sig4CD2 = Math.max(1, var_core_value_sig9C9F.endOffset - var_core_value_sig9C9F.anchor["absoluteOffset"]);
      if (var_core_value_sig9C9F.kind === "delete" && (var_core_value_sigFDEA = var_core_value_sig9C9F.body) != null && var_core_value_sigFDEA.dataStream) {
        let var_core_value_sig2BCF = Re(var_core_value_sig9C9F.body, var_core_value_sig4592);
        n.TextX["apply"](var_core_value_sig8CF5, [{
          t: n.TextXActionType["RETAIN"],
          len: var_core_value_sig86D0
        }, {
          t: n.TextXActionType["INSERT"],
          len: var_core_value_sig2BCF.dataStream["length"],
          body: var_core_value_sig2BCF
        }]), var_core_value_sig9C9F.anchor["absoluteOffset"] = var_core_value_sig86D0, var_core_value_sig9C9F.endOffset = var_core_value_sig86D0 + var_core_value_sig2BCF.dataStream["length"], var_core_value_sigB2CE += var_core_value_sig2BCF.dataStream["length"], Y(var_core_value_sig8CF5, var_core_value_sig9C9F, var_core_value_sig86D0, var_core_value_sig4169.delete);
        return;
      }
      let var_core_value_sig48CA = $(var_core_value_sig86D0 + var_core_value_sig4CD2, var_core_value_sig86D0, var_core_value_sig8CF5.dataStream["length"]);
      if (var_core_value_sig9C9F.category !== "table" && var_core_value_sig9C9F.category !== "block-range" && var_core_value_sig9C9F.category !== "custom-range") {
        let var_core_value_sig0D69 = G(var_core_value_sig9C9F.kind, var_core_value_sig4592);
        W(var_core_value_sig8CF5, var_core_value_sig86D0, var_core_value_sig48CA, var_core_value_sig0D69);
      }
      Y(var_core_value_sig8CF5, var_core_value_sig9C9F, var_core_value_sig86D0, Be(var_core_value_sig9C9F.kind, var_core_value_sig4169)), var_core_value_sig9C9F.anchor["absoluteOffset"] = var_core_value_sig86D0, var_core_value_sig9C9F.endOffset = var_core_value_sig48CA;
    });
  }), Ge(var_core_value_sigC5C4, var_core_value_sig1617, var_core_value_sig4592), Qe(var_core_value_sigC5C4, var_core_value_sig1617, var_core_value_sig4592), {
    snapshot: var_core_value_sigC5C4,
    changes: var_core_value_sig1617
  };
}
function Le(var_core_value_sig6D19, var_core_value_sig279C) {
  var var_core_value_sigAC51, var_core_value_sig8986;
  return var_core_value_sig279C ? ((var_core_value_sigAC51 = var_core_value_sig6D19.headers) == null || (var_core_value_sigAC51 = var_core_value_sigAC51[var_core_value_sig279C]) == null ? undefined : var_core_value_sigAC51.body) ?? ((var_core_value_sig8986 = var_core_value_sig6D19.footers) == null || (var_core_value_sig8986 = var_core_value_sig8986[var_core_value_sig279C]) == null ? undefined : var_core_value_sig8986.body) : var_core_value_sig6D19.body;
}
function Re(var_core_value_sigCAF7, var_core_value_sigED1C) {
  let var_core_value_sig726E = n.Tools["deepClone"](var_core_value_sigCAF7),
    var_core_value_sig2CD3 = var_core_value_sig726E.dataStream["length"];
  return var_core_value_sig726E.textRuns = [...(var_core_value_sig726E.textRuns ?? []), {
    st: 0,
    ed: var_core_value_sig2CD3,
    ts: G("delete", var_core_value_sigED1C)
  }], var_core_value_sig726E;
}
function W(var_core_value_sig038E, var_core_value_sigAA1E, var_core_value_sigC9F5, var_core_value_sig7EEA) {
  let var_core_value_sig59CE = var_core_value_sigC9F5 - var_core_value_sigAA1E;
  var_core_value_sig59CE <= 0 || n.TextX["apply"](var_core_value_sig038E, [{
    t: n.TextXActionType["RETAIN"],
    len: var_core_value_sigAA1E
  }, {
    t: n.TextXActionType["RETAIN"],
    len: var_core_value_sig59CE,
    body: {
      dataStream: "",
      textRuns: [{
        st: 0,
        ed: var_core_value_sig59CE,
        ts: var_core_value_sig7EEA
      }]
    }
  }]);
}
function G(var_core_value_sig33C8, var_core_value_sig957F) {
  return var_core_value_sig33C8 === "delete" ? {
    bg: {
      rgb: var_core_value_sig957F.delete["fill"]
    },
    st: K(var_core_value_sig957F.delete["stroke"])
  } : var_core_value_sig33C8 === "insert" ? {
    bg: {
      rgb: var_core_value_sig957F.insert["fill"]
    },
    ul: K(var_core_value_sig957F.insert["stroke"])
  } : {
    bg: {
      rgb: var_core_value_sig957F.update["fill"]
    },
    ol: K(var_core_value_sig957F.update["stroke"])
  };
}
function K(var_core_value_sig803B) {
  return {
    s: n.BooleanNumber["TRUE"],
    c: n.BooleanNumber["FALSE"],
    cl: {
      rgb: var_core_value_sig803B
    },
    t: n.TextDecoration["SINGLE"]
  };
}
function q(var_core_value_sig5830, var_core_value_sig4A7C) {
  return var_core_value_sig5830 === "delete" ? var_core_value_sig4A7C.delete["fill"] : var_core_value_sig5830 === "insert" ? var_core_value_sig4A7C.insert["fill"] : var_core_value_sig4A7C.update["fill"];
}
function ze(var_core_value_sigF975) {
  return {
    insert: J(var_core_value_sigF975.insert["stroke"]),
    delete: J(var_core_value_sigF975.delete["stroke"]),
    update: J(var_core_value_sigF975.update["stroke"])
  };
}
function J(var_core_value_sigCDAF) {
  return new n["ColorKit"](var_core_value_sigCDAF).setAlpha(0.12).toRgbString();
}
function Be(var_core_value_sigA298, var_core_value_sig0B40) {
  return var_core_value_sigA298 === "insert" ? var_core_value_sig0B40.insert : var_core_value_sigA298 === "delete" ? var_core_value_sig0B40.delete : var_core_value_sig0B40.update;
}
function Y(var_core_value_sig330B, var_core_value_sig3625, var_core_value_sig0B4E, var_core_value_sig0E9F) {
  var_core_value_sig3625.category !== "text" || !var_core_value_sig3625.text || !Ve(var_core_value_sig3625.text) || [...var_core_value_sig3625.text].forEach((var_core_value_sig443C, var_core_value_sig39B1) => {
    var_core_value_sig443C === "\x0d" && He(var_core_value_sig330B, var_core_value_sig0B4E + var_core_value_sig39B1, var_core_value_sig0E9F);
  });
}
function Ve(var_core_value_sigE5BA) {
  return [...var_core_value_sigE5BA].every(var_core_value_sig210D => var_core_value_sig210D === "\x0d");
}
function He(var_core_value_sig4A83, var_core_value_sig58AA, var_core_value_sig84C4) {
  let var_core_value_sigB6F7 = var_core_value_sig4A83.paragraphs ?? [],
    var_core_value_sigB495 = var_core_value_sigB6F7.findIndex(var_core_value_sigB4B4 => var_core_value_sigB4B4.startIndex === var_core_value_sig58AA);
  if (var_core_value_sigB495 < 0) return;
  let var_core_value_sig70D0 = [var_core_value_sigB6F7[var_core_value_sigB495 + 1], var_core_value_sigB6F7[var_core_value_sigB495]].find(var_core_value_sigD407 => var_core_value_sigD407 ? Ue(var_core_value_sigB6F7, var_core_value_sigD407) : false);
  var_core_value_sig70D0 && (var_core_value_sig70D0.paragraphStyle = {
    ...var_core_value_sig70D0.paragraphStyle,
    shading: {
      backgroundColor: {
        rgb: var_core_value_sig84C4
      }
    }
  });
}
function Ue(var_core_value_sig2A8A, var_core_value_sig3782) {
  let var_core_value_sigD22E = var_core_value_sig2A8A.indexOf(var_core_value_sig3782);
  return (var_core_value_sigD22E > 0 ? var_core_value_sig2A8A[var_core_value_sigD22E - 1].startIndex + 1 : 0) === var_core_value_sig3782.startIndex;
}
function We(var_core_value_sig3455, var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395) {
  let var_core_value_sig9FA0 = var_core_value_sig3455.paragraphs ?? [],
    var_core_value_sig055E = 0;
  var_core_value_sig9FA0.forEach(var_core_value_sig63F3 => {
    let var_core_value_sig6A71 = var_core_value_sig63F3.startIndex + 1;
    var_core_value_sig055E < var_core_value_sig43D5 && var_core_value_sig6A71 > var_core_value_sig5CEF && (var_core_value_sig63F3.paragraphStyle = {
      ...var_core_value_sig63F3.paragraphStyle,
      shading: {
        backgroundColor: {
          rgb: var_core_value_sig1395
        }
      }
    }), var_core_value_sig055E = var_core_value_sig6A71;
  });
}
function Ge(var_core_value_sig7C77, var_core_value_sig9578, var_core_value_sigA2D3) {
  var_core_value_sig9578.forEach(var_core_value_sig3BF6 => {
    var var_core_value_sig38CE;
    if (var_core_value_sig3BF6.category !== "block-range" && var_core_value_sig3BF6.category !== "custom-range") return;
    let var_core_value_sig62B7 = (var_core_value_sig38CE = Z(var_core_value_sig7C77, var_core_value_sig3BF6.anchor["segmentId"])) == null ? undefined : var_core_value_sig38CE.body;
    if (!var_core_value_sig62B7) return;
    let var_core_value_sig37A8 = Ke(var_core_value_sig62B7, var_core_value_sig3BF6);
    if (!var_core_value_sig37A8) return;
    let var_core_value_sigA90D = $(var_core_value_sig37A8.startIndex, 0, var_core_value_sig62B7.dataStream["length"]),
      var_core_value_sig7A3C = $(var_core_value_sig37A8.endIndex + 1, var_core_value_sigA90D, var_core_value_sig62B7.dataStream["length"]),
      var_core_value_sig0511 = q(var_core_value_sig3BF6.kind, var_core_value_sigA2D3);
    W(var_core_value_sig62B7, var_core_value_sigA90D, var_core_value_sig7A3C, G(var_core_value_sig3BF6.kind, var_core_value_sigA2D3)), var_core_value_sig3BF6.category === "block-range" && We(var_core_value_sig62B7, var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511), var_core_value_sig3BF6.anchor["absoluteOffset"] = var_core_value_sigA90D, var_core_value_sig3BF6.endOffset = var_core_value_sig7A3C;
  });
}
function Ke(var_core_value_sigC218, var_core_value_sigADEC) {
  var var_core_value_sig3D8E, var_core_value_sig37E5;
  let var_core_value_sigF079 = qe(var_core_value_sigADEC) ?? -1;
  if (var_core_value_sigADEC.category === "block-range") {
    var var_core_value_sigFCA0, var_core_value_sigC84D;
    return ((var_core_value_sigFCA0 = var_core_value_sigC218.blockRanges) == null ? undefined : var_core_value_sigFCA0.find(var_core_value_sig50AF => var_core_value_sig50AF.blockId === var_core_value_sigADEC.blockId)) ?? ((var_core_value_sigC84D = var_core_value_sigC218.blockRanges) == null ? undefined : var_core_value_sigC84D[var_core_value_sigF079]);
  }
  return ((var_core_value_sig3D8E = var_core_value_sigC218.customRanges) == null ? undefined : var_core_value_sig3D8E.find(var_core_value_sig1F44 => var_core_value_sig1F44.rangeId === var_core_value_sigADEC.rangeId)) ?? ((var_core_value_sig37E5 = var_core_value_sigC218.customRanges) == null ? undefined : var_core_value_sig37E5[var_core_value_sigF079]);
}
function qe(var_core_value_sigF2BC) {
  var var_core_value_sigD37B, var_core_value_sigFA28;
  let var_core_value_sig93BE = var_core_value_sigF2BC.category === "block-range" ? "blockRanges" : "customRanges",
    var_core_value_sigABEC = ((var_core_value_sigD37B = var_core_value_sigF2BC.structuralPath) == null ? undefined : var_core_value_sigD37B.indexOf(var_core_value_sig93BE)) ?? -1;
  if (var_core_value_sigABEC < 0) return;
  let var_core_value_sig2712 = (var_core_value_sigFA28 = var_core_value_sigF2BC.structuralPath) == null ? undefined : var_core_value_sigFA28[var_core_value_sigABEC + 1];
  return typeof var_core_value_sig2712 == "number" ? var_core_value_sig2712 : undefined;
}
function Je(var_core_value_sig0B9E, var_core_value_sigC545) {
  var_core_value_sigC545.forEach(var_core_value_sigCB04 => {
    var var_core_value_sig947E;
    if (var_core_value_sigCB04.category !== "table" || !var_core_value_sigCB04.tableId) return;
    let var_core_value_sig4545 = Z(var_core_value_sig0B9E, var_core_value_sigCB04.anchor["segmentId"]);
    var_core_value_sig4545 && ((var_core_value_sig947E = var_core_value_sigCB04.tableEdits) == null || var_core_value_sig947E.forEach(var_core_value_sigA942 => {
      var_core_value_sigA942.nextValue === undefined && var_core_value_sigA942.previousValue !== undefined && Ye(var_core_value_sig4545, var_core_value_sigCB04, var_core_value_sigA942.path, var_core_value_sigA942.previousValue);
    }));
  });
}
function Ye(var_core_value_sig12A7, var_core_value_sig6F4E, var_core_value_sigA021, var_core_value_sig49D9) {
  var var_core_value_sig320C;
  let var_core_value_sigE7F0 = var_core_value_sigA021.indexOf("tableSource"),
    var_core_value_sigE837 = var_core_value_sigE7F0 >= 0 ? var_core_value_sigA021[var_core_value_sigE7F0 + 1] : undefined;
  if (typeof var_core_value_sigE837 != "string") return;
  let var_core_value_sig34F4 = var_core_value_sigA021.slice(var_core_value_sigE7F0 + 2);
  if (var_core_value_sig34F4.length === 0 && et(var_core_value_sig49D9)) {
    var_core_value_sig12A7.tableSource ??= {};
    let var_core_value_sigF39A = var_core_value_sig12A7.tableSource[var_core_value_sigE837] ? var_core_value_sigE837 + "-history-" + var_core_value_sig6F4E.id : var_core_value_sigE837;
    var_core_value_sig12A7.tableSource[var_core_value_sigF39A] = {
      ...var_core_value_sig49D9,
      tableId: var_core_value_sigF39A
    }, X(var_core_value_sig6F4E, var_core_value_sigE837, var_core_value_sigF39A);
    return;
  }
  let var_core_value_sigA45D = (var_core_value_sig320C = var_core_value_sig12A7.tableSource) == null ? undefined : var_core_value_sig320C[var_core_value_sigE837];
  if (var_core_value_sigA45D) {
    if (var_core_value_sig34F4[0] === "tableRows") {
      Xe(var_core_value_sigA45D, var_core_value_sig34F4, var_core_value_sig49D9);
      return;
    }
    var_core_value_sig34F4[0] === "tableColumns" && Ze(var_core_value_sigA45D, var_core_value_sig34F4, var_core_value_sig49D9);
  }
}
function Xe(var_core_value_sig1BC7, var_core_value_sig4956, var_core_value_sigCC9E) {
  let var_core_value_sig444C = var_core_value_sig4956[1];
  if (typeof var_core_value_sig444C != "number") return;
  if (var_core_value_sig4956.length === 2 && tt(var_core_value_sigCC9E)) {
    var_core_value_sig1BC7.tableRows["splice"](var_core_value_sig444C, 0, var_core_value_sigCC9E);
    return;
  }
  let var_core_value_sigE42E = var_core_value_sig4956[3];
  if (var_core_value_sig4956.length === 4 && var_core_value_sig4956[2] === "tableCells" && typeof var_core_value_sigE42E == "number" && rt(var_core_value_sigCC9E)) {
    var var_core_value_sigF039;
    (var_core_value_sigF039 = var_core_value_sig1BC7.tableRows[var_core_value_sig444C]) == null || var_core_value_sigF039.tableCells["splice"](var_core_value_sigE42E, 0, var_core_value_sigCC9E);
  }
}
function Ze(var_core_value_sigA321, var_core_value_sigBF4C, var_core_value_sig3457) {
  let var_core_value_sig4A08 = var_core_value_sigBF4C[1];
  var_core_value_sigBF4C.length === 2 && typeof var_core_value_sig4A08 == "number" && nt(var_core_value_sig3457) && var_core_value_sigA321.tableColumns["splice"](var_core_value_sig4A08, 0, var_core_value_sig3457);
}
function X(var_core_value_sig1BC4, var_core_value_sig9EAB, var_core_value_sigA5C3) {
  var var_core_value_sig3A1E;
  var_core_value_sigA5C3 !== var_core_value_sig9EAB && (var_core_value_sig1BC4.tableId = var_core_value_sigA5C3, (var_core_value_sig3A1E = var_core_value_sig1BC4.body) == null || (var_core_value_sig3A1E = var_core_value_sig3A1E.tables) == null || var_core_value_sig3A1E.forEach(var_core_value_sigF79C => {
    var_core_value_sigF79C.tableId === var_core_value_sig9EAB && (var_core_value_sigF79C.tableId = var_core_value_sigA5C3);
  }));
}
function Qe(var_core_value_sigDC92, var_core_value_sig3515, var_core_value_sigC2A0) {
  var_core_value_sig3515.forEach(var_core_value_sig2E54 => {
    var var_core_value_sig7658, var_core_value_sigDCF5;
    if (var_core_value_sig2E54.category !== "table" || !var_core_value_sig2E54.tableId) return;
    let var_core_value_sigC786 = Z(var_core_value_sigDC92, var_core_value_sig2E54.anchor["segmentId"]),
      var_core_value_sigC0D9 = var_core_value_sigC786 == null || (var_core_value_sig7658 = var_core_value_sigC786.tableSource) == null ? undefined : var_core_value_sig7658[var_core_value_sig2E54.tableId],
      var_core_value_sigF0511 = var_core_value_sigC786 == null || (var_core_value_sigDCF5 = var_core_value_sigC786.body) == null || (var_core_value_sigDCF5 = var_core_value_sigDCF5.tables) == null ? undefined : var_core_value_sigDCF5.find(var_core_value_sigA621 => var_core_value_sigA621.tableId === var_core_value_sig2E54.tableId);
    !var_core_value_sigC0D9 || !var_core_value_sigF0511 || (var_core_value_sig2E54.anchor["absoluteOffset"] = var_core_value_sigF0511.startIndex, var_core_value_sig2E54.endOffset = var_core_value_sigF0511.endIndex, $e(var_core_value_sigC0D9, var_core_value_sig2E54).forEach(var_core_value_sigBBFF => {
      var_core_value_sigBBFF.backgroundColor = {
        rgb: q(var_core_value_sig2E54.kind, var_core_value_sigC2A0)
      };
    }));
  });
}
function $e(var_core_value_sig7C65, var_core_value_sig7F05) {
  var var_core_value_sig41F3, var_core_value_sigF455, var_core_value_sig6E78, var_core_value_sigB3EE, var_core_value_sigC50A, var_core_value_sig11D0;
  if (!((var_core_value_sig41F3 = var_core_value_sig7F05.tableRows) != null && var_core_value_sig41F3.length || (var_core_value_sigF455 = var_core_value_sig7F05.tableColumns) != null && var_core_value_sigF455.length || (var_core_value_sig6E78 = var_core_value_sig7F05.tableCells) != null && var_core_value_sig6E78.length)) return var_core_value_sig7C65.tableRows["flatMap"](var_core_value_sig5825 => var_core_value_sig5825.tableCells);
  let var_core_value_sigB8ED = new Set();
  return (var_core_value_sigB3EE = var_core_value_sig7F05.tableRows) == null || var_core_value_sigB3EE.forEach(var_core_value_sig4EB7 => {
    var var_core_value_sig73AF;
    return (var_core_value_sig73AF = var_core_value_sig7C65.tableRows[var_core_value_sig4EB7]) == null ? undefined : var_core_value_sig73AF.tableCells["forEach"](var_core_value_sig8889 => var_core_value_sigB8ED.add(var_core_value_sig8889));
  }), (var_core_value_sigC50A = var_core_value_sig7F05.tableColumns) == null || var_core_value_sigC50A.forEach(var_core_value_sig548A => {
    var_core_value_sig7C65.tableRows["forEach"](var_core_value_sig32F8 => {
      let var_core_value_sig5B67 = var_core_value_sig32F8.tableCells[var_core_value_sig548A];
      var_core_value_sig5B67 && var_core_value_sigB8ED.add(var_core_value_sig5B67);
    });
  }), (var_core_value_sig11D0 = var_core_value_sig7F05.tableCells) == null || var_core_value_sig11D0.forEach(({
    row: var_core_value_sigE026,
    column: var_core_value_sig339E
  }) => {
    var var_core_value_sig7550;
    let var_core_value_sig2983 = (var_core_value_sig7550 = var_core_value_sig7C65.tableRows[var_core_value_sigE026]) == null ? undefined : var_core_value_sig7550.tableCells[var_core_value_sig339E];
    var_core_value_sig2983 && var_core_value_sigB8ED.add(var_core_value_sig2983);
  }), [...var_core_value_sigB8ED];
}
function Z(var_core_value_sig8EAE, var_core_value_sig1CDD) {
  var var_core_value_sig0DB1, var_core_value_sig68A2;
  return var_core_value_sig1CDD ? ((var_core_value_sig0DB1 = var_core_value_sig8EAE.headers) == null ? undefined : var_core_value_sig0DB1[var_core_value_sig1CDD]) ?? ((var_core_value_sig68A2 = var_core_value_sig8EAE.footers) == null ? undefined : var_core_value_sig68A2[var_core_value_sig1CDD]) : var_core_value_sig8EAE;
}
function et(var_core_value_sigCC17) {
  return Q(var_core_value_sigCC17) && typeof Reflect.get(var_core_value_sigCC17, "tableId") == "string" && Array.isArray(Reflect.get(var_core_value_sigCC17, "tableRows")) && Array.isArray(Reflect.get(var_core_value_sigCC17, "tableColumns"));
}
function tt(var_core_value_sig32AE) {
  return Q(var_core_value_sig32AE) && Array.isArray(Reflect.get(var_core_value_sig32AE, "tableCells"));
}
function nt(var_core_value_sigC753) {
  return Q(var_core_value_sigC753) && Q(Reflect.get(var_core_value_sigC753, "size"));
}
function rt(var_core_value_sigFFD1) {
  return Q(var_core_value_sigFFD1);
}
function Q(var_core_value_sig81AE) {
  return typeof var_core_value_sig81AE == "object" && !!var_core_value_sig81AE && !Array.isArray(var_core_value_sig81AE);
}
function it(var_core_value_sigF79F, var_core_value_sig0E54) {
  return var_core_value_sigF79F.anchor["absoluteOffset"] === var_core_value_sig0E54.anchor["absoluteOffset"] ? var_core_value_sigF79F.kind === "delete" && var_core_value_sig0E54.kind !== "delete" ? -1 : var_core_value_sig0E54.kind === "delete" && var_core_value_sigF79F.kind !== "delete" ? 1 : var_core_value_sigF79F.id["localeCompare"](var_core_value_sig0E54.id) : var_core_value_sigF79F.anchor["absoluteOffset"] - var_core_value_sig0E54.anchor["absoluteOffset"];
}
function $(var_core_value_sig3B17, var_core_value_sig6C4A, var_core_value_sig73D9) {
  return Math.max(var_core_value_sig6C4A, Math.min(var_core_value_sig3B17, var_core_value_sig73D9));
}
exports.DOCS_HISTORY_PLUGIN_CONFIG_KEY = o, Object.defineProperty(exports, "DocsHistoryDiffService", {
  enumerable: true,
  get: function () {
    return E;
  }
}), exports.DocsUnitComparisonAdapter = A, Object.defineProperty(exports, "UniverDocsHistoryPlugin", {
  enumerable: true,
  get: function () {
    return U;
  }
}), exports.createDocHistoryDisplay = Ie, exports.resolveDocHistoryAnchors = oe;
