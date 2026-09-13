Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype["hasOwnProperty"],
  o = (var_core_value_sigF0F9, var_core_value_sig1A0F, var_core_value_sigFBA4, var_core_value_sig4383) => {
    if (var_core_value_sig1A0F && typeof var_core_value_sig1A0F == "object" || typeof var_core_value_sig1A0F == "function") {
      for (var var_core_value_sig186C = r(var_core_value_sig1A0F), var_core_value_sigD955 = 0, var_core_value_sig48BD = var_core_value_sig186C.length, var_core_value_sig429F; var_core_value_sigD955 < var_core_value_sig48BD; var_core_value_sigD955++) var_core_value_sig429F = var_core_value_sig186C[var_core_value_sigD955], !a.call(var_core_value_sigF0F9, var_core_value_sig429F) && var_core_value_sig429F !== var_core_value_sigFBA4 && t(var_core_value_sigF0F9, var_core_value_sig429F, {
        get: (var_core_value_sig7524 => var_core_value_sig1A0F[var_core_value_sig7524]).bind(null, var_core_value_sig429F),
        enumerable: !(var_core_value_sig4383 = n(var_core_value_sig1A0F, var_core_value_sig429F)) || var_core_value_sig4383.enumerable
      });
    }
    return var_core_value_sigF0F9;
  },
  s = (var_core_value_sigF62A, var_core_value_sig8178, var_core_value_sigE9ED) => (var_core_value_sigE9ED = var_core_value_sigF62A == null ? {} : e(i(var_core_value_sigF62A)), o(var_core_value_sig8178 || !var_core_value_sigF62A || !var_core_value_sigF62A.__esModule ? t(var_core_value_sigE9ED, "default", {
    value: var_core_value_sigF62A,
    enumerable: true
  }) : var_core_value_sigE9ED, var_core_value_sigF62A));
let c = require("@univerjs-pro/boards/facade"),
  l = require("@univerjs/thread-comment");
l = s(l);
var u = class extends c.FBoard {
  _initialize(var_core_value_sig8061) {
    let var_core_value_sig4D4C;
    Object.defineProperty(this, "_threadCommentService", {
      get: () => var_core_value_sig4D4C ??= var_core_value_sig8061.get(l.ThreadCommentFacadeService)
    });
  }
  createElementCommentAsync(var_core_value_sigC9E0, var_core_value_sig76BA, var_core_value_sigFBFA = {}) {
    if (!this._boardModel["getActivePage"]().elements[var_core_value_sigC9E0]) throw Error('Board element "' + var_core_value_sigC9E0 + '" was not found.');
    let var_core_value_sigF602 = this._boardModel["getActivePageId"]();
    return this._threadCommentService["createCommentAsync"]({
      ...var_core_value_sigFBFA,
      unitId: this._boardModel["getUnitId"](),
      subUnitId: var_core_value_sigF602,
      anchor: {
        kind: l.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        pageId: var_core_value_sigF602,
        elementId: var_core_value_sigC9E0
      },
      content: var_core_value_sig76BA
    });
  }
  createPositionCommentAsync(var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig2BCF = {}) {
    if (!Number.isFinite(var_core_value_sig1BBD.x) || !Number.isFinite(var_core_value_sig1BBD.y)) throw TypeError("Board comment position must contain finite x and y values.");
    let var_core_value_sig0D69 = this._boardModel["getActivePageId"]();
    return this._threadCommentService["createCommentAsync"]({
      ...var_core_value_sig2BCF,
      unitId: this._boardModel["getUnitId"](),
      subUnitId: var_core_value_sig0D69,
      anchor: {
        kind: l.ThreadCommentAnchorKind["BOARD_POSITION"],
        pageId: var_core_value_sig0D69,
        ...var_core_value_sig1BBD
      },
      content: var_core_value_sigF704
    });
  }
  getElementComments(var_core_value_sig480E) {
    return this._threadCommentService["getComments"]({
      unitIds: [this._boardModel["getUnitId"]()],
      subUnitIds: [this._boardModel["getActivePageId"]()],
      anchorKinds: [l.ThreadCommentAnchorKind["BOARD_ELEMENT"]]
    }).filter(var_core_value_sig2AD8 => {
      var var_core_value_sig2AD0 = ox1d4676,
        var_core_value_sig3EEE;
      return ((var_core_value_sig3EEE = var_core_value_sig2AD8[var_core_value_sig2AD0(197)]) == null ? undefined : var_core_value_sig3EEE[var_core_value_sig2AD0(218)]) === l[var_core_value_sig2AD0(244)][var_core_value_sig2AD0(242)] && var_core_value_sig2AD8[var_core_value_sig2AD0(197)][var_core_value_sig2AD0(224)] === var_core_value_sig480E;
    });
  }
  async listElementCommentsAsync(var_core_value_sig26DB) {
    return (await this._threadCommentService["listCommentsAsync"]({
      unitIds: [this._boardModel["getUnitId"]()],
      subUnitIds: [this._boardModel["getActivePageId"]()],
      anchorKinds: [l.ThreadCommentAnchorKind["BOARD_ELEMENT"]]
    })).filter(var_core_value_sigBC46 => {
      var var_core_value_sig3D7D = ox368104,
        var_core_value_sig27E5;
      return ((var_core_value_sig27E5 = var_core_value_sigBC46[var_core_value_sig3D7D(197)]) == null ? undefined : var_core_value_sig27E5[var_core_value_sig3D7D(218)]) === l[var_core_value_sig3D7D(244)].BOARD_ELEMENT && var_core_value_sigBC46[var_core_value_sig3D7D(197)][var_core_value_sig3D7D(224)] === var_core_value_sig26DB;
    });
  }
  getComments() {
    return this._threadCommentService["getComments"]({
      unitIds: [this._boardModel["getUnitId"]()],
      anchorKinds: [l.ThreadCommentAnchorKind["BOARD_ELEMENT"], l.ThreadCommentAnchorKind["BOARD_POSITION"]]
    });
  }
  listCommentsAsync() {
    return this._threadCommentService["listCommentsAsync"]({
      unitIds: [this._boardModel["getUnitId"]()],
      anchorKinds: [l.ThreadCommentAnchorKind["BOARD_ELEMENT"], l.ThreadCommentAnchorKind["BOARD_POSITION"]]
    });
  }
};
c.FBoard["extend"](u), exports.FBoardThreadCommentMixin = u;
