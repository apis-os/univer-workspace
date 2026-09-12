Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-chart"),
  t = require("@univerjs-pro/slides"),
  n = require("@univerjs/core"),
  r = require("rxjs"),
  i = require("@univerjs-pro/engine-shape"),
  a = require("@univerjs-pro/license");
var o = class extends e.ChartResourceRepository {};
const s = {
    id: "slide.mutation.remove-slide-chart-data-source",
    type: n.CommandType["MUTATION"],
    handler: (_0x2e3288, _0x3aa8d8) =>
      _0x2e3288
        .get(o)
        .removeDataSource(_0x3aa8d8.unitId, _0x3aa8d8.dataSourceId),
  },
  c = {
    id: "slide.mutation.set-slide-chart-data-source",
    type: n.CommandType["MUTATION"],
    handler: (_0x25e77f, _0x1678d7) => (
      _0x25e77f.get(o).setDataSource(_0x1678d7.unitId, _0x1678d7.dataSource),
      true
    ),
  },
  l = {
    id: "slide.mutation.set-slide-chart-snapshot",
    type: n.CommandType["MUTATION"],
    handler: (_0x246872, _0x4c99ac) => (
      _0x246872.get(o).setChart(_0x4c99ac.unitId, _0x4c99ac.chart),
      true
    ),
  },
  u = {
    id: "slide.command.change-chart-data-source",
    type: n.CommandType["COMMAND"],
    handler: (_0x58ef71, _0x4a270f) => {
      if (!_0x4a270f) return false;
      let _0x475b51 = (0, t.getSlideCommandTarget)(
        _0x58ef71.get(n.IUniverInstanceService),
        _0x4a270f,
      );
      if (!_0x475b51) return false;
      let _0x24a96d = _0x58ef71.get(o),
        _0xe59e4e = _0x24a96d.getChart(_0x475b51.unitId, _0x4a270f.chartId),
        _0x1acd7d = _0xe59e4e
          ? _0x24a96d.getDataSource(_0x475b51.unitId, _0xe59e4e.dataSourceId)
          : undefined;
      if (!_0xe59e4e || !_0x1acd7d) return false;
      let _0x51a2fa = _0x24a96d.isDataSourceShared(
          _0x475b51.unitId,
          _0x1acd7d.id,
        ),
        _0x35d8c1 = _0x51a2fa
          ? (_0x4a270f.duplicateDataSourceId ?? (0, n.generateRandomId)())
          : _0x1acd7d.id,
        _0x33448e = d(
          _0x35d8c1,
          _0x4a270f.dataSource,
          _0x4a270f.name ?? _0x1acd7d.name,
        ),
        _0x2ef3fc = _0x58ef71.get(n.ICommandService),
        _0x1ce4df = {
          id: c.id,
          params: { unitId: _0x475b51.unitId, dataSource: _0x33448e },
        },
        _0x328afc = [_0x1ce4df],
        _0x390152 = [
          {
            id: c.id,
            params: { unitId: _0x475b51.unitId, dataSource: _0x1acd7d },
          },
        ];
      if (!_0x2ef3fc.syncExecuteCommand(_0x1ce4df.id, _0x1ce4df.params))
        return false;
      if (_0x51a2fa) {
        let _0x189519 = {
            id: l.id,
            params: {
              unitId: _0x475b51.unitId,
              chart: { ..._0xe59e4e, dataSourceId: _0x35d8c1 },
            },
          },
          _0x3fbe4f = {
            id: s.id,
            params: { unitId: _0x475b51.unitId, dataSourceId: _0x35d8c1 },
          };
        if (!_0x2ef3fc.syncExecuteCommand(_0x189519.id, _0x189519.params))
          return (
            _0x2ef3fc.syncExecuteCommand(_0x3fbe4f.id, _0x3fbe4f.params),
            false
          );
        (_0x328afc.push(_0x189519),
          _0x390152.splice(
            0,
            1,
            {
              id: l.id,
              params: { unitId: _0x475b51.unitId, chart: _0xe59e4e },
            },
            _0x3fbe4f,
          ));
      }
      return (
        _0x58ef71
          .get(n.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x475b51.unitId,
            undoMutations: _0x390152,
            redoMutations: _0x328afc,
          }),
        true
      );
    },
  };
