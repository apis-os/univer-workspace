Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-chart"),
  t = require("@univerjs-pro/engine-chart"),
  n = require("@univerjs-pro/engine-chart/facade"),
  r = require("@univerjs/core"),
  i = require("@univerjs/docs"),
  a = require("@univerjs/docs/facade"),
  o = require("rxjs"),
  s = require("@univerjs/core/facade");
function c(_0x578d3d) {
  "@babel/helpers - typeof";
  return (
    (c =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x24f359) {
            return typeof _0x24f359;
          }
        : function (_0x5ed09b) {
            return _0x5ed09b &&
              typeof Symbol == "function" &&
              _0x5ed09b.constructor === Symbol &&
              _0x5ed09b !== Symbol.prototype
              ? "symbol"
              : typeof _0x5ed09b;
          }),
    c(_0x578d3d)
  );
}
function l(_0x4faac6, _0x54ac27) {
  if (c(_0x4faac6) != "object" || !_0x4faac6) return _0x4faac6;
  var _0x55daf3 = _0x4faac6[Symbol.toPrimitive];
  if (_0x55daf3 !== undefined) {
    var _0x56c897 = _0x55daf3.call(_0x4faac6, _0x54ac27 || "default");
    if (c(_0x56c897) != "object") return _0x56c897;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x54ac27 === "string" ? String : Number)(_0x4faac6);
}
function u(_0x14489d) {
  var _0x19c4dd = l(_0x14489d, "string");
  return c(_0x19c4dd) == "symbol" ? _0x19c4dd : _0x19c4dd + "";
}
function d(_0x4d6c4f, _0x224ede, _0x4610f8) {
  return (
    (_0x224ede = u(_0x224ede)) in _0x4d6c4f
      ? Object.defineProperty(_0x4d6c4f, _0x224ede, {
          value: _0x4610f8,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4d6c4f[_0x224ede] = _0x4610f8),
    _0x4d6c4f
  );
}
var f = class extends n.FChart {
    constructor(_0x5c9acb, _0x42adf3, _0x504a46, _0x3f8110) {
      (super(
        _0x504a46,
        () =>
          new e["DocumentChartConfigAdapter"]({
            unitId: _0x5c9acb.getUnitId(),
            chartId: _0x504a46,
            drawingId: _0x42adf3,
            documentDataModel: _0x5c9acb,
            injector: _0x3f8110,
          }),
        (_0x296e9a, _0x125e92, _0x4bbcdc) =>
          (0, n.createChartBuilder)({
            info: _0x296e9a,
            description: _0x125e92,
            type: _0x4bbcdc,
            normalizeSource: (_0xc63072) =>
              Array.isArray(_0xc63072)
                ? { values: r.Tools["deepClone"](_0xc63072) }
                : {
                    source:
                      t.ResourceRefChartDataSourceAdapter["toReference"](
                        _0xc63072,
                      ),
                  },
            extension: ({
              getInfo: _0x110414,
              setInfo: _0x4c9a10,
              setAbsolutePosition: _0x4a9931,
              setSize: _0x520ee5,
            }) => ({
              setPosition(_0xda4875) {
                return (_0x4c9a10("anchor", _0xda4875), this);
              },
              setLayout(_0x5f36ac) {
                _0x5f36ac.position &&
                  _0x4a9931(_0x5f36ac.position["x"], _0x5f36ac.position["y"]);
                let _0x4dc588 = _0x110414("size"),
                  _0x24f41a =
                    _0x5f36ac.width ??
                    (_0x4dc588 == null ? undefined : _0x4dc588.width),
                  _0x49cceb =
                    _0x5f36ac.height ??
                    (_0x4dc588 == null ? undefined : _0x4dc588.height);
                return (
                  _0x24f41a !== undefined &&
                    _0x49cceb !== undefined &&
                    _0x520ee5(_0x24f41a, _0x49cceb),
                  _0x4c9a10("layoutType", _0x5f36ac.layoutType),
                  this
                );
              },
              setInline() {
                return (
                  _0x4c9a10(
                    "layoutType",
                    r.PositionedObjectLayoutType["INLINE"],
                  ),
                  this
                );
              },
              setFloating() {
                return (
                  _0x4c9a10(
                    "layoutType",
                    r.PositionedObjectLayoutType["WRAP_SQUARE"],
                  ),
                  this
                );
              },
            }),
          }),
        _0x3f8110,
      ),
        (this._documentDataModel = _0x5c9acb),
        (this._drawingId = _0x42adf3),
        (this._chartId = _0x504a46),
        d(this, "unitId", undefined),
        (this.unitId = _0x5c9acb.getUnitId()));
    }
    getDrawingId() {
      return this._drawingId;
    }
  },
  p = class extends a.FDocument {
    newChart(_0x53067b) {
      return (0, n.createChartBuilder)({
        type: _0x53067b,
        injector: this._injector,
        commitError:
          "Insert\x20the\x20document\x20chart\x20before\x20updating\x20it.",
        normalizeSource: (_0x257273) =>
          Array.isArray(_0x257273)
            ? { values: r.Tools["deepClone"](_0x257273) }
            : {
                source:
                  t.ResourceRefChartDataSourceAdapter["toReference"](_0x257273),
              },
        createInfo: () => ({ anchor: undefined, layoutType: undefined }),
        extension: ({
          getInfo: _0x54dfef,
          setInfo: _0x4fc247,
          setAbsolutePosition: _0x9ec44b,
          setSize: _0x2c9846,
        }) => ({
          setPosition(_0x6e72f8) {
            return (_0x4fc247("anchor", _0x6e72f8), this);
          },
          setLayout(_0x20c5fe) {
            _0x20c5fe.position &&
              _0x9ec44b(_0x20c5fe.position["x"], _0x20c5fe.position["y"]);
            let _0x881528 = _0x54dfef("size"),
              _0x2f099a =
                _0x20c5fe.width ??
                (_0x881528 == null ? undefined : _0x881528.width),
              _0x47da92 =
                _0x20c5fe.height ??
                (_0x881528 == null ? undefined : _0x881528.height);
            return (
              _0x2f099a !== undefined &&
                _0x47da92 !== undefined &&
                _0x2c9846(_0x2f099a, _0x47da92),
              _0x4fc247("layoutType", _0x20c5fe.layoutType),
              this
            );
          },
          setInline() {
            return (
              _0x4fc247("layoutType", r.PositionedObjectLayoutType["INLINE"]),
              this
            );
          },
          setFloating() {
            return (
              _0x4fc247(
                "layoutType",
                r.PositionedObjectLayoutType["WRAP_SQUARE"],
              ),
              this
            );
          },
        }),
      });
    }
    async insertChart(_0x5bf69b) {
      let _0x35cc39 = null;
      try {
        _0x35cc39 = _0x5bf69b.dataSource["values"]
          ? null
          : await this._resolveReferencedValues(_0x5bf69b.dataSource["source"]);
        let _0x2fde8a = m(
            _0x5bf69b,
            _0x5bf69b.dataSource["values"] ?? _0x35cc39.values,
          ),
          _0x596a7a = (0, e.normalizeDocumentChartValues)(_0x2fde8a.values);
        if (_0x596a7a.length === 0)
          throw Error("Document chart values are required.");
        let _0xa6f7e0 = this.getDocumentDataModel(),
          _0x4d33cf = g(_0xa6f7e0, this._injector, _0x2fde8a.insert),
          _0xa2b30a = this._injector["get"](
            r.ICommandService,
          ).syncExecuteCommand(e.InsertDocChartCommand["id"], {
            unitId: _0xa6f7e0.getUnitId(),
            chart: {
              chartType: _0x2fde8a.chartType ?? t.ChartTypeBits["Column"],
              style: _0x2fde8a.style,
              context: _0x2fde8a.context,
              dataAggregation: _0x2fde8a.dataAggregation,
            },
            dataSource: { ...(_0x2fde8a.dataSource ?? { values: _0x596a7a }) },
            textRange: _0x4d33cf.textRange,
            drawing: { layoutType: _0x4d33cf.layout["layoutType"] },
            width: _0x4d33cf.layout["width"],
            height: _0x4d33cf.layout["height"],
            position: _0x4d33cf.layout["position"],
          });
        if (!_0xa2b30a) throw Error("Failed to insert document chart.");
        let _0x362c2c = this.getChart(_0xa2b30a.chartId);
        if (!_0x362c2c)
          throw Error(
            'Inserted document chart "' +
              _0xa2b30a.chartId +
              '" was not found.',
          );
        return _0x362c2c;
      } finally {
        _0x35cc39 == null || _0x35cc39.handle["dispose"]();
      }
    }
    getChart(_0x1089f7) {
      let _0x15b749 = this.getDocumentDataModel(),
        _0x344726 = S(_0x15b749, _0x1089f7);
      return !_0x344726 || !this._getChartResource(_0x344726.chartId)
        ? null
        : this._injector["createInstance"](
            f,
            _0x15b749,
            _0x344726.drawingId,
            _0x344726.chartId,
            this._injector,
          );
    }
    getCharts() {
      let _0x348c0d = this.getDocumentDataModel(),
        _0x33a245 = _0x348c0d.getDrawings() ?? {};
      return (_0x348c0d.getDrawingsOrder() ?? Object.keys(_0x33a245))
        .map((_0x421b8e) => _0x33a245[_0x421b8e])
        .filter(C)
        .filter(
          (_0x5daaea) => this._getChartResource(_0x5daaea.chartId) != null,
        )
        .map((_0x27d8fd) =>
          this._injector["createInstance"](
            f,
            _0x348c0d,
            _0x27d8fd.drawingId,
            _0x27d8fd.chartId,
            this._injector,
          ),
        );
    }
    _getChartResource(_0x209872) {
      return this._injector["get"](t.ChartResourceRepository).getChart(
        this.getDocumentDataModel().getUnitId(),
        _0x209872,
      );
    }
    async _resolveReferencedValues(_0x41adb4) {
      let _0x428a15 = this._injector["get"](
        t.IChartDataSourceRuntimeService,
      ).acquire(_0x41adb4);
      try {
        let _0x2df500 = await (0, o.firstValueFrom)(
          _0x428a15.state$["pipe"](
            (0, o.filter)(
              ({ status: _0x371861 }) =>
                _0x371861 !== t.ChartDataSourceRuntimeStatus["LOADING"],
            ),
          ),
        );
        if (
          _0x2df500.status !== t.ChartDataSourceRuntimeStatus["READY"] ||
          !_0x2df500.values
        )
          throw _0x2df500.error instanceof Error
            ? _0x2df500.error
            : Error(_0x41adb4.kind);
        return {
          values: _0x2df500.values["map"]((_0xdefa28) => [..._0xdefa28]),
          handle: _0x428a15,
        };
      } catch (_0x50a593) {
        throw (_0x428a15.dispose(), _0x50a593);
      }
    }
  };
function m(_0x3b26c0, _0xed7350) {
  var _0x4039ad, _0x30ec23;
  return h(
    _0x3b26c0.config,
    {
      anchor: _0x3b26c0.anchor,
      layout: {
        width:
          (_0x4039ad = _0x3b26c0.size) == null ? undefined : _0x4039ad.width,
        height:
          (_0x30ec23 = _0x3b26c0.size) == null ? undefined : _0x30ec23.height,
        layoutType: _0x3b26c0.layoutType,
        position: _0x3b26c0.position,
      },
    },
    _0xed7350,
    _0x3b26c0.dataSource,
  );
}
function h(_0xa468dc, _0x5f2c82, _0x5dac41, _0x5b597d) {
  let _0x40fd40 = _0x5dac41,
    _0x57576a = (_0x40fd40[0] ?? []).slice(1).map((_0x30d3f3, _0x93a0c0) => {
      let _0x1c6ff3 = 1 + _0x93a0c0;
      return {
        index: _0x1c6ff3,
        name: String(_0x30d3f3 ?? ""),
        items: _0x40fd40
          .slice(1)
          .map((_0x5a51dc) => (0, t.toChartDataItem)(_0x5a51dc[_0x1c6ff3])),
      };
    }),
    _0xe2435a = (0, t.toChartModelConfig)(
      { ..._0xa468dc, series: r.Tools["deepClone"](_0xa468dc.series) },
      { series: _0x57576a },
    );
  return {
    values: _0x40fd40,
    dataSource: _0x5b597d,
    chartType: _0xe2435a.chartType,
    style: _0xe2435a.style,
    context: { chartContext: _0xe2435a.context },
    dataAggregation: _0xe2435a.dataAggregation,
    insert: { at: _0x5f2c82.anchor, layout: _0x5f2c82.layout },
  };
}
function g(_0x4e3986, _0x506ba1, _0x335db7) {
  var _0x133952, _0x1ff6a3, _0x45d62e, _0x4df3e5;
  let _0x3bbe5a = _0x335db7 == null ? undefined : _0x335db7.at;
  return {
    textRange: _0x3bbe5a ? v(_0x4e3986, _0x506ba1, _0x3bbe5a) : _(_0x506ba1),
    layout: x({
      width:
        _0x335db7 == null || (_0x133952 = _0x335db7.layout) == null
          ? undefined
          : _0x133952.width,
      height:
        _0x335db7 == null || (_0x1ff6a3 = _0x335db7.layout) == null
          ? undefined
          : _0x1ff6a3.height,
      layoutType:
        _0x335db7 == null || (_0x45d62e = _0x335db7.layout) == null
          ? undefined
          : _0x45d62e.layoutType,
      position:
        _0x335db7 == null || (_0x4df3e5 = _0x335db7.layout) == null
          ? undefined
          : _0x4df3e5.position,
    }),
  };
}
function _(_0x23900b) {
  let _0x37eec5 = _0x23900b
    .get(i.DocSelectionManagerService)
    .getActiveTextRange();
  return _0x37eec5 &&
    (_0x37eec5.segmentId == null || _0x37eec5.segmentId === "")
    ? (0, i.normalizeTextRange)(_0x37eec5)
    : y(0);
}
function v(_0x397300, _0x3b8361, _0x1c1dfc) {
  if (_0x1c1dfc.kind === e.DocChartInsertAnchorKind["Selection"]) {
    let _0x524108 = _0x3b8361
      .get(i.DocSelectionManagerService)
      .getActiveTextRange();
    if (!_0x524108)
      throw Error(
        "Cannot insert document chart at selection because there is no active text range.",
      );
    if (_0x524108.segmentId != null && _0x524108.segmentId !== "")
      throw Error(
        "Document chart insertion currently supports the body segment only.",
      );
    return (0, i.normalizeTextRange)(_0x524108);
  }
  if (_0x1c1dfc.kind === e.DocChartInsertAnchorKind["Paragraph"]) {
    var _0x3fcea9;
    let _0x237719 = _0x397300.getBody(),
      _0x2273d1 =
        _0x237719 == null || (_0x3fcea9 = _0x237719.paragraphs) == null
          ? undefined
          : _0x3fcea9[_0x1c1dfc.index];
    if (!_0x2273d1)
      throw Error(
        "Document paragraph at index " +
          _0x1c1dfc.index +
          "\x20was\x20not\x20found.",
      );
    let _0x484d6b = _0x237719
      ? (0, r.getParagraphContentStartOffset)(_0x237719, _0x2273d1)
      : 0;
    return y(
      _0x1c1dfc.where === e.DocChartParagraphPosition["Before"]
        ? _0x484d6b
        : _0x2273d1.startIndex,
    );
  }
  if (_0x1c1dfc.kind === e.DocChartInsertAnchorKind["TextRange"]) {
    let _0x137cbe = _0x1c1dfc.endOffset ?? _0x1c1dfc.startOffset;
    return (
      b(_0x1c1dfc.startOffset),
      b(_0x137cbe),
      {
        startOffset: _0x1c1dfc.startOffset,
        endOffset: _0x137cbe,
        collapsed: _0x1c1dfc.collapsed ?? _0x1c1dfc.startOffset === _0x137cbe,
        segmentId: "",
      }
    );
  }
  return (b(_0x1c1dfc.offset), y(_0x1c1dfc.offset));
}
function y(_0x21d651) {
  return (
    b(_0x21d651),
    {
      startOffset: _0x21d651,
      endOffset: _0x21d651,
      collapsed: true,
      segmentId: "",
    }
  );
}
function b(_0x50f60b) {
  if (!Number.isFinite(_0x50f60b) || _0x50f60b < 0)
    throw Error(
      'Document chart insertion offset must be a non-negative finite number, got "' +
        _0x50f60b +
        "\x22.",
    );
}
function x(_0x93bf2c) {
  if (
    ((0, e.assertValidOptionalDocChartSize)(_0x93bf2c.width),
    (0, e.assertValidOptionalDocChartSize)(_0x93bf2c.height),
    _0x93bf2c.position &&
      (!Number.isFinite(_0x93bf2c.position["x"]) ||
        !Number.isFinite(_0x93bf2c.position["y"])))
  )
    throw Error(
      "Document\x20chart\x20position\x20must\x20contain\x20finite\x20x\x20and\x20y\x20values.",
    );
  return _0x93bf2c;
}
function S(_0x202681, _0xa43abc) {
  let _0x140d1a = _0x202681.getDrawings() ?? {},
    _0x33e911 = _0x140d1a[_0xa43abc];
  return C(_0x33e911)
    ? _0x33e911
    : (Object.values(_0x140d1a)
        .map((_0x2477dc) => _0x2477dc)
        .find((_0x14d170) => C(_0x14d170) && _0x14d170.chartId === _0xa43abc) ??
        null);
}
function C(_0x2e957a) {
  return (
    (_0x2e957a == null ? undefined : _0x2e957a.drawingType) ===
      r.DrawingTypeEnum["DRAWING_CHART"] && typeof _0x2e957a.chartId == "string"
  );
}
a.FDocument["extend"](p);
var w = class extends s.FEnum {
  get DocsChartInsertAnchorKind() {
    return e.DocChartInsertAnchorKind;
  }
  get DocsChartLayoutType() {
    return r.PositionedObjectLayoutType;
  }
};
(s.FEnum["extend"](w), (exports.FDocumentChart = f));
