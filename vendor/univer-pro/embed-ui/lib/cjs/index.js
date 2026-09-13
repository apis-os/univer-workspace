Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/boards-print"),
  t = require("@univerjs-pro/embed"),
  n = require("@univerjs-pro/license"),
  r = require("@univerjs-pro/print"),
  i = require("@univerjs-pro/slides-print"),
  a = require("@univerjs/core"),
  o = require("@univerjs/docs-ui"),
  s = require("@univerjs/sheets-ui"),
  c = require("@univerjs/ui"),
  l = require("@univerjs/design"),
  u = require("@univerjs/icons"),
  d = require("react"),
  f = require("rxjs"),
  p = require("@univerjs/engine-render"),
  m = require("react/jsx-runtime"),
  h = require("@univerjs/docs"),
  g = require("@univerjs-pro/slides"),
  _ = require("@univerjs-pro/bases-ui"),
  v = require("@univerjs/sheets"),
  y = require("@univerjs-pro/docs-table-ui"),
  b = require("@univerjs/sheets-note-ui"),
  x = require("@univerjs-pro/boards"),
  S = require("@univerjs-pro/slides-ui"),
  C = require("@univerjs-pro/bases"),
  w = require("react-dom"),
  T = require("@univerjs-pro/boards-ui"),
  E = require("@univerjs-pro/sheets-chart-ui"),
  D = require("@univerjs-pro/sheets-outline-ui"),
  O = require("@univerjs-pro/sheets-pivot-ui"),
  k = require("@univerjs-pro/sheets-print"),
  A = require("@univerjs-pro/sheets-shape-ui"),
  j = require("@univerjs-pro/sheets-sparkline-ui"),
  M = require("@univerjs/sheets-conditional-formatting-ui"),
  N = require("@univerjs/sheets-data-validation-ui"),
  ee = require("@univerjs/sheets-drawing-ui"),
  P = require("@univerjs/sheets-filter-ui"),
  te = require("@univerjs/sheets-hyper-link-ui"),
  F = require("@univerjs/sheets-numfmt-ui"),
  I = require("@univerjs/sheets-sort-ui"),
  ne = require("@univerjs/sheets-table-ui"),
  re = require("@univerjs/sheets-thread-comment-ui");
var ie = "@univerjs-pro/embed-ui",
  L = "1.0.0-insiders.20260907-70fc579";
function R(var_core_value_sig014E, var_core_value_sig57A3) {
  return var_core_value_sig014E.matches("[" + var_core_value_sig57A3 + "]") ? var_core_value_sig014E : var_core_value_sig014E.querySelector("[" + var_core_value_sig57A3 + "]") ?? undefined;
}
function ae(var_core_value_sig4003) {
  let var_core_value_sig9454 = [];
  return oe(var_core_value_sig4003, "data-embed-content-root", "univer-overflow-hidden", var_core_value_sig9454), oe(var_core_value_sig4003, "data-embed-canvas-root", "univer-pointer-events-none\x20univer-overflow-hidden\x20[&>*]:univer-pointer-events-auto", var_core_value_sig9454), oe(var_core_value_sig4003, "data-embed-overlay-root", "univer-pointer-events-none [&>*]:univer-pointer-events-auto", var_core_value_sig9454), oe(var_core_value_sig4003, "data-embed-popup-root", "univer-pointer-events-none [&>*]:univer-pointer-events-auto", var_core_value_sig9454), (0, a.toDisposable)(() => {
    var_core_value_sig9454.forEach(var_core_value_sig7A62 => var_core_value_sig7A62.remove());
  });
}
function oe(var_core_value_sig9B63, var_core_value_sigA86B, var_core_value_sig8CE0, var_core_value_sig2D89) {
  let var_core_value_sig08CE = R(var_core_value_sig9B63, var_core_value_sigA86B);
  if (var_core_value_sig08CE) return var_core_value_sig08CE;
  let var_core_value_sig5C06 = document.createElement("div");
  return var_core_value_sig5C06.setAttribute(var_core_value_sigA86B, "true"), var_core_value_sig5C06.setAttribute("data-embed-runtime-slot-owner", "embed-ui"), var_core_value_sig5C06.className = "univer-box-border univer-absolute univer-inset-0 " + var_core_value_sig8CE0, var_core_value_sig9B63.appendChild(var_core_value_sig5C06), var_core_value_sig2D89.push(var_core_value_sig5C06), var_core_value_sig5C06;
}
function se(var_core_value_sigA267) {
  "@babel/helpers - typeof";

  return se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig6E1C) {
    return typeof var_core_value_sig6E1C;
  } : function (var_core_value_sigFABC) {
    return var_core_value_sigFABC && typeof Symbol == "function" && var_core_value_sigFABC.constructor === Symbol && var_core_value_sigFABC !== Symbol.prototype ? "symbol" : typeof var_core_value_sigFABC;
  }, se(var_core_value_sigA267);
}
function z(var_core_value_sig9E58, var_core_value_sigD105) {
  if (se(var_core_value_sig9E58) != "object" || !var_core_value_sig9E58) return var_core_value_sig9E58;
  var var_core_value_sig6F7E = var_core_value_sig9E58[Symbol.toPrimitive];
  if (var_core_value_sig6F7E !== undefined) {
    var var_core_value_sig3F21 = var_core_value_sig6F7E.call(var_core_value_sig9E58, var_core_value_sigD105 || "default");
    if (se(var_core_value_sig3F21) != "object") return var_core_value_sig3F21;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigD105 === "string" ? String : Number)(var_core_value_sig9E58);
}
function B(var_core_value_sig22FF) {
  var var_core_value_sig3189 = z(var_core_value_sig22FF, "string");
  return se(var_core_value_sig3189) == "symbol" ? var_core_value_sig3189 : var_core_value_sig3189 + "";
}
function V(var_core_value_sigA5F8, var_core_value_sigA71A, var_core_value_sig11F1) {
  return (var_core_value_sigA71A = B(var_core_value_sigA71A)) in var_core_value_sigA5F8 ? Object.defineProperty(var_core_value_sigA5F8, var_core_value_sigA71A, {
    value: var_core_value_sig11F1,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigA5F8[var_core_value_sigA71A] = var_core_value_sig11F1, var_core_value_sigA5F8;
}
var H = class {
    constructor() {
      V(this, "_contributions", new Map());
    }
    register(var_core_value_sig413D) {
      return this._contributions["set"](var_core_value_sig413D.childType, var_core_value_sig413D), (0, a.toDisposable)(() => {
        this._contributions["get"](var_core_value_sig413D.childType) === var_core_value_sig413D && this._contributions["delete"](var_core_value_sig413D.childType);
      });
    }
    get(var_core_value_sig5BCE) {
      return this._contributions["get"](var_core_value_sig5BCE);
    }
    list() {
      return [...this._contributions["values"]()];
    }
  },
  ce = class {
    constructor() {
      V(this, "_active$", new f["BehaviorSubject"](null)), V(this, "active$", this._active$["asObservable"]());
    }
    getActive() {
      return this._active$["getValue"]();
    }
    getStage(var_core_value_sig8EF0) {
      let var_core_value_sig78AC = this.getActive();
      return (var_core_value_sig78AC == null ? undefined : var_core_value_sig78AC.embedId) === var_core_value_sig8EF0 ? var_core_value_sig78AC.stage ?? "stage1" : "inactive";
    }
    activate(var_core_value_sig4CEF, var_core_value_sigD57D) {
      let var_core_value_sig2CC7 = this.getActive(),
        var_core_value_sig4784 = (var_core_value_sig2CC7 == null ? undefined : var_core_value_sig2CC7.hostUnitId) === var_core_value_sig4CEF.hostUnitId && var_core_value_sig2CC7.embedId === var_core_value_sig4CEF.embedId && var_core_value_sig2CC7.childUnitId === var_core_value_sig4CEF.childUnitId,
        var_core_value_sigC39E = {
          ...var_core_value_sig4CEF,
          stage: var_core_value_sigD57D ?? var_core_value_sig4CEF.stage ?? (var_core_value_sig4784 ? var_core_value_sig2CC7.stage ?? "stage1" : "stage1")
        };
      ((var_core_value_sig2CC7 == null ? undefined : var_core_value_sig2CC7.hostUnitId) !== var_core_value_sigC39E.hostUnitId || var_core_value_sig2CC7.embedId !== var_core_value_sigC39E.embedId || var_core_value_sig2CC7.childUnitId !== var_core_value_sigC39E.childUnitId || (var_core_value_sig2CC7.stage ?? "stage1") !== var_core_value_sigC39E.stage) && this._active$["next"](var_core_value_sigC39E);
    }
    setStage(var_core_value_sig16C7, var_core_value_sig7481) {
      let var_core_value_sig08A3 = this.getActive();
      !var_core_value_sig08A3 || var_core_value_sig08A3.embedId !== var_core_value_sig16C7 || (var_core_value_sig08A3.stage ?? "stage1") !== var_core_value_sig7481 && this._active$["next"]({
        ...var_core_value_sig08A3,
        stage: var_core_value_sig7481
      });
    }
    promote(var_core_value_sig77D8) {
      this.getStage(var_core_value_sig77D8) === "stage1" && this.setStage(var_core_value_sig77D8, "stage2");
    }
    clear(var_core_value_sig78A3) {
      let var_core_value_sig649B = this.getActive();
      var_core_value_sig649B && (!var_core_value_sig78A3 || var_core_value_sig649B.embedId === var_core_value_sig78A3) && this._active$["next"](null);
    }
  },
  U = class {
    constructor() {
      V(this, "_override$", new f["BehaviorSubject"](null)), V(this, "override$", this._override$["asObservable"]());
    }
    getOverride() {
      return this._override$["getValue"]();
    }
    activate(var_core_value_sig6256, var_core_value_sigE7A6, var_core_value_sigB505 = {}) {
      var var_core_value_sig7428, var_core_value_sig1DCE;
      if (!var_core_value_sig6256.childUnitId || var_core_value_sig6256.childType == null) throw Error("EMBED_MENU_OVERRIDE_CHILD_NOT_RESOLVED");
      let var_core_value_sig0567 = ((var_core_value_sig7428 = var_core_value_sig6256.sourceMeta) == null ? undefined : var_core_value_sig7428.tab) || undefined;
      if (var_core_value_sigE7A6 === "tab-active" && (!var_core_value_sig0567 || var_core_value_sig0567.enabled !== true)) throw Error("EMBED_MENU_OVERRIDE_TAB_REQUIRED");
      if (var_core_value_sigE7A6 !== "tab-active") throw Error("EMBED_MENU_OVERRIDE_UNSUPPORTED_REASON");
      if ((((var_core_value_sig1DCE = var_core_value_sigB505.layoutPolicy) == null ? undefined : var_core_value_sig1DCE.ribbon) ?? t.DEFAULT_EMBED_TAB_LAYOUT_POLICY["ribbon"]) !== "host" && var_core_value_sigB505.allowPlaceholder !== true && var_core_value_sigB505.allowHiddenRibbon !== true) return this.clear(var_core_value_sig6256.embedId), null;
      let var_core_value_sigA7F3 = {
          hostUnitId: var_core_value_sig6256.hostUnitId,
          embedId: var_core_value_sig6256.embedId,
          childUnitId: var_core_value_sig6256.childUnitId,
          childType: var_core_value_sig6256.childType,
          entry: var_core_value_sig6256.entry,
          reason: var_core_value_sigE7A6,
          portalContainer: var_core_value_sigB505.portalContainer,
          hideHostFxBar: var_core_value_sig0567 == null ? undefined : var_core_value_sig0567.hideHostFxBar,
          lockHostRibbon: var_core_value_sig0567 == null ? undefined : var_core_value_sig0567.lockHostRibbon
        },
        var_core_value_sigEACD = this.getOverride();
      return W(var_core_value_sigEACD, var_core_value_sigA7F3) ? var_core_value_sigEACD : (this._override$["next"](var_core_value_sigA7F3), var_core_value_sigA7F3);
    }
    clear(var_core_value_sig901E) {
      let var_core_value_sigF7BB = this.getOverride();
      var_core_value_sigF7BB && (!var_core_value_sig901E || var_core_value_sigF7BB.embedId === var_core_value_sig901E) && this._override$["next"](null);
    }
  };
function W(var_core_value_sigA71D, var_core_value_sig669B) {
  return var_core_value_sigA71D != null && var_core_value_sigA71D.hostUnitId === var_core_value_sig669B.hostUnitId && var_core_value_sigA71D.embedId === var_core_value_sig669B.embedId && var_core_value_sigA71D.childUnitId === var_core_value_sig669B.childUnitId && var_core_value_sigA71D.childType === var_core_value_sig669B.childType && var_core_value_sigA71D.entry === var_core_value_sig669B.entry && var_core_value_sigA71D.reason === var_core_value_sig669B.reason && var_core_value_sigA71D.portalContainer === var_core_value_sig669B.portalContainer && var_core_value_sigA71D.hideHostFxBar === var_core_value_sig669B.hideHostFxBar && var_core_value_sigA71D.lockHostRibbon === var_core_value_sig669B.lockHostRibbon;
}
const G = "data-embed-runtime-focus-role";
var K = class {
  constructor() {
    V(this, "_leases", new Map()), V(this, "_elements", new Map()), V(this, "_runtimeScopes", new Map()), V(this, "_leaseSequence", 0), V(this, "runtimeFocusChanged$", new f["Subject"]()), V(this, "runtimeSessionChanged$", new f["Subject"]());
  }
  acquireLease(var_core_value_sigFA38) {
    let var_core_value_sig102B = {
        role: var_core_value_sigFA38.role,
        owner: var_core_value_sigFA38.owner,
        sessionMode: var_core_value_sigFA38.sessionMode,
        hostUnitId: var_core_value_sigFA38.hostUnitId,
        childUnitId: var_core_value_sigFA38.childUnitId,
        childType: var_core_value_sigFA38.childType,
        associatedChildUnitIds: var_core_value_sigFA38.associatedChildUnitIds,
        sequence: ++this._leaseSequence
      },
      var_core_value_sigA7DB = this._leases["get"](var_core_value_sigFA38.embedId);
    return var_core_value_sigA7DB || (var_core_value_sigA7DB = new Set(), this._leases["set"](var_core_value_sigFA38.embedId, var_core_value_sigA7DB)), var_core_value_sigA7DB.add(var_core_value_sig102B), var_core_value_sig102B.role !== "runtime" && this._notifyRuntimeFocusChanged(), var_core_value_sig102B.role === "child-session" && this._notifyRuntimeSessionChanged(), (0, a.toDisposable)(() => {
      var_core_value_sigA7DB == null || var_core_value_sigA7DB.delete(var_core_value_sig102B), (var_core_value_sigA7DB == null ? undefined : var_core_value_sigA7DB.size) === 0 && this._leases["delete"](var_core_value_sigFA38.embedId), var_core_value_sig102B.role !== "runtime" && this._notifyRuntimeFocusChanged(), var_core_value_sig102B.role === "child-session" && this._notifyRuntimeSessionChanged();
    });
  }
  hasChildInteractionLease(var_core_value_sig5EEE) {
    if (!var_core_value_sig5EEE) return false;
    let var_core_value_sig65B4 = this._leases["get"](var_core_value_sig5EEE);
    return var_core_value_sig65B4 && [...var_core_value_sig65B4].some(var_core_value_sig8109 => var_core_value_sig8109.role !== "runtime") ? true : this.containsElement(var_core_value_sig5EEE, this._getActiveElement(var_core_value_sig5EEE));
  }
  hasBlockingChildFocusLease(var_core_value_sigF98E, var_core_value_sigA470) {
    if (!var_core_value_sigF98E) return false;
    let var_core_value_sig19A1 = this._leases["get"](var_core_value_sigF98E);
    return var_core_value_sig19A1 && [...var_core_value_sig19A1].some(var_core_value_sig7565 => this._isBlockingLease(var_core_value_sig7565, var_core_value_sigA470)) ? true : this.containsElement(var_core_value_sigF98E, this._getActiveElement(var_core_value_sigF98E));
  }
  hasAnyChildInteractionLease() {
    return [...this._leases["values"]()].some(var_core_value_sigD4FB => [...var_core_value_sigD4FB].some(var_core_value_sig429F => var_core_value_sig429F.role !== "runtime")) || this._getActiveOwnedRuntimeFocusInfo() != null;
  }
  hasAnyBlockingChildFocusLease(var_core_value_sig81F7) {
    if ([...this._leases["values"]()].some(var_core_value_sig3E71 => [...var_core_value_sig3E71].some(var_core_value_sigF62A => this._isBlockingLease(var_core_value_sigF62A, var_core_value_sig81F7)))) return true;
    let var_core_value_sigBE51 = this._getActiveOwnedRuntimeFocusInfo();
    return var_core_value_sigBE51 != null && this._isBlockingRole(var_core_value_sigBE51.role);
  }
  hasHostPreservingChildFocusLease(var_core_value_sigAAD1, var_core_value_sigBC1A) {
    if (!var_core_value_sigAAD1) return false;
    let var_core_value_sig3F3A = this._leases["get"](var_core_value_sigAAD1);
    return var_core_value_sig3F3A && [...var_core_value_sig3F3A].some(var_core_value_sig01B3 => this._isHostPreservingLease(var_core_value_sig01B3, var_core_value_sigBC1A)) ? true : this.containsElement(var_core_value_sigAAD1, this._getActiveElement(var_core_value_sigAAD1));
  }
  hasAnyHostPreservingChildFocusLease(var_core_value_sigA984) {
    return [...this._leases["values"]()].some(var_core_value_sig7442 => [...var_core_value_sig7442].some(var_core_value_sig8178 => this._isHostPreservingLease(var_core_value_sig8178, var_core_value_sigA984))) ? true : this._getActiveOwnedRuntimeFocusInfo() != null;
  }
  hasHostPreservingChildFocusLeaseForHost(var_core_value_sigA504, var_core_value_sig05FF) {
    if (!var_core_value_sigA504) return this.hasAnyHostPreservingChildFocusLease(var_core_value_sig05FF);
    if ([...this._leases["values"]()].some(var_core_value_sigDF87 => [...var_core_value_sigDF87].some(var_core_value_sigE9ED => this._isHostPreservingLease(var_core_value_sigE9ED, var_core_value_sig05FF) && this._leaseAppliesToHostUnit(var_core_value_sigE9ED, var_core_value_sigA504)))) return true;
    let var_core_value_sigFBF0 = this._getActiveOwnedRuntimeFocusInfo();
    if (!var_core_value_sigFBF0) return false;
    let var_core_value_sig2F95 = this._leases["get"](var_core_value_sigFBF0.embedId);
    return var_core_value_sig2F95 && [...var_core_value_sig2F95].some(var_core_value_sig9EE0 => this._isHostPreservingLease(var_core_value_sig9EE0, var_core_value_sig05FF) && this._leaseAppliesToHostUnit(var_core_value_sig9EE0, var_core_value_sigA504)) ? true : this._ownedRuntimeFocusAppliesToHost(var_core_value_sigFBF0.embedId, var_core_value_sigA504);
  }
  isChildUnitInActiveSession(var_core_value_sigF0E1) {
    return var_core_value_sigF0E1 ? [...this._leases["values"]()].some(var_core_value_sigF051 => [...var_core_value_sigF051].some(var_core_value_sigB577 => this._leaseAppliesToChildUnit(var_core_value_sigB577, var_core_value_sigF0E1) && var_core_value_sigB577.role !== "runtime")) : false;
  }
  registerRuntimeScope(var_core_value_sig2D8D) {
    let var_core_value_sigE5A6 = {
        hostUnitId: var_core_value_sig2D8D.hostUnitId,
        childUnitId: var_core_value_sig2D8D.childUnitId,
        childType: var_core_value_sig2D8D.childType,
        sessionMode: var_core_value_sig2D8D.sessionMode,
        sequence: ++this._leaseSequence
      },
      var_core_value_sigF449 = this._runtimeScopes["get"](var_core_value_sig2D8D.embedId);
    return var_core_value_sigF449 || (var_core_value_sigF449 = new Set(), this._runtimeScopes["set"](var_core_value_sig2D8D.embedId, var_core_value_sigF449)), var_core_value_sigF449.add(var_core_value_sigE5A6), this._notifyRuntimeFocusChanged(), this._notifyRuntimeSessionChanged(), (0, a.toDisposable)(() => {
      var_core_value_sigF449 == null || var_core_value_sigF449.delete(var_core_value_sigE5A6), (var_core_value_sigF449 == null ? undefined : var_core_value_sigF449.size) === 0 && this._runtimeScopes["delete"](var_core_value_sig2D8D.embedId), this._notifyRuntimeFocusChanged(), this._notifyRuntimeSessionChanged();
    });
  }
  resolveRuntimeScopeByChildUnitId(var_core_value_sig38C5) {
    if (!var_core_value_sig38C5) return;
    let var_core_value_sigC87D;
    for (let [var_core_value_sig0B45, var_core_value_sig36F8] of this._runtimeScopes) for (let var_core_value_sig9572 of var_core_value_sig36F8) var_core_value_sig9572.childUnitId === var_core_value_sig38C5 && (!var_core_value_sigC87D || var_core_value_sig9572.sequence > var_core_value_sigC87D.scope["sequence"]) && (var_core_value_sigC87D = {
      embedId: var_core_value_sig0B45,
      scope: var_core_value_sig9572
    });
    if (var_core_value_sigC87D) {
      let {
        embedId: var_core_value_sig03E1,
        scope: var_core_value_sigBB57
      } = var_core_value_sigC87D;
      return {
        embedId: var_core_value_sig03E1,
        hostUnitId: var_core_value_sigBB57.hostUnitId,
        childUnitId: var_core_value_sigBB57.childUnitId,
        childType: var_core_value_sigBB57.childType,
        sessionMode: var_core_value_sigBB57.sessionMode
      };
    }
  }
  resolveActiveChildSessionRuntimeScope() {
    let var_core_value_sigCCDC;
    for (let [var_core_value_sig7C4A, var_core_value_sigE799] of this._leases) for (let var_core_value_sigD873 of var_core_value_sigE799) {
      if (var_core_value_sigD873.role !== "child-session" || !var_core_value_sigD873.childUnitId) continue;
      let var_core_value_sig3EEE = this._getChildSessionPriority(var_core_value_sigD873);
      (!var_core_value_sigCCDC || var_core_value_sig3EEE > var_core_value_sigCCDC.priority || var_core_value_sig3EEE === var_core_value_sigCCDC.priority && var_core_value_sigD873.sequence > var_core_value_sigCCDC.lease["sequence"]) && (var_core_value_sigCCDC = {
        embedId: var_core_value_sig7C4A,
        lease: var_core_value_sigD873,
        priority: var_core_value_sig3EEE
      });
    }
    return var_core_value_sigCCDC ? {
      embedId: var_core_value_sigCCDC.embedId,
      hostUnitId: var_core_value_sigCCDC.lease["hostUnitId"],
      childUnitId: var_core_value_sigCCDC.lease["childUnitId"],
      childType: var_core_value_sigCCDC.lease["childType"],
      sessionMode: this._resolveChildSessionMode(var_core_value_sigCCDC.lease)
    } : undefined;
  }
  isChildUnitRuntimeEvent(var_core_value_sigC310, var_core_value_sigA4E8, var_core_value_sigDC07) {
    if (!var_core_value_sigC310) return false;
    let var_core_value_sig3474 = this._getOwnedEmbedIdFromTarget(var_core_value_sigA4E8, var_core_value_sigDC07);
    return var_core_value_sig3474 ? this._ownedEmbedAppliesToChildUnit(var_core_value_sig3474, var_core_value_sigC310) : false;
  }
  shouldSuppressHostInteraction(var_core_value_sig4E80, var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C) {
    return this.isChildUnitRuntimeEvent(var_core_value_sig4E80, var_core_value_sigD23B, var_core_value_sig2B2A) || this.isChildUnitInActiveSession(var_core_value_sig4E80) ? false : this.hasHostPreservingChildFocusLeaseForHost(var_core_value_sig4E80, var_core_value_sig0B5C);
  }
  registerElement(var_core_value_sig7D42) {
    let var_core_value_sig8FDE = this._elements["get"](var_core_value_sig7D42.embedId);
    var_core_value_sig8FDE || (var_core_value_sig8FDE = new Set(), this._elements["set"](var_core_value_sig7D42.embedId, var_core_value_sig8FDE)), var_core_value_sig8FDE.add(var_core_value_sig7D42.element);
    let var_core_value_sig78E6 = var_core_value_sig7D42.element["getAttribute"](G);
    return var_core_value_sig7D42.element["setAttribute"](G, var_core_value_sig7D42.role), this._notifyRuntimeFocusChanged(), (0, a.toDisposable)(() => {
      var_core_value_sig8FDE == null || var_core_value_sig8FDE.delete(var_core_value_sig7D42.element), (var_core_value_sig8FDE == null ? undefined : var_core_value_sig8FDE.size) === 0 && this._elements["delete"](var_core_value_sig7D42.embedId), var_core_value_sig78E6 == null ? var_core_value_sig7D42.element["removeAttribute"](G) : var_core_value_sig7D42.element["setAttribute"](G, var_core_value_sig78E6), this._notifyRuntimeFocusChanged();
    });
  }
  listElements(var_core_value_sig541F) {
    return var_core_value_sig541F ? [...(this._elements["get"](var_core_value_sig541F) ?? [])] : [];
  }
  containsElement(var_core_value_sig417B, var_core_value_sigAA90, var_core_value_sigE92D) {
    if (!var_core_value_sig417B) return false;
    let var_core_value_sig9940 = this._elements["get"](var_core_value_sig417B),
      var_core_value_sig682D = typeof (var_core_value_sigE92D == null ? undefined : var_core_value_sigE92D.composedPath) == "function" ? var_core_value_sigE92D.composedPath() : undefined;
    return var_core_value_sig9940 != null && var_core_value_sig9940.size && var_core_value_sig682D != null && var_core_value_sig682D.some(var_core_value_sigB601 => var_core_value_sigB601 instanceof HTMLElement && this._containsRegisteredElement(var_core_value_sig9940, var_core_value_sigB601)) || var_core_value_sig682D != null && var_core_value_sig682D.some(var_core_value_sig8B71 => var_core_value_sig8B71 instanceof HTMLElement && this._isOwnedBoundaryElement(var_core_value_sig417B, var_core_value_sig8B71)) ? true : var_core_value_sigAA90 instanceof HTMLElement && (!!(var_core_value_sig9940 != null && var_core_value_sig9940.size) && this._containsRegisteredElement(var_core_value_sig9940, var_core_value_sigAA90) || this._isOwnedBoundaryElement(var_core_value_sig417B, var_core_value_sigAA90));
  }
  _containsRegisteredElement(var_core_value_sig1435, var_core_value_sig4082) {
    return [...var_core_value_sig1435].some(var_core_value_sigAEFB => var_core_value_sigAEFB === var_core_value_sig4082 || var_core_value_sigAEFB.contains(var_core_value_sig4082));
  }
  _isBlockingLease(var_core_value_sigC049, var_core_value_sigE5C3) {
    var var_core_value_sigCCAA;
    return var_core_value_sigC049.owner && var_core_value_sigE5C3 != null && (var_core_value_sigCCAA = var_core_value_sigE5C3.ignoreOwners) != null && var_core_value_sigCCAA.includes(var_core_value_sigC049.owner) ? false : this._isBlockingRole(var_core_value_sigC049.role);
  }
  _isHostPreservingLease(var_core_value_sigF32D, var_core_value_sig9427) {
    var var_core_value_sig21F4;
    return var_core_value_sigF32D.owner && var_core_value_sig9427 != null && (var_core_value_sig21F4 = var_core_value_sig9427.ignoreOwners) != null && var_core_value_sig21F4.includes(var_core_value_sigF32D.owner) ? false : var_core_value_sigF32D.role !== "runtime";
  }
  _leaseAppliesToHostUnit(var_core_value_sigA345, var_core_value_sigA468) {
    return var_core_value_sigA345.hostUnitId == null || var_core_value_sigA345.hostUnitId === var_core_value_sigA468;
  }
  _ownedRuntimeFocusAppliesToHost(var_core_value_sig1561, var_core_value_sigDF14) {
    let var_core_value_sig842F = this._runtimeScopes["get"](var_core_value_sig1561);
    return !!var_core_value_sig842F && [...var_core_value_sig842F].some(var_core_value_sig826B => var_core_value_sig826B.hostUnitId == null || var_core_value_sig826B.hostUnitId === var_core_value_sigDF14);
  }
  _leaseAppliesToChildUnit(var_core_value_sigC4C0, var_core_value_sig214A) {
    var var_core_value_sigCCC3;
    return var_core_value_sigC4C0.childUnitId === var_core_value_sig214A || ((var_core_value_sigCCC3 = var_core_value_sigC4C0.associatedChildUnitIds) == null ? undefined : var_core_value_sigCCC3.includes(var_core_value_sig214A)) === true;
  }
  _ownedEmbedAppliesToChildUnit(var_core_value_sig986E, var_core_value_sig537C) {
    if ([...(this._runtimeScopes["get"](var_core_value_sig986E) ?? [])].some(var_core_value_sigCF89 => var_core_value_sigCF89.childUnitId === var_core_value_sig537C)) return true;
    let var_core_value_sigBBBC = this._leases["get"](var_core_value_sig986E);
    return !!var_core_value_sigBBBC && [...var_core_value_sigBBBC].some(var_core_value_sig00CB => this._leaseAppliesToChildUnit(var_core_value_sig00CB, var_core_value_sig537C));
  }
  _isBlockingRole(var_core_value_sig5440) {
    return var_core_value_sig5440 !== "runtime";
  }
  _getChildSessionPriority(var_core_value_sigE28B) {
    let var_core_value_sig0FD9 = this._resolveChildSessionMode(var_core_value_sigE28B);
    return var_core_value_sig0FD9 === "child-fullscreen" ? 30 : var_core_value_sig0FD9 === "child-keyboard" ? 20 : var_core_value_sig0FD9 === "child-tab" ? 10 : 0;
  }
  _resolveChildSessionMode(var_core_value_sig5649) {
    return var_core_value_sig5649.sessionMode ? var_core_value_sig5649.sessionMode : var_core_value_sig5649.owner === "fullscreen-runtime" ? "child-fullscreen" : var_core_value_sig5649.owner === "stage2-runtime" || var_core_value_sig5649.owner === "doc-block-stage2-runtime" ? "child-keyboard" : var_core_value_sig5649.owner === "tab-peer-runtime" ? "child-tab" : var_core_value_sig5649.role === "child-session" ? "child-keyboard" : "host-passive";
  }
  _isOwnedBoundaryElement(var_core_value_sigAF82, var_core_value_sig21A2) {
    return var_core_value_sig21A2.closest("[" + q + "=\x22" + var_core_value_sigAF82 + "\x22]") != null;
  }
  _getOwnedEmbedIdFromTarget(var_core_value_sig5C1D, var_core_value_sig4CBA) {
    let var_core_value_sig8E65 = typeof (var_core_value_sig4CBA == null ? undefined : var_core_value_sig4CBA.composedPath) == "function" ? var_core_value_sig4CBA.composedPath() : undefined,
      var_core_value_sig772C = (var_core_value_sig8E65 == null ? undefined : var_core_value_sig8E65.find(var_core_value_sig77EE => this._isHTMLElement(var_core_value_sig77EE) && var_core_value_sig77EE.hasAttribute("data-embed-interaction-boundary-owner"))) ?? (this._isHTMLElement(var_core_value_sig5C1D) ? var_core_value_sig5C1D.closest("[data-embed-interaction-boundary-owner]") ?? undefined : undefined);
    return (var_core_value_sig772C == null ? undefined : var_core_value_sig772C.getAttribute("data-embed-interaction-boundary-owner")) ?? this._getOwnedEmbedIdFromEventPoint(var_core_value_sig4CBA);
  }
  _getOwnedEmbedIdFromEventPoint(var_core_value_sigF309) {
    let var_core_value_sig44F9 = this._getEventClientPoint(var_core_value_sigF309);
    if (!var_core_value_sig44F9) return;
    let var_core_value_sigE532;
    for (let [var_core_value_sig9F76, var_core_value_sigB008] of this._elements) for (let var_core_value_sigA12B of var_core_value_sigB008) {
      let var_core_value_sigBC46 = var_core_value_sigA12B.getBoundingClientRect();
      if (!this._rectContainsPoint(var_core_value_sigBC46, var_core_value_sig44F9.clientX, var_core_value_sig44F9.clientY)) continue;
      let var_core_value_sig3D7D = var_core_value_sigBC46.width * var_core_value_sigBC46.height;
      (!var_core_value_sigE532 || var_core_value_sig3D7D < var_core_value_sigE532.area) && (var_core_value_sigE532 = {
        embedId: var_core_value_sig9F76,
        area: var_core_value_sig3D7D
      });
    }
    return var_core_value_sigE532 == null ? undefined : var_core_value_sigE532.embedId;
  }
  _getEventClientPoint(var_core_value_sigF381) {
    let var_core_value_sigCB92 = var_core_value_sigF381;
    if (var_core_value_sigCB92) {
      if (Number.isFinite(var_core_value_sigCB92.clientX) && Number.isFinite(var_core_value_sigCB92.clientY)) return {
        clientX: var_core_value_sigCB92.clientX,
        clientY: var_core_value_sigCB92.clientY
      };
      if (Number.isFinite(var_core_value_sigCB92.x) && Number.isFinite(var_core_value_sigCB92.y)) return {
        clientX: var_core_value_sigCB92.x,
        clientY: var_core_value_sigCB92.y
      };
    }
  }
  _rectContainsPoint(var_core_value_sigC844, var_core_value_sig2ED4, var_core_value_sig0477) {
    return var_core_value_sigC844.width > 0 && var_core_value_sigC844.height > 0 && var_core_value_sig2ED4 >= var_core_value_sigC844.left && var_core_value_sig2ED4 <= var_core_value_sigC844.right && var_core_value_sig0477 >= var_core_value_sigC844.top && var_core_value_sig0477 <= var_core_value_sigC844.bottom;
  }
  _getActiveOwnedRuntimeFocusInfo() {
    var var_core_value_sig6FDF;
    let var_core_value_sig27C4 = this._getAnyActiveElement();
    if (!this._isHTMLElement(var_core_value_sig27C4)) return;
    let var_core_value_sig3E1A = var_core_value_sig27C4.closest("[" + q + "]");
    if (!var_core_value_sig3E1A) return;
    let var_core_value_sig7FB0 = var_core_value_sig3E1A.getAttribute(q),
      var_core_value_sig5215 = (var_core_value_sig6FDF = var_core_value_sig27C4.closest("[data-embed-runtime-focus-role]")) == null ? undefined : var_core_value_sig6FDF.getAttribute(G);
    return var_core_value_sig7FB0 && this._isRuntimeFocusRole(var_core_value_sig5215) ? {
      embedId: var_core_value_sig7FB0,
      role: var_core_value_sig5215
    } : undefined;
  }
  _isHTMLElement(var_core_value_sig5204) {
    var var_core_value_sig5E11;
    if (!var_core_value_sig5204) return false;
    let var_core_value_sig4D58 = (var_core_value_sig5E11 = var_core_value_sig5204.ownerDocument) == null ? undefined : var_core_value_sig5E11.defaultView;
    return var_core_value_sig4D58 ? var_core_value_sig5204 instanceof var_core_value_sig4D58.HTMLElement : typeof HTMLElement < "u" && var_core_value_sig5204 instanceof HTMLElement;
  }
  _isRuntimeFocusRole(var_core_value_sig2DBD) {
    return var_core_value_sig2DBD === "runtime" || var_core_value_sig2DBD === "child-session" || var_core_value_sig2DBD === "child-editor" || var_core_value_sig2DBD === "child-popup" || var_core_value_sig2DBD === "floating-menu";
  }
  _getAnyActiveElement() {
    for (let var_core_value_sig8721 of this._elements["values"]()) {
      var var_core_value_sig424E;
      let var_core_value_sigF230 = (var_core_value_sig424E = var_core_value_sig8721.values().next().value) == null ? undefined : var_core_value_sig424E.ownerDocument;
      if (var_core_value_sigF230 != null && var_core_value_sigF230.activeElement) return var_core_value_sigF230.activeElement;
    }
    return typeof document > "u" ? null : document.activeElement;
  }
  _getActiveElement(var_core_value_sigF481) {
    var var_core_value_sigD7F2;
    let var_core_value_sig7CF3 = this._elements["get"](var_core_value_sigF481),
      var_core_value_sig9DC6 = var_core_value_sig7CF3 == null || (var_core_value_sigD7F2 = var_core_value_sig7CF3.values().next().value) == null ? undefined : var_core_value_sigD7F2.ownerDocument;
    return (var_core_value_sig9DC6 == null ? undefined : var_core_value_sig9DC6.activeElement) ?? (typeof document > "u" ? null : document.activeElement);
  }
  _notifyRuntimeFocusChanged() {
    this.runtimeFocusChanged$["next"]();
  }
  _notifyRuntimeSessionChanged() {
    this.runtimeSessionChanged$["next"]();
  }
};
const q = "data-embed-interaction-boundary-owner",
  le = "univer-pointer-events-none";
var J = class {
    constructor() {
      V(this, "_roots", new Map()), V(this, "_childUnitIds", new Map()), V(this, "_portalObservers", new WeakMap()), V(this, "_closedPortalInputGuards", new WeakSet()), V(this, "_activePortalOwners", new WeakMap()), V(this, "_pendingPortalOwner", undefined);
    }
    registerRoot(var_core_value_sig6643, var_core_value_sig4124, var_core_value_sigBF1C) {
      let var_core_value_sigEEEF = this._roots["get"](var_core_value_sig6643);
      var_core_value_sigEEEF || (var_core_value_sigEEEF = new Set(), this._roots["set"](var_core_value_sig6643, var_core_value_sigEEEF)), var_core_value_sigBF1C && this._childUnitIds["set"](var_core_value_sig6643, var_core_value_sigBF1C), var_core_value_sigEEEF.add(var_core_value_sig4124);
      let var_core_value_sig9A01 = var_core_value_sig4124.getAttribute(q),
        var_core_value_sig674F = var_core_value_sig4124.getAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE);
      var_core_value_sig4124.setAttribute(q, var_core_value_sig6643), var_core_value_sigBF1C && var_core_value_sig4124.setAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE, var_core_value_sigBF1C);
      let var_core_value_sigC8F6 = this._registerRootPopupDescendantFocusRoles(var_core_value_sig6643, var_core_value_sig4124),
        var_core_value_sig8A26 = () => this._claimBodyPortals(var_core_value_sig6643, var_core_value_sig4124.ownerDocument);
      return var_core_value_sig4124.addEventListener("pointerdown", var_core_value_sig8A26, true), var_core_value_sig4124.addEventListener("mousedown", var_core_value_sig8A26, true), var_core_value_sig4124.addEventListener("focusin", var_core_value_sig8A26, true), (0, a.toDisposable)(() => {
        var var_core_value_sig08BA;
        var_core_value_sigC8F6.dispose(), var_core_value_sig4124.removeEventListener("pointerdown", var_core_value_sig8A26, true), var_core_value_sig4124.removeEventListener("mousedown", var_core_value_sig8A26, true), var_core_value_sig4124.removeEventListener("focusin", var_core_value_sig8A26, true), ((var_core_value_sig08BA = this._pendingPortalOwner) == null ? undefined : var_core_value_sig08BA.embedId) === var_core_value_sig6643 && this._pendingPortalOwner["document"] === var_core_value_sig4124.ownerDocument && (this._pendingPortalOwner = undefined), var_core_value_sigEEEF == null || var_core_value_sigEEEF.delete(var_core_value_sig4124), var_core_value_sigEEEF && var_core_value_sigEEEF.size === 0 && (this._roots["delete"](var_core_value_sig6643), this._childUnitIds["delete"](var_core_value_sig6643)), var_core_value_sig9A01 == null ? var_core_value_sig4124.removeAttribute(q) : var_core_value_sig4124.setAttribute(q, var_core_value_sig9A01), var_core_value_sig674F == null ? var_core_value_sig4124.removeAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE) : var_core_value_sig4124.setAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE, var_core_value_sig674F);
      });
    }
    _registerRootPopupDescendantFocusRoles(var_core_value_sigD073, var_core_value_sigF631) {
      let var_core_value_sig2278 = var_core_value_sigF631.ownerDocument["defaultView"],
        var_core_value_sig7053 = new Map(),
        var_core_value_sig52F1 = new Map(),
        var_core_value_sig1E74,
        var_core_value_sig1E84 = false,
        var_core_value_sig133B = var_core_value_sigDBB5 => {
          var_core_value_sig7053.has(var_core_value_sigDBB5) || var_core_value_sig7053.set(var_core_value_sigDBB5, var_core_value_sigDBB5.getAttribute(q)), var_core_value_sig52F1.has(var_core_value_sigDBB5) || var_core_value_sig52F1.set(var_core_value_sigDBB5, var_core_value_sigDBB5.getAttribute(G));
        },
        var_core_value_sig69B8 = var_core_value_sigCFAC => {
          var_core_value_sig133B(var_core_value_sigCFAC), var_core_value_sigCFAC.setAttribute(q, var_core_value_sigD073), var_core_value_sigCFAC.setAttribute(G, "child-popup");
        },
        var_core_value_sig983D = var_core_value_sig237B => {
          this._isUniverPortalTreeElement(var_core_value_sig237B) && (var_core_value_sig69B8(var_core_value_sig237B), var_core_value_sig237B.querySelectorAll("*").forEach(var_core_value_sig69B8));
        },
        var_core_value_sig9A03 = var_core_value_sigFEAB => {
          var_core_value_sig1E84 || (var_core_value_sig983D(var_core_value_sigFEAB), var_core_value_sigFEAB.querySelectorAll("*").forEach(var_core_value_sig09B8 => var_core_value_sig983D(var_core_value_sig09B8)));
        };
      return var_core_value_sig9A03(var_core_value_sigF631), var_core_value_sig2278 != null && var_core_value_sig2278.MutationObserver && (var_core_value_sig1E74 = new var_core_value_sig2278["MutationObserver"](var_core_value_sigE347 => {
        var_core_value_sigE347.forEach(var_core_value_sig6F91 => {
          var_core_value_sig6F91.addedNodes["forEach"](var_core_value_sig27E5 => {
            var_core_value_sig27E5 instanceof var_core_value_sig2278.HTMLElement && var_core_value_sig9A03(var_core_value_sig27E5);
          });
        });
      }), var_core_value_sig1E74.observe(var_core_value_sigF631, {
        childList: true,
        subtree: true
      })), (0, a.toDisposable)(() => {
        var_core_value_sig1E84 = true, var_core_value_sig1E74 == null || var_core_value_sig1E74.disconnect(), var_core_value_sig7053.forEach((var_core_value_sigF9C7, var_core_value_sig8895) => {
          if (var_core_value_sigF9C7 == null) {
            var_core_value_sig8895.removeAttribute(q);
            return;
          }
          var_core_value_sig8895.setAttribute(q, var_core_value_sigF9C7);
        }), var_core_value_sig52F1.forEach((var_core_value_sigC80B, var_core_value_sig284F) => {
          if (var_core_value_sigC80B == null) {
            var_core_value_sig284F.removeAttribute(G);
            return;
          }
          var_core_value_sig284F.setAttribute(G, var_core_value_sigC80B);
        });
      });
    }
    registerOwnedElement(var_core_value_sig3363, var_core_value_sigF64A) {
      let var_core_value_sig25EC = this._roots["get"](var_core_value_sig3363);
      var_core_value_sig25EC || (var_core_value_sig25EC = new Set(), this._roots["set"](var_core_value_sig3363, var_core_value_sig25EC)), var_core_value_sig25EC.add(var_core_value_sigF64A);
      let var_core_value_sigA790 = this._markInteractionBoundaryOwnerTree(var_core_value_sig3363, var_core_value_sigF64A);
      return (0, a.toDisposable)(() => {
        var_core_value_sig25EC == null || var_core_value_sig25EC.delete(var_core_value_sigF64A), var_core_value_sig25EC && var_core_value_sig25EC.size === 0 && this._roots["delete"](var_core_value_sig3363), var_core_value_sigA790.dispose();
      });
    }
    contains(var_core_value_sig9A5E, var_core_value_sig01B9, var_core_value_sigD6A9) {
      let var_core_value_sig0FCF = typeof (var_core_value_sigD6A9 == null ? undefined : var_core_value_sigD6A9.composedPath) == "function" ? var_core_value_sigD6A9.composedPath() : undefined;
      if (var_core_value_sig0FCF != null && var_core_value_sig0FCF.some(var_core_value_sig3C5B => var_core_value_sig3C5B instanceof HTMLElement && this._isOwnedElement(var_core_value_sig9A5E, var_core_value_sig3C5B))) return true;
      if (!(var_core_value_sig01B9 instanceof HTMLElement)) return false;
      if (this._isOwnedElement(var_core_value_sig9A5E, var_core_value_sig01B9)) return true;
      if (!var_core_value_sig9A5E) return Array.from(this._roots["values"]()).some(var_core_value_sig200B => [...var_core_value_sig200B].some(var_core_value_sigE154 => var_core_value_sigE154.isConnected && var_core_value_sigE154.contains(var_core_value_sig01B9)));
      let var_core_value_sigCF96 = this._roots["get"](var_core_value_sig9A5E);
      return !!var_core_value_sigCF96 && [...var_core_value_sigCF96].some(var_core_value_sig3863 => var_core_value_sig3863.isConnected && var_core_value_sig3863.contains(var_core_value_sig01B9));
    }
    hasRecentInteraction(var_core_value_sigC4E9) {
      let var_core_value_sigF612 = var_core_value_sigC4E9 ? this._activePortalOwners["get"](var_core_value_sigC4E9) : typeof document < "u" ? this._activePortalOwners["get"](document) : undefined;
      if (var_core_value_sigF612 != null && var_core_value_sigF612.length) return true;
      let var_core_value_sigAA6C = this._pendingPortalOwner;
      return !var_core_value_sigAA6C || Date.now() > var_core_value_sigAA6C.expiresAt ? false : !var_core_value_sigC4E9 || var_core_value_sigAA6C.document === var_core_value_sigC4E9;
    }
    hasRecentInteractionFor(var_core_value_sig8BFA, var_core_value_sig236B) {
      if (!var_core_value_sig8BFA) return false;
      let var_core_value_sig1951 = var_core_value_sig236B ? this._activePortalOwners["get"](var_core_value_sig236B) : typeof document < "u" ? this._activePortalOwners["get"](document) : undefined;
      if (var_core_value_sig1951 != null && var_core_value_sig1951.some(var_core_value_sigC97C => var_core_value_sigC97C.embedId === var_core_value_sig8BFA)) return true;
      let var_core_value_sigFEA0 = this._pendingPortalOwner;
      return !var_core_value_sigFEA0 || var_core_value_sigFEA0.embedId !== var_core_value_sig8BFA || Date.now() > var_core_value_sigFEA0.expiresAt ? false : !var_core_value_sig236B || var_core_value_sigFEA0.document === var_core_value_sig236B;
    }
    closeOwnedFloatingSurfaces(var_core_value_sig931A, var_core_value_sigEE7D) {
      !var_core_value_sig931A || !(var_core_value_sigEE7D != null && var_core_value_sigEE7D.body) || this._collectOwnedFloatingSurfaceRoots(var_core_value_sig931A, var_core_value_sigEE7D).forEach(var_core_value_sigC4B1 => this._dispatchEscapeToFloatingSurface(var_core_value_sigC4B1, var_core_value_sigEE7D));
    }
    activatePortalScope(var_core_value_sig3585, var_core_value_sig31A8, var_core_value_sigA4DA = {}) {
      var var_core_value_sig6FC0;
      if (!(var_core_value_sig31A8 != null && var_core_value_sig31A8.body)) return (0, a.toDisposable)(() => {});
      let var_core_value_sig6217 = Symbol(var_core_value_sig3585),
        var_core_value_sigB805 = this._activePortalOwners["get"](var_core_value_sig31A8) ?? [],
        var_core_value_sig4FAE = var_core_value_sigA4DA.includeAppShellEditorPortal ?? true;
      return var_core_value_sigB805.push({
        embedId: var_core_value_sig3585,
        includeAppShellEditorPortal: var_core_value_sig4FAE,
        token: var_core_value_sig6217
      }), this._activePortalOwners["set"](var_core_value_sig31A8, var_core_value_sigB805), this._ensurePortalObserver(var_core_value_sig31A8), this._markExistingBodyPortals(var_core_value_sig3585, var_core_value_sig31A8, {
        includeAppShellEditorPortal: var_core_value_sig4FAE,
        allowOwnedPortalReassignment: true,
        allowDirectBodyPortal: false
      }), this._cleanupOrdinaryBodyChromeClaims(var_core_value_sig3585, var_core_value_sig31A8), (var_core_value_sig6FC0 = var_core_value_sig31A8.defaultView) == null || var_core_value_sig6FC0.setTimeout(() => {
        let var_core_value_sig1BD9 = this._getLatestActivePortalOwner(var_core_value_sig31A8);
        (var_core_value_sig1BD9 == null ? undefined : var_core_value_sig1BD9.embedId) === var_core_value_sig3585 && var_core_value_sig1BD9.token === var_core_value_sig6217 && (this._markExistingBodyPortals(var_core_value_sig3585, var_core_value_sig31A8, {
          includeAppShellEditorPortal: var_core_value_sig4FAE,
          allowOwnedPortalReassignment: true,
          allowDirectBodyPortal: false
        }), this._cleanupOrdinaryBodyChromeClaims(var_core_value_sig3585, var_core_value_sig31A8));
      }, 0), (0, a.toDisposable)(() => {
        let var_core_value_sigE43E = this._activePortalOwners["get"](var_core_value_sig31A8),
          var_core_value_sigA937 = false;
        if (var_core_value_sigE43E) {
          let var_core_value_sig4632 = var_core_value_sigE43E.findIndex(var_core_value_sig8061 => var_core_value_sig8061.embedId === var_core_value_sig3585 && var_core_value_sig8061.token === var_core_value_sig6217);
          var_core_value_sig4632 >= 0 && var_core_value_sigE43E.splice(var_core_value_sig4632, 1), var_core_value_sigA937 = var_core_value_sigE43E.some(var_core_value_sig4D4C => var_core_value_sig4D4C.embedId === var_core_value_sig3585), var_core_value_sigE43E.length === 0 && this._activePortalOwners["delete"](var_core_value_sig31A8);
        }
        var_core_value_sigA937 || this._releaseBodyPortalClaims(var_core_value_sig3585, var_core_value_sig31A8);
        let var_core_value_sigCAD5 = this._getLatestActivePortalOwner(var_core_value_sig31A8);
        var_core_value_sigCAD5 && (this._markExistingBodyPortals(var_core_value_sigCAD5.embedId, var_core_value_sig31A8, {
          includeAppShellEditorPortal: var_core_value_sigCAD5.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: true,
          allowDirectBodyPortal: false
        }), this._cleanupOrdinaryBodyChromeClaims(var_core_value_sigCAD5.embedId, var_core_value_sig31A8));
      });
    }
    _collectOwnedFloatingSurfaceRoots(var_core_value_sig1FCC, var_core_value_sigB7F9) {
      var var_core_value_sigB1A2;
      let var_core_value_sig526D = new Set(),
        var_core_value_sigBDB5 = var_core_value_sigE503 => {
          let var_core_value_sig48DD = this._resolveFloatingSurfaceRoot(var_core_value_sigE503);
          !var_core_value_sig48DD || !this._isOwnedElement(var_core_value_sig1FCC, var_core_value_sig48DD) || var_core_value_sig526D.add(var_core_value_sig48DD);
        };
      return var_core_value_sigB7F9.body["querySelectorAll"]("[" + q + "=\x22" + var_core_value_sig1FCC + "\x22]").forEach(var_core_value_sigBDB5), (var_core_value_sigB1A2 = this._roots["get"](var_core_value_sig1FCC)) == null || var_core_value_sigB1A2.forEach(var_core_value_sig5E6A => {
        var_core_value_sig5E6A.isConnected && (var_core_value_sigBDB5(var_core_value_sig5E6A), var_core_value_sig5E6A.querySelectorAll("*").forEach(var_core_value_sigBDB5));
      }), [...var_core_value_sig526D].sort((var_core_value_sigB7FC, var_core_value_sig9CD9) => var_core_value_sigB7FC.contains(var_core_value_sig9CD9) ? 1 : var_core_value_sig9CD9.contains(var_core_value_sigB7FC) ? -1 : 0);
    }
    _resolveFloatingSurfaceRoot(var_core_value_sig59CE) {
      if (!var_core_value_sig59CE.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"]') && this._isUniverPortalTreeElement(var_core_value_sig59CE)) return var_core_value_sig59CE.closest('.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]') ?? var_core_value_sig59CE;
    }
    _dispatchEscapeToFloatingSurface(var_core_value_sig3AD7, var_core_value_sig04E4) {
      let var_core_value_sigD8F0 = var_core_value_sig04E4.defaultView,
        var_core_value_sig1475 = var_core_value_sig04E4.activeElement instanceof HTMLElement && var_core_value_sig3AD7.contains(var_core_value_sig04E4.activeElement) ? var_core_value_sig04E4.activeElement : var_core_value_sig3AD7,
        var_core_value_sig08B7 = var_core_value_sigD8F0 != null && var_core_value_sigD8F0.KeyboardEvent ? new var_core_value_sigD8F0.KeyboardEvent("keydown", {
          key: "Escape",
          code: "Escape",
          bubbles: true,
          cancelable: true
        }) : new Event("keydown", {
          bubbles: true,
          cancelable: true
        });
      var_core_value_sig1475.dispatchEvent(var_core_value_sig08B7);
    }
    _isOwnedElement(var_core_value_sig2008, var_core_value_sig496B) {
      let var_core_value_sig7161 = var_core_value_sig496B.closest("[" + q + "]"),
        var_core_value_sig2AB8 = var_core_value_sig7161 == null ? undefined : var_core_value_sig7161.getAttribute(q);
      if (var_core_value_sig2AB8 && (!var_core_value_sig2008 || var_core_value_sig2AB8 === var_core_value_sig2008)) return true;
      if (!var_core_value_sig2008) return Array.from(this._roots["values"]()).some(var_core_value_sigFD0C => [...var_core_value_sigFD0C].some(var_core_value_sig12F2 => var_core_value_sig12F2 === var_core_value_sig496B || var_core_value_sig12F2.contains(var_core_value_sig496B)));
      let var_core_value_sig3FCF = this._roots["get"](var_core_value_sig2008);
      return !!var_core_value_sig3FCF && [...var_core_value_sig3FCF].some(var_core_value_sig849B => var_core_value_sig849B === var_core_value_sig496B || var_core_value_sig849B.contains(var_core_value_sig496B));
    }
    _claimBodyPortals(var_core_value_sig675A, var_core_value_sig837F) {
      var var_core_value_sig9D6E;
      var_core_value_sig837F != null && var_core_value_sig837F.body && (this._pendingPortalOwner = {
        embedId: var_core_value_sig675A,
        document: var_core_value_sig837F,
        expiresAt: Date.now() + 1000
      }, this._ensurePortalObserver(var_core_value_sig837F), this._markExistingBodyPortals(var_core_value_sig675A, var_core_value_sig837F, {
        includeAppShellEditorPortal: false
      }), (var_core_value_sig9D6E = var_core_value_sig837F.defaultView) == null || var_core_value_sig9D6E.setTimeout(() => {
        let var_core_value_sig5F1A = this._pendingPortalOwner;
        (var_core_value_sig5F1A == null ? undefined : var_core_value_sig5F1A.embedId) === var_core_value_sig675A && var_core_value_sig5F1A.document === var_core_value_sig837F && Date.now() <= var_core_value_sig5F1A.expiresAt && this._markExistingBodyPortals(var_core_value_sig675A, var_core_value_sig837F, {
          includeAppShellEditorPortal: false
        });
      }, 0));
    }
    _ensurePortalObserver(var_core_value_sigB205) {
      if (this._portalObservers["has"](var_core_value_sigB205) || !var_core_value_sigB205.body) return;
      let var_core_value_sigBF78 = var_core_value_sigB205.defaultView;
      if (!(var_core_value_sigBF78 != null && var_core_value_sigBF78.MutationObserver)) return;
      let var_core_value_sig8AF3 = new var_core_value_sigBF78.MutationObserver(var_core_value_sigB455 => {
        let var_core_value_sig5241 = this._getBodyPortalOwner(var_core_value_sigB205);
        if (!var_core_value_sig5241) return;
        let var_core_value_sigC6E5 = {
          includeAppShellEditorPortal: var_core_value_sig5241.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: var_core_value_sig5241.stable,
          allowDirectBodyPortal: !var_core_value_sig5241.stable
        };
        var_core_value_sigB455.forEach(var_core_value_sig2259 => {
          var_core_value_sig2259.type === "attributes" && var_core_value_sig2259.target instanceof var_core_value_sigBF78.HTMLElement && (this._markBodyPortalOwner(var_core_value_sig2259.target, var_core_value_sig5241.embedId, var_core_value_sigB205, var_core_value_sigC6E5), var_core_value_sig2259.attributeName === "data-state" && this._syncClosedPortalInputGuard(var_core_value_sig2259.target, var_core_value_sig5241.embedId)), var_core_value_sig2259.addedNodes["forEach"](var_core_value_sigC9E0 => {
            var_core_value_sigC9E0 instanceof var_core_value_sigBF78.HTMLElement && (this._markBodyPortalOwner(var_core_value_sigC9E0, var_core_value_sig5241.embedId, var_core_value_sigB205, var_core_value_sigC6E5), var_core_value_sigC9E0.querySelectorAll("*").forEach(var_core_value_sig7524 => {
              this._markBodyPortalOwner(var_core_value_sig7524, var_core_value_sig5241.embedId, var_core_value_sigB205, var_core_value_sigC6E5);
            }), var_core_value_sigC9E0.hasAttribute("data-state") && this._syncClosedPortalInputGuard(var_core_value_sigC9E0, var_core_value_sig5241.embedId), var_core_value_sigC9E0.querySelectorAll("[data-state]").forEach(var_core_value_sig2AD8 => {
              this._syncClosedPortalInputGuard(var_core_value_sig2AD8, var_core_value_sig5241.embedId);
            }));
          });
        }), var_core_value_sig5241.stable && this._cleanupOrdinaryBodyChromeClaims(var_core_value_sig5241.embedId, var_core_value_sigB205);
      });
      var_core_value_sig8AF3.observe(var_core_value_sigB205.body, {
        attributeFilter: ["class", "data-state", "data-u-comp", "id", "role", "style"],
        attributes: true,
        childList: true,
        subtree: true
      }), var_core_value_sig8AF3.takeRecords(), this._portalObservers["set"](var_core_value_sigB205, var_core_value_sig8AF3);
    }
    _markBodyPortalOwner(var_core_value_sigA0CC, var_core_value_sigB3A1, var_core_value_sig1FB9, var_core_value_sig53A9 = {}) {
      var_core_value_sig53A9.allowDirectBodyPortal === false && var_core_value_sigA0CC.parentElement === var_core_value_sig1FB9.body && !this._isUniverPortalCandidate(var_core_value_sigA0CC) && !this._isAppShellEditorPortalCandidate(var_core_value_sigA0CC) || this._isBodyPortalCandidate(var_core_value_sigA0CC, var_core_value_sig1FB9, var_core_value_sig53A9) && (!this._isAppShellEditorPortalCandidate(var_core_value_sigA0CC) && this._isDetachedOffscreenPortalCandidate(var_core_value_sigA0CC, var_core_value_sig1FB9) || (this._blurActiveElementBeforePortalReassignment(var_core_value_sigA0CC, var_core_value_sigB3A1, var_core_value_sig1FB9), this._markInteractionBoundaryOwnerTree(var_core_value_sigB3A1, var_core_value_sigA0CC, {
        transient: true
      }), this._markRuntimeFocusRole(var_core_value_sigA0CC, var_core_value_sig53A9)));
    }
    _markExistingBodyPortals(var_core_value_sigDACD, var_core_value_sig691E, var_core_value_sigD6D6 = {}) {
      var_core_value_sig691E.body["querySelectorAll"]("*").forEach(var_core_value_sigCEFB => {
        this._markBodyPortalOwner(var_core_value_sigCEFB, var_core_value_sigDACD, var_core_value_sig691E, {
          includeAppShellEditorPortal: var_core_value_sigD6D6.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: var_core_value_sigD6D6.allowOwnedPortalReassignment,
          allowDirectBodyPortal: var_core_value_sigD6D6.allowDirectBodyPortal
        });
      });
    }
    _isBodyPortalCandidate(var_core_value_sig0347, var_core_value_sig52A3, var_core_value_sigAD91 = {}) {
      if (!var_core_value_sig52A3.body["contains"](var_core_value_sig0347)) return false;
      let var_core_value_sigF64E = !!var_core_value_sigAD91.includeAppShellEditorPortal && this._isAppShellEditorPortalCandidate(var_core_value_sig0347),
        var_core_value_sig9B3D = this._isUniverPortalCandidate(var_core_value_sig0347);
      if (!var_core_value_sigAD91.allowOwnedPortalReassignment && !var_core_value_sigF64E && var_core_value_sig0347.closest("[data-embed-interaction-boundary-owner]") || var_core_value_sig0347.id === "app") return false;
      let var_core_value_sigB217 = var_core_value_sig0347.parentElement;
      return !!var_core_value_sigAD91.allowDirectBodyPortal && var_core_value_sigB217 === var_core_value_sig52A3.body || (var_core_value_sigB217 == null ? undefined : var_core_value_sigB217.closest("[data-radix-popper-content-wrapper]")) != null || var_core_value_sig9B3D || var_core_value_sigF64E;
    }
    _isAppShellEditorPortalCandidate(var_core_value_sig1FE6) {
      var var_core_value_sig2471, var_core_value_sigD1FC;
      return ((var_core_value_sig2471 = var_core_value_sig1FE6.parentElement) == null ? undefined : var_core_value_sig2471.id) !== "app" && ((var_core_value_sigD1FC = var_core_value_sig1FE6.closest("#app")) == null ? undefined : var_core_value_sigD1FC.parentElement) !== var_core_value_sig1FE6.ownerDocument["body"] ? false : var_core_value_sig1FE6.id["startsWith"]("univer-doc-selection-container-__INTERNAL_EDITOR__") || var_core_value_sig1FE6.id["startsWith"]("__editor___INTERNAL_EDITOR__") || var_core_value_sig1FE6.closest('[id^="univer-doc-selection-container-__INTERNAL_EDITOR__"]') != null || var_core_value_sig1FE6.closest('[id^="__editor___INTERNAL_EDITOR__"]') != null;
    }
    _isHostDocEditorPortal(var_core_value_sigE2F9) {
      return var_core_value_sigE2F9.id["startsWith"]("__editor_docs-") || var_core_value_sigE2F9.id["startsWith"]("univer-doc-selection-container-docs-") || var_core_value_sigE2F9.closest('[id^="univer-doc-selection-container-docs-"]') != null || var_core_value_sigE2F9.closest('[id^="__editor_docs-"]') != null;
    }
    _isUniverPortalCandidate(var_core_value_sigD689) {
      let var_core_value_sig7AE3 = typeof var_core_value_sigD689.className == "string" ? var_core_value_sigD689.className : "";
      if (var_core_value_sigD689.getAttribute("data-u-comp") === "rect-popup" || var_core_value_sigD689.classList["contains"]("univer-popup") || var_core_value_sigD689.classList["contains"]("univer-popover") || var_core_value_sigD689.classList["contains"]("univer-dropdown") || /\buniver-(popup|popover|dropdown|calendar|tooltip|menu)\b/["test"](var_core_value_sig7AE3)) return true;
      let var_core_value_sig1EB3 = var_core_value_sigD689.getAttribute("role");
      return var_core_value_sig1EB3 === "dialog" || var_core_value_sig1EB3 === "listbox" || var_core_value_sig1EB3 === "menu" || var_core_value_sig1EB3 === "tooltip" || var_core_value_sigD689.hasAttribute("data-radix-popper-content-wrapper");
    }
    _isDetachedOffscreenPortalCandidate(var_core_value_sigE120, var_core_value_sigD6E7) {
      if (!this._isUniverPortalTreeElement(var_core_value_sigE120)) return false;
      let var_core_value_sig3669 = var_core_value_sigE120.closest(".univer-popup,\x20.univer-popover,\x20.univer-dropdown,\x20[data-radix-popper-content-wrapper],\x20[data-u-comp=\x22rect-popup\x22],\x20[role=\x22dialog\x22],\x20[role=\x22listbox\x22],\x20[role=\x22menu\x22],\x20[role=\x22tooltip\x22]") ?? var_core_value_sigE120,
        var_core_value_sig5CBC = var_core_value_sig3669.closest("#app") ?? var_core_value_sig3669.parentElement;
      if (var_core_value_sig3669.parentElement !== var_core_value_sigD6E7.body && (var_core_value_sig5CBC == null ? undefined : var_core_value_sig5CBC.parentElement) !== var_core_value_sigD6E7.body) return false;
      let var_core_value_sig20BE = var_core_value_sigD6E7.defaultView;
      if (!var_core_value_sig20BE) return false;
      let var_core_value_sig6BD0 = var_core_value_sig3669.getBoundingClientRect();
      return var_core_value_sig6BD0.right < 0 || var_core_value_sig6BD0.bottom < 0 || var_core_value_sig6BD0.left > var_core_value_sig20BE.innerWidth || var_core_value_sig6BD0.top > var_core_value_sig20BE.innerHeight ? true : var_core_value_sig6BD0.width <= 0 || var_core_value_sig6BD0.height <= 0 ? var_core_value_sig6BD0.left < 0 || var_core_value_sig6BD0.top < 0 || var_core_value_sig6BD0.left > var_core_value_sig20BE.innerWidth || var_core_value_sig6BD0.top > var_core_value_sig20BE.innerHeight : false;
    }
    _markRuntimeFocusRole(var_core_value_sig8C15, var_core_value_sig6DF7 = {}) {
      let var_core_value_sigB411 = var_core_value_sig6DF7.includeAppShellEditorPortal && this._isAppShellEditorPortalCandidate(var_core_value_sig8C15) ? "child-editor" : this._isUniverPortalTreeElement(var_core_value_sig8C15) ? "child-popup" : undefined;
      var_core_value_sigB411 && (var_core_value_sig8C15.setAttribute(G, var_core_value_sigB411), var_core_value_sig8C15.querySelectorAll("*").forEach(var_core_value_sig1537 => {
        var_core_value_sig1537.setAttribute(G, var_core_value_sigB411);
      }));
    }
    _syncClosedPortalInputGuard(var_core_value_sigA81B, var_core_value_sigFE8D) {
      let var_core_value_sig8595 = this._isUniverPortalCandidate(var_core_value_sigA81B) || var_core_value_sigA81B.closest("[data-radix-popper-content-wrapper]") != null,
        var_core_value_sigF8DE = var_core_value_sigA81B.getAttribute("data-embed-interaction-boundary-owner") === var_core_value_sigFE8D && var_core_value_sigA81B.getAttribute("data-state") === "closed" && var_core_value_sig8595,
        var_core_value_sigFE76 = var_core_value_sigA81B.closest("[data-radix-popper-content-wrapper]") ?? var_core_value_sigA81B;
      if (var_core_value_sigF8DE) {
        var_core_value_sigFE76.classList["contains"](le) || (var_core_value_sigFE76.classList["add"](le), this._closedPortalInputGuards["add"](var_core_value_sigFE76));
        return;
      }
      this._clearClosedPortalInputGuard(var_core_value_sigFE76);
    }
    _clearClosedPortalInputGuard(var_core_value_sig84C8) {
      this._closedPortalInputGuards["has"](var_core_value_sig84C8) && (var_core_value_sig84C8.classList["remove"](le), this._closedPortalInputGuards["delete"](var_core_value_sig84C8));
    }
    _markInteractionBoundaryOwnerTree(var_core_value_sig80C0, var_core_value_sig22B4, var_core_value_sigBB37 = {}) {
      let var_core_value_sig0C51 = new Map(),
        var_core_value_sigADA4 = new Map(),
        var_core_value_sig0E48 = this._childUnitIds["get"](var_core_value_sig80C0),
        var_core_value_sig495B = var_core_value_sigE4C6 => {
          var_core_value_sigBB37.transient || (var_core_value_sig0C51.set(var_core_value_sigE4C6, var_core_value_sigE4C6.getAttribute(q)), var_core_value_sigADA4.set(var_core_value_sigE4C6, var_core_value_sigE4C6.getAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE))), var_core_value_sigE4C6.setAttribute(q, var_core_value_sig80C0), var_core_value_sig0E48 && var_core_value_sigE4C6.setAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE, var_core_value_sig0E48);
        };
      return var_core_value_sig495B(var_core_value_sig22B4), var_core_value_sig22B4.querySelectorAll("*").forEach(var_core_value_sig495B), (0, a.toDisposable)(() => {
        var_core_value_sig0C51.forEach((var_core_value_sig9E2F, var_core_value_sigD082) => {
          if (var_core_value_sig9E2F == null) {
            var_core_value_sigD082.removeAttribute(q);
            return;
          }
          var_core_value_sigD082.setAttribute(q, var_core_value_sig9E2F);
        }), var_core_value_sigADA4.forEach((var_core_value_sigDBB7, var_core_value_sigD0A8) => {
          if (var_core_value_sigDBB7 == null) {
            var_core_value_sigD0A8.removeAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE);
            return;
          }
          var_core_value_sigD0A8.setAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE, var_core_value_sigDBB7);
        });
      });
    }
    _isUniverPortalTreeElement(var_core_value_sig310C) {
      return this._isUniverPortalCandidate(var_core_value_sig310C) || var_core_value_sig310C.closest('.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]') != null;
    }
    _getBodyPortalOwner(var_core_value_sig759E) {
      let var_core_value_sig6C80 = this._getLatestActivePortalOwner(var_core_value_sig759E);
      if (var_core_value_sig6C80) return {
        embedId: var_core_value_sig6C80.embedId,
        includeAppShellEditorPortal: var_core_value_sig6C80.includeAppShellEditorPortal,
        stable: true
      };
      let var_core_value_sig6B99 = this._pendingPortalOwner;
      if (var_core_value_sig6B99 && var_core_value_sig6B99.document === var_core_value_sig759E && Date.now() <= var_core_value_sig6B99.expiresAt) return {
        embedId: var_core_value_sig6B99.embedId,
        includeAppShellEditorPortal: false,
        stable: false
      };
    }
    _getLatestActivePortalOwner(var_core_value_sig6ADC) {
      let var_core_value_sig41AD = this._activePortalOwners["get"](var_core_value_sig6ADC);
      return var_core_value_sig41AD == null ? undefined : var_core_value_sig41AD[var_core_value_sig41AD.length - 1];
    }
    _cleanupOrdinaryBodyChromeClaims(var_core_value_sigDBC2, var_core_value_sig7739) {
      let var_core_value_sig4040 = this._roots["get"](var_core_value_sigDBC2);
      var_core_value_sig7739.body["querySelectorAll"]("[" + q + "=\x22" + var_core_value_sigDBC2 + "\x22]").forEach(var_core_value_sig4313 => {
        var_core_value_sig4313.parentElement === var_core_value_sig7739.body && (var_core_value_sig4040 && [...var_core_value_sig4040].some(var_core_value_sigF4B9 => var_core_value_sigF4B9 === var_core_value_sig4313 || var_core_value_sigF4B9.contains(var_core_value_sig4313)) || this._isUniverPortalCandidate(var_core_value_sig4313) || this._isAppShellEditorPortalCandidate(var_core_value_sig4313) || (var_core_value_sig4313.removeAttribute(q), var_core_value_sig4313.removeAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE)));
      });
    }
    _blurActiveElementBeforePortalReassignment(var_core_value_sig1AAA, var_core_value_sig58DB, var_core_value_sig4840) {
      let var_core_value_sigB76D = var_core_value_sig1AAA.getAttribute(q);
      if (!var_core_value_sigB76D || var_core_value_sigB76D === var_core_value_sig58DB) return;
      let var_core_value_sig1015 = var_core_value_sig4840.activeElement;
      !(var_core_value_sig1015 instanceof HTMLElement) || var_core_value_sig1015 !== var_core_value_sig1AAA && !var_core_value_sig1AAA.contains(var_core_value_sig1015) || (var_core_value_sig1015.blur(), var_core_value_sig4840.activeElement === var_core_value_sig1015 && this._focusDocumentBody(var_core_value_sig4840));
    }
    _releaseBodyPortalClaims(var_core_value_sig6223, var_core_value_sigC6B6) {
      let var_core_value_sig498A = this._roots["get"](var_core_value_sig6223),
        var_core_value_sigEF45 = var_core_value_sigC6B6.body["querySelectorAll"]("[" + q + "=\x22" + var_core_value_sig6223 + "\x22]"),
        var_core_value_sig36FE = var_core_value_sigFC87 => var_core_value_sig498A != null && [...var_core_value_sig498A].some(var_core_value_sig5CEE => var_core_value_sig5CEE === var_core_value_sigFC87 || var_core_value_sig5CEE.contains(var_core_value_sigFC87)),
        var_core_value_sig3AF5 = [];
      var_core_value_sigEF45.forEach(var_core_value_sig156F => {
        var_core_value_sig36FE(var_core_value_sig156F) || (var_core_value_sig3AF5.push(var_core_value_sig156F), this._clearClosedPortalInputGuard(var_core_value_sig156F), var_core_value_sig156F.removeAttribute(q), var_core_value_sig156F.removeAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE), this._removeRuntimeFocusRoleTree(var_core_value_sig156F));
      });
      let var_core_value_sig14E6 = var_core_value_sigC6B6.activeElement;
      var_core_value_sig14E6 instanceof HTMLElement && var_core_value_sig3AF5.some(var_core_value_sigDD51 => var_core_value_sigDD51 === var_core_value_sig14E6 || var_core_value_sigDD51.contains(var_core_value_sig14E6)) && (var_core_value_sig14E6.blur(), var_core_value_sigC6B6.activeElement === var_core_value_sig14E6 && this._focusDocumentBody(var_core_value_sigC6B6));
    }
    _focusDocumentBody(var_core_value_sig8690) {
      let var_core_value_sigDF29 = var_core_value_sig8690.body;
      if (!var_core_value_sigDF29) return;
      let var_core_value_sigC0F8 = var_core_value_sigDF29.getAttribute("tabindex");
      var_core_value_sigC0F8 ?? (var_core_value_sigDF29.tabIndex = -1), var_core_value_sigDF29.focus({
        preventScroll: true
      }), var_core_value_sigC0F8 == null ? var_core_value_sigDF29.removeAttribute("tabindex") : var_core_value_sigDF29.setAttribute("tabindex", var_core_value_sigC0F8), var_core_value_sig8690.activeElement !== var_core_value_sigDF29 && this._focusTemporarySink(var_core_value_sig8690);
    }
    _focusTemporarySink(var_core_value_sig3C75) {
      var var_core_value_sig992D;
      let var_core_value_sigE4E4 = var_core_value_sig3C75.body;
      if (!var_core_value_sigE4E4) return;
      let var_core_value_sigA4B0 = var_core_value_sig3C75.createElement("span");
      var_core_value_sigA4B0.tabIndex = -1, var_core_value_sigA4B0.setAttribute("aria-hidden", "true"), var_core_value_sigA4B0.style["cssText"] = "position:fixed;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none;", var_core_value_sigE4E4.appendChild(var_core_value_sigA4B0), var_core_value_sigA4B0.focus({
        preventScroll: true
      }), (var_core_value_sig992D = var_core_value_sig3C75.defaultView) == null || var_core_value_sig992D.setTimeout(() => var_core_value_sigA4B0.remove(), 0);
    }
    _removeRuntimeFocusRoleTree(var_core_value_sig5F50) {
      (var_core_value_sig5F50.getAttribute("data-embed-runtime-focus-role") === "child-editor" || var_core_value_sig5F50.getAttribute("data-embed-runtime-focus-role") === "child-popup") && var_core_value_sig5F50.removeAttribute(G), var_core_value_sig5F50.querySelectorAll("[" + G + "]").forEach(var_core_value_sigF057 => {
        let var_core_value_sig72F6 = var_core_value_sigF057.getAttribute(G);
        (var_core_value_sig72F6 === "child-editor" || var_core_value_sig72F6 === "child-popup") && var_core_value_sigF057.removeAttribute(G);
      });
    }
  },
  Y = class {
    constructor(var_core_value_sig4494 = {}) {
      V(this, "_childUnitAncestry", new Map()), V(this, "_maxDepth", undefined), this._maxDepth = ue(var_core_value_sig4494.maxDepth);
    }
    canMount(var_core_value_sigFFAF) {
      let var_core_value_sig478B = this.getAncestryForHostUnit(var_core_value_sigFFAF.hostUnitId);
      return var_core_value_sig478B.some(var_core_value_sig9FBA => var_core_value_sig9FBA.hostUnitId === var_core_value_sigFFAF.childUnitId || var_core_value_sig9FBA.childUnitId === var_core_value_sigFFAF.childUnitId) ? {
        allowed: false,
        reason: "cycle",
        ancestry: var_core_value_sig478B
      } : var_core_value_sig478B.length >= this._maxDepth ? {
        allowed: false,
        reason: "max-depth",
        ancestry: var_core_value_sig478B
      } : {
        allowed: true,
        ancestry: var_core_value_sig478B
      };
    }
    registerMountedRuntime(var_core_value_sig1E21) {
      let var_core_value_sig9DBF = [...this.getAncestryForHostUnit(var_core_value_sig1E21.hostUnitId), {
        hostUnitId: var_core_value_sig1E21.hostUnitId,
        embedId: var_core_value_sig1E21.embedId,
        childUnitId: var_core_value_sig1E21.childUnitId
      }];
      return this._childUnitAncestry["set"](var_core_value_sig1E21.childUnitId, var_core_value_sig9DBF), (0, a.toDisposable)(() => {
        this._childUnitAncestry["get"](var_core_value_sig1E21.childUnitId) === var_core_value_sig9DBF && this._childUnitAncestry["delete"](var_core_value_sig1E21.childUnitId);
      });
    }
    getAncestryForHostUnit(var_core_value_sig36CC) {
      return this._childUnitAncestry["get"](var_core_value_sig36CC) ?? [];
    }
    getParentEmbedId(var_core_value_sigA568) {
      var var_core_value_sigD22D;
      return (var_core_value_sigD22D = this.getAncestryForHostUnit(var_core_value_sigA568).slice(-1)[0]) == null ? undefined : var_core_value_sigD22D.embedId;
    }
  };
function ue(var_core_value_sig0461) {
  return typeof var_core_value_sig0461 == "number" && Number.isFinite(var_core_value_sig0461) && var_core_value_sig0461 >= 0 ? Math.floor(var_core_value_sig0461) : 1;
}
function X(var_core_value_sig4A6A, var_core_value_sig52B7) {
  return function (var_core_value_sig85D5, var_core_value_sig5D2E) {
    var_core_value_sig52B7(var_core_value_sig85D5, var_core_value_sig5D2E, var_core_value_sig4A6A);
  };
}
function Z(var_core_value_sig5BA8, var_core_value_sig6CA3, var_core_value_sig489C, var_core_value_sig9BF2) {
  var var_core_value_sigAD59 = arguments.length,
    var_core_value_sigD8D7 = var_core_value_sigAD59 < 3 ? var_core_value_sig6CA3 : var_core_value_sig9BF2 === null ? var_core_value_sig9BF2 = Object.getOwnPropertyDescriptor(var_core_value_sig6CA3, var_core_value_sig489C) : var_core_value_sig9BF2,
    var_core_value_sigDD66;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigD8D7 = Reflect.decorate(var_core_value_sig5BA8, var_core_value_sig6CA3, var_core_value_sig489C, var_core_value_sig9BF2);else {
    for (var var_core_value_sigDCB6 = var_core_value_sig5BA8.length - 1; var_core_value_sigDCB6 >= 0; var_core_value_sigDCB6--) (var_core_value_sigDD66 = var_core_value_sig5BA8[var_core_value_sigDCB6]) && (var_core_value_sigD8D7 = (var_core_value_sigAD59 < 3 ? var_core_value_sigDD66(var_core_value_sigD8D7) : var_core_value_sigAD59 > 3 ? var_core_value_sigDD66(var_core_value_sig6CA3, var_core_value_sig489C, var_core_value_sigD8D7) : var_core_value_sigDD66(var_core_value_sig6CA3, var_core_value_sig489C)) || var_core_value_sigD8D7);
  }
  return var_core_value_sigAD59 > 3 && var_core_value_sigD8D7 && Object.defineProperty(var_core_value_sig6CA3, var_core_value_sig489C, var_core_value_sigD8D7), var_core_value_sigD8D7;
}
let de = class extends a.Disposable {
  constructor(var_core_value_sig7221) {
    super(), this._runtimeScopeService = var_core_value_sig7221, V(this, "_entries", new Map());
  }
  acquire(var_core_value_sig0A5A) {
    let var_core_value_sigE6D6 = this._entries["get"](var_core_value_sig0A5A.unitId);
    if (!var_core_value_sigE6D6) {
      let var_core_value_sigFE01 = [],
        var_core_value_sigA2CE = {
          unitId: var_core_value_sig0A5A.unitId,
          has: var_core_value_sigE92A => {
            var var_core_value_sig362B;
            return ((var_core_value_sig362B = var_core_value_sigFE01[var_core_value_sigFE01.length - 1]) == null ? undefined : var_core_value_sig362B.has(var_core_value_sigE92A)) ?? false;
          },
          get: var_core_value_sig5CA5 => {
            let var_core_value_sigE90F = var_core_value_sigFE01[var_core_value_sigFE01.length - 1];
            if (!var_core_value_sigE90F) throw Error("EMBED_UI_RUNTIME_SCOPE_NOT_ACTIVE:" + var_core_value_sig0A5A.unitId);
            return var_core_value_sigE90F.get(var_core_value_sig5CA5);
          }
        };
      var_core_value_sigE6D6 = {
        registration: this._runtimeScopeService["register"](var_core_value_sigA2CE),
        scopes: var_core_value_sigFE01
      }, this._entries["set"](var_core_value_sig0A5A.unitId, var_core_value_sigE6D6);
    }
    let var_core_value_sig8507 = var_core_value_sigE6D6;
    return var_core_value_sig8507.scopes["push"](var_core_value_sig0A5A), (0, a.toDisposable)(() => {
      let var_core_value_sig1975 = var_core_value_sig8507.scopes["lastIndexOf"](var_core_value_sig0A5A);
      var_core_value_sig1975 < 0 || (var_core_value_sig8507.scopes["splice"](var_core_value_sig1975, 1), !(var_core_value_sig8507.scopes["length"] > 0 || this._entries["get"](var_core_value_sig0A5A.unitId) !== var_core_value_sig8507) && (var_core_value_sig8507.registration["dispose"](), this._entries["delete"](var_core_value_sig0A5A.unitId)));
    });
  }
  dispose() {
    this._entries["forEach"](({
      registration: var_core_value_sig6EA1
    }) => var_core_value_sig6EA1.dispose()), this._entries["clear"](), super.dispose();
  }
};
de = Z([X(0, c.IUIRuntimeScopeService)], de);
const fe = new Set(["identifier:univer.menu-manager-service", "identifier:univer.ribbon-service", "identifier:ui.contextmenu.service", "identifier:ui.popup.service", "identifier:ui.sidebar.service", "identifier:ui.layout-service", "identifier:univer.sheet.selection-render-service"]),
  pe = "FOCUSING_BASE",
  Q = [a.FOCUSING_UNIT, a.FOCUSING_UNIVER_EDITOR, a.FOCUSING_SHEET, a.FOCUSING_DOC, a.FOCUSING_SLIDE, a.FOCUSING_BOARD, pe, a.EDITOR_ACTIVATED, a.FORMULA_EDITOR_ACTIVATED, a.FOCUSING_FX_BAR_EDITOR],
  me = new Set([c.CopyCommand["id"], c.CutCommand["id"], c.PasteCommand["id"], a.UndoCommand["id"], a.RedoCommand["id"]]),
  he = new Set(["docs-exchange-client.operation.import-doc", "sheets-exchange-client.operation.import-sheet", "slides-exchange-client.operation.import-slide", "bases-exchange-client.operation.import-base", "boards-exchange-client.operation.insert-mermaid"]);
function ge(var_core_value_sigA346, var_core_value_sigDB37 = []) {
  let var_core_value_sig2400 = var_core_value_sigA346.injector["get"](a.IUniverInstanceService),
    var_core_value_sig33E7 = var_core_value_sig2400.getUnit(var_core_value_sigA346.childUnitId, var_core_value_sigA346.childType);
  if (!var_core_value_sig33E7) return;
  let var_core_value_sigCBAB = ye(var_core_value_sig2400, var_core_value_sigA346, var_core_value_sig33E7, new f["BehaviorSubject"](var_core_value_sig33E7), new f["BehaviorSubject"](var_core_value_sigA346.renderScope["mode"] === "float" && !var_core_value_sigA346.renderScope["fullscreen"] ? null : var_core_value_sig33E7.getUnitId())),
    var_core_value_sigE3A5 = Ne(var_core_value_sigA346.injector, var_core_value_sigA346.childType),
    var_core_value_sig500F = je(var_core_value_sigA346),
    var_core_value_sig2D30 = xe(var_core_value_sigA346.injector["get"](a.ICommandService), var_core_value_sigA346, var_core_value_sig2400, var_core_value_sig500F, var_core_value_sigE3A5),
    var_core_value_sig94E7 = new Map([[a.IUniverInstanceService, var_core_value_sigCBAB], [a.ICommandService, var_core_value_sig2D30]]);
  var_core_value_sigA346.childType === a.UniverInstanceType["UNIVER_DOC"] && var_core_value_sigA346.injector["has"](o.IDocClipboardService) && var_core_value_sig94E7.set(o.IDocClipboardService, _e(var_core_value_sigA346.injector["get"](o.IDocClipboardService), var_core_value_sig2400, var_core_value_sigA346.childUnitId)), var_core_value_sigA346.injector["has"](a.IConfigService) && var_core_value_sig94E7.set(a.IConfigService, Re(var_core_value_sigA346.injector["get"](a.IConfigService)));
  let var_core_value_sig7A7B = [];
  var_core_value_sigA346.injector["has"](Y) && var_core_value_sig94E7.set(Y, var_core_value_sigA346.injector["get"](Y)), var_core_value_sigE3A5 && var_core_value_sig94E7.set(a.IContextService, var_core_value_sigE3A5);
  let var_core_value_sigA2D7 = $(var_core_value_sigA346.injector, var_core_value_sig94E7);
  var_core_value_sigDB37.forEach(var_core_value_sig8A7F => var_core_value_sigA2D7.add(var_core_value_sig8A7F));
  let var_core_value_sig0A36 = it(var_core_value_sigA346.injector, var_core_value_sigA2D7);
  if (var_core_value_sig0A36) {
    var_core_value_sigA2D7.add([c.IMenuManagerService, {
      useValue: var_core_value_sig0A36
    }]);
    let var_core_value_sig9E81 = new c["DesktopRibbonService"](var_core_value_sig0A36, var_core_value_sigCBAB);
    var_core_value_sigA2D7.add([c.IRibbonService, {
      useValue: var_core_value_sig9E81
    }]), var_core_value_sig7A7B.push(var_core_value_sig9E81);
  }
  if (var_core_value_sigA346.renderScope["fullscreen"]) {
    let var_core_value_sig8295 = ct(var_core_value_sigA2D7, var_core_value_sigA346.childUnitId),
      var_core_value_sigA975 = new c["CanvasPopupService"](),
      var_core_value_sig1263 = new c["DesktopSidebarService"]();
    var_core_value_sigA2D7.add([c.IContextMenuService, {
      useValue: var_core_value_sig8295
    }]), var_core_value_sigA2D7.add([c.ICanvasPopupService, {
      useValue: var_core_value_sigA975
    }]), var_core_value_sigA2D7.add([c.ISidebarService, {
      useValue: var_core_value_sig1263
    }]), var_core_value_sig7A7B.push(var_core_value_sig8295, var_core_value_sigA975, var_core_value_sig1263);
  } else {
    let var_core_value_sig457C = st(var_core_value_sigA346.injector, var_core_value_sigA2D7, var_core_value_sigA346.childUnitId);
    var_core_value_sig457C && var_core_value_sigA2D7.add([c.IContextMenuService, {
      useValue: var_core_value_sig457C
    }]);
  }
  let var_core_value_sig87E7 = lt(var_core_value_sigA346.injector, var_core_value_sigA346);
  var_core_value_sigA2D7.add([c.ILayoutService, {
    useValue: var_core_value_sig87E7
  }]);
  let var_core_value_sig5276 = {
    unitId: var_core_value_sigA346.childUnitId,
    has: var_core_value_sigA4E6 => var_core_value_sigA2D7.has(var_core_value_sigA4E6),
    get: var_core_value_sig934F => var_core_value_sigA2D7.get(var_core_value_sig934F)
  };
  if (var_core_value_sigA346.injector["has"](de) ? var_core_value_sig7A7B.push(var_core_value_sigA346.injector["get"](de).acquire(var_core_value_sig5276)) : var_core_value_sigA346.injector["has"](c.IUIRuntimeScopeService) && var_core_value_sig7A7B.push(var_core_value_sigA346.injector["get"](c.IUIRuntimeScopeService).register(var_core_value_sig5276)), var_core_value_sig7A7B.length) {
    let var_core_value_sig74A7 = var_core_value_sigA2D7.dispose["bind"](var_core_value_sigA2D7),
      var_core_value_sig3685 = false;
    var_core_value_sigA2D7.dispose = () => {
      var_core_value_sig3685 || (var_core_value_sig3685 = true, var_core_value_sig7A7B.forEach(var_core_value_sigEFD4 => var_core_value_sigEFD4.dispose()), var_core_value_sig74A7());
    };
  }
  return var_core_value_sigA2D7;
}
function _e(var_core_value_sig0B66, var_core_value_sig8E9E, var_core_value_sig9A69) {
  let var_core_value_sig2A04 = async var_core_value_sigC621 => {
    let var_core_value_sig86D7 = var_core_value_sig8E9E.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_DOC"]);
    var_core_value_sig8E9E.setCurrentUnitForType(var_core_value_sig9A69);
    try {
      return await var_core_value_sigC621();
    } finally {
      Ce(var_core_value_sig8E9E, var_core_value_sig86D7);
    }
  };
  return {
    addClipboardHook: var_core_value_sig0B66.addClipboardHook["bind"](var_core_value_sig0B66),
    copy: (...var_core_value_sig431B) => var_core_value_sig2A04(() => var_core_value_sig0B66.copy(...var_core_value_sig431B)),
    cut: (...var_core_value_sig5C7C) => var_core_value_sig2A04(() => var_core_value_sig0B66.cut(...var_core_value_sig5C7C)),
    legacyPaste: (...var_core_value_sig87E2) => var_core_value_sig2A04(() => var_core_value_sig0B66.legacyPaste(...var_core_value_sig87E2)),
    paste: (...var_core_value_sig2E04) => var_core_value_sig2A04(() => var_core_value_sig0B66.paste(...var_core_value_sig2E04))
  };
}
function ve(var_core_value_sigA30D, var_core_value_sig4F28) {
  if (!var_core_value_sigA30D.has(a.IConfigService)) return;
  let var_core_value_sigE7DA = var_core_value_sigA30D.get(a.IConfigService);
  return $(var_core_value_sigA30D, new Map([[a.IConfigService, Le(var_core_value_sigE7DA, var_core_value_sig4F28)]]));
}
function ye(var_core_value_sig56D1, var_core_value_sig2EDE, var_core_value_sig70CD, var_core_value_sig60A5, var_core_value_sig89B2) {
  return {
    unitAdded$: var_core_value_sig56D1.unitAdded$,
    getTypeOfUnitAdded$: (...var_core_value_sig2EDD) => var_core_value_sig56D1.getTypeOfUnitAdded$(...var_core_value_sig2EDD),
    __addUnit: (...var_core_value_sig27D2) => var_core_value_sig56D1.__addUnit(...var_core_value_sig27D2),
    unitDisposed$: var_core_value_sig56D1.unitDisposed$,
    getTypeOfUnitDisposed$: (...var_core_value_sig355D) => var_core_value_sig56D1.getTypeOfUnitDisposed$(...var_core_value_sig355D),
    focused$: var_core_value_sig89B2.asObservable(),
    focusUnit: var_core_value_sig8B21 => {
      if (var_core_value_sig8B21 === null || be(var_core_value_sig2EDE, var_core_value_sig8B21)) {
        var_core_value_sig89B2.getValue() !== var_core_value_sig8B21 && var_core_value_sig89B2.next(var_core_value_sig8B21);
        return;
      }
      var_core_value_sig56D1.focusUnit(var_core_value_sig8B21);
    },
    getFocusedUnit: () => {
      let var_core_value_sigEB36 = var_core_value_sig89B2.getValue();
      return var_core_value_sigEB36 === null ? null : var_core_value_sigEB36 === var_core_value_sig2EDE.childUnitId ? var_core_value_sig70CD : (0, a.isInternalEditorID)(var_core_value_sigEB36) ? var_core_value_sig56D1.getUnit(var_core_value_sigEB36) ?? var_core_value_sig70CD : var_core_value_sig56D1.getFocusedUnit();
    },
    getCurrentUnitOfType: var_core_value_sig5C27 => var_core_value_sig5C27 === var_core_value_sig2EDE.childType ? var_core_value_sig60A5.getValue() : var_core_value_sig56D1.getCurrentUnitOfType(var_core_value_sig5C27),
    setCurrentUnitForType: var_core_value_sigD494 => {
      if (be(var_core_value_sig2EDE, var_core_value_sigD494)) {
        var_core_value_sig60A5.getValue() !== var_core_value_sig70CD && var_core_value_sig60A5.next(var_core_value_sig70CD);
        return;
      }
      var_core_value_sig56D1.setCurrentUnitForType(var_core_value_sigD494);
    },
    getCurrentTypeOfUnit$: var_core_value_sigBF6D => var_core_value_sigBF6D === var_core_value_sig2EDE.childType ? var_core_value_sig60A5.asObservable() : var_core_value_sig56D1.getCurrentTypeOfUnit$(var_core_value_sigBF6D),
    createUnit: (...var_core_value_sigD051) => var_core_value_sig56D1.createUnit(...var_core_value_sigD051),
    getUnitCreateOptions: (...var_core_value_sig16D9) => var_core_value_sig56D1.getUnitCreateOptions(...var_core_value_sig16D9),
    disposeUnit: (...var_core_value_sigF378) => var_core_value_sig56D1.disposeUnit(...var_core_value_sigF378),
    registerCtorForType: (...var_core_value_sig5F6C) => var_core_value_sig56D1.registerCtorForType(...var_core_value_sig5F6C),
    getUnit: (...var_core_value_sig7E85) => var_core_value_sig56D1.getUnit(...var_core_value_sig7E85),
    getAllUnitsForType: (...var_core_value_sigF204) => var_core_value_sig56D1.getAllUnitsForType(...var_core_value_sigF204),
    getUnitType: (...var_core_value_sig7A15) => var_core_value_sig56D1.getUnitType(...var_core_value_sig7A15),
    dispose: () => {}
  };
}
function be(var_core_value_sigE594, var_core_value_sig63D7) {
  return var_core_value_sig63D7 === var_core_value_sigE594.childUnitId || (0, a.isInternalEditorID)(var_core_value_sig63D7);
}
function xe(var_core_value_sig2E44, var_core_value_sig6814, var_core_value_sig0A10, var_core_value_sig9E19, var_core_value_sigC832) {
  let var_core_value_sig9DD2 = var_core_value_sig6814.injector["has"](a.IContextService) ? var_core_value_sig6814.injector["get"](a.IContextService) : undefined;
  return {
    disposed: () => var_core_value_sig2E44.disposed(),
    hasCommand: var_core_value_sigEEA6 => var_core_value_sig2E44.hasCommand(var_core_value_sigEEA6),
    registerCommand: var_core_value_sigEAE1 => var_core_value_sig2E44.registerCommand(var_core_value_sigEAE1),
    unregisterCommand: var_core_value_sigC69F => var_core_value_sig2E44.unregisterCommand(var_core_value_sigC69F),
    registerMultipleCommand: var_core_value_sig0442 => var_core_value_sig2E44.registerMultipleCommand(var_core_value_sig0442),
    executeCommand: async (var_core_value_sig697A, var_core_value_sigDB65, var_core_value_sig045E) => {
      var var_core_value_sig4524;
      let var_core_value_sig64D5 = () => Se(var_core_value_sig697A, var_core_value_sig9DD2, var_core_value_sigC832, () => var_core_value_sig2E44.executeCommand(var_core_value_sig697A, ze(var_core_value_sig6814, var_core_value_sig697A, var_core_value_sigDB65), we(var_core_value_sig6814.childType, var_core_value_sig6814.childUnitId, var_core_value_sig045E))),
        var_core_value_sig9678 = ke(var_core_value_sig6814) && !Te(var_core_value_sig697A) && (!var_core_value_sig6814.renderScope["fullscreen"] || !Ae(var_core_value_sig697A)),
        var_core_value_sig5E74 = var_core_value_sig9E19 || Te(var_core_value_sig697A) || Ae(var_core_value_sig697A) || var_core_value_sig9678,
        var_core_value_sig75FC = var_core_value_sig5E74 ? Ee() : null;
      if (!var_core_value_sig5E74) return await var_core_value_sig64D5();
      let var_core_value_sig639A = var_core_value_sig0A10.getCurrentUnitOfType(var_core_value_sig6814.childType),
        var_core_value_sig567C = ((var_core_value_sig4524 = var_core_value_sig0A10.getFocusedUnit()) == null ? undefined : var_core_value_sig4524.getUnitId()) ?? null;
      try {
        var_core_value_sig0A10.setCurrentUnitForType(var_core_value_sig6814.childUnitId), var_core_value_sig9678 || var_core_value_sig0A10.focusUnit(var_core_value_sig6814.childUnitId);
        let var_core_value_sig029F = var_core_value_sig64D5();
        return var_core_value_sig9678 && me.has(var_core_value_sig697A) && De(var_core_value_sig6814, var_core_value_sig75FC) && Oe(var_core_value_sig6814, var_core_value_sig75FC), await var_core_value_sig029F;
      } finally {
        Ce(var_core_value_sig0A10, var_core_value_sig639A), var_core_value_sig9678 || Be(var_core_value_sig6814, var_core_value_sig0A10, var_core_value_sig567C, var_core_value_sig9E19), (!var_core_value_sig9678 || Te(var_core_value_sig697A) || Ae(var_core_value_sig697A)) && De(var_core_value_sig6814, var_core_value_sig75FC) && Oe(var_core_value_sig6814, var_core_value_sig75FC);
      }
    },
    syncExecuteCommand: (var_core_value_sig825F, var_core_value_sig546D, var_core_value_sig8078) => {
      var var_core_value_sigDCED;
      let var_core_value_sig2829 = () => Se(var_core_value_sig825F, var_core_value_sig9DD2, var_core_value_sigC832, () => var_core_value_sig2E44.syncExecuteCommand(var_core_value_sig825F, ze(var_core_value_sig6814, var_core_value_sig825F, var_core_value_sig546D), we(var_core_value_sig6814.childType, var_core_value_sig6814.childUnitId, var_core_value_sig8078))),
        var_core_value_sig6EE2 = ke(var_core_value_sig6814) && !Te(var_core_value_sig825F) && (!var_core_value_sig6814.renderScope["fullscreen"] || !Ae(var_core_value_sig825F)),
        var_core_value_sig4CCC = var_core_value_sig9E19 || Te(var_core_value_sig825F) || Ae(var_core_value_sig825F) || var_core_value_sig6EE2,
        var_core_value_sig6E47 = var_core_value_sig4CCC ? Ee() : null;
      if (!var_core_value_sig4CCC) return var_core_value_sig2829();
      let var_core_value_sigB64D = var_core_value_sig0A10.getCurrentUnitOfType(var_core_value_sig6814.childType),
        var_core_value_sig2407 = ((var_core_value_sigDCED = var_core_value_sig0A10.getFocusedUnit()) == null ? undefined : var_core_value_sigDCED.getUnitId()) ?? null;
      try {
        var_core_value_sig0A10.setCurrentUnitForType(var_core_value_sig6814.childUnitId), var_core_value_sig6EE2 || var_core_value_sig0A10.focusUnit(var_core_value_sig6814.childUnitId);
        let var_core_value_sig3767 = var_core_value_sig2829();
        return var_core_value_sig6EE2 && me.has(var_core_value_sig825F) && De(var_core_value_sig6814, var_core_value_sig6E47) && Oe(var_core_value_sig6814, var_core_value_sig6E47), var_core_value_sig3767;
      } finally {
        Ce(var_core_value_sig0A10, var_core_value_sigB64D), var_core_value_sig6EE2 || Be(var_core_value_sig6814, var_core_value_sig0A10, var_core_value_sig2407, var_core_value_sig9E19), (!var_core_value_sig6EE2 || Te(var_core_value_sig825F) || Ae(var_core_value_sig825F)) && De(var_core_value_sig6814, var_core_value_sig6E47) && Oe(var_core_value_sig6814, var_core_value_sig6E47);
      }
    },
    onCommandExecuted: var_core_value_sigE4D0 => var_core_value_sig2E44.onCommandExecuted(var_core_value_sigE4D0),
    beforeCommandExecuted: var_core_value_sigD5F1 => var_core_value_sig2E44.beforeCommandExecuted(var_core_value_sigD5F1),
    onMutationExecutedForCollab: var_core_value_sigBC19 => var_core_value_sig2E44.onMutationExecutedForCollab(var_core_value_sigBC19)
  };
}
function Se(var_core_value_sigDB97, var_core_value_sigD1A5, var_core_value_sigA91A, var_core_value_sig2DE0) {
  if (!me.has(var_core_value_sigDB97) || !var_core_value_sigD1A5 || !var_core_value_sigA91A || typeof var_core_value_sigD1A5.setContextValue != "function" || var_core_value_sigD1A5 === var_core_value_sigA91A) return var_core_value_sig2DE0();
  let var_core_value_sig0513 = [];
  for (let var_core_value_sig4F3C of Q) {
    let var_core_value_sig670B = var_core_value_sigD1A5.getContextValue(var_core_value_sig4F3C),
      var_core_value_sig6912 = var_core_value_sigA91A.getContextValue(var_core_value_sig4F3C);
    var_core_value_sig670B !== var_core_value_sig6912 && (var_core_value_sig0513.push({
      key: var_core_value_sig4F3C,
      value: var_core_value_sig670B
    }), var_core_value_sigD1A5.setContextValue(var_core_value_sig4F3C, var_core_value_sig6912));
  }
  try {
    return var_core_value_sig2DE0();
  } finally {
    for (let var_core_value_sigE235 = var_core_value_sig0513.length - 1; var_core_value_sigE235 >= 0; var_core_value_sigE235--) {
      let {
        key: var_core_value_sig861B,
        value: var_core_value_sig5237
      } = var_core_value_sig0513[var_core_value_sigE235];
      var_core_value_sigD1A5.setContextValue(var_core_value_sig861B, var_core_value_sig5237);
    }
  }
}
function Ce(var_core_value_sig35D1, var_core_value_sig5CE7) {
  if (!var_core_value_sig5CE7) return;
  let var_core_value_sig3662 = var_core_value_sig5CE7.getUnitId();
  var_core_value_sig35D1.getUnit(var_core_value_sig3662) && var_core_value_sig35D1.setCurrentUnitForType(var_core_value_sig3662);
}
function we(var_core_value_sigABC5, var_core_value_sig033B, var_core_value_sig2BCC) {
  return var_core_value_sigABC5 === a.UniverInstanceType["UNIVER_BOARD"] ? {
    ...var_core_value_sig2BCC,
    unitId: var_core_value_sig033B
  } : var_core_value_sig2BCC;
}
function Te(var_core_value_sigC260) {
  return var_core_value_sigC260 === a.UndoCommand["id"] || var_core_value_sigC260 === a.RedoCommand["id"];
}
function Ee() {
  return typeof document < "u" && document.activeElement instanceof HTMLElement ? document.activeElement : null;
}
function De(var_core_value_sig15611, var_core_value_sigAAA8) {
  if (!var_core_value_sigAAA8 || var_core_value_sig15611.childType === a.UniverInstanceType["UNIVER_SHEET"]) return var_core_value_sigAAA8 != null;
  let var_core_value_sigA0B9 = var_core_value_sigAAA8;
  for (; var_core_value_sigA0B9;) {
    if (a.SHEET_EDITOR_UNITS["some"](var_core_value_sigBB00 => (var_core_value_sigA0B9 == null ? undefined : var_core_value_sigA0B9.id) === "__editor_" + var_core_value_sigBB00 || (var_core_value_sigA0B9 == null ? undefined : var_core_value_sigA0B9.id) === "univer-doc-selection-container-" + var_core_value_sigBB00)) return false;
    var_core_value_sigA0B9 = var_core_value_sigA0B9.parentElement;
  }
  return true;
}
function Oe(var_core_value_sigB40F, var_core_value_sig86F1) {
  var var_core_value_sig078D;
  let var_core_value_sig60D5 = () => {
    let var_core_value_sig8D44 = var_core_value_sigB40F.renderScope["contentRoot"] ?? var_core_value_sigB40F.renderScope["rootElement"],
      var_core_value_sig1660 = var_core_value_sig86F1 != null && var_core_value_sig86F1.isConnected ? var_core_value_sig86F1 : var_core_value_sig8D44.querySelector("canvas") ?? var_core_value_sig8D44;
    !var_core_value_sig1660.isConnected || var_core_value_sig1660.ownerDocument["activeElement"] === var_core_value_sig1660 || (var_core_value_sig1660.hasAttribute("tabindex") || (var_core_value_sig1660.tabIndex = -1), var_core_value_sig1660.focus({
      preventScroll: true
    }));
  };
  var_core_value_sig60D5(), (var_core_value_sig078D = var_core_value_sigB40F.renderScope["rootElement"].ownerDocument["defaultView"]) == null || var_core_value_sig078D.requestAnimationFrame(var_core_value_sig60D5);
}
function ke(var_core_value_sigD888) {
  if (var_core_value_sigD888.childType === a.UniverInstanceType["UNIVER_BOARD"] || var_core_value_sigD888.renderScope["mode"] !== "float" || !var_core_value_sigD888.injector["has"](K)) return false;
  let var_core_value_sig5337 = var_core_value_sigD888.injector["get"](K).resolveActiveChildSessionRuntimeScope();
  return ((var_core_value_sig5337 == null ? undefined : var_core_value_sig5337.sessionMode) === "child-keyboard" || (var_core_value_sig5337 == null ? undefined : var_core_value_sig5337.sessionMode) === "child-fullscreen") && var_core_value_sig5337.embedId === var_core_value_sigD888.embedId && var_core_value_sig5337.hostUnitId === var_core_value_sigD888.hostUnitId && var_core_value_sig5337.childUnitId === var_core_value_sigD888.childUnitId && var_core_value_sig5337.childType === var_core_value_sigD888.childType;
}
function Ae(var_core_value_sig2381) {
  return var_core_value_sig2381 === s.SetCellEditVisibleOperation["id"];
}
function je(var_core_value_sig573D) {
  return var_core_value_sig573D.renderScope["fullscreen"] || var_core_value_sig573D.descriptor["entry"] === "docs-custom-block" ? true : Me(var_core_value_sig573D);
}
function Me(var_core_value_sigC09F) {
  var var_core_value_sig205A;
  return var_core_value_sigC09F.descriptor["entry"] === "sheets-sheet-tab" || var_core_value_sigC09F.descriptor["entry"] === "bases-table-list-block" || var_core_value_sigC09F.descriptor["entry"] === "slides-page-list-block" || var_core_value_sigC09F.layout === "tab-peer" || !!((var_core_value_sig205A = var_core_value_sigC09F.descriptor["sourceMeta"]) != null && var_core_value_sig205A.tab);
}
function Ne(var_core_value_sig16E2, var_core_value_sig8904) {
  if (!var_core_value_sig16E2.has(a.IContextService)) return;
  let var_core_value_sigBA69 = var_core_value_sig16E2.get(a.IContextService),
    var_core_value_sig4AC2 = Pe(var_core_value_sig8904),
    var_core_value_sig08B2 = new f["Subject"]();
  return {
    contextChanged$: (0, f.merge)((var_core_value_sigBA69.contextChanged$ ?? f.EMPTY).pipe((0, f.map)(var_core_value_sigEE7B => Object.fromEntries(Object.entries(var_core_value_sigEE7B).filter(([var_core_value_sig7664]) => !Ie(var_core_value_sig7664)))), (0, f.filter)(var_core_value_sig44DF => Object.keys(var_core_value_sig44DF).length > 0)), var_core_value_sig08B2),
    getContextValue: var_core_value_sig7E48 => Ie(var_core_value_sig7E48) ? Fe(var_core_value_sig4AC2, var_core_value_sig7E48) : var_core_value_sigBA69.getContextValue(var_core_value_sig7E48),
    setContextValue: (var_core_value_sig7B9E, var_core_value_sig5C3B) => {
      if (!Ie(var_core_value_sig7B9E)) {
        var_core_value_sigBA69.setContextValue(var_core_value_sig7B9E, var_core_value_sig5C3B);
        return;
      }
      var_core_value_sig4AC2.set(var_core_value_sig7B9E, var_core_value_sig5C3B), var_core_value_sig08B2.next({
        [var_core_value_sig7B9E]: var_core_value_sig5C3B
      });
    },
    subscribeContextValue$: var_core_value_sig4002 => Ie(var_core_value_sig4002) ? new f["Observable"](var_core_value_sig2281 => {
      let var_core_value_sig5E86 = var_core_value_sig08B2.pipe((0, f.filter)(var_core_value_sig7E54 => var_core_value_sig7E54[var_core_value_sig4002] !== undefined)).subscribe(var_core_value_sig9A8D => var_core_value_sig2281.next(var_core_value_sig9A8D[var_core_value_sig4002]));
      return var_core_value_sig2281.next(Fe(var_core_value_sig4AC2, var_core_value_sig4002)), () => var_core_value_sig5E86.unsubscribe();
    }) : var_core_value_sigBA69.subscribeContextValue$(var_core_value_sig4002)
  };
}
function Pe(var_core_value_sigDE7F) {
  return new Map([[a.FOCUSING_UNIT, true], [a.FOCUSING_UNIVER_EDITOR, var_core_value_sigDE7F === a.UniverInstanceType["UNIVER_SHEET"] || var_core_value_sigDE7F === a.UniverInstanceType["UNIVER_DOC"] || var_core_value_sigDE7F === a.UniverInstanceType["UNIVER_SLIDE"]], [a.FOCUSING_SHEET, var_core_value_sigDE7F === a.UniverInstanceType["UNIVER_SHEET"]], [a.FOCUSING_DOC, var_core_value_sigDE7F === a.UniverInstanceType["UNIVER_DOC"]], [a.FOCUSING_SLIDE, var_core_value_sigDE7F === a.UniverInstanceType["UNIVER_SLIDE"]], [a.FOCUSING_BOARD, var_core_value_sigDE7F === a.UniverInstanceType["UNIVER_BOARD"]], [pe, var_core_value_sigDE7F === a.UniverInstanceType["UNIVER_BASE"]]]);
}
function Fe(var_core_value_sigD898, var_core_value_sig0386) {
  return var_core_value_sigD898.get(var_core_value_sig0386) ?? false;
}
function Ie(var_core_value_sig577B) {
  return var_core_value_sig577B.startsWith("FOCUSING_") || var_core_value_sig577B === a.EDITOR_ACTIVATED || var_core_value_sig577B === a.FORMULA_EDITOR_ACTIVATED;
}
function Le(var_core_value_sigF342, var_core_value_sig7871) {
  return {
    getConfig: var_core_value_sig4153 => {
      let var_core_value_sig2825 = var_core_value_sigF342.getConfig(var_core_value_sig4153),
        var_core_value_sig5FD0 = var_core_value_sig7871.get(var_core_value_sig4153);
      return var_core_value_sig5FD0 ? var_core_value_sig5FD0(var_core_value_sig2825) : var_core_value_sig2825;
    },
    setConfig: var_core_value_sigF342.setConfig["bind"](var_core_value_sigF342),
    deleteConfig: var_core_value_sigF342.deleteConfig["bind"](var_core_value_sigF342),
    subscribeConfigValue$: var_core_value_sigF342.subscribeConfigValue$["bind"](var_core_value_sigF342),
    configChanged$: var_core_value_sigF342.configChanged$,
    dispose: () => {}
  };
}
function Re(var_core_value_sig7CBA) {
  return Le(var_core_value_sig7CBA, new Map([["menu", var_core_value_sigA7E3 => {
    let var_core_value_sigA784 = {
      ...(var_core_value_sigA7E3 ?? {})
    };
    return he.forEach(var_core_value_sig6998 => {
      var_core_value_sigA784[var_core_value_sig6998] = {
        ...var_core_value_sigA784[var_core_value_sig6998],
        hidden: true
      };
    }), var_core_value_sigA784;
  }]]));
}
function ze(var_core_value_sigC924, var_core_value_sig718D, var_core_value_sigCC47) {
  if (var_core_value_sig718D !== t.CreateEmbedCommand["id"] || !var_core_value_sigCC47 || typeof var_core_value_sigCC47 != "object") return var_core_value_sigCC47;
  let var_core_value_sig12EE = var_core_value_sigCC47;
  return var_core_value_sig12EE.parentEmbedId ? var_core_value_sig12EE : {
    ...var_core_value_sig12EE,
    parentEmbedId: var_core_value_sigC924.embedId
  };
}
function $(var_core_value_sigEB89, var_core_value_sig405C, var_core_value_sig820E = var_core_value_sigEB89) {
  let var_core_value_sigA753 = Ze(var_core_value_sigEB89) ?? var_core_value_sig820E,
    var_core_value_sigEF41 = new Map(var_core_value_sig405C),
    var_core_value_sig9793 = new Map(),
    var_core_value_sigDB87 = new Set(),
    var_core_value_sig2858 = new Map(),
    var_core_value_sig2683;
  var_core_value_sigEF41.forEach((var_core_value_sig4406, var_core_value_sig6806) => {
    fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6175(var_core_value_sig6806);
  });
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6175(var_core_value_sigD4AA) {
    let var_core_value_sigDC41 = He(var_core_value_sigD4AA);
    return var_core_value_sigDB87.add(var_core_value_sigDC41), var_core_value_sig2858.has(var_core_value_sigDC41) || var_core_value_sig2858.set(var_core_value_sigDC41, var_core_value_sigD4AA), var_core_value_sigDC41;
  }
  let var_core_value_sig1699 = var_core_value_sigFB47 => var_core_value_sigEF41.has(var_core_value_sigFB47) || var_core_value_sig9793.has(var_core_value_sigFB47) ? var_core_value_sigFB47 : var_core_value_sig2858.get(He(var_core_value_sigFB47)) ?? var_core_value_sigFB47,
    var_core_value_sig42E9 = var_core_value_sig9B3D1 => {
      let var_core_value_sigC1CF = var_core_value_sig1699(var_core_value_sig9B3D1);
      if (var_core_value_sigEF41.has(var_core_value_sigC1CF)) return var_core_value_sigEF41.get(var_core_value_sigC1CF);
      let var_core_value_sigEE12 = var_core_value_sig9793.get(var_core_value_sigC1CF);
      if (!var_core_value_sigEE12) return;
      let var_core_value_sigD70C = var_core_value_sigEE12();
      return var_core_value_sig9793.delete(var_core_value_sigC1CF), var_core_value_sigEF41.set(var_core_value_sigC1CF, var_core_value_sigD70C), Je(var_core_value_sig2683, var_core_value_sigC1CF, var_core_value_sigD70C), var_core_value_sigC1CF !== var_core_value_sig9B3D1 && Je(var_core_value_sig2683, var_core_value_sig9B3D1, var_core_value_sigD70C), var_core_value_sigD70C;
    },
    var_core_value_sig0B64 = var_core_value_sigF047 => {
      let var_core_value_sigC2F9 = var_core_value_sig1699(var_core_value_sigF047);
      return var_core_value_sigEF41.has(var_core_value_sigC2F9) || var_core_value_sig9793.has(var_core_value_sigC2F9);
    },
    var_core_value_sig3BFC = var_core_value_sig1F51 => var_core_value_sigDB87.has(He(var_core_value_sig1F51)),
    var_core_value_sig9CF5 = var_core_value_sig29F5 => fe.has(He(var_core_value_sig29F5)),
    var_core_value_sig5BFB = var_core_value_sig5A51 => !var_core_value_sig3BFC(var_core_value_sig5A51) && var_core_value_sigEB89.has(var_core_value_sig5A51),
    var_core_value_sig47A3 = () => {
      if (var_core_value_sig2683) return var_core_value_sig2683;
      let var_core_value_sigF1D1 = var_core_value_sigEB89.createChild;
      if (typeof var_core_value_sigF1D1 == "function") return var_core_value_sig2683 = var_core_value_sigF1D1.call(var_core_value_sigEB89, [...nt(var_core_value_sigEF41), [a.Injector, {
        useFactory: () => var_core_value_sig2683
      }]]), var_core_value_sig2683;
    },
    var_core_value_sig7CA8 = {
      has: var_core_value_sig370E => {
        if (var_core_value_sig370E === a.Injector || var_core_value_sig0B64(var_core_value_sig370E) || var_core_value_sig5BFB(var_core_value_sig370E)) return true;
        let var_core_value_sigDE14 = var_core_value_sig47A3();
        return (var_core_value_sigDE14 == null ? undefined : var_core_value_sigDE14.has(var_core_value_sig370E)) ?? var_core_value_sigEB89.has(var_core_value_sig370E);
      },
      get: (var_core_value_sig02CB, ...var_core_value_sig6CBB) => {
        if (var_core_value_sig02CB === a.Injector) return var_core_value_sig7CA8;
        if (Ue(var_core_value_sig6CBB, a.LookUp["SELF"])) {
          let var_core_value_sigF639 = var_core_value_sig47A3();
          ox13a1ac(var_core_value_sigF639, var_core_value_sig02CB);
          let var_core_value_sigEAE5 = Ke(var_core_value_sigF639, var_core_value_sig02CB);
          return var_core_value_sigEAE5.resolved ? var_core_value_sigEAE5.value : Ge(var_core_value_sigF639 || var_core_value_sigEB89, var_core_value_sig02CB, var_core_value_sig6CBB);
        }
        return var_core_value_sig0B64(var_core_value_sig02CB) ? var_core_value_sig42E9(var_core_value_sig02CB) : Ue(var_core_value_sig6CBB, a.LookUp["SKIP_SELF"]) ? Ge(var_core_value_sigEB89, var_core_value_sig02CB, We(var_core_value_sig6CBB, a.LookUp["SKIP_SELF"])) : var_core_value_sig5BFB(var_core_value_sig02CB) ? Ge(var_core_value_sigEB89, var_core_value_sig02CB, var_core_value_sig6CBB) : Ge(var_core_value_sig47A3() || var_core_value_sigEB89, var_core_value_sig02CB, var_core_value_sig6CBB);
      },
      invoke: (var_core_value_sig68DA, ...var_core_value_sig64D8) => var_core_value_sig68DA({
        has: var_core_value_sigE94C => {
          if (var_core_value_sigE94C === a.Injector || var_core_value_sig0B64(var_core_value_sigE94C) || var_core_value_sig5BFB(var_core_value_sigE94C)) return true;
          let var_core_value_sig6D47 = var_core_value_sig47A3();
          return (var_core_value_sig6D47 == null ? undefined : var_core_value_sig6D47.has(var_core_value_sigE94C)) ?? var_core_value_sigEB89.has(var_core_value_sigE94C);
        },
        get: (var_core_value_sigCB82, ...var_core_value_sigCF4E) => {
          if (var_core_value_sigCB82 === a.Injector) return var_core_value_sig7CA8;
          if (Ue(var_core_value_sigCF4E, a.LookUp["SELF"])) {
            let var_core_value_sigC259 = var_core_value_sig47A3();
            ox13a1ac(var_core_value_sigC259, var_core_value_sigCB82);
            let var_core_value_sig9C9F = Ke(var_core_value_sigC259, var_core_value_sigCB82);
            return var_core_value_sig9C9F.resolved ? var_core_value_sig9C9F.value : Ge(var_core_value_sigC259 || var_core_value_sigEB89, var_core_value_sigCB82, var_core_value_sigCF4E);
          }
          return var_core_value_sig0B64(var_core_value_sigCB82) ? var_core_value_sig42E9(var_core_value_sigCB82) : Ue(var_core_value_sigCF4E, a.LookUp["SKIP_SELF"]) ? Ge(var_core_value_sigEB89, var_core_value_sigCB82, We(var_core_value_sigCF4E, a.LookUp["SKIP_SELF"])) : var_core_value_sig5BFB(var_core_value_sigCB82) ? Ge(var_core_value_sigEB89, var_core_value_sigCB82, var_core_value_sigCF4E) : Ge(var_core_value_sig47A3() || var_core_value_sigEB89, var_core_value_sigCB82, var_core_value_sigCF4E);
        }
      }, ...var_core_value_sig64D8),
      add: var_core_value_sigD755 => {
        let var_core_value_sigF897 = rt(var_core_value_sigD755);
        if (var_core_value_sigF897) {
          if (var_core_value_sigF897.kind !== "factory" && var_core_value_sig5BFB(var_core_value_sigF897.identifier) && !var_core_value_sig9CF5(var_core_value_sigF897.identifier)) return;
          let var_core_value_sig6CAD = He(var_core_value_sigF897.identifier);
          if (var_core_value_sigDB87.has(var_core_value_sig6CAD)) return;
          if (fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6175(var_core_value_sigF897.identifier), var_core_value_sigF897.kind === "value") var_core_value_sig9793.delete(var_core_value_sigF897.identifier), var_core_value_sigEF41.set(var_core_value_sigF897.identifier, var_core_value_sigF897.value);else {
            let var_core_value_sigFDEA = var_core_value_sig47A3();
            var_core_value_sigFDEA ? Xe(var_core_value_sigFDEA, var_core_value_sigF897.identifier) || var_core_value_sigFDEA.add(var_core_value_sigD755) : (var_core_value_sigEF41.delete(var_core_value_sigF897.identifier), var_core_value_sig9793.set(var_core_value_sigF897.identifier, var_core_value_sigF897.factory));
          }
          return;
        }
        let var_core_value_sigA578 = He(Ve(var_core_value_sigD755));
        if (var_core_value_sigA578 != null) {
          if (var_core_value_sigDB87.has(var_core_value_sigA578)) return;
          fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6175(Ve(var_core_value_sigD755));
        }
        let var_core_value_sig0260 = var_core_value_sig47A3();
        if (var_core_value_sig0260) {
          var_core_value_sig0260.add(var_core_value_sigD755);
          return;
        }
        var_core_value_sigEB89.add(var_core_value_sigD755);
      },
      createChild: (var_core_value_sig034D = []) => {
        let var_core_value_sig89EC = new Map(var_core_value_sigEF41);
        var_core_value_sig2858.forEach(var_core_value_sig8CF5 => {
          if (var_core_value_sig89EC.has(var_core_value_sig8CF5)) return;
          if (var_core_value_sig0B64(var_core_value_sig8CF5)) {
            var_core_value_sig89EC.set(var_core_value_sig8CF5, var_core_value_sig42E9(var_core_value_sig8CF5));
            return;
          }
          let var_core_value_sigDDD7 = var_core_value_sig47A3();
          var_core_value_sigDDD7 && Xe(var_core_value_sigDDD7, var_core_value_sig8CF5) && var_core_value_sig89EC.set(var_core_value_sig8CF5, Ge(var_core_value_sigDDD7, var_core_value_sig8CF5, [a.LookUp["SELF"]]));
        });
        let var_core_value_sig9975 = [];
        var_core_value_sig034D.forEach(var_core_value_sigB2CE => {
          let var_core_value_sig443C = rt(var_core_value_sigB2CE);
          if ((var_core_value_sig443C == null ? undefined : var_core_value_sig443C.kind) === "value") {
            var_core_value_sig89EC.set(var_core_value_sig443C.identifier, var_core_value_sig443C.value);
            return;
          }
          var_core_value_sig9975.push(var_core_value_sigB2CE);
        });
        let var_core_value_sigD6D9 = $(var_core_value_sigEB89, var_core_value_sig89EC, var_core_value_sigA753);
        return var_core_value_sig9975.forEach(var_core_value_sig39B1 => {
          var_core_value_sigD6D9.add(var_core_value_sig39B1);
        }), var_core_value_sigD6D9;
      },
      createInstance: (...var_core_value_sig2637) => {
        let var_core_value_sigAF1D = var_core_value_sig47A3(),
          var_core_value_sigC92D = var_core_value_sigAF1D == null ? undefined : var_core_value_sigAF1D.createInstance;
        if (var_core_value_sigAF1D && typeof var_core_value_sigC92D == "function") return oxffd938(var_core_value_sigAF1D, var_core_value_sig2637[0]), var_core_value_sigC92D.apply(var_core_value_sigAF1D, var_core_value_sig2637);
        let var_core_value_sigEA3D = var_core_value_sigEB89.createInstance;
        if (typeof var_core_value_sigEA3D == "function") return var_core_value_sigEA3D.apply(var_core_value_sigEB89, var_core_value_sig2637);
        let [var_core_value_sig2841, ...var_core_value_sig9FE1] = var_core_value_sig2637;
        return new var_core_value_sig2841(...var_core_value_sig9FE1);
      },
      dispose: () => {
        var_core_value_sig2683 && Qe(var_core_value_sig2683, var_core_value_sigA753, var_core_value_sigEF41.values()), var_core_value_sig2683 = undefined, var_core_value_sigDB87.clear(), var_core_value_sig2858.clear(), var_core_value_sig9793.clear();
      }
    };
  return {
    resolved: false
  };
}
function qe(var_core_value_sig1B33) {
  return !var_core_value_sig1B33 || var_core_value_sig1B33.length !== 1 ? {
    resolved: false
  } : {
    resolved: true,
    value: var_core_value_sig1B33[0]
  };
}
function Je(var_core_value_sig041A, var_core_value_sig7E4F, var_core_value_sig5A6A) {
  !var_core_value_sig041A || Xe(var_core_value_sig041A, var_core_value_sig7E4F) || var_core_value_sig041A.add([var_core_value_sig7E4F, {
    useValue: var_core_value_sig5A6A
  }]);
}
function Ye(var_core_value_sig7E71) {
  if (!var_core_value_sig7E71 || typeof var_core_value_sig7E71 != "function" && typeof var_core_value_sig7E71 != "object") return [];
  for (let var_core_value_sig9DAA of Object.getOwnPropertySymbols(var_core_value_sig7E71)) {
    let var_core_value_sig210D = var_core_value_sig7E71[var_core_value_sig9DAA];
    if (!Array.isArray(var_core_value_sig210D)) continue;
    let var_core_value_sigB4B4 = var_core_value_sig210D.map(var_core_value_sig86D0 => var_core_value_sig86D0 == null ? undefined : var_core_value_sig86D0.identifier).filter(var_core_value_sig4CD2 => var_core_value_sig4CD2 !== undefined);
    if (var_core_value_sigB4B4.length) return var_core_value_sigB4B4;
  }
  return [];
}
function Xe(var_core_value_sig14B7, var_core_value_sig7D2C) {
  var var_core_value_sigE10A, var_core_value_sig0AE5, var_core_value_sig57CC, var_core_value_sig2932;
  let var_core_value_sigA067 = var_core_value_sig14B7;
  return !!((var_core_value_sigE10A = var_core_value_sigA067.dependencyCollection) != null && (var_core_value_sig0AE5 = var_core_value_sigE10A.has) != null && var_core_value_sig0AE5.call(var_core_value_sigE10A, var_core_value_sig7D2C) || (var_core_value_sig57CC = var_core_value_sigA067.resolvedDependencyCollection) != null && (var_core_value_sig2932 = var_core_value_sig57CC.has) != null && var_core_value_sig2932.call(var_core_value_sig57CC, var_core_value_sig7D2C));
}
function Ze(var_core_value_sig0CB3) {
  return var_core_value_sig0CB3.__embedSharedRootInjector;
}
function Qe(var_core_value_sigE0F3, var_core_value_sig7330, var_core_value_sig2766 = []) {
  let var_core_value_sig1BD2 = $e(var_core_value_sig7330);
  for (let var_core_value_sig1F8A of var_core_value_sig2766) var_core_value_sig1BD2.add(var_core_value_sig1F8A);
  et(var_core_value_sigE0F3, var_core_value_sig1BD2), var_core_value_sigE0F3.dispose();
}
function $e(var_core_value_sig2CA0) {
  let var_core_value_sigDD2D = new Set(),
    var_core_value_sig8880 = tt(var_core_value_sig2CA0);
  return var_core_value_sig8880 && var_core_value_sig8880.forEach(var_core_value_sigEBB4 => {
    Array.isArray(var_core_value_sigEBB4) && var_core_value_sigEBB4.forEach(var_core_value_sigD407 => var_core_value_sigDD2D.add(var_core_value_sigD407));
  }), var_core_value_sigDD2D;
}
function et(var_core_value_sig005B, var_core_value_sig6383, var_core_value_sigCDBE = new Set()) {
  if (var_core_value_sigCDBE.has(var_core_value_sig005B)) return;
  var_core_value_sigCDBE.add(var_core_value_sig005B);
  let var_core_value_sig8589 = var_core_value_sig005B.children;
  var_core_value_sig8589 == null || var_core_value_sig8589.forEach(var_core_value_sig2B74 => et(var_core_value_sig2B74, var_core_value_sig6383, var_core_value_sigCDBE));
  let var_core_value_sig2F83 = tt(var_core_value_sig005B);
  var_core_value_sig2F83 && var_core_value_sig2F83.forEach((var_core_value_sig0483, var_core_value_sig4A48) => {
    if (!Array.isArray(var_core_value_sig0483)) return;
    let var_core_value_sigD170 = var_core_value_sig0483.filter(var_core_value_sig63F3 => !var_core_value_sig6383.has(var_core_value_sig63F3));
    if (var_core_value_sigD170.length !== var_core_value_sig0483.length) {
      if (var_core_value_sigD170.length === 0) {
        var_core_value_sig2F83.delete(var_core_value_sig4A48);
        return;
      }
      var_core_value_sig2F83.set(var_core_value_sig4A48, var_core_value_sigD170);
    }
  });
}
function tt(var_core_value_sig4AD6) {
  var var_core_value_sig83CC;
  return (var_core_value_sig83CC = var_core_value_sig4AD6.resolvedDependencyCollection) == null ? undefined : var_core_value_sig83CC.resolvedDependencies;
}
function nt(var_core_value_sigECB5) {
  return Array.from(var_core_value_sigECB5, ([var_core_value_sig90E5, var_core_value_sig7000]) => [var_core_value_sig90E5, {
    useValue: var_core_value_sig7000
  }]);
}
function rt(var_core_value_sigEC7A) {
  if (!Array.isArray(var_core_value_sigEC7A) || var_core_value_sigEC7A.length < 2) return;
  let [var_core_value_sig3C20, var_core_value_sig55A0] = var_core_value_sigEC7A;
  if (!(!var_core_value_sig55A0 || typeof var_core_value_sig55A0 != "object")) {
    if ("useValue" in var_core_value_sig55A0) return {
      kind: "value",
      identifier: var_core_value_sig3C20,
      value: var_core_value_sig55A0.useValue
    };
    if (typeof var_core_value_sig55A0.useFactory == "function") return {
      kind: "factory",
      identifier: var_core_value_sig3C20,
      factory: var_core_value_sig55A0.useFactory
    };
  }
}
function it(var_core_value_sig6F0A, var_core_value_sig193F) {
  if (!var_core_value_sig6F0A.has(c.IMenuManagerService)) return;
  let var_core_value_sig5227 = var_core_value_sig6F0A.get(c.IMenuManagerService),
    var_core_value_sig8CB8 = var_core_value_sig5227.createScoped;
  return at(typeof var_core_value_sig8CB8 == "function" ? var_core_value_sig8CB8.call(var_core_value_sig5227, var_core_value_sig193F) : var_core_value_sig5227);
}
function at(var_core_value_sigBE77) {
  return {
    menuChanged$: var_core_value_sigBE77.menuChanged$,
    mergeMenu: (var_core_value_sigD7C5, var_core_value_sig3633) => var_core_value_sigBE77.mergeMenu(var_core_value_sigD7C5, var_core_value_sig3633),
    appendRootMenu: var_core_value_sig1DF5 => var_core_value_sigBE77.appendRootMenu(var_core_value_sig1DF5),
    getMenuByPositionKey: var_core_value_sig90A3 => ot(var_core_value_sigBE77.getMenuByPositionKey(var_core_value_sig90A3)),
    getFlatMenuByPositionKey: var_core_value_sig28BE => ot(var_core_value_sigBE77.getFlatMenuByPositionKey(var_core_value_sig28BE))
  };
}
function ot(var_core_value_sig9700) {
  return var_core_value_sig9700.flatMap(var_core_value_sig0224 => {
    var var_core_value_sig854B;
    if (he.has(((var_core_value_sig854B = var_core_value_sig0224.item) == null ? undefined : var_core_value_sig854B.id) ?? var_core_value_sig0224.key)) return [];
    if (!var_core_value_sig0224.children) return [var_core_value_sig0224];
    let var_core_value_sig1FF6 = ot(var_core_value_sig0224.children);
    return var_core_value_sig0224.children["length"] > 0 && var_core_value_sig1FF6.length === 0 && !var_core_value_sig0224.item && !var_core_value_sig0224.headerActionItem ? [] : [{
      ...var_core_value_sig0224,
      children: var_core_value_sig1FF6
    }];
  });
}
function st(var_core_value_sigB461, var_core_value_sigDDFF, var_core_value_sig52C1) {
  if (!var_core_value_sigB461.has(c.IContextMenuService)) return;
  let var_core_value_sigFA8C = var_core_value_sigB461.get(c.IContextMenuService);
  return {
    get disabled() {
      return var_core_value_sigFA8C.disabled;
    },
    set disabled(var_core_value_sig4B27) {
      var_core_value_sigFA8C.disabled = var_core_value_sig4B27;
    },
    get visible() {
      return var_core_value_sigFA8C.visible;
    },
    enable: () => var_core_value_sigFA8C.enable(),
    disable: () => var_core_value_sigFA8C.disable(),
    triggerContextMenu: (var_core_value_sig3A41, var_core_value_sig269A, var_core_value_sigBF53) => {
      var_core_value_sigFA8C.triggerContextMenu(var_core_value_sig3A41, var_core_value_sig269A, {
        ...var_core_value_sigBF53,
        unitId: (var_core_value_sigBF53 == null ? undefined : var_core_value_sigBF53.unitId) ?? var_core_value_sig52C1
      });
    },
    hideContextMenu: () => var_core_value_sigFA8C.hideContextMenu(),
    registerContextMenuHandler: var_core_value_sigD9BB => var_core_value_sigFA8C.registerContextMenuHandler(var_core_value_sigD9BB)
  };
}
function ct(var_core_value_sig19C6, var_core_value_sigDB89) {
  let var_core_value_sigCBF6 = new c["ContextMenuService"]();
  return {
    get disabled() {
      return var_core_value_sigCBF6.disabled;
    },
    set disabled(var_core_value_sigF549) {
      var_core_value_sigCBF6.disabled = var_core_value_sigF549;
    },
    get visible() {
      return var_core_value_sigCBF6.visible;
    },
    enable: () => var_core_value_sigCBF6.enable(),
    disable: () => var_core_value_sigCBF6.disable(),
    triggerContextMenu: (var_core_value_sigC125, var_core_value_sigB63D, var_core_value_sig8255) => {
      var_core_value_sigCBF6.triggerContextMenu(var_core_value_sigC125, var_core_value_sigB63D, {
        ...var_core_value_sig8255,
        unitId: (var_core_value_sig8255 == null ? undefined : var_core_value_sig8255.unitId) ?? var_core_value_sigDB89
      });
    },
    hideContextMenu: () => var_core_value_sigCBF6.hideContextMenu(),
    registerContextMenuHandler: var_core_value_sigBFC7 => var_core_value_sigCBF6.registerContextMenuHandler(var_core_value_sigBFC7),
    dispose: () => var_core_value_sigCBF6.dispose()
  };
}
function lt(var_core_value_sigE0DD, var_core_value_sig9874) {
  let var_core_value_sig61DE = var_core_value_sigE0DD.get(c.ILayoutService),
    var_core_value_sig9717 = var_core_value_sigE0DD.has(J) ? var_core_value_sigE0DD.get(J) : undefined,
    var_core_value_sig7C72 = var_core_value_sigE0DD.has(K) ? var_core_value_sigE0DD.get(K) : undefined,
    var_core_value_sigECAB = var_core_value_sig9874.renderScope["rootElement"],
    var_core_value_sigEB4B = var_core_value_sig9874.renderScope["contentRoot"] ?? var_core_value_sigECAB,
    var_core_value_sigF741 = new Set([var_core_value_sigECAB, var_core_value_sigEB4B]),
    var_core_value_sigB227 = var_core_value_sig9874.renderScope["mode"] !== "float" || var_core_value_sig9874.renderScope["fullscreen"],
    var_core_value_sigCFC5 = (var_core_value_sig933F, var_core_value_sig29DE) => {
      var_core_value_sigF741.add(var_core_value_sig933F);
      let var_core_value_sig4AFB = (var_core_value_sig29DE == null ? undefined : var_core_value_sig29DE.registerChildInteraction) && var_core_value_sigB227,
        var_core_value_sigC7EA = var_core_value_sig4AFB ? ut(var_core_value_sig933F) : undefined,
        var_core_value_sigDAB9 = var_core_value_sig4AFB ? var_core_value_sig9717 == null ? undefined : var_core_value_sig9717.registerOwnedElement(var_core_value_sig9874.embedId, var_core_value_sig933F) : undefined,
        var_core_value_sig9CF7 = var_core_value_sig4AFB ? var_core_value_sig7C72 == null ? undefined : var_core_value_sig7C72.registerElement({
          embedId: var_core_value_sig9874.embedId,
          role: "child-editor",
          element: var_core_value_sig933F
        }) : undefined;
      return (0, a.toDisposable)(() => {
        var_core_value_sig9CF7 == null || var_core_value_sig9CF7.dispose(), var_core_value_sigDAB9 == null || var_core_value_sigDAB9.dispose(), var_core_value_sigC7EA == null || var_core_value_sigC7EA.dispose(), var_core_value_sigF741.delete(var_core_value_sig933F);
      });
    },
    var_core_value_sigEC54 = var_core_value_sigCCE5 => var_core_value_sigCCE5 ? [...var_core_value_sigF741].some(var_core_value_sig6A71 => var_core_value_sig6A71 === var_core_value_sigCCE5 || var_core_value_sig6A71.contains(var_core_value_sigCCE5)) : false;
  return {
    get isFocused() {
      return var_core_value_sig61DE.isFocused;
    },
    get rootContainerElement() {
      return var_core_value_sigECAB;
    },
    focus: () => var_core_value_sig61DE.focus(),
    registerFocusHandler: (var_core_value_sig5933, var_core_value_sig884B) => var_core_value_sig61DE.registerFocusHandler(var_core_value_sig5933, var_core_value_sig884B),
    registerRootContainerElement: var_core_value_sigCFC5,
    registerContentElement: var_core_value_sigCFC5,
    registerContainerElement: var_core_value_sig4E30 => var_core_value_sigCFC5(var_core_value_sig4E30, {
      registerChildInteraction: true
    }),
    getContentElement: () => var_core_value_sigEB4B,
    checkElementInCurrentContainers: var_core_value_sig9730 => var_core_value_sigEC54(var_core_value_sig9730) || (var_core_value_sig9717 == null ? undefined : var_core_value_sig9717.contains(var_core_value_sig9874.embedId, var_core_value_sig9730)) || var_core_value_sig61DE.checkElementInCurrentContainers(var_core_value_sig9730),
    checkContentIsFocused: () => var_core_value_sigEC54(var_core_value_sigEB4B.ownerDocument["activeElement"]) || (var_core_value_sig7C72 == null ? undefined : var_core_value_sig7C72.hasChildInteractionLease(var_core_value_sig9874.embedId)) || var_core_value_sig61DE.checkContentIsFocused()
  };
}
function ut(var_core_value_sig9B6A) {
  let var_core_value_sigEA29 = new Map(),
    var_core_value_sig3851 = var_core_value_sig8E4A => {
      var_core_value_sigEA29.set(var_core_value_sig8E4A, var_core_value_sig8E4A.getAttribute(G)), var_core_value_sig8E4A.setAttribute(G, "child-editor");
    };
  return var_core_value_sig3851(var_core_value_sig9B6A), var_core_value_sig9B6A.querySelectorAll("*").forEach(var_core_value_sig3851), (0, a.toDisposable)(() => {
    var_core_value_sigEA29.forEach((var_core_value_sig3BF6, var_core_value_sig38CE) => {
      if (var_core_value_sig3BF6 == null) {
        var_core_value_sig38CE.removeAttribute(G);
        return;
      }
      var_core_value_sig38CE.setAttribute(G, var_core_value_sig3BF6);
    });
  });
}
function dt(var_core_value_sigE1D0, var_core_value_sig8AFC, var_core_value_sigA761 = []) {
  let var_core_value_sig0996 = pt(var_core_value_sigE1D0, var_core_value_sigA761) ?? var_core_value_sigE1D0.injector,
    var_core_value_sig09E0 = var_core_value_sig0996 !== var_core_value_sigE1D0.injector,
    var_core_value_sigB201 = ft(var_core_value_sigE1D0),
    var_core_value_sigFB17 = {
      descriptor: var_core_value_sigE1D0.descriptor,
      host: {
        unitId: var_core_value_sigE1D0.hostUnitId,
        type: var_core_value_sigE1D0.descriptor["hostType"],
        anchorId: var_core_value_sigE1D0.descriptor["hostAnchorId"],
        entry: var_core_value_sigE1D0.descriptor["entry"],
        layout: ht(var_core_value_sigE1D0)
      },
      child: {
        unitId: var_core_value_sigE1D0.childUnitId,
        type: var_core_value_sigE1D0.childType
      },
      injector: var_core_value_sig0996,
      instanceService: mt(var_core_value_sig0996, a.IUniverInstanceService),
      commandService: mt(var_core_value_sig0996, a.ICommandService),
      menuManagerService: mt(var_core_value_sig0996, c.IMenuManagerService),
      roots: var_core_value_sigB201,
      activate: () => var_core_value_sig8AFC(true),
      deactivate: () => var_core_value_sig8AFC(false),
      dispose: () => {
        var_core_value_sig09E0 && var_core_value_sig0996.dispose();
      }
    };
  return {
    runtimeScope: var_core_value_sigFB17,
    disposable: (0, a.toDisposable)(() => var_core_value_sigFB17.dispose())
  };
}
function ft(var_core_value_sigCA91) {
  var var_core_value_sig372C;
  let var_core_value_sig98F9 = var_core_value_sigCA91.renderScope["rootElement"],
    var_core_value_sig3F40 = var_core_value_sigCA91.renderScope["contentRoot"] ?? R(var_core_value_sig98F9, "data-embed-content-root") ?? var_core_value_sig98F9,
    var_core_value_sig7A2F = var_core_value_sigCA91.renderScope["overlayRoot"] ?? R(var_core_value_sig98F9, "data-embed-overlay-root") ?? var_core_value_sig98F9;
  return {
    root: var_core_value_sig98F9,
    content: var_core_value_sig3F40,
    canvas: var_core_value_sigCA91.renderScope["canvasRoot"] ?? R(var_core_value_sig98F9, "data-embed-canvas-root") ?? undefined,
    overlay: var_core_value_sig7A2F,
    popup: var_core_value_sigCA91.renderScope["popupRoot"] ?? R(var_core_value_sig98F9, "data-embed-popup-root") ?? var_core_value_sig7A2F,
    menuSlot: ((var_core_value_sig372C = var_core_value_sigCA91.renderScope["menuOutlet"]) == null ? undefined : var_core_value_sig372C.container) ?? R(var_core_value_sig98F9, "data-embed-menu-slot") ?? undefined,
    footerSlot: R(var_core_value_sig98F9, "data-embed-footer-slot") ?? undefined
  };
}
function pt(var_core_value_sig3047, var_core_value_sig19A5) {
  if (!(!var_core_value_sig3047.injector["has"](a.IUniverInstanceService) || !var_core_value_sig3047.injector["has"](a.ICommandService))) return ge(var_core_value_sig3047, var_core_value_sig19A5);
}
function mt(var_core_value_sigC5EA, var_core_value_sigC9A1) {
  if (var_core_value_sigC5EA.has(var_core_value_sigC9A1)) return var_core_value_sigC5EA.get(var_core_value_sigC9A1);
}
function ht(var_core_value_sigF92E) {
  var var_core_value_sig70AE, var_core_value_sig57BC;
  switch (var_core_value_sigF92E.descriptor["entry"]) {
    case "docs-custom-block":
      return "doc-flow";
    case "sheets-floating-object":
    case "slides-floating-object":
    case "boards-floating-object":
      return "float";
    case "sheets-sheet-tab":
    case "bases-table-list-block":
    case "slides-page-list-block":
      return "tab-peer";
    default:
      break;
  }
  return var_core_value_sigF92E.layout === "tab-peer" || (var_core_value_sig70AE = var_core_value_sigF92E.descriptor["sourceMeta"]) != null && var_core_value_sig70AE.tab ? "tab-peer" : (var_core_value_sig57BC = var_core_value_sigF92E.descriptor["sourceMeta"]) != null && var_core_value_sig57BC.floating ? "float" : var_core_value_sigF92E.layout["startsWith"]("docs-") || var_core_value_sigF92E.layout === "scroll-contained" ? "doc-flow" : "float";
}
var gt = class {
    constructor() {
      V(this, "_contributions", new Map());
    }
    register(var_core_value_sig300B) {
      if (this._contributions["has"](var_core_value_sig300B.childType)) throw Error("Embed child view contribution already registered: " + var_core_value_sig300B.childType);
      this._contributions["set"](var_core_value_sig300B.childType, var_core_value_sig300B);
    }
    get(var_core_value_sig8457) {
      return this._contributions["get"](var_core_value_sig8457);
    }
    list() {
      return [...this._contributions["values"]()];
    }
  },
  _t = class {
    constructor() {
      V(this, "_contributions", new Map());
    }
    register(var_core_value_sigB30D) {
      let var_core_value_sigDB33 = this._key(var_core_value_sigB30D.hostType, var_core_value_sigB30D.entry, var_core_value_sigB30D.childType);
      if (this._contributions["has"](var_core_value_sigDB33)) throw Error("Embed floating menu contribution already registered: " + var_core_value_sigDB33);
      return this._contributions["set"](var_core_value_sigDB33, var_core_value_sigB30D), (0, a.toDisposable)(() => {
        this._contributions["get"](var_core_value_sigDB33) === var_core_value_sigB30D && this._contributions["delete"](var_core_value_sigDB33);
      });
    }
    get(var_core_value_sig6C8C, var_core_value_sig7A5E, var_core_value_sig838E) {
      if (var_core_value_sig838E != null) {
        let var_core_value_sig62B7 = this._contributions["get"](this._key(var_core_value_sig6C8C, var_core_value_sig7A5E, var_core_value_sig838E));
        if (var_core_value_sig62B7) return var_core_value_sig62B7;
      }
      return this._contributions["get"](this._key(var_core_value_sig6C8C, var_core_value_sig7A5E));
    }
    hasExact(var_core_value_sig9A5B, var_core_value_sigC860, var_core_value_sigE64C) {
      return this._contributions["has"](this._key(var_core_value_sig9A5B, var_core_value_sigC860, var_core_value_sigE64C));
    }
    list() {
      return [...this._contributions["values"]()];
    }
    _key(var_core_value_sigF39B, var_core_value_sig9B88, var_core_value_sig992A) {
      return var_core_value_sig992A == null ? var_core_value_sigF39B + ":" + var_core_value_sig9B88 + ":*" : var_core_value_sigF39B + ":" + var_core_value_sig9B88 + ":" + var_core_value_sig992A;
    }
  },
  vt = class {
    constructor() {
      V(this, "_contributions", new Map());
    }
    register(var_core_value_sig6281) {
      let var_core_value_sig9B01 = this._key(var_core_value_sig6281.hostType, var_core_value_sig6281.entry);
      if (this._contributions["has"](var_core_value_sig9B01)) throw Error("Embed host container contribution already registered: " + var_core_value_sig9B01);
      this._contributions["set"](var_core_value_sig9B01, var_core_value_sig6281);
    }
    get(var_core_value_sigA724, var_core_value_sig385E) {
      return this._contributions["get"](this._key(var_core_value_sigA724, var_core_value_sig385E));
    }
    list() {
      return [...this._contributions["values"]()];
    }
    supports(var_core_value_sig10D3, var_core_value_sig41F2, var_core_value_sig32DD) {
      let var_core_value_sig7A88 = this.get(var_core_value_sig10D3, var_core_value_sig41F2);
      return var_core_value_sig7A88 ? (var_core_value_sig7A88.supportedLayouts ?? [var_core_value_sig7A88.layout]).includes(var_core_value_sig32DD) : false;
    }
    _key(var_core_value_sig6CFC, var_core_value_sig3EC0) {
      return var_core_value_sig6CFC + ":" + var_core_value_sig3EC0;
    }
  },
  yt = class {
    constructor() {
      V(this, "_rootsByChildUnitId", new Map()), V(this, "_rootsByEmbedId", new Map()), V(this, "_rootsByHostAnchorId", new Map());
    }
    register(var_core_value_sigEA69, var_core_value_sigF42A) {
      let var_core_value_sig898E = typeof var_core_value_sigEA69 == "string" ? {
        childUnitId: var_core_value_sigEA69,
        root: var_core_value_sigF42A
      } : var_core_value_sigEA69;
      return this._rootsByChildUnitId["set"](var_core_value_sig898E.childUnitId, var_core_value_sig898E), var_core_value_sig898E.embedId && this._rootsByEmbedId["set"](var_core_value_sig898E.embedId, var_core_value_sig898E), var_core_value_sig898E.hostAnchorId && this._rootsByHostAnchorId["set"](var_core_value_sig898E.hostAnchorId, var_core_value_sig898E), (0, a.toDisposable)(() => {
        this._rootsByChildUnitId["get"](var_core_value_sig898E.childUnitId) === var_core_value_sig898E && this._rootsByChildUnitId["delete"](var_core_value_sig898E.childUnitId), var_core_value_sig898E.embedId && this._rootsByEmbedId["get"](var_core_value_sig898E.embedId) === var_core_value_sig898E && this._rootsByEmbedId["delete"](var_core_value_sig898E.embedId), var_core_value_sig898E.hostAnchorId && this._rootsByHostAnchorId["get"](var_core_value_sig898E.hostAnchorId) === var_core_value_sig898E && this._rootsByHostAnchorId["delete"](var_core_value_sig898E.hostAnchorId);
      });
    }
    get(var_core_value_sigC481) {
      var var_core_value_sig27B7;
      return ((var_core_value_sig27B7 = this._rootsByChildUnitId["get"](var_core_value_sigC481)) == null ? undefined : var_core_value_sig27B7.root) ?? null;
    }
    getByEmbedId(var_core_value_sig2DAD) {
      var var_core_value_sig00DE;
      return ((var_core_value_sig00DE = this._rootsByEmbedId["get"](var_core_value_sig2DAD)) == null ? undefined : var_core_value_sig00DE.root) ?? null;
    }
    getByHostAnchorId(var_core_value_sigEF7C) {
      var var_core_value_sig07E7;
      return ((var_core_value_sig07E7 = this._rootsByHostAnchorId["get"](var_core_value_sigEF7C)) == null ? undefined : var_core_value_sig07E7.root) ?? null;
    }
    contains(var_core_value_sig6005, var_core_value_sig25A4) {
      if (!(var_core_value_sig6005 instanceof Node)) return false;
      let var_core_value_sigB591 = var_core_value_sig25A4.embedId ? this.getByEmbedId(var_core_value_sig25A4.embedId) : var_core_value_sig25A4.hostAnchorId ? this.getByHostAnchorId(var_core_value_sig25A4.hostAnchorId) : var_core_value_sig25A4.childUnitId ? this.get(var_core_value_sig25A4.childUnitId) : null;
      return !!(var_core_value_sigB591 != null && var_core_value_sigB591.contains(var_core_value_sig6005));
    }
  };
function bt(var_core_value_sig41AB, var_core_value_sigCDAC, var_core_value_sigDC24 = Ct(var_core_value_sig41AB), var_core_value_sig3875 = {}) {
  var var_core_value_sig5513, var_core_value_sig6048;
  let var_core_value_sigE6C3 = var_core_value_sig41AB.injector["get"](var_core_value_sigCDAC),
    var_core_value_sig6469 = var_core_value_sig3875.scopedInjector ?? (var_core_value_sig3875.scopedRenderInjector === false ? undefined : ((var_core_value_sig5513 = var_core_value_sig41AB.runtimeScope) == null ? undefined : var_core_value_sig5513.injector) ?? xt(var_core_value_sig41AB)),
    var_core_value_sig8BC7 = !var_core_value_sig3875.scopedInjector && var_core_value_sig6469 !== ((var_core_value_sig6048 = var_core_value_sig41AB.runtimeScope) == null ? undefined : var_core_value_sig6048.injector),
    var_core_value_sig5939 = Et(var_core_value_sigE6C3, var_core_value_sig41AB.childUnitId, var_core_value_sig6469);
  if (!var_core_value_sig5939) {
    var_core_value_sig8BC7 && (var_core_value_sig6469 == null || var_core_value_sig6469.dispose());
    return;
  }
  var_core_value_sigDC24.dataset["embedChildRenderUnitId"] = var_core_value_sig41AB.childUnitId, var_core_value_sigDC24.dataset["embedChildRenderMode"] = var_core_value_sig41AB.renderScope["mode"];
  try {
    var var_core_value_sig7432, var_core_value_sig19F0;
    (var_core_value_sig7432 = (var_core_value_sig19F0 = var_core_value_sig5939.engine).unmount) == null || var_core_value_sig7432.call(var_core_value_sig19F0);
  } catch {}
  var_core_value_sig5939.engine["mount"](var_core_value_sigDC24), wt(var_core_value_sig5939, var_core_value_sigDC24), Ot(var_core_value_sig5939, {
    activate: var_core_value_sig3875.activate ?? true
  });
  let var_core_value_sig619B = St(var_core_value_sig5939, var_core_value_sigDC24, {
    activate: false,
    idleMs: var_core_value_sig41AB.descriptor["hostType"] === a.UniverInstanceType["UNIVER_SHEET"] && var_core_value_sig41AB.renderScope["mode"] === "float" ? 100 : 0
  });
  return (0, a.toDisposable)(() => {
    var_core_value_sig619B.dispose();
    try {
      var var_core_value_sigB272, var_core_value_sig6F52;
      (var_core_value_sigB272 = (var_core_value_sig6F52 = var_core_value_sig5939.engine).unmount) == null || var_core_value_sigB272.call(var_core_value_sig6F52);
    } catch {}
    if (var_core_value_sigE6C3.getRenderUnitById(var_core_value_sig41AB.childUnitId) === var_core_value_sig5939) {
      var var_core_value_sig09C4;
      (var_core_value_sig09C4 = var_core_value_sigE6C3.removeRender) == null || var_core_value_sig09C4.call(var_core_value_sigE6C3, var_core_value_sig41AB.childUnitId);
    }
    var_core_value_sigDC24.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sigDC24.removeAttribute("data-embed-child-render-mode"), var_core_value_sig8BC7 && (var_core_value_sig6469 == null || var_core_value_sig6469.dispose());
  });
}
function xt(var_core_value_sig3F16) {
  if (typeof var_core_value_sig3F16.injector["has"] == "function" && !(!var_core_value_sig3F16.injector["has"](a.IUniverInstanceService) || !var_core_value_sig3F16.injector["has"](a.ICommandService))) return ge(var_core_value_sig3F16);
}
function St(var_core_value_sig6C48, var_core_value_sig9140, var_core_value_sig1CF9 = {}) {
  if (typeof ResizeObserver > "u") return (0, a.toDisposable)(() => {});
  let var_core_value_sigC63A = -1,
    var_core_value_sig1D3B = -1,
    var_core_value_sig453A = 0,
    var_core_value_sigEE97,
    var_core_value_sig1DE5 = () => {
      var_core_value_sig453A &&= (window.cancelAnimationFrame(var_core_value_sig453A), 0), var_core_value_sig453A = window.requestAnimationFrame(() => {
        var_core_value_sig453A = 0, Ot(var_core_value_sig6C48, {
          activate: var_core_value_sig1CF9.activate ?? false
        });
      });
    },
    var_core_value_sigB51C = new ResizeObserver(var_core_value_sig8E3E => {
      var var_core_value_sigC3D3;
      let var_core_value_sig1451 = (var_core_value_sigC3D3 = var_core_value_sig8E3E[0]) == null ? undefined : var_core_value_sigC3D3.contentRect,
        var_core_value_sigAD57 = (var_core_value_sig1451 == null ? undefined : var_core_value_sig1451.width) ?? var_core_value_sig9140.clientWidth,
        var_core_value_sig58A8 = (var_core_value_sig1451 == null ? undefined : var_core_value_sig1451.height) ?? var_core_value_sig9140.clientHeight;
      (var_core_value_sigAD57 !== var_core_value_sigC63A || var_core_value_sig58A8 !== var_core_value_sig1D3B) && (var_core_value_sigC63A = var_core_value_sigAD57, var_core_value_sig1D3B = var_core_value_sig58A8, var_core_value_sig453A &&= (window.cancelAnimationFrame(var_core_value_sig453A), 0), var_core_value_sigEE97 != null && globalThis.clearTimeout(var_core_value_sigEE97), (var_core_value_sig1CF9.idleMs ?? 0) > 0 ? var_core_value_sigEE97 = globalThis.setTimeout(() => {
        var_core_value_sigEE97 = undefined, var_core_value_sig1DE5();
      }, var_core_value_sig1CF9.idleMs) : var_core_value_sig1DE5());
    });
  return var_core_value_sigB51C.observe(var_core_value_sig9140), (0, a.toDisposable)(() => {
    var_core_value_sig453A && window.cancelAnimationFrame(var_core_value_sig453A), var_core_value_sigEE97 != null && globalThis.clearTimeout(var_core_value_sigEE97), var_core_value_sigB51C.disconnect();
  });
}
function Ct(var_core_value_sig1426) {
  return var_core_value_sig1426.runtimeScope["roots"].canvas ?? var_core_value_sig1426.renderScope["canvasRoot"] ?? var_core_value_sig1426.renderScope["contentRoot"] ?? var_core_value_sig1426.renderScope["rootElement"];
}
function wt(var_core_value_sigEA3C, var_core_value_sigD0B7) {
  var var_core_value_sig073B, var_core_value_sig4B16, var_core_value_sig3649, var_core_value_sigD0F3, var_core_value_sig415D;
  let var_core_value_sig0A15 = ((var_core_value_sig073B = (var_core_value_sig4B16 = var_core_value_sigEA3C.engine).getCanvasElement) == null ? undefined : var_core_value_sig073B.call(var_core_value_sig4B16)) ?? ((var_core_value_sig3649 = (var_core_value_sigD0F3 = var_core_value_sigEA3C.engine).getCanvas) == null || (var_core_value_sig3649 = var_core_value_sig3649.call(var_core_value_sigD0F3)) == null || (var_core_value_sig415D = var_core_value_sig3649.getCanvasEle) == null ? undefined : var_core_value_sig415D.call(var_core_value_sig3649));
  !var_core_value_sig0A15 || var_core_value_sig0A15.parentElement === var_core_value_sigD0B7 || var_core_value_sigD0B7.appendChild(var_core_value_sig0A15);
}
function Tt(var_core_value_sig7113, var_core_value_sig1555, var_core_value_sigC06C) {
  try {
    let var_core_value_sigEC1A = var_core_value_sig7113.getRenderUnitById(var_core_value_sig1555);
    if (var_core_value_sigEC1A) {
      var var_core_value_sigF8D0;
      if (!var_core_value_sigC06C || Dt(var_core_value_sigEC1A) === var_core_value_sigC06C) return var_core_value_sigEC1A;
      (var_core_value_sigF8D0 = var_core_value_sig7113.removeRender) == null || var_core_value_sigF8D0.call(var_core_value_sig7113, var_core_value_sig1555);
    }
    return var_core_value_sig7113.createRender(var_core_value_sig1555, {
      embeddedRender: true,
      makeCurrent: false,
      renderParentInjector: var_core_value_sigC06C,
      skipAutoRender: true
    });
  } catch {
    return;
  }
}
function Et(var_core_value_sig0107, var_core_value_sig05B7, var_core_value_sig19F01) {
  try {
    let var_core_value_sigBDED = var_core_value_sig0107.getRenderUnitById(var_core_value_sig05B7);
    if (var_core_value_sigBDED) {
      var var_core_value_sigF035;
      if (!var_core_value_sig19F01 || Dt(var_core_value_sigBDED) === var_core_value_sig19F01) return var_core_value_sigBDED;
      (var_core_value_sigF035 = var_core_value_sig0107.removeRender) == null || var_core_value_sigF035.call(var_core_value_sig0107, var_core_value_sig05B7);
    }
    return var_core_value_sig0107.createRender(var_core_value_sig05B7, {
      embeddedRender: true,
      makeCurrent: false,
      renderParentInjector: var_core_value_sig19F01,
      skipAutoRender: true
    });
  } catch (var_core_value_sig4BFF) {
    var var_core_value_sig0804;
    (var_core_value_sig0804 = var_core_value_sig0107.removeRender) == null || var_core_value_sig0804.call(var_core_value_sig0107, var_core_value_sig05B7), console.warn("[embed-ui] failed to create embedded child render", var_core_value_sig4BFF);
    return;
  }
}
function Dt(var_core_value_sig417D) {
  try {
    var var_core_value_sig73B7;
    return (var_core_value_sig73B7 = var_core_value_sig417D.with) == null ? undefined : var_core_value_sig73B7.call(var_core_value_sig417D, a.Injector);
  } catch {
    return;
  }
}
function Ot(var_core_value_sig4DEF, var_core_value_sigF576 = {}) {
  var var_core_value_sig3087, var_core_value_sigC30C, var_core_value_sigAE4D, var_core_value_sigA2D5;
  if (var_core_value_sigF576.activate) {
    var var_core_value_sig7B4C;
    (var_core_value_sig7B4C = var_core_value_sig4DEF.activate) == null || var_core_value_sig7B4C.call(var_core_value_sig4DEF);
  }
  var_core_value_sig4DEF.engine["resize"](), var_core_value_sig4DEF.components["forEach"](var_core_value_sig40E7 => {
    var var_core_value_sigEDBA, var_core_value_sigE863;
    (var_core_value_sigEDBA = var_core_value_sig40E7.makeForceDirty) == null || var_core_value_sigEDBA.call(var_core_value_sig40E7, true), (var_core_value_sigE863 = var_core_value_sig40E7.makeDirty) == null || var_core_value_sigE863.call(var_core_value_sig40E7, true);
  }), (var_core_value_sig3087 = var_core_value_sig4DEF.mainComponent) == null || (var_core_value_sigC30C = var_core_value_sig3087.makeDirty) == null || var_core_value_sigC30C.call(var_core_value_sig3087, true), var_core_value_sig4DEF.scene["makeDirty"](), (var_core_value_sigAE4D = (var_core_value_sigA2D5 = var_core_value_sig4DEF.scene).render) == null || var_core_value_sigAE4D.call(var_core_value_sigA2D5);
}
var kt = class {
  constructor() {
    V(this, "_providers", new Map()), V(this, "_contextsByEmbedId", new Map()), V(this, "_contextsByHostAnchorId", new Map()), V(this, "_contextsByChildUnitId", new Map());
  }
  register(var_core_value_sig04B4) {
    return this._providers["set"](var_core_value_sig04B4.childType, var_core_value_sig04B4), (0, a.toDisposable)(() => {
      this._providers["get"](var_core_value_sig04B4.childType) === var_core_value_sig04B4 && this._providers["delete"](var_core_value_sig04B4.childType);
    });
  }
  get(var_core_value_sig1C07) {
    return this._providers["get"](var_core_value_sig1C07);
  }
  registerContext(var_core_value_sig93D6) {
    return this._contextsByEmbedId["set"](var_core_value_sig93D6.embedId, var_core_value_sig93D6), this._contextsByHostAnchorId["set"](var_core_value_sig93D6.descriptor["hostAnchorId"], var_core_value_sig93D6), this._contextsByChildUnitId["set"](var_core_value_sig93D6.childUnitId, var_core_value_sig93D6), (0, a.toDisposable)(() => {
      this._contextsByEmbedId["get"](var_core_value_sig93D6.embedId) === var_core_value_sig93D6 && this._contextsByEmbedId["delete"](var_core_value_sig93D6.embedId), this._contextsByHostAnchorId["get"](var_core_value_sig93D6.descriptor["hostAnchorId"]) === var_core_value_sig93D6 && this._contextsByHostAnchorId["delete"](var_core_value_sig93D6.descriptor["hostAnchorId"]), this._contextsByChildUnitId["get"](var_core_value_sig93D6.childUnitId) === var_core_value_sig93D6 && this._contextsByChildUnitId["delete"](var_core_value_sig93D6.childUnitId);
    });
  }
  getContextByEmbedId(var_core_value_sigDD05) {
    return this._contextsByEmbedId["get"](var_core_value_sigDD05);
  }
  getContextByHostAnchorId(var_core_value_sig3932) {
    return this._contextsByHostAnchorId["get"](var_core_value_sig3932);
  }
  getContextByChildUnitId(var_core_value_sig48B2) {
    return this._contextsByChildUnitId["get"](var_core_value_sig48B2);
  }
  capture(var_core_value_sig57DF) {
    let var_core_value_sigC985 = this.get(var_core_value_sig57DF.childType);
    return var_core_value_sigC985 ? Promise.resolve(var_core_value_sigC985.capture(var_core_value_sig57DF)) : Promise.resolve(At(var_core_value_sig57DF));
  }
  captureByEmbedId(var_core_value_sig8DA6) {
    let var_core_value_sigCA69 = this.getContextByEmbedId(var_core_value_sig8DA6);
    return var_core_value_sigCA69 ? this.capture(var_core_value_sigCA69) : Promise.resolve(undefined);
  }
  captureByHostAnchorId(var_core_value_sigB77C) {
    let var_core_value_sig9AFF = this.getContextByHostAnchorId(var_core_value_sigB77C);
    return var_core_value_sig9AFF ? this.capture(var_core_value_sig9AFF) : Promise.resolve(undefined);
  }
  captureByChildUnitId(var_core_value_sig3545) {
    let var_core_value_sig5EE4 = this.getContextByChildUnitId(var_core_value_sig3545);
    return var_core_value_sig5EE4 ? this.capture(var_core_value_sig5EE4) : Promise.resolve(undefined);
  }
};
function At(var_core_value_sig9D16) {
  let var_core_value_sig540B = Mt(var_core_value_sig9D16);
  if (var_core_value_sig540B) try {
    return var_core_value_sig540B.toDataURL("image/png");
  } catch {
    return;
  }
}
const jt = "univer-embed-print-hide-scrollbars";
function Mt(var_core_value_sig70CA, var_core_value_sig19C7 = false) {
  if (!var_core_value_sig70CA.renderScope) return;
  let var_core_value_sigEC6A = [var_core_value_sig70CA.renderScope["canvasRoot"], var_core_value_sig70CA.renderScope["contentRoot"], var_core_value_sig70CA.renderScope["rootElement"]].filter(var_core_value_sig7EAB => !!var_core_value_sig7EAB),
    var_core_value_sig3DA8 = Array.from(new Set(var_core_value_sigEC6A.flatMap(var_core_value_sig56B9 => Array.from(var_core_value_sig56B9.querySelectorAll("canvas"))))).filter(var_core_value_sig90CF => var_core_value_sig90CF.width > 1 && var_core_value_sig90CF.height > 1).sort((var_core_value_sigA386, var_core_value_sigCD6E) => var_core_value_sigCD6E.width * var_core_value_sigCD6E.height - var_core_value_sigA386.width * var_core_value_sigA386.height);
  for (let var_core_value_sigFD9D of var_core_value_sig3DA8) {
    if (var_core_value_sig19C7) return var_core_value_sigFD9D;
    try {
      return var_core_value_sigFD9D.toDataURL("image/png"), var_core_value_sigFD9D;
    } catch {}
  }
}
function Nt(var_core_value_sig2F57) {
  try {
    var var_core_value_sig115C;
    return Pt((((var_core_value_sig115C = var_core_value_sig2F57.runtimeScope) == null ? undefined : var_core_value_sig115C.injector) ?? var_core_value_sig2F57.injector).get(p.IRenderManagerService).getRenderUnitById(var_core_value_sig2F57.childUnitId) ?? undefined, Lt(var_core_value_sig2F57));
  } catch {
    return Pt(undefined, Lt(var_core_value_sig2F57));
  }
}
function Pt(var_core_value_sig79B6, var_core_value_sigA36D = []) {
  let var_core_value_sig1DE9 = It(var_core_value_sig79B6 == null ? undefined : var_core_value_sig79B6.scene),
    var_core_value_sig1DE4 = var_core_value_sig1DE9.flatMap(var_core_value_sigA2A4 => {
      var var_core_value_sigA1AC;
      return ((var_core_value_sigA1AC = var_core_value_sigA2A4.getViewports) == null ? undefined : var_core_value_sigA1AC.call(var_core_value_sigA2A4)) ?? [];
    }).map(var_core_value_sig6180 => {
      var var_core_value_sigB93D;
      return (var_core_value_sigB93D = var_core_value_sig6180.getScrollBar) == null ? undefined : var_core_value_sigB93D.call(var_core_value_sig6180);
    }).filter(var_core_value_sigB17C => !!var_core_value_sigB17C).map(var_core_value_sig69B6 => ({
      scrollBar: var_core_value_sig69B6,
      enableHorizontal: var_core_value_sig69B6.enableHorizontal,
      enableVertical: var_core_value_sig69B6.enableVertical
    })),
    var_core_value_sig6709 = var_core_value_sig1DE9.flatMap(var_core_value_sig708D => {
      var var_core_value_sig1ED2;
      return ((var_core_value_sig1ED2 = var_core_value_sig708D.getAllObjects) == null ? undefined : var_core_value_sig1ED2.call(var_core_value_sig708D)) ?? [];
    }).filter(var_core_value_sig94C1 => var_core_value_sig94C1.oKey === "board-viewport-bar-object").map(var_core_value_sigABAC => ({
      object: var_core_value_sigABAC,
      visible: var_core_value_sigABAC.visible
    })),
    var_core_value_sigA9B7 = Array.from(new Set(var_core_value_sigA36D)),
    var_core_value_sigD810 = var_core_value_sigA9B7.map(var_core_value_sigFAE6 => ({
      element: var_core_value_sigFAE6,
      overflow: var_core_value_sigFAE6.style["overflow"],
      hadHideClass: var_core_value_sigFAE6.classList["contains"](jt)
    }));
  var_core_value_sig1DE4.forEach(({
    scrollBar: var_core_value_sig06AC
  }) => {
    var_core_value_sig06AC.enableHorizontal = false, var_core_value_sig06AC.enableVertical = false;
  }), var_core_value_sig6709.forEach(({
    object: var_core_value_sig57E2
  }) => {
    var var_core_value_sig01FC;
    return (var_core_value_sig01FC = var_core_value_sig57E2.hide) == null ? undefined : var_core_value_sig01FC.call(var_core_value_sig57E2);
  }), var_core_value_sigA9B7.forEach(var_core_value_sig10FC => {
    var_core_value_sig10FC.style["overflow"] = "hidden", var_core_value_sig10FC.classList["add"](jt);
  }), Rt(var_core_value_sigA9B7).forEach(var_core_value_sig5374 => var_core_value_sig5374.dispatchEvent(new MouseEvent("mouseleave"))), var_core_value_sig1DE9.forEach(zt);
  let var_core_value_sig0CBE = false;
  return () => {
    var_core_value_sig0CBE || (var_core_value_sig0CBE = true, var_core_value_sig1DE4.forEach(({
      scrollBar: var_core_value_sig37A8,
      enableHorizontal: var_core_value_sigA90D,
      enableVertical: var_core_value_sig7A3C
    }) => {
      var_core_value_sig37A8.enableHorizontal = var_core_value_sigA90D, var_core_value_sig37A8.enableVertical = var_core_value_sig7A3C;
    }), var_core_value_sig6709.forEach(({
      object: var_core_value_sig0511,
      visible: var_core_value_sig1F44
    }) => {
      if (var_core_value_sig1F44) {
        var var_core_value_sigCB04;
        (var_core_value_sigCB04 = var_core_value_sig0511.show) == null || var_core_value_sigCB04.call(var_core_value_sig0511);
      } else {
        var var_core_value_sig947E;
        (var_core_value_sig947E = var_core_value_sig0511.hide) == null || var_core_value_sig947E.call(var_core_value_sig0511);
      }
    }), var_core_value_sigD810.forEach(({
      element: var_core_value_sig4545,
      overflow: var_core_value_sigF39A,
      hadHideClass: var_core_value_sigF79C
    }) => {
      var_core_value_sig4545.style["overflow"] = var_core_value_sigF39A, var_core_value_sigF79C || var_core_value_sig4545.classList["remove"](jt);
    }), var_core_value_sig1DE9.forEach(zt));
  };
}
function Ft(var_core_value_sig8085) {
  return var_core_value_sig8085 === a.UniverInstanceType["UNIVER_BASE"] ? new Promise(var_core_value_sigB66D => globalThis.setTimeout(var_core_value_sigB66D, 920)) : Promise.resolve();
}
function It(var_core_value_sigC59C) {
  if (!var_core_value_sigC59C) return [];
  let var_core_value_sigB778 = [],
    var_core_value_sig54E6 = new Set(),
    var_core_value_sigE9DB = var_core_value_sigD0F0 => {
      var var_core_value_sig8E31;
      var_core_value_sig54E6.has(var_core_value_sigD0F0) || (var_core_value_sig54E6.add(var_core_value_sigD0F0), var_core_value_sigB778.push(var_core_value_sigD0F0), (var_core_value_sig8E31 = var_core_value_sigD0F0.getAllObjects) == null || var_core_value_sig8E31.call(var_core_value_sigD0F0).forEach(var_core_value_sig2E54 => {
        var var_core_value_sig7658;
        (var_core_value_sig7658 = var_core_value_sig2E54.getSubScenes) == null || var_core_value_sig7658.call(var_core_value_sig2E54).forEach(var_core_value_sigE9DB);
      }));
    };
  return var_core_value_sigE9DB(var_core_value_sigC59C), var_core_value_sigB778;
}
function Lt(var_core_value_sigE26F) {
  return [var_core_value_sigE26F.container, var_core_value_sigE26F.renderScope["rootElement"], var_core_value_sigE26F.renderScope["contentRoot"], var_core_value_sigE26F.renderScope["canvasRoot"]].filter(var_core_value_sig8339 => !!var_core_value_sig8339);
}
function Rt(var_core_value_sig8C20) {
  return Array.from(new Set(var_core_value_sig8C20.flatMap(var_core_value_sigA01E => [...(var_core_value_sigA01E instanceof HTMLCanvasElement ? [var_core_value_sigA01E] : []), ...Array.from(var_core_value_sigA01E.querySelectorAll("canvas"))])));
}
function zt(var_core_value_sigBB73) {
  var var_core_value_sig2E4E, var_core_value_sig5E36;
  var_core_value_sigBB73 == null || (var_core_value_sig2E4E = var_core_value_sigBB73.makeDirty) == null || var_core_value_sig2E4E.call(var_core_value_sigBB73, true), var_core_value_sigBB73 == null || (var_core_value_sig5E36 = var_core_value_sigBB73.render) == null || var_core_value_sig5E36.call(var_core_value_sigBB73);
}
const Bt = "EMBED_DUPLICATE_CHILD_UNIT";
var Vt = class extends Error {
  constructor(var_core_value_sigA41E, var_core_value_sig939C) {
    super(Bt + ":\x20" + var_core_value_sigA41E), this.childUnitId = var_core_value_sigA41E, this.existingEmbedId = var_core_value_sig939C, V(this, "code", Bt), this.name = "EmbedDuplicateChildUnitError";
  }
};
let Ht = class {
  constructor(var_core_value_sigA49E, var_core_value_sig6DEB, var_core_value_sig2F0D, var_core_value_sig5141, var_core_value_sigA9E0, var_core_value_sig751D, var_core_value_sig2E9A, var_core_value_sigE105) {
    this._hostContainerRegistry = var_core_value_sigA49E, this._childViewRegistry = var_core_value_sig6DEB, this._overlayRootService = var_core_value_sig2F0D, this._sceneCanvasCaptureService = var_core_value_sig5141, this._univerInstanceService = var_core_value_sigA9E0, this._floatingActiveService = var_core_value_sig751D, this._runtimePolicyService = var_core_value_sig2E9A, this._injector = var_core_value_sigE105, V(this, "_sessions", new Map()), V(this, "_tabFocusLeases", new Map()), V(this, "_tabHostRenderLeases", new Map());
  }
  mount(var_core_value_sig0BD6) {
    return this._mountResolvedHost(var_core_value_sig0BD6);
  }
  mountIntoHostElement(var_core_value_sig3070, var_core_value_sigC66D, var_core_value_sig8EC5) {
    return this._mountResolvedHost(var_core_value_sig3070, {
      hostElement: var_core_value_sigC66D,
      runtimeRoots: var_core_value_sig8EC5
    });
  }
  _mountResolvedHost(var_core_value_sig1056, var_core_value_sig6EE5) {
    var var_core_value_sig9DD9, var_core_value_sig09AC;
    if (!var_core_value_sig1056.childUnitId || var_core_value_sig1056.childType == null) throw Error("EMBED_MOUNT_CHILD_NOT_RESOLVED");
    this._assertChildUnitAvailable(var_core_value_sig1056), this.unmount(var_core_value_sig1056.embedId);
    let var_core_value_sig1613 = {
        hostUnitId: var_core_value_sig1056.hostUnitId,
        embedId: var_core_value_sig1056.embedId,
        childUnitId: var_core_value_sig1056.childUnitId
      },
      var_core_value_sigADC6 = this._resolveLayout(var_core_value_sig1056),
      var_core_value_sig4620 = this._hostContainerRegistry["get"](var_core_value_sig1056.hostType, var_core_value_sig1056.entry);
    if (!var_core_value_sig4620 || !this._hostContainerRegistry["supports"](var_core_value_sig1056.hostType, var_core_value_sig1056.entry, var_core_value_sigADC6)) throw Error("EMBED_MOUNT_HOST_NOT_REGISTERED");
    let var_core_value_sig07FB = this._runtimePolicyService["canMount"](var_core_value_sig1613),
      var_core_value_sig617E = this._childViewRegistry["get"](var_core_value_sig1056.childType);
    if (var_core_value_sig07FB.allowed && !(var_core_value_sig617E != null && var_core_value_sig617E.supportedLayouts["includes"](var_core_value_sigADC6))) throw Error("EMBED_MOUNT_CHILD_NOT_REGISTERED");
    let var_core_value_sigC85E = {
        descriptor: var_core_value_sig1056,
        layout: var_core_value_sigADC6,
        injector: this._injector,
        hostUnitId: var_core_value_sig1056.hostUnitId,
        embedId: var_core_value_sig1056.embedId,
        childUnitId: var_core_value_sig1056.childUnitId,
        childType: var_core_value_sig1056.childType
      },
      var_core_value_sig8293 = [],
      var_core_value_sig050D = var_core_value_sig6EE5 ?? ((var_core_value_sig9DD9 = var_core_value_sig4620.mount) == null ? undefined : var_core_value_sig9DD9.call(var_core_value_sig4620, var_core_value_sigC85E)),
      var_core_value_sig37AE = this._normalizeHostMountResult(var_core_value_sig050D);
    if (var_core_value_sig37AE.disposable && var_core_value_sig8293.push(var_core_value_sig37AE.disposable), var_core_value_sigC85E.hostElement = var_core_value_sig37AE.hostElement ?? var_core_value_sigC85E.hostElement, var_core_value_sigC85E.container = var_core_value_sigC85E.hostElement, !var_core_value_sigC85E.hostElement || !var_core_value_sigC85E.container) throw [...var_core_value_sig8293].reverse().forEach(var_core_value_sigDCF5 => var_core_value_sigDCF5.dispose()), Error("EMBED_MOUNT_HOST_CONTAINER_NOT_RESOLVED");
    if (var_core_value_sig37AE.runtimeRoots || var_core_value_sig8293.push(ae(var_core_value_sigC85E.hostElement)), !var_core_value_sig07FB.allowed) return this._mountBlockedRuntime(var_core_value_sig1056, var_core_value_sigADC6, var_core_value_sigC85E.hostElement, var_core_value_sig37AE.runtimeRoots, var_core_value_sig8293, var_core_value_sig07FB.reason);
    if (!var_core_value_sig617E) throw [...var_core_value_sig8293].reverse().forEach(var_core_value_sigC786 => var_core_value_sigC786.dispose()), Error("EMBED_MOUNT_CHILD_NOT_REGISTERED");
    let {
      renderScope: var_core_value_sig5B51,
      disposable: var_core_value_sig64FF,
      setActive: var_core_value_sig86F4
    } = this._createRenderScope(var_core_value_sig1056, var_core_value_sigADC6, var_core_value_sigC85E.hostElement, var_core_value_sig37AE.runtimeRoots);
    var_core_value_sig8293.push(var_core_value_sig64FF);
    let var_core_value_sig9E0F = {
        ...var_core_value_sigC85E,
        hostElement: var_core_value_sigC85E.hostElement,
        container: var_core_value_sigC85E.container,
        renderScope: var_core_value_sig5B51
      },
      {
        runtimeScope: var_core_value_sig3A42,
        disposable: var_core_value_sig8802
      } = dt(var_core_value_sig9E0F, var_core_value_sig86F4, var_core_value_sig617E.scopedDependencies),
      var_core_value_sig95D5 = {
        ...var_core_value_sig9E0F,
        runtimeScope: var_core_value_sig3A42
      };
    var_core_value_sig8293.push(var_core_value_sig8802);
    let var_core_value_sigE027 = this._registerRuntimeBoundary(var_core_value_sig1056, var_core_value_sigC85E.hostElement, var_core_value_sig5B51, var_core_value_sig3A42.roots);
    var_core_value_sigE027 && var_core_value_sig8293.push(var_core_value_sigE027), this._injector["has"](K) && var_core_value_sig8293.push(this._injector["get"](K).registerRuntimeScope({
      embedId: var_core_value_sig1056.embedId,
      hostUnitId: var_core_value_sig1056.hostUnitId,
      childUnitId: var_core_value_sig1056.childUnitId,
      childType: var_core_value_sig1056.childType
    }));
    let var_core_value_sigE537 = var_core_value_sig3A42.injector === var_core_value_sigC85E.injector ? undefined : var_core_value_sig3A42.instanceService;
    var_core_value_sig8293.push(this._registerChildFocusBridge(var_core_value_sig1056, var_core_value_sigC85E.hostElement, var_core_value_sig5B51.mode, var_core_value_sigE537)), var_core_value_sig8293.push(this._sceneCanvasCaptureService["registerContext"](var_core_value_sig95D5));
    let var_core_value_sig5D84 = this._createMountFocusRestorer(var_core_value_sig1056),
      var_core_value_sigD120 = (var_core_value_sig09AC = var_core_value_sig617E.mount) == null ? undefined : var_core_value_sig09AC.call(var_core_value_sig617E, var_core_value_sig95D5);
    if (var_core_value_sigD120 && var_core_value_sig8293.push(var_core_value_sigD120), var_core_value_sig8293.push(var_core_value_sig5D84), var_core_value_sig8293.push(this._runtimePolicyService["registerMountedRuntime"](var_core_value_sig1613)), var_core_value_sig5B51.mode === "float") {
      let var_core_value_sigC0D9 = this._mountFloatingMenu(var_core_value_sig95D5);
      var_core_value_sigC0D9 && var_core_value_sig8293.push(var_core_value_sigC0D9);
    }
    let var_core_value_sigAA05 = {
      hostUnitId: var_core_value_sig1056.hostUnitId,
      embedId: var_core_value_sig1056.embedId,
      childUnitId: var_core_value_sig1056.childUnitId,
      childType: var_core_value_sig1056.childType,
      entry: var_core_value_sig1056.entry,
      layout: var_core_value_sigADC6,
      hostElement: var_core_value_sigC85E.hostElement,
      context: var_core_value_sig95D5
    };
    return this._sessions["set"](var_core_value_sig1056.embedId, {
      session: var_core_value_sigAA05,
      disposables: var_core_value_sig8293,
      setActive: var_core_value_sig86F4
    }), var_core_value_sigADC6 !== "tab-peer" && this._initializeFloatingSessionActiveState(var_core_value_sig1056, var_core_value_sigADC6, var_core_value_sig86F4), var_core_value_sigAA05;
  }
  _mountBlockedRuntime(var_core_value_sigC04C, var_core_value_sig2069, var_core_value_sig5176, var_core_value_sig71A1, var_core_value_sig72AD, var_core_value_sig9ABE) {
    let var_core_value_sig8EF01 = (var_core_value_sig71A1 == null ? undefined : var_core_value_sig71A1.content) ?? R(var_core_value_sig5176, "data-embed-content-root") ?? var_core_value_sig5176,
      var_core_value_sig234B = Wt(var_core_value_sig9ABE);
    var_core_value_sig8EF01.replaceChildren(var_core_value_sig234B), var_core_value_sig72AD.push((0, a.toDisposable)(() => {
      var_core_value_sig234B.parentElement === var_core_value_sig8EF01 && var_core_value_sig234B.remove();
    }));
    let var_core_value_sig8169 = {
      hostUnitId: var_core_value_sigC04C.hostUnitId,
      embedId: var_core_value_sigC04C.embedId,
      childUnitId: var_core_value_sigC04C.childUnitId,
      childType: var_core_value_sigC04C.childType,
      entry: var_core_value_sigC04C.entry,
      layout: var_core_value_sig2069,
      hostElement: var_core_value_sig5176
    };
    return this._sessions["set"](var_core_value_sigC04C.embedId, {
      session: var_core_value_sig8169,
      disposables: var_core_value_sig72AD,
      setActive: () => {}
    }), var_core_value_sig8169;
  }
  _initializeFloatingSessionActiveState(var_core_value_sigC5FB, var_core_value_sig5453, var_core_value_sig8725) {
    if (var_core_value_sig5453 !== "tab-peer") {
      if (this._injector["has"](t.EmbedFocusOwnerService)) {
        let var_core_value_sig48CA = this._injector["get"](t.EmbedFocusOwnerService).getFocusOwner();
        if ((var_core_value_sig48CA == null ? undefined : var_core_value_sig48CA.hostUnitId) === var_core_value_sigC5FB.hostUnitId) {
          var_core_value_sig8725(var_core_value_sig48CA.embedId === var_core_value_sigC5FB.embedId);
          return;
        }
      }
      var_core_value_sig8725(false);
    }
  }
  unmount(var_core_value_sig513B) {
    let var_core_value_sig5501 = this._sessions["get"](var_core_value_sig513B);
    var_core_value_sig5501 && (this._releaseTabPeerFocusLease(var_core_value_sig513B), this._releaseTabPeerHostRenderLease(var_core_value_sig513B), [...var_core_value_sig5501.disposables].reverse().forEach(var_core_value_sigF0511 => var_core_value_sigF0511.dispose()), this._sessions["delete"](var_core_value_sig513B));
  }
  getSession(var_core_value_sig7784) {
    var var_core_value_sigB706;
    return (var_core_value_sigB706 = this._sessions["get"](var_core_value_sig7784)) == null ? undefined : var_core_value_sigB706.session;
  }
  listSessions() {
    return [...this._sessions["values"]()].map(({
      session: var_core_value_sig5825
    }) => var_core_value_sig5825);
  }
  activateSession(var_core_value_sig5FD01) {
    let var_core_value_sig77E3 = this._sessions["get"](var_core_value_sig5FD01);
    if (var_core_value_sig77E3) {
      if (var_core_value_sig77E3.session["layout"] !== "tab-peer") {
        var var_core_value_sigB071;
        let var_core_value_sig50AF = (var_core_value_sigB071 = this._floatingActiveService["getActive"]()) == null ? undefined : var_core_value_sigB071.embedId;
        this._sessions["forEach"](var_core_value_sig76BA => {
          var var_core_value_sigFBFA;
          if (var_core_value_sig76BA.session["layout"] === "tab-peer" || var_core_value_sig76BA.session["hostUnitId"] !== var_core_value_sig77E3.session["hostUnitId"]) return;
          let var_core_value_sigF602 = var_core_value_sig76BA.session["embedId"] === var_core_value_sig5FD01;
          !var_core_value_sigF602 && (var_core_value_sig76BA.session["embedId"] === var_core_value_sig50AF || ((var_core_value_sigFBFA = var_core_value_sig76BA.session["context"]) == null ? undefined : var_core_value_sigFBFA.renderScope["rootElement"].dataset["embedRenderScopeActive"]) === "true") && this._runChildBeforeDeactivate(var_core_value_sig76BA.session), var_core_value_sig76BA.setActive(var_core_value_sigF602);
        });
        return;
      }
      this._suspendTabPeerHostRender(var_core_value_sig77E3.session), this._sessions["forEach"](var_core_value_sigA942 => {
        var var_core_value_sigA621;
        if (var_core_value_sigA942.session["layout"] !== "tab-peer" || var_core_value_sigA942.session["hostUnitId"] !== var_core_value_sig77E3.session["hostUnitId"]) return;
        let var_core_value_sigBBFF = var_core_value_sigA942.session["embedId"] === var_core_value_sig5FD01;
        !var_core_value_sigBBFF && ((var_core_value_sigA621 = var_core_value_sigA942.session["context"]) == null ? undefined : var_core_value_sigA621.renderScope["rootElement"].dataset["embedRenderScopeActive"]) === "true" && this._runChildBeforeDeactivate(var_core_value_sigA942.session), var_core_value_sigA942.setActive(var_core_value_sigBBFF);
      }), this._focusTabPeerSession(var_core_value_sig77E3.session), this._refreshTabPeerRender(var_core_value_sig77E3.session);
    }
  }
  releaseSessionFocus(var_core_value_sig15FE) {
    let var_core_value_sigCF47 = this._tabFocusLeases["has"](var_core_value_sig15FE);
    return this._releaseTabPeerFocusLease(var_core_value_sig15FE), var_core_value_sigCF47;
  }
  deactivateTabSessions(var_core_value_sigB0F9) {
    let var_core_value_sigAF12 = [];
    return this._sessions["forEach"](var_core_value_sig4EB7 => {
      var_core_value_sig4EB7.session["layout"] === "tab-peer" && (var_core_value_sigB0F9 && var_core_value_sig4EB7.session["embedId"] !== var_core_value_sigB0F9 || (this._runChildBeforeDeactivate(var_core_value_sig4EB7.session), this._releaseTabPeerFocusLease(var_core_value_sig4EB7.session["embedId"]), var_core_value_sig4EB7.setActive(false), this._releaseTabPeerHostRenderLease(var_core_value_sig4EB7.session["embedId"]), var_core_value_sigAF12.push(var_core_value_sig4EB7.session)));
    }), var_core_value_sigAF12;
  }
  deactivateFloatingSession(var_core_value_sigC60C) {
    let var_core_value_sig1C3C = this._sessions["get"](var_core_value_sigC60C);
    if (!(!var_core_value_sig1C3C || var_core_value_sig1C3C.session["layout"] === "tab-peer")) return this._runChildBeforeDeactivate(var_core_value_sig1C3C.session), var_core_value_sig1C3C.setActive(false), var_core_value_sig1C3C.session;
  }
  setActive(var_core_value_sig71CF, var_core_value_sigC341) {
    var var_core_value_sigBA47;
    (var_core_value_sigBA47 = this._sessions["get"](var_core_value_sig71CF)) == null || var_core_value_sigBA47.setActive(var_core_value_sigC341);
  }
  _runChildBeforeDeactivate(var_core_value_sig3DF7) {
    let var_core_value_sigD49F = var_core_value_sig3DF7.context;
    if (!var_core_value_sigD49F) return;
    let var_core_value_sigCECC = this._childViewRegistry["get"](var_core_value_sig3DF7.childType);
    if (var_core_value_sigCECC != null && var_core_value_sigCECC.beforeDeactivate) try {
      var_core_value_sigCECC.beforeDeactivate(var_core_value_sigD49F);
    } catch (var_core_value_sig73AF) {
      console.warn("[embed-ui] failed to deactivate embedded child view", var_core_value_sig73AF);
    }
  }
  _suspendTabPeerHostRender(var_core_value_sig0F47) {
    var var_core_value_sig6B29;
    let var_core_value_sig28E2 = (var_core_value_sig6B29 = var_core_value_sig0F47.context) == null ? undefined : var_core_value_sig6B29.injector;
    if (!(var_core_value_sig28E2 != null && var_core_value_sig28E2.has(p.IRenderManagerService))) return;
    let var_core_value_sig1578 = this._tabHostRenderLeases["get"](var_core_value_sig0F47.hostUnitId);
    if (var_core_value_sig1578) {
      this._tabHostRenderLeases["set"](var_core_value_sig0F47.hostUnitId, {
        ...var_core_value_sig1578,
        embedId: var_core_value_sig0F47.embedId
      });
      return;
    }
    let var_core_value_sig52ED = var_core_value_sig28E2.get(p.IRenderManagerService).getRenderUnitById(var_core_value_sig0F47.hostUnitId);
    if (!var_core_value_sig52ED || var_core_value_sig52ED.isMainScene === false || var_core_value_sig52ED.isDisposed()) return;
    let var_core_value_sig135F = var_core_value_sig52ED.engine["getCanvasElement"]().parentElement;
    var_core_value_sig135F && (var_core_value_sig52ED.deactivate(), var_core_value_sig52ED.engine["unmount"](), this._tabHostRenderLeases["set"](var_core_value_sig0F47.hostUnitId, {
      embedId: var_core_value_sig0F47.embedId,
      render: var_core_value_sig52ED,
      parentElement: var_core_value_sig135F
    }));
  }
  _releaseTabPeerHostRenderLease(var_core_value_sig416D) {
    this._tabHostRenderLeases["forEach"]((var_core_value_sig548A, var_core_value_sigE026) => {
      var_core_value_sig548A.embedId === var_core_value_sig416D && (this._tabHostRenderLeases["delete"](var_core_value_sigE026), !(var_core_value_sig548A.render["isDisposed"]() || !var_core_value_sig548A.parentElement["isConnected"]) && (var_core_value_sig548A.render["engine"].getCanvasElement().parentElement !== var_core_value_sig548A.parentElement && var_core_value_sig548A.render["engine"].mount(var_core_value_sig548A.parentElement), Ot(var_core_value_sig548A.render, {
        activate: true
      })));
    });
  }
  _resolveLayout(var_core_value_sigAD5D) {
    var var_core_value_sig1B8A, var_core_value_sigFB18;
    let var_core_value_sig703C = ((var_core_value_sig1B8A = var_core_value_sigAD5D.sourceMeta) == null ? undefined : var_core_value_sig1B8A.floating) || undefined;
    if (var_core_value_sig703C != null && var_core_value_sig703C.layout) return var_core_value_sig703C.layout;
    let var_core_value_sig96CF = ((var_core_value_sigFB18 = var_core_value_sigAD5D.sourceMeta) == null ? undefined : var_core_value_sigFB18.tab) || undefined;
    if (var_core_value_sig96CF != null && var_core_value_sig96CF.enabled) return "tab-peer";
    throw Error("EMBED_MOUNT_LAYOUT_NOT_RESOLVED");
  }
  _createRenderScope(var_core_value_sig49F1, var_core_value_sig2F7B, var_core_value_sigB0DF, var_core_value_sig2E441) {
    var var_core_value_sig8560, var_core_value_sig138D;
    let var_core_value_sig1E26 = new f["BehaviorSubject"](true),
      var_core_value_sig5C6C = var_core_value_sig49F1.hostAnchorId,
      var_core_value_sigBE85 = (var_core_value_sig8560 = var_core_value_sig49F1.sourceMeta) == null ? undefined : var_core_value_sig8560.tab,
      var_core_value_sig56DE = var_core_value_sigBE85 && var_core_value_sigBE85.enabled ? "tab" : (var_core_value_sig138D = var_core_value_sig49F1.sourceMeta) != null && var_core_value_sig138D.floating ? "float" : "inline",
      var_core_value_sig0278 = (var_core_value_sig2E441 == null ? undefined : var_core_value_sig2E441.content) ?? R(var_core_value_sigB0DF, "data-embed-content-root") ?? var_core_value_sigB0DF,
      var_core_value_sig08A6 = (var_core_value_sig2E441 == null ? undefined : var_core_value_sig2E441.canvas) ?? R(var_core_value_sigB0DF, "data-embed-canvas-root") ?? var_core_value_sigB0DF,
      var_core_value_sig04E1 = (var_core_value_sig2E441 == null ? undefined : var_core_value_sig2E441.overlay) ?? R(var_core_value_sigB0DF, "data-embed-overlay-root") ?? var_core_value_sigB0DF,
      var_core_value_sigC504 = (var_core_value_sig2E441 == null ? undefined : var_core_value_sig2E441.popup) ?? R(var_core_value_sigB0DF, "data-embed-popup-root") ?? var_core_value_sig04E1,
      var_core_value_sig0515 = this._overlayRootService["register"]({
        childUnitId: var_core_value_sig49F1.childUnitId,
        embedId: var_core_value_sig49F1.embedId,
        hostAnchorId: var_core_value_sig5C6C,
        root: var_core_value_sig04E1
      }),
      var_core_value_sig9F34 = var_core_value_sig339E => {
        var_core_value_sig1E26.getValue() !== var_core_value_sig339E && (Ut(var_core_value_sigB0DF, var_core_value_sig339E, var_core_value_sig56DE), var_core_value_sig1E26.next(var_core_value_sig339E));
      };
    return Ut(var_core_value_sigB0DF, true, var_core_value_sig56DE), {
      renderScope: {
        hostUnitId: var_core_value_sig49F1.hostUnitId,
        hostAnchorId: var_core_value_sig5C6C,
        embedId: var_core_value_sig49F1.embedId,
        childUnitId: var_core_value_sig49F1.childUnitId,
        childType: var_core_value_sig49F1.childType,
        layout: var_core_value_sig2F7B,
        mode: var_core_value_sig56DE,
        rootElement: var_core_value_sigB0DF,
        contentRoot: var_core_value_sig0278,
        canvasRoot: var_core_value_sig08A6,
        overlayRoot: var_core_value_sig04E1,
        popupRoot: var_core_value_sigC504,
        menuOutlet: var_core_value_sig2E441 != null && var_core_value_sig2E441.menuSlot ? {
          container: var_core_value_sig2E441.menuSlot
        } : undefined,
        active$: var_core_value_sig1E26.asObservable()
      },
      disposable: (0, a.toDisposable)(() => {
        var_core_value_sig0515.dispose(), var_core_value_sig9F34(false), var_core_value_sig1E26.complete();
      }),
      setActive: var_core_value_sig9F34
    };
  }
  _registerRuntimeBoundary(var_core_value_sig0247, var_core_value_sig6030, var_core_value_sig0137, var_core_value_sig14F3) {
    let var_core_value_sig34E8 = this._injector["has"](J),
      var_core_value_sigCFE7 = this._injector["has"](K);
    if (!var_core_value_sig34E8 && !var_core_value_sigCFE7) return;
    let var_core_value_sigECBC = var_core_value_sig34E8 ? this._injector["get"](J) : undefined,
      var_core_value_sig65D2 = var_core_value_sigCFE7 ? this._injector["get"](K) : undefined,
      var_core_value_sig4306 = new Map(),
      var_core_value_sigFCD3 = (var_core_value_sig7550, var_core_value_sig2983) => {
        if (!var_core_value_sig7550) return;
        let var_core_value_sigE1B0 = var_core_value_sig4306.get(var_core_value_sig7550);
        (!var_core_value_sigE1B0 || var_core_value_sigE1B0 === "runtime") && var_core_value_sig4306.set(var_core_value_sig7550, var_core_value_sig2983);
      };
    var_core_value_sigFCD3(var_core_value_sig6030, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.rootElement, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.contentRoot, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.canvasRoot, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.overlayRoot, "runtime"), var_core_value_sigFCD3(var_core_value_sig14F3.root, "runtime"), var_core_value_sigFCD3(var_core_value_sig14F3.content, "runtime"), var_core_value_sigFCD3(var_core_value_sig14F3.canvas, "runtime"), var_core_value_sigFCD3(var_core_value_sig14F3.overlay, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.popupRoot, "child-popup"), var_core_value_sigFCD3(var_core_value_sig14F3.popup, "child-popup");
    let var_core_value_sig147A = [...var_core_value_sig4306].flatMap(([var_core_value_sigD4FF, var_core_value_sig1E5B]) => [var_core_value_sigECBC == null ? undefined : var_core_value_sigECBC.registerRoot(var_core_value_sig0247.embedId, var_core_value_sigD4FF, var_core_value_sig0247.childUnitId), var_core_value_sig65D2 == null ? undefined : var_core_value_sig65D2.registerElement({
      embedId: var_core_value_sig0247.embedId,
      role: var_core_value_sig1E5B,
      element: var_core_value_sigD4FF
    })].filter(var_core_value_sig8889 => !!var_core_value_sig8889));
    return (0, a.toDisposable)(() => {
      [...var_core_value_sig147A].reverse().forEach(var_core_value_sig32F8 => var_core_value_sig32F8.dispose());
    });
  }
  _normalizeHostMountResult(var_core_value_sig829F) {
    return var_core_value_sig829F ? "dispose" in var_core_value_sig829F ? {
      disposable: var_core_value_sig829F
    } : {
      hostElement: var_core_value_sig829F.hostElement,
      runtimeRoots: var_core_value_sig829F.runtimeRoots,
      disposable: var_core_value_sig829F.disposable ? (0, a.toDisposable)(() => {
        var var_core_value_sigB680;
        return (var_core_value_sigB680 = var_core_value_sig829F.disposable) == null ? undefined : var_core_value_sigB680.dispose();
      }) : undefined
    } : {};
  }
  _mountFloatingMenu(var_core_value_sig534C) {
    if (!this._injector["has"](_t)) return;
    let var_core_value_sigABB7 = this._injector["get"](_t).get(var_core_value_sig534C.descriptor["hostType"], var_core_value_sig534C.descriptor["entry"], var_core_value_sig534C.childType);
    if (!var_core_value_sigABB7) return;
    let var_core_value_sig9071 = this._floatingActiveService["getActive"](),
      var_core_value_sig01A9 = var_core_value_sigABB7.mount({
        ...var_core_value_sig534C,
        active: var_core_value_sig9071
      });
    return var_core_value_sig01A9 ? (0, a.toDisposable)(() => var_core_value_sig01A9.dispose()) : undefined;
  }
  _registerChildFocusBridge(var_core_value_sig9477, var_core_value_sig917C, var_core_value_sig27E2, var_core_value_sig10D7) {
    let var_core_value_sig5A1A = this._injector["has"](J) ? this._injector["get"](J) : undefined,
      var_core_value_sig77D2 = this._injector["has"](K) ? this._injector["get"](K) : undefined,
      var_core_value_sig625E = var_core_value_sig917C.ownerDocument,
      var_core_value_sig6F04 = [],
      var_core_value_sig48DA = var_core_value_sig27E2 === "float" && var_core_value_sig10D7 ? this._floatingActiveService["active$"].subscribe(() => {
        this._floatingActiveService["getStage"](var_core_value_sig9477.embedId) !== "stage2" && var_core_value_sig10D7.focusUnit(null);
      }) : undefined,
      var_core_value_sigD327 = () => var_core_value_sig27E2 !== "float" || this._floatingActiveService["getStage"](var_core_value_sig9477.embedId) === "stage2",
      var_core_value_sig6694 = (var_core_value_sig1F64, var_core_value_sigDD1C = {}) => {
        let var_core_value_sig2C39 = var_core_value_sigDD1C.focusUnit !== false,
          var_core_value_sigB7D1 = var_core_value_sigDD1C.activateSession !== false,
          var_core_value_sig64F0 = (var_core_value_sig1F64 == null ? undefined : var_core_value_sig1F64.target) instanceof Element ? var_core_value_sig1F64.target : null;
        if (var_core_value_sig64F0 != null && var_core_value_sig64F0.closest("[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22],\x20[data-embed-ribbon-override=\x22true\x22]") || !var_core_value_sig9477.childUnitId || var_core_value_sig9477.childType == null || var_core_value_sig27E2 === "tab" && (var_core_value_sig1F64 == null ? undefined : var_core_value_sig1F64.type) === "focusin" && !this._tabFocusLeases["has"](var_core_value_sig9477.embedId) || !var_core_value_sigD327()) return;
        let var_core_value_sig85B1 = var_core_value_sig27E2 === "tab" && this._injector["has"](t.EmbedFocusOwnerService) ? this._injector["get"](t.EmbedFocusOwnerService).getFocusOwner() : null,
          var_core_value_sig3141 = (var_core_value_sig85B1 == null ? undefined : var_core_value_sig85B1.hostUnitId) === var_core_value_sig9477.hostUnitId && var_core_value_sig85B1.embedId === var_core_value_sig9477.embedId && var_core_value_sig85B1.childUnitId === var_core_value_sig9477.childUnitId && var_core_value_sig85B1.childType === var_core_value_sig9477.childType;
        if (var_core_value_sig27E2 === "float" && var_core_value_sig10D7 && (var_core_value_sig10D7.setCurrentUnitForType(var_core_value_sig9477.childUnitId), var_core_value_sig2C39 && var_core_value_sig10D7.focusUnit(var_core_value_sig9477.childUnitId)), var_core_value_sig27E2 === "tab" && this._injector["has"](a.IUniverInstanceService)) {
          var var_core_value_sig2162, var_core_value_sig2EAD;
          let var_core_value_sig5B67 = this._injector["get"](a.IUniverInstanceService),
            var_core_value_sig1758 = var_core_value_sig5B67.getCurrentUnitOfType,
            var_core_value_sig4805 = var_core_value_sig5B67.getFocusedUnit;
          (typeof var_core_value_sig1758 != "function" || ((var_core_value_sig2162 = var_core_value_sig1758.call(var_core_value_sig5B67, var_core_value_sig9477.childType)) == null ? undefined : var_core_value_sig2162.getUnitId()) !== var_core_value_sig9477.childUnitId) && var_core_value_sig5B67.setCurrentUnitForType(var_core_value_sig9477.childUnitId), var_core_value_sig2C39 && (typeof var_core_value_sig4805 != "function" || ((var_core_value_sig2EAD = var_core_value_sig4805.call(var_core_value_sig5B67)) == null ? undefined : var_core_value_sig2EAD.getUnitId()) !== var_core_value_sig9477.childUnitId) && var_core_value_sig5B67.focusUnit(var_core_value_sig9477.childUnitId);
        }
        if (var_core_value_sig27E2 === "tab" && this._injector["has"](a.IContextService)) {
          let var_core_value_sigE67E = this._injector["get"](a.IContextService);
          var_core_value_sigE67E.setContextValue(a.FOCUSING_UNIT, true), var_core_value_sigE67E.setContextValue(a.FOCUSING_DOC, var_core_value_sig9477.childType === a.UniverInstanceType["UNIVER_DOC"]), var_core_value_sigE67E.setContextValue(a.FOCUSING_SHEET, var_core_value_sig9477.childType === a.UniverInstanceType["UNIVER_SHEET"]), var_core_value_sigE67E.setContextValue(a.FOCUSING_SLIDE, var_core_value_sig9477.childType === a.UniverInstanceType["UNIVER_SLIDE"]), var_core_value_sigE67E.setContextValue(a.FOCUSING_BOARD, var_core_value_sig9477.childType === a.UniverInstanceType["UNIVER_BOARD"]);
        }
        if (this._injector["has"](t.EmbedFocusOwnerService)) {
          let var_core_value_sig2902 = this._injector["get"](t.EmbedFocusOwnerService),
            var_core_value_sig9989 = {
              hostUnitId: var_core_value_sig9477.hostUnitId,
              embedId: var_core_value_sig9477.embedId,
              childUnitId: var_core_value_sig9477.childUnitId,
              childType: var_core_value_sig9477.childType,
              reason: "pointer"
            },
            var_core_value_sig698E = var_core_value_sig2902.getFocusOwner();
          ((var_core_value_sig698E == null ? undefined : var_core_value_sig698E.hostUnitId) !== var_core_value_sig9989.hostUnitId || var_core_value_sig698E.embedId !== var_core_value_sig9989.embedId || var_core_value_sig698E.childUnitId !== var_core_value_sig9989.childUnitId || var_core_value_sig698E.childType !== var_core_value_sig9989.childType || var_core_value_sig698E.reason !== var_core_value_sig9989.reason) && var_core_value_sig2902.setFocusOwner(var_core_value_sig9989);
        }
        var_core_value_sigB7D1 && (var_core_value_sig27E2 === "tab" && var_core_value_sig917C.dataset["embedRenderScopeActive"] === "true" && this._tabFocusLeases["has"](var_core_value_sig9477.embedId) && ((var_core_value_sig1F64 == null ? undefined : var_core_value_sig1F64.type) === "pointerdown" || var_core_value_sig3141) || this.activateSession(var_core_value_sig9477.embedId));
      },
      var_core_value_sig2A21 = var_core_value_sig6774 => {
        let var_core_value_sig340D = var_core_value_sig6774.target instanceof Element ? var_core_value_sig6774.target : null;
        if (!var_core_value_sig340D || var_core_value_sig917C.contains(var_core_value_sig340D) || !(var_core_value_sig5A1A != null && var_core_value_sig5A1A.contains(var_core_value_sig9477.embedId, var_core_value_sig340D, var_core_value_sig6774) || var_core_value_sig77D2 != null && var_core_value_sig77D2.containsElement(var_core_value_sig9477.embedId, var_core_value_sig340D, var_core_value_sig6774))) return;
        var_core_value_sig6694(var_core_value_sig6774, {
          focusUnit: false,
          activateSession: false
        });
        let var_core_value_sig82D4 = var_core_value_sig625E.defaultView;
        var_core_value_sig82D4 && var_core_value_sig6F04.push(var_core_value_sig82D4.setTimeout(() => var_core_value_sig6694(var_core_value_sig6774, {
          focusUnit: false,
          activateSession: false
        }), 0));
      };
    return var_core_value_sig917C.addEventListener("pointerdown", var_core_value_sig6694, {
      capture: true
    }), var_core_value_sig917C.addEventListener("focusin", var_core_value_sig6694), var_core_value_sig625E.addEventListener("pointerdown", var_core_value_sig2A21, {
      capture: true
    }), var_core_value_sig625E.addEventListener("focusin", var_core_value_sig2A21, {
      capture: true
    }), (0, a.toDisposable)(() => {
      var_core_value_sig917C.removeEventListener("pointerdown", var_core_value_sig6694, {
        capture: true
      }), var_core_value_sig917C.removeEventListener("focusin", var_core_value_sig6694), var_core_value_sig625E.removeEventListener("pointerdown", var_core_value_sig2A21, {
        capture: true
      }), var_core_value_sig625E.removeEventListener("focusin", var_core_value_sig2A21, {
        capture: true
      }), var_core_value_sig6F04.forEach(var_core_value_sig2809 => {
        var var_core_value_sig2DAB;
        return (var_core_value_sig2DAB = var_core_value_sig625E.defaultView) == null ? undefined : var_core_value_sig2DAB.clearTimeout(var_core_value_sig2809);
      }), var_core_value_sig48DA == null || var_core_value_sig48DA.unsubscribe();
    });
  }
  _focusTabPeerSession(var_core_value_sig0836) {
    if (this._activateTabPeerFocusLease(var_core_value_sig0836), this._injector["has"](a.IUniverInstanceService)) {
      let var_core_value_sigBDE4 = this._injector["get"](a.IUniverInstanceService);
      var_core_value_sigBDE4.setCurrentUnitForType(var_core_value_sig0836.childUnitId), var_core_value_sigBDE4.focusUnit(var_core_value_sig0836.childUnitId);
    }
    if (this._injector["has"](a.IContextService)) {
      let var_core_value_sig7DF1 = this._injector["get"](a.IContextService);
      var_core_value_sig7DF1.setContextValue(a.FOCUSING_UNIT, true), var_core_value_sig7DF1.setContextValue(a.FOCUSING_DOC, var_core_value_sig0836.childType === a.UniverInstanceType["UNIVER_DOC"]), var_core_value_sig7DF1.setContextValue(a.FOCUSING_SHEET, var_core_value_sig0836.childType === a.UniverInstanceType["UNIVER_SHEET"]), var_core_value_sig7DF1.setContextValue(a.FOCUSING_SLIDE, var_core_value_sig0836.childType === a.UniverInstanceType["UNIVER_SLIDE"]), var_core_value_sig7DF1.setContextValue(a.FOCUSING_BOARD, var_core_value_sig0836.childType === a.UniverInstanceType["UNIVER_BOARD"]);
    }
    this._injector["has"](t.EmbedFocusOwnerService) && this._injector["get"](t.EmbedFocusOwnerService).setFocusOwner({
      hostUnitId: var_core_value_sig0836.hostUnitId,
      embedId: var_core_value_sig0836.embedId,
      childUnitId: var_core_value_sig0836.childUnitId,
      childType: var_core_value_sig0836.childType,
      reason: "keyboard"
    });
  }
  _refreshTabPeerRender(var_core_value_sigD95C) {
    var var_core_value_sig692E;
    let var_core_value_sig3FAF = (var_core_value_sig692E = var_core_value_sigD95C.context) == null ? undefined : var_core_value_sig692E.injector;
    if (!(var_core_value_sig3FAF != null && var_core_value_sig3FAF.has(p.IRenderManagerService))) return;
    let var_core_value_sig378B = var_core_value_sig3FAF.get(p.IRenderManagerService).getRenderUnitById(var_core_value_sigD95C.childUnitId);
    (var_core_value_sig378B == null ? undefined : var_core_value_sig378B.isMainScene) === false && Ot(var_core_value_sig378B, {
      activate: true
    });
  }
  _activateTabPeerFocusLease(var_core_value_sigDE50) {
    this._releaseTabPeerFocusLeasesForHost(var_core_value_sigDE50.hostUnitId, var_core_value_sigDE50.embedId), this._releaseTabPeerFocusLease(var_core_value_sigDE50.embedId);
    let var_core_value_sig3094 = [];
    if (this._injector["has"](K) && var_core_value_sig3094.push(this._injector["get"](K).acquireLease({
      embedId: var_core_value_sigDE50.embedId,
      role: "child-session",
      owner: "tab-peer-runtime",
      sessionMode: "child-tab",
      hostUnitId: var_core_value_sigDE50.hostUnitId,
      childUnitId: var_core_value_sigDE50.childUnitId,
      childType: var_core_value_sigDE50.childType
    })), this._injector["has"](J)) {
      var var_core_value_sig86CC, var_core_value_sig7868;
      var_core_value_sig3094.push(this._injector["get"](J).activatePortalScope(var_core_value_sigDE50.embedId, ((var_core_value_sig86CC = var_core_value_sigDE50.hostElement) == null ? undefined : var_core_value_sig86CC.ownerDocument) ?? ((var_core_value_sig7868 = var_core_value_sigDE50.context) == null ? undefined : var_core_value_sig7868.renderScope["rootElement"].ownerDocument), {
        includeAppShellEditorPortal: var_core_value_sigDE50.childType === a.UniverInstanceType["UNIVER_SHEET"]
      }));
    }
    var_core_value_sig3094.length && this._tabFocusLeases["set"](var_core_value_sigDE50.embedId, {
      hostUnitId: var_core_value_sigDE50.hostUnitId,
      disposable: (0, a.toDisposable)(() => {
        [...var_core_value_sig3094].reverse().forEach(var_core_value_sig877E => var_core_value_sig877E.dispose());
      })
    });
  }
  _releaseTabPeerFocusLeasesForHost(var_core_value_sig9921, var_core_value_sig59BF) {
    [...this._tabFocusLeases["entries"]()].forEach(([var_core_value_sigDC86, var_core_value_sig0B0C]) => {
      var_core_value_sigDC86 !== var_core_value_sig59BF && var_core_value_sig0B0C.hostUnitId === var_core_value_sig9921 && (var_core_value_sig0B0C.disposable["dispose"](), this._tabFocusLeases["delete"](var_core_value_sigDC86));
    });
  }
  _releaseTabPeerFocusLease(var_core_value_sigF001) {
    let var_core_value_sigE511 = this._tabFocusLeases["get"](var_core_value_sigF001);
    var_core_value_sigE511 && (var_core_value_sigE511.disposable["dispose"](), this._tabFocusLeases["delete"](var_core_value_sigF001));
  }
  _createMountFocusRestorer(var_core_value_sig1C81) {
    var var_core_value_sig2C6A, var_core_value_sig7207;
    if ((var_core_value_sig2C6A = var_core_value_sig1C81.sourceMeta) != null && var_core_value_sig2C6A.tab && var_core_value_sig1C81.sourceMeta["tab"].enabled || !this._injector["has"](a.IUniverInstanceService) || !var_core_value_sig1C81.childUnitId) return (0, a.toDisposable)(() => {});
    let var_core_value_sig297F = this._injector["get"](a.IUniverInstanceService),
      var_core_value_sigA95A = var_core_value_sig297F.getFocusedUnit,
      var_core_value_sig94D6 = var_core_value_sig297F.focusUnit;
    if (typeof var_core_value_sigA95A != "function" || typeof var_core_value_sig94D6 != "function") return (0, a.toDisposable)(() => {});
    let var_core_value_sigC22E = (var_core_value_sig7207 = var_core_value_sigA95A.call(var_core_value_sig297F)) == null ? undefined : var_core_value_sig7207.getUnitId();
    if (!var_core_value_sigC22E || var_core_value_sigC22E === var_core_value_sig1C81.childUnitId) return (0, a.toDisposable)(() => {});
    let var_core_value_sig2321 = () => {
        var var_core_value_sigA39E;
        ((var_core_value_sigA39E = var_core_value_sigA95A.call(var_core_value_sig297F)) == null ? undefined : var_core_value_sigA39E.getUnitId()) === var_core_value_sig1C81.childUnitId && var_core_value_sig94D6.call(var_core_value_sig297F, var_core_value_sigC22E);
      },
      var_core_value_sigFF33 = [],
      var_core_value_sig16E0 = [];
    return var_core_value_sig2321(), typeof window < "u" && (var_core_value_sig16E0.push(window.requestAnimationFrame(var_core_value_sig2321)), var_core_value_sigFF33.push(window.setTimeout(var_core_value_sig2321, 0)), var_core_value_sigFF33.push(window.setTimeout(var_core_value_sig2321, 120))), (0, a.toDisposable)(() => {
      typeof window > "u" || (var_core_value_sig16E0.forEach(var_core_value_sig20C8 => window.cancelAnimationFrame(var_core_value_sig20C8)), var_core_value_sigFF33.forEach(var_core_value_sigE9A7 => window.clearTimeout(var_core_value_sigE9A7)));
    });
  }
  _assertChildUnitAvailable(var_core_value_sig213C) {
    let var_core_value_sig31F8 = [...this._sessions["values"]()].find(({
      session: var_core_value_sigBBEE
    }) => var_core_value_sigBBEE.embedId !== var_core_value_sig213C.embedId && var_core_value_sigBBEE.childUnitId === var_core_value_sig213C.childUnitId);
    if (var_core_value_sig31F8) throw new Vt(var_core_value_sig213C.childUnitId, var_core_value_sig31F8.session["embedId"]);
    if (this._univerInstanceService["getUnit"](var_core_value_sig213C.childUnitId, var_core_value_sig213C.childType)) return;
    let var_core_value_sig6905 = this._univerInstanceService["getUnitType"](var_core_value_sig213C.childUnitId);
    throw var_core_value_sig6905 !== a.UniverInstanceType["UNRECOGNIZED"] && var_core_value_sig6905 !== var_core_value_sig213C.childType ? Error("EMBED_MOUNT_CHILD_TYPE_MISMATCH") : Error("EMBED_MOUNT_CHILD_UNIT_NOT_AVAILABLE");
  }
};
Ht = Z([X(0, (0, a.Inject)(vt)), X(1, (0, a.Inject)(gt)), X(2, (0, a.Inject)(yt)), X(3, (0, a.Inject)(kt)), X(4, a.IUniverInstanceService), X(5, (0, a.Inject)(ce)), X(6, (0, a.Inject)(Y)), X(7, (0, a.Inject)(a.Injector))], Ht);
function Ut(var_core_value_sig9385, var_core_value_sigE5B5, var_core_value_sig8483) {
  if (var_core_value_sig9385.dataset["embedRenderScopeActive"] = var_core_value_sigE5B5 ? "true" : "false", var_core_value_sig8483 !== "tab") {
    var_core_value_sig9385.removeAttribute("inert"), var_core_value_sig9385.removeAttribute("aria-hidden"), var_core_value_sig9385.style["removeProperty"]("display"), var_core_value_sig9385.style["removeProperty"]("pointer-events");
    return;
  }
  if (var_core_value_sig9385.toggleAttribute("inert", !var_core_value_sigE5B5), var_core_value_sigE5B5) {
    var_core_value_sig9385.removeAttribute("aria-hidden"), var_core_value_sig9385.style["removeProperty"]("display"), var_core_value_sig9385.style["removeProperty"]("pointer-events");
    return;
  }
  var_core_value_sig9385.setAttribute("aria-hidden", "true"), var_core_value_sig9385.style["display"] = "none", var_core_value_sig9385.style["pointerEvents"] = "none";
}
function Wt(var_core_value_sig7DCC) {
  let var_core_value_sig5C37 = document.createElement("div");
  return var_core_value_sig5C37.dataset["embedRuntimeBlocked"] = var_core_value_sig7DCC ?? "nested", var_core_value_sig5C37.style["cssText"] = ["box-sizing:border-box", "width:100%", "height:100%", "min-height:96px", "display:flex", "align-items:center", "justify-content:center", "padding:16px", "border:1px dashed rgba(99,102,106,.35)", "border-radius:8px", "background:rgba(99,102,106,.06)", "color:rgba(30,34,43,.64)", "font:13px/1.5\x20sans-serif", "text-align:center"].join(";"), var_core_value_sig5C37.textContent = var_core_value_sig7DCC === "cycle" ? "Nested\x20embed\x20cycle\x20is\x20not\x20supported." : "Nested embed is not supported.", var_core_value_sig5C37;
}
let Gt = class extends a.Disposable {
  constructor(var_core_value_sigC3C0, var_core_value_sig1F39, var_core_value_sig9256, var_core_value_sig98A0, var_core_value_sig3EBD, var_core_value_sig1AC3, var_core_value_sig66B8, var_core_value_sig4C7F, var_core_value_sig2543) {
    var var_core_value_sigB230;
    super(), this._univerInstanceService = var_core_value_sigC3C0, this._focusOwnerService = var_core_value_sig1F39, this._hostAdapterRegistry = var_core_value_sig9256, this._menuOverrideService = var_core_value_sig98A0, this._mountService = var_core_value_sig3EBD, this._blockRegistry = var_core_value_sig1AC3, this._floatingActiveService = var_core_value_sig66B8, this._contextService = var_core_value_sig4C7F, this._layoutService = var_core_value_sig2543, V(this, "_previousChildCurrentUnits", new Map());
    let var_core_value_sig407E = (var_core_value_sigB230 = this._univerInstanceService["focused$"]) == null ? undefined : var_core_value_sigB230.subscribe(var_core_value_sig011D => {
      this._restoreStage2ChildFocusWhenHostRefocuses(var_core_value_sig011D ?? null);
    });
    var_core_value_sig407E && this.disposeWithMe(var_core_value_sig407E);
  }
  activateTab(var_core_value_sig88CB) {
    var var_core_value_sigD615;
    this._assertResolvedChild(var_core_value_sig88CB), this._rememberPreviousChildCurrentUnit(var_core_value_sig88CB), this._hostAdapterRegistry["activateAnchor"]({
      embedId: var_core_value_sig88CB.embedId,
      hostUnitId: var_core_value_sig88CB.hostUnitId,
      hostType: var_core_value_sig88CB.hostType,
      entry: var_core_value_sig88CB.entry,
      hostAnchorId: var_core_value_sig88CB.hostAnchorId,
      descriptor: var_core_value_sig88CB
    }), this._mountService["activateSession"](var_core_value_sig88CB.embedId);
    let var_core_value_sigB708 = this._blockRegistry["get"](var_core_value_sig88CB.childType);
    return this._menuOverrideService["activate"](var_core_value_sig88CB, "tab-active", {
      layoutPolicy: var_core_value_sigB708 == null || (var_core_value_sigD615 = var_core_value_sigB708.layoutPolicy) == null ? undefined : var_core_value_sigD615.tab,
      allowPlaceholder: (var_core_value_sigB708 == null ? undefined : var_core_value_sigB708.hostChromeMode) === "title-only" || (var_core_value_sigB708 == null ? undefined : var_core_value_sigB708.hostHeaderMode) === "placeholder",
      allowHiddenRibbon: (var_core_value_sigB708 == null ? undefined : var_core_value_sigB708.hostChromeMode) === "none"
    });
  }
  activateFloating(var_core_value_sig60EF, var_core_value_sigA6FB, var_core_value_sigD6EA = {}) {
    this._assertResolvedChild(var_core_value_sig60EF);
    let var_core_value_sigA2D3 = this._floatingActiveService["getActive"](),
      var_core_value_sig727A = var_core_value_sigA6FB === "stage2" && (var_core_value_sigA2D3 == null ? undefined : var_core_value_sigA2D3.embedId) === var_core_value_sig60EF.embedId && var_core_value_sigA2D3.childUnitId === var_core_value_sig60EF.childUnitId && var_core_value_sigA2D3.stage === "stage2";
    (var_core_value_sigA2D3 == null ? undefined : var_core_value_sigA2D3.stage) === "stage2" && !var_core_value_sig727A && this._restorePreviousChildCurrentUnit(var_core_value_sigA2D3.embedId), var_core_value_sigA6FB === "stage2" && !var_core_value_sig727A && this._rememberPreviousChildCurrentUnit(var_core_value_sig60EF), this._focusOwnerService["setFocusOwner"]({
      hostUnitId: var_core_value_sig60EF.hostUnitId,
      embedId: var_core_value_sig60EF.embedId,
      childUnitId: var_core_value_sig60EF.childUnitId,
      childType: var_core_value_sig60EF.childType,
      reason: "pointer"
    }), this._mountService["activateSession"](var_core_value_sig60EF.embedId);
    let var_core_value_sig6AF1 = {
      hostUnitId: var_core_value_sig60EF.hostUnitId,
      embedId: var_core_value_sig60EF.embedId,
      childUnitId: var_core_value_sig60EF.childUnitId
    };
    var_core_value_sigA6FB ? this._floatingActiveService["activate"](var_core_value_sig6AF1, var_core_value_sigA6FB) : this._floatingActiveService["activate"](var_core_value_sig6AF1), this._menuOverrideService["clear"](), var_core_value_sigA6FB === "stage2" ? (this._focusUnit(var_core_value_sig60EF.childUnitId, var_core_value_sig60EF.childType, false, var_core_value_sig60EF.embedId), this._scheduleFloatingChildFocus(var_core_value_sig60EF)) : (this._univerInstanceService["setCurrentUnitForType"](var_core_value_sig60EF.hostUnitId), this._univerInstanceService["focusUnit"](var_core_value_sig60EF.hostUnitId));
  }
  focusFloatingRuntime(var_core_value_sig3F6A, var_core_value_sig23B4 = {}) {
    this.activateFloating(var_core_value_sig3F6A, "stage2", var_core_value_sig23B4);
  }
  activateFullscreen(var_core_value_sig350C, var_core_value_sig2335 = {}) {
    this._assertResolvedChild(var_core_value_sig350C), this._focusOwnerService["setFocusOwner"]({
      hostUnitId: var_core_value_sig350C.hostUnitId,
      embedId: var_core_value_sig350C.embedId,
      childUnitId: var_core_value_sig350C.childUnitId,
      childType: var_core_value_sig350C.childType,
      reason: "pointer"
    }), this._focusUnit(var_core_value_sig350C.childUnitId, var_core_value_sig350C.childType, var_core_value_sig2335.focusLayout ?? true, var_core_value_sig350C.embedId);
  }
  focusHostForPassiveRuntime(var_core_value_sig6233) {
    let var_core_value_sig4230 = this._mountService["releaseSessionFocus"](var_core_value_sig6233.embedId);
    this._menuOverrideService["clear"](var_core_value_sig6233.embedId), this._focusOwnerService["clearFocusOwner"](var_core_value_sig6233.embedId), var_core_value_sig4230 && this._previousChildCurrentUnits["has"](var_core_value_sig6233.embedId) && this._restorePreviousChildCurrentUnit(var_core_value_sig6233.embedId, var_core_value_sig6233.childType, var_core_value_sig6233.childUnitId), this._focusUnit(var_core_value_sig6233.hostUnitId, var_core_value_sig6233.hostType, false);
  }
  clearFullscreen(var_core_value_sig6136) {
    let var_core_value_sigD25E = this._focusOwnerService["getFocusOwner"]();
    var_core_value_sigD25E != null && var_core_value_sigD25E.embedId && var_core_value_sigD25E.embedId !== var_core_value_sig6136.embedId || (this._focusOwnerService["clearFocusOwner"](var_core_value_sig6136.embedId), this._univerInstanceService["setCurrentUnitForType"](var_core_value_sig6136.hostUnitId), this._univerInstanceService["focusUnit"](var_core_value_sig6136.hostUnitId), requestAnimationFrame(() => {
      this._focusOwnerService["getFocusOwner"]() || (this._univerInstanceService["focusUnit"](null), this._univerInstanceService["focusUnit"](var_core_value_sig6136.hostUnitId));
    }));
  }
  clearFloating(var_core_value_sigE1BC, var_core_value_sigCF44) {
    let var_core_value_sig3C97 = this._focusOwnerService["getFocusOwner"]();
    if (var_core_value_sigE1BC && var_core_value_sig3C97 != null && var_core_value_sig3C97.embedId && var_core_value_sig3C97.embedId !== var_core_value_sigE1BC) return;
    let var_core_value_sigA920 = this._floatingActiveService["getActive"]();
    if (var_core_value_sigE1BC && !var_core_value_sig3C97 && (var_core_value_sigA920 == null ? undefined : var_core_value_sigA920.embedId) !== var_core_value_sigE1BC && !var_core_value_sigCF44) return;
    let var_core_value_sigAD56 = var_core_value_sigCF44 ?? (var_core_value_sig3C97 == null ? undefined : var_core_value_sig3C97.hostUnitId) ?? (var_core_value_sigA920 == null ? undefined : var_core_value_sigA920.hostUnitId);
    this._floatingActiveService["clear"](var_core_value_sigE1BC), this._focusOwnerService["clearFocusOwner"](var_core_value_sigE1BC), this._menuOverrideService["clear"](var_core_value_sigE1BC), var_core_value_sigE1BC && this._restorePreviousChildCurrentUnit(var_core_value_sigE1BC), var_core_value_sigE1BC && this._mountService["deactivateFloatingSession"](var_core_value_sigE1BC), var_core_value_sigAD56 && (this._univerInstanceService["setCurrentUnitForType"](var_core_value_sigAD56), this._univerInstanceService["focusUnit"](var_core_value_sigAD56), requestAnimationFrame(() => {
      this._focusOwnerService["getFocusOwner"]() || (this._univerInstanceService["focusUnit"](null), this._univerInstanceService["focusUnit"](var_core_value_sigAD56));
    }));
  }
  clearTab(var_core_value_sig0454) {
    this._menuOverrideService["clear"](var_core_value_sig0454), this._focusOwnerService["clearFocusOwner"](var_core_value_sig0454);
    let var_core_value_sigEE1A = this._mountService["deactivateTabSessions"](var_core_value_sig0454);
    var_core_value_sigEE1A.forEach(var_core_value_sig6167 => this._restorePreviousChildCurrentUnit(var_core_value_sig6167.embedId, var_core_value_sig6167.childType, var_core_value_sig6167.childUnitId)), new Set(var_core_value_sigEE1A.map(var_core_value_sig65A1 => var_core_value_sig65A1.hostUnitId)).forEach(var_core_value_sig7F19 => {
      this._univerInstanceService["setCurrentUnitForType"](var_core_value_sig7F19), this._univerInstanceService["focusUnit"](var_core_value_sig7F19);
    });
  }
  _rememberPreviousChildCurrentUnit(var_core_value_sig4107) {
    if (this._previousChildCurrentUnits["has"](var_core_value_sig4107.embedId)) return;
    let var_core_value_sigF35C = var_core_value_sig4107.childType,
      var_core_value_sigEF8D = this._getCurrentUnitId(var_core_value_sigF35C);
    this._previousChildCurrentUnits["set"](var_core_value_sig4107.embedId, {
      childType: var_core_value_sigF35C,
      childUnitId: var_core_value_sig4107.childUnitId,
      unitId: var_core_value_sigEF8D && var_core_value_sigEF8D !== var_core_value_sig4107.childUnitId ? var_core_value_sigEF8D : undefined
    });
  }
  _restorePreviousChildCurrentUnit(var_core_value_sigE025, var_core_value_sigD549, var_core_value_sigC79E) {
    let var_core_value_sig9221 = this._previousChildCurrentUnits["get"](var_core_value_sigE025);
    this._previousChildCurrentUnits["delete"](var_core_value_sigE025);
    let var_core_value_sig0351 = var_core_value_sigD549 ?? (var_core_value_sig9221 == null ? undefined : var_core_value_sig9221.childType),
      var_core_value_sig4686 = var_core_value_sigC79E ?? (var_core_value_sig9221 == null ? undefined : var_core_value_sig9221.childUnitId);
    if (var_core_value_sig0351 == null || !var_core_value_sig4686) return;
    let var_core_value_sig8E1C = (var_core_value_sig9221 == null ? undefined : var_core_value_sig9221.childType) === var_core_value_sig0351 && var_core_value_sig9221.unitId && this._hasUnit(var_core_value_sig9221.unitId, var_core_value_sig0351) ? var_core_value_sig9221.unitId : this._findFallbackUnitId(var_core_value_sig0351, var_core_value_sig4686);
    var_core_value_sig8E1C && this._univerInstanceService["setCurrentUnitForType"](var_core_value_sig8E1C);
  }
  _getCurrentUnitId(var_core_value_sigD719) {
    var var_core_value_sig323C;
    let var_core_value_sig015D = this._univerInstanceService["getCurrentUnitOfType"];
    return var_core_value_sig015D == null || (var_core_value_sig323C = var_core_value_sig015D.call(this._univerInstanceService, var_core_value_sigD719)) == null ? undefined : var_core_value_sig323C.getUnitId();
  }
  _hasUnit(var_core_value_sigBF8B, var_core_value_sigF7CE) {
    let var_core_value_sig7CF1 = this._univerInstanceService["getUnit"];
    return !!(var_core_value_sig7CF1 != null && var_core_value_sig7CF1.call(this._univerInstanceService, var_core_value_sigBF8B, var_core_value_sigF7CE));
  }
  _findFallbackUnitId(var_core_value_sigA552, var_core_value_sigAE32) {
    var var_core_value_sig9B4D;
    let var_core_value_sig2704 = this._univerInstanceService["getAllUnitsForType"];
    return var_core_value_sig2704 == null || (var_core_value_sig9B4D = var_core_value_sig2704.call(this._univerInstanceService, var_core_value_sigA552)) == null || (var_core_value_sig9B4D = var_core_value_sig9B4D.find(var_core_value_sig7827 => var_core_value_sig7827.getUnitId() !== var_core_value_sigAE32)) == null ? undefined : var_core_value_sig9B4D.getUnitId();
  }
  _focusUnit(var_core_value_sigD0CC, var_core_value_sigF347, var_core_value_sig80C6 = true, var_core_value_sigEBFB) {
    let var_core_value_sigF3BF = this._univerInstanceService["getFocusedUnit"];
    if (!var_core_value_sigEBFB) {
      var var_core_value_sigAE58;
      (typeof var_core_value_sigF3BF != "function" || ((var_core_value_sigAE58 = var_core_value_sigF3BF.call(this._univerInstanceService)) == null ? undefined : var_core_value_sigAE58.getUnitId()) !== var_core_value_sigD0CC) && this._univerInstanceService["focusUnit"](var_core_value_sigD0CC), this._setCurrentUnitForType(var_core_value_sigD0CC, var_core_value_sigF347), this._contextService["setContextValue"](a.FOCUSING_UNIT, true), this._contextService["setContextValue"](a.FOCUSING_DOC, var_core_value_sigF347 === a.UniverInstanceType["UNIVER_DOC"]), this._contextService["setContextValue"](a.FOCUSING_SHEET, var_core_value_sigF347 === a.UniverInstanceType["UNIVER_SHEET"]), this._contextService["setContextValue"](a.FOCUSING_SLIDE, var_core_value_sigF347 === a.UniverInstanceType["UNIVER_SLIDE"]), this._contextService["setContextValue"](a.FOCUSING_BOARD, var_core_value_sigF347 === a.UniverInstanceType["UNIVER_BOARD"]);
    }
    var_core_value_sig80C6 && this._focusLayout();
  }
  _restoreStage2ChildFocusWhenHostRefocuses(var_core_value_sig8E13) {
    let var_core_value_sig3AAF = this._floatingActiveService["getActive"]();
    if ((var_core_value_sig3AAF == null ? undefined : var_core_value_sig3AAF.stage) !== "stage2" || var_core_value_sig8E13 !== var_core_value_sig3AAF.hostUnitId) return;
    let var_core_value_sig134E = this._focusOwnerService["getFocusOwner"]();
    (var_core_value_sig134E == null ? undefined : var_core_value_sig134E.embedId) === var_core_value_sig3AAF.embedId && var_core_value_sig134E.childUnitId === var_core_value_sig3AAF.childUnitId && var_core_value_sig134E.childType != null && this._focusUnit(var_core_value_sig134E.childUnitId, var_core_value_sig134E.childType, false, var_core_value_sig134E.embedId);
  }
  _scheduleFloatingChildFocus(var_core_value_sigA3C0) {
    let var_core_value_sig723F = () => {
      let var_core_value_sig652C = this._floatingActiveService["getActive"]();
      (var_core_value_sig652C == null ? undefined : var_core_value_sig652C.embedId) === var_core_value_sigA3C0.embedId && var_core_value_sig652C.childUnitId === var_core_value_sigA3C0.childUnitId && var_core_value_sig652C.stage === "stage2" && this._focusUnit(var_core_value_sigA3C0.childUnitId, var_core_value_sigA3C0.childType, false, var_core_value_sigA3C0.embedId);
    };
    typeof queueMicrotask == "function" && queueMicrotask(var_core_value_sig723F), requestAnimationFrame(var_core_value_sig723F);
  }
  _setCurrentUnitForType(var_core_value_sigD044, var_core_value_sig9797) {
    var var_core_value_sig8533;
    let var_core_value_sig57C5 = this._univerInstanceService["getCurrentUnitOfType"];
    (typeof var_core_value_sig57C5 != "function" || ((var_core_value_sig8533 = var_core_value_sig57C5.call(this._univerInstanceService, var_core_value_sig9797)) == null ? undefined : var_core_value_sig8533.getUnitId()) !== var_core_value_sigD044) && this._univerInstanceService["setCurrentUnitForType"](var_core_value_sigD044);
  }
  _focusLayout() {
    let var_core_value_sig0DE9 = () => this._layoutService["focus"]();
    var_core_value_sig0DE9(), typeof queueMicrotask == "function" && queueMicrotask(var_core_value_sig0DE9), requestAnimationFrame(var_core_value_sig0DE9);
  }
  _assertResolvedChild(var_core_value_sigB00D) {
    if (!var_core_value_sigB00D.childUnitId || var_core_value_sigB00D.childType == null) throw Error("EMBED_ACTIVATION_CHILD_NOT_RESOLVED");
  }
};
Gt = Z([X(0, a.IUniverInstanceService), X(1, (0, a.Inject)(t.EmbedFocusOwnerService)), X(2, (0, a.Inject)(t.EmbedHostAdapterRegistryService)), X(3, (0, a.Inject)(U)), X(4, (0, a.Inject)(Ht)), X(5, (0, a.Inject)(H)), X(6, (0, a.Inject)(ce)), X(7, a.IContextService), X(8, c.ILayoutService)], Gt);
function Kt(var_core_value_sigB657) {
  let {
    injector: var_core_value_sig6620,
    children: var_core_value_sigFA86,
    mountContainer: var_core_value_sigC7E1,
    embedId: var_core_value_sigEDC3
  } = var_core_value_sigB657;
  return (0, m.jsx)((0, d.useMemo)(() => (0, c.connectInjector)(qt, var_core_value_sig6620), [var_core_value_sig6620]), {
    mountContainer: var_core_value_sigC7E1,
    embedId: var_core_value_sigEDC3,
    children: var_core_value_sigFA86
  });
}
function qt(var_core_value_sigA965) {
  let {
      children: var_core_value_sigE243,
      mountContainer: var_core_value_sig2AA5,
      embedId: var_core_value_sig65F4,
      passThroughWheelGestures: var_core_value_sig74FC
    } = var_core_value_sigA965,
    var_core_value_sig107B = (0, c.useInjector)(),
    var_core_value_sig9C8C = (0, c.useDependency)(a.LocaleService),
    var_core_value_sig0141 = (0, d.useMemo)(() => var_core_value_sig107B.has(a.ThemeService) ? var_core_value_sig107B.get(a.ThemeService) : undefined, [var_core_value_sig107B]),
    var_core_value_sig687E = (0, c.useObservable)(() => var_core_value_sig9C8C.localeChanged$["pipe"]((0, f.map)(() => var_core_value_sig9C8C.getLocales())), var_core_value_sig9C8C.getLocales(), false, [var_core_value_sig9C8C]),
    var_core_value_sigCDBE1 = (0, c.useObservable)(() => var_core_value_sig9C8C.direction$, var_core_value_sig9C8C.getDirection(), false, [var_core_value_sig9C8C]),
    var_core_value_sig07AB = Qt(var_core_value_sig0141),
    var_core_value_sigD6F3 = (0, d.useRef)(null),
    var_core_value_sig5CA6 = (0, d.useMemo)(() => var_core_value_sig2AA5 !== undefined || typeof document > "u" ? null : document.createElement("div"), [var_core_value_sig2AA5]),
    var_core_value_sigFA26 = var_core_value_sig2AA5 === undefined ? var_core_value_sig5CA6 : var_core_value_sig2AA5;
  return (0, d.useEffect)(() => {
    if (var_core_value_sig5CA6) return document.body["appendChild"](var_core_value_sig5CA6), () => {
      document.body["removeChild"](var_core_value_sig5CA6);
    };
  }, [var_core_value_sig5CA6]), (0, d.useEffect)(() => {
    let var_core_value_sig57C8 = var_core_value_sigFA26;
    var_core_value_sig57C8 && var_core_value_sig57C8.setAttribute("dir", var_core_value_sigCDBE1);
  }, [var_core_value_sigCDBE1, var_core_value_sigFA26]), (0, d.useEffect)(() => {
    if (!(!var_core_value_sigFA26 || var_core_value_sig74FC)) return (0, c.preventBrowserZoomInContainers)([var_core_value_sigFA26]);
  }, [var_core_value_sig74FC, var_core_value_sigFA26]), (0, d.useEffect)(() => {
    let var_core_value_sigC27D = var_core_value_sigFA26;
    if (!var_core_value_sigC27D || !var_core_value_sig65F4) return;
    let var_core_value_sig7B95 = var_core_value_sigC27D.getAttribute(q);
    return var_core_value_sigC27D.setAttribute(q, var_core_value_sig65F4), () => {
      if (var_core_value_sig7B95 == null) {
        var_core_value_sigC27D.removeAttribute(q);
        return;
      }
      var_core_value_sigC27D.setAttribute(q, var_core_value_sig7B95);
    };
  }, [var_core_value_sig65F4, var_core_value_sigFA26]), (0, m.jsx)(l.ConfigProvider, {
    locale: var_core_value_sig687E == null ? undefined : var_core_value_sig687E.design,
    direction: var_core_value_sigCDBE1,
    mountContainer: var_core_value_sigFA26,
    children: (0, m.jsx)("div", {
      ref: var_core_value_sigD6F3,
      className: (0, l.clsx)("univer-contents", {
        "univer-dark": var_core_value_sig07AB
      }),
      "data-embed-runtime-provider": "true",
      onPointerUpCapture: var_core_value_sig7D59 => {
        let var_core_value_sig5863 = var_core_value_sigD6F3.current,
          var_core_value_sig5BE7 = var_core_value_sig7D59.target;
        if (!var_core_value_sig65F4 || !var_core_value_sig5863) return;
        let var_core_value_sigC74A = () => Jt(var_core_value_sig65F4, var_core_value_sig5863, var_core_value_sig5BE7);
        typeof queueMicrotask == "function" ? queueMicrotask(var_core_value_sigC74A) : Promise.resolve().then(var_core_value_sigC74A);
      },
      children: var_core_value_sigE243
    })
  });
}
function Jt(var_core_value_sig3D8F, var_core_value_sig9BED, var_core_value_sig5349) {
  let var_core_value_sig8232 = var_core_value_sig9BED.ownerDocument["activeElement"];
  if (Xt(var_core_value_sig8232, var_core_value_sig3D8F)) return;
  let var_core_value_sig38F6 = var_core_value_sig5349 instanceof HTMLElement && var_core_value_sig9BED.contains(var_core_value_sig5349) ? var_core_value_sig5349 : null,
    var_core_value_sigBE37 = Zt(var_core_value_sig38F6) ? var_core_value_sig38F6 : var_core_value_sig9BED.querySelector("canvas[tabindex],\x20[tabindex]:not([tabindex=\x22-1\x22])");
  var_core_value_sigBE37 == null || var_core_value_sigBE37.focus({
    preventScroll: true
  });
}
function Yt(var_core_value_sigA2BF, var_core_value_sig32BA) {
  Xt(var_core_value_sig32BA.ownerDocument["activeElement"], var_core_value_sigA2BF) || (var_core_value_sig32BA.hasAttribute("tabindex") || (var_core_value_sig32BA.tabIndex = -1), var_core_value_sig32BA.focus({
    preventScroll: true
  }));
}
function Xt(var_core_value_sig5CFD, var_core_value_sig3EB3) {
  let var_core_value_sig5C7C1 = var_core_value_sig5CFD == null ? undefined : var_core_value_sig5CFD.closest("[" + q + "]");
  return (var_core_value_sig5C7C1 == null ? undefined : var_core_value_sig5C7C1.getAttribute(q)) === var_core_value_sig3EB3;
}
function Zt(var_core_value_sig89EE) {
  return !!var_core_value_sig89EE && !var_core_value_sig89EE.hasAttribute("disabled") && var_core_value_sig89EE.tabIndex >= 0;
}
function Qt(var_core_value_sigCE7B) {
  return (0, d.useSyncExternalStore)(var_core_value_sig8F6A => {
    if (!var_core_value_sigCE7B) return () => {};
    let var_core_value_sig46EA = var_core_value_sigCE7B.darkMode$["subscribe"](() => var_core_value_sig8F6A());
    return () => var_core_value_sig46EA.unsubscribe();
  }, () => (var_core_value_sigCE7B == null ? undefined : var_core_value_sigCE7B.darkMode) ?? false, () => false);
}
const $t = new WeakMap(),
  en = new WeakMap(),
  tn = new WeakMap();
function nn(var_core_value_sigBFA9) {
  let var_core_value_sig6DF71 = $t.get(var_core_value_sigBFA9);
  if (var_core_value_sig6DF71) return tn.set(var_core_value_sig6DF71, (tn.get(var_core_value_sig6DF71) ?? 0) + 1), var_core_value_sig6DF71;
  let var_core_value_sig00CB1 = {
    render: var_core_value_sig626C => (0, l.render)(var_core_value_sig626C, var_core_value_sigBFA9)
  };
  return $t.set(var_core_value_sigBFA9, var_core_value_sig00CB1), en.set(var_core_value_sig00CB1, var_core_value_sigBFA9), tn.set(var_core_value_sig00CB1, 0), var_core_value_sig00CB1;
}
function rn(var_core_value_sig6F31) {
  let var_core_value_sigFBED = en.get(var_core_value_sig6F31),
    var_core_value_sigF447 = tn.get(var_core_value_sig6F31) ?? 0;
  globalThis.setTimeout(() => {
    var_core_value_sigFBED && $t.get(var_core_value_sigFBED) !== var_core_value_sig6F31 || (tn.get(var_core_value_sig6F31) ?? 0) === var_core_value_sigF447 && (var_core_value_sigFBED && ($t.delete(var_core_value_sigFBED), en.delete(var_core_value_sig6F31)), tn.delete(var_core_value_sig6F31), var_core_value_sigFBED && (0, l.unmount)(var_core_value_sigFBED));
  }, 0);
}
function an(var_core_value_sigF37C) {
  let {
    container: var_core_value_sigE2E6,
    portalContainer: var_core_value_sig8FAB,
    injector: var_core_value_sig3524,
    childType: var_core_value_sigEFDB,
    childUnitId: var_core_value_sigEFD1,
    embedId: var_core_value_sigD10D,
    menuSchema: var_core_value_sigB8F4,
    menuTitlePrefix: var_core_value_sig79CD,
    activeRibbonTab: var_core_value_sig629F,
    headerMenu: var_core_value_sig7290 = false,
    toolbarOnly: var_core_value_sig7591,
    ribbonType: var_core_value_sig607E = "classic",
    ribbonHeaderClassName: var_core_value_sig76A8,
    scopedActionServiceTokens: var_core_value_sigB33E
  } = var_core_value_sigF37C;
  if (var_core_value_sigB8F4 != null && typeof var_core_value_sigB8F4 != "object") return;
  let var_core_value_sig5B4A = on(var_core_value_sig3524, {
      childType: var_core_value_sigEFDB,
      childUnitId: var_core_value_sigEFD1,
      embedId: var_core_value_sigD10D,
      menuSchema: var_core_value_sigB8F4,
      menuTitlePrefix: var_core_value_sig79CD,
      activeRibbonTab: var_core_value_sig629F,
      scopedActionServiceTokens: var_core_value_sigB33E
    }),
    var_core_value_sigEF9A = nn(var_core_value_sigE2E6);
  return var_core_value_sigEF9A.render((0, d.createElement)(Kt, {
    injector: var_core_value_sig5B4A.injector,
    mountContainer: var_core_value_sig8FAB ?? var_core_value_sigE2E6,
    embedId: var_core_value_sigD10D
  }, (0, d.createElement)(c.Ribbon, {
    ribbonType: var_core_value_sig607E,
    headerMenu: var_core_value_sig7290,
    toolbarOnly: var_core_value_sig7591,
    headerClassName: var_core_value_sig76A8
  }))), (0, a.toDisposable)(() => {
    rn(var_core_value_sigEF9A), var_core_value_sig5B4A.disposable["dispose"]();
  });
}
function on(var_core_value_sigB040, var_core_value_sig1344) {
  let {
      childType: var_core_value_sig01B7,
      childUnitId: var_core_value_sig5392,
      embedId: var_core_value_sig2473,
      menuSchema: var_core_value_sig4FB1,
      menuTitlePrefix: var_core_value_sig3A0E,
      activeRibbonTab: var_core_value_sig7ED7,
      scopedActionServiceTokens: var_core_value_sigDF9C
    } = var_core_value_sig1344,
    var_core_value_sigCEE6 = var_core_value_sigB040.get(a.IUniverInstanceService),
    var_core_value_sig3CB8 = ln(var_core_value_sigB040).get(a.IUniverInstanceService),
    var_core_value_sig3EF5 = mn(var_core_value_sigCEE6, var_core_value_sig01B7, var_core_value_sig5392),
    var_core_value_sigD0FA = new WeakMap(),
    var_core_value_sig7701,
    var_core_value_sig548B = vn(var_core_value_sigB040.get(a.ICommandService), var_core_value_sig3CB8, var_core_value_sig01B7, var_core_value_sig5392, var_core_value_sig2473, () => var_core_value_sig7701),
    var_core_value_sig7D37 = var_core_value_sig5392 && var_core_value_sigB040.has(a.IContextService) ? hn(var_core_value_sigB040.get(a.IContextService), var_core_value_sig01B7) : undefined,
    var_core_value_sig781D = new Map([[a.IUniverInstanceService, var_core_value_sig3EF5], [a.ICommandService, var_core_value_sig548B], ...(var_core_value_sig7D37 ? [[a.IContextService, var_core_value_sig7D37]] : [])]);
  var_core_value_sigB040.has(a.IConfigService) && var_core_value_sig781D.set(a.IConfigService, Re(var_core_value_sigB040.get(a.IConfigService))), new Set(var_core_value_sigDF9C ?? []).forEach(var_core_value_sig9077 => {
    var_core_value_sig5392 && var_core_value_sigB040.has(var_core_value_sig9077) && var_core_value_sig781D.set(var_core_value_sig9077, bn(var_core_value_sigB040.get(var_core_value_sig9077), var_core_value_sig3CB8, var_core_value_sig01B7, var_core_value_sig5392, var_core_value_sig2473, () => var_core_value_sig7701, var_core_value_sigD0FA));
  }), var_core_value_sig7701 = $(var_core_value_sigB040, var_core_value_sig781D);
  let {
      menuManager: var_core_value_sig6DD6,
      disposable: var_core_value_sig824C
    } = sn(var_core_value_sigB040, var_core_value_sig7701, var_core_value_sig4FB1, var_core_value_sig3A0E),
    var_core_value_sig8C7D = new c["DesktopRibbonService"](var_core_value_sig6DD6, var_core_value_sig3EF5);
  var_core_value_sig7ED7 && var_core_value_sig8C7D.setActivatedTab(var_core_value_sig7ED7);
  let var_core_value_sig46B1 = var_core_value_sig3A0E ? un(var_core_value_sig8C7D, var_core_value_sig3A0E, var_core_value_sigB040) : var_core_value_sig8C7D;
  var_core_value_sig7701.add([c.IMenuManagerService, {
    useValue: var_core_value_sig6DD6
  }]), var_core_value_sig7701.add([c.IRibbonService, {
    useValue: var_core_value_sig46B1
  }]);
  let var_core_value_sigC5AE = cn(var_core_value_sigB040, var_core_value_sig8C7D, var_core_value_sig6DD6, {
    embedId: var_core_value_sig2473,
    childUnitId: var_core_value_sig5392
  });
  return {
    injector: var_core_value_sig7701,
    ribbonService: var_core_value_sig46B1,
    disposable: (0, a.toDisposable)(() => {
      var_core_value_sigC5AE == null || var_core_value_sigC5AE.dispose(), var_core_value_sig8C7D.dispose(), var_core_value_sig824C == null || var_core_value_sig824C.dispose(), var_core_value_sig7701.dispose();
    })
  };
}
function sn(var_core_value_sigA2DD, var_core_value_sigB95A, var_core_value_sig7092, var_core_value_sig537D) {
  if (var_core_value_sig7092 && typeof var_core_value_sig7092 == "object") {
    let var_core_value_sigC76C = new c["MenuManagerService"](var_core_value_sigB95A, var_core_value_sigB95A.get(a.IConfigService));
    return var_core_value_sigC76C.mergeMenu(fn(var_core_value_sig7092, var_core_value_sig537D, var_core_value_sigA2DD)), {
      menuManager: at(var_core_value_sigC76C),
      disposable: var_core_value_sigC76C
    };
  }
  let var_core_value_sig300A = var_core_value_sigA2DD.get(c.IMenuManagerService),
    var_core_value_sig014D = var_core_value_sig300A.createScoped;
  return {
    menuManager: at(typeof var_core_value_sig014D == "function" ? var_core_value_sig014D.call(var_core_value_sig300A, var_core_value_sigB95A) : var_core_value_sig300A)
  };
}
function cn(var_core_value_sig2768, var_core_value_sigA179, var_core_value_sig93D0, var_core_value_sig68061) {
  let {
    embedId: var_core_value_sig6D2F,
    childUnitId: var_core_value_sig7367
  } = var_core_value_sig68061;
  if (!var_core_value_sig6D2F || !var_core_value_sig7367) return;
  let var_core_value_sigE7CE = ln(var_core_value_sig2768);
  if (!var_core_value_sigE7CE.has(c.IRibbonService) || !var_core_value_sigE7CE.has(K)) return;
  let var_core_value_sigA430 = var_core_value_sigE7CE.get(c.IRibbonService),
    var_core_value_sigA07B = var_core_value_sigE7CE.get(K),
    var_core_value_sigE9BA = new Set(),
    var_core_value_sig6083 = (0, f.combineLatest)([var_core_value_sigA430.ribbon$, var_core_value_sigA430.activatedTab$, var_core_value_sig93D0.menuChanged$["pipe"]((0, f.startWith)(undefined)), (0, f.merge)(var_core_value_sigA07B.runtimeFocusChanged$, var_core_value_sigA07B.runtimeSessionChanged$).pipe((0, f.startWith)(undefined))]).subscribe(([var_core_value_sigB23A, var_core_value_sigBA66]) => {
      let var_core_value_sig3DF0 = var_core_value_sigA07B.resolveActiveChildSessionRuntimeScope(),
        var_core_value_sig0512 = (var_core_value_sig3DF0 == null ? undefined : var_core_value_sig3DF0.embedId) === var_core_value_sig6D2F && var_core_value_sig3DF0.childUnitId === var_core_value_sig7367 && (var_core_value_sig3DF0.sessionMode === "child-tab" || var_core_value_sig3DF0.sessionMode === "child-fullscreen"),
        var_core_value_sig4B2B = new Set(var_core_value_sig93D0.getMenuByPositionKey(c.MenuManagerPosition["RIBBON"]).filter(({
          contextual: var_core_value_sig7E32
        }) => var_core_value_sig7E32).map(({
          key: var_core_value_sig4C07
        }) => var_core_value_sig4C07)),
        var_core_value_sigDF88 = var_core_value_sig0512 ? new Set(var_core_value_sigB23A.filter(({
          contextual: var_core_value_sig79AB,
          key: var_core_value_sig8E74
        }) => var_core_value_sig79AB && var_core_value_sig4B2B.has(var_core_value_sig8E74)).map(({
          key: var_core_value_sig104C
        }) => var_core_value_sig104C)) : new Set();
      var_core_value_sigE9BA.forEach(var_core_value_sig841D => {
        var_core_value_sigDF88.has(var_core_value_sig841D) || var_core_value_sigA179.hideContextualTab(var_core_value_sig841D);
      }), var_core_value_sigDF88.forEach(var_core_value_sig90CB => {
        var_core_value_sigE9BA.has(var_core_value_sig90CB) || var_core_value_sigA179.showContextualTab(var_core_value_sig90CB);
      }), var_core_value_sigDF88.has(var_core_value_sigBA66) && var_core_value_sigA179.setActivatedTab(var_core_value_sigBA66), var_core_value_sigE9BA = var_core_value_sigDF88;
    });
  return (0, a.toDisposable)(() => {
    var_core_value_sig6083.unsubscribe(), var_core_value_sigE9BA.forEach(var_core_value_sigBDF5 => var_core_value_sigA179.hideContextualTab(var_core_value_sigBDF5)), var_core_value_sigE9BA.clear();
  });
}
function ln(var_core_value_sig28DE) {
  return var_core_value_sig28DE.__embedSharedRootInjector ?? var_core_value_sig28DE;
}
function un(var_core_value_sigE1B1, var_core_value_sig5E8D, var_core_value_sig7694) {
  let var_core_value_sigB4EC;
  try {
    var_core_value_sigB4EC = var_core_value_sig7694.get(a.LocaleService);
  } catch {
    var_core_value_sigB4EC = undefined;
  }
  return {
    ribbon$: var_core_value_sigE1B1.ribbon$["pipe"]((0, f.map)(var_core_value_sigDB93 => var_core_value_sigDB93.map(var_core_value_sigACC6 => dn(var_core_value_sigACC6, var_core_value_sig5E8D, var_core_value_sigB4EC)))),
    activatedTab$: var_core_value_sigE1B1.activatedTab$,
    collapsedIds$: var_core_value_sigE1B1.collapsedIds$,
    fakeToolbarVisible$: var_core_value_sigE1B1.fakeToolbarVisible$,
    setActivatedTab: var_core_value_sig67CF => var_core_value_sigE1B1.setActivatedTab(var_core_value_sig67CF),
    showContextualTab: (var_core_value_sigCA96, var_core_value_sig6C5E) => var_core_value_sigE1B1.showContextualTab(var_core_value_sigCA96, var_core_value_sig6C5E),
    hideContextualTab: var_core_value_sig4997 => var_core_value_sigE1B1.hideContextualTab(var_core_value_sig4997),
    hideAllContextualTabs: () => var_core_value_sigE1B1.hideAllContextualTabs(),
    setCollapsedIds: var_core_value_sig72901 => var_core_value_sigE1B1.setCollapsedIds(var_core_value_sig72901),
    setFakeToolbarVisible: var_core_value_sigE835 => var_core_value_sigE1B1.setFakeToolbarVisible(var_core_value_sigE835)
  };
}
function dn(var_core_value_sig39E4, var_core_value_sig1199, var_core_value_sigC2D2) {
  let var_core_value_sig976B = var_core_value_sig39E4.title || var_core_value_sig39E4.key,
    var_core_value_sig7EC2 = var_core_value_sigC2D2 ? var_core_value_sigC2D2.t(var_core_value_sig976B) : var_core_value_sig976B;
  return {
    ...var_core_value_sig39E4,
    title: var_core_value_sig1199 + " - " + var_core_value_sig7EC2
  };
}
function fn(var_core_value_sig3D7B, var_core_value_sig5D5E, var_core_value_sigAF62) {
  if (!var_core_value_sig5D5E || !var_core_value_sig3D7B || typeof var_core_value_sig3D7B != "object") return var_core_value_sig3D7B;
  let var_core_value_sigA394 = pn(var_core_value_sig3D7B),
    var_core_value_sig94AF = var_core_value_sigA394[c.MenuManagerPosition["RIBBON"]];
  if (!var_core_value_sig94AF || typeof var_core_value_sig94AF != "object") return var_core_value_sigA394;
  let var_core_value_sigFEB4;
  try {
    var_core_value_sigFEB4 = var_core_value_sigAF62.get(a.LocaleService);
  } catch {
    var_core_value_sigFEB4 = undefined;
  }
  return Object.values(var_core_value_sig94AF).forEach(var_core_value_sig4644 => {
    if (!var_core_value_sig4644 || typeof var_core_value_sig4644 != "object") return;
    let var_core_value_sig9DED = var_core_value_sig4644,
      var_core_value_sig7DE6 = var_core_value_sig9DED.title;
    var_core_value_sig7DE6 && (var_core_value_sig9DED.title = var_core_value_sig5D5E + " - " + (var_core_value_sigFEB4 ? var_core_value_sigFEB4.t(var_core_value_sig7DE6) : var_core_value_sig7DE6));
  }), var_core_value_sigA394;
}
function pn(var_core_value_sigFA83) {
  return !var_core_value_sigFA83 || typeof var_core_value_sigFA83 != "object" ? var_core_value_sigFA83 : Array.isArray(var_core_value_sigFA83) ? var_core_value_sigFA83.map(var_core_value_sig120E => pn(var_core_value_sig120E)) : Object.fromEntries(Object.entries(var_core_value_sigFA83).map(([var_core_value_sigD79B, var_core_value_sig92A3]) => [var_core_value_sigD79B, pn(var_core_value_sig92A3)]));
}
function mn(var_core_value_sigA3B2, var_core_value_sig63A2, var_core_value_sig1F1F) {
  let var_core_value_sig32EC = () => var_core_value_sig1F1F ? var_core_value_sigA3B2.getUnit(var_core_value_sig1F1F, var_core_value_sig63A2) : null,
    var_core_value_sig37FF = var_core_value_sig1F1F ? (0, f.merge)((0, f.of)(var_core_value_sig1F1F), var_core_value_sigA3B2.getTypeOfUnitAdded$(var_core_value_sig63A2).pipe((0, f.map)(() => var_core_value_sig1F1F)), var_core_value_sigA3B2.getTypeOfUnitDisposed$(var_core_value_sig63A2).pipe((0, f.map)(() => var_core_value_sig1F1F))) : var_core_value_sigA3B2.focused$;
  return {
    unitAdded$: var_core_value_sigA3B2.unitAdded$,
    getTypeOfUnitAdded$: (...var_core_value_sig8911) => var_core_value_sigA3B2.getTypeOfUnitAdded$(...var_core_value_sig8911),
    __addUnit: (...var_core_value_sig8D1B) => var_core_value_sigA3B2.__addUnit(...var_core_value_sig8D1B),
    unitDisposed$: var_core_value_sigA3B2.unitDisposed$,
    getTypeOfUnitDisposed$: (...var_core_value_sigA915) => var_core_value_sigA3B2.getTypeOfUnitDisposed$(...var_core_value_sigA915),
    focused$: var_core_value_sig37FF,
    get focused() {
      return var_core_value_sig32EC() ?? var_core_value_sigA3B2.getFocusedUnit();
    },
    focusUnit: (...var_core_value_sigE1F7) => var_core_value_sigA3B2.focusUnit(...var_core_value_sigE1F7),
    getFocusedUnit: () => var_core_value_sig32EC() ?? var_core_value_sigA3B2.getFocusedUnit(),
    getCurrentUnitOfType: var_core_value_sig4BE7 => var_core_value_sig4BE7 === var_core_value_sig63A2 && var_core_value_sig1F1F ? var_core_value_sig32EC() : var_core_value_sigA3B2.getCurrentUnitOfType(var_core_value_sig4BE7),
    setCurrentUnitForType: (...var_core_value_sigF9FF) => var_core_value_sigA3B2.setCurrentUnitForType(...var_core_value_sigF9FF),
    getCurrentTypeOfUnit$: var_core_value_sigE0E3 => var_core_value_sigE0E3 !== var_core_value_sig63A2 || !var_core_value_sig1F1F ? var_core_value_sigA3B2.getCurrentTypeOfUnit$(var_core_value_sigE0E3) : (0, f.merge)((0, f.of)(undefined), var_core_value_sigA3B2.getTypeOfUnitAdded$(var_core_value_sig63A2), var_core_value_sigA3B2.getTypeOfUnitDisposed$(var_core_value_sig63A2)).pipe((0, f.map)(() => var_core_value_sig32EC())),
    createUnit: (...var_core_value_sig3AB3) => var_core_value_sigA3B2.createUnit(...var_core_value_sig3AB3),
    getUnitCreateOptions: (...var_core_value_sig816E) => var_core_value_sigA3B2.getUnitCreateOptions(...var_core_value_sig816E),
    disposeUnit: (...var_core_value_sigE6F3) => var_core_value_sigA3B2.disposeUnit(...var_core_value_sigE6F3),
    registerCtorForType: (...var_core_value_sig3EE1) => var_core_value_sigA3B2.registerCtorForType(...var_core_value_sig3EE1),
    getUnit: (...var_core_value_sig9673) => var_core_value_sigA3B2.getUnit(...var_core_value_sig9673),
    getAllUnitsForType: (...var_core_value_sig4917) => var_core_value_sigA3B2.getAllUnitsForType(...var_core_value_sig4917),
    getUnitType: (...var_core_value_sig3BE6) => var_core_value_sigA3B2.getUnitType(...var_core_value_sig3BE6)
  };
}
function hn(var_core_value_sigF340, var_core_value_sig6001) {
  return {
    contextChanged$: var_core_value_sigF340.contextChanged$,
    getContextValue: var_core_value_sigA1C9 => gn(var_core_value_sigA1C9, var_core_value_sig6001) ?? var_core_value_sigF340.getContextValue(var_core_value_sigA1C9),
    setContextValue: (var_core_value_sig77D6, var_core_value_sigE3CE) => var_core_value_sigF340.setContextValue(var_core_value_sig77D6, var_core_value_sigE3CE),
    subscribeContextValue$: var_core_value_sig219B => {
      let var_core_value_sig4493 = gn(var_core_value_sig219B, var_core_value_sig6001);
      return var_core_value_sig4493 == null ? var_core_value_sigF340.subscribeContextValue$(var_core_value_sig219B) : (0, f.of)(var_core_value_sig4493);
    }
  };
}
function gn(var_core_value_sig27FF, var_core_value_sigAF69) {
  if (var_core_value_sig27FF === a.FOCUSING_UNIT) return true;
  if (var_core_value_sig27FF === a.FOCUSING_SHEET || var_core_value_sig27FF === a.FOCUSING_DOC || var_core_value_sig27FF === a.FOCUSING_SLIDE) return var_core_value_sig27FF === _n(var_core_value_sigAF69);
}
function _n(var_core_value_sig2FA9) {
  if (var_core_value_sig2FA9 === a.UniverInstanceType["UNIVER_SHEET"]) return a.FOCUSING_SHEET;
  if (var_core_value_sig2FA9 === a.UniverInstanceType["UNIVER_DOC"]) return a.FOCUSING_DOC;
  if (var_core_value_sig2FA9 === a.UniverInstanceType["UNIVER_SLIDE"]) return a.FOCUSING_SLIDE;
}
function vn(var_core_value_sigE580, var_core_value_sig6B3D, var_core_value_sig6642, var_core_value_sig93C3, var_core_value_sigB034, var_core_value_sig0F42) {
  return var_core_value_sig93C3 ? {
    disposed: () => var_core_value_sigE580.disposed(),
    hasCommand: var_core_value_sig8B9C => var_core_value_sigE580.hasCommand(var_core_value_sig8B9C),
    registerCommand: (...var_core_value_sigA35B) => var_core_value_sigE580.registerCommand(...var_core_value_sigA35B),
    unregisterCommand: var_core_value_sig82DD => var_core_value_sigE580.unregisterCommand(var_core_value_sig82DD),
    registerMultipleCommand: (...var_core_value_sigAAC7) => var_core_value_sigE580.registerMultipleCommand(...var_core_value_sigAAC7),
    executeCommand: async (...var_core_value_sig1999) => {
      let var_core_value_sigFB45 = var_core_value_sig6B3D.getCurrentUnitOfType(var_core_value_sig6642);
      try {
        return var_core_value_sig6B3D.setCurrentUnitForType(var_core_value_sig93C3), await var_core_value_sigE580.executeCommand(var_core_value_sig1999[0], var_core_value_sig1999[1], yn(var_core_value_sig6642, var_core_value_sig93C3, var_core_value_sig1999[2]));
      } finally {
        wn(var_core_value_sig6B3D, var_core_value_sig93C3, var_core_value_sigFB45, var_core_value_sigB034, var_core_value_sig0F42);
      }
    },
    syncExecuteCommand: (...var_core_value_sigB86C) => {
      let var_core_value_sigD892 = var_core_value_sig6B3D.getCurrentUnitOfType(var_core_value_sig6642);
      try {
        return var_core_value_sig6B3D.setCurrentUnitForType(var_core_value_sig93C3), var_core_value_sigE580.syncExecuteCommand(var_core_value_sigB86C[0], var_core_value_sigB86C[1], yn(var_core_value_sig6642, var_core_value_sig93C3, var_core_value_sigB86C[2]));
      } finally {
        wn(var_core_value_sig6B3D, var_core_value_sig93C3, var_core_value_sigD892, var_core_value_sigB034, var_core_value_sig0F42);
      }
    },
    onCommandExecuted: (...var_core_value_sig6086) => var_core_value_sigE580.onCommandExecuted(...var_core_value_sig6086),
    beforeCommandExecuted: (...var_core_value_sigAED2) => var_core_value_sigE580.beforeCommandExecuted(...var_core_value_sigAED2),
    onMutationExecutedForCollab: (...var_core_value_sig3516) => var_core_value_sigE580.onMutationExecutedForCollab(...var_core_value_sig3516)
  } : var_core_value_sigE580;
}
function yn(var_core_value_sig147A1, var_core_value_sig6C47, var_core_value_sig8090) {
  return var_core_value_sig147A1 === a.UniverInstanceType["UNIVER_BOARD"] ? {
    ...var_core_value_sig8090,
    unitId: var_core_value_sig6C47
  } : var_core_value_sig8090;
}
function bn(var_core_value_sigFBF01, var_core_value_sigE8F0, var_core_value_sig7A47, var_core_value_sigE6A1, var_core_value_sig35B7, var_core_value_sig9D64, var_core_value_sig29E6) {
  if (typeof var_core_value_sigFBF01 != "object" && typeof var_core_value_sigFBF01 != "function" || var_core_value_sigFBF01 == null) return var_core_value_sigFBF01;
  let var_core_value_sig7E15 = var_core_value_sigFBF01,
    var_core_value_sig2493 = var_core_value_sig29E6 == null ? undefined : var_core_value_sig29E6.get(var_core_value_sig7E15);
  if (var_core_value_sig2493) return var_core_value_sig2493;
  let var_core_value_sig731D = {
    ...var_core_value_sig7E15
  };
  return xn(var_core_value_sig7E15, var_core_value_sig731D, var_core_value_sigE8F0, var_core_value_sig7A47, var_core_value_sigE6A1, var_core_value_sig35B7, var_core_value_sig9D64), var_core_value_sig29E6 == null || var_core_value_sig29E6.set(var_core_value_sig7E15, var_core_value_sig731D), var_core_value_sig731D;
}
function xn(var_core_value_sig2F24, var_core_value_sigDA3A, var_core_value_sig4CAF, var_core_value_sigBCDC, var_core_value_sig3FB8, var_core_value_sig2CB0, var_core_value_sig5762) {
  let var_core_value_sigFE00 = var_core_value_sigCDCD => {
    if (var_core_value_sigCDCD === "constructor") return;
    let var_core_value_sig206A = var_core_value_sig2F24[var_core_value_sigCDCD];
    if (typeof var_core_value_sig206A != "function") return;
    let var_core_value_sig1EFE = var_core_value_sigDA3A;
    var_core_value_sig1EFE[var_core_value_sigCDCD] = (...var_core_value_sig1614) => Sn(var_core_value_sig4CAF, var_core_value_sigBCDC, var_core_value_sig3FB8, var_core_value_sig2CB0, var_core_value_sig5762, () => var_core_value_sig206A.apply(var_core_value_sig2F24, var_core_value_sig1614));
  };
  Object.keys(var_core_value_sig2F24).forEach(var_core_value_sigFE00);
  let var_core_value_sigB03D = Object.getPrototypeOf(var_core_value_sig2F24);
  var_core_value_sigB03D && var_core_value_sigB03D !== Object.prototype && Object.getOwnPropertyNames(var_core_value_sigB03D).forEach(var_core_value_sigFE00);
}
function Sn(var_core_value_sig10B9, var_core_value_sigB25D, var_core_value_sig7890, var_core_value_sig06EC, var_core_value_sig2A4A, var_core_value_sig35B2) {
  let var_core_value_sig4B92 = var_core_value_sig10B9.getCurrentUnitOfType(var_core_value_sigB25D),
    var_core_value_sig8A40;
  try {
    var_core_value_sig10B9.setCurrentUnitForType(var_core_value_sig7890), var_core_value_sig8A40 = var_core_value_sig35B2();
  } catch (var_core_value_sig9904) {
    throw wn(var_core_value_sig10B9, var_core_value_sig7890, var_core_value_sig4B92, var_core_value_sig06EC, var_core_value_sig2A4A), var_core_value_sig9904;
  }
  return Cn(var_core_value_sig8A40) ? var_core_value_sig8A40.finally(() => {
    wn(var_core_value_sig10B9, var_core_value_sig7890, var_core_value_sig4B92, var_core_value_sig06EC, var_core_value_sig2A4A);
  }) : (wn(var_core_value_sig10B9, var_core_value_sig7890, var_core_value_sig4B92, var_core_value_sig06EC, var_core_value_sig2A4A), var_core_value_sig8A40);
}
function Cn(var_core_value_sig436D) {
  return !!(var_core_value_sig436D && typeof var_core_value_sig436D.finally == "function");
}
function wn(var_core_value_sig591B, var_core_value_sig4FBC, var_core_value_sig71F0, var_core_value_sig0812, var_core_value_sigCF891) {
  if (Tn(var_core_value_sig0812, var_core_value_sigCF891)) {
    var var_core_value_sigA14D;
    var_core_value_sig591B.setCurrentUnitForType(var_core_value_sig4FBC), (var_core_value_sigA14D = var_core_value_sig591B.focusUnit) == null || var_core_value_sigA14D.call(var_core_value_sig591B, var_core_value_sig4FBC);
    return;
  }
  var_core_value_sig71F0 && var_core_value_sig591B.setCurrentUnitForType(var_core_value_sig71F0.getUnitId());
}
function Tn(var_core_value_sigF428, var_core_value_sig4AA7) {
  let var_core_value_sigC0CB = var_core_value_sig4AA7 == null ? undefined : var_core_value_sig4AA7();
  return !var_core_value_sigF428 || !(var_core_value_sigC0CB != null && var_core_value_sigC0CB.has(K)) ? false : var_core_value_sigC0CB.get(K).hasChildInteractionLease(var_core_value_sigF428);
}
const En = new WeakMap();
let Dn = 0;
function On(var_core_value_sig7644, var_core_value_sig6497) {
  if (!var_core_value_sig7644.has(Mn)) return An(var_core_value_sig7644, var_core_value_sig6497);
  let var_core_value_sig742A = var_core_value_sig7644.get(Mn);
  if (!(var_core_value_sig6497.id && var_core_value_sig742A.getAll(var_core_value_sig6497.childType, var_core_value_sig6497.surface).some(var_core_value_sig39C7 => var_core_value_sig39C7.id === var_core_value_sig6497.id))) return var_core_value_sig742A.register(var_core_value_sig6497);
}
function kn(var_core_value_sig2130) {
  if (!var_core_value_sig2130.has(Mn)) return;
  let var_core_value_sig5BC4 = En.get(var_core_value_sig2130);
  var_core_value_sig5BC4 != null && var_core_value_sig5BC4.size && ([...var_core_value_sig5BC4.values()].sort((var_core_value_sigA022, var_core_value_sig913A) => var_core_value_sigA022.index - var_core_value_sig913A.index).forEach(({
    contribution: var_core_value_sig991D
  }) => On(var_core_value_sig2130, var_core_value_sig991D)), En.delete(var_core_value_sig2130));
}
function An(var_core_value_sigD642, var_core_value_sig187F) {
  let var_core_value_sig1D39 = {
      contribution: var_core_value_sig187F,
      index: Dn++
    },
    var_core_value_sig0BE3 = jn(var_core_value_sig187F, var_core_value_sig1D39.index),
    var_core_value_sigF681 = var_core_value_sigD642,
    var_core_value_sigABEA = En.get(var_core_value_sigF681) ?? new Map();
  return var_core_value_sigABEA.set(var_core_value_sig0BE3, var_core_value_sig1D39), En.set(var_core_value_sigF681, var_core_value_sigABEA), (0, a.toDisposable)(() => {
    let var_core_value_sig3E9C = En.get(var_core_value_sigF681);
    (var_core_value_sig3E9C == null ? undefined : var_core_value_sig3E9C.get(var_core_value_sig0BE3)) === var_core_value_sig1D39 && var_core_value_sig3E9C.delete(var_core_value_sig0BE3);
  });
}
function jn(var_core_value_sig4200, var_core_value_sig09ED) {
  let var_core_value_sig912B = Pn(var_core_value_sig4200);
  return var_core_value_sig4200.id ? var_core_value_sig4200.childType + ":" + var_core_value_sig912B + ":" + var_core_value_sig4200.id : var_core_value_sig4200.childType + ":" + var_core_value_sig912B + ":anonymous:" + var_core_value_sig09ED;
}
var Mn = class {
  constructor() {
    V(this, "_contributions", new Map()), V(this, "_nextIndex", 0);
  }
  register(var_core_value_sig7835) {
    let var_core_value_sig1257 = {
        contribution: var_core_value_sig7835,
        index: this._nextIndex++
      },
      var_core_value_sig97E2 = this._contributions["get"](var_core_value_sig7835.childType) ?? [];
    return var_core_value_sig97E2.push(var_core_value_sig1257), var_core_value_sig97E2.sort(Fn), this._contributions["set"](var_core_value_sig7835.childType, var_core_value_sig97E2), (0, a.toDisposable)(() => {
      let var_core_value_sig85C3 = this._contributions["get"](var_core_value_sig7835.childType);
      if (!var_core_value_sig85C3) return;
      let var_core_value_sigB996 = var_core_value_sig85C3.filter(var_core_value_sigBECE => var_core_value_sigBECE !== var_core_value_sig1257);
      var_core_value_sigB996.length ? this._contributions["set"](var_core_value_sig7835.childType, var_core_value_sigB996) : this._contributions["delete"](var_core_value_sig7835.childType);
    });
  }
  get(var_core_value_sigBFA3) {
    return this.getAll(var_core_value_sigBFA3)[0];
  }
  getAll(var_core_value_sig6663, var_core_value_sigB250) {
    return (this._contributions["get"](var_core_value_sig6663) ?? []).map(var_core_value_sig4BBA => var_core_value_sig4BBA.contribution).filter(var_core_value_sig6201 => !var_core_value_sigB250 || Pn(var_core_value_sig6201) === var_core_value_sigB250);
  }
  getMergedMenuSchema(var_core_value_sig4EAB, var_core_value_sig2FD0 = "ribbon") {
    let var_core_value_sig035C = this.getAll(var_core_value_sig4EAB, var_core_value_sig2FD0).map(var_core_value_sig5151 => var_core_value_sig5151.menuSchema).filter(var_core_value_sigB542 => var_core_value_sigB542 && typeof var_core_value_sigB542 == "object");
    if (var_core_value_sig035C.length) return In(var_core_value_sig035C);
  }
  mountMenu(var_core_value_sigA7F0) {
    let var_core_value_sig6AE2 = var_core_value_sigA7F0.surface ?? "ribbon",
      var_core_value_sigFD17 = this.getAll(var_core_value_sigA7F0.childType, var_core_value_sig6AE2);
    if (!var_core_value_sigFD17.length) return;
    let var_core_value_sigA5E0 = var_core_value_sigFD17.filter(var_core_value_sigBB6C => var_core_value_sigBB6C.mountMenu);
    if (var_core_value_sigA5E0.length) {
      let var_core_value_sigE2BF = var_core_value_sigA5E0.map(var_core_value_sig1B22 => {
        var var_core_value_sig7F72;
        return (var_core_value_sig7F72 = var_core_value_sig1B22.mountMenu) == null ? undefined : var_core_value_sig7F72.call(var_core_value_sig1B22, {
          ...var_core_value_sigA7F0,
          surface: var_core_value_sig6AE2,
          menuSchema: var_core_value_sig1B22.menuSchema,
          scopedActionServiceTokens: var_core_value_sig1B22.scopedActionServiceTokens
        });
      }).filter(var_core_value_sig7B2A => !!var_core_value_sig7B2A);
      return (0, a.toDisposable)(() => {
        var_core_value_sigE2BF.forEach(var_core_value_sig1BBD => var_core_value_sig1BBD.dispose());
      });
    }
    let var_core_value_sigC38F = this.getMergedMenuSchema(var_core_value_sigA7F0.childType, var_core_value_sig6AE2);
    if (var_core_value_sig6AE2 === "ribbon") return an({
      ...var_core_value_sigA7F0,
      surface: var_core_value_sig6AE2,
      menuSchema: var_core_value_sigC38F,
      scopedActionServiceTokens: Nn(var_core_value_sigFD17)
    }) ?? undefined;
  }
};
function Nn(var_core_value_sig60E8) {
  let var_core_value_sigC01F = var_core_value_sig60E8.flatMap(var_core_value_sigFAFE => var_core_value_sigFAFE.scopedActionServiceTokens ?? []);
  return var_core_value_sigC01F.length ? Array.from(new Set(var_core_value_sigC01F)) : undefined;
}
function Pn(var_core_value_sig3ACA) {
  return var_core_value_sig3ACA.surface ?? "ribbon";
}
function Fn(var_core_value_sig25D9, var_core_value_sig171B) {
  return (var_core_value_sig25D9.contribution["order"] ?? var_core_value_sig25D9.index) - (var_core_value_sig171B.contribution["order"] ?? var_core_value_sig171B.index) || var_core_value_sig25D9.index - var_core_value_sig171B.index;
}
function In(var_core_value_sigF2EF) {
  return var_core_value_sigF2EF.reduce((var_core_value_sig2B86, var_core_value_sig8873) => Bn(var_core_value_sig2B86, Ln(var_core_value_sig8873)), {});
}
function Ln(var_core_value_sig9366) {
  if (!Hn(var_core_value_sig9366)) return var_core_value_sig9366;
  let var_core_value_sigE8631 = new Set(Object.values(c.RibbonPosition)),
    var_core_value_sigB2CE1 = Object.entries(var_core_value_sig9366).filter(([var_core_value_sigB9C5]) => var_core_value_sigE8631.has(var_core_value_sigB9C5)),
    var_core_value_sig18E9 = Object.entries(var_core_value_sig9366).filter(([var_core_value_sig511D]) => zn(var_core_value_sig511D));
  if (!var_core_value_sigB2CE1.length && !var_core_value_sig18E9.length) return var_core_value_sig9366;
  let var_core_value_sigC0B9 = {};
  Object.entries(var_core_value_sig9366).forEach(([var_core_value_sig1610, var_core_value_sig23AB]) => {
    !var_core_value_sigE8631.has(var_core_value_sig1610) && !zn(var_core_value_sig1610) && (var_core_value_sigC0B9[var_core_value_sig1610] = Vn(var_core_value_sig23AB));
  });
  let var_core_value_sig2F10 = Hn(var_core_value_sigC0B9[c.MenuManagerPosition["RIBBON"]]) ? var_core_value_sigC0B9[c.MenuManagerPosition["RIBBON"]] : {};
  return var_core_value_sigB2CE1.forEach(([var_core_value_sigA15D, var_core_value_sig7E90]) => {
    var_core_value_sig2F10[var_core_value_sigA15D] = var_core_value_sigA15D in var_core_value_sig2F10 ? Bn(var_core_value_sig2F10[var_core_value_sigA15D], var_core_value_sig7E90) : Vn(var_core_value_sig7E90);
  }), var_core_value_sig18E9.forEach(([var_core_value_sig03F7, var_core_value_sig756F]) => {
    let var_core_value_sig0DB1 = zn(var_core_value_sig03F7);
    if (!var_core_value_sig0DB1) return;
    let var_core_value_sig4950 = Hn(var_core_value_sig2F10[var_core_value_sig0DB1]) ? var_core_value_sig2F10[var_core_value_sig0DB1] : {};
    var_core_value_sig4950[var_core_value_sig03F7] = var_core_value_sig03F7 in var_core_value_sig4950 ? Bn(var_core_value_sig4950[var_core_value_sig03F7], var_core_value_sig756F) : Vn(var_core_value_sig756F), var_core_value_sig2F10[var_core_value_sig0DB1] = var_core_value_sig4950;
  }), var_core_value_sigC0B9[c.MenuManagerPosition["RIBBON"]] = var_core_value_sig2F10, var_core_value_sigC0B9;
}
const Rn = [[Object.values(c.RibbonStartGroup), c.RibbonPosition["START"]], [Object.values(c.RibbonInsertGroup), c.RibbonPosition["INSERT"]], [Object.values(c.RibbonFormulasGroup), c.RibbonPosition["FORMULAS"]], [Object.values(c.RibbonDataGroup), c.RibbonPosition["DATA"]], [Object.values(c.RibbonViewGroup), c.RibbonPosition["VIEW"]], [Object.values(c.RibbonOthersGroup), c.RibbonPosition["OTHERS"]]];
function zn(var_core_value_sigC1F2) {
  var var_core_value_sigDA6F;
  return (var_core_value_sigDA6F = Rn.find(([var_core_value_sig4424]) => var_core_value_sig4424.includes(var_core_value_sigC1F2))) == null ? undefined : var_core_value_sigDA6F[1];
}
function Bn(var_core_value_sig8583, var_core_value_sig802A) {
  if (!Hn(var_core_value_sig8583) || !Hn(var_core_value_sig802A)) return Vn(var_core_value_sig802A);
  let var_core_value_sig368A = {
    ...var_core_value_sig8583
  };
  return Object.entries(var_core_value_sig802A).forEach(([var_core_value_sig57E8, var_core_value_sig76B6]) => {
    var_core_value_sig368A[var_core_value_sig57E8] = var_core_value_sig57E8 in var_core_value_sig368A ? Bn(var_core_value_sig368A[var_core_value_sig57E8], var_core_value_sig76B6) : Vn(var_core_value_sig76B6);
  }), var_core_value_sig368A;
}
function Vn(var_core_value_sig89F9) {
  return Array.isArray(var_core_value_sig89F9) ? var_core_value_sig89F9.map(var_core_value_sig89BC => Vn(var_core_value_sig89BC)) : Hn(var_core_value_sig89F9) ? Object.fromEntries(Object.entries(var_core_value_sig89F9).map(([var_core_value_sig2191, var_core_value_sig3B2E]) => [var_core_value_sig2191, Vn(var_core_value_sig3B2E)])) : var_core_value_sig89F9;
}
function Hn(var_core_value_sig015F) {
  return !!var_core_value_sig015F && typeof var_core_value_sig015F == "object" && !Array.isArray(var_core_value_sig015F);
}
function Un(var_core_value_sigC32D, var_core_value_sigEB9F, var_core_value_sig08A4) {
  let {
    viewport: var_core_value_sigE286,
    menuSlot: var_core_value_sig91C3,
    popupSlot: var_core_value_sig63B3
  } = var_core_value_sig08A4;
  return {
    hostUnitId: var_core_value_sigC32D.hostUnitId,
    hostAnchorId: var_core_value_sigC32D.hostAnchorId,
    embedId: var_core_value_sigC32D.embedId,
    childUnitId: var_core_value_sigC32D.childUnitId,
    childType: var_core_value_sigC32D.childType,
    layout: var_core_value_sigEB9F,
    mode: "float",
    rootElement: var_core_value_sigE286,
    contentRoot: R(var_core_value_sigE286, "data-embed-content-root") ?? var_core_value_sigE286,
    canvasRoot: R(var_core_value_sigE286, "data-embed-canvas-root") ?? var_core_value_sigE286,
    overlayRoot: R(var_core_value_sigE286, "data-embed-overlay-root") ?? var_core_value_sigE286,
    popupRoot: var_core_value_sig63B3 ?? R(var_core_value_sigE286, "data-embed-popup-root") ?? var_core_value_sigE286,
    menuOutlet: {
      container: var_core_value_sig91C3
    },
    active$: (0, f.of)(true),
    fullscreen: true
  };
}
function Wn(var_core_value_sig150A) {
  let {
      injector: var_core_value_sig2074,
      descriptor: var_core_value_sig038C,
      renderScope: var_core_value_sigE79F
    } = var_core_value_sig150A,
    var_core_value_sigC725 = [],
    var_core_value_sigD836 = var_core_value_sig038C.embedId,
    var_core_value_sigE06D = var_core_value_sig2074.has(K) ? var_core_value_sig2074.get(K) : undefined,
    var_core_value_sig8DC3 = var_core_value_sig2074.has(J) ? var_core_value_sig2074.get(J) : undefined;
  return var_core_value_sigE06D && (var_core_value_sigC725.push(var_core_value_sigE06D.registerRuntimeScope({
    embedId: var_core_value_sigD836,
    hostUnitId: var_core_value_sig038C.hostUnitId,
    childUnitId: var_core_value_sig038C.childUnitId,
    childType: var_core_value_sig038C.childType,
    sessionMode: "child-fullscreen"
  })), var_core_value_sig038C.childUnitId && var_core_value_sigC725.push(var_core_value_sigE06D.acquireLease({
    embedId: var_core_value_sigD836,
    role: "child-session",
    owner: "fullscreen-runtime",
    sessionMode: "child-fullscreen",
    hostUnitId: var_core_value_sig038C.hostUnitId,
    childUnitId: var_core_value_sig038C.childUnitId,
    childType: var_core_value_sig038C.childType
  })), Kn(var_core_value_sig150A).forEach(({
    element: var_core_value_sig5A9A,
    role: var_core_value_sigB524
  }) => {
    var_core_value_sigC725.push(var_core_value_sigE06D.registerElement({
      embedId: var_core_value_sigD836,
      element: var_core_value_sig5A9A,
      role: var_core_value_sigB524
    }));
  })), var_core_value_sig8DC3 && (Kn(var_core_value_sig150A).forEach(({
    element: var_core_value_sig8CFB
  }) => {
    var_core_value_sigC725.push(var_core_value_sig8DC3.registerRoot(var_core_value_sigD836, var_core_value_sig8CFB, var_core_value_sig038C.childUnitId));
  }), var_core_value_sigC725.push(var_core_value_sig8DC3.activatePortalScope(var_core_value_sigD836, var_core_value_sigE79F.rootElement["ownerDocument"], {
    includeAppShellEditorPortal: var_core_value_sig038C.childType === a.UniverInstanceType["UNIVER_SHEET"]
  }))), var_core_value_sigE06D && var_core_value_sig8DC3 && var_core_value_sigC725.push(Gn({
    embedId: var_core_value_sigD836,
    focusCoordinator: var_core_value_sigE06D,
    interactionBoundaryService: var_core_value_sig8DC3,
    runtimeRoot: var_core_value_sigE79F.rootElement
  })), (0, a.toDisposable)(() => {
    [...var_core_value_sigC725].reverse().forEach(var_core_value_sigB8C7 => var_core_value_sigB8C7.dispose());
  });
}
function Gn(var_core_value_sig194D) {
  let {
      embedId: var_core_value_sigE5C1,
      focusCoordinator: var_core_value_sig81B0,
      interactionBoundaryService: var_core_value_sig6DF72,
      runtimeRoot: var_core_value_sig8E2B
    } = var_core_value_sig194D,
    var_core_value_sigC9E01 = var_core_value_sig8E2B.ownerDocument,
    var_core_value_sigDC37 = var_core_value_sigC9E01.defaultView,
    var_core_value_sig6133,
    var_core_value_sigDCBA = var_core_value_sigB52C => {
      var var_core_value_sigA4B8;
      let var_core_value_sigFF9C = var_core_value_sigB52C.type === "keydown" && var_core_value_sigB52C.key === "Escape";
      if (var_core_value_sigB52C.type === "keydown" && !var_core_value_sigFF9C) return;
      let var_core_value_sig278D = var_core_value_sig81B0.resolveActiveChildSessionRuntimeScope();
      if ((var_core_value_sig278D == null ? undefined : var_core_value_sig278D.embedId) !== var_core_value_sigE5C1 || var_core_value_sig278D.sessionMode !== "child-fullscreen") return;
      let var_core_value_sigC0FE = var_core_value_sigB52C.target instanceof HTMLElement ? var_core_value_sigB52C.target : null,
        var_core_value_sigDD22 = !!var_core_value_sigC0FE && (var_core_value_sig6DF72.contains(var_core_value_sigE5C1, var_core_value_sigC0FE, var_core_value_sigB52C) || var_core_value_sig81B0.containsElement(var_core_value_sigE5C1, var_core_value_sigC0FE, var_core_value_sigB52C)),
        var_core_value_sig2D35 = var_core_value_sigC0FE == null || (var_core_value_sigA4B8 = var_core_value_sigC0FE.closest("[data-embed-runtime-focus-role]")) == null ? undefined : var_core_value_sigA4B8.getAttribute(G);
      !var_core_value_sigFF9C && (!var_core_value_sigDD22 || var_core_value_sig2D35 !== "child-popup" && var_core_value_sig2D35 !== "floating-menu") || var_core_value_sigDC37 && (var_core_value_sig6133 != null && var_core_value_sigDC37.cancelAnimationFrame(var_core_value_sig6133), var_core_value_sig6133 = var_core_value_sigDC37.requestAnimationFrame(() => {
        var_core_value_sig6133 = var_core_value_sigDC37.requestAnimationFrame(() => {
          var var_core_value_sig06CD;
          var_core_value_sig6133 = undefined;
          let var_core_value_sigA5F1 = (var_core_value_sigC0FE == null ? undefined : var_core_value_sigC0FE.isConnected) && var_core_value_sigC0FE.closest('[data-state="closed"]') == null;
          if (!var_core_value_sigFF9C && var_core_value_sigA5F1) return;
          let var_core_value_sig97A2 = var_core_value_sigC9E01.activeElement,
            var_core_value_sig07E9 = var_core_value_sig97A2 instanceof HTMLElement ? (var_core_value_sig06CD = var_core_value_sig97A2.closest("[data-embed-runtime-focus-role]")) == null ? undefined : var_core_value_sig06CD.getAttribute(G) : undefined,
            var_core_value_sig4F59 = var_core_value_sig97A2 instanceof HTMLElement && var_core_value_sig97A2.closest('[data-state="open"]') != null,
            var_core_value_sigF564 = (var_core_value_sig07E9 !== "child-popup" || var_core_value_sig4F59) && (var_core_value_sig6DF72.contains(var_core_value_sigE5C1, var_core_value_sig97A2) || var_core_value_sig81B0.containsElement(var_core_value_sigE5C1, var_core_value_sig97A2)),
            var_core_value_sig8CFA = var_core_value_sig81B0.resolveActiveChildSessionRuntimeScope();
          var_core_value_sigF564 || !var_core_value_sig8E2B.isConnected || (var_core_value_sig8CFA == null ? undefined : var_core_value_sig8CFA.embedId) !== var_core_value_sigE5C1 || var_core_value_sig8CFA.sessionMode !== "child-fullscreen" || (var_core_value_sig8E2B.hasAttribute("tabindex") || (var_core_value_sig8E2B.tabIndex = -1), var_core_value_sig8E2B.focus({
            preventScroll: true
          }));
        });
      }));
    };
  return var_core_value_sigC9E01.addEventListener("click", var_core_value_sigDCBA, true), var_core_value_sigC9E01.addEventListener("keydown", var_core_value_sigDCBA, true), (0, a.toDisposable)(() => {
    var_core_value_sigC9E01.removeEventListener("click", var_core_value_sigDCBA, true), var_core_value_sigC9E01.removeEventListener("keydown", var_core_value_sigDCBA, true), var_core_value_sig6133 != null && (var_core_value_sigDC37 == null || var_core_value_sigDC37.cancelAnimationFrame(var_core_value_sig6133));
  });
}
function Kn(var_core_value_sigEE95) {
  let {
      renderScope: var_core_value_sig98C4,
      menuRoot: var_core_value_sig2F14,
      menuSlot: var_core_value_sigB9DF,
      popupSlot: var_core_value_sig81A9,
      sidebarSlot: var_core_value_sigF301,
      rightSidebarSlot: var_core_value_sig1679,
      footerSlot: var_core_value_sigF73D
    } = var_core_value_sigEE95,
    var_core_value_sigDB18 = [{
      element: var_core_value_sig98C4.rootElement,
      role: "runtime"
    }, {
      element: var_core_value_sig98C4.contentRoot,
      role: "runtime"
    }, {
      element: var_core_value_sig98C4.canvasRoot,
      role: "runtime"
    }, {
      element: var_core_value_sig98C4.overlayRoot,
      role: "runtime"
    }, {
      element: var_core_value_sig2F14,
      role: "floating-menu"
    }, {
      element: var_core_value_sigB9DF,
      role: "floating-menu"
    }, {
      element: var_core_value_sigF73D,
      role: "floating-menu"
    }, {
      element: var_core_value_sigF301,
      role: "child-popup"
    }, {
      element: var_core_value_sig1679,
      role: "child-popup"
    }, {
      element: var_core_value_sig81A9,
      role: "child-popup"
    }],
    var_core_value_sig4E47 = new Set();
  return var_core_value_sigDB18.flatMap(({
    element: var_core_value_sig7A4B,
    role: var_core_value_sigE50A
  }) => !var_core_value_sig7A4B || var_core_value_sig4E47.has(var_core_value_sig7A4B) ? [] : (var_core_value_sig4E47.add(var_core_value_sig7A4B), [{
    element: var_core_value_sig7A4B,
    role: var_core_value_sigE50A
  }]));
}
function qn(var_core_value_sigACB0) {
  return Jn(var_core_value_sigACB0) || Xn(var_core_value_sigACB0);
}
function Jn(var_core_value_sigDEB1) {
  if (!var_core_value_sigDEB1.injector["has"](H) || var_core_value_sigDEB1.descriptor["childType"] == null) return;
  let var_core_value_sigF3BE = var_core_value_sigDEB1.injector["get"](H).get(var_core_value_sigDEB1.descriptor["childType"]);
  if ((var_core_value_sigF3BE == null ? undefined : var_core_value_sigF3BE.hostChromeMode) !== "ribbon") return;
  let var_core_value_sig31FA = Yn(var_core_value_sigDEB1.injector);
  if (var_core_value_sigDEB1.injector["has"](Mn)) {
    let var_core_value_sigC8AC = var_core_value_sigDEB1.injector["get"](Mn).mountMenu({
      container: var_core_value_sigDEB1.menuContainer,
      portalContainer: var_core_value_sigDEB1.childContext["runtimeScope"].roots["popup"],
      injector: var_core_value_sigDEB1.childContext["runtimeScope"].injector,
      childType: var_core_value_sigDEB1.descriptor["childType"],
      childUnitId: var_core_value_sigDEB1.descriptor["childUnitId"],
      embedId: var_core_value_sigDEB1.descriptor["embedId"],
      surface: "ribbon",
      headerMenu: true,
      ribbonType: var_core_value_sig31FA,
      ribbonHeaderClassName: "univer-box-border univer-bg-gray-50 univer-pr-24 dark:!univer-bg-gray-900"
    });
    if (var_core_value_sigC8AC) return var_core_value_sigC8AC;
  }
  return an({
    container: var_core_value_sigDEB1.menuContainer,
    portalContainer: var_core_value_sigDEB1.childContext["runtimeScope"].roots["popup"],
    injector: var_core_value_sigDEB1.childContext["runtimeScope"].injector,
    childType: var_core_value_sigDEB1.descriptor["childType"],
    childUnitId: var_core_value_sigDEB1.descriptor["childUnitId"],
    embedId: var_core_value_sigDEB1.descriptor["embedId"],
    menuSchema: undefined,
    headerMenu: true,
    ribbonType: var_core_value_sig31FA,
    ribbonHeaderClassName: "univer-box-border univer-bg-gray-50 univer-pr-24 dark:!univer-bg-gray-900"
  });
}
function Yn(var_core_value_sigC23B) {
  var var_core_value_sigB0B1;
  return var_core_value_sigC23B.has(a.IConfigService) ? ((var_core_value_sigB0B1 = var_core_value_sigC23B.get(a.IConfigService).getConfig(c.UI_PLUGIN_CONFIG_KEY)) == null ? undefined : var_core_value_sigB0B1.ribbonType) ?? "classic" : "classic";
}
function Xn(var_core_value_sigCB10) {
  if (!var_core_value_sigCB10.injector["has"](_t) || var_core_value_sigCB10.descriptor["childType"] == null || !var_core_value_sigCB10.descriptor["childUnitId"]) return;
  let var_core_value_sig97AF = var_core_value_sigCB10.injector["get"](_t).get(var_core_value_sigCB10.descriptor["hostType"], var_core_value_sigCB10.descriptor["entry"], var_core_value_sigCB10.descriptor["childType"]),
    var_core_value_sig8A6D = var_core_value_sig97AF == null ? undefined : var_core_value_sig97AF.mount({
      ...var_core_value_sigCB10.childContext,
      active: {
        hostUnitId: var_core_value_sigCB10.descriptor["hostUnitId"],
        embedId: var_core_value_sigCB10.descriptor["embedId"],
        childUnitId: var_core_value_sigCB10.descriptor["childUnitId"],
        stage: "stage2"
      }
    });
  return var_core_value_sig8A6D ? (0, a.toDisposable)(() => var_core_value_sig8A6D.dispose()) : undefined;
}
let Zn = class extends a.Disposable {
  constructor(var_core_value_sig8E63, var_core_value_sig300D) {
    super(), V(this, "_session$", new f["BehaviorSubject"](null)), V(this, "_exited$", new f["Subject"]()), V(this, "session$", this._session$["asObservable"]()), V(this, "exited$", this._exited$["asObservable"]()), this.disposeWithMe(var_core_value_sig8E63.onCommandExecuted(var_core_value_sigA56E => {
      if (!Qn(var_core_value_sigA56E)) return;
      let var_core_value_sig1998 = this.getSession();
      (var_core_value_sig1998 == null ? undefined : var_core_value_sig1998.hostUnitId) === var_core_value_sigA56E.params["unitId"] && var_core_value_sig1998.embedId === var_core_value_sigA56E.params["embedId"] && this.exit(var_core_value_sig1998.embedId);
    })), this.disposeWithMe(var_core_value_sig300D.unitDisposed$["subscribe"](var_core_value_sigFF19 => {
      let var_core_value_sig43B8 = this.getSession(),
        var_core_value_sigD98F = var_core_value_sigFF19.getUnitId();
      var_core_value_sig43B8 && (var_core_value_sig43B8.hostUnitId === var_core_value_sigD98F || var_core_value_sig43B8.childUnitId === var_core_value_sigD98F) && this.exit(var_core_value_sig43B8.embedId);
    }));
  }
  dispose() {
    super.dispose(), this._session$["complete"](), this._exited$["complete"]();
  }
  getSession() {
    return this._session$["getValue"]();
  }
  enter(var_core_value_sig520B) {
    var var_core_value_sigFE26, var_core_value_sig1019;
    if (!var_core_value_sig520B.childUnitId || var_core_value_sig520B.childType == null) throw Error("EMBED_FULLSCREEN_CHILD_NOT_RESOLVED");
    let var_core_value_sig32AB = ((var_core_value_sigFE26 = var_core_value_sig520B.sourceMeta) == null ? undefined : var_core_value_sigFE26.floating) || undefined,
      var_core_value_sig72BE = ((var_core_value_sig1019 = var_core_value_sig520B.sourceMeta) == null ? undefined : var_core_value_sig1019.tab) || undefined;
    if (var_core_value_sig72BE && var_core_value_sig72BE.enabled && !var_core_value_sig32AB) throw Error("EMBED_FULLSCREEN_TAB_NOT_SUPPORTED");
    let var_core_value_sig3E4A = var_core_value_sig32AB ? var_core_value_sig32AB.layout : undefined;
    if (!var_core_value_sig3E4A) throw Error("EMBED_FULLSCREEN_LAYOUT_NOT_RESOLVED");
    let var_core_value_sig3171 = {
      hostUnitId: var_core_value_sig520B.hostUnitId,
      embedId: var_core_value_sig520B.embedId,
      childUnitId: var_core_value_sig520B.childUnitId,
      childType: var_core_value_sig520B.childType,
      entry: var_core_value_sig520B.entry,
      layout: var_core_value_sig3E4A
    };
    return this._session$["next"](var_core_value_sig3171), var_core_value_sig3171;
  }
  exit(var_core_value_sigEBC4) {
    let var_core_value_sig788B = this.getSession();
    var_core_value_sig788B && (!var_core_value_sigEBC4 || var_core_value_sig788B.embedId === var_core_value_sigEBC4) && this._session$["next"](null);
  }
  notifyExited(var_core_value_sig9A80) {
    this._exited$["next"](var_core_value_sig9A80);
  }
};
Zn = Z([X(0, a.ICommandService), X(1, a.IUniverInstanceService)], Zn);
function Qn(var_core_value_sigB74E) {
  return var_core_value_sigB74E.id === t.SoftDeleteEmbedDescriptorMutation["id"] && typeof var_core_value_sigB74E.params == "object" && var_core_value_sigB74E.params !== null && "unitId" in var_core_value_sigB74E.params && typeof var_core_value_sigB74E.params["unitId"] == "string" && "embedId" in var_core_value_sigB74E.params && typeof var_core_value_sigB74E.params["embedId"] == "string";
}
function $n() {
  let var_core_value_sigBD4F = (0, c.useDependency)(a.Injector),
    var_core_value_sig9C8D = (0, c.useDependency)(a.LocaleService),
    var_core_value_sig1DE2 = (0, c.useDependency)(Gt),
    var_core_value_sig8E68 = (0, c.useDependency)(Zn),
    var_core_value_sigA81A = (0, d.useRef)(null),
    var_core_value_sig15C3 = (0, d.useRef)(null),
    var_core_value_sig5CFD1 = (0, d.useRef)(null),
    var_core_value_sigCA24 = (0, d.useRef)(null),
    var_core_value_sig0B5D = (0, d.useRef)(null),
    var_core_value_sigFC84 = (0, d.useRef)(null),
    var_core_value_sigCA9B = (0, d.useRef)(null),
    var_core_value_sig341C = (0, c.useObservable)(() => var_core_value_sig8E68.session$, var_core_value_sig8E68.getSession(), false, [var_core_value_sig8E68]),
    [var_core_value_sig2AA1, var_core_value_sigA506] = (0, d.useState)(null);
  if ((0, d.useEffect)(() => {
    var var_core_value_sig7C69;
    let var_core_value_sig01EF = var_core_value_sig5CFD1.current,
      var_core_value_sig3603 = var_core_value_sig15C3.current,
      var_core_value_sigC163 = var_core_value_sigCA24.current,
      var_core_value_sigF5F3 = var_core_value_sig0B5D.current,
      var_core_value_sig5E69 = var_core_value_sigFC84.current,
      var_core_value_sig7B39 = var_core_value_sigCA9B.current;
    if (!var_core_value_sig341C || !var_core_value_sig01EF || !var_core_value_sig3603 || !var_core_value_sigC163 || !var_core_value_sigF5F3 || !var_core_value_sig5E69 || !var_core_value_sig7B39) return;
    let var_core_value_sigDCAB = nr(var_core_value_sigBD4F, var_core_value_sig341C.hostUnitId, var_core_value_sig341C.embedId);
    if (!(var_core_value_sigDCAB != null && var_core_value_sigDCAB.childUnitId) || var_core_value_sigDCAB.childType == null) {
      var_core_value_sig01EF.dataset["embedFullscreenStatus"] = "missing-descriptor";
      return;
    }
    let var_core_value_sigF569 = var_core_value_sigBD4F.get(gt).get(var_core_value_sigDCAB.childType);
    if (!(var_core_value_sigF569 != null && var_core_value_sigF569.supportedLayouts["includes"](var_core_value_sig341C.layout))) {
      var_core_value_sig01EF.dataset["embedFullscreenStatus"] = "unsupported-layout";
      return;
    }
    var_core_value_sig01EF.dataset["embedFullscreenStatus"] = "mounting", var_core_value_sig01EF.dataset["embedId"] = var_core_value_sigDCAB.embedId, var_core_value_sig01EF.dataset["embedHostEntry"] = var_core_value_sigDCAB.entry, var_core_value_sig01EF.dataset["embedHostAnchorId"] = var_core_value_sigDCAB.hostAnchorId, var_core_value_sig01EF.dataset["embedLayout"] = var_core_value_sig341C.layout, var_core_value_sig01EF.dataset["embedChildType"] = String(var_core_value_sigDCAB.childType), var_core_value_sig01EF.dataset["embedChildUnitId"] = var_core_value_sigDCAB.childUnitId;
    let var_core_value_sig2A9F = ae(var_core_value_sig01EF),
      var_core_value_sigB14A = Un(var_core_value_sigDCAB, var_core_value_sig341C.layout, {
        viewport: var_core_value_sig01EF,
        menuSlot: var_core_value_sig3603,
        popupSlot: var_core_value_sigC163,
        footerSlot: var_core_value_sig7B39
      }),
      var_core_value_sig4401 = {
        descriptor: var_core_value_sigDCAB,
        layout: var_core_value_sig341C.layout,
        injector: var_core_value_sigBD4F,
        hostElement: var_core_value_sig01EF,
        container: var_core_value_sig01EF,
        renderScope: var_core_value_sigB14A,
        hostUnitId: var_core_value_sigDCAB.hostUnitId,
        embedId: var_core_value_sigDCAB.embedId,
        childUnitId: var_core_value_sigDCAB.childUnitId,
        childType: var_core_value_sigDCAB.childType
      },
      {
        runtimeScope: var_core_value_sig4D6A,
        disposable: var_core_value_sigEF80
      } = dt(var_core_value_sig4401, () => {}, var_core_value_sigF569.scopedDependencies);
    var_core_value_sigA506({
      embedId: var_core_value_sigDCAB.embedId,
      injector: var_core_value_sig4D6A.injector,
      sourceInjector: var_core_value_sigBD4F,
      popupContainer: var_core_value_sig4D6A.roots["popup"]
    });
    let var_core_value_sig526D1 = {
        ...var_core_value_sig4401,
        runtimeScope: var_core_value_sig4D6A
      },
      var_core_value_sigD78B = Wn({
        injector: var_core_value_sigBD4F,
        descriptor: var_core_value_sigDCAB,
        renderScope: var_core_value_sigB14A,
        menuRoot: var_core_value_sigA81A.current,
        menuSlot: var_core_value_sig3603,
        popupSlot: var_core_value_sigC163,
        sidebarSlot: var_core_value_sigF5F3,
        rightSidebarSlot: var_core_value_sig5E69,
        footerSlot: var_core_value_sig7B39
      }),
      var_core_value_sigCB8C = (var_core_value_sig66C0, var_core_value_sig9D15 = false) => {
        var var_core_value_sigB785, var_core_value_sig130F;
        let var_core_value_sigC0E3 = (var_core_value_sig66C0 == null ? undefined : var_core_value_sig66C0.target) instanceof Element ? var_core_value_sig66C0.target : null;
        var_core_value_sigC0E3 != null && var_core_value_sigC0E3.closest('[data-embed-fullscreen-close="true"], [data-embed-fullscreen-menu="true"], [data-embed-fullscreen-popup-root="true"]') || ((var_core_value_sigB785 = var_core_value_sig4D6A.instanceService) == null || var_core_value_sigB785.setCurrentUnitForType(var_core_value_sigDCAB.childUnitId), (var_core_value_sig130F = var_core_value_sig4D6A.instanceService) == null || var_core_value_sig130F.focusUnit(var_core_value_sigDCAB.childUnitId), var_core_value_sig1DE2.activateFullscreen(var_core_value_sigDCAB, {
          focusLayout: var_core_value_sig9D15
        }));
      };
    var_core_value_sigCB8C(undefined, true), var_core_value_sig01EF.addEventListener("pointerdown", var_core_value_sigCB8C, {
      capture: true
    }), var_core_value_sig01EF.addEventListener("focusin", var_core_value_sigCB8C);
    let var_core_value_sigD217 = (var_core_value_sig7C69 = var_core_value_sigF569.mount) == null ? undefined : var_core_value_sig7C69.call(var_core_value_sigF569, var_core_value_sig526D1);
    var_core_value_sigDCAB.childType === a.UniverInstanceType["UNIVER_BASE"] && Yt(var_core_value_sigDCAB.embedId, var_core_value_sigB14A.rootElement);
    let var_core_value_sigEB0F = qn({
      injector: var_core_value_sigBD4F,
      descriptor: var_core_value_sigDCAB,
      childContext: var_core_value_sig526D1,
      menuContainer: var_core_value_sig3603
    });
    return var_core_value_sig01EF.dataset["embedFullscreenStatus"] = "mounted", () => {
      var_core_value_sigA506(null), globalThis.requestAnimationFrame(() => {
        var_core_value_sig01EF.removeEventListener("pointerdown", var_core_value_sigCB8C, {
          capture: true
        }), var_core_value_sig01EF.removeEventListener("focusin", var_core_value_sigCB8C), var_core_value_sigEB0F == null || var_core_value_sigEB0F.dispose(), var_core_value_sigD217 == null || var_core_value_sigD217.dispose(), var_core_value_sigD78B.dispose(), var_core_value_sigEF80.dispose(), var_core_value_sig2A9F.dispose(), var_core_value_sig1DE2.clearFullscreen(var_core_value_sigDCAB), delete var_core_value_sig01EF.dataset["embedFullscreenStatus"], delete var_core_value_sig01EF.dataset["embedId"], delete var_core_value_sig01EF.dataset["embedHostEntry"], delete var_core_value_sig01EF.dataset["embedHostAnchorId"], delete var_core_value_sig01EF.dataset["embedLayout"], delete var_core_value_sig01EF.dataset["embedChildType"], delete var_core_value_sig01EF.dataset["embedChildUnitId"], var_core_value_sig8E68.notifyExited(var_core_value_sig341C);
      });
    };
  }, [var_core_value_sig1DE2, var_core_value_sig8E68, var_core_value_sigBD4F, var_core_value_sig341C]), !var_core_value_sig341C) return null;
  let var_core_value_sig6FC9 = () => {
    var_core_value_sig8E68.exit(var_core_value_sig341C.embedId);
  };
  return (0, m.jsxs)("div", {
    className: "univer-fixed\x20univer-inset-0\x20univer-grid\x20univer-grid-rows-[auto_minmax(0,1fr)_auto]\x20univer-bg-gray-0\x20univer-text-gray-900\x20dark:!univer-bg-gray-800\x20dark:!univer-text-gray-0",
    "data-embed-fullscreen-shell": "true",
    style: {
      zIndex: 810
    },
    children: [var_core_value_sig341C.childType === a.UniverInstanceType["UNIVER_BOARD"] && (0, m.jsx)("div", {
      className: "univer-pointer-events-none\x20univer-absolute\x20univer-left-4\x20univer-top-3\x20univer-z-30\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
      "data-embed-boards-fullscreen-exit": "true",
      title: var_core_value_sig9C8D.t("embed-ui.fullscreen.exit"),
      children: (0, m.jsxs)(c.ToolbarButton, {
        noIcon: true,
        className: "univer-pointer-events-auto univer-gap-1.5 univer-text-sm univer-font-medium",
        onClick: var_core_value_sig6FC9,
        children: [(0, m.jsx)(u.ArrowLeftIcon, {}), (0, m.jsx)("span", {
          children: var_core_value_sig9C8D.t("embed-ui.fullscreen.exit")
        })]
      })
    }), (0, m.jsxs)("div", {
      ref: var_core_value_sigA81A,
      className: "univer-relative\x20univer-z-[3]\x20univer-min-w-0\x20univer-bg-gray-0\x20empty:univer-hidden\x20dark:!univer-bg-gray-800",
      "data-embed-fullscreen-menu": "true",
      children: [var_core_value_sig341C.childType !== a.UniverInstanceType["UNIVER_BOARD"] && (0, m.jsx)("div", {
        className: "univer-pointer-events-none univer-absolute univer-right-3 univer-top-0 univer-z-[4] univer-flex univer-h-9 univer-items-center",
        "data-embed-fullscreen-header": "true",
        children: (0, m.jsxs)(l.Button, {
          type: "button",
          size: "small",
          variant: "ghost",
          className: "univer-pointer-events-auto univer-gap-1.5 hover:!univer-bg-primary-100 hover:!univer-text-primary-700 dark:hover:!univer-bg-primary-800 dark:hover:!univer-text-primary-100 [&_svg]:!univer-size-3.5",
          "data-embed-fullscreen-close": "true",
          onClick: var_core_value_sig6FC9,
          children: [(0, m.jsx)(u.ShrinkIcon, {}), (0, m.jsx)("span", {
            children: var_core_value_sig9C8D.t("embed-ui.fullscreen.exit")
          })]
        })
      }), (0, m.jsx)("div", {
        ref: var_core_value_sig15C3,
        className: "univer-min-w-0",
        "data-embed-fullscreen-menu-slot": "true",
        "data-embed-menu-slot": "true"
      })]
    }), (0, m.jsxs)("div", {
      className: "univer-flex univer-min-h-0 univer-min-w-0 univer-overflow-hidden",
      "data-embed-fullscreen-body": "true",
      children: [(0, m.jsx)("div", {
        ref: var_core_value_sig0B5D,
        className: "univer-relative univer-z-[2] univer-min-h-0 univer-flex-none univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800 [&_[data-u-comp=base-left-panel]]:univer-h-full",
        "data-embed-fullscreen-sidebar-slot": "true",
        "data-embed-id": var_core_value_sig341C.embedId
      }), (0, m.jsx)("div", {
        ref: var_core_value_sig5CFD1,
        className: "univer-relative univer-min-h-0 univer-min-w-0 univer-flex-1 univer-overflow-hidden dark:!univer-bg-gray-900",
        "data-embed-fullscreen-viewport": "true",
        onContextMenuCapture: var_core_value_sigDC44 => {
          var_core_value_sigDC44.preventDefault();
        }
      }), (0, m.jsx)("div", {
        ref: var_core_value_sigFC84,
        className: "univer-relative univer-z-[2] univer-min-h-0 univer-flex-none univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800",
        "data-embed-fullscreen-right-sidebar-slot": "true",
        "data-embed-id": var_core_value_sig341C.embedId,
        children: var_core_value_sig2AA1 && (0, m.jsx)(tr, {
          ...var_core_value_sig2AA1
        })
      })]
    }), (0, m.jsx)("div", {
      ref: var_core_value_sigCA9B,
      className: "univer-relative\x20univer-z-[2]\x20univer-min-w-0\x20univer-bg-gray-0\x20empty:univer-hidden\x20dark:!univer-bg-gray-800",
      "data-embed-fullscreen-footer-slot": "true",
      "data-embed-footer-slot": "true"
    }), (0, m.jsx)("div", {
      ref: var_core_value_sigCA24,
      className: "univer-pointer-events-none\x20univer-fixed\x20univer-inset-0\x20univer-z-20\x20[&>*]:univer-pointer-events-auto",
      "data-embed-fullscreen-popup-root": "true",
      "data-embed-popup-root": "true",
      children: var_core_value_sig2AA1 && (0, m.jsx)(er, {
        ...var_core_value_sig2AA1
      })
    })]
  });
}
function er(var_core_value_sig05BE) {
  let {
    embedId: var_core_value_sig097E,
    injector: var_core_value_sig0240,
    sourceInjector: var_core_value_sig90E0,
    popupContainer: var_core_value_sigA81B1
  } = var_core_value_sig05BE;
  return (0, m.jsxs)(m.Fragment, {
    children: [(0, m.jsxs)(Kt, {
      injector: var_core_value_sig0240,
      mountContainer: var_core_value_sigA81B1,
      embedId: var_core_value_sig097E,
      children: [(0, m.jsx)(c.ContextMenu, {}), (0, m.jsx)(c.CanvasPopup, {})]
    }), (0, m.jsx)(Kt, {
      injector: var_core_value_sig90E0,
      mountContainer: var_core_value_sigA81B1,
      embedId: var_core_value_sig097E,
      children: (0, m.jsx)(c.CanvasPopup, {})
    })]
  });
}
function tr(var_core_value_sig1D0B) {
  let {
    embedId: var_core_value_sigA5CC,
    injector: var_core_value_sigA22E,
    sourceInjector: var_core_value_sigAFB6,
    popupContainer: var_core_value_sigFC4C
  } = var_core_value_sig1D0B;
  return (0, m.jsxs)("aside", {
    className: "univer-z-[2] univer-flex univer-h-full",
    children: [(0, m.jsx)(Kt, {
      injector: var_core_value_sigA22E,
      mountContainer: var_core_value_sigFC4C,
      embedId: var_core_value_sigA5CC,
      children: (0, m.jsx)(c.Sidebar, {})
    }), (0, m.jsx)(Kt, {
      injector: var_core_value_sigAFB6,
      mountContainer: var_core_value_sigFC4C,
      embedId: var_core_value_sigA5CC,
      children: (0, m.jsx)(c.Sidebar, {})
    })]
  });
}
function nr(var_core_value_sigAE5C, var_core_value_sig9A4B, var_core_value_sigB177) {
  try {
    return var_core_value_sigAE5C.get(t.EmbedModelService).getDescriptor(var_core_value_sig9A4B, var_core_value_sigB177);
  } catch {
    return;
  }
}
const rr = {};
function ir(var_core_value_sig5FE4) {
  let {
      stage: var_core_value_sig0601,
      interactionFlow: var_core_value_sig2AAC
    } = var_core_value_sig5FE4,
    var_core_value_sig6D82 = var_core_value_sig2AAC === "doc-block",
    var_core_value_sig8E0C = var_core_value_sig0601 === "stage1" && !var_core_value_sig6D82,
    var_core_value_sigA440 = var_core_value_sig0601 === "stage2" || var_core_value_sig6D82;
  return {
    allowHostBodyDrag: var_core_value_sig8E0C,
    disableLiveHostPointerEvents: !var_core_value_sig6D82 && (var_core_value_sig0601 === "inactive" || var_core_value_sig0601 === "stage1"),
    passThroughInteractionGate: var_core_value_sigA440,
    runtimeOwnsInteraction: var_core_value_sigA440
  };
}
function ar(var_core_value_sigB2E6, var_core_value_sigA35D) {
  var var_core_value_sig5C6B;
  return (var_core_value_sigB2E6 == null ? undefined : var_core_value_sigB2E6.hostType) === a.UniverInstanceType["UNIVER_SHEET"] && var_core_value_sigB2E6.childType === a.UniverInstanceType["UNIVER_SHEET"] && !!((var_core_value_sig5C6B = var_core_value_sigB2E6.sourceMeta) != null && var_core_value_sig5C6B.floating) && var_core_value_sigA35D !== "stage2";
}
function or(var_core_value_sigFA1E, var_core_value_sig713B) {
  return ar(var_core_value_sigFA1E, var_core_value_sig713B) ? "deferred" : "ready";
}
function sr(var_core_value_sigDEC9) {
  var var_core_value_sig1BE8;
  return var_core_value_sigDEC9.fullscreen || ((var_core_value_sig1BE8 = var_core_value_sigDEC9.active) == null ? undefined : var_core_value_sig1BE8.embedId) === var_core_value_sigDEC9.embedId && var_core_value_sigDEC9.active["stage"] === "stage2" || !var_core_value_sigDEC9.usesDomFloatingStage && var_core_value_sigDEC9.renderScopeActive ? "stage2" : "inactive";
}
function cr(var_core_value_sig955E, var_core_value_sig6248) {
  return var_core_value_sig955E !== "docs-sticky-sheet" && var_core_value_sig955E !== "docs-sticky-base" || var_core_value_sig6248.shiftKey || var_core_value_sig6248.ctrlKey || var_core_value_sig6248.metaKey ? false : Math.abs(var_core_value_sig6248.deltaY) > Math.abs(var_core_value_sig6248.deltaX);
}
const lr = Symbol("univer.embed.forwarded-wheel-event"),
  ur = Symbol("univer.embed.host-vertical-wheel-attempted-event");
function dr(var_core_value_sigEE43, var_core_value_sig96E6) {
  var var_core_value_sig5045;
  if (!var_core_value_sigEE43.ctrlKey && !var_core_value_sigEE43.metaKey) return false;
  let var_core_value_sig826A = var_core_value_sig96E6.getChildContext();
  return !var_core_value_sig826A || ((var_core_value_sig5045 = var_core_value_sig96E6.onHostWheel) == null ? undefined : var_core_value_sig5045.call(var_core_value_sig96E6, var_core_value_sigEE43, var_core_value_sig826A)) !== true ? false : (var_core_value_sig96E6.invalidate("host-scroll"), Hr(var_core_value_sigEE43, true), true);
}
function fr(var_core_value_sig16C71) {
  let var_core_value_sig3040 = {
      activeUntil: 0
    },
    var_core_value_sig1A10 = var_core_value_sigDEFC => {
      var var_core_value_sigE842;
      if (_r(var_core_value_sigDEFC) || ((var_core_value_sigDEFC.ctrlKey || var_core_value_sigDEFC.metaKey) && (var_core_value_sig3040.activeUntil = 0), dr(var_core_value_sigDEFC, var_core_value_sig16C71))) return;
      if (var_core_value_sig16C71.routeHostGestures && var_core_value_sig16C71.hostWheelGestureService["isHostGesture"](var_core_value_sigDEFC)) {
        var var_core_value_sigA77A;
        let var_core_value_sig52F7 = var_core_value_sig16C71.getChildContext();
        if (var_core_value_sig52F7 && ((var_core_value_sigA77A = var_core_value_sig16C71.onHostWheel) == null ? undefined : var_core_value_sigA77A.call(var_core_value_sig16C71, var_core_value_sigDEFC, var_core_value_sig52F7)) === true || Cr(var_core_value_sig16C71.container, var_core_value_sigDEFC)) {
          var_core_value_sig16C71.invalidate("host-scroll"), Hr(var_core_value_sigDEFC, true);
          return;
        }
      }
      if (var_core_value_sigDEFC.ctrlKey || var_core_value_sigDEFC.metaKey) return;
      let var_core_value_sig0701 = var_core_value_sig16C71.getStage();
      if (var_core_value_sig0701 === "stage2") return;
      let var_core_value_sig5DCA = var_core_value_sig16C71.getChildContext(),
        var_core_value_sigF1AB = var_core_value_sig5DCA ? var_core_value_sig16C71.passiveViewportRegistry["get"](var_core_value_sig5DCA.childType, var_core_value_sig5DCA.layout) : undefined,
        var_core_value_sig902F = hr(var_core_value_sigDEFC, var_core_value_sig16C71.viewScale),
        var_core_value_sig6BD7 = var_core_value_sig5DCA ? {
          ...var_core_value_sig5DCA,
          event: var_core_value_sig902F,
          stage: var_core_value_sig0701,
          viewportScrollY: var_core_value_sig16C71.syncHostVerticalScroll ? var_core_value_sig16C71.hostScrollOffset["current"] : undefined
        } : undefined;
      if (var_core_value_sig5DCA && Er(var_core_value_sig5DCA, var_core_value_sigDEFC, var_core_value_sig16C71.syncHostVerticalScroll)) {
        var var_core_value_sig63E0;
        if (((var_core_value_sig63E0 = var_core_value_sig16C71.onHostWheel) == null ? undefined : var_core_value_sig63E0.call(var_core_value_sig16C71, var_core_value_sigDEFC, var_core_value_sig5DCA)) === true || Cr(var_core_value_sig16C71.container, var_core_value_sigDEFC)) {
          var_core_value_sig16C71.invalidate("host-scroll"), Hr(var_core_value_sigDEFC, true);
          return;
        }
      }
      let var_core_value_sig1B87 = var_core_value_sig6BD7 ? var_core_value_sig16C71.passiveWheelHandlerRegistry["handleWheel"](var_core_value_sig6BD7) : false,
        var_core_value_sig580B = !var_core_value_sig1B87 && Dr(var_core_value_sig16C71.container, var_core_value_sigDEFC),
        var_core_value_sig4836 = false,
        var_core_value_sig4C06 = false;
      if (!var_core_value_sig1B87 && var_core_value_sig580B) {
        var var_core_value_sig4D56;
        let var_core_value_sig866F = Or(var_core_value_sigDEFC);
        Ar(var_core_value_sig866F, var_core_value_sigF1AB == null || (var_core_value_sig4D56 = var_core_value_sigF1AB.getHorizontalScroll) == null ? undefined : var_core_value_sig4D56.call(var_core_value_sigF1AB, var_core_value_sig6BD7)) ? (br(var_core_value_sigDEFC, var_core_value_sig16C71.liveRoot), var_core_value_sig4836 = true) : kr(var_core_value_sig866F, () => {
          var var_core_value_sig2E11;
          return var_core_value_sig4C06 = ((var_core_value_sig2E11 = var_core_value_sig16C71.resizeDocsSheetLikeRendererByWheel) == null ? undefined : var_core_value_sig2E11.call(var_core_value_sig16C71, var_core_value_sigDEFC)) === true;
        }, () => var_core_value_sig4836 = (var_core_value_sigF1AB == null ? undefined : var_core_value_sigF1AB.handleWheel(var_core_value_sig6BD7)) === true);
      } else var_core_value_sig1B87 || (var_core_value_sig4836 = (var_core_value_sigF1AB == null ? undefined : var_core_value_sigF1AB.handleWheel(var_core_value_sig6BD7)) === true);
      let var_core_value_sig7C26 = var_core_value_sig0701 === "inactive" && !var_core_value_sig1B87 && !var_core_value_sig4836 && !var_core_value_sig4C06 && !var_core_value_sig580B && !!var_core_value_sigF1AB && !!var_core_value_sig5DCA && jr(var_core_value_sigDEFC);
      if (var_core_value_sig7C26 && mr(var_core_value_sigDEFC, var_core_value_sig3040)) return;
      if (var_core_value_sig7C26 && var_core_value_sig5DCA && ((var_core_value_sigE842 = var_core_value_sig16C71.onHostWheel) == null ? undefined : var_core_value_sigE842.call(var_core_value_sig16C71, var_core_value_sigDEFC, var_core_value_sig5DCA)) === true) {
        var_core_value_sig16C71.invalidate("host-scroll"), Hr(var_core_value_sigDEFC, true);
        return;
      }
      let var_core_value_sigBC59 = var_core_value_sig4836 || var_core_value_sig4C06 ? false : br(var_core_value_sigDEFC, var_core_value_sig16C71.liveRoot),
        var_core_value_sig544E = var_core_value_sig4836 || var_core_value_sig4C06 || (var_core_value_sig580B || var_core_value_sigBC59 ? false : xr(var_core_value_sigDEFC, var_core_value_sig16C71.liveRoot));
      if (var_core_value_sig1B87 || var_core_value_sig4836 || var_core_value_sig4C06 || var_core_value_sigBC59 || var_core_value_sig544E) {
        var_core_value_sig0701 === "inactive" && pr(var_core_value_sig3040), Hr(var_core_value_sigDEFC, false);
        return;
      }
      var_core_value_sig0701 === "stage1" && var_core_value_sig5DCA && jr(var_core_value_sigDEFC) && Hr(var_core_value_sigDEFC, true);
    },
    var_core_value_sig271B = var_core_value_sigCE8A => {
      var var_core_value_sig0718;
      if (var_core_value_sig16C71.getStage() !== "stage2" || var_core_value_sigCE8A.ctrlKey || var_core_value_sigCE8A.metaKey) return;
      let var_core_value_sig1B221 = var_core_value_sig16C71.getChildContext();
      if (var_core_value_sig1B221) {
        if (Dr(var_core_value_sig16C71.container, var_core_value_sigCE8A)) {
          var var_core_value_sig8854;
          let var_core_value_sig5B69 = var_core_value_sig16C71.passiveViewportRegistry["get"](var_core_value_sig1B221.childType, var_core_value_sig1B221.layout),
            var_core_value_sigB098 = hr(var_core_value_sigCE8A, var_core_value_sig16C71.viewScale),
            var_core_value_sigCE71 = {
              ...var_core_value_sig1B221,
              event: var_core_value_sigB098,
              stage: "stage2",
              viewportScrollY: var_core_value_sig16C71.syncHostVerticalScroll ? var_core_value_sig16C71.hostScrollOffset["current"] : undefined
            },
            var_core_value_sig21D8 = Or(var_core_value_sigCE8A),
            var_core_value_sig2B65;
          Ar(var_core_value_sig21D8, var_core_value_sig5B69 == null || (var_core_value_sig8854 = var_core_value_sig5B69.getHorizontalScroll) == null ? undefined : var_core_value_sig8854.call(var_core_value_sig5B69, var_core_value_sigCE71)) ? (br(var_core_value_sigCE8A, var_core_value_sig16C71.liveRoot), var_core_value_sig2B65 = true) : var_core_value_sig2B65 = kr(var_core_value_sig21D8, () => {
            var var_core_value_sigF704;
            return ((var_core_value_sigF704 = var_core_value_sig16C71.resizeDocsSheetLikeRendererByWheel) == null ? undefined : var_core_value_sigF704.call(var_core_value_sig16C71, var_core_value_sigCE8A)) === true;
          }, () => var_core_value_sig16C71.passiveWheelHandlerRegistry["handleWheel"](var_core_value_sigCE71) || (var_core_value_sig5B69 == null ? undefined : var_core_value_sig5B69.handleWheel(var_core_value_sigCE71)) === true), (var_core_value_sig2B65 || jr(var_core_value_sigCE8A)) && Hr(var_core_value_sigCE8A, true);
          return;
        }
        Er(var_core_value_sig1B221, var_core_value_sigCE8A, var_core_value_sig16C71.syncHostVerticalScroll) && (yr(var_core_value_sigCE8A) || (vr(var_core_value_sigCE8A), (((var_core_value_sig0718 = var_core_value_sig16C71.onHostWheel) == null ? undefined : var_core_value_sig0718.call(var_core_value_sig16C71, var_core_value_sigCE8A, var_core_value_sig1B221)) === true || Cr(var_core_value_sig16C71.container, var_core_value_sigCE8A)) && (var_core_value_sig16C71.invalidate("host-scroll"), Hr(var_core_value_sigCE8A, true))));
      }
    },
    var_core_value_sigC24D = var_core_value_sig5275 => {
      var_core_value_sig16C71.getStage() !== "stage2" || var_core_value_sig5275.ctrlKey || var_core_value_sig5275.metaKey || var_core_value_sig5275.defaultPrevented || zr(var_core_value_sig16C71.liveRoot, var_core_value_sig5275) || !var_core_value_sig16C71.getChildContext() || !jr(var_core_value_sig5275) || Hr(var_core_value_sig5275, true);
    },
    var_core_value_sig793B = () => var_core_value_sig16C71.invalidate("child-scroll");
  return var_core_value_sig16C71.gate["addEventListener"]("wheel", var_core_value_sig1A10, {
    passive: false
  }), var_core_value_sig16C71.liveRoot["addEventListener"]("wheel", var_core_value_sig1A10, {
    capture: true,
    passive: false
  }), var_core_value_sig16C71.container["addEventListener"]("wheel", var_core_value_sig271B, {
    capture: true,
    passive: false
  }), var_core_value_sig16C71.liveRoot["addEventListener"]("wheel", var_core_value_sig271B, {
    capture: true,
    passive: false
  }), var_core_value_sig16C71.container["addEventListener"]("wheel", var_core_value_sigC24D, {
    passive: false
  }), var_core_value_sig16C71.liveRoot["addEventListener"]("scroll", var_core_value_sig793B, true), (0, a.toDisposable)(() => {
    var_core_value_sig16C71.gate["removeEventListener"]("wheel", var_core_value_sig1A10), var_core_value_sig16C71.liveRoot["removeEventListener"]("wheel", var_core_value_sig1A10, {
      capture: true
    }), var_core_value_sig16C71.container["removeEventListener"]("wheel", var_core_value_sig271B, {
      capture: true
    }), var_core_value_sig16C71.liveRoot["removeEventListener"]("wheel", var_core_value_sig271B, {
      capture: true
    }), var_core_value_sig16C71.container["removeEventListener"]("wheel", var_core_value_sigC24D), var_core_value_sig16C71.liveRoot["removeEventListener"]("scroll", var_core_value_sig793B, true);
  });
}
function pr(var_core_value_sigCAD2) {
  var_core_value_sigCAD2.activeUntil = Date.now() + 180;
}
function mr(var_core_value_sigCF20, var_core_value_sigF733) {
  return Date.now() >= var_core_value_sigF733.activeUntil ? false : (pr(var_core_value_sigF733), Hr(var_core_value_sigCF20, true), true);
}
function hr(var_core_value_sigEABC, var_core_value_sig416F) {
  return typeof var_core_value_sig416F != "number" || !Number.isFinite(var_core_value_sig416F) || var_core_value_sig416F <= 0 || var_core_value_sig416F === 1 ? var_core_value_sigEABC : new WheelEvent(var_core_value_sigEABC.type, {
    altKey: var_core_value_sigEABC.altKey,
    bubbles: var_core_value_sigEABC.bubbles,
    cancelable: var_core_value_sigEABC.cancelable,
    clientX: var_core_value_sigEABC.clientX,
    clientY: var_core_value_sigEABC.clientY,
    ctrlKey: var_core_value_sigEABC.ctrlKey,
    deltaMode: var_core_value_sigEABC.deltaMode,
    deltaX: var_core_value_sigEABC.deltaX / var_core_value_sig416F,
    deltaY: var_core_value_sigEABC.deltaY / var_core_value_sig416F,
    deltaZ: var_core_value_sigEABC.deltaZ / var_core_value_sig416F,
    metaKey: var_core_value_sigEABC.metaKey,
    shiftKey: var_core_value_sigEABC.shiftKey
  });
}
function gr(var_core_value_sigF4B7, var_core_value_sig78BE) {
  let var_core_value_sig8BF7 = new WheelEvent("wheel", {
    clientX: var_core_value_sigF4B7.clientX,
    clientY: var_core_value_sigF4B7.clientY,
    ctrlKey: var_core_value_sigF4B7.ctrlKey,
    deltaMode: var_core_value_sigF4B7.deltaMode,
    deltaX: var_core_value_sigF4B7.deltaX,
    deltaY: var_core_value_sigF4B7.deltaY,
    deltaZ: var_core_value_sigF4B7.deltaZ,
    metaKey: var_core_value_sigF4B7.metaKey,
    shiftKey: var_core_value_sigF4B7.shiftKey,
    ...var_core_value_sig78BE
  });
  return Object.defineProperty(var_core_value_sig8BF7, lr, {
    configurable: true,
    value: var_core_value_sigF4B7
  }), var_core_value_sig8BF7;
}
function _r(var_core_value_sigAD29) {
  return !!var_core_value_sigAD29 && var_core_value_sigAD29[lr] instanceof WheelEvent;
}
function vr(var_core_value_sig6588) {
  Object.defineProperty(var_core_value_sig6588, ur, {
    configurable: true,
    value: true
  });
}
function yr(var_core_value_sigE223) {
  return !!var_core_value_sigE223[ur];
}
function br(var_core_value_sigEFBD, var_core_value_sig20EC) {
  let var_core_value_sig549B = Lr(var_core_value_sig20EC, var_core_value_sigEFBD.clientX, var_core_value_sigEFBD.clientY) ?? var_core_value_sig20EC,
    var_core_value_sig0FA5 = gr(var_core_value_sigEFBD, {
      bubbles: true,
      cancelable: true
    });
  return var_core_value_sig549B.dispatchEvent(var_core_value_sig0FA5), var_core_value_sig0FA5.defaultPrevented;
}
function xr(var_core_value_sig1B16, var_core_value_sig86C4) {
  let var_core_value_sig2634 = Rr(Lr(var_core_value_sig86C4, var_core_value_sig1B16.clientX, var_core_value_sig1B16.clientY) ?? var_core_value_sig86C4, var_core_value_sig86C4, var_core_value_sig1B16);
  return var_core_value_sig2634 ? Sr(var_core_value_sig1B16, var_core_value_sig2634) : false;
}
function Sr(var_core_value_sig77A5, var_core_value_sig258A) {
  let var_core_value_sigCE81 = Or(var_core_value_sig77A5),
    var_core_value_sigD09E = var_core_value_sig77A5.shiftKey ? 0 : var_core_value_sig77A5.deltaY,
    var_core_value_sigE729 = var_core_value_sig258A.scrollLeft,
    var_core_value_sig1658 = var_core_value_sig258A.scrollTop;
  return var_core_value_sigCE81 && (var_core_value_sig258A.scrollLeft += var_core_value_sigCE81), var_core_value_sigD09E && (var_core_value_sig258A.scrollTop += var_core_value_sigD09E), var_core_value_sig258A.scrollLeft !== var_core_value_sigE729 || var_core_value_sig258A.scrollTop !== var_core_value_sig1658;
}
function Cr(var_core_value_sigFDC0, var_core_value_sig0CF8) {
  let var_core_value_sigE365 = wr(var_core_value_sigFDC0);
  if (!var_core_value_sigE365) return Pr(var_core_value_sigFDC0.ownerDocument["body"], var_core_value_sigFDC0, var_core_value_sig0CF8);
  if (!Ir(var_core_value_sigE365)) return Pr(var_core_value_sigE365, var_core_value_sigFDC0, var_core_value_sig0CF8);
  let var_core_value_sig411D = var_core_value_sigE365.scrollTop;
  return var_core_value_sigE365.scrollTop += var_core_value_sig0CF8.deltaY, var_core_value_sigE365.scrollTop !== var_core_value_sig411D;
}
function wr(var_core_value_sigF3E2) {
  let var_core_value_sig8429 = var_core_value_sigF3E2.parentElement;
  for (; var_core_value_sig8429 && var_core_value_sig8429 !== document.body && var_core_value_sig8429 !== document.documentElement;) {
    if (var_core_value_sig8429.scrollHeight > var_core_value_sig8429.clientHeight && Tr(var_core_value_sig8429)) return var_core_value_sig8429;
    var_core_value_sig8429 = var_core_value_sig8429.parentElement;
  }
  return null;
}
function Tr(var_core_value_sigDAB4) {
  let var_core_value_sigBE2D = window.getComputedStyle(var_core_value_sigDAB4);
  return var_core_value_sigBE2D.overflow === "auto" || var_core_value_sigBE2D.overflow === "scroll" || var_core_value_sigBE2D.overflow === "hidden" || var_core_value_sigBE2D.overflowY === "auto" || var_core_value_sigBE2D.overflowY === "scroll" || var_core_value_sigBE2D.overflowY === "hidden";
}
function Er(var_core_value_sig29F9, var_core_value_sigA738, var_core_value_sigA249) {
  var var_core_value_sigAE70;
  return var_core_value_sigA249 || ((var_core_value_sigAE70 = var_core_value_sig29F9.descriptor["sourceMeta"]) == null ? undefined : var_core_value_sigAE70.verticalWheelMode) === "host" ? Nr(var_core_value_sigA738) : cr(var_core_value_sig29F9.layout, var_core_value_sigA738);
}
function Dr(var_core_value_sigE3B2, var_core_value_sigE76A) {
  return !!var_core_value_sigE3B2.closest('[data-embed-docs-custom-block-sheet-like="true"]') && Mr(var_core_value_sigE76A);
}
function Or(var_core_value_sig540E) {
  return var_core_value_sig540E.deltaX || (var_core_value_sig540E.shiftKey ? var_core_value_sig540E.deltaY : 0);
}
function kr(var_core_value_sig8FE2, var_core_value_sig5B59, var_core_value_sigA74E) {
  return var_core_value_sig8FE2 > 0 ? var_core_value_sig5B59() || var_core_value_sigA74E() : var_core_value_sigA74E() || var_core_value_sig5B59();
}
function Ar(var_core_value_sig438B, var_core_value_sigCD4B) {
  return var_core_value_sig438B < 0 && (var_core_value_sigCD4B ?? 0) > 0;
}
function jr(var_core_value_sig3102) {
  return Mr(var_core_value_sig3102) || Nr(var_core_value_sig3102);
}
function Mr(var_core_value_sig46AF) {
  if (var_core_value_sig46AF.ctrlKey || var_core_value_sig46AF.metaKey) return false;
  let var_core_value_sig4A74 = Or(var_core_value_sig46AF),
    var_core_value_sig63FB = var_core_value_sig46AF.shiftKey ? 0 : var_core_value_sig46AF.deltaY;
  return Math.abs(var_core_value_sig4A74) > Math.abs(var_core_value_sig63FB);
}
function Nr(var_core_value_sigADD7) {
  return var_core_value_sigADD7.shiftKey || var_core_value_sigADD7.ctrlKey || var_core_value_sigADD7.metaKey ? false : Math.abs(var_core_value_sigADD7.deltaY) > Math.abs(var_core_value_sigADD7.deltaX);
}
function Pr(var_core_value_sig49E0, var_core_value_sigAFAA, var_core_value_sig0D2F) {
  let var_core_value_sig43F4 = Array.from(var_core_value_sig49E0.querySelectorAll("canvas")).find(var_core_value_sig4F9D => !var_core_value_sigAFAA.contains(var_core_value_sig4F9D));
  return var_core_value_sig43F4 ? (var_core_value_sig43F4.dispatchEvent(gr(var_core_value_sig0D2F, {
    bubbles: true,
    cancelable: true,
    ...Fr(var_core_value_sig43F4, var_core_value_sigAFAA, var_core_value_sig0D2F)
  })), true) : false;
}
function Fr(var_core_value_sigEA92, var_core_value_sig125D, var_core_value_sig1FF9) {
  if (!Br(var_core_value_sig125D, var_core_value_sig1FF9.clientX, var_core_value_sig1FF9.clientY)) return {
    clientX: var_core_value_sig1FF9.clientX,
    clientY: var_core_value_sig1FF9.clientY
  };
  let var_core_value_sig85CF = var_core_value_sigEA92.getBoundingClientRect(),
    var_core_value_sig4F23 = Math.min(24, Math.max(4, Math.min(var_core_value_sig85CF.width, var_core_value_sig85CF.height) / 8)),
    var_core_value_sigC116 = [{
      clientX: var_core_value_sig85CF.left + var_core_value_sig4F23,
      clientY: var_core_value_sig85CF.top + var_core_value_sig4F23
    }, {
      clientX: var_core_value_sig85CF.right - var_core_value_sig4F23,
      clientY: var_core_value_sig85CF.top + var_core_value_sig4F23
    }, {
      clientX: var_core_value_sig85CF.left + var_core_value_sig4F23,
      clientY: var_core_value_sig85CF.bottom - var_core_value_sig4F23
    }, {
      clientX: var_core_value_sig85CF.right - var_core_value_sig4F23,
      clientY: var_core_value_sig85CF.bottom - var_core_value_sig4F23
    }, {
      clientX: var_core_value_sig85CF.left + var_core_value_sig85CF.width / 2,
      clientY: var_core_value_sig85CF.top + var_core_value_sig85CF.height / 2
    }];
  return var_core_value_sigC116.find(var_core_value_sig278E => !Br(var_core_value_sig125D, var_core_value_sig278E.clientX, var_core_value_sig278E.clientY)) ?? var_core_value_sigC116[0];
}
function Ir(var_core_value_sig3408) {
  let var_core_value_sig4B4D = window.getComputedStyle(var_core_value_sig3408);
  return var_core_value_sig4B4D.overflow === "auto" || var_core_value_sig4B4D.overflow === "scroll" || var_core_value_sig4B4D.overflowY === "auto" || var_core_value_sig4B4D.overflowY === "scroll";
}
function Lr(var_core_value_sig93D7, var_core_value_sigFED2, var_core_value_sig7392) {
  if (!Br(var_core_value_sig93D7, var_core_value_sigFED2, var_core_value_sig7392)) return null;
  let var_core_value_sig878B = var_core_value_sig93D7.ownerDocument["elementsFromPoint"];
  if (typeof var_core_value_sig878B == "function") {
    let var_core_value_sig2921 = var_core_value_sig878B.call(var_core_value_sig93D7.ownerDocument, var_core_value_sigFED2, var_core_value_sig7392).find(var_core_value_sigDE3D => var_core_value_sigDE3D instanceof HTMLElement && var_core_value_sig93D7.contains(var_core_value_sigDE3D));
    if (var_core_value_sig2921) return var_core_value_sig2921;
  }
  let var_core_value_sig52D0 = var_core_value_sig93D7,
    var_core_value_sig3B18 = var_core_value_sig3959 => {
      let var_core_value_sig926F = Array.from(var_core_value_sig3959.children);
      for (let var_core_value_sigF175 = var_core_value_sig926F.length - 1; var_core_value_sigF175 >= 0; var_core_value_sigF175--) {
        let var_core_value_sigD7EA = var_core_value_sig926F[var_core_value_sigF175];
        if (!(!(var_core_value_sigD7EA instanceof HTMLElement) || !Br(var_core_value_sigD7EA, var_core_value_sigFED2, var_core_value_sig7392))) {
          var_core_value_sig52D0 = var_core_value_sigD7EA, var_core_value_sig3B18(var_core_value_sigD7EA);
          return;
        }
      }
    };
  return var_core_value_sig3B18(var_core_value_sig93D7), var_core_value_sig52D0;
}
function Rr(var_core_value_sigCA31, var_core_value_sig9C20, var_core_value_sig7435) {
  let var_core_value_sig9C58 = Or(var_core_value_sig7435),
    var_core_value_sig676C = var_core_value_sig7435.shiftKey ? 0 : var_core_value_sig7435.deltaY,
    var_core_value_sig9D47 = var_core_value_sigCA31;
  for (; var_core_value_sig9D47 && var_core_value_sig9C20.contains(var_core_value_sig9D47);) {
    if (Vr(var_core_value_sig9D47, var_core_value_sig9C58, var_core_value_sig676C)) return var_core_value_sig9D47;
    var_core_value_sig9D47 = var_core_value_sig9D47.parentElement;
  }
  return Vr(var_core_value_sig9C20, var_core_value_sig9C58, var_core_value_sig676C) ? var_core_value_sig9C20 : null;
}
function zr(var_core_value_sigA6E3, var_core_value_sig34CC) {
  return Rr(Lr(var_core_value_sigA6E3, var_core_value_sig34CC.clientX, var_core_value_sig34CC.clientY) ?? var_core_value_sigA6E3, var_core_value_sigA6E3, var_core_value_sig34CC);
}
function Br(var_core_value_sig67F5, var_core_value_sigED1D, var_core_value_sig5A38) {
  let var_core_value_sig4E8A = var_core_value_sig67F5.getBoundingClientRect();
  return var_core_value_sigED1D >= var_core_value_sig4E8A.left && var_core_value_sigED1D <= var_core_value_sig4E8A.right && var_core_value_sig5A38 >= var_core_value_sig4E8A.top && var_core_value_sig5A38 <= var_core_value_sig4E8A.bottom;
}
function Vr(var_core_value_sigE618, var_core_value_sig2700, var_core_value_sigD319) {
  let var_core_value_sig5E9A = var_core_value_sig2700 !== 0 && var_core_value_sigE618.scrollWidth > var_core_value_sigE618.clientWidth && (var_core_value_sig2700 < 0 ? var_core_value_sigE618.scrollLeft > 0 : var_core_value_sigE618.scrollLeft + var_core_value_sigE618.clientWidth < var_core_value_sigE618.scrollWidth),
    var_core_value_sig52E2 = var_core_value_sigD319 !== 0 && var_core_value_sigE618.scrollHeight > var_core_value_sigE618.clientHeight && (var_core_value_sigD319 < 0 ? var_core_value_sigE618.scrollTop > 0 : var_core_value_sigE618.scrollTop + var_core_value_sigE618.clientHeight < var_core_value_sigE618.scrollHeight);
  return var_core_value_sig5E9A || var_core_value_sig52E2;
}
function Hr(var_core_value_sig00DD, var_core_value_sigA864) {
  var_core_value_sig00DD.preventDefault(), var_core_value_sig00DD.stopPropagation(), var_core_value_sigA864 && var_core_value_sig00DD.stopImmediatePropagation();
}
var Ur = class {
    constructor() {
      V(this, "previewUpdated$", new f["Subject"]()), V(this, "_providers", new Map()), V(this, "_entriesByEmbedId", new Map()), V(this, "_entriesByKey", new Map()), V(this, "_queue", []), V(this, "_rendering", false), V(this, "_activeDrain", null);
    }
    registerProvider(var_core_value_sig9414) {
      return this._providers["set"](var_core_value_sig9414.childType, var_core_value_sig9414), (0, a.toDisposable)(() => {
        this._providers["get"](var_core_value_sig9414.childType) === var_core_value_sig9414 && this._providers["delete"](var_core_value_sig9414.childType);
      });
    }
    getProvider(var_core_value_sig32E7) {
      return this._providers["get"](var_core_value_sig32E7);
    }
    getPreview(var_core_value_sigD8C3) {
      return this._entriesByEmbedId["get"](var_core_value_sigD8C3);
    }
    requestPreview(var_core_value_sig3A44) {
      let var_core_value_sig0642 = this.getCacheKey(var_core_value_sig3A44),
        var_core_value_sig786E = this._entriesByKey["get"](var_core_value_sig0642);
      if (var_core_value_sig786E && (var_core_value_sig786E.status === "pending" || var_core_value_sig786E.status === "ready")) return var_core_value_sig786E;
      let var_core_value_sigFC47 = this._entriesByEmbedId["get"](var_core_value_sig3A44.descriptor["embedId"]),
        var_core_value_sig48E2 = {
          embedId: var_core_value_sig3A44.descriptor["embedId"],
          childUnitId: var_core_value_sig3A44.childUnitId,
          childType: var_core_value_sig3A44.childType,
          status: "pending",
          width: Math.max(1, Math.round(var_core_value_sig3A44.width)),
          height: Math.max(1, Math.round(var_core_value_sig3A44.height)),
          dpr: var_core_value_sig3A44.dpr,
          viewState: var_core_value_sig3A44.viewState ?? (var_core_value_sigFC47 == null ? undefined : var_core_value_sigFC47.viewState),
          revision: ((var_core_value_sigFC47 == null ? undefined : var_core_value_sigFC47.revision) ?? 0) + 1,
          updatedAt: Date.now()
        };
      return this._entriesByKey["set"](var_core_value_sig0642, var_core_value_sig48E2), this._entriesByEmbedId["set"](var_core_value_sig48E2.embedId, var_core_value_sig48E2), this._queue["push"](var_core_value_sig3A44), this._drainQueue(), this.previewUpdated$["next"](var_core_value_sig48E2), var_core_value_sig48E2;
    }
    async collectViewState(var_core_value_sig2FCA) {
      let var_core_value_sig04F2 = this._providers["get"](var_core_value_sig2FCA.childType);
      if (!var_core_value_sig04F2) return;
      let var_core_value_sig2CFC = await var_core_value_sig04F2.collectViewState(var_core_value_sig2FCA);
      return this.updateViewState(var_core_value_sig2FCA.embedId, var_core_value_sig2CFC), var_core_value_sig2CFC;
    }
    async restoreViewState(var_core_value_sig5CEB, var_core_value_sig4935) {
      if (var_core_value_sig4935 == null) return;
      let var_core_value_sig1832 = this._providers["get"](var_core_value_sig5CEB.childType);
      await (var_core_value_sig1832 == null ? undefined : var_core_value_sig1832.restoreViewState(var_core_value_sig5CEB, var_core_value_sig4935));
    }
    updateViewState(var_core_value_sig79D7, var_core_value_sig5E01) {
      let var_core_value_sigBBE4 = this._entriesByEmbedId["get"](var_core_value_sig79D7);
      if (!var_core_value_sigBBE4) {
        let var_core_value_sig6A18 = {
          embedId: var_core_value_sig79D7,
          childUnitId: "",
          childType: undefined,
          status: "stale",
          width: 0,
          height: 0,
          dpr: 1,
          viewState: var_core_value_sig5E01,
          revision: 0,
          updatedAt: Date.now()
        };
        this._entriesByEmbedId["set"](var_core_value_sig79D7, var_core_value_sig6A18), this.previewUpdated$["next"](var_core_value_sig6A18);
        return;
      }
      var_core_value_sigBBE4.viewState = var_core_value_sig5E01, var_core_value_sigBBE4.updatedAt = Date.now(), this.previewUpdated$["next"](var_core_value_sigBBE4);
    }
    markStale(var_core_value_sig96B3, var_core_value_sig9CF2) {
      let var_core_value_sig666D = this._entriesByEmbedId["get"](var_core_value_sig96B3);
      var_core_value_sig666D && (var_core_value_sig666D.status = "stale", var_core_value_sig666D.error = var_core_value_sig9CF2, var_core_value_sig666D.updatedAt = Date.now(), this.previewUpdated$["next"](var_core_value_sig666D));
    }
    invalidate(var_core_value_sigBD53) {
      let var_core_value_sigD11F = this._entriesByEmbedId["get"](var_core_value_sigBD53);
      this._entriesByEmbedId["delete"](var_core_value_sigBD53), var_core_value_sigD11F && Array.from(this._entriesByKey["entries"]()).forEach(([var_core_value_sig4E3D, var_core_value_sig49B0]) => {
        var_core_value_sig49B0.embedId === var_core_value_sigBD53 && this._entriesByKey["delete"](var_core_value_sig4E3D);
      });
    }
    getCacheKey(var_core_value_sig62231) {
      return [var_core_value_sig62231.descriptor["embedId"], var_core_value_sig62231.childUnitId, var_core_value_sig62231.childType, Math.max(1, Math.round(var_core_value_sig62231.width)), Math.max(1, Math.round(var_core_value_sig62231.height)), var_core_value_sig62231.dpr].join("::");
    }
    async flushForTests() {
      for (; this._queue["length"] > 0 || this._rendering || this._activeDrain;) await (this._activeDrain ?? Promise.resolve()), await Promise.resolve();
    }
    dispose() {
      this._providers["clear"](), this._entriesByEmbedId["clear"](), this._entriesByKey["clear"](), this._queue["length"] = 0, this.previewUpdated$["complete"]();
    }
    _drainQueue() {
      this._rendering || this._activeDrain || (this._activeDrain = this._runQueue().finally(() => {
        this._activeDrain = null;
      }));
    }
    async _runQueue() {
      if (!this._rendering) {
        this._rendering = true;
        try {
          for (; this._queue["length"] > 0;) await this._renderOne(this._queue["shift"]());
        } finally {
          this._rendering = false;
        }
      }
    }
    async _renderOne(var_core_value_sig7653) {
      let var_core_value_sigF65B = this.getCacheKey(var_core_value_sig7653),
        var_core_value_sig4A94 = this._entriesByKey["get"](var_core_value_sigF65B);
      if (!var_core_value_sig4A94 || var_core_value_sig4A94.status !== "pending") return;
      let var_core_value_sigEB59 = this._providers["get"](var_core_value_sig7653.childType),
        var_core_value_sigD9B0 = this._findPreviousReadyEntry(var_core_value_sig4A94.embedId, var_core_value_sig4A94);
      if (!var_core_value_sigEB59) {
        let var_core_value_sig2547 = var_core_value_sig7653.context ? At(var_core_value_sig7653.context) : undefined;
        if (var_core_value_sig2547) {
          var_core_value_sig4A94.image = var_core_value_sig2547, var_core_value_sig4A94.status = "ready", var_core_value_sig4A94.updatedAt = Date.now(), this._entriesByEmbedId["set"](var_core_value_sig4A94.embedId, var_core_value_sig4A94), this.previewUpdated$["next"](var_core_value_sig4A94);
          return;
        }
        this._setRenderFailure(var_core_value_sig4A94, var_core_value_sigD9B0, Error("Missing\x20embed\x20float\x20preview\x20provider:\x20" + var_core_value_sig7653.childType));
        return;
      }
      try {
        let var_core_value_sigBCA9 = await var_core_value_sigEB59.renderPreview({
          ...var_core_value_sig7653,
          width: var_core_value_sig4A94.width,
          height: var_core_value_sig4A94.height,
          viewState: var_core_value_sig4A94.viewState
        });
        if (this._entriesByKey["get"](var_core_value_sigF65B) !== var_core_value_sig4A94 || var_core_value_sig4A94.status !== "pending") return;
        if (!var_core_value_sigBCA9) {
          this._setRenderFailure(var_core_value_sig4A94, var_core_value_sigD9B0, Error("Empty embed float preview result."));
          return;
        }
        var_core_value_sig4A94.image = var_core_value_sigBCA9, var_core_value_sig4A94.status = "ready", var_core_value_sig4A94.updatedAt = Date.now(), this._entriesByEmbedId["set"](var_core_value_sig4A94.embedId, var_core_value_sig4A94), this.previewUpdated$["next"](var_core_value_sig4A94);
      } catch (var_core_value_sig4CDF) {
        this._setRenderFailure(var_core_value_sig4A94, var_core_value_sigD9B0, var_core_value_sig4CDF);
      }
    }
    _findPreviousReadyEntry(var_core_value_sigB7D6, var_core_value_sigCF1F) {
      let var_core_value_sig4DD1 = this._entriesByEmbedId["get"](var_core_value_sigB7D6);
      return var_core_value_sig4DD1 && var_core_value_sig4DD1 !== var_core_value_sigCF1F && var_core_value_sig4DD1.image ? var_core_value_sig4DD1 : Array.from(this._entriesByKey["values"]()).reverse().find(var_core_value_sig3F79 => var_core_value_sig3F79.embedId === var_core_value_sigB7D6 && var_core_value_sig3F79 !== var_core_value_sigCF1F && var_core_value_sig3F79.image);
    }
    _setRenderFailure(var_core_value_sig1293, var_core_value_sigC999, var_core_value_sig9D8F) {
      var_core_value_sig1293.status = var_core_value_sigC999 != null && var_core_value_sigC999.image ? "stale" : "error", var_core_value_sig1293.image = var_core_value_sigC999 == null ? undefined : var_core_value_sigC999.image, var_core_value_sig1293.viewState = var_core_value_sig1293.viewState ?? (var_core_value_sigC999 == null ? undefined : var_core_value_sigC999.viewState), var_core_value_sig1293.error = var_core_value_sig9D8F, var_core_value_sig1293.updatedAt = Date.now(), this._entriesByEmbedId["set"](var_core_value_sig1293.embedId, var_core_value_sig1293), this.previewUpdated$["next"](var_core_value_sig1293);
    }
  },
  Wr = class {
    constructor() {
      V(this, "_registrations", new Map()), V(this, "_geometryInvalidated$", new f["Subject"]()), V(this, "geometryInvalidated$", this._geometryInvalidated$["asObservable"]());
    }
    register(var_core_value_sig8270) {
      return this._registrations["set"](var_core_value_sig8270.embedId, var_core_value_sig8270), this.invalidate({
        embedId: var_core_value_sig8270.embedId,
        reason: "manual"
      }), (0, a.toDisposable)(() => {
        this._registrations["get"](var_core_value_sig8270.embedId) === var_core_value_sig8270 && (this._registrations["delete"](var_core_value_sig8270.embedId), this.invalidate({
          embedId: var_core_value_sig8270.embedId,
          reason: "manual"
        }));
      });
    }
    getRegistration(var_core_value_sig95D9) {
      return this._registrations["get"](var_core_value_sig95D9);
    }
    getRegistrationByChildUnitId(var_core_value_sig0E92) {
      return Array.from(this._registrations["values"]()).find(var_core_value_sig880E => var_core_value_sig880E.childUnitId === var_core_value_sig0E92);
    }
    invalidate(var_core_value_sig45CD) {
      this._geometryInvalidated$["next"](var_core_value_sig45CD);
    }
  };
let Gr = class {
  constructor(var_core_value_sigAD84, var_core_value_sigD513, var_core_value_sig36BD, var_core_value_sig0413) {
    this._modelService = var_core_value_sigAD84, this._materializeService = var_core_value_sigD513, this._hostAdapterRegistry = var_core_value_sig36BD, this._anchorModelService = var_core_value_sig0413;
  }
  async materializeDescriptor(var_core_value_sig15B6) {
    return this._materializeService["materializeDescriptor"](var_core_value_sig15B6);
  }
  async restoreEmbed(var_core_value_sigFEBF) {
    let var_core_value_sigBBA2 = var_core_value_sigFEBF.descriptor,
      var_core_value_sigC9A11 = var_core_value_sigFEBF.hostAnchorRecord ?? this._hostAdapterRegistry["restoreAnchor"]({
        embedId: var_core_value_sigBBA2.embedId,
        hostUnitId: var_core_value_sigBBA2.hostUnitId,
        hostType: var_core_value_sigBBA2.hostType,
        entry: var_core_value_sigBBA2.entry,
        hostAnchorId: var_core_value_sigBBA2.hostAnchorId,
        hostContext: var_core_value_sigFEBF.hostContext,
        descriptor: var_core_value_sigBBA2
      });
    return this._modelService["addDescriptor"](var_core_value_sigBBA2.hostUnitId, var_core_value_sigBBA2), this._anchorModelService["setAnchor"](var_core_value_sigC9A11), this._modelService["getDescriptor"](var_core_value_sigBBA2.hostUnitId, var_core_value_sigBBA2.embedId);
  }
};
Gr = Z([X(0, (0, a.Inject)(t.EmbedModelService)), X(1, (0, a.Inject)(t.EmbedReferencedUnitMaterializeService)), X(2, (0, a.Inject)(t.EmbedHostAdapterRegistryService)), X(3, (0, a.Inject)(t.EmbedHostAnchorModelService))], Gr);
function Kr(var_core_value_sig0E68) {
  var var_core_value_sig2889;
  if (!var_core_value_sig0E68) return;
  let var_core_value_sigB3EE = ((var_core_value_sig2889 = var_core_value_sig0E68.closest("[data-embed-interaction-boundary-owner]")) == null ? undefined : var_core_value_sig2889.getAttribute("data-embed-interaction-boundary-owner")) ?? undefined,
    var_core_value_sig0E3B = qr(var_core_value_sig0E68, var_core_value_sigB3EE),
    var_core_value_sigDCD1 = (var_core_value_sig0E3B == null ? undefined : var_core_value_sig0E3B.getAttribute("data-embed-id")) ?? var_core_value_sigB3EE;
  if (var_core_value_sigDCD1) return {
    embedId: var_core_value_sigDCD1,
    hostUnitId: (var_core_value_sig0E3B == null ? undefined : var_core_value_sig0E3B.getAttribute("data-embed-host-unit-id")) ?? undefined,
    childUnitId: (var_core_value_sig0E3B == null ? undefined : var_core_value_sig0E3B.getAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE)) ?? undefined,
    childType: Yr(var_core_value_sig0E3B)
  };
}
function qr(var_core_value_sigA77C, var_core_value_sigEF78) {
  let var_core_value_sigA7F8 = var_core_value_sigA77C == null ? undefined : var_core_value_sigA77C.closest("[data-embed-float-dom=\x22true\x22]");
  if (var_core_value_sigA7F8 && (!var_core_value_sigEF78 || var_core_value_sigA7F8.getAttribute("data-embed-id") === var_core_value_sigEF78)) return var_core_value_sigA7F8;
  let var_core_value_sig007E = (var_core_value_sigA77C == null ? undefined : var_core_value_sigA77C.ownerDocument) ?? (typeof document > "u" ? undefined : document);
  return !var_core_value_sig007E || !var_core_value_sigEF78 ? var_core_value_sigA7F8 ?? undefined : var_core_value_sig007E.querySelector('[data-embed-float-dom="true"][data-embed-id="' + Jr(var_core_value_sigEF78) + "\x22]") ?? undefined;
}
function Jr(var_core_value_sigD261) {
  return var_core_value_sigD261.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function Yr(var_core_value_sigE75A) {
  let var_core_value_sigEC28 = var_core_value_sigE75A == null ? undefined : var_core_value_sigE75A.getAttribute("data-embed-child-type");
  if (var_core_value_sigEC28 != null && var_core_value_sigEC28 !== "") return Number(var_core_value_sigEC28);
}
var Xr = class {
  constructor() {
    V(this, "_sessions", new WeakMap()), V(this, "_hostGestureEvents", new WeakSet());
  }
  register(var_core_value_sigE469, var_core_value_sigA499) {
    let var_core_value_sig4CC3 = this._sessions["get"](var_core_value_sigE469);
    if (!var_core_value_sig4CC3) {
      let var_core_value_sigC9ED = var_core_value_sigE469.ownerDocument["defaultView"];
      if (!var_core_value_sigC9ED) return (0, a.toDisposable)(() => {});
      let var_core_value_sigB57B = var_core_value_sigB33B => this._observeWheel(var_core_value_sigE469, var_core_value_sigB33B);
      var_core_value_sigC9ED.addEventListener("wheel", var_core_value_sigB57B, {
        capture: true,
        passive: false
      }), var_core_value_sig4CC3 = {
        activeUntil: 0,
        containers: new Map(),
        dispose: () => var_core_value_sigC9ED.removeEventListener("wheel", var_core_value_sigB57B, {
          capture: true
        }),
        refCount: 0
      }, this._sessions["set"](var_core_value_sigE469, var_core_value_sig4CC3);
    }
    let var_core_value_sig70B3 = var_core_value_sig4CC3;
    return var_core_value_sig70B3.refCount += 1, var_core_value_sig70B3.containers["set"](var_core_value_sigA499, (var_core_value_sig70B3.containers["get"](var_core_value_sigA499) ?? 0) + 1), (0, a.toDisposable)(() => {
      let var_core_value_sig780B = var_core_value_sig70B3.containers["get"](var_core_value_sigA499) ?? 0;
      var_core_value_sig780B <= 1 ? var_core_value_sig70B3.containers["delete"](var_core_value_sigA499) : var_core_value_sig70B3.containers["set"](var_core_value_sigA499, var_core_value_sig780B - 1), --var_core_value_sig70B3.refCount, !(var_core_value_sig70B3.refCount > 0 || this._sessions["get"](var_core_value_sigE469) !== var_core_value_sig70B3) && (var_core_value_sig70B3.dispose(), this._sessions["delete"](var_core_value_sigE469));
    });
  }
  isHostGesture(var_core_value_sig422B) {
    return this._hostGestureEvents["has"](var_core_value_sig422B);
  }
  _observeWheel(var_core_value_sig1038, var_core_value_sigC3E6) {
    var var_core_value_sig3710;
    let var_core_value_sig9726 = var_core_value_sig1038.ownerDocument["defaultView"];
    if (!var_core_value_sig9726) return;
    let var_core_value_sigFC9B = Qr(var_core_value_sigC3E6, var_core_value_sig9726);
    if (!var_core_value_sigFC9B || !var_core_value_sig1038.contains(var_core_value_sigFC9B)) return;
    let var_core_value_sig943E = this._sessions["get"](var_core_value_sig1038);
    if (!var_core_value_sig943E) return;
    let var_core_value_sigEF36 = Date.now(),
      var_core_value_sigD4B1 = qr(var_core_value_sigFC9B),
      var_core_value_sigE5D8 = var_core_value_sigD4B1 ?? Zr(var_core_value_sig943E.containers["keys"](), var_core_value_sigC3E6.clientX, var_core_value_sigC3E6.clientY);
    if (!var_core_value_sigE5D8 || !var_core_value_sig1038.contains(var_core_value_sigE5D8)) {
      var_core_value_sig943E.activeUntil = var_core_value_sigEF36 + 500;
      return;
    }
    let var_core_value_sig74AF = var_core_value_sigE5D8.getAttribute("data-embed-float-stage");
    if (var_core_value_sig74AF === "inactive" && !var_core_value_sigD4B1) {
      var_core_value_sig943E.activeUntil = var_core_value_sigEF36 + 500;
      return;
    }
    if (var_core_value_sig74AF === "inactive" && ((var_core_value_sig3710 = Kr(var_core_value_sigE5D8)) == null ? undefined : var_core_value_sig3710.childType) === a.UniverInstanceType["UNIVER_SLIDE"]) {
      var_core_value_sig943E.activeUntil = var_core_value_sigEF36 + 500, this._hostGestureEvents["add"](var_core_value_sigC3E6);
      return;
    }
    if (var_core_value_sigEF36 >= var_core_value_sig943E.activeUntil) {
      var_core_value_sigD4B1 || (var_core_value_sigC3E6.preventDefault(), var_core_value_sigC3E6.stopImmediatePropagation());
      return;
    }
    var_core_value_sig943E.activeUntil = var_core_value_sigEF36 + 500, this._hostGestureEvents["add"](var_core_value_sigC3E6);
  }
};
function Zr(var_core_value_sig7870, var_core_value_sig7C02, var_core_value_sig5489) {
  for (let var_core_value_sigBABA of var_core_value_sig7870) {
    let var_core_value_sig7D1B = var_core_value_sigBABA.getBoundingClientRect();
    if (var_core_value_sig7D1B.width > 0 && var_core_value_sig7D1B.height > 0 && var_core_value_sig7C02 >= var_core_value_sig7D1B.left && var_core_value_sig7C02 <= var_core_value_sig7D1B.right && var_core_value_sig5489 >= var_core_value_sig7D1B.top && var_core_value_sig5489 <= var_core_value_sig7D1B.bottom) return var_core_value_sigBABA;
  }
}
function Qr(var_core_value_sig632D, var_core_value_sigE6D3) {
  let var_core_value_sig2C1F = var_core_value_sig632D.target;
  return var_core_value_sig2C1F instanceof var_core_value_sigE6D3.HTMLElement ? var_core_value_sig2C1F : var_core_value_sig2C1F instanceof var_core_value_sigE6D3.Element || var_core_value_sig2C1F instanceof var_core_value_sigE6D3.Node ? var_core_value_sig2C1F.parentElement : null;
}
function $r(var_core_value_sigF27F, var_core_value_sig56FA, var_core_value_sig6442) {
  if (!var_core_value_sigF27F.ctrlKey && !var_core_value_sigF27F.metaKey) return false;
  switch (var_core_value_sig56FA.descriptor["hostType"]) {
    case a.UniverInstanceType["UNIVER_SHEET"]:
      return ei(var_core_value_sigF27F, var_core_value_sig56FA, var_core_value_sig6442);
    case a.UniverInstanceType["UNIVER_DOC"]:
      return ti(var_core_value_sigF27F, var_core_value_sig56FA, var_core_value_sig6442);
    case a.UniverInstanceType["UNIVER_SLIDE"]:
      return ni(var_core_value_sigF27F, var_core_value_sig56FA, var_core_value_sig6442);
    default:
      return false;
  }
}
function ei(var_core_value_sig3CA3, var_core_value_sigC1AB, var_core_value_sig5E6D) {
  let var_core_value_sigA1F4 = var_core_value_sig5E6D.univerInstanceService["getUnit"](var_core_value_sigC1AB.hostUnitId, a.UniverInstanceType["UNIVER_SHEET"]),
    var_core_value_sig0CE9 = var_core_value_sigA1F4 == null ? undefined : var_core_value_sigA1F4.getActiveSheet();
  return !var_core_value_sigA1F4 || !var_core_value_sig0CE9 ? false : (var_core_value_sig5E6D.commandService["executeCommand"](s.SetZoomRatioCommand["id"], {
    unitId: var_core_value_sigC1AB.hostUnitId,
    subUnitId: var_core_value_sig0CE9.getSheetId(),
    zoomRatio: ri(var_core_value_sig0CE9.getZoomRatio(), var_core_value_sig3CA3)
  }), true);
}
function ti(var_core_value_sig3281, var_core_value_sig486A, var_core_value_sig7061) {
  var var_core_value_sig795D;
  let var_core_value_sigD358 = var_core_value_sig7061.univerInstanceService["getUnit"](var_core_value_sig486A.hostUnitId, a.UniverInstanceType["UNIVER_DOC"]);
  return var_core_value_sigD358 ? (var_core_value_sig7061.commandService["executeCommand"](o.SetDocZoomRatioCommand["id"], {
    documentId: var_core_value_sig486A.hostUnitId,
    zoomRatio: ri(((var_core_value_sig795D = var_core_value_sigD358.getSettings()) == null ? undefined : var_core_value_sig795D.zoomRatio) ?? 1, var_core_value_sig3281)
  }), true) : false;
}
function ni(var_core_value_sig42D2, var_core_value_sigB02D, var_core_value_sig5235) {
  let var_core_value_sig36851 = var_core_value_sig5235.univerInstanceService["getUnit"](var_core_value_sigB02D.hostUnitId, a.UniverInstanceType["UNIVER_SLIDE"]);
  return var_core_value_sig36851 ? (var_core_value_sig5235.commandService["executeCommand"](g.SetSlideZoomRatioOperation["id"], {
    unitId: var_core_value_sigB02D.hostUnitId,
    zoomRatio: ri(var_core_value_sig36851.getZoomRatio(), var_core_value_sig42D2)
  }), true) : false;
}
function ri(var_core_value_sig06F2, var_core_value_sigA50E) {
  return (0, p.getNextWheelZoomRatio)(var_core_value_sig06F2, {
    deltaMode: var_core_value_sigA50E.deltaMode,
    deltaX: var_core_value_sigA50E.deltaX,
    deltaY: var_core_value_sigA50E.deltaY,
    wheelDelta: var_core_value_sigA50E.wheelDelta
  });
}
var ii = class {
    constructor() {
      V(this, "_providers", new Map());
    }
    register(var_core_value_sigA723) {
      return this._providers["set"](var_core_value_sigA723.childType, var_core_value_sigA723), (0, a.toDisposable)(() => {
        this._providers["get"](var_core_value_sigA723.childType) === var_core_value_sigA723 && this._providers["delete"](var_core_value_sigA723.childType);
      });
    }
    get(var_core_value_sig991C, var_core_value_sigF909) {
      var var_core_value_sigDD0E;
      let var_core_value_sigF2A0 = this._providers["get"](var_core_value_sig991C);
      if (var_core_value_sigF2A0 && !(var_core_value_sigF909 && (var_core_value_sigDD0E = var_core_value_sigF2A0.supportedLayouts) != null && var_core_value_sigDD0E.length && !var_core_value_sigF2A0.supportedLayouts["includes"](var_core_value_sigF909))) return var_core_value_sigF2A0;
    }
    list() {
      return [...this._providers["values"]()];
    }
  },
  ai = class {
    constructor() {
      V(this, "_handlers", []);
    }
    register(var_core_value_sig116F) {
      return this._handlers["push"](var_core_value_sig116F), this._sortHandlers(), (0, a.toDisposable)(() => {
        let var_core_value_sig7BE0 = this._handlers["indexOf"](var_core_value_sig116F);
        var_core_value_sig7BE0 >= 0 && this._handlers["splice"](var_core_value_sig7BE0, 1);
      });
    }
    handleWheel(var_core_value_sigA64C) {
      for (let var_core_value_sig7D40 of this._handlers) {
        var var_core_value_sigAF94;
        if (var_core_value_sig7D40.childType === var_core_value_sigA64C.childType && !(var_core_value_sigA64C.layout && (var_core_value_sigAF94 = var_core_value_sig7D40.supportedLayouts) != null && var_core_value_sigAF94.length && !var_core_value_sig7D40.supportedLayouts["includes"](var_core_value_sigA64C.layout)) && var_core_value_sig7D40.handleWheel(var_core_value_sigA64C) === true) return true;
      }
      return false;
    }
    list() {
      return [...this._handlers];
    }
    _sortHandlers() {
      this._handlers["sort"]((var_core_value_sig6C7E, var_core_value_sig68BE) => (var_core_value_sig68BE.order ?? 0) - (var_core_value_sig6C7E.order ?? 0));
    }
  };
function oi(var_core_value_sigCE3D) {
  if (!var_core_value_sigCE3D || typeof var_core_value_sigCE3D != "object") return;
  let var_core_value_sigF82C = var_core_value_sigCE3D;
  return var_core_value_sigF82C.version === 1 && var_core_value_sigF82C.embedId && var_core_value_sigF82C.hostAnchorId ? var_core_value_sigF82C : undefined;
}
const si = new Map();
function ci(var_core_value_sig0809) {
  var var_core_value_sig0FDC, var_core_value_sig28AB;
  let {
    container: var_core_value_sigCEEB,
    content: var_core_value_sigF064,
    offset: var_core_value_sig2D5A
  } = var_core_value_sig0809;
  if (!var_core_value_sig0809.enabled) return var_core_value_sig2D5A.current = 0, var_core_value_sigF064.style["removeProperty"]("transform"), var_core_value_sigF064.style["removeProperty"]("clip-path"), (0, a.toDisposable)(() => {});
  let var_core_value_sig0D17 = var_core_value_sigCEEB.ownerDocument["defaultView"] ?? window,
    var_core_value_sigF02B = Ri(var_core_value_sig0809.viewScale),
    var_core_value_sigCC5B = false,
    var_core_value_sig6C53,
    var_core_value_sigFCAC = () => {
      var var_core_value_sig1E9F, var_core_value_sig3CC6;
      if (var_core_value_sigCC5B) return;
      let var_core_value_sig041B = var_core_value_sig0809.getChildContext();
      if (!var_core_value_sig041B) {
        var_core_value_sig2D5A.current = 0, var_core_value_sigF064.style["removeProperty"]("transform"), var_core_value_sigF064.style["removeProperty"]("clip-path");
        return;
      }
      let var_core_value_sig3610 = var_core_value_sig0809.getProvider(var_core_value_sig041B);
      if (!var_core_value_sig3610) return;
      let var_core_value_sig62F3 = wr(var_core_value_sigCEEB),
        var_core_value_sig8063 = (var_core_value_sig62F3 == null ? undefined : var_core_value_sig62F3.getBoundingClientRect()) ?? {
          height: var_core_value_sig0D17.innerHeight,
          top: 0,
          width: var_core_value_sig0D17.innerWidth
        },
        var_core_value_sig555A = var_core_value_sigCEEB.getBoundingClientRect(),
        var_core_value_sigF562 = (var_core_value_sig1E9F = li(var_core_value_sigCEEB)) == null ? undefined : var_core_value_sig1E9F.getBoundingClientRect().height,
        var_core_value_sig5913 = Li(var_core_value_sig0809.collapseViewportHeight, var_core_value_sigF562 == null ? undefined : var_core_value_sigF562 / var_core_value_sigF02B, var_core_value_sig8063.height / var_core_value_sigF02B),
        var_core_value_sigA1AF = var_core_value_sig0809.collapseWithoutChildScroll && Math.round(var_core_value_sig555A.height / var_core_value_sigF02B) >= Math.round(var_core_value_sig5913),
        var_core_value_sig6324 = Li(var_core_value_sig0809.contentHeight, var_core_value_sig555A.height / var_core_value_sigF02B),
        var_core_value_sig7EE4 = Math.min(var_core_value_sig6324, Li(var_core_value_sig0809.viewportHeight, var_core_value_sigF064.getBoundingClientRect().height / var_core_value_sigF02B, var_core_value_sig8063.height / var_core_value_sigF02B)),
        var_core_value_sigE3D7 = fi({
          collapseWithoutChildScroll: var_core_value_sigA1AF,
          contentHeight: var_core_value_sig6324,
          hostOffset: Math.max(0, (var_core_value_sig8063.top - var_core_value_sig555A.top) / var_core_value_sigF02B),
          stickyHeaderHeight: Math.max(24, ((var_core_value_sig3CC6 = var_core_value_sig3610.getStickyHeaderHeight) == null ? undefined : var_core_value_sig3CC6.call(var_core_value_sig3610, var_core_value_sig041B)) ?? 0),
          viewportHeight: var_core_value_sig7EE4
        });
      if (var_core_value_sigF064.style["transform"] = var_core_value_sigE3D7.visualOffset === 0 ? "" : "translateY(" + var_core_value_sigE3D7.visualOffset * var_core_value_sigF02B + "px)", var_core_value_sigF064.style["clipPath"] = var_core_value_sigE3D7.clipBottom === 0 ? "" : "inset(0\x200\x20" + var_core_value_sigE3D7.clipBottom * var_core_value_sigF02B + "px 0)", !ui(var_core_value_sig0809.owner["current"], "host") || var_core_value_sig0809.syncingHostFromChild["current"]) return;
      let var_core_value_sig54C6 = var_core_value_sigE3D7.childOffset - var_core_value_sig2D5A.current;
      if (Math.abs(var_core_value_sig54C6) < 0.5) return;
      var_core_value_sig2D5A.current = var_core_value_sigE3D7.childOffset, var_core_value_sig0809.invalidate();
      let var_core_value_sigE843 = new WheelEvent("wheel", {
        cancelable: false,
        clientX: var_core_value_sig555A.left + Math.min(var_core_value_sig555A.width, var_core_value_sig8063.width) / 2,
        clientY: var_core_value_sig8063.top + var_core_value_sig7EE4 * var_core_value_sigF02B / 2,
        deltaY: var_core_value_sig54C6
      });
      var_core_value_sig0809.syncingChildFromHost["current"] = true;
      try {
        var_core_value_sig3610.handleWheel({
          ...var_core_value_sig041B,
          event: var_core_value_sigE843,
          source: "host-scroll-sync",
          stage: var_core_value_sig0809.getStage(),
          viewportScrollY: var_core_value_sigE3D7.childOffset
        });
      } finally {
        var_core_value_sig0809.syncingChildFromHost["current"] = false;
      }
    },
    var_core_value_sig6740 = () => {
      var_core_value_sigFCAC(), var_core_value_sigCC5B || (var_core_value_sig6C53 = var_core_value_sig0D17.requestAnimationFrame(var_core_value_sig6740));
    },
    var_core_value_sig89A9 = () => {
      globalThis.queueMicrotask(() => {
        var_core_value_sigCC5B || var_core_value_sigFCAC();
      });
    },
    var_core_value_sig3BD1 = var_core_value_sig0809.getChildContext(),
    var_core_value_sig1B07 = var_core_value_sig3BD1 ? var_core_value_sig0809.getProvider(var_core_value_sig3BD1) : undefined,
    var_core_value_sigA093 = var_core_value_sig3BD1 && (var_core_value_sig1B07 == null || (var_core_value_sig0FDC = var_core_value_sig1B07.subscribeVerticalScroll) == null ? undefined : var_core_value_sig0FDC.call(var_core_value_sig1B07, var_core_value_sig3BD1, var_core_value_sig2EB2 => {
      var var_core_value_sig683A;
      if (var_core_value_sig0809.syncingChildFromHost["current"] || !ui(var_core_value_sig0809.owner["current"], "child")) return;
      let var_core_value_sig109B = Math.max(0, Li(var_core_value_sig0809.contentHeight) - Li(var_core_value_sig0809.viewportHeight)),
        var_core_value_sig6DD0 = mi(var_core_value_sig2EB2, 0, var_core_value_sig109B),
        var_core_value_sigB5D3 = var_core_value_sigCEEB.getBoundingClientRect(),
        var_core_value_sig6085 = ((var_core_value_sig683A = wr(var_core_value_sigCEEB)) == null ? undefined : var_core_value_sig683A.getBoundingClientRect().top) ?? 0,
        var_core_value_sig2507 = di(var_core_value_sig6DD0, mi((var_core_value_sig6085 - var_core_value_sigB5D3.top) / var_core_value_sigF02B, 0, var_core_value_sig109B), Math.max(0, (var_core_value_sigB5D3.top - var_core_value_sig6085) / var_core_value_sigF02B));
      if (Math.abs(var_core_value_sig2507) < 0.5) return;
      let var_core_value_sig5870 = new WheelEvent("wheel", {
          cancelable: false,
          clientX: var_core_value_sigB5D3.left + var_core_value_sigB5D3.width / 2,
          clientY: var_core_value_sigB5D3.top + Math.min(var_core_value_sigB5D3.height, (var_core_value_sig0809.viewportHeight ?? var_core_value_sigB5D3.height / var_core_value_sigF02B) * var_core_value_sigF02B) / 2,
          deltaY: var_core_value_sig2507 * var_core_value_sigF02B
        }),
        var_core_value_sig827F = var_core_value_sig2D5A.current,
        var_core_value_sig2452 = var_core_value_sigF064.style["transform"],
        var_core_value_sig50D0 = var_core_value_sigF064.style["clipPath"];
      var_core_value_sig2D5A.current = var_core_value_sig6DD0, var_core_value_sigF064.style["transform"] = var_core_value_sig6DD0 === 0 ? "" : "translateY(" + var_core_value_sig6DD0 * var_core_value_sigF02B + "px)", var_core_value_sig0809.syncingHostFromChild["current"] = true;
      let var_core_value_sig5EBB = false;
      try {
        var var_core_value_sig5E99;
        var_core_value_sig5EBB = ((var_core_value_sig5E99 = var_core_value_sig0809.onHostWheel) == null ? undefined : var_core_value_sig5E99.call(var_core_value_sig0809, var_core_value_sig5870, var_core_value_sig3BD1)) === true || Cr(var_core_value_sigCEEB, var_core_value_sig5870);
      } finally {
        var_core_value_sig0809.syncingHostFromChild["current"] = false;
      }
      if (!var_core_value_sig5EBB) {
        var_core_value_sig2D5A.current = var_core_value_sig827F, var_core_value_sigF064.style["transform"] = var_core_value_sig2452, var_core_value_sigF064.style["clipPath"] = var_core_value_sig50D0;
        return;
      }
      var_core_value_sig0809.invalidate();
    }));
  var_core_value_sig6C53 = var_core_value_sig0D17.requestAnimationFrame(var_core_value_sig6740);
  let var_core_value_sig4B13 = (var_core_value_sig28AB = var_core_value_sig0809.hostLayout$) == null ? undefined : var_core_value_sig28AB.subscribe(var_core_value_sig89A9);
  var_core_value_sig0D17.addEventListener("scroll", var_core_value_sigFCAC, true), var_core_value_sig0D17.addEventListener("resize", var_core_value_sigFCAC);
  let var_core_value_sigAF5A = typeof ResizeObserver > "u" ? undefined : new ResizeObserver(var_core_value_sigFCAC);
  return var_core_value_sigAF5A == null || var_core_value_sigAF5A.observe(var_core_value_sigCEEB), (0, a.toDisposable)(() => {
    var_core_value_sigCC5B = true, var_core_value_sig6C53 != null && var_core_value_sig0D17.cancelAnimationFrame(var_core_value_sig6C53), var_core_value_sigA093 == null || var_core_value_sigA093.dispose(), var_core_value_sig4B13 == null || var_core_value_sig4B13.unsubscribe(), var_core_value_sigAF5A == null || var_core_value_sigAF5A.disconnect(), var_core_value_sig0D17.removeEventListener("scroll", var_core_value_sigFCAC, true), var_core_value_sig0D17.removeEventListener("resize", var_core_value_sigFCAC), var_core_value_sigF064.style["removeProperty"]("transform"), var_core_value_sigF064.style["removeProperty"]("clip-path");
  });
}
function li(var_core_value_sigE64B) {
  let var_core_value_sigDC7E = var_core_value_sigE64B.parentElement;
  for (; var_core_value_sigDC7E && var_core_value_sigDC7E !== document.body && var_core_value_sigDC7E !== document.documentElement;) {
    if (Tr(var_core_value_sigDC7E)) return var_core_value_sigDC7E;
    var_core_value_sigDC7E = var_core_value_sigDC7E.parentElement;
  }
  return null;
}
function ui(var_core_value_sig1384, var_core_value_sig3397) {
  return var_core_value_sig1384 == null || var_core_value_sig1384 === var_core_value_sig3397;
}
function di(var_core_value_sig3918, var_core_value_sigA952, var_core_value_sigC096) {
  let var_core_value_sig2A1C = var_core_value_sig3918 - var_core_value_sigA952;
  return var_core_value_sig2A1C + (var_core_value_sig2A1C > 0 ? Math.max(0, var_core_value_sigC096) : 0);
}
function fi(var_core_value_sig2D1C) {
  let var_core_value_sig0EDB = Li(var_core_value_sig2D1C.contentHeight),
    var_core_value_sig2C5D = Math.min(var_core_value_sig0EDB, Li(var_core_value_sig2D1C.viewportHeight)),
    var_core_value_sigCC49 = Math.max(0, var_core_value_sig0EDB - var_core_value_sig2C5D);
  if (var_core_value_sigCC49 === 0 && !var_core_value_sig2D1C.collapseWithoutChildScroll) return {
    childOffset: 0,
    clipBottom: 0,
    visualOffset: 0
  };
  let var_core_value_sigFA56 = Math.max(0, var_core_value_sig2D1C.hostOffset),
    var_core_value_sig764E = mi(Li(var_core_value_sig2D1C.stickyHeaderHeight), 1, var_core_value_sig2C5D),
    var_core_value_sigBB1B = Math.max(var_core_value_sigCC49, var_core_value_sig0EDB - var_core_value_sig764E),
    var_core_value_sigB3C1 = Math.min(var_core_value_sigFA56, var_core_value_sigBB1B),
    var_core_value_sigB6FA = mi(var_core_value_sig0EDB - var_core_value_sigFA56, var_core_value_sig764E, var_core_value_sig2C5D);
  return {
    childOffset: Math.min(var_core_value_sigFA56, var_core_value_sigCC49),
    clipBottom: var_core_value_sig2C5D - var_core_value_sigB6FA,
    visualOffset: var_core_value_sigB3C1
  };
}
function pi(var_core_value_sig6C1F) {
  let var_core_value_sig0707 = Math.max(1, var_core_value_sig6C1F.bleedWidth - var_core_value_sig6C1F.bleedLeft),
    var_core_value_sig0E4C = Math.min(var_core_value_sig6C1F.contentWidth, var_core_value_sig0707);
  return {
    initialWidth: var_core_value_sig0E4C,
    maxExpansion: Math.min(var_core_value_sig6C1F.bleedLeft, Math.max(0, var_core_value_sig6C1F.contentWidth - var_core_value_sig0E4C))
  };
}
function mi(var_core_value_sig8CE7, var_core_value_sig7BBA, var_core_value_sig1B72) {
  return Math.max(var_core_value_sig7BBA, Math.min(var_core_value_sig1B72, var_core_value_sig8CE7));
}
function hi(var_core_value_sigBB0A) {
  var_core_value_sigBB0A.style["removeProperty"]("left"), var_core_value_sigBB0A.style["removeProperty"]("top"), var_core_value_sigBB0A.style["removeProperty"]("width"), var_core_value_sigBB0A.style["removeProperty"]("height"), var_core_value_sigBB0A.style["removeProperty"]("visibility"), var_core_value_sigBB0A.style["removeProperty"]("pointer-events");
}
function gi(var_core_value_sig15C5, var_core_value_sig81A0) {
  var_core_value_sig81A0 ? si.set(var_core_value_sig15C5, var_core_value_sig81A0) : si.delete(var_core_value_sig15C5);
}
function _i(var_core_value_sig1E36) {
  var var_core_value_sigFFDE;
  let {
    chrome: var_core_value_sigD7E9,
    container: var_core_value_sigA79E,
    geometryService: var_core_value_sig9630,
    stage: var_core_value_sigFA2E
  } = var_core_value_sig1E36;
  if (var_core_value_sig1E36.deferInactive && var_core_value_sigFA2E === "inactive") return var_core_value_sigD7E9.style["visibility"] = "hidden", var_core_value_sigD7E9.style["pointerEvents"] = "none", (0, a.toDisposable)(() => {
    var_core_value_sigD7E9.style["removeProperty"]("visibility"), var_core_value_sigD7E9.style["removeProperty"]("pointer-events");
  });
  let var_core_value_sigF20F = var_core_value_sigD7E9.parentElement,
    var_core_value_sigF12E = var_core_value_sigD7E9.nextSibling,
    var_core_value_sigF63F,
    var_core_value_sigA250,
    var_core_value_sig8647 = 0,
    var_core_value_sig77DC,
    var_core_value_sigEA82,
    var_core_value_sigC979,
    var_core_value_sig8E10,
    var_core_value_sigD1E7,
    var_core_value_sig240A,
    var_core_value_sig756B,
    var_core_value_sig41FB = () => {
      let var_core_value_sig3FB3 = Ei(var_core_value_sigA79E),
        var_core_value_sig0214 = Ti(var_core_value_sigA79E),
        var_core_value_sig5153 = !Di(var_core_value_sigA79E) && var_core_value_sig756B != null && var_core_value_sig77DC === var_core_value_sig0214.left && var_core_value_sigC979 === var_core_value_sig0214.width && var_core_value_sig8E10 === var_core_value_sig0214.height;
      !Di(var_core_value_sigA79E) && var_core_value_sig756B != null && !var_core_value_sig5153 && (var_core_value_sig756B = undefined);
      let var_core_value_sigF323 = var_core_value_sig5153 ? new DOMRect(var_core_value_sig0214.left, var_core_value_sig756B, var_core_value_sig0214.width, var_core_value_sig0214.height) : var_core_value_sig0214,
        var_core_value_sig0C32 = !var_core_value_sig3FB3 || var_core_value_sigF323.height >= 24,
        var_core_value_sig1D89 = xi(var_core_value_sig3FB3, var_core_value_sig0C32, var_core_value_sigF323.height);
      if (yi(var_core_value_sigA79E, var_core_value_sigD7E9, var_core_value_sig0C32, var_core_value_sigFA2E), bi(var_core_value_sigD7E9, var_core_value_sig1D89, var_core_value_sigFA2E), var_core_value_sig3FB3) {
        let var_core_value_sig04C6 = var_core_value_sigA79E.getBoundingClientRect();
        Si(var_core_value_sigD7E9, var_core_value_sigF323, Ci(var_core_value_sig04C6, var_core_value_sig1E36.docsSheetLikeLayout));
      } else wi(var_core_value_sigD7E9);
      var_core_value_sigD7E9.style["visibility"] = var_core_value_sig0C32 ? "" : "hidden", var_core_value_sigD7E9.style["pointerEvents"] = var_core_value_sig0C32 && var_core_value_sigFA2E !== "inactive" ? "" : "none", (var_core_value_sigF323.left !== var_core_value_sig77DC || var_core_value_sigF323.top !== var_core_value_sigEA82 || var_core_value_sigF323.width !== var_core_value_sigC979 || var_core_value_sigF323.height !== var_core_value_sig8E10 || var_core_value_sig0C32 !== var_core_value_sigD1E7 || var_core_value_sig1D89 !== var_core_value_sig240A) && (var_core_value_sig77DC = var_core_value_sigF323.left, var_core_value_sigEA82 = var_core_value_sigF323.top, var_core_value_sigC979 = var_core_value_sigF323.width, var_core_value_sig8E10 = var_core_value_sigF323.height, var_core_value_sigD1E7 = var_core_value_sig0C32, var_core_value_sig240A = var_core_value_sig1D89, gi(var_core_value_sigA79E, {
        height: var_core_value_sigF323.height,
        left: var_core_value_sigF323.left,
        top: var_core_value_sigF323.top,
        width: var_core_value_sigF323.width
      }), var_core_value_sigD7E9.style["left"] = var_core_value_sigF323.left + "px", var_core_value_sigD7E9.style["top"] = var_core_value_sigF323.top + "px", var_core_value_sigD7E9.style["width"] = var_core_value_sigF323.width + "px", var_core_value_sigD7E9.style["height"] = var_core_value_sigF323.height + "px");
    },
    var_core_value_sigE071 = () => {
      var_core_value_sig41FB(), var_core_value_sigF63F = window.requestAnimationFrame(var_core_value_sigE071);
    },
    var_core_value_sigEF01 = () => {
      var_core_value_sigA250 = undefined, var_core_value_sig41FB(), !(var_core_value_sig8647 <= 0) && (--var_core_value_sig8647, var_core_value_sigA250 = window.requestAnimationFrame(var_core_value_sigEF01));
    },
    var_core_value_sig6AB2 = var_core_value_sig2616 => {
      !Di(var_core_value_sigA79E) && Ai(var_core_value_sig2616) && var_core_value_sigEA82 != null && (var_core_value_sig756B = var_core_value_sigEA82), ki(var_core_value_sigA79E, var_core_value_sig2616, {
        height: var_core_value_sig8E10,
        left: var_core_value_sig77DC,
        top: var_core_value_sigEA82,
        width: var_core_value_sigC979
      }) && (var_core_value_sig9630.invalidate({
        embedId: var_core_value_sig1E36.embedId,
        reason: "wheel"
      }), var_core_value_sig8647 = Math.max(var_core_value_sig8647, 3), var_core_value_sigA250 ??= window.requestAnimationFrame(var_core_value_sigEF01));
    },
    var_core_value_sig4971 = () => {
      var_core_value_sig756B = undefined, var_core_value_sig9630.invalidate({
        embedId: var_core_value_sig1E36.embedId,
        reason: "host-scroll"
      }), var_core_value_sig8647 = Math.max(var_core_value_sig8647, 2), var_core_value_sigA250 ??= window.requestAnimationFrame(var_core_value_sigEF01);
    },
    var_core_value_sigA887 = () => {
      var_core_value_sig756B = undefined;
    };
  var_core_value_sig41FB(), document.body["appendChild"](var_core_value_sigD7E9);
  let var_core_value_sigC142 = new ResizeObserver(var_core_value_sig41FB);
  var_core_value_sigC142.observe(var_core_value_sigA79E);
  let var_core_value_sigEA08 = (var_core_value_sigFFDE = var_core_value_sig1E36.hostLayout$) == null ? undefined : var_core_value_sigFFDE.subscribe(var_core_value_sig4971);
  return window.addEventListener("pointerdown", var_core_value_sigA887, true), window.addEventListener("scroll", var_core_value_sig6AB2, true), window.addEventListener("wheel", var_core_value_sig6AB2, true), window.addEventListener("resize", var_core_value_sig6AB2), (var_core_value_sigFA2E !== "inactive" || Di(var_core_value_sigA79E)) && (var_core_value_sigF63F = window.requestAnimationFrame(var_core_value_sigE071)), (0, a.toDisposable)(() => {
    var_core_value_sigF63F != null && window.cancelAnimationFrame(var_core_value_sigF63F), var_core_value_sigA250 != null && window.cancelAnimationFrame(var_core_value_sigA250), var_core_value_sigEA08 == null || var_core_value_sigEA08.unsubscribe(), var_core_value_sigC142.disconnect(), window.removeEventListener("pointerdown", var_core_value_sigA887, true), window.removeEventListener("scroll", var_core_value_sig6AB2, true), window.removeEventListener("wheel", var_core_value_sig6AB2, true), window.removeEventListener("resize", var_core_value_sig6AB2), gi(var_core_value_sigA79E), hi(var_core_value_sigD7E9), yi(var_core_value_sigA79E, var_core_value_sigD7E9, true, "stage2"), bi(var_core_value_sigD7E9, true, "stage2"), var_core_value_sigF20F != null && var_core_value_sigF20F.isConnected ? var_core_value_sigF20F.insertBefore(var_core_value_sigD7E9, var_core_value_sigF12E) : var_core_value_sigD7E9.remove();
  });
}
function vi(var_core_value_sig1163, var_core_value_sig7BFB) {
  var var_core_value_sigE065, var_core_value_sig1B83, var_core_value_sig1F85;
  let var_core_value_sig0149 = var_core_value_sig1163.dataset["embedId"],
    var_core_value_sig9F77 = var_core_value_sig1163.ownerDocument,
    var_core_value_sig83CF = Ei(var_core_value_sig1163) ? [Ti(var_core_value_sig1163)] : [var_core_value_sig1163.getBoundingClientRect(), (var_core_value_sigE065 = var_core_value_sig1163.querySelector('[data-u-comp="embed-float-dom-content"]')) == null ? undefined : var_core_value_sigE065.getBoundingClientRect()],
    var_core_value_sigF518 = var_core_value_sig9F77.querySelector('[data-u-comp="embed-float-dom-chrome"][data-embed-id="' + var_core_value_sig0149 + "\x22]"),
    var_core_value_sigBDCA = [var_core_value_sigF518 == null || (var_core_value_sig1B83 = var_core_value_sigF518.querySelector('[data-embed-floating-menu="true"]')) == null ? undefined : var_core_value_sig1B83.getBoundingClientRect(), var_core_value_sigF518 == null || (var_core_value_sig1F85 = var_core_value_sigF518.querySelector("[data-embed-float-fullscreen-button]")) == null ? undefined : var_core_value_sig1F85.getBoundingClientRect()],
    var_core_value_sigCCF1 = Array.from(var_core_value_sig9F77.querySelectorAll("[data-embed-floating-menu-popup=\x22true\x22]")).filter(var_core_value_sig97EF => var_core_value_sig97EF.dataset["embedId"] === var_core_value_sig0149).map(var_core_value_sigA0C0 => var_core_value_sigA0C0.getBoundingClientRect());
  return [...var_core_value_sig83CF, ...var_core_value_sigBDCA, ...var_core_value_sigCCF1].filter(var_core_value_sigAD4B => !!var_core_value_sigAD4B && var_core_value_sigAD4B.width > 0 && var_core_value_sigAD4B.height > 0).some(var_core_value_sig06EA => Fi(var_core_value_sig06EA, var_core_value_sig7BFB.clientX, var_core_value_sig7BFB.clientY));
}
function yi(var_core_value_sig74C0, var_core_value_sig291B, var_core_value_sig78A6, var_core_value_sigAA99) {
  let var_core_value_sigBE21 = var_core_value_sig78A6 ? "" : "none",
    var_core_value_sig8708 = var_core_value_sig74C0.querySelector("[data-u-comp=\x22embed-float-dom-content\x22]"),
    var_core_value_sig42B4 = var_core_value_sig74C0.querySelector('[data-u-comp="embed-float-dom-live"]'),
    var_core_value_sig15BB = var_core_value_sig74C0.querySelector('[data-u-comp="embed-float-dom-live-canvas"]'),
    var_core_value_sigFDCB = var_core_value_sig74C0.querySelector('[data-u-comp="embed-float-dom-live-content"]'),
    var_core_value_sig788A = var_core_value_sig74C0.querySelector('[data-u-comp="embed-float-dom-interaction-gate"]'),
    var_core_value_sig8676 = var_core_value_sig291B == null ? undefined : var_core_value_sig291B.querySelector("[data-embed-overlay-root]"),
    var_core_value_sigDEEE = var_core_value_sig291B == null ? undefined : var_core_value_sig291B.querySelector("[data-embed-popup-root]");
  if (var_core_value_sig8676 == null || var_core_value_sig8676.style["setProperty"]("pointer-events", "none"), var_core_value_sigDEEE == null || var_core_value_sigDEEE.style["setProperty"]("pointer-events", "none"), Ei(var_core_value_sig74C0)) {
    var_core_value_sig74C0.style["setProperty"]("pointer-events", "none"), var_core_value_sig8708 == null || var_core_value_sig8708.style["setProperty"]("pointer-events", "none"), var_core_value_sig42B4 == null || var_core_value_sig42B4.style["setProperty"]("pointer-events", "none"), var_core_value_sig15BB == null || var_core_value_sig15BB.style["setProperty"]("pointer-events", var_core_value_sig78A6 ? "auto" : "none"), var_core_value_sigFDCB == null || var_core_value_sigFDCB.style["setProperty"]("pointer-events", "none"), var_core_value_sig788A == null || var_core_value_sig788A.style["setProperty"]("pointer-events", "none");
    return;
  }
  var_core_value_sig74C0.style["removeProperty"]("pointer-events"), var_core_value_sig8708 == null || var_core_value_sig8708.style["removeProperty"]("pointer-events"), var_core_value_sig42B4 == null || var_core_value_sig42B4.style["setProperty"]("pointer-events", var_core_value_sigBE21), var_core_value_sig15BB == null || var_core_value_sig15BB.style["removeProperty"]("pointer-events"), var_core_value_sigFDCB == null || var_core_value_sigFDCB.style["removeProperty"]("pointer-events"), var_core_value_sig788A == null || var_core_value_sig788A.style["setProperty"]("pointer-events", var_core_value_sigBE21);
}
function bi(var_core_value_sig990D, var_core_value_sig2E7E, var_core_value_sig5C96) {
  let var_core_value_sig2755 = var_core_value_sig2E7E && var_core_value_sig5C96 !== "stage2",
    var_core_value_sigC7AF = var_core_value_sig990D == null ? undefined : var_core_value_sig990D.querySelector("[data-embed-float-fullscreen-button]"),
    var_core_value_sigC669 = [var_core_value_sig990D == null ? undefined : var_core_value_sig990D.querySelector("[data-embed-overlay-root]"), var_core_value_sig990D == null ? undefined : var_core_value_sig990D.querySelector("[data-embed-popup-root]")];
  var_core_value_sigC7AF == null || var_core_value_sigC7AF.style["setProperty"]("visibility", var_core_value_sig2755 ? "" : "hidden"), var_core_value_sigC7AF == null || var_core_value_sigC7AF.style["setProperty"]("pointer-events", var_core_value_sig2755 ? "" : "none"), var_core_value_sigC669.forEach(var_core_value_sigF3C7 => {
    var_core_value_sigF3C7 == null || var_core_value_sigF3C7.style["setProperty"]("visibility", var_core_value_sig2E7E && var_core_value_sig5C96 === "stage2" ? "" : "hidden"), var_core_value_sigF3C7 == null || var_core_value_sigF3C7.style["setProperty"]("pointer-events", "none"), var_core_value_sig5C96 !== "stage2" && (var_core_value_sigF3C7 == null || var_core_value_sigF3C7.removeAttribute("data-embed-runtime-focus-role"), var_core_value_sigF3C7 == null || var_core_value_sigF3C7.querySelectorAll("[data-embed-runtime-focus-role]").forEach(var_core_value_sigCA05 => {
      var_core_value_sigCA05.removeAttribute("data-embed-runtime-focus-role");
    }));
  });
}
function xi(var_core_value_sigDDD1, var_core_value_sigDA7F, var_core_value_sigC174) {
  return var_core_value_sigDDD1 ? var_core_value_sigDA7F : var_core_value_sigC174 >= 40;
}
function Si(var_core_value_sig93EA, var_core_value_sigA2DF, var_core_value_sigE813) {
  let var_core_value_sig03AA = var_core_value_sigE813.left - var_core_value_sigA2DF.left,
    var_core_value_sig1055 = var_core_value_sigE813.width;
  var_core_value_sig93EA.querySelectorAll('[data-embed-floating-menu="true"]').forEach(var_core_value_sig5633 => {
    var var_core_value_sig2492;
    let var_core_value_sig39F2 = (var_core_value_sig2492 = var_core_value_sig5633.closest("[data-embed-floating-menu-entry]")) == null ? undefined : var_core_value_sig2492.dataset["embedFloatingMenuEntry"],
      var_core_value_sigAD47 = var_core_value_sig5633.dataset["uComp"] === "base-embed-floating-menu",
      var_core_value_sig1722 = var_core_value_sig5633.dataset["uComp"] === "sheet-embed-floating-menu";
    var_core_value_sig39F2 === "docs-custom-block" ? (var_core_value_sig5633.style["top"] = var_core_value_sigAD47 ? "-48px" : "-52px", var_core_value_sigAD47 ? (var_core_value_sig5633.style["setProperty"]("left", var_core_value_sig03AA + "px", "important"), var_core_value_sig5633.style["setProperty"]("right", "auto", "important"), var_core_value_sig5633.style["setProperty"]("width", var_core_value_sig1055 + "px", "important")) : var_core_value_sig1722 && (var_core_value_sig5633.style["setProperty"]("left", var_core_value_sig03AA + var_core_value_sig1055 / 2 + "px", "important"), var_core_value_sig5633.style["setProperty"]("max-width", var_core_value_sig1055 + "px"))) : (var_core_value_sigAD47 || var_core_value_sig1722) && (var_core_value_sig5633.style["top"] = "8px");
  });
}
function Ci(var_core_value_sigC30C1, var_core_value_sig1AD5) {
  if (!var_core_value_sig1AD5) return var_core_value_sigC30C1;
  let var_core_value_sigAF2C = Math.min(var_core_value_sig1AD5.contentWidth, var_core_value_sig1AD5.pageContentWidth);
  if (var_core_value_sigAF2C <= 0 || var_core_value_sigC30C1.width <= 0) return var_core_value_sigC30C1;
  let var_core_value_sigD893 = var_core_value_sigC30C1.width / var_core_value_sigAF2C;
  return new DOMRect(var_core_value_sigC30C1.left, var_core_value_sigC30C1.top, var_core_value_sig1AD5.pageContentWidth * var_core_value_sigD893, var_core_value_sigC30C1.height);
}
function wi(var_core_value_sig9C29) {
  var_core_value_sig9C29.querySelectorAll('[data-embed-floating-menu="true"]').forEach(var_core_value_sig7F86 => {
    var var_core_value_sigF69D;
    var_core_value_sig7F86.style["removeProperty"]("left"), var_core_value_sig7F86.style["removeProperty"]("top"), var_core_value_sig7F86.style["removeProperty"]("width"), var_core_value_sig7F86.style["removeProperty"]("right"), var_core_value_sig7F86.style["removeProperty"]("max-width"), (var_core_value_sigF69D = var_core_value_sig7F86.querySelector('[data-u-comp="base-embed-view-slot"]')) == null || var_core_value_sigF69D.style["removeProperty"]("margin-left");
  });
}
function Ti(var_core_value_sigBE39) {
  let var_core_value_sig6945 = Di(var_core_value_sigBE39) ? var_core_value_sigBE39.querySelector('[data-u-comp="embed-float-dom-content"]') : null,
    var_core_value_sigDED6 = var_core_value_sig6945 == null ? undefined : var_core_value_sig6945.getBoundingClientRect(),
    var_core_value_sig0A6B = var_core_value_sigBE39.getBoundingClientRect();
  return ji(var_core_value_sigDED6 && var_core_value_sigDED6.width > 0 && var_core_value_sigDED6.height > 0 ? Ei(var_core_value_sigBE39) ? Mi(var_core_value_sigDED6, var_core_value_sig0A6B.bottom) : var_core_value_sigDED6 : var_core_value_sig0A6B, var_core_value_sigBE39);
}
function Ei(var_core_value_sig2C8D) {
  return !!var_core_value_sig2C8D.closest('[data-embed-docs-custom-block-sheet-like="true"]');
}
function Di(var_core_value_sig1CC1) {
  return Ei(var_core_value_sig1CC1) || !!var_core_value_sig1CC1.closest("[data-u-comp=\x22embed-docs-custom-block\x22]");
}
function Oi(var_core_value_sigB460, var_core_value_sigBA9E, var_core_value_sigB69E, var_core_value_sig291C) {
  var_core_value_sig291C.current["forEach"](var_core_value_sig7CB9 => window.cancelAnimationFrame(var_core_value_sig7CB9)), var_core_value_sig291C.current = [], var_core_value_sigB460.invalidate({
    embedId: var_core_value_sigBA9E,
    reason: var_core_value_sigB69E
  });
  let var_core_value_sigB11D = var_core_value_sigC1D8 => {
    let var_core_value_sigCF8B = window.requestAnimationFrame(() => {
      var_core_value_sig291C.current = var_core_value_sig291C.current["filter"](var_core_value_sig24B9 => var_core_value_sig24B9 !== var_core_value_sigCF8B), var_core_value_sigB460.invalidate({
        embedId: var_core_value_sigBA9E,
        reason: var_core_value_sigB69E
      }), var_core_value_sigC1D8 > 1 && var_core_value_sigB11D(var_core_value_sigC1D8 - 1);
    });
    var_core_value_sig291C.current["push"](var_core_value_sigCF8B);
  };
  var_core_value_sigB11D(2);
}
function ki(var_core_value_sig2B33, var_core_value_sig705C, var_core_value_sigD209) {
  if (_r(var_core_value_sig705C)) return false;
  let var_core_value_sigD13E = var_core_value_sig705C == null ? undefined : var_core_value_sig705C.target;
  return !(var_core_value_sigD13E instanceof Node && var_core_value_sig2B33.contains(var_core_value_sigD13E) || var_core_value_sigD13E instanceof HTMLElement && var_core_value_sigD13E.closest('[data-embed-float-dom="true"]') || var_core_value_sig705C instanceof WheelEvent && ([...si.values()].some(var_core_value_sigCD15 => Ii(var_core_value_sigCD15, var_core_value_sig705C)) || Ii(var_core_value_sigD209, var_core_value_sig705C)));
}
function Ai(var_core_value_sig5AF8) {
  return var_core_value_sig5AF8 instanceof WheelEvent ? Math.abs(var_core_value_sig5AF8.deltaY) >= Math.abs(var_core_value_sig5AF8.deltaX) : (var_core_value_sig5AF8 == null ? undefined : var_core_value_sig5AF8.type) === "scroll";
}
function ji(var_core_value_sig22EF, var_core_value_sig23DF) {
  let var_core_value_sig1EB4 = Ni(var_core_value_sig23DF, var_core_value_sig22EF);
  if (!var_core_value_sig1EB4 && var_core_value_sig22EF.top >= 0 && var_core_value_sig22EF.left >= 0) return var_core_value_sig22EF;
  let var_core_value_sigF12B = (var_core_value_sig1EB4 == null ? undefined : var_core_value_sig1EB4.getBoundingClientRect()) ?? new DOMRect(0, 0, window.innerWidth, window.innerHeight),
    var_core_value_sig170E = Math.max(var_core_value_sig22EF.left, var_core_value_sigF12B.left),
    var_core_value_sig72DB = Math.max(var_core_value_sig22EF.top, var_core_value_sigF12B.top),
    var_core_value_sigA272 = Math.min(var_core_value_sig22EF.right, var_core_value_sigF12B.right),
    var_core_value_sig60C4 = Math.min(var_core_value_sig22EF.bottom, var_core_value_sigF12B.bottom);
  return var_core_value_sigA272 <= var_core_value_sig170E || var_core_value_sig60C4 <= var_core_value_sig72DB ? new DOMRect(var_core_value_sig170E, var_core_value_sig72DB, 0, 0) : new DOMRect(var_core_value_sig170E, var_core_value_sig72DB, var_core_value_sigA272 - var_core_value_sig170E, var_core_value_sig60C4 - var_core_value_sig72DB);
}
function Mi(var_core_value_sig4340, var_core_value_sig1F11) {
  let var_core_value_sig3A1B = Math.min(var_core_value_sig4340.bottom, var_core_value_sig1F11);
  return var_core_value_sig3A1B <= var_core_value_sig4340.top ? new DOMRect(var_core_value_sig4340.left, var_core_value_sig4340.top, 0, 0) : new DOMRect(var_core_value_sig4340.left, var_core_value_sig4340.top, var_core_value_sig4340.width, var_core_value_sig3A1B - var_core_value_sig4340.top);
}
function Ni(var_core_value_sig6543, var_core_value_sigA0E6) {
  let var_core_value_sig9F46 = var_core_value_sig6543.parentElement;
  for (; var_core_value_sig9F46 && var_core_value_sig9F46 !== document.body && var_core_value_sig9F46 !== document.documentElement;) {
    if (Tr(var_core_value_sig9F46) && !Pi(var_core_value_sig9F46, var_core_value_sigA0E6)) return var_core_value_sig9F46;
    var_core_value_sig9F46 = var_core_value_sig9F46.parentElement;
  }
  return null;
}
function Pi(var_core_value_sigF155, var_core_value_sig3165) {
  let var_core_value_sigEF93 = var_core_value_sigF155.getBoundingClientRect();
  return var_core_value_sigEF93.width <= 0 || var_core_value_sigEF93.height <= 0 || Math.abs(var_core_value_sigEF93.left - var_core_value_sig3165.left) < 1 && Math.abs(var_core_value_sigEF93.top - var_core_value_sig3165.top) < 1 && Math.abs(var_core_value_sigEF93.width - var_core_value_sig3165.width) < 1 && Math.abs(var_core_value_sigEF93.height - var_core_value_sig3165.height) < 1;
}
function Fi(var_core_value_sig6711, var_core_value_sigE204, var_core_value_sig58C8) {
  return var_core_value_sigE204 >= var_core_value_sig6711.left && var_core_value_sigE204 <= var_core_value_sig6711.right && var_core_value_sig58C8 >= var_core_value_sig6711.top && var_core_value_sig58C8 <= var_core_value_sig6711.bottom;
}
function Ii(var_core_value_sig19E9, var_core_value_sigBB40) {
  let {
    height: var_core_value_sigA2E7,
    left: var_core_value_sigB05D,
    top: var_core_value_sigD96B,
    width: var_core_value_sig5F92
  } = var_core_value_sig19E9;
  return Number.isFinite(var_core_value_sigB05D) && Number.isFinite(var_core_value_sigD96B) && Number.isFinite(var_core_value_sig5F92) && Number.isFinite(var_core_value_sigA2E7) && (var_core_value_sig5F92 ?? 0) > 0 && (var_core_value_sigA2E7 ?? 0) > 0 && var_core_value_sigBB40.clientX >= var_core_value_sigB05D && var_core_value_sigBB40.clientX <= var_core_value_sigB05D + var_core_value_sig5F92 && var_core_value_sigBB40.clientY >= var_core_value_sigD96B && var_core_value_sigBB40.clientY <= var_core_value_sigD96B + var_core_value_sigA2E7;
}
function Li(...var_core_value_sig501D) {
  return Math.max(1, var_core_value_sig501D.find(var_core_value_sig524D => typeof var_core_value_sig524D == "number" && Number.isFinite(var_core_value_sig524D) && var_core_value_sig524D > 0) ?? 1);
}
function Ri(var_core_value_sigDA2B) {
  return typeof var_core_value_sigDA2B == "number" && Number.isFinite(var_core_value_sigDA2B) && var_core_value_sigDA2B > 0 ? var_core_value_sigDA2B : 1;
}
const zi = "univer:embed-float-drag-handle:pointerdown";
function Bi(...var_core_value_sigF322) {
  return var_core_value_sigF322.filter(var_core_value_sigD7F4 => !!var_core_value_sigD7F4 && var_core_value_sigD7F4.isConnected);
}
function Vi(var_core_value_sigE133, var_core_value_sigE50A1, var_core_value_sig8383, var_core_value_sigA30F, var_core_value_sig93DB) {
  let var_core_value_sigFBEC = var_core_value_sig93DB === a.UniverInstanceType["UNIVER_SLIDE"],
    var_core_value_sig4E78 = var_core_value_sigFBEC ? () => {} : (0, c.preventBrowserZoomInContainers)(var_core_value_sigE50A1 ? [var_core_value_sigE133, var_core_value_sigE50A1] : [var_core_value_sigE133]),
    var_core_value_sigA1E7 = var_core_value_sig7B87 => {
      let var_core_value_sig933D = var_core_value_sig7B87.target instanceof HTMLElement ? var_core_value_sig7B87.target : null,
        var_core_value_sig6ACE = var_core_value_sig933D ? var_core_value_sig933D.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]') : null,
        var_core_value_sig7675 = var_core_value_sigE133.dataset["embedId"],
        var_core_value_sig21B8 = Wi(var_core_value_sigE133, var_core_value_sigE50A1, var_core_value_sig6ACE, var_core_value_sig7675),
        var_core_value_sigD545 = !!var_core_value_sig933D && !!(var_core_value_sigA30F != null && var_core_value_sigA30F.contains(var_core_value_sig933D)) && !var_core_value_sigE133.contains(var_core_value_sig933D);
      if (!(!var_core_value_sig21B8 && !var_core_value_sigD545 && !Ui(var_core_value_sigFBEC, var_core_value_sigE133, var_core_value_sigE50A1, var_core_value_sig933D)) && !(var_core_value_sigFBEC && var_core_value_sig21B8 && Hi(var_core_value_sig6ACE, var_core_value_sig933D, var_core_value_sig7B87)) && !Gi(var_core_value_sigFBEC, var_core_value_sig6ACE, var_core_value_sig933D, var_core_value_sig7B87)) {
        if (var_core_value_sigFBEC) {
          var_core_value_sig8383 == null || var_core_value_sig8383(var_core_value_sig7B87), var_core_value_sig7B87.preventDefault(), var_core_value_sig7B87.stopPropagation();
          return;
        }
        !var_core_value_sig7B87.ctrlKey && !var_core_value_sig7B87.metaKey && (var_core_value_sig8383 == null ? undefined : var_core_value_sig8383(var_core_value_sig7B87)) !== true || (var_core_value_sig7B87.preventDefault(), var_core_value_sig7B87.stopPropagation());
      }
    };
  return var_core_value_sigE133.ownerDocument["addEventListener"]("wheel", var_core_value_sigA1E7, {
    capture: true,
    passive: false
  }), () => {
    var_core_value_sigE133.ownerDocument["removeEventListener"]("wheel", var_core_value_sigA1E7, true), var_core_value_sig4E78();
  };
}
function Hi(var_core_value_sig1B4F, var_core_value_sigA6E0, var_core_value_sig5B1A) {
  return (var_core_value_sig1B4F == null ? undefined : var_core_value_sig1B4F.dataset["embedFloatingMenuPopup"]) !== "true" || var_core_value_sig5B1A.ctrlKey || var_core_value_sig5B1A.metaKey ? false : ((!var_core_value_sigA6E0 || !Ki(var_core_value_sig1B4F, var_core_value_sigA6E0, var_core_value_sig5B1A)) && var_core_value_sig5B1A.preventDefault(), var_core_value_sig5B1A.stopPropagation(), true);
}
function Ui(var_core_value_sig1004, var_core_value_sigAE05, var_core_value_sigE5C6, var_core_value_sig6FB9) {
  return var_core_value_sig1004 && (var_core_value_sigAE05.contains(var_core_value_sig6FB9) || (var_core_value_sigE5C6 == null ? undefined : var_core_value_sigE5C6.contains(var_core_value_sig6FB9)) === true);
}
function Wi(var_core_value_sig0C7F, var_core_value_sig41F0, var_core_value_sigA696, var_core_value_sig91AE) {
  return !!var_core_value_sigA696 && (var_core_value_sig0C7F.contains(var_core_value_sigA696) || (var_core_value_sig41F0 == null ? undefined : var_core_value_sig41F0.contains(var_core_value_sigA696)) === true || !!var_core_value_sig91AE && var_core_value_sigA696.dataset["embedId"] === var_core_value_sig91AE);
}
function Gi(var_core_value_sigBC03, var_core_value_sig5CD8, var_core_value_sigC707, var_core_value_sig37BD) {
  return !var_core_value_sigBC03 && !!var_core_value_sig5CD8 && !!var_core_value_sigC707 && Ki(var_core_value_sig5CD8, var_core_value_sigC707, var_core_value_sig37BD);
}
function Ki(var_core_value_sig03EA, var_core_value_sig6457, var_core_value_sig112F) {
  if (var_core_value_sig112F.ctrlKey || var_core_value_sig112F.metaKey) return false;
  let var_core_value_sig04D3 = var_core_value_sig112F.deltaX || (var_core_value_sig112F.shiftKey ? var_core_value_sig112F.deltaY : 0),
    var_core_value_sig876A = var_core_value_sig112F.shiftKey ? 0 : var_core_value_sig112F.deltaY,
    var_core_value_sigB1F9 = var_core_value_sig6457;
  for (; var_core_value_sigB1F9 && var_core_value_sig03EA.contains(var_core_value_sigB1F9);) {
    if (qi(var_core_value_sigB1F9, var_core_value_sig04D3, var_core_value_sig876A)) return true;
    if (var_core_value_sigB1F9 === var_core_value_sig03EA) break;
    var_core_value_sigB1F9 = var_core_value_sigB1F9.parentElement;
  }
  return false;
}
function qi(var_core_value_sig635D, var_core_value_sig6923, var_core_value_sig338F) {
  let var_core_value_sig7B0E = var_core_value_sig635D.ownerDocument["defaultView"];
  if (!var_core_value_sig7B0E) return false;
  let var_core_value_sigDD4B = var_core_value_sig7B0E.getComputedStyle(var_core_value_sig635D),
    var_core_value_sig5E4F = Ji(var_core_value_sigDD4B.overflowX) && Yi(var_core_value_sig635D.scrollLeft, var_core_value_sig635D.scrollWidth - var_core_value_sig635D.clientWidth, var_core_value_sig6923),
    var_core_value_sig3736 = Ji(var_core_value_sigDD4B.overflowY) && Yi(var_core_value_sig635D.scrollTop, var_core_value_sig635D.scrollHeight - var_core_value_sig635D.clientHeight, var_core_value_sig338F);
  return var_core_value_sig5E4F || var_core_value_sig3736;
}
function Ji(var_core_value_sig7D19) {
  return var_core_value_sig7D19 === "auto" || var_core_value_sig7D19 === "scroll";
}
function Yi(var_core_value_sig9E9F, var_core_value_sig4A92, var_core_value_sig652F) {
  return var_core_value_sig4A92 > 0 && (var_core_value_sig652F < 0 ? var_core_value_sig9E9F > 0 : var_core_value_sig652F > 0 && var_core_value_sig9E9F < var_core_value_sig4A92);
}
function Xi(var_core_value_sigA8CE, var_core_value_sig1941) {
  let var_core_value_sigF945 = var_core_value_sigA8CE.querySelector('[data-u-comp="hover-track"]'),
    var_core_value_sig6178 = (var_core_value_sigF945 == null ? undefined : var_core_value_sigF945.firstElementChild) instanceof HTMLElement ? var_core_value_sigF945.firstElementChild : null,
    var_core_value_sig483F = var_core_value_sig91C9 => var_core_value_sig91C9 instanceof Node && (var_core_value_sigA8CE.contains(var_core_value_sig91C9) || var_core_value_sig1941.contains(var_core_value_sig91C9)),
    var_core_value_sig2FD9 = () => {
      var var_core_value_sig64BA, var_core_value_sig3FD5;
      var_core_value_sigF945 == null || var_core_value_sigF945.style["setProperty"]("opacity", "1"), ((var_core_value_sig64BA = var_core_value_sigA8CE.ownerDocument["defaultView"]) == null || (var_core_value_sig3FD5 = var_core_value_sig64BA.matchMedia) == null ? undefined : var_core_value_sig3FD5.call(var_core_value_sig64BA, "(prefers-reduced-motion:\x20reduce)").matches) !== true && (var_core_value_sig6178 == null || var_core_value_sig6178.style["setProperty"]("animation", "univer-spin\x205s\x20linear\x20infinite"));
    },
    var_core_value_sig3DB9 = () => {
      var_core_value_sigF945 == null || var_core_value_sigF945.style["removeProperty"]("opacity"), var_core_value_sig6178 == null || var_core_value_sig6178.style["removeProperty"]("animation");
    },
    var_core_value_sig5948 = () => {
      var_core_value_sig1941.style["setProperty"]("opacity", "1"), var_core_value_sig2FD9();
    },
    var_core_value_sigFA04 = var_core_value_sig1008 => {
      var_core_value_sig483F(var_core_value_sig1008.relatedTarget) || (var_core_value_sig1941.style["removeProperty"]("opacity"), var_core_value_sig3DB9());
    };
  return var_core_value_sigA8CE.addEventListener("pointerenter", var_core_value_sig5948), var_core_value_sigA8CE.addEventListener("pointerleave", var_core_value_sigFA04), var_core_value_sig1941.addEventListener("pointerenter", var_core_value_sig5948), var_core_value_sig1941.addEventListener("pointerleave", var_core_value_sigFA04), (var_core_value_sigA8CE.matches(":hover") || var_core_value_sig1941.matches(":hover")) && var_core_value_sig5948(), () => {
    var_core_value_sigA8CE.removeEventListener("pointerenter", var_core_value_sig5948), var_core_value_sigA8CE.removeEventListener("pointerleave", var_core_value_sigFA04), var_core_value_sig1941.removeEventListener("pointerenter", var_core_value_sig5948), var_core_value_sig1941.removeEventListener("pointerleave", var_core_value_sigFA04), var_core_value_sig1941.style["removeProperty"]("opacity"), var_core_value_sig3DB9();
  };
}
function Zi(var_core_value_sig3986, var_core_value_sig1950) {
  if (var_core_value_sig1950 instanceof HTMLCanvasElement && var_core_value_sig3986.some(var_core_value_sigB9F4 => var_core_value_sigB9F4.contains(var_core_value_sig1950))) return var_core_value_sig1950;
  for (let var_core_value_sig2D23 of var_core_value_sig3986) {
    let var_core_value_sig2F2B = var_core_value_sig2D23.querySelector("canvas");
    if (var_core_value_sig2F2B) return var_core_value_sig2F2B;
  }
  return null;
}
function Qi(var_core_value_sigE263, var_core_value_sig86D3 = false) {
  return var_core_value_sigE263 !== a.UniverInstanceType["UNIVER_SHEET"] && var_core_value_sigE263 !== a.UniverInstanceType["UNIVER_DOC"] && (var_core_value_sig86D3 || var_core_value_sigE263 !== a.UniverInstanceType["UNIVER_BASE"]);
}
function $i(var_core_value_sigE5A5) {
  let var_core_value_sig1ABB = ea(var_core_value_sigE5A5);
  return var_core_value_sig1ABB === "child-editor" || var_core_value_sig1ABB === "child-popup" || var_core_value_sig1ABB === "floating-menu";
}
function ea(var_core_value_sig8781) {
  var var_core_value_sig360F;
  if (!(var_core_value_sig8781 instanceof HTMLElement)) return;
  let var_core_value_sig79D71 = (var_core_value_sig360F = var_core_value_sig8781.closest("[data-embed-runtime-focus-role]")) == null ? undefined : var_core_value_sig360F.getAttribute(G);
  return ua(var_core_value_sig79D71) ? var_core_value_sig79D71 : undefined;
}
function ta(var_core_value_sigE9A1, var_core_value_sigCAD1, var_core_value_sig3105, var_core_value_sig4D9D, var_core_value_sig6D0D) {
  if (var_core_value_sig6D0D !== "stage2" || !var_core_value_sig3105 || !var_core_value_sig4D9D) return;
  let var_core_value_sig5BA6 = new Map(),
    var_core_value_sig33C8 = () => {
      let var_core_value_sigF2E0 = new Set([var_core_value_sig4D9D, ...var_core_value_sigCAD1.listElements(var_core_value_sig3105)]);
      var_core_value_sig5BA6.forEach((var_core_value_sig70AF, var_core_value_sigD04E) => {
        var_core_value_sigF2E0.has(var_core_value_sigD04E) || (var_core_value_sig70AF.dispose(), var_core_value_sig5BA6.delete(var_core_value_sigD04E));
      }), var_core_value_sigF2E0.forEach(var_core_value_sigB99B => {
        var_core_value_sig5BA6.has(var_core_value_sigB99B) || var_core_value_sigE9A1.checkElementInCurrentContainers(var_core_value_sigB99B) || var_core_value_sig5BA6.set(var_core_value_sigB99B, var_core_value_sigE9A1.registerContainerElement(var_core_value_sigB99B));
      });
    };
  var_core_value_sig33C8();
  let var_core_value_sig851E = var_core_value_sigCAD1.runtimeFocusChanged$["subscribe"](var_core_value_sig33C8);
  return (0, a.toDisposable)(() => {
    var_core_value_sig851E.unsubscribe(), var_core_value_sig5BA6.forEach(var_core_value_sig5A75 => var_core_value_sig5A75.dispose()), var_core_value_sig5BA6.clear();
  });
}
function na(var_core_value_sigD0FB) {
  let var_core_value_sig0A5F = var_core_value_sig9214 => {
      var var_core_value_sigC8B1, var_core_value_sig35E2;
      let var_core_value_sig9B13 = var_core_value_sig9214.target,
        var_core_value_sig60E6 = ((var_core_value_sigC8B1 = var_core_value_sigD0FB.isExternalHostInteraction) == null ? undefined : var_core_value_sigC8B1.call(var_core_value_sigD0FB, var_core_value_sig9214)) ?? false;
      if (var_core_value_sigD0FB.floatingActiveService["getStage"](var_core_value_sigD0FB.embedId) === "inactive") return;
      var_core_value_sig60E6 && (var_core_value_sigD0FB.externalHostInteractionUntil["current"] = Date.now() + var_core_value_sigD0FB.graceMs);
      let var_core_value_sig1F6E = var_core_value_sigD0FB.focusCoordinator["containsElement"](var_core_value_sigD0FB.embedId, var_core_value_sig9B13, var_core_value_sig9214) || var_core_value_sigD0FB.interactionBoundaryService["contains"](var_core_value_sigD0FB.embedId, var_core_value_sig9B13, var_core_value_sig9214);
      var_core_value_sig1F6E && (var_core_value_sigD0FB.ownedPointerInteractionUntil["current"] = Date.now() + var_core_value_sigD0FB.graceMs), !(!var_core_value_sig9B13 || var_core_value_sigD0FB.container["contains"](var_core_value_sig9B13) || (var_core_value_sig35E2 = var_core_value_sigD0FB.chrome) != null && var_core_value_sig35E2.contains(var_core_value_sig9B13) || var_core_value_sig9B13.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]') || var_core_value_sig1F6E || var_core_value_sig60E6 || vi(var_core_value_sigD0FB.container, var_core_value_sig9214)) && var_core_value_sigD0FB.activationService["clearFloating"](var_core_value_sigD0FB.embedId, var_core_value_sigD0FB.hostUnitId);
    },
    var_core_value_sig53D2 = var_core_value_sig7A6B => {
      var var_core_value_sig20F6;
      let var_core_value_sigAEE0 = var_core_value_sig7A6B.target,
        var_core_value_sig72B6 = var_core_value_sigD0FB.container["ownerDocument"] ?? (var_core_value_sigAEE0 == null ? undefined : var_core_value_sigAEE0.ownerDocument),
        var_core_value_sig43E8 = var_core_value_sigD0FB.focusCoordinator["hasBlockingChildFocusLease"](var_core_value_sigD0FB.embedId, {
          ignoreOwners: var_core_value_sigD0FB.runtimeFocusOwners
        });
      var_core_value_sigD0FB.floatingActiveService["getStage"](var_core_value_sigD0FB.embedId) !== "inactive" && (!var_core_value_sigAEE0 || var_core_value_sig43E8 || Date.now() < var_core_value_sigD0FB.ownedPointerInteractionUntil["current"] || Date.now() < var_core_value_sigD0FB.externalHostInteractionUntil["current"] || var_core_value_sigD0FB.interactionBoundaryService["hasRecentInteractionFor"](var_core_value_sigD0FB.embedId, var_core_value_sig72B6) || !sa(var_core_value_sigAEE0) || var_core_value_sigD0FB.container["contains"](var_core_value_sigAEE0) || (var_core_value_sig20F6 = var_core_value_sigD0FB.chrome) != null && var_core_value_sig20F6.contains(var_core_value_sigAEE0) || var_core_value_sigAEE0.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]') || var_core_value_sigD0FB.focusCoordinator["containsElement"](var_core_value_sigD0FB.embedId, var_core_value_sigAEE0, var_core_value_sig7A6B) || var_core_value_sigD0FB.interactionBoundaryService["contains"](var_core_value_sigD0FB.embedId, var_core_value_sigAEE0, var_core_value_sig7A6B) || var_core_value_sigD0FB.activationService["clearFloating"](var_core_value_sigD0FB.embedId, var_core_value_sigD0FB.hostUnitId));
    };
  return document.addEventListener("pointerdown", var_core_value_sig0A5F, true), document.addEventListener("focusin", var_core_value_sig53D2, true), (0, a.toDisposable)(() => {
    document.removeEventListener("pointerdown", var_core_value_sig0A5F, true), document.removeEventListener("focusin", var_core_value_sig53D2, true);
  });
}
function ra(var_core_value_sigEDB2) {
  let var_core_value_sig71CD,
    var_core_value_sig6687 = () => {
      var_core_value_sig71CD = undefined;
    },
    var_core_value_sigCFDD = var_core_value_sigB1FB => {
      let var_core_value_sig6876 = ia(var_core_value_sigEDB2.embedModelService["getDescriptor"](var_core_value_sigEDB2.data["hostUnitId"], var_core_value_sigEDB2.data["embedId"]), var_core_value_sigEDB2.data);
      if (!(var_core_value_sig6876 != null && var_core_value_sig6876.childUnitId)) return;
      let var_core_value_sig55FB = var_core_value_sigB1FB.target;
      var_core_value_sig55FB != null && var_core_value_sig55FB.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]') || var_core_value_sigEDB2.floatingActiveService["getStage"](var_core_value_sigEDB2.data["embedId"]) !== "stage2" && (var_core_value_sig71CD = {
        button: var_core_value_sigB1FB.button ?? 0,
        dragStarted: false,
        moved: false,
        pointerId: var_core_value_sigB1FB.pointerId,
        startedAt: Date.now(),
        startX: var_core_value_sigB1FB.clientX,
        startY: var_core_value_sigB1FB.clientY
      });
    },
    var_core_value_sigDC0A = var_core_value_sig2870 => {
      if (!var_core_value_sig71CD || var_core_value_sig71CD.pointerId !== var_core_value_sig2870.pointerId || Math.hypot(var_core_value_sig2870.clientX - var_core_value_sig71CD.startX, var_core_value_sig2870.clientY - var_core_value_sig71CD.startY) <= 4) return;
      var_core_value_sig71CD.moved = true;
      let var_core_value_sigC865 = ir({
        interactionFlow: var_core_value_sigEDB2.interactionFlow,
        stage: var_core_value_sigEDB2.floatingActiveService["getStage"](var_core_value_sigEDB2.data["embedId"])
      });
      !var_core_value_sigEDB2.enableStage1BodyDrag || var_core_value_sig71CD.dragStarted || !var_core_value_sigC865.allowHostBodyDrag || (var_core_value_sig71CD.dragStarted = true, document.dispatchEvent(new CustomEvent(zi, {
        detail: {
          button: var_core_value_sig71CD.button,
          clientX: var_core_value_sig71CD.startX,
          clientY: var_core_value_sig71CD.startY,
          embedId: var_core_value_sigEDB2.data["embedId"],
          hostAnchorId: var_core_value_sigEDB2.data["hostAnchorId"],
          hostUnitId: var_core_value_sigEDB2.data["hostUnitId"],
          pointerId: var_core_value_sig71CD.pointerId
        }
      })));
    },
    var_core_value_sig644F = var_core_value_sig6788 => {
      let var_core_value_sig7B1F = var_core_value_sig71CD;
      if (var_core_value_sig71CD = undefined, !var_core_value_sig7B1F || var_core_value_sig7B1F.pointerId !== var_core_value_sig6788.pointerId || var_core_value_sig7B1F.moved || Date.now() - var_core_value_sig7B1F.startedAt > 500) return;
      let var_core_value_sig7E51 = ia(var_core_value_sigEDB2.embedModelService["getDescriptor"](var_core_value_sigEDB2.data["hostUnitId"], var_core_value_sigEDB2.data["embedId"]), var_core_value_sigEDB2.data);
      if (!(var_core_value_sig7E51 != null && var_core_value_sig7E51.childUnitId)) return;
      let var_core_value_sigAE87 = var_core_value_sigEDB2.floatingActiveService["getStage"](var_core_value_sigEDB2.data["embedId"]);
      if (var_core_value_sigAE87 !== "stage2") {
        if (var_core_value_sigAE87 === "stage1") {
          var_core_value_sigEDB2.activationService["activateFloating"](var_core_value_sig7E51, "stage2", {
            portalContainer: var_core_value_sigEDB2.popupRoot
          });
          return;
        }
        if (var_core_value_sigEDB2.interactionFlow === "doc-block") {
          var_core_value_sigEDB2.acquireStage2SessionLease(), var_core_value_sigEDB2.activationService["activateFloating"](var_core_value_sig7E51, "stage2", {
            portalContainer: var_core_value_sigEDB2.popupRoot
          }), var_core_value_sigEDB2.releaseStage2SessionLeaseIfActivationDoesNotStick();
          return;
        }
        var_core_value_sigEDB2.activationService["activateFloating"](var_core_value_sig7E51, "stage1");
      }
    };
  return var_core_value_sigEDB2.gate["addEventListener"]("pointerdown", var_core_value_sigCFDD, true), var_core_value_sigEDB2.gate["addEventListener"]("pointermove", var_core_value_sigDC0A, true), var_core_value_sigEDB2.gate["addEventListener"]("pointerup", var_core_value_sig644F, true), var_core_value_sigEDB2.gate["addEventListener"]("pointercancel", var_core_value_sig6687, true), (0, a.toDisposable)(() => {
    var_core_value_sigEDB2.gate["removeEventListener"]("pointerdown", var_core_value_sigCFDD, true), var_core_value_sigEDB2.gate["removeEventListener"]("pointermove", var_core_value_sigDC0A, true), var_core_value_sigEDB2.gate["removeEventListener"]("pointerup", var_core_value_sig644F, true), var_core_value_sigEDB2.gate["removeEventListener"]("pointercancel", var_core_value_sig6687, true);
  });
}
function ia(var_core_value_sigDB71, var_core_value_sig46F8) {
  return !var_core_value_sigDB71 || var_core_value_sigDB71.childUnitId || !var_core_value_sig46F8.childUnitId || var_core_value_sig46F8.childType == null ? var_core_value_sigDB71 : {
    ...var_core_value_sigDB71,
    childType: var_core_value_sig46F8.childType,
    childUnitId: var_core_value_sig46F8.childUnitId
  };
}
function aa(var_core_value_sig1F6D) {
  let var_core_value_sig077A = () => {
      let var_core_value_sigFD51 = var_core_value_sig1F6D.liveRoot["ownerDocument"].activeElement;
      return !!var_core_value_sigFD51 && var_core_value_sig1F6D.getRuntimeRoots().some(var_core_value_sig7BAF => var_core_value_sig7BAF.contains(var_core_value_sigFD51));
    },
    var_core_value_sig968D = (var_core_value_sigF6D6, var_core_value_sigCF95 = false, var_core_value_sig8793 = false) => {
      var_core_value_sig1F6D.data["embedId"] && var_core_value_sig1F6D.floatingActiveService["getStage"](var_core_value_sig1F6D.data["embedId"]) !== "stage2" || Qi(var_core_value_sig1F6D.data["childType"], var_core_value_sig8793) && (var_core_value_sig1F6D.focusCoordinator["hasBlockingChildFocusLease"](var_core_value_sig1F6D.data["embedId"], {
        ignoreOwners: var_core_value_sig1F6D.runtimeFocusOwners
      }) || !var_core_value_sigCF95 && var_core_value_sig077A() || (var_core_value_sigF6D6.hasAttribute("tabindex") || (var_core_value_sigF6D6.tabIndex = -1), var_core_value_sigF6D6.focus({
        preventScroll: true
      })));
    },
    var_core_value_sig1441 = var_core_value_sig1BE7 => {
      let var_core_value_sig34F8 = var_core_value_sig1F6D.data["embedId"] ? var_core_value_sig1F6D.floatingActiveService["getStage"](var_core_value_sig1F6D.data["embedId"]) : "inactive";
      if (var_core_value_sig1F6D.data["embedId"] && var_core_value_sig34F8 !== "stage2") {
        if (var_core_value_sig1F6D.interactionFlow !== "doc-block" || !var_core_value_sig1F6D.data["hostUnitId"]) return;
        let var_core_value_sig8F69 = ia(var_core_value_sig1F6D.embedModelService["getDescriptor"](var_core_value_sig1F6D.data["hostUnitId"], var_core_value_sig1F6D.data["embedId"]), var_core_value_sig1F6D.data);
        if (!(var_core_value_sig8F69 != null && var_core_value_sig8F69.childUnitId)) return;
        var_core_value_sig1F6D.acquireStage2SessionLease(), var_core_value_sig1F6D.activationService["activateFloating"](var_core_value_sig8F69, "stage2", {
          portalContainer: var_core_value_sig1F6D.popupRoot
        }), var_core_value_sig1F6D.releaseStage2SessionLeaseIfActivationDoesNotStick();
      }
      if ($i(var_core_value_sig1BE7.target) || var_core_value_sig1F6D.focusCoordinator["hasBlockingChildFocusLease"](var_core_value_sig1F6D.data["embedId"], {
        ignoreOwners: var_core_value_sig1F6D.runtimeFocusOwners
      })) return;
      if (var_core_value_sig1F6D.data["hostUnitId"] && var_core_value_sig1F6D.data["embedId"]) {
        let var_core_value_sig6884 = ia(var_core_value_sig1F6D.embedModelService["getDescriptor"](var_core_value_sig1F6D.data["hostUnitId"], var_core_value_sig1F6D.data["embedId"]), var_core_value_sig1F6D.data);
        (var_core_value_sig6884 == null ? undefined : var_core_value_sig6884.childUnitId) != null && var_core_value_sig6884.childType != null && var_core_value_sig1F6D.activationService["focusFloatingRuntime"](var_core_value_sig6884);
      }
      let var_core_value_sig9F3D = Zi(var_core_value_sig1F6D.getRuntimeRoots(), var_core_value_sig1BE7.target);
      var_core_value_sig9F3D && var_core_value_sig968D(var_core_value_sig9F3D, true, var_core_value_sig1BE7.target === var_core_value_sig9F3D);
    };
  return var_core_value_sig1F6D.liveRoot["addEventListener"]("pointerdown", var_core_value_sig1441, true), (0, a.toDisposable)(() => var_core_value_sig1F6D.liveRoot["removeEventListener"]("pointerdown", var_core_value_sig1441, true));
}
function oa(var_core_value_sigEF7F) {
  let var_core_value_sig1142 = var_core_value_sigEF7F.liveRoot["ownerDocument"],
    var_core_value_sig0CA2,
    var_core_value_sig8FF7 = () => {
      var_core_value_sig0CA2 != null && (globalThis.clearTimeout(var_core_value_sig0CA2), var_core_value_sig0CA2 = undefined);
    },
    var_core_value_sig02FD = () => {
      var var_core_value_sig785C;
      var_core_value_sig8FF7(), (var_core_value_sig785C = var_core_value_sigEF7F.pointerLease["current"]) == null || var_core_value_sig785C.dispose(), var_core_value_sigEF7F.pointerLease["current"] = undefined;
    },
    var_core_value_sig1A37 = () => {
      globalThis.queueMicrotask(() => {
        var_core_value_sigEF7F.verticalScrollOwner["current"] = undefined;
      }), var_core_value_sig8FF7(), var_core_value_sig0CA2 = globalThis.setTimeout(() => {
        var var_core_value_sig066E;
        var_core_value_sig0CA2 = undefined, (var_core_value_sig066E = var_core_value_sigEF7F.pointerLease["current"]) == null || var_core_value_sig066E.dispose(), var_core_value_sigEF7F.pointerLease["current"] = undefined;
      }, var_core_value_sigEF7F.graceMs);
    },
    var_core_value_sigF87C = var_core_value_sig6537 => {
      var_core_value_sig02FD(), var_core_value_sigEF7F.pointerLease["current"] = var_core_value_sigEF7F.focusCoordinator["acquireLease"]({
        childType: var_core_value_sigEF7F.data["childType"],
        childUnitId: var_core_value_sigEF7F.data["childUnitId"],
        embedId: var_core_value_sigEF7F.data["embedId"],
        hostUnitId: var_core_value_sigEF7F.data["hostUnitId"],
        owner: "runtime-pointer",
        role: var_core_value_sig6537
      });
    },
    var_core_value_sig563A = () => {
      var_core_value_sigEF7F.floatingActiveService["getStage"](var_core_value_sigEF7F.data["embedId"]) === "stage2" && var_core_value_sigF87C("child-editor");
    },
    var_core_value_sig8341 = var_core_value_sig72BB => {
      let var_core_value_sigC0DF = var_core_value_sig72BB.target,
        var_core_value_sig94B7 = var_core_value_sigC0DF instanceof Node && var_core_value_sigEF7F.liveRoot["contains"](var_core_value_sigC0DF) || var_core_value_sigEF7F.focusCoordinator["containsElement"](var_core_value_sigEF7F.data["embedId"], var_core_value_sigC0DF, var_core_value_sig72BB) || var_core_value_sigEF7F.interactionBoundaryService["contains"](var_core_value_sigEF7F.data["embedId"], var_core_value_sigC0DF, var_core_value_sig72BB);
      var_core_value_sigEF7F.verticalScrollOwner["current"] = var_core_value_sig94B7 ? "child" : "host";
    },
    var_core_value_sig1BAA = var_core_value_sig9865 => {
      if (var_core_value_sigEF7F.floatingActiveService["getStage"](var_core_value_sigEF7F.data["embedId"]) !== "stage2" || !(var_core_value_sigEF7F.focusCoordinator["containsElement"](var_core_value_sigEF7F.data["embedId"], var_core_value_sig9865.target, var_core_value_sig9865) || var_core_value_sigEF7F.interactionBoundaryService["contains"](var_core_value_sigEF7F.data["embedId"], var_core_value_sig9865.target, var_core_value_sig9865))) return;
      var_core_value_sigEF7F.ownedPointerInteractionUntil["current"] = Date.now() + var_core_value_sigEF7F.graceMs;
      let var_core_value_sigA09D = ea(var_core_value_sig9865.target) ?? "child-editor";
      var_core_value_sigF87C(var_core_value_sigA09D === "runtime" || var_core_value_sigA09D === "child-session" || var_core_value_sigA09D === "floating-menu" ? "child-editor" : var_core_value_sigA09D);
    };
  return var_core_value_sigEF7F.liveRoot["addEventListener"]("pointerdown", var_core_value_sig563A, true), var_core_value_sig1142.addEventListener("pointerdown", var_core_value_sig8341, true), var_core_value_sig1142.addEventListener("pointerdown", var_core_value_sig1BAA, true), var_core_value_sig1142.addEventListener("pointerup", var_core_value_sig1A37, true), var_core_value_sig1142.addEventListener("pointercancel", var_core_value_sig1A37, true), (0, a.toDisposable)(() => {
    var_core_value_sigEF7F.liveRoot["removeEventListener"]("pointerdown", var_core_value_sig563A, true), var_core_value_sig1142.removeEventListener("pointerdown", var_core_value_sig8341, true), var_core_value_sig1142.removeEventListener("pointerdown", var_core_value_sig1BAA, true), var_core_value_sig1142.removeEventListener("pointerup", var_core_value_sig1A37, true), var_core_value_sig1142.removeEventListener("pointercancel", var_core_value_sig1A37, true), var_core_value_sigEF7F.verticalScrollOwner["current"] = undefined, var_core_value_sig02FD();
  });
}
function sa(var_core_value_sigF583) {
  return var_core_value_sigF583.id === "univer-doc-main-canvas" || var_core_value_sigF583.id["startsWith"]("__editor_docs-") || var_core_value_sigF583.id["startsWith"]("univer-doc-selection-container-docs-") || var_core_value_sigF583.closest('#univer-doc-main-canvas, [id^="__editor_docs-"], [id^="univer-doc-selection-container-docs-"]') != null;
}
function ca(var_core_value_sig0BFC, var_core_value_sigBA64) {
  if (!var_core_value_sig0BFC || var_core_value_sigBA64.length === 0) return;
  let var_core_value_sig9C5D = var_core_value_sigBA64[0].ownerDocument["activeElement"];
  var_core_value_sig9C5D instanceof HTMLElement && (var_core_value_sigBA64.some(var_core_value_sig1429 => var_core_value_sig1429.contains(var_core_value_sig9C5D)) || var_core_value_sig9C5D.closest('[data-embed-interaction-boundary-owner="' + var_core_value_sig0BFC + "\x22]") != null) && var_core_value_sig9C5D.blur();
}
function la(var_core_value_sig5B04) {
  let {
      ownerDocument: var_core_value_sig3D58,
      restore: var_core_value_sigED20,
      shouldRestore: var_core_value_sigF90F,
      timeoutMs: var_core_value_sigEBEE = 1000
    } = var_core_value_sig5B04,
    var_core_value_sigA547,
    var_core_value_sigE634 = var_core_value_sigA339 => {
      var_core_value_sigF90F(var_core_value_sigA339.target) && var_core_value_sigED20();
    },
    var_core_value_sig06E6 = () => {
      var_core_value_sig3D58.removeEventListener("focusin", var_core_value_sigE634, true), var_core_value_sig3D58.removeEventListener("pointerdown", var_core_value_sig06E6, true), var_core_value_sigA547 != null && (globalThis.clearTimeout(var_core_value_sigA547), var_core_value_sigA547 = undefined);
    };
  return var_core_value_sig3D58.addEventListener("focusin", var_core_value_sigE634, true), var_core_value_sig3D58.addEventListener("pointerdown", var_core_value_sig06E6, true), var_core_value_sigA547 = globalThis.setTimeout(var_core_value_sig06E6, var_core_value_sigEBEE), (0, a.toDisposable)(var_core_value_sig06E6);
}
function ua(var_core_value_sig5270) {
  return var_core_value_sig5270 === "runtime" || var_core_value_sig5270 === "child-session" || var_core_value_sig5270 === "child-editor" || var_core_value_sig5270 === "child-popup" || var_core_value_sig5270 === "floating-menu";
}
function da(var_core_value_sigC76A) {
  let {
      children: var_core_value_sig9D84,
      placement: var_core_value_sig29F7 = "top",
      title: var_core_value_sigDBEF
    } = var_core_value_sigC76A,
    [var_core_value_sig590D, var_core_value_sig31F0] = (0, d.useState)(false),
    var_core_value_sig0A86 = (0, d.useRef)(null),
    var_core_value_sig87E9 = (0, d.useCallback)(() => {
      var_core_value_sig0A86.current !== null && (clearTimeout(var_core_value_sig0A86.current), var_core_value_sig0A86.current = null);
    }, []),
    var_core_value_sigEB10 = var_core_value_sig832A => {
      var_core_value_sig87E9(), var_core_value_sig832A ? var_core_value_sig0A86.current = setTimeout(() => var_core_value_sig31F0(true), 100) : var_core_value_sig31F0(false);
    };
  return (0, d.useEffect)(() => var_core_value_sig87E9, [var_core_value_sig87E9]), (0, m.jsx)(l.Tooltip, {
    title: var_core_value_sigDBEF,
    placement: var_core_value_sig29F7,
    visible: var_core_value_sig590D,
    onVisibleChange: var_core_value_sigEB10,
    children: (0, m.jsx)("span", {
      className: "univer-inline-flex univer-max-w-full univer-items-center",
      onFocus: var_core_value_sig7945 => var_core_value_sig7945.stopPropagation(),
      onPointerDown: () => var_core_value_sigEB10(false),
      children: var_core_value_sig9D84
    })
  });
}
function fa(var_core_value_sig50B5) {
  let {
      hostUnitId: var_core_value_sig8A28,
      embedId: var_core_value_sig4AEF,
      className: var_core_value_sigD64C,
      variant: var_core_value_sig8E15 = "float"
    } = var_core_value_sig50B5,
    var_core_value_sig5EB1 = (0, d.useRef)(null),
    var_core_value_sig5B68 = (0, c.useDependency)(t.EmbedModelService),
    var_core_value_sig6EF5 = (0, c.useDependency)(Gt),
    var_core_value_sig5FE3 = (0, c.useDependency)(Zn),
    var_core_value_sig71B3 = (0, c.useDependency)(a.LocaleService).t("embed-ui.fullscreen.enter"),
    var_core_value_sig9860 = (0, d.useCallback)(var_core_value_sig1166 => {
      var_core_value_sig1166.preventDefault(), var_core_value_sig1166.stopPropagation(), !(!var_core_value_sig8A28 || !var_core_value_sig4AEF) && pa({
        hostUnitId: var_core_value_sig8A28,
        embedId: var_core_value_sig4AEF,
        activationService: var_core_value_sig6EF5,
        embedModelService: var_core_value_sig5B68,
        fullscreenService: var_core_value_sig5FE3
      });
    }, [var_core_value_sig6EF5, var_core_value_sig4AEF, var_core_value_sig5B68, var_core_value_sig5FE3, var_core_value_sig8A28]);
  return (0, d.useEffect)(() => {
    let var_core_value_sig7ABC = var_core_value_sig5EB1.current;
    if (!var_core_value_sig7ABC) return;
    let var_core_value_sigF686 = var_core_value_sig9B0D => {
      var_core_value_sig9B0D.stopPropagation();
    };
    return var_core_value_sig7ABC.addEventListener("pointerdown", var_core_value_sigF686), var_core_value_sig7ABC.addEventListener("click", var_core_value_sig9860), () => {
      var_core_value_sig7ABC.removeEventListener("pointerdown", var_core_value_sigF686), var_core_value_sig7ABC.removeEventListener("click", var_core_value_sig9860);
    };
  }, [var_core_value_sig9860, var_core_value_sig8E15]), var_core_value_sig8E15 === "menu" ? (0, m.jsx)(da, {
    title: var_core_value_sig71B3,
    children: (0, m.jsx)(l.Button, {
      ref: var_core_value_sig5EB1,
      type: "button",
      size: "small",
      variant: "ghost",
      className: (0, l.clsx)("univer-size-6 univer-p-0", var_core_value_sigD64C),
      "aria-label": var_core_value_sig71B3,
      children: (0, m.jsx)(u.ExpandIcon, {})
    })
  }) : (0, m.jsx)("button", {
    ref: var_core_value_sig5EB1,
    type: "button",
    className: (0, l.clsx)("univer-absolute\x20univer-right-2\x20univer-top-2\x20univer-z-10\x20univer-inline-flex\x20univer-size-8\x20univer-cursor-pointer\x20univer-appearance-none\x20univer-items-center\x20univer-justify-center\x20univer-rounded-md\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-text-white\x20univer-opacity-0\x20univer-transition-opacity\x20univer-duration-150\x20before:univer-absolute\x20before:univer-inset-0\x20before:univer-rounded-md\x20before:univer-bg-primary-600\x20before:univer-opacity-[0.45]\x20before:univer-transition-opacity\x20before:univer-duration-150\x20before:univer-content-[\x27\x27]\x20hover:before:univer-opacity-60\x20focus-visible:univer-opacity-100\x20focus-visible:univer-outline-none\x20focus-visible:univer-ring-2\x20focus-visible:univer-ring-primary-600\x20dark:!univer-text-gray-900", var_core_value_sigD64C),
    "data-embed-float-fullscreen-button": "true",
    title: var_core_value_sig71B3,
    "aria-label": var_core_value_sig71B3,
    children: (0, m.jsx)(u.ExpandIcon, {
      className: "univer-relative\x20univer-z-10\x20univer-size-[18px]\x20univer-drop-shadow-sm",
      "aria-hidden": "true"
    })
  });
}
function pa(var_core_value_sigAEF6) {
  var var_core_value_sig8954;
  let var_core_value_sig44DA = var_core_value_sigAEF6.embedModelService["getDescriptor"](var_core_value_sigAEF6.hostUnitId, var_core_value_sigAEF6.embedId);
  return !(var_core_value_sig44DA != null && var_core_value_sig44DA.childUnitId) || var_core_value_sig44DA.childType == null ? false : ((var_core_value_sig8954 = var_core_value_sigAEF6.activationService) == null || var_core_value_sig8954.clearFloating(var_core_value_sigAEF6.embedId, var_core_value_sigAEF6.hostUnitId), var_core_value_sigAEF6.fullscreenService["enter"](var_core_value_sig44DA), true);
}
const ma = "stage2-runtime",
  ha = "doc-block-stage2-runtime",
  ga = [ma, ha];
function _a(var_core_value_sig2956) {
  var var_core_value_sig744C, var_core_value_sigE2E8, var_core_value_sig63A1;
  let {
      data: var_core_value_sigDE3F,
      deferInactiveFloatingChrome: var_core_value_sigBD2F,
      docsCustomBlockLayout: var_core_value_sig810B,
      enableStage1BodyDrag: var_core_value_sig60D0,
      floatingChromeZIndex: var_core_value_sig8A14,
      hostFloatDomLayout$: var_core_value_sigDA56,
      initialStage: var_core_value_sigD25D,
      interactionFlow: var_core_value_sig29A2 = "floating-stage",
      isExternalHostInteraction: var_core_value_sigAF2B,
      onHostWheel: var_core_value_sig9A2B,
      onRuntimeStageEnter: var_core_value_sigEFBE,
      onRuntimeStageExit: var_core_value_sigBBED,
      resolveHostWheelGestureRoot: var_core_value_sigA6D5,
      syncHostVerticalScroll: var_core_value_sigFE1A
    } = var_core_value_sig2956,
    var_core_value_sigF50E = (0, d.useRef)(null),
    var_core_value_sigE9E0 = (0, d.useRef)(null),
    var_core_value_sig8DAA = (0, d.useRef)(null),
    var_core_value_sig4960 = (0, d.useRef)(null),
    var_core_value_sig0F6B = (0, d.useRef)(null),
    var_core_value_sig341C1 = (0, d.useRef)(null),
    var_core_value_sig289C = (0, d.useRef)(null),
    var_core_value_sig30A2 = (0, d.useRef)(null),
    var_core_value_sig829D = (0, d.useRef)(null),
    var_core_value_sigAAB6 = (0, c.useDependency)(t.EmbedModelService),
    var_core_value_sig3DA9 = (0, c.useDependency)(gt),
    var_core_value_sigB62E = (0, c.useDependency)(ce),
    var_core_value_sigF383 = (0, c.useDependency)(Gt),
    var_core_value_sig40A4 = (0, c.useDependency)(Ur),
    var_core_value_sig8481 = (0, c.useDependency)(Wr),
    var_core_value_sigC6E3 = (0, c.useDependency)(Zn),
    var_core_value_sigB4C8 = (0, c.useDependency)(J),
    var_core_value_sig04611 = (0, c.useDependency)(Ht),
    var_core_value_sig6623 = (0, c.useDependency)(Gr),
    var_core_value_sigF875 = (0, c.useDependency)(ai),
    var_core_value_sig1686 = (0, c.useDependency)(ii),
    var_core_value_sig33AE = (0, c.useDependency)(K),
    var_core_value_sig2556 = (0, c.useDependency)(Xr),
    var_core_value_sigD2A7 = (0, c.useDependency)(a.ICommandService),
    var_core_value_sig9C84 = (0, c.useDependency)(a.IUniverInstanceService),
    var_core_value_sigCBF8 = (0, c.useDependency)(c.ILayoutService),
    var_core_value_sigF20C = oi(var_core_value_sigDE3F),
    var_core_value_sig9DBC = var_core_value_sig810B != null && var_core_value_sig810B.sheetLike ? var_core_value_sig810B : undefined,
    var_core_value_sig0598 = var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.contentWidth,
    var_core_value_sigBC6B = var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.pageContentWidth,
    var_core_value_sigFB55 = (var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.viewScale) ?? 1,
    [var_core_value_sigE9FC, var_core_value_sigDC35] = (0, d.useState)(0),
    [var_core_value_sigD83C, var_core_value_sigF1CF] = (0, d.useState)(0),
    var_core_value_sig8B63 = var_core_value_sig9DBC ? pi(var_core_value_sig9DBC) : undefined,
    var_core_value_sig65C4 = Math.min(var_core_value_sigD83C, (var_core_value_sig8B63 == null ? undefined : var_core_value_sig8B63.maxExpansion) ?? 0),
    var_core_value_sig47D2 = (0, c.useObservable)(() => var_core_value_sigB62E.active$["pipe"]((0, f.map)(() => var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) : "inactive")), var_core_value_sigD25D ?? (var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) : "inactive"), false, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigB62E]),
    var_core_value_sig3AE6 = (0, d.useRef)(var_core_value_sig47D2),
    var_core_value_sigEFE1 = (0, d.useRef)(false),
    var_core_value_sigCA12 = (0, d.useRef)(undefined),
    var_core_value_sig3F5E = (0, d.useRef)(undefined),
    var_core_value_sig001D = (0, d.useRef)(undefined),
    var_core_value_sigED13 = (0, d.useRef)(undefined),
    var_core_value_sigCD11 = (0, d.useRef)(undefined),
    var_core_value_sigEDD6 = (0, d.useRef)(0),
    var_core_value_sig69451 = (0, d.useRef)(undefined),
    var_core_value_sig7FD1 = (0, d.useRef)(false),
    var_core_value_sigB194 = (0, d.useRef)(false),
    var_core_value_sigBD19 = (0, d.useRef)(var_core_value_sig65C4),
    var_core_value_sig8F33 = (0, d.useRef)(var_core_value_sig8B63),
    var_core_value_sigBEA6 = (0, d.useRef)(var_core_value_sigFB55),
    var_core_value_sig6EB1 = (0, d.useRef)(0),
    var_core_value_sig8C0A = (0, d.useRef)(0),
    var_core_value_sigAE7D = (0, d.useRef)([]),
    var_core_value_sig6560 = (0, d.useRef)(var_core_value_sig47D2);
  var_core_value_sig6560.current = var_core_value_sig47D2, var_core_value_sigBD19.current = var_core_value_sig65C4, var_core_value_sig8F33.current = var_core_value_sig8B63, var_core_value_sigBEA6.current = var_core_value_sigFB55;
  let var_core_value_sigFF5B = (0, d.useCallback)(var_core_value_sigDFF0 => {
      let var_core_value_sig0130 = var_core_value_sig8F33.current;
      if (!var_core_value_sig0130) return false;
      let var_core_value_sigFD90 = var_core_value_sigBD19.current,
        var_core_value_sig702C = mi(var_core_value_sigFD90 + Or(var_core_value_sigDFF0) / var_core_value_sigBEA6.current, 0, var_core_value_sig0130.maxExpansion);
      return var_core_value_sig702C === var_core_value_sigFD90 ? false : (var_core_value_sigBD19.current = var_core_value_sig702C, var_core_value_sigF1CF(var_core_value_sig702C), true);
    }, []),
    var_core_value_sig4B86 = (0, d.useCallback)((var_core_value_sig03A4, var_core_value_sigB6F5) => $r(var_core_value_sig03A4, var_core_value_sigB6F5, {
      commandService: var_core_value_sigD2A7,
      univerInstanceService: var_core_value_sig9C84
    }) ? true : (var_core_value_sig9A2B == null ? undefined : var_core_value_sig9A2B(var_core_value_sig03A4, var_core_value_sigB6F5)) === true, [var_core_value_sigD2A7, var_core_value_sig9A2B, var_core_value_sig9C84]),
    var_core_value_sig2BFF = (0, d.useCallback)(() => {
      var var_core_value_sig82931;
      (var_core_value_sig82931 = var_core_value_sig3F5E.current) == null || var_core_value_sig82931.dispose(), var_core_value_sig3F5E.current = undefined;
    }, []),
    var_core_value_sig1A22 = (0, d.useCallback)(() => {
      var var_core_value_sig43AE, var_core_value_sigEF2E;
      if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || var_core_value_sig3F5E.current) return;
      let var_core_value_sigD83C1 = var_core_value_sigF20C.hostUnitId ? var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId) : undefined,
        var_core_value_sigAC2B = va(var_core_value_sigD83C1),
        var_core_value_sigFBBE = var_core_value_sigF20C.childUnitId ?? (var_core_value_sigD83C1 == null ? undefined : var_core_value_sigD83C1.childUnitId) ?? ((var_core_value_sig43AE = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sig43AE.childUnitId) ?? (var_core_value_sigAC2B == null ? undefined : var_core_value_sigAC2B.childUnitId),
        var_core_value_sigC982 = var_core_value_sigF20C.childType ?? (var_core_value_sigD83C1 == null ? undefined : var_core_value_sigD83C1.childType) ?? ((var_core_value_sigEF2E = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sigEF2E.childType) ?? (var_core_value_sigAC2B == null ? undefined : var_core_value_sigAC2B.childType);
      var_core_value_sig3F5E.current = var_core_value_sig33AE.acquireLease({
        embedId: var_core_value_sigF20C.embedId,
        role: "child-session",
        owner: var_core_value_sig29A2 === "doc-block" ? ha : ma,
        sessionMode: "child-keyboard",
        hostUnitId: var_core_value_sigF20C.hostUnitId,
        childUnitId: var_core_value_sigFBBE,
        childType: var_core_value_sigC982
      });
    }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childUnitId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig33AE, var_core_value_sig29A2]),
    var_core_value_sig28FE = (0, d.useCallback)(() => {
      if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId)) return;
      let var_core_value_sig59DA = var_core_value_sigF20C.embedId;
      window.requestAnimationFrame(() => {
        var_core_value_sigB62E.getStage(var_core_value_sig59DA) !== "stage2" && var_core_value_sig2BFF();
      });
    }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigB62E, var_core_value_sig2BFF]),
    var_core_value_sig67BE = var_core_value_sigF20C != null && var_core_value_sigF20C.hostUnitId ? var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId) : undefined,
    var_core_value_sigCB03 = va(var_core_value_sig67BE),
    var_core_value_sig0258 = (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childUnitId) ?? (var_core_value_sig67BE == null ? undefined : var_core_value_sig67BE.childUnitId) ?? ((var_core_value_sig744C = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sig744C.childUnitId) ?? (var_core_value_sigCB03 == null ? undefined : var_core_value_sigCB03.childUnitId),
    var_core_value_sig3398 = (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType) ?? (var_core_value_sig67BE == null ? undefined : var_core_value_sig67BE.childType) ?? ((var_core_value_sigE2E8 = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sigE2E8.childType) ?? (var_core_value_sigCB03 == null ? undefined : var_core_value_sigCB03.childType),
    var_core_value_sig8653 = var_core_value_sig3398 == null || (var_core_value_sig63A1 = var_core_value_sig3DA9.get(var_core_value_sig3398)) == null ? undefined : var_core_value_sig63A1.canvasRootClassName,
    var_core_value_sig2BF2 = or(var_core_value_sig67BE, var_core_value_sig47D2);
  (0, d.useEffect)(() => {
    let var_core_value_sig3002 = var_core_value_sigF50E.current;
    return () => {
      let var_core_value_sig3D2C = var_core_value_sigC6E3.getSession(),
        var_core_value_sigC56D = (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId) && (var_core_value_sig3D2C == null ? undefined : var_core_value_sig3D2C.embedId) === var_core_value_sigF20C.embedId;
      var_core_value_sigF20C != null && var_core_value_sigF20C.embedId && !(var_core_value_sig3002 != null && var_core_value_sig3002.isConnected) && !var_core_value_sigC56D && var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) !== "inactive" && var_core_value_sigF383.clearFloating(var_core_value_sigF20C.embedId, var_core_value_sigF20C.hostUnitId);
    };
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigB62E, var_core_value_sigC6E3]), (0, d.useEffect)(() => {
    if (!(!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || var_core_value_sig47D2 !== "stage2")) return var_core_value_sig1A22(), var_core_value_sig2BFF;
  }, [var_core_value_sig1A22, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig2BFF, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    let var_core_value_sig33D2 = var_core_value_sigF50E.current,
      var_core_value_sig8D4A = ta(var_core_value_sigCBF8, var_core_value_sig33AE, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig33D2, var_core_value_sig47D2);
    if (var_core_value_sig8D4A) return () => var_core_value_sig8D4A.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig33AE, var_core_value_sigCBF8, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    let var_core_value_sigB5D7 = var_core_value_sig4960.current;
    if (var_core_value_sig47D2 !== "stage2" || var_core_value_sig3398 !== a.UniverInstanceType["UNIVER_BASE"] || !(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sigB5D7) return;
    let var_core_value_sig797B = () => Yt(var_core_value_sigF20C.embedId, var_core_value_sigB5D7);
    var_core_value_sig797B();
    let var_core_value_sig5094 = window.requestAnimationFrame(var_core_value_sig797B);
    return () => window.cancelAnimationFrame(var_core_value_sig5094);
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig3398, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    let var_core_value_sig8883 = var_core_value_sig3AE6.current;
    var_core_value_sig3AE6.current = var_core_value_sig47D2;
    let var_core_value_sig488F = var_core_value_sig8883 !== var_core_value_sig47D2 || !var_core_value_sigEFE1.current && var_core_value_sig47D2 !== "inactive";
    var_core_value_sigEFE1.current = true, var_core_value_sig488F && (var_core_value_sigEFBE == null || var_core_value_sigEFBE(var_core_value_sig47D2), var_core_value_sig8481.invalidate({
      embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
      reason: "stage-change"
    })), var_core_value_sig8883 === "stage2" && var_core_value_sig47D2 !== "stage2" && (ca(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, Bi(var_core_value_sig4960.current, var_core_value_sig0F6B.current, var_core_value_sig341C1.current, var_core_value_sig30A2.current, var_core_value_sig829D.current)), var_core_value_sigF383.clearFloating(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId), var_core_value_sigBBED == null || var_core_value_sigBBED());
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sig8481, var_core_value_sigEFBE, var_core_value_sigBBED, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    if (var_core_value_sigD25D !== "stage2" || !(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sigF20C.hostUnitId) return;
    let var_core_value_sigB440 = var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId);
    var_core_value_sigB440 != null && var_core_value_sigB440.childUnitId && var_core_value_sigB62E.activate({
      hostUnitId: var_core_value_sigF20C.hostUnitId,
      embedId: var_core_value_sigF20C.embedId,
      childUnitId: var_core_value_sigB440.childUnitId
    }, "stage2");
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sigB62E, var_core_value_sigD25D]), (0, d.useEffect)(() => {
    let var_core_value_sigF5CC = var_core_value_sig4960.current,
      var_core_value_sigA1B6 = var_core_value_sig0F6B.current,
      var_core_value_sig66A0 = var_core_value_sig341C1.current,
      var_core_value_sig7876 = var_core_value_sig30A2.current,
      var_core_value_sig2C69 = var_core_value_sig829D.current;
    if (!var_core_value_sigF5CC || !var_core_value_sigA1B6 || !var_core_value_sig66A0 || !var_core_value_sig7876 || !var_core_value_sig2C69) return;
    let var_core_value_sigAF19 = var_core_value_sigF20C != null && var_core_value_sigF20C.hostUnitId ? var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId) : undefined,
      var_core_value_sigCE75 = var_core_value_sigAF19 ? ya(var_core_value_sigAF19) : undefined;
    if (!var_core_value_sigAF19 || !var_core_value_sigCE75 || var_core_value_sig2BF2 === "deferred") return;
    let var_core_value_sigF27A = false,
      var_core_value_sig47B3;
    return var_core_value_sig6623.materializeDescriptor({
      descriptor: var_core_value_sigAF19
    }).then(async var_core_value_sig3A17 => {
      var var_core_value_sig938F;
      if (var_core_value_sigF27A) return;
      let var_core_value_sigD948 = var_core_value_sig04611.mountIntoHostElement(var_core_value_sig3A17, var_core_value_sigF5CC, {
        content: var_core_value_sigA1B6,
        canvas: var_core_value_sig66A0,
        overlay: var_core_value_sig7876,
        popup: var_core_value_sig2C69
      });
      var_core_value_sig47B3 = var_core_value_sig3A17.embedId;
      let var_core_value_sigBE5E = var_core_value_sigD948 == null ? undefined : var_core_value_sigD948.context;
      var_core_value_sigCA12.current = var_core_value_sigBE5E;
      let var_core_value_sig0281 = var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? (var_core_value_sig938F = var_core_value_sig40A4.getPreview(var_core_value_sigF20C.embedId)) == null ? undefined : var_core_value_sig938F.viewState : undefined;
      var_core_value_sigBE5E && var_core_value_sig0281 != null && (await var_core_value_sig40A4.restoreViewState(var_core_value_sigBE5E, var_core_value_sig0281));
    }).catch(var_core_value_sigED71 => {
      queueMicrotask(() => {
        throw var_core_value_sigED71;
      });
    }), () => {
      var var_core_value_sig281C;
      var_core_value_sigF27A = true, var_core_value_sig47B3 && ((var_core_value_sig281C = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sig281C.embedId) === var_core_value_sig47B3 && (var_core_value_sigCA12.current = undefined), var_core_value_sig04611.unmount(var_core_value_sigAF19.embedId);
    };
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig04611, var_core_value_sigE9FC, var_core_value_sig40A4, var_core_value_sig6623, var_core_value_sig2BF2]), (0, d.useEffect)(() => {
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId)) return;
    let var_core_value_sig5E75 = var_core_value_sigF20C.embedId,
      var_core_value_sigC266 = [];
    [{
      element: var_core_value_sig4960.current,
      role: "runtime"
    }, {
      element: var_core_value_sig0F6B.current,
      role: "runtime"
    }, {
      element: var_core_value_sig341C1.current,
      role: "runtime"
    }].forEach(var_core_value_sig3C92 => {
      let var_core_value_sigB16B = var_core_value_sig3C92.element;
      var_core_value_sigB16B && var_core_value_sigC266.push({
        element: var_core_value_sigB16B,
        role: var_core_value_sig3C92.role
      });
    });
    let var_core_value_sig77A3 = var_core_value_sigC266.flatMap(({
        element: var_core_value_sig585D,
        role: var_core_value_sigE722
      }) => [var_core_value_sigB4C8.registerRoot(var_core_value_sig5E75, var_core_value_sig585D, var_core_value_sig0258), var_core_value_sig33AE.registerElement({
        embedId: var_core_value_sig5E75,
        role: var_core_value_sigE722,
        element: var_core_value_sig585D
      })]),
      var_core_value_sigD85C = var_core_value_sig289C.current;
    return var_core_value_sigD85C && var_core_value_sig77A3.push(var_core_value_sigB4C8.registerRoot(var_core_value_sig5E75, var_core_value_sigD85C, var_core_value_sig0258)), var_core_value_sig47D2 === "stage2" && [{
      element: var_core_value_sigD85C,
      role: "floating-menu"
    }, {
      element: var_core_value_sig30A2.current,
      role: "floating-menu"
    }, {
      element: var_core_value_sig829D.current,
      role: "child-popup"
    }].forEach(var_core_value_sig062A => {
      var_core_value_sig062A.element && var_core_value_sig77A3.push(var_core_value_sig33AE.registerElement({
        embedId: var_core_value_sig5E75,
        role: var_core_value_sig062A.role,
        element: var_core_value_sig062A.element
      }));
    }), () => var_core_value_sig77A3.forEach(var_core_value_sigE627 => var_core_value_sigE627.dispose());
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig33AE, var_core_value_sigB4C8, var_core_value_sig0258, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    var var_core_value_sig3957, var_core_value_sigA101;
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || var_core_value_sig47D2 !== "stage2") return;
    let var_core_value_sig2ADC = ((var_core_value_sig3957 = var_core_value_sigF50E.current) == null ? undefined : var_core_value_sig3957.ownerDocument) ?? ((var_core_value_sigA101 = var_core_value_sig4960.current) == null ? undefined : var_core_value_sigA101.ownerDocument) ?? (typeof document > "u" ? undefined : document),
      var_core_value_sig1386 = var_core_value_sigB4C8.activatePortalScope(var_core_value_sigF20C.embedId, var_core_value_sig2ADC, {
        includeAppShellEditorPortal: var_core_value_sig3398 === a.UniverInstanceType["UNIVER_SHEET"]
      });
    return () => {
      var_core_value_sig6560.current !== "stage2" && var_core_value_sigB4C8.closeOwnedFloatingSurfaces(var_core_value_sigF20C.embedId, var_core_value_sig2ADC), var_core_value_sig1386.dispose();
    };
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigB4C8, var_core_value_sig3398, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    var var_core_value_sig96F5, var_core_value_sig7F54;
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || var_core_value_sig47D2 !== "stage2") return;
    let var_core_value_sigEB45 = ((var_core_value_sig96F5 = var_core_value_sigF50E.current) == null ? undefined : var_core_value_sig96F5.ownerDocument) ?? ((var_core_value_sig7F54 = var_core_value_sig4960.current) == null ? undefined : var_core_value_sig7F54.ownerDocument) ?? (typeof document > "u" ? undefined : document),
      var_core_value_sig0623 = var_core_value_sigEB45 == null ? undefined : var_core_value_sigEB45.querySelector("[data-u-comp=\x22headerbar\x22]");
    if (!var_core_value_sig0623) return;
    let var_core_value_sigBF43 = [var_core_value_sigB4C8.registerRoot(var_core_value_sigF20C.embedId, var_core_value_sig0623, var_core_value_sig0258), var_core_value_sig33AE.registerElement({
      embedId: var_core_value_sigF20C.embedId,
      role: "floating-menu",
      element: var_core_value_sig0623
    })];
    return () => var_core_value_sigBF43.forEach(var_core_value_sigEF3E => var_core_value_sigEF3E.dispose());
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig33AE, var_core_value_sigB4C8, var_core_value_sig0258, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    let var_core_value_sigBC08 = var_core_value_sigF50E.current,
      var_core_value_sig3F28 = var_core_value_sigBC08 == null ? undefined : var_core_value_sigBC08.querySelector('[data-u-comp="embed-float-dom-content"]');
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sigBC08) return;
    let var_core_value_sig0A16 = var_core_value_sigF20C.hostUnitId ? var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId) : undefined,
      var_core_value_sig0A96 = var_core_value_sig8481.register({
        embedId: var_core_value_sigF20C.embedId,
        childUnitId: var_core_value_sig0A16 == null ? undefined : var_core_value_sig0A16.childUnitId,
        root: var_core_value_sigBC08,
        viewport: var_core_value_sig3F28,
        contentRoot: var_core_value_sig0F6B.current
      });
    return () => var_core_value_sig0A96.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig8481]), (0, d.useEffect)(() => {
    var var_core_value_sig72FE, var_core_value_sigE8ED;
    let var_core_value_sig6DD3 = var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
      var_core_value_sig8E87 = var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId;
    if (!var_core_value_sig6DD3 || !var_core_value_sig8E87) return;
    let var_core_value_sigCDF2 = ((var_core_value_sig72FE = var_core_value_sigF50E.current) == null ? undefined : var_core_value_sig72FE.ownerDocument) ?? ((var_core_value_sigE8ED = var_core_value_sig4960.current) == null ? undefined : var_core_value_sigE8ED.ownerDocument) ?? (typeof document > "u" ? undefined : document);
    if (!var_core_value_sigCDF2) return;
    let var_core_value_sig1043 = var_core_value_sig050A => {
        let var_core_value_sig8B32 = var_core_value_sig050A.params;
        return var_core_value_sig050A.id === t.SetEmbedBoundsCommand["id"] && (var_core_value_sig8B32 == null ? undefined : var_core_value_sig8B32.embedId) === var_core_value_sig6DD3 && var_core_value_sig8B32.hostUnitId === var_core_value_sig8E87;
      },
      var_core_value_sig4289 = var_core_value_sigD2A7.beforeCommandExecuted(var_core_value_sig870F => {
        if (!var_core_value_sig1043(var_core_value_sig870F) || var_core_value_sigB62E.getStage(var_core_value_sig6DD3) !== "stage2") return;
        let var_core_value_sigB683 = var_core_value_sigCDF2.activeElement;
        if (!(var_core_value_sigB683 instanceof HTMLElement) || !var_core_value_sigB683.id["startsWith"]("__editor_") || !var_core_value_sigB683.id["endsWith"]("SHAPE_TEXT") || !var_core_value_sig33AE.containsElement(var_core_value_sig6DD3, var_core_value_sigB683)) return;
        let var_core_value_sig26EC = var_core_value_sigB683.id["slice"](9);
        la({
          ownerDocument: var_core_value_sigCDF2,
          restore: () => {
            var var_core_value_sig273D;
            let var_core_value_sig9A0D = (var_core_value_sig273D = var_core_value_sig04611.getSession(var_core_value_sig6DD3)) == null || (var_core_value_sig273D = var_core_value_sig273D.context) == null ? undefined : var_core_value_sig273D.runtimeScope["injector"];
            if (var_core_value_sig9A0D != null && var_core_value_sig9A0D.has(o.IEditorService)) {
              let var_core_value_sig2BCF = var_core_value_sig9A0D.get(o.IEditorService);
              var_core_value_sig2BCF.focus(var_core_value_sig26EC);
              let var_core_value_sig0D69 = var_core_value_sig2BCF.getEditor(var_core_value_sig26EC);
              if (var_core_value_sig0D69) {
                var_core_value_sig0D69.focus();
                return;
              }
            }
            let var_core_value_sigA319 = var_core_value_sigCDF2.getElementById(var_core_value_sigB683.id);
            var_core_value_sigA319 instanceof HTMLElement && var_core_value_sigA319.focus({
              preventScroll: true
            });
          },
          shouldRestore: var_core_value_sig2D58 => var_core_value_sig2D58 instanceof HTMLElement && var_core_value_sig2D58.id["endsWith"]("DOCS_NORMAL") && var_core_value_sig33AE.containsElement(var_core_value_sig6DD3, var_core_value_sig2D58)
        });
      });
    return () => var_core_value_sig4289.dispose();
  }, [var_core_value_sigD2A7, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigB62E, var_core_value_sig33AE, var_core_value_sig04611]), (0, d.useEffect)(() => {
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId)) return;
    let var_core_value_sig2729 = var_core_value_sigC6E3.exited$["subscribe"](var_core_value_sigEEDB => {
      var_core_value_sigEEDB.embedId === var_core_value_sigF20C.embedId && (var_core_value_sig04611.unmount(var_core_value_sigF20C.embedId), var_core_value_sigF383.clearFloating(var_core_value_sigF20C.embedId, var_core_value_sigF20C.hostUnitId), var_core_value_sigED13.current != null && (window.cancelAnimationFrame(var_core_value_sigED13.current), var_core_value_sigED13.current = undefined), var_core_value_sigCD11.current != null && globalThis.clearTimeout(var_core_value_sigCD11.current), var_core_value_sigCD11.current = globalThis.setTimeout(() => {
        var_core_value_sigCD11.current = undefined, var_core_value_sigED13.current = window.requestAnimationFrame(() => {
          var_core_value_sigED13.current = undefined, var_core_value_sigF383.clearFloating(var_core_value_sigF20C.embedId, var_core_value_sigF20C.hostUnitId), var_core_value_sigDC35(var_core_value_sig2AD0 => var_core_value_sig2AD0 + 1);
        });
      }, 0));
    });
    return () => {
      var_core_value_sig2729.unsubscribe(), var_core_value_sigCD11.current != null && (globalThis.clearTimeout(var_core_value_sigCD11.current), var_core_value_sigCD11.current = undefined), var_core_value_sigED13.current != null && (window.cancelAnimationFrame(var_core_value_sigED13.current), var_core_value_sigED13.current = undefined);
    };
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigC6E3, var_core_value_sig04611]), (0, d.useEffect)(() => {
    let var_core_value_sig5BB6 = var_core_value_sigF50E.current,
      var_core_value_sig5C75 = var_core_value_sig289C.current;
    if (!var_core_value_sig5BB6 || !var_core_value_sig5C75 || typeof document > "u") return;
    let var_core_value_sigCB46 = _i({
      chrome: var_core_value_sig5C75,
      container: var_core_value_sig5BB6,
      deferInactive: var_core_value_sigBD2F,
      embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
      geometryService: var_core_value_sig8481,
      hostLayout$: var_core_value_sigDA56,
      stage: var_core_value_sig47D2,
      docsSheetLikeLayout: var_core_value_sig0598 != null && var_core_value_sigBC6B != null ? {
        contentWidth: var_core_value_sig0598,
        pageContentWidth: var_core_value_sigBC6B
      } : undefined
    });
    return () => var_core_value_sigCB46.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigBD2F, var_core_value_sig0598, var_core_value_sigBC6B, var_core_value_sig8481, var_core_value_sigDA56, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    let var_core_value_sig0177 = var_core_value_sigF50E.current,
      var_core_value_sigC674 = var_core_value_sig289C.current;
    if (!var_core_value_sig0177) return;
    let var_core_value_sigC11B = var_core_value_sig0177.closest('[data-embed-docs-custom-block="true"]'),
      var_core_value_sig5461 = var_core_value_sigC11B == null ? undefined : var_core_value_sigC11B.parentElement;
    return Vi(var_core_value_sig0177, var_core_value_sigC674, var_core_value_sig36E7 => {
      let var_core_value_sig6A78 = var_core_value_sigCA12.current;
      return (var_core_value_sig6A78 ? (var_core_value_sig9A2B == null ? undefined : var_core_value_sig9A2B(var_core_value_sig36E7, var_core_value_sig6A78)) === true : false) || Cr(var_core_value_sig0177, var_core_value_sig36E7);
    }, (var_core_value_sig5461 == null ? undefined : var_core_value_sig5461.id) === (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostAnchorId) ? var_core_value_sig5461 : null, var_core_value_sig3398);
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostAnchorId, var_core_value_sig9A2B, var_core_value_sig3398]), (0, d.useEffect)(() => {
    var var_core_value_sigBA12;
    let var_core_value_sig65CB = var_core_value_sigF50E.current,
      var_core_value_sig8AF4 = (var_core_value_sig65CB == null ? undefined : var_core_value_sig65CB.querySelector("[data-embed-float-fullscreen-button]")) ?? ((var_core_value_sigBA12 = var_core_value_sig289C.current) == null ? undefined : var_core_value_sigBA12.querySelector("[data-embed-float-fullscreen-button]"));
    if (!(!var_core_value_sig65CB || !var_core_value_sig8AF4)) return Xi(var_core_value_sig65CB, var_core_value_sig8AF4);
  }, []), (0, d.useEffect)(() => {
    let var_core_value_sig7C2D = var_core_value_sigF50E.current;
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sig7C2D || typeof document > "u") return;
    let var_core_value_sig5F54 = na({
      activationService: var_core_value_sigF383,
      chrome: var_core_value_sig289C.current,
      container: var_core_value_sig7C2D,
      embedId: var_core_value_sigF20C.embedId,
      externalHostInteractionUntil: var_core_value_sig6EB1,
      floatingActiveService: var_core_value_sigB62E,
      focusCoordinator: var_core_value_sig33AE,
      graceMs: 650,
      hostUnitId: var_core_value_sigF20C.hostUnitId,
      interactionBoundaryService: var_core_value_sigB4C8,
      isExternalHostInteraction: var_core_value_sigAF2B,
      ownedPointerInteractionUntil: var_core_value_sig8C0A,
      runtimeFocusOwners: ga
    });
    return () => var_core_value_sig5F54.dispose();
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigB62E, var_core_value_sig33AE, var_core_value_sigB4C8, var_core_value_sigAF2B]), (0, d.useEffect)(() => {
    var var_core_value_sig668D;
    var_core_value_sig47D2 !== "stage2" && ((var_core_value_sig668D = var_core_value_sig001D.current) == null || var_core_value_sig668D.dispose(), var_core_value_sig001D.current = undefined, ca(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, Bi(var_core_value_sig4960.current, var_core_value_sig0F6B.current, var_core_value_sig341C1.current, var_core_value_sig30A2.current, var_core_value_sig829D.current)));
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    let var_core_value_sig6883 = var_core_value_sig8DAA.current;
    if (!var_core_value_sig6883 || !(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sigF20C.hostUnitId) return;
    let var_core_value_sig2A05 = ra({
      acquireStage2SessionLease: var_core_value_sig1A22,
      activationService: var_core_value_sigF383,
      data: {
        childType: var_core_value_sig3398,
        childUnitId: var_core_value_sig0258,
        embedId: var_core_value_sigF20C.embedId,
        hostAnchorId: var_core_value_sigF20C.hostAnchorId,
        hostUnitId: var_core_value_sigF20C.hostUnitId
      },
      embedModelService: var_core_value_sigAAB6,
      enableStage1BodyDrag: var_core_value_sig60D0,
      floatingActiveService: var_core_value_sigB62E,
      gate: var_core_value_sig6883,
      interactionFlow: var_core_value_sig29A2,
      popupRoot: var_core_value_sig829D.current,
      releaseStage2SessionLeaseIfActivationDoesNotStick: var_core_value_sig28FE
    });
    return () => var_core_value_sig2A05.dispose();
  }, [var_core_value_sig1A22, var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostAnchorId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig60D0, var_core_value_sigB62E, var_core_value_sig29A2, var_core_value_sig28FE, var_core_value_sig3398, var_core_value_sig0258]), (0, d.useEffect)(() => {
    let var_core_value_sig9CA8 = var_core_value_sigF50E.current;
    if (!var_core_value_sig9CA8 || !var_core_value_sigA6D5) return;
    let var_core_value_sig3C9C = var_core_value_sigA6D5(var_core_value_sig9CA8);
    if (!var_core_value_sig3C9C) return;
    let var_core_value_sig7651 = var_core_value_sig2556.register(var_core_value_sig3C9C, var_core_value_sig9CA8);
    return () => var_core_value_sig7651.dispose();
  }, [var_core_value_sig2556, var_core_value_sigA6D5]), (0, d.useEffect)(() => {
    let var_core_value_sig6E4E = var_core_value_sigF50E.current,
      var_core_value_sigC2E8 = var_core_value_sig8DAA.current,
      var_core_value_sig3A04 = var_core_value_sig4960.current;
    if (!var_core_value_sig6E4E || !var_core_value_sigC2E8 || !var_core_value_sig3A04) return;
    let var_core_value_sig935E = fr({
      container: var_core_value_sig6E4E,
      gate: var_core_value_sigC2E8,
      getChildContext: () => var_core_value_sigCA12.current,
      getStage: () => var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) : "inactive",
      hostScrollOffset: var_core_value_sigEDD6,
      hostWheelGestureService: var_core_value_sig2556,
      invalidate: var_core_value_sigF7EF => Oi(var_core_value_sig8481, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF7EF, var_core_value_sigAE7D),
      liveRoot: var_core_value_sig3A04,
      onHostWheel: var_core_value_sig4B86,
      passiveViewportRegistry: var_core_value_sig1686,
      passiveWheelHandlerRegistry: var_core_value_sigF875,
      resizeDocsSheetLikeRendererByWheel: var_core_value_sigFF5B,
      routeHostGestures: !!var_core_value_sigA6D5,
      syncHostVerticalScroll: var_core_value_sigFE1A,
      viewScale: var_core_value_sigFB55
    });
    return () => var_core_value_sig935E.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigFB55, var_core_value_sigB62E, var_core_value_sig8481, var_core_value_sig2556, var_core_value_sig1686, var_core_value_sigF875, var_core_value_sigFF5B, var_core_value_sigA6D5, var_core_value_sig4B86, var_core_value_sigFE1A]), (0, d.useEffect)(() => () => {
    var_core_value_sigAE7D.current["forEach"](var_core_value_sig223F => window.cancelAnimationFrame(var_core_value_sig223F)), var_core_value_sigAE7D.current = [];
  }, []), (0, d.useEffect)(() => {
    let var_core_value_sigDC45 = var_core_value_sig4960.current;
    if (!var_core_value_sigDC45) return;
    let var_core_value_sig7C31 = aa({
      acquireStage2SessionLease: var_core_value_sig1A22,
      activationService: var_core_value_sigF383,
      data: {
        childType: var_core_value_sig3398,
        childUnitId: var_core_value_sig0258,
        embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
        hostUnitId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId
      },
      embedModelService: var_core_value_sigAAB6,
      floatingActiveService: var_core_value_sigB62E,
      focusCoordinator: var_core_value_sig33AE,
      getRuntimeRoots: () => Bi(var_core_value_sig341C1.current, var_core_value_sig0F6B.current, var_core_value_sig30A2.current, var_core_value_sig829D.current, var_core_value_sig4960.current),
      interactionFlow: var_core_value_sig29A2,
      liveRoot: var_core_value_sigDC45,
      popupRoot: var_core_value_sig829D.current,
      releaseStage2SessionLeaseIfActivationDoesNotStick: var_core_value_sig28FE,
      runtimeFocusOwners: ga
    });
    return () => var_core_value_sig7C31.dispose();
  }, [var_core_value_sig1A22, var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sigB62E, var_core_value_sig33AE, var_core_value_sig29A2, var_core_value_sig28FE, var_core_value_sig3398, var_core_value_sig0258]), (0, d.useEffect)(() => {
    let var_core_value_sig8B54 = var_core_value_sig4960.current;
    if (!var_core_value_sig8B54 || !(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId)) return;
    let var_core_value_sigC19B = oa({
      data: {
        childType: var_core_value_sigF20C.childType,
        childUnitId: var_core_value_sigF20C.childUnitId,
        embedId: var_core_value_sigF20C.embedId,
        hostUnitId: var_core_value_sigF20C.hostUnitId
      },
      floatingActiveService: var_core_value_sigB62E,
      focusCoordinator: var_core_value_sig33AE,
      graceMs: 650,
      interactionBoundaryService: var_core_value_sigB4C8,
      liveRoot: var_core_value_sig8B54,
      ownedPointerInteractionUntil: var_core_value_sig8C0A,
      pointerLease: var_core_value_sig001D,
      verticalScrollOwner: var_core_value_sig69451
    });
    return () => var_core_value_sigC19B.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childUnitId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigB62E, var_core_value_sig33AE, var_core_value_sigB4C8]), (0, d.useEffect)(() => {
    if (var_core_value_sig47D2 !== "stage2" || var_core_value_sig29A2 !== "doc-block") return;
    let var_core_value_sigFB87 = var_core_value_sig4960.current;
    if (!var_core_value_sigFB87) return;
    let var_core_value_sigA318,
      var_core_value_sig51A4 = () => Zi(Bi(var_core_value_sig341C1.current, var_core_value_sig0F6B.current, var_core_value_sig30A2.current, var_core_value_sig829D.current, var_core_value_sig4960.current)),
      var_core_value_sig2966 = () => {
        let var_core_value_sig27F9 = var_core_value_sigFB87.ownerDocument["activeElement"];
        return !var_core_value_sig27F9 || var_core_value_sig27F9 === var_core_value_sig51A4() ? false : Bi(var_core_value_sig4960.current, var_core_value_sig0F6B.current, var_core_value_sig341C1.current, var_core_value_sig30A2.current, var_core_value_sig829D.current).some(var_core_value_sigD749 => var_core_value_sigD749.contains(var_core_value_sig27F9));
      },
      var_core_value_sigF4C4 = () => {
        if (!Qi(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, true)) return;
        let var_core_value_sig393E = var_core_value_sig51A4();
        if (var_core_value_sig393E && !var_core_value_sig33AE.hasBlockingChildFocusLease(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, {
          ignoreOwners: ga
        }) && !var_core_value_sig2966()) {
          if (var_core_value_sigF20C != null && var_core_value_sigF20C.hostUnitId && var_core_value_sigF20C.embedId) {
            let var_core_value_sig480E = var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId);
            (var_core_value_sig480E == null ? undefined : var_core_value_sig480E.childUnitId) != null && var_core_value_sig480E.childType != null && var_core_value_sigF383.focusFloatingRuntime(var_core_value_sig480E);
          }
          var_core_value_sig393E.hasAttribute("tabindex") || (var_core_value_sig393E.tabIndex = -1), var_core_value_sig393E.focus({
            preventScroll: true
          });
        }
      };
    return var_core_value_sigF4C4(), var_core_value_sigA318 = window.requestAnimationFrame(() => {
      var_core_value_sigA318 = undefined, var_core_value_sigF4C4();
    }), () => {
      var_core_value_sigA318 != null && (window.cancelAnimationFrame(var_core_value_sigA318), var_core_value_sigA318 = undefined);
    };
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig33AE, var_core_value_sig29A2, var_core_value_sig47D2]), (0, d.useEffect)(() => {
    let var_core_value_sig5617 = var_core_value_sigF50E.current,
      var_core_value_sig450E = var_core_value_sigE9E0.current;
    if (!var_core_value_sig5617 || !var_core_value_sig450E || typeof window > "u") return;
    let var_core_value_sig92A31 = ci({
      collapseViewportHeight: var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.visibleCanvasHeight,
      collapseWithoutChildScroll: (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType) === a.UniverInstanceType["UNIVER_BASE"],
      container: var_core_value_sig5617,
      content: var_core_value_sig450E,
      contentHeight: var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.contentHeight,
      enabled: var_core_value_sigFE1A,
      getChildContext: () => var_core_value_sigCA12.current,
      getProvider: var_core_value_sigB609 => var_core_value_sig1686.get(var_core_value_sigB609.childType, var_core_value_sigB609.layout),
      getStage: () => var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) : "inactive",
      hostLayout$: var_core_value_sigDA56,
      invalidate: () => var_core_value_sig8481.invalidate({
        embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
        reason: "host-scroll"
      }),
      offset: var_core_value_sigEDD6,
      onHostWheel: var_core_value_sig4B86,
      owner: var_core_value_sig69451,
      syncingChildFromHost: var_core_value_sig7FD1,
      syncingHostFromChild: var_core_value_sigB194,
      viewScale: var_core_value_sigFB55,
      viewportHeight: var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.viewportHeight
    });
    return () => var_core_value_sig92A31.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.contentHeight, var_core_value_sigFB55, var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.visibleCanvasHeight, var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.viewportHeight, var_core_value_sigB62E, var_core_value_sig8481, var_core_value_sigDA56, var_core_value_sigE9FC, var_core_value_sig1686, var_core_value_sig4B86, var_core_value_sigFE1A]);
  let var_core_value_sig87CD = ir({
      stage: var_core_value_sig47D2,
      interactionFlow: var_core_value_sig29A2
    }),
    var_core_value_sig8BCB = var_core_value_sig87CD.disableLiveHostPointerEvents,
    var_core_value_sig86E9 = var_core_value_sig87CD.passThroughInteractionGate,
    var_core_value_sig41D0 = var_core_value_sig9DBC ? {
      top: var_core_value_sig9DBC.floatingMenuInsetTop * var_core_value_sigFB55,
      left: -var_core_value_sig65C4 * var_core_value_sigFB55,
      width: (((var_core_value_sig8B63 == null ? undefined : var_core_value_sig8B63.initialWidth) ?? 1) + var_core_value_sig65C4) * var_core_value_sigFB55,
      height: var_core_value_sig9DBC.viewportHeight * var_core_value_sigFB55
    } : var_core_value_sig810B ? {
      top: var_core_value_sig810B.floatingMenuInsetTop,
      height: "calc(100% - " + var_core_value_sig810B.floatingMenuInsetTop + "px)"
    } : undefined,
    var_core_value_sigBA2B = var_core_value_sig9DBC ? {
      width: ((var_core_value_sig8B63 == null ? undefined : var_core_value_sig8B63.initialWidth) ?? 1) + var_core_value_sig65C4,
      height: var_core_value_sig9DBC.viewportHeight,
      transform: var_core_value_sigFB55 === 1 ? undefined : "scale(" + var_core_value_sigFB55 + ")",
      transformOrigin: "top left"
    } : undefined,
    var_core_value_sig0140 = var_core_value_sig9DBC ? {
      left: 0,
      width: "100%",
      height: var_core_value_sig9DBC.viewportHeight,
      minHeight: var_core_value_sig9DBC.viewportHeight
    } : undefined;
  return (0, m.jsxs)("div", {
    ref: var_core_value_sigF50E,
    className: (0, l.clsx)("univer-relative\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-visible\x20univer-bg-transparent", var_core_value_sig47D2 === "inactive" && c.HOVER_TRACK_HOST_CLASS_NAME, var_core_value_sig9DBC && "univer-pointer-events-none"),
    "data-u-comp": "embed-float-dom",
    "data-embed-float-dom": "true",
    "data-embed-float-stage": var_core_value_sig47D2,
    "data-embed-id": var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
    "data-embed-host-unit-id": var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId,
    "data-embed-host-anchor-id": var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostAnchorId,
    "data-embed-child-unit-id": var_core_value_sig0258,
    "data-embed-child-type": var_core_value_sig3398,
    "data-embed-interaction-flow": var_core_value_sig29A2,
    children: [(0, m.jsxs)("div", {
      ref: var_core_value_sigE9E0,
      className: (0, l.clsx)("univer-absolute univer-inset-0 univer-box-border univer-min-h-0 univer-min-w-0 univer-overflow-hidden univer-rounded-md after:univer-pointer-events-none after:univer-absolute after:univer-inset-0 after:univer-z-20 after:univer-box-border after:univer-rounded-[inherit] after:univer-border after:univer-border-solid after:univer-border-gray-200 after:univer-content-[''] dark:after:!univer-border-gray-600", var_core_value_sig9DBC && "after:!univer-border-b-0\x20after:!univer-border-r-0"),
      "data-u-comp": "embed-float-dom-content",
      "data-embed-float-content": "true",
      style: var_core_value_sig41D0,
      children: [(0, m.jsxs)("div", {
        ref: var_core_value_sig4960,
        className: (0, l.clsx)("univer-absolute univer-inset-0 univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-hidden univer-bg-transparent", var_core_value_sig9DBC && "before:univer-hidden"),
        "data-u-comp": "embed-float-dom-live",
        "data-embed-float-live": "true",
        style: var_core_value_sigBA2B,
        children: [(0, m.jsx)("div", {
          ref: var_core_value_sig341C1,
          className: (0, l.clsx)("univer-absolute\x20univer-inset-0\x20univer-z-0\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden", var_core_value_sig8653, var_core_value_sig9DBC && "univer-pointer-events-auto", var_core_value_sig8BCB && "univer-pointer-events-none"),
          "data-u-comp": "embed-float-dom-live-canvas",
          style: var_core_value_sig0140,
          "data-embed-canvas-root": "true"
        }), (0, m.jsx)("div", {
          ref: var_core_value_sig0F6B,
          className: (0, l.clsx)("univer-pointer-events-none\x20univer-absolute\x20univer-inset-0\x20univer-z-[1]\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden\x20[&>*]:univer-pointer-events-auto", var_core_value_sig8BCB && "univer-pointer-events-none"),
          "data-u-comp": "embed-float-dom-live-content",
          style: var_core_value_sig0140,
          "data-embed-content-root": "true"
        })]
      }), (0, m.jsx)("div", {
        ref: var_core_value_sig8DAA,
        className: (0, l.clsx)("univer-absolute univer-inset-0 univer-z-10 univer-bg-transparent", var_core_value_sig86E9 && "univer-pointer-events-none"),
        "data-u-comp": "embed-float-dom-interaction-gate",
        "data-embed-float-interaction-gate": "true"
      }), var_core_value_sig47D2 === "inactive" && (0, m.jsx)(c.HoverTrack, {
        className: "univer-z-[21]"
      })]
    }), (0, m.jsxs)("div", {
      ref: var_core_value_sig289C,
      className: "univer-pointer-events-none\x20univer-fixed\x20univer-overflow-visible\x20[&>*]:univer-pointer-events-auto",
      "data-u-comp": "embed-float-dom-chrome",
      "data-embed-float-stage": var_core_value_sig47D2,
      "data-embed-id": var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
      style: {
        zIndex: var_core_value_sig8A14 ?? 800
      },
      children: [(0, m.jsx)("div", {
        ref: var_core_value_sig30A2,
        className: "univer-pointer-events-none\x20univer-absolute\x20univer-inset-0\x20univer-overflow-visible\x20[&>*]:univer-pointer-events-auto",
        "data-u-comp": "embed-float-dom-overlay",
        "data-embed-overlay-root": "true"
      }), (0, m.jsx)("div", {
        ref: var_core_value_sig829D,
        className: "univer-pointer-events-none univer-absolute univer-inset-0 univer-overflow-visible [&>*]:univer-pointer-events-auto",
        "data-u-comp": "embed-float-dom-popup",
        "data-embed-popup-root": "true"
      }), (0, m.jsx)(fa, {
        hostUnitId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId,
        embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId
      })]
    })]
  });
}
function va(var_core_value_sig4A78) {
  let var_core_value_sig2BE6 = var_core_value_sig4A78 == null ? undefined : var_core_value_sig4A78.source["ref"];
  if (var_core_value_sig2BE6) try {
    let var_core_value_sig61E5 = typeof var_core_value_sig2BE6 == "string" ? (0, t.parseResourceRef)(var_core_value_sig2BE6) : var_core_value_sig2BE6;
    return {
      childUnitId: var_core_value_sig61E5.unit["selector"],
      childType: (0, t.fromResourceRefUnitType)(var_core_value_sig61E5.unit["type"])
    };
  } catch {
    return;
  }
}
function ya(var_core_value_sig55AD) {
  var var_core_value_sig4373, var_core_value_sig5FAB;
  let var_core_value_sig3F6D = ((var_core_value_sig4373 = var_core_value_sig55AD.sourceMeta) == null ? undefined : var_core_value_sig4373.floating) || undefined;
  if (var_core_value_sig3F6D && typeof var_core_value_sig3F6D == "object" && var_core_value_sig3F6D.layout) return var_core_value_sig3F6D.layout;
  let var_core_value_sig569B = ((var_core_value_sig5FAB = var_core_value_sig55AD.sourceMeta) == null ? undefined : var_core_value_sig5FAB.tab) || undefined;
  return var_core_value_sig569B && typeof var_core_value_sig569B == "object" && var_core_value_sig569B.enabled ? "tab-peer" : undefined;
}
var ba = class extends a.Disposable {
  constructor(...var_core_value_sig9E17) {
    super(...var_core_value_sig9E17), V(this, "_providers", new Map()), V(this, "_providerChanged$", new f["Subject"]()), V(this, "providerChanged$", this._providerChanged$["asObservable"]()), V(this, "_contentSizeChanged$", new f["Subject"]()), V(this, "contentSizeChanged$", this._contentSizeChanged$["asObservable"]());
  }
  register(var_core_value_sigB97D) {
    return this._providers["set"](var_core_value_sigB97D.childType, var_core_value_sigB97D), this._providerChanged$["next"](var_core_value_sigB97D.childType), (0, a.toDisposable)(() => {
      this._providers["get"](var_core_value_sigB97D.childType) === var_core_value_sigB97D && (this._providers["delete"](var_core_value_sigB97D.childType), this._providerChanged$["next"](var_core_value_sigB97D.childType));
    });
  }
  get(var_core_value_sigFE1E) {
    return this._providers["get"](var_core_value_sigFE1E);
  }
  list() {
    return [...this._providers["values"]()];
  }
  measureContentSize(var_core_value_sig5F541) {
    var var_core_value_sig84B9;
    return (var_core_value_sig84B9 = this.get(var_core_value_sig5F541.childType)) == null ? undefined : var_core_value_sig84B9.measureContentSize(var_core_value_sig5F541);
  }
  notifyContentSizeChanged(var_core_value_sig09DF, var_core_value_sig3A25) {
    this._contentSizeChanged$["next"]({
      embedId: var_core_value_sig3A25,
      hostUnitId: var_core_value_sig09DF
    });
  }
  dispose() {
    this._providers["clear"](), this._contentSizeChanged$["complete"](), super.dispose();
  }
};
let xa = class {
  constructor(var_core_value_sig5B2B) {
    this._mountService = var_core_value_sig5B2B, V(this, "_leases", new Map());
  }
  acquire(var_core_value_sigE5FE, var_core_value_sig78A5) {
    if (this._leases["has"](var_core_value_sigE5FE.embedId)) throw Error("EMBED_RUNTIME_HOST_ALREADY_LEASED:" + var_core_value_sigE5FE.embedId);
    let var_core_value_sig9A4C = this._mountService["getSession"](var_core_value_sigE5FE.embedId),
      var_core_value_sigC723 = var_core_value_sig9A4C != null && var_core_value_sig9A4C.context ? this._relocateExistingSession(var_core_value_sig9A4C, var_core_value_sig78A5) : this._mountOwnedSession(var_core_value_sigE5FE, var_core_value_sig78A5);
    return this._leases["set"](var_core_value_sigE5FE.embedId, var_core_value_sigC723), {
      session: var_core_value_sigC723.session,
      ownsSession: var_core_value_sigC723.ownsSession,
      dispose: () => {
        this._leases["get"](var_core_value_sigE5FE.embedId) === var_core_value_sigC723 && (this._leases["delete"](var_core_value_sigE5FE.embedId), var_core_value_sigC723.dispose());
      }
    };
  }
  _relocateExistingSession(var_core_value_sig1E32, var_core_value_sig22AF) {
    let var_core_value_sig0F31 = Sa(var_core_value_sig1E32);
    if (var_core_value_sig0F31.length === 0) throw Error("EMBED_RUNTIME_HOST_SLOTS_NOT_AVAILABLE:" + var_core_value_sig1E32.embedId);
    let var_core_value_sig8F25 = var_core_value_sig0F31.map(var_core_value_sig390D => {
      let var_core_value_sigC928 = var_core_value_sig390D.parentNode;
      if (!var_core_value_sigC928) throw Error("EMBED_RUNTIME_HOST_NOT_ATTACHED:" + var_core_value_sig1E32.embedId);
      return {
        node: var_core_value_sig390D,
        originalParent: var_core_value_sigC928,
        placeholder: document.createComment("embed-runtime-host-lease")
      };
    });
    return var_core_value_sig8F25.forEach(({
      node: var_core_value_sig39B7,
      originalParent: var_core_value_sig18E0,
      placeholder: var_core_value_sigE161
    }) => {
      var_core_value_sig18E0.insertBefore(var_core_value_sigE161, var_core_value_sig39B7);
    }), var_core_value_sig22AF.replaceChildren(...var_core_value_sig0F31), {
      session: var_core_value_sig1E32,
      ownsSession: false,
      dispose: () => {
        if (this._mountService["getSession"](var_core_value_sig1E32.embedId) !== var_core_value_sig1E32) {
          var_core_value_sig8F25.forEach(({
            node: var_core_value_sig26DB,
            placeholder: var_core_value_sigF0F9
          }) => {
            var_core_value_sig26DB.remove(), var_core_value_sigF0F9.remove();
          });
          return;
        }
        var_core_value_sig8F25.forEach(({
          node: var_core_value_sigCFFA,
          originalParent: var_core_value_sig58C1,
          placeholder: var_core_value_sig5090
        }) => {
          if (var_core_value_sig5090.parentNode) {
            var_core_value_sig5090.replaceWith(var_core_value_sigCFFA);
            return;
          }
          var_core_value_sig58C1.appendChild(var_core_value_sigCFFA);
        });
      }
    };
  }
  _mountOwnedSession(var_core_value_sigCBED, var_core_value_sig6224) {
    let var_core_value_sigFC3E = this._mountService["mountIntoHostElement"](var_core_value_sigCBED, var_core_value_sig6224);
    return {
      session: var_core_value_sigFC3E,
      ownsSession: true,
      dispose: () => {
        this._mountService["getSession"](var_core_value_sigCBED.embedId) === var_core_value_sigFC3E && this._mountService["unmount"](var_core_value_sigCBED.embedId);
      }
    };
  }
};
xa = Z([X(0, (0, a.Inject)(Ht))], xa);
function Sa(var_core_value_sigF850) {
  let var_core_value_sig5D78 = var_core_value_sigF850.context;
  if (!var_core_value_sig5D78) return [];
  let var_core_value_sig42FA = var_core_value_sig5D78.renderScope["rootElement"],
    var_core_value_sig0E18 = new Set([var_core_value_sig5D78.runtimeScope["roots"].content, var_core_value_sig5D78.runtimeScope["roots"].overlay, var_core_value_sig5D78.runtimeScope["roots"].popup]);
  return var_core_value_sig5D78.runtimeScope["roots"].canvas && var_core_value_sig0E18.add(var_core_value_sig5D78.runtimeScope["roots"].canvas), var_core_value_sig5D78.runtimeScope["roots"].menuSlot && var_core_value_sig0E18.add(var_core_value_sig5D78.runtimeScope["roots"].menuSlot), var_core_value_sig5D78.runtimeScope["roots"].footerSlot && var_core_value_sig0E18.add(var_core_value_sig5D78.runtimeScope["roots"].footerSlot), var_core_value_sig0E18.delete(var_core_value_sig42FA), Array.from(var_core_value_sig42FA.children).filter(var_core_value_sig4D33 => var_core_value_sig4D33 instanceof HTMLElement && [...var_core_value_sig0E18].some(var_core_value_sigBDEE => var_core_value_sig4D33 === var_core_value_sigBDEE || var_core_value_sig4D33.contains(var_core_value_sigBDEE)));
}
const Ca = 1000;
function wa(var_core_value_sig6BCD, var_core_value_sig883B) {
  return {
    childType: var_core_value_sig883B.childType,
    collectViewState: () => undefined,
    restoreViewState: () => undefined,
    renderPreview: var_core_value_sig08BF => Ta(var_core_value_sig6BCD, var_core_value_sig883B.renderManagerService, var_core_value_sig08BF)
  };
}
async function Ta(var_core_value_sigA9FC, var_core_value_sigE15C, var_core_value_sig36B1) {
  let var_core_value_sigD03D = var_core_value_sigA9FC.get(var_core_value_sigE15C),
    var_core_value_sig2952 = await Ea(var_core_value_sigD03D, var_core_value_sig36B1);
  if (var_core_value_sig2952) return var_core_value_sig2952;
  if (!var_core_value_sig36B1.context) {
    let var_core_value_sig1814 = var_core_value_sigD03D.getRenderUnitById(var_core_value_sig36B1.childUnitId);
    if (var_core_value_sig1814) {
      let var_core_value_sig1F40 = await Aa(var_core_value_sig1814, var_core_value_sig36B1);
      if (var_core_value_sig1F40) return var_core_value_sig1F40;
    }
  }
  let var_core_value_sig53FF = await Da(var_core_value_sigA9FC, var_core_value_sig36B1);
  return var_core_value_sig53FF === null ? Oa(var_core_value_sigA9FC, var_core_value_sigD03D, var_core_value_sig36B1) : var_core_value_sig53FF;
}
async function Ea(var_core_value_sigF73F, var_core_value_sigE4F5) {
  if (!var_core_value_sigE4F5.context) return;
  let var_core_value_sig0059 = var_core_value_sigE4F5.reason === "print" ? Nt(var_core_value_sigE4F5.context) : undefined;
  try {
    var_core_value_sigE4F5.reason === "print" && (await Ft(var_core_value_sigE4F5.childType));
    let var_core_value_sig2B5D = var_core_value_sigF73F.getRenderUnitById(var_core_value_sigE4F5.childUnitId);
    return var_core_value_sig2B5D && (await Pa(var_core_value_sig2B5D, false, Ia(var_core_value_sigE4F5.context))), At(var_core_value_sigE4F5.context);
  } finally {
    var_core_value_sig0059 == null || var_core_value_sig0059();
  }
}
async function Da(var_core_value_sig39B6, var_core_value_sig119D) {
  if (za(var_core_value_sig119D) !== "tab-peer" || !var_core_value_sig39B6.has(xa)) return null;
  if (typeof document > "u") return;
  let var_core_value_sigB0F8 = Fa(var_core_value_sig119D),
    var_core_value_sigD7E0;
  try {
    var_core_value_sigD7E0 = var_core_value_sig39B6.get(xa).acquire({
      ...var_core_value_sig119D.descriptor,
      mode: "readonly"
    }, var_core_value_sigB0F8);
    let var_core_value_sig9B0B = var_core_value_sigD7E0.session["context"];
    if (!var_core_value_sig9B0B) return;
    let var_core_value_sigF21D = var_core_value_sig119D.reason === "print" ? Nt(var_core_value_sig9B0B) : undefined;
    try {
      return var_core_value_sig119D.reason === "print" && (await Ft(var_core_value_sig119D.childType)), await Ma(var_core_value_sig9B0B), At(var_core_value_sig9B0B);
    } finally {
      var_core_value_sigF21D == null || var_core_value_sigF21D();
    }
  } catch {
    return;
  } finally {
    var_core_value_sigD7E0 == null || var_core_value_sigD7E0.dispose(), var_core_value_sigB0F8.remove();
  }
}
async function Oa(var_core_value_sigA8CD, var_core_value_sig246C, var_core_value_sig3282) {
  var var_core_value_sig47FC, var_core_value_sigF54B;
  if (typeof document > "u") return;
  let var_core_value_sigC23B1 = Fa(var_core_value_sig3282),
    var_core_value_sigD35A = (var_core_value_sig47FC = var_core_value_sig3282.context) != null && (var_core_value_sig47FC = var_core_value_sig47FC.runtimeScope) != null && var_core_value_sig47FC.injector ? undefined : ge(Ra(var_core_value_sigA8CD, var_core_value_sig3282, var_core_value_sigC23B1)),
    var_core_value_sigD958 = ((var_core_value_sigF54B = var_core_value_sig3282.context) == null || (var_core_value_sigF54B = var_core_value_sigF54B.runtimeScope) == null ? undefined : var_core_value_sigF54B.injector) ?? var_core_value_sigD35A,
    var_core_value_sig1CD1 = Tt(var_core_value_sig246C, var_core_value_sig3282.childUnitId, var_core_value_sigD958);
  if (!var_core_value_sig1CD1) {
    var_core_value_sigD35A == null || var_core_value_sigD35A.dispose(), var_core_value_sigC23B1.remove();
    return;
  }
  return ka(var_core_value_sig246C, var_core_value_sig3282.childUnitId, var_core_value_sig1CD1, var_core_value_sigD35A, var_core_value_sigC23B1, var_core_value_sig3282);
}
async function ka(var_core_value_sig4B51, var_core_value_sigB58E, var_core_value_sig0094, var_core_value_sig63A21, var_core_value_sig5703, var_core_value_sigCE23) {
  let var_core_value_sig853E;
  try {
    return var_core_value_sig0094.engine["mount"](var_core_value_sig5703), var_core_value_sigCE23.reason === "print" && (var_core_value_sig853E = Pt(var_core_value_sig0094, [var_core_value_sig5703]), await Ft(var_core_value_sigCE23.childType)), await Pa(var_core_value_sig0094, true), ja(var_core_value_sig0094);
  } catch {
    return;
  } finally {
    var_core_value_sig853E == null || var_core_value_sig853E();
    try {
      var var_core_value_sigE8A4, var_core_value_sig33CB;
      (var_core_value_sigE8A4 = (var_core_value_sig33CB = var_core_value_sig0094.engine).unmount) == null || var_core_value_sigE8A4.call(var_core_value_sig33CB);
    } catch {}
    if (var_core_value_sig63A21) {
      var var_core_value_sigFF80;
      (var_core_value_sigFF80 = var_core_value_sig4B51.removeRender) == null || var_core_value_sigFF80.call(var_core_value_sig4B51, var_core_value_sigB58E), var_core_value_sig63A21.dispose();
    }
    var_core_value_sig5703.remove();
  }
}
async function Aa(var_core_value_sig0145, var_core_value_sig23B3) {
  let var_core_value_sig5075 = var_core_value_sig23B3.reason === "print" ? Pt(var_core_value_sig0145) : undefined;
  try {
    return var_core_value_sig23B3.reason === "print" && (await Ft(var_core_value_sig23B3.childType)), ja(var_core_value_sig0145);
  } finally {
    var_core_value_sig5075 == null || var_core_value_sig5075();
  }
}
function ja(var_core_value_sigDCD9) {
  var var_core_value_sig7478, var_core_value_sig358D, var_core_value_sig81FD, var_core_value_sigB6F0, var_core_value_sig1BCE;
  let var_core_value_sig1C8D = ((var_core_value_sig7478 = (var_core_value_sig358D = var_core_value_sigDCD9.engine).getCanvasElement) == null ? undefined : var_core_value_sig7478.call(var_core_value_sig358D)) ?? ((var_core_value_sig81FD = (var_core_value_sigB6F0 = var_core_value_sigDCD9.engine).getCanvas) == null || (var_core_value_sig81FD = var_core_value_sig81FD.call(var_core_value_sigB6F0)) == null || (var_core_value_sig1BCE = var_core_value_sig81FD.getCanvasEle) == null ? undefined : var_core_value_sig1BCE.call(var_core_value_sig81FD));
  if (!(!var_core_value_sig1C8D || var_core_value_sig1C8D.width <= 1 || var_core_value_sig1C8D.height <= 1 || typeof var_core_value_sig1C8D.toDataURL != "function")) return var_core_value_sig1C8D.toDataURL("image/png");
}
async function Ma(var_core_value_sigFE6A, var_core_value_sigD935 = false) {
  try {
    var var_core_value_sig0C98;
    let var_core_value_sig9B55 = (((var_core_value_sig0C98 = var_core_value_sigFE6A.runtimeScope) == null ? undefined : var_core_value_sig0C98.injector) ?? var_core_value_sigFE6A.injector).get(p.IRenderManagerService),
      var_core_value_sigB8F41 = Date.now() + Ca,
      var_core_value_sig5E41 = await Na(var_core_value_sig9B55, var_core_value_sigFE6A.childUnitId, var_core_value_sigB8F41);
    var_core_value_sig5E41 && (var_core_value_sigD935 && (var_core_value_sig5E41.scene["makeDirty"](true), await Promise.race([var_core_value_sig5E41.scene["requestRender"](), new Promise(var_core_value_sig3FC7 => globalThis.setTimeout(var_core_value_sig3FC7, Math.max(0, var_core_value_sigB8F41 - Date.now())))])), await Pa(var_core_value_sig5E41, false, Ia(var_core_value_sigFE6A), var_core_value_sigB8F41));
  } catch {}
}
async function Na(var_core_value_sig48BC, var_core_value_sig5A73, var_core_value_sig3E85) {
  let var_core_value_sig3AED = var_core_value_sig48BC.getRenderUnitById(var_core_value_sig5A73);
  if (var_core_value_sig3AED) return var_core_value_sig3AED;
  let var_core_value_sig9CD5 = var_core_value_sig48BC.created$;
  if (!(!var_core_value_sig9CD5 || typeof var_core_value_sig9CD5.subscribe != "function")) return new Promise(var_core_value_sig310E => {
    let var_core_value_sig2E97 = false,
      var_core_value_sig4B00,
      var_core_value_sig9896,
      var_core_value_sigA725 = var_core_value_sig1E1B => {
        var_core_value_sig2E97 || (var_core_value_sig2E97 = true, var_core_value_sig4B00 !== undefined && globalThis.clearTimeout(var_core_value_sig4B00), var_core_value_sig9896 == null || var_core_value_sig9896.unsubscribe(), var_core_value_sig310E(var_core_value_sig1E1B));
      },
      var_core_value_sig9FB3 = var_core_value_sig9CD5.subscribe(var_core_value_sig3B10 => {
        var_core_value_sig3B10.unitId === var_core_value_sig5A73 && var_core_value_sigA725(var_core_value_sig3B10);
      });
    if (var_core_value_sig9896 = var_core_value_sig9FB3, var_core_value_sig2E97) {
      var_core_value_sig9FB3.unsubscribe();
      return;
    }
    let var_core_value_sig0E44 = var_core_value_sig48BC.getRenderUnitById(var_core_value_sig5A73);
    if (var_core_value_sig0E44) {
      var_core_value_sigA725(var_core_value_sig0E44);
      return;
    }
    var_core_value_sig4B00 = globalThis.setTimeout(() => var_core_value_sigA725(var_core_value_sig48BC.getRenderUnitById(var_core_value_sig5A73) ?? undefined), Math.max(0, var_core_value_sig3E85 - Date.now()));
  });
}
async function Pa(var_core_value_sigF319, var_core_value_sig1E6B, var_core_value_sigC103 = true, var_core_value_sigCEEA = Date.now() + Ca) {
  await La(var_core_value_sigCEEA);
  let var_core_value_sig3D91 = var_core_value_sigF319.scene["afterRender$"];
  if (!var_core_value_sig3D91) {
    var_core_value_sig1E6B && Ot(var_core_value_sigF319, {
      activate: false
    });
    return;
  }
  await new Promise(var_core_value_sig243C => {
    let var_core_value_sigB3A4 = false,
      var_core_value_sigAF1B,
      var_core_value_sig906D,
      var_core_value_sig6AFB,
      var_core_value_sig2830 = () => {
        var_core_value_sigB3A4 || (var_core_value_sigB3A4 = true, var_core_value_sigAF1B !== undefined && globalThis.clearTimeout(var_core_value_sigAF1B), var_core_value_sig906D !== undefined && globalThis.clearTimeout(var_core_value_sig906D), var_core_value_sig6AFB == null || var_core_value_sig6AFB.unsubscribe(), var_core_value_sig243C());
      },
      var_core_value_sig9C3A = () => {
        var_core_value_sigAF1B !== undefined && globalThis.clearTimeout(var_core_value_sigAF1B), var_core_value_sigAF1B = globalThis.setTimeout(var_core_value_sig2830, 160);
      };
    var_core_value_sig6AFB = var_core_value_sig3D91.subscribe(var_core_value_sig89E6 => {
      var_core_value_sig89E6 && var_core_value_sig9C3A();
    }), var_core_value_sig906D = globalThis.setTimeout(var_core_value_sig2830, Math.max(0, var_core_value_sigCEEA - Date.now()));
    try {
      var_core_value_sig1E6B && Ot(var_core_value_sigF319, {
        activate: false
      }), (var_core_value_sig1E6B || var_core_value_sigC103) && var_core_value_sig9C3A();
    } catch {
      var_core_value_sig2830();
    }
  });
}
function Fa(var_core_value_sigD605) {
  let var_core_value_sig7D57 = document.createElement("div");
  return var_core_value_sig7D57.style["position"] = "fixed", var_core_value_sig7D57.style["left"] = "-100000px", var_core_value_sig7D57.style["top"] = "-100000px", var_core_value_sig7D57.style["width"] = Math.max(1, Math.round(var_core_value_sigD605.width)) + "px", var_core_value_sig7D57.style["height"] = Math.max(1, Math.round(var_core_value_sigD605.height)) + "px", var_core_value_sig7D57.style["pointerEvents"] = "none", document.body["appendChild"](var_core_value_sig7D57), var_core_value_sig7D57;
}
function Ia(var_core_value_sigCDB5) {
  var var_core_value_sig7450, var_core_value_sigA3451, var_core_value_sigB243;
  return [(var_core_value_sig7450 = var_core_value_sigCDB5.renderScope) == null ? undefined : var_core_value_sig7450.canvasRoot, (var_core_value_sigA3451 = var_core_value_sigCDB5.renderScope) == null ? undefined : var_core_value_sigA3451.contentRoot, (var_core_value_sigB243 = var_core_value_sigCDB5.renderScope) == null ? undefined : var_core_value_sigB243.rootElement].filter(var_core_value_sig0321 => !!var_core_value_sig0321).some(var_core_value_sig51CF => Array.from(var_core_value_sig51CF.querySelectorAll("canvas")).some(var_core_value_sig4743 => var_core_value_sig4743.width > 1 && var_core_value_sig4743.height > 1));
}
async function La(var_core_value_sigCCEE) {
  if (typeof document > "u" || !document.fonts || document.fonts["status"] !== "loading") return;
  let var_core_value_sig1713;
  try {
    await Promise.race([document.fonts["ready"].then(() => undefined, () => undefined), new Promise(var_core_value_sigEB6A => {
      var_core_value_sig1713 = globalThis.setTimeout(var_core_value_sigEB6A, Math.max(0, var_core_value_sigCCEE - Date.now()));
    })]);
  } finally {
    var_core_value_sig1713 !== undefined && globalThis.clearTimeout(var_core_value_sig1713);
  }
}
function Ra(var_core_value_sig231B, var_core_value_sig6E74, var_core_value_sig6177) {
  let var_core_value_sigD946 = za(var_core_value_sig6E74),
    var_core_value_sig3CFD = var_core_value_sigD946 === "tab-peer",
    var_core_value_sig2807 = () => {};
  return {
    descriptor: var_core_value_sig6E74.descriptor,
    layout: var_core_value_sigD946,
    injector: var_core_value_sig231B,
    hostElement: var_core_value_sig6177,
    container: var_core_value_sig6177,
    hostUnitId: var_core_value_sig6E74.descriptor["hostUnitId"],
    embedId: var_core_value_sig6E74.descriptor["embedId"],
    childUnitId: var_core_value_sig6E74.childUnitId,
    childType: var_core_value_sig6E74.childType,
    renderScope: {
      hostUnitId: var_core_value_sig6E74.descriptor["hostUnitId"],
      hostAnchorId: var_core_value_sig6E74.descriptor["hostAnchorId"],
      embedId: var_core_value_sig6E74.descriptor["embedId"],
      childUnitId: var_core_value_sig6E74.childUnitId,
      childType: var_core_value_sig6E74.childType,
      layout: var_core_value_sigD946,
      mode: var_core_value_sig3CFD ? "tab" : "float",
      rootElement: var_core_value_sig6177,
      contentRoot: var_core_value_sig6177,
      canvasRoot: var_core_value_sig6177,
      active$: (0, f.of)(false)
    },
    runtimeScope: {
      descriptor: var_core_value_sig6E74.descriptor,
      host: {
        unitId: var_core_value_sig6E74.descriptor["hostUnitId"],
        type: var_core_value_sig6E74.descriptor["hostType"],
        anchorId: var_core_value_sig6E74.descriptor["hostAnchorId"],
        entry: var_core_value_sig6E74.descriptor["entry"],
        layout: var_core_value_sig3CFD ? "tab-peer" : "float"
      },
      child: {
        unitId: var_core_value_sig6E74.childUnitId,
        type: var_core_value_sig6E74.childType
      },
      injector: var_core_value_sig231B,
      roots: {
        root: var_core_value_sig6177,
        content: var_core_value_sig6177,
        canvas: var_core_value_sig6177,
        overlay: var_core_value_sig6177,
        popup: var_core_value_sig6177
      },
      activate: var_core_value_sig2807,
      deactivate: var_core_value_sig2807,
      dispose: var_core_value_sig2807
    }
  };
}
function za(var_core_value_sigB45A) {
  var var_core_value_sig261A, var_core_value_sig21DD, var_core_value_sig7E2E;
  let var_core_value_sig713C = (var_core_value_sig261A = var_core_value_sigB45A.descriptor["sourceMeta"]) == null ? undefined : var_core_value_sig261A.floating;
  if (var_core_value_sig713C && typeof var_core_value_sig713C == "object" && typeof var_core_value_sig713C.layout == "string") return var_core_value_sig713C.layout;
  let var_core_value_sig0983 = (var_core_value_sig21DD = var_core_value_sigB45A.descriptor["sourceMeta"]) == null ? undefined : var_core_value_sig21DD.tab;
  return var_core_value_sigB45A.descriptor["entry"] === t.EmbedHostEntryEnum["SheetsSheetTab"] || var_core_value_sigB45A.descriptor["entry"] === t.EmbedHostEntryEnum["BasesTableListBlock"] || var_core_value_sigB45A.descriptor["entry"] === t.EmbedHostEntryEnum["SlidesPageListBlock"] || var_core_value_sig0983 && typeof var_core_value_sig0983 == "object" && var_core_value_sig0983.enabled ? "tab-peer" : ((var_core_value_sig7E2E = var_core_value_sigB45A.context) == null ? undefined : var_core_value_sig7E2E.layout) ?? "scroll-contained";
}
const Ba = 1600,
  Va = 1200,
  Ha = 32767;
let Ua = class extends a.Disposable {
  constructor(var_core_value_sig3C61, var_core_value_sigDC70, var_core_value_sigD10E, var_core_value_sigBB93, var_core_value_sig4F88, var_core_value_sig486C, var_core_value_sig717C, var_core_value_sig23AE, var_core_value_sigCB54, var_core_value_sigC7E11, var_core_value_sig6575, var_core_value_sigE901) {
    super(), this._embedModelService = var_core_value_sig3C61, this._anchorModelService = var_core_value_sigDC70, this._hostAdapterRegistry = var_core_value_sigD10E, this._restoreService = var_core_value_sigBB93, this._previewService = var_core_value_sig4F88, this._mountService = var_core_value_sig486C, this._contentSizeRegistry = var_core_value_sig717C, this._passiveViewportRegistry = var_core_value_sig23AE, this._commandService = var_core_value_sigCB54, this._univerInstanceService = var_core_value_sigC7E11, this._themeService = var_core_value_sig6575, this._imageIoService = var_core_value_sigE901, V(this, "_resources", new Map());
  }
  async prepare(var_core_value_sigB7EC) {
    var var_core_value_sigB018, var_core_value_sigE7BE;
    let var_core_value_sigC88E = var_core_value_sigB7EC.unitType === a.UniverInstanceType["UNIVER_SLIDE"] ? this._univerInstanceService["getUnit"](var_core_value_sigB7EC.unitId, a.UniverInstanceType["UNIVER_SLIDE"]) : undefined,
      var_core_value_sigC4A6 = var_core_value_sigC88E == null || (var_core_value_sigB018 = var_core_value_sigC88E.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sigB018.getId(),
      var_core_value_sig1FE3 = var_core_value_sigB7EC.unitType === a.UniverInstanceType["UNIVER_SHEET"] ? (var_core_value_sigE7BE = this._univerInstanceService["getUnit"](var_core_value_sigB7EC.unitId, a.UniverInstanceType["UNIVER_SHEET"])) == null || (var_core_value_sigE7BE = var_core_value_sigE7BE.getActiveSheet(true)) == null ? undefined : var_core_value_sigE7BE.getSheetId() : undefined;
    try {
      this._clearHost(var_core_value_sigB7EC.unitId);
      let var_core_value_sig3D46 = this._embedModelService["getActiveDescriptors"](var_core_value_sigB7EC.unitId).filter(var_core_value_sigC368 => var_core_value_sigC368.hostType === var_core_value_sigB7EC.unitType);
      for (let var_core_value_sigAD561 of var_core_value_sig3D46) await this._activateSheetTabForPrint(var_core_value_sigAD561, var_core_value_sigB7EC), await this._activateSlidePageForPrint(var_core_value_sigAD561, var_core_value_sigB7EC), await this._prepareDescriptor(var_core_value_sigAD561, var_core_value_sigB7EC);
    } finally {
      var_core_value_sig1FE3 && this._commandService["syncExecuteCommand"](v.SetWorksheetActiveOperation["id"], {
        unitId: var_core_value_sigB7EC.unitId,
        subUnitId: var_core_value_sig1FE3
      }), var_core_value_sigC4A6 && (var_core_value_sigC88E == null || var_core_value_sigC88E.pageManager["setActiveSlide"](var_core_value_sigC4A6)), this._univerInstanceService["setCurrentUnitForType"](var_core_value_sigB7EC.unitId), this._univerInstanceService["focusUnit"](var_core_value_sigB7EC.unitId);
    }
  }
  getImage(var_core_value_sigF003, var_core_value_sigE146) {
    var var_core_value_sigF6D5;
    return (var_core_value_sigF6D5 = this.getResource(var_core_value_sigF003, var_core_value_sigE146)) == null ? undefined : var_core_value_sigF6D5.source;
  }
  getResource(var_core_value_sig3B2F, var_core_value_sigE558) {
    return this._resources["get"](this._getKey(var_core_value_sig3B2F, var_core_value_sigE558));
  }
  async _activateSheetTabForPrint(var_core_value_sigA99D, var_core_value_sigB23E) {
    var var_core_value_sigDA561;
    if (var_core_value_sigB23E.unitType !== a.UniverInstanceType["UNIVER_SHEET"] || var_core_value_sigA99D.entry !== t.EmbedHostEntryEnum["SheetsSheetTab"] || this._commandService["syncExecuteCommand"](v.SetWorksheetActiveOperation["id"], {
      unitId: var_core_value_sigA99D.hostUnitId,
      subUnitId: var_core_value_sigA99D.hostAnchorId
    }) === false) return;
    let var_core_value_sig8D74 = Date.now() + 5000;
    for (; !((var_core_value_sigDA561 = this._mountService["getSession"](var_core_value_sigA99D.embedId)) != null && var_core_value_sigDA561.context) && Date.now() < var_core_value_sig8D74;) await new Promise(var_core_value_sigDB4A => window.setTimeout(var_core_value_sigDB4A, 16));
  }
  async _activateSlidePageForPrint(var_core_value_sigC3E8, var_core_value_sig3FAF1) {
    var var_core_value_sigC00C;
    if (var_core_value_sig3FAF1.unitType !== a.UniverInstanceType["UNIVER_SLIDE"] || var_core_value_sigC3E8.entry !== t.EmbedHostEntryEnum["SlidesPageListBlock"]) return;
    this._hostAdapterRegistry["activateAnchor"]({
      descriptor: var_core_value_sigC3E8,
      embedId: var_core_value_sigC3E8.embedId,
      entry: var_core_value_sigC3E8.entry,
      hostAnchorId: var_core_value_sigC3E8.hostAnchorId,
      hostType: var_core_value_sigC3E8.hostType,
      hostUnitId: var_core_value_sigC3E8.hostUnitId
    });
    let var_core_value_sig080D = Date.now() + 5000;
    for (; !((var_core_value_sigC00C = this._mountService["getSession"](var_core_value_sigC3E8.embedId)) != null && var_core_value_sigC00C.context) && Date.now() < var_core_value_sig080D;) await new Promise(var_core_value_sig6418 => window.setTimeout(var_core_value_sig6418, 16));
  }
  async _prepareDescriptor(var_core_value_sigCDBC, var_core_value_sig0F75) {
    let var_core_value_sig4B7F = Ya(this._previewService["getProvider"](var_core_value_sigCDBC.childType), var_core_value_sigCDBC);
    if (var_core_value_sig4B7F) try {
      var var_core_value_sig17D6, var_core_value_sig8915;
      let var_core_value_sigCC93 = await this._restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sigCDBC
      });
      if (!var_core_value_sigCC93.childUnitId) {
        Za(var_core_value_sigCC93, "Embedded unit is not available for print " + var_core_value_sigCC93.embedId);
        return;
      }
      let var_core_value_sig5964 = (var_core_value_sig17D6 = this._mountService["getSession"](var_core_value_sigCC93.embedId)) == null ? undefined : var_core_value_sig17D6.context,
        var_core_value_sig808B = await this._resolveViewState(var_core_value_sigCC93.embedId, var_core_value_sig4B7F, var_core_value_sig5964),
        var_core_value_sig2A26 = this._resolveSize(var_core_value_sigCC93, var_core_value_sig5964),
        var_core_value_sig1179 = await this._captureMountedCanvas(var_core_value_sigCC93, var_core_value_sig5964, var_core_value_sig2A26, var_core_value_sig0F75.dpr),
        var_core_value_sigEA921 = var_core_value_sig1179 ? undefined : await this._renderMountedScene(var_core_value_sigCC93, var_core_value_sig5964, var_core_value_sig2A26, var_core_value_sig0F75.dpr),
        var_core_value_sig8FD9 = var_core_value_sig1179 ?? (var_core_value_sigEA921 == null ? undefined : var_core_value_sigEA921.canvas) ?? (await var_core_value_sig4B7F.renderPreview({
          descriptor: var_core_value_sigCC93,
          childUnitId: var_core_value_sigCC93.childUnitId,
          childType: var_core_value_sigCC93.childType,
          width: var_core_value_sig2A26.width,
          height: var_core_value_sig2A26.height,
          dpr: var_core_value_sig0F75.dpr,
          viewState: var_core_value_sig808B,
          reason: "print",
          context: var_core_value_sig5964
        })),
        var_core_value_sig1AE5 = var_core_value_sig8FD9 instanceof HTMLCanvasElement ? var_core_value_sig8FD9 : undefined,
        var_core_value_sig7100 = this._toDataUrl(var_core_value_sig8FD9) ?? this._toDataUrl((var_core_value_sig8915 = this._previewService["getPreview"](var_core_value_sigCC93.embedId)) == null ? undefined : var_core_value_sig8915.image);
      if (!var_core_value_sig7100 && !var_core_value_sig1AE5) {
        Za(var_core_value_sigCC93, "Complete print resource could not be created for embed " + var_core_value_sigCC93.embedId);
        return;
      }
      var_core_value_sig7100 && (await this._preloadImage(var_core_value_sig7100));
      let var_core_value_sigA19A = uo(var_core_value_sig8FD9, var_core_value_sig2A26);
      this._resources["set"](this._getKey(var_core_value_sigCC93.hostUnitId, var_core_value_sigCC93.embedId), {
        canvas: var_core_value_sig1AE5,
        height: var_core_value_sigA19A.height,
        source: var_core_value_sig7100,
        verticalBreaks: var_core_value_sigEA921 == null ? undefined : var_core_value_sigEA921.verticalBreaks,
        width: var_core_value_sigA19A.width
      });
    } catch (var_core_value_sigD3F5) {
      var var_core_value_sigC88F;
      Xa(var_core_value_sigCDBC, var_core_value_sigD3F5);
      let var_core_value_sig3082 = this._toDataUrl((var_core_value_sigC88F = this._previewService["getPreview"](var_core_value_sigCDBC.embedId)) == null ? undefined : var_core_value_sigC88F.image);
      var_core_value_sig3082 && (await this._preloadImage(var_core_value_sig3082), this._resources["set"](this._getKey(var_core_value_sigCDBC.hostUnitId, var_core_value_sigCDBC.embedId), {
        height: 1,
        source: var_core_value_sig3082,
        width: 1
      }));
    }
  }
  async _captureMountedCanvas(var_core_value_sig1AFA, var_core_value_sigBCF5, var_core_value_sig988A, var_core_value_sigFC02) {
    let var_core_value_sigF71C = var_core_value_sigBCF5 && this._resolveCompleteCaptureOptions(var_core_value_sig1AFA, var_core_value_sigBCF5, var_core_value_sigFC02);
    if (var_core_value_sig1AFA.childType !== a.UniverInstanceType["UNIVER_BOARD"] && (var_core_value_sig1AFA.childType !== a.UniverInstanceType["UNIVER_BASE"] || var_core_value_sigF71C) || !var_core_value_sigBCF5) return;
    let var_core_value_sigE6341 = Nt(var_core_value_sigBCF5);
    try {
      await Ft(var_core_value_sig1AFA.childType), await Ma(var_core_value_sigBCF5, true), var_core_value_sig1AFA.childType === a.UniverInstanceType["UNIVER_BASE"] && (await (0, _.waitForBaseCanvasImages)());
      let var_core_value_sigF5D1 = Mt(var_core_value_sigBCF5, true),
        var_core_value_sig8775 = so(var_core_value_sig988A.width, var_core_value_sig988A.height, co(var_core_value_sigBCF5), var_core_value_sigFC02);
      return !var_core_value_sigF5D1 || !var_core_value_sig8775 ? undefined : (var_core_value_sig8775.context["drawImage"](var_core_value_sigF5D1, 0, 0, var_core_value_sig988A.width, var_core_value_sig988A.height), var_core_value_sig8775.canvas);
    } finally {
      var_core_value_sigE6341();
    }
  }
  async _renderMountedScene(var_core_value_sigF74F, var_core_value_sig89D7, var_core_value_sigF2B0, var_core_value_sigD77A) {
    if (!var_core_value_sig89D7 || !po(var_core_value_sigF74F.childType)) return;
    let var_core_value_sigF2C2 = this._resolveCompleteCaptureOptions(var_core_value_sigF74F, var_core_value_sig89D7, var_core_value_sigD77A);
    if (var_core_value_sigF2C2) {
      var var_core_value_sig2990;
      let var_core_value_sig481B = await this._renderCompleteScene(var_core_value_sigF74F, var_core_value_sig89D7, var_core_value_sigF2C2);
      return var_core_value_sig481B ? {
        canvas: var_core_value_sig481B,
        verticalBreaks: (var_core_value_sig2990 = var_core_value_sigF2C2.verticalBreaks) == null ? undefined : var_core_value_sig2990.map(var_core_value_sig1896 => var_core_value_sig1896 * var_core_value_sigF2C2.scale * var_core_value_sigF2C2.pixelRatio)
      } : undefined;
    }
    let var_core_value_sigD300 = Nt(var_core_value_sig89D7);
    try {
      await Ft(var_core_value_sigF74F.childType);
      let var_core_value_sig13D7 = await lo(var_core_value_sig89D7);
      if (!var_core_value_sig13D7) return;
      let var_core_value_sig90C0 = so(var_core_value_sigF2B0.width, var_core_value_sigF2B0.height, co(var_core_value_sig89D7), var_core_value_sigD77A);
      return var_core_value_sig90C0 ? (io(var_core_value_sig13D7, var_core_value_sig90C0.context, {
        height: var_core_value_sigF2B0.height,
        sourceLeft: 0,
        sourceTop: 0,
        targetLeft: 0,
        targetTop: 0,
        width: var_core_value_sigF2B0.width
      }, 1), {
        canvas: var_core_value_sig90C0.canvas
      }) : undefined;
    } finally {
      var_core_value_sigD300();
    }
  }
  async _renderCompleteScene(var_core_value_sig6F77, var_core_value_sigFA4B, var_core_value_sig2AB0) {
    let {
        bodyViewportWidth: var_core_value_sig853D,
        bodyViewportHeight: var_core_value_sigD1F0,
        contentBodyWidth: var_core_value_sig3D4E,
        contentBodyHeight: var_core_value_sig79C0,
        fullWidth: var_core_value_sig173D,
        fullHeight: var_core_value_sig6F1A,
        originalScrollX: var_core_value_sig1802,
        originalScroll: var_core_value_sigCFA7,
        scale: var_core_value_sig31C2,
        viewportProvider: var_core_value_sigA677
      } = var_core_value_sig2AB0,
      var_core_value_sigC015 = so(var_core_value_sig173D * var_core_value_sig31C2, var_core_value_sig6F1A * var_core_value_sig31C2, co(var_core_value_sigFA4B), var_core_value_sig2AB0.pixelRatio),
      var_core_value_sigAEBC = so(var_core_value_sig2AB0.viewport["width"], var_core_value_sig2AB0.viewport["height"], co(var_core_value_sigFA4B), var_core_value_sig2AB0.pixelRatio);
    if (!var_core_value_sigC015 || !var_core_value_sigAEBC) return;
    let var_core_value_sig366A = Nt(var_core_value_sigFA4B);
    try {
      let var_core_value_sigF1B2 = await lo(var_core_value_sigFA4B);
      if (!var_core_value_sigF1B2) return;
      let var_core_value_sigC2BB = $a(var_core_value_sig3D4E, var_core_value_sig853D),
        var_core_value_sigD9DB = $a(var_core_value_sig79C0, var_core_value_sigD1F0);
      for (let var_core_value_sig0285 of var_core_value_sigC2BB) for (let var_core_value_sig1A0F of var_core_value_sigD9DB) eo(var_core_value_sigFA4B, var_core_value_sigA677, var_core_value_sig0285, var_core_value_sig1A0F), await Ft(var_core_value_sig6F77.childType), await Ma(var_core_value_sigFA4B, true), var_core_value_sig6F77.childType === a.UniverInstanceType["UNIVER_BASE"] && (await (0, _.waitForBaseCanvasImages)()), var_core_value_sigAEBC.nativeContext["clearRect"](0, 0, var_core_value_sig2AB0.viewport["width"], var_core_value_sig2AB0.viewport["height"]), var_core_value_sigF1B2.makeDirty(true), var_core_value_sigF1B2.render(var_core_value_sigAEBC.context), to(var_core_value_sigAEBC.canvas, var_core_value_sigC015.context, var_core_value_sig2AB0, var_core_value_sig0285, var_core_value_sig1A0F);
      return var_core_value_sigC015.canvas;
    } finally {
      try {
        eo(var_core_value_sigFA4B, var_core_value_sigA677, var_core_value_sig1802, var_core_value_sigCFA7), await Ma(var_core_value_sigFA4B, true);
      } finally {
        var_core_value_sig366A();
      }
    }
  }
  _resolveCompleteCaptureOptions(var_core_value_sigA89C, var_core_value_sigDD3E, var_core_value_sig182B) {
    var var_core_value_sig2A99, var_core_value_sig18A6, var_core_value_sigA98B, var_core_value_sig458C, var_core_value_sig8DEC;
    let var_core_value_sig522F = var_core_value_sigA89C.childUnitId,
      var_core_value_sigD718 = var_core_value_sigA89C.childType === a.UniverInstanceType["UNIVER_SHEET"] || var_core_value_sigA89C.childType === a.UniverInstanceType["UNIVER_BASE"],
      var_core_value_sig41CF = var_core_value_sigA89C.hostType === a.UniverInstanceType["UNIVER_DOC"] && var_core_value_sigA89C.entry === t.EmbedHostEntryEnum["DocsCustomBlock"] && var_core_value_sigD718,
      var_core_value_sig1EFD = var_core_value_sigD718 && fo(var_core_value_sigA89C.entry);
    if (!var_core_value_sig522F || !var_core_value_sig41CF && !var_core_value_sig1EFD) return;
    let var_core_value_sig38BB = var_core_value_sigDD3E.container["getBoundingClientRect"]();
    if (!qa(var_core_value_sig38BB.width) || !qa(var_core_value_sig38BB.height)) return;
    let var_core_value_sig017C = this._measureContentSize(var_core_value_sigA89C, var_core_value_sigDD3E),
      var_core_value_sig44BC = var_core_value_sig1EFD ? this._resolveTabViewportSize(var_core_value_sigA89C, var_core_value_sig38BB) : var_core_value_sig38BB,
      var_core_value_sigAB7B = var_core_value_sig1EFD && qa(var_core_value_sig017C == null ? undefined : var_core_value_sig017C.width) ? Math.max(var_core_value_sig44BC.width, var_core_value_sig017C.width) : var_core_value_sig41CF ? Qa(var_core_value_sigDD3E, var_core_value_sig38BB.width) : var_core_value_sig38BB.width,
      var_core_value_sig55EE = var_core_value_sig017C == null ? undefined : var_core_value_sig017C.height;
    if (!qa(var_core_value_sig55EE) || var_core_value_sig41CF && var_core_value_sig55EE <= var_core_value_sig38BB.height) return;
    let var_core_value_sigE9F6 = var_core_value_sig1EFD ? mo(var_core_value_sigAB7B, var_core_value_sig55EE, var_core_value_sig44BC.width >= var_core_value_sig44BC.height) : undefined,
      var_core_value_sig3BA9 = (var_core_value_sigE9F6 == null ? undefined : var_core_value_sigE9F6.height) ?? var_core_value_sig55EE,
      var_core_value_sigE230 = this._passiveViewportRegistry["get"](var_core_value_sigA89C.childType, var_core_value_sigDD3E.layout);
    if (!(var_core_value_sigE230 != null && var_core_value_sigE230.getVerticalScroll)) return;
    let var_core_value_sig5AC8 = var_core_value_sig1EFD ? Math.max(0, ((var_core_value_sig2A99 = var_core_value_sigE230.getStickyLeftWidth) == null ? undefined : var_core_value_sig2A99.call(var_core_value_sigE230, var_core_value_sigDD3E)) ?? 0) : 0,
      var_core_value_sigE492 = Math.max(0, ((var_core_value_sig18A6 = var_core_value_sigE230.getStickyHeaderHeight) == null ? undefined : var_core_value_sig18A6.call(var_core_value_sigE230, var_core_value_sigDD3E)) ?? 0),
      var_core_value_sig3465 = Math.max(0, ((var_core_value_sigA98B = var_core_value_sigE230.getStickyFooterHeight) == null ? undefined : var_core_value_sigA98B.call(var_core_value_sigE230, var_core_value_sigDD3E)) ?? 0),
      var_core_value_sig38DD = var_core_value_sig38BB.width - var_core_value_sig5AC8,
      var_core_value_sig89AE = var_core_value_sig38BB.height - var_core_value_sigE492 - var_core_value_sig3465,
      var_core_value_sig3A69 = var_core_value_sigAB7B - var_core_value_sig5AC8,
      var_core_value_sigD64C1 = var_core_value_sig3BA9 - var_core_value_sigE492 - var_core_value_sig3465;
    if (var_core_value_sig38DD <= 0 || var_core_value_sig89AE <= 0 || var_core_value_sig3A69 <= 0 || var_core_value_sigD64C1 <= 0) return;
    let var_core_value_sig3B0B = var_core_value_sigE9F6 ? var_core_value_sigE9F6.scale : Math.min(1, Ha / var_core_value_sigAB7B, Ha / var_core_value_sig3BA9);
    if (!qa(var_core_value_sig3B0B) || var_core_value_sigAB7B * var_core_value_sig3B0B > Ha || var_core_value_sig3BA9 * var_core_value_sig3B0B > Ha) return;
    let var_core_value_sig1E7C = var_core_value_sig41CF && var_core_value_sigA89C.childType === a.UniverInstanceType["UNIVER_SHEET"] ? Math.min(1, var_core_value_sigAB7B / var_core_value_sig38BB.width) : 1,
      var_core_value_sigD3C4 = Math.min(Math.max(1, var_core_value_sig182B), Ha / (var_core_value_sigAB7B * var_core_value_sig3B0B), Ha / (var_core_value_sig3BA9 * var_core_value_sig3B0B));
    return {
      bodyViewportWidth: var_core_value_sig38DD,
      bodyViewportHeight: var_core_value_sig89AE,
      contentBodyWidth: var_core_value_sig3A69,
      contentBodyHeight: var_core_value_sigD64C1,
      fullWidth: var_core_value_sigAB7B,
      fullHeight: var_core_value_sig3BA9,
      originalScrollX: ((var_core_value_sig458C = var_core_value_sigE230.getHorizontalScroll) == null ? undefined : var_core_value_sig458C.call(var_core_value_sigE230, var_core_value_sigDD3E)) ?? 0,
      originalScroll: var_core_value_sigE230.getVerticalScroll(var_core_value_sigDD3E) ?? 0,
      pixelRatio: var_core_value_sigD3C4,
      scale: var_core_value_sig3B0B,
      sceneSourceScale: var_core_value_sig1E7C,
      stickyLeftWidth: var_core_value_sig5AC8,
      stickyFooterHeight: var_core_value_sig3465,
      stickyHeaderHeight: var_core_value_sigE492,
      verticalBreaks: var_core_value_sig017C == null || (var_core_value_sig8DEC = var_core_value_sig017C.verticalBreaks) == null ? undefined : var_core_value_sig8DEC.filter(var_core_value_sigA363 => var_core_value_sigA363 <= var_core_value_sig3BA9),
      viewport: var_core_value_sig38BB,
      viewportProvider: var_core_value_sigE230
    };
  }
  _measureContentSize(var_core_value_sigBC8B, var_core_value_sigEE2E) {
    let var_core_value_sigCF06 = var_core_value_sigBC8B.childUnitId;
    if (!var_core_value_sigCF06) return;
    let var_core_value_sig6BCD1 = var_core_value_sigEE2E.container["getBoundingClientRect"](),
      var_core_value_sigC664 = this._univerInstanceService["getUnit"](var_core_value_sigCF06, var_core_value_sigBC8B.childType),
      var_core_value_sig1B7B = var_core_value_sigBC8B.hostType === a.UniverInstanceType["UNIVER_DOC"] && var_core_value_sigBC8B.childType === a.UniverInstanceType["UNIVER_SHEET"];
    return this._contentSizeRegistry["measureContentSize"]({
      childType: var_core_value_sigBC8B.childType,
      childUnit: var_core_value_sigC664,
      childUnitId: var_core_value_sigCF06,
      injector: var_core_value_sigEE2E.runtimeScope["injector"] ?? var_core_value_sigEE2E.injector,
      viewportHeight: var_core_value_sig6BCD1.height,
      viewportWidth: var_core_value_sig1B7B ? Qa(var_core_value_sigEE2E, var_core_value_sig6BCD1.width) : var_core_value_sig6BCD1.width
    });
  }
  async _resolveViewState(var_core_value_sig1F31, var_core_value_sigEA821, var_core_value_sig65BB) {
    var var_core_value_sig69B1;
    return var_core_value_sig65BB ? var_core_value_sigEA821.collectViewState(var_core_value_sig65BB) : (var_core_value_sig69B1 = this._previewService["getPreview"](var_core_value_sig1F31)) == null ? undefined : var_core_value_sig69B1.viewState;
  }
  _resolveSize(var_core_value_sigAEDE, var_core_value_sig139C) {
    var var_core_value_sigF2D6;
    if (var_core_value_sig139C && fo(var_core_value_sigAEDE.entry) && (var_core_value_sigAEDE.childType === a.UniverInstanceType["UNIVER_SHEET"] || var_core_value_sigAEDE.childType === a.UniverInstanceType["UNIVER_BASE"])) {
      let var_core_value_sigFBA5 = this._measureContentSize(var_core_value_sigAEDE, var_core_value_sig139C);
      if (qa(var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.width) && qa(var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.height)) {
        let var_core_value_sig777D = this._resolveTabViewportSize(var_core_value_sigAEDE, var_core_value_sig139C.container["getBoundingClientRect"]()),
          var_core_value_sig3F4C = Math.max(var_core_value_sig777D.width, var_core_value_sigFBA5.width),
          var_core_value_sigD65A = mo(var_core_value_sig3F4C, var_core_value_sigFBA5.height, var_core_value_sig777D.width >= var_core_value_sig777D.height);
        return {
          width: Math.max(1, Math.round(var_core_value_sig3F4C * var_core_value_sigD65A.scale)),
          height: Math.max(1, Math.round(var_core_value_sigD65A.height * var_core_value_sigD65A.scale))
        };
      }
    }
    if (var_core_value_sigAEDE.entry === t.EmbedHostEntryEnum["SlidesPageListBlock"]) {
      let var_core_value_sigAC47 = this._univerInstanceService["getUnit"](var_core_value_sigAEDE.hostUnitId, a.UniverInstanceType["UNIVER_SLIDE"]),
        var_core_value_sigA06F = var_core_value_sigAC47 == null ? undefined : var_core_value_sigAC47.getSnapshot().defaultPageSize;
      if (qa(var_core_value_sigA06F == null ? undefined : var_core_value_sigA06F.width) && qa(var_core_value_sigA06F == null ? undefined : var_core_value_sigA06F.height)) return var_core_value_sigA06F;
    }
    let var_core_value_sig810E = var_core_value_sig139C == null ? undefined : var_core_value_sig139C.container["getBoundingClientRect"]().width,
      var_core_value_sigABB1 = var_core_value_sig139C == null ? undefined : var_core_value_sig139C.container["getBoundingClientRect"]().height;
    if (qa(var_core_value_sig810E) && qa(var_core_value_sigABB1)) return {
      width: var_core_value_sig810E,
      height: var_core_value_sigABB1
    };
    let var_core_value_sig3F70 = (var_core_value_sigF2D6 = this._anchorModelService["getAnchor"](var_core_value_sigAEDE.hostUnitId, var_core_value_sigAEDE.hostAnchorId)) == null ? undefined : var_core_value_sigF2D6.hostContext,
      var_core_value_sig9F91 = Wa(var_core_value_sig3F70 == null ? undefined : var_core_value_sig3F70.width),
      var_core_value_sigC9C8 = Wa(var_core_value_sig3F70 == null ? undefined : var_core_value_sig3F70.height);
    return var_core_value_sig9F91 && var_core_value_sigC9C8 ? {
      width: var_core_value_sig9F91,
      height: var_core_value_sigC9C8
    } : var_core_value_sigAEDE.entry === t.EmbedHostEntryEnum["DocsCustomBlock"] ? (0, h.resolveDocsCustomBlockSize)(var_core_value_sigAEDE.childType) : var_core_value_sigAEDE.entry === t.EmbedHostEntryEnum["SlidesFloatingObject"] ? {
      width: 560,
      height: 315
    } : {
      width: Ba,
      height: Va
    };
  }
  _resolveTabViewportSize(var_core_value_sigC444, var_core_value_sig4B40) {
    var var_core_value_sig9F6D;
    if (var_core_value_sigC444.entry !== t.EmbedHostEntryEnum["SlidesPageListBlock"]) return var_core_value_sig4B40;
    let var_core_value_sigE1A2 = this._univerInstanceService["getUnit"](var_core_value_sigC444.hostUnitId, a.UniverInstanceType["UNIVER_SLIDE"]),
      var_core_value_sig4767 = (var_core_value_sigE1A2 == null || (var_core_value_sig9F6D = var_core_value_sigE1A2.pageManager["getSlide"](var_core_value_sigC444.hostAnchorId)) == null ? undefined : var_core_value_sig9F6D.getData().pageSize) ?? (var_core_value_sigE1A2 == null ? undefined : var_core_value_sigE1A2.getSnapshot().defaultPageSize);
    return qa(var_core_value_sig4767 == null ? undefined : var_core_value_sig4767.width) && qa(var_core_value_sig4767.height) ? var_core_value_sig4767 : var_core_value_sig4B40;
  }
  _toDataUrl(var_core_value_sig2591) {
    if (typeof var_core_value_sig2591 == "string") return var_core_value_sig2591;
    if (!var_core_value_sig2591 || typeof document > "u") return;
    let var_core_value_sig7C12 = Ga(this._themeService);
    if (var_core_value_sig2591 instanceof HTMLCanvasElement) {
      let var_core_value_sig770E = var_core_value_sig2591.getContext("2d");
      return var_core_value_sig770E && (var_core_value_sig770E.save(), var_core_value_sig770E.globalCompositeOperation = "destination-over", var_core_value_sig770E.fillStyle = var_core_value_sig7C12, var_core_value_sig770E.fillRect(0, 0, var_core_value_sig2591.width, var_core_value_sig2591.height), var_core_value_sig770E.restore()), ao(var_core_value_sig2591);
    }
    let var_core_value_sig8EC51 = document.createElement("canvas");
    var_core_value_sig8EC51.width = var_core_value_sig2591.width, var_core_value_sig8EC51.height = var_core_value_sig2591.height;
    let var_core_value_sig4B1B = var_core_value_sig8EC51.getContext("2d");
    if (var_core_value_sig4B1B) return var_core_value_sig4B1B.fillStyle = var_core_value_sig7C12, var_core_value_sig4B1B.fillRect(0, 0, var_core_value_sig8EC51.width, var_core_value_sig8EC51.height), var_core_value_sig4B1B.drawImage(var_core_value_sig2591, 0, 0), ao(var_core_value_sig8EC51);
  }
  _preloadImage(var_core_value_sig14C3) {
    return this._imageIoService["getImageSourceCache"](var_core_value_sig14C3, a.ImageSourceType["URL"]) ? Promise.resolve() : new Promise(var_core_value_sig4654 => {
      let var_core_value_sigB26B = new Image();
      var_core_value_sigB26B.onload = () => {
        this._imageIoService["addImageSourceCache"](var_core_value_sig14C3, a.ImageSourceType["URL"], var_core_value_sigB26B), var_core_value_sig4654();
      }, var_core_value_sigB26B.onerror = () => var_core_value_sig4654(), var_core_value_sigB26B.src = var_core_value_sig14C3;
    });
  }
  _clearHost(var_core_value_sig95A8) {
    let var_core_value_sig3F90 = var_core_value_sig95A8 + "::";
    Array.from(this._resources["keys"]()).forEach(var_core_value_sig019B => {
      var_core_value_sig019B.startsWith(var_core_value_sig3F90) && this._resources["delete"](var_core_value_sig019B);
    });
  }
  _getKey(var_core_value_sigB489, var_core_value_sig76E7) {
    return var_core_value_sigB489 + "::" + var_core_value_sig76E7;
  }
  dispose() {
    this._resources["clear"](), super.dispose();
  }
};
Ua = Z([X(0, (0, a.Inject)(t.EmbedModelService)), X(1, (0, a.Inject)(t.EmbedHostAnchorModelService)), X(2, (0, a.Inject)(t.EmbedHostAdapterRegistryService)), X(3, (0, a.Inject)(Gr)), X(4, (0, a.Inject)(Ur)), X(5, (0, a.Inject)(Ht)), X(6, (0, a.Inject)(ba)), X(7, (0, a.Inject)(ii)), X(8, a.ICommandService), X(9, a.IUniverInstanceService), X(10, (0, a.Inject)(a.ThemeService)), X(11, a.IImageIoService)], Ua);
function Wa(var_core_value_sig6D58) {
  return qa(var_core_value_sig6D58) ? var_core_value_sig6D58 : undefined;
}
function Ga(var_core_value_sig280D) {
  let var_core_value_sig964B = var_core_value_sig280D.getColorFromTheme("gray.0"),
    var_core_value_sigB26E = var_core_value_sig280D.getColorFromTheme("gray.1000");
  return Ka(var_core_value_sigB26E) > Ka(var_core_value_sig964B) ? var_core_value_sigB26E : var_core_value_sig964B;
}
function Ka(var_core_value_sig81691) {
  let var_core_value_sigFD9A = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(var_core_value_sig81691);
  return var_core_value_sigFD9A ? Number.parseInt(var_core_value_sigFD9A[1], 16) + Number.parseInt(var_core_value_sigFD9A[2], 16) + Number.parseInt(var_core_value_sigFD9A[3], 16) : 0;
}
function qa(var_core_value_sigE0B5) {
  return typeof var_core_value_sigE0B5 == "number" && Number.isFinite(var_core_value_sigE0B5) && var_core_value_sigE0B5 > 0;
}
function Ja(var_core_value_sigD847) {
  return var_core_value_sigD847.hostType === a.UniverInstanceType["UNIVER_DOC"] && var_core_value_sigD847.entry === t.EmbedHostEntryEnum["DocsCustomBlock"] && (var_core_value_sigD847.childType === a.UniverInstanceType["UNIVER_SHEET"] || var_core_value_sigD847.childType === a.UniverInstanceType["UNIVER_BASE"]);
}
function Ya(var_core_value_sig5CF8, var_core_value_sig5743) {
  if (!var_core_value_sig5CF8 && Ja(var_core_value_sig5743)) throw Error("Print preview provider is not available for embed " + var_core_value_sig5743.embedId);
  return var_core_value_sig5CF8;
}
function Xa(var_core_value_sig5161, var_core_value_sig9583) {
  if (Ja(var_core_value_sig5161)) throw var_core_value_sig9583;
}
function Za(var_core_value_sig713A, var_core_value_sigE7DD) {
  if (Ja(var_core_value_sig713A)) throw Error(var_core_value_sigE7DD);
}
function Qa(var_core_value_sigC248, var_core_value_sigA8641) {
  let var_core_value_sig70CD1 = var_core_value_sigC248.container["closest"]('[data-embed-docs-custom-block-sheet-like="true"]'),
    var_core_value_sigA25D = var_core_value_sig70CD1 == null ? undefined : var_core_value_sig70CD1.getBoundingClientRect().width;
  return qa(var_core_value_sigA25D) ? Math.min(var_core_value_sigA8641, var_core_value_sigA25D) : var_core_value_sigA8641;
}
function $a(var_core_value_sigD49E, var_core_value_sig2C20) {
  let var_core_value_sigB994 = Math.max(0, var_core_value_sigD49E - var_core_value_sig2C20),
    var_core_value_sigA02B = [0];
  for (let var_core_value_sig7E7F = var_core_value_sig2C20; var_core_value_sig7E7F < var_core_value_sigB994; var_core_value_sig7E7F += var_core_value_sig2C20) var_core_value_sigA02B.push(var_core_value_sig7E7F);
  return var_core_value_sigB994 > var_core_value_sigA02B[var_core_value_sigA02B.length - 1] && var_core_value_sigA02B.push(var_core_value_sigB994), var_core_value_sigA02B;
}
function eo(var_core_value_sig01FE, var_core_value_sig9818, var_core_value_sig5382, var_core_value_sigF177) {
  var_core_value_sig9818.handleWheel({
    ...var_core_value_sig01FE,
    event: new WheelEvent("wheel"),
    stage: "stage2",
    source: "print-capture",
    viewportScrollX: var_core_value_sig5382,
    viewportScrollY: var_core_value_sigF177
  });
}
function to(var_core_value_sig3E46, var_core_value_sigF094, var_core_value_sigE914, var_core_value_sigBBB6, var_core_value_sig0F58) {
  let {
      fullHeight: var_core_value_sigF2F8,
      scale: var_core_value_sig6407,
      stickyFooterHeight: var_core_value_sigB2D8,
      stickyHeaderHeight: var_core_value_sig3903,
      stickyLeftWidth: var_core_value_sig9193,
      viewport: var_core_value_sig788E
    } = var_core_value_sigE914,
    var_core_value_sigC5D3 = no(var_core_value_sigE914, var_core_value_sigBBB6, var_core_value_sig0F58);
  oo(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sigC5D3.height,
    sourceLeft: var_core_value_sigC5D3.sourceLeft,
    sourceTop: var_core_value_sigC5D3.sourceTop,
    targetLeft: var_core_value_sigC5D3.targetLeft,
    targetTop: var_core_value_sigC5D3.targetTop,
    width: var_core_value_sigC5D3.width
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sig0F58 === 0 && var_core_value_sig3903 > 0 && oo(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sig3903,
    sourceLeft: var_core_value_sigC5D3.sourceLeft,
    sourceTop: 0,
    targetLeft: var_core_value_sigC5D3.targetLeft,
    targetTop: 0,
    width: var_core_value_sigC5D3.width
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sigBBB6 === 0 && var_core_value_sig9193 > 0 && oo(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sigC5D3.height,
    sourceLeft: 0,
    sourceTop: var_core_value_sigC5D3.sourceTop,
    targetLeft: 0,
    targetTop: var_core_value_sigC5D3.targetTop,
    width: var_core_value_sig9193
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sigBBB6 === 0 && var_core_value_sig0F58 === 0 && var_core_value_sig9193 > 0 && var_core_value_sig3903 > 0 && oo(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sig3903,
    sourceLeft: 0,
    sourceTop: 0,
    targetLeft: 0,
    targetTop: 0,
    width: var_core_value_sig9193
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sig0F58 === 0 && var_core_value_sigB2D8 > 0 && (oo(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sigB2D8,
    sourceLeft: var_core_value_sigC5D3.sourceLeft,
    sourceTop: var_core_value_sig788E.height - var_core_value_sigB2D8,
    targetLeft: var_core_value_sigC5D3.targetLeft,
    targetTop: var_core_value_sigF2F8 - var_core_value_sigB2D8,
    width: var_core_value_sigC5D3.width
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sigBBB6 === 0 && var_core_value_sig9193 > 0 && oo(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sigB2D8,
    sourceLeft: 0,
    sourceTop: var_core_value_sig788E.height - var_core_value_sigB2D8,
    targetLeft: 0,
    targetTop: var_core_value_sigF2F8 - var_core_value_sigB2D8,
    width: var_core_value_sig9193
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio));
}
function no(var_core_value_sig8DC1, var_core_value_sig4013, var_core_value_sig73F7) {
  let var_core_value_sig6087 = ro(var_core_value_sig4013, var_core_value_sig8DC1.bodyViewportWidth, var_core_value_sig8DC1.contentBodyWidth),
    var_core_value_sig24A4 = ro(var_core_value_sig73F7, var_core_value_sig8DC1.bodyViewportHeight, var_core_value_sig8DC1.contentBodyHeight);
  return {
    height: var_core_value_sig24A4.size,
    sourceLeft: var_core_value_sig8DC1.stickyLeftWidth + var_core_value_sig6087.sourceOffset,
    sourceTop: var_core_value_sig8DC1.stickyHeaderHeight + var_core_value_sig24A4.sourceOffset,
    targetLeft: var_core_value_sig8DC1.stickyLeftWidth + var_core_value_sig6087.target,
    targetTop: var_core_value_sig8DC1.stickyHeaderHeight + var_core_value_sig24A4.target,
    width: var_core_value_sig6087.size
  };
}
function ro(var_core_value_sigC40D, var_core_value_sig2EC7, var_core_value_sig4C6E) {
  let var_core_value_sig00FB = var_core_value_sigC40D % var_core_value_sig2EC7,
    var_core_value_sig49C2 = var_core_value_sigC40D > 0 && var_core_value_sig00FB > 0 ? var_core_value_sig2EC7 - var_core_value_sig00FB : 0,
    var_core_value_sigFEF1 = var_core_value_sigC40D + var_core_value_sig49C2;
  return {
    size: Math.max(0, Math.min(var_core_value_sig2EC7 - var_core_value_sig49C2, var_core_value_sig4C6E - var_core_value_sigFEF1)),
    sourceOffset: var_core_value_sig49C2,
    target: var_core_value_sigFEF1
  };
}
function io(var_core_value_sigF93A, var_core_value_sig1575, var_core_value_sig3A97, var_core_value_sigD765) {
  var_core_value_sig3A97.width <= 0 || var_core_value_sig3A97.height <= 0 || (var_core_value_sig1575.save(), var_core_value_sig1575.scale(var_core_value_sigD765, var_core_value_sigD765), var_core_value_sig1575.beginPath(), var_core_value_sig1575.rect(var_core_value_sig3A97.targetLeft, var_core_value_sig3A97.targetTop, var_core_value_sig3A97.width, var_core_value_sig3A97.height), var_core_value_sig1575.clip(), var_core_value_sig1575.translate(var_core_value_sig3A97.targetLeft - var_core_value_sig3A97.sourceLeft, var_core_value_sig3A97.targetTop - var_core_value_sig3A97.sourceTop), var_core_value_sigF93A.makeDirty(true), var_core_value_sigF93A.render(var_core_value_sig1575), var_core_value_sig1575.restore());
}
function ao(var_core_value_sig024C) {
  try {
    return var_core_value_sig024C.toDataURL("image/png");
  } catch {
    return;
  }
}
function oo(var_core_value_sig83B2, var_core_value_sig3FE7, var_core_value_sigF9F1, var_core_value_sigC137, var_core_value_sigE0AC = 1, var_core_value_sig768A = 1) {
  var_core_value_sigF9F1.width <= 0 || var_core_value_sigF9F1.height <= 0 || (var_core_value_sig3FE7.save(), var_core_value_sig3FE7.scale(var_core_value_sigC137, var_core_value_sigC137), var_core_value_sig3FE7.drawImage(var_core_value_sig83B2, var_core_value_sigF9F1.sourceLeft * var_core_value_sigE0AC * var_core_value_sig768A, var_core_value_sigF9F1.sourceTop * var_core_value_sigE0AC * var_core_value_sig768A, var_core_value_sigF9F1.width * var_core_value_sigE0AC * var_core_value_sig768A, var_core_value_sigF9F1.height * var_core_value_sigE0AC * var_core_value_sig768A, var_core_value_sigF9F1.targetLeft, var_core_value_sigF9F1.targetTop, var_core_value_sigF9F1.width, var_core_value_sigF9F1.height), var_core_value_sig3FE7.restore());
}
function so(var_core_value_sig6D9D, var_core_value_sig73E5, var_core_value_sigDCEA, var_core_value_sig8936 = 1) {
  if (!qa(var_core_value_sig6D9D) || !qa(var_core_value_sig73E5)) return;
  let var_core_value_sigB6AF = document.createElement("canvas");
  var_core_value_sigB6AF.width = Math.max(1, Math.ceil(var_core_value_sig6D9D * var_core_value_sig8936)), var_core_value_sigB6AF.height = Math.max(1, Math.ceil(var_core_value_sig73E5 * var_core_value_sig8936));
  let var_core_value_sig88BA = var_core_value_sigB6AF.getContext("2d");
  if (!var_core_value_sig88BA) return;
  let var_core_value_sig1B7C = new p["UniverPrintingContext"](var_core_value_sig88BA, {
    canvasColorService: var_core_value_sigDCEA
  });
  return var_core_value_sig8936 !== 1 && var_core_value_sig1B7C.scale(var_core_value_sig8936, var_core_value_sig8936), {
    canvas: var_core_value_sigB6AF,
    context: var_core_value_sig1B7C,
    nativeContext: var_core_value_sig88BA
  };
}
function co(var_core_value_sig7EBF) {
  try {
    return (var_core_value_sig7EBF.runtimeScope["injector"] ?? var_core_value_sig7EBF.injector).get(p.ICanvasColorService);
  } catch {
    return;
  }
}
async function lo(var_core_value_sig1F7B) {
  await Ma(var_core_value_sig1F7B, true);
  try {
    var var_core_value_sig7F3C;
    return ((var_core_value_sig7F3C = (var_core_value_sig1F7B.runtimeScope["injector"] ?? var_core_value_sig1F7B.injector).get(p.IRenderManagerService).getRenderUnitById(var_core_value_sig1F7B.childUnitId)) == null ? undefined : var_core_value_sig7F3C.scene) ?? undefined;
  } catch {
    return;
  }
}
function uo(var_core_value_sig47F8, var_core_value_sigB2F9) {
  return var_core_value_sig47F8 == null || typeof var_core_value_sig47F8 == "string" ? var_core_value_sigB2F9 : {
    width: var_core_value_sig47F8.width,
    height: var_core_value_sig47F8.height
  };
}
function fo(var_core_value_sig0873) {
  return var_core_value_sig0873 === t.EmbedHostEntryEnum["SheetsSheetTab"] || var_core_value_sig0873 === t.EmbedHostEntryEnum["BasesTableListBlock"] || var_core_value_sig0873 === t.EmbedHostEntryEnum["SlidesPageListBlock"];
}
function po(var_core_value_sig5B8B) {
  return var_core_value_sig5B8B === a.UniverInstanceType["UNIVER_SHEET"] || var_core_value_sig5B8B === a.UniverInstanceType["UNIVER_BASE"] || var_core_value_sig5B8B === a.UniverInstanceType["UNIVER_BOARD"] || var_core_value_sig5B8B === a.UniverInstanceType["UNIVER_SLIDE"];
}
function mo(var_core_value_sig7D371, var_core_value_sigA77D, var_core_value_sigC8D0) {
  let var_core_value_sig5D02 = var_core_value_sigC8D0 ? Ba : 1200,
    var_core_value_sigC936 = var_core_value_sigC8D0 ? Va : 1600,
    var_core_value_sig72C0 = Math.min(1, var_core_value_sig5D02 / var_core_value_sig7D371);
  return {
    height: Math.min(var_core_value_sigA77D, var_core_value_sigC936 / var_core_value_sig72C0),
    scale: var_core_value_sig72C0
  };
}
const ho = "UniverEmbedPrintImage",
  go = "UniverEmbedPrintPlaceholder";
function _o(var_core_value_sigBEAE) {
  let var_core_value_sigC1DE = (0, c.useDependency)(Ua),
    var_core_value_sig90E7 = oi(var_core_value_sigBEAE.data),
    var_core_value_sig76C1 = var_core_value_sig90E7 ? var_core_value_sigC1DE.getImage(var_core_value_sig90E7.hostUnitId ?? var_core_value_sigBEAE.unitId, var_core_value_sig90E7.embedId) : undefined;
  return var_core_value_sig76C1 ? (0, m.jsx)("img", {
    alt: "",
    src: var_core_value_sig76C1,
    style: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  }) : null;
}
function vo() {
  return null;
}
function yo(var_core_value_sigCF5A, var_core_value_sig77FC = 1, var_core_value_sig4D7C = 1) {
  let var_core_value_sigAE54 = var_core_value_sigCF5A.deltaX / (Math.abs(var_core_value_sig77FC) || 1),
    var_core_value_sig44B7 = var_core_value_sigCF5A.deltaY / (Math.abs(var_core_value_sig4D7C) || 1);
  if (var_core_value_sigCF5A.shiftKey) var_core_value_sigAE54 = (var_core_value_sigCF5A.deltaY || var_core_value_sigCF5A.deltaX) * 3 / (Math.abs(var_core_value_sig77FC) || 1), var_core_value_sig44B7 = 0;else {
    let var_core_value_sig7947 = Math.abs(var_core_value_sigAE54),
      var_core_value_sig7FEC = Math.abs(var_core_value_sig44B7);
    var_core_value_sig7FEC >= var_core_value_sig7947 * 2 ? var_core_value_sigAE54 = 0 : var_core_value_sig7947 >= var_core_value_sig7FEC * 2 && (var_core_value_sig44B7 = 0);
  }
  return {
    offsetX: var_core_value_sigAE54,
    offsetY: var_core_value_sig44B7
  };
}
function bo(var_core_value_sigD285, var_core_value_sig0C83, var_core_value_sig5003) {
  if (!var_core_value_sig0C83) return false;
  let {
    offsetX: var_core_value_sigB8D1,
    offsetY: var_core_value_sig1EB0
  } = xo(var_core_value_sigD285, var_core_value_sig0C83, var_core_value_sig5003);
  if (!var_core_value_sigB8D1 && !var_core_value_sig1EB0) return false;
  let var_core_value_sig2607 = var_core_value_sig0C83.viewportScrollX ?? 0,
    var_core_value_sig2808 = var_core_value_sig0C83.viewportScrollY ?? 0;
  if (var_core_value_sigD285.source !== "wheel" && var_core_value_sig0C83.scrollToViewportPos && (var_core_value_sigD285.viewportScrollX != null || var_core_value_sigD285.viewportScrollY != null)) var_core_value_sig0C83.scrollToViewportPos({
    viewportScrollX: var_core_value_sigD285.viewportScrollX ?? var_core_value_sig2607,
    viewportScrollY: var_core_value_sigD285.viewportScrollY ?? var_core_value_sig2808
  });else {
    if (var_core_value_sig0C83.scrollByViewportDeltaVal) var_core_value_sig0C83.scrollByViewportDeltaVal({
      viewportScrollX: var_core_value_sigB8D1,
      viewportScrollY: var_core_value_sig1EB0
    });else return false;
  }
  let var_core_value_sig5B96 = (var_core_value_sig0C83.viewportScrollX ?? 0) !== var_core_value_sig2607 || (var_core_value_sig0C83.viewportScrollY ?? 0) !== var_core_value_sig2808;
  if (var_core_value_sig5B96) {
    var var_core_value_sigF2DD;
    var_core_value_sig5003 == null || (var_core_value_sigF2DD = var_core_value_sig5003.makeDirty) == null || var_core_value_sigF2DD.call(var_core_value_sig5003, true);
  }
  return var_core_value_sig5B96;
}
function xo(var_core_value_sig8B711, var_core_value_sigE74F, var_core_value_sig8FBA) {
  return var_core_value_sig8B711.source !== "wheel" && (var_core_value_sig8B711.viewportScrollX != null || var_core_value_sig8B711.viewportScrollY != null) ? {
    offsetX: (var_core_value_sig8B711.viewportScrollX ?? var_core_value_sigE74F.viewportScrollX ?? 0) - (var_core_value_sigE74F.viewportScrollX ?? 0),
    offsetY: (var_core_value_sig8B711.viewportScrollY ?? var_core_value_sigE74F.viewportScrollY ?? 0) - (var_core_value_sigE74F.viewportScrollY ?? 0)
  } : yo(var_core_value_sig8B711.event, var_core_value_sig8FBA == null ? undefined : var_core_value_sig8FBA.scaleX, var_core_value_sig8FBA == null ? undefined : var_core_value_sig8FBA.scaleY);
}
function So(var_core_value_sigE304) {
  return var_core_value_sigE304 + p.ScrollBar["DEFAULT_TOTAL_SIZE"];
}
function Co(var_core_value_sig96A6) {
  return var_core_value_sig96A6.contentHeight + var_core_value_sig96A6.floatingMenuInsetTop;
}
function wo(var_core_value_sig3653) {
  var var_core_value_sigC01A;
  let {
      data: var_core_value_sig597C,
      customBlockRenderViewport: var_core_value_sigB870
    } = var_core_value_sig3653,
    var_core_value_sigF8CA = (0, c.useDependency)(a.ICommandService),
    var_core_value_sig76BA1 = (0, c.useDependency)(a.IUniverInstanceService),
    var_core_value_sig1070 = (0, c.useDependency)(p.IRenderManagerService),
    var_core_value_sigAE97 = oi(var_core_value_sig597C),
    var_core_value_sig578F = var_core_value_sigAE97 == null ? undefined : var_core_value_sigAE97.hostUnitId,
    var_core_value_sigF7CF = var_core_value_sig578F ?? ((var_core_value_sigC01A = var_core_value_sig76BA1.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_DOC"])) == null ? undefined : var_core_value_sigC01A.getUnitId()),
    var_core_value_sig544C = (0, d.useRef)(null),
    [var_core_value_sig866C, var_core_value_sigA82B] = (0, d.useState)(() => (0, o.createDefaultDocsTableLikeCustomBlockBleedViewport)()),
    var_core_value_sigC806 = (0, h.isSheetLikeDocsCustomBlockChildType)(var_core_value_sigAE97 == null ? undefined : var_core_value_sigAE97.childType),
    var_core_value_sig9A39 = var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.bleedLeft,
    var_core_value_sig69CA = var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.bleedWidth,
    var_core_value_sigAF9F = var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.contentWidth,
    var_core_value_sig6DAA = Eo(var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.viewScale),
    var_core_value_sigDD11 = (0, d.useRef)(var_core_value_sig6DAA),
    var_core_value_sigD59B = (0, d.useRef)(undefined),
    var_core_value_sigE90C = (0, d.useRef)(undefined);
  (0, d.useEffect)(() => {
    if (!var_core_value_sig578F) return;
    let var_core_value_sig73D2 = [],
      var_core_value_sig6BDA = () => {
        let var_core_value_sigC6BC = var_core_value_sig76BA1.getUnit(var_core_value_sig578F, a.UniverInstanceType["UNIVER_DOC"]),
          var_core_value_sig8EC2 = var_core_value_sigC6BC == null ? undefined : var_core_value_sigC6BC.zoomRatio;
        typeof var_core_value_sig8EC2 == "number" && var_core_value_sigF8CA.syncExecuteCommand(o.SetDocZoomRatioOperation["id"], {
          unitId: var_core_value_sig578F,
          zoomRatio: var_core_value_sig8EC2
        });
      },
      var_core_value_sig3A251 = var_core_value_sigA8C3 => {
        let var_core_value_sig52761 = requestAnimationFrame(var_core_value_sigA8C3);
        var_core_value_sig73D2.push(() => cancelAnimationFrame(var_core_value_sig52761));
      },
      var_core_value_sigCBAA = var_core_value_sig031B => {
        let var_core_value_sig9DC0 = setTimeout(var_core_value_sig6BDA, var_core_value_sig031B);
        var_core_value_sig73D2.push(() => clearTimeout(var_core_value_sig9DC0));
      };
    return var_core_value_sig6BDA(), var_core_value_sig3A251(var_core_value_sig6BDA), var_core_value_sig3A251(() => var_core_value_sig3A251(var_core_value_sig6BDA)), var_core_value_sigCBAA(120), var_core_value_sigCBAA(500), () => {
      var_core_value_sig73D2.forEach(var_core_value_sig5A13 => var_core_value_sig5A13());
    };
  }, [var_core_value_sigF8CA, var_core_value_sig578F, var_core_value_sig76BA1]), (0, d.useLayoutEffect)(() => {
    let var_core_value_sigC0961 = var_core_value_sig544C.current;
    if (!var_core_value_sigC0961 || !var_core_value_sigC806 || typeof window > "u") return;
    let var_core_value_sig6140,
      var_core_value_sigDD84 = () => {
        var_core_value_sig6140 = undefined;
        let var_core_value_sig95F0 = var_core_value_sigC0961.getBoundingClientRect(),
          var_core_value_sig9CCB = jo(var_core_value_sigAF9F, () => No(var_core_value_sigC0961, var_core_value_sig95F0.width / var_core_value_sig6DAA)),
          var_core_value_sigE718 = (0, o.resolveDocsTableLikeCustomBlockBleedViewport)(var_core_value_sigC0961, var_core_value_sig9CCB, {
            authoritativeContentWidth: Number.isFinite(var_core_value_sigAF9F) && (var_core_value_sigAF9F ?? 0) > 0,
            bleedLeft: var_core_value_sig9A39,
            bleedWidth: var_core_value_sig69CA,
            viewScale: var_core_value_sig6DAA
          });
        var_core_value_sigA82B(var_core_value_sigF593 => Math.abs(var_core_value_sigF593.bleedLeft - var_core_value_sigE718.bleedLeft) < 0.5 && Math.abs(var_core_value_sigF593.bleedRight - var_core_value_sigE718.bleedRight) < 0.5 && Math.abs(var_core_value_sigF593.bleedWidth - var_core_value_sigE718.bleedWidth) < 0.5 && Math.abs(var_core_value_sigF593.contentWidth - var_core_value_sigE718.contentWidth) < 0.5 && Math.abs(var_core_value_sigF593.virtualWidth - var_core_value_sigE718.virtualWidth) < 0.5 ? var_core_value_sigF593 : var_core_value_sigE718);
      },
      var_core_value_sig7BA5 = () => {
        var_core_value_sig6140 == null && var_core_value_sigC0961.dataset["embedDocsCustomBlockZooming"] !== "true" && (var_core_value_sig6140 = window.requestAnimationFrame(var_core_value_sigDD84));
      },
      var_core_value_sig543F = var_core_value_sigAEC8 => {
        Mo(var_core_value_sigC0961, var_core_value_sigAEC8.target) && var_core_value_sig7BA5();
      };
    var_core_value_sigDD84();
    let var_core_value_sigBF30 = new ResizeObserver(var_core_value_sig7BA5);
    return var_core_value_sigBF30.observe(var_core_value_sigC0961), window.addEventListener("resize", var_core_value_sig7BA5), window.addEventListener("scroll", var_core_value_sig543F, true), () => {
      var_core_value_sig6140 != null && window.cancelAnimationFrame(var_core_value_sig6140), var_core_value_sigBF30.disconnect(), window.removeEventListener("resize", var_core_value_sig7BA5), window.removeEventListener("scroll", var_core_value_sig543F, true);
    };
  }, [var_core_value_sig9A39, var_core_value_sig69CA, var_core_value_sigAF9F, var_core_value_sigC806, var_core_value_sig6DAA]);
  let var_core_value_sig49D9 = var_core_value_sigC806 ? Oo(var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.contentHeight) : (0, o.resolveDocsTableLikeCustomBlockContentHeight)(var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.contentHeight, 1),
    var_core_value_sig2AFC = var_core_value_sigC806 ? 52 : 0,
    var_core_value_sig886D = ko({
      contentHeight: var_core_value_sig49D9,
      viewportHeight: var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.viewportHeight
    }),
    var_core_value_sig1FDD = Co({
      contentHeight: var_core_value_sig49D9,
      floatingMenuInsetTop: var_core_value_sig2AFC
    }),
    var_core_value_sigEF03 = Ao({
      contentWidth: var_core_value_sigAF9F,
      pageContentWidth: var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.pageContentWidth
    }),
    var_core_value_sig9FD5 = var_core_value_sigC806 ? {
      height: var_core_value_sig1FDD * var_core_value_sig6DAA,
      minHeight: var_core_value_sig1FDD * var_core_value_sig6DAA,
      width: var_core_value_sigEF03 == null ? undefined : var_core_value_sigEF03 * var_core_value_sig6DAA
    } : undefined;
  (0, d.useLayoutEffect)(() => {
    var var_core_value_sigAA0E, var_core_value_sig3747;
    var_core_value_sigDD11.current = var_core_value_sig6DAA, (var_core_value_sigAA0E = var_core_value_sig544C.current) == null || var_core_value_sigAA0E.style["removeProperty"]("overflow"), (var_core_value_sig3747 = var_core_value_sig544C.current) == null || delete var_core_value_sig3747.dataset["embedDocsCustomBlockZooming"];
  }, [var_core_value_sig6DAA]), (0, d.useEffect)(() => {
    if (!var_core_value_sigC806 || !var_core_value_sigF7CF) return;
    let var_core_value_sig9B6A1 = var_core_value_sig544C.current,
      var_core_value_sig7BFA = () => {
        var_core_value_sigE90C.current != null && (window.clearTimeout(var_core_value_sigE90C.current), var_core_value_sigE90C.current = undefined), var_core_value_sigD59B.current != null && (window.cancelAnimationFrame(var_core_value_sigD59B.current), var_core_value_sigD59B.current = undefined);
      },
      var_core_value_sig09FA = var_core_value_sigF8CA.onCommandExecuted(var_core_value_sigB977 => {
        if (var_core_value_sigB977.id !== o.SetDocZoomRatioOperation["id"]) return;
        let var_core_value_sig2949 = var_core_value_sigB977.params;
        if ((var_core_value_sig2949 == null ? undefined : var_core_value_sig2949.unitId) !== var_core_value_sigF7CF) return;
        let var_core_value_sig308A = var_core_value_sig544C.current,
          var_core_value_sig528D = Eo(var_core_value_sig2949.zoomRatio);
        !var_core_value_sig308A || var_core_value_sig528D === var_core_value_sigDD11.current || (To(var_core_value_sig308A, {
          fromScale: var_core_value_sigDD11.current,
          outerHeight: var_core_value_sig1FDD,
          toScale: var_core_value_sig528D
        }), var_core_value_sigDD11.current = var_core_value_sig528D, var_core_value_sig7BFA(), var_core_value_sigE90C.current = window.setTimeout(() => {
          var_core_value_sigE90C.current = undefined, var_core_value_sigD59B.current = window.requestAnimationFrame(() => {
            var_core_value_sigD59B.current = undefined, var_core_value_sig308A.style["removeProperty"]("overflow"), delete var_core_value_sig308A.dataset["embedDocsCustomBlockZooming"];
          });
        }, 120));
      });
    return () => {
      var_core_value_sig09FA.dispose(), var_core_value_sig7BFA(), var_core_value_sig9B6A1 == null || var_core_value_sig9B6A1.style["removeProperty"]("overflow"), var_core_value_sig9B6A1 && delete var_core_value_sig9B6A1.dataset["embedDocsCustomBlockZooming"];
    };
  }, [var_core_value_sigF8CA, var_core_value_sig1FDD, var_core_value_sigF7CF, var_core_value_sigC806]);
  let var_core_value_sig2C6B = (0, d.useCallback)((var_core_value_sig6881, var_core_value_sigAB94) => {
      var var_core_value_sigEE05;
      let var_core_value_sig0F0E = (var_core_value_sigEE05 = var_core_value_sig1070.getRenderUnitById(var_core_value_sigAB94.hostUnitId)) == null ? undefined : var_core_value_sigEE05.scene;
      return bo({
        ...var_core_value_sigAB94,
        event: var_core_value_sig6881,
        source: "wheel",
        stage: "stage2"
      }, var_core_value_sig0F0E == null ? undefined : var_core_value_sig0F0E.getViewport(o.VIEWPORT_KEY["VIEW_MAIN"]), var_core_value_sig0F0E);
    }, [var_core_value_sig1070]),
    var_core_value_sigC969 = (0, d.useCallback)(var_core_value_sig3A40 => {
      Do(var_core_value_sig1070, var_core_value_sigF7CF, var_core_value_sig3A40);
    }, [var_core_value_sig1070, var_core_value_sigF7CF]);
  return (0, m.jsx)("div", {
    ref: var_core_value_sig544C,
    className: "univer-relative univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-visible [&[data-embed-docs-custom-block-sheet-like=true]]:univer-pointer-events-none [&[data-embed-docs-custom-block-sheet-like=true]]:[contain:layout_style]",
    "data-u-comp": "embed-docs-custom-block",
    "data-embed-docs-custom-block": "true",
    "data-embed-docs-custom-block-child-type": (var_core_value_sigAE97 == null ? undefined : var_core_value_sigAE97.childType) == null ? undefined : String(var_core_value_sigAE97.childType),
    "data-embed-docs-custom-block-sheet-like": var_core_value_sigC806 ? "true" : undefined,
    style: var_core_value_sig9FD5,
    children: (0, m.jsx)(_a, {
      ...var_core_value_sig3653,
      docsCustomBlockLayout: var_core_value_sigC806 ? {
        bleedLeft: var_core_value_sig866C.bleedLeft,
        bleedWidth: var_core_value_sig866C.bleedWidth,
        contentHeight: var_core_value_sig49D9,
        contentWidth: var_core_value_sig866C.contentWidth,
        floatingMenuInsetTop: var_core_value_sig2AFC,
        pageContentWidth: (var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.pageContentWidth) ?? var_core_value_sig866C.contentWidth,
        sheetLike: true,
        viewScale: var_core_value_sig6DAA,
        visibleCanvasHeight: var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.visibleCanvasHeight,
        viewportHeight: var_core_value_sig886D
      } : {
        floatingMenuInsetTop: var_core_value_sig2AFC,
        sheetLike: false
      },
      interactionFlow: "doc-block",
      onHostWheel: var_core_value_sigC806 ? var_core_value_sig2C6B : undefined,
      onRuntimeStageEnter: var_core_value_sigC969,
      syncHostVerticalScroll: var_core_value_sigC806
    })
  });
}
function To(var_core_value_sigF87E, var_core_value_sigDA9F) {
  let var_core_value_sigFCA4 = Eo(var_core_value_sigDA9F.fromScale),
    var_core_value_sig95B7 = Eo(var_core_value_sigDA9F.toScale),
    var_core_value_sig4700 = var_core_value_sig95B7 / var_core_value_sigFCA4,
    var_core_value_sig7B76 = var_core_value_sigDA9F.outerHeight * var_core_value_sig95B7;
  var_core_value_sigF87E.style["height"] = var_core_value_sig7B76 + "px", var_core_value_sigF87E.style["minHeight"] = var_core_value_sig7B76 + "px", var_core_value_sigF87E.style["overflow"] = "hidden", var_core_value_sigF87E.dataset["embedDocsCustomBlockZooming"] = "true";
  let var_core_value_sigA674 = var_core_value_sigF87E.querySelector('[data-embed-float-content="true"]');
  var_core_value_sigA674 && ["top", "left"].forEach(var_core_value_sig2377 => {
    let var_core_value_sig4EEF = Number.parseFloat(var_core_value_sigA674.style[var_core_value_sig2377]);
    Number.isFinite(var_core_value_sig4EEF) && (var_core_value_sigA674.style[var_core_value_sig2377] = var_core_value_sig4EEF * var_core_value_sig4700 + "px");
  });
  let var_core_value_sigD3FA = var_core_value_sigF87E.querySelector('[data-embed-float-live="true"]');
  var_core_value_sigD3FA && (var_core_value_sigD3FA.style["transform"] = var_core_value_sig95B7 === 1 ? "" : "scale(" + var_core_value_sig95B7 + ")");
}
function Eo(var_core_value_sig3567) {
  return typeof var_core_value_sig3567 == "number" && Number.isFinite(var_core_value_sig3567) && var_core_value_sig3567 > 0 ? var_core_value_sig3567 : 1;
}
function Do(var_core_value_sigCF7F, var_core_value_sig0932, var_core_value_sig281A) {
  var var_core_value_sig97D1;
  var_core_value_sig281A !== "stage2" || !var_core_value_sig0932 || (var_core_value_sig97D1 = var_core_value_sigCF7F.getRenderUnitById(var_core_value_sig0932)) == null || (var_core_value_sig97D1 = var_core_value_sig97D1.with(o.DocSelectionRenderService)) == null || var_core_value_sig97D1.blur();
}
function Oo(var_core_value_sig408A) {
  return (0, o.resolveDocsTableLikeCustomBlockContentHeight)(var_core_value_sig408A, 480);
}
function ko(var_core_value_sig76941) {
  return (0, o.resolveDocsTableLikeCustomBlockContentHeight)(var_core_value_sig76941.viewportHeight, var_core_value_sig76941.contentHeight);
}
function Ao(var_core_value_sigEB2D) {
  let {
    contentWidth: var_core_value_sigCCD4,
    pageContentWidth: var_core_value_sig084C
  } = var_core_value_sigEB2D;
  if (!(typeof var_core_value_sigCCD4 != "number" || !Number.isFinite(var_core_value_sigCCD4) || var_core_value_sigCCD4 <= 0)) return typeof var_core_value_sig084C == "number" && Number.isFinite(var_core_value_sig084C) && var_core_value_sig084C > 0 ? Math.min(var_core_value_sigCCD4, var_core_value_sig084C) : var_core_value_sigCCD4;
}
function jo(var_core_value_sig9C10, var_core_value_sig1717) {
  return Number.isFinite(var_core_value_sig9C10) && (var_core_value_sig9C10 ?? 0) > 0 ? var_core_value_sig9C10 : (0, o.resolveDocsTableLikeCustomBlockContentWidth)(undefined, var_core_value_sig1717());
}
function Mo(var_core_value_sig7A5F, var_core_value_sig57621) {
  return !(var_core_value_sig57621 instanceof Node && var_core_value_sig7A5F.contains(var_core_value_sig57621));
}
function No(var_core_value_sig05D1, var_core_value_sigB65E) {
  let var_core_value_sig51E8 = var_core_value_sig05D1.querySelector('[data-u-comp="embed-float-dom-live-content"]'),
    var_core_value_sigE4F51 = var_core_value_sig05D1.querySelector('[data-u-comp="embed-float-dom-live-canvas"]'),
    var_core_value_sig1B69 = [Math.max(1, var_core_value_sigB65E)];
  return Po(var_core_value_sig51E8, var_core_value_sig1B69), Po(var_core_value_sigE4F51, var_core_value_sig1B69), Math.max(...var_core_value_sig1B69.filter(var_core_value_sigC58E => Number.isFinite(var_core_value_sigC58E) && var_core_value_sigC58E > 0));
}
function Po(var_core_value_sigBD8E, var_core_value_sig75D8) {
  if (var_core_value_sigBD8E) {
    var_core_value_sig75D8.push(var_core_value_sigBD8E.scrollWidth, var_core_value_sigBD8E.offsetWidth, var_core_value_sigBD8E.getBoundingClientRect().width);
    for (let var_core_value_sigA309 of Array.from(var_core_value_sigBD8E.children)) {
      if (!(var_core_value_sigA309 instanceof HTMLElement)) continue;
      let var_core_value_sig3607 = var_core_value_sigA309.getBoundingClientRect(),
        var_core_value_sigB512 = var_core_value_sigBD8E.getBoundingClientRect();
      var_core_value_sig75D8.push(var_core_value_sigA309.scrollWidth, var_core_value_sigA309.offsetWidth, var_core_value_sig3607.right - var_core_value_sigB512.left);
    }
  }
}
let Fo = class extends a.Disposable {
  constructor(var_core_value_sig9063) {
    super(), this._componentManager = var_core_value_sig9063, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](h.EMBED_DOCS_CUSTOM_BLOCK_DEFAULT_COMPONENT_KEY, wo)), this.disposeWithMe(this._componentManager["register"](t.EMBED_SHEETS_FLOATING_COMPONENT_KEY, _a)), this.disposeWithMe(this._componentManager["register"](ho, _o)), this.disposeWithMe(this._componentManager["register"](go, vo));
  }
};
Fo = Z([X(0, (0, a.Inject)(c.ComponentManager))], Fo);
let Io = class {
  constructor(var_core_value_sig99CE, var_core_value_sigFB15) {
    this._injector = var_core_value_sig99CE, this._passiveWheelHandlerRegistry = var_core_value_sigFB15, this._passiveWheelHandlerRegistry["register"]({
      childType: a.UniverInstanceType["UNIVER_DOC"],
      handleWheel: var_core_value_sig9E20 => this._injector["has"](y.DocsTablePassiveWheelService) ? this._injector["get"](y.DocsTablePassiveWheelService).handleWheel({
        childUnitId: var_core_value_sig9E20.childUnitId,
        event: var_core_value_sig9E20.event,
        source: var_core_value_sig9E20.source
      }) : false,
      order: 100
    });
  }
};
Io = Z([X(0, (0, a.Inject)(a.Injector)), X(1, (0, a.Inject)(ai))], Io);
const Lo = [a.UniverInstanceType["UNIVER_DOC"], a.UniverInstanceType["UNIVER_SHEET"], a.UniverInstanceType["UNIVER_BASE"], a.UniverInstanceType["UNIVER_SLIDE"]];
let Ro = class extends a.Disposable {
  constructor(var_core_value_sig9AF5, var_core_value_sigCD2E) {
    super(), this._univerInstanceService = var_core_value_sig9AF5, this._anchorModelService = var_core_value_sigCD2E, Lo.forEach(var_core_value_sig26BB => {
      this.disposeWithMe(this._univerInstanceService["getTypeOfUnitDisposed$"](var_core_value_sig26BB).subscribe(var_core_value_sigF2E6 => {
        this._anchorModelService["clearUnit"](var_core_value_sigF2E6.getUnitId());
      }));
    });
  }
};
Ro = Z([X(0, a.IUniverInstanceService), X(1, (0, a.Inject)(t.EmbedHostAnchorModelService))], Ro);
let zo = class extends a.Disposable {
  constructor(var_core_value_sig60CE, var_core_value_sigFA1B) {
    super(), this._injector = var_core_value_sig60CE, this._runtimeFocusCoordinator = var_core_value_sigFA1B, V(this, "_suspendedSheetNote", null), V(this, "_suppressedSheetNoteHostUnitId", null), this.disposeWithMe(this._runtimeFocusCoordinator["runtimeSessionChanged$"].subscribe(() => {
      this._syncHostPopupVisibility();
    }));
  }
  _syncHostPopupVisibility() {
    let var_core_value_sig5FEF = this._runtimeFocusCoordinator["resolveActiveChildSessionRuntimeScope"](),
      var_core_value_sigD48C = (var_core_value_sig5FEF == null ? undefined : var_core_value_sig5FEF.hostUnitId) ?? null;
    this._hideDocParagraphMenu(var_core_value_sigD48C), this._clearHostDrawingSelection(var_core_value_sigD48C);
    let var_core_value_sig41E9 = (var_core_value_sig5FEF == null ? undefined : var_core_value_sig5FEF.sessionMode) === "child-fullscreen" ? var_core_value_sig5FEF.hostUnitId ?? null : null;
    this._syncPersistentSheetNotes(var_core_value_sig41E9), this._syncActiveSheetNote(var_core_value_sig41E9);
  }
  _hideDocParagraphMenu(var_core_value_sig3807) {
    if (!var_core_value_sig3807 || !this._injector["has"](p.IRenderManagerService)) return;
    let var_core_value_sig5409 = this._injector["get"](p.IRenderManagerService).getRenderUnitById(var_core_value_sig3807);
    (var_core_value_sig5409 == null ? undefined : var_core_value_sig5409.type) === a.UniverInstanceType["UNIVER_DOC"] && var_core_value_sig5409.with(o.DocParagraphMenuService).hideParagraphMenu(true);
  }
  _clearHostDrawingSelection(var_core_value_sig680F) {
    var var_core_value_sig2E36;
    !var_core_value_sig680F || !this._injector["has"](p.IRenderManagerService) || (var_core_value_sig2E36 = this._injector["get"](p.IRenderManagerService).getRenderUnitById(var_core_value_sig680F)) == null || (var_core_value_sig2E36 = var_core_value_sig2E36.scene["getTransformer"]()) == null || var_core_value_sig2E36.clearSelectedObjects();
  }
  _syncPersistentSheetNotes(var_core_value_sigBA94) {
    if (var_core_value_sigBA94 !== this._suppressedSheetNoteHostUnitId) {
      let var_core_value_sig19B4 = this._injector["has"](b.SheetsNoteAttachmentController) ? this._injector["get"](b.SheetsNoteAttachmentController) : null;
      this._suppressedSheetNoteHostUnitId && (var_core_value_sig19B4 == null || var_core_value_sig19B4.setPopupSuppressed(this._suppressedSheetNoteHostUnitId, false)), var_core_value_sigBA94 && (var_core_value_sig19B4 == null || var_core_value_sig19B4.setPopupSuppressed(var_core_value_sigBA94, true)), this._suppressedSheetNoteHostUnitId = var_core_value_sigBA94;
    }
  }
  _syncActiveSheetNote(var_core_value_sigA847) {
    var var_core_value_sig1AB4;
    if (!this._injector["has"](b.SheetsNotePopupService)) return;
    let var_core_value_sig7272 = this._injector["get"](b.SheetsNotePopupService),
      var_core_value_sig885F = var_core_value_sig7272.activePopup;
    if (var_core_value_sigA847 != null && var_core_value_sigA847 === ((var_core_value_sig885F == null ? undefined : var_core_value_sig885F.unitId) ?? ((var_core_value_sig1AB4 = this._suspendedSheetNote) == null ? undefined : var_core_value_sig1AB4.unitId))) {
      var_core_value_sig885F && !var_core_value_sig885F.temp && (this._suspendedSheetNote = var_core_value_sig885F), var_core_value_sig7272.hidePopup(true);
      return;
    }
    if (!this._suspendedSheetNote) return;
    let var_core_value_sigB7C7 = this._suspendedSheetNote;
    this._suspendedSheetNote = null, var_core_value_sig885F || var_core_value_sig7272.showPopup(var_core_value_sigB7C7);
  }
};
zo = Z([X(0, (0, a.Inject)(a.Injector)), X(1, (0, a.Inject)(K))], zo);
let Bo = class extends a.Disposable {
  constructor(var_core_value_sig6934, var_core_value_sig2842, var_core_value_sigA5A3, var_core_value_sig590F, var_core_value_sigECA2) {
    super(), this._menuOverrideService = var_core_value_sig6934, this._blockRegistry = var_core_value_sig2842, this._ribbonOverrideService = var_core_value_sigA5A3, this._injector = var_core_value_sigECA2, V(this, "_current", null), V(this, "_currentOverride", null), this.disposeWithMe(var_core_value_sig590F.registerDisabledUIParts([c.BuiltInUIPart["TOOLBAR"]], this._menuOverrideService["override$"].pipe((0, f.map)(var_core_value_sig218A => {
      var var_core_value_sig14CB;
      return var_core_value_sig218A != null && ((var_core_value_sig14CB = this._blockRegistry["get"](var_core_value_sig218A.childType)) == null ? undefined : var_core_value_sig14CB.hostChromeMode) === "none";
    }), (0, f.distinctUntilChanged)()))), this.disposeWithMe((0, a.toDisposable)(this._menuOverrideService["override$"].subscribe(var_core_value_sigFDEE => {
      var var_core_value_sigA676, var_core_value_sigC27E;
      if (!var_core_value_sigFDEE) {
        this._current ? (this._current["dispose"](), this._current = null) : this._ribbonOverrideService["clear"](), this._currentOverride = null;
        return;
      }
      if (Vo(this._currentOverride, var_core_value_sigFDEE)) return;
      let var_core_value_sigA70D = this._blockRegistry["get"](var_core_value_sigFDEE.childType),
        var_core_value_sigCE10 = var_core_value_sigA70D == null || (var_core_value_sigA676 = var_core_value_sigA70D.createRibbonOverride) == null ? undefined : var_core_value_sigA676.call(var_core_value_sigA70D, {
          childType: var_core_value_sigFDEE.childType,
          childUnitId: var_core_value_sigFDEE.childUnitId,
          injector: this._injector,
          embedId: var_core_value_sigFDEE.embedId,
          hostUnitId: var_core_value_sigFDEE.hostUnitId,
          entry: var_core_value_sigFDEE.entry
        });
      if (!var_core_value_sigCE10) {
        var var_core_value_sigA3861;
        (var_core_value_sigA3861 = this._current) == null || var_core_value_sigA3861.dispose(), this._current = null, this._currentOverride = null, this._ribbonOverrideService["clear"]();
        return;
      }
      this._ribbonOverrideService["activate"]({
        id: var_core_value_sigFDEE.embedId,
        ribbonService: var_core_value_sigCE10.ribbonService,
        injector: var_core_value_sigCE10.injector,
        portalContainer: var_core_value_sigCE10.portalContainer ?? var_core_value_sigFDEE.portalContainer,
        placeholderTitle: var_core_value_sigCE10.placeholderTitle,
        hideToolbar: var_core_value_sigCE10.hideToolbar
      }), (var_core_value_sigC27E = this._current) == null || var_core_value_sigC27E.dispose(), this._current = null, this._currentOverride = null;
      let var_core_value_sigCD82 = this._registerRibbonOwnership(var_core_value_sigFDEE);
      this._currentOverride = var_core_value_sigFDEE, this._current = (0, a.toDisposable)(() => {
        var var_core_value_sig34C8;
        var_core_value_sigCD82 == null || var_core_value_sigCD82.dispose(), this._ribbonOverrideService["clear"](var_core_value_sigFDEE.embedId), (var_core_value_sig34C8 = var_core_value_sigCE10.disposable) == null || var_core_value_sig34C8.dispose(), this._currentOverride = null;
      });
    })));
  }
  _registerRibbonOwnership(var_core_value_sigCAC4) {
    var var_core_value_sig2017;
    let var_core_value_sig49A4 = ((var_core_value_sig2017 = var_core_value_sigCAC4.portalContainer) == null ? undefined : var_core_value_sig2017.ownerDocument) ?? (typeof document > "u" ? undefined : document),
      var_core_value_sigA166 = var_core_value_sig49A4 == null ? undefined : var_core_value_sig49A4.querySelector('[data-u-comp="headerbar"]');
    if (!var_core_value_sigA166) return;
    let var_core_value_sigEB84 = [];
    return this._injector["has"](J) && var_core_value_sigEB84.push(this._injector["get"](J).registerRoot(var_core_value_sigCAC4.embedId, var_core_value_sigA166, var_core_value_sigCAC4.childUnitId)), this._injector["has"](K) && var_core_value_sigEB84.push(this._injector["get"](K).registerElement({
      embedId: var_core_value_sigCAC4.embedId,
      role: "floating-menu",
      element: var_core_value_sigA166
    })), var_core_value_sigEB84.length ? (0, a.toDisposable)(() => [...var_core_value_sigEB84].reverse().forEach(var_core_value_sigB744 => var_core_value_sigB744.dispose())) : undefined;
  }
  dispose() {
    var var_core_value_sig3B17;
    (var_core_value_sig3B17 = this._current) == null || var_core_value_sig3B17.dispose(), this._current = null, this._currentOverride = null, super.dispose();
  }
};
Bo = Z([X(0, (0, a.Inject)(U)), X(1, (0, a.Inject)(H)), X(2, (0, a.Inject)(c.IRibbonOverrideService)), X(3, (0, a.Inject)(c.IUIPartsService)), X(4, (0, a.Inject)(a.Injector))], Bo);
function Vo(var_core_value_sig0009, var_core_value_sig771F) {
  return var_core_value_sig0009 != null && var_core_value_sig0009.hostUnitId === var_core_value_sig771F.hostUnitId && var_core_value_sig0009.embedId === var_core_value_sig771F.embedId && var_core_value_sig0009.childUnitId === var_core_value_sig771F.childUnitId && var_core_value_sig0009.childType === var_core_value_sig771F.childType && var_core_value_sig0009.entry === var_core_value_sig771F.entry && var_core_value_sig0009.reason === var_core_value_sig771F.reason && var_core_value_sig0009.portalContainer === var_core_value_sig771F.portalContainer && var_core_value_sig0009.hideHostFxBar === var_core_value_sig771F.hideHostFxBar && var_core_value_sig0009.lockHostRibbon === var_core_value_sig771F.lockHostRibbon;
}
let Ho = class extends a.Disposable {
  constructor(var_core_value_sig78681, var_core_value_sig9AFE, var_core_value_sig244E) {
    super(), this._commandService = var_core_value_sig78681, this._embedModelService = var_core_value_sig9AFE, this._dialogService = var_core_value_sig244E, V(this, "_dialogs", []);
    let var_core_value_sigD4E9 = this._dialogService["getDialogs$"]().subscribe(var_core_value_sig44DD => {
      this._dialogs = var_core_value_sig44DD;
    });
    this.disposeWithMe((0, a.toDisposable)(() => var_core_value_sigD4E9.unsubscribe())), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig96FA => {
      var var_core_value_sigAB68;
      if (var_core_value_sig96FA.id !== t.SoftDeleteEmbedDescriptorMutation["id"]) return;
      let var_core_value_sig040A = var_core_value_sig96FA.params;
      if (typeof (var_core_value_sig040A == null ? undefined : var_core_value_sig040A.embedId) != "string" || typeof var_core_value_sig040A.unitId != "string") return;
      let var_core_value_sig2AE0 = (var_core_value_sigAB68 = this._embedModelService["getDescriptor"](var_core_value_sig040A.unitId, var_core_value_sig040A.embedId)) == null ? undefined : var_core_value_sigAB68.childUnitId;
      var_core_value_sig2AE0 && this._dialogs["forEach"](var_core_value_sigEAE2 => {
        Uo(var_core_value_sigEAE2) === var_core_value_sig2AE0 && this._dialogService["close"](var_core_value_sigEAE2.id);
      });
    }));
  }
  dispose() {
    super.dispose(), this._dialogs = [];
  }
};
Ho = Z([X(0, a.ICommandService), X(1, (0, a.Inject)(t.EmbedModelService)), X(2, (0, a.Inject)(c.IDialogService))], Ho);
function Uo(var_core_value_sig9898) {
  var var_core_value_sigC324, var_core_value_sig16E1;
  let var_core_value_sigB359 = (var_core_value_sigC324 = var_core_value_sig9898.children) == null ? undefined : var_core_value_sigC324.label;
  if (!var_core_value_sigB359 || typeof var_core_value_sigB359 == "string") return;
  let var_core_value_sigF836 = (var_core_value_sig16E1 = var_core_value_sigB359.props) == null ? undefined : var_core_value_sig16E1.unitId;
  return typeof var_core_value_sigF836 == "string" ? var_core_value_sigF836 : undefined;
}
let Wo = class extends a.Disposable {
  constructor(var_core_value_sig969F, var_core_value_sig6C52, var_core_value_sig3A441, var_core_value_sig9631, var_core_value_sig8407, var_core_value_sig635F) {
    super(), this._embedPrintService = var_core_value_sig969F, this._printPreparationService = var_core_value_sig6C52, this._injector = var_core_value_sig3A441, this._univerInstanceService = var_core_value_sig9631, this._slidePrintDrawingTransformService = var_core_value_sig8407, this._boardPrintCompositionService = var_core_value_sig635F, V(this, "_docPrintRegistered", false), V(this, "_sheetPrintRegistered", false), V(this, "_docPrintLayouts", new Map()), this._registerPrintPreparation(), this._registerSlidePrinting(), this._registerBoardPrinting();
  }
  async prepare(var_core_value_sig79E0) {
    if (var_core_value_sig79E0.unitType === a.UniverInstanceType["UNIVER_DOC"] ? (this._registerDocPrinting(), this._docPrintLayouts["delete"](var_core_value_sig79E0.unitId)) : var_core_value_sig79E0.unitType === a.UniverInstanceType["UNIVER_SHEET"] && this._registerSheetPrinting(), await this._embedPrintService["prepare"](var_core_value_sig79E0), var_core_value_sig79E0.unitType === a.UniverInstanceType["UNIVER_DOC"]) {
      let var_core_value_sigC349 = this._univerInstanceService["getUnit"](var_core_value_sig79E0.unitId, a.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig9D96 = var_core_value_sigC349 == null ? undefined : var_core_value_sigC349.getSnapshot();
      if (var_core_value_sigC349 && var_core_value_sig9D96) {
        let var_core_value_sigE68A = var_core_value_sigC349.getDocumentStyle().documentFlavor === a.DocumentFlavor["MODERN"],
          var_core_value_sig3E68 = var_core_value_sigE68A ? undefined : this._resolveDocPageMetrics(var_core_value_sig79E0.unitId),
          var_core_value_sigF4C5 = Zo(var_core_value_sig9D96, var_core_value_sig79E0.unitId, this._embedPrintService, var_core_value_sig3E68, var_core_value_sigE68A || !!var_core_value_sig3E68, var_core_value_sigE68A);
        this._docPrintLayouts["set"](var_core_value_sig79E0.unitId, var_core_value_sigF4C5), var_core_value_sig79E0.contentHeight = Math.max(var_core_value_sig79E0.contentHeight ?? 0, var_core_value_sigF4C5.contentHeight), var_core_value_sigE68A && (var_core_value_sig79E0.contentHeightAdjustment = (var_core_value_sig79E0.contentHeightAdjustment ?? 0) + var_core_value_sigF4C5.contentHeightAdjustment), var_core_value_sigE68A && var_core_value_sigF4C5.pageBreakRanges["length"] && (var_core_value_sig79E0.pageBreakRanges ??= []).push(...var_core_value_sigF4C5.pageBreakRanges);
      }
    }
  }
  _registerPrintPreparation() {
    this.disposeWithMe(this._printPreparationService["registerContribution"](this));
  }
  _resolveDocPageMetrics(var_core_value_sig1E28) {
    var var_core_value_sigEEC3, var_core_value_sigFAEC;
    let var_core_value_sig1282 = this._injector["get"](p.IRenderManagerService).getRenderUnitById(var_core_value_sig1E28),
      var_core_value_sig80D0 = var_core_value_sig1282 == null || (var_core_value_sigEEC3 = var_core_value_sig1282.with(h.DocSkeletonManagerService).getSkeleton().getSkeletonData()) == null ? undefined : var_core_value_sigEEC3.pages[0],
      var_core_value_sig6CEE = (var_core_value_sigFAEC = this._univerInstanceService["getUnit"](var_core_value_sig1E28, a.UniverInstanceType["UNIVER_DOC"])) == null || (var_core_value_sigFAEC = var_core_value_sigFAEC.getDocumentStyle().pageSize) == null ? undefined : var_core_value_sigFAEC.height,
      var_core_value_sig4B271 = var_core_value_sig1282 == null ? undefined : var_core_value_sig1282.mainComponent;
    if (!(var_core_value_sig4B271 instanceof p.Documents)) return;
    let var_core_value_sig153F = var_core_value_sig4B271.getOffsetConfig().docsTop ?? 0,
      var_core_value_sigC847 = var_core_value_sig80D0 && os(var_core_value_sig80D0.pageHeight) ? var_core_value_sig80D0.pageHeight : var_core_value_sig6CEE;
    return os(var_core_value_sigC847) ? {
      firstTop: var_core_value_sig153F,
      pageStride: var_core_value_sigC847 + var_core_value_sig153F
    } : undefined;
  }
  _registerDocPrinting() {
    if (this._docPrintRegistered) return;
    let var_core_value_sig114E = this._injector["get"](o.DocPrintInterceptorService);
    var_core_value_sig114E.registerPrintComponent(h.EMBED_DOCS_CUSTOM_BLOCK_DEFAULT_COMPONENT_KEY, go), this.disposeWithMe(var_core_value_sig114E.interceptor["intercept"](var_core_value_sig114E.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT, {
      handler: (var_core_value_sig2776, var_core_value_sig6FB2, var_core_value_sigEB43) => {
        var var_core_value_sig4186;
        if (!var_core_value_sig2776) return var_core_value_sigEB43(var_core_value_sig2776);
        let var_core_value_sigF963 = var_core_value_sigEB43(var_core_value_sig2776),
          var_core_value_sigB608 = (var_core_value_sig4186 = this._univerInstanceService["getUnit"](var_core_value_sig6FB2.unitId, a.UniverInstanceType["UNIVER_DOC"])) == null ? undefined : var_core_value_sig4186.getSnapshot();
        return var_core_value_sigB608 && qo(var_core_value_sig6FB2.root["parentElement"] ?? var_core_value_sig6FB2.root, var_core_value_sigB608, var_core_value_sig6FB2.unitId, var_core_value_sig6FB2.offset, var_core_value_sig6FB2.bound, this._embedPrintService, var_core_value_sig2776, this._docPrintLayouts["get"](var_core_value_sig6FB2.unitId)), var_core_value_sigF963;
      }
    })), this._docPrintRegistered = true;
  }
  _registerSheetPrinting() {
    if (this._sheetPrintRegistered) return;
    let var_core_value_sig88EA = this._injector["get"](s.SheetPrintInterceptorService);
    var_core_value_sig88EA.registerPrintComponent(t.EMBED_SHEETS_FLOATING_COMPONENT_KEY, ho), this.disposeWithMe(var_core_value_sig88EA.interceptor["intercept"](var_core_value_sig88EA.interceptor["getInterceptPoints"]().PRINTING_RANGE, {
      handler: (var_core_value_sigF866, var_core_value_sig5EFB, var_core_value_sig3A85) => var_core_value_sig3A85(this._getOriginalSheetTabData(var_core_value_sig5EFB.unitId, var_core_value_sig5EFB.subUnitId) ? {
        startRow: 0,
        endRow: 0,
        startColumn: 0,
        endColumn: 0
      } : var_core_value_sigF866)
    })), this.disposeWithMe(var_core_value_sig88EA.interceptor["intercept"](var_core_value_sig88EA.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT, {
      handler: (var_core_value_sig2682, var_core_value_sig4BB5, var_core_value_sig67091) => {
        if (!var_core_value_sig2682) return var_core_value_sig67091(var_core_value_sig2682);
        let var_core_value_sig52CA = this._getOriginalSheetTabData(var_core_value_sig4BB5.unitId, var_core_value_sig4BB5.subUnitId) ?? (0, t.getEmbedSheetsTabCustomData)(var_core_value_sig4BB5.worksheet["getSnapshot"]()),
          var_core_value_sigC030 = var_core_value_sig52CA && this._embedPrintService["getResource"](var_core_value_sig4BB5.unitId, var_core_value_sig52CA.embedId);
        if (!(var_core_value_sigC030 != null && var_core_value_sigC030.source)) return var_core_value_sig67091(var_core_value_sig2682);
        let var_core_value_sig88F6 = ss(var_core_value_sig4BB5.root, var_core_value_sigC030.source, var_core_value_sig2682, {
          height: var_core_value_sig4BB5.engine["getCanvas"]().getHeight(),
          offsetX: var_core_value_sig4BB5.offset["offsetX"],
          offsetY: var_core_value_sig4BB5.offset["offsetY"],
          width: var_core_value_sig4BB5.engine["getCanvas"]().getWidth()
        });
        return var_core_value_sig88F6.complete || var_core_value_sig4BB5.resourceCollector["add"](cs(var_core_value_sig88F6)), var_core_value_sig67091(var_core_value_sig2682);
      }
    })), this._sheetPrintRegistered = true;
  }
  _getOriginalSheetTabData(var_core_value_sig4E97, var_core_value_sigBE44) {
    var var_core_value_sigE675;
    let var_core_value_sig4346 = (var_core_value_sigE675 = this._univerInstanceService["getUnit"](var_core_value_sig4E97, a.UniverInstanceType["UNIVER_SHEET"])) == null ? undefined : var_core_value_sigE675.getSheetBySheetId(var_core_value_sigBE44);
    return var_core_value_sig4346 && (0, t.getEmbedSheetsTabCustomData)(var_core_value_sig4346.getSnapshot());
  }
  _registerSlidePrinting() {
    this.disposeWithMe(this._slidePrintDrawingTransformService["register"]((var_core_value_sig37DB, var_core_value_sig5542) => ls(var_core_value_sig37DB, var_core_value_sig5542, this._embedPrintService)));
  }
  _registerBoardPrinting() {
    this.disposeWithMe(this._boardPrintCompositionService["register"]((var_core_value_sigE0A9, var_core_value_sigA73E) => Go(var_core_value_sigE0A9, var_core_value_sigA73E, this._embedPrintService)));
  }
  dispose() {
    this._docPrintLayouts["clear"](), super.dispose();
  }
};
Wo = Z([X(0, (0, a.Inject)(Ua)), X(1, r.IPrintPreparationService), X(2, (0, a.Inject)(a.Injector)), X(3, a.IUniverInstanceService), X(4, (0, a.Inject)(i.SlidePrintDrawingTransformService)), X(5, (0, a.Inject)(e.BoardPrintCompositionService))], Wo);
function Go(var_core_value_sig2240, var_core_value_sig6D9D1, var_core_value_sig91E3) {
  let var_core_value_sig9599 = {
    ...var_core_value_sig2240.data
  };
  return var_core_value_sig2240.order["forEach"](var_core_value_sigB49C => {
    let var_core_value_sigA044 = var_core_value_sig9599[var_core_value_sigB49C],
      var_core_value_sigD2F3 = var_core_value_sigA044 == null ? undefined : var_core_value_sigA044.element;
    if (!var_core_value_sigA044 || !(0, x.isEmbedBoardsFloatingElement)(var_core_value_sigD2F3) || var_core_value_sigD2F3.visible === false) return;
    let var_core_value_sig27CD = (0, x.getEmbedBoardsFloatingCustomData)(var_core_value_sigD2F3),
      var_core_value_sig8977 = var_core_value_sig27CD && var_core_value_sig91E3.getResource(var_core_value_sig6D9D1.boardModel["getUnitId"](), var_core_value_sig27CD.embedId);
    var_core_value_sig8977 != null && var_core_value_sig8977.source && (var_core_value_sig9599[var_core_value_sigB49C] = {
      ...var_core_value_sigA044,
      element: Ko(var_core_value_sigD2F3, var_core_value_sig8977.source)
    });
  }), {
    data: var_core_value_sig9599,
    order: var_core_value_sig2240.order
  };
}
function Ko(var_core_value_sigC0F81, var_core_value_sigF753) {
  return {
    id: var_core_value_sigC0F81.id,
    type: x.BoardElementType["Image"],
    transform: var_core_value_sigC0F81.transform,
    source: var_core_value_sigF753,
    imageSourceType: a.ImageSourceType["URL"],
    parentId: var_core_value_sigC0F81.parentId,
    laneId: var_core_value_sigC0F81.laneId,
    role: var_core_value_sigC0F81.role,
    managedBy: var_core_value_sigC0F81.managedBy,
    name: var_core_value_sigC0F81.name,
    description: var_core_value_sigC0F81.description,
    visible: var_core_value_sigC0F81.visible,
    selectable: var_core_value_sigC0F81.selectable,
    locked: var_core_value_sigC0F81.locked,
    custom: var_core_value_sigC0F81.custom
  };
}
function qo(var_core_value_sig7225, var_core_value_sigB8C8, var_core_value_sig462E, var_core_value_sig3AA8, var_core_value_sigF99D, var_core_value_sig80F5, var_core_value_sig5579, var_core_value_sigB242) {
  var var_core_value_sig6DA5;
  (var_core_value_sig6DA5 = var_core_value_sigB8C8.drawingsOrder) == null || var_core_value_sig6DA5.forEach(var_core_value_sigE931 => {
    var var_core_value_sig9F9C;
    let var_core_value_sig0728 = (var_core_value_sig9F9C = var_core_value_sigB8C8.drawings) == null ? undefined : var_core_value_sig9F9C[var_core_value_sigE931];
    if (!var_core_value_sig0728) return;
    let var_core_value_sigDC83 = oi("data" in var_core_value_sig0728 ? var_core_value_sig0728.data : undefined),
      var_core_value_sig56A8 = var_core_value_sigDC83 && var_core_value_sig80F5.getResource(var_core_value_sigDC83.hostUnitId ?? var_core_value_sig462E, var_core_value_sigDC83.embedId),
      var_core_value_sigF487 = var_core_value_sigB242 == null ? undefined : var_core_value_sigB242.drawings["get"](var_core_value_sigE931);
    if (var_core_value_sig56A8 != null && var_core_value_sig56A8.canvas) {
      var var_core_value_sigC62E;
      let var_core_value_sig7620 = $o(var_core_value_sig0728),
        var_core_value_sigB9FC = var_core_value_sigF487 != null && (var_core_value_sigC62E = var_core_value_sigF487.segments) != null && var_core_value_sigC62E.length ? var_core_value_sigF487.segments : Jo(var_core_value_sig56A8, var_core_value_sigF487, var_core_value_sig7620);
      if (Yo(var_core_value_sig7225, var_core_value_sig7620.left, var_core_value_sig7620.width, var_core_value_sig56A8, var_core_value_sigB9FC, var_core_value_sig3AA8, var_core_value_sigF99D, var_core_value_sig5579), var_core_value_sigB9FC.length) return;
    }
    let var_core_value_sigCD50 = Xo(var_core_value_sig0728, var_core_value_sigE931, var_core_value_sig462E, var_core_value_sig80F5, var_core_value_sigB242);
    if (!var_core_value_sigCD50) return;
    let {
      height: var_core_value_sig51C4,
      left: var_core_value_sigEECD,
      source: var_core_value_sigB655,
      top: var_core_value_sigF30A,
      width: var_core_value_sigD81A
    } = var_core_value_sigCD50;
    if (var_core_value_sigEECD + var_core_value_sigD81A < var_core_value_sigF99D.left || var_core_value_sigEECD > var_core_value_sigF99D.right || var_core_value_sigF30A + var_core_value_sig51C4 < var_core_value_sigF99D.top || var_core_value_sigF30A > var_core_value_sigF99D.bottom) return;
    let var_core_value_sigBE17 = document.createElement("img");
    var_core_value_sigBE17.alt = "", var_core_value_sigBE17.src = var_core_value_sigB655, var_core_value_sigBE17.style["position"] = "absolute", var_core_value_sigBE17.style["left"] = var_core_value_sigEECD - var_core_value_sig3AA8.x + "px", var_core_value_sigBE17.style["top"] = var_core_value_sigF30A - var_core_value_sig3AA8.y + "px", var_core_value_sigBE17.style["width"] = var_core_value_sigD81A + "px", var_core_value_sigBE17.style["height"] = var_core_value_sig51C4 + "px", var_core_value_sigBE17.style["objectFit"] = "contain", var_core_value_sigBE17.style["objectPosition"] = "left top", var_core_value_sigBE17.style["display"] = "block", var_core_value_sigBE17.style["zIndex"] = "11", var_core_value_sig7225.appendChild(var_core_value_sigBE17), var_core_value_sig5579.add((0, a.toDisposable)(() => var_core_value_sigBE17.remove()));
  });
}
function Jo(var_core_value_sig8018, var_core_value_sigB95F, var_core_value_sigC3B9) {
  if (!var_core_value_sig8018.canvas || !as(var_core_value_sigC3B9.top) || !os(var_core_value_sigC3B9.width)) return [];
  let var_core_value_sig1C33 = (var_core_value_sigB95F == null ? undefined : var_core_value_sigB95F.top) ?? var_core_value_sigC3B9.top,
    var_core_value_sigCD8F = (var_core_value_sigB95F == null ? undefined : var_core_value_sigB95F.height) ?? (os(var_core_value_sig8018.width) ? var_core_value_sigC3B9.width * var_core_value_sig8018.height / var_core_value_sig8018.width : var_core_value_sigC3B9.height);
  return as(var_core_value_sig1C33) && os(var_core_value_sigCD8F) ? [{
    height: var_core_value_sigCD8F,
    sourceHeight: var_core_value_sig8018.canvas["height"],
    sourceTop: 0,
    top: var_core_value_sig1C33
  }] : [];
}
function Yo(var_core_value_sigBF2E, var_core_value_sigCEE1, var_core_value_sig0C1F, var_core_value_sigEE64, var_core_value_sigBB7D, var_core_value_sig6AEA, var_core_value_sigC2EF, var_core_value_sig2FD1) {
  let var_core_value_sig1732 = var_core_value_sigEE64.canvas;
  !var_core_value_sig1732 || !as(var_core_value_sigCEE1) || !os(var_core_value_sig0C1F) || !os(var_core_value_sigEE64.width) || var_core_value_sigBB7D.forEach(var_core_value_sigBB5E => {
    var var_core_value_sigB4401;
    if (var_core_value_sigCEE1 + var_core_value_sig0C1F < var_core_value_sigC2EF.left || var_core_value_sigCEE1 > var_core_value_sigC2EF.right || var_core_value_sigBB5E.top + var_core_value_sigBB5E.height <= var_core_value_sigC2EF.top || var_core_value_sigBB5E.top >= var_core_value_sigC2EF.bottom) return;
    let var_core_value_sig9D0F = document.createElement("canvas");
    var_core_value_sig9D0F.width = var_core_value_sig1732.width, var_core_value_sig9D0F.height = Math.max(1, Math.ceil(var_core_value_sigBB5E.sourceHeight)), (var_core_value_sigB4401 = var_core_value_sig9D0F.getContext("2d")) == null || var_core_value_sigB4401.drawImage(var_core_value_sig1732, 0, var_core_value_sigBB5E.sourceTop, var_core_value_sig1732.width, var_core_value_sigBB5E.sourceHeight, 0, 0, var_core_value_sig9D0F.width, var_core_value_sig9D0F.height), var_core_value_sig9D0F.style["position"] = "absolute", var_core_value_sig9D0F.style["left"] = var_core_value_sigCEE1 - var_core_value_sig6AEA.x + "px", var_core_value_sig9D0F.style["top"] = var_core_value_sigBB5E.top - var_core_value_sig6AEA.y + "px", var_core_value_sig9D0F.style["width"] = var_core_value_sig0C1F + "px", var_core_value_sig9D0F.style["height"] = var_core_value_sigBB5E.height + "px", var_core_value_sig9D0F.style["display"] = "block", var_core_value_sig9D0F.style["zIndex"] = "11", var_core_value_sigBF2E.appendChild(var_core_value_sig9D0F), var_core_value_sig2FD1.add((0, a.toDisposable)(() => var_core_value_sig9D0F.remove()));
  });
}
function Xo(var_core_value_sig7DD2, var_core_value_sig116D, var_core_value_sig8367, var_core_value_sigE5EC, var_core_value_sig05A7) {
  var var_core_value_sig026D, var_core_value_sig1606;
  let var_core_value_sigB768 = oi("data" in var_core_value_sig7DD2 ? var_core_value_sig7DD2.data : undefined),
    var_core_value_sig247E = $o(var_core_value_sig7DD2),
    var_core_value_sig5841 = var_core_value_sigB768 && var_core_value_sigE5EC.getImage(var_core_value_sigB768.hostUnitId ?? var_core_value_sig8367, var_core_value_sigB768.embedId),
    var_core_value_sig7EB1 = var_core_value_sig247E == null ? undefined : var_core_value_sig247E.left,
    var_core_value_sigB1A5 = (var_core_value_sig05A7 == null || (var_core_value_sig026D = var_core_value_sig05A7.drawings["get"](var_core_value_sig116D)) == null ? undefined : var_core_value_sig026D.top) ?? (var_core_value_sig247E == null ? undefined : var_core_value_sig247E.top),
    var_core_value_sig1DFD = var_core_value_sig247E == null ? undefined : var_core_value_sig247E.width;
  if (!var_core_value_sig5841 || !as(var_core_value_sig7EB1) || !as(var_core_value_sigB1A5) || !os(var_core_value_sig1DFD)) return;
  let var_core_value_sigF538 = var_core_value_sig7DD2.docTransform["size"].width,
    var_core_value_sig641C = var_core_value_sig7DD2.docTransform["size"].height;
  return {
    height: (var_core_value_sig05A7 == null || (var_core_value_sig1606 = var_core_value_sig05A7.drawings["get"](var_core_value_sig116D)) == null ? undefined : var_core_value_sig1606.height) ?? ns(var_core_value_sigB768.childType, var_core_value_sig247E == null ? undefined : var_core_value_sig247E.height, var_core_value_sigF538, var_core_value_sig641C, var_core_value_sig1DFD),
    left: var_core_value_sig7EB1,
    source: var_core_value_sig5841,
    top: var_core_value_sigB1A5,
    width: var_core_value_sig1DFD
  };
}
function Zo(var_core_value_sigDF9C1, var_core_value_sig2784, var_core_value_sig6AFD, var_core_value_sigEFE4, var_core_value_sig13DA = !!var_core_value_sigEFE4, var_core_value_sigEEA1 = false) {
  let var_core_value_sigA7CA = (var_core_value_sigDF9C1.drawingsOrder ?? []).map(var_core_value_sig0354 => {
      var var_core_value_sig12F4;
      return {
        drawingId: var_core_value_sig0354,
        drawing: (var_core_value_sig12F4 = var_core_value_sigDF9C1.drawings) == null ? undefined : var_core_value_sig12F4[var_core_value_sig0354]
      };
    }).filter(({
      drawing: var_core_value_sigDCEC
    }) => {
      let var_core_value_sigB5C8 = var_core_value_sigDCEC && oi("data" in var_core_value_sigDCEC ? var_core_value_sigDCEC.data : undefined);
      return !!var_core_value_sigDCEC && !!var_core_value_sigB5C8 && (!!var_core_value_sig6AFD.getResource(var_core_value_sigB5C8.hostUnitId ?? var_core_value_sig2784, var_core_value_sigB5C8.embedId) || !!var_core_value_sig6AFD.getImage(var_core_value_sigB5C8.hostUnitId ?? var_core_value_sig2784, var_core_value_sigB5C8.embedId));
    }).sort((var_core_value_sig8320, var_core_value_sig1C1B) => {
      var var_core_value_sig70FD, var_core_value_sig988F;
      return (var_core_value_sig8320.drawing ? ((var_core_value_sig70FD = $o(var_core_value_sig8320.drawing)) == null ? undefined : var_core_value_sig70FD.top) ?? 0 : 0) - (var_core_value_sig1C1B.drawing ? ((var_core_value_sig988F = $o(var_core_value_sig1C1B.drawing)) == null ? undefined : var_core_value_sig988F.top) ?? 0 : 0);
    }),
    var_core_value_sig7E63 = new Map(),
    var_core_value_sigE856 = [],
    var_core_value_sig1863 = new Set(var_core_value_sigA7CA.map(({
      drawingId: var_core_value_sig50A1
    }) => var_core_value_sig50A1)),
    var_core_value_sig000A = var_core_value_sigA7CA.find(({
      drawing: var_core_value_sig71D2
    }) => {
      let var_core_value_sigC113 = var_core_value_sig71D2 && oi("data" in var_core_value_sig71D2 ? var_core_value_sig71D2.data : undefined);
      return var_core_value_sigC113 && is(var_core_value_sigC113.childType);
    }),
    var_core_value_sigEABE = var_core_value_sig000A == null ? undefined : var_core_value_sig000A.drawing,
    var_core_value_sig0935 = var_core_value_sigEABE && $o(var_core_value_sigEABE).top,
    var_core_value_sig5111 = (var_core_value_sigDF9C1.drawingsOrder ?? []).some(var_core_value_sig2326 => {
      var var_core_value_sig9007;
      let var_core_value_sig8726 = (var_core_value_sig9007 = var_core_value_sigDF9C1.drawings) == null ? undefined : var_core_value_sig9007[var_core_value_sig2326];
      if (!var_core_value_sig8726 || var_core_value_sig1863.has(var_core_value_sig2326)) return false;
      let var_core_value_sig4358 = $o(var_core_value_sig8726).top;
      return !as(var_core_value_sig0935) || !as(var_core_value_sig4358) || var_core_value_sig4358 >= var_core_value_sig0935;
    }),
    var_core_value_sigA81D = !var_core_value_sig000A || Qo(var_core_value_sigDF9C1, var_core_value_sig000A.drawingId),
    var_core_value_sigEBC7 = var_core_value_sigEEA1 && !var_core_value_sig5111 && !var_core_value_sigA81D,
    var_core_value_sig58CA = 0,
    var_core_value_sigCE6E = 0;
  return var_core_value_sigA7CA.forEach(({
    drawingId: var_core_value_sig9574,
    drawing: var_core_value_sigD610
  }, var_core_value_sigAF55) => {
    var var_core_value_sig7409;
    if (!var_core_value_sigD610) return;
    let var_core_value_sigD106 = oi("data" in var_core_value_sigD610 ? var_core_value_sigD610.data : undefined),
      var_core_value_sig7552 = $o(var_core_value_sigD610),
      var_core_value_sig56D11 = var_core_value_sig7552 == null ? undefined : var_core_value_sig7552.top,
      var_core_value_sig3D12 = var_core_value_sig7552 == null ? undefined : var_core_value_sig7552.width,
      var_core_value_sig8952 = var_core_value_sigD610.docTransform["size"].width,
      var_core_value_sigB409 = var_core_value_sigD610.docTransform["size"].height;
    if (!var_core_value_sigD106 || !as(var_core_value_sig56D11) || !os(var_core_value_sig3D12)) return;
    let var_core_value_sig3D2F = os(var_core_value_sig7552 == null ? undefined : var_core_value_sig7552.height) ? var_core_value_sig7552.height : rs(var_core_value_sig8952, var_core_value_sigB409, var_core_value_sig3D12),
      var_core_value_sigDBDA = var_core_value_sig6AFD.getResource(var_core_value_sigD106.hostUnitId ?? var_core_value_sig2784, var_core_value_sigD106.embedId),
      var_core_value_sig1EFA = var_core_value_sigDBDA && os(var_core_value_sigDBDA.width) ? var_core_value_sig3D12 * var_core_value_sigDBDA.height / var_core_value_sigDBDA.width : ns(var_core_value_sigD106.childType, var_core_value_sig7552 == null ? undefined : var_core_value_sig7552.height, var_core_value_sig8952, var_core_value_sigB409, var_core_value_sig3D12),
      var_core_value_sig7CF4 = var_core_value_sig56D11 + var_core_value_sig58CA,
      var_core_value_sigE956 = var_core_value_sigDBDA && os(var_core_value_sigDBDA.width) ? var_core_value_sig3D12 / var_core_value_sigDBDA.width : 1,
      var_core_value_sig189D = var_core_value_sig13DA && var_core_value_sigDBDA != null && var_core_value_sigDBDA.canvas && (var_core_value_sig7409 = var_core_value_sigDBDA.verticalBreaks) != null && var_core_value_sig7409.length ? es(var_core_value_sigDBDA, var_core_value_sig7CF4, var_core_value_sigE956, var_core_value_sigEFE4) : undefined,
      var_core_value_sigE26F1 = var_core_value_sig189D != null && var_core_value_sig189D.length ? var_core_value_sig189D[var_core_value_sig189D.length - 1].top + var_core_value_sig189D[var_core_value_sig189D.length - 1].height - var_core_value_sig7CF4 : var_core_value_sig1EFA;
    if (var_core_value_sig7E63.set(var_core_value_sig9574, {
      height: var_core_value_sigE26F1,
      segments: var_core_value_sig189D,
      top: var_core_value_sig7CF4
    }), var_core_value_sig189D != null && var_core_value_sig189D.length ? var_core_value_sigE856.push(...var_core_value_sig189D.map(var_core_value_sig5055 => ({
      bottom: var_core_value_sig5055.top + var_core_value_sig5055.height,
      sourceId: var_core_value_sig9574,
      top: var_core_value_sig5055.top
    }))) : var_core_value_sig13DA && var_core_value_sigE26F1 > 0 && var_core_value_sigE856.push({
      bottom: var_core_value_sig7CF4 + var_core_value_sigE26F1,
      sourceId: var_core_value_sig9574,
      top: var_core_value_sig7CF4
    }), var_core_value_sigCE6E = Math.max(var_core_value_sigCE6E, var_core_value_sig7CF4 + var_core_value_sigE26F1), is(var_core_value_sigD106.childType)) {
      var var_core_value_sig8212;
      let var_core_value_sig3801 = (var_core_value_sig8212 = var_core_value_sigA7CA[var_core_value_sigAF55 + 1]) == null ? undefined : var_core_value_sig8212.drawing,
        var_core_value_sig45F0 = var_core_value_sig3801 ? $o(var_core_value_sig3801).top : undefined,
        var_core_value_sigBC91 = var_core_value_sigE26F1 - (as(var_core_value_sig45F0) ? Math.max(0, Math.min(var_core_value_sig3D2F, var_core_value_sig45F0 - var_core_value_sig56D11)) : var_core_value_sig3D2F);
      var_core_value_sig58CA += var_core_value_sigEBC7 ? var_core_value_sigBC91 : Math.max(0, var_core_value_sigBC91);
    }
  }), {
    contentHeight: var_core_value_sigCE6E,
    contentHeightAdjustment: var_core_value_sig58CA,
    drawings: var_core_value_sig7E63,
    pageBreakRanges: var_core_value_sigE856
  };
}
function Qo(var_core_value_sigDABB, var_core_value_sig72CB) {
  var var_core_value_sigF326;
  let var_core_value_sigFA19 = var_core_value_sigDABB.body,
    var_core_value_sigF335 = var_core_value_sigFA19 == null || (var_core_value_sigF326 = var_core_value_sigFA19.customBlocks) == null || (var_core_value_sigF326 = var_core_value_sigF326.find(({
      blockId: var_core_value_sig9A60
    }) => var_core_value_sig9A60 === var_core_value_sig72CB)) == null ? undefined : var_core_value_sigF326.startIndex;
  return !(var_core_value_sigFA19 != null && var_core_value_sigFA19.dataStream) || !as(var_core_value_sigF335) || Array.from(var_core_value_sigFA19.dataStream["slice"](var_core_value_sigF335 + 1)).some(var_core_value_sig5EF5 => var_core_value_sig5EF5 !== a.DataStreamTreeTokenType["PARAGRAPH"] && var_core_value_sig5EF5 !== a.DataStreamTreeTokenType["SECTION_BREAK"] && var_core_value_sig5EF5 !== a.DataStreamTreeTokenType["CUSTOM_BLOCK"] && var_core_value_sig5EF5 !== a.DataStreamTreeTokenType["DOCS_END"] && var_core_value_sig5EF5.trim() !== "");
}
function $o(var_core_value_sigF82D) {
  return var_core_value_sigF82D.transform ?? (0, h.docDrawingPositionToTransform)(var_core_value_sigF82D.docTransform);
}
function es(var_core_value_sig4E1C, var_core_value_sig84EF, var_core_value_sigE8A0, var_core_value_sigEC18) {
  let var_core_value_sigE8D7 = [...(var_core_value_sig4E1C.verticalBreaks ?? []).filter(var_core_value_sig5324 => var_core_value_sig5324 > 0 && var_core_value_sig5324 < var_core_value_sig4E1C.height), var_core_value_sig4E1C.height],
    var_core_value_sig07BF = [],
    var_core_value_sig8634 = 0,
    var_core_value_sig65C5 = var_core_value_sig84EF;
  return var_core_value_sigE8D7.forEach(var_core_value_sig01301 => {
    let var_core_value_sig5838 = var_core_value_sig01301 - var_core_value_sig8634,
      var_core_value_sigB9FE = var_core_value_sig5838 * var_core_value_sigE8A0;
    if (var_core_value_sigEC18) {
      let var_core_value_sigCB88 = ts(var_core_value_sig65C5, var_core_value_sigEC18);
      var_core_value_sig65C5 < var_core_value_sigCB88 && var_core_value_sig65C5 + var_core_value_sigB9FE > var_core_value_sigCB88 && var_core_value_sigB9FE <= var_core_value_sigEC18.pageStride && (var_core_value_sig65C5 = var_core_value_sigCB88);
    }
    var_core_value_sig07BF.push({
      height: var_core_value_sigB9FE,
      sourceHeight: var_core_value_sig5838,
      sourceTop: var_core_value_sig8634,
      top: var_core_value_sig65C5
    }), var_core_value_sig65C5 += var_core_value_sigB9FE, var_core_value_sig8634 = var_core_value_sig01301;
  }), var_core_value_sig07BF;
}
function ts(var_core_value_sig0958, var_core_value_sig87E1) {
  let var_core_value_sig3564 = Math.max(0, Math.floor((var_core_value_sig0958 - var_core_value_sig87E1.firstTop) / var_core_value_sig87E1.pageStride));
  return var_core_value_sig87E1.firstTop + (var_core_value_sig3564 + 1) * var_core_value_sig87E1.pageStride;
}
function ns(var_core_value_sig0926, var_core_value_sig6AB0, var_core_value_sigA283, var_core_value_sigEE51, var_core_value_sigB69E1) {
  return is(var_core_value_sig0926) && os(var_core_value_sig6AB0) ? var_core_value_sig6AB0 : rs(var_core_value_sigA283, var_core_value_sigEE51, var_core_value_sigB69E1);
}
function rs(var_core_value_sig1138, var_core_value_sig9A1D, var_core_value_sigE1EF) {
  return os(var_core_value_sig1138) && os(var_core_value_sig9A1D) ? var_core_value_sigE1EF * var_core_value_sig9A1D / var_core_value_sig1138 : 0;
}
function is(var_core_value_sigB2D6) {
  return var_core_value_sigB2D6 === a.UniverInstanceType["UNIVER_SHEET"] || var_core_value_sigB2D6 === a.UniverInstanceType["UNIVER_BASE"];
}
function as(var_core_value_sigD35B) {
  return typeof var_core_value_sigD35B == "number" && Number.isFinite(var_core_value_sigD35B);
}
function os(var_core_value_sig1B00) {
  return as(var_core_value_sig1B00) && var_core_value_sig1B00 > 0;
}
function ss(var_core_value_sigD864, var_core_value_sig3380, var_core_value_sigBC6D, var_core_value_sigA806) {
  let var_core_value_sigB9ED = var_core_value_sigD864.style["overflow"],
    var_core_value_sig9DA7 = var_core_value_sigD864.style["zIndex"],
    var_core_value_sigBD0A = document.createElement("img");
  return var_core_value_sigBD0A.alt = "", var_core_value_sigBD0A.src = var_core_value_sig3380, var_core_value_sigBD0A.style["position"] = "absolute", var_core_value_sigBD0A.style["left"] = -var_core_value_sigA806.offsetX + "px", var_core_value_sigBD0A.style["top"] = -var_core_value_sigA806.offsetY + "px", var_core_value_sigBD0A.style["width"] = var_core_value_sigA806.width + "px", var_core_value_sigBD0A.style["height"] = var_core_value_sigA806.height + "px", var_core_value_sigBD0A.style["objectFit"] = "contain", var_core_value_sigBD0A.style["objectPosition"] = "center", var_core_value_sigBD0A.style["display"] = "block", var_core_value_sigD864.style["overflow"] = "visible", var_core_value_sigD864.style["zIndex"] = "9", var_core_value_sigD864.appendChild(var_core_value_sigBD0A), var_core_value_sigBC6D.add((0, a.toDisposable)(() => {
    var_core_value_sigBD0A.remove(), var_core_value_sigD864.style["overflow"] = var_core_value_sigB9ED, var_core_value_sigD864.style["zIndex"] = var_core_value_sig9DA7;
  })), var_core_value_sigBD0A;
}
function cs(var_core_value_sig9E02) {
  return new Promise(var_core_value_sig41A5 => {
    var_core_value_sig9E02.addEventListener("load", () => var_core_value_sig41A5(), {
      once: true
    }), var_core_value_sig9E02.addEventListener("error", () => var_core_value_sig41A5(), {
      once: true
    });
  });
}
function ls(var_core_value_sigC558, var_core_value_sig080D1, var_core_value_sigBF7F) {
  let var_core_value_sig694C = var_core_value_sig080D1.slideModel["getUnitId"](),
    var_core_value_sigDF02 = var_core_value_sig080D1.slidePage["getId"](),
    var_core_value_sig4CEA = var_core_value_sig080D1.slidePage["getData"](),
    var_core_value_sig36101 = (0, g.getEmbedSlidesPageCustomData)(var_core_value_sig4CEA),
    var_core_value_sigBB17 = var_core_value_sig36101 && var_core_value_sigBF7F.getResource(var_core_value_sig694C, var_core_value_sig36101.embedId);
  if (var_core_value_sig36101 && var_core_value_sigBB17 != null && var_core_value_sigBB17.source) {
    let var_core_value_sig6D3D = (0, S.resolveSlideLogicalPageSize)(var_core_value_sig4CEA.pageSize ?? var_core_value_sig080D1.slideModel["getSnapshot"]().defaultPageSize),
      var_core_value_sigB191 = ds(var_core_value_sig694C, var_core_value_sigDF02, "embed-print-" + var_core_value_sig36101.embedId, var_core_value_sigBB17.source, {
        left: 0,
        top: 0,
        width: var_core_value_sig6D3D.width,
        height: var_core_value_sig6D3D.height
      });
    return {
      data: {
        [var_core_value_sigB191.drawingId]: var_core_value_sigB191
      },
      order: [var_core_value_sigB191.drawingId]
    };
  }
  return us(var_core_value_sigC558, var_core_value_sig694C, var_core_value_sigDF02, var_core_value_sigBF7F);
}
function us(var_core_value_sigA593, var_core_value_sig75C8, var_core_value_sig98C6, var_core_value_sigBE5D) {
  let var_core_value_sig4B32 = {
    ...var_core_value_sigA593.data
  };
  return var_core_value_sigA593.order["forEach"](var_core_value_sig949D => {
    let var_core_value_sig4113 = var_core_value_sig4B32[var_core_value_sig949D],
      var_core_value_sigEC12 = var_core_value_sig4113 && (0, g.getEmbedSlidesFloatingCustomData)(var_core_value_sig4113.element),
      var_core_value_sigC932 = var_core_value_sigEC12 && var_core_value_sigBE5D.getImage(var_core_value_sig75C8, var_core_value_sigEC12.embedId);
    !var_core_value_sig4113 || !var_core_value_sigC932 || (var_core_value_sig4B32[var_core_value_sig949D] = ds(var_core_value_sig75C8, var_core_value_sig98C6, var_core_value_sig949D, var_core_value_sigC932, var_core_value_sig4113.element["transform"], var_core_value_sig4113.sourcePageType));
  }), {
    data: var_core_value_sig4B32,
    order: var_core_value_sigA593.order
  };
}
function ds(var_core_value_sigA727, var_core_value_sigAD32, var_core_value_sigCA1B, var_core_value_sig624C, var_core_value_sig6DE4, var_core_value_sig733E = g.PageTypeEnum["Slide"]) {
  return (0, g.slideElementToDrawing)(var_core_value_sigA727, var_core_value_sigAD32, {
    id: var_core_value_sigCA1B,
    type: g.PageElementTypeEnum["Image"],
    name: var_core_value_sigCA1B,
    source: var_core_value_sig624C,
    imageSourceType: a.ImageSourceType["URL"],
    transform: var_core_value_sig6DE4
  }, var_core_value_sig733E);
}
const fs = new Set(["__editor_" + a.DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY, "__editor_" + a.DOCS_NORMAL_EDITOR_UNIT_ID_KEY]);
let ps = class extends a.Disposable {
  constructor(var_core_value_sigDE39) {
    super(), [{
      id: o.DocSelectAllCommand["id"],
      binding: c.KeyCode["A"] | c.MetaKeys["CTRL_COMMAND"],
      eventPreconditions: ms,
      preconditions: hs,
      nativeTextEditorBehavior: c.NativeTextEditorShortcutBehavior["OVERRIDE_NATIVE"],
      priority: 902
    }, {
      id: s.SelectAllCommand["id"],
      binding: c.KeyCode["A"] | c.MetaKeys["CTRL_COMMAND"],
      eventPreconditions: ms,
      preconditions: var_core_value_sig8D65 => !hs(var_core_value_sig8D65),
      nativeTextEditorBehavior: c.NativeTextEditorShortcutBehavior["OVERRIDE_NATIVE"],
      priority: 902,
      staticParameters: {
        expandToGapFirst: true,
        loop: true
      }
    }, {
      id: a.UndoCommand["id"],
      binding: c.KeyCode["Z"] | c.MetaKeys["CTRL_COMMAND"],
      eventPreconditions: ms,
      preconditions: var_core_value_sig8122 => !hs(var_core_value_sig8122),
      priority: 902
    }, {
      id: a.RedoCommand["id"],
      binding: c.KeyCode["Y"] | c.MetaKeys["CTRL_COMMAND"],
      eventPreconditions: ms,
      preconditions: var_core_value_sigEDC6 => !hs(var_core_value_sigEDC6),
      priority: 902
    }, {
      id: a.RedoCommand["id"],
      binding: c.KeyCode["Z"] | c.MetaKeys["CTRL_COMMAND"] | c.MetaKeys["SHIFT"],
      eventPreconditions: ms,
      preconditions: var_core_value_sig611A => !hs(var_core_value_sig611A),
      priority: 902
    }].forEach(var_core_value_sig6BD9 => this.disposeWithMe(var_core_value_sigDE39.registerShortcut(var_core_value_sig6BD9)));
  }
};
ps = Z([X(0, c.IShortcutService)], ps);
function ms(var_core_value_sigD487) {
  let var_core_value_sigA387 = var_core_value_sigD487.target;
  return var_core_value_sigA387 instanceof HTMLElement && fs.has(var_core_value_sigA387.id) && var_core_value_sigA387.closest("[data-embed-interaction-boundary-owner]") != null;
}
function hs(var_core_value_sigA781) {
  return !!(var_core_value_sigA781.getContextValue(a.EDITOR_ACTIVATED) || var_core_value_sigA781.getContextValue(a.FORMULA_EDITOR_ACTIVATED));
}
function gs(var_core_value_sigF165) {
  let var_core_value_sig6734 = [];
  return [[a.UniverInstanceType["UNIVER_DOC"], "docs-ui.ribbon"], [a.UniverInstanceType["UNIVER_SHEET"], "sheets-ui.ribbon"], [a.UniverInstanceType["UNIVER_SLIDE"], "slides-ui.ribbon"], [a.UniverInstanceType["UNIVER_BASE"], "bases-ui.ribbon"]].forEach(([var_core_value_sig1529, var_core_value_sigAFD8]) => {
    let var_core_value_sig6017 = On(var_core_value_sigF165, {
      childType: var_core_value_sig1529,
      id: var_core_value_sigAFD8,
      scopedActionServiceTokens: var_core_value_sig1529 === a.UniverInstanceType["UNIVER_SLIDE"] ? [S.SlideInsertService] : undefined
    });
    var_core_value_sig6017 && var_core_value_sig6734.push(var_core_value_sig6017);
  }), var_core_value_sig6734;
}
var _s = class {
  constructor() {
    V(this, "_providers", new Map());
  }
  register(var_core_value_sigC66C) {
    if (this._providers["has"](var_core_value_sigC66C.childType)) throw Error("Embed readonly preview provider already registered: " + var_core_value_sigC66C.childType);
    this._providers["set"](var_core_value_sigC66C.childType, var_core_value_sigC66C);
  }
  get(var_core_value_sigC5AC) {
    return this._providers["get"](var_core_value_sigC5AC);
  }
  list() {
    return [...this._providers["values"]()];
  }
};
const vs = new WeakMap(),
  ys = new WeakMap();
function bs(var_core_value_sig3114, var_core_value_sigE867, var_core_value_sig5AB2) {
  var var_core_value_sig487E;
  if (Cs(var_core_value_sig3114)) {
    Ss(var_core_value_sig3114, var_core_value_sigE867, var_core_value_sig5AB2);
    return;
  }
  let var_core_value_sig1B2B = var_core_value_sig3114;
  if ((var_core_value_sig487E = ys.get(var_core_value_sig1B2B)) != null && var_core_value_sig487E.has(var_core_value_sigE867)) return;
  let var_core_value_sigA23A = vs.get(var_core_value_sig1B2B) ?? new Map();
  var_core_value_sigA23A.set(var_core_value_sigE867, var_core_value_sig5AB2), vs.set(var_core_value_sig1B2B, var_core_value_sigA23A);
}
function xs(var_core_value_sig0F07) {
  if (!Cs(var_core_value_sig0F07)) return;
  let var_core_value_sig31B4 = var_core_value_sig0F07,
    var_core_value_sig7C00 = vs.get(var_core_value_sig31B4);
  var_core_value_sig7C00 != null && var_core_value_sig7C00.size && (var_core_value_sig7C00.forEach((var_core_value_sig5880, var_core_value_sigF7E2) => Ss(var_core_value_sig0F07, var_core_value_sigF7E2, var_core_value_sig5880)), vs.delete(var_core_value_sig31B4));
}
function Ss(var_core_value_sigDE56, var_core_value_sig8F3C, var_core_value_sig3FCF1) {
  let var_core_value_sig3FBF = var_core_value_sigDE56,
    var_core_value_sig992C = ys.get(var_core_value_sig3FBF) ?? new Set();
  var_core_value_sig992C.has(var_core_value_sig8F3C) || (var_core_value_sig3FCF1(var_core_value_sigDE56), var_core_value_sig992C.add(var_core_value_sig8F3C), ys.set(var_core_value_sig3FBF, var_core_value_sig992C));
}
function Cs(var_core_value_sig7548) {
  return var_core_value_sig7548.has(t.EmbedHostAdapterRegistryService) && var_core_value_sig7548.has(vt) && var_core_value_sig7548.has(gt) && var_core_value_sig7548.has(H) && var_core_value_sig7548.has(Mn) && var_core_value_sig7548.has(_t) && var_core_value_sig7548.has(Ur) && var_core_value_sig7548.has(ba) && var_core_value_sig7548.has(ii) && var_core_value_sig7548.has(_s);
}
function ws(var_core_value_sig6650) {
  let {
    childType: var_core_value_sig7CCE,
    productName: var_core_value_sig62561
  } = var_core_value_sig6650;
  return {
    childType: var_core_value_sig7CCE,
    productName: var_core_value_sig62561,
    hostChromeMode: "ribbon",
    layoutPolicy: {
      tab: t.DEFAULT_EMBED_TAB_LAYOUT_POLICY,
      float: t.DEFAULT_EMBED_FLOAT_LAYOUT_POLICY,
      docFlow: t.DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY
    },
    createRibbonOverride: ({
      childUnitId: var_core_value_sigDEEA,
      embedId: var_core_value_sig49D1,
      injector: var_core_value_sigEDEC
    }) => {
      let var_core_value_sig4F7B = on(var_core_value_sigEDEC, {
        childType: var_core_value_sig7CCE,
        childUnitId: var_core_value_sigDEEA,
        embedId: var_core_value_sig49D1,
        menuSchema: Ts(var_core_value_sigEDEC, var_core_value_sig7CCE, var_core_value_sig6650.menuSchema)
      });
      return {
        mode: "ribbon",
        ribbonService: var_core_value_sig4F7B.ribbonService,
        injector: var_core_value_sig4F7B.injector,
        placeholderTitle: var_core_value_sig62561,
        disposable: var_core_value_sig4F7B.disposable
      };
    }
  };
}
function Ts(var_core_value_sig691D, var_core_value_sig4405, var_core_value_sig4A34) {
  let var_core_value_sig81FA = var_core_value_sig691D;
  if (typeof var_core_value_sig81FA.has == "function" && typeof var_core_value_sig81FA.get == "function" && var_core_value_sig81FA.has(Mn)) {
    let var_core_value_sig8269 = var_core_value_sig81FA.get(Mn).getMergedMenuSchema(var_core_value_sig4405, "ribbon");
    if (var_core_value_sig8269) return var_core_value_sig8269;
  }
  return var_core_value_sig4A34;
}
function Es(var_core_value_sigEBA1) {
  let var_core_value_sig5E4A = Ds(var_core_value_sigEBA1);
  return {
    childType: var_core_value_sigEBA1.childType,
    productName: var_core_value_sigEBA1.productName,
    hostChromeMode: var_core_value_sig5E4A,
    hostHeaderMode: var_core_value_sigEBA1.hostHeaderMode ?? "none",
    layoutPolicy: {
      tab: {
        ...t.DEFAULT_EMBED_TAB_LAYOUT_POLICY,
        ribbon: var_core_value_sig5E4A === "none" ? "hidden" : "host"
      },
      float: t.DEFAULT_EMBED_FLOAT_LAYOUT_POLICY,
      docFlow: t.DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY
    },
    createRibbonOverride: var_core_value_sig5E4A === "title-only" ? () => ({
      mode: "title-only",
      ribbonService: Os(),
      placeholderTitle: var_core_value_sigEBA1.productName,
      hideToolbar: true
    }) : undefined
  };
}
function Ds(var_core_value_sig4866) {
  return var_core_value_sig4866.hostChromeMode ? var_core_value_sig4866.hostChromeMode : var_core_value_sig4866.hostHeaderMode === "placeholder" ? "title-only" : "none";
}
function Os() {
  return {
    ribbon$: (0, f.of)([]),
    activatedTab$: (0, f.of)(""),
    collapsedIds$: (0, f.of)([]),
    fakeToolbarVisible$: (0, f.of)(false),
    setActivatedTab: () => {},
    showContextualTab: () => {},
    hideContextualTab: () => {},
    hideAllContextualTabs: () => {},
    setCollapsedIds: () => {},
    setFakeToolbarVisible: () => {}
  };
}
function ks(var_core_value_sig7F98, var_core_value_sig42BA, var_core_value_sigF9F7, var_core_value_sigAFCE) {
  return [...var_core_value_sig7F98.querySelectorAll(var_core_value_sig42BA)].reverse().find(var_core_value_sigB092 => {
    let var_core_value_sigC04F = var_core_value_sigB092.getBoundingClientRect();
    return var_core_value_sigF9F7 >= var_core_value_sigC04F.left && var_core_value_sigF9F7 <= var_core_value_sigC04F.right && var_core_value_sigAFCE >= var_core_value_sigC04F.top && var_core_value_sigAFCE <= var_core_value_sigC04F.bottom;
  });
}
function As() {
  return {
    ...Es({
      childType: a.UniverInstanceType["UNIVER_BASE"],
      productName: "Bases",
      hostChromeMode: "none"
    }),
    presentationPolicy: {
      getChromeCss: () => "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-workbench-layout\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20grid-template-columns:\x20minmax(0,\x201fr)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-left-panel\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-left-panel-floating-expand-trigger\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-header-menu\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-add-view-button\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-view-tab-more\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-global-layer\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-right-panel\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-footer\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
      activateNavigationAtPoint: ({
        childContext: var_core_value_sig8B16,
        clientX: var_core_value_sig9640,
        clientY: var_core_value_sig34AB,
        runtimeHost: var_core_value_sig0BE5
      }) => {
        if (ks(var_core_value_sig0BE5, '[data-u-comp="base-view-tab-more"]', var_core_value_sig9640, var_core_value_sig34AB)) return false;
        let var_core_value_sig2F9D = ks(var_core_value_sig0BE5, "[data-u-comp=\x22base-view-tab\x22]", var_core_value_sig9640, var_core_value_sig34AB),
          var_core_value_sig9511 = var_core_value_sig2F9D == null ? undefined : var_core_value_sig2F9D.dataset["viewId"],
          var_core_value_sigAFDD = var_core_value_sig8B16.runtimeScope["injector"];
        return !var_core_value_sig9511 || !var_core_value_sigAFDD.has(_.IBaseUIStateService) ? false : (var_core_value_sigAFDD.get(_.IBaseUIStateService).activateView(var_core_value_sig9511), true);
      }
    }
  };
}
let js = class {
  constructor(var_core_value_sig431B1, var_core_value_sig3073, var_core_value_sig4C99) {
    this._baseUIStateService = var_core_value_sig431B1, this._projectionService = var_core_value_sig3073, this._wheelScrollService = var_core_value_sig4C99, V(this, "childType", a.UniverInstanceType["UNIVER_BASE"]);
  }
  measureContentSize(var_core_value_sigDDD2) {
    var var_core_value_sig6D5F, var_core_value_sigB80D, var_core_value_sigE0A2;
    let var_core_value_sig8F71 = var_core_value_sigDDD2.childUnit instanceof a.BaseDataModel ? var_core_value_sigDDD2.childUnit["getSnapshot"]() : undefined;
    if (!var_core_value_sig8F71) return;
    let var_core_value_sig9016 = (var_core_value_sig6D5F = var_core_value_sigDDD2.injector) != null && var_core_value_sig6D5F.has(_.IBaseUIStateService) ? var_core_value_sigDDD2.injector["get"](_.IBaseUIStateService) : this._baseUIStateService,
      var_core_value_sigB043 = (var_core_value_sigB80D = var_core_value_sigDDD2.injector) != null && var_core_value_sigB80D.has(C.IBaseProjectionService) ? var_core_value_sigDDD2.injector["get"](C.IBaseProjectionService) : this._projectionService,
      var_core_value_sig554B = (var_core_value_sigE0A2 = var_core_value_sigDDD2.injector) != null && var_core_value_sigE0A2.has(_.IBaseViewWheelScrollService) ? var_core_value_sigDDD2.injector["get"](_.IBaseViewWheelScrollService) : this._wheelScrollService,
      var_core_value_sig33F0 = var_core_value_sig9016.getState(),
      var_core_value_sigC9BF = Ps(var_core_value_sig8F71, var_core_value_sig33F0, var_core_value_sigDDD2.viewportWidth),
      var_core_value_sigE1AD = Ms(var_core_value_sig8F71, var_core_value_sig33F0, var_core_value_sigB043, var_core_value_sig554B, var_core_value_sigDDD2.viewportHeight, var_core_value_sigC9BF ?? var_core_value_sigDDD2.viewportWidth);
    return var_core_value_sigE1AD == null && var_core_value_sigC9BF == null ? undefined : {
      height: var_core_value_sigE1AD == null ? undefined : var_core_value_sigE1AD.height,
      verticalBreaks: var_core_value_sigE1AD == null ? undefined : var_core_value_sigE1AD.breaks,
      width: var_core_value_sigC9BF
    };
  }
};
js = Z([X(0, _.IBaseUIStateService), X(1, C.IBaseProjectionService), X(2, _.IBaseViewWheelScrollService)], js);
function Ms(var_core_value_sig7501, var_core_value_sigD1D3, var_core_value_sigE9C0, var_core_value_sigEAD0, var_core_value_sig806B, var_core_value_sig2071) {
  var var_core_value_sig9BB4;
  let var_core_value_sigD52D = Rs(var_core_value_sig7501, var_core_value_sigD1D3 == null ? undefined : var_core_value_sigD1D3.activeTableId),
    var_core_value_sigA208 = var_core_value_sigD52D ? var_core_value_sig7501.tables[var_core_value_sigD52D] : undefined;
  if (!var_core_value_sigA208 || !var_core_value_sigD52D) return;
  let var_core_value_sig2306 = zs(var_core_value_sigA208, var_core_value_sigD1D3 == null ? undefined : var_core_value_sigD1D3.activeViewId),
    var_core_value_sig6EDF = var_core_value_sig2306 ? (var_core_value_sig9BB4 = var_core_value_sigA208.views) == null ? undefined : var_core_value_sig9BB4[var_core_value_sig2306] : undefined,
    var_core_value_sig0A62 = Bs(var_core_value_sigA208),
    var_core_value_sigB930 = (0, _.resolveGridRowHeight)(var_core_value_sig6EDF != null && var_core_value_sig6EDF.config && "rowHeight" in var_core_value_sig6EDF.config ? var_core_value_sig6EDF.config["rowHeight"] : undefined);
  return Ns(var_core_value_sig7501, var_core_value_sigD52D, var_core_value_sig2306, var_core_value_sigB930, var_core_value_sigD1D3, var_core_value_sigE9C0, var_core_value_sigEAD0, var_core_value_sig806B, var_core_value_sig2071) ?? {
    breaks: Array(var_core_value_sig0A62).fill(null).map((var_core_value_sig90FF, var_core_value_sigA7F6) => _.GRID_HEADER_HEIGHT + (var_core_value_sigA7F6 + 1) * var_core_value_sigB930),
    height: _.GRID_HEADER_HEIGHT + var_core_value_sig0A62 * var_core_value_sigB930 + _.GRID_ADD_RECORD_ROW_HEIGHT + _.GRID_SUMMARY_HEIGHT
  };
}
function Ns(var_core_value_sigD8E7, var_core_value_sig707F, var_core_value_sigBA9B, var_core_value_sig595E, var_core_value_sig62BF, var_core_value_sig6773, var_core_value_sigB16D, var_core_value_sigE2C9, var_core_value_sig6D71) {
  if (!var_core_value_sigBA9B || !var_core_value_sig6773 || !var_core_value_sigB16D) return;
  let var_core_value_sig4BDF = var_core_value_sig6773.getProjection(var_core_value_sigD8E7, var_core_value_sig707F, var_core_value_sigBA9B);
  if (var_core_value_sig4BDF.type === a.BaseViewType["Calendar"] && var_core_value_sig4BDF.config["mode"] === "month" && var_core_value_sigE2C9 != null) return {
    height: var_core_value_sigE2C9
  };
  if (var_core_value_sig4BDF.type === a.BaseViewType["Gallery"]) return {
    height: var_core_value_sigB16D.getGalleryProjectionBodyHeight(var_core_value_sig4BDF, var_core_value_sig6D71 ?? 1)
  };
  if (var_core_value_sig4BDF.type === a.BaseViewType["Kanban"]) return {
    height: var_core_value_sigB16D.getKanbanProjectionBodyHeight(var_core_value_sig4BDF)
  };
  if (var_core_value_sig4BDF.type === a.BaseViewType["Grid"] || var_core_value_sig4BDF.type === a.BaseViewType["Gantt"]) {
    let var_core_value_sig5A0F = var_core_value_sig62BF == null ? undefined : var_core_value_sig62BF.collapsedGroupPaths[var_core_value_sigBA9B];
    return {
      breaks: (0, _.buildBaseProjectedRowLayout)(var_core_value_sig4BDF, var_core_value_sig5A0F, var_core_value_sig595E).map(var_core_value_sig7E56 => _.GRID_HEADER_HEIGHT + var_core_value_sig7E56.y + var_core_value_sig7E56.height),
      height: _.GRID_HEADER_HEIGHT + var_core_value_sigB16D.getGridProjectionBodyHeight(var_core_value_sig4BDF, var_core_value_sig5A0F, var_core_value_sig595E) + _.GRID_SUMMARY_HEIGHT
    };
  }
}
function Ps(var_core_value_sig0925, var_core_value_sigB536, var_core_value_sig6A2F) {
  var var_core_value_sigF08D, var_core_value_sigD9A4;
  let var_core_value_sigCE76 = Is(var_core_value_sig0925, var_core_value_sigB536 == null ? undefined : var_core_value_sigB536.activeTableId);
  if (!var_core_value_sigCE76) return;
  let var_core_value_sigBB85 = Ls(var_core_value_sigCE76, var_core_value_sigB536 == null ? undefined : var_core_value_sigB536.activeViewId),
    var_core_value_sigCC39 = var_core_value_sigCE76.fields ?? {},
    var_core_value_sigA08C = _.GRID_ROW_HEADER_WIDTH + (var_core_value_sigBB85 != null && (var_core_value_sigF08D = var_core_value_sigBB85.fieldOrder) != null && var_core_value_sigF08D.length ? var_core_value_sigBB85.fieldOrder : (var_core_value_sigD9A4 = var_core_value_sigCE76.fieldOrder) != null && var_core_value_sigD9A4.length ? var_core_value_sigCE76.fieldOrder : Object.keys(var_core_value_sigCC39)).reduce((var_core_value_sigCDF5, var_core_value_sig3802) => {
      var var_core_value_sigB642;
      let var_core_value_sig9026 = var_core_value_sigCC39[var_core_value_sig3802],
        var_core_value_sigDCD6 = var_core_value_sigBB85 == null || (var_core_value_sigB642 = var_core_value_sigBB85.fieldSettings) == null ? undefined : var_core_value_sigB642[var_core_value_sig3802];
      return var_core_value_sig9026 && !(var_core_value_sigDCD6 != null && var_core_value_sigDCD6.hidden) ? var_core_value_sigCDF5 + Fs(var_core_value_sigDCD6 == null ? undefined : var_core_value_sigDCD6.width) : var_core_value_sigCDF5;
    }, 0) + _.GRID_ADD_FIELD_COLUMN_WIDTH;
  return (var_core_value_sigBB85 == null ? undefined : var_core_value_sigBB85.type) === a.BaseViewType["Gallery"] || (var_core_value_sigBB85 == null ? undefined : var_core_value_sigBB85.type) === a.BaseViewType["Kanban"] ? Math.max(var_core_value_sigA08C, var_core_value_sig6A2F ?? 0) : var_core_value_sigA08C;
}
function Fs(var_core_value_sigC84C) {
  return typeof var_core_value_sigC84C == "number" && Number.isFinite(var_core_value_sigC84C) && var_core_value_sigC84C > 0 ? var_core_value_sigC84C : _.GRID_DEFAULT_COLUMN_WIDTH;
}
function Is(var_core_value_sigCAFE, var_core_value_sigD639) {
  var var_core_value_sigFEFC;
  let var_core_value_sig71BD = Rs(var_core_value_sigCAFE, var_core_value_sigD639);
  return var_core_value_sig71BD ? (var_core_value_sigFEFC = var_core_value_sigCAFE.tables) == null ? undefined : var_core_value_sigFEFC[var_core_value_sig71BD] : undefined;
}
function Ls(var_core_value_sig1AC4, var_core_value_sig736D) {
  var var_core_value_sig0AA1;
  let var_core_value_sigF700 = zs(var_core_value_sig1AC4, var_core_value_sig736D);
  return var_core_value_sigF700 ? (var_core_value_sig0AA1 = var_core_value_sig1AC4.views) == null ? undefined : var_core_value_sig0AA1[var_core_value_sigF700] : undefined;
}
function Rs(var_core_value_sigAB3E, var_core_value_sig9BFA) {
  let var_core_value_sig2006 = var_core_value_sigAB3E.tables ?? {};
  if (var_core_value_sig9BFA && var_core_value_sig2006[var_core_value_sig9BFA]) return var_core_value_sig9BFA;
  let var_core_value_sigA98C = var_core_value_sigAB3E.tableOrder ?? [];
  return [...var_core_value_sigA98C, ...Object.keys(var_core_value_sig2006).filter(var_core_value_sig048B => !var_core_value_sigA98C.includes(var_core_value_sig048B))].find(var_core_value_sig1334 => var_core_value_sig2006[var_core_value_sig1334]);
}
function zs(var_core_value_sig0502, var_core_value_sigDEDD) {
  let var_core_value_sigA5DC = var_core_value_sig0502.views ?? {};
  if (var_core_value_sigDEDD && var_core_value_sigA5DC[var_core_value_sigDEDD]) return var_core_value_sigDEDD;
  let var_core_value_sig7914 = var_core_value_sig0502.viewOrder ?? [];
  return [...var_core_value_sig7914, ...Object.keys(var_core_value_sigA5DC).filter(var_core_value_sig2605 => !var_core_value_sig7914.includes(var_core_value_sig2605))].find(var_core_value_sig5F20 => var_core_value_sigA5DC[var_core_value_sig5F20]);
}
function Bs(var_core_value_sig408D) {
  var var_core_value_sigEDD0;
  let var_core_value_sig3C51 = var_core_value_sig408D.records ?? {};
  return ((var_core_value_sigEDD0 = var_core_value_sig408D.recordOrder) != null && var_core_value_sigEDD0.length ? var_core_value_sig408D.recordOrder : Object.keys(var_core_value_sig3C51)).filter(var_core_value_sig019C => var_core_value_sig3C51[var_core_value_sig019C]).length;
}
function Vs(var_core_value_sig2D1E, var_core_value_sig0845, var_core_value_sigDC8C) {
  return {
    ...(0, t.createBasesTableListBlockHostAdapterContribution)(var_core_value_sig2D1E, var_core_value_sig0845),
    activateAnchor: var_core_value_sigB296 => {
      Us(var_core_value_sigB296.hostUnitId, var_core_value_sigB296.hostAnchorId, var_core_value_sig0845, Gs(var_core_value_sigDC8C));
    }
  };
}
function Hs() {
  return {
    hostType: a.UniverInstanceType["UNIVER_BASE"],
    entry: "bases-table-list-block",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: var_core_value_sig7949 => {
      let var_core_value_sig2DD9 = Ks("data-embed-bases-table-list-host", var_core_value_sig7949.descriptor["hostAnchorId"]);
      return var_core_value_sig2DD9 ? {
        hostElement: var_core_value_sig2DD9
      } : {};
    }
  };
}
function Us(var_core_value_sig14E0, var_core_value_sig0F5D, var_core_value_sigD95C1, var_core_value_sigB2D61) {
  var var_core_value_sigA7ED;
  if (!var_core_value_sigB2D61) return;
  var_core_value_sigB2D61.activateTable(var_core_value_sig0F5D);
  let var_core_value_sigEDF2 = (var_core_value_sigA7ED = Ws(var_core_value_sigD95C1, var_core_value_sig14E0)) == null ? undefined : var_core_value_sigA7ED.tables[var_core_value_sig0F5D],
    var_core_value_sigEBEE1 = var_core_value_sigEDF2 == null ? undefined : var_core_value_sigEDF2.viewOrder["find"](var_core_value_sigCD501 => var_core_value_sigEDF2.views[var_core_value_sigCD501]);
  var_core_value_sigEBEE1 && var_core_value_sigB2D61.activateView(var_core_value_sigEBEE1), var_core_value_sigB2D61.setSelection(null), var_core_value_sigB2D61.closeRecordDetail();
}
function Ws(var_core_value_sigC48C, var_core_value_sig015F1) {
  var var_core_value_sig3010;
  return var_core_value_sigC48C == null || (var_core_value_sig3010 = var_core_value_sigC48C.getUnit(var_core_value_sig015F1, a.UniverInstanceType["UNIVER_BASE"])) == null ? undefined : var_core_value_sig3010.getSnapshot();
}
function Gs(var_core_value_sig97A5) {
  return typeof var_core_value_sig97A5 == "function" ? var_core_value_sig97A5() : var_core_value_sig97A5;
}
function Ks(var_core_value_sig8984, var_core_value_sig4C4B) {
  return document.querySelector("[" + var_core_value_sig8984 + "=\x22" + qs(var_core_value_sig4C4B) + "\x22]");
}
function qs(var_core_value_sig79D9) {
  return var_core_value_sig79D9.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function Js(var_core_value_sig492E) {
  let var_core_value_sig0EA6 = var_core_value_sig492E.has(_.IBaseUIStateService) ? var_core_value_sig492E.get(_.IBaseUIStateService) : undefined,
    var_core_value_sigFF0E = var_core_value_sig492E.has(_.IBaseViewWheelScrollService) ? var_core_value_sig492E.get(_.IBaseViewWheelScrollService) : undefined,
    var_core_value_sigCF7E = new Set();
  return {
    childType: a.UniverInstanceType["UNIVER_BASE"],
    getHorizontalScroll(var_core_value_sigD362) {
      var var_core_value_sigC433;
      let var_core_value_sigF543 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sigD362),
        var_core_value_sig0806 = var_core_value_sigF543 == null ? undefined : var_core_value_sigF543.getState();
      return var_core_value_sig0806 != null && var_core_value_sig0806.activeViewId ? ((var_core_value_sigC433 = var_core_value_sig0806.scrollState[var_core_value_sig0806.activeViewId]) == null ? undefined : var_core_value_sigC433.x) ?? 0 : 0;
    },
    getVerticalScroll(var_core_value_sigE224) {
      var var_core_value_sig773E;
      let var_core_value_sig83A7 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sigE224),
        var_core_value_sigFE18 = var_core_value_sig83A7 == null ? undefined : var_core_value_sig83A7.getState();
      return var_core_value_sigFE18 != null && var_core_value_sigFE18.activeViewId ? ((var_core_value_sig773E = var_core_value_sigFE18.scrollState[var_core_value_sigFE18.activeViewId]) == null ? undefined : var_core_value_sig773E.y) ?? 0 : 0;
    },
    getStickyLeftWidth: () => _.GRID_ROW_HEADER_WIDTH,
    getStickyHeaderHeight: () => _.GRID_HEADER_HEIGHT,
    getStickyFooterHeight: () => _.GRID_SUMMARY_HEIGHT,
    subscribeVerticalScroll(var_core_value_sig816B, var_core_value_sigA89B) {
      var var_core_value_sig5020;
      let var_core_value_sig8FB1 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sig816B);
      if (!var_core_value_sig8FB1) return;
      let var_core_value_sig3D4B = var_core_value_sig8FB1.getState(),
        var_core_value_sigCD77 = var_core_value_sig3D4B.activeViewId,
        var_core_value_sig9F28 = var_core_value_sigCD77 ? ((var_core_value_sig5020 = var_core_value_sig3D4B.scrollState[var_core_value_sigCD77]) == null ? undefined : var_core_value_sig5020.y) ?? 0 : 0,
        var_core_value_sig8A50 = var_core_value_sig8FB1.state$["subscribe"](var_core_value_sig4161 => {
          var var_core_value_sig7580;
          let var_core_value_sig1F18 = var_core_value_sig4161.activeViewId,
            var_core_value_sigD5A0 = var_core_value_sig1F18 ? ((var_core_value_sig7580 = var_core_value_sig4161.scrollState[var_core_value_sig1F18]) == null ? undefined : var_core_value_sig7580.y) ?? 0 : 0;
          if (var_core_value_sig1F18 !== var_core_value_sigCD77) {
            var_core_value_sigCD77 = var_core_value_sig1F18, var_core_value_sig9F28 = var_core_value_sigD5A0;
            return;
          }
          var_core_value_sigD5A0 !== var_core_value_sig9F28 && (var_core_value_sig9F28 = var_core_value_sigD5A0, !var_core_value_sigCF7E.has(var_core_value_sig816B.childUnitId) && var_core_value_sigA89B(var_core_value_sigD5A0));
        });
      return (0, a.toDisposable)(() => var_core_value_sig8A50.unsubscribe());
    },
    handleWheel(var_core_value_sig8AF9) {
      if (var_core_value_sig8AF9.source !== "host-scroll-sync" && var_core_value_sig8AF9.source !== "print-capture" && cr(var_core_value_sig8AF9.layout, var_core_value_sig8AF9.event)) return false;
      let var_core_value_sigCF441 = var_core_value_sig8AF9.runtimeScope["injector"] ?? var_core_value_sig492E,
        var_core_value_sig020B = var_core_value_sigCF441 !== var_core_value_sig492E && var_core_value_sigCF441.has(_.IBaseViewWheelScrollService) ? var_core_value_sigCF441.get(_.IBaseViewWheelScrollService) : var_core_value_sigFF0E,
        var_core_value_sig091A = var_core_value_sig8AF9.source === "print-capture";
      var_core_value_sig091A && var_core_value_sigCF7E.add(var_core_value_sig8AF9.childUnitId);
      try {
        if (var_core_value_sig8AF9.viewportScrollX != null) {
          let var_core_value_sig5410 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sig8AF9),
            var_core_value_sig492F = var_core_value_sig5410 == null ? undefined : var_core_value_sig5410.getState(),
            var_core_value_sig8EA0 = var_core_value_sig492F == null ? undefined : var_core_value_sig492F.activeViewId;
          if (var_core_value_sig5410 && var_core_value_sig492F && var_core_value_sig8EA0) {
            let var_core_value_sigFBA4 = var_core_value_sig492F.scrollState[var_core_value_sig8EA0] ?? {
              x: 0,
              y: 0
            };
            return var_core_value_sig5410.setScrollState(var_core_value_sig8EA0, {
              x: var_core_value_sig8AF9.viewportScrollX,
              y: var_core_value_sig8AF9.viewportScrollY ?? var_core_value_sigFBA4.y
            }), true;
          }
        }
        return (var_core_value_sig020B == null ? undefined : var_core_value_sig020B.handleRegisteredWheel(var_core_value_sig8AF9.childUnitId, Ys(var_core_value_sig8AF9.event, var_core_value_sig8AF9.viewportScrollY))) ?? false;
      } finally {
        var_core_value_sig091A && var_core_value_sigCF7E.delete(var_core_value_sig8AF9.childUnitId);
      }
    }
  };
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sigC45A) {
    var var_core_value_sig8A05;
    let var_core_value_sig431F = ((var_core_value_sig8A05 = var_core_value_sigC45A.runtimeScope) == null ? undefined : var_core_value_sig8A05.injector) ?? var_core_value_sig492E;
    return var_core_value_sig431F !== var_core_value_sig492E && var_core_value_sig431F.has(_.IBaseUIStateService) ? var_core_value_sig431F.get(_.IBaseUIStateService) : var_core_value_sig0EA6;
  }
}
function Ys(var_core_value_sig6A67, var_core_value_sig18F7) {
  return {
    deltaX: var_core_value_sig6A67.deltaX,
    deltaY: var_core_value_sig6A67.deltaY,
    deltaMode: var_core_value_sig6A67.deltaMode,
    clientX: var_core_value_sig6A67.clientX,
    clientY: var_core_value_sig6A67.clientY,
    shiftKey: var_core_value_sig6A67.shiftKey,
    viewportScrollY: var_core_value_sig18F7
  };
}
function Xs(var_core_value_sig8565, var_core_value_sig80D3, var_core_value_sig1D92) {
  let var_core_value_sig82BC = var_core_value_sig8565.descriptor["displayTarget"];
  return var_core_value_sig1D92(var_core_value_sig82BC), var_core_value_sig80D3.onCommandExecuted(var_core_value_sig855C => {
    if (!Zs(var_core_value_sig855C)) return;
    let {
      params: var_core_value_sig222E
    } = var_core_value_sig855C;
    if (var_core_value_sig222E.unitId !== var_core_value_sig8565.hostUnitId || var_core_value_sig222E.descriptor["embedId"] !== var_core_value_sig8565.embedId) return;
    let var_core_value_sig3A07 = var_core_value_sig222E.descriptor["displayTarget"];
    (0, a.deepCompare)(var_core_value_sig82BC ?? {}, var_core_value_sig3A07 ?? {}) || (var_core_value_sig82BC = var_core_value_sig3A07, var_core_value_sig1D92(var_core_value_sig3A07));
  });
}
function Zs(var_core_value_sig94A4) {
  return var_core_value_sig94A4.id === t.SetEmbedDescriptorMutation["id"] && var_core_value_sig94A4.params !== undefined && "unitId" in var_core_value_sig94A4.params && typeof var_core_value_sig94A4.params["unitId"] == "string" && "descriptor" in var_core_value_sig94A4.params && typeof var_core_value_sig94A4.params["descriptor"] == "object" && var_core_value_sig94A4.params["descriptor"] !== null && "embedId" in var_core_value_sig94A4.params["descriptor"] && typeof var_core_value_sig94A4.params["descriptor"].embedId == "string";
}
function Qs(var_core_value_sig7A87, var_core_value_sigE788) {
  return {
    childType: a.UniverInstanceType["UNIVER_BASE"],
    supportedLayouts: ["tab-peer", "docs-sticky-base", "scroll-contained"],
    beforeDeactivate: $s,
    mount: var_core_value_sigE7EB => ec(var_core_value_sigE7EB, var_core_value_sig7A87, var_core_value_sigE788)
  };
}
function $s(var_core_value_sig1632) {
  var var_core_value_sigC27E1;
  (var_core_value_sigC27E1 = var_core_value_sig1632.runtimeScope["commandService"]) == null || var_core_value_sigC27E1.syncExecuteCommand(_.StopBaseEditingCellOperation["id"], {
    commit: false
  });
}
function ec(var_core_value_sig1176, var_core_value_sig7788, var_core_value_sigD239) {
  let var_core_value_sig6ECD = var_core_value_sig1176.injector["get"](a.IUniverInstanceService).getUnit(var_core_value_sig1176.childUnitId, a.UniverInstanceType["UNIVER_BASE"]);
  if (!var_core_value_sig6ECD) return;
  let var_core_value_sigA0DF = new _["BaseUIStateService"](),
    var_core_value_sig6E07 = new _["BaseUIPopupService"](),
    var_core_value_sigDE9A = new _.BaseEditorService(var_core_value_sigA0DF),
    var_core_value_sigD183 = new _["BaseViewWheelScrollService"](),
    var_core_value_sig0B20 = cc(var_core_value_sig1176, var_core_value_sigA0DF, var_core_value_sig6E07, var_core_value_sigDE9A);
  if (!var_core_value_sig0B20) {
    var_core_value_sigD183.dispose(), var_core_value_sigDE9A.dispose(), var_core_value_sig6E07.dispose(), var_core_value_sigA0DF.dispose();
    return;
  }
  let var_core_value_sigADD2 = pc(var_core_value_sig1176),
    var_core_value_sig6D43 = var_core_value_sig0B20.get(_.IBaseDashboardUIExtensionRegistryService),
    var_core_value_sig6333 = () => {
      var var_core_value_sig6125;
      return new Set(((var_core_value_sig6125 = var_core_value_sig6D43.get()) == null ? undefined : var_core_value_sig6125.getItems(var_core_value_sig6ECD.getUnitId()).map(var_core_value_sig81B2 => var_core_value_sig81B2.id)) ?? []);
    };
  uc(var_core_value_sigA0DF, var_core_value_sig6ECD, var_core_value_sigADD2, var_core_value_sig1176.descriptor["displayTarget"], var_core_value_sig6333());
  let var_core_value_sig43B6 = Xs(var_core_value_sig1176, var_core_value_sig7788, var_core_value_sig5781 => fc(var_core_value_sigA0DF, var_core_value_sig6ECD, var_core_value_sig5781, var_core_value_sig6333())),
    var_core_value_sig9368 = mc(var_core_value_sig0B20, var_core_value_sigA0DF, var_core_value_sig6E07, var_core_value_sigDE9A, var_core_value_sigADD2, var_core_value_sigD183, var_core_value_sig1176.descriptor["mode"] === "readonly", var_core_value_sig1176.runtimeScope["roots"].popup);
  nc(var_core_value_sig1176, var_core_value_sig9368);
  let var_core_value_sigD4F7 = var_core_value_sigD239.register({
      unitId: var_core_value_sig1176.childUnitId,
      roots: tc(var_core_value_sig1176),
      clipboardService: var_core_value_sig9368.get(_.IBaseClipboardService),
      commandService: var_core_value_sig9368.get(a.ICommandService),
      editorService: var_core_value_sigDE9A,
      stateService: var_core_value_sigA0DF
    }),
    var_core_value_sigFFBF = var_core_value_sig1176.injector["get"](ba),
    var_core_value_sigF48B = "",
    var_core_value_sigA72A = var_core_value_sigA0DF.state$["subscribe"](var_core_value_sig13AB => {
      let var_core_value_sig7A4A = var_core_value_sig13AB.activeViewId ? [...(var_core_value_sig13AB.collapsedGroupPaths[var_core_value_sig13AB.activeViewId] ?? [])].sort().join("\x00") : "",
        var_core_value_sigB7E2 = (var_core_value_sig13AB.activeTableId ?? "") + "\x00" + (var_core_value_sig13AB.activeViewId ?? "") + "\x00" + var_core_value_sig7A4A;
      var_core_value_sigB7E2 !== var_core_value_sigF48B && (var_core_value_sigF48B = var_core_value_sigB7E2, var_core_value_sigFFBF.notifyContentSizeChanged(var_core_value_sig1176.hostUnitId, var_core_value_sig1176.embedId));
    }),
    var_core_value_sig87EC = rc(var_core_value_sig1176),
    var_core_value_sigE822 = nn(var_core_value_sig87EC),
    var_core_value_sigE04D = ic(var_core_value_sig1176, var_core_value_sig9368),
    var_core_value_sigAF7A = var_core_value_sig1176.injector["get"](a.IUniverInstanceService),
    var_core_value_sigA783 = var_core_value_sigAF7A.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_BASE"]);
  return var_core_value_sigAF7A.setCurrentUnitForType(var_core_value_sig1176.childUnitId), var_core_value_sig87EC.dataset["embedChildRenderUnitId"] = var_core_value_sig1176.childUnitId, var_core_value_sig87EC.dataset["embedChildRenderMode"] = "base-workbench", var_core_value_sigE822.render((0, m.jsx)(Kt, {
    injector: var_core_value_sig9368,
    mountContainer: var_core_value_sig1176.runtimeScope["roots"].popup,
    embedId: var_core_value_sig1176.embedId,
    children: (0, m.jsx)(_.RenderBaseWorkbench, {})
  })), (0, a.toDisposable)(() => {
    var_core_value_sigD4F7.dispose(), var_core_value_sig43B6.dispose(), var_core_value_sigA72A.unsubscribe(), var_core_value_sigE04D.dispose(), rn(var_core_value_sigE822), var_core_value_sigA783 && var_core_value_sigAF7A.setCurrentUnitForType(var_core_value_sigA783.getUnitId()), var_core_value_sigD183.dispose(), var_core_value_sigDE9A.dispose(), var_core_value_sig6E07.dispose(), var_core_value_sigA0DF.dispose(), var_core_value_sig9368.dispose(), var_core_value_sig87EC.isConnected && (var_core_value_sig87EC.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig87EC.removeAttribute("data-embed-child-render-mode"));
  });
}
function tc(var_core_value_sig00C9) {
  let var_core_value_sig01A4 = new Set();
  return var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].root), var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].content), var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].overlay), var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].popup), var_core_value_sig00C9.runtimeScope["roots"].canvas && var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].canvas), var_core_value_sig00C9.runtimeScope["roots"].menuSlot && var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].menuSlot), [...var_core_value_sig01A4];
}
function nc(var_core_value_sig8C95, var_core_value_sig8BED) {
  var_core_value_sig8C95.runtimeScope["injector"] = var_core_value_sig8BED, var_core_value_sig8C95.runtimeScope["instanceService"] = var_core_value_sig8BED.get(a.IUniverInstanceService), var_core_value_sig8C95.runtimeScope["commandService"] = var_core_value_sig8BED.get(a.ICommandService);
}
function rc(var_core_value_sigB415) {
  var var_core_value_sigD118, var_core_value_sigA840, var_core_value_sigA72C;
  return ((var_core_value_sigD118 = var_core_value_sigB415.runtimeScope) == null || (var_core_value_sigD118 = var_core_value_sigD118.roots) == null ? undefined : var_core_value_sigD118.content) ?? ((var_core_value_sigA840 = var_core_value_sigB415.renderScope) == null ? undefined : var_core_value_sigA840.contentRoot) ?? ((var_core_value_sigA72C = var_core_value_sigB415.renderScope) == null ? undefined : var_core_value_sigA72C.rootElement) ?? document;
}
function ic(var_core_value_sig230C, var_core_value_sig2515) {
  let var_core_value_sig01B91 = false,
    var_core_value_sigC9D6 = 0,
    var_core_value_sig11FD = (0, a.toDisposable)(() => {}),
    var_core_value_sigE7CD,
    var_core_value_sigBC1E = () => {
      if (var_core_value_sig01B91) return;
      let var_core_value_sigD477 = () => {
          var_core_value_sigC9D6 = window.requestAnimationFrame(var_core_value_sigBC1E);
        },
        var_core_value_sig6149 = ac(var_core_value_sig230C);
      if (!oc(var_core_value_sig6149)) {
        var_core_value_sig230C.container["dataset"].embedChildRenderStatus = "waiting-base-canvas-root", var_core_value_sigD477();
        return;
      }
      if (var_core_value_sigE7CD === var_core_value_sig6149 && var_core_value_sig6149.querySelector("canvas")) return;
      var_core_value_sig11FD.dispose();
      let var_core_value_sigEB82 = var_core_value_sig230C.injector["get"](p.IRenderManagerService),
        var_core_value_sig843F;
      try {
        var_core_value_sig843F = Et(var_core_value_sigEB82, var_core_value_sig230C.childUnitId, var_core_value_sig2515);
      } catch (var_core_value_sigA0A5) {
        var_core_value_sig230C.container["dataset"].embedChildRenderError = var_core_value_sigA0A5 instanceof Error ? var_core_value_sigA0A5.message : String(var_core_value_sigA0A5), var_core_value_sig843F = undefined;
      }
      if (!var_core_value_sig843F) {
        var_core_value_sig230C.container["dataset"].embedChildRenderStatus = "retrying-base-child-render", var_core_value_sigE7CD = undefined, var_core_value_sigD477();
        return;
      }
      delete var_core_value_sig230C.container["dataset"].embedChildRenderError, var_core_value_sig6149.dataset["embedChildRenderUnitId"] = var_core_value_sig230C.childUnitId, var_core_value_sig843F.engine["mount"](var_core_value_sig6149), Ot(var_core_value_sig843F, {
        activate: sc(var_core_value_sig230C)
      });
      let var_core_value_sig9FB7 = St(var_core_value_sig843F, var_core_value_sig6149, {
        activate: false
      });
      var_core_value_sig11FD = (0, a.toDisposable)(() => {
        var_core_value_sig9FB7.dispose();
        try {
          var var_core_value_sig10AA, var_core_value_sigE6D0;
          (var_core_value_sig10AA = (var_core_value_sigE6D0 = var_core_value_sig843F.engine).unmount) == null || var_core_value_sig10AA.call(var_core_value_sigE6D0);
        } catch {}
        var_core_value_sigEB82.removeRender(var_core_value_sig230C.childUnitId), var_core_value_sig6149.removeAttribute("data-embed-child-render-unit-id");
      }), var_core_value_sigE7CD = var_core_value_sig6149, var_core_value_sig230C.container["dataset"].embedChildRenderStatus = "mounted", var_core_value_sigD477();
    };
  return var_core_value_sigC9D6 = window.requestAnimationFrame(var_core_value_sigBC1E), (0, a.toDisposable)(() => {
    var_core_value_sig01B91 = true, window.cancelAnimationFrame(var_core_value_sigC9D6), var_core_value_sig11FD.dispose();
  });
}
function ac(var_core_value_sig6C0E) {
  return (0, _.getBaseCanvasRoot)({
    unitId: var_core_value_sig6C0E.childUnitId,
    scope: rc(var_core_value_sig6C0E)
  });
}
function oc(var_core_value_sig38F0) {
  return !!var_core_value_sig38F0 && var_core_value_sig38F0.isConnected && var_core_value_sig38F0.clientWidth > 0 && var_core_value_sig38F0.clientHeight > 0;
}
function sc(var_core_value_sigF56E) {
  return true;
}
function cc(var_core_value_sig0037, var_core_value_sigB5AB, var_core_value_sig435B, var_core_value_sig523B) {
  let var_core_value_sig49B8 = var_core_value_sig0037.injector["get"](a.IUniverInstanceService),
    var_core_value_sigEB75 = var_core_value_sig49B8.getUnit(var_core_value_sig0037.childUnitId, var_core_value_sig0037.childType);
  if (!var_core_value_sigEB75) return;
  let var_core_value_sig13B7 = lc(var_core_value_sig49B8, var_core_value_sig0037, var_core_value_sigEB75),
    var_core_value_sigAE27 = hc(var_core_value_sig0037.injector["get"](a.ICommandService), var_core_value_sigB5AB, var_core_value_sig435B, var_core_value_sig523B, var_core_value_sig0037.injector["get"](C.IBaseProjectionService), var_core_value_sig0037.injector["get"](a.IPermissionService), var_core_value_sig49B8, var_core_value_sig0037.childUnitId),
    var_core_value_sig00E2 = new Map([[a.IUniverInstanceService, var_core_value_sig13B7], [a.ICommandService, var_core_value_sigAE27], [_.IBaseCanvasRootResolverService, (0, _.createScopedBaseCanvasRootResolverService)(rc(var_core_value_sig0037))]]);
  return var_core_value_sig0037.injector["has"](a.IConfigService) && var_core_value_sig00E2.set(a.IConfigService, Re(var_core_value_sig0037.injector["get"](a.IConfigService))), $(var_core_value_sig0037.injector, var_core_value_sig00E2);
}
function lc(var_core_value_sig6012, var_core_value_sigB095, var_core_value_sig3943) {
  return {
    unitAdded$: var_core_value_sig6012.unitAdded$,
    unitDisposed$: var_core_value_sig6012.unitDisposed$,
    focused$: (0, f.of)(var_core_value_sig3943.getUnitId()),
    getTypeOfUnitAdded$: var_core_value_sig6012.getTypeOfUnitAdded$["bind"](var_core_value_sig6012),
    __addUnit: var_core_value_sig6012.__addUnit["bind"](var_core_value_sig6012),
    getTypeOfUnitDisposed$: var_core_value_sig6012.getTypeOfUnitDisposed$["bind"](var_core_value_sig6012),
    focusUnit: var_core_value_sigB7A4 => {
      var_core_value_sigB7A4 !== null && var_core_value_sigB7A4 !== var_core_value_sigB095.childUnitId && var_core_value_sig6012.focusUnit(var_core_value_sigB7A4);
    },
    getFocusedUnit: () => var_core_value_sig3943,
    getCurrentUnitOfType: var_core_value_sig295F => var_core_value_sig295F === var_core_value_sigB095.childType ? var_core_value_sig3943 : var_core_value_sig6012.getCurrentUnitOfType(var_core_value_sig295F),
    setCurrentUnitForType: var_core_value_sigE36B => {
      var_core_value_sigE36B !== var_core_value_sigB095.childUnitId && var_core_value_sig6012.setCurrentUnitForType(var_core_value_sigE36B);
    },
    getCurrentTypeOfUnit$: var_core_value_sigDA3B => var_core_value_sigDA3B === var_core_value_sigB095.childType ? (0, f.of)(var_core_value_sig3943) : var_core_value_sig6012.getCurrentTypeOfUnit$(var_core_value_sigDA3B),
    createUnit: var_core_value_sig6012.createUnit["bind"](var_core_value_sig6012),
    getUnitCreateOptions: var_core_value_sig6012.getUnitCreateOptions["bind"](var_core_value_sig6012),
    disposeUnit: var_core_value_sig6012.disposeUnit["bind"](var_core_value_sig6012),
    registerCtorForType: var_core_value_sig6012.registerCtorForType["bind"](var_core_value_sig6012),
    getUnit: var_core_value_sig6012.getUnit["bind"](var_core_value_sig6012),
    getAllUnitsForType: var_core_value_sig9E32 => var_core_value_sig9E32 === var_core_value_sigB095.childType ? [var_core_value_sig3943] : var_core_value_sig6012.getAllUnitsForType(var_core_value_sig9E32),
    getUnitType: var_core_value_sig6012.getUnitType["bind"](var_core_value_sig6012)
  };
}
function uc(var_core_value_sig859E, var_core_value_sigB844, var_core_value_sigF32B = "workbench", var_core_value_sigE916, var_core_value_sig9704) {
  let {
    dashboardId: var_core_value_sig9661,
    tableId: var_core_value_sig4D01,
    viewId: var_core_value_sig24CA
  } = dc(var_core_value_sigB844, var_core_value_sigE916, var_core_value_sig9704);
  var_core_value_sig4D01 && var_core_value_sig859E.activateTable(var_core_value_sig4D01), var_core_value_sig24CA && var_core_value_sig859E.activateView(var_core_value_sig24CA), var_core_value_sig9661 && var_core_value_sig859E.activateDashboard(var_core_value_sig9661), var_core_value_sig859E.setLeftSidebarVisible(var_core_value_sigF32B === "workbench");
}
function dc(var_core_value_sigA96A, var_core_value_sigBE54, var_core_value_sig9D54) {
  var var_core_value_sigE7A0, var_core_value_sig102F, var_core_value_sigFD11, var_core_value_sig1BC5, var_core_value_sig4031;
  let var_core_value_sig601B = var_core_value_sigA96A.getSnapshot(),
    var_core_value_sig10C9 = var_core_value_sigBE54 == null ? undefined : var_core_value_sigBE54.tableId,
    var_core_value_sigF759 = var_core_value_sig10C9 && (var_core_value_sigE7A0 = var_core_value_sig601B.tables) != null && var_core_value_sigE7A0[var_core_value_sig10C9] ? var_core_value_sig10C9 : ((var_core_value_sig102F = var_core_value_sig601B.tableOrder) == null ? undefined : var_core_value_sig102F.find(var_core_value_sig26EC1 => {
      var var_core_value_sigF226;
      return !!((var_core_value_sigF226 = var_core_value_sig601B.tables) != null && var_core_value_sigF226[var_core_value_sig26EC1]);
    })) ?? Object.keys(var_core_value_sig601B.tables ?? {})[0] ?? "",
    var_core_value_sigE996 = (var_core_value_sigFD11 = var_core_value_sig601B.tables) == null ? undefined : var_core_value_sigFD11[var_core_value_sigF759],
    var_core_value_sig31C5 = var_core_value_sigBE54 == null ? undefined : var_core_value_sigBE54.viewId,
    var_core_value_sig8D13 = var_core_value_sig31C5 && var_core_value_sigE996 != null && (var_core_value_sig1BC5 = var_core_value_sigE996.views) != null && var_core_value_sig1BC5[var_core_value_sig31C5] ? var_core_value_sig31C5 : var_core_value_sigE996 == null || (var_core_value_sig4031 = var_core_value_sigE996.viewOrder) == null ? undefined : var_core_value_sig4031.find(var_core_value_sig4773 => {
      var var_core_value_sigB643;
      return !!((var_core_value_sigB643 = var_core_value_sigE996.views) != null && var_core_value_sigB643[var_core_value_sig4773]);
    }),
    var_core_value_sig6228 = var_core_value_sigBE54 != null && var_core_value_sigBE54.dashboardId && var_core_value_sig9D54 != null && var_core_value_sig9D54.has(var_core_value_sigBE54.dashboardId) ? var_core_value_sigBE54.dashboardId : undefined;
  return {
    tableId: var_core_value_sigF759,
    ...(var_core_value_sig8D13 ? {
      viewId: var_core_value_sig8D13
    } : {}),
    ...(var_core_value_sig6228 ? {
      dashboardId: var_core_value_sig6228
    } : {})
  };
}
function fc(var_core_value_sig3CD3, var_core_value_sig6351, var_core_value_sig84A1, var_core_value_sig85BA) {
  let var_core_value_sig1373 = dc(var_core_value_sig6351, var_core_value_sig84A1, var_core_value_sig85BA),
    var_core_value_sigE09A = var_core_value_sig3CD3.getState();
  var_core_value_sig1373.tableId && (var_core_value_sigE09A.activeTableId !== var_core_value_sig1373.tableId || !var_core_value_sig1373.dashboardId && var_core_value_sigE09A.activeDashboardId) && var_core_value_sig3CD3.activateTable(var_core_value_sig1373.tableId), var_core_value_sig1373.viewId && var_core_value_sig3CD3.getState().activeViewId !== var_core_value_sig1373.viewId && var_core_value_sig3CD3.activateView(var_core_value_sig1373.viewId), var_core_value_sig1373.dashboardId && var_core_value_sig3CD3.getState().activeDashboardId !== var_core_value_sig1373.dashboardId && var_core_value_sig3CD3.activateDashboard(var_core_value_sig1373.dashboardId);
}
function pc(var_core_value_sigDD69) {
  return var_core_value_sigDD69.renderScope["fullscreen"] ? "fullscreen" : var_core_value_sigDD69.renderScope["mode"] === "float" ? "content-only" : "workbench";
}
function mc(var_core_value_sigF705, var_core_value_sig581D, var_core_value_sig5475 = new _.BaseUIPopupService(), var_core_value_sig0027 = new _.BaseEditorService(var_core_value_sig581D), var_core_value_sigC95E = "workbench", var_core_value_sig8C6B, var_core_value_sig0D7B = false, var_core_value_sigF568) {
  let var_core_value_sigE30B = yc(var_core_value_sigF705.get(a.IConfigService), var_core_value_sigC95E),
    var_core_value_sig89A0 = hc(var_core_value_sigF705.get(a.ICommandService), var_core_value_sig581D, var_core_value_sig5475, var_core_value_sig0027, var_core_value_sigF705.get(C.IBaseProjectionService), var_core_value_sigF705.get(a.IPermissionService), var_core_value_sigF705.get(a.IUniverInstanceService), undefined, var_core_value_sig0D7B),
    var_core_value_sigF5FE = new Map([[_.IBaseUIStateService, var_core_value_sig581D], [_.IBaseUIPopupService, var_core_value_sig5475], [_.IBaseEditorService, var_core_value_sig0027], [a.ICommandService, var_core_value_sig89A0], [a.IConfigService, var_core_value_sigE30B], [_.IBaseCanvasRootResolverService, var_core_value_sigF705.get(_.IBaseCanvasRootResolverService)], [_.IBaseGlobalPortalService, (0, _.createScopedBaseGlobalPortalService)(var_core_value_sigF568)]]);
  var_core_value_sig8C6B && var_core_value_sigF5FE.set(_.IBaseViewWheelScrollService, var_core_value_sig8C6B);
  let var_core_value_sig7144 = $(var_core_value_sigF705, var_core_value_sigF5FE);
  return var_core_value_sig7144.add([_.IBaseClipboardService, {
    useClass: _.BaseClipboardService
  }]), var_core_value_sig7144;
}
function hc(var_core_value_sig42BE, var_core_value_sigA9F2, var_core_value_sig6AD2, var_core_value_sigF86A, var_core_value_sigEE6A, var_core_value_sig2A37, var_core_value_sig652D, var_core_value_sigECEC, var_core_value_sig43EC = false) {
  let var_core_value_sig407E1 = {
    disposed: var_core_value_sig42BE.disposed["bind"](var_core_value_sig42BE),
    hasCommand: var_core_value_sig42BE.hasCommand["bind"](var_core_value_sig42BE),
    registerCommand: var_core_value_sig42BE.registerCommand["bind"](var_core_value_sig42BE),
    unregisterCommand: var_core_value_sig42BE.unregisterCommand["bind"](var_core_value_sig42BE),
    registerMultipleCommand: var_core_value_sig42BE.registerMultipleCommand["bind"](var_core_value_sig42BE),
    executeCommand: async (...var_core_value_sigF92F) => {
      if (var_core_value_sigF92F[0] === _.BaseKeyboardOperation["id"] && var_core_value_sig652D) return (0, _.executeBaseKeyboardOperation)({
        commandService: var_core_value_sig407E1,
        instanceService: var_core_value_sig652D,
        projectionService: var_core_value_sigEE6A,
        stateService: var_core_value_sigA9F2
      }, var_core_value_sigF92F[1]);
      let var_core_value_sig2346 = gc(var_core_value_sigF92F[0], var_core_value_sigF92F[1], var_core_value_sigA9F2, var_core_value_sig6AD2, var_core_value_sig652D, var_core_value_sigECEC);
      if (var_core_value_sig2346 !== undefined) return var_core_value_sig2346;
      let var_core_value_sig579A = _c(var_core_value_sigF92F[0], var_core_value_sigF92F[1], var_core_value_sigF86A, var_core_value_sig2A37, var_core_value_sig652D, var_core_value_sigECEC, var_core_value_sig43EC);
      if (var_core_value_sig579A !== undefined) return var_core_value_sig579A;
      let var_core_value_sig7E16 = var_core_value_sigECEC ? var_core_value_sig652D == null ? undefined : var_core_value_sig652D.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_BASE"]) : undefined;
      try {
        return var_core_value_sigECEC && (var_core_value_sig652D == null || var_core_value_sig652D.setCurrentUnitForType(var_core_value_sigECEC)), await var_core_value_sig42BE.executeCommand(var_core_value_sigF92F[0], var_core_value_sigF92F[1], var_core_value_sigF92F[2]);
      } finally {
        var_core_value_sig7E16 && (var_core_value_sig652D == null || var_core_value_sig652D.setCurrentUnitForType(var_core_value_sig7E16.getUnitId()));
      }
    },
    syncExecuteCommand: (...var_core_value_sigA691) => {
      if (var_core_value_sigA691[0] === _.BaseKeyboardOperation["id"] && var_core_value_sig652D) return (0, _.executeBaseKeyboardOperation)({
        commandService: var_core_value_sig407E1,
        instanceService: var_core_value_sig652D,
        projectionService: var_core_value_sigEE6A,
        stateService: var_core_value_sigA9F2
      }, var_core_value_sigA691[1]);
      let var_core_value_sig3C23 = gc(var_core_value_sigA691[0], var_core_value_sigA691[1], var_core_value_sigA9F2, var_core_value_sig6AD2, var_core_value_sig652D, var_core_value_sigECEC);
      if (var_core_value_sig3C23 !== undefined) return var_core_value_sig3C23;
      let var_core_value_sigDAE6 = _c(var_core_value_sigA691[0], var_core_value_sigA691[1], var_core_value_sigF86A, var_core_value_sig2A37, var_core_value_sig652D, var_core_value_sigECEC, var_core_value_sig43EC);
      if (var_core_value_sigDAE6 !== undefined) return var_core_value_sigDAE6;
      let var_core_value_sigDD81 = var_core_value_sigECEC ? var_core_value_sig652D == null ? undefined : var_core_value_sig652D.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_BASE"]) : undefined;
      try {
        return var_core_value_sigECEC && (var_core_value_sig652D == null || var_core_value_sig652D.setCurrentUnitForType(var_core_value_sigECEC)), var_core_value_sig42BE.syncExecuteCommand(var_core_value_sigA691[0], var_core_value_sigA691[1], var_core_value_sigA691[2]);
      } finally {
        var_core_value_sigDD81 && (var_core_value_sig652D == null || var_core_value_sig652D.setCurrentUnitForType(var_core_value_sigDD81.getUnitId()));
      }
    },
    onCommandExecuted: var_core_value_sig42BE.onCommandExecuted["bind"](var_core_value_sig42BE),
    beforeCommandExecuted: var_core_value_sig42BE.beforeCommandExecuted["bind"](var_core_value_sig42BE),
    onMutationExecutedForCollab: var_core_value_sig42BE.onMutationExecutedForCollab["bind"](var_core_value_sig42BE)
  };
  return var_core_value_sig407E1;
}
function gc(var_core_value_sig54ED, var_core_value_sig747C, var_core_value_sigA240, var_core_value_sigB5BE, var_core_value_sig3D9D, var_core_value_sigA487) {
  if (var_core_value_sig54ED === _.ActivateBaseViewOperation["id"]) {
    let var_core_value_sig3870 = var_core_value_sig747C;
    return var_core_value_sig3870 != null && var_core_value_sig3870.viewId ? (var_core_value_sig3870.tableId && var_core_value_sigA240.activateTable(var_core_value_sig3870.tableId), var_core_value_sigA240.activateView(var_core_value_sig3870.viewId), true) : false;
  }
  if (var_core_value_sig54ED === _.ActivateBaseTableOperation["id"]) {
    let var_core_value_sig13D1 = var_core_value_sig747C;
    if (!(var_core_value_sig13D1 != null && var_core_value_sig13D1.tableId)) return false;
    var_core_value_sigA240.activateTable(var_core_value_sig13D1.tableId);
    let var_core_value_sigECFC = var_core_value_sig13D1.unitId ? var_core_value_sig3D9D == null ? undefined : var_core_value_sig3D9D.getUnit(var_core_value_sig13D1.unitId, a.UniverInstanceType["UNIVER_BASE"]) : var_core_value_sig3D9D == null ? undefined : var_core_value_sig3D9D.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_BASE"]),
      var_core_value_sig5E62 = (var_core_value_sigECFC == null ? undefined : var_core_value_sigECFC.getUnitId()) ?? var_core_value_sigA487;
    var_core_value_sig5E62 && (var_core_value_sig3D9D == null || var_core_value_sig3D9D.setCurrentUnitForType(var_core_value_sig5E62), var_core_value_sig3D9D == null || var_core_value_sig3D9D.focusUnit(var_core_value_sig5E62));
    let var_core_value_sig3B89 = var_core_value_sigECFC == null ? undefined : var_core_value_sigECFC.getSnapshot().tables[var_core_value_sig13D1.tableId],
      var_core_value_sig4B55 = var_core_value_sig3B89 == null ? undefined : var_core_value_sig3B89.viewOrder["find"](var_core_value_sig8E91 => var_core_value_sig3B89.views[var_core_value_sig8E91]);
    return var_core_value_sig4B55 && var_core_value_sigA240.activateView(var_core_value_sig4B55), true;
  }
  if (var_core_value_sig54ED === _.SetBaseScrollOperation["id"]) {
    let var_core_value_sig9E69 = var_core_value_sig747C;
    return var_core_value_sig9E69 != null && var_core_value_sig9E69.viewId ? (var_core_value_sigA240.setScrollState(var_core_value_sig9E69.viewId, {
      x: var_core_value_sig9E69.x ?? 0,
      y: var_core_value_sig9E69.y ?? 0
    }), true) : false;
  }
  if (var_core_value_sig54ED === _.SetBaseZoomOperation["id"]) {
    let var_core_value_sig432A = var_core_value_sig747C;
    return !(var_core_value_sig432A != null && var_core_value_sig432A.viewId) || typeof var_core_value_sig432A.zoom != "number" ? false : (var_core_value_sigA240.setZoom(var_core_value_sig432A.viewId, var_core_value_sig432A.zoom), true);
  }
  if (var_core_value_sig54ED === _.OpenBasePanelOperation["id"]) return var_core_value_sig747C ? (var_core_value_sigA240.clearVirtualRecords(), var_core_value_sigB5BE.openToolbarPanel(var_core_value_sig747C), true) : false;
  if (var_core_value_sig54ED === _.CloseBasePanelOperation["id"]) return var_core_value_sigB5BE.closeToolbarPanel(), true;
  if (var_core_value_sig54ED === _.OpenBaseContextMenuOperation["id"]) return var_core_value_sig747C ? (var_core_value_sigA240.clearVirtualRecords(), var_core_value_sigB5BE.openContextMenu(var_core_value_sig747C), true) : false;
  if (var_core_value_sig54ED === _.CloseBaseContextMenuOperation["id"]) return var_core_value_sigB5BE.closeContextMenu(), true;
  if (var_core_value_sig54ED === _.OpenBaseActiveEditorOperation["id"]) return var_core_value_sig747C ? (var_core_value_sigB5BE.openActiveEditor(var_core_value_sig747C), true) : false;
  if (var_core_value_sig54ED === _.CloseBaseActiveEditorOperation["id"]) return var_core_value_sigB5BE.closeActiveEditor(), true;
  if (var_core_value_sig54ED === _.OpenBaseRecordDetailPanelOperation["id"]) {
    let var_core_value_sig3B51 = var_core_value_sig747C;
    return var_core_value_sig3B51 != null && var_core_value_sig3B51.recordId ? (var_core_value_sigA240.openRecordDetail(var_core_value_sig3B51.recordId), true) : false;
  }
  if (var_core_value_sig54ED === _.CloseBaseRecordDetailPanelOperation["id"]) return var_core_value_sigA240.closeRecordDetail(), true;
}
function _c(var_core_value_sig1A25, var_core_value_sigFC471, var_core_value_sig76F1, var_core_value_sig1F92, var_core_value_sig5332, var_core_value_sig56E7, var_core_value_sig7C1E = false) {
  if (var_core_value_sig1A25 === _.StartBaseEditingCellOperation["id"]) {
    var var_core_value_sigEFBD1;
    if (var_core_value_sig7C1E || !vc(var_core_value_sigFC471)) return false;
    let var_core_value_sig542D = var_core_value_sigFC471.unitId ?? var_core_value_sig56E7 ?? (var_core_value_sig5332 == null || (var_core_value_sigEFBD1 = var_core_value_sig5332.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_BASE"])) == null ? undefined : var_core_value_sigEFBD1.getUnitId());
    return !var_core_value_sig542D || !(0, C.canEditBaseTargets)(var_core_value_sig1F92, var_core_value_sig542D, [(0, C.getBaseTablePermissionObjectId)(var_core_value_sigFC471.tableId), (0, C.getBaseFieldPermissionObjectId)(var_core_value_sigFC471.tableId, var_core_value_sigFC471.fieldId), (0, C.getBaseRecordPermissionObjectId)(var_core_value_sigFC471.tableId, var_core_value_sigFC471.recordId), (0, C.getBaseViewPermissionObjectId)(var_core_value_sigFC471.tableId, var_core_value_sigFC471.viewId)]) ? false : (var_core_value_sig76F1.startEditingCell({
      tableId: var_core_value_sigFC471.tableId,
      viewId: var_core_value_sigFC471.viewId,
      recordId: var_core_value_sigFC471.recordId,
      fieldId: var_core_value_sigFC471.fieldId,
      initialQuery: var_core_value_sigFC471.initialQuery,
      autoFocus: var_core_value_sigFC471.autoFocus,
      virtual: var_core_value_sigFC471.virtual
    }), true);
  }
  if (var_core_value_sig1A25 === _.StopBaseEditingCellOperation["id"]) return var_core_value_sig76F1.stopEditingCell(), true;
}
function vc(var_core_value_sig55A8) {
  return typeof var_core_value_sig55A8 == "object" && !!var_core_value_sig55A8 && "tableId" in var_core_value_sig55A8 && typeof var_core_value_sig55A8.tableId == "string" && "viewId" in var_core_value_sig55A8 && typeof var_core_value_sig55A8.viewId == "string" && "recordId" in var_core_value_sig55A8 && typeof var_core_value_sig55A8.recordId == "string" && "fieldId" in var_core_value_sig55A8 && typeof var_core_value_sig55A8.fieldId == "string";
}
function yc(var_core_value_sig9A1C, var_core_value_sig4C23) {
  return {
    getConfig: var_core_value_sigB225 => {
      let var_core_value_sig8AAB = var_core_value_sig9A1C.getConfig(var_core_value_sigB225);
      return var_core_value_sigB225 === _.BASES_UI_PLUGIN_CONFIG_KEY ? bc(var_core_value_sig8AAB ?? {}, var_core_value_sig4C23) : var_core_value_sig8AAB;
    },
    setConfig: var_core_value_sig9A1C.setConfig["bind"](var_core_value_sig9A1C),
    deleteConfig: var_core_value_sig9A1C.deleteConfig["bind"](var_core_value_sig9A1C),
    subscribeConfigValue$: var_core_value_sig9A1C.subscribeConfigValue$["bind"](var_core_value_sig9A1C)
  };
}
function bc(var_core_value_sigD40E, var_core_value_sigB60A = "workbench") {
  let var_core_value_sig506E;
  return var_core_value_sig506E = var_core_value_sigB60A === "content-only" || var_core_value_sigB60A === "fullscreen" ? {
    header: false,
    headerMenu: false,
    leftSidebar: false,
    footer: false,
    global: true,
    presentation: true
  } : {
    header: true,
    headerMenu: true,
    presentation: false
  }, {
    ...var_core_value_sigD40E,
    workbench: {
      ...(var_core_value_sigD40E.workbench ?? {}),
      ...var_core_value_sig506E,
      route: false,
      fallbackToFirstUnit: true,
      collaborationStatus: false
    }
  };
}
function xc(var_core_value_sigB7A1) {
  var var_core_value_sig9897;
  if (var_core_value_sigB7A1.renderScope["fullscreen"] && var_core_value_sigB7A1.runtimeScope["roots"].menuSlot) return var_core_value_sigB7A1.runtimeScope["roots"].menuSlot;
  let var_core_value_sig834D = var_core_value_sigB7A1.runtimeScope["roots"].overlay ?? var_core_value_sigB7A1.renderScope["overlayRoot"] ?? var_core_value_sigB7A1.renderScope["rootElement"],
    var_core_value_sig20BC = ((var_core_value_sig9897 = var_core_value_sig834D.parentElement) == null ? undefined : var_core_value_sig9897.dataset["uComp"]) === "embed-float-dom-chrome" ? var_core_value_sig834D.parentElement : undefined;
  if (!var_core_value_sig20BC || !var_core_value_sigB7A1.embedId || !var_core_value_sig20BC.dataset["embedId"] || var_core_value_sig20BC.dataset["embedId"] === var_core_value_sigB7A1.embedId) return var_core_value_sig20BC ?? var_core_value_sig834D;
  let var_core_value_sig7CA2 = var_core_value_sigB7A1.renderScope["rootElement"].ownerDocument;
  return Array.from(var_core_value_sig7CA2.querySelectorAll('[data-u-comp="embed-float-dom-chrome"]')).find(var_core_value_sigE82A => var_core_value_sigE82A.dataset["embedId"] === var_core_value_sigB7A1.embedId) ?? var_core_value_sig834D;
}
function Sc(var_core_value_sigB74A) {
  let var_core_value_sig6BE6 = xc(var_core_value_sigB74A),
    var_core_value_sig28F3 = var_core_value_sigB74A.renderScope["rootElement"].ownerDocument["createElement"]("div");
  return var_core_value_sig28F3.dataset["embedFloatingMenuEntry"] = var_core_value_sigB74A.descriptor["entry"], var_core_value_sig28F3.className = "univer-pointer-events-none", var_core_value_sig28F3.addEventListener("pointerdown", Cc), var_core_value_sig28F3.addEventListener("mousedown", Cc), wc(var_core_value_sig28F3), var_core_value_sig6BE6.appendChild(var_core_value_sig28F3), {
    menu: var_core_value_sig28F3,
    menuRoot: var_core_value_sig6BE6,
    portalContainer: var_core_value_sigB74A.runtimeScope["roots"].popup
  };
}
function Cc(var_core_value_sig1383) {
  var_core_value_sig1383.stopPropagation();
}
function wc(var_core_value_sig6D11) {
  var_core_value_sig6D11.addEventListener("pointerup", var_core_value_sigB2CF => {
    let var_core_value_sig5955 = var_core_value_sigB2CF.button === 0 && var_core_value_sigB2CF.target instanceof Element ? var_core_value_sigB2CF.target["closest"]("button:not(:disabled)") : null;
    if (!var_core_value_sig5955) return;
    let var_core_value_sigF829 = false,
      var_core_value_sig2900 = () => {
        var_core_value_sigF829 = true;
      };
    var_core_value_sig5955.addEventListener("click", var_core_value_sig2900, {
      once: true
    }), globalThis.setTimeout(() => {
      var_core_value_sig5955.removeEventListener("click", var_core_value_sig2900), var_core_value_sigF829 || var_core_value_sig5955.click();
    }, 0);
  });
}
function Tc(var_core_value_sig3D05) {
  return [{
    hostType: a.UniverInstanceType["UNIVER_DOC"],
    entry: t.EmbedHostEntryEnum["DocsCustomBlock"],
    childType: var_core_value_sig3D05.childType,
    mount: var_core_value_sig3D05.mount
  }, {
    hostType: a.UniverInstanceType["UNIVER_SHEET"],
    entry: t.EmbedHostEntryEnum["SheetsFloatingObject"],
    childType: var_core_value_sig3D05.childType,
    mount: var_core_value_sig3D05.mount
  }, {
    hostType: a.UniverInstanceType["UNIVER_SLIDE"],
    entry: t.EmbedHostEntryEnum["SlidesFloatingObject"],
    childType: var_core_value_sig3D05.childType,
    mount: var_core_value_sig3D05.mount
  }, {
    hostType: a.UniverInstanceType["UNIVER_BOARD"],
    entry: t.EmbedHostEntryEnum["BoardsFloatingObject"],
    childType: var_core_value_sig3D05.childType,
    mount: var_core_value_sig3D05.mount
  }];
}
function Ec(var_core_value_sigBCEF) {
  let var_core_value_sig2FF9 = (0, c.useDependency)(a.IPermissionService);
  return (0, c.useObservable)(() => var_core_value_sig2FF9.permissionPointUpdate$["pipe"]((0, f.map)(() => (0, C.canEditBaseTargets)(var_core_value_sig2FF9, var_core_value_sigBCEF, []))), (0, C.canEditBaseTargets)(var_core_value_sig2FF9, var_core_value_sigBCEF, []), false, [var_core_value_sig2FF9, var_core_value_sigBCEF]);
}
function Dc(var_core_value_sigA52B) {
  let {
      embedId: var_core_value_sigFDCB1,
      childUnitId: var_core_value_sig3A62,
      base: var_core_value_sig57F7,
      activeTable: var_core_value_sig3487
    } = var_core_value_sigA52B,
    var_core_value_sig716B = Oc(var_core_value_sigFDCB1);
  return var_core_value_sig716B ? (0, w.createPortal)((0, m.jsx)(Ac, {
    childUnitId: var_core_value_sig3A62,
    base: var_core_value_sig57F7,
    activeTable: var_core_value_sig3487
  }), var_core_value_sig716B) : null;
}
function Oc(var_core_value_sigF7A5) {
  let [var_core_value_sigA401, var_core_value_sigB50B] = (0, d.useState)(() => kc(var_core_value_sigF7A5));
  return (0, d.useEffect)(() => {
    let var_core_value_sig51D8 = window.requestAnimationFrame(() => var_core_value_sigB50B(kc(var_core_value_sigF7A5)));
    return () => {
      window.cancelAnimationFrame(var_core_value_sig51D8);
    };
  }, [var_core_value_sigF7A5]), var_core_value_sigA401;
}
function kc(var_core_value_sig0025) {
  return Array.from(document.querySelectorAll("[data-embed-fullscreen-sidebar-slot=\x22true\x22]")).find(var_core_value_sig8693 => var_core_value_sig8693.dataset["embedId"] === var_core_value_sig0025) ?? null;
}
function Ac(var_core_value_sigF39A1) {
  var var_core_value_sig66DA, var_core_value_sig2485;
  let {
      childUnitId: var_core_value_sig2E9F,
      base: var_core_value_sig4CD0,
      activeTable: var_core_value_sigE479
    } = var_core_value_sigF39A1,
    var_core_value_sig62C4 = (0, c.useDependency)(a.ICommandService),
    var_core_value_sig578B = (0, c.useDependency)(a.IConfigService),
    var_core_value_sigDB0A = (0, c.useDependency)(a.LocaleService),
    var_core_value_sig367D = (0, c.useDependency)(_.IBaseUIStateService),
    var_core_value_sig4F1B = Ec(var_core_value_sig2E9F),
    var_core_value_sigDAA0 = (0, c.useObservable)(() => var_core_value_sig367D.state$, var_core_value_sig367D.getState(), false, [var_core_value_sig367D]),
    [var_core_value_sig5231, var_core_value_sig3BCB] = (0, d.useState)(null),
    [var_core_value_sigE0BE, var_core_value_sigEE27] = (0, d.useState)(null),
    [var_core_value_sig6198, var_core_value_sigD7E8] = (0, d.useState)(""),
    [var_core_value_sig317C, var_core_value_sig5DB3] = (0, d.useState)("configurations"),
    [var_core_value_sigF7F8, var_core_value_sigB293] = (0, d.useState)(null),
    var_core_value_sig89CA = (var_core_value_sig578B == null || (var_core_value_sig66DA = var_core_value_sig578B.getConfig(_.BASES_UI_PLUGIN_CONFIG_KEY)) == null ? undefined : var_core_value_sig66DA.workbench) ?? {},
    var_core_value_sigC136 = var_core_value_sigDAA0.layout["leftPanelWidth"] ?? var_core_value_sig89CA.leftPanelWidth ?? ((var_core_value_sig2485 = _.defaultPluginConfig["workbench"]) == null ? undefined : var_core_value_sig2485.leftPanelWidth) ?? _.BASE_LEFT_PANEL_DEFAULT_WIDTH,
    var_core_value_sig5F62 = var_core_value_sig4CD0.getSnapshot(),
    var_core_value_sig67A6 = Nc(var_core_value_sig5F62, var_core_value_sigE479.id, !var_core_value_sig4F1B),
    var_core_value_sig0656 = async var_core_value_sigAACD => {
      let var_core_value_sig895A = var_core_value_sig5F62.tables[var_core_value_sigAACD];
      if (!var_core_value_sig895A) return;
      let var_core_value_sigA764 = var_core_value_sig895A.viewOrder["find"](var_core_value_sig00BE => var_core_value_sig895A.views[var_core_value_sig00BE]);
      var_core_value_sig367D.activateTable(var_core_value_sig895A.id), var_core_value_sigA764 && var_core_value_sig367D.activateView(var_core_value_sigA764), var_core_value_sig367D.setSelection(null), var_core_value_sig367D.closeRecordDetail(), await var_core_value_sig62C4.executeCommand(_.ActivateBaseTableOperation["id"], {
        unitId: var_core_value_sig2E9F,
        tableId: var_core_value_sigAACD
      });
    },
    var_core_value_sigA073 = async () => {
      let var_core_value_sigC3D9 = (0, a.createDefaultBaseTableSnapshot)({
        id: "table-" + (0, a.generateRandomId)(8),
        name: Pc(var_core_value_sig4CD0.getSnapshot(), var_core_value_sig7BB5 => var_core_value_sigDB0A.t("embed-ui.basesFloating.tableSidebar.defaultTableName", String(var_core_value_sig7BB5))),
        primaryFieldId: "field-" + (0, a.generateRandomId)(8),
        gridViewId: "view-" + (0, a.generateRandomId)(8)
      });
      (await var_core_value_sig62C4.executeCommand(C.CreateBaseTableCommand["id"], {
        unitId: var_core_value_sig2E9F,
        table: var_core_value_sigC3D9
      })) && (var_core_value_sig367D.activateTable(var_core_value_sigC3D9.id), var_core_value_sig367D.activateView(var_core_value_sigC3D9.viewOrder[0]), var_core_value_sig367D.setSelection(null), var_core_value_sig367D.closeRecordDetail(), var_core_value_sigB293(var_core_value_sigC3D9.id));
    },
    var_core_value_sigA420 = async (var_core_value_sigA6C0, var_core_value_sigFF70, var_core_value_sigB469) => {
      let var_core_value_sig0276 = var_core_value_sig4CD0.getSnapshot(),
        var_core_value_sigFA20 = var_core_value_sig0276.tables[var_core_value_sigA6C0];
      if (!var_core_value_sigFA20) return;
      let var_core_value_sig2752 = (0, C.copyBaseTableSnapshot)(var_core_value_sigFA20, {
        id: "table-" + (0, a.generateRandomId)(8),
        name: var_core_value_sigFF70,
        includeRecords: var_core_value_sigB469 === "records",
        regenerateViewIds: true,
        createViewId: () => "view-" + (0, a.generateRandomId)(8)
      });
      (await var_core_value_sig62C4.executeCommand(C.CreateBaseTableCommand["id"], {
        unitId: var_core_value_sig2E9F,
        table: var_core_value_sig2752,
        index: var_core_value_sig0276.tableOrder["indexOf"](var_core_value_sigA6C0) + 1
      })) && (var_core_value_sig367D.activateTable(var_core_value_sig2752.id), var_core_value_sig367D.activateView(var_core_value_sig2752.viewOrder[0]), var_core_value_sig367D.setSelection(null), var_core_value_sig367D.closeRecordDetail());
    },
    var_core_value_sigD7D1 = async var_core_value_sig0E1A => {
      let var_core_value_sig6A48 = var_core_value_sig4CD0.getSnapshot(),
        var_core_value_sig2D2A = Nc(var_core_value_sig6A48, var_core_value_sigE479.id).map(var_core_value_sig6AAD => var_core_value_sig6AAD.id);
      if (var_core_value_sig2D2A.length <= 1) return;
      let var_core_value_sig1D22 = var_core_value_sig0E1A === var_core_value_sigE479.id ? var_core_value_sig2D2A.find(var_core_value_sig1157 => var_core_value_sig1157 !== var_core_value_sig0E1A) : null;
      if ((await var_core_value_sig62C4.executeCommand(C.DeleteBaseTableCommand["id"], {
        unitId: var_core_value_sig2E9F,
        tableId: var_core_value_sig0E1A
      })) && var_core_value_sig1D22) {
        let var_core_value_sigA694 = var_core_value_sig6A48.tables[var_core_value_sig1D22],
          var_core_value_sig18E01 = var_core_value_sigA694 == null ? undefined : var_core_value_sigA694.viewOrder["find"](var_core_value_sigA6F6 => var_core_value_sigA694.views[var_core_value_sigA6F6]);
        var_core_value_sig367D.activateTable(var_core_value_sig1D22), var_core_value_sig18E01 && var_core_value_sig367D.activateView(var_core_value_sig18E01), var_core_value_sig367D.setSelection(null), var_core_value_sig367D.closeRecordDetail();
      }
    };
  return (0, m.jsxs)(m.Fragment, {
    children: [(0, m.jsx)(_.BaseTableSidebarFrame, {
      title: var_core_value_sig5F62.name || "Base",
      items: var_core_value_sig67A6,
      width: var_core_value_sigC136,
      pendingRenameItemId: var_core_value_sigF7F8,
      onActivateItem: var_core_value_sig0656,
      onAddTable: var_core_value_sig4F1B ? async () => {
        await var_core_value_sigA073();
      } : undefined,
      onRenameTable: var_core_value_sig4F1B ? async (var_core_value_sig91FE, var_core_value_sig528C) => {
        await var_core_value_sig62C4.executeCommand(C.RenameBaseTableCommand["id"], {
          unitId: var_core_value_sig2E9F,
          tableId: var_core_value_sig91FE,
          name: var_core_value_sig528C
        });
      } : undefined,
      getTableNameError: (var_core_value_sig749D, var_core_value_sig1FB8) => (0, _.getBaseTableNameErrorMessage)(var_core_value_sigDB0A, (0, C.validateBaseTableName)(var_core_value_sig5F62, var_core_value_sig1FB8, var_core_value_sig749D)),
      onPendingRenameItemConsumed: var_core_value_sig032D => {
        var_core_value_sigF7F8 === var_core_value_sig032D && var_core_value_sigB293(null);
      },
      onDuplicateTable: var_core_value_sig4F1B ? var_core_value_sig27FA => {
        let var_core_value_sig533B = var_core_value_sig4CD0.getSnapshot(),
          var_core_value_sig6434 = var_core_value_sig533B.tables[var_core_value_sig27FA];
        var_core_value_sig6434 && (var_core_value_sigEE27(var_core_value_sig27FA), var_core_value_sigD7E8((0, C.createUniqueBaseTableName)(var_core_value_sig533B, var_core_value_sigDB0A.t("embed-ui.basesFloating.duplicateTable.copyName", var_core_value_sig6434.name))), var_core_value_sig5DB3("configurations"));
      } : undefined,
      onDeleteTable: var_core_value_sig4F1B ? var_core_value_sig3BCB : undefined,
      onResizeWidth: var_core_value_sig398A => var_core_value_sig367D.setLeftPanelWidth(var_core_value_sig398A)
    }), (0, m.jsx)(_.BaseDuplicateTableDialog, {
      open: !!var_core_value_sigE0BE,
      name: var_core_value_sig6198,
      nameError: (0, _.getBaseTableNameErrorMessage)(var_core_value_sigDB0A, (0, C.validateBaseTableName)(var_core_value_sig5F62, var_core_value_sig6198.trim())),
      mode: var_core_value_sig317C,
      onNameChange: var_core_value_sigD7E8,
      onModeChange: var_core_value_sig5DB3,
      onCancel: () => var_core_value_sigEE27(null),
      onConfirm: async () => {
        let var_core_value_sig1760 = var_core_value_sigE0BE,
          var_core_value_sig7C7A = var_core_value_sig6198.trim(),
          var_core_value_sig78E8 = var_core_value_sig317C;
        !var_core_value_sig1760 || !var_core_value_sig7C7A || (var_core_value_sigEE27(null), await var_core_value_sigA420(var_core_value_sig1760, var_core_value_sig7C7A, var_core_value_sig78E8));
      }
    }), (0, m.jsx)(_.BaseDeleteConfirmDialog, {
      open: !!var_core_value_sig5231,
      title: var_core_value_sigDB0A.t("embed-ui.basesFloating.confirmDelete.tableTitle"),
      description: var_core_value_sigDB0A.t("embed-ui.basesFloating.confirmDelete.tableDescription"),
      onCancel: () => var_core_value_sig3BCB(null),
      onConfirm: async () => {
        let var_core_value_sigF002 = var_core_value_sig5231;
        var_core_value_sig3BCB(null), var_core_value_sigF002 && (await var_core_value_sigD7D1(var_core_value_sigF002));
      }
    })]
  });
}
function jc(var_core_value_sigF9A0) {
  let {
      embedId: var_core_value_sigCAB0,
      activeView: var_core_value_sigE229,
      views: var_core_value_sigB9B4,
      addViewOpen: var_core_value_sigC1A2,
      onAddViewOpenChange: var_core_value_sigFE70,
      onActivateView: var_core_value_sigAEA6,
      onAddView: var_core_value_sig08B9,
      onSetViewAsFirst: var_core_value_sig13B0,
      onMoveView: var_core_value_sigC53D,
      onRenameView: var_core_value_sigC01B,
      onDuplicateView: var_core_value_sigBBD7,
      onConfigureView: var_core_value_sig1DD1,
      onDeleteView: var_core_value_sig0F751,
      readonly: var_core_value_sig4ABB
    } = var_core_value_sigF9A0,
    var_core_value_sigB1DB = (0, c.useDependency)(a.LocaleService);
  return (0, m.jsx)("div", {
    "data-u-comp": "base-embed-fullscreen-view-tabs",
    className: "univer-pointer-events-auto univer-box-border univer-min-w-0 univer-self-stretch univer-bg-gray-50 univer-pr-24 dark:!univer-bg-gray-900",
    children: (0, m.jsx)(_.ViewTabs, {
      readonly: var_core_value_sig4ABB,
      className: "univer-bg-gray-50 univer-px-0 dark:!univer-bg-gray-900",
      views: var_core_value_sigB9B4.map(var_core_value_sig715D => ({
        id: var_core_value_sig715D.id,
        name: var_core_value_sig715D.name,
        type: var_core_value_sig715D.type
      })),
      activeViewId: var_core_value_sigE229.id,
      onActivateView: var_core_value_sigAEA6,
      onSetViewAsFirst: var_core_value_sig13B0,
      onMoveView: var_core_value_sigC53D,
      onRenameView: var_core_value_sigC01B,
      onDuplicateView: var_core_value_sigBBD7,
      onConfigureView: var_core_value_sig1DD1,
      onDeleteView: var_core_value_sig0F751,
      onAddView: () => var_core_value_sigFE70(!var_core_value_sigC1A2),
      addViewDropdown: {
        open: var_core_value_sigC1A2,
        onOpenChange: var_core_value_sigFE70,
        overlay: (0, m.jsx)("div", {
          "data-u-comp": "base-embed-fullscreen-add-view-menu",
          "data-embed-id": var_core_value_sigCAB0,
          "data-embed-floating-menu-popup": "true",
          children: (0, m.jsx)(_.AddViewMenu, {
            views: _.BASE_VIEW_MENU_ITEMS["map"](var_core_value_sigEB90 => ({
              ...var_core_value_sigEB90,
              label: var_core_value_sigB1DB.t(var_core_value_sigEB90.label),
              description: var_core_value_sigB1DB.t(var_core_value_sigEB90.description)
            })),
            onCreate: var_core_value_sig08B9
          })
        })
      }
    })
  });
}
function Mc(var_core_value_sig08C7) {
  var var_core_value_sigA9B2;
  return (var_core_value_sig08C7 == null || (var_core_value_sigA9B2 = var_core_value_sig08C7.tableOrder) == null ? undefined : var_core_value_sigA9B2.map(var_core_value_sig9506 => var_core_value_sig08C7.tables[var_core_value_sig9506]).filter(var_core_value_sigC460 => !!var_core_value_sigC460)) ?? [];
}
function Nc(var_core_value_sigF5D3, var_core_value_sig8318, var_core_value_sig8900 = false) {
  return Mc(var_core_value_sigF5D3).map(var_core_value_sig00D0 => ({
    id: var_core_value_sig00D0.id,
    name: var_core_value_sig00D0.name,
    active: var_core_value_sig00D0.id === var_core_value_sig8318,
    readonly: var_core_value_sig8900
  }));
}
function Pc(var_core_value_sig799A, var_core_value_sig17D9) {
  let var_core_value_sig72E5 = new Set(Mc(var_core_value_sig799A).map(var_core_value_sig2880 => var_core_value_sig2880.name)),
    var_core_value_sigB979 = var_core_value_sig72E5.size + 1,
    var_core_value_sig1292 = var_core_value_sig17D9(var_core_value_sigB979);
  for (; var_core_value_sig72E5.has(var_core_value_sig1292);) var_core_value_sigB979 += 1, var_core_value_sig1292 = var_core_value_sig17D9(var_core_value_sigB979);
  return var_core_value_sig1292;
}
const Fc = "\n univer-pointer-events-auto univer-relative univer-isolate univer-flex univer-shrink-0\n univer-items-center univer-self-stretch univer-rounded-lg univer-border univer-border-solid\n univer-border-gray-200 univer-bg-transparent univer-p-1 univer-shadow-lg\n before:univer-pointer-events-none before:univer-absolute before:univer-inset-0\n before:univer-z-[-1] before:univer-rounded-lg before:univer-bg-gray-0 before:univer-opacity-90\n before:univer-content-[''] dark:!univer-border-gray-600 dark:before:!univer-bg-gray-900\n";
function Ic() {
  return Tc({
    childType: a.UniverInstanceType["UNIVER_BASE"],
    mount: Lc
  });
}
function Lc(var_core_value_sig088B) {
  let {
      menu: var_core_value_sig5221,
      menuRoot: var_core_value_sig5F66,
      portalContainer: var_core_value_sig52A9
    } = Sc(var_core_value_sig088B),
    var_core_value_sigD9C3 = nn(var_core_value_sig5221),
    var_core_value_sigBDC5 = var_core_value_sig088B.runtimeScope["injector"];
  return var_core_value_sigD9C3.render((0, d.createElement)(Kt, {
    injector: var_core_value_sigBDC5,
    mountContainer: var_core_value_sig52A9,
    embedId: var_core_value_sig088B.embedId
  }, (0, d.createElement)(Wc, {
    hostUnitId: var_core_value_sig088B.hostUnitId,
    embedId: var_core_value_sig088B.embedId,
    childUnitId: var_core_value_sig088B.childUnitId,
    entry: var_core_value_sig088B.descriptor["entry"],
    fullscreen: !!var_core_value_sig088B.renderScope["fullscreen"],
    floatingMenuPortalRoot: var_core_value_sig5F66,
    runtimeFocusRoot: var_core_value_sig088B.renderScope["rootElement"],
    usesDomFloatingStage: var_core_value_sig088B.descriptor["entry"] === "sheets-floating-object",
    renderScopeActive$: var_core_value_sig088B.renderScope["active$"]
  }))), (0, a.toDisposable)(() => {
    rn(var_core_value_sigD9C3), globalThis.setTimeout(() => var_core_value_sig5221.remove(), 0);
  });
}
function Rc(var_core_value_sigD032) {
  return sr({
    embedId: var_core_value_sigD032.embedId,
    active: zc(var_core_value_sigD032.activeEmbedId, var_core_value_sigD032.stage),
    fullscreen: var_core_value_sigD032.fullscreen,
    usesDomFloatingStage: var_core_value_sigD032.usesDomFloatingStage,
    renderScopeActive: var_core_value_sigD032.renderScopeActive
  });
}
function zc(var_core_value_sig7DB9, var_core_value_sigC490) {
  return var_core_value_sig7DB9 ? {
    hostUnitId: "",
    childUnitId: "",
    embedId: var_core_value_sig7DB9,
    stage: var_core_value_sigC490 === "stage2" || var_core_value_sigC490 === "stage1" ? "stage2" : "inactive"
  } : null;
}
function Bc(var_core_value_sigA98E) {
  return var_core_value_sigA98E;
}
function Vc(var_core_value_sigD375) {
  return var_core_value_sigD375;
}
function Hc(var_core_value_sigC1DB) {
  return !var_core_value_sigC1DB;
}
function Uc(var_core_value_sigAB71) {
  return {
    [q]: var_core_value_sigAB71,
    [G]: "floating-menu"
  };
}
function Wc(var_core_value_sig7ED5) {
  let {
      hostUnitId: var_core_value_sigA995,
      embedId: var_core_value_sig46DD,
      childUnitId: var_core_value_sigE470,
      entry: var_core_value_sig4C48,
      fullscreen: var_core_value_sigBAD0,
      floatingMenuPortalRoot: var_core_value_sig1AB1,
      runtimeFocusRoot: var_core_value_sig0906,
      usesDomFloatingStage: var_core_value_sig1B09,
      renderScopeActive$: var_core_value_sigFA2C
    } = var_core_value_sig7ED5,
    var_core_value_sig6C81 = (0, c.useDependency)(a.ICommandService),
    var_core_value_sig1DC4 = (0, c.useComponentsOfPart)(_.BASE_TOOLBAR_EXTRA_ACTIONS),
    var_core_value_sigB15A = (0, c.useDependency)(a.IUniverInstanceService),
    var_core_value_sigAEE01 = (0, c.useDependency)(a.LocaleService),
    var_core_value_sigE012 = (0, c.useDependency)(C.IBaseViewRegistryService),
    var_core_value_sig1EB7 = (0, c.useDependency)(a.IUndoRedoService),
    var_core_value_sigDADF = (0, c.useDependency)(_.IBaseUIStateService),
    var_core_value_sigB4CC = (0, c.useDependency)(_.IBaseUIPopupService),
    var_core_value_sig80E7 = (0, c.useDependency)(ce),
    var_core_value_sigA09B = (0, c.useObservable)(() => var_core_value_sigDADF.state$, var_core_value_sigDADF.getState(), false, [var_core_value_sigDADF]),
    var_core_value_sig0621 = (0, c.useObservable)(() => var_core_value_sig1EB7.undoRedoStatus$, {
      undos: 0,
      redos: 0
    }, false, [var_core_value_sig1EB7]),
    var_core_value_sig346A = (0, c.useObservable)(() => var_core_value_sigFA2C, false, false, [var_core_value_sigFA2C]),
    var_core_value_sigA9A5 = (0, c.useObservable)(() => var_core_value_sig80E7.active$, var_core_value_sig80E7.getActive(), false, [var_core_value_sig80E7]),
    var_core_value_sigB002 = (0, c.useObservable)(() => var_core_value_sigB4CC.toolbarPanel$, var_core_value_sigB4CC.getToolbarPanel(), false, [var_core_value_sigB4CC]),
    var_core_value_sig8E06 = var_core_value_sig80E7.getStage(var_core_value_sig46DD),
    [var_core_value_sigB200, var_core_value_sigC02C] = (0, d.useState)(0),
    [var_core_value_sig75B9, var_core_value_sig33AC] = (0, d.useState)(null),
    [var_core_value_sigB308, var_core_value_sigA7B0] = (0, d.useState)(false),
    [var_core_value_sigB532, var_core_value_sigD529] = (0, d.useState)(null),
    var_core_value_sig21F7 = (0, d.useRef)(var_core_value_sigB002),
    var_core_value_sig8074 = (0, d.useRef)(null),
    var_core_value_sigE695 = var_core_value_sigB15A.getUnit(var_core_value_sigE470, a.UniverInstanceType["UNIVER_BASE"]),
    var_core_value_sigC3C7 = Ec(var_core_value_sigE470),
    var_core_value_sigCF25 = var_core_value_sigE695 == null ? undefined : var_core_value_sigE695.getSnapshot(),
    var_core_value_sig33FD = Yc(var_core_value_sigCF25, var_core_value_sigA09B.activeTableId),
    var_core_value_sig0F30 = Xc(var_core_value_sig33FD),
    var_core_value_sigFA2B = Zc(var_core_value_sig33FD, var_core_value_sigA09B.activeViewId),
    var_core_value_sig2D95 = Rc({
      embedId: var_core_value_sig46DD,
      activeEmbedId: var_core_value_sigA9A5 == null ? undefined : var_core_value_sigA9A5.embedId,
      stage: var_core_value_sig8E06,
      fullscreen: var_core_value_sigBAD0,
      usesDomFloatingStage: var_core_value_sig1B09,
      renderScopeActive: var_core_value_sig346A
    }) === "stage2",
    [var_core_value_sig4B59, var_core_value_sigCE61] = (0, d.useState)(var_core_value_sig2D95),
    var_core_value_sig8A11 = Bc(var_core_value_sigBAD0),
    var_core_value_sig6205 = Vc(var_core_value_sigBAD0),
    var_core_value_sigFD56 = Hc(var_core_value_sigBAD0),
    var_core_value_sig979F = var_core_value_sig8A11 ? "univer-pointer-events-auto\x20univer-min-h-11\x20univer-w-full\x20univer-min-w-0\x20univer-max-w-none\x20univer-flex-1" : "univer-pointer-events-auto\x20univer-max-w-none\x20univer-flex-none\x20!univer-bg-transparent\x20dark:!univer-bg-transparent";
  if (var_core_value_sig4B59 !== var_core_value_sig2D95 && (var_core_value_sigCE61(var_core_value_sig2D95), var_core_value_sig2D95 || (var_core_value_sig33AC(null), var_core_value_sigA7B0(false), var_core_value_sigD529(null))), (0, d.useEffect)(() => {
    var_core_value_sig2D95 || (var_core_value_sigB4CC.closeToolbarPanel(), var_core_value_sigB4CC.closeContextMenu(), var_core_value_sigB4CC.closeActiveEditor());
  }, [var_core_value_sig2D95, var_core_value_sigB4CC]), (0, d.useEffect)(() => {
    var_core_value_sigC3C7 || (var_core_value_sigB4CC.closeToolbarPanel(), var_core_value_sigB4CC.closeContextMenu(), var_core_value_sigB4CC.closeActiveEditor());
  }, [var_core_value_sigC3C7, var_core_value_sigB4CC]), (0, d.useEffect)(() => {
    let var_core_value_sig76AC = var_core_value_sig21F7.current;
    if (var_core_value_sig21F7.current = var_core_value_sigB002, !var_core_value_sig76AC || var_core_value_sigB002 || !var_core_value_sig2D95) return;
    let var_core_value_sigEA39 = window.requestAnimationFrame(() => Yt(var_core_value_sig46DD, var_core_value_sig0906));
    return () => window.cancelAnimationFrame(var_core_value_sigEA39);
  }, [var_core_value_sig46DD, var_core_value_sig2D95, var_core_value_sig0906, var_core_value_sigB002]), (0, d.useEffect)(() => {
    if (!var_core_value_sig75B9) return;
    let var_core_value_sig252C = var_core_value_sig0428 => {
        var var_core_value_sigBE07;
        let var_core_value_sig555F = var_core_value_sig0428.target instanceof Node ? var_core_value_sig0428.target : null;
        var_core_value_sig555F && (var_core_value_sigBE07 = var_core_value_sig8074.current) != null && var_core_value_sigBE07.contains(var_core_value_sig555F) || var_core_value_sig33AC(null);
      },
      var_core_value_sig87EA = var_core_value_sig3D6F => {
        var_core_value_sig3D6F.key === "Escape" && var_core_value_sig33AC(null);
      };
    return document.addEventListener("pointerdown", var_core_value_sig252C, true), document.addEventListener("keydown", var_core_value_sig87EA, true), () => {
      document.removeEventListener("pointerdown", var_core_value_sig252C, true), document.removeEventListener("keydown", var_core_value_sig87EA, true);
    };
  }, [var_core_value_sig75B9]), !var_core_value_sigCF25 || !var_core_value_sigE695 || !var_core_value_sig33FD || !var_core_value_sigFA2B) return null;
  let var_core_value_sig42FE = () => {
      var_core_value_sig80E7.activate({
        hostUnitId: var_core_value_sigA995,
        embedId: var_core_value_sig46DD,
        childUnitId: var_core_value_sigE470
      }, "stage2");
    },
    var_core_value_sig3218 = async (var_core_value_sig4325, var_core_value_sigAB8D) => {
      var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(_.OpenBasePanelOperation["id"], {
        type: var_core_value_sig4325,
        anchor: $c(var_core_value_sigAB8D.getBoundingClientRect())
      });
    },
    var_core_value_sig52D9 = async var_core_value_sig4B861 => {
      var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(_.ActivateBaseViewOperation["id"], {
        tableId: var_core_value_sig33FD.id,
        unitId: var_core_value_sigE470,
        viewId: var_core_value_sig4B861
      }), var_core_value_sigC02C(var_core_value_sig336C => var_core_value_sig336C + 1);
    },
    var_core_value_sig7686 = async var_core_value_sig240E => {
      var_core_value_sig42FE();
      let var_core_value_sigDE46 = "view-" + (0, a.generateRandomId)(6),
        var_core_value_sigF30E = var_core_value_sigE012.get(var_core_value_sig240E).createDefaultConfig(var_core_value_sig33FD),
        var_core_value_sigA6B6 = await var_core_value_sig6C81.executeCommand(C.CreateBaseViewCommand["id"], {
          unitId: var_core_value_sigE470,
          tableId: var_core_value_sig33FD.id,
          view: {
            id: var_core_value_sigDE46,
            tableId: var_core_value_sig33FD.id,
            name: (0, _.createDefaultViewName)(var_core_value_sigAEE01, var_core_value_sig240E),
            type: var_core_value_sig240E,
            config: var_core_value_sigF30E,
            fieldOrder: [...var_core_value_sig33FD.fieldOrder],
            fieldSettings: {}
          }
        });
      var_core_value_sig33AC(null), var_core_value_sigA7B0(false), var_core_value_sigC02C(var_core_value_sig6E68 => var_core_value_sig6E68 + 1), var_core_value_sigA6B6 && (await var_core_value_sig52D9(var_core_value_sigDE46));
    },
    var_core_value_sigF375 = async var_core_value_sig1FDB => {
      var var_core_value_sig6B7D;
      let var_core_value_sig0D1B = (var_core_value_sig6B7D = var_core_value_sig0F30[0]) == null ? undefined : var_core_value_sig6B7D.id;
      !var_core_value_sig0D1B || var_core_value_sig0D1B === var_core_value_sig1FDB || (var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(C.MoveBaseViewCommand["id"], {
        unitId: var_core_value_sigE470,
        tableId: var_core_value_sig33FD.id,
        viewId: var_core_value_sig1FDB,
        target: {
          beforeViewId: var_core_value_sig0D1B
        }
      }), var_core_value_sigC02C(var_core_value_sig8DFE => var_core_value_sig8DFE + 1));
    },
    var_core_value_sig15CE = async (var_core_value_sigA5A1, var_core_value_sig0C3A) => {
      var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(C.MoveBaseViewCommand["id"], {
        unitId: var_core_value_sigE470,
        tableId: var_core_value_sig33FD.id,
        viewId: var_core_value_sigA5A1,
        target: var_core_value_sig0C3A
      }), var_core_value_sigC02C(var_core_value_sig48EA => var_core_value_sig48EA + 1);
    },
    var_core_value_sigCCAF = async (var_core_value_sig5A20, var_core_value_sig4037) => {
      var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(C.RenameBaseViewCommand["id"], {
        unitId: var_core_value_sigE470,
        tableId: var_core_value_sig33FD.id,
        viewId: var_core_value_sig5A20,
        name: var_core_value_sig4037
      }), var_core_value_sigC02C(var_core_value_sig5E16 => var_core_value_sig5E16 + 1);
    },
    var_core_value_sigA829 = async var_core_value_sig5F5F => {
      let var_core_value_sig801E = var_core_value_sig33FD.views[var_core_value_sig5F5F];
      if (!var_core_value_sig801E) return;
      var_core_value_sig42FE();
      let var_core_value_sigD8A7 = (0, _.duplicateView)(var_core_value_sig801E, var_core_value_sig33FD.id, var_core_value_sigAEE01.t("embed-ui.basesFloating.copySuffix")),
        var_core_value_sig7D2D = await var_core_value_sig6C81.executeCommand(C.CreateBaseViewCommand["id"], {
          unitId: var_core_value_sigE470,
          tableId: var_core_value_sig33FD.id,
          view: var_core_value_sigD8A7
        });
      var_core_value_sigC02C(var_core_value_sig09F3 => var_core_value_sig09F3 + 1), var_core_value_sig7D2D && (await var_core_value_sig52D9(var_core_value_sigD8A7.id));
    },
    var_core_value_sigBA45 = async () => {
      var var_core_value_sig5BC41;
      let var_core_value_sigE445 = var_core_value_sigB532 ?? var_core_value_sigFA2B.id;
      if (var_core_value_sig0F30.length <= 1) {
        var_core_value_sigD529(null);
        return;
      }
      let var_core_value_sig5C54 = (var_core_value_sig5BC41 = var_core_value_sig0F30.find(var_core_value_sig4592 => var_core_value_sig4592.id !== var_core_value_sigE445)) == null ? undefined : var_core_value_sig5BC41.id,
        var_core_value_sigD167 = await var_core_value_sig6C81.executeCommand(C.DeleteBaseViewCommand["id"], {
          unitId: var_core_value_sigE470,
          tableId: var_core_value_sig33FD.id,
          viewId: var_core_value_sigE445
        });
      var_core_value_sigD529(null), var_core_value_sigC02C(var_core_value_sigC5C4 => var_core_value_sigC5C4 + 1), var_core_value_sigD167 && var_core_value_sig5C54 && (await var_core_value_sig52D9(var_core_value_sig5C54));
    },
    var_core_value_sig6921 = async () => {
      await var_core_value_sig6C81.executeCommand(t.RemoveEmbedCommand["id"], {
        hostUnitId: var_core_value_sigA995,
        embedId: var_core_value_sig46DD
      });
    },
    var_core_value_sig0531 = var_core_value_sig2DA0 => {
      var_core_value_sig2DA0.stopPropagation();
    },
    var_core_value_sigEA2B = var_core_value_sig51DC => {
      var_core_value_sig51DC.preventDefault(), var_core_value_sig51DC.stopPropagation();
    };
  return (0, m.jsxs)(m.Fragment, {
    children: [(0, m.jsxs)("div", {
      className: (0, l.clsx)("univer-box-border univer-flex univer-items-center univer-justify-between univer-text-gray-900 dark:!univer-text-gray-0", {
        "univer-hidden": !var_core_value_sig2D95,
        "univer-static\x20univer-m-0\x20univer-min-h-[84px]\x20univer-w-full\x20univer-min-w-0\x20univer-max-w-none\x20univer-translate-x-0\x20univer-flex-col\x20univer-items-stretch\x20univer-justify-start\x20univer-gap-0\x20univer-rounded-none\x20univer-border-0\x20univer-bg-transparent\x20univer-px-0\x20univer-py-0\x20univer-shadow-none": var_core_value_sigBAD0,
        "univer-absolute\x20univer-inset-x-0\x20univer-z-[30]\x20univer-min-h-9\x20univer-min-w-0\x20univer-max-w-none\x20univer-translate-x-0\x20univer-gap-3\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-shadow-none": !var_core_value_sigBAD0,
        "-univer-top-12": !var_core_value_sigBAD0 && var_core_value_sig4C48 !== "docs-custom-block",
        "univer-w-full": !var_core_value_sigBAD0,
        "!univer-left-0\x20!univer-right-auto\x20-univer-top-12\x20!univer-w-full": !var_core_value_sigBAD0 && var_core_value_sig4C48 === "docs-custom-block"
      }),
      "data-u-comp": "base-embed-floating-menu",
      "data-embed-floating-menu": "true",
      "data-embed-id": var_core_value_sig46DD,
      "data-embed-float-stage": var_core_value_sig2D95 ? "stage2" : "inactive",
      "data-base-render-version": var_core_value_sigB200,
      ...Uc(var_core_value_sig46DD),
      onClick: var_core_value_sig0531,
      onDoubleClick: var_core_value_sig0531,
      onMouseDown: var_core_value_sigEA2B,
      onMouseUp: var_core_value_sig0531,
      onPointerDown: var_core_value_sigEA2B,
      onPointerUp: var_core_value_sig0531,
      children: [var_core_value_sig6205 ? (0, m.jsx)(jc, {
        embedId: var_core_value_sig46DD,
        activeView: var_core_value_sigFA2B,
        views: var_core_value_sig0F30,
        addViewOpen: var_core_value_sigB308,
        onAddViewOpenChange: var_core_value_sigA7B0,
        onActivateView: var_core_value_sig52D9,
        onAddView: var_core_value_sig7686,
        onSetViewAsFirst: var_core_value_sigF375,
        onMoveView: var_core_value_sig15CE,
        onRenameView: var_core_value_sigCCAF,
        onDuplicateView: var_core_value_sigA829,
        onConfigureView: var_core_value_sigEE01 => var_core_value_sig3218("viewSettings", var_core_value_sigEE01),
        onDeleteView: var_core_value_sigD529,
        readonly: !var_core_value_sigC3C7
      }) : (0, m.jsx)("div", {
        "data-u-comp": "base-embed-view-slot",
        className: Fc,
        children: (0, m.jsx)(Gc, {
          activeView: var_core_value_sigFA2B,
          views: var_core_value_sig0F30,
          onActivateView: var_core_value_sig52D9,
          embedId: var_core_value_sig46DD,
          portalRoot: var_core_value_sig1AB1,
          onAddView: var_core_value_sig80BD => {
            var_core_value_sig42FE(), var_core_value_sig33AC(var_core_value_sig80BD.getBoundingClientRect());
          },
          onConfigureView: var_core_value_sigF6A6 => var_core_value_sig3218("viewSettings", var_core_value_sigF6A6),
          onDeleteView: () => var_core_value_sigD529(var_core_value_sigFA2B.id)
        })
      }), (0, m.jsx)("div", {
        className: (0, l.clsx)("univer-flex univer-flex-1 univer-items-center univer-justify-end univer-gap-1", {
          "univer-min-w-0": var_core_value_sigBAD0,
          "univer-min-w-max": !var_core_value_sigBAD0
        }),
        children: (0, m.jsxs)("div", {
          "data-u-comp": "base-embed-actions-surface",
          className: (0, l.clsx)("univer-flex univer-min-w-0 univer-max-w-full univer-items-center univer-gap-1", {
            "univer-w-full\x20univer-flex-1": var_core_value_sigBAD0,
            [Fc]: !var_core_value_sigBAD0
          }),
          children: [(0, m.jsx)(_.BaseToolbar, {
            disabled: !var_core_value_sigC3C7,
            iconOnly: !var_core_value_sig8A11,
            className: var_core_value_sig979F,
            renderTooltip: (var_core_value_sigE59D, var_core_value_sig3D65) => (0, m.jsx)(da, {
              title: var_core_value_sigE59D,
              children: var_core_value_sig3D65
            }),
            state: {
              ...Jc(var_core_value_sigFA2B, var_core_value_sig0621),
              searchOpen: var_core_value_sigA09B.search["open"],
              searchQuery: var_core_value_sigA09B.search["query"],
              searchActiveIndex: var_core_value_sigA09B.search["activeIndex"]
            },
            onAddRecord: var_core_value_sig4D17 => var_core_value_sig4D17 && var_core_value_sig3218("addRecord", var_core_value_sig4D17),
            onCustomizeField: var_core_value_sigE1B9 => var_core_value_sig3218("customizeField", var_core_value_sigE1B9),
            onCustomizeKanban: var_core_value_sig21BB => var_core_value_sig3218("customizeKanban", var_core_value_sig21BB),
            onCustomizeGallery: var_core_value_sig64BA1 => var_core_value_sig3218("customizeGallery", var_core_value_sig64BA1),
            onCalendarEventSettings: var_core_value_sig975D => var_core_value_sig3218("calendarEventSettings", var_core_value_sig975D),
            onCalendarViewSettings: var_core_value_sig3C3D => var_core_value_sig3218("calendarViewSettings", var_core_value_sig3C3D),
            onViewSettings: var_core_value_sigD33D => var_core_value_sig3218("viewSettings", var_core_value_sigD33D),
            onFilter: var_core_value_sig71B9 => var_core_value_sig3218("filter", var_core_value_sig71B9),
            onGroup: var_core_value_sig248C => var_core_value_sig3218("group", var_core_value_sig248C),
            onSort: var_core_value_sig8DE6 => var_core_value_sig3218("sort", var_core_value_sig8DE6),
            onRowHeight: var_core_value_sig55C6 => var_core_value_sig3218("rowHeight", var_core_value_sig55C6),
            onConditionalColoring: var_core_value_sig2C60 => var_core_value_sig3218("conditionalColoring", var_core_value_sig2C60),
            onUndo: async () => var_core_value_sig6C81.executeCommand(a.UndoCommand["id"]),
            onRedo: async () => var_core_value_sig6C81.executeCommand(a.RedoCommand["id"]),
            onOpenSearch: () => var_core_value_sigDADF.openSearch(),
            onSearchQueryChange: var_core_value_sig2914 => var_core_value_sigDADF.setSearchQuery(var_core_value_sig2914),
            onSearchPrevious: () => var_core_value_sigDADF.setSearchActiveIndex(Math.max(0, (var_core_value_sigA09B.search["activeIndex"] ?? 0) - 1)),
            onSearchNext: () => var_core_value_sigDADF.setSearchActiveIndex((var_core_value_sigA09B.search["activeIndex"] ?? -1) + 1),
            onCloseSearch: () => var_core_value_sigDADF.closeSearch(),
            extraActions: (0, m.jsx)(c.ComponentContainer, {
              components: var_core_value_sig1DC4
            })
          }), var_core_value_sigFD56 ? (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)(l.Separator, {
              orientation: "vertical"
            }), (0, m.jsx)(fa, {
              hostUnitId: var_core_value_sigA995,
              embedId: var_core_value_sig46DD,
              variant: "menu"
            }), (0, m.jsx)(Qc, {
              title: var_core_value_sigAEE01.t("embed-ui.basesFloating.delete"),
              className: "univer-pointer-events-auto univer-text-red-500 hover:univer-text-red-600",
              onClick: var_core_value_sig6921,
              children: (0, m.jsx)(u.DeleteIcon, {})
            })]
          }) : null]
        })
      })]
    }), var_core_value_sig75B9 ? (0, w.createPortal)((0, m.jsx)("div", {
      ref: var_core_value_sig8074,
      "data-u-comp": "base-embed-add-view-menu",
      "data-embed-id": var_core_value_sig46DD,
      "data-embed-floating-menu-popup": "true",
      className: "univer-fixed univer-z-[900] univer-overflow-y-auto",
      style: el(var_core_value_sig75B9),
      onPointerDown: var_core_value_sig7FD9 => var_core_value_sig7FD9.stopPropagation(),
      children: (0, m.jsx)(_.AddViewMenu, {
        views: _.BASE_VIEW_MENU_ITEMS["map"](var_core_value_sig7A3D => ({
          ...var_core_value_sig7A3D,
          label: var_core_value_sigAEE01.t(var_core_value_sig7A3D.label),
          description: var_core_value_sigAEE01.t(var_core_value_sig7A3D.description)
        })),
        onCreate: var_core_value_sig7686
      })
    }), var_core_value_sig1AB1) : null, (0, m.jsx)(_.BaseDeleteConfirmDialog, {
      open: !!var_core_value_sigB532,
      title: var_core_value_sigAEE01.t("embed-ui.basesFloating.confirmDelete.viewTitle"),
      description: var_core_value_sigAEE01.t("embed-ui.basesFloating.confirmDelete.viewDescription"),
      onCancel: () => var_core_value_sigD529(null),
      onConfirm: var_core_value_sigBA45
    }), var_core_value_sigBAD0 ? (0, m.jsx)(Dc, {
      embedId: var_core_value_sig46DD,
      childUnitId: var_core_value_sigE470,
      base: var_core_value_sigE695,
      activeTable: var_core_value_sig33FD
    }) : null]
  });
}
function Gc(var_core_value_sigEFFB) {
  var var_core_value_sig6DE9;
  let {
      embedId: var_core_value_sig952E,
      portalRoot: var_core_value_sigB7D11,
      activeView: var_core_value_sig09F4,
      views: var_core_value_sigE447,
      onActivateView: var_core_value_sigDB28,
      onAddView: var_core_value_sig7042,
      onConfigureView: var_core_value_sig1EAF,
      onDeleteView: var_core_value_sig50C9
    } = var_core_value_sigEFFB,
    var_core_value_sig5CD2 = (0, c.useDependency)(a.LocaleService),
    var_core_value_sig6FD5 = (0, d.useRef)(null),
    var_core_value_sig414D = (0, d.useRef)(null),
    [var_core_value_sig4F86, var_core_value_sig51BE] = (0, d.useState)(false),
    var_core_value_sig4000 = var_core_value_sig7325 => {
      var_core_value_sig7325.preventDefault(), var_core_value_sig7325.stopPropagation();
    },
    var_core_value_sig5BB8 = ((var_core_value_sig6DE9 = var_core_value_sig6FD5.current) == null ? undefined : var_core_value_sig6DE9.getBoundingClientRect()) ?? null;
  (0, d.useEffect)(() => {
    if (!var_core_value_sig4F86) return;
    let var_core_value_sig4C4B1 = var_core_value_sig1617 => {
        var var_core_value_sig4169, var_core_value_sig6D19;
        let var_core_value_sig279C = var_core_value_sig1617.target instanceof Node ? var_core_value_sig1617.target : null;
        !var_core_value_sig279C || (var_core_value_sig4169 = var_core_value_sig6FD5.current) != null && var_core_value_sig4169.contains(var_core_value_sig279C) || (var_core_value_sig6D19 = var_core_value_sig414D.current) != null && var_core_value_sig6D19.contains(var_core_value_sig279C) || var_core_value_sig51BE(false);
      },
      var_core_value_sigB11B = var_core_value_sigAC51 => {
        var_core_value_sigAC51.key === "Escape" && var_core_value_sig51BE(false);
      };
    return document.addEventListener("pointerdown", var_core_value_sig4C4B1, true), document.addEventListener("keydown", var_core_value_sigB11B, true), () => {
      document.removeEventListener("pointerdown", var_core_value_sig4C4B1, true), document.removeEventListener("keydown", var_core_value_sigB11B, true);
    };
  }, [var_core_value_sig4F86]);
  let var_core_value_sigA343 = (0, m.jsxs)(l.Button, {
    ref: var_core_value_sig6FD5,
    type: "button",
    size: "small",
    variant: "ghost",
    className: "univer-h-8\x20univer-max-w-[220px]\x20univer-gap-2\x20univer-px-2\x20univer-text-sm\x20univer-font-medium",
    "aria-label": var_core_value_sig5CD2.t("embed-ui.basesFloating.viewSettings.title"),
    onClick: var_core_value_sig826D => {
      var_core_value_sig826D.stopPropagation(), var_core_value_sig51BE(var_core_value_sig8986 => !var_core_value_sig8986);
    },
    onMouseDown: var_core_value_sig4000,
    onPointerDown: var_core_value_sig4000,
    children: [(0, m.jsx)("span", {
      className: "univer-grid\x20univer-size-4\x20univer-shrink-0\x20univer-place-items-center",
      "aria-hidden": "true",
      children: (0, m.jsx)(_.BaseViewIcon, {
        type: var_core_value_sig09F4.type
      })
    }), (0, m.jsx)("span", {
      className: "univer-min-w-0 univer-truncate",
      children: var_core_value_sig09F4.name
    }), (0, m.jsx)(u.MoreDownIcon, {
      className: "univer-size-3 univer-shrink-0"
    })]
  });
  return (0, m.jsxs)(m.Fragment, {
    children: [(0, m.jsx)(da, {
      title: var_core_value_sig09F4.name,
      children: var_core_value_sigA343
    }), var_core_value_sig4F86 && var_core_value_sig5BB8 ? (0, w.createPortal)((0, m.jsxs)("div", {
      ref: var_core_value_sig414D,
      "data-u-comp": "base-embed-view-panel",
      "data-embed-id": var_core_value_sig952E,
      "data-embed-floating-menu-popup": "true",
      className: "univer-fixed\x20univer-z-[901]\x20univer-w-52\x20univer-overflow-y-auto\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-text-sm\x20univer-text-gray-900\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900\x20dark:!univer-text-gray-100",
      style: tl(var_core_value_sig5BB8),
      onClick: var_core_value_sig949F => var_core_value_sig949F.stopPropagation(),
      onMouseDown: var_core_value_sig4000,
      onPointerDown: var_core_value_sig4000,
      children: [(0, m.jsx)("div", {
        className: "univer-grid\x20univer-gap-0.5",
        children: var_core_value_sigE447.map(var_core_value_sig77E0 => (0, m.jsx)(l.Button, {
          type: "button",
          variant: "ghost",
          size: "small",
          className: "univer-h-8\x20univer-w-full\x20univer-px-2",
          onClick: var_core_value_sigCAF7 => {
            var_core_value_sigCAF7.stopPropagation(), var_core_value_sigDB28(var_core_value_sig77E0.id), var_core_value_sig51BE(false);
          },
          children: (0, m.jsx)(Kc, {
            icon: (0, m.jsx)(_.BaseViewIcon, {
              type: var_core_value_sig77E0.type
            }),
            label: var_core_value_sig77E0.name,
            trailing: var_core_value_sig77E0.id === var_core_value_sig09F4.id ? (0, m.jsx)("span", {
              className: "univer-size-1.5 univer-rounded-full univer-bg-primary-600"
            }) : null
          })
        }, var_core_value_sig77E0.id))
      }), (0, m.jsx)(l.Separator, {}), (0, m.jsx)(qc, {
        icon: (0, m.jsx)(u.IncreaseIcon, {}),
        label: var_core_value_sig5CD2.t("embed-ui.basesFloating.viewSettings.addView"),
        onClick: () => {
          let var_core_value_sigD177 = var_core_value_sig6FD5.current;
          var_core_value_sigD177 && var_core_value_sig7042(var_core_value_sigD177), var_core_value_sig51BE(false);
        }
      }), (0, m.jsx)(qc, {
        icon: (0, m.jsx)(u.PenIcon, {}),
        label: var_core_value_sig5CD2.t("embed-ui.basesFloating.viewSettings.configureView"),
        onClick: () => {
          let var_core_value_sig26E6 = var_core_value_sig6FD5.current;
          var_core_value_sig26E6 && var_core_value_sig1EAF(var_core_value_sig26E6), var_core_value_sig51BE(false);
        }
      }), (0, m.jsx)(qc, {
        danger: true,
        disabled: var_core_value_sigE447.length <= 1,
        icon: (0, m.jsx)(u.DeleteIcon, {}),
        label: var_core_value_sig5CD2.t("embed-ui.basesFloating.viewSettings.deleteView"),
        onClick: () => {
          var_core_value_sig50C9(), var_core_value_sig51BE(false);
        }
      })]
    }), var_core_value_sigB7D11) : null]
  });
}
function Kc(var_core_value_sigD28C) {
  let {
    icon: var_core_value_sig78E9,
    label: var_core_value_sigD86D,
    trailing: var_core_value_sigFE11
  } = var_core_value_sigD28C;
  return (0, m.jsxs)("span", {
    className: "univer-grid univer-w-full univer-grid-cols-[24px_minmax(0,1fr)_18px] univer-items-center univer-gap-3",
    children: [(0, m.jsx)("span", {
      className: "univer-grid univer-size-5 univer-place-items-center univer-text-current",
      "aria-hidden": "true",
      children: var_core_value_sig78E9
    }), (0, m.jsx)("span", {
      className: "univer-min-w-0 univer-truncate univer-text-left",
      children: var_core_value_sigD86D
    }), (0, m.jsx)("span", {
      className: "univer-grid univer-size-[18px] univer-place-items-center",
      children: var_core_value_sigFE11
    })]
  });
}
function qc(var_core_value_sig9722) {
  let {
    danger: var_core_value_sigD4C5,
    disabled: var_core_value_sigD049,
    icon: var_core_value_sigF1F8,
    label: var_core_value_sigF440,
    onClick: var_core_value_sigF594
  } = var_core_value_sig9722;
  return (0, m.jsx)(l.Button, {
    type: "button",
    variant: "ghost",
    size: "small",
    disabled: var_core_value_sigD049,
    className: (0, l.clsx)("univer-h-8 univer-w-full univer-px-2", var_core_value_sigD4C5 && "univer-text-red-600 hover:univer-bg-red-50 hover:univer-text-red-700"),
    onClick: var_core_value_sig43D5 => {
      var_core_value_sig43D5.stopPropagation(), var_core_value_sigF594();
    },
    children: (0, m.jsx)(Kc, {
      icon: var_core_value_sigF1F8,
      label: var_core_value_sigF440
    })
  });
}
function Jc(var_core_value_sig0464, var_core_value_sig249B = {}) {
  var var_core_value_sigF4F0, var_core_value_sig841F, var_core_value_sig4BD2;
  let var_core_value_sig1522 = var_core_value_sig0464.config ?? {},
    var_core_value_sig0388 = var_core_value_sig1522.conditionalColoring,
    var_core_value_sig47A4 = Array.isArray(var_core_value_sig0388 == null ? undefined : var_core_value_sig0388.rules) ? var_core_value_sig0388.rules["length"] : 0;
  return {
    viewType: var_core_value_sig0464.type,
    filterCount: ((var_core_value_sigF4F0 = var_core_value_sig0464.filter) == null || (var_core_value_sigF4F0 = var_core_value_sigF4F0.conditions) == null ? undefined : var_core_value_sigF4F0.length) ?? 0,
    groupCount: ((var_core_value_sig841F = var_core_value_sig0464.group) == null ? undefined : var_core_value_sig841F.length) ?? 0,
    sortCount: ((var_core_value_sig4BD2 = var_core_value_sig0464.sort) == null ? undefined : var_core_value_sig4BD2.length) ?? 0,
    rowHeightActive: !!(var_core_value_sig1522.rowHeight && var_core_value_sig1522.rowHeight !== "medium"),
    conditionalColoringActive: var_core_value_sig47A4 > 0,
    conditionalColoringCount: var_core_value_sig47A4,
    canUndo: (var_core_value_sig249B.undos ?? 0) > 0,
    canRedo: (var_core_value_sig249B.redos ?? 0) > 0
  };
}
function Yc(var_core_value_sigEC42, var_core_value_sigA3FB) {
  if (var_core_value_sigEC42) return (var_core_value_sigA3FB ? var_core_value_sigEC42.tables[var_core_value_sigA3FB] : undefined) ?? Mc(var_core_value_sigEC42)[0];
}
function Xc(var_core_value_sig067F) {
  var var_core_value_sig9551;
  return (var_core_value_sig067F == null || (var_core_value_sig9551 = var_core_value_sig067F.viewOrder) == null ? undefined : var_core_value_sig9551.map(var_core_value_sig132C => var_core_value_sig067F.views[var_core_value_sig132C]).filter(var_core_value_sig469E => !!var_core_value_sig469E)) ?? [];
}
function Zc(var_core_value_sig7F9A, var_core_value_sig3637) {
  if (var_core_value_sig7F9A) return (var_core_value_sig3637 ? var_core_value_sig7F9A.views[var_core_value_sig3637] : undefined) ?? Xc(var_core_value_sig7F9A)[0];
}
function Qc(var_core_value_sigC3BC) {
  let {
    children: var_core_value_sigABAF,
    title: var_core_value_sig4947,
    className: var_core_value_sig6F62,
    onClick: var_core_value_sig0430
  } = var_core_value_sigC3BC;
  return (0, m.jsx)(da, {
    title: var_core_value_sig4947,
    children: (0, m.jsx)(l.Button, {
      type: "button",
      size: "small",
      variant: "ghost",
      className: (0, l.clsx)("univer-size-6 univer-p-0", var_core_value_sig6F62),
      "aria-label": var_core_value_sig4947,
      onClick: var_core_value_sig3C91 => var_core_value_sig0430(var_core_value_sig3C91.currentTarget),
      children: var_core_value_sigABAF
    })
  });
}
function $c(var_core_value_sig200A) {
  return {
    x: var_core_value_sig200A.x,
    y: var_core_value_sig200A.y,
    width: var_core_value_sig200A.width,
    height: var_core_value_sig200A.height
  };
}
function el(var_core_value_sigD4F4) {
  let var_core_value_sig602D = (0, _.getBaseFloatingPosition)(var_core_value_sigD4F4, {
    width: 328,
    height: 360,
    gap: 6,
    margin: 8
  });
  return {
    top: var_core_value_sig602D.top,
    left: var_core_value_sig602D.left,
    maxHeight: var_core_value_sig602D.maxHeight
  };
}
function tl(var_core_value_sigEB0B) {
  let var_core_value_sigAE99 = (0, _.getBaseFloatingPosition)({
    left: var_core_value_sigEB0B.right - 208,
    right: var_core_value_sigEB0B.right,
    top: var_core_value_sigEB0B.top,
    bottom: var_core_value_sigEB0B.bottom,
    width: 208,
    height: var_core_value_sigEB0B.height
  }, {
    width: 208,
    height: 320,
    gap: 8,
    margin: 8
  });
  return {
    top: var_core_value_sigAE99.top,
    left: var_core_value_sigAE99.left,
    maxHeight: var_core_value_sigAE99.maxHeight
  };
}
function nl(var_core_value_sig186C) {
  bs(var_core_value_sig186C, "bases-ui.embed", rl);
}
function rl(var_core_value_sig6EF8) {
  var_core_value_sig6EF8.has(_.BaseEmbedRuntimeRegistryService) || var_core_value_sig6EF8.add([_.BaseEmbedRuntimeRegistryService]), var_core_value_sig6EF8.has(_.IBaseHostChromeOverrideService) || var_core_value_sig6EF8.add([_.IBaseHostChromeOverrideService, {
    useFactory: () => var_core_value_sig6EF8.get(U)
  }]), var_core_value_sig6EF8.has(_.IBaseEmbedFloatingActiveService) || var_core_value_sig6EF8.add([_.IBaseEmbedFloatingActiveService, {
    useFactory: () => var_core_value_sig6EF8.get(ce)
  }]), var_core_value_sig6EF8.has(_.IBaseEmbedFloatingGeometryService) || var_core_value_sig6EF8.add([_.IBaseEmbedFloatingGeometryService, {
    useFactory: () => var_core_value_sig6EF8.get(Wr)
  }]), var_core_value_sig6EF8.has(_.IBaseEmbedRuntimeFocusCoordinator) || var_core_value_sig6EF8.add([_.IBaseEmbedRuntimeFocusCoordinator, {
    useFactory: () => var_core_value_sig6EF8.get(K)
  }]), var_core_value_sig6EF8.has(_.IBaseEmbedRuntimeService) || var_core_value_sig6EF8.add([_.IBaseEmbedRuntimeService, {
    useFactory: () => al({
      embedModelService: var_core_value_sig6EF8.get(t.EmbedModelService),
      restoreService: var_core_value_sig6EF8.get(Gr),
      mountService: var_core_value_sig6EF8.get(Ht),
      activationService: var_core_value_sig6EF8.get(Gt)
    })
  }]);
  let var_core_value_sig0753 = var_core_value_sig6EF8.get(t.EmbedHostAdapterRegistryService),
    var_core_value_sigA1DE = var_core_value_sig6EF8.get(vt),
    var_core_value_sigD0F7 = var_core_value_sig6EF8.get(gt),
    var_core_value_sig5615 = var_core_value_sig6EF8.get(H),
    var_core_value_sig2320 = var_core_value_sig6EF8.get(_t),
    var_core_value_sig2AE5 = var_core_value_sig6EF8.get(Ur),
    var_core_value_sigC29D = var_core_value_sig6EF8.get(ii),
    var_core_value_sig2996 = Vs(var_core_value_sig6EF8.has(t.EmbedHostAnchorModelService) ? var_core_value_sig6EF8.get(t.EmbedHostAnchorModelService) : undefined, var_core_value_sig6EF8.has(a.IUniverInstanceService) ? var_core_value_sig6EF8.get(a.IUniverInstanceService) : undefined, () => var_core_value_sig6EF8.has(_.IBaseUIStateService) ? var_core_value_sig6EF8.get(_.IBaseUIStateService) : undefined);
  var_core_value_sig0753.get(var_core_value_sig2996.hostType, var_core_value_sig2996.entry) || var_core_value_sig0753.register(var_core_value_sig2996);
  let var_core_value_sigFA69 = Hs();
  var_core_value_sigA1DE.get(var_core_value_sigFA69.hostType, var_core_value_sigFA69.entry) || var_core_value_sigA1DE.register(var_core_value_sigFA69);
  let var_core_value_sigC292 = Qs(var_core_value_sig6EF8.get(a.ICommandService), var_core_value_sig6EF8.get(_.BaseEmbedRuntimeRegistryService));
  var_core_value_sigD0F7.get(var_core_value_sigC292.childType) || var_core_value_sigD0F7.register(var_core_value_sigC292);
  let var_core_value_sig771F1 = As();
  var_core_value_sig5615.get(var_core_value_sig771F1.childType) || var_core_value_sig5615.register(var_core_value_sig771F1), Ic().forEach(var_core_value_sig5A6B => {
    var_core_value_sig2320.hasExact(var_core_value_sig5A6B.hostType, var_core_value_sig5A6B.entry, var_core_value_sig5A6B.childType) || var_core_value_sig2320.register(var_core_value_sig5A6B);
  }), var_core_value_sig2AE5.registerProvider(wa(var_core_value_sig6EF8, {
    childType: a.UniverInstanceType["UNIVER_BASE"],
    renderManagerService: p.IRenderManagerService
  })), il(var_core_value_sig6EF8), var_core_value_sigC29D.get(a.UniverInstanceType["UNIVER_BASE"]) || var_core_value_sigC29D.register(Js(var_core_value_sig6EF8));
}
function il(var_core_value_sigCABE) {
  let var_core_value_sigC1A0 = var_core_value_sigCABE.get(ba);
  var_core_value_sigC1A0.get(a.UniverInstanceType["UNIVER_BASE"]) || !var_core_value_sigCABE.has(_.IBaseUIStateService) || !var_core_value_sigCABE.has(C.IBaseProjectionService) || !var_core_value_sigCABE.has(_.IBaseViewWheelScrollService) || var_core_value_sigC1A0.register(var_core_value_sigCABE.createInstance(js));
}
function al(var_core_value_sig6D59) {
  return {
    mountTableList: async var_core_value_sigD8F01 => {
      let var_core_value_sig534A = var_core_value_sig6D59.embedModelService["getDescriptor"](var_core_value_sigD8F01.baseUnitId, var_core_value_sigD8F01.embedId);
      if (!var_core_value_sig534A && var_core_value_sigD8F01.childUnitId && (var_core_value_sig534A = {
        embedId: var_core_value_sigD8F01.embedId,
        hostUnitId: var_core_value_sigD8F01.baseUnitId,
        hostType: a.UniverInstanceType["UNIVER_BASE"],
        entry: "bases-table-list-block",
        hostAnchorId: var_core_value_sigD8F01.hostAnchorId,
        childUnitId: var_core_value_sigD8F01.childUnitId,
        childType: var_core_value_sigD8F01.childType,
        source: {
          unitType: var_core_value_sigD8F01.childType,
          ref: {
            file: {
              kind: t.RESOURCE_REF_FILE_KIND["SELF"]
            },
            unit: {
              selector: var_core_value_sigD8F01.childUnitId,
              type: (0, t.toResourceRefUnitType)(var_core_value_sigD8F01.childType)
            }
          }
        },
        sourceMeta: {
          floating: false,
          tab: {
            enabled: true,
            container: "table-list",
            replaceHostMenu: true,
            hideHostFxBar: true,
            lockHostRibbon: true
          }
        }
      }), !(!var_core_value_sig534A || var_core_value_sig534A.hostAnchorId !== var_core_value_sigD8F01.hostAnchorId) && ((!var_core_value_sig534A.childUnitId || var_core_value_sig534A.childType == null) && (var_core_value_sig534A = await var_core_value_sig6D59.restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sig534A
      })), !(!var_core_value_sig534A.childUnitId || var_core_value_sig534A.childType == null))) return var_core_value_sig6D59.mountService["mount"](var_core_value_sig534A), var_core_value_sig6D59.activationService["activateTab"](var_core_value_sig534A), (0, a.toDisposable)(() => {
        var_core_value_sig6D59.activationService["clearTab"](var_core_value_sigD8F01.embedId), var_core_value_sig6D59.mountService["unmount"](var_core_value_sigD8F01.embedId);
      });
    }
  };
}
let ol = class extends a.Disposable {
  constructor(var_core_value_sigB1E6, var_core_value_sig02FE, var_core_value_sigD80D, var_core_value_sig572B, var_core_value_sigB8EA, var_core_value_sig1494, var_core_value_sigB5E9, var_core_value_sig0862) {
    if (super(), this._context = var_core_value_sigB1E6, this._embedModelService = var_core_value_sig02FE, this._domLayerService = var_core_value_sigD80D, this._boardElementService = var_core_value_sig572B, this._boardElementStateService = var_core_value_sigB8EA, this._boardUIStateService = var_core_value_sig1494, this._configService = var_core_value_sigB5E9, this._commandService = var_core_value_sig0862, V(this, "_items", new Map()), V(this, "_activeDragCleanup", undefined), V(this, "_routeWheelToHost", var_core_value_sigED1C => {
      var var_core_value_sig726E, var_core_value_sig2CD3;
      let var_core_value_sig038E = (var_core_value_sig726E = (var_core_value_sig2CD3 = this._context["engine"]).getCanvasElement) == null ? undefined : var_core_value_sig726E.call(var_core_value_sig2CD3);
      return var_core_value_sig038E ? (var_core_value_sig038E.dispatchEvent(new WheelEvent("wheel", {
        bubbles: true,
        cancelable: true,
        clientX: var_core_value_sigED1C.clientX,
        clientY: var_core_value_sigED1C.clientY,
        ctrlKey: var_core_value_sigED1C.ctrlKey,
        deltaMode: var_core_value_sigED1C.deltaMode,
        deltaX: var_core_value_sigED1C.deltaX,
        deltaY: var_core_value_sigED1C.deltaY,
        deltaZ: var_core_value_sigED1C.deltaZ,
        metaKey: var_core_value_sigED1C.metaKey,
        shiftKey: var_core_value_sigED1C.shiftKey
      })), true) : false;
    }), V(this, "_resolveHostWheelGestureRoot", var_core_value_sigAA1E => {
      var var_core_value_sigC9F5, var_core_value_sig7EEA;
      let var_core_value_sig59CE1 = (var_core_value_sigC9F5 = (var_core_value_sig7EEA = this._context["engine"]).getCanvasElement) == null ? undefined : var_core_value_sigC9F5.call(var_core_value_sig7EEA);
      if (!var_core_value_sig59CE1) return null;
      let var_core_value_sig33C81 = var_core_value_sigAA1E;
      for (; var_core_value_sig33C81 && !var_core_value_sig33C81.contains(var_core_value_sig59CE1);) var_core_value_sig33C81 = var_core_value_sig33C81.parentElement;
      return var_core_value_sig33C81;
    }), Promise.resolve().then(() => this._sync()), typeof document < "u") {
      let var_core_value_sig957F = var_core_value_sigCDDA => this._handleDragStart(var_core_value_sigCDDA);
      document.addEventListener(zi, var_core_value_sig957F), this.disposeWithMe((0, a.toDisposable)(() => document.removeEventListener(zi, var_core_value_sig957F)));
    }
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig803B => {
      (var_core_value_sig803B.id === t.CreateEmbedCommand["id"] || var_core_value_sig803B.id === t.RemoveEmbedCommand["id"] || var_core_value_sig803B.id === t.SetEmbedDescriptorMutation["id"] || var_core_value_sig803B.id === t.SoftDeleteEmbedDescriptorMutation["id"]) && this._sync();
    })), [this._boardElementService["elementAdd$"], this._boardElementService["elementUpdate$"], this._boardElementService["elementRemove$"]].forEach(var_core_value_sig5830 => {
      let var_core_value_sig4A7C = var_core_value_sig5830.subscribe(var_core_value_sigE2431 => {
        var_core_value_sigE2431.some(var_core_value_sig4383 => var_core_value_sig4383.unitId === this._context["unitId"]) && this._sync();
      });
      this.disposeWithMe((0, a.toDisposable)(() => var_core_value_sig4A7C.unsubscribe()));
    });
  }
  dispose() {
    var var_core_value_sig9099;
    (var_core_value_sig9099 = this._activeDragCleanup) == null || var_core_value_sig9099.call(this), this._activeDragCleanup = undefined, this._items["forEach"](var_core_value_sigF975 => var_core_value_sigF975.dispose()), this._items["clear"](), super.dispose();
  }
  _sync() {
    let var_core_value_sigC317 = this._context["unitId"];
    if (this._embedModelService["getActiveDescriptorsByChildUnit"](var_core_value_sigC317).length > 0) {
      this._clearItems();
      return;
    }
    let var_core_value_sig2746 = this._boardElementService["getElementDataForUnit"](var_core_value_sigC317),
      var_core_value_sig71B8 = new Set();
    this._embedModelService["getActiveDescriptors"](var_core_value_sigC317).filter(var_core_value_sigCDAF => var_core_value_sigCDAF.entry === t.EmbedHostEntryEnum["BoardsFloatingObject"]).forEach(var_core_value_sigA298 => {
      let var_core_value_sig0B40 = Object.values(var_core_value_sig2746).find(var_core_value_sig74A8 => {
          var var_core_value_sig21B2;
          return (0, x.isEmbedBoardsFloatingElement)((var_core_value_sig21B2 = var_core_value_sig74A8.data[var_core_value_sigA298.hostAnchorId]) == null ? undefined : var_core_value_sig21B2.element);
        }),
        var_core_value_sig330B = var_core_value_sig0B40 == null ? undefined : var_core_value_sig0B40.data[var_core_value_sigA298.hostAnchorId],
        var_core_value_sig3625 = var_core_value_sig330B == null ? undefined : var_core_value_sig330B.element;
      if (!var_core_value_sig0B40 || !var_core_value_sig330B || !(0, x.isEmbedBoardsFloatingElement)(var_core_value_sig3625)) return;
      let var_core_value_sig0B4E = (0, x.getEmbedBoardsFloatingCustomData)(var_core_value_sig3625),
        var_core_value_sig0E9F = this._itemId(var_core_value_sigA298.hostAnchorId);
      var_core_value_sig71B8.add(var_core_value_sig0E9F);
      let var_core_value_sigE5BA = {
          left: var_core_value_sig3625.transform["left"] ?? 0,
          top: var_core_value_sig3625.transform["top"] ?? 0,
          width: var_core_value_sig3625.transform["width"] ?? 560,
          height: var_core_value_sig3625.transform["height"] ?? 360
        },
        var_core_value_sig4A83 = () => (0, d.createElement)(_a, {
          data: {
            version: 1,
            embedId: var_core_value_sigA298.embedId,
            hostUnitId: var_core_value_sigC317,
            hostAnchorId: var_core_value_sigA298.hostAnchorId,
            childUnitId: var_core_value_sigA298.childUnitId ?? (var_core_value_sig0B4E == null ? undefined : var_core_value_sig0B4E.childUnitId),
            childType: var_core_value_sigA298.childType ?? (var_core_value_sig0B4E == null ? undefined : var_core_value_sig0B4E.childType)
          },
          enableStage1BodyDrag: true,
          hostFloatDomLayout$: this._boardUIStateService["state$"],
          onHostWheel: this._routeWheelToHost,
          resolveHostWheelGestureRoot: this._resolveHostWheelGestureRoot,
          onRuntimeStageEnter: var_core_value_sig186C1 => this._setAnchorTransformerVisible(var_core_value_sig186C1 !== "stage2", var_core_value_sig330B.subUnitId, var_core_value_sigA298.hostAnchorId)
        });
      this._items["has"](var_core_value_sig0E9F) ? this._domLayerService["updateItem"](var_core_value_sig0E9F, {
        rect: var_core_value_sigE5BA,
        content: var_core_value_sig4A83
      }) : this._items["set"](var_core_value_sig0E9F, this._domLayerService["registerItem"]({
        id: var_core_value_sig0E9F,
        unitId: var_core_value_sigC317,
        subUnitId: var_core_value_sig330B.subUnitId,
        elementId: var_core_value_sigA298.hostAnchorId,
        rect: var_core_value_sigE5BA,
        content: var_core_value_sig4A83,
        interactive: true,
        showResizeGuide: true
      }));
    }), this._items["forEach"]((var_core_value_sig58AA, var_core_value_sig84C4) => {
      var_core_value_sig71B8.has(var_core_value_sig84C4) || (var_core_value_sig58AA.dispose(), this._items["delete"](var_core_value_sig84C4));
    });
  }
  _itemId(var_core_value_sigFD40) {
    return "board-embed:" + this._context["unitId"] + ":" + var_core_value_sigFD40;
  }
  _selectAnchor(var_core_value_sig152B, var_core_value_sig0334) {
    this._boardElementStateService["selectElements"]({
      unitId: this._context["unitId"],
      subUnitId: var_core_value_sig152B
    }, [var_core_value_sig0334], var_core_value_sig0334);
  }
  _setAnchorTransformerVisible(var_core_value_sigE424, var_core_value_sigCDE2, var_core_value_sigD2B0) {
    if (var_core_value_sigE424) {
      this._selectAnchor(var_core_value_sigCDE2, var_core_value_sigD2B0);
      return;
    }
    this._boardElementStateService["clearSelection"]();
  }
  _handleDragStart(var_core_value_sig4E8D) {
    var var_core_value_sig9675, var_core_value_sig24B6, var_core_value_sig283C, var_core_value_sig062F;
    let var_core_value_sig96C7 = var_core_value_sig4E8D.detail;
    if (!var_core_value_sig96C7 || var_core_value_sig96C7.hostUnitId !== this._context["unitId"]) return;
    let var_core_value_sig8D50 = this._boardElementService["getElementDataForUnit"](this._context["unitId"]),
      var_core_value_sigB5EA = Object.values(var_core_value_sig8D50).find(var_core_value_sigB6F7 => var_core_value_sigB6F7.data[var_core_value_sig96C7.hostAnchorId]),
      var_core_value_sigE952 = var_core_value_sigB5EA == null ? undefined : var_core_value_sigB5EA.data[var_core_value_sig96C7.hostAnchorId];
    if (!var_core_value_sigB5EA || !var_core_value_sigE952 || !(0, x.isEmbedBoardsFloatingElement)(var_core_value_sigE952.element) || ((var_core_value_sig9675 = (0, x.getEmbedBoardsFloatingCustomData)(var_core_value_sigE952.element)) == null ? undefined : var_core_value_sig9675.embedId) !== var_core_value_sig96C7.embedId) return;
    let var_core_value_sigE241 = (var_core_value_sig24B6 = (var_core_value_sig283C = this._context["engine"]).getCanvasElement) == null ? undefined : var_core_value_sig24B6.call(var_core_value_sig283C);
    if (!var_core_value_sigE241) return;
    (var_core_value_sig062F = this._activeDragCleanup) == null || var_core_value_sig062F.call(this), this._selectAnchor(var_core_value_sigE952.subUnitId, var_core_value_sig96C7.hostAnchorId), this._setAnchorTransformerVisible(false, var_core_value_sigE952.subUnitId, var_core_value_sig96C7.hostAnchorId);
    let var_core_value_sig9C99 = var_core_value_sigE952.element,
      var_core_value_sigD135 = var_core_value_sig9C99.transform["left"] ?? 0,
      var_core_value_sig0891 = var_core_value_sig9C99.transform["top"] ?? 0,
      var_core_value_sigF788 = this._boardUIStateService["getState"](),
      var_core_value_sigE094 = (0, T.resolveBoardInteractionConfig)(this._configService["getConfig"](T.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? undefined),
      var_core_value_sig0BC4 = (0, T.getBoardPointFromClient)(var_core_value_sigE241, var_core_value_sig96C7.clientX, var_core_value_sig96C7.clientY, {
        zoomRatio: var_core_value_sigF788.zoomRatio,
        panOffset: var_core_value_sigF788.viewportPanOffset
      }, var_core_value_sigE094),
      var_core_value_sig8F20 = document.defaultView ?? window,
      var_core_value_sigB8CA = (var_core_value_sigB495, var_core_value_sig70D0) => {
        let var_core_value_sig2A8A = this._boardUIStateService["getState"](),
          var_core_value_sig3782 = (0, T.getBoardPointFromClient)(var_core_value_sigE241, var_core_value_sigB495, var_core_value_sig70D0, {
            zoomRatio: var_core_value_sig2A8A.zoomRatio,
            panOffset: var_core_value_sig2A8A.viewportPanOffset
          }, var_core_value_sigE094);
        return {
          left: var_core_value_sigD135 + var_core_value_sig3782.x - var_core_value_sig0BC4.x,
          top: var_core_value_sig0891 + var_core_value_sig3782.y - var_core_value_sig0BC4.y
        };
      },
      var_core_value_sig4663 = (var_core_value_sigD22E, var_core_value_sig3455) => {
        let var_core_value_sig5CEF = var_core_value_sigB8CA(var_core_value_sigD22E, var_core_value_sig3455);
        return this._domLayerService["updateItem"](this._itemId(var_core_value_sig96C7.hostAnchorId), {
          rect: {
            ...var_core_value_sig5CEF,
            width: var_core_value_sig9C99.transform["width"] ?? 560,
            height: var_core_value_sig9C99.transform["height"] ?? 360
          }
        }), var_core_value_sig5CEF;
      },
      var_core_value_sig5970 = var_core_value_sig43D51 => var_core_value_sig96C7.pointerId == null || var_core_value_sig43D51.pointerId === var_core_value_sig96C7.pointerId,
      var_core_value_sig7D63 = () => {},
      var_core_value_sig7713 = var_core_value_sig1395 => {
        var_core_value_sig5970(var_core_value_sig1395) && (var_core_value_sig1395.preventDefault(), var_core_value_sig4663(var_core_value_sig1395.clientX, var_core_value_sig1395.clientY));
      },
      var_core_value_sigD598 = async var_core_value_sig9FA0 => {
        if (!var_core_value_sig5970(var_core_value_sig9FA0)) return;
        var_core_value_sig7D63(), var_core_value_sig9FA0.preventDefault();
        let var_core_value_sig055E = var_core_value_sig4663(var_core_value_sig9FA0.clientX, var_core_value_sig9FA0.clientY);
        await this._commandService["executeCommand"](x.UpdateBoardElementMutation["id"], {
          unitId: this._context["unitId"],
          subUnitId: var_core_value_sigE952.subUnitId,
          elementId: var_core_value_sig96C7.hostAnchorId,
          element: var_core_value_sig9C99,
          transform: {
            ...var_core_value_sigE952.transform,
            ...var_core_value_sig055E
          }
        }).finally(() => {
          this._sync(), this._setAnchorTransformerVisible(true, var_core_value_sigE952.subUnitId, var_core_value_sig96C7.hostAnchorId);
        });
      },
      var_core_value_sig61E6 = var_core_value_sig7C77 => {
        var_core_value_sig5970(var_core_value_sig7C77) && (var_core_value_sig7D63(), this._sync(), this._setAnchorTransformerVisible(true, var_core_value_sigE952.subUnitId, var_core_value_sig96C7.hostAnchorId));
      };
    var_core_value_sig7D63 = () => {
      var_core_value_sig8F20.removeEventListener("pointermove", var_core_value_sig7713), var_core_value_sig8F20.removeEventListener("pointerup", var_core_value_sigD598), var_core_value_sig8F20.removeEventListener("pointercancel", var_core_value_sig61E6), this._activeDragCleanup === var_core_value_sig7D63 && (this._activeDragCleanup = undefined);
    }, var_core_value_sig8F20.addEventListener("pointermove", var_core_value_sig7713), var_core_value_sig8F20.addEventListener("pointerup", var_core_value_sigD598), var_core_value_sig8F20.addEventListener("pointercancel", var_core_value_sig61E6), this._activeDragCleanup = var_core_value_sig7D63;
  }
  _clearItems() {
    this._items["forEach"](var_core_value_sig9578 => var_core_value_sig9578.dispose()), this._items["clear"]();
  }
};
ol = Z([X(1, (0, a.Inject)(t.EmbedModelService)), X(2, (0, a.Inject)(T.BoardDomLayerService)), X(3, (0, a.Inject)(x.IBoardElementService)), X(4, (0, a.Inject)(T.IBoardElementStateService)), X(5, (0, a.Inject)(T.IBoardUIStateService)), X(6, a.IConfigService), X(7, a.ICommandService)], ol);
function sl() {
  return {
    ...Es({
      childType: a.UniverInstanceType["UNIVER_BOARD"],
      productName: "Boards",
      hostChromeMode: "none"
    }),
    presentationPolicy: {
      getChromeCss: () => '\n [data-embed-presentation-runtime="true"] [data-board-left-toolbar="true"],\n [data-embed-presentation-runtime="true"] [data-board-top-right-menu="true"],\n [data-embed-presentation-runtime="true"] [data-board-zoom-controls="true"],\n [data-embed-presentation-runtime="true"] [data-board-help-control="true"],\n [data-embed-presentation-runtime="true"] [data-board-object-list-panel="true"],\n [data-embed-presentation-runtime="true"] [data-board-shape-panel="true"],\n [data-embed-presentation-runtime="true"] [data-board-floating-panel-layer="true"],\n [data-embed-presentation-runtime="true"] [data-u-comp="shape-text-editor-position-wrapper"],\n [data-embed-presentation-runtime="true"] [data-u-comp="shape-floating-toolbar"],\n [data-embed-presentation-runtime="true"] [data-u-comp="editor-ui-floating-container"] {\n display: none !important;\n }\n '
    }
  };
}
function cl() {
  return {
    hostType: a.UniverInstanceType["UNIVER_BOARD"],
    entry: t.EmbedHostEntryEnum["BoardsFloatingObject"],
    layout: "scroll-contained",
    supportedLayouts: ["scroll-contained", "doc-width-scale", "aspect-fit"],
    menuBehavior: "floating"
  };
}
function ll() {
  return {
    childType: a.UniverInstanceType["UNIVER_BOARD"],
    handleWheel: var_core_value_sig054F => {
      let var_core_value_sig9047 = var_core_value_sig054F.runtimeScope["injector"];
      if (!(var_core_value_sig9047 != null && var_core_value_sig9047.has(T.IBoardUIStateService))) return false;
      let var_core_value_sigB9FA = (var_core_value_sig054F.runtimeScope["roots"].content["querySelector"]('[data-board-viewport-host="true"]') ?? var_core_value_sig054F.runtimeScope["roots"].content).getBoundingClientRect(),
        var_core_value_sigF8DB = (0, T.resolveBoardInteractionConfig)(var_core_value_sig9047.has(a.IConfigService) ? var_core_value_sig9047.get(a.IConfigService).getConfig(T.BOARDS_UI_PLUGIN_CONFIG_KEY) : undefined),
        var_core_value_sig6E53 = (0, T.resolveBoardWheelViewportAction)({
          event: var_core_value_sig054F.event,
          interactionConfig: var_core_value_sigF8DB,
          viewportRect: var_core_value_sigB9FA
        });
      if (var_core_value_sig6E53.type === "none") return false;
      let var_core_value_sig5812 = var_core_value_sig9047.get(T.IBoardUIStateService);
      return var_core_value_sig6E53.type === "pan" ? var_core_value_sig5812.shiftViewportPanOffset(var_core_value_sig6E53.delta) : var_core_value_sig5812.setZoomRatioAtViewportPoint(var_core_value_sig5812.getState().zoomRatio * var_core_value_sig6E53.zoomFactor, var_core_value_sig6E53.viewportPoint), true;
    }
  };
}
function ul(var_core_value_sigDD221) {
  return {
    childType: a.UniverInstanceType["UNIVER_BOARD"],
    supportedLayouts: ["content-bounds-fit", "tab-peer", "scroll-contained"],
    scopedDependencies: T.UniverBoardsUIPlugin["getRuntimeScopedDependencies"](var_core_value_sigDD221),
    beforeDeactivate: dl,
    mount: fl
  };
}
function dl(var_core_value_sig5CCD) {
  let var_core_value_sig6E3C = var_core_value_sig5CCD.runtimeScope["injector"];
  if (var_core_value_sig6E3C.has(S.IEditorUIService) && var_core_value_sig6E3C.get(S.IEditorUIService).close(), var_core_value_sig6E3C.has(T.BoardTextEditingService) && var_core_value_sig6E3C.get(T.BoardTextEditingService).cancelEditing(), var_core_value_sig6E3C.has(T.IBoardElementStateService)) {
    let var_core_value_sig343C = var_core_value_sig6E3C.get(T.IBoardElementStateService);
    var_core_value_sig343C.clearActiveEditing(), var_core_value_sig343C.clearSelection();
  }
}
function fl(var_core_value_sig80C4) {
  var var_core_value_sigE1B11, var_core_value_sig5287;
  let var_core_value_sigF9DF = var_core_value_sig80C4.injector["get"](a.IUniverInstanceService).getUnit(var_core_value_sig80C4.childUnitId, a.UniverInstanceType["UNIVER_BOARD"]),
    var_core_value_sig99CE1 = var_core_value_sig80C4.runtimeScope["injector"];
  if (!var_core_value_sigF9DF || !var_core_value_sig99CE1) return;
  let var_core_value_sig9669 = var_core_value_sig80C4.injector["get"](p.IRenderManagerService),
    var_core_value_sigC91C = Et(var_core_value_sig9669, var_core_value_sig80C4.childUnitId, var_core_value_sig99CE1);
  if (!var_core_value_sigC91C) return;
  let var_core_value_sig03D2 = nn(var_core_value_sig80C4.runtimeScope["roots"].content);
  var_core_value_sig03D2.render((0, m.jsxs)(Kt, {
    injector: var_core_value_sig99CE1,
    mountContainer: var_core_value_sig80C4.runtimeScope["roots"].popup,
    embedId: var_core_value_sig80C4.embedId,
    children: [(0, m.jsx)(T.BoardWorkbench, {
      embedded: var_core_value_sig80C4.renderScope["mode"] === "float" && !var_core_value_sig80C4.renderScope["fullscreen"],
      fitOnMount: false,
      showZoomControls: var_core_value_sig80C4.renderScope["mode"] === "tab" || var_core_value_sig80C4.renderScope["fullscreen"] === true
    }), (0, m.jsx)(T.BoardShapeTextEditorContainer, {
      positionRoot: var_core_value_sig80C4.runtimeScope["roots"].content
    }), (0, m.jsx)(S.EditorUIFloatingContainer, {})]
  }));
  let var_core_value_sigE8351 = var_core_value_sig80C4.renderScope["mode"] !== "float" || var_core_value_sig80C4.renderScope["fullscreen"] ? var_core_value_sig80C4.injector["get"](J).activatePortalScope(var_core_value_sig80C4.embedId, var_core_value_sig80C4.runtimeScope["roots"].content["ownerDocument"], {
    includeAppShellEditorPortal: false
  }) : undefined;
  Ot(var_core_value_sigC91C, {
    activate: true
  });
  let var_core_value_sigC72D = (var_core_value_sigE1B11 = (var_core_value_sig5287 = globalThis).requestAnimationFrame) == null ? undefined : var_core_value_sigE1B11.call(var_core_value_sig5287, () => {
    let var_core_value_sigD924 = var_core_value_sig80C4.runtimeScope["roots"].content["querySelector"]('[data-board-viewport-host="true"]'),
      var_core_value_sig02D4 = (var_core_value_sigD924 == null ? undefined : var_core_value_sigD924.getBoundingClientRect()) ?? var_core_value_sig80C4.runtimeScope["roots"].content["getBoundingClientRect"](),
      var_core_value_sigEFE7 = (0, T.resolveBoardInteractionConfig)(var_core_value_sig99CE1.get(a.IConfigService).getConfig(T.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? undefined);
    var_core_value_sig99CE1.get(T.BoardViewportService).fitContent(var_core_value_sigF9DF, {
      viewportSize: {
        width: var_core_value_sig02D4.width,
        height: var_core_value_sig02D4.height
      },
      padding: Math.max(16, Math.min(64, Math.min(var_core_value_sig02D4.width, var_core_value_sig02D4.height) * 0.08)),
      zoom: var_core_value_sigEFE7
    });
  });
  return (0, a.toDisposable)(() => {
    if (var_core_value_sigC72D != null) {
      var var_core_value_sig9277, var_core_value_sig2AE51;
      (var_core_value_sig9277 = (var_core_value_sig2AE51 = globalThis).cancelAnimationFrame) == null || var_core_value_sig9277.call(var_core_value_sig2AE51, var_core_value_sigC72D);
    }
    try {
      var var_core_value_sigE274, var_core_value_sig305B;
      (var_core_value_sigE274 = (var_core_value_sig305B = var_core_value_sigC91C.engine).unmount) == null || var_core_value_sigE274.call(var_core_value_sig305B);
    } catch {}
    var_core_value_sig9669.removeRender(var_core_value_sig80C4.childUnitId), rn(var_core_value_sig03D2), var_core_value_sigE8351 == null || var_core_value_sigE8351.dispose(), var_core_value_sig99CE1.dispose();
  });
}
function pl() {
  return Tc({
    childType: a.UniverInstanceType["UNIVER_BOARD"],
    mount: ml
  });
}
function ml(var_core_value_sig9E73) {
  if (var_core_value_sig9E73.renderScope["fullscreen"]) return;
  let {
      menu: var_core_value_sig2112,
      portalContainer: var_core_value_sigD46A
    } = Sc(var_core_value_sig9E73),
    var_core_value_sigCA961 = nn(var_core_value_sig2112);
  return var_core_value_sigCA961.render((0, d.createElement)(Kt, {
    injector: var_core_value_sig9E73.runtimeScope["injector"],
    mountContainer: var_core_value_sigD46A,
    embedId: var_core_value_sig9E73.embedId
  }, (0, d.createElement)(hl, {
    hostUnitId: var_core_value_sig9E73.hostUnitId,
    embedId: var_core_value_sig9E73.embedId,
    childUnitId: var_core_value_sig9E73.childUnitId,
    viewportRoot: var_core_value_sig9E73.runtimeScope["roots"].content,
    fullscreen: !!var_core_value_sig9E73.renderScope["fullscreen"]
  }))), (0, a.toDisposable)(() => {
    rn(var_core_value_sigCA961), globalThis.setTimeout(() => var_core_value_sig2112.remove(), 0);
  });
}
function hl(var_core_value_sigC3E81) {
  let {
      hostUnitId: var_core_value_sig617E1,
      embedId: var_core_value_sig88EF,
      childUnitId: var_core_value_sigB7EC1,
      viewportRoot: var_core_value_sigAF24,
      fullscreen: var_core_value_sig3CE6
    } = var_core_value_sigC3E81,
    var_core_value_sigF606 = (0, c.useDependency)(a.ICommandService),
    var_core_value_sig6AAF = (0, c.useDependency)(a.IConfigService),
    var_core_value_sigED24 = (0, c.useDependency)(a.IUniverInstanceService),
    var_core_value_sigEFCC = (0, c.useDependency)(a.LocaleService),
    var_core_value_sig725D = (0, c.useDependency)(ce),
    var_core_value_sigE65C = (0, c.useDependency)(T.IBoardUIStateService),
    var_core_value_sig215F = (0, c.useDependency)(T.BoardViewportService),
    var_core_value_sig2559 = (0, c.useObservable)(() => var_core_value_sigE65C.state$, var_core_value_sigE65C.getState(), false, [var_core_value_sigE65C]),
    var_core_value_sig01D7 = _l({
      embedId: var_core_value_sig88EF,
      active: (0, c.useObservable)(() => var_core_value_sig725D.active$, var_core_value_sig725D.getActive(), false, [var_core_value_sig725D]),
      fullscreen: var_core_value_sig3CE6
    }),
    var_core_value_sig5839 = var_core_value_sigED24.getUnit(var_core_value_sigB7EC1, a.UniverInstanceType["UNIVER_BOARD"]),
    var_core_value_sigF6A5 = (0, T.resolveBoardInteractionConfig)(var_core_value_sig6AAF.getConfig(T.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? undefined),
    var_core_value_sig80BE = () => var_core_value_sigAF24.getBoundingClientRect(),
    var_core_value_sig59A5 = () => ({
      x: var_core_value_sig80BE().width / 2,
      y: var_core_value_sig80BE().height / 2
    }),
    var_core_value_sig816D = var_core_value_sigAE39 => var_core_value_sigE65C.setZoomRatioAtViewportPoint(var_core_value_sigAE39, var_core_value_sig59A5());
  return (0, m.jsxs)("div", {
    className: (0, l.clsx)("univer-board-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0", {
      "univer-hidden": var_core_value_sig01D7 === "inactive",
      "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0": var_core_value_sig3CE6,
      "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2": !var_core_value_sig3CE6,
      "-univer-top-[44px]": !var_core_value_sig3CE6
    }),
    "data-embed-floating-menu": "true",
    "data-embed-id": var_core_value_sig88EF,
    "data-embed-float-stage": var_core_value_sig01D7,
    onPointerDown: var_core_value_sigF21C => var_core_value_sigF21C.stopPropagation(),
    children: [(0, m.jsx)(gl, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.fitContent"),
      onClick: () => {
        let var_core_value_sig66D1 = var_core_value_sig80BE();
        var_core_value_sig215F.fitContent(var_core_value_sig5839 ?? null, {
          viewportSize: {
            width: var_core_value_sig66D1.width,
            height: var_core_value_sig66D1.height
          },
          padding: Math.max(16, Math.min(64, Math.min(var_core_value_sig66D1.width, var_core_value_sig66D1.height) * 0.08)),
          zoom: var_core_value_sigF6A5
        });
      },
      children: (0, m.jsx)(u.OneToOneIcon, {})
    }), (0, m.jsx)(gl, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.zoomOut"),
      onClick: () => var_core_value_sig816D(var_core_value_sig2559.zoomRatio - var_core_value_sigF6A5.zoomStep),
      children: (0, m.jsx)(u.ZoomOutIcon, {})
    }), (0, m.jsxs)(gl, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.resetZoom"),
      noIcon: true,
      onClick: () => var_core_value_sig816D(1),
      children: [Math.round(var_core_value_sig2559.zoomRatio * 100), "%"]
    }), (0, m.jsx)(gl, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.zoomIn"),
      onClick: () => var_core_value_sig816D(var_core_value_sig2559.zoomRatio + var_core_value_sigF6A5.zoomStep),
      children: (0, m.jsx)(u.ZoomInIcon, {})
    }), (0, m.jsx)(fa, {
      hostUnitId: var_core_value_sig617E1,
      embedId: var_core_value_sig88EF,
      variant: "menu"
    }), (0, m.jsx)(gl, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.delete"),
      className: "univer-text-red-500",
      onClick: async () => var_core_value_sigF606.executeCommand(t.RemoveEmbedCommand["id"], {
        hostUnitId: var_core_value_sig617E1,
        embedId: var_core_value_sig88EF
      }),
      children: (0, m.jsx)(u.DeleteIcon, {})
    })]
  });
}
function gl(var_core_value_sig192C) {
  let {
    children: var_core_value_sig71B1,
    className: var_core_value_sigB1A3,
    noIcon: var_core_value_sigF2B5,
    onClick: var_core_value_sigE355,
    title: var_core_value_sigB624
  } = var_core_value_sig192C;
  return (0, m.jsx)(da, {
    title: var_core_value_sigB624,
    children: (0, m.jsx)(c.ToolbarButton, {
      "aria-label": var_core_value_sigB624,
      className: var_core_value_sigB1A3,
      noIcon: var_core_value_sigF2B5,
      onClick: var_core_value_sigE355,
      children: var_core_value_sig71B1
    })
  });
}
function _l(var_core_value_sig3A87) {
  var var_core_value_sigE894;
  return var_core_value_sig3A87.fullscreen ? "stage2" : ((var_core_value_sigE894 = var_core_value_sig3A87.active) == null ? undefined : var_core_value_sigE894.embedId) === var_core_value_sig3A87.embedId ? var_core_value_sig3A87.active["stage"] ?? "stage1" : "inactive";
}
function vl(var_core_value_sig4400) {
  bs(var_core_value_sig4400, "boards-ui.embed", yl);
}
function yl(var_core_value_sig8925) {
  var_core_value_sig8925.has(T.IBoardEmbedRuntimeFocusCoordinator) || var_core_value_sig8925.add([T.IBoardEmbedRuntimeFocusCoordinator, {
    useFactory: () => var_core_value_sig8925.get(K)
  }]);
  let var_core_value_sig33D21 = var_core_value_sig8925.get(vt),
    var_core_value_sig1F5A = var_core_value_sig8925.get(gt),
    var_core_value_sig3F85 = var_core_value_sig8925.get(H),
    var_core_value_sig1F9F = var_core_value_sig8925.get(_t),
    var_core_value_sig3605 = var_core_value_sig8925.get(Ur),
    var_core_value_sigA05F = var_core_value_sig8925.get(ii),
    var_core_value_sig6707 = cl();
  var_core_value_sig33D21.get(var_core_value_sig6707.hostType, var_core_value_sig6707.entry) || var_core_value_sig33D21.register(var_core_value_sig6707);
  let var_core_value_sig30AE = ul(var_core_value_sig8925);
  var_core_value_sig1F5A.get(var_core_value_sig30AE.childType) || var_core_value_sig1F5A.register(var_core_value_sig30AE);
  let var_core_value_sig93D01 = sl();
  var_core_value_sig3F85.get(var_core_value_sig93D01.childType) || var_core_value_sig3F85.register(var_core_value_sig93D01), pl().forEach(var_core_value_sig83A6 => {
    var_core_value_sig1F9F.hasExact(var_core_value_sig83A6.hostType, var_core_value_sig83A6.entry, var_core_value_sig83A6.childType) || var_core_value_sig1F9F.register(var_core_value_sig83A6);
  }), var_core_value_sig3605.registerProvider(wa(var_core_value_sig8925, {
    childType: a.UniverInstanceType["UNIVER_BOARD"],
    renderManagerService: p.IRenderManagerService
  })), var_core_value_sigA05F.get(a.UniverInstanceType["UNIVER_BOARD"]) || var_core_value_sigA05F.register(ll()), var_core_value_sig8925.get(p.IRenderManagerService).registerRenderModule(a.UniverInstanceType["UNIVER_BOARD"], ol);
}
const bl = {
  mode: "fit-width",
  target: "container",
  paddingX: 0,
  minScale: 0,
  align: "start"
};
function xl() {
  return ws({
    childType: a.UniverInstanceType["UNIVER_DOC"],
    productName: "Docs"
  });
}
function Sl() {
  return {
    childType: a.UniverInstanceType["UNIVER_DOC"],
    supportedLayouts: ["tab-peer", "doc-width-scale", "scroll-contained"],
    scopedDependencies: [[o.DocCanvasPopManagerService]],
    beforeDeactivate: var_core_value_sig7D8E => {
      wl(var_core_value_sig7D8E);
    },
    mount: var_core_value_sigADFE => {
      let var_core_value_sigF11A = var_core_value_sigADFE.renderScope["mode"] === "float" && !var_core_value_sigADFE.renderScope["fullscreen"] ? bt(var_core_value_sigADFE, p.IRenderManagerService, undefined, {
          scopedInjector: Tl(var_core_value_sigADFE.runtimeScope["injector"])
        }) : bt(var_core_value_sigADFE, p.IRenderManagerService),
        var_core_value_sigF020 = Cl(var_core_value_sigADFE);
      return (0, a.toDisposable)(() => {
        var_core_value_sigF020.dispose(), var_core_value_sigF11A == null || var_core_value_sigF11A.dispose();
      });
    }
  };
}
function Cl(var_core_value_sig1F45) {
  let var_core_value_sig591C = var_core_value_sig1F45.runtimeScope["roots"].canvas ?? var_core_value_sig1F45.renderScope["canvasRoot"];
  if (!var_core_value_sig591C) return (0, a.toDisposable)(() => {});
  let var_core_value_sigB5A8 = var_core_value_sig1F45.injector["get"](p.IRenderManagerService),
    var_core_value_sig5E03 = var_core_value_sigAECB => {
      var var_core_value_sigF7591;
      if (!(var_core_value_sigAECB.target instanceof HTMLCanvasElement) || !var_core_value_sig591C.contains(var_core_value_sigAECB.target)) return;
      let var_core_value_sig52AE = (var_core_value_sigF7591 = var_core_value_sigB5A8.getRenderUnitById(var_core_value_sig1F45.childUnitId)) == null ? undefined : var_core_value_sigF7591.with(o.DocSelectionRenderService);
      var_core_value_sig52AE && !var_core_value_sig52AE.hasFocus() && var_core_value_sig52AE.focus();
    };
  return var_core_value_sig591C.addEventListener("pointerdown", var_core_value_sig5E03, true), (0, a.toDisposable)(() => var_core_value_sig591C.removeEventListener("pointerdown", var_core_value_sig5E03, true));
}
function wl(var_core_value_sig9828) {
  var var_core_value_sig9230, var_core_value_sig0346;
  let var_core_value_sig8870 = var_core_value_sig9828.injector["get"](p.IRenderManagerService).getRenderUnitById(var_core_value_sig9828.childUnitId),
    var_core_value_sig05C9 = var_core_value_sig8870 == null ? undefined : var_core_value_sig8870.with(o.DocSelectionRenderService);
  var_core_value_sig8870 == null || (var_core_value_sig9230 = var_core_value_sig8870.scene["getTransformer"]()) == null || var_core_value_sig9230.clearSelectedObjects(), var_core_value_sig8870 == null || (var_core_value_sig0346 = var_core_value_sig8870.with(o.DocFloatMenuService)) == null || var_core_value_sig0346.hideFloatMenu(), var_core_value_sig05C9 == null || var_core_value_sig05C9.removeAllRanges(), var_core_value_sig05C9 == null || var_core_value_sig05C9.blur();
}
function Tl(var_core_value_sig04EC) {
  return ve(var_core_value_sig04EC, new Map([[o.DOCS_UI_PLUGIN_CONFIG_KEY, var_core_value_sig35A1 => El(var_core_value_sig35A1)]]));
}
function El(var_core_value_sigE7FD) {
  return {
    ...var_core_value_sigE7FD,
    fitToWidth: {
      ...(var_core_value_sigE7FD == null ? undefined : var_core_value_sigE7FD.fitToWidth),
      ...bl
    }
  };
}
function Dl(var_core_value_sigEE98, var_core_value_sig24AB = 120) {
  let var_core_value_sigB45C,
    var_core_value_sigF7CE1,
    var_core_value_sigFC4E = () => {
      var_core_value_sigF7CE1 != null && (window.clearTimeout(var_core_value_sigF7CE1), var_core_value_sigF7CE1 = undefined), var_core_value_sigB45C != null && (window.cancelAnimationFrame(var_core_value_sigB45C), var_core_value_sigB45C = undefined);
    };
  return {
    dispose: var_core_value_sigFC4E,
    schedule: () => {
      var_core_value_sigFC4E(), var_core_value_sigF7CE1 = window.setTimeout(() => {
        var_core_value_sigF7CE1 = undefined, var_core_value_sigB45C = window.requestAnimationFrame(() => {
          var_core_value_sigB45C = undefined, var_core_value_sigEE98();
        });
      }, var_core_value_sig24AB);
    }
  };
}
let Ol = class extends a.Disposable {
  constructor(var_core_value_sig5F74, var_core_value_sig72A2, var_core_value_sig956E, var_core_value_sig7B0C, var_core_value_sig0616, var_core_value_sigDA4C, var_core_value_sig5EDC, var_core_value_sig3956) {
    var var_core_value_sig182F, var_core_value_sig76FA, var_core_value_sig960A;
    super(), this._context = var_core_value_sig5F74, this._univerInstanceService = var_core_value_sig72A2, this._commandService = var_core_value_sig956E, this._contentSizeRegistry = var_core_value_sig7B0C, this._embedMountService = var_core_value_sig0616, this._embedModelService = var_core_value_sigDA4C, this._renderManagerService = var_core_value_sig5EDC, this._docViewScaleService = var_core_value_sig3956, V(this, "_resolvedChildUnits", new Map()), V(this, "_pendingChildUnits", new Map());
    let var_core_value_sigBE8E = (0, o.createDocsCustomBlockSizeRefreshScheduler)(() => {
        this._rerenderHostDoc() || this._refreshHostDocZoom();
      }),
      var_core_value_sig294A = Dl(() => {
        this._rerenderHostDoc();
      }),
      var_core_value_sig31A6 = (0, o.createDocsCustomBlockSizeRefreshScheduler)(() => {
        this._refreshHostDocCustomBlockPresentation() || this._rerenderHostDoc();
      }),
      var_core_value_sigAA4F = (0, o.createDocsCustomBlockSizeRefreshScheduler)(() => {
        this._rerenderHostDoc();
      }),
      var_core_value_sig672C = (var_core_value_sig182F = this._getHostUnit()) == null ? undefined : var_core_value_sig182F.zoomRatio;
    this.disposeWithMe(var_core_value_sigBE8E), this.disposeWithMe(var_core_value_sig294A), this.disposeWithMe(var_core_value_sigAA4F), this.disposeWithMe(var_core_value_sig31A6);
    let var_core_value_sig7D0D = kl((var_core_value_sig76FA = this._context["engine"]) == null || (var_core_value_sig960A = var_core_value_sig76FA.getCanvasElement) == null ? undefined : var_core_value_sig960A.call(var_core_value_sig76FA), var_core_value_sig31A6.schedule);
    var_core_value_sig7D0D && this.disposeWithMe(var_core_value_sig7D0D);
    let var_core_value_sigE30C = this._contentSizeRegistry["contentSizeChanged$"].subscribe(({
      hostUnitId: var_core_value_sigA2D31
    }) => {
      var_core_value_sigA2D31 === this._context["unitId"] && var_core_value_sigBE8E.schedule();
    });
    this.disposeWithMe((0, a.toDisposable)(() => var_core_value_sigE30C.unsubscribe())), this.disposeWithMe({
      dispose: () => {
        this._resolvedChildUnits["clear"](), this._pendingChildUnits["clear"]();
      }
    });
    let var_core_value_sigC06A = this._univerInstanceService["getTypeOfUnitAdded$"](a.UniverInstanceType["UNIVER_SHEET"]).subscribe(() => {
        var_core_value_sigBE8E.schedule();
      }),
      var_core_value_sig3CF8 = this._univerInstanceService["getTypeOfUnitAdded$"](a.UniverInstanceType["UNIVER_BASE"]).subscribe(() => {
        var_core_value_sigBE8E.schedule();
      });
    this.disposeWithMe((0, a.toDisposable)(() => var_core_value_sigC06A.unsubscribe())), this.disposeWithMe((0, a.toDisposable)(() => var_core_value_sig3CF8.unsubscribe()));
    let var_core_value_sig3EC3 = this._contentSizeRegistry["providerChanged$"].subscribe(var_core_value_sigC218 => {
      (var_core_value_sigC218 === a.UniverInstanceType["UNIVER_SHEET"] || var_core_value_sigC218 === a.UniverInstanceType["UNIVER_BASE"]) && var_core_value_sigBE8E.schedule();
    });
    this.disposeWithMe((0, a.toDisposable)(() => var_core_value_sig3EC3.unsubscribe()));
    let var_core_value_sigBD61 = (0, p.setDocsCustomBlockRenderViewportProvider)((var_core_value_sigADEC, var_core_value_sig3D8E, var_core_value_sig37E5) => {
      var var_core_value_sigF079, var_core_value_sigFCA0, var_core_value_sigC84D;
      if (var_core_value_sigADEC !== this._context["unitId"]) return null;
      let var_core_value_sigF2BC = this._getHostSnapshot();
      if (!var_core_value_sigF2BC) return null;
      let var_core_value_sigD37B = (var_core_value_sigF079 = var_core_value_sigF2BC.drawings) == null ? undefined : var_core_value_sigF079[var_core_value_sig3D8E],
        var_core_value_sigFA28 = var_core_value_sigD37B == null ? undefined : var_core_value_sigD37B.data,
        var_core_value_sig93BE = var_core_value_sigFA28 == null ? undefined : var_core_value_sigFA28.childType;
      if (var_core_value_sig93BE !== a.UniverInstanceType["UNIVER_SHEET"] && var_core_value_sig93BE !== a.UniverInstanceType["UNIVER_BASE"]) return null;
      let var_core_value_sigABEC = this._docViewScaleService["getViewScale"](),
        var_core_value_sig2712 = this._getVisibleCanvasDocumentRect(var_core_value_sigABEC),
        var_core_value_sig0B9E = this._resolveChildUnitId(var_core_value_sigFA28, var_core_value_sig93BE),
        var_core_value_sigC545 = var_core_value_sig0B9E ? this._getChildUnitForMeasurement(var_core_value_sig0B9E, var_core_value_sig93BE, var_core_value_sigBE8E.schedule) : undefined,
        var_core_value_sig12A7 = var_core_value_sigFA28 == null ? undefined : var_core_value_sigFA28.embedId,
        var_core_value_sig6F4E = typeof var_core_value_sig12A7 == "string" ? (var_core_value_sigFCA0 = this._embedMountService["getSession"](var_core_value_sig12A7)) == null || (var_core_value_sigFCA0 = var_core_value_sigFCA0.context) == null ? undefined : var_core_value_sigFCA0.runtimeScope["injector"] : undefined,
        var_core_value_sigA021 = var_core_value_sig0B9E && var_core_value_sigC545 != null ? this._contentSizeRegistry["measureContentSize"]({
          childType: var_core_value_sig93BE,
          childUnit: var_core_value_sigC545,
          childUnitId: var_core_value_sig0B9E,
          injector: var_core_value_sig6F4E,
          viewportHeight: (var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.height) == null ? undefined : Math.max(1, var_core_value_sig2712.height - 52),
          viewportWidth: var_core_value_sig37E5.fallbackWidth
        }) : undefined,
        var_core_value_sig49D91 = (0, h.resolveDocsCustomBlockSize)(var_core_value_sig93BE),
        var_core_value_sig320C = jl(var_core_value_sig37E5.fallbackHeight, var_core_value_sig49D91.height),
        var_core_value_sigE7F0 = jl(var_core_value_sig37E5.fallbackWidth, var_core_value_sig49D91.width),
        var_core_value_sigE837 = (var_core_value_sigA021 == null ? undefined : var_core_value_sigA021.height) ?? var_core_value_sig320C,
        var_core_value_sig34F4 = (0, o.resolveDocsCustomBlockRenderViewport)({
          childType: var_core_value_sig93BE,
          contentHeight: var_core_value_sig93BE === a.UniverInstanceType["UNIVER_SHEET"] ? So(var_core_value_sigE837) : var_core_value_sigE837,
          contentWidth: var_core_value_sigA021 == null ? undefined : var_core_value_sigA021.width,
          docsLeft: this._getDocsLeft(),
          documentFlavor: (var_core_value_sigC84D = var_core_value_sigF2BC.documentStyle) == null ? undefined : var_core_value_sigC84D.documentFlavor,
          fallbackHeight: var_core_value_sig320C,
          fallbackWidth: var_core_value_sigE7F0,
          pageMarginLeft: var_core_value_sig37E5.pageMarginLeft,
          pageMarginRight: var_core_value_sig37E5.pageMarginRight,
          pageWidth: var_core_value_sig37E5.pageWidth,
          scale: var_core_value_sigABEC,
          visibleCanvasHeight: var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.height,
          visibleCanvasLeft: var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.left,
          visibleCanvasWidth: var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.width
        }),
        var_core_value_sigA45D = var_core_value_sig34F4.contentHeight ?? var_core_value_sig34F4.height,
        var_core_value_sig1BC7 = var_core_value_sig93BE === a.UniverInstanceType["UNIVER_BASE"] ? 52 : 0,
        var_core_value_sig4956 = (var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.height) == null ? var_core_value_sig34F4.viewportHeight ?? var_core_value_sigA45D : Math.min(var_core_value_sigA45D, Math.max(1, var_core_value_sig2712.height - var_core_value_sig1BC7));
      return {
        ...var_core_value_sig34F4,
        viewportHeight: var_core_value_sig4956,
        height: Co({
          contentHeight: var_core_value_sigA45D,
          floatingMenuInsetTop: 52
        })
      };
    });
    this.disposeWithMe({
      dispose: var_core_value_sigBD61
    }), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sigCC9E => {
      if (var_core_value_sigCC9E.id === o.SetDocZoomRatioOperation["id"]) {
        let var_core_value_sigDE08 = var_core_value_sigCC9E.params;
        if (typeof var_core_value_sigDE08 == "object" && var_core_value_sigDE08 && "unitId" in var_core_value_sigDE08 && var_core_value_sigDE08.unitId === this._context["unitId"]) {
          let var_core_value_sigD955 = "zoomRatio" in var_core_value_sigDE08 && typeof var_core_value_sigDE08.zoomRatio == "number" ? var_core_value_sigDE08.zoomRatio : undefined;
          if (var_core_value_sigD955 != null && var_core_value_sigD955 === var_core_value_sig672C) {
            var_core_value_sigAA4F.schedule();
            return;
          }
          var_core_value_sig672C = var_core_value_sigD955, this._refreshHostDocCustomBlockPresentation(), var_core_value_sig294A.schedule();
        }
        return;
      }
      let var_core_value_sig444C = this._getHostSnapshot();
      var_core_value_sig444C && (0, o.shouldRefreshDocsCustomBlockSizeForCommand)({
        childUnitIds: (0, o.collectDocsTableLikeEmbedChildUnitIds)(var_core_value_sig444C.drawings, var_core_value_sigACCB => this._resolveChildUnitId(var_core_value_sigACCB)),
        commandId: var_core_value_sigCC9E.id,
        commandParams: var_core_value_sigCC9E.params,
        hostUnitId: this._context["unitId"]
      }) && var_core_value_sigBE8E.schedule();
    }));
  }
  _getHostUnit() {
    if (!this._disposed) return this._context["unit"] ?? undefined;
  }
  _getHostSnapshot() {
    var var_core_value_sig445D;
    return (var_core_value_sig445D = this._getHostUnit()) == null ? undefined : var_core_value_sig445D.getSnapshot();
  }
  _rerenderHostDoc() {
    let var_core_value_sigC15F = this._renderManagerService["getRenderUnitById"](this._context["unitId"]);
    try {
      var var_core_value_sig73A8;
      let var_core_value_sigE42E = var_core_value_sigC15F == null || (var_core_value_sig73A8 = var_core_value_sigC15F.with) == null ? undefined : var_core_value_sig73A8.call(var_core_value_sigC15F, o.DocRenderController);
      return var_core_value_sigE42E ? (var_core_value_sigE42E.reRender(this._context["unitId"]), true) : false;
    } catch {
      return false;
    }
  }
  _refreshHostDocCustomBlockPresentation() {
    let var_core_value_sigE227 = this._renderManagerService["getRenderUnitById"](this._context["unitId"]);
    try {
      var var_core_value_sig6909;
      return (var_core_value_sigE227 == null || (var_core_value_sig6909 = var_core_value_sigE227.with) == null || (var_core_value_sig6909 = var_core_value_sig6909.call(var_core_value_sigE227, o.DocRenderController)) == null ? undefined : var_core_value_sig6909.refreshCustomBlockPresentation(this._context["unitId"])) ?? false;
    } catch {
      return false;
    }
  }
  _refreshHostDocZoom() {
    let var_core_value_sigCFCC = this._getHostUnit(),
      var_core_value_sig0503 = var_core_value_sigCFCC == null ? undefined : var_core_value_sigCFCC.zoomRatio;
    typeof var_core_value_sig0503 == "number" && this._commandService["syncExecuteCommand"](o.SetDocZoomRatioOperation["id"], {
      unitId: this._context["unitId"],
      zoomRatio: var_core_value_sig0503
    });
  }
  _resolveChildUnitId(var_core_value_sigAA49, var_core_value_sigAB24) {
    if (!var_core_value_sigAA49 || typeof var_core_value_sigAA49 != "object") return;
    let var_core_value_sig2F15 = var_core_value_sigAA49,
      var_core_value_sig316C = typeof var_core_value_sig2F15.childType == "number" ? var_core_value_sig2F15.childType : var_core_value_sigAB24;
    if (var_core_value_sig316C !== a.UniverInstanceType["UNIVER_SHEET"] && var_core_value_sig316C !== a.UniverInstanceType["UNIVER_BASE"]) return;
    if (typeof var_core_value_sig2F15.childUnitId == "string") return var_core_value_sig2F15.childUnitId;
    if (typeof var_core_value_sig2F15.embedId != "string") return;
    let var_core_value_sig75A2 = typeof var_core_value_sig2F15.hostUnitId == "string" ? var_core_value_sig2F15.hostUnitId : this._context["unitId"],
      var_core_value_sig95CE = this._embedModelService["getDescriptor"](var_core_value_sig75A2, var_core_value_sig2F15.embedId);
    if ((var_core_value_sig95CE == null ? undefined : var_core_value_sig95CE.childType) === var_core_value_sig316C) {
      if (typeof var_core_value_sig95CE.childUnitId == "string") return var_core_value_sig95CE.childUnitId;
      try {
        return (0, t.getResourceRefInputUnitSelector)(var_core_value_sig95CE.source["ref"]);
      } catch {
        return;
      }
    }
  }
  _getChildUnitForMeasurement(var_core_value_sig41FA, var_core_value_sig73C4, var_core_value_sig3216) {
    let var_core_value_sigF636 = var_core_value_sig73C4 + ":" + var_core_value_sig41FA;
    if (this._resolvedChildUnits["has"](var_core_value_sigF636)) return this._resolvedChildUnits["get"](var_core_value_sigF636);
    let var_core_value_sig2EE8 = this._univerInstanceService["getUnit"](var_core_value_sig41FA, var_core_value_sig73C4);
    if (var_core_value_sig2EE8 != null) {
      if (!Al(var_core_value_sig2EE8)) return this._resolvedChildUnits["set"](var_core_value_sigF636, var_core_value_sig2EE8), var_core_value_sig2EE8;
      if (!this._pendingChildUnits["has"](var_core_value_sigF636)) {
        let var_core_value_sig7F33 = Promise.resolve(var_core_value_sig2EE8).then(var_core_value_sig48BD => (this._pendingChildUnits["delete"](var_core_value_sigF636), this._resolvedChildUnits["set"](var_core_value_sigF636, var_core_value_sig48BD), this._disposed || var_core_value_sig3216(), var_core_value_sig48BD), () => {
          this._pendingChildUnits["delete"](var_core_value_sigF636);
        });
        this._pendingChildUnits["set"](var_core_value_sigF636, var_core_value_sig7F33);
      }
    }
  }
  _getDocsLeft() {
    var var_core_value_sig61771, var_core_value_sig723F1;
    return ((var_core_value_sig61771 = this._context["mainComponent"]) == null || (var_core_value_sig723F1 = var_core_value_sig61771.getOffsetConfig) == null || (var_core_value_sig723F1 = var_core_value_sig723F1.call(var_core_value_sig61771)) == null ? undefined : var_core_value_sig723F1.docsLeft) ?? 0;
  }
  _getVisibleCanvasDocumentRect(var_core_value_sigADA0) {
    var var_core_value_sig2F52, var_core_value_sig8FC3, var_core_value_sigF5B3, var_core_value_sig074A, var_core_value_sig5FBE, var_core_value_sig9D61;
    let var_core_value_sigF126 = Number.isFinite(var_core_value_sigADA0) && var_core_value_sigADA0 > 0 ? var_core_value_sigADA0 : 1,
      var_core_value_sig9AF8 = ((var_core_value_sig2F52 = this._context["scene"].getViewport(o.VIEWPORT_KEY["VIEW_MAIN"])) == null ? undefined : var_core_value_sig2F52.viewportScrollX) ?? 0,
      var_core_value_sig7537 = (var_core_value_sig8FC3 = (var_core_value_sigF5B3 = this._context["engine"]).getCanvasElement) == null || (var_core_value_sig8FC3 = var_core_value_sig8FC3.call(var_core_value_sigF5B3)) == null || (var_core_value_sig074A = var_core_value_sig8FC3.getBoundingClientRect) == null ? undefined : var_core_value_sig074A.call(var_core_value_sig8FC3),
      var_core_value_sig50C7 = var_core_value_sig7537 == null ? undefined : var_core_value_sig7537.width,
      var_core_value_sig9B62 = var_core_value_sig7537 == null ? undefined : var_core_value_sig7537.height,
      var_core_value_sig470B = ((var_core_value_sig5FBE = this._context["mainComponent"]) == null ? undefined : var_core_value_sig5FBE.width) ?? this._context["scene"].width,
      var_core_value_sig7525 = (var_core_value_sig50C7 ?? var_core_value_sig470B ?? 0) / var_core_value_sigF126,
      var_core_value_sig95B5 = ((var_core_value_sig9D61 = this._context["mainComponent"]) == null ? undefined : var_core_value_sig9D61.height) ?? this._context["scene"].height,
      var_core_value_sig2347 = (var_core_value_sig9B62 ?? var_core_value_sig95B5 ?? 0) / var_core_value_sigF126;
    return !var_core_value_sig7525 || !Number.isFinite(var_core_value_sig7525) || var_core_value_sig7525 <= 0 || !var_core_value_sig2347 || !Number.isFinite(var_core_value_sig2347) || var_core_value_sig2347 <= 0 ? null : {
      height: var_core_value_sig2347,
      left: var_core_value_sig9AF8,
      width: var_core_value_sig7525
    };
  }
};
Ol = Z([X(1, (0, a.Inject)(a.IUniverInstanceService)), X(2, (0, a.Inject)(a.ICommandService)), X(3, (0, a.Inject)(ba)), X(4, (0, a.Inject)(Ht)), X(5, (0, a.Inject)(t.EmbedModelService)), X(6, p.IRenderManagerService), X(7, (0, a.Inject)(o.DocViewScaleService))], Ol);
function kl(var_core_value_sig13E2, var_core_value_sig68F8) {
  if (!var_core_value_sig13E2 || typeof ResizeObserver > "u") return;
  let var_core_value_sig6D30 = new ResizeObserver(() => var_core_value_sig68F8());
  return var_core_value_sig6D30.observe(var_core_value_sig13E2), {
    dispose: () => var_core_value_sig6D30.disconnect()
  };
}
function Al(var_core_value_sigCCC4) {
  return !!var_core_value_sigCCC4 && typeof var_core_value_sigCCC4.then == "function";
}
function jl(var_core_value_sig0607, var_core_value_sig7E5D) {
  return typeof var_core_value_sig0607 == "number" && Number.isFinite(var_core_value_sig0607) && var_core_value_sig0607 > 1 ? var_core_value_sig0607 : var_core_value_sig7E5D;
}
function Ml(var_core_value_sig67C5, var_core_value_sig7C0E, var_core_value_sig7B21) {
  return {
    ...(0, t.createDocsCustomBlockHostAdapterContribution)(var_core_value_sig67C5, var_core_value_sig7C0E),
    afterCreateAnchor: var_core_value_sigB20E => Pl(var_core_value_sig7B21, var_core_value_sigB20E.hostUnitId),
    afterRemoveAnchor: var_core_value_sig8ADE => Pl(var_core_value_sig7B21, var_core_value_sig8ADE.hostUnitId)
  };
}
function Nl() {
  return {
    hostType: a.UniverInstanceType["UNIVER_DOC"],
    entry: "docs-custom-block",
    layout: "docs-sticky-sheet",
    supportedLayouts: ["docs-sticky-sheet", "docs-sticky-base", "aspect-fit", "scroll-contained", "content-bounds-fit"],
    menuBehavior: "floating"
  };
}
function Pl(var_core_value_sigCF99, var_core_value_sig5D3E) {
  var var_core_value_sig4B1F, var_core_value_sigCE7C, var_core_value_sig58BA, var_core_value_sigA256;
  if (!var_core_value_sigCF99) return;
  let var_core_value_sig01DA = var_core_value_sigCF99.getRenderUnitById(var_core_value_sig5D3E);
  if (var_core_value_sig01DA) {
    for (let var_core_value_sigF039 of var_core_value_sig01DA.components["values"]()) {
      var var_core_value_sigD1DD;
      (var_core_value_sigD1DD = var_core_value_sigF039.makeDirty) == null || var_core_value_sigD1DD.call(var_core_value_sigF039);
    }
    (var_core_value_sig4B1F = var_core_value_sig01DA.engine) == null || var_core_value_sig4B1F.resize(), (var_core_value_sigCE7C = var_core_value_sig01DA.scene) == null || var_core_value_sigCE7C.makeDirty(), (var_core_value_sig58BA = var_core_value_sig01DA.with) == null || (var_core_value_sig58BA = var_core_value_sig58BA.call(var_core_value_sig01DA, o.DocPageLayoutService)) == null || (var_core_value_sigA256 = var_core_value_sig58BA.calculatePagePosition) == null || var_core_value_sigA256.call(var_core_value_sig58BA);
  }
}
function Fl(var_core_value_sig89FF) {
  return {
    childType: a.UniverInstanceType["UNIVER_DOC"],
    handleWheel: var_core_value_sig7F51 => {
      let var_core_value_sig622A = var_core_value_sig89FF.has(ai) ? var_core_value_sig89FF.get(ai) : undefined;
      if ((var_core_value_sig622A == null ? undefined : var_core_value_sig622A.handleWheel(var_core_value_sig7F51)) === true) return true;
      if (!var_core_value_sig89FF.has(p.IRenderManagerService)) return false;
      let var_core_value_sig40EC = var_core_value_sig89FF.get(p.IRenderManagerService).getRenderUnitById(var_core_value_sig7F51.childUnitId),
        var_core_value_sig27C9 = var_core_value_sig40EC == null ? undefined : var_core_value_sig40EC.scene;
      return bo(var_core_value_sig7F51, var_core_value_sig27C9 == null ? undefined : var_core_value_sig27C9.getViewport(o.VIEWPORT_KEY["VIEW_MAIN"]), var_core_value_sig27C9);
    }
  };
}
function Il() {
  return Tc({
    childType: a.UniverInstanceType["UNIVER_DOC"],
    mount: Ll
  });
}
function Ll(var_core_value_sigE02A) {
  let {
      menu: var_core_value_sigCD4D,
      portalContainer: var_core_value_sig82A4
    } = Sc(var_core_value_sigE02A),
    var_core_value_sig68AD = nn(var_core_value_sigCD4D);
  return var_core_value_sig68AD.render((0, d.createElement)(Kt, {
    injector: var_core_value_sigE02A.runtimeScope["injector"],
    mountContainer: var_core_value_sig82A4,
    embedId: var_core_value_sigE02A.embedId
  }, (0, d.createElement)(Rl, {
    hostUnitId: var_core_value_sigE02A.hostUnitId,
    embedId: var_core_value_sigE02A.embedId,
    entry: var_core_value_sigE02A.descriptor["entry"],
    fullscreen: !!var_core_value_sigE02A.renderScope["fullscreen"],
    usesDomFloatingStage: var_core_value_sigE02A.descriptor["entry"] !== "slides-floating-object",
    renderScopeActive$: var_core_value_sigE02A.renderScope["active$"]
  }))), (0, a.toDisposable)(() => {
    rn(var_core_value_sig68AD), globalThis.setTimeout(() => var_core_value_sigCD4D.remove(), 0);
  });
}
function Rl(var_core_value_sig1230) {
  let {
      hostUnitId: var_core_value_sig2B16,
      embedId: var_core_value_sig80C5,
      entry: var_core_value_sigBC191,
      fullscreen: var_core_value_sig0DA5,
      usesDomFloatingStage: var_core_value_sig3E16,
      renderScopeActive$: var_core_value_sig6F84
    } = var_core_value_sig1230,
    var_core_value_sig5EFE = (0, c.useObservable)(() => var_core_value_sig6F84, false, false, [var_core_value_sig6F84]),
    var_core_value_sigFD69 = (0, c.useDependency)(a.ICommandService),
    var_core_value_sig005E = (0, c.useDependency)(a.IPermissionService),
    var_core_value_sig35161 = (0, c.useDependency)(a.IUniverInstanceService),
    var_core_value_sig071B = (0, c.useDependency)(a.LocaleService),
    var_core_value_sig4E09 = (0, c.useDependency)(ce),
    var_core_value_sigCEF5 = sr({
      embedId: var_core_value_sig80C5,
      active: (0, c.useObservable)(() => var_core_value_sig4E09.active$, var_core_value_sig4E09.getActive(), false, [var_core_value_sig4E09]),
      fullscreen: var_core_value_sig0DA5,
      usesDomFloatingStage: var_core_value_sig3E16,
      renderScopeActive: var_core_value_sig5EFE
    });
  return (0, c.useObservable)(() => var_core_value_sig005E.permissionPointUpdate$["pipe"]((0, f.startWith)(null), (0, f.map)(() => zl(var_core_value_sig005E, var_core_value_sig35161, var_core_value_sig2B16, var_core_value_sig80C5, var_core_value_sigBC191))), zl(var_core_value_sig005E, var_core_value_sig35161, var_core_value_sig2B16, var_core_value_sig80C5, var_core_value_sigBC191), false, [var_core_value_sig80C5, var_core_value_sigBC191, var_core_value_sig2B16, var_core_value_sig005E, var_core_value_sig35161]) ? (0, m.jsxs)("div", {
    className: (0, l.clsx)("univer-docs-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0", {
      "univer-hidden": var_core_value_sigCEF5 !== "stage2",
      "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0": var_core_value_sig0DA5,
      "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2": !var_core_value_sig0DA5,
      "-univer-top-9": !var_core_value_sig0DA5 && var_core_value_sigBC191 !== "docs-custom-block",
      "-univer-top-[52px]": !var_core_value_sig0DA5 && var_core_value_sigBC191 === "docs-custom-block"
    }),
    "data-embed-floating-menu": "true",
    "data-embed-id": var_core_value_sig80C5,
    "data-embed-float-stage": var_core_value_sigCEF5,
    onPointerDown: var_core_value_sigF296 => var_core_value_sigF296.stopPropagation(),
    children: [!var_core_value_sig0DA5 && (0, m.jsx)(fa, {
      hostUnitId: var_core_value_sig2B16,
      embedId: var_core_value_sig80C5,
      variant: "menu"
    }), (0, m.jsx)(da, {
      title: var_core_value_sig071B.t("embed-ui.deleteBlock"),
      children: (0, m.jsx)(l.Button, {
        type: "button",
        size: "small",
        variant: "ghost",
        className: "univer-size-6 univer-p-0 univer-text-red-500 hover:univer-text-red-600",
        "aria-label": var_core_value_sig071B.t("embed-ui.deleteBlock"),
        onClick: async () => {
          await var_core_value_sigFD69.executeCommand(t.RemoveEmbedCommand["id"], {
            hostUnitId: var_core_value_sig2B16,
            embedId: var_core_value_sig80C5
          });
        },
        children: (0, m.jsx)(u.DeleteIcon, {})
      })
    })]
  }) : null;
}
function zl(var_core_value_sig7654, var_core_value_sig5E0F, var_core_value_sig0B401, var_core_value_sigF0011, var_core_value_sig1296) {
  let var_core_value_sig7230 = var_core_value_sig5E0F.getUnit(var_core_value_sig0B401, a.UniverInstanceType["UNIVER_DOC"]);
  if (!(var_core_value_sig7230 instanceof a.DocumentDataModel)) return [a.UniverInstanceType["UNIVER_SHEET"], a.UniverInstanceType["UNIVER_SLIDE"], a.UniverInstanceType["UNIVER_BOARD"]].some(var_core_value_sigD001 => !!var_core_value_sig5E0F.getUnit(var_core_value_sig0B401, var_core_value_sigD001));
  let var_core_value_sigD8AD = var_core_value_sig1296 === "slides-floating-object" ? "drawing" : "custom-block",
    var_core_value_sigF334 = var_core_value_sigD8AD === "drawing" ? (0, h.getDocumentDrawingSegmentId)(var_core_value_sig7230, var_core_value_sigF0011) : "";
  return (0, h.canEditDocumentTargets)(var_core_value_sig7654, var_core_value_sig0B401, [...(0, h.getDocumentEntityParentPermissionObjectIds)(var_core_value_sig7230, var_core_value_sigF334, var_core_value_sigD8AD, var_core_value_sigF0011), (0, h.getDocumentEntityPermissionObjectId)(var_core_value_sigF334, var_core_value_sigD8AD, var_core_value_sigF0011)]);
}
function Bl(var_core_value_sig323C1) {
  bs(var_core_value_sig323C1, "docs-ui.embed", Vl);
}
function Vl(var_core_value_sig613D) {
  let var_core_value_sigF722 = var_core_value_sig613D.get(t.EmbedHostAdapterRegistryService),
    var_core_value_sig27EC = var_core_value_sig613D.get(vt),
    var_core_value_sig5826 = var_core_value_sig613D.get(gt),
    var_core_value_sigB946 = var_core_value_sig613D.get(H),
    var_core_value_sigBD3C = var_core_value_sig613D.get(_t),
    var_core_value_sigABF2 = var_core_value_sig613D.get(Ur),
    var_core_value_sig18F3 = var_core_value_sig613D.get(ii),
    var_core_value_sig2D44 = var_core_value_sig613D.has(t.EmbedHostAnchorModelService) ? var_core_value_sig613D.get(t.EmbedHostAnchorModelService) : undefined,
    var_core_value_sig369C = var_core_value_sig613D.has(a.IUniverInstanceService) ? var_core_value_sig613D.get(a.IUniverInstanceService) : undefined,
    var_core_value_sigFE47 = var_core_value_sig613D.has(p.IRenderManagerService) ? var_core_value_sig613D.get(p.IRenderManagerService) : undefined;
  var_core_value_sigFE47 == null || var_core_value_sigFE47.registerRenderModule(a.UniverInstanceType["UNIVER_DOC"], [Ol]);
  let var_core_value_sig6B74 = Ml(var_core_value_sig2D44, var_core_value_sig369C, var_core_value_sigFE47);
  var_core_value_sigF722.get(var_core_value_sig6B74.hostType, var_core_value_sig6B74.entry) || var_core_value_sigF722.register(var_core_value_sig6B74);
  let var_core_value_sig0345 = Nl();
  var_core_value_sig27EC.get(var_core_value_sig0345.hostType, var_core_value_sig0345.entry) || var_core_value_sig27EC.register(var_core_value_sig0345);
  let var_core_value_sigF097 = Sl();
  var_core_value_sig5826.get(var_core_value_sigF097.childType) || var_core_value_sig5826.register(var_core_value_sigF097);
  let var_core_value_sig3E3B = xl();
  var_core_value_sigB946.get(var_core_value_sig3E3B.childType) || var_core_value_sigB946.register(var_core_value_sig3E3B), Il().forEach(var_core_value_sig4940 => {
    var_core_value_sigBD3C.hasExact(var_core_value_sig4940.hostType, var_core_value_sig4940.entry, var_core_value_sig4940.childType) || var_core_value_sigBD3C.register(var_core_value_sig4940);
  }), var_core_value_sigABF2.registerProvider(wa(var_core_value_sig613D, {
    childType: a.UniverInstanceType["UNIVER_DOC"],
    renderManagerService: p.IRenderManagerService
  })), var_core_value_sig18F3.get(a.UniverInstanceType["UNIVER_DOC"]) || var_core_value_sig18F3.register(Fl(var_core_value_sig613D));
}
function Hl() {
  return {
    childType: a.UniverInstanceType["UNIVER_SHEET"],
    measureContentSize: var_core_value_sig7E0F => {
      let var_core_value_sig9785 = Ul(var_core_value_sig7E0F.childUnit, var_core_value_sig7E0F.limitRowsToViewportWidth ? var_core_value_sig7E0F.viewportWidth : undefined),
        var_core_value_sig235B = Gl(var_core_value_sig7E0F.childUnit);
      return var_core_value_sig9785 == null && var_core_value_sig235B == null ? undefined : {
        height: var_core_value_sig9785 == null ? undefined : var_core_value_sig9785.height,
        verticalBreaks: var_core_value_sig9785 == null ? undefined : var_core_value_sig9785.breaks,
        width: var_core_value_sig235B
      };
    }
  };
}
function Ul(var_core_value_sig0C14, var_core_value_sigFFA4) {
  var var_core_value_sig1185;
  let var_core_value_sigB830 = var_core_value_sig0C14 instanceof a.Workbook ? var_core_value_sig0C14.getActiveSheet(true) : undefined;
  if (!var_core_value_sigB830) return;
  let var_core_value_sig973F = Kl(var_core_value_sigB830, var_core_value_sigFFA4);
  if (!Number.isFinite(var_core_value_sig973F) || var_core_value_sig973F == null || var_core_value_sig973F < 0) return;
  let var_core_value_sig8246 = Xl((var_core_value_sig1185 = var_core_value_sigB830.getConfig) == null || (var_core_value_sig1185 = var_core_value_sig1185.call(var_core_value_sigB830)) == null ? undefined : var_core_value_sig1185.defaultRowHeight, a.DEFAULT_WORKSHEET_ROW_HEIGHT),
    var_core_value_sigB70E = Wl(var_core_value_sig0C14),
    var_core_value_sigF7F9 = 0,
    var_core_value_sigDC6B = [];
  for (let var_core_value_sigBCA8 = 0; var_core_value_sigBCA8 < var_core_value_sig973F; var_core_value_sigBCA8++) {
    var var_core_value_sig1680, var_core_value_sigEDFA;
    ((var_core_value_sig1680 = var_core_value_sigB830.getRowVisible) == null ? undefined : var_core_value_sig1680.call(var_core_value_sigB830, var_core_value_sigBCA8)) !== false && (var_core_value_sigF7F9 += Zl((var_core_value_sigEDFA = var_core_value_sigB830.getRowHeight) == null ? undefined : var_core_value_sigEDFA.call(var_core_value_sigB830, var_core_value_sigBCA8), var_core_value_sig8246), var_core_value_sigDC6B.push(var_core_value_sigB70E + var_core_value_sigF7F9));
  }
  return {
    breaks: var_core_value_sigDC6B,
    height: var_core_value_sigB70E + var_core_value_sigF7F9
  };
}
function Wl(var_core_value_sigE153) {
  var var_core_value_sig2A9F1;
  let var_core_value_sig16E9 = var_core_value_sigE153 instanceof a.Workbook ? var_core_value_sigE153.getActiveSheet(true) : undefined,
    var_core_value_sigDB4D = var_core_value_sig16E9 == null || (var_core_value_sig2A9F1 = var_core_value_sig16E9.getConfig) == null || (var_core_value_sig2A9F1 = var_core_value_sig2A9F1.call(var_core_value_sig16E9)) == null ? undefined : var_core_value_sig2A9F1.columnHeader;
  return var_core_value_sigDB4D != null && var_core_value_sigDB4D.hidden ? 0 : Xl(var_core_value_sigDB4D == null ? undefined : var_core_value_sigDB4D.height, 24);
}
function Gl(var_core_value_sigF85F) {
  var var_core_value_sig5107, var_core_value_sigC33E;
  let var_core_value_sig26BB1 = var_core_value_sigF85F instanceof a.Workbook ? var_core_value_sigF85F.getActiveSheet(true) : undefined;
  if (!var_core_value_sig26BB1) return;
  let var_core_value_sig9995 = Jl(var_core_value_sig26BB1);
  if (!Number.isFinite(var_core_value_sig9995) || var_core_value_sig9995 == null || var_core_value_sig9995 < 0) return;
  let var_core_value_sigBC57 = (var_core_value_sig5107 = var_core_value_sig26BB1.getConfig) == null || (var_core_value_sig5107 = var_core_value_sig5107.call(var_core_value_sig26BB1)) == null ? undefined : var_core_value_sig5107.rowHeader,
    var_core_value_sig76F3 = Xl((var_core_value_sigC33E = var_core_value_sig26BB1.getConfig) == null || (var_core_value_sigC33E = var_core_value_sigC33E.call(var_core_value_sig26BB1)) == null ? undefined : var_core_value_sigC33E.defaultColumnWidth, a.DEFAULT_WORKSHEET_COLUMN_WIDTH),
    var_core_value_sig6AC3 = var_core_value_sigBC57 != null && var_core_value_sigBC57.hidden ? 0 : Xl(var_core_value_sigBC57 == null ? undefined : var_core_value_sigBC57.width, a.DEFAULT_WORKSHEET_ROW_TITLE_WIDTH),
    var_core_value_sig54D0 = 0;
  for (let var_core_value_sig0C8C = 0; var_core_value_sig0C8C < var_core_value_sig9995; var_core_value_sig0C8C++) {
    var var_core_value_sig6483, var_core_value_sigAE271;
    ((var_core_value_sig6483 = var_core_value_sig26BB1.getColVisible) == null ? undefined : var_core_value_sig6483.call(var_core_value_sig26BB1, var_core_value_sig0C8C)) !== false && (var_core_value_sig54D0 += Xl((var_core_value_sigAE271 = var_core_value_sig26BB1.getColumnWidth) == null ? undefined : var_core_value_sigAE271.call(var_core_value_sig26BB1, var_core_value_sig0C8C), var_core_value_sig76F3));
  }
  return var_core_value_sig6AC3 + var_core_value_sig54D0 + p.ScrollBar["DEFAULT_TOTAL_SIZE"];
}
function Kl(var_core_value_sigE0EF, var_core_value_sig0D46) {
  let var_core_value_sigE838 = Yl(var_core_value_sigE0EF.getRowCount());
  if (var_core_value_sigE838 == null || var_core_value_sig0D46 == null) return var_core_value_sigE838;
  let var_core_value_sigC4EA = ql(var_core_value_sigE0EF, var_core_value_sig0D46),
    var_core_value_sig4A4F = var_core_value_sigE0EF.getDataRealRange();
  if (var_core_value_sigC4EA < 0 || var_core_value_sig4A4F.endRow < 0 || var_core_value_sig4A4F.endColumn < 0 || var_core_value_sig4A4F.startColumn > var_core_value_sigC4EA) return 0;
  let var_core_value_sig0E98 = -1;
  for (let var_core_value_sig56FC of var_core_value_sigE0EF.iterateByRow({
    startRow: Math.max(0, var_core_value_sig4A4F.startRow),
    startColumn: Math.max(0, var_core_value_sig4A4F.startColumn),
    endRow: var_core_value_sig4A4F.endRow,
    endColumn: Math.min(var_core_value_sigC4EA, var_core_value_sig4A4F.endColumn)
  })) var_core_value_sig56FC.value && var_core_value_sigE0EF.cellHasValue(var_core_value_sig56FC.value) && (var_core_value_sig0E98 = var_core_value_sig56FC.row);
  return Math.min(var_core_value_sigE838, var_core_value_sig0E98 + 1);
}
function ql(var_core_value_sigA58A, var_core_value_sigA8C1) {
  var var_core_value_sig0D63, var_core_value_sigA53F;
  let var_core_value_sigA2FD = (var_core_value_sig0D63 = var_core_value_sigA58A.getConfig) == null || (var_core_value_sig0D63 = var_core_value_sig0D63.call(var_core_value_sigA58A)) == null ? undefined : var_core_value_sig0D63.rowHeader,
    var_core_value_sigC087 = var_core_value_sigA2FD != null && var_core_value_sigA2FD.hidden ? 0 : Xl(var_core_value_sigA2FD == null ? undefined : var_core_value_sigA2FD.width, a.DEFAULT_WORKSHEET_ROW_TITLE_WIDTH),
    var_core_value_sig8A48 = Math.max(0, var_core_value_sigA8C1 - var_core_value_sigC087 - p.ScrollBar["DEFAULT_TOTAL_SIZE"]),
    var_core_value_sig3F2C = Xl((var_core_value_sigA53F = var_core_value_sigA58A.getConfig) == null || (var_core_value_sigA53F = var_core_value_sigA53F.call(var_core_value_sigA58A)) == null ? undefined : var_core_value_sigA53F.defaultColumnWidth, a.DEFAULT_WORKSHEET_COLUMN_WIDTH),
    var_core_value_sig5DA9 = 0,
    var_core_value_sig215A = -1,
    var_core_value_sig986E1 = Jl(var_core_value_sigA58A) ?? 0;
  for (let var_core_value_sig7EC8 = 0; var_core_value_sig7EC8 < var_core_value_sig986E1 && var_core_value_sig5DA9 < var_core_value_sig8A48; var_core_value_sig7EC8++) {
    var var_core_value_sig5002, var_core_value_sig158C;
    ((var_core_value_sig5002 = var_core_value_sigA58A.getColVisible) == null ? undefined : var_core_value_sig5002.call(var_core_value_sigA58A, var_core_value_sig7EC8)) !== false && (var_core_value_sig215A = var_core_value_sig7EC8, var_core_value_sig5DA9 += Xl((var_core_value_sig158C = var_core_value_sigA58A.getColumnWidth) == null ? undefined : var_core_value_sig158C.call(var_core_value_sigA58A, var_core_value_sig7EC8), var_core_value_sig3F2C));
  }
  return var_core_value_sig215A;
}
function Jl(var_core_value_sig3CB5) {
  return Yl(var_core_value_sig3CB5.getColumnCount());
}
function Yl(var_core_value_sigBB84) {
  return typeof var_core_value_sigBB84 == "number" && Number.isFinite(var_core_value_sigBB84) && var_core_value_sigBB84 >= 0 ? Math.floor(var_core_value_sigBB84) : undefined;
}
function Xl(var_core_value_sigB8A9, var_core_value_sig21A3) {
  return typeof var_core_value_sigB8A9 == "number" && Number.isFinite(var_core_value_sigB8A9) && var_core_value_sigB8A9 > 0 ? var_core_value_sigB8A9 : var_core_value_sig21A3;
}
function Zl(var_core_value_sig0BDF, var_core_value_sig37CB) {
  return typeof var_core_value_sig0BDF == "number" && Number.isFinite(var_core_value_sig0BDF) && var_core_value_sig0BDF >= 0 ? var_core_value_sig0BDF : var_core_value_sig37CB;
}
function Ql() {
  return {
    hostType: a.UniverInstanceType["UNIVER_SHEET"],
    entry: "sheets-floating-object",
    layout: "doc-width-scale",
    supportedLayouts: ["doc-width-scale", "aspect-fit", "scroll-contained", "content-bounds-fit"],
    menuBehavior: "floating"
  };
}
function $l() {
  return {
    hostType: a.UniverInstanceType["UNIVER_SHEET"],
    entry: "sheets-sheet-tab",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: var_core_value_sig04541 => {
      let var_core_value_sig71F7 = eu("data-embed-sheets-sheet-tab-host", var_core_value_sig04541.descriptor["hostAnchorId"]);
      return var_core_value_sig71F7 ? {
        hostElement: var_core_value_sig71F7
      } : {};
    }
  };
}
function eu(var_core_value_sigFFD9, var_core_value_sig6AE21) {
  return document.querySelector("[" + var_core_value_sigFFD9 + "=\x22" + tu(var_core_value_sig6AE21) + "\x22]");
}
function tu(var_core_value_sig9573) {
  return var_core_value_sig9573.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function nu(var_core_value_sigBBE41) {
  let var_core_value_sigC89B = var_core_value_sigBBE41.has(a.IUniverInstanceService) ? var_core_value_sigBBE41.get(a.IUniverInstanceService) : undefined,
    var_core_value_sigDE91 = var_core_value_sigBBE41.has(p.IRenderManagerService) ? var_core_value_sigBBE41.get(p.IRenderManagerService) : undefined;
  return {
    childType: a.UniverInstanceType["UNIVER_SHEET"],
    getHorizontalScroll: var_core_value_sig8D12 => {
      var var_core_value_sigEEC4;
      return (var_core_value_sigEEC4 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAE70(var_core_value_sig8D12)) == null ? undefined : var_core_value_sigEEC4.viewportScrollX;
    },
    getVerticalScroll: var_core_value_sig0EDB1 => {
      var var_core_value_sig1C1B1;
      return (var_core_value_sig1C1B1 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAE70(var_core_value_sig0EDB1)) == null ? undefined : var_core_value_sig1C1B1.viewportScrollY;
    },
    getStickyLeftWidth: var_core_value_sig083D => {
      var var_core_value_sig70CE, var_core_value_sig4B4A;
      let var_core_value_sig6585 = var_core_value_sig083D.runtimeScope["instanceService"] ?? var_core_value_sigC89B,
        var_core_value_sig743E = var_core_value_sig6585 == null ? undefined : var_core_value_sig6585.getUnit(var_core_value_sig083D.childUnitId, a.UniverInstanceType["UNIVER_SHEET"]),
        var_core_value_sig9872 = var_core_value_sig743E == null || (var_core_value_sig70CE = var_core_value_sig743E.getActiveSheet(true)) == null || (var_core_value_sig4B4A = var_core_value_sig70CE.getConfig) == null || (var_core_value_sig4B4A = var_core_value_sig4B4A.call(var_core_value_sig70CE)) == null ? undefined : var_core_value_sig4B4A.rowHeader;
      return var_core_value_sig9872 != null && var_core_value_sig9872.hidden ? 0 : (var_core_value_sig9872 == null ? undefined : var_core_value_sig9872.width) ?? a.DEFAULT_WORKSHEET_ROW_TITLE_WIDTH;
    },
    getStickyHeaderHeight: var_core_value_sig049A => {
      let var_core_value_sig58301 = var_core_value_sig049A.runtimeScope["instanceService"] ?? var_core_value_sigC89B;
      return Wl(var_core_value_sig58301 == null ? undefined : var_core_value_sig58301.getUnit(var_core_value_sig049A.childUnitId, a.UniverInstanceType["UNIVER_SHEET"]));
    },
    subscribeVerticalScroll: (var_core_value_sig69CB, var_core_value_sigB5CC) => {
      let var_core_value_sig823B = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAE70(var_core_value_sig69CB);
      if (!var_core_value_sig823B) return;
      let var_core_value_sigC9B0 = var_core_value_sig823B.onScrollByBar$["subscribeEvent"](var_core_value_sigA321 => {
        var_core_value_sigB5CC(var_core_value_sigA321.viewportScrollY ?? var_core_value_sig823B.viewportScrollY ?? 0);
      });
      return (0, a.toDisposable)(() => var_core_value_sigC9B0.unsubscribe());
    },
    handleWheel: var_core_value_sigAA991 => {
      var var_core_value_sig1D86;
      if (var_core_value_sigAA991.source !== "host-scroll-sync" && var_core_value_sigAA991.source !== "print-capture" && cr(var_core_value_sigAA991.layout, var_core_value_sigAA991.event)) return false;
      let var_core_value_sig1F4D = ((var_core_value_sig1D86 = var_core_value_sigAA991.runtimeScope) == null ? undefined : var_core_value_sig1D86.injector) ?? var_core_value_sigBBE41,
        var_core_value_sig91D2 = var_core_value_sig1F4D !== var_core_value_sigBBE41 && var_core_value_sig1F4D.has(p.IRenderManagerService) ? var_core_value_sig1F4D.get(p.IRenderManagerService) : var_core_value_sigDE91;
      if (!var_core_value_sig91D2) return false;
      let var_core_value_sigBF6A = var_core_value_sig91D2.getRenderUnitById(var_core_value_sigAA991.childUnitId),
        var_core_value_sigC8CD = var_core_value_sigBF6A == null ? undefined : var_core_value_sigBF6A.scene;
      return bo(var_core_value_sigAA991, var_core_value_sigC8CD == null ? undefined : var_core_value_sigC8CD.getViewport(p.SHEET_VIEWPORT_KEY["VIEW_MAIN"]), var_core_value_sigC8CD);
    }
  };
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAE70(var_core_value_sig1D8D) {
    var var_core_value_sigFCDA, var_core_value_sig4A8B;
    let var_core_value_sigE2301 = ((var_core_value_sigFCDA = var_core_value_sig1D8D.runtimeScope) == null ? undefined : var_core_value_sigFCDA.injector) ?? var_core_value_sigBBE41,
      var_core_value_sigB8AF = var_core_value_sigE2301 !== var_core_value_sigBBE41 && var_core_value_sigE2301.has(p.IRenderManagerService) ? var_core_value_sigE2301.get(p.IRenderManagerService) : var_core_value_sigDE91;
    return var_core_value_sigB8AF == null || (var_core_value_sig4A8B = var_core_value_sigB8AF.getRenderUnitById(var_core_value_sig1D8D.childUnitId)) == null || (var_core_value_sig4A8B = var_core_value_sig4A8B.scene) == null ? undefined : var_core_value_sig4A8B.getViewport(p.SHEET_VIEWPORT_KEY["VIEW_MAIN"]);
  }
}
function ru(var_core_value_sig0847) {
  let var_core_value_sig04A3 = [];
  return [["base", s.SheetsUIMenuSchema, 0], ["outline", D.SheetsOutlineUIMenuSchema, 100], ["numfmt", F.SheetsNumfmtUIMenuSchema, 100], ["conditional-formatting", M.SheetsConditionalFormattingUIMenuSchema, 100], ["data-validation", N.SheetsDataValidationUIMenuSchema, 100], ["filter", P.SheetsFilterUIMenuSchema, 100], ["drawing", ee.SheetsDrawingUIMenuSchema, 100], ["sort", I.SheetsSortUIMenuSchema, 100], ["hyper-link", te.SheetsHyperLinkUIMenuSchema, 100], ["thread-comment", re.SheetsThreadCommentUIMenuSchema, 100], ["table", ne.SheetsTableUIMenuSchema, 100], ["note", b.SheetsNoteUIMenuSchema, 100], ["print", k.SheetsPrintMenuSchema, 100], ["pivot-table", O.SheetsPivotTableUIMenuSchema, 100], ["chart", E.SheetsChartUIMenuSchema, 100], ["sparkline", j.SheetsSparklineUIMenuSchema, 100], ["shape", A.SheetsShapeUIMenuSchema, 100], ["shape-contextual-ribbon", A.SheetsShapeUIContextualRibbonSchema, 100]].forEach(([var_core_value_sigD4B6, var_core_value_sigB90E, var_core_value_sigAEF2]) => {
    let var_core_value_sig4453 = On(var_core_value_sig0847, {
      id: "embed.sheets." + var_core_value_sigD4B6,
      childType: a.UniverInstanceType["UNIVER_SHEET"],
      surface: "ribbon",
      order: var_core_value_sigAEF2,
      menuSchema: var_core_value_sigB90E
    });
    var_core_value_sig4453 && var_core_value_sig04A3.push(var_core_value_sig4453);
  }), (0, a.toDisposable)(() => var_core_value_sig04A3.forEach(var_core_value_sigBF4C => var_core_value_sigBF4C.dispose()));
}
function iu() {
  return {
    ...ws({
      childType: a.UniverInstanceType["UNIVER_SHEET"],
      productName: "Sheets"
    }),
    presentationPolicy: {
      getChromeCss: () => "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22formula-bar\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-embed-canvas-root]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
      activateNavigationAtPoint: ({
        childContext: var_core_value_sigFA8E,
        clientX: var_core_value_sig9D66,
        clientY: var_core_value_sig399F,
        runtimeHost: var_core_value_sig57C2
      }) => {
        let var_core_value_sigA85E = ks(var_core_value_sig57C2, "[data-u-comp=\x22slide-tab-item\x22]", var_core_value_sig9D66, var_core_value_sig399F),
          var_core_value_sig65AA = var_core_value_sigA85E == null ? undefined : var_core_value_sigA85E.dataset["id"],
          var_core_value_sigC6DD = var_core_value_sigFA8E.runtimeScope["commandService"];
        return !var_core_value_sig65AA || !var_core_value_sigC6DD ? false : var_core_value_sigC6DD.syncExecuteCommand(v.SetWorksheetActiveOperation["id"], {
          unitId: var_core_value_sigFA8E.childUnitId,
          subUnitId: var_core_value_sig65AA
        }) !== false;
      }
    }
  };
}
function au(var_core_value_sigB248) {
  return {
    childType: a.UniverInstanceType["UNIVER_SHEET"],
    supportedLayouts: ["tab-peer", "docs-sticky-sheet", "scroll-contained"],
    canvasRootClassName: "univer-bg-gray-0 dark:!univer-bg-gray-900",
    scopedDependencies: [[s.ISheetBarService, {
      useClass: s.SheetBarService
    }], [s.SheetCanvasPopManagerService]],
    beforeDeactivate: cu,
    mount: var_core_value_sig1300 => {
      var var_core_value_sig05BB;
      let var_core_value_sig91CD = var_core_value_sig1300.runtimeScope["injector"],
        var_core_value_sig2AF0 = var_core_value_sig1300.runtimeScope["roots"].canvas ?? var_core_value_sig1300.renderScope["canvasRoot"] ?? var_core_value_sig1300.renderScope["contentRoot"] ?? var_core_value_sig1300.renderScope["rootElement"],
        var_core_value_sig796D = var_core_value_sig1300.runtimeScope["roots"].content ?? var_core_value_sig1300.renderScope["contentRoot"] ?? var_core_value_sig2AF0;
      var_core_value_sig2AF0.dataset["embedChildRenderUnitId"] = var_core_value_sig1300.childUnitId, var_core_value_sig2AF0.dataset["embedChildRenderMode"] = "sheet-workbench", var_core_value_sig796D.dataset["embedChildRenderUnitId"] = var_core_value_sig1300.childUnitId, var_core_value_sig796D.dataset["embedChildRenderMode"] = "sheet-overlay";
      let var_core_value_sig7D2B = var_core_value_sig1300.injector["get"](a.IUniverInstanceService).getUnit(var_core_value_sig1300.childUnitId, a.UniverInstanceType["UNIVER_SHEET"]),
        var_core_value_sigEA89 = var_core_value_sig7D2B ? Xs(var_core_value_sig1300, var_core_value_sigB248, var_core_value_sig3457 => su(var_core_value_sig7D2B, var_core_value_sig3457)) : (0, a.toDisposable)(() => {}),
        var_core_value_sig97B1 = bt(var_core_value_sig1300, p.IRenderManagerService, var_core_value_sig2AF0, {
          scopedRenderInjector: true
        }) ?? (0, a.toDisposable)(() => {}),
        var_core_value_sigD238 = ou(var_core_value_sig1300),
        var_core_value_sigA1F8 = du(var_core_value_sig1300, var_core_value_sig796D),
        var_core_value_sig71F3 = nn(var_core_value_sig796D);
      return var_core_value_sig71F3.render((0, m.jsx)(Kt, {
        injector: var_core_value_sig91CD,
        mountContainer: var_core_value_sig1300.runtimeScope["roots"].popup,
        embedId: var_core_value_sig1300.embedId,
        children: (0, m.jsx)(fu, {
          canvasRoot: var_core_value_sig2AF0,
          embedId: var_core_value_sig1300.embedId,
          fullscreen: !!var_core_value_sig1300.renderScope["fullscreen"],
          showChrome: lu(var_core_value_sig1300),
          readonly: ((var_core_value_sig05BB = var_core_value_sig1300.descriptor) == null ? undefined : var_core_value_sig05BB.mode) === "readonly",
          unitId: var_core_value_sig1300.childUnitId
        })
      })), (0, a.toDisposable)(() => {
        var_core_value_sigEA89.dispose(), var_core_value_sigA1F8.dispose(), var_core_value_sigD238.dispose(), var_core_value_sig97B1.dispose(), rn(var_core_value_sig71F3), var_core_value_sig2AF0.isConnected && (var_core_value_sig2AF0.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig2AF0.removeAttribute("data-embed-child-render-mode")), var_core_value_sig796D.isConnected && (var_core_value_sig796D.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig796D.removeAttribute("data-embed-child-render-mode"));
      });
    }
  };
}
function ou(var_core_value_sig65E5) {
  var var_core_value_sig4B09;
  if (var_core_value_sig65E5.layout !== "docs-sticky-sheet") return (0, a.toDisposable)(() => {});
  let var_core_value_sigA595 = (var_core_value_sig4B09 = var_core_value_sig65E5.injector["get"](p.IRenderManagerService).getRenderUnitById(var_core_value_sig65E5.childUnitId)) == null || (var_core_value_sig4B09 = var_core_value_sig4B09.scene["getViewport"](p.SHEET_VIEWPORT_KEY["VIEW_MAIN"])) == null ? undefined : var_core_value_sig4B09.getScrollBar();
  if (!var_core_value_sigA595) return (0, a.toDisposable)(() => {});
  let var_core_value_sigD1FD = var_core_value_sigA595.hideTrackWhenUnscrollable;
  return var_core_value_sigA595.hideTrackWhenUnscrollable = true, (0, a.toDisposable)(() => {
    var_core_value_sigA595.hideTrackWhenUnscrollable = var_core_value_sigD1FD;
  });
}
function su(var_core_value_sig07DA, var_core_value_sig0481) {
  var var_core_value_sig787A;
  let var_core_value_sig9913 = var_core_value_sig0481 == null ? undefined : var_core_value_sig0481.subUnitId,
    var_core_value_sig9B551 = (var_core_value_sig9913 ? var_core_value_sig07DA.getSheetBySheetId(var_core_value_sig9913) : undefined) ?? var_core_value_sig07DA.getSheets()[0];
  var_core_value_sig9B551 && ((var_core_value_sig787A = var_core_value_sig07DA.getActiveSheet(true)) == null ? undefined : var_core_value_sig787A.getSheetId()) !== var_core_value_sig9B551.getSheetId() && var_core_value_sig07DA.setActiveSheet(var_core_value_sig9B551);
}
function cu(var_core_value_sig689C) {
  var var_core_value_sigAD2C, var_core_value_sig210C;
  (var_core_value_sigAD2C = var_core_value_sig689C.runtimeScope["commandService"]) == null || var_core_value_sigAD2C.syncExecuteCommand(s.SetCellEditVisibleOperation["id"], {
    visible: false,
    eventType: p.DeviceInputEventType["PointerDown"],
    unitId: var_core_value_sig689C.childUnitId
  }), var_core_value_sig689C.runtimeScope["injector"].has(s.CellPopupManagerService) && var_core_value_sig689C.runtimeScope["injector"].get(s.CellPopupManagerService).hidePopupsForUnit(var_core_value_sig689C.childUnitId), (var_core_value_sig210C = var_core_value_sig689C.injector["get"](p.IRenderManagerService).getRenderUnitById(var_core_value_sig689C.childUnitId)) == null || (var_core_value_sig210C = var_core_value_sig210C.scene["getTransformer"]()) == null || var_core_value_sig210C.clearSelectedObjects();
}
function lu(var_core_value_sig2020) {
  return var_core_value_sig2020.renderScope["mode"] === "tab" || !!var_core_value_sig2020.renderScope["fullscreen"];
}
function uu(var_core_value_sig4738, var_core_value_sig8FDD) {
  let var_core_value_sig47F6 = var_core_value_sig4738.style["top"],
    var_core_value_sig7799 = var_core_value_sig4738.style["bottom"];
  return var_core_value_sig4738.style["top"] = var_core_value_sig8FDD.formulaBar ? "28px" : "", var_core_value_sig4738.style["bottom"] = var_core_value_sig8FDD.sheetBar ? s.SHEET_FOOTER_BAR_HEIGHT + "px" : "", (0, a.toDisposable)(() => {
    var_core_value_sig4738.style["top"] = var_core_value_sig47F6, var_core_value_sig4738.style["bottom"] = var_core_value_sig7799;
  });
}
function du(var_core_value_sigA735, var_core_value_sig3F0B) {
  var var_core_value_sig54A5, var_core_value_sig0BB4;
  return (var_core_value_sig54A5 = var_core_value_sigA735.injector) != null && (var_core_value_sig0BB4 = var_core_value_sig54A5.has) != null && var_core_value_sig0BB4.call(var_core_value_sig54A5, Wr) ? var_core_value_sigA735.injector["get"](Wr).register({
    embedId: var_core_value_sigA735.embedId,
    childUnitId: var_core_value_sigA735.childUnitId,
    root: var_core_value_sigA735.renderScope["rootElement"],
    contentRoot: var_core_value_sig3F0B
  }) : (0, a.toDisposable)(() => {});
}
function fu(var_core_value_sig0A74) {
  let {
      canvasRoot: var_core_value_sigE80F,
      embedId: var_core_value_sig65C0,
      fullscreen: var_core_value_sigBF21,
      readonly: var_core_value_sig3601,
      showChrome: var_core_value_sig3F4A,
      unitId: var_core_value_sigBCEA
    } = var_core_value_sig0A74,
    var_core_value_sigE864 = (0, c.useConfigValue)(s.SHEETS_UI_PLUGIN_CONFIG_KEY),
    var_core_value_sig19C2 = (0, c.useDependency)(c.ComponentManager),
    var_core_value_sigDE9E = (0, c.useDependency)(Zn),
    var_core_value_sigC764 = (0, c.useObservable)(() => var_core_value_sigDE9E.session$, var_core_value_sigDE9E.getSession(), false, [var_core_value_sigDE9E]),
    var_core_value_sig7BDE = !var_core_value_sigBF21 && (var_core_value_sigC764 == null ? undefined : var_core_value_sigC764.embedId) === var_core_value_sig65C0 && var_core_value_sigC764.childUnitId === var_core_value_sigBCEA,
    var_core_value_sig0340 = var_core_value_sig19C2.get("SheetShapeTextEditorContainer") ?? var_core_value_sig19C2.get("ShapeTextEditorContainer"),
    var_core_value_sig796B = var_core_value_sigE864 == null ? undefined : var_core_value_sigE864.footer,
    var_core_value_sig7348 = (var_core_value_sigE864 == null ? undefined : var_core_value_sigE864.formulaBar) ?? true,
    var_core_value_sig935B = var_core_value_sig796B === false ? false : (var_core_value_sig796B == null ? undefined : var_core_value_sig796B.sheetBar) ?? true,
    var_core_value_sig040B = !var_core_value_sig7BDE && var_core_value_sig3F4A && var_core_value_sig7348,
    var_core_value_sig1E1C = !var_core_value_sig7BDE && var_core_value_sig3F4A && var_core_value_sig935B;
  return (0, d.useEffect)(() => {
    let var_core_value_sigD652 = uu(var_core_value_sigE80F, {
      formulaBar: var_core_value_sig040B,
      sheetBar: var_core_value_sig1E1C
    });
    return () => var_core_value_sigD652.dispose();
  }, [var_core_value_sigE80F, var_core_value_sig040B, var_core_value_sig1E1C]), var_core_value_sig7BDE ? null : (0, m.jsxs)(m.Fragment, {
    children: [(0, m.jsx)("div", {
      className: "univer-pointer-events-none\x20univer-absolute\x20univer-inset-0\x20[&>*]:univer-pointer-events-auto",
      "data-u-comp": "sheet-embed-float-dom-root",
      children: (0, m.jsx)(c.FloatDom, {
        unitId: var_core_value_sigBCEA
      })
    }), var_core_value_sig040B && (0, m.jsx)("div", {
      className: "univer-absolute\x20univer-inset-x-0\x20univer-top-0\x20univer-z-10",
      style: {
        height: 28
      },
      children: (0, m.jsx)(s.FormulaBar, {})
    }), !var_core_value_sig3601 && var_core_value_sig0340 && (0, m.jsx)(var_core_value_sig0340, {}), !var_core_value_sig3601 && !(var_core_value_sigE864 != null && var_core_value_sigE864.disableEdit) && (0, m.jsx)(s.EditorContainer, {}), !var_core_value_sig3601 && (0, m.jsx)(s.AutoFillPopupMenu, {}), var_core_value_sig1E1C && (0, m.jsx)("div", {
      className: "univer-absolute univer-inset-x-0 univer-bottom-0 univer-z-10",
      style: {
        height: s.SHEET_FOOTER_BAR_HEIGHT
      },
      children: (0, m.jsx)(s.SheetBar, {})
    })]
  });
}
const pu = (0, d.forwardRef)(({
    children: var_core_value_sigC03E,
    className: var_core_value_sig9EA6,
    title: var_core_value_sig388D,
    onClick: var_core_value_sig2FC5,
    onMouseDown: var_core_value_sigCE49,
    onPointerDown: var_core_value_sigBDDC,
    ...var_core_value_sig3A7C
  }, var_core_value_sig2FE8) => (0, m.jsx)(l.Button, {
    ref: var_core_value_sig2FE8,
    type: "button",
    size: "small",
    variant: "ghost",
    "aria-label": (0, c.useDependency)(a.LocaleService).t(var_core_value_sig388D),
    className: (0, l.clsx)("univer-gap-1 univer-px-1.5 univer-text-sm", var_core_value_sig9EA6),
    onPointerDown: var_core_value_sig6289 => {
      var_core_value_sig6289.stopPropagation(), var_core_value_sigBDDC == null || var_core_value_sigBDDC(var_core_value_sig6289);
    },
    onMouseDown: var_core_value_sigB20A => {
      var_core_value_sigB20A.stopPropagation(), var_core_value_sigCE49 == null || var_core_value_sigCE49(var_core_value_sigB20A);
    },
    onClick: var_core_value_sig0591 => {
      var_core_value_sig2FC5 == null || var_core_value_sig2FC5(var_core_value_sig0591), var_core_value_sig0591.stopPropagation();
    },
    ...var_core_value_sig3A7C,
    children: var_core_value_sigC03E
  })),
  mu = (0, d.forwardRef)(({
    title: var_core_value_sigBF10,
    primary: var_core_value_sig3A74,
    disabled: var_core_value_sig0E07,
    open: var_core_value_sig7979,
    onPrimaryClick: var_core_value_sig68AA,
    onMouseDown: var_core_value_sigE83B,
    onPointerDown: var_core_value_sigC811,
    onClick: var_core_value_sigEA081,
    ...var_core_value_sigFF73
  }, var_core_value_sigAFA5) => (0, m.jsxs)("div", {
    ref: var_core_value_sigAFA5,
    className: (0, l.clsx)("univer-box-border\x20univer-inline-flex\x20univer-h-6\x20univer-cursor-pointer\x20univer-select-none\x20univer-items-center\x20univer-overflow-hidden\x20univer-rounded-md\x20univer-text-sm\x20univer-text-gray-900\x20hover:univer-bg-gray-100\x20dark:!univer-text-gray-0\x20dark:hover:!univer-bg-gray-700", {
      "univer-bg-gray-100\x20dark:!univer-bg-gray-700": var_core_value_sig7979,
      "univer-cursor-not-allowed\x20univer-opacity-60": var_core_value_sig0E07
    }),
    onPointerDown: var_core_value_sigDBF1 => {
      var_core_value_sigDBF1.stopPropagation(), var_core_value_sigC811 == null || var_core_value_sigC811(var_core_value_sigDBF1);
    },
    onMouseDown: var_core_value_sig0358 => {
      var_core_value_sig0358.stopPropagation(), var_core_value_sigE83B == null || var_core_value_sigE83B(var_core_value_sig0358);
    },
    onClick: var_core_value_sigC4C9 => {
      var_core_value_sigEA081 == null || var_core_value_sigEA081(var_core_value_sigC4C9), var_core_value_sigC4C9.stopPropagation();
    },
    ...var_core_value_sigFF73,
    children: [(0, m.jsx)("button", {
      type: "button",
      "aria-label": var_core_value_sigBF10,
      className: "univer-box-border univer-flex univer-h-6 univer-w-7 univer-cursor-pointer univer-items-center univer-justify-center univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-900 hover:univer-bg-gray-200 disabled:univer-cursor-not-allowed dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
      disabled: var_core_value_sig0E07,
      onClick: var_core_value_sig56ED => {
        var_core_value_sig56ED.stopPropagation(), var_core_value_sig68AA();
      },
      children: var_core_value_sig3A74
    }), (0, m.jsx)(l.Separator, {
      orientation: "vertical"
    }), (0, m.jsx)("button", {
      type: "button",
      "aria-label": var_core_value_sigBF10,
      className: "univer-box-border univer-flex univer-h-6 univer-w-5 univer-cursor-pointer univer-items-center univer-justify-center univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-900 hover:univer-bg-gray-200 disabled:univer-cursor-not-allowed dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
      disabled: var_core_value_sig0E07,
      children: (0, m.jsx)(u.MoreDownIcon, {})
    })]
  }));
mu.displayName = "FloatingToolbarSplitTrigger";
function hu(var_core_value_sig7FB6) {
  let {
    children: var_core_value_sig2DCE,
    title: var_core_value_sigA8F7,
    className: var_core_value_sig87211,
    disabled: var_core_value_sigFBEE,
    active: var_core_value_sig978A,
    onClick: var_core_value_sig7789
  } = var_core_value_sig7FB6;
  return (0, m.jsx)(da, {
    title: var_core_value_sigA8F7,
    placement: "bottom",
    children: (0, m.jsx)(c.ToolbarButton, {
      className: (0, l.clsx)("univer-text-sm", var_core_value_sig87211),
      disabled: var_core_value_sigFBEE,
      active: var_core_value_sig978A,
      onClick: var_core_value_sig7789,
      children: var_core_value_sig2DCE
    })
  });
}
function gu(var_core_value_sig2AA0) {
  let {
      item: var_core_value_sigF49C,
      children: var_core_value_sigE928,
      title: var_core_value_sigAE3D,
      onClick: var_core_value_sigCDCC
    } = var_core_value_sig2AA0,
    {
      hidden: var_core_value_sig7C8C,
      disabled: var_core_value_sigE401,
      activated: var_core_value_sig44F5
    } = _u(var_core_value_sigF49C),
    var_core_value_sig5278 = (0, c.useDependency)(a.LocaleService);
  return !var_core_value_sigF49C || var_core_value_sig7C8C ? null : (0, m.jsx)(hu, {
    title: var_core_value_sig5278.t(var_core_value_sigAE3D),
    disabled: var_core_value_sigE401,
    active: var_core_value_sig44F5,
    onClick: var_core_value_sigCDCC,
    children: var_core_value_sigE928
  });
}
function _u(var_core_value_sig3A9A) {
  return {
    hidden: (0, c.useObservable)(() => {
      var var_core_value_sigFD401;
      return (var_core_value_sig3A9A == null || (var_core_value_sigFD401 = var_core_value_sig3A9A.hidden$) == null ? undefined : var_core_value_sigFD401.pipe((0, f.startWith)(false))) ?? (0, f.of)(false);
    }, false, false, [var_core_value_sig3A9A]),
    disabled: (0, c.useObservable)(() => {
      var var_core_value_sigD649;
      return (var_core_value_sig3A9A == null || (var_core_value_sigD649 = var_core_value_sig3A9A.disabled$) == null ? undefined : var_core_value_sigD649.pipe((0, f.startWith)(false))) ?? (0, f.of)(false);
    }, false, false, [var_core_value_sig3A9A]),
    activated: (0, c.useObservable)(() => {
      var var_core_value_sig0E88;
      return (var_core_value_sig3A9A == null || (var_core_value_sig0E88 = var_core_value_sig3A9A.activated$) == null ? undefined : var_core_value_sig0E88.pipe((0, f.startWith)(false))) ?? (0, f.of)(false);
    }, false, false, [var_core_value_sig3A9A]),
    value: (0, c.useObservable)(() => {
      var var_core_value_sig13C8;
      return (var_core_value_sig3A9A == null || (var_core_value_sig13C8 = var_core_value_sig3A9A.value$) == null ? undefined : var_core_value_sig13C8.pipe((0, f.startWith)(undefined))) ?? (0, f.of)(undefined);
    }, undefined, false, [var_core_value_sig3A9A])
  };
}
function vu(var_core_value_sig5693) {
  return var_core_value_sig5693.tooltip ?? var_core_value_sig5693.title ?? var_core_value_sig5693.id;
}
function yu(var_core_value_sig9934) {
  return typeof var_core_value_sig9934.label == "string" ? var_core_value_sig9934.label : typeof var_core_value_sig9934.value == "string" || typeof var_core_value_sig9934.value == "number" ? String(var_core_value_sig9934.value) : var_core_value_sig9934.id ?? "";
}
function bu(var_core_value_sigE4D8) {
  return var_core_value_sigE4D8 === a.WrapStrategy["CLIP"] ? (0, m.jsx)(u.TruncationIcon, {}) : var_core_value_sigE4D8 === a.WrapStrategy["WRAP"] ? (0, m.jsx)(u.AutowrapIcon, {}) : (0, m.jsx)(u.OverflowIcon, {});
}
function xu(var_core_value_sig2215) {
  return var_core_value_sig2215 instanceof HTMLElement && !!var_core_value_sig2215.closest('button, input, textarea, [contenteditable="true"], [role="button"], [role="combobox"], [data-u-comp="select"], .univer-select');
}
function Su(var_core_value_sig4D72) {
  var_core_value_sig4D72.stopPropagation(), xu(var_core_value_sig4D72.target) || var_core_value_sig4D72.preventDefault();
}
function Cu(var_core_value_sigA7F1, var_core_value_sig5F36) {
  if (!(var_core_value_sigA7F1 instanceof HTMLElement)) return false;
  let var_core_value_sig7CCF = var_core_value_sigA7F1.closest("[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22]");
  return (var_core_value_sig7CCF == null ? undefined : var_core_value_sig7CCF.getAttribute("data-embed-id")) === var_core_value_sig5F36;
}
function wu(var_core_value_sig17A1, var_core_value_sig6A6B) {
  let var_core_value_sigBA34 = var_core_value_sig17A1.target;
  Cu(var_core_value_sigBA34, var_core_value_sig6A6B) && var_core_value_sig17A1.preventDefault();
}
function Tu(var_core_value_sig5C43) {
  let {
    embedId: var_core_value_sigEB12,
    children: var_core_value_sig76A9,
    onPointerDown: var_core_value_sig8E18
  } = var_core_value_sig5C43;
  return (0, m.jsx)("section", {
    "data-embed-id": var_core_value_sigEB12,
    "data-embed-floating-menu-popup": "true",
    className: "univer-box-border univer-grid univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-2 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onPointerDown: var_core_value_sig8E18,
    onMouseDown: Su,
    children: var_core_value_sig76A9
  });
}
function Eu(var_core_value_sig73A2) {
  let {
    children: var_core_value_sig502C
  } = var_core_value_sig73A2;
  return (0, m.jsx)("div", {
    className: "univer-flex\x20univer-items-center\x20univer-gap-1",
    children: var_core_value_sig502C
  });
}
function Du(var_core_value_sig485B) {
  let {
      embedId: var_core_value_sigBCA6,
      title: var_core_value_sigCFBC,
      trigger: var_core_value_sigB810,
      overlay: var_core_value_sig579C,
      disabled: var_core_value_sigA567,
      triggerClassName: var_core_value_sig0A94,
      open: var_core_value_sig2AAA,
      onOpenChange: var_core_value_sig60FD
    } = var_core_value_sig485B,
    var_core_value_sigCCBF = (0, c.useDependency)(a.LocaleService),
    var_core_value_sig6C3A = (0, m.jsx)(l.Dropdown, {
      disabled: var_core_value_sigA567,
      align: "start",
      sideOffset: 6,
      open: var_core_value_sig2AAA,
      onOpenChange: var_core_value_sig60FD,
      onPointerDownOutside: var_core_value_sigE521 => wu(var_core_value_sigE521, var_core_value_sigBCA6),
      onFocusOutside: var_core_value_sig0571 => wu(var_core_value_sig0571, var_core_value_sigBCA6),
      onInteractOutside: var_core_value_sig43F41 => wu(var_core_value_sig43F41, var_core_value_sigBCA6),
      overlay: (0, m.jsx)("div", {
        "data-embed-id": var_core_value_sigBCA6,
        "data-embed-floating-menu-popup": "true",
        onPointerDown: Su,
        onMouseDown: Su,
        children: var_core_value_sig579C
      }),
      children: (0, m.jsx)(pu, {
        title: var_core_value_sigCFBC,
        "data-state": var_core_value_sig2AAA ? "open" : "closed",
        disabled: var_core_value_sigA567,
        className: var_core_value_sig0A94,
        children: var_core_value_sigB810
      })
    });
  return (0, m.jsx)(da, {
    title: var_core_value_sigCCBF.t(var_core_value_sigCFBC),
    placement: "bottom",
    children: var_core_value_sig6C3A
  });
}
function Ou(var_core_value_sig2AE1) {
  let {
    children: var_core_value_sigC181
  } = var_core_value_sig2AE1;
  return (0, m.jsx)("section", {
    className: "univer-box-border\x20univer-grid\x20univer-min-w-32\x20univer-gap-0.5\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
    onPointerDown: Su,
    onMouseDown: Su,
    children: var_core_value_sigC181
  });
}
function ku(var_core_value_sig8B6F) {
  let {
    children: var_core_value_sig9ECC
  } = var_core_value_sig8B6F;
  return (0, m.jsx)("section", {
    className: "univer-box-border univer-grid univer-min-w-44 univer-gap-0.5 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onPointerDown: Su,
    onMouseDown: Su,
    children: var_core_value_sig9ECC
  });
}
function Au(var_core_value_sig36DC) {
  let {
    children: var_core_value_sig4C11,
    icon: var_core_value_sigBA2B1,
    onClick: var_core_value_sigAB3B
  } = var_core_value_sig36DC;
  return (0, m.jsxs)("button", {
    type: "button",
    className: "univer-box-border univer-grid univer-h-7 univer-w-full univer-grid-cols-[1.5rem_1fr] univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
    onClick: var_core_value_sigAB3B,
    children: [(0, m.jsx)("span", {
      className: "univer-flex univer-items-center univer-justify-center",
      children: var_core_value_sigBA2B1
    }), (0, m.jsx)("span", {
      className: "univer-truncate",
      children: var_core_value_sig4C11
    })]
  });
}
function ju(var_core_value_sigEF94) {
  let {
    children: var_core_value_sig1968,
    icon: var_core_value_sigF414,
    active: var_core_value_sigD94D,
    onClick: var_core_value_sigE2D2
  } = var_core_value_sigEF94;
  return (0, m.jsxs)("button", {
    type: "button",
    className: (0, l.clsx)("univer-box-border univer-flex univer-h-7 univer-w-full univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700", {
      "!univer-bg-gray-200\x20dark:!univer-bg-gray-500": var_core_value_sigD94D
    }),
    onClick: var_core_value_sigE2D2,
    children: [var_core_value_sigF414, var_core_value_sig1968]
  });
}
function Mu(var_core_value_sig8DED) {
  let {
    title: var_core_value_sigDC78,
    active: var_core_value_sigBEEA,
    disabled: var_core_value_sigFC95,
    children: var_core_value_sig331A,
    onClick: var_core_value_sigC5A1
  } = var_core_value_sig8DED;
  return (0, m.jsx)(da, {
    title: (0, c.useDependency)(a.LocaleService).t(var_core_value_sigDC78),
    placement: "bottom",
    children: (0, m.jsx)(c.ToolbarButton, {
      className: "univer-size-7",
      disabled: var_core_value_sigFC95,
      active: var_core_value_sigBEEA,
      onClick: var_core_value_sigC5A1,
      children: var_core_value_sig331A
    })
  });
}
function Nu() {
  return [...s.BORDER_LINE_CHILDREN];
}
function Pu() {
  return [...c.FONT_SIZE_LIST];
}
function Fu(var_core_value_sig3D00) {
  return !var_core_value_sig3D00 || !("selections" in var_core_value_sig3D00) || !Array.isArray(var_core_value_sig3D00.selections) ? [] : var_core_value_sig3D00.selections;
}
function Iu(var_core_value_sig42CA) {
  let {
      menuItem: var_core_value_sig302A,
      onClick: var_core_value_sig5B5F
    } = var_core_value_sig42CA,
    {
      hidden: var_core_value_sig0F5F,
      disabled: var_core_value_sigC85F,
      value: var_core_value_sigD45D
    } = _u(var_core_value_sig302A),
    var_core_value_sig553B = (0, c.useDependency)(a.LocaleService);
  if (!var_core_value_sig302A || var_core_value_sig0F5F) return null;
  let var_core_value_sigECD1 = var_core_value_sig553B.t("embed-ui.sheetsFloating.toolbar.numberFormat");
  return (0, m.jsx)(da, {
    title: var_core_value_sigECD1,
    placement: "bottom",
    children: (0, m.jsxs)(pu, {
      title: var_core_value_sigECD1,
      disabled: var_core_value_sigC85F,
      onClick: var_core_value_sig5B5F,
      children: [(0, m.jsx)(u.NumberIcon, {}), (0, m.jsx)("span", {
        children: typeof var_core_value_sigD45D == "string" && var_core_value_sigD45D ? var_core_value_sigD45D : "General"
      }), (0, m.jsx)(u.MoreDownIcon, {})]
    })
  });
}
function Lu(var_core_value_sigB66F) {
  let {
      embedId: var_core_value_sig2A2E,
      menuItem: var_core_value_sig1D8D1,
      title: var_core_value_sig198F,
      open: var_core_value_sigAA30,
      onOpenChange: var_core_value_sig2E91,
      onSelect: var_core_value_sigA15A
    } = var_core_value_sigB66F,
    {
      hidden: var_core_value_sigB39A,
      disabled: var_core_value_sigC49D,
      value: var_core_value_sigAF48
    } = _u(var_core_value_sig1D8D1);
  if (!var_core_value_sig1D8D1 || var_core_value_sigB39A) return null;
  let var_core_value_sigDDE2 = typeof var_core_value_sigAF48 == "string" && var_core_value_sigAF48 ? var_core_value_sigAF48 : "Arial";
  return (0, m.jsx)(Du, {
    embedId: var_core_value_sig2A2E,
    disabled: var_core_value_sigC49D,
    title: var_core_value_sig198F,
    open: var_core_value_sigAA30,
    onOpenChange: var_core_value_sig2E91,
    trigger: (0, m.jsxs)(m.Fragment, {
      children: [(0, m.jsx)("span", {
        className: "univer-w-28 univer-truncate univer-text-left",
        children: var_core_value_sigDDE2
      }), (0, m.jsx)(u.MoreDownIcon, {})]
    }),
    overlay: (0, m.jsx)("div", {
      className: "univer-box-border univer-max-h-72 univer-min-w-44 univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900 [&_button]:!univer-h-7 [&_button]:!univer-px-2 [&_ul]:!univer-text-sm",
      onPointerDown: Su,
      onMouseDown: Su,
      children: (0, m.jsx)(c.FontFamilyItem, {
        value: var_core_value_sigDDE2,
        onChange: var_core_value_sig37F8 => {
          var_core_value_sigA15A(var_core_value_sig37F8), var_core_value_sig2E91(false);
        }
      })
    })
  });
}
function Ru(var_core_value_sig364F) {
  let {
      embedId: var_core_value_sigCE6D,
      menuItem: var_core_value_sig36E71,
      title: var_core_value_sigBA93,
      open: var_core_value_sigC54C,
      onOpenChange: var_core_value_sig8477,
      onSelect: var_core_value_sigCD3F
    } = var_core_value_sig364F,
    {
      hidden: var_core_value_sig7762,
      disabled: var_core_value_sig7BF5,
      value: var_core_value_sigA278
    } = _u(var_core_value_sig36E71);
  if (!var_core_value_sig36E71 || var_core_value_sig7762) return null;
  let var_core_value_sigDAE8 = typeof var_core_value_sigA278 == "number" || typeof var_core_value_sigA278 == "string" ? Number(var_core_value_sigA278) : 11;
  return (0, m.jsx)(Du, {
    embedId: var_core_value_sigCE6D,
    disabled: var_core_value_sig7BF5,
    title: var_core_value_sigBA93,
    open: var_core_value_sigC54C,
    onOpenChange: var_core_value_sig8477,
    trigger: (0, m.jsxs)(m.Fragment, {
      children: [(0, m.jsx)("span", {
        className: "univer-min-w-6 univer-text-left",
        children: var_core_value_sigDAE8
      }), (0, m.jsx)(u.MoreDownIcon, {})]
    }),
    overlay: (0, m.jsx)("div", {
      className: "univer-box-border univer-max-h-72 univer-min-w-20 univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      onPointerDown: Su,
      onMouseDown: Su,
      children: Pu().map(var_core_value_sig45D3 => {
        let var_core_value_sigE2F3 = Number(var_core_value_sig45D3.value) === var_core_value_sigDAE8;
        return (0, m.jsxs)("button", {
          type: "button",
          className: (0, l.clsx)("univer-grid univer-h-7 univer-w-full univer-grid-cols-[1fr_1rem] univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700", {
            "univer-bg-gray-100\x20dark:!univer-bg-gray-700": var_core_value_sigE2F3
          }),
          onClick: () => {
            var_core_value_sigCD3F(String(var_core_value_sig45D3.value)), var_core_value_sig8477(false);
          },
          children: [(0, m.jsx)("span", {
            children: var_core_value_sig45D3.label
          }), var_core_value_sigE2F3 && (0, m.jsx)(u.CheckMarkIcon, {
            className: "univer-text-primary-600"
          })]
        }, var_core_value_sig45D3.value);
      })
    })
  });
}
function zu(var_core_value_sigFFC1) {
  let {
      embedId: var_core_value_sig6480,
      menuItem: var_core_value_sig66BE,
      open: var_core_value_sig1BBD1,
      onOpenChange: var_core_value_sigB2271,
      execute: var_core_value_sigE106
    } = var_core_value_sigFFC1,
    {
      hidden: var_core_value_sig5F32,
      disabled: var_core_value_sig0306
    } = _u(var_core_value_sig66BE);
  return !var_core_value_sig66BE || var_core_value_sig5F32 ? null : (0, m.jsx)(Du, {
    embedId: var_core_value_sig6480,
    disabled: var_core_value_sig0306,
    title: "embed-ui.sheetsFloating.toolbar.horizontalAlignMode.main",
    triggerClassName: "univer-gap-0.5\x20univer-px-1",
    open: var_core_value_sig1BBD1,
    onOpenChange: var_core_value_sigB2271,
    trigger: (0, m.jsxs)(m.Fragment, {
      children: [(0, m.jsx)(u.LeftJustifyingIcon, {}), (0, m.jsx)(u.MoreDownIcon, {})]
    }),
    overlay: (0, m.jsx)(Tu, {
      embedId: var_core_value_sig6480,
      onPointerDown: var_core_value_sig9CB1 => var_core_value_sig9CB1.stopPropagation(),
      children: (0, m.jsxs)(Eu, {
        children: [(0, m.jsx)(Vu, {
          item: var_core_value_sig66BE,
          title: "embed-ui.sheetsFloating.align.left",
          onClick: () => var_core_value_sigE106(var_core_value_sig66BE, {
            value: a.HorizontalAlign["LEFT"]
          }),
          children: (0, m.jsx)(u.LeftJustifyingIcon, {})
        }), (0, m.jsx)(Vu, {
          item: var_core_value_sig66BE,
          title: "embed-ui.sheetsFloating.align.center",
          onClick: () => var_core_value_sigE106(var_core_value_sig66BE, {
            value: a.HorizontalAlign["CENTER"]
          }),
          children: (0, m.jsx)(u.HorizontallyIcon, {})
        }), (0, m.jsx)(Vu, {
          item: var_core_value_sig66BE,
          title: "embed-ui.sheetsFloating.align.right",
          onClick: () => var_core_value_sigE106(var_core_value_sig66BE, {
            value: a.HorizontalAlign["RIGHT"]
          }),
          children: (0, m.jsx)(u.RightJustifyingIcon, {})
        })]
      })
    })
  });
}
function Bu(var_core_value_sig1D6E) {
  let {
      embedId: var_core_value_sig719A,
      menuItem: var_core_value_sig1251,
      open: var_core_value_sigC5F6,
      onOpenChange: var_core_value_sigA3F9,
      execute: var_core_value_sig74D8
    } = var_core_value_sig1D6E,
    {
      hidden: var_core_value_sigCC2E,
      disabled: var_core_value_sig430B
    } = _u(var_core_value_sig1251);
  return !var_core_value_sig1251 || var_core_value_sigCC2E ? null : (0, m.jsx)(Du, {
    embedId: var_core_value_sig719A,
    disabled: var_core_value_sig430B,
    title: "embed-ui.sheetsFloating.toolbar.verticalAlignMode.main",
    triggerClassName: "univer-gap-0.5 univer-px-1",
    open: var_core_value_sigC5F6,
    onOpenChange: var_core_value_sigA3F9,
    trigger: (0, m.jsxs)(m.Fragment, {
      children: [(0, m.jsx)(u.VerticalCenterIcon, {}), (0, m.jsx)(u.MoreDownIcon, {})]
    }),
    overlay: (0, m.jsx)(Tu, {
      embedId: var_core_value_sig719A,
      onPointerDown: var_core_value_sigFB76 => var_core_value_sigFB76.stopPropagation(),
      children: (0, m.jsxs)(Eu, {
        children: [(0, m.jsx)(Vu, {
          item: var_core_value_sig1251,
          title: "embed-ui.sheetsFloating.align.top",
          onClick: () => var_core_value_sig74D8(var_core_value_sig1251, {
            value: a.VerticalAlign["TOP"]
          }),
          children: (0, m.jsx)(u.AlignTopIcon, {})
        }), (0, m.jsx)(Vu, {
          item: var_core_value_sig1251,
          title: "embed-ui.sheetsFloating.align.middle",
          onClick: () => var_core_value_sig74D8(var_core_value_sig1251, {
            value: a.VerticalAlign["MIDDLE"]
          }),
          children: (0, m.jsx)(u.VerticalCenterIcon, {})
        }), (0, m.jsx)(Vu, {
          item: var_core_value_sig1251,
          title: "embed-ui.sheetsFloating.align.bottom",
          onClick: () => var_core_value_sig74D8(var_core_value_sig1251, {
            value: a.VerticalAlign["BOTTOM"]
          }),
          children: (0, m.jsx)(u.AlignBottomIcon, {})
        })]
      })
    })
  });
}
function Vu(var_core_value_sigAF9F1) {
  let {
      item: var_core_value_sig07E71,
      title: var_core_value_sig4C66,
      children: var_core_value_sigE196,
      onClick: var_core_value_sigB9CB
    } = var_core_value_sigAF9F1,
    {
      hidden: var_core_value_sig32F4,
      disabled: var_core_value_sig7A4E,
      activated: var_core_value_sig1135
    } = _u(var_core_value_sig07E71);
  return !var_core_value_sig07E71 || var_core_value_sig32F4 ? null : (0, m.jsx)(Mu, {
    title: var_core_value_sig4C66,
    disabled: var_core_value_sig7A4E,
    active: var_core_value_sig1135,
    onClick: var_core_value_sigB9CB,
    children: var_core_value_sigE196
  });
}
function Hu(var_core_value_sig2441) {
  let {
      embedId: var_core_value_sig9603,
      menuItem: var_core_value_sig2EC1,
      title: var_core_value_sig0843,
      icon: var_core_value_sig0991,
      defaultColor: var_core_value_sig3B22,
      open: var_core_value_sig80741,
      onOpenChange: var_core_value_sig1182,
      onChange: var_core_value_sigCD5C,
      onReset: var_core_value_sigCA55
    } = var_core_value_sig2441,
    var_core_value_sig8489 = (0, c.useDependency)(a.LocaleService),
    {
      hidden: var_core_value_sig2919,
      disabled: var_core_value_sig621C,
      value: var_core_value_sigE938
    } = _u(var_core_value_sig2EC1),
    [var_core_value_sig8824, var_core_value_sig3313] = (0, d.useState)(var_core_value_sig3B22);
  if (!var_core_value_sig2EC1 || var_core_value_sig2919) return null;
  let var_core_value_sig23471 = (0, m.jsx)(l.Dropdown, {
    disabled: var_core_value_sig621C,
    align: "start",
    sideOffset: 6,
    open: var_core_value_sig80741,
    onOpenChange: var_core_value_sig1182,
    onPointerDownOutside: var_core_value_sig58A5 => wu(var_core_value_sig58A5, var_core_value_sig9603),
    onFocusOutside: var_core_value_sigA486 => wu(var_core_value_sigA486, var_core_value_sig9603),
    onInteractOutside: var_core_value_sigB0DE => wu(var_core_value_sigB0DE, var_core_value_sig9603),
    overlay: (0, m.jsxs)("div", {
      "data-embed-id": var_core_value_sig9603,
      "data-embed-floating-menu-popup": "true",
      className: "univer-box-border univer-w-72 univer-overflow-hidden univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-3 univer-shadow-lg dark:!univer-bg-gray-900",
      onPointerDown: Su,
      onMouseDown: Su,
      children: [(0, m.jsx)(l.ColorPicker, {
        value: typeof var_core_value_sigE938 == "string" && var_core_value_sigE938 ? var_core_value_sigE938 : var_core_value_sig8824,
        onChange: var_core_value_sig6793 => {
          var_core_value_sig3313(var_core_value_sig6793), var_core_value_sigCD5C(var_core_value_sig6793);
        }
      }), (0, m.jsx)(l.Separator, {}), (0, m.jsxs)("button", {
        type: "button",
        className: "univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-1 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
        onClick: () => {
          var_core_value_sig3313(var_core_value_sig3B22), var_core_value_sigCA55(), var_core_value_sig1182(false);
        },
        children: [(0, m.jsx)(u.NoColorDoubleIcon, {}), (0, m.jsx)("span", {
          children: var_core_value_sig8489.t("embed-ui.sheetsFloating.toolbar.resetColor")
        })]
      })]
    }),
    children: (0, m.jsx)(pu, {
      title: var_core_value_sig0843,
      disabled: var_core_value_sig621C,
      children: var_core_value_sig0991
    })
  });
  return (0, m.jsx)(da, {
    title: var_core_value_sig8489.t(var_core_value_sig0843),
    placement: "bottom",
    children: var_core_value_sig23471
  });
}
function Uu(var_core_value_sigC3CB) {
  let {
      embedId: var_core_value_sigA9421,
      menuItem: var_core_value_sig24FA,
      open: var_core_value_sig336A,
      onOpenChange: var_core_value_sigA892,
      onSelect: var_core_value_sig21F2
    } = var_core_value_sigC3CB,
    var_core_value_sigF984 = (0, c.useDependency)(a.LocaleService),
    var_core_value_sigD310 = (0, c.useDependency)(c.IconManager),
    {
      hidden: var_core_value_sigC3E61,
      disabled: var_core_value_sig6C5C
    } = _u(var_core_value_sig24FA),
    [var_core_value_sig18C6, var_core_value_sig75E5] = (0, d.useState)(a.BorderType["ALL"]),
    [var_core_value_sig8FCA, var_core_value_sig97D9] = (0, d.useState)(a.BorderStyleTypes["THIN"]),
    [var_core_value_sig0589, var_core_value_sig6C9E] = (0, d.useState)("#000000");
  if (!var_core_value_sig24FA || var_core_value_sigC3E61) return null;
  let var_core_value_sigCAB8 = (var_core_value_sigECD2 = var_core_value_sig18C6, var_core_value_sigD28E = var_core_value_sig8FCA, var_core_value_sigB896 = var_core_value_sig0589) => {
      var_core_value_sig75E5(var_core_value_sigECD2), var_core_value_sig97D9(var_core_value_sigD28E), var_core_value_sig6C9E(var_core_value_sigB896), var_core_value_sig21F2(var_core_value_sigECD2, var_core_value_sigD28E, var_core_value_sigB896);
    },
    var_core_value_sig8CA3 = var_core_value_sig22D9 => {
      var var_core_value_sig7E70;
      return ((var_core_value_sig7E70 = Nu().find(var_core_value_sig4A08 => var_core_value_sig4A08.value === var_core_value_sig22D9)) == null ? undefined : var_core_value_sig7E70.icon) ?? "AllBorderIcon";
    },
    var_core_value_sigCF68 = (var_core_value_sig9CCC, var_core_value_sigEB93 = "univer-fill-primary-600") => {
      let var_core_value_sig8F13 = var_core_value_sigD310.get(var_core_value_sig9CCC);
      return var_core_value_sig8F13 ? (0, m.jsx)(var_core_value_sig8F13, {
        className: var_core_value_sigEB93
      }) : (0, m.jsx)(u.NoBorderIcon, {});
    },
    var_core_value_sig8B08 = (0, m.jsx)(l.Dropdown, {
      disabled: var_core_value_sig6C5C,
      align: "start",
      sideOffset: 6,
      open: var_core_value_sig336A,
      onOpenChange: var_core_value_sigA892,
      onPointerDownOutside: var_core_value_sigAC84 => wu(var_core_value_sigAC84, var_core_value_sigA9421),
      onFocusOutside: var_core_value_sig1312 => wu(var_core_value_sig1312, var_core_value_sigA9421),
      onInteractOutside: var_core_value_sig18A9 => wu(var_core_value_sig18A9, var_core_value_sigA9421),
      overlay: (0, m.jsxs)(Tu, {
        embedId: var_core_value_sigA9421,
        onPointerDown: var_core_value_sigE028 => var_core_value_sigE028.stopPropagation(),
        children: [(0, m.jsx)("div", {
          className: "univer-grid univer-grid-cols-5 univer-gap-2 univer-text-gray-600 dark:!univer-text-gray-200",
          children: Nu().map(var_core_value_sig8FC31 => (0, m.jsx)(Mu, {
            title: var_core_value_sig8FC31.label,
            active: var_core_value_sig18C6 === var_core_value_sig8FC31.value,
            onClick: () => var_core_value_sigCAB8(var_core_value_sig8FC31.value),
            children: var_core_value_sigCF68(var_core_value_sig8FC31.icon)
          }, var_core_value_sig8FC31.value))
        }), (0, m.jsx)(l.Separator, {}), (0, m.jsxs)(Eu, {
          children: [(0, m.jsx)(l.Dropdown, {
            align: "start",
            sideOffset: 6,
            onPointerDownOutside: var_core_value_sig76A1 => wu(var_core_value_sig76A1, var_core_value_sigA9421),
            onFocusOutside: var_core_value_sig642F => wu(var_core_value_sig642F, var_core_value_sigA9421),
            onInteractOutside: var_core_value_sigF190 => wu(var_core_value_sigF190, var_core_value_sigA9421),
            overlay: (0, m.jsx)("div", {
              "data-embed-id": var_core_value_sigA9421,
              "data-embed-floating-menu-popup": "true",
              className: "univer-overflow-hidden\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-p-4\x20univer-shadow-lg\x20dark:!univer-bg-gray-900",
              onPointerDown: Su,
              onMouseDown: Su,
              children: (0, m.jsx)(l.ColorPicker, {
                value: var_core_value_sig0589,
                onChange: var_core_value_sig5BF0 => var_core_value_sigCAB8(var_core_value_sig18C6, var_core_value_sig8FCA, var_core_value_sig5BF0)
              })
            }),
            children: (0, m.jsxs)(Mu, {
              title: "embed-ui.sheetsFloating.borderLine.borderColor",
              active: false,
              onClick: () => undefined,
              children: [(0, m.jsx)(u.PaintBucketDoubleIcon, {
                extend: {
                  colorChannel1: var_core_value_sig0589
                }
              }), (0, m.jsx)(u.MoreDownIcon, {})]
            })
          }), (0, m.jsx)(l.Dropdown, {
            align: "start",
            sideOffset: 6,
            onPointerDownOutside: var_core_value_sig4144 => wu(var_core_value_sig4144, var_core_value_sigA9421),
            onFocusOutside: var_core_value_sig81CB => wu(var_core_value_sig81CB, var_core_value_sigA9421),
            onInteractOutside: var_core_value_sig7C8C1 => wu(var_core_value_sig7C8C1, var_core_value_sigA9421),
            overlay: (0, m.jsx)("div", {
              "data-embed-id": var_core_value_sigA9421,
              "data-embed-floating-menu-popup": "true",
              className: "univer-box-border univer-grid univer-min-w-48 univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1.5 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
              onPointerDown: Su,
              onMouseDown: Su,
              children: s.BORDER_SIZE_CHILDREN["map"](var_core_value_sigF533 => (0, m.jsx)("button", {
                type: "button",
                className: (0, l.clsx)("univer-relative\x20univer-flex\x20univer-h-8\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center\x20univer-rounded\x20univer-border-none\x20univer-bg-transparent\x20univer-px-2\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700", {
                  "univer-bg-gray-200\x20dark:!univer-bg-gray-600": var_core_value_sig8FCA === var_core_value_sigF533.value
                }),
                onClick: () => var_core_value_sigCAB8(var_core_value_sig18C6, var_core_value_sigF533.value),
                children: (0, m.jsx)(s.BorderLine, {
                  className: "univer-fill-gray-900 dark:!univer-fill-gray-0",
                  type: var_core_value_sigF533.value
                })
              }, var_core_value_sigF533.value))
            }),
            children: (0, m.jsxs)(Mu, {
              title: "embed-ui.sheetsFloating.borderLine.borderSize",
              active: false,
              onClick: () => undefined,
              children: [(0, m.jsx)(s.BorderLine, {
                className: "univer-fill-gray-900 dark:!univer-fill-gray-0",
                type: var_core_value_sig8FCA
              }), (0, m.jsx)(u.MoreDownIcon, {})]
            })
          })]
        })]
      }),
      children: (0, m.jsx)(mu, {
        title: var_core_value_sigF984.t("embed-ui.sheetsFloating.toolbar.border.main"),
        disabled: var_core_value_sig6C5C,
        open: var_core_value_sig336A,
        primary: var_core_value_sigCF68(var_core_value_sig8CA3(var_core_value_sig18C6), "univer-text-gray-900\x20dark:!univer-text-gray-0"),
        onPrimaryClick: () => {
          var_core_value_sigCAB8(), var_core_value_sigA892(false);
        }
      })
    });
  return (0, m.jsx)(da, {
    title: var_core_value_sigF984.t("embed-ui.sheetsFloating.toolbar.border.main"),
    placement: "bottom",
    children: var_core_value_sig8B08
  });
}
function Wu(var_core_value_sig630F) {
  let {
      embedId: var_core_value_sig3D22,
      menuItems: var_core_value_sigEF1E,
      open: var_core_value_sigFEAE,
      onOpenChange: var_core_value_sigB8BB,
      execute: var_core_value_sigF14E
    } = var_core_value_sig630F,
    var_core_value_sig460E = (0, c.useDependency)(a.LocaleService),
    {
      hidden: var_core_value_sig40FF,
      disabled: var_core_value_sig62281
    } = _u(var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.root),
    var_core_value_sigD6C5 = [];
  return [{
    item: var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.all,
    icon: (0, m.jsx)(u.MergeAllIcon, {})
  }, {
    item: var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.vertical,
    icon: (0, m.jsx)(u.VerticalIntegrationIcon, {})
  }, {
    item: var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.horizontal,
    icon: (0, m.jsx)(u.HorizontalMergeIcon, {})
  }, {
    item: var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.unmerge,
    icon: (0, m.jsx)(u.CancelMergeIcon, {})
  }].forEach(({
    item: var_core_value_sig018A,
    icon: var_core_value_sigECD9
  }) => {
    var_core_value_sig018A && var_core_value_sigD6C5.push({
      item: var_core_value_sig018A,
      icon: var_core_value_sigECD9
    });
  }), !(var_core_value_sigEF1E != null && var_core_value_sigEF1E.root) || var_core_value_sig40FF || !var_core_value_sigD6C5.length ? null : (0, m.jsx)(Du, {
    embedId: var_core_value_sig3D22,
    disabled: var_core_value_sig62281,
    title: "embed-ui.sheetsFloating.toolbar.mergeCell.main",
    triggerClassName: "univer-gap-0.5 univer-px-1",
    open: var_core_value_sigFEAE,
    onOpenChange: var_core_value_sigB8BB,
    trigger: (0, m.jsxs)(m.Fragment, {
      children: [(0, m.jsx)(u.MergeAllIcon, {}), (0, m.jsx)(u.MoreDownIcon, {})]
    }),
    overlay: (0, m.jsx)(ku, {
      children: var_core_value_sigD6C5.map(({
        item: var_core_value_sig900B,
        icon: var_core_value_sig82F5
      }) => (0, m.jsx)(Au, {
        icon: var_core_value_sig82F5,
        onClick: () => {
          var_core_value_sigF14E(var_core_value_sig900B), var_core_value_sigB8BB(false);
        },
        children: var_core_value_sig460E.t(vu(var_core_value_sig900B))
      }, var_core_value_sig900B.id))
    })
  });
}
function Gu(var_core_value_sig3190) {
  let {
      embedId: var_core_value_sig9576,
      menuItem: var_core_value_sigF4F1,
      open: var_core_value_sigA027,
      onOpenChange: var_core_value_sig8831,
      execute: var_core_value_sig214C
    } = var_core_value_sig3190,
    var_core_value_sigB275 = (0, c.useDependency)(a.LocaleService),
    {
      hidden: var_core_value_sig6C5B,
      disabled: var_core_value_sig7697
    } = _u(var_core_value_sigF4F1);
  if (!var_core_value_sigF4F1 || var_core_value_sig6C5B) return null;
  let var_core_value_sigAD17 = Fu(var_core_value_sigF4F1),
    var_core_value_sigC97F = var_core_value_sigAD17.length ? var_core_value_sigAD17.map(var_core_value_sigB2AC => ({
      label: var_core_value_sigB275.t(yu(var_core_value_sigB2AC)),
      icon: bu(var_core_value_sigB2AC.value),
      commandId: var_core_value_sigB2AC.commandId ?? (var_core_value_sigF4F1 == null ? undefined : var_core_value_sigF4F1.commandId) ?? (var_core_value_sigF4F1 == null ? undefined : var_core_value_sigF4F1.id) ?? v.SetTextWrapCommand["id"],
      params: var_core_value_sigB2AC.params ?? {
        value: var_core_value_sigB2AC.value
      }
    })) : [{
      label: var_core_value_sigB275.t("embed-ui.sheetsFloating.textWrap.clip"),
      icon: (0, m.jsx)(u.TruncationIcon, {}),
      commandId: v.SetTextWrapCommand["id"],
      params: {
        value: a.WrapStrategy["CLIP"]
      }
    }, {
      label: var_core_value_sigB275.t("embed-ui.sheetsFloating.textWrap.overflow"),
      icon: (0, m.jsx)(u.OverflowIcon, {}),
      commandId: v.SetTextWrapCommand["id"],
      params: {
        value: a.WrapStrategy["OVERFLOW"]
      }
    }, {
      label: var_core_value_sigB275.t("embed-ui.sheetsFloating.textWrap.wrap"),
      icon: (0, m.jsx)(u.AutowrapIcon, {}),
      commandId: v.SetTextWrapCommand["id"],
      params: {
        value: a.WrapStrategy["WRAP"]
      }
    }];
  return (0, m.jsx)(Du, {
    embedId: var_core_value_sig9576,
    disabled: var_core_value_sig7697,
    title: "embed-ui.sheetsFloating.toolbar.textWrapMode.main",
    triggerClassName: "univer-gap-0.5 univer-px-1",
    open: var_core_value_sigA027,
    onOpenChange: var_core_value_sig8831,
    trigger: (0, m.jsxs)(m.Fragment, {
      children: [(0, m.jsx)(u.AutowrapIcon, {}), (0, m.jsx)(u.MoreDownIcon, {})]
    }),
    overlay: (0, m.jsx)(Ou, {
      children: var_core_value_sigC97F.map(var_core_value_sigECB51 => {
        var var_core_value_sigA422;
        return (0, m.jsx)(ju, {
          icon: var_core_value_sigECB51.icon,
          onClick: () => {
            var_core_value_sig214C(var_core_value_sigECB51.commandId, var_core_value_sigECB51.params), var_core_value_sig8831(false);
          },
          children: var_core_value_sigECB51.label
        }, var_core_value_sigECB51.commandId + "-" + String(((var_core_value_sigA422 = var_core_value_sigECB51.params) == null ? undefined : var_core_value_sigA422.value) ?? var_core_value_sigECB51.label));
      })
    })
  });
}
const Ku = {
    formatPainter: s.SetOnceFormatPainterCommand["id"],
    numberFormat: "sheet.operation.open.numfmt.panel",
    fontFamily: s.SetRangeFontFamilyCommand["id"],
    fontSize: s.SetRangeFontSizeCommand["id"],
    bold: s.SetRangeBoldCommand["id"],
    textColor: s.SetRangeTextColorCommand["id"],
    backgroundColor: v.SetBackgroundColorCommand["id"],
    borderComposite: v.SetBorderBasicCommand["id"],
    horizontalAlign: v.SetHorizontalTextAlignCommand["id"],
    verticalAlign: v.SetVerticalTextAlignCommand["id"],
    wrap: v.SetTextWrapCommand["id"],
    filter: "sheet.command.smart-toggle-filter"
  },
  qu = {
    root: v.AddWorksheetMergeCommand["id"],
    all: v.AddWorksheetMergeAllCommand["id"],
    vertical: v.AddWorksheetMergeVerticalCommand["id"],
    horizontal: v.AddWorksheetMergeHorizontalCommand["id"],
    unmerge: v.RemoveWorksheetMergeCommand["id"]
  };
function Ju(var_core_value_sig3A58) {
  let var_core_value_sig0F071 = {},
    var_core_value_sig51FC = var_core_value_sigDA36 => {
      let var_core_value_sig2A70 = var_core_value_sig3A58.find(var_core_value_sig1BC4 => {
        let var_core_value_sig9EAB = var_core_value_sig1BC4.item;
        return var_core_value_sig1BC4.key === var_core_value_sigDA36 || (var_core_value_sig9EAB == null ? undefined : var_core_value_sig9EAB.id) === var_core_value_sigDA36 || (var_core_value_sig9EAB == null ? undefined : var_core_value_sig9EAB.commandId) === var_core_value_sigDA36;
      });
      return var_core_value_sig2A70 == null ? undefined : var_core_value_sig2A70.item;
    };
  Object.keys(Ku).forEach(var_core_value_sigA9DF => {
    var_core_value_sig0F071[var_core_value_sigA9DF] = var_core_value_sig51FC(Ku[var_core_value_sigA9DF]);
  });
  let var_core_value_sig809D = Object.entries(qu).reduce((var_core_value_sigBC94, [var_core_value_sig018B, var_core_value_sig6F36]) => {
    let var_core_value_sigF1B5 = var_core_value_sig51FC(var_core_value_sig6F36);
    return var_core_value_sigF1B5 && (var_core_value_sigBC94[var_core_value_sig018B] = var_core_value_sigF1B5), var_core_value_sigBC94;
  }, {});
  return Qu(var_core_value_sig809D) && (var_core_value_sig0F071.merge = var_core_value_sig809D), var_core_value_sig0F071.deleteBlock = true, var_core_value_sig0F071;
}
const Yu = [{
  items: ["formatPainter"]
}, {
  dividerBefore: "divider-format-tools",
  items: ["numberFormat"]
}, {
  dividerBefore: "divider-format",
  items: ["fontFamily", "fontSize", "bold"]
}, {
  dividerBefore: "divider-font",
  items: ["textColor", "backgroundColor", "borderComposite"]
}, {
  dividerBefore: "divider-border",
  items: ["merge", "horizontalAlign", "verticalAlign", "wrap"]
}, {
  dividerBefore: "divider-layout",
  items: ["filter"]
}, {
  dividerBefore: "divider-block",
  items: ["deleteBlock"]
}];
function Xu(var_core_value_sigA7DB1) {
  let var_core_value_sig7F1A = [];
  return Yu.forEach(var_core_value_sig51CE => {
    let var_core_value_sigB5C9 = var_core_value_sig51CE.items["filter"](var_core_value_sigA5C3 => Zu(var_core_value_sigA7DB1, var_core_value_sigA5C3)).map(var_core_value_sig3A1E => ({
      id: var_core_value_sig3A1E,
      type: var_core_value_sig3A1E === "formatPainter" || var_core_value_sig3A1E === "bold" || var_core_value_sig3A1E === "filter" || var_core_value_sig3A1E === "deleteBlock" ? "button" : "dropdown"
    }));
    var_core_value_sigB5C9.length && (var_core_value_sig7F1A.length && var_core_value_sig51CE.dividerBefore && var_core_value_sig7F1A.push({
      id: var_core_value_sig51CE.dividerBefore,
      type: "divider"
    }), var_core_value_sig7F1A.push(...var_core_value_sigB5C9));
  }), var_core_value_sig7F1A;
}
function Zu(var_core_value_sig0B5B, var_core_value_sig7F64) {
  return !!var_core_value_sig0B5B[var_core_value_sig7F64];
}
function Qu(var_core_value_sig8CF1) {
  return Object.values(var_core_value_sig8CF1).some(Boolean);
}
function $u(var_core_value_sigAE62, var_core_value_sigDE1D) {
  if (var_core_value_sigAE62) return {
    commandId: var_core_value_sigAE62.commandId ?? var_core_value_sigAE62.id,
    params: var_core_value_sigDE1D ?? (typeof var_core_value_sigAE62.params == "function" ? var_core_value_sigAE62.params() : var_core_value_sigAE62.params)
  };
}
function ed() {
  return Tc({
    childType: a.UniverInstanceType["UNIVER_SHEET"],
    mount: td
  });
}
function td(var_core_value_sigC013) {
  let {
      menu: var_core_value_sigD49D,
      portalContainer: var_core_value_sig02C5
    } = Sc(var_core_value_sigC013),
    var_core_value_sig162D = nn(var_core_value_sigD49D);
  return var_core_value_sig162D.render((0, d.createElement)(Kt, {
    injector: var_core_value_sigC013.runtimeScope["injector"],
    mountContainer: var_core_value_sig02C5,
    embedId: var_core_value_sigC013.embedId
  }, (0, d.createElement)(rd, {
    hostUnitId: var_core_value_sigC013.hostUnitId,
    embedId: var_core_value_sigC013.embedId,
    childUnitId: var_core_value_sigC013.childUnitId,
    entry: var_core_value_sigC013.descriptor["entry"],
    fullscreen: !!var_core_value_sigC013.renderScope["fullscreen"],
    usesDomFloatingStage: nd(var_core_value_sigC013.descriptor["entry"]),
    renderScopeActive$: var_core_value_sigC013.renderScope["active$"]
  }))), (0, a.toDisposable)(() => {
    rn(var_core_value_sig162D), globalThis.setTimeout(() => var_core_value_sigD49D.remove(), 0);
  });
}
function nd(var_core_value_sigB4CA) {
  return true;
}
function rd(var_core_value_sig0436) {
  let {
      hostUnitId: var_core_value_sig07F6,
      embedId: var_core_value_sigE78D,
      childUnitId: var_core_value_sig695E,
      entry: var_core_value_sigB3A3,
      fullscreen: var_core_value_sig3C83,
      usesDomFloatingStage: var_core_value_sig0BC8,
      renderScopeActive$: var_core_value_sigAE68
    } = var_core_value_sig0436,
    var_core_value_sigE2E61 = (0, c.useDependency)(a.LocaleService),
    var_core_value_sig1244 = (0, c.useDependency)(a.ICommandService),
    var_core_value_sigBDAA = (0, c.useDependency)(a.IUniverInstanceService),
    var_core_value_sig3872 = (0, c.useDependency)(c.IMenuManagerService),
    var_core_value_sig39A2 = (0, c.useDependency)(v.SheetsSelectionsService),
    var_core_value_sig40BA = (0, c.useDependency)(ce),
    var_core_value_sig8223 = sr({
      embedId: var_core_value_sigE78D,
      active: (0, c.useObservable)(() => var_core_value_sig40BA.active$, var_core_value_sig40BA.getActive(), false, [var_core_value_sig40BA]),
      fullscreen: var_core_value_sig3C83,
      usesDomFloatingStage: var_core_value_sig0BC8,
      renderScopeActive: (0, c.useObservable)(() => var_core_value_sigAE68, false, false, [var_core_value_sigAE68])
    }) === "stage2",
    [var_core_value_sig5B74, var_core_value_sig931B] = (0, d.useState)(null),
    var_core_value_sigACB7 = var_core_value_sigFEE6 => ({
      open: var_core_value_sig5B74 === var_core_value_sigFEE6,
      onOpenChange: var_core_value_sigDC92 => var_core_value_sig931B(var_core_value_sigDC92 ? var_core_value_sigFEE6 : null)
    });
  (0, d.useEffect)(() => {
    if (!var_core_value_sig5B74) return;
    let var_core_value_sig8700 = var_core_value_sig3515 => {
      Cu(var_core_value_sig3515.target, var_core_value_sigE78D) || var_core_value_sig931B(null);
    };
    return document.addEventListener("pointerdown", var_core_value_sig8700, true), () => {
      document.removeEventListener("pointerdown", var_core_value_sig8700, true);
    };
  }, [var_core_value_sigE78D, var_core_value_sig5B74]);
  let var_core_value_sig0089 = (0, c.useObservable)(() => var_core_value_sig3872.menuChanged$["pipe"]((0, f.map)(() => Ju(var_core_value_sig3872.getFlatMenuByPositionKey(c.MenuManagerPosition["RIBBON"])))), Ju(var_core_value_sig3872.getFlatMenuByPositionKey(c.MenuManagerPosition["RIBBON"])), false, [var_core_value_sig3872]),
    var_core_value_sig751B = (0, d.useMemo)(() => new Set(Xu(var_core_value_sig0089).map(var_core_value_sigC2A0 => var_core_value_sigC2A0.id)), [var_core_value_sig0089]),
    var_core_value_sigBC40 = () => {
      var_core_value_sig40BA.activate({
        hostUnitId: var_core_value_sig07F6,
        embedId: var_core_value_sigE78D,
        childUnitId: var_core_value_sig695E
      }, "stage2"), var_core_value_sigBDAA.setCurrentUnitForType(var_core_value_sig695E);
    },
    var_core_value_sig7560 = async (var_core_value_sig723F2, var_core_value_sig70D4) => {
      var_core_value_sigBC40(), await var_core_value_sig1244.executeCommand(var_core_value_sig723F2, var_core_value_sig70D4);
    },
    var_core_value_sig9CA9 = async (var_core_value_sig838B, var_core_value_sigE6AD) => {
      let var_core_value_sigC4E91 = $u(var_core_value_sig838B, var_core_value_sigE6AD);
      var_core_value_sigC4E91 && (await var_core_value_sig7560(var_core_value_sigC4E91.commandId, var_core_value_sigC4E91.params));
    },
    var_core_value_sig2A83 = () => {
      let var_core_value_sigE39E = var_core_value_sigBDAA.getUnit(var_core_value_sig695E, a.UniverInstanceType["UNIVER_SHEET"]),
        var_core_value_sig6818 = var_core_value_sigE39E == null ? undefined : var_core_value_sigE39E.getActiveSheet();
      return !var_core_value_sigE39E || !var_core_value_sig6818 ? null : {
        workbook: var_core_value_sigE39E,
        worksheet: var_core_value_sig6818,
        unitId: var_core_value_sigE39E.getUnitId(),
        subUnitId: var_core_value_sig6818.getSheetId()
      };
    },
    var_core_value_sig6CD5 = () => {
      var var_core_value_sig504F;
      return ((var_core_value_sig504F = var_core_value_sig39A2.getCurrentSelections()) == null ? undefined : var_core_value_sig504F.map(var_core_value_sig7C65 => var_core_value_sig7C65.range)) ?? [];
    },
    var_core_value_sig7A13 = async (var_core_value_sigA21D, var_core_value_sigB754, var_core_value_sig2B87 = a.BorderStyleTypes["THIN"], var_core_value_sig2FFF = "#000000") => {
      let var_core_value_sig82FF = var_core_value_sig2A83(),
        var_core_value_sig6C72 = var_core_value_sig6CD5();
      !var_core_value_sig82FF || !var_core_value_sig6C72.length || (await var_core_value_sig9CA9(var_core_value_sigA21D, {
        unitId: var_core_value_sig82FF.unitId,
        subUnitId: var_core_value_sig82FF.subUnitId,
        ranges: var_core_value_sig6C72,
        value: {
          type: var_core_value_sigB754,
          color: var_core_value_sig2FFF,
          style: var_core_value_sig2B87,
          activeBorderType: true
        }
      }));
    },
    var_core_value_sig6BC8 = async () => {
      await var_core_value_sig1244.executeCommand(t.RemoveEmbedCommand["id"], {
        hostUnitId: var_core_value_sig07F6,
        embedId: var_core_value_sigE78D
      });
    };
  return (0, m.jsxs)("div", {
    className: (0, l.clsx)("univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-10 univer-items-center univer-gap-0 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0 [&_svg]:univer-size-4 [&_svg]:univer-shrink-0", {
      "univer-hidden": !var_core_value_sig8223,
      "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0": var_core_value_sig3C83,
      "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20univer-max-w-[min(calc(100vw-72px),880px)]\x20-univer-translate-x-1/2\x20univer-overflow-x-auto\x20univer-overflow-y-visible\x20[scrollbar-width:none]\x20[&::-webkit-scrollbar]:univer-hidden": !var_core_value_sig3C83,
      "-univer-top-9": !var_core_value_sig3C83 && var_core_value_sigB3A3 !== "docs-custom-block",
      "-univer-top-[52px]": !var_core_value_sig3C83 && var_core_value_sigB3A3 === "docs-custom-block"
    }),
    "data-u-comp": "sheet-embed-floating-menu",
    "data-embed-floating-menu": "true",
    "data-embed-id": var_core_value_sigE78D,
    "data-embed-float-stage": var_core_value_sig8223 ? "stage2" : "inactive",
    onPointerDown: var_core_value_sig50E5 => var_core_value_sig50E5.stopPropagation(),
    onMouseDown: Su,
    children: [var_core_value_sig751B.has("formatPainter") && (0, m.jsx)(gu, {
      item: var_core_value_sig0089.formatPainter,
      title: "embed-ui.sheetsFloating.toolbar.formatPainter",
      onClick: async () => var_core_value_sig9CA9(var_core_value_sig0089.formatPainter),
      children: (0, m.jsx)(u.BrushIcon, {})
    }), var_core_value_sig751B.has("divider-format-tools") && (0, m.jsx)(l.Separator, {
      className: "univer-mx-1\x20!univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("numberFormat") && (0, m.jsx)(Iu, {
      menuItem: var_core_value_sig0089.numberFormat,
      onClick: async () => var_core_value_sig9CA9(var_core_value_sig0089.numberFormat)
    }), var_core_value_sig751B.has("divider-format") && (0, m.jsx)(l.Separator, {
      className: "univer-mx-1\x20!univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("fontFamily") && (0, m.jsx)(Lu, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.fontFamily,
      title: "embed-ui.sheetsFloating.toolbar.font",
      ...var_core_value_sigACB7("fontFamily"),
      onSelect: async var_core_value_sig6E14 => var_core_value_sig9CA9(var_core_value_sig0089.fontFamily, {
        value: var_core_value_sig6E14
      })
    }), var_core_value_sig751B.has("fontSize") && (0, m.jsx)(Ru, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.fontSize,
      title: "embed-ui.sheetsFloating.toolbar.fontSize",
      ...var_core_value_sigACB7("fontSize"),
      onSelect: async var_core_value_sig4D3F => var_core_value_sig9CA9(var_core_value_sig0089.fontSize, {
        value: Number(var_core_value_sig4D3F)
      })
    }), var_core_value_sig751B.has("bold") && (0, m.jsx)(gu, {
      item: var_core_value_sig0089.bold,
      title: "embed-ui.sheetsFloating.toolbar.bold",
      onClick: async () => var_core_value_sig9CA9(var_core_value_sig0089.bold),
      children: (0, m.jsx)(u.BoldIcon, {})
    }), var_core_value_sig751B.has("divider-font") && (0, m.jsx)(l.Separator, {
      className: "univer-mx-1 !univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("textColor") && (0, m.jsx)(Hu, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.textColor,
      title: "embed-ui.sheetsFloating.toolbar.textColor.main",
      icon: (0, m.jsx)(u.FontColorDoubleIcon, {
        className: "univer-fill-primary-600"
      }),
      defaultColor: "#111827",
      ...var_core_value_sigACB7("textColor"),
      onChange: async var_core_value_sigBE4F => var_core_value_sig9CA9(var_core_value_sig0089.textColor, {
        value: var_core_value_sigBE4F
      }),
      onReset: async () => var_core_value_sig7560(s.ResetRangeTextColorCommand["id"])
    }), var_core_value_sig751B.has("backgroundColor") && (0, m.jsx)(Hu, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.backgroundColor,
      title: "embed-ui.sheetsFloating.toolbar.fillColor.main",
      icon: (0, m.jsx)(u.PaintBucketDoubleIcon, {
        className: "univer-fill-primary-600"
      }),
      defaultColor: "#ffffff",
      ...var_core_value_sigACB7("backgroundColor"),
      onChange: async var_core_value_sig8DF2 => var_core_value_sig9CA9(var_core_value_sig0089.backgroundColor, {
        value: var_core_value_sig8DF2
      }),
      onReset: async () => var_core_value_sig7560(v.ResetBackgroundColorCommand["id"])
    }), var_core_value_sig751B.has("borderComposite") && (0, m.jsx)(Uu, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.borderComposite,
      ...var_core_value_sigACB7("borderComposite"),
      onSelect: async (var_core_value_sig666F, var_core_value_sig2BE5, var_core_value_sig79D6) => var_core_value_sig7A13(var_core_value_sig0089.borderComposite, var_core_value_sig666F, var_core_value_sig2BE5, var_core_value_sig79D6)
    }), var_core_value_sig751B.has("divider-border") && (0, m.jsx)(l.Separator, {
      className: "univer-mx-1 !univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("merge") && (0, m.jsx)(Wu, {
      embedId: var_core_value_sigE78D,
      menuItems: var_core_value_sig0089.merge,
      ...var_core_value_sigACB7("merge"),
      execute: var_core_value_sig9CA9
    }), var_core_value_sig751B.has("horizontalAlign") && (0, m.jsx)(zu, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.horizontalAlign,
      ...var_core_value_sigACB7("horizontalAlign"),
      execute: var_core_value_sig9CA9
    }), var_core_value_sig751B.has("verticalAlign") && (0, m.jsx)(Bu, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.verticalAlign,
      ...var_core_value_sigACB7("verticalAlign"),
      execute: var_core_value_sig9CA9
    }), var_core_value_sig751B.has("wrap") && (0, m.jsx)(Gu, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.wrap,
      ...var_core_value_sigACB7("wrap"),
      execute: var_core_value_sig7560
    }), var_core_value_sig751B.has("divider-layout") && (0, m.jsx)(l.Separator, {
      className: "univer-mx-1 !univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("filter") && (0, m.jsx)(gu, {
      item: var_core_value_sig0089.filter,
      title: "embed-ui.sheetsFloating.toolbar.filter",
      onClick: async () => var_core_value_sig9CA9(var_core_value_sig0089.filter),
      children: (0, m.jsx)(u.FilterIcon, {})
    }), var_core_value_sig751B.has("divider-block") && (0, m.jsx)(l.Separator, {
      className: "univer-mx-1\x20!univer-h-4",
      orientation: "vertical"
    }), !var_core_value_sig3C83 && (0, m.jsx)(fa, {
      hostUnitId: var_core_value_sig07F6,
      embedId: var_core_value_sigE78D,
      variant: "menu"
    }), var_core_value_sig751B.has("deleteBlock") && (0, m.jsx)(hu, {
      title: var_core_value_sigE2E61.t("embed-ui.deleteBlock"),
      className: "univer-text-red-500 hover:univer-text-red-600",
      onClick: var_core_value_sig6BC8,
      children: (0, m.jsx)(u.DeleteIcon, {})
    })]
  });
}
const id = new WeakMap(),
  ad = new WeakSet();
function od(var_core_value_sig9B6E) {
  bs(var_core_value_sig9B6E, "sheets-ui.embed", sd);
}
function sd(var_core_value_sigD2F9) {
  let var_core_value_sig1E09 = var_core_value_sigD2F9.get(vt),
    var_core_value_sig77CE = var_core_value_sigD2F9.get(gt),
    var_core_value_sig85D2 = var_core_value_sigD2F9.get(H),
    var_core_value_sigA9CB = var_core_value_sigD2F9.get(_t),
    var_core_value_sig779E = var_core_value_sigD2F9.get(Ur),
    var_core_value_sig7098 = var_core_value_sigD2F9.get(ba),
    var_core_value_sigD593 = var_core_value_sigD2F9.get(ii);
  ru(var_core_value_sigD2F9), var_core_value_sigD2F9.has(s.ISheetHostChromeOverrideService) || var_core_value_sigD2F9.add([s.ISheetHostChromeOverrideService, {
    useFactory: () => var_core_value_sigD2F9.get(U)
  }]), var_core_value_sigD2F9.has(s.ISheetEmbedRuntimeService) || var_core_value_sigD2F9.add([s.ISheetEmbedRuntimeService, {
    useFactory: () => cd({
      embedModelService: var_core_value_sigD2F9.get(t.EmbedModelService),
      mountService: var_core_value_sigD2F9.get(Ht),
      activationService: var_core_value_sigD2F9.get(Gt),
      restoreService: var_core_value_sigD2F9.get(Gr)
    })
  }]), [Ql(), $l()].forEach(var_core_value_sig6476 => {
    var_core_value_sig1E09.get(var_core_value_sig6476.hostType, var_core_value_sig6476.entry) || var_core_value_sig1E09.register(var_core_value_sig6476);
  });
  let var_core_value_sigF45C = au(var_core_value_sigD2F9.get(a.ICommandService));
  var_core_value_sig77CE.get(var_core_value_sigF45C.childType) || var_core_value_sig77CE.register(var_core_value_sigF45C);
  let var_core_value_sigCAD8 = iu();
  var_core_value_sig85D2.get(var_core_value_sigCAD8.childType) || var_core_value_sig85D2.register(var_core_value_sigCAD8), ed().forEach(var_core_value_sigAFF3 => {
    var_core_value_sigA9CB.get(var_core_value_sigAFF3.hostType, var_core_value_sigAFF3.entry, var_core_value_sigAFF3.childType) || var_core_value_sigA9CB.register(var_core_value_sigAFF3);
  }), var_core_value_sig779E.registerProvider(wa(var_core_value_sigD2F9, {
    childType: a.UniverInstanceType["UNIVER_SHEET"],
    renderManagerService: p.IRenderManagerService
  })), var_core_value_sig7098.get(a.UniverInstanceType["UNIVER_SHEET"]) || var_core_value_sig7098.register(Hl()), var_core_value_sigD593.get(a.UniverInstanceType["UNIVER_SHEET"]) || var_core_value_sigD593.register(nu(var_core_value_sigD2F9)), pd({
    injector: var_core_value_sigD2F9,
    previewService: var_core_value_sig779E
  });
}
function cd(var_core_value_sigCADC) {
  return {
    getSheetTabChildType: ({
      hostUnitId: var_core_value_sig866B,
      hostAnchorId: var_core_value_sig40A0,
      embedId: var_core_value_sig86F0
    }) => {
      let var_core_value_sigE4B4 = var_core_value_sigCADC.embedModelService["getDescriptor"](var_core_value_sig866B, var_core_value_sig86F0);
      return (var_core_value_sigE4B4 == null ? undefined : var_core_value_sigE4B4.hostAnchorId) === var_core_value_sig40A0 ? var_core_value_sigE4B4.childType : undefined;
    },
    mountSheetTab: ({
      hostUnitId: var_core_value_sig1D8C,
      hostAnchorId: var_core_value_sigED34,
      embedId: var_core_value_sig74CE
    }) => {
      let var_core_value_sig7FB9 = var_core_value_sigCADC.embedModelService["getDescriptor"](var_core_value_sig1D8C, var_core_value_sig74CE);
      if (!var_core_value_sig7FB9 || var_core_value_sig7FB9.hostAnchorId !== var_core_value_sigED34) return;
      let var_core_value_sigAE9F = false,
        var_core_value_sigFF68 = false,
        var_core_value_sigC604;
      return var_core_value_sigCADC.restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sig7FB9
      }).then(var_core_value_sig7F05 => {
        var_core_value_sigAE9F || (var_core_value_sigC604 == null || var_core_value_sigC604.remove(), var_core_value_sigC604 = undefined, var_core_value_sigCADC.mountService["mount"](var_core_value_sig7F05), var_core_value_sigCADC.activationService["activateTab"](var_core_value_sig7F05), var_core_value_sigFF68 = true);
      }).catch(var_core_value_sig41F3 => {
        var_core_value_sigAE9F || (var_core_value_sigC604 = ld(var_core_value_sigED34, var_core_value_sig41F3));
      }), (0, a.toDisposable)(() => {
        var_core_value_sigAE9F = true, var_core_value_sigC604 == null || var_core_value_sigC604.remove(), var_core_value_sigCADC.activationService["clearTab"](var_core_value_sig74CE), var_core_value_sigFF68 && var_core_value_sigCADC.mountService["unmount"](var_core_value_sig74CE);
      });
    },
    clearTab: var_core_value_sigE56F => {
      var_core_value_sigCADC.activationService["clearTab"](var_core_value_sigE56F);
    }
  };
}
function ld(var_core_value_sigDF94, var_core_value_sig879C) {
  let var_core_value_sig02FF = ud(var_core_value_sigDF94);
  if (!var_core_value_sig02FF) return;
  let var_core_value_sig6977 = document.createElement("div");
  return var_core_value_sig6977.dataset["embedSheetsSheetTabError"] = "true", var_core_value_sig6977.style["padding"] = "12px", var_core_value_sig6977.style["color"] = "#b91c1c", var_core_value_sig6977.style["fontSize"] = "13px", var_core_value_sig6977.textContent = var_core_value_sig879C instanceof Error && var_core_value_sig879C.message ? var_core_value_sig879C.message : "Failed to load embedded sheet.", var_core_value_sig02FF.replaceChildren(var_core_value_sig6977), var_core_value_sig6977;
}
function ud(var_core_value_sig909A) {
  return document.querySelector("[data-embed-sheets-sheet-tab-host=\x22" + dd(var_core_value_sig909A) + "\x22]");
}
function dd(var_core_value_sig1E3E) {
  return var_core_value_sig1E3E.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function fd(var_core_value_sig77FA) {
  let var_core_value_sigA90A = new f["Subscription"](),
    var_core_value_sigB3DF = 0,
    var_core_value_sigB4C4;
  if (var_core_value_sigA90A.add(var_core_value_sig77FA.previewService["previewUpdated$"].subscribe(var_core_value_sig6D7D => {
    if (typeof var_core_value_sig6D7D.image != "string") return;
    let var_core_value_sig335B = var_core_value_sig77FA.embedModelService["getActiveDescriptorsByChildUnit"](var_core_value_sig6D7D.childUnitId).find(var_core_value_sigF455 => var_core_value_sigF455.embedId === var_core_value_sig6D7D.embedId && var_core_value_sigF455.entry === "sheets-floating-object");
    var_core_value_sig335B != null && var_core_value_sig335B.hostAnchorId && var_core_value_sig77FA.canvasFloatDomPreviewService["setPreview"]({
      id: var_core_value_sig335B.hostAnchorId,
      image: var_core_value_sig6D7D.image,
      updatedAt: var_core_value_sig6D7D.updatedAt
    });
  })), !var_core_value_sig77FA.canvasFloatDomPreviewService["previewRequested$"]) return var_core_value_sigA90A;
  let var_core_value_sig866D = () => {
      var_core_value_sigB4C4 || var_core_value_sigB3DF >= 240 || (var_core_value_sigB4C4 = globalThis.setTimeout(() => {
        var_core_value_sigB4C4 = undefined, var_core_value_sigB3DF += 1, var_core_value_sig0A151();
      }, 250));
    },
    var_core_value_sigF9DC = var_core_value_sig61E2 => {
      let var_core_value_sig974B = var_core_value_sig61E2.data;
      if (!var_core_value_sig974B || typeof var_core_value_sig974B != "object") return true;
      let var_core_value_sigB89A = gd(var_core_value_sig974B, "embedId"),
        var_core_value_sig3B83 = gd(var_core_value_sig974B, "hostUnitId");
      if (!var_core_value_sigB89A || !var_core_value_sig3B83) return true;
      let var_core_value_sig3092 = var_core_value_sig77FA.embedModelService["getDescriptor"](var_core_value_sig3B83, var_core_value_sigB89A);
      return !var_core_value_sig3092 || var_core_value_sig3092.entry !== "sheets-floating-object" || !var_core_value_sig3092.childUnitId || var_core_value_sig3092.childType == null ? false : (var_core_value_sig77FA.previewService["requestPreview"]({
        descriptor: var_core_value_sig3092,
        childUnitId: var_core_value_sig3092.childUnitId,
        childType: var_core_value_sig3092.childType,
        width: var_core_value_sig61E2.width,
        height: var_core_value_sig61E2.height,
        dpr: typeof window > "u" ? 1 : window.devicePixelRatio || 1,
        reason: "initial"
      }), true);
    },
    var_core_value_sig0A151 = () => {
      var var_core_value_sigBFDA, var_core_value_sig995C;
      let var_core_value_sig364B = false;
      (var_core_value_sigBFDA = (var_core_value_sig995C = var_core_value_sig77FA.canvasFloatDomPreviewService).getPendingRequests) == null || var_core_value_sigBFDA.call(var_core_value_sig995C).forEach(var_core_value_sig6E78 => {
        var_core_value_sigF9DC(var_core_value_sig6E78) || (var_core_value_sig364B = true);
      }), var_core_value_sig364B && var_core_value_sig866D();
    };
  return var_core_value_sig0A151(), var_core_value_sigA90A.add(var_core_value_sig77FA.canvasFloatDomPreviewService["previewRequested$"].subscribe(var_core_value_sig2C9F => {
    var_core_value_sigF9DC(var_core_value_sig2C9F) || var_core_value_sig866D();
  })), var_core_value_sigA90A.add(() => {
    var_core_value_sigB4C4 && globalThis.clearTimeout(var_core_value_sigB4C4);
  }), var_core_value_sigA90A;
}
function pd(var_core_value_sig128C) {
  let var_core_value_sig39D0 = var_core_value_sig128C.injector,
    var_core_value_sig9106 = id.get(var_core_value_sig39D0);
  if (var_core_value_sig9106) return var_core_value_sig9106;
  let var_core_value_sigF98C = hd(var_core_value_sig128C.injector);
  if (var_core_value_sigF98C !== null) {
    if (var_core_value_sigF98C) {
      let var_core_value_sigB3EE1 = fd({
        previewService: var_core_value_sig128C.previewService,
        embedModelService: var_core_value_sigF98C.embedModelService,
        canvasFloatDomPreviewService: var_core_value_sigF98C.canvasFloatDomPreviewService
      });
      return id.set(var_core_value_sig39D0, var_core_value_sigB3EE1), var_core_value_sigB3EE1;
    }
    var_core_value_sig128C.retry === false || ad.has(var_core_value_sig39D0) || (ad.add(var_core_value_sig39D0), md(var_core_value_sig128C, 0));
  }
}
function md(var_core_value_sigAE02, var_core_value_sigA8DD) {
  let var_core_value_sigC35C = var_core_value_sigAE02.maxRetries ?? 240,
    var_core_value_sig349E = var_core_value_sigAE02.retryDelay ?? 250,
    var_core_value_sigF0BF = var_core_value_sigAE02.injector;
  globalThis.setTimeout(() => {
    if (pd({
      ...var_core_value_sigAE02,
      retry: false
    }) || var_core_value_sigA8DD + 1 >= var_core_value_sigC35C) {
      ad.delete(var_core_value_sigF0BF);
      return;
    }
    md(var_core_value_sigAE02, var_core_value_sigA8DD + 1);
  }, var_core_value_sig349E);
}
function hd(var_core_value_sig3A72) {
  try {
    return !var_core_value_sig3A72.has(c.CanvasFloatDomPreviewService) || !var_core_value_sig3A72.has(t.EmbedModelService) ? undefined : {
      embedModelService: var_core_value_sig3A72.get(t.EmbedModelService),
      canvasFloatDomPreviewService: var_core_value_sig3A72.get(c.CanvasFloatDomPreviewService)
    };
  } catch {
    return null;
  }
}
function gd(var_core_value_sig5E6D1, var_core_value_sig4EC9) {
  let var_core_value_sig0AE7 = var_core_value_sig5E6D1[var_core_value_sig4EC9];
  return typeof var_core_value_sig0AE7 == "string" ? var_core_value_sig0AE7 : undefined;
}
function _d() {
  return ws({
    childType: a.UniverInstanceType["UNIVER_SLIDE"],
    productName: "Slides"
  });
}
function vd(var_core_value_sigA17F) {
  var var_core_value_sigE8A41;
  return ((var_core_value_sigE8A41 = var_core_value_sigA17F.active) == null ? undefined : var_core_value_sigE8A41.embedId) === var_core_value_sigA17F.embedId && var_core_value_sigA17F.active["stage"] !== "inactive" ? var_core_value_sigA17F.active["stage"] ?? "stage1" : sr({
    embedId: var_core_value_sigA17F.embedId,
    active: var_core_value_sigA17F.active,
    fullscreen: var_core_value_sigA17F.fullscreen,
    usesDomFloatingStage: var_core_value_sigA17F.usesDomFloatingStage ?? true,
    renderScopeActive: var_core_value_sigA17F.renderScopeActive ?? false
  });
}
function yd(var_core_value_sig085E) {
  var var_core_value_sig8537;
  let var_core_value_sig53B4 = (0, c.useDependency)(a.LocaleService),
    var_core_value_sig29A4 = (0, c.useDependency)(a.Injector),
    var_core_value_sig7976 = (0, c.useDependency)(a.ThemeService),
    var_core_value_sig4785 = (0, d.useMemo)(() => var_core_value_sig29A4.createInstance(S.ObjectProvider), [var_core_value_sig29A4]),
    var_core_value_sig6339 = (0, c.useObservable)(var_core_value_sig7976.darkMode$) ?? var_core_value_sig7976.darkMode,
    {
      hostUnitId: var_core_value_sigB825,
      embedId: var_core_value_sig6236,
      childUnitId: var_core_value_sigD72F,
      slideModel: var_core_value_sigA282,
      floatingActiveService: var_core_value_sig5C0A,
      commandService: var_core_value_sig62F6,
      instanceService: var_core_value_sig90D9,
      fullscreen: var_core_value_sig7D06,
      usesDomFloatingStage: var_core_value_sigC7AE,
      renderScopeActive$: var_core_value_sig6802,
      collisionBoundary: var_core_value_sigA857
    } = var_core_value_sig085E,
    var_core_value_sigE32F = (0, c.useObservable)(() => var_core_value_sig5C0A.active$, var_core_value_sig5C0A.getActive(), false, [var_core_value_sig5C0A]),
    var_core_value_sig6DBD = (0, c.useObservable)(var_core_value_sig6802, false);
  (0, c.useObservable)(var_core_value_sigA282 === null ? null : () => var_core_value_sigA282.pageManager["slideOrder$"], [], false, [var_core_value_sigA282]);
  let var_core_value_sigBDE9 = (0, c.useObservable)(var_core_value_sigA282 === null ? null : () => var_core_value_sigA282.pageManager["activeSlideId$"], var_core_value_sigA282 == null || (var_core_value_sig8537 = var_core_value_sigA282.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sig8537.getId(), false, [var_core_value_sigA282]),
    var_core_value_sig3C8B = (var_core_value_sigA282 == null ? undefined : var_core_value_sigA282.pageManager["getSlides"]()) ?? [],
    var_core_value_sig8F5D = Math.max(0, var_core_value_sig3C8B.findIndex(var_core_value_sig4133 => var_core_value_sig4133.getId() === var_core_value_sigBDE9)),
    var_core_value_sig164F = var_core_value_sig3C8B.length,
    var_core_value_sigFD37 = var_core_value_sig53B4.t("embed-ui.slidesFloating.selectSlide"),
    var_core_value_sigB90E1 = vd({
      active: var_core_value_sigE32F,
      embedId: var_core_value_sig6236,
      fullscreen: var_core_value_sig7D06,
      renderScopeActive: var_core_value_sig6DBD,
      usesDomFloatingStage: var_core_value_sigC7AE
    }),
    var_core_value_sig6754 = () => {
      var_core_value_sig5C0A.activate({
        hostUnitId: var_core_value_sigB825,
        embedId: var_core_value_sig6236,
        childUnitId: var_core_value_sigD72F
      }, "stage2"), var_core_value_sig90D9.setCurrentUnitForType(var_core_value_sigD72F);
    },
    var_core_value_sig3B23 = var_core_value_sig8333 => {
      let var_core_value_sigB171 = var_core_value_sig3C8B[var_core_value_sig8333];
      !var_core_value_sigB171 || !var_core_value_sigA282 || (var_core_value_sig6754(), var_core_value_sigA282.pageManager["setActiveSlide"](var_core_value_sigB171.getId()));
    },
    var_core_value_sig618F = var_core_value_sigA6AB => {
      var_core_value_sig3B23(var_core_value_sig3C8B.findIndex(var_core_value_sigC50A => var_core_value_sigC50A.getId() === var_core_value_sigA6AB));
    };
  return (0, m.jsxs)("div", {
    className: (0, l.clsx)("univer-slide-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0", {
      "univer-hidden": var_core_value_sigB90E1 === "inactive",
      "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0": var_core_value_sig7D06,
      "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2": !var_core_value_sig7D06,
      "-univer-top-9": !var_core_value_sig7D06
    }),
    "data-embed-floating-menu": "true",
    "data-embed-id": var_core_value_sig6236,
    "data-embed-float-stage": var_core_value_sigB90E1,
    onPointerDown: var_core_value_sigDC81 => var_core_value_sigDC81.stopPropagation(),
    children: [(0, m.jsx)(bd, {
      title: var_core_value_sig53B4.t("embed-ui.slidesFloating.previousSlide"),
      disabled: var_core_value_sig8F5D <= 0,
      onClick: () => var_core_value_sig3B23(var_core_value_sig8F5D - 1),
      children: (0, m.jsx)(u.ArrowLeftIcon, {})
    }), (0, m.jsx)(bd, {
      title: var_core_value_sig53B4.t("embed-ui.slidesFloating.nextSlide"),
      disabled: var_core_value_sig164F === 0 || var_core_value_sig8F5D >= var_core_value_sig164F - 1,
      onClick: () => var_core_value_sig3B23(var_core_value_sig8F5D + 1),
      children: (0, m.jsx)(u.ArrowRightIcon, {})
    }), (0, m.jsx)(da, {
      title: var_core_value_sigFD37,
      children: (0, m.jsx)(l.DropdownMenu, {
        collisionBoundary: var_core_value_sigA857,
        align: "center",
        side: "bottom",
        sideOffset: 6,
        className: "univer-w-44 !univer-bg-gray-0 !univer-text-gray-900 dark:!univer-bg-gray-0 dark:!univer-text-gray-900",
        "data-embed-id": var_core_value_sig6236,
        "data-embed-floating-menu-popup": "true",
        items: var_core_value_sig3C8B.map((var_core_value_sig6378, var_core_value_sig3C58) => ({
          type: "item",
          className: "!univer-p-1",
          children: (0, m.jsxs)("span", {
            className: "univer-block univer-w-full",
            children: [(0, m.jsx)(S.SlideThumbnailItem, {
              pageId: var_core_value_sig6378.getId(),
              index: var_core_value_sig3C58,
              isActive: var_core_value_sig6378.getId() === var_core_value_sigBDE9,
              slideModel: var_core_value_sigA282,
              objectProvider: var_core_value_sig4785,
              setActivePage: var_core_value_sig618F,
              variant: "preview",
              renderIdSuffix: "embed-page-menu-" + var_core_value_sig6236,
              darkMode: var_core_value_sig6339
            }), (0, m.jsx)("span", {
              className: "univer-sr-only",
              children: var_core_value_sigFD37 + "\x20" + (var_core_value_sig3C58 + 1) + " / " + var_core_value_sig164F
            })]
          }),
          onSelect: () => var_core_value_sig3B23(var_core_value_sig3C58)
        })),
        children: (0, m.jsxs)(l.Button, {
          type: "button",
          size: "small",
          variant: "ghost",
          className: "univer-h-6 univer-gap-1 univer-px-2 univer-text-xs",
          "aria-label": var_core_value_sigFD37,
          children: [(0, m.jsx)("span", {
            children: var_core_value_sig164F === 0 ? "0 / 0" : var_core_value_sig8F5D + 1 + " / " + var_core_value_sig164F
          }), (0, m.jsx)(u.MoreDownIcon, {
            className: "univer-size-3"
          })]
        })
      })
    }), !var_core_value_sig7D06 && (0, m.jsx)(fa, {
      hostUnitId: var_core_value_sigB825,
      embedId: var_core_value_sig6236,
      variant: "menu"
    }), (0, m.jsx)(l.Separator, {
      orientation: "vertical"
    }), (0, m.jsx)(bd, {
      title: var_core_value_sig53B4.t("embed-ui.deleteBlock"),
      className: "univer-text-red-500\x20hover:univer-text-red-600",
      onClick: async () => {
        await var_core_value_sig62F6.executeCommand(t.RemoveEmbedCommand["id"], {
          hostUnitId: var_core_value_sigB825,
          embedId: var_core_value_sig6236
        });
      },
      children: (0, m.jsx)(u.DeleteIcon, {})
    })]
  });
}
function bd(var_core_value_sigE7F9) {
  let {
    children: var_core_value_sigD55D,
    title: var_core_value_sig44AF,
    disabled: var_core_value_sigB081,
    className: var_core_value_sig0476,
    onClick: var_core_value_sig797E
  } = var_core_value_sigE7F9;
  return (0, m.jsx)(da, {
    title: var_core_value_sig44AF,
    children: (0, m.jsx)(l.Button, {
      type: "button",
      size: "small",
      variant: "ghost",
      className: (0, l.clsx)("univer-size-6 univer-p-0", var_core_value_sig0476),
      "aria-label": var_core_value_sig44AF,
      disabled: var_core_value_sigB081,
      onClick: var_core_value_sig797E,
      children: var_core_value_sigD55D
    })
  });
}
function xd() {
  return Tc({
    childType: a.UniverInstanceType["UNIVER_SLIDE"],
    mount: Sd
  });
}
function Sd(var_core_value_sig96EA) {
  let {
      menu: var_core_value_sigCE7A,
      portalContainer: var_core_value_sig8EB4
    } = Sc(var_core_value_sig96EA),
    var_core_value_sigF495 = nn(var_core_value_sigCE7A),
    var_core_value_sig5220 = var_core_value_sig96EA.injector["get"](ce),
    var_core_value_sig072F = var_core_value_sig96EA.injector["get"](a.ICommandService),
    var_core_value_sigDAF6 = var_core_value_sig96EA.injector["get"](a.IUniverInstanceService),
    var_core_value_sigB921 = var_core_value_sigDAF6.getUnit(var_core_value_sig96EA.childUnitId, a.UniverInstanceType["UNIVER_SLIDE"]);
  return var_core_value_sigF495.render((0, d.createElement)(Kt, {
    injector: var_core_value_sig96EA.runtimeScope["injector"],
    mountContainer: var_core_value_sig8EB4,
    embedId: var_core_value_sig96EA.embedId,
    passThroughWheelGestures: var_core_value_sig96EA.renderScope["mode"] === "float" && !var_core_value_sig96EA.renderScope["fullscreen"]
  }, (0, d.createElement)(yd, {
    collisionBoundary: var_core_value_sig96EA.renderScope["fullscreen"] ? undefined : var_core_value_sig96EA.injector["get"](c.ILayoutService).getContentElement(),
    hostUnitId: var_core_value_sig96EA.hostUnitId,
    embedId: var_core_value_sig96EA.embedId,
    childUnitId: var_core_value_sig96EA.childUnitId,
    slideModel: var_core_value_sigB921 ?? null,
    floatingActiveService: var_core_value_sig5220,
    commandService: var_core_value_sig072F,
    instanceService: var_core_value_sigDAF6,
    fullscreen: !!var_core_value_sig96EA.renderScope["fullscreen"],
    usesDomFloatingStage: var_core_value_sig96EA.descriptor["entry"] !== "slides-floating-object",
    renderScopeActive$: var_core_value_sig96EA.renderScope["active$"]
  }))), (0, a.toDisposable)(() => {
    rn(var_core_value_sigF495), globalThis.setTimeout(() => var_core_value_sigCE7A.remove(), 0);
  });
}
function Cd(var_core_value_sigACB71, var_core_value_sigD504, var_core_value_sig8D55) {
  return {
    ...(0, t.createSlidesPageListBlockHostAdapterContribution)(var_core_value_sigACB71, var_core_value_sigD504),
    activateAnchor: var_core_value_sig1D57 => {
      var_core_value_sig8D55 == null || var_core_value_sig8D55.unmountFloatingSessions(var_core_value_sig1D57.hostUnitId);
      let var_core_value_sig45F01 = var_core_value_sigD504 == null ? undefined : var_core_value_sigD504.getUnit(var_core_value_sig1D57.hostUnitId, a.UniverInstanceType["UNIVER_SLIDE"]),
        var_core_value_sig7AFB = () => {
          var var_core_value_sig11D0, var_core_value_sigB8ED;
          return var_core_value_sig45F01 == null || (var_core_value_sig11D0 = var_core_value_sig45F01.pageManager) == null || (var_core_value_sigB8ED = var_core_value_sig11D0.setActiveSlide) == null ? undefined : var_core_value_sigB8ED.call(var_core_value_sig11D0, var_core_value_sig1D57.hostAnchorId);
        };
      if (typeof window > "u") {
        var_core_value_sig7AFB();
        return;
      }
      window.requestAnimationFrame(var_core_value_sig7AFB);
    }
  };
}
function wd() {
  return {
    hostType: a.UniverInstanceType["UNIVER_SLIDE"],
    entry: "slides-floating-object",
    layout: "scroll-contained",
    supportedLayouts: ["scroll-contained", "doc-width-scale", "aspect-fit", "content-bounds-fit"],
    menuBehavior: "floating",
    mount: var_core_value_sig54CD => {
      let var_core_value_sigF4AD = Ed("data-embed-slides-floating-object-host", var_core_value_sig54CD.descriptor["hostAnchorId"]);
      return var_core_value_sigF4AD ? {
        hostElement: var_core_value_sigF4AD
      } : {};
    }
  };
}
function Td() {
  return {
    hostType: a.UniverInstanceType["UNIVER_SLIDE"],
    entry: "slides-page-list-block",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: var_core_value_sigF802 => {
      let var_core_value_sig90E4 = Ed("data-embed-slides-page-list-host", var_core_value_sigF802.descriptor["hostAnchorId"]);
      return var_core_value_sig90E4 ? {
        hostElement: var_core_value_sig90E4
      } : {};
    }
  };
}
function Ed(var_core_value_sig3BA7, var_core_value_sigF0C2) {
  return document.querySelector("[" + var_core_value_sig3BA7 + "=\x22" + Dd(var_core_value_sigF0C2) + "\x22]");
}
function Dd(var_core_value_sig8183) {
  return var_core_value_sig8183.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function Od() {
  return {
    childType: a.UniverInstanceType["UNIVER_SLIDE"],
    handleWheel: () => false
  };
}
function kd(var_core_value_sig7174) {
  return {
    childType: a.UniverInstanceType["UNIVER_SLIDE"],
    supportedLayouts: ["tab-peer", "aspect-fit", "scroll-contained"],
    beforeDeactivate: Ad,
    mount: var_core_value_sig23B5 => jd(var_core_value_sig23B5, var_core_value_sig7174)
  };
}
function Ad(var_core_value_sig878C) {
  let var_core_value_sigA2D8 = var_core_value_sig878C.runtimeScope["injector"];
  if (!(var_core_value_sigA2D8 != null && var_core_value_sigA2D8.has(S.ISlideDrawingStateService))) return;
  let var_core_value_sig5C57 = var_core_value_sigA2D8.get(S.ISlideDrawingStateService);
  var_core_value_sig5C57.clearActiveEditing(), var_core_value_sig5C57.clearSelection();
}
function jd(var_core_value_sigB90D, var_core_value_sig0752) {
  let var_core_value_sig66FC = var_core_value_sigB90D.injector["get"](a.IUniverInstanceService).getUnit(var_core_value_sigB90D.childUnitId, a.UniverInstanceType["UNIVER_SLIDE"]);
  if (!var_core_value_sig66FC) return;
  let var_core_value_sig2236 = var_core_value_sigB90D.runtimeScope["injector"];
  if (!var_core_value_sig2236) return;
  let var_core_value_sigA800 = Md(var_core_value_sigB90D.childUnitId, var_core_value_sig2236.get(S.ISlideDrawingStateService), var_core_value_sig2236.get(a.IContextService)),
    var_core_value_sig45BD = Xs(var_core_value_sigB90D, var_core_value_sig0752, var_core_value_sigB560 => Nd(var_core_value_sig66FC, var_core_value_sigB560)),
    var_core_value_sig5B24 = var_core_value_sigB90D.runtimeScope["roots"].content,
    var_core_value_sig782C = var_core_value_sigB90D.runtimeScope["roots"].canvas,
    var_core_value_sig7454 = var_core_value_sigB90D.injector["get"](p.IRenderManagerService),
    var_core_value_sig0AC2 = Pd(var_core_value_sigB90D),
    var_core_value_sigFDD5 = var_core_value_sig782C ? Et(var_core_value_sig7454, var_core_value_sigB90D.childUnitId, var_core_value_sig2236) : undefined;
  if (var_core_value_sigFDD5 && var_core_value_sig782C && !var_core_value_sig0AC2) {
    try {
      var var_core_value_sigA7901, var_core_value_sigB2051;
      (var_core_value_sigA7901 = (var_core_value_sigB2051 = var_core_value_sigFDD5.engine).unmount) == null || var_core_value_sigA7901.call(var_core_value_sigB2051);
    } catch {}
    var_core_value_sigFDD5.engine["mount"](var_core_value_sig782C), Ot(var_core_value_sigFDD5, {
      activate: true
    }), var_core_value_sig782C.dataset["embedChildRenderUnitId"] = var_core_value_sigB90D.childUnitId, var_core_value_sig782C.dataset["embedChildRenderMode"] = "slide-canvas";
  }
  let var_core_value_sigE037 = nn(var_core_value_sig5B24);
  return var_core_value_sig5B24.dataset["embedChildRenderUnitId"] = var_core_value_sigB90D.childUnitId, var_core_value_sig5B24.dataset["embedChildRenderMode"] = "slide-workbench", var_core_value_sigE037.render((0, m.jsx)(Kt, {
    injector: var_core_value_sig2236,
    mountContainer: var_core_value_sigB90D.runtimeScope["roots"].popup,
    embedId: var_core_value_sigB90D.embedId,
    passThroughWheelGestures: var_core_value_sigB90D.renderScope["mode"] === "float" && !var_core_value_sigB90D.renderScope["fullscreen"],
    children: var_core_value_sig0AC2 ? (0, m.jsx)(S.SlideEmbedFloatingPreview, {
      unitId: var_core_value_sigB90D.childUnitId,
      active$: var_core_value_sigB90D.renderScope["active$"]
    }) : (0, m.jsx)(S.SlideEmbedChildWorkbench, {})
  })), (0, a.toDisposable)(() => {
    var_core_value_sigA800.dispose(), var_core_value_sig45BD.dispose();
    try {
      var var_core_value_sigB46F, var_core_value_sig440F;
      var_core_value_sigFDD5 == null || (var_core_value_sig440F = (var_core_value_sigB46F = var_core_value_sigFDD5.engine).unmount) == null || var_core_value_sig440F.call(var_core_value_sigB46F);
    } catch {}
    var_core_value_sig7454.removeRender(var_core_value_sigB90D.childUnitId), rn(var_core_value_sigE037), var_core_value_sig5B24.isConnected && (var_core_value_sig5B24.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig5B24.removeAttribute("data-embed-child-render-mode")), var_core_value_sig782C != null && var_core_value_sig782C.isConnected && (var_core_value_sig782C.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig782C.removeAttribute("data-embed-child-render-mode")), var_core_value_sig2236.dispose();
  });
}
function Md(var_core_value_sig406F, var_core_value_sig6E141, var_core_value_sig4FCA) {
  let var_core_value_sig0A41 = var_core_value_sig6E141.state$["subscribe"](var_core_value_sigB857 => {
    var var_core_value_sig0743;
    var_core_value_sig4FCA.setContextValue(a.FOCUSING_COMMON_DRAWINGS, ((var_core_value_sig0743 = var_core_value_sigB857.context) == null ? undefined : var_core_value_sig0743.unitId) === var_core_value_sig406F && var_core_value_sigB857.selectedIds["length"] > 0);
  });
  return (0, a.toDisposable)(() => {
    var_core_value_sig0A41.unsubscribe(), var_core_value_sig4FCA.setContextValue(a.FOCUSING_COMMON_DRAWINGS, false);
  });
}
function Nd(var_core_value_sigCB6A, var_core_value_sigB27A) {
  var var_core_value_sigBECF, var_core_value_sigD925;
  let var_core_value_sig39AE = var_core_value_sigB27A == null ? undefined : var_core_value_sigB27A.pageId,
    var_core_value_sigD207 = var_core_value_sig39AE && var_core_value_sigCB6A.pageManager["getSlide"](var_core_value_sig39AE) ? var_core_value_sig39AE : (var_core_value_sigBECF = var_core_value_sigCB6A.pageManager["getSlides"]()[0]) == null ? undefined : var_core_value_sigBECF.getId();
  var_core_value_sigD207 && ((var_core_value_sigD925 = var_core_value_sigCB6A.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sigD925.getId()) !== var_core_value_sigD207 && var_core_value_sigCB6A.pageManager["setActiveSlide"](var_core_value_sigD207);
}
function Pd(var_core_value_sig2158) {
  return var_core_value_sig2158.renderScope["mode"] === "float" && !var_core_value_sig2158.renderScope["fullscreen"] && var_core_value_sig2158.layout === "aspect-fit";
}
let Fd = class {
  constructor(var_core_value_sigFDAF, var_core_value_sigFC34) {
    this._instanceService = var_core_value_sigFDAF, this._renderManagerService = var_core_value_sigFC34, V(this, "childType", a.UniverInstanceType["UNIVER_SLIDE"]);
  }
  collectViewState(var_core_value_sig162E) {
    var var_core_value_sigB564, var_core_value_sig5989;
    let var_core_value_sigC36D = this._getSlideModel(var_core_value_sig162E.childUnitId),
      var_core_value_sig580E = (var_core_value_sigC36D == null || (var_core_value_sigB564 = var_core_value_sigC36D.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sigB564.getId()) ?? "";
    return {
      unitId: var_core_value_sig162E.childUnitId,
      pageId: var_core_value_sig580E,
      scaleMode: "fit",
      zoomRatio: var_core_value_sigC36D == null || (var_core_value_sig5989 = var_core_value_sigC36D.getZoomRatio) == null ? undefined : var_core_value_sig5989.call(var_core_value_sigC36D)
    };
  }
  restoreViewState(var_core_value_sigF338, var_core_value_sig6EEE) {
    let var_core_value_sigC0CF = this._getSlideModel(var_core_value_sigF338.childUnitId);
    !var_core_value_sigC0CF || !var_core_value_sig6EEE.pageId || !var_core_value_sigC0CF.pageManager["getSlide"](var_core_value_sig6EEE.pageId) || var_core_value_sigC0CF.pageManager["setActiveSlide"](var_core_value_sig6EEE.pageId);
  }
  renderPreview(var_core_value_sig10D4) {
    var var_core_value_sigE597, var_core_value_sig4C3E, var_core_value_sig616D;
    let var_core_value_sig0F8A = this._getSlideModel(var_core_value_sig10D4.childUnitId),
      var_core_value_sig2FD4 = (var_core_value_sigE597 = var_core_value_sig10D4.viewState) == null ? undefined : var_core_value_sigE597.pageId;
    var_core_value_sig0F8A && var_core_value_sig2FD4 && var_core_value_sig0F8A.pageManager["getSlide"](var_core_value_sig2FD4) && var_core_value_sig0F8A.pageManager["setActiveSlide"](var_core_value_sig2FD4);
    let var_core_value_sig9AF9 = this._getOrCreateRender(var_core_value_sig10D4.childUnitId),
      var_core_value_sig662D = var_core_value_sig9AF9 == null || (var_core_value_sig4C3E = var_core_value_sig9AF9.engine) == null || (var_core_value_sig616D = var_core_value_sig4C3E.getCanvasElement) == null ? undefined : var_core_value_sig616D.call(var_core_value_sig4C3E);
    if (var_core_value_sig9AF9 && (!var_core_value_sig662D || var_core_value_sig662D.width <= 1 || var_core_value_sig662D.height <= 1) && (var_core_value_sig662D = Id(var_core_value_sig9AF9, var_core_value_sig10D4.width, var_core_value_sig10D4.height)), !(!var_core_value_sig662D || var_core_value_sig662D.width <= 1 || var_core_value_sig662D.height <= 1 || typeof var_core_value_sig662D.toDataURL != "function")) try {
      let var_core_value_sig8EAE = var_core_value_sig0F8A ? (0, S.resolveSlideLogicalPageSize)(var_core_value_sig0F8A.getSnapshot().defaultPageSize) : undefined,
        var_core_value_sig1CDD = var_core_value_sig8EAE ? var_core_value_sig8EAE.width / var_core_value_sig8EAE.height : undefined,
        var_core_value_sig0DB11 = zd(var_core_value_sig9AF9, var_core_value_sig662D.width, var_core_value_sig662D.height) ?? (var_core_value_sig1CDD ? Ld(var_core_value_sig662D.width, var_core_value_sig662D.height, var_core_value_sig1CDD) : undefined);
      return Bd(var_core_value_sig662D, var_core_value_sig10D4.width, var_core_value_sig10D4.height, var_core_value_sig10D4.dpr, var_core_value_sig0DB11) ?? var_core_value_sig662D.toDataURL("image/png");
    } catch {
      return;
    }
  }
  _getSlideModel(var_core_value_sig1452) {
    return this._instanceService["getUnit"](var_core_value_sig1452, a.UniverInstanceType["UNIVER_SLIDE"]) ?? undefined;
  }
  _getOrCreateRender(var_core_value_sig6050) {
    let var_core_value_sig896E = this._renderManagerService["getRenderUnitById"](var_core_value_sig6050);
    if (var_core_value_sig896E) return var_core_value_sig896E;
    try {
      return this._renderManagerService["createRender"](var_core_value_sig6050);
    } catch {
      return;
    }
  }
};
Fd = Z([X(0, a.IUniverInstanceService), X(1, p.IRenderManagerService)], Fd);
function Id(var_core_value_sig2D50, var_core_value_sig265C, var_core_value_sig3A5A) {
  if (typeof document > "u") return;
  let var_core_value_sig639E = var_core_value_sig2D50.engine,
    var_core_value_sig5EFD = var_core_value_sig2D50.scene;
  if (!(var_core_value_sig639E != null && var_core_value_sig639E.mount) || !var_core_value_sig639E.resize) return;
  let var_core_value_sig2D7F = document.createElement("div");
  var_core_value_sig2D7F.style["position"] = "fixed", var_core_value_sig2D7F.style["left"] = "-100000px", var_core_value_sig2D7F.style["top"] = "-100000px", var_core_value_sig2D7F.style["width"] = Math.max(1, Math.round(var_core_value_sig265C)) + "px", var_core_value_sig2D7F.style["height"] = Math.max(1, Math.round(var_core_value_sig3A5A)) + "px", var_core_value_sig2D7F.style["pointerEvents"] = "none", var_core_value_sig2D7F.dataset["embedSlidePreviewCanvasHost"] = "true", document.body["appendChild"](var_core_value_sig2D7F);
  try {
    var var_core_value_sigC2F7, var_core_value_sig94ED, var_core_value_sig9DEE;
    return var_core_value_sig639E.mount(var_core_value_sig2D7F), var_core_value_sig639E.resize(), var_core_value_sig5EFD == null || (var_core_value_sigC2F7 = var_core_value_sig5EFD.makeDirty) == null || var_core_value_sigC2F7.call(var_core_value_sig5EFD, true), var_core_value_sig5EFD == null || (var_core_value_sig94ED = var_core_value_sig5EFD.render) == null || var_core_value_sig94ED.call(var_core_value_sig5EFD), (var_core_value_sig9DEE = var_core_value_sig639E.getCanvasElement) == null ? undefined : var_core_value_sig9DEE.call(var_core_value_sig639E);
  } finally {
    var_core_value_sig2D7F.remove();
  }
}
function Ld(var_core_value_sigED131, var_core_value_sig9272, var_core_value_sigC397) {
  let var_core_value_sigF065 = Math.max(1, Math.round(var_core_value_sigED131)),
    var_core_value_sigC523 = Math.max(1, Math.round(var_core_value_sig9272));
  if (!Number.isFinite(var_core_value_sigC397) || var_core_value_sigC397 <= 0) return {
    sx: 0,
    sy: 0,
    sWidth: var_core_value_sigF065,
    sHeight: var_core_value_sigC523
  };
  if (var_core_value_sigF065 / var_core_value_sigC523 > var_core_value_sigC397) {
    let var_core_value_sig6D9B = Math.round(var_core_value_sigC523 * var_core_value_sigC397);
    return {
      sx: Math.max(0, Math.round((var_core_value_sigF065 - var_core_value_sig6D9B) / 2)),
      sy: 0,
      sWidth: var_core_value_sig6D9B,
      sHeight: var_core_value_sigC523
    };
  }
  let var_core_value_sigAD8E = Math.round(var_core_value_sigF065 / var_core_value_sigC397);
  return {
    sx: 0,
    sy: Math.max(0, Math.round((var_core_value_sigC523 - var_core_value_sigAD8E) / 2)),
    sWidth: var_core_value_sigF065,
    sHeight: var_core_value_sigAD8E
  };
}
function Rd(var_core_value_sig2E9E, var_core_value_sig0C9A, var_core_value_sig0F5D1, var_core_value_sigD0D2, var_core_value_sig9D24) {
  if (typeof var_core_value_sig0F5D1.left != "number" || typeof var_core_value_sig0F5D1.top != "number" || typeof var_core_value_sig0F5D1.width != "number" || typeof var_core_value_sig0F5D1.height != "number" || var_core_value_sig0F5D1.width <= 0 || var_core_value_sig0F5D1.height <= 0) return;
  let var_core_value_sig5801 = Math.max(0, Math.round(var_core_value_sig0F5D1.left * var_core_value_sigD0D2)),
    var_core_value_sigE397 = Math.max(0, Math.round(var_core_value_sig0F5D1.top * var_core_value_sig9D24));
  return {
    sx: var_core_value_sig5801,
    sy: var_core_value_sigE397,
    sWidth: Math.min(Math.max(1, Math.round(var_core_value_sig0F5D1.width * var_core_value_sigD0D2)), Math.max(1, Math.round(var_core_value_sig2E9E - var_core_value_sig5801))),
    sHeight: Math.min(Math.max(1, Math.round(var_core_value_sig0F5D1.height * var_core_value_sig9D24)), Math.max(1, Math.round(var_core_value_sig0C9A - var_core_value_sigE397)))
  };
}
function zd(var_core_value_sigCD88, var_core_value_sigD1D1, var_core_value_sigCE2A) {
  var var_core_value_sig30B1, var_core_value_sig68BA;
  let var_core_value_sigECFC1 = var_core_value_sigCD88 == null ? undefined : var_core_value_sigCD88.scene,
    var_core_value_sig874F = var_core_value_sigECFC1 == null || (var_core_value_sig30B1 = var_core_value_sigECFC1.getObject) == null ? undefined : var_core_value_sig30B1.call(var_core_value_sigECFC1, S.SLIDE_PAGE_RECT_KEY),
    var_core_value_sigE64F = var_core_value_sigECFC1 == null || (var_core_value_sig68BA = var_core_value_sigECFC1.getAncestorScale) == null ? undefined : var_core_value_sig68BA.call(var_core_value_sigECFC1),
    var_core_value_sigC26D = (var_core_value_sigE64F == null ? undefined : var_core_value_sigE64F.scaleX) ?? (var_core_value_sigECFC1 == null ? undefined : var_core_value_sigECFC1.scaleX) ?? 1,
    var_core_value_sig516A = (var_core_value_sigE64F == null ? undefined : var_core_value_sigE64F.scaleY) ?? (var_core_value_sigECFC1 == null ? undefined : var_core_value_sigECFC1.scaleY) ?? var_core_value_sigC26D;
  return var_core_value_sig874F ? Rd(var_core_value_sigD1D1, var_core_value_sigCE2A, var_core_value_sig874F, var_core_value_sigC26D, var_core_value_sig516A) : undefined;
}
function Bd(var_core_value_sig0D9D, var_core_value_sigD9A3, var_core_value_sigE8A8, var_core_value_sig0552, var_core_value_sig3DF9) {
  if (typeof document > "u" || !var_core_value_sig3DF9) return;
  let var_core_value_sig3463 = document.createElement("canvas");
  var_core_value_sig3463.width = Math.max(1, Math.round(var_core_value_sigD9A3 * Math.max(1, var_core_value_sig0552 || 1))), var_core_value_sig3463.height = Math.max(1, Math.round(var_core_value_sigE8A8 * Math.max(1, var_core_value_sig0552 || 1)));
  let var_core_value_sig5D99 = null;
  try {
    var_core_value_sig5D99 = var_core_value_sig3463.getContext("2d");
  } catch {
    return;
  }
  if (var_core_value_sig5D99) return var_core_value_sig5D99.drawImage(var_core_value_sig0D9D, var_core_value_sig3DF9.sx, var_core_value_sig3DF9.sy, var_core_value_sig3DF9.sWidth, var_core_value_sig3DF9.sHeight, 0, 0, var_core_value_sig3463.width, var_core_value_sig3463.height), var_core_value_sig3463.toDataURL("image/png");
}
const Vd = "slides-page-list-block";
function Hd(var_core_value_sigE323, var_core_value_sig6616) {
  let var_core_value_sigDFF6 = false,
    var_core_value_sig62DF,
    var_core_value_sig064B,
    var_core_value_sig7CBA1,
    var_core_value_sigEF51 = var_core_value_sig9425 => {
      if (var_core_value_sigDFF6 || var_core_value_sig064B || !var_core_value_sig9425.image) return;
      let var_core_value_sigCE16 = Qd(var_core_value_sig9425.image);
      var_core_value_sigCE16 && (var_core_value_sig62DF = $d(var_core_value_sig6616.hostElement, var_core_value_sig62DF, var_core_value_sigCE16));
    },
    var_core_value_sig2414 = var_core_value_sigE323.previewService["previewUpdated$"].subscribe(var_core_value_sig0207 => {
      var_core_value_sig0207.embedId === var_core_value_sig6616.embedId && (!var_core_value_sig6616.childUnitId || var_core_value_sig0207.childUnitId === var_core_value_sig6616.childUnitId) && var_core_value_sigEF51(var_core_value_sig0207);
    });
  return Wd(var_core_value_sigE323, var_core_value_sig6616).then(var_core_value_sig5FE7 => {
    if (var_core_value_sigDFF6 || !var_core_value_sig5FE7) return;
    let var_core_value_sig5BA5 = Ud(var_core_value_sigE323, var_core_value_sig6616, var_core_value_sig5FE7, () => var_core_value_sigDFF6);
    if (var_core_value_sig5BA5) {
      var_core_value_sig064B = var_core_value_sig5BA5.lease, var_core_value_sig7CBA1 = var_core_value_sig5BA5.elements, var_core_value_sig62DF = undefined;
      return;
    }
    Gd(var_core_value_sigE323, var_core_value_sig6616, var_core_value_sig5FE7, var_core_value_sigEF51, () => var_core_value_sigDFF6).then(var_core_value_sig68A2 => {
      !var_core_value_sigDFF6 && var_core_value_sig68A2 && (var_core_value_sig62DF = $d(var_core_value_sig6616.hostElement, var_core_value_sig62DF, var_core_value_sig68A2));
    });
  }, () => {}), (0, a.toDisposable)(() => {
    var_core_value_sigDFF6 = true, var_core_value_sig2414.unsubscribe(), var_core_value_sig064B == null || var_core_value_sig064B.dispose(), var_core_value_sig064B = undefined, var_core_value_sig7CBA1 == null || var_core_value_sig7CBA1.dispose(), var_core_value_sig7CBA1 = undefined, var_core_value_sig62DF == null || var_core_value_sig62DF.remove(), var_core_value_sig62DF = undefined;
  });
}
function Ud(var_core_value_sig1978, var_core_value_sig6B47, var_core_value_sigE7EA, var_core_value_sigC7AE1) {
  let var_core_value_sig8303 = Kd(),
    var_core_value_sigC60D;
  try {
    var var_core_value_sigD93B;
    if (var_core_value_sigC60D = var_core_value_sig1978.runtimeHostLeaseService["acquire"]({
      ...var_core_value_sigE7EA,
      mode: "readonly"
    }, var_core_value_sig8303.runtimeHost), !var_core_value_sigC60D.session["context"]) throw Error("EMBED_PRESENTATION_RUNTIME_CONTEXT_NOT_RESOLVED");
    if (var_core_value_sigC7AE1()) {
      var_core_value_sigC60D.dispose(), var_core_value_sig8303.dispose();
      return;
    }
    var_core_value_sig1978.activationService["focusHostForPassiveRuntime"](var_core_value_sigE7EA), qd(var_core_value_sig8303.runtimeHost);
    let var_core_value_sig4F79 = var_core_value_sigC60D.session["context"],
      var_core_value_sig2BD8 = (var_core_value_sigD93B = var_core_value_sig1978.blockRegistry["get"](var_core_value_sigC60D.session["childType"])) == null ? undefined : var_core_value_sigD93B.presentationPolicy;
    return var_core_value_sig8303.addDisposer(Jd(var_core_value_sig8303.runtimeHost, var_core_value_sig4F79, var_core_value_sig6B47.entry, var_core_value_sig2BD8)), var_core_value_sig6B47.hostElement["replaceChildren"](var_core_value_sig8303.surface), var_core_value_sig8303.addDisposer(Yd(var_core_value_sig1978, var_core_value_sigC60D, var_core_value_sig8303.runtimeHost, var_core_value_sig8303.interactionGate, var_core_value_sig6B47.entry, var_core_value_sig2BD8)), {
      lease: var_core_value_sigC60D,
      elements: var_core_value_sig8303
    };
  } catch {
    var_core_value_sigC60D == null || var_core_value_sigC60D.dispose(), var_core_value_sig8303.dispose();
    return;
  }
}
async function Wd(var_core_value_sig7228, var_core_value_sig121B) {
  let var_core_value_sig68D4 = var_core_value_sig7228.embedModelService["getDescriptor"](var_core_value_sig121B.hostUnitId, var_core_value_sig121B.embedId) ?? Zd(var_core_value_sig121B);
  if (var_core_value_sig68D4) {
    try {
      var_core_value_sig68D4 = await var_core_value_sig7228.restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sig68D4
      });
    } catch {}
    return var_core_value_sig68D4.childUnitId && var_core_value_sig68D4.childType != null ? var_core_value_sig68D4 : undefined;
  }
}
async function Gd(var_core_value_sig94AB, var_core_value_sigB061, var_core_value_sigA93D, var_core_value_sig2A16, var_core_value_sigC12C) {
  var var_core_value_sig9C36, var_core_value_sig1AD1;
  let var_core_value_sig551C = await ((var_core_value_sig9C36 = var_core_value_sig94AB.sceneCanvasCaptureService) == null ? undefined : var_core_value_sig9C36.captureByHostAnchorId(var_core_value_sigB061.hostAnchorId));
  if (var_core_value_sigC12C()) return;
  if (var_core_value_sig551C) return Qd(var_core_value_sig551C);
  let var_core_value_sigCEA1 = var_core_value_sigA93D.childUnitId,
    var_core_value_sigF3B1 = var_core_value_sigA93D.childType;
  if (!var_core_value_sigCEA1 || var_core_value_sigF3B1 == null) return;
  let var_core_value_sig4923 = (var_core_value_sig1AD1 = var_core_value_sig94AB.sceneCanvasCaptureService) == null ? undefined : var_core_value_sig1AD1.getContextByHostAnchorId(var_core_value_sigB061.hostAnchorId);
  var_core_value_sig2A16(var_core_value_sig94AB.previewService["requestPreview"]({
    descriptor: {
      ...var_core_value_sigA93D,
      mode: "readonly"
    },
    childUnitId: var_core_value_sigCEA1,
    childType: var_core_value_sigF3B1,
    width: Math.max(1, var_core_value_sigB061.width),
    height: Math.max(1, var_core_value_sigB061.height),
    dpr: Math.max(1, Math.min(2, var_core_value_sigB061.dpr)),
    reason: "initial",
    context: var_core_value_sig4923
  }));
}
function Kd() {
  let var_core_value_sig21581 = document.createElement("div");
  var_core_value_sig21581.dataset["embedSlidesPresentationSurface"] = "true", var_core_value_sig21581.style["position"] = "absolute", var_core_value_sig21581.style["inset"] = "0", var_core_value_sig21581.style["isolation"] = "isolate", var_core_value_sig21581.style["overflow"] = "hidden";
  let var_core_value_sigCA6A = document.createElement("div");
  var_core_value_sigCA6A.dataset["embedPresentationRuntime"] = "true", var_core_value_sigCA6A.dataset["embedSlidesPresentationRuntime"] = "true", var_core_value_sigCA6A.style["position"] = "absolute", var_core_value_sigCA6A.style["inset"] = "0", var_core_value_sigCA6A.style["zIndex"] = "0", var_core_value_sigCA6A.style["overflow"] = "hidden", var_core_value_sigCA6A.style["pointerEvents"] = "none";
  let var_core_value_sig1E91 = document.createElement("div");
  var_core_value_sig1E91.dataset["embedSlidesPresentationInteractionGate"] = "true", var_core_value_sig1E91.style["position"] = "absolute", var_core_value_sig1E91.style["inset"] = "0", var_core_value_sig1E91.style["zIndex"] = "1", var_core_value_sig1E91.style["pointerEvents"] = "auto", var_core_value_sig1E91.style["touchAction"] = "none", var_core_value_sig21581.append(var_core_value_sigCA6A, var_core_value_sig1E91);
  let var_core_value_sig971F = [];
  return {
    surface: var_core_value_sig21581,
    runtimeHost: var_core_value_sigCA6A,
    interactionGate: var_core_value_sig1E91,
    addDisposer: var_core_value_sigC182 => var_core_value_sig971F.push(var_core_value_sigC182),
    dispose: () => {
      var_core_value_sig971F.splice(0).reverse().forEach(var_core_value_sigCC17 => var_core_value_sigCC17()), var_core_value_sig21581.remove();
    }
  };
}
function qd(var_core_value_sig4391) {
  var_core_value_sig4391.style["pointerEvents"] = "none";
}
function Jd(var_core_value_sig0F6D, var_core_value_sig2F21, var_core_value_sig135D, var_core_value_sig7F7F) {
  if (var_core_value_sig135D !== Vd || !(var_core_value_sig7F7F != null && var_core_value_sig7F7F.getChromeCss)) return () => {};
  let var_core_value_sigC16D = var_core_value_sig7F7F.getChromeCss({
    childContext: var_core_value_sig2F21,
    entry: var_core_value_sig135D,
    runtimeHost: var_core_value_sig0F6D
  });
  if (!var_core_value_sigC16D) return () => {};
  let var_core_value_sigE03A = var_core_value_sig0F6D.ownerDocument["createElement"]("style");
  return var_core_value_sigE03A.dataset["embedSlidesPresentationChrome"] = "true", var_core_value_sigE03A.textContent = var_core_value_sigC16D, var_core_value_sig0F6D.prepend(var_core_value_sigE03A), () => var_core_value_sigE03A.remove();
}
function Yd(var_core_value_sigE96A, var_core_value_sigC161, var_core_value_sig6CBF, var_core_value_sig73CC, var_core_value_sig3CAF, var_core_value_sig90B5) {
  let var_core_value_sigD4CD = var_core_value_sig13731 => {
      var_core_value_sig13731.preventDefault(), var_core_value_sig13731.stopPropagation();
    },
    var_core_value_sig551D = var_core_value_sig2D20 => {
      if (var_core_value_sig3CAF === Vd && Xd(var_core_value_sig6CBF, var_core_value_sigC161, var_core_value_sig90B5, var_core_value_sig2D20.clientX, var_core_value_sig2D20.clientY)) {
        var_core_value_sig2D20.preventDefault(), var_core_value_sig2D20.stopPropagation();
        return;
      }
      var_core_value_sigD4CD(var_core_value_sig2D20);
    },
    var_core_value_sigE0D7 = var_core_value_sigB4E5 => {
      var var_core_value_sigA9C9;
      let var_core_value_sigDA64 = var_core_value_sigC161.session["context"];
      if (!var_core_value_sigDA64) return;
      let var_core_value_sigBE3F = {
          ...var_core_value_sigDA64,
          event: var_core_value_sigB4E5,
          stage: "inactive",
          source: "wheel"
        },
        var_core_value_sig072F1 = var_core_value_sigE96A.passiveWheelHandlerRegistry["handleWheel"](var_core_value_sigBE3F),
        var_core_value_sigD794 = !var_core_value_sig072F1 && ((var_core_value_sigA9C9 = var_core_value_sigE96A.passiveViewportRegistry["get"](var_core_value_sigDA64.childType, var_core_value_sigDA64.layout)) == null ? undefined : var_core_value_sigA9C9.handleWheel(var_core_value_sigBE3F)) === true;
      (var_core_value_sig072F1 || var_core_value_sigD794) && (var_core_value_sigB4E5.preventDefault(), var_core_value_sigB4E5.stopPropagation(), var_core_value_sigB4E5.stopImmediatePropagation());
    },
    var_core_value_sigF746 = ["pointerdown", "pointerup", "dblclick", "contextmenu"];
  return var_core_value_sigF746.forEach(var_core_value_sigCB821 => var_core_value_sig73CC.addEventListener(var_core_value_sigCB821, var_core_value_sigD4CD)), var_core_value_sig73CC.addEventListener("click", var_core_value_sig551D), var_core_value_sig73CC.addEventListener("wheel", var_core_value_sigE0D7, {
    passive: false
  }), () => {
    var_core_value_sigF746.forEach(var_core_value_sig32AE => var_core_value_sig73CC.removeEventListener(var_core_value_sig32AE, var_core_value_sigD4CD)), var_core_value_sig73CC.removeEventListener("click", var_core_value_sig551D), var_core_value_sig73CC.removeEventListener("wheel", var_core_value_sigE0D7);
  };
}
function Xd(var_core_value_sig12CD, var_core_value_sigC7A0, var_core_value_sig5BBA, var_core_value_sig87A9, var_core_value_sigD140) {
  let var_core_value_sig89B21 = var_core_value_sigC7A0.session["context"];
  return !var_core_value_sig89B21 || !(var_core_value_sig5BBA != null && var_core_value_sig5BBA.activateNavigationAtPoint) ? false : var_core_value_sig5BBA.activateNavigationAtPoint({
    childContext: var_core_value_sig89B21,
    clientX: var_core_value_sig87A9,
    clientY: var_core_value_sigD140,
    entry: Vd,
    runtimeHost: var_core_value_sig12CD
  });
}
function Zd(var_core_value_sig2FB3) {
  if (!(!var_core_value_sig2FB3.childUnitId || var_core_value_sig2FB3.childType == null)) return {
    embedId: var_core_value_sig2FB3.embedId,
    hostUnitId: var_core_value_sig2FB3.hostUnitId,
    hostType: a.UniverInstanceType["UNIVER_SLIDE"],
    entry: var_core_value_sig2FB3.entry,
    hostAnchorId: var_core_value_sig2FB3.hostAnchorId,
    childUnitId: var_core_value_sig2FB3.childUnitId,
    childType: var_core_value_sig2FB3.childType,
    mode: "readonly",
    source: {
      unitType: var_core_value_sig2FB3.childType,
      ref: {
        file: {
          kind: t.RESOURCE_REF_FILE_KIND["SELF"]
        },
        unit: {
          selector: var_core_value_sig2FB3.childUnitId,
          type: (0, t.toResourceRefUnitType)(var_core_value_sig2FB3.childType)
        }
      }
    },
    sourceMeta: {
      floating: var_core_value_sig2FB3.entry === "slides-floating-object" && {
        enabled: true,
        layout: "scroll-contained",
        fullscreen: false
      },
      tab: var_core_value_sig2FB3.entry === "slides-page-list-block" && {
        enabled: true,
        container: "slide-page-list",
        replaceHostMenu: true,
        hideHostFxBar: true,
        lockHostRibbon: true
      }
    }
  };
}
function Qd(var_core_value_sigF5B6) {
  if (typeof var_core_value_sigF5B6 == "string") return var_core_value_sigF5B6;
  if (typeof HTMLCanvasElement < "u" && var_core_value_sigF5B6 instanceof HTMLCanvasElement) try {
    return var_core_value_sigF5B6.toDataURL("image/png");
  } catch {
    return;
  }
  if (typeof ImageBitmap < "u" && var_core_value_sigF5B6 instanceof ImageBitmap && typeof document < "u") {
    let var_core_value_sigB67E = document.createElement("canvas");
    var_core_value_sigB67E.width = var_core_value_sigF5B6.width, var_core_value_sigB67E.height = var_core_value_sigF5B6.height;
    let var_core_value_sig7504 = var_core_value_sigB67E.getContext("2d");
    return var_core_value_sig7504 ? (var_core_value_sig7504.drawImage(var_core_value_sigF5B6, 0, 0), var_core_value_sigB67E.toDataURL("image/png")) : undefined;
  }
}
function $d(var_core_value_sigF516, var_core_value_sig033A, var_core_value_sig7774) {
  let var_core_value_sig5730 = var_core_value_sig033A ?? document.createElement("img");
  return var_core_value_sig5730.alt = "", var_core_value_sig5730.dataset["embedSlidesPresentationPreviewImage"] = "true", var_core_value_sig5730.style["display"] = "block", var_core_value_sig5730.style["width"] = "100%", var_core_value_sig5730.style["height"] = "100%", var_core_value_sig5730.style["objectFit"] = "fill", var_core_value_sig5730.style["pointerEvents"] = "none", var_core_value_sig5730.src = var_core_value_sig7774, var_core_value_sig5730.parentElement !== var_core_value_sigF516 && var_core_value_sigF516.replaceChildren(var_core_value_sig5730), var_core_value_sig5730;
}
let ef = class {
  constructor(var_core_value_sigC2EA, var_core_value_sigC733) {
    this._instanceService = var_core_value_sigC2EA, this._renderManagerService = var_core_value_sigC733, V(this, "childType", a.UniverInstanceType["UNIVER_SLIDE"]), V(this, "supportedLayouts", ["aspect-fit"]);
  }
  mount(var_core_value_sig9E26) {
    var var_core_value_sig6B84;
    let var_core_value_sig2D04 = this._getSlideModel(var_core_value_sig9E26.childUnitId);
    if (!var_core_value_sig2D04) return;
    (var_core_value_sig6B84 = var_core_value_sig9E26.viewState) != null && var_core_value_sig6B84.pageId && var_core_value_sig2D04.pageManager["getSlide"](var_core_value_sig9E26.viewState["pageId"]) && var_core_value_sig2D04.pageManager["setActiveSlide"](var_core_value_sig9E26.viewState["pageId"]);
    let var_core_value_sigD3D6 = ge(tf(var_core_value_sig9E26));
    if (!var_core_value_sigD3D6) return;
    let var_core_value_sig5BE71 = var_core_value_sig9E26.roots["canvas"] ? Et(this._renderManagerService, var_core_value_sig9E26.childUnitId, var_core_value_sigD3D6) : undefined;
    if (!var_core_value_sig5BE71) {
      var_core_value_sigD3D6.dispose();
      return;
    }
    var_core_value_sig9E26.roots["canvas"] && (var_core_value_sig9E26.roots["canvas"].dataset["embedChildRenderUnitId"] = var_core_value_sig9E26.childUnitId, var_core_value_sig9E26.roots["canvas"].dataset["embedChildRenderMode"] = "slide-readonly-preview-shell");
    let var_core_value_sigFD72 = nn(var_core_value_sig9E26.roots["content"]);
    return var_core_value_sig9E26.roots["content"].dataset["embedChildRenderUnitId"] = var_core_value_sig9E26.childUnitId, var_core_value_sig9E26.roots["content"].dataset["embedChildRenderMode"] = "slide-readonly-preview", var_core_value_sigFD72.render((0, m.jsx)(Kt, {
      injector: var_core_value_sigD3D6,
      mountContainer: var_core_value_sig9E26.roots["root"],
      embedId: var_core_value_sig9E26.embedId,
      passThroughWheelGestures: true,
      children: (0, m.jsx)(S.SlideEmbedReadonlyFloatingPreview, {
        unitId: var_core_value_sig9E26.childUnitId,
        render: var_core_value_sig5BE71
      })
    })), (0, a.toDisposable)(() => {
      var var_core_value_sigC753, var_core_value_sigFFD1, var_core_value_sig81AE, var_core_value_sigF79F;
      try {
        var var_core_value_sig0E54, var_core_value_sig3B171;
        var_core_value_sig5BE71 == null || (var_core_value_sig3B171 = (var_core_value_sig0E54 = var_core_value_sig5BE71.engine).unmount) == null || var_core_value_sig3B171.call(var_core_value_sig0E54);
      } catch {}
      (var_core_value_sigC753 = (var_core_value_sigFFD1 = this._renderManagerService).removeRender) == null || var_core_value_sigC753.call(var_core_value_sigFFD1, var_core_value_sig9E26.childUnitId), rn(var_core_value_sigFD72), var_core_value_sig9E26.roots["content"].removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig9E26.roots["content"].removeAttribute("data-embed-child-render-mode"), (var_core_value_sig81AE = var_core_value_sig9E26.roots["canvas"]) == null || var_core_value_sig81AE.removeAttribute("data-embed-child-render-unit-id"), (var_core_value_sigF79F = var_core_value_sig9E26.roots["canvas"]) == null || var_core_value_sigF79F.removeAttribute("data-embed-child-render-mode"), var_core_value_sigD3D6.dispose();
    });
  }
  handleWheel(var_core_value_sig3FA8) {
    var var_core_value_sig4749, var_core_value_sig5D76;
    let var_core_value_sigB8B6 = this._getSlideModel(var_core_value_sig3FA8.childUnitId);
    if (!var_core_value_sigB8B6) return false;
    let var_core_value_sig93DE = Math.abs(var_core_value_sig3FA8.event["deltaY"]) >= Math.abs(var_core_value_sig3FA8.event["deltaX"]) ? var_core_value_sig3FA8.event["deltaY"] : var_core_value_sig3FA8.event["deltaX"];
    if (var_core_value_sig93DE === 0) return false;
    let var_core_value_sigA2781 = nf(var_core_value_sigB8B6);
    if (var_core_value_sigA2781.length < 2) return true;
    let var_core_value_sig4263 = ((var_core_value_sig4749 = var_core_value_sigB8B6.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sig4749.getId()) ?? var_core_value_sigA2781[0],
      var_core_value_sig5B46 = Math.max(0, var_core_value_sigA2781.indexOf(var_core_value_sig4263)),
      var_core_value_sig1533 = var_core_value_sigA2781[Math.max(0, Math.min(var_core_value_sigA2781.length - 1, var_core_value_sig5B46 + (var_core_value_sig93DE > 0 ? 1 : -1)))];
    return !var_core_value_sig1533 || var_core_value_sig1533 === var_core_value_sig4263 ? true : (var_core_value_sigB8B6.pageManager["setActiveSlide"](var_core_value_sig1533), var_core_value_sig3FA8.updateViewState({
      unitId: var_core_value_sig3FA8.childUnitId,
      pageId: var_core_value_sig1533,
      scaleMode: "fit",
      zoomRatio: (var_core_value_sig5D76 = var_core_value_sigB8B6.getZoomRatio) == null ? undefined : var_core_value_sig5D76.call(var_core_value_sigB8B6)
    }), true);
  }
  _getSlideModel(var_core_value_sig8C06) {
    return this._instanceService["getUnit"](var_core_value_sig8C06, a.UniverInstanceType["UNIVER_SLIDE"]) ?? undefined;
  }
};
ef = Z([X(0, a.IUniverInstanceService), X(1, p.IRenderManagerService)], ef);
function tf(var_core_value_sigF360) {
  let var_core_value_sig57AB = () => {};
  return {
    descriptor: var_core_value_sigF360.descriptor,
    layout: var_core_value_sigF360.layout,
    injector: var_core_value_sigF360.injector,
    hostElement: var_core_value_sigF360.roots["root"],
    container: var_core_value_sigF360.roots["root"],
    hostUnitId: var_core_value_sigF360.hostUnitId,
    embedId: var_core_value_sigF360.embedId,
    childUnitId: var_core_value_sigF360.childUnitId,
    childType: var_core_value_sigF360.childType,
    renderScope: {
      hostUnitId: var_core_value_sigF360.hostUnitId,
      hostAnchorId: var_core_value_sigF360.descriptor["hostAnchorId"],
      embedId: var_core_value_sigF360.embedId,
      childUnitId: var_core_value_sigF360.childUnitId,
      childType: var_core_value_sigF360.childType,
      layout: var_core_value_sigF360.layout,
      mode: "float",
      rootElement: var_core_value_sigF360.roots["root"],
      contentRoot: var_core_value_sigF360.roots["content"],
      canvasRoot: var_core_value_sigF360.roots["canvas"],
      active$: (0, f.of)(false)
    },
    runtimeScope: {
      descriptor: var_core_value_sigF360.descriptor,
      host: {
        unitId: var_core_value_sigF360.hostUnitId,
        type: var_core_value_sigF360.descriptor["hostType"],
        anchorId: var_core_value_sigF360.descriptor["hostAnchorId"],
        entry: var_core_value_sigF360.descriptor["entry"],
        layout: "float"
      },
      child: {
        unitId: var_core_value_sigF360.childUnitId,
        type: var_core_value_sigF360.childType
      },
      injector: var_core_value_sigF360.injector,
      roots: {
        root: var_core_value_sigF360.roots["root"],
        content: var_core_value_sigF360.roots["content"],
        canvas: var_core_value_sigF360.roots["canvas"],
        overlay: var_core_value_sigF360.roots["root"],
        popup: var_core_value_sigF360.roots["root"]
      },
      activate: var_core_value_sig57AB,
      deactivate: var_core_value_sig57AB,
      dispose: var_core_value_sig57AB
    }
  };
}
function nf(var_core_value_sig389D) {
  var var_core_value_sigC44B, var_core_value_sigE9B0, var_core_value_sig1D96;
  let var_core_value_sigE28D = (var_core_value_sigC44B = var_core_value_sig389D.getSnapshot) == null ? undefined : var_core_value_sigC44B.call(var_core_value_sig389D).slideOrder;
  return Array.isArray(var_core_value_sigE28D) && var_core_value_sigE28D.length > 0 ? var_core_value_sigE28D : ((var_core_value_sigE9B0 = (var_core_value_sig1D96 = var_core_value_sig389D.pageManager).getSlides) == null ? undefined : var_core_value_sigE9B0.call(var_core_value_sig1D96).map(var_core_value_sig04F0 => var_core_value_sig04F0.getId()).filter(Boolean)) ?? [];
}
function rf(var_core_value_sigF93B) {
  bs(var_core_value_sigF93B, "slides-ui.embed", af);
}
function af(var_core_value_sig1B41) {
  let var_core_value_sig94EB = var_core_value_sig1B41.get(t.EmbedHostAdapterRegistryService),
    var_core_value_sig3F98 = var_core_value_sig1B41.get(vt),
    var_core_value_sigFC38 = var_core_value_sig1B41.get(gt),
    var_core_value_sigF0EE = var_core_value_sig1B41.get(H),
    var_core_value_sig9D18 = var_core_value_sig1B41.get(_t),
    var_core_value_sig2C46 = var_core_value_sig1B41.get(Ur),
    var_core_value_sig631C = var_core_value_sig1B41.get(ii),
    var_core_value_sigE88D = var_core_value_sig1B41.get(_s),
    var_core_value_sig30FA = var_core_value_sig1B41.has(t.EmbedHostAnchorModelService) ? var_core_value_sig1B41.get(t.EmbedHostAnchorModelService) : undefined,
    var_core_value_sigD5C8 = var_core_value_sig1B41.has(a.IUniverInstanceService) ? var_core_value_sig1B41.get(a.IUniverInstanceService) : undefined;
  var_core_value_sig1B41.has(S.ISlideEmbedRuntimeService) || var_core_value_sig1B41.add([S.ISlideEmbedRuntimeService, {
    useFactory: () => of({
      embedModelService: var_core_value_sig1B41.get(t.EmbedModelService),
      mountService: var_core_value_sig1B41.get(Ht),
      activationService: var_core_value_sig1B41.get(Gt),
      blockRegistry: var_core_value_sig1B41.get(H),
      restoreService: var_core_value_sig1B41.get(Gr),
      previewService: var_core_value_sig1B41.get(Ur),
      runtimeHostLeaseService: var_core_value_sig1B41.get(xa),
      passiveViewportRegistry: var_core_value_sig1B41.get(ii),
      passiveWheelHandlerRegistry: var_core_value_sig1B41.get(ai),
      univerInstanceService: var_core_value_sigD5C8,
      sceneCanvasCaptureService: var_core_value_sig1B41.has(kt) ? var_core_value_sig1B41.get(kt) : undefined
    })
  }]), var_core_value_sig1B41.has(S.ISlideEmbedFloatingActiveService) || var_core_value_sig1B41.add([S.ISlideEmbedFloatingActiveService, {
    useFactory: () => var_core_value_sig1B41.get(ce)
  }]), var_core_value_sig1B41.has(S.ISlideEmbedMountService) || var_core_value_sig1B41.add([S.ISlideEmbedMountService, {
    useFactory: () => var_core_value_sig1B41.get(Ht)
  }]), var_core_value_sig1B41.has(S.ISlideEmbedActivationService) || var_core_value_sig1B41.add([S.ISlideEmbedActivationService, {
    useFactory: () => var_core_value_sig1B41.get(Gt)
  }]), var_core_value_sig1B41.has(S.ISlideEmbedFocusOwnerService) || var_core_value_sig1B41.add([S.ISlideEmbedFocusOwnerService, {
    useFactory: () => var_core_value_sig1B41.get(t.EmbedFocusOwnerService)
  }]), var_core_value_sig1B41.has(S.ISlideEmbedRuntimeFocusCoordinator) || var_core_value_sig1B41.add([S.ISlideEmbedRuntimeFocusCoordinator, {
    useFactory: () => var_core_value_sig1B41.get(K)
  }]), var_core_value_sig1B41.has(S.ISlideEmbedFloatDomRenderer) || var_core_value_sig1B41.add([S.ISlideEmbedFloatDomRenderer, {
    useFactory: () => ({
      render: var_core_value_sig6C4A => {
        let {
          data: var_core_value_sig73D9
        } = var_core_value_sig6C4A;
        return (0, d.createElement)(_a, {
          ...var_core_value_sig6C4A,
          data: var_core_value_sig73D9
        });
      }
    })
  }]), [(0, t.createSlidesFloatingObjectHostAdapterContribution)(var_core_value_sig30FA, var_core_value_sigD5C8, () => var_core_value_sig1B41.has(g.ISlideDrawingService) ? var_core_value_sig1B41.get(g.ISlideDrawingService) : undefined), Cd(var_core_value_sig30FA, var_core_value_sigD5C8, var_core_value_sig1B41.get(S.ISlideEmbedRuntimeService))].forEach(var_core_value_sigCDD1 => {
    var_core_value_sig94EB.get(var_core_value_sigCDD1.hostType, var_core_value_sigCDD1.entry) || var_core_value_sig94EB.register(var_core_value_sigCDD1);
  }), [wd(), Td()].forEach(var_core_value_sig6C50 => {
    var_core_value_sig3F98.get(var_core_value_sig6C50.hostType, var_core_value_sig6C50.entry) || var_core_value_sig3F98.register(var_core_value_sig6C50);
  });
  let var_core_value_sigFF37 = kd(var_core_value_sig1B41.get(a.ICommandService));
  var_core_value_sigFC38.get(var_core_value_sigFF37.childType) || var_core_value_sigFC38.register(var_core_value_sigFF37);
  let var_core_value_sig80B1 = _d();
  var_core_value_sigF0EE.get(var_core_value_sig80B1.childType) || var_core_value_sigF0EE.register(var_core_value_sig80B1), xd().forEach(var_core_value_sig7926 => {
    var_core_value_sig9D18.hasExact(var_core_value_sig7926.hostType, var_core_value_sig7926.entry, var_core_value_sig7926.childType) || var_core_value_sig9D18.register(var_core_value_sig7926);
  }), var_core_value_sig2C46.registerProvider(var_core_value_sig1B41.createInstance(Fd)), var_core_value_sig631C.get(a.UniverInstanceType["UNIVER_SLIDE"]) || var_core_value_sig631C.register(Od()), var_core_value_sigE88D.get(a.UniverInstanceType["UNIVER_SLIDE"]) || var_core_value_sigE88D.register(var_core_value_sig1B41.createInstance(ef));
}
function of(var_core_value_sigF473) {
  return {
    mountPageList: var_core_value_sig88B3 => {
      var var_core_value_sig6044, var_core_value_sigEE54;
      let var_core_value_sigBC8E = {
          embedId: var_core_value_sig88B3.embedId,
          hostUnitId: var_core_value_sig88B3.hostUnitId,
          hostType: a.UniverInstanceType["UNIVER_SLIDE"],
          entry: "slides-page-list-block",
          hostAnchorId: var_core_value_sig88B3.hostAnchorId,
          childUnitId: var_core_value_sig88B3.childUnitId,
          childType: var_core_value_sig88B3.childType,
          source: {
            unitType: var_core_value_sig88B3.childType,
            ref: {
              file: {
                kind: t.RESOURCE_REF_FILE_KIND["SELF"]
              },
              unit: {
                selector: var_core_value_sig88B3.childUnitId,
                type: (0, t.toResourceRefUnitType)(var_core_value_sig88B3.childType)
              }
            }
          },
          sourceMeta: {
            floating: false,
            tab: {
              enabled: true,
              container: "slide-page-list",
              replaceHostMenu: true,
              hideHostFxBar: true,
              lockHostRibbon: true
            }
          }
        },
        var_core_value_sig65B41 = (var_core_value_sig6044 = (var_core_value_sigEE54 = var_core_value_sigF473.mountService).getSession) == null ? undefined : var_core_value_sig6044.call(var_core_value_sigEE54, var_core_value_sig88B3.embedId),
        var_core_value_sig38F9 = () => {
          var var_core_value_sigEAF8, var_core_value_sig0455;
          ((var_core_value_sigEAF8 = (var_core_value_sig0455 = var_core_value_sigF473.mountService).getSession) == null || (var_core_value_sigEAF8 = var_core_value_sigEAF8.call(var_core_value_sig0455, var_core_value_sig88B3.embedId)) == null ? undefined : var_core_value_sigEAF8.hostElement) === var_core_value_sig88B3.hostElement && (var_core_value_sigF473.activationService["clearTab"](var_core_value_sig88B3.embedId), var_core_value_sigF473.mountService["unmount"](var_core_value_sig88B3.embedId));
        };
      return (var_core_value_sig65B41 == null ? undefined : var_core_value_sig65B41.hostUnitId) === var_core_value_sig88B3.hostUnitId && var_core_value_sig65B41.entry === "slides-page-list-block" && var_core_value_sig65B41.childUnitId === var_core_value_sig88B3.childUnitId && var_core_value_sig65B41.hostElement === var_core_value_sig88B3.hostElement ? (var_core_value_sigF473.activationService["activateTab"](var_core_value_sigBC8E), (0, a.toDisposable)(var_core_value_sig38F9)) : (var_core_value_sigF473.mountService["mountIntoHostElement"](var_core_value_sigBC8E, var_core_value_sig88B3.hostElement), var_core_value_sigF473.activationService["activateTab"](var_core_value_sigBC8E), (0, a.toDisposable)(var_core_value_sig38F9));
    },
    mountFloatingObject: var_core_value_sig4EFC => {
      let var_core_value_sigB70F = var_core_value_sigF473.embedModelService["getDescriptor"](var_core_value_sig4EFC.hostUnitId, var_core_value_sig4EFC.embedId) ?? {
        embedId: var_core_value_sig4EFC.embedId,
        hostUnitId: var_core_value_sig4EFC.hostUnitId,
        hostType: a.UniverInstanceType["UNIVER_SLIDE"],
        entry: "slides-floating-object",
        hostAnchorId: var_core_value_sig4EFC.hostAnchorId,
        childUnitId: var_core_value_sig4EFC.childUnitId,
        childType: var_core_value_sig4EFC.childType,
        source: {
          unitType: var_core_value_sig4EFC.childType,
          ref: {
            file: {
              kind: t.RESOURCE_REF_FILE_KIND["SELF"]
            },
            unit: {
              selector: var_core_value_sig4EFC.childUnitId,
              type: (0, t.toResourceRefUnitType)(var_core_value_sig4EFC.childType)
            }
          }
        },
        sourceMeta: {
          floating: {
            enabled: true,
            layout: "scroll-contained",
            fullscreen: true
          },
          tab: false
        }
      };
      return var_core_value_sigF473.mountService["mountIntoHostElement"](var_core_value_sigB70F, var_core_value_sig4EFC.hostElement), (0, a.toDisposable)(() => {
        var_core_value_sigF473.mountService["unmount"](var_core_value_sig4EFC.embedId);
      });
    },
    clearAndUnmount: var_core_value_sig50E51 => {
      var_core_value_sigF473.activationService["clearTab"](var_core_value_sig50E51), var_core_value_sigF473.mountService["unmount"](var_core_value_sig50E51);
    },
    unmountFloatingSessions: var_core_value_sig8AD2 => {
      var_core_value_sigF473.mountService["listSessions"]().filter(var_core_value_sig737C => var_core_value_sig737C.hostUnitId === var_core_value_sig8AD2 && var_core_value_sig737C.entry === "slides-floating-object").forEach(var_core_value_sig5AF5 => var_core_value_sigF473.mountService["unmount"](var_core_value_sig5AF5.embedId));
    },
    listSessions: () => var_core_value_sigF473.mountService["listSessions"]().map(var_core_value_sig9DE4 => ({
      embedId: var_core_value_sig9DE4.embedId,
      hostUnitId: var_core_value_sig9DE4.hostUnitId,
      entry: var_core_value_sig9DE4.entry,
      childType: var_core_value_sig9DE4.childType,
      childUnitId: var_core_value_sig9DE4.childUnitId
    })),
    capturePreviewByHostAnchorId: (var_core_value_sigEF27, var_core_value_sigD45F) => sf(var_core_value_sigF473, var_core_value_sigEF27, var_core_value_sigD45F),
    mountPresentationEmbed: var_core_value_sig9764 => Hd(var_core_value_sigF473, var_core_value_sig9764)
  };
}
async function sf(var_core_value_sig10F3, var_core_value_sig2F5F, var_core_value_sig6075) {
  var var_core_value_sigEE76, var_core_value_sig850E, var_core_value_sig818E;
  let var_core_value_sig8990 = (var_core_value_sigEE76 = var_core_value_sig10F3.sceneCanvasCaptureService) == null ? undefined : var_core_value_sigEE76.getContextByHostAnchorId(var_core_value_sig2F5F);
  var_core_value_sig8990 && (await Ma(var_core_value_sig8990));
  let var_core_value_sig2BB0 = await ((var_core_value_sig850E = var_core_value_sig10F3.sceneCanvasCaptureService) == null ? undefined : var_core_value_sig850E.captureByHostAnchorId(var_core_value_sig2F5F));
  if (var_core_value_sig2BB0) return Qd(var_core_value_sig2BB0);
  if (!var_core_value_sig6075) return;
  let var_core_value_sig35CB = await lf(var_core_value_sig10F3, var_core_value_sig2F5F, var_core_value_sig6075);
  if (!var_core_value_sig35CB) return;
  let var_core_value_sigBE5B = var_core_value_sig35CB.childUnitId ?? var_core_value_sig6075.childUnitId,
    var_core_value_sig3933 = var_core_value_sig35CB.childType ?? var_core_value_sig6075.childType;
  if (!var_core_value_sigBE5B || var_core_value_sig3933 == null) return;
  let var_core_value_sigE4FE = cf(var_core_value_sig10F3, var_core_value_sig35CB, var_core_value_sig2F5F, var_core_value_sig6075),
    var_core_value_sig0D19 = var_core_value_sig10F3.previewService["requestPreview"]({
      descriptor: {
        ...var_core_value_sig35CB,
        mode: "readonly"
      },
      childUnitId: var_core_value_sigBE5B,
      childType: var_core_value_sig3933,
      width: var_core_value_sigE4FE.width,
      height: var_core_value_sigE4FE.height,
      dpr: Math.max(1, Math.min(3, var_core_value_sig6075.dpr)),
      reason: "initial",
      context: (var_core_value_sig818E = var_core_value_sig10F3.sceneCanvasCaptureService) == null ? undefined : var_core_value_sig818E.getContextByHostAnchorId(var_core_value_sig2F5F)
    }),
    var_core_value_sig2D4A = var_core_value_sig0D19.image ? Qd(var_core_value_sig0D19.image) : undefined;
  return var_core_value_sig0D19.status === "pending" ? uf(var_core_value_sig10F3.previewService, var_core_value_sig0D19, var_core_value_sigBE5B) : var_core_value_sig2D4A;
}
function cf(var_core_value_sig8673, var_core_value_sigFE4C, var_core_value_sig4CF5, var_core_value_sig80ED) {
  var var_core_value_sig5335, var_core_value_sig41CB;
  let var_core_value_sig56CD = {
    width: Math.max(1, var_core_value_sig80ED.width),
    height: Math.max(1, var_core_value_sig80ED.height)
  };
  if (var_core_value_sigFE4C.entry !== t.EmbedHostEntryEnum["SlidesPageListBlock"]) return var_core_value_sig56CD;
  let var_core_value_sigEC10 = (var_core_value_sig5335 = var_core_value_sig8673.univerInstanceService) == null ? undefined : var_core_value_sig5335.getUnit(var_core_value_sig80ED.hostUnitId, a.UniverInstanceType["UNIVER_SLIDE"]);
  if (!var_core_value_sigEC10) return var_core_value_sig56CD;
  let var_core_value_sig9CAA = (var_core_value_sig41CB = var_core_value_sigEC10.pageManager["getSlide"](var_core_value_sig4CF5)) == null ? undefined : var_core_value_sig41CB.getData(),
    var_core_value_sig388B = (0, S.resolveSlideLogicalPageSize)((var_core_value_sig9CAA == null ? undefined : var_core_value_sig9CAA.pageSize) ?? var_core_value_sigEC10.getSnapshot().defaultPageSize);
  return {
    width: Math.max(1, var_core_value_sig388B.width),
    height: Math.max(1, var_core_value_sig388B.height)
  };
}
async function lf(var_core_value_sig1541, var_core_value_sigC4E0, var_core_value_sig70FE) {
  let var_core_value_sig0CBD = var_core_value_sig1541.embedModelService["getDescriptor"](var_core_value_sig70FE.hostUnitId, var_core_value_sig70FE.embedId) ?? Zd({
    hostUnitId: var_core_value_sig70FE.hostUnitId,
    embedId: var_core_value_sig70FE.embedId,
    hostAnchorId: var_core_value_sigC4E0,
    childUnitId: var_core_value_sig70FE.childUnitId,
    childType: var_core_value_sig70FE.childType,
    entry: t.EmbedHostEntryEnum["SlidesPageListBlock"]
  });
  if (var_core_value_sig0CBD) {
    try {
      var_core_value_sig0CBD = await var_core_value_sig1541.restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sig0CBD
      });
    } catch {}
    return var_core_value_sig0CBD;
  }
}
function uf(var_core_value_sig17FE, var_core_value_sig583F, var_core_value_sig333C) {
  return new Promise(var_core_value_sig397B => {
    let var_core_value_sigC2FF = false,
      var_core_value_sig8A75,
      var_core_value_sigCA67,
      var_core_value_sigDFDA = var_core_value_sig77FA1 => {
        var_core_value_sigC2FF || (var_core_value_sigC2FF = true, globalThis.clearTimeout(var_core_value_sigCA67), var_core_value_sig8A75 == null || var_core_value_sig8A75.unsubscribe(), var_core_value_sig397B(var_core_value_sig77FA1));
      };
    var_core_value_sigCA67 = globalThis.setTimeout(() => var_core_value_sigDFDA(undefined), 5000), var_core_value_sig8A75 = var_core_value_sig17FE.previewUpdated$["subscribe"]({
      next: var_core_value_sigA4A7 => {
        var_core_value_sigA4A7.embedId !== var_core_value_sig583F.embedId || var_core_value_sigA4A7.childUnitId !== var_core_value_sig333C || var_core_value_sigA4A7.revision < var_core_value_sig583F.revision || var_core_value_sigA4A7.status === "pending" || var_core_value_sigDFDA(var_core_value_sigA4A7.image ? Qd(var_core_value_sigA4A7.image) : undefined);
      },
      complete: () => var_core_value_sigDFDA(undefined)
    });
  });
}
function df(var_core_value_sigF853) {
  Bl(var_core_value_sigF853), od(var_core_value_sigF853), rf(var_core_value_sigF853), nl(var_core_value_sigF853), vl(var_core_value_sigF853);
}
function ff(var_core_value_sig210F) {
  il(var_core_value_sig210F);
}
const pf = [0, 16, 100, 300, 1000];
async function mf(var_core_value_sig06D9, var_core_value_sig125E) {
  var var_core_value_sig7729;
  let {
      instanceService: var_core_value_sig50ED,
      childUnitId: var_core_value_sigB3C8,
      childType: var_core_value_sigC097,
      restoreUnitId: var_core_value_sigE100,
      shouldRestore: var_core_value_sig3841,
      settleDelayMs: var_core_value_sig6B0E = 16,
      deferredRestoreDelaysMs: var_core_value_sig0C60 = var_core_value_sigE100 ? pf : []
    } = var_core_value_sig06D9,
    var_core_value_sigEE271 = var_core_value_sig50ED.getCurrentUnitOfType(var_core_value_sigC097),
    var_core_value_sig0CFB = ((var_core_value_sig7729 = var_core_value_sig50ED.getFocusedUnit()) == null ? undefined : var_core_value_sig7729.getUnitId()) ?? null ?? var_core_value_sigE100 ?? null;
  var_core_value_sig50ED.setCurrentUnitForType(var_core_value_sigB3C8), var_core_value_sig50ED.focusUnit(var_core_value_sigB3C8);
  let var_core_value_sig42301 = () => {
    var_core_value_sig3841 && !var_core_value_sig3841() || (var_core_value_sigEE271 && var_core_value_sigEE271.getUnitId() !== var_core_value_sigB3C8 && var_core_value_sig50ED.setCurrentUnitForType(var_core_value_sigEE271.getUnitId()), var_core_value_sigE100 && var_core_value_sig50ED.setCurrentUnitForType(var_core_value_sigE100), var_core_value_sig50ED.focusUnit(var_core_value_sig0CFB));
  };
  try {
    let var_core_value_sigEAA1 = await var_core_value_sig125E();
    return var_core_value_sig6B0E > 0 && (await hf(var_core_value_sig6B0E)), var_core_value_sigEAA1;
  } finally {
    var_core_value_sig42301(), gf(var_core_value_sig42301, var_core_value_sig0C60);
  }
}
function hf(var_core_value_sig7EC6) {
  return new Promise(var_core_value_sig77BA => setTimeout(var_core_value_sig77BA, var_core_value_sig7EC6));
}
function gf(var_core_value_sig2663, var_core_value_sigB20A1) {
  var_core_value_sigB20A1.forEach(var_core_value_sig9ED0 => {
    globalThis.setTimeout(var_core_value_sig2663, var_core_value_sig9ED0);
  });
}
const _f = new WeakMap();
let vf = 0;
function yf(var_core_value_sig6C26, var_core_value_sig3DB3) {
  return var_core_value_sig6C26.has(Cf) ? var_core_value_sig6C26.get(Cf).register(var_core_value_sig3DB3) : xf(var_core_value_sig6C26, var_core_value_sig3DB3);
}
function bf(var_core_value_sig5044) {
  if (!var_core_value_sig5044.has(Cf)) return;
  let var_core_value_sigED341 = _f.get(var_core_value_sig5044);
  var_core_value_sigED341 != null && var_core_value_sigED341.size && ([...var_core_value_sigED341.values()].sort((var_core_value_sigB650, var_core_value_sig74A81) => var_core_value_sigB650.index - var_core_value_sig74A81.index).forEach(({
    contribution: var_core_value_sigC129
  }) => yf(var_core_value_sig5044, var_core_value_sigC129)), _f.delete(var_core_value_sig5044));
}
function xf(var_core_value_sig98EE, var_core_value_sig5268) {
  let var_core_value_sig413E = {
      contribution: var_core_value_sig5268,
      index: vf++
    },
    var_core_value_sig15A1 = Sf(var_core_value_sig5268, var_core_value_sig413E.index),
    var_core_value_sig9C51 = var_core_value_sig98EE,
    var_core_value_sigF33D = _f.get(var_core_value_sig9C51) ?? new Map();
  return var_core_value_sigF33D.set(var_core_value_sig15A1, var_core_value_sig413E), _f.set(var_core_value_sig9C51, var_core_value_sigF33D), (0, a.toDisposable)(() => {
    let var_core_value_sig59D5 = _f.get(var_core_value_sig9C51);
    (var_core_value_sig59D5 == null ? undefined : var_core_value_sig59D5.get(var_core_value_sig15A1)) === var_core_value_sig413E && var_core_value_sig59D5.delete(var_core_value_sig15A1);
  });
}
function Sf(var_core_value_sig0DB2, var_core_value_sig684B) {
  return var_core_value_sig0DB2.id ? var_core_value_sig0DB2.childType + ":" + var_core_value_sig0DB2.id : var_core_value_sig0DB2.childType + ":anonymous:" + var_core_value_sig684B;
}
let Cf = class {
  constructor(var_core_value_sig7A96, var_core_value_sigD72E) {
    this._injector = var_core_value_sig7A96, this._focusCoordinator = var_core_value_sigD72E, V(this, "_contributions", new Map()), V(this, "_nextIndex", 0);
  }
  register(var_core_value_sig3E1F) {
    if (var_core_value_sig3E1F.id && this._hasContributionId(var_core_value_sig3E1F.childType, var_core_value_sig3E1F.id)) return (0, a.toDisposable)(() => {});
    let var_core_value_sig7D3E = {
        contribution: var_core_value_sig3E1F,
        index: this._nextIndex++
      },
      var_core_value_sig9D1B = this._contributions["get"](var_core_value_sig3E1F.childType) ?? [];
    return var_core_value_sig9D1B.push(var_core_value_sig7D3E), var_core_value_sig9D1B.sort(wf), this._contributions["set"](var_core_value_sig3E1F.childType, var_core_value_sig9D1B), (0, a.toDisposable)(() => {
      let var_core_value_sigA4DF = this._contributions["get"](var_core_value_sig3E1F.childType);
      if (!var_core_value_sigA4DF) return;
      let var_core_value_sigCC9D = var_core_value_sigA4DF.filter(var_core_value_sig0C53 => var_core_value_sig0C53 !== var_core_value_sig7D3E);
      var_core_value_sigCC9D.length ? this._contributions["set"](var_core_value_sig3E1F.childType, var_core_value_sigCC9D) : this._contributions["delete"](var_core_value_sig3E1F.childType);
    });
  }
  getAll(var_core_value_sigC043) {
    return (this._contributions["get"](var_core_value_sigC043) ?? []).map(var_core_value_sig90F5 => var_core_value_sig90F5.contribution);
  }
  async prepare(var_core_value_sig12F21) {
    let var_core_value_sig3B28 = this.getAll(var_core_value_sig12F21.childType);
    var_core_value_sig3B28.length && (await mf({
      instanceService: this._injector["get"](a.IUniverInstanceService),
      childUnitId: var_core_value_sig12F21.childUnitId,
      childType: var_core_value_sig12F21.childType,
      restoreUnitId: var_core_value_sig12F21.restoreUnitId,
      settleDelayMs: var_core_value_sig12F21.settleDelayMs,
      shouldRestore: () => !this._focusCoordinator["isChildUnitInActiveSession"](var_core_value_sig12F21.childUnitId)
    }, async () => {
      for (let var_core_value_sigEA04 of var_core_value_sig3B28) var_core_value_sigEA04.prepare && (await var_core_value_sigEA04.prepare({
        injector: this._injector,
        childUnitId: var_core_value_sig12F21.childUnitId,
        childType: var_core_value_sig12F21.childType,
        descriptor: var_core_value_sig12F21.descriptor
      }));
    }));
  }
  _hasContributionId(var_core_value_sig9789, var_core_value_sig8475) {
    return (this._contributions["get"](var_core_value_sig9789) ?? []).some(var_core_value_sigD2BA => var_core_value_sigD2BA.contribution["id"] === var_core_value_sig8475);
  }
};
Cf = Z([X(0, (0, a.Inject)(a.Injector)), X(1, (0, a.Inject)(K))], Cf);
function wf(var_core_value_sig73BD, var_core_value_sigB602) {
  return (var_core_value_sig73BD.contribution["order"] ?? var_core_value_sig73BD.index) - (var_core_value_sigB602.contribution["order"] ?? var_core_value_sigB602.index) || var_core_value_sig73BD.index - var_core_value_sigB602.index;
}
function Tf() {
  return [];
}
let Ef = class {
  constructor(var_core_value_sig88B7, var_core_value_sigB1771) {
    this._focusOwnerService = var_core_value_sig88B7, this._undoRedoService = var_core_value_sigB1771;
  }
  pushUndoRedoForChild(var_core_value_sig9946) {
    let var_core_value_sig731A = this.resolveStackUnitId(var_core_value_sig9946.unitID);
    return this._undoRedoService["pushUndoRedo"]({
      ...var_core_value_sig9946,
      unitID: var_core_value_sig731A
    }), {
      stackUnitId: var_core_value_sig731A,
      routedToHost: var_core_value_sig731A !== var_core_value_sig9946.unitID
    };
  }
  resolveStackUnitId(var_core_value_sig8E75) {
    let var_core_value_sigF462 = this._focusOwnerService["getFocusOwner"]();
    return !var_core_value_sigF462 || var_core_value_sigF462.childUnitId !== var_core_value_sig8E75 ? var_core_value_sig8E75 : var_core_value_sigF462.hostUnitId;
  }
};
Ef = Z([X(0, (0, a.Inject)(t.EmbedFocusOwnerService)), X(1, a.IUndoRedoService)], Ef);
let Df = class extends a.Plugin {
  constructor(var_core_value_sigF519 = rr, var_core_value_sig80A1, var_core_value_sigA8D7, var_core_value_sig5BB81) {
    super(), this._config = var_core_value_sigF519, this._injector = var_core_value_sig80A1, this._configService = var_core_value_sigA8D7, this._univerInstanceService = var_core_value_sig5BB81;
    let {
      ...var_core_value_sig784F
    } = (0, a.merge)({}, rr, this._config);
    this._configService["setConfig"]("embed-ui.config", var_core_value_sig784F);
  }
  onStarting() {
    this._enableEmbedUnitLeasePolicy(), this._registerServices(), this._registerProductUIContributions(), this._registerLateProductUIContributions(), this._registerProductMenus(), this._flushPendingContributions(), this._registerFloatingMenus(), this._touchServices(), this._registerDefaultHostToolbar();
  }
  onReady() {
    this._flushPendingContributions(), this._injector["get"](Wo);
  }
  _registerServices() {
    this._injector["has"](r.IPrintPreparationService) || this._injector["add"]([r.IPrintPreparationService, {
      useClass: r.PrintPreparationService
    }]), this._injector["has"](i.SlidePrintDrawingTransformService) || this._injector["add"]([i.SlidePrintDrawingTransformService]), this._injector["has"](e.BoardPrintCompositionService) || this._injector["add"]([e.BoardPrintCompositionService]), [[vt], [Gr], [Cf], [Fo], [Gt], [gt], [H], [ce], [Wr], [_t], [Ur], [ba], [Zn], [U], [Xr], [J], [Ro], [zo], [Bo], [Ho], [Wo], [ps], [Io], [Ht], [yt], [ai], [ii], [Ua], [Mn], [_s], [Y], [K], [xa], [kt], [de], [Ef]].forEach(var_core_value_sigCD3A => this._injector["add"](var_core_value_sigCD3A)), this._injector["has"](o.IDocEmbedInteractionBoundaryService) || this._injector["add"]([o.IDocEmbedInteractionBoundaryService, {
      useFactory: () => this._injector["get"](J)
    }]), this._injector["has"](o.IDocEmbedRuntimeFocusCoordinator) || this._injector["add"]([o.IDocEmbedRuntimeFocusCoordinator, {
      useFactory: () => this._injector["get"](K)
    }]), this._injector["has"](s.ISheetEmbedInteractionBoundaryService) || this._injector["add"]([s.ISheetEmbedInteractionBoundaryService, {
      useFactory: () => this._injector["get"](J)
    }]), this._injector["has"](s.ISheetEmbedRuntimeFocusCoordinator) || this._injector["add"]([s.ISheetEmbedRuntimeFocusCoordinator, {
      useFactory: () => this._injector["get"](K)
    }]), this._injector["has"](s.ISheetEmbedFloatingGeometryService) || this._injector["add"]([s.ISheetEmbedFloatingGeometryService, {
      useFactory: () => this._injector["get"](Wr)
    }]);
  }
  _registerProductMenus() {
    gs(this._injector).forEach(var_core_value_sig519D => this.disposeWithMe(var_core_value_sig519D));
  }
  _registerProductUIContributions() {
    df(this._injector);
  }
  _registerLateProductUIContributions() {
    let var_core_value_sig29001 = this._univerInstanceService["getTypeOfUnitAdded$"](a.UniverInstanceType["UNIVER_BASE"]).subscribe(() => ff(this._injector));
    this.disposeWithMe((0, a.toDisposable)(() => var_core_value_sig29001.unsubscribe()));
  }
  _flushPendingContributions() {
    xs(this._injector), kn(this._injector), bf(this._injector);
  }
  _registerFloatingMenus() {
    var var_core_value_sigF735;
    let var_core_value_sig893C = this._injector["get"](_t);
    ((var_core_value_sigF735 = this._config["defaults"]) == null ? undefined : var_core_value_sigF735.floatingMenus) !== false && Tf().forEach(var_core_value_sigC7E7 => {
      var_core_value_sig893C.hasExact(var_core_value_sigC7E7.hostType, var_core_value_sigC7E7.entry, var_core_value_sigC7E7.childType) || var_core_value_sig893C.register(var_core_value_sigC7E7);
    });
  }
  _touchServices() {
    (0, a.touchDependencies)(this._injector, [[vt], [Gr], [Cf], [Fo], [Gt], [gt], [H], [ce], [_t], [Ur], [ba], [Zn], [U], [Xr], [Ro], [zo], [Bo], [Ho], [ps], [Io], [Ht], [yt], [ai], [ii], [Ua], [Mn], [_s], [Y], [K], [xa], [kt], [de], [Ef]]);
  }
  _registerDefaultHostToolbar() {
    var var_core_value_sigE82D;
    ((var_core_value_sigE82D = this._config["defaults"]) == null ? undefined : var_core_value_sigE82D.hostToolbar) !== false && this.disposeWithMe(this._injector["get"](c.IUIPartsService).registerComponent(c.BuiltInUIPart["GLOBAL"], () => $n));
  }
  _enableEmbedUnitLeasePolicy() {
    this._injector["get"](t.EmbedUnitLeasePolicyService).enableExclusivePolicy();
  }
};
V(Df, "pluginName", "UNIVER_EMBED_UI_PLUGIN"), V(Df, "packageName", ie), V(Df, "version", L), V(Df, "type", a.UniverInstanceType["UNIVER_UNKNOWN"]), Df = Z([(0, a.DependentOn)(n.UniverLicensePlugin, t.UniverEmbedPlugin), X(1, (0, a.Inject)(a.Injector)), X(2, a.IConfigService), X(3, a.IUniverInstanceService)], Df), Object.defineProperty(exports, "EmbedActivationService", {
  enumerable: true,
  get: function () {
    return Gt;
  }
}), exports.EmbedChildViewRegistryService = gt, Object.defineProperty(exports, "EmbedFullscreenService", {
  enumerable: true,
  get: function () {
    return Zn;
  }
}), exports.EmbedHostContainerRegistryService = vt, exports.EmbedHostMenuOverrideService = U, Object.defineProperty(exports, "EmbedHostRestoreService", {
  enumerable: true,
  get: function () {
    return Gr;
  }
}), Object.defineProperty(exports, "EmbedMountService", {
  enumerable: true,
  get: function () {
    return Ht;
  }
}), Object.defineProperty(exports, "UniverEmbedUIPlugin", {
  enumerable: true,
  get: function () {
    return Df;
  }
}), exports.registerEmbedProductMenuContribution = On;
