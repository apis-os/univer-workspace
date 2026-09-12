Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs/core"),
  n = require("@univerjs-pro/engine-formula"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs/engine-formula"),
  a = require("rxjs");
const o = "shape-editor.config",
  s = {},
  c = { left: 8, right: 8, top: 4, bottom: 4 };
function l(_0x365dd8, _0x4a5ce0, _0x3b5a85) {
  return {
    id: "shape-text-document",
    body: {
      dataStream: "\x0d\x0a",
      paragraphs: [
        {
          startIndex: 0,
          paragraphId: (0, t.createParagraphId)(new Set()),
          paragraphStyle: { horizontalAlign: _0x365dd8 },
        },
      ],
      textRuns: [],
    },
    documentStyle: {
      ...(_0x3b5a85 ? { textStyle: _0x3b5a85 } : null),
      renderConfig: { horizontalAlign: _0x365dd8, verticalAlign: _0x4a5ce0 },
    },
  };
}
function u(_0x1ef743) {
  let _0x16e277 = t.HorizontalAlign["LEFT"],
    _0x4da52b = _0x1ef743.verticalAlign ?? t.VerticalAlign["TOP"];
  return {
    fill: _0x1ef743.fill ?? { fillType: e.ShapeFillEnum["NoFill"] },
    isTextBox: true,
    shapeText: {
      isHorizontal: _0x1ef743.isHorizontal,
      textDirection: _0x1ef743.isHorizontal
        ? e.ShapeTextDirection["Horz"]
        : e.ShapeTextDirection["Vert"],
      text: "",
      autoFitType: e.ShapeTextAutoFitType["SpAutoFit"],
      textWrap: e.ShapeTextWrapType["None"],
      dataModel: {
        ha: _0x16e277,
        va: _0x4da52b,
        doc: l(_0x16e277, _0x4da52b, _0x1ef743.textStyle),
      },
    },
    stroke: _0x1ef743.stroke ?? {
      lineStrokeType: e.ShapeLineTypeEnum["NoLine"],
    },
  };
}
function d(_0x10ce25 = {}) {
  return {
    ...u({
      fill: _0x10ce25.fill,
      stroke: _0x10ce25.stroke,
      isHorizontal: _0x10ce25.isHorizontal ?? true,
      textStyle: _0x10ce25.textStyle,
      verticalAlign: _0x10ce25.verticalAlign ?? t.VerticalAlign["MIDDLE"],
    }),
    textRectPadding: { ...c, ..._0x10ce25.textRectPadding },
    formulaBinding: {
      formula: _0x10ce25.formula ?? "",
      ...(_0x10ce25.lastValue ? { lastValue: _0x10ce25.lastValue } : null),
      ...(_0x10ce25.numberFormatPattern
        ? { numberFormat: { pattern: _0x10ce25.numberFormatPattern } }
        : null),
    },
  };
}
function f(_0x4799f5, _0x146a14) {
  let _0x1e34c0 = d({ fill: _0x4799f5.fill, stroke: _0x4799f5.stroke });
  return {
    ..._0x1e34c0,
    ..._0x4799f5,
    isTextBox: true,
    shapeText: _0x4799f5.shapeText ?? _0x1e34c0.shapeText,
    textRectPadding: _0x4799f5.textRectPadding ?? _0x1e34c0.textRectPadding,
    formulaBinding: _0x146a14,
  };
}
const p = 1.5,
  m = [
    {
      id: "black",
      accent: "#111827",
      dark: "#000000",
      filled: "#111827",
      softFill: "#f3f4f6",
      softStroke: "#6b7280",
    },
    {
      id: "blue",
      accent: "#4472c4",
      dark: "#1f4e79",
      filled: "#4472c4",
      softFill: "#eaf1fb",
      softStroke: "#8faadc",
    },
    {
      id: "orange",
      accent: "#ed7d31",
      dark: "#c55a11",
      filled: "#ed7d31",
      softFill: "#fbe5d6",
      softStroke: "#f4b183",
    },
    {
      id: "gray",
      accent: "#a6a6a6",
      dark: "#595959",
      filled: "#808080",
      softFill: "#f2f2f2",
      softStroke: "#bfbfbf",
    },
    {
      id: "yellow",
      accent: "#f2a900",
      dark: "#bf9000",
      filled: "#ffc000",
      softFill: "#fff8dc",
      softStroke: "#ffd966",
    },
    {
      id: "light-blue",
      accent: "#5b9bd5",
      dark: "#2e75b6",
      filled: "#5b9bd5",
      softFill: "#edf4fb",
      softStroke: "#9dc3e6",
    },
    {
      id: "green",
      accent: "#70ad47",
      dark: "#548235",
      filled: "#70ad47",
      softFill: "#edf7e6",
      softStroke: "#a9d18e",
    },
  ];
function h(_0x560dff) {
  return {
    fillType: e.ShapeFillEnum["SolidFill"],
    color: _0x560dff,
    opacity: 1,
  };
}
function g(_0xac3c39, _0x8a085d = 2, _0x2fb423 = e.ShapeLineDashEnum["Solid"]) {
  return {
    lineStrokeType: e.ShapeLineTypeEnum["SolidLine"],
    color: _0xac3c39,
    width: _0x8a085d,
    opacity: 1,
    dashType: _0x2fb423,
  };
}
function _(_0x3d3bdc, _0x2db537, _0x415e85) {
  return {
    id: _0x3d3bdc,
    type: "shape",
    fill: h(_0x2db537),
    stroke: g(_0x415e85),
  };
}
function v(_0x2e9d1d, _0x466734) {
  return {
    startArrow: { type: _0x2e9d1d, size: e.ShapeArrowSizeEnum["Medium"] },
    endArrow: { type: _0x466734, size: e.ShapeArrowSizeEnum["Medium"] },
  };
}
const y = [
    _("shape-white-black", "#ffffff", "#111827"),
    _("shape-white-blue", "#ffffff", "#4472c4"),
    _("shape-white-orange", "#ffffff", "#ed7d31"),
    _("shape-white-gray", "#ffffff", "#a6a6a6"),
    _("shape-yellow-orange", "#fff2cc", "#f2a900"),
    _("shape-blue-blue", "#ddebf7", "#5b9bd5"),
    _("shape-green-green", "#e2f0d9", "#70ad47"),
    ...m.map((_0x49345e) =>
      _("shape-soft-" + _0x49345e.id, _0x49345e.softFill, _0x49345e.softStroke),
    ),
    ...m.map((_0x49c50b) =>
      _("shape-filled-" + _0x49c50b.id, _0x49c50b.filled, _0x49c50b.dark),
    ),
    ...m.map((_0x26f1c3) =>
      _("shape-dark-" + _0x26f1c3.id, _0x26f1c3.dark, _0x26f1c3.accent),
    ),
  ],
  b = [
    {
      id: "line-black-solid",
      type: "line",
      group: "solid",
      stroke: g("#111827", p),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["None"]),
    },
    {
      id: "line-blue-solid",
      type: "line",
      group: "solid",
      stroke: g("#4472c4", p),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["None"]),
    },
    {
      id: "line-orange-solid",
      type: "line",
      group: "solid",
      stroke: g("#ed7d31", p),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["None"]),
    },
    {
      id: "line-gray-solid",
      type: "line",
      group: "solid",
      stroke: g("#a6a6a6", p),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["None"]),
    },
    {
      id: "line-blue-end-arrow",
      type: "line",
      group: "solid",
      stroke: g("#4472c4", p),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["Arrow"]),
    },
    {
      id: "line-green-two-way-arrow",
      type: "line",
      group: "solid",
      stroke: g("#70ad47", p),
      ln: v(e.ShapeArrowTypeEnum["Arrow"], e.ShapeArrowTypeEnum["Arrow"]),
    },
    {
      id: "line-black-dashed",
      type: "line",
      group: "dashed",
      stroke: g("#111827", p, e.ShapeLineDashEnum["Dash"]),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["None"]),
    },
    {
      id: "line-blue-dashed",
      type: "line",
      group: "dashed",
      stroke: g("#4472c4", p, e.ShapeLineDashEnum["Dash"]),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["None"]),
    },
    {
      id: "line-gray-dashed",
      type: "line",
      group: "dashed",
      stroke: g("#a6a6a6", p, e.ShapeLineDashEnum["Dash"]),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["None"]),
    },
    {
      id: "line-blue-dashed-end-arrow",
      type: "line",
      group: "dashed",
      stroke: g("#4472c4", p, e.ShapeLineDashEnum["Dash"]),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["Arrow"]),
    },
    {
      id: "line-gray-dashed-end-arrow",
      type: "line",
      group: "dashed",
      stroke: g("#a6a6a6", p, e.ShapeLineDashEnum["Dash"]),
      ln: v(e.ShapeArrowTypeEnum["None"], e.ShapeArrowTypeEnum["Arrow"]),
    },
    {
      id: "line-green-dashed-two-way-arrow",
      type: "line",
      group: "dashed",
      stroke: g("#70ad47", p, e.ShapeLineDashEnum["Dash"]),
      ln: v(e.ShapeArrowTypeEnum["Arrow"], e.ShapeArrowTypeEnum["Arrow"]),
    },
  ],
  x = [
    {
      id: "text-body-black",
      type: "text",
      textStyle: { color: "#111827", fontSize: 18, bold: false },
    },
    {
      id: "text-title-black",
      type: "text",
      textStyle: { color: "#111827", fontSize: 32, bold: true },
    },
    {
      id: "text-accent-blue",
      type: "text",
      textStyle: { color: "#4472c4", fontSize: 28, bold: true },
    },
    {
      id: "text-accent-orange",
      type: "text",
      textStyle: { color: "#ed7d31", fontSize: 28, bold: true },
    },
    {
      id: "text-note-gray",
      type: "text",
      textStyle: { color: "#6b7280", fontSize: 14, bold: false },
    },
  ],
  S = [...y, ...b, ...x];
