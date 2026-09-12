Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/bases-dashboard"),
  t = require("@univerjs-pro/bases-ui"),
  n = require("@univerjs-pro/chart-ui"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs-pro/shape-editor"),
  a = require("@univerjs/core"),
  o = require("@univerjs/docs-ui"),
  s = require("@univerjs/icons"),
  c = require("rxjs"),
  l = require("@univerjs-pro/collaboration-client"),
  u = require("@univerjs-pro/engine-shape"),
  d = require("@univerjs/design"),
  f = require("@univerjs/ui"),
  p = require("react"),
  m = require("react/jsx-runtime"),
  h = require("@univerjs-pro/engine-chart"),
  g = require("@univerjs-pro/engine-pivot");
var _ = "@univerjs-pro/bases-dashboard-ui",
  v = "1.0.0-insiders.20260907-70fc579";
const y = {};
function b(_0x1c9c18, _0x43b1a6) {
  let _0x3c4554 = (0, f.useDependency)(a.IPermissionService);
  return (0, f.useObservable)(
    () =>
      _0x3c4554.permissionPointUpdate$["pipe"](
        (0, c.map)(() =>
          (0, e.canEditBaseDashboard)(_0x3c4554, _0x1c9c18, _0x43b1a6),
        ),
      ),
    (0, e.canEditBaseDashboard)(_0x3c4554, _0x1c9c18, _0x43b1a6),
    false,
    [_0x43b1a6, _0x3c4554, _0x1c9c18],
  );
}
function x(_0x359efe, _0x4260a1, _0xdf9232) {
  let _0x4a68dd = (0, f.useDependency)(a.IPermissionService);
  return (0, f.useObservable)(
    () =>
      _0x4a68dd.permissionPointUpdate$["pipe"](
        (0, c.map)(() =>
          (0, e.canEditBasePivotView)(
            _0x4a68dd,
            _0x359efe,
            _0x4260a1,
            _0xdf9232,
          ),
        ),
      ),
    (0, e.canEditBasePivotView)(_0x4a68dd, _0x359efe, _0x4260a1, _0xdf9232),
    false,
    [_0x4a68dd, _0x4260a1, _0x359efe, _0xdf9232],
  );
}
function S(_0x30d0a7, _0x11c1a3 = "cover") {
  return {
    backgroundImage: "url(" + JSON.stringify(_0x30d0a7) + ")",
    backgroundPosition: _0x11c1a3 === "repeat" ? "0 0" : "center",
    backgroundRepeat: _0x11c1a3 === "repeat" ? "repeat" : "no-repeat",
    backgroundSize: _0x11c1a3 === "cover" ? "cover" : "auto",
  };
}
const C = {
    alignment: "left",
    currency: "USD",
    decimalPlaces: 0,
    fontSize: 40,
    fontSizeMode: "auto",
    numberFormat: "general",
  },
  w = { CNY: "¥", EUR: "€", USD: "$" };
function T(_0x4a4a97) {
  var _0x389c36;
  let _0x586eb4 = k(
    ((_0x389c36 = _0x4a4a97.shapeData["formulaBinding"]) == null ||
    (_0x389c36 = _0x389c36.numberFormat) == null
      ? undefined
      : _0x389c36.pattern) ?? "",
  );
  return { ...C, ..._0x586eb4, ..._0x4a4a97.appearance };
}
function E(_0x58b67e, _0x3b7221) {
  let _0x20712a = { ..._0x58b67e.appearance, ..._0x3b7221 },
    _0x488d06 = T({ ..._0x58b67e, appearance: _0x20712a }),
    _0x262293 = _0x58b67e.shapeData["formulaBinding"] ?? { formula: "" };
  return {
    ..._0x58b67e,
    appearance: _0x20712a,
    shapeData: {
      ..._0x58b67e.shapeData,
      formulaBinding: {
        ..._0x262293,
        numberFormat: {
          pattern: D(
            _0x488d06.numberFormat,
            _0x488d06.decimalPlaces,
            _0x488d06.currency,
          ),
        },
      },
    },
  };
}
function D(_0x2aeac8, _0x1523c8, _0x37dbb0) {
  let _0x3abde2 = Math.max(0, Math.min(8, Math.round(_0x1523c8))),
    _0x581209 = _0x3abde2 ? "." + "0"["repeat"](_0x3abde2) : "";
  switch (_0x2aeac8) {
    case "number":
      return "0" + _0x581209;
    case "percent":
      return "0" + _0x581209 + "%";
    case "currency":
      return (w[_0x37dbb0] ?? _0x37dbb0) + "#,##0" + _0x581209;
    case "grouped":
      return "#,##0" + _0x581209;
    case "compact":
    case "general":
      return "General";
  }
}
function O(_0x5b1909, _0x45b594, _0x317a3f) {
  return _0x317a3f.numberFormat !== "compact" ||
    typeof _0x45b594 != "number" ||
    !Number.isFinite(_0x45b594)
    ? _0x5b1909
    : new Intl["NumberFormat"](undefined, {
        notation: "compact",
        minimumFractionDigits: _0x317a3f.decimalPlaces ?? 0,
        maximumFractionDigits: _0x317a3f.decimalPlaces ?? 0,
      }).format(_0x45b594);
}
function k(_0x1ffd6d) {
  var _0x9a54e0, _0x58ec5b;
  if (!_0x1ffd6d || _0x1ffd6d === "General") return {};
  let _0x1987df = _0x1ffd6d.match(/\.([0#]+)/),
    _0x2bb0e5 =
      (_0x1987df == null || (_0x9a54e0 = _0x1987df[1]) == null
        ? undefined
        : _0x9a54e0.length) ?? 0;
  if (_0x1ffd6d.includes("%"))
    return { decimalPlaces: _0x2bb0e5, numberFormat: "percent" };
  let _0x2c0d04 =
    (_0x58ec5b = Object.entries(w).find(([, _0x15c17f]) =>
      _0x1ffd6d.includes(_0x15c17f),
    )) == null
      ? undefined
      : _0x58ec5b[0];
  return _0x2c0d04
    ? {
        currency: _0x2c0d04,
        decimalPlaces: _0x2bb0e5,
        numberFormat: "currency",
      }
    : {
        decimalPlaces: _0x2bb0e5,
        numberFormat: _0x1ffd6d.includes(",") ? "grouped" : "number",
      };
}
const A = { center: "center", left: "flex-start", right: "flex-end" };
function j({ dashboardId: _0x1556fb, unitId: _0x5527c1, widget: _0x3e3ceb }) {
  var _0x4c5d41,
    _0x1d39cd,
    _0x2f7a32,
    _0x1ab83c,
    _0x125a9c,
    _0x2c4580,
    _0x5c6450,
    _0x2777e4,
    _0x8bc5bb;
  let _0x24325b = (0, f.useDependency)(i.ShapeFormulaService),
    _0x1b2ef3 = (0, f.useDependency)(a.IImageIoService),
    _0x34ea7c = (0, f.useDependency)(a.LocaleService),
    _0x474b7b = (0, p.useMemo)(
      () => ({
        hostType: a.UniverInstanceType["UNIVER_BASE"],
        unitId: _0x5527c1,
        subUnitId: _0x1556fb,
        shapeId: _0x3e3ceb.id,
      }),
      [_0x1556fb, _0x5527c1, _0x3e3ceb.id],
    ),
    [_0x1ed1b8, _0x43afa2] = (0, p.useState)(() =>
      _0x24325b.getPresentation(_0x474b7b),
    ),
    [_0x56d03e, _0x53a6f9] = (0, p.useState)(() => {
      var _0x25929d;
      return (_0x25929d = _0x24325b.getResult(_0x474b7b)) == null
        ? undefined
        : _0x25929d.value;
    }),
    [_0x5d2119, _0x529394] = (0, p.useState)(),
    _0x15525f = (0, p.useRef)(null),
    _0x16df9c = (0, p.useRef)(null),
    _0x295956 = T(_0x3e3ceb);
  ((0, p.useEffect)(() => {
    let _0x5f04ad = _0x24325b.presentationChanged$["subscribe"]((_0xf16010) => {
      _0xf16010.unitId === _0x5527c1 &&
        _0xf16010.subUnitId === _0x1556fb &&
        _0xf16010.shapeId === _0x3e3ceb.id &&
        (_0x43afa2(_0xf16010.presentation),
        _0x53a6f9(_0xf16010.result["value"]));
    });
    return () => _0x5f04ad.unsubscribe();
  }, [_0x1556fb, _0x24325b, _0x474b7b, _0x5527c1, _0x3e3ceb.id]),
    (0, p.useEffect)(() => {
      let _0x1d0435 = _0x295956.backgroundImage;
      if (!_0x1d0435 || _0x1d0435.sourceType !== a.ImageSourceType["UUID"])
        return;
      let _0x24eb25 = _0x1b2ef3.getImageSourceCache(
        _0x1d0435.source,
        _0x1d0435.sourceType,
      );
      if (_0x24eb25 != null && _0x24eb25.src) return;
      let _0x5bb8b8 = true;
      return (
        _0x1b2ef3
          .getImage(_0x1d0435.source)
          .then((_0x2621f6) => {
            _0x5bb8b8 &&
              _0x529394({ source: _0x1d0435.source, value: _0x2621f6 });
          })
          .catch(() => undefined),
        () => {
          _0x5bb8b8 = false;
        }
      );
    }, [_0x295956.backgroundImage, _0x1b2ef3]));
  let _0x1e3fbc =
      ((_0x4c5d41 = _0x295956.backgroundImage) == null
        ? undefined
        : _0x4c5d41.sourceType) === a.ImageSourceType["UUID"]
        ? (((_0x1d39cd = _0x1b2ef3.getImageSourceCache(
            _0x295956.backgroundImage["source"],
            _0x295956.backgroundImage["sourceType"],
          )) == null
            ? undefined
            : _0x1d39cd.src) ??
          ((_0x5d2119 == null ? undefined : _0x5d2119.source) ===
          _0x295956.backgroundImage["source"]
            ? _0x5d2119.value
            : ""))
        : (((_0x2f7a32 = _0x295956.backgroundImage) == null
            ? undefined
            : _0x2f7a32.source) ?? ""),
    _0x2698ec = _0x3e3ceb.shapeData["shapeText"],
    _0x2c102f =
      _0x2698ec && "dataModel" in _0x2698ec
        ? (_0x1ab83c = _0x2698ec.dataModel) == null
          ? undefined
          : _0x1ab83c.doc
        : undefined,
    _0x246436 = O(
      (_0x1ed1b8 == null ? undefined : _0x1ed1b8.text) ?? "",
      _0x56d03e,
      _0x295956,
    ),
    _0x3c19db = _0x3e3ceb.shapeData["fill"],
    _0x17e433 = _0x3e3ceb.shapeData["stroke"],
    _0x14d6ad =
      _0x2c102f == null || (_0x125a9c = _0x2c102f.documentStyle) == null
        ? undefined
        : _0x125a9c.textStyle,
    _0x1fc777 = _0x3e3ceb.description ?? _0x3e3ceb.title ?? "";
  return (
    (0, p.useEffect)(() => {
      let _0x57121d = _0x15525f.current,
        _0x353c65 = _0x16df9c.current;
      if (!_0x57121d || !_0x353c65) return;
      let _0xa56e64 = () => {
        if (
          _0x295956.fontSizeMode === "custom" ||
          !_0x57121d.clientWidth ||
          !_0x57121d.clientHeight
        ) {
          _0x353c65.style["fontSize"] = _0x295956.fontSize + "px";
          return;
        }
        let _0x53cc81 = 1,
          _0x1a2388 = 72,
          _0x4e723a = _0x53cc81;
        for (; _0x53cc81 <= _0x1a2388;) {
          let _0x20d7f5 = Math.floor((_0x53cc81 + _0x1a2388) / 2);
          ((_0x353c65.style["fontSize"] = _0x20d7f5 + "px"),
            _0x353c65.scrollWidth <= _0x57121d.clientWidth &&
            _0x353c65.scrollHeight <= _0x57121d.clientHeight
              ? ((_0x4e723a = _0x20d7f5), (_0x53cc81 = _0x20d7f5 + 1))
              : (_0x1a2388 = _0x20d7f5 - 1));
        }
        _0x353c65.style["fontSize"] = _0x4e723a + "px";
      };
      if ((_0xa56e64(), typeof ResizeObserver > "u")) return;
      let _0x3fefa6 = new ResizeObserver(_0xa56e64);
      return (_0x3fefa6.observe(_0x57121d), () => _0x3fefa6.disconnect());
    }, [_0x295956.fontSize, _0x295956.fontSizeMode, _0x246436]),
    (0, m.jsxs)("div", {
      "data-dashboard-formula-shape": _0x3e3ceb.id,
      className:
        "univer-relative univer-box-border univer-flex univer-h-full univer-w-full univer-flex-col univer-justify-center univer-overflow-hidden univer-bg-gray-0 univer-p-4 univer-text-gray-1000 dark:!univer-bg-gray-900 dark:!univer-text-gray-50",
      style: {
        backgroundColor:
          ((_0x2c4580 = _0x3e3ceb.appearance) == null
            ? undefined
            : _0x2c4580.backgroundColor) ??
          ((_0x3c19db == null ? undefined : _0x3c19db.fillType) ===
          u.ShapeFillEnum["SolidFill"]
            ? (_0x3c19db.color ?? undefined)
            : undefined),
        border:
          (_0x17e433 == null ? undefined : _0x17e433.lineStrokeType) ===
          u.ShapeLineTypeEnum["SolidLine"]
            ? (_0x17e433.width ?? 1) +
              "px\x20solid\x20" +
              (_0x17e433.color ?? "currentColor")
            : undefined,
        borderRadius:
          _0x3e3ceb.shapeType === u.ShapeTypeEnum["RoundRect"] ? 12 : undefined,
        color:
          ((_0x5c6450 = _0x3e3ceb.appearance) == null
            ? undefined
            : _0x5c6450.textColor) ??
          (_0x1ed1b8 == null ? undefined : _0x1ed1b8.color) ??
          (_0x14d6ad == null || (_0x2777e4 = _0x14d6ad.cl) == null
            ? undefined
            : _0x2777e4.rgb) ??
          undefined,
        fontWeight: _0x14d6ad != null && _0x14d6ad.bl ? 600 : undefined,
        textAlign: _0x295956.alignment,
      },
      children: [
        _0x1e3fbc &&
          (0, m.jsx)("img", {
            src: _0x1e3fbc,
            alt: "",
            "aria-hidden": "true",
            className:
              "univer-pointer-events-none univer-absolute univer-inset-0 univer-h-full univer-w-full",
            style: {
              objectFit:
                ((_0x8bc5bb = _0x295956.backgroundImage) == null
                  ? undefined
                  : _0x8bc5bb.fit) ?? "cover",
            },
          }),
        (0, m.jsxs)("div", {
          className:
            "univer-relative univer-z-10 univer-flex univer-min-h-0 univer-w-full univer-flex-1",
          children: [
            _0x1fc777 &&
              (0, m.jsx)("div", {
                "data-dashboard-formula-description": true,
                className:
                  "univer-absolute univer-inset-x-0 univer-top-0 univer-w-full univer-truncate univer-text-sm univer-font-medium univer-opacity-80",
                children: _0x1fc777,
              }),
            (0, m.jsx)("div", {
              ref: _0x15525f,
              "data-dashboard-formula-value": true,
              "aria-label":
                _0x1fc777 ||
                _0x34ea7c.t("bases-dashboard-ui.dashboard.formulaShape"),
              className:
                "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-1 univer-items-center univer-overflow-hidden",
              style: { justifyContent: A[_0x295956.alignment] },
              children: (0, m.jsx)("span", {
                ref: _0x16df9c,
                "data-dashboard-formula-value-text": true,
                "data-font-size-mode": _0x295956.fontSizeMode,
                className:
                  "univer-inline-block univer-max-w-full univer-whitespace-nowrap univer-leading-none",
                children: _0x246436,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function M(_0xf4260b, _0x26256a, _0x2251e9, _0x356eeb) {
  let _0x45a06c = { ..._0xf4260b };
  if (_0x26256a.includes("w")) {
    let _0x1ac12e = _0xf4260b.column + _0xf4260b.columnSpan;
    ((_0x45a06c.column = Math.max(
      0,
      Math.min(_0x1ac12e - 1, _0xf4260b.column + _0x2251e9),
    )),
      (_0x45a06c.columnSpan = _0x1ac12e - _0x45a06c.column));
  } else
    _0x26256a.includes("e") &&
      (_0x45a06c.columnSpan = Math.max(
        1,
        Math.min(
          e.BASES_DASHBOARD_GRID_COLUMNS - _0xf4260b.column,
          _0xf4260b.columnSpan + _0x2251e9,
        ),
      ));
  if (_0x26256a.includes("n")) {
    let _0x24e92f = _0xf4260b.row + _0xf4260b.rowSpan;
    ((_0x45a06c.row = Math.max(
      0,
      Math.min(_0x24e92f - 1, _0xf4260b.row + _0x356eeb),
    )),
      (_0x45a06c.rowSpan = _0x24e92f - _0x45a06c.row));
  } else
    _0x26256a.includes("s") &&
      (_0x45a06c.rowSpan = Math.max(1, _0xf4260b.rowSpan + _0x356eeb));
  return _0x45a06c;
}
function N(_0x4cb43a) {
  let _0x41bada = Math.max(
    1,
    Math.min(e.BASES_DASHBOARD_GRID_COLUMNS, Math.round(_0x4cb43a.columnSpan)),
  );
  return {
    column: Math.max(
      0,
      Math.min(
        e.BASES_DASHBOARD_GRID_COLUMNS - _0x41bada,
        Math.round(_0x4cb43a.column),
      ),
    ),
    row: Math.max(0, Math.round(_0x4cb43a.row)),
    columnSpan: _0x41bada,
    rowSpan: Math.max(1, Math.round(_0x4cb43a.rowSpan)),
  };
}
function P(_0x534b2b, _0xe11c51, _0xf55371) {
  let _0x1bb2dc = new Map(_0x534b2b),
    _0x275482 = N(_0xf55371);
  _0x1bb2dc.set(_0xe11c51, _0x275482);
  let _0x517cc9 = [[_0xe11c51, _0x275482]];
  for (let [_0x11a79e, _0x3e6bc1] of _0x1bb2dc) {
    if (_0x11a79e === _0xe11c51) continue;
    let _0x1e1d33 = N(_0x3e6bc1);
    for (; _0x517cc9.some(([, _0x4dedb1]) => I(_0x1e1d33, _0x4dedb1));)
      _0x1e1d33 = { ..._0x1e1d33, row: _0x1e1d33.row + 1 };
    for (; _0x1e1d33.row > 0;) {
      let _0x117413 = { ..._0x1e1d33, row: _0x1e1d33.row - 1 };
      if (_0x517cc9.some(([, _0x401c6e]) => I(_0x117413, _0x401c6e))) break;
      _0x1e1d33 = _0x117413;
    }
    (_0x517cc9.push([_0x11a79e, _0x1e1d33]),
      _0x1bb2dc.set(_0x11a79e, _0x1e1d33));
  }
  return _0x1bb2dc;
}
function F(_0x3e0cbe, _0x42bb83, _0x54b6d4, _0x35b4c2 = 56, _0x3fb946 = 22) {
  return _0x3e0cbe < _0x42bb83 + _0x35b4c2
    ? -Math.ceil(
        _0x3fb946 * (1 - Math.max(0, _0x3e0cbe - _0x42bb83) / _0x35b4c2),
      )
    : _0x3e0cbe > _0x54b6d4 - _0x35b4c2
      ? Math.ceil(
          _0x3fb946 * (1 - Math.max(0, _0x54b6d4 - _0x3e0cbe) / _0x35b4c2),
        )
      : 0;
}
function I(_0x26153a, _0x754b6c) {
  return (
    _0x26153a.column < _0x754b6c.column + _0x754b6c.columnSpan &&
    _0x26153a.column + _0x26153a.columnSpan > _0x754b6c.column &&
    _0x26153a.row < _0x754b6c.row + _0x754b6c.rowSpan &&
    _0x26153a.row + _0x26153a.rowSpan > _0x754b6c.row
  );
}
const L = [
  {
    direction: "nw",
    className:
      "univer-left-px univer-top-px -univer-translate-x-1/2 -univer-translate-y-1/2 univer-cursor-nwse-resize",
  },
  {
    direction: "n",
    className:
      "-univer-top-1 univer-left-2 univer-right-2 univer-h-2 univer-cursor-ns-resize",
  },
  {
    direction: "ne",
    className:
      "univer-right-px\x20univer-top-px\x20univer-translate-x-1/2\x20-univer-translate-y-1/2\x20univer-cursor-nesw-resize",
  },
  {
    direction: "e",
    className:
      "-univer-right-1 univer-bottom-2 univer-top-2 univer-w-2 univer-cursor-ew-resize",
  },
  {
    direction: "se",
    className:
      "univer-bottom-px univer-right-px univer-translate-x-1/2 univer-translate-y-1/2 univer-cursor-nwse-resize",
  },
  {
    direction: "s",
    className:
      "-univer-bottom-1 univer-left-2 univer-right-2 univer-h-2 univer-cursor-ns-resize",
  },
  {
    direction: "sw",
    className:
      "univer-bottom-px univer-left-px -univer-translate-x-1/2 univer-translate-y-1/2 univer-cursor-nesw-resize",
  },
  {
    direction: "w",
    className:
      "-univer-left-1\x20univer-bottom-2\x20univer-top-2\x20univer-w-2\x20univer-cursor-ew-resize",
  },
];
function R({
  dashboard: _0x2077d9,
  dragLabel: _0x3d89ca,
  editable: _0xbcc683 = true,
  onLayoutsCommit: _0x19edc7,
  onSelectWidget: _0x3bf13f,
  renderWidget: _0xf653f9,
  renderWidgetActions: _0x2db518,
  resizeLabel: _0x3fcf34,
  selectedWidgetId: _0x4d1e16,
  widgetLabel: _0x91b559,
}) {
  let _0x41734b = (0, p.useRef)(null),
    _0x3abcbc = (0, p.useRef)(null),
    [_0x37525d, _0x16b12d] = (0, p.useState)(false),
    _0x3d15bb = (0, p.useMemo)(
      () =>
        new Map(
          _0x2077d9.widgetOrder["flatMap"]((_0x577437) => {
            let _0x7abd73 = _0x2077d9.widgets[_0x577437];
            return _0x7abd73 ? [[_0x577437, _0x7abd73.layout]] : [];
          }),
        ),
      [_0x2077d9],
    ),
    [_0x5d35a5, _0x199ae5] = (0, p.useState)(_0x3d15bb);
  ((0, p.useEffect)(() => {
    _0x3abcbc.current || _0x199ae5(_0x3d15bb);
  }, [_0x3d15bb]),
    (0, p.useEffect)(() => {
      if (!_0x37525d) return;
      let _0x14c324 = (_0x5c0547) => {
          let _0x394f29 = _0x41734b.current;
          if (!_0x394f29) return null;
          let _0x84f08 = _0x394f29.getBoundingClientRect(),
            _0x459ea9 = Math.max(
              1,
              (_0x84f08.width - 8 * (e.BASES_DASHBOARD_GRID_COLUMNS - 1)) /
                e.BASES_DASHBOARD_GRID_COLUMNS,
            ),
            _0x32bce5 = Math.round(
              (_0x394f29.scrollTop - _0x5c0547.startScrollTop) /
                (e.BASES_DASHBOARD_DEFAULT_ROW_HEIGHT + 8),
            ),
            _0x4d301c = Math.round(
              (_0x5c0547.pointerX - _0x5c0547.startX) / (_0x459ea9 + 8),
            ),
            _0x31a1ee =
              Math.round(
                (_0x5c0547.pointerY - _0x5c0547.startY) /
                  (e.BASES_DASHBOARD_DEFAULT_ROW_HEIGHT + 8),
              ) + _0x32bce5,
            _0x54fb8a =
              _0x5c0547.mode === "move"
                ? {
                    ..._0x5c0547.initial,
                    column: _0x5c0547.initial["column"] + _0x4d301c,
                    row: _0x5c0547.initial["row"] + _0x31a1ee,
                  }
                : M(
                    _0x5c0547.initial,
                    _0x5c0547.resizeDirection ?? "se",
                    _0x4d301c,
                    _0x31a1ee,
                  ),
            _0x54d206 = P(_0x5c0547.initialLayouts, _0x5c0547.id, _0x54fb8a);
          return (_0x199ae5(_0x54d206), _0x54d206);
        },
        _0x15f795 = (_0x21f4f9) => {
          let _0x2ed637 = _0x3abcbc.current;
          if (!_0x2ed637) return;
          let _0x242eda = {
            ..._0x2ed637,
            pointerX: _0x21f4f9.clientX,
            pointerY: _0x21f4f9.clientY,
          };
          _0x3abcbc.current = _0x242eda;
        },
        _0x1711e4 = () => {
          let _0x2ceb59 = _0x3abcbc.current,
            _0x23bb01 = _0x2ceb59 ? _0x14c324(_0x2ceb59) : null;
          ((_0x3abcbc.current = null),
            _0x16b12d(false),
            _0x23bb01 && _0x19edc7(_0x23bb01));
        },
        _0x1498db = 0,
        _0xb0aee9 = () => {
          let _0xd4dd7e = _0x41734b.current,
            _0x35d456 = _0x3abcbc.current;
          if (_0xd4dd7e && _0x35d456) {
            let _0x4efd6d = _0xd4dd7e.getBoundingClientRect(),
              _0x2778ca = F(
                _0x35d456.pointerY,
                _0x4efd6d.top,
                _0x4efd6d.bottom,
              );
            (_0x2778ca !== 0 && (_0xd4dd7e.scrollTop += _0x2778ca),
              _0x14c324(_0x35d456),
              (_0x1498db = requestAnimationFrame(_0xb0aee9)));
          }
        };
      return (
        (_0x1498db = requestAnimationFrame(_0xb0aee9)),
        window.addEventListener("pointermove", _0x15f795),
        window.addEventListener("pointerup", _0x1711e4),
        () => {
          (cancelAnimationFrame(_0x1498db),
            window.removeEventListener("pointermove", _0x15f795),
            window.removeEventListener("pointerup", _0x1711e4));
        }
      );
    }, [_0x37525d, _0x19edc7]));
  let _0x5f2a27 = Math.max(
      8,
      ...Array.from(_0x5d35a5.values()).map(
        (_0x45757d) => _0x45757d.row + _0x45757d.rowSpan,
      ),
    ),
    _0x479895 = (_0x483b83, _0x1b5f24, _0x2e6c87, _0x272663) => {
      (_0x483b83.preventDefault(), _0x483b83.stopPropagation());
      let _0x3cfeb0 = _0x41734b.current,
        _0x4aeede = {
          id: _0x1b5f24.id,
          mode: _0x2e6c87,
          pointerX: _0x483b83.clientX,
          pointerY: _0x483b83.clientY,
          startX: _0x483b83.clientX,
          startY: _0x483b83.clientY,
          startScrollTop:
            (_0x3cfeb0 == null ? undefined : _0x3cfeb0.scrollTop) ?? 0,
          initial: _0x5d35a5.get(_0x1b5f24.id) ?? _0x1b5f24.layout,
          initialLayouts: new Map(_0x5d35a5),
          resizeDirection: _0x272663,
        };
      ((_0x3abcbc.current = _0x4aeede), _0x16b12d(true));
    };
  return (0, m.jsx)("div", {
    ref: _0x41734b,
    "data-dashboard-scroll-container": true,
    className: (0, d.clsx)(
      "univer-h-full\x20univer-min-h-0\x20univer-overflow-auto\x20univer-bg-gray-100\x20univer-p-3\x20dark:!univer-bg-gray-950",
      d.scrollbarClassName,
    ),
    onClick: _0xbcc683
      ? (_0x97030f) => {
          if (
            !(_0x97030f.target instanceof Node) ||
            !_0x97030f.currentTarget["contains"](_0x97030f.target)
          )
            return;
          let _0x2881e8 =
            _0x97030f.target instanceof Element
              ? _0x97030f.target
              : _0x97030f.target["parentElement"];
          (_0x2881e8 != null && _0x2881e8.closest("[data-dashboard-widget]")) ||
            _0x3bf13f == null ||
            _0x3bf13f();
        }
      : undefined,
    children: (0, m.jsx)("div", {
      "data-dashboard-grid": true,
      className: "univer-grid univer-grid-cols-12 univer-pb-6",
      style: {
        gap: 8,
        gridAutoRows: e.BASES_DASHBOARD_DEFAULT_ROW_HEIGHT,
        minHeight: _0x5f2a27 * (e.BASES_DASHBOARD_DEFAULT_ROW_HEIGHT + 8),
      },
      children: _0x2077d9.widgetOrder["map"]((_0x4e660a) => {
        var _0x11c29f;
        let _0x690208 = _0x2077d9.widgets[_0x4e660a],
          _0xf7fded = _0x5d35a5.get(_0x4e660a);
        return !_0x690208 || !_0xf7fded
          ? null
          : (0, m.jsxs)(
              "article",
              {
                "data-dashboard-widget": _0x690208.id,
                "aria-label": _0x690208.title ?? _0x91b559(_0x690208),
                className: (0, d.clsx)(
                  "univer-group univer-relative univer-flex univer-min-h-0 univer-flex-col univer-overflow-visible univer-rounded-lg univer-border univer-shadow-sm univer-transition-shadow",
                  _0x690208.type === e.BaseDashboardWidgetType["Image"] ||
                    _0x690208.type === e.BaseDashboardWidgetType["FormulaShape"]
                    ? "univer-bg-transparent dark:!univer-bg-transparent"
                    : "univer-bg-gray-0 dark:!univer-bg-gray-900",
                  _0xbcc683 && _0x4d1e16 === _0x690208.id
                    ? "univer-z-10\x20univer-border-primary-500\x20univer-ring-1\x20univer-ring-primary-500"
                    : "univer-border-gray-200 dark:!univer-border-gray-700",
                ),
                style: {
                  gridColumn:
                    _0xf7fded.column + 1 + " / span " + _0xf7fded.columnSpan,
                  gridRow: _0xf7fded.row + 1 + " / span " + _0xf7fded.rowSpan,
                },
                tabIndex: _0xbcc683 ? 0 : undefined,
                onClick: _0xbcc683
                  ? () =>
                      _0x3bf13f == null ? undefined : _0x3bf13f(_0x690208.id)
                  : undefined,
                onFocus: _0xbcc683
                  ? () =>
                      _0x3bf13f == null ? undefined : _0x3bf13f(_0x690208.id)
                  : undefined,
                children: [
                  _0xbcc683 &&
                    (0, m.jsx)("button", {
                      type: "button",
                      "aria-label": _0x3d89ca,
                      "data-dashboard-drag-handle": _0x690208.id,
                      className: (0, d.clsx)(
                        "univer-pointer-events-none univer-absolute univer-left-1/2 univer-top-1 univer-z-20 univer-flex univer-h-5 univer-w-8 -univer-translate-x-1/2 univer-appearance-none univer-items-center univer-justify-center univer-border-0 univer-bg-transparent univer-p-0 univer-text-gray-400 univer-opacity-0 univer-shadow-none univer-outline-none univer-transition-opacity group-hover:univer-pointer-events-auto group-hover:univer-opacity-100 focus:univer-pointer-events-auto focus:univer-opacity-100 [@media(hover:none)]:univer-pointer-events-auto [@media(hover:none)]:univer-opacity-100",
                        _0x37525d &&
                          ((_0x11c29f = _0x3abcbc.current) == null
                            ? undefined
                            : _0x11c29f.id) === _0x690208.id &&
                          _0x3abcbc.current["mode"] === "move"
                          ? "univer-cursor-grabbing"
                          : "univer-cursor-grab",
                      ),
                      onPointerDown: (_0x19564d) =>
                        _0x479895(_0x19564d, _0x690208, "move"),
                      children: (0, m.jsx)(s.GripVerticalIcon, {
                        className: "univer-size-5\x20univer-rotate-90",
                        "aria-hidden": "true",
                      }),
                    }),
                  _0xbcc683 &&
                    (0, m.jsx)("div", {
                      className:
                        "univer-pointer-events-none univer-absolute univer-right-1 univer-top-1 univer-z-20 univer-flex univer-items-center univer-opacity-0 univer-transition-opacity focus-within:univer-pointer-events-auto focus-within:univer-opacity-100 group-hover:univer-pointer-events-auto group-hover:univer-opacity-100 [@media(hover:none)]:univer-pointer-events-auto [@media(hover:none)]:univer-opacity-100",
                      children:
                        _0x2db518 == null ? undefined : _0x2db518(_0x690208),
                    }),
                  (0, m.jsx)("div", {
                    className:
                      "univer-relative\x20univer-min-h-0\x20univer-flex-1\x20univer-overflow-hidden\x20univer-rounded-lg",
                    children: _0xf653f9(_0x690208),
                  }),
                  _0xbcc683 &&
                    L.map(({ className: _0x2f690a, direction: _0x7b22fb }) => {
                      let _0x447300 = _0x7b22fb.length === 2;
                      return (0, m.jsx)(
                        "button",
                        {
                          type: "button",
                          "aria-label": _0x3fcf34,
                          "data-dashboard-resize-handle": _0x7b22fb,
                          "data-dashboard-resize-control": _0x447300
                            ? _0x7b22fb
                            : undefined,
                          "data-dashboard-resize-edge": _0x447300
                            ? undefined
                            : _0x7b22fb,
                          className: (0, d.clsx)(
                            "univer-pointer-events-none univer-absolute univer-z-30 univer-appearance-none univer-p-0 univer-opacity-0 !univer-shadow-none univer-outline-none univer-transition-opacity group-hover:univer-pointer-events-auto group-hover:univer-opacity-100 focus:univer-pointer-events-auto focus:univer-opacity-100 [@media(hover:none)]:univer-pointer-events-auto [@media(hover:none)]:univer-opacity-100",
                            _0x447300
                              ? "univer-box-content univer-size-1.5 univer-rounded-full !univer-border-2 !univer-border-solid !univer-border-white !univer-bg-primary-600"
                              : "univer-border-0 univer-bg-transparent",
                            _0x2f690a,
                            _0x4d1e16 === _0x690208.id &&
                              "univer-pointer-events-auto univer-opacity-100",
                          ),
                          onPointerDown: (_0x251bac) =>
                            _0x479895(
                              _0x251bac,
                              _0x690208,
                              "resize",
                              _0x7b22fb,
                            ),
                        },
                        _0x7b22fb,
                      );
                    }),
                ],
              },
              _0x690208.id,
            );
      }),
    }),
  });
}
const z = { alignment: "left", fontSize: 18, fontSizeMode: "auto" };
function B(_0x28167c) {
  return { ...z, ..._0x28167c.appearance };
}
function V(_0x45f778) {
  var _0x164cad;
  return (
    ((_0x164cad = _0x45f778.body) == null
      ? undefined
      : _0x164cad.dataStream["replace"](/\r\n$/, "").replace(/\r/g, "\x0a")) ??
    ""
  );
}
function ee(_0x526bea, _0x3b6110) {
  var _0x3dd42f;
  let _0x17ee57 = _0x3b6110.replace(/\r\n|\r/g, "\x0a").split("\x0a"),
    _0x59c420 = _0x17ee57.join("\x0d") + "\x0d\x0a",
    _0x192fe0 =
      ((_0x3dd42f = _0x526bea.body) == null
        ? undefined
        : _0x3dd42f.paragraphs) ?? [],
    _0x4e5f9d = new Set(_0x192fe0.map((_0x86a300) => _0x86a300.paragraphId)),
    _0x3687a0 = 0,
    _0xfa6acb = _0x17ee57.map((_0x235044, _0x4b7d2a) => {
      _0x3687a0 += _0x235044.length;
      let _0xd75a9 = {
        ...(_0x192fe0[_0x4b7d2a] ?? {
          startIndex: _0x3687a0,
          paragraphId: (0, a.createParagraphId)(_0x4e5f9d),
        }),
        startIndex: _0x3687a0,
      };
      return ((_0x3687a0 += 1), _0xd75a9);
    });
  return {
    ..._0x526bea,
    body: {
      ..._0x526bea.body,
      dataStream: _0x59c420,
      paragraphs: _0xfa6acb,
      textRuns: [],
    },
  };
}
function H(_0x3735df) {
  "@babel/helpers - typeof";
  return (
    (H =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x35bbf6) {
            return typeof _0x35bbf6;
          }
        : function (_0x37f5af) {
            return _0x37f5af &&
              typeof Symbol == "function" &&
              _0x37f5af.constructor === Symbol &&
              _0x37f5af !== Symbol.prototype
              ? "symbol"
              : typeof _0x37f5af;
          }),
    H(_0x3735df)
  );
}
function te(_0x9bcea3, _0x5e3a20) {
  if (H(_0x9bcea3) != "object" || !_0x9bcea3) return _0x9bcea3;
  var _0x5b0e73 = _0x9bcea3[Symbol.toPrimitive];
  if (_0x5b0e73 !== undefined) {
    var _0x561fa7 = _0x5b0e73.call(_0x9bcea3, _0x5e3a20 || "default");
    if (H(_0x561fa7) != "object") return _0x561fa7;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5e3a20 === "string" ? String : Number)(_0x9bcea3);
}
function ne(_0x4f887f) {
  var _0x567e2b = te(_0x4f887f, "string");
  return H(_0x567e2b) == "symbol" ? _0x567e2b : _0x567e2b + "";
}
function U(_0x45a9ca, _0x2bf7bb, _0x34363f) {
  return (
    (_0x2bf7bb = ne(_0x2bf7bb)) in _0x45a9ca
      ? Object.defineProperty(_0x45a9ca, _0x2bf7bb, {
          value: _0x34363f,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x45a9ca[_0x2bf7bb] = _0x34363f),
    _0x45a9ca
  );
}
function W(_0x29e46d, _0x4acffc) {
  return function (_0x4e3342, _0x3086c0) {
    _0x4acffc(_0x4e3342, _0x3086c0, _0x29e46d);
  };
}
function G(_0xa3dd56, _0x5cd0ca, _0x49c48f, _0x14b8ad) {
  var _0x3624ca = arguments.length,
    _0x30fc58 =
      _0x3624ca < 3
        ? _0x5cd0ca
        : _0x14b8ad === null
          ? (_0x14b8ad = Object.getOwnPropertyDescriptor(_0x5cd0ca, _0x49c48f))
          : _0x14b8ad,
    _0x274c44;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x30fc58 = Reflect.decorate(_0xa3dd56, _0x5cd0ca, _0x49c48f, _0x14b8ad);
  else {
    for (var _0x575dd3 = _0xa3dd56.length - 1; _0x575dd3 >= 0; _0x575dd3--)
      (_0x274c44 = _0xa3dd56[_0x575dd3]) &&
        (_0x30fc58 =
          (_0x3624ca < 3
            ? _0x274c44(_0x30fc58)
            : _0x3624ca > 3
              ? _0x274c44(_0x5cd0ca, _0x49c48f, _0x30fc58)
              : _0x274c44(_0x5cd0ca, _0x49c48f)) || _0x30fc58);
  }
  return (
    _0x3624ca > 3 &&
      _0x30fc58 &&
      Object.defineProperty(_0x5cd0ca, _0x49c48f, _0x30fc58),
    _0x30fc58
  );
}
let K = class extends n.ChartUIService {
  constructor(_0x2f8295) {
    (super(_0x2f8295), U(this, "activeRuntimeModel", null));
  }
  executeChartUpdateConfig(_0x4504c6) {}
};
K = G([W(0, (0, a.Inject)(n.ChartViewStateRegistry))], K);
var re;
const q = {
    axis: {
      ...n.DEFAULT_CHART_AXIS_VALUES,
      primaryGridLineVisible: false,
      secondaryGridLineVisible: true,
    },
    funnel: n.DEFAULT_CHART_FUNNEL_VALUES,
    heatmap: n.DEFAULT_CHART_HEATMAP_VALUES,
    indicatorLine: n.DEFAULT_CHART_INDICATOR_LINE_VALUES,
    legend: n.DEFAULT_CHART_LEGEND_VALUES,
    lineAndArea: n.DEFAULT_CHART_LINE_AND_AREA_VALUES,
    pareto: n.DEFAULT_CHART_PARETO_VALUES,
    pie: n.DEFAULT_CHART_PIE_VALUES,
    radar: n.DEFAULT_CHART_RADAR_VALUES,
    relation: {
      ...n.DEFAULT_CHART_RELATION_VALUES,
      useValueAsSymbolSize: true,
    },
    series: {
      ...n.DEFAULT_CHART_SERIES_VALUES,
      radarFillOpacity: 0.2,
      rightAxis: {
        ltr: false,
        rtl:
          ((re = h.RTLChartStyle["allSeriesStyle"]) == null
            ? undefined
            : re.rightYAxis) ?? false,
      },
    },
    style: n.DEFAULT_CHART_STYLE_VALUES,
    titles: n.DEFAULT_CHART_TITLE_VALUES,
    trendline: n.DEFAULT_CHART_TRENDLINE_VALUES,
    waterfall: { ...n.DEFAULT_CHART_WATERFALL_SETUP_VALUES, useSubtotal: true },
    waterfallStyle: n.DEFAULT_CHART_WATERFALL_STYLE_VALUES,
    wordCloud: n.DEFAULT_CHART_WORD_CLOUD_VALUES,
  },
  ie = [
    h.ChartTypeBits["Line"],
    h.ChartTypeBits["Radar"],
    h.ChartTypeBits["WordCloud"],
    h.ChartTypeBits["Scatter"],
    h.ChartTypeBits["Funnel"],
    h.ChartTypeBits["Relation"],
    h.ChartTypeBits["Sankey"],
    h.ChartTypeBits["Heatmap"],
    h.ChartTypeBits["Boxplot"],
    h.ChartTypeBits["Candlestick"],
    h.ChartTypeBits["Histogram"],
    h.ChartTypeBits["Treemap"],
    h.ChartTypeBits["Sunburst"],
    h.ChartTypeBits["Gauge"],
    h.ChartTypeBits["Chord"],
  ];
function ae(_0x223535) {
  let {
      config: _0x18d0a5,
      onChange: _0x33bf08,
      runtime: _0x558f78,
      tableName: _0x32d476,
    } = _0x223535,
    _0x2ad65d = (0, f.useDependency)(K),
    _0x260e5a = (0, f.useDependency)(a.LocaleService),
    [_0x4bfebc, _0x4f9c2c] = (0, p.useState)(n.ChartEditPanelTab["Data"]),
    _0x557b3a = (0, p.useMemo)(
      () =>
        new n["ChartHostAdapter"](_0x558f78.model, {
          commit: (_0x516599) => {
            var _0x5aeec0;
            let _0x8c74f5 = _0x558f78.model,
              _0x5dfdb3 = (0, h.toChartModelUpdate)(_0x516599, {
                series:
                  (_0x5aeec0 = _0x8c74f5.config) == null
                    ? undefined
                    : _0x5aeec0.series,
                currentChartType: _0x8c74f5.chartType,
                currentStyle: _0x8c74f5.style,
                currentContext: _0x8c74f5.context,
                currentDataAggregation: _0x8c74f5.dataAggregation,
              });
            _0x33bf08({ chart: oe(_0x18d0a5.chart, _0x5dfdb3) });
          },
        }),
      [_0x18d0a5.chart, _0x33bf08, _0x558f78],
    ),
    _0x41e93d = (0, p.useMemo)(
      () =>
        (0, n.buildChartTypeSelectOptions)(
          n.CHART_TYPE_CATALOG["map"]((_0x11a57a) => ({
            ..._0x11a57a,
            label: _0x260e5a.t(ue(_0x11a57a.labelId)),
          })),
        ),
      [_0x260e5a],
    );
  return (0, m.jsx)(n.ChartEditorProvider, {
    chartUIService: _0x2ad65d,
    hostAdapter: _0x557b3a,
    children: (0, m.jsxs)("div", {
      className:
        "univer-flex univer-min-h-full univer-flex-col univer-bg-gray-0 dark:!univer-bg-gray-900",
      children: [
        (0, m.jsx)(n.ChartEditPanelTabs, {
          ariaLabel: _0x260e5a.t("bases-dashboard-ui.chart.common.editChart"),
          className: "univer-shrink-0 univer-px-3",
          items: [
            {
              label: _0x260e5a.t("bases-dashboard-ui.chart.common.setup"),
              panelId: "base-pivot-chart-setup",
              value: n.ChartEditPanelTab["Data"],
            },
            {
              label: _0x260e5a.t("bases-dashboard-ui.chart.common.customize"),
              panelId: "base-pivot-chart-style",
              value: n.ChartEditPanelTab["Style"],
            },
          ],
          value: _0x4bfebc,
          onChange: _0x4f9c2c,
        }),
        _0x4bfebc === n.ChartEditPanelTab["Data"]
          ? (0, m.jsx)(n.ChartEditPanel, {
              id: "base-pivot-chart-setup",
              label: _0x260e5a.t("bases-dashboard-ui.chart.common.setup"),
              children: (0, m.jsxs)("div", {
                className:
                  "univer-flex\x20univer-flex-col\x20univer-gap-3\x20univer-px-4\x20univer-pb-5",
                children: [
                  (0, m.jsx)(n.ChartTypeField, { options: _0x41e93d }),
                  (0, m.jsx)(n.ChartTypeSpecificSetupSection, {}),
                  (0, m.jsx)(n.ChartThemeField, {}),
                  (0, m.jsx)(se, {}),
                  (0, m.jsx)(n.ChartStackField, {}),
                  (0, m.jsxs)("div", {
                    children: [
                      (0, m.jsx)(n.ChartEditBlockTitle, {
                        title: _0x260e5a.t(
                          "bases-dashboard-ui.pivot.dataSource",
                        ),
                      }),
                      (0, m.jsx)(d.Input, { disabled: true, value: _0x32d476 }),
                    ],
                  }),
                  (0, m.jsx)(n.ChartCommonDataMappingSection, {
                    orientationControl: (0, m.jsx)(d.Button, {
                      size: "small",
                      onClick: () =>
                        _0x33bf08({
                          chart: {
                            ..._0x18d0a5.chart,
                            orient:
                              _0x18d0a5.chart["orient"] === "row"
                                ? "column"
                                : "row",
                          },
                        }),
                      children: _0x260e5a.t(
                        "bases-dashboard-ui.chart.common.switchRowColumn",
                      ),
                    }),
                  }),
                  (0, m.jsx)(n.ChartTypeSpecificDataSection, {}),
                  (0, m.jsx)(n.ChartWaterfallSetupFields, {
                    defaultValues: q.waterfall,
                  }),
                  (0, m.jsxs)("div", {
                    children: [
                      (0, m.jsx)(n.ChartEditBlockTitle, {
                        title: _0x260e5a.t("bases-dashboard-ui.pivot.display"),
                      }),
                      (0, m.jsx)(d.Select, {
                        value: _0x18d0a5.displayMode,
                        options: [
                          {
                            value: "chart-and-table",
                            label: _0x260e5a.t(
                              "bases-dashboard-ui.pivot.chartAndTable",
                            ),
                          },
                          {
                            value: "chart",
                            label: _0x260e5a.t(
                              "bases-dashboard-ui.pivot.chartOnly",
                            ),
                          },
                          {
                            value: "table",
                            label: _0x260e5a.t(
                              "bases-dashboard-ui.pivot.tableOnly",
                            ),
                          },
                        ],
                        onChange: (_0x46cf11) => {
                          (_0x46cf11 === "chart-and-table" ||
                            _0x46cf11 === "chart" ||
                            _0x46cf11 === "table") &&
                            _0x33bf08({ displayMode: _0x46cf11 });
                        },
                      }),
                    ],
                  }),
                ],
              }),
            })
          : (0, m.jsx)(n.ChartEditPanel, {
              id: "base-pivot-chart-style",
              label: _0x260e5a.t("bases-dashboard-ui.chart.common.customize"),
              children: (0, m.jsx)(ce, {}),
            }),
      ],
    }),
  });
}
function oe(_0x5a272d, _0x1ff5e8) {
  return {
    ..._0x5a272d,
    type: _0x1ff5e8.chartType ?? _0x5a272d.type,
    style: _0x1ff5e8.style ?? _0x5a272d.style,
    context: _0x1ff5e8.context ?? _0x5a272d.context,
    dataAggregation: _0x1ff5e8.dataAggregation ?? _0x5a272d.dataAggregation,
  };
}
function se() {
  let _0x31186c = (0, n.useChartEditorChartType)();
  return (0, m.jsx)(n.ChartGradientFillField, {
    visible: ie.every(
      (_0x5382f2) => !h.chartBitsUtils["baseOn"](_0x31186c, _0x5382f2),
    ),
  });
}
function J(_0x1374d7) {
  return (0, m.jsxs)(n.ChartSectionAccordionItem, {
    id: _0x1374d7.id,
    children: [
      (0, m.jsx)(n.ChartSectionAccordionTrigger, { children: _0x1374d7.label }),
      (0, m.jsx)(n.ChartSectionAccordionContent, {
        children: _0x1374d7.children,
      }),
    ],
  });
}
function ce() {
  let _0x5aabfd = (0, f.useDependency)(a.LocaleService),
    _0xf26ef0 = (0, n.useChartEditorChartType)(),
    _0x54a999 = (0, n.useChartEditorHasRightAxis)(),
    [_0x4f754c, _0x52d6d1] = (0, p.useState)(null),
    _0x37cdaa = h.chartBitsUtils["baseOn"](_0xf26ef0, h.ChartTypeBits["Pie"]),
    _0x45ec42 = _0xf26ef0 === h.ChartTypeBits["Radar"],
    _0xa30557 = _0xf26ef0 === h.ChartTypeBits["WordCloud"],
    _0x2ef400 = _0xf26ef0 === h.ChartTypeBits["Funnel"],
    _0x8126b7 = h.chartBitsUtils["baseOn"](
      _0xf26ef0,
      h.ChartTypeBits["Bubble"],
    ),
    _0x33b491 = _0xf26ef0 === h.ChartTypeBits["Relation"],
    _0x13f82e = _0xf26ef0 === h.ChartTypeBits["Waterfall"],
    _0x5ddadb = _0xf26ef0 === h.ChartTypeBits["Pareto"],
    _0x3c206b = _0xf26ef0 === h.ChartTypeBits["Heatmap"],
    _0x1673da =
      (0, n.chartTypeSupportsCapability)(
        _0xf26ef0,
        n.ChartEditorCapability["GeneralSeries"],
      ) &&
      !_0x8126b7 &&
      !_0x5ddadb,
    _0x3463a5 = le(_0xf26ef0, _0x5aabfd),
    _0x2135e2 = (_0x2064f2) =>
      _0x5aabfd.t("bases-dashboard-ui.chart." + _0x2064f2);
  return (0, m.jsxs)(n.ChartSectionAccordion, {
    value: _0x4f754c,
    onChange: _0x52d6d1,
    children: [
      (0, m.jsx)(J, {
        id: n.ChartEditPanelSection["ChartStyle"],
        label: _0x2135e2("common.chartStyle"),
        children: (0, m.jsx)(n.ChartStyleSection, { defaultValues: q.style }),
      }),
      (0, m.jsx)(J, {
        id: n.ChartEditPanelSection["ChartAndAxisTitles"],
        label: _0x2135e2("common.chartAndAxisTitles"),
        children: (0, m.jsx)(n.ChartTitlesSection, {
          commitMode: "blur",
          defaultValues: q.titles,
        }),
      }),
      _0x1673da &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["Series"],
          label: _0x2135e2("common.series"),
          children: (0, m.jsx)(n.ChartSeriesSection, {
            defaultValues: q.series,
            NumberFormatField: n.ChartNumberFormatAtom,
          }),
        }),
      _0x13f82e &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["WaterfallSeries"],
          label: _0x2135e2("section.waterfall"),
          children: (0, m.jsx)(n.ChartWaterfallStyleSection, {
            defaultValues: q.waterfallStyle,
            getDefaultBucketName: ({
              seriesName: _0x50bb60,
              target: _0x1739a6,
            }) =>
              _0x1739a6 === h.ChartWaterfallStyleTarget["Subtotal"]
                ? _0x2135e2("waterfall.subtotal")
                : _0x50bb60
                  ? _0x50bb60 +
                    "-(" +
                    _0x2135e2(
                      _0x1739a6 === h.ChartWaterfallStyleTarget["Positive"]
                        ? "waterfall.positive"
                        : "waterfall.negative",
                    ) +
                    ")"
                  : "",
            NumberFormatField: n.ChartNumberFormatAtom,
          }),
        }),
      _0x5ddadb &&
        (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)(J, {
              id: n.ChartEditPanelSection["ParetoBarSeries"],
              label: _0x2135e2("section.paretoBar"),
              children: (0, m.jsx)(n.ChartParetoSeriesSection, {
                defaultValues: q.pareto,
                NumberFormatField: n.ChartNumberFormatAtom,
                showDataPointEditor: true,
                target: "barStyle",
              }),
            }),
            (0, m.jsx)(J, {
              id: n.ChartEditPanelSection["ParetoLineSeries"],
              label: _0x2135e2("section.paretoLine"),
              children: (0, m.jsx)(n.ChartParetoSeriesSection, {
                defaultValues: q.pareto,
                NumberFormatField: n.ChartNumberFormatAtom,
                showDataPointEditor: false,
                target: "cumulativeLineStyle",
              }),
            }),
          ],
        }),
      _0x37cdaa &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["PieStyle"],
          label: _0x2135e2("section.pie"),
          children: (0, m.jsx)(n.ChartPieStyleSection, {
            defaultValues: q.pie,
            NumberFormatField: n.ChartNumberFormatAtom,
          }),
        }),
      _0xa30557 &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["WordCloud"],
          label: _0x2135e2("section.wordCloud"),
          children: (0, m.jsx)(n.ChartWordCloudStyleSection, {
            defaultValues: q.wordCloud,
          }),
        }),
      _0x45ec42 &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["Radar"],
          label: _0x2135e2("section.radar"),
          children: (0, m.jsx)(n.ChartRadarStyleSection, {
            defaultValues: q.radar,
          }),
        }),
      _0x2ef400 &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["Funnel"],
          label: _0x2135e2("section.funnel"),
          children: (0, m.jsx)(n.ChartFunnelStyleSection, {
            defaultValues: q.funnel,
            gapControl: "select",
          }),
        }),
      _0x3c206b &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["Heatmap"],
          label: _0x2135e2("common.heatmap"),
          children: (0, m.jsx)(n.ChartHeatmapStyleSection, {
            defaultValues: q.heatmap,
          }),
        }),
      _0x33b491 &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["Relation"],
          label: _0x2135e2("section.relation"),
          children: (0, m.jsx)(n.ChartRelationStyleSection, {
            defaultValues: q.relation,
          }),
        }),
      (0, n.chartTypeSupportsLineAndAreaStyle)(_0xf26ef0) &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["LineAndArea"],
          label: _0x2135e2("section.lineAndArea"),
          children: (0, m.jsx)(n.ChartLineAndAreaSection, {
            defaultValues: q.lineAndArea,
            lineStyleControl: "segmented",
          }),
        }),
      (0, n.chartTypeSupportsCapability)(
        _0xf26ef0,
        n.ChartEditorCapability["Legend"],
      ) &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["Legend"],
          label: _0x2135e2("common.legend"),
          children: (0, m.jsx)(n.ChartLegendSection, {
            defaultValues: q.legend,
          }),
        }),
      (0, n.chartTypeSupportsCapability)(
        _0xf26ef0,
        n.ChartEditorCapability["Axes"],
      ) &&
        (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)(J, {
              id: n.ChartEditPanelSection["HorizontalAxis"],
              label: _0x2135e2("common.horizontalAxis"),
              children: (0, m.jsx)(n.ChartAxisSection, {
                axis: "x",
                defaultValues: q.axis,
                NumberFormatField: n.ChartNumberFormatAtom,
              }),
            }),
            (0, m.jsx)(J, {
              id: n.ChartEditPanelSection["VerticalAxis"],
              label: _0x2135e2("common.verticalAxis"),
              children: (0, m.jsx)(n.ChartAxisSection, {
                axis: "y",
                defaultValues: q.axis,
                NumberFormatField: n.ChartNumberFormatAtom,
              }),
            }),
            _0x54a999 &&
              (0, m.jsx)(J, {
                id: n.ChartEditPanelSection["RightVerticalAxis"],
                label: _0x2135e2("common.rightVerticalAxis"),
                children: (0, m.jsx)(n.ChartAxisSection, {
                  axis: "rightY",
                  defaultValues: q.axis,
                  NumberFormatField: n.ChartNumberFormatAtom,
                }),
              }),
            (0, m.jsx)(J, {
              id: n.ChartEditPanelSection["GridlinesAndTicks"],
              label: _0x2135e2("section.gridlinesAndTicks"),
              children: (0, m.jsx)(n.ChartGridlinesAndTicksSection, {
                defaultValues: q.axis,
              }),
            }),
          ],
        }),
      (0, n.chartTypeSupportsCapability)(
        _0xf26ef0,
        n.ChartEditorCapability["IndicatorLine"],
      ) &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["IndicatorLine"],
          label: _0x2135e2("section.indicatorLine"),
          children: (0, m.jsx)(n.ChartIndicatorLineSection, {
            defaultValues: q.indicatorLine,
          }),
        }),
      (0, h.chartTypeCanUseTrendLine)(_0xf26ef0) &&
        (0, m.jsx)(J, {
          id: n.ChartEditPanelSection["Trendline"],
          label: _0x2135e2("common.trendline"),
          children: (0, m.jsx)(n.ChartTrendlineSection, {
            defaultValues: q.trendline,
          }),
        }),
      _0x3463a5 &&
        (0, m.jsx)(J, {
          id: _0x3463a5.id,
          label: _0x3463a5.label,
          children: (0, m.jsx)(n.ChartTypeSpecificStyleSection, {}),
        }),
    ],
  });
}
function le(_0x50d105, _0x4821e1) {
  let _0x572717 = {
    [h.ChartTypeBits["Candlestick"]]: {
      id: n.ChartEditPanelSection["Candlestick"],
      localeKey: "bases-dashboard-ui.chart.section.candlestick",
    },
    [h.ChartTypeBits["Histogram"]]: {
      id: n.ChartEditPanelSection["Histogram"],
      localeKey: "bases-dashboard-ui.chart.section.histogram",
    },
    [h.ChartTypeBits["Treemap"]]: {
      id: n.ChartEditPanelSection["Treemap"],
      localeKey: "bases-dashboard-ui.chart.section.treemap",
    },
    [h.ChartTypeBits["Sunburst"]]: {
      id: n.ChartEditPanelSection["Sunburst"],
      localeKey: "bases-dashboard-ui.chart.section.sunburst",
    },
    [h.ChartTypeBits["Gauge"]]: {
      id: n.ChartEditPanelSection["Gauge"],
      localeKey: "bases-dashboard-ui.chart.section.gauge",
    },
    [h.ChartTypeBits["Chord"]]: {
      id: n.ChartEditPanelSection["Chord"],
      localeKey: "bases-dashboard-ui.chart.section.chord",
    },
  }[_0x50d105];
  return _0x572717
    ? { id: _0x572717.id, label: _0x4821e1.t(_0x572717.localeKey) }
    : null;
}
function ue(_0x3cb4c5) {
  return "bases-dashboard-ui.chart.chartTypes." + _0x3cb4c5;
}
function de({
  onChange: _0x4645df,
  onEditData: _0x1624a4,
  runtime: _0x3a5d0f,
  sourceChart: _0x1ff37c,
  sourceName: _0x2d519e,
  widget: _0xbe1f83,
}) {
  let _0x71d29b = (0, f.useDependency)(K),
    _0x560093 = (0, f.useDependency)(a.LocaleService),
    [_0x280535, _0x46f883] = (0, p.useState)(n.ChartEditPanelTab["Data"]),
    _0x394dea = _0xbe1f83.chart ?? _0x1ff37c,
    _0x99558 = (0, p.useMemo)(
      () =>
        new n["ChartHostAdapter"](_0x3a5d0f.model, {
          commit: (_0x144943) => {
            var _0x5287e4;
            let _0x5aaabb = _0x3a5d0f.model,
              _0x24a6c3 = (0, h.toChartModelUpdate)(_0x144943, {
                series:
                  (_0x5287e4 = _0x5aaabb.config) == null
                    ? undefined
                    : _0x5287e4.series,
                currentChartType: _0x5aaabb.chartType,
                currentStyle: _0x5aaabb.style,
                currentContext: _0x5aaabb.context,
                currentDataAggregation: _0x5aaabb.dataAggregation,
              });
            _0x4645df({ ..._0xbe1f83, chart: oe(_0x394dea, _0x24a6c3) }).catch(
              () => undefined,
            );
          },
        }),
      [_0x394dea, _0x4645df, _0x3a5d0f, _0xbe1f83],
    ),
    _0x3cc167 = (0, p.useMemo)(
      () =>
        (0, n.buildChartTypeSelectOptions)(
          n.CHART_TYPE_CATALOG["map"]((_0x3eac99) => ({
            ..._0x3eac99,
            label: _0x560093.t(fe(_0x3eac99.labelId)),
          })),
        ),
      [_0x560093],
    ),
    _0x55b9e2 = (_0x4e538a) =>
      _0x560093.t("bases-dashboard-ui.dashboardInspector." + _0x4e538a);
  return (0, m.jsx)(n.ChartEditorProvider, {
    chartUIService: _0x71d29b,
    hostAdapter: _0x99558,
    children: (0, m.jsxs)("div", {
      "data-dashboard-chart-inspector": true,
      className: "univer-flex univer-min-h-0 univer-flex-1 univer-flex-col",
      children: [
        (0, m.jsx)(n.ChartEditPanelTabs, {
          ariaLabel: _0x560093.t("bases-dashboard-ui.chart.common.editChart"),
          className: "univer-shrink-0 univer-px-3",
          items: [
            {
              label: _0x560093.t("bases-dashboard-ui.chart.common.setup"),
              panelId: "dashboard-chart-setup",
              value: n.ChartEditPanelTab["Data"],
            },
            {
              label: _0x560093.t("bases-dashboard-ui.chart.common.customize"),
              panelId: "dashboard-chart-style",
              value: n.ChartEditPanelTab["Style"],
            },
          ],
          value: _0x280535,
          onChange: _0x46f883,
        }),
        _0x280535 === n.ChartEditPanelTab["Data"]
          ? (0, m.jsx)(n.ChartEditPanel, {
              id: "dashboard-chart-setup",
              label: _0x560093.t("bases-dashboard-ui.chart.common.setup"),
              children: (0, m.jsxs)("div", {
                className:
                  "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
                children: [
                  (0, m.jsx)(n.ChartTypeField, { options: _0x3cc167 }),
                  (0, m.jsx)(n.ChartTypeSpecificSetupSection, {}),
                  (0, m.jsx)(n.ChartThemeField, {}),
                  (0, m.jsx)(se, {}),
                  (0, m.jsx)(n.ChartStackField, {}),
                  (0, m.jsxs)("div", {
                    children: [
                      (0, m.jsx)(n.ChartEditBlockTitle, {
                        title: _0x55b9e2("dataSource"),
                      }),
                      (0, m.jsx)(d.Input, { disabled: true, value: _0x2d519e }),
                      (0, m.jsx)(d.Button, {
                        className: "univer-mt-2 univer-w-full",
                        onClick: _0x1624a4,
                        children: _0x55b9e2("editData"),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : (0, m.jsx)(n.ChartEditPanel, {
              id: "dashboard-chart-style",
              label: _0x560093.t("bases-dashboard-ui.chart.common.customize"),
              children: (0, m.jsx)(ce, {}),
            }),
      ],
    }),
  });
}
function fe(_0x29e053) {
  return "bases-dashboard-ui.chart.chartTypes." + _0x29e053;
}
const pe = ["general", "number", "percent", "currency", "grouped", "compact"];
function me({
  base: _0x3d8582,
  onChange: _0x295b54,
  onSelectBackgroundImage: _0x3406dd,
  widget: _0x33d433,
}) {
  var _0x26bac6;
  let _0x324642 = (0, f.useDependency)(a.LocaleService),
    _0x119381 = (0, f.useDependency)(a.ThemeService),
    _0x13b042 = (0, f.useObservable)(
      () => _0x119381.currentTheme$,
      _0x119381.getCurrentTheme(),
      false,
      [_0x119381],
    ),
    _0x40a219 = (0, f.useObservable)(
      () => _0x119381.darkMode$,
      _0x119381.darkMode,
      false,
      [_0x119381],
    ),
    [_0x2d803d, _0xcff6b3] = (0, p.useState)("data"),
    [_0x38093d, _0x42a140] = (0, p.useState)(false),
    _0x38b6de = T(_0x33d433),
    _0xb0cabe = (_0x4153c) =>
      _0x324642.t("bases-dashboard-ui.dashboardInspector." + _0x4153c),
    _0x4eff85 = _0x3d8582.getSnapshot().tables[_0x33d433.tableId],
    _0x2d16fd =
      _0x4eff85 == null
        ? undefined
        : _0x4eff85.viewOrder["find"](
            (_0x1e9b06) => _0x4eff85.views[_0x1e9b06],
          ),
    _0x536a7e = _0x2d16fd
      ? _0x4eff85 == null
        ? undefined
        : _0x4eff85.views[_0x2d16fd]
      : undefined,
    _0x149620 =
      _0x4eff85 && _0x536a7e
        ? (0, t.toFormulaMenuTables)(
            _0x3d8582.getSnapshot(),
            _0x4eff85,
            _0x536a7e,
          ).map((_0xdaab28) => ({ ..._0xdaab28, current: false }))
        : [],
    _0x560f15 =
      ((_0x26bac6 = _0x33d433.shapeData["formulaBinding"]) == null
        ? undefined
        : _0x26bac6.formula) ?? "",
    _0x1ff69b = (_0x41d600) =>
      _0x295b54(E(_0x33d433, _0x41d600)).catch(() => undefined),
    _0x57256a = (_0x9ebffc) =>
      _0x295b54({ ..._0x33d433, description: _0x9ebffc }).catch(
        () => undefined,
      );
  return (0, m.jsxs)("div", {
    "data-dashboard-formula-inspector": true,
    className: "univer-flex univer-min-h-0 univer-flex-1 univer-flex-col",
    children: [
      (0, m.jsx)(d.Segmented, {
        className: "univer-m-3",
        items: [
          { value: "data", label: _0xb0cabe("data") },
          { value: "style", label: _0xb0cabe("style") },
        ],
        value: _0x2d803d,
        onChange: _0xcff6b3,
      }),
      (0, m.jsx)("div", {
        className:
          "univer-min-h-0\x20univer-flex-1\x20univer-overflow-y-auto\x20univer-p-4",
        children:
          _0x2d803d === "data"
            ? (0, m.jsxs)("div", {
                className: "univer-grid univer-gap-4",
                children: [
                  (0, m.jsx)(Y, {
                    label: _0xb0cabe("description"),
                    children: (0, m.jsx)(d.Input, {
                      value: _0x33d433.description ?? _0x33d433.title ?? "",
                      onChange: _0x57256a,
                      onBlur: (_0x52a800) =>
                        _0x57256a(_0x52a800.target["value"]),
                    }),
                  }),
                  (0, m.jsx)(Y, {
                    label: _0xb0cabe("dataSource"),
                    children: (0, m.jsx)(d.Input, {
                      disabled: true,
                      value:
                        (_0x4eff85 == null ? undefined : _0x4eff85.name) ??
                        _0xb0cabe("sourceUnavailable"),
                    }),
                  }),
                  (0, m.jsxs)(Y, {
                    label: _0xb0cabe("formula"),
                    children: [
                      (0, m.jsx)(d.Input, {
                        disabled: true,
                        value: (0, t.formulaToEditorFormula)(
                          _0x560f15,
                          _0x149620,
                        ),
                      }),
                      (0, m.jsx)(d.Button, {
                        className: "univer-mt-2 univer-w-full",
                        onClick: () => _0x42a140(true),
                        children: _0xb0cabe("editFormula"),
                      }),
                    ],
                  }),
                ],
              })
            : (0, m.jsxs)("div", {
                className: "univer-grid univer-gap-4",
                children: [
                  (0, m.jsx)(n.ChartColorField, {
                    emptyLabel: _0xb0cabe("backgroundColor"),
                    label: _0xb0cabe("backgroundColor"),
                    pickerFallbackValue: _0x40a219
                      ? _0x13b042.gray[900]
                      : _0x13b042.gray[0],
                    resetLabel: _0xb0cabe("reset"),
                    value: _0x38b6de.backgroundColor ?? null,
                    onChange: (_0x71dcae) =>
                      _0x1ff69b({ backgroundColor: _0x71dcae ?? undefined }),
                  }),
                  (0, m.jsxs)(Y, {
                    label: _0xb0cabe("backgroundImage"),
                    children: [
                      (0, m.jsxs)("div", {
                        className: "univer-flex univer-gap-2",
                        children: [
                          (0, m.jsxs)(d.Button, {
                            className: "univer-flex-1",
                            onClick: () => {
                              _0x3406dd()
                                .then((_0x8d2408) => {
                                  if (_0x8d2408) {
                                    var _0x1aa694;
                                    return _0x1ff69b({
                                      backgroundImage: {
                                        ..._0x8d2408,
                                        fit:
                                          ((_0x1aa694 =
                                            _0x38b6de.backgroundImage) == null
                                            ? undefined
                                            : _0x1aa694.fit) ?? "cover",
                                      },
                                    });
                                  }
                                })
                                .catch(() => undefined);
                            },
                            children: [
                              (0, m.jsx)(s.IncreaseIcon, {}),
                              _0x38b6de.backgroundImage
                                ? _0xb0cabe("replaceImage")
                                : _0xb0cabe("uploadImage"),
                            ],
                          }),
                          _0x38b6de.backgroundImage &&
                            (0, m.jsx)(d.Button, {
                              "aria-label": _0xb0cabe("removeImage"),
                              title: _0xb0cabe("removeImage"),
                              onClick: () =>
                                _0x1ff69b({ backgroundImage: undefined }),
                              children: (0, m.jsx)(s.DeleteIcon, {}),
                            }),
                        ],
                      }),
                      _0x38b6de.backgroundImage &&
                        (0, m.jsx)(d.Segmented, {
                          className: "univer-mt-2",
                          items: [
                            { value: "cover", label: _0xb0cabe("cover") },
                            { value: "contain", label: _0xb0cabe("contain") },
                          ],
                          value: _0x38b6de.backgroundImage["fit"],
                          onChange: (_0x1bc0bf) =>
                            _0x1ff69b({
                              backgroundImage: _0x38b6de.backgroundImage
                                ? {
                                    ..._0x38b6de.backgroundImage,
                                    fit: _0x1bc0bf,
                                  }
                                : undefined,
                            }),
                        }),
                    ],
                  }),
                  (0, m.jsx)(n.ChartColorField, {
                    emptyLabel: _0xb0cabe("textColor"),
                    label: _0xb0cabe("textColor"),
                    pickerFallbackValue: _0x40a219
                      ? _0x13b042.gray[50]
                      : _0x13b042.gray[1000],
                    resetLabel: _0xb0cabe("reset"),
                    value: _0x38b6de.textColor ?? null,
                    onChange: (_0x10103c) =>
                      _0x1ff69b({ textColor: _0x10103c ?? undefined }),
                  }),
                  (0, m.jsx)(Y, {
                    label: _0xb0cabe("alignment"),
                    children: (0, m.jsx)(d.Segmented, {
                      items: [
                        { value: "left", label: _0xb0cabe("left") },
                        { value: "center", label: _0xb0cabe("center") },
                        { value: "right", label: _0xb0cabe("right") },
                      ],
                      value: _0x38b6de.alignment,
                      onChange: (_0x5eb321) =>
                        _0x1ff69b({ alignment: _0x5eb321 }),
                    }),
                  }),
                  (0, m.jsxs)(Y, {
                    label: _0xb0cabe("textSize"),
                    children: [
                      (0, m.jsx)(d.Segmented, {
                        items: [
                          { value: "auto", label: _0xb0cabe("autoFit") },
                          { value: "custom", label: _0xb0cabe("custom") },
                        ],
                        value: _0x38b6de.fontSizeMode,
                        onChange: (_0x914a32) =>
                          _0x1ff69b({ fontSizeMode: _0x914a32 }),
                      }),
                      _0x38b6de.fontSizeMode === "custom" &&
                        (0, m.jsx)(d.InputNumber, {
                          className: "univer-mt-2",
                          min: 12,
                          max: 120,
                          value: _0x38b6de.fontSize,
                          onChange: (_0x246db7) =>
                            _0x1ff69b({
                              fontSize: _0x246db7 ?? 40,
                              fontSizeMode: "custom",
                            }),
                        }),
                    ],
                  }),
                  (0, m.jsx)(Y, {
                    label: _0xb0cabe("numberFormat"),
                    children: (0, m.jsx)(d.Select, {
                      value: _0x38b6de.numberFormat,
                      options: [
                        { value: "general", label: _0xb0cabe("general") },
                        { value: "number", label: _0xb0cabe("number") },
                        { value: "percent", label: _0xb0cabe("percent") },
                        { value: "currency", label: _0xb0cabe("currency") },
                        { value: "grouped", label: _0xb0cabe("grouped") },
                        { value: "compact", label: _0xb0cabe("compact") },
                      ],
                      onChange: (_0x430540) => {
                        let _0x2b7482 = pe.find(
                          (_0xe731c8) => _0xe731c8 === _0x430540,
                        );
                        _0x2b7482 && _0x1ff69b({ numberFormat: _0x2b7482 });
                      },
                    }),
                  }),
                  _0x38b6de.numberFormat === "currency" &&
                    (0, m.jsx)(Y, {
                      label: _0xb0cabe("currencyCode"),
                      children: (0, m.jsx)(d.Input, {
                        value: _0x38b6de.currency,
                        onChange: (_0x2a4eac) =>
                          _0x1ff69b({
                            currency: _0x2a4eac.slice(0, 3).toUpperCase(),
                          }),
                      }),
                    }),
                  _0x38b6de.numberFormat !== "general" &&
                    (0, m.jsx)(Y, {
                      label: _0xb0cabe("decimalPlaces"),
                      children: (0, m.jsx)(d.InputNumber, {
                        min: 0,
                        max: 8,
                        value: _0x38b6de.decimalPlaces,
                        onChange: (_0x1acfa6) =>
                          _0x1ff69b({ decimalPlaces: _0x1acfa6 ?? 0 }),
                      }),
                    }),
                ],
              }),
      }),
      _0x38093d &&
        (0, m.jsx)(d.Dialog, {
          open: true,
          width: 760,
          footer: null,
          closable: false,
          maskClosable: false,
          children: (0, m.jsx)(t.FormulaEditorPanel, {
            tables: _0x149620,
            formula: (0, t.formulaToEditorFormula)(_0x560f15, _0x149620),
            onCancel: () => _0x42a140(false),
            onSave: (_0x3b6258) => {
              let _0x228ead = _0x33d433.shapeData["formulaBinding"] ?? {
                formula: "",
              };
              return _0x295b54({
                ..._0x33d433,
                shapeData: {
                  ..._0x33d433.shapeData,
                  formulaBinding: {
                    ..._0x228ead,
                    formula: (0, t.normalizeEditorFormulaForConfig)(
                      _0x3b6258,
                      _0x149620,
                    ),
                  },
                },
              })
                .then(() => _0x42a140(false))
                .catch(() => undefined);
            },
          }),
        }),
    ],
  });
}
function Y({ children: _0x2db612, label: _0x22adca }) {
  return (0, m.jsxs)("div", {
    role: "group",
    "aria-label": _0x22adca,
    className:
      "univer-grid univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
    children: [(0, m.jsx)("span", { children: _0x22adca }), _0x2db612],
  });
}
const he = {
  [a.BaseFilterOperator["IS"]]: "bases-dashboard-ui.operators.is",
  [a.BaseFilterOperator["IS_NOT"]]: "bases-dashboard-ui.operators.isNot",
  [a.BaseFilterOperator["CONTAINS"]]: "bases-dashboard-ui.operators.contains",
  [a.BaseFilterOperator["NOT_CONTAINS"]]:
    "bases-dashboard-ui.operators.notContains",
  [a.BaseFilterOperator["IS_EMPTY"]]: "bases-dashboard-ui.operators.isEmpty",
  [a.BaseFilterOperator["IS_NOT_EMPTY"]]:
    "bases-dashboard-ui.operators.isNotEmpty",
  [a.BaseFilterOperator["GREATER_THAN"]]:
    "bases-dashboard-ui.operators.greaterThan",
  [a.BaseFilterOperator["GREATER_THAN_OR_EQUAL"]]:
    "bases-dashboard-ui.operators.greaterThanOrEqual",
  [a.BaseFilterOperator["LESS_THAN"]]: "bases-dashboard-ui.operators.lessThan",
  [a.BaseFilterOperator["LESS_THAN_OR_EQUAL"]]:
    "bases-dashboard-ui.operators.lessThanOrEqual",
  [a.BaseFilterOperator["BEFORE"]]: "bases-dashboard-ui.operators.before",
  [a.BaseFilterOperator["AFTER"]]: "bases-dashboard-ui.operators.after",
};
function ge({
  disabled: _0x5bf234,
  fields: _0xf0187b,
  filter: _0x18d92e,
  onChange: _0x40435f,
}) {
  let _0x5dc3c3 = (0, f.useDependency)(a.LocaleService),
    _0x4def09 = (_0x18d92e == null ? undefined : _0x18d92e.conditions) ?? [];
  return _0x4def09.length
    ? (0, m.jsx)("div", {
        className:
          "univer-grid\x20univer-h-full\x20univer-content-start\x20univer-gap-2\x20univer-overflow-auto\x20univer-p-3",
        children: _0x4def09.map((_0x4e7ee5, _0x4d7d7b) => {
          let _0x22b1c9 = _0xf0187b.find(
            (_0x46df54) => _0x46df54.id === _0x4e7ee5.fieldId,
          );
          return (0, m.jsxs)(
            "div",
            {
              className:
                "univer-bg-gray-50/80\x20dark:!univer-bg-gray-800/70\x20univer-grid\x20univer-gap-2\x20univer-rounded-xl\x20univer-border\x20univer-border-gray-200\x20univer-p-3\x20dark:!univer-border-gray-700",
              children: [
                (0, m.jsxs)("div", {
                  className:
                    "univer-flex univer-min-w-0 univer-items-center univer-gap-2",
                  children: [
                    (0, m.jsx)("span", {
                      className:
                        "univer-min-w-0 univer-flex-1 univer-truncate univer-text-sm univer-font-medium",
                      children:
                        (_0x22b1c9 == null ? undefined : _0x22b1c9.name) ??
                        _0x4e7ee5.fieldId,
                    }),
                    (0, m.jsx)("span", {
                      className:
                        "univer-shrink-0\x20univer-rounded-full\x20univer-bg-gray-200\x20univer-px-2\x20univer-py-0.5\x20univer-text-xs\x20univer-text-gray-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-gray-300",
                      children: _0x5dc3c3.t(he[_0x4e7ee5.operator]),
                    }),
                  ],
                }),
                Ce(_0x4e7ee5.operator) &&
                  (0, m.jsx)(ve, {
                    disabled: _0x5bf234,
                    field: _0x22b1c9,
                    value: _0x4e7ee5.operand,
                    onChange: (_0x444bb2) =>
                      _0x40435f(
                        X(_0x18d92e, _0x4d7d7b, { operand: _0x444bb2 }),
                      ),
                  }),
              ],
            },
            Ee(_0x4def09, _0x4e7ee5, _0x4d7d7b),
          );
        }),
      })
    : (0, m.jsxs)("div", {
        className:
          "univer-grid univer-h-full univer-place-content-center univer-gap-2 univer-text-center univer-text-gray-400",
        children: [
          (0, m.jsx)(s.FilterIcon, {
            className: "univer-mx-auto univer-size-6",
          }),
          (0, m.jsx)("span", {
            className: "univer-text-sm",
            children: _0x5dc3c3.t("bases-dashboard-ui.dashboard.tableFilter"),
          }),
        ],
      });
}
function _e({
  fields: _0x299b9e,
  filter: _0x3d2d9c,
  onChange: _0x263110,
  onClear: _0x55f5b6,
}) {
  let _0x1764c2 = (0, f.useDependency)(a.LocaleService),
    _0x460a9f = (_0x3d2d9c == null ? undefined : _0x3d2d9c.conditions) ?? [];
  return (0, m.jsxs)("div", {
    "data-dashboard-filter-inspector": true,
    className:
      "univer-grid\x20univer-min-h-0\x20univer-flex-1\x20univer-content-start\x20univer-gap-3\x20univer-overflow-auto\x20univer-p-4",
    children: [
      _0x460a9f.map((_0x4f0f9c, _0x540a7c) => {
        let _0x486280 =
            _0x299b9e.find((_0x270e5d) => _0x270e5d.id === _0x4f0f9c.fieldId) ??
            _0x299b9e[0],
          _0x366e21 = xe(_0x486280);
        return (0, m.jsxs)(
          "section",
          {
            className:
              "univer-grid\x20univer-gap-3\x20univer-rounded-xl\x20univer-border\x20univer-border-gray-200\x20univer-bg-gray-50\x20univer-p-3\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-800",
            children: [
              (0, m.jsxs)("div", {
                className:
                  "univer-grid univer-grid-cols-[minmax(0,1fr)_32px] univer-gap-2",
                children: [
                  (0, m.jsx)(d.Select, {
                    value: _0x4f0f9c.fieldId,
                    options: _0x299b9e.map((_0x55b18a) => ({
                      value: _0x55b18a.id,
                      label: _0x55b18a.name,
                    })),
                    onChange: (_0x3cd716) => {
                      let _0x2d0039 = _0x299b9e.find(
                        (_0x5b57c5) => _0x5b57c5.id === _0x3cd716,
                      );
                      if (!_0x2d0039) return;
                      let _0xb721f7 = xe(_0x2d0039)[0];
                      _0x263110(
                        X(_0x3d2d9c, _0x540a7c, be(_0x2d0039, _0xb721f7)),
                      );
                    },
                  }),
                  (0, m.jsx)(d.Button, {
                    type: "button",
                    variant: "text",
                    "aria-label": _0x1764c2.t(
                      "bases-dashboard-ui.dashboardInspector.delete",
                    ),
                    className: "univer-size-8 univer-p-0 univer-text-red-500",
                    onClick: () =>
                      _0x263110(
                        ye(
                          _0x3d2d9c,
                          _0x460a9f.filter(
                            (_0x25e99e, _0x4d78f1) => _0x4d78f1 !== _0x540a7c,
                          ),
                        ),
                      ),
                    children: (0, m.jsx)(s.CloseIcon, {}),
                  }),
                ],
              }),
              (0, m.jsx)(d.Select, {
                value: _0x4f0f9c.operator,
                options: _0x366e21.map((_0x2454c0) => ({
                  value: _0x2454c0,
                  label: _0x1764c2.t(he[_0x2454c0]),
                })),
                onChange: (_0x4662ac) => {
                  let _0x2fa1b3 = _0x366e21.find(
                    (_0x1e52bd) => _0x1e52bd === _0x4662ac,
                  );
                  _0x2fa1b3 &&
                    _0x263110(
                      X(_0x3d2d9c, _0x540a7c, {
                        operator: _0x2fa1b3,
                        operand: Se(_0x486280),
                      }),
                    );
                },
              }),
              Ce(_0x4f0f9c.operator) &&
                (0, m.jsx)(ve, {
                  field: _0x486280,
                  value: _0x4f0f9c.operand,
                  onChange: (_0x1ac710) =>
                    _0x263110(X(_0x3d2d9c, _0x540a7c, { operand: _0x1ac710 })),
                }),
            ],
          },
          Ee(_0x460a9f, _0x4f0f9c, _0x540a7c),
        );
      }),
      (0, m.jsxs)(d.Button, {
        type: "button",
        variant: "text",
        className: "univer-w-full univer-justify-start univer-text-primary-600",
        disabled: !_0x299b9e.length,
        onClick: () => {
          let _0x5b57c7 = _0x299b9e[0];
          if (!_0x5b57c7) return;
          let _0x35c86b = xe(_0x5b57c7)[0];
          _0x263110(ye(_0x3d2d9c, [..._0x460a9f, be(_0x5b57c7, _0x35c86b)]));
        },
        children: [
          (0, m.jsx)(s.IncreaseIcon, {}),
          _0x1764c2.t("bases-dashboard-ui.dashboardInspector.newCondition"),
        ],
      }),
      _0x460a9f.length > 0 &&
        (0, m.jsx)(d.Button, {
          type: "button",
          variant: "text",
          className: "univer-w-full",
          onClick: _0x55f5b6,
          children: _0x1764c2.t("bases-dashboard-ui.dashboardInspector.clear"),
        }),
    ],
  });
}
function ve({
  disabled: _0x57458b,
  field: _0x571aa4,
  onChange: _0xaa06f,
  value: _0x34f105,
}) {
  let _0x1d1764 = (0, f.useDependency)(a.LocaleService),
    _0x358f5f = _0x571aa4 == null ? undefined : _0x571aa4.type;
  if (_0x358f5f === a.BaseFieldType["Checkbox"]) {
    let _0x5e9c30 = _0x34f105 === true || _0x34f105 === "true";
    return (0, m.jsxs)(d.Button, {
      type: "button",
      variant: "default",
      disabled: _0x57458b,
      className: "univer-w-full univer-justify-start",
      onClick: () => _0xaa06f(!_0x5e9c30),
      children: [
        (0, m.jsx)(d.Checkbox, {
          checked: _0x5e9c30,
          disabled: _0x57458b,
          onChange: () => undefined,
        }),
        _0x5e9c30
          ? _0x1d1764.t("bases-dashboard-ui.dashboardInspector.checked")
          : _0x1d1764.t("bases-dashboard-ui.dashboardInspector.unchecked"),
      ],
    });
  }
  return De(_0x358f5f)
    ? _0x57458b
      ? (0, m.jsx)(d.Button, {
          type: "button",
          variant: "default",
          className: "univer-w-full",
          disabled: true,
          children: (0, a.dateKit)(
            _0x34f105 == null || _0x34f105 === ""
              ? undefined
              : String(_0x34f105),
          ).format("YYYY-MM-DD"),
        })
      : (0, m.jsx)(d.DatePicker, {
          className: "univer-w-full",
          value: (0, a.dateKit)(
            _0x34f105 == null || _0x34f105 === ""
              ? undefined
              : String(_0x34f105),
          ).toDate(),
          onValueChange: (_0x4523b0) =>
            _0xaa06f((0, a.dateKit)(_0x4523b0).format("YYYY-MM-DD")),
        })
    : ke(_0x571aa4)
      ? (0, m.jsx)(d.MultipleSelect, {
          className: "univer-w-full",
          disabled: _0x57458b,
          value: Array.isArray(_0x34f105) ? _0x34f105.map(String) : [],
          options: we(_0x571aa4),
          onChange: _0xaa06f,
        })
      : _0x358f5f === a.BaseFieldType["SingleSelect"] ||
          _0x358f5f === a.BaseFieldType["Group"] ||
          _0x358f5f === a.BaseFieldType["Person"]
        ? (0, m.jsx)(d.Select, {
            className: "univer-w-full",
            disabled: _0x57458b,
            value: String(_0x34f105 ?? ""),
            options: [
              {
                value: "",
                label: _0x1d1764.t(
                  "bases-dashboard-ui.dashboardInspector.selectOption",
                ),
              },
              ...we(_0x571aa4),
            ],
            onChange: _0xaa06f,
          })
        : Oe(_0x358f5f)
          ? (0, m.jsx)(d.InputNumber, {
              className: "univer-w-full",
              allowEmpty: true,
              disabled: _0x57458b,
              value: Number.isFinite(Number(_0x34f105))
                ? Number(_0x34f105)
                : null,
              onChange: (_0x33f406) => _0xaa06f(_0x33f406 ?? ""),
            })
          : (0, m.jsx)(d.Input, {
              disabled: _0x57458b,
              value: String(_0x34f105 ?? ""),
              placeholder: _0x1d1764.t(
                "bases-dashboard-ui.dashboardInspector.enterValue",
              ),
              onChange: _0xaa06f,
            });
}
function ye(_0x77856e, _0x4b9a13) {
  return {
    conjunction:
      (_0x77856e == null ? undefined : _0x77856e.conjunction) ??
      a.BaseFilterConjunction["AND"],
    conditions: _0x4b9a13,
  };
}
function be(_0x141301, _0x5c902c) {
  return Ce(_0x5c902c)
    ? { fieldId: _0x141301.id, operator: _0x5c902c, operand: Se(_0x141301) }
    : { fieldId: _0x141301.id, operator: _0x5c902c };
}
function X(_0x227551, _0x1ef650, _0x2566e3) {
  return ye(
    _0x227551,
    ((_0x227551 == null ? undefined : _0x227551.conditions) ?? []).map(
      (_0x2c616e, _0x27df6f) =>
        _0x27df6f === _0x1ef650 ? { ..._0x2c616e, ..._0x2566e3 } : _0x2c616e,
    ),
  );
}
function xe(_0xabdcd0) {
  let _0x234adf = [
    a.BaseFilterOperator["IS_EMPTY"],
    a.BaseFilterOperator["IS_NOT_EMPTY"],
  ];
  switch (_0xabdcd0 == null ? undefined : _0xabdcd0.type) {
    case a.BaseFieldType["Number"]:
    case a.BaseFieldType["Currency"]:
    case a.BaseFieldType["Progress"]:
    case a.BaseFieldType["Rating"]:
      return [
        a.BaseFilterOperator["IS"],
        a.BaseFilterOperator["IS_NOT"],
        a.BaseFilterOperator["GREATER_THAN"],
        a.BaseFilterOperator["LESS_THAN"],
        ..._0x234adf,
      ];
    case a.BaseFieldType["Date"]:
    case a.BaseFieldType["CreatedAt"]:
    case a.BaseFieldType["UpdatedAt"]:
      return [
        a.BaseFilterOperator["IS"],
        a.BaseFilterOperator["IS_NOT"],
        a.BaseFilterOperator["BEFORE"],
        a.BaseFilterOperator["AFTER"],
        ..._0x234adf,
      ];
    case a.BaseFieldType["Checkbox"]:
      return [a.BaseFilterOperator["IS"], a.BaseFilterOperator["IS_NOT"]];
    default:
      return [
        a.BaseFilterOperator["IS"],
        a.BaseFilterOperator["IS_NOT"],
        a.BaseFilterOperator["CONTAINS"],
        a.BaseFilterOperator["NOT_CONTAINS"],
        ..._0x234adf,
      ];
  }
}
function Se(_0x324c96) {
  return _0x324c96
    ? _0x324c96.type === a.BaseFieldType["Checkbox"]
      ? false
      : De(_0x324c96.type)
        ? (0, a.dateKit)().format("YYYY-MM-DD")
        : ke(_0x324c96)
          ? []
          : ""
    : "";
}
function Ce(_0x134443) {
  return (
    _0x134443 !== a.BaseFilterOperator["IS_EMPTY"] &&
    _0x134443 !== a.BaseFilterOperator["IS_NOT_EMPTY"]
  );
}
function we(_0x301742) {
  var _0x352684;
  return (
    Array.isArray(
      _0x301742 == null || (_0x352684 = _0x301742.config) == null
        ? undefined
        : _0x352684.options,
    )
      ? _0x301742.config["options"]
      : []
  ).map((_0x254784, _0x1c1493) => {
    if (typeof _0x254784 == "string")
      return { label: _0x254784, value: _0x254784 };
    if (!Te(_0x254784))
      return { label: String(_0x1c1493 + 1), value: String(_0x1c1493 + 1) };
    let _0x578e6a = _0x254784,
      _0x3d28e0 = String(_0x578e6a.name ?? _0x578e6a.id ?? _0x1c1493 + 1),
      _0x5430b3 = String(_0x578e6a.id ?? _0x3d28e0);
    return {
      label: _0x3d28e0,
      value: /^opt-\d+$/["test"](_0x5430b3) ? _0x3d28e0 : _0x5430b3,
    };
  });
}
function Te(_0x4fce45) {
  return typeof _0x4fce45 == "object" && !!_0x4fce45;
}
function Ee(_0x411f7b, _0x32e058, _0x1b6c25) {
  let _0x391c68 = JSON.stringify(_0x32e058);
  return (
    _0x391c68 +
    "-" +
    _0x411f7b
      .slice(0, _0x1b6c25)
      .filter((_0x523cc3) => JSON.stringify(_0x523cc3) === _0x391c68).length
  );
}
function De(_0x385bf5) {
  return (
    _0x385bf5 === a.BaseFieldType["Date"] ||
    _0x385bf5 === a.BaseFieldType["CreatedAt"] ||
    _0x385bf5 === a.BaseFieldType["UpdatedAt"]
  );
}
function Oe(_0x3cb8c4) {
  return (
    _0x3cb8c4 === a.BaseFieldType["Number"] ||
    _0x3cb8c4 === a.BaseFieldType["Currency"] ||
    _0x3cb8c4 === a.BaseFieldType["Progress"] ||
    _0x3cb8c4 === a.BaseFieldType["Rating"]
  );
}
function ke(_0x598e37) {
  var _0x309168;
  return (
    (_0x598e37 == null ? undefined : _0x598e37.type) ===
      a.BaseFieldType["MultiSelect"] ||
    (_0x598e37 == null ? undefined : _0x598e37.type) ===
      a.BaseFieldType["Group"] ||
    ((_0x598e37 == null ? undefined : _0x598e37.type) ===
      a.BaseFieldType["Person"] &&
      ((_0x309168 = _0x598e37.config) == null
        ? undefined
        : _0x309168.allowMultiple) === true)
  );
}
function Ae({
  base: _0x53dda6,
  chartRuntime: _0x39f8d7,
  onChange: _0x4a8933,
  onClose: _0x402585,
  onSelectBackgroundImage: _0x2abc7b,
  onSelectImage: _0x36a4b9,
  unitId: _0x523ac8,
  widget: _0x2534fd,
}) {
  let _0x5e9441 = (0, f.useDependency)(a.ICommandService),
    _0xce8ac9 = (0, f.useDependency)(a.LocaleService),
    _0x591c38 = _0x53dda6.getSnapshot(),
    _0x4af080 =
      "tableId" in _0x2534fd ? _0x591c38.tables[_0x2534fd.tableId] : undefined,
    _0x28837d =
      _0x2534fd.type === e.BaseDashboardWidgetType["PivotChart"]
        ? _0x4af080 == null
          ? undefined
          : _0x4af080.views[_0x2534fd.pivotViewId]
        : undefined,
    _0x7d9d44 = _0xce8ac9.t(Le(_0x2534fd)),
    _0xb2452a = (_0x313a34) =>
      _0xce8ac9.t("bases-dashboard-ui.dashboardInspector." + _0x313a34);
  return (0, m.jsxs)("aside", {
    "data-dashboard-inspector": true,
    className:
      "univer-flex\x20univer-h-full\x20univer-w-[380px]\x20univer-shrink-0\x20univer-flex-col\x20univer-border-l\x20univer-border-gray-200\x20univer-bg-gray-0\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
    children: [
      (0, m.jsxs)("header", {
        className:
          "univer-flex\x20univer-h-12\x20univer-shrink-0\x20univer-items-center\x20univer-border-b\x20univer-border-gray-200\x20univer-px-4\x20dark:!univer-border-gray-700",
        children: [
          (0, m.jsx)("h3", {
            className:
              "univer-m-0 univer-min-w-0 univer-flex-1 univer-truncate univer-text-base univer-font-semibold",
            children: _0x7d9d44,
          }),
          (0, m.jsx)(d.Button, {
            type: "button",
            size: "small",
            variant: "text",
            "aria-label": _0xb2452a("close"),
            onClick: _0x402585,
            children: (0, m.jsx)(s.CloseIcon, {}),
          }),
        ],
      }),
      _0x2534fd.type === e.BaseDashboardWidgetType["PivotChart"] &&
        (Ie(_0x28837d) && _0x39f8d7
          ? (0, m.jsx)(de, {
              runtime: _0x39f8d7,
              sourceChart: _0x28837d.config["chart"],
              sourceName:
                ((_0x4af080 == null ? undefined : _0x4af080.name) ?? "") +
                "\x20/\x20" +
                _0x28837d.name,
              widget: _0x2534fd,
              onChange: _0x4a8933,
              onEditData: () => {
                _0x5e9441
                  .executeCommand(t.ActivateBaseViewOperation["id"], {
                    unitId: _0x523ac8,
                    tableId: _0x2534fd.tableId,
                    viewId: _0x2534fd.pivotViewId,
                  })
                  .catch(() => undefined);
              },
            })
          : (0, m.jsx)(Pe, {
              message: Ie(_0x28837d)
                ? _0xb2452a("loading")
                : _0xb2452a("sourceUnavailable"),
            })),
      _0x2534fd.type === e.BaseDashboardWidgetType["FormulaShape"] &&
        (0, m.jsx)(me, {
          base: _0x53dda6,
          widget: _0x2534fd,
          onChange: _0x4a8933,
          onSelectBackgroundImage: _0x2abc7b,
        }),
      _0x2534fd.type === e.BaseDashboardWidgetType["TableFilter"] &&
        (0, m.jsx)(Me, {
          base: _0x53dda6,
          onChange: _0x4a8933,
          widget: _0x2534fd,
        }),
      _0x2534fd.type === e.BaseDashboardWidgetType["Text"] &&
        (0, m.jsx)(Ne, {
          label: _0xb2452a,
          onChange: _0x4a8933,
          widget: _0x2534fd,
        }),
      _0x2534fd.type === e.BaseDashboardWidgetType["Image"] &&
        (0, m.jsx)(je, {
          label: _0xb2452a,
          onChange: _0x4a8933,
          onSelectImage: _0x36a4b9,
          widget: _0x2534fd,
        }),
    ],
  });
}
function je({
  label: _0x441758,
  onChange: _0x4fef24,
  onSelectImage: _0x41fcd3,
  widget: _0x5783b1,
}) {
  return (0, m.jsxs)("div", {
    className: "univer-grid univer-gap-4 univer-p-4",
    children: [
      (0, m.jsxs)(d.Button, {
        className: "univer-w-full",
        onClick: () =>
          _0x41fcd3()
            .then(
              (_0x5ba44) =>
                _0x5ba44 &&
                _0x4fef24({
                  ..._0x5783b1,
                  source: _0x5ba44.source,
                  sourceType: _0x5ba44.sourceType,
                  alt: _0x5ba44.name,
                }),
            )
            .catch(() => undefined),
        children: [(0, m.jsx)(s.IncreaseIcon, {}), _0x441758("replaceImage")],
      }),
      (0, m.jsxs)("label", {
        className:
          "univer-grid univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
        children: [
          (0, m.jsx)("span", { children: _0x441758("backgroundImage") }),
          (0, m.jsx)(d.Segmented, {
            items: [
              { value: "cover", label: _0x441758("cover") },
              { value: "repeat", label: _0x441758("repeat") },
              { value: "original", label: _0x441758("originalSize") },
            ],
            value: _0x5783b1.displayMode ?? "cover",
            onChange: (_0x44c26f) =>
              _0x4fef24({ ..._0x5783b1, displayMode: _0x44c26f }).catch(
                () => undefined,
              ),
          }),
        ],
      }),
    ],
  });
}
function Me({ base: _0xe1bc59, onChange: _0x1529fc, widget: _0x2b2561 }) {
  let _0x42927f = _0xe1bc59.getSnapshot().tables[_0x2b2561.tableId],
    _0x158bf6 =
      _0x42927f == null
        ? undefined
        : _0x42927f.viewOrder["find"](
            (_0xa23e9e) => _0x42927f.views[_0xa23e9e],
          ),
    _0x42a20d = _0x158bf6
      ? _0x42927f == null
        ? undefined
        : _0x42927f.views[_0x158bf6]
      : undefined;
  return (0, m.jsx)(_e, {
    fields:
      _0x42927f && _0x42a20d ? (0, t.toMenuFields)(_0x42927f, _0x42a20d) : [],
    filter: _0x2b2561.filter,
    onChange: (_0x4da767) =>
      _0x1529fc({ ..._0x2b2561, filter: _0x4da767 }).catch(() => undefined),
    onClear: () =>
      _0x1529fc({ ..._0x2b2561, filter: null }).catch(() => undefined),
  });
}
function Ne({ label: _0x41ad12, onChange: _0x92cc14, widget: _0x2824f6 }) {
  let _0x4fe843 = (0, f.useDependency)(a.ThemeService),
    _0x3f7a41 = (0, f.useObservable)(
      () => _0x4fe843.currentTheme$,
      _0x4fe843.getCurrentTheme(),
      false,
      [_0x4fe843],
    ),
    _0x36f79d = B(_0x2824f6),
    _0x417006 = (_0x3c4732) =>
      _0x92cc14({
        ..._0x2824f6,
        appearance: { ..._0x36f79d, ..._0x3c4732 },
      }).catch(() => undefined);
  return (0, m.jsxs)("div", {
    className: "univer-grid univer-gap-4 univer-overflow-y-auto univer-p-4",
    children: [
      (0, m.jsx)(d.Textarea, {
        defaultValue: V(_0x2824f6.document),
        rows: 8,
        onBlur: (_0xe3502b) =>
          _0x92cc14({
            ..._0x2824f6,
            document: ee(_0x2824f6.document, _0xe3502b.target["value"]),
          }).catch(() => undefined),
      }),
      (0, m.jsx)(n.ChartColorField, {
        emptyLabel: _0x41ad12("backgroundColor"),
        label: _0x41ad12("backgroundColor"),
        pickerFallbackValue: _0x3f7a41.gray[0],
        resetLabel: _0x41ad12("reset"),
        value: _0x36f79d.backgroundColor ?? null,
        onChange: (_0xb0d1be) =>
          _0x417006({ backgroundColor: _0xb0d1be ?? undefined }),
      }),
      (0, m.jsx)(n.ChartColorField, {
        emptyLabel: _0x41ad12("textColor"),
        label: _0x41ad12("textColor"),
        pickerFallbackValue: _0x3f7a41.gray[1000],
        resetLabel: _0x41ad12("reset"),
        value: _0x36f79d.textColor ?? null,
        onChange: (_0x1a5982) =>
          _0x417006({ textColor: _0x1a5982 ?? undefined }),
      }),
      (0, m.jsx)(Fe, {
        label: _0x41ad12("alignment"),
        children: (0, m.jsx)(d.Segmented, {
          items: [
            { value: "left", label: _0x41ad12("left") },
            { value: "center", label: _0x41ad12("center") },
            { value: "right", label: _0x41ad12("right") },
          ],
          value: _0x36f79d.alignment,
          onChange: (_0x5acba6) => _0x417006({ alignment: _0x5acba6 }),
        }),
      }),
      (0, m.jsxs)(Fe, {
        label: _0x41ad12("textSize"),
        children: [
          (0, m.jsx)(d.Segmented, {
            items: [
              { value: "auto", label: _0x41ad12("autoFit") },
              { value: "custom", label: _0x41ad12("custom") },
            ],
            value: _0x36f79d.fontSizeMode,
            onChange: (_0x1b5447) => _0x417006({ fontSizeMode: _0x1b5447 }),
          }),
          _0x36f79d.fontSizeMode === "custom" &&
            (0, m.jsx)(d.InputNumber, {
              className: "univer-mt-2",
              min: 10,
              max: 120,
              value: _0x36f79d.fontSize,
              onChange: (_0x490237) =>
                _0x417006({
                  fontSize: _0x490237 ?? 18,
                  fontSizeMode: "custom",
                }),
            }),
        ],
      }),
    ],
  });
}
function Pe({ message: _0x8a4136 }) {
  return (0, m.jsx)("div", {
    className:
      "univer-grid\x20univer-min-h-40\x20univer-place-items-center\x20univer-p-4\x20univer-text-sm\x20univer-text-gray-500",
    children: _0x8a4136,
  });
}
function Fe({ children: _0x465cec, label: _0x29c12e }) {
  return (0, m.jsxs)("div", {
    role: "group",
    "aria-label": _0x29c12e,
    className:
      "univer-grid univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
    children: [(0, m.jsx)("span", { children: _0x29c12e }), _0x465cec],
  });
}
function Ie(_0x1c9157) {
  return (
    (_0x1c9157 == null ? undefined : _0x1c9157.type) ===
      a.BaseViewType["Pivot"] &&
    typeof _0x1c9157.config == "object" &&
    _0x1c9157.config !== null &&
    "pivot" in _0x1c9157.config &&
    "chart" in _0x1c9157.config
  );
}
function Le(_0x16610f) {
  switch (_0x16610f.type) {
    case e.BaseDashboardWidgetType["PivotChart"]:
      return "bases-dashboard-ui.dashboard.pivotChart";
    case e.BaseDashboardWidgetType["TableFilter"]:
      return "bases-dashboard-ui.dashboard.tableFilter";
    case e.BaseDashboardWidgetType["Text"]:
      return "bases-dashboard-ui.dashboard.text";
    case e.BaseDashboardWidgetType["Image"]:
      return "bases-dashboard-ui.dashboard.image";
    case e.BaseDashboardWidgetType["FormulaShape"]:
      return "bases-dashboard-ui.dashboard.formulaShape";
  }
}
let Z = class {
  constructor(_0x5390e6, _0x1a309f, _0x34a2e7) {
    ((this._localeService = _0x5390e6),
      (this._chartThemeService = _0x1a309f),
      (this._renderModelManager = _0x34a2e7));
  }
  createDomChartInstance() {
    return this._renderModelManager["createChartInstance"](
      h.ChartRenderMode["Dom"],
      this._createContext(),
    );
  }
  createRenderInput(_0x4d6562) {
    let _0x3914d4 = _0x4d6562.model["config"];
    if (!_0x3914d4)
      throw Error(
        "Base dashboard chart " + _0x4d6562.chartId + " has no render config.",
      );
    let _0x25c612 = this._localeService["getDirection"]();
    return {
      config: _0x3914d4,
      style: (0, h.resolveChartRuntimeStyle)(
        {
          ..._0x4d6562.model["style"],
          runtime: _0x4d6562.model["getRuntimeContext"](_0x25c612),
          direction: _0x25c612,
        },
        _0x3914d4.type,
      ),
    };
  }
  _createContext() {
    return {
      resolveHostStyle: ({ style: _0x5af532 }) =>
        (0, h.resolveDefaultChartHostFrameStyle)({
          style: _0x5af532,
          getRenderColor: (_0x3a0b07) =>
            this._chartThemeService["getRenderColor"](_0x3a0b07),
        }),
      resolveRenderBackgroundColor: ({ hostStyle: _0x573d08 }) =>
        _0x573d08.fill,
    };
  }
};
Z = G(
  [
    W(0, (0, a.Inject)(a.LocaleService)),
    W(1, (0, a.Inject)(h.ChartThemeService)),
    W(2, h.IChartRenderModelManagerService),
  ],
  Z,
);
function Re(_0x1e7a2e, _0x382f4f) {
  var _0x2f5903;
  ((_0x1e7a2e.style["backgroundColor"] = _0x382f4f.fill ?? "transparent"),
    (_0x1e7a2e.style["border"] =
      (_0x2f5903 = _0x382f4f.border) != null &&
      _0x2f5903.color &&
      _0x382f4f.border["width"]
        ? _0x382f4f.border["width"] + "px solid " + _0x382f4f.border["color"]
        : ""),
    (_0x1e7a2e.style["borderRadius"] = _0x382f4f.radius
      ? _0x382f4f.radius + "px"
      : ""),
    (_0x1e7a2e.style["overflow"] = "hidden"),
    (_0x1e7a2e.style["boxSizing"] = "border-box"));
}
var ze = class extends a.Disposable {
  constructor(_0x1ef4a8, _0x32d89d) {
    (super(),
      (this.chartId = _0x1ef4a8),
      (this._element = _0x32d89d),
      U(this, "mode", h.ChartRenderMode["Dom"]));
  }
  getRect() {
    return {
      width: Math.max(1, this._element["clientWidth"]),
      height: Math.max(1, this._element["clientHeight"]),
    };
  }
  setStyle(_0x2ec6a3) {
    Re(this._element, _0x2ec6a3);
  }
  async ensureMount() {
    return this._element;
  }
  checkMounted() {
    return this._element["isConnected"];
  }
  syncLayout() {}
  markReady() {}
  markNotReady() {}
};
function Be({ isRowDirection: _0x4ef4ad, runtime: _0x1dd781 }) {
  let _0x587d81 = (0, p.useRef)(null),
    _0x4d8140 = (0, f.useDependency)(a.LocaleService),
    _0x3057ce = (0, f.useDependency)(a.ILogService),
    _0x36b650 = (0, f.useDependency)(Z),
    _0x5b7009 = (0, f.useDependency)(a.ThemeService);
  return (
    (0, p.useEffect)(() => {
      let _0x1a887f = _0x587d81.current;
      if (!_0x1a887f) return;
      _0x1a887f.replaceChildren();
      let { chartId: _0x3d5c00, model: _0x26f0ac } = _0x1dd781,
        _0x46794d = _0x26f0ac.dataSource,
        _0x49a794 = new ze(_0x3d5c00, _0x1a887f),
        _0x3ae4e7 = _0x36b650.createDomChartInstance(),
        _0x3cdbd8 = false,
        _0x37428d = null,
        _0x524e44 = null,
        _0x559fb1 = null,
        _0x443578 = null,
        _0x52aa05 = false,
        _0x5803df = false,
        _0xedd028 = Promise.resolve();
      _0x3ae4e7.bind(_0x49a794);
      let _0x53dea4 = () => {
          var _0x4d28f5, _0x518411, _0x1fe293, _0x3eb754;
          if (
            document.visibilityState === "hidden" ||
            ((_0x4d28f5 = (_0x518411 = window).matchMedia) != null &&
              (_0x4d28f5 = _0x4d28f5.call(
                _0x518411,
                "(prefers-reduced-motion: reduce)",
              )) != null &&
              _0x4d28f5.matches) ||
            ((_0x1fe293 = (_0x3eb754 = window).matchMedia) != null &&
              (_0x1fe293 = _0x1fe293.call(_0x3eb754, "print")) != null &&
              _0x1fe293.matches) ||
            !_0x1a887f.isConnected
          )
            return false;
          let _0x28d112 = _0x1a887f.getBoundingClientRect();
          return (
            _0x28d112.width > 0 &&
            _0x28d112.height > 0 &&
            _0x28d112.right > 0 &&
            _0x28d112.bottom > 0 &&
            _0x28d112.left < window.innerWidth &&
            _0x28d112.top < window.innerHeight
          );
        },
        _0x41a731 = () => {
          (_0x524e44 !== null && clearTimeout(_0x524e44),
            (_0x1a887f.dataset["baseChartDataAnimation"] = "true"),
            (_0x1a887f.dataset["baseChartDataAnimationDuration"] = String(
              h.CHART_DATA_UPDATE_ANIMATION_DURATION,
            )),
            (_0x524e44 = setTimeout(() => {
              ((_0x524e44 = null),
                delete _0x1a887f.dataset["baseChartDataAnimation"],
                delete _0x1a887f.dataset["baseChartDataAnimationDuration"]);
            }, h.CHART_DATA_UPDATE_ANIMATION_DURATION)));
        },
        _0x46c3cf = (_0xbb673d) => {
          if (
            (_0x37428d !== null &&
              (clearTimeout(_0x37428d), (_0x37428d = null)),
            !_0x26f0ac.config)
          ) {
            _0x5803df ||= _0xbb673d;
            return;
          }
          ((_0x1a887f.dataset["chartType"] = String(_0x26f0ac.chartType)),
            (_0x1a887f.dataset["chartRowDirection"] = String(_0x4ef4ad)));
          let _0xabbec6 = _0x36b650.createRenderInput(_0x1dd781),
            _0x54e1f4 = {
              chartId: _0x3d5c00,
              config: _0xabbec6.config,
              style: _0xabbec6.style,
            };
          _0xedd028 = _0xedd028
            .then(async () => {
              _0x3cdbd8 ||
                ((_0x1a887f.dataset["renderRevision"] = String(
                  Number(_0x1a887f.dataset["renderRevision"] ?? 0) + 1,
                )),
                _0xbb673d &&
                _0x559fb1 &&
                _0x3ae4e7.renderTransition &&
                _0x53dea4()
                  ? (await _0x3ae4e7.renderTransition(_0x559fb1, _0x54e1f4, {
                      duration: h.CHART_DATA_UPDATE_ANIMATION_DURATION,
                    }),
                    _0x41a731())
                  : await _0x3ae4e7.render(_0x54e1f4),
                (_0x559fb1 = _0x54e1f4));
            })
            .catch((_0xab7168) =>
              _0x3057ce.error(
                "[BasePivotChart]\x20Failed\x20to\x20render\x20chart.",
                _0xab7168,
              ),
            );
        },
        _0x18822e = (_0x559cbd = false) => {
          ((_0x5803df ||= _0x559cbd),
            !_0x52aa05 &&
              ((_0x52aa05 = true),
              queueMicrotask(() => {
                _0x52aa05 = false;
                let _0xb52074 = _0x5803df;
                ((_0x5803df = false), _0x46c3cf(_0xb52074));
              })));
        },
        _0x14b0e0 = [
          _0x46794d.data$["subscribe"]((_0x385587) => {
            let _0x5551ab = JSON.stringify(_0x385587);
            (_0x443578 != null && _0x443578 !== _0x5551ab && _0x18822e(true),
              (_0x443578 = _0x5551ab));
          }),
          _0x26f0ac.config$["subscribe"]((_0x1d3ed6) => {
            _0x1d3ed6 && _0x18822e();
          }),
          _0x26f0ac.style$["subscribe"](() => _0x18822e()),
          _0x4d8140.direction$["subscribe"](() => _0x18822e()),
          (0, c.combineLatest)([_0x5b7009.currentTheme$, _0x5b7009.darkMode$])
            .pipe((0, c.skip)(1))
            .subscribe(() => _0x18822e()),
        ],
        _0x158ef7 =
          typeof ResizeObserver > "u"
            ? null
            : new ResizeObserver(() => {
                _0x3cdbd8 ||
                  (_0x49a794.syncLayout(),
                  _0x37428d !== null && clearTimeout(_0x37428d),
                  (_0x37428d = setTimeout(() => _0x18822e(), 100)));
              });
      return (
        _0x158ef7 == null || _0x158ef7.observe(_0x1a887f),
        () => {
          ((_0x3cdbd8 = true),
            _0x37428d !== null && clearTimeout(_0x37428d),
            _0x524e44 !== null && clearTimeout(_0x524e44),
            delete _0x1a887f.dataset["baseChartDataAnimation"],
            delete _0x1a887f.dataset["baseChartDataAnimationDuration"],
            _0x158ef7 == null || _0x158ef7.disconnect(),
            _0x14b0e0.forEach((_0x1e4530) => _0x1e4530.unsubscribe()),
            _0x3ae4e7.dispose(),
            _0x49a794.dispose(),
            _0x1a887f.replaceChildren());
        }
      );
    }, [_0x4ef4ad, _0x4d8140, _0x3057ce, _0x36b650, _0x1dd781, _0x5b7009]),
    (0, m.jsx)("div", {
      ref: _0x587d81,
      "data-u-comp": "base-pivot-chart",
      className: "univer-absolute univer-inset-0 univer-overflow-hidden",
    })
  );
}
function Ve({
  filters: _0x464885,
  onRuntimeChange: _0x3c49e0,
  unitId: _0x2cddf8,
  widget: _0x52bf29,
}) {
  let _0x1f610f = (0, f.useDependency)(a.IUniverInstanceService),
    _0x134ccc = (0, f.useDependency)(a.LocaleService),
    _0x3842f8 = (0, f.useDependency)(a.ILogService),
    _0x35f4de = (0, f.useDependency)(e.BaseChartRuntimeService),
    [_0x298aa9, _0x11fb53] = (0, p.useState)(null),
    [_0x5dad31, _0x3ee8a2] = (0, p.useState)(false),
    [_0x3a8031, _0x180e65] = (0, p.useState)(null),
    _0x47904c = (0, p.useRef)(
      "base-dashboard-pivot-chart-" + (0, a.generateRandomId)(8),
    ),
    _0x378198 = _0x1f610f.getUnit(
      _0x2cddf8,
      a.UniverInstanceType["UNIVER_BASE"],
    ),
    _0x15e9a3 =
      _0x378198 == null
        ? undefined
        : _0x378198.getSnapshot().tables[_0x52bf29.tableId],
    _0x3d8ac3 =
      _0x15e9a3 == null ? undefined : _0x15e9a3.views[_0x52bf29.pivotViewId],
    _0x4e4d4d = He(_0x3d8ac3);
  if (
    ((0, p.useEffect)(() => {
      if (!_0x4e4d4d) return;
      let _0x99be5a = _0x47904c.current;
      return (
        _0x35f4de.acquireChartRuntime(_0x99be5a, {
          unitId: _0x2cddf8,
          tableId: _0x52bf29.tableId,
          viewId: _0x52bf29.pivotViewId,
          filters: [],
        }),
        () => {
          (_0x35f4de.releaseChartRuntime(_0x2cddf8, _0x99be5a),
            _0x3c49e0 == null || _0x3c49e0(_0x52bf29.id, null));
        }
      );
    }, [
      _0x4e4d4d,
      _0x3c49e0,
      _0x35f4de,
      _0x2cddf8,
      _0x52bf29.id,
      _0x52bf29.pivotViewId,
      _0x52bf29.tableId,
    ]),
    (0, p.useEffect)(() => {
      if (!He(_0x3d8ac3)) return;
      let _0x163c91 = true,
        _0x5225a1 = _0x52bf29.chart ?? _0x3d8ac3.config["chart"],
        _0x5acc67 = {
          unitId: _0x2cddf8,
          tableId: _0x52bf29.tableId,
          viewId: _0x52bf29.pivotViewId,
          filters: [_0x3d8ac3.filter ?? null, ..._0x464885],
        };
      return (
        _0x35f4de
          .refreshChartRuntime(
            _0x2cddf8,
            _0x47904c.current,
            _0x5acc67,
            _0x5225a1,
          )
          .then((_0x3e7d93) => {
            if (!_0x163c91 || !_0x3e7d93) return;
            let _0x10e842 =
              _0x35f4de.getChartRuntime(_0x2cddf8, _0x47904c.current) ?? null;
            (_0x11fb53(_0x3e7d93),
              _0x180e65(_0x10e842),
              _0x3ee8a2(false),
              _0x3c49e0 == null || _0x3c49e0(_0x52bf29.id, _0x10e842));
          })
          .catch((_0x23c520) => {
            (_0x3842f8.error(
              "[DashboardPivotChartWidget] Failed to calculate the pivot result.",
              _0x23c520,
            ),
              _0x163c91 && (_0x11fb53(null), _0x3ee8a2(true)));
          }),
        () => {
          _0x163c91 = false;
        }
      );
    }, [
      _0x464885,
      _0x3842f8,
      _0x3c49e0,
      _0x35f4de,
      _0x2cddf8,
      _0x3d8ac3,
      _0x52bf29.chart,
      _0x52bf29.id,
      _0x52bf29.pivotViewId,
      _0x52bf29.tableId,
    ]),
    !He(_0x3d8ac3))
  )
    return (0, m.jsx)("div", {
      className:
        "univer-grid\x20univer-h-full\x20univer-place-items-center\x20univer-text-xs\x20univer-text-gray-500",
      children: _0x134ccc.t(
        "bases-dashboard-ui.dashboardInspector.sourceUnavailable",
      ),
    });
  let _0x15acba =
    _0x35f4de.getChartRuntime(_0x2cddf8, _0x47904c.current) === _0x3a8031
      ? _0x3a8031
      : null;
  return _0x298aa9 && _0x15acba
    ? (0, m.jsx)(Be, {
        isRowDirection: (0, e.resolveBasePivotChartRowDirection)(
          (_0x52bf29.chart ?? _0x3d8ac3.config["chart"]).orient,
        ),
        runtime: _0x15acba,
      })
    : (0, m.jsx)("div", {
        className:
          "univer-grid\x20univer-h-full\x20univer-place-items-center\x20univer-text-xs\x20univer-text-gray-500",
        children: _0x134ccc.t(
          _0x5dad31
            ? "bases-dashboard-ui.pivot.calculationFailed"
            : "bases-dashboard-ui.pivot.calculating",
        ),
      });
}
function He(_0x37fc8a) {
  return (
    (_0x37fc8a == null ? undefined : _0x37fc8a.type) ===
      a.BaseViewType["Pivot"] &&
    typeof _0x37fc8a.config == "object" &&
    _0x37fc8a.config !== null &&
    "pivot" in _0x37fc8a.config &&
    "chart" in _0x37fc8a.config
  );
}
function Ue({ widget: _0x38e9ab }) {
  let _0xce2455 = (0, f.useDependency)(a.ThemeService),
    _0x515e4d = (0, f.useDependency)(a.LocaleService),
    _0x131927 = (0, f.useObservable)(
      () => _0xce2455.currentTheme$,
      _0xce2455.getCurrentTheme(),
      false,
      [_0xce2455],
    ),
    _0xadad69 = (0, p.useRef)(null),
    _0x850ca0 = (0, p.useRef)(null),
    _0x2f244f = B(_0x38e9ab),
    _0x1dca59 = _0x2f244f.backgroundColor ?? _0x131927.gray[0],
    _0x17c056 = _0x2f244f.textColor ?? _0x131927.gray[1000],
    _0x3af6a8 = V(_0x38e9ab.document);
  return (
    (0, p.useEffect)(() => {
      let _0x22609a = _0xadad69.current,
        _0x2b3994 = _0x850ca0.current;
      if (!_0x22609a || !_0x2b3994) return;
      let _0x1e577e = () => {
        if (
          _0x2f244f.fontSizeMode === "custom" ||
          !_0x22609a.clientWidth ||
          !_0x22609a.clientHeight
        ) {
          _0x2b3994.style["fontSize"] = _0x2f244f.fontSize + "px";
          return;
        }
        let _0xd6b110 = 8,
          _0x39baf7 = 72,
          _0x42e967 = _0xd6b110;
        for (; _0xd6b110 <= _0x39baf7;) {
          let _0x3f760e = Math.floor((_0xd6b110 + _0x39baf7) / 2);
          ((_0x2b3994.style["fontSize"] = _0x3f760e + "px"),
            _0x2b3994.scrollWidth <= _0x22609a.clientWidth &&
            _0x2b3994.scrollHeight <= _0x22609a.clientHeight
              ? ((_0x42e967 = _0x3f760e), (_0xd6b110 = _0x3f760e + 1))
              : (_0x39baf7 = _0x3f760e - 1));
        }
        _0x2b3994.style["fontSize"] = _0x42e967 + "px";
      };
      if ((_0x1e577e(), typeof ResizeObserver > "u")) return;
      let _0x2a09c3 = new ResizeObserver(_0x1e577e);
      return (_0x2a09c3.observe(_0x22609a), () => _0x2a09c3.disconnect());
    }, [_0x2f244f.fontSize, _0x2f244f.fontSizeMode, _0x3af6a8]),
    (0, m.jsx)("div", {
      "data-dashboard-text-widget": _0x38e9ab.id,
      className:
        "univer-box-border\x20univer-flex\x20univer-h-full\x20univer-w-full\x20univer-items-center\x20univer-overflow-hidden\x20univer-p-4",
      style: { backgroundColor: _0x1dca59, color: _0x17c056 },
      children: (0, m.jsx)("div", {
        ref: _0xadad69,
        "data-dashboard-text-content": true,
        "aria-label": _0x515e4d.t("bases-dashboard-ui.dashboard.text"),
        className:
          "univer-flex\x20univer-h-full\x20univer-min-h-0\x20univer-w-full\x20univer-items-center\x20univer-overflow-hidden",
        children: (0, m.jsx)("div", {
          ref: _0x850ca0,
          "data-dashboard-text-value": true,
          "data-font-size-mode": _0x2f244f.fontSizeMode,
          className:
            "univer-w-full univer-whitespace-pre-wrap univer-break-words univer-leading-normal",
          style: { textAlign: _0x2f244f.alignment },
          children: _0x3af6a8,
        }),
      }),
    })
  );
}
function We({ onDelete: _0x24b27e, onEdit: _0x518760 }) {
  let _0xf1dea2 = (0, f.useDependency)(a.LocaleService),
    _0x483778 = _0xf1dea2.t("bases-dashboard-ui.dashboard.editWidget"),
    _0x480a27 = _0xf1dea2.t("bases-dashboard-ui.dashboard.deleteWidget"),
    _0x539616 = _0xf1dea2.t("bases-dashboard-ui.dashboard.widgetActions");
  return (0, m.jsx)(d.DropdownMenu, {
    items: [
      {
        type: "item",
        children: (0, m.jsxs)("span", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: [
            (0, m.jsx)(s.PenIcon, {
              className: "univer-size-4",
              "aria-hidden": "true",
            }),
            (0, m.jsx)("span", { children: _0x483778 }),
          ],
        }),
        onSelect: _0x518760,
      },
      { type: "separator" },
      {
        type: "item",
        variant: "destructive",
        children: (0, m.jsxs)("span", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: [
            (0, m.jsx)(s.DeleteIcon, {
              className: "univer-size-4",
              "aria-hidden": "true",
            }),
            (0, m.jsx)("span", { children: _0x480a27 }),
          ],
        }),
        onSelect: _0x24b27e,
      },
    ],
    children: (0, m.jsx)(d.Button, {
      type: "button",
      size: "small",
      variant: "text",
      title: _0x539616,
      "aria-label": _0x539616,
      className:
        "univer-size-6 !univer-border !univer-border-solid !univer-border-gray-200 !univer-bg-gray-0 univer-p-0 !univer-shadow-none hover:!univer-bg-gray-100 dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:hover:!univer-bg-gray-800",
      children: (0, m.jsx)(s.MoreHorizontalIcon, {
        className: "univer-size-4",
        "aria-hidden": "true",
      }),
    }),
  });
}
function Ge({
  dashboardId: _0x4c04e2,
  presentation: _0x32bb3f = false,
  unitId: _0x1abe44,
}) {
  let _0x3e92be = (0, f.useDependency)(a.ICommandService),
    _0x2794a9 = (0, f.useDependency)(l.IAttachmentIoService),
    _0x2d1d81 = (0, f.useDependency)(a.IImageIoService),
    _0x29b0ab = (0, f.useDependency)(a.IUniverInstanceService),
    _0x3d95e4 = (0, f.useDependency)(a.LocaleService),
    _0x567d7b = (0, f.useDependency)(e.BaseDashboardResourceService),
    _0x121fbc = (0, f.useDependency)(a.IUndoRedoService),
    _0x63ed40 = (0, p.useRef)(null),
    [_0x3ccb96, _0x19f495] = (0, p.useState)(false),
    [_0x255830, _0x1b90aa] = (0, p.useState)(),
    [_0x46a86b, _0x1f9bab] = (0, p.useState)(false),
    [_0x44f6f1, _0x2d92ed] = (0, p.useState)(() => new Map()),
    _0x30815d = (0, p.useCallback)((_0x5ce093, _0x10c57a) => {
      _0x2d92ed((_0x25b7a3) => {
        let _0xdab403 = new Map(_0x25b7a3);
        return (
          _0x10c57a
            ? _0xdab403.set(_0x5ce093, _0x10c57a)
            : _0xdab403.delete(_0x5ce093),
          _0xdab403
        );
      });
    }, []),
    _0x14e8ba = (0, f.useObservable)(
      () =>
        _0x567d7b.change$["pipe"](
          (0, c.map)(() => _0x567d7b.getDashboard(_0x1abe44, _0x4c04e2)),
        ),
      _0x567d7b.getDashboard(_0x1abe44, _0x4c04e2),
      false,
      [_0x4c04e2, _0x567d7b, _0x1abe44],
    ),
    _0x55b70b = _0x29b0ab.getUnit(
      _0x1abe44,
      a.UniverInstanceType["UNIVER_BASE"],
    ),
    _0x82e4f5 = (0, f.useObservable)(
      () => _0x121fbc.undoRedoStatus$,
      { undos: 0, redos: 0 },
      false,
      [_0x121fbc],
    ),
    _0x222b06 = b(_0x1abe44, _0x4c04e2);
  if (
    ((0, p.useEffect)(() => {
      (_0x29b0ab.setCurrentUnitForType(_0x1abe44),
        _0x29b0ab.focusUnit(_0x1abe44));
    }, [_0x29b0ab, _0x1abe44]),
    (0, p.useEffect)(() => {
      let _0x2610c3 = _0x63ed40.current,
        _0x36c11e = _0x2610c3 == null ? undefined : _0x2610c3.ownerDocument;
      if (!_0x2610c3 || !_0x36c11e) return;
      let _0x29e562 = () =>
          _0x1f9bab(_0x36c11e.fullscreenElement === _0x36c11e.documentElement),
        _0x19cfa3 = (_0x6ef5fe) => {
          _0x6ef5fe.key === "Escape" && _0x1f9bab(false);
        };
      return (
        _0x36c11e.addEventListener("fullscreenchange", _0x29e562),
        _0x36c11e.addEventListener("keydown", _0x19cfa3),
        () => {
          (_0x36c11e.removeEventListener("fullscreenchange", _0x29e562),
            _0x36c11e.removeEventListener("keydown", _0x19cfa3));
        }
      );
    }, []),
    !_0x14e8ba || !_0x55b70b)
  )
    return null;
  let _0x43cf5b = (_0x143cae) =>
      _0x3e92be
        .executeCommand(e.UpsertBaseDashboardWidgetCommand["id"], {
          unitId: _0x1abe44,
          dashboardId: _0x4c04e2,
          widget: _0x143cae,
        })
        .catch(() => undefined),
    _0x9bc836 = (_0x2ce4d1, _0x494fbe, _0x343fc6) => {
      let _0x2cdd93 = Math.max(
          0,
          ..._0x14e8ba.widgetOrder["flatMap"]((_0x1281b9) => {
            var _0x40aaaa;
            let _0x5af8c6 =
              (_0x40aaaa = _0x14e8ba.widgets[_0x1281b9]) == null
                ? undefined
                : _0x40aaaa.layout;
            return _0x5af8c6 ? [_0x5af8c6.row + _0x5af8c6.rowSpan] : [];
          }),
        ),
        _0x2bc557 = "dashboard-widget-" + (0, a.generateRandomId)(8),
        _0x29cd20 = {
          column: 0,
          row: _0x2cdd93,
          columnSpan: _0x494fbe,
          rowSpan: _0x343fc6,
        };
      switch (_0x2ce4d1.type) {
        case e.BaseDashboardWidgetType["PivotChart"]:
          return _0x43cf5b({ ..._0x2ce4d1, id: _0x2bc557, layout: _0x29cd20 });
        case e.BaseDashboardWidgetType["TableFilter"]:
          return _0x43cf5b({ ..._0x2ce4d1, id: _0x2bc557, layout: _0x29cd20 });
        case e.BaseDashboardWidgetType["Text"]:
          return _0x43cf5b({ ..._0x2ce4d1, id: _0x2bc557, layout: _0x29cd20 });
        case e.BaseDashboardWidgetType["Image"]:
          return _0x43cf5b({ ..._0x2ce4d1, id: _0x2bc557, layout: _0x29cd20 });
        case e.BaseDashboardWidgetType["FormulaShape"]:
          return _0x43cf5b({ ..._0x2ce4d1, id: _0x2bc557, layout: _0x29cd20 });
      }
    },
    _0x2ea522 = _0x55b70b.getSnapshot(),
    _0x435da1 = _0x2ea522.tableOrder["flatMap"]((_0x24ee12) => {
      let _0x3a629e = _0x2ea522.tables[_0x24ee12];
      if (!_0x3a629e) return [];
      let _0xcdc6ba = _0x3a629e.viewOrder["flatMap"]((_0x4cc432) => {
        let _0x18c525 = _0x3a629e.views[_0x4cc432];
        return $e(_0x18c525)
          ? [
              {
                type: "item",
                children: _0x18c525.name,
                onSelect: () =>
                  _0x9bc836(
                    {
                      type: e.BaseDashboardWidgetType["PivotChart"],
                      tableId: _0x24ee12,
                      pivotViewId: _0x4cc432,
                      chart: { ..._0x18c525.config["chart"] },
                    },
                    6,
                    10,
                  ),
              },
            ]
          : [];
      });
      return [
        {
          type: "subItem",
          children: _0x3a629e.name,
          options: [
            ..._0xcdc6ba,
            ...(_0xcdc6ba.length ? [{ type: "separator" }] : []),
            {
              type: "item",
              children: _0x3d95e4.t("bases-dashboard-ui.dashboard.tableFilter"),
              onSelect: () =>
                _0x9bc836(
                  {
                    type: e.BaseDashboardWidgetType["TableFilter"],
                    tableId: _0x24ee12,
                    filter: null,
                  },
                  6,
                  8,
                ),
            },
          ],
        },
      ];
    }),
    _0x4c2724 = [
      ..._0x435da1,
      ...(_0x435da1.length ? [{ type: "separator" }] : []),
      {
        type: "item",
        children: _0x3d95e4.t("bases-dashboard-ui.dashboard.text"),
        onSelect: () =>
          _0x9bc836(
            { type: e.BaseDashboardWidgetType["Text"], document: Ye() },
            4,
            6,
          ),
      },
      {
        type: "item",
        children: _0x3d95e4.t("bases-dashboard-ui.dashboard.image"),
        onSelect: () =>
          Xe(_0x2794a9).then(
            (_0x4c7167) =>
              _0x4c7167 &&
              _0x9bc836(
                {
                  type: e.BaseDashboardWidgetType["Image"],
                  source: _0x4c7167.source,
                  sourceType: _0x4c7167.sourceType,
                  alt: _0x4c7167.name,
                  displayMode: "cover",
                },
                4,
                6,
              ),
          ),
      },
      {
        type: "item",
        children: _0x3d95e4.t("bases-dashboard-ui.dashboard.formulaShape"),
        onSelect: () => {
          let _0x1fa3be = _0x2ea522.tableOrder["find"](
            (_0x1a7c0a) => _0x2ea522.tables[_0x1a7c0a],
          );
          _0x1fa3be &&
            _0x9bc836(
              {
                type: e.BaseDashboardWidgetType["FormulaShape"],
                tableId: _0x1fa3be,
                shapeType: u.ShapeTypeEnum["RoundRect"],
                shapeData: (0, i.createFormulaShapeData)(),
                description: _0x3d95e4.t(
                  "bases-dashboard-ui.dashboard.formulaShape",
                ),
              },
              4,
              6,
            );
        },
      },
    ],
    _0x4a311f = _0x255830 ? _0x14e8ba.widgets[_0x255830] : undefined,
    _0x300092 = async () => {
      let _0x2f31ff = _0x63ed40.current;
      if (!_0x2f31ff) return;
      let _0x31fc7d = _0x2f31ff.ownerDocument;
      if (_0x31fc7d.fullscreenElement === _0x31fc7d.documentElement) {
        await _0x31fc7d.exitFullscreen();
        return;
      }
      await _0x31fc7d.documentElement["requestFullscreen"]();
    },
    _0x3e2fe8 = _0x32bb3f || _0x46a86b,
    _0x2745a4 = _0x222b06 && !_0x3e2fe8;
  return (0, m.jsxs)("div", {
    ref: _0x63ed40,
    className:
      "\n univer-flex univer-h-full univer-min-h-0 univer-flex-col univer-bg-gray-0\n dark:!univer-bg-gray-900\n " +
      (_0x46a86b
        ? "univer-fixed\x20univer-inset-0\x20univer-z-[1000]"
        : "univer-relative\x20univer-z-10") +
      "\n ",
    children: [
      !_0x3e2fe8 &&
        (0, m.jsxs)("header", {
          className:
            "univer-flex\x20univer-h-12\x20univer-shrink-0\x20univer-items-center\x20univer-gap-3\x20univer-border-b\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-px-4\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
          children: [
            (0, m.jsx)(s.ChartIcon, {
              className: "univer-size-5 univer-text-primary-600",
            }),
            (0, m.jsx)("h2", {
              className:
                "univer-m-0\x20univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-base\x20univer-font-semibold",
              children: _0x14e8ba.name,
            }),
            (0, m.jsx)(t.BaseUnitCollaborationStatus, { unitId: _0x1abe44 }),
            (0, m.jsx)(d.Button, {
              type: "button",
              size: "small",
              variant: "text",
              "aria-label": _0x3d95e4.t("bases-dashboard-ui.dashboard.undo"),
              disabled: !_0x222b06 || _0x82e4f5.undos === 0,
              onClick: () =>
                _0x3e92be
                  .executeCommand(a.UndoCommand["id"])
                  .catch(() => undefined),
              children: (0, m.jsx)(s.UndoIcon, {}),
            }),
            (0, m.jsx)(d.Button, {
              type: "button",
              size: "small",
              variant: "text",
              "aria-label": _0x3d95e4.t("bases-dashboard-ui.dashboard.redo"),
              disabled: !_0x222b06 || _0x82e4f5.redos === 0,
              onClick: () =>
                _0x3e92be
                  .executeCommand(a.RedoCommand["id"])
                  .catch(() => undefined),
              children: (0, m.jsx)(s.RedoIcon, {}),
            }),
            (0, m.jsx)(d.Button, {
              type: "button",
              size: "small",
              variant: "text",
              "aria-label": _0x3d95e4.t(
                "bases-dashboard-ui.dashboard.fullScreen",
              ),
              onClick: () => _0x300092().catch(() => undefined),
              children: (0, m.jsx)(s.ExpandIcon, {}),
            }),
            (0, m.jsx)(d.DropdownMenu, {
              items: _0x4c2724,
              children: (0, m.jsxs)(d.Button, {
                variant: "primary",
                disabled: !_0x222b06,
                children: [
                  (0, m.jsx)(s.IncreaseIcon, {}),
                  _0x3d95e4.t("bases-dashboard-ui.dashboard.addWidget"),
                ],
              }),
            }),
          ],
        }),
      (0, m.jsxs)("div", {
        className: "univer-flex univer-min-h-0 univer-flex-1",
        children: [
          (0, m.jsx)("div", {
            className: "univer-min-w-0 univer-flex-1",
            children: (0, m.jsx)(R, {
              dashboard: _0x14e8ba,
              dragLabel: _0x3d95e4.t(
                "bases-dashboard-ui.dashboardInspector.dragWidget",
              ),
              editable: _0x2745a4,
              resizeLabel: _0x3d95e4.t(
                "bases-dashboard-ui.dashboard.resizeWidget",
              ),
              widgetLabel: (_0x2349ba) => _0x3d95e4.t(Qe(_0x2349ba.type)),
              selectedWidgetId: _0x2745a4 ? _0x255830 : undefined,
              onSelectWidget: _0x2745a4
                ? (_0x374622) => {
                    (_0x1b90aa(_0x374622), _0x374622 || _0x19f495(false));
                  }
                : undefined,
              onLayoutsCommit: (_0x5f2e55) => {
                let _0x19b978 = { ..._0x14e8ba.widgets };
                (_0x5f2e55.forEach((_0xb5fdda, _0x1d73bf) => {
                  let _0x566259 = _0x19b978[_0x1d73bf];
                  _0x566259 &&
                    (_0x19b978[_0x1d73bf] = {
                      ..._0x566259,
                      layout: _0xb5fdda,
                    });
                }),
                  _0x3e92be
                    .executeCommand(e.UpdateBaseDashboardCommand["id"], {
                      unitId: _0x1abe44,
                      dashboard: { ..._0x14e8ba, widgets: _0x19b978 },
                    })
                    .catch(() => undefined));
              },
              renderWidget: (_0x1d7ba6) =>
                (0, m.jsx)(Ke, {
                  base: _0x55b70b,
                  dashboard: _0x14e8ba,
                  unitId: _0x1abe44,
                  widget: _0x1d7ba6,
                  editable: _0x222b06,
                  onChange: _0x43cf5b,
                  onChartRuntimeChange: _0x30815d,
                }),
              renderWidgetActions: (_0x4c3c0d) =>
                (0, m.jsx)(We, {
                  onEdit: () => {
                    (_0x1b90aa(_0x4c3c0d.id), _0x19f495(true));
                  },
                  onDelete: () => {
                    (_0x255830 === _0x4c3c0d.id &&
                      (_0x1b90aa(undefined), _0x19f495(false)),
                      _0x3e92be
                        .executeCommand(
                          e.RemoveBaseDashboardWidgetCommand["id"],
                          {
                            unitId: _0x1abe44,
                            dashboardId: _0x4c04e2,
                            widgetId: _0x4c3c0d.id,
                          },
                        )
                        .catch(() => undefined));
                  },
                }),
            }),
          }),
          _0x2745a4 &&
            _0x3ccb96 &&
            _0x4a311f &&
            (0, m.jsx)(Ae, {
              base: _0x55b70b,
              chartRuntime: _0x44f6f1.get(_0x4a311f.id),
              unitId: _0x1abe44,
              widget: _0x4a311f,
              onChange: _0x43cf5b,
              onClose: () => _0x19f495(false),
              onSelectBackgroundImage: () => Ze(_0x2d1d81),
              onSelectImage: () => Xe(_0x2794a9),
            }),
        ],
      }),
    ],
  });
}
function Ke({
  base: _0x5955ce,
  dashboard: _0x146c6a,
  editable: _0x591618,
  onChange: _0x357e26,
  onChartRuntimeChange: _0x5aa65d,
  unitId: _0x1a190f,
  widget: _0x34597e,
}) {
  let _0xb4ee03 = (0, p.useMemo)(
    () =>
      _0x146c6a.widgetOrder["flatMap"]((_0x3116e8) => {
        let _0x2ce0ef = _0x146c6a.widgets[_0x3116e8];
        return (_0x2ce0ef == null ? undefined : _0x2ce0ef.type) ===
          e.BaseDashboardWidgetType["TableFilter"] &&
          _0x2ce0ef.tableId ===
            ("tableId" in _0x34597e ? _0x34597e.tableId : "") &&
          _0x2ce0ef.filter
          ? [_0x2ce0ef.filter]
          : [];
      }),
    [_0x146c6a, _0x34597e],
  );
  switch (_0x34597e.type) {
    case e.BaseDashboardWidgetType["PivotChart"]:
      return (0, m.jsx)(Ve, {
        filters: _0xb4ee03,
        unitId: _0x1a190f,
        widget: _0x34597e,
        onRuntimeChange: _0x5aa65d,
      });
    case e.BaseDashboardWidgetType["TableFilter"]:
      return (0, m.jsx)(ge, {
        disabled: !_0x591618,
        fields: qe(_0x5955ce, _0x34597e.tableId),
        filter: _0x34597e.filter,
        onChange: (_0x3235c5) =>
          _0x357e26({ ..._0x34597e, filter: _0x3235c5 }).catch(() => undefined),
      });
    case e.BaseDashboardWidgetType["Text"]:
      return (0, m.jsx)(Ue, { widget: _0x34597e });
    case e.BaseDashboardWidgetType["Image"]:
      return (0, m.jsx)(Je, { widget: _0x34597e });
    case e.BaseDashboardWidgetType["FormulaShape"]:
      return (0, m.jsx)(j, {
        dashboardId: _0x146c6a.id,
        unitId: _0x1a190f,
        widget: _0x34597e,
      });
  }
}
function qe(_0x154506, _0x2d8763) {
  let _0x8330f2 = _0x154506.getSnapshot().tables[_0x2d8763],
    _0x56ca20 =
      _0x8330f2 == null
        ? undefined
        : _0x8330f2.viewOrder["find"](
            (_0x488e9e) => _0x8330f2.views[_0x488e9e],
          ),
    _0x57ca01 = _0x56ca20
      ? _0x8330f2 == null
        ? undefined
        : _0x8330f2.views[_0x56ca20]
      : undefined;
  return _0x8330f2 && _0x57ca01
    ? (0, t.toMenuFields)(_0x8330f2, _0x57ca01)
    : [];
}
function Je({ widget: _0xfeaade }) {
  let _0x1db7c2 = (0, f.useDependency)(l.IAttachmentIoService),
    [_0x103156, _0x4503e8] = (0, p.useState)(
      _0xfeaade.sourceType === a.ImageSourceType["UUID"]
        ? ""
        : _0xfeaade.source,
    );
  return (
    (0, p.useEffect)(() => {
      let _0x5c06fa = true;
      return (
        _0x1db7c2
          .getAttachmentUrl(_0xfeaade.source, _0xfeaade.sourceType)
          .then((_0x47eeea) => {
            _0x5c06fa && _0x4503e8(_0x47eeea);
          })
          .catch(() => undefined),
        () => {
          _0x5c06fa = false;
        }
      );
    }, [_0x1db7c2, _0xfeaade.source, _0xfeaade.sourceType]),
    _0x103156
      ? (0, m.jsx)("div", {
          role: _0xfeaade.alt ? "img" : undefined,
          "aria-label": _0xfeaade.alt || undefined,
          "data-dashboard-image": _0xfeaade.id,
          className: "univer-h-full\x20univer-w-full\x20univer-bg-transparent",
          style: S(_0x103156, _0xfeaade.displayMode),
        })
      : null
  );
}
function Ye() {
  let _0x3d2425 = (0, a.createParagraphId)(new Set());
  return {
    id: "dashboard-text-" + (0, a.generateRandomId)(8),
    body: {
      dataStream: "\x0d\x0a",
      textRuns: [],
      paragraphs: [{ startIndex: 0, paragraphId: _0x3d2425 }],
    },
    documentStyle: {},
  };
}
function Xe(_0x1146c) {
  return new Promise((_0x2d62e8) => {
    let _0x86ddba = document.createElement("input");
    ((_0x86ddba.type = "file"),
      (_0x86ddba.accept = "image/*"),
      _0x86ddba.addEventListener(
        "change",
        () => {
          var _0x2d4f5e;
          let _0x1f6d41 =
            (_0x2d4f5e = _0x86ddba.files) == null ? undefined : _0x2d4f5e[0];
          if (!_0x1f6d41) {
            _0x2d62e8(null);
            return;
          }
          _0x1146c
            .saveAttachment(_0x1f6d41)
            .then((_0x1b54a3) => {
              if (!_0x1b54a3.source || _0x1b54a3.sourceType === undefined) {
                _0x2d62e8(null);
                return;
              }
              _0x2d62e8({
                name: _0x1b54a3.name,
                source: _0x1b54a3.source,
                sourceType: _0x1b54a3.sourceType,
              });
            })
            .catch(() => _0x2d62e8(null));
        },
        { once: true },
      ),
      _0x86ddba.click());
  });
}
function Ze(_0x177df7) {
  return new Promise((_0x412999) => {
    let _0x2d5c99 = document.createElement("input");
    ((_0x2d5c99.type = "file"),
      (_0x2d5c99.accept = "image/*"),
      _0x2d5c99.addEventListener(
        "change",
        () => {
          var _0x115c4a;
          let _0x16cb5f =
            (_0x115c4a = _0x2d5c99.files) == null ? undefined : _0x115c4a[0];
          if (!_0x16cb5f) {
            _0x412999(null);
            return;
          }
          _0x177df7
            .saveImage(_0x16cb5f)
            .then((_0x55ae8a) => {
              if (!(_0x55ae8a != null && _0x55ae8a.source)) {
                _0x412999(null);
                return;
              }
              if (_0x55ae8a.base64Cache) {
                let _0x4d8e3c = new Image();
                ((_0x4d8e3c.src = _0x55ae8a.base64Cache),
                  _0x177df7.addImageSourceCache(
                    _0x55ae8a.source,
                    _0x55ae8a.imageSourceType,
                    _0x4d8e3c,
                  ));
              }
              _0x412999({
                source: _0x55ae8a.source,
                sourceType: _0x55ae8a.imageSourceType,
              });
            })
            .catch(() => _0x412999(null));
        },
        { once: true },
      ),
      _0x2d5c99.click());
  });
}
function Qe(_0x758668) {
  switch (_0x758668) {
    case e.BaseDashboardWidgetType["PivotChart"]:
      return "bases-dashboard-ui.dashboard.pivotChart";
    case e.BaseDashboardWidgetType["TableFilter"]:
      return "bases-dashboard-ui.dashboard.tableFilter";
    case e.BaseDashboardWidgetType["Text"]:
      return "bases-dashboard-ui.dashboard.text";
    case e.BaseDashboardWidgetType["Image"]:
      return "bases-dashboard-ui.dashboard.image";
    case e.BaseDashboardWidgetType["FormulaShape"]:
      return "bases-dashboard-ui.dashboard.formulaShape";
  }
}
function $e(_0x39c193) {
  return (
    (_0x39c193 == null ? undefined : _0x39c193.type) ===
      a.BaseViewType["Pivot"] &&
    typeof _0x39c193.config == "object" &&
    _0x39c193.config !== null &&
    "pivot" in _0x39c193.config &&
    "chart" in _0x39c193.config
  );
}
const et = [
    {
      area: g.PivotTableFiledAreaEnum["Filter"],
      key: "filterFields",
      label: "bases-dashboard-ui.pivot.filters",
    },
    {
      area: g.PivotTableFiledAreaEnum["Column"],
      key: "columnFields",
      label: "bases-dashboard-ui.pivot.columns",
    },
    {
      area: g.PivotTableFiledAreaEnum["Row"],
      key: "rowFields",
      label: "bases-dashboard-ui.pivot.rows",
    },
    {
      area: g.PivotTableFiledAreaEnum["Value"],
      key: "valueFields",
      label: "bases-dashboard-ui.pivot.values",
    },
  ],
  tt = [
    {
      value: g.PivotSubtotalTypeEnum["sum"],
      localeKey: "bases-dashboard-ui.pivot.sum",
    },
    {
      value: g.PivotSubtotalTypeEnum["count"],
      localeKey: "bases-dashboard-ui.pivot.count",
    },
    {
      value: g.PivotSubtotalTypeEnum["countNums"],
      localeKey: "bases-dashboard-ui.pivot.countNumbers",
    },
    {
      value: g.PivotSubtotalTypeEnum["average"],
      localeKey: "bases-dashboard-ui.pivot.average",
    },
    {
      value: g.PivotSubtotalTypeEnum["max"],
      localeKey: "bases-dashboard-ui.pivot.max",
    },
    {
      value: g.PivotSubtotalTypeEnum["min"],
      localeKey: "bases-dashboard-ui.pivot.min",
    },
    {
      value: g.PivotSubtotalTypeEnum["product"],
      localeKey: "bases-dashboard-ui.pivot.product",
    },
    {
      value: g.PivotSubtotalTypeEnum["stdDev"],
      localeKey: "bases-dashboard-ui.pivot.stdDev",
    },
    {
      value: g.PivotSubtotalTypeEnum["stdDevp"],
      localeKey: "bases-dashboard-ui.pivot.stdDevPopulation",
    },
    {
      value: g.PivotSubtotalTypeEnum["var"],
      localeKey: "bases-dashboard-ui.pivot.variance",
    },
    {
      value: g.PivotSubtotalTypeEnum["varp"],
      localeKey: "bases-dashboard-ui.pivot.variancePopulation",
    },
  ];
function nt(_0x2c6559) {
  let { config: _0x3c7636, onChange: _0x49d0dc, table: _0x756d9f } = _0x2c6559,
    _0xde6b2e = (0, f.useDependency)(a.LocaleService),
    [_0x5df949, _0x140175] = (0, p.useState)("fields"),
    [_0x817445, _0x15c111] = (0, p.useState)(""),
    [_0x4a01e5, _0x75b525] = (0, p.useState)(null),
    [_0x2bbe92, _0x54cff6] = (0, p.useState)(null),
    [_0x8deb65, _0x217b0e] = (0, p.useState)(null),
    [_0x3aa80b, _0x3efce2] = (0, p.useState)(null),
    _0x2e848c = (0, p.useRef)(null),
    _0x14dd39 = (0, p.useMemo)(
      () =>
        _0x756d9f.fieldOrder["flatMap"]((_0x1aac8e) => {
          let _0x2bdfa7 = _0x756d9f.fields[_0x1aac8e];
          return _0x2bdfa7 &&
            _0x2bdfa7.system !== true &&
            _0x2bdfa7.type !== a.BaseFieldType["RecordId"]
            ? [_0x2bdfa7]
            : [];
        }).filter((_0x2f6a0a) =>
          _0x2f6a0a.name["toLocaleLowerCase"]().includes(
            _0x817445.trim().toLocaleLowerCase(),
          ),
        ),
      [_0x817445, _0x756d9f],
    ),
    _0x1df93a = (_0x37981e) => {
      let _0x59a93b = (0, e.createBasePivotTable)(_0x756d9f, _0x3c7636.pivot);
      try {
        (_0x37981e(_0x59a93b), _0x49d0dc({ pivot: _0x59a93b.toJSON() }));
      } finally {
        _0x59a93b.dispose();
      }
    },
    _0x3cd0e4 = (_0x3057a1, _0x3f180a) => {
      _0x4a01e5 &&
        (_0x1df93a((_0x5dde19) => {
          if (_0x4a01e5.kind === "field") {
            let _0x5e1c59 = _0x5dde19.getFieldPositionInfoById(_0x4a01e5.id),
              _0x1c4acb =
                _0x5e1c59.area === _0x3057a1 && _0x5e1c59.index < _0x3f180a
                  ? _0x3f180a - 1
                  : _0x3f180a;
            _0x5dde19.updateFieldPosition(_0x4a01e5.id, _0x3057a1, _0x1c4acb);
            return;
          }
          ut(_0x5dde19, _0x4a01e5.id, _0x3057a1, _0x3f180a);
        }),
        _0x75b525(null),
        _0x54cff6(null));
    };
  return (0, m.jsxs)("div", {
    className: "univer-flex univer-min-h-full univer-flex-col",
    children: [
      (0, m.jsx)(n.ChartEditPanelTabs, {
        ariaLabel: _0xde6b2e.t("bases-dashboard-ui.pivot.pivotConfiguration"),
        className: "univer-shrink-0 univer-px-3",
        items: [
          {
            label: _0xde6b2e.t("bases-dashboard-ui.pivot.fields"),
            panelId: "base-pivot-fields",
            value: "fields",
          },
          {
            label: _0xde6b2e.t("bases-dashboard-ui.pivot.options"),
            panelId: "base-pivot-options",
            value: "options",
          },
        ],
        value: _0x5df949,
        onChange: _0x140175,
      }),
      (0, m.jsx)("div", {
        ref: _0x2e848c,
        className: (0, d.clsx)(
          "univer-min-h-0 univer-flex-1 univer-overflow-y-auto univer-p-3",
          d.scrollbarClassName,
        ),
        onDragOver: (_0x4f6078) => {
          let _0x2fa484 = _0x2e848c.current;
          if (!_0x2fa484) return;
          let _0x2758fa = _0x2fa484.getBoundingClientRect();
          _0x4f6078.clientY < _0x2758fa.top + 48
            ? (_0x2fa484.scrollTop -= 16)
            : _0x4f6078.clientY > _0x2758fa.bottom - 48 &&
              (_0x2fa484.scrollTop += 16);
        },
        children:
          _0x5df949 === "options"
            ? (0, m.jsx)(lt, { config: _0x3c7636, commit: _0x1df93a })
            : (0, m.jsxs)("div", {
                className: "univer-flex univer-flex-col univer-gap-4",
                children: [
                  (0, m.jsxs)("div", {
                    children: [
                      (0, m.jsx)("div", {
                        className:
                          "univer-mb-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
                        children: _0xde6b2e.t(
                          "bases-dashboard-ui.pivot.sourceFields",
                        ),
                      }),
                      (0, m.jsx)(d.Input, {
                        allowClear: true,
                        slot: (0, m.jsx)(s.SearchIcon, {}),
                        value: _0x817445,
                        placeholder: _0xde6b2e.t(
                          "bases-dashboard-ui.pivot.searchFields",
                        ),
                        onChange: _0x15c111,
                      }),
                      (0, m.jsx)("div", {
                        className:
                          "univer-mt-2 univer-flex univer-max-h-60 univer-flex-col univer-overflow-y-auto",
                        children: _0x14dd39.map((_0x40b3e8) =>
                          (0, m.jsx)(
                            rt,
                            {
                              config: _0x3c7636,
                              field: _0x40b3e8,
                              onAdd: (_0x33c220) =>
                                _0x1df93a((_0x44ba20) =>
                                  ut(
                                    _0x44ba20,
                                    _0x40b3e8.id,
                                    _0x33c220,
                                    _0x44ba20.getFieldCountByArea(_0x33c220),
                                  ),
                                ),
                              onCheckedChange: (_0x1edc43) =>
                                _0x1df93a((_0x5604da) => {
                                  let _0x1dfc6d =
                                    _0x5604da.getTableFieldsByDataFieldId(
                                      _0x40b3e8.id,
                                    );
                                  if (!_0x1edc43) {
                                    _0x1dfc6d.forEach((_0x2631b3) =>
                                      _0x5604da.removeField(_0x2631b3.getId()),
                                    );
                                    return;
                                  }
                                  if (_0x1dfc6d.length === 0) {
                                    let _0x2d2894 = ft(_0x40b3e8)
                                      ? g.PivotTableFiledAreaEnum["Value"]
                                      : g.PivotTableFiledAreaEnum["Row"];
                                    _0x5604da.addFieldWithSourceId(
                                      _0x40b3e8.id,
                                      _0x2d2894,
                                    );
                                  }
                                }),
                              onDragStart: () =>
                                _0x75b525({ kind: "source", id: _0x40b3e8.id }),
                            },
                            _0x40b3e8.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, m.jsx)("div", {
                    className: "univer-grid univer-grid-cols-2 univer-gap-3",
                    children: et.map((_0x544d28) =>
                      (0, m.jsx)(
                        at,
                        {
                          area: _0x544d28.area,
                          dropTarget: _0x2bbe92,
                          fields: _0x3c7636.pivot[_0x544d28.key],
                          label: _0xde6b2e.t(_0x544d28.label),
                          snapshot: _0x3c7636.pivot,
                          onDragEnd: () => {
                            (_0x75b525(null), _0x54cff6(null));
                          },
                          onDragStart: (_0x25657e) =>
                            _0x75b525({
                              kind: "field",
                              id: _0x25657e,
                              area: _0x544d28.area,
                            }),
                          onDragOver: (_0x29c0e2) =>
                            _0x54cff6({
                              area: _0x544d28.area,
                              index: _0x29c0e2,
                            }),
                          onDrop: (_0x842a61) =>
                            _0x3cd0e4(_0x544d28.area, _0x842a61),
                          onFilter: _0x217b0e,
                          onRemove: (_0x3428a0) =>
                            _0x1df93a((_0x169699) =>
                              _0x169699.removeField(_0x3428a0),
                            ),
                          onSettings: _0x3efce2,
                        },
                        _0x544d28.area,
                      ),
                    ),
                  }),
                  _0x8deb65 &&
                    (0, m.jsx)(
                      st,
                      {
                        fieldId: _0x8deb65,
                        snapshot: _0x3c7636.pivot,
                        table: _0x756d9f,
                        onCancel: () => _0x217b0e(null),
                        onCommit: (_0x1c23ed, _0x1caf2a) => {
                          (_0x1df93a((_0x2441e3) => {
                            let _0x315b04 =
                                _0x2441e3.getDataFieldByTableId(_0x8deb65),
                              _0x145ad5 =
                                (_0x315b04 == null
                                  ? undefined
                                  : _0x315b04.items) ?? [];
                            (_0x2441e3.setLabelFilterInfo(_0x8deb65, {
                              type: g.PivotFilterTypeEnum["ManualFilter"],
                              list: _0x1c23ed,
                              isAll: _0x1c23ed.length === _0x145ad5.length,
                            }),
                              _0x2441e3.setSortInfo(
                                _0x8deb65,
                                _0x1caf2a === undefined
                                  ? undefined
                                  : { type: _0x1caf2a },
                              ));
                          }),
                            _0x217b0e(null));
                        },
                      },
                      _0x8deb65,
                    ),
                  _0x3aa80b &&
                    (0, m.jsx)(
                      ct,
                      {
                        field: _0x3c7636.pivot["measure"][_0x3aa80b],
                        onCancel: () => _0x3efce2(null),
                        onCommit: (_0x42cdd7, _0x4bcb27, _0x53968d) => {
                          (_0x1df93a((_0xf16770) => {
                            (_0xf16770.renameField(_0x3aa80b, _0x42cdd7),
                              _0xf16770.setSubtotalType(_0x3aa80b, _0x4bcb27),
                              _0xf16770.setFieldFormat(
                                _0x3aa80b,
                                _0x53968d || undefined,
                              ));
                          }),
                            _0x3efce2(null));
                        },
                      },
                      _0x3aa80b,
                    ),
                ],
              }),
      }),
    ],
  });
}
function rt(_0x1fcb37) {
  let {
      config: _0x598068,
      field: _0x311daf,
      onAdd: _0x296757,
      onCheckedChange: _0x8338fb,
      onDragStart: _0x1b61f7,
    } = _0x1fcb37,
    _0x4bf3bf = (0, f.useDependency)(a.LocaleService),
    _0x16dea2 = [
      ...Object.values(_0x598068.pivot["dimension"]),
      ...Object.values(_0x598068.pivot["measure"]),
    ].some((_0x3b5aa7) => _0x3b5aa7.dataFieldId === _0x311daf.id),
    _0x5030bb = et.map((_0x5a1658) => ({
      type: "item",
      children: _0x4bf3bf.t(pt(_0x5a1658.area)),
      onSelect: () => _0x296757(_0x5a1658.area),
    }));
  return (0, m.jsxs)("div", {
    draggable: true,
    className:
      "univer-group univer-flex univer-h-8 univer-items-center univer-gap-2 univer-rounded-md univer-px-1 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
    onDragStart: _0x1b61f7,
    children: [
      (0, m.jsx)(s.GripVerticalIcon, { className: "univer-text-gray-400" }),
      (0, m.jsx)(d.Checkbox, {
        checked: _0x16dea2,
        onChange: (_0x506d11) => _0x8338fb(!!_0x506d11),
      }),
      (0, m.jsx)(it, { field: _0x311daf }),
      (0, m.jsx)("span", {
        className:
          "univer-min-w-0 univer-flex-1 univer-truncate univer-text-xs",
        children: _0x311daf.name,
      }),
      (0, m.jsx)(d.DropdownMenu, {
        align: "end",
        items: _0x5030bb,
        children: (0, m.jsx)("span", {
          className:
            "univer-flex\x20univer-size-5\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center",
          children: (0, m.jsx)(s.MoreDownIcon, {}),
        }),
      }),
    ],
  });
}
function it({ field: _0x27596d }) {
  return ft(_0x27596d)
    ? (0, m.jsx)(s.NumberIcon, { className: "univer-text-gray-400" })
    : _0x27596d.type === a.BaseFieldType["Date"] ||
        _0x27596d.type === a.BaseFieldType["CreatedAt"] ||
        _0x27596d.type === a.BaseFieldType["UpdatedAt"]
      ? (0, m.jsx)(s.CalendarIcon, { className: "univer-text-gray-400" })
      : (0, m.jsx)(s.TextIcon, { className: "univer-text-gray-400" });
}
function at(_0x47abe4) {
  let {
      area: _0x2180d0,
      dropTarget: _0x3a69eb,
      fields: _0x245f5d,
      label: _0x22d6c0,
      snapshot: _0x341eee,
    } = _0x47abe4,
    _0x3d311a = (0, f.useDependency)(a.LocaleService);
  return (0, m.jsxs)("section", {
    className: (0, d.clsx)(
      "univer-min-h-32 univer-rounded-lg univer-border univer-bg-gray-50 univer-p-2 dark:!univer-bg-gray-800",
      d.borderClassName,
    ),
    onDragOver: (_0x59d7a8) => {
      (_0x59d7a8.preventDefault(), _0x47abe4.onDragOver(_0x245f5d.length));
    },
    onDrop: (_0x3bf896) => {
      (_0x3bf896.preventDefault(),
        _0x47abe4.onDrop(
          (_0x3a69eb == null ? undefined : _0x3a69eb.area) === _0x2180d0
            ? _0x3a69eb.index
            : _0x245f5d.length,
        ));
    },
    children: [
      (0, m.jsx)("div", {
        className:
          "univer-mb-2 univer-text-xs univer-font-medium univer-text-gray-600 dark:!univer-text-gray-300",
        children: _0x22d6c0,
      }),
      (0, m.jsxs)("div", {
        className: "univer-flex univer-flex-col",
        children: [
          _0x245f5d.map((_0x5d1740, _0x2679de) => {
            let _0x38e853 =
              _0x341eee.dimension[_0x5d1740] ?? _0x341eee.measure[_0x5d1740];
            return _0x38e853
              ? (0, m.jsxs)(
                  "div",
                  {
                    onDragOver: (_0x597a1a) => {
                      (_0x597a1a.preventDefault(), _0x597a1a.stopPropagation());
                      let _0x2772b0 =
                        _0x597a1a.currentTarget["getBoundingClientRect"]();
                      _0x47abe4.onDragOver(
                        _0x2679de +
                          +(
                            _0x597a1a.clientY >
                            _0x2772b0.top + _0x2772b0.height / 2
                          ),
                      );
                    },
                    onDrop: (_0x406345) => {
                      (_0x406345.preventDefault(),
                        _0x406345.stopPropagation(),
                        _0x47abe4.onDrop(
                          (_0x3a69eb == null ? undefined : _0x3a69eb.area) ===
                            _0x2180d0
                            ? _0x3a69eb.index
                            : _0x2679de,
                        ));
                    },
                    children: [
                      (_0x3a69eb == null ? undefined : _0x3a69eb.area) ===
                        _0x2180d0 &&
                        _0x3a69eb.index === _0x2679de &&
                        (0, m.jsx)("div", {
                          className:
                            "univer-h-0.5\x20univer-rounded\x20univer-bg-primary-600",
                        }),
                      (0, m.jsx)(ot, {
                        area: _0x2180d0,
                        field: _0x38e853,
                        onDragEnd: _0x47abe4.onDragEnd,
                        onDragStart: () => _0x47abe4.onDragStart(_0x5d1740),
                        onFilter: () => _0x47abe4.onFilter(_0x5d1740),
                        onRemove: () => _0x47abe4.onRemove(_0x5d1740),
                        onSettings: () => _0x47abe4.onSettings(_0x5d1740),
                      }),
                    ],
                  },
                  _0x5d1740,
                )
              : null;
          }),
          (_0x3a69eb == null ? undefined : _0x3a69eb.area) === _0x2180d0 &&
            _0x3a69eb.index === _0x245f5d.length &&
            (0, m.jsx)("div", {
              className:
                "univer-h-0.5\x20univer-rounded\x20univer-bg-primary-600",
            }),
          _0x245f5d.length === 0 &&
            (0, m.jsx)("div", {
              className:
                "univer-grid univer-h-20 univer-place-items-center univer-text-center univer-text-xs univer-text-gray-400",
              children: _0x3d311a.t("bases-dashboard-ui.pivot.dropFieldsHere"),
            }),
        ],
      }),
    ],
  });
}
function ot(_0x260a98) {
  let _0x131841 = (0, f.useDependency)(a.LocaleService),
    _0x53990e = _0x260a98.area === g.PivotTableFiledAreaEnum["Value"],
    _0x5d683d = [
      {
        type: "item",
        children: _0x131841.t("bases-dashboard-ui.pivot.removeField"),
        onSelect: _0x260a98.onRemove,
      },
      {
        type: "item",
        children: _0x131841.t(
          _0x53990e
            ? "bases-dashboard-ui.pivot.fieldSettings"
            : "bases-dashboard-ui.pivot.filterField",
        ),
        onSelect: _0x53990e ? _0x260a98.onSettings : _0x260a98.onFilter,
      },
    ];
  return (0, m.jsxs)("div", {
    draggable: true,
    className:
      "univer-my-1 univer-flex univer-h-8 univer-items-center univer-gap-2 univer-rounded-md univer-border univer-border-gray-200 univer-bg-gray-0 univer-px-2 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onDragEnd: _0x260a98.onDragEnd,
    onDragStart: _0x260a98.onDragStart,
    children: [
      (0, m.jsx)(s.GripVerticalIcon, { className: "univer-text-gray-400" }),
      (0, m.jsx)(d.Tooltip, {
        title: _0x260a98.field["displayName"],
        children: (0, m.jsx)("span", {
          className:
            "univer-min-w-0 univer-flex-1 univer-truncate univer-text-xs",
          children: _0x260a98.field["displayName"],
        }),
      }),
      (0, m.jsx)(d.DropdownMenu, {
        align: "end",
        items: _0x5d683d,
        children: (0, m.jsx)("span", {
          className:
            "univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center",
          children: (0, m.jsx)(s.MoreDownIcon, {}),
        }),
      }),
    ],
  });
}
function st(_0x22ae56) {
  var _0x2d5189, _0x1a7d8d;
  let _0x59b57b = (0, f.useDependency)(a.LocaleService),
    {
      format: _0xe86a8a,
      items: _0x262ce1,
      itemTypes: _0x76c735,
    } = (0, p.useMemo)(() => {
      let _0x21fa98 = (0, e.createBasePivotTable)(
        _0x22ae56.table,
        _0x22ae56.snapshot,
      );
      try {
        let _0x16f9fd = _0x21fa98.getDataFieldByTableId(_0x22ae56.fieldId);
        return {
          format: _0x16f9fd == null ? undefined : _0x16f9fd.format,
          items: [...((_0x16f9fd == null ? undefined : _0x16f9fd.items) ?? [])],
          itemTypes: [
            ...((_0x16f9fd == null ? undefined : _0x16f9fd.itemTypes) ?? []),
          ],
        };
      } finally {
        _0x21fa98.dispose();
      }
    }, [_0x22ae56.fieldId, _0x22ae56.snapshot, _0x22ae56.table]),
    _0x339b30 =
      (_0x2d5189 = _0x22ae56.snapshot["dimension"][_0x22ae56.fieldId]) == null
        ? undefined
        : _0x2d5189.filterInfo,
    [_0xfbf1d8, _0x29bd6b] = (0, p.useState)(
      (_0x339b30 == null ? undefined : _0x339b30.type) ===
        g.PivotFilterTypeEnum["ManualFilter"]
        ? _0x339b30.list
        : _0x262ce1,
    ),
    [_0x221f34, _0x19aed2] = (0, p.useState)(
      (_0x1a7d8d = _0x22ae56.snapshot["dimension"][_0x22ae56.fieldId]) ==
        null || (_0x1a7d8d = _0x1a7d8d.sortInfo) == null
        ? undefined
        : _0x1a7d8d.type,
    ),
    _0x201c3f = _0xfbf1d8.length === _0x262ce1.length;
  return (0, m.jsxs)("section", {
    className: (0, d.clsx)(
      "univer-rounded-lg univer-border univer-bg-gray-0 univer-p-3 dark:!univer-bg-gray-900",
      d.borderClassName,
    ),
    children: [
      (0, m.jsx)("div", {
        className: "univer-mb-3\x20univer-text-sm\x20univer-font-medium",
        children: _0x59b57b.t("bases-dashboard-ui.pivot.filterField"),
      }),
      (0, m.jsxs)("div", {
        className: "univer-flex",
        children: [
          (0, m.jsxs)(d.Button, {
            className: "univer-flex-1",
            variant:
              _0x221f34 === g.PivotDataFieldSortOperatorEnum["ascending"]
                ? "primary"
                : "default",
            onClick: () =>
              _0x19aed2(g.PivotDataFieldSortOperatorEnum["ascending"]),
            children: [
              (0, m.jsx)(s.AscendingIcon, {}),
              _0x59b57b.t("bases-dashboard-ui.pivot.ascending"),
            ],
          }),
          (0, m.jsxs)(d.Button, {
            className: "univer-flex-1",
            variant:
              _0x221f34 === g.PivotDataFieldSortOperatorEnum["descending"]
                ? "primary"
                : "default",
            onClick: () =>
              _0x19aed2(g.PivotDataFieldSortOperatorEnum["descending"]),
            children: [
              (0, m.jsx)(s.DescendingIcon, {}),
              _0x59b57b.t("bases-dashboard-ui.pivot.descending"),
            ],
          }),
        ],
      }),
      (0, m.jsxs)("div", {
        className: "univer-my-3 univer-max-h-64 univer-overflow-y-auto",
        children: [
          (0, m.jsxs)("label", {
            className:
              "univer-flex univer-h-7 univer-items-center univer-gap-2 univer-text-sm",
            children: [
              (0, m.jsx)(d.Checkbox, {
                checked: _0x201c3f,
                indeterminate: _0xfbf1d8.length > 0 && !_0x201c3f,
                onChange: () => _0x29bd6b(_0x201c3f ? [] : _0x262ce1),
              }),
              _0x59b57b.t("bases-dashboard-ui.pivot.selectAll"),
            ],
          }),
          _0x262ce1.map((_0x3fdde1, _0x30499a) =>
            (0, m.jsxs)(
              "label",
              {
                className:
                  "univer-flex univer-h-7 univer-items-center univer-gap-2 univer-text-sm",
                children: [
                  (0, m.jsx)(d.Checkbox, {
                    checked: _0xfbf1d8.includes(_0x3fdde1),
                    onChange: () =>
                      _0x29bd6b((_0x3ae793) =>
                        _0x3ae793.includes(_0x3fdde1)
                          ? _0x3ae793.filter(
                              (_0x128dd2) => _0x128dd2 !== _0x3fdde1,
                            )
                          : [..._0x3ae793, _0x3fdde1],
                      ),
                  }),
                  (0, m.jsx)("span", {
                    className: "univer-truncate",
                    children: dt(
                      _0x3fdde1,
                      _0x76c735[_0x30499a],
                      _0xe86a8a,
                      _0x59b57b.t("bases-dashboard-ui.pivot.blank"),
                    ),
                  }),
                ],
              },
              _0x3fdde1,
            ),
          ),
        ],
      }),
      (0, m.jsxs)("div", {
        className:
          "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-gap-2",
        children: [
          (0, m.jsx)(d.Button, {
            variant: "link",
            onClick: () => _0x22ae56.onCommit(_0x262ce1, _0x221f34),
            children: _0x59b57b.t("bases-dashboard-ui.pivot.clearFilter"),
          }),
          (0, m.jsxs)("div", {
            className: "univer-flex univer-gap-2",
            children: [
              (0, m.jsx)(d.Button, {
                onClick: _0x22ae56.onCancel,
                children: _0x59b57b.t("bases-dashboard-ui.pivot.cancel"),
              }),
              (0, m.jsx)(d.Button, {
                variant: "primary",
                disabled: _0xfbf1d8.length === 0,
                onClick: () => _0x22ae56.onCommit(_0xfbf1d8, _0x221f34),
                children: _0x59b57b.t("bases-dashboard-ui.pivot.confirm"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ct(_0x712ceb) {
  var _0x2ddc7a, _0x505569, _0x24499b;
  let _0x2c01a0 = (0, f.useDependency)(a.LocaleService),
    [_0xed48, _0x34215b] = (0, p.useState)(
      ((_0x2ddc7a = _0x712ceb.field) == null
        ? undefined
        : _0x2ddc7a.displayName) ?? "",
    ),
    [_0x20c3dd, _0x269e0e] = (0, p.useState)(
      ((_0x505569 = _0x712ceb.field) == null
        ? undefined
        : _0x505569.subtotal) ?? g.PivotSubtotalTypeEnum["sum"],
    ),
    [_0x45163d, _0x1849c2] = (0, p.useState)(
      ((_0x24499b = _0x712ceb.field) == null ? undefined : _0x24499b.format) ??
        "",
    );
  return _0x712ceb.field
    ? (0, m.jsxs)("section", {
        className: (0, d.clsx)(
          "univer-flex univer-flex-col univer-gap-3 univer-rounded-lg univer-border univer-bg-gray-0 univer-p-3 dark:!univer-bg-gray-900",
          d.borderClassName,
        ),
        children: [
          (0, m.jsx)("div", {
            className: "univer-text-sm univer-font-medium",
            children: _0x2c01a0.t("bases-dashboard-ui.pivot.fieldSettings"),
          }),
          (0, m.jsxs)("label", {
            className:
              "univer-flex\x20univer-flex-col\x20univer-gap-1\x20univer-text-xs",
            children: [
              _0x2c01a0.t("bases-dashboard-ui.pivot.displayName"),
              (0, m.jsx)(d.Input, { value: _0xed48, onChange: _0x34215b }),
            ],
          }),
          (0, m.jsxs)("label", {
            className:
              "univer-flex univer-flex-col univer-gap-1 univer-text-xs",
            children: [
              _0x2c01a0.t("bases-dashboard-ui.pivot.summarizeBy"),
              (0, m.jsx)(d.Select, {
                value: String(_0x20c3dd),
                options: tt.map((_0x3e4c24) => ({
                  value: String(_0x3e4c24.value),
                  label: _0x2c01a0.t(_0x3e4c24.localeKey),
                })),
                onChange: (_0x24f779) => {
                  let _0x1cb4ef = tt.find(
                    (_0x40fbbc) => String(_0x40fbbc.value) === _0x24f779,
                  );
                  _0x1cb4ef && _0x269e0e(_0x1cb4ef.value);
                },
              }),
            ],
          }),
          (0, m.jsxs)("label", {
            className:
              "univer-flex univer-flex-col univer-gap-1 univer-text-xs",
            children: [
              _0x2c01a0.t("bases-dashboard-ui.pivot.numberFormat"),
              (0, m.jsx)(d.Input, { value: _0x45163d, onChange: _0x1849c2 }),
            ],
          }),
          (0, m.jsxs)("div", {
            className: "univer-flex\x20univer-justify-end\x20univer-gap-2",
            children: [
              (0, m.jsx)(d.Button, {
                onClick: _0x712ceb.onCancel,
                children: _0x2c01a0.t("bases-dashboard-ui.pivot.cancel"),
              }),
              (0, m.jsx)(d.Button, {
                variant: "primary",
                disabled: !_0xed48.trim(),
                onClick: () =>
                  _0x712ceb.onCommit(_0xed48.trim(), _0x20c3dd, _0x45163d),
                children: _0x2c01a0.t("bases-dashboard-ui.pivot.confirm"),
              }),
            ],
          }),
        ],
      })
    : null;
}
function lt(_0xc0f5ba) {
  let { config: _0x5304a1, commit: _0x17e442 } = _0xc0f5ba,
    _0x1eb922 = (0, f.useDependency)(a.LocaleService),
    _0x459cce = _0x5304a1.pivot["options"],
    _0xabd097 = (_0x16a41f) =>
      _0x17e442((_0x42dc19) =>
        _0x42dc19.setOptions({ ..._0x42dc19.getOptions(), ..._0x16a41f }),
      );
  return (0, m.jsxs)("div", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-4",
    children: [
      (0, m.jsxs)("label", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
        children: [
          _0x1eb922.t("bases-dashboard-ui.pivot.layout"),
          (0, m.jsx)(d.Select, {
            className: "univer-w-36",
            value: String(_0x5304a1.pivot["layout"]),
            options: [
              {
                value: String(g.PivotLayoutTypeEnum["tabular"]),
                label: _0x1eb922.t("bases-dashboard-ui.pivot.layoutTabular"),
              },
              {
                value: String(g.PivotLayoutTypeEnum["compact"]),
                label: _0x1eb922.t("bases-dashboard-ui.pivot.layoutCompact"),
              },
              {
                value: String(g.PivotLayoutTypeEnum["outline"]),
                label: _0x1eb922.t("bases-dashboard-ui.pivot.layoutOutline"),
              },
            ],
            onChange: (_0x3d083d) => {
              let _0x42421f = [
                g.PivotLayoutTypeEnum["tabular"],
                g.PivotLayoutTypeEnum["compact"],
                g.PivotLayoutTypeEnum["outline"],
              ].find((_0x23f60e) => String(_0x23f60e) === _0x3d083d);
              _0x42421f !== undefined &&
                _0x17e442((_0x1590a6) => _0x1590a6.setLayout(_0x42421f));
            },
          }),
        ],
      }),
      [
        {
          key: "repeatRowLabels",
          label: "bases-dashboard-ui.pivot.repeatRowLabels",
          defaultValue: false,
        },
        {
          key: "repeatColLabels",
          label: "bases-dashboard-ui.pivot.repeatColumnLabels",
          defaultValue: false,
        },
        {
          key: "showRowSubtotal",
          label: "bases-dashboard-ui.pivot.showRowSubtotal",
          defaultValue: true,
        },
        {
          key: "showRowGrandTotal",
          label: "bases-dashboard-ui.pivot.showRowGrandTotal",
          defaultValue: true,
        },
        {
          key: "showColSubtotal",
          label: "bases-dashboard-ui.pivot.showColumnSubtotal",
          defaultValue: true,
        },
        {
          key: "showColGrandTotal",
          label: "bases-dashboard-ui.pivot.showColumnGrandTotal",
          defaultValue: true,
        },
      ].map((_0x150ac6) =>
        (0, m.jsxs)(
          "label",
          {
            className:
              "univer-flex univer-items-center univer-gap-2 univer-text-sm",
            children: [
              (0, m.jsx)(d.Checkbox, {
                checked: !!(_0x459cce[_0x150ac6.key] ?? _0x150ac6.defaultValue),
                disabled:
                  _0x150ac6.key === "repeatRowLabels" &&
                  _0x5304a1.pivot["layout"] ===
                    g.PivotLayoutTypeEnum["compact"],
                onChange: (_0x2b7761) =>
                  _0xabd097({ [_0x150ac6.key]: !!_0x2b7761 }),
              }),
              _0x1eb922.t(_0x150ac6.label),
            ],
          },
          _0x150ac6.key,
        ),
      ),
      _0x5304a1.pivot["layout"] === g.PivotLayoutTypeEnum["outline"] &&
        (0, m.jsxs)("label", {
          className:
            "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
          children: [
            _0x1eb922.t("bases-dashboard-ui.pivot.rowSubtotalPosition"),
            (0, m.jsx)(d.Select, {
              className: "univer-w-36",
              value: String(
                _0x459cce.rowSubtotalPosition ??
                  g.PivotSubtotalPositionEnum["top"],
              ),
              options: [
                {
                  value: String(g.PivotSubtotalPositionEnum["top"]),
                  label: _0x1eb922.t("bases-dashboard-ui.pivot.top"),
                },
                {
                  value: String(g.PivotSubtotalPositionEnum["bottom"]),
                  label: _0x1eb922.t("bases-dashboard-ui.pivot.bottom"),
                },
              ],
              onChange: (_0x125f46) => {
                let _0x5efa7c = [
                  g.PivotSubtotalPositionEnum["top"],
                  g.PivotSubtotalPositionEnum["bottom"],
                ].find((_0x1372bb) => String(_0x1372bb) === _0x125f46);
                _0x5efa7c !== undefined &&
                  _0xabd097({ rowSubtotalPosition: _0x5efa7c });
              },
            }),
          ],
        }),
      (0, m.jsxs)("label", {
        className:
          "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-gap-2\x20univer-text-sm",
        children: [
          _0x1eb922.t("bases-dashboard-ui.pivot.valuePosition"),
          (0, m.jsx)(d.Select, {
            className: "univer-w-36",
            value: String(
              _0x5304a1.pivot["valuePosition"] ===
                g.PivotTableValuePositionEnum["None"]
                ? g.PivotTableValuePositionEnum["Column"]
                : _0x5304a1.pivot["valuePosition"],
            ),
            options: [
              {
                value: String(g.PivotTableValuePositionEnum["Column"]),
                label: _0x1eb922.t("bases-dashboard-ui.pivot.columns"),
              },
              {
                value: String(g.PivotTableValuePositionEnum["Row"]),
                label: _0x1eb922.t("bases-dashboard-ui.pivot.rows"),
              },
            ],
            onChange: (_0x37d15e) => {
              let _0x30e2c8 = [
                g.PivotTableValuePositionEnum["Column"],
                g.PivotTableValuePositionEnum["Row"],
              ].find((_0x43fbe6) => String(_0x43fbe6) === _0x37d15e);
              _0x30e2c8 !== undefined &&
                _0x17e442((_0x657bfe) =>
                  _0x657bfe.updateValuePosition(
                    _0x30e2c8,
                    _0x657bfe.getValueIndex() < 0
                      ? 0
                      : _0x657bfe.getValueIndex(),
                  ),
                );
            },
          }),
        ],
      }),
      (0, m.jsxs)("label", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
        children: [
          _0x1eb922.t("bases-dashboard-ui.pivot.pageWrap"),
          (0, m.jsx)(d.InputNumber, {
            className: "univer-w-24",
            min: 1,
            max: 20,
            value: _0x459cce.pageWrap ?? 1,
            onChange: (_0x22e3ec) => {
              let _0x30b6d8 = Number(_0x22e3ec);
              Number.isFinite(_0x30b6d8) &&
                _0x30b6d8 >= 1 &&
                _0xabd097({ pageWrap: _0x30b6d8 });
            },
          }),
        ],
      }),
      (0, m.jsxs)("label", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
        children: [
          _0x1eb922.t("bases-dashboard-ui.pivot.pageDirection"),
          (0, m.jsx)(d.Select, {
            className: "univer-w-36",
            value: String(_0x459cce.pageOverThenDown ?? false),
            options: [
              {
                value: "false",
                label: _0x1eb922.t("bases-dashboard-ui.pivot.downThenAcross"),
              },
              {
                value: "true",
                label: _0x1eb922.t("bases-dashboard-ui.pivot.acrossThenDown"),
              },
            ],
            onChange: (_0x492a73) =>
              _0xabd097({ pageOverThenDown: _0x492a73 === "true" }),
          }),
        ],
      }),
    ],
  });
}
function ut(_0x10d149, _0x520de9, _0x5f53ae, _0x35f167) {
  let _0x4c9960 = _0x10d149
    .getTableFieldsByDataFieldId(_0x520de9)
    .find(
      (_0x539db3) =>
        _0x10d149.getFieldPositionInfoById(_0x539db3.getId()).area !==
        g.PivotTableFiledAreaEnum["Value"],
    );
  if (_0x5f53ae !== g.PivotTableFiledAreaEnum["Value"] && _0x4c9960) {
    _0x10d149.updateFieldPosition(_0x4c9960.getId(), _0x5f53ae, _0x35f167);
    return;
  }
  _0x10d149.addFieldWithSourceId(_0x520de9, _0x5f53ae, _0x35f167);
}
function dt(_0x1c72e0, _0x178240, _0x3b9f1b, _0x4e61b6) {
  return _0x178240 === g.PivotDataFieldDataTypeEnum["blank"]
    ? _0x4e61b6
    : _0x178240 === g.PivotDataFieldDataTypeEnum["date"] && _0x3b9f1b
      ? a.numfmt["format"](_0x3b9f1b, Number(_0x1c72e0))
      : _0x1c72e0;
}
function ft(_0x1f4ba6) {
  return (
    _0x1f4ba6.type === a.BaseFieldType["Number"] ||
    _0x1f4ba6.type === a.BaseFieldType["Currency"] ||
    _0x1f4ba6.type === a.BaseFieldType["Progress"] ||
    _0x1f4ba6.type === a.BaseFieldType["Rating"]
  );
}
function pt(_0x3261ff) {
  switch (_0x3261ff) {
    case g.PivotTableFiledAreaEnum["Row"]:
      return "bases-dashboard-ui.pivot.addToRow";
    case g.PivotTableFiledAreaEnum["Column"]:
      return "bases-dashboard-ui.pivot.addToColumn";
    case g.PivotTableFiledAreaEnum["Value"]:
      return "bases-dashboard-ui.pivot.addToValue";
    default:
      return "bases-dashboard-ui.pivot.addToFilter";
  }
}
function mt({
  config: _0x5300ac,
  onChange: _0x3368ad,
  runtime: _0x3f8de3,
  table: _0x228d93,
}) {
  let _0x23ace1 = (0, f.useDependency)(a.LocaleService),
    [_0xabf73, _0xe6c906] = (0, p.useState)("chart");
  return (0, m.jsxs)("aside", {
    className:
      "univer-flex univer-h-full univer-min-h-0 univer-w-96 univer-shrink-0 univer-flex-col univer-border-l univer-border-gray-200 univer-bg-gray-0 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    children: [
      (0, m.jsx)(n.ChartEditPanelTabs, {
        ariaLabel: _0x23ace1.t("bases-dashboard-ui.pivot.name"),
        className: "univer-mx-auto univer-mt-4 univer-shrink-0",
        items: [
          {
            label: _0x23ace1.t("bases-dashboard-ui.pivot.chartConfiguration"),
            panelId: "base-pivot-chart-configuration",
            value: "chart",
          },
          {
            label: _0x23ace1.t("bases-dashboard-ui.pivot.pivotConfiguration"),
            panelId: "base-pivot-table-configuration",
            value: "pivot",
          },
        ],
        value: _0xabf73,
        variant: "segmented",
        onChange: _0xe6c906,
      }),
      (0, m.jsx)("div", {
        className: "univer-min-h-0 univer-flex-1 univer-overflow-auto",
        children:
          _0xabf73 === "chart"
            ? _0x3f8de3 &&
              (0, m.jsx)(ae, {
                config: _0x5300ac,
                runtime: _0x3f8de3,
                tableName: _0x228d93.name,
                onChange: _0x3368ad,
              })
            : (0, m.jsx)(nt, {
                config: _0x5300ac,
                table: _0x228d93,
                onChange: _0x3368ad,
              }),
      }),
    ],
  });
}
function ht({ pivot: _0x48c1da, view: _0x34fb39 }) {
  let _0x3b9b6c = (0, f.useDependency)(a.LocaleService),
    _0x21a154 = (0, p.useMemo)(
      () =>
        gt(
          _0x34fb39,
          _0x48c1da,
          _0x3b9b6c.t("bases-dashboard-ui.pivot.grandTotal"),
        ),
      [_0x3b9b6c, _0x48c1da, _0x34fb39],
    );
  return (0, m.jsxs)("div", {
    className:
      "univer-h-full univer-overflow-auto univer-bg-gray-0 univer-p-2 dark:!univer-bg-gray-900",
    children: [
      _0x21a154.pageRows["length"] > 0 &&
        (0, m.jsx)("table", {
          className: "univer-mb-2 univer-border-collapse univer-text-sm",
          children: (0, m.jsx)("tbody", { children: _t(_0x21a154.pageRows) }),
        }),
      (0, m.jsxs)("table", {
        className:
          "univer-min-w-full\x20univer-border-collapse\x20univer-text-sm",
        children: [
          _0x21a154.headerRowCount > 0 &&
            (0, m.jsx)("thead", {
              className:
                "univer-sticky univer-top-0 univer-z-10 univer-bg-gray-50 dark:!univer-bg-gray-800",
              children: _t(
                _0x21a154.rows["slice"](0, _0x21a154.headerRowCount),
              ),
            }),
          (0, m.jsx)("tbody", {
            children: _t(_0x21a154.rows["slice"](_0x21a154.headerRowCount)),
          }),
        ],
      }),
    ],
  });
}
function gt(_0x19ac7e, _0x6f800f, _0x1abb97) {
  let _0x143b34 = _0x19ac7e.colView["rowCount"],
    _0x444afa = _0x19ac7e.rowView["colCount"],
    _0x4fb221 = _0x19ac7e.dataView["rowCount"],
    _0x2bb346 = _0x19ac7e.dataView["colCount"],
    _0x4b5e16 = Array.from(
      { length: _0x143b34 + _0x4fb221 },
      (_0x1e776d, _0x360892) =>
        Array.from(
          { length: _0x444afa + _0x2bb346 },
          (_0x50526e, _0x1225da) => {
            var _0x10ac22, _0x3bf861;
            if (_0x360892 < _0x143b34 && _0x1225da < _0x444afa)
              return Q(
                _0x19ac7e.cornerView,
                _0x360892,
                _0x1225da,
                undefined,
                _0x1abb97,
                true,
                false,
                "corner:" + _0x360892 + ":" + _0x1225da,
              );
            if (_0x360892 < _0x143b34) {
              var _0x575b9a;
              let _0x94a5f9 = _0x1225da - _0x444afa,
                _0x130866 =
                  (_0x575b9a = _0x19ac7e.colView["headerMap"][_0x360892]) ==
                  null
                    ? undefined
                    : _0x575b9a.tableFieldId;
              return Q(
                _0x19ac7e.colView,
                _0x360892,
                _0x94a5f9,
                _0x130866 ? _0x19ac7e.formatMap[_0x130866] : undefined,
                _0x1abb97,
                true,
                bt(_0x19ac7e.colView["info"][_0x94a5f9]),
                "column:" + _0x360892 + ":" + _0x94a5f9,
              );
            }
            if (_0x1225da < _0x444afa) {
              var _0x267dba;
              let _0x49feeb = _0x360892 - _0x143b34,
                _0x1af6e6 =
                  (_0x267dba = _0x19ac7e.rowView["headerMap"][_0x1225da]) ==
                  null
                    ? undefined
                    : _0x267dba.tableFieldId;
              return Q(
                _0x19ac7e.rowView,
                _0x49feeb,
                _0x1225da,
                _0x1af6e6 ? _0x19ac7e.formatMap[_0x1af6e6] : undefined,
                _0x1abb97,
                true,
                bt(_0x19ac7e.rowView["info"][_0x49feeb]),
                "row:" + _0x49feeb + ":" + _0x1225da,
              );
            }
            let _0x325daa = _0x360892 - _0x143b34,
              _0x5378a2 = _0x1225da - _0x444afa,
              _0x1eab11 = Math.max(
                ((_0x10ac22 = _0x19ac7e.rowView["info"][_0x325daa]) == null
                  ? undefined
                  : _0x10ac22.valueIndex) ?? -1,
                ((_0x3bf861 = _0x19ac7e.colView["info"][_0x5378a2]) == null
                  ? undefined
                  : _0x3bf861.valueIndex) ?? -1,
              ),
              _0x2b6170 = _0x6f800f.valueFields[_0x1eab11 < 0 ? 0 : _0x1eab11];
            return Q(
              _0x19ac7e.dataView,
              _0x325daa,
              _0x5378a2,
              _0x2b6170 ? _0x19ac7e.formatMap[_0x2b6170] : undefined,
              _0x1abb97,
              false,
              bt(_0x19ac7e.rowView["info"][_0x325daa]) ||
                bt(_0x19ac7e.colView["info"][_0x5378a2]),
              "data:" + _0x325daa + ":" + _0x5378a2,
            );
          },
        ),
    );
  return {
    headerColumnCount: _0x444afa,
    headerRowCount: _0x143b34,
    pageRows:
      _0x19ac7e.pageView["lastRow"] < 0 || _0x19ac7e.pageView["lastCol"] < 0
        ? []
        : Array.from(
            { length: _0x19ac7e.pageView["lastRow"] + 1 },
            (_0x248ab1, _0x41d9a3) =>
              Array.from(
                { length: _0x19ac7e.pageView["lastCol"] + 1 },
                (_0x536dd3, _0x467b3a) =>
                  Q(
                    _0x19ac7e.pageView,
                    _0x41d9a3,
                    _0x467b3a,
                    undefined,
                    _0x1abb97,
                    true,
                    false,
                    "page:" + _0x41d9a3 + ":" + _0x467b3a,
                  ),
              ),
          ),
    rows: _0x4b5e16,
  };
}
function _t(_0x1a90bd) {
  return _0x1a90bd.map((_0x13aa61) => {
    var _0x5a2aff;
    return (0, m.jsx)(
      "tr",
      {
        children: _0x13aa61.map((_0x2b104d) =>
          (0, m.jsx)(
            _0x2b104d.isHeader ? "th" : "td",
            {
              className:
                "\n univer-whitespace-nowrap univer-border univer-border-gray-200 univer-px-3 univer-py-2\n univer-text-left\n dark:!univer-border-gray-700\n " +
                (_0x2b104d.isTotal
                  ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20univer-bg-gray-50\x20univer-font-semibold\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dark:!univer-bg-gray-800\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                  : "") +
                "\n " +
                (_0x2b104d.isHeader ? "" : "univer-text-right") +
                "\n ",
              children: _0x2b104d.value,
            },
            _0x2b104d.key,
          ),
        ),
      },
      (_0x5a2aff = _0x13aa61[0]) == null ? undefined : _0x5a2aff.key,
    );
  });
}
function Q(
  _0x2a3386,
  _0x213285,
  _0xa335ad,
  _0x17af1e,
  _0x943f48,
  _0x530c7c,
  _0x46f14b,
  _0x1ccecc,
) {
  var _0x3a6b69;
  let _0x339805 =
      (_0x3a6b69 = _0x2a3386.data[_0x213285]) == null
        ? undefined
        : _0x3a6b69[_0xa335ad],
    _0x393e14 = _0x339805 == null ? undefined : _0x339805.s,
    _0x236238 =
      _0x46f14b ||
      _0x393e14 === g.PivotCellStyleTypeEnum["GrandTotal"] ||
      _0x393e14 === g.PivotCellStyleTypeEnum["MultipleGrandTotal"];
  return {
    isHeader: _0x530c7c,
    isTotal: _0x236238 || _0x393e14 === g.PivotCellStyleTypeEnum["Subtotal"],
    key: _0x1ccecc,
    style: _0x393e14,
    value:
      _0x236238 && yt(_0x339805 == null ? undefined : _0x339805.v)
        ? _0x943f48
        : vt(_0x339805, _0x17af1e),
  };
}
function vt(_0x3e7e37, _0x4fd42f) {
  let _0x1a583f = _0x3e7e37 == null ? undefined : _0x3e7e37.v;
  return (0, g.isPrefixValue)(_0x1a583f)
    ? String(_0x1a583f.value ?? _0x1a583f.prefix ?? "")
    : (0, g.isErrorValue)(_0x1a583f)
      ? "#" + _0x1a583f.errorType
      : _0x4fd42f && typeof _0x1a583f == "number"
        ? a.numfmt["format"](_0x4fd42f, _0x1a583f)
        : String(_0x1a583f ?? "");
}
function yt(_0x37f297) {
  return _0x37f297 === undefined || _0x37f297 === "";
}
function bt(_0xb0c10b) {
  return !!(
    (_0xb0c10b != null && _0xb0c10b.isBottomTotal) ||
    (_0xb0c10b != null && _0xb0c10b.isTopTotal) ||
    (_0xb0c10b != null && _0xb0c10b.isSubtotal) ||
    (_0xb0c10b == null ? undefined : _0xb0c10b.rowType) === "grandTotal"
  );
}
function xt({ tableId: _0x1c3600, unitId: _0x339cc6, viewId: _0x1cee0b }) {
  let _0x31ab5a = (0, f.useDependency)(a.ICommandService),
    _0x25b87a = (0, f.useDependency)(a.IUniverInstanceService),
    _0x3a4167 = (0, f.useDependency)(a.ILogService),
    _0x2ec13b = (0, f.useDependency)(a.LocaleService),
    _0x1db385 = (0, f.useDependency)(e.BaseChartRuntimeService),
    [_0x2af22a, _0x2d8c2f] = (0, p.useState)(null),
    [_0x392592, _0x273faa] = (0, p.useState)(null),
    _0x2a1e8e = (0, p.useRef)("base-pivot-chart-" + (0, a.generateRandomId)(8)),
    [_0x39b823, _0x43a36b] = (0, p.useState)(false),
    _0x56db04 = _0x25b87a.getUnit(
      _0x339cc6,
      a.UniverInstanceType["UNIVER_BASE"],
    ),
    _0x2eeed5 =
      _0x56db04 == null ? undefined : _0x56db04.getSnapshot().tables[_0x1c3600],
    _0x2db887 = _0x2eeed5 == null ? undefined : _0x2eeed5.views[_0x1cee0b],
    _0x2a6dcc = St(_0x2db887),
    _0x4f4824 = x(_0x339cc6, _0x1c3600, _0x1cee0b);
  if (
    ((0, p.useEffect)(() => {
      if (!_0x2a6dcc) return;
      let _0x1121cb = _0x2a1e8e.current;
      return (
        _0x1db385.acquireChartRuntime(_0x1121cb, {
          unitId: _0x339cc6,
          tableId: _0x1c3600,
          viewId: _0x1cee0b,
          filters: [],
        }),
        () => {
          _0x1db385.releaseChartRuntime(_0x339cc6, _0x1121cb);
        }
      );
    }, [_0x2a6dcc, _0x1db385, _0x1c3600, _0x339cc6, _0x1cee0b]),
    (0, p.useEffect)(() => {
      if (!St(_0x2db887)) return;
      let _0x1e1eaa = true,
        _0x1459a0 = {
          unitId: _0x339cc6,
          tableId: _0x1c3600,
          viewId: _0x1cee0b,
          filters: [_0x2db887.filter ?? null],
        };
      return (
        _0x1db385
          .refreshChartRuntime(_0x339cc6, _0x2a1e8e.current, _0x1459a0)
          .then((_0x54853d) => {
            !_0x1e1eaa ||
              !_0x54853d ||
              (_0x2d8c2f(_0x54853d),
              _0x273faa(
                _0x1db385.getChartRuntime(_0x339cc6, _0x2a1e8e.current) ?? null,
              ),
              _0x43a36b(false));
          })
          .catch((_0x43a8e2) => {
            (_0x3a4167.error(
              "[BasePivotView] Failed to calculate the pivot result.",
              _0x43a8e2,
            ),
              _0x1e1eaa && (_0x2d8c2f(null), _0x43a36b(true)));
          }),
        () => {
          _0x1e1eaa = false;
        }
      );
    }, [_0x3a4167, _0x1db385, _0x1c3600, _0x339cc6, _0x2db887, _0x1cee0b]),
    !_0x2eeed5 || !St(_0x2db887))
  )
    return null;
  let _0x19894d =
    _0x1db385.getChartRuntime(_0x339cc6, _0x2a1e8e.current) === _0x392592
      ? _0x392592
      : null;
  return (0, m.jsxs)("div", {
    className:
      "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-bg-gray-50 dark:!univer-bg-gray-950",
    children: [
      (0, m.jsx)("div", {
        className: "univer-min-h-0\x20univer-min-w-0\x20univer-flex-1",
        children: _0x2af22a
          ? (0, m.jsxs)("div", {
              className:
                "univer-grid univer-h-full univer-min-h-0 univer-gap-2 univer-p-2",
              style: {
                gridTemplateRows:
                  _0x2db887.config["displayMode"] === "chart-and-table"
                    ? "minmax(240px, 3fr) minmax(180px, 2fr)"
                    : "minmax(0, 1fr)",
              },
              children: [
                _0x2db887.config["displayMode"] !== "table" &&
                  _0x19894d &&
                  (0, m.jsx)("div", {
                    className:
                      "univer-relative\x20univer-min-h-0\x20univer-overflow-hidden\x20univer-rounded-lg\x20univer-border\x20univer-border-gray-200\x20dark:!univer-border-gray-700",
                    children: (0, m.jsx)(Be, {
                      isRowDirection: (0, e.resolveBasePivotChartRowDirection)(
                        _0x2db887.config["chart"].orient,
                      ),
                      runtime: _0x19894d,
                    }),
                  }),
                _0x2db887.config["displayMode"] !== "chart" &&
                  (0, m.jsx)("div", {
                    className:
                      "univer-min-h-0 univer-overflow-hidden univer-rounded-lg univer-border univer-border-gray-200 dark:!univer-border-gray-700",
                    children: (0, m.jsx)(ht, {
                      pivot: _0x2db887.config["pivot"],
                      view: _0x2af22a.view,
                    }),
                  }),
              ],
            })
          : (0, m.jsx)("div", {
              className:
                "univer-grid univer-h-full univer-place-items-center univer-text-sm univer-text-gray-500",
              children: _0x39b823
                ? _0x2ec13b.t("bases-dashboard-ui.pivot.calculationFailed")
                : _0x2ec13b.t("bases-dashboard-ui.pivot.calculating"),
            }),
      }),
      _0x4f4824 &&
        (0, m.jsx)(mt, {
          config: _0x2db887.config,
          runtime: _0x19894d,
          table: _0x2eeed5,
          onChange: (_0x18fe6a) => {
            _0x31ab5a
              .executeCommand(e.UpdateBasePivotViewCommand["id"], {
                unitId: _0x339cc6,
                tableId: _0x1c3600,
                viewId: _0x1cee0b,
                patch: _0x18fe6a,
              })
              .catch((_0x4e0639) =>
                _0x3a4167.error(
                  "[BasePivotView] Failed to update the pivot view.",
                  _0x4e0639,
                ),
              );
          },
        }),
    ],
  });
}
function St(_0x364154) {
  return (
    (_0x364154 == null ? undefined : _0x364154.type) ===
      a.BaseViewType["Pivot"] &&
    typeof _0x364154.config == "object" &&
    _0x364154.config !== null &&
    "pivot" in _0x364154.config &&
    "chart" in _0x364154.config &&
    "displayMode" in _0x364154.config
  );
}
let Ct = class extends a.Disposable {
  constructor(
    _0x4f1f8e,
    _0x1f3086,
    _0x28af04,
    _0x251822,
    _0x13d805,
    _0x974ee6,
  ) {
    (super(),
      this.disposeWithMe(
        _0x1f3086.register({
          type: a.BaseViewType["Pivot"],
          renderMode: "dom",
          icon: s.PivotTableIcon,
          component: xt,
          menu: {
            get label() {
              return _0x974ee6.t("bases-dashboard-ui.pivot.name");
            },
            get description() {
              return _0x974ee6.t("bases-dashboard-ui.pivot.description");
            },
            get defaultName() {
              return _0x974ee6.t("bases-dashboard-ui.pivot.defaultName");
            },
          },
        }),
      ),
      this.disposeWithMe(
        _0x4f1f8e.register(wt(_0x28af04, _0x251822, _0x13d805, _0x974ee6)),
      ));
  }
};
Ct = G(
  [
    W(0, t.IBaseDashboardUIExtensionRegistryService),
    W(1, t.IBaseViewUIRegistryService),
    W(2, (0, a.Inject)(e.BaseDashboardResourceService)),
    W(3, a.ICommandService),
    W(4, a.IPermissionService),
    W(5, (0, a.Inject)(a.LocaleService)),
  ],
  Ct,
);
function wt(_0x1cb868, _0x48344f, _0x611434, _0x5ed3b7) {
  return {
    change$: (0, c.merge)(_0x1cb868.change$, _0x611434.permissionPointUpdate$),
    component: Ge,
    get labels() {
      return {
        add: _0x5ed3b7.t("bases-dashboard-ui.dashboard.add"),
        configure: (_0x110c48) =>
          _0x5ed3b7.t("bases-dashboard-ui.dashboard.configure", _0x110c48),
        delete: _0x5ed3b7.t("bases-dashboard-ui.dashboard.delete"),
        new: _0x5ed3b7.t("bases-dashboard-ui.dashboard.new"),
        rename: _0x5ed3b7.t("bases-dashboard-ui.dashboard.rename"),
        search: _0x5ed3b7.t("bases-dashboard-ui.dashboard.search"),
        section: _0x5ed3b7.t("bases-dashboard-ui.dashboard.section"),
      };
    },
    getItems: (_0x54feb7) => {
      let _0x117ef4 = _0x1cb868.getResource(_0x54feb7);
      return _0x117ef4.dashboardOrder["flatMap"]((_0x14c189) => {
        let _0x4b0548 = _0x117ef4.dashboards[_0x14c189];
        return _0x4b0548
          ? [
              {
                id: _0x4b0548.id,
                name: _0x4b0548.name,
                readonly: !(0, e.canEditBaseDashboard)(
                  _0x611434,
                  _0x54feb7,
                  _0x4b0548.id,
                ),
              },
            ]
          : [];
      });
    },
    create: async (_0x4b7f79) => {
      let _0x6f27d6 = _0x1cb868.getResource(_0x4b7f79),
        _0x590209 = "dashboard-" + (0, a.generateRandomId)(8),
        _0xdbad66 = Tt(
          _0x6f27d6.dashboardOrder["flatMap"]((_0x194398) => {
            let _0x2d2191 = _0x6f27d6.dashboards[_0x194398];
            return _0x2d2191 ? [_0x2d2191.name] : [];
          }),
          (_0x30f352) =>
            _0x5ed3b7.t(
              "bases-dashboard-ui.dashboard.defaultName",
              String(_0x30f352),
            ),
        );
      return (await _0x48344f.executeCommand(
        e.CreateBaseDashboardCommand["id"],
        {
          unitId: _0x4b7f79,
          dashboard: {
            id: _0x590209,
            name: _0xdbad66,
            widgetOrder: [],
            widgets: {},
          },
        },
      ))
        ? _0x590209
        : null;
    },
    rename: async (_0x39cab6, _0x397647, _0x662406) => {
      let _0x1a67aa = _0x1cb868.getDashboard(_0x39cab6, _0x397647);
      return !!(
        _0x1a67aa &&
        (await _0x48344f.executeCommand(e.UpdateBaseDashboardCommand["id"], {
          unitId: _0x39cab6,
          dashboard: { ..._0x1a67aa, name: _0x662406 },
        }))
      );
    },
    remove: (_0x479a54, _0xb8bdeb) =>
      _0x48344f.executeCommand(e.DeleteBaseDashboardCommand["id"], {
        unitId: _0x479a54,
        dashboardId: _0xb8bdeb,
      }),
  };
}
function Tt(_0x338a23, _0xe65b8c) {
  let _0x150247 = new Set(_0x338a23),
    _0x37d3f2 = _0x150247.size + 1,
    _0x366cf3 = _0xe65b8c(_0x37d3f2);
  for (; _0x150247.has(_0x366cf3);)
    ((_0x37d3f2 += 1), (_0x366cf3 = _0xe65b8c(_0x37d3f2)));
  return _0x366cf3;
}
let $ = class extends a.Plugin {
  constructor(_0x1530ad = y, _0x303d0b, _0x1f9189) {
    (super(),
      (this._config = _0x1530ad),
      (this._injector = _0x303d0b),
      (this._configService = _0x1f9189));
    let { ..._0x122c8d } = (0, a.merge)({}, y, this._config);
    this._configService["setConfig"]("bases-dashboard-ui.config", _0x122c8d);
  }
  onStarting() {
    (this._injector["add"]([Z]),
      this._injector["add"]([K]),
      this._injector["add"]([Ct]));
  }
  onReady() {
    (0, a.touchDependencies)(this._injector, [[Z], [K], [Ct]]);
  }
};
(U($, "type", a.UniverInstanceType["UNIVER_BASE"]),
  U($, "pluginName", "BASE_DASHBOARD_UI_PLUGIN"),
  U($, "packageName", _),
  U($, "version", v),
  ($ = G(
    [
      (0, a.DependentOn)(
        r.UniverLicensePlugin,
        e.UniverBaseDashboardPlugin,
        t.UniverBasesUIPlugin,
        n.UniverChartUIPlugin,
        i.UniverShapeEditorPlugin,
        o.UniverDocsUIPlugin,
      ),
      W(1, (0, a.Inject)(a.Injector)),
      W(2, a.IConfigService),
    ],
    $,
  )),
  Object.defineProperty(exports, "UniverBaseDashboardUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
