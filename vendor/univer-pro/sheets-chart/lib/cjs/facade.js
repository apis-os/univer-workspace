Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-chart"),
  t = require("@univerjs-pro/engine-chart/facade"),
  n = require("@univerjs-pro/sheets-chart"),
  r = require("@univerjs/core"),
  i = require("@univerjs/sheets/facade"),
  a = require("@univerjs/core/facade");
var o = class extends t.FChart {
    constructor(_0x3b65dd, _0x91a03b, _0x17af27, _0x532877) {
      (super(
        _0x17af27,
        () =>
          new n["SheetChartConfigAdapter"]({
            unitId: _0x3b65dd,
            subUnitId: _0x91a03b,
            chartId: _0x17af27,
            injector: _0x532877,
          }),
        (_0x32d927, _0x63fd86, _0x17fe63) =>
          (0, t.createChartBuilder)({
            info: _0x32d927,
            description: _0x63fd86,
            type: _0x17fe63,
            normalizeSource: (_0x5384c4) => _0x5384c4,
            extension: ({ setInfo: _0x8c8172 }) => ({
              setPosition(_0x49e2fe) {
                return (_0x8c8172("anchor", _0x49e2fe), this);
              },
            }),
          }),
        _0x532877,
      ),
        (this.unitId = _0x3b65dd),
        (this.subUnitId = _0x91a03b),
        (this.chartId = _0x17af27));
    }
    getRange() {
      let _0x156f86 = this._injector["get"](
        n.SheetsChartService,
      ).getChartSourceSpec(this.chartId);
      return _0x156f86 && !Array.isArray(_0x156f86) ? _0x156f86 : undefined;
    }
    setPosition(_0x49c80f) {
      return (
        this._createSheetAdapter().commitHost({
          layout: { anchor: _0x49c80f },
        }),
        this
      );
    }
    _createSheetAdapter() {
      return new n["SheetChartConfigAdapter"]({
        unitId: this.unitId,
        subUnitId: this.subUnitId,
        chartId: this.chartId,
        injector: this._injector,
      });
    }
  },
  s = class extends i.FWorksheet {
    newChart(_0xec9cb3) {
      return (0, t.createChartBuilder)({
        type: _0xec9cb3,
        injector: this._injector,
        commitError: "Insert the Sheet chart before updating it.",
        normalizeSource: (_0xcd6b54) => _0xcd6b54,
        createInfo: () => ({ anchor: undefined }),
        extension: ({ setInfo: _0x12058c }) => ({
          setPosition(_0x51dae0) {
            return (_0x12058c("anchor", _0x51dae0), this);
          },
        }),
      });
    }
    async insertChart(_0x5f3d00) {
      var _0x21eacb, _0x3fdc5f, _0x38e679;
      let {
          config: _0x3cf32b,
          dataSource: _0x3742af,
          anchor: _0x9e0dfc,
          position: _0x91d88b,
          size: _0x2d51a9,
        } = _0x5f3d00,
        _0x25eeda = {
          ..._0x3cf32b,
          source: _0x3742af,
          anchor: _0x9e0dfc,
          position: _0x91d88b,
          size: _0x2d51a9,
        },
        _0x2d75ae = (0, e.chartTypeToBits)(_0x25eeda.type),
        _0x378015 = this._chartSourceContext(_0x2d75ae),
        _0x4f57b6 = [],
        _0x1f4324 = (0, n.resolveSourceSpec)(
          _0x25eeda.source,
          _0x378015,
          _0x4f57b6,
        );
      if (
        !_0x1f4324 ||
        _0x4f57b6.some(
          (_0x3d1d33) =>
            _0x3d1d33.severity === n.ChartDiagnosticSeverity["Error"],
        )
      )
        throw Error(
          _0x4f57b6.map((_0x1fea76) => _0x1fea76.message).join(";\x20") ||
            "Invalid Sheet chart source.",
        );
      let _0x3ffd11 = (0, r.generateRandomId)(),
        _0x5bc792 = (0, e.toChartModelConfig)(_0x25eeda, {
          series: (0, n.resolveSourceSeries)(
            _0x1f4324,
            _0x378015,
            ((_0x21eacb = _0x25eeda.mapping) == null
              ? undefined
              : _0x21eacb.categoryIndex) ?? 0,
          ),
        }),
        _0x33eaa = (0, n.resolveInitialChartPosition)(
          {
            unitId: _0x378015.unitId,
            subUnitId: _0x378015.subUnitId,
            injector: this.getInject(),
          },
          _0x25eeda,
          _0x4f57b6,
        ),
        _0x12d5e5 = {
          unitId: _0x378015.unitId,
          subUnitId: _0x378015.subUnitId,
          chartId: _0x3ffd11,
          chartType: _0x2d75ae,
          source:
            _0x1f4324.kind === n.ChartSourceKind["Range"]
              ? _0x1f4324.rangeInfo
              : _0x1f4324.ranges,
          position: _0x33eaa,
          width:
            (_0x3fdc5f = _0x25eeda.size) == null ? undefined : _0x3fdc5f.width,
          height:
            (_0x38e679 = _0x25eeda.size) == null ? undefined : _0x38e679.height,
          theme: _0x25eeda.theme ?? undefined,
          config: {
            unitId: _0x378015.unitId,
            chartModelId: _0x3ffd11,
            style: _0x5bc792.style,
            context: _0x5bc792.context,
            dataAggregation: _0x5bc792.dataAggregation,
          },
        };
      if (
        !(await this.getInject()
          .get(r.ICommandService)
          .executeCommand(n.InsertChartCommand["id"], _0x12d5e5))
      )
        throw Error("Failed to create Sheet chart.");
      return this._injector["createInstance"](
        o,
        _0x378015.unitId,
        _0x378015.subUnitId,
        _0x3ffd11,
        this._injector,
      );
    }
    getChart(_0x13e175) {
      let { unitId: _0x1d9df1, subUnitId: _0x3bd85c } =
          this._chartSourceContext(),
        _0x31a213 = this.getInject().get(n.SheetsChartService);
      return _0x31a213.getChartModel(_0x13e175) &&
        _0x31a213.getSubUnitId(_0x1d9df1, _0x13e175) === _0x3bd85c
        ? this._injector["createInstance"](
            o,
            _0x1d9df1,
            _0x3bd85c,
            _0x13e175,
            this._injector,
          )
        : null;
    }
    getCharts() {
      let { unitId: _0x1c34bf, subUnitId: _0x55a13b } =
        this._chartSourceContext();
      return this.getInject()
        .get(n.SheetsChartService)
        .getUnitChartModels(_0x1c34bf, _0x55a13b)
        .filter(Boolean)
        .map((_0x2b7197) =>
          this._injector["createInstance"](
            o,
            _0x1c34bf,
            _0x55a13b,
            _0x2b7197.id,
            this._injector,
          ),
        );
    }
    _chartSourceContext(_0x58395c) {
      let _0x261b13 = this.getWorkbook(),
        _0x33fd79 = this.getInject().get(n.SheetsChartService);
      return {
        unitId: _0x261b13.getUnitId(),
        subUnitId: this.getSheetId(),
        workbook: _0x261b13,
        ...(_0x58395c === undefined
          ? {}
          : {
              inferInitialChartSource: (_0x47c69c) =>
                _0x33fd79.inferInitialChartSource(_0x47c69c, _0x58395c),
            }),
      };
    }
  };
i.FWorksheet["extend"](s);
var c = class extends a.FEnum {
  get ChartSourceOrientation() {
    return n.ChartSourceOrientation;
  }
};
(a.FEnum["extend"](c), (exports.FSheetChart = o));
