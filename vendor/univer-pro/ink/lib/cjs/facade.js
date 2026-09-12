Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/boards/facade"),
  n = require("@univerjs-pro/ink"),
  r = require("@univerjs/core"),
  i = require("@univerjs/core/facade");
var a = class extends t.FBoard {
  insertInk(_0x5787ab) {
    let _0x568674 = o(_0x5787ab);
    return _0x568674 &&
      this._addElement(_0x568674, { insertIndex: _0x5787ab.insertIndex })
      ? _0x568674
      : null;
  }
  getInks() {
    return this.findElements({
      elementType: e.BoardElementType["Shape"],
      includeHidden: true,
      includeLocked: true,
    }).filter(f);
  }
};
function o(_0x35801, _0x167e2e) {
  if (
    !c(_0x35801.model) ||
    (_0x35801.sourceModel !== undefined && !c(_0x35801.sourceModel)) ||
    !l(_0x35801.style)
  )
    return null;
  let _0x2d4f05 =
      _0x35801.parentId ?? (_0x167e2e == null ? undefined : _0x167e2e.parentId),
    _0x172ca2 = r.Tools["deepClone"](_0x35801.model),
    _0x24dea5 = (0, n.buildInkCustomShapePayload)({
      model: _0x172ca2,
      style: _0x35801.style,
      tool: _0x35801.tool,
      sourceModel: _0x35801.sourceModel
        ? r.Tools["deepClone"](_0x35801.sourceModel)
        : _0x172ca2,
    }),
    _0x1e9c29 = u(_0x167e2e == null ? undefined : _0x167e2e.custom);
  return {
    id:
      (_0x167e2e == null ? undefined : _0x167e2e.id) ??
      _0x35801.id ??
      (0, r.generateRandomId)(6),
    type: e.BoardElementType["Shape"],
    transform: _0x24dea5.transform,
    shapeData: _0x24dea5.shapeData,
    parentId: _0x2d4f05 ?? undefined,
    laneId:
      _0x35801.laneId === undefined
        ? _0x167e2e == null
          ? undefined
          : _0x167e2e.laneId
        : _0x35801.laneId,
    custom: { ..._0x1e9c29, ink: _0x24dea5.ink },
  };
}
function s(_0x47cdf9) {
  return Number.isFinite(_0x47cdf9.x) && Number.isFinite(_0x47cdf9.y);
}
function c(_0x5b1374) {
  if (_0x5b1374.kind === "pen") {
    let _0x441ee7 = new Set();
    return (
      _0x5b1374.anchors["length"] >= (_0x5b1374.closed ? 3 : 2) &&
      _0x5b1374.anchors["every"]((_0x1425fc) => {
        let _0x283a04 =
          _0x1425fc.id["trim"]().length > 0 &&
          !_0x441ee7.has(_0x1425fc.id) &&
          s(_0x1425fc) &&
          (!_0x1425fc.in || s(_0x1425fc.in)) &&
          (!_0x1425fc.out || s(_0x1425fc.out));
        return (_0x441ee7.add(_0x1425fc.id), _0x283a04);
      })
    );
  }
  return (
    _0x5b1374.points["length"] >= 2 &&
    _0x5b1374.points["every"](
      (_0x17df82) =>
        s(_0x17df82) &&
        Number.isFinite(_0x17df82.t) &&
        (_0x17df82.pressure === undefined ||
          Number.isFinite(_0x17df82.pressure)),
    ) &&
    Number.isFinite(_0x5b1374.width) &&
    _0x5b1374.width > 0 &&
    Number.isFinite(_0x5b1374.opacity) &&
    _0x5b1374.opacity >= 0 &&
    _0x5b1374.opacity <= 1
  );
}
function l(_0x33cc6c) {
  return (
    _0x33cc6c === undefined ||
    ((_0x33cc6c.width === undefined ||
      (Number.isFinite(_0x33cc6c.width) && _0x33cc6c.width > 0)) &&
      (_0x33cc6c.opacity === undefined ||
        (Number.isFinite(_0x33cc6c.opacity) &&
          _0x33cc6c.opacity >= 0 &&
          _0x33cc6c.opacity <= 1)))
  );
}
function u(_0x420329) {
  return _0x420329 && typeof _0x420329 == "object" && !Array.isArray(_0x420329)
    ? _0x420329
    : {};
}
function d(_0x41cb0f) {
  let _0x5a1908 = u(_0x41cb0f.custom).ink;
  if (!_0x5a1908 || typeof _0x5a1908 != "object" || Array.isArray(_0x5a1908))
    return null;
  let _0x289de7 = _0x5a1908;
  return _0x289de7.version === 1 &&
    _0x289de7.sourceModel &&
    typeof _0x289de7.sourceModel == "object"
    ? _0x289de7
    : null;
}
function f(_0x505ccd) {
  return _0x505ccd.type === e.BoardElementType["Shape"] && !!d(_0x505ccd);
}
t.FBoard["extend"](a);
const p = { Pen: "pen", Brush: "brush", Highlighter: "highlighter" },
  m = {
    Corner: "corner",
    Smooth: "smooth",
    Symmetric: "symmetric",
    Free: "free",
  },
  h = { Anchor: "anchor", In: "in", Out: "out" };
var g = class extends i.FEnum {
  get BoardInkTool() {
    return p;
  }
  get BoardInkPointType() {
    return m;
  }
  get BoardInkHandleKind() {
    return h;
  }
};
(i.FEnum["extend"](g),
  (exports.BoardInkHandleKind = h),
  (exports.BoardInkPointType = m),
  (exports.BoardInkTool = p));
