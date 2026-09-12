Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
function _(_0x308bb4) {
  "@babel/helpers - typeof";
  return (
    (_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2b3356) {
            return typeof _0x2b3356;
          }
        : function (_0x47872e) {
            return _0x47872e &&
              typeof Symbol == "function" &&
              _0x47872e.constructor === Symbol &&
              _0x47872e !== Symbol.prototype
              ? "symbol"
              : typeof _0x47872e;
          }),
    _(_0x308bb4)
  );
}
function v(_0x12e757, _0x4abdc2) {
  if (_(_0x12e757) != "object" || !_0x12e757) return _0x12e757;
  var _0x5eef4f = _0x12e757[Symbol.toPrimitive];
  if (_0x5eef4f !== undefined) {
    var _0x511b49 = _0x5eef4f.call(_0x12e757, _0x4abdc2 || "default");
    if (_(_0x511b49) != "object") return _0x511b49;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x4abdc2 === "string" ? String : Number)(_0x12e757);
}
function y(_0x50de48) {
  var _0x4df068 = v(_0x50de48, "string");
  return _(_0x4df068) == "symbol" ? _0x4df068 : _0x4df068 + "";
}
function b(_0x875397, _0x48f75f, _0x56ac36) {
  return (
    (_0x48f75f = y(_0x48f75f)) in _0x875397
      ? Object.defineProperty(_0x875397, _0x48f75f, {
          value: _0x56ac36,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x875397[_0x48f75f] = _0x56ac36),
    _0x875397
  );
}
function x(_0x16574b, _0x208061) {
  return function (_0x5859dd, _0x51e047) {
    _0x208061(_0x5859dd, _0x51e047, _0x16574b);
  };
}
function S(_0x777d9f, _0x18a3e3, _0x406569, _0x3cafab) {
  var _0x3fbf0b = arguments.length,
    _0x521715 =
      _0x3fbf0b < 3
        ? _0x18a3e3
        : _0x3cafab === null
          ? (_0x3cafab = Object.getOwnPropertyDescriptor(_0x18a3e3, _0x406569))
          : _0x3cafab,
    _0x13a138;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x521715 = Reflect.decorate(_0x777d9f, _0x18a3e3, _0x406569, _0x3cafab);
  else {
    for (var _0x131cfa = _0x777d9f.length - 1; _0x131cfa >= 0; _0x131cfa--)
      (_0x13a138 = _0x777d9f[_0x131cfa]) &&
        (_0x521715 =
          (_0x3fbf0b < 3
            ? _0x13a138(_0x521715)
            : _0x3fbf0b > 3
              ? _0x13a138(_0x18a3e3, _0x406569, _0x521715)
              : _0x13a138(_0x18a3e3, _0x406569)) || _0x521715);
  }
  return (
    _0x3fbf0b > 3 &&
      _0x521715 &&
      Object.defineProperty(_0x18a3e3, _0x406569, _0x521715),
    _0x521715
  );
}
let C = class extends i.RxDisposable {
  constructor(_0x242f84, _0x2ed2b3, _0x100e75) {
    (super(),
      (this._renderContext = _0x242f84),
      (this._boardElementService = _0x2ed2b3),
      (this._commandService = _0x100e75),
      b(this, "_nodeSizeByKey", new Map()),
      b(this, "_queuedLayouts", new Map()),
      b(this, "_layoutFlushScheduled", false),
      this._init());
  }
  _init() {
    (this._seedExistingNodeSizes(),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._boardElementService["elementAdd$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe((_0x44dc3f) => {
              _0x44dc3f.forEach((_0xc96af1) => {
                let _0x2316fd = this._boardElementService["getElementById"](
                  _0xc96af1.unitId,
                  _0xc96af1.subUnitId,
                  _0xc96af1.elementId,
                );
                this._rememberNodeSize(_0xc96af1, _0x2316fd);
              });
            }),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._boardElementService["elementUpdate$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe((_0x121b0a) => {
              _0x121b0a.forEach((_0x1540c8) =>
                this._handleElementUpdate(_0x1540c8),
              );
            }),
        ),
      ));
  }
  _seedExistingNodeSizes() {
    let _0xd27e48 = this._renderContext["unitId"],
      _0x147bca = this._boardElementService["getElementDataForUnit"](_0xd27e48);
    Object.entries(_0x147bca).forEach(([_0x1a7002, _0x5497ad]) => {
      Object.values(_0x5497ad.data).forEach((_0x2e82b3) => {
        this._rememberNodeSize(
          {
            unitId: _0xd27e48,
            subUnitId: _0x1a7002,
            elementId: _0x2e82b3.elementId,
          },
          _0x2e82b3,
        );
      });
    });
  }
  _handleElementUpdate(_0x3050b1) {
    if (_0x3050b1.unitId !== this._renderContext["unitId"]) return;
    let _0x3054c7 = this._boardElementService["getElementById"](
        _0x3050b1.unitId,
        _0x3050b1.subUnitId,
        _0x3050b1.elementId,
      ),
      _0x4d497e = (0, t.getMindMapNodeMeta)(
        _0x3054c7 == null ? undefined : _0x3054c7.element,
      ),
      _0x786beb = this._resolveNodeSize(_0x3054c7);
    if (!_0x4d497e || !_0x786beb) {
      this._nodeSizeByKey["delete"](this._getElementKey(_0x3050b1));
      return;
    }
    let _0xe8c914 = this._getElementKey(_0x3050b1),
      _0xa0959a = this._nodeSizeByKey["get"](_0xe8c914);
    (this._nodeSizeByKey["set"](_0xe8c914, _0x786beb),
      !(
        _0xa0959a &&
        _0xa0959a.width === _0x786beb.width &&
        _0xa0959a.height === _0x786beb.height
      ) &&
        this._queueLayout({
          unitId: _0x3050b1.unitId,
          subUnitId: _0x3050b1.subUnitId,
          scopeId: _0x4d497e.structureScopeId,
        }));
  }
  _rememberNodeSize(_0x41d642, _0x556e1c) {
    if (_0x41d642.unitId !== this._renderContext["unitId"]) return;
    let _0x9cfa2b = (0, t.getMindMapNodeMeta)(
        _0x556e1c == null ? undefined : _0x556e1c.element,
      ),
      _0x35e910 = this._resolveNodeSize(_0x556e1c);
    !_0x9cfa2b ||
      !_0x35e910 ||
      this._nodeSizeByKey["set"](this._getElementKey(_0x41d642), _0x35e910);
  }
  _resolveNodeSize(_0x42e5f7) {
    let _0xeae918 =
        (_0x42e5f7 == null ? undefined : _0x42e5f7.transform) ??
        (_0x42e5f7 == null ? undefined : _0x42e5f7.element["transform"]),
      _0x235caf = _0xeae918 == null ? undefined : _0xeae918.width,
      _0x3bd779 = _0xeae918 == null ? undefined : _0xeae918.height;
    return !Number.isFinite(_0x235caf) || !Number.isFinite(_0x3bd779)
      ? null
      : { width: _0x235caf, height: _0x3bd779 };
  }
  _queueLayout(_0x204614) {
    (this._queuedLayouts["set"](
      _0x204614.unitId + ":" + _0x204614.subUnitId + ":" + _0x204614.scopeId,
      _0x204614,
    ),
      !this._layoutFlushScheduled &&
        ((this._layoutFlushScheduled = true),
        Promise.resolve().then(() => {
          this._layoutFlushScheduled = false;
          let _0x1620d0 = Array.from(this._queuedLayouts["values"]());
          (this._queuedLayouts["clear"](),
            _0x1620d0.forEach((_0xa44b3f) => {
              this._executeRootAnchoredLayout(_0xa44b3f);
            }));
        })));
  }
  _executeRootAnchoredLayout(_0x213975) {
    var _0x29d33e;
    let _0xe6150d = this._boardElementService["getElementById"](
        _0x213975.unitId,
        _0x213975.subUnitId,
        _0x213975.scopeId,
      ),
      _0x455294 =
        (_0x29d33e = (0, t.getMindMapContainerMeta)(
          _0xe6150d == null ? undefined : _0xe6150d.element,
        )) == null
          ? undefined
          : _0x29d33e.rootNodeId;
    this._commandService["executeCommand"](t.LayoutMindMapOperation["id"], {
      ..._0x213975,
      skipUndo: true,
      ...(_0x455294 ? { anchorNodeId: _0x455294 } : null),
    });
  }
  _getElementKey(_0x356205) {
    return (
      _0x356205.unitId + ":" + _0x356205.subUnitId + ":" + _0x356205.elementId
    );
  }
};
C = S(
  [x(1, (0, i.Inject)(e.IBoardElementService)), x(2, i.ICommandService)],
  C,
);
const w = {
  primaryColor: c.SHAPE_FLOATING_TOOLBAR_DEFAULT_STROKE_COLOR,
  surfaceColor: c.SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_BACKGROUND_COLOR,
  textColor: c.SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_COLOR,
  fontFamily: i.DEFAULT_STYLES["ff"],
};
function T(_0x1a318a, _0x571f42) {
  let _0x205880 = Math.min(
      1,
      Math.max(0, Number.isFinite(_0x571f42) ? _0x571f42 : 1),
    ),
    _0x22dcda = _0x1a318a.trim(),
    _0xcb671a = /^#([0-9a-fA-F]{6})$/["exec"](_0x22dcda);
  if (!_0xcb671a) return _0x1a318a;
  let _0x4253a3 = _0xcb671a[1];
  return (
    "rgba(" +
    Number.parseInt(_0x4253a3.slice(0, 2), 16) +
    ",\x20" +
    Number.parseInt(_0x4253a3.slice(2, 4), 16) +
    ",\x20" +
    Number.parseInt(_0x4253a3.slice(4, 6), 16) +
    ",\x20" +
    _0x205880 +
    ")"
  );
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
  sourceDashScreen: [6, 4],
};
function D(_0xfcb64f, _0x30d0ac, _0x59df51, _0x376a05, _0x5869e7, _0x11026b) {
  let _0x282e15 = Math.min(_0x11026b, _0x376a05 / 2, _0x5869e7 / 2);
  (_0xfcb64f.beginPath(),
    _0xfcb64f.moveTo(_0x30d0ac + _0x282e15, _0x59df51),
    _0xfcb64f.lineTo(_0x30d0ac + _0x376a05 - _0x282e15, _0x59df51),
    _0xfcb64f.quadraticCurveTo(
      _0x30d0ac + _0x376a05,
      _0x59df51,
      _0x30d0ac + _0x376a05,
      _0x59df51 + _0x282e15,
    ),
    _0xfcb64f.lineTo(_0x30d0ac + _0x376a05, _0x59df51 + _0x5869e7 - _0x282e15),
    _0xfcb64f.quadraticCurveTo(
      _0x30d0ac + _0x376a05,
      _0x59df51 + _0x5869e7,
      _0x30d0ac + _0x376a05 - _0x282e15,
      _0x59df51 + _0x5869e7,
    ),
    _0xfcb64f.lineTo(_0x30d0ac + _0x282e15, _0x59df51 + _0x5869e7),
    _0xfcb64f.quadraticCurveTo(
      _0x30d0ac,
      _0x59df51 + _0x5869e7,
      _0x30d0ac,
      _0x59df51 + _0x5869e7 - _0x282e15,
    ),
    _0xfcb64f.lineTo(_0x30d0ac, _0x59df51 + _0x282e15),
    _0xfcb64f.quadraticCurveTo(
      _0x30d0ac,
      _0x59df51,
      _0x30d0ac + _0x282e15,
      _0x59df51,
    ),
    _0xfcb64f.closePath());
}
function O(_0x43e367, _0x124e35, _0x2c7a0d) {
  return _0x43e367 + "\x20" + _0x124e35 / _0x2c7a0d + "px " + E.fontFamily;
}
const k = "board-mind-map-drag-preview-object",
  A = n.BOARD_RENDER_LAYER_INDEX["preview"];
