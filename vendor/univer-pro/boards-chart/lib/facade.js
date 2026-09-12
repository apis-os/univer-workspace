import {
  BoardElementType as _0x18d293,
  InsertBoardChartCommand as _0x57b228,
} from "@univerjs-pro/boards";
import {
  BoardChartConfigAdapter as _0x3d8b93,
  BoardChartResourceService as _0x1f21ff,
} from "@univerjs-pro/boards-chart";
import { FBoard as _0x1fb2ab } from "@univerjs-pro/boards/facade";
import {
  ChartDataSourceRuntimeStatus as _0x4422e5,
  DEFAULT_CHART_RESOURCE_HEADER_ROW as _0x23f840,
  IChartDataSourceRuntimeService as _0x1bde65,
  ResourceRefChartDataSourceAdapter as _0x1a9d48,
  buildOrientedChartDataSet as _0x3b077d,
  chartTypeToBits as _0x4d582f,
  toChartDataItem as _0x3f2ea7,
  toChartModelConfig as _0x2e8162,
} from "@univerjs-pro/engine-chart";
import {
  CHART_FACADE_RANDOM_ID_LENGTH as _0x5a0f83,
  FChart as _0x2d11fa,
  createChartBuilder as _0x4b1555,
} from "@univerjs-pro/engine-chart/facade";
import {
  ICommandService as _0xad0bc4,
  IUniverInstanceService as _0x3984fe,
  Tools as _0x1f941b,
  UniverInstanceType as _0x47787a,
  generateRandomId as _0x54c5ba,
} from "@univerjs/core";
import { filter as _0x406b3e, firstValueFrom as _0x2e3fc6 } from "rxjs";
function C(_0x852142) {
  "@babel/helpers - typeof";
  return (
    (C =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1d8609) {
            return typeof _0x1d8609;
          }
        : function (_0x2afade) {
            return _0x2afade &&
              typeof Symbol == "function" &&
              _0x2afade.constructor === Symbol &&
              _0x2afade !== Symbol.prototype
              ? "symbol"
              : typeof _0x2afade;
          }),
    C(_0x852142)
  );
}
function w(_0x5b1fa0, _0x157e8a) {
  if (C(_0x5b1fa0) != "object" || !_0x5b1fa0) return _0x5b1fa0;
  var _0x27c328 = _0x5b1fa0[Symbol.toPrimitive];
  if (_0x27c328 !== undefined) {
    var _0x322898 = _0x27c328.call(_0x5b1fa0, _0x157e8a || "default");
    if (C(_0x322898) != "object") return _0x322898;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x157e8a === "string" ? String : Number)(_0x5b1fa0);
}
function T(_0x13ea7a) {
  var _0x446164 = w(_0x13ea7a, "string");
  return C(_0x446164) == "symbol" ? _0x446164 : _0x446164 + "";
}
function E(_0x2ff395, _0x4ca983, _0x2d080e) {
  return (
    (_0x4ca983 = T(_0x4ca983)) in _0x2ff395
      ? Object.defineProperty(_0x2ff395, _0x4ca983, {
          value: _0x2d080e,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2ff395[_0x4ca983] = _0x2d080e),
    _0x2ff395
  );
}
var D = class extends _0x2d11fa {
    constructor(_0x8bf59d, _0x558ee7, _0x2eb6d3) {
      (super(
        _0x2eb6d3.chartId,
        () => {
          let _0x3b6a0b = _0x8bf59d.getId(),
            _0x4758d3 = _0x558ee7
              .get(_0x3984fe)
              .getUnit(_0x3b6a0b, _0x47787a.UNIVER_BOARD);
          if (!_0x4758d3) throw Error("Board not found: " + _0x3b6a0b);
          return new _0x3d8b93({
            unitId: _0x3b6a0b,
            pageId: _0x4758d3.getActivePageId(),
            chartId: _0x2eb6d3.chartId,
            elementId: _0x2eb6d3.elementId,
            boardModel: _0x4758d3,
            injector: _0x558ee7,
          });
        },
        (_0x567ee6, _0x4c7cd9, _0x29bc6e) =>
          _0x4b1555({
            info: _0x567ee6,
            description: _0x4c7cd9,
            type: _0x29bc6e,
            normalizeSource: (_0xe56f49) =>
              Array.isArray(_0xe56f49)
                ? { values: _0x1f941b.deepClone(_0xe56f49) }
                : { source: _0x1a9d48.toReference(_0xe56f49) },
            extension: ({ setInfo: _0x561141 }) => ({
              setContainer(_0x23704c) {
                return (_0x561141("containerId", _0x23704c), this);
              },
              setLane(_0x197311) {
                return (_0x561141("laneId", _0x197311), this);
              },
              setZOrder(_0x3aa792) {
                return (_0x561141("zOrder", _0x3aa792), this);
              },
            }),
          }),
        _0x558ee7,
      ),
        (this._board = _0x8bf59d),
        E(this, "unitId", undefined),
        E(this, "elementId", undefined),
        E(this, "chartId", undefined),
        (this.unitId = _0x8bf59d.getId()),
        (this.elementId = _0x2eb6d3.elementId),
        (this.chartId = _0x2eb6d3.chartId));
    }
    getElementId() {
      return this.elementId;
    }
    getElement() {
      let _0x21bb9d = this._board["getElement"](this.elementId);
      return (_0x21bb9d == null ? undefined : _0x21bb9d.type) ===
        _0x18d293.Chart
        ? _0x21bb9d
        : null;
    }
    getChart() {
      return (
        this._injector["get"](_0x1f21ff).getChart(this.unitId, this.chartId) ??
        null
      );
    }
    getDataSource() {
      let _0x245802 = this.getChart();
      return _0x245802
        ? (this._injector["get"](_0x1f21ff).getDataSource(
            this.unitId,
            _0x245802.dataSourceId,
          ) ?? null)
        : null;
    }
  },
  O = class extends _0x1fb2ab {
    newChart(_0x51d207) {
      return _0x4b1555({
        type: _0x51d207,
        injector: this._injector,
        commitError: "Insert the Board chart before updating it.",
        normalizeSource: (_0x1a073d) =>
          Array.isArray(_0x1a073d)
            ? { values: _0x1f941b.deepClone(_0x1a073d) }
            : { source: _0x1a9d48.toReference(_0x1a073d) },
        createInfo: () => ({}),
        extension: ({ setInfo: _0x3917b0 }) => ({
          setContainer(_0x4c56c6) {
            return (_0x3917b0("containerId", _0x4c56c6), this);
          },
          setLane(_0x20f8cf) {
            return (_0x3917b0("laneId", _0x20f8cf), this);
          },
          setZOrder(_0x17acb1) {
            return (_0x3917b0("zOrder", _0x17acb1), this);
          },
        }),
      });
    }
    async insertChart(_0x15ada3) {
      let _0x1e2471 = null;
      try {
        var _0x2de465, _0x3f313a, _0x483984, _0x3b4c8b;
        _0x1e2471 = _0x15ada3.dataSource["values"]
          ? null
          : await this._resolveReferencedValues(_0x15ada3.dataSource["source"]);
        let _0x5df6a1 = {
            ..._0x15ada3.config,
            data: _0x15ada3.dataSource["values"] ?? _0x1e2471.values,
            dataSource: _0x15ada3.dataSource,
            position: _0x15ada3.position,
            size: _0x15ada3.size,
            parentId: _0x15ada3.containerId,
            laneId: _0x15ada3.laneId,
            insertIndex: _0x15ada3.zOrder,
          },
          _0x1b2d88 = this._getStoragePageId(),
          _0x500101 = Array.isArray(_0x5df6a1.data)
            ? _0x5df6a1.data
            : _0x5df6a1.data["values"];
        if (_0x500101.length === 0)
          throw Error("Board chart data is required.");
        let _0x4517e6 =
            (_0x2de465 = _0x5df6a1.size) == null ? undefined : _0x2de465.width,
          _0x1107c2 =
            (_0x3f313a = _0x5df6a1.size) == null ? undefined : _0x3f313a.height;
        if (
          (_0x4517e6 !== undefined && !(_0x4517e6 > 0)) ||
          (_0x1107c2 !== undefined && !(_0x1107c2 > 0))
        )
          throw Error("Board\x20chart\x20size\x20must\x20be\x20positive.");
        let _0x2c1e45 = _0x5df6a1.id ?? _0x54c5ba(_0x5a0f83),
          _0x2ad9d5 = _0x5df6a1.elementId ?? _0x54c5ba(_0x5a0f83),
          _0x4f0a9a = { ..._0x5df6a1.context },
          _0x45ea48 = _0x2e8162(_0x5df6a1, { series: k(_0x500101, _0x4f0a9a) });
        if (
          !this._injector["get"](_0xad0bc4).syncExecuteCommand(_0x57b228.id, {
            unitId: this.getId(),
            subUnitId: _0x1b2d88,
            elementId: _0x2ad9d5,
            chartId: _0x2c1e45,
            parentId: _0x5df6a1.parentId,
            laneId: _0x5df6a1.laneId,
            insertIndex: _0x5df6a1.insertIndex,
            left:
              ((_0x483984 = _0x5df6a1.position) == null
                ? undefined
                : _0x483984.x) ?? 0,
            top:
              ((_0x3b4c8b = _0x5df6a1.position) == null
                ? undefined
                : _0x3b4c8b.y) ?? 0,
            width: _0x4517e6,
            height: _0x1107c2,
            options: {
              chartType: _0x4d582f(_0x5df6a1.type),
              data: _0x500101,
              dataSource: _0x5df6a1.dataSource,
              style: _0x45ea48.style,
              context: { ..._0x4f0a9a, chartContext: _0x45ea48.context },
              dataAggregation: _0x45ea48.dataAggregation,
            },
          })
        )
          throw Error("Failed to create Board chart.");
        return (
          this.getChart(_0x2c1e45) ??
          this._injector["createInstance"](D, this, this._injector, {
            chartId: _0x2c1e45,
            elementId: _0x2ad9d5,
          })
        );
      } finally {
        _0x1e2471 == null || _0x1e2471.handle["dispose"]();
      }
    }
    getChart(_0x57ca54) {
      let _0x51fb7f = this._elements().find(
        (_0x49c81a) =>
          _0x49c81a.id === _0x57ca54 || _0x49c81a.chartId === _0x57ca54,
      );
      return _0x51fb7f && this._hasCompleteResource(_0x51fb7f.chartId)
        ? this._injector["createInstance"](D, this, this._injector, {
            chartId: _0x51fb7f.chartId,
            elementId: _0x51fb7f.id,
          })
        : null;
    }
    getCharts() {
      return this._elements()
        .filter((_0x481102) => this._hasCompleteResource(_0x481102.chartId))
        .map((_0x314cc3) =>
          this._injector["createInstance"](D, this, this._injector, {
            chartId: _0x314cc3.chartId,
            elementId: _0x314cc3.id,
          }),
        );
    }
    _elements() {
      let _0x38fe6e = this.getData().pages[this._getStoragePageId()];
      return _0x38fe6e
        ? _0x38fe6e.elementOrder["map"](
            (_0x5ec4cf) => _0x38fe6e.elements[_0x5ec4cf],
          ).filter(
            (_0x4dd33b) =>
              (_0x4dd33b == null ? undefined : _0x4dd33b.type) ===
              _0x18d293.Chart,
          )
        : [];
    }
    _hasCompleteResource(_0x4d689d) {
      let _0x4c1f8e = this._injector["get"](_0x1f21ff),
        _0x1097f1 = _0x4c1f8e.getChart(this.getId(), _0x4d689d);
      return (
        !!_0x1097f1 &&
        !!_0x4c1f8e.getDataSource(this.getId(), _0x1097f1.dataSourceId)
      );
    }
    _getStoragePageId() {
      var _0x130c31;
      let _0x50f416 = this.getData();
      return (
        _0x50f416.activePageId ??
        ((_0x130c31 = _0x50f416.pageOrder) == null
          ? undefined
          : _0x130c31[0]) ??
        Object.keys(_0x50f416.pages)[0] ??
        ""
      );
    }
    async _resolveReferencedValues(_0x3d5fdf) {
      let _0x40c0b3 = this._injector["get"](_0x1bde65).acquire(_0x3d5fdf);
      try {
        let _0x411f37 = await _0x2e3fc6(
          _0x40c0b3.state$["pipe"](
            _0x406b3e(
              ({ status: _0x20d93f }) => _0x20d93f !== _0x4422e5.LOADING,
            ),
          ),
        );
        if (_0x411f37.status !== _0x4422e5.READY || !_0x411f37.values)
          throw _0x411f37.error instanceof Error
            ? _0x411f37.error
            : Error(_0x3d5fdf.kind);
        return {
          values: _0x411f37.values["map"]((_0x3b962e) => [..._0x3b962e]),
          handle: _0x40c0b3,
        };
      } catch (_0xf7f80a) {
        throw (_0x40c0b3.dispose(), _0xf7f80a);
      }
    }
  };
function k(_0x34b5b9, _0x1aa6b3) {
  let _0x1869b1 = _0x3b077d(_0x34b5b9, {
    headerRow: _0x1aa6b3.headerRow ?? _0x23f840,
    isRowDirection: _0x3d8b93.isRowRecordDirection(_0x1aa6b3.orient),
  });
  return _0x1869b1.source["slice"](1).map((_0x4cbac8, _0x1ee691) => {
    let _0x1a974f = 1 + _0x1ee691;
    return {
      index: _0x1a974f,
      name: String(_0x1869b1.dimensions[_0x1a974f] ?? ""),
      items: _0x4cbac8.map(_0x3f2ea7),
    };
  });
}
_0x1fb2ab.extend(O);
export { D as FBoardChart };
