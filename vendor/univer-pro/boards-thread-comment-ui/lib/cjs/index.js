Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/boards-ui"),
  n = require("@univerjs/core"),
  r = require("@univerjs/protocol"),
  i = require("@univerjs/thread-comment"),
  a = require("@univerjs/thread-comment-ui"),
  o = require("@univerjs/ui"),
  s = require("@univerjs-pro/boards-thread-comment"),
  c = require("@univerjs-pro/license"),
  l = require("@univerjs/engine-render"),
  u = require("@univerjs/icons"),
  d = require("react"),
  f = require("rxjs"),
  p = require("react/jsx-runtime");
const m = "univer.board.thread-comment-panel";
function h(var_core_value_sig9A0D) {
  let var_core_value_sigA319 = var_core_value_sig9A0D.get(a.ThreadCommentPanelService);
  var_core_value_sig9A0D.get(o.ISidebarService).open({
    header: {
      title: "boards-thread-comment-ui.addComment"
    },
    children: {
      label: m
    },
    width: 320,
    onClose: () => var_core_value_sigA319.setPanelVisible(false)
  }), var_core_value_sigA319.setPanelVisible(true);
}
const g = {
    id: "board.operation.open-comment-panel",
    type: n.CommandType["OPERATION"],
    handler(var_core_value_sig2D58) {
      return h(var_core_value_sig2D58), true;
    }
  },
  _ = {
    id: "board.operation.start-comment-placement",
    type: n.CommandType["OPERATION"],
    handler(var_core_value_sig223F) {
      let var_core_value_sigD749 = var_core_value_sig223F.get(n.IUniverInstanceService).getCurrentUnitOfType(n.UniverInstanceType["UNIVER_BOARD"]);
      return !var_core_value_sigD749 || !(0, e.getBoardPermissionValue)(var_core_value_sig223F.get(n.IPermissionService), var_core_value_sigD749.getUnitId(), var_core_value_sigD749.getUnitId(), r.UnitAction["Comment"]) ? false : (var_core_value_sig223F.get(t.IBoardUIStateService).setActiveTool(e.BoardToolType["Select"]), var_core_value_sig223F.get(a.ThreadCommentDraftService).startPlacement(n.UniverInstanceType["UNIVER_BOARD"], var_core_value_sigD749.getUnitId()), true);
    }
  },
  v = {
    id: "board.operation.add-element-comment",
    type: n.CommandType["OPERATION"],
    handler(var_core_value_sigCFFA) {
      var var_core_value_sig58C1;
      let var_core_value_sig5090 = var_core_value_sigCFFA.get(n.IUniverInstanceService).getCurrentUnitOfType(n.UniverInstanceType["UNIVER_BOARD"]),
        var_core_value_sigC368 = var_core_value_sigCFFA.get(t.IBoardElementStateService).getSnapshot(),
        var_core_value_sigAD56 = var_core_value_sig5090 == null ? undefined : var_core_value_sig5090.getActivePageId(),
        var_core_value_sigDB4A = var_core_value_sigC368.focusedId ?? var_core_value_sigC368.selectedIds[var_core_value_sigC368.selectedIds["length"] - 1];
      return !var_core_value_sig5090 || !var_core_value_sigAD56 || !var_core_value_sigDB4A || ((var_core_value_sig58C1 = var_core_value_sigC368.context) == null ? undefined : var_core_value_sig58C1.unitId) !== var_core_value_sig5090.getUnitId() || var_core_value_sigC368.context["subUnitId"] !== var_core_value_sigAD56 || !(0, e.getBoardPermissionValue)(var_core_value_sigCFFA.get(n.IPermissionService), var_core_value_sig5090.getUnitId(), var_core_value_sig5090.getUnitId(), r.UnitAction["Comment"]) ? false : (var_core_value_sigCFFA.get(a.ThreadCommentDraftService).place({
        unitId: var_core_value_sig5090.getUnitId(),
        subUnitId: var_core_value_sigAD56,
        anchor: {
          kind: i.ThreadCommentAnchorKind["BOARD_ELEMENT"],
          pageId: var_core_value_sigAD56,
          elementId: var_core_value_sigDB4A
        }
      }), h(var_core_value_sigCFFA), true);
    }
  },
  y = "boards-thread-comment-ui.config",
  b = {};
var x = "@univerjs-pro/boards-thread-comment-ui",
  S = "1.0.0-insiders.20260907-70fc579";
