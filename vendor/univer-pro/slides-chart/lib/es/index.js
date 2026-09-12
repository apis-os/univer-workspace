import {
  ChartDataSourceRuntimeStatus as _0x4289ed,
  ChartResourceRepository as _0x3b26b1,
  ChartResourceRuntimeService as _0x5313db,
  DEFAULT_CHART_RESOURCE_HEADER_ROW as _0x3c931b,
  IChartDataSourceRuntimeService as _0x2f8b18,
  ResourceRefChartDataSourceAdapter as _0x334f94,
  UniverChartPlugin as _0xf200df,
  buildChartDataSetFromValues as _0x1f5765,
  buildChartPreviewData as _0x38e9c0,
  buildOrientedChartDataSet as _0x16e103,
  chartConfigInterpreter as _0x3f61bc,
  describeChartModel as _0x228f5b,
  isInlineChartDataSource as _0x2e7b48,
  isReferencedChartDataSource as _0x258adc,
  toChartCreateConfigSnapshot as _0x4c0236,
  toChartModelConfigReplacement as _0x3d086c,
  toChartModelUpdate as _0x3d5237,
} from "@univerjs-pro/engine-chart";
import {
  AddSlideElementMutation as _0x285c92,
  ISlideDrawingService as _0x573acc,
  PageElementTypeEnum as _0xadec59,
  PageTypeEnum as _0x542af4,
  RemoveSlideElementMutation as _0x378c28,
  ReorderSlideElementsCommand as _0x22b4f8,
  UpdateSlideDrawingCommand as _0xf6f199,
  UpdateSlideElementMutation as _0x39f569,
  getSlideCommandTarget as _0x2e529c,
} from "@univerjs-pro/slides";
import {
  CommandType as _0x1ebff9,
  DependentOn as _0x5b3a1b,
  Disposable as _0xf33cfe,
  ICommandService as _0x282d46,
  IConfigService as _0x294784,
  IResourceManagerService as _0x44d384,
  IUndoRedoService as _0xc70347,
  IUniverInstanceService as _0x322b7c,
  Inject as _0x200c13,
  Injector as _0x402a1a,
  Plugin as _0x2b096b,
  Tools as _0x14d175,
  UniverInstanceType as _0x223fab,
  generateRandomId as _0x17d929,
  getDrawingOrderIndex as _0x315efd,
  merge as _0x17660c,
  normalizeDrawingOrderIndex as _0x39ab78,
  sequenceExecute as _0x2341b1,
  touchDependencies as _0x43f091,
} from "@univerjs/core";
import {
  Subject as _0x21b730,
  filter as _0x540d8e,
  firstValueFrom as _0x1e92a3,
} from "rxjs";
import { ShapeLineTypeEnum as _0x3b1b80 } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin as _0x3b6971 } from "@univerjs-pro/license";
var L = class extends _0x3b26b1 {};
const R = {
    id: "slide.mutation.remove-slide-chart-data-source",
    type: _0x1ebff9.MUTATION,
    handler: (_0x15c9e3, _0x2f77b2) =>
      _0x15c9e3
        .get(L)
        .removeDataSource(_0x2f77b2.unitId, _0x2f77b2.dataSourceId),
  },
  z = {
    id: "slide.mutation.set-slide-chart-data-source",
    type: _0x1ebff9.MUTATION,
    handler: (_0x6c3f8a, _0x29c4ad) => (
      _0x6c3f8a.get(L).setDataSource(_0x29c4ad.unitId, _0x29c4ad.dataSource),
      true
    ),
  },
  B = {
    id: "slide.mutation.set-slide-chart-snapshot",
    type: _0x1ebff9.MUTATION,
    handler: (_0x510694, _0x21498a) => (
      _0x510694.get(L).setChart(_0x21498a.unitId, _0x21498a.chart),
      true
    ),
  },
  V = {
    id: "slide.command.change-chart-data-source",
    type: _0x1ebff9.COMMAND,
    handler: (_0x37983a, _0x48801f) => {
      if (!_0x48801f) return false;
      let _0x3c13b9 = _0x2e529c(_0x37983a.get(_0x322b7c), _0x48801f);
      if (!_0x3c13b9) return false;
      let _0x240b60 = _0x37983a.get(L),
        _0x100acc = _0x240b60.getChart(_0x3c13b9.unitId, _0x48801f.chartId),
        _0x1f606b = _0x100acc
          ? _0x240b60.getDataSource(_0x3c13b9.unitId, _0x100acc.dataSourceId)
          : undefined;
      if (!_0x100acc || !_0x1f606b) return false;
      let _0x20cf05 = _0x240b60.isDataSourceShared(
          _0x3c13b9.unitId,
          _0x1f606b.id,
        ),
        _0x13b0f1 = _0x20cf05
          ? (_0x48801f.duplicateDataSourceId ?? _0x17d929())
          : _0x1f606b.id,
        _0x4a446d = pe(
          _0x13b0f1,
          _0x48801f.dataSource,
          _0x48801f.name ?? _0x1f606b.name,
        ),
        _0x2ce840 = _0x37983a.get(_0x282d46),
        _0x4f976b = {
          id: z.id,
          params: { unitId: _0x3c13b9.unitId, dataSource: _0x4a446d },
        },
        _0x5185db = [_0x4f976b],
        _0x2b1161 = [
          {
            id: z.id,
            params: { unitId: _0x3c13b9.unitId, dataSource: _0x1f606b },
          },
        ];
      if (!_0x2ce840.syncExecuteCommand(_0x4f976b.id, _0x4f976b.params))
        return false;
      if (_0x20cf05) {
        let _0x2ece2d = {
            id: B.id,
            params: {
              unitId: _0x3c13b9.unitId,
              chart: { ..._0x100acc, dataSourceId: _0x13b0f1 },
            },
          },
          _0x5ebc16 = {
            id: R.id,
            params: { unitId: _0x3c13b9.unitId, dataSourceId: _0x13b0f1 },
          };
        if (!_0x2ce840.syncExecuteCommand(_0x2ece2d.id, _0x2ece2d.params))
          return (
            _0x2ce840.syncExecuteCommand(_0x5ebc16.id, _0x5ebc16.params),
            false
          );
        (_0x5185db.push(_0x2ece2d),
          _0x2b1161.splice(
            0,
            1,
            {
              id: B.id,
              params: { unitId: _0x3c13b9.unitId, chart: _0x100acc },
            },
            _0x5ebc16,
          ));
      }
      return (
        _0x37983a
          .get(_0xc70347)
          .pushUndoRedo({
            unitID: _0x3c13b9.unitId,
            undoMutations: _0x2b1161,
            redoMutations: _0x5185db,
          }),
        true
      );
    },
  };
