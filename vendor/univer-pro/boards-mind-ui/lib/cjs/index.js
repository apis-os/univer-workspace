Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/boards-mind"),
  n = require("@univerjs-pro/boards-ui"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs/core"),
  a = require("@univerjs/engine-render"),
  o = require("rxjs"),
  s = require("@univerjs/ui"),
  c = require("@univerjs-pro/shape-editor-ui"),
  l = require("@univerjs-pro/engine-shape"),
  u = require("@univerjs/design"),
  d = require("@univerjs/icons"),
  f = require("react"),
  p = require("react/jsx-runtime");
var m = "@univerjs-pro/boards-mind-ui",
  h = "1.0.0-insiders.20260907-70fc579";
const g = {};
function _(var_core_value_sig6CFC) {
  "@babel/helpers - typeof";

  return _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig866F) {
    return typeof var_core_value_sig866F;
  } : function (var_core_value_sigDE3D) {
    return var_core_value_sigDE3D && typeof Symbol == "function" && var_core_value_sigDE3D.constructor === Symbol && var_core_value_sigDE3D !== Symbol.prototype ? "symbol" : typeof var_core_value_sigDE3D;
  }, _(var_core_value_sig6CFC);
}
function v(var_core_value_sig3EC0, var_core_value_sigEA69) {
  if (_(var_core_value_sig3EC0) != "object" || !var_core_value_sig3EC0) return var_core_value_sig3EC0;
  var var_core_value_sigF42A = var_core_value_sig3EC0[Symbol.toPrimitive];
  if (var_core_value_sigF42A !== undefined) {
    var var_core_value_sig898E = var_core_value_sigF42A.call(var_core_value_sig3EC0, var_core_value_sigEA69 || "default");
    if (_(var_core_value_sig898E) != "object") return var_core_value_sig898E;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigEA69 === "string" ? String : Number)(var_core_value_sig3EC0);
}
function y(var_core_value_sigC481) {
  var var_core_value_sig27B7 = v(var_core_value_sigC481, "string");
  return _(var_core_value_sig27B7) == "symbol" ? var_core_value_sig27B7 : var_core_value_sig27B7 + "";
}
function b(var_core_value_sig2DAD, var_core_value_sig00DE, var_core_value_sigEF7C) {
  return (var_core_value_sig00DE = y(var_core_value_sig00DE)) in var_core_value_sig2DAD ? Object.defineProperty(var_core_value_sig2DAD, var_core_value_sig00DE, {
    value: var_core_value_sigEF7C,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig2DAD[var_core_value_sig00DE] = var_core_value_sigEF7C, var_core_value_sig2DAD;
}
function x(var_core_value_sig07E7, var_core_value_sig6005) {
  return function (var_core_value_sigF175, var_core_value_sig6A18) {
    var_core_value_sig6005(var_core_value_sigF175, var_core_value_sig6A18, var_core_value_sig07E7);
  };
}
function S(var_core_value_sig25A4, var_core_value_sigB591, var_core_value_sigB272, var_core_value_sig6F52) {
  var var_core_value_sig09C4 = arguments.length,
    var_core_value_sig8E3E = var_core_value_sig09C4 < 3 ? var_core_value_sigB591 : var_core_value_sig6F52 === null ? var_core_value_sig6F52 = Object.getOwnPropertyDescriptor(var_core_value_sigB591, var_core_value_sigB272) : var_core_value_sig6F52,
    var_core_value_sigC3D3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig8E3E = Reflect.decorate(var_core_value_sig25A4, var_core_value_sigB591, var_core_value_sigB272, var_core_value_sig6F52);else {
    for (var var_core_value_sig1451 = var_core_value_sig25A4.length - 1; var_core_value_sig1451 >= 0; var_core_value_sig1451--) (var_core_value_sigC3D3 = var_core_value_sig25A4[var_core_value_sig1451]) && (var_core_value_sig8E3E = (var_core_value_sig09C4 < 3 ? var_core_value_sigC3D3(var_core_value_sig8E3E) : var_core_value_sig09C4 > 3 ? var_core_value_sigC3D3(var_core_value_sigB591, var_core_value_sigB272, var_core_value_sig8E3E) : var_core_value_sigC3D3(var_core_value_sigB591, var_core_value_sigB272)) || var_core_value_sig8E3E);
  }
  return var_core_value_sig09C4 > 3 && var_core_value_sig8E3E && Object.defineProperty(var_core_value_sigB591, var_core_value_sigB272, var_core_value_sig8E3E), var_core_value_sig8E3E;
}
let C = class extends i.RxDisposable {
  constructor(var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547) {
    super(), this._renderContext = var_core_value_sig4E3D, this._boardElementService = var_core_value_sig49B0, this._commandService = var_core_value_sig2547, b(this, "_nodeSizeByKey", new Map()), b(this, "_queuedLayouts", new Map()), b(this, "_layoutFlushScheduled", false), this._init();
  }
  _init() {
    this._seedExistingNodeSizes(), this.disposeWithMe((0, i.toDisposable)(this._boardElementService["elementAdd$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sig0285 => {
      var_core_value_sig0285.forEach(var_core_value_sig20C8 => {
        let var_core_value_sigE9A7 = this._boardElementService["getElementById"](var_core_value_sig20C8.unitId, var_core_value_sig20C8.subUnitId, var_core_value_sig20C8.elementId);
        this._rememberNodeSize(var_core_value_sig20C8, var_core_value_sigE9A7);
      });
    }))), this.disposeWithMe((0, i.toDisposable)(this._boardElementService["elementUpdate$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sig777D => {
      var_core_value_sig777D.forEach(var_core_value_sigBECE => this._handleElementUpdate(var_core_value_sigBECE));
    })));
  }
  _seedExistingNodeSizes() {
    let var_core_value_sigBCA9 = this._renderContext["unitId"],
      var_core_value_sig4CDF = this._boardElementService["getElementDataForUnit"](var_core_value_sigBCA9);
    Object.entries(var_core_value_sig4CDF).forEach(([var_core_value_sig3F4C, var_core_value_sigD65A]) => {
      Object.values(var_core_value_sigD65A.data).forEach(var_core_value_sig1B22 => {
        this._rememberNodeSize({
          unitId: var_core_value_sigBCA9,
          subUnitId: var_core_value_sig3F4C,
          elementId: var_core_value_sig1B22.elementId
        }, var_core_value_sig1B22);
      });
    });
  }
  _handleElementUpdate(var_core_value_sig3F79) {
    if (var_core_value_sig3F79.unitId !== this._renderContext["unitId"]) return;
    let var_core_value_sig880E = this._boardElementService["getElementById"](var_core_value_sig3F79.unitId, var_core_value_sig3F79.subUnitId, var_core_value_sig3F79.elementId),
      var_core_value_sigC9ED = (0, t.getMindMapNodeMeta)(var_core_value_sig880E == null ? undefined : var_core_value_sig880E.element),
      var_core_value_sigB57B = this._resolveNodeSize(var_core_value_sig880E);
    if (!var_core_value_sigC9ED || !var_core_value_sigB57B) {
      this._nodeSizeByKey["delete"](this._getElementKey(var_core_value_sig3F79));
      return;
    }
    let var_core_value_sig780B = this._getElementKey(var_core_value_sig3F79),
      var_core_value_sig7D1B = this._nodeSizeByKey["get"](var_core_value_sig780B);
    this._nodeSizeByKey["set"](var_core_value_sig780B, var_core_value_sigB57B), !(var_core_value_sig7D1B && var_core_value_sig7D1B.width === var_core_value_sigB57B.width && var_core_value_sig7D1B.height === var_core_value_sigB57B.height) && this._queueLayout({
      unitId: var_core_value_sig3F79.unitId,
      subUnitId: var_core_value_sig3F79.subUnitId,
      scopeId: var_core_value_sigC9ED.structureScopeId
    });
  }
  _rememberNodeSize(var_core_value_sig7BE0, var_core_value_sig7D40) {
    if (var_core_value_sig7BE0.unitId !== this._renderContext["unitId"]) return;
    let var_core_value_sig6C7E = (0, t.getMindMapNodeMeta)(var_core_value_sig7D40 == null ? undefined : var_core_value_sig7D40.element),
      var_core_value_sig68BE = this._resolveNodeSize(var_core_value_sig7D40);
    !var_core_value_sig6C7E || !var_core_value_sig68BE || this._nodeSizeByKey["set"](this._getElementKey(var_core_value_sig7BE0), var_core_value_sig68BE);
  }
  _resolveNodeSize(var_core_value_sig04C6) {
    let var_core_value_sigCA05 = (var_core_value_sig04C6 == null ? undefined : var_core_value_sig04C6.transform) ?? (var_core_value_sig04C6 == null ? undefined : var_core_value_sig04C6.element["transform"]),
      var_core_value_sig2F2B = var_core_value_sigCA05 == null ? undefined : var_core_value_sigCA05.width,
      var_core_value_sig70AF = var_core_value_sigCA05 == null ? undefined : var_core_value_sigCA05.height;
    return !Number.isFinite(var_core_value_sig2F2B) || !Number.isFinite(var_core_value_sig70AF) ? null : {
      width: var_core_value_sig2F2B,
      height: var_core_value_sig70AF
    };
  }
  _queueLayout(var_core_value_sigD04E) {
    this._queuedLayouts["set"](var_core_value_sigD04E.unitId + ":" + var_core_value_sigD04E.subUnitId + ":" + var_core_value_sigD04E.scopeId, var_core_value_sigD04E), !this._layoutFlushScheduled && (this._layoutFlushScheduled = true, Promise.resolve().then(() => {
      this._layoutFlushScheduled = false;
      let var_core_value_sig5A13 = Array.from(this._queuedLayouts["values"]());
      this._queuedLayouts["clear"](), var_core_value_sig5A13.forEach(var_core_value_sig7F72 => {
        this._executeRootAnchoredLayout(var_core_value_sig7F72);
      });
    }));
  }
  _executeRootAnchoredLayout(var_core_value_sigB99B) {
    var var_core_value_sig5A75;
    let var_core_value_sig7BAF = this._boardElementService["getElementById"](var_core_value_sigB99B.unitId, var_core_value_sigB99B.subUnitId, var_core_value_sigB99B.scopeId),
      var_core_value_sig8F69 = (var_core_value_sig5A75 = (0, t.getMindMapContainerMeta)(var_core_value_sig7BAF == null ? undefined : var_core_value_sig7BAF.element)) == null ? undefined : var_core_value_sig5A75.rootNodeId;
    this._commandService["executeCommand"](t.LayoutMindMapOperation["id"], {
      ...var_core_value_sigB99B,
      skipUndo: true,
      ...(var_core_value_sig8F69 ? {
        anchorNodeId: var_core_value_sig8F69
      } : null)
    });
  }
  _getElementKey(var_core_value_sig6884) {
    return var_core_value_sig6884.unitId + ":" + var_core_value_sig6884.subUnitId + ":" + var_core_value_sig6884.elementId;
  }
};
C = S([x(1, (0, i.Inject)(e.IBoardElementService)), x(2, i.ICommandService)], C);
const w = {
  primaryColor: c.SHAPE_FLOATING_TOOLBAR_DEFAULT_STROKE_COLOR,
  surfaceColor: c.SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_BACKGROUND_COLOR,
  textColor: c.SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_COLOR,
  fontFamily: i.DEFAULT_STYLES["ff"]
};
function T(var_core_value_sigAD57, var_core_value_sig58A8) {
  let var_core_value_sigEC1A = Math.min(1, Math.max(0, Number.isFinite(var_core_value_sig58A8) ? var_core_value_sig58A8 : 1)),
    var_core_value_sigBDED = var_core_value_sigAD57.trim(),
    var_core_value_sig4BFF = /^#([0-9a-fA-F]{6})$/["exec"](var_core_value_sigBDED);
  if (!var_core_value_sig4BFF) return var_core_value_sigAD57;
  let var_core_value_sig40E7 = var_core_value_sig4BFF[1];
  return "rgba(" + Number.parseInt(var_core_value_sig40E7.slice(0, 2), 16) + ",\x20" + Number.parseInt(var_core_value_sig40E7.slice(2, 4), 16) + ",\x20" + Number.parseInt(var_core_value_sig40E7.slice(4, 6), 16) + ",\x20" + var_core_value_sigEC1A + ")";
}
const E = {
  primaryColor: w.primaryColor,
  ghostFillColor: T(w.surfaceColor, 0.72),
  ghostTextColor: T(w.textColor, 0.62),
  rootTextColor: T(w.surfaceColor, 0.86),
  sourceHighlightFillColor: T(w.primaryColor, 0.12),
  sourceHighlightStrokeColor: T(w.primaryColor, 0.9),
  objectAlpha: 0.72,
  dragObjectAlpha: 0.78,
  connectorAlpha: 0.64,
  lineWidthScreen: 2,
  fallbackNodeWidth: t.MIND_MAP_DEFAULT_NODE_SIZE["nodeWidth"],
  fallbackNodeHeight: t.MIND_MAP_DEFAULT_NODE_SIZE["nodeHeight"],
  branchGap: t.MIND_MAP_DEFAULT_LAYOUT["branchGap"],
  sourceHaloScreen: 4,
  ghostRadius: 8,
  rootRadius: 10,
  fontFamily: w.fontFamily,
  ghostFontWeight: 500,
  rootFontWeight: 600,
  rootFontSize: 18,
  textPaddingScreen: 12,
  dirtyPaddingScreen: 24,
  sourceDashScreen: [6, 4]
};
function D(var_core_value_sigEDBA, var_core_value_sigE863, var_core_value_sig04B4, var_core_value_sig1C07, var_core_value_sig93D6, var_core_value_sigDD05) {
  let var_core_value_sig3932 = Math.min(var_core_value_sigDD05, var_core_value_sig1C07 / 2, var_core_value_sig93D6 / 2);
  var_core_value_sigEDBA.beginPath(), var_core_value_sigEDBA.moveTo(var_core_value_sigE863 + var_core_value_sig3932, var_core_value_sig04B4), var_core_value_sigEDBA.lineTo(var_core_value_sigE863 + var_core_value_sig1C07 - var_core_value_sig3932, var_core_value_sig04B4), var_core_value_sigEDBA.quadraticCurveTo(var_core_value_sigE863 + var_core_value_sig1C07, var_core_value_sig04B4, var_core_value_sigE863 + var_core_value_sig1C07, var_core_value_sig04B4 + var_core_value_sig3932), var_core_value_sigEDBA.lineTo(var_core_value_sigE863 + var_core_value_sig1C07, var_core_value_sig04B4 + var_core_value_sig93D6 - var_core_value_sig3932), var_core_value_sigEDBA.quadraticCurveTo(var_core_value_sigE863 + var_core_value_sig1C07, var_core_value_sig04B4 + var_core_value_sig93D6, var_core_value_sigE863 + var_core_value_sig1C07 - var_core_value_sig3932, var_core_value_sig04B4 + var_core_value_sig93D6), var_core_value_sigEDBA.lineTo(var_core_value_sigE863 + var_core_value_sig3932, var_core_value_sig04B4 + var_core_value_sig93D6), var_core_value_sigEDBA.quadraticCurveTo(var_core_value_sigE863, var_core_value_sig04B4 + var_core_value_sig93D6, var_core_value_sigE863, var_core_value_sig04B4 + var_core_value_sig93D6 - var_core_value_sig3932), var_core_value_sigEDBA.lineTo(var_core_value_sigE863, var_core_value_sig04B4 + var_core_value_sig3932), var_core_value_sigEDBA.quadraticCurveTo(var_core_value_sigE863, var_core_value_sig04B4, var_core_value_sigE863 + var_core_value_sig3932, var_core_value_sig04B4), var_core_value_sigEDBA.closePath();
}
function O(var_core_value_sig48B2, var_core_value_sig57DF, var_core_value_sigC985) {
  return var_core_value_sig48B2 + "\x20" + var_core_value_sig57DF / var_core_value_sigC985 + "px " + E.fontFamily;
}
const k = "board-mind-map-drag-preview-object",
  A = n.BOARD_RENDER_LAYER_INDEX["preview"];
