Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-chart"),
  t = require("@univerjs-pro/engine-chart/facade"),
  n = require("@univerjs-pro/slides"),
  r = require("@univerjs-pro/slides-chart"),
  i = require("@univerjs-pro/slides/facade"),
  a = require("@univerjs/core"),
  o = require("rxjs");
function s(_0x2be6d0) {
  "@babel/helpers - typeof";
  return (
    (s =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x55a516) {
            return typeof _0x55a516;
          }
        : function (_0x1cf866) {
            return _0x1cf866 &&
              typeof Symbol == "function" &&
              _0x1cf866.constructor === Symbol &&
              _0x1cf866 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1cf866;
          }),
    s(_0x2be6d0)
  );
}
function c(_0x4b3b60, _0x45c069) {
  if (s(_0x4b3b60) != "object" || !_0x4b3b60) return _0x4b3b60;
  var _0x21aaf8 = _0x4b3b60[Symbol.toPrimitive];
  if (_0x21aaf8 !== undefined) {
    var _0xbf4a60 = _0x21aaf8.call(_0x4b3b60, _0x45c069 || "default");
    if (s(_0xbf4a60) != "object") return _0xbf4a60;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x45c069 === "string" ? String : Number)(_0x4b3b60);
}
function l(_0x456876) {
  var _0x5b10f7 = c(_0x456876, "string");
  return s(_0x5b10f7) == "symbol" ? _0x5b10f7 : _0x5b10f7 + "";
}
function u(_0x2e8055, _0x48d342, _0x4bdb70) {
  return (
    (_0x48d342 = l(_0x48d342)) in _0x2e8055
      ? Object.defineProperty(_0x2e8055, _0x48d342, {
          value: _0x4bdb70,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2e8055[_0x48d342] = _0x4bdb70),
    _0x2e8055
  );
}
var d = class extends t.FChart {
    constructor(
      _0x157b58,
      _0x3bf440,
      _0x19a143,
      _0x471374,
      _0x52c5d1,
      _0x4c639a,
    ) {
      (super(
        _0x19a143,
        () =>
          new r["SlideChartConfigAdapter"]({
            unitId: _0x157b58,
            subUnitId: _0x3bf440,
            chartId: _0x19a143,
            elementId: _0x471374,
            slideModel: _0x52c5d1,
            injector: _0x4c639a,
          }),
        (_0x3fefe2, _0x545376, _0x188f48) =>
          (0, t.createChartBuilder)({
            info: _0x3fefe2,
            description: _0x545376,
            type: _0x188f48,
            normalizeSource: (_0x54b108) =>
              Array.isArray(_0x54b108)
                ? { values: a.Tools["deepClone"](_0x54b108) }
                : {
                    source:
                      e.ResourceRefChartDataSourceAdapter["toReference"](
                        _0x54b108,
                      ),
                  },
            extension: ({ setInfo: _0x15e328 }) => ({
              setPlaceholder(_0x2871a0) {
                return (_0x15e328("placeholder", _0x2871a0), this);
              },
              setStroke(_0x5d997e) {
                return (_0x15e328("stroke", _0x5d997e), this);
              },
              setZOrder(_0x22ad7d) {
                return (_0x15e328("zOrder", _0x22ad7d), this);
              },
            }),
          }),
        _0x4c639a,
      ),
        (this._unitId = _0x157b58),
        (this._subUnitId = _0x3bf440),
        (this._chartId = _0x19a143),
        (this._elementId = _0x471374),
        (this._slideModel = _0x52c5d1),
        u(this, "unitId", undefined),
        (this.unitId = _0x157b58));
    }
    getElementId() {
      return this._elementId;
    }
    getPlaceholder() {
      return this._getElement().placeholder;
    }
    setPlaceholder(_0x4b3510) {
      return (
        this._createSlideAdapter().commitHost({ placeholder: _0x4b3510 }),
        this
      );
    }
    getStroke() {
      return this._getElement().stroke;
    }
    setStroke(_0x40df2a) {
      return (
        this._createSlideAdapter().commitHost({ stroke: _0x40df2a }),
        this
      );
    }
    getChartData() {
      let _0x442cb3 = this._injector["get"](r.SlideChartResourceService),
        _0x284550 = _0x442cb3.getChart(this._unitId, this._chartId);
      if (!_0x284550) return null;
      let _0x1535e8 = _0x442cb3.getDataSource(
        this._unitId,
        _0x284550.dataSourceId,
      );
      return _0x1535e8 ? { chart: _0x284550, dataSource: _0x1535e8 } : null;
    }
    _getElement() {
      var _0x557c33;
      let _0x19d892 =
        (_0x557c33 =
          this._slideModel["getSnapshot"]().slides[this._subUnitId]) == null
          ? undefined
          : _0x557c33.elements[this._elementId];
      if (!_0x19d892)
        throw Error(
          "Slide\x20chart\x20element\x20not\x20found:\x20" + this._elementId,
        );
      return _0x19d892;
    }
    _createSlideAdapter() {
      return new r["SlideChartConfigAdapter"]({
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        chartId: this._chartId,
        elementId: this._elementId,
        slideModel: this._slideModel,
        injector: this._injector,
      });
    }
  },
  f = class extends i.FSlide {
    newChart(_0x29f8ee) {
      return (0, t.createChartBuilder)({
        type: _0x29f8ee,
        injector: this._injector,
        commitError: "Insert the Slide chart before updating it.",
        normalizeSource: (_0x33294d) =>
          Array.isArray(_0x33294d)
            ? { values: a.Tools["deepClone"](_0x33294d) }
            : {
                source:
                  e.ResourceRefChartDataSourceAdapter["toReference"](_0x33294d),
              },
        createInfo: () => ({}),
        extension: ({ setInfo: _0x249f18 }) => ({
          setPlaceholder(_0x251240) {
            return (_0x249f18("placeholder", _0x251240), this);
          },
          setStroke(_0xf93e36) {
            return (_0x249f18("stroke", _0xf93e36), this);
          },
          setZOrder(_0x1dc6ba) {
            return (_0x249f18("zOrder", _0x1dc6ba), this);
          },
        }),
      });
    }
    async insertChart(_0x363879) {
      let {
          config: _0x1c560f,
          dataSource: _0x5d9131,
          position: _0x3a4d27,
          size: _0x4b90e3,
          placeholder: _0x24781e,
          stroke: _0x2fa5f2,
          zOrder: _0x511440,
        } = _0x363879,
        _0x2359a4 = null;
      try {
        _0x2359a4 = _0x5d9131.values
          ? null
          : await this._resolveReferencedValues(_0x5d9131.source);
        let {
          chart: _0x1490a2,
          dataSource: _0x24bd74,
          element: _0x123aff,
          unitId: _0x55807d,
          subUnitId: _0x4d6084,
        } = p(this._slideModel["getUnitId"](), this.getId(), {
          ..._0x1c560f,
          data: _0x5d9131.values ?? _0x2359a4.values,
          dataSource: _0x5d9131,
          position: _0x3a4d27,
          size: _0x4b90e3,
          placeholder: _0x24781e,
          stroke: _0x2fa5f2,
        });
        if (
          !this._injector["get"](a.ICommandService).syncExecuteCommand(
            r.InsertSlideChartCommand["id"],
            {
              unitId: _0x55807d,
              subUnitId: _0x4d6084,
              chart: _0x1490a2,
              dataSource: _0x24bd74,
              element: _0x123aff,
              insertIndex: _0x511440,
            },
          )
        )
          throw Error("Failed\x20to\x20insert\x20Slide\x20chart.");
        return this.getChart(_0x1490a2.id);
      } finally {
        _0x2359a4 == null || _0x2359a4.handle["dispose"]();
      }
    }
    getChart(_0x59c5f9) {
      return (
        this.getCharts().find(
          (_0x4888e3) =>
            _0x4888e3.getId() === _0x59c5f9 ||
            _0x4888e3.getElementId() === _0x59c5f9,
        ) ?? null
      );
    }
    getCharts() {
      let _0x2787ef = this._slideModel["getUnitId"](),
        _0x4a1f8f = this.getId(),
        { elementOrder: _0x22e0f4, elements: _0x497c79 } = this.getData();
      return _0x22e0f4
        .map((_0x4ec86a) => _0x497c79[_0x4ec86a])
        .filter(
          (_0x5d6329) =>
            (_0x5d6329 == null ? undefined : _0x5d6329.type) ===
            n.PageElementTypeEnum["Chart"],
        )
        .map((_0x3c2e47) =>
          this._injector["createInstance"](
            d,
            _0x2787ef,
            _0x4a1f8f,
            _0x3c2e47.chartId,
            _0x3c2e47.id,
            this._slideModel,
            this._injector,
          ),
        );
    }
    async _resolveReferencedValues(_0x542b57) {
      let _0x39cc2b = this._injector["get"](
        e.IChartDataSourceRuntimeService,
      ).acquire(_0x542b57);
      try {
        let _0x292d57 = await (0, o.firstValueFrom)(
          _0x39cc2b.state$["pipe"](
            (0, o.filter)(
              ({ status: _0x2d27c6 }) =>
                _0x2d27c6 !== e.ChartDataSourceRuntimeStatus["LOADING"],
            ),
          ),
        );
        if (
          _0x292d57.status !== e.ChartDataSourceRuntimeStatus["READY"] ||
          !_0x292d57.values
        )
          throw _0x292d57.error instanceof Error
            ? _0x292d57.error
            : Error(_0x542b57.kind);
        return {
          values: _0x292d57.values["map"]((_0xbdf310) => [..._0xbdf310]),
          handle: _0x39cc2b,
        };
      } catch (_0x2b6cda) {
        throw (_0x39cc2b.dispose(), _0x2b6cda);
      }
    }
  };
i.FSlide["extend"](f);
function p(_0x4f5f96, _0x350206, _0x34d18f) {
  var _0x56b015, _0x46a954, _0x49ed6e, _0x355493, _0x5a23e8;
  let _0x25984d = Array.isArray(_0x34d18f.data)
    ? _0x34d18f.data
    : _0x34d18f.data["values"];
  if (_0x25984d.length === 0)
    throw Error("Chart data source values are required to insert a chart.");
  let [, ..._0x49fb24] = _0x25984d,
    _0x485bcc = (0, e.toChartModelConfig)(_0x34d18f, {
      series: (_0x25984d[0] ?? []).slice(1).map((_0x11bcfc, _0x566ae9) => {
        let _0x4e1851 = 1 + _0x566ae9;
        return {
          index: _0x4e1851,
          name: String(_0x11bcfc ?? ""),
          items: _0x49fb24.map((_0x37a995) =>
            (0, e.toChartDataItem)(_0x37a995[_0x4e1851]),
          ),
        };
      }),
    }),
    _0x333bf3 =
      _0x34d18f.id ?? (0, a.generateRandomId)(t.CHART_FACADE_RANDOM_ID_LENGTH),
    _0x3693b1 =
      _0x34d18f.dataSourceId ??
      (0, a.generateRandomId)(t.CHART_FACADE_RANDOM_ID_LENGTH),
    _0x5f57a0 =
      _0x34d18f.elementId ??
      (0, a.generateRandomId)(t.CHART_FACADE_RANDOM_ID_LENGTH);
  return {
    unitId: _0x4f5f96,
    subUnitId: _0x350206,
    chart: {
      id: _0x333bf3,
      dataSourceId: _0x3693b1,
      chartType: _0x485bcc.chartType,
      style: _0x485bcc.style,
      context: { chartContext: _0x485bcc.context },
      dataAggregation: _0x485bcc.dataAggregation,
    },
    dataSource:
      (_0x56b015 = _0x34d18f.dataSource) != null && _0x56b015.source
        ? { id: _0x3693b1, source: _0x34d18f.dataSource["source"] }
        : {
            id: _0x3693b1,
            values: _0x25984d,
            name: Array.isArray(_0x34d18f.data)
              ? undefined
              : _0x34d18f.data["name"],
          },
    element: {
      id: _0x5f57a0,
      type: n.PageElementTypeEnum["Chart"],
      chartId: _0x333bf3,
      transform: {
        left:
          ((_0x46a954 = _0x34d18f.position) == null
            ? undefined
            : _0x46a954.x) ?? r.DEFAULT_SLIDE_CHART_ELEMENT_LEFT,
        top:
          ((_0x49ed6e = _0x34d18f.position) == null
            ? undefined
            : _0x49ed6e.y) ?? r.DEFAULT_SLIDE_CHART_ELEMENT_TOP,
        width:
          ((_0x355493 = _0x34d18f.size) == null
            ? undefined
            : _0x355493.width) ?? r.DEFAULT_SLIDE_CHART_ELEMENT_WIDTH,
        height:
          ((_0x5a23e8 = _0x34d18f.size) == null
            ? undefined
            : _0x5a23e8.height) ?? r.DEFAULT_SLIDE_CHART_ELEMENT_HEIGHT,
      },
      placeholder: _0x34d18f.placeholder,
      stroke: _0x34d18f.stroke,
    },
  };
}
exports.FSlideChart = d;