function C() {
  let var_core_value_sig6418 = (0, o.useDependency)(n.IUniverInstanceService),
    var_core_value_sig1896 = (0, o.useDependency)(n.ICommandService),
    var_core_value_sig0285 = (0, o.useDependency)(a.ThreadCommentDraftService),
    var_core_value_sig777D = (0, o.useDependency)(n.UserManagerService),
    var_core_value_sig3F4C = (0, o.useDependency)(e.IBoardElementService),
    var_core_value_sigD65A = var_core_value_sig6418.getCurrentUnitOfType(n.UniverInstanceType["UNIVER_BOARD"]),
    var_core_value_sig5A13 = var_core_value_sigD65A instanceof e.BoardModel ? var_core_value_sigD65A : undefined,
    var_core_value_sigF593 = (0, o.useDependency)(n.IPermissionService);
  (0, o.useObservable)(() => var_core_value_sigF593.permissionPointUpdate$, undefined, false, [var_core_value_sigF593]);
  let var_core_value_sig3607 = (0, o.useObservable)(var_core_value_sig0285.draft$, var_core_value_sig0285.draft),
    var_core_value_sigB512 = (0, d.useMemo)(() => (0, f.of)(var_core_value_sig5A13 == null ? undefined : var_core_value_sig5A13.getActivePageId()), [var_core_value_sig5A13]),
    var_core_value_sigF2E6 = var_core_value_sig3607 && var_core_value_sig3607.unitId === (var_core_value_sig5A13 == null ? undefined : var_core_value_sig5A13.getUnitId()) ? {
      id: "",
      threadId: "",
      unitId: var_core_value_sig3607.unitId,
      subUnitId: var_core_value_sig3607.subUnitId,
      ref: (0, i.serializeThreadCommentAnchor)(var_core_value_sig3607.anchor),
      dT: "",
      personId: var_core_value_sig777D.getCurrentUser().userID,
      text: {
        dataStream: "\x0d\x0a"
      }
    } : null;
  if (!var_core_value_sig5A13) return null;
  let var_core_value_sig34C8 = !(0, e.getBoardPermissionValue)(var_core_value_sigF593, var_core_value_sig5A13.getUnitId(), var_core_value_sig5A13.getUnitId(), r.UnitAction["Comment"]);
  return (0, p.jsx)(a.ThreadCommentPanel, {
    unitId: var_core_value_sig5A13.getUnitId(),
    subUnitId$: var_core_value_sigB512,
    type: n.UniverInstanceType["UNIVER_BOARD"],
    onAdd: () => var_core_value_sig1896.executeCommand(_.id),
    disableAdd: var_core_value_sig34C8,
    getSubUnitName: var_core_value_sig9572 => {
      var var_core_value_sigD873;
      return ((var_core_value_sigD873 = var_core_value_sig5A13.getPage(var_core_value_sig9572)) == null ? undefined : var_core_value_sigD873.name) ?? var_core_value_sig9572;
    },
    tempComment: var_core_value_sigF2E6,
    onTempCommentClose: () => var_core_value_sig0285.cancel(),
    formatRef: var_core_value_sigA12B => w(var_core_value_sigA12B, var_core_value_sig3F4C)
  });
}
function w(var_core_value_sigB744, var_core_value_sigEAE2) {
  let var_core_value_sigE68A = (0, i.deserializeThreadCommentAnchor)(var_core_value_sigB744.ref);
  if ((var_core_value_sigE68A == null ? undefined : var_core_value_sigE68A.kind) === i.ThreadCommentAnchorKind["BOARD_ELEMENT"]) {
    var var_core_value_sig3E68;
    let var_core_value_sigF230 = var_core_value_sigEAE2.getElementById(var_core_value_sigB744.unitId, var_core_value_sigE68A.pageId ?? var_core_value_sigB744.subUnitId, var_core_value_sigE68A.elementId);
    return (var_core_value_sigF230 == null || (var_core_value_sig3E68 = var_core_value_sigF230.element["name"]) == null ? undefined : var_core_value_sig3E68.trim()) || var_core_value_sigE68A.elementId;
  }
  return (var_core_value_sigE68A == null ? undefined : var_core_value_sigE68A.kind) === i.ThreadCommentAnchorKind["BOARD_POSITION"] ? "(" + Math.round(var_core_value_sigE68A.x) + ",\x20" + Math.round(var_core_value_sigE68A.y) + ")" : var_core_value_sigB744.ref;
}
function T(var_core_value_sigF4C5, var_core_value_sig5410) {
  return function (var_core_value_sig09B8, var_core_value_sig6F91) {
    var_core_value_sig5410(var_core_value_sig09B8, var_core_value_sig6F91, var_core_value_sigF4C5);
  };
}
function E(var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigA6F6, var_core_value_sigCDDA) {
  var var_core_value_sigE243 = arguments.length,
    var_core_value_sig74A8 = var_core_value_sigE243 < 3 ? var_core_value_sig8EA0 : var_core_value_sigCDDA === null ? var_core_value_sigCDDA = Object.getOwnPropertyDescriptor(var_core_value_sig8EA0, var_core_value_sigA6F6) : var_core_value_sigCDDA,
    var_core_value_sig21B2;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig74A8 = Reflect.decorate(var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigA6F6, var_core_value_sigCDDA);else {
    for (var var_core_value_sigDE08 = var_core_value_sig492F.length - 1; var_core_value_sigDE08 >= 0; var_core_value_sigDE08--) (var_core_value_sig21B2 = var_core_value_sig492F[var_core_value_sigDE08]) && (var_core_value_sig74A8 = (var_core_value_sigE243 < 3 ? var_core_value_sig21B2(var_core_value_sig74A8) : var_core_value_sigE243 > 3 ? var_core_value_sig21B2(var_core_value_sig8EA0, var_core_value_sigA6F6, var_core_value_sig74A8) : var_core_value_sig21B2(var_core_value_sig8EA0, var_core_value_sigA6F6)) || var_core_value_sig74A8);
  }
  return var_core_value_sigE243 > 3 && var_core_value_sig74A8 && Object.defineProperty(var_core_value_sig8EA0, var_core_value_sigA6F6, var_core_value_sig74A8), var_core_value_sig74A8;
}
let D = class extends n.Disposable {
  constructor(var_core_value_sigF9C7, var_core_value_sig8895) {
    super(), this._componentManager = var_core_value_sigF9C7, this._iconManager = var_core_value_sig8895, this._registerIcons(), this._registerComponents();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      InsertCommentDoubleIcon: u.InsertCommentDoubleIcon
    }));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](m, C));
  }
};
D = E([T(0, (0, n.Inject)(o.ComponentManager)), T(1, (0, n.Inject)(o.IconManager))], D);
function O(var_core_value_sigACCB, var_core_value_sig7F33, var_core_value_sig0C53) {
  let var_core_value_sigEA04 = Number.isFinite(var_core_value_sig0C53.zoomRatio) && var_core_value_sig0C53.zoomRatio > 0 ? var_core_value_sig0C53.zoomRatio : 1;
  return {
    x: (var_core_value_sigACCB - var_core_value_sig0C53.viewportPanOffset["x"]) / var_core_value_sigEA04,
    y: (var_core_value_sig7F33 - var_core_value_sig0C53.viewportPanOffset["y"]) / var_core_value_sigEA04
  };
}
function k(var_core_value_sig7A62) {
  "@babel/helpers - typeof";

  return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigC80B) {
    return typeof var_core_value_sigC80B;
  } : function (var_core_value_sig284F) {
    return var_core_value_sig284F && typeof Symbol == "function" && var_core_value_sig284F.constructor === Symbol && var_core_value_sig284F !== Symbol.prototype ? "symbol" : typeof var_core_value_sig284F;
  }, k(var_core_value_sig7A62);
}
function A(var_core_value_sig8109, var_core_value_sig7565) {
  if (k(var_core_value_sig8109) != "object" || !var_core_value_sig8109) return var_core_value_sig8109;
  var var_core_value_sigD4FB = var_core_value_sig8109[Symbol.toPrimitive];
  if (var_core_value_sigD4FB !== undefined) {
    var var_core_value_sig3E71 = var_core_value_sigD4FB.call(var_core_value_sig8109, var_core_value_sig7565 || "default");
    if (k(var_core_value_sig3E71) != "object") return var_core_value_sig3E71;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig7565 === "string" ? String : Number)(var_core_value_sig8109);
}
function j(var_core_value_sig01B3) {
  var var_core_value_sig7442 = A(var_core_value_sig01B3, "string");
  return k(var_core_value_sig7442) == "symbol" ? var_core_value_sig7442 : var_core_value_sig7442 + "";
}
function M(var_core_value_sigDF87, var_core_value_sig9EE0, var_core_value_sigF051) {
  return (var_core_value_sig9EE0 = j(var_core_value_sig9EE0)) in var_core_value_sigDF87 ? Object.defineProperty(var_core_value_sigDF87, var_core_value_sig9EE0, {
    value: var_core_value_sigF051,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigDF87[var_core_value_sig9EE0] = var_core_value_sigF051, var_core_value_sigDF87;
}
function N(var_core_value_sig0B45) {
  let var_core_value_sig36F8 = new Map();
  return var_core_value_sig0B45.forEach(var_core_value_sigE154 => {
    let var_core_value_sig4632 = var_core_value_sigE154.x + "\x00" + var_core_value_sigE154.y,
      var_core_value_sig12F2 = var_core_value_sig36F8.get(var_core_value_sig4632);
    if (var_core_value_sig12F2) {
      var_core_value_sig12F2.commentId = var_core_value_sigE154.commentId, var_core_value_sig12F2.commentIds["push"](var_core_value_sigE154.commentId), var_core_value_sig12F2.count += 1;
      return;
    }
    var_core_value_sig36F8.set(var_core_value_sig4632, {
      ...var_core_value_sigE154,
      commentIds: [var_core_value_sigE154.commentId],
      count: 1
    });
  }), Array.from(var_core_value_sig36F8.values());
}
let P = class extends n.RxDisposable {
  constructor(var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7, var_core_value_sigD0A8, var_core_value_sigF4B9, var_core_value_sig5CEE, var_core_value_sigE92A, var_core_value_sig362B, var_core_value_sig5CA5) {
    super(), this._renderContext = var_core_value_sig2259, this._commandService = var_core_value_sig9E2F, this._instanceService = var_core_value_sigD082, this._elementService = var_core_value_sigDBB7, this._elementStateService = var_core_value_sigD0A8, this._uiStateService = var_core_value_sigF4B9, this._draftService = var_core_value_sig5CEE, this._commentModel = var_core_value_sigE92A, this._panelService = var_core_value_sig362B, this._themeService = var_core_value_sig5CA5, M(this, "_overlay", undefined), this._overlay = new a.ThreadCommentCanvasOverlay("board-thread-comment-overlay", {
      ...this._getColors(),
      zoomRatio: 1,
      markers: [],
      underlines: []
    }), this._overlay["zIndex"] = t.BOARD_RENDER_OBJECT_Z_INDEX["transientNavigation"] + 1, this._renderContext["scene"].addObject(this._overlay, t.BOARD_RENDER_LAYER_INDEX["overlay"]), this.disposeWithMe((0, n.toDisposable)(this._overlay["onPointerDown$"].subscribeEvent((var_core_value_sigBC46, var_core_value_sig3D7D) => this._onOverlayPointerDown(var_core_value_sig3D7D)))), this.disposeWithMe((0, n.toDisposable)(this._overlay["onPointerLeave$"].subscribeEvent(() => this._overlay["clearHover"]()))), this.disposeWithMe((0, n.toDisposable)(this._renderContext["scene"].onPointerDown$["subscribeEvent"]((var_core_value_sig27E5, var_core_value_sig8061) => this._onPointerDown(var_core_value_sig27E5, var_core_value_sig8061)))), this.disposeWithMe((0, n.toDisposable)(this._renderContext["scene"].onPointerMove$["subscribeEvent"](var_core_value_sig4D4C => this._onPointerMove(var_core_value_sig4D4C)))), this.disposeWithMe((0, n.toDisposable)(this._elementStateService["state$"].pipe((0, f.pairwise)(), (0, f.takeUntil)(this.dispose$)).subscribe(([var_core_value_sigC9E0, var_core_value_sig76BA]) => {
      var var_core_value_sigFBFA;
      this._draftService["placementType"] !== n.UniverInstanceType["UNIVER_BOARD"] || !var_core_value_sig76BA.focusedId || !var_core_value_sig76BA.context || var_core_value_sigC9E0.focusedId === var_core_value_sig76BA.focusedId && ((var_core_value_sigFBFA = var_core_value_sigC9E0.context) == null ? undefined : var_core_value_sigFBFA.unitId) === var_core_value_sig76BA.context["unitId"] && var_core_value_sigC9E0.context["subUnitId"] === var_core_value_sig76BA.context["subUnitId"] || this._placeElement(var_core_value_sig76BA.context["unitId"], var_core_value_sig76BA.context["subUnitId"], var_core_value_sig76BA.focusedId);
    }))), this.disposeWithMe(this._commentModel["commentUpdate$"].pipe((0, f.takeUntil)(this.dispose$)).subscribe(var_core_value_sigF602 => {
      var_core_value_sigF602.unitId === this._renderContext["unitId"] && this._syncOverlay();
    })), [this._panelService["activeCommentId$"], this._panelService["hoveredCommentId$"]].forEach(var_core_value_sig1BBD => {
      this.disposeWithMe(var_core_value_sig1BBD.pipe((0, f.takeUntil)(this.dispose$)).subscribe(() => this._syncOverlay()));
    }), [this._elementService["elementAdd$"], this._elementService["elementUpdate$"], this._elementService["elementRemove$"]].forEach(var_core_value_sigF704 => {
      this.disposeWithMe(var_core_value_sigF704.pipe((0, f.takeUntil)(this.dispose$)).subscribe(var_core_value_sig2AD0 => {
        var_core_value_sig2AD0.some(var_core_value_sig7524 => var_core_value_sig7524.unitId === this._renderContext["unitId"]) && this._syncOverlay();
      }));
    }), this.disposeWithMe(this._uiStateService["state$"].pipe((0, f.distinctUntilChanged)((var_core_value_sig2BCF, var_core_value_sig0D69) => var_core_value_sig2BCF.zoomRatio === var_core_value_sig0D69.zoomRatio), (0, f.takeUntil)(this.dispose$)).subscribe(() => this._syncOverlay())), this._listenToolSwitch(), this.disposeWithMe(this._draftService["placementType$"].pipe((0, f.takeUntil)(this.dispose$)).subscribe(var_core_value_sig480E => {
      var_core_value_sig480E !== n.UniverInstanceType["UNIVER_BOARD"] && this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null
      });
    })), this.disposeWithMe(this._themeService["currentTheme$"].pipe((0, f.takeUntil)(this.dispose$)).subscribe(() => this._syncOverlay())), this._syncOverlay();
  }
  _listenToolSwitch() {
    this.disposeWithMe(this._uiStateService["state$"].pipe((0, f.map)(var_core_value_sig26DB => var_core_value_sig26DB.activeTool), (0, f.distinctUntilChanged)(), (0, f.pairwise)(), (0, f.takeUntil)(this.dispose$)).subscribe(() => {
      this._draftService["placementType"] === n.UniverInstanceType["UNIVER_BOARD"] && this._draftService["cancel"]();
    }));
  }
  _placeElement(var_core_value_sigE90F, var_core_value_sigEFD4, var_core_value_sig861B) {
    var_core_value_sigE90F === this._renderContext["unitId"] && (this._draftService["place"]({
      unitId: var_core_value_sigE90F,
      subUnitId: var_core_value_sigEFD4,
      anchor: {
        kind: i.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        pageId: var_core_value_sigEFD4,
        elementId: var_core_value_sig861B
      }
    }), this._overlay["updateState"]({
      previewMarker: null,
      previewUnderline: null
    }), this._commandService["executeCommand"](g.id).catch(() => undefined));
  }
  _onPointerDown(var_core_value_sig5237, var_core_value_sigBB00) {
    if (this._draftService["placementType"] !== n.UniverInstanceType["UNIVER_BOARD"] || (var_core_value_sig5237.button ?? 0) !== 0) return;
    let var_core_value_sig7E54 = this._getModel();
    if (!var_core_value_sig7E54) {
      this._draftService["cancel"]();
      return;
    }
    let var_core_value_sig9A8D = var_core_value_sig7E54.getActivePageId(),
      var_core_value_sigC259 = this._toBoardPoint(var_core_value_sig5237.offsetX, var_core_value_sig5237.offsetY),
      var_core_value_sig9C9F = this._hitTest(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259);
    this._draftService["place"]({
      unitId: var_core_value_sig7E54.getUnitId(),
      subUnitId: var_core_value_sig9A8D,
      anchor: var_core_value_sig9C9F ? {
        kind: i.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        pageId: var_core_value_sig9A8D,
        elementId: var_core_value_sig9C9F.elementId
      } : {
        kind: i.ThreadCommentAnchorKind["BOARD_POSITION"],
        pageId: var_core_value_sig9A8D,
        ...var_core_value_sigC259
      }
    }), this._overlay["updateState"]({
      previewMarker: null,
      previewUnderline: null
    }), var_core_value_sigBB00.stopPropagation(), this._commandService["executeCommand"](g.id).catch(() => undefined);
  }
  _onPointerMove(var_core_value_sigFDEA) {
    if (this._draftService["placementType"] !== n.UniverInstanceType["UNIVER_BOARD"]) return;
    let var_core_value_sig86D0 = this._getModel();
    if (!var_core_value_sig86D0) return;
    let var_core_value_sig4CD2 = var_core_value_sig86D0.getActivePageId(),
      var_core_value_sig48CA = this._toBoardPoint(var_core_value_sigFDEA.offsetX, var_core_value_sigFDEA.offsetY),
      var_core_value_sig50AF = this._hitTest(var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA),
      var_core_value_sigA942 = var_core_value_sig50AF ? this._getElementUnderline(var_core_value_sig50AF.elementId) : null;
    if (var_core_value_sigA942) {
      this._overlay["updateState"]({
        previewMarker: var_core_value_sig48CA,
        previewUnderline: var_core_value_sigA942
      });
      return;
    }
    this._overlay["updateState"]({
      previewMarker: var_core_value_sig48CA,
      previewUnderline: null
    });
  }
  _onOverlayPointerDown(var_core_value_sigA621) {
    let var_core_value_sigBBFF = this._getModel(),
      var_core_value_sig8889 = this._overlay["hitCommentId"];
    !var_core_value_sigBBFF || !var_core_value_sig8889 || (this._panelService["setActiveComment"]({
      unitId: var_core_value_sigBBFF.getUnitId(),
      subUnitId: var_core_value_sigBBFF.getActivePageId(),
      commentId: var_core_value_sig8889,
      trigger: "board-canvas"
    }), var_core_value_sigA621.stopPropagation(), this._commandService["executeCommand"](g.id).catch(() => undefined));
  }
  _syncOverlay() {
    let var_core_value_sig32F8 = this._getModel();
    if (!var_core_value_sig32F8) {
      this._overlay["updateState"]({
        markers: [],
        underlines: [],
        focusedCommentIds: [],
        focusOutlines: []
      });
      return;
    }
    let var_core_value_sig5B67 = var_core_value_sig32F8.getActivePageId(),
      var_core_value_sig1758 = [],
      var_core_value_sig4805 = new Map();
    this._commentModel["query"]({
      unitIds: [var_core_value_sig32F8.getUnitId()],
      subUnitIds: [var_core_value_sig5B67],
      anchorKinds: [i.ThreadCommentAnchorKind["BOARD_ELEMENT"], i.ThreadCommentAnchorKind["BOARD_POSITION"]],
      resolved: false
    }).forEach(({
      root: var_core_value_sigF0F9
    }) => {
      let var_core_value_sig1A0F = (0, i.deserializeThreadCommentAnchor)(var_core_value_sigF0F9.ref);
      if ((var_core_value_sig1A0F == null ? undefined : var_core_value_sig1A0F.kind) === i.ThreadCommentAnchorKind["BOARD_POSITION"]) var_core_value_sig1758.push({
        commentId: var_core_value_sigF0F9.id,
        x: var_core_value_sig1A0F.x,
        y: var_core_value_sig1A0F.y
      });else {
        if ((var_core_value_sig1A0F == null ? undefined : var_core_value_sig1A0F.kind) === i.ThreadCommentAnchorKind["BOARD_ELEMENT"]) {
          let var_core_value_sig2AD8 = this._getElementUnderline(var_core_value_sig1A0F.elementId, var_core_value_sigF0F9.id);
          var_core_value_sig2AD8 && var_core_value_sig4805.set(var_core_value_sig1A0F.elementId, var_core_value_sig2AD8);
        }
      }
    }), this._overlay["updateState"]({
      ...this._getColors(),
      zoomRatio: this._uiStateService["getState"]().zoomRatio,
      markers: N(var_core_value_sig1758),
      underlines: Array.from(var_core_value_sig4805.values()),
      ...this._getFocusState(var_core_value_sig32F8, var_core_value_sig5B67)
    });
  }
  _getElementUnderline(var_core_value_sigE67E, var_core_value_sig2902 = "") {
    let var_core_value_sig9989 = this._getElementOutline(var_core_value_sigE67E);
    if (!var_core_value_sig9989) return null;
    let var_core_value_sig698E = this._uiStateService["getState"]().zoomRatio || 1;
    return {
      commentId: var_core_value_sig2902,
      left: var_core_value_sig9989.left,
      top: var_core_value_sig9989.top + var_core_value_sig9989.height + 2 / var_core_value_sig698E,
      width: var_core_value_sig9989.width
    };
  }
  _getElementOutline(var_core_value_sig2809) {
    var var_core_value_sig2DAB;
    let var_core_value_sig877E = this._getModel();
    if (!var_core_value_sig877E) return null;
    let var_core_value_sig20C8 = this._renderContext["scene"],
      var_core_value_sigE9A7 = (0, t.getBoardElementRenderObjectKey)(var_core_value_sig877E.getUnitId(), var_core_value_sig2809),
      var_core_value_sigBECE = var_core_value_sig20C8.getObject(var_core_value_sigE9A7) ?? ((var_core_value_sig2DAB = var_core_value_sig20C8.getObjectIncludeInGroup) == null ? undefined : var_core_value_sig2DAB.call(var_core_value_sig20C8, var_core_value_sigE9A7));
    if (!var_core_value_sigBECE) return null;
    let var_core_value_sig1B22 = var_core_value_sigBECE.getRealBound();
    return {
      left: var_core_value_sig1B22.left,
      top: var_core_value_sig1B22.top,
      width: var_core_value_sig1B22.width,
      height: var_core_value_sig1B22.height
    };
  }
  _getFocusState(var_core_value_sig7F72, var_core_value_sig7B2A) {
    let var_core_value_sig06CD = [],
      var_core_value_sigA5F1 = new Map();
    return [this._panelService["activeCommentId"], this._panelService["hoveredCommentId"]].forEach(var_core_value_sigFBA4 => {
      if (!var_core_value_sigFBA4 || var_core_value_sigFBA4.unitId !== var_core_value_sig7F72.getUnitId() || var_core_value_sigFBA4.subUnitId !== var_core_value_sig7B2A) return;
      let var_core_value_sig4383 = this._commentModel["getComment"](var_core_value_sigFBA4.unitId, var_core_value_sigFBA4.subUnitId, var_core_value_sigFBA4.commentId);
      if (!var_core_value_sig4383) return;
      var_core_value_sig06CD.push(var_core_value_sigFBA4.commentId);
      let var_core_value_sig186C = (0, i.deserializeThreadCommentAnchor)(var_core_value_sig4383.ref);
      if ((var_core_value_sig186C == null ? undefined : var_core_value_sig186C.kind) === i.ThreadCommentAnchorKind["BOARD_ELEMENT"] && !var_core_value_sigA5F1.has(var_core_value_sig186C.elementId)) {
        let var_core_value_sig3EEE = this._getElementOutline(var_core_value_sig186C.elementId);
        var_core_value_sig3EEE && var_core_value_sigA5F1.set(var_core_value_sig186C.elementId, var_core_value_sig3EEE);
      }
    }), {
      focusedCommentIds: var_core_value_sig06CD,
      focusOutlines: Array.from(var_core_value_sigA5F1.values())
    };
  }
  _hitTest(var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig4F59) {
    return (0, t.hitTestBoardElementAtPoint)({
      elementData: this._elementService["getElementData"](var_core_value_sig97A2.getUnitId(), var_core_value_sig07E9),
      elementOrder: this._elementService["getElementOrder"](var_core_value_sig97A2.getUnitId(), var_core_value_sig07E9),
      point: var_core_value_sig4F59
    });
  }
  _getColors() {
    return {
      accentColor: this._themeService["getColorFromTheme"]("yellow.400"),
      foregroundColor: this._themeService["getColorFromTheme"]("gray.900"),
      outlineColor: this._themeService["getColorFromTheme"]("white")
    };
  }
  _getModel() {
    return this._instanceService["getUnit"](this._renderContext["unitId"], n.UniverInstanceType["UNIVER_BOARD"]) ?? null;
  }
  _toBoardPoint(var_core_value_sigF564, var_core_value_sig8CFA) {
    return O(var_core_value_sigF564, var_core_value_sig8CFA, this._uiStateService["getState"]());
  }
};
P = E([T(1, n.ICommandService), T(2, n.IUniverInstanceService), T(3, e.IBoardElementService), T(4, t.IBoardElementStateService), T(5, t.IBoardUIStateService), T(6, (0, n.Inject)(a.ThreadCommentDraftService)), T(7, (0, n.Inject)(i.ThreadCommentModel)), T(8, (0, n.Inject)(a.ThreadCommentPanelService)), T(9, (0, n.Inject)(n.ThemeService))], P);
function F(var_core_value_sig03E1) {
  let var_core_value_sigBB57 = var_core_value_sig03E1.get(n.IUniverInstanceService),
    var_core_value_sig7C4A = var_core_value_sig03E1.get(n.IPermissionService);
  return (0, f.combineLatest)([var_core_value_sigBB57.getCurrentTypeOfUnit$(n.UniverInstanceType["UNIVER_BOARD"]), var_core_value_sig7C4A.permissionPointUpdate$["pipe"]((0, f.startWith)(undefined))]).pipe((0, f.map)(([var_core_value_sig2E11]) => !var_core_value_sig2E11 || !(0, e.getBoardPermissionValue)(var_core_value_sig7C4A, var_core_value_sig2E11.getUnitId(), var_core_value_sig2E11.getUnitId(), r.UnitAction["Comment"])));
}
function I(var_core_value_sigE799) {
  return {
    id: v.id,
    type: o.MenuItemType["BUTTON"],
    icon: "InsertCommentDoubleIcon",
    title: "boards-thread-comment-ui.addComment",
    tooltip: "boards-thread-comment-ui.addComment",
    hidden$: (0, o.getMenuHiddenObservable)(var_core_value_sigE799, n.UniverInstanceType["UNIVER_BOARD"]),
    disabled$: F(var_core_value_sigE799)
  };
}
const L = {
  [t.BoardElementContextMenuPosition["ELEMENT"]]: {
    [o.ContextMenuGroup["OTHERS"]]: {
      [v.id]: {
        order: 0,
        menuItemFactory: I
      }
    }
  },
  [t.BoardElementContextMenuPosition["SELECTION"]]: {
    [o.ContextMenuGroup["OTHERS"]]: {
      [v.id]: {
        order: 0,
        menuItemFactory: I
      }
    }
  },
  [o.FloatingObjectToolbarPosition["BOARD"]]: {
    [v.id]: {
      order: 10,
      menuItemFactory: I
    }
  }
};
let R = class extends n.Disposable {
  constructor(var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sig2B65, var_core_value_sigD7EA) {
    super(), [v, g, _].forEach(var_core_value_sigD955 => this.disposeWithMe(var_core_value_sig5B69.registerCommand(var_core_value_sigD955))), var_core_value_sigB098.mergeMenu(L), this.disposeWithMe(var_core_value_sigCE71.register({
      id: "boards-thread-comment-ui.view-selection.add-comment",
      icon: u.CommentIcon,
      label: () => var_core_value_sig21D8.t("boards-thread-comment-ui.addComment"),
      order: 100,
      group: "auxiliary",
      placement: "view-selection",
      enabled: () => {
        let var_core_value_sig48BD = var_core_value_sigD7EA.getCurrentUnitOfType(n.UniverInstanceType["UNIVER_BOARD"]);
        return !!var_core_value_sig48BD && (0, e.getBoardPermissionValue)(var_core_value_sig2B65, var_core_value_sig48BD.getUnitId(), var_core_value_sig48BD.getUnitId(), r.UnitAction["Comment"]);
      },
      onClick: async var_core_value_sig429F => {
        await var_core_value_sig429F.executeCommand(v.id);
      }
    })), this.disposeWithMe(var_core_value_sigCE71.register({
      id: "boards-thread-comment-ui.top-right.open-comments",
      availableInViewing: true,
      icon: u.CommentIcon,
      label: () => var_core_value_sig21D8.t("boards-thread-comment-ui.openComments"),
      order: 100,
      group: "auxiliary",
      placement: "top-right-before-history",
      menuItemId: g.id,
      onClick: async var_core_value_sigF62A => {
        await var_core_value_sigF62A.executeCommand(g.id);
      }
    })), this.disposeWithMe(var_core_value_sigCE71.register({
      id: "boards-thread-comment-ui.toolbar.add-comment",
      availableInViewing: true,
      icon: u.InsertCommentDoubleIcon,
      label: () => var_core_value_sig21D8.t("boards-thread-comment-ui.addComment"),
      order: 100,
      group: "auxiliary",
      menuItemId: _.id,
      enabled: () => {
        let var_core_value_sig8178 = var_core_value_sigD7EA.getCurrentUnitOfType(n.UniverInstanceType["UNIVER_BOARD"]);
        return !!var_core_value_sig8178 && (0, e.getBoardPermissionValue)(var_core_value_sig2B65, var_core_value_sig8178.getUnitId(), var_core_value_sig8178.getUnitId(), r.UnitAction["Comment"]);
      },
      onClick: async var_core_value_sigE9ED => {
        await var_core_value_sigE9ED.executeCommand(_.id);
      }
    }));
  }
};
R = E([T(0, n.ICommandService), T(1, o.IMenuManagerService), T(2, (0, n.Inject)(t.IBoardToolbarContributionService)), T(3, (0, n.Inject)(n.LocaleService)), T(4, n.IPermissionService), T(5, n.IUniverInstanceService)], R);
const z = [[D], [R]];
let B = class extends n.Plugin {
  constructor(var_core_value_sigB33B = b, var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sigEF3E) {
    super(), this._config = var_core_value_sigB33B, this._injector = var_core_value_sig24B9, this._configService = var_core_value_sigE627, this._renderManagerService = var_core_value_sigEF3E;
    let {
      ...var_core_value_sig273D
    } = (0, n.merge)({}, b, this._config);
    this._configService["setConfig"](y, var_core_value_sig273D);
  }
  onStarting() {
    z.forEach(var_core_value_sigB577 => {
      this._injector["add"](var_core_value_sigB577);
    }), this._injector["get"](D);
  }
  onRendered() {
    this._renderManagerService["registerRenderModule"](n.UniverInstanceType["UNIVER_BOARD"], [P]), this._injector["get"](R);
  }
};
M(B, "pluginName", "UNIVER_BOARDS_THREAD_COMMENT_UI_PLUGIN"), M(B, "packageName", x), M(B, "version", S), M(B, "type", n.UniverInstanceType["UNIVER_BOARD"]), B = E([(0, n.DependentOn)(e.UniverBoardsPlugin, s.UniverBoardsThreadCommentPlugin, t.UniverBoardsUIPlugin, c.UniverLicensePlugin, l.UniverRenderEnginePlugin, a.UniverThreadCommentUIPlugin), T(1, (0, n.Inject)(n.Injector)), T(2, n.IConfigService), T(3, l.IRenderManagerService)], B), exports.BOARDS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = y, exports.OpenBoardCommentPanelOperation = g, exports.StartBoardCommentPlacementOperation = _, Object.defineProperty(exports, "UniverBoardsThreadCommentUIPlugin", {
  enumerable: true,
  get: function () {
    return B;
  }
});