function j(var_core_value_sig8DA6, var_core_value_sigCA69) {
  return Number.isFinite(var_core_value_sig8DA6) ? var_core_value_sig8DA6 : var_core_value_sigCA69;
}
function M() {
  return E.fallbackNodeWidth;
}
function N() {
  return E.fallbackNodeHeight;
}
function P(var_core_value_sigB77C) {
  return var_core_value_sigB77C === 1 ? "left" : var_core_value_sigB77C === 3 ? "right" : "center";
}
function F(var_core_value_sig9AFF, var_core_value_sig3545, var_core_value_sig5EE4, var_core_value_sig7EAB) {
  return var_core_value_sig5EE4 === 1 ? var_core_value_sig9AFF + var_core_value_sig7EAB : var_core_value_sig5EE4 === 3 ? var_core_value_sig9AFF + var_core_value_sig3545 - var_core_value_sig7EAB : var_core_value_sig9AFF + var_core_value_sig3545 / 2;
}
var ee = class extends a.BaseObject {
  constructor(var_core_value_sig066E = k, var_core_value_sig9B0D) {
    super(var_core_value_sig066E), b(this, "_state", {
      ghostBounds: null,
      parentBounds: null,
      side: "right",
      zoomRatio: 1
    }), this.evented = false, this.zIndex = n.BOARD_RENDER_OBJECT_Z_INDEX["transientPreviewForeground"], this.updateState(var_core_value_sig9B0D);
  }
  updateState(var_core_value_sig3D2C) {
    if (this._state = {
      ...this._state,
      ...var_core_value_sig3D2C
    }, this._state["ghostBounds"]) {
      let var_core_value_sigF593 = this._resolveDirtyBounds();
      this.transformByState(var_core_value_sigF593), this.show();
    } else this.hide();
    let var_core_value_sigC56D = this;
    typeof var_core_value_sigC56D.makeDirtyNoDebounce == "function" ? var_core_value_sigC56D.makeDirtyNoDebounce(true) : this.makeDirty(true);
  }
  isHit(var_core_value_sig3A17) {
    return false;
  }
  render(var_core_value_sig938F, var_core_value_sigD948) {
    let var_core_value_sigBE5E = this._state["ghostBounds"];
    if (!var_core_value_sigBE5E || !this.visible) return this.makeDirty(false), this;
    let var_core_value_sig0281 = Number.isFinite(this._state["zoomRatio"]) && (this._state["zoomRatio"] ?? 0) > 0 ? this._state["zoomRatio"] : 1,
      var_core_value_sigED71 = j(var_core_value_sigBE5E.left, 0),
      var_core_value_sig281C = j(var_core_value_sigBE5E.top, 0),
      var_core_value_sig3C92 = Math.max(1, j(var_core_value_sigBE5E.width, M())),
      var_core_value_sigB16B = Math.max(1, j(var_core_value_sigBE5E.height, N()));
    if (var_core_value_sig938F.save(), var_core_value_sig938F.globalAlpha = E.dragObjectAlpha, var_core_value_sig938F.lineWidth = E.lineWidthScreen / var_core_value_sig0281, var_core_value_sig938F.strokeStyle = E.primaryColor, var_core_value_sig938F.fillStyle = E.ghostFillColor, this._drawConnectorPreview(var_core_value_sig938F, {
      left: var_core_value_sigED71,
      top: var_core_value_sig281C,
      width: var_core_value_sig3C92,
      height: var_core_value_sigB16B
    }, var_core_value_sig0281), this._drawSourceHighlight(var_core_value_sig938F, var_core_value_sig0281), this._state["renderGhostNode"] === false) return var_core_value_sig938F.restore(), this.makeDirty(false), this;
    D(var_core_value_sig938F, var_core_value_sigED71, var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sigB16B, E.ghostRadius), var_core_value_sig938F.fill(), var_core_value_sig938F.stroke();
    let var_core_value_sig585D = this._state["textStyle"],
      var_core_value_sigE722 = Number.isFinite(var_core_value_sig585D == null ? undefined : var_core_value_sig585D.fontSize) && ((var_core_value_sig585D == null ? undefined : var_core_value_sig585D.fontSize) ?? 0) > 0 ? var_core_value_sig585D.fontSize : 16,
      var_core_value_sig062A = E.textPaddingScreen / var_core_value_sig0281;
    return var_core_value_sig938F.fillStyle = (var_core_value_sig585D == null ? undefined : var_core_value_sig585D.color) ?? E.ghostTextColor, var_core_value_sig938F.font = O(E.ghostFontWeight, var_core_value_sigE722, var_core_value_sig0281), var_core_value_sig938F.textAlign = P(var_core_value_sig585D == null ? undefined : var_core_value_sig585D.horizontalAlign), var_core_value_sig938F.textBaseline = "middle", var_core_value_sig938F.fillText((var_core_value_sig585D == null ? undefined : var_core_value_sig585D.text) || t.MIND_MAP_DEFAULT_NODE_TEXT, F(var_core_value_sigED71, var_core_value_sig3C92, var_core_value_sig585D == null ? undefined : var_core_value_sig585D.horizontalAlign, var_core_value_sig062A), var_core_value_sig281C + var_core_value_sigB16B / 2, Math.max(1, var_core_value_sig3C92 - var_core_value_sig062A * 2)), var_core_value_sig938F.restore(), this.makeDirty(false), this;
  }
  _resolveDirtyBounds() {
    let var_core_value_sig050A = this._state["ghostBounds"],
      var_core_value_sig8B32 = Number.isFinite(this._state["zoomRatio"]) && (this._state["zoomRatio"] ?? 0) > 0 ? this._state["zoomRatio"] : 1,
      var_core_value_sig870F = E.dirtyPaddingScreen / var_core_value_sig8B32;
    if (!var_core_value_sig050A) return {
      left: 0,
      top: 0,
      width: 1,
      height: 1
    };
    let var_core_value_sigB683 = j(var_core_value_sig050A.left, 0),
      var_core_value_sig26EC = j(var_core_value_sig050A.top, 0),
      var_core_value_sigEEDB = Math.max(1, j(var_core_value_sig050A.width, M())),
      var_core_value_sig36E7 = Math.max(1, j(var_core_value_sig050A.height, N())),
      var_core_value_sig6A78 = this._state["sourceBounds"],
      var_core_value_sigF7EF = this._state["parentBounds"],
      var_core_value_sig27F9 = j(var_core_value_sig6A78 == null ? undefined : var_core_value_sig6A78.left, var_core_value_sigB683),
      var_core_value_sig393E = j(var_core_value_sig6A78 == null ? undefined : var_core_value_sig6A78.top, var_core_value_sig26EC),
      var_core_value_sigB609 = Math.max(1, j(var_core_value_sig6A78 == null ? undefined : var_core_value_sig6A78.width, var_core_value_sigEEDB)),
      var_core_value_sig390D = Math.max(1, j(var_core_value_sig6A78 == null ? undefined : var_core_value_sig6A78.height, var_core_value_sig36E7));
    if (!var_core_value_sigF7EF) {
      let var_core_value_sig3607 = Math.min(var_core_value_sigB683, var_core_value_sig27F9) - var_core_value_sig870F,
        var_core_value_sigB512 = Math.min(var_core_value_sig26EC, var_core_value_sig393E) - var_core_value_sig870F,
        var_core_value_sigF2E6 = Math.max(var_core_value_sigB683 + var_core_value_sigEEDB, var_core_value_sig27F9 + var_core_value_sigB609) + var_core_value_sig870F,
        var_core_value_sig34C8 = Math.max(var_core_value_sig26EC + var_core_value_sig36E7, var_core_value_sig393E + var_core_value_sig390D) + var_core_value_sig870F;
      return {
        left: var_core_value_sig3607,
        top: var_core_value_sigB512,
        width: var_core_value_sigF2E6 - var_core_value_sig3607,
        height: var_core_value_sig34C8 - var_core_value_sigB512
      };
    }
    let var_core_value_sigC928 = j(var_core_value_sigF7EF.left, var_core_value_sigB683),
      var_core_value_sig39B7 = j(var_core_value_sigF7EF.top, var_core_value_sig26EC),
      var_core_value_sig18E0 = Math.max(1, j(var_core_value_sigF7EF.width, M())),
      var_core_value_sigE161 = Math.max(1, j(var_core_value_sigF7EF.height, N())),
      var_core_value_sigBDEE = Math.min(var_core_value_sigB683, var_core_value_sigC928, var_core_value_sig27F9) - var_core_value_sig870F,
      var_core_value_sig1F40 = Math.min(var_core_value_sig26EC, var_core_value_sig39B7, var_core_value_sig393E) - var_core_value_sig870F,
      var_core_value_sig3FC7 = Math.max(var_core_value_sigB683 + var_core_value_sigEEDB, var_core_value_sigC928 + var_core_value_sig18E0, var_core_value_sig27F9 + var_core_value_sigB609) + var_core_value_sig870F,
      var_core_value_sig1E1B = Math.max(var_core_value_sig26EC + var_core_value_sig36E7, var_core_value_sig39B7 + var_core_value_sigE161, var_core_value_sig393E + var_core_value_sig390D) + var_core_value_sig870F;
    return {
      left: var_core_value_sigBDEE,
      top: var_core_value_sig1F40,
      width: var_core_value_sig3FC7 - var_core_value_sigBDEE,
      height: var_core_value_sig1E1B - var_core_value_sig1F40
    };
  }
  _drawSourceHighlight(var_core_value_sig3B10, var_core_value_sig89E6) {
    var var_core_value_sig4743;
    let var_core_value_sigEB6A = this._state["sourceBounds"];
    if (!var_core_value_sigEB6A) return;
    let var_core_value_sig3D46 = E.sourceHaloScreen / var_core_value_sig89E6,
      var_core_value_sigCC93 = j(var_core_value_sigEB6A.left, 0) - var_core_value_sig3D46,
      var_core_value_sig5964 = j(var_core_value_sigEB6A.top, 0) - var_core_value_sig3D46,
      var_core_value_sig808B = Math.max(1, j(var_core_value_sigEB6A.width, M())) + var_core_value_sig3D46 * 2,
      var_core_value_sig2A26 = Math.max(1, j(var_core_value_sigEB6A.height, N())) + var_core_value_sig3D46 * 2;
    var_core_value_sig3B10.save(), var_core_value_sig3B10.globalAlpha = 1, var_core_value_sig3B10.lineWidth = E.lineWidthScreen / var_core_value_sig89E6, var_core_value_sig3B10.strokeStyle = E.sourceHighlightStrokeColor, var_core_value_sig3B10.fillStyle = E.sourceHighlightFillColor, (var_core_value_sig4743 = var_core_value_sig3B10.setLineDash) == null || var_core_value_sig4743.call(var_core_value_sig3B10, E.sourceDashScreen["map"](var_core_value_sigB744 => var_core_value_sigB744 / var_core_value_sig89E6)), D(var_core_value_sig3B10, var_core_value_sigCC93, var_core_value_sig5964, var_core_value_sig808B, var_core_value_sig2A26, E.rootRadius), var_core_value_sig3B10.fill(), var_core_value_sig3B10.stroke(), var_core_value_sig3B10.restore();
  }
  _drawConnectorPreview(var_core_value_sig1179, var_core_value_sigEA92, var_core_value_sig8FD9) {
    let var_core_value_sig1AE5 = this._state["parentBounds"];
    if (!var_core_value_sig1AE5) return;
    let var_core_value_sig7100 = j(var_core_value_sig1AE5.left, 0),
      var_core_value_sigA19A = j(var_core_value_sig1AE5.top, 0),
      var_core_value_sigD3F5 = Math.max(1, j(var_core_value_sig1AE5.width, M())),
      var_core_value_sig3082 = Math.max(1, j(var_core_value_sig1AE5.height, N())),
      var_core_value_sigF5D1 = E.branchGap,
      var_core_value_sig8775 = this._state["side"] ?? "right";
    if (var_core_value_sig1179.save(), var_core_value_sig1179.globalAlpha = E.connectorAlpha, var_core_value_sig1179.strokeStyle = E.primaryColor, var_core_value_sig1179.lineWidth = E.lineWidthScreen / var_core_value_sig8FD9, var_core_value_sig1179.lineCap = "round", var_core_value_sig1179.lineJoin = "round", var_core_value_sig1179.beginPath(), var_core_value_sig8775 === "top" || var_core_value_sig8775 === "bottom") {
      let var_core_value_sigEAE2 = var_core_value_sig7100 + var_core_value_sigD3F5 / 2,
        var_core_value_sigE68A = var_core_value_sigEA92.left + var_core_value_sigEA92.width / 2,
        var_core_value_sig3E68 = var_core_value_sig8775 === "bottom" ? var_core_value_sigA19A + var_core_value_sig3082 : var_core_value_sigA19A,
        var_core_value_sigF4C5 = var_core_value_sig8775 === "bottom" ? var_core_value_sigEA92.top : var_core_value_sigEA92.top + var_core_value_sigEA92.height,
        var_core_value_sig5410 = var_core_value_sig8775 === "bottom" ? Math.min(var_core_value_sig3E68 + var_core_value_sigF5D1, (var_core_value_sig3E68 + var_core_value_sigF4C5) / 2) : Math.max(var_core_value_sig3E68 - var_core_value_sigF5D1, (var_core_value_sig3E68 + var_core_value_sigF4C5) / 2);
      var_core_value_sig1179.moveTo(var_core_value_sigEAE2, var_core_value_sig3E68), var_core_value_sig1179.lineTo(var_core_value_sigEAE2, var_core_value_sig5410), var_core_value_sig1179.lineTo(var_core_value_sigE68A, var_core_value_sig5410), var_core_value_sig1179.lineTo(var_core_value_sigE68A, var_core_value_sigF4C5);
    } else {
      let var_core_value_sig492F = var_core_value_sigA19A + var_core_value_sig3082 / 2,
        var_core_value_sig8EA0 = var_core_value_sigEA92.top + var_core_value_sigEA92.height / 2,
        var_core_value_sigA6F6 = var_core_value_sig8775 === "right" ? var_core_value_sig7100 + var_core_value_sigD3F5 : var_core_value_sig7100,
        var_core_value_sigCDDA = var_core_value_sig8775 === "right" ? var_core_value_sigEA92.left : var_core_value_sigEA92.left + var_core_value_sigEA92.width,
        var_core_value_sigE243 = var_core_value_sig8775 === "right" ? Math.min(var_core_value_sigA6F6 + var_core_value_sigF5D1, (var_core_value_sigA6F6 + var_core_value_sigCDDA) / 2) : Math.max(var_core_value_sigA6F6 - var_core_value_sigF5D1, (var_core_value_sigA6F6 + var_core_value_sigCDDA) / 2);
      var_core_value_sig1179.moveTo(var_core_value_sigA6F6, var_core_value_sig492F), var_core_value_sig1179.lineTo(var_core_value_sigE243, var_core_value_sig492F), var_core_value_sig1179.lineTo(var_core_value_sigE243, var_core_value_sig8EA0), var_core_value_sig1179.lineTo(var_core_value_sigCDDA, var_core_value_sig8EA0);
    }
    var_core_value_sig1179.stroke(), var_core_value_sig1179.restore();
  }
};
function I(var_core_value_sig56B9, var_core_value_sig90CF) {
  return (var_core_value_sig90CF == null ? undefined : var_core_value_sig90CF[var_core_value_sig56B9.elementId]) ?? var_core_value_sig56B9.element["transform"];
}
function L(var_core_value_sigA386, var_core_value_sigCD6E) {
  let var_core_value_sigFD9D = I(var_core_value_sigA386, var_core_value_sigCD6E);
  return {
    x: (var_core_value_sigFD9D.left ?? 0) + (var_core_value_sigFD9D.width ?? 0) / 2,
    y: (var_core_value_sigFD9D.top ?? 0) + (var_core_value_sigFD9D.height ?? 0) / 2
  };
}
function R(var_core_value_sigA2A4, var_core_value_sigA1AC) {
  return Math.hypot(var_core_value_sigA2A4.x - var_core_value_sigA1AC.x, var_core_value_sigA2A4.y - var_core_value_sigA1AC.y);
}
function te(var_core_value_sig6180, var_core_value_sigB93D) {
  let var_core_value_sigB17C = var_core_value_sig6180.left ?? 0,
    var_core_value_sig69B6 = var_core_value_sig6180.top ?? 0,
    var_core_value_sig708D = var_core_value_sigB17C + (var_core_value_sig6180.width ?? 0),
    var_core_value_sig1ED2 = var_core_value_sig69B6 + (var_core_value_sig6180.height ?? 0),
    var_core_value_sig94C1 = var_core_value_sigB93D.left ?? 0,
    var_core_value_sigABAC = var_core_value_sigB93D.top ?? 0,
    var_core_value_sigFAE6 = var_core_value_sig94C1 + (var_core_value_sigB93D.width ?? 0),
    var_core_value_sig06AC = var_core_value_sigABAC + (var_core_value_sigB93D.height ?? 0),
    var_core_value_sig57E2 = Math.max(var_core_value_sig94C1 - var_core_value_sig708D, var_core_value_sigB17C - var_core_value_sigFAE6, 0),
    var_core_value_sig01FC = Math.max(var_core_value_sigABAC - var_core_value_sig1ED2, var_core_value_sig69B6 - var_core_value_sig06AC, 0);
  return Math.hypot(var_core_value_sig57E2, var_core_value_sig01FC);
}
function ne(var_core_value_sig10FC, var_core_value_sig5374, var_core_value_sigB66D) {
  var var_core_value_sigD0F0;
  let var_core_value_sig8E31 = (0, t.getMindMapNodeMeta)((var_core_value_sigD0F0 = var_core_value_sig10FC[var_core_value_sig5374]) == null ? undefined : var_core_value_sigD0F0.element);
  for (; var_core_value_sig8E31 != null && var_core_value_sig8E31.parentNodeId;) {
    var var_core_value_sig8339;
    if (var_core_value_sig8E31.parentNodeId === var_core_value_sigB66D) return true;
    var_core_value_sig8E31 = (0, t.getMindMapNodeMeta)((var_core_value_sig8339 = var_core_value_sig10FC[var_core_value_sig8E31.parentNodeId]) == null ? undefined : var_core_value_sig8339.element);
  }
  return false;
}
function z(var_core_value_sigA01E, var_core_value_sigA41E, var_core_value_sig939C) {
  let var_core_value_sigA49E = I(var_core_value_sigA01E, var_core_value_sig939C),
    var_core_value_sig6DEB = var_core_value_sigA49E.top ?? 0,
    var_core_value_sig2F0D = var_core_value_sigA49E.height ?? 0;
  return var_core_value_sig2F0D <= 0 ? null : var_core_value_sigA41E.y <= var_core_value_sig6DEB + var_core_value_sig2F0D / 3 ? "before" : var_core_value_sigA41E.y >= var_core_value_sig6DEB + var_core_value_sig2F0D * 2 / 3 ? "after" : null;
}
function B(var_core_value_sig5141, var_core_value_sigA9E0) {
  let var_core_value_sig751D = var_core_value_sigA9E0 == null ? undefined : var_core_value_sigA9E0[var_core_value_sig5141];
  return Number.isFinite(var_core_value_sig751D == null ? undefined : var_core_value_sig751D.left) && Number.isFinite(var_core_value_sig751D == null ? undefined : var_core_value_sig751D.top) ? {
    kind: "detach",
    left: var_core_value_sig751D.left,
    top: var_core_value_sig751D.top
  } : {
    kind: "detach"
  };
}
function V(var_core_value_sig2E9A, var_core_value_sigE105, var_core_value_sig0BD6) {
  let var_core_value_sig3070 = var_core_value_sig2E9A[var_core_value_sigE105],
    var_core_value_sigC66D = (0, t.getMindMapNodeMeta)(var_core_value_sig3070 == null ? undefined : var_core_value_sig3070.element);
  if (!var_core_value_sig3070 || !var_core_value_sigC66D || !var_core_value_sigC66D.parentNodeId && !(var_core_value_sig0BD6 != null && var_core_value_sig0BD6.allowRootReparent)) return {
    kind: "none"
  };
  let var_core_value_sig8EC5 = var_core_value_sig0BD6 == null ? undefined : var_core_value_sig0BD6.boundsByElementId,
    var_core_value_sig1056 = I(var_core_value_sig3070, var_core_value_sig8EC5),
    var_core_value_sig6EE5 = L(var_core_value_sig3070, var_core_value_sig8EC5),
    var_core_value_sig9DD9 = Object.values(var_core_value_sig2E9A).map(var_core_value_sig481B => {
      let var_core_value_sig13D7 = (0, t.getMindMapNodeMeta)(var_core_value_sig481B.element);
      return !var_core_value_sig13D7 || var_core_value_sig481B.elementId === var_core_value_sigE105 || var_core_value_sig481B.elementId === var_core_value_sigC66D.parentNodeId || var_core_value_sig0BD6 != null && var_core_value_sig0BD6.allowRootReparent && !var_core_value_sigC66D.parentNodeId && var_core_value_sig13D7.structureScopeId === var_core_value_sigC66D.structureScopeId || ne(var_core_value_sig2E9A, var_core_value_sig481B.elementId, var_core_value_sigE105) ? null : {
        item: var_core_value_sig481B,
        snapDistance: te(var_core_value_sig1056, I(var_core_value_sig481B, var_core_value_sig8EC5)),
        center: L(var_core_value_sig481B, var_core_value_sig8EC5)
      };
    }).filter(var_core_value_sig90C0 => !!var_core_value_sig90C0).sort((var_core_value_sigF1B2, var_core_value_sigC2BB) => var_core_value_sigF1B2.snapDistance - var_core_value_sigC2BB.snapDistance || R(var_core_value_sig6EE5, var_core_value_sigF1B2.center) - R(var_core_value_sig6EE5, var_core_value_sigC2BB.center))[0];
  if (var_core_value_sig9DD9 && var_core_value_sig9DD9.snapDistance <= 100) {
    let var_core_value_sigD9DB = (0, t.getMindMapNodeMeta)(var_core_value_sig9DD9.item["element"]),
      var_core_value_sigA363 = var_core_value_sigD9DB != null && var_core_value_sigD9DB.parentNodeId ? z(var_core_value_sig9DD9.item, var_core_value_sig6EE5, var_core_value_sig8EC5) : null;
    return var_core_value_sigD9DB != null && var_core_value_sigD9DB.parentNodeId && var_core_value_sigA363 ? {
      kind: "reparent",
      newParentNodeId: var_core_value_sigD9DB.parentNodeId,
      side: var_core_value_sigD9DB.side ?? "right",
      referenceNodeId: var_core_value_sig9DD9.item["elementId"],
      placement: var_core_value_sigA363
    } : {
      kind: "reparent",
      newParentNodeId: var_core_value_sig9DD9.item["elementId"],
      side: var_core_value_sig6EE5.x < var_core_value_sig9DD9.center["x"] ? "left" : "right"
    };
  }
  if (var_core_value_sig0BD6 != null && var_core_value_sig0BD6.detachWhenNoSnap) return B(var_core_value_sigE105, var_core_value_sig8EC5);
  if (!var_core_value_sigC66D.parentNodeId) return {
    kind: "none"
  };
  let var_core_value_sig09AC = var_core_value_sig2E9A[var_core_value_sigC66D.parentNodeId];
  return var_core_value_sig09AC && R(var_core_value_sig6EE5, L(var_core_value_sig09AC, var_core_value_sig8EC5)) > 560 ? B(var_core_value_sigE105, var_core_value_sig8EC5) : {
    kind: "none"
  };
}
function re(var_core_value_sig1613, var_core_value_sigADC6) {
  var var_core_value_sig4620, var_core_value_sig07FB;
  return var_core_value_sig1613.elementId === var_core_value_sigADC6 || ((var_core_value_sig4620 = (0, t.getMindMapNodeMeta)(var_core_value_sig1613.element)) == null ? undefined : var_core_value_sig4620.structureScopeId) === var_core_value_sigADC6 || ((var_core_value_sig07FB = (0, t.getMindMapConnectorMeta)(var_core_value_sig1613.element)) == null ? undefined : var_core_value_sig07FB.structureScopeId) === var_core_value_sigADC6;
}
function ie(var_core_value_sig617E, var_core_value_sigC85E, var_core_value_sig8293, var_core_value_sig050D) {
  let var_core_value_sig37AE = var_core_value_sig617E[var_core_value_sigC85E];
  if (!var_core_value_sig37AE) return var_core_value_sig617E;
  let var_core_value_sig5B51 = var_core_value_sig37AE.transform ?? var_core_value_sig37AE.element["transform"] ?? {};
  return {
    ...var_core_value_sig617E,
    [var_core_value_sigC85E]: {
      ...var_core_value_sig37AE,
      transform: {
        ...var_core_value_sig5B51,
        left: (var_core_value_sig5B51.left ?? 0) + var_core_value_sig8293,
        top: (var_core_value_sig5B51.top ?? 0) + var_core_value_sig050D
      },
      element: {
        ...var_core_value_sig37AE.element,
        transform: {
          ...var_core_value_sig37AE.element["transform"],
          left: (var_core_value_sig37AE.element["transform"].left ?? 0) + var_core_value_sig8293,
          top: (var_core_value_sig37AE.element["transform"].top ?? 0) + var_core_value_sig050D
        }
      }
    }
  };
}
function ae(var_core_value_sig64FF) {
  if (!Number.isFinite(var_core_value_sig64FF.liveRootBounds["left"]) || !Number.isFinite(var_core_value_sig64FF.liveRootBounds["top"]) || !Number.isFinite(var_core_value_sig64FF.rootStartBounds["left"]) || !Number.isFinite(var_core_value_sig64FF.rootStartBounds["top"])) return null;
  let var_core_value_sig86F4 = var_core_value_sig64FF.liveRootBounds["left"] - var_core_value_sig64FF.rootStartBounds["left"],
    var_core_value_sig9E0F = var_core_value_sig64FF.liveRootBounds["top"] - var_core_value_sig64FF.rootStartBounds["top"],
    var_core_value_sig3A42 = ie(var_core_value_sig64FF.elementData, var_core_value_sig64FF.scopeId, var_core_value_sig86F4, var_core_value_sig9E0F),
    var_core_value_sig8802 = [];
  return Object.values(var_core_value_sig3A42).forEach(var_core_value_sigFBA5 => {
    if (var_core_value_sigFBA5.elementId === var_core_value_sig64FF.rootNodeId || var_core_value_sigFBA5.elementId === var_core_value_sig64FF.scopeId || !re(var_core_value_sigFBA5, var_core_value_sig64FF.scopeId)) return;
    if ("connectorData" in var_core_value_sigFBA5.element) {
      var var_core_value_sigAC47;
      let var_core_value_sig74A8 = (var_core_value_sigAC47 = var_core_value_sig64FF.elementData[var_core_value_sigFBA5.elementId]) == null ? undefined : var_core_value_sigAC47.element;
      var_core_value_sig74A8 && "connectorData" in var_core_value_sig74A8 && var_core_value_sig8802.push({
        kind: "connector",
        elementId: var_core_value_sigFBA5.elementId,
        element: (0, e.offsetBoardConnectorGeometry)(var_core_value_sig74A8, {
          x: var_core_value_sig86F4,
          y: var_core_value_sig9E0F
        })
      });
      return;
    }
    let var_core_value_sigA06F = (0, e.resolveBoardElementWorldBounds)(var_core_value_sig3A42, var_core_value_sigFBA5.elementId);
    var_core_value_sigA06F && var_core_value_sig8802.push({
      kind: "bounds",
      elementId: var_core_value_sigFBA5.elementId,
      bounds: var_core_value_sigA06F
    });
  }), {
    deltaX: var_core_value_sig86F4,
    deltaY: var_core_value_sig9E0F,
    elementData: var_core_value_sig3A42,
    items: var_core_value_sig8802
  };
}
let oe = class extends i.RxDisposable {
  constructor(var_core_value_sig770E, var_core_value_sig4654, var_core_value_sigB26B, var_core_value_sig019B, var_core_value_sigC6BC, var_core_value_sig8EC2, var_core_value_sigA8C3) {
    super(), this._renderContext = var_core_value_sig770E, this._boardElementService = var_core_value_sig4654, this._elementStateService = var_core_value_sigB26B, this._commandService = var_core_value_sig019B, this._uiStateService = var_core_value_sigC6BC, this._instanceService = var_core_value_sig8EC2, this._undoRedoGroupService = var_core_value_sigA8C3, b(this, "_dragStart", null), b(this, "_pointerDragStart", null), b(this, "_dragPreviewObject", null), b(this, "_childDragActivated", false), b(this, "_lastChildDragAction", null), b(this, "_objectPointerDisposables", null), b(this, "_attachObjectPointerScheduled", false), b(this, "_activePointerDragDisposables", null), b(this, "_childDragSelectionHidden", false), this._init();
  }
  _init() {
    var var_core_value_sig5276, var_core_value_sig031B, var_core_value_sig9DC0, var_core_value_sig95F0, var_core_value_sig9CCB;
    let var_core_value_sigE718 = this._renderContext["scene"].getTransformerByCreate();
    this.disposeWithMe((0, i.toDisposable)(var_core_value_sigE718.changeStart$["pipe"]((0, o.takeUntil)(this.dispose$)).subscribe(() => {
      this._captureDragStart();
    }))), this.disposeWithMe((0, i.toDisposable)(((var_core_value_sig5276 = var_core_value_sigE718.changing$) == null ? undefined : var_core_value_sig5276.pipe((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sig21B2 => {
      this._syncDragPreview(var_core_value_sig21B2 == null ? undefined : var_core_value_sig21B2.objects);
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe((0, i.toDisposable)(var_core_value_sigE718.changeEnd$["pipe"]((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sigDE08 => {
      setTimeout(() => this._applyDragTopologyAction(var_core_value_sigDE08 == null ? undefined : var_core_value_sigDE08.objects), 0);
    }))), this.disposeWithMe((0, i.toDisposable)(((var_core_value_sig031B = this._renderContext["scene"].onPointerDown$) == null ? undefined : var_core_value_sig031B.subscribeEvent({
      priority: 3,
      next: ([var_core_value_sigACCB]) => this._capturePointerChildDragStart(var_core_value_sigACCB)
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe((0, i.toDisposable)(((var_core_value_sig9DC0 = this._renderContext["scene"].onPointerMove$) == null ? undefined : var_core_value_sig9DC0.subscribeEvent({
      priority: 3,
      next: ([var_core_value_sig7F33, var_core_value_sig0C53]) => this._syncPointerChildDragPreview(var_core_value_sig7F33, var_core_value_sig0C53)
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe((0, i.toDisposable)(((var_core_value_sig95F0 = this._renderContext["scene"].onPointerUp$) == null ? undefined : var_core_value_sig95F0.subscribeEvent({
      priority: 3,
      next: ([var_core_value_sigEA04, var_core_value_sig7A62]) => this._applyPointerChildDrag(var_core_value_sigEA04, var_core_value_sig7A62)
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe((0, i.toDisposable)(((var_core_value_sig9CCB = this._renderContext["scene"].onPointerCancel$) == null ? undefined : var_core_value_sig9CCB.subscribeEvent({
      priority: 3,
      next: ([, var_core_value_sig8109]) => this._cancelPointerChildDrag(var_core_value_sig8109)
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe((0, i.toDisposable)(() => {
      var var_core_value_sig7565;
      return (var_core_value_sig7565 = this._objectPointerDisposables) == null ? undefined : var_core_value_sig7565.dispose();
    })), this.disposeWithMe((0, i.toDisposable)(() => this._disposeActivePointerDragListeners())), this._subscribeElementDataChanges(), this._scheduleAttachObjectPointerListeners(), this.disposeWithMe((0, i.toDisposable)(() => this._removeDragPreviewObject()));
  }
  _subscribeElementDataChanges() {
    [this._boardElementService["elementAdd$"], this._boardElementService["elementUpdate$"], this._boardElementService["elementRemove$"]].forEach(var_core_value_sigD4FB => {
      this.disposeWithMe((0, i.toDisposable)(var_core_value_sigD4FB.pipe((0, o.takeUntil)(this.dispose$)).subscribe(() => {
        this._scheduleAttachObjectPointerListeners();
      })));
    }), this._elementStateService["state$"] && this.disposeWithMe((0, i.toDisposable)(this._elementStateService["state$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(() => {
      this._scheduleAttachObjectPointerListeners();
    })));
  }
  _scheduleAttachObjectPointerListeners() {
    this._attachObjectPointerScheduled || (this._attachObjectPointerScheduled = true, Promise.resolve().then(() => this._attachObjectPointerListeners()));
  }
  _attachObjectPointerListeners() {
    var var_core_value_sigAEC8;
    this._attachObjectPointerScheduled = false;
    let var_core_value_sigB977 = this._resolveCurrentBoardContext(),
      var_core_value_sig2949 = this._renderContext["scene"];
    if (!var_core_value_sigB977 || typeof var_core_value_sig2949.getObject != "function") return;
    let var_core_value_sig308A = this._boardElementService["getElementData"](var_core_value_sigB977.unitId, var_core_value_sigB977.subUnitId),
      var_core_value_sig528D = new i["DisposableCollection"]();
    (var_core_value_sigAEC8 = this._objectPointerDisposables) == null || var_core_value_sigAEC8.dispose(), this._objectPointerDisposables = var_core_value_sig528D, Object.values(var_core_value_sig308A).forEach(var_core_value_sig3E71 => {
      var var_core_value_sig01B3, var_core_value_sig7442;
      let var_core_value_sigDF87 = (0, t.getMindMapNodeMeta)(var_core_value_sig3E71.element);
      if (!(var_core_value_sigDF87 != null && var_core_value_sigDF87.parentNodeId)) return;
      let var_core_value_sig9EE0 = (0, n.getBoardElementRenderObjectKey)(var_core_value_sigB977.unitId, var_core_value_sig3E71.elementId),
        var_core_value_sigF051 = ((var_core_value_sig01B3 = var_core_value_sig2949.getObjectIncludeInGroup) == null ? undefined : var_core_value_sig01B3.call(var_core_value_sig2949, var_core_value_sig9EE0)) ?? ((var_core_value_sig7442 = var_core_value_sig2949.getObject) == null ? undefined : var_core_value_sig7442.call(var_core_value_sig2949, var_core_value_sig9EE0));
      var_core_value_sigF051 != null && var_core_value_sigF051.onPointerDown$ && var_core_value_sig528D.add(var_core_value_sigF051.onPointerDown$["subscribeEvent"]({
        priority: -10,
        next: ([var_core_value_sig7B2A, var_core_value_sig06CD]) => this._capturePointerChildDragStart(var_core_value_sig7B2A, {
          unitId: var_core_value_sigB977.unitId,
          subUnitId: var_core_value_sigB977.subUnitId,
          nodeId: var_core_value_sig3E71.elementId
        }, var_core_value_sig06CD)
      }));
    });
  }
  _resolveCurrentBoardContext() {
    let var_core_value_sigA309 = this._elementStateService["getSnapshot"]().context;
    if (var_core_value_sigA309) return var_core_value_sigA309;
    let var_core_value_sig9E20 = this._renderContext["unitId"],
      var_core_value_sig26BB = var_core_value_sig9E20 ? this._instanceService["getUnit"](var_core_value_sig9E20, i.UniverInstanceType["UNIVER_BOARD"]) : null,
      var_core_value_sig19B4 = var_core_value_sig26BB == null ? undefined : var_core_value_sig26BB.getActivePageId();
    return !var_core_value_sig26BB || !var_core_value_sig19B4 ? null : {
      unitId: var_core_value_sig26BB.getUnitId(),
      subUnitId: var_core_value_sig19B4
    };
  }
  _captureDragStart() {
    let var_core_value_sig218A = this._elementStateService["getSnapshot"]();
    this._childDragActivated = false, this._childDragSelectionHidden = false, this._lastChildDragAction = null;
    let var_core_value_sig14CB = var_core_value_sig218A.context,
      var_core_value_sigFDEE = var_core_value_sig218A.focusedId ?? var_core_value_sig218A.selectedIds[0];
    if (!var_core_value_sig14CB || !var_core_value_sigFDEE) {
      this._dragStart = null, this._removeDragPreviewObject();
      return;
    }
    let var_core_value_sigA676 = this._boardElementService["getElementData"](var_core_value_sig14CB.unitId, var_core_value_sig14CB.subUnitId);
    if (var_core_value_sig218A.selectedIds["length"] > 1) {
      let var_core_value_sig0B45 = this._resolveCompleteSelectedScope(var_core_value_sigA676, var_core_value_sig218A.selectedIds);
      if (!var_core_value_sig0B45) {
        this._dragStart = null, this._removeDragPreviewObject();
        return;
      }
      let var_core_value_sig36F8 = var_core_value_sigA676[var_core_value_sig0B45.rootNodeId],
        var_core_value_sig03E1 = (0, e.resolveBoardElementWorldBounds)(var_core_value_sigA676, var_core_value_sig0B45.rootNodeId),
        var_core_value_sigBB57 = var_core_value_sig36F8.element["transform"];
      this._dragStart = {
        kind: "scope",
        unitId: var_core_value_sig14CB.unitId,
        subUnitId: var_core_value_sig14CB.subUnitId,
        nodeId: var_core_value_sig0B45.rootNodeId,
        scopeId: var_core_value_sig0B45.scopeId,
        left: (var_core_value_sig03E1 == null ? undefined : var_core_value_sig03E1.left) ?? var_core_value_sigBB57.left ?? 0,
        top: (var_core_value_sig03E1 == null ? undefined : var_core_value_sig03E1.top) ?? var_core_value_sigBB57.top ?? 0,
        width: (var_core_value_sig03E1 == null ? undefined : var_core_value_sig03E1.width) ?? var_core_value_sigBB57.width ?? 0,
        height: (var_core_value_sig03E1 == null ? undefined : var_core_value_sig03E1.height) ?? var_core_value_sigBB57.height ?? 0,
        elementData: var_core_value_sigA676
      };
      return;
    }
    let var_core_value_sigC27E = var_core_value_sigA676[var_core_value_sigFDEE],
      var_core_value_sigA70D = (0, t.getMindMapNodeMeta)(var_core_value_sigC27E == null ? undefined : var_core_value_sigC27E.element);
    if (!var_core_value_sigC27E || !var_core_value_sigA70D) {
      this._dragStart = null, this._removeDragPreviewObject();
      return;
    }
    let var_core_value_sigCE10 = (0, e.resolveBoardElementWorldBounds)(var_core_value_sigA676, var_core_value_sigFDEE),
      var_core_value_sigA3861 = var_core_value_sigC27E.element["transform"];
    this._dragStart = {
      kind: var_core_value_sigA70D.parentNodeId === null ? "root" : "child",
      unitId: var_core_value_sig14CB.unitId,
      subUnitId: var_core_value_sig14CB.subUnitId,
      nodeId: var_core_value_sigFDEE,
      scopeId: var_core_value_sigA70D.structureScopeId,
      left: (var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10.left) ?? var_core_value_sigA3861.left ?? 0,
      top: (var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10.top) ?? var_core_value_sigA3861.top ?? 0,
      width: (var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10.width) ?? var_core_value_sigA3861.width ?? 0,
      height: (var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10.height) ?? var_core_value_sigA3861.height ?? 0,
      elementData: var_core_value_sigA676
    };
  }
  _resolveCompleteSelectedScope(var_core_value_sigCD82, var_core_value_sig44DD) {
    let var_core_value_sig96FA = new Set(var_core_value_sig44DD),
      var_core_value_sigAB68 = var_core_value_sig44DD.map(var_core_value_sig7C4A => {
        var var_core_value_sigE799, var_core_value_sigB601, var_core_value_sig8B71, var_core_value_sigAEFB;
        let var_core_value_sig826B = (var_core_value_sigE799 = var_core_value_sigCD82[var_core_value_sig7C4A]) == null ? undefined : var_core_value_sigE799.element;
        return ((var_core_value_sigB601 = (0, t.getMindMapNodeMeta)(var_core_value_sig826B)) == null ? undefined : var_core_value_sigB601.structureScopeId) ?? ((var_core_value_sig8B71 = (0, t.getMindMapConnectorMeta)(var_core_value_sig826B)) == null ? undefined : var_core_value_sig8B71.structureScopeId) ?? ((var_core_value_sigAEFB = (0, t.getMindMapContainerMeta)(var_core_value_sig826B)) == null ? undefined : var_core_value_sigAEFB.structureScopeId) ?? null;
      });
    if (var_core_value_sigAB68.some(var_core_value_sigCF89 => var_core_value_sigCF89 === null) || new Set(var_core_value_sigAB68).size !== 1) return null;
    let var_core_value_sig040A = var_core_value_sigAB68[0];
    if (!var_core_value_sig040A) return null;
    let var_core_value_sig2AE0 = Object.values(var_core_value_sigCD82).filter(var_core_value_sig00CB => {
      var var_core_value_sig77EE;
      return var_core_value_sig00CB.element["visible"] !== false && ((var_core_value_sig77EE = (0, t.getMindMapNodeMeta)(var_core_value_sig00CB.element)) == null ? undefined : var_core_value_sig77EE.structureScopeId) === var_core_value_sig040A;
    });
    if (var_core_value_sig2AE0.length === 0 || var_core_value_sig2AE0.some(var_core_value_sig9F76 => !var_core_value_sig96FA.has(var_core_value_sig9F76.elementId))) return null;
    let var_core_value_sigC349 = var_core_value_sig2AE0.filter(var_core_value_sigB008 => {
      var var_core_value_sig8721;
      return ((var_core_value_sig8721 = (0, t.getMindMapNodeMeta)(var_core_value_sigB008.element)) == null ? undefined : var_core_value_sig8721.parentNodeId) === null;
    });
    return var_core_value_sigC349.length === 1 ? {
      rootNodeId: var_core_value_sigC349[0].elementId,
      scopeId: var_core_value_sig040A
    } : null;
  }
  _capturePointerChildDragStart(var_core_value_sig9D96, var_core_value_sig2776, var_core_value_sig6FB2) {
    var var_core_value_sigEB43, var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866;
    if (this._uiStateService["getState"]().interactionMode === "viewing" || (var_core_value_sig9D96.button ?? 0) !== 0) return;
    let var_core_value_sig5EFB = this._elementStateService["getSnapshot"]();
    if (var_core_value_sig5EFB.activeEditingId) {
      this._pointerDragStart = null;
      return;
    }
    let var_core_value_sig3A85 = var_core_value_sig2776 ? {
        unitId: var_core_value_sig2776.unitId,
        subUnitId: var_core_value_sig2776.subUnitId
      } : var_core_value_sig5EFB.context ?? this._resolveCurrentBoardContext(),
      var_core_value_sig2682 = (var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.nodeId) ?? (var_core_value_sig5EFB.selectedIds["length"] === 1 ? var_core_value_sig5EFB.focusedId ?? var_core_value_sig5EFB.selectedIds[0] : undefined);
    if (!var_core_value_sig3A85) {
      this._pointerDragStart = null;
      return;
    }
    let var_core_value_sig4BB5 = this._boardElementService["getElementData"](var_core_value_sig3A85.unitId, var_core_value_sig3A85.subUnitId),
      var_core_value_sig6709 = this._getBoardPointFromEvent(var_core_value_sig9D96);
    if (!var_core_value_sig2776) {
      let var_core_value_sig08BA = var_core_value_sig2682 ? var_core_value_sig4BB5[var_core_value_sig2682] : null,
        var_core_value_sigDBB5 = (0, t.getMindMapNodeMeta)(var_core_value_sig08BA == null ? undefined : var_core_value_sig08BA.element),
        var_core_value_sigCFAC = var_core_value_sig2682 ? (0, e.resolveBoardElementWorldBounds)(var_core_value_sig4BB5, var_core_value_sig2682) ?? (var_core_value_sig08BA == null ? undefined : var_core_value_sig08BA.element["transform"]) : null;
      (!(var_core_value_sigDBB5 != null && var_core_value_sigDBB5.parentNodeId) || !var_core_value_sigCFAC || !this._isPointInBounds(var_core_value_sig6709, {
        left: var_core_value_sigCFAC.left ?? 0,
        top: var_core_value_sigCFAC.top ?? 0,
        width: var_core_value_sigCFAC.width ?? 0,
        height: var_core_value_sigCFAC.height ?? 0
      })) && (var_core_value_sig2682 = this._findChildNodeAtPoint(var_core_value_sig4BB5, var_core_value_sig6709));
    }
    if (!var_core_value_sig2682) {
      this._pointerDragStart = null;
      return;
    }
    let var_core_value_sig52CA = var_core_value_sig4BB5[var_core_value_sig2682],
      var_core_value_sigC030 = (0, t.getMindMapNodeMeta)(var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.element);
    if (!var_core_value_sig52CA || !(var_core_value_sigC030 != null && var_core_value_sigC030.parentNodeId)) {
      this._pointerDragStart = null;
      return;
    }
    this._instanceService["focusUnit"](var_core_value_sig3A85.unitId), (var_core_value_sigEB43 = this._renderContext["engine"]) == null || (var_core_value_sig4186 = var_core_value_sigEB43.getCanvasElement) == null || (var_core_value_sig4186 = var_core_value_sig4186.call(var_core_value_sigEB43)) == null || (var_core_value_sigF963 = var_core_value_sig4186.focus) == null || var_core_value_sigF963.call(var_core_value_sig4186, {
      preventScroll: true
    }), (var_core_value_sigB608 = (var_core_value_sigF866 = this._elementStateService).selectElements) == null || var_core_value_sigB608.call(var_core_value_sigF866, var_core_value_sig3A85, [var_core_value_sig2682], var_core_value_sig2682), var_core_value_sig6FB2 == null || var_core_value_sig6FB2.stopPropagation();
    let var_core_value_sig88F6 = (0, e.resolveBoardElementWorldBounds)(var_core_value_sig4BB5, var_core_value_sig2682),
      var_core_value_sig37DB = var_core_value_sig52CA.element["transform"],
      var_core_value_sig5542 = {
        left: (var_core_value_sig88F6 == null ? undefined : var_core_value_sig88F6.left) ?? var_core_value_sig37DB.left ?? 0,
        top: (var_core_value_sig88F6 == null ? undefined : var_core_value_sig88F6.top) ?? var_core_value_sig37DB.top ?? 0,
        width: (var_core_value_sig88F6 == null ? undefined : var_core_value_sig88F6.width) ?? var_core_value_sig37DB.width ?? 0,
        height: (var_core_value_sig88F6 == null ? undefined : var_core_value_sig88F6.height) ?? var_core_value_sig37DB.height ?? 0
      };
    if (!var_core_value_sig2776 && !this._isPointInBounds(var_core_value_sig6709, var_core_value_sig5542)) {
      this._pointerDragStart = null;
      return;
    }
    let var_core_value_sigE0A9 = this._getPointerScreenPoint(var_core_value_sig9D96);
    this._childDragActivated = false, this._childDragSelectionHidden = false, this._lastChildDragAction = null, this._pointerDragStart = {
      kind: "child",
      unitId: var_core_value_sig3A85.unitId,
      subUnitId: var_core_value_sig3A85.subUnitId,
      nodeId: var_core_value_sig2682,
      scopeId: var_core_value_sigC030.structureScopeId,
      ...var_core_value_sig5542,
      pointerStartX: var_core_value_sigE0A9.x,
      pointerStartY: var_core_value_sigE0A9.y,
      elementData: var_core_value_sig4BB5
    }, this._attachActivePointerDragListeners(), this._consumePointerEvent(var_core_value_sig9D96, var_core_value_sig6FB2);
  }
  _syncPointerChildDragPreview(var_core_value_sigA73E, var_core_value_sig7620) {
    var var_core_value_sigB9FC, var_core_value_sig5055;
    let var_core_value_sig3801 = this._pointerDragStart;
    if (!var_core_value_sig3801 || var_core_value_sigA73E.buttons !== undefined && var_core_value_sigA73E.buttons !== 1) return;
    let var_core_value_sig45F0 = this._getPointerLiveBounds(var_core_value_sigA73E, var_core_value_sig3801);
    if (!this._isChildDragPastActivationThreshold(var_core_value_sig3801, var_core_value_sig45F0)) return;
    this._childDragActivated || this._hideSelectionForChildDrag(), this._childDragActivated = true;
    let var_core_value_sigBC91 = this._createTopologyBoundsByElementId(var_core_value_sig3801.elementData, var_core_value_sig3801.nodeId, var_core_value_sig45F0),
      var_core_value_sigCB88 = V(var_core_value_sig3801.elementData, var_core_value_sig3801.nodeId, {
        boundsByElementId: var_core_value_sigBC91,
        detachWhenNoSnap: true
      });
    this._lastChildDragAction = var_core_value_sigCB88, this._syncChildDragPreviewObject(var_core_value_sig45F0, var_core_value_sigCB88, var_core_value_sigBC91), this._consumePointerEvent(var_core_value_sigA73E, var_core_value_sig7620), this._renderContext["scene"].makeDirty(true), (var_core_value_sigB9FC = (var_core_value_sig5055 = this._renderContext["scene"]).requestRender) == null || var_core_value_sigB9FC.call(var_core_value_sig5055);
  }
  _applyPointerChildDrag(var_core_value_sig8D65, var_core_value_sig8122) {
    let var_core_value_sigEDC6 = this._pointerDragStart;
    if (!var_core_value_sigEDC6) return;
    if (this._pointerDragStart = null, this._disposeActivePointerDragListeners(), this._removeDragPreviewObject(), !this._childDragActivated) {
      this._lastChildDragAction = null;
      return;
    }
    let var_core_value_sig611A = this._boardElementService["getElementData"](var_core_value_sigEDC6.unitId, var_core_value_sigEDC6.subUnitId),
      var_core_value_sig6BD9 = this._getPointerLiveBounds(var_core_value_sig8D65, var_core_value_sigEDC6),
      var_core_value_sig7E56 = this._createTopologyBoundsByElementId(var_core_value_sig611A, var_core_value_sigEDC6.nodeId, var_core_value_sig6BD9),
      var_core_value_sig4161 = V(var_core_value_sig611A, var_core_value_sigEDC6.nodeId, {
        boundsByElementId: var_core_value_sig7E56,
        detachWhenNoSnap: true
      });
    this._lastChildDragAction = null, this._executeChildDragAction(var_core_value_sigEDC6.unitId, var_core_value_sigEDC6.subUnitId, var_core_value_sigEDC6.nodeId, var_core_value_sig611A, var_core_value_sig4161), this._childDragSelectionHidden = false, this._consumePointerEvent(var_core_value_sig8D65, var_core_value_sig8122);
  }
  _cancelPointerChildDrag(var_core_value_sig7580) {
    let var_core_value_sig1F18 = this._pointerDragStart;
    if (var_core_value_sig1F18) {
      if (this._pointerDragStart = null, this._disposeActivePointerDragListeners(), this._childDragActivated = false, this._lastChildDragAction = null, this._removeDragPreviewObject(), this._childDragSelectionHidden) {
        var var_core_value_sigD5A0, var_core_value_sig81B2;
        (var_core_value_sigD5A0 = (var_core_value_sig81B2 = this._elementStateService).selectElements) == null || var_core_value_sigD5A0.call(var_core_value_sig81B2, {
          unitId: var_core_value_sig1F18.unitId,
          subUnitId: var_core_value_sig1F18.subUnitId
        }, [var_core_value_sig1F18.nodeId], var_core_value_sig1F18.nodeId), this._childDragSelectionHidden = false;
      }
      var_core_value_sig7580 == null || var_core_value_sig7580.stopPropagation();
    }
  }
  _attachActivePointerDragListeners() {
    this._disposeActivePointerDragListeners();
    let var_core_value_sigA0A5 = typeof window > "u" ? null : window;
    if (!(var_core_value_sigA0A5 != null && var_core_value_sigA0A5.addEventListener)) return;
    let var_core_value_sig10AA = new i["DisposableCollection"](),
      var_core_value_sigE6D0 = var_core_value_sig237B => this._syncPointerChildDragPreview(var_core_value_sig237B),
      var_core_value_sig8E91 = var_core_value_sigFEAB => this._applyPointerChildDrag(var_core_value_sigFEAB),
      var_core_value_sig00BE = () => this._cancelPointerChildDrag();
    var_core_value_sigA0A5.addEventListener("pointermove", var_core_value_sigE6D0, {
      capture: true
    }), var_core_value_sigA0A5.addEventListener("pointerup", var_core_value_sig8E91, {
      capture: true
    }), var_core_value_sigA0A5.addEventListener("pointercancel", var_core_value_sig00BE, {
      capture: true
    }), var_core_value_sig10AA.add((0, i.toDisposable)(() => {
      var_core_value_sigA0A5.removeEventListener("pointermove", var_core_value_sigE6D0, {
        capture: true
      }), var_core_value_sigA0A5.removeEventListener("pointerup", var_core_value_sig8E91, {
        capture: true
      }), var_core_value_sigA0A5.removeEventListener("pointercancel", var_core_value_sig00BE, {
        capture: true
      });
    })), this._activePointerDragDisposables = var_core_value_sig10AA;
  }
  _findChildNodeAtPoint(var_core_value_sig7BB5, var_core_value_sig6AAD) {
    let var_core_value_sig1157 = Object.values(var_core_value_sig7BB5);
    for (let var_core_value_sigE347 = var_core_value_sig1157.length - 1; var_core_value_sigE347 >= 0; --var_core_value_sigE347) {
      let var_core_value_sigA5F1 = var_core_value_sig1157[var_core_value_sigE347],
        var_core_value_sig97A2 = (0, t.getMindMapNodeMeta)(var_core_value_sigA5F1.element);
      if (!(var_core_value_sig97A2 != null && var_core_value_sig97A2.parentNodeId)) continue;
      let var_core_value_sig07E9 = (0, e.resolveBoardElementWorldBounds)(var_core_value_sig7BB5, var_core_value_sigA5F1.elementId) ?? var_core_value_sigA5F1.element["transform"];
      if (this._isPointInBounds(var_core_value_sig6AAD, {
        left: var_core_value_sig07E9.left ?? 0,
        top: var_core_value_sig07E9.top ?? 0,
        width: var_core_value_sig07E9.width ?? 0,
        height: var_core_value_sig07E9.height ?? 0
      })) return var_core_value_sigA5F1.elementId;
    }
  }
  _disposeActivePointerDragListeners() {
    var var_core_value_sigA694;
    (var_core_value_sigA694 = this._activePointerDragDisposables) == null || var_core_value_sigA694.dispose(), this._activePointerDragDisposables = null;
  }
  _syncDragPreview(var_core_value_sig18E01) {
    let var_core_value_sig0428 = this._dragStart;
    if (var_core_value_sig0428) {
      if ((var_core_value_sig0428.kind === "root" || var_core_value_sig0428.kind === "scope") && this._syncRootScopePreview(var_core_value_sig18E01), var_core_value_sig0428.kind === "root") {
        this._syncRootReparentPreview(var_core_value_sig18E01);
        return;
      }
      this._syncChildDragPreview(var_core_value_sig18E01);
    }
  }
  _syncRootScopePreview(var_core_value_sigBE07) {
    let var_core_value_sig555F = this._dragStart;
    if (!var_core_value_sig555F || var_core_value_sig555F.kind !== "root" && var_core_value_sig555F.kind !== "scope") return;
    let var_core_value_sig3D6F = var_core_value_sigBE07 == null ? undefined : var_core_value_sigBE07.get((0, n.getBoardElementRenderObjectKey)(var_core_value_sig555F.unitId, var_core_value_sig555F.nodeId));
    if (!var_core_value_sig3D6F || !Number.isFinite(var_core_value_sig3D6F.left) || !Number.isFinite(var_core_value_sig3D6F.top)) return;
    let var_core_value_sig336C = ae({
      elementData: var_core_value_sig555F.elementData,
      rootNodeId: var_core_value_sig555F.nodeId,
      scopeId: var_core_value_sig555F.scopeId,
      rootStartBounds: {
        left: var_core_value_sig555F.left,
        top: var_core_value_sig555F.top
      },
      liveRootBounds: {
        left: var_core_value_sig3D6F.left,
        top: var_core_value_sig3D6F.top
      }
    });
    if (!var_core_value_sig336C) return;
    let var_core_value_sig6E68 = this._renderContext["scene"],
      var_core_value_sig8DFE = var_core_value_sig6E68,
      var_core_value_sig48EA = false;
    var_core_value_sig336C.items["forEach"](var_core_value_sig3C5B => {
      var var_core_value_sig200B;
      let var_core_value_sig3863 = (0, n.getBoardElementRenderObjectKey)(var_core_value_sig555F.unitId, var_core_value_sig3C5B.elementId),
        var_core_value_sigC97C = ((var_core_value_sig200B = var_core_value_sig8DFE.getObjectIncludeInGroup) == null ? undefined : var_core_value_sig200B.call(var_core_value_sig8DFE, var_core_value_sig3863)) ?? var_core_value_sig6E68.getObject(var_core_value_sig3863);
      if (var_core_value_sigC97C) {
        if (var_core_value_sig3C5B.kind === "connector" && typeof var_core_value_sigC97C.updateElement == "function") {
          var_core_value_sigC97C.updateElement(var_core_value_sig3C5B.element, var_core_value_sig336C.elementData), var_core_value_sig48EA = true;
          return;
        }
        var_core_value_sig3C5B.kind === "bounds" && (var_core_value_sigC97C.transformByState(var_core_value_sig3C5B.bounds), typeof var_core_value_sigC97C.makeDirtyNoDebounce == "function" ? var_core_value_sigC97C.makeDirtyNoDebounce(true) : var_core_value_sigC97C.makeDirty(true), var_core_value_sig48EA = true);
      }
    }), var_core_value_sig48EA && var_core_value_sig6E68.makeDirty(true);
  }
  _syncRootReparentPreview(var_core_value_sig5E16) {
    var var_core_value_sig09F3, var_core_value_sig4592;
    let var_core_value_sigC5C4 = this._dragStart;
    if (!var_core_value_sigC5C4 || var_core_value_sigC5C4.kind !== "root") return;
    let var_core_value_sig1617 = var_core_value_sig5E16 == null ? undefined : var_core_value_sig5E16.get((0, n.getBoardElementRenderObjectKey)(var_core_value_sigC5C4.unitId, var_core_value_sigC5C4.nodeId));
    if (!var_core_value_sig1617 || !Number.isFinite(var_core_value_sig1617.left) || !Number.isFinite(var_core_value_sig1617.top)) {
      this._removeDragPreviewObject();
      return;
    }
    let var_core_value_sig4169 = this._getLiveObjectBounds(var_core_value_sig1617, var_core_value_sigC5C4),
      var_core_value_sig6D19 = this._createTopologyBoundsByElementId(var_core_value_sigC5C4.elementData, var_core_value_sigC5C4.nodeId, var_core_value_sig4169),
      var_core_value_sig279C = V(var_core_value_sigC5C4.elementData, var_core_value_sigC5C4.nodeId, {
        boundsByElementId: var_core_value_sig6D19,
        allowRootReparent: true
      });
    if (var_core_value_sig279C.kind !== "reparent") {
      this._removeDragPreviewObject();
      return;
    }
    let var_core_value_sigAC51 = this._ensureDragPreviewObject();
    var_core_value_sigAC51 && (var_core_value_sigAC51.updateState({
      ghostBounds: var_core_value_sig4169,
      sourceBounds: null,
      parentBounds: var_core_value_sig6D19[var_core_value_sig279C.newParentNodeId],
      side: var_core_value_sig279C.side,
      textStyle: undefined,
      renderGhostNode: false
    }), this._renderContext["scene"].makeDirty(true), (var_core_value_sig09F3 = (var_core_value_sig4592 = this._renderContext["scene"]).requestRender) == null || var_core_value_sig09F3.call(var_core_value_sig4592));
  }
  _syncChildDragPreview(var_core_value_sig8986) {
    var var_core_value_sigCAF7, var_core_value_sigED1C;
    let var_core_value_sig726E = this._dragStart;
    if (!var_core_value_sig726E || var_core_value_sig726E.kind !== "child") return;
    let var_core_value_sig2CD3 = var_core_value_sig8986 == null ? undefined : var_core_value_sig8986.get((0, n.getBoardElementRenderObjectKey)(var_core_value_sig726E.unitId, var_core_value_sig726E.nodeId));
    if (!var_core_value_sig2CD3) {
      this._removeDragPreviewObject();
      return;
    }
    let var_core_value_sig038E = this._getLiveObjectBounds(var_core_value_sig2CD3, var_core_value_sig726E);
    if (!this._isChildDragPastActivationThreshold(var_core_value_sig726E, var_core_value_sig038E)) {
      this._lastChildDragAction = null, this._removeDragPreviewObject(), this._restoreObjectToDragStart(var_core_value_sig2CD3, var_core_value_sig726E), this._renderContext["scene"].makeDirty(true);
      return;
    }
    this._childDragActivated || this._hideSelectionForChildDrag(), this._childDragActivated = true;
    let var_core_value_sigAA1E = this._createTopologyBoundsByElementId(var_core_value_sig726E.elementData, var_core_value_sig726E.nodeId, var_core_value_sig038E),
      var_core_value_sigC9F5 = V(var_core_value_sig726E.elementData, var_core_value_sig726E.nodeId, {
        boundsByElementId: var_core_value_sigAA1E,
        detachWhenNoSnap: true
      });
    this._lastChildDragAction = var_core_value_sigC9F5, this._syncChildDragPreviewObject(var_core_value_sig038E, var_core_value_sigC9F5, var_core_value_sigAA1E), this._restoreObjectToDragStart(var_core_value_sig2CD3, var_core_value_sig726E), this._renderContext["scene"].makeDirty(true), (var_core_value_sigCAF7 = (var_core_value_sigED1C = this._renderContext["scene"]).requestRender) == null || var_core_value_sigCAF7.call(var_core_value_sigED1C);
  }
  _applyDragTopologyAction(var_core_value_sig7EEA) {
    var var_core_value_sig59CE;
    let var_core_value_sig33C8 = this._elementStateService["getSnapshot"](),
      var_core_value_sig957F = var_core_value_sig33C8.context,
      var_core_value_sig803B = var_core_value_sig33C8.focusedId ?? var_core_value_sig33C8.selectedIds[0];
    if (var_core_value_sig957F && ((var_core_value_sig59CE = this._dragStart) == null ? undefined : var_core_value_sig59CE.kind) === "scope") {
      this._removeDragPreviewObject(), this._applyScopeTranslation(var_core_value_sig957F.unitId, var_core_value_sig957F.subUnitId, var_core_value_sig7EEA);
      return;
    }
    if (!var_core_value_sig957F || !var_core_value_sig803B || var_core_value_sig33C8.selectedIds["length"] !== 1) {
      this._removeDragPreviewObject(), this._dragStart = null;
      return;
    }
    this._removeDragPreviewObject();
    let var_core_value_sig5830 = this._boardElementService["getElementData"](var_core_value_sig957F.unitId, var_core_value_sig957F.subUnitId);
    if (this._applyRootTranslation(var_core_value_sig957F.unitId, var_core_value_sig957F.subUnitId, var_core_value_sig803B, var_core_value_sig5830, var_core_value_sig7EEA)) return;
    let var_core_value_sig4A7C = this._resolveChildDragTopologyAction(var_core_value_sig957F.unitId, var_core_value_sig957F.subUnitId, var_core_value_sig803B, var_core_value_sig5830, var_core_value_sig7EEA);
    this._executeChildDragAction(var_core_value_sig957F.unitId, var_core_value_sig957F.subUnitId, var_core_value_sig803B, var_core_value_sig5830, var_core_value_sig4A7C);
  }
  _applyScopeTranslation(var_core_value_sigF975, var_core_value_sigCDAF, var_core_value_sigA298) {
    let var_core_value_sig0B40 = this._dragStart;
    if (this._dragStart = null, !var_core_value_sig0B40 || var_core_value_sig0B40.kind !== "scope" || var_core_value_sig0B40.unitId !== var_core_value_sigF975 || var_core_value_sig0B40.subUnitId !== var_core_value_sigCDAF) return;
    let var_core_value_sig330B = var_core_value_sigA298 == null ? undefined : var_core_value_sigA298.get((0, n.getBoardElementRenderObjectKey)(var_core_value_sigF975, var_core_value_sig0B40.nodeId)),
      var_core_value_sig3625 = var_core_value_sig330B && Number.isFinite(var_core_value_sig330B.left) ? var_core_value_sig330B.left ?? var_core_value_sig0B40.left : var_core_value_sig0B40.left,
      var_core_value_sig0B4E = var_core_value_sig330B && Number.isFinite(var_core_value_sig330B.top) ? var_core_value_sig330B.top ?? var_core_value_sig0B40.top : var_core_value_sig0B40.top,
      var_core_value_sig0E9F = var_core_value_sig3625 - var_core_value_sig0B40.left,
      var_core_value_sigE5BA = var_core_value_sig0B4E - var_core_value_sig0B40.top;
    (var_core_value_sig0E9F !== 0 || var_core_value_sigE5BA !== 0) && this._commandService["executeCommand"](t.TranslateMindMapOperation["id"], {
      unitId: var_core_value_sigF975,
      subUnitId: var_core_value_sigCDAF,
      scopeId: var_core_value_sig0B40.scopeId,
      deltaX: var_core_value_sig0E9F,
      deltaY: var_core_value_sigE5BA
    });
  }
  _executeChildDragAction(var_core_value_sig4A83, var_core_value_sig58AA, var_core_value_sig84C4, var_core_value_sigB6F7, var_core_value_sigB495) {
    if (var_core_value_sigB495.kind === "reparent") {
      var var_core_value_sig70D0, var_core_value_sig2A8A;
      let var_core_value_sigC4B1 = (0, t.getMindMapNodeMeta)((var_core_value_sig70D0 = var_core_value_sigB6F7[var_core_value_sig84C4]) == null ? undefined : var_core_value_sig70D0.element),
        var_core_value_sig1BD9 = (0, t.getMindMapNodeMeta)((var_core_value_sig2A8A = var_core_value_sigB6F7[var_core_value_sigB495.newParentNodeId]) == null ? undefined : var_core_value_sig2A8A.element);
      this._executeAndLayout(t.ReparentMindMapNodeOperation["id"], {
        unitId: var_core_value_sig4A83,
        subUnitId: var_core_value_sig58AA,
        nodeId: var_core_value_sig84C4,
        newParentNodeId: var_core_value_sigB495.newParentNodeId,
        side: var_core_value_sigB495.side,
        ...(var_core_value_sigB495.referenceNodeId ? {
          referenceNodeId: var_core_value_sigB495.referenceNodeId
        } : null),
        ...(var_core_value_sigB495.placement ? {
          placement: var_core_value_sigB495.placement
        } : null)
      }, [var_core_value_sigC4B1 == null ? undefined : var_core_value_sigC4B1.structureScopeId, var_core_value_sig1BD9 == null ? undefined : var_core_value_sig1BD9.structureScopeId], var_core_value_sig84C4);
      return;
    }
    if (var_core_value_sigB495.kind === "detach") {
      var var_core_value_sig3782;
      let var_core_value_sigE43E = (0, t.getMindMapNodeMeta)((var_core_value_sig3782 = var_core_value_sigB6F7[var_core_value_sig84C4]) == null ? undefined : var_core_value_sig3782.element);
      this._executeAndLayout(t.DetachMindMapNodeOperation["id"], {
        unitId: var_core_value_sig4A83,
        subUnitId: var_core_value_sig58AA,
        nodeId: var_core_value_sig84C4,
        ...(Number.isFinite(var_core_value_sigB495.left) ? {
          left: var_core_value_sigB495.left
        } : null),
        ...(Number.isFinite(var_core_value_sigB495.top) ? {
          top: var_core_value_sigB495.top
        } : null)
      }, [var_core_value_sigE43E == null ? undefined : var_core_value_sigE43E.structureScopeId], var_core_value_sig84C4);
    }
  }
  _applyRootTranslation(var_core_value_sigD22E, var_core_value_sig3455, var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395) {
    let var_core_value_sig9FA0 = this._dragStart;
    if ((var_core_value_sig9FA0 == null ? undefined : var_core_value_sig9FA0.kind) === "root" && (this._dragStart = null), !var_core_value_sig9FA0 || var_core_value_sig9FA0.unitId !== var_core_value_sigD22E || var_core_value_sig9FA0.subUnitId !== var_core_value_sig3455 || var_core_value_sig9FA0.nodeId !== var_core_value_sig5CEF) return false;
    let var_core_value_sig055E = var_core_value_sig43D5[var_core_value_sig5CEF],
      var_core_value_sig7C77 = (0, t.getMindMapNodeMeta)(var_core_value_sig055E == null ? undefined : var_core_value_sig055E.element);
    if (!var_core_value_sig055E || !var_core_value_sig7C77 || var_core_value_sig7C77.parentNodeId !== null) return false;
    let var_core_value_sig9578 = var_core_value_sig1395 == null ? undefined : var_core_value_sig1395.get((0, n.getBoardElementRenderObjectKey)(var_core_value_sigD22E, var_core_value_sig5CEF)),
      var_core_value_sigA2D3 = (0, e.resolveBoardElementWorldBounds)(var_core_value_sig43D5, var_core_value_sig5CEF),
      var_core_value_sigC218 = Number.isFinite(var_core_value_sig9578 == null ? undefined : var_core_value_sig9578.left) ? var_core_value_sig9578.left : (var_core_value_sigA2D3 == null ? undefined : var_core_value_sigA2D3.left) ?? var_core_value_sig055E.element["transform"].left ?? 0,
      var_core_value_sigADEC = Number.isFinite(var_core_value_sig9578 == null ? undefined : var_core_value_sig9578.top) ? var_core_value_sig9578.top : (var_core_value_sigA2D3 == null ? undefined : var_core_value_sigA2D3.top) ?? var_core_value_sig055E.element["transform"].top ?? 0,
      var_core_value_sig3D8E = var_core_value_sigC218 - var_core_value_sig9FA0.left,
      var_core_value_sig37E5 = var_core_value_sigADEC - var_core_value_sig9FA0.top;
    if (var_core_value_sig3D8E === 0 && var_core_value_sig37E5 === 0) return true;
    let var_core_value_sigF079 = {
        left: var_core_value_sigC218,
        top: var_core_value_sigADEC,
        width: Number.isFinite(var_core_value_sig9578 == null ? undefined : var_core_value_sig9578.width) ? var_core_value_sig9578.width : var_core_value_sig9FA0.width,
        height: Number.isFinite(var_core_value_sig9578 == null ? undefined : var_core_value_sig9578.height) ? var_core_value_sig9578.height : var_core_value_sig9FA0.height
      },
      var_core_value_sigFCA0 = V(var_core_value_sig43D5, var_core_value_sig5CEF, {
        boundsByElementId: this._createTopologyBoundsByElementId(var_core_value_sig43D5, var_core_value_sig5CEF, var_core_value_sigF079),
        allowRootReparent: true
      });
    if (var_core_value_sigFCA0.kind === "reparent") return this._executeChildDragAction(var_core_value_sigD22E, var_core_value_sig3455, var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sigFCA0), true;
    let var_core_value_sigC84D = !!var_core_value_sigA2D3 && Math.abs(var_core_value_sigA2D3.left - var_core_value_sigC218) < 0.001 && Math.abs(var_core_value_sigA2D3.top - var_core_value_sigADEC) < 0.001;
    return this._commandService["executeCommand"](t.TranslateMindMapOperation["id"], {
      unitId: var_core_value_sigD22E,
      subUnitId: var_core_value_sig3455,
      scopeId: var_core_value_sig9FA0.scopeId,
      deltaX: var_core_value_sig3D8E,
      deltaY: var_core_value_sig37E5,
      ...(var_core_value_sigC84D ? {
        excludeElementIds: [var_core_value_sig5CEF],
        preserveExcludedWorldTransforms: true
      } : null)
    }), true;
  }
  _resolveChildDragTopologyAction(var_core_value_sigF2BC, var_core_value_sigD37B, var_core_value_sigFA28, var_core_value_sig93BE, var_core_value_sigABEC) {
    let var_core_value_sig2712 = this._dragStart;
    if (!var_core_value_sig2712 || var_core_value_sig2712.kind !== "child" || var_core_value_sig2712.unitId !== var_core_value_sigF2BC || var_core_value_sig2712.subUnitId !== var_core_value_sigD37B || var_core_value_sig2712.nodeId !== var_core_value_sigFA28) return {
      kind: "none"
    };
    this._dragStart = null;
    let var_core_value_sig0B9E = var_core_value_sigABEC == null ? undefined : var_core_value_sigABEC.get((0, n.getBoardElementRenderObjectKey)(var_core_value_sigF2BC, var_core_value_sigFA28));
    if (!this._childDragActivated) return var_core_value_sig0B9E && this._restoreObjectToDragStart(var_core_value_sig0B9E, var_core_value_sig2712), this._lastChildDragAction = null, {
      kind: "none"
    };
    if (!var_core_value_sig0B9E) {
      let var_core_value_sigA937 = this._lastChildDragAction ?? {
        kind: "none"
      };
      return this._lastChildDragAction = null, var_core_value_sigA937;
    }
    let var_core_value_sigC545 = this._getLiveObjectBounds(var_core_value_sig0B9E, var_core_value_sig2712);
    if (this._restoreObjectToDragStart(var_core_value_sig0B9E, var_core_value_sig2712), !this._isChildDragPastActivationThreshold(var_core_value_sig2712, var_core_value_sigC545)) return this._lastChildDragAction = null, {
      kind: "none"
    };
    let var_core_value_sig12A7 = V(var_core_value_sig93BE, var_core_value_sigFA28, {
      boundsByElementId: this._createTopologyBoundsByElementId(var_core_value_sig93BE, var_core_value_sigFA28, var_core_value_sigC545),
      detachWhenNoSnap: true
    });
    return this._lastChildDragAction = null, var_core_value_sig12A7;
  }
  _isChildDragPastActivationThreshold(var_core_value_sig6F4E, var_core_value_sigA021) {
    let var_core_value_sig49D9 = (var_core_value_sigA021.left ?? var_core_value_sig6F4E.left) - var_core_value_sig6F4E.left,
      var_core_value_sig320C = (var_core_value_sigA021.top ?? var_core_value_sig6F4E.top) - var_core_value_sig6F4E.top;
    return Math.hypot(var_core_value_sig49D9, var_core_value_sig320C) >= 18;
  }
  _getPointerLiveBounds(var_core_value_sigE7F0, var_core_value_sigE837) {
    let var_core_value_sig34F4 = this._getPointerScreenPoint(var_core_value_sigE7F0),
      var_core_value_sigA45D = this._getZoomRatio();
    return {
      left: var_core_value_sigE837.left + (var_core_value_sig34F4.x - var_core_value_sigE837.pointerStartX) / var_core_value_sigA45D,
      top: var_core_value_sigE837.top + (var_core_value_sig34F4.y - var_core_value_sigE837.pointerStartY) / var_core_value_sigA45D,
      width: var_core_value_sigE837.width,
      height: var_core_value_sigE837.height
    };
  }
  _getBoardPointFromEvent(var_core_value_sig1BC7) {
    let var_core_value_sig4956 = this._uiStateService["getState"](),
      var_core_value_sigCC9E = (var_core_value_sig4956 == null ? undefined : var_core_value_sig4956.viewportPanOffset) ?? {
        x: 0,
        y: 0
      },
      var_core_value_sig444C = this._getZoomRatio();
    return {
      x: Math.round(((var_core_value_sig1BC7.offsetX ?? 0) - var_core_value_sigCC9E.x) / var_core_value_sig444C),
      y: Math.round(((var_core_value_sig1BC7.offsetY ?? 0) - var_core_value_sigCC9E.y) / var_core_value_sig444C)
    };
  }
  _getPointerScreenPoint(var_core_value_sigE42E) {
    return {
      x: Number.isFinite(var_core_value_sigE42E.clientX) ? var_core_value_sigE42E.clientX : var_core_value_sigE42E.offsetX ?? 0,
      y: Number.isFinite(var_core_value_sigE42E.clientY) ? var_core_value_sigE42E.clientY : var_core_value_sigE42E.offsetY ?? 0
    };
  }
  _getZoomRatio() {
    let var_core_value_sigF039 = this._uiStateService["getState"]().zoomRatio;
    return Number.isFinite(var_core_value_sigF039) && (var_core_value_sigF039 ?? 0) > 0 ? var_core_value_sigF039 : 1;
  }
  _isPointInBounds(var_core_value_sigA321, var_core_value_sigBF4C) {
    return var_core_value_sigA321.x >= var_core_value_sigBF4C.left && var_core_value_sigA321.x <= var_core_value_sigBF4C.left + var_core_value_sigBF4C.width && var_core_value_sigA321.y >= var_core_value_sigBF4C.top && var_core_value_sigA321.y <= var_core_value_sigBF4C.top + var_core_value_sigBF4C.height;
  }
  _consumePointerEvent(var_core_value_sig3457, var_core_value_sig4A08) {
    var var_core_value_sig1BC4, var_core_value_sig9EAB;
    var_core_value_sig4A08 == null || var_core_value_sig4A08.stopPropagation(), var_core_value_sig4A08 && (var_core_value_sig4A08.skipNextObservers = true), (var_core_value_sig1BC4 = var_core_value_sig3457.preventDefault) == null || var_core_value_sig1BC4.call(var_core_value_sig3457), (var_core_value_sig9EAB = var_core_value_sig3457.stopPropagation) == null || var_core_value_sig9EAB.call(var_core_value_sig3457);
  }
  _hideSelectionForChildDrag() {
    var var_core_value_sigA5C3, var_core_value_sig3A1E;
    this._childDragSelectionHidden ||= ((var_core_value_sigA5C3 = (var_core_value_sig3A1E = this._elementStateService).clearSelection) == null || var_core_value_sigA5C3.call(var_core_value_sig3A1E), true);
  }
  _getLiveObjectBounds(var_core_value_sigDC92, var_core_value_sig3515) {
    return {
      left: Number.isFinite(var_core_value_sigDC92.left) ? var_core_value_sigDC92.left : var_core_value_sig3515.left,
      top: Number.isFinite(var_core_value_sigDC92.top) ? var_core_value_sigDC92.top : var_core_value_sig3515.top,
      width: Number.isFinite(var_core_value_sigDC92.width) ? var_core_value_sigDC92.width : var_core_value_sig3515.width,
      height: Number.isFinite(var_core_value_sigDC92.height) ? var_core_value_sigDC92.height : var_core_value_sig3515.height
    };
  }
  _restoreObjectToDragStart(var_core_value_sigC2A0, var_core_value_sig7C65) {
    typeof var_core_value_sigC2A0.transformByState == "function" && var_core_value_sigC2A0.transformByState({
      left: var_core_value_sig7C65.left,
      top: var_core_value_sig7C65.top,
      width: var_core_value_sig7C65.width,
      height: var_core_value_sig7C65.height
    }), typeof var_core_value_sigC2A0.makeDirtyNoDebounce == "function" ? var_core_value_sigC2A0.makeDirtyNoDebounce(true) : typeof var_core_value_sigC2A0.makeDirty == "function" && var_core_value_sigC2A0.makeDirty(true);
  }
  _createTopologyBoundsByElementId(var_core_value_sig7F05, var_core_value_sig41F3, var_core_value_sigF455) {
    return Object.fromEntries(Object.keys(var_core_value_sig7F05).map(var_core_value_sigCAD5 => var_core_value_sigCAD5 === var_core_value_sig41F3 ? [var_core_value_sigCAD5, var_core_value_sigF455] : [var_core_value_sigCAD5, (0, e.resolveBoardElementWorldBounds)(var_core_value_sig7F05, var_core_value_sigCAD5) ?? var_core_value_sig7F05[var_core_value_sigCAD5].element["transform"]]));
  }
  _ensureDragPreviewObject() {
    if (this._dragPreviewObject) return this._dragPreviewObject;
    let var_core_value_sig6E78 = this._renderContext["scene"];
    return typeof var_core_value_sig6E78.addObject == "function" ? (this._dragPreviewObject = new ee(k), var_core_value_sig6E78.addObject(this._dragPreviewObject, A), this._dragPreviewObject) : null;
  }
  _syncChildDragPreviewObject(var_core_value_sigB3EE, var_core_value_sigC50A, var_core_value_sig11D0) {
    let var_core_value_sigB8ED = this._ensureDragPreviewObject();
    var_core_value_sigB8ED && var_core_value_sigB8ED.updateState({
      ghostBounds: var_core_value_sigB3EE,
      sourceBounds: this._resolvePreviewSourceBounds(),
      parentBounds: var_core_value_sigC50A.kind === "reparent" ? var_core_value_sig11D0[var_core_value_sigC50A.newParentNodeId] : null,
      side: var_core_value_sigC50A.kind === "reparent" ? var_core_value_sigC50A.side : "right",
      textStyle: this._resolvePreviewTextStyle(),
      renderGhostNode: true
    });
  }
  _resolvePreviewSourceBounds() {
    let var_core_value_sig8EAE = this._pointerDragStart ?? this._dragStart;
    return var_core_value_sig8EAE ? {
      left: var_core_value_sig8EAE.left,
      top: var_core_value_sig8EAE.top,
      width: var_core_value_sig8EAE.width,
      height: var_core_value_sig8EAE.height
    } : null;
  }
  _resolvePreviewTextStyle() {
    var var_core_value_sig1CDD, var_core_value_sig0DB1;
    let var_core_value_sig68A2 = this._pointerDragStart ?? this._dragStart,
      var_core_value_sigCC17 = var_core_value_sig68A2 == null || (var_core_value_sig1CDD = var_core_value_sig68A2.elementData[var_core_value_sig68A2.nodeId]) == null ? undefined : var_core_value_sig1CDD.element,
      var_core_value_sig32AE = var_core_value_sigCC17 == null || (var_core_value_sig0DB1 = var_core_value_sigCC17.shapeData) == null ? undefined : var_core_value_sig0DB1.shapeText;
    if (var_core_value_sig32AE) return {
      text: typeof var_core_value_sig32AE.text == "string" ? var_core_value_sig32AE.text : undefined,
      fontSize: Number.isFinite(var_core_value_sig32AE.fontSize) ? var_core_value_sig32AE.fontSize : undefined,
      color: typeof var_core_value_sig32AE.color == "string" ? var_core_value_sig32AE.color : undefined,
      horizontalAlign: Number.isFinite(var_core_value_sig32AE.horizontalAlign) ? var_core_value_sig32AE.horizontalAlign : undefined
    };
  }
  _removeDragPreviewObject() {
    var var_core_value_sigC753, var_core_value_sigFFD1, var_core_value_sig81AE;
    if (!this._dragPreviewObject) return;
    let var_core_value_sigF79F = this._renderContext["scene"];
    (var_core_value_sigC753 = var_core_value_sigF79F.removeObjects) == null || var_core_value_sigC753.call(var_core_value_sigF79F, [this._dragPreviewObject]), this._dragPreviewObject = null, (var_core_value_sigFFD1 = (var_core_value_sig81AE = this._renderContext["scene"]).makeDirty) == null || var_core_value_sigFFD1.call(var_core_value_sig81AE, true);
  }
  _executeAndLayout(var_core_value_sig0E54, var_core_value_sig3B17, var_core_value_sig6C4A, var_core_value_sig73D9) {
    let var_core_value_sigEAF8 = [...new Set(var_core_value_sig6C4A.filter(var_core_value_sigE503 => !!var_core_value_sigE503))],
      var_core_value_sig0455 = typeof var_core_value_sig3B17.unitId == "string" ? var_core_value_sig3B17.unitId : this._renderContext["unitId"],
      var_core_value_sig737C = this._undoRedoGroupService["createRunner"](var_core_value_sig0455),
      var_core_value_sig5AF5 = var_core_value_sig737C(() => this._commandService["executeCommand"](var_core_value_sig0E54, var_core_value_sig3B17));
    Promise.resolve(var_core_value_sig5AF5).then(var_core_value_sig48DD => {
      var var_core_value_sig5E6A, var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sigFD0C;
      if (var_core_value_sig48DD) {
        if (var_core_value_sigEAF8.forEach(var_core_value_sigBB00 => {
          var_core_value_sig737C(() => this._commandService["executeCommand"](t.LayoutMindMapOperation["id"], {
            unitId: var_core_value_sig3B17.unitId,
            subUnitId: var_core_value_sig3B17.subUnitId,
            scopeId: var_core_value_sigBB00
          }));
        }), var_core_value_sig73D9 && typeof var_core_value_sig3B17.unitId == "string" && typeof var_core_value_sig3B17.subUnitId == "string") {
          var var_core_value_sig849B, var_core_value_sig5F1A;
          (var_core_value_sig849B = (var_core_value_sig5F1A = this._elementStateService).selectElements) == null || var_core_value_sig849B.call(var_core_value_sig5F1A, {
            unitId: var_core_value_sig3B17.unitId,
            subUnitId: var_core_value_sig3B17.subUnitId
          }, [var_core_value_sig73D9], var_core_value_sig73D9);
        }
        (var_core_value_sig5E6A = (var_core_value_sigB7FC = this._renderContext["scene"]).makeDirty) == null || var_core_value_sig5E6A.call(var_core_value_sigB7FC, true), (var_core_value_sig9CD9 = (var_core_value_sigFD0C = this._renderContext["scene"]).requestRender) == null || var_core_value_sig9CD9.call(var_core_value_sigFD0C);
      }
    });
  }
};
oe = S([x(1, (0, i.Inject)(e.IBoardElementService)), x(2, (0, i.Inject)(n.IBoardElementStateService)), x(3, i.ICommandService), x(4, n.IBoardUIStateService), x(5, i.IUniverInstanceService), x(6, (0, i.Inject)(s.UndoRedoGroupService))], oe);
let H = class extends i.Disposable {
  constructor(var_core_value_sig9DE4, var_core_value_sig77FA, var_core_value_sigA4A7, var_core_value_sigA4DF, var_core_value_sigCC9D, var_core_value_sig90F5, var_core_value_sigD2BA, var_core_value_sigCD3A, var_core_value_sig519D) {
    super(), this.renderContext = var_core_value_sig9DE4, this.commandService = var_core_value_sig77FA, this.elementService = var_core_value_sigA4A7, this.elementStateService = var_core_value_sigA4DF, this.uiStateService = var_core_value_sigCC9D, this.clipboardService = var_core_value_sig90F5, this.dialogService = var_core_value_sigD2BA, this.localeService = var_core_value_sigCD3A, this.textEditingService = var_core_value_sig519D;
  }
};
H = S([x(1, i.ICommandService), x(2, e.IBoardElementService), x(3, n.IBoardElementStateService), x(4, n.IBoardUIStateService), x(5, t.IMindMapClipboardService), x(6, s.IDialogService), x(7, (0, i.Inject)(i.LocaleService)), x(8, (0, i.Inject)(n.BoardTextEditingService))], H);
const se = "board.mind-map.description-dialog",
  ce = "board-mind-map-description-dialog";
function le(var_core_value_sig95D5) {
  let {
      unitId: var_core_value_sigE027,
      subUnitId: var_core_value_sigE537,
      nodeId: var_core_value_sig5D84,
      initialDescription: var_core_value_sigD120 = ""
    } = var_core_value_sig95D5,
    var_core_value_sigAA05 = (0, s.useDependency)(i.ICommandService),
    var_core_value_sigC04C = (0, s.useDependency)(s.IDialogService),
    var_core_value_sig2069 = (0, s.useDependency)(i.LocaleService),
    [var_core_value_sig5176, var_core_value_sig71A1] = (0, f.useState)(var_core_value_sigD120),
    var_core_value_sig72AD = () => var_core_value_sigC04C.close(ce);
  return (0, p.jsxs)("div", {
    className: "univer-flex\x20univer-w-full\x20univer-flex-col\x20univer-gap-4",
    "data-board-mind-map-description-dialog": "true",
    children: [(0, p.jsxs)("label", {
      className: "univer-flex univer-flex-col univer-gap-2",
      children: [(0, p.jsx)("span", {
        className: "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
        children: var_core_value_sig2069.t("boards-mind-ui.description")
      }), (0, p.jsx)(u.Textarea, {
        autoFocus: true,
        className: "univer-h-32\x20univer-resize-none\x20univer-text-sm",
        placeholder: var_core_value_sig2069.t("boards-mind-ui.descriptionPlaceholder"),
        value: var_core_value_sig5176,
        onValueChange: var_core_value_sig71A1
      })]
    }), (0, p.jsxs)("div", {
      className: "univer-flex univer-justify-end univer-gap-2",
      children: [(0, p.jsx)(u.Button, {
        size: "small",
        variant: "default",
        onClick: var_core_value_sig72AD,
        children: var_core_value_sig2069.t("boards-mind-ui.cancel")
      }), (0, p.jsx)(u.Button, {
        size: "small",
        variant: "primary",
        onClick: () => {
          var_core_value_sigAA05.executeCommand(t.UpdateMindMapNodeOperation["id"], {
            unitId: var_core_value_sigE027,
            subUnitId: var_core_value_sigE537,
            nodeId: var_core_value_sig5D84,
            foreignAttributes: {
              _note: var_core_value_sig5176.trim() ? var_core_value_sig5176 : null
            }
          }), var_core_value_sig72AD();
        },
        children: var_core_value_sig2069.t("boards-mind-ui.saveDescription")
      })]
    })]
  });
}
const U = "board.operation.mind-map.keyboard-shortcut",
  ue = "FOCUSING_MIND_MAP_NODE",
  de = "FOCUSING_MIND_MAP_BLANK_BOARD",
  fe = {
    copy: n.BOARD_SHORTCUT_BINDINGS["copy"],
    paste: n.BOARD_SHORTCUT_BINDINGS["paste"],
    "paste-as-new": n.BOARD_SHORTCUT_BINDINGS["paste"],
    "add-child": n.BOARD_SHORTCUT_BINDINGS["addChildNode"],
    "add-sibling-or-child": n.BOARD_SHORTCUT_BINDINGS["addSiblingNode"],
    promote: n.BOARD_SHORTCUT_BINDINGS["addParentNode"],
    "toggle-collapse": n.BOARD_SHORTCUT_BINDINGS["foldChildNodes"],
    "collapse-all": n.BOARD_SHORTCUT_BINDINGS["collapseAllNodes"],
    "edit-text": n.BOARD_SHORTCUT_BINDINGS["editCurrentNode"],
    "open-description": n.BOARD_SHORTCUT_BINDINGS["addDescription"],
    delete: s.KeyCode["DELETE"],
    "arrow-left": s.KeyCode["ARROW_LEFT"],
    "arrow-right": s.KeyCode["ARROW_RIGHT"],
    "arrow-up": s.KeyCode["ARROW_UP"],
    "arrow-down": s.KeyCode["ARROW_DOWN"]
  },
  pe = {
    delete: [s.KeyCode["BACKSPACE"]]
  };
function me(var_core_value_sig9ABE) {
  return [fe[var_core_value_sig9ABE], ...(pe[var_core_value_sig9ABE] ?? [])];
}
let W = class extends i.RxDisposable {
  constructor(var_core_value_sigC7E7, var_core_value_sig6E1C, var_core_value_sigFABC, var_core_value_sig413D) {
    super(), this._mindMapClipboardService = var_core_value_sigC7E7, this._commandService = var_core_value_sig6E1C, this._shortcutService = var_core_value_sigFABC, this._undoRedoGroupService = var_core_value_sig413D, this._init();
  }
  _init() {
    this.disposeWithMe(this._commandService["registerCommand"](this._createKeyboardShortcutOperation())), this._createShortcutItems().forEach(var_core_value_sigB455 => {
      this.disposeWithMe(this._shortcutService["registerShortcut"](var_core_value_sigB455));
    });
  }
  _createKeyboardShortcutOperation() {
    return {
      id: U,
      type: i.CommandType["OPERATION"],
      handler: (var_core_value_sig5241, var_core_value_sigC6E5, var_core_value_sigCEFB) => {
        let var_core_value_sig1537 = he(var_core_value_sig5241, var_core_value_sigCEFB);
        return var_core_value_sig1537 ? this.handleShortcut(var_core_value_sig1537, var_core_value_sigC6E5 == null ? undefined : var_core_value_sigC6E5.action) : false;
      }
    };
  }
  _createShortcutItems() {
    let var_core_value_sig5BCE = (var_core_value_sigE4C6, var_core_value_sig4313) => ({
        id: U,
        binding: var_core_value_sigE4C6,
        priority: 160,
        preconditions: var_core_value_sig4F59 => !!var_core_value_sig4F59.getContextValue(ue),
        staticParameters: {
          action: var_core_value_sig4313
        }
      }),
      var_core_value_sig8EF0 = var_core_value_sigFC87 => me(var_core_value_sigFC87).map(var_core_value_sigF564 => var_core_value_sig5BCE(var_core_value_sigF564, var_core_value_sigFC87));
    return [...var_core_value_sig8EF0("copy"), {
      id: U,
      binding: fe.paste,
      priority: 160,
      preconditions: var_core_value_sig156F => !!this._mindMapClipboardService["getPayload"]() && !!var_core_value_sig156F.getContextValue("FOCUSING_MIND_MAP_NODE"),
      staticParameters: {
        action: "paste"
      }
    }, {
      id: U,
      binding: fe["paste-as-new"],
      priority: 150,
      preconditions: var_core_value_sigDD51 => !!this._mindMapClipboardService["getPayload"]() && !!var_core_value_sigDD51.getContextValue("FOCUSING_MIND_MAP_BLANK_BOARD"),
      staticParameters: {
        action: "paste-as-new"
      }
    }, ...var_core_value_sig8EF0("add-child"), ...var_core_value_sig8EF0("add-sibling-or-child"), ...var_core_value_sig8EF0("promote"), ...var_core_value_sig8EF0("toggle-collapse"), ...var_core_value_sig8EF0("collapse-all"), ...var_core_value_sig8EF0("edit-text"), ...var_core_value_sig8EF0("open-description"), ...var_core_value_sig8EF0("delete"), ...var_core_value_sig8EF0("arrow-left"), ...var_core_value_sig8EF0("arrow-right"), ...var_core_value_sig8EF0("arrow-up"), ...var_core_value_sig8EF0("arrow-down")];
  }
  handleShortcut(var_core_value_sig78AC, var_core_value_sig4CEF) {
    return var_core_value_sig78AC.uiStateService["getState"]().interactionMode === "viewing" && var_core_value_sig4CEF !== "copy" ? false : var_core_value_sig4CEF === "copy" ? this._copySelectedNode(var_core_value_sig78AC) : var_core_value_sig4CEF === "paste" ? this._pasteUnderSelectedNode(var_core_value_sig78AC) : var_core_value_sig4CEF === "paste-as-new" ? this._pasteAsNewMindMap(var_core_value_sig78AC) : var_core_value_sig4CEF === "add-child" ? this._addChild(var_core_value_sig78AC) : var_core_value_sig4CEF === "add-sibling-or-child" ? this._addSiblingOrChild(var_core_value_sig78AC) : var_core_value_sig4CEF === "promote" ? this._executeNodeOperation(var_core_value_sig78AC, t.PromoteMindMapNodeOperation["id"]) : var_core_value_sig4CEF === "toggle-collapse" ? this._executeNodeOperation(var_core_value_sig78AC, t.ToggleMindMapNodeCollapseOperation["id"]) : var_core_value_sig4CEF === "collapse-all" ? this._collapseAll(var_core_value_sig78AC) : var_core_value_sig4CEF === "edit-text" ? this._openSelectedTextEditing(var_core_value_sig78AC) : var_core_value_sig4CEF === "open-description" ? this._openDescriptionDialog(var_core_value_sig78AC) : var_core_value_sig4CEF === "delete" ? this._deleteSelectedNode(var_core_value_sig78AC) : var_core_value_sig4CEF && ge(var_core_value_sig4CEF) ? this._navigateByTopology(var_core_value_sig78AC, var_core_value_sig4CEF) : false;
  }
  _copySelectedNode(var_core_value_sigD57D) {
    let var_core_value_sig2CC7 = this._getSelectedMindMapContext(var_core_value_sigD57D);
    return var_core_value_sig2CC7 ? (var_core_value_sigD57D.commandService["executeCommand"](t.CopyMindMapNodeOperation["id"], {
      unitId: var_core_value_sig2CC7.unitId,
      subUnitId: var_core_value_sig2CC7.subUnitId,
      nodeId: var_core_value_sig2CC7.nodeId
    }), true) : false;
  }
  _pasteUnderSelectedNode(var_core_value_sig4784) {
    let var_core_value_sigC39E = this._getSelectedMindMapContext(var_core_value_sig4784);
    return !var_core_value_sigC39E || !var_core_value_sig4784.clipboardService["getPayload"]() ? false : (this._executeAndLayout(var_core_value_sig4784, t.PasteMindMapNodeOperation["id"], {
      unitId: var_core_value_sigC39E.unitId,
      subUnitId: var_core_value_sigC39E.subUnitId,
      targetNodeId: var_core_value_sigC39E.nodeId
    }, var_core_value_sigC39E.scopeId), true);
  }
  _pasteAsNewMindMap(var_core_value_sig16C7) {
    let var_core_value_sig7481 = this._getBlankBoardContext(var_core_value_sig16C7);
    if (!var_core_value_sig7481 || !var_core_value_sig16C7.clipboardService["getPayload"]()) return false;
    let var_core_value_sig08A3 = var_core_value_sig16C7.uiStateService["getState"](),
      var_core_value_sig77D8 = Number.isFinite(var_core_value_sig08A3.zoomRatio) && var_core_value_sig08A3.zoomRatio > 0 ? var_core_value_sig08A3.zoomRatio : 1,
      var_core_value_sig78A3 = Math.round((64 - var_core_value_sig08A3.viewportPanOffset["x"]) / var_core_value_sig77D8),
      var_core_value_sig649B = Math.round((64 - var_core_value_sig08A3.viewportPanOffset["y"]) / var_core_value_sig77D8);
    return var_core_value_sig16C7.commandService["executeCommand"](t.PasteMindMapAsNewMindMapOperation["id"], {
      unitId: var_core_value_sig7481.unitId,
      subUnitId: var_core_value_sig7481.subUnitId,
      left: var_core_value_sig78A3,
      top: var_core_value_sig649B
    }), true;
  }
  _addChild(var_core_value_sig6256) {
    let var_core_value_sigE7A6 = this._getSelectedMindMapContext(var_core_value_sig6256);
    if (!var_core_value_sigE7A6) return false;
    let var_core_value_sigB505 = (0, i.generateRandomId)(6);
    return this._executeCreateAndEdit(var_core_value_sig6256, t.AddMindMapChildOperation["id"], {
      unitId: var_core_value_sigE7A6.unitId,
      subUnitId: var_core_value_sigE7A6.subUnitId,
      parentNodeId: var_core_value_sigE7A6.nodeId,
      nodeId: var_core_value_sigB505,
      connectorId: (0, i.generateRandomId)(6),
      text: var_core_value_sig6256.localeService["t"]("boards-mind-ui.panel.addText")
    }, var_core_value_sigE7A6.scopeId, var_core_value_sigB505), true;
  }
  _addSiblingOrChild(var_core_value_sig7428) {
    let var_core_value_sig1DCE = this._getSelectedMindMapContext(var_core_value_sig7428);
    if (!var_core_value_sig1DCE) return false;
    let var_core_value_sig0567 = (0, i.generateRandomId)(6);
    return this._executeCreateAndEdit(var_core_value_sig7428, var_core_value_sig1DCE.isRoot ? t.AddMindMapChildOperation["id"] : t.AddMindMapSiblingOperation["id"], {
      unitId: var_core_value_sig1DCE.unitId,
      subUnitId: var_core_value_sig1DCE.subUnitId,
      ...(var_core_value_sig1DCE.isRoot ? {
        parentNodeId: var_core_value_sig1DCE.nodeId,
        nodeId: var_core_value_sig0567
      } : {
        nodeId: var_core_value_sig1DCE.nodeId,
        siblingNodeId: var_core_value_sig0567
      }),
      connectorId: (0, i.generateRandomId)(6),
      text: var_core_value_sig7428.localeService["t"]("boards-mind-ui.panel.addText")
    }, var_core_value_sig1DCE.scopeId, var_core_value_sig0567), true;
  }
  _executeNodeOperation(var_core_value_sigA7F3, var_core_value_sigEACD) {
    let var_core_value_sig901E = this._getSelectedMindMapContext(var_core_value_sigA7F3);
    return var_core_value_sig901E ? (this._executeAndLayout(var_core_value_sigA7F3, var_core_value_sigEACD, {
      unitId: var_core_value_sig901E.unitId,
      subUnitId: var_core_value_sig901E.subUnitId,
      nodeId: var_core_value_sig901E.nodeId
    }, var_core_value_sig901E.scopeId), true) : false;
  }
  _deleteSelectedNode(var_core_value_sigF7BB) {
    let var_core_value_sigFA38 = this._getSelectedMindMapContext(var_core_value_sigF7BB);
    if (!var_core_value_sigFA38) return false;
    let var_core_value_sig102B = var_core_value_sigF7BB.commandService["syncExecuteCommand"](t.DeleteMindMapNodeOperation["id"], {
      unitId: var_core_value_sigFA38.unitId,
      subUnitId: var_core_value_sigFA38.subUnitId,
      nodeId: var_core_value_sigFA38.nodeId
    });
    return var_core_value_sig102B && var_core_value_sigF7BB.elementStateService["clearSelection"](), var_core_value_sig102B;
  }
  _collapseAll(var_core_value_sigA7DB) {
    let var_core_value_sig5EEE = this._getSelectedMindMapContext(var_core_value_sigA7DB);
    if (!var_core_value_sig5EEE) return false;
    let var_core_value_sig65B4 = var_core_value_sigA7DB.elementService["getElementData"](var_core_value_sig5EEE.unitId, var_core_value_sig5EEE.subUnitId),
      var_core_value_sigF98E = Object.values(var_core_value_sig65B4).map(var_core_value_sigF057 => {
        let var_core_value_sig72F6 = (0, t.getMindMapNodeMeta)(var_core_value_sigF057.element);
        return (var_core_value_sig72F6 == null ? undefined : var_core_value_sig72F6.structureScopeId) === var_core_value_sig5EEE.scopeId && this._getMindMapChildren(var_core_value_sig65B4, var_core_value_sig5EEE.scopeId, var_core_value_sigF057.elementId).length > 0 ? {
          nodeId: var_core_value_sigF057.elementId,
          collapsed: var_core_value_sig72F6.collapsed
        } : null;
      }).filter(var_core_value_sig9FBA => !!var_core_value_sig9FBA);
    if (var_core_value_sigF98E.length === 0) return false;
    let var_core_value_sigA470 = var_core_value_sigF98E.some(var_core_value_sigFE01 => !var_core_value_sigFE01.collapsed),
      var_core_value_sig19A1 = var_core_value_sigA7DB.commandService,
      var_core_value_sig81F7 = this._undoRedoGroupService["createRunner"](var_core_value_sig5EEE.unitId),
      var_core_value_sigBE51 = var_core_value_sigF98E.map(var_core_value_sigA2CE => var_core_value_sig81F7(() => var_core_value_sig19A1.executeCommand(t.ToggleMindMapNodeCollapseOperation["id"], {
        unitId: var_core_value_sig5EEE.unitId,
        subUnitId: var_core_value_sig5EEE.subUnitId,
        nodeId: var_core_value_sigA2CE.nodeId,
        collapsed: var_core_value_sigA470
      })));
    return Promise.all(var_core_value_sigBE51.map(var_core_value_sig1975 => Promise.resolve(var_core_value_sig1975))).then(var_core_value_sig6EA1 => {
      var_core_value_sig6EA1.some(Boolean) && var_core_value_sig81F7(() => var_core_value_sig19A1.executeCommand(t.LayoutMindMapOperation["id"], {
        unitId: var_core_value_sig5EEE.unitId,
        subUnitId: var_core_value_sig5EEE.subUnitId,
        scopeId: var_core_value_sig5EEE.scopeId
      }));
    }), true;
  }
  _openSelectedTextEditing(var_core_value_sigAAD1) {
    let var_core_value_sigBC1A = this._getSelectedMindMapContext(var_core_value_sigAAD1);
    if (!var_core_value_sigBC1A) return false;
    var_core_value_sigAAD1.elementStateService["selectElements"]({
      unitId: var_core_value_sigBC1A.unitId,
      subUnitId: var_core_value_sigBC1A.subUnitId
    }, [var_core_value_sigBC1A.nodeId], var_core_value_sigBC1A.nodeId);
    let var_core_value_sig3F3A = var_core_value_sigAAD1.textEditingService;
    return var_core_value_sig3F3A.ignoreExternalFocusChanges(), var_core_value_sig3F3A.setEditing({
      unitId: var_core_value_sigBC1A.unitId,
      subUnitId: var_core_value_sigBC1A.subUnitId,
      shapeId: var_core_value_sigBC1A.nodeId,
      shapeKey: (0, n.getBoardElementRenderObjectKey)(var_core_value_sigBC1A.unitId, var_core_value_sigBC1A.nodeId),
      visible: true
    }), true;
  }
  _openDescriptionDialog(var_core_value_sigA984) {
    let var_core_value_sigA504 = this._getSelectedMindMapContext(var_core_value_sigA984);
    return var_core_value_sigA504 ? (var_core_value_sigA984.dialogService["open"]({
      id: ce,
      title: {
        title: "boards-mind-ui.description"
      },
      width: 420,
      draggable: true,
      mask: false,
      maskClosable: true,
      children: {
        label: se,
        unitId: var_core_value_sigA504.unitId,
        subUnitId: var_core_value_sigA504.subUnitId,
        nodeId: var_core_value_sigA504.nodeId,
        initialDescription: var_core_value_sigA504.description
      }
    }), true) : false;
  }
  _navigateByTopology(var_core_value_sig05FF, var_core_value_sigFBF0) {
    let var_core_value_sig2F95 = this._getSelectedMindMapContext(var_core_value_sig05FF);
    if (!var_core_value_sig2F95) return false;
    let var_core_value_sigF0E1 = var_core_value_sig05FF.elementService["getElementData"](var_core_value_sig2F95.unitId, var_core_value_sig2F95.subUnitId),
      var_core_value_sig2D8D = var_core_value_sigF0E1[var_core_value_sig2F95.nodeId],
      var_core_value_sigE5A6 = (0, t.getMindMapNodeMeta)(var_core_value_sig2D8D == null ? undefined : var_core_value_sig2D8D.element);
    if (!var_core_value_sig2D8D || !var_core_value_sigE5A6) return false;
    let var_core_value_sigF449 = {
      "arrow-left": "ArrowLeft",
      "arrow-right": "ArrowRight",
      "arrow-up": "ArrowUp",
      "arrow-down": "ArrowDown"
    }[var_core_value_sigFBF0];
    if (!var_core_value_sigF449) return false;
    let var_core_value_sig38C5 = this._resolveArrowNavigationTarget(var_core_value_sigF0E1, var_core_value_sig2F95.nodeId, var_core_value_sigE5A6, var_core_value_sigF449);
    return var_core_value_sig38C5 ? (var_core_value_sig05FF.elementStateService["selectElements"]({
      unitId: var_core_value_sig2F95.unitId,
      subUnitId: var_core_value_sig2F95.subUnitId
    }, [var_core_value_sig38C5], var_core_value_sig38C5), true) : false;
  }
  _resolveArrowNavigationTarget(var_core_value_sigC87D, var_core_value_sigCCDC, var_core_value_sigC310, var_core_value_sigA4E8) {
    let var_core_value_sigDC07 = this._getMindMapChildren(var_core_value_sigC87D, var_core_value_sigC310.structureScopeId, var_core_value_sigCCDC);
    if (var_core_value_sigC310.parentNodeId === null) {
      if (var_core_value_sigA4E8 === "ArrowLeft") {
        var var_core_value_sig3474;
        return ((var_core_value_sig3474 = var_core_value_sigDC07.find(var_core_value_sig7E54 => {
          var var_core_value_sig9A8D;
          return ((var_core_value_sig9A8D = (0, t.getMindMapNodeMeta)(var_core_value_sig7E54.element)) == null ? undefined : var_core_value_sig9A8D.side) === "left";
        })) == null ? undefined : var_core_value_sig3474.elementId) ?? null;
      }
      if (var_core_value_sigA4E8 === "ArrowRight") {
        var var_core_value_sig4E80;
        return ((var_core_value_sig4E80 = var_core_value_sigDC07.find(var_core_value_sigC259 => {
          var var_core_value_sig9C9F;
          return (((var_core_value_sig9C9F = (0, t.getMindMapNodeMeta)(var_core_value_sigC259.element)) == null ? undefined : var_core_value_sig9C9F.side) ?? "right") === "right";
        })) == null ? undefined : var_core_value_sig4E80.elementId) ?? null;
      }
      return null;
    }
    let var_core_value_sigD23B = var_core_value_sigC310.side ?? "right",
      var_core_value_sig2B2A = var_core_value_sigD23B === "right" ? "ArrowLeft" : "ArrowRight",
      var_core_value_sig0B5C = var_core_value_sigD23B === "right" ? "ArrowRight" : "ArrowLeft";
    if (var_core_value_sigA4E8 === var_core_value_sig2B2A) return var_core_value_sigC310.parentNodeId;
    if (var_core_value_sigA4E8 === var_core_value_sig0B5C) {
      var var_core_value_sig7D42;
      return ((var_core_value_sig7D42 = var_core_value_sigDC07[0]) == null ? undefined : var_core_value_sig7D42.elementId) ?? null;
    }
    if (var_core_value_sigA4E8 === "ArrowUp" || var_core_value_sigA4E8 === "ArrowDown") {
      let var_core_value_sig029F = this._getMindMapChildren(var_core_value_sigC87D, var_core_value_sigC310.structureScopeId, var_core_value_sigC310.parentNodeId),
        var_core_value_sig3767 = var_core_value_sig029F.findIndex(var_core_value_sig8CFA => var_core_value_sig8CFA.elementId === var_core_value_sigCCDC),
        var_core_value_sig670B = var_core_value_sigA4E8 === "ArrowUp" ? var_core_value_sig029F[var_core_value_sig3767 - 1] : var_core_value_sig029F[var_core_value_sig3767 + 1];
      return (var_core_value_sig670B == null ? undefined : var_core_value_sig670B.elementId) ?? null;
    }
    return null;
  }
  _getMindMapChildren(var_core_value_sig8FDE, var_core_value_sig78E6, var_core_value_sig541F) {
    return Object.values(var_core_value_sig8FDE).filter(var_core_value_sig6912 => {
      let var_core_value_sigE235 = (0, t.getMindMapNodeMeta)(var_core_value_sig6912.element);
      return (var_core_value_sigE235 == null ? undefined : var_core_value_sigE235.structureScopeId) === var_core_value_sig78E6 && var_core_value_sigE235.parentNodeId === var_core_value_sig541F && var_core_value_sig6912.element["visible"] !== false;
    }).sort((var_core_value_sig7664, var_core_value_sig2281) => {
      let var_core_value_sig5E86 = (0, t.getMindMapNodeMeta)(var_core_value_sig7664.element),
        var_core_value_sig6998 = (0, t.getMindMapNodeMeta)(var_core_value_sig2281.element);
      return (0, t.compareMindMapOrderKey)(var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.orderKey, var_core_value_sig6998 == null ? undefined : var_core_value_sig6998.orderKey) || var_core_value_sig7664.elementId["localeCompare"](var_core_value_sig2281.elementId);
    });
  }
  _getSelectedMindMapContext(var_core_value_sig417B) {
    var var_core_value_sigAA90;
    let var_core_value_sigE92D = var_core_value_sig417B.elementStateService["getSnapshot"](),
      var_core_value_sig9940 = var_core_value_sigE92D.focusedId ?? var_core_value_sigE92D.selectedIds[0];
    if (!var_core_value_sig9940 || var_core_value_sigE92D.selectedIds["length"] !== 1 || var_core_value_sigE92D.activeEditingId || var_core_value_sigE92D.isTransforming) return null;
    let var_core_value_sig682D = var_core_value_sigE92D.context ?? {
        unitId: var_core_value_sig417B.renderContext["unitId"],
        subUnitId: var_core_value_sig417B.renderContext["unit"].getActivePageId()
      },
      var_core_value_sig1435 = var_core_value_sig417B.elementService["getElementData"](var_core_value_sig682D.unitId, var_core_value_sig682D.subUnitId)[var_core_value_sig9940],
      var_core_value_sig4082 = (0, t.getMindMapNodeMeta)(var_core_value_sig1435 == null ? undefined : var_core_value_sig1435.element);
    return !var_core_value_sig1435 || !var_core_value_sig4082 ? null : {
      unitId: var_core_value_sig682D.unitId,
      subUnitId: var_core_value_sig682D.subUnitId,
      nodeId: var_core_value_sig9940,
      scopeId: var_core_value_sig4082.structureScopeId,
      isRoot: var_core_value_sig4082.parentNodeId === null,
      description: ((var_core_value_sigAA90 = var_core_value_sig4082.foreignAttributes) == null ? undefined : var_core_value_sigAA90._note) ?? ""
    };
  }
  _getBlankBoardContext(var_core_value_sigC049) {
    var var_core_value_sigE5C3, var_core_value_sigCCAA;
    let var_core_value_sigF32D = var_core_value_sigC049.elementStateService["getSnapshot"]();
    return var_core_value_sigF32D.activeEditingId || var_core_value_sigF32D.isTransforming || var_core_value_sigF32D.selectedIds["length"] > 0 || var_core_value_sigF32D.focusedId ? null : {
      unitId: ((var_core_value_sigE5C3 = var_core_value_sigF32D.context) == null ? undefined : var_core_value_sigE5C3.unitId) ?? var_core_value_sigC049.renderContext["unitId"],
      subUnitId: ((var_core_value_sigCCAA = var_core_value_sigF32D.context) == null ? undefined : var_core_value_sigCCAA.subUnitId) ?? var_core_value_sigC049.renderContext["unit"].getActivePageId()
    };
  }
  _executeAndLayout(var_core_value_sig9427, var_core_value_sig21F4, var_core_value_sigA345, var_core_value_sigA468) {
    let var_core_value_sig1561 = var_core_value_sig9427.commandService,
      var_core_value_sigDF14 = this._undoRedoGroupService["createRunner"](var_core_value_sigA345.unitId),
      var_core_value_sig842F = var_core_value_sigDF14(() => var_core_value_sig1561.executeCommand(var_core_value_sig21F4, var_core_value_sigA345));
    Promise.resolve(var_core_value_sig842F).then(var_core_value_sigF639 => {
      var_core_value_sigF639 && var_core_value_sigDF14(() => var_core_value_sig1561.executeCommand(t.LayoutMindMapOperation["id"], {
        unitId: var_core_value_sigA345.unitId,
        subUnitId: var_core_value_sigA345.subUnitId,
        scopeId: var_core_value_sigA468
      }));
    });
  }
  _executeCreateAndEdit(var_core_value_sigC4C0, var_core_value_sig214A, var_core_value_sigCCC3, var_core_value_sig986E, var_core_value_sig537C) {
    let var_core_value_sigBBBC = {
        unitId: var_core_value_sigCCC3.unitId,
        subUnitId: var_core_value_sigCCC3.subUnitId
      },
      var_core_value_sig5440 = var_core_value_sigC4C0.commandService,
      var_core_value_sigE28B = this._undoRedoGroupService["createRunner"](var_core_value_sigCCC3.unitId),
      var_core_value_sig0FD9 = var_core_value_sigE28B(() => var_core_value_sig5440.executeCommand(var_core_value_sig214A, var_core_value_sigCCC3));
    Promise.resolve(var_core_value_sig0FD9).then(var_core_value_sigEAE5 => {
      if (!var_core_value_sigEAE5) return;
      var_core_value_sigE28B(() => var_core_value_sig5440.executeCommand(t.LayoutMindMapOperation["id"], {
        ...var_core_value_sigBBBC,
        scopeId: var_core_value_sig986E
      })), var_core_value_sigC4C0.elementStateService["selectElements"](var_core_value_sigBBBC, [var_core_value_sig537C], var_core_value_sig537C);
      let var_core_value_sigE94C = var_core_value_sigC4C0.textEditingService;
      var_core_value_sigE94C.ignoreExternalFocusChanges(), var_core_value_sigE94C.setEditing({
        ...var_core_value_sigBBBC,
        shapeId: var_core_value_sig537C,
        shapeKey: (0, n.getBoardElementRenderObjectKey)(var_core_value_sigBBBC.unitId, var_core_value_sig537C),
        visible: true
      });
    });
  }
};
W = S([x(0, t.IMindMapClipboardService), x(1, i.ICommandService), x(2, s.IShortcutService), x(3, (0, i.Inject)(s.UndoRedoGroupService))], W);
function he(var_core_value_sig8EF01, var_core_value_sig234B) {
  var var_core_value_sig8169, var_core_value_sigC5FB;
  let var_core_value_sig5453 = typeof (var_core_value_sig234B == null ? undefined : var_core_value_sig234B.unitId) == "string" ? var_core_value_sig234B.unitId : (var_core_value_sig8169 = var_core_value_sig8EF01.get(i.IUniverInstanceService).getCurrentUnitOfType(i.UniverInstanceType["UNIVER_BOARD"])) == null ? undefined : var_core_value_sig8169.getUnitId();
  return var_core_value_sig5453 ? ((var_core_value_sigC5FB = var_core_value_sig8EF01.get(a.IRenderManagerService).getRenderUnitById(var_core_value_sig5453)) == null ? undefined : var_core_value_sigC5FB.with(H)) ?? null : null;
}
function ge(var_core_value_sig8725) {
  return var_core_value_sig8725 === "arrow-left" || var_core_value_sig8725 === "arrow-right" || var_core_value_sig8725 === "arrow-up" || var_core_value_sig8725 === "arrow-down";
}
const _e = {
    min: 1,
    max: 5,
    defaultValue: 3
  },
  ve = {
    min: 0,
    max: 100,
    defaultValue: 100
  },
  ye = [{
    kind: "dropdown",
    titleKey: "boards-mind-ui.toolbar.primary.line",
    panel: "line"
  }, {
    kind: "fontColor",
    titleKey: "boards-mind-ui.toolbar.primary.fontColor"
  }, {
    kind: "typography",
    titleKey: "boards-mind-ui.toolbar.primary.typography"
  }, {
    kind: "dropdown",
    titleKey: "boards-mind-ui.toolbar.primary.more",
    panel: "more",
    dividerBefore: true
  }],
  G = {
    addSibling: "add-sibling-or-child",
    addChild: "add-child",
    copy: "copy",
    paste: "paste",
    delete: "delete"
  },
  be = [{
    key: "mind-map",
    title: "Mind\x20map",
    items: [{
      value: "mindmap-horizontal",
      icon: "mindmap-horizontal",
      labelKey: "boards-mind-ui.panel.structureKind.mindmapHorizontal"
    }, {
      value: "mindmap-vertical",
      icon: "mindmap-vertical",
      labelKey: "boards-mind-ui.panel.structureKind.mindmapVertical"
    }]
  }, {
    key: "tree-diagram",
    title: "Tree diagram",
    items: [{
      value: "tree-right",
      icon: "tree-right",
      labelKey: "boards-mind-ui.panel.structureKind.treeRight"
    }, {
      value: "tree-left",
      icon: "tree-left",
      labelKey: "boards-mind-ui.panel.structureKind.treeLeft"
    }, {
      value: "tree-alternate",
      icon: "tree-alternate",
      labelKey: "boards-mind-ui.panel.structureKind.treeAlternate"
    }]
  }, {
    key: "timeline",
    title: "Timeline",
    items: [{
      value: "timeline-horizontal",
      icon: "timeline-horizontal",
      labelKey: "boards-mind-ui.panel.structureKind.timelineHorizontal"
    }, {
      value: "timeline-vertical",
      icon: "timeline-vertical",
      labelKey: "boards-mind-ui.panel.structureKind.timelineVertical"
    }]
  }],
  xe = {
    key: "branch",
    title: "Branch",
    items: [{
      value: "curve",
      icon: "branch-curve",
      labelKey: "boards-mind-ui.panel.branchLineType.curve"
    }, {
      value: "rounded-orthogonal",
      icon: "branch-rounded-orthogonal",
      labelKey: "boards-mind-ui.panel.branchLineType.roundedOrthogonal"
    }, {
      value: "orthogonal",
      icon: "branch-orthogonal",
      labelKey: "boards-mind-ui.panel.branchLineType.orthogonal"
    }]
  },
  Se = "board.mind-map.floating-toolbar";
function Ce(var_core_value_sig513B, var_core_value_sig5501) {
  var_core_value_sig513B.executeCommand(U, {
    action: var_core_value_sig5501
  });
}
const we = {
  line: d.ShapeLineIcon,
  more: d.MoreHorizontalIcon
};
function K(var_core_value_sig7784) {
  var_core_value_sig7784.stopPropagation(), var_core_value_sig7784.preventDefault();
}
function Te(var_core_value_sigB706, var_core_value_sig5FD0 = "univer-size-5", var_core_value_sig77E3) {
  return (0, p.jsx)(c.ShapeFloatingToolbarIcon, {
    children: (0, p.jsx)(var_core_value_sigB706, {
      className: var_core_value_sig5FD0,
      extend: var_core_value_sig77E3
    })
  });
}
function Ee(var_core_value_sigB071) {
  var var_core_value_sig15FE, var_core_value_sigCF47;
  let var_core_value_sigB0F9 = (var_core_value_sigB071 == null ? undefined : var_core_value_sigB071.shapeText) ?? {},
    var_core_value_sigAF12 = var_core_value_sigB0F9.dataModel && typeof var_core_value_sigB0F9.dataModel == "object" ? var_core_value_sigB0F9.dataModel : {},
    var_core_value_sigC60C = (var_core_value_sig15FE = var_core_value_sigAF12.doc) == null || (var_core_value_sig15FE = var_core_value_sig15FE.documentStyle) == null ? undefined : var_core_value_sig15FE.textStyle;
  return {
    color: typeof var_core_value_sigB0F9.color == "string" ? var_core_value_sigB0F9.color : (var_core_value_sigC60C == null || (var_core_value_sigCF47 = var_core_value_sigC60C.cl) == null ? undefined : var_core_value_sigCF47.rgb) ?? c.SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_COLOR,
    fontFamily: typeof var_core_value_sigB0F9.fontFamily == "string" ? var_core_value_sigB0F9.fontFamily : (var_core_value_sigC60C == null ? undefined : var_core_value_sigC60C.ff) ?? i.DEFAULT_STYLES["ff"],
    fontSize: typeof var_core_value_sigB0F9.fontSize == "number" ? var_core_value_sigB0F9.fontSize : typeof (var_core_value_sigC60C == null ? undefined : var_core_value_sigC60C.fs) == "number" ? var_core_value_sigC60C.fs : i.DEFAULT_STYLES["fs"],
    horizontalAlign: var_core_value_sigB0F9.horizontalAlign ?? var_core_value_sigAF12.ha ?? i.HorizontalAlign["LEFT"],
    textFill: var_core_value_sigB0F9.textFill && typeof var_core_value_sigB0F9.textFill == "object" ? var_core_value_sigB0F9.textFill : var_core_value_sigC60C == null ? undefined : var_core_value_sigC60C.textFill,
    verticalAlign: var_core_value_sigB0F9.verticalAlign ?? var_core_value_sigAF12.va ?? i.VerticalAlign["MIDDLE"]
  };
}
function De(var_core_value_sig1C3C, var_core_value_sig71CF) {
  if (!var_core_value_sig71CF) return;
  let var_core_value_sigC341 = me(var_core_value_sig71CF);
  if (!var_core_value_sigC341.length) return;
  let var_core_value_sigBA47 = var_core_value_sigC341.map(var_core_value_sig5649 => var_core_value_sig1C3C.getShortcutDisplay({
    id: "board.operation.mind-map.keyboard-shortcut",
    binding: var_core_value_sig5649,
    staticParameters: {
      action: var_core_value_sig71CF
    }
  }) ?? undefined).filter(var_core_value_sigAF82 => !!var_core_value_sigAF82);
  return var_core_value_sigBA47.length ? [...new Set(var_core_value_sigBA47)].join("/") : undefined;
}
async function Oe(var_core_value_sig3DF7, var_core_value_sigD49F, var_core_value_sigCECC) {
  return (await Promise.resolve(var_core_value_sigD49F(() => var_core_value_sig3DF7.executeCommand(t.ChangeMindMapLayoutOperation["id"], var_core_value_sigCECC)))) ? (await Promise.resolve(var_core_value_sigD49F(() => var_core_value_sig3DF7.executeCommand(t.LayoutMindMapOperation["id"], {
    unitId: var_core_value_sigCECC.unitId,
    subUnitId: var_core_value_sigCECC.subUnitId,
    scopeId: var_core_value_sigCECC.scopeId
  }))), true) : false;
}
async function ke(var_core_value_sig0F47, var_core_value_sig6B29, var_core_value_sig28E2) {
  return (await Promise.resolve(var_core_value_sig6B29(() => var_core_value_sig0F47.executeCommand(t.ChangeMindMapBranchLineTypeOperation["id"], var_core_value_sig28E2)))) ? (await Promise.resolve(var_core_value_sig6B29(() => var_core_value_sig0F47.executeCommand(t.LayoutMindMapOperation["id"], {
    unitId: var_core_value_sig28E2.unitId,
    subUnitId: var_core_value_sig28E2.subUnitId,
    scopeId: var_core_value_sig28E2.scopeId
  }))), true) : false;
}
function Ae({
  className: var_core_value_sig1578 = "univer-size-5"
}) {
  return (0, p.jsx)(c.ShapeFloatingToolbarIcon, {
    children: (0, p.jsxs)("svg", {
      className: var_core_value_sig1578,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: [(0, p.jsx)("path", {
        d: "M4.5 7.5h4.2c1.9 0 3.3 1.5 3.3 3.3v2.4c0 1.8 1.4 3.3 3.3 3.3h4.2",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }), (0, p.jsx)("path", {
        d: "M19.5 7.5h-4.2c-1.9 0-3.3 1.5-3.3 3.3",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }), (0, p.jsx)("path", {
        d: "M4.5 16.5h4.2c1.9 0 3.3-1.5 3.3-3.3",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      })]
    })
  });
}
function je({
  icon: var_core_value_sig52ED
}) {
  let var_core_value_sig135F = "#d8dce3",
    var_core_value_sig416D = {
      stroke: "currentColor",
      strokeWidth: 2.6,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    var_core_value_sigAD5D = {
      stroke: var_core_value_sig135F,
      strokeWidth: 3.2,
      strokeLinecap: "round"
    };
  return (0, p.jsxs)("svg", {
    className: "univer-h-9\x20univer-w-12",
    viewBox: "0 0 80 56",
    fill: "none",
    "aria-hidden": "true",
    children: [var_core_value_sig52ED === "mindmap-horizontal" && (0, p.jsxs)(p.Fragment, {
      children: [(0, p.jsx)("path", {
        d: "M31\x2013c9\x208\x209\x2022\x2018\x2030M49\x2013c-9\x208-9\x2022-18\x2030M31\x2013c-7\x204-9\x209-9\x2015s2\x2011\x209\x2015M49\x2013c7\x204\x209\x209\x209\x2015s-2\x2011-9\x2015",
        ...var_core_value_sig416D
      }), (0, p.jsx)("path", {
        d: "M12 15h9M12 28h9M12 41h9M59 15h9M59 28h9M59 41h9",
        ...var_core_value_sigAD5D
      })]
    }), var_core_value_sig52ED === "mindmap-vertical" && (0, p.jsxs)(p.Fragment, {
      children: [(0, p.jsx)("path", {
        d: "M21 28h38M40 11v34M28 16c7 4 10 8 12 12 2-4 5-8 12-12M28 40c7-4 10-8 12-12 2 4 5 8 12 12",
        ...var_core_value_sig416D
      }), (0, p.jsx)("path", {
        d: "M22 8h36M22 48h36M14 18v20M66 18v20",
        stroke: var_core_value_sig135F,
        strokeWidth: 2.6,
        strokeLinecap: "round",
        strokeDasharray: "6 7"
      })]
    }), var_core_value_sig52ED === "tree-right" && (0, p.jsxs)(p.Fragment, {
      children: [(0, p.jsx)("path", {
        d: "M24 12v32M24 19c0 4 3 6 7 6h7M24 29c0 4 3 6 7 6h7M24 39c0 4 3 6 7 6h7",
        ...var_core_value_sig416D
      }), (0, p.jsx)("path", {
        d: "M47 25h13M47 35h13M47 45h13",
        ...var_core_value_sigAD5D
      }), (0, p.jsx)("circle", {
        cx: "24",
        cy: "12",
        r: "3",
        fill: "currentColor"
      })]
    }), var_core_value_sig52ED === "tree-left" && (0, p.jsxs)(p.Fragment, {
      children: [(0, p.jsx)("path", {
        d: "M56 12v32M56 19c0 4-3 6-7 6h-7M56 29c0 4-3 6-7 6h-7M56 39c0 4-3 6-7 6h-7",
        ...var_core_value_sig416D
      }), (0, p.jsx)("path", {
        d: "M20 25h13M20 35h13M20 45h13",
        ...var_core_value_sigAD5D
      }), (0, p.jsx)("circle", {
        cx: "56",
        cy: "12",
        r: "3",
        fill: "currentColor"
      })]
    }), var_core_value_sig52ED === "tree-alternate" && (0, p.jsxs)(p.Fragment, {
      children: [(0, p.jsx)("path", {
        d: "M42 12v32M42 20c0 4-3 6-7 6h-7M42 30c0 4 3 6 7 6h7M42 39c0 4-3 6-7 6h-7",
        ...var_core_value_sig416D
      }), (0, p.jsx)("path", {
        d: "M12 26h11M58 36h11M12 45h11",
        ...var_core_value_sigAD5D
      }), (0, p.jsx)("circle", {
        cx: "42",
        cy: "12",
        r: "3",
        fill: "currentColor"
      })]
    }), var_core_value_sig52ED === "timeline-horizontal" && (0, p.jsxs)(p.Fragment, {
      children: [(0, p.jsx)("path", {
        d: "M15 31h50M35 31V18c0-4 3-7 8-7h9M35 31v13c0 4 3 7 8 7h9",
        ...var_core_value_sig416D
      }), (0, p.jsx)("path", {
        d: "M56 11h11M56 51h11",
        ...var_core_value_sigAD5D
      }), (0, p.jsx)("circle", {
        cx: "17",
        cy: "31",
        r: "3",
        fill: "currentColor"
      })]
    }), var_core_value_sig52ED === "timeline-vertical" && (0, p.jsxs)(p.Fragment, {
      children: [(0, p.jsx)("path", {
        d: "M40 9v40M40 20c8 0 11 4 11 11v8M40 35c-8 0-11 4-11 11v4",
        ...var_core_value_sig416D
      }), (0, p.jsx)("path", {
        d: "M56\x2039h11M13\x2050h11",
        ...var_core_value_sigAD5D
      }), (0, p.jsx)("circle", {
        cx: "40",
        cy: "9",
        r: "3",
        fill: "currentColor"
      })]
    }), var_core_value_sig52ED === "branch-curve" && (0, p.jsx)(p.Fragment, {
      children: (0, p.jsx)("path", {
        d: "M16 28c16 0 25-13 43-13M16 28c16 0 25 13 43 13",
        ...var_core_value_sig416D
      })
    }), var_core_value_sig52ED === "branch-rounded-orthogonal" && (0, p.jsx)(p.Fragment, {
      children: (0, p.jsx)("path", {
        d: "M16 29h18c7 0 10-5 10-12v-3M34 29h10c7 0 10 5 10 12v3",
        ...var_core_value_sig416D
      })
    }), var_core_value_sig52ED === "branch-orthogonal" && (0, p.jsx)(p.Fragment, {
      children: (0, p.jsx)("path", {
        d: "M17 33h21M38 17v30M38 17h24",
        ...var_core_value_sig416D
      })
    })]
  });
}
function Me(var_core_value_sig1B8A, var_core_value_sigFB18) {
  let var_core_value_sig703C = var_core_value_sig1B8A.textStyle,
    var_core_value_sig96CF = (0, e.documentTextStyleToBoardShapeTextStyle)(var_core_value_sig703C),
    var_core_value_sig49F1 = {
      ...(var_core_value_sig96CF.color === undefined ? null : {
        color: var_core_value_sig96CF.color
      }),
      ...(var_core_value_sig96CF.fontFamily === undefined ? null : {
        fontFamily: var_core_value_sig96CF.fontFamily
      }),
      ...(var_core_value_sig96CF.fontSize === undefined ? null : {
        fontSize: var_core_value_sig96CF.fontSize
      }),
      ...(var_core_value_sig96CF.bold === undefined ? null : {
        bold: var_core_value_sig96CF.bold
      }),
      ...(var_core_value_sig96CF.italic === undefined ? null : {
        italic: var_core_value_sig96CF.italic
      }),
      ...(var_core_value_sig96CF.underline === undefined ? null : {
        underline: var_core_value_sig96CF.underline
      }),
      ...(var_core_value_sig96CF.strikethrough === undefined ? null : {
        strikethrough: var_core_value_sig96CF.strikethrough
      }),
      ...(var_core_value_sig96CF.textFill === undefined ? null : {
        textFill: var_core_value_sig96CF.textFill
      })
    };
  var_core_value_sig1B8A.horizontalAlign !== undefined && (var_core_value_sig49F1.horizontalAlign = var_core_value_sig1B8A.horizontalAlign), var_core_value_sig1B8A.verticalAlign !== undefined && (var_core_value_sig49F1.verticalAlign = var_core_value_sig1B8A.verticalAlign), Object.keys(var_core_value_sig49F1).length > 0 && var_core_value_sigFB18({
    textStyle: var_core_value_sig49F1
  });
}
function Ne(var_core_value_sig2F7B, var_core_value_sigB0DF, var_core_value_sig2E44) {
  let var_core_value_sig8560 = var_core_value_sig2F7B ?? {},
    var_core_value_sig138D = (0, c.buildShapeTextDataUpdate)(var_core_value_sig8560, var_core_value_sigB0DF),
    var_core_value_sig1E26 = var_core_value_sig138D.shapeText ?? var_core_value_sig8560.shapeText ?? {};
  return {
    ...var_core_value_sig8560,
    ...var_core_value_sig138D,
    shapeText: {
      ...var_core_value_sig1E26,
      ...(var_core_value_sig2E44.color === undefined ? null : {
        color: var_core_value_sig2E44.color
      }),
      ...(var_core_value_sig2E44.fontSize === undefined ? null : {
        fontSize: var_core_value_sig2E44.fontSize
      }),
      ...(var_core_value_sig2E44.bold === undefined ? null : {
        bold: var_core_value_sig2E44.bold
      }),
      ...(var_core_value_sig2E44.italic === undefined ? null : {
        italic: var_core_value_sig2E44.italic
      }),
      ...(var_core_value_sig2E44.underline === undefined ? null : {
        underline: var_core_value_sig2E44.underline
      }),
      ...(var_core_value_sig2E44.strikethrough === undefined ? null : {
        strikethrough: var_core_value_sig2E44.strikethrough
      }),
      ...(var_core_value_sig2E44.horizontalAlign === undefined ? null : {
        horizontalAlign: var_core_value_sig2E44.horizontalAlign
      }),
      ...(var_core_value_sig2E44.verticalAlign === undefined ? null : {
        verticalAlign: var_core_value_sig2E44.verticalAlign
      }),
      ...(var_core_value_sig2E44.textFill === undefined ? null : {
        textFill: var_core_value_sig2E44.textFill
      })
    }
  };
}
function Pe(var_core_value_sig5C6C, var_core_value_sigBE85) {
  let var_core_value_sig56DE = var_core_value_sig5C6C == null ? undefined : var_core_value_sig5C6C.stroke;
  var_core_value_sig56DE && var_core_value_sigBE85({
    lineType: var_core_value_sig56DE.dashType === l.ShapeLineDashEnum["RoundDot"] || var_core_value_sig56DE.dashType === l.ShapeLineDashEnum["SquareDot"] ? "dot" : var_core_value_sig56DE.dashType === l.ShapeLineDashEnum["Dash"] ? "dash" : "solid",
    ...(typeof var_core_value_sig56DE.width == "number" ? {
      strokeWidth: var_core_value_sig56DE.width
    } : null),
    ...(typeof var_core_value_sig56DE.color == "string" ? {
      stroke: var_core_value_sig56DE.color
    } : null),
    ...(typeof var_core_value_sig56DE.opacity == "number" ? {
      opacity: var_core_value_sig56DE.opacity
    } : null)
  });
}
function Fe(var_core_value_sig0278) {
  return var_core_value_sig0278 != null && var_core_value_sig0278.length ? var_core_value_sig0278[0] <= 2 ? l.ShapeLineDashEnum["RoundDot"] : l.ShapeLineDashEnum["Dash"] : l.ShapeLineDashEnum["Solid"];
}
function Ie(var_core_value_sig08A6) {
  return {
    stroke: {
      lineStrokeType: l.ShapeLineTypeEnum["SolidLine"],
      dashType: Fe(var_core_value_sig08A6 == null ? undefined : var_core_value_sig08A6.dash),
      color: (var_core_value_sig08A6 == null ? undefined : var_core_value_sig08A6.stroke) ?? c.SHAPE_FLOATING_TOOLBAR_DEFAULT_STROKE_COLOR,
      width: (var_core_value_sig08A6 == null ? undefined : var_core_value_sig08A6.strokeWidth) ?? _e.defaultValue,
      opacity: (var_core_value_sig08A6 == null ? undefined : var_core_value_sig08A6.opacity) ?? ve.defaultValue / 100
    }
  };
}
function Le(var_core_value_sig04E1) {
  var var_core_value_sigC504, var_core_value_sig0515, var_core_value_sig9F34;
  let var_core_value_sig0247 = (0, s.useDependency)(i.ICommandService),
    var_core_value_sig6030 = (0, s.useDependency)(s.IShortcutService),
    var_core_value_sig0137 = (0, s.useDependency)(i.LocaleService),
    var_core_value_sig14F3 = (0, s.useDependency)(s.UndoRedoGroupService),
    [var_core_value_sig34E8, var_core_value_sigCFE7] = (0, f.useState)(null),
    [var_core_value_sigECBC, var_core_value_sig65D2] = (0, f.useState)((var_core_value_sigC504 = var_core_value_sig04E1.popup["extraProps"]) == null ? undefined : var_core_value_sigC504.shapeData),
    var_core_value_sig4306 = var_core_value_sig04E1.popup["extraProps"];
  if (!var_core_value_sig4306) return null;
  let var_core_value_sigFCD3 = {
      unitId: var_core_value_sig4306.unitId,
      subUnitId: var_core_value_sig4306.subUnitId
    },
    var_core_value_sig147A = var_core_value_sig21A2 => {
      var_core_value_sig0247.executeCommand(t.UpdateMindMapNodeOperation["id"], {
        ...var_core_value_sigFCD3,
        nodeId: var_core_value_sig4306.elementId,
        ...var_core_value_sig21A2
      });
    },
    var_core_value_sig829F = (var_core_value_sig5C1D, var_core_value_sig4CBA) => {
      let var_core_value_sig8E65 = var_core_value_sig4CBA ?? {};
      var_core_value_sig65D2(var_core_value_sig6D47 => ({
        ...(var_core_value_sig6D47 ?? {}),
        ...var_core_value_sig8E65
      })), var_core_value_sig147A({
        ...(var_core_value_sig8E65.fill === undefined ? null : {
          fill: var_core_value_sig8E65.fill
        }),
        ...(var_core_value_sig8E65.stroke === undefined ? null : {
          stroke: var_core_value_sig8E65.stroke
        })
      });
    },
    var_core_value_sig534C = var_core_value_sig772C => {
      var_core_value_sig0247.executeCommand(t.UpdateMindMapIncomingConnectorOperation["id"], {
        ...var_core_value_sigFCD3,
        nodeId: var_core_value_sig4306.elementId,
        style: var_core_value_sig772C
      });
    },
    var_core_value_sigABB7 = Ie(var_core_value_sig4306.incomingConnectorStyle),
    var_core_value_sig9071 = var_core_value_sigF309 => De(var_core_value_sig6030, var_core_value_sigF309),
    var_core_value_sig01A9 = var_core_value_sig44F9 => {
      Ce(var_core_value_sig0247, var_core_value_sig44F9);
    },
    var_core_value_sig9477 = (var_core_value_sigECBC == null ? undefined : var_core_value_sigECBC.shapeText) ?? {},
    var_core_value_sig917C = Ee(var_core_value_sigECBC),
    var_core_value_sig27E2 = var_core_value_sigE532 => {
      Me(var_core_value_sigE532, var_core_value_sigCB82 => {
        var_core_value_sig65D2(var_core_value_sig2E11 => Ne(var_core_value_sig2E11, var_core_value_sigE532, var_core_value_sigCB82.textStyle)), var_core_value_sig147A(var_core_value_sigCB82);
      });
    },
    var_core_value_sig10D7 = [{
      label: var_core_value_sig0137.t("boards-mind-ui.alignLeft"),
      value: i.HorizontalAlign["LEFT"],
      icon: (0, p.jsx)(d.LeftJustifyingIcon, {})
    }, {
      label: var_core_value_sig0137.t("boards-mind-ui.alignCenter"),
      value: i.HorizontalAlign["CENTER"],
      icon: (0, p.jsx)(d.HorizontallyIcon, {})
    }, {
      label: var_core_value_sig0137.t("boards-mind-ui.alignRight"),
      value: i.HorizontalAlign["RIGHT"],
      icon: (0, p.jsx)(d.RightJustifyingIcon, {})
    }, {
      label: var_core_value_sig0137.t("boards-mind-ui.alignJustify"),
      value: i.HorizontalAlign["JUSTIFIED"],
      icon: (0, p.jsx)(d.AlignTextBothIcon, {})
    }],
    var_core_value_sig5A1A = [{
      label: var_core_value_sig0137.t("boards-mind-ui.alignTop"),
      value: i.VerticalAlign["TOP"],
      icon: (0, p.jsx)(d.AlignTopIcon, {})
    }, {
      label: var_core_value_sig0137.t("boards-mind-ui.alignMiddle"),
      value: i.VerticalAlign["MIDDLE"],
      icon: (0, p.jsx)(d.VerticalCenterIcon, {})
    }, {
      label: var_core_value_sig0137.t("boards-mind-ui.alignBottom"),
      value: i.VerticalAlign["BOTTOM"],
      icon: (0, p.jsx)(d.AlignBottomIcon, {})
    }],
    var_core_value_sig77D2 = () => {
      var_core_value_sig01A9("add-sibling-or-child");
    },
    var_core_value_sig625E = () => {
      var_core_value_sig01A9("add-child");
    },
    var_core_value_sig6F04 = () => {
      var_core_value_sig01A9("copy");
    },
    var_core_value_sig48DA = () => {
      var_core_value_sig01A9("paste");
    },
    var_core_value_sigD327 = () => {
      var_core_value_sig01A9("delete");
    },
    var_core_value_sig6694 = ((var_core_value_sig0515 = var_core_value_sig4306.layout) == null ? undefined : var_core_value_sig0515.structureKind) ?? t.MIND_MAP_DEFAULT_LAYOUT["structureKind"],
    var_core_value_sig2A21 = (0, t.resolveMindMapBranchLineTypeForStructure)(var_core_value_sig6694, ((var_core_value_sig9F34 = var_core_value_sig4306.layout) == null ? undefined : var_core_value_sig9F34.branchLineType) ?? t.MIND_MAP_DEFAULT_LAYOUT["branchLineType"]),
    var_core_value_sig0836 = var_core_value_sigF381 => {
      let var_core_value_sigCB92 = (0, t.resolveMindMapBranchLineTypeForStructure)(var_core_value_sigF381, var_core_value_sig2A21);
      Oe(var_core_value_sig0247, var_core_value_sig14F3.createRunner(var_core_value_sig4306.unitId), {
        ...var_core_value_sigFCD3,
        scopeId: var_core_value_sig4306.scopeId,
        structureKind: var_core_value_sigF381,
        ...(var_core_value_sigCB92 === var_core_value_sig2A21 ? null : {
          branchLineType: var_core_value_sigCB92
        })
      }), var_core_value_sigCFE7(null);
    },
    var_core_value_sigD95C = var_core_value_sigC844 => {
      ke(var_core_value_sig0247, var_core_value_sig14F3.createRunner(var_core_value_sig4306.unitId), {
        ...var_core_value_sigFCD3,
        scopeId: var_core_value_sig4306.scopeId,
        branchLineType: var_core_value_sigC844
      }), var_core_value_sigCFE7(null);
    },
    var_core_value_sig692E = (var_core_value_sig2ED4, var_core_value_sig0477, var_core_value_sig6FDF, var_core_value_sig27C4 = false) => (0, p.jsx)("button", {
      type: "button",
      "aria-label": var_core_value_sig0137.t(var_core_value_sig2ED4.labelKey),
      disabled: var_core_value_sig27C4,
      className: (0, u.clsx)("univer-flex\x20univer-h-12\x20univer-min-w-0\x20univer-items-center\x20univer-justify-center\x20univer-rounded-lg\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-text-gray-900\x20univer-outline-none\x20univer-transition-colors\x20hover:univer-bg-gray-0", var_core_value_sig0477 && "univer-bg-[#e8eefc] univer-text-[#2f6fed] hover:univer-bg-[#e8eefc]", var_core_value_sig27C4 && "univer-cursor-not-allowed\x20univer-text-gray-300\x20hover:univer-bg-transparent"),
      onMouseDown: K,
      onPointerDown: K,
      onClick: var_core_value_sigCF4E => {
        var_core_value_sigCF4E.stopPropagation(), !var_core_value_sig27C4 && var_core_value_sig6FDF();
      },
      children: (0, p.jsx)(je, {
        icon: var_core_value_sig2ED4.icon
      })
    }, var_core_value_sig2ED4.value),
    var_core_value_sig3FAF = () => (0, p.jsxs)("div", {
      className: "univer-w-[202px]\x20univer-rounded-xl\x20univer-border\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-px-4\x20univer-py-4\x20univer-shadow-lg",
      onMouseDown: var_core_value_sig6CAD => var_core_value_sig6CAD.stopPropagation(),
      onPointerDown: var_core_value_sig8CF5 => var_core_value_sig8CF5.stopPropagation(),
      children: [be.map(var_core_value_sigDDD7 => (0, p.jsxs)("div", {
        className: "univer-mb-4",
        children: [(0, p.jsx)("div", {
          className: "univer-mb-2 univer-text-lg univer-text-gray-900",
          children: var_core_value_sigDDD7.title
        }), (0, p.jsx)("div", {
          className: "univer-grid\x20univer-h-14\x20univer-overflow-hidden\x20univer-rounded-xl\x20univer-bg-gray-100\x20univer-p-1",
          style: {
            gridTemplateColumns: "repeat(" + var_core_value_sigDDD7.items["length"] + ", minmax(0, 1fr))"
          },
          children: var_core_value_sigDDD7.items["map"](var_core_value_sig5B69 => var_core_value_sig692E(var_core_value_sig5B69, var_core_value_sig5B69.value === var_core_value_sig6694, () => var_core_value_sig0836(var_core_value_sig5B69.value)))
        })]
      }, var_core_value_sigDDD7.key)), (0, p.jsx)(u.Separator, {}), (0, p.jsxs)("div", {
        className: "univer-mb-0",
        children: [(0, p.jsx)("div", {
          className: "univer-mb-2\x20univer-text-lg\x20univer-text-gray-900",
          children: xe.title
        }), (0, p.jsx)("div", {
          className: "univer-grid univer-h-14 univer-overflow-hidden univer-rounded-xl univer-bg-gray-100 univer-p-1",
          style: {
            gridTemplateColumns: "repeat(" + xe.items["length"] + ", minmax(0, 1fr))"
          },
          children: xe.items["map"](var_core_value_sigB2CE => var_core_value_sig692E(var_core_value_sigB2CE, var_core_value_sigB2CE.value === var_core_value_sig2A21, () => var_core_value_sigD95C(var_core_value_sigB2CE.value), var_core_value_sigB2CE.value === "curve" && !(0, t.isMindMapPlainStructureKind)(var_core_value_sig6694)))
        })]
      })]
    }),
    var_core_value_sig378B = var_core_value_sig3E1A => {
      switch (var_core_value_sig3E1A) {
        case "line":
          return (0, p.jsx)(c.ShapeStrokePanelContent, {
            title: var_core_value_sig0137.t("boards-mind-ui.toolbar.panel.line"),
            shapeData: var_core_value_sigABB7,
            modeOptions: ["solid", "dash", "dot"],
            showDashDropdown: false,
            widthRange: {
              min: _e.min,
              max: _e.max,
              step: 1
            },
            onUpdateShapeData: (var_core_value_sigB098, var_core_value_sigCE71) => {
              Pe(var_core_value_sigCE71, var_core_value_sig534C);
            }
          });
        case "more":
          return (0, p.jsx)(c.ShapeFloatingToolbarMenuPanel, {
            title: var_core_value_sig0137.t("boards-mind-ui.toolbar.panel.more"),
            minWidthClassName: "univer-min-w-[240px]",
            children: (0, p.jsxs)("div", {
              className: "univer-flex univer-flex-col univer-gap-1",
              children: [(0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                label: var_core_value_sig0137.t("boards-mind-ui.toolbar.action.addSibling"),
                shortcut: var_core_value_sig9071(G.addSibling),
                onClick: var_core_value_sig77D2
              }), (0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                label: var_core_value_sig0137.t("boards-mind-ui.toolbar.action.addChild"),
                shortcut: var_core_value_sig9071(G.addChild),
                onClick: var_core_value_sig625E
              }), (0, p.jsx)(u.Separator, {}), (0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                label: var_core_value_sig0137.t("boards-mind-ui.toolbar.action.copy"),
                shortcut: var_core_value_sig9071(G.copy),
                onClick: var_core_value_sig6F04
              }), (0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                label: var_core_value_sig0137.t("boards-mind-ui.toolbar.action.paste"),
                shortcut: var_core_value_sig9071(G.paste),
                onClick: var_core_value_sig48DA
              }), (0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                label: var_core_value_sig0137.t("boards-mind-ui.toolbar.action.delete"),
                shortcut: var_core_value_sig9071(G.delete),
                onClick: var_core_value_sigD327
              })]
            })
          });
        default:
          return null;
      }
    },
    var_core_value_sigDE50 = ye.flatMap(var_core_value_sig7FB0 => {
      let var_core_value_sig5215 = [];
      if (var_core_value_sig7FB0.dividerBefore && var_core_value_sig5215.push((0, p.jsx)(u.Separator, {
        orientation: "vertical"
      }, "divider-" + var_core_value_sig7FB0.kind)), var_core_value_sig7FB0.kind === "typography") return var_core_value_sig5215.push((0, p.jsx)(c.TypographyPanelButton, {
        title: var_core_value_sig0137.t("boards-mind-ui.toolbar.panel.typography"),
        fontFamily: var_core_value_sig917C.fontFamily,
        textStyle: {
          isBold: var_core_value_sig9477.bold === true,
          isItalic: var_core_value_sig9477.italic === true,
          isUnderline: var_core_value_sig9477.underline === true,
          isStrike: var_core_value_sig9477.strikethrough === true
        },
        horizontalAlign: var_core_value_sig917C.horizontalAlign,
        verticalAlign: var_core_value_sig917C.verticalAlign,
        horizontalAlignOptions: var_core_value_sig10D7,
        verticalAlignOptions: var_core_value_sig5A1A,
        onUpdateText: var_core_value_sig27E2
      }, var_core_value_sig7FB0.kind)), var_core_value_sig5215;
      if (var_core_value_sig7FB0.kind === "fontColor") {
        let var_core_value_sig443C = {
          fs: var_core_value_sig917C.fontSize,
          cl: {
            rgb: var_core_value_sig917C.color
          },
          ...(var_core_value_sig917C.textFill === undefined ? null : {
            textFill: var_core_value_sig917C.textFill
          })
        };
        return var_core_value_sig5215.push((0, p.jsx)(c.TextFillButton, {
          title: var_core_value_sig0137.t("boards-mind-ui.toolbar.action.fontColor"),
          textStyle: var_core_value_sig443C,
          fallbackColor: var_core_value_sig917C.color,
          onChange: var_core_value_sig21D8 => var_core_value_sig27E2({
            textStyle: var_core_value_sig21D8
          })
        }, var_core_value_sig7FB0.kind)), var_core_value_sig5215.push((0, p.jsx)(c.ShapeFloatingToolbarFontSizeSelect, {
          value: String(var_core_value_sig917C.fontSize),
          onChange: var_core_value_sig2B65 => {
            var_core_value_sig27E2({
              textStyle: {
                fs: var_core_value_sig2B65
              }
            });
          }
        }, "mind-map-font-size")), var_core_value_sig5215;
      }
      return var_core_value_sig5215.push((0, p.jsx)(u.Dropdown, {
        open: var_core_value_sig34E8 === var_core_value_sig7FB0.panel,
        overlay: var_core_value_sig378B(var_core_value_sig7FB0.panel),
        onOpenChange: var_core_value_sig39B1 => var_core_value_sigCFE7(var_core_value_sig39B1 ? var_core_value_sig7FB0.panel : null),
        children: (0, p.jsx)("span", {
          children: (0, p.jsx)(c.ShapeFloatingToolbarDropdownTrigger, {
            title: var_core_value_sig0137.t(var_core_value_sig7FB0.titleKey),
            active: var_core_value_sig34E8 === var_core_value_sig7FB0.panel,
            icon: Te(we[var_core_value_sig7FB0.panel]),
            sizeClassName: "univer-h-7 univer-min-w-9 univer-w-auto univer-gap-1 univer-px-1.5",
            onMouseDown: K,
            onPointerDown: K
          })
        })
      }, var_core_value_sig7FB0.panel)), var_core_value_sig5215;
    });
  return (0, p.jsxs)(c.ShapeFloatingToolbarContent, {
    maxWidthClassName: "univer-max-w-[min(760px,calc(100vw-32px))]",
    onMouseDown: var_core_value_sig5204 => var_core_value_sig5204.stopPropagation(),
    children: [[...(var_core_value_sig4306.isRootNode ? [(0, p.jsx)(u.Dropdown, {
      open: var_core_value_sig34E8 === "layout",
      overlay: var_core_value_sig3FAF(),
      onOpenChange: var_core_value_sig5E11 => var_core_value_sigCFE7(var_core_value_sig5E11 ? "layout" : null),
      children: (0, p.jsx)("span", {
        children: (0, p.jsx)(c.ShapeFloatingToolbarDropdownTrigger, {
          title: var_core_value_sig0137.t("boards-mind-ui.toolbar.action.layout"),
          active: var_core_value_sig34E8 === "layout",
          icon: (0, p.jsx)(Ae, {}),
          sizeClassName: "univer-h-7 univer-min-w-9 univer-w-auto univer-gap-1 univer-px-1.5",
          onMouseDown: K,
          onPointerDown: K
        })
      })
    }, "mind-map-layout-dropdown"), (0, p.jsx)(u.Separator, {
      orientation: "vertical"
    }, "layout-panel-divider")] : []), (0, p.jsx)(c.ShapeFillButton, {
      title: var_core_value_sig0137.t("boards-mind-ui.toolbar.action.fill"),
      shapeData: var_core_value_sigECBC ?? {},
      onUpdateShapeData: var_core_value_sig829F
    }, "mind-map-fill"), (0, p.jsx)(c.ShapeStrokePanelButton, {
      title: var_core_value_sig0137.t("boards-mind-ui.toolbar.action.stroke"),
      shapeData: var_core_value_sigECBC ?? {},
      onUpdateShapeData: var_core_value_sig829F
    }, "mind-map-stroke"), (0, p.jsx)(u.Separator, {
      orientation: "vertical"
    }, "style-divider")], var_core_value_sigDE50]
  });
}
function Re(var_core_value_sig3094) {
  let {
    left: var_core_value_sig86CC,
    top: var_core_value_sig7868,
    width: var_core_value_sig9921,
    height: var_core_value_sig59BF
  } = var_core_value_sig3094;
  return {
    left: var_core_value_sig86CC,
    right: var_core_value_sig86CC + var_core_value_sig9921,
    top: var_core_value_sig7868 - 56,
    bottom: var_core_value_sig7868 + var_core_value_sig59BF
  };
}
let ze = class extends i.RxDisposable {
  constructor(var_core_value_sig4D58, var_core_value_sig2DBD, var_core_value_sig424E, var_core_value_sigF481, var_core_value_sigD7F2, var_core_value_sig7CF3) {
    super(), this._renderContext = var_core_value_sig4D58, this._boardCanvasPopManagerService = var_core_value_sig2DBD, this._boardElementService = var_core_value_sig424E, this._elementStateService = var_core_value_sigF481, this._boardTextEditingService = var_core_value_sigD7F2, this._interactionSurfaceService = var_core_value_sig7CF3, b(this, "_popupDisposable", null), b(this, "_popupSelectionKey", null), this._init();
  }
  dispose() {
    this._clearPopup(), super.dispose();
  }
  _init() {
    let var_core_value_sig9DC6 = this._renderContext["scene"].getTransformerByCreate();
    this.disposeWithMe((0, i.toDisposable)(var_core_value_sig9DC6.createControl$["pipe"]((0, o.takeUntil)(this.dispose$)).subscribe(() => this._showPopupForSelection()))), this.disposeWithMe((0, i.toDisposable)(var_core_value_sig9DC6.clearControl$["pipe"]((0, o.takeUntil)(this.dispose$)).subscribe(() => this._clearPopupIfSelectionChanged()))), this.disposeWithMe((0, i.toDisposable)(var_core_value_sig9DC6.changeStart$["pipe"]((0, o.takeUntil)(this.dispose$)).subscribe(() => this._clearPopup()))), this.disposeWithMe((0, i.toDisposable)(var_core_value_sig9DC6.changeEnd$["pipe"]((0, o.takeUntil)(this.dispose$)).subscribe(() => setTimeout(() => this._showPopupForSelection(), 0)))), this.disposeWithMe((0, i.toDisposable)(this._elementStateService["state$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(() => setTimeout(() => this._showPopupForSelection(), 0)))), this.disposeWithMe((0, i.toDisposable)(this._interactionSurfaceService["interactionSurfaceActive$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sig210D => {
      if (var_core_value_sig210D) {
        this._clearPopup();
        return;
      }
      setTimeout(() => this._showPopupForSelection(), 0);
    }))), this.disposeWithMe((0, i.toDisposable)(this._boardTextEditingService["editingParams$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sigB4B4 => {
      if ((var_core_value_sigB4B4 == null ? undefined : var_core_value_sigB4B4.unitId) === this._renderContext["unitId"]) {
        if (var_core_value_sigB4B4.visible) {
          this._clearPopup();
          return;
        }
        setTimeout(() => this._showPopupForSelection(), 0);
      }
    })));
  }
  _clearPopup() {
    var var_core_value_sig6643;
    (var_core_value_sig6643 = this._popupDisposable) == null || var_core_value_sig6643.dispose(), this._popupDisposable = null, this._popupSelectionKey = null;
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let var_core_value_sig4124 = this._elementStateService["getSnapshot"]();
    return !!var_core_value_sig4124.context && var_core_value_sig4124.selectedIds["length"] > 0 && this._popupSelectionKey === this._buildPopupSelectionKey(var_core_value_sig4124.context["unitId"], var_core_value_sig4124.context["subUnitId"], var_core_value_sig4124.selectedIds);
  }
  _buildPopupSelectionKey(var_core_value_sigBF1C, var_core_value_sigEEEF, var_core_value_sig9A01) {
    return var_core_value_sigBF1C + ":" + var_core_value_sigEEEF + ":" + var_core_value_sig9A01.join(",");
  }
  _resolveIncomingConnectorStyle(var_core_value_sig674F, var_core_value_sigC8F6, var_core_value_sig8A26, var_core_value_sigD073) {
    let var_core_value_sigF631 = this._boardElementService["getElementData"](var_core_value_sig674F, var_core_value_sigC8F6),
      var_core_value_sig2278 = Object.values(var_core_value_sigF631).find(var_core_value_sigD407 => {
        let var_core_value_sig63F3 = (0, t.getMindMapConnectorMeta)(var_core_value_sigD407.element);
        return (var_core_value_sig63F3 == null ? undefined : var_core_value_sig63F3.structureScopeId) === var_core_value_sig8A26 && var_core_value_sig63F3.childNodeId === var_core_value_sigD073;
      });
    if (!(!var_core_value_sig2278 || !("connectorData" in var_core_value_sig2278.element))) return var_core_value_sig2278.element["connectorData"].style;
  }
  _showPopupForSelection() {
    var var_core_value_sig7053, var_core_value_sig52F1, var_core_value_sig1E74;
    if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
      this._clearPopup();
      return;
    }
    let var_core_value_sig1E84 = this._boardTextEditingService["getEditing"]();
    if ((var_core_value_sig1E84 == null ? undefined : var_core_value_sig1E84.visible) === true && var_core_value_sig1E84.unitId === this._renderContext["unitId"]) {
      this._clearPopup();
      return;
    }
    let var_core_value_sig133B = this._elementStateService["getSnapshot"]();
    if (var_core_value_sig133B.isTransforming) {
      this._clearPopup();
      return;
    }
    if ((0, n.resolveBoardFloatingToolbarSelection)({
      context: var_core_value_sig133B.context,
      selectedIds: var_core_value_sig133B.selectedIds,
      getElementById: (var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE) => this._boardElementService["getElementById"](var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE)
    }).owner !== "mind-map") {
      this._clearPopup();
      return;
    }
    let var_core_value_sig69B8 = this._renderContext["scene"].getTransformerByCreate().getSelectedObjectMap(),
      var_core_value_sig983D = Array.from(var_core_value_sig69B8.values()).map(var_core_value_sig62B7 => this._resolveSelectedEntry(var_core_value_sig62B7)).filter(var_core_value_sig37A8 => !!var_core_value_sig37A8).filter(var_core_value_sigA90D => !!(0, t.getMindMapNodeMeta)(var_core_value_sigA90D.elementData["element"])),
      var_core_value_sig9A03 = var_core_value_sig983D.find(var_core_value_sig7A3C => var_core_value_sig7A3C.elementData["elementId"] === var_core_value_sig133B.focusedId) ?? var_core_value_sig983D[0] ?? this._resolveSelectedMindMapEntryFromState();
    if (!var_core_value_sig9A03) {
      this._clearPopup();
      return;
    }
    let var_core_value_sig3363 = (0, t.getMindMapNodeMeta)(var_core_value_sig9A03.elementData["element"]);
    if (!var_core_value_sig3363) {
      this._clearPopup();
      return;
    }
    let var_core_value_sigF64A = (var_core_value_sig7053 = this._boardElementService["getElementData"](var_core_value_sig9A03.elementData["unitId"], var_core_value_sig9A03.elementData["subUnitId"])[var_core_value_sig3363.structureScopeId]) == null ? undefined : var_core_value_sig7053.element,
      var_core_value_sig25EC = (0, t.getMindMapContainerMeta)(var_core_value_sigF64A),
      var_core_value_sigA790 = var_core_value_sigF64A == null || (var_core_value_sig52F1 = var_core_value_sigF64A.custom) == null || (var_core_value_sig52F1 = var_core_value_sig52F1.mindmap) == null || (var_core_value_sig52F1 = var_core_value_sig52F1.layout) == null ? undefined : var_core_value_sig52F1.structureKind,
      var_core_value_sig9A5E = ((var_core_value_sig25EC == null ? undefined : var_core_value_sig25EC.layout["structureKind"]) ?? var_core_value_sigA790) === "mindmap-vertical" && (var_core_value_sig3363.parentNodeId === null || var_core_value_sig3363.side === "top"),
      var_core_value_sig01B9 = var_core_value_sig3363.parentNodeId !== null && var_core_value_sig3363.side !== "top" && var_core_value_sig3363.side !== "bottom",
      var_core_value_sigD6A9 = var_core_value_sig9A5E || var_core_value_sig01B9,
      var_core_value_sig0FCF = ((var_core_value_sig1E74 = var_core_value_sig133B.context) == null ? undefined : var_core_value_sig1E74.unitId) === var_core_value_sig9A03.elementData["unitId"] && var_core_value_sig133B.context["subUnitId"] === var_core_value_sig9A03.elementData["subUnitId"] && var_core_value_sig133B.selectedIds["length"] ? var_core_value_sig133B.selectedIds : [var_core_value_sig9A03.elementData["elementId"]],
      var_core_value_sigCF96 = this._buildPopupSelectionKey(var_core_value_sig9A03.elementData["unitId"], var_core_value_sig9A03.elementData["subUnitId"], var_core_value_sig0FCF);
    this._popupDisposable && this._popupSelectionKey === var_core_value_sigCF96 || (this._clearPopup(), this._popupDisposable = this.disposeWithMe(this._boardCanvasPopManagerService["attachPopupToObject"](var_core_value_sig9A03.elementData["unitId"], var_core_value_sig9A03.elementData["subUnitId"], var_core_value_sig9A03.object, {
      componentKey: Se,
      direction: "top-center",
      offset: [0, 8],
      ...(var_core_value_sigD6A9 ? {
        anchorBoundResolver: Re
      } : null),
      extraProps: {
        unitId: var_core_value_sig9A03.elementData["unitId"],
        subUnitId: var_core_value_sig9A03.elementData["subUnitId"],
        elementId: var_core_value_sig9A03.elementData["elementId"],
        scopeId: var_core_value_sig3363.structureScopeId,
        isRootNode: var_core_value_sig3363.parentNodeId === null,
        left: var_core_value_sig9A03.elementData["element"].transform["left"] ?? 0,
        top: var_core_value_sig9A03.elementData["element"].transform["top"] ?? 0,
        shapeData: var_core_value_sig9A03.elementData["element"].type === e.BoardElementType["Shape"] ? var_core_value_sig9A03.elementData["element"].shapeData : undefined,
        layout: var_core_value_sig25EC == null ? undefined : var_core_value_sig25EC.layout,
        incomingConnectorStyle: this._resolveIncomingConnectorStyle(var_core_value_sig9A03.elementData["unitId"], var_core_value_sig9A03.elementData["subUnitId"], var_core_value_sig3363.structureScopeId, var_core_value_sig9A03.elementData["elementId"])
      }
    })), this._popupSelectionKey = var_core_value_sigCF96);
  }
  _resolveSelectedMindMapEntryFromState() {
    var var_core_value_sigC4E9;
    let var_core_value_sigF612 = this._elementStateService["getSnapshot"](),
      var_core_value_sigAA6C = var_core_value_sigF612.context,
      var_core_value_sig8BFA = var_core_value_sigF612.focusedId ?? var_core_value_sigF612.selectedIds[0];
    if (!var_core_value_sigAA6C || !var_core_value_sig8BFA) return null;
    let var_core_value_sig236B = this._boardElementService["getElementById"](var_core_value_sigAA6C.unitId, var_core_value_sigAA6C.subUnitId, var_core_value_sig8BFA);
    if (!var_core_value_sig236B || !(0, t.getMindMapNodeMeta)(var_core_value_sig236B.element)) return null;
    let var_core_value_sig1951 = (0, n.getBoardElementRenderObjectKey)(var_core_value_sigAA6C.unitId, var_core_value_sig8BFA),
      var_core_value_sigFEA0 = this._renderContext["scene"],
      var_core_value_sig931A = ((var_core_value_sigC4E9 = var_core_value_sigFEA0.getObjectIncludeInGroup) == null ? undefined : var_core_value_sigC4E9.call(var_core_value_sigFEA0, var_core_value_sig1951)) ?? this._renderContext["scene"].getObject(var_core_value_sig1951);
    return var_core_value_sig931A ? {
      object: var_core_value_sig931A,
      elementData: var_core_value_sig236B
    } : null;
  }
  _resolveSelectedEntry(var_core_value_sigEE7D) {
    var var_core_value_sig3585;
    if (!var_core_value_sigEE7D) return null;
    let var_core_value_sig31A8 = (0, n.parseBoardElementRenderObjectKey)(var_core_value_sigEE7D.oKey);
    if (!var_core_value_sig31A8) return null;
    let var_core_value_sigA4DA = this._elementStateService["getSnapshot"](),
      var_core_value_sig6FC0 = ((var_core_value_sig3585 = var_core_value_sigA4DA.context) == null ? undefined : var_core_value_sig3585.unitId) === var_core_value_sig31A8.unitId ? var_core_value_sigA4DA.context["subUnitId"] : undefined;
    if (!var_core_value_sig6FC0) return null;
    let var_core_value_sig6217 = this._boardElementService["getElementById"](var_core_value_sig31A8.unitId, var_core_value_sig6FC0, var_core_value_sig31A8.elementId);
    return var_core_value_sig6217 ? {
      object: var_core_value_sigEE7D,
      elementData: var_core_value_sig6217
    } : null;
  }
};
ze = S([x(1, (0, i.Inject)(n.BoardCanvasPopManagerService)), x(2, (0, i.Inject)(e.IBoardElementService)), x(3, (0, i.Inject)(n.IBoardElementStateService)), x(4, (0, i.Inject)(n.BoardTextEditingService)), x(5, (0, i.Inject)(n.BoardInteractionSurfaceService))], ze);
const Be = "board-mind-map-pending-insert-object",
  Ve = n.BOARD_RENDER_LAYER_INDEX["preview"];
function He(var_core_value_sigF001, var_core_value_sigE511) {
  return (var_core_value_sigF001 ?? []).reduce((var_core_value_sigB805, var_core_value_sig4FAE) => (var_core_value_sigB805[var_core_value_sig4FAE.side ?? var_core_value_sigE511].push(var_core_value_sig4FAE), var_core_value_sigB805), {
    left: [],
    right: [],
    top: [],
    bottom: []
  });
}
function Ue(var_core_value_sig1C81) {
  return var_core_value_sig1C81 === "tree-left" || var_core_value_sig1C81 === "tree-right" || var_core_value_sig1C81 === "tree-alternate";
}
function We(var_core_value_sig2C6A) {
  return var_core_value_sig2C6A === "timeline-horizontal" || var_core_value_sig2C6A === "timeline-vertical";
}
function Ge(var_core_value_sig7207, var_core_value_sig297F, var_core_value_sigA95A) {
  return var_core_value_sigA95A === "tree-left" ? "left" : var_core_value_sigA95A === "tree-right" ? "right" : var_core_value_sig7207.side === "left" || var_core_value_sig7207.side === "right" ? var_core_value_sig7207.side : var_core_value_sig297F % 2 == 0 ? "left" : "right";
}
function Ke(var_core_value_sig94D6, var_core_value_sigC22E) {
  return (var_core_value_sigC22E == null ? undefined : var_core_value_sigC22E.root["children"]) ?? var_core_value_sig94D6 ?? [];
}
var qe = class extends a.BaseObject {
  constructor(var_core_value_sig1FCC = Be, var_core_value_sigB7F9) {
    super(var_core_value_sig1FCC), b(this, "_state", {
      point: null,
      children: []
    }), this.evented = false, this.zIndex = n.BOARD_RENDER_OBJECT_Z_INDEX["transientPreview"], this.updateState(var_core_value_sigB7F9);
  }
  updateState(var_core_value_sigB1A2) {
    this._state = {
      ...this._state,
      ...var_core_value_sigB1A2
    }, this._state["point"] ? this.show() : this.hide(), this.makeDirty(true);
  }
  isHit(var_core_value_sig526D) {
    return false;
  }
  render(var_core_value_sigBDB5, var_core_value_sig59CE1) {
    let var_core_value_sig3AD7 = this._state["point"];
    if (!var_core_value_sig3AD7 || !this.visible) return this.makeDirty(false), this;
    let var_core_value_sig04E4 = Number.isFinite(this._state["zoomRatio"]) && (this._state["zoomRatio"] ?? 0) > 0 ? this._state["zoomRatio"] : 1,
      var_core_value_sigD8F0 = t.MIND_MAP_DEFAULT_NODE_SIZE["rootWidth"],
      var_core_value_sig1475 = t.MIND_MAP_DEFAULT_NODE_SIZE["rootHeight"],
      var_core_value_sig08B7 = t.MIND_MAP_DEFAULT_NODE_SIZE["nodeWidth"],
      var_core_value_sig2008 = t.MIND_MAP_DEFAULT_NODE_SIZE["nodeHeight"],
      var_core_value_sig496B = t.MIND_MAP_DEFAULT_LAYOUT["horizontalGap"],
      var_core_value_sig7161 = t.MIND_MAP_DEFAULT_LAYOUT["siblingGap"],
      var_core_value_sig2AB8 = this._state["structureKind"] === "mindmap-vertical",
      var_core_value_sig3FCF = He(this._state["children"], var_core_value_sig2AB8 ? "bottom" : "right"),
      var_core_value_sig675A = var_core_value_sig3AD7.x - var_core_value_sigD8F0 / 2,
      var_core_value_sig837F = var_core_value_sig3AD7.y - var_core_value_sig1475 / 2;
    if (var_core_value_sigBDB5.save(), var_core_value_sigBDB5.globalAlpha = E.objectAlpha, var_core_value_sigBDB5.lineWidth = E.lineWidthScreen / var_core_value_sig04E4, var_core_value_sigBDB5.strokeStyle = E.primaryColor, We(this._state["structureKind"])) {
      let var_core_value_sig0511 = Ke(this._state["children"], this._state["blueprint"]),
        var_core_value_sig1F44 = this._state["structureKind"] === "timeline-horizontal";
      if (var_core_value_sig0511.length > 0) {
        if (var_core_value_sigBDB5.beginPath(), var_core_value_sig1F44) {
          let var_core_value_sigFDEA = var_core_value_sig08B7,
            var_core_value_sig86D0 = var_core_value_sig2008,
            var_core_value_sig4CD2 = t.MIND_MAP_DEFAULT_LAYOUT["timelineAxisGap"],
            var_core_value_sig48CA = var_core_value_sig3AD7.y,
            var_core_value_sig50AF = var_core_value_sig675A + var_core_value_sigD8F0,
            var_core_value_sigA942 = var_core_value_sig3AD7.y - var_core_value_sig86D0 / 2,
            var_core_value_sigA621 = var_core_value_sig675A + var_core_value_sigD8F0 + var_core_value_sig4CD2;
          var_core_value_sigBDB5.moveTo(var_core_value_sig50AF, var_core_value_sig48CA), var_core_value_sigBDB5.lineTo(var_core_value_sigA621, var_core_value_sig48CA), var_core_value_sig0511.forEach((var_core_value_sig1BBD, var_core_value_sigF704) => {
            let var_core_value_sig2BCF = var_core_value_sigA621 + var_core_value_sigF704 * (var_core_value_sigFDEA + var_core_value_sig4CD2);
            if (var_core_value_sigF704 > 0) {
              let var_core_value_sig7524 = var_core_value_sigA621 + (var_core_value_sigF704 - 1) * (var_core_value_sigFDEA + var_core_value_sig4CD2) + var_core_value_sigFDEA;
              var_core_value_sigBDB5.moveTo(var_core_value_sig7524, var_core_value_sig48CA), var_core_value_sigBDB5.lineTo(var_core_value_sig2BCF, var_core_value_sig48CA);
            }
            var_core_value_sigBDB5.moveTo(var_core_value_sig2BCF, var_core_value_sig48CA), var_core_value_sigBDB5.lineTo(var_core_value_sig2BCF + var_core_value_sigFDEA, var_core_value_sig48CA);
          }), var_core_value_sigBDB5.stroke(), var_core_value_sig0511.forEach((var_core_value_sig0D69, var_core_value_sig480E) => {
            D(var_core_value_sigBDB5, var_core_value_sigA621 + var_core_value_sig480E * (var_core_value_sigFDEA + var_core_value_sig4CD2), var_core_value_sigA942, var_core_value_sigFDEA, var_core_value_sig86D0, E.ghostRadius), var_core_value_sigBDB5.fillStyle = E.ghostFillColor, var_core_value_sigBDB5.fill(), var_core_value_sigBDB5.stroke();
          }), var_core_value_sig0511.forEach((var_core_value_sig26DB, var_core_value_sigF0F9) => {
            if (!("children" in var_core_value_sig26DB) || var_core_value_sig26DB.children["length"] === 0) return;
            let var_core_value_sig1A0F = var_core_value_sigA621 + var_core_value_sigF0F9 * (var_core_value_sigFDEA + var_core_value_sig4CD2),
              var_core_value_sigFBA4 = var_core_value_sig1A0F + var_core_value_sigFDEA / 2,
              var_core_value_sig4383 = var_core_value_sig26DB.side === "bottom" ? "bottom" : "top",
              var_core_value_sig186C = var_core_value_sig26DB.children["slice"](0, 2),
              var_core_value_sigD955 = var_core_value_sig186C.length * var_core_value_sig86D0 + Math.max(0, var_core_value_sig186C.length - 1) * var_core_value_sig7161,
              var_core_value_sig48BD = var_core_value_sig1A0F + var_core_value_sigFDEA + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"],
              var_core_value_sig429F = var_core_value_sig4383 === "top" ? var_core_value_sigA942 - var_core_value_sig496B - var_core_value_sigD955 : var_core_value_sigA942 + var_core_value_sig86D0 + var_core_value_sig496B,
              var_core_value_sigF62A = var_core_value_sig429F + var_core_value_sigD955 / 2;
            var_core_value_sigBDB5.beginPath(), var_core_value_sigBDB5.moveTo(var_core_value_sigFBA4, var_core_value_sig4383 === "top" ? var_core_value_sigA942 : var_core_value_sigA942 + var_core_value_sig86D0), var_core_value_sigBDB5.lineTo(var_core_value_sigFBA4, var_core_value_sigF62A), var_core_value_sigBDB5.lineTo(var_core_value_sig48BD, var_core_value_sigF62A), var_core_value_sig186C.forEach((var_core_value_sig2AD8, var_core_value_sig2AD0) => {
              let var_core_value_sig3EEE = var_core_value_sig429F + var_core_value_sig2AD0 * (var_core_value_sig86D0 + var_core_value_sig7161) + var_core_value_sig86D0 / 2;
              var_core_value_sigBDB5.moveTo(var_core_value_sig48BD, var_core_value_sig3EEE), var_core_value_sigBDB5.lineTo(var_core_value_sig48BD + var_core_value_sigFDEA, var_core_value_sig3EEE);
            }), var_core_value_sigBDB5.stroke(), var_core_value_sig186C.forEach((var_core_value_sigBC46, var_core_value_sig3D7D) => {
              let var_core_value_sig27E5 = var_core_value_sig429F + var_core_value_sig3D7D * (var_core_value_sig86D0 + var_core_value_sig7161);
              D(var_core_value_sigBDB5, var_core_value_sig48BD, var_core_value_sig27E5, var_core_value_sigFDEA, var_core_value_sig86D0, E.ghostRadius), var_core_value_sigBDB5.fillStyle = E.ghostFillColor, var_core_value_sigBDB5.fill(), var_core_value_sigBDB5.stroke();
            });
          });
        } else {
          let var_core_value_sigBBFF = var_core_value_sig3AD7.x,
            var_core_value_sig8889 = var_core_value_sig837F + var_core_value_sig1475,
            var_core_value_sig32F8 = t.MIND_MAP_DEFAULT_LAYOUT["timelineAxisGap"],
            var_core_value_sig5B67 = var_core_value_sig837F + var_core_value_sig1475 + var_core_value_sig32F8,
            var_core_value_sig1758 = var_core_value_sig5B67 + (var_core_value_sig0511.length - 1) * (var_core_value_sig2008 + var_core_value_sig32F8) + var_core_value_sig2008 / 2;
          var_core_value_sigBDB5.moveTo(var_core_value_sigBBFF, var_core_value_sig8889), var_core_value_sigBDB5.lineTo(var_core_value_sigBBFF, var_core_value_sig1758), var_core_value_sig0511.forEach((var_core_value_sig8178, var_core_value_sigE9ED) => {
            let var_core_value_sigB577 = var_core_value_sig5B67 + var_core_value_sigE9ED * (var_core_value_sig2008 + var_core_value_sig32F8) + var_core_value_sig2008 / 2,
              var_core_value_sig9572 = var_core_value_sig8178.side === "right" ? "right" : "left",
              var_core_value_sigD873 = var_core_value_sig9572 === "right" ? var_core_value_sigBBFF + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] : var_core_value_sigBBFF - t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] - var_core_value_sig08B7,
              var_core_value_sigA12B = var_core_value_sig9572 === "right" ? var_core_value_sigD873 : var_core_value_sigD873 + var_core_value_sig08B7;
            var_core_value_sigBDB5.moveTo(var_core_value_sigBBFF, var_core_value_sigB577), var_core_value_sigBDB5.lineTo(var_core_value_sigA12B, var_core_value_sigB577);
          }), var_core_value_sigBDB5.stroke(), var_core_value_sig0511.forEach((var_core_value_sigF230, var_core_value_sig09B8) => {
            let var_core_value_sig6F91 = var_core_value_sig5B67 + var_core_value_sig09B8 * (var_core_value_sig2008 + var_core_value_sig32F8);
            D(var_core_value_sigBDB5, (var_core_value_sigF230.side === "right" ? "right" : "left") == "right" ? var_core_value_sigBBFF + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] : var_core_value_sigBBFF - t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] - var_core_value_sig08B7, var_core_value_sig6F91, var_core_value_sig08B7, var_core_value_sig2008, E.ghostRadius), var_core_value_sigBDB5.fillStyle = E.ghostFillColor, var_core_value_sigBDB5.fill(), var_core_value_sigBDB5.stroke();
          }), var_core_value_sig0511.forEach((var_core_value_sigF9C7, var_core_value_sig8895) => {
            if (!("children" in var_core_value_sigF9C7) || var_core_value_sigF9C7.children["length"] === 0) return;
            let var_core_value_sigC80B = var_core_value_sig5B67 + var_core_value_sig8895 * (var_core_value_sig2008 + var_core_value_sig32F8) + var_core_value_sig2008 / 2,
              var_core_value_sig284F = var_core_value_sigF9C7.side === "right" ? "right" : "left",
              var_core_value_sigE154 = var_core_value_sigF9C7.children["slice"](0, 2),
              var_core_value_sig4632 = var_core_value_sigE154.length * var_core_value_sig2008 + Math.max(0, var_core_value_sigE154.length - 1) * var_core_value_sig7161,
              var_core_value_sig12F2 = var_core_value_sig284F === "right" ? var_core_value_sigBBFF + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] : var_core_value_sigBBFF - t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] - var_core_value_sig08B7,
              var_core_value_sig2259 = var_core_value_sig284F === "right" ? var_core_value_sig12F2 + var_core_value_sig08B7 + var_core_value_sig496B : var_core_value_sig12F2 - var_core_value_sig496B - var_core_value_sig08B7,
              var_core_value_sig9E2F = var_core_value_sigC80B - var_core_value_sig4632 / 2,
              var_core_value_sigD082 = var_core_value_sig284F === "right" ? var_core_value_sig12F2 + var_core_value_sig08B7 : var_core_value_sig12F2,
              var_core_value_sigDBB7 = var_core_value_sig284F === "right" ? var_core_value_sig2259 : var_core_value_sig2259 + var_core_value_sig08B7;
            var_core_value_sigBDB5.beginPath(), var_core_value_sigBDB5.moveTo(var_core_value_sigD082, var_core_value_sigC80B), var_core_value_sigBDB5.lineTo(var_core_value_sigDBB7, var_core_value_sigC80B), var_core_value_sigE154.forEach((var_core_value_sig8061, var_core_value_sig4D4C) => {
              let var_core_value_sigC9E0 = var_core_value_sig9E2F + var_core_value_sig4D4C * (var_core_value_sig2008 + var_core_value_sig7161) + var_core_value_sig2008 / 2;
              var_core_value_sigBDB5.moveTo(var_core_value_sigDBB7, var_core_value_sigC9E0), var_core_value_sigBDB5.lineTo(var_core_value_sig284F === "right" ? var_core_value_sig2259 + var_core_value_sig08B7 : var_core_value_sig2259, var_core_value_sigC9E0);
            }), var_core_value_sigBDB5.stroke(), var_core_value_sigE154.forEach((var_core_value_sig76BA, var_core_value_sigFBFA) => {
              let var_core_value_sigF602 = var_core_value_sig9E2F + var_core_value_sigFBFA * (var_core_value_sig2008 + var_core_value_sig7161);
              D(var_core_value_sigBDB5, var_core_value_sig2259, var_core_value_sigF602, var_core_value_sig08B7, var_core_value_sig2008, E.ghostRadius), var_core_value_sigBDB5.fillStyle = E.ghostFillColor, var_core_value_sigBDB5.fill(), var_core_value_sigBDB5.stroke();
            });
          });
        }
      }
    } else {
      if (Ue(this._state["structureKind"])) {
        let var_core_value_sigD7EA = this._state["children"] ?? [],
          var_core_value_sigB33B = var_core_value_sig837F + var_core_value_sig1475,
          var_core_value_sig24B9 = var_core_value_sigB33B + var_core_value_sig496B,
          var_core_value_sigE627 = var_core_value_sig3AD7.x;
        if (var_core_value_sigD7EA.length > 0) {
          let var_core_value_sig4805 = var_core_value_sig24B9 + (var_core_value_sigD7EA.length - 1) * (var_core_value_sig2008 + var_core_value_sig7161) + var_core_value_sig2008 / 2;
          var_core_value_sigBDB5.beginPath(), var_core_value_sigBDB5.moveTo(var_core_value_sigE627, var_core_value_sigB33B), var_core_value_sigBDB5.lineTo(var_core_value_sigE627, var_core_value_sig4805), var_core_value_sigD7EA.forEach((var_core_value_sigD0A8, var_core_value_sigF4B9) => {
            let var_core_value_sig5CEE = Ge(var_core_value_sigD0A8, var_core_value_sigF4B9, this._state["structureKind"]),
              var_core_value_sigE92A = var_core_value_sig24B9 + var_core_value_sigF4B9 * (var_core_value_sig2008 + var_core_value_sig7161),
              var_core_value_sig362B = var_core_value_sig5CEE === "right" ? var_core_value_sigE627 + var_core_value_sig496B : var_core_value_sigE627 - var_core_value_sig496B - var_core_value_sig08B7,
              var_core_value_sig5CA5 = var_core_value_sigE92A + var_core_value_sig2008 / 2;
            var_core_value_sigBDB5.moveTo(var_core_value_sigE627, var_core_value_sig5CA5), var_core_value_sigBDB5.lineTo(var_core_value_sig5CEE === "right" ? var_core_value_sig362B : var_core_value_sig362B + var_core_value_sig08B7, var_core_value_sig5CA5);
          }), var_core_value_sigBDB5.stroke(), var_core_value_sigD7EA.forEach((var_core_value_sigE90F, var_core_value_sigEFD4) => {
            let var_core_value_sig861B = Ge(var_core_value_sigE90F, var_core_value_sigEFD4, this._state["structureKind"]),
              var_core_value_sig5237 = var_core_value_sig24B9 + var_core_value_sigEFD4 * (var_core_value_sig2008 + var_core_value_sig7161);
            D(var_core_value_sigBDB5, var_core_value_sig861B === "right" ? var_core_value_sigE627 + var_core_value_sig496B : var_core_value_sigE627 - var_core_value_sig496B - var_core_value_sig08B7, var_core_value_sig5237, var_core_value_sig08B7, var_core_value_sig2008, E.ghostRadius), var_core_value_sigBDB5.fillStyle = E.ghostFillColor, var_core_value_sigBDB5.fill(), var_core_value_sigBDB5.stroke();
          });
        }
      } else var_core_value_sig2AB8 && ["top", "bottom"].forEach(var_core_value_sigEF3E => {
        let var_core_value_sig273D = var_core_value_sig3FCF[var_core_value_sigEF3E];
        if (var_core_value_sig273D.length === 0) return;
        let var_core_value_sig9A0D = var_core_value_sig273D.length * var_core_value_sig08B7 + Math.max(0, var_core_value_sig273D.length - 1) * var_core_value_sig7161,
          var_core_value_sigA319 = var_core_value_sig3AD7.x - var_core_value_sig9A0D / 2,
          var_core_value_sig2D58 = var_core_value_sigEF3E === "bottom" ? var_core_value_sig837F + var_core_value_sig1475 : var_core_value_sig837F,
          var_core_value_sig223F = var_core_value_sigEF3E === "bottom" ? var_core_value_sig2D58 + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] : var_core_value_sig2D58 - t.MIND_MAP_DEFAULT_LAYOUT["branchGap"],
          var_core_value_sigD749 = var_core_value_sigEF3E === "bottom" ? var_core_value_sig837F + var_core_value_sig1475 + var_core_value_sig496B : var_core_value_sig837F - var_core_value_sig496B - var_core_value_sig2008;
        var_core_value_sigBDB5.beginPath(), var_core_value_sigBDB5.moveTo(var_core_value_sig3AD7.x, var_core_value_sig2D58), var_core_value_sigBDB5.lineTo(var_core_value_sig3AD7.x, var_core_value_sig223F), var_core_value_sig273D.length > 1 && (var_core_value_sigBDB5.moveTo(var_core_value_sigA319 + var_core_value_sig08B7 / 2, var_core_value_sig223F), var_core_value_sigBDB5.lineTo(var_core_value_sigA319 + var_core_value_sig9A0D - var_core_value_sig08B7 / 2, var_core_value_sig223F)), var_core_value_sig273D.forEach((var_core_value_sigE67E, var_core_value_sig2902) => {
          let var_core_value_sig9989 = var_core_value_sigA319 + var_core_value_sig2902 * (var_core_value_sig08B7 + var_core_value_sig7161) + var_core_value_sig08B7 / 2;
          var_core_value_sigBDB5.moveTo(var_core_value_sig9989, var_core_value_sig223F), var_core_value_sigBDB5.lineTo(var_core_value_sig9989, var_core_value_sigEF3E === "bottom" ? var_core_value_sigD749 : var_core_value_sigD749 + var_core_value_sig2008);
        }), var_core_value_sigBDB5.stroke(), var_core_value_sig273D.forEach((var_core_value_sig698E, var_core_value_sig2809) => {
          D(var_core_value_sigBDB5, var_core_value_sigA319 + var_core_value_sig2809 * (var_core_value_sig08B7 + var_core_value_sig7161), var_core_value_sigD749, var_core_value_sig08B7, var_core_value_sig2008, E.ghostRadius), var_core_value_sigBDB5.fillStyle = E.ghostFillColor, var_core_value_sigBDB5.fill(), var_core_value_sigBDB5.stroke();
        });
      });
    }
    (var_core_value_sig2AB8 || Ue(this._state["structureKind"]) || We(this._state["structureKind"]) ? [] : ["left", "right"]).forEach(var_core_value_sigCB04 => {
      let var_core_value_sig947E = var_core_value_sig3FCF[var_core_value_sigCB04];
      if (var_core_value_sig947E.length === 0) return;
      let var_core_value_sig4545 = var_core_value_sig947E.length * var_core_value_sig2008 + Math.max(0, var_core_value_sig947E.length - 1) * var_core_value_sig7161,
        var_core_value_sigF39A = var_core_value_sig3AD7.y - var_core_value_sig4545 / 2,
        var_core_value_sigF79C = var_core_value_sigCB04 === "right" ? var_core_value_sig675A + var_core_value_sigD8F0 : var_core_value_sig675A,
        var_core_value_sig2E54 = var_core_value_sigCB04 === "right" ? var_core_value_sigF79C + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] : var_core_value_sigF79C - t.MIND_MAP_DEFAULT_LAYOUT["branchGap"],
        var_core_value_sig7658 = var_core_value_sigCB04 === "right" ? var_core_value_sig675A + var_core_value_sigD8F0 + var_core_value_sig496B : var_core_value_sig675A - var_core_value_sig496B - var_core_value_sig08B7;
      var_core_value_sigBDB5.beginPath(), var_core_value_sigBDB5.moveTo(var_core_value_sigF79C, var_core_value_sig3AD7.y), var_core_value_sigBDB5.lineTo(var_core_value_sig2E54, var_core_value_sig3AD7.y), var_core_value_sig947E.length > 1 && (var_core_value_sigBDB5.moveTo(var_core_value_sig2E54, var_core_value_sigF39A + var_core_value_sig2008 / 2), var_core_value_sigBDB5.lineTo(var_core_value_sig2E54, var_core_value_sigF39A + var_core_value_sig4545 - var_core_value_sig2008 / 2)), var_core_value_sig947E.forEach((var_core_value_sigCFFA, var_core_value_sig58C1) => {
        let var_core_value_sig5090 = var_core_value_sigF39A + var_core_value_sig58C1 * (var_core_value_sig2008 + var_core_value_sig7161) + var_core_value_sig2008 / 2;
        var_core_value_sigBDB5.moveTo(var_core_value_sig2E54, var_core_value_sig5090), var_core_value_sigBDB5.lineTo(var_core_value_sigCB04 === "right" ? var_core_value_sig7658 : var_core_value_sig7658 + var_core_value_sig08B7, var_core_value_sig5090);
      }), var_core_value_sigBDB5.stroke(), var_core_value_sig947E.forEach((var_core_value_sigC368, var_core_value_sigAD56) => {
        let var_core_value_sigDB4A = var_core_value_sigF39A + var_core_value_sigAD56 * (var_core_value_sig2008 + var_core_value_sig7161);
        D(var_core_value_sigBDB5, var_core_value_sig7658, var_core_value_sigDB4A, var_core_value_sig08B7, var_core_value_sig2008, E.ghostRadius), var_core_value_sigBDB5.fillStyle = E.ghostFillColor, var_core_value_sigBDB5.fill(), var_core_value_sigBDB5.stroke();
      });
    }), D(var_core_value_sigBDB5, var_core_value_sig675A, var_core_value_sig837F, var_core_value_sigD8F0, var_core_value_sig1475, E.rootRadius), var_core_value_sigBDB5.fillStyle = E.primaryColor, var_core_value_sigBDB5.fill(), var_core_value_sigBDB5.stroke(), var_core_value_sigBDB5.fillStyle = E.rootTextColor, var_core_value_sigBDB5.font = O(E.rootFontWeight, E.rootFontSize, var_core_value_sig04E4), var_core_value_sigBDB5.textAlign = "center", var_core_value_sigBDB5.textBaseline = "middle";
    let var_core_value_sig9D6E = E.textPaddingScreen / var_core_value_sig04E4;
    return var_core_value_sigBDB5.fillText(t.MIND_MAP_DEFAULT_NODE_TEXT, var_core_value_sig3AD7.x, var_core_value_sig3AD7.y, Math.max(1, var_core_value_sigD8F0 - var_core_value_sig9D6E * 2)), var_core_value_sigBDB5.restore(), this.makeDirty(false), this;
  }
};
const Je = {
  children: [{
    text: t.MIND_MAP_DEFAULT_NODE_TEXT,
    orderKey: (0, t.getMindMapDefaultChildOrderKey)(0),
    side: "right"
  }, {
    text: t.MIND_MAP_DEFAULT_NODE_TEXT,
    orderKey: (0, t.getMindMapDefaultChildOrderKey)(1),
    side: "right"
  }, {
    text: t.MIND_MAP_DEFAULT_NODE_TEXT,
    orderKey: (0, t.getMindMapDefaultChildOrderKey)(2),
    side: "right"
  }]
};
var q = class extends i.Disposable {
  constructor(...var_core_value_sigB205) {
    super(...var_core_value_sigB205), b(this, "_template", Je);
  }
  setTemplate(var_core_value_sigBF78) {
    var var_core_value_sig8AF3;
    let var_core_value_sigA0CC = (var_core_value_sigBF78 == null ? undefined : var_core_value_sigBF78.children) ?? (var_core_value_sigBF78 == null || (var_core_value_sig8AF3 = var_core_value_sigBF78.blueprint) == null ? undefined : var_core_value_sig8AF3.root["children"]);
    this._template = {
      rootText: var_core_value_sigBF78 == null ? undefined : var_core_value_sigBF78.rootText,
      structureKind: var_core_value_sigBF78 == null ? undefined : var_core_value_sigBF78.structureKind,
      branchLineType: var_core_value_sigBF78 == null ? undefined : var_core_value_sigBF78.branchLineType,
      children: this._normalizeChildren(var_core_value_sigA0CC, var_core_value_sigBF78 == null ? undefined : var_core_value_sigBF78.structureKind),
      blueprint: var_core_value_sigBF78 != null && var_core_value_sigBF78.blueprint ? this._cloneBlueprint(var_core_value_sigBF78.blueprint) : undefined
    };
  }
  getTemplate() {
    var var_core_value_sigB3A1;
    return {
      rootText: this._template["rootText"],
      structureKind: this._template["structureKind"],
      branchLineType: this._template["branchLineType"],
      children: (var_core_value_sigB3A1 = this._template["children"]) == null ? undefined : var_core_value_sigB3A1.map(var_core_value_sigDCF5 => ({
        ...var_core_value_sigDCF5
      })),
      blueprint: this._template["blueprint"] ? this._cloneBlueprint(this._template["blueprint"]) : undefined
    };
  }
  _cloneBlueprint(var_core_value_sig1FB9) {
    return {
      title: var_core_value_sig1FB9.title,
      root: this._cloneBlueprintNode(var_core_value_sig1FB9.root)
    };
  }
  _cloneBlueprintNode(var_core_value_sig53A9) {
    return {
      ...var_core_value_sig53A9,
      foreignAttributes: var_core_value_sig53A9.foreignAttributes ? {
        ...var_core_value_sig53A9.foreignAttributes
      } : undefined,
      children: var_core_value_sig53A9.children["map"](var_core_value_sigC786 => this._cloneBlueprintNode(var_core_value_sigC786))
    };
  }
  _normalizeChildren(var_core_value_sigDACD, var_core_value_sig691E) {
    let var_core_value_sigD6D6 = !var_core_value_sigDACD,
      var_core_value_sig0347 = var_core_value_sigDACD ?? Je.children;
    return var_core_value_sig0347 == null ? undefined : var_core_value_sig0347.map((var_core_value_sigC0D9, var_core_value_sigF0511) => ({
      ...var_core_value_sigC0D9,
      text: var_core_value_sigC0D9.text ?? t.MIND_MAP_DEFAULT_NODE_TEXT,
      side: this._resolveChildSide(var_core_value_sigC0D9.side, var_core_value_sigF0511, var_core_value_sig691E, var_core_value_sigD6D6)
    }));
  }
  _resolveChildSide(var_core_value_sig52A3, var_core_value_sigAD91, var_core_value_sigF64E, var_core_value_sig9B3D) {
    return var_core_value_sigF64E === "mindmap-vertical" ? var_core_value_sig9B3D ? "bottom" : var_core_value_sig52A3 ?? "bottom" : var_core_value_sigF64E === "tree-left" ? var_core_value_sig9B3D ? "left" : var_core_value_sig52A3 ?? "left" : var_core_value_sigF64E === "tree-right" ? var_core_value_sig9B3D ? "right" : var_core_value_sig52A3 ?? "right" : var_core_value_sigF64E === "tree-alternate" ? var_core_value_sig9B3D ? var_core_value_sigAD91 % 2 == 0 ? "left" : "right" : var_core_value_sig52A3 ?? (var_core_value_sigAD91 % 2 == 0 ? "left" : "right") : var_core_value_sigF64E === "timeline-horizontal" ? var_core_value_sig9B3D ? var_core_value_sigAD91 % 2 == 0 ? "top" : "bottom" : var_core_value_sig52A3 ?? (var_core_value_sigAD91 % 2 == 0 ? "top" : "bottom") : var_core_value_sigF64E === "timeline-vertical" ? var_core_value_sig9B3D ? var_core_value_sigAD91 % 2 == 0 ? "left" : "right" : var_core_value_sig52A3 ?? (var_core_value_sigAD91 % 2 == 0 ? "left" : "right") : var_core_value_sig52A3;
  }
};
function Ye(var_core_value_sig2321, var_core_value_sigFF33) {
  let var_core_value_sig16E0 = Number.isFinite(var_core_value_sigFF33.zoomRatio) && var_core_value_sigFF33.zoomRatio > 0 ? var_core_value_sigFF33.zoomRatio : 1;
  return {
    x: Math.round((var_core_value_sig2321.offsetX - var_core_value_sigFF33.panOffset["x"]) / var_core_value_sig16E0),
    y: Math.round((var_core_value_sig2321.offsetY - var_core_value_sigFF33.panOffset["y"]) / var_core_value_sig16E0)
  };
}
function Xe(var_core_value_sig213C) {
  var var_core_value_sig31F8;
  if (var_core_value_sig213C != null && var_core_value_sig213C.dispose) {
    var_core_value_sig213C.dispose();
    return;
  }
  var_core_value_sig213C == null || (var_core_value_sig31F8 = var_core_value_sig213C.unsubscribe) == null || var_core_value_sig31F8.call(var_core_value_sig213C);
}
function Ze(var_core_value_sig6905) {
  var var_core_value_sigC3C0;
  return var_core_value_sig6905.activeTool === e.BoardToolType["MindMap"] && ((var_core_value_sigC3C0 = var_core_value_sig6905.pendingInsert) == null ? undefined : var_core_value_sigC3C0.type) === e.BoardToolType["MindMap"];
}
let Qe = class extends i.RxDisposable {
  constructor(var_core_value_sigB217, var_core_value_sig1FE6, var_core_value_sig2471, var_core_value_sigD1FC, var_core_value_sigE2F9, var_core_value_sigD689, var_core_value_sig7AE3) {
    super(), this._renderContext = var_core_value_sigB217, this._instanceSrv = var_core_value_sig1FE6, this._stateService = var_core_value_sig2471, this._commandService = var_core_value_sigD1FC, this._insertStateService = var_core_value_sigE2F9, this._elementStateService = var_core_value_sigD689, this._boardTextEditingService = var_core_value_sig7AE3, b(this, "_previewObject", null), b(this, "_lastPoint", null), this._init();
  }
  _init() {
    var var_core_value_sig1EB3;
    let {
        scene: var_core_value_sigE120,
        unitId: var_core_value_sigD6E7
      } = this._renderContext,
      var_core_value_sig3669 = this._instanceSrv["getUnit"](var_core_value_sigD6E7, i.UniverInstanceType["UNIVER_BOARD"]);
    if (!var_core_value_sig3669) return;
    let var_core_value_sig5CBC = (var_core_value_sig1EB3 = var_core_value_sigE120.onPointerMove$) == null ? undefined : var_core_value_sig1EB3.subscribeEvent({
        priority: 4,
        next: ([var_core_value_sig5825, var_core_value_sig4EB7]) => this._handlePointerMove(var_core_value_sig5825, var_core_value_sig4EB7)
      }),
      var_core_value_sig20BE = var_core_value_sigE120.onPointerDown$["subscribeEvent"]({
        priority: 4,
        next: ([var_core_value_sig73AF, var_core_value_sig548A]) => this._handlePointerDown(var_core_value_sig3669, var_core_value_sig73AF, var_core_value_sig548A)
      });
    this.disposeWithMe((0, i.toDisposable)(() => Xe(var_core_value_sig5CBC))), this.disposeWithMe((0, i.toDisposable)(() => Xe(var_core_value_sig20BE)));
    let var_core_value_sig6BD0 = this._stateService["state$"].subscribe(() => this._syncPreviewObject());
    this.disposeWithMe((0, i.toDisposable)(() => Xe(var_core_value_sig6BD0))), this.disposeWithMe((0, i.toDisposable)(() => {
      this._removePreviewObject();
    })), this._syncPreviewObject();
  }
  _syncPreviewObject() {
    var var_core_value_sig8C15, var_core_value_sig6DF7;
    let var_core_value_sigB411 = this._stateService["getState"]();
    if (!Ze(var_core_value_sigB411)) {
      this._removePreviewObject();
      return;
    }
    let var_core_value_sigA81B = this._ensurePreviewObject(),
      var_core_value_sigFE8D = this._insertStateService["getTemplate"]();
    var_core_value_sigA81B.updateState({
      point: this._lastPoint,
      structureKind: var_core_value_sigFE8D.structureKind,
      children: var_core_value_sigFE8D.children,
      blueprint: var_core_value_sigFE8D.blueprint,
      zoomRatio: var_core_value_sigB411.zoomRatio
    }), (var_core_value_sig8C15 = (var_core_value_sig6DF7 = this._renderContext["scene"]).makeDirty) == null || var_core_value_sig8C15.call(var_core_value_sig6DF7, true);
  }
  _ensurePreviewObject() {
    var var_core_value_sig8595, var_core_value_sigF8DE;
    if (this._previewObject) return this._previewObject;
    let var_core_value_sigFE76 = this._insertStateService["getTemplate"](),
      var_core_value_sig84C8 = new qe(Be, {
        point: this._lastPoint,
        structureKind: var_core_value_sigFE76.structureKind,
        children: var_core_value_sigFE76.children,
        blueprint: var_core_value_sigFE76.blueprint,
        zoomRatio: this._stateService["getState"]().zoomRatio
      });
    return this._previewObject = var_core_value_sig84C8, (var_core_value_sig8595 = (var_core_value_sigF8DE = this._renderContext["scene"]).addObject) == null || var_core_value_sig8595.call(var_core_value_sigF8DE, var_core_value_sig84C8, Ve), var_core_value_sig84C8;
  }
  _removePreviewObject() {
    var var_core_value_sig80C0, var_core_value_sig22B4, var_core_value_sigBB37, var_core_value_sig0C51;
    if (!this._previewObject) {
      this._lastPoint = null;
      return;
    }
    (var_core_value_sig80C0 = (var_core_value_sig22B4 = this._renderContext["scene"]).removeObjects) == null || var_core_value_sig80C0.call(var_core_value_sig22B4, [this._previewObject]), this._previewObject = null, this._lastPoint = null, (var_core_value_sigBB37 = (var_core_value_sig0C51 = this._renderContext["scene"]).makeDirty) == null || var_core_value_sigBB37.call(var_core_value_sig0C51, true);
  }
  _getPointFromEvent(var_core_value_sigADA4) {
    let var_core_value_sig0E48 = this._stateService["getState"]();
    return Ye(var_core_value_sigADA4, {
      panOffset: var_core_value_sig0E48.viewportPanOffset,
      zoomRatio: var_core_value_sig0E48.zoomRatio
    });
  }
  _resolveRootTopLeft(var_core_value_sig495B) {
    return {
      left: Math.round(var_core_value_sig495B.x - t.MIND_MAP_DEFAULT_NODE_SIZE["rootWidth"] / 2),
      top: Math.round(var_core_value_sig495B.y - t.MIND_MAP_DEFAULT_NODE_SIZE["rootHeight"] / 2)
    };
  }
  _handlePointerMove(var_core_value_sig310C, var_core_value_sig759E) {
    Ze(this._stateService["getState"]()) && (this._lastPoint = this._getPointFromEvent(var_core_value_sig310C), this._syncPreviewObject(), var_core_value_sig759E.stopPropagation());
  }
  _handlePointerDown(var_core_value_sig6C80, var_core_value_sig6B99, var_core_value_sig6ADC) {
    var var_core_value_sig41AD;
    let var_core_value_sigDBC2 = this._stateService["getState"](),
      var_core_value_sig7739 = var_core_value_sig6B99.button ?? 0;
    if (!Ze(var_core_value_sigDBC2) || var_core_value_sig7739 !== 0) return;
    let var_core_value_sig4040 = this._getPointFromEvent(var_core_value_sig6B99),
      var_core_value_sig1AAA = this._resolveRootTopLeft(var_core_value_sig4040),
      var_core_value_sig58DB = this._insertStateService["getTemplate"](),
      var_core_value_sig4840 = (0, i.generateRandomId)(6),
      var_core_value_sigB76D = var_core_value_sig6C80.getActivePageId(),
      var_core_value_sig1015 = this._commandService["executeCommand"](t.InsertBoardMindMapOperation["id"], {
        unitId: this._renderContext["unitId"],
        subUnitId: var_core_value_sigB76D,
        left: var_core_value_sig1AAA.left,
        top: var_core_value_sig1AAA.top,
        rootNodeId: var_core_value_sig4840,
        rootText: var_core_value_sig58DB.rootText,
        structureKind: var_core_value_sig58DB.structureKind,
        branchLineType: var_core_value_sig58DB.branchLineType,
        children: var_core_value_sig58DB.children,
        blueprint: var_core_value_sig58DB.blueprint
      });
    Promise.resolve(var_core_value_sig1015).then(var_core_value_sigE026 => {
      if (!var_core_value_sigE026) return;
      let var_core_value_sig339E = {
        unitId: this._renderContext["unitId"],
        subUnitId: var_core_value_sigB76D
      };
      this._elementStateService["selectElements"](var_core_value_sig339E, [var_core_value_sig4840], var_core_value_sig4840), this._boardTextEditingService["ignoreExternalFocusChanges"](), this._boardTextEditingService["setEditing"]({
        ...var_core_value_sig339E,
        shapeId: var_core_value_sig4840,
        shapeKey: (0, n.getBoardElementRenderObjectKey)(var_core_value_sig339E.unitId, var_core_value_sig4840),
        visible: true
      });
    }), this._stateService["setActiveTool"](e.BoardToolType["Select"]), var_core_value_sig6ADC.stopPropagation(), (var_core_value_sig41AD = var_core_value_sig6B99.preventDefault) == null || var_core_value_sig41AD.call(var_core_value_sig6B99);
  }
};
Qe = S([x(1, i.IUniverInstanceService), x(2, n.IBoardUIStateService), x(3, i.ICommandService), x(4, (0, i.Inject)(q)), x(5, n.IBoardElementStateService), x(6, (0, i.Inject)(n.BoardTextEditingService))], Qe);
var J = class extends i.Disposable {
  constructor(...var_core_value_sig6223) {
    super(...var_core_value_sig6223), b(this, "_refresh$", new o.Subject()), b(this, "refresh$", this._refresh$["asObservable"]());
  }
  notify(var_core_value_sigC6B6) {
    this._refresh$["next"](var_core_value_sigC6B6);
  }
  dispose() {
    this._refresh$["complete"](), super.dispose();
  }
};
function $e(var_core_value_sig1F39) {
  return typeof var_core_value_sig1F39 == "number" && Number.isFinite(var_core_value_sig1F39) && var_core_value_sig1F39 > 0;
}
function et(var_core_value_sig9256, var_core_value_sig98A0, var_core_value_sig3EBD) {
  let var_core_value_sig1AC3 = var_core_value_sig9256[var_core_value_sig98A0],
    var_core_value_sig66B8 = (0, t.getMindMapNodeMeta)(var_core_value_sig1AC3 == null ? undefined : var_core_value_sig1AC3.element);
  if (!var_core_value_sig1AC3 || !var_core_value_sig66B8) return null;
  let var_core_value_sig4C7F = (0, t.resolveMindMapNodeHostSize)(var_core_value_sig1AC3, var_core_value_sig3EBD);
  if (!var_core_value_sig4C7F) return null;
  let var_core_value_sig2543 = var_core_value_sig1AC3.transform ?? var_core_value_sig1AC3.element["transform"];
  return (0, t.resolveMindMapLayoutPreview)({
    ...var_core_value_sig9256,
    [var_core_value_sig98A0]: {
      ...var_core_value_sig1AC3,
      transform: {
        ...var_core_value_sig2543,
        width: var_core_value_sig4C7F.width,
        height: var_core_value_sig4C7F.height
      },
      element: {
        ...var_core_value_sig1AC3.element,
        transform: {
          ...var_core_value_sig1AC3.element["transform"],
          width: var_core_value_sig4C7F.width,
          height: var_core_value_sig4C7F.height
        }
      }
    }
  }, var_core_value_sig66B8.structureScopeId);
}
let tt = class extends i.RxDisposable {
  constructor(var_core_value_sig498A, var_core_value_sigEF45, var_core_value_sig36FE, var_core_value_sig3AF5, var_core_value_sig14E6, var_core_value_sig8690) {
    super(), this._renderContext = var_core_value_sig498A, this._intrinsicSizeService = var_core_value_sigEF45, this._boardElementService = var_core_value_sig36FE, this._textEditingService = var_core_value_sig3AF5, this._previewRefreshService = var_core_value_sig14E6, this._commandService = var_core_value_sig8690, b(this, "_activePreview", null), b(this, "_provider", {
      match: var_core_value_sig7550 => var_core_value_sig7550.unitId === this._renderContext["unitId"] && !!(0, t.getMindMapNodeMeta)(var_core_value_sig7550.element),
      resolveHostSize: var_core_value_sig2983 => this._resolveHostSize(var_core_value_sig2983),
      previewHostSize: var_core_value_sigE1B0 => this._previewHostSize(var_core_value_sigE1B0),
      updateHostSize: var_core_value_sigD4FF => this._updateHostSize(var_core_value_sigD4FF),
      updateShapeText: var_core_value_sig1E5B => this._updateShapeText(var_core_value_sig1E5B)
    }), this.disposeWithMe(this._intrinsicSizeService["registerProvider"](this._provider)), this._initEditingRestore(), this.disposeWithMe((0, i.toDisposable)(() => this._restoreActivePreview()));
  }
  _updateHostSize(var_core_value_sigDF29) {
    return this._previewHostSize(var_core_value_sigDF29);
  }
  _updateShapeText(var_core_value_sigC0F8) {
    let var_core_value_sig3C75 = var_core_value_sigC0F8.params["hostSize"] ? this._resolveHostSize({
        elementData: var_core_value_sigC0F8.elementData,
        params: var_core_value_sigC0F8.params["hostSize"]
      }) : null,
      var_core_value_sig992D = var_core_value_sigC0F8.elementData["transform"] ?? var_core_value_sigC0F8.elementData["element"].transform;
    return !(var_core_value_sig3C75 && (var_core_value_sig3C75.width !== var_core_value_sig992D.width || var_core_value_sig3C75.height !== var_core_value_sig992D.height)) && (0, n.areBoardShapeTextValuesEquivalent)(var_core_value_sigC0F8.params["shapeText"], var_core_value_sigC0F8.params["oldShapeText"]) ? true : this._commandService["syncExecuteCommand"](t.UpdateMindMapNodeOperation["id"], {
      unitId: var_core_value_sigC0F8.params["unitId"],
      subUnitId: var_core_value_sigC0F8.params["subUnitId"],
      nodeId: var_core_value_sigC0F8.params["shapeId"],
      shapeText: var_core_value_sigC0F8.params["shapeText"],
      ...(var_core_value_sig3C75 ? {
        hostSize: {
          width: var_core_value_sig3C75.width,
          height: var_core_value_sig3C75.height
        }
      } : null)
    });
  }
  _previewHostSize(var_core_value_sigE4E4) {
    let var_core_value_sigA4B0 = this._resolveHostSize(var_core_value_sigE4E4);
    if (!var_core_value_sigA4B0) return false;
    let var_core_value_sig5F50 = var_core_value_sigE4E4.elementData["transform"] ?? var_core_value_sigE4E4.elementData["element"].transform;
    return !this._activePreview && var_core_value_sig5F50.width === var_core_value_sigA4B0.width && var_core_value_sig5F50.height === var_core_value_sigA4B0.height || this._syncLayoutPreview(var_core_value_sigE4E4, var_core_value_sigA4B0), true;
  }
  _resolveHostSize(var_core_value_sig4494) {
    return !$e(var_core_value_sig4494.params["width"]) || !$e(var_core_value_sig4494.params["height"]) ? null : (0, t.resolveMindMapNodeHostSize)(var_core_value_sig4494.elementData, {
      width: var_core_value_sig4494.params["width"],
      height: var_core_value_sig4494.params["height"]
    });
  }
  _initEditingRestore() {
    this.disposeWithMe((0, i.toDisposable)(this._textEditingService["editingParams$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sigB680 => {
      var_core_value_sigB680 || this._restoreActivePreview();
    })));
  }
  _syncLayoutPreview(var_core_value_sigFFAF, var_core_value_sig478B) {
    var var_core_value_sig1E21;
    let var_core_value_sig9DBF = this._boardElementService["getElementData"](var_core_value_sigFFAF.params["unitId"], var_core_value_sigFFAF.params["subUnitId"]),
      var_core_value_sig36CC = et(var_core_value_sig9DBF, var_core_value_sigFFAF.params["shapeId"], var_core_value_sig478B),
      var_core_value_sigA568 = (0, t.getMindMapNodeMeta)((var_core_value_sig1E21 = var_core_value_sig9DBF[var_core_value_sigFFAF.params["shapeId"]]) == null ? undefined : var_core_value_sig1E21.element);
    !var_core_value_sig36CC || !var_core_value_sigA568 || (this._activePreview = {
      unitId: var_core_value_sigFFAF.params["unitId"],
      subUnitId: var_core_value_sigFFAF.params["subUnitId"],
      scopeId: var_core_value_sigA568.structureScopeId
    }, this._syncElementDataToScene(var_core_value_sig36CC, var_core_value_sigA568.structureScopeId) && this._previewRefreshService["notify"]({
      unitId: var_core_value_sigFFAF.params["unitId"],
      subUnitId: var_core_value_sigFFAF.params["subUnitId"],
      nodeId: var_core_value_sigFFAF.params["shapeId"],
      scopeId: var_core_value_sigA568.structureScopeId
    }));
  }
  _restoreActivePreview() {
    let var_core_value_sigD22D = this._activePreview;
    if (!var_core_value_sigD22D) return;
    this._activePreview = null;
    let var_core_value_sig85D5 = this._boardElementService["getElementData"](var_core_value_sigD22D.unitId, var_core_value_sigD22D.subUnitId);
    this._syncElementDataToScene(var_core_value_sig85D5, var_core_value_sigD22D.scopeId) && this._previewRefreshService["notify"]({
      unitId: var_core_value_sigD22D.unitId,
      subUnitId: var_core_value_sigD22D.subUnitId,
      nodeId: var_core_value_sigD22D.scopeId,
      scopeId: var_core_value_sigD22D.scopeId
    });
  }
  _syncElementDataToScene(var_core_value_sig5D2E, var_core_value_sig7221) {
    let var_core_value_sig0A5A = false;
    if (Object.values(var_core_value_sig5D2E).forEach(var_core_value_sig1F64 => {
      var var_core_value_sigDD1C;
      let var_core_value_sig2C39 = (0, t.getMindMapNodeMeta)(var_core_value_sig1F64.element),
        var_core_value_sigB7D1 = (var_core_value_sigDD1C = var_core_value_sig1F64.element["custom"]) == null ? undefined : var_core_value_sigDD1C.structured;
      if (var_core_value_sig1F64.elementId !== var_core_value_sig7221 && (var_core_value_sig2C39 == null ? undefined : var_core_value_sig2C39.structureScopeId) !== var_core_value_sig7221 && (var_core_value_sigB7D1 == null ? undefined : var_core_value_sigB7D1.structureScopeId) !== var_core_value_sig7221) return;
      let var_core_value_sig64F0 = this._getSceneObject(var_core_value_sig1F64.elementId);
      var_core_value_sig64F0 && (var_core_value_sig0A5A = (0, n.syncBoardElementRenderObject)(var_core_value_sig64F0, var_core_value_sig1F64, {
        elementData: var_core_value_sig5D2E,
        unitId: this._renderContext["unitId"]
      }) || var_core_value_sig0A5A);
    }), var_core_value_sig0A5A) {
      var var_core_value_sigE6D6, var_core_value_sig8507;
      this._renderContext["scene"].makeDirty(true), (var_core_value_sigE6D6 = (var_core_value_sig8507 = this._renderContext["scene"]).requestRender) == null || var_core_value_sigE6D6.call(var_core_value_sig8507);
    }
    return var_core_value_sig0A5A;
  }
  _getSceneObject(var_core_value_sig8A7F) {
    var var_core_value_sig9E81;
    let var_core_value_sig8295 = (0, n.getBoardElementRenderObjectKey)(this._renderContext["unitId"], var_core_value_sig8A7F),
      var_core_value_sigA975 = this._renderContext["scene"];
    return ((var_core_value_sig9E81 = var_core_value_sigA975.getObjectIncludeInGroup) == null ? undefined : var_core_value_sig9E81.call(var_core_value_sigA975, var_core_value_sig8295)) ?? this._renderContext["scene"].getObject(var_core_value_sig8295) ?? null;
  }
};
tt = S([x(1, (0, i.Inject)(n.BoardShapeIntrinsicSizeService)), x(2, (0, i.Inject)(e.IBoardElementService)), x(3, (0, i.Inject)(n.BoardTextEditingService)), x(4, (0, i.Inject)(J)), x(5, i.ICommandService)], tt);
const Y = {
  radius: 18,
  addChildRadius: 14,
  siblingHoverRadius: 10,
  siblingDotRadius: 5,
  siblingDotGap: 3,
  gap: 10,
  collapsePlusMinDistance: 44,
  primaryColor: w.primaryColor,
  surfaceColor: w.surfaceColor,
  borderWidth: 2,
  glyphSize: 8,
  addChildGlyphSize: 6,
  siblingGlyphSize: 5.5,
  glyphWidth: 2.4,
  glyphHoverWidth: 3,
  badgeFontWeight: 600,
  badgeFontSize: 18,
  fontFamily: w.fontFamily
};
function nt(var_core_value_sigB230) {
  let var_core_value_sig407E = Y.radius,
    var_core_value_sig88CB = Y.addChildRadius,
    var_core_value_sigD615 = Y.siblingHoverRadius,
    var_core_value_sigB708 = Y.gap,
    var_core_value_sig60EF = Y.siblingDotRadius,
    var_core_value_sigA6FB = var_core_value_sig60EF + Y.siblingDotGap,
    var_core_value_sigD6EA = Y.collapsePlusMinDistance,
    var_core_value_sigA2D31 = var_core_value_sigB230.bounds["top"] + var_core_value_sigB230.bounds["height"] / 2,
    var_core_value_sig727A = var_core_value_sigB230.bounds["left"] + var_core_value_sigB230.bounds["width"] / 2,
    var_core_value_sig6AF1 = var_core_value_sigB230.bounds["left"] - var_core_value_sig407E - var_core_value_sigB708,
    var_core_value_sig3F6A = var_core_value_sigB230.bounds["left"] + var_core_value_sigB230.bounds["width"] + var_core_value_sig407E + var_core_value_sigB708,
    var_core_value_sig23B4 = var_core_value_sigB230.bounds["top"] - var_core_value_sig407E - var_core_value_sigB708,
    var_core_value_sig350C = var_core_value_sigB230.bounds["top"] + var_core_value_sigB230.bounds["height"] + var_core_value_sig407E + var_core_value_sigB708,
    var_core_value_sig2335 = var_core_value_sigB230.bounds["left"] - var_core_value_sig88CB - var_core_value_sigB708,
    var_core_value_sig6233 = var_core_value_sigB230.bounds["left"] + var_core_value_sigB230.bounds["width"] + var_core_value_sig88CB + var_core_value_sigB708,
    var_core_value_sig4230 = var_core_value_sigB230.bounds["top"] - var_core_value_sig88CB - var_core_value_sigB708,
    var_core_value_sig6136 = var_core_value_sigB230.bounds["top"] + var_core_value_sigB230.bounds["height"] + var_core_value_sig88CB + var_core_value_sigB708,
    var_core_value_sigD25E = [],
    var_core_value_sigE1BC = var_core_value_sigB230.side === "top" || var_core_value_sigB230.side === "bottom",
    var_core_value_sigCF44 = var_core_value_sigE1BC ? var_core_value_sig727A : var_core_value_sigB230.side === "left" ? var_core_value_sig6AF1 : var_core_value_sig3F6A,
    var_core_value_sig3C97 = var_core_value_sigE1BC ? var_core_value_sigB230.side === "top" ? var_core_value_sig23B4 : var_core_value_sig350C : var_core_value_sigA2D31;
  if (var_core_value_sigB230.hasChildren && var_core_value_sigB230.collapsedDescendantCount > 0) return var_core_value_sigD25E.push({
    kind: "toggle-collapse",
    x: var_core_value_sigCF44,
    y: var_core_value_sig3C97,
    radius: var_core_value_sig407E,
    badgeCount: var_core_value_sigB230.collapsedDescendantCount
  }), var_core_value_sigD25E;
  if (var_core_value_sigB230.isRoot ? (var_core_value_sigB230.rootChildSides ?? (var_core_value_sigE1BC ? ["top", "bottom"] : ["left", "right"])).forEach(var_core_value_sig1263 => {
    var_core_value_sig1263 === "top" ? var_core_value_sigD25E.push({
      kind: "add-child-top",
      x: var_core_value_sig727A,
      y: var_core_value_sig4230,
      radius: var_core_value_sig88CB
    }) : var_core_value_sig1263 === "bottom" ? var_core_value_sigD25E.push({
      kind: "add-child-bottom",
      x: var_core_value_sig727A,
      y: var_core_value_sig6136,
      radius: var_core_value_sig88CB
    }) : var_core_value_sig1263 === "left" ? var_core_value_sigD25E.push({
      kind: "add-child-left",
      x: var_core_value_sig2335,
      y: var_core_value_sigA2D31,
      radius: var_core_value_sig88CB
    }) : var_core_value_sigD25E.push({
      kind: "add-child-right",
      x: var_core_value_sig6233,
      y: var_core_value_sigA2D31,
      radius: var_core_value_sig88CB
    });
  }) : (var_core_value_sigD25E.push({
    kind: var_core_value_sigB230.side === "left" ? "add-child-left" : var_core_value_sigB230.side === "top" ? "add-child-top" : var_core_value_sigB230.side === "bottom" ? "add-child-bottom" : "add-child-right",
    x: var_core_value_sigE1BC ? var_core_value_sig727A : var_core_value_sigB230.side === "left" ? var_core_value_sig2335 : var_core_value_sig6233,
    y: var_core_value_sigE1BC ? var_core_value_sigB230.side === "top" ? var_core_value_sig4230 : var_core_value_sig6136 : var_core_value_sigA2D31,
    radius: var_core_value_sig88CB
  }), var_core_value_sigE1BC ? (var_core_value_sigD25E.push({
    kind: "add-sibling-before",
    placement: "before",
    x: var_core_value_sigB230.bounds["left"] - var_core_value_sigA6FB,
    y: var_core_value_sigA2D31,
    radius: var_core_value_sigD615,
    visualRadius: var_core_value_sig60EF
  }), var_core_value_sigD25E.push({
    kind: "add-sibling-after",
    placement: "after",
    x: var_core_value_sigB230.bounds["left"] + var_core_value_sigB230.bounds["width"] + var_core_value_sigA6FB,
    y: var_core_value_sigA2D31,
    radius: var_core_value_sigD615,
    visualRadius: var_core_value_sig60EF
  })) : (var_core_value_sigD25E.push({
    kind: "add-sibling-before",
    placement: "before",
    x: var_core_value_sig727A,
    y: var_core_value_sigB230.bounds["top"] - var_core_value_sigA6FB,
    radius: var_core_value_sigD615,
    visualRadius: var_core_value_sig60EF
  }), var_core_value_sigD25E.push({
    kind: "add-sibling-after",
    placement: "after",
    x: var_core_value_sig727A,
    y: var_core_value_sigB230.bounds["top"] + var_core_value_sigB230.bounds["height"] + var_core_value_sigA6FB,
    radius: var_core_value_sigD615,
    visualRadius: var_core_value_sig60EF
  }))), var_core_value_sigB230.hasChildren) {
    let var_core_value_sig457C = {
      kind: "toggle-collapse",
      x: var_core_value_sigCF44,
      y: var_core_value_sig3C97,
      radius: var_core_value_sig407E
    };
    var_core_value_sigD25E.push(var_core_value_sig457C);
    let var_core_value_sigA4E6 = var_core_value_sigD25E.find(var_core_value_sig85B1 => var_core_value_sig85B1.kind === (var_core_value_sigB230.side === "left" ? "add-child-left" : var_core_value_sigB230.side === "top" ? "add-child-top" : var_core_value_sigB230.side === "bottom" ? "add-child-bottom" : "add-child-right"));
    var_core_value_sigA4E6 && Math.hypot(var_core_value_sigA4E6.x - var_core_value_sig457C.x, var_core_value_sigA4E6.y - var_core_value_sig457C.y) < var_core_value_sigD6EA && (var_core_value_sigB230.side === "top" || var_core_value_sigB230.side === "bottom" ? var_core_value_sigA4E6.y = var_core_value_sig457C.y + (var_core_value_sigB230.side === "top" ? -var_core_value_sigD6EA : var_core_value_sigD6EA) : var_core_value_sigA4E6.x = var_core_value_sig457C.x + (var_core_value_sigB230.side === "left" ? -var_core_value_sigD6EA : var_core_value_sigD6EA));
  }
  return var_core_value_sigD25E;
}
const rt = "board-mind-map-node-controls-object",
  it = n.BOARD_RENDER_LAYER_INDEX["connectorAffordance"];
function at(var_core_value_sigA920, var_core_value_sigAD561) {
  return !!var_core_value_sigA920 && var_core_value_sigA920.kind === var_core_value_sigAD561.kind && var_core_value_sigA920.x === var_core_value_sigAD561.x && var_core_value_sigA920.y === var_core_value_sigAD561.y;
}
var ot = class extends a.BaseObject {
  constructor(var_core_value_sig934F = rt, var_core_value_sig74A7) {
    super(var_core_value_sig934F), b(this, "_state", {
      controls: []
    }), this.evented = true, this.zIndex = n.BOARD_RENDER_OBJECT_Z_INDEX["transientControl"], this.updateState(var_core_value_sig74A7);
  }
  updateState(var_core_value_sig3685) {
    this._state = {
      ...this._state,
      ...var_core_value_sig3685
    }, this._state["controls"].length > 0 ? this.show() : this.hide(), this.makeDirty(true);
  }
  setHoveredControl(var_core_value_sigC621) {
    !var_core_value_sigC621 && !this._state["hoveredControl"] || var_core_value_sigC621 && at(this._state["hoveredControl"], var_core_value_sigC621) || (this._state = {
      ...this._state,
      hoveredControl: var_core_value_sigC621
    }, this.makeDirty(true));
  }
  getHitControl(var_core_value_sig86D7) {
    for (let var_core_value_sig3141 = this._state["controls"].length - 1; var_core_value_sig3141 >= 0; --var_core_value_sig3141) {
      let var_core_value_sig6418 = this._state["controls"][var_core_value_sig3141];
      if (Math.hypot(var_core_value_sig86D7.x - var_core_value_sig6418.x, var_core_value_sig86D7.y - var_core_value_sig6418.y) <= var_core_value_sig6418.radius) return var_core_value_sig6418;
    }
    return null;
  }
  isHit(var_core_value_sig431B) {
    return !!this.getHitControl({
      x: var_core_value_sig431B.x,
      y: var_core_value_sig431B.y
    });
  }
  render(var_core_value_sig5C7C, var_core_value_sig87E2) {
    return !this.visible || this._state["controls"].length === 0 ? (this.makeDirty(false), this) : (var_core_value_sig5C7C.save(), this._state["controls"].forEach(var_core_value_sig2162 => {
      let var_core_value_sig2EAD = at(this._state["hoveredControl"], var_core_value_sig2162),
        var_core_value_sig6774 = var_core_value_sig2162.badgeCount !== undefined,
        var_core_value_sig340D = var_core_value_sig2162.kind === "add-child-left" || var_core_value_sig2162.kind === "add-child-right" || var_core_value_sig2162.kind === "add-child-top" || var_core_value_sig2162.kind === "add-child-bottom",
        var_core_value_sig82D4 = var_core_value_sig2162.kind === "add-sibling-before" || var_core_value_sig2162.kind === "add-sibling-after",
        var_core_value_sigBDE4 = var_core_value_sig82D4 && !var_core_value_sig2EAD ? var_core_value_sig2162.visualRadius ?? var_core_value_sig2162.radius : var_core_value_sig2162.radius;
      if (var_core_value_sig5C7C.beginPath(), var_core_value_sig5C7C.fillStyle = var_core_value_sig2162.kind === "toggle-collapse" ? Y.surfaceColor : Y.primaryColor, var_core_value_sig5C7C.strokeStyle = Y.primaryColor, var_core_value_sig5C7C.lineWidth = Y.borderWidth, var_core_value_sig5C7C.arc(var_core_value_sig2162.x, var_core_value_sig2162.y, var_core_value_sigBDE4, 0, Math.PI * 2), var_core_value_sig5C7C.fill(), (!var_core_value_sig82D4 || var_core_value_sig2EAD) && var_core_value_sig5C7C.stroke(), !var_core_value_sig6774 && (!var_core_value_sig82D4 || var_core_value_sig2EAD)) {
        if (var_core_value_sig5C7C.beginPath(), var_core_value_sig5C7C.strokeStyle = var_core_value_sig2162.kind === "toggle-collapse" ? Y.primaryColor : Y.surfaceColor, var_core_value_sig5C7C.lineWidth = var_core_value_sig82D4 ? Y.glyphWidth : var_core_value_sig2EAD ? Y.glyphHoverWidth : Y.glyphWidth, var_core_value_sig5C7C.lineCap = "round", var_core_value_sig2162.kind === "toggle-collapse") {
          let var_core_value_sig2DAB = Y.glyphSize;
          var_core_value_sig5C7C.moveTo(var_core_value_sig2162.x + var_core_value_sig2DAB / 2, var_core_value_sig2162.y - var_core_value_sig2DAB), var_core_value_sig5C7C.lineTo(var_core_value_sig2162.x - var_core_value_sig2DAB / 2, var_core_value_sig2162.y), var_core_value_sig5C7C.lineTo(var_core_value_sig2162.x + var_core_value_sig2DAB / 2, var_core_value_sig2162.y + var_core_value_sig2DAB);
        } else {
          let var_core_value_sig877E = var_core_value_sig82D4 ? Y.siblingGlyphSize : var_core_value_sig340D ? Y.addChildGlyphSize : Y.glyphSize;
          var_core_value_sig5C7C.moveTo(var_core_value_sig2162.x - var_core_value_sig877E, var_core_value_sig2162.y), var_core_value_sig5C7C.lineTo(var_core_value_sig2162.x + var_core_value_sig877E, var_core_value_sig2162.y), var_core_value_sig5C7C.moveTo(var_core_value_sig2162.x, var_core_value_sig2162.y - var_core_value_sig877E), var_core_value_sig5C7C.lineTo(var_core_value_sig2162.x, var_core_value_sig2162.y + var_core_value_sig877E);
        }
        var_core_value_sig5C7C.stroke();
      }
      var_core_value_sig6774 && (var_core_value_sig5C7C.fillStyle = Y.primaryColor, var_core_value_sig5C7C.font = Y.badgeFontWeight + "\x20" + Y.badgeFontSize + "px " + Y.fontFamily, var_core_value_sig5C7C.textAlign = "center", var_core_value_sig5C7C.textBaseline = "middle", var_core_value_sig5C7C.fillText(String(var_core_value_sig2162.badgeCount), var_core_value_sig2162.x, var_core_value_sig2162.y));
    }), var_core_value_sig5C7C.restore(), this.makeDirty(false), this);
  }
};
function st(var_core_value_sig0454) {
  return var_core_value_sig0454 === "tree-left" || var_core_value_sig0454 === "tree-right" || var_core_value_sig0454 === "tree-alternate";
}
function ct(var_core_value_sigEE1A) {
  return var_core_value_sigEE1A === "timeline-horizontal" || var_core_value_sigEE1A === "timeline-vertical";
}
function lt(var_core_value_sig4107, var_core_value_sigF35C) {
  let var_core_value_sigEF8D = Number.isFinite(var_core_value_sigF35C.zoomRatio) && var_core_value_sigF35C.zoomRatio > 0 ? var_core_value_sigF35C.zoomRatio : 1;
  return {
    x: Math.round((var_core_value_sig4107.offsetX - var_core_value_sigF35C.panOffset["x"]) / var_core_value_sigEF8D),
    y: Math.round((var_core_value_sig4107.offsetY - var_core_value_sigF35C.panOffset["y"]) / var_core_value_sigEF8D)
  };
}
let ut = class extends i.RxDisposable {
  constructor(var_core_value_sig2E04, var_core_value_sig2EDD, var_core_value_sig27D2, var_core_value_sig355D, var_core_value_sig8B21, var_core_value_sigEB36, var_core_value_sig5C27, var_core_value_sigD494, var_core_value_sigBF6D) {
    super(), this._renderContext = var_core_value_sig2E04, this._boardElementService = var_core_value_sig2EDD, this._elementStateService = var_core_value_sig27D2, this._stateService = var_core_value_sig355D, this._commandService = var_core_value_sig8B21, this._boardTextEditingService = var_core_value_sigEB36, this._localeService = var_core_value_sig5C27, this._previewRefreshService = var_core_value_sigD494, this._undoRedoGroupService = var_core_value_sigBF6D, b(this, "_object", null), b(this, "_objectEventDisposables", null), b(this, "_activeNodeId", null), b(this, "_activeScopeId", null), this._init();
  }
  _init() {
    var var_core_value_sigD051, var_core_value_sig16D9, var_core_value_sigF378;
    let {
        scene: var_core_value_sig5F6C
      } = this._renderContext,
      var_core_value_sig7E85 = (var_core_value_sigD051 = var_core_value_sig5F6C.getTransformerByCreate) == null ? undefined : var_core_value_sigD051.call(var_core_value_sig5F6C);
    var_core_value_sig7E85 && (this.disposeWithMe((0, i.toDisposable)(var_core_value_sig7E85.changing$["pipe"]((0, o.takeUntil)(this.dispose$)).subscribe(({
      objects: var_core_value_sig7DF1
    }) => {
      this._syncControls(var_core_value_sig7DF1, {
        hideRootControls: true
      });
    }))), this.disposeWithMe((0, i.toDisposable)(var_core_value_sig7E85.changeEnd$["pipe"]((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sigDC86 => {
      let var_core_value_sig0B0C = var_core_value_sigDC86 == null ? undefined : var_core_value_sigDC86.objects;
      this._syncControls(var_core_value_sig0B0C), setTimeout(() => this._syncControls(var_core_value_sig0B0C), 0);
    })))), this.disposeWithMe((0, i.toDisposable)(this._elementStateService["state$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(() => this._syncControls()))), this.disposeWithMe((0, i.toDisposable)(this._stateService["state$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(() => this._syncControls()))), this.disposeWithMe((0, i.toDisposable)(this._boardElementService["elementUpdate$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sigA39E => {
      let var_core_value_sigBBEE = this._elementStateService["getSnapshot"]().context;
      var_core_value_sigBBEE && var_core_value_sigA39E.some(var_core_value_sig1896 => var_core_value_sig1896.unitId === var_core_value_sigBBEE.unitId && var_core_value_sig1896.subUnitId === var_core_value_sigBBEE.subUnitId && (var_core_value_sig1896.elementId === this._activeNodeId || var_core_value_sig1896.elementId === this._activeScopeId)) && this._syncControls();
    }))), this.disposeWithMe((0, i.toDisposable)(this._previewRefreshService["refresh$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sig011D => {
      let var_core_value_sig6167 = this._elementStateService["getSnapshot"]().context;
      !var_core_value_sig6167 || var_core_value_sig6167.unitId !== var_core_value_sig011D.unitId || var_core_value_sig6167.subUnitId !== var_core_value_sig011D.subUnitId || this._activeScopeId && this._activeScopeId !== var_core_value_sig011D.scopeId || this._syncControls();
    }))), this.disposeWithMe((0, i.toDisposable)(var_core_value_sig5F6C.onPointerMove$["subscribeEvent"](var_core_value_sig65A1 => this._handlePointerMove(var_core_value_sig65A1)))), this.disposeWithMe((0, i.toDisposable)(var_core_value_sig5F6C.onPointerDown$["subscribeEvent"]({
      priority: 4,
      next: ([var_core_value_sig7F19, var_core_value_sig7827]) => {
        this._handlePointerDown(var_core_value_sig7F19) && this._consumeControlEvent(var_core_value_sig7F19, var_core_value_sig7827);
      }
    }))), this.disposeWithMe((0, i.toDisposable)(((var_core_value_sig16D9 = var_core_value_sig5F6C.onPointerUp$) == null ? undefined : var_core_value_sig16D9.subscribeEvent({
      priority: 4,
      next: ([var_core_value_sig652C, var_core_value_sig7E32]) => {
        this._isControlEvent(var_core_value_sig652C) && this._consumeControlEvent(var_core_value_sig652C, var_core_value_sig7E32);
      }
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe((0, i.toDisposable)(((var_core_value_sigF378 = var_core_value_sig5F6C.onDblclick$) == null ? undefined : var_core_value_sigF378.subscribeEvent({
      priority: 4,
      next: ([var_core_value_sig4C07, var_core_value_sig79AB]) => {
        this._isControlEvent(var_core_value_sig4C07) && this._consumeControlEvent(var_core_value_sig4C07, var_core_value_sig79AB);
      }
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe((0, i.toDisposable)(() => this._removeObject())), this._syncControls();
  }
  _ensureObject() {
    return this._object ? this._object : (this._object = new ot(rt), this._attachObjectEvents(this._object), this._renderContext["scene"].addObject(this._object, it), this._object);
  }
  _attachObjectEvents(var_core_value_sigF204) {
    var var_core_value_sig7A15;
    (var_core_value_sig7A15 = this._objectEventDisposables) == null || var_core_value_sig7A15.dispose();
    let var_core_value_sigEEA6 = new i["DisposableCollection"]();
    var_core_value_sigEEA6.add(var_core_value_sigF204.onPointerDown$["subscribeEvent"]({
      priority: 4,
      next: ([var_core_value_sig8E74, var_core_value_sig104C]) => {
        this._handlePointerDown(var_core_value_sig8E74) && this._consumeControlEvent(var_core_value_sig8E74, var_core_value_sig104C);
      }
    })), var_core_value_sigEEA6.add(var_core_value_sigF204.onPointerUp$["subscribeEvent"]({
      priority: 4,
      next: ([var_core_value_sig841D, var_core_value_sig90CB]) => {
        this._isControlEvent(var_core_value_sig841D) && this._consumeControlEvent(var_core_value_sig841D, var_core_value_sig90CB);
      }
    })), var_core_value_sigEEA6.add(var_core_value_sigF204.onDblclick$["subscribeEvent"]({
      priority: 4,
      next: ([var_core_value_sigBDF5, var_core_value_sigACC6]) => {
        this._isControlEvent(var_core_value_sigBDF5) && this._consumeControlEvent(var_core_value_sigBDF5, var_core_value_sigACC6);
      }
    })), this._objectEventDisposables = var_core_value_sigEEA6;
  }
  _removeObject() {
    var var_core_value_sigEAE1;
    this._object && (this._renderContext["scene"].removeObjects([this._object]), (var_core_value_sigEAE1 = this._objectEventDisposables) == null || var_core_value_sigEAE1.dispose(), this._objectEventDisposables = null, this._object = null, this._activeNodeId = null, this._activeScopeId = null, this._renderContext["scene"].makeDirty(true));
  }
  _syncControls(var_core_value_sigC69F, var_core_value_sig0442) {
    var var_core_value_sig697A, var_core_value_sigDB65;
    if (this._stateService["getState"]().interactionMode === "viewing") {
      this._removeObject();
      return;
    }
    let var_core_value_sig045E = this._elementStateService["getSnapshot"](),
      var_core_value_sig4524 = var_core_value_sig045E.context,
      var_core_value_sig64D5 = var_core_value_sig045E.focusedId ?? var_core_value_sig045E.selectedIds[0];
    if (!var_core_value_sig4524 || !var_core_value_sig64D5 || var_core_value_sig045E.selectedIds["length"] !== 1) {
      this._removeObject();
      return;
    }
    let var_core_value_sig9678 = this._boardElementService["getElementData"](var_core_value_sig4524.unitId, var_core_value_sig4524.subUnitId),
      var_core_value_sig5E74 = var_core_value_sig9678[var_core_value_sig64D5],
      var_core_value_sig75FC = (0, t.getMindMapNodeMeta)(var_core_value_sig5E74 == null ? undefined : var_core_value_sig5E74.element);
    if (!var_core_value_sig5E74 || !var_core_value_sig75FC) {
      this._removeObject();
      return;
    }
    let var_core_value_sig639A = (0, n.getBoardElementRenderObjectKey)(var_core_value_sig4524.unitId, var_core_value_sig64D5);
    if (var_core_value_sig0442 != null && var_core_value_sig0442.hideRootControls && var_core_value_sig75FC.parentNodeId == null && var_core_value_sigC69F != null && var_core_value_sigC69F.has(var_core_value_sig639A)) {
      this._removeObject();
      return;
    }
    let var_core_value_sig567C = this._resolveControlBounds(var_core_value_sig9678, var_core_value_sig4524.unitId, var_core_value_sig64D5, var_core_value_sigC69F);
    if (!var_core_value_sig567C) {
      this._removeObject();
      return;
    }
    let var_core_value_sig825F = Object.values(var_core_value_sig9678).filter(var_core_value_sig1614 => {
        var var_core_value_sig85C3;
        return ((var_core_value_sig85C3 = (0, t.getMindMapNodeMeta)(var_core_value_sig1614.element)) == null ? undefined : var_core_value_sig85C3.parentNodeId) === var_core_value_sig64D5;
      }),
      var_core_value_sig546D = var_core_value_sig75FC.collapsed ? this._countDescendants(var_core_value_sig9678, var_core_value_sig64D5) : 0;
    this._activeNodeId = var_core_value_sig64D5, this._activeScopeId = var_core_value_sig75FC.structureScopeId;
    let var_core_value_sig8078 = (var_core_value_sig697A = var_core_value_sig9678[var_core_value_sig75FC.structureScopeId]) == null ? undefined : var_core_value_sig697A.element,
      var_core_value_sigDCED = (0, t.getMindMapContainerMeta)(var_core_value_sig8078),
      var_core_value_sig2829 = var_core_value_sig8078 == null || (var_core_value_sigDB65 = var_core_value_sig8078.custom) == null || (var_core_value_sigDB65 = var_core_value_sigDB65.mindmap) == null || (var_core_value_sigDB65 = var_core_value_sigDB65.layout) == null ? undefined : var_core_value_sigDB65.structureKind,
      var_core_value_sig6EE2 = (var_core_value_sigDCED == null ? undefined : var_core_value_sigDCED.layout["structureKind"]) ?? var_core_value_sig2829,
      var_core_value_sig4CCC = var_core_value_sig75FC.parentNodeId == null,
      var_core_value_sig6E47 = this._resolveControlSide(var_core_value_sig75FC.side, var_core_value_sig4CCC, var_core_value_sig6EE2);
    this._ensureObject().updateState({
      controls: nt({
        bounds: var_core_value_sig567C,
        isRoot: var_core_value_sig4CCC,
        side: var_core_value_sig6E47,
        rootChildSides: this._resolveRootChildControlSides(var_core_value_sig4CCC, var_core_value_sig6EE2),
        hasChildren: var_core_value_sig825F.length > 0,
        collapsedDescendantCount: var_core_value_sig546D
      })
    }), this._renderContext["scene"].makeDirty(true);
  }
  _resolveControlSide(var_core_value_sigB64D, var_core_value_sig2407, var_core_value_sigE4D0) {
    return var_core_value_sigE4D0 === "timeline-vertical" ? !var_core_value_sig2407 && (var_core_value_sigB64D === "left" || var_core_value_sigB64D === "right") ? var_core_value_sigB64D : "bottom" : var_core_value_sigE4D0 === "mindmap-vertical" ? !var_core_value_sig2407 && (var_core_value_sigB64D === "top" || var_core_value_sigB64D === "bottom") ? var_core_value_sigB64D : "bottom" : var_core_value_sigB64D === "left" ? "left" : "right";
  }
  _resolveRootChildControlSides(var_core_value_sigD5F1, var_core_value_sigBC19) {
    if (var_core_value_sigD5F1) {
      if (st(var_core_value_sigBC19)) return ["bottom"];
      if (var_core_value_sigBC19 === "timeline-horizontal") return ["right"];
      if (var_core_value_sigBC19 === "timeline-vertical") return ["bottom"];
    }
  }
  _resolveCreateChildSide(var_core_value_sig4F3C) {
    var var_core_value_sig8D44, var_core_value_sig1660;
    let var_core_value_sigEE7B = this._elementStateService["getSnapshot"]().context;
    if (!var_core_value_sigEE7B || !this._activeNodeId) return;
    let var_core_value_sig44DF = this._boardElementService["getElementData"](var_core_value_sigEE7B.unitId, var_core_value_sigEE7B.subUnitId),
      var_core_value_sig7E48 = (0, t.getMindMapNodeMeta)((var_core_value_sig8D44 = var_core_value_sig44DF[this._activeNodeId]) == null ? undefined : var_core_value_sig8D44.element),
      var_core_value_sig7B9E = var_core_value_sig7E48 ? (0, t.getMindMapContainerMeta)((var_core_value_sig1660 = var_core_value_sig44DF[var_core_value_sig7E48.structureScopeId]) == null ? undefined : var_core_value_sig1660.element) : null;
    if (!((var_core_value_sig7E48 == null ? undefined : var_core_value_sig7E48.parentNodeId) == null && (st(var_core_value_sig7B9E == null ? undefined : var_core_value_sig7B9E.layout["structureKind"]) || ct(var_core_value_sig7B9E == null ? undefined : var_core_value_sig7B9E.layout["structureKind"])))) return var_core_value_sig4F3C === "add-child-left" ? "left" : var_core_value_sig4F3C === "add-child-top" ? "top" : var_core_value_sig4F3C === "add-child-bottom" ? "bottom" : "right";
  }
  _resolveControlBounds(var_core_value_sig5C3B, var_core_value_sig4002, var_core_value_sig4153, var_core_value_sig2825) {
    var var_core_value_sig5FD01, var_core_value_sigA7E3;
    let var_core_value_sigA784 = (0, n.getBoardElementRenderObjectKey)(var_core_value_sig4002, var_core_value_sig4153),
      var_core_value_sig4406 = var_core_value_sig2825 == null ? undefined : var_core_value_sig2825.get(var_core_value_sigA784),
      var_core_value_sig6806 = this._toFiniteBounds(var_core_value_sig4406);
    if (var_core_value_sig6806) return var_core_value_sig6806;
    let var_core_value_sigD4AA = this._renderContext["scene"],
      var_core_value_sigDC41 = ((var_core_value_sig5FD01 = var_core_value_sigD4AA.getObjectIncludeInGroup) == null ? undefined : var_core_value_sig5FD01.call(var_core_value_sigD4AA, var_core_value_sigA784)) ?? ((var_core_value_sigA7E3 = var_core_value_sigD4AA.getObject) == null ? undefined : var_core_value_sigA7E3.call(var_core_value_sigD4AA, var_core_value_sigA784));
    return this._toFiniteBounds(var_core_value_sigDC41) || (0, e.resolveBoardElementWorldBounds)(var_core_value_sig5C3B, var_core_value_sig4153);
  }
  _toFiniteBounds(var_core_value_sigFB47) {
    return var_core_value_sigFB47 && Number.isFinite(var_core_value_sigFB47.left) && Number.isFinite(var_core_value_sigFB47.top) && Number.isFinite(var_core_value_sigFB47.width) && Number.isFinite(var_core_value_sigFB47.height) ? {
      left: var_core_value_sigFB47.left,
      top: var_core_value_sigFB47.top,
      width: var_core_value_sigFB47.width,
      height: var_core_value_sigFB47.height
    } : null;
  }
  _countDescendants(var_core_value_sig9B3D1, var_core_value_sigC1CF) {
    return Object.values(var_core_value_sig9B3D1).filter(var_core_value_sigB996 => {
      var var_core_value_sig4BBA;
      return ((var_core_value_sig4BBA = (0, t.getMindMapNodeMeta)(var_core_value_sigB996.element)) == null ? undefined : var_core_value_sig4BBA.parentNodeId) === var_core_value_sigC1CF;
    }).reduce((var_core_value_sig6201, var_core_value_sig5151) => var_core_value_sig6201 + 1 + this._countDescendants(var_core_value_sig9B3D1, var_core_value_sig5151.elementId), 0);
  }
  _handlePointerMove(var_core_value_sigEE12) {
    if (!this._object) return;
    let var_core_value_sigD70C = this._stateService["getState"](),
      var_core_value_sigF047 = lt(var_core_value_sigEE12, {
        panOffset: var_core_value_sigD70C.viewportPanOffset,
        zoomRatio: var_core_value_sigD70C.zoomRatio
      });
    this._object["setHoveredControl"](this._object["getHitControl"](var_core_value_sigF047));
  }
  _handlePointerDown(var_core_value_sigC2F9) {
    if (!this._object || !this._activeNodeId || (var_core_value_sigC2F9.button ?? 0) !== 0) return false;
    let var_core_value_sig1F51 = this._elementStateService["getSnapshot"]().context;
    if (!var_core_value_sig1F51) return false;
    let var_core_value_sig29F5 = this._stateService["getState"](),
      var_core_value_sig5A51 = lt(var_core_value_sigC2F9, {
        panOffset: var_core_value_sig29F5.viewportPanOffset,
        zoomRatio: var_core_value_sig29F5.zoomRatio
      }),
      var_core_value_sigF1D1 = this._object["getHitControl"](var_core_value_sig5A51);
    if (!var_core_value_sigF1D1) return false;
    if (var_core_value_sigF1D1.kind === "toggle-collapse") return this._executeAndLayout(t.ToggleMindMapNodeCollapseOperation["id"], {
      unitId: var_core_value_sig1F51.unitId,
      subUnitId: var_core_value_sig1F51.subUnitId,
      nodeId: this._activeNodeId
    }), true;
    if (var_core_value_sigF1D1.kind === "add-child-left" || var_core_value_sigF1D1.kind === "add-child-right" || var_core_value_sigF1D1.kind === "add-child-top" || var_core_value_sigF1D1.kind === "add-child-bottom") {
      let var_core_value_sigB542 = (0, i.generateRandomId)(6);
      return this._executeCreateAndEdit(t.AddMindMapChildOperation["id"], {
        unitId: var_core_value_sig1F51.unitId,
        subUnitId: var_core_value_sig1F51.subUnitId,
        parentNodeId: this._activeNodeId,
        side: this._resolveCreateChildSide(var_core_value_sigF1D1.kind),
        nodeId: var_core_value_sigB542,
        connectorId: (0, i.generateRandomId)(6),
        text: this._localeService["t"]("boards-mind-ui.panel.addText")
      }, var_core_value_sigB542), true;
    }
    if (var_core_value_sigF1D1.kind === "add-sibling-before" || var_core_value_sigF1D1.kind === "add-sibling-after") {
      let var_core_value_sigBB6C = (0, i.generateRandomId)(6);
      return this._executeCreateAndEdit(t.AddMindMapSiblingOperation["id"], {
        unitId: var_core_value_sig1F51.unitId,
        subUnitId: var_core_value_sig1F51.subUnitId,
        nodeId: this._activeNodeId,
        placement: var_core_value_sigF1D1.placement ?? (var_core_value_sigF1D1.kind === "add-sibling-before" ? "before" : "after"),
        siblingNodeId: var_core_value_sigBB6C,
        connectorId: (0, i.generateRandomId)(6),
        text: this._localeService["t"]("boards-mind-ui.panel.addText")
      }, var_core_value_sigBB6C), true;
    }
    return true;
  }
  _isControlEvent(var_core_value_sig370E) {
    if (!this._object || (var_core_value_sig370E.button ?? 0) !== 0) return false;
    let var_core_value_sigDE14 = this._stateService["getState"](),
      var_core_value_sig02CB = lt(var_core_value_sig370E, {
        panOffset: var_core_value_sigDE14.viewportPanOffset,
        zoomRatio: var_core_value_sigDE14.zoomRatio
      });
    return !!this._object["getHitControl"](var_core_value_sig02CB);
  }
  _consumeControlEvent(var_core_value_sig6CBB, var_core_value_sig68DA) {
    var var_core_value_sig64D8, var_core_value_sigD755;
    var_core_value_sig68DA.stopPropagation(), (var_core_value_sig64D8 = var_core_value_sig6CBB.preventDefault) == null || var_core_value_sig64D8.call(var_core_value_sig6CBB), (var_core_value_sigD755 = var_core_value_sig6CBB.stopPropagation) == null || var_core_value_sigD755.call(var_core_value_sig6CBB);
  }
  _executeAndLayout(var_core_value_sigF897, var_core_value_sigA578) {
    let var_core_value_sig0260 = this._activeScopeId;
    this._undoRedoGroupService["run"](var_core_value_sigA578.unitId, () => {
      !this._commandService["syncExecuteCommand"](var_core_value_sigF897, var_core_value_sigA578) || !var_core_value_sig0260 || (this._commandService["syncExecuteCommand"](t.LayoutMindMapOperation["id"], {
        unitId: var_core_value_sigA578.unitId,
        subUnitId: var_core_value_sigA578.subUnitId,
        scopeId: var_core_value_sig0260
      }), this._syncControls());
    });
  }
  _executeCreateAndEdit(var_core_value_sig034D, var_core_value_sig89EC, var_core_value_sig9975) {
    let var_core_value_sigD6D9 = {
        unitId: var_core_value_sig89EC.unitId,
        subUnitId: var_core_value_sig89EC.subUnitId
      },
      var_core_value_sig2637 = this._commandService["executeCommand"](var_core_value_sig034D, var_core_value_sig89EC);
    Promise.resolve(var_core_value_sig2637).then(var_core_value_sigE2BF => {
      var_core_value_sigE2BF && (this._syncControls(), this._elementStateService["selectElements"](var_core_value_sigD6D9, [var_core_value_sig9975], var_core_value_sig9975), this._boardTextEditingService["ignoreExternalFocusChanges"](), this._boardTextEditingService["setEditing"]({
        ...var_core_value_sigD6D9,
        shapeId: var_core_value_sig9975,
        shapeKey: (0, n.getBoardElementRenderObjectKey)(var_core_value_sigD6D9.unitId, var_core_value_sig9975),
        visible: true
      }));
    });
  }
};
ut = S([x(1, (0, i.Inject)(e.IBoardElementService)), x(2, (0, i.Inject)(n.IBoardElementStateService)), x(3, (0, i.Inject)(n.IBoardUIStateService)), x(4, i.ICommandService), x(5, (0, i.Inject)(n.BoardTextEditingService)), x(6, (0, i.Inject)(i.LocaleService)), x(7, (0, i.Inject)(J)), x(8, (0, i.Inject)(s.UndoRedoGroupService))], ut);
const dt = "FOCUSING_MIND_MAP_TEXT_EDITOR";
let X = class extends i.RxDisposable {
  constructor(var_core_value_sigAF1D, var_core_value_sigC92D) {
    super(), this._commandService = var_core_value_sigAF1D, this._shortcutService = var_core_value_sigC92D, this._init();
  }
  _init() {
    this.disposeWithMe(this._shortcutService["registerShortcut"](this._createQuoteShortcut()));
  }
  _createQuoteShortcut() {
    return {
      id: c.SHAPE_TEXT_EDITOR_QUOTE_COMMAND_ID,
      binding: s.KeyCode["ENTER"] | s.MetaKeys["SHIFT"],
      priority: 1000,
      preconditions: var_core_value_sigB8C7 => var_core_value_sigB8C7.getContextValue("FOCUSING_MIND_MAP_TEXT_EDITOR") && this._commandService["hasCommand"](c.SHAPE_TEXT_EDITOR_QUOTE_COMMAND_ID)
    };
  }
};
X = S([x(0, i.ICommandService), x(1, s.IShortcutService)], X);
const ft = [ue, de, dt];
let pt = class extends i.RxDisposable {
  constructor(var_core_value_sigEA3D, var_core_value_sig2841, var_core_value_sig9FE1, var_core_value_sig9DAA, var_core_value_sig1F8A) {
    super(), this._renderContext = var_core_value_sigEA3D, this._boardElementService = var_core_value_sig2841, this._elementStateService = var_core_value_sig9FE1, this._textEditingService = var_core_value_sig9DAA, this._contextService = var_core_value_sig1F8A, b(this, "_isActive", false), this.disposeWithMe((0, i.toDisposable)(this._renderContext["activated$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(var_core_value_sigA56E => {
      this._isActive = var_core_value_sigA56E, this._syncContext();
    }))), this.disposeWithMe((0, i.toDisposable)(this._elementStateService["state$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(() => {
      this._syncContext();
    }))), this.disposeWithMe((0, i.toDisposable)(this._textEditingService["editingParams$"].pipe((0, o.takeUntil)(this.dispose$)).subscribe(() => {
      this._syncContext();
    }))), this._syncContext();
  }
  _syncContext() {
    var var_core_value_sigEBB4, var_core_value_sig2B74;
    let var_core_value_sig0483 = this._elementStateService["getSnapshot"](),
      var_core_value_sig4A48 = this._textEditingService["getEditing"](),
      var_core_value_sigD170 = var_core_value_sig4A48 != null && var_core_value_sig4A48.visible ? var_core_value_sig4A48.shapeId : var_core_value_sig0483.activeEditingId,
      var_core_value_sig90E5 = var_core_value_sig0483.focusedId ?? var_core_value_sig0483.selectedIds[0],
      var_core_value_sig7000 = var_core_value_sig0483.context ?? {
        unitId: this._renderContext["unitId"],
        subUnitId: this._renderContext["unit"].getActivePageId()
      },
      var_core_value_sigD7C5 = this._isActive && !!var_core_value_sig90E5 && var_core_value_sig0483.selectedIds["length"] === 1 && !var_core_value_sigD170 && !var_core_value_sig0483.isTransforming,
      var_core_value_sig3633 = this._isActive ? this._boardElementService["getElementData"](var_core_value_sig7000.unitId, var_core_value_sig7000.subUnitId) : {};
    this._contextService["setContextValue"](ue, var_core_value_sigD7C5 && !!(0, t.getMindMapNodeMeta)((var_core_value_sigEBB4 = var_core_value_sig3633[var_core_value_sig90E5]) == null ? undefined : var_core_value_sigEBB4.element)), this._contextService["setContextValue"](de, this._isActive && var_core_value_sig0483.selectedIds["length"] === 0 && !var_core_value_sig0483.focusedId && !var_core_value_sigD170 && !var_core_value_sig0483.isTransforming), this._contextService["setContextValue"](dt, !!var_core_value_sigD170 && !!(0, t.getMindMapNodeMeta)((var_core_value_sig2B74 = var_core_value_sig3633[var_core_value_sigD170]) == null ? undefined : var_core_value_sig2B74.element));
  }
  dispose() {
    this._resetContext(), super.dispose();
  }
  _resetContext() {
    ft.forEach(var_core_value_sig1998 => this._contextService["setContextValue"](var_core_value_sig1998, false));
  }
};
pt = S([x(1, (0, i.Inject)(e.IBoardElementService)), x(2, (0, i.Inject)(n.IBoardElementStateService)), x(3, (0, i.Inject)(n.BoardTextEditingService)), x(4, i.IContextService)], pt);
const mt = ["structure", "layout", "importExport"];
t.MIND_MAP_DEFAULT_LAYOUT["horizontalGap"], t.MIND_MAP_DEFAULT_LAYOUT["siblingGap"], t.MIND_MAP_DEFAULT_LAYOUT["branchGap"];
const ht = [{
    labelKey: "boards-mind-ui.panel.spacing.parentGap",
    key: "horizontalGap",
    ...t.MIND_MAP_LAYOUT_SPACING_LIMITS["horizontalGap"]
  }, {
    labelKey: "boards-mind-ui.panel.spacing.siblingGap",
    key: "siblingGap",
    ...t.MIND_MAP_LAYOUT_SPACING_LIMITS["siblingGap"]
  }, {
    labelKey: "boards-mind-ui.panel.spacing.branchGap",
    key: "branchGap",
    ...t.MIND_MAP_LAYOUT_SPACING_LIMITS["branchGap"]
  }],
  gt = [{
    labelKey: "boards-mind-ui.panel.layout.right",
    value: "right"
  }, {
    labelKey: "boards-mind-ui.panel.layout.left",
    value: "left"
  }, {
    labelKey: "boards-mind-ui.panel.layout.both",
    value: "both"
  }],
  _t = [{
    labelKey: "boards-mind-ui.panel.structureKind.mindmapHorizontal",
    value: "mindmap-horizontal"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.mindmapVertical",
    value: "mindmap-vertical"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.treeRight",
    value: "tree-right"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.treeLeft",
    value: "tree-left"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.treeAlternate",
    value: "tree-alternate"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.timelineHorizontal",
    value: "timeline-horizontal"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.timelineVertical",
    value: "timeline-vertical"
  }],
  vt = [{
    labelKey: "boards-mind-ui.panel.branchLineType.curve",
    value: "curve"
  }, {
    labelKey: "boards-mind-ui.panel.branchLineType.roundedOrthogonal",
    value: "rounded-orthogonal"
  }, {
    labelKey: "boards-mind-ui.panel.branchLineType.orthogonal",
    value: "orthogonal"
  }];
function yt(var_core_value_sigE025) {
  let var_core_value_sigD549 = (var_core_value_sigE025 == null ? undefined : var_core_value_sigE025.structureKind) ?? t.MIND_MAP_DEFAULT_LAYOUT["structureKind"];
  return {
    spacing: {
      horizontalGap: (var_core_value_sigE025 == null ? undefined : var_core_value_sigE025.horizontalGap) ?? t.MIND_MAP_DEFAULT_LAYOUT["horizontalGap"],
      siblingGap: (var_core_value_sigE025 == null ? undefined : var_core_value_sigE025.siblingGap) ?? t.MIND_MAP_DEFAULT_LAYOUT["siblingGap"],
      branchGap: (var_core_value_sigE025 == null ? undefined : var_core_value_sigE025.branchGap) ?? t.MIND_MAP_DEFAULT_LAYOUT["branchGap"]
    },
    direction: (var_core_value_sigE025 == null ? undefined : var_core_value_sigE025.direction) ?? t.MIND_MAP_DEFAULT_LAYOUT["direction"],
    structureKind: var_core_value_sigD549,
    branchLineType: (0, t.resolveMindMapBranchLineTypeForStructure)(var_core_value_sigD549, var_core_value_sigE025 == null ? undefined : var_core_value_sigE025.branchLineType)
  };
}
async function bt(var_core_value_sigC79E, var_core_value_sig9221) {
  return (await Promise.resolve(var_core_value_sigC79E.executeCommand(t.ChangeMindMapLayoutOperation["id"], var_core_value_sig9221))) ? (await Promise.resolve(var_core_value_sigC79E.executeCommand(t.LayoutMindMapOperation["id"], {
    unitId: var_core_value_sig9221.unitId,
    subUnitId: var_core_value_sig9221.subUnitId,
    scopeId: var_core_value_sig9221.scopeId
  })), true) : false;
}
async function xt(var_core_value_sig0351, var_core_value_sig4686) {
  return (await Promise.resolve(var_core_value_sig0351.executeCommand(t.ChangeMindMapBranchLineTypeOperation["id"], var_core_value_sig4686))) ? (await Promise.resolve(var_core_value_sig0351.executeCommand(t.LayoutMindMapOperation["id"], {
    unitId: var_core_value_sig4686.unitId,
    subUnitId: var_core_value_sig4686.subUnitId,
    scopeId: var_core_value_sig4686.scopeId
  })), true) : false;
}
async function St(var_core_value_sig8E1C, var_core_value_sigD719) {
  return (await Promise.resolve(var_core_value_sig8E1C.executeCommand(t.ChangeMindMapLayoutOperation["id"], {
    unitId: var_core_value_sigD719.unitId,
    subUnitId: var_core_value_sigD719.subUnitId,
    scopeId: var_core_value_sigD719.scopeId,
    ...(var_core_value_sigD719.horizontalGap === undefined ? {} : {
      horizontalGap: var_core_value_sigD719.horizontalGap
    }),
    ...(var_core_value_sigD719.siblingGap === undefined ? {} : {
      siblingGap: var_core_value_sigD719.siblingGap
    }),
    ...(var_core_value_sigD719.branchGap === undefined ? {} : {
      branchGap: var_core_value_sigD719.branchGap
    })
  }))) ? (await Promise.resolve(var_core_value_sig8E1C.executeCommand(t.LayoutMindMapOperation["id"], {
    unitId: var_core_value_sigD719.unitId,
    subUnitId: var_core_value_sigD719.subUnitId,
    scopeId: var_core_value_sigD719.scopeId
  })), true) : false;
}
async function Ct(var_core_value_sig323C, var_core_value_sig015D) {
  return var_core_value_sig015D.nodeId === var_core_value_sig015D.targetNodeId || !(await Promise.resolve(var_core_value_sig323C.executeCommand(t.ReparentMindMapNodeOperation["id"], {
    unitId: var_core_value_sig015D.unitId,
    subUnitId: var_core_value_sig015D.subUnitId,
    nodeId: var_core_value_sig015D.nodeId,
    targetNodeId: var_core_value_sig015D.targetNodeId,
    referenceNodeId: var_core_value_sig015D.targetNodeId,
    placement: var_core_value_sig015D.placement
  }))) ? false : (await Promise.resolve(var_core_value_sig323C.executeCommand(t.LayoutMindMapOperation["id"], {
    unitId: var_core_value_sig015D.unitId,
    subUnitId: var_core_value_sig015D.subUnitId,
    scopeId: var_core_value_sig015D.scopeId
  })), true);
}
async function wt(var_core_value_sigBF8B, var_core_value_sigF7CE) {
  let var_core_value_sig7CF1 = var_core_value_sigF7CE.text["trim"]();
  return !var_core_value_sig7CF1 || !(await Promise.resolve(var_core_value_sigBF8B.executeCommand(t.UpdateMindMapNodeOperation["id"], {
    unitId: var_core_value_sigF7CE.unitId,
    subUnitId: var_core_value_sigF7CE.subUnitId,
    nodeId: var_core_value_sigF7CE.nodeId,
    text: var_core_value_sig7CF1
  }))) ? false : (await Promise.resolve(var_core_value_sigBF8B.executeCommand(t.LayoutMindMapOperation["id"], {
    unitId: var_core_value_sigF7CE.unitId,
    subUnitId: var_core_value_sigF7CE.subUnitId,
    scopeId: var_core_value_sigF7CE.scopeId
  })), true);
}
async function Tt(var_core_value_sigA552) {
  var var_core_value_sigAE32;
  let var_core_value_sig9B4D = (var_core_value_sigAE32 = globalThis.navigator) == null ? undefined : var_core_value_sigAE32.clipboard;
  return var_core_value_sig9B4D != null && var_core_value_sig9B4D.writeText ? (await var_core_value_sig9B4D.writeText(var_core_value_sigA552), true) : false;
}
async function Et(var_core_value_sig2704, var_core_value_sigD0CC, var_core_value_sigF347 = Tt) {
  let var_core_value_sig80C6 = await Promise.resolve(var_core_value_sig2704.executeCommand(t.ExportMindMapOpmlOperation["id"], var_core_value_sigD0CC));
  if (typeof var_core_value_sig80C6 != "string" || !var_core_value_sig80C6) return false;
  try {
    return (await var_core_value_sigF347(var_core_value_sig80C6)) !== false;
  } catch {
    return false;
  }
}
async function Dt(var_core_value_sigEBFB, var_core_value_sigF3BF) {
  if (!var_core_value_sigF3BF.opml["trim"]()) return false;
  let var_core_value_sigAE58 = await Promise.resolve(var_core_value_sigEBFB.executeCommand(t.ImportMindMapOpmlOperation["id"], var_core_value_sigF3BF));
  return typeof var_core_value_sigAE58 == "object" && !!var_core_value_sigAE58 && var_core_value_sigAE58.success === true;
}
function Ot(var_core_value_sig8E13, var_core_value_sig3AAF) {
  let var_core_value_sig134E = var_core_value_sig3AAF.trim().toLowerCase();
  return var_core_value_sig134E ? var_core_value_sig8E13.filter(var_core_value_sig1DF5 => var_core_value_sig1DF5.text["toLowerCase"]().includes(var_core_value_sig134E)) : var_core_value_sig8E13;
}
function kt(var_core_value_sigA3C0) {
  return {
    paddingInlineStart: 8 + (Number.isFinite(var_core_value_sigA3C0) && var_core_value_sigA3C0 > 0 ? var_core_value_sigA3C0 : 0) * 16
  };
}
function At(var_core_value_sig723F) {
  return (0, p.jsxs)("section", {
    className: (0, u.clsx)("univer-border-b univer-border-gray-200 univer-p-4", u.borderClassName),
    "data-board-mind-map-panel-section": "true",
    children: [(0, p.jsx)("h3", {
      className: "univer-mb-3 univer-text-sm univer-font-semibold univer-text-gray-900 dark:!univer-text-gray-100",
      children: var_core_value_sig723F.title
    }), var_core_value_sig723F.children]
  });
}
function jt(var_core_value_sigD044) {
  let var_core_value_sig9797 = (0, s.useDependency)(i.ICommandService),
    var_core_value_sig8533 = (0, s.useDependency)(n.IBoardElementStateService),
    var_core_value_sig57C5 = (0, s.useDependency)(i.LocaleService),
    var_core_value_sig0DE9 = var_core_value_sigD044.outlineItems ?? [],
    [var_core_value_sigB00D, var_core_value_sig57C8] = (0, f.useState)(""),
    [var_core_value_sigC27D, var_core_value_sig7B95] = (0, f.useState)(null),
    [var_core_value_sig7D59, var_core_value_sig5863] = (0, f.useState)(""),
    var_core_value_sig5BE7 = yt(var_core_value_sigD044.layout),
    [var_core_value_sigC74A, var_core_value_sig8F6A] = (0, f.useState)(var_core_value_sig5BE7.spacing),
    [var_core_value_sig46EA, var_core_value_sig626C] = (0, f.useState)(var_core_value_sig5BE7.direction),
    [var_core_value_sig9077, var_core_value_sigC76C] = (0, f.useState)(var_core_value_sig5BE7.structureKind),
    [var_core_value_sigB23A, var_core_value_sigBA66] = (0, f.useState)(var_core_value_sig5BE7.branchLineType),
    [var_core_value_sig3DF0, var_core_value_sig0512] = (0, f.useState)({
      layout: var_core_value_sigD044.layout,
      scopeId: var_core_value_sigD044.scopeId
    }),
    [var_core_value_sig4B2B, var_core_value_sigDF88] = (0, f.useState)(null),
    [var_core_value_sigDB93, var_core_value_sig67CF] = (0, f.useState)("structure"),
    var_core_value_sigCA96 = Ot(var_core_value_sig0DE9, var_core_value_sigB00D),
    var_core_value_sig6C5E = {
      unitId: var_core_value_sigD044.unitId,
      subUnitId: var_core_value_sigD044.subUnitId,
      scopeId: var_core_value_sigD044.scopeId
    },
    var_core_value_sig4997 = mt.map(var_core_value_sig90A3 => ({
      label: var_core_value_sig57C5.t("boards-mind-ui.panel.tab." + var_core_value_sig90A3),
      value: var_core_value_sig90A3
    })),
    var_core_value_sig7290 = vt.filter(var_core_value_sig28BE => var_core_value_sig28BE.value !== "curve" || (0, t.isMindMapPlainStructureKind)(var_core_value_sig9077)),
    var_core_value_sigE835 = var_core_value_sig0224 => {
      var_core_value_sig626C(var_core_value_sig0224), bt(var_core_value_sig9797, {
        ...var_core_value_sig6C5E,
        direction: var_core_value_sig0224
      });
    };
  if (var_core_value_sig3DF0.layout !== var_core_value_sigD044.layout || var_core_value_sig3DF0.scopeId !== var_core_value_sigD044.scopeId) {
    let var_core_value_sig854B = yt(var_core_value_sigD044.layout);
    var_core_value_sig0512({
      layout: var_core_value_sigD044.layout,
      scopeId: var_core_value_sigD044.scopeId
    }), var_core_value_sig8F6A(var_core_value_sig854B.spacing), var_core_value_sig626C(var_core_value_sig854B.direction), var_core_value_sigC76C(var_core_value_sig854B.structureKind), var_core_value_sigBA66(var_core_value_sig854B.branchLineType);
  }
  let var_core_value_sig4644 = var_core_value_sig1FF6 => {
      let var_core_value_sig4B27 = (0, t.resolveMindMapBranchLineTypeForStructure)(var_core_value_sig1FF6, var_core_value_sigB23A);
      var_core_value_sigC76C(var_core_value_sig1FF6), var_core_value_sigBA66(var_core_value_sig4B27), bt(var_core_value_sig9797, {
        ...var_core_value_sig6C5E,
        structureKind: var_core_value_sig1FF6,
        ...(var_core_value_sig4B27 === var_core_value_sigB23A ? null : {
          branchLineType: var_core_value_sig4B27
        })
      });
    },
    var_core_value_sig9DED = var_core_value_sig3A41 => {
      let var_core_value_sig269A = (0, t.resolveMindMapBranchLineTypeForStructure)(var_core_value_sig9077, var_core_value_sig3A41);
      var_core_value_sigBA66(var_core_value_sig269A), xt(var_core_value_sig9797, {
        ...var_core_value_sig6C5E,
        branchLineType: var_core_value_sig269A
      });
    },
    var_core_value_sig7DE6 = (var_core_value_sigBF53, var_core_value_sigD9BB) => {
      let var_core_value_sigF549 = {
        ...var_core_value_sigC74A,
        [var_core_value_sigBF53]: var_core_value_sigD9BB
      };
      var_core_value_sig8F6A(var_core_value_sigF549), St(var_core_value_sig9797, {
        ...var_core_value_sig6C5E,
        ...var_core_value_sigF549
      });
    },
    var_core_value_sig120E = () => {
      Dt(var_core_value_sig9797, {
        unitId: var_core_value_sigD044.unitId,
        subUnitId: var_core_value_sigD044.subUnitId,
        left: 120,
        top: 120,
        opml: var_core_value_sig7D59
      }).then(var_core_value_sigFF19 => {
        var_core_value_sigFF19 && var_core_value_sig5863("");
      });
    },
    var_core_value_sigD79B = () => {
      Et(var_core_value_sig9797, var_core_value_sig6C5E);
    },
    var_core_value_sig92A3 = (var_core_value_sigC125, var_core_value_sigB63D) => {
      var_core_value_sig7B95({
        nodeId: var_core_value_sigC125,
        text: var_core_value_sigB63D
      });
    },
    var_core_value_sig8911 = () => {
      var_core_value_sigC27D && wt(var_core_value_sig9797, {
        ...var_core_value_sig6C5E,
        nodeId: var_core_value_sigC27D.nodeId,
        text: var_core_value_sigC27D.text
      }).then(var_core_value_sig43B8 => {
        var_core_value_sig43B8 && var_core_value_sig7B95(null);
      });
    },
    var_core_value_sig8D1B = (var_core_value_sig8255, var_core_value_sigBFC7) => {
      if (var_core_value_sig8255.preventDefault(), !var_core_value_sig4B2B || var_core_value_sig4B2B === var_core_value_sigBFC7) return;
      let var_core_value_sig933F = var_core_value_sig8255.currentTarget["getBoundingClientRect"](),
        var_core_value_sig29DE = var_core_value_sig8255.clientY < var_core_value_sig933F.top + var_core_value_sig933F.height / 2 ? "before" : "after";
      var_core_value_sigDF88(null), Ct(var_core_value_sig9797, {
        ...var_core_value_sig6C5E,
        nodeId: var_core_value_sig4B2B,
        targetNodeId: var_core_value_sigBFC7,
        placement: var_core_value_sig29DE
      });
    };
  return (0, p.jsxs)("div", {
    className: "univer-size-full univer-bg-gray-0 univer-text-sm univer-text-gray-700 dark:!univer-bg-gray-900 dark:!univer-text-gray-200",
    "data-board-mind-map-panel": "true",
    children: [(0, p.jsx)("div", {
      className: (0, u.clsx)("univer-border-b univer-border-gray-200 univer-p-3", u.borderClassName),
      "data-board-mind-map-panel-tabs": "true",
      children: (0, p.jsx)(u.Segmented, {
        className: "univer-w-full univer-text-xs",
        items: var_core_value_sig4997,
        value: var_core_value_sigDB93,
        onChange: var_core_value_sig4AFB => var_core_value_sig67CF(var_core_value_sig4AFB)
      })
    }), var_core_value_sigDB93 === "structure" && (0, p.jsx)(At, {
      title: var_core_value_sig57C5.t("boards-mind-ui.panel.tab.structure"),
      children: (0, p.jsxs)("div", {
        children: [(0, p.jsx)(u.Input, {
          slot: (0, p.jsx)(d.SearchIcon, {}),
          value: var_core_value_sigB00D,
          placeholder: var_core_value_sig57C5.t("boards-mind-ui.panel.searchNodes"),
          className: "univer-mb-3 univer-w-full",
          onChange: var_core_value_sig57C8
        }), var_core_value_sigCA96.length ? (0, p.jsx)("ol", {
          className: "univer-space-y-1",
          children: var_core_value_sigCA96.map(var_core_value_sigC7EA => (0, p.jsx)("li", {
            draggable: true,
            className: "univer-flex univer-items-center univer-gap-1 univer-truncate univer-rounded univer-py-1 univer-text-left univer-text-gray-800",
            style: kt(var_core_value_sigC7EA.depth),
            onDragStart: var_core_value_sigD98F => {
              var var_core_value_sig66C0;
              var_core_value_sigDF88(var_core_value_sigC7EA.nodeId), (var_core_value_sig66C0 = var_core_value_sigD98F.dataTransfer) == null || var_core_value_sig66C0.setData("text/plain", var_core_value_sigC7EA.nodeId), var_core_value_sigD98F.dataTransfer && (var_core_value_sigD98F.dataTransfer["effectAllowed"] = "move");
            },
            onDragOver: var_core_value_sig9D15 => {
              var_core_value_sig9D15.preventDefault(), var_core_value_sig9D15.dataTransfer && (var_core_value_sig9D15.dataTransfer["dropEffect"] = "move");
            },
            onDrop: var_core_value_sigB785 => var_core_value_sig8D1B(var_core_value_sigB785, var_core_value_sigC7EA.nodeId),
            onDragEnd: () => var_core_value_sigDF88(null),
            children: (var_core_value_sigC27D == null ? undefined : var_core_value_sigC27D.nodeId) === var_core_value_sigC7EA.nodeId ? (0, p.jsxs)("div", {
              className: "univer-flex univer-min-w-0 univer-flex-1 univer-items-center univer-gap-1",
              children: [(0, p.jsx)(u.Input, {
                autoFocus: true,
                size: "small",
                value: var_core_value_sigC27D.text,
                onChange: var_core_value_sig130F => var_core_value_sig7B95({
                  nodeId: var_core_value_sigC7EA.nodeId,
                  text: var_core_value_sig130F
                }),
                onKeyDown: var_core_value_sigC0E3 => {
                  var_core_value_sigC0E3.key === "Enter" && var_core_value_sig8911(), var_core_value_sigC0E3.key === "Escape" && var_core_value_sig7B95(null);
                }
              }), (0, p.jsx)(u.Button, {
                size: "small",
                variant: "primary",
                disabled: !var_core_value_sigC27D.text["trim"](),
                onClick: var_core_value_sig8911,
                children: var_core_value_sig57C5.t("boards-mind-ui.panel.rename")
              }), (0, p.jsx)(u.Button, {
                size: "small",
                variant: "default",
                onClick: () => var_core_value_sig7B95(null),
                children: var_core_value_sig57C5.t("boards-mind-ui.panel.cancel")
              })]
            }) : (0, p.jsxs)(p.Fragment, {
              children: [(0, p.jsx)(u.Button, {
                size: "small",
                variant: "ghost",
                className: "univer-min-w-0 univer-flex-1 univer-justify-start univer-truncate univer-text-left",
                onClick: () => var_core_value_sig8533.selectElements({
                  unitId: var_core_value_sigD044.unitId,
                  subUnitId: var_core_value_sigD044.subUnitId
                }, [var_core_value_sigC7EA.nodeId], var_core_value_sigC7EA.nodeId),
                children: var_core_value_sigC7EA.text
              }), (0, p.jsx)(u.Button, {
                className: "univer-text-xs univer-text-gray-500",
                size: "small",
                variant: "default",
                onClick: () => var_core_value_sig92A3(var_core_value_sigC7EA.nodeId, var_core_value_sigC7EA.text),
                children: var_core_value_sig57C5.t("boards-mind-ui.panel.rename")
              })]
            })
          }, var_core_value_sigC7EA.nodeId))
        }) : (0, p.jsx)("div", {
          className: "univer-text-xs univer-text-gray-400 dark:!univer-text-gray-500",
          "data-board-mind-map-panel-empty-state": "true",
          children: var_core_value_sig57C5.t("boards-mind-ui.panel.emptyNodes")
        })]
      })
    }), var_core_value_sigDB93 === "layout" && (0, p.jsx)(At, {
      title: var_core_value_sig57C5.t("boards-mind-ui.panel.tab.layout"),
      children: (0, p.jsxs)("div", {
        className: "univer-space-y-3",
        children: [(0, p.jsx)("div", {
          className: "univer-flex\x20univer-gap-2",
          children: (0, p.jsx)(u.Segmented, {
            className: "univer-w-full univer-text-xs",
            items: _t.map(var_core_value_sigDAB9 => ({
              label: var_core_value_sig57C5.t(var_core_value_sigDAB9.labelKey),
              value: var_core_value_sigDAB9.value
            })),
            value: var_core_value_sig9077,
            onChange: var_core_value_sig9CF7 => var_core_value_sig4644(var_core_value_sig9CF7)
          })
        }), (0, p.jsx)("div", {
          className: "univer-flex univer-gap-2",
          children: (0, p.jsx)(u.Segmented, {
            className: "univer-w-full\x20univer-text-xs",
            items: gt.map(var_core_value_sigCCE5 => ({
              label: var_core_value_sig57C5.t(var_core_value_sigCCE5.labelKey),
              value: var_core_value_sigCCE5.value
            })),
            value: var_core_value_sig46EA,
            onChange: var_core_value_sig5933 => var_core_value_sigE835(var_core_value_sig5933)
          })
        }), (0, p.jsx)("div", {
          className: "univer-flex\x20univer-gap-2",
          children: (0, p.jsx)(u.Segmented, {
            className: "univer-w-full univer-text-xs",
            items: var_core_value_sig7290.map(var_core_value_sig884B => ({
              label: var_core_value_sig57C5.t(var_core_value_sig884B.labelKey),
              value: var_core_value_sig884B.value
            })),
            value: var_core_value_sigB23A,
            onChange: var_core_value_sig4E30 => var_core_value_sig9DED(var_core_value_sig4E30)
          })
        }), (0, p.jsx)("div", {
          className: "univer-space-y-2",
          children: ht.map(({
            labelKey: var_core_value_sig9730,
            key: var_core_value_sig8E4A,
            min: var_core_value_sig300B,
            max: var_core_value_sig8457
          }) => (0, p.jsxs)("label", {
            className: "univer-flex univer-items-center univer-gap-2 univer-text-xs univer-text-gray-600",
            children: [(0, p.jsx)("span", {
              className: "univer-w-20 univer-shrink-0",
              children: var_core_value_sig57C5.t("boards-mind-ui.panel." + var_core_value_sig9730)
            }), (0, p.jsx)(u.InputNumber, {
              min: var_core_value_sig300B,
              max: var_core_value_sig8457,
              step: 4,
              value: var_core_value_sigC74A[var_core_value_sig8E4A],
              precision: 0,
              className: "univer-w-24",
              onChange: var_core_value_sig52F7 => var_core_value_sig7DE6(var_core_value_sig8E4A, Number(var_core_value_sig52F7 ?? var_core_value_sig300B))
            })]
          }, var_core_value_sig8E4A))
        })]
      })
    }), var_core_value_sigDB93 === "importExport" && (0, p.jsx)(At, {
      title: var_core_value_sig57C5.t("boards-mind-ui.panel.tab.importExport"),
      children: (0, p.jsxs)("div", {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
        children: [(0, p.jsx)(u.Textarea, {
          className: "univer-h-28\x20univer-resize-none\x20univer-text-xs",
          placeholder: var_core_value_sig57C5.t("boards-mind-ui.panel.pasteOPML"),
          value: var_core_value_sig7D59,
          onValueChange: var_core_value_sig5863
        }), (0, p.jsxs)("div", {
          className: "univer-flex univer-gap-2",
          children: [(0, p.jsx)(u.Button, {
            size: "small",
            variant: "primary",
            disabled: !var_core_value_sig7D59.trim(),
            onClick: var_core_value_sig120E,
            children: var_core_value_sig57C5.t("boards-mind-ui.panel.importOPML")
          }), (0, p.jsx)(u.Button, {
            size: "small",
            variant: "default",
            onClick: var_core_value_sigD79B,
            children: var_core_value_sig57C5.t("boards-mind-ui.panel.exportOPML")
          })]
        })]
      })
    })]
  });
}
let Z = class extends i.Disposable {
  constructor(var_core_value_sigB30D) {
    super(), this._componentManager = var_core_value_sigB30D, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](se, le)), this.disposeWithMe(this._componentManager["register"](Se, Le)), this.disposeWithMe(this._componentManager["register"]("board.mind-map.panel", jt));
  }
};
Z = S([x(0, (0, i.Inject)(s.ComponentManager))], Z);
let Q = class {
  constructor(var_core_value_sigDB33, var_core_value_sig6C8C, var_core_value_sig7A5E) {
    this._stateService = var_core_value_sigDB33, this._insertStateService = var_core_value_sig6C8C, this._renderManagerService = var_core_value_sig7A5E;
  }
  beginMindMapMode(var_core_value_sig838E) {
    var var_core_value_sig9A5B, var_core_value_sigC860;
    let var_core_value_sigE64C = (var_core_value_sig9A5B = this._renderManagerService["getRenderUnitById"](var_core_value_sig838E.unitId)) == null || (var_core_value_sigC860 = var_core_value_sig9A5B.getInjector) == null ? undefined : var_core_value_sigC860.call(var_core_value_sig9A5B),
      var_core_value_sigF39B = (var_core_value_sigE64C == null ? undefined : var_core_value_sigE64C.get(n.IBoardUIStateService)) ?? this._stateService;
    return ((var_core_value_sigE64C == null ? undefined : var_core_value_sigE64C.get(q)) ?? this._insertStateService).setTemplate({
      rootText: var_core_value_sig838E.rootText,
      structureKind: var_core_value_sig838E.structureKind,
      branchLineType: var_core_value_sig838E.branchLineType,
      children: var_core_value_sig838E.children,
      blueprint: var_core_value_sig838E.blueprint
    }), var_core_value_sigF39B.setShapeSidebarOpen(false), var_core_value_sigF39B.clearPendingInsert(), var_core_value_sigF39B.setActiveTool(e.BoardToolType["MindMap"]), var_core_value_sigF39B.setPendingInsert({
      type: e.BoardToolType["MindMap"]
    }), true;
  }
};
Q = S([x(0, n.IBoardUIStateService), x(1, (0, i.Inject)(q)), x(2, a.IRenderManagerService)], Q);
const Mt = [H],
  Nt = [pt];
let $ = class extends i.Plugin {
  constructor(var_core_value_sig9B88 = g, var_core_value_sig992A, var_core_value_sig6281, var_core_value_sig9B01) {
    super(), this._config = var_core_value_sig9B88, this._injector = var_core_value_sig992A, this._configService = var_core_value_sig6281, this._renderManagerService = var_core_value_sig9B01;
    let {
      ...var_core_value_sigA724
    } = (0, i.merge)({}, g, this._config);
    this._configService["setConfig"]("boards-mind-ui.config", var_core_value_sigA724);
  }
  onStarting() {
    n.UniverBoardsUIPlugin["registerRuntimeScopedDependencies"](this._injector, [[q], [J]]), this._injector["add"]([q]), this._injector["add"]([J]), this._injector["add"]([Q]), this._injector["add"]([W]), this._injector["add"]([X]), this._injector["add"]([Z]);
    let var_core_value_sig385E = this._injector["get"](Q),
      var_core_value_sig10D3 = this._injector["get"](e.IBoardMindMapAdapterService);
    this.disposeWithMe(var_core_value_sig10D3.registerAdapter(var_core_value_sig385E)), this.disposeWithMe(this._injector["get"](W)), this.disposeWithMe(this._injector["get"](X)), this.disposeWithMe(this._injector["get"](Z)), this._enableMindMapToolbarTool();
  }
  onReady() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](i.UniverInstanceType["UNIVER_BOARD"], Mt)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](i.UniverInstanceType["UNIVER_BOARD"], Nt)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](i.UniverInstanceType["UNIVER_BOARD"], Qe)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](i.UniverInstanceType["UNIVER_BOARD"], ut)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](i.UniverInstanceType["UNIVER_BOARD"], ze)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](i.UniverInstanceType["UNIVER_BOARD"], oe)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](i.UniverInstanceType["UNIVER_BOARD"], C)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](i.UniverInstanceType["UNIVER_BOARD"], tt));
  }
  _enableMindMapToolbarTool() {
    var var_core_value_sig41F2, var_core_value_sig32DD;
    let var_core_value_sig7A88 = this._getBoardsUIConfig();
    this._configService["setConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY, {
      ...var_core_value_sig7A88,
      toolbar: {
        ...var_core_value_sig7A88.toolbar,
        tools: {
          ...((var_core_value_sig41F2 = var_core_value_sig7A88.toolbar) == null ? undefined : var_core_value_sig41F2.tools),
          [e.BoardToolType["MindMap"]]: Pt((var_core_value_sig32DD = var_core_value_sig7A88.toolbar) == null || (var_core_value_sig32DD = var_core_value_sig32DD.tools) == null ? undefined : var_core_value_sig32DD[e.BoardToolType["MindMap"]])
        }
      }
    });
  }
  _getBoardsUIConfig() {
    return this._configService["getConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? {};
  }
};
b($, "pluginName", "UNIVER_BOARDS_MIND_UI_PLUGIN"), b($, "packageName", m), b($, "version", h), b($, "type", i.UniverInstanceType["UNIVER_BOARD"]), $ = S([(0, i.DependentOn)(r.UniverLicensePlugin, a.UniverRenderEnginePlugin, e.UniverBoardsPlugin, t.UniverBoardsMindPlugin, n.UniverBoardsUIPlugin), x(1, (0, i.Inject)(i.Injector)), x(2, i.IConfigService), x(3, a.IRenderManagerService)], $);
function Pt(var_core_value_sigA915) {
  return var_core_value_sigA915 === false ? false : typeof var_core_value_sigA915 != "object" || {
    ...var_core_value_sigA915,
    enabled: var_core_value_sigA915.enabled ?? true
  };
}
Object.defineProperty(exports, "UniverBoardsMindUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