function d(_0x3bb3b9, _0x3cf103, _0x202316) {
  let _0x4c9c7b = (0, e.isInlineChartDataSource)(_0x3cf103)
    ? { id: _0x3bb3b9, name: _0x202316, values: _0x3cf103.values }
    : { id: _0x3bb3b9, name: _0x202316, source: _0x3cf103.source };
  return (_0x4c9c7b.name ?? delete _0x4c9c7b.name, _0x4c9c7b);
}
const f = {
    id: "slide.mutation.remove-slide-chart-snapshot",
    type: n.CommandType["MUTATION"],
    handler: (_0x4801d1, _0x5289d9) =>
      _0x4801d1
        .get(o)
        .removeChart(_0x5289d9.unitId, _0x5289d9.chartId, {
          cleanupDataSource: _0x5289d9.cleanupDataSource,
        }) != null,
  },
  p = {
    id: "slide.command.remove-slide-chart",
    type: n.CommandType["COMMAND"],
    handler: (_0x5388ff, _0x2216c6) => {
      var _0x17f4c6;
      if (!_0x2216c6) return false;
      let _0x56d5ac = (0, t.getSlideCommandTarget)(
        _0x5388ff.get(n.IUniverInstanceService),
        _0x2216c6,
      );
      if (!_0x56d5ac) return false;
      let _0x844ef4 = _0x5388ff.get(o),
        _0x42672f = _0x5388ff.get(t.ISlideDrawingService),
        {
          presentation: _0x573316,
          unitId: _0x15cbba,
          subUnitId: _0x6048ec,
        } = _0x56d5ac,
        { chartId: _0xa533bd, elementId: _0x47c51f } = _0x2216c6,
        _0x1f1f3b = _0x844ef4.getChart(_0x15cbba, _0xa533bd),
        _0x25b43d = _0x42672f.getDrawingByParam({
          unitId: _0x15cbba,
          subUnitId: _0x6048ec,
          drawingId: _0x47c51f,
        }),
        _0x24af77 = _0x25b43d == null ? undefined : _0x25b43d.element;
      if (
        !_0x1f1f3b ||
        !_0x24af77 ||
        _0x24af77.type !== t.PageElementTypeEnum["Chart"] ||
        _0x24af77.chartId !== _0xa533bd
      )
        return false;
      let _0xcd93f6 = _0x5388ff.get(n.ICommandService),
        _0xf714aa = _0x5388ff.get(n.IUndoRedoService),
        _0x399398 = _0x844ef4.getDataSource(_0x15cbba, _0x1f1f3b.dataSourceId),
        _0x583caf =
          _0x844ef4.getDataSourceSharingCount(
            _0x15cbba,
            _0x1f1f3b.dataSourceId,
          ) <= 1,
        _0x21b592 =
          ((_0x17f4c6 = _0x573316.pageManager["getSlide"](_0x6048ec)) == null
            ? undefined
            : _0x17f4c6.getData().elementOrder["indexOf"](_0x47c51f)) ?? -1,
        _0x124fd4 = {
          unitId: _0x15cbba,
          subUnitId: _0x6048ec,
          drawingId: _0x47c51f,
        },
        _0x56e764 = {
          unitId: _0x15cbba,
          chartId: _0xa533bd,
          cleanupDataSource: _0x583caf,
        },
        _0x456756 = [
          { id: t.RemoveSlideElementMutation["id"], params: _0x124fd4 },
          { id: f.id, params: _0x56e764 },
        ],
        _0x230511 = [];
      if (_0x583caf && _0x399398) {
        let _0x2f5849 = { unitId: _0x15cbba, dataSource: _0x399398 };
        _0x230511.push({ id: c.id, params: _0x2f5849 });
      }
      let _0x34cfa2 = { unitId: _0x15cbba, chart: _0x1f1f3b },
        _0x5e5f9e = {
          unitId: _0x15cbba,
          subUnitId: _0x6048ec,
          element: _0x24af77,
          sourcePageType:
            (_0x25b43d == null ? undefined : _0x25b43d.sourcePageType) ??
            t.PageTypeEnum["Slide"],
          insertIndex: _0x21b592 >= 0 ? _0x21b592 : undefined,
        },
        _0x1df4a8 = [
          ..._0x230511,
          { id: l.id, params: _0x34cfa2 },
          { id: t.AddSlideElementMutation["id"], params: _0x5e5f9e },
        ],
        _0x318e0e = (0, n.sequenceExecute)(_0x456756, _0xcd93f6);
      return _0x318e0e.result
        ? (_0xf714aa.pushUndoRedo({
            unitID: _0x15cbba,
            undoMutations: _0x1df4a8,
            redoMutations: _0x456756,
          }),
          true)
        : (_0x318e0e.index === 1 &&
            (0, n.sequenceExecute)(
              [{ id: t.AddSlideElementMutation["id"], params: _0x5e5f9e }],
              _0xcd93f6,
            ),
          false);
    },
  },
  m = Symbol("ReplaceSlideChartConfig");
function h(_0x57d2e9) {
  return { ..._0x57d2e9, [m]: true };
}
const g = {
    id: "slide.command.update-slide-chart-config",
    type: n.CommandType["COMMAND"],
    replaceConfig: h,
    handler: (_0x2a5463, _0xc9efa1) => {
      if (!_0xc9efa1) return false;
      let _0xf2ef72 = (0, t.getSlideCommandTarget)(
        _0x2a5463.get(n.IUniverInstanceService),
        _0xc9efa1,
      );
      if (!_0xf2ef72) return false;
      let { unitId: _0x2bb64e } = _0xf2ef72,
        { chartId: _0x3691a3 } = _0xc9efa1,
        _0xeab661 = _0xc9efa1[m] === true,
        _0x19cf29 = _0x2a5463.get(o).getChart(_0x2bb64e, _0x3691a3);
      if (!_0x19cf29) return false;
      let _0xd4ffd3 = _0x2a5463.get(n.ICommandService),
        _0x14e326 = _0x2a5463.get(n.IUndoRedoService),
        _0x20e911 = e.chartConfigInterpreter["apply"](
          _0x19cf29,
          _0xc9efa1,
          _0xeab661,
        );
      if (!_0x20e911) return false;
      let _0x476dad = { unitId: _0x2bb64e, chart: _0x20e911 },
        _0x3104b2 = { unitId: _0x2bb64e, chart: _0x19cf29 },
        _0x4519bc = [{ id: l.id, params: _0x476dad }],
        _0x75f717 = [{ id: l.id, params: _0x3104b2 }];
      return (0, n.sequenceExecute)(_0x4519bc, _0xd4ffd3).result
        ? (_0x14e326.pushUndoRedo({
            unitID: _0x2bb64e,
            undoMutations: _0x75f717,
            redoMutations: _0x4519bc,
          }),
          true)
        : false;
    },
  },
  _ = {
    id: "slide.command.update-slide-chart-data-source",
    type: n.CommandType["COMMAND"],
    handler: (_0x3992ca, _0x496cd0) => {
      if (!_0x496cd0) return false;
      let _0xc27504 = (0, t.getSlideCommandTarget)(
        _0x3992ca.get(n.IUniverInstanceService),
        _0x496cd0,
      );
      if (!_0xc27504) return false;
      let { unitId: _0x26f20c } = _0xc27504,
        {
          dataSourceId: _0x3c0d1e,
          values: _0x3d8774,
          name: _0x18192c,
        } = _0x496cd0,
        _0x41d3bb = _0x3992ca.get(o).getDataSource(_0x26f20c, _0x3c0d1e);
      if (!_0x41d3bb) return false;
      let _0x154245 = _0x3992ca.get(n.ICommandService),
        _0x6d6690 = _0x3992ca.get(n.IUndoRedoService),
        _0x2ececa = {
          unitId: _0x26f20c,
          dataSource: {
            id: _0x3c0d1e,
            values: _0x3d8774,
            name: _0x18192c ?? _0x41d3bb.name,
          },
        },
        _0x4d90b6 = { unitId: _0x26f20c, dataSource: _0x41d3bb },
        _0x11747e = [{ id: c.id, params: _0x2ececa }],
        _0x4f7d90 = [{ id: c.id, params: _0x4d90b6 }];
      return (0, n.sequenceExecute)(_0x11747e, _0x154245).result
        ? (_0x6d6690.pushUndoRedo({
            unitID: _0x26f20c,
            undoMutations: _0x4f7d90,
            redoMutations: _0x11747e,
          }),
          true)
        : false;
    },
  };
