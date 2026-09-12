Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
function R(_0x541b65, _0xcdc852) {
  return _0x541b65.matches("[" + _0xcdc852 + "]")
    ? _0x541b65
    : (_0x541b65.querySelector("[" + _0xcdc852 + "]") ?? undefined);
}
function ae(_0x2e9538) {
  let _0x3736f4 = [];
  return (
    oe(
      _0x2e9538,
      "data-embed-content-root",
      "univer-overflow-hidden",
      _0x3736f4,
    ),
    oe(
      _0x2e9538,
      "data-embed-canvas-root",
      "univer-pointer-events-none\x20univer-overflow-hidden\x20[&>*]:univer-pointer-events-auto",
      _0x3736f4,
    ),
    oe(
      _0x2e9538,
      "data-embed-overlay-root",
      "univer-pointer-events-none [&>*]:univer-pointer-events-auto",
      _0x3736f4,
    ),
    oe(
      _0x2e9538,
      "data-embed-popup-root",
      "univer-pointer-events-none [&>*]:univer-pointer-events-auto",
      _0x3736f4,
    ),
    (0, a.toDisposable)(() => {
      _0x3736f4.forEach((_0x31e6dd) => _0x31e6dd.remove());
    })
  );
}
function oe(_0x403bdc, _0x4ef428, _0x484c8c, _0x1603aa) {
  let _0x3c306a = R(_0x403bdc, _0x4ef428);
  if (_0x3c306a) return _0x3c306a;
  let _0x507da4 = document.createElement("div");
  return (
    _0x507da4.setAttribute(_0x4ef428, "true"),
    _0x507da4.setAttribute("data-embed-runtime-slot-owner", "embed-ui"),
    (_0x507da4.className =
      "univer-box-border univer-absolute univer-inset-0 " + _0x484c8c),
    _0x403bdc.appendChild(_0x507da4),
    _0x1603aa.push(_0x507da4),
    _0x507da4
  );
}
function se(_0x31c869) {
  "@babel/helpers - typeof";
  return (
    (se =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x32f9a6) {
            return typeof _0x32f9a6;
          }
        : function (_0x4d2ae8) {
            return _0x4d2ae8 &&
              typeof Symbol == "function" &&
              _0x4d2ae8.constructor === Symbol &&
              _0x4d2ae8 !== Symbol.prototype
              ? "symbol"
              : typeof _0x4d2ae8;
          }),
    se(_0x31c869)
  );
}
function z(_0x1e0022, _0x1aa368) {
  if (se(_0x1e0022) != "object" || !_0x1e0022) return _0x1e0022;
  var _0x218add = _0x1e0022[Symbol.toPrimitive];
  if (_0x218add !== undefined) {
    var _0x8c61c6 = _0x218add.call(_0x1e0022, _0x1aa368 || "default");
    if (se(_0x8c61c6) != "object") return _0x8c61c6;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x1aa368 === "string" ? String : Number)(_0x1e0022);
}
function B(_0x117a14) {
  var _0x288a3c = z(_0x117a14, "string");
  return se(_0x288a3c) == "symbol" ? _0x288a3c : _0x288a3c + "";
}
function V(_0x1c6cb4, _0x28b88b, _0x248366) {
  return (
    (_0x28b88b = B(_0x28b88b)) in _0x1c6cb4
      ? Object.defineProperty(_0x1c6cb4, _0x28b88b, {
          value: _0x248366,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x1c6cb4[_0x28b88b] = _0x248366),
    _0x1c6cb4
  );
}
var H = class {
    constructor() {
      V(this, "_contributions", new Map());
    }
    register(_0x49844f) {
      return (
        this._contributions["set"](_0x49844f.childType, _0x49844f),
        (0, a.toDisposable)(() => {
          this._contributions["get"](_0x49844f.childType) === _0x49844f &&
            this._contributions["delete"](_0x49844f.childType);
        })
      );
    }
    get(_0x3278ae) {
      return this._contributions["get"](_0x3278ae);
    }
    list() {
      return [...this._contributions["values"]()];
    }
  },
  ce = class {
    constructor() {
      (V(this, "_active$", new f["BehaviorSubject"](null)),
        V(this, "active$", this._active$["asObservable"]()));
    }
    getActive() {
      return this._active$["getValue"]();
    }
    getStage(_0x4da786) {
      let _0xb442a2 = this.getActive();
      return (_0xb442a2 == null ? undefined : _0xb442a2.embedId) === _0x4da786
        ? (_0xb442a2.stage ?? "stage1")
        : "inactive";
    }
    activate(_0x16bcee, _0xbdd21c) {
      let _0x1b473b = this.getActive(),
        _0x5304c9 =
          (_0x1b473b == null ? undefined : _0x1b473b.hostUnitId) ===
            _0x16bcee.hostUnitId &&
          _0x1b473b.embedId === _0x16bcee.embedId &&
          _0x1b473b.childUnitId === _0x16bcee.childUnitId,
        _0x547f6b = {
          ..._0x16bcee,
          stage:
            _0xbdd21c ??
            _0x16bcee.stage ??
            (_0x5304c9 ? (_0x1b473b.stage ?? "stage1") : "stage1"),
        };
      ((_0x1b473b == null ? undefined : _0x1b473b.hostUnitId) !==
        _0x547f6b.hostUnitId ||
        _0x1b473b.embedId !== _0x547f6b.embedId ||
        _0x1b473b.childUnitId !== _0x547f6b.childUnitId ||
        (_0x1b473b.stage ?? "stage1") !== _0x547f6b.stage) &&
        this._active$["next"](_0x547f6b);
    }
    setStage(_0x260614, _0x55db59) {
      let _0x346bde = this.getActive();
      !_0x346bde ||
        _0x346bde.embedId !== _0x260614 ||
        ((_0x346bde.stage ?? "stage1") !== _0x55db59 &&
          this._active$["next"]({ ..._0x346bde, stage: _0x55db59 }));
    }
    promote(_0x36ea24) {
      this.getStage(_0x36ea24) === "stage1" &&
        this.setStage(_0x36ea24, "stage2");
    }
    clear(_0x449a93) {
      let _0x103f14 = this.getActive();
      _0x103f14 &&
        (!_0x449a93 || _0x103f14.embedId === _0x449a93) &&
        this._active$["next"](null);
    }
  },
  U = class {
    constructor() {
      (V(this, "_override$", new f["BehaviorSubject"](null)),
        V(this, "override$", this._override$["asObservable"]()));
    }
    getOverride() {
      return this._override$["getValue"]();
    }
    activate(_0x1c6559, _0x5296d9, _0x44d4a2 = {}) {
      var _0x4a089d, _0x59cdfa;
      if (!_0x1c6559.childUnitId || _0x1c6559.childType == null)
        throw Error("EMBED_MENU_OVERRIDE_CHILD_NOT_RESOLVED");
      let _0xfdd7f8 =
        ((_0x4a089d = _0x1c6559.sourceMeta) == null
          ? undefined
          : _0x4a089d.tab) || undefined;
      if (
        _0x5296d9 === "tab-active" &&
        (!_0xfdd7f8 || _0xfdd7f8.enabled !== true)
      )
        throw Error("EMBED_MENU_OVERRIDE_TAB_REQUIRED");
      if (_0x5296d9 !== "tab-active")
        throw Error("EMBED_MENU_OVERRIDE_UNSUPPORTED_REASON");
      if (
        (((_0x59cdfa = _0x44d4a2.layoutPolicy) == null
          ? undefined
          : _0x59cdfa.ribbon) ??
          t.DEFAULT_EMBED_TAB_LAYOUT_POLICY["ribbon"]) !== "host" &&
        _0x44d4a2.allowPlaceholder !== true &&
        _0x44d4a2.allowHiddenRibbon !== true
      )
        return (this.clear(_0x1c6559.embedId), null);
      let _0x32364c = {
          hostUnitId: _0x1c6559.hostUnitId,
          embedId: _0x1c6559.embedId,
          childUnitId: _0x1c6559.childUnitId,
          childType: _0x1c6559.childType,
          entry: _0x1c6559.entry,
          reason: _0x5296d9,
          portalContainer: _0x44d4a2.portalContainer,
          hideHostFxBar:
            _0xfdd7f8 == null ? undefined : _0xfdd7f8.hideHostFxBar,
          lockHostRibbon:
            _0xfdd7f8 == null ? undefined : _0xfdd7f8.lockHostRibbon,
        },
        _0x48e506 = this.getOverride();
      return W(_0x48e506, _0x32364c)
        ? _0x48e506
        : (this._override$["next"](_0x32364c), _0x32364c);
    }
    clear(_0x381e63) {
      let _0x3568bd = this.getOverride();
      _0x3568bd &&
        (!_0x381e63 || _0x3568bd.embedId === _0x381e63) &&
        this._override$["next"](null);
    }
  };
function W(_0x3d3016, _0x2ba941) {
  return (
    _0x3d3016 != null &&
    _0x3d3016.hostUnitId === _0x2ba941.hostUnitId &&
    _0x3d3016.embedId === _0x2ba941.embedId &&
    _0x3d3016.childUnitId === _0x2ba941.childUnitId &&
    _0x3d3016.childType === _0x2ba941.childType &&
    _0x3d3016.entry === _0x2ba941.entry &&
    _0x3d3016.reason === _0x2ba941.reason &&
    _0x3d3016.portalContainer === _0x2ba941.portalContainer &&
    _0x3d3016.hideHostFxBar === _0x2ba941.hideHostFxBar &&
    _0x3d3016.lockHostRibbon === _0x2ba941.lockHostRibbon
  );
}
const G = "data-embed-runtime-focus-role";
var K = class {
  constructor() {
    (V(this, "_leases", new Map()),
      V(this, "_elements", new Map()),
      V(this, "_runtimeScopes", new Map()),
      V(this, "_leaseSequence", 0),
      V(this, "runtimeFocusChanged$", new f["Subject"]()),
      V(this, "runtimeSessionChanged$", new f["Subject"]()));
  }
  acquireLease(_0x274dd8) {
    let _0x774760 = {
        role: _0x274dd8.role,
        owner: _0x274dd8.owner,
        sessionMode: _0x274dd8.sessionMode,
        hostUnitId: _0x274dd8.hostUnitId,
        childUnitId: _0x274dd8.childUnitId,
        childType: _0x274dd8.childType,
        associatedChildUnitIds: _0x274dd8.associatedChildUnitIds,
        sequence: ++this._leaseSequence,
      },
      _0x11db87 = this._leases["get"](_0x274dd8.embedId);
    return (
      _0x11db87 ||
        ((_0x11db87 = new Set()),
        this._leases["set"](_0x274dd8.embedId, _0x11db87)),
      _0x11db87.add(_0x774760),
      _0x774760.role !== "runtime" && this._notifyRuntimeFocusChanged(),
      _0x774760.role === "child-session" && this._notifyRuntimeSessionChanged(),
      (0, a.toDisposable)(() => {
        (_0x11db87 == null || _0x11db87.delete(_0x774760),
          (_0x11db87 == null ? undefined : _0x11db87.size) === 0 &&
            this._leases["delete"](_0x274dd8.embedId),
          _0x774760.role !== "runtime" && this._notifyRuntimeFocusChanged(),
          _0x774760.role === "child-session" &&
            this._notifyRuntimeSessionChanged());
      })
    );
  }
  hasChildInteractionLease(_0x49e24d) {
    if (!_0x49e24d) return false;
    let _0x32f8ac = this._leases["get"](_0x49e24d);
    return _0x32f8ac &&
      [..._0x32f8ac].some((_0x5c4a57) => _0x5c4a57.role !== "runtime")
      ? true
      : this.containsElement(_0x49e24d, this._getActiveElement(_0x49e24d));
  }
  hasBlockingChildFocusLease(_0x4c8c83, _0x2fb1c0) {
    if (!_0x4c8c83) return false;
    let _0xea3b63 = this._leases["get"](_0x4c8c83);
    return _0xea3b63 &&
      [..._0xea3b63].some((_0x2058af) =>
        this._isBlockingLease(_0x2058af, _0x2fb1c0),
      )
      ? true
      : this.containsElement(_0x4c8c83, this._getActiveElement(_0x4c8c83));
  }
  hasAnyChildInteractionLease() {
    return (
      [...this._leases["values"]()].some((_0x25ef5f) =>
        [..._0x25ef5f].some((_0x35fd72) => _0x35fd72.role !== "runtime"),
      ) || this._getActiveOwnedRuntimeFocusInfo() != null
    );
  }
  hasAnyBlockingChildFocusLease(_0x2e7556) {
    if (
      [...this._leases["values"]()].some((_0x140435) =>
        [..._0x140435].some((_0x53be91) =>
          this._isBlockingLease(_0x53be91, _0x2e7556),
        ),
      )
    )
      return true;
    let _0xdc88d4 = this._getActiveOwnedRuntimeFocusInfo();
    return _0xdc88d4 != null && this._isBlockingRole(_0xdc88d4.role);
  }
  hasHostPreservingChildFocusLease(_0x36551d, _0x664f4d) {
    if (!_0x36551d) return false;
    let _0x232a71 = this._leases["get"](_0x36551d);
    return _0x232a71 &&
      [..._0x232a71].some((_0x5469e0) =>
        this._isHostPreservingLease(_0x5469e0, _0x664f4d),
      )
      ? true
      : this.containsElement(_0x36551d, this._getActiveElement(_0x36551d));
  }
  hasAnyHostPreservingChildFocusLease(_0x286243) {
    return [...this._leases["values"]()].some((_0xfa626a) =>
      [..._0xfa626a].some((_0x4d9e33) =>
        this._isHostPreservingLease(_0x4d9e33, _0x286243),
      ),
    )
      ? true
      : this._getActiveOwnedRuntimeFocusInfo() != null;
  }
  hasHostPreservingChildFocusLeaseForHost(_0x1603a2, _0x471432) {
    if (!_0x1603a2) return this.hasAnyHostPreservingChildFocusLease(_0x471432);
    if (
      [...this._leases["values"]()].some((_0x3e3666) =>
        [..._0x3e3666].some(
          (_0x34df81) =>
            this._isHostPreservingLease(_0x34df81, _0x471432) &&
            this._leaseAppliesToHostUnit(_0x34df81, _0x1603a2),
        ),
      )
    )
      return true;
    let _0x5bc794 = this._getActiveOwnedRuntimeFocusInfo();
    if (!_0x5bc794) return false;
    let _0x333781 = this._leases["get"](_0x5bc794.embedId);
    return _0x333781 &&
      [..._0x333781].some(
        (_0x4e9f72) =>
          this._isHostPreservingLease(_0x4e9f72, _0x471432) &&
          this._leaseAppliesToHostUnit(_0x4e9f72, _0x1603a2),
      )
      ? true
      : this._ownedRuntimeFocusAppliesToHost(_0x5bc794.embedId, _0x1603a2);
  }
  isChildUnitInActiveSession(_0x5d8690) {
    return _0x5d8690
      ? [...this._leases["values"]()].some((_0x37609f) =>
          [..._0x37609f].some(
            (_0x436d38) =>
              this._leaseAppliesToChildUnit(_0x436d38, _0x5d8690) &&
              _0x436d38.role !== "runtime",
          ),
        )
      : false;
  }
  registerRuntimeScope(_0x34a664) {
    let _0x324307 = {
        hostUnitId: _0x34a664.hostUnitId,
        childUnitId: _0x34a664.childUnitId,
        childType: _0x34a664.childType,
        sessionMode: _0x34a664.sessionMode,
        sequence: ++this._leaseSequence,
      },
      _0x3c6419 = this._runtimeScopes["get"](_0x34a664.embedId);
    return (
      _0x3c6419 ||
        ((_0x3c6419 = new Set()),
        this._runtimeScopes["set"](_0x34a664.embedId, _0x3c6419)),
      _0x3c6419.add(_0x324307),
      this._notifyRuntimeFocusChanged(),
      this._notifyRuntimeSessionChanged(),
      (0, a.toDisposable)(() => {
        (_0x3c6419 == null || _0x3c6419.delete(_0x324307),
          (_0x3c6419 == null ? undefined : _0x3c6419.size) === 0 &&
            this._runtimeScopes["delete"](_0x34a664.embedId),
          this._notifyRuntimeFocusChanged(),
          this._notifyRuntimeSessionChanged());
      })
    );
  }
  resolveRuntimeScopeByChildUnitId(_0x38a4c0) {
    if (!_0x38a4c0) return;
    let _0x4bfad2;
    for (let [_0x4415fd, _0x319720] of this._runtimeScopes)
      for (let _0x1c6903 of _0x319720)
        _0x1c6903.childUnitId === _0x38a4c0 &&
          (!_0x4bfad2 || _0x1c6903.sequence > _0x4bfad2.scope["sequence"]) &&
          (_0x4bfad2 = { embedId: _0x4415fd, scope: _0x1c6903 });
    if (_0x4bfad2) {
      let { embedId: _0x4f1b6d, scope: _0x32ac5e } = _0x4bfad2;
      return {
        embedId: _0x4f1b6d,
        hostUnitId: _0x32ac5e.hostUnitId,
        childUnitId: _0x32ac5e.childUnitId,
        childType: _0x32ac5e.childType,
        sessionMode: _0x32ac5e.sessionMode,
      };
    }
  }
  resolveActiveChildSessionRuntimeScope() {
    let _0x398ebd;
    for (let [_0x57d31e, _0x523dc9] of this._leases)
      for (let _0x49705f of _0x523dc9) {
        if (_0x49705f.role !== "child-session" || !_0x49705f.childUnitId)
          continue;
        let _0x577843 = this._getChildSessionPriority(_0x49705f);
        (!_0x398ebd ||
          _0x577843 > _0x398ebd.priority ||
          (_0x577843 === _0x398ebd.priority &&
            _0x49705f.sequence > _0x398ebd.lease["sequence"])) &&
          (_0x398ebd = {
            embedId: _0x57d31e,
            lease: _0x49705f,
            priority: _0x577843,
          });
      }
    return _0x398ebd
      ? {
          embedId: _0x398ebd.embedId,
          hostUnitId: _0x398ebd.lease["hostUnitId"],
          childUnitId: _0x398ebd.lease["childUnitId"],
          childType: _0x398ebd.lease["childType"],
          sessionMode: this._resolveChildSessionMode(_0x398ebd.lease),
        }
      : undefined;
  }
  isChildUnitRuntimeEvent(_0x406531, _0x412388, _0x3ec03f) {
    if (!_0x406531) return false;
    let _0x4bb5fb = this._getOwnedEmbedIdFromTarget(_0x412388, _0x3ec03f);
    return _0x4bb5fb
      ? this._ownedEmbedAppliesToChildUnit(_0x4bb5fb, _0x406531)
      : false;
  }
  shouldSuppressHostInteraction(_0x5b9931, _0x2ad9c0, _0x2e3fbd, _0x290819) {
    return this.isChildUnitRuntimeEvent(_0x5b9931, _0x2ad9c0, _0x2e3fbd) ||
      this.isChildUnitInActiveSession(_0x5b9931)
      ? false
      : this.hasHostPreservingChildFocusLeaseForHost(_0x5b9931, _0x290819);
  }
  registerElement(_0x1d3a31) {
    let _0x31e412 = this._elements["get"](_0x1d3a31.embedId);
    (_0x31e412 ||
      ((_0x31e412 = new Set()),
      this._elements["set"](_0x1d3a31.embedId, _0x31e412)),
      _0x31e412.add(_0x1d3a31.element));
    let _0x300161 = _0x1d3a31.element["getAttribute"](G);
    return (
      _0x1d3a31.element["setAttribute"](G, _0x1d3a31.role),
      this._notifyRuntimeFocusChanged(),
      (0, a.toDisposable)(() => {
        (_0x31e412 == null || _0x31e412.delete(_0x1d3a31.element),
          (_0x31e412 == null ? undefined : _0x31e412.size) === 0 &&
            this._elements["delete"](_0x1d3a31.embedId),
          _0x300161 == null
            ? _0x1d3a31.element["removeAttribute"](G)
            : _0x1d3a31.element["setAttribute"](G, _0x300161),
          this._notifyRuntimeFocusChanged());
      })
    );
  }
  listElements(_0x78a7a8) {
    return _0x78a7a8 ? [...(this._elements["get"](_0x78a7a8) ?? [])] : [];
  }
  containsElement(_0x567241, _0x170550, _0x37227d) {
    if (!_0x567241) return false;
    let _0x3919ba = this._elements["get"](_0x567241),
      _0x47b501 =
        typeof (_0x37227d == null ? undefined : _0x37227d.composedPath) ==
        "function"
          ? _0x37227d.composedPath()
          : undefined;
    return (_0x3919ba != null &&
      _0x3919ba.size &&
      _0x47b501 != null &&
      _0x47b501.some(
        (_0x36a2c3) =>
          _0x36a2c3 instanceof HTMLElement &&
          this._containsRegisteredElement(_0x3919ba, _0x36a2c3),
      )) ||
      (_0x47b501 != null &&
        _0x47b501.some(
          (_0x509760) =>
            _0x509760 instanceof HTMLElement &&
            this._isOwnedBoundaryElement(_0x567241, _0x509760),
        ))
      ? true
      : _0x170550 instanceof HTMLElement &&
          ((!!(_0x3919ba != null && _0x3919ba.size) &&
            this._containsRegisteredElement(_0x3919ba, _0x170550)) ||
            this._isOwnedBoundaryElement(_0x567241, _0x170550));
  }
  _containsRegisteredElement(_0x13683b, _0x430722) {
    return [..._0x13683b].some(
      (_0x23db38) => _0x23db38 === _0x430722 || _0x23db38.contains(_0x430722),
    );
  }
  _isBlockingLease(_0x891f73, _0x5038cb) {
    var _0x565d71;
    return _0x891f73.owner &&
      _0x5038cb != null &&
      (_0x565d71 = _0x5038cb.ignoreOwners) != null &&
      _0x565d71.includes(_0x891f73.owner)
      ? false
      : this._isBlockingRole(_0x891f73.role);
  }
  _isHostPreservingLease(_0x3c342d, _0x237775) {
    var _0x3d28b6;
    return _0x3c342d.owner &&
      _0x237775 != null &&
      (_0x3d28b6 = _0x237775.ignoreOwners) != null &&
      _0x3d28b6.includes(_0x3c342d.owner)
      ? false
      : _0x3c342d.role !== "runtime";
  }
  _leaseAppliesToHostUnit(_0x7edf20, _0x87457d) {
    return _0x7edf20.hostUnitId == null || _0x7edf20.hostUnitId === _0x87457d;
  }
  _ownedRuntimeFocusAppliesToHost(_0x3ffba, _0x151a0c) {
    let _0x482349 = this._runtimeScopes["get"](_0x3ffba);
    return (
      !!_0x482349 &&
      [..._0x482349].some(
        (_0x47da41) =>
          _0x47da41.hostUnitId == null || _0x47da41.hostUnitId === _0x151a0c,
      )
    );
  }
  _leaseAppliesToChildUnit(_0x195543, _0x3ed799) {
    var _0x425c72;
    return (
      _0x195543.childUnitId === _0x3ed799 ||
      ((_0x425c72 = _0x195543.associatedChildUnitIds) == null
        ? undefined
        : _0x425c72.includes(_0x3ed799)) === true
    );
  }
  _ownedEmbedAppliesToChildUnit(_0x4c14c8, _0x18b668) {
    if (
      [...(this._runtimeScopes["get"](_0x4c14c8) ?? [])].some(
        (_0x206caf) => _0x206caf.childUnitId === _0x18b668,
      )
    )
      return true;
    let _0x3eaf75 = this._leases["get"](_0x4c14c8);
    return (
      !!_0x3eaf75 &&
      [..._0x3eaf75].some((_0x294d2e) =>
        this._leaseAppliesToChildUnit(_0x294d2e, _0x18b668),
      )
    );
  }
  _isBlockingRole(_0x53efcb) {
    return _0x53efcb !== "runtime";
  }
  _getChildSessionPriority(_0xfbbb77) {
    let _0x3c72e0 = this._resolveChildSessionMode(_0xfbbb77);
    return _0x3c72e0 === "child-fullscreen"
      ? 30
      : _0x3c72e0 === "child-keyboard"
        ? 20
        : _0x3c72e0 === "child-tab"
          ? 10
          : 0;
  }
  _resolveChildSessionMode(_0x1b84b0) {
    return _0x1b84b0.sessionMode
      ? _0x1b84b0.sessionMode
      : _0x1b84b0.owner === "fullscreen-runtime"
        ? "child-fullscreen"
        : _0x1b84b0.owner === "stage2-runtime" ||
            _0x1b84b0.owner === "doc-block-stage2-runtime"
          ? "child-keyboard"
          : _0x1b84b0.owner === "tab-peer-runtime"
            ? "child-tab"
            : _0x1b84b0.role === "child-session"
              ? "child-keyboard"
              : "host-passive";
  }
  _isOwnedBoundaryElement(_0x1104d3, _0x5a33c8) {
    return _0x5a33c8.closest("[" + q + "=\x22" + _0x1104d3 + "\x22]") != null;
  }
  _getOwnedEmbedIdFromTarget(_0x25e2c8, _0x55e68e) {
    let _0x254270 =
        typeof (_0x55e68e == null ? undefined : _0x55e68e.composedPath) ==
        "function"
          ? _0x55e68e.composedPath()
          : undefined,
      _0x186b1a =
        (_0x254270 == null
          ? undefined
          : _0x254270.find(
              (_0x10633b) =>
                this._isHTMLElement(_0x10633b) &&
                _0x10633b.hasAttribute("data-embed-interaction-boundary-owner"),
            )) ??
        (this._isHTMLElement(_0x25e2c8)
          ? (_0x25e2c8.closest("[data-embed-interaction-boundary-owner]") ??
            undefined)
          : undefined);
    return (
      (_0x186b1a == null
        ? undefined
        : _0x186b1a.getAttribute("data-embed-interaction-boundary-owner")) ??
      this._getOwnedEmbedIdFromEventPoint(_0x55e68e)
    );
  }
  _getOwnedEmbedIdFromEventPoint(_0x1a2581) {
    let _0x20cc38 = this._getEventClientPoint(_0x1a2581);
    if (!_0x20cc38) return;
    let _0x205591;
    for (let [_0x401ce3, _0x39d5f1] of this._elements)
      for (let _0x398ded of _0x39d5f1) {
        let _0xc74c6d = _0x398ded.getBoundingClientRect();
        if (
          !this._rectContainsPoint(
            _0xc74c6d,
            _0x20cc38.clientX,
            _0x20cc38.clientY,
          )
        )
          continue;
        let _0x5d463f = _0xc74c6d.width * _0xc74c6d.height;
        (!_0x205591 || _0x5d463f < _0x205591.area) &&
          (_0x205591 = { embedId: _0x401ce3, area: _0x5d463f });
      }
    return _0x205591 == null ? undefined : _0x205591.embedId;
  }
  _getEventClientPoint(_0x7aad11) {
    let _0x369db8 = _0x7aad11;
    if (_0x369db8) {
      if (
        Number.isFinite(_0x369db8.clientX) &&
        Number.isFinite(_0x369db8.clientY)
      )
        return { clientX: _0x369db8.clientX, clientY: _0x369db8.clientY };
      if (Number.isFinite(_0x369db8.x) && Number.isFinite(_0x369db8.y))
        return { clientX: _0x369db8.x, clientY: _0x369db8.y };
    }
  }
  _rectContainsPoint(_0x59f0ef, _0x486339, _0x861b10) {
    return (
      _0x59f0ef.width > 0 &&
      _0x59f0ef.height > 0 &&
      _0x486339 >= _0x59f0ef.left &&
      _0x486339 <= _0x59f0ef.right &&
      _0x861b10 >= _0x59f0ef.top &&
      _0x861b10 <= _0x59f0ef.bottom
    );
  }
  _getActiveOwnedRuntimeFocusInfo() {
    var _0x460e42;
    let _0x5c5ab5 = this._getAnyActiveElement();
    if (!this._isHTMLElement(_0x5c5ab5)) return;
    let _0x3b4ca2 = _0x5c5ab5.closest("[" + q + "]");
    if (!_0x3b4ca2) return;
    let _0x133bab = _0x3b4ca2.getAttribute(q),
      _0x5cb032 =
        (_0x460e42 = _0x5c5ab5.closest("[data-embed-runtime-focus-role]")) ==
        null
          ? undefined
          : _0x460e42.getAttribute(G);
    return _0x133bab && this._isRuntimeFocusRole(_0x5cb032)
      ? { embedId: _0x133bab, role: _0x5cb032 }
      : undefined;
  }
  _isHTMLElement(_0x129a2e) {
    var _0x493e70;
    if (!_0x129a2e) return false;
    let _0x1d4200 =
      (_0x493e70 = _0x129a2e.ownerDocument) == null
        ? undefined
        : _0x493e70.defaultView;
    return _0x1d4200
      ? _0x129a2e instanceof _0x1d4200.HTMLElement
      : typeof HTMLElement < "u" && _0x129a2e instanceof HTMLElement;
  }
  _isRuntimeFocusRole(_0xd94b6a) {
    return (
      _0xd94b6a === "runtime" ||
      _0xd94b6a === "child-session" ||
      _0xd94b6a === "child-editor" ||
      _0xd94b6a === "child-popup" ||
      _0xd94b6a === "floating-menu"
    );
  }
  _getAnyActiveElement() {
    for (let _0x300967 of this._elements["values"]()) {
      var _0x56c4bb;
      let _0x209480 =
        (_0x56c4bb = _0x300967.values().next().value) == null
          ? undefined
          : _0x56c4bb.ownerDocument;
      if (_0x209480 != null && _0x209480.activeElement)
        return _0x209480.activeElement;
    }
    return typeof document > "u" ? null : document.activeElement;
  }
  _getActiveElement(_0x20ba6a) {
    var _0x50f7cf;
    let _0x2bc2e3 = this._elements["get"](_0x20ba6a),
      _0x54ca67 =
        _0x2bc2e3 == null ||
        (_0x50f7cf = _0x2bc2e3.values().next().value) == null
          ? undefined
          : _0x50f7cf.ownerDocument;
    return (
      (_0x54ca67 == null ? undefined : _0x54ca67.activeElement) ??
      (typeof document > "u" ? null : document.activeElement)
    );
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
      (V(this, "_roots", new Map()),
        V(this, "_childUnitIds", new Map()),
        V(this, "_portalObservers", new WeakMap()),
        V(this, "_closedPortalInputGuards", new WeakSet()),
        V(this, "_activePortalOwners", new WeakMap()),
        V(this, "_pendingPortalOwner", undefined));
    }
    registerRoot(_0x2518d5, _0x2c945d, _0x101d76) {
      let _0x3438e1 = this._roots["get"](_0x2518d5);
      (_0x3438e1 ||
        ((_0x3438e1 = new Set()), this._roots["set"](_0x2518d5, _0x3438e1)),
        _0x101d76 && this._childUnitIds["set"](_0x2518d5, _0x101d76),
        _0x3438e1.add(_0x2c945d));
      let _0x4cd8e2 = _0x2c945d.getAttribute(q),
        _0x2b757c = _0x2c945d.getAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE);
      (_0x2c945d.setAttribute(q, _0x2518d5),
        _0x101d76 &&
          _0x2c945d.setAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE, _0x101d76));
      let _0x4fee73 = this._registerRootPopupDescendantFocusRoles(
          _0x2518d5,
          _0x2c945d,
        ),
        _0x1c5d0a = () =>
          this._claimBodyPortals(_0x2518d5, _0x2c945d.ownerDocument);
      return (
        _0x2c945d.addEventListener("pointerdown", _0x1c5d0a, true),
        _0x2c945d.addEventListener("mousedown", _0x1c5d0a, true),
        _0x2c945d.addEventListener("focusin", _0x1c5d0a, true),
        (0, a.toDisposable)(() => {
          var _0x22227a;
          (_0x4fee73.dispose(),
            _0x2c945d.removeEventListener("pointerdown", _0x1c5d0a, true),
            _0x2c945d.removeEventListener("mousedown", _0x1c5d0a, true),
            _0x2c945d.removeEventListener("focusin", _0x1c5d0a, true),
            ((_0x22227a = this._pendingPortalOwner) == null
              ? undefined
              : _0x22227a.embedId) === _0x2518d5 &&
              this._pendingPortalOwner["document"] ===
                _0x2c945d.ownerDocument &&
              (this._pendingPortalOwner = undefined),
            _0x3438e1 == null || _0x3438e1.delete(_0x2c945d),
            _0x3438e1 &&
              _0x3438e1.size === 0 &&
              (this._roots["delete"](_0x2518d5),
              this._childUnitIds["delete"](_0x2518d5)),
            _0x4cd8e2 == null
              ? _0x2c945d.removeAttribute(q)
              : _0x2c945d.setAttribute(q, _0x4cd8e2),
            _0x2b757c == null
              ? _0x2c945d.removeAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE)
              : _0x2c945d.setAttribute(
                  c.EMBED_CHILD_UNIT_ID_ATTRIBUTE,
                  _0x2b757c,
                ));
        })
      );
    }
    _registerRootPopupDescendantFocusRoles(_0x17e1d2, _0x143e37) {
      let _0x59411b = _0x143e37.ownerDocument["defaultView"],
        _0x5865dd = new Map(),
        _0xb71abb = new Map(),
        _0x4bee41,
        _0xfdc077 = false,
        _0x1b0991 = (_0x4b6e7b) => {
          (_0x5865dd.has(_0x4b6e7b) ||
            _0x5865dd.set(_0x4b6e7b, _0x4b6e7b.getAttribute(q)),
            _0xb71abb.has(_0x4b6e7b) ||
              _0xb71abb.set(_0x4b6e7b, _0x4b6e7b.getAttribute(G)));
        },
        _0x1c774e = (_0xae1c2b) => {
          (_0x1b0991(_0xae1c2b),
            _0xae1c2b.setAttribute(q, _0x17e1d2),
            _0xae1c2b.setAttribute(G, "child-popup"));
        },
        _0x26183c = (_0x3977e3) => {
          this._isUniverPortalTreeElement(_0x3977e3) &&
            (_0x1c774e(_0x3977e3),
            _0x3977e3.querySelectorAll("*").forEach(_0x1c774e));
        },
        _0x2c517a = (_0x4bc79c) => {
          _0xfdc077 ||
            (_0x26183c(_0x4bc79c),
            _0x4bc79c
              .querySelectorAll("*")
              .forEach((_0x83565b) => _0x26183c(_0x83565b)));
        };
      return (
        _0x2c517a(_0x143e37),
        _0x59411b != null &&
          _0x59411b.MutationObserver &&
          ((_0x4bee41 = new _0x59411b["MutationObserver"]((_0x5cf0dc) => {
            _0x5cf0dc.forEach((_0x1be4f2) => {
              _0x1be4f2.addedNodes["forEach"]((_0x32ce20) => {
                _0x32ce20 instanceof _0x59411b.HTMLElement &&
                  _0x2c517a(_0x32ce20);
              });
            });
          })),
          _0x4bee41.observe(_0x143e37, { childList: true, subtree: true })),
        (0, a.toDisposable)(() => {
          ((_0xfdc077 = true),
            _0x4bee41 == null || _0x4bee41.disconnect(),
            _0x5865dd.forEach((_0x1fd015, _0x19e436) => {
              if (_0x1fd015 == null) {
                _0x19e436.removeAttribute(q);
                return;
              }
              _0x19e436.setAttribute(q, _0x1fd015);
            }),
            _0xb71abb.forEach((_0x375dda, _0x2e0dc2) => {
              if (_0x375dda == null) {
                _0x2e0dc2.removeAttribute(G);
                return;
              }
              _0x2e0dc2.setAttribute(G, _0x375dda);
            }));
        })
      );
    }
    registerOwnedElement(_0x4ab6d1, _0x5436c9) {
      let _0x38a3b5 = this._roots["get"](_0x4ab6d1);
      (_0x38a3b5 ||
        ((_0x38a3b5 = new Set()), this._roots["set"](_0x4ab6d1, _0x38a3b5)),
        _0x38a3b5.add(_0x5436c9));
      let _0x490b4e = this._markInteractionBoundaryOwnerTree(
        _0x4ab6d1,
        _0x5436c9,
      );
      return (0, a.toDisposable)(() => {
        (_0x38a3b5 == null || _0x38a3b5.delete(_0x5436c9),
          _0x38a3b5 && _0x38a3b5.size === 0 && this._roots["delete"](_0x4ab6d1),
          _0x490b4e.dispose());
      });
    }
    contains(_0x4751f9, _0x1464cc, _0x3b35a7) {
      let _0x3c8d89 =
        typeof (_0x3b35a7 == null ? undefined : _0x3b35a7.composedPath) ==
        "function"
          ? _0x3b35a7.composedPath()
          : undefined;
      if (
        _0x3c8d89 != null &&
        _0x3c8d89.some(
          (_0x350164) =>
            _0x350164 instanceof HTMLElement &&
            this._isOwnedElement(_0x4751f9, _0x350164),
        )
      )
        return true;
      if (!(_0x1464cc instanceof HTMLElement)) return false;
      if (this._isOwnedElement(_0x4751f9, _0x1464cc)) return true;
      if (!_0x4751f9)
        return Array.from(this._roots["values"]()).some((_0x2c91bd) =>
          [..._0x2c91bd].some(
            (_0x55d49a) =>
              _0x55d49a.isConnected && _0x55d49a.contains(_0x1464cc),
          ),
        );
      let _0x5b6c74 = this._roots["get"](_0x4751f9);
      return (
        !!_0x5b6c74 &&
        [..._0x5b6c74].some(
          (_0x34988d) => _0x34988d.isConnected && _0x34988d.contains(_0x1464cc),
        )
      );
    }
    hasRecentInteraction(_0xff8869) {
      let _0x1c1179 = _0xff8869
        ? this._activePortalOwners["get"](_0xff8869)
        : typeof document < "u"
          ? this._activePortalOwners["get"](document)
          : undefined;
      if (_0x1c1179 != null && _0x1c1179.length) return true;
      let _0x45fc2f = this._pendingPortalOwner;
      return !_0x45fc2f || Date.now() > _0x45fc2f.expiresAt
        ? false
        : !_0xff8869 || _0x45fc2f.document === _0xff8869;
    }
    hasRecentInteractionFor(_0x2ebb1c, _0x38ad54) {
      if (!_0x2ebb1c) return false;
      let _0x387e06 = _0x38ad54
        ? this._activePortalOwners["get"](_0x38ad54)
        : typeof document < "u"
          ? this._activePortalOwners["get"](document)
          : undefined;
      if (
        _0x387e06 != null &&
        _0x387e06.some((_0x34a7ca) => _0x34a7ca.embedId === _0x2ebb1c)
      )
        return true;
      let _0x11c5b4 = this._pendingPortalOwner;
      return !_0x11c5b4 ||
        _0x11c5b4.embedId !== _0x2ebb1c ||
        Date.now() > _0x11c5b4.expiresAt
        ? false
        : !_0x38ad54 || _0x11c5b4.document === _0x38ad54;
    }
    closeOwnedFloatingSurfaces(_0x2108d4, _0x52d6d3) {
      !_0x2108d4 ||
        !(_0x52d6d3 != null && _0x52d6d3.body) ||
        this._collectOwnedFloatingSurfaceRoots(_0x2108d4, _0x52d6d3).forEach(
          (_0x13dbfd) =>
            this._dispatchEscapeToFloatingSurface(_0x13dbfd, _0x52d6d3),
        );
    }
    activatePortalScope(_0x5162a1, _0x540d00, _0x30d13a = {}) {
      var _0x5d1ea8;
      if (!(_0x540d00 != null && _0x540d00.body))
        return (0, a.toDisposable)(() => {});
      let _0x1487b6 = Symbol(_0x5162a1),
        _0x1d2e2c = this._activePortalOwners["get"](_0x540d00) ?? [],
        _0x351f69 = _0x30d13a.includeAppShellEditorPortal ?? true;
      return (
        _0x1d2e2c.push({
          embedId: _0x5162a1,
          includeAppShellEditorPortal: _0x351f69,
          token: _0x1487b6,
        }),
        this._activePortalOwners["set"](_0x540d00, _0x1d2e2c),
        this._ensurePortalObserver(_0x540d00),
        this._markExistingBodyPortals(_0x5162a1, _0x540d00, {
          includeAppShellEditorPortal: _0x351f69,
          allowOwnedPortalReassignment: true,
          allowDirectBodyPortal: false,
        }),
        this._cleanupOrdinaryBodyChromeClaims(_0x5162a1, _0x540d00),
        (_0x5d1ea8 = _0x540d00.defaultView) == null ||
          _0x5d1ea8.setTimeout(() => {
            let _0x13c461 = this._getLatestActivePortalOwner(_0x540d00);
            (_0x13c461 == null ? undefined : _0x13c461.embedId) === _0x5162a1 &&
              _0x13c461.token === _0x1487b6 &&
              (this._markExistingBodyPortals(_0x5162a1, _0x540d00, {
                includeAppShellEditorPortal: _0x351f69,
                allowOwnedPortalReassignment: true,
                allowDirectBodyPortal: false,
              }),
              this._cleanupOrdinaryBodyChromeClaims(_0x5162a1, _0x540d00));
          }, 0),
        (0, a.toDisposable)(() => {
          let _0x1d28fd = this._activePortalOwners["get"](_0x540d00),
            _0x16412a = false;
          if (_0x1d28fd) {
            let _0x4ed371 = _0x1d28fd.findIndex(
              (_0x49ca5c) =>
                _0x49ca5c.embedId === _0x5162a1 &&
                _0x49ca5c.token === _0x1487b6,
            );
            (_0x4ed371 >= 0 && _0x1d28fd.splice(_0x4ed371, 1),
              (_0x16412a = _0x1d28fd.some(
                (_0x494af5) => _0x494af5.embedId === _0x5162a1,
              )),
              _0x1d28fd.length === 0 &&
                this._activePortalOwners["delete"](_0x540d00));
          }
          _0x16412a || this._releaseBodyPortalClaims(_0x5162a1, _0x540d00);
          let _0x33065f = this._getLatestActivePortalOwner(_0x540d00);
          _0x33065f &&
            (this._markExistingBodyPortals(_0x33065f.embedId, _0x540d00, {
              includeAppShellEditorPortal:
                _0x33065f.includeAppShellEditorPortal,
              allowOwnedPortalReassignment: true,
              allowDirectBodyPortal: false,
            }),
            this._cleanupOrdinaryBodyChromeClaims(
              _0x33065f.embedId,
              _0x540d00,
            ));
        })
      );
    }
    _collectOwnedFloatingSurfaceRoots(_0x595ba2, _0xa5a78c) {
      var _0x16d41c;
      let _0x239dc5 = new Set(),
        _0x56a895 = (_0xab6286) => {
          let _0x5a0635 = this._resolveFloatingSurfaceRoot(_0xab6286);
          !_0x5a0635 ||
            !this._isOwnedElement(_0x595ba2, _0x5a0635) ||
            _0x239dc5.add(_0x5a0635);
        };
      return (
        _0xa5a78c.body["querySelectorAll"](
          "[" + q + "=\x22" + _0x595ba2 + "\x22]",
        ).forEach(_0x56a895),
        (_0x16d41c = this._roots["get"](_0x595ba2)) == null ||
          _0x16d41c.forEach((_0x33fa57) => {
            _0x33fa57.isConnected &&
              (_0x56a895(_0x33fa57),
              _0x33fa57.querySelectorAll("*").forEach(_0x56a895));
          }),
        [..._0x239dc5].sort((_0x538927, _0x154674) =>
          _0x538927.contains(_0x154674)
            ? 1
            : _0x154674.contains(_0x538927)
              ? -1
              : 0,
        )
      );
    }
    _resolveFloatingSurfaceRoot(_0x388113) {
      if (
        !_0x388113.closest(
          '[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"]',
        ) &&
        this._isUniverPortalTreeElement(_0x388113)
      )
        return (
          _0x388113.closest(
            '.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]',
          ) ?? _0x388113
        );
    }
    _dispatchEscapeToFloatingSurface(_0x8d8283, _0x32401) {
      let _0x4aecc0 = _0x32401.defaultView,
        _0x19df9f =
          _0x32401.activeElement instanceof HTMLElement &&
          _0x8d8283.contains(_0x32401.activeElement)
            ? _0x32401.activeElement
            : _0x8d8283,
        _0xcd08d1 =
          _0x4aecc0 != null && _0x4aecc0.KeyboardEvent
            ? new _0x4aecc0.KeyboardEvent("keydown", {
                key: "Escape",
                code: "Escape",
                bubbles: true,
                cancelable: true,
              })
            : new Event("keydown", { bubbles: true, cancelable: true });
      _0x19df9f.dispatchEvent(_0xcd08d1);
    }
    _isOwnedElement(_0x20afc2, _0xb7a0cf) {
      let _0x223c93 = _0xb7a0cf.closest("[" + q + "]"),
        _0x168bc9 = _0x223c93 == null ? undefined : _0x223c93.getAttribute(q);
      if (_0x168bc9 && (!_0x20afc2 || _0x168bc9 === _0x20afc2)) return true;
      if (!_0x20afc2)
        return Array.from(this._roots["values"]()).some((_0x5cd1fd) =>
          [..._0x5cd1fd].some(
            (_0x17f3c8) =>
              _0x17f3c8 === _0xb7a0cf || _0x17f3c8.contains(_0xb7a0cf),
          ),
        );
      let _0x2d456a = this._roots["get"](_0x20afc2);
      return (
        !!_0x2d456a &&
        [..._0x2d456a].some(
          (_0x424abe) =>
            _0x424abe === _0xb7a0cf || _0x424abe.contains(_0xb7a0cf),
        )
      );
    }
    _claimBodyPortals(_0x53d368, _0x4c99cc) {
      var _0x160539;
      _0x4c99cc != null &&
        _0x4c99cc.body &&
        ((this._pendingPortalOwner = {
          embedId: _0x53d368,
          document: _0x4c99cc,
          expiresAt: Date.now() + 1000,
        }),
        this._ensurePortalObserver(_0x4c99cc),
        this._markExistingBodyPortals(_0x53d368, _0x4c99cc, {
          includeAppShellEditorPortal: false,
        }),
        (_0x160539 = _0x4c99cc.defaultView) == null ||
          _0x160539.setTimeout(() => {
            let _0x1c222e = this._pendingPortalOwner;
            (_0x1c222e == null ? undefined : _0x1c222e.embedId) === _0x53d368 &&
              _0x1c222e.document === _0x4c99cc &&
              Date.now() <= _0x1c222e.expiresAt &&
              this._markExistingBodyPortals(_0x53d368, _0x4c99cc, {
                includeAppShellEditorPortal: false,
              });
          }, 0));
    }
    _ensurePortalObserver(_0x719d4c) {
      if (this._portalObservers["has"](_0x719d4c) || !_0x719d4c.body) return;
      let _0x184d15 = _0x719d4c.defaultView;
      if (!(_0x184d15 != null && _0x184d15.MutationObserver)) return;
      let _0x31ec1d = new _0x184d15.MutationObserver((_0x595473) => {
        let _0x37644c = this._getBodyPortalOwner(_0x719d4c);
        if (!_0x37644c) return;
        let _0x360dae = {
          includeAppShellEditorPortal: _0x37644c.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: _0x37644c.stable,
          allowDirectBodyPortal: !_0x37644c.stable,
        };
        (_0x595473.forEach((_0x479a44) => {
          (_0x479a44.type === "attributes" &&
            _0x479a44.target instanceof _0x184d15.HTMLElement &&
            (this._markBodyPortalOwner(
              _0x479a44.target,
              _0x37644c.embedId,
              _0x719d4c,
              _0x360dae,
            ),
            _0x479a44.attributeName === "data-state" &&
              this._syncClosedPortalInputGuard(
                _0x479a44.target,
                _0x37644c.embedId,
              )),
            _0x479a44.addedNodes["forEach"]((_0x148ff6) => {
              _0x148ff6 instanceof _0x184d15.HTMLElement &&
                (this._markBodyPortalOwner(
                  _0x148ff6,
                  _0x37644c.embedId,
                  _0x719d4c,
                  _0x360dae,
                ),
                _0x148ff6.querySelectorAll("*").forEach((_0x4bb2c2) => {
                  this._markBodyPortalOwner(
                    _0x4bb2c2,
                    _0x37644c.embedId,
                    _0x719d4c,
                    _0x360dae,
                  );
                }),
                _0x148ff6.hasAttribute("data-state") &&
                  this._syncClosedPortalInputGuard(
                    _0x148ff6,
                    _0x37644c.embedId,
                  ),
                _0x148ff6
                  .querySelectorAll("[data-state]")
                  .forEach((_0x5e2c26) => {
                    this._syncClosedPortalInputGuard(
                      _0x5e2c26,
                      _0x37644c.embedId,
                    );
                  }));
            }));
        }),
          _0x37644c.stable &&
            this._cleanupOrdinaryBodyChromeClaims(
              _0x37644c.embedId,
              _0x719d4c,
            ));
      });
      (_0x31ec1d.observe(_0x719d4c.body, {
        attributeFilter: [
          "class",
          "data-state",
          "data-u-comp",
          "id",
          "role",
          "style",
        ],
        attributes: true,
        childList: true,
        subtree: true,
      }),
        _0x31ec1d.takeRecords(),
        this._portalObservers["set"](_0x719d4c, _0x31ec1d));
    }
    _markBodyPortalOwner(_0x1d93f0, _0x49fe41, _0xe1a174, _0x4eb814 = {}) {
      (_0x4eb814.allowDirectBodyPortal === false &&
        _0x1d93f0.parentElement === _0xe1a174.body &&
        !this._isUniverPortalCandidate(_0x1d93f0) &&
        !this._isAppShellEditorPortalCandidate(_0x1d93f0)) ||
        (this._isBodyPortalCandidate(_0x1d93f0, _0xe1a174, _0x4eb814) &&
          ((!this._isAppShellEditorPortalCandidate(_0x1d93f0) &&
            this._isDetachedOffscreenPortalCandidate(_0x1d93f0, _0xe1a174)) ||
            (this._blurActiveElementBeforePortalReassignment(
              _0x1d93f0,
              _0x49fe41,
              _0xe1a174,
            ),
            this._markInteractionBoundaryOwnerTree(_0x49fe41, _0x1d93f0, {
              transient: true,
            }),
            this._markRuntimeFocusRole(_0x1d93f0, _0x4eb814))));
    }
    _markExistingBodyPortals(_0xfec171, _0x4c1f81, _0x16c854 = {}) {
      _0x4c1f81.body["querySelectorAll"]("*").forEach((_0x3f87b9) => {
        this._markBodyPortalOwner(_0x3f87b9, _0xfec171, _0x4c1f81, {
          includeAppShellEditorPortal: _0x16c854.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: _0x16c854.allowOwnedPortalReassignment,
          allowDirectBodyPortal: _0x16c854.allowDirectBodyPortal,
        });
      });
    }
    _isBodyPortalCandidate(_0x56d322, _0xfdc9a3, _0x2e55f2 = {}) {
      if (!_0xfdc9a3.body["contains"](_0x56d322)) return false;
      let _0xded2f0 =
          !!_0x2e55f2.includeAppShellEditorPortal &&
          this._isAppShellEditorPortalCandidate(_0x56d322),
        _0xfafde2 = this._isUniverPortalCandidate(_0x56d322);
      if (
        (!_0x2e55f2.allowOwnedPortalReassignment &&
          !_0xded2f0 &&
          _0x56d322.closest("[data-embed-interaction-boundary-owner]")) ||
        _0x56d322.id === "app"
      )
        return false;
      let _0x35ea13 = _0x56d322.parentElement;
      return (
        (!!_0x2e55f2.allowDirectBodyPortal && _0x35ea13 === _0xfdc9a3.body) ||
        (_0x35ea13 == null
          ? undefined
          : _0x35ea13.closest("[data-radix-popper-content-wrapper]")) != null ||
        _0xfafde2 ||
        _0xded2f0
      );
    }
    _isAppShellEditorPortalCandidate(_0x3ccb49) {
      var _0x877449, _0x39612;
      return ((_0x877449 = _0x3ccb49.parentElement) == null
        ? undefined
        : _0x877449.id) !== "app" &&
        ((_0x39612 = _0x3ccb49.closest("#app")) == null
          ? undefined
          : _0x39612.parentElement) !== _0x3ccb49.ownerDocument["body"]
        ? false
        : _0x3ccb49.id["startsWith"](
            "univer-doc-selection-container-__INTERNAL_EDITOR__",
          ) ||
            _0x3ccb49.id["startsWith"]("__editor___INTERNAL_EDITOR__") ||
            _0x3ccb49.closest(
              '[id^="univer-doc-selection-container-__INTERNAL_EDITOR__"]',
            ) != null ||
            _0x3ccb49.closest('[id^="__editor___INTERNAL_EDITOR__"]') != null;
    }
    _isHostDocEditorPortal(_0x109199) {
      return (
        _0x109199.id["startsWith"]("__editor_docs-") ||
        _0x109199.id["startsWith"]("univer-doc-selection-container-docs-") ||
        _0x109199.closest('[id^="univer-doc-selection-container-docs-"]') !=
          null ||
        _0x109199.closest('[id^="__editor_docs-"]') != null
      );
    }
    _isUniverPortalCandidate(_0x217a63) {
      let _0x54f5a4 =
        typeof _0x217a63.className == "string" ? _0x217a63.className : "";
      if (
        _0x217a63.getAttribute("data-u-comp") === "rect-popup" ||
        _0x217a63.classList["contains"]("univer-popup") ||
        _0x217a63.classList["contains"]("univer-popover") ||
        _0x217a63.classList["contains"]("univer-dropdown") ||
        /\buniver-(popup|popover|dropdown|calendar|tooltip|menu)\b/["test"](
          _0x54f5a4,
        )
      )
        return true;
      let _0x40fbac = _0x217a63.getAttribute("role");
      return (
        _0x40fbac === "dialog" ||
        _0x40fbac === "listbox" ||
        _0x40fbac === "menu" ||
        _0x40fbac === "tooltip" ||
        _0x217a63.hasAttribute("data-radix-popper-content-wrapper")
      );
    }
    _isDetachedOffscreenPortalCandidate(_0x58c0f6, _0x40d481) {
      if (!this._isUniverPortalTreeElement(_0x58c0f6)) return false;
      let _0x3a92d1 =
          _0x58c0f6.closest(
            ".univer-popup,\x20.univer-popover,\x20.univer-dropdown,\x20[data-radix-popper-content-wrapper],\x20[data-u-comp=\x22rect-popup\x22],\x20[role=\x22dialog\x22],\x20[role=\x22listbox\x22],\x20[role=\x22menu\x22],\x20[role=\x22tooltip\x22]",
          ) ?? _0x58c0f6,
        _0x558eef = _0x3a92d1.closest("#app") ?? _0x3a92d1.parentElement;
      if (
        _0x3a92d1.parentElement !== _0x40d481.body &&
        (_0x558eef == null ? undefined : _0x558eef.parentElement) !==
          _0x40d481.body
      )
        return false;
      let _0x3474ea = _0x40d481.defaultView;
      if (!_0x3474ea) return false;
      let _0x47a09b = _0x3a92d1.getBoundingClientRect();
      return _0x47a09b.right < 0 ||
        _0x47a09b.bottom < 0 ||
        _0x47a09b.left > _0x3474ea.innerWidth ||
        _0x47a09b.top > _0x3474ea.innerHeight
        ? true
        : _0x47a09b.width <= 0 || _0x47a09b.height <= 0
          ? _0x47a09b.left < 0 ||
            _0x47a09b.top < 0 ||
            _0x47a09b.left > _0x3474ea.innerWidth ||
            _0x47a09b.top > _0x3474ea.innerHeight
          : false;
    }
    _markRuntimeFocusRole(_0x479693, _0x380cb4 = {}) {
      let _0x37a005 =
        _0x380cb4.includeAppShellEditorPortal &&
        this._isAppShellEditorPortalCandidate(_0x479693)
          ? "child-editor"
          : this._isUniverPortalTreeElement(_0x479693)
            ? "child-popup"
            : undefined;
      _0x37a005 &&
        (_0x479693.setAttribute(G, _0x37a005),
        _0x479693.querySelectorAll("*").forEach((_0x9baf39) => {
          _0x9baf39.setAttribute(G, _0x37a005);
        }));
    }
    _syncClosedPortalInputGuard(_0x1724fd, _0x5b1c8c) {
      let _0x13060e =
          this._isUniverPortalCandidate(_0x1724fd) ||
          _0x1724fd.closest("[data-radix-popper-content-wrapper]") != null,
        _0x2dfb8e =
          _0x1724fd.getAttribute("data-embed-interaction-boundary-owner") ===
            _0x5b1c8c &&
          _0x1724fd.getAttribute("data-state") === "closed" &&
          _0x13060e,
        _0x50dd6a =
          _0x1724fd.closest("[data-radix-popper-content-wrapper]") ?? _0x1724fd;
      if (_0x2dfb8e) {
        _0x50dd6a.classList["contains"](le) ||
          (_0x50dd6a.classList["add"](le),
          this._closedPortalInputGuards["add"](_0x50dd6a));
        return;
      }
      this._clearClosedPortalInputGuard(_0x50dd6a);
    }
    _clearClosedPortalInputGuard(_0x1c00f9) {
      this._closedPortalInputGuards["has"](_0x1c00f9) &&
        (_0x1c00f9.classList["remove"](le),
        this._closedPortalInputGuards["delete"](_0x1c00f9));
    }
    _markInteractionBoundaryOwnerTree(_0x18132e, _0x2efd53, _0x5c2995 = {}) {
      let _0x10ccd6 = new Map(),
        _0x2b5fe4 = new Map(),
        _0x498a3d = this._childUnitIds["get"](_0x18132e),
        _0x36c574 = (_0x1d8fa2) => {
          (_0x5c2995.transient ||
            (_0x10ccd6.set(_0x1d8fa2, _0x1d8fa2.getAttribute(q)),
            _0x2b5fe4.set(
              _0x1d8fa2,
              _0x1d8fa2.getAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE),
            )),
            _0x1d8fa2.setAttribute(q, _0x18132e),
            _0x498a3d &&
              _0x1d8fa2.setAttribute(
                c.EMBED_CHILD_UNIT_ID_ATTRIBUTE,
                _0x498a3d,
              ));
        };
      return (
        _0x36c574(_0x2efd53),
        _0x2efd53.querySelectorAll("*").forEach(_0x36c574),
        (0, a.toDisposable)(() => {
          (_0x10ccd6.forEach((_0x15fc6f, _0xac2a99) => {
            if (_0x15fc6f == null) {
              _0xac2a99.removeAttribute(q);
              return;
            }
            _0xac2a99.setAttribute(q, _0x15fc6f);
          }),
            _0x2b5fe4.forEach((_0x5eec45, _0x74c9bb) => {
              if (_0x5eec45 == null) {
                _0x74c9bb.removeAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE);
                return;
              }
              _0x74c9bb.setAttribute(
                c.EMBED_CHILD_UNIT_ID_ATTRIBUTE,
                _0x5eec45,
              );
            }));
        })
      );
    }
    _isUniverPortalTreeElement(_0x318614) {
      return (
        this._isUniverPortalCandidate(_0x318614) ||
        _0x318614.closest(
          '.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]',
        ) != null
      );
    }
    _getBodyPortalOwner(_0x8885dd) {
      let _0x43f996 = this._getLatestActivePortalOwner(_0x8885dd);
      if (_0x43f996)
        return {
          embedId: _0x43f996.embedId,
          includeAppShellEditorPortal: _0x43f996.includeAppShellEditorPortal,
          stable: true,
        };
      let _0x4486fb = this._pendingPortalOwner;
      if (
        _0x4486fb &&
        _0x4486fb.document === _0x8885dd &&
        Date.now() <= _0x4486fb.expiresAt
      )
        return {
          embedId: _0x4486fb.embedId,
          includeAppShellEditorPortal: false,
          stable: false,
        };
    }
    _getLatestActivePortalOwner(_0x497fae) {
      let _0x4d87db = this._activePortalOwners["get"](_0x497fae);
      return _0x4d87db == null ? undefined : _0x4d87db[_0x4d87db.length - 1];
    }
    _cleanupOrdinaryBodyChromeClaims(_0x5273a5, _0xb791bf) {
      let _0x5f578b = this._roots["get"](_0x5273a5);
      _0xb791bf.body["querySelectorAll"](
        "[" + q + "=\x22" + _0x5273a5 + "\x22]",
      ).forEach((_0x57abf2) => {
        _0x57abf2.parentElement === _0xb791bf.body &&
          ((_0x5f578b &&
            [..._0x5f578b].some(
              (_0xa201f2) =>
                _0xa201f2 === _0x57abf2 || _0xa201f2.contains(_0x57abf2),
            )) ||
            this._isUniverPortalCandidate(_0x57abf2) ||
            this._isAppShellEditorPortalCandidate(_0x57abf2) ||
            (_0x57abf2.removeAttribute(q),
            _0x57abf2.removeAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE)));
      });
    }
    _blurActiveElementBeforePortalReassignment(
      _0x5006f3,
      _0xf3974a,
      _0x26f8da,
    ) {
      let _0x5405c5 = _0x5006f3.getAttribute(q);
      if (!_0x5405c5 || _0x5405c5 === _0xf3974a) return;
      let _0x47c512 = _0x26f8da.activeElement;
      !(_0x47c512 instanceof HTMLElement) ||
        (_0x47c512 !== _0x5006f3 && !_0x5006f3.contains(_0x47c512)) ||
        (_0x47c512.blur(),
        _0x26f8da.activeElement === _0x47c512 &&
          this._focusDocumentBody(_0x26f8da));
    }
    _releaseBodyPortalClaims(_0x523630, _0x11ab9f) {
      let _0x19d3c4 = this._roots["get"](_0x523630),
        _0x1b5ddb = _0x11ab9f.body["querySelectorAll"](
          "[" + q + "=\x22" + _0x523630 + "\x22]",
        ),
        _0x52a639 = (_0x31b743) =>
          _0x19d3c4 != null &&
          [..._0x19d3c4].some(
            (_0x22c70) =>
              _0x22c70 === _0x31b743 || _0x22c70.contains(_0x31b743),
          ),
        _0x21f882 = [];
      _0x1b5ddb.forEach((_0x889551) => {
        _0x52a639(_0x889551) ||
          (_0x21f882.push(_0x889551),
          this._clearClosedPortalInputGuard(_0x889551),
          _0x889551.removeAttribute(q),
          _0x889551.removeAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE),
          this._removeRuntimeFocusRoleTree(_0x889551));
      });
      let _0x3e3d33 = _0x11ab9f.activeElement;
      _0x3e3d33 instanceof HTMLElement &&
        _0x21f882.some(
          (_0x32e7ba) =>
            _0x32e7ba === _0x3e3d33 || _0x32e7ba.contains(_0x3e3d33),
        ) &&
        (_0x3e3d33.blur(),
        _0x11ab9f.activeElement === _0x3e3d33 &&
          this._focusDocumentBody(_0x11ab9f));
    }
    _focusDocumentBody(_0x31ca6c) {
      let _0x2b6a08 = _0x31ca6c.body;
      if (!_0x2b6a08) return;
      let _0x435d64 = _0x2b6a08.getAttribute("tabindex");
      (_0x435d64 ?? (_0x2b6a08.tabIndex = -1),
        _0x2b6a08.focus({ preventScroll: true }),
        _0x435d64 == null
          ? _0x2b6a08.removeAttribute("tabindex")
          : _0x2b6a08.setAttribute("tabindex", _0x435d64),
        _0x31ca6c.activeElement !== _0x2b6a08 &&
          this._focusTemporarySink(_0x31ca6c));
    }
    _focusTemporarySink(_0x44ed4c) {
      var _0x4d4ccf;
      let _0x4e3b0b = _0x44ed4c.body;
      if (!_0x4e3b0b) return;
      let _0x23c01f = _0x44ed4c.createElement("span");
      ((_0x23c01f.tabIndex = -1),
        _0x23c01f.setAttribute("aria-hidden", "true"),
        (_0x23c01f.style["cssText"] =
          "position:fixed;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none;"),
        _0x4e3b0b.appendChild(_0x23c01f),
        _0x23c01f.focus({ preventScroll: true }),
        (_0x4d4ccf = _0x44ed4c.defaultView) == null ||
          _0x4d4ccf.setTimeout(() => _0x23c01f.remove(), 0));
    }
    _removeRuntimeFocusRoleTree(_0xf82683) {
      ((_0xf82683.getAttribute("data-embed-runtime-focus-role") ===
        "child-editor" ||
        _0xf82683.getAttribute("data-embed-runtime-focus-role") ===
          "child-popup") &&
        _0xf82683.removeAttribute(G),
        _0xf82683.querySelectorAll("[" + G + "]").forEach((_0x5de1dd) => {
          let _0x3e63bc = _0x5de1dd.getAttribute(G);
          (_0x3e63bc === "child-editor" || _0x3e63bc === "child-popup") &&
            _0x5de1dd.removeAttribute(G);
        }));
    }
  },
  Y = class {
    constructor(_0x10c9bf = {}) {
      (V(this, "_childUnitAncestry", new Map()),
        V(this, "_maxDepth", undefined),
        (this._maxDepth = ue(_0x10c9bf.maxDepth)));
    }
    canMount(_0x1eac38) {
      let _0x51dd55 = this.getAncestryForHostUnit(_0x1eac38.hostUnitId);
      return _0x51dd55.some(
        (_0x1ce18f) =>
          _0x1ce18f.hostUnitId === _0x1eac38.childUnitId ||
          _0x1ce18f.childUnitId === _0x1eac38.childUnitId,
      )
        ? { allowed: false, reason: "cycle", ancestry: _0x51dd55 }
        : _0x51dd55.length >= this._maxDepth
          ? { allowed: false, reason: "max-depth", ancestry: _0x51dd55 }
          : { allowed: true, ancestry: _0x51dd55 };
    }
    registerMountedRuntime(_0x529ab9) {
      let _0x5b0499 = [
        ...this.getAncestryForHostUnit(_0x529ab9.hostUnitId),
        {
          hostUnitId: _0x529ab9.hostUnitId,
          embedId: _0x529ab9.embedId,
          childUnitId: _0x529ab9.childUnitId,
        },
      ];
      return (
        this._childUnitAncestry["set"](_0x529ab9.childUnitId, _0x5b0499),
        (0, a.toDisposable)(() => {
          this._childUnitAncestry["get"](_0x529ab9.childUnitId) === _0x5b0499 &&
            this._childUnitAncestry["delete"](_0x529ab9.childUnitId);
        })
      );
    }
    getAncestryForHostUnit(_0x1f9b95) {
      return this._childUnitAncestry["get"](_0x1f9b95) ?? [];
    }
    getParentEmbedId(_0x3dbc8e) {
      var _0x51f9be;
      return (_0x51f9be =
        this.getAncestryForHostUnit(_0x3dbc8e).slice(-1)[0]) == null
        ? undefined
        : _0x51f9be.embedId;
    }
  };
function ue(_0x5b2f9b) {
  return typeof _0x5b2f9b == "number" &&
    Number.isFinite(_0x5b2f9b) &&
    _0x5b2f9b >= 0
    ? Math.floor(_0x5b2f9b)
    : 1;
}
function X(_0x2701c9, _0x33ebc9) {
  return function (_0x2e3bf9, _0x2e1c4c) {
    _0x33ebc9(_0x2e3bf9, _0x2e1c4c, _0x2701c9);
  };
}
function Z(_0x507fb6, _0x3b2236, _0xdc9e27, _0x2185f1) {
  var _0x3d3f29 = arguments.length,
    _0x13f9c0 =
      _0x3d3f29 < 3
        ? _0x3b2236
        : _0x2185f1 === null
          ? (_0x2185f1 = Object.getOwnPropertyDescriptor(_0x3b2236, _0xdc9e27))
          : _0x2185f1,
    _0x4b936a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x13f9c0 = Reflect.decorate(_0x507fb6, _0x3b2236, _0xdc9e27, _0x2185f1);
  else {
    for (var _0x3abbbd = _0x507fb6.length - 1; _0x3abbbd >= 0; _0x3abbbd--)
      (_0x4b936a = _0x507fb6[_0x3abbbd]) &&
        (_0x13f9c0 =
          (_0x3d3f29 < 3
            ? _0x4b936a(_0x13f9c0)
            : _0x3d3f29 > 3
              ? _0x4b936a(_0x3b2236, _0xdc9e27, _0x13f9c0)
              : _0x4b936a(_0x3b2236, _0xdc9e27)) || _0x13f9c0);
  }
  return (
    _0x3d3f29 > 3 &&
      _0x13f9c0 &&
      Object.defineProperty(_0x3b2236, _0xdc9e27, _0x13f9c0),
    _0x13f9c0
  );
}
let de = class extends a.Disposable {
  constructor(_0x20f45c) {
    (super(),
      (this._runtimeScopeService = _0x20f45c),
      V(this, "_entries", new Map()));
  }
  acquire(_0x10320e) {
    let _0xad80f = this._entries["get"](_0x10320e.unitId);
    if (!_0xad80f) {
      let _0x246fa6 = [],
        _0x37d534 = {
          unitId: _0x10320e.unitId,
          has: (_0x31409c) => {
            var _0x36f9b1;
            return (
              ((_0x36f9b1 = _0x246fa6[_0x246fa6.length - 1]) == null
                ? undefined
                : _0x36f9b1.has(_0x31409c)) ?? false
            );
          },
          get: (_0x2f67fe) => {
            let _0x367611 = _0x246fa6[_0x246fa6.length - 1];
            if (!_0x367611)
              throw Error(
                "EMBED_UI_RUNTIME_SCOPE_NOT_ACTIVE:" + _0x10320e.unitId,
              );
            return _0x367611.get(_0x2f67fe);
          },
        };
      ((_0xad80f = {
        registration: this._runtimeScopeService["register"](_0x37d534),
        scopes: _0x246fa6,
      }),
        this._entries["set"](_0x10320e.unitId, _0xad80f));
    }
    let _0x596fb5 = _0xad80f;
    return (
      _0x596fb5.scopes["push"](_0x10320e),
      (0, a.toDisposable)(() => {
        let _0x12bf99 = _0x596fb5.scopes["lastIndexOf"](_0x10320e);
        _0x12bf99 < 0 ||
          (_0x596fb5.scopes["splice"](_0x12bf99, 1),
          !(
            _0x596fb5.scopes["length"] > 0 ||
            this._entries["get"](_0x10320e.unitId) !== _0x596fb5
          ) &&
            (_0x596fb5.registration["dispose"](),
            this._entries["delete"](_0x10320e.unitId)));
      })
    );
  }
  dispose() {
    (this._entries["forEach"](({ registration: _0x3d75bf }) =>
      _0x3d75bf.dispose(),
    ),
      this._entries["clear"](),
      super.dispose());
  }
};
de = Z([X(0, c.IUIRuntimeScopeService)], de);
const fe = new Set([
    "identifier:univer.menu-manager-service",
    "identifier:univer.ribbon-service",
    "identifier:ui.contextmenu.service",
    "identifier:ui.popup.service",
    "identifier:ui.sidebar.service",
    "identifier:ui.layout-service",
    "identifier:univer.sheet.selection-render-service",
  ]),
  pe = "FOCUSING_BASE",
  Q = [
    a.FOCUSING_UNIT,
    a.FOCUSING_UNIVER_EDITOR,
    a.FOCUSING_SHEET,
    a.FOCUSING_DOC,
    a.FOCUSING_SLIDE,
    a.FOCUSING_BOARD,
    pe,
    a.EDITOR_ACTIVATED,
    a.FORMULA_EDITOR_ACTIVATED,
    a.FOCUSING_FX_BAR_EDITOR,
  ],
  me = new Set([
    c.CopyCommand["id"],
    c.CutCommand["id"],
    c.PasteCommand["id"],
    a.UndoCommand["id"],
    a.RedoCommand["id"],
  ]),
  he = new Set([
    "docs-exchange-client.operation.import-doc",
    "sheets-exchange-client.operation.import-sheet",
    "slides-exchange-client.operation.import-slide",
    "bases-exchange-client.operation.import-base",
    "boards-exchange-client.operation.insert-mermaid",
  ]);
function ge(_0x8c8ad1, _0x2ce491 = []) {
  let _0x4d5908 = _0x8c8ad1.injector["get"](a.IUniverInstanceService),
    _0x2204e9 = _0x4d5908.getUnit(_0x8c8ad1.childUnitId, _0x8c8ad1.childType);
  if (!_0x2204e9) return;
  let _0x560ae4 = ye(
      _0x4d5908,
      _0x8c8ad1,
      _0x2204e9,
      new f["BehaviorSubject"](_0x2204e9),
      new f["BehaviorSubject"](
        _0x8c8ad1.renderScope["mode"] === "float" &&
          !_0x8c8ad1.renderScope["fullscreen"]
          ? null
          : _0x2204e9.getUnitId(),
      ),
    ),
    _0x4260be = Ne(_0x8c8ad1.injector, _0x8c8ad1.childType),
    _0x2802c0 = je(_0x8c8ad1),
    _0x2f8691 = xe(
      _0x8c8ad1.injector["get"](a.ICommandService),
      _0x8c8ad1,
      _0x4d5908,
      _0x2802c0,
      _0x4260be,
    ),
    _0x5f1672 = new Map([
      [a.IUniverInstanceService, _0x560ae4],
      [a.ICommandService, _0x2f8691],
    ]);
  (_0x8c8ad1.childType === a.UniverInstanceType["UNIVER_DOC"] &&
    _0x8c8ad1.injector["has"](o.IDocClipboardService) &&
    _0x5f1672.set(
      o.IDocClipboardService,
      _e(
        _0x8c8ad1.injector["get"](o.IDocClipboardService),
        _0x4d5908,
        _0x8c8ad1.childUnitId,
      ),
    ),
    _0x8c8ad1.injector["has"](a.IConfigService) &&
      _0x5f1672.set(
        a.IConfigService,
        Re(_0x8c8ad1.injector["get"](a.IConfigService)),
      ));
  let _0x409d22 = [];
  (_0x8c8ad1.injector["has"](Y) &&
    _0x5f1672.set(Y, _0x8c8ad1.injector["get"](Y)),
    _0x4260be && _0x5f1672.set(a.IContextService, _0x4260be));
  let _0x3a1252 = $(_0x8c8ad1.injector, _0x5f1672);
  _0x2ce491.forEach((_0x4fed77) => _0x3a1252.add(_0x4fed77));
  let _0x3126c7 = it(_0x8c8ad1.injector, _0x3a1252);
  if (_0x3126c7) {
    _0x3a1252.add([c.IMenuManagerService, { useValue: _0x3126c7 }]);
    let _0x1252d4 = new c["DesktopRibbonService"](_0x3126c7, _0x560ae4);
    (_0x3a1252.add([c.IRibbonService, { useValue: _0x1252d4 }]),
      _0x409d22.push(_0x1252d4));
  }
  if (_0x8c8ad1.renderScope["fullscreen"]) {
    let _0x5b9ce2 = ct(_0x3a1252, _0x8c8ad1.childUnitId),
      _0x42a046 = new c["CanvasPopupService"](),
      _0x38ab94 = new c["DesktopSidebarService"]();
    (_0x3a1252.add([c.IContextMenuService, { useValue: _0x5b9ce2 }]),
      _0x3a1252.add([c.ICanvasPopupService, { useValue: _0x42a046 }]),
      _0x3a1252.add([c.ISidebarService, { useValue: _0x38ab94 }]),
      _0x409d22.push(_0x5b9ce2, _0x42a046, _0x38ab94));
  } else {
    let _0x55e6d6 = st(_0x8c8ad1.injector, _0x3a1252, _0x8c8ad1.childUnitId);
    _0x55e6d6 &&
      _0x3a1252.add([c.IContextMenuService, { useValue: _0x55e6d6 }]);
  }
  let _0x2e451b = lt(_0x8c8ad1.injector, _0x8c8ad1);
  _0x3a1252.add([c.ILayoutService, { useValue: _0x2e451b }]);
  let _0x4c091c = {
    unitId: _0x8c8ad1.childUnitId,
    has: (_0x237f48) => _0x3a1252.has(_0x237f48),
    get: (_0x5d352d) => _0x3a1252.get(_0x5d352d),
  };
  if (
    (_0x8c8ad1.injector["has"](de)
      ? _0x409d22.push(_0x8c8ad1.injector["get"](de).acquire(_0x4c091c))
      : _0x8c8ad1.injector["has"](c.IUIRuntimeScopeService) &&
        _0x409d22.push(
          _0x8c8ad1.injector["get"](c.IUIRuntimeScopeService).register(
            _0x4c091c,
          ),
        ),
    _0x409d22.length)
  ) {
    let _0x59c753 = _0x3a1252.dispose["bind"](_0x3a1252),
      _0x554ca1 = false;
    _0x3a1252.dispose = () => {
      _0x554ca1 ||
        ((_0x554ca1 = true),
        _0x409d22.forEach((_0x2b6fcb) => _0x2b6fcb.dispose()),
        _0x59c753());
    };
  }
  return _0x3a1252;
}
function _e(_0x54aa54, _0x339dd5, _0x4a94ec) {
  let _0xf1f413 = async (_0x97e52f) => {
    let _0x23be1a = _0x339dd5.getCurrentUnitOfType(
      a.UniverInstanceType["UNIVER_DOC"],
    );
    _0x339dd5.setCurrentUnitForType(_0x4a94ec);
    try {
      return await _0x97e52f();
    } finally {
      Ce(_0x339dd5, _0x23be1a);
    }
  };
  return {
    addClipboardHook: _0x54aa54.addClipboardHook["bind"](_0x54aa54),
    copy: (..._0xc93ab3) => _0xf1f413(() => _0x54aa54.copy(..._0xc93ab3)),
    cut: (..._0x5d2476) => _0xf1f413(() => _0x54aa54.cut(..._0x5d2476)),
    legacyPaste: (..._0x1906ca) =>
      _0xf1f413(() => _0x54aa54.legacyPaste(..._0x1906ca)),
    paste: (..._0x550991) => _0xf1f413(() => _0x54aa54.paste(..._0x550991)),
  };
}
function ve(_0x10454d, _0x3ba5b0) {
  if (!_0x10454d.has(a.IConfigService)) return;
  let _0x555e5a = _0x10454d.get(a.IConfigService);
  return $(_0x10454d, new Map([[a.IConfigService, Le(_0x555e5a, _0x3ba5b0)]]));
}
function ye(_0x4d50f9, _0xd0cac6, _0xb50762, _0x4c8ef3, _0x3b2232) {
  return {
    unitAdded$: _0x4d50f9.unitAdded$,
    getTypeOfUnitAdded$: (..._0x3a23d8) =>
      _0x4d50f9.getTypeOfUnitAdded$(..._0x3a23d8),
    __addUnit: (..._0x2b0048) => _0x4d50f9.__addUnit(..._0x2b0048),
    unitDisposed$: _0x4d50f9.unitDisposed$,
    getTypeOfUnitDisposed$: (..._0x32534e) =>
      _0x4d50f9.getTypeOfUnitDisposed$(..._0x32534e),
    focused$: _0x3b2232.asObservable(),
    focusUnit: (_0x39088d) => {
      if (_0x39088d === null || be(_0xd0cac6, _0x39088d)) {
        _0x3b2232.getValue() !== _0x39088d && _0x3b2232.next(_0x39088d);
        return;
      }
      _0x4d50f9.focusUnit(_0x39088d);
    },
    getFocusedUnit: () => {
      let _0x2a499a = _0x3b2232.getValue();
      return _0x2a499a === null
        ? null
        : _0x2a499a === _0xd0cac6.childUnitId
          ? _0xb50762
          : (0, a.isInternalEditorID)(_0x2a499a)
            ? (_0x4d50f9.getUnit(_0x2a499a) ?? _0xb50762)
            : _0x4d50f9.getFocusedUnit();
    },
    getCurrentUnitOfType: (_0x1890d3) =>
      _0x1890d3 === _0xd0cac6.childType
        ? _0x4c8ef3.getValue()
        : _0x4d50f9.getCurrentUnitOfType(_0x1890d3),
    setCurrentUnitForType: (_0x457bc5) => {
      if (be(_0xd0cac6, _0x457bc5)) {
        _0x4c8ef3.getValue() !== _0xb50762 && _0x4c8ef3.next(_0xb50762);
        return;
      }
      _0x4d50f9.setCurrentUnitForType(_0x457bc5);
    },
    getCurrentTypeOfUnit$: (_0x47dbdc) =>
      _0x47dbdc === _0xd0cac6.childType
        ? _0x4c8ef3.asObservable()
        : _0x4d50f9.getCurrentTypeOfUnit$(_0x47dbdc),
    createUnit: (..._0x343199) => _0x4d50f9.createUnit(..._0x343199),
    getUnitCreateOptions: (..._0x1968df) =>
      _0x4d50f9.getUnitCreateOptions(..._0x1968df),
    disposeUnit: (..._0x20978e) => _0x4d50f9.disposeUnit(..._0x20978e),
    registerCtorForType: (..._0x4486da) =>
      _0x4d50f9.registerCtorForType(..._0x4486da),
    getUnit: (..._0x1c172a) => _0x4d50f9.getUnit(..._0x1c172a),
    getAllUnitsForType: (..._0x3063c0) =>
      _0x4d50f9.getAllUnitsForType(..._0x3063c0),
    getUnitType: (..._0x5337f4) => _0x4d50f9.getUnitType(..._0x5337f4),
    dispose: () => {},
  };
}
function be(_0x2ee77a, _0x361f1a) {
  return (
    _0x361f1a === _0x2ee77a.childUnitId || (0, a.isInternalEditorID)(_0x361f1a)
  );
}
function xe(_0x3dd0c6, _0x274385, _0x56dcf0, _0x209ce8, _0x37a25f) {
  let _0x2bd930 = _0x274385.injector["has"](a.IContextService)
    ? _0x274385.injector["get"](a.IContextService)
    : undefined;
  return {
    disposed: () => _0x3dd0c6.disposed(),
    hasCommand: (_0x291cde) => _0x3dd0c6.hasCommand(_0x291cde),
    registerCommand: (_0x47d9f9) => _0x3dd0c6.registerCommand(_0x47d9f9),
    unregisterCommand: (_0xdc8a57) => _0x3dd0c6.unregisterCommand(_0xdc8a57),
    registerMultipleCommand: (_0x2e2d20) =>
      _0x3dd0c6.registerMultipleCommand(_0x2e2d20),
    executeCommand: async (_0x3ef4dd, _0x58c415, _0x3aad4f) => {
      var _0x2ef46f;
      let _0x2cd70e = () =>
          Se(_0x3ef4dd, _0x2bd930, _0x37a25f, () =>
            _0x3dd0c6.executeCommand(
              _0x3ef4dd,
              ze(_0x274385, _0x3ef4dd, _0x58c415),
              we(_0x274385.childType, _0x274385.childUnitId, _0x3aad4f),
            ),
          ),
        _0x242201 =
          ke(_0x274385) &&
          !Te(_0x3ef4dd) &&
          (!_0x274385.renderScope["fullscreen"] || !Ae(_0x3ef4dd)),
        _0x56e9b2 = _0x209ce8 || Te(_0x3ef4dd) || Ae(_0x3ef4dd) || _0x242201,
        _0x2abbb9 = _0x56e9b2 ? Ee() : null;
      if (!_0x56e9b2) return await _0x2cd70e();
      let _0x138bf5 = _0x56dcf0.getCurrentUnitOfType(_0x274385.childType),
        _0x25a975 =
          ((_0x2ef46f = _0x56dcf0.getFocusedUnit()) == null
            ? undefined
            : _0x2ef46f.getUnitId()) ?? null;
      try {
        (_0x56dcf0.setCurrentUnitForType(_0x274385.childUnitId),
          _0x242201 || _0x56dcf0.focusUnit(_0x274385.childUnitId));
        let _0x353317 = _0x2cd70e();
        return (
          _0x242201 &&
            me.has(_0x3ef4dd) &&
            De(_0x274385, _0x2abbb9) &&
            Oe(_0x274385, _0x2abbb9),
          await _0x353317
        );
      } finally {
        (Ce(_0x56dcf0, _0x138bf5),
          _0x242201 || Be(_0x274385, _0x56dcf0, _0x25a975, _0x209ce8),
          (!_0x242201 || Te(_0x3ef4dd) || Ae(_0x3ef4dd)) &&
            De(_0x274385, _0x2abbb9) &&
            Oe(_0x274385, _0x2abbb9));
      }
    },
    syncExecuteCommand: (_0x462e69, _0x1a7e6b, _0xb1d96f) => {
      var _0x67fbb;
      let _0x5c6fb7 = () =>
          Se(_0x462e69, _0x2bd930, _0x37a25f, () =>
            _0x3dd0c6.syncExecuteCommand(
              _0x462e69,
              ze(_0x274385, _0x462e69, _0x1a7e6b),
              we(_0x274385.childType, _0x274385.childUnitId, _0xb1d96f),
            ),
          ),
        _0x3f1735 =
          ke(_0x274385) &&
          !Te(_0x462e69) &&
          (!_0x274385.renderScope["fullscreen"] || !Ae(_0x462e69)),
        _0x4c1f0e = _0x209ce8 || Te(_0x462e69) || Ae(_0x462e69) || _0x3f1735,
        _0x16fbb0 = _0x4c1f0e ? Ee() : null;
      if (!_0x4c1f0e) return _0x5c6fb7();
      let _0x31ef3a = _0x56dcf0.getCurrentUnitOfType(_0x274385.childType),
        _0x1b8c06 =
          ((_0x67fbb = _0x56dcf0.getFocusedUnit()) == null
            ? undefined
            : _0x67fbb.getUnitId()) ?? null;
      try {
        (_0x56dcf0.setCurrentUnitForType(_0x274385.childUnitId),
          _0x3f1735 || _0x56dcf0.focusUnit(_0x274385.childUnitId));
        let _0x4c7a82 = _0x5c6fb7();
        return (
          _0x3f1735 &&
            me.has(_0x462e69) &&
            De(_0x274385, _0x16fbb0) &&
            Oe(_0x274385, _0x16fbb0),
          _0x4c7a82
        );
      } finally {
        (Ce(_0x56dcf0, _0x31ef3a),
          _0x3f1735 || Be(_0x274385, _0x56dcf0, _0x1b8c06, _0x209ce8),
          (!_0x3f1735 || Te(_0x462e69) || Ae(_0x462e69)) &&
            De(_0x274385, _0x16fbb0) &&
            Oe(_0x274385, _0x16fbb0));
      }
    },
    onCommandExecuted: (_0xe788f8) => _0x3dd0c6.onCommandExecuted(_0xe788f8),
    beforeCommandExecuted: (_0x1489de) =>
      _0x3dd0c6.beforeCommandExecuted(_0x1489de),
    onMutationExecutedForCollab: (_0x5e5bc0) =>
      _0x3dd0c6.onMutationExecutedForCollab(_0x5e5bc0),
  };
}
function Se(_0x5044af, _0x53b8fd, _0x23a8a4, _0x423509) {
  if (
    !me.has(_0x5044af) ||
    !_0x53b8fd ||
    !_0x23a8a4 ||
    typeof _0x53b8fd.setContextValue != "function" ||
    _0x53b8fd === _0x23a8a4
  )
    return _0x423509();
  let _0xfce56 = [];
  for (let _0x11dedb of Q) {
    let _0x3a2823 = _0x53b8fd.getContextValue(_0x11dedb),
      _0x1e3eb0 = _0x23a8a4.getContextValue(_0x11dedb);
    _0x3a2823 !== _0x1e3eb0 &&
      (_0xfce56.push({ key: _0x11dedb, value: _0x3a2823 }),
      _0x53b8fd.setContextValue(_0x11dedb, _0x1e3eb0));
  }
  try {
    return _0x423509();
  } finally {
    for (let _0x51037a = _0xfce56.length - 1; _0x51037a >= 0; _0x51037a--) {
      let { key: _0x2230b6, value: _0x4ec94c } = _0xfce56[_0x51037a];
      _0x53b8fd.setContextValue(_0x2230b6, _0x4ec94c);
    }
  }
}
function Ce(_0x4cdfef, _0x1efee6) {
  if (!_0x1efee6) return;
  let _0x35ff36 = _0x1efee6.getUnitId();
  _0x4cdfef.getUnit(_0x35ff36) && _0x4cdfef.setCurrentUnitForType(_0x35ff36);
}
function we(_0x5d7d9f, _0x517e7a, _0x1cb24b) {
  return _0x5d7d9f === a.UniverInstanceType["UNIVER_BOARD"]
    ? { ..._0x1cb24b, unitId: _0x517e7a }
    : _0x1cb24b;
}
function Te(_0x2642e0) {
  return _0x2642e0 === a.UndoCommand["id"] || _0x2642e0 === a.RedoCommand["id"];
}
function Ee() {
  return typeof document < "u" && document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null;
}
function De(_0x1e4770, _0x307868) {
  if (
    !_0x307868 ||
    _0x1e4770.childType === a.UniverInstanceType["UNIVER_SHEET"]
  )
    return _0x307868 != null;
  let _0x1aacec = _0x307868;
  for (; _0x1aacec;) {
    if (
      a.SHEET_EDITOR_UNITS["some"](
        (_0x43d9e3) =>
          (_0x1aacec == null ? undefined : _0x1aacec.id) ===
            "__editor_" + _0x43d9e3 ||
          (_0x1aacec == null ? undefined : _0x1aacec.id) ===
            "univer-doc-selection-container-" + _0x43d9e3,
      )
    )
      return false;
    _0x1aacec = _0x1aacec.parentElement;
  }
  return true;
}
function Oe(_0x577746, _0x23787f) {
  var _0x8b7f29;
  let _0x3bd7c4 = () => {
    let _0x19fcd6 =
        _0x577746.renderScope["contentRoot"] ??
        _0x577746.renderScope["rootElement"],
      _0x4b6662 =
        _0x23787f != null && _0x23787f.isConnected
          ? _0x23787f
          : (_0x19fcd6.querySelector("canvas") ?? _0x19fcd6);
    !_0x4b6662.isConnected ||
      _0x4b6662.ownerDocument["activeElement"] === _0x4b6662 ||
      (_0x4b6662.hasAttribute("tabindex") || (_0x4b6662.tabIndex = -1),
      _0x4b6662.focus({ preventScroll: true }));
  };
  (_0x3bd7c4(),
    (_0x8b7f29 =
      _0x577746.renderScope["rootElement"].ownerDocument["defaultView"]) ==
      null || _0x8b7f29.requestAnimationFrame(_0x3bd7c4));
}
function ke(_0xdf6c87) {
  if (
    _0xdf6c87.childType === a.UniverInstanceType["UNIVER_BOARD"] ||
    _0xdf6c87.renderScope["mode"] !== "float" ||
    !_0xdf6c87.injector["has"](K)
  )
    return false;
  let _0x4430de =
    _0xdf6c87.injector["get"](K).resolveActiveChildSessionRuntimeScope();
  return (
    ((_0x4430de == null ? undefined : _0x4430de.sessionMode) ===
      "child-keyboard" ||
      (_0x4430de == null ? undefined : _0x4430de.sessionMode) ===
        "child-fullscreen") &&
    _0x4430de.embedId === _0xdf6c87.embedId &&
    _0x4430de.hostUnitId === _0xdf6c87.hostUnitId &&
    _0x4430de.childUnitId === _0xdf6c87.childUnitId &&
    _0x4430de.childType === _0xdf6c87.childType
  );
}
function Ae(_0x2290fc) {
  return _0x2290fc === s.SetCellEditVisibleOperation["id"];
}
function je(_0x5b4d20) {
  return _0x5b4d20.renderScope["fullscreen"] ||
    _0x5b4d20.descriptor["entry"] === "docs-custom-block"
    ? true
    : Me(_0x5b4d20);
}
function Me(_0x4ba70f) {
  var _0x22a492;
  return (
    _0x4ba70f.descriptor["entry"] === "sheets-sheet-tab" ||
    _0x4ba70f.descriptor["entry"] === "bases-table-list-block" ||
    _0x4ba70f.descriptor["entry"] === "slides-page-list-block" ||
    _0x4ba70f.layout === "tab-peer" ||
    !!(
      (_0x22a492 = _0x4ba70f.descriptor["sourceMeta"]) != null && _0x22a492.tab
    )
  );
}
function Ne(_0xcbd1df, _0x4947d3) {
  if (!_0xcbd1df.has(a.IContextService)) return;
  let _0x4118cb = _0xcbd1df.get(a.IContextService),
    _0x360f05 = Pe(_0x4947d3),
    _0x58691b = new f["Subject"]();
  return {
    contextChanged$: (0, f.merge)(
      (_0x4118cb.contextChanged$ ?? f.EMPTY).pipe(
        (0, f.map)((_0xdfdeb) =>
          Object.fromEntries(
            Object.entries(_0xdfdeb).filter(([_0x12a7dc]) => !Ie(_0x12a7dc)),
          ),
        ),
        (0, f.filter)((_0xc2c324) => Object.keys(_0xc2c324).length > 0),
      ),
      _0x58691b,
    ),
    getContextValue: (_0xd3d8b) =>
      Ie(_0xd3d8b)
        ? Fe(_0x360f05, _0xd3d8b)
        : _0x4118cb.getContextValue(_0xd3d8b),
    setContextValue: (_0x59c163, _0x41cc79) => {
      if (!Ie(_0x59c163)) {
        _0x4118cb.setContextValue(_0x59c163, _0x41cc79);
        return;
      }
      (_0x360f05.set(_0x59c163, _0x41cc79),
        _0x58691b.next({ [_0x59c163]: _0x41cc79 }));
    },
    subscribeContextValue$: (_0x420869) =>
      Ie(_0x420869)
        ? new f["Observable"]((_0x19d443) => {
            let _0x9efbe6 = _0x58691b
              .pipe(
                (0, f.filter)(
                  (_0x29c895) => _0x29c895[_0x420869] !== undefined,
                ),
              )
              .subscribe((_0x584064) => _0x19d443.next(_0x584064[_0x420869]));
            return (
              _0x19d443.next(Fe(_0x360f05, _0x420869)),
              () => _0x9efbe6.unsubscribe()
            );
          })
        : _0x4118cb.subscribeContextValue$(_0x420869),
  };
}
function Pe(_0x1008cd) {
  return new Map([
    [a.FOCUSING_UNIT, true],
    [
      a.FOCUSING_UNIVER_EDITOR,
      _0x1008cd === a.UniverInstanceType["UNIVER_SHEET"] ||
        _0x1008cd === a.UniverInstanceType["UNIVER_DOC"] ||
        _0x1008cd === a.UniverInstanceType["UNIVER_SLIDE"],
    ],
    [a.FOCUSING_SHEET, _0x1008cd === a.UniverInstanceType["UNIVER_SHEET"]],
    [a.FOCUSING_DOC, _0x1008cd === a.UniverInstanceType["UNIVER_DOC"]],
    [a.FOCUSING_SLIDE, _0x1008cd === a.UniverInstanceType["UNIVER_SLIDE"]],
    [a.FOCUSING_BOARD, _0x1008cd === a.UniverInstanceType["UNIVER_BOARD"]],
    [pe, _0x1008cd === a.UniverInstanceType["UNIVER_BASE"]],
  ]);
}
function Fe(_0x253478, _0x4fddfa) {
  return _0x253478.get(_0x4fddfa) ?? false;
}
function Ie(_0x411f22) {
  return (
    _0x411f22.startsWith("FOCUSING_") ||
    _0x411f22 === a.EDITOR_ACTIVATED ||
    _0x411f22 === a.FORMULA_EDITOR_ACTIVATED
  );
}
function Le(_0x24f86d, _0x4c0833) {
  return {
    getConfig: (_0x3302ac) => {
      let _0x3c2e90 = _0x24f86d.getConfig(_0x3302ac),
        _0x1e1c77 = _0x4c0833.get(_0x3302ac);
      return _0x1e1c77 ? _0x1e1c77(_0x3c2e90) : _0x3c2e90;
    },
    setConfig: _0x24f86d.setConfig["bind"](_0x24f86d),
    deleteConfig: _0x24f86d.deleteConfig["bind"](_0x24f86d),
    subscribeConfigValue$: _0x24f86d.subscribeConfigValue$["bind"](_0x24f86d),
    configChanged$: _0x24f86d.configChanged$,
    dispose: () => {},
  };
}
function Re(_0x424389) {
  return Le(
    _0x424389,
    new Map([
      [
        "menu",
        (_0x114c12) => {
          let _0x3db9d5 = { ...(_0x114c12 ?? {}) };
          return (
            he.forEach((_0x14d944) => {
              _0x3db9d5[_0x14d944] = { ..._0x3db9d5[_0x14d944], hidden: true };
            }),
            _0x3db9d5
          );
        },
      ],
    ]),
  );
}
function ze(_0x51a242, _0x4c2c8a, _0x168cca) {
  if (
    _0x4c2c8a !== t.CreateEmbedCommand["id"] ||
    !_0x168cca ||
    typeof _0x168cca != "object"
  )
    return _0x168cca;
  let _0x70a4e4 = _0x168cca;
  return _0x70a4e4.parentEmbedId
    ? _0x70a4e4
    : { ..._0x70a4e4, parentEmbedId: _0x51a242.embedId };
}
function $(_0x237dbd, _0x38bcb5, _0x17755f = _0x237dbd) {
  let _0x162da6 = Ze(_0x237dbd) ?? _0x17755f,
    _0x23ed91 = new Map(_0x38bcb5),
    _0x448e6a = new Map(),
    _0x58f613 = new Set(),
    _0xc0cf95 = new Map(),
    _0x44c01f;
  _0x23ed91.forEach((_0x4417fe, _0x1a9bc3) => {
    _0x4104ad(_0x1a9bc3);
  });
  function _0x4104ad(_0x406b69) {
    let _0x815f18 = He(_0x406b69);
    return (
      _0x58f613.add(_0x815f18),
      _0xc0cf95.has(_0x815f18) || _0xc0cf95.set(_0x815f18, _0x406b69),
      _0x815f18
    );
  }
  let _0x491ef6 = (_0x2be53c) =>
      _0x23ed91.has(_0x2be53c) || _0x448e6a.has(_0x2be53c)
        ? _0x2be53c
        : (_0xc0cf95.get(He(_0x2be53c)) ?? _0x2be53c),
    _0x1fb46b = (_0x14d08c) => {
      let _0x187f85 = _0x491ef6(_0x14d08c);
      if (_0x23ed91.has(_0x187f85)) return _0x23ed91.get(_0x187f85);
      let _0x591883 = _0x448e6a.get(_0x187f85);
      if (!_0x591883) return;
      let _0x1f676f = _0x591883();
      return (
        _0x448e6a.delete(_0x187f85),
        _0x23ed91.set(_0x187f85, _0x1f676f),
        Je(_0x44c01f, _0x187f85, _0x1f676f),
        _0x187f85 !== _0x14d08c && Je(_0x44c01f, _0x14d08c, _0x1f676f),
        _0x1f676f
      );
    },
    _0x20f5fc = (_0x387940) => {
      let _0x14077b = _0x491ef6(_0x387940);
      return _0x23ed91.has(_0x14077b) || _0x448e6a.has(_0x14077b);
    },
    _0x2afa50 = (_0x249ad5) => _0x58f613.has(He(_0x249ad5)),
    _0x258179 = (_0x49d948) => fe.has(He(_0x49d948)),
    _0x5e9ac2 = (_0x1b11b9) =>
      !_0x2afa50(_0x1b11b9) && _0x237dbd.has(_0x1b11b9),
    _0x2ee6d8 = () => {
      if (_0x44c01f) return _0x44c01f;
      let _0x31cb62 = _0x237dbd.createChild;
      if (typeof _0x31cb62 == "function")
        return (
          (_0x44c01f = _0x31cb62.call(_0x237dbd, [
            ...nt(_0x23ed91),
            [a.Injector, { useFactory: () => _0x44c01f }],
          ])),
          _0x44c01f
        );
    },
    _0x280e9e = {
      has: (_0x1ed10) => {
        if (
          _0x1ed10 === a.Injector ||
          _0x20f5fc(_0x1ed10) ||
          _0x5e9ac2(_0x1ed10)
        )
          return true;
        let _0x1196a9 = _0x2ee6d8();
        return (
          (_0x1196a9 == null ? undefined : _0x1196a9.has(_0x1ed10)) ??
          _0x237dbd.has(_0x1ed10)
        );
      },
      get: (_0x1def05, ..._0x4d1be9) => {
        if (_0x1def05 === a.Injector) return _0x280e9e;
        if (Ue(_0x4d1be9, a.LookUp["SELF"])) {
          let _0xae631a = _0x2ee6d8();
          _0x13a1ac(_0xae631a, _0x1def05);
          let _0x2cfd62 = Ke(_0xae631a, _0x1def05);
          return _0x2cfd62.resolved
            ? _0x2cfd62.value
            : Ge(_0xae631a || _0x237dbd, _0x1def05, _0x4d1be9);
        }
        return _0x20f5fc(_0x1def05)
          ? _0x1fb46b(_0x1def05)
          : Ue(_0x4d1be9, a.LookUp["SKIP_SELF"])
            ? Ge(_0x237dbd, _0x1def05, We(_0x4d1be9, a.LookUp["SKIP_SELF"]))
            : _0x5e9ac2(_0x1def05)
              ? Ge(_0x237dbd, _0x1def05, _0x4d1be9)
              : Ge(_0x2ee6d8() || _0x237dbd, _0x1def05, _0x4d1be9);
      },
      invoke: (_0x27e2f7, ..._0xc942cc) =>
        _0x27e2f7(
          {
            has: (_0x26d27f) => {
              if (
                _0x26d27f === a.Injector ||
                _0x20f5fc(_0x26d27f) ||
                _0x5e9ac2(_0x26d27f)
              )
                return true;
              let _0x5bb57c = _0x2ee6d8();
              return (
                (_0x5bb57c == null ? undefined : _0x5bb57c.has(_0x26d27f)) ??
                _0x237dbd.has(_0x26d27f)
              );
            },
            get: (_0xb0aad7, ..._0x64dd05) => {
              if (_0xb0aad7 === a.Injector) return _0x280e9e;
              if (Ue(_0x64dd05, a.LookUp["SELF"])) {
                let _0x3f4dd5 = _0x2ee6d8();
                _0x13a1ac(_0x3f4dd5, _0xb0aad7);
                let _0x257e74 = Ke(_0x3f4dd5, _0xb0aad7);
                return _0x257e74.resolved
                  ? _0x257e74.value
                  : Ge(_0x3f4dd5 || _0x237dbd, _0xb0aad7, _0x64dd05);
              }
              return _0x20f5fc(_0xb0aad7)
                ? _0x1fb46b(_0xb0aad7)
                : Ue(_0x64dd05, a.LookUp["SKIP_SELF"])
                  ? Ge(
                      _0x237dbd,
                      _0xb0aad7,
                      We(_0x64dd05, a.LookUp["SKIP_SELF"]),
                    )
                  : _0x5e9ac2(_0xb0aad7)
                    ? Ge(_0x237dbd, _0xb0aad7, _0x64dd05)
                    : Ge(_0x2ee6d8() || _0x237dbd, _0xb0aad7, _0x64dd05);
            },
          },
          ..._0xc942cc,
        ),
      add: (_0x5bcbf7) => {
        let _0xe5fa5f = rt(_0x5bcbf7);
        if (_0xe5fa5f) {
          if (
            _0xe5fa5f.kind !== "factory" &&
            _0x5e9ac2(_0xe5fa5f.identifier) &&
            !_0x258179(_0xe5fa5f.identifier)
          )
            return;
          let _0x4faba9 = He(_0xe5fa5f.identifier);
          if (_0x58f613.has(_0x4faba9)) return;
          if ((_0x4104ad(_0xe5fa5f.identifier), _0xe5fa5f.kind === "value"))
            (_0x448e6a.delete(_0xe5fa5f.identifier),
              _0x23ed91.set(_0xe5fa5f.identifier, _0xe5fa5f.value));
          else {
            let _0x1440ab = _0x2ee6d8();
            _0x1440ab
              ? Xe(_0x1440ab, _0xe5fa5f.identifier) || _0x1440ab.add(_0x5bcbf7)
              : (_0x23ed91.delete(_0xe5fa5f.identifier),
                _0x448e6a.set(_0xe5fa5f.identifier, _0xe5fa5f.factory));
          }
          return;
        }
        let _0x1022a7 = He(Ve(_0x5bcbf7));
        if (_0x1022a7 != null) {
          if (_0x58f613.has(_0x1022a7)) return;
          _0x4104ad(Ve(_0x5bcbf7));
        }
        let _0x2b78a6 = _0x2ee6d8();
        if (_0x2b78a6) {
          _0x2b78a6.add(_0x5bcbf7);
          return;
        }
        _0x237dbd.add(_0x5bcbf7);
      },
      createChild: (_0x1eab02 = []) => {
        let _0x2314dc = new Map(_0x23ed91);
        _0xc0cf95.forEach((_0x5796e1) => {
          if (_0x2314dc.has(_0x5796e1)) return;
          if (_0x20f5fc(_0x5796e1)) {
            _0x2314dc.set(_0x5796e1, _0x1fb46b(_0x5796e1));
            return;
          }
          let _0x28bbdb = _0x2ee6d8();
          _0x28bbdb &&
            Xe(_0x28bbdb, _0x5796e1) &&
            _0x2314dc.set(
              _0x5796e1,
              Ge(_0x28bbdb, _0x5796e1, [a.LookUp["SELF"]]),
            );
        });
        let _0xda90fe = [];
        _0x1eab02.forEach((_0x39c3ad) => {
          let _0x444eeb = rt(_0x39c3ad);
          if ((_0x444eeb == null ? undefined : _0x444eeb.kind) === "value") {
            _0x2314dc.set(_0x444eeb.identifier, _0x444eeb.value);
            return;
          }
          _0xda90fe.push(_0x39c3ad);
        });
        let _0x56cf70 = $(_0x237dbd, _0x2314dc, _0x162da6);
        return (
          _0xda90fe.forEach((_0x1048d0) => {
            _0x56cf70.add(_0x1048d0);
          }),
          _0x56cf70
        );
      },
      createInstance: (..._0x480c20) => {
        let _0x3a170c = _0x2ee6d8(),
          _0x393159 = _0x3a170c == null ? undefined : _0x3a170c.createInstance;
        if (_0x3a170c && typeof _0x393159 == "function")
          return (
            _0xffd938(_0x3a170c, _0x480c20[0]),
            _0x393159.apply(_0x3a170c, _0x480c20)
          );
        let _0x5d1c99 = _0x237dbd.createInstance;
        if (typeof _0x5d1c99 == "function")
          return _0x5d1c99.apply(_0x237dbd, _0x480c20);
        let [_0x4d75a8, ..._0x52c0f7] = _0x480c20;
        return new _0x4d75a8(..._0x52c0f7);
      },
      dispose: () => {
        (_0x44c01f && Qe(_0x44c01f, _0x162da6, _0x23ed91.values()),
          (_0x44c01f = undefined),
          _0x58f613.clear(),
          _0xc0cf95.clear(),
          _0x448e6a.clear());
      },
    };
  return { resolved: false };
}
function qe(_0xa4cca6) {
  return !_0xa4cca6 || _0xa4cca6.length !== 1
    ? { resolved: false }
    : { resolved: true, value: _0xa4cca6[0] };
}
function Je(_0x5a5999, _0x571f4a, _0x150949) {
  !_0x5a5999 ||
    Xe(_0x5a5999, _0x571f4a) ||
    _0x5a5999.add([_0x571f4a, { useValue: _0x150949 }]);
}
function Ye(_0x4493ca) {
  if (
    !_0x4493ca ||
    (typeof _0x4493ca != "function" && typeof _0x4493ca != "object")
  )
    return [];
  for (let _0x399f91 of Object.getOwnPropertySymbols(_0x4493ca)) {
    let _0x2b5f5d = _0x4493ca[_0x399f91];
    if (!Array.isArray(_0x2b5f5d)) continue;
    let _0x337b11 = _0x2b5f5d
      .map((_0x3fd498) =>
        _0x3fd498 == null ? undefined : _0x3fd498.identifier,
      )
      .filter((_0x16581d) => _0x16581d !== undefined);
    if (_0x337b11.length) return _0x337b11;
  }
  return [];
}
function Xe(_0x5a536a, _0x542494) {
  var _0x493461, _0x1c4bb1, _0x48593d, _0x3298d5;
  let _0x531ce2 = _0x5a536a;
  return !!(
    ((_0x493461 = _0x531ce2.dependencyCollection) != null &&
      (_0x1c4bb1 = _0x493461.has) != null &&
      _0x1c4bb1.call(_0x493461, _0x542494)) ||
    ((_0x48593d = _0x531ce2.resolvedDependencyCollection) != null &&
      (_0x3298d5 = _0x48593d.has) != null &&
      _0x3298d5.call(_0x48593d, _0x542494))
  );
}
function Ze(_0x33e72d) {
  return _0x33e72d.__embedSharedRootInjector;
}
function Qe(_0x4d260a, _0xad8455, _0xc6a422 = []) {
  let _0x249605 = $e(_0xad8455);
  for (let _0x1b7472 of _0xc6a422) _0x249605.add(_0x1b7472);
  (et(_0x4d260a, _0x249605), _0x4d260a.dispose());
}
function $e(_0x1fa8ad) {
  let _0x3fadb1 = new Set(),
    _0x4c7008 = tt(_0x1fa8ad);
  return (
    _0x4c7008 &&
      _0x4c7008.forEach((_0x162903) => {
        Array.isArray(_0x162903) &&
          _0x162903.forEach((_0x5886d6) => _0x3fadb1.add(_0x5886d6));
      }),
    _0x3fadb1
  );
}
function et(_0x7ebdaf, _0x1668b0, _0x1ebbe9 = new Set()) {
  if (_0x1ebbe9.has(_0x7ebdaf)) return;
  _0x1ebbe9.add(_0x7ebdaf);
  let _0x5d2ebd = _0x7ebdaf.children;
  _0x5d2ebd == null ||
    _0x5d2ebd.forEach((_0x405c8c) => et(_0x405c8c, _0x1668b0, _0x1ebbe9));
  let _0x5b6ba5 = tt(_0x7ebdaf);
  _0x5b6ba5 &&
    _0x5b6ba5.forEach((_0x110b0a, _0x209fd9) => {
      if (!Array.isArray(_0x110b0a)) return;
      let _0x39a340 = _0x110b0a.filter(
        (_0x452c27) => !_0x1668b0.has(_0x452c27),
      );
      if (_0x39a340.length !== _0x110b0a.length) {
        if (_0x39a340.length === 0) {
          _0x5b6ba5.delete(_0x209fd9);
          return;
        }
        _0x5b6ba5.set(_0x209fd9, _0x39a340);
      }
    });
}
function tt(_0x1892c8) {
  var _0x452f2f;
  return (_0x452f2f = _0x1892c8.resolvedDependencyCollection) == null
    ? undefined
    : _0x452f2f.resolvedDependencies;
}
function nt(_0xe1af6d) {
  return Array.from(_0xe1af6d, ([_0x366276, _0x14bbc5]) => [
    _0x366276,
    { useValue: _0x14bbc5 },
  ]);
}
function rt(_0x5653da) {
  if (!Array.isArray(_0x5653da) || _0x5653da.length < 2) return;
  let [_0x9a5c2d, _0x43af62] = _0x5653da;
  if (!(!_0x43af62 || typeof _0x43af62 != "object")) {
    if ("useValue" in _0x43af62)
      return {
        kind: "value",
        identifier: _0x9a5c2d,
        value: _0x43af62.useValue,
      };
    if (typeof _0x43af62.useFactory == "function")
      return {
        kind: "factory",
        identifier: _0x9a5c2d,
        factory: _0x43af62.useFactory,
      };
  }
}
function it(_0x586e75, _0x11ca27) {
  if (!_0x586e75.has(c.IMenuManagerService)) return;
  let _0x19654e = _0x586e75.get(c.IMenuManagerService),
    _0x3c9a32 = _0x19654e.createScoped;
  return at(
    typeof _0x3c9a32 == "function"
      ? _0x3c9a32.call(_0x19654e, _0x11ca27)
      : _0x19654e,
  );
}
function at(_0x32d92a) {
  return {
    menuChanged$: _0x32d92a.menuChanged$,
    mergeMenu: (_0x395ae4, _0x3dacc5) =>
      _0x32d92a.mergeMenu(_0x395ae4, _0x3dacc5),
    appendRootMenu: (_0xc20739) => _0x32d92a.appendRootMenu(_0xc20739),
    getMenuByPositionKey: (_0x4282f1) =>
      ot(_0x32d92a.getMenuByPositionKey(_0x4282f1)),
    getFlatMenuByPositionKey: (_0x21e3a5) =>
      ot(_0x32d92a.getFlatMenuByPositionKey(_0x21e3a5)),
  };
}
function ot(_0x44e2e1) {
  return _0x44e2e1.flatMap((_0x195938) => {
    var _0x4f4729;
    if (
      he.has(
        ((_0x4f4729 = _0x195938.item) == null ? undefined : _0x4f4729.id) ??
          _0x195938.key,
      )
    )
      return [];
    if (!_0x195938.children) return [_0x195938];
    let _0x5f2b51 = ot(_0x195938.children);
    return _0x195938.children["length"] > 0 &&
      _0x5f2b51.length === 0 &&
      !_0x195938.item &&
      !_0x195938.headerActionItem
      ? []
      : [{ ..._0x195938, children: _0x5f2b51 }];
  });
}
function st(_0x291b6b, _0x59fc93, _0x1ce37c) {
  if (!_0x291b6b.has(c.IContextMenuService)) return;
  let _0x291eb7 = _0x291b6b.get(c.IContextMenuService);
  return {
    get disabled() {
      return _0x291eb7.disabled;
    },
    set disabled(_0x51b7f1) {
      _0x291eb7.disabled = _0x51b7f1;
    },
    get visible() {
      return _0x291eb7.visible;
    },
    enable: () => _0x291eb7.enable(),
    disable: () => _0x291eb7.disable(),
    triggerContextMenu: (_0x495815, _0xd99e08, _0x4b682b) => {
      _0x291eb7.triggerContextMenu(_0x495815, _0xd99e08, {
        ..._0x4b682b,
        unitId: (_0x4b682b == null ? undefined : _0x4b682b.unitId) ?? _0x1ce37c,
      });
    },
    hideContextMenu: () => _0x291eb7.hideContextMenu(),
    registerContextMenuHandler: (_0x396ff0) =>
      _0x291eb7.registerContextMenuHandler(_0x396ff0),
  };
}
function ct(_0x17fa5e, _0x30957b) {
  let _0x405b1c = new c["ContextMenuService"]();
  return {
    get disabled() {
      return _0x405b1c.disabled;
    },
    set disabled(_0x22651a) {
      _0x405b1c.disabled = _0x22651a;
    },
    get visible() {
      return _0x405b1c.visible;
    },
    enable: () => _0x405b1c.enable(),
    disable: () => _0x405b1c.disable(),
    triggerContextMenu: (_0x333b7a, _0x17bae2, _0x205e3e) => {
      _0x405b1c.triggerContextMenu(_0x333b7a, _0x17bae2, {
        ..._0x205e3e,
        unitId: (_0x205e3e == null ? undefined : _0x205e3e.unitId) ?? _0x30957b,
      });
    },
    hideContextMenu: () => _0x405b1c.hideContextMenu(),
    registerContextMenuHandler: (_0x3dffcb) =>
      _0x405b1c.registerContextMenuHandler(_0x3dffcb),
    dispose: () => _0x405b1c.dispose(),
  };
}
function lt(_0x45f4eb, _0xdb1a94) {
  let _0x2e03f4 = _0x45f4eb.get(c.ILayoutService),
    _0x3c0343 = _0x45f4eb.has(J) ? _0x45f4eb.get(J) : undefined,
    _0x289b5a = _0x45f4eb.has(K) ? _0x45f4eb.get(K) : undefined,
    _0x2481cf = _0xdb1a94.renderScope["rootElement"],
    _0xb3f304 = _0xdb1a94.renderScope["contentRoot"] ?? _0x2481cf,
    _0x12ffc1 = new Set([_0x2481cf, _0xb3f304]),
    _0x39e4af =
      _0xdb1a94.renderScope["mode"] !== "float" ||
      _0xdb1a94.renderScope["fullscreen"],
    _0x113e13 = (_0x5f5109, _0x273c1d) => {
      _0x12ffc1.add(_0x5f5109);
      let _0xe707d4 =
          (_0x273c1d == null
            ? undefined
            : _0x273c1d.registerChildInteraction) && _0x39e4af,
        _0x5b0527 = _0xe707d4 ? ut(_0x5f5109) : undefined,
        _0x2f5209 = _0xe707d4
          ? _0x3c0343 == null
            ? undefined
            : _0x3c0343.registerOwnedElement(_0xdb1a94.embedId, _0x5f5109)
          : undefined,
        _0x499f82 = _0xe707d4
          ? _0x289b5a == null
            ? undefined
            : _0x289b5a.registerElement({
                embedId: _0xdb1a94.embedId,
                role: "child-editor",
                element: _0x5f5109,
              })
          : undefined;
      return (0, a.toDisposable)(() => {
        (_0x499f82 == null || _0x499f82.dispose(),
          _0x2f5209 == null || _0x2f5209.dispose(),
          _0x5b0527 == null || _0x5b0527.dispose(),
          _0x12ffc1.delete(_0x5f5109));
      });
    },
    _0x5b569d = (_0x5840b6) =>
      _0x5840b6
        ? [..._0x12ffc1].some(
            (_0x2a6181) =>
              _0x2a6181 === _0x5840b6 || _0x2a6181.contains(_0x5840b6),
          )
        : false;
  return {
    get isFocused() {
      return _0x2e03f4.isFocused;
    },
    get rootContainerElement() {
      return _0x2481cf;
    },
    focus: () => _0x2e03f4.focus(),
    registerFocusHandler: (_0x390859, _0x2129bc) =>
      _0x2e03f4.registerFocusHandler(_0x390859, _0x2129bc),
    registerRootContainerElement: _0x113e13,
    registerContentElement: _0x113e13,
    registerContainerElement: (_0x4a7bf8) =>
      _0x113e13(_0x4a7bf8, { registerChildInteraction: true }),
    getContentElement: () => _0xb3f304,
    checkElementInCurrentContainers: (_0xcd7c04) =>
      _0x5b569d(_0xcd7c04) ||
      (_0x3c0343 == null
        ? undefined
        : _0x3c0343.contains(_0xdb1a94.embedId, _0xcd7c04)) ||
      _0x2e03f4.checkElementInCurrentContainers(_0xcd7c04),
    checkContentIsFocused: () =>
      _0x5b569d(_0xb3f304.ownerDocument["activeElement"]) ||
      (_0x289b5a == null
        ? undefined
        : _0x289b5a.hasChildInteractionLease(_0xdb1a94.embedId)) ||
      _0x2e03f4.checkContentIsFocused(),
  };
}
function ut(_0x79fc3f) {
  let _0x394be6 = new Map(),
    _0x419878 = (_0x358cf5) => {
      (_0x394be6.set(_0x358cf5, _0x358cf5.getAttribute(G)),
        _0x358cf5.setAttribute(G, "child-editor"));
    };
  return (
    _0x419878(_0x79fc3f),
    _0x79fc3f.querySelectorAll("*").forEach(_0x419878),
    (0, a.toDisposable)(() => {
      _0x394be6.forEach((_0x4a9312, _0x2e32ff) => {
        if (_0x4a9312 == null) {
          _0x2e32ff.removeAttribute(G);
          return;
        }
        _0x2e32ff.setAttribute(G, _0x4a9312);
      });
    })
  );
}
function dt(_0x35b55e, _0x3d8ab3, _0x52956c = []) {
  let _0x536832 = pt(_0x35b55e, _0x52956c) ?? _0x35b55e.injector,
    _0x256a9b = _0x536832 !== _0x35b55e.injector,
    _0x122809 = ft(_0x35b55e),
    _0x547cfe = {
      descriptor: _0x35b55e.descriptor,
      host: {
        unitId: _0x35b55e.hostUnitId,
        type: _0x35b55e.descriptor["hostType"],
        anchorId: _0x35b55e.descriptor["hostAnchorId"],
        entry: _0x35b55e.descriptor["entry"],
        layout: ht(_0x35b55e),
      },
      child: { unitId: _0x35b55e.childUnitId, type: _0x35b55e.childType },
      injector: _0x536832,
      instanceService: mt(_0x536832, a.IUniverInstanceService),
      commandService: mt(_0x536832, a.ICommandService),
      menuManagerService: mt(_0x536832, c.IMenuManagerService),
      roots: _0x122809,
      activate: () => _0x3d8ab3(true),
      deactivate: () => _0x3d8ab3(false),
      dispose: () => {
        _0x256a9b && _0x536832.dispose();
      },
    };
  return {
    runtimeScope: _0x547cfe,
    disposable: (0, a.toDisposable)(() => _0x547cfe.dispose()),
  };
}
function ft(_0x2a1b17) {
  var _0x4169b8;
  let _0x555bf0 = _0x2a1b17.renderScope["rootElement"],
    _0x1662e3 =
      _0x2a1b17.renderScope["contentRoot"] ??
      R(_0x555bf0, "data-embed-content-root") ??
      _0x555bf0,
    _0x478883 =
      _0x2a1b17.renderScope["overlayRoot"] ??
      R(_0x555bf0, "data-embed-overlay-root") ??
      _0x555bf0;
  return {
    root: _0x555bf0,
    content: _0x1662e3,
    canvas:
      _0x2a1b17.renderScope["canvasRoot"] ??
      R(_0x555bf0, "data-embed-canvas-root") ??
      undefined,
    overlay: _0x478883,
    popup:
      _0x2a1b17.renderScope["popupRoot"] ??
      R(_0x555bf0, "data-embed-popup-root") ??
      _0x478883,
    menuSlot:
      ((_0x4169b8 = _0x2a1b17.renderScope["menuOutlet"]) == null
        ? undefined
        : _0x4169b8.container) ??
      R(_0x555bf0, "data-embed-menu-slot") ??
      undefined,
    footerSlot: R(_0x555bf0, "data-embed-footer-slot") ?? undefined,
  };
}
function pt(_0x5df781, _0x37c904) {
  if (!(
    !_0x5df781.injector["has"](a.IUniverInstanceService) ||
    !_0x5df781.injector["has"](a.ICommandService)
  ))
    return ge(_0x5df781, _0x37c904);
}
function mt(_0x570708, _0x26895f) {
  if (_0x570708.has(_0x26895f)) return _0x570708.get(_0x26895f);
}
function ht(_0x24dd3c) {
  var _0x3ef60e, _0x3e36d5;
  switch (_0x24dd3c.descriptor["entry"]) {
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
  return _0x24dd3c.layout === "tab-peer" ||
    ((_0x3ef60e = _0x24dd3c.descriptor["sourceMeta"]) != null && _0x3ef60e.tab)
    ? "tab-peer"
    : (_0x3e36d5 = _0x24dd3c.descriptor["sourceMeta"]) != null &&
        _0x3e36d5.floating
      ? "float"
      : _0x24dd3c.layout["startsWith"]("docs-") ||
          _0x24dd3c.layout === "scroll-contained"
        ? "doc-flow"
        : "float";
}
var gt = class {
    constructor() {
      V(this, "_contributions", new Map());
    }
    register(_0x209023) {
      if (this._contributions["has"](_0x209023.childType))
        throw Error(
          "Embed child view contribution already registered: " +
            _0x209023.childType,
        );
      this._contributions["set"](_0x209023.childType, _0x209023);
    }
    get(_0x4fb84d) {
      return this._contributions["get"](_0x4fb84d);
    }
    list() {
      return [...this._contributions["values"]()];
    }
  },
  _t = class {
    constructor() {
      V(this, "_contributions", new Map());
    }
    register(_0x3d25ef) {
      let _0x377efa = this._key(
        _0x3d25ef.hostType,
        _0x3d25ef.entry,
        _0x3d25ef.childType,
      );
      if (this._contributions["has"](_0x377efa))
        throw Error(
          "Embed floating menu contribution already registered: " + _0x377efa,
        );
      return (
        this._contributions["set"](_0x377efa, _0x3d25ef),
        (0, a.toDisposable)(() => {
          this._contributions["get"](_0x377efa) === _0x3d25ef &&
            this._contributions["delete"](_0x377efa);
        })
      );
    }
    get(_0x50a41c, _0x5a3ac7, _0x3bebeb) {
      if (_0x3bebeb != null) {
        let _0x4bf403 = this._contributions["get"](
          this._key(_0x50a41c, _0x5a3ac7, _0x3bebeb),
        );
        if (_0x4bf403) return _0x4bf403;
      }
      return this._contributions["get"](this._key(_0x50a41c, _0x5a3ac7));
    }
    hasExact(_0x5764b8, _0x30163b, _0x161420) {
      return this._contributions["has"](
        this._key(_0x5764b8, _0x30163b, _0x161420),
      );
    }
    list() {
      return [...this._contributions["values"]()];
    }
    _key(_0x4f4a0d, _0x26c160, _0x461a98) {
      return _0x461a98 == null
        ? _0x4f4a0d + ":" + _0x26c160 + ":*"
        : _0x4f4a0d + ":" + _0x26c160 + ":" + _0x461a98;
    }
  },
  vt = class {
    constructor() {
      V(this, "_contributions", new Map());
    }
    register(_0x46768) {
      let _0x1f29d2 = this._key(_0x46768.hostType, _0x46768.entry);
      if (this._contributions["has"](_0x1f29d2))
        throw Error(
          "Embed host container contribution already registered: " + _0x1f29d2,
        );
      this._contributions["set"](_0x1f29d2, _0x46768);
    }
    get(_0x26ed74, _0x5f1917) {
      return this._contributions["get"](this._key(_0x26ed74, _0x5f1917));
    }
    list() {
      return [...this._contributions["values"]()];
    }
    supports(_0x5c1078, _0x1907bc, _0x16ead0) {
      let _0xf68b18 = this.get(_0x5c1078, _0x1907bc);
      return _0xf68b18
        ? (_0xf68b18.supportedLayouts ?? [_0xf68b18.layout]).includes(_0x16ead0)
        : false;
    }
    _key(_0x18f952, _0x49015e) {
      return _0x18f952 + ":" + _0x49015e;
    }
  },
  yt = class {
    constructor() {
      (V(this, "_rootsByChildUnitId", new Map()),
        V(this, "_rootsByEmbedId", new Map()),
        V(this, "_rootsByHostAnchorId", new Map()));
    }
    register(_0x83b1cc, _0x36c384) {
      let _0x374455 =
        typeof _0x83b1cc == "string"
          ? { childUnitId: _0x83b1cc, root: _0x36c384 }
          : _0x83b1cc;
      return (
        this._rootsByChildUnitId["set"](_0x374455.childUnitId, _0x374455),
        _0x374455.embedId &&
          this._rootsByEmbedId["set"](_0x374455.embedId, _0x374455),
        _0x374455.hostAnchorId &&
          this._rootsByHostAnchorId["set"](_0x374455.hostAnchorId, _0x374455),
        (0, a.toDisposable)(() => {
          (this._rootsByChildUnitId["get"](_0x374455.childUnitId) ===
            _0x374455 &&
            this._rootsByChildUnitId["delete"](_0x374455.childUnitId),
            _0x374455.embedId &&
              this._rootsByEmbedId["get"](_0x374455.embedId) === _0x374455 &&
              this._rootsByEmbedId["delete"](_0x374455.embedId),
            _0x374455.hostAnchorId &&
              this._rootsByHostAnchorId["get"](_0x374455.hostAnchorId) ===
                _0x374455 &&
              this._rootsByHostAnchorId["delete"](_0x374455.hostAnchorId));
        })
      );
    }
    get(_0x45bf43) {
      var _0x454802;
      return (
        ((_0x454802 = this._rootsByChildUnitId["get"](_0x45bf43)) == null
          ? undefined
          : _0x454802.root) ?? null
      );
    }
    getByEmbedId(_0x207047) {
      var _0x172e1a;
      return (
        ((_0x172e1a = this._rootsByEmbedId["get"](_0x207047)) == null
          ? undefined
          : _0x172e1a.root) ?? null
      );
    }
    getByHostAnchorId(_0x3d03e3) {
      var _0x215df3;
      return (
        ((_0x215df3 = this._rootsByHostAnchorId["get"](_0x3d03e3)) == null
          ? undefined
          : _0x215df3.root) ?? null
      );
    }
    contains(_0x37cf66, _0x26f238) {
      if (!(_0x37cf66 instanceof Node)) return false;
      let _0x504653 = _0x26f238.embedId
        ? this.getByEmbedId(_0x26f238.embedId)
        : _0x26f238.hostAnchorId
          ? this.getByHostAnchorId(_0x26f238.hostAnchorId)
          : _0x26f238.childUnitId
            ? this.get(_0x26f238.childUnitId)
            : null;
      return !!(_0x504653 != null && _0x504653.contains(_0x37cf66));
    }
  };
function bt(_0x38e515, _0x32446b, _0x3c4446 = Ct(_0x38e515), _0x54cf7b = {}) {
  var _0x5ba7d2, _0xc24c0d;
  let _0x134948 = _0x38e515.injector["get"](_0x32446b),
    _0x94f805 =
      _0x54cf7b.scopedInjector ??
      (_0x54cf7b.scopedRenderInjector === false
        ? undefined
        : (((_0x5ba7d2 = _0x38e515.runtimeScope) == null
            ? undefined
            : _0x5ba7d2.injector) ?? xt(_0x38e515))),
    _0x2dc1c4 =
      !_0x54cf7b.scopedInjector &&
      _0x94f805 !==
        ((_0xc24c0d = _0x38e515.runtimeScope) == null
          ? undefined
          : _0xc24c0d.injector),
    _0x2ef30b = Et(_0x134948, _0x38e515.childUnitId, _0x94f805);
  if (!_0x2ef30b) {
    _0x2dc1c4 && (_0x94f805 == null || _0x94f805.dispose());
    return;
  }
  ((_0x3c4446.dataset["embedChildRenderUnitId"] = _0x38e515.childUnitId),
    (_0x3c4446.dataset["embedChildRenderMode"] =
      _0x38e515.renderScope["mode"]));
  try {
    var _0x1d611c, _0x2265a0;
    (_0x1d611c = (_0x2265a0 = _0x2ef30b.engine).unmount) == null ||
      _0x1d611c.call(_0x2265a0);
  } catch {}
  (_0x2ef30b.engine["mount"](_0x3c4446),
    wt(_0x2ef30b, _0x3c4446),
    Ot(_0x2ef30b, { activate: _0x54cf7b.activate ?? true }));
  let _0x10d399 = St(_0x2ef30b, _0x3c4446, {
    activate: false,
    idleMs:
      _0x38e515.descriptor["hostType"] ===
        a.UniverInstanceType["UNIVER_SHEET"] &&
      _0x38e515.renderScope["mode"] === "float"
        ? 100
        : 0,
  });
  return (0, a.toDisposable)(() => {
    _0x10d399.dispose();
    try {
      var _0x119747, _0x58369f;
      (_0x119747 = (_0x58369f = _0x2ef30b.engine).unmount) == null ||
        _0x119747.call(_0x58369f);
    } catch {}
    if (_0x134948.getRenderUnitById(_0x38e515.childUnitId) === _0x2ef30b) {
      var _0x1e5eb3;
      (_0x1e5eb3 = _0x134948.removeRender) == null ||
        _0x1e5eb3.call(_0x134948, _0x38e515.childUnitId);
    }
    (_0x3c4446.removeAttribute("data-embed-child-render-unit-id"),
      _0x3c4446.removeAttribute("data-embed-child-render-mode"),
      _0x2dc1c4 && (_0x94f805 == null || _0x94f805.dispose()));
  });
}
function xt(_0x56c03b) {
  if (
    typeof _0x56c03b.injector["has"] == "function" &&
    !(
      !_0x56c03b.injector["has"](a.IUniverInstanceService) ||
      !_0x56c03b.injector["has"](a.ICommandService)
    )
  )
    return ge(_0x56c03b);
}
function St(_0x8248d4, _0x5cd03c, _0x11a68c = {}) {
  if (typeof ResizeObserver > "u") return (0, a.toDisposable)(() => {});
  let _0x4ee3e2 = -1,
    _0x53b4b2 = -1,
    _0x4c12c2 = 0,
    _0x5e05d5,
    _0x38edbc = () => {
      ((_0x4c12c2 &&= (window.cancelAnimationFrame(_0x4c12c2), 0)),
        (_0x4c12c2 = window.requestAnimationFrame(() => {
          ((_0x4c12c2 = 0),
            Ot(_0x8248d4, { activate: _0x11a68c.activate ?? false }));
        })));
    },
    _0x7e3e33 = new ResizeObserver((_0x3c5498) => {
      var _0x2de769;
      let _0x39a31e =
          (_0x2de769 = _0x3c5498[0]) == null
            ? undefined
            : _0x2de769.contentRect,
        _0x918e86 =
          (_0x39a31e == null ? undefined : _0x39a31e.width) ??
          _0x5cd03c.clientWidth,
        _0xa7379c =
          (_0x39a31e == null ? undefined : _0x39a31e.height) ??
          _0x5cd03c.clientHeight;
      (_0x918e86 !== _0x4ee3e2 || _0xa7379c !== _0x53b4b2) &&
        ((_0x4ee3e2 = _0x918e86),
        (_0x53b4b2 = _0xa7379c),
        (_0x4c12c2 &&= (window.cancelAnimationFrame(_0x4c12c2), 0)),
        _0x5e05d5 != null && globalThis.clearTimeout(_0x5e05d5),
        (_0x11a68c.idleMs ?? 0) > 0
          ? (_0x5e05d5 = globalThis.setTimeout(() => {
              ((_0x5e05d5 = undefined), _0x38edbc());
            }, _0x11a68c.idleMs))
          : _0x38edbc());
    });
  return (
    _0x7e3e33.observe(_0x5cd03c),
    (0, a.toDisposable)(() => {
      (_0x4c12c2 && window.cancelAnimationFrame(_0x4c12c2),
        _0x5e05d5 != null && globalThis.clearTimeout(_0x5e05d5),
        _0x7e3e33.disconnect());
    })
  );
}
function Ct(_0x1e0dc2) {
  return (
    _0x1e0dc2.runtimeScope["roots"].canvas ??
    _0x1e0dc2.renderScope["canvasRoot"] ??
    _0x1e0dc2.renderScope["contentRoot"] ??
    _0x1e0dc2.renderScope["rootElement"]
  );
}
function wt(_0x5adb64, _0x306291) {
  var _0x494b79, _0x25a5c2, _0x1d94b6, _0x356c8b, _0x19cf61;
  let _0x108114 =
    ((_0x494b79 = (_0x25a5c2 = _0x5adb64.engine).getCanvasElement) == null
      ? undefined
      : _0x494b79.call(_0x25a5c2)) ??
    ((_0x1d94b6 = (_0x356c8b = _0x5adb64.engine).getCanvas) == null ||
    (_0x1d94b6 = _0x1d94b6.call(_0x356c8b)) == null ||
    (_0x19cf61 = _0x1d94b6.getCanvasEle) == null
      ? undefined
      : _0x19cf61.call(_0x1d94b6));
  !_0x108114 ||
    _0x108114.parentElement === _0x306291 ||
    _0x306291.appendChild(_0x108114);
}
function Tt(_0x4cb74f, _0xc30949, _0x279eb0) {
  try {
    let _0x48b401 = _0x4cb74f.getRenderUnitById(_0xc30949);
    if (_0x48b401) {
      var _0x48769c;
      if (!_0x279eb0 || Dt(_0x48b401) === _0x279eb0) return _0x48b401;
      (_0x48769c = _0x4cb74f.removeRender) == null ||
        _0x48769c.call(_0x4cb74f, _0xc30949);
    }
    return _0x4cb74f.createRender(_0xc30949, {
      embeddedRender: true,
      makeCurrent: false,
      renderParentInjector: _0x279eb0,
      skipAutoRender: true,
    });
  } catch {
    return;
  }
}
function Et(_0x30029c, _0x121dc5, _0x97e576) {
  try {
    let _0x5a922a = _0x30029c.getRenderUnitById(_0x121dc5);
    if (_0x5a922a) {
      var _0x40724f;
      if (!_0x97e576 || Dt(_0x5a922a) === _0x97e576) return _0x5a922a;
      (_0x40724f = _0x30029c.removeRender) == null ||
        _0x40724f.call(_0x30029c, _0x121dc5);
    }
    return _0x30029c.createRender(_0x121dc5, {
      embeddedRender: true,
      makeCurrent: false,
      renderParentInjector: _0x97e576,
      skipAutoRender: true,
    });
  } catch (_0x327eb7) {
    var _0x12fab2;
    ((_0x12fab2 = _0x30029c.removeRender) == null ||
      _0x12fab2.call(_0x30029c, _0x121dc5),
      console.warn(
        "[embed-ui] failed to create embedded child render",
        _0x327eb7,
      ));
    return;
  }
}
function Dt(_0x4da681) {
  try {
    var _0x58049e;
    return (_0x58049e = _0x4da681.with) == null
      ? undefined
      : _0x58049e.call(_0x4da681, a.Injector);
  } catch {
    return;
  }
}
function Ot(_0xc2a21f, _0x3bb7f0 = {}) {
  var _0x5930e6, _0x34e132, _0x27eb00, _0x3aba68;
  if (_0x3bb7f0.activate) {
    var _0x2b344b;
    (_0x2b344b = _0xc2a21f.activate) == null || _0x2b344b.call(_0xc2a21f);
  }
  (_0xc2a21f.engine["resize"](),
    _0xc2a21f.components["forEach"]((_0x2b5814) => {
      var _0x22ed70, _0x281bd3;
      ((_0x22ed70 = _0x2b5814.makeForceDirty) == null ||
        _0x22ed70.call(_0x2b5814, true),
        (_0x281bd3 = _0x2b5814.makeDirty) == null ||
          _0x281bd3.call(_0x2b5814, true));
    }),
    (_0x5930e6 = _0xc2a21f.mainComponent) == null ||
      (_0x34e132 = _0x5930e6.makeDirty) == null ||
      _0x34e132.call(_0x5930e6, true),
    _0xc2a21f.scene["makeDirty"](),
    (_0x27eb00 = (_0x3aba68 = _0xc2a21f.scene).render) == null ||
      _0x27eb00.call(_0x3aba68));
}
var kt = class {
  constructor() {
    (V(this, "_providers", new Map()),
      V(this, "_contextsByEmbedId", new Map()),
      V(this, "_contextsByHostAnchorId", new Map()),
      V(this, "_contextsByChildUnitId", new Map()));
  }
  register(_0x2c5af8) {
    return (
      this._providers["set"](_0x2c5af8.childType, _0x2c5af8),
      (0, a.toDisposable)(() => {
        this._providers["get"](_0x2c5af8.childType) === _0x2c5af8 &&
          this._providers["delete"](_0x2c5af8.childType);
      })
    );
  }
  get(_0x177bf4) {
    return this._providers["get"](_0x177bf4);
  }
  registerContext(_0x31d1d0) {
    return (
      this._contextsByEmbedId["set"](_0x31d1d0.embedId, _0x31d1d0),
      this._contextsByHostAnchorId["set"](
        _0x31d1d0.descriptor["hostAnchorId"],
        _0x31d1d0,
      ),
      this._contextsByChildUnitId["set"](_0x31d1d0.childUnitId, _0x31d1d0),
      (0, a.toDisposable)(() => {
        (this._contextsByEmbedId["get"](_0x31d1d0.embedId) === _0x31d1d0 &&
          this._contextsByEmbedId["delete"](_0x31d1d0.embedId),
          this._contextsByHostAnchorId["get"](
            _0x31d1d0.descriptor["hostAnchorId"],
          ) === _0x31d1d0 &&
            this._contextsByHostAnchorId["delete"](
              _0x31d1d0.descriptor["hostAnchorId"],
            ),
          this._contextsByChildUnitId["get"](_0x31d1d0.childUnitId) ===
            _0x31d1d0 &&
            this._contextsByChildUnitId["delete"](_0x31d1d0.childUnitId));
      })
    );
  }
  getContextByEmbedId(_0x224c46) {
    return this._contextsByEmbedId["get"](_0x224c46);
  }
  getContextByHostAnchorId(_0x454916) {
    return this._contextsByHostAnchorId["get"](_0x454916);
  }
  getContextByChildUnitId(_0x181d62) {
    return this._contextsByChildUnitId["get"](_0x181d62);
  }
  capture(_0x2d97a6) {
    let _0x293dfc = this.get(_0x2d97a6.childType);
    return _0x293dfc
      ? Promise.resolve(_0x293dfc.capture(_0x2d97a6))
      : Promise.resolve(At(_0x2d97a6));
  }
  captureByEmbedId(_0x2f8c1b) {
    let _0x34c24b = this.getContextByEmbedId(_0x2f8c1b);
    return _0x34c24b ? this.capture(_0x34c24b) : Promise.resolve(undefined);
  }
  captureByHostAnchorId(_0x3a16aa) {
    let _0x307909 = this.getContextByHostAnchorId(_0x3a16aa);
    return _0x307909 ? this.capture(_0x307909) : Promise.resolve(undefined);
  }
  captureByChildUnitId(_0x2a05c2) {
    let _0x43d708 = this.getContextByChildUnitId(_0x2a05c2);
    return _0x43d708 ? this.capture(_0x43d708) : Promise.resolve(undefined);
  }
};
function At(_0x404612) {
  let _0x26ad52 = Mt(_0x404612);
  if (_0x26ad52)
    try {
      return _0x26ad52.toDataURL("image/png");
    } catch {
      return;
    }
}
const jt = "univer-embed-print-hide-scrollbars";
function Mt(_0xb01048, _0x2ae06a = false) {
  if (!_0xb01048.renderScope) return;
  let _0xf50f8 = [
      _0xb01048.renderScope["canvasRoot"],
      _0xb01048.renderScope["contentRoot"],
      _0xb01048.renderScope["rootElement"],
    ].filter((_0x47866a) => !!_0x47866a),
    _0x1fe262 = Array.from(
      new Set(
        _0xf50f8.flatMap((_0x1999cb) =>
          Array.from(_0x1999cb.querySelectorAll("canvas")),
        ),
      ),
    )
      .filter((_0x4d6eed) => _0x4d6eed.width > 1 && _0x4d6eed.height > 1)
      .sort(
        (_0x1db0a8, _0x401039) =>
          _0x401039.width * _0x401039.height -
          _0x1db0a8.width * _0x1db0a8.height,
      );
  for (let _0x24e6bb of _0x1fe262) {
    if (_0x2ae06a) return _0x24e6bb;
    try {
      return (_0x24e6bb.toDataURL("image/png"), _0x24e6bb);
    } catch {}
  }
}
function Nt(_0x1246c7) {
  try {
    var _0x4a44e4;
    return Pt(
      (
        ((_0x4a44e4 = _0x1246c7.runtimeScope) == null
          ? undefined
          : _0x4a44e4.injector) ?? _0x1246c7.injector
      )
        .get(p.IRenderManagerService)
        .getRenderUnitById(_0x1246c7.childUnitId) ?? undefined,
      Lt(_0x1246c7),
    );
  } catch {
    return Pt(undefined, Lt(_0x1246c7));
  }
}
function Pt(_0x7135ff, _0x492f4e = []) {
  let _0x21a83f = It(_0x7135ff == null ? undefined : _0x7135ff.scene),
    _0x44fcdf = _0x21a83f
      .flatMap((_0x839f7e) => {
        var _0x3f8c55;
        return (
          ((_0x3f8c55 = _0x839f7e.getViewports) == null
            ? undefined
            : _0x3f8c55.call(_0x839f7e)) ?? []
        );
      })
      .map((_0x36513d) => {
        var _0x510c40;
        return (_0x510c40 = _0x36513d.getScrollBar) == null
          ? undefined
          : _0x510c40.call(_0x36513d);
      })
      .filter((_0x59db26) => !!_0x59db26)
      .map((_0x1fa43b) => ({
        scrollBar: _0x1fa43b,
        enableHorizontal: _0x1fa43b.enableHorizontal,
        enableVertical: _0x1fa43b.enableVertical,
      })),
    _0x1f9a1e = _0x21a83f
      .flatMap((_0x1fd846) => {
        var _0x20dd75;
        return (
          ((_0x20dd75 = _0x1fd846.getAllObjects) == null
            ? undefined
            : _0x20dd75.call(_0x1fd846)) ?? []
        );
      })
      .filter((_0x4244c5) => _0x4244c5.oKey === "board-viewport-bar-object")
      .map((_0x275763) => ({ object: _0x275763, visible: _0x275763.visible })),
    _0x2ae7f2 = Array.from(new Set(_0x492f4e)),
    _0x53258d = _0x2ae7f2.map((_0x529ff6) => ({
      element: _0x529ff6,
      overflow: _0x529ff6.style["overflow"],
      hadHideClass: _0x529ff6.classList["contains"](jt),
    }));
  (_0x44fcdf.forEach(({ scrollBar: _0x138128 }) => {
    ((_0x138128.enableHorizontal = false), (_0x138128.enableVertical = false));
  }),
    _0x1f9a1e.forEach(({ object: _0x3883f3 }) => {
      var _0x555251;
      return (_0x555251 = _0x3883f3.hide) == null
        ? undefined
        : _0x555251.call(_0x3883f3);
    }),
    _0x2ae7f2.forEach((_0x311e65) => {
      ((_0x311e65.style["overflow"] = "hidden"),
        _0x311e65.classList["add"](jt));
    }),
    Rt(_0x2ae7f2).forEach((_0x4611f4) =>
      _0x4611f4.dispatchEvent(new MouseEvent("mouseleave")),
    ),
    _0x21a83f.forEach(zt));
  let _0x36b93f = false;
  return () => {
    _0x36b93f ||
      ((_0x36b93f = true),
      _0x44fcdf.forEach(
        ({
          scrollBar: _0x4f0900,
          enableHorizontal: _0x5d3dc6,
          enableVertical: _0x3edc57,
        }) => {
          ((_0x4f0900.enableHorizontal = _0x5d3dc6),
            (_0x4f0900.enableVertical = _0x3edc57));
        },
      ),
      _0x1f9a1e.forEach(({ object: _0x2aa2b8, visible: _0x137304 }) => {
        if (_0x137304) {
          var _0x2d0a7b;
          (_0x2d0a7b = _0x2aa2b8.show) == null || _0x2d0a7b.call(_0x2aa2b8);
        } else {
          var _0x2a129a;
          (_0x2a129a = _0x2aa2b8.hide) == null || _0x2a129a.call(_0x2aa2b8);
        }
      }),
      _0x53258d.forEach(
        ({
          element: _0x420546,
          overflow: _0x11c6a1,
          hadHideClass: _0x20159d,
        }) => {
          ((_0x420546.style["overflow"] = _0x11c6a1),
            _0x20159d || _0x420546.classList["remove"](jt));
        },
      ),
      _0x21a83f.forEach(zt));
  };
}
function Ft(_0x1a5086) {
  return _0x1a5086 === a.UniverInstanceType["UNIVER_BASE"]
    ? new Promise((_0xb86c2a) => globalThis.setTimeout(_0xb86c2a, 920))
    : Promise.resolve();
}
function It(_0x13b34d) {
  if (!_0x13b34d) return [];
  let _0x399e79 = [],
    _0x57d1c4 = new Set(),
    _0x41a6cf = (_0x59dd85) => {
      var _0x170581;
      _0x57d1c4.has(_0x59dd85) ||
        (_0x57d1c4.add(_0x59dd85),
        _0x399e79.push(_0x59dd85),
        (_0x170581 = _0x59dd85.getAllObjects) == null ||
          _0x170581.call(_0x59dd85).forEach((_0x15a7c8) => {
            var _0x2f478a;
            (_0x2f478a = _0x15a7c8.getSubScenes) == null ||
              _0x2f478a.call(_0x15a7c8).forEach(_0x41a6cf);
          }));
    };
  return (_0x41a6cf(_0x13b34d), _0x399e79);
}
function Lt(_0x2a1933) {
  return [
    _0x2a1933.container,
    _0x2a1933.renderScope["rootElement"],
    _0x2a1933.renderScope["contentRoot"],
    _0x2a1933.renderScope["canvasRoot"],
  ].filter((_0x5d52ab) => !!_0x5d52ab);
}
function Rt(_0x5c34a7) {
  return Array.from(
    new Set(
      _0x5c34a7.flatMap((_0x3e097f) => [
        ...(_0x3e097f instanceof HTMLCanvasElement ? [_0x3e097f] : []),
        ...Array.from(_0x3e097f.querySelectorAll("canvas")),
      ]),
    ),
  );
}
function zt(_0x70f70f) {
  var _0x5cb27a, _0x325da1;
  (_0x70f70f == null ||
    (_0x5cb27a = _0x70f70f.makeDirty) == null ||
    _0x5cb27a.call(_0x70f70f, true),
    _0x70f70f == null ||
      (_0x325da1 = _0x70f70f.render) == null ||
      _0x325da1.call(_0x70f70f));
}
const Bt = "EMBED_DUPLICATE_CHILD_UNIT";
var Vt = class extends Error {
  constructor(_0x343d74, _0x2cb9b6) {
    (super(Bt + ":\x20" + _0x343d74),
      (this.childUnitId = _0x343d74),
      (this.existingEmbedId = _0x2cb9b6),
      V(this, "code", Bt),
      (this.name = "EmbedDuplicateChildUnitError"));
  }
};
let Ht = class {
  constructor(
    _0x48d7c8,
    _0x525ae2,
    _0x357ff9,
    _0x1c8e62,
    _0x878629,
    _0x116e57,
    _0x597dcf,
    _0x155ef3,
  ) {
    ((this._hostContainerRegistry = _0x48d7c8),
      (this._childViewRegistry = _0x525ae2),
      (this._overlayRootService = _0x357ff9),
      (this._sceneCanvasCaptureService = _0x1c8e62),
      (this._univerInstanceService = _0x878629),
      (this._floatingActiveService = _0x116e57),
      (this._runtimePolicyService = _0x597dcf),
      (this._injector = _0x155ef3),
      V(this, "_sessions", new Map()),
      V(this, "_tabFocusLeases", new Map()),
      V(this, "_tabHostRenderLeases", new Map()));
  }
  mount(_0x5639c7) {
    return this._mountResolvedHost(_0x5639c7);
  }
  mountIntoHostElement(_0x183a1a, _0x462d8a, _0x5bd06f) {
    return this._mountResolvedHost(_0x183a1a, {
      hostElement: _0x462d8a,
      runtimeRoots: _0x5bd06f,
    });
  }
  _mountResolvedHost(_0x3efa9f, _0x29ad43) {
    var _0x1dc75c, _0x1c5b8a;
    if (!_0x3efa9f.childUnitId || _0x3efa9f.childType == null)
      throw Error("EMBED_MOUNT_CHILD_NOT_RESOLVED");
    (this._assertChildUnitAvailable(_0x3efa9f),
      this.unmount(_0x3efa9f.embedId));
    let _0x3b816c = {
        hostUnitId: _0x3efa9f.hostUnitId,
        embedId: _0x3efa9f.embedId,
        childUnitId: _0x3efa9f.childUnitId,
      },
      _0x4cc016 = this._resolveLayout(_0x3efa9f),
      _0x48ff1f = this._hostContainerRegistry["get"](
        _0x3efa9f.hostType,
        _0x3efa9f.entry,
      );
    if (
      !_0x48ff1f ||
      !this._hostContainerRegistry["supports"](
        _0x3efa9f.hostType,
        _0x3efa9f.entry,
        _0x4cc016,
      )
    )
      throw Error("EMBED_MOUNT_HOST_NOT_REGISTERED");
    let _0x37dcbd = this._runtimePolicyService["canMount"](_0x3b816c),
      _0x3f6909 = this._childViewRegistry["get"](_0x3efa9f.childType);
    if (
      _0x37dcbd.allowed &&
      !(_0x3f6909 != null && _0x3f6909.supportedLayouts["includes"](_0x4cc016))
    )
      throw Error("EMBED_MOUNT_CHILD_NOT_REGISTERED");
    let _0x2881c2 = {
        descriptor: _0x3efa9f,
        layout: _0x4cc016,
        injector: this._injector,
        hostUnitId: _0x3efa9f.hostUnitId,
        embedId: _0x3efa9f.embedId,
        childUnitId: _0x3efa9f.childUnitId,
        childType: _0x3efa9f.childType,
      },
      _0x89e25b = [],
      _0x1d98bb =
        _0x29ad43 ??
        ((_0x1dc75c = _0x48ff1f.mount) == null
          ? undefined
          : _0x1dc75c.call(_0x48ff1f, _0x2881c2)),
      _0x2d4921 = this._normalizeHostMountResult(_0x1d98bb);
    if (
      (_0x2d4921.disposable && _0x89e25b.push(_0x2d4921.disposable),
      (_0x2881c2.hostElement = _0x2d4921.hostElement ?? _0x2881c2.hostElement),
      (_0x2881c2.container = _0x2881c2.hostElement),
      !_0x2881c2.hostElement || !_0x2881c2.container)
    )
      throw (
        [..._0x89e25b].reverse().forEach((_0x583fc9) => _0x583fc9.dispose()),
        Error("EMBED_MOUNT_HOST_CONTAINER_NOT_RESOLVED")
      );
    if (
      (_0x2d4921.runtimeRoots || _0x89e25b.push(ae(_0x2881c2.hostElement)),
      !_0x37dcbd.allowed)
    )
      return this._mountBlockedRuntime(
        _0x3efa9f,
        _0x4cc016,
        _0x2881c2.hostElement,
        _0x2d4921.runtimeRoots,
        _0x89e25b,
        _0x37dcbd.reason,
      );
    if (!_0x3f6909)
      throw (
        [..._0x89e25b].reverse().forEach((_0x97d4bc) => _0x97d4bc.dispose()),
        Error("EMBED_MOUNT_CHILD_NOT_REGISTERED")
      );
    let {
      renderScope: _0x42f33e,
      disposable: _0x15f77a,
      setActive: _0x13c2ff,
    } = this._createRenderScope(
      _0x3efa9f,
      _0x4cc016,
      _0x2881c2.hostElement,
      _0x2d4921.runtimeRoots,
    );
    _0x89e25b.push(_0x15f77a);
    let _0x5c7c09 = {
        ..._0x2881c2,
        hostElement: _0x2881c2.hostElement,
        container: _0x2881c2.container,
        renderScope: _0x42f33e,
      },
      { runtimeScope: _0x1fe1ab, disposable: _0x22af0d } = dt(
        _0x5c7c09,
        _0x13c2ff,
        _0x3f6909.scopedDependencies,
      ),
      _0x3cc3f0 = { ..._0x5c7c09, runtimeScope: _0x1fe1ab };
    _0x89e25b.push(_0x22af0d);
    let _0x2a8ff1 = this._registerRuntimeBoundary(
      _0x3efa9f,
      _0x2881c2.hostElement,
      _0x42f33e,
      _0x1fe1ab.roots,
    );
    (_0x2a8ff1 && _0x89e25b.push(_0x2a8ff1),
      this._injector["has"](K) &&
        _0x89e25b.push(
          this._injector["get"](K).registerRuntimeScope({
            embedId: _0x3efa9f.embedId,
            hostUnitId: _0x3efa9f.hostUnitId,
            childUnitId: _0x3efa9f.childUnitId,
            childType: _0x3efa9f.childType,
          }),
        ));
    let _0x5ccdfc =
      _0x1fe1ab.injector === _0x2881c2.injector
        ? undefined
        : _0x1fe1ab.instanceService;
    (_0x89e25b.push(
      this._registerChildFocusBridge(
        _0x3efa9f,
        _0x2881c2.hostElement,
        _0x42f33e.mode,
        _0x5ccdfc,
      ),
    ),
      _0x89e25b.push(
        this._sceneCanvasCaptureService["registerContext"](_0x3cc3f0),
      ));
    let _0x432f27 = this._createMountFocusRestorer(_0x3efa9f),
      _0x11f16a =
        (_0x1c5b8a = _0x3f6909.mount) == null
          ? undefined
          : _0x1c5b8a.call(_0x3f6909, _0x3cc3f0);
    if (
      (_0x11f16a && _0x89e25b.push(_0x11f16a),
      _0x89e25b.push(_0x432f27),
      _0x89e25b.push(
        this._runtimePolicyService["registerMountedRuntime"](_0x3b816c),
      ),
      _0x42f33e.mode === "float")
    ) {
      let _0x3eb0f7 = this._mountFloatingMenu(_0x3cc3f0);
      _0x3eb0f7 && _0x89e25b.push(_0x3eb0f7);
    }
    let _0x14153f = {
      hostUnitId: _0x3efa9f.hostUnitId,
      embedId: _0x3efa9f.embedId,
      childUnitId: _0x3efa9f.childUnitId,
      childType: _0x3efa9f.childType,
      entry: _0x3efa9f.entry,
      layout: _0x4cc016,
      hostElement: _0x2881c2.hostElement,
      context: _0x3cc3f0,
    };
    return (
      this._sessions["set"](_0x3efa9f.embedId, {
        session: _0x14153f,
        disposables: _0x89e25b,
        setActive: _0x13c2ff,
      }),
      _0x4cc016 !== "tab-peer" &&
        this._initializeFloatingSessionActiveState(
          _0x3efa9f,
          _0x4cc016,
          _0x13c2ff,
        ),
      _0x14153f
    );
  }
  _mountBlockedRuntime(
    _0x2ffe6f,
    _0x315773,
    _0x35495a,
    _0x59d980,
    _0x564a9f,
    _0x78cf6a,
  ) {
    let _0x2a0c87 =
        (_0x59d980 == null ? undefined : _0x59d980.content) ??
        R(_0x35495a, "data-embed-content-root") ??
        _0x35495a,
      _0x4c8f4e = Wt(_0x78cf6a);
    (_0x2a0c87.replaceChildren(_0x4c8f4e),
      _0x564a9f.push(
        (0, a.toDisposable)(() => {
          _0x4c8f4e.parentElement === _0x2a0c87 && _0x4c8f4e.remove();
        }),
      ));
    let _0x1d294e = {
      hostUnitId: _0x2ffe6f.hostUnitId,
      embedId: _0x2ffe6f.embedId,
      childUnitId: _0x2ffe6f.childUnitId,
      childType: _0x2ffe6f.childType,
      entry: _0x2ffe6f.entry,
      layout: _0x315773,
      hostElement: _0x35495a,
    };
    return (
      this._sessions["set"](_0x2ffe6f.embedId, {
        session: _0x1d294e,
        disposables: _0x564a9f,
        setActive: () => {},
      }),
      _0x1d294e
    );
  }
  _initializeFloatingSessionActiveState(_0x3db809, _0x13809f, _0x758ad4) {
    if (_0x13809f !== "tab-peer") {
      if (this._injector["has"](t.EmbedFocusOwnerService)) {
        let _0x3bf019 = this._injector["get"](
          t.EmbedFocusOwnerService,
        ).getFocusOwner();
        if (
          (_0x3bf019 == null ? undefined : _0x3bf019.hostUnitId) ===
          _0x3db809.hostUnitId
        ) {
          _0x758ad4(_0x3bf019.embedId === _0x3db809.embedId);
          return;
        }
      }
      _0x758ad4(false);
    }
  }
  unmount(_0xf8ea7) {
    let _0x21df69 = this._sessions["get"](_0xf8ea7);
    _0x21df69 &&
      (this._releaseTabPeerFocusLease(_0xf8ea7),
      this._releaseTabPeerHostRenderLease(_0xf8ea7),
      [..._0x21df69.disposables]
        .reverse()
        .forEach((_0x5ac6e8) => _0x5ac6e8.dispose()),
      this._sessions["delete"](_0xf8ea7));
  }
  getSession(_0xe1ccb3) {
    var _0x2e58fd;
    return (_0x2e58fd = this._sessions["get"](_0xe1ccb3)) == null
      ? undefined
      : _0x2e58fd.session;
  }
  listSessions() {
    return [...this._sessions["values"]()].map(
      ({ session: _0x526b36 }) => _0x526b36,
    );
  }
  activateSession(_0xdbbad2) {
    let _0x423d04 = this._sessions["get"](_0xdbbad2);
    if (_0x423d04) {
      if (_0x423d04.session["layout"] !== "tab-peer") {
        var _0x75a1f5;
        let _0x797feb =
          (_0x75a1f5 = this._floatingActiveService["getActive"]()) == null
            ? undefined
            : _0x75a1f5.embedId;
        this._sessions["forEach"]((_0x33abc0) => {
          var _0x4b91da;
          if (
            _0x33abc0.session["layout"] === "tab-peer" ||
            _0x33abc0.session["hostUnitId"] !== _0x423d04.session["hostUnitId"]
          )
            return;
          let _0xf760a7 = _0x33abc0.session["embedId"] === _0xdbbad2;
          (!_0xf760a7 &&
            (_0x33abc0.session["embedId"] === _0x797feb ||
              ((_0x4b91da = _0x33abc0.session["context"]) == null
                ? undefined
                : _0x4b91da.renderScope["rootElement"].dataset[
                    "embedRenderScopeActive"
                  ]) === "true") &&
            this._runChildBeforeDeactivate(_0x33abc0.session),
            _0x33abc0.setActive(_0xf760a7));
        });
        return;
      }
      (this._suspendTabPeerHostRender(_0x423d04.session),
        this._sessions["forEach"]((_0x5ecc7b) => {
          var _0x4aefcd;
          if (
            _0x5ecc7b.session["layout"] !== "tab-peer" ||
            _0x5ecc7b.session["hostUnitId"] !== _0x423d04.session["hostUnitId"]
          )
            return;
          let _0x2dd5ab = _0x5ecc7b.session["embedId"] === _0xdbbad2;
          (!_0x2dd5ab &&
            ((_0x4aefcd = _0x5ecc7b.session["context"]) == null
              ? undefined
              : _0x4aefcd.renderScope["rootElement"].dataset[
                  "embedRenderScopeActive"
                ]) === "true" &&
            this._runChildBeforeDeactivate(_0x5ecc7b.session),
            _0x5ecc7b.setActive(_0x2dd5ab));
        }),
        this._focusTabPeerSession(_0x423d04.session),
        this._refreshTabPeerRender(_0x423d04.session));
    }
  }
  releaseSessionFocus(_0x3033ce) {
    let _0x16bf14 = this._tabFocusLeases["has"](_0x3033ce);
    return (this._releaseTabPeerFocusLease(_0x3033ce), _0x16bf14);
  }
  deactivateTabSessions(_0x2015ed) {
    let _0x4dbcdc = [];
    return (
      this._sessions["forEach"]((_0x374b5a) => {
        _0x374b5a.session["layout"] === "tab-peer" &&
          ((_0x2015ed && _0x374b5a.session["embedId"] !== _0x2015ed) ||
            (this._runChildBeforeDeactivate(_0x374b5a.session),
            this._releaseTabPeerFocusLease(_0x374b5a.session["embedId"]),
            _0x374b5a.setActive(false),
            this._releaseTabPeerHostRenderLease(_0x374b5a.session["embedId"]),
            _0x4dbcdc.push(_0x374b5a.session)));
      }),
      _0x4dbcdc
    );
  }
  deactivateFloatingSession(_0x4a81b1) {
    let _0x5192a8 = this._sessions["get"](_0x4a81b1);
    if (!(!_0x5192a8 || _0x5192a8.session["layout"] === "tab-peer"))
      return (
        this._runChildBeforeDeactivate(_0x5192a8.session),
        _0x5192a8.setActive(false),
        _0x5192a8.session
      );
  }
  setActive(_0x5a6e20, _0x15f858) {
    var _0x4202e1;
    (_0x4202e1 = this._sessions["get"](_0x5a6e20)) == null ||
      _0x4202e1.setActive(_0x15f858);
  }
  _runChildBeforeDeactivate(_0x3c2cc2) {
    let _0x468388 = _0x3c2cc2.context;
    if (!_0x468388) return;
    let _0x19ab6b = this._childViewRegistry["get"](_0x3c2cc2.childType);
    if (_0x19ab6b != null && _0x19ab6b.beforeDeactivate)
      try {
        _0x19ab6b.beforeDeactivate(_0x468388);
      } catch (_0x2570f9) {
        console.warn(
          "[embed-ui] failed to deactivate embedded child view",
          _0x2570f9,
        );
      }
  }
  _suspendTabPeerHostRender(_0x13d67b) {
    var _0x1bf90f;
    let _0xc439e =
      (_0x1bf90f = _0x13d67b.context) == null ? undefined : _0x1bf90f.injector;
    if (!(_0xc439e != null && _0xc439e.has(p.IRenderManagerService))) return;
    let _0x1cc7f7 = this._tabHostRenderLeases["get"](_0x13d67b.hostUnitId);
    if (_0x1cc7f7) {
      this._tabHostRenderLeases["set"](_0x13d67b.hostUnitId, {
        ..._0x1cc7f7,
        embedId: _0x13d67b.embedId,
      });
      return;
    }
    let _0xa5760f = _0xc439e
      .get(p.IRenderManagerService)
      .getRenderUnitById(_0x13d67b.hostUnitId);
    if (!_0xa5760f || _0xa5760f.isMainScene === false || _0xa5760f.isDisposed())
      return;
    let _0x2c8819 = _0xa5760f.engine["getCanvasElement"]().parentElement;
    _0x2c8819 &&
      (_0xa5760f.deactivate(),
      _0xa5760f.engine["unmount"](),
      this._tabHostRenderLeases["set"](_0x13d67b.hostUnitId, {
        embedId: _0x13d67b.embedId,
        render: _0xa5760f,
        parentElement: _0x2c8819,
      }));
  }
  _releaseTabPeerHostRenderLease(_0x4bd3ee) {
    this._tabHostRenderLeases["forEach"]((_0x45eb86, _0x250f84) => {
      _0x45eb86.embedId === _0x4bd3ee &&
        (this._tabHostRenderLeases["delete"](_0x250f84),
        !(
          _0x45eb86.render["isDisposed"]() ||
          !_0x45eb86.parentElement["isConnected"]
        ) &&
          (_0x45eb86.render["engine"].getCanvasElement().parentElement !==
            _0x45eb86.parentElement &&
            _0x45eb86.render["engine"].mount(_0x45eb86.parentElement),
          Ot(_0x45eb86.render, { activate: true })));
    });
  }
  _resolveLayout(_0x3200b6) {
    var _0xc7f0dd, _0x24aaf1;
    let _0xadf714 =
      ((_0xc7f0dd = _0x3200b6.sourceMeta) == null
        ? undefined
        : _0xc7f0dd.floating) || undefined;
    if (_0xadf714 != null && _0xadf714.layout) return _0xadf714.layout;
    let _0x35df72 =
      ((_0x24aaf1 = _0x3200b6.sourceMeta) == null
        ? undefined
        : _0x24aaf1.tab) || undefined;
    if (_0x35df72 != null && _0x35df72.enabled) return "tab-peer";
    throw Error("EMBED_MOUNT_LAYOUT_NOT_RESOLVED");
  }
  _createRenderScope(_0x3bbd11, _0x5df124, _0x2845d5, _0x5c5242) {
    var _0x2f4dc9, _0x3ecd60;
    let _0x35f711 = new f["BehaviorSubject"](true),
      _0x1a8ade = _0x3bbd11.hostAnchorId,
      _0x25a81f =
        (_0x2f4dc9 = _0x3bbd11.sourceMeta) == null ? undefined : _0x2f4dc9.tab,
      _0x5d8713 =
        _0x25a81f && _0x25a81f.enabled
          ? "tab"
          : (_0x3ecd60 = _0x3bbd11.sourceMeta) != null && _0x3ecd60.floating
            ? "float"
            : "inline",
      _0x3453cf =
        (_0x5c5242 == null ? undefined : _0x5c5242.content) ??
        R(_0x2845d5, "data-embed-content-root") ??
        _0x2845d5,
      _0x292ce6 =
        (_0x5c5242 == null ? undefined : _0x5c5242.canvas) ??
        R(_0x2845d5, "data-embed-canvas-root") ??
        _0x2845d5,
      _0x30f8c5 =
        (_0x5c5242 == null ? undefined : _0x5c5242.overlay) ??
        R(_0x2845d5, "data-embed-overlay-root") ??
        _0x2845d5,
      _0x661459 =
        (_0x5c5242 == null ? undefined : _0x5c5242.popup) ??
        R(_0x2845d5, "data-embed-popup-root") ??
        _0x30f8c5,
      _0x447006 = this._overlayRootService["register"]({
        childUnitId: _0x3bbd11.childUnitId,
        embedId: _0x3bbd11.embedId,
        hostAnchorId: _0x1a8ade,
        root: _0x30f8c5,
      }),
      _0xe28ea8 = (_0x588538) => {
        _0x35f711.getValue() !== _0x588538 &&
          (Ut(_0x2845d5, _0x588538, _0x5d8713), _0x35f711.next(_0x588538));
      };
    return (
      Ut(_0x2845d5, true, _0x5d8713),
      {
        renderScope: {
          hostUnitId: _0x3bbd11.hostUnitId,
          hostAnchorId: _0x1a8ade,
          embedId: _0x3bbd11.embedId,
          childUnitId: _0x3bbd11.childUnitId,
          childType: _0x3bbd11.childType,
          layout: _0x5df124,
          mode: _0x5d8713,
          rootElement: _0x2845d5,
          contentRoot: _0x3453cf,
          canvasRoot: _0x292ce6,
          overlayRoot: _0x30f8c5,
          popupRoot: _0x661459,
          menuOutlet:
            _0x5c5242 != null && _0x5c5242.menuSlot
              ? { container: _0x5c5242.menuSlot }
              : undefined,
          active$: _0x35f711.asObservable(),
        },
        disposable: (0, a.toDisposable)(() => {
          (_0x447006.dispose(), _0xe28ea8(false), _0x35f711.complete());
        }),
        setActive: _0xe28ea8,
      }
    );
  }
  _registerRuntimeBoundary(_0x4630bb, _0x3c07e7, _0x40b25e, _0x10d886) {
    let _0x25ba93 = this._injector["has"](J),
      _0x74422e = this._injector["has"](K);
    if (!_0x25ba93 && !_0x74422e) return;
    let _0x1d67da = _0x25ba93 ? this._injector["get"](J) : undefined,
      _0xf72fd0 = _0x74422e ? this._injector["get"](K) : undefined,
      _0x562861 = new Map(),
      _0x2d19a4 = (_0x16e82f, _0x3b44df) => {
        if (!_0x16e82f) return;
        let _0x43e1b5 = _0x562861.get(_0x16e82f);
        (!_0x43e1b5 || _0x43e1b5 === "runtime") &&
          _0x562861.set(_0x16e82f, _0x3b44df);
      };
    (_0x2d19a4(_0x3c07e7, "runtime"),
      _0x2d19a4(_0x40b25e.rootElement, "runtime"),
      _0x2d19a4(_0x40b25e.contentRoot, "runtime"),
      _0x2d19a4(_0x40b25e.canvasRoot, "runtime"),
      _0x2d19a4(_0x40b25e.overlayRoot, "runtime"),
      _0x2d19a4(_0x10d886.root, "runtime"),
      _0x2d19a4(_0x10d886.content, "runtime"),
      _0x2d19a4(_0x10d886.canvas, "runtime"),
      _0x2d19a4(_0x10d886.overlay, "runtime"),
      _0x2d19a4(_0x40b25e.popupRoot, "child-popup"),
      _0x2d19a4(_0x10d886.popup, "child-popup"));
    let _0x3c8a4a = [..._0x562861].flatMap(([_0x398936, _0x3c81a8]) =>
      [
        _0x1d67da == null
          ? undefined
          : _0x1d67da.registerRoot(
              _0x4630bb.embedId,
              _0x398936,
              _0x4630bb.childUnitId,
            ),
        _0xf72fd0 == null
          ? undefined
          : _0xf72fd0.registerElement({
              embedId: _0x4630bb.embedId,
              role: _0x3c81a8,
              element: _0x398936,
            }),
      ].filter((_0x301774) => !!_0x301774),
    );
    return (0, a.toDisposable)(() => {
      [..._0x3c8a4a].reverse().forEach((_0x2ec673) => _0x2ec673.dispose());
    });
  }
  _normalizeHostMountResult(_0x213fb6) {
    return _0x213fb6
      ? "dispose" in _0x213fb6
        ? { disposable: _0x213fb6 }
        : {
            hostElement: _0x213fb6.hostElement,
            runtimeRoots: _0x213fb6.runtimeRoots,
            disposable: _0x213fb6.disposable
              ? (0, a.toDisposable)(() => {
                  var _0x442977;
                  return (_0x442977 = _0x213fb6.disposable) == null
                    ? undefined
                    : _0x442977.dispose();
                })
              : undefined,
          }
      : {};
  }
  _mountFloatingMenu(_0x3433b5) {
    if (!this._injector["has"](_t)) return;
    let _0x536574 = this._injector["get"](_t).get(
      _0x3433b5.descriptor["hostType"],
      _0x3433b5.descriptor["entry"],
      _0x3433b5.childType,
    );
    if (!_0x536574) return;
    let _0x268da4 = this._floatingActiveService["getActive"](),
      _0x427e42 = _0x536574.mount({ ..._0x3433b5, active: _0x268da4 });
    return _0x427e42
      ? (0, a.toDisposable)(() => _0x427e42.dispose())
      : undefined;
  }
  _registerChildFocusBridge(_0x14ad41, _0x45e2b1, _0x3b9ae9, _0x193493) {
    let _0x32f8b3 = this._injector["has"](J)
        ? this._injector["get"](J)
        : undefined,
      _0x5a90c0 = this._injector["has"](K)
        ? this._injector["get"](K)
        : undefined,
      _0x24303a = _0x45e2b1.ownerDocument,
      _0x47ec30 = [],
      _0x5a19e0 =
        _0x3b9ae9 === "float" && _0x193493
          ? this._floatingActiveService["active$"].subscribe(() => {
              this._floatingActiveService["getStage"](_0x14ad41.embedId) !==
                "stage2" && _0x193493.focusUnit(null);
            })
          : undefined,
      _0x430368 = () =>
        _0x3b9ae9 !== "float" ||
        this._floatingActiveService["getStage"](_0x14ad41.embedId) === "stage2",
      _0x9416a1 = (_0x1c6622, _0x40f87d = {}) => {
        let _0x2f0cf4 = _0x40f87d.focusUnit !== false,
          _0x24b57b = _0x40f87d.activateSession !== false,
          _0x5ddbc7 =
            (_0x1c6622 == null ? undefined : _0x1c6622.target) instanceof
            Element
              ? _0x1c6622.target
              : null;
        if (
          (_0x5ddbc7 != null &&
            _0x5ddbc7.closest(
              "[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22],\x20[data-embed-ribbon-override=\x22true\x22]",
            )) ||
          !_0x14ad41.childUnitId ||
          _0x14ad41.childType == null ||
          (_0x3b9ae9 === "tab" &&
            (_0x1c6622 == null ? undefined : _0x1c6622.type) === "focusin" &&
            !this._tabFocusLeases["has"](_0x14ad41.embedId)) ||
          !_0x430368()
        )
          return;
        let _0x48e4a9 =
            _0x3b9ae9 === "tab" &&
            this._injector["has"](t.EmbedFocusOwnerService)
              ? this._injector["get"](t.EmbedFocusOwnerService).getFocusOwner()
              : null,
          _0x131cdf =
            (_0x48e4a9 == null ? undefined : _0x48e4a9.hostUnitId) ===
              _0x14ad41.hostUnitId &&
            _0x48e4a9.embedId === _0x14ad41.embedId &&
            _0x48e4a9.childUnitId === _0x14ad41.childUnitId &&
            _0x48e4a9.childType === _0x14ad41.childType;
        if (
          (_0x3b9ae9 === "float" &&
            _0x193493 &&
            (_0x193493.setCurrentUnitForType(_0x14ad41.childUnitId),
            _0x2f0cf4 && _0x193493.focusUnit(_0x14ad41.childUnitId)),
          _0x3b9ae9 === "tab" &&
            this._injector["has"](a.IUniverInstanceService))
        ) {
          var _0x3c2042, _0x4f94b5;
          let _0xd468a4 = this._injector["get"](a.IUniverInstanceService),
            _0x20e781 = _0xd468a4.getCurrentUnitOfType,
            _0x276f9c = _0xd468a4.getFocusedUnit;
          ((typeof _0x20e781 != "function" ||
            ((_0x3c2042 = _0x20e781.call(_0xd468a4, _0x14ad41.childType)) ==
            null
              ? undefined
              : _0x3c2042.getUnitId()) !== _0x14ad41.childUnitId) &&
            _0xd468a4.setCurrentUnitForType(_0x14ad41.childUnitId),
            _0x2f0cf4 &&
              (typeof _0x276f9c != "function" ||
                ((_0x4f94b5 = _0x276f9c.call(_0xd468a4)) == null
                  ? undefined
                  : _0x4f94b5.getUnitId()) !== _0x14ad41.childUnitId) &&
              _0xd468a4.focusUnit(_0x14ad41.childUnitId));
        }
        if (_0x3b9ae9 === "tab" && this._injector["has"](a.IContextService)) {
          let _0x360986 = this._injector["get"](a.IContextService);
          (_0x360986.setContextValue(a.FOCUSING_UNIT, true),
            _0x360986.setContextValue(
              a.FOCUSING_DOC,
              _0x14ad41.childType === a.UniverInstanceType["UNIVER_DOC"],
            ),
            _0x360986.setContextValue(
              a.FOCUSING_SHEET,
              _0x14ad41.childType === a.UniverInstanceType["UNIVER_SHEET"],
            ),
            _0x360986.setContextValue(
              a.FOCUSING_SLIDE,
              _0x14ad41.childType === a.UniverInstanceType["UNIVER_SLIDE"],
            ),
            _0x360986.setContextValue(
              a.FOCUSING_BOARD,
              _0x14ad41.childType === a.UniverInstanceType["UNIVER_BOARD"],
            ));
        }
        if (this._injector["has"](t.EmbedFocusOwnerService)) {
          let _0x2d3204 = this._injector["get"](t.EmbedFocusOwnerService),
            _0x4f58c4 = {
              hostUnitId: _0x14ad41.hostUnitId,
              embedId: _0x14ad41.embedId,
              childUnitId: _0x14ad41.childUnitId,
              childType: _0x14ad41.childType,
              reason: "pointer",
            },
            _0x234a78 = _0x2d3204.getFocusOwner();
          ((_0x234a78 == null ? undefined : _0x234a78.hostUnitId) !==
            _0x4f58c4.hostUnitId ||
            _0x234a78.embedId !== _0x4f58c4.embedId ||
            _0x234a78.childUnitId !== _0x4f58c4.childUnitId ||
            _0x234a78.childType !== _0x4f58c4.childType ||
            _0x234a78.reason !== _0x4f58c4.reason) &&
            _0x2d3204.setFocusOwner(_0x4f58c4);
        }
        _0x24b57b &&
          ((_0x3b9ae9 === "tab" &&
            _0x45e2b1.dataset["embedRenderScopeActive"] === "true" &&
            this._tabFocusLeases["has"](_0x14ad41.embedId) &&
            ((_0x1c6622 == null ? undefined : _0x1c6622.type) ===
              "pointerdown" ||
              _0x131cdf)) ||
            this.activateSession(_0x14ad41.embedId));
      },
      _0x11b112 = (_0x98cd) => {
        let _0x303c6d =
          _0x98cd.target instanceof Element ? _0x98cd.target : null;
        if (
          !_0x303c6d ||
          _0x45e2b1.contains(_0x303c6d) ||
          !(
            (_0x32f8b3 != null &&
              _0x32f8b3.contains(_0x14ad41.embedId, _0x303c6d, _0x98cd)) ||
            (_0x5a90c0 != null &&
              _0x5a90c0.containsElement(_0x14ad41.embedId, _0x303c6d, _0x98cd))
          )
        )
          return;
        _0x9416a1(_0x98cd, { focusUnit: false, activateSession: false });
        let _0x252b23 = _0x24303a.defaultView;
        _0x252b23 &&
          _0x47ec30.push(
            _0x252b23.setTimeout(
              () =>
                _0x9416a1(_0x98cd, {
                  focusUnit: false,
                  activateSession: false,
                }),
              0,
            ),
          );
      };
    return (
      _0x45e2b1.addEventListener("pointerdown", _0x9416a1, { capture: true }),
      _0x45e2b1.addEventListener("focusin", _0x9416a1),
      _0x24303a.addEventListener("pointerdown", _0x11b112, { capture: true }),
      _0x24303a.addEventListener("focusin", _0x11b112, { capture: true }),
      (0, a.toDisposable)(() => {
        (_0x45e2b1.removeEventListener("pointerdown", _0x9416a1, {
          capture: true,
        }),
          _0x45e2b1.removeEventListener("focusin", _0x9416a1),
          _0x24303a.removeEventListener("pointerdown", _0x11b112, {
            capture: true,
          }),
          _0x24303a.removeEventListener("focusin", _0x11b112, {
            capture: true,
          }),
          _0x47ec30.forEach((_0x1363c0) => {
            var _0x18621f;
            return (_0x18621f = _0x24303a.defaultView) == null
              ? undefined
              : _0x18621f.clearTimeout(_0x1363c0);
          }),
          _0x5a19e0 == null || _0x5a19e0.unsubscribe());
      })
    );
  }
  _focusTabPeerSession(_0x2b1aad) {
    if (
      (this._activateTabPeerFocusLease(_0x2b1aad),
      this._injector["has"](a.IUniverInstanceService))
    ) {
      let _0x28c2b5 = this._injector["get"](a.IUniverInstanceService);
      (_0x28c2b5.setCurrentUnitForType(_0x2b1aad.childUnitId),
        _0x28c2b5.focusUnit(_0x2b1aad.childUnitId));
    }
    if (this._injector["has"](a.IContextService)) {
      let _0x980a97 = this._injector["get"](a.IContextService);
      (_0x980a97.setContextValue(a.FOCUSING_UNIT, true),
        _0x980a97.setContextValue(
          a.FOCUSING_DOC,
          _0x2b1aad.childType === a.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x980a97.setContextValue(
          a.FOCUSING_SHEET,
          _0x2b1aad.childType === a.UniverInstanceType["UNIVER_SHEET"],
        ),
        _0x980a97.setContextValue(
          a.FOCUSING_SLIDE,
          _0x2b1aad.childType === a.UniverInstanceType["UNIVER_SLIDE"],
        ),
        _0x980a97.setContextValue(
          a.FOCUSING_BOARD,
          _0x2b1aad.childType === a.UniverInstanceType["UNIVER_BOARD"],
        ));
    }
    this._injector["has"](t.EmbedFocusOwnerService) &&
      this._injector["get"](t.EmbedFocusOwnerService).setFocusOwner({
        hostUnitId: _0x2b1aad.hostUnitId,
        embedId: _0x2b1aad.embedId,
        childUnitId: _0x2b1aad.childUnitId,
        childType: _0x2b1aad.childType,
        reason: "keyboard",
      });
  }
  _refreshTabPeerRender(_0x54572f) {
    var _0x143107;
    let _0x390d29 =
      (_0x143107 = _0x54572f.context) == null ? undefined : _0x143107.injector;
    if (!(_0x390d29 != null && _0x390d29.has(p.IRenderManagerService))) return;
    let _0x295ff9 = _0x390d29
      .get(p.IRenderManagerService)
      .getRenderUnitById(_0x54572f.childUnitId);
    (_0x295ff9 == null ? undefined : _0x295ff9.isMainScene) === false &&
      Ot(_0x295ff9, { activate: true });
  }
  _activateTabPeerFocusLease(_0xd68c5e) {
    (this._releaseTabPeerFocusLeasesForHost(
      _0xd68c5e.hostUnitId,
      _0xd68c5e.embedId,
    ),
      this._releaseTabPeerFocusLease(_0xd68c5e.embedId));
    let _0x46a919 = [];
    if (
      (this._injector["has"](K) &&
        _0x46a919.push(
          this._injector["get"](K).acquireLease({
            embedId: _0xd68c5e.embedId,
            role: "child-session",
            owner: "tab-peer-runtime",
            sessionMode: "child-tab",
            hostUnitId: _0xd68c5e.hostUnitId,
            childUnitId: _0xd68c5e.childUnitId,
            childType: _0xd68c5e.childType,
          }),
        ),
      this._injector["has"](J))
    ) {
      var _0x5189fc, _0x20bd7e;
      _0x46a919.push(
        this._injector["get"](J).activatePortalScope(
          _0xd68c5e.embedId,
          ((_0x5189fc = _0xd68c5e.hostElement) == null
            ? undefined
            : _0x5189fc.ownerDocument) ??
            ((_0x20bd7e = _0xd68c5e.context) == null
              ? undefined
              : _0x20bd7e.renderScope["rootElement"].ownerDocument),
          {
            includeAppShellEditorPortal:
              _0xd68c5e.childType === a.UniverInstanceType["UNIVER_SHEET"],
          },
        ),
      );
    }
    _0x46a919.length &&
      this._tabFocusLeases["set"](_0xd68c5e.embedId, {
        hostUnitId: _0xd68c5e.hostUnitId,
        disposable: (0, a.toDisposable)(() => {
          [..._0x46a919].reverse().forEach((_0x26d8c3) => _0x26d8c3.dispose());
        }),
      });
  }
  _releaseTabPeerFocusLeasesForHost(_0x55b913, _0xa630c3) {
    [...this._tabFocusLeases["entries"]()].forEach(([_0x366fe3, _0x14dc6f]) => {
      _0x366fe3 !== _0xa630c3 &&
        _0x14dc6f.hostUnitId === _0x55b913 &&
        (_0x14dc6f.disposable["dispose"](),
        this._tabFocusLeases["delete"](_0x366fe3));
    });
  }
  _releaseTabPeerFocusLease(_0x229d3e) {
    let _0x14299c = this._tabFocusLeases["get"](_0x229d3e);
    _0x14299c &&
      (_0x14299c.disposable["dispose"](),
      this._tabFocusLeases["delete"](_0x229d3e));
  }
  _createMountFocusRestorer(_0x3388bc) {
    var _0x1a5e7a, _0x4fe8b9;
    if (
      ((_0x1a5e7a = _0x3388bc.sourceMeta) != null &&
        _0x1a5e7a.tab &&
        _0x3388bc.sourceMeta["tab"].enabled) ||
      !this._injector["has"](a.IUniverInstanceService) ||
      !_0x3388bc.childUnitId
    )
      return (0, a.toDisposable)(() => {});
    let _0x2fd31d = this._injector["get"](a.IUniverInstanceService),
      _0x454323 = _0x2fd31d.getFocusedUnit,
      _0x258261 = _0x2fd31d.focusUnit;
    if (typeof _0x454323 != "function" || typeof _0x258261 != "function")
      return (0, a.toDisposable)(() => {});
    let _0x55c494 =
      (_0x4fe8b9 = _0x454323.call(_0x2fd31d)) == null
        ? undefined
        : _0x4fe8b9.getUnitId();
    if (!_0x55c494 || _0x55c494 === _0x3388bc.childUnitId)
      return (0, a.toDisposable)(() => {});
    let _0x4cc539 = () => {
        var _0xb99222;
        ((_0xb99222 = _0x454323.call(_0x2fd31d)) == null
          ? undefined
          : _0xb99222.getUnitId()) === _0x3388bc.childUnitId &&
          _0x258261.call(_0x2fd31d, _0x55c494);
      },
      _0x5c486e = [],
      _0x568d5e = [];
    return (
      _0x4cc539(),
      typeof window < "u" &&
        (_0x568d5e.push(window.requestAnimationFrame(_0x4cc539)),
        _0x5c486e.push(window.setTimeout(_0x4cc539, 0)),
        _0x5c486e.push(window.setTimeout(_0x4cc539, 120))),
      (0, a.toDisposable)(() => {
        typeof window > "u" ||
          (_0x568d5e.forEach((_0x15da19) =>
            window.cancelAnimationFrame(_0x15da19),
          ),
          _0x5c486e.forEach((_0xce59cc) => window.clearTimeout(_0xce59cc)));
      })
    );
  }
  _assertChildUnitAvailable(_0x41f978) {
    let _0x2b4d55 = [...this._sessions["values"]()].find(
      ({ session: _0x4cc729 }) =>
        _0x4cc729.embedId !== _0x41f978.embedId &&
        _0x4cc729.childUnitId === _0x41f978.childUnitId,
    );
    if (_0x2b4d55)
      throw new Vt(_0x41f978.childUnitId, _0x2b4d55.session["embedId"]);
    if (
      this._univerInstanceService["getUnit"](
        _0x41f978.childUnitId,
        _0x41f978.childType,
      )
    )
      return;
    let _0x2ce6f0 = this._univerInstanceService["getUnitType"](
      _0x41f978.childUnitId,
    );
    throw _0x2ce6f0 !== a.UniverInstanceType["UNRECOGNIZED"] &&
      _0x2ce6f0 !== _0x41f978.childType
      ? Error("EMBED_MOUNT_CHILD_TYPE_MISMATCH")
      : Error("EMBED_MOUNT_CHILD_UNIT_NOT_AVAILABLE");
  }
};
Ht = Z(
  [
    X(0, (0, a.Inject)(vt)),
    X(1, (0, a.Inject)(gt)),
    X(2, (0, a.Inject)(yt)),
    X(3, (0, a.Inject)(kt)),
    X(4, a.IUniverInstanceService),
    X(5, (0, a.Inject)(ce)),
    X(6, (0, a.Inject)(Y)),
    X(7, (0, a.Inject)(a.Injector)),
  ],
  Ht,
);
function Ut(_0x108c85, _0xe5467d, _0x3351c5) {
  if (
    ((_0x108c85.dataset["embedRenderScopeActive"] = _0xe5467d
      ? "true"
      : "false"),
    _0x3351c5 !== "tab")
  ) {
    (_0x108c85.removeAttribute("inert"),
      _0x108c85.removeAttribute("aria-hidden"),
      _0x108c85.style["removeProperty"]("display"),
      _0x108c85.style["removeProperty"]("pointer-events"));
    return;
  }
  if ((_0x108c85.toggleAttribute("inert", !_0xe5467d), _0xe5467d)) {
    (_0x108c85.removeAttribute("aria-hidden"),
      _0x108c85.style["removeProperty"]("display"),
      _0x108c85.style["removeProperty"]("pointer-events"));
    return;
  }
  (_0x108c85.setAttribute("aria-hidden", "true"),
    (_0x108c85.style["display"] = "none"),
    (_0x108c85.style["pointerEvents"] = "none"));
}
function Wt(_0x38509e) {
  let _0x2ffeb8 = document.createElement("div");
  return (
    (_0x2ffeb8.dataset["embedRuntimeBlocked"] = _0x38509e ?? "nested"),
    (_0x2ffeb8.style["cssText"] = [
      "box-sizing:border-box",
      "width:100%",
      "height:100%",
      "min-height:96px",
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "padding:16px",
      "border:1px dashed rgba(99,102,106,.35)",
      "border-radius:8px",
      "background:rgba(99,102,106,.06)",
      "color:rgba(30,34,43,.64)",
      "font:13px/1.5\x20sans-serif",
      "text-align:center",
    ].join(";")),
    (_0x2ffeb8.textContent =
      _0x38509e === "cycle"
        ? "Nested\x20embed\x20cycle\x20is\x20not\x20supported."
        : "Nested embed is not supported."),
    _0x2ffeb8
  );
}
let Gt = class extends a.Disposable {
  constructor(
    _0xcdd7e3,
    _0x474d89,
    _0x5678bc,
    _0xb85968,
    _0x294015,
    _0x42ddc2,
    _0x21b966,
    _0x3b0a76,
    _0x5f3f69,
  ) {
    var _0x4ebbc4;
    (super(),
      (this._univerInstanceService = _0xcdd7e3),
      (this._focusOwnerService = _0x474d89),
      (this._hostAdapterRegistry = _0x5678bc),
      (this._menuOverrideService = _0xb85968),
      (this._mountService = _0x294015),
      (this._blockRegistry = _0x42ddc2),
      (this._floatingActiveService = _0x21b966),
      (this._contextService = _0x3b0a76),
      (this._layoutService = _0x5f3f69),
      V(this, "_previousChildCurrentUnits", new Map()));
    let _0x5093cb =
      (_0x4ebbc4 = this._univerInstanceService["focused$"]) == null
        ? undefined
        : _0x4ebbc4.subscribe((_0x1c6796) => {
            this._restoreStage2ChildFocusWhenHostRefocuses(_0x1c6796 ?? null);
          });
    _0x5093cb && this.disposeWithMe(_0x5093cb);
  }
  activateTab(_0x3eb431) {
    var _0x561570;
    (this._assertResolvedChild(_0x3eb431),
      this._rememberPreviousChildCurrentUnit(_0x3eb431),
      this._hostAdapterRegistry["activateAnchor"]({
        embedId: _0x3eb431.embedId,
        hostUnitId: _0x3eb431.hostUnitId,
        hostType: _0x3eb431.hostType,
        entry: _0x3eb431.entry,
        hostAnchorId: _0x3eb431.hostAnchorId,
        descriptor: _0x3eb431,
      }),
      this._mountService["activateSession"](_0x3eb431.embedId));
    let _0x5a4c47 = this._blockRegistry["get"](_0x3eb431.childType);
    return this._menuOverrideService["activate"](_0x3eb431, "tab-active", {
      layoutPolicy:
        _0x5a4c47 == null || (_0x561570 = _0x5a4c47.layoutPolicy) == null
          ? undefined
          : _0x561570.tab,
      allowPlaceholder:
        (_0x5a4c47 == null ? undefined : _0x5a4c47.hostChromeMode) ===
          "title-only" ||
        (_0x5a4c47 == null ? undefined : _0x5a4c47.hostHeaderMode) ===
          "placeholder",
      allowHiddenRibbon:
        (_0x5a4c47 == null ? undefined : _0x5a4c47.hostChromeMode) === "none",
    });
  }
  activateFloating(_0xfe2919, _0x3a4d6c, _0x314119 = {}) {
    this._assertResolvedChild(_0xfe2919);
    let _0x4ccf91 = this._floatingActiveService["getActive"](),
      _0x2d47e4 =
        _0x3a4d6c === "stage2" &&
        (_0x4ccf91 == null ? undefined : _0x4ccf91.embedId) ===
          _0xfe2919.embedId &&
        _0x4ccf91.childUnitId === _0xfe2919.childUnitId &&
        _0x4ccf91.stage === "stage2";
    ((_0x4ccf91 == null ? undefined : _0x4ccf91.stage) === "stage2" &&
      !_0x2d47e4 &&
      this._restorePreviousChildCurrentUnit(_0x4ccf91.embedId),
      _0x3a4d6c === "stage2" &&
        !_0x2d47e4 &&
        this._rememberPreviousChildCurrentUnit(_0xfe2919),
      this._focusOwnerService["setFocusOwner"]({
        hostUnitId: _0xfe2919.hostUnitId,
        embedId: _0xfe2919.embedId,
        childUnitId: _0xfe2919.childUnitId,
        childType: _0xfe2919.childType,
        reason: "pointer",
      }),
      this._mountService["activateSession"](_0xfe2919.embedId));
    let _0xdd27d7 = {
      hostUnitId: _0xfe2919.hostUnitId,
      embedId: _0xfe2919.embedId,
      childUnitId: _0xfe2919.childUnitId,
    };
    (_0x3a4d6c
      ? this._floatingActiveService["activate"](_0xdd27d7, _0x3a4d6c)
      : this._floatingActiveService["activate"](_0xdd27d7),
      this._menuOverrideService["clear"](),
      _0x3a4d6c === "stage2"
        ? (this._focusUnit(
            _0xfe2919.childUnitId,
            _0xfe2919.childType,
            false,
            _0xfe2919.embedId,
          ),
          this._scheduleFloatingChildFocus(_0xfe2919))
        : (this._univerInstanceService["setCurrentUnitForType"](
            _0xfe2919.hostUnitId,
          ),
          this._univerInstanceService["focusUnit"](_0xfe2919.hostUnitId)));
  }
  focusFloatingRuntime(_0x3afcd2, _0x117ccb = {}) {
    this.activateFloating(_0x3afcd2, "stage2", _0x117ccb);
  }
  activateFullscreen(_0x7fedb3, _0x3beb22 = {}) {
    (this._assertResolvedChild(_0x7fedb3),
      this._focusOwnerService["setFocusOwner"]({
        hostUnitId: _0x7fedb3.hostUnitId,
        embedId: _0x7fedb3.embedId,
        childUnitId: _0x7fedb3.childUnitId,
        childType: _0x7fedb3.childType,
        reason: "pointer",
      }),
      this._focusUnit(
        _0x7fedb3.childUnitId,
        _0x7fedb3.childType,
        _0x3beb22.focusLayout ?? true,
        _0x7fedb3.embedId,
      ));
  }
  focusHostForPassiveRuntime(_0x4190be) {
    let _0x3565a0 = this._mountService["releaseSessionFocus"](
      _0x4190be.embedId,
    );
    (this._menuOverrideService["clear"](_0x4190be.embedId),
      this._focusOwnerService["clearFocusOwner"](_0x4190be.embedId),
      _0x3565a0 &&
        this._previousChildCurrentUnits["has"](_0x4190be.embedId) &&
        this._restorePreviousChildCurrentUnit(
          _0x4190be.embedId,
          _0x4190be.childType,
          _0x4190be.childUnitId,
        ),
      this._focusUnit(_0x4190be.hostUnitId, _0x4190be.hostType, false));
  }
  clearFullscreen(_0x2a0104) {
    let _0x462270 = this._focusOwnerService["getFocusOwner"]();
    (_0x462270 != null &&
      _0x462270.embedId &&
      _0x462270.embedId !== _0x2a0104.embedId) ||
      (this._focusOwnerService["clearFocusOwner"](_0x2a0104.embedId),
      this._univerInstanceService["setCurrentUnitForType"](
        _0x2a0104.hostUnitId,
      ),
      this._univerInstanceService["focusUnit"](_0x2a0104.hostUnitId),
      requestAnimationFrame(() => {
        this._focusOwnerService["getFocusOwner"]() ||
          (this._univerInstanceService["focusUnit"](null),
          this._univerInstanceService["focusUnit"](_0x2a0104.hostUnitId));
      }));
  }
  clearFloating(_0x451609, _0xaf542a) {
    let _0x354fe9 = this._focusOwnerService["getFocusOwner"]();
    if (
      _0x451609 &&
      _0x354fe9 != null &&
      _0x354fe9.embedId &&
      _0x354fe9.embedId !== _0x451609
    )
      return;
    let _0x58be0f = this._floatingActiveService["getActive"]();
    if (
      _0x451609 &&
      !_0x354fe9 &&
      (_0x58be0f == null ? undefined : _0x58be0f.embedId) !== _0x451609 &&
      !_0xaf542a
    )
      return;
    let _0x5ea98e =
      _0xaf542a ??
      (_0x354fe9 == null ? undefined : _0x354fe9.hostUnitId) ??
      (_0x58be0f == null ? undefined : _0x58be0f.hostUnitId);
    (this._floatingActiveService["clear"](_0x451609),
      this._focusOwnerService["clearFocusOwner"](_0x451609),
      this._menuOverrideService["clear"](_0x451609),
      _0x451609 && this._restorePreviousChildCurrentUnit(_0x451609),
      _0x451609 && this._mountService["deactivateFloatingSession"](_0x451609),
      _0x5ea98e &&
        (this._univerInstanceService["setCurrentUnitForType"](_0x5ea98e),
        this._univerInstanceService["focusUnit"](_0x5ea98e),
        requestAnimationFrame(() => {
          this._focusOwnerService["getFocusOwner"]() ||
            (this._univerInstanceService["focusUnit"](null),
            this._univerInstanceService["focusUnit"](_0x5ea98e));
        })));
  }
  clearTab(_0x5a7bc2) {
    (this._menuOverrideService["clear"](_0x5a7bc2),
      this._focusOwnerService["clearFocusOwner"](_0x5a7bc2));
    let _0x14636b = this._mountService["deactivateTabSessions"](_0x5a7bc2);
    (_0x14636b.forEach((_0xd0ad0c) =>
      this._restorePreviousChildCurrentUnit(
        _0xd0ad0c.embedId,
        _0xd0ad0c.childType,
        _0xd0ad0c.childUnitId,
      ),
    ),
      new Set(_0x14636b.map((_0x2caa2f) => _0x2caa2f.hostUnitId)).forEach(
        (_0x5cea15) => {
          (this._univerInstanceService["setCurrentUnitForType"](_0x5cea15),
            this._univerInstanceService["focusUnit"](_0x5cea15));
        },
      ));
  }
  _rememberPreviousChildCurrentUnit(_0x30461f) {
    if (this._previousChildCurrentUnits["has"](_0x30461f.embedId)) return;
    let _0xe0c04f = _0x30461f.childType,
      _0x144349 = this._getCurrentUnitId(_0xe0c04f);
    this._previousChildCurrentUnits["set"](_0x30461f.embedId, {
      childType: _0xe0c04f,
      childUnitId: _0x30461f.childUnitId,
      unitId:
        _0x144349 && _0x144349 !== _0x30461f.childUnitId
          ? _0x144349
          : undefined,
    });
  }
  _restorePreviousChildCurrentUnit(_0x53cbc1, _0x266cc3, _0x18864f) {
    let _0x256728 = this._previousChildCurrentUnits["get"](_0x53cbc1);
    this._previousChildCurrentUnits["delete"](_0x53cbc1);
    let _0x2e3bab =
        _0x266cc3 ?? (_0x256728 == null ? undefined : _0x256728.childType),
      _0x34c4b8 =
        _0x18864f ?? (_0x256728 == null ? undefined : _0x256728.childUnitId);
    if (_0x2e3bab == null || !_0x34c4b8) return;
    let _0x37b4bb =
      (_0x256728 == null ? undefined : _0x256728.childType) === _0x2e3bab &&
      _0x256728.unitId &&
      this._hasUnit(_0x256728.unitId, _0x2e3bab)
        ? _0x256728.unitId
        : this._findFallbackUnitId(_0x2e3bab, _0x34c4b8);
    _0x37b4bb &&
      this._univerInstanceService["setCurrentUnitForType"](_0x37b4bb);
  }
  _getCurrentUnitId(_0x18593c) {
    var _0x33ddd0;
    let _0x213613 = this._univerInstanceService["getCurrentUnitOfType"];
    return _0x213613 == null ||
      (_0x33ddd0 = _0x213613.call(this._univerInstanceService, _0x18593c)) ==
        null
      ? undefined
      : _0x33ddd0.getUnitId();
  }
  _hasUnit(_0xcbd968, _0x597d30) {
    let _0x1e1b17 = this._univerInstanceService["getUnit"];
    return !!(
      _0x1e1b17 != null &&
      _0x1e1b17.call(this._univerInstanceService, _0xcbd968, _0x597d30)
    );
  }
  _findFallbackUnitId(_0x1c8bf9, _0x20f7b8) {
    var _0x5aa862;
    let _0x5b93c4 = this._univerInstanceService["getAllUnitsForType"];
    return _0x5b93c4 == null ||
      (_0x5aa862 = _0x5b93c4.call(this._univerInstanceService, _0x1c8bf9)) ==
        null ||
      (_0x5aa862 = _0x5aa862.find(
        (_0x36dde7) => _0x36dde7.getUnitId() !== _0x20f7b8,
      )) == null
      ? undefined
      : _0x5aa862.getUnitId();
  }
  _focusUnit(_0x5eb2b6, _0x586db2, _0x4b03fa = true, _0x53fe50) {
    let _0x59c27f = this._univerInstanceService["getFocusedUnit"];
    if (!_0x53fe50) {
      var _0x520285;
      ((typeof _0x59c27f != "function" ||
        ((_0x520285 = _0x59c27f.call(this._univerInstanceService)) == null
          ? undefined
          : _0x520285.getUnitId()) !== _0x5eb2b6) &&
        this._univerInstanceService["focusUnit"](_0x5eb2b6),
        this._setCurrentUnitForType(_0x5eb2b6, _0x586db2),
        this._contextService["setContextValue"](a.FOCUSING_UNIT, true),
        this._contextService["setContextValue"](
          a.FOCUSING_DOC,
          _0x586db2 === a.UniverInstanceType["UNIVER_DOC"],
        ),
        this._contextService["setContextValue"](
          a.FOCUSING_SHEET,
          _0x586db2 === a.UniverInstanceType["UNIVER_SHEET"],
        ),
        this._contextService["setContextValue"](
          a.FOCUSING_SLIDE,
          _0x586db2 === a.UniverInstanceType["UNIVER_SLIDE"],
        ),
        this._contextService["setContextValue"](
          a.FOCUSING_BOARD,
          _0x586db2 === a.UniverInstanceType["UNIVER_BOARD"],
        ));
    }
    _0x4b03fa && this._focusLayout();
  }
  _restoreStage2ChildFocusWhenHostRefocuses(_0x46b911) {
    let _0x2e61db = this._floatingActiveService["getActive"]();
    if (
      (_0x2e61db == null ? undefined : _0x2e61db.stage) !== "stage2" ||
      _0x46b911 !== _0x2e61db.hostUnitId
    )
      return;
    let _0x1afea3 = this._focusOwnerService["getFocusOwner"]();
    (_0x1afea3 == null ? undefined : _0x1afea3.embedId) === _0x2e61db.embedId &&
      _0x1afea3.childUnitId === _0x2e61db.childUnitId &&
      _0x1afea3.childType != null &&
      this._focusUnit(
        _0x1afea3.childUnitId,
        _0x1afea3.childType,
        false,
        _0x1afea3.embedId,
      );
  }
  _scheduleFloatingChildFocus(_0x5622c3) {
    let _0xedf236 = () => {
      let _0xe3c085 = this._floatingActiveService["getActive"]();
      (_0xe3c085 == null ? undefined : _0xe3c085.embedId) ===
        _0x5622c3.embedId &&
        _0xe3c085.childUnitId === _0x5622c3.childUnitId &&
        _0xe3c085.stage === "stage2" &&
        this._focusUnit(
          _0x5622c3.childUnitId,
          _0x5622c3.childType,
          false,
          _0x5622c3.embedId,
        );
    };
    (typeof queueMicrotask == "function" && queueMicrotask(_0xedf236),
      requestAnimationFrame(_0xedf236));
  }
  _setCurrentUnitForType(_0x1ef164, _0x4d6a83) {
    var _0x51439c;
    let _0x2a743d = this._univerInstanceService["getCurrentUnitOfType"];
    (typeof _0x2a743d != "function" ||
      ((_0x51439c = _0x2a743d.call(this._univerInstanceService, _0x4d6a83)) ==
      null
        ? undefined
        : _0x51439c.getUnitId()) !== _0x1ef164) &&
      this._univerInstanceService["setCurrentUnitForType"](_0x1ef164);
  }
  _focusLayout() {
    let _0x73725d = () => this._layoutService["focus"]();
    (_0x73725d(),
      typeof queueMicrotask == "function" && queueMicrotask(_0x73725d),
      requestAnimationFrame(_0x73725d));
  }
  _assertResolvedChild(_0x486822) {
    if (!_0x486822.childUnitId || _0x486822.childType == null)
      throw Error("EMBED_ACTIVATION_CHILD_NOT_RESOLVED");
  }
};
Gt = Z(
  [
    X(0, a.IUniverInstanceService),
    X(1, (0, a.Inject)(t.EmbedFocusOwnerService)),
    X(2, (0, a.Inject)(t.EmbedHostAdapterRegistryService)),
    X(3, (0, a.Inject)(U)),
    X(4, (0, a.Inject)(Ht)),
    X(5, (0, a.Inject)(H)),
    X(6, (0, a.Inject)(ce)),
    X(7, a.IContextService),
    X(8, c.ILayoutService),
  ],
  Gt,
);
function Kt(_0x191b2d) {
  let {
    injector: _0xd65b1a,
    children: _0x33a03d,
    mountContainer: _0x226c92,
    embedId: _0x59a758,
  } = _0x191b2d;
  return (0, m.jsx)(
    (0, d.useMemo)(() => (0, c.connectInjector)(qt, _0xd65b1a), [_0xd65b1a]),
    { mountContainer: _0x226c92, embedId: _0x59a758, children: _0x33a03d },
  );
}
function qt(_0x9dccab) {
  let {
      children: _0x1980b2,
      mountContainer: _0x578cfd,
      embedId: _0x5429a3,
      passThroughWheelGestures: _0x443631,
    } = _0x9dccab,
    _0x54a516 = (0, c.useInjector)(),
    _0x5e3be5 = (0, c.useDependency)(a.LocaleService),
    _0x245d82 = (0, d.useMemo)(
      () =>
        _0x54a516.has(a.ThemeService)
          ? _0x54a516.get(a.ThemeService)
          : undefined,
      [_0x54a516],
    ),
    _0x41fab1 = (0, c.useObservable)(
      () =>
        _0x5e3be5.localeChanged$["pipe"](
          (0, f.map)(() => _0x5e3be5.getLocales()),
        ),
      _0x5e3be5.getLocales(),
      false,
      [_0x5e3be5],
    ),
    _0x4850e1 = (0, c.useObservable)(
      () => _0x5e3be5.direction$,
      _0x5e3be5.getDirection(),
      false,
      [_0x5e3be5],
    ),
    _0x4f2235 = Qt(_0x245d82),
    _0x3ea398 = (0, d.useRef)(null),
    _0x4771cd = (0, d.useMemo)(
      () =>
        _0x578cfd !== undefined || typeof document > "u"
          ? null
          : document.createElement("div"),
      [_0x578cfd],
    ),
    _0xcdba11 = _0x578cfd === undefined ? _0x4771cd : _0x578cfd;
  return (
    (0, d.useEffect)(() => {
      if (_0x4771cd)
        return (
          document.body["appendChild"](_0x4771cd),
          () => {
            document.body["removeChild"](_0x4771cd);
          }
        );
    }, [_0x4771cd]),
    (0, d.useEffect)(() => {
      let _0x9b24e3 = _0xcdba11;
      _0x9b24e3 && _0x9b24e3.setAttribute("dir", _0x4850e1);
    }, [_0x4850e1, _0xcdba11]),
    (0, d.useEffect)(() => {
      if (!(!_0xcdba11 || _0x443631))
        return (0, c.preventBrowserZoomInContainers)([_0xcdba11]);
    }, [_0x443631, _0xcdba11]),
    (0, d.useEffect)(() => {
      let _0x1bf91d = _0xcdba11;
      if (!_0x1bf91d || !_0x5429a3) return;
      let _0x2e8b98 = _0x1bf91d.getAttribute(q);
      return (
        _0x1bf91d.setAttribute(q, _0x5429a3),
        () => {
          if (_0x2e8b98 == null) {
            _0x1bf91d.removeAttribute(q);
            return;
          }
          _0x1bf91d.setAttribute(q, _0x2e8b98);
        }
      );
    }, [_0x5429a3, _0xcdba11]),
    (0, m.jsx)(l.ConfigProvider, {
      locale: _0x41fab1 == null ? undefined : _0x41fab1.design,
      direction: _0x4850e1,
      mountContainer: _0xcdba11,
      children: (0, m.jsx)("div", {
        ref: _0x3ea398,
        className: (0, l.clsx)("univer-contents", { "univer-dark": _0x4f2235 }),
        "data-embed-runtime-provider": "true",
        onPointerUpCapture: (_0x4e8533) => {
          let _0x2b1f3b = _0x3ea398.current,
            _0x14ae70 = _0x4e8533.target;
          if (!_0x5429a3 || !_0x2b1f3b) return;
          let _0x267266 = () => Jt(_0x5429a3, _0x2b1f3b, _0x14ae70);
          typeof queueMicrotask == "function"
            ? queueMicrotask(_0x267266)
            : Promise.resolve().then(_0x267266);
        },
        children: _0x1980b2,
      }),
    })
  );
}
function Jt(_0x325b7e, _0x4b1982, _0x571a5b) {
  let _0x4a7b52 = _0x4b1982.ownerDocument["activeElement"];
  if (Xt(_0x4a7b52, _0x325b7e)) return;
  let _0x56c630 =
      _0x571a5b instanceof HTMLElement && _0x4b1982.contains(_0x571a5b)
        ? _0x571a5b
        : null,
    _0x1e73bc = Zt(_0x56c630)
      ? _0x56c630
      : _0x4b1982.querySelector(
          "canvas[tabindex],\x20[tabindex]:not([tabindex=\x22-1\x22])",
        );
  _0x1e73bc == null || _0x1e73bc.focus({ preventScroll: true });
}
function Yt(_0x20a3f2, _0x571661) {
  Xt(_0x571661.ownerDocument["activeElement"], _0x20a3f2) ||
    (_0x571661.hasAttribute("tabindex") || (_0x571661.tabIndex = -1),
    _0x571661.focus({ preventScroll: true }));
}
function Xt(_0x58f3f5, _0x5905e3) {
  let _0xf03989 =
    _0x58f3f5 == null ? undefined : _0x58f3f5.closest("[" + q + "]");
  return (
    (_0xf03989 == null ? undefined : _0xf03989.getAttribute(q)) === _0x5905e3
  );
}
function Zt(_0x360820) {
  return (
    !!_0x360820 &&
    !_0x360820.hasAttribute("disabled") &&
    _0x360820.tabIndex >= 0
  );
}
function Qt(_0x2446ed) {
  return (0, d.useSyncExternalStore)(
    (_0x1ad188) => {
      if (!_0x2446ed) return () => {};
      let _0x473f31 = _0x2446ed.darkMode$["subscribe"](() => _0x1ad188());
      return () => _0x473f31.unsubscribe();
    },
    () => (_0x2446ed == null ? undefined : _0x2446ed.darkMode) ?? false,
    () => false,
  );
}
const $t = new WeakMap(),
  en = new WeakMap(),
  tn = new WeakMap();
function nn(_0x3838ae) {
  let _0x329f72 = $t.get(_0x3838ae);
  if (_0x329f72)
    return (tn.set(_0x329f72, (tn.get(_0x329f72) ?? 0) + 1), _0x329f72);
  let _0x422ca = { render: (_0x845bcb) => (0, l.render)(_0x845bcb, _0x3838ae) };
  return (
    $t.set(_0x3838ae, _0x422ca),
    en.set(_0x422ca, _0x3838ae),
    tn.set(_0x422ca, 0),
    _0x422ca
  );
}
function rn(_0x9105df) {
  let _0x5656bc = en.get(_0x9105df),
    _0x2405bc = tn.get(_0x9105df) ?? 0;
  globalThis.setTimeout(() => {
    (_0x5656bc && $t.get(_0x5656bc) !== _0x9105df) ||
      ((tn.get(_0x9105df) ?? 0) === _0x2405bc &&
        (_0x5656bc && ($t.delete(_0x5656bc), en.delete(_0x9105df)),
        tn.delete(_0x9105df),
        _0x5656bc && (0, l.unmount)(_0x5656bc)));
  }, 0);
}
function an(_0x11152a) {
  let {
    container: _0x16d43e,
    portalContainer: _0x2f6576,
    injector: _0x3a7fc6,
    childType: _0x426334,
    childUnitId: _0x151d41,
    embedId: _0x40930d,
    menuSchema: _0x48381e,
    menuTitlePrefix: _0x2e8143,
    activeRibbonTab: _0x18739a,
    headerMenu: _0x1a879e = false,
    toolbarOnly: _0x2ab2c1,
    ribbonType: _0x3751fd = "classic",
    ribbonHeaderClassName: _0x2147c3,
    scopedActionServiceTokens: _0xdf1f17,
  } = _0x11152a;
  if (_0x48381e != null && typeof _0x48381e != "object") return;
  let _0x3fd4d6 = on(_0x3a7fc6, {
      childType: _0x426334,
      childUnitId: _0x151d41,
      embedId: _0x40930d,
      menuSchema: _0x48381e,
      menuTitlePrefix: _0x2e8143,
      activeRibbonTab: _0x18739a,
      scopedActionServiceTokens: _0xdf1f17,
    }),
    _0x5e0e30 = nn(_0x16d43e);
  return (
    _0x5e0e30.render(
      (0, d.createElement)(
        Kt,
        {
          injector: _0x3fd4d6.injector,
          mountContainer: _0x2f6576 ?? _0x16d43e,
          embedId: _0x40930d,
        },
        (0, d.createElement)(c.Ribbon, {
          ribbonType: _0x3751fd,
          headerMenu: _0x1a879e,
          toolbarOnly: _0x2ab2c1,
          headerClassName: _0x2147c3,
        }),
      ),
    ),
    (0, a.toDisposable)(() => {
      (rn(_0x5e0e30), _0x3fd4d6.disposable["dispose"]());
    })
  );
}
function on(_0x33c99b, _0xfe14a3) {
  let {
      childType: _0x1310bd,
      childUnitId: _0x273eee,
      embedId: _0x33c549,
      menuSchema: _0x4f1bae,
      menuTitlePrefix: _0x532a3b,
      activeRibbonTab: _0x590652,
      scopedActionServiceTokens: _0x1aaeed,
    } = _0xfe14a3,
    _0xb71221 = _0x33c99b.get(a.IUniverInstanceService),
    _0x55f2c6 = ln(_0x33c99b).get(a.IUniverInstanceService),
    _0x27476d = mn(_0xb71221, _0x1310bd, _0x273eee),
    _0x1e1d6d = new WeakMap(),
    _0x3ae366,
    _0x436fd2 = vn(
      _0x33c99b.get(a.ICommandService),
      _0x55f2c6,
      _0x1310bd,
      _0x273eee,
      _0x33c549,
      () => _0x3ae366,
    ),
    _0x277dd9 =
      _0x273eee && _0x33c99b.has(a.IContextService)
        ? hn(_0x33c99b.get(a.IContextService), _0x1310bd)
        : undefined,
    _0x21faf5 = new Map([
      [a.IUniverInstanceService, _0x27476d],
      [a.ICommandService, _0x436fd2],
      ...(_0x277dd9 ? [[a.IContextService, _0x277dd9]] : []),
    ]);
  (_0x33c99b.has(a.IConfigService) &&
    _0x21faf5.set(a.IConfigService, Re(_0x33c99b.get(a.IConfigService))),
    new Set(_0x1aaeed ?? []).forEach((_0x374ed1) => {
      _0x273eee &&
        _0x33c99b.has(_0x374ed1) &&
        _0x21faf5.set(
          _0x374ed1,
          bn(
            _0x33c99b.get(_0x374ed1),
            _0x55f2c6,
            _0x1310bd,
            _0x273eee,
            _0x33c549,
            () => _0x3ae366,
            _0x1e1d6d,
          ),
        );
    }),
    (_0x3ae366 = $(_0x33c99b, _0x21faf5)));
  let { menuManager: _0x45f177, disposable: _0x3d4aef } = sn(
      _0x33c99b,
      _0x3ae366,
      _0x4f1bae,
      _0x532a3b,
    ),
    _0x445835 = new c["DesktopRibbonService"](_0x45f177, _0x27476d);
  _0x590652 && _0x445835.setActivatedTab(_0x590652);
  let _0x2d1ca6 = _0x532a3b ? un(_0x445835, _0x532a3b, _0x33c99b) : _0x445835;
  (_0x3ae366.add([c.IMenuManagerService, { useValue: _0x45f177 }]),
    _0x3ae366.add([c.IRibbonService, { useValue: _0x2d1ca6 }]));
  let _0x162f93 = cn(_0x33c99b, _0x445835, _0x45f177, {
    embedId: _0x33c549,
    childUnitId: _0x273eee,
  });
  return {
    injector: _0x3ae366,
    ribbonService: _0x2d1ca6,
    disposable: (0, a.toDisposable)(() => {
      (_0x162f93 == null || _0x162f93.dispose(),
        _0x445835.dispose(),
        _0x3d4aef == null || _0x3d4aef.dispose(),
        _0x3ae366.dispose());
    }),
  };
}
function sn(_0x342568, _0x21a447, _0x362106, _0x177b7e) {
  if (_0x362106 && typeof _0x362106 == "object") {
    let _0x369adf = new c["MenuManagerService"](
      _0x21a447,
      _0x21a447.get(a.IConfigService),
    );
    return (
      _0x369adf.mergeMenu(fn(_0x362106, _0x177b7e, _0x342568)),
      { menuManager: at(_0x369adf), disposable: _0x369adf }
    );
  }
  let _0x4947b5 = _0x342568.get(c.IMenuManagerService),
    _0x30aebd = _0x4947b5.createScoped;
  return {
    menuManager: at(
      typeof _0x30aebd == "function"
        ? _0x30aebd.call(_0x4947b5, _0x21a447)
        : _0x4947b5,
    ),
  };
}
function cn(_0x11b7ff, _0x2cacf2, _0x3b03a4, _0x274cd6) {
  let { embedId: _0x1347f0, childUnitId: _0x3bd91e } = _0x274cd6;
  if (!_0x1347f0 || !_0x3bd91e) return;
  let _0x31f6dc = ln(_0x11b7ff);
  if (!_0x31f6dc.has(c.IRibbonService) || !_0x31f6dc.has(K)) return;
  let _0x2f3e0c = _0x31f6dc.get(c.IRibbonService),
    _0x5cf96b = _0x31f6dc.get(K),
    _0x4288b2 = new Set(),
    _0x48f570 = (0, f.combineLatest)([
      _0x2f3e0c.ribbon$,
      _0x2f3e0c.activatedTab$,
      _0x3b03a4.menuChanged$["pipe"]((0, f.startWith)(undefined)),
      (0, f.merge)(
        _0x5cf96b.runtimeFocusChanged$,
        _0x5cf96b.runtimeSessionChanged$,
      ).pipe((0, f.startWith)(undefined)),
    ]).subscribe(([_0x96780c, _0x2937b4]) => {
      let _0x332979 = _0x5cf96b.resolveActiveChildSessionRuntimeScope(),
        _0x92b316 =
          (_0x332979 == null ? undefined : _0x332979.embedId) === _0x1347f0 &&
          _0x332979.childUnitId === _0x3bd91e &&
          (_0x332979.sessionMode === "child-tab" ||
            _0x332979.sessionMode === "child-fullscreen"),
        _0x43c976 = new Set(
          _0x3b03a4
            .getMenuByPositionKey(c.MenuManagerPosition["RIBBON"])
            .filter(({ contextual: _0x2bde09 }) => _0x2bde09)
            .map(({ key: _0x432490 }) => _0x432490),
        ),
        _0x409c36 = _0x92b316
          ? new Set(
              _0x96780c
                .filter(
                  ({ contextual: _0x53e618, key: _0x2e3114 }) =>
                    _0x53e618 && _0x43c976.has(_0x2e3114),
                )
                .map(({ key: _0x2c31a0 }) => _0x2c31a0),
            )
          : new Set();
      (_0x4288b2.forEach((_0x3e9d4f) => {
        _0x409c36.has(_0x3e9d4f) || _0x2cacf2.hideContextualTab(_0x3e9d4f);
      }),
        _0x409c36.forEach((_0x475825) => {
          _0x4288b2.has(_0x475825) || _0x2cacf2.showContextualTab(_0x475825);
        }),
        _0x409c36.has(_0x2937b4) && _0x2cacf2.setActivatedTab(_0x2937b4),
        (_0x4288b2 = _0x409c36));
    });
  return (0, a.toDisposable)(() => {
    (_0x48f570.unsubscribe(),
      _0x4288b2.forEach((_0x542ad0) => _0x2cacf2.hideContextualTab(_0x542ad0)),
      _0x4288b2.clear());
  });
}
function ln(_0x4dd89f) {
  return _0x4dd89f.__embedSharedRootInjector ?? _0x4dd89f;
}
function un(_0x1ab9bf, _0x5e5c97, _0x4d7c6d) {
  let _0x455b83;
  try {
    _0x455b83 = _0x4d7c6d.get(a.LocaleService);
  } catch {
    _0x455b83 = undefined;
  }
  return {
    ribbon$: _0x1ab9bf.ribbon$["pipe"](
      (0, f.map)((_0x583f48) =>
        _0x583f48.map((_0x3bac60) => dn(_0x3bac60, _0x5e5c97, _0x455b83)),
      ),
    ),
    activatedTab$: _0x1ab9bf.activatedTab$,
    collapsedIds$: _0x1ab9bf.collapsedIds$,
    fakeToolbarVisible$: _0x1ab9bf.fakeToolbarVisible$,
    setActivatedTab: (_0x55f3cb) => _0x1ab9bf.setActivatedTab(_0x55f3cb),
    showContextualTab: (_0x2968da, _0x4758e6) =>
      _0x1ab9bf.showContextualTab(_0x2968da, _0x4758e6),
    hideContextualTab: (_0x2cdf1b) => _0x1ab9bf.hideContextualTab(_0x2cdf1b),
    hideAllContextualTabs: () => _0x1ab9bf.hideAllContextualTabs(),
    setCollapsedIds: (_0x28d938) => _0x1ab9bf.setCollapsedIds(_0x28d938),
    setFakeToolbarVisible: (_0x131281) =>
      _0x1ab9bf.setFakeToolbarVisible(_0x131281),
  };
}
function dn(_0x3235d1, _0x17145d, _0x14e132) {
  let _0x48e3d0 = _0x3235d1.title || _0x3235d1.key,
    _0x11c005 = _0x14e132 ? _0x14e132.t(_0x48e3d0) : _0x48e3d0;
  return { ..._0x3235d1, title: _0x17145d + " - " + _0x11c005 };
}
function fn(_0x1b4153, _0x1b88f3, _0xc02065) {
  if (!_0x1b88f3 || !_0x1b4153 || typeof _0x1b4153 != "object")
    return _0x1b4153;
  let _0x3157b4 = pn(_0x1b4153),
    _0x44c0ff = _0x3157b4[c.MenuManagerPosition["RIBBON"]];
  if (!_0x44c0ff || typeof _0x44c0ff != "object") return _0x3157b4;
  let _0x17b93e;
  try {
    _0x17b93e = _0xc02065.get(a.LocaleService);
  } catch {
    _0x17b93e = undefined;
  }
  return (
    Object.values(_0x44c0ff).forEach((_0x5b529c) => {
      if (!_0x5b529c || typeof _0x5b529c != "object") return;
      let _0x524f16 = _0x5b529c,
        _0x32079a = _0x524f16.title;
      _0x32079a &&
        (_0x524f16.title =
          _0x1b88f3 + " - " + (_0x17b93e ? _0x17b93e.t(_0x32079a) : _0x32079a));
    }),
    _0x3157b4
  );
}
function pn(_0x1a59f2) {
  return !_0x1a59f2 || typeof _0x1a59f2 != "object"
    ? _0x1a59f2
    : Array.isArray(_0x1a59f2)
      ? _0x1a59f2.map((_0xea8842) => pn(_0xea8842))
      : Object.fromEntries(
          Object.entries(_0x1a59f2).map(([_0x563288, _0x43d407]) => [
            _0x563288,
            pn(_0x43d407),
          ]),
        );
}
function mn(_0x58d21c, _0x3c2515, _0x4253ad) {
  let _0x529e81 = () =>
      _0x4253ad ? _0x58d21c.getUnit(_0x4253ad, _0x3c2515) : null,
    _0x153f33 = _0x4253ad
      ? (0, f.merge)(
          (0, f.of)(_0x4253ad),
          _0x58d21c
            .getTypeOfUnitAdded$(_0x3c2515)
            .pipe((0, f.map)(() => _0x4253ad)),
          _0x58d21c
            .getTypeOfUnitDisposed$(_0x3c2515)
            .pipe((0, f.map)(() => _0x4253ad)),
        )
      : _0x58d21c.focused$;
  return {
    unitAdded$: _0x58d21c.unitAdded$,
    getTypeOfUnitAdded$: (..._0x16a72d) =>
      _0x58d21c.getTypeOfUnitAdded$(..._0x16a72d),
    __addUnit: (..._0x12cc8a) => _0x58d21c.__addUnit(..._0x12cc8a),
    unitDisposed$: _0x58d21c.unitDisposed$,
    getTypeOfUnitDisposed$: (..._0x4e6f9c) =>
      _0x58d21c.getTypeOfUnitDisposed$(..._0x4e6f9c),
    focused$: _0x153f33,
    get focused() {
      return _0x529e81() ?? _0x58d21c.getFocusedUnit();
    },
    focusUnit: (..._0x5ce8fb) => _0x58d21c.focusUnit(..._0x5ce8fb),
    getFocusedUnit: () => _0x529e81() ?? _0x58d21c.getFocusedUnit(),
    getCurrentUnitOfType: (_0x263a12) =>
      _0x263a12 === _0x3c2515 && _0x4253ad
        ? _0x529e81()
        : _0x58d21c.getCurrentUnitOfType(_0x263a12),
    setCurrentUnitForType: (..._0x34ea91) =>
      _0x58d21c.setCurrentUnitForType(..._0x34ea91),
    getCurrentTypeOfUnit$: (_0x40e33f) =>
      _0x40e33f !== _0x3c2515 || !_0x4253ad
        ? _0x58d21c.getCurrentTypeOfUnit$(_0x40e33f)
        : (0, f.merge)(
            (0, f.of)(undefined),
            _0x58d21c.getTypeOfUnitAdded$(_0x3c2515),
            _0x58d21c.getTypeOfUnitDisposed$(_0x3c2515),
          ).pipe((0, f.map)(() => _0x529e81())),
    createUnit: (..._0x377d95) => _0x58d21c.createUnit(..._0x377d95),
    getUnitCreateOptions: (..._0x1a1df2) =>
      _0x58d21c.getUnitCreateOptions(..._0x1a1df2),
    disposeUnit: (..._0xa85f6d) => _0x58d21c.disposeUnit(..._0xa85f6d),
    registerCtorForType: (..._0x3e25d0) =>
      _0x58d21c.registerCtorForType(..._0x3e25d0),
    getUnit: (..._0x556035) => _0x58d21c.getUnit(..._0x556035),
    getAllUnitsForType: (..._0x28793e) =>
      _0x58d21c.getAllUnitsForType(..._0x28793e),
    getUnitType: (..._0x2f5f8e) => _0x58d21c.getUnitType(..._0x2f5f8e),
  };
}
function hn(_0x4f91e7, _0x33e3f5) {
  return {
    contextChanged$: _0x4f91e7.contextChanged$,
    getContextValue: (_0x3f9152) =>
      gn(_0x3f9152, _0x33e3f5) ?? _0x4f91e7.getContextValue(_0x3f9152),
    setContextValue: (_0x48d9a5, _0x2fed45) =>
      _0x4f91e7.setContextValue(_0x48d9a5, _0x2fed45),
    subscribeContextValue$: (_0x448671) => {
      let _0xa23ce0 = gn(_0x448671, _0x33e3f5);
      return _0xa23ce0 == null
        ? _0x4f91e7.subscribeContextValue$(_0x448671)
        : (0, f.of)(_0xa23ce0);
    },
  };
}
function gn(_0x18a083, _0x580a93) {
  if (_0x18a083 === a.FOCUSING_UNIT) return true;
  if (
    _0x18a083 === a.FOCUSING_SHEET ||
    _0x18a083 === a.FOCUSING_DOC ||
    _0x18a083 === a.FOCUSING_SLIDE
  )
    return _0x18a083 === _n(_0x580a93);
}
function _n(_0x4ed757) {
  if (_0x4ed757 === a.UniverInstanceType["UNIVER_SHEET"])
    return a.FOCUSING_SHEET;
  if (_0x4ed757 === a.UniverInstanceType["UNIVER_DOC"]) return a.FOCUSING_DOC;
  if (_0x4ed757 === a.UniverInstanceType["UNIVER_SLIDE"])
    return a.FOCUSING_SLIDE;
}
function vn(_0x467741, _0xa9c8f9, _0x5497a1, _0x4a5920, _0x57699a, _0x5dd021) {
  return _0x4a5920
    ? {
        disposed: () => _0x467741.disposed(),
        hasCommand: (_0x5d0281) => _0x467741.hasCommand(_0x5d0281),
        registerCommand: (..._0x3fc455) =>
          _0x467741.registerCommand(..._0x3fc455),
        unregisterCommand: (_0x529d5c) =>
          _0x467741.unregisterCommand(_0x529d5c),
        registerMultipleCommand: (..._0x4e5b14) =>
          _0x467741.registerMultipleCommand(..._0x4e5b14),
        executeCommand: async (..._0xb530d9) => {
          let _0x28d4ef = _0xa9c8f9.getCurrentUnitOfType(_0x5497a1);
          try {
            return (
              _0xa9c8f9.setCurrentUnitForType(_0x4a5920),
              await _0x467741.executeCommand(
                _0xb530d9[0],
                _0xb530d9[1],
                yn(_0x5497a1, _0x4a5920, _0xb530d9[2]),
              )
            );
          } finally {
            wn(_0xa9c8f9, _0x4a5920, _0x28d4ef, _0x57699a, _0x5dd021);
          }
        },
        syncExecuteCommand: (..._0x5a9cbc) => {
          let _0x55570a = _0xa9c8f9.getCurrentUnitOfType(_0x5497a1);
          try {
            return (
              _0xa9c8f9.setCurrentUnitForType(_0x4a5920),
              _0x467741.syncExecuteCommand(
                _0x5a9cbc[0],
                _0x5a9cbc[1],
                yn(_0x5497a1, _0x4a5920, _0x5a9cbc[2]),
              )
            );
          } finally {
            wn(_0xa9c8f9, _0x4a5920, _0x55570a, _0x57699a, _0x5dd021);
          }
        },
        onCommandExecuted: (..._0x3267de) =>
          _0x467741.onCommandExecuted(..._0x3267de),
        beforeCommandExecuted: (..._0x28c778) =>
          _0x467741.beforeCommandExecuted(..._0x28c778),
        onMutationExecutedForCollab: (..._0x1de202) =>
          _0x467741.onMutationExecutedForCollab(..._0x1de202),
      }
    : _0x467741;
}
function yn(_0x55c72c, _0x5aeedd, _0x53183c) {
  return _0x55c72c === a.UniverInstanceType["UNIVER_BOARD"]
    ? { ..._0x53183c, unitId: _0x5aeedd }
    : _0x53183c;
}
function bn(
  _0x5c874b,
  _0x458604,
  _0x546280,
  _0x544726,
  _0x11af99,
  _0x598777,
  _0x5eaa46,
) {
  if (
    (typeof _0x5c874b != "object" && typeof _0x5c874b != "function") ||
    _0x5c874b == null
  )
    return _0x5c874b;
  let _0x212e3c = _0x5c874b,
    _0x1201fd = _0x5eaa46 == null ? undefined : _0x5eaa46.get(_0x212e3c);
  if (_0x1201fd) return _0x1201fd;
  let _0x38ea9b = { ..._0x212e3c };
  return (
    xn(
      _0x212e3c,
      _0x38ea9b,
      _0x458604,
      _0x546280,
      _0x544726,
      _0x11af99,
      _0x598777,
    ),
    _0x5eaa46 == null || _0x5eaa46.set(_0x212e3c, _0x38ea9b),
    _0x38ea9b
  );
}
function xn(
  _0x3d16ad,
  _0x18af77,
  _0x317995,
  _0x50dafa,
  _0xacf6df,
  _0x57d4f0,
  _0x3ceccb,
) {
  let _0xb9443 = (_0x100709) => {
    if (_0x100709 === "constructor") return;
    let _0x4b597d = _0x3d16ad[_0x100709];
    if (typeof _0x4b597d != "function") return;
    let _0x11186b = _0x18af77;
    _0x11186b[_0x100709] = (..._0x3d5cc2) =>
      Sn(_0x317995, _0x50dafa, _0xacf6df, _0x57d4f0, _0x3ceccb, () =>
        _0x4b597d.apply(_0x3d16ad, _0x3d5cc2),
      );
  };
  Object.keys(_0x3d16ad).forEach(_0xb9443);
  let _0x265476 = Object.getPrototypeOf(_0x3d16ad);
  _0x265476 &&
    _0x265476 !== Object.prototype &&
    Object.getOwnPropertyNames(_0x265476).forEach(_0xb9443);
}
function Sn(_0x399a73, _0x874db5, _0x3b9ba8, _0x24f4bd, _0x266a10, _0x23aaf7) {
  let _0x3fc8bf = _0x399a73.getCurrentUnitOfType(_0x874db5),
    _0x4f1f81;
  try {
    (_0x399a73.setCurrentUnitForType(_0x3b9ba8), (_0x4f1f81 = _0x23aaf7()));
  } catch (_0x2fa017) {
    throw (
      wn(_0x399a73, _0x3b9ba8, _0x3fc8bf, _0x24f4bd, _0x266a10),
      _0x2fa017
    );
  }
  return Cn(_0x4f1f81)
    ? _0x4f1f81.finally(() => {
        wn(_0x399a73, _0x3b9ba8, _0x3fc8bf, _0x24f4bd, _0x266a10);
      })
    : (wn(_0x399a73, _0x3b9ba8, _0x3fc8bf, _0x24f4bd, _0x266a10), _0x4f1f81);
}
function Cn(_0x3ad381) {
  return !!(_0x3ad381 && typeof _0x3ad381.finally == "function");
}
function wn(_0x84ca29, _0x297864, _0x2aad59, _0xe952f8, _0x2d5e6e) {
  if (Tn(_0xe952f8, _0x2d5e6e)) {
    var _0xba38c4;
    (_0x84ca29.setCurrentUnitForType(_0x297864),
      (_0xba38c4 = _0x84ca29.focusUnit) == null ||
        _0xba38c4.call(_0x84ca29, _0x297864));
    return;
  }
  _0x2aad59 && _0x84ca29.setCurrentUnitForType(_0x2aad59.getUnitId());
}
function Tn(_0xb4eaad, _0x43c079) {
  let _0x338607 = _0x43c079 == null ? undefined : _0x43c079();
  return !_0xb4eaad || !(_0x338607 != null && _0x338607.has(K))
    ? false
    : _0x338607.get(K).hasChildInteractionLease(_0xb4eaad);
}
const En = new WeakMap();
let Dn = 0;
function On(_0x8d13a5, _0x33793d) {
  if (!_0x8d13a5.has(Mn)) return An(_0x8d13a5, _0x33793d);
  let _0x48f93d = _0x8d13a5.get(Mn);
  if (!(
    _0x33793d.id &&
    _0x48f93d
      .getAll(_0x33793d.childType, _0x33793d.surface)
      .some((_0x29cd6f) => _0x29cd6f.id === _0x33793d.id)
  ))
    return _0x48f93d.register(_0x33793d);
}
function kn(_0x3aa41b) {
  if (!_0x3aa41b.has(Mn)) return;
  let _0x57ef46 = En.get(_0x3aa41b);
  _0x57ef46 != null &&
    _0x57ef46.size &&
    ([..._0x57ef46.values()]
      .sort((_0x46e083, _0x1e90eb) => _0x46e083.index - _0x1e90eb.index)
      .forEach(({ contribution: _0x3a16e3 }) => On(_0x3aa41b, _0x3a16e3)),
    En.delete(_0x3aa41b));
}
function An(_0x2562e0, _0x21ddb9) {
  let _0x32504e = { contribution: _0x21ddb9, index: Dn++ },
    _0x1ace16 = jn(_0x21ddb9, _0x32504e.index),
    _0x5dda39 = _0x2562e0,
    _0x2c8ca5 = En.get(_0x5dda39) ?? new Map();
  return (
    _0x2c8ca5.set(_0x1ace16, _0x32504e),
    En.set(_0x5dda39, _0x2c8ca5),
    (0, a.toDisposable)(() => {
      let _0x5f2d8e = En.get(_0x5dda39);
      (_0x5f2d8e == null ? undefined : _0x5f2d8e.get(_0x1ace16)) ===
        _0x32504e && _0x5f2d8e.delete(_0x1ace16);
    })
  );
}
function jn(_0xa0b609, _0x46d1e2) {
  let _0x2cb48d = Pn(_0xa0b609);
  return _0xa0b609.id
    ? _0xa0b609.childType + ":" + _0x2cb48d + ":" + _0xa0b609.id
    : _0xa0b609.childType + ":" + _0x2cb48d + ":anonymous:" + _0x46d1e2;
}
var Mn = class {
  constructor() {
    (V(this, "_contributions", new Map()), V(this, "_nextIndex", 0));
  }
  register(_0x51c68a) {
    let _0x31600e = { contribution: _0x51c68a, index: this._nextIndex++ },
      _0x27ed55 = this._contributions["get"](_0x51c68a.childType) ?? [];
    return (
      _0x27ed55.push(_0x31600e),
      _0x27ed55.sort(Fn),
      this._contributions["set"](_0x51c68a.childType, _0x27ed55),
      (0, a.toDisposable)(() => {
        let _0x46c2b6 = this._contributions["get"](_0x51c68a.childType);
        if (!_0x46c2b6) return;
        let _0x548184 = _0x46c2b6.filter(
          (_0x2c61d1) => _0x2c61d1 !== _0x31600e,
        );
        _0x548184.length
          ? this._contributions["set"](_0x51c68a.childType, _0x548184)
          : this._contributions["delete"](_0x51c68a.childType);
      })
    );
  }
  get(_0x54dbe6) {
    return this.getAll(_0x54dbe6)[0];
  }
  getAll(_0x17a927, _0x4c7092) {
    return (this._contributions["get"](_0x17a927) ?? [])
      .map((_0x193b71) => _0x193b71.contribution)
      .filter((_0x459e1c) => !_0x4c7092 || Pn(_0x459e1c) === _0x4c7092);
  }
  getMergedMenuSchema(_0x4a2350, _0xbc57aa = "ribbon") {
    let _0x5b4ecc = this.getAll(_0x4a2350, _0xbc57aa)
      .map((_0x534bc8) => _0x534bc8.menuSchema)
      .filter((_0x94537e) => _0x94537e && typeof _0x94537e == "object");
    if (_0x5b4ecc.length) return In(_0x5b4ecc);
  }
  mountMenu(_0x2bbf44) {
    let _0x50366c = _0x2bbf44.surface ?? "ribbon",
      _0x2d327c = this.getAll(_0x2bbf44.childType, _0x50366c);
    if (!_0x2d327c.length) return;
    let _0x573972 = _0x2d327c.filter((_0x14bf1d) => _0x14bf1d.mountMenu);
    if (_0x573972.length) {
      let _0x300d55 = _0x573972
        .map((_0x335df7) => {
          var _0x3f924f;
          return (_0x3f924f = _0x335df7.mountMenu) == null
            ? undefined
            : _0x3f924f.call(_0x335df7, {
                ..._0x2bbf44,
                surface: _0x50366c,
                menuSchema: _0x335df7.menuSchema,
                scopedActionServiceTokens: _0x335df7.scopedActionServiceTokens,
              });
        })
        .filter((_0x285e28) => !!_0x285e28);
      return (0, a.toDisposable)(() => {
        _0x300d55.forEach((_0x1243bf) => _0x1243bf.dispose());
      });
    }
    let _0x34b7ca = this.getMergedMenuSchema(_0x2bbf44.childType, _0x50366c);
    if (_0x50366c === "ribbon")
      return (
        an({
          ..._0x2bbf44,
          surface: _0x50366c,
          menuSchema: _0x34b7ca,
          scopedActionServiceTokens: Nn(_0x2d327c),
        }) ?? undefined
      );
  }
};
function Nn(_0x565290) {
  let _0x2f9ead = _0x565290.flatMap(
    (_0x56c53b) => _0x56c53b.scopedActionServiceTokens ?? [],
  );
  return _0x2f9ead.length ? Array.from(new Set(_0x2f9ead)) : undefined;
}
function Pn(_0x555ac2) {
  return _0x555ac2.surface ?? "ribbon";
}
function Fn(_0x2fab56, _0x25ed80) {
  return (
    (_0x2fab56.contribution["order"] ?? _0x2fab56.index) -
      (_0x25ed80.contribution["order"] ?? _0x25ed80.index) ||
    _0x2fab56.index - _0x25ed80.index
  );
}
function In(_0x1852d5) {
  return _0x1852d5.reduce(
    (_0x4dba64, _0x502446) => Bn(_0x4dba64, Ln(_0x502446)),
    {},
  );
}
function Ln(_0x4d4062) {
  if (!Hn(_0x4d4062)) return _0x4d4062;
  let _0x494ba7 = new Set(Object.values(c.RibbonPosition)),
    _0x5b6171 = Object.entries(_0x4d4062).filter(([_0x3de963]) =>
      _0x494ba7.has(_0x3de963),
    ),
    _0x251210 = Object.entries(_0x4d4062).filter(([_0x1f5dcb]) =>
      zn(_0x1f5dcb),
    );
  if (!_0x5b6171.length && !_0x251210.length) return _0x4d4062;
  let _0x5e6db6 = {};
  Object.entries(_0x4d4062).forEach(([_0x55bd4b, _0x206035]) => {
    !_0x494ba7.has(_0x55bd4b) &&
      !zn(_0x55bd4b) &&
      (_0x5e6db6[_0x55bd4b] = Vn(_0x206035));
  });
  let _0x5ea5ee = Hn(_0x5e6db6[c.MenuManagerPosition["RIBBON"]])
    ? _0x5e6db6[c.MenuManagerPosition["RIBBON"]]
    : {};
  return (
    _0x5b6171.forEach(([_0xb8ea5b, _0x143d2b]) => {
      _0x5ea5ee[_0xb8ea5b] =
        _0xb8ea5b in _0x5ea5ee
          ? Bn(_0x5ea5ee[_0xb8ea5b], _0x143d2b)
          : Vn(_0x143d2b);
    }),
    _0x251210.forEach(([_0x5685db, _0x349921]) => {
      let _0x20815a = zn(_0x5685db);
      if (!_0x20815a) return;
      let _0x535e86 = Hn(_0x5ea5ee[_0x20815a]) ? _0x5ea5ee[_0x20815a] : {};
      ((_0x535e86[_0x5685db] =
        _0x5685db in _0x535e86
          ? Bn(_0x535e86[_0x5685db], _0x349921)
          : Vn(_0x349921)),
        (_0x5ea5ee[_0x20815a] = _0x535e86));
    }),
    (_0x5e6db6[c.MenuManagerPosition["RIBBON"]] = _0x5ea5ee),
    _0x5e6db6
  );
}
const Rn = [
  [Object.values(c.RibbonStartGroup), c.RibbonPosition["START"]],
  [Object.values(c.RibbonInsertGroup), c.RibbonPosition["INSERT"]],
  [Object.values(c.RibbonFormulasGroup), c.RibbonPosition["FORMULAS"]],
  [Object.values(c.RibbonDataGroup), c.RibbonPosition["DATA"]],
  [Object.values(c.RibbonViewGroup), c.RibbonPosition["VIEW"]],
  [Object.values(c.RibbonOthersGroup), c.RibbonPosition["OTHERS"]],
];
function zn(_0x343ba0) {
  var _0xaed1d0;
  return (_0xaed1d0 = Rn.find(([_0x231c63]) =>
    _0x231c63.includes(_0x343ba0),
  )) == null
    ? undefined
    : _0xaed1d0[1];
}
function Bn(_0x185512, _0x1e7e93) {
  if (!Hn(_0x185512) || !Hn(_0x1e7e93)) return Vn(_0x1e7e93);
  let _0x4784dd = { ..._0x185512 };
  return (
    Object.entries(_0x1e7e93).forEach(([_0x236b72, _0xe4d348]) => {
      _0x4784dd[_0x236b72] =
        _0x236b72 in _0x4784dd
          ? Bn(_0x4784dd[_0x236b72], _0xe4d348)
          : Vn(_0xe4d348);
    }),
    _0x4784dd
  );
}
function Vn(_0x5db104) {
  return Array.isArray(_0x5db104)
    ? _0x5db104.map((_0x36a4c7) => Vn(_0x36a4c7))
    : Hn(_0x5db104)
      ? Object.fromEntries(
          Object.entries(_0x5db104).map(([_0x56e20f, _0x1d0a50]) => [
            _0x56e20f,
            Vn(_0x1d0a50),
          ]),
        )
      : _0x5db104;
}
function Hn(_0x97e69) {
  return !!_0x97e69 && typeof _0x97e69 == "object" && !Array.isArray(_0x97e69);
}
function Un(_0x487d82, _0x52d023, _0x559653) {
  let {
    viewport: _0x20aeea,
    menuSlot: _0x5799a6,
    popupSlot: _0x41c1e5,
  } = _0x559653;
  return {
    hostUnitId: _0x487d82.hostUnitId,
    hostAnchorId: _0x487d82.hostAnchorId,
    embedId: _0x487d82.embedId,
    childUnitId: _0x487d82.childUnitId,
    childType: _0x487d82.childType,
    layout: _0x52d023,
    mode: "float",
    rootElement: _0x20aeea,
    contentRoot: R(_0x20aeea, "data-embed-content-root") ?? _0x20aeea,
    canvasRoot: R(_0x20aeea, "data-embed-canvas-root") ?? _0x20aeea,
    overlayRoot: R(_0x20aeea, "data-embed-overlay-root") ?? _0x20aeea,
    popupRoot: _0x41c1e5 ?? R(_0x20aeea, "data-embed-popup-root") ?? _0x20aeea,
    menuOutlet: { container: _0x5799a6 },
    active$: (0, f.of)(true),
    fullscreen: true,
  };
}
function Wn(_0x7b68f1) {
  let {
      injector: _0x5ea7e0,
      descriptor: _0x3bcca5,
      renderScope: _0x403b8c,
    } = _0x7b68f1,
    _0x43ee85 = [],
    _0x100a34 = _0x3bcca5.embedId,
    _0x3c8a62 = _0x5ea7e0.has(K) ? _0x5ea7e0.get(K) : undefined,
    _0x2d035a = _0x5ea7e0.has(J) ? _0x5ea7e0.get(J) : undefined;
  return (
    _0x3c8a62 &&
      (_0x43ee85.push(
        _0x3c8a62.registerRuntimeScope({
          embedId: _0x100a34,
          hostUnitId: _0x3bcca5.hostUnitId,
          childUnitId: _0x3bcca5.childUnitId,
          childType: _0x3bcca5.childType,
          sessionMode: "child-fullscreen",
        }),
      ),
      _0x3bcca5.childUnitId &&
        _0x43ee85.push(
          _0x3c8a62.acquireLease({
            embedId: _0x100a34,
            role: "child-session",
            owner: "fullscreen-runtime",
            sessionMode: "child-fullscreen",
            hostUnitId: _0x3bcca5.hostUnitId,
            childUnitId: _0x3bcca5.childUnitId,
            childType: _0x3bcca5.childType,
          }),
        ),
      Kn(_0x7b68f1).forEach(({ element: _0x3c7a0f, role: _0x4bc52a }) => {
        _0x43ee85.push(
          _0x3c8a62.registerElement({
            embedId: _0x100a34,
            element: _0x3c7a0f,
            role: _0x4bc52a,
          }),
        );
      })),
    _0x2d035a &&
      (Kn(_0x7b68f1).forEach(({ element: _0x31e047 }) => {
        _0x43ee85.push(
          _0x2d035a.registerRoot(_0x100a34, _0x31e047, _0x3bcca5.childUnitId),
        );
      }),
      _0x43ee85.push(
        _0x2d035a.activatePortalScope(
          _0x100a34,
          _0x403b8c.rootElement["ownerDocument"],
          {
            includeAppShellEditorPortal:
              _0x3bcca5.childType === a.UniverInstanceType["UNIVER_SHEET"],
          },
        ),
      )),
    _0x3c8a62 &&
      _0x2d035a &&
      _0x43ee85.push(
        Gn({
          embedId: _0x100a34,
          focusCoordinator: _0x3c8a62,
          interactionBoundaryService: _0x2d035a,
          runtimeRoot: _0x403b8c.rootElement,
        }),
      ),
    (0, a.toDisposable)(() => {
      [..._0x43ee85].reverse().forEach((_0x3b414c) => _0x3b414c.dispose());
    })
  );
}
function Gn(_0x165dd7) {
  let {
      embedId: _0x1a2d03,
      focusCoordinator: _0x2ffd72,
      interactionBoundaryService: _0x41a2be,
      runtimeRoot: _0x3599c1,
    } = _0x165dd7,
    _0x35a9c1 = _0x3599c1.ownerDocument,
    _0x1978c9 = _0x35a9c1.defaultView,
    _0xaa5168,
    _0x510d5d = (_0x56a5c3) => {
      var _0x252c17;
      let _0x1eae70 =
        _0x56a5c3.type === "keydown" && _0x56a5c3.key === "Escape";
      if (_0x56a5c3.type === "keydown" && !_0x1eae70) return;
      let _0x50f8e6 = _0x2ffd72.resolveActiveChildSessionRuntimeScope();
      if (
        (_0x50f8e6 == null ? undefined : _0x50f8e6.embedId) !== _0x1a2d03 ||
        _0x50f8e6.sessionMode !== "child-fullscreen"
      )
        return;
      let _0x53df34 =
          _0x56a5c3.target instanceof HTMLElement ? _0x56a5c3.target : null,
        _0x2ed207 =
          !!_0x53df34 &&
          (_0x41a2be.contains(_0x1a2d03, _0x53df34, _0x56a5c3) ||
            _0x2ffd72.containsElement(_0x1a2d03, _0x53df34, _0x56a5c3)),
        _0x23dea8 =
          _0x53df34 == null ||
          (_0x252c17 = _0x53df34.closest("[data-embed-runtime-focus-role]")) ==
            null
            ? undefined
            : _0x252c17.getAttribute(G);
      (!_0x1eae70 &&
        (!_0x2ed207 ||
          (_0x23dea8 !== "child-popup" && _0x23dea8 !== "floating-menu"))) ||
        (_0x1978c9 &&
          (_0xaa5168 != null && _0x1978c9.cancelAnimationFrame(_0xaa5168),
          (_0xaa5168 = _0x1978c9.requestAnimationFrame(() => {
            _0xaa5168 = _0x1978c9.requestAnimationFrame(() => {
              var _0x5e7b2f;
              _0xaa5168 = undefined;
              let _0x1e3c10 =
                (_0x53df34 == null ? undefined : _0x53df34.isConnected) &&
                _0x53df34.closest('[data-state="closed"]') == null;
              if (!_0x1eae70 && _0x1e3c10) return;
              let _0x15303a = _0x35a9c1.activeElement,
                _0x16e509 =
                  _0x15303a instanceof HTMLElement
                    ? (_0x5e7b2f = _0x15303a.closest(
                        "[data-embed-runtime-focus-role]",
                      )) == null
                      ? undefined
                      : _0x5e7b2f.getAttribute(G)
                    : undefined,
                _0x339e1b =
                  _0x15303a instanceof HTMLElement &&
                  _0x15303a.closest('[data-state="open"]') != null,
                _0x1417b0 =
                  (_0x16e509 !== "child-popup" || _0x339e1b) &&
                  (_0x41a2be.contains(_0x1a2d03, _0x15303a) ||
                    _0x2ffd72.containsElement(_0x1a2d03, _0x15303a)),
                _0x219c59 = _0x2ffd72.resolveActiveChildSessionRuntimeScope();
              _0x1417b0 ||
                !_0x3599c1.isConnected ||
                (_0x219c59 == null ? undefined : _0x219c59.embedId) !==
                  _0x1a2d03 ||
                _0x219c59.sessionMode !== "child-fullscreen" ||
                (_0x3599c1.hasAttribute("tabindex") ||
                  (_0x3599c1.tabIndex = -1),
                _0x3599c1.focus({ preventScroll: true }));
            });
          }))));
    };
  return (
    _0x35a9c1.addEventListener("click", _0x510d5d, true),
    _0x35a9c1.addEventListener("keydown", _0x510d5d, true),
    (0, a.toDisposable)(() => {
      (_0x35a9c1.removeEventListener("click", _0x510d5d, true),
        _0x35a9c1.removeEventListener("keydown", _0x510d5d, true),
        _0xaa5168 != null &&
          (_0x1978c9 == null || _0x1978c9.cancelAnimationFrame(_0xaa5168)));
    })
  );
}
function Kn(_0xfd2b0b) {
  let {
      renderScope: _0x364e11,
      menuRoot: _0x39c4e0,
      menuSlot: _0x12d5d3,
      popupSlot: _0x6c4c5e,
      sidebarSlot: _0x1f2f64,
      rightSidebarSlot: _0x38c7ef,
      footerSlot: _0x5bb884,
    } = _0xfd2b0b,
    _0x256465 = [
      { element: _0x364e11.rootElement, role: "runtime" },
      { element: _0x364e11.contentRoot, role: "runtime" },
      { element: _0x364e11.canvasRoot, role: "runtime" },
      { element: _0x364e11.overlayRoot, role: "runtime" },
      { element: _0x39c4e0, role: "floating-menu" },
      { element: _0x12d5d3, role: "floating-menu" },
      { element: _0x5bb884, role: "floating-menu" },
      { element: _0x1f2f64, role: "child-popup" },
      { element: _0x38c7ef, role: "child-popup" },
      { element: _0x6c4c5e, role: "child-popup" },
    ],
    _0x1d7672 = new Set();
  return _0x256465.flatMap(({ element: _0x4fd0c1, role: _0x1eb100 }) =>
    !_0x4fd0c1 || _0x1d7672.has(_0x4fd0c1)
      ? []
      : (_0x1d7672.add(_0x4fd0c1), [{ element: _0x4fd0c1, role: _0x1eb100 }]),
  );
}
function qn(_0x4f60db) {
  return Jn(_0x4f60db) || Xn(_0x4f60db);
}
function Jn(_0x5ed4ce) {
  if (
    !_0x5ed4ce.injector["has"](H) ||
    _0x5ed4ce.descriptor["childType"] == null
  )
    return;
  let _0x187a3b = _0x5ed4ce.injector["get"](H).get(
    _0x5ed4ce.descriptor["childType"],
  );
  if ((_0x187a3b == null ? undefined : _0x187a3b.hostChromeMode) !== "ribbon")
    return;
  let _0x3bbaaa = Yn(_0x5ed4ce.injector);
  if (_0x5ed4ce.injector["has"](Mn)) {
    let _0x1b47e9 = _0x5ed4ce.injector["get"](Mn).mountMenu({
      container: _0x5ed4ce.menuContainer,
      portalContainer: _0x5ed4ce.childContext["runtimeScope"].roots["popup"],
      injector: _0x5ed4ce.childContext["runtimeScope"].injector,
      childType: _0x5ed4ce.descriptor["childType"],
      childUnitId: _0x5ed4ce.descriptor["childUnitId"],
      embedId: _0x5ed4ce.descriptor["embedId"],
      surface: "ribbon",
      headerMenu: true,
      ribbonType: _0x3bbaaa,
      ribbonHeaderClassName:
        "univer-box-border univer-bg-gray-50 univer-pr-24 dark:!univer-bg-gray-900",
    });
    if (_0x1b47e9) return _0x1b47e9;
  }
  return an({
    container: _0x5ed4ce.menuContainer,
    portalContainer: _0x5ed4ce.childContext["runtimeScope"].roots["popup"],
    injector: _0x5ed4ce.childContext["runtimeScope"].injector,
    childType: _0x5ed4ce.descriptor["childType"],
    childUnitId: _0x5ed4ce.descriptor["childUnitId"],
    embedId: _0x5ed4ce.descriptor["embedId"],
    menuSchema: undefined,
    headerMenu: true,
    ribbonType: _0x3bbaaa,
    ribbonHeaderClassName:
      "univer-box-border univer-bg-gray-50 univer-pr-24 dark:!univer-bg-gray-900",
  });
}
function Yn(_0x2227a6) {
  var _0x4556ac;
  return _0x2227a6.has(a.IConfigService)
    ? (((_0x4556ac = _0x2227a6
        .get(a.IConfigService)
        .getConfig(c.UI_PLUGIN_CONFIG_KEY)) == null
        ? undefined
        : _0x4556ac.ribbonType) ?? "classic")
    : "classic";
}
function Xn(_0x3ca86e) {
  if (
    !_0x3ca86e.injector["has"](_t) ||
    _0x3ca86e.descriptor["childType"] == null ||
    !_0x3ca86e.descriptor["childUnitId"]
  )
    return;
  let _0x3d5d8c = _0x3ca86e.injector["get"](_t).get(
      _0x3ca86e.descriptor["hostType"],
      _0x3ca86e.descriptor["entry"],
      _0x3ca86e.descriptor["childType"],
    ),
    _0x8c6cdf =
      _0x3d5d8c == null
        ? undefined
        : _0x3d5d8c.mount({
            ..._0x3ca86e.childContext,
            active: {
              hostUnitId: _0x3ca86e.descriptor["hostUnitId"],
              embedId: _0x3ca86e.descriptor["embedId"],
              childUnitId: _0x3ca86e.descriptor["childUnitId"],
              stage: "stage2",
            },
          });
  return _0x8c6cdf ? (0, a.toDisposable)(() => _0x8c6cdf.dispose()) : undefined;
}
let Zn = class extends a.Disposable {
  constructor(_0x159f77, _0x4c1f23) {
    (super(),
      V(this, "_session$", new f["BehaviorSubject"](null)),
      V(this, "_exited$", new f["Subject"]()),
      V(this, "session$", this._session$["asObservable"]()),
      V(this, "exited$", this._exited$["asObservable"]()),
      this.disposeWithMe(
        _0x159f77.onCommandExecuted((_0x29d677) => {
          if (!Qn(_0x29d677)) return;
          let _0x4d548d = this.getSession();
          (_0x4d548d == null ? undefined : _0x4d548d.hostUnitId) ===
            _0x29d677.params["unitId"] &&
            _0x4d548d.embedId === _0x29d677.params["embedId"] &&
            this.exit(_0x4d548d.embedId);
        }),
      ),
      this.disposeWithMe(
        _0x4c1f23.unitDisposed$["subscribe"]((_0x3310bc) => {
          let _0x266167 = this.getSession(),
            _0x2ac262 = _0x3310bc.getUnitId();
          _0x266167 &&
            (_0x266167.hostUnitId === _0x2ac262 ||
              _0x266167.childUnitId === _0x2ac262) &&
            this.exit(_0x266167.embedId);
        }),
      ));
  }
  dispose() {
    (super.dispose(),
      this._session$["complete"](),
      this._exited$["complete"]());
  }
  getSession() {
    return this._session$["getValue"]();
  }
  enter(_0x4246c1) {
    var _0x590a33, _0x59d4c1;
    if (!_0x4246c1.childUnitId || _0x4246c1.childType == null)
      throw Error("EMBED_FULLSCREEN_CHILD_NOT_RESOLVED");
    let _0x4ed5c7 =
        ((_0x590a33 = _0x4246c1.sourceMeta) == null
          ? undefined
          : _0x590a33.floating) || undefined,
      _0x2f30c8 =
        ((_0x59d4c1 = _0x4246c1.sourceMeta) == null
          ? undefined
          : _0x59d4c1.tab) || undefined;
    if (_0x2f30c8 && _0x2f30c8.enabled && !_0x4ed5c7)
      throw Error("EMBED_FULLSCREEN_TAB_NOT_SUPPORTED");
    let _0x5468b0 = _0x4ed5c7 ? _0x4ed5c7.layout : undefined;
    if (!_0x5468b0) throw Error("EMBED_FULLSCREEN_LAYOUT_NOT_RESOLVED");
    let _0x4f3948 = {
      hostUnitId: _0x4246c1.hostUnitId,
      embedId: _0x4246c1.embedId,
      childUnitId: _0x4246c1.childUnitId,
      childType: _0x4246c1.childType,
      entry: _0x4246c1.entry,
      layout: _0x5468b0,
    };
    return (this._session$["next"](_0x4f3948), _0x4f3948);
  }
  exit(_0x479dac) {
    let _0x22e8a9 = this.getSession();
    _0x22e8a9 &&
      (!_0x479dac || _0x22e8a9.embedId === _0x479dac) &&
      this._session$["next"](null);
  }
  notifyExited(_0x2368eb) {
    this._exited$["next"](_0x2368eb);
  }
};
Zn = Z([X(0, a.ICommandService), X(1, a.IUniverInstanceService)], Zn);
function Qn(_0x2ba8ba) {
  return (
    _0x2ba8ba.id === t.SoftDeleteEmbedDescriptorMutation["id"] &&
    typeof _0x2ba8ba.params == "object" &&
    _0x2ba8ba.params !== null &&
    "unitId" in _0x2ba8ba.params &&
    typeof _0x2ba8ba.params["unitId"] == "string" &&
    "embedId" in _0x2ba8ba.params &&
    typeof _0x2ba8ba.params["embedId"] == "string"
  );
}
function $n() {
  let _0x38ff07 = (0, c.useDependency)(a.Injector),
    _0x1b3613 = (0, c.useDependency)(a.LocaleService),
    _0x4bc075 = (0, c.useDependency)(Gt),
    _0x94a11a = (0, c.useDependency)(Zn),
    _0x4bab68 = (0, d.useRef)(null),
    _0xf81fb3 = (0, d.useRef)(null),
    _0x300f96 = (0, d.useRef)(null),
    _0x40d05a = (0, d.useRef)(null),
    _0x128579 = (0, d.useRef)(null),
    _0x1f2a88 = (0, d.useRef)(null),
    _0x29078c = (0, d.useRef)(null),
    _0x349d37 = (0, c.useObservable)(
      () => _0x94a11a.session$,
      _0x94a11a.getSession(),
      false,
      [_0x94a11a],
    ),
    [_0x3268a1, _0xfa365f] = (0, d.useState)(null);
  if (
    ((0, d.useEffect)(() => {
      var _0x5bbc67;
      let _0x377063 = _0x300f96.current,
        _0x1fa980 = _0xf81fb3.current,
        _0x29ea5d = _0x40d05a.current,
        _0x294555 = _0x128579.current,
        _0x41b1b7 = _0x1f2a88.current,
        _0x4682e3 = _0x29078c.current;
      if (
        !_0x349d37 ||
        !_0x377063 ||
        !_0x1fa980 ||
        !_0x29ea5d ||
        !_0x294555 ||
        !_0x41b1b7 ||
        !_0x4682e3
      )
        return;
      let _0x231579 = nr(_0x38ff07, _0x349d37.hostUnitId, _0x349d37.embedId);
      if (
        !(_0x231579 != null && _0x231579.childUnitId) ||
        _0x231579.childType == null
      ) {
        _0x377063.dataset["embedFullscreenStatus"] = "missing-descriptor";
        return;
      }
      let _0x16c732 = _0x38ff07.get(gt).get(_0x231579.childType);
      if (!(
        _0x16c732 != null &&
        _0x16c732.supportedLayouts["includes"](_0x349d37.layout)
      )) {
        _0x377063.dataset["embedFullscreenStatus"] = "unsupported-layout";
        return;
      }
      ((_0x377063.dataset["embedFullscreenStatus"] = "mounting"),
        (_0x377063.dataset["embedId"] = _0x231579.embedId),
        (_0x377063.dataset["embedHostEntry"] = _0x231579.entry),
        (_0x377063.dataset["embedHostAnchorId"] = _0x231579.hostAnchorId),
        (_0x377063.dataset["embedLayout"] = _0x349d37.layout),
        (_0x377063.dataset["embedChildType"] = String(_0x231579.childType)),
        (_0x377063.dataset["embedChildUnitId"] = _0x231579.childUnitId));
      let _0x2f361f = ae(_0x377063),
        _0x501cb0 = Un(_0x231579, _0x349d37.layout, {
          viewport: _0x377063,
          menuSlot: _0x1fa980,
          popupSlot: _0x29ea5d,
          footerSlot: _0x4682e3,
        }),
        _0x929607 = {
          descriptor: _0x231579,
          layout: _0x349d37.layout,
          injector: _0x38ff07,
          hostElement: _0x377063,
          container: _0x377063,
          renderScope: _0x501cb0,
          hostUnitId: _0x231579.hostUnitId,
          embedId: _0x231579.embedId,
          childUnitId: _0x231579.childUnitId,
          childType: _0x231579.childType,
        },
        { runtimeScope: _0x177f37, disposable: _0x29798d } = dt(
          _0x929607,
          () => {},
          _0x16c732.scopedDependencies,
        );
      _0xfa365f({
        embedId: _0x231579.embedId,
        injector: _0x177f37.injector,
        sourceInjector: _0x38ff07,
        popupContainer: _0x177f37.roots["popup"],
      });
      let _0xc56e3a = { ..._0x929607, runtimeScope: _0x177f37 },
        _0x6f4b25 = Wn({
          injector: _0x38ff07,
          descriptor: _0x231579,
          renderScope: _0x501cb0,
          menuRoot: _0x4bab68.current,
          menuSlot: _0x1fa980,
          popupSlot: _0x29ea5d,
          sidebarSlot: _0x294555,
          rightSidebarSlot: _0x41b1b7,
          footerSlot: _0x4682e3,
        }),
        _0x498db3 = (_0x30a66e, _0x2e3103 = false) => {
          var _0x24922b, _0x3b84ab;
          let _0x1e7f6c =
            (_0x30a66e == null ? undefined : _0x30a66e.target) instanceof
            Element
              ? _0x30a66e.target
              : null;
          (_0x1e7f6c != null &&
            _0x1e7f6c.closest(
              '[data-embed-fullscreen-close="true"], [data-embed-fullscreen-menu="true"], [data-embed-fullscreen-popup-root="true"]',
            )) ||
            ((_0x24922b = _0x177f37.instanceService) == null ||
              _0x24922b.setCurrentUnitForType(_0x231579.childUnitId),
            (_0x3b84ab = _0x177f37.instanceService) == null ||
              _0x3b84ab.focusUnit(_0x231579.childUnitId),
            _0x4bc075.activateFullscreen(_0x231579, {
              focusLayout: _0x2e3103,
            }));
        };
      (_0x498db3(undefined, true),
        _0x377063.addEventListener("pointerdown", _0x498db3, { capture: true }),
        _0x377063.addEventListener("focusin", _0x498db3));
      let _0x408c57 =
        (_0x5bbc67 = _0x16c732.mount) == null
          ? undefined
          : _0x5bbc67.call(_0x16c732, _0xc56e3a);
      _0x231579.childType === a.UniverInstanceType["UNIVER_BASE"] &&
        Yt(_0x231579.embedId, _0x501cb0.rootElement);
      let _0x1dd917 = qn({
        injector: _0x38ff07,
        descriptor: _0x231579,
        childContext: _0xc56e3a,
        menuContainer: _0x1fa980,
      });
      return (
        (_0x377063.dataset["embedFullscreenStatus"] = "mounted"),
        () => {
          (_0xfa365f(null),
            globalThis.requestAnimationFrame(() => {
              (_0x377063.removeEventListener("pointerdown", _0x498db3, {
                capture: true,
              }),
                _0x377063.removeEventListener("focusin", _0x498db3),
                _0x1dd917 == null || _0x1dd917.dispose(),
                _0x408c57 == null || _0x408c57.dispose(),
                _0x6f4b25.dispose(),
                _0x29798d.dispose(),
                _0x2f361f.dispose(),
                _0x4bc075.clearFullscreen(_0x231579),
                delete _0x377063.dataset["embedFullscreenStatus"],
                delete _0x377063.dataset["embedId"],
                delete _0x377063.dataset["embedHostEntry"],
                delete _0x377063.dataset["embedHostAnchorId"],
                delete _0x377063.dataset["embedLayout"],
                delete _0x377063.dataset["embedChildType"],
                delete _0x377063.dataset["embedChildUnitId"],
                _0x94a11a.notifyExited(_0x349d37));
            }));
        }
      );
    }, [_0x4bc075, _0x94a11a, _0x38ff07, _0x349d37]),
    !_0x349d37)
  )
    return null;
  let _0x2de423 = () => {
    _0x94a11a.exit(_0x349d37.embedId);
  };
  return (0, m.jsxs)("div", {
    className:
      "univer-fixed\x20univer-inset-0\x20univer-grid\x20univer-grid-rows-[auto_minmax(0,1fr)_auto]\x20univer-bg-gray-0\x20univer-text-gray-900\x20dark:!univer-bg-gray-800\x20dark:!univer-text-gray-0",
    "data-embed-fullscreen-shell": "true",
    style: { zIndex: 810 },
    children: [
      _0x349d37.childType === a.UniverInstanceType["UNIVER_BOARD"] &&
        (0, m.jsx)("div", {
          className:
            "univer-pointer-events-none\x20univer-absolute\x20univer-left-4\x20univer-top-3\x20univer-z-30\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
          "data-embed-boards-fullscreen-exit": "true",
          title: _0x1b3613.t("embed-ui.fullscreen.exit"),
          children: (0, m.jsxs)(c.ToolbarButton, {
            noIcon: true,
            className:
              "univer-pointer-events-auto univer-gap-1.5 univer-text-sm univer-font-medium",
            onClick: _0x2de423,
            children: [
              (0, m.jsx)(u.ArrowLeftIcon, {}),
              (0, m.jsx)("span", {
                children: _0x1b3613.t("embed-ui.fullscreen.exit"),
              }),
            ],
          }),
        }),
      (0, m.jsxs)("div", {
        ref: _0x4bab68,
        className:
          "univer-relative\x20univer-z-[3]\x20univer-min-w-0\x20univer-bg-gray-0\x20empty:univer-hidden\x20dark:!univer-bg-gray-800",
        "data-embed-fullscreen-menu": "true",
        children: [
          _0x349d37.childType !== a.UniverInstanceType["UNIVER_BOARD"] &&
            (0, m.jsx)("div", {
              className:
                "univer-pointer-events-none univer-absolute univer-right-3 univer-top-0 univer-z-[4] univer-flex univer-h-9 univer-items-center",
              "data-embed-fullscreen-header": "true",
              children: (0, m.jsxs)(l.Button, {
                type: "button",
                size: "small",
                variant: "ghost",
                className:
                  "univer-pointer-events-auto univer-gap-1.5 hover:!univer-bg-primary-100 hover:!univer-text-primary-700 dark:hover:!univer-bg-primary-800 dark:hover:!univer-text-primary-100 [&_svg]:!univer-size-3.5",
                "data-embed-fullscreen-close": "true",
                onClick: _0x2de423,
                children: [
                  (0, m.jsx)(u.ShrinkIcon, {}),
                  (0, m.jsx)("span", {
                    children: _0x1b3613.t("embed-ui.fullscreen.exit"),
                  }),
                ],
              }),
            }),
          (0, m.jsx)("div", {
            ref: _0xf81fb3,
            className: "univer-min-w-0",
            "data-embed-fullscreen-menu-slot": "true",
            "data-embed-menu-slot": "true",
          }),
        ],
      }),
      (0, m.jsxs)("div", {
        className:
          "univer-flex univer-min-h-0 univer-min-w-0 univer-overflow-hidden",
        "data-embed-fullscreen-body": "true",
        children: [
          (0, m.jsx)("div", {
            ref: _0x128579,
            className:
              "univer-relative univer-z-[2] univer-min-h-0 univer-flex-none univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800 [&_[data-u-comp=base-left-panel]]:univer-h-full",
            "data-embed-fullscreen-sidebar-slot": "true",
            "data-embed-id": _0x349d37.embedId,
          }),
          (0, m.jsx)("div", {
            ref: _0x300f96,
            className:
              "univer-relative univer-min-h-0 univer-min-w-0 univer-flex-1 univer-overflow-hidden dark:!univer-bg-gray-900",
            "data-embed-fullscreen-viewport": "true",
            onContextMenuCapture: (_0x1c3946) => {
              _0x1c3946.preventDefault();
            },
          }),
          (0, m.jsx)("div", {
            ref: _0x1f2a88,
            className:
              "univer-relative univer-z-[2] univer-min-h-0 univer-flex-none univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800",
            "data-embed-fullscreen-right-sidebar-slot": "true",
            "data-embed-id": _0x349d37.embedId,
            children: _0x3268a1 && (0, m.jsx)(tr, { ..._0x3268a1 }),
          }),
        ],
      }),
      (0, m.jsx)("div", {
        ref: _0x29078c,
        className:
          "univer-relative\x20univer-z-[2]\x20univer-min-w-0\x20univer-bg-gray-0\x20empty:univer-hidden\x20dark:!univer-bg-gray-800",
        "data-embed-fullscreen-footer-slot": "true",
        "data-embed-footer-slot": "true",
      }),
      (0, m.jsx)("div", {
        ref: _0x40d05a,
        className:
          "univer-pointer-events-none\x20univer-fixed\x20univer-inset-0\x20univer-z-20\x20[&>*]:univer-pointer-events-auto",
        "data-embed-fullscreen-popup-root": "true",
        "data-embed-popup-root": "true",
        children: _0x3268a1 && (0, m.jsx)(er, { ..._0x3268a1 }),
      }),
    ],
  });
}
function er(_0x1f7284) {
  let {
    embedId: _0x12f75a,
    injector: _0x1bd4c5,
    sourceInjector: _0x5ab93b,
    popupContainer: _0x2f2b02,
  } = _0x1f7284;
  return (0, m.jsxs)(m.Fragment, {
    children: [
      (0, m.jsxs)(Kt, {
        injector: _0x1bd4c5,
        mountContainer: _0x2f2b02,
        embedId: _0x12f75a,
        children: [
          (0, m.jsx)(c.ContextMenu, {}),
          (0, m.jsx)(c.CanvasPopup, {}),
        ],
      }),
      (0, m.jsx)(Kt, {
        injector: _0x5ab93b,
        mountContainer: _0x2f2b02,
        embedId: _0x12f75a,
        children: (0, m.jsx)(c.CanvasPopup, {}),
      }),
    ],
  });
}
function tr(_0x41e20d) {
  let {
    embedId: _0x109633,
    injector: _0x37ff27,
    sourceInjector: _0x2e0b6e,
    popupContainer: _0xa6d321,
  } = _0x41e20d;
  return (0, m.jsxs)("aside", {
    className: "univer-z-[2] univer-flex univer-h-full",
    children: [
      (0, m.jsx)(Kt, {
        injector: _0x37ff27,
        mountContainer: _0xa6d321,
        embedId: _0x109633,
        children: (0, m.jsx)(c.Sidebar, {}),
      }),
      (0, m.jsx)(Kt, {
        injector: _0x2e0b6e,
        mountContainer: _0xa6d321,
        embedId: _0x109633,
        children: (0, m.jsx)(c.Sidebar, {}),
      }),
    ],
  });
}
function nr(_0x1ae945, _0x57e363, _0x1ffeac) {
  try {
    return _0x1ae945
      .get(t.EmbedModelService)
      .getDescriptor(_0x57e363, _0x1ffeac);
  } catch {
    return;
  }
}
const rr = {};
function ir(_0x1488fd) {
  let { stage: _0x3a75a3, interactionFlow: _0x29f38d } = _0x1488fd,
    _0x476164 = _0x29f38d === "doc-block",
    _0x230d9d = _0x3a75a3 === "stage1" && !_0x476164,
    _0x1e8966 = _0x3a75a3 === "stage2" || _0x476164;
  return {
    allowHostBodyDrag: _0x230d9d,
    disableLiveHostPointerEvents:
      !_0x476164 && (_0x3a75a3 === "inactive" || _0x3a75a3 === "stage1"),
    passThroughInteractionGate: _0x1e8966,
    runtimeOwnsInteraction: _0x1e8966,
  };
}
function ar(_0xfa4c01, _0x380a63) {
  var _0x43cb62;
  return (
    (_0xfa4c01 == null ? undefined : _0xfa4c01.hostType) ===
      a.UniverInstanceType["UNIVER_SHEET"] &&
    _0xfa4c01.childType === a.UniverInstanceType["UNIVER_SHEET"] &&
    !!((_0x43cb62 = _0xfa4c01.sourceMeta) != null && _0x43cb62.floating) &&
    _0x380a63 !== "stage2"
  );
}
function or(_0x11e525, _0x2d2b1d) {
  return ar(_0x11e525, _0x2d2b1d) ? "deferred" : "ready";
}
function sr(_0x5615fa) {
  var _0x31c542;
  return _0x5615fa.fullscreen ||
    (((_0x31c542 = _0x5615fa.active) == null
      ? undefined
      : _0x31c542.embedId) === _0x5615fa.embedId &&
      _0x5615fa.active["stage"] === "stage2") ||
    (!_0x5615fa.usesDomFloatingStage && _0x5615fa.renderScopeActive)
    ? "stage2"
    : "inactive";
}
function cr(_0x713c91, _0x1698cd) {
  return (_0x713c91 !== "docs-sticky-sheet" &&
    _0x713c91 !== "docs-sticky-base") ||
    _0x1698cd.shiftKey ||
    _0x1698cd.ctrlKey ||
    _0x1698cd.metaKey
    ? false
    : Math.abs(_0x1698cd.deltaY) > Math.abs(_0x1698cd.deltaX);
}
const lr = Symbol("univer.embed.forwarded-wheel-event"),
  ur = Symbol("univer.embed.host-vertical-wheel-attempted-event");
function dr(_0xbb4e81, _0x4c2300) {
  var _0x2fb21e;
  if (!_0xbb4e81.ctrlKey && !_0xbb4e81.metaKey) return false;
  let _0x187b6d = _0x4c2300.getChildContext();
  return !_0x187b6d ||
    ((_0x2fb21e = _0x4c2300.onHostWheel) == null
      ? undefined
      : _0x2fb21e.call(_0x4c2300, _0xbb4e81, _0x187b6d)) !== true
    ? false
    : (_0x4c2300.invalidate("host-scroll"), Hr(_0xbb4e81, true), true);
}
function fr(_0x2c3d64) {
  let _0x4de08d = { activeUntil: 0 },
    _0x2d2492 = (_0x20282b) => {
      var _0x4caac8;
      if (
        _r(_0x20282b) ||
        ((_0x20282b.ctrlKey || _0x20282b.metaKey) &&
          (_0x4de08d.activeUntil = 0),
        dr(_0x20282b, _0x2c3d64))
      )
        return;
      if (
        _0x2c3d64.routeHostGestures &&
        _0x2c3d64.hostWheelGestureService["isHostGesture"](_0x20282b)
      ) {
        var _0x317620;
        let _0x2d5b7c = _0x2c3d64.getChildContext();
        if (
          (_0x2d5b7c &&
            ((_0x317620 = _0x2c3d64.onHostWheel) == null
              ? undefined
              : _0x317620.call(_0x2c3d64, _0x20282b, _0x2d5b7c)) === true) ||
          Cr(_0x2c3d64.container, _0x20282b)
        ) {
          (_0x2c3d64.invalidate("host-scroll"), Hr(_0x20282b, true));
          return;
        }
      }
      if (_0x20282b.ctrlKey || _0x20282b.metaKey) return;
      let _0x5ae53a = _0x2c3d64.getStage();
      if (_0x5ae53a === "stage2") return;
      let _0x1c4e70 = _0x2c3d64.getChildContext(),
        _0x1f9214 = _0x1c4e70
          ? _0x2c3d64.passiveViewportRegistry["get"](
              _0x1c4e70.childType,
              _0x1c4e70.layout,
            )
          : undefined,
        _0x330075 = hr(_0x20282b, _0x2c3d64.viewScale),
        _0x53e445 = _0x1c4e70
          ? {
              ..._0x1c4e70,
              event: _0x330075,
              stage: _0x5ae53a,
              viewportScrollY: _0x2c3d64.syncHostVerticalScroll
                ? _0x2c3d64.hostScrollOffset["current"]
                : undefined,
            }
          : undefined;
      if (
        _0x1c4e70 &&
        Er(_0x1c4e70, _0x20282b, _0x2c3d64.syncHostVerticalScroll)
      ) {
        var _0x54c656;
        if (
          ((_0x54c656 = _0x2c3d64.onHostWheel) == null
            ? undefined
            : _0x54c656.call(_0x2c3d64, _0x20282b, _0x1c4e70)) === true ||
          Cr(_0x2c3d64.container, _0x20282b)
        ) {
          (_0x2c3d64.invalidate("host-scroll"), Hr(_0x20282b, true));
          return;
        }
      }
      let _0x4e7a7d = _0x53e445
          ? _0x2c3d64.passiveWheelHandlerRegistry["handleWheel"](_0x53e445)
          : false,
        _0x179adf = !_0x4e7a7d && Dr(_0x2c3d64.container, _0x20282b),
        _0x446ab5 = false,
        _0x22bbac = false;
      if (!_0x4e7a7d && _0x179adf) {
        var _0x5c4a1c;
        let _0x2ab0b1 = Or(_0x20282b);
        Ar(
          _0x2ab0b1,
          _0x1f9214 == null ||
            (_0x5c4a1c = _0x1f9214.getHorizontalScroll) == null
            ? undefined
            : _0x5c4a1c.call(_0x1f9214, _0x53e445),
        )
          ? (br(_0x20282b, _0x2c3d64.liveRoot), (_0x446ab5 = true))
          : kr(
              _0x2ab0b1,
              () => {
                var _0x1230c3;
                return (_0x22bbac =
                  ((_0x1230c3 = _0x2c3d64.resizeDocsSheetLikeRendererByWheel) ==
                  null
                    ? undefined
                    : _0x1230c3.call(_0x2c3d64, _0x20282b)) === true);
              },
              () =>
                (_0x446ab5 =
                  (_0x1f9214 == null
                    ? undefined
                    : _0x1f9214.handleWheel(_0x53e445)) === true),
            );
      } else
        _0x4e7a7d ||
          (_0x446ab5 =
            (_0x1f9214 == null
              ? undefined
              : _0x1f9214.handleWheel(_0x53e445)) === true);
      let _0x5ccff3 =
        _0x5ae53a === "inactive" &&
        !_0x4e7a7d &&
        !_0x446ab5 &&
        !_0x22bbac &&
        !_0x179adf &&
        !!_0x1f9214 &&
        !!_0x1c4e70 &&
        jr(_0x20282b);
      if (_0x5ccff3 && mr(_0x20282b, _0x4de08d)) return;
      if (
        _0x5ccff3 &&
        _0x1c4e70 &&
        ((_0x4caac8 = _0x2c3d64.onHostWheel) == null
          ? undefined
          : _0x4caac8.call(_0x2c3d64, _0x20282b, _0x1c4e70)) === true
      ) {
        (_0x2c3d64.invalidate("host-scroll"), Hr(_0x20282b, true));
        return;
      }
      let _0xf72af0 =
          _0x446ab5 || _0x22bbac ? false : br(_0x20282b, _0x2c3d64.liveRoot),
        _0x10ed33 =
          _0x446ab5 ||
          _0x22bbac ||
          (_0x179adf || _0xf72af0 ? false : xr(_0x20282b, _0x2c3d64.liveRoot));
      if (_0x4e7a7d || _0x446ab5 || _0x22bbac || _0xf72af0 || _0x10ed33) {
        (_0x5ae53a === "inactive" && pr(_0x4de08d), Hr(_0x20282b, false));
        return;
      }
      _0x5ae53a === "stage1" &&
        _0x1c4e70 &&
        jr(_0x20282b) &&
        Hr(_0x20282b, true);
    },
    _0x1aad27 = (_0x202f56) => {
      var _0x3e1000;
      if (
        _0x2c3d64.getStage() !== "stage2" ||
        _0x202f56.ctrlKey ||
        _0x202f56.metaKey
      )
        return;
      let _0x13764d = _0x2c3d64.getChildContext();
      if (_0x13764d) {
        if (Dr(_0x2c3d64.container, _0x202f56)) {
          var _0xd586a1;
          let _0x4adbd3 = _0x2c3d64.passiveViewportRegistry["get"](
              _0x13764d.childType,
              _0x13764d.layout,
            ),
            _0x361622 = hr(_0x202f56, _0x2c3d64.viewScale),
            _0x41ebd2 = {
              ..._0x13764d,
              event: _0x361622,
              stage: "stage2",
              viewportScrollY: _0x2c3d64.syncHostVerticalScroll
                ? _0x2c3d64.hostScrollOffset["current"]
                : undefined,
            },
            _0x1d195c = Or(_0x202f56),
            _0x329a9d;
          (Ar(
            _0x1d195c,
            _0x4adbd3 == null ||
              (_0xd586a1 = _0x4adbd3.getHorizontalScroll) == null
              ? undefined
              : _0xd586a1.call(_0x4adbd3, _0x41ebd2),
          )
            ? (br(_0x202f56, _0x2c3d64.liveRoot), (_0x329a9d = true))
            : (_0x329a9d = kr(
                _0x1d195c,
                () => {
                  var _0x1fb1dd;
                  return (
                    ((_0x1fb1dd =
                      _0x2c3d64.resizeDocsSheetLikeRendererByWheel) == null
                      ? undefined
                      : _0x1fb1dd.call(_0x2c3d64, _0x202f56)) === true
                  );
                },
                () =>
                  _0x2c3d64.passiveWheelHandlerRegistry["handleWheel"](
                    _0x41ebd2,
                  ) ||
                  (_0x4adbd3 == null
                    ? undefined
                    : _0x4adbd3.handleWheel(_0x41ebd2)) === true,
              )),
            (_0x329a9d || jr(_0x202f56)) && Hr(_0x202f56, true));
          return;
        }
        Er(_0x13764d, _0x202f56, _0x2c3d64.syncHostVerticalScroll) &&
          (yr(_0x202f56) ||
            (vr(_0x202f56),
            (((_0x3e1000 = _0x2c3d64.onHostWheel) == null
              ? undefined
              : _0x3e1000.call(_0x2c3d64, _0x202f56, _0x13764d)) === true ||
              Cr(_0x2c3d64.container, _0x202f56)) &&
              (_0x2c3d64.invalidate("host-scroll"), Hr(_0x202f56, true))));
      }
    },
    _0x4aa8ba = (_0x2ba062) => {
      _0x2c3d64.getStage() !== "stage2" ||
        _0x2ba062.ctrlKey ||
        _0x2ba062.metaKey ||
        _0x2ba062.defaultPrevented ||
        zr(_0x2c3d64.liveRoot, _0x2ba062) ||
        !_0x2c3d64.getChildContext() ||
        !jr(_0x2ba062) ||
        Hr(_0x2ba062, true);
    },
    _0x4cef13 = () => _0x2c3d64.invalidate("child-scroll");
  return (
    _0x2c3d64.gate["addEventListener"]("wheel", _0x2d2492, { passive: false }),
    _0x2c3d64.liveRoot["addEventListener"]("wheel", _0x2d2492, {
      capture: true,
      passive: false,
    }),
    _0x2c3d64.container["addEventListener"]("wheel", _0x1aad27, {
      capture: true,
      passive: false,
    }),
    _0x2c3d64.liveRoot["addEventListener"]("wheel", _0x1aad27, {
      capture: true,
      passive: false,
    }),
    _0x2c3d64.container["addEventListener"]("wheel", _0x4aa8ba, {
      passive: false,
    }),
    _0x2c3d64.liveRoot["addEventListener"]("scroll", _0x4cef13, true),
    (0, a.toDisposable)(() => {
      (_0x2c3d64.gate["removeEventListener"]("wheel", _0x2d2492),
        _0x2c3d64.liveRoot["removeEventListener"]("wheel", _0x2d2492, {
          capture: true,
        }),
        _0x2c3d64.container["removeEventListener"]("wheel", _0x1aad27, {
          capture: true,
        }),
        _0x2c3d64.liveRoot["removeEventListener"]("wheel", _0x1aad27, {
          capture: true,
        }),
        _0x2c3d64.container["removeEventListener"]("wheel", _0x4aa8ba),
        _0x2c3d64.liveRoot["removeEventListener"]("scroll", _0x4cef13, true));
    })
  );
}
function pr(_0x145bf5) {
  _0x145bf5.activeUntil = Date.now() + 180;
}
function mr(_0x161ed3, _0x471500) {
  return Date.now() >= _0x471500.activeUntil
    ? false
    : (pr(_0x471500), Hr(_0x161ed3, true), true);
}
function hr(_0x4b44ac, _0x1a8b00) {
  return typeof _0x1a8b00 != "number" ||
    !Number.isFinite(_0x1a8b00) ||
    _0x1a8b00 <= 0 ||
    _0x1a8b00 === 1
    ? _0x4b44ac
    : new WheelEvent(_0x4b44ac.type, {
        altKey: _0x4b44ac.altKey,
        bubbles: _0x4b44ac.bubbles,
        cancelable: _0x4b44ac.cancelable,
        clientX: _0x4b44ac.clientX,
        clientY: _0x4b44ac.clientY,
        ctrlKey: _0x4b44ac.ctrlKey,
        deltaMode: _0x4b44ac.deltaMode,
        deltaX: _0x4b44ac.deltaX / _0x1a8b00,
        deltaY: _0x4b44ac.deltaY / _0x1a8b00,
        deltaZ: _0x4b44ac.deltaZ / _0x1a8b00,
        metaKey: _0x4b44ac.metaKey,
        shiftKey: _0x4b44ac.shiftKey,
      });
}
function gr(_0x4be443, _0x3dc61e) {
  let _0x4b202b = new WheelEvent("wheel", {
    clientX: _0x4be443.clientX,
    clientY: _0x4be443.clientY,
    ctrlKey: _0x4be443.ctrlKey,
    deltaMode: _0x4be443.deltaMode,
    deltaX: _0x4be443.deltaX,
    deltaY: _0x4be443.deltaY,
    deltaZ: _0x4be443.deltaZ,
    metaKey: _0x4be443.metaKey,
    shiftKey: _0x4be443.shiftKey,
    ..._0x3dc61e,
  });
  return (
    Object.defineProperty(_0x4b202b, lr, {
      configurable: true,
      value: _0x4be443,
    }),
    _0x4b202b
  );
}
function _r(_0x409e26) {
  return !!_0x409e26 && _0x409e26[lr] instanceof WheelEvent;
}
function vr(_0x3a690c) {
  Object.defineProperty(_0x3a690c, ur, { configurable: true, value: true });
}
function yr(_0x28834b) {
  return !!_0x28834b[ur];
}
function br(_0x20777c, _0x586fb4) {
  let _0x3d2104 =
      Lr(_0x586fb4, _0x20777c.clientX, _0x20777c.clientY) ?? _0x586fb4,
    _0x74d210 = gr(_0x20777c, { bubbles: true, cancelable: true });
  return (_0x3d2104.dispatchEvent(_0x74d210), _0x74d210.defaultPrevented);
}
function xr(_0x283443, _0x1ae5b7) {
  let _0x245d25 = Rr(
    Lr(_0x1ae5b7, _0x283443.clientX, _0x283443.clientY) ?? _0x1ae5b7,
    _0x1ae5b7,
    _0x283443,
  );
  return _0x245d25 ? Sr(_0x283443, _0x245d25) : false;
}
function Sr(_0x4de4f7, _0x48c7f1) {
  let _0x22d46a = Or(_0x4de4f7),
    _0x1fce6a = _0x4de4f7.shiftKey ? 0 : _0x4de4f7.deltaY,
    _0x14b0a7 = _0x48c7f1.scrollLeft,
    _0x478948 = _0x48c7f1.scrollTop;
  return (
    _0x22d46a && (_0x48c7f1.scrollLeft += _0x22d46a),
    _0x1fce6a && (_0x48c7f1.scrollTop += _0x1fce6a),
    _0x48c7f1.scrollLeft !== _0x14b0a7 || _0x48c7f1.scrollTop !== _0x478948
  );
}
function Cr(_0x39fc8a, _0x5b83e8) {
  let _0x5ea737 = wr(_0x39fc8a);
  if (!_0x5ea737)
    return Pr(_0x39fc8a.ownerDocument["body"], _0x39fc8a, _0x5b83e8);
  if (!Ir(_0x5ea737)) return Pr(_0x5ea737, _0x39fc8a, _0x5b83e8);
  let _0x418d5f = _0x5ea737.scrollTop;
  return (
    (_0x5ea737.scrollTop += _0x5b83e8.deltaY),
    _0x5ea737.scrollTop !== _0x418d5f
  );
}
function wr(_0x4f0f44) {
  let _0x45ee86 = _0x4f0f44.parentElement;
  for (
    ;
    _0x45ee86 &&
    _0x45ee86 !== document.body &&
    _0x45ee86 !== document.documentElement;
  ) {
    if (_0x45ee86.scrollHeight > _0x45ee86.clientHeight && Tr(_0x45ee86))
      return _0x45ee86;
    _0x45ee86 = _0x45ee86.parentElement;
  }
  return null;
}
function Tr(_0x2ddebf) {
  let _0x22ba04 = window.getComputedStyle(_0x2ddebf);
  return (
    _0x22ba04.overflow === "auto" ||
    _0x22ba04.overflow === "scroll" ||
    _0x22ba04.overflow === "hidden" ||
    _0x22ba04.overflowY === "auto" ||
    _0x22ba04.overflowY === "scroll" ||
    _0x22ba04.overflowY === "hidden"
  );
}
function Er(_0x5ef82e, _0x381248, _0x5efa26) {
  var _0x115860;
  return _0x5efa26 ||
    ((_0x115860 = _0x5ef82e.descriptor["sourceMeta"]) == null
      ? undefined
      : _0x115860.verticalWheelMode) === "host"
    ? Nr(_0x381248)
    : cr(_0x5ef82e.layout, _0x381248);
}
function Dr(_0x2d6350, _0x1dcbe4) {
  return (
    !!_0x2d6350.closest('[data-embed-docs-custom-block-sheet-like="true"]') &&
    Mr(_0x1dcbe4)
  );
}
function Or(_0x3077e9) {
  return _0x3077e9.deltaX || (_0x3077e9.shiftKey ? _0x3077e9.deltaY : 0);
}
function kr(_0x41a206, _0x516bb4, _0x4ec9cf) {
  return _0x41a206 > 0
    ? _0x516bb4() || _0x4ec9cf()
    : _0x4ec9cf() || _0x516bb4();
}
function Ar(_0x2a4d86, _0x500498) {
  return _0x2a4d86 < 0 && (_0x500498 ?? 0) > 0;
}
function jr(_0x5d0b03) {
  return Mr(_0x5d0b03) || Nr(_0x5d0b03);
}
function Mr(_0x45c296) {
  if (_0x45c296.ctrlKey || _0x45c296.metaKey) return false;
  let _0x3d9ee7 = Or(_0x45c296),
    _0x2004e4 = _0x45c296.shiftKey ? 0 : _0x45c296.deltaY;
  return Math.abs(_0x3d9ee7) > Math.abs(_0x2004e4);
}
function Nr(_0x458e5d) {
  return _0x458e5d.shiftKey || _0x458e5d.ctrlKey || _0x458e5d.metaKey
    ? false
    : Math.abs(_0x458e5d.deltaY) > Math.abs(_0x458e5d.deltaX);
}
function Pr(_0x3d9cd1, _0x4b6f56, _0x5f51d0) {
  let _0xd33fce = Array.from(_0x3d9cd1.querySelectorAll("canvas")).find(
    (_0x220e82) => !_0x4b6f56.contains(_0x220e82),
  );
  return _0xd33fce
    ? (_0xd33fce.dispatchEvent(
        gr(_0x5f51d0, {
          bubbles: true,
          cancelable: true,
          ...Fr(_0xd33fce, _0x4b6f56, _0x5f51d0),
        }),
      ),
      true)
    : false;
}
function Fr(_0x2002d8, _0x477cca, _0x1d28ea) {
  if (!Br(_0x477cca, _0x1d28ea.clientX, _0x1d28ea.clientY))
    return { clientX: _0x1d28ea.clientX, clientY: _0x1d28ea.clientY };
  let _0x1080c5 = _0x2002d8.getBoundingClientRect(),
    _0xd2b4f3 = Math.min(
      24,
      Math.max(4, Math.min(_0x1080c5.width, _0x1080c5.height) / 8),
    ),
    _0x50dd32 = [
      {
        clientX: _0x1080c5.left + _0xd2b4f3,
        clientY: _0x1080c5.top + _0xd2b4f3,
      },
      {
        clientX: _0x1080c5.right - _0xd2b4f3,
        clientY: _0x1080c5.top + _0xd2b4f3,
      },
      {
        clientX: _0x1080c5.left + _0xd2b4f3,
        clientY: _0x1080c5.bottom - _0xd2b4f3,
      },
      {
        clientX: _0x1080c5.right - _0xd2b4f3,
        clientY: _0x1080c5.bottom - _0xd2b4f3,
      },
      {
        clientX: _0x1080c5.left + _0x1080c5.width / 2,
        clientY: _0x1080c5.top + _0x1080c5.height / 2,
      },
    ];
  return (
    _0x50dd32.find(
      (_0x21fd28) => !Br(_0x477cca, _0x21fd28.clientX, _0x21fd28.clientY),
    ) ?? _0x50dd32[0]
  );
}
function Ir(_0x54a915) {
  let _0x3260d1 = window.getComputedStyle(_0x54a915);
  return (
    _0x3260d1.overflow === "auto" ||
    _0x3260d1.overflow === "scroll" ||
    _0x3260d1.overflowY === "auto" ||
    _0x3260d1.overflowY === "scroll"
  );
}
function Lr(_0x32187d, _0x598415, _0x5b1970) {
  if (!Br(_0x32187d, _0x598415, _0x5b1970)) return null;
  let _0x1437e4 = _0x32187d.ownerDocument["elementsFromPoint"];
  if (typeof _0x1437e4 == "function") {
    let _0x499c68 = _0x1437e4
      .call(_0x32187d.ownerDocument, _0x598415, _0x5b1970)
      .find(
        (_0x4dbded) =>
          _0x4dbded instanceof HTMLElement && _0x32187d.contains(_0x4dbded),
      );
    if (_0x499c68) return _0x499c68;
  }
  let _0x2b4b37 = _0x32187d,
    _0x42c89b = (_0x539d1b) => {
      let _0x59ac38 = Array.from(_0x539d1b.children);
      for (let _0x5ed2f3 = _0x59ac38.length - 1; _0x5ed2f3 >= 0; _0x5ed2f3--) {
        let _0x2425d2 = _0x59ac38[_0x5ed2f3];
        if (!(
          !(_0x2425d2 instanceof HTMLElement) ||
          !Br(_0x2425d2, _0x598415, _0x5b1970)
        )) {
          ((_0x2b4b37 = _0x2425d2), _0x42c89b(_0x2425d2));
          return;
        }
      }
    };
  return (_0x42c89b(_0x32187d), _0x2b4b37);
}
function Rr(_0x53f7ca, _0x5a7003, _0x458f46) {
  let _0x578734 = Or(_0x458f46),
    _0x4e3cf7 = _0x458f46.shiftKey ? 0 : _0x458f46.deltaY,
    _0x3cc327 = _0x53f7ca;
  for (; _0x3cc327 && _0x5a7003.contains(_0x3cc327);) {
    if (Vr(_0x3cc327, _0x578734, _0x4e3cf7)) return _0x3cc327;
    _0x3cc327 = _0x3cc327.parentElement;
  }
  return Vr(_0x5a7003, _0x578734, _0x4e3cf7) ? _0x5a7003 : null;
}
function zr(_0x20d5f1, _0x5b0be7) {
  return Rr(
    Lr(_0x20d5f1, _0x5b0be7.clientX, _0x5b0be7.clientY) ?? _0x20d5f1,
    _0x20d5f1,
    _0x5b0be7,
  );
}
function Br(_0x5ea3fc, _0x2068d7, _0x84390c) {
  let _0x4042a9 = _0x5ea3fc.getBoundingClientRect();
  return (
    _0x2068d7 >= _0x4042a9.left &&
    _0x2068d7 <= _0x4042a9.right &&
    _0x84390c >= _0x4042a9.top &&
    _0x84390c <= _0x4042a9.bottom
  );
}
function Vr(_0x49f05f, _0x144df1, _0x3f6787) {
  let _0x1ea51f =
      _0x144df1 !== 0 &&
      _0x49f05f.scrollWidth > _0x49f05f.clientWidth &&
      (_0x144df1 < 0
        ? _0x49f05f.scrollLeft > 0
        : _0x49f05f.scrollLeft + _0x49f05f.clientWidth < _0x49f05f.scrollWidth),
    _0x30df03 =
      _0x3f6787 !== 0 &&
      _0x49f05f.scrollHeight > _0x49f05f.clientHeight &&
      (_0x3f6787 < 0
        ? _0x49f05f.scrollTop > 0
        : _0x49f05f.scrollTop + _0x49f05f.clientHeight <
          _0x49f05f.scrollHeight);
  return _0x1ea51f || _0x30df03;
}
function Hr(_0x422fea, _0x453d66) {
  (_0x422fea.preventDefault(),
    _0x422fea.stopPropagation(),
    _0x453d66 && _0x422fea.stopImmediatePropagation());
}
var Ur = class {
    constructor() {
      (V(this, "previewUpdated$", new f["Subject"]()),
        V(this, "_providers", new Map()),
        V(this, "_entriesByEmbedId", new Map()),
        V(this, "_entriesByKey", new Map()),
        V(this, "_queue", []),
        V(this, "_rendering", false),
        V(this, "_activeDrain", null));
    }
    registerProvider(_0x150a62) {
      return (
        this._providers["set"](_0x150a62.childType, _0x150a62),
        (0, a.toDisposable)(() => {
          this._providers["get"](_0x150a62.childType) === _0x150a62 &&
            this._providers["delete"](_0x150a62.childType);
        })
      );
    }
    getProvider(_0x45b140) {
      return this._providers["get"](_0x45b140);
    }
    getPreview(_0x50a69f) {
      return this._entriesByEmbedId["get"](_0x50a69f);
    }
    requestPreview(_0x14d4b6) {
      let _0x2ce49c = this.getCacheKey(_0x14d4b6),
        _0x1b7dd9 = this._entriesByKey["get"](_0x2ce49c);
      if (
        _0x1b7dd9 &&
        (_0x1b7dd9.status === "pending" || _0x1b7dd9.status === "ready")
      )
        return _0x1b7dd9;
      let _0x52b994 = this._entriesByEmbedId["get"](
          _0x14d4b6.descriptor["embedId"],
        ),
        _0x2ded5a = {
          embedId: _0x14d4b6.descriptor["embedId"],
          childUnitId: _0x14d4b6.childUnitId,
          childType: _0x14d4b6.childType,
          status: "pending",
          width: Math.max(1, Math.round(_0x14d4b6.width)),
          height: Math.max(1, Math.round(_0x14d4b6.height)),
          dpr: _0x14d4b6.dpr,
          viewState:
            _0x14d4b6.viewState ??
            (_0x52b994 == null ? undefined : _0x52b994.viewState),
          revision:
            ((_0x52b994 == null ? undefined : _0x52b994.revision) ?? 0) + 1,
          updatedAt: Date.now(),
        };
      return (
        this._entriesByKey["set"](_0x2ce49c, _0x2ded5a),
        this._entriesByEmbedId["set"](_0x2ded5a.embedId, _0x2ded5a),
        this._queue["push"](_0x14d4b6),
        this._drainQueue(),
        this.previewUpdated$["next"](_0x2ded5a),
        _0x2ded5a
      );
    }
    async collectViewState(_0x538b42) {
      let _0x48b155 = this._providers["get"](_0x538b42.childType);
      if (!_0x48b155) return;
      let _0x2a145d = await _0x48b155.collectViewState(_0x538b42);
      return (this.updateViewState(_0x538b42.embedId, _0x2a145d), _0x2a145d);
    }
    async restoreViewState(_0x55b1e1, _0x5c8504) {
      if (_0x5c8504 == null) return;
      let _0x3f2f74 = this._providers["get"](_0x55b1e1.childType);
      await (_0x3f2f74 == null
        ? undefined
        : _0x3f2f74.restoreViewState(_0x55b1e1, _0x5c8504));
    }
    updateViewState(_0x22f1b3, _0x2d2ea7) {
      let _0x47ae10 = this._entriesByEmbedId["get"](_0x22f1b3);
      if (!_0x47ae10) {
        let _0x20985c = {
          embedId: _0x22f1b3,
          childUnitId: "",
          childType: undefined,
          status: "stale",
          width: 0,
          height: 0,
          dpr: 1,
          viewState: _0x2d2ea7,
          revision: 0,
          updatedAt: Date.now(),
        };
        (this._entriesByEmbedId["set"](_0x22f1b3, _0x20985c),
          this.previewUpdated$["next"](_0x20985c));
        return;
      }
      ((_0x47ae10.viewState = _0x2d2ea7),
        (_0x47ae10.updatedAt = Date.now()),
        this.previewUpdated$["next"](_0x47ae10));
    }
    markStale(_0x30f63b, _0x4140d8) {
      let _0x106853 = this._entriesByEmbedId["get"](_0x30f63b);
      _0x106853 &&
        ((_0x106853.status = "stale"),
        (_0x106853.error = _0x4140d8),
        (_0x106853.updatedAt = Date.now()),
        this.previewUpdated$["next"](_0x106853));
    }
    invalidate(_0xa087c6) {
      let _0x21e6f2 = this._entriesByEmbedId["get"](_0xa087c6);
      (this._entriesByEmbedId["delete"](_0xa087c6),
        _0x21e6f2 &&
          Array.from(this._entriesByKey["entries"]()).forEach(
            ([_0x4f7bce, _0x62c47]) => {
              _0x62c47.embedId === _0xa087c6 &&
                this._entriesByKey["delete"](_0x4f7bce);
            },
          ));
    }
    getCacheKey(_0x2293d0) {
      return [
        _0x2293d0.descriptor["embedId"],
        _0x2293d0.childUnitId,
        _0x2293d0.childType,
        Math.max(1, Math.round(_0x2293d0.width)),
        Math.max(1, Math.round(_0x2293d0.height)),
        _0x2293d0.dpr,
      ].join("::");
    }
    async flushForTests() {
      for (; this._queue["length"] > 0 || this._rendering || this._activeDrain;)
        (await (this._activeDrain ?? Promise.resolve()),
          await Promise.resolve());
    }
    dispose() {
      (this._providers["clear"](),
        this._entriesByEmbedId["clear"](),
        this._entriesByKey["clear"](),
        (this._queue["length"] = 0),
        this.previewUpdated$["complete"]());
    }
    _drainQueue() {
      this._rendering ||
        this._activeDrain ||
        (this._activeDrain = this._runQueue().finally(() => {
          this._activeDrain = null;
        }));
    }
    async _runQueue() {
      if (!this._rendering) {
        this._rendering = true;
        try {
          for (; this._queue["length"] > 0;)
            await this._renderOne(this._queue["shift"]());
        } finally {
          this._rendering = false;
        }
      }
    }
    async _renderOne(_0x56e7f9) {
      let _0x1049e0 = this.getCacheKey(_0x56e7f9),
        _0x256861 = this._entriesByKey["get"](_0x1049e0);
      if (!_0x256861 || _0x256861.status !== "pending") return;
      let _0xb51419 = this._providers["get"](_0x56e7f9.childType),
        _0x7a7668 = this._findPreviousReadyEntry(_0x256861.embedId, _0x256861);
      if (!_0xb51419) {
        let _0x7c513e = _0x56e7f9.context ? At(_0x56e7f9.context) : undefined;
        if (_0x7c513e) {
          ((_0x256861.image = _0x7c513e),
            (_0x256861.status = "ready"),
            (_0x256861.updatedAt = Date.now()),
            this._entriesByEmbedId["set"](_0x256861.embedId, _0x256861),
            this.previewUpdated$["next"](_0x256861));
          return;
        }
        this._setRenderFailure(
          _0x256861,
          _0x7a7668,
          Error(
            "Missing\x20embed\x20float\x20preview\x20provider:\x20" +
              _0x56e7f9.childType,
          ),
        );
        return;
      }
      try {
        let _0x3617d1 = await _0xb51419.renderPreview({
          ..._0x56e7f9,
          width: _0x256861.width,
          height: _0x256861.height,
          viewState: _0x256861.viewState,
        });
        if (
          this._entriesByKey["get"](_0x1049e0) !== _0x256861 ||
          _0x256861.status !== "pending"
        )
          return;
        if (!_0x3617d1) {
          this._setRenderFailure(
            _0x256861,
            _0x7a7668,
            Error("Empty embed float preview result."),
          );
          return;
        }
        ((_0x256861.image = _0x3617d1),
          (_0x256861.status = "ready"),
          (_0x256861.updatedAt = Date.now()),
          this._entriesByEmbedId["set"](_0x256861.embedId, _0x256861),
          this.previewUpdated$["next"](_0x256861));
      } catch (_0x2aabcf) {
        this._setRenderFailure(_0x256861, _0x7a7668, _0x2aabcf);
      }
    }
    _findPreviousReadyEntry(_0x26edfd, _0x16cd73) {
      let _0x2ddd16 = this._entriesByEmbedId["get"](_0x26edfd);
      return _0x2ddd16 && _0x2ddd16 !== _0x16cd73 && _0x2ddd16.image
        ? _0x2ddd16
        : Array.from(this._entriesByKey["values"]())
            .reverse()
            .find(
              (_0x2884d0) =>
                _0x2884d0.embedId === _0x26edfd &&
                _0x2884d0 !== _0x16cd73 &&
                _0x2884d0.image,
            );
    }
    _setRenderFailure(_0x345dab, _0x3d130e, _0x3ec4c6) {
      ((_0x345dab.status =
        _0x3d130e != null && _0x3d130e.image ? "stale" : "error"),
        (_0x345dab.image = _0x3d130e == null ? undefined : _0x3d130e.image),
        (_0x345dab.viewState =
          _0x345dab.viewState ??
          (_0x3d130e == null ? undefined : _0x3d130e.viewState)),
        (_0x345dab.error = _0x3ec4c6),
        (_0x345dab.updatedAt = Date.now()),
        this._entriesByEmbedId["set"](_0x345dab.embedId, _0x345dab),
        this.previewUpdated$["next"](_0x345dab));
    }
  },
  Wr = class {
    constructor() {
      (V(this, "_registrations", new Map()),
        V(this, "_geometryInvalidated$", new f["Subject"]()),
        V(
          this,
          "geometryInvalidated$",
          this._geometryInvalidated$["asObservable"](),
        ));
    }
    register(_0x2e9dfe) {
      return (
        this._registrations["set"](_0x2e9dfe.embedId, _0x2e9dfe),
        this.invalidate({ embedId: _0x2e9dfe.embedId, reason: "manual" }),
        (0, a.toDisposable)(() => {
          this._registrations["get"](_0x2e9dfe.embedId) === _0x2e9dfe &&
            (this._registrations["delete"](_0x2e9dfe.embedId),
            this.invalidate({ embedId: _0x2e9dfe.embedId, reason: "manual" }));
        })
      );
    }
    getRegistration(_0x491e92) {
      return this._registrations["get"](_0x491e92);
    }
    getRegistrationByChildUnitId(_0x202748) {
      return Array.from(this._registrations["values"]()).find(
        (_0x3c2e37) => _0x3c2e37.childUnitId === _0x202748,
      );
    }
    invalidate(_0x15f315) {
      this._geometryInvalidated$["next"](_0x15f315);
    }
  };
let Gr = class {
  constructor(_0xe600b0, _0x2b826f, _0xca4caa, _0x2ea6f9) {
    ((this._modelService = _0xe600b0),
      (this._materializeService = _0x2b826f),
      (this._hostAdapterRegistry = _0xca4caa),
      (this._anchorModelService = _0x2ea6f9));
  }
  async materializeDescriptor(_0x5353ad) {
    return this._materializeService["materializeDescriptor"](_0x5353ad);
  }
  async restoreEmbed(_0x31ff78) {
    let _0x321d81 = _0x31ff78.descriptor,
      _0x2b3eed =
        _0x31ff78.hostAnchorRecord ??
        this._hostAdapterRegistry["restoreAnchor"]({
          embedId: _0x321d81.embedId,
          hostUnitId: _0x321d81.hostUnitId,
          hostType: _0x321d81.hostType,
          entry: _0x321d81.entry,
          hostAnchorId: _0x321d81.hostAnchorId,
          hostContext: _0x31ff78.hostContext,
          descriptor: _0x321d81,
        });
    return (
      this._modelService["addDescriptor"](_0x321d81.hostUnitId, _0x321d81),
      this._anchorModelService["setAnchor"](_0x2b3eed),
      this._modelService["getDescriptor"](
        _0x321d81.hostUnitId,
        _0x321d81.embedId,
      )
    );
  }
};
Gr = Z(
  [
    X(0, (0, a.Inject)(t.EmbedModelService)),
    X(1, (0, a.Inject)(t.EmbedReferencedUnitMaterializeService)),
    X(2, (0, a.Inject)(t.EmbedHostAdapterRegistryService)),
    X(3, (0, a.Inject)(t.EmbedHostAnchorModelService)),
  ],
  Gr,
);
function Kr(_0x4189e1) {
  var _0x229f0b;
  if (!_0x4189e1) return;
  let _0x1b2d3e =
      ((_0x229f0b = _0x4189e1.closest(
        "[data-embed-interaction-boundary-owner]",
      )) == null
        ? undefined
        : _0x229f0b.getAttribute("data-embed-interaction-boundary-owner")) ??
      undefined,
    _0x42c23c = qr(_0x4189e1, _0x1b2d3e),
    _0x2e45c3 =
      (_0x42c23c == null
        ? undefined
        : _0x42c23c.getAttribute("data-embed-id")) ?? _0x1b2d3e;
  if (_0x2e45c3)
    return {
      embedId: _0x2e45c3,
      hostUnitId:
        (_0x42c23c == null
          ? undefined
          : _0x42c23c.getAttribute("data-embed-host-unit-id")) ?? undefined,
      childUnitId:
        (_0x42c23c == null
          ? undefined
          : _0x42c23c.getAttribute(c.EMBED_CHILD_UNIT_ID_ATTRIBUTE)) ??
        undefined,
      childType: Yr(_0x42c23c),
    };
}
function qr(_0x406bfd, _0x3d8a4e) {
  let _0x5dd562 =
    _0x406bfd == null
      ? undefined
      : _0x406bfd.closest("[data-embed-float-dom=\x22true\x22]");
  if (
    _0x5dd562 &&
    (!_0x3d8a4e || _0x5dd562.getAttribute("data-embed-id") === _0x3d8a4e)
  )
    return _0x5dd562;
  let _0xf59760 =
    (_0x406bfd == null ? undefined : _0x406bfd.ownerDocument) ??
    (typeof document > "u" ? undefined : document);
  return !_0xf59760 || !_0x3d8a4e
    ? (_0x5dd562 ?? undefined)
    : (_0xf59760.querySelector(
        '[data-embed-float-dom="true"][data-embed-id="' +
          Jr(_0x3d8a4e) +
          "\x22]",
      ) ?? undefined);
}
function Jr(_0x4fbf57) {
  return _0x4fbf57.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function Yr(_0x130a45) {
  let _0x4e4240 =
    _0x130a45 == null
      ? undefined
      : _0x130a45.getAttribute("data-embed-child-type");
  if (_0x4e4240 != null && _0x4e4240 !== "") return Number(_0x4e4240);
}
var Xr = class {
  constructor() {
    (V(this, "_sessions", new WeakMap()),
      V(this, "_hostGestureEvents", new WeakSet()));
  }
  register(_0x4420f4, _0x1c497e) {
    let _0x986280 = this._sessions["get"](_0x4420f4);
    if (!_0x986280) {
      let _0x20a3fc = _0x4420f4.ownerDocument["defaultView"];
      if (!_0x20a3fc) return (0, a.toDisposable)(() => {});
      let _0x50a9ba = (_0x1ac3c6) => this._observeWheel(_0x4420f4, _0x1ac3c6);
      (_0x20a3fc.addEventListener("wheel", _0x50a9ba, {
        capture: true,
        passive: false,
      }),
        (_0x986280 = {
          activeUntil: 0,
          containers: new Map(),
          dispose: () =>
            _0x20a3fc.removeEventListener("wheel", _0x50a9ba, {
              capture: true,
            }),
          refCount: 0,
        }),
        this._sessions["set"](_0x4420f4, _0x986280));
    }
    let _0x4a6e8e = _0x986280;
    return (
      (_0x4a6e8e.refCount += 1),
      _0x4a6e8e.containers["set"](
        _0x1c497e,
        (_0x4a6e8e.containers["get"](_0x1c497e) ?? 0) + 1,
      ),
      (0, a.toDisposable)(() => {
        let _0x5ea3fe = _0x4a6e8e.containers["get"](_0x1c497e) ?? 0;
        (_0x5ea3fe <= 1
          ? _0x4a6e8e.containers["delete"](_0x1c497e)
          : _0x4a6e8e.containers["set"](_0x1c497e, _0x5ea3fe - 1),
          --_0x4a6e8e.refCount,
          !(
            _0x4a6e8e.refCount > 0 ||
            this._sessions["get"](_0x4420f4) !== _0x4a6e8e
          ) && (_0x4a6e8e.dispose(), this._sessions["delete"](_0x4420f4)));
      })
    );
  }
  isHostGesture(_0x289cc3) {
    return this._hostGestureEvents["has"](_0x289cc3);
  }
  _observeWheel(_0x21811a, _0x54fa50) {
    var _0x3d1151;
    let _0x47e91f = _0x21811a.ownerDocument["defaultView"];
    if (!_0x47e91f) return;
    let _0x4da334 = Qr(_0x54fa50, _0x47e91f);
    if (!_0x4da334 || !_0x21811a.contains(_0x4da334)) return;
    let _0x3605a8 = this._sessions["get"](_0x21811a);
    if (!_0x3605a8) return;
    let _0x29cb0f = Date.now(),
      _0x5b82e7 = qr(_0x4da334),
      _0x1a011b =
        _0x5b82e7 ??
        Zr(
          _0x3605a8.containers["keys"](),
          _0x54fa50.clientX,
          _0x54fa50.clientY,
        );
    if (!_0x1a011b || !_0x21811a.contains(_0x1a011b)) {
      _0x3605a8.activeUntil = _0x29cb0f + 500;
      return;
    }
    let _0x27c5dc = _0x1a011b.getAttribute("data-embed-float-stage");
    if (_0x27c5dc === "inactive" && !_0x5b82e7) {
      _0x3605a8.activeUntil = _0x29cb0f + 500;
      return;
    }
    if (
      _0x27c5dc === "inactive" &&
      ((_0x3d1151 = Kr(_0x1a011b)) == null
        ? undefined
        : _0x3d1151.childType) === a.UniverInstanceType["UNIVER_SLIDE"]
    ) {
      ((_0x3605a8.activeUntil = _0x29cb0f + 500),
        this._hostGestureEvents["add"](_0x54fa50));
      return;
    }
    if (_0x29cb0f >= _0x3605a8.activeUntil) {
      _0x5b82e7 ||
        (_0x54fa50.preventDefault(), _0x54fa50.stopImmediatePropagation());
      return;
    }
    ((_0x3605a8.activeUntil = _0x29cb0f + 500),
      this._hostGestureEvents["add"](_0x54fa50));
  }
};
function Zr(_0x58d1dc, _0x4ab1d2, _0x128cce) {
  for (let _0x4aa91a of _0x58d1dc) {
    let _0x2cffa9 = _0x4aa91a.getBoundingClientRect();
    if (
      _0x2cffa9.width > 0 &&
      _0x2cffa9.height > 0 &&
      _0x4ab1d2 >= _0x2cffa9.left &&
      _0x4ab1d2 <= _0x2cffa9.right &&
      _0x128cce >= _0x2cffa9.top &&
      _0x128cce <= _0x2cffa9.bottom
    )
      return _0x4aa91a;
  }
}
function Qr(_0x91bd6, _0x151e27) {
  let _0xcc2e14 = _0x91bd6.target;
  return _0xcc2e14 instanceof _0x151e27.HTMLElement
    ? _0xcc2e14
    : _0xcc2e14 instanceof _0x151e27.Element ||
        _0xcc2e14 instanceof _0x151e27.Node
      ? _0xcc2e14.parentElement
      : null;
}
function $r(_0x2edbd6, _0x4c658d, _0x5763c1) {
  if (!_0x2edbd6.ctrlKey && !_0x2edbd6.metaKey) return false;
  switch (_0x4c658d.descriptor["hostType"]) {
    case a.UniverInstanceType["UNIVER_SHEET"]:
      return ei(_0x2edbd6, _0x4c658d, _0x5763c1);
    case a.UniverInstanceType["UNIVER_DOC"]:
      return ti(_0x2edbd6, _0x4c658d, _0x5763c1);
    case a.UniverInstanceType["UNIVER_SLIDE"]:
      return ni(_0x2edbd6, _0x4c658d, _0x5763c1);
    default:
      return false;
  }
}
function ei(_0x405937, _0x15dd8c, _0x1ccef0) {
  let _0x37a405 = _0x1ccef0.univerInstanceService["getUnit"](
      _0x15dd8c.hostUnitId,
      a.UniverInstanceType["UNIVER_SHEET"],
    ),
    _0x1d0ada = _0x37a405 == null ? undefined : _0x37a405.getActiveSheet();
  return !_0x37a405 || !_0x1d0ada
    ? false
    : (_0x1ccef0.commandService["executeCommand"](s.SetZoomRatioCommand["id"], {
        unitId: _0x15dd8c.hostUnitId,
        subUnitId: _0x1d0ada.getSheetId(),
        zoomRatio: ri(_0x1d0ada.getZoomRatio(), _0x405937),
      }),
      true);
}
function ti(_0x53001f, _0x4c586a, _0x248396) {
  var _0x44814f;
  let _0x1b5cf0 = _0x248396.univerInstanceService["getUnit"](
    _0x4c586a.hostUnitId,
    a.UniverInstanceType["UNIVER_DOC"],
  );
  return _0x1b5cf0
    ? (_0x248396.commandService["executeCommand"](
        o.SetDocZoomRatioCommand["id"],
        {
          documentId: _0x4c586a.hostUnitId,
          zoomRatio: ri(
            ((_0x44814f = _0x1b5cf0.getSettings()) == null
              ? undefined
              : _0x44814f.zoomRatio) ?? 1,
            _0x53001f,
          ),
        },
      ),
      true)
    : false;
}
function ni(_0x2bb3d1, _0x24faec, _0x5380aa) {
  let _0x302d76 = _0x5380aa.univerInstanceService["getUnit"](
    _0x24faec.hostUnitId,
    a.UniverInstanceType["UNIVER_SLIDE"],
  );
  return _0x302d76
    ? (_0x5380aa.commandService["executeCommand"](
        g.SetSlideZoomRatioOperation["id"],
        {
          unitId: _0x24faec.hostUnitId,
          zoomRatio: ri(_0x302d76.getZoomRatio(), _0x2bb3d1),
        },
      ),
      true)
    : false;
}
function ri(_0x174d69, _0x40f557) {
  return (0, p.getNextWheelZoomRatio)(_0x174d69, {
    deltaMode: _0x40f557.deltaMode,
    deltaX: _0x40f557.deltaX,
    deltaY: _0x40f557.deltaY,
    wheelDelta: _0x40f557.wheelDelta,
  });
}
var ii = class {
    constructor() {
      V(this, "_providers", new Map());
    }
    register(_0x18ba45) {
      return (
        this._providers["set"](_0x18ba45.childType, _0x18ba45),
        (0, a.toDisposable)(() => {
          this._providers["get"](_0x18ba45.childType) === _0x18ba45 &&
            this._providers["delete"](_0x18ba45.childType);
        })
      );
    }
    get(_0x1d2856, _0xd2c2e3) {
      var _0x53cee5;
      let _0x9c6689 = this._providers["get"](_0x1d2856);
      if (
        _0x9c6689 &&
        !(
          _0xd2c2e3 &&
          (_0x53cee5 = _0x9c6689.supportedLayouts) != null &&
          _0x53cee5.length &&
          !_0x9c6689.supportedLayouts["includes"](_0xd2c2e3)
        )
      )
        return _0x9c6689;
    }
    list() {
      return [...this._providers["values"]()];
    }
  },
  ai = class {
    constructor() {
      V(this, "_handlers", []);
    }
    register(_0x18cec0) {
      return (
        this._handlers["push"](_0x18cec0),
        this._sortHandlers(),
        (0, a.toDisposable)(() => {
          let _0x1616f4 = this._handlers["indexOf"](_0x18cec0);
          _0x1616f4 >= 0 && this._handlers["splice"](_0x1616f4, 1);
        })
      );
    }
    handleWheel(_0x4f6531) {
      for (let _0x4abf75 of this._handlers) {
        var _0x483610;
        if (
          _0x4abf75.childType === _0x4f6531.childType &&
          !(
            _0x4f6531.layout &&
            (_0x483610 = _0x4abf75.supportedLayouts) != null &&
            _0x483610.length &&
            !_0x4abf75.supportedLayouts["includes"](_0x4f6531.layout)
          ) &&
          _0x4abf75.handleWheel(_0x4f6531) === true
        )
          return true;
      }
      return false;
    }
    list() {
      return [...this._handlers];
    }
    _sortHandlers() {
      this._handlers["sort"](
        (_0x1b0f48, _0x5bff8b) =>
          (_0x5bff8b.order ?? 0) - (_0x1b0f48.order ?? 0),
      );
    }
  };
function oi(_0x5b041c) {
  if (!_0x5b041c || typeof _0x5b041c != "object") return;
  let _0x2802cf = _0x5b041c;
  return _0x2802cf.version === 1 && _0x2802cf.embedId && _0x2802cf.hostAnchorId
    ? _0x2802cf
    : undefined;
}
const si = new Map();
function ci(_0xc3612d) {
  var _0x501325, _0x3bb4db;
  let {
    container: _0x416c2f,
    content: _0x1da6ee,
    offset: _0x4c83d9,
  } = _0xc3612d;
  if (!_0xc3612d.enabled)
    return (
      (_0x4c83d9.current = 0),
      _0x1da6ee.style["removeProperty"]("transform"),
      _0x1da6ee.style["removeProperty"]("clip-path"),
      (0, a.toDisposable)(() => {})
    );
  let _0x4f373e = _0x416c2f.ownerDocument["defaultView"] ?? window,
    _0x159228 = Ri(_0xc3612d.viewScale),
    _0x624715 = false,
    _0x126bf2,
    _0x57f130 = () => {
      var _0x51b0d1, _0x5be31e;
      if (_0x624715) return;
      let _0x260077 = _0xc3612d.getChildContext();
      if (!_0x260077) {
        ((_0x4c83d9.current = 0),
          _0x1da6ee.style["removeProperty"]("transform"),
          _0x1da6ee.style["removeProperty"]("clip-path"));
        return;
      }
      let _0xb8dc81 = _0xc3612d.getProvider(_0x260077);
      if (!_0xb8dc81) return;
      let _0x435393 = wr(_0x416c2f),
        _0x157967 = (_0x435393 == null
          ? undefined
          : _0x435393.getBoundingClientRect()) ?? {
          height: _0x4f373e.innerHeight,
          top: 0,
          width: _0x4f373e.innerWidth,
        },
        _0x38d91e = _0x416c2f.getBoundingClientRect(),
        _0x347bca =
          (_0x51b0d1 = li(_0x416c2f)) == null
            ? undefined
            : _0x51b0d1.getBoundingClientRect().height,
        _0x2d6b5f = Li(
          _0xc3612d.collapseViewportHeight,
          _0x347bca == null ? undefined : _0x347bca / _0x159228,
          _0x157967.height / _0x159228,
        ),
        _0x36d41e =
          _0xc3612d.collapseWithoutChildScroll &&
          Math.round(_0x38d91e.height / _0x159228) >= Math.round(_0x2d6b5f),
        _0x2992cd = Li(_0xc3612d.contentHeight, _0x38d91e.height / _0x159228),
        _0x5a3839 = Math.min(
          _0x2992cd,
          Li(
            _0xc3612d.viewportHeight,
            _0x1da6ee.getBoundingClientRect().height / _0x159228,
            _0x157967.height / _0x159228,
          ),
        ),
        _0x2f39d2 = fi({
          collapseWithoutChildScroll: _0x36d41e,
          contentHeight: _0x2992cd,
          hostOffset: Math.max(0, (_0x157967.top - _0x38d91e.top) / _0x159228),
          stickyHeaderHeight: Math.max(
            24,
            ((_0x5be31e = _0xb8dc81.getStickyHeaderHeight) == null
              ? undefined
              : _0x5be31e.call(_0xb8dc81, _0x260077)) ?? 0,
          ),
          viewportHeight: _0x5a3839,
        });
      if (
        ((_0x1da6ee.style["transform"] =
          _0x2f39d2.visualOffset === 0
            ? ""
            : "translateY(" + _0x2f39d2.visualOffset * _0x159228 + "px)"),
        (_0x1da6ee.style["clipPath"] =
          _0x2f39d2.clipBottom === 0
            ? ""
            : "inset(0\x200\x20" + _0x2f39d2.clipBottom * _0x159228 + "px 0)"),
        !ui(_0xc3612d.owner["current"], "host") ||
          _0xc3612d.syncingHostFromChild["current"])
      )
        return;
      let _0x407fbf = _0x2f39d2.childOffset - _0x4c83d9.current;
      if (Math.abs(_0x407fbf) < 0.5) return;
      ((_0x4c83d9.current = _0x2f39d2.childOffset), _0xc3612d.invalidate());
      let _0x11d8f2 = new WheelEvent("wheel", {
        cancelable: false,
        clientX:
          _0x38d91e.left + Math.min(_0x38d91e.width, _0x157967.width) / 2,
        clientY: _0x157967.top + (_0x5a3839 * _0x159228) / 2,
        deltaY: _0x407fbf,
      });
      _0xc3612d.syncingChildFromHost["current"] = true;
      try {
        _0xb8dc81.handleWheel({
          ..._0x260077,
          event: _0x11d8f2,
          source: "host-scroll-sync",
          stage: _0xc3612d.getStage(),
          viewportScrollY: _0x2f39d2.childOffset,
        });
      } finally {
        _0xc3612d.syncingChildFromHost["current"] = false;
      }
    },
    _0x21110f = () => {
      (_0x57f130(),
        _0x624715 || (_0x126bf2 = _0x4f373e.requestAnimationFrame(_0x21110f)));
    },
    _0x428cd6 = () => {
      globalThis.queueMicrotask(() => {
        _0x624715 || _0x57f130();
      });
    },
    _0x1ca709 = _0xc3612d.getChildContext(),
    _0x46b8d0 = _0x1ca709 ? _0xc3612d.getProvider(_0x1ca709) : undefined,
    _0x1e06bc =
      _0x1ca709 &&
      (_0x46b8d0 == null ||
      (_0x501325 = _0x46b8d0.subscribeVerticalScroll) == null
        ? undefined
        : _0x501325.call(_0x46b8d0, _0x1ca709, (_0x43b145) => {
            var _0x58d928;
            if (
              _0xc3612d.syncingChildFromHost["current"] ||
              !ui(_0xc3612d.owner["current"], "child")
            )
              return;
            let _0x5485fe = Math.max(
                0,
                Li(_0xc3612d.contentHeight) - Li(_0xc3612d.viewportHeight),
              ),
              _0x4de418 = mi(_0x43b145, 0, _0x5485fe),
              _0x1d11aa = _0x416c2f.getBoundingClientRect(),
              _0x62cd9e =
                ((_0x58d928 = wr(_0x416c2f)) == null
                  ? undefined
                  : _0x58d928.getBoundingClientRect().top) ?? 0,
              _0x1c9f7a = di(
                _0x4de418,
                mi((_0x62cd9e - _0x1d11aa.top) / _0x159228, 0, _0x5485fe),
                Math.max(0, (_0x1d11aa.top - _0x62cd9e) / _0x159228),
              );
            if (Math.abs(_0x1c9f7a) < 0.5) return;
            let _0x2d0491 = new WheelEvent("wheel", {
                cancelable: false,
                clientX: _0x1d11aa.left + _0x1d11aa.width / 2,
                clientY:
                  _0x1d11aa.top +
                  Math.min(
                    _0x1d11aa.height,
                    (_0xc3612d.viewportHeight ?? _0x1d11aa.height / _0x159228) *
                      _0x159228,
                  ) /
                    2,
                deltaY: _0x1c9f7a * _0x159228,
              }),
              _0x5acea5 = _0x4c83d9.current,
              _0x33a496 = _0x1da6ee.style["transform"],
              _0x520576 = _0x1da6ee.style["clipPath"];
            ((_0x4c83d9.current = _0x4de418),
              (_0x1da6ee.style["transform"] =
                _0x4de418 === 0
                  ? ""
                  : "translateY(" + _0x4de418 * _0x159228 + "px)"),
              (_0xc3612d.syncingHostFromChild["current"] = true));
            let _0x510830 = false;
            try {
              var _0x38b386;
              _0x510830 =
                ((_0x38b386 = _0xc3612d.onHostWheel) == null
                  ? undefined
                  : _0x38b386.call(_0xc3612d, _0x2d0491, _0x1ca709)) === true ||
                Cr(_0x416c2f, _0x2d0491);
            } finally {
              _0xc3612d.syncingHostFromChild["current"] = false;
            }
            if (!_0x510830) {
              ((_0x4c83d9.current = _0x5acea5),
                (_0x1da6ee.style["transform"] = _0x33a496),
                (_0x1da6ee.style["clipPath"] = _0x520576));
              return;
            }
            _0xc3612d.invalidate();
          }));
  _0x126bf2 = _0x4f373e.requestAnimationFrame(_0x21110f);
  let _0x3901fd =
    (_0x3bb4db = _0xc3612d.hostLayout$) == null
      ? undefined
      : _0x3bb4db.subscribe(_0x428cd6);
  (_0x4f373e.addEventListener("scroll", _0x57f130, true),
    _0x4f373e.addEventListener("resize", _0x57f130));
  let _0xfb874f =
    typeof ResizeObserver > "u" ? undefined : new ResizeObserver(_0x57f130);
  return (
    _0xfb874f == null || _0xfb874f.observe(_0x416c2f),
    (0, a.toDisposable)(() => {
      ((_0x624715 = true),
        _0x126bf2 != null && _0x4f373e.cancelAnimationFrame(_0x126bf2),
        _0x1e06bc == null || _0x1e06bc.dispose(),
        _0x3901fd == null || _0x3901fd.unsubscribe(),
        _0xfb874f == null || _0xfb874f.disconnect(),
        _0x4f373e.removeEventListener("scroll", _0x57f130, true),
        _0x4f373e.removeEventListener("resize", _0x57f130),
        _0x1da6ee.style["removeProperty"]("transform"),
        _0x1da6ee.style["removeProperty"]("clip-path"));
    })
  );
}
function li(_0x835168) {
  let _0x163414 = _0x835168.parentElement;
  for (
    ;
    _0x163414 &&
    _0x163414 !== document.body &&
    _0x163414 !== document.documentElement;
  ) {
    if (Tr(_0x163414)) return _0x163414;
    _0x163414 = _0x163414.parentElement;
  }
  return null;
}
function ui(_0x4da25e, _0x285e48) {
  return _0x4da25e == null || _0x4da25e === _0x285e48;
}
function di(_0x28e765, _0x564f62, _0x34db61) {
  let _0x693409 = _0x28e765 - _0x564f62;
  return _0x693409 + (_0x693409 > 0 ? Math.max(0, _0x34db61) : 0);
}
function fi(_0x449039) {
  let _0x3628a4 = Li(_0x449039.contentHeight),
    _0x1d979b = Math.min(_0x3628a4, Li(_0x449039.viewportHeight)),
    _0x2fd6af = Math.max(0, _0x3628a4 - _0x1d979b);
  if (_0x2fd6af === 0 && !_0x449039.collapseWithoutChildScroll)
    return { childOffset: 0, clipBottom: 0, visualOffset: 0 };
  let _0x598de4 = Math.max(0, _0x449039.hostOffset),
    _0x500693 = mi(Li(_0x449039.stickyHeaderHeight), 1, _0x1d979b),
    _0x3c16d8 = Math.max(_0x2fd6af, _0x3628a4 - _0x500693),
    _0x2b5f22 = Math.min(_0x598de4, _0x3c16d8),
    _0x24228d = mi(_0x3628a4 - _0x598de4, _0x500693, _0x1d979b);
  return {
    childOffset: Math.min(_0x598de4, _0x2fd6af),
    clipBottom: _0x1d979b - _0x24228d,
    visualOffset: _0x2b5f22,
  };
}
function pi(_0x669c1d) {
  let _0x38cad4 = Math.max(1, _0x669c1d.bleedWidth - _0x669c1d.bleedLeft),
    _0x38a9fd = Math.min(_0x669c1d.contentWidth, _0x38cad4);
  return {
    initialWidth: _0x38a9fd,
    maxExpansion: Math.min(
      _0x669c1d.bleedLeft,
      Math.max(0, _0x669c1d.contentWidth - _0x38a9fd),
    ),
  };
}
function mi(_0x5213c9, _0x339382, _0x577327) {
  return Math.max(_0x339382, Math.min(_0x577327, _0x5213c9));
}
function hi(_0x2cb9c7) {
  (_0x2cb9c7.style["removeProperty"]("left"),
    _0x2cb9c7.style["removeProperty"]("top"),
    _0x2cb9c7.style["removeProperty"]("width"),
    _0x2cb9c7.style["removeProperty"]("height"),
    _0x2cb9c7.style["removeProperty"]("visibility"),
    _0x2cb9c7.style["removeProperty"]("pointer-events"));
}
function gi(_0x4e983b, _0x32e7b8) {
  _0x32e7b8 ? si.set(_0x4e983b, _0x32e7b8) : si.delete(_0x4e983b);
}
function _i(_0x4a8493) {
  var _0x4f03ad;
  let {
    chrome: _0x2bf188,
    container: _0x4ff333,
    geometryService: _0x4d3683,
    stage: _0x30ae2d,
  } = _0x4a8493;
  if (_0x4a8493.deferInactive && _0x30ae2d === "inactive")
    return (
      (_0x2bf188.style["visibility"] = "hidden"),
      (_0x2bf188.style["pointerEvents"] = "none"),
      (0, a.toDisposable)(() => {
        (_0x2bf188.style["removeProperty"]("visibility"),
          _0x2bf188.style["removeProperty"]("pointer-events"));
      })
    );
  let _0xbe6fb1 = _0x2bf188.parentElement,
    _0x2f17fa = _0x2bf188.nextSibling,
    _0x149f5b,
    _0x1c3d89,
    _0x1d9b5f = 0,
    _0x11e927,
    _0x26253a,
    _0x293ac5,
    _0x33409d,
    _0x337e6e,
    _0x370848,
    _0x573b5a,
    _0x2b4487 = () => {
      let _0x17af78 = Ei(_0x4ff333),
        _0x59c131 = Ti(_0x4ff333),
        _0x5e2b61 =
          !Di(_0x4ff333) &&
          _0x573b5a != null &&
          _0x11e927 === _0x59c131.left &&
          _0x293ac5 === _0x59c131.width &&
          _0x33409d === _0x59c131.height;
      !Di(_0x4ff333) &&
        _0x573b5a != null &&
        !_0x5e2b61 &&
        (_0x573b5a = undefined);
      let _0x5a66fc = _0x5e2b61
          ? new DOMRect(
              _0x59c131.left,
              _0x573b5a,
              _0x59c131.width,
              _0x59c131.height,
            )
          : _0x59c131,
        _0x57c3aa = !_0x17af78 || _0x5a66fc.height >= 24,
        _0x54b1fa = xi(_0x17af78, _0x57c3aa, _0x5a66fc.height);
      if (
        (yi(_0x4ff333, _0x2bf188, _0x57c3aa, _0x30ae2d),
        bi(_0x2bf188, _0x54b1fa, _0x30ae2d),
        _0x17af78)
      ) {
        let _0x546a36 = _0x4ff333.getBoundingClientRect();
        Si(_0x2bf188, _0x5a66fc, Ci(_0x546a36, _0x4a8493.docsSheetLikeLayout));
      } else wi(_0x2bf188);
      ((_0x2bf188.style["visibility"] = _0x57c3aa ? "" : "hidden"),
        (_0x2bf188.style["pointerEvents"] =
          _0x57c3aa && _0x30ae2d !== "inactive" ? "" : "none"),
        (_0x5a66fc.left !== _0x11e927 ||
          _0x5a66fc.top !== _0x26253a ||
          _0x5a66fc.width !== _0x293ac5 ||
          _0x5a66fc.height !== _0x33409d ||
          _0x57c3aa !== _0x337e6e ||
          _0x54b1fa !== _0x370848) &&
          ((_0x11e927 = _0x5a66fc.left),
          (_0x26253a = _0x5a66fc.top),
          (_0x293ac5 = _0x5a66fc.width),
          (_0x33409d = _0x5a66fc.height),
          (_0x337e6e = _0x57c3aa),
          (_0x370848 = _0x54b1fa),
          gi(_0x4ff333, {
            height: _0x5a66fc.height,
            left: _0x5a66fc.left,
            top: _0x5a66fc.top,
            width: _0x5a66fc.width,
          }),
          (_0x2bf188.style["left"] = _0x5a66fc.left + "px"),
          (_0x2bf188.style["top"] = _0x5a66fc.top + "px"),
          (_0x2bf188.style["width"] = _0x5a66fc.width + "px"),
          (_0x2bf188.style["height"] = _0x5a66fc.height + "px")));
    },
    _0x34688b = () => {
      (_0x2b4487(), (_0x149f5b = window.requestAnimationFrame(_0x34688b)));
    },
    _0xc7f9ba = () => {
      ((_0x1c3d89 = undefined),
        _0x2b4487(),
        !(_0x1d9b5f <= 0) &&
          (--_0x1d9b5f, (_0x1c3d89 = window.requestAnimationFrame(_0xc7f9ba))));
    },
    _0x3bd69f = (_0x3411f1) => {
      (!Di(_0x4ff333) &&
        Ai(_0x3411f1) &&
        _0x26253a != null &&
        (_0x573b5a = _0x26253a),
        ki(_0x4ff333, _0x3411f1, {
          height: _0x33409d,
          left: _0x11e927,
          top: _0x26253a,
          width: _0x293ac5,
        }) &&
          (_0x4d3683.invalidate({
            embedId: _0x4a8493.embedId,
            reason: "wheel",
          }),
          (_0x1d9b5f = Math.max(_0x1d9b5f, 3)),
          (_0x1c3d89 ??= window.requestAnimationFrame(_0xc7f9ba))));
    },
    _0x405c5e = () => {
      ((_0x573b5a = undefined),
        _0x4d3683.invalidate({
          embedId: _0x4a8493.embedId,
          reason: "host-scroll",
        }),
        (_0x1d9b5f = Math.max(_0x1d9b5f, 2)),
        (_0x1c3d89 ??= window.requestAnimationFrame(_0xc7f9ba)));
    },
    _0x5364cb = () => {
      _0x573b5a = undefined;
    };
  (_0x2b4487(), document.body["appendChild"](_0x2bf188));
  let _0x5f0aa = new ResizeObserver(_0x2b4487);
  _0x5f0aa.observe(_0x4ff333);
  let _0x57fe38 =
    (_0x4f03ad = _0x4a8493.hostLayout$) == null
      ? undefined
      : _0x4f03ad.subscribe(_0x405c5e);
  return (
    window.addEventListener("pointerdown", _0x5364cb, true),
    window.addEventListener("scroll", _0x3bd69f, true),
    window.addEventListener("wheel", _0x3bd69f, true),
    window.addEventListener("resize", _0x3bd69f),
    (_0x30ae2d !== "inactive" || Di(_0x4ff333)) &&
      (_0x149f5b = window.requestAnimationFrame(_0x34688b)),
    (0, a.toDisposable)(() => {
      (_0x149f5b != null && window.cancelAnimationFrame(_0x149f5b),
        _0x1c3d89 != null && window.cancelAnimationFrame(_0x1c3d89),
        _0x57fe38 == null || _0x57fe38.unsubscribe(),
        _0x5f0aa.disconnect(),
        window.removeEventListener("pointerdown", _0x5364cb, true),
        window.removeEventListener("scroll", _0x3bd69f, true),
        window.removeEventListener("wheel", _0x3bd69f, true),
        window.removeEventListener("resize", _0x3bd69f),
        gi(_0x4ff333),
        hi(_0x2bf188),
        yi(_0x4ff333, _0x2bf188, true, "stage2"),
        bi(_0x2bf188, true, "stage2"),
        _0xbe6fb1 != null && _0xbe6fb1.isConnected
          ? _0xbe6fb1.insertBefore(_0x2bf188, _0x2f17fa)
          : _0x2bf188.remove());
    })
  );
}
function vi(_0x12d2ac, _0x3495f5) {
  var _0x2fa93d, _0x2ee3eb, _0x4ce188;
  let _0x4865a2 = _0x12d2ac.dataset["embedId"],
    _0x1b8ef8 = _0x12d2ac.ownerDocument,
    _0x39d8 = Ei(_0x12d2ac)
      ? [Ti(_0x12d2ac)]
      : [
          _0x12d2ac.getBoundingClientRect(),
          (_0x2fa93d = _0x12d2ac.querySelector(
            '[data-u-comp="embed-float-dom-content"]',
          )) == null
            ? undefined
            : _0x2fa93d.getBoundingClientRect(),
        ],
    _0x48c303 = _0x1b8ef8.querySelector(
      '[data-u-comp="embed-float-dom-chrome"][data-embed-id="' +
        _0x4865a2 +
        "\x22]",
    ),
    _0x5abc5a = [
      _0x48c303 == null ||
      (_0x2ee3eb = _0x48c303.querySelector(
        '[data-embed-floating-menu="true"]',
      )) == null
        ? undefined
        : _0x2ee3eb.getBoundingClientRect(),
      _0x48c303 == null ||
      (_0x4ce188 = _0x48c303.querySelector(
        "[data-embed-float-fullscreen-button]",
      )) == null
        ? undefined
        : _0x4ce188.getBoundingClientRect(),
    ],
    _0x24daf4 = Array.from(
      _0x1b8ef8.querySelectorAll(
        "[data-embed-floating-menu-popup=\x22true\x22]",
      ),
    )
      .filter((_0x510e95) => _0x510e95.dataset["embedId"] === _0x4865a2)
      .map((_0x5c1df4) => _0x5c1df4.getBoundingClientRect());
  return [..._0x39d8, ..._0x5abc5a, ..._0x24daf4]
    .filter(
      (_0x141182) => !!_0x141182 && _0x141182.width > 0 && _0x141182.height > 0,
    )
    .some((_0x10a8b4) => Fi(_0x10a8b4, _0x3495f5.clientX, _0x3495f5.clientY));
}
function yi(_0x86138e, _0x2e570b, _0x48c695, _0x356f1d) {
  let _0x313940 = _0x48c695 ? "" : "none",
    _0x3c0af3 = _0x86138e.querySelector(
      "[data-u-comp=\x22embed-float-dom-content\x22]",
    ),
    _0x225d20 = _0x86138e.querySelector('[data-u-comp="embed-float-dom-live"]'),
    _0x5780d3 = _0x86138e.querySelector(
      '[data-u-comp="embed-float-dom-live-canvas"]',
    ),
    _0x4d4f4c = _0x86138e.querySelector(
      '[data-u-comp="embed-float-dom-live-content"]',
    ),
    _0x1566b4 = _0x86138e.querySelector(
      '[data-u-comp="embed-float-dom-interaction-gate"]',
    ),
    _0x2e4896 =
      _0x2e570b == null
        ? undefined
        : _0x2e570b.querySelector("[data-embed-overlay-root]"),
    _0xa809ab =
      _0x2e570b == null
        ? undefined
        : _0x2e570b.querySelector("[data-embed-popup-root]");
  if (
    (_0x2e4896 == null ||
      _0x2e4896.style["setProperty"]("pointer-events", "none"),
    _0xa809ab == null ||
      _0xa809ab.style["setProperty"]("pointer-events", "none"),
    Ei(_0x86138e))
  ) {
    (_0x86138e.style["setProperty"]("pointer-events", "none"),
      _0x3c0af3 == null ||
        _0x3c0af3.style["setProperty"]("pointer-events", "none"),
      _0x225d20 == null ||
        _0x225d20.style["setProperty"]("pointer-events", "none"),
      _0x5780d3 == null ||
        _0x5780d3.style["setProperty"](
          "pointer-events",
          _0x48c695 ? "auto" : "none",
        ),
      _0x4d4f4c == null ||
        _0x4d4f4c.style["setProperty"]("pointer-events", "none"),
      _0x1566b4 == null ||
        _0x1566b4.style["setProperty"]("pointer-events", "none"));
    return;
  }
  (_0x86138e.style["removeProperty"]("pointer-events"),
    _0x3c0af3 == null || _0x3c0af3.style["removeProperty"]("pointer-events"),
    _0x225d20 == null ||
      _0x225d20.style["setProperty"]("pointer-events", _0x313940),
    _0x5780d3 == null || _0x5780d3.style["removeProperty"]("pointer-events"),
    _0x4d4f4c == null || _0x4d4f4c.style["removeProperty"]("pointer-events"),
    _0x1566b4 == null ||
      _0x1566b4.style["setProperty"]("pointer-events", _0x313940));
}
function bi(_0x714a00, _0x1da306, _0x5d1e16) {
  let _0x5234a4 = _0x1da306 && _0x5d1e16 !== "stage2",
    _0xee9adb =
      _0x714a00 == null
        ? undefined
        : _0x714a00.querySelector("[data-embed-float-fullscreen-button]"),
    _0x53df09 = [
      _0x714a00 == null
        ? undefined
        : _0x714a00.querySelector("[data-embed-overlay-root]"),
      _0x714a00 == null
        ? undefined
        : _0x714a00.querySelector("[data-embed-popup-root]"),
    ];
  (_0xee9adb == null ||
    _0xee9adb.style["setProperty"]("visibility", _0x5234a4 ? "" : "hidden"),
    _0xee9adb == null ||
      _0xee9adb.style["setProperty"]("pointer-events", _0x5234a4 ? "" : "none"),
    _0x53df09.forEach((_0x945b09) => {
      (_0x945b09 == null ||
        _0x945b09.style["setProperty"](
          "visibility",
          _0x1da306 && _0x5d1e16 === "stage2" ? "" : "hidden",
        ),
        _0x945b09 == null ||
          _0x945b09.style["setProperty"]("pointer-events", "none"),
        _0x5d1e16 !== "stage2" &&
          (_0x945b09 == null ||
            _0x945b09.removeAttribute("data-embed-runtime-focus-role"),
          _0x945b09 == null ||
            _0x945b09
              .querySelectorAll("[data-embed-runtime-focus-role]")
              .forEach((_0x5cc624) => {
                _0x5cc624.removeAttribute("data-embed-runtime-focus-role");
              })));
    }));
}
function xi(_0x5ce886, _0x5e7552, _0x1e3f90) {
  return _0x5ce886 ? _0x5e7552 : _0x1e3f90 >= 40;
}
function Si(_0x2142c0, _0x1e224f, _0x6244) {
  let _0x4b1ccf = _0x6244.left - _0x1e224f.left,
    _0x10bf1e = _0x6244.width;
  _0x2142c0
    .querySelectorAll('[data-embed-floating-menu="true"]')
    .forEach((_0x5d7eb7) => {
      var _0x4daff8;
      let _0x3e38fb =
          (_0x4daff8 = _0x5d7eb7.closest("[data-embed-floating-menu-entry]")) ==
          null
            ? undefined
            : _0x4daff8.dataset["embedFloatingMenuEntry"],
        _0x113b52 = _0x5d7eb7.dataset["uComp"] === "base-embed-floating-menu",
        _0x489742 = _0x5d7eb7.dataset["uComp"] === "sheet-embed-floating-menu";
      _0x3e38fb === "docs-custom-block"
        ? ((_0x5d7eb7.style["top"] = _0x113b52 ? "-48px" : "-52px"),
          _0x113b52
            ? (_0x5d7eb7.style["setProperty"](
                "left",
                _0x4b1ccf + "px",
                "important",
              ),
              _0x5d7eb7.style["setProperty"]("right", "auto", "important"),
              _0x5d7eb7.style["setProperty"](
                "width",
                _0x10bf1e + "px",
                "important",
              ))
            : _0x489742 &&
              (_0x5d7eb7.style["setProperty"](
                "left",
                _0x4b1ccf + _0x10bf1e / 2 + "px",
                "important",
              ),
              _0x5d7eb7.style["setProperty"]("max-width", _0x10bf1e + "px")))
        : (_0x113b52 || _0x489742) && (_0x5d7eb7.style["top"] = "8px");
    });
}
function Ci(_0x508974, _0x764b26) {
  if (!_0x764b26) return _0x508974;
  let _0x506aa8 = Math.min(_0x764b26.contentWidth, _0x764b26.pageContentWidth);
  if (_0x506aa8 <= 0 || _0x508974.width <= 0) return _0x508974;
  let _0x35cb01 = _0x508974.width / _0x506aa8;
  return new DOMRect(
    _0x508974.left,
    _0x508974.top,
    _0x764b26.pageContentWidth * _0x35cb01,
    _0x508974.height,
  );
}
function wi(_0x2eb8b8) {
  _0x2eb8b8
    .querySelectorAll('[data-embed-floating-menu="true"]')
    .forEach((_0xfa8828) => {
      var _0x28c183;
      (_0xfa8828.style["removeProperty"]("left"),
        _0xfa8828.style["removeProperty"]("top"),
        _0xfa8828.style["removeProperty"]("width"),
        _0xfa8828.style["removeProperty"]("right"),
        _0xfa8828.style["removeProperty"]("max-width"),
        (_0x28c183 = _0xfa8828.querySelector(
          '[data-u-comp="base-embed-view-slot"]',
        )) == null || _0x28c183.style["removeProperty"]("margin-left"));
    });
}
function Ti(_0xb84331) {
  let _0x4bd86a = Di(_0xb84331)
      ? _0xb84331.querySelector('[data-u-comp="embed-float-dom-content"]')
      : null,
    _0x2c0bde =
      _0x4bd86a == null ? undefined : _0x4bd86a.getBoundingClientRect(),
    _0x49326a = _0xb84331.getBoundingClientRect();
  return ji(
    _0x2c0bde && _0x2c0bde.width > 0 && _0x2c0bde.height > 0
      ? Ei(_0xb84331)
        ? Mi(_0x2c0bde, _0x49326a.bottom)
        : _0x2c0bde
      : _0x49326a,
    _0xb84331,
  );
}
function Ei(_0x20e6f1) {
  return !!_0x20e6f1.closest(
    '[data-embed-docs-custom-block-sheet-like="true"]',
  );
}
function Di(_0x5a452b) {
  return (
    Ei(_0x5a452b) ||
    !!_0x5a452b.closest("[data-u-comp=\x22embed-docs-custom-block\x22]")
  );
}
function Oi(_0x39a6e7, _0x30149a, _0x2c5958, _0x11ebad) {
  (_0x11ebad.current["forEach"]((_0x3b530b) =>
    window.cancelAnimationFrame(_0x3b530b),
  ),
    (_0x11ebad.current = []),
    _0x39a6e7.invalidate({ embedId: _0x30149a, reason: _0x2c5958 }));
  let _0xfc9f9e = (_0x75ac8) => {
    let _0x58694a = window.requestAnimationFrame(() => {
      ((_0x11ebad.current = _0x11ebad.current["filter"](
        (_0x999c8a) => _0x999c8a !== _0x58694a,
      )),
        _0x39a6e7.invalidate({ embedId: _0x30149a, reason: _0x2c5958 }),
        _0x75ac8 > 1 && _0xfc9f9e(_0x75ac8 - 1));
    });
    _0x11ebad.current["push"](_0x58694a);
  };
  _0xfc9f9e(2);
}
function ki(_0x31092e, _0x14e7ae, _0x44800d) {
  if (_r(_0x14e7ae)) return false;
  let _0x31ddbd = _0x14e7ae == null ? undefined : _0x14e7ae.target;
  return !(
    (_0x31ddbd instanceof Node && _0x31092e.contains(_0x31ddbd)) ||
    (_0x31ddbd instanceof HTMLElement &&
      _0x31ddbd.closest('[data-embed-float-dom="true"]')) ||
    (_0x14e7ae instanceof WheelEvent &&
      ([...si.values()].some((_0x2b8e97) => Ii(_0x2b8e97, _0x14e7ae)) ||
        Ii(_0x44800d, _0x14e7ae)))
  );
}
function Ai(_0x5eab3e) {
  return _0x5eab3e instanceof WheelEvent
    ? Math.abs(_0x5eab3e.deltaY) >= Math.abs(_0x5eab3e.deltaX)
    : (_0x5eab3e == null ? undefined : _0x5eab3e.type) === "scroll";
}
function ji(_0x4af439, _0x1442c7) {
  let _0x5389e9 = Ni(_0x1442c7, _0x4af439);
  if (!_0x5389e9 && _0x4af439.top >= 0 && _0x4af439.left >= 0) return _0x4af439;
  let _0x4563e8 =
      (_0x5389e9 == null ? undefined : _0x5389e9.getBoundingClientRect()) ??
      new DOMRect(0, 0, window.innerWidth, window.innerHeight),
    _0x301c88 = Math.max(_0x4af439.left, _0x4563e8.left),
    _0x26c58f = Math.max(_0x4af439.top, _0x4563e8.top),
    _0x5c3f86 = Math.min(_0x4af439.right, _0x4563e8.right),
    _0x4f5a30 = Math.min(_0x4af439.bottom, _0x4563e8.bottom);
  return _0x5c3f86 <= _0x301c88 || _0x4f5a30 <= _0x26c58f
    ? new DOMRect(_0x301c88, _0x26c58f, 0, 0)
    : new DOMRect(
        _0x301c88,
        _0x26c58f,
        _0x5c3f86 - _0x301c88,
        _0x4f5a30 - _0x26c58f,
      );
}
function Mi(_0x45b887, _0x4c2dee) {
  let _0x419be5 = Math.min(_0x45b887.bottom, _0x4c2dee);
  return _0x419be5 <= _0x45b887.top
    ? new DOMRect(_0x45b887.left, _0x45b887.top, 0, 0)
    : new DOMRect(
        _0x45b887.left,
        _0x45b887.top,
        _0x45b887.width,
        _0x419be5 - _0x45b887.top,
      );
}
function Ni(_0x2a12dd, _0x56c2d4) {
  let _0x1c60e9 = _0x2a12dd.parentElement;
  for (
    ;
    _0x1c60e9 &&
    _0x1c60e9 !== document.body &&
    _0x1c60e9 !== document.documentElement;
  ) {
    if (Tr(_0x1c60e9) && !Pi(_0x1c60e9, _0x56c2d4)) return _0x1c60e9;
    _0x1c60e9 = _0x1c60e9.parentElement;
  }
  return null;
}
function Pi(_0x2cac71, _0x53bd91) {
  let _0xd093a9 = _0x2cac71.getBoundingClientRect();
  return (
    _0xd093a9.width <= 0 ||
    _0xd093a9.height <= 0 ||
    (Math.abs(_0xd093a9.left - _0x53bd91.left) < 1 &&
      Math.abs(_0xd093a9.top - _0x53bd91.top) < 1 &&
      Math.abs(_0xd093a9.width - _0x53bd91.width) < 1 &&
      Math.abs(_0xd093a9.height - _0x53bd91.height) < 1)
  );
}
function Fi(_0xa54215, _0x32b30d, _0x350e52) {
  return (
    _0x32b30d >= _0xa54215.left &&
    _0x32b30d <= _0xa54215.right &&
    _0x350e52 >= _0xa54215.top &&
    _0x350e52 <= _0xa54215.bottom
  );
}
function Ii(_0xad4b5d, _0x4004d2) {
  let {
    height: _0x45708f,
    left: _0x870eb8,
    top: _0x19f773,
    width: _0x46349c,
  } = _0xad4b5d;
  return (
    Number.isFinite(_0x870eb8) &&
    Number.isFinite(_0x19f773) &&
    Number.isFinite(_0x46349c) &&
    Number.isFinite(_0x45708f) &&
    (_0x46349c ?? 0) > 0 &&
    (_0x45708f ?? 0) > 0 &&
    _0x4004d2.clientX >= _0x870eb8 &&
    _0x4004d2.clientX <= _0x870eb8 + _0x46349c &&
    _0x4004d2.clientY >= _0x19f773 &&
    _0x4004d2.clientY <= _0x19f773 + _0x45708f
  );
}
function Li(..._0x2ae8c3) {
  return Math.max(
    1,
    _0x2ae8c3.find(
      (_0x29bb23) =>
        typeof _0x29bb23 == "number" &&
        Number.isFinite(_0x29bb23) &&
        _0x29bb23 > 0,
    ) ?? 1,
  );
}
function Ri(_0x44b8f8) {
  return typeof _0x44b8f8 == "number" &&
    Number.isFinite(_0x44b8f8) &&
    _0x44b8f8 > 0
    ? _0x44b8f8
    : 1;
}
const zi = "univer:embed-float-drag-handle:pointerdown";
function Bi(..._0x2daca3) {
  return _0x2daca3.filter((_0x41647a) => !!_0x41647a && _0x41647a.isConnected);
}
function Vi(_0x1e739e, _0x17d0a4, _0x2ab15a, _0x3d4844, _0x172f31) {
  let _0x27cd6c = _0x172f31 === a.UniverInstanceType["UNIVER_SLIDE"],
    _0x160888 = _0x27cd6c
      ? () => {}
      : (0, c.preventBrowserZoomInContainers)(
          _0x17d0a4 ? [_0x1e739e, _0x17d0a4] : [_0x1e739e],
        ),
    _0x56481e = (_0x202146) => {
      let _0xee217e =
          _0x202146.target instanceof HTMLElement ? _0x202146.target : null,
        _0x2b9b2c = _0xee217e
          ? _0xee217e.closest(
              '[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]',
            )
          : null,
        _0xee6a4 = _0x1e739e.dataset["embedId"],
        _0x5bf40b = Wi(_0x1e739e, _0x17d0a4, _0x2b9b2c, _0xee6a4),
        _0x4bec4f =
          !!_0xee217e &&
          !!(_0x3d4844 != null && _0x3d4844.contains(_0xee217e)) &&
          !_0x1e739e.contains(_0xee217e);
      if (
        !(
          !_0x5bf40b &&
          !_0x4bec4f &&
          !Ui(_0x27cd6c, _0x1e739e, _0x17d0a4, _0xee217e)
        ) &&
        !(_0x27cd6c && _0x5bf40b && Hi(_0x2b9b2c, _0xee217e, _0x202146)) &&
        !Gi(_0x27cd6c, _0x2b9b2c, _0xee217e, _0x202146)
      ) {
        if (_0x27cd6c) {
          (_0x2ab15a == null || _0x2ab15a(_0x202146),
            _0x202146.preventDefault(),
            _0x202146.stopPropagation());
          return;
        }
        (!_0x202146.ctrlKey &&
          !_0x202146.metaKey &&
          (_0x2ab15a == null ? undefined : _0x2ab15a(_0x202146)) !== true) ||
          (_0x202146.preventDefault(), _0x202146.stopPropagation());
      }
    };
  return (
    _0x1e739e.ownerDocument["addEventListener"]("wheel", _0x56481e, {
      capture: true,
      passive: false,
    }),
    () => {
      (_0x1e739e.ownerDocument["removeEventListener"]("wheel", _0x56481e, true),
        _0x160888());
    }
  );
}
function Hi(_0x5bd264, _0x242f87, _0x371b8f) {
  return (_0x5bd264 == null
    ? undefined
    : _0x5bd264.dataset["embedFloatingMenuPopup"]) !== "true" ||
    _0x371b8f.ctrlKey ||
    _0x371b8f.metaKey
    ? false
    : ((!_0x242f87 || !Ki(_0x5bd264, _0x242f87, _0x371b8f)) &&
        _0x371b8f.preventDefault(),
      _0x371b8f.stopPropagation(),
      true);
}
function Ui(_0x2bbb5a, _0x56d64d, _0x37d55a, _0x2b4827) {
  return (
    _0x2bbb5a &&
    (_0x56d64d.contains(_0x2b4827) ||
      (_0x37d55a == null ? undefined : _0x37d55a.contains(_0x2b4827)) === true)
  );
}
function Wi(_0x5eec71, _0x24198b, _0x580fee, _0x348d06) {
  return (
    !!_0x580fee &&
    (_0x5eec71.contains(_0x580fee) ||
      (_0x24198b == null ? undefined : _0x24198b.contains(_0x580fee)) ===
        true ||
      (!!_0x348d06 && _0x580fee.dataset["embedId"] === _0x348d06))
  );
}
function Gi(_0x4031a3, _0x414470, _0x5e2a20, _0x315190) {
  return (
    !_0x4031a3 &&
    !!_0x414470 &&
    !!_0x5e2a20 &&
    Ki(_0x414470, _0x5e2a20, _0x315190)
  );
}
function Ki(_0x35e900, _0x578308, _0x506dd2) {
  if (_0x506dd2.ctrlKey || _0x506dd2.metaKey) return false;
  let _0x2885d7 =
      _0x506dd2.deltaX || (_0x506dd2.shiftKey ? _0x506dd2.deltaY : 0),
    _0x505856 = _0x506dd2.shiftKey ? 0 : _0x506dd2.deltaY,
    _0x24cceb = _0x578308;
  for (; _0x24cceb && _0x35e900.contains(_0x24cceb);) {
    if (qi(_0x24cceb, _0x2885d7, _0x505856)) return true;
    if (_0x24cceb === _0x35e900) break;
    _0x24cceb = _0x24cceb.parentElement;
  }
  return false;
}
function qi(_0x5ca8e1, _0x261a44, _0x1412e3) {
  let _0x5e5db5 = _0x5ca8e1.ownerDocument["defaultView"];
  if (!_0x5e5db5) return false;
  let _0x5cc4a5 = _0x5e5db5.getComputedStyle(_0x5ca8e1),
    _0x2cdf2a =
      Ji(_0x5cc4a5.overflowX) &&
      Yi(
        _0x5ca8e1.scrollLeft,
        _0x5ca8e1.scrollWidth - _0x5ca8e1.clientWidth,
        _0x261a44,
      ),
    _0x43d944 =
      Ji(_0x5cc4a5.overflowY) &&
      Yi(
        _0x5ca8e1.scrollTop,
        _0x5ca8e1.scrollHeight - _0x5ca8e1.clientHeight,
        _0x1412e3,
      );
  return _0x2cdf2a || _0x43d944;
}
function Ji(_0x31d972) {
  return _0x31d972 === "auto" || _0x31d972 === "scroll";
}
function Yi(_0x53c23f, _0x5e082e, _0x50a506) {
  return (
    _0x5e082e > 0 &&
    (_0x50a506 < 0 ? _0x53c23f > 0 : _0x50a506 > 0 && _0x53c23f < _0x5e082e)
  );
}
function Xi(_0x420d09, _0x2943de) {
  let _0x3b8e43 = _0x420d09.querySelector('[data-u-comp="hover-track"]'),
    _0x42f608 =
      (_0x3b8e43 == null ? undefined : _0x3b8e43.firstElementChild) instanceof
      HTMLElement
        ? _0x3b8e43.firstElementChild
        : null,
    _0x39a239 = (_0xbbdb80) =>
      _0xbbdb80 instanceof Node &&
      (_0x420d09.contains(_0xbbdb80) || _0x2943de.contains(_0xbbdb80)),
    _0x4e29c5 = () => {
      var _0x5352d0, _0x4e9390;
      (_0x3b8e43 == null || _0x3b8e43.style["setProperty"]("opacity", "1"),
        ((_0x5352d0 = _0x420d09.ownerDocument["defaultView"]) == null ||
        (_0x4e9390 = _0x5352d0.matchMedia) == null
          ? undefined
          : _0x4e9390.call(_0x5352d0, "(prefers-reduced-motion:\x20reduce)")
              .matches) !== true &&
          (_0x42f608 == null ||
            _0x42f608.style["setProperty"](
              "animation",
              "univer-spin\x205s\x20linear\x20infinite",
            )));
    },
    _0x30910b = () => {
      (_0x3b8e43 == null || _0x3b8e43.style["removeProperty"]("opacity"),
        _0x42f608 == null || _0x42f608.style["removeProperty"]("animation"));
    },
    _0x5a5d92 = () => {
      (_0x2943de.style["setProperty"]("opacity", "1"), _0x4e29c5());
    },
    _0x507ad6 = (_0xcb6521) => {
      _0x39a239(_0xcb6521.relatedTarget) ||
        (_0x2943de.style["removeProperty"]("opacity"), _0x30910b());
    };
  return (
    _0x420d09.addEventListener("pointerenter", _0x5a5d92),
    _0x420d09.addEventListener("pointerleave", _0x507ad6),
    _0x2943de.addEventListener("pointerenter", _0x5a5d92),
    _0x2943de.addEventListener("pointerleave", _0x507ad6),
    (_0x420d09.matches(":hover") || _0x2943de.matches(":hover")) && _0x5a5d92(),
    () => {
      (_0x420d09.removeEventListener("pointerenter", _0x5a5d92),
        _0x420d09.removeEventListener("pointerleave", _0x507ad6),
        _0x2943de.removeEventListener("pointerenter", _0x5a5d92),
        _0x2943de.removeEventListener("pointerleave", _0x507ad6),
        _0x2943de.style["removeProperty"]("opacity"),
        _0x30910b());
    }
  );
}
function Zi(_0x59e897, _0x50db79) {
  if (
    _0x50db79 instanceof HTMLCanvasElement &&
    _0x59e897.some((_0x2e9744) => _0x2e9744.contains(_0x50db79))
  )
    return _0x50db79;
  for (let _0x4fcdc8 of _0x59e897) {
    let _0x5901ea = _0x4fcdc8.querySelector("canvas");
    if (_0x5901ea) return _0x5901ea;
  }
  return null;
}
function Qi(_0x557939, _0x74a1aa = false) {
  return (
    _0x557939 !== a.UniverInstanceType["UNIVER_SHEET"] &&
    _0x557939 !== a.UniverInstanceType["UNIVER_DOC"] &&
    (_0x74a1aa || _0x557939 !== a.UniverInstanceType["UNIVER_BASE"])
  );
}
function $i(_0x37c730) {
  let _0x1ec461 = ea(_0x37c730);
  return (
    _0x1ec461 === "child-editor" ||
    _0x1ec461 === "child-popup" ||
    _0x1ec461 === "floating-menu"
  );
}
function ea(_0x3f10f1) {
  var _0x21efb8;
  if (!(_0x3f10f1 instanceof HTMLElement)) return;
  let _0x40b642 =
    (_0x21efb8 = _0x3f10f1.closest("[data-embed-runtime-focus-role]")) == null
      ? undefined
      : _0x21efb8.getAttribute(G);
  return ua(_0x40b642) ? _0x40b642 : undefined;
}
function ta(_0x4531c3, _0x2a348b, _0x42f1e8, _0x2def69, _0x514a60) {
  if (_0x514a60 !== "stage2" || !_0x42f1e8 || !_0x2def69) return;
  let _0x4c7df0 = new Map(),
    _0xd9af1f = () => {
      let _0x1c9dc1 = new Set([
        _0x2def69,
        ..._0x2a348b.listElements(_0x42f1e8),
      ]);
      (_0x4c7df0.forEach((_0x183c6e, _0x693224) => {
        _0x1c9dc1.has(_0x693224) ||
          (_0x183c6e.dispose(), _0x4c7df0.delete(_0x693224));
      }),
        _0x1c9dc1.forEach((_0xd1aeef) => {
          _0x4c7df0.has(_0xd1aeef) ||
            _0x4531c3.checkElementInCurrentContainers(_0xd1aeef) ||
            _0x4c7df0.set(
              _0xd1aeef,
              _0x4531c3.registerContainerElement(_0xd1aeef),
            );
        }));
    };
  _0xd9af1f();
  let _0x25ec1c = _0x2a348b.runtimeFocusChanged$["subscribe"](_0xd9af1f);
  return (0, a.toDisposable)(() => {
    (_0x25ec1c.unsubscribe(),
      _0x4c7df0.forEach((_0x5459a9) => _0x5459a9.dispose()),
      _0x4c7df0.clear());
  });
}
function na(_0x1ab153) {
  let _0x24d5bb = (_0x7eb0e2) => {
      var _0x5ac106, _0x3f5cfd;
      let _0x5704d1 = _0x7eb0e2.target,
        _0x190c57 =
          ((_0x5ac106 = _0x1ab153.isExternalHostInteraction) == null
            ? undefined
            : _0x5ac106.call(_0x1ab153, _0x7eb0e2)) ?? false;
      if (
        _0x1ab153.floatingActiveService["getStage"](_0x1ab153.embedId) ===
        "inactive"
      )
        return;
      _0x190c57 &&
        (_0x1ab153.externalHostInteractionUntil["current"] =
          Date.now() + _0x1ab153.graceMs);
      let _0x42c370 =
        _0x1ab153.focusCoordinator["containsElement"](
          _0x1ab153.embedId,
          _0x5704d1,
          _0x7eb0e2,
        ) ||
        _0x1ab153.interactionBoundaryService["contains"](
          _0x1ab153.embedId,
          _0x5704d1,
          _0x7eb0e2,
        );
      (_0x42c370 &&
        (_0x1ab153.ownedPointerInteractionUntil["current"] =
          Date.now() + _0x1ab153.graceMs),
        !(
          !_0x5704d1 ||
          _0x1ab153.container["contains"](_0x5704d1) ||
          ((_0x3f5cfd = _0x1ab153.chrome) != null &&
            _0x3f5cfd.contains(_0x5704d1)) ||
          _0x5704d1.closest(
            '[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]',
          ) ||
          _0x42c370 ||
          _0x190c57 ||
          vi(_0x1ab153.container, _0x7eb0e2)
        ) &&
          _0x1ab153.activationService["clearFloating"](
            _0x1ab153.embedId,
            _0x1ab153.hostUnitId,
          ));
    },
    _0x709906 = (_0x2c2f94) => {
      var _0x2b40bd;
      let _0x2f5c91 = _0x2c2f94.target,
        _0x3fae26 =
          _0x1ab153.container["ownerDocument"] ??
          (_0x2f5c91 == null ? undefined : _0x2f5c91.ownerDocument),
        _0x31f86c = _0x1ab153.focusCoordinator["hasBlockingChildFocusLease"](
          _0x1ab153.embedId,
          { ignoreOwners: _0x1ab153.runtimeFocusOwners },
        );
      _0x1ab153.floatingActiveService["getStage"](_0x1ab153.embedId) !==
        "inactive" &&
        (!_0x2f5c91 ||
          _0x31f86c ||
          Date.now() < _0x1ab153.ownedPointerInteractionUntil["current"] ||
          Date.now() < _0x1ab153.externalHostInteractionUntil["current"] ||
          _0x1ab153.interactionBoundaryService["hasRecentInteractionFor"](
            _0x1ab153.embedId,
            _0x3fae26,
          ) ||
          !sa(_0x2f5c91) ||
          _0x1ab153.container["contains"](_0x2f5c91) ||
          ((_0x2b40bd = _0x1ab153.chrome) != null &&
            _0x2b40bd.contains(_0x2f5c91)) ||
          _0x2f5c91.closest(
            '[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]',
          ) ||
          _0x1ab153.focusCoordinator["containsElement"](
            _0x1ab153.embedId,
            _0x2f5c91,
            _0x2c2f94,
          ) ||
          _0x1ab153.interactionBoundaryService["contains"](
            _0x1ab153.embedId,
            _0x2f5c91,
            _0x2c2f94,
          ) ||
          _0x1ab153.activationService["clearFloating"](
            _0x1ab153.embedId,
            _0x1ab153.hostUnitId,
          ));
    };
  return (
    document.addEventListener("pointerdown", _0x24d5bb, true),
    document.addEventListener("focusin", _0x709906, true),
    (0, a.toDisposable)(() => {
      (document.removeEventListener("pointerdown", _0x24d5bb, true),
        document.removeEventListener("focusin", _0x709906, true));
    })
  );
}
function ra(_0x1d6b42) {
  let _0x84c000,
    _0x4a30d7 = () => {
      _0x84c000 = undefined;
    },
    _0x47a4cd = (_0x5a1749) => {
      let _0x4d9a4f = ia(
        _0x1d6b42.embedModelService["getDescriptor"](
          _0x1d6b42.data["hostUnitId"],
          _0x1d6b42.data["embedId"],
        ),
        _0x1d6b42.data,
      );
      if (!(_0x4d9a4f != null && _0x4d9a4f.childUnitId)) return;
      let _0x37f7dd = _0x5a1749.target;
      (_0x37f7dd != null &&
        _0x37f7dd.closest(
          '[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]',
        )) ||
        (_0x1d6b42.floatingActiveService["getStage"](
          _0x1d6b42.data["embedId"],
        ) !== "stage2" &&
          (_0x84c000 = {
            button: _0x5a1749.button ?? 0,
            dragStarted: false,
            moved: false,
            pointerId: _0x5a1749.pointerId,
            startedAt: Date.now(),
            startX: _0x5a1749.clientX,
            startY: _0x5a1749.clientY,
          }));
    },
    _0x175798 = (_0x4d099f) => {
      if (
        !_0x84c000 ||
        _0x84c000.pointerId !== _0x4d099f.pointerId ||
        Math.hypot(
          _0x4d099f.clientX - _0x84c000.startX,
          _0x4d099f.clientY - _0x84c000.startY,
        ) <= 4
      )
        return;
      _0x84c000.moved = true;
      let _0x140ced = ir({
        interactionFlow: _0x1d6b42.interactionFlow,
        stage: _0x1d6b42.floatingActiveService["getStage"](
          _0x1d6b42.data["embedId"],
        ),
      });
      !_0x1d6b42.enableStage1BodyDrag ||
        _0x84c000.dragStarted ||
        !_0x140ced.allowHostBodyDrag ||
        ((_0x84c000.dragStarted = true),
        document.dispatchEvent(
          new CustomEvent(zi, {
            detail: {
              button: _0x84c000.button,
              clientX: _0x84c000.startX,
              clientY: _0x84c000.startY,
              embedId: _0x1d6b42.data["embedId"],
              hostAnchorId: _0x1d6b42.data["hostAnchorId"],
              hostUnitId: _0x1d6b42.data["hostUnitId"],
              pointerId: _0x84c000.pointerId,
            },
          }),
        ));
    },
    _0x533705 = (_0x5ce0c8) => {
      let _0x512431 = _0x84c000;
      if (
        ((_0x84c000 = undefined),
        !_0x512431 ||
          _0x512431.pointerId !== _0x5ce0c8.pointerId ||
          _0x512431.moved ||
          Date.now() - _0x512431.startedAt > 500)
      )
        return;
      let _0x6c169d = ia(
        _0x1d6b42.embedModelService["getDescriptor"](
          _0x1d6b42.data["hostUnitId"],
          _0x1d6b42.data["embedId"],
        ),
        _0x1d6b42.data,
      );
      if (!(_0x6c169d != null && _0x6c169d.childUnitId)) return;
      let _0x2f4c33 = _0x1d6b42.floatingActiveService["getStage"](
        _0x1d6b42.data["embedId"],
      );
      if (_0x2f4c33 !== "stage2") {
        if (_0x2f4c33 === "stage1") {
          _0x1d6b42.activationService["activateFloating"](_0x6c169d, "stage2", {
            portalContainer: _0x1d6b42.popupRoot,
          });
          return;
        }
        if (_0x1d6b42.interactionFlow === "doc-block") {
          (_0x1d6b42.acquireStage2SessionLease(),
            _0x1d6b42.activationService["activateFloating"](
              _0x6c169d,
              "stage2",
              { portalContainer: _0x1d6b42.popupRoot },
            ),
            _0x1d6b42.releaseStage2SessionLeaseIfActivationDoesNotStick());
          return;
        }
        _0x1d6b42.activationService["activateFloating"](_0x6c169d, "stage1");
      }
    };
  return (
    _0x1d6b42.gate["addEventListener"]("pointerdown", _0x47a4cd, true),
    _0x1d6b42.gate["addEventListener"]("pointermove", _0x175798, true),
    _0x1d6b42.gate["addEventListener"]("pointerup", _0x533705, true),
    _0x1d6b42.gate["addEventListener"]("pointercancel", _0x4a30d7, true),
    (0, a.toDisposable)(() => {
      (_0x1d6b42.gate["removeEventListener"]("pointerdown", _0x47a4cd, true),
        _0x1d6b42.gate["removeEventListener"]("pointermove", _0x175798, true),
        _0x1d6b42.gate["removeEventListener"]("pointerup", _0x533705, true),
        _0x1d6b42.gate["removeEventListener"](
          "pointercancel",
          _0x4a30d7,
          true,
        ));
    })
  );
}
function ia(_0x583601, _0x1f86fb) {
  return !_0x583601 ||
    _0x583601.childUnitId ||
    !_0x1f86fb.childUnitId ||
    _0x1f86fb.childType == null
    ? _0x583601
    : {
        ..._0x583601,
        childType: _0x1f86fb.childType,
        childUnitId: _0x1f86fb.childUnitId,
      };
}
function aa(_0x298a3b) {
  let _0x532201 = () => {
      let _0x495eb5 = _0x298a3b.liveRoot["ownerDocument"].activeElement;
      return (
        !!_0x495eb5 &&
        _0x298a3b
          .getRuntimeRoots()
          .some((_0x3ed04c) => _0x3ed04c.contains(_0x495eb5))
      );
    },
    _0x14bfe0 = (_0x57aef7, _0x25be22 = false, _0x26bdea = false) => {
      (_0x298a3b.data["embedId"] &&
        _0x298a3b.floatingActiveService["getStage"](
          _0x298a3b.data["embedId"],
        ) !== "stage2") ||
        (Qi(_0x298a3b.data["childType"], _0x26bdea) &&
          (_0x298a3b.focusCoordinator["hasBlockingChildFocusLease"](
            _0x298a3b.data["embedId"],
            { ignoreOwners: _0x298a3b.runtimeFocusOwners },
          ) ||
            (!_0x25be22 && _0x532201()) ||
            (_0x57aef7.hasAttribute("tabindex") || (_0x57aef7.tabIndex = -1),
            _0x57aef7.focus({ preventScroll: true }))));
    },
    _0x10614b = (_0xe7ca7c) => {
      let _0x3233f8 = _0x298a3b.data["embedId"]
        ? _0x298a3b.floatingActiveService["getStage"](_0x298a3b.data["embedId"])
        : "inactive";
      if (_0x298a3b.data["embedId"] && _0x3233f8 !== "stage2") {
        if (
          _0x298a3b.interactionFlow !== "doc-block" ||
          !_0x298a3b.data["hostUnitId"]
        )
          return;
        let _0x309331 = ia(
          _0x298a3b.embedModelService["getDescriptor"](
            _0x298a3b.data["hostUnitId"],
            _0x298a3b.data["embedId"],
          ),
          _0x298a3b.data,
        );
        if (!(_0x309331 != null && _0x309331.childUnitId)) return;
        (_0x298a3b.acquireStage2SessionLease(),
          _0x298a3b.activationService["activateFloating"](_0x309331, "stage2", {
            portalContainer: _0x298a3b.popupRoot,
          }),
          _0x298a3b.releaseStage2SessionLeaseIfActivationDoesNotStick());
      }
      if (
        $i(_0xe7ca7c.target) ||
        _0x298a3b.focusCoordinator["hasBlockingChildFocusLease"](
          _0x298a3b.data["embedId"],
          { ignoreOwners: _0x298a3b.runtimeFocusOwners },
        )
      )
        return;
      if (_0x298a3b.data["hostUnitId"] && _0x298a3b.data["embedId"]) {
        let _0x5222aa = ia(
          _0x298a3b.embedModelService["getDescriptor"](
            _0x298a3b.data["hostUnitId"],
            _0x298a3b.data["embedId"],
          ),
          _0x298a3b.data,
        );
        (_0x5222aa == null ? undefined : _0x5222aa.childUnitId) != null &&
          _0x5222aa.childType != null &&
          _0x298a3b.activationService["focusFloatingRuntime"](_0x5222aa);
      }
      let _0x1b13ab = Zi(_0x298a3b.getRuntimeRoots(), _0xe7ca7c.target);
      _0x1b13ab && _0x14bfe0(_0x1b13ab, true, _0xe7ca7c.target === _0x1b13ab);
    };
  return (
    _0x298a3b.liveRoot["addEventListener"]("pointerdown", _0x10614b, true),
    (0, a.toDisposable)(() =>
      _0x298a3b.liveRoot["removeEventListener"]("pointerdown", _0x10614b, true),
    )
  );
}
function oa(_0x32e5ae) {
  let _0x582379 = _0x32e5ae.liveRoot["ownerDocument"],
    _0x1b232a,
    _0x195b92 = () => {
      _0x1b232a != null &&
        (globalThis.clearTimeout(_0x1b232a), (_0x1b232a = undefined));
    },
    _0x4e1f26 = () => {
      var _0x53c201;
      (_0x195b92(),
        (_0x53c201 = _0x32e5ae.pointerLease["current"]) == null ||
          _0x53c201.dispose(),
        (_0x32e5ae.pointerLease["current"] = undefined));
    },
    _0x2ce90f = () => {
      (globalThis.queueMicrotask(() => {
        _0x32e5ae.verticalScrollOwner["current"] = undefined;
      }),
        _0x195b92(),
        (_0x1b232a = globalThis.setTimeout(() => {
          var _0x490ccf;
          ((_0x1b232a = undefined),
            (_0x490ccf = _0x32e5ae.pointerLease["current"]) == null ||
              _0x490ccf.dispose(),
            (_0x32e5ae.pointerLease["current"] = undefined));
        }, _0x32e5ae.graceMs)));
    },
    _0x58c2fb = (_0x4e73c1) => {
      (_0x4e1f26(),
        (_0x32e5ae.pointerLease["current"] = _0x32e5ae.focusCoordinator[
          "acquireLease"
        ]({
          childType: _0x32e5ae.data["childType"],
          childUnitId: _0x32e5ae.data["childUnitId"],
          embedId: _0x32e5ae.data["embedId"],
          hostUnitId: _0x32e5ae.data["hostUnitId"],
          owner: "runtime-pointer",
          role: _0x4e73c1,
        })));
    },
    _0x21674b = () => {
      _0x32e5ae.floatingActiveService["getStage"](_0x32e5ae.data["embedId"]) ===
        "stage2" && _0x58c2fb("child-editor");
    },
    _0x2cb651 = (_0x54f68f) => {
      let _0x35ee7f = _0x54f68f.target,
        _0x8bdcd4 =
          (_0x35ee7f instanceof Node &&
            _0x32e5ae.liveRoot["contains"](_0x35ee7f)) ||
          _0x32e5ae.focusCoordinator["containsElement"](
            _0x32e5ae.data["embedId"],
            _0x35ee7f,
            _0x54f68f,
          ) ||
          _0x32e5ae.interactionBoundaryService["contains"](
            _0x32e5ae.data["embedId"],
            _0x35ee7f,
            _0x54f68f,
          );
      _0x32e5ae.verticalScrollOwner["current"] = _0x8bdcd4 ? "child" : "host";
    },
    _0x4504da = (_0xd73ebb) => {
      if (
        _0x32e5ae.floatingActiveService["getStage"](
          _0x32e5ae.data["embedId"],
        ) !== "stage2" ||
        !(
          _0x32e5ae.focusCoordinator["containsElement"](
            _0x32e5ae.data["embedId"],
            _0xd73ebb.target,
            _0xd73ebb,
          ) ||
          _0x32e5ae.interactionBoundaryService["contains"](
            _0x32e5ae.data["embedId"],
            _0xd73ebb.target,
            _0xd73ebb,
          )
        )
      )
        return;
      _0x32e5ae.ownedPointerInteractionUntil["current"] =
        Date.now() + _0x32e5ae.graceMs;
      let _0x4f8e69 = ea(_0xd73ebb.target) ?? "child-editor";
      _0x58c2fb(
        _0x4f8e69 === "runtime" ||
          _0x4f8e69 === "child-session" ||
          _0x4f8e69 === "floating-menu"
          ? "child-editor"
          : _0x4f8e69,
      );
    };
  return (
    _0x32e5ae.liveRoot["addEventListener"]("pointerdown", _0x21674b, true),
    _0x582379.addEventListener("pointerdown", _0x2cb651, true),
    _0x582379.addEventListener("pointerdown", _0x4504da, true),
    _0x582379.addEventListener("pointerup", _0x2ce90f, true),
    _0x582379.addEventListener("pointercancel", _0x2ce90f, true),
    (0, a.toDisposable)(() => {
      (_0x32e5ae.liveRoot["removeEventListener"](
        "pointerdown",
        _0x21674b,
        true,
      ),
        _0x582379.removeEventListener("pointerdown", _0x2cb651, true),
        _0x582379.removeEventListener("pointerdown", _0x4504da, true),
        _0x582379.removeEventListener("pointerup", _0x2ce90f, true),
        _0x582379.removeEventListener("pointercancel", _0x2ce90f, true),
        (_0x32e5ae.verticalScrollOwner["current"] = undefined),
        _0x4e1f26());
    })
  );
}
function sa(_0x5c90f5) {
  return (
    _0x5c90f5.id === "univer-doc-main-canvas" ||
    _0x5c90f5.id["startsWith"]("__editor_docs-") ||
    _0x5c90f5.id["startsWith"]("univer-doc-selection-container-docs-") ||
    _0x5c90f5.closest(
      '#univer-doc-main-canvas, [id^="__editor_docs-"], [id^="univer-doc-selection-container-docs-"]',
    ) != null
  );
}
function ca(_0x26e03b, _0x1c40a8) {
  if (!_0x26e03b || _0x1c40a8.length === 0) return;
  let _0x2a963a = _0x1c40a8[0].ownerDocument["activeElement"];
  _0x2a963a instanceof HTMLElement &&
    (_0x1c40a8.some((_0x4cc1b7) => _0x4cc1b7.contains(_0x2a963a)) ||
      _0x2a963a.closest(
        '[data-embed-interaction-boundary-owner="' + _0x26e03b + "\x22]",
      ) != null) &&
    _0x2a963a.blur();
}
function la(_0x2e169c) {
  let {
      ownerDocument: _0xd22ec9,
      restore: _0x400ddc,
      shouldRestore: _0x310c57,
      timeoutMs: _0xde667e = 1000,
    } = _0x2e169c,
    _0x41584b,
    _0x35fc49 = (_0x85b369) => {
      _0x310c57(_0x85b369.target) && _0x400ddc();
    },
    _0x2b34db = () => {
      (_0xd22ec9.removeEventListener("focusin", _0x35fc49, true),
        _0xd22ec9.removeEventListener("pointerdown", _0x2b34db, true),
        _0x41584b != null &&
          (globalThis.clearTimeout(_0x41584b), (_0x41584b = undefined)));
    };
  return (
    _0xd22ec9.addEventListener("focusin", _0x35fc49, true),
    _0xd22ec9.addEventListener("pointerdown", _0x2b34db, true),
    (_0x41584b = globalThis.setTimeout(_0x2b34db, _0xde667e)),
    (0, a.toDisposable)(_0x2b34db)
  );
}
function ua(_0x1f41c6) {
  return (
    _0x1f41c6 === "runtime" ||
    _0x1f41c6 === "child-session" ||
    _0x1f41c6 === "child-editor" ||
    _0x1f41c6 === "child-popup" ||
    _0x1f41c6 === "floating-menu"
  );
}
function da(_0x2f0024) {
  let {
      children: _0xae40e7,
      placement: _0x460bb9 = "top",
      title: _0x397356,
    } = _0x2f0024,
    [_0xefe260, _0x546aa1] = (0, d.useState)(false),
    _0x186322 = (0, d.useRef)(null),
    _0x27f222 = (0, d.useCallback)(() => {
      _0x186322.current !== null &&
        (clearTimeout(_0x186322.current), (_0x186322.current = null));
    }, []),
    _0x526e86 = (_0x229ddc) => {
      (_0x27f222(),
        _0x229ddc
          ? (_0x186322.current = setTimeout(() => _0x546aa1(true), 100))
          : _0x546aa1(false));
    };
  return (
    (0, d.useEffect)(() => _0x27f222, [_0x27f222]),
    (0, m.jsx)(l.Tooltip, {
      title: _0x397356,
      placement: _0x460bb9,
      visible: _0xefe260,
      onVisibleChange: _0x526e86,
      children: (0, m.jsx)("span", {
        className: "univer-inline-flex univer-max-w-full univer-items-center",
        onFocus: (_0x282618) => _0x282618.stopPropagation(),
        onPointerDown: () => _0x526e86(false),
        children: _0xae40e7,
      }),
    })
  );
}
function fa(_0x2d5a5b) {
  let {
      hostUnitId: _0x4c0bd0,
      embedId: _0x18de73,
      className: _0x540521,
      variant: _0x1427c = "float",
    } = _0x2d5a5b,
    _0x411c18 = (0, d.useRef)(null),
    _0x3fe07b = (0, c.useDependency)(t.EmbedModelService),
    _0x297ad8 = (0, c.useDependency)(Gt),
    _0x215ba5 = (0, c.useDependency)(Zn),
    _0x350835 = (0, c.useDependency)(a.LocaleService).t(
      "embed-ui.fullscreen.enter",
    ),
    _0x812080 = (0, d.useCallback)(
      (_0x32b6f6) => {
        (_0x32b6f6.preventDefault(),
          _0x32b6f6.stopPropagation(),
          !(!_0x4c0bd0 || !_0x18de73) &&
            pa({
              hostUnitId: _0x4c0bd0,
              embedId: _0x18de73,
              activationService: _0x297ad8,
              embedModelService: _0x3fe07b,
              fullscreenService: _0x215ba5,
            }));
      },
      [_0x297ad8, _0x18de73, _0x3fe07b, _0x215ba5, _0x4c0bd0],
    );
  return (
    (0, d.useEffect)(() => {
      let _0x179bb8 = _0x411c18.current;
      if (!_0x179bb8) return;
      let _0x541237 = (_0x6ec30f) => {
        _0x6ec30f.stopPropagation();
      };
      return (
        _0x179bb8.addEventListener("pointerdown", _0x541237),
        _0x179bb8.addEventListener("click", _0x812080),
        () => {
          (_0x179bb8.removeEventListener("pointerdown", _0x541237),
            _0x179bb8.removeEventListener("click", _0x812080));
        }
      );
    }, [_0x812080, _0x1427c]),
    _0x1427c === "menu"
      ? (0, m.jsx)(da, {
          title: _0x350835,
          children: (0, m.jsx)(l.Button, {
            ref: _0x411c18,
            type: "button",
            size: "small",
            variant: "ghost",
            className: (0, l.clsx)("univer-size-6 univer-p-0", _0x540521),
            "aria-label": _0x350835,
            children: (0, m.jsx)(u.ExpandIcon, {}),
          }),
        })
      : (0, m.jsx)("button", {
          ref: _0x411c18,
          type: "button",
          className: (0, l.clsx)(
            "univer-absolute\x20univer-right-2\x20univer-top-2\x20univer-z-10\x20univer-inline-flex\x20univer-size-8\x20univer-cursor-pointer\x20univer-appearance-none\x20univer-items-center\x20univer-justify-center\x20univer-rounded-md\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-text-white\x20univer-opacity-0\x20univer-transition-opacity\x20univer-duration-150\x20before:univer-absolute\x20before:univer-inset-0\x20before:univer-rounded-md\x20before:univer-bg-primary-600\x20before:univer-opacity-[0.45]\x20before:univer-transition-opacity\x20before:univer-duration-150\x20before:univer-content-[\x27\x27]\x20hover:before:univer-opacity-60\x20focus-visible:univer-opacity-100\x20focus-visible:univer-outline-none\x20focus-visible:univer-ring-2\x20focus-visible:univer-ring-primary-600\x20dark:!univer-text-gray-900",
            _0x540521,
          ),
          "data-embed-float-fullscreen-button": "true",
          title: _0x350835,
          "aria-label": _0x350835,
          children: (0, m.jsx)(u.ExpandIcon, {
            className:
              "univer-relative\x20univer-z-10\x20univer-size-[18px]\x20univer-drop-shadow-sm",
            "aria-hidden": "true",
          }),
        })
  );
}
function pa(_0x50b55f) {
  var _0x15ccf5;
  let _0x4bb4b8 = _0x50b55f.embedModelService["getDescriptor"](
    _0x50b55f.hostUnitId,
    _0x50b55f.embedId,
  );
  return !(_0x4bb4b8 != null && _0x4bb4b8.childUnitId) ||
    _0x4bb4b8.childType == null
    ? false
    : ((_0x15ccf5 = _0x50b55f.activationService) == null ||
        _0x15ccf5.clearFloating(_0x50b55f.embedId, _0x50b55f.hostUnitId),
      _0x50b55f.fullscreenService["enter"](_0x4bb4b8),
      true);
}
const ma = "stage2-runtime",
  ha = "doc-block-stage2-runtime",
  ga = [ma, ha];
function _a(_0x51b669) {
  var _0x5deaa6, _0x470e39, _0x2f02f8;
  let {
      data: _0x42698c,
      deferInactiveFloatingChrome: _0x4ba5b5,
      docsCustomBlockLayout: _0x315242,
      enableStage1BodyDrag: _0x534e23,
      floatingChromeZIndex: _0x43d9ba,
      hostFloatDomLayout$: _0x445095,
      initialStage: _0x17f29e,
      interactionFlow: _0x4e8ef7 = "floating-stage",
      isExternalHostInteraction: _0x4d3d23,
      onHostWheel: _0x462510,
      onRuntimeStageEnter: _0x117bb1,
      onRuntimeStageExit: _0x3df40f,
      resolveHostWheelGestureRoot: _0x4f7af8,
      syncHostVerticalScroll: _0x10fcf2,
    } = _0x51b669,
    _0xac8d37 = (0, d.useRef)(null),
    _0x49cbf0 = (0, d.useRef)(null),
    _0x5bef30 = (0, d.useRef)(null),
    _0x565509 = (0, d.useRef)(null),
    _0xf17694 = (0, d.useRef)(null),
    _0x5e8ed8 = (0, d.useRef)(null),
    _0x4eca6a = (0, d.useRef)(null),
    _0x4266bf = (0, d.useRef)(null),
    _0x4fd88f = (0, d.useRef)(null),
    _0x3c1f6e = (0, c.useDependency)(t.EmbedModelService),
    _0x2196f8 = (0, c.useDependency)(gt),
    _0x11ffa7 = (0, c.useDependency)(ce),
    _0x1bf76a = (0, c.useDependency)(Gt),
    _0x282cc1 = (0, c.useDependency)(Ur),
    _0x4592c9 = (0, c.useDependency)(Wr),
    _0x33889d = (0, c.useDependency)(Zn),
    _0x3e9531 = (0, c.useDependency)(J),
    _0x4f09d5 = (0, c.useDependency)(Ht),
    _0x2640b7 = (0, c.useDependency)(Gr),
    _0x512dd6 = (0, c.useDependency)(ai),
    _0x15e98b = (0, c.useDependency)(ii),
    _0x3d2286 = (0, c.useDependency)(K),
    _0x1b4359 = (0, c.useDependency)(Xr),
    _0x13dcf8 = (0, c.useDependency)(a.ICommandService),
    _0x45475e = (0, c.useDependency)(a.IUniverInstanceService),
    _0x1c0573 = (0, c.useDependency)(c.ILayoutService),
    _0x3e5ac3 = oi(_0x42698c),
    _0x562e8c =
      _0x315242 != null && _0x315242.sheetLike ? _0x315242 : undefined,
    _0x2bb145 = _0x562e8c == null ? undefined : _0x562e8c.contentWidth,
    _0xc06535 = _0x562e8c == null ? undefined : _0x562e8c.pageContentWidth,
    _0x5b5e38 = (_0x562e8c == null ? undefined : _0x562e8c.viewScale) ?? 1,
    [_0x1aa179, _0x5de0f2] = (0, d.useState)(0),
    [_0x4f94de, _0x152a40] = (0, d.useState)(0),
    _0x1cf122 = _0x562e8c ? pi(_0x562e8c) : undefined,
    _0x2703a1 = Math.min(
      _0x4f94de,
      (_0x1cf122 == null ? undefined : _0x1cf122.maxExpansion) ?? 0,
    ),
    _0x19cfac = (0, c.useObservable)(
      () =>
        _0x11ffa7.active$["pipe"](
          (0, f.map)(() =>
            _0x3e5ac3 != null && _0x3e5ac3.embedId
              ? _0x11ffa7.getStage(_0x3e5ac3.embedId)
              : "inactive",
          ),
        ),
      _0x17f29e ??
        (_0x3e5ac3 != null && _0x3e5ac3.embedId
          ? _0x11ffa7.getStage(_0x3e5ac3.embedId)
          : "inactive"),
      false,
      [_0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId, _0x11ffa7],
    ),
    _0x4d4f44 = (0, d.useRef)(_0x19cfac),
    _0x363805 = (0, d.useRef)(false),
    _0x411c67 = (0, d.useRef)(undefined),
    _0x361483 = (0, d.useRef)(undefined),
    _0x153e68 = (0, d.useRef)(undefined),
    _0x5ce8a9 = (0, d.useRef)(undefined),
    _0x26b25d = (0, d.useRef)(undefined),
    _0x25512d = (0, d.useRef)(0),
    _0x3f10a5 = (0, d.useRef)(undefined),
    _0x304778 = (0, d.useRef)(false),
    _0x1dd1a3 = (0, d.useRef)(false),
    _0x75db64 = (0, d.useRef)(_0x2703a1),
    _0x3bd804 = (0, d.useRef)(_0x1cf122),
    _0x2f480e = (0, d.useRef)(_0x5b5e38),
    _0x581765 = (0, d.useRef)(0),
    _0x2e93d4 = (0, d.useRef)(0),
    _0x32ba11 = (0, d.useRef)([]),
    _0x56ffaf = (0, d.useRef)(_0x19cfac);
  ((_0x56ffaf.current = _0x19cfac),
    (_0x75db64.current = _0x2703a1),
    (_0x3bd804.current = _0x1cf122),
    (_0x2f480e.current = _0x5b5e38));
  let _0x4d745d = (0, d.useCallback)((_0x429711) => {
      let _0x4cef0b = _0x3bd804.current;
      if (!_0x4cef0b) return false;
      let _0x3e56e1 = _0x75db64.current,
        _0x122fcc = mi(
          _0x3e56e1 + Or(_0x429711) / _0x2f480e.current,
          0,
          _0x4cef0b.maxExpansion,
        );
      return _0x122fcc === _0x3e56e1
        ? false
        : ((_0x75db64.current = _0x122fcc), _0x152a40(_0x122fcc), true);
    }, []),
    _0x5a9f45 = (0, d.useCallback)(
      (_0xe3c3eb, _0x1aa5d3) =>
        $r(_0xe3c3eb, _0x1aa5d3, {
          commandService: _0x13dcf8,
          univerInstanceService: _0x45475e,
        })
          ? true
          : (_0x462510 == null
              ? undefined
              : _0x462510(_0xe3c3eb, _0x1aa5d3)) === true,
      [_0x13dcf8, _0x462510, _0x45475e],
    ),
    _0x33799f = (0, d.useCallback)(() => {
      var _0x31fc29;
      ((_0x31fc29 = _0x361483.current) == null || _0x31fc29.dispose(),
        (_0x361483.current = undefined));
    }, []),
    _0x5371d5 = (0, d.useCallback)(() => {
      var _0x32f2b7, _0x443fed;
      if (!(_0x3e5ac3 != null && _0x3e5ac3.embedId) || _0x361483.current)
        return;
      let _0x3ca0be = _0x3e5ac3.hostUnitId
          ? _0x3c1f6e.getDescriptor(_0x3e5ac3.hostUnitId, _0x3e5ac3.embedId)
          : undefined,
        _0x110a56 = va(_0x3ca0be),
        _0x991e2f =
          _0x3e5ac3.childUnitId ??
          (_0x3ca0be == null ? undefined : _0x3ca0be.childUnitId) ??
          ((_0x32f2b7 = _0x411c67.current) == null
            ? undefined
            : _0x32f2b7.childUnitId) ??
          (_0x110a56 == null ? undefined : _0x110a56.childUnitId),
        _0x13fc64 =
          _0x3e5ac3.childType ??
          (_0x3ca0be == null ? undefined : _0x3ca0be.childType) ??
          ((_0x443fed = _0x411c67.current) == null
            ? undefined
            : _0x443fed.childType) ??
          (_0x110a56 == null ? undefined : _0x110a56.childType);
      _0x361483.current = _0x3d2286.acquireLease({
        embedId: _0x3e5ac3.embedId,
        role: "child-session",
        owner: _0x4e8ef7 === "doc-block" ? ha : ma,
        sessionMode: "child-keyboard",
        hostUnitId: _0x3e5ac3.hostUnitId,
        childUnitId: _0x991e2f,
        childType: _0x13fc64,
      });
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.childType,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.childUnitId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x3c1f6e,
      _0x3d2286,
      _0x4e8ef7,
    ]),
    _0x4cd16b = (0, d.useCallback)(() => {
      if (!(_0x3e5ac3 != null && _0x3e5ac3.embedId)) return;
      let _0x3562c4 = _0x3e5ac3.embedId;
      window.requestAnimationFrame(() => {
        _0x11ffa7.getStage(_0x3562c4) !== "stage2" && _0x33799f();
      });
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x11ffa7,
      _0x33799f,
    ]),
    _0x2d1ade =
      _0x3e5ac3 != null && _0x3e5ac3.hostUnitId
        ? _0x3c1f6e.getDescriptor(_0x3e5ac3.hostUnitId, _0x3e5ac3.embedId)
        : undefined,
    _0x4a3ef9 = va(_0x2d1ade),
    _0x5c8dd3 =
      (_0x3e5ac3 == null ? undefined : _0x3e5ac3.childUnitId) ??
      (_0x2d1ade == null ? undefined : _0x2d1ade.childUnitId) ??
      ((_0x5deaa6 = _0x411c67.current) == null
        ? undefined
        : _0x5deaa6.childUnitId) ??
      (_0x4a3ef9 == null ? undefined : _0x4a3ef9.childUnitId),
    _0x570108 =
      (_0x3e5ac3 == null ? undefined : _0x3e5ac3.childType) ??
      (_0x2d1ade == null ? undefined : _0x2d1ade.childType) ??
      ((_0x470e39 = _0x411c67.current) == null
        ? undefined
        : _0x470e39.childType) ??
      (_0x4a3ef9 == null ? undefined : _0x4a3ef9.childType),
    _0x2cb333 =
      _0x570108 == null || (_0x2f02f8 = _0x2196f8.get(_0x570108)) == null
        ? undefined
        : _0x2f02f8.canvasRootClassName,
    _0x3a6e91 = or(_0x2d1ade, _0x19cfac);
  ((0, d.useEffect)(() => {
    let _0x4210f8 = _0xac8d37.current;
    return () => {
      let _0x329271 = _0x33889d.getSession(),
        _0x567dcf =
          (_0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId) &&
          (_0x329271 == null ? undefined : _0x329271.embedId) ===
            _0x3e5ac3.embedId;
      _0x3e5ac3 != null &&
        _0x3e5ac3.embedId &&
        !(_0x4210f8 != null && _0x4210f8.isConnected) &&
        !_0x567dcf &&
        _0x11ffa7.getStage(_0x3e5ac3.embedId) !== "inactive" &&
        _0x1bf76a.clearFloating(_0x3e5ac3.embedId, _0x3e5ac3.hostUnitId);
    };
  }, [
    _0x1bf76a,
    _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
    _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
    _0x11ffa7,
    _0x33889d,
  ]),
    (0, d.useEffect)(() => {
      if (!(
        !(_0x3e5ac3 != null && _0x3e5ac3.embedId) || _0x19cfac !== "stage2"
      ))
        return (_0x5371d5(), _0x33799f);
    }, [
      _0x5371d5,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x33799f,
      _0x19cfac,
    ]),
    (0, d.useEffect)(() => {
      let _0x30b0a9 = _0xac8d37.current,
        _0x46fa66 = ta(
          _0x1c0573,
          _0x3d2286,
          _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
          _0x30b0a9,
          _0x19cfac,
        );
      if (_0x46fa66) return () => _0x46fa66.dispose();
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3d2286,
      _0x1c0573,
      _0x19cfac,
    ]),
    (0, d.useEffect)(() => {
      let _0x3c90a9 = _0x565509.current;
      if (
        _0x19cfac !== "stage2" ||
        _0x570108 !== a.UniverInstanceType["UNIVER_BASE"] ||
        !(_0x3e5ac3 != null && _0x3e5ac3.embedId) ||
        !_0x3c90a9
      )
        return;
      let _0x3ffb7c = () => Yt(_0x3e5ac3.embedId, _0x3c90a9);
      _0x3ffb7c();
      let _0x2e7ea7 = window.requestAnimationFrame(_0x3ffb7c);
      return () => window.cancelAnimationFrame(_0x2e7ea7);
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x570108,
      _0x19cfac,
    ]),
    (0, d.useEffect)(() => {
      let _0x45b538 = _0x4d4f44.current;
      _0x4d4f44.current = _0x19cfac;
      let _0x39db7d =
        _0x45b538 !== _0x19cfac ||
        (!_0x363805.current && _0x19cfac !== "inactive");
      ((_0x363805.current = true),
        _0x39db7d &&
          (_0x117bb1 == null || _0x117bb1(_0x19cfac),
          _0x4592c9.invalidate({
            embedId: _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
            reason: "stage-change",
          })),
        _0x45b538 === "stage2" &&
          _0x19cfac !== "stage2" &&
          (ca(
            _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
            Bi(
              _0x565509.current,
              _0xf17694.current,
              _0x5e8ed8.current,
              _0x4266bf.current,
              _0x4fd88f.current,
            ),
          ),
          _0x1bf76a.clearFloating(
            _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
            _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
          ),
          _0x3df40f == null || _0x3df40f()));
    }, [
      _0x1bf76a,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x4592c9,
      _0x117bb1,
      _0x3df40f,
      _0x19cfac,
    ]),
    (0, d.useEffect)(() => {
      if (
        _0x17f29e !== "stage2" ||
        !(_0x3e5ac3 != null && _0x3e5ac3.embedId) ||
        !_0x3e5ac3.hostUnitId
      )
        return;
      let _0x2ead77 = _0x3c1f6e.getDescriptor(
        _0x3e5ac3.hostUnitId,
        _0x3e5ac3.embedId,
      );
      _0x2ead77 != null &&
        _0x2ead77.childUnitId &&
        _0x11ffa7.activate(
          {
            hostUnitId: _0x3e5ac3.hostUnitId,
            embedId: _0x3e5ac3.embedId,
            childUnitId: _0x2ead77.childUnitId,
          },
          "stage2",
        );
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x3c1f6e,
      _0x11ffa7,
      _0x17f29e,
    ]),
    (0, d.useEffect)(() => {
      let _0x1323ef = _0x565509.current,
        _0x3389d7 = _0xf17694.current,
        _0x274ff3 = _0x5e8ed8.current,
        _0x3156ae = _0x4266bf.current,
        _0x1ca983 = _0x4fd88f.current;
      if (!_0x1323ef || !_0x3389d7 || !_0x274ff3 || !_0x3156ae || !_0x1ca983)
        return;
      let _0x5ed288 =
          _0x3e5ac3 != null && _0x3e5ac3.hostUnitId
            ? _0x3c1f6e.getDescriptor(_0x3e5ac3.hostUnitId, _0x3e5ac3.embedId)
            : undefined,
        _0x29c737 = _0x5ed288 ? ya(_0x5ed288) : undefined;
      if (!_0x5ed288 || !_0x29c737 || _0x3a6e91 === "deferred") return;
      let _0x22452e = false,
        _0x5aa3ee;
      return (
        _0x2640b7
          .materializeDescriptor({ descriptor: _0x5ed288 })
          .then(async (_0x12f11e) => {
            var _0x2afad6;
            if (_0x22452e) return;
            let _0x4b5f03 = _0x4f09d5.mountIntoHostElement(
              _0x12f11e,
              _0x1323ef,
              {
                content: _0x3389d7,
                canvas: _0x274ff3,
                overlay: _0x3156ae,
                popup: _0x1ca983,
              },
            );
            _0x5aa3ee = _0x12f11e.embedId;
            let _0xd4dd65 = _0x4b5f03 == null ? undefined : _0x4b5f03.context;
            _0x411c67.current = _0xd4dd65;
            let _0x2ccb7a =
              _0x3e5ac3 != null && _0x3e5ac3.embedId
                ? (_0x2afad6 = _0x282cc1.getPreview(_0x3e5ac3.embedId)) == null
                  ? undefined
                  : _0x2afad6.viewState
                : undefined;
            _0xd4dd65 &&
              _0x2ccb7a != null &&
              (await _0x282cc1.restoreViewState(_0xd4dd65, _0x2ccb7a));
          })
          .catch((_0x37787b) => {
            queueMicrotask(() => {
              throw _0x37787b;
            });
          }),
        () => {
          var _0x1809ec;
          ((_0x22452e = true),
            _0x5aa3ee &&
              ((_0x1809ec = _0x411c67.current) == null
                ? undefined
                : _0x1809ec.embedId) === _0x5aa3ee &&
              (_0x411c67.current = undefined),
            _0x4f09d5.unmount(_0x5ed288.embedId));
        }
      );
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x3c1f6e,
      _0x4f09d5,
      _0x1aa179,
      _0x282cc1,
      _0x2640b7,
      _0x3a6e91,
    ]),
    (0, d.useEffect)(() => {
      if (!(_0x3e5ac3 != null && _0x3e5ac3.embedId)) return;
      let _0x4277ed = _0x3e5ac3.embedId,
        _0xb05886 = [];
      [
        { element: _0x565509.current, role: "runtime" },
        { element: _0xf17694.current, role: "runtime" },
        { element: _0x5e8ed8.current, role: "runtime" },
      ].forEach((_0x98f146) => {
        let _0x12e112 = _0x98f146.element;
        _0x12e112 &&
          _0xb05886.push({ element: _0x12e112, role: _0x98f146.role });
      });
      let _0x4a28a3 = _0xb05886.flatMap(
          ({ element: _0x4a398d, role: _0x1c6520 }) => [
            _0x3e9531.registerRoot(_0x4277ed, _0x4a398d, _0x5c8dd3),
            _0x3d2286.registerElement({
              embedId: _0x4277ed,
              role: _0x1c6520,
              element: _0x4a398d,
            }),
          ],
        ),
        _0x4969f9 = _0x4eca6a.current;
      return (
        _0x4969f9 &&
          _0x4a28a3.push(
            _0x3e9531.registerRoot(_0x4277ed, _0x4969f9, _0x5c8dd3),
          ),
        _0x19cfac === "stage2" &&
          [
            { element: _0x4969f9, role: "floating-menu" },
            { element: _0x4266bf.current, role: "floating-menu" },
            { element: _0x4fd88f.current, role: "child-popup" },
          ].forEach((_0x1c99e2) => {
            _0x1c99e2.element &&
              _0x4a28a3.push(
                _0x3d2286.registerElement({
                  embedId: _0x4277ed,
                  role: _0x1c99e2.role,
                  element: _0x1c99e2.element,
                }),
              );
          }),
        () => _0x4a28a3.forEach((_0x2ee087) => _0x2ee087.dispose())
      );
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3d2286,
      _0x3e9531,
      _0x5c8dd3,
      _0x19cfac,
    ]),
    (0, d.useEffect)(() => {
      var _0xf59850, _0x4b45d1;
      if (!(_0x3e5ac3 != null && _0x3e5ac3.embedId) || _0x19cfac !== "stage2")
        return;
      let _0x26b596 =
          ((_0xf59850 = _0xac8d37.current) == null
            ? undefined
            : _0xf59850.ownerDocument) ??
          ((_0x4b45d1 = _0x565509.current) == null
            ? undefined
            : _0x4b45d1.ownerDocument) ??
          (typeof document > "u" ? undefined : document),
        _0x54acc9 = _0x3e9531.activatePortalScope(
          _0x3e5ac3.embedId,
          _0x26b596,
          {
            includeAppShellEditorPortal:
              _0x570108 === a.UniverInstanceType["UNIVER_SHEET"],
          },
        );
      return () => {
        (_0x56ffaf.current !== "stage2" &&
          _0x3e9531.closeOwnedFloatingSurfaces(_0x3e5ac3.embedId, _0x26b596),
          _0x54acc9.dispose());
      };
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e9531,
      _0x570108,
      _0x19cfac,
    ]),
    (0, d.useEffect)(() => {
      var _0x27ad30, _0x1cc67b;
      if (!(_0x3e5ac3 != null && _0x3e5ac3.embedId) || _0x19cfac !== "stage2")
        return;
      let _0xef5aa7 =
          ((_0x27ad30 = _0xac8d37.current) == null
            ? undefined
            : _0x27ad30.ownerDocument) ??
          ((_0x1cc67b = _0x565509.current) == null
            ? undefined
            : _0x1cc67b.ownerDocument) ??
          (typeof document > "u" ? undefined : document),
        _0x4ce261 =
          _0xef5aa7 == null
            ? undefined
            : _0xef5aa7.querySelector("[data-u-comp=\x22headerbar\x22]");
      if (!_0x4ce261) return;
      let _0x25ffa5 = [
        _0x3e9531.registerRoot(_0x3e5ac3.embedId, _0x4ce261, _0x5c8dd3),
        _0x3d2286.registerElement({
          embedId: _0x3e5ac3.embedId,
          role: "floating-menu",
          element: _0x4ce261,
        }),
      ];
      return () => _0x25ffa5.forEach((_0x58e197) => _0x58e197.dispose());
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3d2286,
      _0x3e9531,
      _0x5c8dd3,
      _0x19cfac,
    ]),
    (0, d.useEffect)(() => {
      let _0x44bdf1 = _0xac8d37.current,
        _0x582c8d =
          _0x44bdf1 == null
            ? undefined
            : _0x44bdf1.querySelector(
                '[data-u-comp="embed-float-dom-content"]',
              );
      if (!(_0x3e5ac3 != null && _0x3e5ac3.embedId) || !_0x44bdf1) return;
      let _0x1153b9 = _0x3e5ac3.hostUnitId
          ? _0x3c1f6e.getDescriptor(_0x3e5ac3.hostUnitId, _0x3e5ac3.embedId)
          : undefined,
        _0x44dd73 = _0x4592c9.register({
          embedId: _0x3e5ac3.embedId,
          childUnitId: _0x1153b9 == null ? undefined : _0x1153b9.childUnitId,
          root: _0x44bdf1,
          viewport: _0x582c8d,
          contentRoot: _0xf17694.current,
        });
      return () => _0x44dd73.dispose();
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x3c1f6e,
      _0x4592c9,
    ]),
    (0, d.useEffect)(() => {
      var _0x2e4e21, _0x15ddb8;
      let _0x4261aa = _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
        _0x2ec35a = _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId;
      if (!_0x4261aa || !_0x2ec35a) return;
      let _0x13ca1c =
        ((_0x2e4e21 = _0xac8d37.current) == null
          ? undefined
          : _0x2e4e21.ownerDocument) ??
        ((_0x15ddb8 = _0x565509.current) == null
          ? undefined
          : _0x15ddb8.ownerDocument) ??
        (typeof document > "u" ? undefined : document);
      if (!_0x13ca1c) return;
      let _0x53186a = (_0x4826b7) => {
          let _0x2a1398 = _0x4826b7.params;
          return (
            _0x4826b7.id === t.SetEmbedBoundsCommand["id"] &&
            (_0x2a1398 == null ? undefined : _0x2a1398.embedId) === _0x4261aa &&
            _0x2a1398.hostUnitId === _0x2ec35a
          );
        },
        _0x345a6d = _0x13dcf8.beforeCommandExecuted((_0x421268) => {
          if (
            !_0x53186a(_0x421268) ||
            _0x11ffa7.getStage(_0x4261aa) !== "stage2"
          )
            return;
          let _0x5bfd0a = _0x13ca1c.activeElement;
          if (
            !(_0x5bfd0a instanceof HTMLElement) ||
            !_0x5bfd0a.id["startsWith"]("__editor_") ||
            !_0x5bfd0a.id["endsWith"]("SHAPE_TEXT") ||
            !_0x3d2286.containsElement(_0x4261aa, _0x5bfd0a)
          )
            return;
          let _0xf768aa = _0x5bfd0a.id["slice"](9);
          la({
            ownerDocument: _0x13ca1c,
            restore: () => {
              var _0x186eac;
              let _0x4a1815 =
                (_0x186eac = _0x4f09d5.getSession(_0x4261aa)) == null ||
                (_0x186eac = _0x186eac.context) == null
                  ? undefined
                  : _0x186eac.runtimeScope["injector"];
              if (_0x4a1815 != null && _0x4a1815.has(o.IEditorService)) {
                let _0x5e8aa9 = _0x4a1815.get(o.IEditorService);
                _0x5e8aa9.focus(_0xf768aa);
                let _0x49c497 = _0x5e8aa9.getEditor(_0xf768aa);
                if (_0x49c497) {
                  _0x49c497.focus();
                  return;
                }
              }
              let _0x202bea = _0x13ca1c.getElementById(_0x5bfd0a.id);
              _0x202bea instanceof HTMLElement &&
                _0x202bea.focus({ preventScroll: true });
            },
            shouldRestore: (_0x140978) =>
              _0x140978 instanceof HTMLElement &&
              _0x140978.id["endsWith"]("DOCS_NORMAL") &&
              _0x3d2286.containsElement(_0x4261aa, _0x140978),
          });
        });
      return () => _0x345a6d.dispose();
    }, [
      _0x13dcf8,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x11ffa7,
      _0x3d2286,
      _0x4f09d5,
    ]),
    (0, d.useEffect)(() => {
      if (!(_0x3e5ac3 != null && _0x3e5ac3.embedId)) return;
      let _0x28d6b8 = _0x33889d.exited$["subscribe"]((_0xeb775e) => {
        _0xeb775e.embedId === _0x3e5ac3.embedId &&
          (_0x4f09d5.unmount(_0x3e5ac3.embedId),
          _0x1bf76a.clearFloating(_0x3e5ac3.embedId, _0x3e5ac3.hostUnitId),
          _0x5ce8a9.current != null &&
            (window.cancelAnimationFrame(_0x5ce8a9.current),
            (_0x5ce8a9.current = undefined)),
          _0x26b25d.current != null &&
            globalThis.clearTimeout(_0x26b25d.current),
          (_0x26b25d.current = globalThis.setTimeout(() => {
            ((_0x26b25d.current = undefined),
              (_0x5ce8a9.current = window.requestAnimationFrame(() => {
                ((_0x5ce8a9.current = undefined),
                  _0x1bf76a.clearFloating(
                    _0x3e5ac3.embedId,
                    _0x3e5ac3.hostUnitId,
                  ),
                  _0x5de0f2((_0x46bae4) => _0x46bae4 + 1));
              })));
          }, 0)));
      });
      return () => {
        (_0x28d6b8.unsubscribe(),
          _0x26b25d.current != null &&
            (globalThis.clearTimeout(_0x26b25d.current),
            (_0x26b25d.current = undefined)),
          _0x5ce8a9.current != null &&
            (window.cancelAnimationFrame(_0x5ce8a9.current),
            (_0x5ce8a9.current = undefined)));
      };
    }, [
      _0x1bf76a,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x33889d,
      _0x4f09d5,
    ]),
    (0, d.useEffect)(() => {
      let _0x12155f = _0xac8d37.current,
        _0x384511 = _0x4eca6a.current;
      if (!_0x12155f || !_0x384511 || typeof document > "u") return;
      let _0x182846 = _i({
        chrome: _0x384511,
        container: _0x12155f,
        deferInactive: _0x4ba5b5,
        embedId: _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
        geometryService: _0x4592c9,
        hostLayout$: _0x445095,
        stage: _0x19cfac,
        docsSheetLikeLayout:
          _0x2bb145 != null && _0xc06535 != null
            ? { contentWidth: _0x2bb145, pageContentWidth: _0xc06535 }
            : undefined,
      });
      return () => _0x182846.dispose();
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x4ba5b5,
      _0x2bb145,
      _0xc06535,
      _0x4592c9,
      _0x445095,
      _0x19cfac,
    ]),
    (0, d.useEffect)(() => {
      let _0x2a1863 = _0xac8d37.current,
        _0x500af1 = _0x4eca6a.current;
      if (!_0x2a1863) return;
      let _0x27356a = _0x2a1863.closest(
          '[data-embed-docs-custom-block="true"]',
        ),
        _0x4a0761 = _0x27356a == null ? undefined : _0x27356a.parentElement;
      return Vi(
        _0x2a1863,
        _0x500af1,
        (_0x6229ee) => {
          let _0x2a2147 = _0x411c67.current;
          return (
            (_0x2a2147
              ? (_0x462510 == null
                  ? undefined
                  : _0x462510(_0x6229ee, _0x2a2147)) === true
              : false) || Cr(_0x2a1863, _0x6229ee)
          );
        },
        (_0x4a0761 == null ? undefined : _0x4a0761.id) ===
          (_0x3e5ac3 == null ? undefined : _0x3e5ac3.hostAnchorId)
          ? _0x4a0761
          : null,
        _0x570108,
      );
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostAnchorId,
      _0x462510,
      _0x570108,
    ]),
    (0, d.useEffect)(() => {
      var _0x3952e7;
      let _0x66beda = _0xac8d37.current,
        _0x3e9496 =
          (_0x66beda == null
            ? undefined
            : _0x66beda.querySelector(
                "[data-embed-float-fullscreen-button]",
              )) ??
          ((_0x3952e7 = _0x4eca6a.current) == null
            ? undefined
            : _0x3952e7.querySelector("[data-embed-float-fullscreen-button]"));
      if (!(!_0x66beda || !_0x3e9496)) return Xi(_0x66beda, _0x3e9496);
    }, []),
    (0, d.useEffect)(() => {
      let _0x2f7920 = _0xac8d37.current;
      if (
        !(_0x3e5ac3 != null && _0x3e5ac3.embedId) ||
        !_0x2f7920 ||
        typeof document > "u"
      )
        return;
      let _0x355a74 = na({
        activationService: _0x1bf76a,
        chrome: _0x4eca6a.current,
        container: _0x2f7920,
        embedId: _0x3e5ac3.embedId,
        externalHostInteractionUntil: _0x581765,
        floatingActiveService: _0x11ffa7,
        focusCoordinator: _0x3d2286,
        graceMs: 650,
        hostUnitId: _0x3e5ac3.hostUnitId,
        interactionBoundaryService: _0x3e9531,
        isExternalHostInteraction: _0x4d3d23,
        ownedPointerInteractionUntil: _0x2e93d4,
        runtimeFocusOwners: ga,
      });
      return () => _0x355a74.dispose();
    }, [
      _0x1bf76a,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x11ffa7,
      _0x3d2286,
      _0x3e9531,
      _0x4d3d23,
    ]),
    (0, d.useEffect)(() => {
      var _0x2a0965;
      _0x19cfac !== "stage2" &&
        ((_0x2a0965 = _0x153e68.current) == null || _0x2a0965.dispose(),
        (_0x153e68.current = undefined),
        ca(
          _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
          Bi(
            _0x565509.current,
            _0xf17694.current,
            _0x5e8ed8.current,
            _0x4266bf.current,
            _0x4fd88f.current,
          ),
        ));
    }, [_0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId, _0x19cfac]),
    (0, d.useEffect)(() => {
      let _0x55a43c = _0x5bef30.current;
      if (
        !_0x55a43c ||
        !(_0x3e5ac3 != null && _0x3e5ac3.embedId) ||
        !_0x3e5ac3.hostUnitId
      )
        return;
      let _0x2de83c = ra({
        acquireStage2SessionLease: _0x5371d5,
        activationService: _0x1bf76a,
        data: {
          childType: _0x570108,
          childUnitId: _0x5c8dd3,
          embedId: _0x3e5ac3.embedId,
          hostAnchorId: _0x3e5ac3.hostAnchorId,
          hostUnitId: _0x3e5ac3.hostUnitId,
        },
        embedModelService: _0x3c1f6e,
        enableStage1BodyDrag: _0x534e23,
        floatingActiveService: _0x11ffa7,
        gate: _0x55a43c,
        interactionFlow: _0x4e8ef7,
        popupRoot: _0x4fd88f.current,
        releaseStage2SessionLeaseIfActivationDoesNotStick: _0x4cd16b,
      });
      return () => _0x2de83c.dispose();
    }, [
      _0x5371d5,
      _0x1bf76a,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostAnchorId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x3c1f6e,
      _0x534e23,
      _0x11ffa7,
      _0x4e8ef7,
      _0x4cd16b,
      _0x570108,
      _0x5c8dd3,
    ]),
    (0, d.useEffect)(() => {
      let _0x1e1d2f = _0xac8d37.current;
      if (!_0x1e1d2f || !_0x4f7af8) return;
      let _0xa21d54 = _0x4f7af8(_0x1e1d2f);
      if (!_0xa21d54) return;
      let _0x3b811c = _0x1b4359.register(_0xa21d54, _0x1e1d2f);
      return () => _0x3b811c.dispose();
    }, [_0x1b4359, _0x4f7af8]),
    (0, d.useEffect)(() => {
      let _0x1fa66c = _0xac8d37.current,
        _0x1631f7 = _0x5bef30.current,
        _0x33845a = _0x565509.current;
      if (!_0x1fa66c || !_0x1631f7 || !_0x33845a) return;
      let _0x607a57 = fr({
        container: _0x1fa66c,
        gate: _0x1631f7,
        getChildContext: () => _0x411c67.current,
        getStage: () =>
          _0x3e5ac3 != null && _0x3e5ac3.embedId
            ? _0x11ffa7.getStage(_0x3e5ac3.embedId)
            : "inactive",
        hostScrollOffset: _0x25512d,
        hostWheelGestureService: _0x1b4359,
        invalidate: (_0x164909) =>
          Oi(
            _0x4592c9,
            _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
            _0x164909,
            _0x32ba11,
          ),
        liveRoot: _0x33845a,
        onHostWheel: _0x5a9f45,
        passiveViewportRegistry: _0x15e98b,
        passiveWheelHandlerRegistry: _0x512dd6,
        resizeDocsSheetLikeRendererByWheel: _0x4d745d,
        routeHostGestures: !!_0x4f7af8,
        syncHostVerticalScroll: _0x10fcf2,
        viewScale: _0x5b5e38,
      });
      return () => _0x607a57.dispose();
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x5b5e38,
      _0x11ffa7,
      _0x4592c9,
      _0x1b4359,
      _0x15e98b,
      _0x512dd6,
      _0x4d745d,
      _0x4f7af8,
      _0x5a9f45,
      _0x10fcf2,
    ]),
    (0, d.useEffect)(
      () => () => {
        (_0x32ba11.current["forEach"]((_0xb3f128) =>
          window.cancelAnimationFrame(_0xb3f128),
        ),
          (_0x32ba11.current = []));
      },
      [],
    ),
    (0, d.useEffect)(() => {
      let _0x5ae550 = _0x565509.current;
      if (!_0x5ae550) return;
      let _0x27242c = aa({
        acquireStage2SessionLease: _0x5371d5,
        activationService: _0x1bf76a,
        data: {
          childType: _0x570108,
          childUnitId: _0x5c8dd3,
          embedId: _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
          hostUnitId: _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
        },
        embedModelService: _0x3c1f6e,
        floatingActiveService: _0x11ffa7,
        focusCoordinator: _0x3d2286,
        getRuntimeRoots: () =>
          Bi(
            _0x5e8ed8.current,
            _0xf17694.current,
            _0x4266bf.current,
            _0x4fd88f.current,
            _0x565509.current,
          ),
        interactionFlow: _0x4e8ef7,
        liveRoot: _0x5ae550,
        popupRoot: _0x4fd88f.current,
        releaseStage2SessionLeaseIfActivationDoesNotStick: _0x4cd16b,
        runtimeFocusOwners: ga,
      });
      return () => _0x27242c.dispose();
    }, [
      _0x5371d5,
      _0x1bf76a,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x3c1f6e,
      _0x11ffa7,
      _0x3d2286,
      _0x4e8ef7,
      _0x4cd16b,
      _0x570108,
      _0x5c8dd3,
    ]),
    (0, d.useEffect)(() => {
      let _0x2919f2 = _0x565509.current;
      if (!_0x2919f2 || !(_0x3e5ac3 != null && _0x3e5ac3.embedId)) return;
      let _0x495d54 = oa({
        data: {
          childType: _0x3e5ac3.childType,
          childUnitId: _0x3e5ac3.childUnitId,
          embedId: _0x3e5ac3.embedId,
          hostUnitId: _0x3e5ac3.hostUnitId,
        },
        floatingActiveService: _0x11ffa7,
        focusCoordinator: _0x3d2286,
        graceMs: 650,
        interactionBoundaryService: _0x3e9531,
        liveRoot: _0x2919f2,
        ownedPointerInteractionUntil: _0x2e93d4,
        pointerLease: _0x153e68,
        verticalScrollOwner: _0x3f10a5,
      });
      return () => _0x495d54.dispose();
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.childType,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.childUnitId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x11ffa7,
      _0x3d2286,
      _0x3e9531,
    ]),
    (0, d.useEffect)(() => {
      if (_0x19cfac !== "stage2" || _0x4e8ef7 !== "doc-block") return;
      let _0x2a3263 = _0x565509.current;
      if (!_0x2a3263) return;
      let _0x1d5ae0,
        _0x3117fb = () =>
          Zi(
            Bi(
              _0x5e8ed8.current,
              _0xf17694.current,
              _0x4266bf.current,
              _0x4fd88f.current,
              _0x565509.current,
            ),
          ),
        _0x332ac1 = () => {
          let _0x633db6 = _0x2a3263.ownerDocument["activeElement"];
          return !_0x633db6 || _0x633db6 === _0x3117fb()
            ? false
            : Bi(
                _0x565509.current,
                _0xf17694.current,
                _0x5e8ed8.current,
                _0x4266bf.current,
                _0x4fd88f.current,
              ).some((_0x220721) => _0x220721.contains(_0x633db6));
        },
        _0x502add = () => {
          if (!Qi(_0x3e5ac3 == null ? undefined : _0x3e5ac3.childType, true))
            return;
          let _0x16b3d2 = _0x3117fb();
          if (
            _0x16b3d2 &&
            !_0x3d2286.hasBlockingChildFocusLease(
              _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
              { ignoreOwners: ga },
            ) &&
            !_0x332ac1()
          ) {
            if (
              _0x3e5ac3 != null &&
              _0x3e5ac3.hostUnitId &&
              _0x3e5ac3.embedId
            ) {
              let _0x30fca0 = _0x3c1f6e.getDescriptor(
                _0x3e5ac3.hostUnitId,
                _0x3e5ac3.embedId,
              );
              (_0x30fca0 == null ? undefined : _0x30fca0.childUnitId) != null &&
                _0x30fca0.childType != null &&
                _0x1bf76a.focusFloatingRuntime(_0x30fca0);
            }
            (_0x16b3d2.hasAttribute("tabindex") || (_0x16b3d2.tabIndex = -1),
              _0x16b3d2.focus({ preventScroll: true }));
          }
        };
      return (
        _0x502add(),
        (_0x1d5ae0 = window.requestAnimationFrame(() => {
          ((_0x1d5ae0 = undefined), _0x502add());
        })),
        () => {
          _0x1d5ae0 != null &&
            (window.cancelAnimationFrame(_0x1d5ae0), (_0x1d5ae0 = undefined));
        }
      );
    }, [
      _0x1bf76a,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.childType,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
      _0x3c1f6e,
      _0x3d2286,
      _0x4e8ef7,
      _0x19cfac,
    ]),
    (0, d.useEffect)(() => {
      let _0x4ca4bc = _0xac8d37.current,
        _0x5b37f7 = _0x49cbf0.current;
      if (!_0x4ca4bc || !_0x5b37f7 || typeof window > "u") return;
      let _0x7a41f9 = ci({
        collapseViewportHeight:
          _0x562e8c == null ? undefined : _0x562e8c.visibleCanvasHeight,
        collapseWithoutChildScroll:
          (_0x3e5ac3 == null ? undefined : _0x3e5ac3.childType) ===
          a.UniverInstanceType["UNIVER_BASE"],
        container: _0x4ca4bc,
        content: _0x5b37f7,
        contentHeight: _0x562e8c == null ? undefined : _0x562e8c.contentHeight,
        enabled: _0x10fcf2,
        getChildContext: () => _0x411c67.current,
        getProvider: (_0x5b59e6) =>
          _0x15e98b.get(_0x5b59e6.childType, _0x5b59e6.layout),
        getStage: () =>
          _0x3e5ac3 != null && _0x3e5ac3.embedId
            ? _0x11ffa7.getStage(_0x3e5ac3.embedId)
            : "inactive",
        hostLayout$: _0x445095,
        invalidate: () =>
          _0x4592c9.invalidate({
            embedId: _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
            reason: "host-scroll",
          }),
        offset: _0x25512d,
        onHostWheel: _0x5a9f45,
        owner: _0x3f10a5,
        syncingChildFromHost: _0x304778,
        syncingHostFromChild: _0x1dd1a3,
        viewScale: _0x5b5e38,
        viewportHeight:
          _0x562e8c == null ? undefined : _0x562e8c.viewportHeight,
      });
      return () => _0x7a41f9.dispose();
    }, [
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.childType,
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
      _0x562e8c == null ? undefined : _0x562e8c.contentHeight,
      _0x5b5e38,
      _0x562e8c == null ? undefined : _0x562e8c.visibleCanvasHeight,
      _0x562e8c == null ? undefined : _0x562e8c.viewportHeight,
      _0x11ffa7,
      _0x4592c9,
      _0x445095,
      _0x1aa179,
      _0x15e98b,
      _0x5a9f45,
      _0x10fcf2,
    ]));
  let _0x3bb2f0 = ir({ stage: _0x19cfac, interactionFlow: _0x4e8ef7 }),
    _0x94ea62 = _0x3bb2f0.disableLiveHostPointerEvents,
    _0x140de4 = _0x3bb2f0.passThroughInteractionGate,
    _0x14661c = _0x562e8c
      ? {
          top: _0x562e8c.floatingMenuInsetTop * _0x5b5e38,
          left: -_0x2703a1 * _0x5b5e38,
          width:
            (((_0x1cf122 == null ? undefined : _0x1cf122.initialWidth) ?? 1) +
              _0x2703a1) *
            _0x5b5e38,
          height: _0x562e8c.viewportHeight * _0x5b5e38,
        }
      : _0x315242
        ? {
            top: _0x315242.floatingMenuInsetTop,
            height: "calc(100% - " + _0x315242.floatingMenuInsetTop + "px)",
          }
        : undefined,
    _0x56e9a4 = _0x562e8c
      ? {
          width:
            ((_0x1cf122 == null ? undefined : _0x1cf122.initialWidth) ?? 1) +
            _0x2703a1,
          height: _0x562e8c.viewportHeight,
          transform: _0x5b5e38 === 1 ? undefined : "scale(" + _0x5b5e38 + ")",
          transformOrigin: "top left",
        }
      : undefined,
    _0x9a054b = _0x562e8c
      ? {
          left: 0,
          width: "100%",
          height: _0x562e8c.viewportHeight,
          minHeight: _0x562e8c.viewportHeight,
        }
      : undefined;
  return (0, m.jsxs)("div", {
    ref: _0xac8d37,
    className: (0, l.clsx)(
      "univer-relative\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-visible\x20univer-bg-transparent",
      _0x19cfac === "inactive" && c.HOVER_TRACK_HOST_CLASS_NAME,
      _0x562e8c && "univer-pointer-events-none",
    ),
    "data-u-comp": "embed-float-dom",
    "data-embed-float-dom": "true",
    "data-embed-float-stage": _0x19cfac,
    "data-embed-id": _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
    "data-embed-host-unit-id":
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
    "data-embed-host-anchor-id":
      _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostAnchorId,
    "data-embed-child-unit-id": _0x5c8dd3,
    "data-embed-child-type": _0x570108,
    "data-embed-interaction-flow": _0x4e8ef7,
    children: [
      (0, m.jsxs)("div", {
        ref: _0x49cbf0,
        className: (0, l.clsx)(
          "univer-absolute univer-inset-0 univer-box-border univer-min-h-0 univer-min-w-0 univer-overflow-hidden univer-rounded-md after:univer-pointer-events-none after:univer-absolute after:univer-inset-0 after:univer-z-20 after:univer-box-border after:univer-rounded-[inherit] after:univer-border after:univer-border-solid after:univer-border-gray-200 after:univer-content-[''] dark:after:!univer-border-gray-600",
          _0x562e8c && "after:!univer-border-b-0\x20after:!univer-border-r-0",
        ),
        "data-u-comp": "embed-float-dom-content",
        "data-embed-float-content": "true",
        style: _0x14661c,
        children: [
          (0, m.jsxs)("div", {
            ref: _0x565509,
            className: (0, l.clsx)(
              "univer-absolute univer-inset-0 univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-hidden univer-bg-transparent",
              _0x562e8c && "before:univer-hidden",
            ),
            "data-u-comp": "embed-float-dom-live",
            "data-embed-float-live": "true",
            style: _0x56e9a4,
            children: [
              (0, m.jsx)("div", {
                ref: _0x5e8ed8,
                className: (0, l.clsx)(
                  "univer-absolute\x20univer-inset-0\x20univer-z-0\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden",
                  _0x2cb333,
                  _0x562e8c && "univer-pointer-events-auto",
                  _0x94ea62 && "univer-pointer-events-none",
                ),
                "data-u-comp": "embed-float-dom-live-canvas",
                style: _0x9a054b,
                "data-embed-canvas-root": "true",
              }),
              (0, m.jsx)("div", {
                ref: _0xf17694,
                className: (0, l.clsx)(
                  "univer-pointer-events-none\x20univer-absolute\x20univer-inset-0\x20univer-z-[1]\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden\x20[&>*]:univer-pointer-events-auto",
                  _0x94ea62 && "univer-pointer-events-none",
                ),
                "data-u-comp": "embed-float-dom-live-content",
                style: _0x9a054b,
                "data-embed-content-root": "true",
              }),
            ],
          }),
          (0, m.jsx)("div", {
            ref: _0x5bef30,
            className: (0, l.clsx)(
              "univer-absolute univer-inset-0 univer-z-10 univer-bg-transparent",
              _0x140de4 && "univer-pointer-events-none",
            ),
            "data-u-comp": "embed-float-dom-interaction-gate",
            "data-embed-float-interaction-gate": "true",
          }),
          _0x19cfac === "inactive" &&
            (0, m.jsx)(c.HoverTrack, { className: "univer-z-[21]" }),
        ],
      }),
      (0, m.jsxs)("div", {
        ref: _0x4eca6a,
        className:
          "univer-pointer-events-none\x20univer-fixed\x20univer-overflow-visible\x20[&>*]:univer-pointer-events-auto",
        "data-u-comp": "embed-float-dom-chrome",
        "data-embed-float-stage": _0x19cfac,
        "data-embed-id": _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
        style: { zIndex: _0x43d9ba ?? 800 },
        children: [
          (0, m.jsx)("div", {
            ref: _0x4266bf,
            className:
              "univer-pointer-events-none\x20univer-absolute\x20univer-inset-0\x20univer-overflow-visible\x20[&>*]:univer-pointer-events-auto",
            "data-u-comp": "embed-float-dom-overlay",
            "data-embed-overlay-root": "true",
          }),
          (0, m.jsx)("div", {
            ref: _0x4fd88f,
            className:
              "univer-pointer-events-none univer-absolute univer-inset-0 univer-overflow-visible [&>*]:univer-pointer-events-auto",
            "data-u-comp": "embed-float-dom-popup",
            "data-embed-popup-root": "true",
          }),
          (0, m.jsx)(fa, {
            hostUnitId: _0x3e5ac3 == null ? undefined : _0x3e5ac3.hostUnitId,
            embedId: _0x3e5ac3 == null ? undefined : _0x3e5ac3.embedId,
          }),
        ],
      }),
    ],
  });
}
function va(_0x2839fa) {
  let _0x549c24 = _0x2839fa == null ? undefined : _0x2839fa.source["ref"];
  if (_0x549c24)
    try {
      let _0x631b9e =
        typeof _0x549c24 == "string"
          ? (0, t.parseResourceRef)(_0x549c24)
          : _0x549c24;
      return {
        childUnitId: _0x631b9e.unit["selector"],
        childType: (0, t.fromResourceRefUnitType)(_0x631b9e.unit["type"]),
      };
    } catch {
      return;
    }
}
function ya(_0x22a292) {
  var _0x4e8e27, _0x121ee0;
  let _0x2def76 =
    ((_0x4e8e27 = _0x22a292.sourceMeta) == null
      ? undefined
      : _0x4e8e27.floating) || undefined;
  if (_0x2def76 && typeof _0x2def76 == "object" && _0x2def76.layout)
    return _0x2def76.layout;
  let _0x5d50ce =
    ((_0x121ee0 = _0x22a292.sourceMeta) == null ? undefined : _0x121ee0.tab) ||
    undefined;
  return _0x5d50ce && typeof _0x5d50ce == "object" && _0x5d50ce.enabled
    ? "tab-peer"
    : undefined;
}
var ba = class extends a.Disposable {
  constructor(..._0x420b77) {
    (super(..._0x420b77),
      V(this, "_providers", new Map()),
      V(this, "_providerChanged$", new f["Subject"]()),
      V(this, "providerChanged$", this._providerChanged$["asObservable"]()),
      V(this, "_contentSizeChanged$", new f["Subject"]()),
      V(
        this,
        "contentSizeChanged$",
        this._contentSizeChanged$["asObservable"](),
      ));
  }
  register(_0x95ef49) {
    return (
      this._providers["set"](_0x95ef49.childType, _0x95ef49),
      this._providerChanged$["next"](_0x95ef49.childType),
      (0, a.toDisposable)(() => {
        this._providers["get"](_0x95ef49.childType) === _0x95ef49 &&
          (this._providers["delete"](_0x95ef49.childType),
          this._providerChanged$["next"](_0x95ef49.childType));
      })
    );
  }
  get(_0x113209) {
    return this._providers["get"](_0x113209);
  }
  list() {
    return [...this._providers["values"]()];
  }
  measureContentSize(_0x524bfc) {
    var _0x4836bd;
    return (_0x4836bd = this.get(_0x524bfc.childType)) == null
      ? undefined
      : _0x4836bd.measureContentSize(_0x524bfc);
  }
  notifyContentSizeChanged(_0x4d3d35, _0x4739d4) {
    this._contentSizeChanged$["next"]({
      embedId: _0x4739d4,
      hostUnitId: _0x4d3d35,
    });
  }
  dispose() {
    (this._providers["clear"](),
      this._contentSizeChanged$["complete"](),
      super.dispose());
  }
};
let xa = class {
  constructor(_0x425581) {
    ((this._mountService = _0x425581), V(this, "_leases", new Map()));
  }
  acquire(_0x155626, _0x1010fe) {
    if (this._leases["has"](_0x155626.embedId))
      throw Error("EMBED_RUNTIME_HOST_ALREADY_LEASED:" + _0x155626.embedId);
    let _0xc9e62c = this._mountService["getSession"](_0x155626.embedId),
      _0x5dbb0e =
        _0xc9e62c != null && _0xc9e62c.context
          ? this._relocateExistingSession(_0xc9e62c, _0x1010fe)
          : this._mountOwnedSession(_0x155626, _0x1010fe);
    return (
      this._leases["set"](_0x155626.embedId, _0x5dbb0e),
      {
        session: _0x5dbb0e.session,
        ownsSession: _0x5dbb0e.ownsSession,
        dispose: () => {
          this._leases["get"](_0x155626.embedId) === _0x5dbb0e &&
            (this._leases["delete"](_0x155626.embedId), _0x5dbb0e.dispose());
        },
      }
    );
  }
  _relocateExistingSession(_0x262678, _0x2acac5) {
    let _0x9913e3 = Sa(_0x262678);
    if (_0x9913e3.length === 0)
      throw Error(
        "EMBED_RUNTIME_HOST_SLOTS_NOT_AVAILABLE:" + _0x262678.embedId,
      );
    let _0x5993f1 = _0x9913e3.map((_0x4c8fe5) => {
      let _0x4bde23 = _0x4c8fe5.parentNode;
      if (!_0x4bde23)
        throw Error("EMBED_RUNTIME_HOST_NOT_ATTACHED:" + _0x262678.embedId);
      return {
        node: _0x4c8fe5,
        originalParent: _0x4bde23,
        placeholder: document.createComment("embed-runtime-host-lease"),
      };
    });
    return (
      _0x5993f1.forEach(
        ({
          node: _0x11044b,
          originalParent: _0x2e19da,
          placeholder: _0x3265f5,
        }) => {
          _0x2e19da.insertBefore(_0x3265f5, _0x11044b);
        },
      ),
      _0x2acac5.replaceChildren(..._0x9913e3),
      {
        session: _0x262678,
        ownsSession: false,
        dispose: () => {
          if (
            this._mountService["getSession"](_0x262678.embedId) !== _0x262678
          ) {
            _0x5993f1.forEach(({ node: _0x4dfbc9, placeholder: _0x411cac }) => {
              (_0x4dfbc9.remove(), _0x411cac.remove());
            });
            return;
          }
          _0x5993f1.forEach(
            ({
              node: _0x53448a,
              originalParent: _0x1896e8,
              placeholder: _0x495877,
            }) => {
              if (_0x495877.parentNode) {
                _0x495877.replaceWith(_0x53448a);
                return;
              }
              _0x1896e8.appendChild(_0x53448a);
            },
          );
        },
      }
    );
  }
  _mountOwnedSession(_0x277883, _0x472a8e) {
    let _0x3ecc2e = this._mountService["mountIntoHostElement"](
      _0x277883,
      _0x472a8e,
    );
    return {
      session: _0x3ecc2e,
      ownsSession: true,
      dispose: () => {
        this._mountService["getSession"](_0x277883.embedId) === _0x3ecc2e &&
          this._mountService["unmount"](_0x277883.embedId);
      },
    };
  }
};
xa = Z([X(0, (0, a.Inject)(Ht))], xa);
function Sa(_0x5230f6) {
  let _0x2c18c8 = _0x5230f6.context;
  if (!_0x2c18c8) return [];
  let _0x1af173 = _0x2c18c8.renderScope["rootElement"],
    _0x160ecc = new Set([
      _0x2c18c8.runtimeScope["roots"].content,
      _0x2c18c8.runtimeScope["roots"].overlay,
      _0x2c18c8.runtimeScope["roots"].popup,
    ]);
  return (
    _0x2c18c8.runtimeScope["roots"].canvas &&
      _0x160ecc.add(_0x2c18c8.runtimeScope["roots"].canvas),
    _0x2c18c8.runtimeScope["roots"].menuSlot &&
      _0x160ecc.add(_0x2c18c8.runtimeScope["roots"].menuSlot),
    _0x2c18c8.runtimeScope["roots"].footerSlot &&
      _0x160ecc.add(_0x2c18c8.runtimeScope["roots"].footerSlot),
    _0x160ecc.delete(_0x1af173),
    Array.from(_0x1af173.children).filter(
      (_0x953adf) =>
        _0x953adf instanceof HTMLElement &&
        [..._0x160ecc].some(
          (_0x8dc5ed) =>
            _0x953adf === _0x8dc5ed || _0x953adf.contains(_0x8dc5ed),
        ),
    )
  );
}
const Ca = 1000;
function wa(_0x305493, _0x3d9611) {
  return {
    childType: _0x3d9611.childType,
    collectViewState: () => undefined,
    restoreViewState: () => undefined,
    renderPreview: (_0xc72da5) =>
      Ta(_0x305493, _0x3d9611.renderManagerService, _0xc72da5),
  };
}
async function Ta(_0x3688c0, _0x259701, _0x35dfe8) {
  let _0x1ee864 = _0x3688c0.get(_0x259701),
    _0xa36965 = await Ea(_0x1ee864, _0x35dfe8);
  if (_0xa36965) return _0xa36965;
  if (!_0x35dfe8.context) {
    let _0x3a7f78 = _0x1ee864.getRenderUnitById(_0x35dfe8.childUnitId);
    if (_0x3a7f78) {
      let _0x3aecb5 = await Aa(_0x3a7f78, _0x35dfe8);
      if (_0x3aecb5) return _0x3aecb5;
    }
  }
  let _0x4660ac = await Da(_0x3688c0, _0x35dfe8);
  return _0x4660ac === null ? Oa(_0x3688c0, _0x1ee864, _0x35dfe8) : _0x4660ac;
}
async function Ea(_0x2837fe, _0x349a19) {
  if (!_0x349a19.context) return;
  let _0x3994fb =
    _0x349a19.reason === "print" ? Nt(_0x349a19.context) : undefined;
  try {
    _0x349a19.reason === "print" && (await Ft(_0x349a19.childType));
    let _0x2c82e4 = _0x2837fe.getRenderUnitById(_0x349a19.childUnitId);
    return (
      _0x2c82e4 && (await Pa(_0x2c82e4, false, Ia(_0x349a19.context))),
      At(_0x349a19.context)
    );
  } finally {
    _0x3994fb == null || _0x3994fb();
  }
}
async function Da(_0x3babd6, _0x14c838) {
  if (za(_0x14c838) !== "tab-peer" || !_0x3babd6.has(xa)) return null;
  if (typeof document > "u") return;
  let _0x2af13e = Fa(_0x14c838),
    _0x5e7e60;
  try {
    _0x5e7e60 = _0x3babd6
      .get(xa)
      .acquire({ ..._0x14c838.descriptor, mode: "readonly" }, _0x2af13e);
    let _0x96ff25 = _0x5e7e60.session["context"];
    if (!_0x96ff25) return;
    let _0x5e6e42 = _0x14c838.reason === "print" ? Nt(_0x96ff25) : undefined;
    try {
      return (
        _0x14c838.reason === "print" && (await Ft(_0x14c838.childType)),
        await Ma(_0x96ff25),
        At(_0x96ff25)
      );
    } finally {
      _0x5e6e42 == null || _0x5e6e42();
    }
  } catch {
    return;
  } finally {
    (_0x5e7e60 == null || _0x5e7e60.dispose(), _0x2af13e.remove());
  }
}
async function Oa(_0x3dfcf7, _0x59a849, _0x21290b) {
  var _0x16462d, _0x94470e;
  if (typeof document > "u") return;
  let _0x5aaa7a = Fa(_0x21290b),
    _0x26ebf0 =
      (_0x16462d = _0x21290b.context) != null &&
      (_0x16462d = _0x16462d.runtimeScope) != null &&
      _0x16462d.injector
        ? undefined
        : ge(Ra(_0x3dfcf7, _0x21290b, _0x5aaa7a)),
    _0xa529b8 =
      ((_0x94470e = _0x21290b.context) == null ||
      (_0x94470e = _0x94470e.runtimeScope) == null
        ? undefined
        : _0x94470e.injector) ?? _0x26ebf0,
    _0x9b918e = Tt(_0x59a849, _0x21290b.childUnitId, _0xa529b8);
  if (!_0x9b918e) {
    (_0x26ebf0 == null || _0x26ebf0.dispose(), _0x5aaa7a.remove());
    return;
  }
  return ka(
    _0x59a849,
    _0x21290b.childUnitId,
    _0x9b918e,
    _0x26ebf0,
    _0x5aaa7a,
    _0x21290b,
  );
}
async function ka(
  _0x596522,
  _0x32728f,
  _0x277b73,
  _0x1063cc,
  _0x2ccf9d,
  _0x31a2cf,
) {
  let _0x37684a;
  try {
    return (
      _0x277b73.engine["mount"](_0x2ccf9d),
      _0x31a2cf.reason === "print" &&
        ((_0x37684a = Pt(_0x277b73, [_0x2ccf9d])),
        await Ft(_0x31a2cf.childType)),
      await Pa(_0x277b73, true),
      ja(_0x277b73)
    );
  } catch {
    return;
  } finally {
    _0x37684a == null || _0x37684a();
    try {
      var _0x1bc811, _0xd7d132;
      (_0x1bc811 = (_0xd7d132 = _0x277b73.engine).unmount) == null ||
        _0x1bc811.call(_0xd7d132);
    } catch {}
    if (_0x1063cc) {
      var _0x321a4b;
      ((_0x321a4b = _0x596522.removeRender) == null ||
        _0x321a4b.call(_0x596522, _0x32728f),
        _0x1063cc.dispose());
    }
    _0x2ccf9d.remove();
  }
}
async function Aa(_0x5e3677, _0x3aa97d) {
  let _0x2e9daf = _0x3aa97d.reason === "print" ? Pt(_0x5e3677) : undefined;
  try {
    return (
      _0x3aa97d.reason === "print" && (await Ft(_0x3aa97d.childType)),
      ja(_0x5e3677)
    );
  } finally {
    _0x2e9daf == null || _0x2e9daf();
  }
}
function ja(_0x3622d5) {
  var _0x59ca, _0x10e3e4, _0x25e710, _0x1cb7f2, _0x41d495;
  let _0x17194d =
    ((_0x59ca = (_0x10e3e4 = _0x3622d5.engine).getCanvasElement) == null
      ? undefined
      : _0x59ca.call(_0x10e3e4)) ??
    ((_0x25e710 = (_0x1cb7f2 = _0x3622d5.engine).getCanvas) == null ||
    (_0x25e710 = _0x25e710.call(_0x1cb7f2)) == null ||
    (_0x41d495 = _0x25e710.getCanvasEle) == null
      ? undefined
      : _0x41d495.call(_0x25e710));
  if (!(
    !_0x17194d ||
    _0x17194d.width <= 1 ||
    _0x17194d.height <= 1 ||
    typeof _0x17194d.toDataURL != "function"
  ))
    return _0x17194d.toDataURL("image/png");
}
async function Ma(_0x17cb96, _0x4e0ea4 = false) {
  try {
    var _0x15e727;
    let _0x201b4b = (
        ((_0x15e727 = _0x17cb96.runtimeScope) == null
          ? undefined
          : _0x15e727.injector) ?? _0x17cb96.injector
      ).get(p.IRenderManagerService),
      _0x535e7e = Date.now() + Ca,
      _0x37b622 = await Na(_0x201b4b, _0x17cb96.childUnitId, _0x535e7e);
    _0x37b622 &&
      (_0x4e0ea4 &&
        (_0x37b622.scene["makeDirty"](true),
        await Promise.race([
          _0x37b622.scene["requestRender"](),
          new Promise((_0x39b3fc) =>
            globalThis.setTimeout(
              _0x39b3fc,
              Math.max(0, _0x535e7e - Date.now()),
            ),
          ),
        ])),
      await Pa(_0x37b622, false, Ia(_0x17cb96), _0x535e7e));
  } catch {}
}
async function Na(_0x2205fb, _0x3aab9d, _0x324f18) {
  let _0x2ed30c = _0x2205fb.getRenderUnitById(_0x3aab9d);
  if (_0x2ed30c) return _0x2ed30c;
  let _0x503d8d = _0x2205fb.created$;
  if (!(!_0x503d8d || typeof _0x503d8d.subscribe != "function"))
    return new Promise((_0xc69e99) => {
      let _0x35f5d4 = false,
        _0x2e0c5b,
        _0x5eec3a,
        _0x5cf632 = (_0xdaf66a) => {
          _0x35f5d4 ||
            ((_0x35f5d4 = true),
            _0x2e0c5b !== undefined && globalThis.clearTimeout(_0x2e0c5b),
            _0x5eec3a == null || _0x5eec3a.unsubscribe(),
            _0xc69e99(_0xdaf66a));
        },
        _0x340747 = _0x503d8d.subscribe((_0x547587) => {
          _0x547587.unitId === _0x3aab9d && _0x5cf632(_0x547587);
        });
      if (((_0x5eec3a = _0x340747), _0x35f5d4)) {
        _0x340747.unsubscribe();
        return;
      }
      let _0x2c25d0 = _0x2205fb.getRenderUnitById(_0x3aab9d);
      if (_0x2c25d0) {
        _0x5cf632(_0x2c25d0);
        return;
      }
      _0x2e0c5b = globalThis.setTimeout(
        () => _0x5cf632(_0x2205fb.getRenderUnitById(_0x3aab9d) ?? undefined),
        Math.max(0, _0x324f18 - Date.now()),
      );
    });
}
async function Pa(
  _0x349e8a,
  _0x58340c,
  _0x5621eb = true,
  _0x50292f = Date.now() + Ca,
) {
  await La(_0x50292f);
  let _0x54b5e2 = _0x349e8a.scene["afterRender$"];
  if (!_0x54b5e2) {
    _0x58340c && Ot(_0x349e8a, { activate: false });
    return;
  }
  await new Promise((_0xd1b989) => {
    let _0x445315 = false,
      _0x5457b3,
      _0x29f79d,
      _0x3141e9,
      _0x18eae9 = () => {
        _0x445315 ||
          ((_0x445315 = true),
          _0x5457b3 !== undefined && globalThis.clearTimeout(_0x5457b3),
          _0x29f79d !== undefined && globalThis.clearTimeout(_0x29f79d),
          _0x3141e9 == null || _0x3141e9.unsubscribe(),
          _0xd1b989());
      },
      _0x36dd5e = () => {
        (_0x5457b3 !== undefined && globalThis.clearTimeout(_0x5457b3),
          (_0x5457b3 = globalThis.setTimeout(_0x18eae9, 160)));
      };
    ((_0x3141e9 = _0x54b5e2.subscribe((_0x4726af) => {
      _0x4726af && _0x36dd5e();
    })),
      (_0x29f79d = globalThis.setTimeout(
        _0x18eae9,
        Math.max(0, _0x50292f - Date.now()),
      )));
    try {
      (_0x58340c && Ot(_0x349e8a, { activate: false }),
        (_0x58340c || _0x5621eb) && _0x36dd5e());
    } catch {
      _0x18eae9();
    }
  });
}
function Fa(_0x564edf) {
  let _0x4bf801 = document.createElement("div");
  return (
    (_0x4bf801.style["position"] = "fixed"),
    (_0x4bf801.style["left"] = "-100000px"),
    (_0x4bf801.style["top"] = "-100000px"),
    (_0x4bf801.style["width"] =
      Math.max(1, Math.round(_0x564edf.width)) + "px"),
    (_0x4bf801.style["height"] =
      Math.max(1, Math.round(_0x564edf.height)) + "px"),
    (_0x4bf801.style["pointerEvents"] = "none"),
    document.body["appendChild"](_0x4bf801),
    _0x4bf801
  );
}
function Ia(_0x5a4670) {
  var _0x1726f8, _0x12e077, _0x26b95c;
  return [
    (_0x1726f8 = _0x5a4670.renderScope) == null
      ? undefined
      : _0x1726f8.canvasRoot,
    (_0x12e077 = _0x5a4670.renderScope) == null
      ? undefined
      : _0x12e077.contentRoot,
    (_0x26b95c = _0x5a4670.renderScope) == null
      ? undefined
      : _0x26b95c.rootElement,
  ]
    .filter((_0x3b1ba1) => !!_0x3b1ba1)
    .some((_0x46f3bb) =>
      Array.from(_0x46f3bb.querySelectorAll("canvas")).some(
        (_0x5bbb0c) => _0x5bbb0c.width > 1 && _0x5bbb0c.height > 1,
      ),
    );
}
async function La(_0x3fc565) {
  if (
    typeof document > "u" ||
    !document.fonts ||
    document.fonts["status"] !== "loading"
  )
    return;
  let _0x5d47af;
  try {
    await Promise.race([
      document.fonts["ready"].then(
        () => undefined,
        () => undefined,
      ),
      new Promise((_0x34d665) => {
        _0x5d47af = globalThis.setTimeout(
          _0x34d665,
          Math.max(0, _0x3fc565 - Date.now()),
        );
      }),
    ]);
  } finally {
    _0x5d47af !== undefined && globalThis.clearTimeout(_0x5d47af);
  }
}
function Ra(_0x3cd18e, _0x32a41c, _0x26750d) {
  let _0x3cde65 = za(_0x32a41c),
    _0xe4051e = _0x3cde65 === "tab-peer",
    _0x1abf73 = () => {};
  return {
    descriptor: _0x32a41c.descriptor,
    layout: _0x3cde65,
    injector: _0x3cd18e,
    hostElement: _0x26750d,
    container: _0x26750d,
    hostUnitId: _0x32a41c.descriptor["hostUnitId"],
    embedId: _0x32a41c.descriptor["embedId"],
    childUnitId: _0x32a41c.childUnitId,
    childType: _0x32a41c.childType,
    renderScope: {
      hostUnitId: _0x32a41c.descriptor["hostUnitId"],
      hostAnchorId: _0x32a41c.descriptor["hostAnchorId"],
      embedId: _0x32a41c.descriptor["embedId"],
      childUnitId: _0x32a41c.childUnitId,
      childType: _0x32a41c.childType,
      layout: _0x3cde65,
      mode: _0xe4051e ? "tab" : "float",
      rootElement: _0x26750d,
      contentRoot: _0x26750d,
      canvasRoot: _0x26750d,
      active$: (0, f.of)(false),
    },
    runtimeScope: {
      descriptor: _0x32a41c.descriptor,
      host: {
        unitId: _0x32a41c.descriptor["hostUnitId"],
        type: _0x32a41c.descriptor["hostType"],
        anchorId: _0x32a41c.descriptor["hostAnchorId"],
        entry: _0x32a41c.descriptor["entry"],
        layout: _0xe4051e ? "tab-peer" : "float",
      },
      child: { unitId: _0x32a41c.childUnitId, type: _0x32a41c.childType },
      injector: _0x3cd18e,
      roots: {
        root: _0x26750d,
        content: _0x26750d,
        canvas: _0x26750d,
        overlay: _0x26750d,
        popup: _0x26750d,
      },
      activate: _0x1abf73,
      deactivate: _0x1abf73,
      dispose: _0x1abf73,
    },
  };
}
function za(_0x5f1f16) {
  var _0x30c34e, _0x570d66, _0x379bd7;
  let _0x30ba19 =
    (_0x30c34e = _0x5f1f16.descriptor["sourceMeta"]) == null
      ? undefined
      : _0x30c34e.floating;
  if (
    _0x30ba19 &&
    typeof _0x30ba19 == "object" &&
    typeof _0x30ba19.layout == "string"
  )
    return _0x30ba19.layout;
  let _0x5c3544 =
    (_0x570d66 = _0x5f1f16.descriptor["sourceMeta"]) == null
      ? undefined
      : _0x570d66.tab;
  return _0x5f1f16.descriptor["entry"] ===
    t.EmbedHostEntryEnum["SheetsSheetTab"] ||
    _0x5f1f16.descriptor["entry"] ===
      t.EmbedHostEntryEnum["BasesTableListBlock"] ||
    _0x5f1f16.descriptor["entry"] ===
      t.EmbedHostEntryEnum["SlidesPageListBlock"] ||
    (_0x5c3544 && typeof _0x5c3544 == "object" && _0x5c3544.enabled)
    ? "tab-peer"
    : (((_0x379bd7 = _0x5f1f16.context) == null
        ? undefined
        : _0x379bd7.layout) ?? "scroll-contained");
}
const Ba = 1600,
  Va = 1200,
  Ha = 32767;
let Ua = class extends a.Disposable {
  constructor(
    _0x54cc3b,
    _0x4241a4,
    _0x2a4e03,
    _0x46e01a,
    _0x539061,
    _0x173473,
    _0xe44128,
    _0x4f369a,
    _0x4a37ac,
    _0x4ba300,
    _0x558bc0,
    _0x4c47f0,
  ) {
    (super(),
      (this._embedModelService = _0x54cc3b),
      (this._anchorModelService = _0x4241a4),
      (this._hostAdapterRegistry = _0x2a4e03),
      (this._restoreService = _0x46e01a),
      (this._previewService = _0x539061),
      (this._mountService = _0x173473),
      (this._contentSizeRegistry = _0xe44128),
      (this._passiveViewportRegistry = _0x4f369a),
      (this._commandService = _0x4a37ac),
      (this._univerInstanceService = _0x4ba300),
      (this._themeService = _0x558bc0),
      (this._imageIoService = _0x4c47f0),
      V(this, "_resources", new Map()));
  }
  async prepare(_0x1c5281) {
    var _0x3f54d0, _0x2e5c88;
    let _0xea3175 =
        _0x1c5281.unitType === a.UniverInstanceType["UNIVER_SLIDE"]
          ? this._univerInstanceService["getUnit"](
              _0x1c5281.unitId,
              a.UniverInstanceType["UNIVER_SLIDE"],
            )
          : undefined,
      _0x1b63f4 =
        _0xea3175 == null ||
        (_0x3f54d0 = _0xea3175.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x3f54d0.getId(),
      _0x151cf3 =
        _0x1c5281.unitType === a.UniverInstanceType["UNIVER_SHEET"]
          ? (_0x2e5c88 = this._univerInstanceService["getUnit"](
              _0x1c5281.unitId,
              a.UniverInstanceType["UNIVER_SHEET"],
            )) == null || (_0x2e5c88 = _0x2e5c88.getActiveSheet(true)) == null
            ? undefined
            : _0x2e5c88.getSheetId()
          : undefined;
    try {
      this._clearHost(_0x1c5281.unitId);
      let _0x3e1212 = this._embedModelService["getActiveDescriptors"](
        _0x1c5281.unitId,
      ).filter((_0x194af3) => _0x194af3.hostType === _0x1c5281.unitType);
      for (let _0x271783 of _0x3e1212)
        (await this._activateSheetTabForPrint(_0x271783, _0x1c5281),
          await this._activateSlidePageForPrint(_0x271783, _0x1c5281),
          await this._prepareDescriptor(_0x271783, _0x1c5281));
    } finally {
      (_0x151cf3 &&
        this._commandService["syncExecuteCommand"](
          v.SetWorksheetActiveOperation["id"],
          { unitId: _0x1c5281.unitId, subUnitId: _0x151cf3 },
        ),
        _0x1b63f4 &&
          (_0xea3175 == null ||
            _0xea3175.pageManager["setActiveSlide"](_0x1b63f4)),
        this._univerInstanceService["setCurrentUnitForType"](_0x1c5281.unitId),
        this._univerInstanceService["focusUnit"](_0x1c5281.unitId));
    }
  }
  getImage(_0x442d18, _0x2f525a) {
    var _0x25fc32;
    return (_0x25fc32 = this.getResource(_0x442d18, _0x2f525a)) == null
      ? undefined
      : _0x25fc32.source;
  }
  getResource(_0xce5208, _0xac0197) {
    return this._resources["get"](this._getKey(_0xce5208, _0xac0197));
  }
  async _activateSheetTabForPrint(_0x2ebd04, _0x15f018) {
    var _0x463858;
    if (
      _0x15f018.unitType !== a.UniverInstanceType["UNIVER_SHEET"] ||
      _0x2ebd04.entry !== t.EmbedHostEntryEnum["SheetsSheetTab"] ||
      this._commandService["syncExecuteCommand"](
        v.SetWorksheetActiveOperation["id"],
        { unitId: _0x2ebd04.hostUnitId, subUnitId: _0x2ebd04.hostAnchorId },
      ) === false
    )
      return;
    let _0x56d066 = Date.now() + 5000;
    for (
      ;
      !(
        (_0x463858 = this._mountService["getSession"](_0x2ebd04.embedId)) !=
          null && _0x463858.context
      ) && Date.now() < _0x56d066;
    )
      await new Promise((_0x246695) => window.setTimeout(_0x246695, 16));
  }
  async _activateSlidePageForPrint(_0xcba8a, _0x163c46) {
    var _0x141275;
    if (
      _0x163c46.unitType !== a.UniverInstanceType["UNIVER_SLIDE"] ||
      _0xcba8a.entry !== t.EmbedHostEntryEnum["SlidesPageListBlock"]
    )
      return;
    this._hostAdapterRegistry["activateAnchor"]({
      descriptor: _0xcba8a,
      embedId: _0xcba8a.embedId,
      entry: _0xcba8a.entry,
      hostAnchorId: _0xcba8a.hostAnchorId,
      hostType: _0xcba8a.hostType,
      hostUnitId: _0xcba8a.hostUnitId,
    });
    let _0x586a23 = Date.now() + 5000;
    for (
      ;
      !(
        (_0x141275 = this._mountService["getSession"](_0xcba8a.embedId)) !=
          null && _0x141275.context
      ) && Date.now() < _0x586a23;
    )
      await new Promise((_0x31d13b) => window.setTimeout(_0x31d13b, 16));
  }
  async _prepareDescriptor(_0x3725f3, _0x3e5161) {
    let _0x36546c = Ya(
      this._previewService["getProvider"](_0x3725f3.childType),
      _0x3725f3,
    );
    if (_0x36546c)
      try {
        var _0x37cdf6, _0x4273b9;
        let _0x5c05c5 = await this._restoreService["materializeDescriptor"]({
          descriptor: _0x3725f3,
        });
        if (!_0x5c05c5.childUnitId) {
          Za(
            _0x5c05c5,
            "Embedded unit is not available for print " + _0x5c05c5.embedId,
          );
          return;
        }
        let _0x42b25d =
            (_0x37cdf6 = this._mountService["getSession"](_0x5c05c5.embedId)) ==
            null
              ? undefined
              : _0x37cdf6.context,
          _0x2166e4 = await this._resolveViewState(
            _0x5c05c5.embedId,
            _0x36546c,
            _0x42b25d,
          ),
          _0x12021f = this._resolveSize(_0x5c05c5, _0x42b25d),
          _0x38dd22 = await this._captureMountedCanvas(
            _0x5c05c5,
            _0x42b25d,
            _0x12021f,
            _0x3e5161.dpr,
          ),
          _0x5b1702 = _0x38dd22
            ? undefined
            : await this._renderMountedScene(
                _0x5c05c5,
                _0x42b25d,
                _0x12021f,
                _0x3e5161.dpr,
              ),
          _0x357622 =
            _0x38dd22 ??
            (_0x5b1702 == null ? undefined : _0x5b1702.canvas) ??
            (await _0x36546c.renderPreview({
              descriptor: _0x5c05c5,
              childUnitId: _0x5c05c5.childUnitId,
              childType: _0x5c05c5.childType,
              width: _0x12021f.width,
              height: _0x12021f.height,
              dpr: _0x3e5161.dpr,
              viewState: _0x2166e4,
              reason: "print",
              context: _0x42b25d,
            })),
          _0x3c5840 =
            _0x357622 instanceof HTMLCanvasElement ? _0x357622 : undefined,
          _0x402718 =
            this._toDataUrl(_0x357622) ??
            this._toDataUrl(
              (_0x4273b9 = this._previewService["getPreview"](
                _0x5c05c5.embedId,
              )) == null
                ? undefined
                : _0x4273b9.image,
            );
        if (!_0x402718 && !_0x3c5840) {
          Za(
            _0x5c05c5,
            "Complete print resource could not be created for embed " +
              _0x5c05c5.embedId,
          );
          return;
        }
        _0x402718 && (await this._preloadImage(_0x402718));
        let _0x53ce71 = uo(_0x357622, _0x12021f);
        this._resources["set"](
          this._getKey(_0x5c05c5.hostUnitId, _0x5c05c5.embedId),
          {
            canvas: _0x3c5840,
            height: _0x53ce71.height,
            source: _0x402718,
            verticalBreaks:
              _0x5b1702 == null ? undefined : _0x5b1702.verticalBreaks,
            width: _0x53ce71.width,
          },
        );
      } catch (_0x445f73) {
        var _0x821b06;
        Xa(_0x3725f3, _0x445f73);
        let _0x10fb23 = this._toDataUrl(
          (_0x821b06 = this._previewService["getPreview"](_0x3725f3.embedId)) ==
            null
            ? undefined
            : _0x821b06.image,
        );
        _0x10fb23 &&
          (await this._preloadImage(_0x10fb23),
          this._resources["set"](
            this._getKey(_0x3725f3.hostUnitId, _0x3725f3.embedId),
            { height: 1, source: _0x10fb23, width: 1 },
          ));
      }
  }
  async _captureMountedCanvas(_0x25f369, _0x1bb758, _0x3b17c3, _0x151713) {
    let _0x410f21 =
      _0x1bb758 &&
      this._resolveCompleteCaptureOptions(_0x25f369, _0x1bb758, _0x151713);
    if (
      (_0x25f369.childType !== a.UniverInstanceType["UNIVER_BOARD"] &&
        (_0x25f369.childType !== a.UniverInstanceType["UNIVER_BASE"] ||
          _0x410f21)) ||
      !_0x1bb758
    )
      return;
    let _0x134801 = Nt(_0x1bb758);
    try {
      (await Ft(_0x25f369.childType),
        await Ma(_0x1bb758, true),
        _0x25f369.childType === a.UniverInstanceType["UNIVER_BASE"] &&
          (await (0, _.waitForBaseCanvasImages)()));
      let _0x572331 = Mt(_0x1bb758, true),
        _0x163486 = so(
          _0x3b17c3.width,
          _0x3b17c3.height,
          co(_0x1bb758),
          _0x151713,
        );
      return !_0x572331 || !_0x163486
        ? undefined
        : (_0x163486.context["drawImage"](
            _0x572331,
            0,
            0,
            _0x3b17c3.width,
            _0x3b17c3.height,
          ),
          _0x163486.canvas);
    } finally {
      _0x134801();
    }
  }
  async _renderMountedScene(_0x557c27, _0xf2c88a, _0x1ca55f, _0x466d97) {
    if (!_0xf2c88a || !po(_0x557c27.childType)) return;
    let _0x1d877d = this._resolveCompleteCaptureOptions(
      _0x557c27,
      _0xf2c88a,
      _0x466d97,
    );
    if (_0x1d877d) {
      var _0x3b4fb7;
      let _0x4d5ee3 = await this._renderCompleteScene(
        _0x557c27,
        _0xf2c88a,
        _0x1d877d,
      );
      return _0x4d5ee3
        ? {
            canvas: _0x4d5ee3,
            verticalBreaks:
              (_0x3b4fb7 = _0x1d877d.verticalBreaks) == null
                ? undefined
                : _0x3b4fb7.map(
                    (_0x31845b) =>
                      _0x31845b * _0x1d877d.scale * _0x1d877d.pixelRatio,
                  ),
          }
        : undefined;
    }
    let _0x2df106 = Nt(_0xf2c88a);
    try {
      await Ft(_0x557c27.childType);
      let _0xb4bde4 = await lo(_0xf2c88a);
      if (!_0xb4bde4) return;
      let _0x59ea37 = so(
        _0x1ca55f.width,
        _0x1ca55f.height,
        co(_0xf2c88a),
        _0x466d97,
      );
      return _0x59ea37
        ? (io(
            _0xb4bde4,
            _0x59ea37.context,
            {
              height: _0x1ca55f.height,
              sourceLeft: 0,
              sourceTop: 0,
              targetLeft: 0,
              targetTop: 0,
              width: _0x1ca55f.width,
            },
            1,
          ),
          { canvas: _0x59ea37.canvas })
        : undefined;
    } finally {
      _0x2df106();
    }
  }
  async _renderCompleteScene(_0x4c4306, _0x242ae4, _0x31d27a) {
    let {
        bodyViewportWidth: _0x49a402,
        bodyViewportHeight: _0x5f2a86,
        contentBodyWidth: _0x4c814a,
        contentBodyHeight: _0x3a6846,
        fullWidth: _0x588679,
        fullHeight: _0x556436,
        originalScrollX: _0x2f916d,
        originalScroll: _0x123c63,
        scale: _0x2aaae4,
        viewportProvider: _0x970e97,
      } = _0x31d27a,
      _0x39a9a6 = so(
        _0x588679 * _0x2aaae4,
        _0x556436 * _0x2aaae4,
        co(_0x242ae4),
        _0x31d27a.pixelRatio,
      ),
      _0x259b0d = so(
        _0x31d27a.viewport["width"],
        _0x31d27a.viewport["height"],
        co(_0x242ae4),
        _0x31d27a.pixelRatio,
      );
    if (!_0x39a9a6 || !_0x259b0d) return;
    let _0x2370ac = Nt(_0x242ae4);
    try {
      let _0x2ffaa1 = await lo(_0x242ae4);
      if (!_0x2ffaa1) return;
      let _0x5aeb23 = $a(_0x4c814a, _0x49a402),
        _0x2ccace = $a(_0x3a6846, _0x5f2a86);
      for (let _0x11aaac of _0x5aeb23)
        for (let _0x5a0ba2 of _0x2ccace)
          (eo(_0x242ae4, _0x970e97, _0x11aaac, _0x5a0ba2),
            await Ft(_0x4c4306.childType),
            await Ma(_0x242ae4, true),
            _0x4c4306.childType === a.UniverInstanceType["UNIVER_BASE"] &&
              (await (0, _.waitForBaseCanvasImages)()),
            _0x259b0d.nativeContext["clearRect"](
              0,
              0,
              _0x31d27a.viewport["width"],
              _0x31d27a.viewport["height"],
            ),
            _0x2ffaa1.makeDirty(true),
            _0x2ffaa1.render(_0x259b0d.context),
            to(
              _0x259b0d.canvas,
              _0x39a9a6.context,
              _0x31d27a,
              _0x11aaac,
              _0x5a0ba2,
            ));
      return _0x39a9a6.canvas;
    } finally {
      try {
        (eo(_0x242ae4, _0x970e97, _0x2f916d, _0x123c63),
          await Ma(_0x242ae4, true));
      } finally {
        _0x2370ac();
      }
    }
  }
  _resolveCompleteCaptureOptions(_0x27c0d3, _0x278d21, _0x1601bd) {
    var _0x45be95, _0x162c84, _0x3e256c, _0x101f18, _0x1225ce;
    let _0x5c43ad = _0x27c0d3.childUnitId,
      _0x909cdd =
        _0x27c0d3.childType === a.UniverInstanceType["UNIVER_SHEET"] ||
        _0x27c0d3.childType === a.UniverInstanceType["UNIVER_BASE"],
      _0x5700b1 =
        _0x27c0d3.hostType === a.UniverInstanceType["UNIVER_DOC"] &&
        _0x27c0d3.entry === t.EmbedHostEntryEnum["DocsCustomBlock"] &&
        _0x909cdd,
      _0x26b2e3 = _0x909cdd && fo(_0x27c0d3.entry);
    if (!_0x5c43ad || (!_0x5700b1 && !_0x26b2e3)) return;
    let _0x1b5740 = _0x278d21.container["getBoundingClientRect"]();
    if (!qa(_0x1b5740.width) || !qa(_0x1b5740.height)) return;
    let _0x5b4cb1 = this._measureContentSize(_0x27c0d3, _0x278d21),
      _0x15c2cc = _0x26b2e3
        ? this._resolveTabViewportSize(_0x27c0d3, _0x1b5740)
        : _0x1b5740,
      _0x58489a =
        _0x26b2e3 && qa(_0x5b4cb1 == null ? undefined : _0x5b4cb1.width)
          ? Math.max(_0x15c2cc.width, _0x5b4cb1.width)
          : _0x5700b1
            ? Qa(_0x278d21, _0x1b5740.width)
            : _0x1b5740.width,
      _0x5460ea = _0x5b4cb1 == null ? undefined : _0x5b4cb1.height;
    if (!qa(_0x5460ea) || (_0x5700b1 && _0x5460ea <= _0x1b5740.height)) return;
    let _0x55b909 = _0x26b2e3
        ? mo(_0x58489a, _0x5460ea, _0x15c2cc.width >= _0x15c2cc.height)
        : undefined,
      _0x3c66d1 =
        (_0x55b909 == null ? undefined : _0x55b909.height) ?? _0x5460ea,
      _0x1ff17a = this._passiveViewportRegistry["get"](
        _0x27c0d3.childType,
        _0x278d21.layout,
      );
    if (!(_0x1ff17a != null && _0x1ff17a.getVerticalScroll)) return;
    let _0x3e1660 = _0x26b2e3
        ? Math.max(
            0,
            ((_0x45be95 = _0x1ff17a.getStickyLeftWidth) == null
              ? undefined
              : _0x45be95.call(_0x1ff17a, _0x278d21)) ?? 0,
          )
        : 0,
      _0x2083fa = Math.max(
        0,
        ((_0x162c84 = _0x1ff17a.getStickyHeaderHeight) == null
          ? undefined
          : _0x162c84.call(_0x1ff17a, _0x278d21)) ?? 0,
      ),
      _0x11feb5 = Math.max(
        0,
        ((_0x3e256c = _0x1ff17a.getStickyFooterHeight) == null
          ? undefined
          : _0x3e256c.call(_0x1ff17a, _0x278d21)) ?? 0,
      ),
      _0x4b47f1 = _0x1b5740.width - _0x3e1660,
      _0x5cfbf5 = _0x1b5740.height - _0x2083fa - _0x11feb5,
      _0x42e4db = _0x58489a - _0x3e1660,
      _0x16b607 = _0x3c66d1 - _0x2083fa - _0x11feb5;
    if (_0x4b47f1 <= 0 || _0x5cfbf5 <= 0 || _0x42e4db <= 0 || _0x16b607 <= 0)
      return;
    let _0x2daa71 = _0x55b909
      ? _0x55b909.scale
      : Math.min(1, Ha / _0x58489a, Ha / _0x3c66d1);
    if (
      !qa(_0x2daa71) ||
      _0x58489a * _0x2daa71 > Ha ||
      _0x3c66d1 * _0x2daa71 > Ha
    )
      return;
    let _0x470a65 =
        _0x5700b1 &&
        _0x27c0d3.childType === a.UniverInstanceType["UNIVER_SHEET"]
          ? Math.min(1, _0x58489a / _0x1b5740.width)
          : 1,
      _0x4eb1d4 = Math.min(
        Math.max(1, _0x1601bd),
        Ha / (_0x58489a * _0x2daa71),
        Ha / (_0x3c66d1 * _0x2daa71),
      );
    return {
      bodyViewportWidth: _0x4b47f1,
      bodyViewportHeight: _0x5cfbf5,
      contentBodyWidth: _0x42e4db,
      contentBodyHeight: _0x16b607,
      fullWidth: _0x58489a,
      fullHeight: _0x3c66d1,
      originalScrollX:
        ((_0x101f18 = _0x1ff17a.getHorizontalScroll) == null
          ? undefined
          : _0x101f18.call(_0x1ff17a, _0x278d21)) ?? 0,
      originalScroll: _0x1ff17a.getVerticalScroll(_0x278d21) ?? 0,
      pixelRatio: _0x4eb1d4,
      scale: _0x2daa71,
      sceneSourceScale: _0x470a65,
      stickyLeftWidth: _0x3e1660,
      stickyFooterHeight: _0x11feb5,
      stickyHeaderHeight: _0x2083fa,
      verticalBreaks:
        _0x5b4cb1 == null || (_0x1225ce = _0x5b4cb1.verticalBreaks) == null
          ? undefined
          : _0x1225ce.filter((_0x202a7e) => _0x202a7e <= _0x3c66d1),
      viewport: _0x1b5740,
      viewportProvider: _0x1ff17a,
    };
  }
  _measureContentSize(_0x257feb, _0x4f9460) {
    let _0x105c04 = _0x257feb.childUnitId;
    if (!_0x105c04) return;
    let _0x2b7d7a = _0x4f9460.container["getBoundingClientRect"](),
      _0x2db42d = this._univerInstanceService["getUnit"](
        _0x105c04,
        _0x257feb.childType,
      ),
      _0x545121 =
        _0x257feb.hostType === a.UniverInstanceType["UNIVER_DOC"] &&
        _0x257feb.childType === a.UniverInstanceType["UNIVER_SHEET"];
    return this._contentSizeRegistry["measureContentSize"]({
      childType: _0x257feb.childType,
      childUnit: _0x2db42d,
      childUnitId: _0x105c04,
      injector: _0x4f9460.runtimeScope["injector"] ?? _0x4f9460.injector,
      viewportHeight: _0x2b7d7a.height,
      viewportWidth: _0x545121
        ? Qa(_0x4f9460, _0x2b7d7a.width)
        : _0x2b7d7a.width,
    });
  }
  async _resolveViewState(_0x103c6a, _0x580bbb, _0x3b5050) {
    var _0x3444dc;
    return _0x3b5050
      ? _0x580bbb.collectViewState(_0x3b5050)
      : (_0x3444dc = this._previewService["getPreview"](_0x103c6a)) == null
        ? undefined
        : _0x3444dc.viewState;
  }
  _resolveSize(_0x196614, _0x2fb37c) {
    var _0x411a27;
    if (
      _0x2fb37c &&
      fo(_0x196614.entry) &&
      (_0x196614.childType === a.UniverInstanceType["UNIVER_SHEET"] ||
        _0x196614.childType === a.UniverInstanceType["UNIVER_BASE"])
    ) {
      let _0x1ebcb2 = this._measureContentSize(_0x196614, _0x2fb37c);
      if (
        qa(_0x1ebcb2 == null ? undefined : _0x1ebcb2.width) &&
        qa(_0x1ebcb2 == null ? undefined : _0x1ebcb2.height)
      ) {
        let _0xd3af0b = this._resolveTabViewportSize(
            _0x196614,
            _0x2fb37c.container["getBoundingClientRect"](),
          ),
          _0x6d742e = Math.max(_0xd3af0b.width, _0x1ebcb2.width),
          _0x3c82f3 = mo(
            _0x6d742e,
            _0x1ebcb2.height,
            _0xd3af0b.width >= _0xd3af0b.height,
          );
        return {
          width: Math.max(1, Math.round(_0x6d742e * _0x3c82f3.scale)),
          height: Math.max(1, Math.round(_0x3c82f3.height * _0x3c82f3.scale)),
        };
      }
    }
    if (_0x196614.entry === t.EmbedHostEntryEnum["SlidesPageListBlock"]) {
      let _0x240c6c = this._univerInstanceService["getUnit"](
          _0x196614.hostUnitId,
          a.UniverInstanceType["UNIVER_SLIDE"],
        ),
        _0x5bdc44 =
          _0x240c6c == null
            ? undefined
            : _0x240c6c.getSnapshot().defaultPageSize;
      if (
        qa(_0x5bdc44 == null ? undefined : _0x5bdc44.width) &&
        qa(_0x5bdc44 == null ? undefined : _0x5bdc44.height)
      )
        return _0x5bdc44;
    }
    let _0x5a8870 =
        _0x2fb37c == null
          ? undefined
          : _0x2fb37c.container["getBoundingClientRect"]().width,
      _0x3a6aa7 =
        _0x2fb37c == null
          ? undefined
          : _0x2fb37c.container["getBoundingClientRect"]().height;
    if (qa(_0x5a8870) && qa(_0x3a6aa7))
      return { width: _0x5a8870, height: _0x3a6aa7 };
    let _0x146b89 =
        (_0x411a27 = this._anchorModelService["getAnchor"](
          _0x196614.hostUnitId,
          _0x196614.hostAnchorId,
        )) == null
          ? undefined
          : _0x411a27.hostContext,
      _0x180e71 = Wa(_0x146b89 == null ? undefined : _0x146b89.width),
      _0x14c8bf = Wa(_0x146b89 == null ? undefined : _0x146b89.height);
    return _0x180e71 && _0x14c8bf
      ? { width: _0x180e71, height: _0x14c8bf }
      : _0x196614.entry === t.EmbedHostEntryEnum["DocsCustomBlock"]
        ? (0, h.resolveDocsCustomBlockSize)(_0x196614.childType)
        : _0x196614.entry === t.EmbedHostEntryEnum["SlidesFloatingObject"]
          ? { width: 560, height: 315 }
          : { width: Ba, height: Va };
  }
  _resolveTabViewportSize(_0x1ce36b, _0x4160ad) {
    var _0x26610a;
    if (_0x1ce36b.entry !== t.EmbedHostEntryEnum["SlidesPageListBlock"])
      return _0x4160ad;
    let _0x113add = this._univerInstanceService["getUnit"](
        _0x1ce36b.hostUnitId,
        a.UniverInstanceType["UNIVER_SLIDE"],
      ),
      _0x30b025 =
        (_0x113add == null ||
        (_0x26610a = _0x113add.pageManager["getSlide"](
          _0x1ce36b.hostAnchorId,
        )) == null
          ? undefined
          : _0x26610a.getData().pageSize) ??
        (_0x113add == null
          ? undefined
          : _0x113add.getSnapshot().defaultPageSize);
    return qa(_0x30b025 == null ? undefined : _0x30b025.width) &&
      qa(_0x30b025.height)
      ? _0x30b025
      : _0x4160ad;
  }
  _toDataUrl(_0x201eb8) {
    if (typeof _0x201eb8 == "string") return _0x201eb8;
    if (!_0x201eb8 || typeof document > "u") return;
    let _0x18177a = Ga(this._themeService);
    if (_0x201eb8 instanceof HTMLCanvasElement) {
      let _0x702c6d = _0x201eb8.getContext("2d");
      return (
        _0x702c6d &&
          (_0x702c6d.save(),
          (_0x702c6d.globalCompositeOperation = "destination-over"),
          (_0x702c6d.fillStyle = _0x18177a),
          _0x702c6d.fillRect(0, 0, _0x201eb8.width, _0x201eb8.height),
          _0x702c6d.restore()),
        ao(_0x201eb8)
      );
    }
    let _0x4bd942 = document.createElement("canvas");
    ((_0x4bd942.width = _0x201eb8.width),
      (_0x4bd942.height = _0x201eb8.height));
    let _0x5df77e = _0x4bd942.getContext("2d");
    if (_0x5df77e)
      return (
        (_0x5df77e.fillStyle = _0x18177a),
        _0x5df77e.fillRect(0, 0, _0x4bd942.width, _0x4bd942.height),
        _0x5df77e.drawImage(_0x201eb8, 0, 0),
        ao(_0x4bd942)
      );
  }
  _preloadImage(_0x31bbe9) {
    return this._imageIoService["getImageSourceCache"](
      _0x31bbe9,
      a.ImageSourceType["URL"],
    )
      ? Promise.resolve()
      : new Promise((_0x229024) => {
          let _0x2888b7 = new Image();
          ((_0x2888b7.onload = () => {
            (this._imageIoService["addImageSourceCache"](
              _0x31bbe9,
              a.ImageSourceType["URL"],
              _0x2888b7,
            ),
              _0x229024());
          }),
            (_0x2888b7.onerror = () => _0x229024()),
            (_0x2888b7.src = _0x31bbe9));
        });
  }
  _clearHost(_0x130be2) {
    let _0x5cb80e = _0x130be2 + "::";
    Array.from(this._resources["keys"]()).forEach((_0x409978) => {
      _0x409978.startsWith(_0x5cb80e) && this._resources["delete"](_0x409978);
    });
  }
  _getKey(_0x5cdf43, _0x42a823) {
    return _0x5cdf43 + "::" + _0x42a823;
  }
  dispose() {
    (this._resources["clear"](), super.dispose());
  }
};
Ua = Z(
  [
    X(0, (0, a.Inject)(t.EmbedModelService)),
    X(1, (0, a.Inject)(t.EmbedHostAnchorModelService)),
    X(2, (0, a.Inject)(t.EmbedHostAdapterRegistryService)),
    X(3, (0, a.Inject)(Gr)),
    X(4, (0, a.Inject)(Ur)),
    X(5, (0, a.Inject)(Ht)),
    X(6, (0, a.Inject)(ba)),
    X(7, (0, a.Inject)(ii)),
    X(8, a.ICommandService),
    X(9, a.IUniverInstanceService),
    X(10, (0, a.Inject)(a.ThemeService)),
    X(11, a.IImageIoService),
  ],
  Ua,
);
function Wa(_0x5070e7) {
  return qa(_0x5070e7) ? _0x5070e7 : undefined;
}
function Ga(_0x5e41a5) {
  let _0x2cb09d = _0x5e41a5.getColorFromTheme("gray.0"),
    _0x4f2029 = _0x5e41a5.getColorFromTheme("gray.1000");
  return Ka(_0x4f2029) > Ka(_0x2cb09d) ? _0x4f2029 : _0x2cb09d;
}
function Ka(_0x4861f1) {
  let _0x308442 = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(_0x4861f1);
  return _0x308442
    ? Number.parseInt(_0x308442[1], 16) +
        Number.parseInt(_0x308442[2], 16) +
        Number.parseInt(_0x308442[3], 16)
    : 0;
}
function qa(_0xe9b0c6) {
  return (
    typeof _0xe9b0c6 == "number" && Number.isFinite(_0xe9b0c6) && _0xe9b0c6 > 0
  );
}
function Ja(_0x44fe89) {
  return (
    _0x44fe89.hostType === a.UniverInstanceType["UNIVER_DOC"] &&
    _0x44fe89.entry === t.EmbedHostEntryEnum["DocsCustomBlock"] &&
    (_0x44fe89.childType === a.UniverInstanceType["UNIVER_SHEET"] ||
      _0x44fe89.childType === a.UniverInstanceType["UNIVER_BASE"])
  );
}
function Ya(_0x2f60e0, _0x44cb37) {
  if (!_0x2f60e0 && Ja(_0x44cb37))
    throw Error(
      "Print preview provider is not available for embed " + _0x44cb37.embedId,
    );
  return _0x2f60e0;
}
function Xa(_0xe1b2b3, _0x3e7c45) {
  if (Ja(_0xe1b2b3)) throw _0x3e7c45;
}
function Za(_0x273e97, _0x4c7f5a) {
  if (Ja(_0x273e97)) throw Error(_0x4c7f5a);
}
function Qa(_0x47f1ce, _0x491b00) {
  let _0x5c8494 = _0x47f1ce.container["closest"](
      '[data-embed-docs-custom-block-sheet-like="true"]',
    ),
    _0x1b7982 =
      _0x5c8494 == null ? undefined : _0x5c8494.getBoundingClientRect().width;
  return qa(_0x1b7982) ? Math.min(_0x491b00, _0x1b7982) : _0x491b00;
}
function $a(_0x4efea1, _0x85e684) {
  let _0x59d8ee = Math.max(0, _0x4efea1 - _0x85e684),
    _0x23e94c = [0];
  for (let _0x4c7a83 = _0x85e684; _0x4c7a83 < _0x59d8ee; _0x4c7a83 += _0x85e684)
    _0x23e94c.push(_0x4c7a83);
  return (
    _0x59d8ee > _0x23e94c[_0x23e94c.length - 1] && _0x23e94c.push(_0x59d8ee),
    _0x23e94c
  );
}
function eo(_0x1f2ead, _0x481e09, _0x2e569e, _0x820c5f) {
  _0x481e09.handleWheel({
    ..._0x1f2ead,
    event: new WheelEvent("wheel"),
    stage: "stage2",
    source: "print-capture",
    viewportScrollX: _0x2e569e,
    viewportScrollY: _0x820c5f,
  });
}
function to(_0xde7215, _0x3b9ff5, _0x1a4766, _0x3bfb35, _0xb7ea91) {
  let {
      fullHeight: _0x13cb91,
      scale: _0x2c07ed,
      stickyFooterHeight: _0x556cee,
      stickyHeaderHeight: _0x32a456,
      stickyLeftWidth: _0xdd0f83,
      viewport: _0x4c8021,
    } = _0x1a4766,
    _0x226e7c = no(_0x1a4766, _0x3bfb35, _0xb7ea91);
  (oo(
    _0xde7215,
    _0x3b9ff5,
    {
      height: _0x226e7c.height,
      sourceLeft: _0x226e7c.sourceLeft,
      sourceTop: _0x226e7c.sourceTop,
      targetLeft: _0x226e7c.targetLeft,
      targetTop: _0x226e7c.targetTop,
      width: _0x226e7c.width,
    },
    _0x2c07ed,
    _0x1a4766.sceneSourceScale,
    _0x1a4766.pixelRatio,
  ),
    _0xb7ea91 === 0 &&
      _0x32a456 > 0 &&
      oo(
        _0xde7215,
        _0x3b9ff5,
        {
          height: _0x32a456,
          sourceLeft: _0x226e7c.sourceLeft,
          sourceTop: 0,
          targetLeft: _0x226e7c.targetLeft,
          targetTop: 0,
          width: _0x226e7c.width,
        },
        _0x2c07ed,
        _0x1a4766.sceneSourceScale,
        _0x1a4766.pixelRatio,
      ),
    _0x3bfb35 === 0 &&
      _0xdd0f83 > 0 &&
      oo(
        _0xde7215,
        _0x3b9ff5,
        {
          height: _0x226e7c.height,
          sourceLeft: 0,
          sourceTop: _0x226e7c.sourceTop,
          targetLeft: 0,
          targetTop: _0x226e7c.targetTop,
          width: _0xdd0f83,
        },
        _0x2c07ed,
        _0x1a4766.sceneSourceScale,
        _0x1a4766.pixelRatio,
      ),
    _0x3bfb35 === 0 &&
      _0xb7ea91 === 0 &&
      _0xdd0f83 > 0 &&
      _0x32a456 > 0 &&
      oo(
        _0xde7215,
        _0x3b9ff5,
        {
          height: _0x32a456,
          sourceLeft: 0,
          sourceTop: 0,
          targetLeft: 0,
          targetTop: 0,
          width: _0xdd0f83,
        },
        _0x2c07ed,
        _0x1a4766.sceneSourceScale,
        _0x1a4766.pixelRatio,
      ),
    _0xb7ea91 === 0 &&
      _0x556cee > 0 &&
      (oo(
        _0xde7215,
        _0x3b9ff5,
        {
          height: _0x556cee,
          sourceLeft: _0x226e7c.sourceLeft,
          sourceTop: _0x4c8021.height - _0x556cee,
          targetLeft: _0x226e7c.targetLeft,
          targetTop: _0x13cb91 - _0x556cee,
          width: _0x226e7c.width,
        },
        _0x2c07ed,
        _0x1a4766.sceneSourceScale,
        _0x1a4766.pixelRatio,
      ),
      _0x3bfb35 === 0 &&
        _0xdd0f83 > 0 &&
        oo(
          _0xde7215,
          _0x3b9ff5,
          {
            height: _0x556cee,
            sourceLeft: 0,
            sourceTop: _0x4c8021.height - _0x556cee,
            targetLeft: 0,
            targetTop: _0x13cb91 - _0x556cee,
            width: _0xdd0f83,
          },
          _0x2c07ed,
          _0x1a4766.sceneSourceScale,
          _0x1a4766.pixelRatio,
        )));
}
function no(_0x8beae7, _0x3d8675, _0x3dbc24) {
  let _0x54e77c = ro(
      _0x3d8675,
      _0x8beae7.bodyViewportWidth,
      _0x8beae7.contentBodyWidth,
    ),
    _0x4e3cc1 = ro(
      _0x3dbc24,
      _0x8beae7.bodyViewportHeight,
      _0x8beae7.contentBodyHeight,
    );
  return {
    height: _0x4e3cc1.size,
    sourceLeft: _0x8beae7.stickyLeftWidth + _0x54e77c.sourceOffset,
    sourceTop: _0x8beae7.stickyHeaderHeight + _0x4e3cc1.sourceOffset,
    targetLeft: _0x8beae7.stickyLeftWidth + _0x54e77c.target,
    targetTop: _0x8beae7.stickyHeaderHeight + _0x4e3cc1.target,
    width: _0x54e77c.size,
  };
}
function ro(_0x514ff8, _0x348591, _0x40c55f) {
  let _0x1f83f0 = _0x514ff8 % _0x348591,
    _0x5be0b4 = _0x514ff8 > 0 && _0x1f83f0 > 0 ? _0x348591 - _0x1f83f0 : 0,
    _0x425908 = _0x514ff8 + _0x5be0b4;
  return {
    size: Math.max(0, Math.min(_0x348591 - _0x5be0b4, _0x40c55f - _0x425908)),
    sourceOffset: _0x5be0b4,
    target: _0x425908,
  };
}
function io(_0x19cd99, _0x2e29c2, _0x3caaec, _0x4254ab) {
  _0x3caaec.width <= 0 ||
    _0x3caaec.height <= 0 ||
    (_0x2e29c2.save(),
    _0x2e29c2.scale(_0x4254ab, _0x4254ab),
    _0x2e29c2.beginPath(),
    _0x2e29c2.rect(
      _0x3caaec.targetLeft,
      _0x3caaec.targetTop,
      _0x3caaec.width,
      _0x3caaec.height,
    ),
    _0x2e29c2.clip(),
    _0x2e29c2.translate(
      _0x3caaec.targetLeft - _0x3caaec.sourceLeft,
      _0x3caaec.targetTop - _0x3caaec.sourceTop,
    ),
    _0x19cd99.makeDirty(true),
    _0x19cd99.render(_0x2e29c2),
    _0x2e29c2.restore());
}
function ao(_0x3d839c) {
  try {
    return _0x3d839c.toDataURL("image/png");
  } catch {
    return;
  }
}
function oo(
  _0x2542b5,
  _0x3d9095,
  _0x78203a,
  _0x1e986e,
  _0x2d9aaf = 1,
  _0x545fd5 = 1,
) {
  _0x78203a.width <= 0 ||
    _0x78203a.height <= 0 ||
    (_0x3d9095.save(),
    _0x3d9095.scale(_0x1e986e, _0x1e986e),
    _0x3d9095.drawImage(
      _0x2542b5,
      _0x78203a.sourceLeft * _0x2d9aaf * _0x545fd5,
      _0x78203a.sourceTop * _0x2d9aaf * _0x545fd5,
      _0x78203a.width * _0x2d9aaf * _0x545fd5,
      _0x78203a.height * _0x2d9aaf * _0x545fd5,
      _0x78203a.targetLeft,
      _0x78203a.targetTop,
      _0x78203a.width,
      _0x78203a.height,
    ),
    _0x3d9095.restore());
}
function so(_0x2c7c58, _0x49d3c8, _0x5093a2, _0x6fc858 = 1) {
  if (!qa(_0x2c7c58) || !qa(_0x49d3c8)) return;
  let _0x353339 = document.createElement("canvas");
  ((_0x353339.width = Math.max(1, Math.ceil(_0x2c7c58 * _0x6fc858))),
    (_0x353339.height = Math.max(1, Math.ceil(_0x49d3c8 * _0x6fc858))));
  let _0x33c53a = _0x353339.getContext("2d");
  if (!_0x33c53a) return;
  let _0x5394f0 = new p["UniverPrintingContext"](_0x33c53a, {
    canvasColorService: _0x5093a2,
  });
  return (
    _0x6fc858 !== 1 && _0x5394f0.scale(_0x6fc858, _0x6fc858),
    { canvas: _0x353339, context: _0x5394f0, nativeContext: _0x33c53a }
  );
}
function co(_0x2caabb) {
  try {
    return (_0x2caabb.runtimeScope["injector"] ?? _0x2caabb.injector).get(
      p.ICanvasColorService,
    );
  } catch {
    return;
  }
}
async function lo(_0x284cda) {
  await Ma(_0x284cda, true);
  try {
    var _0x49d62a;
    return (
      ((_0x49d62a = (_0x284cda.runtimeScope["injector"] ?? _0x284cda.injector)
        .get(p.IRenderManagerService)
        .getRenderUnitById(_0x284cda.childUnitId)) == null
        ? undefined
        : _0x49d62a.scene) ?? undefined
    );
  } catch {
    return;
  }
}
function uo(_0x428235, _0x1a25e7) {
  return _0x428235 == null || typeof _0x428235 == "string"
    ? _0x1a25e7
    : { width: _0x428235.width, height: _0x428235.height };
}
function fo(_0x45b6d1) {
  return (
    _0x45b6d1 === t.EmbedHostEntryEnum["SheetsSheetTab"] ||
    _0x45b6d1 === t.EmbedHostEntryEnum["BasesTableListBlock"] ||
    _0x45b6d1 === t.EmbedHostEntryEnum["SlidesPageListBlock"]
  );
}
function po(_0x47d7dd) {
  return (
    _0x47d7dd === a.UniverInstanceType["UNIVER_SHEET"] ||
    _0x47d7dd === a.UniverInstanceType["UNIVER_BASE"] ||
    _0x47d7dd === a.UniverInstanceType["UNIVER_BOARD"] ||
    _0x47d7dd === a.UniverInstanceType["UNIVER_SLIDE"]
  );
}
function mo(_0x473a21, _0x324f9f, _0x15595c) {
  let _0x447b96 = _0x15595c ? Ba : 1200,
    _0x4b01b9 = _0x15595c ? Va : 1600,
    _0x41e611 = Math.min(1, _0x447b96 / _0x473a21);
  return {
    height: Math.min(_0x324f9f, _0x4b01b9 / _0x41e611),
    scale: _0x41e611,
  };
}
const ho = "UniverEmbedPrintImage",
  go = "UniverEmbedPrintPlaceholder";
function _o(_0x49ca6e) {
  let _0x4e4808 = (0, c.useDependency)(Ua),
    _0x12417a = oi(_0x49ca6e.data),
    _0x25705a = _0x12417a
      ? _0x4e4808.getImage(
          _0x12417a.hostUnitId ?? _0x49ca6e.unitId,
          _0x12417a.embedId,
        )
      : undefined;
  return _0x25705a
    ? (0, m.jsx)("img", {
        alt: "",
        src: _0x25705a,
        style: { display: "block", width: "100%", height: "auto" },
      })
    : null;
}
function vo() {
  return null;
}
function yo(_0x2947f4, _0x742ecc = 1, _0x1d42fb = 1) {
  let _0x57a998 = _0x2947f4.deltaX / (Math.abs(_0x742ecc) || 1),
    _0x3d9e52 = _0x2947f4.deltaY / (Math.abs(_0x1d42fb) || 1);
  if (_0x2947f4.shiftKey)
    ((_0x57a998 =
      ((_0x2947f4.deltaY || _0x2947f4.deltaX) * 3) /
      (Math.abs(_0x742ecc) || 1)),
      (_0x3d9e52 = 0));
  else {
    let _0x4df1fb = Math.abs(_0x57a998),
      _0xe1cc2d = Math.abs(_0x3d9e52);
    _0xe1cc2d >= _0x4df1fb * 2
      ? (_0x57a998 = 0)
      : _0x4df1fb >= _0xe1cc2d * 2 && (_0x3d9e52 = 0);
  }
  return { offsetX: _0x57a998, offsetY: _0x3d9e52 };
}
function bo(_0xb6f428, _0x1e9fa4, _0x5a5147) {
  if (!_0x1e9fa4) return false;
  let { offsetX: _0x5931f0, offsetY: _0x4da33b } = xo(
    _0xb6f428,
    _0x1e9fa4,
    _0x5a5147,
  );
  if (!_0x5931f0 && !_0x4da33b) return false;
  let _0x210e1e = _0x1e9fa4.viewportScrollX ?? 0,
    _0x86863b = _0x1e9fa4.viewportScrollY ?? 0;
  if (
    _0xb6f428.source !== "wheel" &&
    _0x1e9fa4.scrollToViewportPos &&
    (_0xb6f428.viewportScrollX != null || _0xb6f428.viewportScrollY != null)
  )
    _0x1e9fa4.scrollToViewportPos({
      viewportScrollX: _0xb6f428.viewportScrollX ?? _0x210e1e,
      viewportScrollY: _0xb6f428.viewportScrollY ?? _0x86863b,
    });
  else {
    if (_0x1e9fa4.scrollByViewportDeltaVal)
      _0x1e9fa4.scrollByViewportDeltaVal({
        viewportScrollX: _0x5931f0,
        viewportScrollY: _0x4da33b,
      });
    else return false;
  }
  let _0x3ee4b7 =
    (_0x1e9fa4.viewportScrollX ?? 0) !== _0x210e1e ||
    (_0x1e9fa4.viewportScrollY ?? 0) !== _0x86863b;
  if (_0x3ee4b7) {
    var _0x52e75b;
    _0x5a5147 == null ||
      (_0x52e75b = _0x5a5147.makeDirty) == null ||
      _0x52e75b.call(_0x5a5147, true);
  }
  return _0x3ee4b7;
}
function xo(_0x2bbe99, _0x4ec3c3, _0x54457c) {
  return _0x2bbe99.source !== "wheel" &&
    (_0x2bbe99.viewportScrollX != null || _0x2bbe99.viewportScrollY != null)
    ? {
        offsetX:
          (_0x2bbe99.viewportScrollX ?? _0x4ec3c3.viewportScrollX ?? 0) -
          (_0x4ec3c3.viewportScrollX ?? 0),
        offsetY:
          (_0x2bbe99.viewportScrollY ?? _0x4ec3c3.viewportScrollY ?? 0) -
          (_0x4ec3c3.viewportScrollY ?? 0),
      }
    : yo(
        _0x2bbe99.event,
        _0x54457c == null ? undefined : _0x54457c.scaleX,
        _0x54457c == null ? undefined : _0x54457c.scaleY,
      );
}
function So(_0x5a9b91) {
  return _0x5a9b91 + p.ScrollBar["DEFAULT_TOTAL_SIZE"];
}
function Co(_0x4652f2) {
  return _0x4652f2.contentHeight + _0x4652f2.floatingMenuInsetTop;
}
function wo(_0x3dcb19) {
  var _0x2c6f67;
  let { data: _0x507f36, customBlockRenderViewport: _0x5b2cd4 } = _0x3dcb19,
    _0x1849a3 = (0, c.useDependency)(a.ICommandService),
    _0x200da0 = (0, c.useDependency)(a.IUniverInstanceService),
    _0x5dfef0 = (0, c.useDependency)(p.IRenderManagerService),
    _0x17855c = oi(_0x507f36),
    _0x21af80 = _0x17855c == null ? undefined : _0x17855c.hostUnitId,
    _0x1b31dc =
      _0x21af80 ??
      ((_0x2c6f67 = _0x200da0.getCurrentUnitOfType(
        a.UniverInstanceType["UNIVER_DOC"],
      )) == null
        ? undefined
        : _0x2c6f67.getUnitId()),
    _0x5669e3 = (0, d.useRef)(null),
    [_0x313785, _0x289b9f] = (0, d.useState)(() =>
      (0, o.createDefaultDocsTableLikeCustomBlockBleedViewport)(),
    ),
    _0x4e0dd3 = (0, h.isSheetLikeDocsCustomBlockChildType)(
      _0x17855c == null ? undefined : _0x17855c.childType,
    ),
    _0x1a67ca = _0x5b2cd4 == null ? undefined : _0x5b2cd4.bleedLeft,
    _0x413838 = _0x5b2cd4 == null ? undefined : _0x5b2cd4.bleedWidth,
    _0x2b2383 = _0x5b2cd4 == null ? undefined : _0x5b2cd4.contentWidth,
    _0x17363f = Eo(_0x5b2cd4 == null ? undefined : _0x5b2cd4.viewScale),
    _0x263c43 = (0, d.useRef)(_0x17363f),
    _0x469512 = (0, d.useRef)(undefined),
    _0x227a47 = (0, d.useRef)(undefined);
  ((0, d.useEffect)(() => {
    if (!_0x21af80) return;
    let _0x24579f = [],
      _0x449cb0 = () => {
        let _0x3fa094 = _0x200da0.getUnit(
            _0x21af80,
            a.UniverInstanceType["UNIVER_DOC"],
          ),
          _0xb03c4c = _0x3fa094 == null ? undefined : _0x3fa094.zoomRatio;
        typeof _0xb03c4c == "number" &&
          _0x1849a3.syncExecuteCommand(o.SetDocZoomRatioOperation["id"], {
            unitId: _0x21af80,
            zoomRatio: _0xb03c4c,
          });
      },
      _0x2b5c7d = (_0x55df5a) => {
        let _0x1f5b93 = requestAnimationFrame(_0x55df5a);
        _0x24579f.push(() => cancelAnimationFrame(_0x1f5b93));
      },
      _0x5aa6d5 = (_0x5f2acd) => {
        let _0x2c3ec8 = setTimeout(_0x449cb0, _0x5f2acd);
        _0x24579f.push(() => clearTimeout(_0x2c3ec8));
      };
    return (
      _0x449cb0(),
      _0x2b5c7d(_0x449cb0),
      _0x2b5c7d(() => _0x2b5c7d(_0x449cb0)),
      _0x5aa6d5(120),
      _0x5aa6d5(500),
      () => {
        _0x24579f.forEach((_0x4418fe) => _0x4418fe());
      }
    );
  }, [_0x1849a3, _0x21af80, _0x200da0]),
    (0, d.useLayoutEffect)(() => {
      let _0x2a8de4 = _0x5669e3.current;
      if (!_0x2a8de4 || !_0x4e0dd3 || typeof window > "u") return;
      let _0x32bbfe,
        _0x21f9fc = () => {
          _0x32bbfe = undefined;
          let _0x4bb35c = _0x2a8de4.getBoundingClientRect(),
            _0x22e252 = jo(_0x2b2383, () =>
              No(_0x2a8de4, _0x4bb35c.width / _0x17363f),
            ),
            _0x43e1e7 = (0, o.resolveDocsTableLikeCustomBlockBleedViewport)(
              _0x2a8de4,
              _0x22e252,
              {
                authoritativeContentWidth:
                  Number.isFinite(_0x2b2383) && (_0x2b2383 ?? 0) > 0,
                bleedLeft: _0x1a67ca,
                bleedWidth: _0x413838,
                viewScale: _0x17363f,
              },
            );
          _0x289b9f((_0x1cb315) =>
            Math.abs(_0x1cb315.bleedLeft - _0x43e1e7.bleedLeft) < 0.5 &&
            Math.abs(_0x1cb315.bleedRight - _0x43e1e7.bleedRight) < 0.5 &&
            Math.abs(_0x1cb315.bleedWidth - _0x43e1e7.bleedWidth) < 0.5 &&
            Math.abs(_0x1cb315.contentWidth - _0x43e1e7.contentWidth) < 0.5 &&
            Math.abs(_0x1cb315.virtualWidth - _0x43e1e7.virtualWidth) < 0.5
              ? _0x1cb315
              : _0x43e1e7,
          );
        },
        _0x3083c9 = () => {
          _0x32bbfe == null &&
            _0x2a8de4.dataset["embedDocsCustomBlockZooming"] !== "true" &&
            (_0x32bbfe = window.requestAnimationFrame(_0x21f9fc));
        },
        _0x2ff57a = (_0x1259c3) => {
          Mo(_0x2a8de4, _0x1259c3.target) && _0x3083c9();
        };
      _0x21f9fc();
      let _0x16b4d2 = new ResizeObserver(_0x3083c9);
      return (
        _0x16b4d2.observe(_0x2a8de4),
        window.addEventListener("resize", _0x3083c9),
        window.addEventListener("scroll", _0x2ff57a, true),
        () => {
          (_0x32bbfe != null && window.cancelAnimationFrame(_0x32bbfe),
            _0x16b4d2.disconnect(),
            window.removeEventListener("resize", _0x3083c9),
            window.removeEventListener("scroll", _0x2ff57a, true));
        }
      );
    }, [_0x1a67ca, _0x413838, _0x2b2383, _0x4e0dd3, _0x17363f]));
  let _0x491aa2 = _0x4e0dd3
      ? Oo(_0x5b2cd4 == null ? undefined : _0x5b2cd4.contentHeight)
      : (0, o.resolveDocsTableLikeCustomBlockContentHeight)(
          _0x5b2cd4 == null ? undefined : _0x5b2cd4.contentHeight,
          1,
        ),
    _0x15e517 = _0x4e0dd3 ? 52 : 0,
    _0x18a17d = ko({
      contentHeight: _0x491aa2,
      viewportHeight: _0x5b2cd4 == null ? undefined : _0x5b2cd4.viewportHeight,
    }),
    _0x13e7ac = Co({
      contentHeight: _0x491aa2,
      floatingMenuInsetTop: _0x15e517,
    }),
    _0x42a321 = Ao({
      contentWidth: _0x2b2383,
      pageContentWidth:
        _0x5b2cd4 == null ? undefined : _0x5b2cd4.pageContentWidth,
    }),
    _0x1fef25 = _0x4e0dd3
      ? {
          height: _0x13e7ac * _0x17363f,
          minHeight: _0x13e7ac * _0x17363f,
          width: _0x42a321 == null ? undefined : _0x42a321 * _0x17363f,
        }
      : undefined;
  ((0, d.useLayoutEffect)(() => {
    var _0x4a03ff, _0x5ea65b;
    ((_0x263c43.current = _0x17363f),
      (_0x4a03ff = _0x5669e3.current) == null ||
        _0x4a03ff.style["removeProperty"]("overflow"),
      (_0x5ea65b = _0x5669e3.current) == null ||
        delete _0x5ea65b.dataset["embedDocsCustomBlockZooming"]);
  }, [_0x17363f]),
    (0, d.useEffect)(() => {
      if (!_0x4e0dd3 || !_0x1b31dc) return;
      let _0x393702 = _0x5669e3.current,
        _0x4633e6 = () => {
          (_0x227a47.current != null &&
            (window.clearTimeout(_0x227a47.current),
            (_0x227a47.current = undefined)),
            _0x469512.current != null &&
              (window.cancelAnimationFrame(_0x469512.current),
              (_0x469512.current = undefined)));
        },
        _0x1b6a79 = _0x1849a3.onCommandExecuted((_0x3cbf46) => {
          if (_0x3cbf46.id !== o.SetDocZoomRatioOperation["id"]) return;
          let _0x33addb = _0x3cbf46.params;
          if ((_0x33addb == null ? undefined : _0x33addb.unitId) !== _0x1b31dc)
            return;
          let _0x589ebe = _0x5669e3.current,
            _0x5749f4 = Eo(_0x33addb.zoomRatio);
          !_0x589ebe ||
            _0x5749f4 === _0x263c43.current ||
            (To(_0x589ebe, {
              fromScale: _0x263c43.current,
              outerHeight: _0x13e7ac,
              toScale: _0x5749f4,
            }),
            (_0x263c43.current = _0x5749f4),
            _0x4633e6(),
            (_0x227a47.current = window.setTimeout(() => {
              ((_0x227a47.current = undefined),
                (_0x469512.current = window.requestAnimationFrame(() => {
                  ((_0x469512.current = undefined),
                    _0x589ebe.style["removeProperty"]("overflow"),
                    delete _0x589ebe.dataset["embedDocsCustomBlockZooming"]);
                })));
            }, 120)));
        });
      return () => {
        (_0x1b6a79.dispose(),
          _0x4633e6(),
          _0x393702 == null || _0x393702.style["removeProperty"]("overflow"),
          _0x393702 && delete _0x393702.dataset["embedDocsCustomBlockZooming"]);
      };
    }, [_0x1849a3, _0x13e7ac, _0x1b31dc, _0x4e0dd3]));
  let _0x172ee4 = (0, d.useCallback)(
      (_0x586fa2, _0x256b78) => {
        var _0x28130f;
        let _0x566298 =
          (_0x28130f = _0x5dfef0.getRenderUnitById(_0x256b78.hostUnitId)) ==
          null
            ? undefined
            : _0x28130f.scene;
        return bo(
          { ..._0x256b78, event: _0x586fa2, source: "wheel", stage: "stage2" },
          _0x566298 == null
            ? undefined
            : _0x566298.getViewport(o.VIEWPORT_KEY["VIEW_MAIN"]),
          _0x566298,
        );
      },
      [_0x5dfef0],
    ),
    _0x4441a0 = (0, d.useCallback)(
      (_0x37bba9) => {
        Do(_0x5dfef0, _0x1b31dc, _0x37bba9);
      },
      [_0x5dfef0, _0x1b31dc],
    );
  return (0, m.jsx)("div", {
    ref: _0x5669e3,
    className:
      "univer-relative univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-visible [&[data-embed-docs-custom-block-sheet-like=true]]:univer-pointer-events-none [&[data-embed-docs-custom-block-sheet-like=true]]:[contain:layout_style]",
    "data-u-comp": "embed-docs-custom-block",
    "data-embed-docs-custom-block": "true",
    "data-embed-docs-custom-block-child-type":
      (_0x17855c == null ? undefined : _0x17855c.childType) == null
        ? undefined
        : String(_0x17855c.childType),
    "data-embed-docs-custom-block-sheet-like": _0x4e0dd3 ? "true" : undefined,
    style: _0x1fef25,
    children: (0, m.jsx)(_a, {
      ..._0x3dcb19,
      docsCustomBlockLayout: _0x4e0dd3
        ? {
            bleedLeft: _0x313785.bleedLeft,
            bleedWidth: _0x313785.bleedWidth,
            contentHeight: _0x491aa2,
            contentWidth: _0x313785.contentWidth,
            floatingMenuInsetTop: _0x15e517,
            pageContentWidth:
              (_0x5b2cd4 == null ? undefined : _0x5b2cd4.pageContentWidth) ??
              _0x313785.contentWidth,
            sheetLike: true,
            viewScale: _0x17363f,
            visibleCanvasHeight:
              _0x5b2cd4 == null ? undefined : _0x5b2cd4.visibleCanvasHeight,
            viewportHeight: _0x18a17d,
          }
        : { floatingMenuInsetTop: _0x15e517, sheetLike: false },
      interactionFlow: "doc-block",
      onHostWheel: _0x4e0dd3 ? _0x172ee4 : undefined,
      onRuntimeStageEnter: _0x4441a0,
      syncHostVerticalScroll: _0x4e0dd3,
    }),
  });
}
function To(_0x52d98d, _0x39975f) {
  let _0x293f23 = Eo(_0x39975f.fromScale),
    _0x567cc8 = Eo(_0x39975f.toScale),
    _0x57a56d = _0x567cc8 / _0x293f23,
    _0x147256 = _0x39975f.outerHeight * _0x567cc8;
  ((_0x52d98d.style["height"] = _0x147256 + "px"),
    (_0x52d98d.style["minHeight"] = _0x147256 + "px"),
    (_0x52d98d.style["overflow"] = "hidden"),
    (_0x52d98d.dataset["embedDocsCustomBlockZooming"] = "true"));
  let _0x2873d8 = _0x52d98d.querySelector('[data-embed-float-content="true"]');
  _0x2873d8 &&
    ["top", "left"].forEach((_0x414eb5) => {
      let _0x3c1c9e = Number.parseFloat(_0x2873d8.style[_0x414eb5]);
      Number.isFinite(_0x3c1c9e) &&
        (_0x2873d8.style[_0x414eb5] = _0x3c1c9e * _0x57a56d + "px");
    });
  let _0x43a86a = _0x52d98d.querySelector('[data-embed-float-live="true"]');
  _0x43a86a &&
    (_0x43a86a.style["transform"] =
      _0x567cc8 === 1 ? "" : "scale(" + _0x567cc8 + ")");
}
function Eo(_0x3d2e9b) {
  return typeof _0x3d2e9b == "number" &&
    Number.isFinite(_0x3d2e9b) &&
    _0x3d2e9b > 0
    ? _0x3d2e9b
    : 1;
}
function Do(_0x1fca2c, _0x34f073, _0x388f61) {
  var _0x497053;
  _0x388f61 !== "stage2" ||
    !_0x34f073 ||
    (_0x497053 = _0x1fca2c.getRenderUnitById(_0x34f073)) == null ||
    (_0x497053 = _0x497053.with(o.DocSelectionRenderService)) == null ||
    _0x497053.blur();
}
function Oo(_0x3d849c) {
  return (0, o.resolveDocsTableLikeCustomBlockContentHeight)(_0x3d849c, 480);
}
function ko(_0x3355ae) {
  return (0, o.resolveDocsTableLikeCustomBlockContentHeight)(
    _0x3355ae.viewportHeight,
    _0x3355ae.contentHeight,
  );
}
function Ao(_0x5598a9) {
  let { contentWidth: _0x560827, pageContentWidth: _0x5d4628 } = _0x5598a9;
  if (!(
    typeof _0x560827 != "number" ||
    !Number.isFinite(_0x560827) ||
    _0x560827 <= 0
  ))
    return typeof _0x5d4628 == "number" &&
      Number.isFinite(_0x5d4628) &&
      _0x5d4628 > 0
      ? Math.min(_0x560827, _0x5d4628)
      : _0x560827;
}
function jo(_0xbb752c, _0x72dd22) {
  return Number.isFinite(_0xbb752c) && (_0xbb752c ?? 0) > 0
    ? _0xbb752c
    : (0, o.resolveDocsTableLikeCustomBlockContentWidth)(
        undefined,
        _0x72dd22(),
      );
}
function Mo(_0x264b93, _0x3c139e) {
  return !(_0x3c139e instanceof Node && _0x264b93.contains(_0x3c139e));
}
function No(_0x54a158, _0x32f8a0) {
  let _0xfd2d8c = _0x54a158.querySelector(
      '[data-u-comp="embed-float-dom-live-content"]',
    ),
    _0x3a79b9 = _0x54a158.querySelector(
      '[data-u-comp="embed-float-dom-live-canvas"]',
    ),
    _0x535b9a = [Math.max(1, _0x32f8a0)];
  return (
    Po(_0xfd2d8c, _0x535b9a),
    Po(_0x3a79b9, _0x535b9a),
    Math.max(
      ..._0x535b9a.filter(
        (_0x4c138e) => Number.isFinite(_0x4c138e) && _0x4c138e > 0,
      ),
    )
  );
}
function Po(_0x180330, _0x26b91f) {
  if (_0x180330) {
    _0x26b91f.push(
      _0x180330.scrollWidth,
      _0x180330.offsetWidth,
      _0x180330.getBoundingClientRect().width,
    );
    for (let _0x4be181 of Array.from(_0x180330.children)) {
      if (!(_0x4be181 instanceof HTMLElement)) continue;
      let _0x2196ce = _0x4be181.getBoundingClientRect(),
        _0x558d44 = _0x180330.getBoundingClientRect();
      _0x26b91f.push(
        _0x4be181.scrollWidth,
        _0x4be181.offsetWidth,
        _0x2196ce.right - _0x558d44.left,
      );
    }
  }
}
let Fo = class extends a.Disposable {
  constructor(_0x136a62) {
    (super(), (this._componentManager = _0x136a62), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(
      this._componentManager["register"](
        h.EMBED_DOCS_CUSTOM_BLOCK_DEFAULT_COMPONENT_KEY,
        wo,
      ),
    ),
      this.disposeWithMe(
        this._componentManager["register"](
          t.EMBED_SHEETS_FLOATING_COMPONENT_KEY,
          _a,
        ),
      ),
      this.disposeWithMe(this._componentManager["register"](ho, _o)),
      this.disposeWithMe(this._componentManager["register"](go, vo)));
  }
};
Fo = Z([X(0, (0, a.Inject)(c.ComponentManager))], Fo);
let Io = class {
  constructor(_0x2d0ae4, _0x3acbd8) {
    ((this._injector = _0x2d0ae4),
      (this._passiveWheelHandlerRegistry = _0x3acbd8),
      this._passiveWheelHandlerRegistry["register"]({
        childType: a.UniverInstanceType["UNIVER_DOC"],
        handleWheel: (_0x3456d3) =>
          this._injector["has"](y.DocsTablePassiveWheelService)
            ? this._injector["get"](y.DocsTablePassiveWheelService).handleWheel(
                {
                  childUnitId: _0x3456d3.childUnitId,
                  event: _0x3456d3.event,
                  source: _0x3456d3.source,
                },
              )
            : false,
        order: 100,
      }));
  }
};
Io = Z([X(0, (0, a.Inject)(a.Injector)), X(1, (0, a.Inject)(ai))], Io);
const Lo = [
  a.UniverInstanceType["UNIVER_DOC"],
  a.UniverInstanceType["UNIVER_SHEET"],
  a.UniverInstanceType["UNIVER_BASE"],
  a.UniverInstanceType["UNIVER_SLIDE"],
];
let Ro = class extends a.Disposable {
  constructor(_0x38f196, _0x109a40) {
    (super(),
      (this._univerInstanceService = _0x38f196),
      (this._anchorModelService = _0x109a40),
      Lo.forEach((_0x48047e) => {
        this.disposeWithMe(
          this._univerInstanceService["getTypeOfUnitDisposed$"](
            _0x48047e,
          ).subscribe((_0x568d22) => {
            this._anchorModelService["clearUnit"](_0x568d22.getUnitId());
          }),
        );
      }));
  }
};
Ro = Z(
  [
    X(0, a.IUniverInstanceService),
    X(1, (0, a.Inject)(t.EmbedHostAnchorModelService)),
  ],
  Ro,
);
let zo = class extends a.Disposable {
  constructor(_0x50be5e, _0x23877c) {
    (super(),
      (this._injector = _0x50be5e),
      (this._runtimeFocusCoordinator = _0x23877c),
      V(this, "_suspendedSheetNote", null),
      V(this, "_suppressedSheetNoteHostUnitId", null),
      this.disposeWithMe(
        this._runtimeFocusCoordinator["runtimeSessionChanged$"].subscribe(
          () => {
            this._syncHostPopupVisibility();
          },
        ),
      ));
  }
  _syncHostPopupVisibility() {
    let _0x4dfb35 =
        this._runtimeFocusCoordinator[
          "resolveActiveChildSessionRuntimeScope"
        ](),
      _0x578133 =
        (_0x4dfb35 == null ? undefined : _0x4dfb35.hostUnitId) ?? null;
    (this._hideDocParagraphMenu(_0x578133),
      this._clearHostDrawingSelection(_0x578133));
    let _0x40f965 =
      (_0x4dfb35 == null ? undefined : _0x4dfb35.sessionMode) ===
      "child-fullscreen"
        ? (_0x4dfb35.hostUnitId ?? null)
        : null;
    (this._syncPersistentSheetNotes(_0x40f965),
      this._syncActiveSheetNote(_0x40f965));
  }
  _hideDocParagraphMenu(_0x42014c) {
    if (!_0x42014c || !this._injector["has"](p.IRenderManagerService)) return;
    let _0x10da90 = this._injector["get"](
      p.IRenderManagerService,
    ).getRenderUnitById(_0x42014c);
    (_0x10da90 == null ? undefined : _0x10da90.type) ===
      a.UniverInstanceType["UNIVER_DOC"] &&
      _0x10da90.with(o.DocParagraphMenuService).hideParagraphMenu(true);
  }
  _clearHostDrawingSelection(_0x20d444) {
    var _0x5ba23c;
    !_0x20d444 ||
      !this._injector["has"](p.IRenderManagerService) ||
      (_0x5ba23c = this._injector["get"](
        p.IRenderManagerService,
      ).getRenderUnitById(_0x20d444)) == null ||
      (_0x5ba23c = _0x5ba23c.scene["getTransformer"]()) == null ||
      _0x5ba23c.clearSelectedObjects();
  }
  _syncPersistentSheetNotes(_0x44e232) {
    if (_0x44e232 !== this._suppressedSheetNoteHostUnitId) {
      let _0x105abe = this._injector["has"](b.SheetsNoteAttachmentController)
        ? this._injector["get"](b.SheetsNoteAttachmentController)
        : null;
      (this._suppressedSheetNoteHostUnitId &&
        (_0x105abe == null ||
          _0x105abe.setPopupSuppressed(
            this._suppressedSheetNoteHostUnitId,
            false,
          )),
        _0x44e232 &&
          (_0x105abe == null || _0x105abe.setPopupSuppressed(_0x44e232, true)),
        (this._suppressedSheetNoteHostUnitId = _0x44e232));
    }
  }
  _syncActiveSheetNote(_0x3414fd) {
    var _0x43b399;
    if (!this._injector["has"](b.SheetsNotePopupService)) return;
    let _0x1174d1 = this._injector["get"](b.SheetsNotePopupService),
      _0x5a4dc3 = _0x1174d1.activePopup;
    if (
      _0x3414fd != null &&
      _0x3414fd ===
        ((_0x5a4dc3 == null ? undefined : _0x5a4dc3.unitId) ??
          ((_0x43b399 = this._suspendedSheetNote) == null
            ? undefined
            : _0x43b399.unitId))
    ) {
      (_0x5a4dc3 && !_0x5a4dc3.temp && (this._suspendedSheetNote = _0x5a4dc3),
        _0x1174d1.hidePopup(true));
      return;
    }
    if (!this._suspendedSheetNote) return;
    let _0x314817 = this._suspendedSheetNote;
    ((this._suspendedSheetNote = null),
      _0x5a4dc3 || _0x1174d1.showPopup(_0x314817));
  }
};
zo = Z([X(0, (0, a.Inject)(a.Injector)), X(1, (0, a.Inject)(K))], zo);
let Bo = class extends a.Disposable {
  constructor(_0x1c5a52, _0x37b824, _0x190ad4, _0x34c589, _0x1bfc68) {
    (super(),
      (this._menuOverrideService = _0x1c5a52),
      (this._blockRegistry = _0x37b824),
      (this._ribbonOverrideService = _0x190ad4),
      (this._injector = _0x1bfc68),
      V(this, "_current", null),
      V(this, "_currentOverride", null),
      this.disposeWithMe(
        _0x34c589.registerDisabledUIParts(
          [c.BuiltInUIPart["TOOLBAR"]],
          this._menuOverrideService["override$"].pipe(
            (0, f.map)((_0x2f71c4) => {
              var _0x91b8b7;
              return (
                _0x2f71c4 != null &&
                ((_0x91b8b7 = this._blockRegistry["get"](
                  _0x2f71c4.childType,
                )) == null
                  ? undefined
                  : _0x91b8b7.hostChromeMode) === "none"
              );
            }),
            (0, f.distinctUntilChanged)(),
          ),
        ),
      ),
      this.disposeWithMe(
        (0, a.toDisposable)(
          this._menuOverrideService["override$"].subscribe((_0x2ef33f) => {
            var _0x4a91f7, _0x3b7f63;
            if (!_0x2ef33f) {
              (this._current
                ? (this._current["dispose"](), (this._current = null))
                : this._ribbonOverrideService["clear"](),
                (this._currentOverride = null));
              return;
            }
            if (Vo(this._currentOverride, _0x2ef33f)) return;
            let _0x1a4ca6 = this._blockRegistry["get"](_0x2ef33f.childType),
              _0x35b6f9 =
                _0x1a4ca6 == null ||
                (_0x4a91f7 = _0x1a4ca6.createRibbonOverride) == null
                  ? undefined
                  : _0x4a91f7.call(_0x1a4ca6, {
                      childType: _0x2ef33f.childType,
                      childUnitId: _0x2ef33f.childUnitId,
                      injector: this._injector,
                      embedId: _0x2ef33f.embedId,
                      hostUnitId: _0x2ef33f.hostUnitId,
                      entry: _0x2ef33f.entry,
                    });
            if (!_0x35b6f9) {
              var _0xa8594a;
              ((_0xa8594a = this._current) == null || _0xa8594a.dispose(),
                (this._current = null),
                (this._currentOverride = null),
                this._ribbonOverrideService["clear"]());
              return;
            }
            (this._ribbonOverrideService["activate"]({
              id: _0x2ef33f.embedId,
              ribbonService: _0x35b6f9.ribbonService,
              injector: _0x35b6f9.injector,
              portalContainer:
                _0x35b6f9.portalContainer ?? _0x2ef33f.portalContainer,
              placeholderTitle: _0x35b6f9.placeholderTitle,
              hideToolbar: _0x35b6f9.hideToolbar,
            }),
              (_0x3b7f63 = this._current) == null || _0x3b7f63.dispose(),
              (this._current = null),
              (this._currentOverride = null));
            let _0x42c7f3 = this._registerRibbonOwnership(_0x2ef33f);
            ((this._currentOverride = _0x2ef33f),
              (this._current = (0, a.toDisposable)(() => {
                var _0x3190fe;
                (_0x42c7f3 == null || _0x42c7f3.dispose(),
                  this._ribbonOverrideService["clear"](_0x2ef33f.embedId),
                  (_0x3190fe = _0x35b6f9.disposable) == null ||
                    _0x3190fe.dispose(),
                  (this._currentOverride = null));
              })));
          }),
        ),
      ));
  }
  _registerRibbonOwnership(_0x51ca6f) {
    var _0x7deb67;
    let _0x34a244 =
        ((_0x7deb67 = _0x51ca6f.portalContainer) == null
          ? undefined
          : _0x7deb67.ownerDocument) ??
        (typeof document > "u" ? undefined : document),
      _0x4e4576 =
        _0x34a244 == null
          ? undefined
          : _0x34a244.querySelector('[data-u-comp="headerbar"]');
    if (!_0x4e4576) return;
    let _0xba9866 = [];
    return (
      this._injector["has"](J) &&
        _0xba9866.push(
          this._injector["get"](J).registerRoot(
            _0x51ca6f.embedId,
            _0x4e4576,
            _0x51ca6f.childUnitId,
          ),
        ),
      this._injector["has"](K) &&
        _0xba9866.push(
          this._injector["get"](K).registerElement({
            embedId: _0x51ca6f.embedId,
            role: "floating-menu",
            element: _0x4e4576,
          }),
        ),
      _0xba9866.length
        ? (0, a.toDisposable)(() =>
            [..._0xba9866]
              .reverse()
              .forEach((_0x170187) => _0x170187.dispose()),
          )
        : undefined
    );
  }
  dispose() {
    var _0x115229;
    ((_0x115229 = this._current) == null || _0x115229.dispose(),
      (this._current = null),
      (this._currentOverride = null),
      super.dispose());
  }
};
Bo = Z(
  [
    X(0, (0, a.Inject)(U)),
    X(1, (0, a.Inject)(H)),
    X(2, (0, a.Inject)(c.IRibbonOverrideService)),
    X(3, (0, a.Inject)(c.IUIPartsService)),
    X(4, (0, a.Inject)(a.Injector)),
  ],
  Bo,
);
function Vo(_0x10d882, _0x1d0057) {
  return (
    _0x10d882 != null &&
    _0x10d882.hostUnitId === _0x1d0057.hostUnitId &&
    _0x10d882.embedId === _0x1d0057.embedId &&
    _0x10d882.childUnitId === _0x1d0057.childUnitId &&
    _0x10d882.childType === _0x1d0057.childType &&
    _0x10d882.entry === _0x1d0057.entry &&
    _0x10d882.reason === _0x1d0057.reason &&
    _0x10d882.portalContainer === _0x1d0057.portalContainer &&
    _0x10d882.hideHostFxBar === _0x1d0057.hideHostFxBar &&
    _0x10d882.lockHostRibbon === _0x1d0057.lockHostRibbon
  );
}
let Ho = class extends a.Disposable {
  constructor(_0xcab122, _0xa16c04, _0x14f4c0) {
    (super(),
      (this._commandService = _0xcab122),
      (this._embedModelService = _0xa16c04),
      (this._dialogService = _0x14f4c0),
      V(this, "_dialogs", []));
    let _0xf4f3b7 = this._dialogService["getDialogs$"]().subscribe(
      (_0x4b3bde) => {
        this._dialogs = _0x4b3bde;
      },
    );
    (this.disposeWithMe((0, a.toDisposable)(() => _0xf4f3b7.unsubscribe())),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0xcc9001) => {
          var _0x4a9c63;
          if (_0xcc9001.id !== t.SoftDeleteEmbedDescriptorMutation["id"])
            return;
          let _0x4034ab = _0xcc9001.params;
          if (
            typeof (_0x4034ab == null ? undefined : _0x4034ab.embedId) !=
              "string" ||
            typeof _0x4034ab.unitId != "string"
          )
            return;
          let _0x3dba39 =
            (_0x4a9c63 = this._embedModelService["getDescriptor"](
              _0x4034ab.unitId,
              _0x4034ab.embedId,
            )) == null
              ? undefined
              : _0x4a9c63.childUnitId;
          _0x3dba39 &&
            this._dialogs["forEach"]((_0xae0ec6) => {
              Uo(_0xae0ec6) === _0x3dba39 &&
                this._dialogService["close"](_0xae0ec6.id);
            });
        }),
      ));
  }
  dispose() {
    (super.dispose(), (this._dialogs = []));
  }
};
Ho = Z(
  [
    X(0, a.ICommandService),
    X(1, (0, a.Inject)(t.EmbedModelService)),
    X(2, (0, a.Inject)(c.IDialogService)),
  ],
  Ho,
);
function Uo(_0x24f8e7) {
  var _0x573304, _0xb6cf29;
  let _0x436c0f =
    (_0x573304 = _0x24f8e7.children) == null ? undefined : _0x573304.label;
  if (!_0x436c0f || typeof _0x436c0f == "string") return;
  let _0x21cf38 =
    (_0xb6cf29 = _0x436c0f.props) == null ? undefined : _0xb6cf29.unitId;
  return typeof _0x21cf38 == "string" ? _0x21cf38 : undefined;
}
let Wo = class extends a.Disposable {
  constructor(
    _0x78370c,
    _0x4a65b6,
    _0x3d8952,
    _0x5618f9,
    _0x16dbf7,
    _0x1df715,
  ) {
    (super(),
      (this._embedPrintService = _0x78370c),
      (this._printPreparationService = _0x4a65b6),
      (this._injector = _0x3d8952),
      (this._univerInstanceService = _0x5618f9),
      (this._slidePrintDrawingTransformService = _0x16dbf7),
      (this._boardPrintCompositionService = _0x1df715),
      V(this, "_docPrintRegistered", false),
      V(this, "_sheetPrintRegistered", false),
      V(this, "_docPrintLayouts", new Map()),
      this._registerPrintPreparation(),
      this._registerSlidePrinting(),
      this._registerBoardPrinting());
  }
  async prepare(_0x316ac2) {
    if (
      (_0x316ac2.unitType === a.UniverInstanceType["UNIVER_DOC"]
        ? (this._registerDocPrinting(),
          this._docPrintLayouts["delete"](_0x316ac2.unitId))
        : _0x316ac2.unitType === a.UniverInstanceType["UNIVER_SHEET"] &&
          this._registerSheetPrinting(),
      await this._embedPrintService["prepare"](_0x316ac2),
      _0x316ac2.unitType === a.UniverInstanceType["UNIVER_DOC"])
    ) {
      let _0x412323 = this._univerInstanceService["getUnit"](
          _0x316ac2.unitId,
          a.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x2b0f40 = _0x412323 == null ? undefined : _0x412323.getSnapshot();
      if (_0x412323 && _0x2b0f40) {
        let _0x152fc0 =
            _0x412323.getDocumentStyle().documentFlavor ===
            a.DocumentFlavor["MODERN"],
          _0x1609ad = _0x152fc0
            ? undefined
            : this._resolveDocPageMetrics(_0x316ac2.unitId),
          _0x391306 = Zo(
            _0x2b0f40,
            _0x316ac2.unitId,
            this._embedPrintService,
            _0x1609ad,
            _0x152fc0 || !!_0x1609ad,
            _0x152fc0,
          );
        (this._docPrintLayouts["set"](_0x316ac2.unitId, _0x391306),
          (_0x316ac2.contentHeight = Math.max(
            _0x316ac2.contentHeight ?? 0,
            _0x391306.contentHeight,
          )),
          _0x152fc0 &&
            (_0x316ac2.contentHeightAdjustment =
              (_0x316ac2.contentHeightAdjustment ?? 0) +
              _0x391306.contentHeightAdjustment),
          _0x152fc0 &&
            _0x391306.pageBreakRanges["length"] &&
            (_0x316ac2.pageBreakRanges ??= []).push(
              ..._0x391306.pageBreakRanges,
            ));
      }
    }
  }
  _registerPrintPreparation() {
    this.disposeWithMe(
      this._printPreparationService["registerContribution"](this),
    );
  }
  _resolveDocPageMetrics(_0x490197) {
    var _0x4a592a, _0x4069de;
    let _0x1cf134 = this._injector["get"](
        p.IRenderManagerService,
      ).getRenderUnitById(_0x490197),
      _0x25acd1 =
        _0x1cf134 == null ||
        (_0x4a592a = _0x1cf134
          .with(h.DocSkeletonManagerService)
          .getSkeleton()
          .getSkeletonData()) == null
          ? undefined
          : _0x4a592a.pages[0],
      _0x1ff032 =
        (_0x4069de = this._univerInstanceService["getUnit"](
          _0x490197,
          a.UniverInstanceType["UNIVER_DOC"],
        )) == null ||
        (_0x4069de = _0x4069de.getDocumentStyle().pageSize) == null
          ? undefined
          : _0x4069de.height,
      _0x4975f0 = _0x1cf134 == null ? undefined : _0x1cf134.mainComponent;
    if (!(_0x4975f0 instanceof p.Documents)) return;
    let _0x52072f = _0x4975f0.getOffsetConfig().docsTop ?? 0,
      _0x2108b8 =
        _0x25acd1 && os(_0x25acd1.pageHeight)
          ? _0x25acd1.pageHeight
          : _0x1ff032;
    return os(_0x2108b8)
      ? { firstTop: _0x52072f, pageStride: _0x2108b8 + _0x52072f }
      : undefined;
  }
  _registerDocPrinting() {
    if (this._docPrintRegistered) return;
    let _0x488675 = this._injector["get"](o.DocPrintInterceptorService);
    (_0x488675.registerPrintComponent(
      h.EMBED_DOCS_CUSTOM_BLOCK_DEFAULT_COMPONENT_KEY,
      go,
    ),
      this.disposeWithMe(
        _0x488675.interceptor["intercept"](
          _0x488675.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT,
          {
            handler: (_0x381243, _0x24ab67, _0x492486) => {
              var _0x215438;
              if (!_0x381243) return _0x492486(_0x381243);
              let _0x117923 = _0x492486(_0x381243),
                _0x3b91d8 =
                  (_0x215438 = this._univerInstanceService["getUnit"](
                    _0x24ab67.unitId,
                    a.UniverInstanceType["UNIVER_DOC"],
                  )) == null
                    ? undefined
                    : _0x215438.getSnapshot();
              return (
                _0x3b91d8 &&
                  qo(
                    _0x24ab67.root["parentElement"] ?? _0x24ab67.root,
                    _0x3b91d8,
                    _0x24ab67.unitId,
                    _0x24ab67.offset,
                    _0x24ab67.bound,
                    this._embedPrintService,
                    _0x381243,
                    this._docPrintLayouts["get"](_0x24ab67.unitId),
                  ),
                _0x117923
              );
            },
          },
        ),
      ),
      (this._docPrintRegistered = true));
  }
  _registerSheetPrinting() {
    if (this._sheetPrintRegistered) return;
    let _0x5e826f = this._injector["get"](s.SheetPrintInterceptorService);
    (_0x5e826f.registerPrintComponent(
      t.EMBED_SHEETS_FLOATING_COMPONENT_KEY,
      ho,
    ),
      this.disposeWithMe(
        _0x5e826f.interceptor["intercept"](
          _0x5e826f.interceptor["getInterceptPoints"]().PRINTING_RANGE,
          {
            handler: (_0x5d8eec, _0x438d26, _0x253aee) =>
              _0x253aee(
                this._getOriginalSheetTabData(
                  _0x438d26.unitId,
                  _0x438d26.subUnitId,
                )
                  ? { startRow: 0, endRow: 0, startColumn: 0, endColumn: 0 }
                  : _0x5d8eec,
              ),
          },
        ),
      ),
      this.disposeWithMe(
        _0x5e826f.interceptor["intercept"](
          _0x5e826f.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT,
          {
            handler: (_0x5b6f31, _0xa821e3, _0x108774) => {
              if (!_0x5b6f31) return _0x108774(_0x5b6f31);
              let _0x452267 =
                  this._getOriginalSheetTabData(
                    _0xa821e3.unitId,
                    _0xa821e3.subUnitId,
                  ) ??
                  (0, t.getEmbedSheetsTabCustomData)(
                    _0xa821e3.worksheet["getSnapshot"](),
                  ),
                _0x45de07 =
                  _0x452267 &&
                  this._embedPrintService["getResource"](
                    _0xa821e3.unitId,
                    _0x452267.embedId,
                  );
              if (!(_0x45de07 != null && _0x45de07.source))
                return _0x108774(_0x5b6f31);
              let _0x3cacd2 = ss(_0xa821e3.root, _0x45de07.source, _0x5b6f31, {
                height: _0xa821e3.engine["getCanvas"]().getHeight(),
                offsetX: _0xa821e3.offset["offsetX"],
                offsetY: _0xa821e3.offset["offsetY"],
                width: _0xa821e3.engine["getCanvas"]().getWidth(),
              });
              return (
                _0x3cacd2.complete ||
                  _0xa821e3.resourceCollector["add"](cs(_0x3cacd2)),
                _0x108774(_0x5b6f31)
              );
            },
          },
        ),
      ),
      (this._sheetPrintRegistered = true));
  }
  _getOriginalSheetTabData(_0x4a3144, _0x4702eb) {
    var _0x41b209;
    let _0x52efb1 =
      (_0x41b209 = this._univerInstanceService["getUnit"](
        _0x4a3144,
        a.UniverInstanceType["UNIVER_SHEET"],
      )) == null
        ? undefined
        : _0x41b209.getSheetBySheetId(_0x4702eb);
    return (
      _0x52efb1 && (0, t.getEmbedSheetsTabCustomData)(_0x52efb1.getSnapshot())
    );
  }
  _registerSlidePrinting() {
    this.disposeWithMe(
      this._slidePrintDrawingTransformService["register"](
        (_0x17995e, _0x1f740a) =>
          ls(_0x17995e, _0x1f740a, this._embedPrintService),
      ),
    );
  }
  _registerBoardPrinting() {
    this.disposeWithMe(
      this._boardPrintCompositionService["register"]((_0x2173ac, _0x57d41f) =>
        Go(_0x2173ac, _0x57d41f, this._embedPrintService),
      ),
    );
  }
  dispose() {
    (this._docPrintLayouts["clear"](), super.dispose());
  }
};
Wo = Z(
  [
    X(0, (0, a.Inject)(Ua)),
    X(1, r.IPrintPreparationService),
    X(2, (0, a.Inject)(a.Injector)),
    X(3, a.IUniverInstanceService),
    X(4, (0, a.Inject)(i.SlidePrintDrawingTransformService)),
    X(5, (0, a.Inject)(e.BoardPrintCompositionService)),
  ],
  Wo,
);
function Go(_0xbfe846, _0x4123e0, _0x18d1d2) {
  let _0x1b182f = { ..._0xbfe846.data };
  return (
    _0xbfe846.order["forEach"]((_0x4b3aa8) => {
      let _0x4ab87f = _0x1b182f[_0x4b3aa8],
        _0x3a14d7 = _0x4ab87f == null ? undefined : _0x4ab87f.element;
      if (
        !_0x4ab87f ||
        !(0, x.isEmbedBoardsFloatingElement)(_0x3a14d7) ||
        _0x3a14d7.visible === false
      )
        return;
      let _0x3c85bf = (0, x.getEmbedBoardsFloatingCustomData)(_0x3a14d7),
        _0x162802 =
          _0x3c85bf &&
          _0x18d1d2.getResource(
            _0x4123e0.boardModel["getUnitId"](),
            _0x3c85bf.embedId,
          );
      _0x162802 != null &&
        _0x162802.source &&
        (_0x1b182f[_0x4b3aa8] = {
          ..._0x4ab87f,
          element: Ko(_0x3a14d7, _0x162802.source),
        });
    }),
    { data: _0x1b182f, order: _0xbfe846.order }
  );
}
function Ko(_0x15b03b, _0x4b4321) {
  return {
    id: _0x15b03b.id,
    type: x.BoardElementType["Image"],
    transform: _0x15b03b.transform,
    source: _0x4b4321,
    imageSourceType: a.ImageSourceType["URL"],
    parentId: _0x15b03b.parentId,
    laneId: _0x15b03b.laneId,
    role: _0x15b03b.role,
    managedBy: _0x15b03b.managedBy,
    name: _0x15b03b.name,
    description: _0x15b03b.description,
    visible: _0x15b03b.visible,
    selectable: _0x15b03b.selectable,
    locked: _0x15b03b.locked,
    custom: _0x15b03b.custom,
  };
}
function qo(
  _0x2ee741,
  _0x31e60f,
  _0x5697c8,
  _0x168a93,
  _0x23385e,
  _0x414004,
  _0x2b77a4,
  _0x3df928,
) {
  var _0x22fa49;
  (_0x22fa49 = _0x31e60f.drawingsOrder) == null ||
    _0x22fa49.forEach((_0x4bbcb2) => {
      var _0x3214f8;
      let _0x253d1b =
        (_0x3214f8 = _0x31e60f.drawings) == null
          ? undefined
          : _0x3214f8[_0x4bbcb2];
      if (!_0x253d1b) return;
      let _0x9998fc = oi("data" in _0x253d1b ? _0x253d1b.data : undefined),
        _0x439cff =
          _0x9998fc &&
          _0x414004.getResource(
            _0x9998fc.hostUnitId ?? _0x5697c8,
            _0x9998fc.embedId,
          ),
        _0x2677d0 =
          _0x3df928 == null ? undefined : _0x3df928.drawings["get"](_0x4bbcb2);
      if (_0x439cff != null && _0x439cff.canvas) {
        var _0xa5a534;
        let _0x34507e = $o(_0x253d1b),
          _0x3d8695 =
            _0x2677d0 != null &&
            (_0xa5a534 = _0x2677d0.segments) != null &&
            _0xa5a534.length
              ? _0x2677d0.segments
              : Jo(_0x439cff, _0x2677d0, _0x34507e);
        if (
          (Yo(
            _0x2ee741,
            _0x34507e.left,
            _0x34507e.width,
            _0x439cff,
            _0x3d8695,
            _0x168a93,
            _0x23385e,
            _0x2b77a4,
          ),
          _0x3d8695.length)
        )
          return;
      }
      let _0x138b41 = Xo(_0x253d1b, _0x4bbcb2, _0x5697c8, _0x414004, _0x3df928);
      if (!_0x138b41) return;
      let {
        height: _0x509749,
        left: _0x2d23ee,
        source: _0x38cdd4,
        top: _0x8b3c8e,
        width: _0x3a1356,
      } = _0x138b41;
      if (
        _0x2d23ee + _0x3a1356 < _0x23385e.left ||
        _0x2d23ee > _0x23385e.right ||
        _0x8b3c8e + _0x509749 < _0x23385e.top ||
        _0x8b3c8e > _0x23385e.bottom
      )
        return;
      let _0x38c09d = document.createElement("img");
      ((_0x38c09d.alt = ""),
        (_0x38c09d.src = _0x38cdd4),
        (_0x38c09d.style["position"] = "absolute"),
        (_0x38c09d.style["left"] = _0x2d23ee - _0x168a93.x + "px"),
        (_0x38c09d.style["top"] = _0x8b3c8e - _0x168a93.y + "px"),
        (_0x38c09d.style["width"] = _0x3a1356 + "px"),
        (_0x38c09d.style["height"] = _0x509749 + "px"),
        (_0x38c09d.style["objectFit"] = "contain"),
        (_0x38c09d.style["objectPosition"] = "left top"),
        (_0x38c09d.style["display"] = "block"),
        (_0x38c09d.style["zIndex"] = "11"),
        _0x2ee741.appendChild(_0x38c09d),
        _0x2b77a4.add((0, a.toDisposable)(() => _0x38c09d.remove())));
    });
}
function Jo(_0x1c269e, _0x3f27b1, _0x3a66e0) {
  if (!_0x1c269e.canvas || !as(_0x3a66e0.top) || !os(_0x3a66e0.width))
    return [];
  let _0x2d85b3 =
      (_0x3f27b1 == null ? undefined : _0x3f27b1.top) ?? _0x3a66e0.top,
    _0x4a1b79 =
      (_0x3f27b1 == null ? undefined : _0x3f27b1.height) ??
      (os(_0x1c269e.width)
        ? (_0x3a66e0.width * _0x1c269e.height) / _0x1c269e.width
        : _0x3a66e0.height);
  return as(_0x2d85b3) && os(_0x4a1b79)
    ? [
        {
          height: _0x4a1b79,
          sourceHeight: _0x1c269e.canvas["height"],
          sourceTop: 0,
          top: _0x2d85b3,
        },
      ]
    : [];
}
function Yo(
  _0x5b1532,
  _0x1b240a,
  _0x2fbd80,
  _0x3ee028,
  _0x1e8ed5,
  _0x44420f,
  _0x49613e,
  _0x24031b,
) {
  let _0x4418b8 = _0x3ee028.canvas;
  !_0x4418b8 ||
    !as(_0x1b240a) ||
    !os(_0x2fbd80) ||
    !os(_0x3ee028.width) ||
    _0x1e8ed5.forEach((_0x4c5374) => {
      var _0x1e6aac;
      if (
        _0x1b240a + _0x2fbd80 < _0x49613e.left ||
        _0x1b240a > _0x49613e.right ||
        _0x4c5374.top + _0x4c5374.height <= _0x49613e.top ||
        _0x4c5374.top >= _0x49613e.bottom
      )
        return;
      let _0x24f4cd = document.createElement("canvas");
      ((_0x24f4cd.width = _0x4418b8.width),
        (_0x24f4cd.height = Math.max(1, Math.ceil(_0x4c5374.sourceHeight))),
        (_0x1e6aac = _0x24f4cd.getContext("2d")) == null ||
          _0x1e6aac.drawImage(
            _0x4418b8,
            0,
            _0x4c5374.sourceTop,
            _0x4418b8.width,
            _0x4c5374.sourceHeight,
            0,
            0,
            _0x24f4cd.width,
            _0x24f4cd.height,
          ),
        (_0x24f4cd.style["position"] = "absolute"),
        (_0x24f4cd.style["left"] = _0x1b240a - _0x44420f.x + "px"),
        (_0x24f4cd.style["top"] = _0x4c5374.top - _0x44420f.y + "px"),
        (_0x24f4cd.style["width"] = _0x2fbd80 + "px"),
        (_0x24f4cd.style["height"] = _0x4c5374.height + "px"),
        (_0x24f4cd.style["display"] = "block"),
        (_0x24f4cd.style["zIndex"] = "11"),
        _0x5b1532.appendChild(_0x24f4cd),
        _0x24031b.add((0, a.toDisposable)(() => _0x24f4cd.remove())));
    });
}
function Xo(_0x3fff02, _0x3742c1, _0x1220a3, _0x28973b, _0x3a9b0e) {
  var _0x57871c, _0x4e8fee;
  let _0xc2d99e = oi("data" in _0x3fff02 ? _0x3fff02.data : undefined),
    _0x48926e = $o(_0x3fff02),
    _0x24e835 =
      _0xc2d99e &&
      _0x28973b.getImage(_0xc2d99e.hostUnitId ?? _0x1220a3, _0xc2d99e.embedId),
    _0x3610c9 = _0x48926e == null ? undefined : _0x48926e.left,
    _0x405347 =
      (_0x3a9b0e == null ||
      (_0x57871c = _0x3a9b0e.drawings["get"](_0x3742c1)) == null
        ? undefined
        : _0x57871c.top) ?? (_0x48926e == null ? undefined : _0x48926e.top),
    _0x10a5ff = _0x48926e == null ? undefined : _0x48926e.width;
  if (!_0x24e835 || !as(_0x3610c9) || !as(_0x405347) || !os(_0x10a5ff)) return;
  let _0x30f794 = _0x3fff02.docTransform["size"].width,
    _0x2345b1 = _0x3fff02.docTransform["size"].height;
  return {
    height:
      (_0x3a9b0e == null ||
      (_0x4e8fee = _0x3a9b0e.drawings["get"](_0x3742c1)) == null
        ? undefined
        : _0x4e8fee.height) ??
      ns(
        _0xc2d99e.childType,
        _0x48926e == null ? undefined : _0x48926e.height,
        _0x30f794,
        _0x2345b1,
        _0x10a5ff,
      ),
    left: _0x3610c9,
    source: _0x24e835,
    top: _0x405347,
    width: _0x10a5ff,
  };
}
function Zo(
  _0x22ecb5,
  _0xe893bb,
  _0x2eeb24,
  _0x36aae6,
  _0x3118b6 = !!_0x36aae6,
  _0x5c9b04 = false,
) {
  let _0x5618cb = (_0x22ecb5.drawingsOrder ?? [])
      .map((_0x457f28) => {
        var _0x13cb52;
        return {
          drawingId: _0x457f28,
          drawing:
            (_0x13cb52 = _0x22ecb5.drawings) == null
              ? undefined
              : _0x13cb52[_0x457f28],
        };
      })
      .filter(({ drawing: _0x19200a }) => {
        let _0x1e402f =
          _0x19200a && oi("data" in _0x19200a ? _0x19200a.data : undefined);
        return (
          !!_0x19200a &&
          !!_0x1e402f &&
          (!!_0x2eeb24.getResource(
            _0x1e402f.hostUnitId ?? _0xe893bb,
            _0x1e402f.embedId,
          ) ||
            !!_0x2eeb24.getImage(
              _0x1e402f.hostUnitId ?? _0xe893bb,
              _0x1e402f.embedId,
            ))
        );
      })
      .sort((_0x48c4fb, _0x47996e) => {
        var _0x5d8491, _0x19b569;
        return (
          (_0x48c4fb.drawing
            ? (((_0x5d8491 = $o(_0x48c4fb.drawing)) == null
                ? undefined
                : _0x5d8491.top) ?? 0)
            : 0) -
          (_0x47996e.drawing
            ? (((_0x19b569 = $o(_0x47996e.drawing)) == null
                ? undefined
                : _0x19b569.top) ?? 0)
            : 0)
        );
      }),
    _0x236b73 = new Map(),
    _0x1471d8 = [],
    _0x1bc5bc = new Set(_0x5618cb.map(({ drawingId: _0x145daf }) => _0x145daf)),
    _0x4c3b45 = _0x5618cb.find(({ drawing: _0x4477a6 }) => {
      let _0x58aba2 =
        _0x4477a6 && oi("data" in _0x4477a6 ? _0x4477a6.data : undefined);
      return _0x58aba2 && is(_0x58aba2.childType);
    }),
    _0x898cec = _0x4c3b45 == null ? undefined : _0x4c3b45.drawing,
    _0x1082b6 = _0x898cec && $o(_0x898cec).top,
    _0x32c718 = (_0x22ecb5.drawingsOrder ?? []).some((_0x99ec13) => {
      var _0x5ecbce;
      let _0x25cd36 =
        (_0x5ecbce = _0x22ecb5.drawings) == null
          ? undefined
          : _0x5ecbce[_0x99ec13];
      if (!_0x25cd36 || _0x1bc5bc.has(_0x99ec13)) return false;
      let _0x4a4259 = $o(_0x25cd36).top;
      return !as(_0x1082b6) || !as(_0x4a4259) || _0x4a4259 >= _0x1082b6;
    }),
    _0xed46a7 = !_0x4c3b45 || Qo(_0x22ecb5, _0x4c3b45.drawingId),
    _0x596cc1 = _0x5c9b04 && !_0x32c718 && !_0xed46a7,
    _0x585d9d = 0,
    _0x3ec82c = 0;
  return (
    _0x5618cb.forEach(
      ({ drawingId: _0x2d5194, drawing: _0x4f287c }, _0x3cb836) => {
        var _0x236164;
        if (!_0x4f287c) return;
        let _0x23fa19 = oi("data" in _0x4f287c ? _0x4f287c.data : undefined),
          _0x38337a = $o(_0x4f287c),
          _0x25a0f5 = _0x38337a == null ? undefined : _0x38337a.top,
          _0x2d46a1 = _0x38337a == null ? undefined : _0x38337a.width,
          _0x50d91d = _0x4f287c.docTransform["size"].width,
          _0xe17c0c = _0x4f287c.docTransform["size"].height;
        if (!_0x23fa19 || !as(_0x25a0f5) || !os(_0x2d46a1)) return;
        let _0x7e2cf0 = os(_0x38337a == null ? undefined : _0x38337a.height)
            ? _0x38337a.height
            : rs(_0x50d91d, _0xe17c0c, _0x2d46a1),
          _0x94e196 = _0x2eeb24.getResource(
            _0x23fa19.hostUnitId ?? _0xe893bb,
            _0x23fa19.embedId,
          ),
          _0x4ca223 =
            _0x94e196 && os(_0x94e196.width)
              ? (_0x2d46a1 * _0x94e196.height) / _0x94e196.width
              : ns(
                  _0x23fa19.childType,
                  _0x38337a == null ? undefined : _0x38337a.height,
                  _0x50d91d,
                  _0xe17c0c,
                  _0x2d46a1,
                ),
          _0x371bb2 = _0x25a0f5 + _0x585d9d,
          _0x5111b9 =
            _0x94e196 && os(_0x94e196.width) ? _0x2d46a1 / _0x94e196.width : 1,
          _0x38871b =
            _0x3118b6 &&
            _0x94e196 != null &&
            _0x94e196.canvas &&
            (_0x236164 = _0x94e196.verticalBreaks) != null &&
            _0x236164.length
              ? es(_0x94e196, _0x371bb2, _0x5111b9, _0x36aae6)
              : undefined,
          _0x2ca15b =
            _0x38871b != null && _0x38871b.length
              ? _0x38871b[_0x38871b.length - 1].top +
                _0x38871b[_0x38871b.length - 1].height -
                _0x371bb2
              : _0x4ca223;
        if (
          (_0x236b73.set(_0x2d5194, {
            height: _0x2ca15b,
            segments: _0x38871b,
            top: _0x371bb2,
          }),
          _0x38871b != null && _0x38871b.length
            ? _0x1471d8.push(
                ..._0x38871b.map((_0x1e10e0) => ({
                  bottom: _0x1e10e0.top + _0x1e10e0.height,
                  sourceId: _0x2d5194,
                  top: _0x1e10e0.top,
                })),
              )
            : _0x3118b6 &&
              _0x2ca15b > 0 &&
              _0x1471d8.push({
                bottom: _0x371bb2 + _0x2ca15b,
                sourceId: _0x2d5194,
                top: _0x371bb2,
              }),
          (_0x3ec82c = Math.max(_0x3ec82c, _0x371bb2 + _0x2ca15b)),
          is(_0x23fa19.childType))
        ) {
          var _0x21b40d;
          let _0x27ce2d =
              (_0x21b40d = _0x5618cb[_0x3cb836 + 1]) == null
                ? undefined
                : _0x21b40d.drawing,
            _0x14d879 = _0x27ce2d ? $o(_0x27ce2d).top : undefined,
            _0x191c7c =
              _0x2ca15b -
              (as(_0x14d879)
                ? Math.max(0, Math.min(_0x7e2cf0, _0x14d879 - _0x25a0f5))
                : _0x7e2cf0);
          _0x585d9d += _0x596cc1 ? _0x191c7c : Math.max(0, _0x191c7c);
        }
      },
    ),
    {
      contentHeight: _0x3ec82c,
      contentHeightAdjustment: _0x585d9d,
      drawings: _0x236b73,
      pageBreakRanges: _0x1471d8,
    }
  );
}
function Qo(_0x2b9d07, _0x42a9ce) {
  var _0x4be274;
  let _0x3876ae = _0x2b9d07.body,
    _0x142846 =
      _0x3876ae == null ||
      (_0x4be274 = _0x3876ae.customBlocks) == null ||
      (_0x4be274 = _0x4be274.find(
        ({ blockId: _0x5c9bab }) => _0x5c9bab === _0x42a9ce,
      )) == null
        ? undefined
        : _0x4be274.startIndex;
  return (
    !(_0x3876ae != null && _0x3876ae.dataStream) ||
    !as(_0x142846) ||
    Array.from(_0x3876ae.dataStream["slice"](_0x142846 + 1)).some(
      (_0x491a33) =>
        _0x491a33 !== a.DataStreamTreeTokenType["PARAGRAPH"] &&
        _0x491a33 !== a.DataStreamTreeTokenType["SECTION_BREAK"] &&
        _0x491a33 !== a.DataStreamTreeTokenType["CUSTOM_BLOCK"] &&
        _0x491a33 !== a.DataStreamTreeTokenType["DOCS_END"] &&
        _0x491a33.trim() !== "",
    )
  );
}
function $o(_0x453654) {
  return (
    _0x453654.transform ??
    (0, h.docDrawingPositionToTransform)(_0x453654.docTransform)
  );
}
function es(_0x3e2c8b, _0x1cc179, _0x52aa5, _0x2c0155) {
  let _0x5cd425 = [
      ...(_0x3e2c8b.verticalBreaks ?? []).filter(
        (_0x361303) => _0x361303 > 0 && _0x361303 < _0x3e2c8b.height,
      ),
      _0x3e2c8b.height,
    ],
    _0x43dc3b = [],
    _0x36b1d8 = 0,
    _0x3ff38c = _0x1cc179;
  return (
    _0x5cd425.forEach((_0x2e79ee) => {
      let _0x725823 = _0x2e79ee - _0x36b1d8,
        _0x56627d = _0x725823 * _0x52aa5;
      if (_0x2c0155) {
        let _0x4e9bdc = ts(_0x3ff38c, _0x2c0155);
        _0x3ff38c < _0x4e9bdc &&
          _0x3ff38c + _0x56627d > _0x4e9bdc &&
          _0x56627d <= _0x2c0155.pageStride &&
          (_0x3ff38c = _0x4e9bdc);
      }
      (_0x43dc3b.push({
        height: _0x56627d,
        sourceHeight: _0x725823,
        sourceTop: _0x36b1d8,
        top: _0x3ff38c,
      }),
        (_0x3ff38c += _0x56627d),
        (_0x36b1d8 = _0x2e79ee));
    }),
    _0x43dc3b
  );
}
function ts(_0x4901e7, _0x24a0e4) {
  let _0x1372e0 = Math.max(
    0,
    Math.floor((_0x4901e7 - _0x24a0e4.firstTop) / _0x24a0e4.pageStride),
  );
  return _0x24a0e4.firstTop + (_0x1372e0 + 1) * _0x24a0e4.pageStride;
}
function ns(_0x843ec7, _0x2d6454, _0x5ba8bb, _0x3956fc, _0x586bed) {
  return is(_0x843ec7) && os(_0x2d6454)
    ? _0x2d6454
    : rs(_0x5ba8bb, _0x3956fc, _0x586bed);
}
function rs(_0x4de7dc, _0x3e912b, _0x5c95ad) {
  return os(_0x4de7dc) && os(_0x3e912b)
    ? (_0x5c95ad * _0x3e912b) / _0x4de7dc
    : 0;
}
function is(_0x3cc2de) {
  return (
    _0x3cc2de === a.UniverInstanceType["UNIVER_SHEET"] ||
    _0x3cc2de === a.UniverInstanceType["UNIVER_BASE"]
  );
}
function as(_0x1c04d9) {
  return typeof _0x1c04d9 == "number" && Number.isFinite(_0x1c04d9);
}
function os(_0x519ef8) {
  return as(_0x519ef8) && _0x519ef8 > 0;
}
function ss(_0x46daba, _0x36f298, _0xffb670, _0xc83225) {
  let _0x3d938b = _0x46daba.style["overflow"],
    _0x6a4b93 = _0x46daba.style["zIndex"],
    _0x853b03 = document.createElement("img");
  return (
    (_0x853b03.alt = ""),
    (_0x853b03.src = _0x36f298),
    (_0x853b03.style["position"] = "absolute"),
    (_0x853b03.style["left"] = -_0xc83225.offsetX + "px"),
    (_0x853b03.style["top"] = -_0xc83225.offsetY + "px"),
    (_0x853b03.style["width"] = _0xc83225.width + "px"),
    (_0x853b03.style["height"] = _0xc83225.height + "px"),
    (_0x853b03.style["objectFit"] = "contain"),
    (_0x853b03.style["objectPosition"] = "center"),
    (_0x853b03.style["display"] = "block"),
    (_0x46daba.style["overflow"] = "visible"),
    (_0x46daba.style["zIndex"] = "9"),
    _0x46daba.appendChild(_0x853b03),
    _0xffb670.add(
      (0, a.toDisposable)(() => {
        (_0x853b03.remove(),
          (_0x46daba.style["overflow"] = _0x3d938b),
          (_0x46daba.style["zIndex"] = _0x6a4b93));
      }),
    ),
    _0x853b03
  );
}
function cs(_0x4fd6a8) {
  return new Promise((_0x170698) => {
    (_0x4fd6a8.addEventListener("load", () => _0x170698(), { once: true }),
      _0x4fd6a8.addEventListener("error", () => _0x170698(), { once: true }));
  });
}
function ls(_0x3e9641, _0x1469cd, _0x50b37b) {
  let _0x1c22ff = _0x1469cd.slideModel["getUnitId"](),
    _0xc4978b = _0x1469cd.slidePage["getId"](),
    _0x16e249 = _0x1469cd.slidePage["getData"](),
    _0x377e48 = (0, g.getEmbedSlidesPageCustomData)(_0x16e249),
    _0x2f8de4 =
      _0x377e48 && _0x50b37b.getResource(_0x1c22ff, _0x377e48.embedId);
  if (_0x377e48 && _0x2f8de4 != null && _0x2f8de4.source) {
    let _0x26e462 = (0, S.resolveSlideLogicalPageSize)(
        _0x16e249.pageSize ??
          _0x1469cd.slideModel["getSnapshot"]().defaultPageSize,
      ),
      _0x11fc17 = ds(
        _0x1c22ff,
        _0xc4978b,
        "embed-print-" + _0x377e48.embedId,
        _0x2f8de4.source,
        { left: 0, top: 0, width: _0x26e462.width, height: _0x26e462.height },
      );
    return {
      data: { [_0x11fc17.drawingId]: _0x11fc17 },
      order: [_0x11fc17.drawingId],
    };
  }
  return us(_0x3e9641, _0x1c22ff, _0xc4978b, _0x50b37b);
}
function us(_0x30b9fc, _0x2530a0, _0x3ea578, _0x5571a1) {
  let _0x3592e5 = { ..._0x30b9fc.data };
  return (
    _0x30b9fc.order["forEach"]((_0x4b75bd) => {
      let _0x1987c3 = _0x3592e5[_0x4b75bd],
        _0x5c7aa2 =
          _0x1987c3 &&
          (0, g.getEmbedSlidesFloatingCustomData)(_0x1987c3.element),
        _0x2eac1c =
          _0x5c7aa2 && _0x5571a1.getImage(_0x2530a0, _0x5c7aa2.embedId);
      !_0x1987c3 ||
        !_0x2eac1c ||
        (_0x3592e5[_0x4b75bd] = ds(
          _0x2530a0,
          _0x3ea578,
          _0x4b75bd,
          _0x2eac1c,
          _0x1987c3.element["transform"],
          _0x1987c3.sourcePageType,
        ));
    }),
    { data: _0x3592e5, order: _0x30b9fc.order }
  );
}
function ds(
  _0x5d7d0e,
  _0x23ced9,
  _0x46d5f0,
  _0x2db096,
  _0x1e11d8,
  _0x30a545 = g.PageTypeEnum["Slide"],
) {
  return (0, g.slideElementToDrawing)(
    _0x5d7d0e,
    _0x23ced9,
    {
      id: _0x46d5f0,
      type: g.PageElementTypeEnum["Image"],
      name: _0x46d5f0,
      source: _0x2db096,
      imageSourceType: a.ImageSourceType["URL"],
      transform: _0x1e11d8,
    },
    _0x30a545,
  );
}
const fs = new Set([
  "__editor_" + a.DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY,
  "__editor_" + a.DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
]);
let ps = class extends a.Disposable {
  constructor(_0x4dd982) {
    (super(),
      [
        {
          id: o.DocSelectAllCommand["id"],
          binding: c.KeyCode["A"] | c.MetaKeys["CTRL_COMMAND"],
          eventPreconditions: ms,
          preconditions: hs,
          nativeTextEditorBehavior:
            c.NativeTextEditorShortcutBehavior["OVERRIDE_NATIVE"],
          priority: 902,
        },
        {
          id: s.SelectAllCommand["id"],
          binding: c.KeyCode["A"] | c.MetaKeys["CTRL_COMMAND"],
          eventPreconditions: ms,
          preconditions: (_0x33c7c2) => !hs(_0x33c7c2),
          nativeTextEditorBehavior:
            c.NativeTextEditorShortcutBehavior["OVERRIDE_NATIVE"],
          priority: 902,
          staticParameters: { expandToGapFirst: true, loop: true },
        },
        {
          id: a.UndoCommand["id"],
          binding: c.KeyCode["Z"] | c.MetaKeys["CTRL_COMMAND"],
          eventPreconditions: ms,
          preconditions: (_0x195a95) => !hs(_0x195a95),
          priority: 902,
        },
        {
          id: a.RedoCommand["id"],
          binding: c.KeyCode["Y"] | c.MetaKeys["CTRL_COMMAND"],
          eventPreconditions: ms,
          preconditions: (_0x57c3b0) => !hs(_0x57c3b0),
          priority: 902,
        },
        {
          id: a.RedoCommand["id"],
          binding:
            c.KeyCode["Z"] | c.MetaKeys["CTRL_COMMAND"] | c.MetaKeys["SHIFT"],
          eventPreconditions: ms,
          preconditions: (_0x4dce0c) => !hs(_0x4dce0c),
          priority: 902,
        },
      ].forEach((_0x3a6db0) =>
        this.disposeWithMe(_0x4dd982.registerShortcut(_0x3a6db0)),
      ));
  }
};
ps = Z([X(0, c.IShortcutService)], ps);
function ms(_0x1e2827) {
  let _0x38fb81 = _0x1e2827.target;
  return (
    _0x38fb81 instanceof HTMLElement &&
    fs.has(_0x38fb81.id) &&
    _0x38fb81.closest("[data-embed-interaction-boundary-owner]") != null
  );
}
function hs(_0x370d10) {
  return !!(
    _0x370d10.getContextValue(a.EDITOR_ACTIVATED) ||
    _0x370d10.getContextValue(a.FORMULA_EDITOR_ACTIVATED)
  );
}
function gs(_0xe24ebe) {
  let _0x1b12e3 = [];
  return (
    [
      [a.UniverInstanceType["UNIVER_DOC"], "docs-ui.ribbon"],
      [a.UniverInstanceType["UNIVER_SHEET"], "sheets-ui.ribbon"],
      [a.UniverInstanceType["UNIVER_SLIDE"], "slides-ui.ribbon"],
      [a.UniverInstanceType["UNIVER_BASE"], "bases-ui.ribbon"],
    ].forEach(([_0x2f7d41, _0x223a02]) => {
      let _0xdc7cde = On(_0xe24ebe, {
        childType: _0x2f7d41,
        id: _0x223a02,
        scopedActionServiceTokens:
          _0x2f7d41 === a.UniverInstanceType["UNIVER_SLIDE"]
            ? [S.SlideInsertService]
            : undefined,
      });
      _0xdc7cde && _0x1b12e3.push(_0xdc7cde);
    }),
    _0x1b12e3
  );
}
var _s = class {
  constructor() {
    V(this, "_providers", new Map());
  }
  register(_0x5e27ad) {
    if (this._providers["has"](_0x5e27ad.childType))
      throw Error(
        "Embed readonly preview provider already registered: " +
          _0x5e27ad.childType,
      );
    this._providers["set"](_0x5e27ad.childType, _0x5e27ad);
  }
  get(_0x154f6b) {
    return this._providers["get"](_0x154f6b);
  }
  list() {
    return [...this._providers["values"]()];
  }
};
const vs = new WeakMap(),
  ys = new WeakMap();
function bs(_0x4b235c, _0x56e2d5, _0x49186a) {
  var _0x577e11;
  if (Cs(_0x4b235c)) {
    Ss(_0x4b235c, _0x56e2d5, _0x49186a);
    return;
  }
  let _0x5f36ec = _0x4b235c;
  if ((_0x577e11 = ys.get(_0x5f36ec)) != null && _0x577e11.has(_0x56e2d5))
    return;
  let _0x1c82ad = vs.get(_0x5f36ec) ?? new Map();
  (_0x1c82ad.set(_0x56e2d5, _0x49186a), vs.set(_0x5f36ec, _0x1c82ad));
}
function xs(_0x3bc977) {
  if (!Cs(_0x3bc977)) return;
  let _0x303796 = _0x3bc977,
    _0x3c6ba8 = vs.get(_0x303796);
  _0x3c6ba8 != null &&
    _0x3c6ba8.size &&
    (_0x3c6ba8.forEach((_0x1bfad2, _0x5a4f8e) =>
      Ss(_0x3bc977, _0x5a4f8e, _0x1bfad2),
    ),
    vs.delete(_0x303796));
}
function Ss(_0x1ba077, _0x37b204, _0x592ab2) {
  let _0x1f7384 = _0x1ba077,
    _0x3352f0 = ys.get(_0x1f7384) ?? new Set();
  _0x3352f0.has(_0x37b204) ||
    (_0x592ab2(_0x1ba077),
    _0x3352f0.add(_0x37b204),
    ys.set(_0x1f7384, _0x3352f0));
}
function Cs(_0x54dc84) {
  return (
    _0x54dc84.has(t.EmbedHostAdapterRegistryService) &&
    _0x54dc84.has(vt) &&
    _0x54dc84.has(gt) &&
    _0x54dc84.has(H) &&
    _0x54dc84.has(Mn) &&
    _0x54dc84.has(_t) &&
    _0x54dc84.has(Ur) &&
    _0x54dc84.has(ba) &&
    _0x54dc84.has(ii) &&
    _0x54dc84.has(_s)
  );
}
function ws(_0x38ce90) {
  let { childType: _0x27134a, productName: _0x17e497 } = _0x38ce90;
  return {
    childType: _0x27134a,
    productName: _0x17e497,
    hostChromeMode: "ribbon",
    layoutPolicy: {
      tab: t.DEFAULT_EMBED_TAB_LAYOUT_POLICY,
      float: t.DEFAULT_EMBED_FLOAT_LAYOUT_POLICY,
      docFlow: t.DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY,
    },
    createRibbonOverride: ({
      childUnitId: _0x386e7e,
      embedId: _0x5ebe7a,
      injector: _0x5b3661,
    }) => {
      let _0x48365e = on(_0x5b3661, {
        childType: _0x27134a,
        childUnitId: _0x386e7e,
        embedId: _0x5ebe7a,
        menuSchema: Ts(_0x5b3661, _0x27134a, _0x38ce90.menuSchema),
      });
      return {
        mode: "ribbon",
        ribbonService: _0x48365e.ribbonService,
        injector: _0x48365e.injector,
        placeholderTitle: _0x17e497,
        disposable: _0x48365e.disposable,
      };
    },
  };
}
function Ts(_0x9cf847, _0x21bd41, _0x50b35d) {
  let _0x792cb3 = _0x9cf847;
  if (
    typeof _0x792cb3.has == "function" &&
    typeof _0x792cb3.get == "function" &&
    _0x792cb3.has(Mn)
  ) {
    let _0x476409 = _0x792cb3.get(Mn).getMergedMenuSchema(_0x21bd41, "ribbon");
    if (_0x476409) return _0x476409;
  }
  return _0x50b35d;
}
function Es(_0x13311f) {
  let _0x1df2a8 = Ds(_0x13311f);
  return {
    childType: _0x13311f.childType,
    productName: _0x13311f.productName,
    hostChromeMode: _0x1df2a8,
    hostHeaderMode: _0x13311f.hostHeaderMode ?? "none",
    layoutPolicy: {
      tab: {
        ...t.DEFAULT_EMBED_TAB_LAYOUT_POLICY,
        ribbon: _0x1df2a8 === "none" ? "hidden" : "host",
      },
      float: t.DEFAULT_EMBED_FLOAT_LAYOUT_POLICY,
      docFlow: t.DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY,
    },
    createRibbonOverride:
      _0x1df2a8 === "title-only"
        ? () => ({
            mode: "title-only",
            ribbonService: Os(),
            placeholderTitle: _0x13311f.productName,
            hideToolbar: true,
          })
        : undefined,
  };
}
function Ds(_0x427738) {
  return _0x427738.hostChromeMode
    ? _0x427738.hostChromeMode
    : _0x427738.hostHeaderMode === "placeholder"
      ? "title-only"
      : "none";
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
    setFakeToolbarVisible: () => {},
  };
}
function ks(_0x2d9813, _0x13f77d, _0x45d7cd, _0x52abab) {
  return [..._0x2d9813.querySelectorAll(_0x13f77d)]
    .reverse()
    .find((_0x4fb78e) => {
      let _0x3a27f2 = _0x4fb78e.getBoundingClientRect();
      return (
        _0x45d7cd >= _0x3a27f2.left &&
        _0x45d7cd <= _0x3a27f2.right &&
        _0x52abab >= _0x3a27f2.top &&
        _0x52abab <= _0x3a27f2.bottom
      );
    });
}
function As() {
  return {
    ...Es({
      childType: a.UniverInstanceType["UNIVER_BASE"],
      productName: "Bases",
      hostChromeMode: "none",
    }),
    presentationPolicy: {
      getChromeCss: () =>
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-workbench-layout\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20grid-template-columns:\x20minmax(0,\x201fr)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-left-panel\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-left-panel-floating-expand-trigger\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-header-menu\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-add-view-button\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-view-tab-more\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-global-layer\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-right-panel\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-footer\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
      activateNavigationAtPoint: ({
        childContext: _0x1cb2cd,
        clientX: _0x5f2d51,
        clientY: _0x3c50b9,
        runtimeHost: _0x399b29,
      }) => {
        if (
          ks(
            _0x399b29,
            '[data-u-comp="base-view-tab-more"]',
            _0x5f2d51,
            _0x3c50b9,
          )
        )
          return false;
        let _0x413121 = ks(
            _0x399b29,
            "[data-u-comp=\x22base-view-tab\x22]",
            _0x5f2d51,
            _0x3c50b9,
          ),
          _0x260da8 =
            _0x413121 == null ? undefined : _0x413121.dataset["viewId"],
          _0x225ae3 = _0x1cb2cd.runtimeScope["injector"];
        return !_0x260da8 || !_0x225ae3.has(_.IBaseUIStateService)
          ? false
          : (_0x225ae3.get(_.IBaseUIStateService).activateView(_0x260da8),
            true);
      },
    },
  };
}
let js = class {
  constructor(_0x15401a, _0x5854d3, _0x2928b6) {
    ((this._baseUIStateService = _0x15401a),
      (this._projectionService = _0x5854d3),
      (this._wheelScrollService = _0x2928b6),
      V(this, "childType", a.UniverInstanceType["UNIVER_BASE"]));
  }
  measureContentSize(_0x3e4e05) {
    var _0xcea98f, _0xaed9f, _0x183bdd;
    let _0x78a0de =
      _0x3e4e05.childUnit instanceof a.BaseDataModel
        ? _0x3e4e05.childUnit["getSnapshot"]()
        : undefined;
    if (!_0x78a0de) return;
    let _0x85815 =
        (_0xcea98f = _0x3e4e05.injector) != null &&
        _0xcea98f.has(_.IBaseUIStateService)
          ? _0x3e4e05.injector["get"](_.IBaseUIStateService)
          : this._baseUIStateService,
      _0x2114a1 =
        (_0xaed9f = _0x3e4e05.injector) != null &&
        _0xaed9f.has(C.IBaseProjectionService)
          ? _0x3e4e05.injector["get"](C.IBaseProjectionService)
          : this._projectionService,
      _0x5c29ca =
        (_0x183bdd = _0x3e4e05.injector) != null &&
        _0x183bdd.has(_.IBaseViewWheelScrollService)
          ? _0x3e4e05.injector["get"](_.IBaseViewWheelScrollService)
          : this._wheelScrollService,
      _0x42ccbb = _0x85815.getState(),
      _0x2ab518 = Ps(_0x78a0de, _0x42ccbb, _0x3e4e05.viewportWidth),
      _0x596acb = Ms(
        _0x78a0de,
        _0x42ccbb,
        _0x2114a1,
        _0x5c29ca,
        _0x3e4e05.viewportHeight,
        _0x2ab518 ?? _0x3e4e05.viewportWidth,
      );
    return _0x596acb == null && _0x2ab518 == null
      ? undefined
      : {
          height: _0x596acb == null ? undefined : _0x596acb.height,
          verticalBreaks: _0x596acb == null ? undefined : _0x596acb.breaks,
          width: _0x2ab518,
        };
  }
};
js = Z(
  [
    X(0, _.IBaseUIStateService),
    X(1, C.IBaseProjectionService),
    X(2, _.IBaseViewWheelScrollService),
  ],
  js,
);
function Ms(_0x44805b, _0x37edb2, _0x5e3215, _0x78587d, _0x3d4ef1, _0x5a611d) {
  var _0xbd0859;
  let _0x1c576d = Rs(
      _0x44805b,
      _0x37edb2 == null ? undefined : _0x37edb2.activeTableId,
    ),
    _0x39aeeb = _0x1c576d ? _0x44805b.tables[_0x1c576d] : undefined;
  if (!_0x39aeeb || !_0x1c576d) return;
  let _0x21ef52 = zs(
      _0x39aeeb,
      _0x37edb2 == null ? undefined : _0x37edb2.activeViewId,
    ),
    _0x14c3d0 = _0x21ef52
      ? (_0xbd0859 = _0x39aeeb.views) == null
        ? undefined
        : _0xbd0859[_0x21ef52]
      : undefined,
    _0x1b668d = Bs(_0x39aeeb),
    _0x118b18 = (0, _.resolveGridRowHeight)(
      _0x14c3d0 != null && _0x14c3d0.config && "rowHeight" in _0x14c3d0.config
        ? _0x14c3d0.config["rowHeight"]
        : undefined,
    );
  return (
    Ns(
      _0x44805b,
      _0x1c576d,
      _0x21ef52,
      _0x118b18,
      _0x37edb2,
      _0x5e3215,
      _0x78587d,
      _0x3d4ef1,
      _0x5a611d,
    ) ?? {
      breaks: Array(_0x1b668d)
        .fill(null)
        .map(
          (_0x169cc1, _0x2f07af) =>
            _.GRID_HEADER_HEIGHT + (_0x2f07af + 1) * _0x118b18,
        ),
      height:
        _.GRID_HEADER_HEIGHT +
        _0x1b668d * _0x118b18 +
        _.GRID_ADD_RECORD_ROW_HEIGHT +
        _.GRID_SUMMARY_HEIGHT,
    }
  );
}
function Ns(
  _0xb2c966,
  _0x57662b,
  _0x452ada,
  _0x23ffaa,
  _0x492800,
  _0x5e1d70,
  _0x29da3d,
  _0x512af2,
  _0x281f90,
) {
  if (!_0x452ada || !_0x5e1d70 || !_0x29da3d) return;
  let _0x1d2c03 = _0x5e1d70.getProjection(_0xb2c966, _0x57662b, _0x452ada);
  if (
    _0x1d2c03.type === a.BaseViewType["Calendar"] &&
    _0x1d2c03.config["mode"] === "month" &&
    _0x512af2 != null
  )
    return { height: _0x512af2 };
  if (_0x1d2c03.type === a.BaseViewType["Gallery"])
    return {
      height: _0x29da3d.getGalleryProjectionBodyHeight(
        _0x1d2c03,
        _0x281f90 ?? 1,
      ),
    };
  if (_0x1d2c03.type === a.BaseViewType["Kanban"])
    return { height: _0x29da3d.getKanbanProjectionBodyHeight(_0x1d2c03) };
  if (
    _0x1d2c03.type === a.BaseViewType["Grid"] ||
    _0x1d2c03.type === a.BaseViewType["Gantt"]
  ) {
    let _0x5619f1 =
      _0x492800 == null ? undefined : _0x492800.collapsedGroupPaths[_0x452ada];
    return {
      breaks: (0, _.buildBaseProjectedRowLayout)(
        _0x1d2c03,
        _0x5619f1,
        _0x23ffaa,
      ).map(
        (_0x378998) => _.GRID_HEADER_HEIGHT + _0x378998.y + _0x378998.height,
      ),
      height:
        _.GRID_HEADER_HEIGHT +
        _0x29da3d.getGridProjectionBodyHeight(_0x1d2c03, _0x5619f1, _0x23ffaa) +
        _.GRID_SUMMARY_HEIGHT,
    };
  }
}
function Ps(_0x9a34eb, _0x142f2c, _0x3b1d8d) {
  var _0xf7d9e1, _0x40e45b;
  let _0x3a188e = Is(
    _0x9a34eb,
    _0x142f2c == null ? undefined : _0x142f2c.activeTableId,
  );
  if (!_0x3a188e) return;
  let _0x3c7f54 = Ls(
      _0x3a188e,
      _0x142f2c == null ? undefined : _0x142f2c.activeViewId,
    ),
    _0x597796 = _0x3a188e.fields ?? {},
    _0x52bed8 =
      _.GRID_ROW_HEADER_WIDTH +
      (_0x3c7f54 != null &&
      (_0xf7d9e1 = _0x3c7f54.fieldOrder) != null &&
      _0xf7d9e1.length
        ? _0x3c7f54.fieldOrder
        : (_0x40e45b = _0x3a188e.fieldOrder) != null && _0x40e45b.length
          ? _0x3a188e.fieldOrder
          : Object.keys(_0x597796)
      ).reduce((_0x27fae5, _0x2653a9) => {
        var _0xb85d67;
        let _0x2bb8bf = _0x597796[_0x2653a9],
          _0x349836 =
            _0x3c7f54 == null || (_0xb85d67 = _0x3c7f54.fieldSettings) == null
              ? undefined
              : _0xb85d67[_0x2653a9];
        return _0x2bb8bf && !(_0x349836 != null && _0x349836.hidden)
          ? _0x27fae5 + Fs(_0x349836 == null ? undefined : _0x349836.width)
          : _0x27fae5;
      }, 0) +
      _.GRID_ADD_FIELD_COLUMN_WIDTH;
  return (_0x3c7f54 == null ? undefined : _0x3c7f54.type) ===
    a.BaseViewType["Gallery"] ||
    (_0x3c7f54 == null ? undefined : _0x3c7f54.type) ===
      a.BaseViewType["Kanban"]
    ? Math.max(_0x52bed8, _0x3b1d8d ?? 0)
    : _0x52bed8;
}
function Fs(_0x319129) {
  return typeof _0x319129 == "number" &&
    Number.isFinite(_0x319129) &&
    _0x319129 > 0
    ? _0x319129
    : _.GRID_DEFAULT_COLUMN_WIDTH;
}
function Is(_0xf49aba, _0x3ec65) {
  var _0x5d6cb3;
  let _0x230d0b = Rs(_0xf49aba, _0x3ec65);
  return _0x230d0b
    ? (_0x5d6cb3 = _0xf49aba.tables) == null
      ? undefined
      : _0x5d6cb3[_0x230d0b]
    : undefined;
}
function Ls(_0x3404d0, _0x438b3c) {
  var _0x3e0b23;
  let _0xcbcedb = zs(_0x3404d0, _0x438b3c);
  return _0xcbcedb
    ? (_0x3e0b23 = _0x3404d0.views) == null
      ? undefined
      : _0x3e0b23[_0xcbcedb]
    : undefined;
}
function Rs(_0x3599a7, _0x49f21a) {
  let _0x97faa8 = _0x3599a7.tables ?? {};
  if (_0x49f21a && _0x97faa8[_0x49f21a]) return _0x49f21a;
  let _0x18b230 = _0x3599a7.tableOrder ?? [];
  return [
    ..._0x18b230,
    ...Object.keys(_0x97faa8).filter(
      (_0x741e91) => !_0x18b230.includes(_0x741e91),
    ),
  ].find((_0x4166e4) => _0x97faa8[_0x4166e4]);
}
function zs(_0x49c847, _0x4f93ff) {
  let _0x1a5a18 = _0x49c847.views ?? {};
  if (_0x4f93ff && _0x1a5a18[_0x4f93ff]) return _0x4f93ff;
  let _0x57a2ae = _0x49c847.viewOrder ?? [];
  return [
    ..._0x57a2ae,
    ...Object.keys(_0x1a5a18).filter(
      (_0x178f23) => !_0x57a2ae.includes(_0x178f23),
    ),
  ].find((_0x5f5d5e) => _0x1a5a18[_0x5f5d5e]);
}
function Bs(_0x280f86) {
  var _0x4ca01c;
  let _0x569287 = _0x280f86.records ?? {};
  return (
    (_0x4ca01c = _0x280f86.recordOrder) != null && _0x4ca01c.length
      ? _0x280f86.recordOrder
      : Object.keys(_0x569287)
  ).filter((_0x2668dc) => _0x569287[_0x2668dc]).length;
}
function Vs(_0x938bdf, _0x50800c, _0x5a1bae) {
  return {
    ...(0, t.createBasesTableListBlockHostAdapterContribution)(
      _0x938bdf,
      _0x50800c,
    ),
    activateAnchor: (_0x126d73) => {
      Us(
        _0x126d73.hostUnitId,
        _0x126d73.hostAnchorId,
        _0x50800c,
        Gs(_0x5a1bae),
      );
    },
  };
}
function Hs() {
  return {
    hostType: a.UniverInstanceType["UNIVER_BASE"],
    entry: "bases-table-list-block",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: (_0x3b7bb1) => {
      let _0x42a5ed = Ks(
        "data-embed-bases-table-list-host",
        _0x3b7bb1.descriptor["hostAnchorId"],
      );
      return _0x42a5ed ? { hostElement: _0x42a5ed } : {};
    },
  };
}
function Us(_0x42031c, _0x59a20a, _0x5a9dfa, _0x36d94c) {
  var _0x375c46;
  if (!_0x36d94c) return;
  _0x36d94c.activateTable(_0x59a20a);
  let _0x5960d7 =
      (_0x375c46 = Ws(_0x5a9dfa, _0x42031c)) == null
        ? undefined
        : _0x375c46.tables[_0x59a20a],
    _0x13ecfb =
      _0x5960d7 == null
        ? undefined
        : _0x5960d7.viewOrder["find"](
            (_0x383f08) => _0x5960d7.views[_0x383f08],
          );
  (_0x13ecfb && _0x36d94c.activateView(_0x13ecfb),
    _0x36d94c.setSelection(null),
    _0x36d94c.closeRecordDetail());
}
function Ws(_0x403065, _0x53023d) {
  var _0x4a7db3;
  return _0x403065 == null ||
    (_0x4a7db3 = _0x403065.getUnit(
      _0x53023d,
      a.UniverInstanceType["UNIVER_BASE"],
    )) == null
    ? undefined
    : _0x4a7db3.getSnapshot();
}
function Gs(_0x5d7b8c) {
  return typeof _0x5d7b8c == "function" ? _0x5d7b8c() : _0x5d7b8c;
}
function Ks(_0x1b2b30, _0x46000f) {
  return document.querySelector(
    "[" + _0x1b2b30 + "=\x22" + qs(_0x46000f) + "\x22]",
  );
}
function qs(_0x2ba49c) {
  return _0x2ba49c.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function Js(_0x29a7e6) {
  let _0x5c1502 = _0x29a7e6.has(_.IBaseUIStateService)
      ? _0x29a7e6.get(_.IBaseUIStateService)
      : undefined,
    _0x260dfa = _0x29a7e6.has(_.IBaseViewWheelScrollService)
      ? _0x29a7e6.get(_.IBaseViewWheelScrollService)
      : undefined,
    _0x5a3b60 = new Set();
  return {
    childType: a.UniverInstanceType["UNIVER_BASE"],
    getHorizontalScroll(_0x579a0a) {
      var _0x3df2ef;
      let _0x5bb097 = _0x20a2e0(_0x579a0a),
        _0x18db5c = _0x5bb097 == null ? undefined : _0x5bb097.getState();
      return _0x18db5c != null && _0x18db5c.activeViewId
        ? (((_0x3df2ef = _0x18db5c.scrollState[_0x18db5c.activeViewId]) == null
            ? undefined
            : _0x3df2ef.x) ?? 0)
        : 0;
    },
    getVerticalScroll(_0x4eca9a) {
      var _0x10ffe3;
      let _0x946ef3 = _0x20a2e0(_0x4eca9a),
        _0x33783e = _0x946ef3 == null ? undefined : _0x946ef3.getState();
      return _0x33783e != null && _0x33783e.activeViewId
        ? (((_0x10ffe3 = _0x33783e.scrollState[_0x33783e.activeViewId]) == null
            ? undefined
            : _0x10ffe3.y) ?? 0)
        : 0;
    },
    getStickyLeftWidth: () => _.GRID_ROW_HEADER_WIDTH,
    getStickyHeaderHeight: () => _.GRID_HEADER_HEIGHT,
    getStickyFooterHeight: () => _.GRID_SUMMARY_HEIGHT,
    subscribeVerticalScroll(_0x12157c, _0x26b124) {
      var _0x158924;
      let _0x440c87 = _0x20a2e0(_0x12157c);
      if (!_0x440c87) return;
      let _0x4f3a83 = _0x440c87.getState(),
        _0x217dd4 = _0x4f3a83.activeViewId,
        _0x3a6468 = _0x217dd4
          ? (((_0x158924 = _0x4f3a83.scrollState[_0x217dd4]) == null
              ? undefined
              : _0x158924.y) ?? 0)
          : 0,
        _0x3f036b = _0x440c87.state$["subscribe"]((_0x137c67) => {
          var _0x5d18ab;
          let _0x4ad99c = _0x137c67.activeViewId,
            _0x4c540d = _0x4ad99c
              ? (((_0x5d18ab = _0x137c67.scrollState[_0x4ad99c]) == null
                  ? undefined
                  : _0x5d18ab.y) ?? 0)
              : 0;
          if (_0x4ad99c !== _0x217dd4) {
            ((_0x217dd4 = _0x4ad99c), (_0x3a6468 = _0x4c540d));
            return;
          }
          _0x4c540d !== _0x3a6468 &&
            ((_0x3a6468 = _0x4c540d),
            !_0x5a3b60.has(_0x12157c.childUnitId) && _0x26b124(_0x4c540d));
        });
      return (0, a.toDisposable)(() => _0x3f036b.unsubscribe());
    },
    handleWheel(_0x2c6c31) {
      if (
        _0x2c6c31.source !== "host-scroll-sync" &&
        _0x2c6c31.source !== "print-capture" &&
        cr(_0x2c6c31.layout, _0x2c6c31.event)
      )
        return false;
      let _0x54fbba = _0x2c6c31.runtimeScope["injector"] ?? _0x29a7e6,
        _0x27a4ca =
          _0x54fbba !== _0x29a7e6 &&
          _0x54fbba.has(_.IBaseViewWheelScrollService)
            ? _0x54fbba.get(_.IBaseViewWheelScrollService)
            : _0x260dfa,
        _0x2b40a7 = _0x2c6c31.source === "print-capture";
      _0x2b40a7 && _0x5a3b60.add(_0x2c6c31.childUnitId);
      try {
        if (_0x2c6c31.viewportScrollX != null) {
          let _0x199498 = _0x20a2e0(_0x2c6c31),
            _0x3fd1ab = _0x199498 == null ? undefined : _0x199498.getState(),
            _0x17c762 = _0x3fd1ab == null ? undefined : _0x3fd1ab.activeViewId;
          if (_0x199498 && _0x3fd1ab && _0x17c762) {
            let _0xde1cc4 = _0x3fd1ab.scrollState[_0x17c762] ?? { x: 0, y: 0 };
            return (
              _0x199498.setScrollState(_0x17c762, {
                x: _0x2c6c31.viewportScrollX,
                y: _0x2c6c31.viewportScrollY ?? _0xde1cc4.y,
              }),
              true
            );
          }
        }
        return (
          (_0x27a4ca == null
            ? undefined
            : _0x27a4ca.handleRegisteredWheel(
                _0x2c6c31.childUnitId,
                Ys(_0x2c6c31.event, _0x2c6c31.viewportScrollY),
              )) ?? false
        );
      } finally {
        _0x2b40a7 && _0x5a3b60.delete(_0x2c6c31.childUnitId);
      }
    },
  };
  function _0x20a2e0(_0x497c5e) {
    var _0x346236;
    let _0x2a939a =
      ((_0x346236 = _0x497c5e.runtimeScope) == null
        ? undefined
        : _0x346236.injector) ?? _0x29a7e6;
    return _0x2a939a !== _0x29a7e6 && _0x2a939a.has(_.IBaseUIStateService)
      ? _0x2a939a.get(_.IBaseUIStateService)
      : _0x5c1502;
  }
}
function Ys(_0x492b73, _0x3b783f) {
  return {
    deltaX: _0x492b73.deltaX,
    deltaY: _0x492b73.deltaY,
    deltaMode: _0x492b73.deltaMode,
    clientX: _0x492b73.clientX,
    clientY: _0x492b73.clientY,
    shiftKey: _0x492b73.shiftKey,
    viewportScrollY: _0x3b783f,
  };
}
function Xs(_0x107892, _0x2975e9, _0x1e024a) {
  let _0x5d6d67 = _0x107892.descriptor["displayTarget"];
  return (
    _0x1e024a(_0x5d6d67),
    _0x2975e9.onCommandExecuted((_0xd08818) => {
      if (!Zs(_0xd08818)) return;
      let { params: _0x3568d8 } = _0xd08818;
      if (
        _0x3568d8.unitId !== _0x107892.hostUnitId ||
        _0x3568d8.descriptor["embedId"] !== _0x107892.embedId
      )
        return;
      let _0x319c0d = _0x3568d8.descriptor["displayTarget"];
      (0, a.deepCompare)(_0x5d6d67 ?? {}, _0x319c0d ?? {}) ||
        ((_0x5d6d67 = _0x319c0d), _0x1e024a(_0x319c0d));
    })
  );
}
function Zs(_0x3ad280) {
  return (
    _0x3ad280.id === t.SetEmbedDescriptorMutation["id"] &&
    _0x3ad280.params !== undefined &&
    "unitId" in _0x3ad280.params &&
    typeof _0x3ad280.params["unitId"] == "string" &&
    "descriptor" in _0x3ad280.params &&
    typeof _0x3ad280.params["descriptor"] == "object" &&
    _0x3ad280.params["descriptor"] !== null &&
    "embedId" in _0x3ad280.params["descriptor"] &&
    typeof _0x3ad280.params["descriptor"].embedId == "string"
  );
}
function Qs(_0x4c8a8a, _0x5e3343) {
  return {
    childType: a.UniverInstanceType["UNIVER_BASE"],
    supportedLayouts: ["tab-peer", "docs-sticky-base", "scroll-contained"],
    beforeDeactivate: $s,
    mount: (_0x44ab01) => ec(_0x44ab01, _0x4c8a8a, _0x5e3343),
  };
}
function $s(_0x2810cc) {
  var _0x2d2766;
  (_0x2d2766 = _0x2810cc.runtimeScope["commandService"]) == null ||
    _0x2d2766.syncExecuteCommand(_.StopBaseEditingCellOperation["id"], {
      commit: false,
    });
}
function ec(_0x541788, _0x2e0d81, _0x4c0ca6) {
  let _0x4f8469 = _0x541788.injector["get"](a.IUniverInstanceService).getUnit(
    _0x541788.childUnitId,
    a.UniverInstanceType["UNIVER_BASE"],
  );
  if (!_0x4f8469) return;
  let _0x5cab98 = new _["BaseUIStateService"](),
    _0x50177c = new _["BaseUIPopupService"](),
    _0x3e586d = new _.BaseEditorService(_0x5cab98),
    _0x36432a = new _["BaseViewWheelScrollService"](),
    _0x45a0ea = cc(_0x541788, _0x5cab98, _0x50177c, _0x3e586d);
  if (!_0x45a0ea) {
    (_0x36432a.dispose(),
      _0x3e586d.dispose(),
      _0x50177c.dispose(),
      _0x5cab98.dispose());
    return;
  }
  let _0x3ac78d = pc(_0x541788),
    _0x42de6c = _0x45a0ea.get(_.IBaseDashboardUIExtensionRegistryService),
    _0x517dc5 = () => {
      var _0x52e884;
      return new Set(
        ((_0x52e884 = _0x42de6c.get()) == null
          ? undefined
          : _0x52e884
              .getItems(_0x4f8469.getUnitId())
              .map((_0x25dae2) => _0x25dae2.id)) ?? [],
      );
    };
  uc(
    _0x5cab98,
    _0x4f8469,
    _0x3ac78d,
    _0x541788.descriptor["displayTarget"],
    _0x517dc5(),
  );
  let _0x180b3d = Xs(_0x541788, _0x2e0d81, (_0x5b7ab5) =>
      fc(_0x5cab98, _0x4f8469, _0x5b7ab5, _0x517dc5()),
    ),
    _0xad9e75 = mc(
      _0x45a0ea,
      _0x5cab98,
      _0x50177c,
      _0x3e586d,
      _0x3ac78d,
      _0x36432a,
      _0x541788.descriptor["mode"] === "readonly",
      _0x541788.runtimeScope["roots"].popup,
    );
  nc(_0x541788, _0xad9e75);
  let _0x59a464 = _0x4c0ca6.register({
      unitId: _0x541788.childUnitId,
      roots: tc(_0x541788),
      clipboardService: _0xad9e75.get(_.IBaseClipboardService),
      commandService: _0xad9e75.get(a.ICommandService),
      editorService: _0x3e586d,
      stateService: _0x5cab98,
    }),
    _0x26c6ce = _0x541788.injector["get"](ba),
    _0x23c59f = "",
    _0x51190d = _0x5cab98.state$["subscribe"]((_0x49ce7f) => {
      let _0x4e596e = _0x49ce7f.activeViewId
          ? [...(_0x49ce7f.collapsedGroupPaths[_0x49ce7f.activeViewId] ?? [])]
              .sort()
              .join("\x00")
          : "",
        _0x5a96d7 =
          (_0x49ce7f.activeTableId ?? "") +
          "\x00" +
          (_0x49ce7f.activeViewId ?? "") +
          "\x00" +
          _0x4e596e;
      _0x5a96d7 !== _0x23c59f &&
        ((_0x23c59f = _0x5a96d7),
        _0x26c6ce.notifyContentSizeChanged(
          _0x541788.hostUnitId,
          _0x541788.embedId,
        ));
    }),
    _0x4fe6dd = rc(_0x541788),
    _0x4d622e = nn(_0x4fe6dd),
    _0x2062f4 = ic(_0x541788, _0xad9e75),
    _0x144ce2 = _0x541788.injector["get"](a.IUniverInstanceService),
    _0x63b031 = _0x144ce2.getCurrentUnitOfType(
      a.UniverInstanceType["UNIVER_BASE"],
    );
  return (
    _0x144ce2.setCurrentUnitForType(_0x541788.childUnitId),
    (_0x4fe6dd.dataset["embedChildRenderUnitId"] = _0x541788.childUnitId),
    (_0x4fe6dd.dataset["embedChildRenderMode"] = "base-workbench"),
    _0x4d622e.render(
      (0, m.jsx)(Kt, {
        injector: _0xad9e75,
        mountContainer: _0x541788.runtimeScope["roots"].popup,
        embedId: _0x541788.embedId,
        children: (0, m.jsx)(_.RenderBaseWorkbench, {}),
      }),
    ),
    (0, a.toDisposable)(() => {
      (_0x59a464.dispose(),
        _0x180b3d.dispose(),
        _0x51190d.unsubscribe(),
        _0x2062f4.dispose(),
        rn(_0x4d622e),
        _0x63b031 && _0x144ce2.setCurrentUnitForType(_0x63b031.getUnitId()),
        _0x36432a.dispose(),
        _0x3e586d.dispose(),
        _0x50177c.dispose(),
        _0x5cab98.dispose(),
        _0xad9e75.dispose(),
        _0x4fe6dd.isConnected &&
          (_0x4fe6dd.removeAttribute("data-embed-child-render-unit-id"),
          _0x4fe6dd.removeAttribute("data-embed-child-render-mode")));
    })
  );
}
function tc(_0x4c8ba8) {
  let _0x24d051 = new Set();
  return (
    _0x24d051.add(_0x4c8ba8.runtimeScope["roots"].root),
    _0x24d051.add(_0x4c8ba8.runtimeScope["roots"].content),
    _0x24d051.add(_0x4c8ba8.runtimeScope["roots"].overlay),
    _0x24d051.add(_0x4c8ba8.runtimeScope["roots"].popup),
    _0x4c8ba8.runtimeScope["roots"].canvas &&
      _0x24d051.add(_0x4c8ba8.runtimeScope["roots"].canvas),
    _0x4c8ba8.runtimeScope["roots"].menuSlot &&
      _0x24d051.add(_0x4c8ba8.runtimeScope["roots"].menuSlot),
    [..._0x24d051]
  );
}
function nc(_0x4adfac, _0x40362c) {
  ((_0x4adfac.runtimeScope["injector"] = _0x40362c),
    (_0x4adfac.runtimeScope["instanceService"] = _0x40362c.get(
      a.IUniverInstanceService,
    )),
    (_0x4adfac.runtimeScope["commandService"] = _0x40362c.get(
      a.ICommandService,
    )));
}
function rc(_0x31060b) {
  var _0x524036, _0x4c8922, _0x689ae9;
  return (
    ((_0x524036 = _0x31060b.runtimeScope) == null ||
    (_0x524036 = _0x524036.roots) == null
      ? undefined
      : _0x524036.content) ??
    ((_0x4c8922 = _0x31060b.renderScope) == null
      ? undefined
      : _0x4c8922.contentRoot) ??
    ((_0x689ae9 = _0x31060b.renderScope) == null
      ? undefined
      : _0x689ae9.rootElement) ??
    document
  );
}
function ic(_0x9d2cb1, _0x1c52eb) {
  let _0x2b7e0d = false,
    _0x527e51 = 0,
    _0x5b774a = (0, a.toDisposable)(() => {}),
    _0x26a629,
    _0xa16cc7 = () => {
      if (_0x2b7e0d) return;
      let _0x2e35d2 = () => {
          _0x527e51 = window.requestAnimationFrame(_0xa16cc7);
        },
        _0x3c1464 = ac(_0x9d2cb1);
      if (!oc(_0x3c1464)) {
        ((_0x9d2cb1.container["dataset"].embedChildRenderStatus =
          "waiting-base-canvas-root"),
          _0x2e35d2());
        return;
      }
      if (_0x26a629 === _0x3c1464 && _0x3c1464.querySelector("canvas")) return;
      _0x5b774a.dispose();
      let _0x3a3d7c = _0x9d2cb1.injector["get"](p.IRenderManagerService),
        _0x1fe705;
      try {
        _0x1fe705 = Et(_0x3a3d7c, _0x9d2cb1.childUnitId, _0x1c52eb);
      } catch (_0xaaeaad) {
        ((_0x9d2cb1.container["dataset"].embedChildRenderError =
          _0xaaeaad instanceof Error ? _0xaaeaad.message : String(_0xaaeaad)),
          (_0x1fe705 = undefined));
      }
      if (!_0x1fe705) {
        ((_0x9d2cb1.container["dataset"].embedChildRenderStatus =
          "retrying-base-child-render"),
          (_0x26a629 = undefined),
          _0x2e35d2());
        return;
      }
      (delete _0x9d2cb1.container["dataset"].embedChildRenderError,
        (_0x3c1464.dataset["embedChildRenderUnitId"] = _0x9d2cb1.childUnitId),
        _0x1fe705.engine["mount"](_0x3c1464),
        Ot(_0x1fe705, { activate: sc(_0x9d2cb1) }));
      let _0x276fe3 = St(_0x1fe705, _0x3c1464, { activate: false });
      ((_0x5b774a = (0, a.toDisposable)(() => {
        _0x276fe3.dispose();
        try {
          var _0x3bc63f, _0x1581f2;
          (_0x3bc63f = (_0x1581f2 = _0x1fe705.engine).unmount) == null ||
            _0x3bc63f.call(_0x1581f2);
        } catch {}
        (_0x3a3d7c.removeRender(_0x9d2cb1.childUnitId),
          _0x3c1464.removeAttribute("data-embed-child-render-unit-id"));
      })),
        (_0x26a629 = _0x3c1464),
        (_0x9d2cb1.container["dataset"].embedChildRenderStatus = "mounted"),
        _0x2e35d2());
    };
  return (
    (_0x527e51 = window.requestAnimationFrame(_0xa16cc7)),
    (0, a.toDisposable)(() => {
      ((_0x2b7e0d = true),
        window.cancelAnimationFrame(_0x527e51),
        _0x5b774a.dispose());
    })
  );
}
function ac(_0x24d2df) {
  return (0, _.getBaseCanvasRoot)({
    unitId: _0x24d2df.childUnitId,
    scope: rc(_0x24d2df),
  });
}
function oc(_0x2f0c26) {
  return (
    !!_0x2f0c26 &&
    _0x2f0c26.isConnected &&
    _0x2f0c26.clientWidth > 0 &&
    _0x2f0c26.clientHeight > 0
  );
}
function sc(_0x105c74) {
  return true;
}
function cc(_0x21eb15, _0x1b5463, _0x2a8878, _0x2366aa) {
  let _0x253b17 = _0x21eb15.injector["get"](a.IUniverInstanceService),
    _0x188853 = _0x253b17.getUnit(_0x21eb15.childUnitId, _0x21eb15.childType);
  if (!_0x188853) return;
  let _0x38ae41 = lc(_0x253b17, _0x21eb15, _0x188853),
    _0x495c6f = hc(
      _0x21eb15.injector["get"](a.ICommandService),
      _0x1b5463,
      _0x2a8878,
      _0x2366aa,
      _0x21eb15.injector["get"](C.IBaseProjectionService),
      _0x21eb15.injector["get"](a.IPermissionService),
      _0x253b17,
      _0x21eb15.childUnitId,
    ),
    _0x493b62 = new Map([
      [a.IUniverInstanceService, _0x38ae41],
      [a.ICommandService, _0x495c6f],
      [
        _.IBaseCanvasRootResolverService,
        (0, _.createScopedBaseCanvasRootResolverService)(rc(_0x21eb15)),
      ],
    ]);
  return (
    _0x21eb15.injector["has"](a.IConfigService) &&
      _0x493b62.set(
        a.IConfigService,
        Re(_0x21eb15.injector["get"](a.IConfigService)),
      ),
    $(_0x21eb15.injector, _0x493b62)
  );
}
function lc(_0x3fc395, _0x29f234, _0x1f425c) {
  return {
    unitAdded$: _0x3fc395.unitAdded$,
    unitDisposed$: _0x3fc395.unitDisposed$,
    focused$: (0, f.of)(_0x1f425c.getUnitId()),
    getTypeOfUnitAdded$: _0x3fc395.getTypeOfUnitAdded$["bind"](_0x3fc395),
    __addUnit: _0x3fc395.__addUnit["bind"](_0x3fc395),
    getTypeOfUnitDisposed$: _0x3fc395.getTypeOfUnitDisposed$["bind"](_0x3fc395),
    focusUnit: (_0x5bccfc) => {
      _0x5bccfc !== null &&
        _0x5bccfc !== _0x29f234.childUnitId &&
        _0x3fc395.focusUnit(_0x5bccfc);
    },
    getFocusedUnit: () => _0x1f425c,
    getCurrentUnitOfType: (_0x469c89) =>
      _0x469c89 === _0x29f234.childType
        ? _0x1f425c
        : _0x3fc395.getCurrentUnitOfType(_0x469c89),
    setCurrentUnitForType: (_0x5d0645) => {
      _0x5d0645 !== _0x29f234.childUnitId &&
        _0x3fc395.setCurrentUnitForType(_0x5d0645);
    },
    getCurrentTypeOfUnit$: (_0x53e5ae) =>
      _0x53e5ae === _0x29f234.childType
        ? (0, f.of)(_0x1f425c)
        : _0x3fc395.getCurrentTypeOfUnit$(_0x53e5ae),
    createUnit: _0x3fc395.createUnit["bind"](_0x3fc395),
    getUnitCreateOptions: _0x3fc395.getUnitCreateOptions["bind"](_0x3fc395),
    disposeUnit: _0x3fc395.disposeUnit["bind"](_0x3fc395),
    registerCtorForType: _0x3fc395.registerCtorForType["bind"](_0x3fc395),
    getUnit: _0x3fc395.getUnit["bind"](_0x3fc395),
    getAllUnitsForType: (_0x3b6869) =>
      _0x3b6869 === _0x29f234.childType
        ? [_0x1f425c]
        : _0x3fc395.getAllUnitsForType(_0x3b6869),
    getUnitType: _0x3fc395.getUnitType["bind"](_0x3fc395),
  };
}
function uc(
  _0x3d3fcb,
  _0x3e3b0c,
  _0xeea94d = "workbench",
  _0xdd7ac1,
  _0x3ce283,
) {
  let {
    dashboardId: _0x3e989c,
    tableId: _0x5c3d8a,
    viewId: _0xcb6bfd,
  } = dc(_0x3e3b0c, _0xdd7ac1, _0x3ce283);
  (_0x5c3d8a && _0x3d3fcb.activateTable(_0x5c3d8a),
    _0xcb6bfd && _0x3d3fcb.activateView(_0xcb6bfd),
    _0x3e989c && _0x3d3fcb.activateDashboard(_0x3e989c),
    _0x3d3fcb.setLeftSidebarVisible(_0xeea94d === "workbench"));
}
function dc(_0x1f5568, _0x318d64, _0x5c19fe) {
  var _0x5e85af, _0x703c4f, _0x1316bd, _0x37725b, _0x5554a1;
  let _0x38e62e = _0x1f5568.getSnapshot(),
    _0xc7c143 = _0x318d64 == null ? undefined : _0x318d64.tableId,
    _0x1648c2 =
      _0xc7c143 &&
      (_0x5e85af = _0x38e62e.tables) != null &&
      _0x5e85af[_0xc7c143]
        ? _0xc7c143
        : (((_0x703c4f = _0x38e62e.tableOrder) == null
            ? undefined
            : _0x703c4f.find((_0x447699) => {
                var _0x3c40b4;
                return !!(
                  (_0x3c40b4 = _0x38e62e.tables) != null && _0x3c40b4[_0x447699]
                );
              })) ??
          Object.keys(_0x38e62e.tables ?? {})[0] ??
          ""),
    _0x12ae12 =
      (_0x1316bd = _0x38e62e.tables) == null ? undefined : _0x1316bd[_0x1648c2],
    _0x9ebfd9 = _0x318d64 == null ? undefined : _0x318d64.viewId,
    _0x1e30d6 =
      _0x9ebfd9 &&
      _0x12ae12 != null &&
      (_0x37725b = _0x12ae12.views) != null &&
      _0x37725b[_0x9ebfd9]
        ? _0x9ebfd9
        : _0x12ae12 == null || (_0x5554a1 = _0x12ae12.viewOrder) == null
          ? undefined
          : _0x5554a1.find((_0x300ded) => {
              var _0x49c8fc;
              return !!(
                (_0x49c8fc = _0x12ae12.views) != null && _0x49c8fc[_0x300ded]
              );
            }),
    _0x457895 =
      _0x318d64 != null &&
      _0x318d64.dashboardId &&
      _0x5c19fe != null &&
      _0x5c19fe.has(_0x318d64.dashboardId)
        ? _0x318d64.dashboardId
        : undefined;
  return {
    tableId: _0x1648c2,
    ...(_0x1e30d6 ? { viewId: _0x1e30d6 } : {}),
    ...(_0x457895 ? { dashboardId: _0x457895 } : {}),
  };
}
function fc(_0x39c8bd, _0x40bf9a, _0xf1316d, _0x342afe) {
  let _0x4a614b = dc(_0x40bf9a, _0xf1316d, _0x342afe),
    _0x5833f0 = _0x39c8bd.getState();
  (_0x4a614b.tableId &&
    (_0x5833f0.activeTableId !== _0x4a614b.tableId ||
      (!_0x4a614b.dashboardId && _0x5833f0.activeDashboardId)) &&
    _0x39c8bd.activateTable(_0x4a614b.tableId),
    _0x4a614b.viewId &&
      _0x39c8bd.getState().activeViewId !== _0x4a614b.viewId &&
      _0x39c8bd.activateView(_0x4a614b.viewId),
    _0x4a614b.dashboardId &&
      _0x39c8bd.getState().activeDashboardId !== _0x4a614b.dashboardId &&
      _0x39c8bd.activateDashboard(_0x4a614b.dashboardId));
}
function pc(_0x5080bd) {
  return _0x5080bd.renderScope["fullscreen"]
    ? "fullscreen"
    : _0x5080bd.renderScope["mode"] === "float"
      ? "content-only"
      : "workbench";
}
function mc(
  _0x3852f9,
  _0x77621b,
  _0x5ef8f0 = new _.BaseUIPopupService(),
  _0x3f12c1 = new _.BaseEditorService(_0x77621b),
  _0x14c0bc = "workbench",
  _0x2158e2,
  _0x23ca64 = false,
  _0x2bdf0f,
) {
  let _0x35a495 = yc(_0x3852f9.get(a.IConfigService), _0x14c0bc),
    _0x191c2e = hc(
      _0x3852f9.get(a.ICommandService),
      _0x77621b,
      _0x5ef8f0,
      _0x3f12c1,
      _0x3852f9.get(C.IBaseProjectionService),
      _0x3852f9.get(a.IPermissionService),
      _0x3852f9.get(a.IUniverInstanceService),
      undefined,
      _0x23ca64,
    ),
    _0x236343 = new Map([
      [_.IBaseUIStateService, _0x77621b],
      [_.IBaseUIPopupService, _0x5ef8f0],
      [_.IBaseEditorService, _0x3f12c1],
      [a.ICommandService, _0x191c2e],
      [a.IConfigService, _0x35a495],
      [
        _.IBaseCanvasRootResolverService,
        _0x3852f9.get(_.IBaseCanvasRootResolverService),
      ],
      [
        _.IBaseGlobalPortalService,
        (0, _.createScopedBaseGlobalPortalService)(_0x2bdf0f),
      ],
    ]);
  _0x2158e2 && _0x236343.set(_.IBaseViewWheelScrollService, _0x2158e2);
  let _0x123f0a = $(_0x3852f9, _0x236343);
  return (
    _0x123f0a.add([
      _.IBaseClipboardService,
      { useClass: _.BaseClipboardService },
    ]),
    _0x123f0a
  );
}
function hc(
  _0x27811c,
  _0x5ae299,
  _0x194dd3,
  _0x2f4c43,
  _0x17b253,
  _0x5c6479,
  _0x2bb285,
  _0x1f14a2,
  _0x30d923 = false,
) {
  let _0x5edfcd = {
    disposed: _0x27811c.disposed["bind"](_0x27811c),
    hasCommand: _0x27811c.hasCommand["bind"](_0x27811c),
    registerCommand: _0x27811c.registerCommand["bind"](_0x27811c),
    unregisterCommand: _0x27811c.unregisterCommand["bind"](_0x27811c),
    registerMultipleCommand:
      _0x27811c.registerMultipleCommand["bind"](_0x27811c),
    executeCommand: async (..._0x1a7a80) => {
      if (_0x1a7a80[0] === _.BaseKeyboardOperation["id"] && _0x2bb285)
        return (0, _.executeBaseKeyboardOperation)(
          {
            commandService: _0x5edfcd,
            instanceService: _0x2bb285,
            projectionService: _0x17b253,
            stateService: _0x5ae299,
          },
          _0x1a7a80[1],
        );
      let _0x3f8d3a = gc(
        _0x1a7a80[0],
        _0x1a7a80[1],
        _0x5ae299,
        _0x194dd3,
        _0x2bb285,
        _0x1f14a2,
      );
      if (_0x3f8d3a !== undefined) return _0x3f8d3a;
      let _0x15991d = _c(
        _0x1a7a80[0],
        _0x1a7a80[1],
        _0x2f4c43,
        _0x5c6479,
        _0x2bb285,
        _0x1f14a2,
        _0x30d923,
      );
      if (_0x15991d !== undefined) return _0x15991d;
      let _0x3f5fca = _0x1f14a2
        ? _0x2bb285 == null
          ? undefined
          : _0x2bb285.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_BASE"])
        : undefined;
      try {
        return (
          _0x1f14a2 &&
            (_0x2bb285 == null || _0x2bb285.setCurrentUnitForType(_0x1f14a2)),
          await _0x27811c.executeCommand(
            _0x1a7a80[0],
            _0x1a7a80[1],
            _0x1a7a80[2],
          )
        );
      } finally {
        _0x3f5fca &&
          (_0x2bb285 == null ||
            _0x2bb285.setCurrentUnitForType(_0x3f5fca.getUnitId()));
      }
    },
    syncExecuteCommand: (..._0x1c2adb) => {
      if (_0x1c2adb[0] === _.BaseKeyboardOperation["id"] && _0x2bb285)
        return (0, _.executeBaseKeyboardOperation)(
          {
            commandService: _0x5edfcd,
            instanceService: _0x2bb285,
            projectionService: _0x17b253,
            stateService: _0x5ae299,
          },
          _0x1c2adb[1],
        );
      let _0x1ca61f = gc(
        _0x1c2adb[0],
        _0x1c2adb[1],
        _0x5ae299,
        _0x194dd3,
        _0x2bb285,
        _0x1f14a2,
      );
      if (_0x1ca61f !== undefined) return _0x1ca61f;
      let _0x401dd2 = _c(
        _0x1c2adb[0],
        _0x1c2adb[1],
        _0x2f4c43,
        _0x5c6479,
        _0x2bb285,
        _0x1f14a2,
        _0x30d923,
      );
      if (_0x401dd2 !== undefined) return _0x401dd2;
      let _0x4c93fb = _0x1f14a2
        ? _0x2bb285 == null
          ? undefined
          : _0x2bb285.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_BASE"])
        : undefined;
      try {
        return (
          _0x1f14a2 &&
            (_0x2bb285 == null || _0x2bb285.setCurrentUnitForType(_0x1f14a2)),
          _0x27811c.syncExecuteCommand(_0x1c2adb[0], _0x1c2adb[1], _0x1c2adb[2])
        );
      } finally {
        _0x4c93fb &&
          (_0x2bb285 == null ||
            _0x2bb285.setCurrentUnitForType(_0x4c93fb.getUnitId()));
      }
    },
    onCommandExecuted: _0x27811c.onCommandExecuted["bind"](_0x27811c),
    beforeCommandExecuted: _0x27811c.beforeCommandExecuted["bind"](_0x27811c),
    onMutationExecutedForCollab:
      _0x27811c.onMutationExecutedForCollab["bind"](_0x27811c),
  };
  return _0x5edfcd;
}
function gc(_0x20abda, _0x8f9374, _0x13eb48, _0x5b9dc5, _0x155669, _0x2627d6) {
  if (_0x20abda === _.ActivateBaseViewOperation["id"]) {
    let _0x25aac9 = _0x8f9374;
    return _0x25aac9 != null && _0x25aac9.viewId
      ? (_0x25aac9.tableId && _0x13eb48.activateTable(_0x25aac9.tableId),
        _0x13eb48.activateView(_0x25aac9.viewId),
        true)
      : false;
  }
  if (_0x20abda === _.ActivateBaseTableOperation["id"]) {
    let _0x17eafc = _0x8f9374;
    if (!(_0x17eafc != null && _0x17eafc.tableId)) return false;
    _0x13eb48.activateTable(_0x17eafc.tableId);
    let _0x13f8b5 = _0x17eafc.unitId
        ? _0x155669 == null
          ? undefined
          : _0x155669.getUnit(
              _0x17eafc.unitId,
              a.UniverInstanceType["UNIVER_BASE"],
            )
        : _0x155669 == null
          ? undefined
          : _0x155669.getCurrentUnitOfType(a.UniverInstanceType["UNIVER_BASE"]),
      _0xfe17e5 =
        (_0x13f8b5 == null ? undefined : _0x13f8b5.getUnitId()) ?? _0x2627d6;
    _0xfe17e5 &&
      (_0x155669 == null || _0x155669.setCurrentUnitForType(_0xfe17e5),
      _0x155669 == null || _0x155669.focusUnit(_0xfe17e5));
    let _0x2f4b89 =
        _0x13f8b5 == null
          ? undefined
          : _0x13f8b5.getSnapshot().tables[_0x17eafc.tableId],
      _0x1cd9f5 =
        _0x2f4b89 == null
          ? undefined
          : _0x2f4b89.viewOrder["find"](
              (_0xda970f) => _0x2f4b89.views[_0xda970f],
            );
    return (_0x1cd9f5 && _0x13eb48.activateView(_0x1cd9f5), true);
  }
  if (_0x20abda === _.SetBaseScrollOperation["id"]) {
    let _0x48078d = _0x8f9374;
    return _0x48078d != null && _0x48078d.viewId
      ? (_0x13eb48.setScrollState(_0x48078d.viewId, {
          x: _0x48078d.x ?? 0,
          y: _0x48078d.y ?? 0,
        }),
        true)
      : false;
  }
  if (_0x20abda === _.SetBaseZoomOperation["id"]) {
    let _0x1dda86 = _0x8f9374;
    return !(_0x1dda86 != null && _0x1dda86.viewId) ||
      typeof _0x1dda86.zoom != "number"
      ? false
      : (_0x13eb48.setZoom(_0x1dda86.viewId, _0x1dda86.zoom), true);
  }
  if (_0x20abda === _.OpenBasePanelOperation["id"])
    return _0x8f9374
      ? (_0x13eb48.clearVirtualRecords(),
        _0x5b9dc5.openToolbarPanel(_0x8f9374),
        true)
      : false;
  if (_0x20abda === _.CloseBasePanelOperation["id"])
    return (_0x5b9dc5.closeToolbarPanel(), true);
  if (_0x20abda === _.OpenBaseContextMenuOperation["id"])
    return _0x8f9374
      ? (_0x13eb48.clearVirtualRecords(),
        _0x5b9dc5.openContextMenu(_0x8f9374),
        true)
      : false;
  if (_0x20abda === _.CloseBaseContextMenuOperation["id"])
    return (_0x5b9dc5.closeContextMenu(), true);
  if (_0x20abda === _.OpenBaseActiveEditorOperation["id"])
    return _0x8f9374 ? (_0x5b9dc5.openActiveEditor(_0x8f9374), true) : false;
  if (_0x20abda === _.CloseBaseActiveEditorOperation["id"])
    return (_0x5b9dc5.closeActiveEditor(), true);
  if (_0x20abda === _.OpenBaseRecordDetailPanelOperation["id"]) {
    let _0x33520b = _0x8f9374;
    return _0x33520b != null && _0x33520b.recordId
      ? (_0x13eb48.openRecordDetail(_0x33520b.recordId), true)
      : false;
  }
  if (_0x20abda === _.CloseBaseRecordDetailPanelOperation["id"])
    return (_0x13eb48.closeRecordDetail(), true);
}
function _c(
  _0xd88d5d,
  _0x3d979a,
  _0x289ed8,
  _0x367cc4,
  _0x178735,
  _0xee35bb,
  _0x44f8e1 = false,
) {
  if (_0xd88d5d === _.StartBaseEditingCellOperation["id"]) {
    var _0x44c846;
    if (_0x44f8e1 || !vc(_0x3d979a)) return false;
    let _0x19ab98 =
      _0x3d979a.unitId ??
      _0xee35bb ??
      (_0x178735 == null ||
      (_0x44c846 = _0x178735.getCurrentUnitOfType(
        a.UniverInstanceType["UNIVER_BASE"],
      )) == null
        ? undefined
        : _0x44c846.getUnitId());
    return !_0x19ab98 ||
      !(0, C.canEditBaseTargets)(_0x367cc4, _0x19ab98, [
        (0, C.getBaseTablePermissionObjectId)(_0x3d979a.tableId),
        (0, C.getBaseFieldPermissionObjectId)(
          _0x3d979a.tableId,
          _0x3d979a.fieldId,
        ),
        (0, C.getBaseRecordPermissionObjectId)(
          _0x3d979a.tableId,
          _0x3d979a.recordId,
        ),
        (0, C.getBaseViewPermissionObjectId)(
          _0x3d979a.tableId,
          _0x3d979a.viewId,
        ),
      ])
      ? false
      : (_0x289ed8.startEditingCell({
          tableId: _0x3d979a.tableId,
          viewId: _0x3d979a.viewId,
          recordId: _0x3d979a.recordId,
          fieldId: _0x3d979a.fieldId,
          initialQuery: _0x3d979a.initialQuery,
          autoFocus: _0x3d979a.autoFocus,
          virtual: _0x3d979a.virtual,
        }),
        true);
  }
  if (_0xd88d5d === _.StopBaseEditingCellOperation["id"])
    return (_0x289ed8.stopEditingCell(), true);
}
function vc(_0x24a6f5) {
  return (
    typeof _0x24a6f5 == "object" &&
    !!_0x24a6f5 &&
    "tableId" in _0x24a6f5 &&
    typeof _0x24a6f5.tableId == "string" &&
    "viewId" in _0x24a6f5 &&
    typeof _0x24a6f5.viewId == "string" &&
    "recordId" in _0x24a6f5 &&
    typeof _0x24a6f5.recordId == "string" &&
    "fieldId" in _0x24a6f5 &&
    typeof _0x24a6f5.fieldId == "string"
  );
}
function yc(_0x55645e, _0x2d55b1) {
  return {
    getConfig: (_0xedbf5f) => {
      let _0x24ce2e = _0x55645e.getConfig(_0xedbf5f);
      return _0xedbf5f === _.BASES_UI_PLUGIN_CONFIG_KEY
        ? bc(_0x24ce2e ?? {}, _0x2d55b1)
        : _0x24ce2e;
    },
    setConfig: _0x55645e.setConfig["bind"](_0x55645e),
    deleteConfig: _0x55645e.deleteConfig["bind"](_0x55645e),
    subscribeConfigValue$: _0x55645e.subscribeConfigValue$["bind"](_0x55645e),
  };
}
function bc(_0x20ed71, _0x153dd5 = "workbench") {
  let _0x533e25;
  return (
    (_0x533e25 =
      _0x153dd5 === "content-only" || _0x153dd5 === "fullscreen"
        ? {
            header: false,
            headerMenu: false,
            leftSidebar: false,
            footer: false,
            global: true,
            presentation: true,
          }
        : { header: true, headerMenu: true, presentation: false }),
    {
      ..._0x20ed71,
      workbench: {
        ...(_0x20ed71.workbench ?? {}),
        ..._0x533e25,
        route: false,
        fallbackToFirstUnit: true,
        collaborationStatus: false,
      },
    }
  );
}
function xc(_0x306619) {
  var _0x81f00e;
  if (
    _0x306619.renderScope["fullscreen"] &&
    _0x306619.runtimeScope["roots"].menuSlot
  )
    return _0x306619.runtimeScope["roots"].menuSlot;
  let _0x288ea4 =
      _0x306619.runtimeScope["roots"].overlay ??
      _0x306619.renderScope["overlayRoot"] ??
      _0x306619.renderScope["rootElement"],
    _0x33a46c =
      ((_0x81f00e = _0x288ea4.parentElement) == null
        ? undefined
        : _0x81f00e.dataset["uComp"]) === "embed-float-dom-chrome"
        ? _0x288ea4.parentElement
        : undefined;
  if (
    !_0x33a46c ||
    !_0x306619.embedId ||
    !_0x33a46c.dataset["embedId"] ||
    _0x33a46c.dataset["embedId"] === _0x306619.embedId
  )
    return _0x33a46c ?? _0x288ea4;
  let _0x9b06c9 = _0x306619.renderScope["rootElement"].ownerDocument;
  return (
    Array.from(
      _0x9b06c9.querySelectorAll('[data-u-comp="embed-float-dom-chrome"]'),
    ).find((_0x152545) => _0x152545.dataset["embedId"] === _0x306619.embedId) ??
    _0x288ea4
  );
}
function Sc(_0x175381) {
  let _0x2f04c7 = xc(_0x175381),
    _0x58a00c =
      _0x175381.renderScope["rootElement"].ownerDocument["createElement"](
        "div",
      );
  return (
    (_0x58a00c.dataset["embedFloatingMenuEntry"] =
      _0x175381.descriptor["entry"]),
    (_0x58a00c.className = "univer-pointer-events-none"),
    _0x58a00c.addEventListener("pointerdown", Cc),
    _0x58a00c.addEventListener("mousedown", Cc),
    wc(_0x58a00c),
    _0x2f04c7.appendChild(_0x58a00c),
    {
      menu: _0x58a00c,
      menuRoot: _0x2f04c7,
      portalContainer: _0x175381.runtimeScope["roots"].popup,
    }
  );
}
function Cc(_0xa3598d) {
  _0xa3598d.stopPropagation();
}
function wc(_0x58276a) {
  _0x58276a.addEventListener("pointerup", (_0x11f62b) => {
    let _0xfbccd7 =
      _0x11f62b.button === 0 && _0x11f62b.target instanceof Element
        ? _0x11f62b.target["closest"]("button:not(:disabled)")
        : null;
    if (!_0xfbccd7) return;
    let _0x2abc2d = false,
      _0x2f4999 = () => {
        _0x2abc2d = true;
      };
    (_0xfbccd7.addEventListener("click", _0x2f4999, { once: true }),
      globalThis.setTimeout(() => {
        (_0xfbccd7.removeEventListener("click", _0x2f4999),
          _0x2abc2d || _0xfbccd7.click());
      }, 0));
  });
}
function Tc(_0x34e091) {
  return [
    {
      hostType: a.UniverInstanceType["UNIVER_DOC"],
      entry: t.EmbedHostEntryEnum["DocsCustomBlock"],
      childType: _0x34e091.childType,
      mount: _0x34e091.mount,
    },
    {
      hostType: a.UniverInstanceType["UNIVER_SHEET"],
      entry: t.EmbedHostEntryEnum["SheetsFloatingObject"],
      childType: _0x34e091.childType,
      mount: _0x34e091.mount,
    },
    {
      hostType: a.UniverInstanceType["UNIVER_SLIDE"],
      entry: t.EmbedHostEntryEnum["SlidesFloatingObject"],
      childType: _0x34e091.childType,
      mount: _0x34e091.mount,
    },
    {
      hostType: a.UniverInstanceType["UNIVER_BOARD"],
      entry: t.EmbedHostEntryEnum["BoardsFloatingObject"],
      childType: _0x34e091.childType,
      mount: _0x34e091.mount,
    },
  ];
}
function Ec(_0x25c9c9) {
  let _0x3be17c = (0, c.useDependency)(a.IPermissionService);
  return (0, c.useObservable)(
    () =>
      _0x3be17c.permissionPointUpdate$["pipe"](
        (0, f.map)(() => (0, C.canEditBaseTargets)(_0x3be17c, _0x25c9c9, [])),
      ),
    (0, C.canEditBaseTargets)(_0x3be17c, _0x25c9c9, []),
    false,
    [_0x3be17c, _0x25c9c9],
  );
}
function Dc(_0x247417) {
  let {
      embedId: _0x3a3491,
      childUnitId: _0x11113f,
      base: _0x200d78,
      activeTable: _0x5eddb5,
    } = _0x247417,
    _0xbd8eea = Oc(_0x3a3491);
  return _0xbd8eea
    ? (0, w.createPortal)(
        (0, m.jsx)(Ac, {
          childUnitId: _0x11113f,
          base: _0x200d78,
          activeTable: _0x5eddb5,
        }),
        _0xbd8eea,
      )
    : null;
}
function Oc(_0x2a4f76) {
  let [_0x4cf8ce, _0x226097] = (0, d.useState)(() => kc(_0x2a4f76));
  return (
    (0, d.useEffect)(() => {
      let _0x24c2e9 = window.requestAnimationFrame(() =>
        _0x226097(kc(_0x2a4f76)),
      );
      return () => {
        window.cancelAnimationFrame(_0x24c2e9);
      };
    }, [_0x2a4f76]),
    _0x4cf8ce
  );
}
function kc(_0x5251b8) {
  return (
    Array.from(
      document.querySelectorAll(
        "[data-embed-fullscreen-sidebar-slot=\x22true\x22]",
      ),
    ).find((_0x5762c3) => _0x5762c3.dataset["embedId"] === _0x5251b8) ?? null
  );
}
function Ac(_0x2b2625) {
  var _0x52a231, _0x49ed97;
  let {
      childUnitId: _0x42543a,
      base: _0x516866,
      activeTable: _0x2eac3b,
    } = _0x2b2625,
    _0x330cdd = (0, c.useDependency)(a.ICommandService),
    _0x67bb1d = (0, c.useDependency)(a.IConfigService),
    _0x135db4 = (0, c.useDependency)(a.LocaleService),
    _0x42cc4e = (0, c.useDependency)(_.IBaseUIStateService),
    _0x30f279 = Ec(_0x42543a),
    _0x2dd7dd = (0, c.useObservable)(
      () => _0x42cc4e.state$,
      _0x42cc4e.getState(),
      false,
      [_0x42cc4e],
    ),
    [_0x276331, _0x46b980] = (0, d.useState)(null),
    [_0x384f02, _0x4c8336] = (0, d.useState)(null),
    [_0xc728be, _0x7d6508] = (0, d.useState)(""),
    [_0x545580, _0x34ed99] = (0, d.useState)("configurations"),
    [_0xd7fa48, _0x40f050] = (0, d.useState)(null),
    _0x1f5554 =
      (_0x67bb1d == null ||
      (_0x52a231 = _0x67bb1d.getConfig(_.BASES_UI_PLUGIN_CONFIG_KEY)) == null
        ? undefined
        : _0x52a231.workbench) ?? {},
    _0x1f1316 =
      _0x2dd7dd.layout["leftPanelWidth"] ??
      _0x1f5554.leftPanelWidth ??
      ((_0x49ed97 = _.defaultPluginConfig["workbench"]) == null
        ? undefined
        : _0x49ed97.leftPanelWidth) ??
      _.BASE_LEFT_PANEL_DEFAULT_WIDTH,
    _0x53714b = _0x516866.getSnapshot(),
    _0x386807 = Nc(_0x53714b, _0x2eac3b.id, !_0x30f279),
    _0x5d17e2 = async (_0x1215b2) => {
      let _0xecfd19 = _0x53714b.tables[_0x1215b2];
      if (!_0xecfd19) return;
      let _0x2dae93 = _0xecfd19.viewOrder["find"](
        (_0x220850) => _0xecfd19.views[_0x220850],
      );
      (_0x42cc4e.activateTable(_0xecfd19.id),
        _0x2dae93 && _0x42cc4e.activateView(_0x2dae93),
        _0x42cc4e.setSelection(null),
        _0x42cc4e.closeRecordDetail(),
        await _0x330cdd.executeCommand(_.ActivateBaseTableOperation["id"], {
          unitId: _0x42543a,
          tableId: _0x1215b2,
        }));
    },
    _0x46e3a5 = async () => {
      let _0x5ebf9a = (0, a.createDefaultBaseTableSnapshot)({
        id: "table-" + (0, a.generateRandomId)(8),
        name: Pc(_0x516866.getSnapshot(), (_0x20315f) =>
          _0x135db4.t(
            "embed-ui.basesFloating.tableSidebar.defaultTableName",
            String(_0x20315f),
          ),
        ),
        primaryFieldId: "field-" + (0, a.generateRandomId)(8),
        gridViewId: "view-" + (0, a.generateRandomId)(8),
      });
      (await _0x330cdd.executeCommand(C.CreateBaseTableCommand["id"], {
        unitId: _0x42543a,
        table: _0x5ebf9a,
      })) &&
        (_0x42cc4e.activateTable(_0x5ebf9a.id),
        _0x42cc4e.activateView(_0x5ebf9a.viewOrder[0]),
        _0x42cc4e.setSelection(null),
        _0x42cc4e.closeRecordDetail(),
        _0x40f050(_0x5ebf9a.id));
    },
    _0x4be06a = async (_0x1b058c, _0x1d29d4, _0x22ce59) => {
      let _0x36f41a = _0x516866.getSnapshot(),
        _0x4b2dfc = _0x36f41a.tables[_0x1b058c];
      if (!_0x4b2dfc) return;
      let _0x3ca0b1 = (0, C.copyBaseTableSnapshot)(_0x4b2dfc, {
        id: "table-" + (0, a.generateRandomId)(8),
        name: _0x1d29d4,
        includeRecords: _0x22ce59 === "records",
        regenerateViewIds: true,
        createViewId: () => "view-" + (0, a.generateRandomId)(8),
      });
      (await _0x330cdd.executeCommand(C.CreateBaseTableCommand["id"], {
        unitId: _0x42543a,
        table: _0x3ca0b1,
        index: _0x36f41a.tableOrder["indexOf"](_0x1b058c) + 1,
      })) &&
        (_0x42cc4e.activateTable(_0x3ca0b1.id),
        _0x42cc4e.activateView(_0x3ca0b1.viewOrder[0]),
        _0x42cc4e.setSelection(null),
        _0x42cc4e.closeRecordDetail());
    },
    _0x2b727c = async (_0x2698c1) => {
      let _0x59180f = _0x516866.getSnapshot(),
        _0x393c8d = Nc(_0x59180f, _0x2eac3b.id).map(
          (_0x237554) => _0x237554.id,
        );
      if (_0x393c8d.length <= 1) return;
      let _0x5172bd =
        _0x2698c1 === _0x2eac3b.id
          ? _0x393c8d.find((_0x20699a) => _0x20699a !== _0x2698c1)
          : null;
      if (
        (await _0x330cdd.executeCommand(C.DeleteBaseTableCommand["id"], {
          unitId: _0x42543a,
          tableId: _0x2698c1,
        })) &&
        _0x5172bd
      ) {
        let _0x23c47b = _0x59180f.tables[_0x5172bd],
          _0x46b1a6 =
            _0x23c47b == null
              ? undefined
              : _0x23c47b.viewOrder["find"](
                  (_0x53f88f) => _0x23c47b.views[_0x53f88f],
                );
        (_0x42cc4e.activateTable(_0x5172bd),
          _0x46b1a6 && _0x42cc4e.activateView(_0x46b1a6),
          _0x42cc4e.setSelection(null),
          _0x42cc4e.closeRecordDetail());
      }
    };
  return (0, m.jsxs)(m.Fragment, {
    children: [
      (0, m.jsx)(_.BaseTableSidebarFrame, {
        title: _0x53714b.name || "Base",
        items: _0x386807,
        width: _0x1f1316,
        pendingRenameItemId: _0xd7fa48,
        onActivateItem: _0x5d17e2,
        onAddTable: _0x30f279
          ? async () => {
              await _0x46e3a5();
            }
          : undefined,
        onRenameTable: _0x30f279
          ? async (_0x5f554a, _0x214e65) => {
              await _0x330cdd.executeCommand(C.RenameBaseTableCommand["id"], {
                unitId: _0x42543a,
                tableId: _0x5f554a,
                name: _0x214e65,
              });
            }
          : undefined,
        getTableNameError: (_0x226716, _0x1aec8c) =>
          (0, _.getBaseTableNameErrorMessage)(
            _0x135db4,
            (0, C.validateBaseTableName)(_0x53714b, _0x1aec8c, _0x226716),
          ),
        onPendingRenameItemConsumed: (_0x4ec709) => {
          _0xd7fa48 === _0x4ec709 && _0x40f050(null);
        },
        onDuplicateTable: _0x30f279
          ? (_0x57d5f7) => {
              let _0x5df1c1 = _0x516866.getSnapshot(),
                _0x175d6b = _0x5df1c1.tables[_0x57d5f7];
              _0x175d6b &&
                (_0x4c8336(_0x57d5f7),
                _0x7d6508(
                  (0, C.createUniqueBaseTableName)(
                    _0x5df1c1,
                    _0x135db4.t(
                      "embed-ui.basesFloating.duplicateTable.copyName",
                      _0x175d6b.name,
                    ),
                  ),
                ),
                _0x34ed99("configurations"));
            }
          : undefined,
        onDeleteTable: _0x30f279 ? _0x46b980 : undefined,
        onResizeWidth: (_0x231070) => _0x42cc4e.setLeftPanelWidth(_0x231070),
      }),
      (0, m.jsx)(_.BaseDuplicateTableDialog, {
        open: !!_0x384f02,
        name: _0xc728be,
        nameError: (0, _.getBaseTableNameErrorMessage)(
          _0x135db4,
          (0, C.validateBaseTableName)(_0x53714b, _0xc728be.trim()),
        ),
        mode: _0x545580,
        onNameChange: _0x7d6508,
        onModeChange: _0x34ed99,
        onCancel: () => _0x4c8336(null),
        onConfirm: async () => {
          let _0x3b20df = _0x384f02,
            _0x37e986 = _0xc728be.trim(),
            _0x2f200b = _0x545580;
          !_0x3b20df ||
            !_0x37e986 ||
            (_0x4c8336(null), await _0x4be06a(_0x3b20df, _0x37e986, _0x2f200b));
        },
      }),
      (0, m.jsx)(_.BaseDeleteConfirmDialog, {
        open: !!_0x276331,
        title: _0x135db4.t("embed-ui.basesFloating.confirmDelete.tableTitle"),
        description: _0x135db4.t(
          "embed-ui.basesFloating.confirmDelete.tableDescription",
        ),
        onCancel: () => _0x46b980(null),
        onConfirm: async () => {
          let _0x4e7a76 = _0x276331;
          (_0x46b980(null), _0x4e7a76 && (await _0x2b727c(_0x4e7a76)));
        },
      }),
    ],
  });
}
function jc(_0x4b713a) {
  let {
      embedId: _0x526809,
      activeView: _0x493347,
      views: _0x55ecbd,
      addViewOpen: _0x39da8c,
      onAddViewOpenChange: _0x541a9f,
      onActivateView: _0x5b349f,
      onAddView: _0x2ffca3,
      onSetViewAsFirst: _0x28e7da,
      onMoveView: _0xa3c0a2,
      onRenameView: _0x5816a4,
      onDuplicateView: _0x7eeff7,
      onConfigureView: _0x186d4d,
      onDeleteView: _0x5ab3a7,
      readonly: _0x4a0d84,
    } = _0x4b713a,
    _0x240054 = (0, c.useDependency)(a.LocaleService);
  return (0, m.jsx)("div", {
    "data-u-comp": "base-embed-fullscreen-view-tabs",
    className:
      "univer-pointer-events-auto univer-box-border univer-min-w-0 univer-self-stretch univer-bg-gray-50 univer-pr-24 dark:!univer-bg-gray-900",
    children: (0, m.jsx)(_.ViewTabs, {
      readonly: _0x4a0d84,
      className: "univer-bg-gray-50 univer-px-0 dark:!univer-bg-gray-900",
      views: _0x55ecbd.map((_0x16edcb) => ({
        id: _0x16edcb.id,
        name: _0x16edcb.name,
        type: _0x16edcb.type,
      })),
      activeViewId: _0x493347.id,
      onActivateView: _0x5b349f,
      onSetViewAsFirst: _0x28e7da,
      onMoveView: _0xa3c0a2,
      onRenameView: _0x5816a4,
      onDuplicateView: _0x7eeff7,
      onConfigureView: _0x186d4d,
      onDeleteView: _0x5ab3a7,
      onAddView: () => _0x541a9f(!_0x39da8c),
      addViewDropdown: {
        open: _0x39da8c,
        onOpenChange: _0x541a9f,
        overlay: (0, m.jsx)("div", {
          "data-u-comp": "base-embed-fullscreen-add-view-menu",
          "data-embed-id": _0x526809,
          "data-embed-floating-menu-popup": "true",
          children: (0, m.jsx)(_.AddViewMenu, {
            views: _.BASE_VIEW_MENU_ITEMS["map"]((_0x396542) => ({
              ..._0x396542,
              label: _0x240054.t(_0x396542.label),
              description: _0x240054.t(_0x396542.description),
            })),
            onCreate: _0x2ffca3,
          }),
        }),
      },
    }),
  });
}
function Mc(_0x34009a) {
  var _0x1dfe55;
  return (
    (_0x34009a == null || (_0x1dfe55 = _0x34009a.tableOrder) == null
      ? undefined
      : _0x1dfe55
          .map((_0x1accde) => _0x34009a.tables[_0x1accde])
          .filter((_0x5a0ee5) => !!_0x5a0ee5)) ?? []
  );
}
function Nc(_0x55cbad, _0x1d132d, _0x5b08c9 = false) {
  return Mc(_0x55cbad).map((_0x377ac3) => ({
    id: _0x377ac3.id,
    name: _0x377ac3.name,
    active: _0x377ac3.id === _0x1d132d,
    readonly: _0x5b08c9,
  }));
}
function Pc(_0x570845, _0x6d68e9) {
  let _0x53f41a = new Set(Mc(_0x570845).map((_0x4f1f2a) => _0x4f1f2a.name)),
    _0x39a5da = _0x53f41a.size + 1,
    _0x55b0fa = _0x6d68e9(_0x39a5da);
  for (; _0x53f41a.has(_0x55b0fa);)
    ((_0x39a5da += 1), (_0x55b0fa = _0x6d68e9(_0x39a5da)));
  return _0x55b0fa;
}
const Fc =
  "\n univer-pointer-events-auto univer-relative univer-isolate univer-flex univer-shrink-0\n univer-items-center univer-self-stretch univer-rounded-lg univer-border univer-border-solid\n univer-border-gray-200 univer-bg-transparent univer-p-1 univer-shadow-lg\n before:univer-pointer-events-none before:univer-absolute before:univer-inset-0\n before:univer-z-[-1] before:univer-rounded-lg before:univer-bg-gray-0 before:univer-opacity-90\n before:univer-content-[''] dark:!univer-border-gray-600 dark:before:!univer-bg-gray-900\n";
function Ic() {
  return Tc({ childType: a.UniverInstanceType["UNIVER_BASE"], mount: Lc });
}
function Lc(_0x280415) {
  let {
      menu: _0x328e1d,
      menuRoot: _0xdee4fd,
      portalContainer: _0x20a1e6,
    } = Sc(_0x280415),
    _0x14f050 = nn(_0x328e1d),
    _0x456ca6 = _0x280415.runtimeScope["injector"];
  return (
    _0x14f050.render(
      (0, d.createElement)(
        Kt,
        {
          injector: _0x456ca6,
          mountContainer: _0x20a1e6,
          embedId: _0x280415.embedId,
        },
        (0, d.createElement)(Wc, {
          hostUnitId: _0x280415.hostUnitId,
          embedId: _0x280415.embedId,
          childUnitId: _0x280415.childUnitId,
          entry: _0x280415.descriptor["entry"],
          fullscreen: !!_0x280415.renderScope["fullscreen"],
          floatingMenuPortalRoot: _0xdee4fd,
          runtimeFocusRoot: _0x280415.renderScope["rootElement"],
          usesDomFloatingStage:
            _0x280415.descriptor["entry"] === "sheets-floating-object",
          renderScopeActive$: _0x280415.renderScope["active$"],
        }),
      ),
    ),
    (0, a.toDisposable)(() => {
      (rn(_0x14f050), globalThis.setTimeout(() => _0x328e1d.remove(), 0));
    })
  );
}
function Rc(_0x250640) {
  return sr({
    embedId: _0x250640.embedId,
    active: zc(_0x250640.activeEmbedId, _0x250640.stage),
    fullscreen: _0x250640.fullscreen,
    usesDomFloatingStage: _0x250640.usesDomFloatingStage,
    renderScopeActive: _0x250640.renderScopeActive,
  });
}
function zc(_0x3bb9ab, _0x3f4b60) {
  return _0x3bb9ab
    ? {
        hostUnitId: "",
        childUnitId: "",
        embedId: _0x3bb9ab,
        stage:
          _0x3f4b60 === "stage2" || _0x3f4b60 === "stage1"
            ? "stage2"
            : "inactive",
      }
    : null;
}
function Bc(_0x5222cc) {
  return _0x5222cc;
}
function Vc(_0x96daaa) {
  return _0x96daaa;
}
function Hc(_0x2a948c) {
  return !_0x2a948c;
}
function Uc(_0x4bc0a7) {
  return { [q]: _0x4bc0a7, [G]: "floating-menu" };
}
function Wc(_0x65be19) {
  let {
      hostUnitId: _0x385821,
      embedId: _0x5c0e50,
      childUnitId: _0x395cd7,
      entry: _0x24fc40,
      fullscreen: _0x2abc18,
      floatingMenuPortalRoot: _0x5dca93,
      runtimeFocusRoot: _0x2cc61c,
      usesDomFloatingStage: _0x31effd,
      renderScopeActive$: _0xd02341,
    } = _0x65be19,
    _0x1ed860 = (0, c.useDependency)(a.ICommandService),
    _0x330d78 = (0, c.useComponentsOfPart)(_.BASE_TOOLBAR_EXTRA_ACTIONS),
    _0x469fac = (0, c.useDependency)(a.IUniverInstanceService),
    _0x4a25cf = (0, c.useDependency)(a.LocaleService),
    _0xd63279 = (0, c.useDependency)(C.IBaseViewRegistryService),
    _0x3d7030 = (0, c.useDependency)(a.IUndoRedoService),
    _0x189750 = (0, c.useDependency)(_.IBaseUIStateService),
    _0x2df598 = (0, c.useDependency)(_.IBaseUIPopupService),
    _0x4a0e84 = (0, c.useDependency)(ce),
    _0x5763ad = (0, c.useObservable)(
      () => _0x189750.state$,
      _0x189750.getState(),
      false,
      [_0x189750],
    ),
    _0x1726d5 = (0, c.useObservable)(
      () => _0x3d7030.undoRedoStatus$,
      { undos: 0, redos: 0 },
      false,
      [_0x3d7030],
    ),
    _0x634ea8 = (0, c.useObservable)(() => _0xd02341, false, false, [
      _0xd02341,
    ]),
    _0x1733e9 = (0, c.useObservable)(
      () => _0x4a0e84.active$,
      _0x4a0e84.getActive(),
      false,
      [_0x4a0e84],
    ),
    _0x36e8b8 = (0, c.useObservable)(
      () => _0x2df598.toolbarPanel$,
      _0x2df598.getToolbarPanel(),
      false,
      [_0x2df598],
    ),
    _0x285ddb = _0x4a0e84.getStage(_0x5c0e50),
    [_0x447c62, _0xf96421] = (0, d.useState)(0),
    [_0x54cf9c, _0x38a31c] = (0, d.useState)(null),
    [_0x4d2844, _0xd4cbc6] = (0, d.useState)(false),
    [_0x52b845, _0x3779ed] = (0, d.useState)(null),
    _0x3173e7 = (0, d.useRef)(_0x36e8b8),
    _0xfb99cc = (0, d.useRef)(null),
    _0x5600c6 = _0x469fac.getUnit(
      _0x395cd7,
      a.UniverInstanceType["UNIVER_BASE"],
    ),
    _0x197f4 = Ec(_0x395cd7),
    _0x47ff0a = _0x5600c6 == null ? undefined : _0x5600c6.getSnapshot(),
    _0xc6eb95 = Yc(_0x47ff0a, _0x5763ad.activeTableId),
    _0x5e3f08 = Xc(_0xc6eb95),
    _0x50a2eb = Zc(_0xc6eb95, _0x5763ad.activeViewId),
    _0x15f582 =
      Rc({
        embedId: _0x5c0e50,
        activeEmbedId: _0x1733e9 == null ? undefined : _0x1733e9.embedId,
        stage: _0x285ddb,
        fullscreen: _0x2abc18,
        usesDomFloatingStage: _0x31effd,
        renderScopeActive: _0x634ea8,
      }) === "stage2",
    [_0x3f12e1, _0x3707c6] = (0, d.useState)(_0x15f582),
    _0x285864 = Bc(_0x2abc18),
    _0x2ef0dc = Vc(_0x2abc18),
    _0x1c3e81 = Hc(_0x2abc18),
    _0x222ba2 = _0x285864
      ? "univer-pointer-events-auto\x20univer-min-h-11\x20univer-w-full\x20univer-min-w-0\x20univer-max-w-none\x20univer-flex-1"
      : "univer-pointer-events-auto\x20univer-max-w-none\x20univer-flex-none\x20!univer-bg-transparent\x20dark:!univer-bg-transparent";
  if (
    (_0x3f12e1 !== _0x15f582 &&
      (_0x3707c6(_0x15f582),
      _0x15f582 || (_0x38a31c(null), _0xd4cbc6(false), _0x3779ed(null))),
    (0, d.useEffect)(() => {
      _0x15f582 ||
        (_0x2df598.closeToolbarPanel(),
        _0x2df598.closeContextMenu(),
        _0x2df598.closeActiveEditor());
    }, [_0x15f582, _0x2df598]),
    (0, d.useEffect)(() => {
      _0x197f4 ||
        (_0x2df598.closeToolbarPanel(),
        _0x2df598.closeContextMenu(),
        _0x2df598.closeActiveEditor());
    }, [_0x197f4, _0x2df598]),
    (0, d.useEffect)(() => {
      let _0x1efaea = _0x3173e7.current;
      if (
        ((_0x3173e7.current = _0x36e8b8), !_0x1efaea || _0x36e8b8 || !_0x15f582)
      )
        return;
      let _0x52d9b3 = window.requestAnimationFrame(() =>
        Yt(_0x5c0e50, _0x2cc61c),
      );
      return () => window.cancelAnimationFrame(_0x52d9b3);
    }, [_0x5c0e50, _0x15f582, _0x2cc61c, _0x36e8b8]),
    (0, d.useEffect)(() => {
      if (!_0x54cf9c) return;
      let _0x26483a = (_0x3244eb) => {
          var _0x1b10b0;
          let _0x3b38ac =
            _0x3244eb.target instanceof Node ? _0x3244eb.target : null;
          (_0x3b38ac &&
            (_0x1b10b0 = _0xfb99cc.current) != null &&
            _0x1b10b0.contains(_0x3b38ac)) ||
            _0x38a31c(null);
        },
        _0x16c01b = (_0xd70da3) => {
          _0xd70da3.key === "Escape" && _0x38a31c(null);
        };
      return (
        document.addEventListener("pointerdown", _0x26483a, true),
        document.addEventListener("keydown", _0x16c01b, true),
        () => {
          (document.removeEventListener("pointerdown", _0x26483a, true),
            document.removeEventListener("keydown", _0x16c01b, true));
        }
      );
    }, [_0x54cf9c]),
    !_0x47ff0a || !_0x5600c6 || !_0xc6eb95 || !_0x50a2eb)
  )
    return null;
  let _0x4acadc = () => {
      _0x4a0e84.activate(
        { hostUnitId: _0x385821, embedId: _0x5c0e50, childUnitId: _0x395cd7 },
        "stage2",
      );
    },
    _0x517ddb = async (_0x1fcbf3, _0x10de85) => {
      (_0x4acadc(),
        await _0x1ed860.executeCommand(_.OpenBasePanelOperation["id"], {
          type: _0x1fcbf3,
          anchor: $c(_0x10de85.getBoundingClientRect()),
        }));
    },
    _0x32b4c3 = async (_0x5d040c) => {
      (_0x4acadc(),
        await _0x1ed860.executeCommand(_.ActivateBaseViewOperation["id"], {
          tableId: _0xc6eb95.id,
          unitId: _0x395cd7,
          viewId: _0x5d040c,
        }),
        _0xf96421((_0x52f766) => _0x52f766 + 1));
    },
    _0x20e345 = async (_0x6f5479) => {
      _0x4acadc();
      let _0xd5f89d = "view-" + (0, a.generateRandomId)(6),
        _0x391262 = _0xd63279.get(_0x6f5479).createDefaultConfig(_0xc6eb95),
        _0xb799e2 = await _0x1ed860.executeCommand(
          C.CreateBaseViewCommand["id"],
          {
            unitId: _0x395cd7,
            tableId: _0xc6eb95.id,
            view: {
              id: _0xd5f89d,
              tableId: _0xc6eb95.id,
              name: (0, _.createDefaultViewName)(_0x4a25cf, _0x6f5479),
              type: _0x6f5479,
              config: _0x391262,
              fieldOrder: [..._0xc6eb95.fieldOrder],
              fieldSettings: {},
            },
          },
        );
      (_0x38a31c(null),
        _0xd4cbc6(false),
        _0xf96421((_0x573e1b) => _0x573e1b + 1),
        _0xb799e2 && (await _0x32b4c3(_0xd5f89d)));
    },
    _0x44ba28 = async (_0x779123) => {
      var _0x47539d;
      let _0x4291eb =
        (_0x47539d = _0x5e3f08[0]) == null ? undefined : _0x47539d.id;
      !_0x4291eb ||
        _0x4291eb === _0x779123 ||
        (_0x4acadc(),
        await _0x1ed860.executeCommand(C.MoveBaseViewCommand["id"], {
          unitId: _0x395cd7,
          tableId: _0xc6eb95.id,
          viewId: _0x779123,
          target: { beforeViewId: _0x4291eb },
        }),
        _0xf96421((_0xdc25f7) => _0xdc25f7 + 1));
    },
    _0x29fd08 = async (_0x2c29b4, _0x330bb7) => {
      (_0x4acadc(),
        await _0x1ed860.executeCommand(C.MoveBaseViewCommand["id"], {
          unitId: _0x395cd7,
          tableId: _0xc6eb95.id,
          viewId: _0x2c29b4,
          target: _0x330bb7,
        }),
        _0xf96421((_0x1f783e) => _0x1f783e + 1));
    },
    _0x2be5 = async (_0x3aef4a, _0xc661a5) => {
      (_0x4acadc(),
        await _0x1ed860.executeCommand(C.RenameBaseViewCommand["id"], {
          unitId: _0x395cd7,
          tableId: _0xc6eb95.id,
          viewId: _0x3aef4a,
          name: _0xc661a5,
        }),
        _0xf96421((_0x35e80a) => _0x35e80a + 1));
    },
    _0x2bb131 = async (_0xc8605d) => {
      let _0x5cc229 = _0xc6eb95.views[_0xc8605d];
      if (!_0x5cc229) return;
      _0x4acadc();
      let _0xd3cffe = (0, _.duplicateView)(
          _0x5cc229,
          _0xc6eb95.id,
          _0x4a25cf.t("embed-ui.basesFloating.copySuffix"),
        ),
        _0x562241 = await _0x1ed860.executeCommand(
          C.CreateBaseViewCommand["id"],
          { unitId: _0x395cd7, tableId: _0xc6eb95.id, view: _0xd3cffe },
        );
      (_0xf96421((_0x68948) => _0x68948 + 1),
        _0x562241 && (await _0x32b4c3(_0xd3cffe.id)));
    },
    _0x2b3e7f = async () => {
      var _0x320142;
      let _0x1c2c90 = _0x52b845 ?? _0x50a2eb.id;
      if (_0x5e3f08.length <= 1) {
        _0x3779ed(null);
        return;
      }
      let _0x23d9d4 =
          (_0x320142 = _0x5e3f08.find(
            (_0xf25f5e) => _0xf25f5e.id !== _0x1c2c90,
          )) == null
            ? undefined
            : _0x320142.id,
        _0x446fa5 = await _0x1ed860.executeCommand(
          C.DeleteBaseViewCommand["id"],
          { unitId: _0x395cd7, tableId: _0xc6eb95.id, viewId: _0x1c2c90 },
        );
      (_0x3779ed(null),
        _0xf96421((_0x4717ad) => _0x4717ad + 1),
        _0x446fa5 && _0x23d9d4 && (await _0x32b4c3(_0x23d9d4)));
    },
    _0x1270c1 = async () => {
      await _0x1ed860.executeCommand(t.RemoveEmbedCommand["id"], {
        hostUnitId: _0x385821,
        embedId: _0x5c0e50,
      });
    },
    _0x35d700 = (_0x10f4d6) => {
      _0x10f4d6.stopPropagation();
    },
    _0x119f45 = (_0x512d24) => {
      (_0x512d24.preventDefault(), _0x512d24.stopPropagation());
    };
  return (0, m.jsxs)(m.Fragment, {
    children: [
      (0, m.jsxs)("div", {
        className: (0, l.clsx)(
          "univer-box-border univer-flex univer-items-center univer-justify-between univer-text-gray-900 dark:!univer-text-gray-0",
          {
            "univer-hidden": !_0x15f582,
            "univer-static\x20univer-m-0\x20univer-min-h-[84px]\x20univer-w-full\x20univer-min-w-0\x20univer-max-w-none\x20univer-translate-x-0\x20univer-flex-col\x20univer-items-stretch\x20univer-justify-start\x20univer-gap-0\x20univer-rounded-none\x20univer-border-0\x20univer-bg-transparent\x20univer-px-0\x20univer-py-0\x20univer-shadow-none":
              _0x2abc18,
            "univer-absolute\x20univer-inset-x-0\x20univer-z-[30]\x20univer-min-h-9\x20univer-min-w-0\x20univer-max-w-none\x20univer-translate-x-0\x20univer-gap-3\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-shadow-none":
              !_0x2abc18,
            "-univer-top-12": !_0x2abc18 && _0x24fc40 !== "docs-custom-block",
            "univer-w-full": !_0x2abc18,
            "!univer-left-0\x20!univer-right-auto\x20-univer-top-12\x20!univer-w-full":
              !_0x2abc18 && _0x24fc40 === "docs-custom-block",
          },
        ),
        "data-u-comp": "base-embed-floating-menu",
        "data-embed-floating-menu": "true",
        "data-embed-id": _0x5c0e50,
        "data-embed-float-stage": _0x15f582 ? "stage2" : "inactive",
        "data-base-render-version": _0x447c62,
        ...Uc(_0x5c0e50),
        onClick: _0x35d700,
        onDoubleClick: _0x35d700,
        onMouseDown: _0x119f45,
        onMouseUp: _0x35d700,
        onPointerDown: _0x119f45,
        onPointerUp: _0x35d700,
        children: [
          _0x2ef0dc
            ? (0, m.jsx)(jc, {
                embedId: _0x5c0e50,
                activeView: _0x50a2eb,
                views: _0x5e3f08,
                addViewOpen: _0x4d2844,
                onAddViewOpenChange: _0xd4cbc6,
                onActivateView: _0x32b4c3,
                onAddView: _0x20e345,
                onSetViewAsFirst: _0x44ba28,
                onMoveView: _0x29fd08,
                onRenameView: _0x2be5,
                onDuplicateView: _0x2bb131,
                onConfigureView: (_0x313072) =>
                  _0x517ddb("viewSettings", _0x313072),
                onDeleteView: _0x3779ed,
                readonly: !_0x197f4,
              })
            : (0, m.jsx)("div", {
                "data-u-comp": "base-embed-view-slot",
                className: Fc,
                children: (0, m.jsx)(Gc, {
                  activeView: _0x50a2eb,
                  views: _0x5e3f08,
                  onActivateView: _0x32b4c3,
                  embedId: _0x5c0e50,
                  portalRoot: _0x5dca93,
                  onAddView: (_0x42d040) => {
                    (_0x4acadc(), _0x38a31c(_0x42d040.getBoundingClientRect()));
                  },
                  onConfigureView: (_0x1de47f) =>
                    _0x517ddb("viewSettings", _0x1de47f),
                  onDeleteView: () => _0x3779ed(_0x50a2eb.id),
                }),
              }),
          (0, m.jsx)("div", {
            className: (0, l.clsx)(
              "univer-flex univer-flex-1 univer-items-center univer-justify-end univer-gap-1",
              { "univer-min-w-0": _0x2abc18, "univer-min-w-max": !_0x2abc18 },
            ),
            children: (0, m.jsxs)("div", {
              "data-u-comp": "base-embed-actions-surface",
              className: (0, l.clsx)(
                "univer-flex univer-min-w-0 univer-max-w-full univer-items-center univer-gap-1",
                {
                  "univer-w-full\x20univer-flex-1": _0x2abc18,
                  [Fc]: !_0x2abc18,
                },
              ),
              children: [
                (0, m.jsx)(_.BaseToolbar, {
                  disabled: !_0x197f4,
                  iconOnly: !_0x285864,
                  className: _0x222ba2,
                  renderTooltip: (_0x52688a, _0x54135b) =>
                    (0, m.jsx)(da, { title: _0x52688a, children: _0x54135b }),
                  state: {
                    ...Jc(_0x50a2eb, _0x1726d5),
                    searchOpen: _0x5763ad.search["open"],
                    searchQuery: _0x5763ad.search["query"],
                    searchActiveIndex: _0x5763ad.search["activeIndex"],
                  },
                  onAddRecord: (_0x46f9bc) =>
                    _0x46f9bc && _0x517ddb("addRecord", _0x46f9bc),
                  onCustomizeField: (_0x140737) =>
                    _0x517ddb("customizeField", _0x140737),
                  onCustomizeKanban: (_0x465230) =>
                    _0x517ddb("customizeKanban", _0x465230),
                  onCustomizeGallery: (_0x399473) =>
                    _0x517ddb("customizeGallery", _0x399473),
                  onCalendarEventSettings: (_0x5ca930) =>
                    _0x517ddb("calendarEventSettings", _0x5ca930),
                  onCalendarViewSettings: (_0x4b25d1) =>
                    _0x517ddb("calendarViewSettings", _0x4b25d1),
                  onViewSettings: (_0x5ec3f2) =>
                    _0x517ddb("viewSettings", _0x5ec3f2),
                  onFilter: (_0x3f2b69) => _0x517ddb("filter", _0x3f2b69),
                  onGroup: (_0x373315) => _0x517ddb("group", _0x373315),
                  onSort: (_0x4e2b94) => _0x517ddb("sort", _0x4e2b94),
                  onRowHeight: (_0x5b3a07) => _0x517ddb("rowHeight", _0x5b3a07),
                  onConditionalColoring: (_0x550912) =>
                    _0x517ddb("conditionalColoring", _0x550912),
                  onUndo: async () =>
                    _0x1ed860.executeCommand(a.UndoCommand["id"]),
                  onRedo: async () =>
                    _0x1ed860.executeCommand(a.RedoCommand["id"]),
                  onOpenSearch: () => _0x189750.openSearch(),
                  onSearchQueryChange: (_0x40ffdb) =>
                    _0x189750.setSearchQuery(_0x40ffdb),
                  onSearchPrevious: () =>
                    _0x189750.setSearchActiveIndex(
                      Math.max(0, (_0x5763ad.search["activeIndex"] ?? 0) - 1),
                    ),
                  onSearchNext: () =>
                    _0x189750.setSearchActiveIndex(
                      (_0x5763ad.search["activeIndex"] ?? -1) + 1,
                    ),
                  onCloseSearch: () => _0x189750.closeSearch(),
                  extraActions: (0, m.jsx)(c.ComponentContainer, {
                    components: _0x330d78,
                  }),
                }),
                _0x1c3e81
                  ? (0, m.jsxs)(m.Fragment, {
                      children: [
                        (0, m.jsx)(l.Separator, { orientation: "vertical" }),
                        (0, m.jsx)(fa, {
                          hostUnitId: _0x385821,
                          embedId: _0x5c0e50,
                          variant: "menu",
                        }),
                        (0, m.jsx)(Qc, {
                          title: _0x4a25cf.t("embed-ui.basesFloating.delete"),
                          className:
                            "univer-pointer-events-auto univer-text-red-500 hover:univer-text-red-600",
                          onClick: _0x1270c1,
                          children: (0, m.jsx)(u.DeleteIcon, {}),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          }),
        ],
      }),
      _0x54cf9c
        ? (0, w.createPortal)(
            (0, m.jsx)("div", {
              ref: _0xfb99cc,
              "data-u-comp": "base-embed-add-view-menu",
              "data-embed-id": _0x5c0e50,
              "data-embed-floating-menu-popup": "true",
              className: "univer-fixed univer-z-[900] univer-overflow-y-auto",
              style: el(_0x54cf9c),
              onPointerDown: (_0x3a5f81) => _0x3a5f81.stopPropagation(),
              children: (0, m.jsx)(_.AddViewMenu, {
                views: _.BASE_VIEW_MENU_ITEMS["map"]((_0x33373d) => ({
                  ..._0x33373d,
                  label: _0x4a25cf.t(_0x33373d.label),
                  description: _0x4a25cf.t(_0x33373d.description),
                })),
                onCreate: _0x20e345,
              }),
            }),
            _0x5dca93,
          )
        : null,
      (0, m.jsx)(_.BaseDeleteConfirmDialog, {
        open: !!_0x52b845,
        title: _0x4a25cf.t("embed-ui.basesFloating.confirmDelete.viewTitle"),
        description: _0x4a25cf.t(
          "embed-ui.basesFloating.confirmDelete.viewDescription",
        ),
        onCancel: () => _0x3779ed(null),
        onConfirm: _0x2b3e7f,
      }),
      _0x2abc18
        ? (0, m.jsx)(Dc, {
            embedId: _0x5c0e50,
            childUnitId: _0x395cd7,
            base: _0x5600c6,
            activeTable: _0xc6eb95,
          })
        : null,
    ],
  });
}
function Gc(_0x4e222f) {
  var _0x15fe3d;
  let {
      embedId: _0x54666,
      portalRoot: _0x55810e,
      activeView: _0x5d506c,
      views: _0x390add,
      onActivateView: _0x5767d6,
      onAddView: _0x26e6f1,
      onConfigureView: _0x5df964,
      onDeleteView: _0x31fb8f,
    } = _0x4e222f,
    _0x5a275b = (0, c.useDependency)(a.LocaleService),
    _0x146f0c = (0, d.useRef)(null),
    _0x5250c3 = (0, d.useRef)(null),
    [_0x3aa2d9, _0x3adcae] = (0, d.useState)(false),
    _0x2a451a = (_0x2c2c3c) => {
      (_0x2c2c3c.preventDefault(), _0x2c2c3c.stopPropagation());
    },
    _0x538724 =
      ((_0x15fe3d = _0x146f0c.current) == null
        ? undefined
        : _0x15fe3d.getBoundingClientRect()) ?? null;
  (0, d.useEffect)(() => {
    if (!_0x3aa2d9) return;
    let _0xdf3d2f = (_0x5e440c) => {
        var _0x2e67d2, _0x3b61de;
        let _0x18a3fe =
          _0x5e440c.target instanceof Node ? _0x5e440c.target : null;
        !_0x18a3fe ||
          ((_0x2e67d2 = _0x146f0c.current) != null &&
            _0x2e67d2.contains(_0x18a3fe)) ||
          ((_0x3b61de = _0x5250c3.current) != null &&
            _0x3b61de.contains(_0x18a3fe)) ||
          _0x3adcae(false);
      },
      _0x323ee3 = (_0x56917b) => {
        _0x56917b.key === "Escape" && _0x3adcae(false);
      };
    return (
      document.addEventListener("pointerdown", _0xdf3d2f, true),
      document.addEventListener("keydown", _0x323ee3, true),
      () => {
        (document.removeEventListener("pointerdown", _0xdf3d2f, true),
          document.removeEventListener("keydown", _0x323ee3, true));
      }
    );
  }, [_0x3aa2d9]);
  let _0xb86117 = (0, m.jsxs)(l.Button, {
    ref: _0x146f0c,
    type: "button",
    size: "small",
    variant: "ghost",
    className:
      "univer-h-8\x20univer-max-w-[220px]\x20univer-gap-2\x20univer-px-2\x20univer-text-sm\x20univer-font-medium",
    "aria-label": _0x5a275b.t("embed-ui.basesFloating.viewSettings.title"),
    onClick: (_0x10d94b) => {
      (_0x10d94b.stopPropagation(), _0x3adcae((_0xdc71) => !_0xdc71));
    },
    onMouseDown: _0x2a451a,
    onPointerDown: _0x2a451a,
    children: [
      (0, m.jsx)("span", {
        className:
          "univer-grid\x20univer-size-4\x20univer-shrink-0\x20univer-place-items-center",
        "aria-hidden": "true",
        children: (0, m.jsx)(_.BaseViewIcon, { type: _0x5d506c.type }),
      }),
      (0, m.jsx)("span", {
        className: "univer-min-w-0 univer-truncate",
        children: _0x5d506c.name,
      }),
      (0, m.jsx)(u.MoreDownIcon, {
        className: "univer-size-3 univer-shrink-0",
      }),
    ],
  });
  return (0, m.jsxs)(m.Fragment, {
    children: [
      (0, m.jsx)(da, { title: _0x5d506c.name, children: _0xb86117 }),
      _0x3aa2d9 && _0x538724
        ? (0, w.createPortal)(
            (0, m.jsxs)("div", {
              ref: _0x5250c3,
              "data-u-comp": "base-embed-view-panel",
              "data-embed-id": _0x54666,
              "data-embed-floating-menu-popup": "true",
              className:
                "univer-fixed\x20univer-z-[901]\x20univer-w-52\x20univer-overflow-y-auto\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-text-sm\x20univer-text-gray-900\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900\x20dark:!univer-text-gray-100",
              style: tl(_0x538724),
              onClick: (_0x144fec) => _0x144fec.stopPropagation(),
              onMouseDown: _0x2a451a,
              onPointerDown: _0x2a451a,
              children: [
                (0, m.jsx)("div", {
                  className: "univer-grid\x20univer-gap-0.5",
                  children: _0x390add.map((_0x50beee) =>
                    (0, m.jsx)(
                      l.Button,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "small",
                        className: "univer-h-8\x20univer-w-full\x20univer-px-2",
                        onClick: (_0x3cf846) => {
                          (_0x3cf846.stopPropagation(),
                            _0x5767d6(_0x50beee.id),
                            _0x3adcae(false));
                        },
                        children: (0, m.jsx)(Kc, {
                          icon: (0, m.jsx)(_.BaseViewIcon, {
                            type: _0x50beee.type,
                          }),
                          label: _0x50beee.name,
                          trailing:
                            _0x50beee.id === _0x5d506c.id
                              ? (0, m.jsx)("span", {
                                  className:
                                    "univer-size-1.5 univer-rounded-full univer-bg-primary-600",
                                })
                              : null,
                        }),
                      },
                      _0x50beee.id,
                    ),
                  ),
                }),
                (0, m.jsx)(l.Separator, {}),
                (0, m.jsx)(qc, {
                  icon: (0, m.jsx)(u.IncreaseIcon, {}),
                  label: _0x5a275b.t(
                    "embed-ui.basesFloating.viewSettings.addView",
                  ),
                  onClick: () => {
                    let _0x59fc6d = _0x146f0c.current;
                    (_0x59fc6d && _0x26e6f1(_0x59fc6d), _0x3adcae(false));
                  },
                }),
                (0, m.jsx)(qc, {
                  icon: (0, m.jsx)(u.PenIcon, {}),
                  label: _0x5a275b.t(
                    "embed-ui.basesFloating.viewSettings.configureView",
                  ),
                  onClick: () => {
                    let _0x428e17 = _0x146f0c.current;
                    (_0x428e17 && _0x5df964(_0x428e17), _0x3adcae(false));
                  },
                }),
                (0, m.jsx)(qc, {
                  danger: true,
                  disabled: _0x390add.length <= 1,
                  icon: (0, m.jsx)(u.DeleteIcon, {}),
                  label: _0x5a275b.t(
                    "embed-ui.basesFloating.viewSettings.deleteView",
                  ),
                  onClick: () => {
                    (_0x31fb8f(), _0x3adcae(false));
                  },
                }),
              ],
            }),
            _0x55810e,
          )
        : null,
    ],
  });
}
function Kc(_0x2ff25a) {
  let { icon: _0x35d133, label: _0x43fd6f, trailing: _0x3a29c2 } = _0x2ff25a;
  return (0, m.jsxs)("span", {
    className:
      "univer-grid univer-w-full univer-grid-cols-[24px_minmax(0,1fr)_18px] univer-items-center univer-gap-3",
    children: [
      (0, m.jsx)("span", {
        className:
          "univer-grid univer-size-5 univer-place-items-center univer-text-current",
        "aria-hidden": "true",
        children: _0x35d133,
      }),
      (0, m.jsx)("span", {
        className: "univer-min-w-0 univer-truncate univer-text-left",
        children: _0x43fd6f,
      }),
      (0, m.jsx)("span", {
        className: "univer-grid univer-size-[18px] univer-place-items-center",
        children: _0x3a29c2,
      }),
    ],
  });
}
function qc(_0x45e46d) {
  let {
    danger: _0x45aa65,
    disabled: _0x178712,
    icon: _0x3cc008,
    label: _0x42639a,
    onClick: _0x445e27,
  } = _0x45e46d;
  return (0, m.jsx)(l.Button, {
    type: "button",
    variant: "ghost",
    size: "small",
    disabled: _0x178712,
    className: (0, l.clsx)(
      "univer-h-8 univer-w-full univer-px-2",
      _0x45aa65 &&
        "univer-text-red-600 hover:univer-bg-red-50 hover:univer-text-red-700",
    ),
    onClick: (_0x1d558d) => {
      (_0x1d558d.stopPropagation(), _0x445e27());
    },
    children: (0, m.jsx)(Kc, { icon: _0x3cc008, label: _0x42639a }),
  });
}
function Jc(_0x141a01, _0x48dc83 = {}) {
  var _0x18e23b, _0x24cbf6, _0x29ff3b;
  let _0x3c4629 = _0x141a01.config ?? {},
    _0x3f8c4d = _0x3c4629.conditionalColoring,
    _0x5e41b6 = Array.isArray(_0x3f8c4d == null ? undefined : _0x3f8c4d.rules)
      ? _0x3f8c4d.rules["length"]
      : 0;
  return {
    viewType: _0x141a01.type,
    filterCount:
      ((_0x18e23b = _0x141a01.filter) == null ||
      (_0x18e23b = _0x18e23b.conditions) == null
        ? undefined
        : _0x18e23b.length) ?? 0,
    groupCount:
      ((_0x24cbf6 = _0x141a01.group) == null ? undefined : _0x24cbf6.length) ??
      0,
    sortCount:
      ((_0x29ff3b = _0x141a01.sort) == null ? undefined : _0x29ff3b.length) ??
      0,
    rowHeightActive: !!(
      _0x3c4629.rowHeight && _0x3c4629.rowHeight !== "medium"
    ),
    conditionalColoringActive: _0x5e41b6 > 0,
    conditionalColoringCount: _0x5e41b6,
    canUndo: (_0x48dc83.undos ?? 0) > 0,
    canRedo: (_0x48dc83.redos ?? 0) > 0,
  };
}
function Yc(_0x11d60d, _0x26601f) {
  if (_0x11d60d)
    return (
      (_0x26601f ? _0x11d60d.tables[_0x26601f] : undefined) ?? Mc(_0x11d60d)[0]
    );
}
function Xc(_0x34fd9d) {
  var _0x2fcdde;
  return (
    (_0x34fd9d == null || (_0x2fcdde = _0x34fd9d.viewOrder) == null
      ? undefined
      : _0x2fcdde
          .map((_0x38a49d) => _0x34fd9d.views[_0x38a49d])
          .filter((_0x12084c) => !!_0x12084c)) ?? []
  );
}
function Zc(_0x2376d7, _0x4942c6) {
  if (_0x2376d7)
    return (
      (_0x4942c6 ? _0x2376d7.views[_0x4942c6] : undefined) ?? Xc(_0x2376d7)[0]
    );
}
function Qc(_0x390be9) {
  let {
    children: _0x5ca19e,
    title: _0x487415,
    className: _0x1b043b,
    onClick: _0x306970,
  } = _0x390be9;
  return (0, m.jsx)(da, {
    title: _0x487415,
    children: (0, m.jsx)(l.Button, {
      type: "button",
      size: "small",
      variant: "ghost",
      className: (0, l.clsx)("univer-size-6 univer-p-0", _0x1b043b),
      "aria-label": _0x487415,
      onClick: (_0x11268f) => _0x306970(_0x11268f.currentTarget),
      children: _0x5ca19e,
    }),
  });
}
function $c(_0x373352) {
  return {
    x: _0x373352.x,
    y: _0x373352.y,
    width: _0x373352.width,
    height: _0x373352.height,
  };
}
function el(_0x525c4e) {
  let _0xc767b3 = (0, _.getBaseFloatingPosition)(_0x525c4e, {
    width: 328,
    height: 360,
    gap: 6,
    margin: 8,
  });
  return {
    top: _0xc767b3.top,
    left: _0xc767b3.left,
    maxHeight: _0xc767b3.maxHeight,
  };
}
function tl(_0x13d892) {
  let _0x462274 = (0, _.getBaseFloatingPosition)(
    {
      left: _0x13d892.right - 208,
      right: _0x13d892.right,
      top: _0x13d892.top,
      bottom: _0x13d892.bottom,
      width: 208,
      height: _0x13d892.height,
    },
    { width: 208, height: 320, gap: 8, margin: 8 },
  );
  return {
    top: _0x462274.top,
    left: _0x462274.left,
    maxHeight: _0x462274.maxHeight,
  };
}
function nl(_0x40dfe1) {
  bs(_0x40dfe1, "bases-ui.embed", rl);
}
function rl(_0x11e23e) {
  (_0x11e23e.has(_.BaseEmbedRuntimeRegistryService) ||
    _0x11e23e.add([_.BaseEmbedRuntimeRegistryService]),
    _0x11e23e.has(_.IBaseHostChromeOverrideService) ||
      _0x11e23e.add([
        _.IBaseHostChromeOverrideService,
        { useFactory: () => _0x11e23e.get(U) },
      ]),
    _0x11e23e.has(_.IBaseEmbedFloatingActiveService) ||
      _0x11e23e.add([
        _.IBaseEmbedFloatingActiveService,
        { useFactory: () => _0x11e23e.get(ce) },
      ]),
    _0x11e23e.has(_.IBaseEmbedFloatingGeometryService) ||
      _0x11e23e.add([
        _.IBaseEmbedFloatingGeometryService,
        { useFactory: () => _0x11e23e.get(Wr) },
      ]),
    _0x11e23e.has(_.IBaseEmbedRuntimeFocusCoordinator) ||
      _0x11e23e.add([
        _.IBaseEmbedRuntimeFocusCoordinator,
        { useFactory: () => _0x11e23e.get(K) },
      ]),
    _0x11e23e.has(_.IBaseEmbedRuntimeService) ||
      _0x11e23e.add([
        _.IBaseEmbedRuntimeService,
        {
          useFactory: () =>
            al({
              embedModelService: _0x11e23e.get(t.EmbedModelService),
              restoreService: _0x11e23e.get(Gr),
              mountService: _0x11e23e.get(Ht),
              activationService: _0x11e23e.get(Gt),
            }),
        },
      ]));
  let _0x500288 = _0x11e23e.get(t.EmbedHostAdapterRegistryService),
    _0x5f1428 = _0x11e23e.get(vt),
    _0x51c034 = _0x11e23e.get(gt),
    _0x5a9a60 = _0x11e23e.get(H),
    _0x346a05 = _0x11e23e.get(_t),
    _0xd913a2 = _0x11e23e.get(Ur),
    _0x599c77 = _0x11e23e.get(ii),
    _0x3ff462 = Vs(
      _0x11e23e.has(t.EmbedHostAnchorModelService)
        ? _0x11e23e.get(t.EmbedHostAnchorModelService)
        : undefined,
      _0x11e23e.has(a.IUniverInstanceService)
        ? _0x11e23e.get(a.IUniverInstanceService)
        : undefined,
      () =>
        _0x11e23e.has(_.IBaseUIStateService)
          ? _0x11e23e.get(_.IBaseUIStateService)
          : undefined,
    );
  _0x500288.get(_0x3ff462.hostType, _0x3ff462.entry) ||
    _0x500288.register(_0x3ff462);
  let _0x4bdaca = Hs();
  _0x5f1428.get(_0x4bdaca.hostType, _0x4bdaca.entry) ||
    _0x5f1428.register(_0x4bdaca);
  let _0x90f1bf = Qs(
    _0x11e23e.get(a.ICommandService),
    _0x11e23e.get(_.BaseEmbedRuntimeRegistryService),
  );
  _0x51c034.get(_0x90f1bf.childType) || _0x51c034.register(_0x90f1bf);
  let _0x2f5e7f = As();
  (_0x5a9a60.get(_0x2f5e7f.childType) || _0x5a9a60.register(_0x2f5e7f),
    Ic().forEach((_0x1bb703) => {
      _0x346a05.hasExact(
        _0x1bb703.hostType,
        _0x1bb703.entry,
        _0x1bb703.childType,
      ) || _0x346a05.register(_0x1bb703);
    }),
    _0xd913a2.registerProvider(
      wa(_0x11e23e, {
        childType: a.UniverInstanceType["UNIVER_BASE"],
        renderManagerService: p.IRenderManagerService,
      }),
    ),
    il(_0x11e23e),
    _0x599c77.get(a.UniverInstanceType["UNIVER_BASE"]) ||
      _0x599c77.register(Js(_0x11e23e)));
}
function il(_0x3008c5) {
  let _0x37f634 = _0x3008c5.get(ba);
  _0x37f634.get(a.UniverInstanceType["UNIVER_BASE"]) ||
    !_0x3008c5.has(_.IBaseUIStateService) ||
    !_0x3008c5.has(C.IBaseProjectionService) ||
    !_0x3008c5.has(_.IBaseViewWheelScrollService) ||
    _0x37f634.register(_0x3008c5.createInstance(js));
}
function al(_0x4378d8) {
  return {
    mountTableList: async (_0x428b96) => {
      let _0x2c008f = _0x4378d8.embedModelService["getDescriptor"](
        _0x428b96.baseUnitId,
        _0x428b96.embedId,
      );
      if (
        (!_0x2c008f &&
          _0x428b96.childUnitId &&
          (_0x2c008f = {
            embedId: _0x428b96.embedId,
            hostUnitId: _0x428b96.baseUnitId,
            hostType: a.UniverInstanceType["UNIVER_BASE"],
            entry: "bases-table-list-block",
            hostAnchorId: _0x428b96.hostAnchorId,
            childUnitId: _0x428b96.childUnitId,
            childType: _0x428b96.childType,
            source: {
              unitType: _0x428b96.childType,
              ref: {
                file: { kind: t.RESOURCE_REF_FILE_KIND["SELF"] },
                unit: {
                  selector: _0x428b96.childUnitId,
                  type: (0, t.toResourceRefUnitType)(_0x428b96.childType),
                },
              },
            },
            sourceMeta: {
              floating: false,
              tab: {
                enabled: true,
                container: "table-list",
                replaceHostMenu: true,
                hideHostFxBar: true,
                lockHostRibbon: true,
              },
            },
          }),
        !(!_0x2c008f || _0x2c008f.hostAnchorId !== _0x428b96.hostAnchorId) &&
          ((!_0x2c008f.childUnitId || _0x2c008f.childType == null) &&
            (_0x2c008f = await _0x4378d8.restoreService[
              "materializeDescriptor"
            ]({ descriptor: _0x2c008f })),
          !(!_0x2c008f.childUnitId || _0x2c008f.childType == null)))
      )
        return (
          _0x4378d8.mountService["mount"](_0x2c008f),
          _0x4378d8.activationService["activateTab"](_0x2c008f),
          (0, a.toDisposable)(() => {
            (_0x4378d8.activationService["clearTab"](_0x428b96.embedId),
              _0x4378d8.mountService["unmount"](_0x428b96.embedId));
          })
        );
    },
  };
}
let ol = class extends a.Disposable {
  constructor(
    _0x16a370,
    _0x52c039,
    _0xce5d12,
    _0x348887,
    _0x5140a7,
    _0x222ef3,
    _0x140974,
    _0x187aca,
  ) {
    if (
      (super(),
      (this._context = _0x16a370),
      (this._embedModelService = _0x52c039),
      (this._domLayerService = _0xce5d12),
      (this._boardElementService = _0x348887),
      (this._boardElementStateService = _0x5140a7),
      (this._boardUIStateService = _0x222ef3),
      (this._configService = _0x140974),
      (this._commandService = _0x187aca),
      V(this, "_items", new Map()),
      V(this, "_activeDragCleanup", undefined),
      V(this, "_routeWheelToHost", (_0x1a19a1) => {
        var _0x5ac9f7, _0x556c1d;
        let _0x287d6 =
          (_0x5ac9f7 = (_0x556c1d = this._context["engine"])
            .getCanvasElement) == null
            ? undefined
            : _0x5ac9f7.call(_0x556c1d);
        return _0x287d6
          ? (_0x287d6.dispatchEvent(
              new WheelEvent("wheel", {
                bubbles: true,
                cancelable: true,
                clientX: _0x1a19a1.clientX,
                clientY: _0x1a19a1.clientY,
                ctrlKey: _0x1a19a1.ctrlKey,
                deltaMode: _0x1a19a1.deltaMode,
                deltaX: _0x1a19a1.deltaX,
                deltaY: _0x1a19a1.deltaY,
                deltaZ: _0x1a19a1.deltaZ,
                metaKey: _0x1a19a1.metaKey,
                shiftKey: _0x1a19a1.shiftKey,
              }),
            ),
            true)
          : false;
      }),
      V(this, "_resolveHostWheelGestureRoot", (_0x748677) => {
        var _0x11124a, _0x224395;
        let _0x480c1a =
          (_0x11124a = (_0x224395 = this._context["engine"])
            .getCanvasElement) == null
            ? undefined
            : _0x11124a.call(_0x224395);
        if (!_0x480c1a) return null;
        let _0x1cced0 = _0x748677;
        for (; _0x1cced0 && !_0x1cced0.contains(_0x480c1a);)
          _0x1cced0 = _0x1cced0.parentElement;
        return _0x1cced0;
      }),
      Promise.resolve().then(() => this._sync()),
      typeof document < "u")
    ) {
      let _0x4e99f3 = (_0x913337) => this._handleDragStart(_0x913337);
      (document.addEventListener(zi, _0x4e99f3),
        this.disposeWithMe(
          (0, a.toDisposable)(() =>
            document.removeEventListener(zi, _0x4e99f3),
          ),
        ));
    }
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x1c2656) => {
        (_0x1c2656.id === t.CreateEmbedCommand["id"] ||
          _0x1c2656.id === t.RemoveEmbedCommand["id"] ||
          _0x1c2656.id === t.SetEmbedDescriptorMutation["id"] ||
          _0x1c2656.id === t.SoftDeleteEmbedDescriptorMutation["id"]) &&
          this._sync();
      }),
    ),
      [
        this._boardElementService["elementAdd$"],
        this._boardElementService["elementUpdate$"],
        this._boardElementService["elementRemove$"],
      ].forEach((_0x293768) => {
        let _0x4fc462 = _0x293768.subscribe((_0x4aaa99) => {
          _0x4aaa99.some(
            (_0xf809d7) => _0xf809d7.unitId === this._context["unitId"],
          ) && this._sync();
        });
        this.disposeWithMe((0, a.toDisposable)(() => _0x4fc462.unsubscribe()));
      }));
  }
  dispose() {
    var _0x277688;
    ((_0x277688 = this._activeDragCleanup) == null || _0x277688.call(this),
      (this._activeDragCleanup = undefined),
      this._items["forEach"]((_0x572053) => _0x572053.dispose()),
      this._items["clear"](),
      super.dispose());
  }
  _sync() {
    let _0x443346 = this._context["unitId"];
    if (
      this._embedModelService["getActiveDescriptorsByChildUnit"](_0x443346)
        .length > 0
    ) {
      this._clearItems();
      return;
    }
    let _0xf03951 =
        this._boardElementService["getElementDataForUnit"](_0x443346),
      _0x2abd41 = new Set();
    (this._embedModelService["getActiveDescriptors"](_0x443346)
      .filter(
        (_0x429790) =>
          _0x429790.entry === t.EmbedHostEntryEnum["BoardsFloatingObject"],
      )
      .forEach((_0x3fdf16) => {
        let _0x519d2c = Object.values(_0xf03951).find((_0x3f9966) => {
            var _0x385dad;
            return (0, x.isEmbedBoardsFloatingElement)(
              (_0x385dad = _0x3f9966.data[_0x3fdf16.hostAnchorId]) == null
                ? undefined
                : _0x385dad.element,
            );
          }),
          _0x71e2fe =
            _0x519d2c == null
              ? undefined
              : _0x519d2c.data[_0x3fdf16.hostAnchorId],
          _0x1aa5f2 = _0x71e2fe == null ? undefined : _0x71e2fe.element;
        if (
          !_0x519d2c ||
          !_0x71e2fe ||
          !(0, x.isEmbedBoardsFloatingElement)(_0x1aa5f2)
        )
          return;
        let _0x3a7bf6 = (0, x.getEmbedBoardsFloatingCustomData)(_0x1aa5f2),
          _0x35f465 = this._itemId(_0x3fdf16.hostAnchorId);
        _0x2abd41.add(_0x35f465);
        let _0x504a8f = {
            left: _0x1aa5f2.transform["left"] ?? 0,
            top: _0x1aa5f2.transform["top"] ?? 0,
            width: _0x1aa5f2.transform["width"] ?? 560,
            height: _0x1aa5f2.transform["height"] ?? 360,
          },
          _0x20f84f = () =>
            (0, d.createElement)(_a, {
              data: {
                version: 1,
                embedId: _0x3fdf16.embedId,
                hostUnitId: _0x443346,
                hostAnchorId: _0x3fdf16.hostAnchorId,
                childUnitId:
                  _0x3fdf16.childUnitId ??
                  (_0x3a7bf6 == null ? undefined : _0x3a7bf6.childUnitId),
                childType:
                  _0x3fdf16.childType ??
                  (_0x3a7bf6 == null ? undefined : _0x3a7bf6.childType),
              },
              enableStage1BodyDrag: true,
              hostFloatDomLayout$: this._boardUIStateService["state$"],
              onHostWheel: this._routeWheelToHost,
              resolveHostWheelGestureRoot: this._resolveHostWheelGestureRoot,
              onRuntimeStageEnter: (_0x4c6875) =>
                this._setAnchorTransformerVisible(
                  _0x4c6875 !== "stage2",
                  _0x71e2fe.subUnitId,
                  _0x3fdf16.hostAnchorId,
                ),
            });
        this._items["has"](_0x35f465)
          ? this._domLayerService["updateItem"](_0x35f465, {
              rect: _0x504a8f,
              content: _0x20f84f,
            })
          : this._items["set"](
              _0x35f465,
              this._domLayerService["registerItem"]({
                id: _0x35f465,
                unitId: _0x443346,
                subUnitId: _0x71e2fe.subUnitId,
                elementId: _0x3fdf16.hostAnchorId,
                rect: _0x504a8f,
                content: _0x20f84f,
                interactive: true,
                showResizeGuide: true,
              }),
            );
      }),
      this._items["forEach"]((_0x2399df, _0x309e89) => {
        _0x2abd41.has(_0x309e89) ||
          (_0x2399df.dispose(), this._items["delete"](_0x309e89));
      }));
  }
  _itemId(_0x255a18) {
    return "board-embed:" + this._context["unitId"] + ":" + _0x255a18;
  }
  _selectAnchor(_0x102ddb, _0x34addd) {
    this._boardElementStateService["selectElements"](
      { unitId: this._context["unitId"], subUnitId: _0x102ddb },
      [_0x34addd],
      _0x34addd,
    );
  }
  _setAnchorTransformerVisible(_0x82eb32, _0x5764c8, _0x2e2cad) {
    if (_0x82eb32) {
      this._selectAnchor(_0x5764c8, _0x2e2cad);
      return;
    }
    this._boardElementStateService["clearSelection"]();
  }
  _handleDragStart(_0x42d29d) {
    var _0x51dfcc, _0x5e786e, _0x40cf60, _0x5961e0;
    let _0x12afee = _0x42d29d.detail;
    if (!_0x12afee || _0x12afee.hostUnitId !== this._context["unitId"]) return;
    let _0x5173a8 = this._boardElementService["getElementDataForUnit"](
        this._context["unitId"],
      ),
      _0x712b68 = Object.values(_0x5173a8).find(
        (_0x489c0d) => _0x489c0d.data[_0x12afee.hostAnchorId],
      ),
      _0x45c475 =
        _0x712b68 == null ? undefined : _0x712b68.data[_0x12afee.hostAnchorId];
    if (
      !_0x712b68 ||
      !_0x45c475 ||
      !(0, x.isEmbedBoardsFloatingElement)(_0x45c475.element) ||
      ((_0x51dfcc = (0, x.getEmbedBoardsFloatingCustomData)(
        _0x45c475.element,
      )) == null
        ? undefined
        : _0x51dfcc.embedId) !== _0x12afee.embedId
    )
      return;
    let _0x4a0f2d =
      (_0x5e786e = (_0x40cf60 = this._context["engine"]).getCanvasElement) ==
      null
        ? undefined
        : _0x5e786e.call(_0x40cf60);
    if (!_0x4a0f2d) return;
    ((_0x5961e0 = this._activeDragCleanup) == null || _0x5961e0.call(this),
      this._selectAnchor(_0x45c475.subUnitId, _0x12afee.hostAnchorId),
      this._setAnchorTransformerVisible(
        false,
        _0x45c475.subUnitId,
        _0x12afee.hostAnchorId,
      ));
    let _0x791e24 = _0x45c475.element,
      _0x1fb64b = _0x791e24.transform["left"] ?? 0,
      _0x589f8e = _0x791e24.transform["top"] ?? 0,
      _0x39f8ce = this._boardUIStateService["getState"](),
      _0x43e6d6 = (0, T.resolveBoardInteractionConfig)(
        this._configService["getConfig"](T.BOARDS_UI_PLUGIN_CONFIG_KEY) ??
          undefined,
      ),
      _0x37f9ed = (0, T.getBoardPointFromClient)(
        _0x4a0f2d,
        _0x12afee.clientX,
        _0x12afee.clientY,
        {
          zoomRatio: _0x39f8ce.zoomRatio,
          panOffset: _0x39f8ce.viewportPanOffset,
        },
        _0x43e6d6,
      ),
      _0x39df91 = document.defaultView ?? window,
      _0x2875fe = (_0x53eb65, _0x4d38f6) => {
        let _0x30db60 = this._boardUIStateService["getState"](),
          _0x507bab = (0, T.getBoardPointFromClient)(
            _0x4a0f2d,
            _0x53eb65,
            _0x4d38f6,
            {
              zoomRatio: _0x30db60.zoomRatio,
              panOffset: _0x30db60.viewportPanOffset,
            },
            _0x43e6d6,
          );
        return {
          left: _0x1fb64b + _0x507bab.x - _0x37f9ed.x,
          top: _0x589f8e + _0x507bab.y - _0x37f9ed.y,
        };
      },
      _0x397a09 = (_0x3a39d5, _0x2606ed) => {
        let _0x2a903d = _0x2875fe(_0x3a39d5, _0x2606ed);
        return (
          this._domLayerService["updateItem"](
            this._itemId(_0x12afee.hostAnchorId),
            {
              rect: {
                ..._0x2a903d,
                width: _0x791e24.transform["width"] ?? 560,
                height: _0x791e24.transform["height"] ?? 360,
              },
            },
          ),
          _0x2a903d
        );
      },
      _0x185e23 = (_0x2717c2) =>
        _0x12afee.pointerId == null ||
        _0x2717c2.pointerId === _0x12afee.pointerId,
      _0x1345b5 = () => {},
      _0x3b1812 = (_0x279276) => {
        _0x185e23(_0x279276) &&
          (_0x279276.preventDefault(),
          _0x397a09(_0x279276.clientX, _0x279276.clientY));
      },
      _0x3ccd82 = async (_0x294b22) => {
        if (!_0x185e23(_0x294b22)) return;
        (_0x1345b5(), _0x294b22.preventDefault());
        let _0x363a0a = _0x397a09(_0x294b22.clientX, _0x294b22.clientY);
        await this._commandService["executeCommand"](
          x.UpdateBoardElementMutation["id"],
          {
            unitId: this._context["unitId"],
            subUnitId: _0x45c475.subUnitId,
            elementId: _0x12afee.hostAnchorId,
            element: _0x791e24,
            transform: { ..._0x45c475.transform, ..._0x363a0a },
          },
        ).finally(() => {
          (this._sync(),
            this._setAnchorTransformerVisible(
              true,
              _0x45c475.subUnitId,
              _0x12afee.hostAnchorId,
            ));
        });
      },
      _0x2f967f = (_0x5d96b3) => {
        _0x185e23(_0x5d96b3) &&
          (_0x1345b5(),
          this._sync(),
          this._setAnchorTransformerVisible(
            true,
            _0x45c475.subUnitId,
            _0x12afee.hostAnchorId,
          ));
      };
    ((_0x1345b5 = () => {
      (_0x39df91.removeEventListener("pointermove", _0x3b1812),
        _0x39df91.removeEventListener("pointerup", _0x3ccd82),
        _0x39df91.removeEventListener("pointercancel", _0x2f967f),
        this._activeDragCleanup === _0x1345b5 &&
          (this._activeDragCleanup = undefined));
    }),
      _0x39df91.addEventListener("pointermove", _0x3b1812),
      _0x39df91.addEventListener("pointerup", _0x3ccd82),
      _0x39df91.addEventListener("pointercancel", _0x2f967f),
      (this._activeDragCleanup = _0x1345b5));
  }
  _clearItems() {
    (this._items["forEach"]((_0x53728e) => _0x53728e.dispose()),
      this._items["clear"]());
  }
};
ol = Z(
  [
    X(1, (0, a.Inject)(t.EmbedModelService)),
    X(2, (0, a.Inject)(T.BoardDomLayerService)),
    X(3, (0, a.Inject)(x.IBoardElementService)),
    X(4, (0, a.Inject)(T.IBoardElementStateService)),
    X(5, (0, a.Inject)(T.IBoardUIStateService)),
    X(6, a.IConfigService),
    X(7, a.ICommandService),
  ],
  ol,
);
function sl() {
  return {
    ...Es({
      childType: a.UniverInstanceType["UNIVER_BOARD"],
      productName: "Boards",
      hostChromeMode: "none",
    }),
    presentationPolicy: {
      getChromeCss: () =>
        '\n [data-embed-presentation-runtime="true"] [data-board-left-toolbar="true"],\n [data-embed-presentation-runtime="true"] [data-board-top-right-menu="true"],\n [data-embed-presentation-runtime="true"] [data-board-zoom-controls="true"],\n [data-embed-presentation-runtime="true"] [data-board-help-control="true"],\n [data-embed-presentation-runtime="true"] [data-board-object-list-panel="true"],\n [data-embed-presentation-runtime="true"] [data-board-shape-panel="true"],\n [data-embed-presentation-runtime="true"] [data-board-floating-panel-layer="true"],\n [data-embed-presentation-runtime="true"] [data-u-comp="shape-text-editor-position-wrapper"],\n [data-embed-presentation-runtime="true"] [data-u-comp="shape-floating-toolbar"],\n [data-embed-presentation-runtime="true"] [data-u-comp="editor-ui-floating-container"] {\n display: none !important;\n }\n ',
    },
  };
}
function cl() {
  return {
    hostType: a.UniverInstanceType["UNIVER_BOARD"],
    entry: t.EmbedHostEntryEnum["BoardsFloatingObject"],
    layout: "scroll-contained",
    supportedLayouts: ["scroll-contained", "doc-width-scale", "aspect-fit"],
    menuBehavior: "floating",
  };
}
function ll() {
  return {
    childType: a.UniverInstanceType["UNIVER_BOARD"],
    handleWheel: (_0x48db6e) => {
      let _0x3cb702 = _0x48db6e.runtimeScope["injector"];
      if (!(_0x3cb702 != null && _0x3cb702.has(T.IBoardUIStateService)))
        return false;
      let _0x2afbf6 = (
          _0x48db6e.runtimeScope["roots"].content["querySelector"](
            '[data-board-viewport-host="true"]',
          ) ?? _0x48db6e.runtimeScope["roots"].content
        ).getBoundingClientRect(),
        _0x1f6d41 = (0, T.resolveBoardInteractionConfig)(
          _0x3cb702.has(a.IConfigService)
            ? _0x3cb702
                .get(a.IConfigService)
                .getConfig(T.BOARDS_UI_PLUGIN_CONFIG_KEY)
            : undefined,
        ),
        _0x56488d = (0, T.resolveBoardWheelViewportAction)({
          event: _0x48db6e.event,
          interactionConfig: _0x1f6d41,
          viewportRect: _0x2afbf6,
        });
      if (_0x56488d.type === "none") return false;
      let _0x2389db = _0x3cb702.get(T.IBoardUIStateService);
      return (
        _0x56488d.type === "pan"
          ? _0x2389db.shiftViewportPanOffset(_0x56488d.delta)
          : _0x2389db.setZoomRatioAtViewportPoint(
              _0x2389db.getState().zoomRatio * _0x56488d.zoomFactor,
              _0x56488d.viewportPoint,
            ),
        true
      );
    },
  };
}
function ul(_0x56b0f9) {
  return {
    childType: a.UniverInstanceType["UNIVER_BOARD"],
    supportedLayouts: ["content-bounds-fit", "tab-peer", "scroll-contained"],
    scopedDependencies:
      T.UniverBoardsUIPlugin["getRuntimeScopedDependencies"](_0x56b0f9),
    beforeDeactivate: dl,
    mount: fl,
  };
}
function dl(_0x5ec537) {
  let _0x34f479 = _0x5ec537.runtimeScope["injector"];
  if (
    (_0x34f479.has(S.IEditorUIService) &&
      _0x34f479.get(S.IEditorUIService).close(),
    _0x34f479.has(T.BoardTextEditingService) &&
      _0x34f479.get(T.BoardTextEditingService).cancelEditing(),
    _0x34f479.has(T.IBoardElementStateService))
  ) {
    let _0x340597 = _0x34f479.get(T.IBoardElementStateService);
    (_0x340597.clearActiveEditing(), _0x340597.clearSelection());
  }
}
function fl(_0x27ddad) {
  var _0x2527aa, _0x50248c;
  let _0xc49ce4 = _0x27ddad.injector["get"](a.IUniverInstanceService).getUnit(
      _0x27ddad.childUnitId,
      a.UniverInstanceType["UNIVER_BOARD"],
    ),
    _0x323814 = _0x27ddad.runtimeScope["injector"];
  if (!_0xc49ce4 || !_0x323814) return;
  let _0x182a7e = _0x27ddad.injector["get"](p.IRenderManagerService),
    _0x33771b = Et(_0x182a7e, _0x27ddad.childUnitId, _0x323814);
  if (!_0x33771b) return;
  let _0x45bf6a = nn(_0x27ddad.runtimeScope["roots"].content);
  _0x45bf6a.render(
    (0, m.jsxs)(Kt, {
      injector: _0x323814,
      mountContainer: _0x27ddad.runtimeScope["roots"].popup,
      embedId: _0x27ddad.embedId,
      children: [
        (0, m.jsx)(T.BoardWorkbench, {
          embedded:
            _0x27ddad.renderScope["mode"] === "float" &&
            !_0x27ddad.renderScope["fullscreen"],
          fitOnMount: false,
          showZoomControls:
            _0x27ddad.renderScope["mode"] === "tab" ||
            _0x27ddad.renderScope["fullscreen"] === true,
        }),
        (0, m.jsx)(T.BoardShapeTextEditorContainer, {
          positionRoot: _0x27ddad.runtimeScope["roots"].content,
        }),
        (0, m.jsx)(S.EditorUIFloatingContainer, {}),
      ],
    }),
  );
  let _0x4ee2ba =
    _0x27ddad.renderScope["mode"] !== "float" ||
    _0x27ddad.renderScope["fullscreen"]
      ? _0x27ddad.injector["get"](J).activatePortalScope(
          _0x27ddad.embedId,
          _0x27ddad.runtimeScope["roots"].content["ownerDocument"],
          { includeAppShellEditorPortal: false },
        )
      : undefined;
  Ot(_0x33771b, { activate: true });
  let _0x3d593c =
    (_0x2527aa = (_0x50248c = globalThis).requestAnimationFrame) == null
      ? undefined
      : _0x2527aa.call(_0x50248c, () => {
          let _0x3b585f = _0x27ddad.runtimeScope["roots"].content[
              "querySelector"
            ]('[data-board-viewport-host="true"]'),
            _0x13c389 =
              (_0x3b585f == null
                ? undefined
                : _0x3b585f.getBoundingClientRect()) ??
              _0x27ddad.runtimeScope["roots"].content[
                "getBoundingClientRect"
              ](),
            _0x41c8f8 = (0, T.resolveBoardInteractionConfig)(
              _0x323814
                .get(a.IConfigService)
                .getConfig(T.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? undefined,
            );
          _0x323814
            .get(T.BoardViewportService)
            .fitContent(_0xc49ce4, {
              viewportSize: {
                width: _0x13c389.width,
                height: _0x13c389.height,
              },
              padding: Math.max(
                16,
                Math.min(
                  64,
                  Math.min(_0x13c389.width, _0x13c389.height) * 0.08,
                ),
              ),
              zoom: _0x41c8f8,
            });
        });
  return (0, a.toDisposable)(() => {
    if (_0x3d593c != null) {
      var _0x2e6114, _0x3b5df4;
      (_0x2e6114 = (_0x3b5df4 = globalThis).cancelAnimationFrame) == null ||
        _0x2e6114.call(_0x3b5df4, _0x3d593c);
    }
    try {
      var _0x4d7166, _0x21eac5;
      (_0x4d7166 = (_0x21eac5 = _0x33771b.engine).unmount) == null ||
        _0x4d7166.call(_0x21eac5);
    } catch {}
    (_0x182a7e.removeRender(_0x27ddad.childUnitId),
      rn(_0x45bf6a),
      _0x4ee2ba == null || _0x4ee2ba.dispose(),
      _0x323814.dispose());
  });
}
function pl() {
  return Tc({ childType: a.UniverInstanceType["UNIVER_BOARD"], mount: ml });
}
function ml(_0x109e45) {
  if (_0x109e45.renderScope["fullscreen"]) return;
  let { menu: _0x4d5592, portalContainer: _0x51ed3a } = Sc(_0x109e45),
    _0x4d2a1c = nn(_0x4d5592);
  return (
    _0x4d2a1c.render(
      (0, d.createElement)(
        Kt,
        {
          injector: _0x109e45.runtimeScope["injector"],
          mountContainer: _0x51ed3a,
          embedId: _0x109e45.embedId,
        },
        (0, d.createElement)(hl, {
          hostUnitId: _0x109e45.hostUnitId,
          embedId: _0x109e45.embedId,
          childUnitId: _0x109e45.childUnitId,
          viewportRoot: _0x109e45.runtimeScope["roots"].content,
          fullscreen: !!_0x109e45.renderScope["fullscreen"],
        }),
      ),
    ),
    (0, a.toDisposable)(() => {
      (rn(_0x4d2a1c), globalThis.setTimeout(() => _0x4d5592.remove(), 0));
    })
  );
}
function hl(_0x371da9) {
  let {
      hostUnitId: _0xbcfb39,
      embedId: _0x3658fe,
      childUnitId: _0x4c8425,
      viewportRoot: _0x4af043,
      fullscreen: _0x521da6,
    } = _0x371da9,
    _0x35b814 = (0, c.useDependency)(a.ICommandService),
    _0x23e64d = (0, c.useDependency)(a.IConfigService),
    _0x6ef35a = (0, c.useDependency)(a.IUniverInstanceService),
    _0x1f27d6 = (0, c.useDependency)(a.LocaleService),
    _0x1e34b0 = (0, c.useDependency)(ce),
    _0x26cba1 = (0, c.useDependency)(T.IBoardUIStateService),
    _0x53fc68 = (0, c.useDependency)(T.BoardViewportService),
    _0x202532 = (0, c.useObservable)(
      () => _0x26cba1.state$,
      _0x26cba1.getState(),
      false,
      [_0x26cba1],
    ),
    _0x45bc30 = _l({
      embedId: _0x3658fe,
      active: (0, c.useObservable)(
        () => _0x1e34b0.active$,
        _0x1e34b0.getActive(),
        false,
        [_0x1e34b0],
      ),
      fullscreen: _0x521da6,
    }),
    _0x559299 = _0x6ef35a.getUnit(
      _0x4c8425,
      a.UniverInstanceType["UNIVER_BOARD"],
    ),
    _0x401279 = (0, T.resolveBoardInteractionConfig)(
      _0x23e64d.getConfig(T.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? undefined,
    ),
    _0x44cb10 = () => _0x4af043.getBoundingClientRect(),
    _0x327900 = () => ({ x: _0x44cb10().width / 2, y: _0x44cb10().height / 2 }),
    _0x38ed06 = (_0x5249d0) =>
      _0x26cba1.setZoomRatioAtViewportPoint(_0x5249d0, _0x327900());
  return (0, m.jsxs)("div", {
    className: (0, l.clsx)(
      "univer-board-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0",
      {
        "univer-hidden": _0x45bc30 === "inactive",
        "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0":
          _0x521da6,
        "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2":
          !_0x521da6,
        "-univer-top-[44px]": !_0x521da6,
      },
    ),
    "data-embed-floating-menu": "true",
    "data-embed-id": _0x3658fe,
    "data-embed-float-stage": _0x45bc30,
    onPointerDown: (_0x2e83e0) => _0x2e83e0.stopPropagation(),
    children: [
      (0, m.jsx)(gl, {
        title: _0x1f27d6.t("embed-ui.boardsFloating.fitContent"),
        onClick: () => {
          let _0x25785a = _0x44cb10();
          _0x53fc68.fitContent(_0x559299 ?? null, {
            viewportSize: { width: _0x25785a.width, height: _0x25785a.height },
            padding: Math.max(
              16,
              Math.min(64, Math.min(_0x25785a.width, _0x25785a.height) * 0.08),
            ),
            zoom: _0x401279,
          });
        },
        children: (0, m.jsx)(u.OneToOneIcon, {}),
      }),
      (0, m.jsx)(gl, {
        title: _0x1f27d6.t("embed-ui.boardsFloating.zoomOut"),
        onClick: () => _0x38ed06(_0x202532.zoomRatio - _0x401279.zoomStep),
        children: (0, m.jsx)(u.ZoomOutIcon, {}),
      }),
      (0, m.jsxs)(gl, {
        title: _0x1f27d6.t("embed-ui.boardsFloating.resetZoom"),
        noIcon: true,
        onClick: () => _0x38ed06(1),
        children: [Math.round(_0x202532.zoomRatio * 100), "%"],
      }),
      (0, m.jsx)(gl, {
        title: _0x1f27d6.t("embed-ui.boardsFloating.zoomIn"),
        onClick: () => _0x38ed06(_0x202532.zoomRatio + _0x401279.zoomStep),
        children: (0, m.jsx)(u.ZoomInIcon, {}),
      }),
      (0, m.jsx)(fa, {
        hostUnitId: _0xbcfb39,
        embedId: _0x3658fe,
        variant: "menu",
      }),
      (0, m.jsx)(gl, {
        title: _0x1f27d6.t("embed-ui.boardsFloating.delete"),
        className: "univer-text-red-500",
        onClick: async () =>
          _0x35b814.executeCommand(t.RemoveEmbedCommand["id"], {
            hostUnitId: _0xbcfb39,
            embedId: _0x3658fe,
          }),
        children: (0, m.jsx)(u.DeleteIcon, {}),
      }),
    ],
  });
}
function gl(_0x3944e9) {
  let {
    children: _0x574797,
    className: _0x4a2706,
    noIcon: _0x624a65,
    onClick: _0x56b0f6,
    title: _0x244c55,
  } = _0x3944e9;
  return (0, m.jsx)(da, {
    title: _0x244c55,
    children: (0, m.jsx)(c.ToolbarButton, {
      "aria-label": _0x244c55,
      className: _0x4a2706,
      noIcon: _0x624a65,
      onClick: _0x56b0f6,
      children: _0x574797,
    }),
  });
}
function _l(_0x4351e0) {
  var _0x530db6;
  return _0x4351e0.fullscreen
    ? "stage2"
    : ((_0x530db6 = _0x4351e0.active) == null
          ? undefined
          : _0x530db6.embedId) === _0x4351e0.embedId
      ? (_0x4351e0.active["stage"] ?? "stage1")
      : "inactive";
}
function vl(_0x24562b) {
  bs(_0x24562b, "boards-ui.embed", yl);
}
function yl(_0xf3d219) {
  _0xf3d219.has(T.IBoardEmbedRuntimeFocusCoordinator) ||
    _0xf3d219.add([
      T.IBoardEmbedRuntimeFocusCoordinator,
      { useFactory: () => _0xf3d219.get(K) },
    ]);
  let _0x535ba8 = _0xf3d219.get(vt),
    _0x33466f = _0xf3d219.get(gt),
    _0x460d32 = _0xf3d219.get(H),
    _0x1456da = _0xf3d219.get(_t),
    _0x36d98d = _0xf3d219.get(Ur),
    _0x54eab6 = _0xf3d219.get(ii),
    _0xbb5a8f = cl();
  _0x535ba8.get(_0xbb5a8f.hostType, _0xbb5a8f.entry) ||
    _0x535ba8.register(_0xbb5a8f);
  let _0x5c9b7a = ul(_0xf3d219);
  _0x33466f.get(_0x5c9b7a.childType) || _0x33466f.register(_0x5c9b7a);
  let _0x3c5a10 = sl();
  (_0x460d32.get(_0x3c5a10.childType) || _0x460d32.register(_0x3c5a10),
    pl().forEach((_0x23638e) => {
      _0x1456da.hasExact(
        _0x23638e.hostType,
        _0x23638e.entry,
        _0x23638e.childType,
      ) || _0x1456da.register(_0x23638e);
    }),
    _0x36d98d.registerProvider(
      wa(_0xf3d219, {
        childType: a.UniverInstanceType["UNIVER_BOARD"],
        renderManagerService: p.IRenderManagerService,
      }),
    ),
    _0x54eab6.get(a.UniverInstanceType["UNIVER_BOARD"]) ||
      _0x54eab6.register(ll()),
    _0xf3d219
      .get(p.IRenderManagerService)
      .registerRenderModule(a.UniverInstanceType["UNIVER_BOARD"], ol));
}
const bl = {
  mode: "fit-width",
  target: "container",
  paddingX: 0,
  minScale: 0,
  align: "start",
};
function xl() {
  return ws({
    childType: a.UniverInstanceType["UNIVER_DOC"],
    productName: "Docs",
  });
}
function Sl() {
  return {
    childType: a.UniverInstanceType["UNIVER_DOC"],
    supportedLayouts: ["tab-peer", "doc-width-scale", "scroll-contained"],
    scopedDependencies: [[o.DocCanvasPopManagerService]],
    beforeDeactivate: (_0x27b338) => {
      wl(_0x27b338);
    },
    mount: (_0x5162c4) => {
      let _0x1edd38 =
          _0x5162c4.renderScope["mode"] === "float" &&
          !_0x5162c4.renderScope["fullscreen"]
            ? bt(_0x5162c4, p.IRenderManagerService, undefined, {
                scopedInjector: Tl(_0x5162c4.runtimeScope["injector"]),
              })
            : bt(_0x5162c4, p.IRenderManagerService),
        _0x3b5065 = Cl(_0x5162c4);
      return (0, a.toDisposable)(() => {
        (_0x3b5065.dispose(), _0x1edd38 == null || _0x1edd38.dispose());
      });
    },
  };
}
function Cl(_0x1a26db) {
  let _0x3881ed =
    _0x1a26db.runtimeScope["roots"].canvas ??
    _0x1a26db.renderScope["canvasRoot"];
  if (!_0x3881ed) return (0, a.toDisposable)(() => {});
  let _0x1ba77a = _0x1a26db.injector["get"](p.IRenderManagerService),
    _0x30be82 = (_0x3f7fdd) => {
      var _0x1c69dc;
      if (
        !(_0x3f7fdd.target instanceof HTMLCanvasElement) ||
        !_0x3881ed.contains(_0x3f7fdd.target)
      )
        return;
      let _0x113475 =
        (_0x1c69dc = _0x1ba77a.getRenderUnitById(_0x1a26db.childUnitId)) == null
          ? undefined
          : _0x1c69dc.with(o.DocSelectionRenderService);
      _0x113475 && !_0x113475.hasFocus() && _0x113475.focus();
    };
  return (
    _0x3881ed.addEventListener("pointerdown", _0x30be82, true),
    (0, a.toDisposable)(() =>
      _0x3881ed.removeEventListener("pointerdown", _0x30be82, true),
    )
  );
}
function wl(_0x1f71fa) {
  var _0x7cee2, _0x1d143c;
  let _0x24f08e = _0x1f71fa.injector["get"](
      p.IRenderManagerService,
    ).getRenderUnitById(_0x1f71fa.childUnitId),
    _0x2a94d9 =
      _0x24f08e == null
        ? undefined
        : _0x24f08e.with(o.DocSelectionRenderService);
  (_0x24f08e == null ||
    (_0x7cee2 = _0x24f08e.scene["getTransformer"]()) == null ||
    _0x7cee2.clearSelectedObjects(),
    _0x24f08e == null ||
      (_0x1d143c = _0x24f08e.with(o.DocFloatMenuService)) == null ||
      _0x1d143c.hideFloatMenu(),
    _0x2a94d9 == null || _0x2a94d9.removeAllRanges(),
    _0x2a94d9 == null || _0x2a94d9.blur());
}
function Tl(_0x270d53) {
  return ve(
    _0x270d53,
    new Map([[o.DOCS_UI_PLUGIN_CONFIG_KEY, (_0x160a62) => El(_0x160a62)]]),
  );
}
function El(_0x14df94) {
  return {
    ..._0x14df94,
    fitToWidth: {
      ...(_0x14df94 == null ? undefined : _0x14df94.fitToWidth),
      ...bl,
    },
  };
}
function Dl(_0x31a198, _0x43f402 = 120) {
  let _0x41ce5b,
    _0xa982f7,
    _0x49f490 = () => {
      (_0xa982f7 != null &&
        (window.clearTimeout(_0xa982f7), (_0xa982f7 = undefined)),
        _0x41ce5b != null &&
          (window.cancelAnimationFrame(_0x41ce5b), (_0x41ce5b = undefined)));
    };
  return {
    dispose: _0x49f490,
    schedule: () => {
      (_0x49f490(),
        (_0xa982f7 = window.setTimeout(() => {
          ((_0xa982f7 = undefined),
            (_0x41ce5b = window.requestAnimationFrame(() => {
              ((_0x41ce5b = undefined), _0x31a198());
            })));
        }, _0x43f402)));
    },
  };
}
let Ol = class extends a.Disposable {
  constructor(
    _0x3aed40,
    _0x5a1f1a,
    _0x1be5b3,
    _0x47cd04,
    _0x53f6ac,
    _0xdf51a9,
    _0x202273,
    _0x5e3659,
  ) {
    var _0x418f5b, _0xedb3e5, _0x19e8c8;
    (super(),
      (this._context = _0x3aed40),
      (this._univerInstanceService = _0x5a1f1a),
      (this._commandService = _0x1be5b3),
      (this._contentSizeRegistry = _0x47cd04),
      (this._embedMountService = _0x53f6ac),
      (this._embedModelService = _0xdf51a9),
      (this._renderManagerService = _0x202273),
      (this._docViewScaleService = _0x5e3659),
      V(this, "_resolvedChildUnits", new Map()),
      V(this, "_pendingChildUnits", new Map()));
    let _0x3ecc8a = (0, o.createDocsCustomBlockSizeRefreshScheduler)(() => {
        this._rerenderHostDoc() || this._refreshHostDocZoom();
      }),
      _0x2ca422 = Dl(() => {
        this._rerenderHostDoc();
      }),
      _0xe91c0c = (0, o.createDocsCustomBlockSizeRefreshScheduler)(() => {
        this._refreshHostDocCustomBlockPresentation() ||
          this._rerenderHostDoc();
      }),
      _0x1998ea = (0, o.createDocsCustomBlockSizeRefreshScheduler)(() => {
        this._rerenderHostDoc();
      }),
      _0xb2eaf7 =
        (_0x418f5b = this._getHostUnit()) == null
          ? undefined
          : _0x418f5b.zoomRatio;
    (this.disposeWithMe(_0x3ecc8a),
      this.disposeWithMe(_0x2ca422),
      this.disposeWithMe(_0x1998ea),
      this.disposeWithMe(_0xe91c0c));
    let _0x426ca5 = kl(
      (_0xedb3e5 = this._context["engine"]) == null ||
        (_0x19e8c8 = _0xedb3e5.getCanvasElement) == null
        ? undefined
        : _0x19e8c8.call(_0xedb3e5),
      _0xe91c0c.schedule,
    );
    _0x426ca5 && this.disposeWithMe(_0x426ca5);
    let _0x1d87fc = this._contentSizeRegistry["contentSizeChanged$"].subscribe(
      ({ hostUnitId: _0x5ca05d }) => {
        _0x5ca05d === this._context["unitId"] && _0x3ecc8a.schedule();
      },
    );
    (this.disposeWithMe((0, a.toDisposable)(() => _0x1d87fc.unsubscribe())),
      this.disposeWithMe({
        dispose: () => {
          (this._resolvedChildUnits["clear"](),
            this._pendingChildUnits["clear"]());
        },
      }));
    let _0x2f969e = this._univerInstanceService["getTypeOfUnitAdded$"](
        a.UniverInstanceType["UNIVER_SHEET"],
      ).subscribe(() => {
        _0x3ecc8a.schedule();
      }),
      _0x5c7adc = this._univerInstanceService["getTypeOfUnitAdded$"](
        a.UniverInstanceType["UNIVER_BASE"],
      ).subscribe(() => {
        _0x3ecc8a.schedule();
      });
    (this.disposeWithMe((0, a.toDisposable)(() => _0x2f969e.unsubscribe())),
      this.disposeWithMe((0, a.toDisposable)(() => _0x5c7adc.unsubscribe())));
    let _0x386a22 = this._contentSizeRegistry["providerChanged$"].subscribe(
      (_0x16955a) => {
        (_0x16955a === a.UniverInstanceType["UNIVER_SHEET"] ||
          _0x16955a === a.UniverInstanceType["UNIVER_BASE"]) &&
          _0x3ecc8a.schedule();
      },
    );
    this.disposeWithMe((0, a.toDisposable)(() => _0x386a22.unsubscribe()));
    let _0xb95b85 = (0, p.setDocsCustomBlockRenderViewportProvider)(
      (_0x59ad4b, _0x57253c, _0x1bfe05) => {
        var _0x6c23d0, _0x3513a0, _0x4c7319;
        if (_0x59ad4b !== this._context["unitId"]) return null;
        let _0xe4e4e7 = this._getHostSnapshot();
        if (!_0xe4e4e7) return null;
        let _0x4e8b01 =
            (_0x6c23d0 = _0xe4e4e7.drawings) == null
              ? undefined
              : _0x6c23d0[_0x57253c],
          _0x49e60a = _0x4e8b01 == null ? undefined : _0x4e8b01.data,
          _0xaf547c = _0x49e60a == null ? undefined : _0x49e60a.childType;
        if (
          _0xaf547c !== a.UniverInstanceType["UNIVER_SHEET"] &&
          _0xaf547c !== a.UniverInstanceType["UNIVER_BASE"]
        )
          return null;
        let _0x328365 = this._docViewScaleService["getViewScale"](),
          _0x4391db = this._getVisibleCanvasDocumentRect(_0x328365),
          _0x5d2eb3 = this._resolveChildUnitId(_0x49e60a, _0xaf547c),
          _0x202052 = _0x5d2eb3
            ? this._getChildUnitForMeasurement(
                _0x5d2eb3,
                _0xaf547c,
                _0x3ecc8a.schedule,
              )
            : undefined,
          _0x55c38c = _0x49e60a == null ? undefined : _0x49e60a.embedId,
          _0x2fbd52 =
            typeof _0x55c38c == "string"
              ? (_0x3513a0 =
                  this._embedMountService["getSession"](_0x55c38c)) == null ||
                (_0x3513a0 = _0x3513a0.context) == null
                ? undefined
                : _0x3513a0.runtimeScope["injector"]
              : undefined,
          _0x34c578 =
            _0x5d2eb3 && _0x202052 != null
              ? this._contentSizeRegistry["measureContentSize"]({
                  childType: _0xaf547c,
                  childUnit: _0x202052,
                  childUnitId: _0x5d2eb3,
                  injector: _0x2fbd52,
                  viewportHeight:
                    (_0x4391db == null ? undefined : _0x4391db.height) == null
                      ? undefined
                      : Math.max(1, _0x4391db.height - 52),
                  viewportWidth: _0x1bfe05.fallbackWidth,
                })
              : undefined,
          _0xc4fb96 = (0, h.resolveDocsCustomBlockSize)(_0xaf547c),
          _0x31c0c6 = jl(_0x1bfe05.fallbackHeight, _0xc4fb96.height),
          _0x122561 = jl(_0x1bfe05.fallbackWidth, _0xc4fb96.width),
          _0x25514c =
            (_0x34c578 == null ? undefined : _0x34c578.height) ?? _0x31c0c6,
          _0x473452 = (0, o.resolveDocsCustomBlockRenderViewport)({
            childType: _0xaf547c,
            contentHeight:
              _0xaf547c === a.UniverInstanceType["UNIVER_SHEET"]
                ? So(_0x25514c)
                : _0x25514c,
            contentWidth: _0x34c578 == null ? undefined : _0x34c578.width,
            docsLeft: this._getDocsLeft(),
            documentFlavor:
              (_0x4c7319 = _0xe4e4e7.documentStyle) == null
                ? undefined
                : _0x4c7319.documentFlavor,
            fallbackHeight: _0x31c0c6,
            fallbackWidth: _0x122561,
            pageMarginLeft: _0x1bfe05.pageMarginLeft,
            pageMarginRight: _0x1bfe05.pageMarginRight,
            pageWidth: _0x1bfe05.pageWidth,
            scale: _0x328365,
            visibleCanvasHeight:
              _0x4391db == null ? undefined : _0x4391db.height,
            visibleCanvasLeft: _0x4391db == null ? undefined : _0x4391db.left,
            visibleCanvasWidth: _0x4391db == null ? undefined : _0x4391db.width,
          }),
          _0x5267b3 = _0x473452.contentHeight ?? _0x473452.height,
          _0x5a7f4b =
            _0xaf547c === a.UniverInstanceType["UNIVER_BASE"] ? 52 : 0,
          _0x48e6fd =
            (_0x4391db == null ? undefined : _0x4391db.height) == null
              ? (_0x473452.viewportHeight ?? _0x5267b3)
              : Math.min(_0x5267b3, Math.max(1, _0x4391db.height - _0x5a7f4b));
        return {
          ..._0x473452,
          viewportHeight: _0x48e6fd,
          height: Co({ contentHeight: _0x5267b3, floatingMenuInsetTop: 52 }),
        };
      },
    );
    (this.disposeWithMe({ dispose: _0xb95b85 }),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x18476e) => {
          if (_0x18476e.id === o.SetDocZoomRatioOperation["id"]) {
            let _0x3b2672 = _0x18476e.params;
            if (
              typeof _0x3b2672 == "object" &&
              _0x3b2672 &&
              "unitId" in _0x3b2672 &&
              _0x3b2672.unitId === this._context["unitId"]
            ) {
              let _0x4420d7 =
                "zoomRatio" in _0x3b2672 &&
                typeof _0x3b2672.zoomRatio == "number"
                  ? _0x3b2672.zoomRatio
                  : undefined;
              if (_0x4420d7 != null && _0x4420d7 === _0xb2eaf7) {
                _0x1998ea.schedule();
                return;
              }
              ((_0xb2eaf7 = _0x4420d7),
                this._refreshHostDocCustomBlockPresentation(),
                _0x2ca422.schedule());
            }
            return;
          }
          let _0x19929c = this._getHostSnapshot();
          _0x19929c &&
            (0, o.shouldRefreshDocsCustomBlockSizeForCommand)({
              childUnitIds: (0, o.collectDocsTableLikeEmbedChildUnitIds)(
                _0x19929c.drawings,
                (_0x1d07cc) => this._resolveChildUnitId(_0x1d07cc),
              ),
              commandId: _0x18476e.id,
              commandParams: _0x18476e.params,
              hostUnitId: this._context["unitId"],
            }) &&
            _0x3ecc8a.schedule();
        }),
      ));
  }
  _getHostUnit() {
    if (!this._disposed) return this._context["unit"] ?? undefined;
  }
  _getHostSnapshot() {
    var _0x42bb06;
    return (_0x42bb06 = this._getHostUnit()) == null
      ? undefined
      : _0x42bb06.getSnapshot();
  }
  _rerenderHostDoc() {
    let _0x39079b = this._renderManagerService["getRenderUnitById"](
      this._context["unitId"],
    );
    try {
      var _0x4fff79;
      let _0x277b81 =
        _0x39079b == null || (_0x4fff79 = _0x39079b.with) == null
          ? undefined
          : _0x4fff79.call(_0x39079b, o.DocRenderController);
      return _0x277b81
        ? (_0x277b81.reRender(this._context["unitId"]), true)
        : false;
    } catch {
      return false;
    }
  }
  _refreshHostDocCustomBlockPresentation() {
    let _0x42f675 = this._renderManagerService["getRenderUnitById"](
      this._context["unitId"],
    );
    try {
      var _0x70f42f;
      return (
        (_0x42f675 == null ||
        (_0x70f42f = _0x42f675.with) == null ||
        (_0x70f42f = _0x70f42f.call(_0x42f675, o.DocRenderController)) == null
          ? undefined
          : _0x70f42f.refreshCustomBlockPresentation(
              this._context["unitId"],
            )) ?? false
      );
    } catch {
      return false;
    }
  }
  _refreshHostDocZoom() {
    let _0x4a32bd = this._getHostUnit(),
      _0x5bc2b8 = _0x4a32bd == null ? undefined : _0x4a32bd.zoomRatio;
    typeof _0x5bc2b8 == "number" &&
      this._commandService["syncExecuteCommand"](
        o.SetDocZoomRatioOperation["id"],
        { unitId: this._context["unitId"], zoomRatio: _0x5bc2b8 },
      );
  }
  _resolveChildUnitId(_0x3b4686, _0xbf0783) {
    if (!_0x3b4686 || typeof _0x3b4686 != "object") return;
    let _0x4f91e1 = _0x3b4686,
      _0x26fad7 =
        typeof _0x4f91e1.childType == "number"
          ? _0x4f91e1.childType
          : _0xbf0783;
    if (
      _0x26fad7 !== a.UniverInstanceType["UNIVER_SHEET"] &&
      _0x26fad7 !== a.UniverInstanceType["UNIVER_BASE"]
    )
      return;
    if (typeof _0x4f91e1.childUnitId == "string") return _0x4f91e1.childUnitId;
    if (typeof _0x4f91e1.embedId != "string") return;
    let _0x187572 =
        typeof _0x4f91e1.hostUnitId == "string"
          ? _0x4f91e1.hostUnitId
          : this._context["unitId"],
      _0x357cc2 = this._embedModelService["getDescriptor"](
        _0x187572,
        _0x4f91e1.embedId,
      );
    if ((_0x357cc2 == null ? undefined : _0x357cc2.childType) === _0x26fad7) {
      if (typeof _0x357cc2.childUnitId == "string")
        return _0x357cc2.childUnitId;
      try {
        return (0, t.getResourceRefInputUnitSelector)(_0x357cc2.source["ref"]);
      } catch {
        return;
      }
    }
  }
  _getChildUnitForMeasurement(_0x4de217, _0x1b1a68, _0xb85b5e) {
    let _0x2441d2 = _0x1b1a68 + ":" + _0x4de217;
    if (this._resolvedChildUnits["has"](_0x2441d2))
      return this._resolvedChildUnits["get"](_0x2441d2);
    let _0x563416 = this._univerInstanceService["getUnit"](
      _0x4de217,
      _0x1b1a68,
    );
    if (_0x563416 != null) {
      if (!Al(_0x563416))
        return (
          this._resolvedChildUnits["set"](_0x2441d2, _0x563416),
          _0x563416
        );
      if (!this._pendingChildUnits["has"](_0x2441d2)) {
        let _0x187148 = Promise.resolve(_0x563416).then(
          (_0x288965) => (
            this._pendingChildUnits["delete"](_0x2441d2),
            this._resolvedChildUnits["set"](_0x2441d2, _0x288965),
            this._disposed || _0xb85b5e(),
            _0x288965
          ),
          () => {
            this._pendingChildUnits["delete"](_0x2441d2);
          },
        );
        this._pendingChildUnits["set"](_0x2441d2, _0x187148);
      }
    }
  }
  _getDocsLeft() {
    var _0x4ca340, _0x391fb3;
    return (
      ((_0x4ca340 = this._context["mainComponent"]) == null ||
      (_0x391fb3 = _0x4ca340.getOffsetConfig) == null ||
      (_0x391fb3 = _0x391fb3.call(_0x4ca340)) == null
        ? undefined
        : _0x391fb3.docsLeft) ?? 0
    );
  }
  _getVisibleCanvasDocumentRect(_0x236a12) {
    var _0x5c10be, _0x1c1fcd, _0x4eb0a3, _0xb91d8e, _0xe56793, _0x201bfd;
    let _0x3b8b17 = Number.isFinite(_0x236a12) && _0x236a12 > 0 ? _0x236a12 : 1,
      _0x369f0c =
        ((_0x5c10be = this._context["scene"].getViewport(
          o.VIEWPORT_KEY["VIEW_MAIN"],
        )) == null
          ? undefined
          : _0x5c10be.viewportScrollX) ?? 0,
      _0xd942aa =
        (_0x1c1fcd = (_0x4eb0a3 = this._context["engine"]).getCanvasElement) ==
          null ||
        (_0x1c1fcd = _0x1c1fcd.call(_0x4eb0a3)) == null ||
        (_0xb91d8e = _0x1c1fcd.getBoundingClientRect) == null
          ? undefined
          : _0xb91d8e.call(_0x1c1fcd),
      _0x50f815 = _0xd942aa == null ? undefined : _0xd942aa.width,
      _0x51155a = _0xd942aa == null ? undefined : _0xd942aa.height,
      _0x51cd60 =
        ((_0xe56793 = this._context["mainComponent"]) == null
          ? undefined
          : _0xe56793.width) ?? this._context["scene"].width,
      _0x1c08a8 = (_0x50f815 ?? _0x51cd60 ?? 0) / _0x3b8b17,
      _0x2d1426 =
        ((_0x201bfd = this._context["mainComponent"]) == null
          ? undefined
          : _0x201bfd.height) ?? this._context["scene"].height,
      _0x524967 = (_0x51155a ?? _0x2d1426 ?? 0) / _0x3b8b17;
    return !_0x1c08a8 ||
      !Number.isFinite(_0x1c08a8) ||
      _0x1c08a8 <= 0 ||
      !_0x524967 ||
      !Number.isFinite(_0x524967) ||
      _0x524967 <= 0
      ? null
      : { height: _0x524967, left: _0x369f0c, width: _0x1c08a8 };
  }
};
Ol = Z(
  [
    X(1, (0, a.Inject)(a.IUniverInstanceService)),
    X(2, (0, a.Inject)(a.ICommandService)),
    X(3, (0, a.Inject)(ba)),
    X(4, (0, a.Inject)(Ht)),
    X(5, (0, a.Inject)(t.EmbedModelService)),
    X(6, p.IRenderManagerService),
    X(7, (0, a.Inject)(o.DocViewScaleService)),
  ],
  Ol,
);
function kl(_0x3673ea, _0x2583a5) {
  if (!_0x3673ea || typeof ResizeObserver > "u") return;
  let _0x7b35b = new ResizeObserver(() => _0x2583a5());
  return (
    _0x7b35b.observe(_0x3673ea),
    { dispose: () => _0x7b35b.disconnect() }
  );
}
function Al(_0x134349) {
  return !!_0x134349 && typeof _0x134349.then == "function";
}
function jl(_0xf915e, _0x1bf86c) {
  return typeof _0xf915e == "number" &&
    Number.isFinite(_0xf915e) &&
    _0xf915e > 1
    ? _0xf915e
    : _0x1bf86c;
}
function Ml(_0x18f4de, _0x4225b0, _0x222a99) {
  return {
    ...(0, t.createDocsCustomBlockHostAdapterContribution)(
      _0x18f4de,
      _0x4225b0,
    ),
    afterCreateAnchor: (_0x2e0a2f) => Pl(_0x222a99, _0x2e0a2f.hostUnitId),
    afterRemoveAnchor: (_0x3c0404) => Pl(_0x222a99, _0x3c0404.hostUnitId),
  };
}
function Nl() {
  return {
    hostType: a.UniverInstanceType["UNIVER_DOC"],
    entry: "docs-custom-block",
    layout: "docs-sticky-sheet",
    supportedLayouts: [
      "docs-sticky-sheet",
      "docs-sticky-base",
      "aspect-fit",
      "scroll-contained",
      "content-bounds-fit",
    ],
    menuBehavior: "floating",
  };
}
function Pl(_0x28a6b8, _0x72d6b5) {
  var _0x2ad898, _0x135e9e, _0x59fe9a, _0x457750;
  if (!_0x28a6b8) return;
  let _0x1e1f8b = _0x28a6b8.getRenderUnitById(_0x72d6b5);
  if (_0x1e1f8b) {
    for (let _0x291d41 of _0x1e1f8b.components["values"]()) {
      var _0x34ef20;
      (_0x34ef20 = _0x291d41.makeDirty) == null || _0x34ef20.call(_0x291d41);
    }
    ((_0x2ad898 = _0x1e1f8b.engine) == null || _0x2ad898.resize(),
      (_0x135e9e = _0x1e1f8b.scene) == null || _0x135e9e.makeDirty(),
      (_0x59fe9a = _0x1e1f8b.with) == null ||
        (_0x59fe9a = _0x59fe9a.call(_0x1e1f8b, o.DocPageLayoutService)) ==
          null ||
        (_0x457750 = _0x59fe9a.calculatePagePosition) == null ||
        _0x457750.call(_0x59fe9a));
  }
}
function Fl(_0x56ef3e) {
  return {
    childType: a.UniverInstanceType["UNIVER_DOC"],
    handleWheel: (_0x3efc75) => {
      let _0x4b647b = _0x56ef3e.has(ai) ? _0x56ef3e.get(ai) : undefined;
      if (
        (_0x4b647b == null ? undefined : _0x4b647b.handleWheel(_0x3efc75)) ===
        true
      )
        return true;
      if (!_0x56ef3e.has(p.IRenderManagerService)) return false;
      let _0x39e6c1 = _0x56ef3e
          .get(p.IRenderManagerService)
          .getRenderUnitById(_0x3efc75.childUnitId),
        _0x3a60af = _0x39e6c1 == null ? undefined : _0x39e6c1.scene;
      return bo(
        _0x3efc75,
        _0x3a60af == null
          ? undefined
          : _0x3a60af.getViewport(o.VIEWPORT_KEY["VIEW_MAIN"]),
        _0x3a60af,
      );
    },
  };
}
function Il() {
  return Tc({ childType: a.UniverInstanceType["UNIVER_DOC"], mount: Ll });
}
function Ll(_0x110c10) {
  let { menu: _0xfdf889, portalContainer: _0xacb360 } = Sc(_0x110c10),
    _0x40fd00 = nn(_0xfdf889);
  return (
    _0x40fd00.render(
      (0, d.createElement)(
        Kt,
        {
          injector: _0x110c10.runtimeScope["injector"],
          mountContainer: _0xacb360,
          embedId: _0x110c10.embedId,
        },
        (0, d.createElement)(Rl, {
          hostUnitId: _0x110c10.hostUnitId,
          embedId: _0x110c10.embedId,
          entry: _0x110c10.descriptor["entry"],
          fullscreen: !!_0x110c10.renderScope["fullscreen"],
          usesDomFloatingStage:
            _0x110c10.descriptor["entry"] !== "slides-floating-object",
          renderScopeActive$: _0x110c10.renderScope["active$"],
        }),
      ),
    ),
    (0, a.toDisposable)(() => {
      (rn(_0x40fd00), globalThis.setTimeout(() => _0xfdf889.remove(), 0));
    })
  );
}
function Rl(_0x588ebb) {
  let {
      hostUnitId: _0x4683dc,
      embedId: _0x3622fa,
      entry: _0x29041f,
      fullscreen: _0x4379a1,
      usesDomFloatingStage: _0x3dd816,
      renderScopeActive$: _0x29556d,
    } = _0x588ebb,
    _0x785b39 = (0, c.useObservable)(() => _0x29556d, false, false, [
      _0x29556d,
    ]),
    _0x47327f = (0, c.useDependency)(a.ICommandService),
    _0x2b8a83 = (0, c.useDependency)(a.IPermissionService),
    _0x4b9f5d = (0, c.useDependency)(a.IUniverInstanceService),
    _0x2ed732 = (0, c.useDependency)(a.LocaleService),
    _0x51fdf3 = (0, c.useDependency)(ce),
    _0x32c9c0 = sr({
      embedId: _0x3622fa,
      active: (0, c.useObservable)(
        () => _0x51fdf3.active$,
        _0x51fdf3.getActive(),
        false,
        [_0x51fdf3],
      ),
      fullscreen: _0x4379a1,
      usesDomFloatingStage: _0x3dd816,
      renderScopeActive: _0x785b39,
    });
  return (0, c.useObservable)(
    () =>
      _0x2b8a83.permissionPointUpdate$["pipe"](
        (0, f.startWith)(null),
        (0, f.map)(() =>
          zl(_0x2b8a83, _0x4b9f5d, _0x4683dc, _0x3622fa, _0x29041f),
        ),
      ),
    zl(_0x2b8a83, _0x4b9f5d, _0x4683dc, _0x3622fa, _0x29041f),
    false,
    [_0x3622fa, _0x29041f, _0x4683dc, _0x2b8a83, _0x4b9f5d],
  )
    ? (0, m.jsxs)("div", {
        className: (0, l.clsx)(
          "univer-docs-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0",
          {
            "univer-hidden": _0x32c9c0 !== "stage2",
            "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0":
              _0x4379a1,
            "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2":
              !_0x4379a1,
            "-univer-top-9": !_0x4379a1 && _0x29041f !== "docs-custom-block",
            "-univer-top-[52px]":
              !_0x4379a1 && _0x29041f === "docs-custom-block",
          },
        ),
        "data-embed-floating-menu": "true",
        "data-embed-id": _0x3622fa,
        "data-embed-float-stage": _0x32c9c0,
        onPointerDown: (_0x13b716) => _0x13b716.stopPropagation(),
        children: [
          !_0x4379a1 &&
            (0, m.jsx)(fa, {
              hostUnitId: _0x4683dc,
              embedId: _0x3622fa,
              variant: "menu",
            }),
          (0, m.jsx)(da, {
            title: _0x2ed732.t("embed-ui.deleteBlock"),
            children: (0, m.jsx)(l.Button, {
              type: "button",
              size: "small",
              variant: "ghost",
              className:
                "univer-size-6 univer-p-0 univer-text-red-500 hover:univer-text-red-600",
              "aria-label": _0x2ed732.t("embed-ui.deleteBlock"),
              onClick: async () => {
                await _0x47327f.executeCommand(t.RemoveEmbedCommand["id"], {
                  hostUnitId: _0x4683dc,
                  embedId: _0x3622fa,
                });
              },
              children: (0, m.jsx)(u.DeleteIcon, {}),
            }),
          }),
        ],
      })
    : null;
}
function zl(_0x2dfcc4, _0x2b8082, _0x5ea11b, _0x37fbff, _0x34e7db) {
  let _0x40e8c8 = _0x2b8082.getUnit(
    _0x5ea11b,
    a.UniverInstanceType["UNIVER_DOC"],
  );
  if (!(_0x40e8c8 instanceof a.DocumentDataModel))
    return [
      a.UniverInstanceType["UNIVER_SHEET"],
      a.UniverInstanceType["UNIVER_SLIDE"],
      a.UniverInstanceType["UNIVER_BOARD"],
    ].some((_0x2735ff) => !!_0x2b8082.getUnit(_0x5ea11b, _0x2735ff));
  let _0xeadfe6 =
      _0x34e7db === "slides-floating-object" ? "drawing" : "custom-block",
    _0x285db6 =
      _0xeadfe6 === "drawing"
        ? (0, h.getDocumentDrawingSegmentId)(_0x40e8c8, _0x37fbff)
        : "";
  return (0, h.canEditDocumentTargets)(_0x2dfcc4, _0x5ea11b, [
    ...(0, h.getDocumentEntityParentPermissionObjectIds)(
      _0x40e8c8,
      _0x285db6,
      _0xeadfe6,
      _0x37fbff,
    ),
    (0, h.getDocumentEntityPermissionObjectId)(_0x285db6, _0xeadfe6, _0x37fbff),
  ]);
}
function Bl(_0x298c36) {
  bs(_0x298c36, "docs-ui.embed", Vl);
}
function Vl(_0x1dc8c5) {
  let _0x337fd6 = _0x1dc8c5.get(t.EmbedHostAdapterRegistryService),
    _0x53d244 = _0x1dc8c5.get(vt),
    _0x1428cd = _0x1dc8c5.get(gt),
    _0x20ab86 = _0x1dc8c5.get(H),
    _0x53fc10 = _0x1dc8c5.get(_t),
    _0x19c9fb = _0x1dc8c5.get(Ur),
    _0x49c4e8 = _0x1dc8c5.get(ii),
    _0x233fb0 = _0x1dc8c5.has(t.EmbedHostAnchorModelService)
      ? _0x1dc8c5.get(t.EmbedHostAnchorModelService)
      : undefined,
    _0x242353 = _0x1dc8c5.has(a.IUniverInstanceService)
      ? _0x1dc8c5.get(a.IUniverInstanceService)
      : undefined,
    _0x2440d4 = _0x1dc8c5.has(p.IRenderManagerService)
      ? _0x1dc8c5.get(p.IRenderManagerService)
      : undefined;
  _0x2440d4 == null ||
    _0x2440d4.registerRenderModule(a.UniverInstanceType["UNIVER_DOC"], [Ol]);
  let _0x51e192 = Ml(_0x233fb0, _0x242353, _0x2440d4);
  _0x337fd6.get(_0x51e192.hostType, _0x51e192.entry) ||
    _0x337fd6.register(_0x51e192);
  let _0x1f8b41 = Nl();
  _0x53d244.get(_0x1f8b41.hostType, _0x1f8b41.entry) ||
    _0x53d244.register(_0x1f8b41);
  let _0x256a7a = Sl();
  _0x1428cd.get(_0x256a7a.childType) || _0x1428cd.register(_0x256a7a);
  let _0xf11f6a = xl();
  (_0x20ab86.get(_0xf11f6a.childType) || _0x20ab86.register(_0xf11f6a),
    Il().forEach((_0x148a1b) => {
      _0x53fc10.hasExact(
        _0x148a1b.hostType,
        _0x148a1b.entry,
        _0x148a1b.childType,
      ) || _0x53fc10.register(_0x148a1b);
    }),
    _0x19c9fb.registerProvider(
      wa(_0x1dc8c5, {
        childType: a.UniverInstanceType["UNIVER_DOC"],
        renderManagerService: p.IRenderManagerService,
      }),
    ),
    _0x49c4e8.get(a.UniverInstanceType["UNIVER_DOC"]) ||
      _0x49c4e8.register(Fl(_0x1dc8c5)));
}
function Hl() {
  return {
    childType: a.UniverInstanceType["UNIVER_SHEET"],
    measureContentSize: (_0x69d6a5) => {
      let _0x2f452e = Ul(
          _0x69d6a5.childUnit,
          _0x69d6a5.limitRowsToViewportWidth
            ? _0x69d6a5.viewportWidth
            : undefined,
        ),
        _0x3afe64 = Gl(_0x69d6a5.childUnit);
      return _0x2f452e == null && _0x3afe64 == null
        ? undefined
        : {
            height: _0x2f452e == null ? undefined : _0x2f452e.height,
            verticalBreaks: _0x2f452e == null ? undefined : _0x2f452e.breaks,
            width: _0x3afe64,
          };
    },
  };
}
function Ul(_0x3b79c9, _0x1687e1) {
  var _0x149d58;
  let _0x3567ac =
    _0x3b79c9 instanceof a.Workbook
      ? _0x3b79c9.getActiveSheet(true)
      : undefined;
  if (!_0x3567ac) return;
  let _0x42d9be = Kl(_0x3567ac, _0x1687e1);
  if (!Number.isFinite(_0x42d9be) || _0x42d9be == null || _0x42d9be < 0) return;
  let _0x3c04f7 = Xl(
      (_0x149d58 = _0x3567ac.getConfig) == null ||
        (_0x149d58 = _0x149d58.call(_0x3567ac)) == null
        ? undefined
        : _0x149d58.defaultRowHeight,
      a.DEFAULT_WORKSHEET_ROW_HEIGHT,
    ),
    _0x3a63d6 = Wl(_0x3b79c9),
    _0x37a9fd = 0,
    _0x3e12cc = [];
  for (let _0x1f735f = 0; _0x1f735f < _0x42d9be; _0x1f735f++) {
    var _0x61a83b, _0x1969fd;
    ((_0x61a83b = _0x3567ac.getRowVisible) == null
      ? undefined
      : _0x61a83b.call(_0x3567ac, _0x1f735f)) !== false &&
      ((_0x37a9fd += Zl(
        (_0x1969fd = _0x3567ac.getRowHeight) == null
          ? undefined
          : _0x1969fd.call(_0x3567ac, _0x1f735f),
        _0x3c04f7,
      )),
      _0x3e12cc.push(_0x3a63d6 + _0x37a9fd));
  }
  return { breaks: _0x3e12cc, height: _0x3a63d6 + _0x37a9fd };
}
function Wl(_0x5e6cb3) {
  var _0x3f0295;
  let _0xfa80e5 =
      _0x5e6cb3 instanceof a.Workbook
        ? _0x5e6cb3.getActiveSheet(true)
        : undefined,
    _0x39c0e8 =
      _0xfa80e5 == null ||
      (_0x3f0295 = _0xfa80e5.getConfig) == null ||
      (_0x3f0295 = _0x3f0295.call(_0xfa80e5)) == null
        ? undefined
        : _0x3f0295.columnHeader;
  return _0x39c0e8 != null && _0x39c0e8.hidden
    ? 0
    : Xl(_0x39c0e8 == null ? undefined : _0x39c0e8.height, 24);
}
function Gl(_0x736d68) {
  var _0x28bbd8, _0x1edee0;
  let _0x4e86d1 =
    _0x736d68 instanceof a.Workbook
      ? _0x736d68.getActiveSheet(true)
      : undefined;
  if (!_0x4e86d1) return;
  let _0x53bc7e = Jl(_0x4e86d1);
  if (!Number.isFinite(_0x53bc7e) || _0x53bc7e == null || _0x53bc7e < 0) return;
  let _0x1ad546 =
      (_0x28bbd8 = _0x4e86d1.getConfig) == null ||
      (_0x28bbd8 = _0x28bbd8.call(_0x4e86d1)) == null
        ? undefined
        : _0x28bbd8.rowHeader,
    _0x1af467 = Xl(
      (_0x1edee0 = _0x4e86d1.getConfig) == null ||
        (_0x1edee0 = _0x1edee0.call(_0x4e86d1)) == null
        ? undefined
        : _0x1edee0.defaultColumnWidth,
      a.DEFAULT_WORKSHEET_COLUMN_WIDTH,
    ),
    _0x168a94 =
      _0x1ad546 != null && _0x1ad546.hidden
        ? 0
        : Xl(
            _0x1ad546 == null ? undefined : _0x1ad546.width,
            a.DEFAULT_WORKSHEET_ROW_TITLE_WIDTH,
          ),
    _0x3c66de = 0;
  for (let _0x1acf5d = 0; _0x1acf5d < _0x53bc7e; _0x1acf5d++) {
    var _0x60b591, _0x328724;
    ((_0x60b591 = _0x4e86d1.getColVisible) == null
      ? undefined
      : _0x60b591.call(_0x4e86d1, _0x1acf5d)) !== false &&
      (_0x3c66de += Xl(
        (_0x328724 = _0x4e86d1.getColumnWidth) == null
          ? undefined
          : _0x328724.call(_0x4e86d1, _0x1acf5d),
        _0x1af467,
      ));
  }
  return _0x168a94 + _0x3c66de + p.ScrollBar["DEFAULT_TOTAL_SIZE"];
}
function Kl(_0x2d7d35, _0x436b0d) {
  let _0x466f79 = Yl(_0x2d7d35.getRowCount());
  if (_0x466f79 == null || _0x436b0d == null) return _0x466f79;
  let _0x5f5b2c = ql(_0x2d7d35, _0x436b0d),
    _0x2584ce = _0x2d7d35.getDataRealRange();
  if (
    _0x5f5b2c < 0 ||
    _0x2584ce.endRow < 0 ||
    _0x2584ce.endColumn < 0 ||
    _0x2584ce.startColumn > _0x5f5b2c
  )
    return 0;
  let _0x126cf0 = -1;
  for (let _0x459b89 of _0x2d7d35.iterateByRow({
    startRow: Math.max(0, _0x2584ce.startRow),
    startColumn: Math.max(0, _0x2584ce.startColumn),
    endRow: _0x2584ce.endRow,
    endColumn: Math.min(_0x5f5b2c, _0x2584ce.endColumn),
  }))
    _0x459b89.value &&
      _0x2d7d35.cellHasValue(_0x459b89.value) &&
      (_0x126cf0 = _0x459b89.row);
  return Math.min(_0x466f79, _0x126cf0 + 1);
}
function ql(_0x163c3f, _0x138867) {
  var _0x530d1b, _0x198332;
  let _0x9294cd =
      (_0x530d1b = _0x163c3f.getConfig) == null ||
      (_0x530d1b = _0x530d1b.call(_0x163c3f)) == null
        ? undefined
        : _0x530d1b.rowHeader,
    _0x3d224f =
      _0x9294cd != null && _0x9294cd.hidden
        ? 0
        : Xl(
            _0x9294cd == null ? undefined : _0x9294cd.width,
            a.DEFAULT_WORKSHEET_ROW_TITLE_WIDTH,
          ),
    _0x292126 = Math.max(
      0,
      _0x138867 - _0x3d224f - p.ScrollBar["DEFAULT_TOTAL_SIZE"],
    ),
    _0x3fdb72 = Xl(
      (_0x198332 = _0x163c3f.getConfig) == null ||
        (_0x198332 = _0x198332.call(_0x163c3f)) == null
        ? undefined
        : _0x198332.defaultColumnWidth,
      a.DEFAULT_WORKSHEET_COLUMN_WIDTH,
    ),
    _0x387d17 = 0,
    _0x570a66 = -1,
    _0x3d695e = Jl(_0x163c3f) ?? 0;
  for (
    let _0x44edac = 0;
    _0x44edac < _0x3d695e && _0x387d17 < _0x292126;
    _0x44edac++
  ) {
    var _0x5178b6, _0x40cc4e;
    ((_0x5178b6 = _0x163c3f.getColVisible) == null
      ? undefined
      : _0x5178b6.call(_0x163c3f, _0x44edac)) !== false &&
      ((_0x570a66 = _0x44edac),
      (_0x387d17 += Xl(
        (_0x40cc4e = _0x163c3f.getColumnWidth) == null
          ? undefined
          : _0x40cc4e.call(_0x163c3f, _0x44edac),
        _0x3fdb72,
      )));
  }
  return _0x570a66;
}
function Jl(_0x366978) {
  return Yl(_0x366978.getColumnCount());
}
function Yl(_0x1ac1d0) {
  return typeof _0x1ac1d0 == "number" &&
    Number.isFinite(_0x1ac1d0) &&
    _0x1ac1d0 >= 0
    ? Math.floor(_0x1ac1d0)
    : undefined;
}
function Xl(_0x5f3b64, _0x5a0657) {
  return typeof _0x5f3b64 == "number" &&
    Number.isFinite(_0x5f3b64) &&
    _0x5f3b64 > 0
    ? _0x5f3b64
    : _0x5a0657;
}
function Zl(_0xec0982, _0x2dd19f) {
  return typeof _0xec0982 == "number" &&
    Number.isFinite(_0xec0982) &&
    _0xec0982 >= 0
    ? _0xec0982
    : _0x2dd19f;
}
function Ql() {
  return {
    hostType: a.UniverInstanceType["UNIVER_SHEET"],
    entry: "sheets-floating-object",
    layout: "doc-width-scale",
    supportedLayouts: [
      "doc-width-scale",
      "aspect-fit",
      "scroll-contained",
      "content-bounds-fit",
    ],
    menuBehavior: "floating",
  };
}
function $l() {
  return {
    hostType: a.UniverInstanceType["UNIVER_SHEET"],
    entry: "sheets-sheet-tab",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: (_0x47e5b6) => {
      let _0x58717c = eu(
        "data-embed-sheets-sheet-tab-host",
        _0x47e5b6.descriptor["hostAnchorId"],
      );
      return _0x58717c ? { hostElement: _0x58717c } : {};
    },
  };
}
function eu(_0x480bf0, _0x8ecc19) {
  return document.querySelector(
    "[" + _0x480bf0 + "=\x22" + tu(_0x8ecc19) + "\x22]",
  );
}
function tu(_0x20e790) {
  return _0x20e790.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function nu(_0x1ef285) {
  let _0x5ae486 = _0x1ef285.has(a.IUniverInstanceService)
      ? _0x1ef285.get(a.IUniverInstanceService)
      : undefined,
    _0x34d96c = _0x1ef285.has(p.IRenderManagerService)
      ? _0x1ef285.get(p.IRenderManagerService)
      : undefined;
  return {
    childType: a.UniverInstanceType["UNIVER_SHEET"],
    getHorizontalScroll: (_0x5cd4a5) => {
      var _0xdb442e;
      return (_0xdb442e = _0x26b574(_0x5cd4a5)) == null
        ? undefined
        : _0xdb442e.viewportScrollX;
    },
    getVerticalScroll: (_0x2e5458) => {
      var _0x24ad59;
      return (_0x24ad59 = _0x26b574(_0x2e5458)) == null
        ? undefined
        : _0x24ad59.viewportScrollY;
    },
    getStickyLeftWidth: (_0x1aa18b) => {
      var _0x5d77c3, _0x41e49e;
      let _0x2705d5 = _0x1aa18b.runtimeScope["instanceService"] ?? _0x5ae486,
        _0xf2256d =
          _0x2705d5 == null
            ? undefined
            : _0x2705d5.getUnit(
                _0x1aa18b.childUnitId,
                a.UniverInstanceType["UNIVER_SHEET"],
              ),
        _0x56923c =
          _0xf2256d == null ||
          (_0x5d77c3 = _0xf2256d.getActiveSheet(true)) == null ||
          (_0x41e49e = _0x5d77c3.getConfig) == null ||
          (_0x41e49e = _0x41e49e.call(_0x5d77c3)) == null
            ? undefined
            : _0x41e49e.rowHeader;
      return _0x56923c != null && _0x56923c.hidden
        ? 0
        : ((_0x56923c == null ? undefined : _0x56923c.width) ??
            a.DEFAULT_WORKSHEET_ROW_TITLE_WIDTH);
    },
    getStickyHeaderHeight: (_0x36fbea) => {
      let _0x123dc8 = _0x36fbea.runtimeScope["instanceService"] ?? _0x5ae486;
      return Wl(
        _0x123dc8 == null
          ? undefined
          : _0x123dc8.getUnit(
              _0x36fbea.childUnitId,
              a.UniverInstanceType["UNIVER_SHEET"],
            ),
      );
    },
    subscribeVerticalScroll: (_0x33bef2, _0x56a3d3) => {
      let _0x4c7051 = _0x26b574(_0x33bef2);
      if (!_0x4c7051) return;
      let _0x13ca7a = _0x4c7051.onScrollByBar$["subscribeEvent"](
        (_0x21f760) => {
          _0x56a3d3(
            _0x21f760.viewportScrollY ?? _0x4c7051.viewportScrollY ?? 0,
          );
        },
      );
      return (0, a.toDisposable)(() => _0x13ca7a.unsubscribe());
    },
    handleWheel: (_0x2736a2) => {
      var _0x283718;
      if (
        _0x2736a2.source !== "host-scroll-sync" &&
        _0x2736a2.source !== "print-capture" &&
        cr(_0x2736a2.layout, _0x2736a2.event)
      )
        return false;
      let _0x5b12bc =
          ((_0x283718 = _0x2736a2.runtimeScope) == null
            ? undefined
            : _0x283718.injector) ?? _0x1ef285,
        _0x20394a =
          _0x5b12bc !== _0x1ef285 && _0x5b12bc.has(p.IRenderManagerService)
            ? _0x5b12bc.get(p.IRenderManagerService)
            : _0x34d96c;
      if (!_0x20394a) return false;
      let _0x65ded = _0x20394a.getRenderUnitById(_0x2736a2.childUnitId),
        _0x1b31cb = _0x65ded == null ? undefined : _0x65ded.scene;
      return bo(
        _0x2736a2,
        _0x1b31cb == null
          ? undefined
          : _0x1b31cb.getViewport(p.SHEET_VIEWPORT_KEY["VIEW_MAIN"]),
        _0x1b31cb,
      );
    },
  };
  function _0x26b574(_0x4c16c4) {
    var _0x3fca06, _0x4e0317;
    let _0x173e9d =
        ((_0x3fca06 = _0x4c16c4.runtimeScope) == null
          ? undefined
          : _0x3fca06.injector) ?? _0x1ef285,
      _0x2d67fc =
        _0x173e9d !== _0x1ef285 && _0x173e9d.has(p.IRenderManagerService)
          ? _0x173e9d.get(p.IRenderManagerService)
          : _0x34d96c;
    return _0x2d67fc == null ||
      (_0x4e0317 = _0x2d67fc.getRenderUnitById(_0x4c16c4.childUnitId)) ==
        null ||
      (_0x4e0317 = _0x4e0317.scene) == null
      ? undefined
      : _0x4e0317.getViewport(p.SHEET_VIEWPORT_KEY["VIEW_MAIN"]);
  }
}
function ru(_0x38ae93) {
  let _0x1d8889 = [];
  return (
    [
      ["base", s.SheetsUIMenuSchema, 0],
      ["outline", D.SheetsOutlineUIMenuSchema, 100],
      ["numfmt", F.SheetsNumfmtUIMenuSchema, 100],
      [
        "conditional-formatting",
        M.SheetsConditionalFormattingUIMenuSchema,
        100,
      ],
      ["data-validation", N.SheetsDataValidationUIMenuSchema, 100],
      ["filter", P.SheetsFilterUIMenuSchema, 100],
      ["drawing", ee.SheetsDrawingUIMenuSchema, 100],
      ["sort", I.SheetsSortUIMenuSchema, 100],
      ["hyper-link", te.SheetsHyperLinkUIMenuSchema, 100],
      ["thread-comment", re.SheetsThreadCommentUIMenuSchema, 100],
      ["table", ne.SheetsTableUIMenuSchema, 100],
      ["note", b.SheetsNoteUIMenuSchema, 100],
      ["print", k.SheetsPrintMenuSchema, 100],
      ["pivot-table", O.SheetsPivotTableUIMenuSchema, 100],
      ["chart", E.SheetsChartUIMenuSchema, 100],
      ["sparkline", j.SheetsSparklineUIMenuSchema, 100],
      ["shape", A.SheetsShapeUIMenuSchema, 100],
      ["shape-contextual-ribbon", A.SheetsShapeUIContextualRibbonSchema, 100],
    ].forEach(([_0x4160f9, _0x7a9142, _0x56e1fa]) => {
      let _0x16c08e = On(_0x38ae93, {
        id: "embed.sheets." + _0x4160f9,
        childType: a.UniverInstanceType["UNIVER_SHEET"],
        surface: "ribbon",
        order: _0x56e1fa,
        menuSchema: _0x7a9142,
      });
      _0x16c08e && _0x1d8889.push(_0x16c08e);
    }),
    (0, a.toDisposable)(() =>
      _0x1d8889.forEach((_0x38d6c5) => _0x38d6c5.dispose()),
    )
  );
}
function iu() {
  return {
    ...ws({
      childType: a.UniverInstanceType["UNIVER_SHEET"],
      productName: "Sheets",
    }),
    presentationPolicy: {
      getChromeCss: () =>
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22formula-bar\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-embed-canvas-root]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
      activateNavigationAtPoint: ({
        childContext: _0x15d71d,
        clientX: _0xe37dd4,
        clientY: _0x375bdc,
        runtimeHost: _0x16d945,
      }) => {
        let _0x453ec4 = ks(
            _0x16d945,
            "[data-u-comp=\x22slide-tab-item\x22]",
            _0xe37dd4,
            _0x375bdc,
          ),
          _0x10e02a = _0x453ec4 == null ? undefined : _0x453ec4.dataset["id"],
          _0x4c9be3 = _0x15d71d.runtimeScope["commandService"];
        return !_0x10e02a || !_0x4c9be3
          ? false
          : _0x4c9be3.syncExecuteCommand(v.SetWorksheetActiveOperation["id"], {
              unitId: _0x15d71d.childUnitId,
              subUnitId: _0x10e02a,
            }) !== false;
      },
    },
  };
}
function au(_0x54a905) {
  return {
    childType: a.UniverInstanceType["UNIVER_SHEET"],
    supportedLayouts: ["tab-peer", "docs-sticky-sheet", "scroll-contained"],
    canvasRootClassName: "univer-bg-gray-0 dark:!univer-bg-gray-900",
    scopedDependencies: [
      [s.ISheetBarService, { useClass: s.SheetBarService }],
      [s.SheetCanvasPopManagerService],
    ],
    beforeDeactivate: cu,
    mount: (_0x46a67e) => {
      var _0x59742d;
      let _0x1c72cc = _0x46a67e.runtimeScope["injector"],
        _0x160840 =
          _0x46a67e.runtimeScope["roots"].canvas ??
          _0x46a67e.renderScope["canvasRoot"] ??
          _0x46a67e.renderScope["contentRoot"] ??
          _0x46a67e.renderScope["rootElement"],
        _0x47de88 =
          _0x46a67e.runtimeScope["roots"].content ??
          _0x46a67e.renderScope["contentRoot"] ??
          _0x160840;
      ((_0x160840.dataset["embedChildRenderUnitId"] = _0x46a67e.childUnitId),
        (_0x160840.dataset["embedChildRenderMode"] = "sheet-workbench"),
        (_0x47de88.dataset["embedChildRenderUnitId"] = _0x46a67e.childUnitId),
        (_0x47de88.dataset["embedChildRenderMode"] = "sheet-overlay"));
      let _0xf07b6b = _0x46a67e.injector["get"](
          a.IUniverInstanceService,
        ).getUnit(_0x46a67e.childUnitId, a.UniverInstanceType["UNIVER_SHEET"]),
        _0x5a1407 = _0xf07b6b
          ? Xs(_0x46a67e, _0x54a905, (_0x4385d1) => su(_0xf07b6b, _0x4385d1))
          : (0, a.toDisposable)(() => {}),
        _0xa5e365 =
          bt(_0x46a67e, p.IRenderManagerService, _0x160840, {
            scopedRenderInjector: true,
          }) ?? (0, a.toDisposable)(() => {}),
        _0x13e7b2 = ou(_0x46a67e),
        _0x4a5c0b = du(_0x46a67e, _0x47de88),
        _0x4e67d7 = nn(_0x47de88);
      return (
        _0x4e67d7.render(
          (0, m.jsx)(Kt, {
            injector: _0x1c72cc,
            mountContainer: _0x46a67e.runtimeScope["roots"].popup,
            embedId: _0x46a67e.embedId,
            children: (0, m.jsx)(fu, {
              canvasRoot: _0x160840,
              embedId: _0x46a67e.embedId,
              fullscreen: !!_0x46a67e.renderScope["fullscreen"],
              showChrome: lu(_0x46a67e),
              readonly:
                ((_0x59742d = _0x46a67e.descriptor) == null
                  ? undefined
                  : _0x59742d.mode) === "readonly",
              unitId: _0x46a67e.childUnitId,
            }),
          }),
        ),
        (0, a.toDisposable)(() => {
          (_0x5a1407.dispose(),
            _0x4a5c0b.dispose(),
            _0x13e7b2.dispose(),
            _0xa5e365.dispose(),
            rn(_0x4e67d7),
            _0x160840.isConnected &&
              (_0x160840.removeAttribute("data-embed-child-render-unit-id"),
              _0x160840.removeAttribute("data-embed-child-render-mode")),
            _0x47de88.isConnected &&
              (_0x47de88.removeAttribute("data-embed-child-render-unit-id"),
              _0x47de88.removeAttribute("data-embed-child-render-mode")));
        })
      );
    },
  };
}
function ou(_0x417529) {
  var _0x51dad1;
  if (_0x417529.layout !== "docs-sticky-sheet")
    return (0, a.toDisposable)(() => {});
  let _0x23393d =
    (_0x51dad1 = _0x417529.injector["get"](
      p.IRenderManagerService,
    ).getRenderUnitById(_0x417529.childUnitId)) == null ||
    (_0x51dad1 = _0x51dad1.scene["getViewport"](
      p.SHEET_VIEWPORT_KEY["VIEW_MAIN"],
    )) == null
      ? undefined
      : _0x51dad1.getScrollBar();
  if (!_0x23393d) return (0, a.toDisposable)(() => {});
  let _0x23b008 = _0x23393d.hideTrackWhenUnscrollable;
  return (
    (_0x23393d.hideTrackWhenUnscrollable = true),
    (0, a.toDisposable)(() => {
      _0x23393d.hideTrackWhenUnscrollable = _0x23b008;
    })
  );
}
function su(_0x33c8fc, _0x163830) {
  var _0x1e5274;
  let _0x307783 = _0x163830 == null ? undefined : _0x163830.subUnitId,
    _0x44db1d =
      (_0x307783 ? _0x33c8fc.getSheetBySheetId(_0x307783) : undefined) ??
      _0x33c8fc.getSheets()[0];
  _0x44db1d &&
    ((_0x1e5274 = _0x33c8fc.getActiveSheet(true)) == null
      ? undefined
      : _0x1e5274.getSheetId()) !== _0x44db1d.getSheetId() &&
    _0x33c8fc.setActiveSheet(_0x44db1d);
}
function cu(_0x2a4fc5) {
  var _0x16b3ac, _0x3bf06a;
  ((_0x16b3ac = _0x2a4fc5.runtimeScope["commandService"]) == null ||
    _0x16b3ac.syncExecuteCommand(s.SetCellEditVisibleOperation["id"], {
      visible: false,
      eventType: p.DeviceInputEventType["PointerDown"],
      unitId: _0x2a4fc5.childUnitId,
    }),
    _0x2a4fc5.runtimeScope["injector"].has(s.CellPopupManagerService) &&
      _0x2a4fc5.runtimeScope["injector"]
        .get(s.CellPopupManagerService)
        .hidePopupsForUnit(_0x2a4fc5.childUnitId),
    (_0x3bf06a = _0x2a4fc5.injector["get"](
      p.IRenderManagerService,
    ).getRenderUnitById(_0x2a4fc5.childUnitId)) == null ||
      (_0x3bf06a = _0x3bf06a.scene["getTransformer"]()) == null ||
      _0x3bf06a.clearSelectedObjects());
}
function lu(_0x1ec83c) {
  return (
    _0x1ec83c.renderScope["mode"] === "tab" ||
    !!_0x1ec83c.renderScope["fullscreen"]
  );
}
function uu(_0x57de1e, _0x1bffdc) {
  let _0x323006 = _0x57de1e.style["top"],
    _0x19d5fc = _0x57de1e.style["bottom"];
  return (
    (_0x57de1e.style["top"] = _0x1bffdc.formulaBar ? "28px" : ""),
    (_0x57de1e.style["bottom"] = _0x1bffdc.sheetBar
      ? s.SHEET_FOOTER_BAR_HEIGHT + "px"
      : ""),
    (0, a.toDisposable)(() => {
      ((_0x57de1e.style["top"] = _0x323006),
        (_0x57de1e.style["bottom"] = _0x19d5fc));
    })
  );
}
function du(_0x571d59, _0x407e66) {
  var _0x46f546, _0x129e10;
  return (_0x46f546 = _0x571d59.injector) != null &&
    (_0x129e10 = _0x46f546.has) != null &&
    _0x129e10.call(_0x46f546, Wr)
    ? _0x571d59.injector["get"](Wr).register({
        embedId: _0x571d59.embedId,
        childUnitId: _0x571d59.childUnitId,
        root: _0x571d59.renderScope["rootElement"],
        contentRoot: _0x407e66,
      })
    : (0, a.toDisposable)(() => {});
}
function fu(_0x148b0d) {
  let {
      canvasRoot: _0x4031ce,
      embedId: _0x2d7df4,
      fullscreen: _0x34a47e,
      readonly: _0x34fcb3,
      showChrome: _0x3a3784,
      unitId: _0x33e66f,
    } = _0x148b0d,
    _0x485798 = (0, c.useConfigValue)(s.SHEETS_UI_PLUGIN_CONFIG_KEY),
    _0x1448e7 = (0, c.useDependency)(c.ComponentManager),
    _0x4287f7 = (0, c.useDependency)(Zn),
    _0x2c84c0 = (0, c.useObservable)(
      () => _0x4287f7.session$,
      _0x4287f7.getSession(),
      false,
      [_0x4287f7],
    ),
    _0x4d505c =
      !_0x34a47e &&
      (_0x2c84c0 == null ? undefined : _0x2c84c0.embedId) === _0x2d7df4 &&
      _0x2c84c0.childUnitId === _0x33e66f,
    _0x3bf8e0 =
      _0x1448e7.get("SheetShapeTextEditorContainer") ??
      _0x1448e7.get("ShapeTextEditorContainer"),
    _0x5750af = _0x485798 == null ? undefined : _0x485798.footer,
    _0x4ba6bc = (_0x485798 == null ? undefined : _0x485798.formulaBar) ?? true,
    _0x4d54c5 =
      _0x5750af === false
        ? false
        : ((_0x5750af == null ? undefined : _0x5750af.sheetBar) ?? true),
    _0x3f3d5a = !_0x4d505c && _0x3a3784 && _0x4ba6bc,
    _0x2600d8 = !_0x4d505c && _0x3a3784 && _0x4d54c5;
  return (
    (0, d.useEffect)(() => {
      let _0x52f87f = uu(_0x4031ce, {
        formulaBar: _0x3f3d5a,
        sheetBar: _0x2600d8,
      });
      return () => _0x52f87f.dispose();
    }, [_0x4031ce, _0x3f3d5a, _0x2600d8]),
    _0x4d505c
      ? null
      : (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)("div", {
              className:
                "univer-pointer-events-none\x20univer-absolute\x20univer-inset-0\x20[&>*]:univer-pointer-events-auto",
              "data-u-comp": "sheet-embed-float-dom-root",
              children: (0, m.jsx)(c.FloatDom, { unitId: _0x33e66f }),
            }),
            _0x3f3d5a &&
              (0, m.jsx)("div", {
                className:
                  "univer-absolute\x20univer-inset-x-0\x20univer-top-0\x20univer-z-10",
                style: { height: 28 },
                children: (0, m.jsx)(s.FormulaBar, {}),
              }),
            !_0x34fcb3 && _0x3bf8e0 && (0, m.jsx)(_0x3bf8e0, {}),
            !_0x34fcb3 &&
              !(_0x485798 != null && _0x485798.disableEdit) &&
              (0, m.jsx)(s.EditorContainer, {}),
            !_0x34fcb3 && (0, m.jsx)(s.AutoFillPopupMenu, {}),
            _0x2600d8 &&
              (0, m.jsx)("div", {
                className:
                  "univer-absolute univer-inset-x-0 univer-bottom-0 univer-z-10",
                style: { height: s.SHEET_FOOTER_BAR_HEIGHT },
                children: (0, m.jsx)(s.SheetBar, {}),
              }),
          ],
        })
  );
}
const pu = (0, d.forwardRef)(
    (
      {
        children: _0xfe806,
        className: _0x2209e5,
        title: _0x4b213d,
        onClick: _0x461285,
        onMouseDown: _0x3e0de8,
        onPointerDown: _0x3901fc,
        ..._0x182fe1
      },
      _0x5c2b3f,
    ) =>
      (0, m.jsx)(l.Button, {
        ref: _0x5c2b3f,
        type: "button",
        size: "small",
        variant: "ghost",
        "aria-label": (0, c.useDependency)(a.LocaleService).t(_0x4b213d),
        className: (0, l.clsx)(
          "univer-gap-1 univer-px-1.5 univer-text-sm",
          _0x2209e5,
        ),
        onPointerDown: (_0x208862) => {
          (_0x208862.stopPropagation(),
            _0x3901fc == null || _0x3901fc(_0x208862));
        },
        onMouseDown: (_0x168899) => {
          (_0x168899.stopPropagation(),
            _0x3e0de8 == null || _0x3e0de8(_0x168899));
        },
        onClick: (_0x1ec6db) => {
          (_0x461285 == null || _0x461285(_0x1ec6db),
            _0x1ec6db.stopPropagation());
        },
        ..._0x182fe1,
        children: _0xfe806,
      }),
  ),
  mu = (0, d.forwardRef)(
    (
      {
        title: _0x5970a4,
        primary: _0x43ff38,
        disabled: _0x14accf,
        open: _0x204536,
        onPrimaryClick: _0x33a833,
        onMouseDown: _0x33d784,
        onPointerDown: _0x5bfdbc,
        onClick: _0x52a23f,
        ..._0x3f0c90
      },
      _0x2a008d,
    ) =>
      (0, m.jsxs)("div", {
        ref: _0x2a008d,
        className: (0, l.clsx)(
          "univer-box-border\x20univer-inline-flex\x20univer-h-6\x20univer-cursor-pointer\x20univer-select-none\x20univer-items-center\x20univer-overflow-hidden\x20univer-rounded-md\x20univer-text-sm\x20univer-text-gray-900\x20hover:univer-bg-gray-100\x20dark:!univer-text-gray-0\x20dark:hover:!univer-bg-gray-700",
          {
            "univer-bg-gray-100\x20dark:!univer-bg-gray-700": _0x204536,
            "univer-cursor-not-allowed\x20univer-opacity-60": _0x14accf,
          },
        ),
        onPointerDown: (_0x2f836d) => {
          (_0x2f836d.stopPropagation(),
            _0x5bfdbc == null || _0x5bfdbc(_0x2f836d));
        },
        onMouseDown: (_0x42e372) => {
          (_0x42e372.stopPropagation(),
            _0x33d784 == null || _0x33d784(_0x42e372));
        },
        onClick: (_0x65f154) => {
          (_0x52a23f == null || _0x52a23f(_0x65f154),
            _0x65f154.stopPropagation());
        },
        ..._0x3f0c90,
        children: [
          (0, m.jsx)("button", {
            type: "button",
            "aria-label": _0x5970a4,
            className:
              "univer-box-border univer-flex univer-h-6 univer-w-7 univer-cursor-pointer univer-items-center univer-justify-center univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-900 hover:univer-bg-gray-200 disabled:univer-cursor-not-allowed dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
            disabled: _0x14accf,
            onClick: (_0x402565) => {
              (_0x402565.stopPropagation(), _0x33a833());
            },
            children: _0x43ff38,
          }),
          (0, m.jsx)(l.Separator, { orientation: "vertical" }),
          (0, m.jsx)("button", {
            type: "button",
            "aria-label": _0x5970a4,
            className:
              "univer-box-border univer-flex univer-h-6 univer-w-5 univer-cursor-pointer univer-items-center univer-justify-center univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-900 hover:univer-bg-gray-200 disabled:univer-cursor-not-allowed dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
            disabled: _0x14accf,
            children: (0, m.jsx)(u.MoreDownIcon, {}),
          }),
        ],
      }),
  );
mu.displayName = "FloatingToolbarSplitTrigger";
function hu(_0x370a87) {
  let {
    children: _0x39f4b7,
    title: _0x415ad9,
    className: _0x4530e7,
    disabled: _0x20e2c1,
    active: _0x4343eb,
    onClick: _0x1dea32,
  } = _0x370a87;
  return (0, m.jsx)(da, {
    title: _0x415ad9,
    placement: "bottom",
    children: (0, m.jsx)(c.ToolbarButton, {
      className: (0, l.clsx)("univer-text-sm", _0x4530e7),
      disabled: _0x20e2c1,
      active: _0x4343eb,
      onClick: _0x1dea32,
      children: _0x39f4b7,
    }),
  });
}
function gu(_0x582c32) {
  let {
      item: _0xcdb303,
      children: _0x236148,
      title: _0x5be1eb,
      onClick: _0x37bbfb,
    } = _0x582c32,
    {
      hidden: _0x7db3e,
      disabled: _0x4d88bd,
      activated: _0x1b7722,
    } = _u(_0xcdb303),
    _0x31641e = (0, c.useDependency)(a.LocaleService);
  return !_0xcdb303 || _0x7db3e
    ? null
    : (0, m.jsx)(hu, {
        title: _0x31641e.t(_0x5be1eb),
        disabled: _0x4d88bd,
        active: _0x1b7722,
        onClick: _0x37bbfb,
        children: _0x236148,
      });
}
function _u(_0x38fc99) {
  return {
    hidden: (0, c.useObservable)(
      () => {
        var _0x1fa572;
        return (
          (_0x38fc99 == null || (_0x1fa572 = _0x38fc99.hidden$) == null
            ? undefined
            : _0x1fa572.pipe((0, f.startWith)(false))) ?? (0, f.of)(false)
        );
      },
      false,
      false,
      [_0x38fc99],
    ),
    disabled: (0, c.useObservable)(
      () => {
        var _0x16fa88;
        return (
          (_0x38fc99 == null || (_0x16fa88 = _0x38fc99.disabled$) == null
            ? undefined
            : _0x16fa88.pipe((0, f.startWith)(false))) ?? (0, f.of)(false)
        );
      },
      false,
      false,
      [_0x38fc99],
    ),
    activated: (0, c.useObservable)(
      () => {
        var _0x5a1978;
        return (
          (_0x38fc99 == null || (_0x5a1978 = _0x38fc99.activated$) == null
            ? undefined
            : _0x5a1978.pipe((0, f.startWith)(false))) ?? (0, f.of)(false)
        );
      },
      false,
      false,
      [_0x38fc99],
    ),
    value: (0, c.useObservable)(
      () => {
        var _0x27fff6;
        return (
          (_0x38fc99 == null || (_0x27fff6 = _0x38fc99.value$) == null
            ? undefined
            : _0x27fff6.pipe((0, f.startWith)(undefined))) ??
          (0, f.of)(undefined)
        );
      },
      undefined,
      false,
      [_0x38fc99],
    ),
  };
}
function vu(_0x3348f1) {
  return _0x3348f1.tooltip ?? _0x3348f1.title ?? _0x3348f1.id;
}
function yu(_0x46ca3c) {
  return typeof _0x46ca3c.label == "string"
    ? _0x46ca3c.label
    : typeof _0x46ca3c.value == "string" || typeof _0x46ca3c.value == "number"
      ? String(_0x46ca3c.value)
      : (_0x46ca3c.id ?? "");
}
function bu(_0x2c3ba1) {
  return _0x2c3ba1 === a.WrapStrategy["CLIP"]
    ? (0, m.jsx)(u.TruncationIcon, {})
    : _0x2c3ba1 === a.WrapStrategy["WRAP"]
      ? (0, m.jsx)(u.AutowrapIcon, {})
      : (0, m.jsx)(u.OverflowIcon, {});
}
function xu(_0xb556c5) {
  return (
    _0xb556c5 instanceof HTMLElement &&
    !!_0xb556c5.closest(
      'button, input, textarea, [contenteditable="true"], [role="button"], [role="combobox"], [data-u-comp="select"], .univer-select',
    )
  );
}
function Su(_0x1404bb) {
  (_0x1404bb.stopPropagation(),
    xu(_0x1404bb.target) || _0x1404bb.preventDefault());
}
function Cu(_0x578cc5, _0x4f1191) {
  if (!(_0x578cc5 instanceof HTMLElement)) return false;
  let _0x41ba90 = _0x578cc5.closest(
    "[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22]",
  );
  return (
    (_0x41ba90 == null
      ? undefined
      : _0x41ba90.getAttribute("data-embed-id")) === _0x4f1191
  );
}
function wu(_0x164921, _0x34f26e) {
  let _0x456379 = _0x164921.target;
  Cu(_0x456379, _0x34f26e) && _0x164921.preventDefault();
}
function Tu(_0x477356) {
  let {
    embedId: _0x12735d,
    children: _0xf765bc,
    onPointerDown: _0x111771,
  } = _0x477356;
  return (0, m.jsx)("section", {
    "data-embed-id": _0x12735d,
    "data-embed-floating-menu-popup": "true",
    className:
      "univer-box-border univer-grid univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-2 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onPointerDown: _0x111771,
    onMouseDown: Su,
    children: _0xf765bc,
  });
}
function Eu(_0x2d7b35) {
  let { children: _0x53f043 } = _0x2d7b35;
  return (0, m.jsx)("div", {
    className: "univer-flex\x20univer-items-center\x20univer-gap-1",
    children: _0x53f043,
  });
}
function Du(_0x1f9805) {
  let {
      embedId: _0x18d857,
      title: _0x29805c,
      trigger: _0x2686e5,
      overlay: _0xb46c72,
      disabled: _0x43e919,
      triggerClassName: _0x343acd,
      open: _0x3d57a4,
      onOpenChange: _0x5944f9,
    } = _0x1f9805,
    _0x1ae5d2 = (0, c.useDependency)(a.LocaleService),
    _0x3576b8 = (0, m.jsx)(l.Dropdown, {
      disabled: _0x43e919,
      align: "start",
      sideOffset: 6,
      open: _0x3d57a4,
      onOpenChange: _0x5944f9,
      onPointerDownOutside: (_0x411226) => wu(_0x411226, _0x18d857),
      onFocusOutside: (_0x32a0bc) => wu(_0x32a0bc, _0x18d857),
      onInteractOutside: (_0x54f581) => wu(_0x54f581, _0x18d857),
      overlay: (0, m.jsx)("div", {
        "data-embed-id": _0x18d857,
        "data-embed-floating-menu-popup": "true",
        onPointerDown: Su,
        onMouseDown: Su,
        children: _0xb46c72,
      }),
      children: (0, m.jsx)(pu, {
        title: _0x29805c,
        "data-state": _0x3d57a4 ? "open" : "closed",
        disabled: _0x43e919,
        className: _0x343acd,
        children: _0x2686e5,
      }),
    });
  return (0, m.jsx)(da, {
    title: _0x1ae5d2.t(_0x29805c),
    placement: "bottom",
    children: _0x3576b8,
  });
}
function Ou(_0xc1fbf2) {
  let { children: _0xf948e1 } = _0xc1fbf2;
  return (0, m.jsx)("section", {
    className:
      "univer-box-border\x20univer-grid\x20univer-min-w-32\x20univer-gap-0.5\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
    onPointerDown: Su,
    onMouseDown: Su,
    children: _0xf948e1,
  });
}
function ku(_0x40f76a) {
  let { children: _0x5ce390 } = _0x40f76a;
  return (0, m.jsx)("section", {
    className:
      "univer-box-border univer-grid univer-min-w-44 univer-gap-0.5 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onPointerDown: Su,
    onMouseDown: Su,
    children: _0x5ce390,
  });
}
function Au(_0x19b398) {
  let { children: _0x127fef, icon: _0x33f649, onClick: _0x4b63a3 } = _0x19b398;
  return (0, m.jsxs)("button", {
    type: "button",
    className:
      "univer-box-border univer-grid univer-h-7 univer-w-full univer-grid-cols-[1.5rem_1fr] univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
    onClick: _0x4b63a3,
    children: [
      (0, m.jsx)("span", {
        className: "univer-flex univer-items-center univer-justify-center",
        children: _0x33f649,
      }),
      (0, m.jsx)("span", { className: "univer-truncate", children: _0x127fef }),
    ],
  });
}
function ju(_0x5bc69a) {
  let {
    children: _0x1ec4cb,
    icon: _0x287ee6,
    active: _0x44e275,
    onClick: _0x489c85,
  } = _0x5bc69a;
  return (0, m.jsxs)("button", {
    type: "button",
    className: (0, l.clsx)(
      "univer-box-border univer-flex univer-h-7 univer-w-full univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
      { "!univer-bg-gray-200\x20dark:!univer-bg-gray-500": _0x44e275 },
    ),
    onClick: _0x489c85,
    children: [_0x287ee6, _0x1ec4cb],
  });
}
function Mu(_0x5697d4) {
  let {
    title: _0x1ea20c,
    active: _0x56b6ed,
    disabled: _0xcb984a,
    children: _0x2fcd45,
    onClick: _0x38f594,
  } = _0x5697d4;
  return (0, m.jsx)(da, {
    title: (0, c.useDependency)(a.LocaleService).t(_0x1ea20c),
    placement: "bottom",
    children: (0, m.jsx)(c.ToolbarButton, {
      className: "univer-size-7",
      disabled: _0xcb984a,
      active: _0x56b6ed,
      onClick: _0x38f594,
      children: _0x2fcd45,
    }),
  });
}
function Nu() {
  return [...s.BORDER_LINE_CHILDREN];
}
function Pu() {
  return [...c.FONT_SIZE_LIST];
}
function Fu(_0x57f4c8) {
  return !_0x57f4c8 ||
    !("selections" in _0x57f4c8) ||
    !Array.isArray(_0x57f4c8.selections)
    ? []
    : _0x57f4c8.selections;
}
function Iu(_0x52506f) {
  let { menuItem: _0x51cc00, onClick: _0x4ae3f1 } = _0x52506f,
    {
      hidden: _0x115396,
      disabled: _0x4b0d05,
      value: _0x3b8bca,
    } = _u(_0x51cc00),
    _0x36ac44 = (0, c.useDependency)(a.LocaleService);
  if (!_0x51cc00 || _0x115396) return null;
  let _0x4f2ade = _0x36ac44.t("embed-ui.sheetsFloating.toolbar.numberFormat");
  return (0, m.jsx)(da, {
    title: _0x4f2ade,
    placement: "bottom",
    children: (0, m.jsxs)(pu, {
      title: _0x4f2ade,
      disabled: _0x4b0d05,
      onClick: _0x4ae3f1,
      children: [
        (0, m.jsx)(u.NumberIcon, {}),
        (0, m.jsx)("span", {
          children:
            typeof _0x3b8bca == "string" && _0x3b8bca ? _0x3b8bca : "General",
        }),
        (0, m.jsx)(u.MoreDownIcon, {}),
      ],
    }),
  });
}
function Lu(_0x31c14a) {
  let {
      embedId: _0x4cbddd,
      menuItem: _0x1d6707,
      title: _0x65e4b0,
      open: _0x56c0b1,
      onOpenChange: _0x4a45f0,
      onSelect: _0x41c7d8,
    } = _0x31c14a,
    {
      hidden: _0x5b93b5,
      disabled: _0xcb3ae7,
      value: _0x312710,
    } = _u(_0x1d6707);
  if (!_0x1d6707 || _0x5b93b5) return null;
  let _0x3c3e32 =
    typeof _0x312710 == "string" && _0x312710 ? _0x312710 : "Arial";
  return (0, m.jsx)(Du, {
    embedId: _0x4cbddd,
    disabled: _0xcb3ae7,
    title: _0x65e4b0,
    open: _0x56c0b1,
    onOpenChange: _0x4a45f0,
    trigger: (0, m.jsxs)(m.Fragment, {
      children: [
        (0, m.jsx)("span", {
          className: "univer-w-28 univer-truncate univer-text-left",
          children: _0x3c3e32,
        }),
        (0, m.jsx)(u.MoreDownIcon, {}),
      ],
    }),
    overlay: (0, m.jsx)("div", {
      className:
        "univer-box-border univer-max-h-72 univer-min-w-44 univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900 [&_button]:!univer-h-7 [&_button]:!univer-px-2 [&_ul]:!univer-text-sm",
      onPointerDown: Su,
      onMouseDown: Su,
      children: (0, m.jsx)(c.FontFamilyItem, {
        value: _0x3c3e32,
        onChange: (_0x4ebbe5) => {
          (_0x41c7d8(_0x4ebbe5), _0x4a45f0(false));
        },
      }),
    }),
  });
}
function Ru(_0x48b5a6) {
  let {
      embedId: _0x4bf8b1,
      menuItem: _0x8174a8,
      title: _0x2241dc,
      open: _0x5b74ed,
      onOpenChange: _0x225aff,
      onSelect: _0x3f72fc,
    } = _0x48b5a6,
    {
      hidden: _0x2424e5,
      disabled: _0x44fda5,
      value: _0x221316,
    } = _u(_0x8174a8);
  if (!_0x8174a8 || _0x2424e5) return null;
  let _0x534dce =
    typeof _0x221316 == "number" || typeof _0x221316 == "string"
      ? Number(_0x221316)
      : 11;
  return (0, m.jsx)(Du, {
    embedId: _0x4bf8b1,
    disabled: _0x44fda5,
    title: _0x2241dc,
    open: _0x5b74ed,
    onOpenChange: _0x225aff,
    trigger: (0, m.jsxs)(m.Fragment, {
      children: [
        (0, m.jsx)("span", {
          className: "univer-min-w-6 univer-text-left",
          children: _0x534dce,
        }),
        (0, m.jsx)(u.MoreDownIcon, {}),
      ],
    }),
    overlay: (0, m.jsx)("div", {
      className:
        "univer-box-border univer-max-h-72 univer-min-w-20 univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      onPointerDown: Su,
      onMouseDown: Su,
      children: Pu().map((_0xbb4200) => {
        let _0x2f3f8f = Number(_0xbb4200.value) === _0x534dce;
        return (0, m.jsxs)(
          "button",
          {
            type: "button",
            className: (0, l.clsx)(
              "univer-grid univer-h-7 univer-w-full univer-grid-cols-[1fr_1rem] univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
              { "univer-bg-gray-100\x20dark:!univer-bg-gray-700": _0x2f3f8f },
            ),
            onClick: () => {
              (_0x3f72fc(String(_0xbb4200.value)), _0x225aff(false));
            },
            children: [
              (0, m.jsx)("span", { children: _0xbb4200.label }),
              _0x2f3f8f &&
                (0, m.jsx)(u.CheckMarkIcon, {
                  className: "univer-text-primary-600",
                }),
            ],
          },
          _0xbb4200.value,
        );
      }),
    }),
  });
}
function zu(_0x516244) {
  let {
      embedId: _0x16ae9d,
      menuItem: _0x48965c,
      open: _0x49b98f,
      onOpenChange: _0x24f516,
      execute: _0x45b06f,
    } = _0x516244,
    { hidden: _0x3bd44c, disabled: _0xdaa748 } = _u(_0x48965c);
  return !_0x48965c || _0x3bd44c
    ? null
    : (0, m.jsx)(Du, {
        embedId: _0x16ae9d,
        disabled: _0xdaa748,
        title: "embed-ui.sheetsFloating.toolbar.horizontalAlignMode.main",
        triggerClassName: "univer-gap-0.5\x20univer-px-1",
        open: _0x49b98f,
        onOpenChange: _0x24f516,
        trigger: (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)(u.LeftJustifyingIcon, {}),
            (0, m.jsx)(u.MoreDownIcon, {}),
          ],
        }),
        overlay: (0, m.jsx)(Tu, {
          embedId: _0x16ae9d,
          onPointerDown: (_0x3e7ada) => _0x3e7ada.stopPropagation(),
          children: (0, m.jsxs)(Eu, {
            children: [
              (0, m.jsx)(Vu, {
                item: _0x48965c,
                title: "embed-ui.sheetsFloating.align.left",
                onClick: () =>
                  _0x45b06f(_0x48965c, { value: a.HorizontalAlign["LEFT"] }),
                children: (0, m.jsx)(u.LeftJustifyingIcon, {}),
              }),
              (0, m.jsx)(Vu, {
                item: _0x48965c,
                title: "embed-ui.sheetsFloating.align.center",
                onClick: () =>
                  _0x45b06f(_0x48965c, { value: a.HorizontalAlign["CENTER"] }),
                children: (0, m.jsx)(u.HorizontallyIcon, {}),
              }),
              (0, m.jsx)(Vu, {
                item: _0x48965c,
                title: "embed-ui.sheetsFloating.align.right",
                onClick: () =>
                  _0x45b06f(_0x48965c, { value: a.HorizontalAlign["RIGHT"] }),
                children: (0, m.jsx)(u.RightJustifyingIcon, {}),
              }),
            ],
          }),
        }),
      });
}
function Bu(_0x1c47ad) {
  let {
      embedId: _0x380e31,
      menuItem: _0x1671f8,
      open: _0x24934c,
      onOpenChange: _0x293a25,
      execute: _0x360d5c,
    } = _0x1c47ad,
    { hidden: _0x4af772, disabled: _0x5e5880 } = _u(_0x1671f8);
  return !_0x1671f8 || _0x4af772
    ? null
    : (0, m.jsx)(Du, {
        embedId: _0x380e31,
        disabled: _0x5e5880,
        title: "embed-ui.sheetsFloating.toolbar.verticalAlignMode.main",
        triggerClassName: "univer-gap-0.5 univer-px-1",
        open: _0x24934c,
        onOpenChange: _0x293a25,
        trigger: (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)(u.VerticalCenterIcon, {}),
            (0, m.jsx)(u.MoreDownIcon, {}),
          ],
        }),
        overlay: (0, m.jsx)(Tu, {
          embedId: _0x380e31,
          onPointerDown: (_0x22eb27) => _0x22eb27.stopPropagation(),
          children: (0, m.jsxs)(Eu, {
            children: [
              (0, m.jsx)(Vu, {
                item: _0x1671f8,
                title: "embed-ui.sheetsFloating.align.top",
                onClick: () =>
                  _0x360d5c(_0x1671f8, { value: a.VerticalAlign["TOP"] }),
                children: (0, m.jsx)(u.AlignTopIcon, {}),
              }),
              (0, m.jsx)(Vu, {
                item: _0x1671f8,
                title: "embed-ui.sheetsFloating.align.middle",
                onClick: () =>
                  _0x360d5c(_0x1671f8, { value: a.VerticalAlign["MIDDLE"] }),
                children: (0, m.jsx)(u.VerticalCenterIcon, {}),
              }),
              (0, m.jsx)(Vu, {
                item: _0x1671f8,
                title: "embed-ui.sheetsFloating.align.bottom",
                onClick: () =>
                  _0x360d5c(_0x1671f8, { value: a.VerticalAlign["BOTTOM"] }),
                children: (0, m.jsx)(u.AlignBottomIcon, {}),
              }),
            ],
          }),
        }),
      });
}
function Vu(_0x375a92) {
  let {
      item: _0x750318,
      title: _0x4890fc,
      children: _0x2f7e0f,
      onClick: _0x34a053,
    } = _0x375a92,
    {
      hidden: _0x37d6ad,
      disabled: _0x55fa4e,
      activated: _0x4b92dc,
    } = _u(_0x750318);
  return !_0x750318 || _0x37d6ad
    ? null
    : (0, m.jsx)(Mu, {
        title: _0x4890fc,
        disabled: _0x55fa4e,
        active: _0x4b92dc,
        onClick: _0x34a053,
        children: _0x2f7e0f,
      });
}
function Hu(_0x427f8b) {
  let {
      embedId: _0x2fb1f6,
      menuItem: _0x1e9463,
      title: _0x389ddc,
      icon: _0x27a13d,
      defaultColor: _0x2da1bb,
      open: _0x4b1535,
      onOpenChange: _0x1fb08d,
      onChange: _0x393e3b,
      onReset: _0x428279,
    } = _0x427f8b,
    _0xe34904 = (0, c.useDependency)(a.LocaleService),
    {
      hidden: _0x3f3847,
      disabled: _0x3dbb18,
      value: _0x168635,
    } = _u(_0x1e9463),
    [_0x471068, _0x4bc020] = (0, d.useState)(_0x2da1bb);
  if (!_0x1e9463 || _0x3f3847) return null;
  let _0x28cbd9 = (0, m.jsx)(l.Dropdown, {
    disabled: _0x3dbb18,
    align: "start",
    sideOffset: 6,
    open: _0x4b1535,
    onOpenChange: _0x1fb08d,
    onPointerDownOutside: (_0x403b1b) => wu(_0x403b1b, _0x2fb1f6),
    onFocusOutside: (_0x586a43) => wu(_0x586a43, _0x2fb1f6),
    onInteractOutside: (_0x122c6b) => wu(_0x122c6b, _0x2fb1f6),
    overlay: (0, m.jsxs)("div", {
      "data-embed-id": _0x2fb1f6,
      "data-embed-floating-menu-popup": "true",
      className:
        "univer-box-border univer-w-72 univer-overflow-hidden univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-3 univer-shadow-lg dark:!univer-bg-gray-900",
      onPointerDown: Su,
      onMouseDown: Su,
      children: [
        (0, m.jsx)(l.ColorPicker, {
          value:
            typeof _0x168635 == "string" && _0x168635 ? _0x168635 : _0x471068,
          onChange: (_0x2a9398) => {
            (_0x4bc020(_0x2a9398), _0x393e3b(_0x2a9398));
          },
        }),
        (0, m.jsx)(l.Separator, {}),
        (0, m.jsxs)("button", {
          type: "button",
          className:
            "univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-1 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
          onClick: () => {
            (_0x4bc020(_0x2da1bb), _0x428279(), _0x1fb08d(false));
          },
          children: [
            (0, m.jsx)(u.NoColorDoubleIcon, {}),
            (0, m.jsx)("span", {
              children: _0xe34904.t(
                "embed-ui.sheetsFloating.toolbar.resetColor",
              ),
            }),
          ],
        }),
      ],
    }),
    children: (0, m.jsx)(pu, {
      title: _0x389ddc,
      disabled: _0x3dbb18,
      children: _0x27a13d,
    }),
  });
  return (0, m.jsx)(da, {
    title: _0xe34904.t(_0x389ddc),
    placement: "bottom",
    children: _0x28cbd9,
  });
}
function Uu(_0x214a35) {
  let {
      embedId: _0x3e67cb,
      menuItem: _0x3cf734,
      open: _0xaca64,
      onOpenChange: _0x1371b6,
      onSelect: _0x46b6a7,
    } = _0x214a35,
    _0x573674 = (0, c.useDependency)(a.LocaleService),
    _0x58beee = (0, c.useDependency)(c.IconManager),
    { hidden: _0x1f226b, disabled: _0x27dbbb } = _u(_0x3cf734),
    [_0x5b00a9, _0x41b1d5] = (0, d.useState)(a.BorderType["ALL"]),
    [_0x160cf4, _0x3cb88b] = (0, d.useState)(a.BorderStyleTypes["THIN"]),
    [_0xc462bf, _0x407944] = (0, d.useState)("#000000");
  if (!_0x3cf734 || _0x1f226b) return null;
  let _0x158ef6 = (
      _0x581dca = _0x5b00a9,
      _0x4b14da = _0x160cf4,
      _0xb05f51 = _0xc462bf,
    ) => {
      (_0x41b1d5(_0x581dca),
        _0x3cb88b(_0x4b14da),
        _0x407944(_0xb05f51),
        _0x46b6a7(_0x581dca, _0x4b14da, _0xb05f51));
    },
    _0x150806 = (_0x1d8212) => {
      var _0x4cd3cf;
      return (
        ((_0x4cd3cf = Nu().find(
          (_0x14c9f2) => _0x14c9f2.value === _0x1d8212,
        )) == null
          ? undefined
          : _0x4cd3cf.icon) ?? "AllBorderIcon"
      );
    },
    _0x3dc904 = (_0x23683c, _0xa6b9ba = "univer-fill-primary-600") => {
      let _0xf6fdbf = _0x58beee.get(_0x23683c);
      return _0xf6fdbf
        ? (0, m.jsx)(_0xf6fdbf, { className: _0xa6b9ba })
        : (0, m.jsx)(u.NoBorderIcon, {});
    },
    _0x1989ba = (0, m.jsx)(l.Dropdown, {
      disabled: _0x27dbbb,
      align: "start",
      sideOffset: 6,
      open: _0xaca64,
      onOpenChange: _0x1371b6,
      onPointerDownOutside: (_0x213106) => wu(_0x213106, _0x3e67cb),
      onFocusOutside: (_0x5d09ba) => wu(_0x5d09ba, _0x3e67cb),
      onInteractOutside: (_0x4c7ae5) => wu(_0x4c7ae5, _0x3e67cb),
      overlay: (0, m.jsxs)(Tu, {
        embedId: _0x3e67cb,
        onPointerDown: (_0x1db49a) => _0x1db49a.stopPropagation(),
        children: [
          (0, m.jsx)("div", {
            className:
              "univer-grid univer-grid-cols-5 univer-gap-2 univer-text-gray-600 dark:!univer-text-gray-200",
            children: Nu().map((_0x540d85) =>
              (0, m.jsx)(
                Mu,
                {
                  title: _0x540d85.label,
                  active: _0x5b00a9 === _0x540d85.value,
                  onClick: () => _0x158ef6(_0x540d85.value),
                  children: _0x3dc904(_0x540d85.icon),
                },
                _0x540d85.value,
              ),
            ),
          }),
          (0, m.jsx)(l.Separator, {}),
          (0, m.jsxs)(Eu, {
            children: [
              (0, m.jsx)(l.Dropdown, {
                align: "start",
                sideOffset: 6,
                onPointerDownOutside: (_0x539ea1) => wu(_0x539ea1, _0x3e67cb),
                onFocusOutside: (_0x1e6da6) => wu(_0x1e6da6, _0x3e67cb),
                onInteractOutside: (_0x56665e) => wu(_0x56665e, _0x3e67cb),
                overlay: (0, m.jsx)("div", {
                  "data-embed-id": _0x3e67cb,
                  "data-embed-floating-menu-popup": "true",
                  className:
                    "univer-overflow-hidden\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-p-4\x20univer-shadow-lg\x20dark:!univer-bg-gray-900",
                  onPointerDown: Su,
                  onMouseDown: Su,
                  children: (0, m.jsx)(l.ColorPicker, {
                    value: _0xc462bf,
                    onChange: (_0x5b2472) =>
                      _0x158ef6(_0x5b00a9, _0x160cf4, _0x5b2472),
                  }),
                }),
                children: (0, m.jsxs)(Mu, {
                  title: "embed-ui.sheetsFloating.borderLine.borderColor",
                  active: false,
                  onClick: () => undefined,
                  children: [
                    (0, m.jsx)(u.PaintBucketDoubleIcon, {
                      extend: { colorChannel1: _0xc462bf },
                    }),
                    (0, m.jsx)(u.MoreDownIcon, {}),
                  ],
                }),
              }),
              (0, m.jsx)(l.Dropdown, {
                align: "start",
                sideOffset: 6,
                onPointerDownOutside: (_0x487cdc) => wu(_0x487cdc, _0x3e67cb),
                onFocusOutside: (_0x5478aa) => wu(_0x5478aa, _0x3e67cb),
                onInteractOutside: (_0x28ecf9) => wu(_0x28ecf9, _0x3e67cb),
                overlay: (0, m.jsx)("div", {
                  "data-embed-id": _0x3e67cb,
                  "data-embed-floating-menu-popup": "true",
                  className:
                    "univer-box-border univer-grid univer-min-w-48 univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1.5 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
                  onPointerDown: Su,
                  onMouseDown: Su,
                  children: s.BORDER_SIZE_CHILDREN["map"]((_0xbd7f9) =>
                    (0, m.jsx)(
                      "button",
                      {
                        type: "button",
                        className: (0, l.clsx)(
                          "univer-relative\x20univer-flex\x20univer-h-8\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center\x20univer-rounded\x20univer-border-none\x20univer-bg-transparent\x20univer-px-2\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700",
                          {
                            "univer-bg-gray-200\x20dark:!univer-bg-gray-600":
                              _0x160cf4 === _0xbd7f9.value,
                          },
                        ),
                        onClick: () => _0x158ef6(_0x5b00a9, _0xbd7f9.value),
                        children: (0, m.jsx)(s.BorderLine, {
                          className:
                            "univer-fill-gray-900 dark:!univer-fill-gray-0",
                          type: _0xbd7f9.value,
                        }),
                      },
                      _0xbd7f9.value,
                    ),
                  ),
                }),
                children: (0, m.jsxs)(Mu, {
                  title: "embed-ui.sheetsFloating.borderLine.borderSize",
                  active: false,
                  onClick: () => undefined,
                  children: [
                    (0, m.jsx)(s.BorderLine, {
                      className:
                        "univer-fill-gray-900 dark:!univer-fill-gray-0",
                      type: _0x160cf4,
                    }),
                    (0, m.jsx)(u.MoreDownIcon, {}),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      children: (0, m.jsx)(mu, {
        title: _0x573674.t("embed-ui.sheetsFloating.toolbar.border.main"),
        disabled: _0x27dbbb,
        open: _0xaca64,
        primary: _0x3dc904(
          _0x150806(_0x5b00a9),
          "univer-text-gray-900\x20dark:!univer-text-gray-0",
        ),
        onPrimaryClick: () => {
          (_0x158ef6(), _0x1371b6(false));
        },
      }),
    });
  return (0, m.jsx)(da, {
    title: _0x573674.t("embed-ui.sheetsFloating.toolbar.border.main"),
    placement: "bottom",
    children: _0x1989ba,
  });
}
function Wu(_0x5cf71e) {
  let {
      embedId: _0x2843e2,
      menuItems: _0x4b1fd7,
      open: _0x4dff61,
      onOpenChange: _0x15207b,
      execute: _0x78ca4,
    } = _0x5cf71e,
    _0x2ded52 = (0, c.useDependency)(a.LocaleService),
    { hidden: _0x4658f0, disabled: _0xe65fd } = _u(
      _0x4b1fd7 == null ? undefined : _0x4b1fd7.root,
    ),
    _0x42bc28 = [];
  return (
    [
      {
        item: _0x4b1fd7 == null ? undefined : _0x4b1fd7.all,
        icon: (0, m.jsx)(u.MergeAllIcon, {}),
      },
      {
        item: _0x4b1fd7 == null ? undefined : _0x4b1fd7.vertical,
        icon: (0, m.jsx)(u.VerticalIntegrationIcon, {}),
      },
      {
        item: _0x4b1fd7 == null ? undefined : _0x4b1fd7.horizontal,
        icon: (0, m.jsx)(u.HorizontalMergeIcon, {}),
      },
      {
        item: _0x4b1fd7 == null ? undefined : _0x4b1fd7.unmerge,
        icon: (0, m.jsx)(u.CancelMergeIcon, {}),
      },
    ].forEach(({ item: _0x4bb4de, icon: _0x1f3833 }) => {
      _0x4bb4de && _0x42bc28.push({ item: _0x4bb4de, icon: _0x1f3833 });
    }),
    !(_0x4b1fd7 != null && _0x4b1fd7.root) || _0x4658f0 || !_0x42bc28.length
      ? null
      : (0, m.jsx)(Du, {
          embedId: _0x2843e2,
          disabled: _0xe65fd,
          title: "embed-ui.sheetsFloating.toolbar.mergeCell.main",
          triggerClassName: "univer-gap-0.5 univer-px-1",
          open: _0x4dff61,
          onOpenChange: _0x15207b,
          trigger: (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(u.MergeAllIcon, {}),
              (0, m.jsx)(u.MoreDownIcon, {}),
            ],
          }),
          overlay: (0, m.jsx)(ku, {
            children: _0x42bc28.map(({ item: _0x26f661, icon: _0x2c4f1e }) =>
              (0, m.jsx)(
                Au,
                {
                  icon: _0x2c4f1e,
                  onClick: () => {
                    (_0x78ca4(_0x26f661), _0x15207b(false));
                  },
                  children: _0x2ded52.t(vu(_0x26f661)),
                },
                _0x26f661.id,
              ),
            ),
          }),
        })
  );
}
function Gu(_0x24e953) {
  let {
      embedId: _0x5c0f73,
      menuItem: _0x1981dc,
      open: _0xc9c02f,
      onOpenChange: _0x2eb90b,
      execute: _0x1ab618,
    } = _0x24e953,
    _0x1abe3f = (0, c.useDependency)(a.LocaleService),
    { hidden: _0x2d7f42, disabled: _0x43ed2c } = _u(_0x1981dc);
  if (!_0x1981dc || _0x2d7f42) return null;
  let _0x2e8ade = Fu(_0x1981dc),
    _0x50d801 = _0x2e8ade.length
      ? _0x2e8ade.map((_0x5a37ac) => ({
          label: _0x1abe3f.t(yu(_0x5a37ac)),
          icon: bu(_0x5a37ac.value),
          commandId:
            _0x5a37ac.commandId ??
            (_0x1981dc == null ? undefined : _0x1981dc.commandId) ??
            (_0x1981dc == null ? undefined : _0x1981dc.id) ??
            v.SetTextWrapCommand["id"],
          params: _0x5a37ac.params ?? { value: _0x5a37ac.value },
        }))
      : [
          {
            label: _0x1abe3f.t("embed-ui.sheetsFloating.textWrap.clip"),
            icon: (0, m.jsx)(u.TruncationIcon, {}),
            commandId: v.SetTextWrapCommand["id"],
            params: { value: a.WrapStrategy["CLIP"] },
          },
          {
            label: _0x1abe3f.t("embed-ui.sheetsFloating.textWrap.overflow"),
            icon: (0, m.jsx)(u.OverflowIcon, {}),
            commandId: v.SetTextWrapCommand["id"],
            params: { value: a.WrapStrategy["OVERFLOW"] },
          },
          {
            label: _0x1abe3f.t("embed-ui.sheetsFloating.textWrap.wrap"),
            icon: (0, m.jsx)(u.AutowrapIcon, {}),
            commandId: v.SetTextWrapCommand["id"],
            params: { value: a.WrapStrategy["WRAP"] },
          },
        ];
  return (0, m.jsx)(Du, {
    embedId: _0x5c0f73,
    disabled: _0x43ed2c,
    title: "embed-ui.sheetsFloating.toolbar.textWrapMode.main",
    triggerClassName: "univer-gap-0.5 univer-px-1",
    open: _0xc9c02f,
    onOpenChange: _0x2eb90b,
    trigger: (0, m.jsxs)(m.Fragment, {
      children: [
        (0, m.jsx)(u.AutowrapIcon, {}),
        (0, m.jsx)(u.MoreDownIcon, {}),
      ],
    }),
    overlay: (0, m.jsx)(Ou, {
      children: _0x50d801.map((_0x25db62) => {
        var _0xcaa1e;
        return (0, m.jsx)(
          ju,
          {
            icon: _0x25db62.icon,
            onClick: () => {
              (_0x1ab618(_0x25db62.commandId, _0x25db62.params),
                _0x2eb90b(false));
            },
            children: _0x25db62.label,
          },
          _0x25db62.commandId +
            "-" +
            String(
              ((_0xcaa1e = _0x25db62.params) == null
                ? undefined
                : _0xcaa1e.value) ?? _0x25db62.label,
            ),
        );
      }),
    }),
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
    filter: "sheet.command.smart-toggle-filter",
  },
  qu = {
    root: v.AddWorksheetMergeCommand["id"],
    all: v.AddWorksheetMergeAllCommand["id"],
    vertical: v.AddWorksheetMergeVerticalCommand["id"],
    horizontal: v.AddWorksheetMergeHorizontalCommand["id"],
    unmerge: v.RemoveWorksheetMergeCommand["id"],
  };
function Ju(_0x1f12b4) {
  let _0x1caa27 = {},
    _0x1573a0 = (_0x5ed884) => {
      let _0x513863 = _0x1f12b4.find((_0x24e3ba) => {
        let _0x16c965 = _0x24e3ba.item;
        return (
          _0x24e3ba.key === _0x5ed884 ||
          (_0x16c965 == null ? undefined : _0x16c965.id) === _0x5ed884 ||
          (_0x16c965 == null ? undefined : _0x16c965.commandId) === _0x5ed884
        );
      });
      return _0x513863 == null ? undefined : _0x513863.item;
    };
  Object.keys(Ku).forEach((_0x15916f) => {
    _0x1caa27[_0x15916f] = _0x1573a0(Ku[_0x15916f]);
  });
  let _0x2ec527 = Object.entries(qu).reduce(
    (_0xedd213, [_0x10de76, _0x2ced39]) => {
      let _0x13a82a = _0x1573a0(_0x2ced39);
      return (_0x13a82a && (_0xedd213[_0x10de76] = _0x13a82a), _0xedd213);
    },
    {},
  );
  return (
    Qu(_0x2ec527) && (_0x1caa27.merge = _0x2ec527),
    (_0x1caa27.deleteBlock = true),
    _0x1caa27
  );
}
const Yu = [
  { items: ["formatPainter"] },
  { dividerBefore: "divider-format-tools", items: ["numberFormat"] },
  {
    dividerBefore: "divider-format",
    items: ["fontFamily", "fontSize", "bold"],
  },
  {
    dividerBefore: "divider-font",
    items: ["textColor", "backgroundColor", "borderComposite"],
  },
  {
    dividerBefore: "divider-border",
    items: ["merge", "horizontalAlign", "verticalAlign", "wrap"],
  },
  { dividerBefore: "divider-layout", items: ["filter"] },
  { dividerBefore: "divider-block", items: ["deleteBlock"] },
];
function Xu(_0x59be59) {
  let _0x8776ee = [];
  return (
    Yu.forEach((_0x4f4d70) => {
      let _0x4bd1d0 = _0x4f4d70.items["filter"]((_0x8716e4) =>
        Zu(_0x59be59, _0x8716e4),
      ).map((_0xc51122) => ({
        id: _0xc51122,
        type:
          _0xc51122 === "formatPainter" ||
          _0xc51122 === "bold" ||
          _0xc51122 === "filter" ||
          _0xc51122 === "deleteBlock"
            ? "button"
            : "dropdown",
      }));
      _0x4bd1d0.length &&
        (_0x8776ee.length &&
          _0x4f4d70.dividerBefore &&
          _0x8776ee.push({ id: _0x4f4d70.dividerBefore, type: "divider" }),
        _0x8776ee.push(..._0x4bd1d0));
    }),
    _0x8776ee
  );
}
function Zu(_0x3b74e1, _0x589882) {
  return !!_0x3b74e1[_0x589882];
}
function Qu(_0x370987) {
  return Object.values(_0x370987).some(Boolean);
}
function $u(_0x490424, _0x5711b0) {
  if (_0x490424)
    return {
      commandId: _0x490424.commandId ?? _0x490424.id,
      params:
        _0x5711b0 ??
        (typeof _0x490424.params == "function"
          ? _0x490424.params()
          : _0x490424.params),
    };
}
function ed() {
  return Tc({ childType: a.UniverInstanceType["UNIVER_SHEET"], mount: td });
}
function td(_0x2f1625) {
  let { menu: _0xd38c4e, portalContainer: _0x338189 } = Sc(_0x2f1625),
    _0x2356c6 = nn(_0xd38c4e);
  return (
    _0x2356c6.render(
      (0, d.createElement)(
        Kt,
        {
          injector: _0x2f1625.runtimeScope["injector"],
          mountContainer: _0x338189,
          embedId: _0x2f1625.embedId,
        },
        (0, d.createElement)(rd, {
          hostUnitId: _0x2f1625.hostUnitId,
          embedId: _0x2f1625.embedId,
          childUnitId: _0x2f1625.childUnitId,
          entry: _0x2f1625.descriptor["entry"],
          fullscreen: !!_0x2f1625.renderScope["fullscreen"],
          usesDomFloatingStage: nd(_0x2f1625.descriptor["entry"]),
          renderScopeActive$: _0x2f1625.renderScope["active$"],
        }),
      ),
    ),
    (0, a.toDisposable)(() => {
      (rn(_0x2356c6), globalThis.setTimeout(() => _0xd38c4e.remove(), 0));
    })
  );
}
function nd(_0x4d2852) {
  return true;
}
function rd(_0x174f5d) {
  let {
      hostUnitId: _0x3856b6,
      embedId: _0x31a9ed,
      childUnitId: _0x4b70bd,
      entry: _0x37c0e2,
      fullscreen: _0xf0d9ea,
      usesDomFloatingStage: _0x415d5a,
      renderScopeActive$: _0x196a96,
    } = _0x174f5d,
    _0x3f0da0 = (0, c.useDependency)(a.LocaleService),
    _0x395d23 = (0, c.useDependency)(a.ICommandService),
    _0x5531b6 = (0, c.useDependency)(a.IUniverInstanceService),
    _0x40fbe7 = (0, c.useDependency)(c.IMenuManagerService),
    _0x16476e = (0, c.useDependency)(v.SheetsSelectionsService),
    _0x572bcd = (0, c.useDependency)(ce),
    _0x3dccdf =
      sr({
        embedId: _0x31a9ed,
        active: (0, c.useObservable)(
          () => _0x572bcd.active$,
          _0x572bcd.getActive(),
          false,
          [_0x572bcd],
        ),
        fullscreen: _0xf0d9ea,
        usesDomFloatingStage: _0x415d5a,
        renderScopeActive: (0, c.useObservable)(() => _0x196a96, false, false, [
          _0x196a96,
        ]),
      }) === "stage2",
    [_0x1e3cac, _0x440cc6] = (0, d.useState)(null),
    _0x54fd1b = (_0x35ed85) => ({
      open: _0x1e3cac === _0x35ed85,
      onOpenChange: (_0x1e4f88) => _0x440cc6(_0x1e4f88 ? _0x35ed85 : null),
    });
  (0, d.useEffect)(() => {
    if (!_0x1e3cac) return;
    let _0x39a572 = (_0x191e71) => {
      Cu(_0x191e71.target, _0x31a9ed) || _0x440cc6(null);
    };
    return (
      document.addEventListener("pointerdown", _0x39a572, true),
      () => {
        document.removeEventListener("pointerdown", _0x39a572, true);
      }
    );
  }, [_0x31a9ed, _0x1e3cac]);
  let _0x144f1d = (0, c.useObservable)(
      () =>
        _0x40fbe7.menuChanged$["pipe"](
          (0, f.map)(() =>
            Ju(
              _0x40fbe7.getFlatMenuByPositionKey(
                c.MenuManagerPosition["RIBBON"],
              ),
            ),
          ),
        ),
      Ju(_0x40fbe7.getFlatMenuByPositionKey(c.MenuManagerPosition["RIBBON"])),
      false,
      [_0x40fbe7],
    ),
    _0x368a4b = (0, d.useMemo)(
      () => new Set(Xu(_0x144f1d).map((_0x225f3e) => _0x225f3e.id)),
      [_0x144f1d],
    ),
    _0x19223e = () => {
      (_0x572bcd.activate(
        { hostUnitId: _0x3856b6, embedId: _0x31a9ed, childUnitId: _0x4b70bd },
        "stage2",
      ),
        _0x5531b6.setCurrentUnitForType(_0x4b70bd));
    },
    _0x386bae = async (_0x92948b, _0x4340b4) => {
      (_0x19223e(), await _0x395d23.executeCommand(_0x92948b, _0x4340b4));
    },
    _0xc2b246 = async (_0x4bd574, _0x418905) => {
      let _0xc0c152 = $u(_0x4bd574, _0x418905);
      _0xc0c152 && (await _0x386bae(_0xc0c152.commandId, _0xc0c152.params));
    },
    _0x2d8e23 = () => {
      let _0x136468 = _0x5531b6.getUnit(
          _0x4b70bd,
          a.UniverInstanceType["UNIVER_SHEET"],
        ),
        _0x52679d = _0x136468 == null ? undefined : _0x136468.getActiveSheet();
      return !_0x136468 || !_0x52679d
        ? null
        : {
            workbook: _0x136468,
            worksheet: _0x52679d,
            unitId: _0x136468.getUnitId(),
            subUnitId: _0x52679d.getSheetId(),
          };
    },
    _0x3bd843 = () => {
      var _0x3ed886;
      return (
        ((_0x3ed886 = _0x16476e.getCurrentSelections()) == null
          ? undefined
          : _0x3ed886.map((_0x524c84) => _0x524c84.range)) ?? []
      );
    },
    _0x4c9bff = async (
      _0x5962c5,
      _0x2fdfa7,
      _0x226b48 = a.BorderStyleTypes["THIN"],
      _0x20d6d1 = "#000000",
    ) => {
      let _0x30161f = _0x2d8e23(),
        _0x564a02 = _0x3bd843();
      !_0x30161f ||
        !_0x564a02.length ||
        (await _0xc2b246(_0x5962c5, {
          unitId: _0x30161f.unitId,
          subUnitId: _0x30161f.subUnitId,
          ranges: _0x564a02,
          value: {
            type: _0x2fdfa7,
            color: _0x20d6d1,
            style: _0x226b48,
            activeBorderType: true,
          },
        }));
    },
    _0x203cd7 = async () => {
      await _0x395d23.executeCommand(t.RemoveEmbedCommand["id"], {
        hostUnitId: _0x3856b6,
        embedId: _0x31a9ed,
      });
    };
  return (0, m.jsxs)("div", {
    className: (0, l.clsx)(
      "univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-10 univer-items-center univer-gap-0 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0 [&_svg]:univer-size-4 [&_svg]:univer-shrink-0",
      {
        "univer-hidden": !_0x3dccdf,
        "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0":
          _0xf0d9ea,
        "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20univer-max-w-[min(calc(100vw-72px),880px)]\x20-univer-translate-x-1/2\x20univer-overflow-x-auto\x20univer-overflow-y-visible\x20[scrollbar-width:none]\x20[&::-webkit-scrollbar]:univer-hidden":
          !_0xf0d9ea,
        "-univer-top-9": !_0xf0d9ea && _0x37c0e2 !== "docs-custom-block",
        "-univer-top-[52px]": !_0xf0d9ea && _0x37c0e2 === "docs-custom-block",
      },
    ),
    "data-u-comp": "sheet-embed-floating-menu",
    "data-embed-floating-menu": "true",
    "data-embed-id": _0x31a9ed,
    "data-embed-float-stage": _0x3dccdf ? "stage2" : "inactive",
    onPointerDown: (_0x154722) => _0x154722.stopPropagation(),
    onMouseDown: Su,
    children: [
      _0x368a4b.has("formatPainter") &&
        (0, m.jsx)(gu, {
          item: _0x144f1d.formatPainter,
          title: "embed-ui.sheetsFloating.toolbar.formatPainter",
          onClick: async () => _0xc2b246(_0x144f1d.formatPainter),
          children: (0, m.jsx)(u.BrushIcon, {}),
        }),
      _0x368a4b.has("divider-format-tools") &&
        (0, m.jsx)(l.Separator, {
          className: "univer-mx-1\x20!univer-h-4",
          orientation: "vertical",
        }),
      _0x368a4b.has("numberFormat") &&
        (0, m.jsx)(Iu, {
          menuItem: _0x144f1d.numberFormat,
          onClick: async () => _0xc2b246(_0x144f1d.numberFormat),
        }),
      _0x368a4b.has("divider-format") &&
        (0, m.jsx)(l.Separator, {
          className: "univer-mx-1\x20!univer-h-4",
          orientation: "vertical",
        }),
      _0x368a4b.has("fontFamily") &&
        (0, m.jsx)(Lu, {
          embedId: _0x31a9ed,
          menuItem: _0x144f1d.fontFamily,
          title: "embed-ui.sheetsFloating.toolbar.font",
          ..._0x54fd1b("fontFamily"),
          onSelect: async (_0x1de1a8) =>
            _0xc2b246(_0x144f1d.fontFamily, { value: _0x1de1a8 }),
        }),
      _0x368a4b.has("fontSize") &&
        (0, m.jsx)(Ru, {
          embedId: _0x31a9ed,
          menuItem: _0x144f1d.fontSize,
          title: "embed-ui.sheetsFloating.toolbar.fontSize",
          ..._0x54fd1b("fontSize"),
          onSelect: async (_0x34231c) =>
            _0xc2b246(_0x144f1d.fontSize, { value: Number(_0x34231c) }),
        }),
      _0x368a4b.has("bold") &&
        (0, m.jsx)(gu, {
          item: _0x144f1d.bold,
          title: "embed-ui.sheetsFloating.toolbar.bold",
          onClick: async () => _0xc2b246(_0x144f1d.bold),
          children: (0, m.jsx)(u.BoldIcon, {}),
        }),
      _0x368a4b.has("divider-font") &&
        (0, m.jsx)(l.Separator, {
          className: "univer-mx-1 !univer-h-4",
          orientation: "vertical",
        }),
      _0x368a4b.has("textColor") &&
        (0, m.jsx)(Hu, {
          embedId: _0x31a9ed,
          menuItem: _0x144f1d.textColor,
          title: "embed-ui.sheetsFloating.toolbar.textColor.main",
          icon: (0, m.jsx)(u.FontColorDoubleIcon, {
            className: "univer-fill-primary-600",
          }),
          defaultColor: "#111827",
          ..._0x54fd1b("textColor"),
          onChange: async (_0x532b8f) =>
            _0xc2b246(_0x144f1d.textColor, { value: _0x532b8f }),
          onReset: async () => _0x386bae(s.ResetRangeTextColorCommand["id"]),
        }),
      _0x368a4b.has("backgroundColor") &&
        (0, m.jsx)(Hu, {
          embedId: _0x31a9ed,
          menuItem: _0x144f1d.backgroundColor,
          title: "embed-ui.sheetsFloating.toolbar.fillColor.main",
          icon: (0, m.jsx)(u.PaintBucketDoubleIcon, {
            className: "univer-fill-primary-600",
          }),
          defaultColor: "#ffffff",
          ..._0x54fd1b("backgroundColor"),
          onChange: async (_0x4babbc) =>
            _0xc2b246(_0x144f1d.backgroundColor, { value: _0x4babbc }),
          onReset: async () => _0x386bae(v.ResetBackgroundColorCommand["id"]),
        }),
      _0x368a4b.has("borderComposite") &&
        (0, m.jsx)(Uu, {
          embedId: _0x31a9ed,
          menuItem: _0x144f1d.borderComposite,
          ..._0x54fd1b("borderComposite"),
          onSelect: async (_0x25d588, _0x346f2d, _0x2bcace) =>
            _0x4c9bff(
              _0x144f1d.borderComposite,
              _0x25d588,
              _0x346f2d,
              _0x2bcace,
            ),
        }),
      _0x368a4b.has("divider-border") &&
        (0, m.jsx)(l.Separator, {
          className: "univer-mx-1 !univer-h-4",
          orientation: "vertical",
        }),
      _0x368a4b.has("merge") &&
        (0, m.jsx)(Wu, {
          embedId: _0x31a9ed,
          menuItems: _0x144f1d.merge,
          ..._0x54fd1b("merge"),
          execute: _0xc2b246,
        }),
      _0x368a4b.has("horizontalAlign") &&
        (0, m.jsx)(zu, {
          embedId: _0x31a9ed,
          menuItem: _0x144f1d.horizontalAlign,
          ..._0x54fd1b("horizontalAlign"),
          execute: _0xc2b246,
        }),
      _0x368a4b.has("verticalAlign") &&
        (0, m.jsx)(Bu, {
          embedId: _0x31a9ed,
          menuItem: _0x144f1d.verticalAlign,
          ..._0x54fd1b("verticalAlign"),
          execute: _0xc2b246,
        }),
      _0x368a4b.has("wrap") &&
        (0, m.jsx)(Gu, {
          embedId: _0x31a9ed,
          menuItem: _0x144f1d.wrap,
          ..._0x54fd1b("wrap"),
          execute: _0x386bae,
        }),
      _0x368a4b.has("divider-layout") &&
        (0, m.jsx)(l.Separator, {
          className: "univer-mx-1 !univer-h-4",
          orientation: "vertical",
        }),
      _0x368a4b.has("filter") &&
        (0, m.jsx)(gu, {
          item: _0x144f1d.filter,
          title: "embed-ui.sheetsFloating.toolbar.filter",
          onClick: async () => _0xc2b246(_0x144f1d.filter),
          children: (0, m.jsx)(u.FilterIcon, {}),
        }),
      _0x368a4b.has("divider-block") &&
        (0, m.jsx)(l.Separator, {
          className: "univer-mx-1\x20!univer-h-4",
          orientation: "vertical",
        }),
      !_0xf0d9ea &&
        (0, m.jsx)(fa, {
          hostUnitId: _0x3856b6,
          embedId: _0x31a9ed,
          variant: "menu",
        }),
      _0x368a4b.has("deleteBlock") &&
        (0, m.jsx)(hu, {
          title: _0x3f0da0.t("embed-ui.deleteBlock"),
          className: "univer-text-red-500 hover:univer-text-red-600",
          onClick: _0x203cd7,
          children: (0, m.jsx)(u.DeleteIcon, {}),
        }),
    ],
  });
}
const id = new WeakMap(),
  ad = new WeakSet();
function od(_0x5ceb55) {
  bs(_0x5ceb55, "sheets-ui.embed", sd);
}
function sd(_0x281009) {
  let _0x291942 = _0x281009.get(vt),
    _0x3eacbf = _0x281009.get(gt),
    _0x4fa5e8 = _0x281009.get(H),
    _0x2ffc42 = _0x281009.get(_t),
    _0x5bfdb0 = _0x281009.get(Ur),
    _0x5e6ece = _0x281009.get(ba),
    _0x15ae00 = _0x281009.get(ii);
  (ru(_0x281009),
    _0x281009.has(s.ISheetHostChromeOverrideService) ||
      _0x281009.add([
        s.ISheetHostChromeOverrideService,
        { useFactory: () => _0x281009.get(U) },
      ]),
    _0x281009.has(s.ISheetEmbedRuntimeService) ||
      _0x281009.add([
        s.ISheetEmbedRuntimeService,
        {
          useFactory: () =>
            cd({
              embedModelService: _0x281009.get(t.EmbedModelService),
              mountService: _0x281009.get(Ht),
              activationService: _0x281009.get(Gt),
              restoreService: _0x281009.get(Gr),
            }),
        },
      ]),
    [Ql(), $l()].forEach((_0x14a819) => {
      _0x291942.get(_0x14a819.hostType, _0x14a819.entry) ||
        _0x291942.register(_0x14a819);
    }));
  let _0x14907b = au(_0x281009.get(a.ICommandService));
  _0x3eacbf.get(_0x14907b.childType) || _0x3eacbf.register(_0x14907b);
  let _0x5d3b76 = iu();
  (_0x4fa5e8.get(_0x5d3b76.childType) || _0x4fa5e8.register(_0x5d3b76),
    ed().forEach((_0x518193) => {
      _0x2ffc42.get(_0x518193.hostType, _0x518193.entry, _0x518193.childType) ||
        _0x2ffc42.register(_0x518193);
    }),
    _0x5bfdb0.registerProvider(
      wa(_0x281009, {
        childType: a.UniverInstanceType["UNIVER_SHEET"],
        renderManagerService: p.IRenderManagerService,
      }),
    ),
    _0x5e6ece.get(a.UniverInstanceType["UNIVER_SHEET"]) ||
      _0x5e6ece.register(Hl()),
    _0x15ae00.get(a.UniverInstanceType["UNIVER_SHEET"]) ||
      _0x15ae00.register(nu(_0x281009)),
    pd({ injector: _0x281009, previewService: _0x5bfdb0 }));
}
function cd(_0x4ec1cb) {
  return {
    getSheetTabChildType: ({
      hostUnitId: _0x5a2c4b,
      hostAnchorId: _0x29064b,
      embedId: _0x2351ba,
    }) => {
      let _0x10feb7 = _0x4ec1cb.embedModelService["getDescriptor"](
        _0x5a2c4b,
        _0x2351ba,
      );
      return (_0x10feb7 == null ? undefined : _0x10feb7.hostAnchorId) ===
        _0x29064b
        ? _0x10feb7.childType
        : undefined;
    },
    mountSheetTab: ({
      hostUnitId: _0x27fb47,
      hostAnchorId: _0x3b3e09,
      embedId: _0x5114b4,
    }) => {
      let _0x2eaac6 = _0x4ec1cb.embedModelService["getDescriptor"](
        _0x27fb47,
        _0x5114b4,
      );
      if (!_0x2eaac6 || _0x2eaac6.hostAnchorId !== _0x3b3e09) return;
      let _0x25aa5b = false,
        _0x5a3cbe = false,
        _0x4cd438;
      return (
        _0x4ec1cb.restoreService["materializeDescriptor"]({
          descriptor: _0x2eaac6,
        })
          .then((_0x4d645e) => {
            _0x25aa5b ||
              (_0x4cd438 == null || _0x4cd438.remove(),
              (_0x4cd438 = undefined),
              _0x4ec1cb.mountService["mount"](_0x4d645e),
              _0x4ec1cb.activationService["activateTab"](_0x4d645e),
              (_0x5a3cbe = true));
          })
          .catch((_0x529537) => {
            _0x25aa5b || (_0x4cd438 = ld(_0x3b3e09, _0x529537));
          }),
        (0, a.toDisposable)(() => {
          ((_0x25aa5b = true),
            _0x4cd438 == null || _0x4cd438.remove(),
            _0x4ec1cb.activationService["clearTab"](_0x5114b4),
            _0x5a3cbe && _0x4ec1cb.mountService["unmount"](_0x5114b4));
        })
      );
    },
    clearTab: (_0x1470f7) => {
      _0x4ec1cb.activationService["clearTab"](_0x1470f7);
    },
  };
}
function ld(_0x420598, _0x1df2ce) {
  let _0x206c36 = ud(_0x420598);
  if (!_0x206c36) return;
  let _0x319cbd = document.createElement("div");
  return (
    (_0x319cbd.dataset["embedSheetsSheetTabError"] = "true"),
    (_0x319cbd.style["padding"] = "12px"),
    (_0x319cbd.style["color"] = "#b91c1c"),
    (_0x319cbd.style["fontSize"] = "13px"),
    (_0x319cbd.textContent =
      _0x1df2ce instanceof Error && _0x1df2ce.message
        ? _0x1df2ce.message
        : "Failed to load embedded sheet."),
    _0x206c36.replaceChildren(_0x319cbd),
    _0x319cbd
  );
}
function ud(_0x5a668d) {
  return document.querySelector(
    "[data-embed-sheets-sheet-tab-host=\x22" + dd(_0x5a668d) + "\x22]",
  );
}
function dd(_0x28216e) {
  return _0x28216e.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function fd(_0x38c520) {
  let _0x107715 = new f["Subscription"](),
    _0x1d6053 = 0,
    _0x5a81c3;
  if (
    (_0x107715.add(
      _0x38c520.previewService["previewUpdated$"].subscribe((_0x3ab2c4) => {
        if (typeof _0x3ab2c4.image != "string") return;
        let _0x408cdd = _0x38c520.embedModelService[
          "getActiveDescriptorsByChildUnit"
        ](_0x3ab2c4.childUnitId).find(
          (_0xd1b117) =>
            _0xd1b117.embedId === _0x3ab2c4.embedId &&
            _0xd1b117.entry === "sheets-floating-object",
        );
        _0x408cdd != null &&
          _0x408cdd.hostAnchorId &&
          _0x38c520.canvasFloatDomPreviewService["setPreview"]({
            id: _0x408cdd.hostAnchorId,
            image: _0x3ab2c4.image,
            updatedAt: _0x3ab2c4.updatedAt,
          });
      }),
    ),
    !_0x38c520.canvasFloatDomPreviewService["previewRequested$"])
  )
    return _0x107715;
  let _0x4c868c = () => {
      _0x5a81c3 ||
        _0x1d6053 >= 240 ||
        (_0x5a81c3 = globalThis.setTimeout(() => {
          ((_0x5a81c3 = undefined), (_0x1d6053 += 1), _0x839890());
        }, 250));
    },
    _0x3aeeb2 = (_0x469630) => {
      let _0x5a51af = _0x469630.data;
      if (!_0x5a51af || typeof _0x5a51af != "object") return true;
      let _0x13b93a = gd(_0x5a51af, "embedId"),
        _0x4ad863 = gd(_0x5a51af, "hostUnitId");
      if (!_0x13b93a || !_0x4ad863) return true;
      let _0xf8f687 = _0x38c520.embedModelService["getDescriptor"](
        _0x4ad863,
        _0x13b93a,
      );
      return !_0xf8f687 ||
        _0xf8f687.entry !== "sheets-floating-object" ||
        !_0xf8f687.childUnitId ||
        _0xf8f687.childType == null
        ? false
        : (_0x38c520.previewService["requestPreview"]({
            descriptor: _0xf8f687,
            childUnitId: _0xf8f687.childUnitId,
            childType: _0xf8f687.childType,
            width: _0x469630.width,
            height: _0x469630.height,
            dpr: typeof window > "u" ? 1 : window.devicePixelRatio || 1,
            reason: "initial",
          }),
          true);
    },
    _0x839890 = () => {
      var _0x54548d, _0x141e5d;
      let _0x2f7a4f = false;
      ((_0x54548d = (_0x141e5d = _0x38c520.canvasFloatDomPreviewService)
        .getPendingRequests) == null ||
        _0x54548d.call(_0x141e5d).forEach((_0x1b666c) => {
          _0x3aeeb2(_0x1b666c) || (_0x2f7a4f = true);
        }),
        _0x2f7a4f && _0x4c868c());
    };
  return (
    _0x839890(),
    _0x107715.add(
      _0x38c520.canvasFloatDomPreviewService["previewRequested$"].subscribe(
        (_0x473b8f) => {
          _0x3aeeb2(_0x473b8f) || _0x4c868c();
        },
      ),
    ),
    _0x107715.add(() => {
      _0x5a81c3 && globalThis.clearTimeout(_0x5a81c3);
    }),
    _0x107715
  );
}
function pd(_0x2289ed) {
  let _0x5ce3a4 = _0x2289ed.injector,
    _0x5c62fd = id.get(_0x5ce3a4);
  if (_0x5c62fd) return _0x5c62fd;
  let _0x44a817 = hd(_0x2289ed.injector);
  if (_0x44a817 !== null) {
    if (_0x44a817) {
      let _0x451207 = fd({
        previewService: _0x2289ed.previewService,
        embedModelService: _0x44a817.embedModelService,
        canvasFloatDomPreviewService: _0x44a817.canvasFloatDomPreviewService,
      });
      return (id.set(_0x5ce3a4, _0x451207), _0x451207);
    }
    _0x2289ed.retry === false ||
      ad.has(_0x5ce3a4) ||
      (ad.add(_0x5ce3a4), md(_0x2289ed, 0));
  }
}
function md(_0xef1c12, _0x23a8d1) {
  let _0x290fd1 = _0xef1c12.maxRetries ?? 240,
    _0x3efe7a = _0xef1c12.retryDelay ?? 250,
    _0x121d2c = _0xef1c12.injector;
  globalThis.setTimeout(() => {
    if (pd({ ..._0xef1c12, retry: false }) || _0x23a8d1 + 1 >= _0x290fd1) {
      ad.delete(_0x121d2c);
      return;
    }
    md(_0xef1c12, _0x23a8d1 + 1);
  }, _0x3efe7a);
}
function hd(_0x12a210) {
  try {
    return !_0x12a210.has(c.CanvasFloatDomPreviewService) ||
      !_0x12a210.has(t.EmbedModelService)
      ? undefined
      : {
          embedModelService: _0x12a210.get(t.EmbedModelService),
          canvasFloatDomPreviewService: _0x12a210.get(
            c.CanvasFloatDomPreviewService,
          ),
        };
  } catch {
    return null;
  }
}
function gd(_0x32ab01, _0x5324ce) {
  let _0x2307ea = _0x32ab01[_0x5324ce];
  return typeof _0x2307ea == "string" ? _0x2307ea : undefined;
}
function _d() {
  return ws({
    childType: a.UniverInstanceType["UNIVER_SLIDE"],
    productName: "Slides",
  });
}
function vd(_0x2e7919) {
  var _0x39731f;
  return ((_0x39731f = _0x2e7919.active) == null
    ? undefined
    : _0x39731f.embedId) === _0x2e7919.embedId &&
    _0x2e7919.active["stage"] !== "inactive"
    ? (_0x2e7919.active["stage"] ?? "stage1")
    : sr({
        embedId: _0x2e7919.embedId,
        active: _0x2e7919.active,
        fullscreen: _0x2e7919.fullscreen,
        usesDomFloatingStage: _0x2e7919.usesDomFloatingStage ?? true,
        renderScopeActive: _0x2e7919.renderScopeActive ?? false,
      });
}
function yd(_0x53949f) {
  var _0x362fd3;
  let _0x325c24 = (0, c.useDependency)(a.LocaleService),
    _0x202815 = (0, c.useDependency)(a.Injector),
    _0x12f1d7 = (0, c.useDependency)(a.ThemeService),
    _0xa9fae3 = (0, d.useMemo)(
      () => _0x202815.createInstance(S.ObjectProvider),
      [_0x202815],
    ),
    _0x339137 = (0, c.useObservable)(_0x12f1d7.darkMode$) ?? _0x12f1d7.darkMode,
    {
      hostUnitId: _0x1774ee,
      embedId: _0x3c5b3b,
      childUnitId: _0x2333d3,
      slideModel: _0x374d07,
      floatingActiveService: _0x490b25,
      commandService: _0x4859c6,
      instanceService: _0x1ff2e0,
      fullscreen: _0x5adf0e,
      usesDomFloatingStage: _0x1196f1,
      renderScopeActive$: _0x4f3a13,
      collisionBoundary: _0x8a4874,
    } = _0x53949f,
    _0x12d097 = (0, c.useObservable)(
      () => _0x490b25.active$,
      _0x490b25.getActive(),
      false,
      [_0x490b25],
    ),
    _0xa05905 = (0, c.useObservable)(_0x4f3a13, false);
  (0, c.useObservable)(
    _0x374d07 === null ? null : () => _0x374d07.pageManager["slideOrder$"],
    [],
    false,
    [_0x374d07],
  );
  let _0xe79ab7 = (0, c.useObservable)(
      _0x374d07 === null ? null : () => _0x374d07.pageManager["activeSlideId$"],
      _0x374d07 == null ||
        (_0x362fd3 = _0x374d07.pageManager["getActiveSlide"]()) == null
        ? undefined
        : _0x362fd3.getId(),
      false,
      [_0x374d07],
    ),
    _0x2e9e3b =
      (_0x374d07 == null ? undefined : _0x374d07.pageManager["getSlides"]()) ??
      [],
    _0x5d0f6a = Math.max(
      0,
      _0x2e9e3b.findIndex((_0x18fc72) => _0x18fc72.getId() === _0xe79ab7),
    ),
    _0x2ad5ef = _0x2e9e3b.length,
    _0x220b58 = _0x325c24.t("embed-ui.slidesFloating.selectSlide"),
    _0x35b2d8 = vd({
      active: _0x12d097,
      embedId: _0x3c5b3b,
      fullscreen: _0x5adf0e,
      renderScopeActive: _0xa05905,
      usesDomFloatingStage: _0x1196f1,
    }),
    _0x22bbb9 = () => {
      (_0x490b25.activate(
        { hostUnitId: _0x1774ee, embedId: _0x3c5b3b, childUnitId: _0x2333d3 },
        "stage2",
      ),
        _0x1ff2e0.setCurrentUnitForType(_0x2333d3));
    },
    _0x45d696 = (_0x102a52) => {
      let _0x4e86c9 = _0x2e9e3b[_0x102a52];
      !_0x4e86c9 ||
        !_0x374d07 ||
        (_0x22bbb9(),
        _0x374d07.pageManager["setActiveSlide"](_0x4e86c9.getId()));
    },
    _0xd861ba = (_0x421136) => {
      _0x45d696(
        _0x2e9e3b.findIndex((_0x20e3b0) => _0x20e3b0.getId() === _0x421136),
      );
    };
  return (0, m.jsxs)("div", {
    className: (0, l.clsx)(
      "univer-slide-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0",
      {
        "univer-hidden": _0x35b2d8 === "inactive",
        "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0":
          _0x5adf0e,
        "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2":
          !_0x5adf0e,
        "-univer-top-9": !_0x5adf0e,
      },
    ),
    "data-embed-floating-menu": "true",
    "data-embed-id": _0x3c5b3b,
    "data-embed-float-stage": _0x35b2d8,
    onPointerDown: (_0x352f1c) => _0x352f1c.stopPropagation(),
    children: [
      (0, m.jsx)(bd, {
        title: _0x325c24.t("embed-ui.slidesFloating.previousSlide"),
        disabled: _0x5d0f6a <= 0,
        onClick: () => _0x45d696(_0x5d0f6a - 1),
        children: (0, m.jsx)(u.ArrowLeftIcon, {}),
      }),
      (0, m.jsx)(bd, {
        title: _0x325c24.t("embed-ui.slidesFloating.nextSlide"),
        disabled: _0x2ad5ef === 0 || _0x5d0f6a >= _0x2ad5ef - 1,
        onClick: () => _0x45d696(_0x5d0f6a + 1),
        children: (0, m.jsx)(u.ArrowRightIcon, {}),
      }),
      (0, m.jsx)(da, {
        title: _0x220b58,
        children: (0, m.jsx)(l.DropdownMenu, {
          collisionBoundary: _0x8a4874,
          align: "center",
          side: "bottom",
          sideOffset: 6,
          className:
            "univer-w-44 !univer-bg-gray-0 !univer-text-gray-900 dark:!univer-bg-gray-0 dark:!univer-text-gray-900",
          "data-embed-id": _0x3c5b3b,
          "data-embed-floating-menu-popup": "true",
          items: _0x2e9e3b.map((_0x69f301, _0xaf7bd) => ({
            type: "item",
            className: "!univer-p-1",
            children: (0, m.jsxs)("span", {
              className: "univer-block univer-w-full",
              children: [
                (0, m.jsx)(S.SlideThumbnailItem, {
                  pageId: _0x69f301.getId(),
                  index: _0xaf7bd,
                  isActive: _0x69f301.getId() === _0xe79ab7,
                  slideModel: _0x374d07,
                  objectProvider: _0xa9fae3,
                  setActivePage: _0xd861ba,
                  variant: "preview",
                  renderIdSuffix: "embed-page-menu-" + _0x3c5b3b,
                  darkMode: _0x339137,
                }),
                (0, m.jsx)("span", {
                  className: "univer-sr-only",
                  children:
                    _0x220b58 + "\x20" + (_0xaf7bd + 1) + " / " + _0x2ad5ef,
                }),
              ],
            }),
            onSelect: () => _0x45d696(_0xaf7bd),
          })),
          children: (0, m.jsxs)(l.Button, {
            type: "button",
            size: "small",
            variant: "ghost",
            className: "univer-h-6 univer-gap-1 univer-px-2 univer-text-xs",
            "aria-label": _0x220b58,
            children: [
              (0, m.jsx)("span", {
                children:
                  _0x2ad5ef === 0 ? "0 / 0" : _0x5d0f6a + 1 + " / " + _0x2ad5ef,
              }),
              (0, m.jsx)(u.MoreDownIcon, { className: "univer-size-3" }),
            ],
          }),
        }),
      }),
      !_0x5adf0e &&
        (0, m.jsx)(fa, {
          hostUnitId: _0x1774ee,
          embedId: _0x3c5b3b,
          variant: "menu",
        }),
      (0, m.jsx)(l.Separator, { orientation: "vertical" }),
      (0, m.jsx)(bd, {
        title: _0x325c24.t("embed-ui.deleteBlock"),
        className: "univer-text-red-500\x20hover:univer-text-red-600",
        onClick: async () => {
          await _0x4859c6.executeCommand(t.RemoveEmbedCommand["id"], {
            hostUnitId: _0x1774ee,
            embedId: _0x3c5b3b,
          });
        },
        children: (0, m.jsx)(u.DeleteIcon, {}),
      }),
    ],
  });
}
function bd(_0x2f2c73) {
  let {
    children: _0x58a94d,
    title: _0x31ac68,
    disabled: _0x156310,
    className: _0x15091e,
    onClick: _0x56dbc3,
  } = _0x2f2c73;
  return (0, m.jsx)(da, {
    title: _0x31ac68,
    children: (0, m.jsx)(l.Button, {
      type: "button",
      size: "small",
      variant: "ghost",
      className: (0, l.clsx)("univer-size-6 univer-p-0", _0x15091e),
      "aria-label": _0x31ac68,
      disabled: _0x156310,
      onClick: _0x56dbc3,
      children: _0x58a94d,
    }),
  });
}
function xd() {
  return Tc({ childType: a.UniverInstanceType["UNIVER_SLIDE"], mount: Sd });
}
function Sd(_0x5d7e80) {
  let { menu: _0x4843a3, portalContainer: _0x41227a } = Sc(_0x5d7e80),
    _0x546db8 = nn(_0x4843a3),
    _0xda73ae = _0x5d7e80.injector["get"](ce),
    _0x3556a0 = _0x5d7e80.injector["get"](a.ICommandService),
    _0x2bb09c = _0x5d7e80.injector["get"](a.IUniverInstanceService),
    _0x55e88f = _0x2bb09c.getUnit(
      _0x5d7e80.childUnitId,
      a.UniverInstanceType["UNIVER_SLIDE"],
    );
  return (
    _0x546db8.render(
      (0, d.createElement)(
        Kt,
        {
          injector: _0x5d7e80.runtimeScope["injector"],
          mountContainer: _0x41227a,
          embedId: _0x5d7e80.embedId,
          passThroughWheelGestures:
            _0x5d7e80.renderScope["mode"] === "float" &&
            !_0x5d7e80.renderScope["fullscreen"],
        },
        (0, d.createElement)(yd, {
          collisionBoundary: _0x5d7e80.renderScope["fullscreen"]
            ? undefined
            : _0x5d7e80.injector["get"](c.ILayoutService).getContentElement(),
          hostUnitId: _0x5d7e80.hostUnitId,
          embedId: _0x5d7e80.embedId,
          childUnitId: _0x5d7e80.childUnitId,
          slideModel: _0x55e88f ?? null,
          floatingActiveService: _0xda73ae,
          commandService: _0x3556a0,
          instanceService: _0x2bb09c,
          fullscreen: !!_0x5d7e80.renderScope["fullscreen"],
          usesDomFloatingStage:
            _0x5d7e80.descriptor["entry"] !== "slides-floating-object",
          renderScopeActive$: _0x5d7e80.renderScope["active$"],
        }),
      ),
    ),
    (0, a.toDisposable)(() => {
      (rn(_0x546db8), globalThis.setTimeout(() => _0x4843a3.remove(), 0));
    })
  );
}
function Cd(_0x10c5ff, _0x97f695, _0x2ca24a) {
  return {
    ...(0, t.createSlidesPageListBlockHostAdapterContribution)(
      _0x10c5ff,
      _0x97f695,
    ),
    activateAnchor: (_0xe8b0ee) => {
      _0x2ca24a == null ||
        _0x2ca24a.unmountFloatingSessions(_0xe8b0ee.hostUnitId);
      let _0x215bda =
          _0x97f695 == null
            ? undefined
            : _0x97f695.getUnit(
                _0xe8b0ee.hostUnitId,
                a.UniverInstanceType["UNIVER_SLIDE"],
              ),
        _0x3702b4 = () => {
          var _0x2dad4a, _0x1f97c;
          return _0x215bda == null ||
            (_0x2dad4a = _0x215bda.pageManager) == null ||
            (_0x1f97c = _0x2dad4a.setActiveSlide) == null
            ? undefined
            : _0x1f97c.call(_0x2dad4a, _0xe8b0ee.hostAnchorId);
        };
      if (typeof window > "u") {
        _0x3702b4();
        return;
      }
      window.requestAnimationFrame(_0x3702b4);
    },
  };
}
function wd() {
  return {
    hostType: a.UniverInstanceType["UNIVER_SLIDE"],
    entry: "slides-floating-object",
    layout: "scroll-contained",
    supportedLayouts: [
      "scroll-contained",
      "doc-width-scale",
      "aspect-fit",
      "content-bounds-fit",
    ],
    menuBehavior: "floating",
    mount: (_0x113563) => {
      let _0x4dc768 = Ed(
        "data-embed-slides-floating-object-host",
        _0x113563.descriptor["hostAnchorId"],
      );
      return _0x4dc768 ? { hostElement: _0x4dc768 } : {};
    },
  };
}
function Td() {
  return {
    hostType: a.UniverInstanceType["UNIVER_SLIDE"],
    entry: "slides-page-list-block",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: (_0xe6153d) => {
      let _0x43b89b = Ed(
        "data-embed-slides-page-list-host",
        _0xe6153d.descriptor["hostAnchorId"],
      );
      return _0x43b89b ? { hostElement: _0x43b89b } : {};
    },
  };
}
function Ed(_0x27225b, _0x42c23b) {
  return document.querySelector(
    "[" + _0x27225b + "=\x22" + Dd(_0x42c23b) + "\x22]",
  );
}
function Dd(_0x1cbe5b) {
  return _0x1cbe5b.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function Od() {
  return {
    childType: a.UniverInstanceType["UNIVER_SLIDE"],
    handleWheel: () => false,
  };
}
function kd(_0x5e3b5f) {
  return {
    childType: a.UniverInstanceType["UNIVER_SLIDE"],
    supportedLayouts: ["tab-peer", "aspect-fit", "scroll-contained"],
    beforeDeactivate: Ad,
    mount: (_0x15b3e8) => jd(_0x15b3e8, _0x5e3b5f),
  };
}
function Ad(_0x26a80d) {
  let _0x279687 = _0x26a80d.runtimeScope["injector"];
  if (!(_0x279687 != null && _0x279687.has(S.ISlideDrawingStateService)))
    return;
  let _0x566434 = _0x279687.get(S.ISlideDrawingStateService);
  (_0x566434.clearActiveEditing(), _0x566434.clearSelection());
}
function jd(_0x513613, _0x468da9) {
  let _0x522df2 = _0x513613.injector["get"](a.IUniverInstanceService).getUnit(
    _0x513613.childUnitId,
    a.UniverInstanceType["UNIVER_SLIDE"],
  );
  if (!_0x522df2) return;
  let _0x1ae8d7 = _0x513613.runtimeScope["injector"];
  if (!_0x1ae8d7) return;
  let _0x29ba66 = Md(
      _0x513613.childUnitId,
      _0x1ae8d7.get(S.ISlideDrawingStateService),
      _0x1ae8d7.get(a.IContextService),
    ),
    _0x99c71c = Xs(_0x513613, _0x468da9, (_0x133f35) =>
      Nd(_0x522df2, _0x133f35),
    ),
    _0x11c434 = _0x513613.runtimeScope["roots"].content,
    _0xab0b86 = _0x513613.runtimeScope["roots"].canvas,
    _0xf5a416 = _0x513613.injector["get"](p.IRenderManagerService),
    _0x47a69b = Pd(_0x513613),
    _0x4fdce1 = _0xab0b86
      ? Et(_0xf5a416, _0x513613.childUnitId, _0x1ae8d7)
      : undefined;
  if (_0x4fdce1 && _0xab0b86 && !_0x47a69b) {
    try {
      var _0x89d6a8, _0x43ffb0;
      (_0x89d6a8 = (_0x43ffb0 = _0x4fdce1.engine).unmount) == null ||
        _0x89d6a8.call(_0x43ffb0);
    } catch {}
    (_0x4fdce1.engine["mount"](_0xab0b86),
      Ot(_0x4fdce1, { activate: true }),
      (_0xab0b86.dataset["embedChildRenderUnitId"] = _0x513613.childUnitId),
      (_0xab0b86.dataset["embedChildRenderMode"] = "slide-canvas"));
  }
  let _0x177722 = nn(_0x11c434);
  return (
    (_0x11c434.dataset["embedChildRenderUnitId"] = _0x513613.childUnitId),
    (_0x11c434.dataset["embedChildRenderMode"] = "slide-workbench"),
    _0x177722.render(
      (0, m.jsx)(Kt, {
        injector: _0x1ae8d7,
        mountContainer: _0x513613.runtimeScope["roots"].popup,
        embedId: _0x513613.embedId,
        passThroughWheelGestures:
          _0x513613.renderScope["mode"] === "float" &&
          !_0x513613.renderScope["fullscreen"],
        children: _0x47a69b
          ? (0, m.jsx)(S.SlideEmbedFloatingPreview, {
              unitId: _0x513613.childUnitId,
              active$: _0x513613.renderScope["active$"],
            })
          : (0, m.jsx)(S.SlideEmbedChildWorkbench, {}),
      }),
    ),
    (0, a.toDisposable)(() => {
      (_0x29ba66.dispose(), _0x99c71c.dispose());
      try {
        var _0xdb718d, _0x1c4053;
        _0x4fdce1 == null ||
          (_0x1c4053 = (_0xdb718d = _0x4fdce1.engine).unmount) == null ||
          _0x1c4053.call(_0xdb718d);
      } catch {}
      (_0xf5a416.removeRender(_0x513613.childUnitId),
        rn(_0x177722),
        _0x11c434.isConnected &&
          (_0x11c434.removeAttribute("data-embed-child-render-unit-id"),
          _0x11c434.removeAttribute("data-embed-child-render-mode")),
        _0xab0b86 != null &&
          _0xab0b86.isConnected &&
          (_0xab0b86.removeAttribute("data-embed-child-render-unit-id"),
          _0xab0b86.removeAttribute("data-embed-child-render-mode")),
        _0x1ae8d7.dispose());
    })
  );
}
function Md(_0x48fe47, _0x4a84c4, _0x182620) {
  let _0x356376 = _0x4a84c4.state$["subscribe"]((_0x227260) => {
    var _0x29aa28;
    _0x182620.setContextValue(
      a.FOCUSING_COMMON_DRAWINGS,
      ((_0x29aa28 = _0x227260.context) == null
        ? undefined
        : _0x29aa28.unitId) === _0x48fe47 &&
        _0x227260.selectedIds["length"] > 0,
    );
  });
  return (0, a.toDisposable)(() => {
    (_0x356376.unsubscribe(),
      _0x182620.setContextValue(a.FOCUSING_COMMON_DRAWINGS, false));
  });
}
function Nd(_0x511953, _0x2d1a97) {
  var _0x4efb5f, _0x22e64f;
  let _0x348486 = _0x2d1a97 == null ? undefined : _0x2d1a97.pageId,
    _0x211e75 =
      _0x348486 && _0x511953.pageManager["getSlide"](_0x348486)
        ? _0x348486
        : (_0x4efb5f = _0x511953.pageManager["getSlides"]()[0]) == null
          ? undefined
          : _0x4efb5f.getId();
  _0x211e75 &&
    ((_0x22e64f = _0x511953.pageManager["getActiveSlide"]()) == null
      ? undefined
      : _0x22e64f.getId()) !== _0x211e75 &&
    _0x511953.pageManager["setActiveSlide"](_0x211e75);
}
function Pd(_0x324b51) {
  return (
    _0x324b51.renderScope["mode"] === "float" &&
    !_0x324b51.renderScope["fullscreen"] &&
    _0x324b51.layout === "aspect-fit"
  );
}
let Fd = class {
  constructor(_0x3a38ed, _0x1e81e3) {
    ((this._instanceService = _0x3a38ed),
      (this._renderManagerService = _0x1e81e3),
      V(this, "childType", a.UniverInstanceType["UNIVER_SLIDE"]));
  }
  collectViewState(_0x99a4d5) {
    var _0x213874, _0x56f543;
    let _0x1978a2 = this._getSlideModel(_0x99a4d5.childUnitId),
      _0x562177 =
        (_0x1978a2 == null ||
        (_0x213874 = _0x1978a2.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x213874.getId()) ?? "";
    return {
      unitId: _0x99a4d5.childUnitId,
      pageId: _0x562177,
      scaleMode: "fit",
      zoomRatio:
        _0x1978a2 == null || (_0x56f543 = _0x1978a2.getZoomRatio) == null
          ? undefined
          : _0x56f543.call(_0x1978a2),
    };
  }
  restoreViewState(_0x457fc1, _0x57b0b5) {
    let _0x25a1de = this._getSlideModel(_0x457fc1.childUnitId);
    !_0x25a1de ||
      !_0x57b0b5.pageId ||
      !_0x25a1de.pageManager["getSlide"](_0x57b0b5.pageId) ||
      _0x25a1de.pageManager["setActiveSlide"](_0x57b0b5.pageId);
  }
  renderPreview(_0x3bb4d1) {
    var _0x516b7f, _0x482246, _0x2ee5aa;
    let _0x4c77ba = this._getSlideModel(_0x3bb4d1.childUnitId),
      _0x4cf6a2 =
        (_0x516b7f = _0x3bb4d1.viewState) == null
          ? undefined
          : _0x516b7f.pageId;
    _0x4c77ba &&
      _0x4cf6a2 &&
      _0x4c77ba.pageManager["getSlide"](_0x4cf6a2) &&
      _0x4c77ba.pageManager["setActiveSlide"](_0x4cf6a2);
    let _0x410e93 = this._getOrCreateRender(_0x3bb4d1.childUnitId),
      _0x35905d =
        _0x410e93 == null ||
        (_0x482246 = _0x410e93.engine) == null ||
        (_0x2ee5aa = _0x482246.getCanvasElement) == null
          ? undefined
          : _0x2ee5aa.call(_0x482246);
    if (
      (_0x410e93 &&
        (!_0x35905d || _0x35905d.width <= 1 || _0x35905d.height <= 1) &&
        (_0x35905d = Id(_0x410e93, _0x3bb4d1.width, _0x3bb4d1.height)),
      !(
        !_0x35905d ||
        _0x35905d.width <= 1 ||
        _0x35905d.height <= 1 ||
        typeof _0x35905d.toDataURL != "function"
      ))
    )
      try {
        let _0x3c79dc = _0x4c77ba
            ? (0, S.resolveSlideLogicalPageSize)(
                _0x4c77ba.getSnapshot().defaultPageSize,
              )
            : undefined,
          _0x195d4e = _0x3c79dc
            ? _0x3c79dc.width / _0x3c79dc.height
            : undefined,
          _0x5c4efb =
            zd(_0x410e93, _0x35905d.width, _0x35905d.height) ??
            (_0x195d4e
              ? Ld(_0x35905d.width, _0x35905d.height, _0x195d4e)
              : undefined);
        return (
          Bd(
            _0x35905d,
            _0x3bb4d1.width,
            _0x3bb4d1.height,
            _0x3bb4d1.dpr,
            _0x5c4efb,
          ) ?? _0x35905d.toDataURL("image/png")
        );
      } catch {
        return;
      }
  }
  _getSlideModel(_0x287867) {
    return (
      this._instanceService["getUnit"](
        _0x287867,
        a.UniverInstanceType["UNIVER_SLIDE"],
      ) ?? undefined
    );
  }
  _getOrCreateRender(_0xd215ed) {
    let _0x27b167 = this._renderManagerService["getRenderUnitById"](_0xd215ed);
    if (_0x27b167) return _0x27b167;
    try {
      return this._renderManagerService["createRender"](_0xd215ed);
    } catch {
      return;
    }
  }
};
Fd = Z([X(0, a.IUniverInstanceService), X(1, p.IRenderManagerService)], Fd);
function Id(_0x3dc778, _0x2d6905, _0x1bc029) {
  if (typeof document > "u") return;
  let _0x544cbf = _0x3dc778.engine,
    _0x293a97 = _0x3dc778.scene;
  if (!(_0x544cbf != null && _0x544cbf.mount) || !_0x544cbf.resize) return;
  let _0x5f00e4 = document.createElement("div");
  ((_0x5f00e4.style["position"] = "fixed"),
    (_0x5f00e4.style["left"] = "-100000px"),
    (_0x5f00e4.style["top"] = "-100000px"),
    (_0x5f00e4.style["width"] = Math.max(1, Math.round(_0x2d6905)) + "px"),
    (_0x5f00e4.style["height"] = Math.max(1, Math.round(_0x1bc029)) + "px"),
    (_0x5f00e4.style["pointerEvents"] = "none"),
    (_0x5f00e4.dataset["embedSlidePreviewCanvasHost"] = "true"),
    document.body["appendChild"](_0x5f00e4));
  try {
    var _0x4a14e4, _0x5cb3a1, _0x46f66e;
    return (
      _0x544cbf.mount(_0x5f00e4),
      _0x544cbf.resize(),
      _0x293a97 == null ||
        (_0x4a14e4 = _0x293a97.makeDirty) == null ||
        _0x4a14e4.call(_0x293a97, true),
      _0x293a97 == null ||
        (_0x5cb3a1 = _0x293a97.render) == null ||
        _0x5cb3a1.call(_0x293a97),
      (_0x46f66e = _0x544cbf.getCanvasElement) == null
        ? undefined
        : _0x46f66e.call(_0x544cbf)
    );
  } finally {
    _0x5f00e4.remove();
  }
}
function Ld(_0x4846c5, _0x234827, _0x391293) {
  let _0x105229 = Math.max(1, Math.round(_0x4846c5)),
    _0xd9562b = Math.max(1, Math.round(_0x234827));
  if (!Number.isFinite(_0x391293) || _0x391293 <= 0)
    return { sx: 0, sy: 0, sWidth: _0x105229, sHeight: _0xd9562b };
  if (_0x105229 / _0xd9562b > _0x391293) {
    let _0x46c182 = Math.round(_0xd9562b * _0x391293);
    return {
      sx: Math.max(0, Math.round((_0x105229 - _0x46c182) / 2)),
      sy: 0,
      sWidth: _0x46c182,
      sHeight: _0xd9562b,
    };
  }
  let _0x7fc80f = Math.round(_0x105229 / _0x391293);
  return {
    sx: 0,
    sy: Math.max(0, Math.round((_0xd9562b - _0x7fc80f) / 2)),
    sWidth: _0x105229,
    sHeight: _0x7fc80f,
  };
}
function Rd(_0x277e7a, _0x5d5792, _0x283c84, _0x18c825, _0x5010af) {
  if (
    typeof _0x283c84.left != "number" ||
    typeof _0x283c84.top != "number" ||
    typeof _0x283c84.width != "number" ||
    typeof _0x283c84.height != "number" ||
    _0x283c84.width <= 0 ||
    _0x283c84.height <= 0
  )
    return;
  let _0x5a94e0 = Math.max(0, Math.round(_0x283c84.left * _0x18c825)),
    _0x590bf7 = Math.max(0, Math.round(_0x283c84.top * _0x5010af));
  return {
    sx: _0x5a94e0,
    sy: _0x590bf7,
    sWidth: Math.min(
      Math.max(1, Math.round(_0x283c84.width * _0x18c825)),
      Math.max(1, Math.round(_0x277e7a - _0x5a94e0)),
    ),
    sHeight: Math.min(
      Math.max(1, Math.round(_0x283c84.height * _0x5010af)),
      Math.max(1, Math.round(_0x5d5792 - _0x590bf7)),
    ),
  };
}
function zd(_0x33852a, _0x3a2a8e, _0x51be9a) {
  var _0x2feb48, _0x366546;
  let _0x34a9de = _0x33852a == null ? undefined : _0x33852a.scene,
    _0x14e95a =
      _0x34a9de == null || (_0x2feb48 = _0x34a9de.getObject) == null
        ? undefined
        : _0x2feb48.call(_0x34a9de, S.SLIDE_PAGE_RECT_KEY),
    _0x4e8d25 =
      _0x34a9de == null || (_0x366546 = _0x34a9de.getAncestorScale) == null
        ? undefined
        : _0x366546.call(_0x34a9de),
    _0x2e98c0 =
      (_0x4e8d25 == null ? undefined : _0x4e8d25.scaleX) ??
      (_0x34a9de == null ? undefined : _0x34a9de.scaleX) ??
      1,
    _0x557c4e =
      (_0x4e8d25 == null ? undefined : _0x4e8d25.scaleY) ??
      (_0x34a9de == null ? undefined : _0x34a9de.scaleY) ??
      _0x2e98c0;
  return _0x14e95a
    ? Rd(_0x3a2a8e, _0x51be9a, _0x14e95a, _0x2e98c0, _0x557c4e)
    : undefined;
}
function Bd(_0x138597, _0x60c9f9, _0x2ebf1d, _0x1b1551, _0x15763c) {
  if (typeof document > "u" || !_0x15763c) return;
  let _0x10122b = document.createElement("canvas");
  ((_0x10122b.width = Math.max(
    1,
    Math.round(_0x60c9f9 * Math.max(1, _0x1b1551 || 1)),
  )),
    (_0x10122b.height = Math.max(
      1,
      Math.round(_0x2ebf1d * Math.max(1, _0x1b1551 || 1)),
    )));
  let _0x53aeb4 = null;
  try {
    _0x53aeb4 = _0x10122b.getContext("2d");
  } catch {
    return;
  }
  if (_0x53aeb4)
    return (
      _0x53aeb4.drawImage(
        _0x138597,
        _0x15763c.sx,
        _0x15763c.sy,
        _0x15763c.sWidth,
        _0x15763c.sHeight,
        0,
        0,
        _0x10122b.width,
        _0x10122b.height,
      ),
      _0x10122b.toDataURL("image/png")
    );
}
const Vd = "slides-page-list-block";
function Hd(_0xe7c29b, _0x500e44) {
  let _0x4e4512 = false,
    _0xdd4e85,
    _0x4184a6,
    _0x1fde2f,
    _0x4427a0 = (_0x484664) => {
      if (_0x4e4512 || _0x4184a6 || !_0x484664.image) return;
      let _0x56827e = Qd(_0x484664.image);
      _0x56827e &&
        (_0xdd4e85 = $d(_0x500e44.hostElement, _0xdd4e85, _0x56827e));
    },
    _0x357a7d = _0xe7c29b.previewService["previewUpdated$"].subscribe(
      (_0x5eb45a) => {
        _0x5eb45a.embedId === _0x500e44.embedId &&
          (!_0x500e44.childUnitId ||
            _0x5eb45a.childUnitId === _0x500e44.childUnitId) &&
          _0x4427a0(_0x5eb45a);
      },
    );
  return (
    Wd(_0xe7c29b, _0x500e44).then(
      (_0x3ea428) => {
        if (_0x4e4512 || !_0x3ea428) return;
        let _0x2a60e8 = Ud(_0xe7c29b, _0x500e44, _0x3ea428, () => _0x4e4512);
        if (_0x2a60e8) {
          ((_0x4184a6 = _0x2a60e8.lease),
            (_0x1fde2f = _0x2a60e8.elements),
            (_0xdd4e85 = undefined));
          return;
        }
        Gd(_0xe7c29b, _0x500e44, _0x3ea428, _0x4427a0, () => _0x4e4512).then(
          (_0xd08d54) => {
            !_0x4e4512 &&
              _0xd08d54 &&
              (_0xdd4e85 = $d(_0x500e44.hostElement, _0xdd4e85, _0xd08d54));
          },
        );
      },
      () => {},
    ),
    (0, a.toDisposable)(() => {
      ((_0x4e4512 = true),
        _0x357a7d.unsubscribe(),
        _0x4184a6 == null || _0x4184a6.dispose(),
        (_0x4184a6 = undefined),
        _0x1fde2f == null || _0x1fde2f.dispose(),
        (_0x1fde2f = undefined),
        _0xdd4e85 == null || _0xdd4e85.remove(),
        (_0xdd4e85 = undefined));
    })
  );
}
function Ud(_0x3a4043, _0x4aa85f, _0x2d5789, _0x35e911) {
  let _0x54e637 = Kd(),
    _0x460c8d;
  try {
    var _0x5535ed;
    if (
      ((_0x460c8d = _0x3a4043.runtimeHostLeaseService["acquire"](
        { ..._0x2d5789, mode: "readonly" },
        _0x54e637.runtimeHost,
      )),
      !_0x460c8d.session["context"])
    )
      throw Error("EMBED_PRESENTATION_RUNTIME_CONTEXT_NOT_RESOLVED");
    if (_0x35e911()) {
      (_0x460c8d.dispose(), _0x54e637.dispose());
      return;
    }
    (_0x3a4043.activationService["focusHostForPassiveRuntime"](_0x2d5789),
      qd(_0x54e637.runtimeHost));
    let _0xdff488 = _0x460c8d.session["context"],
      _0x596d04 =
        (_0x5535ed = _0x3a4043.blockRegistry["get"](
          _0x460c8d.session["childType"],
        )) == null
          ? undefined
          : _0x5535ed.presentationPolicy;
    return (
      _0x54e637.addDisposer(
        Jd(_0x54e637.runtimeHost, _0xdff488, _0x4aa85f.entry, _0x596d04),
      ),
      _0x4aa85f.hostElement["replaceChildren"](_0x54e637.surface),
      _0x54e637.addDisposer(
        Yd(
          _0x3a4043,
          _0x460c8d,
          _0x54e637.runtimeHost,
          _0x54e637.interactionGate,
          _0x4aa85f.entry,
          _0x596d04,
        ),
      ),
      { lease: _0x460c8d, elements: _0x54e637 }
    );
  } catch {
    (_0x460c8d == null || _0x460c8d.dispose(), _0x54e637.dispose());
    return;
  }
}
async function Wd(_0x231e85, _0x2021c0) {
  let _0xda08d6 =
    _0x231e85.embedModelService["getDescriptor"](
      _0x2021c0.hostUnitId,
      _0x2021c0.embedId,
    ) ?? Zd(_0x2021c0);
  if (_0xda08d6) {
    try {
      _0xda08d6 = await _0x231e85.restoreService["materializeDescriptor"]({
        descriptor: _0xda08d6,
      });
    } catch {}
    return _0xda08d6.childUnitId && _0xda08d6.childType != null
      ? _0xda08d6
      : undefined;
  }
}
async function Gd(_0x56922c, _0xe45a21, _0x398477, _0x182c69, _0x2a6967) {
  var _0x29aed5, _0x1c25b2;
  let _0x4581b9 = await ((_0x29aed5 = _0x56922c.sceneCanvasCaptureService) ==
  null
    ? undefined
    : _0x29aed5.captureByHostAnchorId(_0xe45a21.hostAnchorId));
  if (_0x2a6967()) return;
  if (_0x4581b9) return Qd(_0x4581b9);
  let _0x2aa74a = _0x398477.childUnitId,
    _0x3eb9f1 = _0x398477.childType;
  if (!_0x2aa74a || _0x3eb9f1 == null) return;
  let _0x25a1a3 =
    (_0x1c25b2 = _0x56922c.sceneCanvasCaptureService) == null
      ? undefined
      : _0x1c25b2.getContextByHostAnchorId(_0xe45a21.hostAnchorId);
  _0x182c69(
    _0x56922c.previewService["requestPreview"]({
      descriptor: { ..._0x398477, mode: "readonly" },
      childUnitId: _0x2aa74a,
      childType: _0x3eb9f1,
      width: Math.max(1, _0xe45a21.width),
      height: Math.max(1, _0xe45a21.height),
      dpr: Math.max(1, Math.min(2, _0xe45a21.dpr)),
      reason: "initial",
      context: _0x25a1a3,
    }),
  );
}
function Kd() {
  let _0x254837 = document.createElement("div");
  ((_0x254837.dataset["embedSlidesPresentationSurface"] = "true"),
    (_0x254837.style["position"] = "absolute"),
    (_0x254837.style["inset"] = "0"),
    (_0x254837.style["isolation"] = "isolate"),
    (_0x254837.style["overflow"] = "hidden"));
  let _0x587e6a = document.createElement("div");
  ((_0x587e6a.dataset["embedPresentationRuntime"] = "true"),
    (_0x587e6a.dataset["embedSlidesPresentationRuntime"] = "true"),
    (_0x587e6a.style["position"] = "absolute"),
    (_0x587e6a.style["inset"] = "0"),
    (_0x587e6a.style["zIndex"] = "0"),
    (_0x587e6a.style["overflow"] = "hidden"),
    (_0x587e6a.style["pointerEvents"] = "none"));
  let _0x5369f9 = document.createElement("div");
  ((_0x5369f9.dataset["embedSlidesPresentationInteractionGate"] = "true"),
    (_0x5369f9.style["position"] = "absolute"),
    (_0x5369f9.style["inset"] = "0"),
    (_0x5369f9.style["zIndex"] = "1"),
    (_0x5369f9.style["pointerEvents"] = "auto"),
    (_0x5369f9.style["touchAction"] = "none"),
    _0x254837.append(_0x587e6a, _0x5369f9));
  let _0x46659e = [];
  return {
    surface: _0x254837,
    runtimeHost: _0x587e6a,
    interactionGate: _0x5369f9,
    addDisposer: (_0x2a5c2f) => _0x46659e.push(_0x2a5c2f),
    dispose: () => {
      (_0x46659e
        .splice(0)
        .reverse()
        .forEach((_0x3b5313) => _0x3b5313()),
        _0x254837.remove());
    },
  };
}
function qd(_0x4d32d6) {
  _0x4d32d6.style["pointerEvents"] = "none";
}
function Jd(_0xea7345, _0xb56665, _0x3290ac, _0x172c2b) {
  if (_0x3290ac !== Vd || !(_0x172c2b != null && _0x172c2b.getChromeCss))
    return () => {};
  let _0x4cb798 = _0x172c2b.getChromeCss({
    childContext: _0xb56665,
    entry: _0x3290ac,
    runtimeHost: _0xea7345,
  });
  if (!_0x4cb798) return () => {};
  let _0x452af0 = _0xea7345.ownerDocument["createElement"]("style");
  return (
    (_0x452af0.dataset["embedSlidesPresentationChrome"] = "true"),
    (_0x452af0.textContent = _0x4cb798),
    _0xea7345.prepend(_0x452af0),
    () => _0x452af0.remove()
  );
}
function Yd(_0x528436, _0x7578fd, _0x589f04, _0x3e2def, _0x1ea315, _0x5a9e26) {
  let _0x56a7fd = (_0x4ba8b1) => {
      (_0x4ba8b1.preventDefault(), _0x4ba8b1.stopPropagation());
    },
    _0xc3dddc = (_0x5d42d3) => {
      if (
        _0x1ea315 === Vd &&
        Xd(
          _0x589f04,
          _0x7578fd,
          _0x5a9e26,
          _0x5d42d3.clientX,
          _0x5d42d3.clientY,
        )
      ) {
        (_0x5d42d3.preventDefault(), _0x5d42d3.stopPropagation());
        return;
      }
      _0x56a7fd(_0x5d42d3);
    },
    _0x1af397 = (_0xb2e956) => {
      var _0x4fb1eb;
      let _0xe7cbeb = _0x7578fd.session["context"];
      if (!_0xe7cbeb) return;
      let _0x1fe5fe = {
          ..._0xe7cbeb,
          event: _0xb2e956,
          stage: "inactive",
          source: "wheel",
        },
        _0x6e1447 =
          _0x528436.passiveWheelHandlerRegistry["handleWheel"](_0x1fe5fe),
        _0x5234ce =
          !_0x6e1447 &&
          ((_0x4fb1eb = _0x528436.passiveViewportRegistry["get"](
            _0xe7cbeb.childType,
            _0xe7cbeb.layout,
          )) == null
            ? undefined
            : _0x4fb1eb.handleWheel(_0x1fe5fe)) === true;
      (_0x6e1447 || _0x5234ce) &&
        (_0xb2e956.preventDefault(),
        _0xb2e956.stopPropagation(),
        _0xb2e956.stopImmediatePropagation());
    },
    _0x294825 = ["pointerdown", "pointerup", "dblclick", "contextmenu"];
  return (
    _0x294825.forEach((_0x100654) =>
      _0x3e2def.addEventListener(_0x100654, _0x56a7fd),
    ),
    _0x3e2def.addEventListener("click", _0xc3dddc),
    _0x3e2def.addEventListener("wheel", _0x1af397, { passive: false }),
    () => {
      (_0x294825.forEach((_0x1be993) =>
        _0x3e2def.removeEventListener(_0x1be993, _0x56a7fd),
      ),
        _0x3e2def.removeEventListener("click", _0xc3dddc),
        _0x3e2def.removeEventListener("wheel", _0x1af397));
    }
  );
}
function Xd(_0x3228f0, _0x4d90e9, _0x45da24, _0xf31845, _0x38d787) {
  let _0x5ac51c = _0x4d90e9.session["context"];
  return !_0x5ac51c ||
    !(_0x45da24 != null && _0x45da24.activateNavigationAtPoint)
    ? false
    : _0x45da24.activateNavigationAtPoint({
        childContext: _0x5ac51c,
        clientX: _0xf31845,
        clientY: _0x38d787,
        entry: Vd,
        runtimeHost: _0x3228f0,
      });
}
function Zd(_0x1c7eff) {
  if (!(!_0x1c7eff.childUnitId || _0x1c7eff.childType == null))
    return {
      embedId: _0x1c7eff.embedId,
      hostUnitId: _0x1c7eff.hostUnitId,
      hostType: a.UniverInstanceType["UNIVER_SLIDE"],
      entry: _0x1c7eff.entry,
      hostAnchorId: _0x1c7eff.hostAnchorId,
      childUnitId: _0x1c7eff.childUnitId,
      childType: _0x1c7eff.childType,
      mode: "readonly",
      source: {
        unitType: _0x1c7eff.childType,
        ref: {
          file: { kind: t.RESOURCE_REF_FILE_KIND["SELF"] },
          unit: {
            selector: _0x1c7eff.childUnitId,
            type: (0, t.toResourceRefUnitType)(_0x1c7eff.childType),
          },
        },
      },
      sourceMeta: {
        floating: _0x1c7eff.entry === "slides-floating-object" && {
          enabled: true,
          layout: "scroll-contained",
          fullscreen: false,
        },
        tab: _0x1c7eff.entry === "slides-page-list-block" && {
          enabled: true,
          container: "slide-page-list",
          replaceHostMenu: true,
          hideHostFxBar: true,
          lockHostRibbon: true,
        },
      },
    };
}
function Qd(_0x5a6b7d) {
  if (typeof _0x5a6b7d == "string") return _0x5a6b7d;
  if (typeof HTMLCanvasElement < "u" && _0x5a6b7d instanceof HTMLCanvasElement)
    try {
      return _0x5a6b7d.toDataURL("image/png");
    } catch {
      return;
    }
  if (
    typeof ImageBitmap < "u" &&
    _0x5a6b7d instanceof ImageBitmap &&
    typeof document < "u"
  ) {
    let _0x399d46 = document.createElement("canvas");
    ((_0x399d46.width = _0x5a6b7d.width),
      (_0x399d46.height = _0x5a6b7d.height));
    let _0x74974d = _0x399d46.getContext("2d");
    return _0x74974d
      ? (_0x74974d.drawImage(_0x5a6b7d, 0, 0), _0x399d46.toDataURL("image/png"))
      : undefined;
  }
}
function $d(_0x25ad55, _0x5925b4, _0x372362) {
  let _0x2f580d = _0x5925b4 ?? document.createElement("img");
  return (
    (_0x2f580d.alt = ""),
    (_0x2f580d.dataset["embedSlidesPresentationPreviewImage"] = "true"),
    (_0x2f580d.style["display"] = "block"),
    (_0x2f580d.style["width"] = "100%"),
    (_0x2f580d.style["height"] = "100%"),
    (_0x2f580d.style["objectFit"] = "fill"),
    (_0x2f580d.style["pointerEvents"] = "none"),
    (_0x2f580d.src = _0x372362),
    _0x2f580d.parentElement !== _0x25ad55 &&
      _0x25ad55.replaceChildren(_0x2f580d),
    _0x2f580d
  );
}
let ef = class {
  constructor(_0x3ad291, _0x263ae2) {
    ((this._instanceService = _0x3ad291),
      (this._renderManagerService = _0x263ae2),
      V(this, "childType", a.UniverInstanceType["UNIVER_SLIDE"]),
      V(this, "supportedLayouts", ["aspect-fit"]));
  }
  mount(_0x24ef34) {
    var _0x4f9ff3;
    let _0x261f29 = this._getSlideModel(_0x24ef34.childUnitId);
    if (!_0x261f29) return;
    (_0x4f9ff3 = _0x24ef34.viewState) != null &&
      _0x4f9ff3.pageId &&
      _0x261f29.pageManager["getSlide"](_0x24ef34.viewState["pageId"]) &&
      _0x261f29.pageManager["setActiveSlide"](_0x24ef34.viewState["pageId"]);
    let _0x27adfc = ge(tf(_0x24ef34));
    if (!_0x27adfc) return;
    let _0x2e297b = _0x24ef34.roots["canvas"]
      ? Et(this._renderManagerService, _0x24ef34.childUnitId, _0x27adfc)
      : undefined;
    if (!_0x2e297b) {
      _0x27adfc.dispose();
      return;
    }
    _0x24ef34.roots["canvas"] &&
      ((_0x24ef34.roots["canvas"].dataset["embedChildRenderUnitId"] =
        _0x24ef34.childUnitId),
      (_0x24ef34.roots["canvas"].dataset["embedChildRenderMode"] =
        "slide-readonly-preview-shell"));
    let _0x22d456 = nn(_0x24ef34.roots["content"]);
    return (
      (_0x24ef34.roots["content"].dataset["embedChildRenderUnitId"] =
        _0x24ef34.childUnitId),
      (_0x24ef34.roots["content"].dataset["embedChildRenderMode"] =
        "slide-readonly-preview"),
      _0x22d456.render(
        (0, m.jsx)(Kt, {
          injector: _0x27adfc,
          mountContainer: _0x24ef34.roots["root"],
          embedId: _0x24ef34.embedId,
          passThroughWheelGestures: true,
          children: (0, m.jsx)(S.SlideEmbedReadonlyFloatingPreview, {
            unitId: _0x24ef34.childUnitId,
            render: _0x2e297b,
          }),
        }),
      ),
      (0, a.toDisposable)(() => {
        var _0x5c452b, _0xd75824, _0x731125, _0x59d9aa;
        try {
          var _0x133dfd, _0x442cf2;
          _0x2e297b == null ||
            (_0x442cf2 = (_0x133dfd = _0x2e297b.engine).unmount) == null ||
            _0x442cf2.call(_0x133dfd);
        } catch {}
        ((_0x5c452b = (_0xd75824 = this._renderManagerService).removeRender) ==
          null || _0x5c452b.call(_0xd75824, _0x24ef34.childUnitId),
          rn(_0x22d456),
          _0x24ef34.roots["content"].removeAttribute(
            "data-embed-child-render-unit-id",
          ),
          _0x24ef34.roots["content"].removeAttribute(
            "data-embed-child-render-mode",
          ),
          (_0x731125 = _0x24ef34.roots["canvas"]) == null ||
            _0x731125.removeAttribute("data-embed-child-render-unit-id"),
          (_0x59d9aa = _0x24ef34.roots["canvas"]) == null ||
            _0x59d9aa.removeAttribute("data-embed-child-render-mode"),
          _0x27adfc.dispose());
      })
    );
  }
  handleWheel(_0x3cee6a) {
    var _0x436829, _0x1e60c4;
    let _0x4da5d5 = this._getSlideModel(_0x3cee6a.childUnitId);
    if (!_0x4da5d5) return false;
    let _0x5c00c8 =
      Math.abs(_0x3cee6a.event["deltaY"]) >= Math.abs(_0x3cee6a.event["deltaX"])
        ? _0x3cee6a.event["deltaY"]
        : _0x3cee6a.event["deltaX"];
    if (_0x5c00c8 === 0) return false;
    let _0x5f546d = nf(_0x4da5d5);
    if (_0x5f546d.length < 2) return true;
    let _0x3d450d =
        ((_0x436829 = _0x4da5d5.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x436829.getId()) ?? _0x5f546d[0],
      _0x202986 = Math.max(0, _0x5f546d.indexOf(_0x3d450d)),
      _0x4e83e2 =
        _0x5f546d[
          Math.max(
            0,
            Math.min(
              _0x5f546d.length - 1,
              _0x202986 + (_0x5c00c8 > 0 ? 1 : -1),
            ),
          )
        ];
    return !_0x4e83e2 || _0x4e83e2 === _0x3d450d
      ? true
      : (_0x4da5d5.pageManager["setActiveSlide"](_0x4e83e2),
        _0x3cee6a.updateViewState({
          unitId: _0x3cee6a.childUnitId,
          pageId: _0x4e83e2,
          scaleMode: "fit",
          zoomRatio:
            (_0x1e60c4 = _0x4da5d5.getZoomRatio) == null
              ? undefined
              : _0x1e60c4.call(_0x4da5d5),
        }),
        true);
  }
  _getSlideModel(_0x364c09) {
    return (
      this._instanceService["getUnit"](
        _0x364c09,
        a.UniverInstanceType["UNIVER_SLIDE"],
      ) ?? undefined
    );
  }
};
ef = Z([X(0, a.IUniverInstanceService), X(1, p.IRenderManagerService)], ef);
function tf(_0x423fb5) {
  let _0x1e4519 = () => {};
  return {
    descriptor: _0x423fb5.descriptor,
    layout: _0x423fb5.layout,
    injector: _0x423fb5.injector,
    hostElement: _0x423fb5.roots["root"],
    container: _0x423fb5.roots["root"],
    hostUnitId: _0x423fb5.hostUnitId,
    embedId: _0x423fb5.embedId,
    childUnitId: _0x423fb5.childUnitId,
    childType: _0x423fb5.childType,
    renderScope: {
      hostUnitId: _0x423fb5.hostUnitId,
      hostAnchorId: _0x423fb5.descriptor["hostAnchorId"],
      embedId: _0x423fb5.embedId,
      childUnitId: _0x423fb5.childUnitId,
      childType: _0x423fb5.childType,
      layout: _0x423fb5.layout,
      mode: "float",
      rootElement: _0x423fb5.roots["root"],
      contentRoot: _0x423fb5.roots["content"],
      canvasRoot: _0x423fb5.roots["canvas"],
      active$: (0, f.of)(false),
    },
    runtimeScope: {
      descriptor: _0x423fb5.descriptor,
      host: {
        unitId: _0x423fb5.hostUnitId,
        type: _0x423fb5.descriptor["hostType"],
        anchorId: _0x423fb5.descriptor["hostAnchorId"],
        entry: _0x423fb5.descriptor["entry"],
        layout: "float",
      },
      child: { unitId: _0x423fb5.childUnitId, type: _0x423fb5.childType },
      injector: _0x423fb5.injector,
      roots: {
        root: _0x423fb5.roots["root"],
        content: _0x423fb5.roots["content"],
        canvas: _0x423fb5.roots["canvas"],
        overlay: _0x423fb5.roots["root"],
        popup: _0x423fb5.roots["root"],
      },
      activate: _0x1e4519,
      deactivate: _0x1e4519,
      dispose: _0x1e4519,
    },
  };
}
function nf(_0x297290) {
  var _0x338504, _0x5f0528, _0x1038a8;
  let _0x35160f =
    (_0x338504 = _0x297290.getSnapshot) == null
      ? undefined
      : _0x338504.call(_0x297290).slideOrder;
  return Array.isArray(_0x35160f) && _0x35160f.length > 0
    ? _0x35160f
    : (((_0x5f0528 = (_0x1038a8 = _0x297290.pageManager).getSlides) == null
        ? undefined
        : _0x5f0528
            .call(_0x1038a8)
            .map((_0x26d9e6) => _0x26d9e6.getId())
            .filter(Boolean)) ?? []);
}
function rf(_0x1cf47f) {
  bs(_0x1cf47f, "slides-ui.embed", af);
}
function af(_0x173721) {
  let _0x303ed4 = _0x173721.get(t.EmbedHostAdapterRegistryService),
    _0x51b1f2 = _0x173721.get(vt),
    _0x59afe9 = _0x173721.get(gt),
    _0x2215db = _0x173721.get(H),
    _0xb4dbfa = _0x173721.get(_t),
    _0x19315e = _0x173721.get(Ur),
    _0x31cb9b = _0x173721.get(ii),
    _0x2ac87d = _0x173721.get(_s),
    _0x1447f7 = _0x173721.has(t.EmbedHostAnchorModelService)
      ? _0x173721.get(t.EmbedHostAnchorModelService)
      : undefined,
    _0x591ad9 = _0x173721.has(a.IUniverInstanceService)
      ? _0x173721.get(a.IUniverInstanceService)
      : undefined;
  (_0x173721.has(S.ISlideEmbedRuntimeService) ||
    _0x173721.add([
      S.ISlideEmbedRuntimeService,
      {
        useFactory: () =>
          of({
            embedModelService: _0x173721.get(t.EmbedModelService),
            mountService: _0x173721.get(Ht),
            activationService: _0x173721.get(Gt),
            blockRegistry: _0x173721.get(H),
            restoreService: _0x173721.get(Gr),
            previewService: _0x173721.get(Ur),
            runtimeHostLeaseService: _0x173721.get(xa),
            passiveViewportRegistry: _0x173721.get(ii),
            passiveWheelHandlerRegistry: _0x173721.get(ai),
            univerInstanceService: _0x591ad9,
            sceneCanvasCaptureService: _0x173721.has(kt)
              ? _0x173721.get(kt)
              : undefined,
          }),
      },
    ]),
    _0x173721.has(S.ISlideEmbedFloatingActiveService) ||
      _0x173721.add([
        S.ISlideEmbedFloatingActiveService,
        { useFactory: () => _0x173721.get(ce) },
      ]),
    _0x173721.has(S.ISlideEmbedMountService) ||
      _0x173721.add([
        S.ISlideEmbedMountService,
        { useFactory: () => _0x173721.get(Ht) },
      ]),
    _0x173721.has(S.ISlideEmbedActivationService) ||
      _0x173721.add([
        S.ISlideEmbedActivationService,
        { useFactory: () => _0x173721.get(Gt) },
      ]),
    _0x173721.has(S.ISlideEmbedFocusOwnerService) ||
      _0x173721.add([
        S.ISlideEmbedFocusOwnerService,
        { useFactory: () => _0x173721.get(t.EmbedFocusOwnerService) },
      ]),
    _0x173721.has(S.ISlideEmbedRuntimeFocusCoordinator) ||
      _0x173721.add([
        S.ISlideEmbedRuntimeFocusCoordinator,
        { useFactory: () => _0x173721.get(K) },
      ]),
    _0x173721.has(S.ISlideEmbedFloatDomRenderer) ||
      _0x173721.add([
        S.ISlideEmbedFloatDomRenderer,
        {
          useFactory: () => ({
            render: (_0x5674c9) => {
              let { data: _0x85d16 } = _0x5674c9;
              return (0, d.createElement)(_a, { ..._0x5674c9, data: _0x85d16 });
            },
          }),
        },
      ]),
    [
      (0, t.createSlidesFloatingObjectHostAdapterContribution)(
        _0x1447f7,
        _0x591ad9,
        () =>
          _0x173721.has(g.ISlideDrawingService)
            ? _0x173721.get(g.ISlideDrawingService)
            : undefined,
      ),
      Cd(_0x1447f7, _0x591ad9, _0x173721.get(S.ISlideEmbedRuntimeService)),
    ].forEach((_0x990f26) => {
      _0x303ed4.get(_0x990f26.hostType, _0x990f26.entry) ||
        _0x303ed4.register(_0x990f26);
    }),
    [wd(), Td()].forEach((_0x526a20) => {
      _0x51b1f2.get(_0x526a20.hostType, _0x526a20.entry) ||
        _0x51b1f2.register(_0x526a20);
    }));
  let _0x2cb25f = kd(_0x173721.get(a.ICommandService));
  _0x59afe9.get(_0x2cb25f.childType) || _0x59afe9.register(_0x2cb25f);
  let _0x2c0806 = _d();
  (_0x2215db.get(_0x2c0806.childType) || _0x2215db.register(_0x2c0806),
    xd().forEach((_0x153396) => {
      _0xb4dbfa.hasExact(
        _0x153396.hostType,
        _0x153396.entry,
        _0x153396.childType,
      ) || _0xb4dbfa.register(_0x153396);
    }),
    _0x19315e.registerProvider(_0x173721.createInstance(Fd)),
    _0x31cb9b.get(a.UniverInstanceType["UNIVER_SLIDE"]) ||
      _0x31cb9b.register(Od()),
    _0x2ac87d.get(a.UniverInstanceType["UNIVER_SLIDE"]) ||
      _0x2ac87d.register(_0x173721.createInstance(ef)));
}
function of(_0x28f9a1) {
  return {
    mountPageList: (_0x57a8f2) => {
      var _0x28ce12, _0xd2e3bf;
      let _0x19bbfb = {
          embedId: _0x57a8f2.embedId,
          hostUnitId: _0x57a8f2.hostUnitId,
          hostType: a.UniverInstanceType["UNIVER_SLIDE"],
          entry: "slides-page-list-block",
          hostAnchorId: _0x57a8f2.hostAnchorId,
          childUnitId: _0x57a8f2.childUnitId,
          childType: _0x57a8f2.childType,
          source: {
            unitType: _0x57a8f2.childType,
            ref: {
              file: { kind: t.RESOURCE_REF_FILE_KIND["SELF"] },
              unit: {
                selector: _0x57a8f2.childUnitId,
                type: (0, t.toResourceRefUnitType)(_0x57a8f2.childType),
              },
            },
          },
          sourceMeta: {
            floating: false,
            tab: {
              enabled: true,
              container: "slide-page-list",
              replaceHostMenu: true,
              hideHostFxBar: true,
              lockHostRibbon: true,
            },
          },
        },
        _0x1a7004 =
          (_0x28ce12 = (_0xd2e3bf = _0x28f9a1.mountService).getSession) == null
            ? undefined
            : _0x28ce12.call(_0xd2e3bf, _0x57a8f2.embedId),
        _0x1c2e97 = () => {
          var _0x48b68a, _0x4456d1;
          ((_0x48b68a = (_0x4456d1 = _0x28f9a1.mountService).getSession) ==
            null ||
          (_0x48b68a = _0x48b68a.call(_0x4456d1, _0x57a8f2.embedId)) == null
            ? undefined
            : _0x48b68a.hostElement) === _0x57a8f2.hostElement &&
            (_0x28f9a1.activationService["clearTab"](_0x57a8f2.embedId),
            _0x28f9a1.mountService["unmount"](_0x57a8f2.embedId));
        };
      return (_0x1a7004 == null ? undefined : _0x1a7004.hostUnitId) ===
        _0x57a8f2.hostUnitId &&
        _0x1a7004.entry === "slides-page-list-block" &&
        _0x1a7004.childUnitId === _0x57a8f2.childUnitId &&
        _0x1a7004.hostElement === _0x57a8f2.hostElement
        ? (_0x28f9a1.activationService["activateTab"](_0x19bbfb),
          (0, a.toDisposable)(_0x1c2e97))
        : (_0x28f9a1.mountService["mountIntoHostElement"](
            _0x19bbfb,
            _0x57a8f2.hostElement,
          ),
          _0x28f9a1.activationService["activateTab"](_0x19bbfb),
          (0, a.toDisposable)(_0x1c2e97));
    },
    mountFloatingObject: (_0x316270) => {
      let _0x4340fc = _0x28f9a1.embedModelService["getDescriptor"](
        _0x316270.hostUnitId,
        _0x316270.embedId,
      ) ?? {
        embedId: _0x316270.embedId,
        hostUnitId: _0x316270.hostUnitId,
        hostType: a.UniverInstanceType["UNIVER_SLIDE"],
        entry: "slides-floating-object",
        hostAnchorId: _0x316270.hostAnchorId,
        childUnitId: _0x316270.childUnitId,
        childType: _0x316270.childType,
        source: {
          unitType: _0x316270.childType,
          ref: {
            file: { kind: t.RESOURCE_REF_FILE_KIND["SELF"] },
            unit: {
              selector: _0x316270.childUnitId,
              type: (0, t.toResourceRefUnitType)(_0x316270.childType),
            },
          },
        },
        sourceMeta: {
          floating: {
            enabled: true,
            layout: "scroll-contained",
            fullscreen: true,
          },
          tab: false,
        },
      };
      return (
        _0x28f9a1.mountService["mountIntoHostElement"](
          _0x4340fc,
          _0x316270.hostElement,
        ),
        (0, a.toDisposable)(() => {
          _0x28f9a1.mountService["unmount"](_0x316270.embedId);
        })
      );
    },
    clearAndUnmount: (_0x12d5d7) => {
      (_0x28f9a1.activationService["clearTab"](_0x12d5d7),
        _0x28f9a1.mountService["unmount"](_0x12d5d7));
    },
    unmountFloatingSessions: (_0x5506da) => {
      _0x28f9a1.mountService["listSessions"]()
        .filter(
          (_0x5e1c97) =>
            _0x5e1c97.hostUnitId === _0x5506da &&
            _0x5e1c97.entry === "slides-floating-object",
        )
        .forEach((_0x100264) =>
          _0x28f9a1.mountService["unmount"](_0x100264.embedId),
        );
    },
    listSessions: () =>
      _0x28f9a1.mountService["listSessions"]().map((_0x555ec2) => ({
        embedId: _0x555ec2.embedId,
        hostUnitId: _0x555ec2.hostUnitId,
        entry: _0x555ec2.entry,
        childType: _0x555ec2.childType,
        childUnitId: _0x555ec2.childUnitId,
      })),
    capturePreviewByHostAnchorId: (_0x231a69, _0x52b8fb) =>
      sf(_0x28f9a1, _0x231a69, _0x52b8fb),
    mountPresentationEmbed: (_0x337d89) => Hd(_0x28f9a1, _0x337d89),
  };
}
async function sf(_0x260c85, _0x40a309, _0x226433) {
  var _0x488fe7, _0x209660, _0x255032;
  let _0x2546bb =
    (_0x488fe7 = _0x260c85.sceneCanvasCaptureService) == null
      ? undefined
      : _0x488fe7.getContextByHostAnchorId(_0x40a309);
  _0x2546bb && (await Ma(_0x2546bb));
  let _0x72d6f = await ((_0x209660 = _0x260c85.sceneCanvasCaptureService) ==
  null
    ? undefined
    : _0x209660.captureByHostAnchorId(_0x40a309));
  if (_0x72d6f) return Qd(_0x72d6f);
  if (!_0x226433) return;
  let _0x22036e = await lf(_0x260c85, _0x40a309, _0x226433);
  if (!_0x22036e) return;
  let _0xac7f96 = _0x22036e.childUnitId ?? _0x226433.childUnitId,
    _0x380dec = _0x22036e.childType ?? _0x226433.childType;
  if (!_0xac7f96 || _0x380dec == null) return;
  let _0x29f113 = cf(_0x260c85, _0x22036e, _0x40a309, _0x226433),
    _0x546d7b = _0x260c85.previewService["requestPreview"]({
      descriptor: { ..._0x22036e, mode: "readonly" },
      childUnitId: _0xac7f96,
      childType: _0x380dec,
      width: _0x29f113.width,
      height: _0x29f113.height,
      dpr: Math.max(1, Math.min(3, _0x226433.dpr)),
      reason: "initial",
      context:
        (_0x255032 = _0x260c85.sceneCanvasCaptureService) == null
          ? undefined
          : _0x255032.getContextByHostAnchorId(_0x40a309),
    }),
    _0x283bac = _0x546d7b.image ? Qd(_0x546d7b.image) : undefined;
  return _0x546d7b.status === "pending"
    ? uf(_0x260c85.previewService, _0x546d7b, _0xac7f96)
    : _0x283bac;
}
function cf(_0x516b51, _0x2e019a, _0x3d8225, _0x34ddb5) {
  var _0x35b845, _0xaff6d9;
  let _0x157ed5 = {
    width: Math.max(1, _0x34ddb5.width),
    height: Math.max(1, _0x34ddb5.height),
  };
  if (_0x2e019a.entry !== t.EmbedHostEntryEnum["SlidesPageListBlock"])
    return _0x157ed5;
  let _0x1cd811 =
    (_0x35b845 = _0x516b51.univerInstanceService) == null
      ? undefined
      : _0x35b845.getUnit(
          _0x34ddb5.hostUnitId,
          a.UniverInstanceType["UNIVER_SLIDE"],
        );
  if (!_0x1cd811) return _0x157ed5;
  let _0x5c6d87 =
      (_0xaff6d9 = _0x1cd811.pageManager["getSlide"](_0x3d8225)) == null
        ? undefined
        : _0xaff6d9.getData(),
    _0x2e3056 = (0, S.resolveSlideLogicalPageSize)(
      (_0x5c6d87 == null ? undefined : _0x5c6d87.pageSize) ??
        _0x1cd811.getSnapshot().defaultPageSize,
    );
  return {
    width: Math.max(1, _0x2e3056.width),
    height: Math.max(1, _0x2e3056.height),
  };
}
async function lf(_0x4dd5ba, _0x1f5715, _0xa2db7e) {
  let _0x546d9c =
    _0x4dd5ba.embedModelService["getDescriptor"](
      _0xa2db7e.hostUnitId,
      _0xa2db7e.embedId,
    ) ??
    Zd({
      hostUnitId: _0xa2db7e.hostUnitId,
      embedId: _0xa2db7e.embedId,
      hostAnchorId: _0x1f5715,
      childUnitId: _0xa2db7e.childUnitId,
      childType: _0xa2db7e.childType,
      entry: t.EmbedHostEntryEnum["SlidesPageListBlock"],
    });
  if (_0x546d9c) {
    try {
      _0x546d9c = await _0x4dd5ba.restoreService["materializeDescriptor"]({
        descriptor: _0x546d9c,
      });
    } catch {}
    return _0x546d9c;
  }
}
function uf(_0x14042a, _0x153f26, _0x2bce35) {
  return new Promise((_0x44659f) => {
    let _0x546463 = false,
      _0x3f8560,
      _0xe3a1df,
      _0x331c22 = (_0x1f9254) => {
        _0x546463 ||
          ((_0x546463 = true),
          globalThis.clearTimeout(_0xe3a1df),
          _0x3f8560 == null || _0x3f8560.unsubscribe(),
          _0x44659f(_0x1f9254));
      };
    ((_0xe3a1df = globalThis.setTimeout(() => _0x331c22(undefined), 5000)),
      (_0x3f8560 = _0x14042a.previewUpdated$["subscribe"]({
        next: (_0x3542a9) => {
          _0x3542a9.embedId !== _0x153f26.embedId ||
            _0x3542a9.childUnitId !== _0x2bce35 ||
            _0x3542a9.revision < _0x153f26.revision ||
            _0x3542a9.status === "pending" ||
            _0x331c22(_0x3542a9.image ? Qd(_0x3542a9.image) : undefined);
        },
        complete: () => _0x331c22(undefined),
      })));
  });
}
function df(_0x56b8c0) {
  (Bl(_0x56b8c0), od(_0x56b8c0), rf(_0x56b8c0), nl(_0x56b8c0), vl(_0x56b8c0));
}
function ff(_0x189768) {
  il(_0x189768);
}
const pf = [0, 16, 100, 300, 1000];
async function mf(_0x35c35, _0x443780) {
  var _0x1ed36b;
  let {
      instanceService: _0x5d1465,
      childUnitId: _0x43a30b,
      childType: _0x2741e9,
      restoreUnitId: _0x542e84,
      shouldRestore: _0x1749f0,
      settleDelayMs: _0x3cb30e = 16,
      deferredRestoreDelaysMs: _0x735845 = _0x542e84 ? pf : [],
    } = _0x35c35,
    _0x48328a = _0x5d1465.getCurrentUnitOfType(_0x2741e9),
    _0x21bd1e =
      ((_0x1ed36b = _0x5d1465.getFocusedUnit()) == null
        ? undefined
        : _0x1ed36b.getUnitId()) ??
      null ??
      _0x542e84 ??
      null;
  (_0x5d1465.setCurrentUnitForType(_0x43a30b), _0x5d1465.focusUnit(_0x43a30b));
  let _0x18f404 = () => {
    (_0x1749f0 && !_0x1749f0()) ||
      (_0x48328a &&
        _0x48328a.getUnitId() !== _0x43a30b &&
        _0x5d1465.setCurrentUnitForType(_0x48328a.getUnitId()),
      _0x542e84 && _0x5d1465.setCurrentUnitForType(_0x542e84),
      _0x5d1465.focusUnit(_0x21bd1e));
  };
  try {
    let _0x5a4450 = await _0x443780();
    return (_0x3cb30e > 0 && (await hf(_0x3cb30e)), _0x5a4450);
  } finally {
    (_0x18f404(), gf(_0x18f404, _0x735845));
  }
}
function hf(_0x3b062d) {
  return new Promise((_0x51f4ec) => setTimeout(_0x51f4ec, _0x3b062d));
}
function gf(_0x237be4, _0x3e6df7) {
  _0x3e6df7.forEach((_0x16ed8f) => {
    globalThis.setTimeout(_0x237be4, _0x16ed8f);
  });
}
const _f = new WeakMap();
let vf = 0;
function yf(_0x4f8c7c, _0x3c8fd6) {
  return _0x4f8c7c.has(Cf)
    ? _0x4f8c7c.get(Cf).register(_0x3c8fd6)
    : xf(_0x4f8c7c, _0x3c8fd6);
}
function bf(_0x589d3a) {
  if (!_0x589d3a.has(Cf)) return;
  let _0x19b45e = _f.get(_0x589d3a);
  _0x19b45e != null &&
    _0x19b45e.size &&
    ([..._0x19b45e.values()]
      .sort((_0x55506e, _0x51d122) => _0x55506e.index - _0x51d122.index)
      .forEach(({ contribution: _0x436015 }) => yf(_0x589d3a, _0x436015)),
    _f.delete(_0x589d3a));
}
function xf(_0x3f8c85, _0xc947ab) {
  let _0x57fc6e = { contribution: _0xc947ab, index: vf++ },
    _0x1a4e7f = Sf(_0xc947ab, _0x57fc6e.index),
    _0x1c06de = _0x3f8c85,
    _0x1df893 = _f.get(_0x1c06de) ?? new Map();
  return (
    _0x1df893.set(_0x1a4e7f, _0x57fc6e),
    _f.set(_0x1c06de, _0x1df893),
    (0, a.toDisposable)(() => {
      let _0x3af3ca = _f.get(_0x1c06de);
      (_0x3af3ca == null ? undefined : _0x3af3ca.get(_0x1a4e7f)) ===
        _0x57fc6e && _0x3af3ca.delete(_0x1a4e7f);
    })
  );
}
function Sf(_0x1c36c7, _0x3d72b4) {
  return _0x1c36c7.id
    ? _0x1c36c7.childType + ":" + _0x1c36c7.id
    : _0x1c36c7.childType + ":anonymous:" + _0x3d72b4;
}
let Cf = class {
  constructor(_0x203e7b, _0x1b0bad) {
    ((this._injector = _0x203e7b),
      (this._focusCoordinator = _0x1b0bad),
      V(this, "_contributions", new Map()),
      V(this, "_nextIndex", 0));
  }
  register(_0x1c1dbf) {
    if (
      _0x1c1dbf.id &&
      this._hasContributionId(_0x1c1dbf.childType, _0x1c1dbf.id)
    )
      return (0, a.toDisposable)(() => {});
    let _0x1d07e5 = { contribution: _0x1c1dbf, index: this._nextIndex++ },
      _0x4e8179 = this._contributions["get"](_0x1c1dbf.childType) ?? [];
    return (
      _0x4e8179.push(_0x1d07e5),
      _0x4e8179.sort(wf),
      this._contributions["set"](_0x1c1dbf.childType, _0x4e8179),
      (0, a.toDisposable)(() => {
        let _0x2fce8c = this._contributions["get"](_0x1c1dbf.childType);
        if (!_0x2fce8c) return;
        let _0x267216 = _0x2fce8c.filter(
          (_0x31041f) => _0x31041f !== _0x1d07e5,
        );
        _0x267216.length
          ? this._contributions["set"](_0x1c1dbf.childType, _0x267216)
          : this._contributions["delete"](_0x1c1dbf.childType);
      })
    );
  }
  getAll(_0x372299) {
    return (this._contributions["get"](_0x372299) ?? []).map(
      (_0x59a752) => _0x59a752.contribution,
    );
  }
  async prepare(_0x371dc1) {
    let _0x501583 = this.getAll(_0x371dc1.childType);
    _0x501583.length &&
      (await mf(
        {
          instanceService: this._injector["get"](a.IUniverInstanceService),
          childUnitId: _0x371dc1.childUnitId,
          childType: _0x371dc1.childType,
          restoreUnitId: _0x371dc1.restoreUnitId,
          settleDelayMs: _0x371dc1.settleDelayMs,
          shouldRestore: () =>
            !this._focusCoordinator["isChildUnitInActiveSession"](
              _0x371dc1.childUnitId,
            ),
        },
        async () => {
          for (let _0x3f2051 of _0x501583)
            _0x3f2051.prepare &&
              (await _0x3f2051.prepare({
                injector: this._injector,
                childUnitId: _0x371dc1.childUnitId,
                childType: _0x371dc1.childType,
                descriptor: _0x371dc1.descriptor,
              }));
        },
      ));
  }
  _hasContributionId(_0x164ab6, _0x491463) {
    return (this._contributions["get"](_0x164ab6) ?? []).some(
      (_0x46fb9b) => _0x46fb9b.contribution["id"] === _0x491463,
    );
  }
};
Cf = Z([X(0, (0, a.Inject)(a.Injector)), X(1, (0, a.Inject)(K))], Cf);
function wf(_0x5d9aa5, _0x44fabb) {
  return (
    (_0x5d9aa5.contribution["order"] ?? _0x5d9aa5.index) -
      (_0x44fabb.contribution["order"] ?? _0x44fabb.index) ||
    _0x5d9aa5.index - _0x44fabb.index
  );
}
function Tf() {
  return [];
}
let Ef = class {
  constructor(_0x1878c8, _0x238e21) {
    ((this._focusOwnerService = _0x1878c8),
      (this._undoRedoService = _0x238e21));
  }
  pushUndoRedoForChild(_0x15ba86) {
    let _0x1cfd3f = this.resolveStackUnitId(_0x15ba86.unitID);
    return (
      this._undoRedoService["pushUndoRedo"]({
        ..._0x15ba86,
        unitID: _0x1cfd3f,
      }),
      { stackUnitId: _0x1cfd3f, routedToHost: _0x1cfd3f !== _0x15ba86.unitID }
    );
  }
  resolveStackUnitId(_0x53ffc5) {
    let _0x4eb498 = this._focusOwnerService["getFocusOwner"]();
    return !_0x4eb498 || _0x4eb498.childUnitId !== _0x53ffc5
      ? _0x53ffc5
      : _0x4eb498.hostUnitId;
  }
};
Ef = Z(
  [X(0, (0, a.Inject)(t.EmbedFocusOwnerService)), X(1, a.IUndoRedoService)],
  Ef,
);
let Df = class extends a.Plugin {
  constructor(_0xba0285 = rr, _0x52ddb5, _0x5f17bf, _0x5d33a0) {
    (super(),
      (this._config = _0xba0285),
      (this._injector = _0x52ddb5),
      (this._configService = _0x5f17bf),
      (this._univerInstanceService = _0x5d33a0));
    let { ..._0x55e015 } = (0, a.merge)({}, rr, this._config);
    this._configService["setConfig"]("embed-ui.config", _0x55e015);
  }
  onStarting() {
    (this._enableEmbedUnitLeasePolicy(),
      this._registerServices(),
      this._registerProductUIContributions(),
      this._registerLateProductUIContributions(),
      this._registerProductMenus(),
      this._flushPendingContributions(),
      this._registerFloatingMenus(),
      this._touchServices(),
      this._registerDefaultHostToolbar());
  }
  onReady() {
    (this._flushPendingContributions(), this._injector["get"](Wo));
  }
  _registerServices() {
    (this._injector["has"](r.IPrintPreparationService) ||
      this._injector["add"]([
        r.IPrintPreparationService,
        { useClass: r.PrintPreparationService },
      ]),
      this._injector["has"](i.SlidePrintDrawingTransformService) ||
        this._injector["add"]([i.SlidePrintDrawingTransformService]),
      this._injector["has"](e.BoardPrintCompositionService) ||
        this._injector["add"]([e.BoardPrintCompositionService]),
      [
        [vt],
        [Gr],
        [Cf],
        [Fo],
        [Gt],
        [gt],
        [H],
        [ce],
        [Wr],
        [_t],
        [Ur],
        [ba],
        [Zn],
        [U],
        [Xr],
        [J],
        [Ro],
        [zo],
        [Bo],
        [Ho],
        [Wo],
        [ps],
        [Io],
        [Ht],
        [yt],
        [ai],
        [ii],
        [Ua],
        [Mn],
        [_s],
        [Y],
        [K],
        [xa],
        [kt],
        [de],
        [Ef],
      ].forEach((_0x2871e2) => this._injector["add"](_0x2871e2)),
      this._injector["has"](o.IDocEmbedInteractionBoundaryService) ||
        this._injector["add"]([
          o.IDocEmbedInteractionBoundaryService,
          { useFactory: () => this._injector["get"](J) },
        ]),
      this._injector["has"](o.IDocEmbedRuntimeFocusCoordinator) ||
        this._injector["add"]([
          o.IDocEmbedRuntimeFocusCoordinator,
          { useFactory: () => this._injector["get"](K) },
        ]),
      this._injector["has"](s.ISheetEmbedInteractionBoundaryService) ||
        this._injector["add"]([
          s.ISheetEmbedInteractionBoundaryService,
          { useFactory: () => this._injector["get"](J) },
        ]),
      this._injector["has"](s.ISheetEmbedRuntimeFocusCoordinator) ||
        this._injector["add"]([
          s.ISheetEmbedRuntimeFocusCoordinator,
          { useFactory: () => this._injector["get"](K) },
        ]),
      this._injector["has"](s.ISheetEmbedFloatingGeometryService) ||
        this._injector["add"]([
          s.ISheetEmbedFloatingGeometryService,
          { useFactory: () => this._injector["get"](Wr) },
        ]));
  }
  _registerProductMenus() {
    gs(this._injector).forEach((_0x2a80af) => this.disposeWithMe(_0x2a80af));
  }
  _registerProductUIContributions() {
    df(this._injector);
  }
  _registerLateProductUIContributions() {
    let _0x252317 = this._univerInstanceService["getTypeOfUnitAdded$"](
      a.UniverInstanceType["UNIVER_BASE"],
    ).subscribe(() => ff(this._injector));
    this.disposeWithMe((0, a.toDisposable)(() => _0x252317.unsubscribe()));
  }
  _flushPendingContributions() {
    (xs(this._injector), kn(this._injector), bf(this._injector));
  }
  _registerFloatingMenus() {
    var _0x305088;
    let _0xe575cf = this._injector["get"](_t);
    ((_0x305088 = this._config["defaults"]) == null
      ? undefined
      : _0x305088.floatingMenus) !== false &&
      Tf().forEach((_0x51ab70) => {
        _0xe575cf.hasExact(
          _0x51ab70.hostType,
          _0x51ab70.entry,
          _0x51ab70.childType,
        ) || _0xe575cf.register(_0x51ab70);
      });
  }
  _touchServices() {
    (0, a.touchDependencies)(this._injector, [
      [vt],
      [Gr],
      [Cf],
      [Fo],
      [Gt],
      [gt],
      [H],
      [ce],
      [_t],
      [Ur],
      [ba],
      [Zn],
      [U],
      [Xr],
      [Ro],
      [zo],
      [Bo],
      [Ho],
      [ps],
      [Io],
      [Ht],
      [yt],
      [ai],
      [ii],
      [Ua],
      [Mn],
      [_s],
      [Y],
      [K],
      [xa],
      [kt],
      [de],
      [Ef],
    ]);
  }
  _registerDefaultHostToolbar() {
    var _0x5326a4;
    ((_0x5326a4 = this._config["defaults"]) == null
      ? undefined
      : _0x5326a4.hostToolbar) !== false &&
      this.disposeWithMe(
        this._injector["get"](c.IUIPartsService).registerComponent(
          c.BuiltInUIPart["GLOBAL"],
          () => $n,
        ),
      );
  }
  _enableEmbedUnitLeasePolicy() {
    this._injector["get"](
      t.EmbedUnitLeasePolicyService,
    ).enableExclusivePolicy();
  }
};
(V(Df, "pluginName", "UNIVER_EMBED_UI_PLUGIN"),
  V(Df, "packageName", ie),
  V(Df, "version", L),
  V(Df, "type", a.UniverInstanceType["UNIVER_UNKNOWN"]),
  (Df = Z(
    [
      (0, a.DependentOn)(n.UniverLicensePlugin, t.UniverEmbedPlugin),
      X(1, (0, a.Inject)(a.Injector)),
      X(2, a.IConfigService),
      X(3, a.IUniverInstanceService),
    ],
    Df,
  )),
  Object.defineProperty(exports, "EmbedActivationService", {
    enumerable: true,
    get: function () {
      return Gt;
    },
  }),
  (exports.EmbedChildViewRegistryService = gt),
  Object.defineProperty(exports, "EmbedFullscreenService", {
    enumerable: true,
    get: function () {
      return Zn;
    },
  }),
  (exports.EmbedHostContainerRegistryService = vt),
  (exports.EmbedHostMenuOverrideService = U),
  Object.defineProperty(exports, "EmbedHostRestoreService", {
    enumerable: true,
    get: function () {
      return Gr;
    },
  }),
  Object.defineProperty(exports, "EmbedMountService", {
    enumerable: true,
    get: function () {
      return Ht;
    },
  }),
  Object.defineProperty(exports, "UniverEmbedUIPlugin", {
    enumerable: true,
    get: function () {
      return Df;
    },
  }),
  (exports.registerEmbedProductMenuContribution = On));
