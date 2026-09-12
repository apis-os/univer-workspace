import {
  IShapeHostAdapterRegistry as _0x951877,
  ShapeArrowSizeEnum as _0x2e7bb2,
  ShapeArrowTypeEnum as _0x27ec2b,
  ShapeFillEnum as _0x32d897,
  ShapeLineDashEnum as _0xecf014,
  ShapeLineTypeEnum as _0xa8f6ac,
  ShapeModel as _0x207048,
  ShapeTextAutoFitType as _0x4c0031,
  ShapeTextDirection as _0x8a69bd,
  ShapeTextWrapType as _0x380e1f,
  ShapeTypeEnum as _0x4a5bc4,
  UniverShapePlugin as _0xbe4635,
  isConnectorShape as _0x490afc,
  isShapeHostType as _0x40fc8f,
} from "@univerjs-pro/engine-shape";
import {
  DependentOn as _0x43d573,
  Disposable as _0x5e4d55,
  HorizontalAlign as _0x40e40a,
  IConfigService as _0x22a890,
  IUniverInstanceService as _0x16fb35,
  Inject as _0x584d36,
  Injector as _0x3b9230,
  Plugin as _0x5841c1,
  UniverInstanceType as _0x4f563c,
  VerticalAlign as _0x269a70,
  createParagraphId as _0x304b1c,
  merge as _0x2c14cd,
  touchDependencies as _0x34030f,
} from "@univerjs/core";
import {
  FormulaCacheEligibilityService as _0x45d19e,
  FormulaLastValuePersistenceService as _0x135d59,
  HostExternalReferenceModel as _0x2fa094,
  UniverProFormulaEnginePlugin as _0x51f529,
  getScalarFormulaResultCell as _0x49e948,
  resolveFormulaResultPresentation as _0x14ff0f,
  toFormulaLastValue as _0x4df3ad,
} from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin as _0x193611 } from "@univerjs-pro/license";
import {
  OtherFormulaBizType as _0x50b382,
  RegisterOtherFormulaService as _0xc7ba5d,
} from "@univerjs/engine-formula";
import { Subject as _0x49e81f } from "rxjs";
const S = "shape-editor.config",
  C = {},
  w = { left: 8, right: 8, top: 4, bottom: 4 };