function v(_0x5f4482) {
  "@babel/helpers - typeof";
  return (
    (v =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3bb813) {
            return typeof _0x3bb813;
          }
        : function (_0x5d77b0) {
            return _0x5d77b0 &&
              typeof Symbol == "function" &&
              _0x5d77b0.constructor === Symbol &&
              _0x5d77b0 !== Symbol.prototype
              ? "symbol"
              : typeof _0x5d77b0;
          }),
    v(_0x5f4482)
  );
}
function y(_0x4ea1ef, _0xb5a85f) {
  if (v(_0x4ea1ef) != "object" || !_0x4ea1ef) return _0x4ea1ef;
  var _0x4ff74a = _0x4ea1ef[Symbol.toPrimitive];
  if (_0x4ff74a !== undefined) {
    var _0x3d1e80 = _0x4ff74a.call(_0x4ea1ef, _0xb5a85f || "default");
    if (v(_0x3d1e80) != "object") return _0x3d1e80;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0xb5a85f === "string" ? String : Number)(_0x4ea1ef);
}
function b(_0x5c5d4f) {
  var _0x2b729a = y(_0x5c5d4f, "string");
  return v(_0x2b729a) == "symbol" ? _0x2b729a : _0x2b729a + "";
}
function x(_0x1ba6ff, _0x5926b3, _0x503144) {
  return (
    (_0x5926b3 = b(_0x5926b3)) in _0x1ba6ff
      ? Object.defineProperty(_0x1ba6ff, _0x5926b3, {
          value: _0x503144,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x1ba6ff[_0x5926b3] = _0x503144),
    _0x1ba6ff
  );
}
function S(_0x486b02, _0x99f693) {
  return function (_0x105815, _0x180d5c) {
    _0x99f693(_0x105815, _0x180d5c, _0x486b02);
  };
}
function C(_0x381f36, _0xe30ef4, _0x1c6eb4, _0x9d1961) {
  var _0x1a4767 = arguments.length,
    _0x8b8e5c =
      _0x1a4767 < 3
        ? _0xe30ef4
        : _0x9d1961 === null
          ? (_0x9d1961 = Object.getOwnPropertyDescriptor(_0xe30ef4, _0x1c6eb4))
          : _0x9d1961,
    _0x8fd59a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x8b8e5c = Reflect.decorate(_0x381f36, _0xe30ef4, _0x1c6eb4, _0x9d1961);
  else {
    for (var _0x48bcd1 = _0x381f36.length - 1; _0x48bcd1 >= 0; _0x48bcd1--)
      (_0x8fd59a = _0x381f36[_0x48bcd1]) &&
        (_0x8b8e5c =
          (_0x1a4767 < 3
            ? _0x8fd59a(_0x8b8e5c)
            : _0x1a4767 > 3
              ? _0x8fd59a(_0xe30ef4, _0x1c6eb4, _0x8b8e5c)
              : _0x8fd59a(_0xe30ef4, _0x1c6eb4)) || _0x8b8e5c);
  }
  return (
    _0x1a4767 > 3 &&
      _0x8b8e5c &&
      Object.defineProperty(_0xe30ef4, _0x1c6eb4, _0x8b8e5c),
    _0x8b8e5c
  );
}
let w = class extends e.ChartResourceRuntimeService {
  constructor(_0x38809a, _0x4810d9, _0x1c4cf0) {
    (super(_0x38809a, _0x4810d9, e.buildChartDataSetFromValues, _0x1c4cf0),
      x(this, "_chartDataUpdated$", new r["Subject"]()),
      x(this, "chartDataUpdated$", this._chartDataUpdated$["asObservable"]()));
  }
  dispose() {
    (this._chartDataUpdated$["complete"](), super.dispose());
  }
  _beforeRuntimeRefresh(_0xed984a) {
    this._chartDataUpdated$["next"](_0xed984a.chartId);
  }
};
w = C(
  [
    S(0, (0, n.Inject)(o)),
    S(1, (0, n.Inject)(n.Injector)),
    S(2, (0, n.Inject)(e.IChartDataSourceRuntimeService)),
  ],
  w,
);
var T = class {
  constructor(_0x3d551f) {
    this._context = _0x3d551f;
  }
  describe(_0x194f35 = {}, _0x3756a6) {
    var _0x4b8c4d, _0x3fac52;
    let {
        chartId: _0x249427,
        elementId: _0xd5b993,
        injector: _0x1648b8,
        slideModel: _0x485a0c,
        subUnitId: _0x1cd908,
        unitId: _0x28833f,
      } = this._context,
      _0x5ac149 = _0x1648b8.get(w).ensureChartModel(_0x28833f, _0x249427),
      _0x90e448 = _0x1648b8.get(o).getChart(_0x28833f, _0x249427),
      _0x88437f = _0x90e448
        ? _0x1648b8.get(o).getDataSource(_0x28833f, _0x90e448.dataSourceId)
        : null,
      _0x4981b3 =
        (_0x4b8c4d = _0x485a0c.getSnapshot().slides[_0x1cd908]) == null
          ? undefined
          : _0x4b8c4d.elements[_0xd5b993];
    if (!_0x5ac149 || !_0x88437f || !_0x4981b3)
      throw Error("Chart not found: " + _0x249427);
    let _0x20dc48 =
      ((_0x3fac52 = _0x485a0c.getSnapshot().slides[_0x1cd908]) == null
        ? undefined
        : _0x3fac52.elementOrder["indexOf"](_0xd5b993)) ?? -1;
    return {
      ...(0, e.describeChartModel)(_0x5ac149.model, _0x194f35, _0x3756a6),
      id: _0x249427,
      position: {
        x: _0x4981b3.transform["left"] ?? 0,
        y: _0x4981b3.transform["top"] ?? 0,
      },
      size: {
        width: _0x4981b3.transform["width"] ?? 0,
        height: _0x4981b3.transform["height"] ?? 0,
      },
      placeholder: n.Tools["deepClone"](_0x4981b3.placeholder),
      stroke: n.Tools["deepClone"](_0x4981b3.stroke),
      zOrder: _0x20dc48 < 0 ? undefined : _0x20dc48,
    };
  }
  getInfo() {
    let _0x18b851 = this.describe(),
      _0x3967bb = this.getDataSource();
    if (!_0x3967bb)
      throw Error("Chart data source not found: " + this._context["chartId"]);
    return {
      config: (0, e.toChartCreateConfigSnapshot)(_0x18b851),
      dataSource: (0, e.isInlineChartDataSource)(_0x3967bb)
        ? { values: n.Tools["deepClone"](_0x3967bb.values) }
        : (0, e.isReferencedChartDataSource)(_0x3967bb)
          ? { source: n.Tools["deepClone"](_0x3967bb.source) }
          : (() => {
              throw Error(
                "Invalid Chart data source: " + this._context["chartId"],
              );
            })(),
      position: n.Tools["deepClone"](_0x18b851.position),
      size: n.Tools["deepClone"](_0x18b851.size),
      placeholder: n.Tools["deepClone"](_0x18b851.placeholder),
      stroke: n.Tools["deepClone"](_0x18b851.stroke),
      zOrder: _0x18b851.zOrder,
    };
  }
  getData() {
    let {
        chartId: _0x3ec4ea,
        injector: _0x41511b,
        unitId: _0x2b3473,
      } = this._context,
      _0xdfe5ec = _0x41511b.get(o).getChart(_0x2b3473, _0x3ec4ea),
      _0x1f9831 = _0xdfe5ec
        ? _0x41511b.get(o).getDataSource(_0x2b3473, _0xdfe5ec.dataSourceId)
        : null;
    return (0, e.isInlineChartDataSource)(_0x1f9831) ? _0x1f9831.values : null;
  }
  getDataSource() {
    let {
        chartId: _0x598906,
        injector: _0x57ed0f,
        unitId: _0x214961,
      } = this._context,
      _0x2b6e0e = _0x57ed0f.get(o).getChart(_0x214961, _0x598906);
    return (
      (_0x2b6e0e
        ? _0x57ed0f.get(o).getDataSource(_0x214961, _0x2b6e0e.dataSourceId)
        : null) ?? null
    );
  }
  async commitDataSource(_0x26648f) {
    let { injector: _0x1df487 } = this._context,
      _0x52c240 = (0, e.isReferencedChartDataSource)(_0x26648f)
        ? _0x26648f.source
        : undefined,
      _0x4221f1 = _0x52c240
        ? _0x1df487.get(e.IChartDataSourceRuntimeService).acquire(_0x52c240)
        : null;
    try {
      if (_0x4221f1) {
        let _0x2087f1 = await (0, r.firstValueFrom)(
          _0x4221f1.state$["pipe"](
            (0, r.filter)(
              ({ status: _0x4ea903 }) =>
                _0x4ea903 !== e.ChartDataSourceRuntimeStatus["LOADING"],
            ),
          ),
        );
        if (_0x2087f1.status !== e.ChartDataSourceRuntimeStatus["READY"])
          throw _0x2087f1.error instanceof Error
            ? _0x2087f1.error
            : Error(_0x52c240 == null ? undefined : _0x52c240.kind);
      }
      this._commitDataSource(_0x26648f);
    } finally {
      _0x4221f1 == null || _0x4221f1.dispose();
    }
  }
  async commitChanges(_0x2eec7f, _0x52176d, _0x316404, _0x51f7a9 = false) {
    let { injector: _0x4e2dc7 } = this._context,
      _0x4c9fd2 = (0, e.isReferencedChartDataSource)(_0x2eec7f)
        ? _0x2eec7f.source
        : undefined,
      _0xedde6e = _0x4c9fd2
        ? _0x4e2dc7.get(e.IChartDataSourceRuntimeService).acquire(_0x4c9fd2)
        : null;
    try {
      if (_0xedde6e) {
        let _0x555ae1 = await (0, r.firstValueFrom)(
          _0xedde6e.state$["pipe"](
            (0, r.filter)(
              ({ status: _0x564e99 }) =>
                _0x564e99 !== e.ChartDataSourceRuntimeStatus["LOADING"],
            ),
          ),
        );
        if (_0x555ae1.status !== e.ChartDataSourceRuntimeStatus["READY"])
          throw _0x555ae1.error instanceof Error
            ? _0x555ae1.error
            : Error(_0x4c9fd2 == null ? undefined : _0x4c9fd2.kind);
      }
      (Object.keys(_0x52176d).length > 0 &&
        (_0x51f7a9 ? this._replaceConfig(_0x52176d) : this.commit(_0x52176d)),
        Object.keys(_0x316404).length > 0 && this.commitHost(_0x316404),
        _0x2eec7f && this._commitDataSource(_0x2eec7f));
    } finally {
      _0xedde6e == null || _0xedde6e.dispose();
    }
  }
  refreshDataSource() {
    let {
      chartId: _0x299a52,
      injector: _0x22ebcd,
      unitId: _0x15d58c,
    } = this._context;
    return _0x22ebcd.get(w).refreshChartDataSource(_0x15d58c, _0x299a52);
  }
  commit(_0x5b2b8b) {
    var _0x5b3321;
    let {
        chartId: _0x214dff,
        injector: _0x67b431,
        unitId: _0x1be62e,
      } = this._context,
      _0x2918ed = _0x67b431.get(w).ensureChartModel(_0x1be62e, _0x214dff);
    if (!_0x2918ed) throw Error("Chart not found: " + _0x214dff);
    let _0x2cb39e = (0, e.toChartModelUpdate)(_0x5b2b8b, {
      series:
        (_0x5b3321 = _0x2918ed.model["config"]) == null
          ? undefined
          : _0x5b3321.series,
      currentChartType: _0x2918ed.model["chartType"],
      currentStyle: _0x2918ed.model["style"],
      currentContext: _0x2918ed.model["context"],
      currentDataAggregation: _0x2918ed.model["dataAggregation"],
    });
    if (
      !_0x67b431
        .get(n.ICommandService)
        .syncExecuteCommand(
          g.id,
          g.replaceConfig({
            unitId: _0x1be62e,
            chartId: _0x214dff,
            ..._0x2cb39e,
          }),
        )
    )
      throw Error("Failed\x20to\x20update\x20Slide\x20chart\x20configuration.");
  }
  update(_0x55947f) {
    let _0x129056 = {};
    return (
      _0x55947f.position !== undefined &&
        (_0x129056.position = _0x55947f.position),
      _0x55947f.size !== undefined && (_0x129056.size = _0x55947f.size),
      Object.prototype["hasOwnProperty"].call(_0x55947f, "placeholder") &&
        (_0x129056.placeholder = _0x55947f.placeholder),
      Object.prototype["hasOwnProperty"].call(_0x55947f, "stroke") &&
        (_0x129056.stroke = _0x55947f.stroke),
      _0x55947f.zOrder !== undefined && (_0x129056.zOrder = _0x55947f.zOrder),
      this.commitChanges(
        _0x55947f.dataSource,
        _0x55947f.config,
        _0x129056,
        true,
      )
    );
  }
  _replaceConfig(_0xa3745) {
    var _0x2236f5;
    let {
        chartId: _0x7d5d20,
        injector: _0x302aa1,
        unitId: _0x48a5bf,
      } = this._context,
      _0x3d1cff = _0x302aa1.get(w).ensureChartModel(_0x48a5bf, _0x7d5d20);
    if (!_0x3d1cff) throw Error("Chart not found: " + _0x7d5d20);
    let _0x50524a = (0, e.toChartModelConfigReplacement)(_0xa3745, {
      series:
        (_0x2236f5 = _0x3d1cff.model["config"]) == null
          ? undefined
          : _0x2236f5.series,
      currentStyle: _0x3d1cff.model["style"],
    });
    if (
      !_0x302aa1
        .get(n.ICommandService)
        .syncExecuteCommand(
          g.id,
          g.replaceConfig({
            unitId: _0x48a5bf,
            chartId: _0x7d5d20,
            ..._0x50524a,
          }),
        )
    )
      throw Error("Failed\x20to\x20update\x20Slide\x20chart\x20configuration.");
  }
  setDataSource(_0x5b5b0f) {
    return this.commitDataSource(
      Array.isArray(_0x5b5b0f)
        ? { values: _0x5b5b0f }
        : {
            source:
              e.ResourceRefChartDataSourceAdapter["toReference"](_0x5b5b0f),
          },
    );
  }
  setAbsolutePosition(_0x33c742, _0x2e8073) {
    this.commitHost({ position: { x: _0x33c742, y: _0x2e8073 } });
  }
  setSize(_0x504100, _0x5937bc) {
    this.commitHost({ size: { width: _0x504100, height: _0x5937bc } });
  }
  arrange(_0x20e155) {
    var _0x13e09c;
    let {
        elementId: _0x45ec97,
        slideModel: _0x4d4f61,
        subUnitId: _0x4f002b,
      } = this._context,
      _0x2673c1 =
        ((_0x13e09c = _0x4d4f61.getSnapshot().slides[_0x4f002b]) == null
          ? undefined
          : _0x13e09c.elementOrder) ?? [],
      _0x2d123b = _0x2673c1.indexOf(_0x45ec97);
    if (_0x2d123b < 0)
      throw Error("Slide chart element not found: " + _0x45ec97);
    this.setZOrder(
      (0, n.getDrawingOrderIndex)(_0x2d123b, _0x2673c1.length, _0x20e155),
    );
  }
  setZOrder(_0x2d1b6b) {
    this._commitZOrder(_0x2d1b6b);
  }
  resolveData(_0x59e9cb, _0x56770a) {
    let {
        chartId: _0x378387,
        injector: _0x26003b,
        unitId: _0x3407d4,
      } = this._context,
      _0x5ce8aa = _0x26003b.get(w).ensureChartModel(_0x3407d4, _0x378387);
    if (!_0x5ce8aa) throw Error("Chart not found: " + _0x378387);
    return (0, e.buildChartPreviewData)(_0x5ce8aa.model, _0x59e9cb, _0x56770a);
  }
  resolveDataSet(_0x7e684f) {
    var _0x4beb88, _0x391d38;
    let {
        chartId: _0x14a215,
        injector: _0x328efc,
        unitId: _0xd256c2,
      } = this._context,
      _0x3f5e8a = _0x328efc.get(w).ensureChartModel(_0xd256c2, _0x14a215),
      _0x23635e = _0x328efc.get(o).getChart(_0xd256c2, _0x14a215);
    if (!_0x3f5e8a || !_0x23635e) throw Error("Chart not found: " + _0x14a215);
    return (0, e.buildOrientedChartDataSet)(_0x7e684f, {
      headerRow:
        ((_0x4beb88 = _0x23635e.context) == null
          ? undefined
          : _0x4beb88.headerRow) ?? e.DEFAULT_CHART_RESOURCE_HEADER_ROW,
      isRowDirection:
        ((_0x391d38 = _0x23635e.context) == null
          ? undefined
          : _0x391d38.orient) !== "column",
    });
  }
  commitHost(_0x553603) {
    let {
        chartId: _0x28e5cf,
        elementId: _0x5a8d87,
        injector: _0x1af712,
        slideModel: _0x2aa542,
        subUnitId: _0x4b65c1,
        unitId: _0x15cdcf,
      } = this._context,
      _0x491b8f = _0x1af712.get(n.ICommandService);
    if (_0x553603.data !== undefined) {
      let _0x31ee41 = _0x1af712.get(o).getChart(_0x15cdcf, _0x28e5cf);
      if (
        !_0x31ee41 ||
        !_0x491b8f.syncExecuteCommand(_.id, {
          unitId: _0x15cdcf,
          dataSourceId: _0x31ee41.dataSourceId,
          values: _0x553603.data ?? [],
        })
      )
        throw Error("Failed to update Slide chart data.");
    }
    if (
      _0x553603.position ||
      _0x553603.size ||
      "placeholder" in _0x553603 ||
      "stroke" in _0x553603
    ) {
      var _0x4c2915;
      let _0x1b5863 =
        (_0x4c2915 = _0x2aa542.getSnapshot().slides[_0x4b65c1]) == null
          ? undefined
          : _0x4c2915.elements[_0x5a8d87];
      if (!_0x1b5863)
        throw Error(
          "Slide\x20chart\x20element\x20not\x20found:\x20" + _0x5a8d87,
        );
      let _0x1fb611 = {
        ..._0x1b5863,
        transform: {
          ..._0x1b5863.transform,
          ...(_0x553603.position
            ? { left: _0x553603.position["x"], top: _0x553603.position["y"] }
            : {}),
          ...(_0x553603.size
            ? {
                width: _0x553603.size["width"],
                height: _0x553603.size["height"],
              }
            : {}),
        },
        ...("placeholder" in _0x553603
          ? { placeholder: _0x553603.placeholder }
          : {}),
        ...("stroke" in _0x553603 ? { stroke: _0x553603.stroke } : {}),
      };
      if (
        !E(_0x1b5863, _0x1fb611) &&
        !_0x491b8f.syncExecuteCommand(t.UpdateSlideDrawingCommand["id"], {
          patches: [
            {
              unitId: _0x15cdcf,
              subUnitId: _0x4b65c1,
              drawingId: _0x5a8d87,
              element: _0x1fb611,
            },
          ],
        })
      )
        throw Error("Failed to update Slide chart element.");
    }
    this._commitZOrder(_0x553603.zOrder);
  }
  remove() {
    let {
      chartId: _0x26fb39,
      elementId: _0x77e940,
      injector: _0x2b76df,
      subUnitId: _0x4f73e0,
      unitId: _0x45248a,
    } = this._context;
    return _0x2b76df
      .get(n.ICommandService)
      .syncExecuteCommand(p.id, {
        unitId: _0x45248a,
        subUnitId: _0x4f73e0,
        chartId: _0x26fb39,
        elementId: _0x77e940,
      });
  }
  _commitDataSource(_0x411991) {
    let {
      chartId: _0x5e0291,
      injector: _0x34ad48,
      unitId: _0x3796f0,
    } = this._context;
    if (
      !_0x34ad48
        .get(n.ICommandService)
        .syncExecuteCommand(u.id, {
          unitId: _0x3796f0,
          chartId: _0x5e0291,
          dataSource: _0x411991,
        })
    )
      throw Error(u.id);
  }
  _commitZOrder(_0x452b9e) {
    if (_0x452b9e === undefined) return;
    let {
        elementId: _0x3585f6,
        injector: _0x3d1f47,
        slideModel: _0x5a541b,
        subUnitId: _0x3173d4,
        unitId: _0x219e21,
      } = this._context,
      _0x4073d5 = _0x5a541b.getSnapshot().slides[_0x3173d4];
    if (!_0x4073d5) throw Error("Slide not found: " + _0x3173d4);
    let _0x20b089 = _0x4073d5.elementOrder["filter"](
      (_0x402e3d) => _0x402e3d !== _0x3585f6,
    );
    if (
      (_0x20b089.splice(
        (0, n.normalizeDrawingOrderIndex)(
          _0x452b9e,
          _0x4073d5.elementOrder["length"],
        ),
        0,
        _0x3585f6,
      ),
      !_0x20b089.every(
        (_0x135222, _0x436961) =>
          _0x135222 === _0x4073d5.elementOrder[_0x436961],
      ) &&
        !_0x3d1f47
          .get(n.ICommandService)
          .syncExecuteCommand(t.ReorderSlideElementsCommand["id"], {
            unitId: _0x219e21,
            subUnitId: _0x3173d4,
            drawingIds: _0x20b089,
          }))
    )
      throw Error("Failed to update Slide chart z-order.");
  }
};
function E(_0x231a2d, _0x5d64ee) {
  return JSON.stringify(D(_0x231a2d)) === JSON.stringify(D(_0x5d64ee));
}
function D(_0x20b972) {
  let _0xf53a54 = n.Tools["deepClone"](_0x20b972);
  return (
    (_0xf53a54.transform = {
      ..._0xf53a54.transform,
      left: _0xf53a54.transform["left"] ?? 0,
      top: _0xf53a54.transform["top"] ?? 0,
      width: _0xf53a54.transform["width"] ?? 0,
      height: _0xf53a54.transform["height"] ?? 0,
      rotation: _0xf53a54.transform["rotation"] ?? 0,
      flipX: _0xf53a54.transform["flipX"] ?? false,
      flipY: _0xf53a54.transform["flipY"] ?? false,
    }),
    _0xf53a54
  );
}
const O = {
    id: "slide.command.duplicate-slide-data-source",
    type: n.CommandType["COMMAND"],
    handler: (_0x37fb44, _0x523e36) => {
      if (!_0x523e36) return false;
      let _0x346ba2 = (0, t.getSlideCommandTarget)(
        _0x37fb44.get(n.IUniverInstanceService),
        _0x523e36,
      );
      if (!_0x346ba2) return false;
      let { unitId: _0x12e13f } = _0x346ba2,
        { chartId: _0x55b783, duplicateDataSourceId: _0x159169 } = _0x523e36,
        _0x3587ab = _0x37fb44.get(o),
        _0x2497f5 = _0x3587ab.getChart(_0x12e13f, _0x55b783),
        _0xfbb25 = _0x2497f5
          ? _0x3587ab.getDataSource(_0x12e13f, _0x2497f5.dataSourceId)
          : undefined,
        _0x33effd = _0x3587ab.duplicateDataSourceForChart(
          _0x12e13f,
          _0x55b783,
          _0x159169,
        );
      if (!_0x2497f5 || !_0xfbb25 || !_0x33effd) return false;
      let _0x1d85a9 = _0x37fb44.get(n.ICommandService),
        _0x12f464 = _0x37fb44.get(n.IUndoRedoService),
        _0xc14120 = { unitId: _0x12e13f, dataSource: _0x33effd },
        _0x3f9dc1 = { unitId: _0x12e13f, dataSourceId: _0x33effd.id },
        _0x5b1201 = {
          unitId: _0x12e13f,
          chart: { ..._0x2497f5, dataSourceId: _0x33effd.id },
        },
        _0x47278f = { unitId: _0x12e13f, chart: _0x2497f5 },
        _0x9b94ee = [
          { id: c.id, params: _0xc14120 },
          { id: l.id, params: _0x5b1201 },
        ],
        _0x484826 = [
          { id: l.id, params: _0x47278f },
          { id: s.id, params: _0x3f9dc1 },
        ];
      return (0, n.sequenceExecute)(_0x9b94ee, _0x1d85a9).result
        ? (_0x12f464.pushUndoRedo({
            unitID: _0x12e13f,
            undoMutations: _0x484826,
            redoMutations: _0x9b94ee,
          }),
          true)
        : false;
    },
  },
  k = [
    ["Category", "Value"],
    ["A", 12],
    ["B", 18],
    ["C", 9],
  ],
  A = {
    lineStrokeType: i.ShapeLineTypeEnum["SolidLine"],
    width: 1,
    color: "#d1d5db",
    opacity: 1,
  },
  j = {
    id: "slide.command.insert-slide-chart",
    type: n.CommandType["COMMAND"],
    handler: (_0x23cde6, _0x5acba4) => {
      var _0x38b10c;
      if (!_0x5acba4) return false;
      let _0x203d8d = (0, t.getSlideCommandTarget)(
        _0x23cde6.get(n.IUniverInstanceService),
        _0x5acba4,
      );
      if (!_0x203d8d) return false;
      let _0x20195d = n.Tools["deepClone"](_0x5acba4.chart);
      if (!_0x20195d.chartType) return false;
      ((_0x20195d.id ||= (0, n.generateRandomId)(6)),
        (_0x20195d.context = {
          ..._0x20195d.context,
          headerRow:
            ((_0x38b10c = _0x20195d.context) == null
              ? undefined
              : _0x38b10c.headerRow) ?? e.DEFAULT_CHART_RESOURCE_HEADER_ROW,
        }));
      let _0x5c0d15 = _0x23cde6.get(t.ISlideDrawingService),
        _0x44c723 = _0x23cde6.get(n.ICommandService),
        _0x20759f = _0x23cde6.get(n.IUndoRedoService),
        { unitId: _0x490673, subUnitId: _0x212507 } = _0x203d8d,
        {
          element: _0x3794e0,
          replaceElementId: _0x222f66,
          insertIndex: _0x361a21,
          focus: _0x59bee1,
        } = _0x5acba4,
        _0x12ff4a = M(_0x5acba4.dataSource);
      _0x20195d.dataSourceId = _0x12ff4a.id;
      let _0x549d9e = N({
        unitId: _0x490673,
        subUnitId: _0x212507,
        chartId: _0x20195d.id,
        element: _0x3794e0,
        replaceElementId: _0x222f66,
        insertIndex: _0x361a21,
        slideDrawingService: _0x5c0d15,
      });
      if (!_0x549d9e) return false;
      let _0x35c23e = { unitId: _0x490673, dataSource: _0x12ff4a },
        _0x4c40af = { unitId: _0x490673, chart: _0x20195d },
        _0x1a4c22 = [
          { id: c.id, params: _0x35c23e },
          { id: l.id, params: _0x4c40af },
          _0x549d9e.redoMutation,
        ],
        _0x4f8cca = {
          unitId: _0x490673,
          chartId: _0x20195d.id,
          cleanupDataSource: true,
        },
        _0x7547b4 = { unitId: _0x490673, dataSourceId: _0x12ff4a.id },
        _0x3f7cab = [
          _0x549d9e.undoMutation,
          { id: f.id, params: _0x4f8cca },
          { id: s.id, params: _0x7547b4 },
        ],
        _0x16d45c = (0, n.sequenceExecute)(_0x1a4c22, _0x44c723);
      return _0x16d45c.result
        ? (_0x59bee1 !== false &&
            _0x5c0d15.focusDrawing([
              {
                unitId: _0x490673,
                subUnitId: _0x212507,
                drawingId: _0x549d9e.elementId,
              },
            ]),
          _0x20759f.pushUndoRedo({
            unitID: _0x490673,
            undoMutations: _0x3f7cab,
            redoMutations: _0x1a4c22,
          }),
          true)
        : ((0, n.sequenceExecute)(
            _0x16d45c.index === 1
              ? [{ id: s.id, params: _0x7547b4 }]
              : _0x16d45c.index === 2
                ? [
                    { id: f.id, params: _0x4f8cca },
                    { id: s.id, params: _0x7547b4 },
                  ]
                : [],
            _0x44c723,
          ),
          false);
    },
  };
function M(_0x10c617) {
  let _0x3eb225 =
      (_0x10c617 == null ? undefined : _0x10c617.id) ??
      (0, n.generateRandomId)(6),
    _0x57e525 = _0x10c617 == null ? undefined : _0x10c617.name,
    _0x407457 =
      _0x10c617 != null && _0x10c617.source
        ? { id: _0x3eb225, name: _0x57e525, source: _0x10c617.source }
        : {
            id: _0x3eb225,
            name: _0x57e525,
            values: (
              (_0x10c617 == null ? undefined : _0x10c617.values) ?? k
            ).map((_0x2b50ef) => [..._0x2b50ef]),
          };
  return (_0x407457.name ?? delete _0x407457.name, _0x407457);
}
function N(_0x5d6b66) {
  let {
      unitId: _0x4f63ef,
      subUnitId: _0x12361c,
      chartId: _0x13dc46,
      replaceElementId: _0x18da9d,
      insertIndex: _0x352276,
      slideDrawingService: _0x1a7ca5,
    } = _0x5d6b66,
    _0x271ed0 = _0x5d6b66.element
      ? n.Tools["deepClone"](_0x5d6b66.element)
      : {},
    {
      stroke: _0x47df1c,
      transform: _0x1b4773,
      placeholder: _0x4a90e9,
    } = _0x271ed0;
  if (_0x18da9d) {
    let _0x30db20 = _0x1a7ca5.getDrawingByParam({
      unitId: _0x4f63ef,
      subUnitId: _0x12361c,
      drawingId: _0x18da9d,
    });
    if (
      (_0x30db20 == null ? undefined : _0x30db20.sourcePageType) !==
      t.PageTypeEnum["Slide"]
    )
      return null;
    let _0xdc812e = P({
        chartId: _0x13dc46,
        elementId: _0x18da9d,
        stroke: _0x47df1c,
        transform: _0x1b4773,
        placeholder: _0x4a90e9,
      }),
      _0x44e057 = {
        unitId: _0x4f63ef,
        subUnitId: _0x12361c,
        drawingId: _0x18da9d,
        element: _0xdc812e,
        transform: _0xdc812e.transform,
      },
      _0x1f0e66 = {
        unitId: _0x4f63ef,
        subUnitId: _0x12361c,
        drawingId: _0x18da9d,
        element: _0x30db20.element,
        transform: _0x30db20.transform,
      };
    return {
      elementId: _0x18da9d,
      redoMutation: {
        id: t.UpdateSlideElementMutation["id"],
        params: _0x44e057,
      },
      undoMutation: {
        id: t.UpdateSlideElementMutation["id"],
        params: _0x1f0e66,
      },
    };
  }
  _0x271ed0.id ||= (0, n.generateRandomId)(6);
  let _0x37f9f5 = {
      unitId: _0x4f63ef,
      subUnitId: _0x12361c,
      element: P({
        chartId: _0x13dc46,
        elementId: _0x271ed0.id,
        stroke: _0x47df1c,
        transform: _0x1b4773,
        placeholder: _0x4a90e9,
      }),
      insertIndex: _0x352276,
    },
    _0x42d298 = {
      unitId: _0x4f63ef,
      subUnitId: _0x12361c,
      drawingId: _0x271ed0.id,
    };
  return {
    elementId: _0x271ed0.id,
    redoMutation: { id: t.AddSlideElementMutation["id"], params: _0x37f9f5 },
    undoMutation: { id: t.RemoveSlideElementMutation["id"], params: _0x42d298 },
  };
}
function P(_0x4d1bd7) {
  let {
      chartId: _0x43ebab,
      elementId: _0x2313e8,
      stroke: _0x30129c,
      transform: _0x47a8c4,
      placeholder: _0x3f70c0,
    } = _0x4d1bd7,
    _0x3699fd = {
      id: _0x2313e8,
      type: t.PageElementTypeEnum["Chart"],
      chartId: _0x43ebab,
      stroke: _0x30129c ?? A,
      transform: {
        left: (_0x47a8c4 == null ? undefined : _0x47a8c4.left) ?? 120,
        top: (_0x47a8c4 == null ? undefined : _0x47a8c4.top) ?? 80,
        width: (_0x47a8c4 == null ? undefined : _0x47a8c4.width) ?? 480,
        height: (_0x47a8c4 == null ? undefined : _0x47a8c4.height) ?? 320,
        rotation: (_0x47a8c4 == null ? undefined : _0x47a8c4.rotation) ?? 0,
      },
    };
  return (_0x3f70c0 && (_0x3699fd.placeholder = _0x3f70c0), _0x3699fd);
}
const F = {
  id: "slide.command.update-slide-chart-snapshot",
  type: n.CommandType["COMMAND"],
  handler: (_0x406cdc, _0x2cf838) => {
    if (!_0x2cf838) return false;
    let _0x31b97a = (0, t.getSlideCommandTarget)(
      _0x406cdc.get(n.IUniverInstanceService),
      _0x2cf838,
    );
    if (!_0x31b97a) return false;
    let { unitId: _0x3aeb73 } = _0x31b97a,
      { chartId: _0x3aaa3c, patch: _0x56aec4 } = _0x2cf838,
      _0x475e4e = _0x406cdc.get(o).getChart(_0x3aeb73, _0x3aaa3c);
    if (!_0x475e4e) return false;
    let _0x51b476 = _0x406cdc.get(n.ICommandService),
      _0x242e4c = _0x406cdc.get(n.IUndoRedoService),
      _0x499a8a = { unitId: _0x3aeb73, chart: { ..._0x475e4e, ..._0x56aec4 } },
      _0x223da0 = { unitId: _0x3aeb73, chart: _0x475e4e },
      _0x4b956d = [{ id: l.id, params: _0x499a8a }],
      _0x3e2f46 = [{ id: l.id, params: _0x223da0 }];
    return (0, n.sequenceExecute)(_0x4b956d, _0x51b476).result
      ? (_0x242e4c.pushUndoRedo({
          unitID: _0x3aeb73,
          undoMutations: _0x3e2f46,
          redoMutations: _0x4b956d,
        }),
        true)
      : false;
  },
};
var I = "@univerjs-pro/slides-chart",
  L = "1.0.0-insiders.20260907-70fc579";
const R = {};
let z = class extends n.Disposable {
  constructor(_0x789a1d, _0x4a46bf, _0x27396d) {
    (super(),
      (this._resourceManagerService = _0x789a1d),
      (this._resourceService = _0x4a46bf),
      (this._modelService = _0x27396d),
      x(this, "_resourceDisposable", null),
      this._initResource());
  }
  _initResource() {
    ((this._resourceDisposable = this._resourceManagerService[
      "registerPluginResource"
    ]({
      pluginName: "SLIDE_CHART_PLUGIN",
      businesses: [n.UniverInstanceType["UNIVER_SLIDE"]],
      toJson: (_0x4fa3a2) => this._resourceService["serializeUnit"](_0x4fa3a2),
      parseJson: (_0x201e07) => JSON.parse(_0x201e07),
      onLoad: (_0x19e528, _0x471065) => {
        this._resourceService["loadUnit"](_0x19e528, _0x471065);
      },
      onUnLoad: (_0x2bdfba) => {
        (this._modelService["removeUnit"](_0x2bdfba),
          this._resourceService["unloadUnit"](_0x2bdfba));
      },
    })),
      this.disposeWithMe(this._resourceDisposable));
  }
};
z = C(
  [
    S(0, n.IResourceManagerService),
    S(1, (0, n.Inject)(o)),
    S(2, (0, n.Inject)(w)),
  ],
  z,
);
let B = class extends n.Plugin {
  constructor(_0x2f85a5 = R, _0x492373, _0x38cb99, _0x21ce12) {
    (super(),
      (this._config = _0x2f85a5),
      (this._injector = _0x492373),
      (this._configService = _0x38cb99),
      (this._commandService = _0x21ce12));
    let { ..._0x33f32c } = (0, n.merge)({}, R, this._config);
    (this._configService["setConfig"]("slides-chart.config", _0x33f32c),
      this._initCommands());
  }
  onStarting() {
    let _0x5c7969 = this._injector;
    ([[o], [w], [z]].forEach((_0x41ebed) => _0x5c7969.add(_0x41ebed)),
      (0, n.touchDependencies)(_0x5c7969, [[o], [w], [z]]));
  }
  _initCommands() {
    [j, u, F, _, g, O, p, c, s, l, f].forEach((_0x43363a) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x43363a));
    });
  }
};
(x(B, "type", n.UniverInstanceType["UNIVER_SLIDE"]),
  x(B, "pluginName", "UniverSlidesChartPlugin"),
  x(B, "packageName", I),
  x(B, "version", L),
  (B = C(
    [
      (0, n.DependentOn)(e.UniverChartPlugin, a.UniverLicensePlugin),
      S(1, (0, n.Inject)(n.Injector)),
      S(2, n.IConfigService),
      S(3, n.ICommandService),
    ],
    B,
  )),
  (exports.ChangeSlideChartDataSourceCommand = u),
  (exports.DEFAULT_SLIDE_CHART_ELEMENT_HEIGHT = 320),
  (exports.DEFAULT_SLIDE_CHART_ELEMENT_LEFT = 120),
  (exports.DEFAULT_SLIDE_CHART_ELEMENT_TOP = 80),
  (exports.DEFAULT_SLIDE_CHART_ELEMENT_WIDTH = 480),
  (exports.DEFAULT_SLIDE_CHART_STROKE = A),
  (exports.DEFAULT_SLIDE_CHART_VALUES = k),
  (exports.DuplicateSlideChartDataSourceCommand = O),
  (exports.InsertSlideChartCommand = j),
  (exports.RemoveSlideChartCommand = p),
  (exports.RemoveSlideChartDataSourceMutation = s),
  (exports.RemoveSlideChartSnapshotMutation = f),
  (exports.SetSlideChartDataSourceMutation = c),
  (exports.SetSlideChartSnapshotMutation = l),
  (exports.SlideChartConfigAdapter = T),
  Object.defineProperty(exports, "SlideChartModelService", {
    enumerable: true,
    get: function () {
      return w;
    },
  }),
  (exports.SlideChartResourceService = o),
  Object.defineProperty(exports, "UniverSlidesChartPlugin", {
    enumerable: true,
    get: function () {
      return B;
    },
  }),
  (exports.UpdateSlideChartConfigCommand = g),
  (exports.UpdateSlideChartDataSourceCommand = _),
  (exports.UpdateSlideChartSnapshotCommand = F));