function j(_0x19b211, _0x4c6277) {
  return Number.isFinite(_0x19b211) ? _0x19b211 : _0x4c6277;
}
function M() {
  return E.fallbackNodeWidth;
}
function N() {
  return E.fallbackNodeHeight;
}
function P(_0x1bf881) {
  return _0x1bf881 === 1 ? "left" : _0x1bf881 === 3 ? "right" : "center";
}
function F(_0x226db0, _0x5a5fc6, _0x27dc75, _0x40222a) {
  return _0x27dc75 === 1
    ? _0x226db0 + _0x40222a
    : _0x27dc75 === 3
      ? _0x226db0 + _0x5a5fc6 - _0x40222a
      : _0x226db0 + _0x5a5fc6 / 2;
}
var ee = class extends a.BaseObject {
  constructor(_0x580ed8 = k, _0x3ad5ae) {
    (super(_0x580ed8),
      b(this, "_state", {
        ghostBounds: null,
        parentBounds: null,
        side: "right",
        zoomRatio: 1,
      }),
      (this.evented = false),
      (this.zIndex =
        n.BOARD_RENDER_OBJECT_Z_INDEX["transientPreviewForeground"]),
      this.updateState(_0x3ad5ae));
  }
  updateState(_0x1db6f8) {
    if (
      ((this._state = { ...this._state, ..._0x1db6f8 }),
      this._state["ghostBounds"])
    ) {
      let _0x541270 = this._resolveDirtyBounds();
      (this.transformByState(_0x541270), this.show());
    } else this.hide();
    let _0x12258f = this;
    typeof _0x12258f.makeDirtyNoDebounce == "function"
      ? _0x12258f.makeDirtyNoDebounce(true)
      : this.makeDirty(true);
  }
  isHit(_0x2b6ac0) {
    return false;
  }
  render(_0xd1df32, _0x1df4d6) {
    let _0x5a33e0 = this._state["ghostBounds"];
    if (!_0x5a33e0 || !this.visible) return (this.makeDirty(false), this);
    let _0x1eeb16 =
        Number.isFinite(this._state["zoomRatio"]) &&
        (this._state["zoomRatio"] ?? 0) > 0
          ? this._state["zoomRatio"]
          : 1,
      _0xde6b21 = j(_0x5a33e0.left, 0),
      _0x39142a = j(_0x5a33e0.top, 0),
      _0x576608 = Math.max(1, j(_0x5a33e0.width, M())),
      _0x21137e = Math.max(1, j(_0x5a33e0.height, N()));
    if (
      (_0xd1df32.save(),
      (_0xd1df32.globalAlpha = E.dragObjectAlpha),
      (_0xd1df32.lineWidth = E.lineWidthScreen / _0x1eeb16),
      (_0xd1df32.strokeStyle = E.primaryColor),
      (_0xd1df32.fillStyle = E.ghostFillColor),
      this._drawConnectorPreview(
        _0xd1df32,
        {
          left: _0xde6b21,
          top: _0x39142a,
          width: _0x576608,
          height: _0x21137e,
        },
        _0x1eeb16,
      ),
      this._drawSourceHighlight(_0xd1df32, _0x1eeb16),
      this._state["renderGhostNode"] === false)
    )
      return (_0xd1df32.restore(), this.makeDirty(false), this);
    (D(_0xd1df32, _0xde6b21, _0x39142a, _0x576608, _0x21137e, E.ghostRadius),
      _0xd1df32.fill(),
      _0xd1df32.stroke());
    let _0x5c8f10 = this._state["textStyle"],
      _0x44aca0 =
        Number.isFinite(_0x5c8f10 == null ? undefined : _0x5c8f10.fontSize) &&
        ((_0x5c8f10 == null ? undefined : _0x5c8f10.fontSize) ?? 0) > 0
          ? _0x5c8f10.fontSize
          : 16,
      _0x5aa124 = E.textPaddingScreen / _0x1eeb16;
    return (
      (_0xd1df32.fillStyle =
        (_0x5c8f10 == null ? undefined : _0x5c8f10.color) ?? E.ghostTextColor),
      (_0xd1df32.font = O(E.ghostFontWeight, _0x44aca0, _0x1eeb16)),
      (_0xd1df32.textAlign = P(
        _0x5c8f10 == null ? undefined : _0x5c8f10.horizontalAlign,
      )),
      (_0xd1df32.textBaseline = "middle"),
      _0xd1df32.fillText(
        (_0x5c8f10 == null ? undefined : _0x5c8f10.text) ||
          t.MIND_MAP_DEFAULT_NODE_TEXT,
        F(
          _0xde6b21,
          _0x576608,
          _0x5c8f10 == null ? undefined : _0x5c8f10.horizontalAlign,
          _0x5aa124,
        ),
        _0x39142a + _0x21137e / 2,
        Math.max(1, _0x576608 - _0x5aa124 * 2),
      ),
      _0xd1df32.restore(),
      this.makeDirty(false),
      this
    );
  }
  _resolveDirtyBounds() {
    let _0x2c24bf = this._state["ghostBounds"],
      _0x47d327 =
        Number.isFinite(this._state["zoomRatio"]) &&
        (this._state["zoomRatio"] ?? 0) > 0
          ? this._state["zoomRatio"]
          : 1,
      _0x2749a2 = E.dirtyPaddingScreen / _0x47d327;
    if (!_0x2c24bf) return { left: 0, top: 0, width: 1, height: 1 };
    let _0x547683 = j(_0x2c24bf.left, 0),
      _0x35860c = j(_0x2c24bf.top, 0),
      _0x595334 = Math.max(1, j(_0x2c24bf.width, M())),
      _0x4603fc = Math.max(1, j(_0x2c24bf.height, N())),
      _0x274b53 = this._state["sourceBounds"],
      _0x379e00 = this._state["parentBounds"],
      _0x383cb8 = j(_0x274b53 == null ? undefined : _0x274b53.left, _0x547683),
      _0x157ead = j(_0x274b53 == null ? undefined : _0x274b53.top, _0x35860c),
      _0x3c5d70 = Math.max(
        1,
        j(_0x274b53 == null ? undefined : _0x274b53.width, _0x595334),
      ),
      _0x30c2b3 = Math.max(
        1,
        j(_0x274b53 == null ? undefined : _0x274b53.height, _0x4603fc),
      );
    if (!_0x379e00) {
      let _0x351002 = Math.min(_0x547683, _0x383cb8) - _0x2749a2,
        _0x13f32a = Math.min(_0x35860c, _0x157ead) - _0x2749a2,
        _0x7e7c3f =
          Math.max(_0x547683 + _0x595334, _0x383cb8 + _0x3c5d70) + _0x2749a2,
        _0x3150a1 =
          Math.max(_0x35860c + _0x4603fc, _0x157ead + _0x30c2b3) + _0x2749a2;
      return {
        left: _0x351002,
        top: _0x13f32a,
        width: _0x7e7c3f - _0x351002,
        height: _0x3150a1 - _0x13f32a,
      };
    }
    let _0x31f7e7 = j(_0x379e00.left, _0x547683),
      _0x2ae6a2 = j(_0x379e00.top, _0x35860c),
      _0x35f1ee = Math.max(1, j(_0x379e00.width, M())),
      _0x52c409 = Math.max(1, j(_0x379e00.height, N())),
      _0x2c8a00 = Math.min(_0x547683, _0x31f7e7, _0x383cb8) - _0x2749a2,
      _0x540e18 = Math.min(_0x35860c, _0x2ae6a2, _0x157ead) - _0x2749a2,
      _0x9a8d60 =
        Math.max(
          _0x547683 + _0x595334,
          _0x31f7e7 + _0x35f1ee,
          _0x383cb8 + _0x3c5d70,
        ) + _0x2749a2,
      _0x38e91a =
        Math.max(
          _0x35860c + _0x4603fc,
          _0x2ae6a2 + _0x52c409,
          _0x157ead + _0x30c2b3,
        ) + _0x2749a2;
    return {
      left: _0x2c8a00,
      top: _0x540e18,
      width: _0x9a8d60 - _0x2c8a00,
      height: _0x38e91a - _0x540e18,
    };
  }
  _drawSourceHighlight(_0x1a523e, _0x220b37) {
    var _0x44cbe1;
    let _0x589f3f = this._state["sourceBounds"];
    if (!_0x589f3f) return;
    let _0x379bc4 = E.sourceHaloScreen / _0x220b37,
      _0x3c9f5c = j(_0x589f3f.left, 0) - _0x379bc4,
      _0x161183 = j(_0x589f3f.top, 0) - _0x379bc4,
      _0x41a559 = Math.max(1, j(_0x589f3f.width, M())) + _0x379bc4 * 2,
      _0x4caf11 = Math.max(1, j(_0x589f3f.height, N())) + _0x379bc4 * 2;
    (_0x1a523e.save(),
      (_0x1a523e.globalAlpha = 1),
      (_0x1a523e.lineWidth = E.lineWidthScreen / _0x220b37),
      (_0x1a523e.strokeStyle = E.sourceHighlightStrokeColor),
      (_0x1a523e.fillStyle = E.sourceHighlightFillColor),
      (_0x44cbe1 = _0x1a523e.setLineDash) == null ||
        _0x44cbe1.call(
          _0x1a523e,
          E.sourceDashScreen["map"]((_0x15465b) => _0x15465b / _0x220b37),
        ),
      D(_0x1a523e, _0x3c9f5c, _0x161183, _0x41a559, _0x4caf11, E.rootRadius),
      _0x1a523e.fill(),
      _0x1a523e.stroke(),
      _0x1a523e.restore());
  }
  _drawConnectorPreview(_0x5eaa15, _0x1aa69f, _0xcf1530) {
    let _0x4b7c30 = this._state["parentBounds"];
    if (!_0x4b7c30) return;
    let _0x1853fb = j(_0x4b7c30.left, 0),
      _0x6922be = j(_0x4b7c30.top, 0),
      _0x1cd51f = Math.max(1, j(_0x4b7c30.width, M())),
      _0x2890f8 = Math.max(1, j(_0x4b7c30.height, N())),
      _0x548e4c = E.branchGap,
      _0x1e299b = this._state["side"] ?? "right";
    if (
      (_0x5eaa15.save(),
      (_0x5eaa15.globalAlpha = E.connectorAlpha),
      (_0x5eaa15.strokeStyle = E.primaryColor),
      (_0x5eaa15.lineWidth = E.lineWidthScreen / _0xcf1530),
      (_0x5eaa15.lineCap = "round"),
      (_0x5eaa15.lineJoin = "round"),
      _0x5eaa15.beginPath(),
      _0x1e299b === "top" || _0x1e299b === "bottom")
    ) {
      let _0x5cc861 = _0x1853fb + _0x1cd51f / 2,
        _0x54a877 = _0x1aa69f.left + _0x1aa69f.width / 2,
        _0x50f808 = _0x1e299b === "bottom" ? _0x6922be + _0x2890f8 : _0x6922be,
        _0xda486e =
          _0x1e299b === "bottom"
            ? _0x1aa69f.top
            : _0x1aa69f.top + _0x1aa69f.height,
        _0xe507d5 =
          _0x1e299b === "bottom"
            ? Math.min(_0x50f808 + _0x548e4c, (_0x50f808 + _0xda486e) / 2)
            : Math.max(_0x50f808 - _0x548e4c, (_0x50f808 + _0xda486e) / 2);
      (_0x5eaa15.moveTo(_0x5cc861, _0x50f808),
        _0x5eaa15.lineTo(_0x5cc861, _0xe507d5),
        _0x5eaa15.lineTo(_0x54a877, _0xe507d5),
        _0x5eaa15.lineTo(_0x54a877, _0xda486e));
    } else {
      let _0x1c6944 = _0x6922be + _0x2890f8 / 2,
        _0x1d9653 = _0x1aa69f.top + _0x1aa69f.height / 2,
        _0x3a2181 = _0x1e299b === "right" ? _0x1853fb + _0x1cd51f : _0x1853fb,
        _0x52e0fc =
          _0x1e299b === "right"
            ? _0x1aa69f.left
            : _0x1aa69f.left + _0x1aa69f.width,
        _0x1b605f =
          _0x1e299b === "right"
            ? Math.min(_0x3a2181 + _0x548e4c, (_0x3a2181 + _0x52e0fc) / 2)
            : Math.max(_0x3a2181 - _0x548e4c, (_0x3a2181 + _0x52e0fc) / 2);
      (_0x5eaa15.moveTo(_0x3a2181, _0x1c6944),
        _0x5eaa15.lineTo(_0x1b605f, _0x1c6944),
        _0x5eaa15.lineTo(_0x1b605f, _0x1d9653),
        _0x5eaa15.lineTo(_0x52e0fc, _0x1d9653));
    }
    (_0x5eaa15.stroke(), _0x5eaa15.restore());
  }
};
function I(_0x1598dc, _0x35d42a) {
  return (
    (_0x35d42a == null ? undefined : _0x35d42a[_0x1598dc.elementId]) ??
    _0x1598dc.element["transform"]
  );
}
function L(_0x2fe11b, _0x37c781) {
  let _0x5c7b81 = I(_0x2fe11b, _0x37c781);
  return {
    x: (_0x5c7b81.left ?? 0) + (_0x5c7b81.width ?? 0) / 2,
    y: (_0x5c7b81.top ?? 0) + (_0x5c7b81.height ?? 0) / 2,
  };
}
function R(_0x55e878, _0x34f02d) {
  return Math.hypot(_0x55e878.x - _0x34f02d.x, _0x55e878.y - _0x34f02d.y);
}
function te(_0xc9802c, _0x5d6f0f) {
  let _0x46d255 = _0xc9802c.left ?? 0,
    _0x3ac3c0 = _0xc9802c.top ?? 0,
    _0xa5d98e = _0x46d255 + (_0xc9802c.width ?? 0),
    _0x5b4793 = _0x3ac3c0 + (_0xc9802c.height ?? 0),
    _0x1c43d5 = _0x5d6f0f.left ?? 0,
    _0x19c795 = _0x5d6f0f.top ?? 0,
    _0x167c51 = _0x1c43d5 + (_0x5d6f0f.width ?? 0),
    _0x3ed7e3 = _0x19c795 + (_0x5d6f0f.height ?? 0),
    _0x2767f4 = Math.max(_0x1c43d5 - _0xa5d98e, _0x46d255 - _0x167c51, 0),
    _0x57cb17 = Math.max(_0x19c795 - _0x5b4793, _0x3ac3c0 - _0x3ed7e3, 0);
  return Math.hypot(_0x2767f4, _0x57cb17);
}
function ne(_0x5d3e3a, _0x37d73b, _0x505c8c) {
  var _0x39542f;
  let _0x492270 = (0, t.getMindMapNodeMeta)(
    (_0x39542f = _0x5d3e3a[_0x37d73b]) == null ? undefined : _0x39542f.element,
  );
  for (; _0x492270 != null && _0x492270.parentNodeId;) {
    var _0x35d738;
    if (_0x492270.parentNodeId === _0x505c8c) return true;
    _0x492270 = (0, t.getMindMapNodeMeta)(
      (_0x35d738 = _0x5d3e3a[_0x492270.parentNodeId]) == null
        ? undefined
        : _0x35d738.element,
    );
  }
  return false;
}
function z(_0x3326d3, _0x57b171, _0x53059b) {
  let _0x11386f = I(_0x3326d3, _0x53059b),
    _0x2b151d = _0x11386f.top ?? 0,
    _0x29db52 = _0x11386f.height ?? 0;
  return _0x29db52 <= 0
    ? null
    : _0x57b171.y <= _0x2b151d + _0x29db52 / 3
      ? "before"
      : _0x57b171.y >= _0x2b151d + (_0x29db52 * 2) / 3
        ? "after"
        : null;
}
function B(_0x399942, _0x38e6a8) {
  let _0x4d2829 = _0x38e6a8 == null ? undefined : _0x38e6a8[_0x399942];
  return Number.isFinite(_0x4d2829 == null ? undefined : _0x4d2829.left) &&
    Number.isFinite(_0x4d2829 == null ? undefined : _0x4d2829.top)
    ? { kind: "detach", left: _0x4d2829.left, top: _0x4d2829.top }
    : { kind: "detach" };
}
function V(_0x144fa3, _0x817eb2, _0x51cd72) {
  let _0x35c836 = _0x144fa3[_0x817eb2],
    _0xb47db5 = (0, t.getMindMapNodeMeta)(
      _0x35c836 == null ? undefined : _0x35c836.element,
    );
  if (
    !_0x35c836 ||
    !_0xb47db5 ||
    (!_0xb47db5.parentNodeId &&
      !(_0x51cd72 != null && _0x51cd72.allowRootReparent))
  )
    return { kind: "none" };
  let _0x317799 = _0x51cd72 == null ? undefined : _0x51cd72.boundsByElementId,
    _0x55b72f = I(_0x35c836, _0x317799),
    _0x17da88 = L(_0x35c836, _0x317799),
    _0x30c176 = Object.values(_0x144fa3)
      .map((_0x21ddde) => {
        let _0x33c073 = (0, t.getMindMapNodeMeta)(_0x21ddde.element);
        return !_0x33c073 ||
          _0x21ddde.elementId === _0x817eb2 ||
          _0x21ddde.elementId === _0xb47db5.parentNodeId ||
          (_0x51cd72 != null &&
            _0x51cd72.allowRootReparent &&
            !_0xb47db5.parentNodeId &&
            _0x33c073.structureScopeId === _0xb47db5.structureScopeId) ||
          ne(_0x144fa3, _0x21ddde.elementId, _0x817eb2)
          ? null
          : {
              item: _0x21ddde,
              snapDistance: te(_0x55b72f, I(_0x21ddde, _0x317799)),
              center: L(_0x21ddde, _0x317799),
            };
      })
      .filter((_0x32658a) => !!_0x32658a)
      .sort(
        (_0x45cffa, _0x46a558) =>
          _0x45cffa.snapDistance - _0x46a558.snapDistance ||
          R(_0x17da88, _0x45cffa.center) - R(_0x17da88, _0x46a558.center),
      )[0];
  if (_0x30c176 && _0x30c176.snapDistance <= 100) {
    let _0x35664b = (0, t.getMindMapNodeMeta)(_0x30c176.item["element"]),
      _0x49bdbf =
        _0x35664b != null && _0x35664b.parentNodeId
          ? z(_0x30c176.item, _0x17da88, _0x317799)
          : null;
    return _0x35664b != null && _0x35664b.parentNodeId && _0x49bdbf
      ? {
          kind: "reparent",
          newParentNodeId: _0x35664b.parentNodeId,
          side: _0x35664b.side ?? "right",
          referenceNodeId: _0x30c176.item["elementId"],
          placement: _0x49bdbf,
        }
      : {
          kind: "reparent",
          newParentNodeId: _0x30c176.item["elementId"],
          side: _0x17da88.x < _0x30c176.center["x"] ? "left" : "right",
        };
  }
  if (_0x51cd72 != null && _0x51cd72.detachWhenNoSnap)
    return B(_0x817eb2, _0x317799);
  if (!_0xb47db5.parentNodeId) return { kind: "none" };
  let _0x2dfe4e = _0x144fa3[_0xb47db5.parentNodeId];
  return _0x2dfe4e && R(_0x17da88, L(_0x2dfe4e, _0x317799)) > 560
    ? B(_0x817eb2, _0x317799)
    : { kind: "none" };
}
function re(_0x41e982, _0x2f795d) {
  var _0x1a2f2a, _0x465c8b;
  return (
    _0x41e982.elementId === _0x2f795d ||
    ((_0x1a2f2a = (0, t.getMindMapNodeMeta)(_0x41e982.element)) == null
      ? undefined
      : _0x1a2f2a.structureScopeId) === _0x2f795d ||
    ((_0x465c8b = (0, t.getMindMapConnectorMeta)(_0x41e982.element)) == null
      ? undefined
      : _0x465c8b.structureScopeId) === _0x2f795d
  );
}
function ie(_0x50b738, _0x5482d7, _0x1524eb, _0x9d9930) {
  let _0x10d09b = _0x50b738[_0x5482d7];
  if (!_0x10d09b) return _0x50b738;
  let _0xb654fb = _0x10d09b.transform ?? _0x10d09b.element["transform"] ?? {};
  return {
    ..._0x50b738,
    [_0x5482d7]: {
      ..._0x10d09b,
      transform: {
        ..._0xb654fb,
        left: (_0xb654fb.left ?? 0) + _0x1524eb,
        top: (_0xb654fb.top ?? 0) + _0x9d9930,
      },
      element: {
        ..._0x10d09b.element,
        transform: {
          ..._0x10d09b.element["transform"],
          left: (_0x10d09b.element["transform"].left ?? 0) + _0x1524eb,
          top: (_0x10d09b.element["transform"].top ?? 0) + _0x9d9930,
        },
      },
    },
  };
}
function ae(_0x16de7f) {
  if (
    !Number.isFinite(_0x16de7f.liveRootBounds["left"]) ||
    !Number.isFinite(_0x16de7f.liveRootBounds["top"]) ||
    !Number.isFinite(_0x16de7f.rootStartBounds["left"]) ||
    !Number.isFinite(_0x16de7f.rootStartBounds["top"])
  )
    return null;
  let _0x565b0b =
      _0x16de7f.liveRootBounds["left"] - _0x16de7f.rootStartBounds["left"],
    _0x5b7575 =
      _0x16de7f.liveRootBounds["top"] - _0x16de7f.rootStartBounds["top"],
    _0x2833eb = ie(
      _0x16de7f.elementData,
      _0x16de7f.scopeId,
      _0x565b0b,
      _0x5b7575,
    ),
    _0xa99514 = [];
  return (
    Object.values(_0x2833eb).forEach((_0x59f1b6) => {
      if (
        _0x59f1b6.elementId === _0x16de7f.rootNodeId ||
        _0x59f1b6.elementId === _0x16de7f.scopeId ||
        !re(_0x59f1b6, _0x16de7f.scopeId)
      )
        return;
      if ("connectorData" in _0x59f1b6.element) {
        var _0x5813f1;
        let _0x5e9971 =
          (_0x5813f1 = _0x16de7f.elementData[_0x59f1b6.elementId]) == null
            ? undefined
            : _0x5813f1.element;
        _0x5e9971 &&
          "connectorData" in _0x5e9971 &&
          _0xa99514.push({
            kind: "connector",
            elementId: _0x59f1b6.elementId,
            element: (0, e.offsetBoardConnectorGeometry)(_0x5e9971, {
              x: _0x565b0b,
              y: _0x5b7575,
            }),
          });
        return;
      }
      let _0x14f137 = (0, e.resolveBoardElementWorldBounds)(
        _0x2833eb,
        _0x59f1b6.elementId,
      );
      _0x14f137 &&
        _0xa99514.push({
          kind: "bounds",
          elementId: _0x59f1b6.elementId,
          bounds: _0x14f137,
        });
    }),
    {
      deltaX: _0x565b0b,
      deltaY: _0x5b7575,
      elementData: _0x2833eb,
      items: _0xa99514,
    }
  );
}
let oe = class extends i.RxDisposable {
  constructor(
    _0x564957,
    _0x556aa8,
    _0x278d70,
    _0x215bb1,
    _0xff4945,
    _0x2a455f,
    _0x26db40,
  ) {
    (super(),
      (this._renderContext = _0x564957),
      (this._boardElementService = _0x556aa8),
      (this._elementStateService = _0x278d70),
      (this._commandService = _0x215bb1),
      (this._uiStateService = _0xff4945),
      (this._instanceService = _0x2a455f),
      (this._undoRedoGroupService = _0x26db40),
      b(this, "_dragStart", null),
      b(this, "_pointerDragStart", null),
      b(this, "_dragPreviewObject", null),
      b(this, "_childDragActivated", false),
      b(this, "_lastChildDragAction", null),
      b(this, "_objectPointerDisposables", null),
      b(this, "_attachObjectPointerScheduled", false),
      b(this, "_activePointerDragDisposables", null),
      b(this, "_childDragSelectionHidden", false),
      this._init());
  }
  _init() {
    var _0x529298, _0x4e8237, _0x26596e, _0x39414f, _0x54780f;
    let _0x540dc4 = this._renderContext["scene"].getTransformerByCreate();
    (this.disposeWithMe(
      (0, i.toDisposable)(
        _0x540dc4.changeStart$["pipe"](
          (0, o.takeUntil)(this.dispose$),
        ).subscribe(() => {
          this._captureDragStart();
        }),
      ),
    ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          ((_0x529298 = _0x540dc4.changing$) == null
            ? undefined
            : _0x529298
                .pipe((0, o.takeUntil)(this.dispose$))
                .subscribe((_0x10dda5) => {
                  this._syncDragPreview(
                    _0x10dda5 == null ? undefined : _0x10dda5.objects,
                  );
                })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          _0x540dc4.changeEnd$["pipe"](
            (0, o.takeUntil)(this.dispose$),
          ).subscribe((_0x7ccdbf) => {
            setTimeout(
              () =>
                this._applyDragTopologyAction(
                  _0x7ccdbf == null ? undefined : _0x7ccdbf.objects,
                ),
              0,
            );
          }),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          ((_0x4e8237 = this._renderContext["scene"].onPointerDown$) == null
            ? undefined
            : _0x4e8237.subscribeEvent({
                priority: 3,
                next: ([_0x472390]) =>
                  this._capturePointerChildDragStart(_0x472390),
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          ((_0x26596e = this._renderContext["scene"].onPointerMove$) == null
            ? undefined
            : _0x26596e.subscribeEvent({
                priority: 3,
                next: ([_0x223794, _0x3bac28]) =>
                  this._syncPointerChildDragPreview(_0x223794, _0x3bac28),
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          ((_0x39414f = this._renderContext["scene"].onPointerUp$) == null
            ? undefined
            : _0x39414f.subscribeEvent({
                priority: 3,
                next: ([_0x52c476, _0x2eeb5a]) =>
                  this._applyPointerChildDrag(_0x52c476, _0x2eeb5a),
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          ((_0x54780f = this._renderContext["scene"].onPointerCancel$) == null
            ? undefined
            : _0x54780f.subscribeEvent({
                priority: 3,
                next: ([, _0x28176e]) =>
                  this._cancelPointerChildDrag(_0x28176e),
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(() => {
          var _0x48848d;
          return (_0x48848d = this._objectPointerDisposables) == null
            ? undefined
            : _0x48848d.dispose();
        }),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(() => this._disposeActivePointerDragListeners()),
      ),
      this._subscribeElementDataChanges(),
      this._scheduleAttachObjectPointerListeners(),
      this.disposeWithMe(
        (0, i.toDisposable)(() => this._removeDragPreviewObject()),
      ));
  }
  _subscribeElementDataChanges() {
    ([
      this._boardElementService["elementAdd$"],
      this._boardElementService["elementUpdate$"],
      this._boardElementService["elementRemove$"],
    ].forEach((_0x4c76cc) => {
      this.disposeWithMe(
        (0, i.toDisposable)(
          _0x4c76cc.pipe((0, o.takeUntil)(this.dispose$)).subscribe(() => {
            this._scheduleAttachObjectPointerListeners();
          }),
        ),
      );
    }),
      this._elementStateService["state$"] &&
        this.disposeWithMe(
          (0, i.toDisposable)(
            this._elementStateService["state$"]
              .pipe((0, o.takeUntil)(this.dispose$))
              .subscribe(() => {
                this._scheduleAttachObjectPointerListeners();
              }),
          ),
        ));
  }
  _scheduleAttachObjectPointerListeners() {
    this._attachObjectPointerScheduled ||
      ((this._attachObjectPointerScheduled = true),
      Promise.resolve().then(() => this._attachObjectPointerListeners()));
  }
  _attachObjectPointerListeners() {
    var _0x46b7cd;
    this._attachObjectPointerScheduled = false;
    let _0x1402db = this._resolveCurrentBoardContext(),
      _0x5c3df5 = this._renderContext["scene"];
    if (!_0x1402db || typeof _0x5c3df5.getObject != "function") return;
    let _0x37b829 = this._boardElementService["getElementData"](
        _0x1402db.unitId,
        _0x1402db.subUnitId,
      ),
      _0x486734 = new i["DisposableCollection"]();
    ((_0x46b7cd = this._objectPointerDisposables) == null ||
      _0x46b7cd.dispose(),
      (this._objectPointerDisposables = _0x486734),
      Object.values(_0x37b829).forEach((_0x2d0a12) => {
        var _0x31c764, _0x139e1d;
        let _0x356b8e = (0, t.getMindMapNodeMeta)(_0x2d0a12.element);
        if (!(_0x356b8e != null && _0x356b8e.parentNodeId)) return;
        let _0x390af3 = (0, n.getBoardElementRenderObjectKey)(
            _0x1402db.unitId,
            _0x2d0a12.elementId,
          ),
          _0x4a6e6b =
            ((_0x31c764 = _0x5c3df5.getObjectIncludeInGroup) == null
              ? undefined
              : _0x31c764.call(_0x5c3df5, _0x390af3)) ??
            ((_0x139e1d = _0x5c3df5.getObject) == null
              ? undefined
              : _0x139e1d.call(_0x5c3df5, _0x390af3));
        _0x4a6e6b != null &&
          _0x4a6e6b.onPointerDown$ &&
          _0x486734.add(
            _0x4a6e6b.onPointerDown$["subscribeEvent"]({
              priority: -10,
              next: ([_0x2ed7b6, _0x5c503a]) =>
                this._capturePointerChildDragStart(
                  _0x2ed7b6,
                  {
                    unitId: _0x1402db.unitId,
                    subUnitId: _0x1402db.subUnitId,
                    nodeId: _0x2d0a12.elementId,
                  },
                  _0x5c503a,
                ),
            }),
          );
      }));
  }
  _resolveCurrentBoardContext() {
    let _0x2028c8 = this._elementStateService["getSnapshot"]().context;
    if (_0x2028c8) return _0x2028c8;
    let _0x5e62ac = this._renderContext["unitId"],
      _0x45a0ff = _0x5e62ac
        ? this._instanceService["getUnit"](
            _0x5e62ac,
            i.UniverInstanceType["UNIVER_BOARD"],
          )
        : null,
      _0x112a27 = _0x45a0ff == null ? undefined : _0x45a0ff.getActivePageId();
    return !_0x45a0ff || !_0x112a27
      ? null
      : { unitId: _0x45a0ff.getUnitId(), subUnitId: _0x112a27 };
  }
  _captureDragStart() {
    let _0x4acfeb = this._elementStateService["getSnapshot"]();
    ((this._childDragActivated = false),
      (this._childDragSelectionHidden = false),
      (this._lastChildDragAction = null));
    let _0x53524d = _0x4acfeb.context,
      _0x4d3552 = _0x4acfeb.focusedId ?? _0x4acfeb.selectedIds[0];
    if (!_0x53524d || !_0x4d3552) {
      ((this._dragStart = null), this._removeDragPreviewObject());
      return;
    }
    let _0x5eb347 = this._boardElementService["getElementData"](
      _0x53524d.unitId,
      _0x53524d.subUnitId,
    );
    if (_0x4acfeb.selectedIds["length"] > 1) {
      let _0xbeef83 = this._resolveCompleteSelectedScope(
        _0x5eb347,
        _0x4acfeb.selectedIds,
      );
      if (!_0xbeef83) {
        ((this._dragStart = null), this._removeDragPreviewObject());
        return;
      }
      let _0x316d88 = _0x5eb347[_0xbeef83.rootNodeId],
        _0x4d30a7 = (0, e.resolveBoardElementWorldBounds)(
          _0x5eb347,
          _0xbeef83.rootNodeId,
        ),
        _0x1921f5 = _0x316d88.element["transform"];
      this._dragStart = {
        kind: "scope",
        unitId: _0x53524d.unitId,
        subUnitId: _0x53524d.subUnitId,
        nodeId: _0xbeef83.rootNodeId,
        scopeId: _0xbeef83.scopeId,
        left:
          (_0x4d30a7 == null ? undefined : _0x4d30a7.left) ??
          _0x1921f5.left ??
          0,
        top:
          (_0x4d30a7 == null ? undefined : _0x4d30a7.top) ?? _0x1921f5.top ?? 0,
        width:
          (_0x4d30a7 == null ? undefined : _0x4d30a7.width) ??
          _0x1921f5.width ??
          0,
        height:
          (_0x4d30a7 == null ? undefined : _0x4d30a7.height) ??
          _0x1921f5.height ??
          0,
        elementData: _0x5eb347,
      };
      return;
    }
    let _0x3027e6 = _0x5eb347[_0x4d3552],
      _0x112694 = (0, t.getMindMapNodeMeta)(
        _0x3027e6 == null ? undefined : _0x3027e6.element,
      );
    if (!_0x3027e6 || !_0x112694) {
      ((this._dragStart = null), this._removeDragPreviewObject());
      return;
    }
    let _0x3df4eb = (0, e.resolveBoardElementWorldBounds)(_0x5eb347, _0x4d3552),
      _0x1b5b84 = _0x3027e6.element["transform"];
    this._dragStart = {
      kind: _0x112694.parentNodeId === null ? "root" : "child",
      unitId: _0x53524d.unitId,
      subUnitId: _0x53524d.subUnitId,
      nodeId: _0x4d3552,
      scopeId: _0x112694.structureScopeId,
      left:
        (_0x3df4eb == null ? undefined : _0x3df4eb.left) ?? _0x1b5b84.left ?? 0,
      top:
        (_0x3df4eb == null ? undefined : _0x3df4eb.top) ?? _0x1b5b84.top ?? 0,
      width:
        (_0x3df4eb == null ? undefined : _0x3df4eb.width) ??
        _0x1b5b84.width ??
        0,
      height:
        (_0x3df4eb == null ? undefined : _0x3df4eb.height) ??
        _0x1b5b84.height ??
        0,
      elementData: _0x5eb347,
    };
  }
  _resolveCompleteSelectedScope(_0x53ef4f, _0x51a773) {
    let _0x53a470 = new Set(_0x51a773),
      _0x5bc245 = _0x51a773.map((_0x3a3f81) => {
        var _0x4cfde8, _0x50f6c2, _0x1e13f7, _0x52a0d5;
        let _0x90763b =
          (_0x4cfde8 = _0x53ef4f[_0x3a3f81]) == null
            ? undefined
            : _0x4cfde8.element;
        return (
          ((_0x50f6c2 = (0, t.getMindMapNodeMeta)(_0x90763b)) == null
            ? undefined
            : _0x50f6c2.structureScopeId) ??
          ((_0x1e13f7 = (0, t.getMindMapConnectorMeta)(_0x90763b)) == null
            ? undefined
            : _0x1e13f7.structureScopeId) ??
          ((_0x52a0d5 = (0, t.getMindMapContainerMeta)(_0x90763b)) == null
            ? undefined
            : _0x52a0d5.structureScopeId) ??
          null
        );
      });
    if (
      _0x5bc245.some((_0x252c96) => _0x252c96 === null) ||
      new Set(_0x5bc245).size !== 1
    )
      return null;
    let _0x4d1d07 = _0x5bc245[0];
    if (!_0x4d1d07) return null;
    let _0x4826aa = Object.values(_0x53ef4f).filter((_0x38801f) => {
      var _0x21a418;
      return (
        _0x38801f.element["visible"] !== false &&
        ((_0x21a418 = (0, t.getMindMapNodeMeta)(_0x38801f.element)) == null
          ? undefined
          : _0x21a418.structureScopeId) === _0x4d1d07
      );
    });
    if (
      _0x4826aa.length === 0 ||
      _0x4826aa.some((_0x55187d) => !_0x53a470.has(_0x55187d.elementId))
    )
      return null;
    let _0x596503 = _0x4826aa.filter((_0x923f55) => {
      var _0x587acf;
      return (
        ((_0x587acf = (0, t.getMindMapNodeMeta)(_0x923f55.element)) == null
          ? undefined
          : _0x587acf.parentNodeId) === null
      );
    });
    return _0x596503.length === 1
      ? { rootNodeId: _0x596503[0].elementId, scopeId: _0x4d1d07 }
      : null;
  }
  _capturePointerChildDragStart(_0x5643d8, _0x509841, _0x4c573d) {
    var _0xb2456f, _0x7d969c, _0x43d877, _0x15416f, _0x185242;
    if (
      this._uiStateService["getState"]().interactionMode === "viewing" ||
      (_0x5643d8.button ?? 0) !== 0
    )
      return;
    let _0x18ad84 = this._elementStateService["getSnapshot"]();
    if (_0x18ad84.activeEditingId) {
      this._pointerDragStart = null;
      return;
    }
    let _0x33b6d4 = _0x509841
        ? { unitId: _0x509841.unitId, subUnitId: _0x509841.subUnitId }
        : (_0x18ad84.context ?? this._resolveCurrentBoardContext()),
      _0x255543 =
        (_0x509841 == null ? undefined : _0x509841.nodeId) ??
        (_0x18ad84.selectedIds["length"] === 1
          ? (_0x18ad84.focusedId ?? _0x18ad84.selectedIds[0])
          : undefined);
    if (!_0x33b6d4) {
      this._pointerDragStart = null;
      return;
    }
    let _0x4f392f = this._boardElementService["getElementData"](
        _0x33b6d4.unitId,
        _0x33b6d4.subUnitId,
      ),
      _0x3368a6 = this._getBoardPointFromEvent(_0x5643d8);
    if (!_0x509841) {
      let _0x347735 = _0x255543 ? _0x4f392f[_0x255543] : null,
        _0x4f8b23 = (0, t.getMindMapNodeMeta)(
          _0x347735 == null ? undefined : _0x347735.element,
        ),
        _0x44327b = _0x255543
          ? ((0, e.resolveBoardElementWorldBounds)(_0x4f392f, _0x255543) ??
            (_0x347735 == null ? undefined : _0x347735.element["transform"]))
          : null;
      (!(_0x4f8b23 != null && _0x4f8b23.parentNodeId) ||
        !_0x44327b ||
        !this._isPointInBounds(_0x3368a6, {
          left: _0x44327b.left ?? 0,
          top: _0x44327b.top ?? 0,
          width: _0x44327b.width ?? 0,
          height: _0x44327b.height ?? 0,
        })) &&
        (_0x255543 = this._findChildNodeAtPoint(_0x4f392f, _0x3368a6));
    }
    if (!_0x255543) {
      this._pointerDragStart = null;
      return;
    }
    let _0x9063a5 = _0x4f392f[_0x255543],
      _0x56b2d2 = (0, t.getMindMapNodeMeta)(
        _0x9063a5 == null ? undefined : _0x9063a5.element,
      );
    if (!_0x9063a5 || !(_0x56b2d2 != null && _0x56b2d2.parentNodeId)) {
      this._pointerDragStart = null;
      return;
    }
    (this._instanceService["focusUnit"](_0x33b6d4.unitId),
      (_0xb2456f = this._renderContext["engine"]) == null ||
        (_0x7d969c = _0xb2456f.getCanvasElement) == null ||
        (_0x7d969c = _0x7d969c.call(_0xb2456f)) == null ||
        (_0x43d877 = _0x7d969c.focus) == null ||
        _0x43d877.call(_0x7d969c, { preventScroll: true }),
      (_0x15416f = (_0x185242 = this._elementStateService).selectElements) ==
        null || _0x15416f.call(_0x185242, _0x33b6d4, [_0x255543], _0x255543),
      _0x4c573d == null || _0x4c573d.stopPropagation());
    let _0x11398a = (0, e.resolveBoardElementWorldBounds)(_0x4f392f, _0x255543),
      _0x52e425 = _0x9063a5.element["transform"],
      _0x4a9333 = {
        left:
          (_0x11398a == null ? undefined : _0x11398a.left) ??
          _0x52e425.left ??
          0,
        top:
          (_0x11398a == null ? undefined : _0x11398a.top) ?? _0x52e425.top ?? 0,
        width:
          (_0x11398a == null ? undefined : _0x11398a.width) ??
          _0x52e425.width ??
          0,
        height:
          (_0x11398a == null ? undefined : _0x11398a.height) ??
          _0x52e425.height ??
          0,
      };
    if (!_0x509841 && !this._isPointInBounds(_0x3368a6, _0x4a9333)) {
      this._pointerDragStart = null;
      return;
    }
    let _0x22903e = this._getPointerScreenPoint(_0x5643d8);
    ((this._childDragActivated = false),
      (this._childDragSelectionHidden = false),
      (this._lastChildDragAction = null),
      (this._pointerDragStart = {
        kind: "child",
        unitId: _0x33b6d4.unitId,
        subUnitId: _0x33b6d4.subUnitId,
        nodeId: _0x255543,
        scopeId: _0x56b2d2.structureScopeId,
        ..._0x4a9333,
        pointerStartX: _0x22903e.x,
        pointerStartY: _0x22903e.y,
        elementData: _0x4f392f,
      }),
      this._attachActivePointerDragListeners(),
      this._consumePointerEvent(_0x5643d8, _0x4c573d));
  }
  _syncPointerChildDragPreview(_0x2a597d, _0x2f4a5a) {
    var _0x26dd56, _0x3b229b;
    let _0x5dbfad = this._pointerDragStart;
    if (
      !_0x5dbfad ||
      (_0x2a597d.buttons !== undefined && _0x2a597d.buttons !== 1)
    )
      return;
    let _0x25d0b9 = this._getPointerLiveBounds(_0x2a597d, _0x5dbfad);
    if (!this._isChildDragPastActivationThreshold(_0x5dbfad, _0x25d0b9)) return;
    (this._childDragActivated || this._hideSelectionForChildDrag(),
      (this._childDragActivated = true));
    let _0x303bed = this._createTopologyBoundsByElementId(
        _0x5dbfad.elementData,
        _0x5dbfad.nodeId,
        _0x25d0b9,
      ),
      _0x2f4aa5 = V(_0x5dbfad.elementData, _0x5dbfad.nodeId, {
        boundsByElementId: _0x303bed,
        detachWhenNoSnap: true,
      });
    ((this._lastChildDragAction = _0x2f4aa5),
      this._syncChildDragPreviewObject(_0x25d0b9, _0x2f4aa5, _0x303bed),
      this._consumePointerEvent(_0x2a597d, _0x2f4a5a),
      this._renderContext["scene"].makeDirty(true),
      (_0x26dd56 = (_0x3b229b = this._renderContext["scene"]).requestRender) ==
        null || _0x26dd56.call(_0x3b229b));
  }
  _applyPointerChildDrag(_0xfe6350, _0xd626fd) {
    let _0x56c1fa = this._pointerDragStart;
    if (!_0x56c1fa) return;
    if (
      ((this._pointerDragStart = null),
      this._disposeActivePointerDragListeners(),
      this._removeDragPreviewObject(),
      !this._childDragActivated)
    ) {
      this._lastChildDragAction = null;
      return;
    }
    let _0x3e3650 = this._boardElementService["getElementData"](
        _0x56c1fa.unitId,
        _0x56c1fa.subUnitId,
      ),
      _0x7b1751 = this._getPointerLiveBounds(_0xfe6350, _0x56c1fa),
      _0x15c490 = this._createTopologyBoundsByElementId(
        _0x3e3650,
        _0x56c1fa.nodeId,
        _0x7b1751,
      ),
      _0x1d866e = V(_0x3e3650, _0x56c1fa.nodeId, {
        boundsByElementId: _0x15c490,
        detachWhenNoSnap: true,
      });
    ((this._lastChildDragAction = null),
      this._executeChildDragAction(
        _0x56c1fa.unitId,
        _0x56c1fa.subUnitId,
        _0x56c1fa.nodeId,
        _0x3e3650,
        _0x1d866e,
      ),
      (this._childDragSelectionHidden = false),
      this._consumePointerEvent(_0xfe6350, _0xd626fd));
  }
  _cancelPointerChildDrag(_0x9d6f5d) {
    let _0xa5776c = this._pointerDragStart;
    if (_0xa5776c) {
      if (
        ((this._pointerDragStart = null),
        this._disposeActivePointerDragListeners(),
        (this._childDragActivated = false),
        (this._lastChildDragAction = null),
        this._removeDragPreviewObject(),
        this._childDragSelectionHidden)
      ) {
        var _0x14d8d3, _0x5c76a9;
        ((_0x14d8d3 = (_0x5c76a9 = this._elementStateService).selectElements) ==
          null ||
          _0x14d8d3.call(
            _0x5c76a9,
            { unitId: _0xa5776c.unitId, subUnitId: _0xa5776c.subUnitId },
            [_0xa5776c.nodeId],
            _0xa5776c.nodeId,
          ),
          (this._childDragSelectionHidden = false));
      }
      _0x9d6f5d == null || _0x9d6f5d.stopPropagation();
    }
  }
  _attachActivePointerDragListeners() {
    this._disposeActivePointerDragListeners();
    let _0x4262cc = typeof window > "u" ? null : window;
    if (!(_0x4262cc != null && _0x4262cc.addEventListener)) return;
    let _0x3eabf7 = new i["DisposableCollection"](),
      _0x360d1f = (_0x5f012a) => this._syncPointerChildDragPreview(_0x5f012a),
      _0xcd926 = (_0x49ae23) => this._applyPointerChildDrag(_0x49ae23),
      _0x3cfc9f = () => this._cancelPointerChildDrag();
    (_0x4262cc.addEventListener("pointermove", _0x360d1f, { capture: true }),
      _0x4262cc.addEventListener("pointerup", _0xcd926, { capture: true }),
      _0x4262cc.addEventListener("pointercancel", _0x3cfc9f, { capture: true }),
      _0x3eabf7.add(
        (0, i.toDisposable)(() => {
          (_0x4262cc.removeEventListener("pointermove", _0x360d1f, {
            capture: true,
          }),
            _0x4262cc.removeEventListener("pointerup", _0xcd926, {
              capture: true,
            }),
            _0x4262cc.removeEventListener("pointercancel", _0x3cfc9f, {
              capture: true,
            }));
        }),
      ),
      (this._activePointerDragDisposables = _0x3eabf7));
  }
  _findChildNodeAtPoint(_0x50dfe9, _0x40d6fe) {
    let _0x29aee6 = Object.values(_0x50dfe9);
    for (let _0x5dc536 = _0x29aee6.length - 1; _0x5dc536 >= 0; --_0x5dc536) {
      let _0x29955a = _0x29aee6[_0x5dc536],
        _0x3138d1 = (0, t.getMindMapNodeMeta)(_0x29955a.element);
      if (!(_0x3138d1 != null && _0x3138d1.parentNodeId)) continue;
      let _0x567a13 =
        (0, e.resolveBoardElementWorldBounds)(_0x50dfe9, _0x29955a.elementId) ??
        _0x29955a.element["transform"];
      if (
        this._isPointInBounds(_0x40d6fe, {
          left: _0x567a13.left ?? 0,
          top: _0x567a13.top ?? 0,
          width: _0x567a13.width ?? 0,
          height: _0x567a13.height ?? 0,
        })
      )
        return _0x29955a.elementId;
    }
  }
  _disposeActivePointerDragListeners() {
    var _0x4e2104;
    ((_0x4e2104 = this._activePointerDragDisposables) == null ||
      _0x4e2104.dispose(),
      (this._activePointerDragDisposables = null));
  }
  _syncDragPreview(_0x1db705) {
    let _0x3a82ae = this._dragStart;
    if (_0x3a82ae) {
      if (
        ((_0x3a82ae.kind === "root" || _0x3a82ae.kind === "scope") &&
          this._syncRootScopePreview(_0x1db705),
        _0x3a82ae.kind === "root")
      ) {
        this._syncRootReparentPreview(_0x1db705);
        return;
      }
      this._syncChildDragPreview(_0x1db705);
    }
  }
  _syncRootScopePreview(_0x5452f7) {
    let _0x2b993a = this._dragStart;
    if (!_0x2b993a || (_0x2b993a.kind !== "root" && _0x2b993a.kind !== "scope"))
      return;
    let _0x1a1693 =
      _0x5452f7 == null
        ? undefined
        : _0x5452f7.get(
            (0, n.getBoardElementRenderObjectKey)(
              _0x2b993a.unitId,
              _0x2b993a.nodeId,
            ),
          );
    if (
      !_0x1a1693 ||
      !Number.isFinite(_0x1a1693.left) ||
      !Number.isFinite(_0x1a1693.top)
    )
      return;
    let _0xcd812f = ae({
      elementData: _0x2b993a.elementData,
      rootNodeId: _0x2b993a.nodeId,
      scopeId: _0x2b993a.scopeId,
      rootStartBounds: { left: _0x2b993a.left, top: _0x2b993a.top },
      liveRootBounds: { left: _0x1a1693.left, top: _0x1a1693.top },
    });
    if (!_0xcd812f) return;
    let _0x52c6c4 = this._renderContext["scene"],
      _0x160b98 = _0x52c6c4,
      _0x14ef49 = false;
    (_0xcd812f.items["forEach"]((_0x39b165) => {
      var _0x510a05;
      let _0x2ef9bb = (0, n.getBoardElementRenderObjectKey)(
          _0x2b993a.unitId,
          _0x39b165.elementId,
        ),
        _0x4bc060 =
          ((_0x510a05 = _0x160b98.getObjectIncludeInGroup) == null
            ? undefined
            : _0x510a05.call(_0x160b98, _0x2ef9bb)) ??
          _0x52c6c4.getObject(_0x2ef9bb);
      if (_0x4bc060) {
        if (
          _0x39b165.kind === "connector" &&
          typeof _0x4bc060.updateElement == "function"
        ) {
          (_0x4bc060.updateElement(_0x39b165.element, _0xcd812f.elementData),
            (_0x14ef49 = true));
          return;
        }
        _0x39b165.kind === "bounds" &&
          (_0x4bc060.transformByState(_0x39b165.bounds),
          typeof _0x4bc060.makeDirtyNoDebounce == "function"
            ? _0x4bc060.makeDirtyNoDebounce(true)
            : _0x4bc060.makeDirty(true),
          (_0x14ef49 = true));
      }
    }),
      _0x14ef49 && _0x52c6c4.makeDirty(true));
  }
  _syncRootReparentPreview(_0x542088) {
    var _0x218d55, _0x5428da;
    let _0x1479b9 = this._dragStart;
    if (!_0x1479b9 || _0x1479b9.kind !== "root") return;
    let _0x443dc4 =
      _0x542088 == null
        ? undefined
        : _0x542088.get(
            (0, n.getBoardElementRenderObjectKey)(
              _0x1479b9.unitId,
              _0x1479b9.nodeId,
            ),
          );
    if (
      !_0x443dc4 ||
      !Number.isFinite(_0x443dc4.left) ||
      !Number.isFinite(_0x443dc4.top)
    ) {
      this._removeDragPreviewObject();
      return;
    }
    let _0x1028bc = this._getLiveObjectBounds(_0x443dc4, _0x1479b9),
      _0x2becda = this._createTopologyBoundsByElementId(
        _0x1479b9.elementData,
        _0x1479b9.nodeId,
        _0x1028bc,
      ),
      _0x1242b6 = V(_0x1479b9.elementData, _0x1479b9.nodeId, {
        boundsByElementId: _0x2becda,
        allowRootReparent: true,
      });
    if (_0x1242b6.kind !== "reparent") {
      this._removeDragPreviewObject();
      return;
    }
    let _0x22992d = this._ensureDragPreviewObject();
    _0x22992d &&
      (_0x22992d.updateState({
        ghostBounds: _0x1028bc,
        sourceBounds: null,
        parentBounds: _0x2becda[_0x1242b6.newParentNodeId],
        side: _0x1242b6.side,
        textStyle: undefined,
        renderGhostNode: false,
      }),
      this._renderContext["scene"].makeDirty(true),
      (_0x218d55 = (_0x5428da = this._renderContext["scene"]).requestRender) ==
        null || _0x218d55.call(_0x5428da));
  }
  _syncChildDragPreview(_0x3ccbd2) {
    var _0x59a836, _0x454249;
    let _0x5a97da = this._dragStart;
    if (!_0x5a97da || _0x5a97da.kind !== "child") return;
    let _0x2863c3 =
      _0x3ccbd2 == null
        ? undefined
        : _0x3ccbd2.get(
            (0, n.getBoardElementRenderObjectKey)(
              _0x5a97da.unitId,
              _0x5a97da.nodeId,
            ),
          );
    if (!_0x2863c3) {
      this._removeDragPreviewObject();
      return;
    }
    let _0xccbe81 = this._getLiveObjectBounds(_0x2863c3, _0x5a97da);
    if (!this._isChildDragPastActivationThreshold(_0x5a97da, _0xccbe81)) {
      ((this._lastChildDragAction = null),
        this._removeDragPreviewObject(),
        this._restoreObjectToDragStart(_0x2863c3, _0x5a97da),
        this._renderContext["scene"].makeDirty(true));
      return;
    }
    (this._childDragActivated || this._hideSelectionForChildDrag(),
      (this._childDragActivated = true));
    let _0x14adfa = this._createTopologyBoundsByElementId(
        _0x5a97da.elementData,
        _0x5a97da.nodeId,
        _0xccbe81,
      ),
      _0x270f43 = V(_0x5a97da.elementData, _0x5a97da.nodeId, {
        boundsByElementId: _0x14adfa,
        detachWhenNoSnap: true,
      });
    ((this._lastChildDragAction = _0x270f43),
      this._syncChildDragPreviewObject(_0xccbe81, _0x270f43, _0x14adfa),
      this._restoreObjectToDragStart(_0x2863c3, _0x5a97da),
      this._renderContext["scene"].makeDirty(true),
      (_0x59a836 = (_0x454249 = this._renderContext["scene"]).requestRender) ==
        null || _0x59a836.call(_0x454249));
  }
  _applyDragTopologyAction(_0x7556ef) {
    var _0x154ade;
    let _0x252cc5 = this._elementStateService["getSnapshot"](),
      _0x10d563 = _0x252cc5.context,
      _0xdab503 = _0x252cc5.focusedId ?? _0x252cc5.selectedIds[0];
    if (
      _0x10d563 &&
      ((_0x154ade = this._dragStart) == null ? undefined : _0x154ade.kind) ===
        "scope"
    ) {
      (this._removeDragPreviewObject(),
        this._applyScopeTranslation(
          _0x10d563.unitId,
          _0x10d563.subUnitId,
          _0x7556ef,
        ));
      return;
    }
    if (!_0x10d563 || !_0xdab503 || _0x252cc5.selectedIds["length"] !== 1) {
      (this._removeDragPreviewObject(), (this._dragStart = null));
      return;
    }
    this._removeDragPreviewObject();
    let _0x74781a = this._boardElementService["getElementData"](
      _0x10d563.unitId,
      _0x10d563.subUnitId,
    );
    if (
      this._applyRootTranslation(
        _0x10d563.unitId,
        _0x10d563.subUnitId,
        _0xdab503,
        _0x74781a,
        _0x7556ef,
      )
    )
      return;
    let _0x4f300b = this._resolveChildDragTopologyAction(
      _0x10d563.unitId,
      _0x10d563.subUnitId,
      _0xdab503,
      _0x74781a,
      _0x7556ef,
    );
    this._executeChildDragAction(
      _0x10d563.unitId,
      _0x10d563.subUnitId,
      _0xdab503,
      _0x74781a,
      _0x4f300b,
    );
  }
  _applyScopeTranslation(_0x10a0e1, _0x55f43a, _0x201a18) {
    let _0x1d9ec4 = this._dragStart;
    if (
      ((this._dragStart = null),
      !_0x1d9ec4 ||
        _0x1d9ec4.kind !== "scope" ||
        _0x1d9ec4.unitId !== _0x10a0e1 ||
        _0x1d9ec4.subUnitId !== _0x55f43a)
    )
      return;
    let _0x56cd88 =
        _0x201a18 == null
          ? undefined
          : _0x201a18.get(
              (0, n.getBoardElementRenderObjectKey)(
                _0x10a0e1,
                _0x1d9ec4.nodeId,
              ),
            ),
      _0x2df89f =
        _0x56cd88 && Number.isFinite(_0x56cd88.left)
          ? (_0x56cd88.left ?? _0x1d9ec4.left)
          : _0x1d9ec4.left,
      _0x373628 =
        _0x56cd88 && Number.isFinite(_0x56cd88.top)
          ? (_0x56cd88.top ?? _0x1d9ec4.top)
          : _0x1d9ec4.top,
      _0x4b953c = _0x2df89f - _0x1d9ec4.left,
      _0x563928 = _0x373628 - _0x1d9ec4.top;
    (_0x4b953c !== 0 || _0x563928 !== 0) &&
      this._commandService["executeCommand"](
        t.TranslateMindMapOperation["id"],
        {
          unitId: _0x10a0e1,
          subUnitId: _0x55f43a,
          scopeId: _0x1d9ec4.scopeId,
          deltaX: _0x4b953c,
          deltaY: _0x563928,
        },
      );
  }
  _executeChildDragAction(
    _0x5497e4,
    _0x2876a8,
    _0x4aef65,
    _0x483dfb,
    _0x5235a7,
  ) {
    if (_0x5235a7.kind === "reparent") {
      var _0xc523f5, _0x40c9fa;
      let _0x3de588 = (0, t.getMindMapNodeMeta)(
          (_0xc523f5 = _0x483dfb[_0x4aef65]) == null
            ? undefined
            : _0xc523f5.element,
        ),
        _0x58c657 = (0, t.getMindMapNodeMeta)(
          (_0x40c9fa = _0x483dfb[_0x5235a7.newParentNodeId]) == null
            ? undefined
            : _0x40c9fa.element,
        );
      this._executeAndLayout(
        t.ReparentMindMapNodeOperation["id"],
        {
          unitId: _0x5497e4,
          subUnitId: _0x2876a8,
          nodeId: _0x4aef65,
          newParentNodeId: _0x5235a7.newParentNodeId,
          side: _0x5235a7.side,
          ...(_0x5235a7.referenceNodeId
            ? { referenceNodeId: _0x5235a7.referenceNodeId }
            : null),
          ...(_0x5235a7.placement ? { placement: _0x5235a7.placement } : null),
        },
        [
          _0x3de588 == null ? undefined : _0x3de588.structureScopeId,
          _0x58c657 == null ? undefined : _0x58c657.structureScopeId,
        ],
        _0x4aef65,
      );
      return;
    }
    if (_0x5235a7.kind === "detach") {
      var _0x140a0d;
      let _0x544886 = (0, t.getMindMapNodeMeta)(
        (_0x140a0d = _0x483dfb[_0x4aef65]) == null
          ? undefined
          : _0x140a0d.element,
      );
      this._executeAndLayout(
        t.DetachMindMapNodeOperation["id"],
        {
          unitId: _0x5497e4,
          subUnitId: _0x2876a8,
          nodeId: _0x4aef65,
          ...(Number.isFinite(_0x5235a7.left)
            ? { left: _0x5235a7.left }
            : null),
          ...(Number.isFinite(_0x5235a7.top) ? { top: _0x5235a7.top } : null),
        },
        [_0x544886 == null ? undefined : _0x544886.structureScopeId],
        _0x4aef65,
      );
    }
  }
  _applyRootTranslation(_0x254914, _0x43c711, _0x41d724, _0x9c094e, _0x562422) {
    let _0x3888f2 = this._dragStart;
    if (
      ((_0x3888f2 == null ? undefined : _0x3888f2.kind) === "root" &&
        (this._dragStart = null),
      !_0x3888f2 ||
        _0x3888f2.unitId !== _0x254914 ||
        _0x3888f2.subUnitId !== _0x43c711 ||
        _0x3888f2.nodeId !== _0x41d724)
    )
      return false;
    let _0x25ef38 = _0x9c094e[_0x41d724],
      _0x2040a3 = (0, t.getMindMapNodeMeta)(
        _0x25ef38 == null ? undefined : _0x25ef38.element,
      );
    if (!_0x25ef38 || !_0x2040a3 || _0x2040a3.parentNodeId !== null)
      return false;
    let _0x268c35 =
        _0x562422 == null
          ? undefined
          : _0x562422.get(
              (0, n.getBoardElementRenderObjectKey)(_0x254914, _0x41d724),
            ),
      _0x4b382b = (0, e.resolveBoardElementWorldBounds)(_0x9c094e, _0x41d724),
      _0x5b0069 = Number.isFinite(
        _0x268c35 == null ? undefined : _0x268c35.left,
      )
        ? _0x268c35.left
        : ((_0x4b382b == null ? undefined : _0x4b382b.left) ??
          _0x25ef38.element["transform"].left ??
          0),
      _0x41736e = Number.isFinite(_0x268c35 == null ? undefined : _0x268c35.top)
        ? _0x268c35.top
        : ((_0x4b382b == null ? undefined : _0x4b382b.top) ??
          _0x25ef38.element["transform"].top ??
          0),
      _0x1b4dd6 = _0x5b0069 - _0x3888f2.left,
      _0x810e34 = _0x41736e - _0x3888f2.top;
    if (_0x1b4dd6 === 0 && _0x810e34 === 0) return true;
    let _0x4dae7c = {
        left: _0x5b0069,
        top: _0x41736e,
        width: Number.isFinite(_0x268c35 == null ? undefined : _0x268c35.width)
          ? _0x268c35.width
          : _0x3888f2.width,
        height: Number.isFinite(
          _0x268c35 == null ? undefined : _0x268c35.height,
        )
          ? _0x268c35.height
          : _0x3888f2.height,
      },
      _0x5ddb91 = V(_0x9c094e, _0x41d724, {
        boundsByElementId: this._createTopologyBoundsByElementId(
          _0x9c094e,
          _0x41d724,
          _0x4dae7c,
        ),
        allowRootReparent: true,
      });
    if (_0x5ddb91.kind === "reparent")
      return (
        this._executeChildDragAction(
          _0x254914,
          _0x43c711,
          _0x41d724,
          _0x9c094e,
          _0x5ddb91,
        ),
        true
      );
    let _0x122dbb =
      !!_0x4b382b &&
      Math.abs(_0x4b382b.left - _0x5b0069) < 0.001 &&
      Math.abs(_0x4b382b.top - _0x41736e) < 0.001;
    return (
      this._commandService["executeCommand"](
        t.TranslateMindMapOperation["id"],
        {
          unitId: _0x254914,
          subUnitId: _0x43c711,
          scopeId: _0x3888f2.scopeId,
          deltaX: _0x1b4dd6,
          deltaY: _0x810e34,
          ...(_0x122dbb
            ? {
                excludeElementIds: [_0x41d724],
                preserveExcludedWorldTransforms: true,
              }
            : null),
        },
      ),
      true
    );
  }
  _resolveChildDragTopologyAction(
    _0x574100,
    _0x57181c,
    _0xa67bf9,
    _0x20d389,
    _0x189bca,
  ) {
    let _0xb51c = this._dragStart;
    if (
      !_0xb51c ||
      _0xb51c.kind !== "child" ||
      _0xb51c.unitId !== _0x574100 ||
      _0xb51c.subUnitId !== _0x57181c ||
      _0xb51c.nodeId !== _0xa67bf9
    )
      return { kind: "none" };
    this._dragStart = null;
    let _0x383638 =
      _0x189bca == null
        ? undefined
        : _0x189bca.get(
            (0, n.getBoardElementRenderObjectKey)(_0x574100, _0xa67bf9),
          );
    if (!this._childDragActivated)
      return (
        _0x383638 && this._restoreObjectToDragStart(_0x383638, _0xb51c),
        (this._lastChildDragAction = null),
        { kind: "none" }
      );
    if (!_0x383638) {
      let _0x2776e9 = this._lastChildDragAction ?? { kind: "none" };
      return ((this._lastChildDragAction = null), _0x2776e9);
    }
    let _0x1c4d93 = this._getLiveObjectBounds(_0x383638, _0xb51c);
    if (
      (this._restoreObjectToDragStart(_0x383638, _0xb51c),
      !this._isChildDragPastActivationThreshold(_0xb51c, _0x1c4d93))
    )
      return ((this._lastChildDragAction = null), { kind: "none" });
    let _0x29a0cc = V(_0x20d389, _0xa67bf9, {
      boundsByElementId: this._createTopologyBoundsByElementId(
        _0x20d389,
        _0xa67bf9,
        _0x1c4d93,
      ),
      detachWhenNoSnap: true,
    });
    return ((this._lastChildDragAction = null), _0x29a0cc);
  }
  _isChildDragPastActivationThreshold(_0x232a9a, _0x550ac7) {
    let _0x23101f = (_0x550ac7.left ?? _0x232a9a.left) - _0x232a9a.left,
      _0x2780d2 = (_0x550ac7.top ?? _0x232a9a.top) - _0x232a9a.top;
    return Math.hypot(_0x23101f, _0x2780d2) >= 18;
  }
  _getPointerLiveBounds(_0x29dd22, _0x2d1239) {
    let _0x570c3e = this._getPointerScreenPoint(_0x29dd22),
      _0xa9b0b2 = this._getZoomRatio();
    return {
      left:
        _0x2d1239.left + (_0x570c3e.x - _0x2d1239.pointerStartX) / _0xa9b0b2,
      top: _0x2d1239.top + (_0x570c3e.y - _0x2d1239.pointerStartY) / _0xa9b0b2,
      width: _0x2d1239.width,
      height: _0x2d1239.height,
    };
  }
  _getBoardPointFromEvent(_0x4c0225) {
    let _0x429510 = this._uiStateService["getState"](),
      _0x200edc = (_0x429510 == null
        ? undefined
        : _0x429510.viewportPanOffset) ?? { x: 0, y: 0 },
      _0x230402 = this._getZoomRatio();
    return {
      x: Math.round(((_0x4c0225.offsetX ?? 0) - _0x200edc.x) / _0x230402),
      y: Math.round(((_0x4c0225.offsetY ?? 0) - _0x200edc.y) / _0x230402),
    };
  }
  _getPointerScreenPoint(_0x5cc6f5) {
    return {
      x: Number.isFinite(_0x5cc6f5.clientX)
        ? _0x5cc6f5.clientX
        : (_0x5cc6f5.offsetX ?? 0),
      y: Number.isFinite(_0x5cc6f5.clientY)
        ? _0x5cc6f5.clientY
        : (_0x5cc6f5.offsetY ?? 0),
    };
  }
  _getZoomRatio() {
    let _0x4636fd = this._uiStateService["getState"]().zoomRatio;
    return Number.isFinite(_0x4636fd) && (_0x4636fd ?? 0) > 0 ? _0x4636fd : 1;
  }
  _isPointInBounds(_0x32ac72, _0xc49e3f) {
    return (
      _0x32ac72.x >= _0xc49e3f.left &&
      _0x32ac72.x <= _0xc49e3f.left + _0xc49e3f.width &&
      _0x32ac72.y >= _0xc49e3f.top &&
      _0x32ac72.y <= _0xc49e3f.top + _0xc49e3f.height
    );
  }
  _consumePointerEvent(_0x235757, _0x56c97e) {
    var _0x56ae39, _0x4ec39e;
    (_0x56c97e == null || _0x56c97e.stopPropagation(),
      _0x56c97e && (_0x56c97e.skipNextObservers = true),
      (_0x56ae39 = _0x235757.preventDefault) == null ||
        _0x56ae39.call(_0x235757),
      (_0x4ec39e = _0x235757.stopPropagation) == null ||
        _0x4ec39e.call(_0x235757));
  }
  _hideSelectionForChildDrag() {
    var _0x5ce2ff, _0x2c0415;
    this._childDragSelectionHidden ||=
      ((_0x5ce2ff = (_0x2c0415 = this._elementStateService).clearSelection) ==
        null || _0x5ce2ff.call(_0x2c0415),
      true);
  }
  _getLiveObjectBounds(_0x3385f4, _0x42ae99) {
    return {
      left: Number.isFinite(_0x3385f4.left) ? _0x3385f4.left : _0x42ae99.left,
      top: Number.isFinite(_0x3385f4.top) ? _0x3385f4.top : _0x42ae99.top,
      width: Number.isFinite(_0x3385f4.width)
        ? _0x3385f4.width
        : _0x42ae99.width,
      height: Number.isFinite(_0x3385f4.height)
        ? _0x3385f4.height
        : _0x42ae99.height,
    };
  }
  _restoreObjectToDragStart(_0x803c97, _0x2abd54) {
    (typeof _0x803c97.transformByState == "function" &&
      _0x803c97.transformByState({
        left: _0x2abd54.left,
        top: _0x2abd54.top,
        width: _0x2abd54.width,
        height: _0x2abd54.height,
      }),
      typeof _0x803c97.makeDirtyNoDebounce == "function"
        ? _0x803c97.makeDirtyNoDebounce(true)
        : typeof _0x803c97.makeDirty == "function" &&
          _0x803c97.makeDirty(true));
  }
  _createTopologyBoundsByElementId(_0x16b0f8, _0x4f9312, _0x269a6d) {
    return Object.fromEntries(
      Object.keys(_0x16b0f8).map((_0x443972) =>
        _0x443972 === _0x4f9312
          ? [_0x443972, _0x269a6d]
          : [
              _0x443972,
              (0, e.resolveBoardElementWorldBounds)(_0x16b0f8, _0x443972) ??
                _0x16b0f8[_0x443972].element["transform"],
            ],
      ),
    );
  }
  _ensureDragPreviewObject() {
    if (this._dragPreviewObject) return this._dragPreviewObject;
    let _0x340c64 = this._renderContext["scene"];
    return typeof _0x340c64.addObject == "function"
      ? ((this._dragPreviewObject = new ee(k)),
        _0x340c64.addObject(this._dragPreviewObject, A),
        this._dragPreviewObject)
      : null;
  }
  _syncChildDragPreviewObject(_0xbb6e65, _0x22726c, _0x1d56ad) {
    let _0x28ea8d = this._ensureDragPreviewObject();
    _0x28ea8d &&
      _0x28ea8d.updateState({
        ghostBounds: _0xbb6e65,
        sourceBounds: this._resolvePreviewSourceBounds(),
        parentBounds:
          _0x22726c.kind === "reparent"
            ? _0x1d56ad[_0x22726c.newParentNodeId]
            : null,
        side: _0x22726c.kind === "reparent" ? _0x22726c.side : "right",
        textStyle: this._resolvePreviewTextStyle(),
        renderGhostNode: true,
      });
  }
  _resolvePreviewSourceBounds() {
    let _0x1e66bf = this._pointerDragStart ?? this._dragStart;
    return _0x1e66bf
      ? {
          left: _0x1e66bf.left,
          top: _0x1e66bf.top,
          width: _0x1e66bf.width,
          height: _0x1e66bf.height,
        }
      : null;
  }
  _resolvePreviewTextStyle() {
    var _0x4cccaf, _0x1c820c;
    let _0x5d2203 = this._pointerDragStart ?? this._dragStart,
      _0x2abcdb =
        _0x5d2203 == null ||
        (_0x4cccaf = _0x5d2203.elementData[_0x5d2203.nodeId]) == null
          ? undefined
          : _0x4cccaf.element,
      _0x3dbd7e =
        _0x2abcdb == null || (_0x1c820c = _0x2abcdb.shapeData) == null
          ? undefined
          : _0x1c820c.shapeText;
    if (_0x3dbd7e)
      return {
        text: typeof _0x3dbd7e.text == "string" ? _0x3dbd7e.text : undefined,
        fontSize: Number.isFinite(_0x3dbd7e.fontSize)
          ? _0x3dbd7e.fontSize
          : undefined,
        color: typeof _0x3dbd7e.color == "string" ? _0x3dbd7e.color : undefined,
        horizontalAlign: Number.isFinite(_0x3dbd7e.horizontalAlign)
          ? _0x3dbd7e.horizontalAlign
          : undefined,
      };
  }
  _removeDragPreviewObject() {
    var _0x4a8137, _0x34f547, _0x2f06c4;
    if (!this._dragPreviewObject) return;
    let _0x21d943 = this._renderContext["scene"];
    ((_0x4a8137 = _0x21d943.removeObjects) == null ||
      _0x4a8137.call(_0x21d943, [this._dragPreviewObject]),
      (this._dragPreviewObject = null),
      (_0x34f547 = (_0x2f06c4 = this._renderContext["scene"]).makeDirty) ==
        null || _0x34f547.call(_0x2f06c4, true));
  }
  _executeAndLayout(_0x210cb9, _0x5653c4, _0x4b91fe, _0x615abe) {
    let _0x32f38d = [...new Set(_0x4b91fe.filter((_0xab3872) => !!_0xab3872))],
      _0x1ee8d2 =
        typeof _0x5653c4.unitId == "string"
          ? _0x5653c4.unitId
          : this._renderContext["unitId"],
      _0x5862a7 = this._undoRedoGroupService["createRunner"](_0x1ee8d2),
      _0x29a8d9 = _0x5862a7(() =>
        this._commandService["executeCommand"](_0x210cb9, _0x5653c4),
      );
    Promise.resolve(_0x29a8d9).then((_0xb744e8) => {
      var _0x2625d3, _0x3c1174, _0x266e24, _0x3f9534;
      if (_0xb744e8) {
        if (
          (_0x32f38d.forEach((_0x52f0ad) => {
            _0x5862a7(() =>
              this._commandService["executeCommand"](
                t.LayoutMindMapOperation["id"],
                {
                  unitId: _0x5653c4.unitId,
                  subUnitId: _0x5653c4.subUnitId,
                  scopeId: _0x52f0ad,
                },
              ),
            );
          }),
          _0x615abe &&
            typeof _0x5653c4.unitId == "string" &&
            typeof _0x5653c4.subUnitId == "string")
        ) {
          var _0x39b514, _0x4ec31e;
          (_0x39b514 = (_0x4ec31e = this._elementStateService)
            .selectElements) == null ||
            _0x39b514.call(
              _0x4ec31e,
              { unitId: _0x5653c4.unitId, subUnitId: _0x5653c4.subUnitId },
              [_0x615abe],
              _0x615abe,
            );
        }
        ((_0x2625d3 = (_0x3c1174 = this._renderContext["scene"]).makeDirty) ==
          null || _0x2625d3.call(_0x3c1174, true),
          (_0x266e24 = (_0x3f9534 = this._renderContext["scene"])
            .requestRender) == null || _0x266e24.call(_0x3f9534));
      }
    });
  }
};
oe = S(
  [
    x(1, (0, i.Inject)(e.IBoardElementService)),
    x(2, (0, i.Inject)(n.IBoardElementStateService)),
    x(3, i.ICommandService),
    x(4, n.IBoardUIStateService),
    x(5, i.IUniverInstanceService),
    x(6, (0, i.Inject)(s.UndoRedoGroupService)),
  ],
  oe,
);
let H = class extends i.Disposable {
  constructor(
    _0x3242ba,
    _0x589598,
    _0x364f69,
    _0x30f54d,
    _0x1794cb,
    _0x120033,
    _0x3071d2,
    _0x2c7027,
    _0x4c42f3,
  ) {
    (super(),
      (this.renderContext = _0x3242ba),
      (this.commandService = _0x589598),
      (this.elementService = _0x364f69),
      (this.elementStateService = _0x30f54d),
      (this.uiStateService = _0x1794cb),
      (this.clipboardService = _0x120033),
      (this.dialogService = _0x3071d2),
      (this.localeService = _0x2c7027),
      (this.textEditingService = _0x4c42f3));
  }
};
H = S(
  [
    x(1, i.ICommandService),
    x(2, e.IBoardElementService),
    x(3, n.IBoardElementStateService),
    x(4, n.IBoardUIStateService),
    x(5, t.IMindMapClipboardService),
    x(6, s.IDialogService),
    x(7, (0, i.Inject)(i.LocaleService)),
    x(8, (0, i.Inject)(n.BoardTextEditingService)),
  ],
  H,
);
const se = "board.mind-map.description-dialog",
  ce = "board-mind-map-description-dialog";
function le(_0x58660a) {
  let {
      unitId: _0x17bcdb,
      subUnitId: _0x1a5f5e,
      nodeId: _0x468e50,
      initialDescription: _0x504ae7 = "",
    } = _0x58660a,
    _0x482c03 = (0, s.useDependency)(i.ICommandService),
    _0x376b94 = (0, s.useDependency)(s.IDialogService),
    _0x2bb0c2 = (0, s.useDependency)(i.LocaleService),
    [_0x23a601, _0x5265d8] = (0, f.useState)(_0x504ae7),
    _0x5b9b2e = () => _0x376b94.close(ce);
  return (0, p.jsxs)("div", {
    className:
      "univer-flex\x20univer-w-full\x20univer-flex-col\x20univer-gap-4",
    "data-board-mind-map-description-dialog": "true",
    children: [
      (0, p.jsxs)("label", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [
          (0, p.jsx)("span", {
            className:
              "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
            children: _0x2bb0c2.t("boards-mind-ui.description"),
          }),
          (0, p.jsx)(u.Textarea, {
            autoFocus: true,
            className: "univer-h-32\x20univer-resize-none\x20univer-text-sm",
            placeholder: _0x2bb0c2.t("boards-mind-ui.descriptionPlaceholder"),
            value: _0x23a601,
            onValueChange: _0x5265d8,
          }),
        ],
      }),
      (0, p.jsxs)("div", {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [
          (0, p.jsx)(u.Button, {
            size: "small",
            variant: "default",
            onClick: _0x5b9b2e,
            children: _0x2bb0c2.t("boards-mind-ui.cancel"),
          }),
          (0, p.jsx)(u.Button, {
            size: "small",
            variant: "primary",
            onClick: () => {
              (_0x482c03.executeCommand(t.UpdateMindMapNodeOperation["id"], {
                unitId: _0x17bcdb,
                subUnitId: _0x1a5f5e,
                nodeId: _0x468e50,
                foreignAttributes: {
                  _note: _0x23a601.trim() ? _0x23a601 : null,
                },
              }),
                _0x5b9b2e());
            },
            children: _0x2bb0c2.t("boards-mind-ui.saveDescription"),
          }),
        ],
      }),
    ],
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
    "arrow-down": s.KeyCode["ARROW_DOWN"],
  },
  pe = { delete: [s.KeyCode["BACKSPACE"]] };
function me(_0x51e350) {
  return [fe[_0x51e350], ...(pe[_0x51e350] ?? [])];
}
let W = class extends i.RxDisposable {
  constructor(_0x13b943, _0x22f07b, _0x316977, _0xf1be6c) {
    (super(),
      (this._mindMapClipboardService = _0x13b943),
      (this._commandService = _0x22f07b),
      (this._shortcutService = _0x316977),
      (this._undoRedoGroupService = _0xf1be6c),
      this._init());
  }
  _init() {
    (this.disposeWithMe(
      this._commandService["registerCommand"](
        this._createKeyboardShortcutOperation(),
      ),
    ),
      this._createShortcutItems().forEach((_0x2460b5) => {
        this.disposeWithMe(
          this._shortcutService["registerShortcut"](_0x2460b5),
        );
      }));
  }
  _createKeyboardShortcutOperation() {
    return {
      id: U,
      type: i.CommandType["OPERATION"],
      handler: (_0x11f3b3, _0x2eeb23, _0x15a9c1) => {
        let _0x36fa36 = he(_0x11f3b3, _0x15a9c1);
        return _0x36fa36
          ? this.handleShortcut(
              _0x36fa36,
              _0x2eeb23 == null ? undefined : _0x2eeb23.action,
            )
          : false;
      },
    };
  }
  _createShortcutItems() {
    let _0xfd0b76 = (_0x2c15bd, _0x5306d0) => ({
        id: U,
        binding: _0x2c15bd,
        priority: 160,
        preconditions: (_0x4483c1) => !!_0x4483c1.getContextValue(ue),
        staticParameters: { action: _0x5306d0 },
      }),
      _0xdd0466 = (_0x1a4d39) =>
        me(_0x1a4d39).map((_0x371882) => _0xfd0b76(_0x371882, _0x1a4d39));
    return [
      ..._0xdd0466("copy"),
      {
        id: U,
        binding: fe.paste,
        priority: 160,
        preconditions: (_0x56ea7b) =>
          !!this._mindMapClipboardService["getPayload"]() &&
          !!_0x56ea7b.getContextValue("FOCUSING_MIND_MAP_NODE"),
        staticParameters: { action: "paste" },
      },
      {
        id: U,
        binding: fe["paste-as-new"],
        priority: 150,
        preconditions: (_0x37d9be) =>
          !!this._mindMapClipboardService["getPayload"]() &&
          !!_0x37d9be.getContextValue("FOCUSING_MIND_MAP_BLANK_BOARD"),
        staticParameters: { action: "paste-as-new" },
      },
      ..._0xdd0466("add-child"),
      ..._0xdd0466("add-sibling-or-child"),
      ..._0xdd0466("promote"),
      ..._0xdd0466("toggle-collapse"),
      ..._0xdd0466("collapse-all"),
      ..._0xdd0466("edit-text"),
      ..._0xdd0466("open-description"),
      ..._0xdd0466("delete"),
      ..._0xdd0466("arrow-left"),
      ..._0xdd0466("arrow-right"),
      ..._0xdd0466("arrow-up"),
      ..._0xdd0466("arrow-down"),
    ];
  }
  handleShortcut(_0x9b3dbf, _0x201b28) {
    return _0x9b3dbf.uiStateService["getState"]().interactionMode ===
      "viewing" && _0x201b28 !== "copy"
      ? false
      : _0x201b28 === "copy"
        ? this._copySelectedNode(_0x9b3dbf)
        : _0x201b28 === "paste"
          ? this._pasteUnderSelectedNode(_0x9b3dbf)
          : _0x201b28 === "paste-as-new"
            ? this._pasteAsNewMindMap(_0x9b3dbf)
            : _0x201b28 === "add-child"
              ? this._addChild(_0x9b3dbf)
              : _0x201b28 === "add-sibling-or-child"
                ? this._addSiblingOrChild(_0x9b3dbf)
                : _0x201b28 === "promote"
                  ? this._executeNodeOperation(
                      _0x9b3dbf,
                      t.PromoteMindMapNodeOperation["id"],
                    )
                  : _0x201b28 === "toggle-collapse"
                    ? this._executeNodeOperation(
                        _0x9b3dbf,
                        t.ToggleMindMapNodeCollapseOperation["id"],
                      )
                    : _0x201b28 === "collapse-all"
                      ? this._collapseAll(_0x9b3dbf)
                      : _0x201b28 === "edit-text"
                        ? this._openSelectedTextEditing(_0x9b3dbf)
                        : _0x201b28 === "open-description"
                          ? this._openDescriptionDialog(_0x9b3dbf)
                          : _0x201b28 === "delete"
                            ? this._deleteSelectedNode(_0x9b3dbf)
                            : _0x201b28 && ge(_0x201b28)
                              ? this._navigateByTopology(_0x9b3dbf, _0x201b28)
                              : false;
  }
  _copySelectedNode(_0x1afb87) {
    let _0x52b9bc = this._getSelectedMindMapContext(_0x1afb87);
    return _0x52b9bc
      ? (_0x1afb87.commandService["executeCommand"](
          t.CopyMindMapNodeOperation["id"],
          {
            unitId: _0x52b9bc.unitId,
            subUnitId: _0x52b9bc.subUnitId,
            nodeId: _0x52b9bc.nodeId,
          },
        ),
        true)
      : false;
  }
  _pasteUnderSelectedNode(_0x4dde4d) {
    let _0x1cfc3b = this._getSelectedMindMapContext(_0x4dde4d);
    return !_0x1cfc3b || !_0x4dde4d.clipboardService["getPayload"]()
      ? false
      : (this._executeAndLayout(
          _0x4dde4d,
          t.PasteMindMapNodeOperation["id"],
          {
            unitId: _0x1cfc3b.unitId,
            subUnitId: _0x1cfc3b.subUnitId,
            targetNodeId: _0x1cfc3b.nodeId,
          },
          _0x1cfc3b.scopeId,
        ),
        true);
  }
  _pasteAsNewMindMap(_0x181825) {
    let _0x1107ad = this._getBlankBoardContext(_0x181825);
    if (!_0x1107ad || !_0x181825.clipboardService["getPayload"]()) return false;
    let _0x441a54 = _0x181825.uiStateService["getState"](),
      _0x27c3d7 =
        Number.isFinite(_0x441a54.zoomRatio) && _0x441a54.zoomRatio > 0
          ? _0x441a54.zoomRatio
          : 1,
      _0x578ad9 = Math.round(
        (64 - _0x441a54.viewportPanOffset["x"]) / _0x27c3d7,
      ),
      _0x2ac61d = Math.round(
        (64 - _0x441a54.viewportPanOffset["y"]) / _0x27c3d7,
      );
    return (
      _0x181825.commandService["executeCommand"](
        t.PasteMindMapAsNewMindMapOperation["id"],
        {
          unitId: _0x1107ad.unitId,
          subUnitId: _0x1107ad.subUnitId,
          left: _0x578ad9,
          top: _0x2ac61d,
        },
      ),
      true
    );
  }
  _addChild(_0x4a7dd6) {
    let _0xa3bb75 = this._getSelectedMindMapContext(_0x4a7dd6);
    if (!_0xa3bb75) return false;
    let _0x4a0d66 = (0, i.generateRandomId)(6);
    return (
      this._executeCreateAndEdit(
        _0x4a7dd6,
        t.AddMindMapChildOperation["id"],
        {
          unitId: _0xa3bb75.unitId,
          subUnitId: _0xa3bb75.subUnitId,
          parentNodeId: _0xa3bb75.nodeId,
          nodeId: _0x4a0d66,
          connectorId: (0, i.generateRandomId)(6),
          text: _0x4a7dd6.localeService["t"]("boards-mind-ui.panel.addText"),
        },
        _0xa3bb75.scopeId,
        _0x4a0d66,
      ),
      true
    );
  }
  _addSiblingOrChild(_0x140d46) {
    let _0x1ed784 = this._getSelectedMindMapContext(_0x140d46);
    if (!_0x1ed784) return false;
    let _0x5536a2 = (0, i.generateRandomId)(6);
    return (
      this._executeCreateAndEdit(
        _0x140d46,
        _0x1ed784.isRoot
          ? t.AddMindMapChildOperation["id"]
          : t.AddMindMapSiblingOperation["id"],
        {
          unitId: _0x1ed784.unitId,
          subUnitId: _0x1ed784.subUnitId,
          ...(_0x1ed784.isRoot
            ? { parentNodeId: _0x1ed784.nodeId, nodeId: _0x5536a2 }
            : { nodeId: _0x1ed784.nodeId, siblingNodeId: _0x5536a2 }),
          connectorId: (0, i.generateRandomId)(6),
          text: _0x140d46.localeService["t"]("boards-mind-ui.panel.addText"),
        },
        _0x1ed784.scopeId,
        _0x5536a2,
      ),
      true
    );
  }
  _executeNodeOperation(_0x2913, _0x2bca62) {
    let _0x5ace7d = this._getSelectedMindMapContext(_0x2913);
    return _0x5ace7d
      ? (this._executeAndLayout(
          _0x2913,
          _0x2bca62,
          {
            unitId: _0x5ace7d.unitId,
            subUnitId: _0x5ace7d.subUnitId,
            nodeId: _0x5ace7d.nodeId,
          },
          _0x5ace7d.scopeId,
        ),
        true)
      : false;
  }
  _deleteSelectedNode(_0x8d64d2) {
    let _0x2998ac = this._getSelectedMindMapContext(_0x8d64d2);
    if (!_0x2998ac) return false;
    let _0x55bb68 = _0x8d64d2.commandService["syncExecuteCommand"](
      t.DeleteMindMapNodeOperation["id"],
      {
        unitId: _0x2998ac.unitId,
        subUnitId: _0x2998ac.subUnitId,
        nodeId: _0x2998ac.nodeId,
      },
    );
    return (
      _0x55bb68 && _0x8d64d2.elementStateService["clearSelection"](),
      _0x55bb68
    );
  }
  _collapseAll(_0x860141) {
    let _0x2f415f = this._getSelectedMindMapContext(_0x860141);
    if (!_0x2f415f) return false;
    let _0x3ea52b = _0x860141.elementService["getElementData"](
        _0x2f415f.unitId,
        _0x2f415f.subUnitId,
      ),
      _0x291ec5 = Object.values(_0x3ea52b)
        .map((_0x51b0b6) => {
          let _0x1daa33 = (0, t.getMindMapNodeMeta)(_0x51b0b6.element);
          return (_0x1daa33 == null
            ? undefined
            : _0x1daa33.structureScopeId) === _0x2f415f.scopeId &&
            this._getMindMapChildren(
              _0x3ea52b,
              _0x2f415f.scopeId,
              _0x51b0b6.elementId,
            ).length > 0
            ? { nodeId: _0x51b0b6.elementId, collapsed: _0x1daa33.collapsed }
            : null;
        })
        .filter((_0x23f38c) => !!_0x23f38c);
    if (_0x291ec5.length === 0) return false;
    let _0x22d680 = _0x291ec5.some((_0x50bfb1) => !_0x50bfb1.collapsed),
      _0x5a7a5c = _0x860141.commandService,
      _0x3dc414 = this._undoRedoGroupService["createRunner"](_0x2f415f.unitId),
      _0x58701e = _0x291ec5.map((_0x5e63e9) =>
        _0x3dc414(() =>
          _0x5a7a5c.executeCommand(t.ToggleMindMapNodeCollapseOperation["id"], {
            unitId: _0x2f415f.unitId,
            subUnitId: _0x2f415f.subUnitId,
            nodeId: _0x5e63e9.nodeId,
            collapsed: _0x22d680,
          }),
        ),
      );
    return (
      Promise.all(
        _0x58701e.map((_0x31e687) => Promise.resolve(_0x31e687)),
      ).then((_0xd1dfff) => {
        _0xd1dfff.some(Boolean) &&
          _0x3dc414(() =>
            _0x5a7a5c.executeCommand(t.LayoutMindMapOperation["id"], {
              unitId: _0x2f415f.unitId,
              subUnitId: _0x2f415f.subUnitId,
              scopeId: _0x2f415f.scopeId,
            }),
          );
      }),
      true
    );
  }
  _openSelectedTextEditing(_0x57772c) {
    let _0x3b5cc6 = this._getSelectedMindMapContext(_0x57772c);
    if (!_0x3b5cc6) return false;
    _0x57772c.elementStateService["selectElements"](
      { unitId: _0x3b5cc6.unitId, subUnitId: _0x3b5cc6.subUnitId },
      [_0x3b5cc6.nodeId],
      _0x3b5cc6.nodeId,
    );
    let _0x3f6f32 = _0x57772c.textEditingService;
    return (
      _0x3f6f32.ignoreExternalFocusChanges(),
      _0x3f6f32.setEditing({
        unitId: _0x3b5cc6.unitId,
        subUnitId: _0x3b5cc6.subUnitId,
        shapeId: _0x3b5cc6.nodeId,
        shapeKey: (0, n.getBoardElementRenderObjectKey)(
          _0x3b5cc6.unitId,
          _0x3b5cc6.nodeId,
        ),
        visible: true,
      }),
      true
    );
  }
  _openDescriptionDialog(_0x3f6f84) {
    let _0x1db70e = this._getSelectedMindMapContext(_0x3f6f84);
    return _0x1db70e
      ? (_0x3f6f84.dialogService["open"]({
          id: ce,
          title: { title: "boards-mind-ui.description" },
          width: 420,
          draggable: true,
          mask: false,
          maskClosable: true,
          children: {
            label: se,
            unitId: _0x1db70e.unitId,
            subUnitId: _0x1db70e.subUnitId,
            nodeId: _0x1db70e.nodeId,
            initialDescription: _0x1db70e.description,
          },
        }),
        true)
      : false;
  }
  _navigateByTopology(_0x30f595, _0x56ba28) {
    let _0x3069be = this._getSelectedMindMapContext(_0x30f595);
    if (!_0x3069be) return false;
    let _0x5f14d3 = _0x30f595.elementService["getElementData"](
        _0x3069be.unitId,
        _0x3069be.subUnitId,
      ),
      _0xa22145 = _0x5f14d3[_0x3069be.nodeId],
      _0x21c668 = (0, t.getMindMapNodeMeta)(
        _0xa22145 == null ? undefined : _0xa22145.element,
      );
    if (!_0xa22145 || !_0x21c668) return false;
    let _0x199819 = {
      "arrow-left": "ArrowLeft",
      "arrow-right": "ArrowRight",
      "arrow-up": "ArrowUp",
      "arrow-down": "ArrowDown",
    }[_0x56ba28];
    if (!_0x199819) return false;
    let _0x327064 = this._resolveArrowNavigationTarget(
      _0x5f14d3,
      _0x3069be.nodeId,
      _0x21c668,
      _0x199819,
    );
    return _0x327064
      ? (_0x30f595.elementStateService["selectElements"](
          { unitId: _0x3069be.unitId, subUnitId: _0x3069be.subUnitId },
          [_0x327064],
          _0x327064,
        ),
        true)
      : false;
  }
  _resolveArrowNavigationTarget(_0x5e52b1, _0xf2272d, _0x2fdf62, _0x409827) {
    let _0x393457 = this._getMindMapChildren(
      _0x5e52b1,
      _0x2fdf62.structureScopeId,
      _0xf2272d,
    );
    if (_0x2fdf62.parentNodeId === null) {
      if (_0x409827 === "ArrowLeft") {
        var _0x53999d;
        return (
          ((_0x53999d = _0x393457.find((_0x110740) => {
            var _0x4c0467;
            return (
              ((_0x4c0467 = (0, t.getMindMapNodeMeta)(_0x110740.element)) ==
              null
                ? undefined
                : _0x4c0467.side) === "left"
            );
          })) == null
            ? undefined
            : _0x53999d.elementId) ?? null
        );
      }
      if (_0x409827 === "ArrowRight") {
        var _0x37c73c;
        return (
          ((_0x37c73c = _0x393457.find((_0x536e83) => {
            var _0x4948f8;
            return (
              (((_0x4948f8 = (0, t.getMindMapNodeMeta)(_0x536e83.element)) ==
              null
                ? undefined
                : _0x4948f8.side) ?? "right") === "right"
            );
          })) == null
            ? undefined
            : _0x37c73c.elementId) ?? null
        );
      }
      return null;
    }
    let _0x2cd963 = _0x2fdf62.side ?? "right",
      _0x2937b6 = _0x2cd963 === "right" ? "ArrowLeft" : "ArrowRight",
      _0x677f21 = _0x2cd963 === "right" ? "ArrowRight" : "ArrowLeft";
    if (_0x409827 === _0x2937b6) return _0x2fdf62.parentNodeId;
    if (_0x409827 === _0x677f21) {
      var _0x4ed0b5;
      return (
        ((_0x4ed0b5 = _0x393457[0]) == null
          ? undefined
          : _0x4ed0b5.elementId) ?? null
      );
    }
    if (_0x409827 === "ArrowUp" || _0x409827 === "ArrowDown") {
      let _0x24bf13 = this._getMindMapChildren(
          _0x5e52b1,
          _0x2fdf62.structureScopeId,
          _0x2fdf62.parentNodeId,
        ),
        _0x2e365d = _0x24bf13.findIndex(
          (_0x4ce7b4) => _0x4ce7b4.elementId === _0xf2272d,
        ),
        _0x5624ea =
          _0x409827 === "ArrowUp"
            ? _0x24bf13[_0x2e365d - 1]
            : _0x24bf13[_0x2e365d + 1];
      return (_0x5624ea == null ? undefined : _0x5624ea.elementId) ?? null;
    }
    return null;
  }
  _getMindMapChildren(_0x1b3d71, _0x37adb3, _0x3a3d9a) {
    return Object.values(_0x1b3d71)
      .filter((_0x5c5fd7) => {
        let _0x952ba6 = (0, t.getMindMapNodeMeta)(_0x5c5fd7.element);
        return (
          (_0x952ba6 == null ? undefined : _0x952ba6.structureScopeId) ===
            _0x37adb3 &&
          _0x952ba6.parentNodeId === _0x3a3d9a &&
          _0x5c5fd7.element["visible"] !== false
        );
      })
      .sort((_0x142549, _0x4881cd) => {
        let _0x1130ce = (0, t.getMindMapNodeMeta)(_0x142549.element),
          _0x3d13e0 = (0, t.getMindMapNodeMeta)(_0x4881cd.element);
        return (
          (0, t.compareMindMapOrderKey)(
            _0x1130ce == null ? undefined : _0x1130ce.orderKey,
            _0x3d13e0 == null ? undefined : _0x3d13e0.orderKey,
          ) || _0x142549.elementId["localeCompare"](_0x4881cd.elementId)
        );
      });
  }
  _getSelectedMindMapContext(_0x3c5520) {
    var _0x161cf8;
    let _0x52fa80 = _0x3c5520.elementStateService["getSnapshot"](),
      _0x328097 = _0x52fa80.focusedId ?? _0x52fa80.selectedIds[0];
    if (
      !_0x328097 ||
      _0x52fa80.selectedIds["length"] !== 1 ||
      _0x52fa80.activeEditingId ||
      _0x52fa80.isTransforming
    )
      return null;
    let _0xfbaba2 = _0x52fa80.context ?? {
        unitId: _0x3c5520.renderContext["unitId"],
        subUnitId: _0x3c5520.renderContext["unit"].getActivePageId(),
      },
      _0x50d57c = _0x3c5520.elementService["getElementData"](
        _0xfbaba2.unitId,
        _0xfbaba2.subUnitId,
      )[_0x328097],
      _0xa4fcd5 = (0, t.getMindMapNodeMeta)(
        _0x50d57c == null ? undefined : _0x50d57c.element,
      );
    return !_0x50d57c || !_0xa4fcd5
      ? null
      : {
          unitId: _0xfbaba2.unitId,
          subUnitId: _0xfbaba2.subUnitId,
          nodeId: _0x328097,
          scopeId: _0xa4fcd5.structureScopeId,
          isRoot: _0xa4fcd5.parentNodeId === null,
          description:
            ((_0x161cf8 = _0xa4fcd5.foreignAttributes) == null
              ? undefined
              : _0x161cf8._note) ?? "",
        };
  }
  _getBlankBoardContext(_0x344e51) {
    var _0x533087, _0x2a9a31;
    let _0x38059a = _0x344e51.elementStateService["getSnapshot"]();
    return _0x38059a.activeEditingId ||
      _0x38059a.isTransforming ||
      _0x38059a.selectedIds["length"] > 0 ||
      _0x38059a.focusedId
      ? null
      : {
          unitId:
            ((_0x533087 = _0x38059a.context) == null
              ? undefined
              : _0x533087.unitId) ?? _0x344e51.renderContext["unitId"],
          subUnitId:
            ((_0x2a9a31 = _0x38059a.context) == null
              ? undefined
              : _0x2a9a31.subUnitId) ??
            _0x344e51.renderContext["unit"].getActivePageId(),
        };
  }
  _executeAndLayout(_0x4d6d0d, _0x594c20, _0x4201d2, _0x460570) {
    let _0x5929e8 = _0x4d6d0d.commandService,
      _0x12e249 = this._undoRedoGroupService["createRunner"](_0x4201d2.unitId),
      _0x335047 = _0x12e249(() =>
        _0x5929e8.executeCommand(_0x594c20, _0x4201d2),
      );
    Promise.resolve(_0x335047).then((_0x12052b) => {
      _0x12052b &&
        _0x12e249(() =>
          _0x5929e8.executeCommand(t.LayoutMindMapOperation["id"], {
            unitId: _0x4201d2.unitId,
            subUnitId: _0x4201d2.subUnitId,
            scopeId: _0x460570,
          }),
        );
    });
  }
  _executeCreateAndEdit(_0x358ba6, _0x5e30f0, _0x1073d1, _0x29caea, _0x41d9c8) {
    let _0xf9e68d = {
        unitId: _0x1073d1.unitId,
        subUnitId: _0x1073d1.subUnitId,
      },
      _0x37b4fd = _0x358ba6.commandService,
      _0x854f27 = this._undoRedoGroupService["createRunner"](_0x1073d1.unitId),
      _0x483b0e = _0x854f27(() =>
        _0x37b4fd.executeCommand(_0x5e30f0, _0x1073d1),
      );
    Promise.resolve(_0x483b0e).then((_0xe79d44) => {
      if (!_0xe79d44) return;
      (_0x854f27(() =>
        _0x37b4fd.executeCommand(t.LayoutMindMapOperation["id"], {
          ..._0xf9e68d,
          scopeId: _0x29caea,
        }),
      ),
        _0x358ba6.elementStateService["selectElements"](
          _0xf9e68d,
          [_0x41d9c8],
          _0x41d9c8,
        ));
      let _0x3fa633 = _0x358ba6.textEditingService;
      (_0x3fa633.ignoreExternalFocusChanges(),
        _0x3fa633.setEditing({
          ..._0xf9e68d,
          shapeId: _0x41d9c8,
          shapeKey: (0, n.getBoardElementRenderObjectKey)(
            _0xf9e68d.unitId,
            _0x41d9c8,
          ),
          visible: true,
        }));
    });
  }
};
W = S(
  [
    x(0, t.IMindMapClipboardService),
    x(1, i.ICommandService),
    x(2, s.IShortcutService),
    x(3, (0, i.Inject)(s.UndoRedoGroupService)),
  ],
  W,
);
function he(_0x1e7f47, _0x5c76c5) {
  var _0x15f743, _0x2b2827;
  let _0x10e8f0 =
    typeof (_0x5c76c5 == null ? undefined : _0x5c76c5.unitId) == "string"
      ? _0x5c76c5.unitId
      : (_0x15f743 = _0x1e7f47
            .get(i.IUniverInstanceService)
            .getCurrentUnitOfType(i.UniverInstanceType["UNIVER_BOARD"])) == null
        ? undefined
        : _0x15f743.getUnitId();
  return _0x10e8f0
    ? (((_0x2b2827 = _0x1e7f47
        .get(a.IRenderManagerService)
        .getRenderUnitById(_0x10e8f0)) == null
        ? undefined
        : _0x2b2827.with(H)) ?? null)
    : null;
}
function ge(_0x36ea71) {
  return (
    _0x36ea71 === "arrow-left" ||
    _0x36ea71 === "arrow-right" ||
    _0x36ea71 === "arrow-up" ||
    _0x36ea71 === "arrow-down"
  );
}
const _e = { min: 1, max: 5, defaultValue: 3 },
  ve = { min: 0, max: 100, defaultValue: 100 },
  ye = [
    {
      kind: "dropdown",
      titleKey: "boards-mind-ui.toolbar.primary.line",
      panel: "line",
    },
    { kind: "fontColor", titleKey: "boards-mind-ui.toolbar.primary.fontColor" },
    {
      kind: "typography",
      titleKey: "boards-mind-ui.toolbar.primary.typography",
    },
    {
      kind: "dropdown",
      titleKey: "boards-mind-ui.toolbar.primary.more",
      panel: "more",
      dividerBefore: true,
    },
  ],
  G = {
    addSibling: "add-sibling-or-child",
    addChild: "add-child",
    copy: "copy",
    paste: "paste",
    delete: "delete",
  },
  be = [
    {
      key: "mind-map",
      title: "Mind\x20map",
      items: [
        {
          value: "mindmap-horizontal",
          icon: "mindmap-horizontal",
          labelKey: "boards-mind-ui.panel.structureKind.mindmapHorizontal",
        },
        {
          value: "mindmap-vertical",
          icon: "mindmap-vertical",
          labelKey: "boards-mind-ui.panel.structureKind.mindmapVertical",
        },
      ],
    },
    {
      key: "tree-diagram",
      title: "Tree diagram",
      items: [
        {
          value: "tree-right",
          icon: "tree-right",
          labelKey: "boards-mind-ui.panel.structureKind.treeRight",
        },
        {
          value: "tree-left",
          icon: "tree-left",
          labelKey: "boards-mind-ui.panel.structureKind.treeLeft",
        },
        {
          value: "tree-alternate",
          icon: "tree-alternate",
          labelKey: "boards-mind-ui.panel.structureKind.treeAlternate",
        },
      ],
    },
    {
      key: "timeline",
      title: "Timeline",
      items: [
        {
          value: "timeline-horizontal",
          icon: "timeline-horizontal",
          labelKey: "boards-mind-ui.panel.structureKind.timelineHorizontal",
        },
        {
          value: "timeline-vertical",
          icon: "timeline-vertical",
          labelKey: "boards-mind-ui.panel.structureKind.timelineVertical",
        },
      ],
    },
  ],
  xe = {
    key: "branch",
    title: "Branch",
    items: [
      {
        value: "curve",
        icon: "branch-curve",
        labelKey: "boards-mind-ui.panel.branchLineType.curve",
      },
      {
        value: "rounded-orthogonal",
        icon: "branch-rounded-orthogonal",
        labelKey: "boards-mind-ui.panel.branchLineType.roundedOrthogonal",
      },
      {
        value: "orthogonal",
        icon: "branch-orthogonal",
        labelKey: "boards-mind-ui.panel.branchLineType.orthogonal",
      },
    ],
  },
  Se = "board.mind-map.floating-toolbar";
function Ce(_0x2b6e8c, _0x23e530) {
  _0x2b6e8c.executeCommand(U, { action: _0x23e530 });
}
const we = { line: d.ShapeLineIcon, more: d.MoreHorizontalIcon };
function K(_0x2b5cb6) {
  (_0x2b5cb6.stopPropagation(), _0x2b5cb6.preventDefault());
}
function Te(_0x3bfd96, _0x4d7129 = "univer-size-5", _0x2dcfa3) {
  return (0, p.jsx)(c.ShapeFloatingToolbarIcon, {
    children: (0, p.jsx)(_0x3bfd96, {
      className: _0x4d7129,
      extend: _0x2dcfa3,
    }),
  });
}
function Ee(_0x5f312f) {
  var _0x6580e0, _0x435347;
  let _0x4d0013 = (_0x5f312f == null ? undefined : _0x5f312f.shapeText) ?? {},
    _0x5cd837 =
      _0x4d0013.dataModel && typeof _0x4d0013.dataModel == "object"
        ? _0x4d0013.dataModel
        : {},
    _0x1582bf =
      (_0x6580e0 = _0x5cd837.doc) == null ||
      (_0x6580e0 = _0x6580e0.documentStyle) == null
        ? undefined
        : _0x6580e0.textStyle;
  return {
    color:
      typeof _0x4d0013.color == "string"
        ? _0x4d0013.color
        : ((_0x1582bf == null || (_0x435347 = _0x1582bf.cl) == null
            ? undefined
            : _0x435347.rgb) ?? c.SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_COLOR),
    fontFamily:
      typeof _0x4d0013.fontFamily == "string"
        ? _0x4d0013.fontFamily
        : ((_0x1582bf == null ? undefined : _0x1582bf.ff) ??
          i.DEFAULT_STYLES["ff"]),
    fontSize:
      typeof _0x4d0013.fontSize == "number"
        ? _0x4d0013.fontSize
        : typeof (_0x1582bf == null ? undefined : _0x1582bf.fs) == "number"
          ? _0x1582bf.fs
          : i.DEFAULT_STYLES["fs"],
    horizontalAlign:
      _0x4d0013.horizontalAlign ?? _0x5cd837.ha ?? i.HorizontalAlign["LEFT"],
    textFill:
      _0x4d0013.textFill && typeof _0x4d0013.textFill == "object"
        ? _0x4d0013.textFill
        : _0x1582bf == null
          ? undefined
          : _0x1582bf.textFill,
    verticalAlign:
      _0x4d0013.verticalAlign ?? _0x5cd837.va ?? i.VerticalAlign["MIDDLE"],
  };
}
function De(_0x3d1e78, _0x45451f) {
  if (!_0x45451f) return;
  let _0x4936ee = me(_0x45451f);
  if (!_0x4936ee.length) return;
  let _0x4b055c = _0x4936ee
    .map(
      (_0x2601f3) =>
        _0x3d1e78.getShortcutDisplay({
          id: "board.operation.mind-map.keyboard-shortcut",
          binding: _0x2601f3,
          staticParameters: { action: _0x45451f },
        }) ?? undefined,
    )
    .filter((_0x3d3ab2) => !!_0x3d3ab2);
  return _0x4b055c.length ? [...new Set(_0x4b055c)].join("/") : undefined;
}
async function Oe(_0x486009, _0x2c6787, _0x17582b) {
  return (await Promise.resolve(
    _0x2c6787(() =>
      _0x486009.executeCommand(t.ChangeMindMapLayoutOperation["id"], _0x17582b),
    ),
  ))
    ? (await Promise.resolve(
        _0x2c6787(() =>
          _0x486009.executeCommand(t.LayoutMindMapOperation["id"], {
            unitId: _0x17582b.unitId,
            subUnitId: _0x17582b.subUnitId,
            scopeId: _0x17582b.scopeId,
          }),
        ),
      ),
      true)
    : false;
}
async function ke(_0xe3278f, _0x9d4c1e, _0x3f669e) {
  return (await Promise.resolve(
    _0x9d4c1e(() =>
      _0xe3278f.executeCommand(
        t.ChangeMindMapBranchLineTypeOperation["id"],
        _0x3f669e,
      ),
    ),
  ))
    ? (await Promise.resolve(
        _0x9d4c1e(() =>
          _0xe3278f.executeCommand(t.LayoutMindMapOperation["id"], {
            unitId: _0x3f669e.unitId,
            subUnitId: _0x3f669e.subUnitId,
            scopeId: _0x3f669e.scopeId,
          }),
        ),
      ),
      true)
    : false;
}
function Ae({ className: _0x441051 = "univer-size-5" }) {
  return (0, p.jsx)(c.ShapeFloatingToolbarIcon, {
    children: (0, p.jsxs)("svg", {
      className: _0x441051,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, p.jsx)("path", {
          d: "M4.5 7.5h4.2c1.9 0 3.3 1.5 3.3 3.3v2.4c0 1.8 1.4 3.3 3.3 3.3h4.2",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
        }),
        (0, p.jsx)("path", {
          d: "M19.5 7.5h-4.2c-1.9 0-3.3 1.5-3.3 3.3",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
        }),
        (0, p.jsx)("path", {
          d: "M4.5 16.5h4.2c1.9 0 3.3-1.5 3.3-3.3",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
        }),
      ],
    }),
  });
}
function je({ icon: _0x2f7282 }) {
  let _0x3f175a = "#d8dce3",
    _0x2d9cbf = {
      stroke: "currentColor",
      strokeWidth: 2.6,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    _0x48b14b = { stroke: _0x3f175a, strokeWidth: 3.2, strokeLinecap: "round" };
  return (0, p.jsxs)("svg", {
    className: "univer-h-9\x20univer-w-12",
    viewBox: "0 0 80 56",
    fill: "none",
    "aria-hidden": "true",
    children: [
      _0x2f7282 === "mindmap-horizontal" &&
        (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)("path", {
              d: "M31\x2013c9\x208\x209\x2022\x2018\x2030M49\x2013c-9\x208-9\x2022-18\x2030M31\x2013c-7\x204-9\x209-9\x2015s2\x2011\x209\x2015M49\x2013c7\x204\x209\x209\x209\x2015s-2\x2011-9\x2015",
              ..._0x2d9cbf,
            }),
            (0, p.jsx)("path", {
              d: "M12 15h9M12 28h9M12 41h9M59 15h9M59 28h9M59 41h9",
              ..._0x48b14b,
            }),
          ],
        }),
      _0x2f7282 === "mindmap-vertical" &&
        (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)("path", {
              d: "M21 28h38M40 11v34M28 16c7 4 10 8 12 12 2-4 5-8 12-12M28 40c7-4 10-8 12-12 2 4 5 8 12 12",
              ..._0x2d9cbf,
            }),
            (0, p.jsx)("path", {
              d: "M22 8h36M22 48h36M14 18v20M66 18v20",
              stroke: _0x3f175a,
              strokeWidth: 2.6,
              strokeLinecap: "round",
              strokeDasharray: "6 7",
            }),
          ],
        }),
      _0x2f7282 === "tree-right" &&
        (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)("path", {
              d: "M24 12v32M24 19c0 4 3 6 7 6h7M24 29c0 4 3 6 7 6h7M24 39c0 4 3 6 7 6h7",
              ..._0x2d9cbf,
            }),
            (0, p.jsx)("path", {
              d: "M47 25h13M47 35h13M47 45h13",
              ..._0x48b14b,
            }),
            (0, p.jsx)("circle", {
              cx: "24",
              cy: "12",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x2f7282 === "tree-left" &&
        (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)("path", {
              d: "M56 12v32M56 19c0 4-3 6-7 6h-7M56 29c0 4-3 6-7 6h-7M56 39c0 4-3 6-7 6h-7",
              ..._0x2d9cbf,
            }),
            (0, p.jsx)("path", {
              d: "M20 25h13M20 35h13M20 45h13",
              ..._0x48b14b,
            }),
            (0, p.jsx)("circle", {
              cx: "56",
              cy: "12",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x2f7282 === "tree-alternate" &&
        (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)("path", {
              d: "M42 12v32M42 20c0 4-3 6-7 6h-7M42 30c0 4 3 6 7 6h7M42 39c0 4-3 6-7 6h-7",
              ..._0x2d9cbf,
            }),
            (0, p.jsx)("path", {
              d: "M12 26h11M58 36h11M12 45h11",
              ..._0x48b14b,
            }),
            (0, p.jsx)("circle", {
              cx: "42",
              cy: "12",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x2f7282 === "timeline-horizontal" &&
        (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)("path", {
              d: "M15 31h50M35 31V18c0-4 3-7 8-7h9M35 31v13c0 4 3 7 8 7h9",
              ..._0x2d9cbf,
            }),
            (0, p.jsx)("path", { d: "M56 11h11M56 51h11", ..._0x48b14b }),
            (0, p.jsx)("circle", {
              cx: "17",
              cy: "31",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x2f7282 === "timeline-vertical" &&
        (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)("path", {
              d: "M40 9v40M40 20c8 0 11 4 11 11v8M40 35c-8 0-11 4-11 11v4",
              ..._0x2d9cbf,
            }),
            (0, p.jsx)("path", { d: "M56\x2039h11M13\x2050h11", ..._0x48b14b }),
            (0, p.jsx)("circle", {
              cx: "40",
              cy: "9",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x2f7282 === "branch-curve" &&
        (0, p.jsx)(p.Fragment, {
          children: (0, p.jsx)("path", {
            d: "M16 28c16 0 25-13 43-13M16 28c16 0 25 13 43 13",
            ..._0x2d9cbf,
          }),
        }),
      _0x2f7282 === "branch-rounded-orthogonal" &&
        (0, p.jsx)(p.Fragment, {
          children: (0, p.jsx)("path", {
            d: "M16 29h18c7 0 10-5 10-12v-3M34 29h10c7 0 10 5 10 12v3",
            ..._0x2d9cbf,
          }),
        }),
      _0x2f7282 === "branch-orthogonal" &&
        (0, p.jsx)(p.Fragment, {
          children: (0, p.jsx)("path", {
            d: "M17 33h21M38 17v30M38 17h24",
            ..._0x2d9cbf,
          }),
        }),
    ],
  });
}
function Me(_0x4baea7, _0x2ad510) {
  let _0xaa8785 = _0x4baea7.textStyle,
    _0x4eccc9 = (0, e.documentTextStyleToBoardShapeTextStyle)(_0xaa8785),
    _0xcd854b = {
      ...(_0x4eccc9.color === undefined ? null : { color: _0x4eccc9.color }),
      ...(_0x4eccc9.fontFamily === undefined
        ? null
        : { fontFamily: _0x4eccc9.fontFamily }),
      ...(_0x4eccc9.fontSize === undefined
        ? null
        : { fontSize: _0x4eccc9.fontSize }),
      ...(_0x4eccc9.bold === undefined ? null : { bold: _0x4eccc9.bold }),
      ...(_0x4eccc9.italic === undefined ? null : { italic: _0x4eccc9.italic }),
      ...(_0x4eccc9.underline === undefined
        ? null
        : { underline: _0x4eccc9.underline }),
      ...(_0x4eccc9.strikethrough === undefined
        ? null
        : { strikethrough: _0x4eccc9.strikethrough }),
      ...(_0x4eccc9.textFill === undefined
        ? null
        : { textFill: _0x4eccc9.textFill }),
    };
  (_0x4baea7.horizontalAlign !== undefined &&
    (_0xcd854b.horizontalAlign = _0x4baea7.horizontalAlign),
    _0x4baea7.verticalAlign !== undefined &&
      (_0xcd854b.verticalAlign = _0x4baea7.verticalAlign),
    Object.keys(_0xcd854b).length > 0 && _0x2ad510({ textStyle: _0xcd854b }));
}
function Ne(_0x59300d, _0x3a1a42, _0x4de275) {
  let _0x173b89 = _0x59300d ?? {},
    _0x45ec4a = (0, c.buildShapeTextDataUpdate)(_0x173b89, _0x3a1a42),
    _0x1ab653 = _0x45ec4a.shapeText ?? _0x173b89.shapeText ?? {};
  return {
    ..._0x173b89,
    ..._0x45ec4a,
    shapeText: {
      ..._0x1ab653,
      ...(_0x4de275.color === undefined ? null : { color: _0x4de275.color }),
      ...(_0x4de275.fontSize === undefined
        ? null
        : { fontSize: _0x4de275.fontSize }),
      ...(_0x4de275.bold === undefined ? null : { bold: _0x4de275.bold }),
      ...(_0x4de275.italic === undefined ? null : { italic: _0x4de275.italic }),
      ...(_0x4de275.underline === undefined
        ? null
        : { underline: _0x4de275.underline }),
      ...(_0x4de275.strikethrough === undefined
        ? null
        : { strikethrough: _0x4de275.strikethrough }),
      ...(_0x4de275.horizontalAlign === undefined
        ? null
        : { horizontalAlign: _0x4de275.horizontalAlign }),
      ...(_0x4de275.verticalAlign === undefined
        ? null
        : { verticalAlign: _0x4de275.verticalAlign }),
      ...(_0x4de275.textFill === undefined
        ? null
        : { textFill: _0x4de275.textFill }),
    },
  };
}
function Pe(_0x23de63, _0x54d760) {
  let _0x321718 = _0x23de63 == null ? undefined : _0x23de63.stroke;
  _0x321718 &&
    _0x54d760({
      lineType:
        _0x321718.dashType === l.ShapeLineDashEnum["RoundDot"] ||
        _0x321718.dashType === l.ShapeLineDashEnum["SquareDot"]
          ? "dot"
          : _0x321718.dashType === l.ShapeLineDashEnum["Dash"]
            ? "dash"
            : "solid",
      ...(typeof _0x321718.width == "number"
        ? { strokeWidth: _0x321718.width }
        : null),
      ...(typeof _0x321718.color == "string"
        ? { stroke: _0x321718.color }
        : null),
      ...(typeof _0x321718.opacity == "number"
        ? { opacity: _0x321718.opacity }
        : null),
    });
}
function Fe(_0x499fdf) {
  return _0x499fdf != null && _0x499fdf.length
    ? _0x499fdf[0] <= 2
      ? l.ShapeLineDashEnum["RoundDot"]
      : l.ShapeLineDashEnum["Dash"]
    : l.ShapeLineDashEnum["Solid"];
}
function Ie(_0x38da73) {
  return {
    stroke: {
      lineStrokeType: l.ShapeLineTypeEnum["SolidLine"],
      dashType: Fe(_0x38da73 == null ? undefined : _0x38da73.dash),
      color:
        (_0x38da73 == null ? undefined : _0x38da73.stroke) ??
        c.SHAPE_FLOATING_TOOLBAR_DEFAULT_STROKE_COLOR,
      width:
        (_0x38da73 == null ? undefined : _0x38da73.strokeWidth) ??
        _e.defaultValue,
      opacity:
        (_0x38da73 == null ? undefined : _0x38da73.opacity) ??
        ve.defaultValue / 100,
    },
  };
}
function Le(_0xa58806) {
  var _0x181dd7, _0x5ce510, _0x126c26;
  let _0x166be2 = (0, s.useDependency)(i.ICommandService),
    _0x2c1e8f = (0, s.useDependency)(s.IShortcutService),
    _0x4742e6 = (0, s.useDependency)(i.LocaleService),
    _0x5b906f = (0, s.useDependency)(s.UndoRedoGroupService),
    [_0x3f0e82, _0x3cf9cd] = (0, f.useState)(null),
    [_0x4e5edb, _0x2cbdd5] = (0, f.useState)(
      (_0x181dd7 = _0xa58806.popup["extraProps"]) == null
        ? undefined
        : _0x181dd7.shapeData,
    ),
    _0x1969e4 = _0xa58806.popup["extraProps"];
  if (!_0x1969e4) return null;
  let _0x258828 = { unitId: _0x1969e4.unitId, subUnitId: _0x1969e4.subUnitId },
    _0x15ef64 = (_0x16dd80) => {
      _0x166be2.executeCommand(t.UpdateMindMapNodeOperation["id"], {
        ..._0x258828,
        nodeId: _0x1969e4.elementId,
        ..._0x16dd80,
      });
    },
    _0x503e3f = (_0x3455c0, _0x2aecb7) => {
      let _0x24a4f9 = _0x2aecb7 ?? {};
      (_0x2cbdd5((_0x37b739) => ({ ...(_0x37b739 ?? {}), ..._0x24a4f9 })),
        _0x15ef64({
          ...(_0x24a4f9.fill === undefined ? null : { fill: _0x24a4f9.fill }),
          ...(_0x24a4f9.stroke === undefined
            ? null
            : { stroke: _0x24a4f9.stroke }),
        }));
    },
    _0x1bbf27 = (_0x5b75d4) => {
      _0x166be2.executeCommand(
        t.UpdateMindMapIncomingConnectorOperation["id"],
        { ..._0x258828, nodeId: _0x1969e4.elementId, style: _0x5b75d4 },
      );
    },
    _0x494bf9 = Ie(_0x1969e4.incomingConnectorStyle),
    _0x2866e4 = (_0x1433d6) => De(_0x2c1e8f, _0x1433d6),
    _0x39157a = (_0x3db07d) => {
      Ce(_0x166be2, _0x3db07d);
    },
    _0x30abb1 = (_0x4e5edb == null ? undefined : _0x4e5edb.shapeText) ?? {},
    _0x119dcd = Ee(_0x4e5edb),
    _0x2b7ed6 = (_0xd6d7c) => {
      Me(_0xd6d7c, (_0x5dae74) => {
        (_0x2cbdd5((_0x93f580) => Ne(_0x93f580, _0xd6d7c, _0x5dae74.textStyle)),
          _0x15ef64(_0x5dae74));
      });
    },
    _0x44c218 = [
      {
        label: _0x4742e6.t("boards-mind-ui.alignLeft"),
        value: i.HorizontalAlign["LEFT"],
        icon: (0, p.jsx)(d.LeftJustifyingIcon, {}),
      },
      {
        label: _0x4742e6.t("boards-mind-ui.alignCenter"),
        value: i.HorizontalAlign["CENTER"],
        icon: (0, p.jsx)(d.HorizontallyIcon, {}),
      },
      {
        label: _0x4742e6.t("boards-mind-ui.alignRight"),
        value: i.HorizontalAlign["RIGHT"],
        icon: (0, p.jsx)(d.RightJustifyingIcon, {}),
      },
      {
        label: _0x4742e6.t("boards-mind-ui.alignJustify"),
        value: i.HorizontalAlign["JUSTIFIED"],
        icon: (0, p.jsx)(d.AlignTextBothIcon, {}),
      },
    ],
    _0x1a286a = [
      {
        label: _0x4742e6.t("boards-mind-ui.alignTop"),
        value: i.VerticalAlign["TOP"],
        icon: (0, p.jsx)(d.AlignTopIcon, {}),
      },
      {
        label: _0x4742e6.t("boards-mind-ui.alignMiddle"),
        value: i.VerticalAlign["MIDDLE"],
        icon: (0, p.jsx)(d.VerticalCenterIcon, {}),
      },
      {
        label: _0x4742e6.t("boards-mind-ui.alignBottom"),
        value: i.VerticalAlign["BOTTOM"],
        icon: (0, p.jsx)(d.AlignBottomIcon, {}),
      },
    ],
    _0xe77f20 = () => {
      _0x39157a("add-sibling-or-child");
    },
    _0x211436 = () => {
      _0x39157a("add-child");
    },
    _0xe5f2c7 = () => {
      _0x39157a("copy");
    },
    _0x1c0032 = () => {
      _0x39157a("paste");
    },
    _0x589d80 = () => {
      _0x39157a("delete");
    },
    _0x537e39 =
      ((_0x5ce510 = _0x1969e4.layout) == null
        ? undefined
        : _0x5ce510.structureKind) ??
      t.MIND_MAP_DEFAULT_LAYOUT["structureKind"],
    _0x39a9cb = (0, t.resolveMindMapBranchLineTypeForStructure)(
      _0x537e39,
      ((_0x126c26 = _0x1969e4.layout) == null
        ? undefined
        : _0x126c26.branchLineType) ??
        t.MIND_MAP_DEFAULT_LAYOUT["branchLineType"],
    ),
    _0x3680db = (_0x397bb2) => {
      let _0x297ac1 = (0, t.resolveMindMapBranchLineTypeForStructure)(
        _0x397bb2,
        _0x39a9cb,
      );
      (Oe(_0x166be2, _0x5b906f.createRunner(_0x1969e4.unitId), {
        ..._0x258828,
        scopeId: _0x1969e4.scopeId,
        structureKind: _0x397bb2,
        ...(_0x297ac1 === _0x39a9cb ? null : { branchLineType: _0x297ac1 }),
      }),
        _0x3cf9cd(null));
    },
    _0x5a377a = (_0xe17837) => {
      (ke(_0x166be2, _0x5b906f.createRunner(_0x1969e4.unitId), {
        ..._0x258828,
        scopeId: _0x1969e4.scopeId,
        branchLineType: _0xe17837,
      }),
        _0x3cf9cd(null));
    },
    _0x5d7b16 = (_0x5e29cc, _0x35e679, _0x41923d, _0x2e4fe9 = false) =>
      (0, p.jsx)(
        "button",
        {
          type: "button",
          "aria-label": _0x4742e6.t(_0x5e29cc.labelKey),
          disabled: _0x2e4fe9,
          className: (0, u.clsx)(
            "univer-flex\x20univer-h-12\x20univer-min-w-0\x20univer-items-center\x20univer-justify-center\x20univer-rounded-lg\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-text-gray-900\x20univer-outline-none\x20univer-transition-colors\x20hover:univer-bg-gray-0",
            _0x35e679 &&
              "univer-bg-[#e8eefc] univer-text-[#2f6fed] hover:univer-bg-[#e8eefc]",
            _0x2e4fe9 &&
              "univer-cursor-not-allowed\x20univer-text-gray-300\x20hover:univer-bg-transparent",
          ),
          onMouseDown: K,
          onPointerDown: K,
          onClick: (_0x3844a3) => {
            (_0x3844a3.stopPropagation(), !_0x2e4fe9 && _0x41923d());
          },
          children: (0, p.jsx)(je, { icon: _0x5e29cc.icon }),
        },
        _0x5e29cc.value,
      ),
    _0x4b756f = () =>
      (0, p.jsxs)("div", {
        className:
          "univer-w-[202px]\x20univer-rounded-xl\x20univer-border\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-px-4\x20univer-py-4\x20univer-shadow-lg",
        onMouseDown: (_0x480aec) => _0x480aec.stopPropagation(),
        onPointerDown: (_0xb6b35) => _0xb6b35.stopPropagation(),
        children: [
          be.map((_0x5621a8) =>
            (0, p.jsxs)(
              "div",
              {
                className: "univer-mb-4",
                children: [
                  (0, p.jsx)("div", {
                    className:
                      "univer-mb-2 univer-text-lg univer-text-gray-900",
                    children: _0x5621a8.title,
                  }),
                  (0, p.jsx)("div", {
                    className:
                      "univer-grid\x20univer-h-14\x20univer-overflow-hidden\x20univer-rounded-xl\x20univer-bg-gray-100\x20univer-p-1",
                    style: {
                      gridTemplateColumns:
                        "repeat(" +
                        _0x5621a8.items["length"] +
                        ", minmax(0, 1fr))",
                    },
                    children: _0x5621a8.items["map"]((_0x316491) =>
                      _0x5d7b16(_0x316491, _0x316491.value === _0x537e39, () =>
                        _0x3680db(_0x316491.value),
                      ),
                    ),
                  }),
                ],
              },
              _0x5621a8.key,
            ),
          ),
          (0, p.jsx)(u.Separator, {}),
          (0, p.jsxs)("div", {
            className: "univer-mb-0",
            children: [
              (0, p.jsx)("div", {
                className:
                  "univer-mb-2\x20univer-text-lg\x20univer-text-gray-900",
                children: xe.title,
              }),
              (0, p.jsx)("div", {
                className:
                  "univer-grid univer-h-14 univer-overflow-hidden univer-rounded-xl univer-bg-gray-100 univer-p-1",
                style: {
                  gridTemplateColumns:
                    "repeat(" + xe.items["length"] + ", minmax(0, 1fr))",
                },
                children: xe.items["map"]((_0x192664) =>
                  _0x5d7b16(
                    _0x192664,
                    _0x192664.value === _0x39a9cb,
                    () => _0x5a377a(_0x192664.value),
                    _0x192664.value === "curve" &&
                      !(0, t.isMindMapPlainStructureKind)(_0x537e39),
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    _0xbe9a9d = (_0x33a621) => {
      switch (_0x33a621) {
        case "line":
          return (0, p.jsx)(c.ShapeStrokePanelContent, {
            title: _0x4742e6.t("boards-mind-ui.toolbar.panel.line"),
            shapeData: _0x494bf9,
            modeOptions: ["solid", "dash", "dot"],
            showDashDropdown: false,
            widthRange: { min: _e.min, max: _e.max, step: 1 },
            onUpdateShapeData: (_0x3a1736, _0x1f4a03) => {
              Pe(_0x1f4a03, _0x1bbf27);
            },
          });
        case "more":
          return (0, p.jsx)(c.ShapeFloatingToolbarMenuPanel, {
            title: _0x4742e6.t("boards-mind-ui.toolbar.panel.more"),
            minWidthClassName: "univer-min-w-[240px]",
            children: (0, p.jsxs)("div", {
              className: "univer-flex univer-flex-col univer-gap-1",
              children: [
                (0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                  label: _0x4742e6.t(
                    "boards-mind-ui.toolbar.action.addSibling",
                  ),
                  shortcut: _0x2866e4(G.addSibling),
                  onClick: _0xe77f20,
                }),
                (0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                  label: _0x4742e6.t("boards-mind-ui.toolbar.action.addChild"),
                  shortcut: _0x2866e4(G.addChild),
                  onClick: _0x211436,
                }),
                (0, p.jsx)(u.Separator, {}),
                (0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                  label: _0x4742e6.t("boards-mind-ui.toolbar.action.copy"),
                  shortcut: _0x2866e4(G.copy),
                  onClick: _0xe5f2c7,
                }),
                (0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                  label: _0x4742e6.t("boards-mind-ui.toolbar.action.paste"),
                  shortcut: _0x2866e4(G.paste),
                  onClick: _0x1c0032,
                }),
                (0, p.jsx)(c.ShapeFloatingToolbarMenuItem, {
                  label: _0x4742e6.t("boards-mind-ui.toolbar.action.delete"),
                  shortcut: _0x2866e4(G.delete),
                  onClick: _0x589d80,
                }),
              ],
            }),
          });
        default:
          return null;
      }
    },
    _0x233d08 = ye.flatMap((_0x31900d) => {
      let _0xaaf9c8 = [];
      if (
        (_0x31900d.dividerBefore &&
          _0xaaf9c8.push(
            (0, p.jsx)(
              u.Separator,
              { orientation: "vertical" },
              "divider-" + _0x31900d.kind,
            ),
          ),
        _0x31900d.kind === "typography")
      )
        return (
          _0xaaf9c8.push(
            (0, p.jsx)(
              c.TypographyPanelButton,
              {
                title: _0x4742e6.t("boards-mind-ui.toolbar.panel.typography"),
                fontFamily: _0x119dcd.fontFamily,
                textStyle: {
                  isBold: _0x30abb1.bold === true,
                  isItalic: _0x30abb1.italic === true,
                  isUnderline: _0x30abb1.underline === true,
                  isStrike: _0x30abb1.strikethrough === true,
                },
                horizontalAlign: _0x119dcd.horizontalAlign,
                verticalAlign: _0x119dcd.verticalAlign,
                horizontalAlignOptions: _0x44c218,
                verticalAlignOptions: _0x1a286a,
                onUpdateText: _0x2b7ed6,
              },
              _0x31900d.kind,
            ),
          ),
          _0xaaf9c8
        );
      if (_0x31900d.kind === "fontColor") {
        let _0x41f43e = {
          fs: _0x119dcd.fontSize,
          cl: { rgb: _0x119dcd.color },
          ...(_0x119dcd.textFill === undefined
            ? null
            : { textFill: _0x119dcd.textFill }),
        };
        return (
          _0xaaf9c8.push(
            (0, p.jsx)(
              c.TextFillButton,
              {
                title: _0x4742e6.t("boards-mind-ui.toolbar.action.fontColor"),
                textStyle: _0x41f43e,
                fallbackColor: _0x119dcd.color,
                onChange: (_0x266a3c) => _0x2b7ed6({ textStyle: _0x266a3c }),
              },
              _0x31900d.kind,
            ),
          ),
          _0xaaf9c8.push(
            (0, p.jsx)(
              c.ShapeFloatingToolbarFontSizeSelect,
              {
                value: String(_0x119dcd.fontSize),
                onChange: (_0x2732dc) => {
                  _0x2b7ed6({ textStyle: { fs: _0x2732dc } });
                },
              },
              "mind-map-font-size",
            ),
          ),
          _0xaaf9c8
        );
      }
      return (
        _0xaaf9c8.push(
          (0, p.jsx)(
            u.Dropdown,
            {
              open: _0x3f0e82 === _0x31900d.panel,
              overlay: _0xbe9a9d(_0x31900d.panel),
              onOpenChange: (_0x38676e) =>
                _0x3cf9cd(_0x38676e ? _0x31900d.panel : null),
              children: (0, p.jsx)("span", {
                children: (0, p.jsx)(c.ShapeFloatingToolbarDropdownTrigger, {
                  title: _0x4742e6.t(_0x31900d.titleKey),
                  active: _0x3f0e82 === _0x31900d.panel,
                  icon: Te(we[_0x31900d.panel]),
                  sizeClassName:
                    "univer-h-7 univer-min-w-9 univer-w-auto univer-gap-1 univer-px-1.5",
                  onMouseDown: K,
                  onPointerDown: K,
                }),
              }),
            },
            _0x31900d.panel,
          ),
        ),
        _0xaaf9c8
      );
    });
  return (0, p.jsxs)(c.ShapeFloatingToolbarContent, {
    maxWidthClassName: "univer-max-w-[min(760px,calc(100vw-32px))]",
    onMouseDown: (_0xdc40eb) => _0xdc40eb.stopPropagation(),
    children: [
      [
        ...(_0x1969e4.isRootNode
          ? [
              (0, p.jsx)(
                u.Dropdown,
                {
                  open: _0x3f0e82 === "layout",
                  overlay: _0x4b756f(),
                  onOpenChange: (_0x36f601) =>
                    _0x3cf9cd(_0x36f601 ? "layout" : null),
                  children: (0, p.jsx)("span", {
                    children: (0, p.jsx)(
                      c.ShapeFloatingToolbarDropdownTrigger,
                      {
                        title: _0x4742e6.t(
                          "boards-mind-ui.toolbar.action.layout",
                        ),
                        active: _0x3f0e82 === "layout",
                        icon: (0, p.jsx)(Ae, {}),
                        sizeClassName:
                          "univer-h-7 univer-min-w-9 univer-w-auto univer-gap-1 univer-px-1.5",
                        onMouseDown: K,
                        onPointerDown: K,
                      },
                    ),
                  }),
                },
                "mind-map-layout-dropdown",
              ),
              (0, p.jsx)(
                u.Separator,
                { orientation: "vertical" },
                "layout-panel-divider",
              ),
            ]
          : []),
        (0, p.jsx)(
          c.ShapeFillButton,
          {
            title: _0x4742e6.t("boards-mind-ui.toolbar.action.fill"),
            shapeData: _0x4e5edb ?? {},
            onUpdateShapeData: _0x503e3f,
          },
          "mind-map-fill",
        ),
        (0, p.jsx)(
          c.ShapeStrokePanelButton,
          {
            title: _0x4742e6.t("boards-mind-ui.toolbar.action.stroke"),
            shapeData: _0x4e5edb ?? {},
            onUpdateShapeData: _0x503e3f,
          },
          "mind-map-stroke",
        ),
        (0, p.jsx)(u.Separator, { orientation: "vertical" }, "style-divider"),
      ],
      _0x233d08,
    ],
  });
}
function Re(_0x447a0c) {
  let {
    left: _0x358261,
    top: _0x32f59c,
    width: _0x589824,
    height: _0x3aeb0a,
  } = _0x447a0c;
  return {
    left: _0x358261,
    right: _0x358261 + _0x589824,
    top: _0x32f59c - 56,
    bottom: _0x32f59c + _0x3aeb0a,
  };
}
let ze = class extends i.RxDisposable {
  constructor(_0x21d7a7, _0x5e371, _0x1e6f5d, _0x3203ad, _0xf67565, _0x32ecbf) {
    (super(),
      (this._renderContext = _0x21d7a7),
      (this._boardCanvasPopManagerService = _0x5e371),
      (this._boardElementService = _0x1e6f5d),
      (this._elementStateService = _0x3203ad),
      (this._boardTextEditingService = _0xf67565),
      (this._interactionSurfaceService = _0x32ecbf),
      b(this, "_popupDisposable", null),
      b(this, "_popupSelectionKey", null),
      this._init());
  }
  dispose() {
    (this._clearPopup(), super.dispose());
  }
  _init() {
    let _0x16e2c8 = this._renderContext["scene"].getTransformerByCreate();
    (this.disposeWithMe(
      (0, i.toDisposable)(
        _0x16e2c8.createControl$["pipe"](
          (0, o.takeUntil)(this.dispose$),
        ).subscribe(() => this._showPopupForSelection()),
      ),
    ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          _0x16e2c8.clearControl$["pipe"](
            (0, o.takeUntil)(this.dispose$),
          ).subscribe(() => this._clearPopupIfSelectionChanged()),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          _0x16e2c8.changeStart$["pipe"](
            (0, o.takeUntil)(this.dispose$),
          ).subscribe(() => this._clearPopup()),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          _0x16e2c8.changeEnd$["pipe"](
            (0, o.takeUntil)(this.dispose$),
          ).subscribe(() => setTimeout(() => this._showPopupForSelection(), 0)),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._elementStateService["state$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe(() =>
              setTimeout(() => this._showPopupForSelection(), 0),
            ),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._interactionSurfaceService["interactionSurfaceActive$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe((_0x12cd79) => {
              if (_0x12cd79) {
                this._clearPopup();
                return;
              }
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._boardTextEditingService["editingParams$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe((_0x57ecb4) => {
              if (
                (_0x57ecb4 == null ? undefined : _0x57ecb4.unitId) ===
                this._renderContext["unitId"]
              ) {
                if (_0x57ecb4.visible) {
                  this._clearPopup();
                  return;
                }
                setTimeout(() => this._showPopupForSelection(), 0);
              }
            }),
        ),
      ));
  }
  _clearPopup() {
    var _0x2a4680;
    ((_0x2a4680 = this._popupDisposable) == null || _0x2a4680.dispose(),
      (this._popupDisposable = null),
      (this._popupSelectionKey = null));
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let _0x11f23b = this._elementStateService["getSnapshot"]();
    return (
      !!_0x11f23b.context &&
      _0x11f23b.selectedIds["length"] > 0 &&
      this._popupSelectionKey ===
        this._buildPopupSelectionKey(
          _0x11f23b.context["unitId"],
          _0x11f23b.context["subUnitId"],
          _0x11f23b.selectedIds,
        )
    );
  }
  _buildPopupSelectionKey(_0x16aa2e, _0x1a6d72, _0x28cb79) {
    return _0x16aa2e + ":" + _0x1a6d72 + ":" + _0x28cb79.join(",");
  }
  _resolveIncomingConnectorStyle(_0x43da8c, _0x4d003f, _0x3c40d5, _0x20f0ba) {
    let _0x52621b = this._boardElementService["getElementData"](
        _0x43da8c,
        _0x4d003f,
      ),
      _0xb482f3 = Object.values(_0x52621b).find((_0x465c18) => {
        let _0x41d139 = (0, t.getMindMapConnectorMeta)(_0x465c18.element);
        return (
          (_0x41d139 == null ? undefined : _0x41d139.structureScopeId) ===
            _0x3c40d5 && _0x41d139.childNodeId === _0x20f0ba
        );
      });
    if (!(!_0xb482f3 || !("connectorData" in _0xb482f3.element)))
      return _0xb482f3.element["connectorData"].style;
  }
  _showPopupForSelection() {
    var _0x19622f, _0x598d3c, _0x52267c;
    if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
      this._clearPopup();
      return;
    }
    let _0x2c3a60 = this._boardTextEditingService["getEditing"]();
    if (
      (_0x2c3a60 == null ? undefined : _0x2c3a60.visible) === true &&
      _0x2c3a60.unitId === this._renderContext["unitId"]
    ) {
      this._clearPopup();
      return;
    }
    let _0x15cfcc = this._elementStateService["getSnapshot"]();
    if (_0x15cfcc.isTransforming) {
      this._clearPopup();
      return;
    }
    if (
      (0, n.resolveBoardFloatingToolbarSelection)({
        context: _0x15cfcc.context,
        selectedIds: _0x15cfcc.selectedIds,
        getElementById: (_0x8cd867, _0x257bb4, _0x184447) =>
          this._boardElementService["getElementById"](
            _0x8cd867,
            _0x257bb4,
            _0x184447,
          ),
      }).owner !== "mind-map"
    ) {
      this._clearPopup();
      return;
    }
    let _0x32b530 = this._renderContext["scene"]
        .getTransformerByCreate()
        .getSelectedObjectMap(),
      _0x330550 = Array.from(_0x32b530.values())
        .map((_0x42c02a) => this._resolveSelectedEntry(_0x42c02a))
        .filter((_0x3317d3) => !!_0x3317d3)
        .filter(
          (_0x463634) =>
            !!(0, t.getMindMapNodeMeta)(_0x463634.elementData["element"]),
        ),
      _0x93d591 =
        _0x330550.find(
          (_0x5813f3) =>
            _0x5813f3.elementData["elementId"] === _0x15cfcc.focusedId,
        ) ??
        _0x330550[0] ??
        this._resolveSelectedMindMapEntryFromState();
    if (!_0x93d591) {
      this._clearPopup();
      return;
    }
    let _0x4da1db = (0, t.getMindMapNodeMeta)(_0x93d591.elementData["element"]);
    if (!_0x4da1db) {
      this._clearPopup();
      return;
    }
    let _0x11ca38 =
        (_0x19622f = this._boardElementService["getElementData"](
          _0x93d591.elementData["unitId"],
          _0x93d591.elementData["subUnitId"],
        )[_0x4da1db.structureScopeId]) == null
          ? undefined
          : _0x19622f.element,
      _0x3d121d = (0, t.getMindMapContainerMeta)(_0x11ca38),
      _0x3d1bce =
        _0x11ca38 == null ||
        (_0x598d3c = _0x11ca38.custom) == null ||
        (_0x598d3c = _0x598d3c.mindmap) == null ||
        (_0x598d3c = _0x598d3c.layout) == null
          ? undefined
          : _0x598d3c.structureKind,
      _0x40d66f =
        ((_0x3d121d == null ? undefined : _0x3d121d.layout["structureKind"]) ??
          _0x3d1bce) === "mindmap-vertical" &&
        (_0x4da1db.parentNodeId === null || _0x4da1db.side === "top"),
      _0x47574d =
        _0x4da1db.parentNodeId !== null &&
        _0x4da1db.side !== "top" &&
        _0x4da1db.side !== "bottom",
      _0x1051d7 = _0x40d66f || _0x47574d,
      _0x52a7b0 =
        ((_0x52267c = _0x15cfcc.context) == null
          ? undefined
          : _0x52267c.unitId) === _0x93d591.elementData["unitId"] &&
        _0x15cfcc.context["subUnitId"] === _0x93d591.elementData["subUnitId"] &&
        _0x15cfcc.selectedIds["length"]
          ? _0x15cfcc.selectedIds
          : [_0x93d591.elementData["elementId"]],
      _0x54eace = this._buildPopupSelectionKey(
        _0x93d591.elementData["unitId"],
        _0x93d591.elementData["subUnitId"],
        _0x52a7b0,
      );
    (this._popupDisposable && this._popupSelectionKey === _0x54eace) ||
      (this._clearPopup(),
      (this._popupDisposable = this.disposeWithMe(
        this._boardCanvasPopManagerService["attachPopupToObject"](
          _0x93d591.elementData["unitId"],
          _0x93d591.elementData["subUnitId"],
          _0x93d591.object,
          {
            componentKey: Se,
            direction: "top-center",
            offset: [0, 8],
            ...(_0x1051d7 ? { anchorBoundResolver: Re } : null),
            extraProps: {
              unitId: _0x93d591.elementData["unitId"],
              subUnitId: _0x93d591.elementData["subUnitId"],
              elementId: _0x93d591.elementData["elementId"],
              scopeId: _0x4da1db.structureScopeId,
              isRootNode: _0x4da1db.parentNodeId === null,
              left: _0x93d591.elementData["element"].transform["left"] ?? 0,
              top: _0x93d591.elementData["element"].transform["top"] ?? 0,
              shapeData:
                _0x93d591.elementData["element"].type ===
                e.BoardElementType["Shape"]
                  ? _0x93d591.elementData["element"].shapeData
                  : undefined,
              layout: _0x3d121d == null ? undefined : _0x3d121d.layout,
              incomingConnectorStyle: this._resolveIncomingConnectorStyle(
                _0x93d591.elementData["unitId"],
                _0x93d591.elementData["subUnitId"],
                _0x4da1db.structureScopeId,
                _0x93d591.elementData["elementId"],
              ),
            },
          },
        ),
      )),
      (this._popupSelectionKey = _0x54eace));
  }
  _resolveSelectedMindMapEntryFromState() {
    var _0x30226f;
    let _0x2e7460 = this._elementStateService["getSnapshot"](),
      _0x396212 = _0x2e7460.context,
      _0x2f7ae9 = _0x2e7460.focusedId ?? _0x2e7460.selectedIds[0];
    if (!_0x396212 || !_0x2f7ae9) return null;
    let _0x3b94a2 = this._boardElementService["getElementById"](
      _0x396212.unitId,
      _0x396212.subUnitId,
      _0x2f7ae9,
    );
    if (!_0x3b94a2 || !(0, t.getMindMapNodeMeta)(_0x3b94a2.element))
      return null;
    let _0x3a82df = (0, n.getBoardElementRenderObjectKey)(
        _0x396212.unitId,
        _0x2f7ae9,
      ),
      _0x22adb1 = this._renderContext["scene"],
      _0x3de94e =
        ((_0x30226f = _0x22adb1.getObjectIncludeInGroup) == null
          ? undefined
          : _0x30226f.call(_0x22adb1, _0x3a82df)) ??
        this._renderContext["scene"].getObject(_0x3a82df);
    return _0x3de94e ? { object: _0x3de94e, elementData: _0x3b94a2 } : null;
  }
  _resolveSelectedEntry(_0x157ef1) {
    var _0x718931;
    if (!_0x157ef1) return null;
    let _0x1e3850 = (0, n.parseBoardElementRenderObjectKey)(_0x157ef1.oKey);
    if (!_0x1e3850) return null;
    let _0x5b50cc = this._elementStateService["getSnapshot"](),
      _0x3a884c =
        ((_0x718931 = _0x5b50cc.context) == null
          ? undefined
          : _0x718931.unitId) === _0x1e3850.unitId
          ? _0x5b50cc.context["subUnitId"]
          : undefined;
    if (!_0x3a884c) return null;
    let _0x306025 = this._boardElementService["getElementById"](
      _0x1e3850.unitId,
      _0x3a884c,
      _0x1e3850.elementId,
    );
    return _0x306025 ? { object: _0x157ef1, elementData: _0x306025 } : null;
  }
};
ze = S(
  [
    x(1, (0, i.Inject)(n.BoardCanvasPopManagerService)),
    x(2, (0, i.Inject)(e.IBoardElementService)),
    x(3, (0, i.Inject)(n.IBoardElementStateService)),
    x(4, (0, i.Inject)(n.BoardTextEditingService)),
    x(5, (0, i.Inject)(n.BoardInteractionSurfaceService)),
  ],
  ze,
);
const Be = "board-mind-map-pending-insert-object",
  Ve = n.BOARD_RENDER_LAYER_INDEX["preview"];
function He(_0x59fa9d, _0x7fc4b6) {
  return (_0x59fa9d ?? []).reduce(
    (_0x24aafb, _0x277a7f) => (
      _0x24aafb[_0x277a7f.side ?? _0x7fc4b6].push(_0x277a7f),
      _0x24aafb
    ),
    { left: [], right: [], top: [], bottom: [] },
  );
}
function Ue(_0x44d5e2) {
  return (
    _0x44d5e2 === "tree-left" ||
    _0x44d5e2 === "tree-right" ||
    _0x44d5e2 === "tree-alternate"
  );
}
function We(_0x2f7451) {
  return (
    _0x2f7451 === "timeline-horizontal" || _0x2f7451 === "timeline-vertical"
  );
}
function Ge(_0x41424a, _0xe068ba, _0x2c39e2) {
  return _0x2c39e2 === "tree-left"
    ? "left"
    : _0x2c39e2 === "tree-right"
      ? "right"
      : _0x41424a.side === "left" || _0x41424a.side === "right"
        ? _0x41424a.side
        : _0xe068ba % 2 == 0
          ? "left"
          : "right";
}
function Ke(_0xf0bb1b, _0x326fc5) {
  return (
    (_0x326fc5 == null ? undefined : _0x326fc5.root["children"]) ??
    _0xf0bb1b ??
    []
  );
}
var qe = class extends a.BaseObject {
  constructor(_0x399152 = Be, _0x505457) {
    (super(_0x399152),
      b(this, "_state", { point: null, children: [] }),
      (this.evented = false),
      (this.zIndex = n.BOARD_RENDER_OBJECT_Z_INDEX["transientPreview"]),
      this.updateState(_0x505457));
  }
  updateState(_0x2769a9) {
    ((this._state = { ...this._state, ..._0x2769a9 }),
      this._state["point"] ? this.show() : this.hide(),
      this.makeDirty(true));
  }
  isHit(_0x342240) {
    return false;
  }
  render(_0x3dfc58, _0x493d42) {
    let _0x3fe127 = this._state["point"];
    if (!_0x3fe127 || !this.visible) return (this.makeDirty(false), this);
    let _0x15c7d2 =
        Number.isFinite(this._state["zoomRatio"]) &&
        (this._state["zoomRatio"] ?? 0) > 0
          ? this._state["zoomRatio"]
          : 1,
      _0x2947cb = t.MIND_MAP_DEFAULT_NODE_SIZE["rootWidth"],
      _0x566ea2 = t.MIND_MAP_DEFAULT_NODE_SIZE["rootHeight"],
      _0x2c9201 = t.MIND_MAP_DEFAULT_NODE_SIZE["nodeWidth"],
      _0x360714 = t.MIND_MAP_DEFAULT_NODE_SIZE["nodeHeight"],
      _0xc54904 = t.MIND_MAP_DEFAULT_LAYOUT["horizontalGap"],
      _0x6bcdfc = t.MIND_MAP_DEFAULT_LAYOUT["siblingGap"],
      _0x5ce332 = this._state["structureKind"] === "mindmap-vertical",
      _0x41c614 = He(this._state["children"], _0x5ce332 ? "bottom" : "right"),
      _0x5498e7 = _0x3fe127.x - _0x2947cb / 2,
      _0x2e6cfc = _0x3fe127.y - _0x566ea2 / 2;
    if (
      (_0x3dfc58.save(),
      (_0x3dfc58.globalAlpha = E.objectAlpha),
      (_0x3dfc58.lineWidth = E.lineWidthScreen / _0x15c7d2),
      (_0x3dfc58.strokeStyle = E.primaryColor),
      We(this._state["structureKind"]))
    ) {
      let _0x2b2313 = Ke(this._state["children"], this._state["blueprint"]),
        _0x125081 = this._state["structureKind"] === "timeline-horizontal";
      if (_0x2b2313.length > 0) {
        if ((_0x3dfc58.beginPath(), _0x125081)) {
          let _0x40bd74 = _0x2c9201,
            _0x392174 = _0x360714,
            _0x2a2d12 = t.MIND_MAP_DEFAULT_LAYOUT["timelineAxisGap"],
            _0x37013c = _0x3fe127.y,
            _0x3217dc = _0x5498e7 + _0x2947cb,
            _0x1aaa62 = _0x3fe127.y - _0x392174 / 2,
            _0x1c9ddc = _0x5498e7 + _0x2947cb + _0x2a2d12;
          (_0x3dfc58.moveTo(_0x3217dc, _0x37013c),
            _0x3dfc58.lineTo(_0x1c9ddc, _0x37013c),
            _0x2b2313.forEach((_0x2ff522, _0x38c018) => {
              let _0x4eede1 = _0x1c9ddc + _0x38c018 * (_0x40bd74 + _0x2a2d12);
              if (_0x38c018 > 0) {
                let _0x28df40 =
                  _0x1c9ddc +
                  (_0x38c018 - 1) * (_0x40bd74 + _0x2a2d12) +
                  _0x40bd74;
                (_0x3dfc58.moveTo(_0x28df40, _0x37013c),
                  _0x3dfc58.lineTo(_0x4eede1, _0x37013c));
              }
              (_0x3dfc58.moveTo(_0x4eede1, _0x37013c),
                _0x3dfc58.lineTo(_0x4eede1 + _0x40bd74, _0x37013c));
            }),
            _0x3dfc58.stroke(),
            _0x2b2313.forEach((_0x419bd5, _0x4cf424) => {
              (D(
                _0x3dfc58,
                _0x1c9ddc + _0x4cf424 * (_0x40bd74 + _0x2a2d12),
                _0x1aaa62,
                _0x40bd74,
                _0x392174,
                E.ghostRadius,
              ),
                (_0x3dfc58.fillStyle = E.ghostFillColor),
                _0x3dfc58.fill(),
                _0x3dfc58.stroke());
            }),
            _0x2b2313.forEach((_0x387924, _0x39ccaa) => {
              if (
                !("children" in _0x387924) ||
                _0x387924.children["length"] === 0
              )
                return;
              let _0x47173d = _0x1c9ddc + _0x39ccaa * (_0x40bd74 + _0x2a2d12),
                _0x872069 = _0x47173d + _0x40bd74 / 2,
                _0x42db65 = _0x387924.side === "bottom" ? "bottom" : "top",
                _0x5aee2d = _0x387924.children["slice"](0, 2),
                _0x8abb36 =
                  _0x5aee2d.length * _0x392174 +
                  Math.max(0, _0x5aee2d.length - 1) * _0x6bcdfc,
                _0x164f92 =
                  _0x47173d +
                  _0x40bd74 +
                  t.MIND_MAP_DEFAULT_LAYOUT["branchGap"],
                _0x5ecc9c =
                  _0x42db65 === "top"
                    ? _0x1aaa62 - _0xc54904 - _0x8abb36
                    : _0x1aaa62 + _0x392174 + _0xc54904,
                _0x32d923 = _0x5ecc9c + _0x8abb36 / 2;
              (_0x3dfc58.beginPath(),
                _0x3dfc58.moveTo(
                  _0x872069,
                  _0x42db65 === "top" ? _0x1aaa62 : _0x1aaa62 + _0x392174,
                ),
                _0x3dfc58.lineTo(_0x872069, _0x32d923),
                _0x3dfc58.lineTo(_0x164f92, _0x32d923),
                _0x5aee2d.forEach((_0x4588f9, _0x5c059b) => {
                  let _0x18cf07 =
                    _0x5ecc9c +
                    _0x5c059b * (_0x392174 + _0x6bcdfc) +
                    _0x392174 / 2;
                  (_0x3dfc58.moveTo(_0x164f92, _0x18cf07),
                    _0x3dfc58.lineTo(_0x164f92 + _0x40bd74, _0x18cf07));
                }),
                _0x3dfc58.stroke(),
                _0x5aee2d.forEach((_0x2bc49c, _0x4276ac) => {
                  let _0x17f269 =
                    _0x5ecc9c + _0x4276ac * (_0x392174 + _0x6bcdfc);
                  (D(
                    _0x3dfc58,
                    _0x164f92,
                    _0x17f269,
                    _0x40bd74,
                    _0x392174,
                    E.ghostRadius,
                  ),
                    (_0x3dfc58.fillStyle = E.ghostFillColor),
                    _0x3dfc58.fill(),
                    _0x3dfc58.stroke());
                }));
            }));
        } else {
          let _0x2cbfba = _0x3fe127.x,
            _0x2de1aa = _0x2e6cfc + _0x566ea2,
            _0x2dd0ae = t.MIND_MAP_DEFAULT_LAYOUT["timelineAxisGap"],
            _0x1dadc6 = _0x2e6cfc + _0x566ea2 + _0x2dd0ae,
            _0x2c9ca4 =
              _0x1dadc6 +
              (_0x2b2313.length - 1) * (_0x360714 + _0x2dd0ae) +
              _0x360714 / 2;
          (_0x3dfc58.moveTo(_0x2cbfba, _0x2de1aa),
            _0x3dfc58.lineTo(_0x2cbfba, _0x2c9ca4),
            _0x2b2313.forEach((_0x232202, _0x41afac) => {
              let _0x556a64 =
                  _0x1dadc6 +
                  _0x41afac * (_0x360714 + _0x2dd0ae) +
                  _0x360714 / 2,
                _0x7dffe = _0x232202.side === "right" ? "right" : "left",
                _0x4b0193 =
                  _0x7dffe === "right"
                    ? _0x2cbfba + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"]
                    : _0x2cbfba -
                      t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] -
                      _0x2c9201,
                _0x567d8b =
                  _0x7dffe === "right" ? _0x4b0193 : _0x4b0193 + _0x2c9201;
              (_0x3dfc58.moveTo(_0x2cbfba, _0x556a64),
                _0x3dfc58.lineTo(_0x567d8b, _0x556a64));
            }),
            _0x3dfc58.stroke(),
            _0x2b2313.forEach((_0x1c581e, _0x5c6479) => {
              let _0x189e59 = _0x1dadc6 + _0x5c6479 * (_0x360714 + _0x2dd0ae);
              (D(
                _0x3dfc58,
                (_0x1c581e.side === "right" ? "right" : "left") == "right"
                  ? _0x2cbfba + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"]
                  : _0x2cbfba -
                      t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] -
                      _0x2c9201,
                _0x189e59,
                _0x2c9201,
                _0x360714,
                E.ghostRadius,
              ),
                (_0x3dfc58.fillStyle = E.ghostFillColor),
                _0x3dfc58.fill(),
                _0x3dfc58.stroke());
            }),
            _0x2b2313.forEach((_0xb77b1f, _0x3e69d8) => {
              if (
                !("children" in _0xb77b1f) ||
                _0xb77b1f.children["length"] === 0
              )
                return;
              let _0x2fb7dd =
                  _0x1dadc6 +
                  _0x3e69d8 * (_0x360714 + _0x2dd0ae) +
                  _0x360714 / 2,
                _0x5eac8d = _0xb77b1f.side === "right" ? "right" : "left",
                _0x4ebdff = _0xb77b1f.children["slice"](0, 2),
                _0x4d114f =
                  _0x4ebdff.length * _0x360714 +
                  Math.max(0, _0x4ebdff.length - 1) * _0x6bcdfc,
                _0x4bd605 =
                  _0x5eac8d === "right"
                    ? _0x2cbfba + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"]
                    : _0x2cbfba -
                      t.MIND_MAP_DEFAULT_LAYOUT["branchGap"] -
                      _0x2c9201,
                _0x5588cf =
                  _0x5eac8d === "right"
                    ? _0x4bd605 + _0x2c9201 + _0xc54904
                    : _0x4bd605 - _0xc54904 - _0x2c9201,
                _0x594895 = _0x2fb7dd - _0x4d114f / 2,
                _0x34cd53 =
                  _0x5eac8d === "right" ? _0x4bd605 + _0x2c9201 : _0x4bd605,
                _0x1ddd5a =
                  _0x5eac8d === "right" ? _0x5588cf : _0x5588cf + _0x2c9201;
              (_0x3dfc58.beginPath(),
                _0x3dfc58.moveTo(_0x34cd53, _0x2fb7dd),
                _0x3dfc58.lineTo(_0x1ddd5a, _0x2fb7dd),
                _0x4ebdff.forEach((_0xf56aee, _0x231fc2) => {
                  let _0x3fbc21 =
                    _0x594895 +
                    _0x231fc2 * (_0x360714 + _0x6bcdfc) +
                    _0x360714 / 2;
                  (_0x3dfc58.moveTo(_0x1ddd5a, _0x3fbc21),
                    _0x3dfc58.lineTo(
                      _0x5eac8d === "right" ? _0x5588cf + _0x2c9201 : _0x5588cf,
                      _0x3fbc21,
                    ));
                }),
                _0x3dfc58.stroke(),
                _0x4ebdff.forEach((_0x4f3eec, _0x141b56) => {
                  let _0x296a89 =
                    _0x594895 + _0x141b56 * (_0x360714 + _0x6bcdfc);
                  (D(
                    _0x3dfc58,
                    _0x5588cf,
                    _0x296a89,
                    _0x2c9201,
                    _0x360714,
                    E.ghostRadius,
                  ),
                    (_0x3dfc58.fillStyle = E.ghostFillColor),
                    _0x3dfc58.fill(),
                    _0x3dfc58.stroke());
                }));
            }));
        }
      }
    } else {
      if (Ue(this._state["structureKind"])) {
        let _0x56288b = this._state["children"] ?? [],
          _0x42e901 = _0x2e6cfc + _0x566ea2,
          _0x3ce782 = _0x42e901 + _0xc54904,
          _0x22e32c = _0x3fe127.x;
        if (_0x56288b.length > 0) {
          let _0x297b55 =
            _0x3ce782 +
            (_0x56288b.length - 1) * (_0x360714 + _0x6bcdfc) +
            _0x360714 / 2;
          (_0x3dfc58.beginPath(),
            _0x3dfc58.moveTo(_0x22e32c, _0x42e901),
            _0x3dfc58.lineTo(_0x22e32c, _0x297b55),
            _0x56288b.forEach((_0x535a56, _0x442bf1) => {
              let _0x3dfa93 = Ge(
                  _0x535a56,
                  _0x442bf1,
                  this._state["structureKind"],
                ),
                _0x3ea310 = _0x3ce782 + _0x442bf1 * (_0x360714 + _0x6bcdfc),
                _0x52201e =
                  _0x3dfa93 === "right"
                    ? _0x22e32c + _0xc54904
                    : _0x22e32c - _0xc54904 - _0x2c9201,
                _0x43edd5 = _0x3ea310 + _0x360714 / 2;
              (_0x3dfc58.moveTo(_0x22e32c, _0x43edd5),
                _0x3dfc58.lineTo(
                  _0x3dfa93 === "right" ? _0x52201e : _0x52201e + _0x2c9201,
                  _0x43edd5,
                ));
            }),
            _0x3dfc58.stroke(),
            _0x56288b.forEach((_0x672c0, _0x454829) => {
              let _0x334f02 = Ge(
                  _0x672c0,
                  _0x454829,
                  this._state["structureKind"],
                ),
                _0x25d6c6 = _0x3ce782 + _0x454829 * (_0x360714 + _0x6bcdfc);
              (D(
                _0x3dfc58,
                _0x334f02 === "right"
                  ? _0x22e32c + _0xc54904
                  : _0x22e32c - _0xc54904 - _0x2c9201,
                _0x25d6c6,
                _0x2c9201,
                _0x360714,
                E.ghostRadius,
              ),
                (_0x3dfc58.fillStyle = E.ghostFillColor),
                _0x3dfc58.fill(),
                _0x3dfc58.stroke());
            }));
        }
      } else
        _0x5ce332 &&
          ["top", "bottom"].forEach((_0x3bc240) => {
            let _0x31f238 = _0x41c614[_0x3bc240];
            if (_0x31f238.length === 0) return;
            let _0x183cb0 =
                _0x31f238.length * _0x2c9201 +
                Math.max(0, _0x31f238.length - 1) * _0x6bcdfc,
              _0x55a719 = _0x3fe127.x - _0x183cb0 / 2,
              _0x40bed9 =
                _0x3bc240 === "bottom" ? _0x2e6cfc + _0x566ea2 : _0x2e6cfc,
              _0x5ed9f7 =
                _0x3bc240 === "bottom"
                  ? _0x40bed9 + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"]
                  : _0x40bed9 - t.MIND_MAP_DEFAULT_LAYOUT["branchGap"],
              _0x13425c =
                _0x3bc240 === "bottom"
                  ? _0x2e6cfc + _0x566ea2 + _0xc54904
                  : _0x2e6cfc - _0xc54904 - _0x360714;
            (_0x3dfc58.beginPath(),
              _0x3dfc58.moveTo(_0x3fe127.x, _0x40bed9),
              _0x3dfc58.lineTo(_0x3fe127.x, _0x5ed9f7),
              _0x31f238.length > 1 &&
                (_0x3dfc58.moveTo(_0x55a719 + _0x2c9201 / 2, _0x5ed9f7),
                _0x3dfc58.lineTo(
                  _0x55a719 + _0x183cb0 - _0x2c9201 / 2,
                  _0x5ed9f7,
                )),
              _0x31f238.forEach((_0x55bb14, _0x381a32) => {
                let _0x2a488b =
                  _0x55a719 +
                  _0x381a32 * (_0x2c9201 + _0x6bcdfc) +
                  _0x2c9201 / 2;
                (_0x3dfc58.moveTo(_0x2a488b, _0x5ed9f7),
                  _0x3dfc58.lineTo(
                    _0x2a488b,
                    _0x3bc240 === "bottom" ? _0x13425c : _0x13425c + _0x360714,
                  ));
              }),
              _0x3dfc58.stroke(),
              _0x31f238.forEach((_0x19051b, _0xcc5c60) => {
                (D(
                  _0x3dfc58,
                  _0x55a719 + _0xcc5c60 * (_0x2c9201 + _0x6bcdfc),
                  _0x13425c,
                  _0x2c9201,
                  _0x360714,
                  E.ghostRadius,
                ),
                  (_0x3dfc58.fillStyle = E.ghostFillColor),
                  _0x3dfc58.fill(),
                  _0x3dfc58.stroke());
              }));
          });
    }
    ((_0x5ce332 ||
    Ue(this._state["structureKind"]) ||
    We(this._state["structureKind"])
      ? []
      : ["left", "right"]
    ).forEach((_0x5f01cc) => {
      let _0x3239b6 = _0x41c614[_0x5f01cc];
      if (_0x3239b6.length === 0) return;
      let _0x46a307 =
          _0x3239b6.length * _0x360714 +
          Math.max(0, _0x3239b6.length - 1) * _0x6bcdfc,
        _0x51a81b = _0x3fe127.y - _0x46a307 / 2,
        _0x559cd9 = _0x5f01cc === "right" ? _0x5498e7 + _0x2947cb : _0x5498e7,
        _0x14ee0f =
          _0x5f01cc === "right"
            ? _0x559cd9 + t.MIND_MAP_DEFAULT_LAYOUT["branchGap"]
            : _0x559cd9 - t.MIND_MAP_DEFAULT_LAYOUT["branchGap"],
        _0x8be1c0 =
          _0x5f01cc === "right"
            ? _0x5498e7 + _0x2947cb + _0xc54904
            : _0x5498e7 - _0xc54904 - _0x2c9201;
      (_0x3dfc58.beginPath(),
        _0x3dfc58.moveTo(_0x559cd9, _0x3fe127.y),
        _0x3dfc58.lineTo(_0x14ee0f, _0x3fe127.y),
        _0x3239b6.length > 1 &&
          (_0x3dfc58.moveTo(_0x14ee0f, _0x51a81b + _0x360714 / 2),
          _0x3dfc58.lineTo(_0x14ee0f, _0x51a81b + _0x46a307 - _0x360714 / 2)),
        _0x3239b6.forEach((_0x519517, _0x40499d) => {
          let _0x1c0575 =
            _0x51a81b + _0x40499d * (_0x360714 + _0x6bcdfc) + _0x360714 / 2;
          (_0x3dfc58.moveTo(_0x14ee0f, _0x1c0575),
            _0x3dfc58.lineTo(
              _0x5f01cc === "right" ? _0x8be1c0 : _0x8be1c0 + _0x2c9201,
              _0x1c0575,
            ));
        }),
        _0x3dfc58.stroke(),
        _0x3239b6.forEach((_0x2f9482, _0x6b18fb) => {
          let _0x53ab0c = _0x51a81b + _0x6b18fb * (_0x360714 + _0x6bcdfc);
          (D(
            _0x3dfc58,
            _0x8be1c0,
            _0x53ab0c,
            _0x2c9201,
            _0x360714,
            E.ghostRadius,
          ),
            (_0x3dfc58.fillStyle = E.ghostFillColor),
            _0x3dfc58.fill(),
            _0x3dfc58.stroke());
        }));
    }),
      D(_0x3dfc58, _0x5498e7, _0x2e6cfc, _0x2947cb, _0x566ea2, E.rootRadius),
      (_0x3dfc58.fillStyle = E.primaryColor),
      _0x3dfc58.fill(),
      _0x3dfc58.stroke(),
      (_0x3dfc58.fillStyle = E.rootTextColor),
      (_0x3dfc58.font = O(E.rootFontWeight, E.rootFontSize, _0x15c7d2)),
      (_0x3dfc58.textAlign = "center"),
      (_0x3dfc58.textBaseline = "middle"));
    let _0x27573d = E.textPaddingScreen / _0x15c7d2;
    return (
      _0x3dfc58.fillText(
        t.MIND_MAP_DEFAULT_NODE_TEXT,
        _0x3fe127.x,
        _0x3fe127.y,
        Math.max(1, _0x2947cb - _0x27573d * 2),
      ),
      _0x3dfc58.restore(),
      this.makeDirty(false),
      this
    );
  }
};
const Je = {
  children: [
    {
      text: t.MIND_MAP_DEFAULT_NODE_TEXT,
      orderKey: (0, t.getMindMapDefaultChildOrderKey)(0),
      side: "right",
    },
    {
      text: t.MIND_MAP_DEFAULT_NODE_TEXT,
      orderKey: (0, t.getMindMapDefaultChildOrderKey)(1),
      side: "right",
    },
    {
      text: t.MIND_MAP_DEFAULT_NODE_TEXT,
      orderKey: (0, t.getMindMapDefaultChildOrderKey)(2),
      side: "right",
    },
  ],
};
var q = class extends i.Disposable {
  constructor(..._0x150142) {
    (super(..._0x150142), b(this, "_template", Je));
  }
  setTemplate(_0x289e36) {
    var _0x2a42c4;
    let _0x125b6a =
      (_0x289e36 == null ? undefined : _0x289e36.children) ??
      (_0x289e36 == null || (_0x2a42c4 = _0x289e36.blueprint) == null
        ? undefined
        : _0x2a42c4.root["children"]);
    this._template = {
      rootText: _0x289e36 == null ? undefined : _0x289e36.rootText,
      structureKind: _0x289e36 == null ? undefined : _0x289e36.structureKind,
      branchLineType: _0x289e36 == null ? undefined : _0x289e36.branchLineType,
      children: this._normalizeChildren(
        _0x125b6a,
        _0x289e36 == null ? undefined : _0x289e36.structureKind,
      ),
      blueprint:
        _0x289e36 != null && _0x289e36.blueprint
          ? this._cloneBlueprint(_0x289e36.blueprint)
          : undefined,
    };
  }
  getTemplate() {
    var _0xb10494;
    return {
      rootText: this._template["rootText"],
      structureKind: this._template["structureKind"],
      branchLineType: this._template["branchLineType"],
      children:
        (_0xb10494 = this._template["children"]) == null
          ? undefined
          : _0xb10494.map((_0x19fd11) => ({ ..._0x19fd11 })),
      blueprint: this._template["blueprint"]
        ? this._cloneBlueprint(this._template["blueprint"])
        : undefined,
    };
  }
  _cloneBlueprint(_0x3e5924) {
    return {
      title: _0x3e5924.title,
      root: this._cloneBlueprintNode(_0x3e5924.root),
    };
  }
  _cloneBlueprintNode(_0x5e8ae4) {
    return {
      ..._0x5e8ae4,
      foreignAttributes: _0x5e8ae4.foreignAttributes
        ? { ..._0x5e8ae4.foreignAttributes }
        : undefined,
      children: _0x5e8ae4.children["map"]((_0x43a656) =>
        this._cloneBlueprintNode(_0x43a656),
      ),
    };
  }
  _normalizeChildren(_0x4cbaff, _0x47741a) {
    let _0x18db90 = !_0x4cbaff,
      _0x12a4c7 = _0x4cbaff ?? Je.children;
    return _0x12a4c7 == null
      ? undefined
      : _0x12a4c7.map((_0x3b7464, _0x270315) => ({
          ..._0x3b7464,
          text: _0x3b7464.text ?? t.MIND_MAP_DEFAULT_NODE_TEXT,
          side: this._resolveChildSide(
            _0x3b7464.side,
            _0x270315,
            _0x47741a,
            _0x18db90,
          ),
        }));
  }
  _resolveChildSide(_0x3e95c2, _0x1fa8e4, _0x4ec112, _0x1c50c7) {
    return _0x4ec112 === "mindmap-vertical"
      ? _0x1c50c7
        ? "bottom"
        : (_0x3e95c2 ?? "bottom")
      : _0x4ec112 === "tree-left"
        ? _0x1c50c7
          ? "left"
          : (_0x3e95c2 ?? "left")
        : _0x4ec112 === "tree-right"
          ? _0x1c50c7
            ? "right"
            : (_0x3e95c2 ?? "right")
          : _0x4ec112 === "tree-alternate"
            ? _0x1c50c7
              ? _0x1fa8e4 % 2 == 0
                ? "left"
                : "right"
              : (_0x3e95c2 ?? (_0x1fa8e4 % 2 == 0 ? "left" : "right"))
            : _0x4ec112 === "timeline-horizontal"
              ? _0x1c50c7
                ? _0x1fa8e4 % 2 == 0
                  ? "top"
                  : "bottom"
                : (_0x3e95c2 ?? (_0x1fa8e4 % 2 == 0 ? "top" : "bottom"))
              : _0x4ec112 === "timeline-vertical"
                ? _0x1c50c7
                  ? _0x1fa8e4 % 2 == 0
                    ? "left"
                    : "right"
                  : (_0x3e95c2 ?? (_0x1fa8e4 % 2 == 0 ? "left" : "right"))
                : _0x3e95c2;
  }
};
function Ye(_0x1c6057, _0x64fa5) {
  let _0xbe91b =
    Number.isFinite(_0x64fa5.zoomRatio) && _0x64fa5.zoomRatio > 0
      ? _0x64fa5.zoomRatio
      : 1;
  return {
    x: Math.round((_0x1c6057.offsetX - _0x64fa5.panOffset["x"]) / _0xbe91b),
    y: Math.round((_0x1c6057.offsetY - _0x64fa5.panOffset["y"]) / _0xbe91b),
  };
}
function Xe(_0xd6a382) {
  var _0x511db4;
  if (_0xd6a382 != null && _0xd6a382.dispose) {
    _0xd6a382.dispose();
    return;
  }
  _0xd6a382 == null ||
    (_0x511db4 = _0xd6a382.unsubscribe) == null ||
    _0x511db4.call(_0xd6a382);
}
function Ze(_0x50bfb3) {
  var _0x563e92;
  return (
    _0x50bfb3.activeTool === e.BoardToolType["MindMap"] &&
    ((_0x563e92 = _0x50bfb3.pendingInsert) == null
      ? undefined
      : _0x563e92.type) === e.BoardToolType["MindMap"]
  );
}
let Qe = class extends i.RxDisposable {
  constructor(
    _0x5d1005,
    _0x2c38ee,
    _0x2a9bf3,
    _0x4bf7a,
    _0x1e8d3c,
    _0x282b39,
    _0x591aea,
  ) {
    (super(),
      (this._renderContext = _0x5d1005),
      (this._instanceSrv = _0x2c38ee),
      (this._stateService = _0x2a9bf3),
      (this._commandService = _0x4bf7a),
      (this._insertStateService = _0x1e8d3c),
      (this._elementStateService = _0x282b39),
      (this._boardTextEditingService = _0x591aea),
      b(this, "_previewObject", null),
      b(this, "_lastPoint", null),
      this._init());
  }
  _init() {
    var _0x3bbc63;
    let { scene: _0x490e2f, unitId: _0xb5e2d8 } = this._renderContext,
      _0x376b04 = this._instanceSrv["getUnit"](
        _0xb5e2d8,
        i.UniverInstanceType["UNIVER_BOARD"],
      );
    if (!_0x376b04) return;
    let _0x4b5a57 =
        (_0x3bbc63 = _0x490e2f.onPointerMove$) == null
          ? undefined
          : _0x3bbc63.subscribeEvent({
              priority: 4,
              next: ([_0x537bc4, _0x326c87]) =>
                this._handlePointerMove(_0x537bc4, _0x326c87),
            }),
      _0x4f5c4a = _0x490e2f.onPointerDown$["subscribeEvent"]({
        priority: 4,
        next: ([_0x263dac, _0x4ec22c]) =>
          this._handlePointerDown(_0x376b04, _0x263dac, _0x4ec22c),
      });
    (this.disposeWithMe((0, i.toDisposable)(() => Xe(_0x4b5a57))),
      this.disposeWithMe((0, i.toDisposable)(() => Xe(_0x4f5c4a))));
    let _0x336822 = this._stateService["state$"].subscribe(() =>
      this._syncPreviewObject(),
    );
    (this.disposeWithMe((0, i.toDisposable)(() => Xe(_0x336822))),
      this.disposeWithMe(
        (0, i.toDisposable)(() => {
          this._removePreviewObject();
        }),
      ),
      this._syncPreviewObject());
  }
  _syncPreviewObject() {
    var _0x2b09b3, _0x58fce2;
    let _0x14bb34 = this._stateService["getState"]();
    if (!Ze(_0x14bb34)) {
      this._removePreviewObject();
      return;
    }
    let _0x486097 = this._ensurePreviewObject(),
      _0x392c23 = this._insertStateService["getTemplate"]();
    (_0x486097.updateState({
      point: this._lastPoint,
      structureKind: _0x392c23.structureKind,
      children: _0x392c23.children,
      blueprint: _0x392c23.blueprint,
      zoomRatio: _0x14bb34.zoomRatio,
    }),
      (_0x2b09b3 = (_0x58fce2 = this._renderContext["scene"]).makeDirty) ==
        null || _0x2b09b3.call(_0x58fce2, true));
  }
  _ensurePreviewObject() {
    var _0x44f932, _0x50bca1;
    if (this._previewObject) return this._previewObject;
    let _0xd53059 = this._insertStateService["getTemplate"](),
      _0x2b273d = new qe(Be, {
        point: this._lastPoint,
        structureKind: _0xd53059.structureKind,
        children: _0xd53059.children,
        blueprint: _0xd53059.blueprint,
        zoomRatio: this._stateService["getState"]().zoomRatio,
      });
    return (
      (this._previewObject = _0x2b273d),
      (_0x44f932 = (_0x50bca1 = this._renderContext["scene"]).addObject) ==
        null || _0x44f932.call(_0x50bca1, _0x2b273d, Ve),
      _0x2b273d
    );
  }
  _removePreviewObject() {
    var _0x1feaf3, _0x326170, _0x4616f6, _0x43ae85;
    if (!this._previewObject) {
      this._lastPoint = null;
      return;
    }
    ((_0x1feaf3 = (_0x326170 = this._renderContext["scene"]).removeObjects) ==
      null || _0x1feaf3.call(_0x326170, [this._previewObject]),
      (this._previewObject = null),
      (this._lastPoint = null),
      (_0x4616f6 = (_0x43ae85 = this._renderContext["scene"]).makeDirty) ==
        null || _0x4616f6.call(_0x43ae85, true));
  }
  _getPointFromEvent(_0x4d9784) {
    let _0x1b40ec = this._stateService["getState"]();
    return Ye(_0x4d9784, {
      panOffset: _0x1b40ec.viewportPanOffset,
      zoomRatio: _0x1b40ec.zoomRatio,
    });
  }
  _resolveRootTopLeft(_0x7cba52) {
    return {
      left: Math.round(
        _0x7cba52.x - t.MIND_MAP_DEFAULT_NODE_SIZE["rootWidth"] / 2,
      ),
      top: Math.round(
        _0x7cba52.y - t.MIND_MAP_DEFAULT_NODE_SIZE["rootHeight"] / 2,
      ),
    };
  }
  _handlePointerMove(_0xcd1f33, _0x26f737) {
    Ze(this._stateService["getState"]()) &&
      ((this._lastPoint = this._getPointFromEvent(_0xcd1f33)),
      this._syncPreviewObject(),
      _0x26f737.stopPropagation());
  }
  _handlePointerDown(_0x204c31, _0x2498c3, _0x10c0ed) {
    var _0x57df99;
    let _0x4ea586 = this._stateService["getState"](),
      _0x38028a = _0x2498c3.button ?? 0;
    if (!Ze(_0x4ea586) || _0x38028a !== 0) return;
    let _0x49037b = this._getPointFromEvent(_0x2498c3),
      _0x477ed8 = this._resolveRootTopLeft(_0x49037b),
      _0x2e695b = this._insertStateService["getTemplate"](),
      _0x5c0ad8 = (0, i.generateRandomId)(6),
      _0x52b2f5 = _0x204c31.getActivePageId(),
      _0x4ceccf = this._commandService["executeCommand"](
        t.InsertBoardMindMapOperation["id"],
        {
          unitId: this._renderContext["unitId"],
          subUnitId: _0x52b2f5,
          left: _0x477ed8.left,
          top: _0x477ed8.top,
          rootNodeId: _0x5c0ad8,
          rootText: _0x2e695b.rootText,
          structureKind: _0x2e695b.structureKind,
          branchLineType: _0x2e695b.branchLineType,
          children: _0x2e695b.children,
          blueprint: _0x2e695b.blueprint,
        },
      );
    (Promise.resolve(_0x4ceccf).then((_0x5da50e) => {
      if (!_0x5da50e) return;
      let _0x1995c7 = {
        unitId: this._renderContext["unitId"],
        subUnitId: _0x52b2f5,
      };
      (this._elementStateService["selectElements"](
        _0x1995c7,
        [_0x5c0ad8],
        _0x5c0ad8,
      ),
        this._boardTextEditingService["ignoreExternalFocusChanges"](),
        this._boardTextEditingService["setEditing"]({
          ..._0x1995c7,
          shapeId: _0x5c0ad8,
          shapeKey: (0, n.getBoardElementRenderObjectKey)(
            _0x1995c7.unitId,
            _0x5c0ad8,
          ),
          visible: true,
        }));
    }),
      this._stateService["setActiveTool"](e.BoardToolType["Select"]),
      _0x10c0ed.stopPropagation(),
      (_0x57df99 = _0x2498c3.preventDefault) == null ||
        _0x57df99.call(_0x2498c3));
  }
};
Qe = S(
  [
    x(1, i.IUniverInstanceService),
    x(2, n.IBoardUIStateService),
    x(3, i.ICommandService),
    x(4, (0, i.Inject)(q)),
    x(5, n.IBoardElementStateService),
    x(6, (0, i.Inject)(n.BoardTextEditingService)),
  ],
  Qe,
);
var J = class extends i.Disposable {
  constructor(..._0x2e3107) {
    (super(..._0x2e3107),
      b(this, "_refresh$", new o.Subject()),
      b(this, "refresh$", this._refresh$["asObservable"]()));
  }
  notify(_0x23b6d8) {
    this._refresh$["next"](_0x23b6d8);
  }
  dispose() {
    (this._refresh$["complete"](), super.dispose());
  }
};
function $e(_0x405ddc) {
  return (
    typeof _0x405ddc == "number" && Number.isFinite(_0x405ddc) && _0x405ddc > 0
  );
}
function et(_0x55b0e1, _0x35724d, _0x11996d) {
  let _0x5660e1 = _0x55b0e1[_0x35724d],
    _0x374695 = (0, t.getMindMapNodeMeta)(
      _0x5660e1 == null ? undefined : _0x5660e1.element,
    );
  if (!_0x5660e1 || !_0x374695) return null;
  let _0x3bbb0 = (0, t.resolveMindMapNodeHostSize)(_0x5660e1, _0x11996d);
  if (!_0x3bbb0) return null;
  let _0x5f296e = _0x5660e1.transform ?? _0x5660e1.element["transform"];
  return (0, t.resolveMindMapLayoutPreview)(
    {
      ..._0x55b0e1,
      [_0x35724d]: {
        ..._0x5660e1,
        transform: {
          ..._0x5f296e,
          width: _0x3bbb0.width,
          height: _0x3bbb0.height,
        },
        element: {
          ..._0x5660e1.element,
          transform: {
            ..._0x5660e1.element["transform"],
            width: _0x3bbb0.width,
            height: _0x3bbb0.height,
          },
        },
      },
    },
    _0x374695.structureScopeId,
  );
}
let tt = class extends i.RxDisposable {
  constructor(
    _0x256cf1,
    _0x3114e5,
    _0x48fba8,
    _0x1874ba,
    _0xe2434c,
    _0x58be6d,
  ) {
    (super(),
      (this._renderContext = _0x256cf1),
      (this._intrinsicSizeService = _0x3114e5),
      (this._boardElementService = _0x48fba8),
      (this._textEditingService = _0x1874ba),
      (this._previewRefreshService = _0xe2434c),
      (this._commandService = _0x58be6d),
      b(this, "_activePreview", null),
      b(this, "_provider", {
        match: (_0x14a7b4) =>
          _0x14a7b4.unitId === this._renderContext["unitId"] &&
          !!(0, t.getMindMapNodeMeta)(_0x14a7b4.element),
        resolveHostSize: (_0x4e153e) => this._resolveHostSize(_0x4e153e),
        previewHostSize: (_0x5cefee) => this._previewHostSize(_0x5cefee),
        updateHostSize: (_0x4ce4d0) => this._updateHostSize(_0x4ce4d0),
        updateShapeText: (_0x16a141) => this._updateShapeText(_0x16a141),
      }),
      this.disposeWithMe(
        this._intrinsicSizeService["registerProvider"](this._provider),
      ),
      this._initEditingRestore(),
      this.disposeWithMe(
        (0, i.toDisposable)(() => this._restoreActivePreview()),
      ));
  }
  _updateHostSize(_0x2e517b) {
    return this._previewHostSize(_0x2e517b);
  }
  _updateShapeText(_0x5ba613) {
    let _0x4fd59f = _0x5ba613.params["hostSize"]
        ? this._resolveHostSize({
            elementData: _0x5ba613.elementData,
            params: _0x5ba613.params["hostSize"],
          })
        : null,
      _0x295a82 =
        _0x5ba613.elementData["transform"] ??
        _0x5ba613.elementData["element"].transform;
    return !(
      _0x4fd59f &&
      (_0x4fd59f.width !== _0x295a82.width ||
        _0x4fd59f.height !== _0x295a82.height)
    ) &&
      (0, n.areBoardShapeTextValuesEquivalent)(
        _0x5ba613.params["shapeText"],
        _0x5ba613.params["oldShapeText"],
      )
      ? true
      : this._commandService["syncExecuteCommand"](
          t.UpdateMindMapNodeOperation["id"],
          {
            unitId: _0x5ba613.params["unitId"],
            subUnitId: _0x5ba613.params["subUnitId"],
            nodeId: _0x5ba613.params["shapeId"],
            shapeText: _0x5ba613.params["shapeText"],
            ...(_0x4fd59f
              ? {
                  hostSize: {
                    width: _0x4fd59f.width,
                    height: _0x4fd59f.height,
                  },
                }
              : null),
          },
        );
  }
  _previewHostSize(_0x4ee816) {
    let _0x3ad985 = this._resolveHostSize(_0x4ee816);
    if (!_0x3ad985) return false;
    let _0x13a21e =
      _0x4ee816.elementData["transform"] ??
      _0x4ee816.elementData["element"].transform;
    return (
      (!this._activePreview &&
        _0x13a21e.width === _0x3ad985.width &&
        _0x13a21e.height === _0x3ad985.height) ||
        this._syncLayoutPreview(_0x4ee816, _0x3ad985),
      true
    );
  }
  _resolveHostSize(_0x4404c8) {
    return !$e(_0x4404c8.params["width"]) || !$e(_0x4404c8.params["height"])
      ? null
      : (0, t.resolveMindMapNodeHostSize)(_0x4404c8.elementData, {
          width: _0x4404c8.params["width"],
          height: _0x4404c8.params["height"],
        });
  }
  _initEditingRestore() {
    this.disposeWithMe(
      (0, i.toDisposable)(
        this._textEditingService["editingParams$"]
          .pipe((0, o.takeUntil)(this.dispose$))
          .subscribe((_0xa326ef) => {
            _0xa326ef || this._restoreActivePreview();
          }),
      ),
    );
  }
  _syncLayoutPreview(_0x4a5929, _0x16184c) {
    var _0x3fbe80;
    let _0xa39d34 = this._boardElementService["getElementData"](
        _0x4a5929.params["unitId"],
        _0x4a5929.params["subUnitId"],
      ),
      _0xcf1b8c = et(_0xa39d34, _0x4a5929.params["shapeId"], _0x16184c),
      _0x34ef25 = (0, t.getMindMapNodeMeta)(
        (_0x3fbe80 = _0xa39d34[_0x4a5929.params["shapeId"]]) == null
          ? undefined
          : _0x3fbe80.element,
      );
    !_0xcf1b8c ||
      !_0x34ef25 ||
      ((this._activePreview = {
        unitId: _0x4a5929.params["unitId"],
        subUnitId: _0x4a5929.params["subUnitId"],
        scopeId: _0x34ef25.structureScopeId,
      }),
      this._syncElementDataToScene(_0xcf1b8c, _0x34ef25.structureScopeId) &&
        this._previewRefreshService["notify"]({
          unitId: _0x4a5929.params["unitId"],
          subUnitId: _0x4a5929.params["subUnitId"],
          nodeId: _0x4a5929.params["shapeId"],
          scopeId: _0x34ef25.structureScopeId,
        }));
  }
  _restoreActivePreview() {
    let _0x38f516 = this._activePreview;
    if (!_0x38f516) return;
    this._activePreview = null;
    let _0x117b5c = this._boardElementService["getElementData"](
      _0x38f516.unitId,
      _0x38f516.subUnitId,
    );
    this._syncElementDataToScene(_0x117b5c, _0x38f516.scopeId) &&
      this._previewRefreshService["notify"]({
        unitId: _0x38f516.unitId,
        subUnitId: _0x38f516.subUnitId,
        nodeId: _0x38f516.scopeId,
        scopeId: _0x38f516.scopeId,
      });
  }
  _syncElementDataToScene(_0x3e89c7, _0x1f715c) {
    let _0x4c9a2d = false;
    if (
      (Object.values(_0x3e89c7).forEach((_0x5c309c) => {
        var _0x2ef83d;
        let _0x410f61 = (0, t.getMindMapNodeMeta)(_0x5c309c.element),
          _0x23e309 =
            (_0x2ef83d = _0x5c309c.element["custom"]) == null
              ? undefined
              : _0x2ef83d.structured;
        if (
          _0x5c309c.elementId !== _0x1f715c &&
          (_0x410f61 == null ? undefined : _0x410f61.structureScopeId) !==
            _0x1f715c &&
          (_0x23e309 == null ? undefined : _0x23e309.structureScopeId) !==
            _0x1f715c
        )
          return;
        let _0x17c4f1 = this._getSceneObject(_0x5c309c.elementId);
        _0x17c4f1 &&
          (_0x4c9a2d =
            (0, n.syncBoardElementRenderObject)(_0x17c4f1, _0x5c309c, {
              elementData: _0x3e89c7,
              unitId: this._renderContext["unitId"],
            }) || _0x4c9a2d);
      }),
      _0x4c9a2d)
    ) {
      var _0x393fa2, _0x26c67b;
      (this._renderContext["scene"].makeDirty(true),
        (_0x393fa2 = (_0x26c67b = this._renderContext["scene"])
          .requestRender) == null || _0x393fa2.call(_0x26c67b));
    }
    return _0x4c9a2d;
  }
  _getSceneObject(_0x199720) {
    var _0x1dc351;
    let _0x19e166 = (0, n.getBoardElementRenderObjectKey)(
        this._renderContext["unitId"],
        _0x199720,
      ),
      _0x474a68 = this._renderContext["scene"];
    return (
      ((_0x1dc351 = _0x474a68.getObjectIncludeInGroup) == null
        ? undefined
        : _0x1dc351.call(_0x474a68, _0x19e166)) ??
      this._renderContext["scene"].getObject(_0x19e166) ??
      null
    );
  }
};
tt = S(
  [
    x(1, (0, i.Inject)(n.BoardShapeIntrinsicSizeService)),
    x(2, (0, i.Inject)(e.IBoardElementService)),
    x(3, (0, i.Inject)(n.BoardTextEditingService)),
    x(4, (0, i.Inject)(J)),
    x(5, i.ICommandService),
  ],
  tt,
);
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
  fontFamily: w.fontFamily,
};
function nt(_0x4094a6) {
  let _0x648eb4 = Y.radius,
    _0x415f5f = Y.addChildRadius,
    _0x1a1bd4 = Y.siblingHoverRadius,
    _0x350809 = Y.gap,
    _0x3629df = Y.siblingDotRadius,
    _0x3af95c = _0x3629df + Y.siblingDotGap,
    _0x82cde5 = Y.collapsePlusMinDistance,
    _0x5f1c9a = _0x4094a6.bounds["top"] + _0x4094a6.bounds["height"] / 2,
    _0x5ef60a = _0x4094a6.bounds["left"] + _0x4094a6.bounds["width"] / 2,
    _0x1911ae = _0x4094a6.bounds["left"] - _0x648eb4 - _0x350809,
    _0x210f5f =
      _0x4094a6.bounds["left"] +
      _0x4094a6.bounds["width"] +
      _0x648eb4 +
      _0x350809,
    _0x3357a0 = _0x4094a6.bounds["top"] - _0x648eb4 - _0x350809,
    _0x193345 =
      _0x4094a6.bounds["top"] +
      _0x4094a6.bounds["height"] +
      _0x648eb4 +
      _0x350809,
    _0x5ac204 = _0x4094a6.bounds["left"] - _0x415f5f - _0x350809,
    _0x4c3144 =
      _0x4094a6.bounds["left"] +
      _0x4094a6.bounds["width"] +
      _0x415f5f +
      _0x350809,
    _0x4cdd7 = _0x4094a6.bounds["top"] - _0x415f5f - _0x350809,
    _0x8961b6 =
      _0x4094a6.bounds["top"] +
      _0x4094a6.bounds["height"] +
      _0x415f5f +
      _0x350809,
    _0x230172 = [],
    _0x495eb8 = _0x4094a6.side === "top" || _0x4094a6.side === "bottom",
    _0x4935cc = _0x495eb8
      ? _0x5ef60a
      : _0x4094a6.side === "left"
        ? _0x1911ae
        : _0x210f5f,
    _0x1316f1 = _0x495eb8
      ? _0x4094a6.side === "top"
        ? _0x3357a0
        : _0x193345
      : _0x5f1c9a;
  if (_0x4094a6.hasChildren && _0x4094a6.collapsedDescendantCount > 0)
    return (
      _0x230172.push({
        kind: "toggle-collapse",
        x: _0x4935cc,
        y: _0x1316f1,
        radius: _0x648eb4,
        badgeCount: _0x4094a6.collapsedDescendantCount,
      }),
      _0x230172
    );
  if (
    (_0x4094a6.isRoot
      ? (
          _0x4094a6.rootChildSides ??
          (_0x495eb8 ? ["top", "bottom"] : ["left", "right"])
        ).forEach((_0x289b28) => {
          _0x289b28 === "top"
            ? _0x230172.push({
                kind: "add-child-top",
                x: _0x5ef60a,
                y: _0x4cdd7,
                radius: _0x415f5f,
              })
            : _0x289b28 === "bottom"
              ? _0x230172.push({
                  kind: "add-child-bottom",
                  x: _0x5ef60a,
                  y: _0x8961b6,
                  radius: _0x415f5f,
                })
              : _0x289b28 === "left"
                ? _0x230172.push({
                    kind: "add-child-left",
                    x: _0x5ac204,
                    y: _0x5f1c9a,
                    radius: _0x415f5f,
                  })
                : _0x230172.push({
                    kind: "add-child-right",
                    x: _0x4c3144,
                    y: _0x5f1c9a,
                    radius: _0x415f5f,
                  });
        })
      : (_0x230172.push({
          kind:
            _0x4094a6.side === "left"
              ? "add-child-left"
              : _0x4094a6.side === "top"
                ? "add-child-top"
                : _0x4094a6.side === "bottom"
                  ? "add-child-bottom"
                  : "add-child-right",
          x: _0x495eb8
            ? _0x5ef60a
            : _0x4094a6.side === "left"
              ? _0x5ac204
              : _0x4c3144,
          y: _0x495eb8
            ? _0x4094a6.side === "top"
              ? _0x4cdd7
              : _0x8961b6
            : _0x5f1c9a,
          radius: _0x415f5f,
        }),
        _0x495eb8
          ? (_0x230172.push({
              kind: "add-sibling-before",
              placement: "before",
              x: _0x4094a6.bounds["left"] - _0x3af95c,
              y: _0x5f1c9a,
              radius: _0x1a1bd4,
              visualRadius: _0x3629df,
            }),
            _0x230172.push({
              kind: "add-sibling-after",
              placement: "after",
              x:
                _0x4094a6.bounds["left"] +
                _0x4094a6.bounds["width"] +
                _0x3af95c,
              y: _0x5f1c9a,
              radius: _0x1a1bd4,
              visualRadius: _0x3629df,
            }))
          : (_0x230172.push({
              kind: "add-sibling-before",
              placement: "before",
              x: _0x5ef60a,
              y: _0x4094a6.bounds["top"] - _0x3af95c,
              radius: _0x1a1bd4,
              visualRadius: _0x3629df,
            }),
            _0x230172.push({
              kind: "add-sibling-after",
              placement: "after",
              x: _0x5ef60a,
              y:
                _0x4094a6.bounds["top"] +
                _0x4094a6.bounds["height"] +
                _0x3af95c,
              radius: _0x1a1bd4,
              visualRadius: _0x3629df,
            }))),
    _0x4094a6.hasChildren)
  ) {
    let _0x2720d5 = {
      kind: "toggle-collapse",
      x: _0x4935cc,
      y: _0x1316f1,
      radius: _0x648eb4,
    };
    _0x230172.push(_0x2720d5);
    let _0x5c9434 = _0x230172.find(
      (_0xa37cc4) =>
        _0xa37cc4.kind ===
        (_0x4094a6.side === "left"
          ? "add-child-left"
          : _0x4094a6.side === "top"
            ? "add-child-top"
            : _0x4094a6.side === "bottom"
              ? "add-child-bottom"
              : "add-child-right"),
    );
    _0x5c9434 &&
      Math.hypot(_0x5c9434.x - _0x2720d5.x, _0x5c9434.y - _0x2720d5.y) <
        _0x82cde5 &&
      (_0x4094a6.side === "top" || _0x4094a6.side === "bottom"
        ? (_0x5c9434.y =
            _0x2720d5.y + (_0x4094a6.side === "top" ? -_0x82cde5 : _0x82cde5))
        : (_0x5c9434.x =
            _0x2720d5.x +
            (_0x4094a6.side === "left" ? -_0x82cde5 : _0x82cde5)));
  }
  return _0x230172;
}
const rt = "board-mind-map-node-controls-object",
  it = n.BOARD_RENDER_LAYER_INDEX["connectorAffordance"];
function at(_0x59c8ff, _0x23adc7) {
  return (
    !!_0x59c8ff &&
    _0x59c8ff.kind === _0x23adc7.kind &&
    _0x59c8ff.x === _0x23adc7.x &&
    _0x59c8ff.y === _0x23adc7.y
  );
}
var ot = class extends a.BaseObject {
  constructor(_0xc67677 = rt, _0x1b563b) {
    (super(_0xc67677),
      b(this, "_state", { controls: [] }),
      (this.evented = true),
      (this.zIndex = n.BOARD_RENDER_OBJECT_Z_INDEX["transientControl"]),
      this.updateState(_0x1b563b));
  }
  updateState(_0x2167b0) {
    ((this._state = { ...this._state, ..._0x2167b0 }),
      this._state["controls"].length > 0 ? this.show() : this.hide(),
      this.makeDirty(true));
  }
  setHoveredControl(_0x10f92e) {
    (!_0x10f92e && !this._state["hoveredControl"]) ||
      (_0x10f92e && at(this._state["hoveredControl"], _0x10f92e)) ||
      ((this._state = { ...this._state, hoveredControl: _0x10f92e }),
      this.makeDirty(true));
  }
  getHitControl(_0x55e13a) {
    for (
      let _0x5700ae = this._state["controls"].length - 1;
      _0x5700ae >= 0;
      --_0x5700ae
    ) {
      let _0x1d3ced = this._state["controls"][_0x5700ae];
      if (
        Math.hypot(_0x55e13a.x - _0x1d3ced.x, _0x55e13a.y - _0x1d3ced.y) <=
        _0x1d3ced.radius
      )
        return _0x1d3ced;
    }
    return null;
  }
  isHit(_0x47a428) {
    return !!this.getHitControl({ x: _0x47a428.x, y: _0x47a428.y });
  }
  render(_0x1ee6ce, _0xeb9151) {
    return !this.visible || this._state["controls"].length === 0
      ? (this.makeDirty(false), this)
      : (_0x1ee6ce.save(),
        this._state["controls"].forEach((_0x19031a) => {
          let _0x5a25b7 = at(this._state["hoveredControl"], _0x19031a),
            _0x1c0fb4 = _0x19031a.badgeCount !== undefined,
            _0x4bbfa8 =
              _0x19031a.kind === "add-child-left" ||
              _0x19031a.kind === "add-child-right" ||
              _0x19031a.kind === "add-child-top" ||
              _0x19031a.kind === "add-child-bottom",
            _0x3fffca =
              _0x19031a.kind === "add-sibling-before" ||
              _0x19031a.kind === "add-sibling-after",
            _0x8ceaa2 =
              _0x3fffca && !_0x5a25b7
                ? (_0x19031a.visualRadius ?? _0x19031a.radius)
                : _0x19031a.radius;
          if (
            (_0x1ee6ce.beginPath(),
            (_0x1ee6ce.fillStyle =
              _0x19031a.kind === "toggle-collapse"
                ? Y.surfaceColor
                : Y.primaryColor),
            (_0x1ee6ce.strokeStyle = Y.primaryColor),
            (_0x1ee6ce.lineWidth = Y.borderWidth),
            _0x1ee6ce.arc(_0x19031a.x, _0x19031a.y, _0x8ceaa2, 0, Math.PI * 2),
            _0x1ee6ce.fill(),
            (!_0x3fffca || _0x5a25b7) && _0x1ee6ce.stroke(),
            !_0x1c0fb4 && (!_0x3fffca || _0x5a25b7))
          ) {
            if (
              (_0x1ee6ce.beginPath(),
              (_0x1ee6ce.strokeStyle =
                _0x19031a.kind === "toggle-collapse"
                  ? Y.primaryColor
                  : Y.surfaceColor),
              (_0x1ee6ce.lineWidth = _0x3fffca
                ? Y.glyphWidth
                : _0x5a25b7
                  ? Y.glyphHoverWidth
                  : Y.glyphWidth),
              (_0x1ee6ce.lineCap = "round"),
              _0x19031a.kind === "toggle-collapse")
            ) {
              let _0x4cc9c7 = Y.glyphSize;
              (_0x1ee6ce.moveTo(
                _0x19031a.x + _0x4cc9c7 / 2,
                _0x19031a.y - _0x4cc9c7,
              ),
                _0x1ee6ce.lineTo(_0x19031a.x - _0x4cc9c7 / 2, _0x19031a.y),
                _0x1ee6ce.lineTo(
                  _0x19031a.x + _0x4cc9c7 / 2,
                  _0x19031a.y + _0x4cc9c7,
                ));
            } else {
              let _0x198727 = _0x3fffca
                ? Y.siblingGlyphSize
                : _0x4bbfa8
                  ? Y.addChildGlyphSize
                  : Y.glyphSize;
              (_0x1ee6ce.moveTo(_0x19031a.x - _0x198727, _0x19031a.y),
                _0x1ee6ce.lineTo(_0x19031a.x + _0x198727, _0x19031a.y),
                _0x1ee6ce.moveTo(_0x19031a.x, _0x19031a.y - _0x198727),
                _0x1ee6ce.lineTo(_0x19031a.x, _0x19031a.y + _0x198727));
            }
            _0x1ee6ce.stroke();
          }
          _0x1c0fb4 &&
            ((_0x1ee6ce.fillStyle = Y.primaryColor),
            (_0x1ee6ce.font =
              Y.badgeFontWeight +
              "\x20" +
              Y.badgeFontSize +
              "px " +
              Y.fontFamily),
            (_0x1ee6ce.textAlign = "center"),
            (_0x1ee6ce.textBaseline = "middle"),
            _0x1ee6ce.fillText(
              String(_0x19031a.badgeCount),
              _0x19031a.x,
              _0x19031a.y,
            ));
        }),
        _0x1ee6ce.restore(),
        this.makeDirty(false),
        this);
  }
};
function st(_0x329bfa) {
  return (
    _0x329bfa === "tree-left" ||
    _0x329bfa === "tree-right" ||
    _0x329bfa === "tree-alternate"
  );
}
function ct(_0x187925) {
  return (
    _0x187925 === "timeline-horizontal" || _0x187925 === "timeline-vertical"
  );
}
function lt(_0x151a1d, _0x366862) {
  let _0x57e5ac =
    Number.isFinite(_0x366862.zoomRatio) && _0x366862.zoomRatio > 0
      ? _0x366862.zoomRatio
      : 1;
  return {
    x: Math.round((_0x151a1d.offsetX - _0x366862.panOffset["x"]) / _0x57e5ac),
    y: Math.round((_0x151a1d.offsetY - _0x366862.panOffset["y"]) / _0x57e5ac),
  };
}
let ut = class extends i.RxDisposable {
  constructor(
    _0x3cf397,
    _0x2a4dc2,
    _0x1e7114,
    _0x22cf60,
    _0x2bed73,
    _0x3c56b4,
    _0x188926,
    _0x51fb2e,
    _0x5ba1de,
  ) {
    (super(),
      (this._renderContext = _0x3cf397),
      (this._boardElementService = _0x2a4dc2),
      (this._elementStateService = _0x1e7114),
      (this._stateService = _0x22cf60),
      (this._commandService = _0x2bed73),
      (this._boardTextEditingService = _0x3c56b4),
      (this._localeService = _0x188926),
      (this._previewRefreshService = _0x51fb2e),
      (this._undoRedoGroupService = _0x5ba1de),
      b(this, "_object", null),
      b(this, "_objectEventDisposables", null),
      b(this, "_activeNodeId", null),
      b(this, "_activeScopeId", null),
      this._init());
  }
  _init() {
    var _0x1341d1, _0x2ffbaf, _0x24f381;
    let { scene: _0x12d85b } = this._renderContext,
      _0x2596d1 =
        (_0x1341d1 = _0x12d85b.getTransformerByCreate) == null
          ? undefined
          : _0x1341d1.call(_0x12d85b);
    (_0x2596d1 &&
      (this.disposeWithMe(
        (0, i.toDisposable)(
          _0x2596d1.changing$["pipe"](
            (0, o.takeUntil)(this.dispose$),
          ).subscribe(({ objects: _0x5e1456 }) => {
            this._syncControls(_0x5e1456, { hideRootControls: true });
          }),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          _0x2596d1.changeEnd$["pipe"](
            (0, o.takeUntil)(this.dispose$),
          ).subscribe((_0x552bdd) => {
            let _0x397485 = _0x552bdd == null ? undefined : _0x552bdd.objects;
            (this._syncControls(_0x397485),
              setTimeout(() => this._syncControls(_0x397485), 0));
          }),
        ),
      )),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._elementStateService["state$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe(() => this._syncControls()),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._stateService["state$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe(() => this._syncControls()),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._boardElementService["elementUpdate$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe((_0x42691b) => {
              let _0x18d543 =
                this._elementStateService["getSnapshot"]().context;
              _0x18d543 &&
                _0x42691b.some(
                  (_0x13dfcd) =>
                    _0x13dfcd.unitId === _0x18d543.unitId &&
                    _0x13dfcd.subUnitId === _0x18d543.subUnitId &&
                    (_0x13dfcd.elementId === this._activeNodeId ||
                      _0x13dfcd.elementId === this._activeScopeId),
                ) &&
                this._syncControls();
            }),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._previewRefreshService["refresh$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe((_0x1fa1ab) => {
              let _0x1b6c31 =
                this._elementStateService["getSnapshot"]().context;
              !_0x1b6c31 ||
                _0x1b6c31.unitId !== _0x1fa1ab.unitId ||
                _0x1b6c31.subUnitId !== _0x1fa1ab.subUnitId ||
                (this._activeScopeId &&
                  this._activeScopeId !== _0x1fa1ab.scopeId) ||
                this._syncControls();
            }),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          _0x12d85b.onPointerMove$["subscribeEvent"]((_0x583ce4) =>
            this._handlePointerMove(_0x583ce4),
          ),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          _0x12d85b.onPointerDown$["subscribeEvent"]({
            priority: 4,
            next: ([_0x1b3508, _0x36c035]) => {
              this._handlePointerDown(_0x1b3508) &&
                this._consumeControlEvent(_0x1b3508, _0x36c035);
            },
          }),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          ((_0x2ffbaf = _0x12d85b.onPointerUp$) == null
            ? undefined
            : _0x2ffbaf.subscribeEvent({
                priority: 4,
                next: ([_0x4376b8, _0x2ae2d2]) => {
                  this._isControlEvent(_0x4376b8) &&
                    this._consumeControlEvent(_0x4376b8, _0x2ae2d2);
                },
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          ((_0x24f381 = _0x12d85b.onDblclick$) == null
            ? undefined
            : _0x24f381.subscribeEvent({
                priority: 4,
                next: ([_0x3701dc, _0x20b726]) => {
                  this._isControlEvent(_0x3701dc) &&
                    this._consumeControlEvent(_0x3701dc, _0x20b726);
                },
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe((0, i.toDisposable)(() => this._removeObject())),
      this._syncControls());
  }
  _ensureObject() {
    return this._object
      ? this._object
      : ((this._object = new ot(rt)),
        this._attachObjectEvents(this._object),
        this._renderContext["scene"].addObject(this._object, it),
        this._object);
  }
  _attachObjectEvents(_0x32d055) {
    var _0xdd1091;
    (_0xdd1091 = this._objectEventDisposables) == null || _0xdd1091.dispose();
    let _0x528aeb = new i["DisposableCollection"]();
    (_0x528aeb.add(
      _0x32d055.onPointerDown$["subscribeEvent"]({
        priority: 4,
        next: ([_0x5a0c10, _0x479d0d]) => {
          this._handlePointerDown(_0x5a0c10) &&
            this._consumeControlEvent(_0x5a0c10, _0x479d0d);
        },
      }),
    ),
      _0x528aeb.add(
        _0x32d055.onPointerUp$["subscribeEvent"]({
          priority: 4,
          next: ([_0x24dc5a, _0x3de31b]) => {
            this._isControlEvent(_0x24dc5a) &&
              this._consumeControlEvent(_0x24dc5a, _0x3de31b);
          },
        }),
      ),
      _0x528aeb.add(
        _0x32d055.onDblclick$["subscribeEvent"]({
          priority: 4,
          next: ([_0x4f459a, _0x5b3cae]) => {
            this._isControlEvent(_0x4f459a) &&
              this._consumeControlEvent(_0x4f459a, _0x5b3cae);
          },
        }),
      ),
      (this._objectEventDisposables = _0x528aeb));
  }
  _removeObject() {
    var _0x57121a;
    this._object &&
      (this._renderContext["scene"].removeObjects([this._object]),
      (_0x57121a = this._objectEventDisposables) == null || _0x57121a.dispose(),
      (this._objectEventDisposables = null),
      (this._object = null),
      (this._activeNodeId = null),
      (this._activeScopeId = null),
      this._renderContext["scene"].makeDirty(true));
  }
  _syncControls(_0x12ed53, _0x5b9bb9) {
    var _0x2b4351, _0x41cc4a;
    if (this._stateService["getState"]().interactionMode === "viewing") {
      this._removeObject();
      return;
    }
    let _0x3c632a = this._elementStateService["getSnapshot"](),
      _0x2a4ad0 = _0x3c632a.context,
      _0x3ee418 = _0x3c632a.focusedId ?? _0x3c632a.selectedIds[0];
    if (!_0x2a4ad0 || !_0x3ee418 || _0x3c632a.selectedIds["length"] !== 1) {
      this._removeObject();
      return;
    }
    let _0x31be41 = this._boardElementService["getElementData"](
        _0x2a4ad0.unitId,
        _0x2a4ad0.subUnitId,
      ),
      _0x4ce280 = _0x31be41[_0x3ee418],
      _0xaa5177 = (0, t.getMindMapNodeMeta)(
        _0x4ce280 == null ? undefined : _0x4ce280.element,
      );
    if (!_0x4ce280 || !_0xaa5177) {
      this._removeObject();
      return;
    }
    let _0x19465b = (0, n.getBoardElementRenderObjectKey)(
      _0x2a4ad0.unitId,
      _0x3ee418,
    );
    if (
      _0x5b9bb9 != null &&
      _0x5b9bb9.hideRootControls &&
      _0xaa5177.parentNodeId == null &&
      _0x12ed53 != null &&
      _0x12ed53.has(_0x19465b)
    ) {
      this._removeObject();
      return;
    }
    let _0x45a217 = this._resolveControlBounds(
      _0x31be41,
      _0x2a4ad0.unitId,
      _0x3ee418,
      _0x12ed53,
    );
    if (!_0x45a217) {
      this._removeObject();
      return;
    }
    let _0x198950 = Object.values(_0x31be41).filter((_0x3a9df2) => {
        var _0x2531f3;
        return (
          ((_0x2531f3 = (0, t.getMindMapNodeMeta)(_0x3a9df2.element)) == null
            ? undefined
            : _0x2531f3.parentNodeId) === _0x3ee418
        );
      }),
      _0x292ec7 = _0xaa5177.collapsed
        ? this._countDescendants(_0x31be41, _0x3ee418)
        : 0;
    ((this._activeNodeId = _0x3ee418),
      (this._activeScopeId = _0xaa5177.structureScopeId));
    let _0x219f68 =
        (_0x2b4351 = _0x31be41[_0xaa5177.structureScopeId]) == null
          ? undefined
          : _0x2b4351.element,
      _0x3d903d = (0, t.getMindMapContainerMeta)(_0x219f68),
      _0x53ae06 =
        _0x219f68 == null ||
        (_0x41cc4a = _0x219f68.custom) == null ||
        (_0x41cc4a = _0x41cc4a.mindmap) == null ||
        (_0x41cc4a = _0x41cc4a.layout) == null
          ? undefined
          : _0x41cc4a.structureKind,
      _0x3ff0d2 =
        (_0x3d903d == null ? undefined : _0x3d903d.layout["structureKind"]) ??
        _0x53ae06,
      _0x2326a8 = _0xaa5177.parentNodeId == null,
      _0x3ea353 = this._resolveControlSide(
        _0xaa5177.side,
        _0x2326a8,
        _0x3ff0d2,
      );
    (this._ensureObject().updateState({
      controls: nt({
        bounds: _0x45a217,
        isRoot: _0x2326a8,
        side: _0x3ea353,
        rootChildSides: this._resolveRootChildControlSides(
          _0x2326a8,
          _0x3ff0d2,
        ),
        hasChildren: _0x198950.length > 0,
        collapsedDescendantCount: _0x292ec7,
      }),
    }),
      this._renderContext["scene"].makeDirty(true));
  }
  _resolveControlSide(_0x483c88, _0x2edf7e, _0x77d82e) {
    return _0x77d82e === "timeline-vertical"
      ? !_0x2edf7e && (_0x483c88 === "left" || _0x483c88 === "right")
        ? _0x483c88
        : "bottom"
      : _0x77d82e === "mindmap-vertical"
        ? !_0x2edf7e && (_0x483c88 === "top" || _0x483c88 === "bottom")
          ? _0x483c88
          : "bottom"
        : _0x483c88 === "left"
          ? "left"
          : "right";
  }
  _resolveRootChildControlSides(_0x75141b, _0x2eda3b) {
    if (_0x75141b) {
      if (st(_0x2eda3b)) return ["bottom"];
      if (_0x2eda3b === "timeline-horizontal") return ["right"];
      if (_0x2eda3b === "timeline-vertical") return ["bottom"];
    }
  }
  _resolveCreateChildSide(_0xe6b3c6) {
    var _0x4bc324, _0x806da3;
    let _0x2bcc58 = this._elementStateService["getSnapshot"]().context;
    if (!_0x2bcc58 || !this._activeNodeId) return;
    let _0x21f998 = this._boardElementService["getElementData"](
        _0x2bcc58.unitId,
        _0x2bcc58.subUnitId,
      ),
      _0x41e948 = (0, t.getMindMapNodeMeta)(
        (_0x4bc324 = _0x21f998[this._activeNodeId]) == null
          ? undefined
          : _0x4bc324.element,
      ),
      _0x15a85e = _0x41e948
        ? (0, t.getMindMapContainerMeta)(
            (_0x806da3 = _0x21f998[_0x41e948.structureScopeId]) == null
              ? undefined
              : _0x806da3.element,
          )
        : null;
    if (!(
      (_0x41e948 == null ? undefined : _0x41e948.parentNodeId) == null &&
      (st(_0x15a85e == null ? undefined : _0x15a85e.layout["structureKind"]) ||
        ct(_0x15a85e == null ? undefined : _0x15a85e.layout["structureKind"]))
    ))
      return _0xe6b3c6 === "add-child-left"
        ? "left"
        : _0xe6b3c6 === "add-child-top"
          ? "top"
          : _0xe6b3c6 === "add-child-bottom"
            ? "bottom"
            : "right";
  }
  _resolveControlBounds(_0xf58840, _0x293893, _0x20777c, _0x178db1) {
    var _0x3f4af3, _0x281a2;
    let _0x17157f = (0, n.getBoardElementRenderObjectKey)(_0x293893, _0x20777c),
      _0x40f0eb = _0x178db1 == null ? undefined : _0x178db1.get(_0x17157f),
      _0x300dc6 = this._toFiniteBounds(_0x40f0eb);
    if (_0x300dc6) return _0x300dc6;
    let _0x172e9c = this._renderContext["scene"],
      _0x1864b7 =
        ((_0x3f4af3 = _0x172e9c.getObjectIncludeInGroup) == null
          ? undefined
          : _0x3f4af3.call(_0x172e9c, _0x17157f)) ??
        ((_0x281a2 = _0x172e9c.getObject) == null
          ? undefined
          : _0x281a2.call(_0x172e9c, _0x17157f));
    return (
      this._toFiniteBounds(_0x1864b7) ||
      (0, e.resolveBoardElementWorldBounds)(_0xf58840, _0x20777c)
    );
  }
  _toFiniteBounds(_0x1cdb83) {
    return _0x1cdb83 &&
      Number.isFinite(_0x1cdb83.left) &&
      Number.isFinite(_0x1cdb83.top) &&
      Number.isFinite(_0x1cdb83.width) &&
      Number.isFinite(_0x1cdb83.height)
      ? {
          left: _0x1cdb83.left,
          top: _0x1cdb83.top,
          width: _0x1cdb83.width,
          height: _0x1cdb83.height,
        }
      : null;
  }
  _countDescendants(_0x2954fd, _0x4f84ed) {
    return Object.values(_0x2954fd)
      .filter((_0x2ba238) => {
        var _0x1b3139;
        return (
          ((_0x1b3139 = (0, t.getMindMapNodeMeta)(_0x2ba238.element)) == null
            ? undefined
            : _0x1b3139.parentNodeId) === _0x4f84ed
        );
      })
      .reduce(
        (_0xc0cb4a, _0x542581) =>
          _0xc0cb4a +
          1 +
          this._countDescendants(_0x2954fd, _0x542581.elementId),
        0,
      );
  }
  _handlePointerMove(_0x219685) {
    if (!this._object) return;
    let _0x47453e = this._stateService["getState"](),
      _0x4d1d47 = lt(_0x219685, {
        panOffset: _0x47453e.viewportPanOffset,
        zoomRatio: _0x47453e.zoomRatio,
      });
    this._object["setHoveredControl"](this._object["getHitControl"](_0x4d1d47));
  }
  _handlePointerDown(_0x3eafae) {
    if (!this._object || !this._activeNodeId || (_0x3eafae.button ?? 0) !== 0)
      return false;
    let _0xd549d5 = this._elementStateService["getSnapshot"]().context;
    if (!_0xd549d5) return false;
    let _0x2e9a4b = this._stateService["getState"](),
      _0x13ac3c = lt(_0x3eafae, {
        panOffset: _0x2e9a4b.viewportPanOffset,
        zoomRatio: _0x2e9a4b.zoomRatio,
      }),
      _0x3fc6ba = this._object["getHitControl"](_0x13ac3c);
    if (!_0x3fc6ba) return false;
    if (_0x3fc6ba.kind === "toggle-collapse")
      return (
        this._executeAndLayout(t.ToggleMindMapNodeCollapseOperation["id"], {
          unitId: _0xd549d5.unitId,
          subUnitId: _0xd549d5.subUnitId,
          nodeId: this._activeNodeId,
        }),
        true
      );
    if (
      _0x3fc6ba.kind === "add-child-left" ||
      _0x3fc6ba.kind === "add-child-right" ||
      _0x3fc6ba.kind === "add-child-top" ||
      _0x3fc6ba.kind === "add-child-bottom"
    ) {
      let _0x3fc31c = (0, i.generateRandomId)(6);
      return (
        this._executeCreateAndEdit(
          t.AddMindMapChildOperation["id"],
          {
            unitId: _0xd549d5.unitId,
            subUnitId: _0xd549d5.subUnitId,
            parentNodeId: this._activeNodeId,
            side: this._resolveCreateChildSide(_0x3fc6ba.kind),
            nodeId: _0x3fc31c,
            connectorId: (0, i.generateRandomId)(6),
            text: this._localeService["t"]("boards-mind-ui.panel.addText"),
          },
          _0x3fc31c,
        ),
        true
      );
    }
    if (
      _0x3fc6ba.kind === "add-sibling-before" ||
      _0x3fc6ba.kind === "add-sibling-after"
    ) {
      let _0x1b5282 = (0, i.generateRandomId)(6);
      return (
        this._executeCreateAndEdit(
          t.AddMindMapSiblingOperation["id"],
          {
            unitId: _0xd549d5.unitId,
            subUnitId: _0xd549d5.subUnitId,
            nodeId: this._activeNodeId,
            placement:
              _0x3fc6ba.placement ??
              (_0x3fc6ba.kind === "add-sibling-before" ? "before" : "after"),
            siblingNodeId: _0x1b5282,
            connectorId: (0, i.generateRandomId)(6),
            text: this._localeService["t"]("boards-mind-ui.panel.addText"),
          },
          _0x1b5282,
        ),
        true
      );
    }
    return true;
  }
  _isControlEvent(_0x1486e1) {
    if (!this._object || (_0x1486e1.button ?? 0) !== 0) return false;
    let _0x4c7cfd = this._stateService["getState"](),
      _0x46a046 = lt(_0x1486e1, {
        panOffset: _0x4c7cfd.viewportPanOffset,
        zoomRatio: _0x4c7cfd.zoomRatio,
      });
    return !!this._object["getHitControl"](_0x46a046);
  }
  _consumeControlEvent(_0x5499fe, _0x1a73ea) {
    var _0x59b7f2, _0x4f6ea8;
    (_0x1a73ea.stopPropagation(),
      (_0x59b7f2 = _0x5499fe.preventDefault) == null ||
        _0x59b7f2.call(_0x5499fe),
      (_0x4f6ea8 = _0x5499fe.stopPropagation) == null ||
        _0x4f6ea8.call(_0x5499fe));
  }
  _executeAndLayout(_0x562cd5, _0x1eb9ea) {
    let _0x159f23 = this._activeScopeId;
    this._undoRedoGroupService["run"](_0x1eb9ea.unitId, () => {
      !this._commandService["syncExecuteCommand"](_0x562cd5, _0x1eb9ea) ||
        !_0x159f23 ||
        (this._commandService["syncExecuteCommand"](
          t.LayoutMindMapOperation["id"],
          {
            unitId: _0x1eb9ea.unitId,
            subUnitId: _0x1eb9ea.subUnitId,
            scopeId: _0x159f23,
          },
        ),
        this._syncControls());
    });
  }
  _executeCreateAndEdit(_0x495734, _0x338e0e, _0x527d8e) {
    let _0x358c78 = {
        unitId: _0x338e0e.unitId,
        subUnitId: _0x338e0e.subUnitId,
      },
      _0x35e740 = this._commandService["executeCommand"](_0x495734, _0x338e0e);
    Promise.resolve(_0x35e740).then((_0x3b4eb5) => {
      _0x3b4eb5 &&
        (this._syncControls(),
        this._elementStateService["selectElements"](
          _0x358c78,
          [_0x527d8e],
          _0x527d8e,
        ),
        this._boardTextEditingService["ignoreExternalFocusChanges"](),
        this._boardTextEditingService["setEditing"]({
          ..._0x358c78,
          shapeId: _0x527d8e,
          shapeKey: (0, n.getBoardElementRenderObjectKey)(
            _0x358c78.unitId,
            _0x527d8e,
          ),
          visible: true,
        }));
    });
  }
};
ut = S(
  [
    x(1, (0, i.Inject)(e.IBoardElementService)),
    x(2, (0, i.Inject)(n.IBoardElementStateService)),
    x(3, (0, i.Inject)(n.IBoardUIStateService)),
    x(4, i.ICommandService),
    x(5, (0, i.Inject)(n.BoardTextEditingService)),
    x(6, (0, i.Inject)(i.LocaleService)),
    x(7, (0, i.Inject)(J)),
    x(8, (0, i.Inject)(s.UndoRedoGroupService)),
  ],
  ut,
);
const dt = "FOCUSING_MIND_MAP_TEXT_EDITOR";
let X = class extends i.RxDisposable {
  constructor(_0x2991eb, _0x129377) {
    (super(),
      (this._commandService = _0x2991eb),
      (this._shortcutService = _0x129377),
      this._init());
  }
  _init() {
    this.disposeWithMe(
      this._shortcutService["registerShortcut"](this._createQuoteShortcut()),
    );
  }
  _createQuoteShortcut() {
    return {
      id: c.SHAPE_TEXT_EDITOR_QUOTE_COMMAND_ID,
      binding: s.KeyCode["ENTER"] | s.MetaKeys["SHIFT"],
      priority: 1000,
      preconditions: (_0x1881b9) =>
        _0x1881b9.getContextValue("FOCUSING_MIND_MAP_TEXT_EDITOR") &&
        this._commandService["hasCommand"](
          c.SHAPE_TEXT_EDITOR_QUOTE_COMMAND_ID,
        ),
    };
  }
};
X = S([x(0, i.ICommandService), x(1, s.IShortcutService)], X);
const ft = [ue, de, dt];
let pt = class extends i.RxDisposable {
  constructor(_0x34facb, _0x5b300b, _0x4eb4b8, _0x4b00ec, _0x554f94) {
    (super(),
      (this._renderContext = _0x34facb),
      (this._boardElementService = _0x5b300b),
      (this._elementStateService = _0x4eb4b8),
      (this._textEditingService = _0x4b00ec),
      (this._contextService = _0x554f94),
      b(this, "_isActive", false),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._renderContext["activated$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe((_0x40c756) => {
              ((this._isActive = _0x40c756), this._syncContext());
            }),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._elementStateService["state$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe(() => {
              this._syncContext();
            }),
        ),
      ),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._textEditingService["editingParams$"]
            .pipe((0, o.takeUntil)(this.dispose$))
            .subscribe(() => {
              this._syncContext();
            }),
        ),
      ),
      this._syncContext());
  }
  _syncContext() {
    var _0x19707f, _0x2cfd1e;
    let _0x8a814f = this._elementStateService["getSnapshot"](),
      _0x401ee3 = this._textEditingService["getEditing"](),
      _0x1002ee =
        _0x401ee3 != null && _0x401ee3.visible
          ? _0x401ee3.shapeId
          : _0x8a814f.activeEditingId,
      _0x9c7659 = _0x8a814f.focusedId ?? _0x8a814f.selectedIds[0],
      _0x1afbfa = _0x8a814f.context ?? {
        unitId: this._renderContext["unitId"],
        subUnitId: this._renderContext["unit"].getActivePageId(),
      },
      _0x5007fd =
        this._isActive &&
        !!_0x9c7659 &&
        _0x8a814f.selectedIds["length"] === 1 &&
        !_0x1002ee &&
        !_0x8a814f.isTransforming,
      _0x426d41 = this._isActive
        ? this._boardElementService["getElementData"](
            _0x1afbfa.unitId,
            _0x1afbfa.subUnitId,
          )
        : {};
    (this._contextService["setContextValue"](
      ue,
      _0x5007fd &&
        !!(0, t.getMindMapNodeMeta)(
          (_0x19707f = _0x426d41[_0x9c7659]) == null
            ? undefined
            : _0x19707f.element,
        ),
    ),
      this._contextService["setContextValue"](
        de,
        this._isActive &&
          _0x8a814f.selectedIds["length"] === 0 &&
          !_0x8a814f.focusedId &&
          !_0x1002ee &&
          !_0x8a814f.isTransforming,
      ),
      this._contextService["setContextValue"](
        dt,
        !!_0x1002ee &&
          !!(0, t.getMindMapNodeMeta)(
            (_0x2cfd1e = _0x426d41[_0x1002ee]) == null
              ? undefined
              : _0x2cfd1e.element,
          ),
      ));
  }
  dispose() {
    (this._resetContext(), super.dispose());
  }
  _resetContext() {
    ft.forEach((_0x74c68e) =>
      this._contextService["setContextValue"](_0x74c68e, false),
    );
  }
};
pt = S(
  [
    x(1, (0, i.Inject)(e.IBoardElementService)),
    x(2, (0, i.Inject)(n.IBoardElementStateService)),
    x(3, (0, i.Inject)(n.BoardTextEditingService)),
    x(4, i.IContextService),
  ],
  pt,
);
const mt = ["structure", "layout", "importExport"];
(t.MIND_MAP_DEFAULT_LAYOUT["horizontalGap"],
  t.MIND_MAP_DEFAULT_LAYOUT["siblingGap"],
  t.MIND_MAP_DEFAULT_LAYOUT["branchGap"]);
const ht = [
    {
      labelKey: "boards-mind-ui.panel.spacing.parentGap",
      key: "horizontalGap",
      ...t.MIND_MAP_LAYOUT_SPACING_LIMITS["horizontalGap"],
    },
    {
      labelKey: "boards-mind-ui.panel.spacing.siblingGap",
      key: "siblingGap",
      ...t.MIND_MAP_LAYOUT_SPACING_LIMITS["siblingGap"],
    },
    {
      labelKey: "boards-mind-ui.panel.spacing.branchGap",
      key: "branchGap",
      ...t.MIND_MAP_LAYOUT_SPACING_LIMITS["branchGap"],
    },
  ],
  gt = [
    { labelKey: "boards-mind-ui.panel.layout.right", value: "right" },
    { labelKey: "boards-mind-ui.panel.layout.left", value: "left" },
    { labelKey: "boards-mind-ui.panel.layout.both", value: "both" },
  ],
  _t = [
    {
      labelKey: "boards-mind-ui.panel.structureKind.mindmapHorizontal",
      value: "mindmap-horizontal",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.mindmapVertical",
      value: "mindmap-vertical",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.treeRight",
      value: "tree-right",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.treeLeft",
      value: "tree-left",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.treeAlternate",
      value: "tree-alternate",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.timelineHorizontal",
      value: "timeline-horizontal",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.timelineVertical",
      value: "timeline-vertical",
    },
  ],
  vt = [
    { labelKey: "boards-mind-ui.panel.branchLineType.curve", value: "curve" },
    {
      labelKey: "boards-mind-ui.panel.branchLineType.roundedOrthogonal",
      value: "rounded-orthogonal",
    },
    {
      labelKey: "boards-mind-ui.panel.branchLineType.orthogonal",
      value: "orthogonal",
    },
  ];
function yt(_0x293353) {
  let _0x342b58 =
    (_0x293353 == null ? undefined : _0x293353.structureKind) ??
    t.MIND_MAP_DEFAULT_LAYOUT["structureKind"];
  return {
    spacing: {
      horizontalGap:
        (_0x293353 == null ? undefined : _0x293353.horizontalGap) ??
        t.MIND_MAP_DEFAULT_LAYOUT["horizontalGap"],
      siblingGap:
        (_0x293353 == null ? undefined : _0x293353.siblingGap) ??
        t.MIND_MAP_DEFAULT_LAYOUT["siblingGap"],
      branchGap:
        (_0x293353 == null ? undefined : _0x293353.branchGap) ??
        t.MIND_MAP_DEFAULT_LAYOUT["branchGap"],
    },
    direction:
      (_0x293353 == null ? undefined : _0x293353.direction) ??
      t.MIND_MAP_DEFAULT_LAYOUT["direction"],
    structureKind: _0x342b58,
    branchLineType: (0, t.resolveMindMapBranchLineTypeForStructure)(
      _0x342b58,
      _0x293353 == null ? undefined : _0x293353.branchLineType,
    ),
  };
}
async function bt(_0x462828, _0x24d1f3) {
  return (await Promise.resolve(
    _0x462828.executeCommand(t.ChangeMindMapLayoutOperation["id"], _0x24d1f3),
  ))
    ? (await Promise.resolve(
        _0x462828.executeCommand(t.LayoutMindMapOperation["id"], {
          unitId: _0x24d1f3.unitId,
          subUnitId: _0x24d1f3.subUnitId,
          scopeId: _0x24d1f3.scopeId,
        }),
      ),
      true)
    : false;
}
async function xt(_0x492c7e, _0x3f1319) {
  return (await Promise.resolve(
    _0x492c7e.executeCommand(
      t.ChangeMindMapBranchLineTypeOperation["id"],
      _0x3f1319,
    ),
  ))
    ? (await Promise.resolve(
        _0x492c7e.executeCommand(t.LayoutMindMapOperation["id"], {
          unitId: _0x3f1319.unitId,
          subUnitId: _0x3f1319.subUnitId,
          scopeId: _0x3f1319.scopeId,
        }),
      ),
      true)
    : false;
}
async function St(_0x2c78e2, _0x552adc) {
  return (await Promise.resolve(
    _0x2c78e2.executeCommand(t.ChangeMindMapLayoutOperation["id"], {
      unitId: _0x552adc.unitId,
      subUnitId: _0x552adc.subUnitId,
      scopeId: _0x552adc.scopeId,
      ...(_0x552adc.horizontalGap === undefined
        ? {}
        : { horizontalGap: _0x552adc.horizontalGap }),
      ...(_0x552adc.siblingGap === undefined
        ? {}
        : { siblingGap: _0x552adc.siblingGap }),
      ...(_0x552adc.branchGap === undefined
        ? {}
        : { branchGap: _0x552adc.branchGap }),
    }),
  ))
    ? (await Promise.resolve(
        _0x2c78e2.executeCommand(t.LayoutMindMapOperation["id"], {
          unitId: _0x552adc.unitId,
          subUnitId: _0x552adc.subUnitId,
          scopeId: _0x552adc.scopeId,
        }),
      ),
      true)
    : false;
}
async function Ct(_0x8b7ef8, _0x1ee67e) {
  return _0x1ee67e.nodeId === _0x1ee67e.targetNodeId ||
    !(await Promise.resolve(
      _0x8b7ef8.executeCommand(t.ReparentMindMapNodeOperation["id"], {
        unitId: _0x1ee67e.unitId,
        subUnitId: _0x1ee67e.subUnitId,
        nodeId: _0x1ee67e.nodeId,
        targetNodeId: _0x1ee67e.targetNodeId,
        referenceNodeId: _0x1ee67e.targetNodeId,
        placement: _0x1ee67e.placement,
      }),
    ))
    ? false
    : (await Promise.resolve(
        _0x8b7ef8.executeCommand(t.LayoutMindMapOperation["id"], {
          unitId: _0x1ee67e.unitId,
          subUnitId: _0x1ee67e.subUnitId,
          scopeId: _0x1ee67e.scopeId,
        }),
      ),
      true);
}
async function wt(_0x26e3be, _0x198dc2) {
  let _0x3ed122 = _0x198dc2.text["trim"]();
  return !_0x3ed122 ||
    !(await Promise.resolve(
      _0x26e3be.executeCommand(t.UpdateMindMapNodeOperation["id"], {
        unitId: _0x198dc2.unitId,
        subUnitId: _0x198dc2.subUnitId,
        nodeId: _0x198dc2.nodeId,
        text: _0x3ed122,
      }),
    ))
    ? false
    : (await Promise.resolve(
        _0x26e3be.executeCommand(t.LayoutMindMapOperation["id"], {
          unitId: _0x198dc2.unitId,
          subUnitId: _0x198dc2.subUnitId,
          scopeId: _0x198dc2.scopeId,
        }),
      ),
      true);
}
async function Tt(_0x55d2a1) {
  var _0x4a7b19;
  let _0x2809ab =
    (_0x4a7b19 = globalThis.navigator) == null
      ? undefined
      : _0x4a7b19.clipboard;
  return _0x2809ab != null && _0x2809ab.writeText
    ? (await _0x2809ab.writeText(_0x55d2a1), true)
    : false;
}
async function Et(_0x5539b8, _0x25ca94, _0xe2bde6 = Tt) {
  let _0x2a525b = await Promise.resolve(
    _0x5539b8.executeCommand(t.ExportMindMapOpmlOperation["id"], _0x25ca94),
  );
  if (typeof _0x2a525b != "string" || !_0x2a525b) return false;
  try {
    return (await _0xe2bde6(_0x2a525b)) !== false;
  } catch {
    return false;
  }
}
async function Dt(_0x3ff9bf, _0x161a1b) {
  if (!_0x161a1b.opml["trim"]()) return false;
  let _0x435a40 = await Promise.resolve(
    _0x3ff9bf.executeCommand(t.ImportMindMapOpmlOperation["id"], _0x161a1b),
  );
  return (
    typeof _0x435a40 == "object" && !!_0x435a40 && _0x435a40.success === true
  );
}
function Ot(_0x3dc087, _0x3d497c) {
  let _0x2332bc = _0x3d497c.trim().toLowerCase();
  return _0x2332bc
    ? _0x3dc087.filter((_0x244b2c) =>
        _0x244b2c.text["toLowerCase"]().includes(_0x2332bc),
      )
    : _0x3dc087;
}
function kt(_0x786e19) {
  return {
    paddingInlineStart:
      8 + (Number.isFinite(_0x786e19) && _0x786e19 > 0 ? _0x786e19 : 0) * 16,
  };
}
function At(_0x4c799c) {
  return (0, p.jsxs)("section", {
    className: (0, u.clsx)(
      "univer-border-b univer-border-gray-200 univer-p-4",
      u.borderClassName,
    ),
    "data-board-mind-map-panel-section": "true",
    children: [
      (0, p.jsx)("h3", {
        className:
          "univer-mb-3 univer-text-sm univer-font-semibold univer-text-gray-900 dark:!univer-text-gray-100",
        children: _0x4c799c.title,
      }),
      _0x4c799c.children,
    ],
  });
}
function jt(_0xe12636) {
  let _0x31a665 = (0, s.useDependency)(i.ICommandService),
    _0x4e8a93 = (0, s.useDependency)(n.IBoardElementStateService),
    _0x3cfc2a = (0, s.useDependency)(i.LocaleService),
    _0x53361e = _0xe12636.outlineItems ?? [],
    [_0x152e62, _0x5b7e1d] = (0, f.useState)(""),
    [_0x15db32, _0x34979c] = (0, f.useState)(null),
    [_0x559708, _0x5b1c43] = (0, f.useState)(""),
    _0x4d0d92 = yt(_0xe12636.layout),
    [_0x3d7a47, _0x26a9f8] = (0, f.useState)(_0x4d0d92.spacing),
    [_0x36adac, _0x6a3c82] = (0, f.useState)(_0x4d0d92.direction),
    [_0x5f59c9, _0x3a45d1] = (0, f.useState)(_0x4d0d92.structureKind),
    [_0x92d167, _0xa0d0e8] = (0, f.useState)(_0x4d0d92.branchLineType),
    [_0x51baa8, _0x31923c] = (0, f.useState)({
      layout: _0xe12636.layout,
      scopeId: _0xe12636.scopeId,
    }),
    [_0x10a649, _0x134f64] = (0, f.useState)(null),
    [_0x183cd8, _0x5758eb] = (0, f.useState)("structure"),
    _0x3d5096 = Ot(_0x53361e, _0x152e62),
    _0xe28d8a = {
      unitId: _0xe12636.unitId,
      subUnitId: _0xe12636.subUnitId,
      scopeId: _0xe12636.scopeId,
    },
    _0x1b3a2d = mt.map((_0x3480a7) => ({
      label: _0x3cfc2a.t("boards-mind-ui.panel.tab." + _0x3480a7),
      value: _0x3480a7,
    })),
    _0x2fb585 = vt.filter(
      (_0x13cd2d) =>
        _0x13cd2d.value !== "curve" ||
        (0, t.isMindMapPlainStructureKind)(_0x5f59c9),
    ),
    _0x328524 = (_0x4ddddf) => {
      (_0x6a3c82(_0x4ddddf),
        bt(_0x31a665, { ..._0xe28d8a, direction: _0x4ddddf }));
    };
  if (
    _0x51baa8.layout !== _0xe12636.layout ||
    _0x51baa8.scopeId !== _0xe12636.scopeId
  ) {
    let _0x316fdf = yt(_0xe12636.layout);
    (_0x31923c({ layout: _0xe12636.layout, scopeId: _0xe12636.scopeId }),
      _0x26a9f8(_0x316fdf.spacing),
      _0x6a3c82(_0x316fdf.direction),
      _0x3a45d1(_0x316fdf.structureKind),
      _0xa0d0e8(_0x316fdf.branchLineType));
  }
  let _0xf9541c = (_0x5487cb) => {
      let _0x6c7bca = (0, t.resolveMindMapBranchLineTypeForStructure)(
        _0x5487cb,
        _0x92d167,
      );
      (_0x3a45d1(_0x5487cb),
        _0xa0d0e8(_0x6c7bca),
        bt(_0x31a665, {
          ..._0xe28d8a,
          structureKind: _0x5487cb,
          ...(_0x6c7bca === _0x92d167 ? null : { branchLineType: _0x6c7bca }),
        }));
    },
    _0x17c5cd = (_0x501f91) => {
      let _0x29ef1d = (0, t.resolveMindMapBranchLineTypeForStructure)(
        _0x5f59c9,
        _0x501f91,
      );
      (_0xa0d0e8(_0x29ef1d),
        xt(_0x31a665, { ..._0xe28d8a, branchLineType: _0x29ef1d }));
    },
    _0x14d59a = (_0x36fe3b, _0x4db0fb) => {
      let _0x187360 = { ..._0x3d7a47, [_0x36fe3b]: _0x4db0fb };
      (_0x26a9f8(_0x187360), St(_0x31a665, { ..._0xe28d8a, ..._0x187360 }));
    },
    _0x4798b9 = () => {
      Dt(_0x31a665, {
        unitId: _0xe12636.unitId,
        subUnitId: _0xe12636.subUnitId,
        left: 120,
        top: 120,
        opml: _0x559708,
      }).then((_0x5685d9) => {
        _0x5685d9 && _0x5b1c43("");
      });
    },
    _0x2d4573 = () => {
      Et(_0x31a665, _0xe28d8a);
    },
    _0x4b9291 = (_0x27cda6, _0x543c20) => {
      _0x34979c({ nodeId: _0x27cda6, text: _0x543c20 });
    },
    _0x583dd4 = () => {
      _0x15db32 &&
        wt(_0x31a665, {
          ..._0xe28d8a,
          nodeId: _0x15db32.nodeId,
          text: _0x15db32.text,
        }).then((_0x31742c) => {
          _0x31742c && _0x34979c(null);
        });
    },
    _0x21201f = (_0x343293, _0x50482a) => {
      if ((_0x343293.preventDefault(), !_0x10a649 || _0x10a649 === _0x50482a))
        return;
      let _0x4e5202 = _0x343293.currentTarget["getBoundingClientRect"](),
        _0x3f2865 =
          _0x343293.clientY < _0x4e5202.top + _0x4e5202.height / 2
            ? "before"
            : "after";
      (_0x134f64(null),
        Ct(_0x31a665, {
          ..._0xe28d8a,
          nodeId: _0x10a649,
          targetNodeId: _0x50482a,
          placement: _0x3f2865,
        }));
    };
  return (0, p.jsxs)("div", {
    className:
      "univer-size-full univer-bg-gray-0 univer-text-sm univer-text-gray-700 dark:!univer-bg-gray-900 dark:!univer-text-gray-200",
    "data-board-mind-map-panel": "true",
    children: [
      (0, p.jsx)("div", {
        className: (0, u.clsx)(
          "univer-border-b univer-border-gray-200 univer-p-3",
          u.borderClassName,
        ),
        "data-board-mind-map-panel-tabs": "true",
        children: (0, p.jsx)(u.Segmented, {
          className: "univer-w-full univer-text-xs",
          items: _0x1b3a2d,
          value: _0x183cd8,
          onChange: (_0x8a09e3) => _0x5758eb(_0x8a09e3),
        }),
      }),
      _0x183cd8 === "structure" &&
        (0, p.jsx)(At, {
          title: _0x3cfc2a.t("boards-mind-ui.panel.tab.structure"),
          children: (0, p.jsxs)("div", {
            children: [
              (0, p.jsx)(u.Input, {
                slot: (0, p.jsx)(d.SearchIcon, {}),
                value: _0x152e62,
                placeholder: _0x3cfc2a.t("boards-mind-ui.panel.searchNodes"),
                className: "univer-mb-3 univer-w-full",
                onChange: _0x5b7e1d,
              }),
              _0x3d5096.length
                ? (0, p.jsx)("ol", {
                    className: "univer-space-y-1",
                    children: _0x3d5096.map((_0x3258f3) =>
                      (0, p.jsx)(
                        "li",
                        {
                          draggable: true,
                          className:
                            "univer-flex univer-items-center univer-gap-1 univer-truncate univer-rounded univer-py-1 univer-text-left univer-text-gray-800",
                          style: kt(_0x3258f3.depth),
                          onDragStart: (_0x3b83ad) => {
                            var _0x213e4e;
                            (_0x134f64(_0x3258f3.nodeId),
                              (_0x213e4e = _0x3b83ad.dataTransfer) == null ||
                                _0x213e4e.setData(
                                  "text/plain",
                                  _0x3258f3.nodeId,
                                ),
                              _0x3b83ad.dataTransfer &&
                                (_0x3b83ad.dataTransfer["effectAllowed"] =
                                  "move"));
                          },
                          onDragOver: (_0xcbdd04) => {
                            (_0xcbdd04.preventDefault(),
                              _0xcbdd04.dataTransfer &&
                                (_0xcbdd04.dataTransfer["dropEffect"] =
                                  "move"));
                          },
                          onDrop: (_0x50fea8) =>
                            _0x21201f(_0x50fea8, _0x3258f3.nodeId),
                          onDragEnd: () => _0x134f64(null),
                          children:
                            (_0x15db32 == null
                              ? undefined
                              : _0x15db32.nodeId) === _0x3258f3.nodeId
                              ? (0, p.jsxs)("div", {
                                  className:
                                    "univer-flex univer-min-w-0 univer-flex-1 univer-items-center univer-gap-1",
                                  children: [
                                    (0, p.jsx)(u.Input, {
                                      autoFocus: true,
                                      size: "small",
                                      value: _0x15db32.text,
                                      onChange: (_0x1faf6d) =>
                                        _0x34979c({
                                          nodeId: _0x3258f3.nodeId,
                                          text: _0x1faf6d,
                                        }),
                                      onKeyDown: (_0x44784e) => {
                                        (_0x44784e.key === "Enter" &&
                                          _0x583dd4(),
                                          _0x44784e.key === "Escape" &&
                                            _0x34979c(null));
                                      },
                                    }),
                                    (0, p.jsx)(u.Button, {
                                      size: "small",
                                      variant: "primary",
                                      disabled: !_0x15db32.text["trim"](),
                                      onClick: _0x583dd4,
                                      children: _0x3cfc2a.t(
                                        "boards-mind-ui.panel.rename",
                                      ),
                                    }),
                                    (0, p.jsx)(u.Button, {
                                      size: "small",
                                      variant: "default",
                                      onClick: () => _0x34979c(null),
                                      children: _0x3cfc2a.t(
                                        "boards-mind-ui.panel.cancel",
                                      ),
                                    }),
                                  ],
                                })
                              : (0, p.jsxs)(p.Fragment, {
                                  children: [
                                    (0, p.jsx)(u.Button, {
                                      size: "small",
                                      variant: "ghost",
                                      className:
                                        "univer-min-w-0 univer-flex-1 univer-justify-start univer-truncate univer-text-left",
                                      onClick: () =>
                                        _0x4e8a93.selectElements(
                                          {
                                            unitId: _0xe12636.unitId,
                                            subUnitId: _0xe12636.subUnitId,
                                          },
                                          [_0x3258f3.nodeId],
                                          _0x3258f3.nodeId,
                                        ),
                                      children: _0x3258f3.text,
                                    }),
                                    (0, p.jsx)(u.Button, {
                                      className:
                                        "univer-text-xs univer-text-gray-500",
                                      size: "small",
                                      variant: "default",
                                      onClick: () =>
                                        _0x4b9291(
                                          _0x3258f3.nodeId,
                                          _0x3258f3.text,
                                        ),
                                      children: _0x3cfc2a.t(
                                        "boards-mind-ui.panel.rename",
                                      ),
                                    }),
                                  ],
                                }),
                        },
                        _0x3258f3.nodeId,
                      ),
                    ),
                  })
                : (0, p.jsx)("div", {
                    className:
                      "univer-text-xs univer-text-gray-400 dark:!univer-text-gray-500",
                    "data-board-mind-map-panel-empty-state": "true",
                    children: _0x3cfc2a.t("boards-mind-ui.panel.emptyNodes"),
                  }),
            ],
          }),
        }),
      _0x183cd8 === "layout" &&
        (0, p.jsx)(At, {
          title: _0x3cfc2a.t("boards-mind-ui.panel.tab.layout"),
          children: (0, p.jsxs)("div", {
            className: "univer-space-y-3",
            children: [
              (0, p.jsx)("div", {
                className: "univer-flex\x20univer-gap-2",
                children: (0, p.jsx)(u.Segmented, {
                  className: "univer-w-full univer-text-xs",
                  items: _t.map((_0x5e5fda) => ({
                    label: _0x3cfc2a.t(_0x5e5fda.labelKey),
                    value: _0x5e5fda.value,
                  })),
                  value: _0x5f59c9,
                  onChange: (_0x26e158) => _0xf9541c(_0x26e158),
                }),
              }),
              (0, p.jsx)("div", {
                className: "univer-flex univer-gap-2",
                children: (0, p.jsx)(u.Segmented, {
                  className: "univer-w-full\x20univer-text-xs",
                  items: gt.map((_0x572bec) => ({
                    label: _0x3cfc2a.t(_0x572bec.labelKey),
                    value: _0x572bec.value,
                  })),
                  value: _0x36adac,
                  onChange: (_0x1fa741) => _0x328524(_0x1fa741),
                }),
              }),
              (0, p.jsx)("div", {
                className: "univer-flex\x20univer-gap-2",
                children: (0, p.jsx)(u.Segmented, {
                  className: "univer-w-full univer-text-xs",
                  items: _0x2fb585.map((_0x15d902) => ({
                    label: _0x3cfc2a.t(_0x15d902.labelKey),
                    value: _0x15d902.value,
                  })),
                  value: _0x92d167,
                  onChange: (_0x347351) => _0x17c5cd(_0x347351),
                }),
              }),
              (0, p.jsx)("div", {
                className: "univer-space-y-2",
                children: ht.map(
                  ({
                    labelKey: _0x3134ca,
                    key: _0x2e965,
                    min: _0x49b9ec,
                    max: _0x4083f2,
                  }) =>
                    (0, p.jsxs)(
                      "label",
                      {
                        className:
                          "univer-flex univer-items-center univer-gap-2 univer-text-xs univer-text-gray-600",
                        children: [
                          (0, p.jsx)("span", {
                            className: "univer-w-20 univer-shrink-0",
                            children: _0x3cfc2a.t(
                              "boards-mind-ui.panel." + _0x3134ca,
                            ),
                          }),
                          (0, p.jsx)(u.InputNumber, {
                            min: _0x49b9ec,
                            max: _0x4083f2,
                            step: 4,
                            value: _0x3d7a47[_0x2e965],
                            precision: 0,
                            className: "univer-w-24",
                            onChange: (_0x430702) =>
                              _0x14d59a(
                                _0x2e965,
                                Number(_0x430702 ?? _0x49b9ec),
                              ),
                          }),
                        ],
                      },
                      _0x2e965,
                    ),
                ),
              }),
            ],
          }),
        }),
      _0x183cd8 === "importExport" &&
        (0, p.jsx)(At, {
          title: _0x3cfc2a.t("boards-mind-ui.panel.tab.importExport"),
          children: (0, p.jsxs)("div", {
            className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
            children: [
              (0, p.jsx)(u.Textarea, {
                className:
                  "univer-h-28\x20univer-resize-none\x20univer-text-xs",
                placeholder: _0x3cfc2a.t("boards-mind-ui.panel.pasteOPML"),
                value: _0x559708,
                onValueChange: _0x5b1c43,
              }),
              (0, p.jsxs)("div", {
                className: "univer-flex univer-gap-2",
                children: [
                  (0, p.jsx)(u.Button, {
                    size: "small",
                    variant: "primary",
                    disabled: !_0x559708.trim(),
                    onClick: _0x4798b9,
                    children: _0x3cfc2a.t("boards-mind-ui.panel.importOPML"),
                  }),
                  (0, p.jsx)(u.Button, {
                    size: "small",
                    variant: "default",
                    onClick: _0x2d4573,
                    children: _0x3cfc2a.t("boards-mind-ui.panel.exportOPML"),
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
let Z = class extends i.Disposable {
  constructor(_0x599ad5) {
    (super(), (this._componentManager = _0x599ad5), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](se, le)),
      this.disposeWithMe(this._componentManager["register"](Se, Le)),
      this.disposeWithMe(
        this._componentManager["register"]("board.mind-map.panel", jt),
      ));
  }
};
Z = S([x(0, (0, i.Inject)(s.ComponentManager))], Z);
let Q = class {
  constructor(_0x48c22c, _0x4053a6, _0x2046c7) {
    ((this._stateService = _0x48c22c),
      (this._insertStateService = _0x4053a6),
      (this._renderManagerService = _0x2046c7));
  }
  beginMindMapMode(_0x177097) {
    var _0x3990c0, _0x148174;
    let _0x55f00c =
        (_0x3990c0 = this._renderManagerService["getRenderUnitById"](
          _0x177097.unitId,
        )) == null || (_0x148174 = _0x3990c0.getInjector) == null
          ? undefined
          : _0x148174.call(_0x3990c0),
      _0x304b96 =
        (_0x55f00c == null
          ? undefined
          : _0x55f00c.get(n.IBoardUIStateService)) ?? this._stateService;
    return (
      (
        (_0x55f00c == null ? undefined : _0x55f00c.get(q)) ??
        this._insertStateService
      ).setTemplate({
        rootText: _0x177097.rootText,
        structureKind: _0x177097.structureKind,
        branchLineType: _0x177097.branchLineType,
        children: _0x177097.children,
        blueprint: _0x177097.blueprint,
      }),
      _0x304b96.setShapeSidebarOpen(false),
      _0x304b96.clearPendingInsert(),
      _0x304b96.setActiveTool(e.BoardToolType["MindMap"]),
      _0x304b96.setPendingInsert({ type: e.BoardToolType["MindMap"] }),
      true
    );
  }
};
Q = S(
  [
    x(0, n.IBoardUIStateService),
    x(1, (0, i.Inject)(q)),
    x(2, a.IRenderManagerService),
  ],
  Q,
);
const Mt = [H],
  Nt = [pt];
let $ = class extends i.Plugin {
  constructor(_0x32ca5c = g, _0x50844d, _0xb915d4, _0x235375) {
    (super(),
      (this._config = _0x32ca5c),
      (this._injector = _0x50844d),
      (this._configService = _0xb915d4),
      (this._renderManagerService = _0x235375));
    let { ..._0x465991 } = (0, i.merge)({}, g, this._config);
    this._configService["setConfig"]("boards-mind-ui.config", _0x465991);
  }
  onStarting() {
    (n.UniverBoardsUIPlugin["registerRuntimeScopedDependencies"](
      this._injector,
      [[q], [J]],
    ),
      this._injector["add"]([q]),
      this._injector["add"]([J]),
      this._injector["add"]([Q]),
      this._injector["add"]([W]),
      this._injector["add"]([X]),
      this._injector["add"]([Z]));
    let _0x58c968 = this._injector["get"](Q),
      _0x3f91b7 = this._injector["get"](e.IBoardMindMapAdapterService);
    (this.disposeWithMe(_0x3f91b7.registerAdapter(_0x58c968)),
      this.disposeWithMe(this._injector["get"](W)),
      this.disposeWithMe(this._injector["get"](X)),
      this.disposeWithMe(this._injector["get"](Z)),
      this._enableMindMapToolbarTool());
  }
  onReady() {
    (this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        i.UniverInstanceType["UNIVER_BOARD"],
        Mt,
      ),
    ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          i.UniverInstanceType["UNIVER_BOARD"],
          Nt,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          i.UniverInstanceType["UNIVER_BOARD"],
          Qe,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          i.UniverInstanceType["UNIVER_BOARD"],
          ut,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          i.UniverInstanceType["UNIVER_BOARD"],
          ze,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          i.UniverInstanceType["UNIVER_BOARD"],
          oe,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          i.UniverInstanceType["UNIVER_BOARD"],
          C,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          i.UniverInstanceType["UNIVER_BOARD"],
          tt,
        ),
      ));
  }
  _enableMindMapToolbarTool() {
    var _0x4a1065, _0x4b0a5b;
    let _0x12f480 = this._getBoardsUIConfig();
    this._configService["setConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY, {
      ..._0x12f480,
      toolbar: {
        ..._0x12f480.toolbar,
        tools: {
          ...((_0x4a1065 = _0x12f480.toolbar) == null
            ? undefined
            : _0x4a1065.tools),
          [e.BoardToolType["MindMap"]]: Pt(
            (_0x4b0a5b = _0x12f480.toolbar) == null ||
              (_0x4b0a5b = _0x4b0a5b.tools) == null
              ? undefined
              : _0x4b0a5b[e.BoardToolType["MindMap"]],
          ),
        },
      },
    });
  }
  _getBoardsUIConfig() {
    return (
      this._configService["getConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? {}
    );
  }
};
(b($, "pluginName", "UNIVER_BOARDS_MIND_UI_PLUGIN"),
  b($, "packageName", m),
  b($, "version", h),
  b($, "type", i.UniverInstanceType["UNIVER_BOARD"]),
  ($ = S(
    [
      (0, i.DependentOn)(
        r.UniverLicensePlugin,
        a.UniverRenderEnginePlugin,
        e.UniverBoardsPlugin,
        t.UniverBoardsMindPlugin,
        n.UniverBoardsUIPlugin,
      ),
      x(1, (0, i.Inject)(i.Injector)),
      x(2, i.IConfigService),
      x(3, a.IRenderManagerService),
    ],
    $,
  )));
function Pt(_0xd39e6b) {
  return _0xd39e6b === false
    ? false
    : typeof _0xd39e6b != "object" || {
        ..._0xd39e6b,
        enabled: _0xd39e6b.enabled ?? true,
      };
}
Object.defineProperty(exports, "UniverBoardsMindUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  },
});
