import {
  chartTypeToBits as _0x4d3ef3,
  toChartModelConfig as _0x54f52c,
} from "@univerjs-pro/engine-chart";
import {
  FChart as _0x5d3457,
  createChartBuilder as _0x54ccdc,
} from "@univerjs-pro/engine-chart/facade";
import {
  ChartDiagnosticSeverity as _0x2c1bcd,
  ChartSourceKind as _0x3378e8,
  ChartSourceOrientation as _0x4107c1,
  InsertChartCommand as _0x14a0ac,
  SheetChartConfigAdapter as _0x754d16,
  SheetsChartService as _0x367907,
  resolveInitialChartPosition as _0x1ee147,
  resolveSourceSeries as _0x1bbb12,
  resolveSourceSpec as _0x3905d2,
} from "@univerjs-pro/sheets-chart";
import {
  ICommandService as _0x373b0e,
  generateRandomId as _0x4f7ebc,
} from "@univerjs/core";
import { FWorksheet as _0x3ff7ef } from "@univerjs/sheets/facade";
import { FEnum as _0x396a9f } from "@univerjs/core/facade";
var _ = class extends _0x5d3457 {
    constructor(_0x284788, _0x72abc9, _0x3eec04, _0x1a21af) {
      (super(
        _0x3eec04,
        () =>
          new _0x754d16({
            unitId: _0x284788,
            subUnitId: _0x72abc9,
            chartId: _0x3eec04,
            injector: _0x1a21af,
          }),
        (_0x16f382, _0x1120f4, _0x2108e4) =>
          _0x54ccdc({
            info: _0x16f382,
            description: _0x1120f4,
            type: _0x2108e4,
            normalizeSource: (_0xc3d71) => _0xc3d71,
            extension: ({ setInfo: _0x14bf6 }) => ({
              setPosition(_0x4c22b0) {
                return (_0x14bf6("anchor", _0x4c22b0), this);
              },
            }),
          }),
        _0x1a21af,
      ),
        (this.unitId = _0x284788),
        (this.subUnitId = _0x72abc9),
        (this.chartId = _0x3eec04));
    }
    getRange() {
      let _0x28259c = this._injector["get"](_0x367907).getChartSourceSpec(
        this.chartId,
      );
      return _0x28259c && !Array.isArray(_0x28259c) ? _0x28259c : undefined;
    }
    setPosition(_0x15f532) {
      return (
        this._createSheetAdapter().commitHost({
          layout: { anchor: _0x15f532 },
        }),
        this
      );
    }
    _createSheetAdapter() {
      return new _0x754d16({
        unitId: this.unitId,
        subUnitId: this.subUnitId,
        chartId: this.chartId,
        injector: this._injector,
      });
    }
  },
  v = class extends _0x3ff7ef {
    newChart(_0x55f8f9) {
      return _0x54ccdc({
        type: _0x55f8f9,
        injector: this._injector,
        commitError: "Insert the Sheet chart before updating it.",
        normalizeSource: (_0x4f3355) => _0x4f3355,
        createInfo: () => ({ anchor: undefined }),
        extension: ({ setInfo: _0x1a5812 }) => ({
          setPosition(_0x292582) {
            return (_0x1a5812("anchor", _0x292582), this);
          },
        }),
      });
    }
    async insertChart(_0x5729c8) {
      var _0x29c7fb, _0x446683, _0x1da99a;
      let {
          config: _0x4d1a52,
          dataSource: _0x291f9c,
          anchor: _0x218b74,
          position: _0x2942ad,
          size: _0x28157b,
        } = _0x5729c8,
        _0x52713f = {
          ..._0x4d1a52,
          source: _0x291f9c,
          anchor: _0x218b74,
          position: _0x2942ad,
          size: _0x28157b,
        },
        _0x5bd2fa = _0x4d3ef3(_0x52713f.type),
        _0x5db118 = this._chartSourceContext(_0x5bd2fa),
        _0x133e1b = [],
        _0x29b362 = _0x3905d2(_0x52713f.source, _0x5db118, _0x133e1b);
      if (
        !_0x29b362 ||
        _0x133e1b.some((_0x595e9b) => _0x595e9b.severity === _0x2c1bcd.Error)
      )
        throw Error(
          _0x133e1b.map((_0x53760a) => _0x53760a.message).join(";\x20") ||
            "Invalid Sheet chart source.",
        );
      let _0x475df6 = _0x4f7ebc(),
        _0x36db8a = _0x54f52c(_0x52713f, {
          series: _0x1bbb12(
            _0x29b362,
            _0x5db118,
            ((_0x29c7fb = _0x52713f.mapping) == null
              ? undefined
              : _0x29c7fb.categoryIndex) ?? 0,
          ),
        }),
        _0x277cd3 = _0x1ee147(
          {
            unitId: _0x5db118.unitId,
            subUnitId: _0x5db118.subUnitId,
            injector: this.getInject(),
          },
          _0x52713f,
          _0x133e1b,
        ),
        _0x5b2f3f = {
          unitId: _0x5db118.unitId,
          subUnitId: _0x5db118.subUnitId,
          chartId: _0x475df6,
          chartType: _0x5bd2fa,
          source:
            _0x29b362.kind === _0x3378e8.Range
              ? _0x29b362.rangeInfo
              : _0x29b362.ranges,
          position: _0x277cd3,
          width:
            (_0x446683 = _0x52713f.size) == null ? undefined : _0x446683.width,
          height:
            (_0x1da99a = _0x52713f.size) == null ? undefined : _0x1da99a.height,
          theme: _0x52713f.theme ?? undefined,
          config: {
            unitId: _0x5db118.unitId,
            chartModelId: _0x475df6,
            style: _0x36db8a.style,
            context: _0x36db8a.context,
            dataAggregation: _0x36db8a.dataAggregation,
          },
        };
      if (
        !(await this.getInject()
          .get(_0x373b0e)
          .executeCommand(_0x14a0ac.id, _0x5b2f3f))
      )
        throw Error("Failed to create Sheet chart.");
      return this._injector["createInstance"](
        _,
        _0x5db118.unitId,
        _0x5db118.subUnitId,
        _0x475df6,
        this._injector,
      );
    }
    getChart(_0x93839d) {
      let { unitId: _0x565c2a, subUnitId: _0x361ee2 } =
          this._chartSourceContext(),
        _0x2e6a5f = this.getInject().get(_0x367907);
      return _0x2e6a5f.getChartModel(_0x93839d) &&
        _0x2e6a5f.getSubUnitId(_0x565c2a, _0x93839d) === _0x361ee2
        ? this._injector["createInstance"](
            _,
            _0x565c2a,
            _0x361ee2,
            _0x93839d,
            this._injector,
          )
        : null;
    }
    getCharts() {
      let { unitId: _0x492033, subUnitId: _0x2c9b0c } =
        this._chartSourceContext();
      return this.getInject()
        .get(_0x367907)
        .getUnitChartModels(_0x492033, _0x2c9b0c)
        .filter(Boolean)
        .map((_0x5e74ac) =>
          this._injector["createInstance"](
            _,
            _0x492033,
            _0x2c9b0c,
            _0x5e74ac.id,
            this._injector,
          ),
        );
    }
    _chartSourceContext(_0x2eeb02) {
      let _0x2b83b9 = this.getWorkbook(),
        _0x3c7ae8 = this.getInject().get(_0x367907);
      return {
        unitId: _0x2b83b9.getUnitId(),
        subUnitId: this.getSheetId(),
        workbook: _0x2b83b9,
        ...(_0x2eeb02 === undefined
          ? {}
          : {
              inferInitialChartSource: (_0xf81ad1) =>
                _0x3c7ae8.inferInitialChartSource(_0xf81ad1, _0x2eeb02),
            }),
      };
    }
  };
_0x3ff7ef.extend(v);
var y = class extends _0x396a9f {
  get ChartSourceOrientation() {
    return _0x4107c1;
  }
};
_0x396a9f.extend(y);
export { _ as FSheetChart };
