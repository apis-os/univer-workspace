import {
  ChartDataSourceRuntimeStatus as _0x5900f5,
  IChartDataSourceRuntimeService as _0x165e93,
  ResourceRefChartDataSourceAdapter as _0x1ee964,
  toChartDataItem as _0x4be144,
  toChartModelConfig as _0x38966e,
} from "@univerjs-pro/engine-chart";
import {
  CHART_FACADE_RANDOM_ID_LENGTH as _0x4e4eb2,
  FChart as _0x4f4a9f,
  createChartBuilder as _0x48c973,
} from "@univerjs-pro/engine-chart/facade";
import { PageElementTypeEnum as _0xa54b18 } from "@univerjs-pro/slides";
import {
  DEFAULT_SLIDE_CHART_ELEMENT_HEIGHT as _0x2decdd,
  DEFAULT_SLIDE_CHART_ELEMENT_LEFT as _0x1d80ec,
  DEFAULT_SLIDE_CHART_ELEMENT_TOP as _0x399c36,
  DEFAULT_SLIDE_CHART_ELEMENT_WIDTH as _0x5ec70d,
  InsertSlideChartCommand as _0x5df9e9,
  SlideChartConfigAdapter as _0x35f0c8,
  SlideChartResourceService as _0x16012c,
} from "@univerjs-pro/slides-chart";
import { FSlide as _0x520a32 } from "@univerjs-pro/slides/facade";
import {
  ICommandService as _0x56fd2f,
  Tools as _0x29dcb8,
  generateRandomId as _0x52f446,
} from "@univerjs/core";
import { filter as _0x4df9b0, firstValueFrom as _0x500a8f } from "rxjs";
function S(_0x468a07) {
  "@babel/helpers - typeof";
  return (
    (S =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1bfa23) {
            return typeof _0x1bfa23;
          }
        : function (_0x21bc4e) {
            return _0x21bc4e &&
              typeof Symbol == "function" &&
              _0x21bc4e.constructor === Symbol &&
              _0x21bc4e !== Symbol.prototype
              ? "symbol"
              : typeof _0x21bc4e;
          }),
    S(_0x468a07)
  );
}
function C(_0x407e58, _0x4b90da) {
  if (S(_0x407e58) != "object" || !_0x407e58) return _0x407e58;
  var _0x1d6ec5 = _0x407e58[Symbol.toPrimitive];
  if (_0x1d6ec5 !== undefined) {
    var _0x48866b = _0x1d6ec5.call(_0x407e58, _0x4b90da || "default");
    if (S(_0x48866b) != "object") return _0x48866b;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x4b90da === "string" ? String : Number)(_0x407e58);
}
function w(_0x22523f) {
  var _0x348d71 = C(_0x22523f, "string");
  return S(_0x348d71) == "symbol" ? _0x348d71 : _0x348d71 + "";
}
function T(_0x15d65b, _0x5482aa, _0x4522aa) {
  return (
    (_0x5482aa = w(_0x5482aa)) in _0x15d65b
      ? Object.defineProperty(_0x15d65b, _0x5482aa, {
          value: _0x4522aa,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x15d65b[_0x5482aa] = _0x4522aa),
    _0x15d65b
  );
}
var E = class extends _0x4f4a9f {
    constructor(
      _0x10ad2d,
      _0x33c123,
      _0x5c9c08,
      _0x12ed25,
      _0x497823,
      _0x32b5c3,
    ) {
      (super(
        _0x5c9c08,
        () =>
          new _0x35f0c8({
            unitId: _0x10ad2d,
            subUnitId: _0x33c123,
            chartId: _0x5c9c08,
            elementId: _0x12ed25,
            slideModel: _0x497823,
            injector: _0x32b5c3,
          }),
        (_0x1a3c99, _0x388b64, _0x5ab68c) =>
          _0x48c973({
            info: _0x1a3c99,
            description: _0x388b64,
            type: _0x5ab68c,
            normalizeSource: (_0x2e2a26) =>
              Array.isArray(_0x2e2a26)
                ? { values: _0x29dcb8.deepClone(_0x2e2a26) }
                : { source: _0x1ee964.toReference(_0x2e2a26) },
            extension: ({ setInfo: _0x50bba9 }) => ({
              setPlaceholder(_0x570d8e) {
                return (_0x50bba9("placeholder", _0x570d8e), this);
              },
              setStroke(_0x53ad01) {
                return (_0x50bba9("stroke", _0x53ad01), this);
              },
              setZOrder(_0x49a3a4) {
                return (_0x50bba9("zOrder", _0x49a3a4), this);
              },
            }),
          }),
        _0x32b5c3,
      ),
        (this._unitId = _0x10ad2d),
        (this._subUnitId = _0x33c123),
        (this._chartId = _0x5c9c08),
        (this._elementId = _0x12ed25),
        (this._slideModel = _0x497823),
        T(this, "unitId", undefined),
        (this.unitId = _0x10ad2d));
    }
    getElementId() {
      return this._elementId;
    }
    getPlaceholder() {
      return this._getElement().placeholder;
    }
    setPlaceholder(_0x19d0af) {
      return (
        this._createSlideAdapter().commitHost({ placeholder: _0x19d0af }),
        this
      );
    }
    getStroke() {
      return this._getElement().stroke;
    }
    setStroke(_0x4b1b94) {
      return (
        this._createSlideAdapter().commitHost({ stroke: _0x4b1b94 }),
        this
      );
    }
    getChartData() {
      let _0x64a60f = this._injector["get"](_0x16012c),
        _0x21d2f2 = _0x64a60f.getChart(this._unitId, this._chartId);
      if (!_0x21d2f2) return null;
      let _0x2d334b = _0x64a60f.getDataSource(
        this._unitId,
        _0x21d2f2.dataSourceId,
      );
      return _0x2d334b ? { chart: _0x21d2f2, dataSource: _0x2d334b } : null;
    }
    _getElement() {
      var _0xc761c;
      let _0x2279cc =
        (_0xc761c =
          this._slideModel["getSnapshot"]().slides[this._subUnitId]) == null
          ? undefined
          : _0xc761c.elements[this._elementId];
      if (!_0x2279cc)
        throw Error("Slide chart element not found: " + this._elementId);
      return _0x2279cc;
    }
    _createSlideAdapter() {
      return new _0x35f0c8({
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        chartId: this._chartId,
        elementId: this._elementId,
        slideModel: this._slideModel,
        injector: this._injector,
      });
    }
  },
  D = class extends _0x520a32 {
    newChart(_0x2b4a34) {
      return _0x48c973({
        type: _0x2b4a34,
        injector: this._injector,
        commitError:
          "Insert\x20the\x20Slide\x20chart\x20before\x20updating\x20it.",
        normalizeSource: (_0x21f9e6) =>
          Array.isArray(_0x21f9e6)
            ? { values: _0x29dcb8.deepClone(_0x21f9e6) }
            : { source: _0x1ee964.toReference(_0x21f9e6) },
        createInfo: () => ({}),
        extension: ({ setInfo: _0x3bebd0 }) => ({
          setPlaceholder(_0x2f26f6) {
            return (_0x3bebd0("placeholder", _0x2f26f6), this);
          },
          setStroke(_0x264330) {
            return (_0x3bebd0("stroke", _0x264330), this);
          },
          setZOrder(_0x3fec96) {
            return (_0x3bebd0("zOrder", _0x3fec96), this);
          },
        }),
      });
    }
    async insertChart(_0x19cc48) {
      let {
          config: _0x3c2d40,
          dataSource: _0x1110ad,
          position: _0x4ae1a3,
          size: _0x1633f4,
          placeholder: _0x45a58e,
          stroke: _0x3d7312,
          zOrder: _0x532fb3,
        } = _0x19cc48,
        _0x887c13 = null;
      try {
        _0x887c13 = _0x1110ad.values
          ? null
          : await this._resolveReferencedValues(_0x1110ad.source);
        let {
          chart: _0x4a44a1,
          dataSource: _0x47b29f,
          element: _0x2c357f,
          unitId: _0x4d3d12,
          subUnitId: _0x481dc2,
        } = O(this._slideModel["getUnitId"](), this.getId(), {
          ..._0x3c2d40,
          data: _0x1110ad.values ?? _0x887c13.values,
          dataSource: _0x1110ad,
          position: _0x4ae1a3,
          size: _0x1633f4,
          placeholder: _0x45a58e,
          stroke: _0x3d7312,
        });
        if (
          !this._injector["get"](_0x56fd2f).syncExecuteCommand(_0x5df9e9.id, {
            unitId: _0x4d3d12,
            subUnitId: _0x481dc2,
            chart: _0x4a44a1,
            dataSource: _0x47b29f,
            element: _0x2c357f,
            insertIndex: _0x532fb3,
          })
        )
          throw Error("Failed to insert Slide chart.");
        return this.getChart(_0x4a44a1.id);
      } finally {
        _0x887c13 == null || _0x887c13.handle["dispose"]();
      }
    }
    getChart(_0x46a76d) {
      return (
        this.getCharts().find(
          (_0x3e9656) =>
            _0x3e9656.getId() === _0x46a76d ||
            _0x3e9656.getElementId() === _0x46a76d,
        ) ?? null
      );
    }
    getCharts() {
      let _0xc9becd = this._slideModel["getUnitId"](),
        _0x2bf86f = this.getId(),
        { elementOrder: _0x26b71c, elements: _0x51b127 } = this.getData();
      return _0x26b71c
        .map((_0x32996a) => _0x51b127[_0x32996a])
        .filter(
          (_0x2e987b) =>
            (_0x2e987b == null ? undefined : _0x2e987b.type) ===
            _0xa54b18.Chart,
        )
        .map((_0x5ce3dc) =>
          this._injector["createInstance"](
            E,
            _0xc9becd,
            _0x2bf86f,
            _0x5ce3dc.chartId,
            _0x5ce3dc.id,
            this._slideModel,
            this._injector,
          ),
        );
    }
    async _resolveReferencedValues(_0x4d39ae) {
      let _0x5f31a1 = this._injector["get"](_0x165e93).acquire(_0x4d39ae);
      try {
        let _0x3e2469 = await _0x500a8f(
          _0x5f31a1.state$["pipe"](
            _0x4df9b0(
              ({ status: _0x20a7ff }) => _0x20a7ff !== _0x5900f5.LOADING,
            ),
          ),
        );
        if (_0x3e2469.status !== _0x5900f5.READY || !_0x3e2469.values)
          throw _0x3e2469.error instanceof Error
            ? _0x3e2469.error
            : Error(_0x4d39ae.kind);
        return {
          values: _0x3e2469.values["map"]((_0x506615) => [..._0x506615]),
          handle: _0x5f31a1,
        };
      } catch (_0x6ae504) {
        throw (_0x5f31a1.dispose(), _0x6ae504);
      }
    }
  };
_0x520a32.extend(D);
function O(_0x228006, _0x562175, _0x4d840e) {
  var _0x559f91, _0x1d31aa, _0x191cf5, _0x49b0c8, _0x1847aa;
  let _0xc6ceeb = Array.isArray(_0x4d840e.data)
    ? _0x4d840e.data
    : _0x4d840e.data["values"];
  if (_0xc6ceeb.length === 0)
    throw Error("Chart data source values are required to insert a chart.");
  let [, ..._0x10ec10] = _0xc6ceeb,
    _0x394de6 = _0x38966e(_0x4d840e, {
      series: (_0xc6ceeb[0] ?? []).slice(1).map((_0x191455, _0x26024b) => {
        let _0x40d440 = 1 + _0x26024b;
        return {
          index: _0x40d440,
          name: String(_0x191455 ?? ""),
          items: _0x10ec10.map((_0x4033bd) => _0x4be144(_0x4033bd[_0x40d440])),
        };
      }),
    }),
    _0x44b77d = _0x4d840e.id ?? _0x52f446(_0x4e4eb2),
    _0x44a324 = _0x4d840e.dataSourceId ?? _0x52f446(_0x4e4eb2),
    _0x58dcb5 = _0x4d840e.elementId ?? _0x52f446(_0x4e4eb2);
  return {
    unitId: _0x228006,
    subUnitId: _0x562175,
    chart: {
      id: _0x44b77d,
      dataSourceId: _0x44a324,
      chartType: _0x394de6.chartType,
      style: _0x394de6.style,
      context: { chartContext: _0x394de6.context },
      dataAggregation: _0x394de6.dataAggregation,
    },
    dataSource:
      (_0x559f91 = _0x4d840e.dataSource) != null && _0x559f91.source
        ? { id: _0x44a324, source: _0x4d840e.dataSource["source"] }
        : {
            id: _0x44a324,
            values: _0xc6ceeb,
            name: Array.isArray(_0x4d840e.data)
              ? undefined
              : _0x4d840e.data["name"],
          },
    element: {
      id: _0x58dcb5,
      type: _0xa54b18.Chart,
      chartId: _0x44b77d,
      transform: {
        left:
          ((_0x1d31aa = _0x4d840e.position) == null
            ? undefined
            : _0x1d31aa.x) ?? _0x1d80ec,
        top:
          ((_0x191cf5 = _0x4d840e.position) == null
            ? undefined
            : _0x191cf5.y) ?? _0x399c36,
        width:
          ((_0x49b0c8 = _0x4d840e.size) == null
            ? undefined
            : _0x49b0c8.width) ?? _0x5ec70d,
        height:
          ((_0x1847aa = _0x4d840e.size) == null
            ? undefined
            : _0x1847aa.height) ?? _0x2decdd,
      },
      placeholder: _0x4d840e.placeholder,
      stroke: _0x4d840e.stroke,
    },
  };
}
export { E as FSlideChart };
