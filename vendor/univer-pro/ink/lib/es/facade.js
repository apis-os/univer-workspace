import { BoardElementType as _0x594384 } from "@univerjs-pro/boards";
import { FBoard as _0x210c83 } from "@univerjs-pro/boards/facade";
import { buildInkCustomShapePayload as _0x242ca7 } from "@univerjs-pro/ink";
import {
  Tools as _0x3bb733,
  generateRandomId as _0x1593ae,
} from "@univerjs/core";
import { FEnum as _0x5c1a99 } from "@univerjs/core/facade";
var o = class extends _0x210c83 {
  insertInk(_0x5157de) {
    let _0x145c57 = s(_0x5157de);
    return _0x145c57 &&
      this._addElement(_0x145c57, { insertIndex: _0x5157de.insertIndex })
      ? _0x145c57
      : null;
  }
  getInks() {
    return this.findElements({
      elementType: _0x594384.Shape,
      includeHidden: true,
      includeLocked: true,
    }).filter(p);
  }
};
function s(_0x5a4c05, _0x4e78d9) {
  if (
    !l(_0x5a4c05.model) ||
    (_0x5a4c05.sourceModel !== undefined && !l(_0x5a4c05.sourceModel)) ||
    !u(_0x5a4c05.style)
  )
    return null;
  let _0x4240b7 =
      _0x5a4c05.parentId ??
      (_0x4e78d9 == null ? undefined : _0x4e78d9.parentId),
    _0x126bfc = _0x3bb733.deepClone(_0x5a4c05.model),
    _0x492a0a = _0x242ca7({
      model: _0x126bfc,
      style: _0x5a4c05.style,
      tool: _0x5a4c05.tool,
      sourceModel: _0x5a4c05.sourceModel
        ? _0x3bb733.deepClone(_0x5a4c05.sourceModel)
        : _0x126bfc,
    }),
    _0x590369 = d(_0x4e78d9 == null ? undefined : _0x4e78d9.custom);
  return {
    id:
      (_0x4e78d9 == null ? undefined : _0x4e78d9.id) ??
      _0x5a4c05.id ??
      _0x1593ae(6),
    type: _0x594384.Shape,
    transform: _0x492a0a.transform,
    shapeData: _0x492a0a.shapeData,
    parentId: _0x4240b7 ?? undefined,
    laneId:
      _0x5a4c05.laneId === undefined
        ? _0x4e78d9 == null
          ? undefined
          : _0x4e78d9.laneId
        : _0x5a4c05.laneId,
    custom: { ..._0x590369, ink: _0x492a0a.ink },
  };
}
function c(_0x41c010) {
  return Number.isFinite(_0x41c010.x) && Number.isFinite(_0x41c010.y);
}
function l(_0x23983f) {
  if (_0x23983f.kind === "pen") {
    let _0x1a067c = new Set();
    return (
      _0x23983f.anchors["length"] >= (_0x23983f.closed ? 3 : 2) &&
      _0x23983f.anchors["every"]((_0x74b0b5) => {
        let _0xe8fe9a =
          _0x74b0b5.id["trim"]().length > 0 &&
          !_0x1a067c.has(_0x74b0b5.id) &&
          c(_0x74b0b5) &&
          (!_0x74b0b5.in || c(_0x74b0b5.in)) &&
          (!_0x74b0b5.out || c(_0x74b0b5.out));
        return (_0x1a067c.add(_0x74b0b5.id), _0xe8fe9a);
      })
    );
  }
  return (
    _0x23983f.points["length"] >= 2 &&
    _0x23983f.points["every"](
      (_0x45a506) =>
        c(_0x45a506) &&
        Number.isFinite(_0x45a506.t) &&
        (_0x45a506.pressure === undefined ||
          Number.isFinite(_0x45a506.pressure)),
    ) &&
    Number.isFinite(_0x23983f.width) &&
    _0x23983f.width > 0 &&
    Number.isFinite(_0x23983f.opacity) &&
    _0x23983f.opacity >= 0 &&
    _0x23983f.opacity <= 1
  );
}
function u(_0x2df303) {
  return (
    _0x2df303 === undefined ||
    ((_0x2df303.width === undefined ||
      (Number.isFinite(_0x2df303.width) && _0x2df303.width > 0)) &&
      (_0x2df303.opacity === undefined ||
        (Number.isFinite(_0x2df303.opacity) &&
          _0x2df303.opacity >= 0 &&
          _0x2df303.opacity <= 1)))
  );
}
function d(_0x624ec0) {
  return _0x624ec0 && typeof _0x624ec0 == "object" && !Array.isArray(_0x624ec0)
    ? _0x624ec0
    : {};
}
function f(_0x2f83fb) {
  let _0xc2f1a = d(_0x2f83fb.custom).ink;
  if (!_0xc2f1a || typeof _0xc2f1a != "object" || Array.isArray(_0xc2f1a))
    return null;
  let _0x1dba1d = _0xc2f1a;
  return _0x1dba1d.version === 1 &&
    _0x1dba1d.sourceModel &&
    typeof _0x1dba1d.sourceModel == "object"
    ? _0x1dba1d
    : null;
}
function p(_0x22ffb3) {
  return _0x22ffb3.type === _0x594384.Shape && !!f(_0x22ffb3);
}
_0x210c83.extend(o);
const m = { Pen: "pen", Brush: "brush", Highlighter: "highlighter" },
  h = {
    Corner: "corner",
    Smooth: "smooth",
    Symmetric: "symmetric",
    Free: "free",
  },
  g = { Anchor: "anchor", In: "in", Out: "out" };
var _ = class extends _0x5c1a99 {
  get BoardInkTool() {
    return m;
  }
  get BoardInkPointType() {
    return h;
  }
  get BoardInkHandleKind() {
    return g;
  }
};
_0x5c1a99.extend(_);
export { g as BoardInkHandleKind, h as BoardInkPointType, m as BoardInkTool };