function pe(_0x1d073f, _0x4e97ea, _0x2c9482) {
  let _0x153d78 = _0x2e7b48(_0x4e97ea)
    ? { id: _0x1d073f, name: _0x2c9482, values: _0x4e97ea.values }
    : { id: _0x1d073f, name: _0x2c9482, source: _0x4e97ea.source };
  return (_0x153d78.name ?? delete _0x153d78.name, _0x153d78);
}
const H = {
    id: "slide.mutation.remove-slide-chart-snapshot",
    type: _0x1ebff9.MUTATION,
    handler: (_0x672cc8, _0x42c89b) =>
      _0x672cc8
        .get(L)
        .removeChart(_0x42c89b.unitId, _0x42c89b.chartId, {
          cleanupDataSource: _0x42c89b.cleanupDataSource,
        }) != null,
  },
  U = {
    id: "slide.command.remove-slide-chart",
    type: _0x1ebff9.COMMAND,
    handler: (_0x482879, _0x3a7a47) => {
      var _0x4c6800;
      if (!_0x3a7a47) return false;
      let _0xdc45a3 = _0x2e529c(_0x482879.get(_0x322b7c), _0x3a7a47);
      if (!_0xdc45a3) return false;
      let _0x56af44 = _0x482879.get(L),
        _0x4ee412 = _0x482879.get(_0x573acc),
        {
          presentation: _0x46a0e8,
          unitId: _0x27a941,
          subUnitId: _0x36fd18,
        } = _0xdc45a3,
        { chartId: _0x252b03, elementId: _0x4c1cf8 } = _0x3a7a47,
        _0xa83e0e = _0x56af44.getChart(_0x27a941, _0x252b03),
        _0x19844e = _0x4ee412.getDrawingByParam({
          unitId: _0x27a941,
          subUnitId: _0x36fd18,
          drawingId: _0x4c1cf8,
        }),
        _0x41e223 = _0x19844e == null ? undefined : _0x19844e.element;
      if (
        !_0xa83e0e ||
        !_0x41e223 ||
        _0x41e223.type !== _0xadec59.Chart ||
        _0x41e223.chartId !== _0x252b03
      )
        return false;
      let _0x5299db = _0x482879.get(_0x282d46),
        _0x4d61bb = _0x482879.get(_0xc70347),
        _0x1342a0 = _0x56af44.getDataSource(_0x27a941, _0xa83e0e.dataSourceId),
        _0xcbd42f =
          _0x56af44.getDataSourceSharingCount(
            _0x27a941,
            _0xa83e0e.dataSourceId,
          ) <= 1,
        _0x48f732 =
          ((_0x4c6800 = _0x46a0e8.pageManager["getSlide"](_0x36fd18)) == null
            ? undefined
            : _0x4c6800.getData().elementOrder["indexOf"](_0x4c1cf8)) ?? -1,
        _0x2893c5 = {
          unitId: _0x27a941,
          subUnitId: _0x36fd18,
          drawingId: _0x4c1cf8,
        },
        _0x25ab0d = {
          unitId: _0x27a941,
          chartId: _0x252b03,
          cleanupDataSource: _0xcbd42f,
        },
        _0x5d794a = [
          { id: _0x378c28.id, params: _0x2893c5 },
          { id: H.id, params: _0x25ab0d },
        ],
        _0x161895 = [];
      if (_0xcbd42f && _0x1342a0) {
        let _0x3d855d = { unitId: _0x27a941, dataSource: _0x1342a0 };
        _0x161895.push({ id: z.id, params: _0x3d855d });
      }
      let _0x5e0c62 = { unitId: _0x27a941, chart: _0xa83e0e },
        _0x1f916a = {
          unitId: _0x27a941,
          subUnitId: _0x36fd18,
          element: _0x41e223,
          sourcePageType:
            (_0x19844e == null ? undefined : _0x19844e.sourcePageType) ??
            _0x542af4.Slide,
          insertIndex: _0x48f732 >= 0 ? _0x48f732 : undefined,
        },
        _0x17ca11 = [
          ..._0x161895,
          { id: B.id, params: _0x5e0c62 },
          { id: _0x285c92.id, params: _0x1f916a },
        ],
        _0xf95b2b = _0x2341b1(_0x5d794a, _0x5299db);
      return _0xf95b2b.result
        ? (_0x4d61bb.pushUndoRedo({
            unitID: _0x27a941,
            undoMutations: _0x17ca11,
            redoMutations: _0x5d794a,
          }),
          true)
        : (_0xf95b2b.index === 1 &&
            _0x2341b1([{ id: _0x285c92.id, params: _0x1f916a }], _0x5299db),
          false);
    },
  },
  me = Symbol("ReplaceSlideChartConfig");
function he(_0x54727a) {
  return { ..._0x54727a, [me]: true };
}
const W = {
    id: "slide.command.update-slide-chart-config",
    type: _0x1ebff9.COMMAND,
    replaceConfig: he,
    handler: (_0x197d93, _0x423367) => {
      if (!_0x423367) return false;
      let _0xfb6832 = _0x2e529c(_0x197d93.get(_0x322b7c), _0x423367);
      if (!_0xfb6832) return false;
      let { unitId: _0x1939c1 } = _0xfb6832,
        { chartId: _0x48f451 } = _0x423367,
        _0x448953 = _0x423367[me] === true,
        _0x27f7e3 = _0x197d93.get(L).getChart(_0x1939c1, _0x48f451);
      if (!_0x27f7e3) return false;
      let _0x5d99f4 = _0x197d93.get(_0x282d46),
        _0x554970 = _0x197d93.get(_0xc70347),
        _0xc31f7d = _0x3f61bc.apply(_0x27f7e3, _0x423367, _0x448953);
      if (!_0xc31f7d) return false;
      let _0x8b0c33 = { unitId: _0x1939c1, chart: _0xc31f7d },
        _0xdb2f85 = { unitId: _0x1939c1, chart: _0x27f7e3 },
        _0x36fadb = [{ id: B.id, params: _0x8b0c33 }],
        _0x3357a2 = [{ id: B.id, params: _0xdb2f85 }];
      return _0x2341b1(_0x36fadb, _0x5d99f4).result
        ? (_0x554970.pushUndoRedo({
            unitID: _0x1939c1,
            undoMutations: _0x3357a2,
            redoMutations: _0x36fadb,
          }),
          true)
        : false;
    },
  },
  G = {
    id: "slide.command.update-slide-chart-data-source",
    type: _0x1ebff9.COMMAND,
    handler: (_0x48919b, _0x233d24) => {
      if (!_0x233d24) return false;
      let _0x3d143a = _0x2e529c(_0x48919b.get(_0x322b7c), _0x233d24);
      if (!_0x3d143a) return false;
      let { unitId: _0x4fc3ea } = _0x3d143a,
        {
          dataSourceId: _0x1245c9,
          values: _0x405679,
          name: _0x142df0,
        } = _0x233d24,
        _0x52af8a = _0x48919b.get(L).getDataSource(_0x4fc3ea, _0x1245c9);
      if (!_0x52af8a) return false;
      let _0xffc369 = _0x48919b.get(_0x282d46),
        _0x51c5f8 = _0x48919b.get(_0xc70347),
        _0x25050e = {
          unitId: _0x4fc3ea,
          dataSource: {
            id: _0x1245c9,
            values: _0x405679,
            name: _0x142df0 ?? _0x52af8a.name,
          },
        },
        _0x3123b4 = { unitId: _0x4fc3ea, dataSource: _0x52af8a },
        _0x23f7b6 = [{ id: z.id, params: _0x25050e }],
        _0x2b520a = [{ id: z.id, params: _0x3123b4 }];
      return _0x2341b1(_0x23f7b6, _0xffc369).result
        ? (_0x51c5f8.pushUndoRedo({
            unitID: _0x4fc3ea,
            undoMutations: _0x2b520a,
            redoMutations: _0x23f7b6,
          }),
          true)
        : false;
    },
  };