function T(_0x169de7, _0x19f50b, _0x42ae8c) {
  return {
    id: "shape-text-document",
    body: {
      dataStream: "\x0d\x0a",
      paragraphs: [
        {
          startIndex: 0,
          paragraphId: _0x304b1c(new Set()),
          paragraphStyle: { horizontalAlign: _0x169de7 },
        },
      ],
      textRuns: [],
    },
    documentStyle: {
      ...(_0x42ae8c ? { textStyle: _0x42ae8c } : null),
      renderConfig: { horizontalAlign: _0x169de7, verticalAlign: _0x19f50b },
    },
  };
}
function E(_0x21d015) {
  let _0x33e4c0 = _0x40e40a.LEFT,
    _0x46c510 = _0x21d015.verticalAlign ?? _0x269a70.TOP;
  return {
    fill: _0x21d015.fill ?? { fillType: _0x32d897.NoFill },
    isTextBox: true,
    shapeText: {
      isHorizontal: _0x21d015.isHorizontal,
      textDirection: _0x21d015.isHorizontal ? _0x8a69bd.Horz : _0x8a69bd.Vert,
      text: "",
      autoFitType: _0x4c0031.SpAutoFit,
      textWrap: _0x380e1f.None,
      dataModel: {
        ha: _0x33e4c0,
        va: _0x46c510,
        doc: T(_0x33e4c0, _0x46c510, _0x21d015.textStyle),
      },
    },
    stroke: _0x21d015.stroke ?? { lineStrokeType: _0xa8f6ac.NoLine },
  };
}
function D(_0x26c978 = {}) {
  return {
    ...E({
      fill: _0x26c978.fill,
      stroke: _0x26c978.stroke,
      isHorizontal: _0x26c978.isHorizontal ?? true,
      textStyle: _0x26c978.textStyle,
      verticalAlign: _0x26c978.verticalAlign ?? _0x269a70.MIDDLE,
    }),
    textRectPadding: { ...w, ..._0x26c978.textRectPadding },
    formulaBinding: {
      formula: _0x26c978.formula ?? "",
      ...(_0x26c978.lastValue ? { lastValue: _0x26c978.lastValue } : null),
      ...(_0x26c978.numberFormatPattern
        ? { numberFormat: { pattern: _0x26c978.numberFormatPattern } }
        : null),
    },
  };
}
function O(_0x212493, _0x561ddb) {
  let _0x2b8768 = D({ fill: _0x212493.fill, stroke: _0x212493.stroke });
  return {
    ..._0x2b8768,
    ..._0x212493,
    isTextBox: true,
    shapeText: _0x212493.shapeText ?? _0x2b8768.shapeText,
    textRectPadding: _0x212493.textRectPadding ?? _0x2b8768.textRectPadding,
    formulaBinding: _0x561ddb,
  };
}
const k = 1.5,
  A = [
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
function j(_0x41fedf) {
  return { fillType: _0x32d897.SolidFill, color: _0x41fedf, opacity: 1 };
}
function M(_0x325e63, _0x3945c6 = 2, _0x581d05 = _0xecf014.Solid) {
  return {
    lineStrokeType: _0xa8f6ac.SolidLine,
    color: _0x325e63,
    width: _0x3945c6,
    opacity: 1,
    dashType: _0x581d05,
  };
}
function N(_0x4f6892, _0x378364, _0x31a0bd) {
  return {
    id: _0x4f6892,
    type: "shape",
    fill: j(_0x378364),
    stroke: M(_0x31a0bd),
  };
}
function P(_0x514699, _0x20755d) {
  return {
    startArrow: { type: _0x514699, size: _0x2e7bb2.Medium },
    endArrow: { type: _0x20755d, size: _0x2e7bb2.Medium },
  };
}
const F = [
    N("shape-white-black", "#ffffff", "#111827"),
    N("shape-white-blue", "#ffffff", "#4472c4"),
    N("shape-white-orange", "#ffffff", "#ed7d31"),
    N("shape-white-gray", "#ffffff", "#a6a6a6"),
    N("shape-yellow-orange", "#fff2cc", "#f2a900"),
    N("shape-blue-blue", "#ddebf7", "#5b9bd5"),
    N("shape-green-green", "#e2f0d9", "#70ad47"),
    ...A.map((_0x411438) =>
      N("shape-soft-" + _0x411438.id, _0x411438.softFill, _0x411438.softStroke),
    ),
    ...A.map((_0x325a9f) =>
      N("shape-filled-" + _0x325a9f.id, _0x325a9f.filled, _0x325a9f.dark),
    ),
    ...A.map((_0x3bd276) =>
      N("shape-dark-" + _0x3bd276.id, _0x3bd276.dark, _0x3bd276.accent),
    ),
  ],
  I = [
    {
      id: "line-black-solid",
      type: "line",
      group: "solid",
      stroke: M("#111827", k),
      ln: P(_0x27ec2b.None, _0x27ec2b.None),
    },
    {
      id: "line-blue-solid",
      type: "line",
      group: "solid",
      stroke: M("#4472c4", k),
      ln: P(_0x27ec2b.None, _0x27ec2b.None),
    },
    {
      id: "line-orange-solid",
      type: "line",
      group: "solid",
      stroke: M("#ed7d31", k),
      ln: P(_0x27ec2b.None, _0x27ec2b.None),
    },
    {
      id: "line-gray-solid",
      type: "line",
      group: "solid",
      stroke: M("#a6a6a6", k),
      ln: P(_0x27ec2b.None, _0x27ec2b.None),
    },
    {
      id: "line-blue-end-arrow",
      type: "line",
      group: "solid",
      stroke: M("#4472c4", k),
      ln: P(_0x27ec2b.None, _0x27ec2b.Arrow),
    },
    {
      id: "line-green-two-way-arrow",
      type: "line",
      group: "solid",
      stroke: M("#70ad47", k),
      ln: P(_0x27ec2b.Arrow, _0x27ec2b.Arrow),
    },
    {
      id: "line-black-dashed",
      type: "line",
      group: "dashed",
      stroke: M("#111827", k, _0xecf014.Dash),
      ln: P(_0x27ec2b.None, _0x27ec2b.None),
    },
    {
      id: "line-blue-dashed",
      type: "line",
      group: "dashed",
      stroke: M("#4472c4", k, _0xecf014.Dash),
      ln: P(_0x27ec2b.None, _0x27ec2b.None),
    },
    {
      id: "line-gray-dashed",
      type: "line",
      group: "dashed",
      stroke: M("#a6a6a6", k, _0xecf014.Dash),
      ln: P(_0x27ec2b.None, _0x27ec2b.None),
    },
    {
      id: "line-blue-dashed-end-arrow",
      type: "line",
      group: "dashed",
      stroke: M("#4472c4", k, _0xecf014.Dash),
      ln: P(_0x27ec2b.None, _0x27ec2b.Arrow),
    },
    {
      id: "line-gray-dashed-end-arrow",
      type: "line",
      group: "dashed",
      stroke: M("#a6a6a6", k, _0xecf014.Dash),
      ln: P(_0x27ec2b.None, _0x27ec2b.Arrow),
    },
    {
      id: "line-green-dashed-two-way-arrow",
      type: "line",
      group: "dashed",
      stroke: M("#70ad47", k, _0xecf014.Dash),
      ln: P(_0x27ec2b.Arrow, _0x27ec2b.Arrow),
    },
  ],
  L = [
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
  R = [...F, ...I, ...L];
function ge(_0x4744b0) {
  return R.find((_0x51677e) => _0x51677e.id === _0x4744b0) ?? null;
}
function z(_0x33321f) {
  return _0x33321f === "shape" ? F : _0x33321f === "line" ? I : L;
}
function B(_0x313802) {
  return _0x313802.shapeType && _0x490afc(_0x313802.shapeType)
    ? "line"
    : "shape";
}
function _e(_0x25b496, _0x2faf8b) {
  var _0x15917d, _0x30d4b9;
  if (_0x2faf8b.type === "text") return null;
  if (_0x2faf8b.type === "shape")
    return {
      ..._0x25b496,
      fill: { ...(_0x25b496.fill ?? {}), ..._0x2faf8b.fill },
      stroke: { ...(_0x25b496.stroke ?? {}), ..._0x2faf8b.stroke },
    };
  let _0x545031 = "ln" in _0x25b496 ? _0x25b496.ln : undefined;
  return {
    ..._0x25b496,
    stroke: { ...(_0x25b496.stroke ?? {}), ..._0x2faf8b.stroke },
    ln: {
      ...(_0x545031 ?? {}),
      ..._0x2faf8b.ln,
      startArrow: {
        ...((_0x545031 == null ? undefined : _0x545031.startArrow) ?? {}),
        ...(((_0x15917d = _0x2faf8b.ln) == null
          ? undefined
          : _0x15917d.startArrow) ?? {}),
      },
      endArrow: {
        ...((_0x545031 == null ? undefined : _0x545031.endArrow) ?? {}),
        ...(((_0x30d4b9 = _0x2faf8b.ln) == null
          ? undefined
          : _0x30d4b9.endArrow) ?? {}),
      },
    },
  };
}
function V(_0x56b9a7) {
  return (_0x56b9a7 ?? "").toLowerCase();
}
function H(_0x154f72) {
  return (
    (_0x154f72 == null ? undefined : _0x154f72.dashType) ?? _0xecf014.Solid
  );
}
function U(_0x4263d7, _0x390660) {
  var _0x4f4403;
  return (
    (_0x4263d7 == null || (_0x4f4403 = _0x4263d7[_0x390660]) == null
      ? undefined
      : _0x4f4403.type) ?? _0x27ec2b.None
  );
}
function ve(_0x53dcf9, _0x512512) {
  var _0x4959d0, _0x19bb92, _0x22c679, _0x551869;
  return (
    V((_0x4959d0 = _0x53dcf9.fill) == null ? undefined : _0x4959d0.color) ===
      V((_0x19bb92 = _0x512512.fill) == null ? undefined : _0x19bb92.color) &&
    V((_0x22c679 = _0x53dcf9.stroke) == null ? undefined : _0x22c679.color) ===
      V(_0x512512.stroke["color"]) &&
    (((_0x551869 = _0x53dcf9.stroke) == null ? undefined : _0x551869.width) ??
      0) === _0x512512.stroke["width"]
  );
}
function ye(_0x2c00b3, _0x2cbfc2) {
  var _0x3b3c1e, _0x4ee3ee;
  let _0x1910c9 = "ln" in _0x2c00b3 ? _0x2c00b3.ln : undefined;
  return (
    V((_0x3b3c1e = _0x2c00b3.stroke) == null ? undefined : _0x3b3c1e.color) ===
      V(_0x2cbfc2.stroke["color"]) &&
    (((_0x4ee3ee = _0x2c00b3.stroke) == null ? undefined : _0x4ee3ee.width) ??
      0) === _0x2cbfc2.stroke["width"] &&
    H(_0x2c00b3.stroke) === H(_0x2cbfc2.stroke) &&
    U(_0x1910c9, "startArrow") === U(_0x2cbfc2.ln, "startArrow") &&
    U(_0x1910c9, "endArrow") === U(_0x2cbfc2.ln, "endArrow")
  );
}
function be(_0x53c298, _0x23cb69) {
  return _0x23cb69.type === "shape"
    ? ve(_0x53c298, _0x23cb69)
    : _0x23cb69.type === "line" && ye(_0x53c298, _0x23cb69);
}
function xe(_0x20ec31) {
  var _0x1cc997;
  return (
    ((_0x1cc997 = z(B(_0x20ec31)).find((_0x11564f) =>
      be(_0x20ec31, _0x11564f),
    )) == null
      ? undefined
      : _0x1cc997.id) ?? null
  );
}
function Se(_0x4e06c4, _0xb52546) {
  try {
    return new _0x207048(
      _0x4e06c4.shapeType ?? _0x4a5bc4.Rect,
      "shape-type-conversion",
      _0x4e06c4,
    ).cloneShapeDataForShapeType(_0xb52546);
  } catch {
    return null;
  }
}
var Ce = "@univerjs-pro/shape-editor",
  we = "1.0.0-insiders.20260907-70fc579";
function W(_0x1e1f63, _0x5c0fc1) {
  return _0x14ff0f({
    numberFormat: _0x1e1f63.numberFormat,
    lastValue: _0x1e1f63.lastValue,
    result: _0x5c0fc1,
  });
}
function G(_0x415059) {
  "@babel/helpers - typeof";
  return (
    (G =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x13ad35) {
            return typeof _0x13ad35;
          }
        : function (_0xa21f05) {
            return _0xa21f05 &&
              typeof Symbol == "function" &&
              _0xa21f05.constructor === Symbol &&
              _0xa21f05 !== Symbol.prototype
              ? "symbol"
              : typeof _0xa21f05;
          }),
    G(_0x415059)
  );
}
function Te(_0x3d0c4c, _0x5e83ba) {
  if (G(_0x3d0c4c) != "object" || !_0x3d0c4c) return _0x3d0c4c;
  var _0x56db23 = _0x3d0c4c[Symbol.toPrimitive];
  if (_0x56db23 !== undefined) {
    var _0x271215 = _0x56db23.call(_0x3d0c4c, _0x5e83ba || "default");
    if (G(_0x271215) != "object") return _0x271215;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5e83ba === "string" ? String : Number)(_0x3d0c4c);
}
function Ee(_0x271b17) {
  var _0x5b7ff1 = Te(_0x271b17, "string");
  return G(_0x5b7ff1) == "symbol" ? _0x5b7ff1 : _0x5b7ff1 + "";
}
function K(_0x3c0585, _0xa9780c, _0x55115d) {
  return (
    (_0xa9780c = Ee(_0xa9780c)) in _0x3c0585
      ? Object.defineProperty(_0x3c0585, _0xa9780c, {
          value: _0x55115d,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3c0585[_0xa9780c] = _0x55115d),
    _0x3c0585
  );
}
function q(_0x30199c, _0x4312f1) {
  return function (_0x5a7c90, _0x5aa3f6) {
    _0x4312f1(_0x5a7c90, _0x5aa3f6, _0x30199c);
  };
}
function J(_0x3f0c70, _0x54aec2, _0x18e8c6, _0x273ba3) {
  var _0x30fadb = arguments.length,
    _0x4f7742 =
      _0x30fadb < 3
        ? _0x54aec2
        : _0x273ba3 === null
          ? (_0x273ba3 = Object.getOwnPropertyDescriptor(_0x54aec2, _0x18e8c6))
          : _0x273ba3,
    _0x55c3d0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4f7742 = Reflect.decorate(_0x3f0c70, _0x54aec2, _0x18e8c6, _0x273ba3);
  else {
    for (var _0x11e5f9 = _0x3f0c70.length - 1; _0x11e5f9 >= 0; _0x11e5f9--)
      (_0x55c3d0 = _0x3f0c70[_0x11e5f9]) &&
        (_0x4f7742 =
          (_0x30fadb < 3
            ? _0x55c3d0(_0x4f7742)
            : _0x30fadb > 3
              ? _0x55c3d0(_0x54aec2, _0x18e8c6, _0x4f7742)
              : _0x55c3d0(_0x54aec2, _0x18e8c6)) || _0x4f7742);
  }
  return (
    _0x30fadb > 3 &&
      _0x4f7742 &&
      Object.defineProperty(_0x54aec2, _0x18e8c6, _0x4f7742),
    _0x4f7742
  );
}
let De = (function (_0x14edf5) {
  return (
    (_0x14edf5.EMPTY = "empty"),
    (_0x14edf5.PENDING = "pending"),
    (_0x14edf5.SUCCESS = "success"),
    (_0x14edf5.ERROR = "error"),
    _0x14edf5
  );
})({});
function Y(_0x40d704) {
  return (
    _0x40d704.unitId + "\x00" + _0x40d704.subUnitId + "\x00" + _0x40d704.shapeId
  );
}
let X = class extends _0x5e4d55 {
  constructor(_0xec7157, _0x47da4b) {
    (super(),
      (this._registerOtherFormulaService = _0xec7157),
      (this._hostExternalReferenceModel = _0x47da4b),
      K(this, "_registrations", new Map()),
      K(this, "_formulaKeys", new Map()),
      K(this, "_presentationChanged$", new _0x49e81f()),
      K(
        this,
        "presentationChanged$",
        this._presentationChanged$["asObservable"](),
      ),
      this.disposeWithMe(
        this._registerOtherFormulaService["formulaResult$"].subscribe(
          (_0xf3746c) => {
            for (let _0x23c9fc of Object.values(_0xf3746c))
              for (let _0x44b194 of Object.values(_0x23c9fc))
                for (let _0x345fc1 of _0x44b194)
                  this._updateFormulaResult(_0x345fc1);
          },
        ),
      ));
  }
  register(_0x2fb4b3, _0x10e7e7) {
    let _0x53a4f9 = Y(_0x2fb4b3),
      _0x18f63 = this._registrations["get"](_0x53a4f9),
      _0x141a15 = this._hostExternalReferenceModel["getRevision"](
        _0x2fb4b3.unitId,
      );
    if (
      _0x18f63 &&
      _0x18f63.binding["formula"] === _0x10e7e7.formula &&
      _0x18f63.referenceRevision === _0x141a15 &&
      (_0x2fb4b3.hostType === undefined ||
        _0x18f63.hostType === _0x2fb4b3.hostType) &&
      _0x18f63.formulaUnitId === _0x2fb4b3.unitId &&
      _0x18f63.formulaSubUnitId === _0x2fb4b3.subUnitId
    ) {
      _0x18f63.binding = _0x10e7e7;
      let _0x2eed7b = _0x18f63.formulaId
        ? (this._registerOtherFormulaService["getFormulaValueSync"](
            _0x18f63.formulaUnitId,
            _0x18f63.formulaSubUnitId,
            _0x18f63.formulaId,
          ) ?? undefined)
        : undefined;
      ((_0x18f63.liveResult = _0x2eed7b),
        this._setPresentation(_0x53a4f9, W(_0x10e7e7, _0x2eed7b)));
      return;
    }
    _0x18f63 != null &&
      _0x18f63.formulaId &&
      (this._registerOtherFormulaService["deleteFormula"](
        _0x18f63.formulaUnitId,
        _0x18f63.formulaSubUnitId,
        [_0x18f63.formulaId],
      ),
      this._formulaKeys["delete"](_0x18f63.formulaId));
    let _0xab34c6 = {
      ..._0x2fb4b3,
      hostType:
        _0x2fb4b3.hostType ??
        (_0x18f63 == null ? undefined : _0x18f63.hostType),
      binding: _0x10e7e7,
      referenceRevision: _0x141a15,
      formulaSubUnitId: _0x2fb4b3.subUnitId,
      formulaUnitId: _0x2fb4b3.unitId,
      presentation: W(_0x10e7e7, undefined),
    };
    if (
      (this._registrations["set"](_0x53a4f9, _0xab34c6),
      !_0x10e7e7.formula["trim"]())
    ) {
      this._setPresentation(_0x53a4f9, _0xab34c6.presentation);
      return;
    }
    let _0x37f4ea = this._registerOtherFormulaService[
      "registerFormulaWithRange"
    ](
      _0x2fb4b3.unitId,
      _0x2fb4b3.subUnitId,
      _0x10e7e7.formula,
      undefined,
      { shapeId: _0x2fb4b3.shapeId },
      _0x50b382.SHAPE,
      _0x2fb4b3.shapeId,
    );
    ((_0xab34c6.formulaId = _0x37f4ea),
      this._formulaKeys["set"](_0x37f4ea, _0x53a4f9));
  }
  update(_0x1788e4, _0x1f66ad) {
    this.register(_0x1788e4, _0x1f66ad);
  }
  unregister(_0x3f744c) {
    let _0x2cef06 = Y(_0x3f744c),
      _0x5b5957 = this._registrations["get"](_0x2cef06);
    _0x5b5957 &&
      (_0x5b5957.formulaId &&
        (this._registerOtherFormulaService["deleteFormula"](
          _0x5b5957.formulaUnitId,
          _0x5b5957.formulaSubUnitId,
          [_0x5b5957.formulaId],
        ),
        this._formulaKeys["delete"](_0x5b5957.formulaId)),
      this._registrations["delete"](_0x2cef06));
  }
  unregisterUnit(_0x121e27) {
    for (let _0x5b0264 of [...this._registrations["values"]()])
      _0x5b0264.unitId === _0x121e27 && this.unregister(_0x5b0264);
  }
  syncUnit(_0x38d7d2, _0x2b3a96) {
    let _0x2eed1d = _0x2b3a96.filter(
        (_0x4cf178) => _0x4cf178.shapeData["formulaBinding"],
      ),
      _0x4bed02 = new Set(_0x2eed1d.map(Y));
    for (let _0x37d13a of [...this._registrations["values"]()])
      _0x37d13a.unitId === _0x38d7d2 &&
        !_0x4bed02.has(Y(_0x37d13a)) &&
        this.unregister(_0x37d13a);
    for (let _0xb095b of _0x2eed1d)
      this.register(_0xb095b, _0xb095b.shapeData["formulaBinding"]);
  }
  getPresentation(_0x14e6fe) {
    var _0x5a8743;
    return (_0x5a8743 = this._registrations["get"](Y(_0x14e6fe))) == null
      ? undefined
      : _0x5a8743.presentation;
  }
  getResult(_0x1dc1a8) {
    let _0x50722f = this._registrations["get"](Y(_0x1dc1a8));
    return _0x50722f
      ? this._createResult(_0x50722f, _0x50722f.presentation)
      : undefined;
  }
  getRegisteredFormulas() {
    let _0x3a22d6 = [];
    for (let _0x1531a7 of this._registrations["values"]())
      _0x1531a7.hostType !== undefined &&
        _0x3a22d6.push({
          identity: {
            hostType: _0x1531a7.hostType,
            unitId: _0x1531a7.unitId,
            subUnitId: _0x1531a7.subUnitId,
            shapeId: _0x1531a7.shapeId,
          },
          binding: _0x1531a7.binding,
          referenceRevision: _0x1531a7.referenceRevision,
          liveResult: _0x1531a7.liveResult,
          presentation: _0x1531a7.presentation,
        });
    return _0x3a22d6;
  }
  _updateFormulaResult(_0x43c6d3) {
    let _0x2c8dd6 = this._formulaKeys["get"](_0x43c6d3.formulaId),
      _0x209fe8 = _0x2c8dd6 ? this._registrations["get"](_0x2c8dd6) : undefined;
    !_0x2c8dd6 ||
      !_0x209fe8 ||
      ((_0x209fe8.liveResult = _0x43c6d3),
      this._setPresentation(_0x2c8dd6, W(_0x209fe8.binding, _0x43c6d3)));
  }
  _setPresentation(_0x24464d, _0x1be344) {
    var _0x316f25, _0x1c940c, _0x54ffc7, _0x130a03;
    let _0x6c8387 = this._registrations["get"](_0x24464d);
    if (
      !_0x6c8387 ||
      (_0x6c8387.presentation["text"] === _0x1be344.text &&
        _0x6c8387.presentation["color"] === _0x1be344.color &&
        _0x6c8387.presentation["pattern"] === _0x1be344.pattern &&
        ((_0x316f25 = _0x6c8387.presentation["cell"]) == null
          ? undefined
          : _0x316f25.t) ===
          ((_0x1c940c = _0x1be344.cell) == null ? undefined : _0x1c940c.t) &&
        _0x6c8387.presentation["source"] === _0x1be344.source &&
        _0x6c8387.presentation["stale"] === _0x1be344.stale &&
        Object.is(
          (_0x54ffc7 = _0x6c8387.presentation["cell"]) == null
            ? undefined
            : _0x54ffc7.v,
          (_0x130a03 = _0x1be344.cell) == null ? undefined : _0x130a03.v,
        ))
    )
      return;
    let _0x4d0ee1 = _0x6c8387.presentation;
    ((_0x6c8387.presentation = _0x1be344),
      this._presentationChanged$["next"]({
        unitId: _0x6c8387.unitId,
        subUnitId: _0x6c8387.subUnitId,
        shapeId: _0x6c8387.shapeId,
        presentation: _0x1be344,
        previousPresentation: _0x4d0ee1,
        result: this._createResult(_0x6c8387, _0x1be344),
        previousResult: this._createResult(_0x6c8387, _0x4d0ee1),
        animationEnabled:
          _0x6c8387.binding["animationEnabled"] !== false && !_0x4d0ee1.stale,
      }));
  }
  _createResult(_0x78ebae, _0x1b8d22) {
    var _0x1507a8, _0x441c8f;
    let _0x51b30b =
      (_0x1507a8 = _0x1b8d22.cell) == null ? undefined : _0x1507a8.v;
    return {
      status: _0x78ebae.binding["formula"].trim()
        ? _0x1b8d22.stale || _0x1b8d22.cell == null
          ? "pending"
          : typeof _0x51b30b == "string" && _0x51b30b.startsWith("#")
            ? "error"
            : "success"
        : "empty",
      value: _0x51b30b,
      valueType:
        ((_0x441c8f = _0x1b8d22.cell) == null ? undefined : _0x441c8f.t) ??
        undefined,
      displayText: _0x1b8d22.text,
      color: _0x1b8d22.color,
      numberFormat: _0x1b8d22.pattern,
      source: _0x1b8d22.source,
      stale: _0x1b8d22.stale,
    };
  }
  dispose() {
    for (let _0x252fff of this._registrations["values"]())
      _0x252fff.formulaId &&
        this._registerOtherFormulaService["deleteFormula"](
          _0x252fff.formulaUnitId,
          _0x252fff.formulaSubUnitId,
          [_0x252fff.formulaId],
        );
    (this._registrations["clear"](),
      this._formulaKeys["clear"](),
      this._presentationChanged$["complete"](),
      super.dispose());
  }
};
X = J([q(0, _0x584d36(_0xc7ba5d)), q(1, _0x584d36(_0x2fa094))], X);
let Z = class extends _0x5e4d55 {
  constructor(_0x5e82c2, _0x13af0e, _0x28d6ce) {
    (super(),
      (this._instanceService = _0x5e82c2),
      (this._shapeHostAdapterRegistry = _0x13af0e),
      (this._shapeFormulaService = _0x28d6ce),
      K(this, "_isDisposed", false),
      K(this, "_pendingUnitIds", new Set()),
      K(this, "_adapterBindings", new Map()),
      K(this, "_syncScheduled", false));
    let _0x58e17f = this._shapeHostAdapterRegistry["adapterChanged$"].subscribe(
      (_0x7b0513) => {
        this._handleAdapterChange(_0x7b0513);
      },
    );
    this.disposeWithMe(() => _0x58e17f.unsubscribe());
    for (let _0x3efaf6 of this._shapeHostAdapterRegistry["list"]())
      this._bindAdapter(_0x3efaf6);
    (this.disposeWithMe(
      this._instanceService["unitAdded$"].subscribe(({ unit: _0x4c3f14 }) => {
        this._queueSync(_0x4c3f14.getUnitId());
      }),
    ),
      this.disposeWithMe(
        this._instanceService["unitDisposed$"].subscribe((_0x1f41bb) => {
          this._shapeFormulaService["unregisterUnit"](_0x1f41bb.getUnitId());
        }),
      ));
  }
  _handleAdapterChange(_0x24f53b) {
    this._isDisposed ||
      (_0x24f53b.type === "registered"
        ? this._bindAdapter(_0x24f53b.adapter)
        : this._unbindAdapter(_0x24f53b.adapter));
  }
  _bindAdapter(_0xfc2425) {
    var _0x371489;
    let _0x25e1a1 = this._adapterBindings["get"](_0xfc2425.hostType);
    if ((_0x25e1a1 == null ? undefined : _0x25e1a1.adapter) === _0xfc2425)
      return;
    _0x25e1a1 == null || _0x25e1a1.unsubscribe();
    let _0x3d8515 =
      (_0x371489 = _0xfc2425.shapeChanged$) == null
        ? undefined
        : _0x371489.subscribe(({ unitId: _0x5b2a33 }) =>
            this._queueSync(_0x5b2a33),
          );
    this._adapterBindings["set"](_0xfc2425.hostType, {
      adapter: _0xfc2425,
      unsubscribe: () =>
        _0x3d8515 == null ? undefined : _0x3d8515.unsubscribe(),
    });
    for (let _0x3be964 of this._instanceService["getAllUnitsForType"](
      _0xfc2425.hostType,
    ))
      this._syncUnit(_0x3be964.getUnitId());
  }
  _unbindAdapter(_0x272005) {
    let _0x3c116c = this._adapterBindings["get"](_0x272005.hostType);
    if ((_0x3c116c == null ? undefined : _0x3c116c.adapter) === _0x272005) {
      (_0x3c116c.unsubscribe(),
        this._adapterBindings["delete"](_0x272005.hostType));
      for (let _0x56f272 of this._instanceService["getAllUnitsForType"](
        _0x272005.hostType,
      ))
        this._shapeFormulaService["unregisterUnit"](_0x56f272.getUnitId());
    }
  }
  _queueSync(_0x25a78a) {
    (this._pendingUnitIds["add"](_0x25a78a),
      !this._syncScheduled &&
        ((this._syncScheduled = true),
        queueMicrotask(() => {
          if (((this._syncScheduled = false), this._isDisposed)) return;
          let _0x50bd99 = [...this._pendingUnitIds];
          (this._pendingUnitIds["clear"](),
            _0x50bd99.forEach((_0x27be15) => this._syncUnit(_0x27be15)));
        })));
  }
  _syncUnit(_0xf445db) {
    var _0x40faf9, _0x27fe4a;
    let _0x2e08f3 = this._instanceService["getUnitType"](_0xf445db);
    if (!_0x40fc8f(_0x2e08f3)) return;
    let _0x4a59f0 =
      (_0x40faf9 = this._adapterBindings["get"](_0x2e08f3)) == null
        ? undefined
        : _0x40faf9.adapter;
    _0x4a59f0 &&
      this._shapeFormulaService["syncUnit"](
        _0xf445db,
        ((_0x27fe4a = _0x4a59f0.listShapesInUnit) == null
          ? undefined
          : _0x27fe4a.call(_0x4a59f0, _0xf445db)) ?? [],
      );
  }
  dispose() {
    this._isDisposed = true;
    for (let _0xd6f5a7 of this._adapterBindings["values"]())
      _0xd6f5a7.unsubscribe();
    (this._adapterBindings["clear"](), super.dispose());
  }
};
Z = J([q(0, _0x16fb35), q(1, _0x951877), q(2, _0x584d36(X))], Z);
let Q = class extends _0x5e4d55 {
  constructor(_0x3bdb2a, _0x21acb2, _0x35c470, _0x1f7269) {
    (super(),
      (this._formulaService = _0x3bdb2a),
      (this._cacheEligibilityService = _0x21acb2),
      (this._shapeHostAdapterRegistry = _0x35c470),
      this.disposeWithMe(_0x1f7269.registerProvider(this)));
  }
  collectMutations(_0x41420b) {
    let _0x3cee4c = [];
    for (let _0x1a5fec of this._formulaService["getRegisteredFormulas"]()) {
      var _0x2a3977;
      if (
        !this._cacheEligibilityService["assess"](
          _0x1a5fec.binding["formula"],
          _0x1a5fec.liveResult,
        ).eligible
      )
        continue;
      let _0x7b1404 = _0x49e948(_0x1a5fec.liveResult),
        _0x13e33e = _0x7b1404 ? _0x4df3ad(_0x7b1404) : null;
      if (!_0x13e33e || Oe(_0x1a5fec.binding["lastValue"], _0x13e33e)) continue;
      let _0x433002 = this._shapeHostAdapterRegistry["get"](
          _0x1a5fec.identity["hostType"],
        ),
        _0x1ee08e =
          _0x433002 == null ||
          (_0x2a3977 = _0x433002.createFormulaLastValueMutation) == null
            ? undefined
            : _0x2a3977.call(
                _0x433002,
                _0x1a5fec.identity,
                {
                  expectedFormula: _0x1a5fec.binding["formula"],
                  expectedReferenceRevision: _0x1a5fec.referenceRevision,
                },
                _0x13e33e,
              );
      _0x1ee08e && _0x3cee4c.push(_0x1ee08e);
    }
    return _0x3cee4c;
  }
};
Q = J(
  [
    q(0, _0x584d36(X)),
    q(1, _0x584d36(_0x45d19e)),
    q(2, _0x951877),
    q(3, _0x584d36(_0x135d59)),
  ],
  Q,
);
function Oe(_0x5b839c, _0x1491d6) {
  return (
    (_0x5b839c == null ? undefined : _0x5b839c.v) === _0x1491d6.v &&
    (_0x5b839c == null ? undefined : _0x5b839c.t) === _0x1491d6.t &&
    (_0x5b839c == null ? undefined : _0x5b839c.pattern) === _0x1491d6.pattern
  );
}
let $ = class extends _0x5841c1 {
  constructor(_0x3a0ab2 = C, _0x42fdc2, _0xcf83d9) {
    (super(),
      (this._config = _0x3a0ab2),
      (this._injector = _0x42fdc2),
      (this._configService = _0xcf83d9));
    let { ..._0x1b5979 } = _0x2c14cd({}, C, this._config);
    this._configService["setConfig"](S, _0x1b5979);
  }
  onStarting() {
    (this._injector["add"]([X]),
      this._injector["add"]([Z]),
      this._injector["add"]([Q]));
  }
  onReady() {
    _0x34030f(this._injector, [[Z], [Q]]);
  }
};
(K($, "type", _0x4f563c.UNIVER_UNKNOWN),
  K($, "pluginName", "SHAPE_EDITOR_PLUGIN"),
  K($, "packageName", Ce),
  K($, "version", we),
  ($ = J(
    [
      _0x43d573(_0x193611, _0x51f529, _0xbe4635),
      q(1, _0x584d36(_0x3b9230)),
      q(2, _0x22a890),
    ],
    $,
  )));
function ke(_0x562c37, _0x132030) {
  var _0x279bcc, _0x5960e1, _0x5960c1, _0x21f3e5;
  if (!_0x132030) return _0x562c37;
  let _0x3d47f7 = _0x132030.text,
    _0xc032cc = _0x562c37.body,
    _0x234be4 =
      (_0xc032cc == null ||
      (_0x279bcc = _0xc032cc.textRuns) == null ||
      (_0x279bcc = _0x279bcc[0]) == null
        ? undefined
        : _0x279bcc.ts) ??
      ((_0x5960e1 = _0x562c37.documentStyle) == null
        ? undefined
        : _0x5960e1.textStyle) ??
      {},
    _0x2bda28 = _0x132030.color
      ? { ..._0x234be4, cl: { rgb: _0x132030.color } }
      : _0x234be4,
    _0x29cc8c =
      _0xc032cc == null || (_0x5960c1 = _0xc032cc.paragraphs) == null
        ? undefined
        : _0x5960c1[0],
    _0x448729 =
      _0xc032cc == null || (_0x21f3e5 = _0xc032cc.sectionBreaks) == null
        ? undefined
        : _0x21f3e5[0],
    _0x1a7e41 =
      (_0x29cc8c == null ? undefined : _0x29cc8c.paragraphId) ??
      _0x304b1c(new Set());
  return {
    ..._0x562c37,
    body: {
      ..._0xc032cc,
      dataStream: _0x3d47f7 + "\x0d\x0a",
      textRuns: _0x3d47f7.length
        ? [{ st: 0, ed: _0x3d47f7.length, ts: _0x2bda28 }]
        : [],
      paragraphs: [
        {
          ...(_0x29cc8c ?? {}),
          startIndex: _0x3d47f7.length,
          paragraphId: _0x1a7e41,
        },
      ],
      sectionBreaks: _0x448729
        ? [{ ..._0x448729, startIndex: _0x3d47f7.length + 1 }]
        : _0xc032cc == null
          ? undefined
          : _0xc032cc.sectionBreaks,
    },
  };
}
export {
  w as FORMULA_SHAPE_DEFAULT_TEXT_RECT_PADDING,
  De as FormulaShapeResultStatus,
  S as SHAPE_EDITOR_PLUGIN_CONFIG_KEY,
  I as SHAPE_LINE_QUICK_STYLE_PRESETS,
  F as SHAPE_QUICK_STYLE_PRESETS,
  X as ShapeFormulaService,
  $ as UniverShapeEditorPlugin,
  _e as applyQuickStyleToShapeData,
  Se as cloneShapeDataForType,
  D as createFormulaShapeData,
  O as createFormulaShapeDataFromShape,
  ke as createShapeFormulaDocument,
  E as createShapeTextBoxShapeData,
  ge as getShapeQuickStylePreset,
  z as getShapeQuickStylePresets,
  B as getShapeQuickStyleType,
  xe as resolveActiveShapeQuickStylePresetId,
  W as resolveShapeFormulaPresentation,
};