function C(_0x23549e) {
  return S.find((_0x241932) => _0x241932.id === _0x23549e) ?? null;
}
function w(_0x4ae64d) {
  return _0x4ae64d === "shape" ? y : _0x4ae64d === "line" ? b : x;
}
function T(_0x4afdac) {
  return _0x4afdac.shapeType && (0, e.isConnectorShape)(_0x4afdac.shapeType)
    ? "line"
    : "shape";
}
function E(_0x2dfcbb, _0xc182bf) {
  var _0x2f17ae, _0x52333d;
  if (_0xc182bf.type === "text") return null;
  if (_0xc182bf.type === "shape")
    return {
      ..._0x2dfcbb,
      fill: { ...(_0x2dfcbb.fill ?? {}), ..._0xc182bf.fill },
      stroke: { ...(_0x2dfcbb.stroke ?? {}), ..._0xc182bf.stroke },
    };
  let _0x221264 = "ln" in _0x2dfcbb ? _0x2dfcbb.ln : undefined;
  return {
    ..._0x2dfcbb,
    stroke: { ...(_0x2dfcbb.stroke ?? {}), ..._0xc182bf.stroke },
    ln: {
      ...(_0x221264 ?? {}),
      ..._0xc182bf.ln,
      startArrow: {
        ...((_0x221264 == null ? undefined : _0x221264.startArrow) ?? {}),
        ...(((_0x2f17ae = _0xc182bf.ln) == null
          ? undefined
          : _0x2f17ae.startArrow) ?? {}),
      },
      endArrow: {
        ...((_0x221264 == null ? undefined : _0x221264.endArrow) ?? {}),
        ...(((_0x52333d = _0xc182bf.ln) == null
          ? undefined
          : _0x52333d.endArrow) ?? {}),
      },
    },
  };
}
function D(_0x4bc3be) {
  return (_0x4bc3be ?? "").toLowerCase();
}
function O(_0x3559ea) {
  return (
    (_0x3559ea == null ? undefined : _0x3559ea.dashType) ??
    e.ShapeLineDashEnum["Solid"]
  );
}
function k(_0x139274, _0x397cb5) {
  var _0x277157;
  return (
    (_0x139274 == null || (_0x277157 = _0x139274[_0x397cb5]) == null
      ? undefined
      : _0x277157.type) ?? e.ShapeArrowTypeEnum["None"]
  );
}
function A(_0x50890e, _0x364431) {
  var _0x21de63, _0x10983e, _0x3e26f9, _0x33e8a8;
  return (
    D((_0x21de63 = _0x50890e.fill) == null ? undefined : _0x21de63.color) ===
      D((_0x10983e = _0x364431.fill) == null ? undefined : _0x10983e.color) &&
    D((_0x3e26f9 = _0x50890e.stroke) == null ? undefined : _0x3e26f9.color) ===
      D(_0x364431.stroke["color"]) &&
    (((_0x33e8a8 = _0x50890e.stroke) == null ? undefined : _0x33e8a8.width) ??
      0) === _0x364431.stroke["width"]
  );
}
function j(_0x44b4db, _0x2135eb) {
  var _0x4962ac, _0x8b40de;
  let _0x568a7b = "ln" in _0x44b4db ? _0x44b4db.ln : undefined;
  return (
    D((_0x4962ac = _0x44b4db.stroke) == null ? undefined : _0x4962ac.color) ===
      D(_0x2135eb.stroke["color"]) &&
    (((_0x8b40de = _0x44b4db.stroke) == null ? undefined : _0x8b40de.width) ??
      0) === _0x2135eb.stroke["width"] &&
    O(_0x44b4db.stroke) === O(_0x2135eb.stroke) &&
    k(_0x568a7b, "startArrow") === k(_0x2135eb.ln, "startArrow") &&
    k(_0x568a7b, "endArrow") === k(_0x2135eb.ln, "endArrow")
  );
}
function M(_0x19d8bd, _0x27bb49) {
  return _0x27bb49.type === "shape"
    ? A(_0x19d8bd, _0x27bb49)
    : _0x27bb49.type === "line" && j(_0x19d8bd, _0x27bb49);
}
function N(_0x4f98f4) {
  var _0x2bbed2;
  return (
    ((_0x2bbed2 = w(T(_0x4f98f4)).find((_0x2af71a) =>
      M(_0x4f98f4, _0x2af71a),
    )) == null
      ? undefined
      : _0x2bbed2.id) ?? null
  );
}
function P(_0xa9d712, _0x17202d) {
  try {
    return new e["ShapeModel"](
      _0xa9d712.shapeType ?? e.ShapeTypeEnum["Rect"],
      "shape-type-conversion",
      _0xa9d712,
    ).cloneShapeDataForShapeType(_0x17202d);
  } catch {
    return null;
  }
}
var F = "@univerjs-pro/shape-editor",
  I = "1.0.0-insiders.20260907-70fc579";