function K(_0x6f881a) {
  "@babel/helpers - typeof";
  return (
    (K =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5ec075) {
            return typeof _0x5ec075;
          }
        : function (_0x507146) {
            return _0x507146 &&
              typeof Symbol == "function" &&
              _0x507146.constructor === Symbol &&
              _0x507146 !== Symbol.prototype
              ? "symbol"
              : typeof _0x507146;
          }),
    K(_0x6f881a)
  );
}
function ge(_0x4152f9, _0x2a7d5f) {
  if (K(_0x4152f9) != "object" || !_0x4152f9) return _0x4152f9;
  var _0x1de364 = _0x4152f9[Symbol.toPrimitive];
  if (_0x1de364 !== undefined) {
    var _0x526f15 = _0x1de364.call(_0x4152f9, _0x2a7d5f || "default");
    if (K(_0x526f15) != "object") return _0x526f15;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x2a7d5f === "string" ? String : Number)(_0x4152f9);
}
function _e(_0x36b04a) {
  var _0x240681 = ge(_0x36b04a, "string");
  return K(_0x240681) == "symbol" ? _0x240681 : _0x240681 + "";
}
function q(_0x17180d, _0x51bb9f, _0x432b2d) {
  return (
    (_0x51bb9f = _e(_0x51bb9f)) in _0x17180d
      ? Object.defineProperty(_0x17180d, _0x51bb9f, {
          value: _0x432b2d,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x17180d[_0x51bb9f] = _0x432b2d),
    _0x17180d
  );
}
function J(_0xc884e, _0x1e56e5) {
  return function (_0xee4480, _0x19a92d) {
    _0x1e56e5(_0xee4480, _0x19a92d, _0xc884e);
  };
}
function Y(_0x1003ad, _0x5825e6, _0x327dd6, _0x34ecd) {
  var _0xc1ff61 = arguments.length,
    _0xbfe604 =
      _0xc1ff61 < 3
        ? _0x5825e6
        : _0x34ecd === null
          ? (_0x34ecd = Object.getOwnPropertyDescriptor(_0x5825e6, _0x327dd6))
          : _0x34ecd,
    _0x5cc3da;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xbfe604 = Reflect.decorate(_0x1003ad, _0x5825e6, _0x327dd6, _0x34ecd);
  else {
    for (var _0x3cda38 = _0x1003ad.length - 1; _0x3cda38 >= 0; _0x3cda38--)
      (_0x5cc3da = _0x1003ad[_0x3cda38]) &&
        (_0xbfe604 =
          (_0xc1ff61 < 3
            ? _0x5cc3da(_0xbfe604)
            : _0xc1ff61 > 3
              ? _0x5cc3da(_0x5825e6, _0x327dd6, _0xbfe604)
              : _0x5cc3da(_0x5825e6, _0x327dd6)) || _0xbfe604);
  }
  return (
    _0xc1ff61 > 3 &&
      _0xbfe604 &&
      Object.defineProperty(_0x5825e6, _0x327dd6, _0xbfe604),
    _0xbfe604
  );
}
let X = class extends _0x5313db {
  constructor(_0x4b1ff5, _0x2f2978, _0x5250b5) {
    (super(_0x4b1ff5, _0x2f2978, _0x1f5765, _0x5250b5),
      q(this, "_chartDataUpdated$", new _0x21b730()),
      q(this, "chartDataUpdated$", this._chartDataUpdated$["asObservable"]()));
  }
  dispose() {
    (this._chartDataUpdated$["complete"](), super.dispose());
  }
  _beforeRuntimeRefresh(_0x515f3a) {
    this._chartDataUpdated$["next"](_0x515f3a.chartId);
  }
};
X = Y(
  [J(0, _0x200c13(L)), J(1, _0x200c13(_0x402a1a)), J(2, _0x200c13(_0x2f8b18))],
  X,
);
var ve = class {
  constructor(_0x5dcbf9) {
    this._context = _0x5dcbf9;
  }
  describe(_0x309741 = {}, _0x216b12) {
    var _0x3a7a3b, _0x361af0;
    let {
        chartId: _0x524a04,
        elementId: _0x569838,
        injector: _0x302876,
        slideModel: _0x3fb9d1,
        subUnitId: _0x5cfcf4,
        unitId: _0x37bbb8,
      } = this._context,
      _0x5843fc = _0x302876.get(X).ensureChartModel(_0x37bbb8, _0x524a04),
      _0x50e7a9 = _0x302876.get(L).getChart(_0x37bbb8, _0x524a04),
      _0x2530ed = _0x50e7a9
        ? _0x302876.get(L).getDataSource(_0x37bbb8, _0x50e7a9.dataSourceId)
        : null,
      _0x273d7e =
        (_0x3a7a3b = _0x3fb9d1.getSnapshot().slides[_0x5cfcf4]) == null
          ? undefined
          : _0x3a7a3b.elements[_0x569838];
    if (!_0x5843fc || !_0x2530ed || !_0x273d7e)
      throw Error("Chart not found: " + _0x524a04);
    let _0x3868ec =
      ((_0x361af0 = _0x3fb9d1.getSnapshot().slides[_0x5cfcf4]) == null
        ? undefined
        : _0x361af0.elementOrder["indexOf"](_0x569838)) ?? -1;
    return {
      ..._0x228f5b(_0x5843fc.model, _0x309741, _0x216b12),
      id: _0x524a04,
      position: {
        x: _0x273d7e.transform["left"] ?? 0,
        y: _0x273d7e.transform["top"] ?? 0,
      },
      size: {
        width: _0x273d7e.transform["width"] ?? 0,
        height: _0x273d7e.transform["height"] ?? 0,
      },
      placeholder: _0x14d175.deepClone(_0x273d7e.placeholder),
      stroke: _0x14d175.deepClone(_0x273d7e.stroke),
      zOrder: _0x3868ec < 0 ? undefined : _0x3868ec,
    };
  }
  getInfo() {
    let _0x440871 = this.describe(),
      _0x58ced6 = this.getDataSource();
    if (!_0x58ced6)
      throw Error("Chart data source not found: " + this._context["chartId"]);
    return {
      config: _0x4c0236(_0x440871),
      dataSource: _0x2e7b48(_0x58ced6)
        ? { values: _0x14d175.deepClone(_0x58ced6.values) }
        : _0x258adc(_0x58ced6)
          ? { source: _0x14d175.deepClone(_0x58ced6.source) }
          : (() => {
              throw Error(
                "Invalid Chart data source: " + this._context["chartId"],
              );
            })(),
      position: _0x14d175.deepClone(_0x440871.position),
      size: _0x14d175.deepClone(_0x440871.size),
      placeholder: _0x14d175.deepClone(_0x440871.placeholder),
      stroke: _0x14d175.deepClone(_0x440871.stroke),
      zOrder: _0x440871.zOrder,
    };
  }
  getData() {
    let {
        chartId: _0x284d0b,
        injector: _0x398b71,
        unitId: _0x4c61ee,
      } = this._context,
      _0x461b48 = _0x398b71.get(L).getChart(_0x4c61ee, _0x284d0b),
      _0x4416c2 = _0x461b48
        ? _0x398b71.get(L).getDataSource(_0x4c61ee, _0x461b48.dataSourceId)
        : null;
    return _0x2e7b48(_0x4416c2) ? _0x4416c2.values : null;
  }
  getDataSource() {
    let {
        chartId: _0x44a4d4,
        injector: _0x5bd8f2,
        unitId: _0x16c32d,
      } = this._context,
      _0x259082 = _0x5bd8f2.get(L).getChart(_0x16c32d, _0x44a4d4);
    return (
      (_0x259082
        ? _0x5bd8f2.get(L).getDataSource(_0x16c32d, _0x259082.dataSourceId)
        : null) ?? null
    );
  }
  async commitDataSource(_0x445ab2) {
    let { injector: _0x283438 } = this._context,
      _0x13392a = _0x258adc(_0x445ab2) ? _0x445ab2.source : undefined,
      _0xbde708 = _0x13392a
        ? _0x283438.get(_0x2f8b18).acquire(_0x13392a)
        : null;
    try {
      if (_0xbde708) {
        let _0x4f4f6a = await _0x1e92a3(
          _0xbde708.state$["pipe"](
            _0x540d8e(
              ({ status: _0x1dd168 }) => _0x1dd168 !== _0x4289ed.LOADING,
            ),
          ),
        );
        if (_0x4f4f6a.status !== _0x4289ed.READY)
          throw _0x4f4f6a.error instanceof Error
            ? _0x4f4f6a.error
            : Error(_0x13392a == null ? undefined : _0x13392a.kind);
      }
      this._commitDataSource(_0x445ab2);
    } finally {
      _0xbde708 == null || _0xbde708.dispose();
    }
  }
  async commitChanges(_0x39207e, _0x190ade, _0x36f7fe, _0x1f7b9b = false) {
    let { injector: _0x450e78 } = this._context,
      _0x51cafc = _0x258adc(_0x39207e) ? _0x39207e.source : undefined,
      _0x3444cf = _0x51cafc
        ? _0x450e78.get(_0x2f8b18).acquire(_0x51cafc)
        : null;
    try {
      if (_0x3444cf) {
        let _0xbdad80 = await _0x1e92a3(
          _0x3444cf.state$["pipe"](
            _0x540d8e(
              ({ status: _0x59c781 }) => _0x59c781 !== _0x4289ed.LOADING,
            ),
          ),
        );
        if (_0xbdad80.status !== _0x4289ed.READY)
          throw _0xbdad80.error instanceof Error
            ? _0xbdad80.error
            : Error(_0x51cafc == null ? undefined : _0x51cafc.kind);
      }
      (Object.keys(_0x190ade).length > 0 &&
        (_0x1f7b9b ? this._replaceConfig(_0x190ade) : this.commit(_0x190ade)),
        Object.keys(_0x36f7fe).length > 0 && this.commitHost(_0x36f7fe),
        _0x39207e && this._commitDataSource(_0x39207e));
    } finally {
      _0x3444cf == null || _0x3444cf.dispose();
    }
  }
  refreshDataSource() {
    let {
      chartId: _0x2a0cbf,
      injector: _0x3619e3,
      unitId: _0x2454c9,
    } = this._context;
    return _0x3619e3.get(X).refreshChartDataSource(_0x2454c9, _0x2a0cbf);
  }
  commit(_0x17623c) {
    var _0x12d192;
    let {
        chartId: _0x5835ea,
        injector: _0xd04bf9,
        unitId: _0x11d93f,
      } = this._context,
      _0x5e8692 = _0xd04bf9.get(X).ensureChartModel(_0x11d93f, _0x5835ea);
    if (!_0x5e8692) throw Error("Chart\x20not\x20found:\x20" + _0x5835ea);
    let _0x208a06 = _0x3d5237(_0x17623c, {
      series:
        (_0x12d192 = _0x5e8692.model["config"]) == null
          ? undefined
          : _0x12d192.series,
      currentChartType: _0x5e8692.model["chartType"],
      currentStyle: _0x5e8692.model["style"],
      currentContext: _0x5e8692.model["context"],
      currentDataAggregation: _0x5e8692.model["dataAggregation"],
    });
    if (
      !_0xd04bf9
        .get(_0x282d46)
        .syncExecuteCommand(
          W.id,
          W.replaceConfig({
            unitId: _0x11d93f,
            chartId: _0x5835ea,
            ..._0x208a06,
          }),
        )
    )
      throw Error("Failed to update Slide chart configuration.");
  }
  update(_0x3cedce) {
    let _0x38f57f = {};
    return (
      _0x3cedce.position !== undefined &&
        (_0x38f57f.position = _0x3cedce.position),
      _0x3cedce.size !== undefined && (_0x38f57f.size = _0x3cedce.size),
      Object.prototype["hasOwnProperty"].call(_0x3cedce, "placeholder") &&
        (_0x38f57f.placeholder = _0x3cedce.placeholder),
      Object.prototype["hasOwnProperty"].call(_0x3cedce, "stroke") &&
        (_0x38f57f.stroke = _0x3cedce.stroke),
      _0x3cedce.zOrder !== undefined && (_0x38f57f.zOrder = _0x3cedce.zOrder),
      this.commitChanges(
        _0x3cedce.dataSource,
        _0x3cedce.config,
        _0x38f57f,
        true,
      )
    );
  }
  _replaceConfig(_0x2d1591) {
    var _0x49539e;
    let {
        chartId: _0x2a3dc1,
        injector: _0x7c977a,
        unitId: _0x4b463b,
      } = this._context,
      _0x374cf4 = _0x7c977a.get(X).ensureChartModel(_0x4b463b, _0x2a3dc1);
    if (!_0x374cf4) throw Error("Chart not found: " + _0x2a3dc1);
    let _0x283b83 = _0x3d086c(_0x2d1591, {
      series:
        (_0x49539e = _0x374cf4.model["config"]) == null
          ? undefined
          : _0x49539e.series,
      currentStyle: _0x374cf4.model["style"],
    });
    if (
      !_0x7c977a
        .get(_0x282d46)
        .syncExecuteCommand(
          W.id,
          W.replaceConfig({
            unitId: _0x4b463b,
            chartId: _0x2a3dc1,
            ..._0x283b83,
          }),
        )
    )
      throw Error("Failed to update Slide chart configuration.");
  }
  setDataSource(_0x60f737) {
    return this.commitDataSource(
      Array.isArray(_0x60f737)
        ? { values: _0x60f737 }
        : { source: _0x334f94.toReference(_0x60f737) },
    );
  }
  setAbsolutePosition(_0x1283a4, _0x51c40b) {
    this.commitHost({ position: { x: _0x1283a4, y: _0x51c40b } });
  }
  setSize(_0x177b80, _0x4bc3e4) {
    this.commitHost({ size: { width: _0x177b80, height: _0x4bc3e4 } });
  }
  arrange(_0xbe2a13) {
    var _0xcd73f0;
    let {
        elementId: _0x4d89f9,
        slideModel: _0x58c539,
        subUnitId: _0x333b1d,
      } = this._context,
      _0x4e1aa2 =
        ((_0xcd73f0 = _0x58c539.getSnapshot().slides[_0x333b1d]) == null
          ? undefined
          : _0xcd73f0.elementOrder) ?? [],
      _0x182c03 = _0x4e1aa2.indexOf(_0x4d89f9);
    if (_0x182c03 < 0)
      throw Error("Slide\x20chart\x20element\x20not\x20found:\x20" + _0x4d89f9);
    this.setZOrder(_0x315efd(_0x182c03, _0x4e1aa2.length, _0xbe2a13));
  }
  setZOrder(_0x17e930) {
    this._commitZOrder(_0x17e930);
  }
  resolveData(_0x3c9ba3, _0x240fd8) {
    let {
        chartId: _0x1d23fb,
        injector: _0x3283e8,
        unitId: _0x4f8d16,
      } = this._context,
      _0x5d8f32 = _0x3283e8.get(X).ensureChartModel(_0x4f8d16, _0x1d23fb);
    if (!_0x5d8f32) throw Error("Chart\x20not\x20found:\x20" + _0x1d23fb);
    return _0x38e9c0(_0x5d8f32.model, _0x3c9ba3, _0x240fd8);
  }
  resolveDataSet(_0x220e73) {
    var _0x8e0e6b, _0x48417d;
    let {
        chartId: _0x3f8205,
        injector: _0x1b3117,
        unitId: _0x2f7c75,
      } = this._context,
      _0x46d459 = _0x1b3117.get(X).ensureChartModel(_0x2f7c75, _0x3f8205),
      _0x9d72a8 = _0x1b3117.get(L).getChart(_0x2f7c75, _0x3f8205);
    if (!_0x46d459 || !_0x9d72a8) throw Error("Chart not found: " + _0x3f8205);
    return _0x16e103(_0x220e73, {
      headerRow:
        ((_0x8e0e6b = _0x9d72a8.context) == null
          ? undefined
          : _0x8e0e6b.headerRow) ?? _0x3c931b,
      isRowDirection:
        ((_0x48417d = _0x9d72a8.context) == null
          ? undefined
          : _0x48417d.orient) !== "column",
    });
  }
  commitHost(_0x28b9d5) {
    let {
        chartId: _0x17f8f9,
        elementId: _0x48816d,
        injector: _0x511f5d,
        slideModel: _0x47c207,
        subUnitId: _0x232a74,
        unitId: _0x421aee,
      } = this._context,
      _0x3659ec = _0x511f5d.get(_0x282d46);
    if (_0x28b9d5.data !== undefined) {
      let _0xdfdaee = _0x511f5d.get(L).getChart(_0x421aee, _0x17f8f9);
      if (
        !_0xdfdaee ||
        !_0x3659ec.syncExecuteCommand(G.id, {
          unitId: _0x421aee,
          dataSourceId: _0xdfdaee.dataSourceId,
          values: _0x28b9d5.data ?? [],
        })
      )
        throw Error("Failed to update Slide chart data.");
    }
    if (
      _0x28b9d5.position ||
      _0x28b9d5.size ||
      "placeholder" in _0x28b9d5 ||
      "stroke" in _0x28b9d5
    ) {
      var _0x31fe28;
      let _0x1d0659 =
        (_0x31fe28 = _0x47c207.getSnapshot().slides[_0x232a74]) == null
          ? undefined
          : _0x31fe28.elements[_0x48816d];
      if (!_0x1d0659)
        throw Error("Slide chart element not found: " + _0x48816d);
      let _0x254b64 = {
        ..._0x1d0659,
        transform: {
          ..._0x1d0659.transform,
          ...(_0x28b9d5.position
            ? { left: _0x28b9d5.position["x"], top: _0x28b9d5.position["y"] }
            : {}),
          ...(_0x28b9d5.size
            ? {
                width: _0x28b9d5.size["width"],
                height: _0x28b9d5.size["height"],
              }
            : {}),
        },
        ...("placeholder" in _0x28b9d5
          ? { placeholder: _0x28b9d5.placeholder }
          : {}),
        ...("stroke" in _0x28b9d5 ? { stroke: _0x28b9d5.stroke } : {}),
      };
      if (
        !ye(_0x1d0659, _0x254b64) &&
        !_0x3659ec.syncExecuteCommand(_0xf6f199.id, {
          patches: [
            {
              unitId: _0x421aee,
              subUnitId: _0x232a74,
              drawingId: _0x48816d,
              element: _0x254b64,
            },
          ],
        })
      )
        throw Error("Failed to update Slide chart element.");
    }
    this._commitZOrder(_0x28b9d5.zOrder);
  }
  remove() {
    let {
      chartId: _0xc44fac,
      elementId: _0x308f61,
      injector: _0x108125,
      subUnitId: _0x1aece0,
      unitId: _0x581459,
    } = this._context;
    return _0x108125
      .get(_0x282d46)
      .syncExecuteCommand(U.id, {
        unitId: _0x581459,
        subUnitId: _0x1aece0,
        chartId: _0xc44fac,
        elementId: _0x308f61,
      });
  }
  _commitDataSource(_0x37f1ad) {
    let {
      chartId: _0xad9287,
      injector: _0x39d985,
      unitId: _0x5709ff,
    } = this._context;
    if (
      !_0x39d985
        .get(_0x282d46)
        .syncExecuteCommand(V.id, {
          unitId: _0x5709ff,
          chartId: _0xad9287,
          dataSource: _0x37f1ad,
        })
    )
      throw Error(V.id);
  }
  _commitZOrder(_0x489838) {
    if (_0x489838 === undefined) return;
    let {
        elementId: _0x46b68a,
        injector: _0x14f476,
        slideModel: _0x34ac76,
        subUnitId: _0x46c38b,
        unitId: _0x278508,
      } = this._context,
      _0x73782c = _0x34ac76.getSnapshot().slides[_0x46c38b];
    if (!_0x73782c) throw Error("Slide\x20not\x20found:\x20" + _0x46c38b);
    let _0x10a7af = _0x73782c.elementOrder["filter"](
      (_0x4937df) => _0x4937df !== _0x46b68a,
    );
    if (
      (_0x10a7af.splice(
        _0x39ab78(_0x489838, _0x73782c.elementOrder["length"]),
        0,
        _0x46b68a,
      ),
      !_0x10a7af.every(
        (_0x332c8e, _0x18cbe9) =>
          _0x332c8e === _0x73782c.elementOrder[_0x18cbe9],
      ) &&
        !_0x14f476
          .get(_0x282d46)
          .syncExecuteCommand(_0x22b4f8.id, {
            unitId: _0x278508,
            subUnitId: _0x46c38b,
            drawingIds: _0x10a7af,
          }))
    )
      throw Error("Failed to update Slide chart z-order.");
  }
};
function ye(_0x3b6569, _0x7b0e5) {
  return JSON.stringify(be(_0x3b6569)) === JSON.stringify(be(_0x7b0e5));
}
function be(_0x1ae94f) {
  let _0x2c5b82 = _0x14d175.deepClone(_0x1ae94f);
  return (
    (_0x2c5b82.transform = {
      ..._0x2c5b82.transform,
      left: _0x2c5b82.transform["left"] ?? 0,
      top: _0x2c5b82.transform["top"] ?? 0,
      width: _0x2c5b82.transform["width"] ?? 0,
      height: _0x2c5b82.transform["height"] ?? 0,
      rotation: _0x2c5b82.transform["rotation"] ?? 0,
      flipX: _0x2c5b82.transform["flipX"] ?? false,
      flipY: _0x2c5b82.transform["flipY"] ?? false,
    }),
    _0x2c5b82
  );
}
const xe = {
    id: "slide.command.duplicate-slide-data-source",
    type: _0x1ebff9.COMMAND,
    handler: (_0x55a487, _0x4e28ab) => {
      if (!_0x4e28ab) return false;
      let _0x12a3f5 = _0x2e529c(_0x55a487.get(_0x322b7c), _0x4e28ab);
      if (!_0x12a3f5) return false;
      let { unitId: _0x3d5750 } = _0x12a3f5,
        { chartId: _0x5cb7c1, duplicateDataSourceId: _0x47d12a } = _0x4e28ab,
        _0x80456e = _0x55a487.get(L),
        _0xe3cac3 = _0x80456e.getChart(_0x3d5750, _0x5cb7c1),
        _0x32852a = _0xe3cac3
          ? _0x80456e.getDataSource(_0x3d5750, _0xe3cac3.dataSourceId)
          : undefined,
        _0x47fd98 = _0x80456e.duplicateDataSourceForChart(
          _0x3d5750,
          _0x5cb7c1,
          _0x47d12a,
        );
      if (!_0xe3cac3 || !_0x32852a || !_0x47fd98) return false;
      let _0x5ddcbe = _0x55a487.get(_0x282d46),
        _0x4a1c7d = _0x55a487.get(_0xc70347),
        _0x507100 = { unitId: _0x3d5750, dataSource: _0x47fd98 },
        _0x14cde4 = { unitId: _0x3d5750, dataSourceId: _0x47fd98.id },
        _0x2e9ff8 = {
          unitId: _0x3d5750,
          chart: { ..._0xe3cac3, dataSourceId: _0x47fd98.id },
        },
        _0xee8486 = { unitId: _0x3d5750, chart: _0xe3cac3 },
        _0x43d980 = [
          { id: z.id, params: _0x507100 },
          { id: B.id, params: _0x2e9ff8 },
        ],
        _0x37316b = [
          { id: B.id, params: _0xee8486 },
          { id: R.id, params: _0x14cde4 },
        ];
      return _0x2341b1(_0x43d980, _0x5ddcbe).result
        ? (_0x4a1c7d.pushUndoRedo({
            unitID: _0x3d5750,
            undoMutations: _0x37316b,
            redoMutations: _0x43d980,
          }),
          true)
        : false;
    },
  },
  Se = 120,
  Ce = 80,
  we = 480,
  Te = 320,
  Ee = [
    ["Category", "Value"],
    ["A", 12],
    ["B", 18],
    ["C", 9],
  ],
  De = {
    lineStrokeType: _0x3b1b80.SolidLine,
    width: 1,
    color: "#d1d5db",
    opacity: 1,
  },
  Z = {
    id: "slide.command.insert-slide-chart",
    type: _0x1ebff9.COMMAND,
    handler: (_0x1970a9, _0x3c8fea) => {
      var _0x2ecb11;
      if (!_0x3c8fea) return false;
      let _0x319743 = _0x2e529c(_0x1970a9.get(_0x322b7c), _0x3c8fea);
      if (!_0x319743) return false;
      let _0xda92f4 = _0x14d175.deepClone(_0x3c8fea.chart);
      if (!_0xda92f4.chartType) return false;
      ((_0xda92f4.id ||= _0x17d929(6)),
        (_0xda92f4.context = {
          ..._0xda92f4.context,
          headerRow:
            ((_0x2ecb11 = _0xda92f4.context) == null
              ? undefined
              : _0x2ecb11.headerRow) ?? _0x3c931b,
        }));
      let _0x13a6ce = _0x1970a9.get(_0x573acc),
        _0x1f3ebc = _0x1970a9.get(_0x282d46),
        _0x2685fe = _0x1970a9.get(_0xc70347),
        { unitId: _0x25e2d5, subUnitId: _0x2117a3 } = _0x319743,
        {
          element: _0x5ee2b4,
          replaceElementId: _0x16283c,
          insertIndex: _0x4fe86b,
          focus: _0x18ec63,
        } = _0x3c8fea,
        _0x4bae45 = Oe(_0x3c8fea.dataSource);
      _0xda92f4.dataSourceId = _0x4bae45.id;
      let _0x364f78 = ke({
        unitId: _0x25e2d5,
        subUnitId: _0x2117a3,
        chartId: _0xda92f4.id,
        element: _0x5ee2b4,
        replaceElementId: _0x16283c,
        insertIndex: _0x4fe86b,
        slideDrawingService: _0x13a6ce,
      });
      if (!_0x364f78) return false;
      let _0x3ef10e = { unitId: _0x25e2d5, dataSource: _0x4bae45 },
        _0x59c636 = { unitId: _0x25e2d5, chart: _0xda92f4 },
        _0x22e66e = [
          { id: z.id, params: _0x3ef10e },
          { id: B.id, params: _0x59c636 },
          _0x364f78.redoMutation,
        ],
        _0x1d2afa = {
          unitId: _0x25e2d5,
          chartId: _0xda92f4.id,
          cleanupDataSource: true,
        },
        _0x2d3f8c = { unitId: _0x25e2d5, dataSourceId: _0x4bae45.id },
        _0x9e6bac = [
          _0x364f78.undoMutation,
          { id: H.id, params: _0x1d2afa },
          { id: R.id, params: _0x2d3f8c },
        ],
        _0x491e35 = _0x2341b1(_0x22e66e, _0x1f3ebc);
      return _0x491e35.result
        ? (_0x18ec63 !== false &&
            _0x13a6ce.focusDrawing([
              {
                unitId: _0x25e2d5,
                subUnitId: _0x2117a3,
                drawingId: _0x364f78.elementId,
              },
            ]),
          _0x2685fe.pushUndoRedo({
            unitID: _0x25e2d5,
            undoMutations: _0x9e6bac,
            redoMutations: _0x22e66e,
          }),
          true)
        : (_0x2341b1(
            _0x491e35.index === 1
              ? [{ id: R.id, params: _0x2d3f8c }]
              : _0x491e35.index === 2
                ? [
                    { id: H.id, params: _0x1d2afa },
                    { id: R.id, params: _0x2d3f8c },
                  ]
                : [],
            _0x1f3ebc,
          ),
          false);
    },
  };
function Oe(_0x202e45) {
  let _0x5cee97 =
      (_0x202e45 == null ? undefined : _0x202e45.id) ?? _0x17d929(6),
    _0x6d3625 = _0x202e45 == null ? undefined : _0x202e45.name,
    _0xe2557c =
      _0x202e45 != null && _0x202e45.source
        ? { id: _0x5cee97, name: _0x6d3625, source: _0x202e45.source }
        : {
            id: _0x5cee97,
            name: _0x6d3625,
            values: (
              (_0x202e45 == null ? undefined : _0x202e45.values) ?? Ee
            ).map((_0x1a1a5d) => [..._0x1a1a5d]),
          };
  return (_0xe2557c.name ?? delete _0xe2557c.name, _0xe2557c);
}
function ke(_0x5a1f9f) {
  let {
      unitId: _0x4af3b0,
      subUnitId: _0x4a90a1,
      chartId: _0x45368b,
      replaceElementId: _0x2d1147,
      insertIndex: _0x31a11a,
      slideDrawingService: _0x5513b3,
    } = _0x5a1f9f,
    _0x26927d = _0x5a1f9f.element ? _0x14d175.deepClone(_0x5a1f9f.element) : {},
    {
      stroke: _0x399f17,
      transform: _0x22dc6d,
      placeholder: _0x11a2d6,
    } = _0x26927d;
  if (_0x2d1147) {
    let _0xfe6bf9 = _0x5513b3.getDrawingByParam({
      unitId: _0x4af3b0,
      subUnitId: _0x4a90a1,
      drawingId: _0x2d1147,
    });
    if (
      (_0xfe6bf9 == null ? undefined : _0xfe6bf9.sourcePageType) !==
      _0x542af4.Slide
    )
      return null;
    let _0x23faf8 = Ae({
        chartId: _0x45368b,
        elementId: _0x2d1147,
        stroke: _0x399f17,
        transform: _0x22dc6d,
        placeholder: _0x11a2d6,
      }),
      _0x5dcfb1 = {
        unitId: _0x4af3b0,
        subUnitId: _0x4a90a1,
        drawingId: _0x2d1147,
        element: _0x23faf8,
        transform: _0x23faf8.transform,
      },
      _0x1f587b = {
        unitId: _0x4af3b0,
        subUnitId: _0x4a90a1,
        drawingId: _0x2d1147,
        element: _0xfe6bf9.element,
        transform: _0xfe6bf9.transform,
      };
    return {
      elementId: _0x2d1147,
      redoMutation: { id: _0x39f569.id, params: _0x5dcfb1 },
      undoMutation: { id: _0x39f569.id, params: _0x1f587b },
    };
  }
  _0x26927d.id ||= _0x17d929(6);
  let _0x4c5de5 = {
      unitId: _0x4af3b0,
      subUnitId: _0x4a90a1,
      element: Ae({
        chartId: _0x45368b,
        elementId: _0x26927d.id,
        stroke: _0x399f17,
        transform: _0x22dc6d,
        placeholder: _0x11a2d6,
      }),
      insertIndex: _0x31a11a,
    },
    _0x4b919f = {
      unitId: _0x4af3b0,
      subUnitId: _0x4a90a1,
      drawingId: _0x26927d.id,
    };
  return {
    elementId: _0x26927d.id,
    redoMutation: { id: _0x285c92.id, params: _0x4c5de5 },
    undoMutation: { id: _0x378c28.id, params: _0x4b919f },
  };
}
function Ae(_0x137705) {
  let {
      chartId: _0x190346,
      elementId: _0x4a73cc,
      stroke: _0x4ab1c8,
      transform: _0x2938e7,
      placeholder: _0x1d4d9e,
    } = _0x137705,
    _0xdc9d99 = {
      id: _0x4a73cc,
      type: _0xadec59.Chart,
      chartId: _0x190346,
      stroke: _0x4ab1c8 ?? De,
      transform: {
        left: (_0x2938e7 == null ? undefined : _0x2938e7.left) ?? 120,
        top: (_0x2938e7 == null ? undefined : _0x2938e7.top) ?? 80,
        width: (_0x2938e7 == null ? undefined : _0x2938e7.width) ?? 480,
        height: (_0x2938e7 == null ? undefined : _0x2938e7.height) ?? 320,
        rotation: (_0x2938e7 == null ? undefined : _0x2938e7.rotation) ?? 0,
      },
    };
  return (_0x1d4d9e && (_0xdc9d99.placeholder = _0x1d4d9e), _0xdc9d99);
}
const je = {
  id: "slide.command.update-slide-chart-snapshot",
  type: _0x1ebff9.COMMAND,
  handler: (_0xc423cf, _0xc13f35) => {
    if (!_0xc13f35) return false;
    let _0x504604 = _0x2e529c(_0xc423cf.get(_0x322b7c), _0xc13f35);
    if (!_0x504604) return false;
    let { unitId: _0x57dd6d } = _0x504604,
      { chartId: _0x1fb43d, patch: _0x4246fc } = _0xc13f35,
      _0x3d0e5d = _0xc423cf.get(L).getChart(_0x57dd6d, _0x1fb43d);
    if (!_0x3d0e5d) return false;
    let _0x35a6aa = _0xc423cf.get(_0x282d46),
      _0x6eef59 = _0xc423cf.get(_0xc70347),
      _0xec8333 = { unitId: _0x57dd6d, chart: { ..._0x3d0e5d, ..._0x4246fc } },
      _0x5f3e25 = { unitId: _0x57dd6d, chart: _0x3d0e5d },
      _0x87c6da = [{ id: B.id, params: _0xec8333 }],
      _0x1d0de1 = [{ id: B.id, params: _0x5f3e25 }];
    return _0x2341b1(_0x87c6da, _0x35a6aa).result
      ? (_0x6eef59.pushUndoRedo({
          unitID: _0x57dd6d,
          undoMutations: _0x1d0de1,
          redoMutations: _0x87c6da,
        }),
        true)
      : false;
  },
};
var Me = "@univerjs-pro/slides-chart",
  Ne = "1.0.0-insiders.20260907-70fc579";
const Pe = {};
let Q = class extends _0xf33cfe {
  constructor(_0x4a5a7e, _0x97d09a, _0x5a7aa9) {
    (super(),
      (this._resourceManagerService = _0x4a5a7e),
      (this._resourceService = _0x97d09a),
      (this._modelService = _0x5a7aa9),
      q(this, "_resourceDisposable", null),
      this._initResource());
  }
  _initResource() {
    ((this._resourceDisposable = this._resourceManagerService[
      "registerPluginResource"
    ]({
      pluginName: "SLIDE_CHART_PLUGIN",
      businesses: [_0x223fab.UNIVER_SLIDE],
      toJson: (_0x3e99f8) => this._resourceService["serializeUnit"](_0x3e99f8),
      parseJson: (_0x13d0d7) => JSON.parse(_0x13d0d7),
      onLoad: (_0x2e48d9, _0x3dc221) => {
        this._resourceService["loadUnit"](_0x2e48d9, _0x3dc221);
      },
      onUnLoad: (_0x19b71b) => {
        (this._modelService["removeUnit"](_0x19b71b),
          this._resourceService["unloadUnit"](_0x19b71b));
      },
    })),
      this.disposeWithMe(this._resourceDisposable));
  }
};
Q = Y([J(0, _0x44d384), J(1, _0x200c13(L)), J(2, _0x200c13(X))], Q);
let $ = class extends _0x2b096b {
  constructor(_0x39492b = Pe, _0x1f867e, _0x430213, _0x43c2f4) {
    (super(),
      (this._config = _0x39492b),
      (this._injector = _0x1f867e),
      (this._configService = _0x430213),
      (this._commandService = _0x43c2f4));
    let { ..._0x57070b } = _0x17660c({}, Pe, this._config);
    (this._configService["setConfig"]("slides-chart.config", _0x57070b),
      this._initCommands());
  }
  onStarting() {
    let _0x52d322 = this._injector;
    ([[L], [X], [Q]].forEach((_0x2d6438) => _0x52d322.add(_0x2d6438)),
      _0x43f091(_0x52d322, [[L], [X], [Q]]));
  }
  _initCommands() {
    [Z, V, je, G, W, xe, U, z, R, B, H].forEach((_0x159081) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x159081));
    });
  }
};
(q($, "type", _0x223fab.UNIVER_SLIDE),
  q($, "pluginName", "UniverSlidesChartPlugin"),
  q($, "packageName", Me),
  q($, "version", Ne),
  ($ = Y(
    [
      _0x5b3a1b(_0xf200df, _0x3b6971),
      J(1, _0x200c13(_0x402a1a)),
      J(2, _0x294784),
      J(3, _0x282d46),
    ],
    $,
  )));
export {
  V as ChangeSlideChartDataSourceCommand,
  Te as DEFAULT_SLIDE_CHART_ELEMENT_HEIGHT,
  Se as DEFAULT_SLIDE_CHART_ELEMENT_LEFT,
  Ce as DEFAULT_SLIDE_CHART_ELEMENT_TOP,
  we as DEFAULT_SLIDE_CHART_ELEMENT_WIDTH,
  De as DEFAULT_SLIDE_CHART_STROKE,
  Ee as DEFAULT_SLIDE_CHART_VALUES,
  xe as DuplicateSlideChartDataSourceCommand,
  Z as InsertSlideChartCommand,
  U as RemoveSlideChartCommand,
  R as RemoveSlideChartDataSourceMutation,
  H as RemoveSlideChartSnapshotMutation,
  z as SetSlideChartDataSourceMutation,
  B as SetSlideChartSnapshotMutation,
  ve as SlideChartConfigAdapter,
  X as SlideChartModelService,
  L as SlideChartResourceService,
  $ as UniverSlidesChartPlugin,
  W as UpdateSlideChartConfigCommand,
  G as UpdateSlideChartDataSourceCommand,
  je as UpdateSlideChartSnapshotCommand,
};
