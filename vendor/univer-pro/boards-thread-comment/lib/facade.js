import { FBoard as var_core_value_sig0D69 } from "@univerjs-pro/boards/facade";
import * as var_core_value_sig480E from "@univerjs/thread-comment";
var n = class extends var_core_value_sig0D69 {
  _initialize(var_core_value_sigBC46) {
    let var_core_value_sig3D7D;
    Object.defineProperty(this, "_threadCommentService", {
      get: () => var_core_value_sig3D7D ??= var_core_value_sigBC46.get(var_core_value_sig480E.ThreadCommentFacadeService)
    });
  }
  createElementCommentAsync(var_core_value_sig27E5, var_core_value_sig8061, var_core_value_sig4D4C = {}) {
    if (!this._boardModel["getActivePage"]().elements[var_core_value_sig27E5]) throw Error('Board element "' + var_core_value_sig27E5 + '" was not found.');
    let var_core_value_sigC9E0 = this._boardModel["getActivePageId"]();
    return this._threadCommentService["createCommentAsync"]({
      ...var_core_value_sig4D4C,
      unitId: this._boardModel["getUnitId"](),
      subUnitId: var_core_value_sigC9E0,
      anchor: {
        kind: var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        pageId: var_core_value_sigC9E0,
        elementId: var_core_value_sig27E5
      },
      content: var_core_value_sig8061
    });
  }
  createPositionCommentAsync(var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigF602 = {}) {
    if (!Number.isFinite(var_core_value_sig76BA.x) || !Number.isFinite(var_core_value_sig76BA.y)) throw TypeError("Board comment position must contain finite x and y values.");
    let var_core_value_sig1BBD = this._boardModel["getActivePageId"]();
    return this._threadCommentService["createCommentAsync"]({
      ...var_core_value_sigF602,
      unitId: this._boardModel["getUnitId"](),
      subUnitId: var_core_value_sig1BBD,
      anchor: {
        kind: var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_POSITION"],
        pageId: var_core_value_sig1BBD,
        ...var_core_value_sig76BA
      },
      content: var_core_value_sigFBFA
    });
  }
  getElementComments(var_core_value_sigF704) {
    return this._threadCommentService["getComments"]({
      unitIds: [this._boardModel["getUnitId"]()],
      subUnitIds: [this._boardModel["getActivePageId"]()],
      anchorKinds: [var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_ELEMENT"]]
    }).filter(var_core_value_sig7524 => {
      var var_core_value_sig2AD8;
      return ((var_core_value_sig2AD8 = var_core_value_sig7524.anchor) == null ? undefined : var_core_value_sig2AD8.kind) === var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_ELEMENT"] && var_core_value_sig7524.anchor["elementId"] === var_core_value_sigF704;
    });
  }
  async listElementCommentsAsync(var_core_value_sig2BCF) {
    return (await this._threadCommentService["listCommentsAsync"]({
      unitIds: [this._boardModel["getUnitId"]()],
      subUnitIds: [this._boardModel["getActivePageId"]()],
      anchorKinds: [var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_ELEMENT"]]
    })).filter(var_core_value_sig2AD0 => {
      var var_core_value_sig3EEE;
      return ((var_core_value_sig3EEE = var_core_value_sig2AD0.anchor) == null ? undefined : var_core_value_sig3EEE.kind) === var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_ELEMENT"] && var_core_value_sig2AD0.anchor["elementId"] === var_core_value_sig2BCF;
    });
  }
  getComments() {
    return this._threadCommentService["getComments"]({
      unitIds: [this._boardModel["getUnitId"]()],
      anchorKinds: [var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_ELEMENT"], var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_POSITION"]]
    });
  }
  listCommentsAsync() {
    return this._threadCommentService["listCommentsAsync"]({
      unitIds: [this._boardModel["getUnitId"]()],
      anchorKinds: [var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_ELEMENT"], var_core_value_sig480E.ThreadCommentAnchorKind["BOARD_POSITION"]]
    });
  }
};
var_core_value_sig0D69.extend(n);
export { n as FBoardThreadCommentMixin };