function L(_0x3bb759, _0x3952a7) {
  return (0, n.resolveFormulaResultPresentation)({
    numberFormat: _0x3bb759.numberFormat,
    lastValue: _0x3bb759.lastValue,
    result: _0x3952a7,
  });
}
function R(_0x1dc94c) {
  "@babel/helpers - typeof";
  return (
    (R =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x291a78) {
            return typeof _0x291a78;
          }
        : function (_0x4f7d50) {
            return _0x4f7d50 &&
              typeof Symbol == "function" &&
              _0x4f7d50.constructor === Symbol &&
              _0x4f7d50 !== Symbol.prototype
              ? "symbol"
              : typeof _0x4f7d50;
          }),
    R(_0x1dc94c)
  );
}
function z(_0x2d2c79, _0xc5190c) {
  if (R(_0x2d2c79) != "object" || !_0x2d2c79) return _0x2d2c79;
  var _0x3e855d = _0x2d2c79[Symbol.toPrimitive];
  if (_0x3e855d !== undefined) {
    var _0x20e41a = _0x3e855d.call(_0x2d2c79, _0xc5190c || "default");
    if (R(_0x20e41a) != "object") return _0x20e41a;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0xc5190c === "string" ? String : Number)(_0x2d2c79);
}
function B(_0x2e39e1) {
  var _0x4e741b = z(_0x2e39e1, "string");
  return R(_0x4e741b) == "symbol" ? _0x4e741b : _0x4e741b + "";
}
function V(_0x32c3c4, _0x2f7035, _0x51b8ea) {
  return (
    (_0x2f7035 = B(_0x2f7035)) in _0x32c3c4
      ? Object.defineProperty(_0x32c3c4, _0x2f7035, {
          value: _0x51b8ea,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x32c3c4[_0x2f7035] = _0x51b8ea),
    _0x32c3c4
  );
}
function H(_0x5ee620, _0x30656a) {
  return function (_0x25e9eb, _0x2a113a) {
    _0x30656a(_0x25e9eb, _0x2a113a, _0x5ee620);
  };
}
function U(_0x12fc68, _0x53ad8b, _0x2c4e8f, _0x526d5c) {
  var _0x14c8b8 = arguments.length,
    _0x275c8f =
      _0x14c8b8 < 3
        ? _0x53ad8b
        : _0x526d5c === null
          ? (_0x526d5c = Object.getOwnPropertyDescriptor(_0x53ad8b, _0x2c4e8f))
          : _0x526d5c,
    _0x3f8944;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x275c8f = Reflect.decorate(_0x12fc68, _0x53ad8b, _0x2c4e8f, _0x526d5c);
  else {
    for (var _0x507616 = _0x12fc68.length - 1; _0x507616 >= 0; _0x507616--)
      (_0x3f8944 = _0x12fc68[_0x507616]) &&
        (_0x275c8f =
          (_0x14c8b8 < 3
            ? _0x3f8944(_0x275c8f)
            : _0x14c8b8 > 3
              ? _0x3f8944(_0x53ad8b, _0x2c4e8f, _0x275c8f)
              : _0x3f8944(_0x53ad8b, _0x2c4e8f)) || _0x275c8f);
  }
  return (
    _0x14c8b8 > 3 &&
      _0x275c8f &&
      Object.defineProperty(_0x53ad8b, _0x2c4e8f, _0x275c8f),
    _0x275c8f
  );
}
let W = (function (_0x422144) {
  return (
    (_0x422144.EMPTY = "empty"),
    (_0x422144.PENDING = "pending"),
    (_0x422144.SUCCESS = "success"),
    (_0x422144.ERROR = "error"),
    _0x422144
  );
})({});
function G(_0x175cfd) {
  return (
    _0x175cfd.unitId + "\x00" + _0x175cfd.subUnitId + "\x00" + _0x175cfd.shapeId
  );
}
let K = class extends t.Disposable {
  constructor(_0x4b4838, _0x2fdd13) {
    (super(),
      (this._registerOtherFormulaService = _0x4b4838),
      (this._hostExternalReferenceModel = _0x2fdd13),
      V(this, "_registrations", new Map()),
      V(this, "_formulaKeys", new Map()),
      V(this, "_presentationChanged$", new a["Subject"]()),
      V(
        this,
        "presentationChanged$",
        this._presentationChanged$["asObservable"](),
      ),
      this.disposeWithMe(
        this._registerOtherFormulaService["formulaResult$"].subscribe(
          (_0x134e07) => {
            for (let _0x22b1c2 of Object.values(_0x134e07))
              for (let _0x246349 of Object.values(_0x22b1c2))
                for (let _0x5c41a9 of _0x246349)
                  this._updateFormulaResult(_0x5c41a9);
          },
        ),
      ));
  }
  register(_0x35ab65, _0x212119) {
    let _0x3aa8f5 = G(_0x35ab65),
      _0x3be28c = this._registrations["get"](_0x3aa8f5),
      _0x5dc372 = this._hostExternalReferenceModel["getRevision"](
        _0x35ab65.unitId,
      );
    if (
      _0x3be28c &&
      _0x3be28c.binding["formula"] === _0x212119.formula &&
      _0x3be28c.referenceRevision === _0x5dc372 &&
      (_0x35ab65.hostType === undefined ||
        _0x3be28c.hostType === _0x35ab65.hostType) &&
      _0x3be28c.formulaUnitId === _0x35ab65.unitId &&
      _0x3be28c.formulaSubUnitId === _0x35ab65.subUnitId
    ) {
      _0x3be28c.binding = _0x212119;
      let _0x4b624a = _0x3be28c.formulaId
        ? (this._registerOtherFormulaService["getFormulaValueSync"](
            _0x3be28c.formulaUnitId,
            _0x3be28c.formulaSubUnitId,
            _0x3be28c.formulaId,
          ) ?? undefined)
        : undefined;
      ((_0x3be28c.liveResult = _0x4b624a),
        this._setPresentation(_0x3aa8f5, L(_0x212119, _0x4b624a)));
      return;
    }
    _0x3be28c != null &&
      _0x3be28c.formulaId &&
      (this._registerOtherFormulaService["deleteFormula"](
        _0x3be28c.formulaUnitId,
        _0x3be28c.formulaSubUnitId,
        [_0x3be28c.formulaId],
      ),
      this._formulaKeys["delete"](_0x3be28c.formulaId));
    let _0x5f05be = {
      ..._0x35ab65,
      hostType:
        _0x35ab65.hostType ??
        (_0x3be28c == null ? undefined : _0x3be28c.hostType),
      binding: _0x212119,
      referenceRevision: _0x5dc372,
      formulaSubUnitId: _0x35ab65.subUnitId,
      formulaUnitId: _0x35ab65.unitId,
      presentation: L(_0x212119, undefined),
    };
    if (
      (this._registrations["set"](_0x3aa8f5, _0x5f05be),
      !_0x212119.formula["trim"]())
    ) {
      this._setPresentation(_0x3aa8f5, _0x5f05be.presentation);
      return;
    }
    let _0x228932 = this._registerOtherFormulaService[
      "registerFormulaWithRange"
    ](
      _0x35ab65.unitId,
      _0x35ab65.subUnitId,
      _0x212119.formula,
      undefined,
      { shapeId: _0x35ab65.shapeId },
      i.OtherFormulaBizType["SHAPE"],
      _0x35ab65.shapeId,
    );
    ((_0x5f05be.formulaId = _0x228932),
      this._formulaKeys["set"](_0x228932, _0x3aa8f5));
  }
  update(_0x33be96, _0xf69956) {
    this.register(_0x33be96, _0xf69956);
  }
  unregister(_0x4629cc) {
    let _0x19694a = G(_0x4629cc),
      _0x19c7b9 = this._registrations["get"](_0x19694a);
    _0x19c7b9 &&
      (_0x19c7b9.formulaId &&
        (this._registerOtherFormulaService["deleteFormula"](
          _0x19c7b9.formulaUnitId,
          _0x19c7b9.formulaSubUnitId,
          [_0x19c7b9.formulaId],
        ),
        this._formulaKeys["delete"](_0x19c7b9.formulaId)),
      this._registrations["delete"](_0x19694a));
  }
  unregisterUnit(_0x2db1c2) {
    for (let _0x3caff4 of [...this._registrations["values"]()])
      _0x3caff4.unitId === _0x2db1c2 && this.unregister(_0x3caff4);
  }
  syncUnit(_0x8b3e5e, _0x278d90) {
    let _0x386216 = _0x278d90.filter(
        (_0x5c8907) => _0x5c8907.shapeData["formulaBinding"],
      ),
      _0x2d6e8e = new Set(_0x386216.map(G));
    for (let _0x419429 of [...this._registrations["values"]()])
      _0x419429.unitId === _0x8b3e5e &&
        !_0x2d6e8e.has(G(_0x419429)) &&
        this.unregister(_0x419429);
    for (let _0x27cc8b of _0x386216)
      this.register(_0x27cc8b, _0x27cc8b.shapeData["formulaBinding"]);
  }
  getPresentation(_0x311fc9) {
    var _0x3290a3;
    return (_0x3290a3 = this._registrations["get"](G(_0x311fc9))) == null
      ? undefined
      : _0x3290a3.presentation;
  }
  getResult(_0xed83b6) {
    let _0x281446 = this._registrations["get"](G(_0xed83b6));
    return _0x281446
      ? this._createResult(_0x281446, _0x281446.presentation)
      : undefined;
  }
  getRegisteredFormulas() {
    let _0x1a40c3 = [];
    for (let _0x28931d of this._registrations["values"]())
      _0x28931d.hostType !== undefined &&
        _0x1a40c3.push({
          identity: {
            hostType: _0x28931d.hostType,
            unitId: _0x28931d.unitId,
            subUnitId: _0x28931d.subUnitId,
            shapeId: _0x28931d.shapeId,
          },
          binding: _0x28931d.binding,
          referenceRevision: _0x28931d.referenceRevision,
          liveResult: _0x28931d.liveResult,
          presentation: _0x28931d.presentation,
        });
    return _0x1a40c3;
  }
  _updateFormulaResult(_0x29e2b7) {
    let _0x183be2 = this._formulaKeys["get"](_0x29e2b7.formulaId),
      _0x103b91 = _0x183be2 ? this._registrations["get"](_0x183be2) : undefined;
    !_0x183be2 ||
      !_0x103b91 ||
      ((_0x103b91.liveResult = _0x29e2b7),
      this._setPresentation(_0x183be2, L(_0x103b91.binding, _0x29e2b7)));
  }
  _setPresentation(_0x2e77ec, _0x51af53) {
    var _0x391d97, _0x24869d, _0x427d77, _0x481d18;
    let _0x1c0fca = this._registrations["get"](_0x2e77ec);
    if (
      !_0x1c0fca ||
      (_0x1c0fca.presentation["text"] === _0x51af53.text &&
        _0x1c0fca.presentation["color"] === _0x51af53.color &&
        _0x1c0fca.presentation["pattern"] === _0x51af53.pattern &&
        ((_0x391d97 = _0x1c0fca.presentation["cell"]) == null
          ? undefined
          : _0x391d97.t) ===
          ((_0x24869d = _0x51af53.cell) == null ? undefined : _0x24869d.t) &&
        _0x1c0fca.presentation["source"] === _0x51af53.source &&
        _0x1c0fca.presentation["stale"] === _0x51af53.stale &&
        Object.is(
          (_0x427d77 = _0x1c0fca.presentation["cell"]) == null
            ? undefined
            : _0x427d77.v,
          (_0x481d18 = _0x51af53.cell) == null ? undefined : _0x481d18.v,
        ))
    )
      return;
    let _0x4cbfbd = _0x1c0fca.presentation;
    ((_0x1c0fca.presentation = _0x51af53),
      this._presentationChanged$["next"]({
        unitId: _0x1c0fca.unitId,
        subUnitId: _0x1c0fca.subUnitId,
        shapeId: _0x1c0fca.shapeId,
        presentation: _0x51af53,
        previousPresentation: _0x4cbfbd,
        result: this._createResult(_0x1c0fca, _0x51af53),
        previousResult: this._createResult(_0x1c0fca, _0x4cbfbd),
        animationEnabled:
          _0x1c0fca.binding["animationEnabled"] !== false && !_0x4cbfbd.stale,
      }));
  }
  _createResult(_0x40d968, _0x1bf62e) {
    var _0x583ae1, _0x3a50d9;
    let _0x4ab933 =
      (_0x583ae1 = _0x1bf62e.cell) == null ? undefined : _0x583ae1.v;
    return {
      status: _0x40d968.binding["formula"].trim()
        ? _0x1bf62e.stale || _0x1bf62e.cell == null
          ? "pending"
          : typeof _0x4ab933 == "string" && _0x4ab933.startsWith("#")
            ? "error"
            : "success"
        : "empty",
      value: _0x4ab933,
      valueType:
        ((_0x3a50d9 = _0x1bf62e.cell) == null ? undefined : _0x3a50d9.t) ??
        undefined,
      displayText: _0x1bf62e.text,
      color: _0x1bf62e.color,
      numberFormat: _0x1bf62e.pattern,
      source: _0x1bf62e.source,
      stale: _0x1bf62e.stale,
    };
  }
  dispose() {
    for (let _0xa136ef of this._registrations["values"]())
      _0xa136ef.formulaId &&
        this._registerOtherFormulaService["deleteFormula"](
          _0xa136ef.formulaUnitId,
          _0xa136ef.formulaSubUnitId,
          [_0xa136ef.formulaId],
        );
    (this._registrations["clear"](),
      this._formulaKeys["clear"](),
      this._presentationChanged$["complete"](),
      super.dispose());
  }
};
K = U(
  [
    H(0, (0, t.Inject)(i.RegisterOtherFormulaService)),
    H(1, (0, t.Inject)(n.HostExternalReferenceModel)),
  ],
  K,
);
let q = class extends t.Disposable {
  constructor(_0x477b3d, _0x439a19, _0x1b191b) {
    (super(),
      (this._instanceService = _0x477b3d),
      (this._shapeHostAdapterRegistry = _0x439a19),
      (this._shapeFormulaService = _0x1b191b),
      V(this, "_isDisposed", false),
      V(this, "_pendingUnitIds", new Set()),
      V(this, "_adapterBindings", new Map()),
      V(this, "_syncScheduled", false));
    let _0x25c374 = this._shapeHostAdapterRegistry["adapterChanged$"].subscribe(
      (_0x2eefa9) => {
        this._handleAdapterChange(_0x2eefa9);
      },
    );
    this.disposeWithMe(() => _0x25c374.unsubscribe());
    for (let _0x1b76ee of this._shapeHostAdapterRegistry["list"]())
      this._bindAdapter(_0x1b76ee);
    (this.disposeWithMe(
      this._instanceService["unitAdded$"].subscribe(({ unit: _0x1cbfb4 }) => {
        this._queueSync(_0x1cbfb4.getUnitId());
      }),
    ),
      this.disposeWithMe(
        this._instanceService["unitDisposed$"].subscribe((_0x1b45dd) => {
          this._shapeFormulaService["unregisterUnit"](_0x1b45dd.getUnitId());
        }),
      ));
  }
  _handleAdapterChange(_0x50c0ba) {
    this._isDisposed ||
      (_0x50c0ba.type === "registered"
        ? this._bindAdapter(_0x50c0ba.adapter)
        : this._unbindAdapter(_0x50c0ba.adapter));
  }
  _bindAdapter(_0x4696df) {
    var _0x288af1;
    let _0x150f98 = this._adapterBindings["get"](_0x4696df.hostType);
    if ((_0x150f98 == null ? undefined : _0x150f98.adapter) === _0x4696df)
      return;
    _0x150f98 == null || _0x150f98.unsubscribe();
    let _0x3e4c09 =
      (_0x288af1 = _0x4696df.shapeChanged$) == null
        ? undefined
        : _0x288af1.subscribe(({ unitId: _0x2ffd12 }) =>
            this._queueSync(_0x2ffd12),
          );
    this._adapterBindings["set"](_0x4696df.hostType, {
      adapter: _0x4696df,
      unsubscribe: () =>
        _0x3e4c09 == null ? undefined : _0x3e4c09.unsubscribe(),
    });
    for (let _0x18b777 of this._instanceService["getAllUnitsForType"](
      _0x4696df.hostType,
    ))
      this._syncUnit(_0x18b777.getUnitId());
  }
  _unbindAdapter(_0x52b900) {
    let _0x1aa3ae = this._adapterBindings["get"](_0x52b900.hostType);
    if ((_0x1aa3ae == null ? undefined : _0x1aa3ae.adapter) === _0x52b900) {
      (_0x1aa3ae.unsubscribe(),
        this._adapterBindings["delete"](_0x52b900.hostType));
      for (let _0x54e3f7 of this._instanceService["getAllUnitsForType"](
        _0x52b900.hostType,
      ))
        this._shapeFormulaService["unregisterUnit"](_0x54e3f7.getUnitId());
    }
  }
  _queueSync(_0x50b386) {
    (this._pendingUnitIds["add"](_0x50b386),
      !this._syncScheduled &&
        ((this._syncScheduled = true),
        queueMicrotask(() => {
          if (((this._syncScheduled = false), this._isDisposed)) return;
          let _0x31b7cd = [...this._pendingUnitIds];
          (this._pendingUnitIds["clear"](),
            _0x31b7cd.forEach((_0x11e7ed) => this._syncUnit(_0x11e7ed)));
        })));
  }
  _syncUnit(_0x8e6592) {
    var _0x75bec8, _0x39f1bf;
    let _0xd7c7f0 = this._instanceService["getUnitType"](_0x8e6592);
    if (!(0, e.isShapeHostType)(_0xd7c7f0)) return;
    let _0xfe073e =
      (_0x75bec8 = this._adapterBindings["get"](_0xd7c7f0)) == null
        ? undefined
        : _0x75bec8.adapter;
    _0xfe073e &&
      this._shapeFormulaService["syncUnit"](
        _0x8e6592,
        ((_0x39f1bf = _0xfe073e.listShapesInUnit) == null
          ? undefined
          : _0x39f1bf.call(_0xfe073e, _0x8e6592)) ?? [],
      );
  }
  dispose() {
    this._isDisposed = true;
    for (let _0x693c28 of this._adapterBindings["values"]())
      _0x693c28.unsubscribe();
    (this._adapterBindings["clear"](), super.dispose());
  }
};
q = U(
  [
    H(0, t.IUniverInstanceService),
    H(1, e.IShapeHostAdapterRegistry),
    H(2, (0, t.Inject)(K)),
  ],
  q,
);
let J = class extends t.Disposable {
  constructor(_0x3a16a9, _0x2cd0a0, _0x21cf0b, _0x3e5bc1) {
    (super(),
      (this._formulaService = _0x3a16a9),
      (this._cacheEligibilityService = _0x2cd0a0),
      (this._shapeHostAdapterRegistry = _0x21cf0b),
      this.disposeWithMe(_0x3e5bc1.registerProvider(this)));
  }
  collectMutations(_0x549ae9) {
    let _0x2787e9 = [];
    for (let _0x374aee of this._formulaService["getRegisteredFormulas"]()) {
      var _0x4314ec;
      if (
        !this._cacheEligibilityService["assess"](
          _0x374aee.binding["formula"],
          _0x374aee.liveResult,
        ).eligible
      )
        continue;
      let _0x21c252 = (0, n.getScalarFormulaResultCell)(_0x374aee.liveResult),
        _0x233d24 = _0x21c252 ? (0, n.toFormulaLastValue)(_0x21c252) : null;
      if (!_0x233d24 || Y(_0x374aee.binding["lastValue"], _0x233d24)) continue;
      let _0x40bde1 = this._shapeHostAdapterRegistry["get"](
          _0x374aee.identity["hostType"],
        ),
        _0x46eb03 =
          _0x40bde1 == null ||
          (_0x4314ec = _0x40bde1.createFormulaLastValueMutation) == null
            ? undefined
            : _0x4314ec.call(
                _0x40bde1,
                _0x374aee.identity,
                {
                  expectedFormula: _0x374aee.binding["formula"],
                  expectedReferenceRevision: _0x374aee.referenceRevision,
                },
                _0x233d24,
              );
      _0x46eb03 && _0x2787e9.push(_0x46eb03);
    }
    return _0x2787e9;
  }
};
J = U(
  [
    H(0, (0, t.Inject)(K)),
    H(1, (0, t.Inject)(n.FormulaCacheEligibilityService)),
    H(2, e.IShapeHostAdapterRegistry),
    H(3, (0, t.Inject)(n.FormulaLastValuePersistenceService)),
  ],
  J,
);
function Y(_0x122cbf, _0x2edcbd) {
  return (
    (_0x122cbf == null ? undefined : _0x122cbf.v) === _0x2edcbd.v &&
    (_0x122cbf == null ? undefined : _0x122cbf.t) === _0x2edcbd.t &&
    (_0x122cbf == null ? undefined : _0x122cbf.pattern) === _0x2edcbd.pattern
  );
}
let X = class extends t.Plugin {
  constructor(_0x3d45df = s, _0x9c6807, _0x3a7486) {
    (super(),
      (this._config = _0x3d45df),
      (this._injector = _0x9c6807),
      (this._configService = _0x3a7486));
    let { ..._0x1e360f } = (0, t.merge)({}, s, this._config);
    this._configService["setConfig"](o, _0x1e360f);
  }
  onStarting() {
    (this._injector["add"]([K]),
      this._injector["add"]([q]),
      this._injector["add"]([J]));
  }
  onReady() {
    (0, t.touchDependencies)(this._injector, [[q], [J]]);
  }
};
(V(X, "type", t.UniverInstanceType["UNIVER_UNKNOWN"]),
  V(X, "pluginName", "SHAPE_EDITOR_PLUGIN"),
  V(X, "packageName", F),
  V(X, "version", I),
  (X = U(
    [
      (0, t.DependentOn)(
        r.UniverLicensePlugin,
        n.UniverProFormulaEnginePlugin,
        e.UniverShapePlugin,
      ),
      H(1, (0, t.Inject)(t.Injector)),
      H(2, t.IConfigService),
    ],
    X,
  )));
function Z(_0x5ac4a5, _0x18e825) {
  var _0x4ff2a6, _0x1b73ff, _0x2d45be, _0x4465b8;
  if (!_0x18e825) return _0x5ac4a5;
  let _0x56a885 = _0x18e825.text,
    _0x25a607 = _0x5ac4a5.body,
    _0x1a8735 =
      (_0x25a607 == null ||
      (_0x4ff2a6 = _0x25a607.textRuns) == null ||
      (_0x4ff2a6 = _0x4ff2a6[0]) == null
        ? undefined
        : _0x4ff2a6.ts) ??
      ((_0x1b73ff = _0x5ac4a5.documentStyle) == null
        ? undefined
        : _0x1b73ff.textStyle) ??
      {},
    _0xfda6e = _0x18e825.color
      ? { ..._0x1a8735, cl: { rgb: _0x18e825.color } }
      : _0x1a8735,
    _0x3b9a6d =
      _0x25a607 == null || (_0x2d45be = _0x25a607.paragraphs) == null
        ? undefined
        : _0x2d45be[0],
    _0x538d14 =
      _0x25a607 == null || (_0x4465b8 = _0x25a607.sectionBreaks) == null
        ? undefined
        : _0x4465b8[0],
    _0x56741e =
      (_0x3b9a6d == null ? undefined : _0x3b9a6d.paragraphId) ??
      (0, t.createParagraphId)(new Set());
  return {
    ..._0x5ac4a5,
    body: {
      ..._0x25a607,
      dataStream: _0x56a885 + "\x0d\x0a",
      textRuns: _0x56a885.length
        ? [{ st: 0, ed: _0x56a885.length, ts: _0xfda6e }]
        : [],
      paragraphs: [
        {
          ...(_0x3b9a6d ?? {}),
          startIndex: _0x56a885.length,
          paragraphId: _0x56741e,
        },
      ],
      sectionBreaks: _0x538d14
        ? [{ ..._0x538d14, startIndex: _0x56a885.length + 1 }]
        : _0x25a607 == null
          ? undefined
          : _0x25a607.sectionBreaks,
    },
  };
}
((exports.FORMULA_SHAPE_DEFAULT_TEXT_RECT_PADDING = c),
  (exports.FormulaShapeResultStatus = W),
  (exports.SHAPE_EDITOR_PLUGIN_CONFIG_KEY = o),
  (exports.SHAPE_LINE_QUICK_STYLE_PRESETS = b),
  (exports.SHAPE_QUICK_STYLE_PRESETS = y),
  Object.defineProperty(exports, "ShapeFormulaService", {
    enumerable: true,
    get: function () {
      return K;
    },
  }),
  Object.defineProperty(exports, "UniverShapeEditorPlugin", {
    enumerable: true,
    get: function () {
      return X;
    },
  }),
  (exports.applyQuickStyleToShapeData = E),
  (exports.cloneShapeDataForType = P),
  (exports.createFormulaShapeData = d),
  (exports.createFormulaShapeDataFromShape = f),
  (exports.createShapeFormulaDocument = Z),
  (exports.createShapeTextBoxShapeData = u),
  (exports.getShapeQuickStylePreset = C),
  (exports.getShapeQuickStylePresets = w),
  (exports.getShapeQuickStyleType = T),
  (exports.resolveActiveShapeQuickStylePresetId = N),
  (exports.resolveShapeFormulaPresentation = L));
