Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/boards-chart"),
  n = require("@univerjs-pro/boards/facade"),
  r = require("@univerjs-pro/engine-chart"),
  i = require("@univerjs-pro/engine-chart/facade"),
  a = require("@univerjs/core"),
  o = require("rxjs");
function s(_0x4eaecb) {
  "@babel/helpers - typeof";
  return (
    (s =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x52a71) {
            return typeof _0x52a71;
          }
        : function (_0x4fcd3a) {
            return _0x4fcd3a &&
              typeof Symbol == "function" &&
              _0x4fcd3a.constructor === Symbol &&
              _0x4fcd3a !== Symbol.prototype
              ? "symbol"
              : typeof _0x4fcd3a;
          }),
    s(_0x4eaecb)
  );
}
function c(_0x191373, _0x3df624) {
  if (s(_0x191373) != "object" || !_0x191373) return _0x191373;
  var _0x1af82b = _0x191373[Symbol.toPrimitive];
  if (_0x1af82b !== undefined) {
    var _0x4dcbe9 = _0x1af82b.call(_0x191373, _0x3df624 || "default");
    if (s(_0x4dcbe9) != "object") return _0x4dcbe9;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3df624 === "string" ? String : Number)(_0x191373);
}
function l(_0x437ca2) {
  var _0x1177d5 = c(_0x437ca2, "string");
  return s(_0x1177d5) == "symbol" ? _0x1177d5 : _0x1177d5 + "";
}
function u(_0x3784b0, _0x1469e6, _0x407acc) {
  return (
    (_0x1469e6 = l(_0x1469e6)) in _0x3784b0
      ? Object.defineProperty(_0x3784b0, _0x1469e6, {
          value: _0x407acc,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3784b0[_0x1469e6] = _0x407acc),
    _0x3784b0
  );
}
var d = class extends i.FChart {
    constructor(_0x32ba71, _0x3a8c39, _0x264f69) {
      (super(
        _0x264f69.chartId,
        () => {
          let _0x21241b = _0x32ba71.getId(),
            _0x449470 = _0x3a8c39
              .get(a.IUniverInstanceService)
              .getUnit(_0x21241b, a.UniverInstanceType["UNIVER_BOARD"]);
          if (!_0x449470) throw Error("Board\x20not\x20found:\x20" + _0x21241b);
          return new t["BoardChartConfigAdapter"]({
            unitId: _0x21241b,
            pageId: _0x449470.getActivePageId(),
            chartId: _0x264f69.chartId,
            elementId: _0x264f69.elementId,
            boardModel: _0x449470,
            injector: _0x3a8c39,
          });
        },
        (_0x292094, _0x1ed075, _0x34ef0a) =>
          (0, i.createChartBuilder)({
            info: _0x292094,
            description: _0x1ed075,
            type: _0x34ef0a,
            normalizeSource: (_0x159db0) =>
              Array.isArray(_0x159db0)
                ? { values: a.Tools["deepClone"](_0x159db0) }
                : {
                    source:
                      r.ResourceRefChartDataSourceAdapter["toReference"](
                        _0x159db0,
                      ),
                  },
            extension: ({ setInfo: _0x3d79c7 }) => ({
              setContainer(_0x2f222f) {
                return (_0x3d79c7("containerId", _0x2f222f), this);
              },
              setLane(_0x5dbe15) {
                return (_0x3d79c7("laneId", _0x5dbe15), this);
              },
              setZOrder(_0x35e59e) {
                return (_0x3d79c7("zOrder", _0x35e59e), this);
              },
            }),
          }),
        _0x3a8c39,
      ),
        (this._board = _0x32ba71),
        u(this, "unitId", undefined),
        u(this, "elementId", undefined),
        u(this, "chartId", undefined),
        (this.unitId = _0x32ba71.getId()),
        (this.elementId = _0x264f69.elementId),
        (this.chartId = _0x264f69.chartId));
    }
    getElementId() {
      return this.elementId;
    }
    getElement() {
      let _0x5292e8 = this._board["getElement"](this.elementId);
      return (_0x5292e8 == null ? undefined : _0x5292e8.type) ===
        e.BoardElementType["Chart"]
        ? _0x5292e8
        : null;
    }
    getChart() {
      return (
        this._injector["get"](t.BoardChartResourceService).getChart(
          this.unitId,
          this.chartId,
        ) ?? null
      );
    }
    getDataSource() {
      let _0x3448f0 = this.getChart();
      return _0x3448f0
        ? (this._injector["get"](t.BoardChartResourceService).getDataSource(
            this.unitId,
            _0x3448f0.dataSourceId,
          ) ?? null)
        : null;
    }
  },
  f = class extends n.FBoard {
    newChart(_0x54df06) {
      return (0, i.createChartBuilder)({
        type: _0x54df06,
        injector: this._injector,
        commitError: "Insert the Board chart before updating it.",
        normalizeSource: (_0x55015d) =>
          Array.isArray(_0x55015d)
            ? { values: a.Tools["deepClone"](_0x55015d) }
            : {
                source:
                  r.ResourceRefChartDataSourceAdapter["toReference"](_0x55015d),
              },
        createInfo: () => ({}),
        extension: ({ setInfo: _0x1c11e2 }) => ({
          setContainer(_0x54dbb) {
            return (_0x1c11e2("containerId", _0x54dbb), this);
          },
          setLane(_0x3a282b) {
            return (_0x1c11e2("laneId", _0x3a282b), this);
          },
          setZOrder(_0x5c45a2) {
            return (_0x1c11e2("zOrder", _0x5c45a2), this);
          },
        }),
      });
    }
    async insertChart(_0x48c800) {
      let _0x13707e = null;
      try {
        var _0x3b69ff, _0x45ac9c, _0x4ef1ae, _0x1a3ef1;
        _0x13707e = _0x48c800.dataSource["values"]
          ? null
          : await this._resolveReferencedValues(_0x48c800.dataSource["source"]);
        let _0x1259db = {
            ..._0x48c800.config,
            data: _0x48c800.dataSource["values"] ?? _0x13707e.values,
            dataSource: _0x48c800.dataSource,
            position: _0x48c800.position,
            size: _0x48c800.size,
            parentId: _0x48c800.containerId,
            laneId: _0x48c800.laneId,
            insertIndex: _0x48c800.zOrder,
          },
          _0x28ce67 = this._getStoragePageId(),
          _0x240f2f = Array.isArray(_0x1259db.data)
            ? _0x1259db.data
            : _0x1259db.data["values"];
        if (_0x240f2f.length === 0)
          throw Error("Board\x20chart\x20data\x20is\x20required.");
        let _0xb8be3b =
            (_0x3b69ff = _0x1259db.size) == null ? undefined : _0x3b69ff.width,
          _0x15ef74 =
            (_0x45ac9c = _0x1259db.size) == null ? undefined : _0x45ac9c.height;
        if (
          (_0xb8be3b !== undefined && !(_0xb8be3b > 0)) ||
          (_0x15ef74 !== undefined && !(_0x15ef74 > 0))
        )
          throw Error("Board\x20chart\x20size\x20must\x20be\x20positive.");
        let _0x15c162 =
            _0x1259db.id ??
            (0, a.generateRandomId)(i.CHART_FACADE_RANDOM_ID_LENGTH),
          _0x2a29ea =
            _0x1259db.elementId ??
            (0, a.generateRandomId)(i.CHART_FACADE_RANDOM_ID_LENGTH),
          _0xaede9e = { ..._0x1259db.context },
          _0x265898 = (0, r.toChartModelConfig)(_0x1259db, {
            series: p(_0x240f2f, _0xaede9e),
          });
        if (
          !this._injector["get"](a.ICommandService).syncExecuteCommand(
            e.InsertBoardChartCommand["id"],
            {
              unitId: this.getId(),
              subUnitId: _0x28ce67,
              elementId: _0x2a29ea,
              chartId: _0x15c162,
              parentId: _0x1259db.parentId,
              laneId: _0x1259db.laneId,
              insertIndex: _0x1259db.insertIndex,
              left:
                ((_0x4ef1ae = _0x1259db.position) == null
                  ? undefined
                  : _0x4ef1ae.x) ?? 0,
              top:
                ((_0x1a3ef1 = _0x1259db.position) == null
                  ? undefined
                  : _0x1a3ef1.y) ?? 0,
              width: _0xb8be3b,
              height: _0x15ef74,
              options: {
                chartType: (0, r.chartTypeToBits)(_0x1259db.type),
                data: _0x240f2f,
                dataSource: _0x1259db.dataSource,
                style: _0x265898.style,
                context: { ..._0xaede9e, chartContext: _0x265898.context },
                dataAggregation: _0x265898.dataAggregation,
              },
            },
          )
        )
          throw Error("Failed to create Board chart.");
        return (
          this.getChart(_0x15c162) ??
          this._injector["createInstance"](d, this, this._injector, {
            chartId: _0x15c162,
            elementId: _0x2a29ea,
          })
        );
      } finally {
        _0x13707e == null || _0x13707e.handle["dispose"]();
      }
    }
    getChart(_0x118edc) {
      let _0x2919c7 = this._elements().find(
        (_0x55c469) =>
          _0x55c469.id === _0x118edc || _0x55c469.chartId === _0x118edc,
      );
      return _0x2919c7 && this._hasCompleteResource(_0x2919c7.chartId)
        ? this._injector["createInstance"](d, this, this._injector, {
            chartId: _0x2919c7.chartId,
            elementId: _0x2919c7.id,
          })
        : null;
    }
    getCharts() {
      return this._elements()
        .filter((_0x4e6b4e) => this._hasCompleteResource(_0x4e6b4e.chartId))
        .map((_0x574d5f) =>
          this._injector["createInstance"](d, this, this._injector, {
            chartId: _0x574d5f.chartId,
            elementId: _0x574d5f.id,
          }),
        );
    }
    _elements() {
      let _0x4edf70 = this.getData().pages[this._getStoragePageId()];
      return _0x4edf70
        ? _0x4edf70.elementOrder["map"](
            (_0x22a440) => _0x4edf70.elements[_0x22a440],
          ).filter(
            (_0x3b8aef) =>
              (_0x3b8aef == null ? undefined : _0x3b8aef.type) ===
              e.BoardElementType["Chart"],
          )
        : [];
    }
    _hasCompleteResource(_0x45a50c) {
      let _0x534f3f = this._injector["get"](t.BoardChartResourceService),
        _0x386c67 = _0x534f3f.getChart(this.getId(), _0x45a50c);
      return (
        !!_0x386c67 &&
        !!_0x534f3f.getDataSource(this.getId(), _0x386c67.dataSourceId)
      );
    }
    _getStoragePageId() {
      var _0x113443;
      let _0x5d07f7 = this.getData();
      return (
        _0x5d07f7.activePageId ??
        ((_0x113443 = _0x5d07f7.pageOrder) == null
          ? undefined
          : _0x113443[0]) ??
        Object.keys(_0x5d07f7.pages)[0] ??
        ""
      );
    }
    async _resolveReferencedValues(_0x2f5509) {
      let _0x29418e = this._injector["get"](
        r.IChartDataSourceRuntimeService,
      ).acquire(_0x2f5509);
      try {
        let _0x145bf9 = await (0, o.firstValueFrom)(
          _0x29418e.state$["pipe"](
            (0, o.filter)(
              ({ status: _0x1a11f6 }) =>
                _0x1a11f6 !== r.ChartDataSourceRuntimeStatus["LOADING"],
            ),
          ),
        );
        if (
          _0x145bf9.status !== r.ChartDataSourceRuntimeStatus["READY"] ||
          !_0x145bf9.values
        )
          throw _0x145bf9.error instanceof Error
            ? _0x145bf9.error
            : Error(_0x2f5509.kind);
        return {
          values: _0x145bf9.values["map"]((_0x5a4ec7) => [..._0x5a4ec7]),
          handle: _0x29418e,
        };
      } catch (_0x3ecccc) {
        throw (_0x29418e.dispose(), _0x3ecccc);
      }
    }
  };
function p(_0x206671, _0x6f152d) {
  let _0x33b473 = (0, r.buildOrientedChartDataSet)(_0x206671, {
    headerRow: _0x6f152d.headerRow ?? r.DEFAULT_CHART_RESOURCE_HEADER_ROW,
    isRowDirection: t.BoardChartConfigAdapter["isRowRecordDirection"](
      _0x6f152d.orient,
    ),
  });
  return _0x33b473.source["slice"](1).map((_0x497075, _0x3ab2bf) => {
    let _0x1f3530 = 1 + _0x3ab2bf;
    return {
      index: _0x1f3530,
      name: String(_0x33b473.dimensions[_0x1f3530] ?? ""),
      items: _0x497075.map(r.toChartDataItem),
    };
  });
}
(n.FBoard["extend"](f), (exports.FBoardChart = d));
