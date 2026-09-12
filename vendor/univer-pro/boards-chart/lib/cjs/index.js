Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/engine-chart"),
  n = require("@univerjs/core"),
  r = require("rxjs"),
  i = require("@univerjs-pro/engine-shape"),
  a = require("@univerjs-pro/license");
var o = class extends t.ChartResourceRepository {};
const s = {
    id: "board.mutation.remove-board-chart-data-source",
    type: n.CommandType["MUTATION"],
    handler: (_0x3928b1, _0xdf6f43) =>
      _0xdf6f43
        ? _0x3928b1
            .get(o)
            .removeDataSource(_0xdf6f43.unitId, _0xdf6f43.dataSourceId)
        : false,
  },
  c = {
    id: "board.mutation.remove-board-chart-snapshot",
    type: n.CommandType["MUTATION"],
    handler: (_0x5e875c, _0x3c4096) =>
      _0x3c4096
        ? _0x5e875c
            .get(o)
            .removeChart(_0x3c4096.unitId, _0x3c4096.chartId, {
              cleanupDataSource: _0x3c4096.cleanupDataSource,
            }) != null
        : false,
  },
  l = {
    id: "board.mutation.set-board-chart-data-source",
    type: n.CommandType["MUTATION"],
    handler: (_0x2534de, _0x585ad1) =>
      _0x585ad1
        ? (_0x2534de
            .get(o)
            .setDataSource(_0x585ad1.unitId, _0x585ad1.dataSource),
          true)
        : false,
  },
  u = {
    id: "board.mutation.set-board-chart-snapshot",
    type: n.CommandType["MUTATION"],
    handler: (_0xe008e3, _0x158cf9) =>
      _0x158cf9
        ? (_0xe008e3.get(o).setChart(_0x158cf9.unitId, _0x158cf9.chart), true)
        : false,
  },
  d = [
    ["Category", "Value"],
    ["A", 12],
    ["B", 18],
    ["C", 9],
  ],
  f = [
    ["Hierarchy\x201", "Hierarchy 2", "Value"],
    ...(0, t.createChartStarterRows)(t.ChartTypeBits["Treemap"]),
  ],
  p = [
    ["Hierarchy 1", "Hierarchy\x202", "Value"],
    ...(0, t.createChartStarterRows)(t.ChartTypeBits["Sunburst"]),
  ],
  m = [
    ["Label", "Value"],
    ...(0, t.createChartStarterRows)(t.ChartTypeBits["Gauge"]),
  ],
  h = [
    ["Source", "Target", "Value"],
    ...(0, t.createChartStarterRows)(t.ChartTypeBits["Chord"]),
  ],
  g = {
    lineStrokeType: i.ShapeLineTypeEnum["SolidLine"],
    width: 1,
    color: "#d1d5db",
    opacity: 1,
  },
  _ = {};
function v(_0x3e7161, _0x125b0d) {
  return function (_0x3f979b, _0x4dbaab) {
    _0x125b0d(_0x3f979b, _0x4dbaab, _0x3e7161);
  };
}
function y(_0x19a559, _0x15067b, _0x1701d2, _0x404df8) {
  var _0x43ce5f = arguments.length,
    _0x48ad01 =
      _0x43ce5f < 3
        ? _0x15067b
        : _0x404df8 === null
          ? (_0x404df8 = Object.getOwnPropertyDescriptor(_0x15067b, _0x1701d2))
          : _0x404df8,
    _0x222cc1;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x48ad01 = Reflect.decorate(_0x19a559, _0x15067b, _0x1701d2, _0x404df8);
  else {
    for (var _0x3c15f6 = _0x19a559.length - 1; _0x3c15f6 >= 0; _0x3c15f6--)
      (_0x222cc1 = _0x19a559[_0x3c15f6]) &&
        (_0x48ad01 =
          (_0x43ce5f < 3
            ? _0x222cc1(_0x48ad01)
            : _0x43ce5f > 3
              ? _0x222cc1(_0x15067b, _0x1701d2, _0x48ad01)
              : _0x222cc1(_0x15067b, _0x1701d2)) || _0x48ad01);
  }
  return (
    _0x43ce5f > 3 &&
      _0x48ad01 &&
      Object.defineProperty(_0x15067b, _0x1701d2, _0x48ad01),
    _0x48ad01
  );
}
let b = class {
  constructor(_0x24def6, _0x2b04de, _0x171ad3, _0x31c37b, _0x201aad) {
    ((this._commandService = _0x24def6),
      (this._undoRedoService = _0x2b04de),
      (this._resourceService = _0x171ad3),
      (this._elementService = _0x31c37b),
      (this._configService = _0x201aad));
  }
  changeChartDataSource(_0x29db9f) {
    let _0x273e40 = this._resourceService["getChart"](
        _0x29db9f.unitId,
        _0x29db9f.chartId,
      ),
      _0x13184 = _0x273e40
        ? this._resourceService["getDataSource"](
            _0x29db9f.unitId,
            _0x273e40.dataSourceId,
          )
        : undefined;
    if (!_0x273e40 || !_0x13184) return false;
    let _0x2693b4 = this._resourceService["isDataSourceShared"](
        _0x29db9f.unitId,
        _0x13184.id,
      ),
      _0x40ba09 = _0x2693b4
        ? (_0x29db9f.duplicateDataSourceId ?? (0, n.generateRandomId)())
        : _0x13184.id,
      _0x27530a = C(
        _0x40ba09,
        _0x29db9f.dataSource,
        _0x29db9f.name ?? _0x13184.name,
      ),
      _0x135e2c = {
        id: l.id,
        params: { unitId: _0x29db9f.unitId, dataSource: _0x27530a },
      },
      _0x599d1d = [_0x135e2c],
      _0x44cb14 = [
        {
          id: l.id,
          params: { unitId: _0x29db9f.unitId, dataSource: _0x13184 },
        },
      ];
    if (
      !this._commandService["syncExecuteCommand"](
        _0x135e2c.id,
        _0x135e2c.params,
      )
    )
      return false;
    if (_0x2693b4) {
      let _0x2e1f45 = {
          id: u.id,
          params: {
            unitId: _0x29db9f.unitId,
            chart: { ..._0x273e40, dataSourceId: _0x40ba09 },
          },
        },
        _0x15f377 = {
          id: s.id,
          params: { unitId: _0x29db9f.unitId, dataSourceId: _0x40ba09 },
        };
      if (
        !this._commandService["syncExecuteCommand"](
          _0x2e1f45.id,
          _0x2e1f45.params,
        )
      )
        return (
          this._commandService["syncExecuteCommand"](
            _0x15f377.id,
            _0x15f377.params,
          ),
          false
        );
      (_0x599d1d.push(_0x2e1f45),
        _0x44cb14.splice(
          0,
          1,
          { id: u.id, params: { unitId: _0x29db9f.unitId, chart: _0x273e40 } },
          _0x15f377,
        ));
    }
    return (
      this._undoRedoService["pushUndoRedo"]({
        unitID: _0x29db9f.unitId,
        undoMutations: _0x44cb14,
        redoMutations: _0x599d1d,
      }),
      true
    );
  }
  getInsertChartMutationInfos(_0x38b2d7) {
    var _0x4d2d48;
    if (!E(_0x38b2d7)) return null;
    let _0x228301 = x(
      _0x38b2d7,
      (_0x4d2d48 = this._configService["getConfig"]("boards-chart.config")) ==
        null
        ? undefined
        : _0x4d2d48.defaultChartSize,
    );
    if (!_0x228301) return null;
    let _0x53b0ac = (0, e.createAddBoardElementsMutationInfos)({
      unitId: _0x38b2d7.unitId,
      subUnitId: _0x38b2d7.subUnitId,
      elements: [_0x228301.element],
      insertIndex: _0x38b2d7.insertIndex,
      elementData: this._elementService["getElementData"](
        _0x38b2d7.unitId,
        _0x38b2d7.subUnitId,
      ),
      elementOrder: this._elementService["getElementOrder"](
        _0x38b2d7.unitId,
        _0x38b2d7.subUnitId,
      ),
    });
    return _0x53b0ac ? S(_0x38b2d7.unitId, _0x228301, _0x53b0ac) : null;
  }
  getRemoveChartMutationInfos(_0x12e8a3) {
    let _0x2a0ee4 = this._resourceService["getChart"](
      _0x12e8a3.unitId,
      _0x12e8a3.element["chartId"],
    );
    if (!_0x2a0ee4) return { redoMutations: [], undoMutations: [] };
    let _0x302c9c = this._resourceService["getDataSource"](
        _0x12e8a3.unitId,
        _0x2a0ee4.dataSourceId,
      ),
      _0x5264ba =
        this._resourceService["getDataSourceSharingCount"](
          _0x12e8a3.unitId,
          _0x2a0ee4.dataSourceId,
        ) <= 1,
      _0x2da96b = [
        {
          id: c.id,
          params: {
            unitId: _0x12e8a3.unitId,
            chartId: _0x12e8a3.element["chartId"],
          },
        },
      ],
      _0x6e5971 = [
        { id: u.id, params: { unitId: _0x12e8a3.unitId, chart: _0x2a0ee4 } },
      ];
    return (
      _0x5264ba &&
        _0x302c9c &&
        (_0x2da96b.push({
          id: s.id,
          params: {
            unitId: _0x12e8a3.unitId,
            dataSourceId: _0x2a0ee4.dataSourceId,
          },
        }),
        _0x6e5971.unshift({
          id: l.id,
          params: { unitId: _0x12e8a3.unitId, dataSource: _0x302c9c },
        })),
      { redoMutations: _0x2da96b, undoMutations: _0x6e5971 }
    );
  }
};
b = y(
  [
    v(0, n.ICommandService),
    v(1, n.IUndoRedoService),
    v(2, (0, n.Inject)(o)),
    v(3, e.IBoardElementService),
    v(4, n.IConfigService),
  ],
  b,
);
function x(_0x1e7de6, _0x2c5998) {
  var _0x3a60d8, _0x25fdfb;
  let _0x5c9bcf = w(_0x1e7de6.options),
    _0x3bce38 = _0x1e7de6.chartId ?? (0, n.generateRandomId)(6),
    _0x5807bd = _0x1e7de6.dataSourceId ?? (0, n.generateRandomId)(6),
    _0x5ebc45 = T(_0x5c9bcf.data, _0x5c9bcf.chartType);
  if (_0x5ebc45.length === 0) return null;
  let _0x3d22e9 =
    (_0x3a60d8 = _0x5c9bcf.dataSource) != null && _0x3a60d8.source
      ? { id: _0x5807bd, source: _0x5c9bcf.dataSource["source"] }
      : {
          id: _0x5807bd,
          name:
            typeof _0x5c9bcf.data == "object" && !Array.isArray(_0x5c9bcf.data)
              ? _0x5c9bcf.data["name"]
              : undefined,
          values: _0x5ebc45,
        };
  _0x3d22e9.name ?? delete _0x3d22e9.name;
  let _0x15cd26 = {
    id: _0x3bce38,
    dataSourceId: _0x5807bd,
    chartType: _0x5c9bcf.chartType ?? t.ChartTypeBits["Column"],
    style: _0x5c9bcf.style,
    context: {
      ..._0x5c9bcf.context,
      headerRow:
        ((_0x25fdfb = _0x5c9bcf.context) == null
          ? undefined
          : _0x25fdfb.headerRow) ?? t.DEFAULT_CHART_RESOURCE_HEADER_ROW,
    },
    state: _0x5c9bcf.state,
    dataAggregation: _0x5c9bcf.dataAggregation,
  };
  O(_0x15cd26);
  let _0x1338f6 = D(
      _0x1e7de6.width ?? (_0x2c5998 == null ? undefined : _0x2c5998.width),
      480,
    ),
    _0x4c4477 = D(
      _0x1e7de6.height ?? (_0x2c5998 == null ? undefined : _0x2c5998.height),
      320,
    );
  return {
    chart: _0x15cd26,
    dataSource: _0x3d22e9,
    element: {
      id: _0x1e7de6.elementId ?? (0, n.generateRandomId)(6),
      type: e.BoardElementType["Chart"],
      chartId: _0x3bce38,
      parentId: _0x1e7de6.parentId,
      laneId: _0x1e7de6.laneId,
      stroke: g,
      transform: {
        left: _0x1e7de6.left,
        top: _0x1e7de6.top,
        width: _0x1338f6,
        height: _0x4c4477,
        rotation: 0,
      },
    },
  };
}
function S(_0x5cbe95, _0x42c095, _0x2f16c1) {
  let { chart: _0x493de1, dataSource: _0x3064c6 } = _0x42c095,
    _0x50e51d = {
      id: s.id,
      params: { unitId: _0x5cbe95, dataSourceId: _0x3064c6.id },
    },
    _0x3c70cc = {
      id: c.id,
      params: { unitId: _0x5cbe95, chartId: _0x493de1.id },
    };
  return {
    redoMutations: [
      { id: l.id, params: { unitId: _0x5cbe95, dataSource: _0x3064c6 } },
      { id: u.id, params: { unitId: _0x5cbe95, chart: _0x493de1 } },
      ..._0x2f16c1.redoMutations,
    ],
    undoMutations: [..._0x2f16c1.undoMutations, _0x3c70cc, _0x50e51d],
    rollbackMutationGroups: [
      [_0x50e51d],
      [_0x3c70cc],
      ...k(_0x2f16c1.redoMutations, _0x2f16c1.undoMutations),
    ],
  };
}
function C(_0x12b129, _0xca2b7c, _0x5ca1ac) {
  let _0x6aa9b3 = (0, t.isInlineChartDataSource)(_0xca2b7c)
    ? { id: _0x12b129, name: _0x5ca1ac, values: _0xca2b7c.values }
    : { id: _0x12b129, name: _0x5ca1ac, source: _0xca2b7c.source };
  return (_0x6aa9b3.name ?? delete _0x6aa9b3.name, _0x6aa9b3);
}
function w(_0x27b8f1) {
  return _0x27b8f1 && typeof _0x27b8f1 == "object" ? _0x27b8f1 : {};
}
function T(_0x1191c8, _0x536140) {
  let _0x5b1b8c = Array.isArray(_0x1191c8)
      ? _0x1191c8
      : _0x1191c8 == null
        ? undefined
        : _0x1191c8.values,
    _0x564726;
  switch (_0x536140) {
    case t.ChartTypeBits["Treemap"]:
      _0x564726 = f;
      break;
    case t.ChartTypeBits["Sunburst"]:
      _0x564726 = p;
      break;
    case t.ChartTypeBits["Gauge"]:
      _0x564726 = m;
      break;
    case t.ChartTypeBits["Chord"]:
      _0x564726 = h;
      break;
    default:
      _0x564726 = d;
  }
  return (_0x5b1b8c ?? _0x564726).map((_0xc568a6) => [..._0xc568a6]);
}
function E(_0xd1aaf9) {
  return (
    !!_0xd1aaf9.unitId &&
    !!_0xd1aaf9.subUnitId &&
    Number.isFinite(_0xd1aaf9.left) &&
    Number.isFinite(_0xd1aaf9.top)
  );
}
function D(_0x21899d, _0x44bb45) {
  return _0x21899d !== undefined && Number.isFinite(_0x21899d) && _0x21899d > 0
    ? _0x21899d
    : _0x44bb45;
}
function O(_0x37251b) {
  Object.keys(_0x37251b).forEach((_0x3a1d2f) => {
    _0x37251b[_0x3a1d2f] === undefined && delete _0x37251b[_0x3a1d2f];
  });
}
function k(_0xae7a1c, _0x29908d) {
  let _0x5d8241 = [..._0x29908d],
    _0x56d0e9 = _0xae7a1c.map(() => []);
  for (let _0x5442eb = _0xae7a1c.length - 1; _0x5442eb >= 0; _0x5442eb--) {
    let _0x5130c1 = _0xae7a1c[_0x5442eb],
      _0x1f9944 = _0x5d8241.findIndex((_0x25a3f6) => A(_0x5130c1, _0x25a3f6));
    _0x1f9944 < 0 || (_0x56d0e9[_0x5442eb] = _0x5d8241.splice(_0x1f9944, 1));
  }
  return _0x56d0e9;
}
function A(_0x3ae45b, _0x51b134) {
  let _0x1a665f =
      _0x3ae45b.id === e.AddBoardElementMutation["id"] &&
      _0x51b134.id === e.RemoveBoardElementMutation["id"],
    _0x501c4a =
      _0x3ae45b.id === e.UpdateBoardElementMutation["id"] &&
      _0x51b134.id === e.UpdateBoardElementMutation["id"];
  return (_0x1a665f || _0x501c4a) && j(_0x3ae45b) === j(_0x51b134);
}
function j(_0x250004) {
  var _0x56ce26;
  let _0x4ca951 = _0x250004.params;
  return (
    ((_0x56ce26 = _0x4ca951.element) == null ? undefined : _0x56ce26.id) ??
    _0x4ca951.elementId
  );
}
const M = {
    id: "board.command.change-chart-data-source",
    type: n.CommandType["COMMAND"],
    handler: (_0x3d05b7, _0x3f0f64) =>
      _0x3f0f64 ? _0x3d05b7.get(b).changeChartDataSource(_0x3f0f64) : false,
  },
  N = Symbol("ReplaceBoardChartConfig");
function P(_0x356898) {
  return { ..._0x356898, [N]: true };
}
const F = {
    id: "board.command.update-board-chart-config",
    type: n.CommandType["COMMAND"],
    replaceConfig: P,
    handler: (_0x1eb5ab, _0x5e74dc) => {
      if (!_0x5e74dc) return false;
      let { unitId: _0x5be11e, chartId: _0x2520d1 } = _0x5e74dc,
        _0x3bf6cb = _0x5e74dc[N] === true,
        _0x41ac5e = _0x1eb5ab.get(o).getChart(_0x5be11e, _0x2520d1);
      if (!_0x41ac5e) return false;
      let _0xd966d0 = t.chartConfigInterpreter["apply"](
        _0x41ac5e,
        _0x5e74dc,
        _0x3bf6cb,
      );
      if (!_0xd966d0) return false;
      let _0x2988f4 = [
          { id: u.id, params: { unitId: _0x5be11e, chart: _0xd966d0 } },
        ],
        _0x1ec252 = [
          { id: u.id, params: { unitId: _0x5be11e, chart: _0x41ac5e } },
        ];
      return (0, n.sequenceExecute)(_0x2988f4, _0x1eb5ab.get(n.ICommandService))
        .result
        ? (_0x1eb5ab
            .get(n.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x5be11e,
              undoMutations: _0x1ec252,
              redoMutations: _0x2988f4,
            }),
          true)
        : false;
    },
  },
  I = {
    id: "board.command.update-board-chart-data-source",
    type: n.CommandType["COMMAND"],
    handler: (_0x290b95, _0x3fe61d) => {
      if (!_0x3fe61d) return false;
      let {
          unitId: _0x42c895,
          dataSourceId: _0x9d03f,
          values: _0x3c3b14,
          name: _0x3fb6e7,
        } = _0x3fe61d,
        _0x20fdfe = _0x290b95.get(o).getDataSource(_0x42c895, _0x9d03f);
      if (!_0x20fdfe || _0x3c3b14.length === 0) return false;
      let _0xac568c = {
          unitId: _0x42c895,
          dataSource: {
            id: _0x9d03f,
            values: _0x3c3b14,
            name: _0x3fb6e7 ?? _0x20fdfe.name,
          },
        },
        _0x145875 = { unitId: _0x42c895, dataSource: _0x20fdfe },
        _0x30242b = [{ id: l.id, params: _0xac568c }],
        _0x2752fa = [{ id: l.id, params: _0x145875 }];
      return (0, n.sequenceExecute)(_0x30242b, _0x290b95.get(n.ICommandService))
        .result
        ? (_0x290b95
            .get(n.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x42c895,
              undoMutations: _0x2752fa,
              redoMutations: _0x30242b,
            }),
          true)
        : false;
    },
  };
let L = class extends t.ChartResourceRuntimeService {
  constructor(_0x2776c5, _0x223549, _0x134ebc) {
    super(_0x2776c5, _0x223549, t.buildChartDataSetFromValues, _0x134ebc);
  }
};
L = y(
  [
    v(0, (0, n.Inject)(o)),
    v(1, (0, n.Inject)(n.Injector)),
    v(2, (0, n.Inject)(t.IChartDataSourceRuntimeService)),
  ],
  L,
);
var R = class i {
  static isRowRecordDirection(_0x3ebc50) {
    return _0x3ebc50 !== "column";
  }
  constructor(_0x34ea43) {
    this._context = _0x34ea43;
  }
  describe(_0x19462b = {}, _0x1401df) {
    var _0x2119dd, _0x386af0;
    let {
        boardModel: _0xf1ab6d,
        chartId: _0x1757c3,
        elementId: _0x5a99a2,
        injector: _0x3f50bd,
        pageId: _0x377b8f,
        unitId: _0x1200b1,
      } = this._context,
      _0x22d9d7 = _0x3f50bd.get(L).ensureChartModel(_0x1200b1, _0x1757c3),
      _0x33c375 = _0x3f50bd.get(o).getChart(_0x1200b1, _0x1757c3),
      _0x7061c4 =
        (_0x2119dd = _0xf1ab6d.getSnapshot().pages[_0x377b8f]) == null
          ? undefined
          : _0x2119dd.elements[_0x5a99a2];
    if (!_0x22d9d7 || !_0x33c375 || !_0x7061c4)
      throw Error("Board chart not found: " + _0x1757c3);
    let _0x40da65 =
      ((_0x386af0 = _0xf1ab6d.getSnapshot().pages[_0x377b8f]) == null
        ? undefined
        : _0x386af0.elementOrder["indexOf"](_0x5a99a2)) ?? -1;
    return (0, t.omitUndefinedFields)({
      ...(0, t.describeChartModel)(_0x22d9d7.model, _0x19462b, _0x1401df),
      id: _0x1757c3,
      position: {
        x: _0x7061c4.transform["left"] ?? 0,
        y: _0x7061c4.transform["top"] ?? 0,
      },
      size: {
        width: _0x7061c4.transform["width"] ?? 0,
        height: _0x7061c4.transform["height"] ?? 0,
      },
      containerId: _0x7061c4.parentId,
      laneId: _0x7061c4.laneId,
      zOrder: _0x40da65 < 0 ? undefined : _0x40da65,
    });
  }
  getInfo() {
    var _0x55ff33;
    let _0x5b2737 = this.describe(),
      _0xbe1e7 = this.getDataSource();
    if (!_0xbe1e7)
      throw Error(
        "Board chart data source not found: " + this._context["chartId"],
      );
    let _0xf62657 =
      ((_0x55ff33 =
        this._context["boardModel"].getSnapshot().pages[
          this._context["pageId"]
        ]) == null
        ? undefined
        : _0x55ff33.elementOrder["indexOf"](this._context["elementId"])) ?? -1;
    return {
      config: (0, t.toChartCreateConfigSnapshot)(_0x5b2737),
      dataSource: (0, t.isInlineChartDataSource)(_0xbe1e7)
        ? { values: n.Tools["deepClone"](_0xbe1e7.values) }
        : (0, t.isReferencedChartDataSource)(_0xbe1e7)
          ? { source: n.Tools["deepClone"](_0xbe1e7.source) }
          : (() => {
              throw Error(
                "Invalid Board chart data source: " + this._context["chartId"],
              );
            })(),
      position: n.Tools["deepClone"](_0x5b2737.position),
      size: n.Tools["deepClone"](_0x5b2737.size),
      containerId: _0x5b2737.containerId ?? undefined,
      laneId: _0x5b2737.laneId ?? undefined,
      zOrder: _0xf62657 < 0 ? undefined : _0xf62657,
    };
  }
  getData() {
    let {
        chartId: _0x3353c9,
        injector: _0x51ac72,
        unitId: _0x42139e,
      } = this._context,
      _0x1a5120 = _0x51ac72.get(o).getChart(_0x42139e, _0x3353c9),
      _0x1950ab = _0x1a5120
        ? _0x51ac72.get(o).getDataSource(_0x42139e, _0x1a5120.dataSourceId)
        : null;
    return (0, t.isInlineChartDataSource)(_0x1950ab) ? _0x1950ab.values : null;
  }
  getDataSource() {
    let {
        chartId: _0x508f66,
        injector: _0x65c855,
        unitId: _0x9df8d7,
      } = this._context,
      _0x360004 = _0x65c855.get(o).getChart(_0x9df8d7, _0x508f66);
    return (
      (_0x360004
        ? _0x65c855.get(o).getDataSource(_0x9df8d7, _0x360004.dataSourceId)
        : null) ?? null
    );
  }
  async commitDataSource(_0x4aef31) {
    let { injector: _0x5bcef5 } = this._context,
      _0x5cdaa5 = (0, t.isReferencedChartDataSource)(_0x4aef31)
        ? _0x4aef31.source
        : undefined,
      _0x57fc41 = _0x5cdaa5
        ? _0x5bcef5.get(t.IChartDataSourceRuntimeService).acquire(_0x5cdaa5)
        : null;
    try {
      if (_0x57fc41) {
        let _0x19960a = await (0, r.firstValueFrom)(
          _0x57fc41.state$["pipe"](
            (0, r.filter)(
              ({ status: _0x1e020c }) =>
                _0x1e020c !== t.ChartDataSourceRuntimeStatus["LOADING"],
            ),
          ),
        );
        if (_0x19960a.status !== t.ChartDataSourceRuntimeStatus["READY"])
          throw _0x19960a.error instanceof Error
            ? _0x19960a.error
            : Error(_0x5cdaa5 == null ? undefined : _0x5cdaa5.kind);
      }
      this._commitDataSource(_0x4aef31);
    } finally {
      _0x57fc41 == null || _0x57fc41.dispose();
    }
  }
  async commitChanges(_0x1e454f, _0x230f1c, _0x2029a8, _0x23475e = false) {
    let { injector: _0x5bbc9a } = this._context,
      _0x20d97a = (0, t.isReferencedChartDataSource)(_0x1e454f)
        ? _0x1e454f.source
        : undefined,
      _0x16e41a = _0x20d97a
        ? _0x5bbc9a.get(t.IChartDataSourceRuntimeService).acquire(_0x20d97a)
        : null;
    try {
      if (_0x16e41a) {
        let _0x55c686 = await (0, r.firstValueFrom)(
          _0x16e41a.state$["pipe"](
            (0, r.filter)(
              ({ status: _0x2470af }) =>
                _0x2470af !== t.ChartDataSourceRuntimeStatus["LOADING"],
            ),
          ),
        );
        if (_0x55c686.status !== t.ChartDataSourceRuntimeStatus["READY"])
          throw _0x55c686.error instanceof Error
            ? _0x55c686.error
            : Error(_0x20d97a == null ? undefined : _0x20d97a.kind);
      }
      (Object.keys(_0x230f1c).length > 0 &&
        (_0x23475e ? this._replaceConfig(_0x230f1c) : this.commit(_0x230f1c)),
        Object.keys(_0x2029a8).length > 0 && this.commitHost(_0x2029a8),
        _0x1e454f && this._commitDataSource(_0x1e454f));
    } finally {
      _0x16e41a == null || _0x16e41a.dispose();
    }
  }
  refreshDataSource() {
    let {
      chartId: _0xd3cee2,
      injector: _0x22f360,
      unitId: _0x4d0b46,
    } = this._context;
    return _0x22f360.get(L).refreshChartDataSource(_0x4d0b46, _0xd3cee2);
  }
  commit(_0x80f09a) {
    var _0x393264;
    let {
        chartId: _0x5b9320,
        injector: _0x73bc61,
        unitId: _0x467176,
      } = this._context,
      _0x279f20 = _0x73bc61.get(L).ensureChartModel(_0x467176, _0x5b9320);
    if (!_0x279f20) throw Error("Board chart not found: " + _0x5b9320);
    let _0x118e69 = (0, t.toChartModelUpdate)(_0x80f09a, {
      series:
        (_0x393264 = _0x279f20.model["config"]) == null
          ? undefined
          : _0x393264.series,
      currentChartType: _0x279f20.model["chartType"],
      currentStyle: _0x279f20.model["style"],
      currentContext: _0x279f20.model["context"],
      currentDataAggregation: _0x279f20.model["dataAggregation"],
    });
    if (
      !_0x73bc61
        .get(n.ICommandService)
        .syncExecuteCommand(
          F.id,
          F.replaceConfig({
            unitId: _0x467176,
            chartId: _0x5b9320,
            ..._0x118e69,
          }),
        )
    )
      throw Error("Failed to update Board chart configuration.");
  }
  update(_0x251168) {
    let _0x3ddae1 = {};
    return (
      _0x251168.position !== undefined &&
        (_0x3ddae1.position = _0x251168.position),
      _0x251168.size !== undefined && (_0x3ddae1.size = _0x251168.size),
      Object.prototype["hasOwnProperty"].call(_0x251168, "containerId") &&
        (_0x3ddae1.containerId = _0x251168.containerId ?? null),
      Object.prototype["hasOwnProperty"].call(_0x251168, "laneId") &&
        (_0x3ddae1.laneId = _0x251168.laneId ?? null),
      _0x251168.zOrder !== undefined && (_0x3ddae1.zOrder = _0x251168.zOrder),
      this.commitChanges(
        _0x251168.dataSource,
        _0x251168.config,
        _0x3ddae1,
        true,
      )
    );
  }
  _replaceConfig(_0x2a75bb) {
    var _0x36664f;
    let {
        chartId: _0x2178d3,
        injector: _0x192fa8,
        unitId: _0x5399c2,
      } = this._context,
      _0x4cfe95 = _0x192fa8.get(L).ensureChartModel(_0x5399c2, _0x2178d3);
    if (!_0x4cfe95) throw Error("Board chart not found: " + _0x2178d3);
    let _0x3b825b = (0, t.toChartModelConfigReplacement)(_0x2a75bb, {
      series:
        (_0x36664f = _0x4cfe95.model["config"]) == null
          ? undefined
          : _0x36664f.series,
      currentStyle: _0x4cfe95.model["style"],
    });
    if (
      !_0x192fa8
        .get(n.ICommandService)
        .syncExecuteCommand(
          F.id,
          F.replaceConfig({
            unitId: _0x5399c2,
            chartId: _0x2178d3,
            ..._0x3b825b,
          }),
        )
    )
      throw Error("Failed to update Board chart configuration.");
  }
  setDataSource(_0x409587) {
    return this.commitDataSource(
      Array.isArray(_0x409587)
        ? { values: _0x409587 }
        : {
            source:
              t.ResourceRefChartDataSourceAdapter["toReference"](_0x409587),
          },
    );
  }
  setAbsolutePosition(_0x4a453a, _0x512338) {
    this.commitHost({ position: { x: _0x4a453a, y: _0x512338 } });
  }
  setSize(_0x464b37, _0x207a22) {
    this.commitHost({ size: { width: _0x464b37, height: _0x207a22 } });
  }
  arrange(_0x5b1a31) {
    var _0x9bdc1b;
    let {
        boardModel: _0xd3c45d,
        elementId: _0x45df7b,
        injector: _0x53d68c,
        pageId: _0xa7f36b,
        unitId: _0x1b7b6e,
      } = this._context,
      _0x3d173f =
        ((_0x9bdc1b = _0xd3c45d.getSnapshot().pages[_0xa7f36b]) == null
          ? undefined
          : _0x9bdc1b.elementOrder) ?? [],
      _0x8f7a71 = _0x3d173f.indexOf(_0x45df7b);
    if (_0x8f7a71 < 0)
      throw Error("Board\x20chart\x20element\x20not\x20found:\x20" + _0x45df7b);
    if (
      (0, n.getDrawingOrderIndex)(_0x8f7a71, _0x3d173f.length, _0x5b1a31) !==
        _0x8f7a71 &&
      !_0x53d68c
        .get(n.ICommandService)
        .syncExecuteCommand(e.ReorderBoardElementsOperation["id"], {
          unitId: _0x1b7b6e,
          subUnitId: _0xa7f36b,
          elementIds: [_0x45df7b],
          placement: B(_0x5b1a31),
        })
    )
      throw Error("Failed to arrange Board chart.");
  }
  setZOrder(_0x3a89a2) {
    this._commitZOrder(_0x3a89a2);
  }
  resolveData(_0x58c960, _0x3aa9a9) {
    let {
        chartId: _0x36ba28,
        injector: _0x53869b,
        unitId: _0x57a3a3,
      } = this._context,
      _0x1292b0 = _0x53869b.get(L).ensureChartModel(_0x57a3a3, _0x36ba28);
    if (!_0x1292b0) throw Error("Board chart not found: " + _0x36ba28);
    return (0, t.buildChartPreviewData)(_0x1292b0.model, _0x58c960, _0x3aa9a9);
  }
  resolveDataSet(_0xad0625) {
    var _0x4e1da3, _0x371a3f;
    let {
        chartId: _0x8d505d,
        injector: _0x50341f,
        unitId: _0x1cc986,
      } = this._context,
      _0x4b1377 = _0x50341f.get(L).ensureChartModel(_0x1cc986, _0x8d505d),
      _0x25b780 = _0x50341f.get(o).getChart(_0x1cc986, _0x8d505d);
    if (!_0x4b1377 || !_0x25b780)
      throw Error("Board chart not found: " + _0x8d505d);
    return (0, t.buildOrientedChartDataSet)(_0xad0625, {
      headerRow:
        ((_0x4e1da3 = _0x25b780.context) == null
          ? undefined
          : _0x4e1da3.headerRow) ?? t.DEFAULT_CHART_RESOURCE_HEADER_ROW,
      isRowDirection: i.isRowRecordDirection(
        (_0x371a3f = _0x25b780.context) == null ? undefined : _0x371a3f.orient,
      ),
    });
  }
  commitHost(_0x14f90a) {
    (this._commitData(_0x14f90a.data),
      this._commitElement(_0x14f90a),
      this._commitZOrder(_0x14f90a.zOrder));
  }
  remove() {
    let {
      elementId: _0x20af9c,
      injector: _0x2aaa50,
      pageId: _0xcae536,
      unitId: _0x51c6ee,
    } = this._context;
    return _0x2aaa50
      .get(n.ICommandService)
      .syncExecuteCommand(e.RemoveBoardElementCommand["id"], {
        unitId: _0x51c6ee,
        subUnitId: _0xcae536,
        elementId: _0x20af9c,
      });
  }
  _commitData(_0x23234f) {
    if (_0x23234f === undefined) return;
    let {
        chartId: _0xf77396,
        injector: _0x5c86d7,
        unitId: _0x5b8e1e,
      } = this._context,
      _0x233fc4 = _0x5c86d7.get(o).getChart(_0x5b8e1e, _0xf77396);
    if (!(
      _0x233fc4 &&
      _0x5c86d7
        .get(n.ICommandService)
        .syncExecuteCommand(I.id, {
          unitId: _0x5b8e1e,
          dataSourceId: _0x233fc4.dataSourceId,
          values: _0x23234f,
        })
    ))
      throw Error("Failed to update Board chart data.");
  }
  _commitDataSource(_0x86626c) {
    let {
      chartId: _0x19ea9f,
      injector: _0x2130dc,
      unitId: _0x371aa7,
    } = this._context;
    if (
      !_0x2130dc
        .get(n.ICommandService)
        .syncExecuteCommand(M.id, {
          unitId: _0x371aa7,
          chartId: _0x19ea9f,
          dataSource: _0x86626c,
        })
    )
      throw Error(M.id);
  }
  _commitElement({
    containerId: _0x5d9c48,
    position: _0x2bfd82,
    size: _0x413b41,
    laneId: _0x48fb08,
  }) {
    var _0x2f4c2c;
    if (
      !z({
        containerId: _0x5d9c48,
        position: _0x2bfd82,
        size: _0x413b41,
        laneId: _0x48fb08,
      })
    )
      return;
    let {
        boardModel: _0x55e9ee,
        elementId: _0x54a5a4,
        injector: _0x491185,
        pageId: _0x27a6c6,
        unitId: _0x450a78,
      } = this._context,
      _0x1043e6 =
        (_0x2f4c2c = _0x55e9ee.getSnapshot().pages[_0x27a6c6]) == null
          ? undefined
          : _0x2f4c2c.elements[_0x54a5a4];
    if (!_0x1043e6) throw Error("Board chart element not found: " + _0x54a5a4);
    let _0xf7cf65 = {
      ..._0x1043e6,
      parentId:
        _0x5d9c48 === undefined ? _0x1043e6.parentId : (_0x5d9c48 ?? undefined),
      laneId:
        _0x48fb08 === undefined ? _0x1043e6.laneId : (_0x48fb08 ?? undefined),
      transform: {
        ..._0x1043e6.transform,
        left:
          (_0x2bfd82 == null ? undefined : _0x2bfd82.x) ??
          _0x1043e6.transform["left"],
        top:
          (_0x2bfd82 == null ? undefined : _0x2bfd82.y) ??
          _0x1043e6.transform["top"],
        width:
          (_0x413b41 == null ? undefined : _0x413b41.width) ??
          _0x1043e6.transform["width"],
        height:
          (_0x413b41 == null ? undefined : _0x413b41.height) ??
          _0x1043e6.transform["height"],
      },
    };
    if (
      !_0x491185
        .get(n.ICommandService)
        .syncExecuteCommand(e.UpdateBoardElementCommand["id"], {
          unitId: _0x450a78,
          subUnitId: _0x27a6c6,
          elementId: _0x54a5a4,
          element: _0xf7cf65,
          transform: {
            left: _0xf7cf65.transform["left"],
            top: _0xf7cf65.transform["top"],
            width: _0xf7cf65.transform["width"],
            height: _0xf7cf65.transform["height"],
            angle: _0xf7cf65.transform["rotation"] ?? 0,
            flipX: _0xf7cf65.transform["flipX"],
            flipY: _0xf7cf65.transform["flipY"],
          },
        })
    )
      throw Error("Failed\x20to\x20update\x20Board\x20chart\x20element.");
  }
  _commitZOrder(_0x3e04f8) {
    if (_0x3e04f8 === undefined) return;
    let {
        boardModel: _0x1ecb52,
        elementId: _0x4eda3f,
        injector: _0x51b081,
        pageId: _0x3d3bdd,
        unitId: _0x4751c3,
      } = this._context,
      _0x2c1c51 = _0x1ecb52.getSnapshot().pages[_0x3d3bdd];
    if (!_0x2c1c51) throw Error("Board page not found: " + _0x3d3bdd);
    let _0x471c22 = _0x2c1c51.elementOrder["indexOf"](_0x4eda3f);
    if (_0x471c22 < 0)
      throw Error("Board chart element not found: " + _0x4eda3f);
    if (
      (0, n.normalizeDrawingOrderIndex)(
        _0x3e04f8,
        _0x2c1c51.elementOrder["length"],
      ) !== _0x471c22 &&
      !_0x51b081
        .get(n.ICommandService)
        .syncExecuteCommand(e.ReorderBoardElementsOperation["id"], {
          unitId: _0x4751c3,
          subUnitId: _0x3d3bdd,
          elementIds: [_0x4eda3f],
          zOrder: _0x3e04f8,
        })
    )
      throw Error("Failed to update Board chart z-order.");
  }
};
function z({
  containerId: _0x3c759a,
  laneId: _0x507fcb,
  position: _0x2a9d32,
  size: _0x20a0c8,
}) {
  return !!(
    _0x2a9d32 ||
    _0x20a0c8 ||
    _0x3c759a !== undefined ||
    _0x507fcb !== undefined
  );
}
function B(_0x2acb02) {
  return _0x2acb02 === n.ArrangeTypeEnum["front"]
    ? "front"
    : _0x2acb02 === n.ArrangeTypeEnum["forward"]
      ? "forward"
      : _0x2acb02 === n.ArrangeTypeEnum["backward"]
        ? "backward"
        : "back";
}
const V = {
  id: "board.command.duplicate-board-chart-data-source",
  type: n.CommandType["COMMAND"],
  handler: (_0x564d80, _0x5a438a) => {
    if (!_0x5a438a) return false;
    let {
        unitId: _0x542b97,
        chartId: _0x3cab1b,
        duplicateDataSourceId: _0x244acc,
      } = _0x5a438a,
      _0x57193f = _0x564d80.get(o),
      _0x391d48 = _0x57193f.getChart(_0x542b97, _0x3cab1b),
      _0x3f19f4 = _0x391d48
        ? _0x57193f.getDataSource(_0x542b97, _0x391d48.dataSourceId)
        : undefined;
    if (!_0x391d48 || !_0x3f19f4) return false;
    let _0x25a6f9 = {
        ..._0x3f19f4,
        id: _0x244acc ?? (0, n.generateRandomId)(),
      },
      _0x7d21d8 = { ..._0x391d48, dataSourceId: _0x25a6f9.id },
      _0x31ddc3 = { unitId: _0x542b97, dataSource: _0x25a6f9 },
      _0x2a759f = { unitId: _0x542b97, dataSourceId: _0x25a6f9.id },
      _0x1f5961 = { unitId: _0x542b97, chart: _0x7d21d8 },
      _0x4abafe = { unitId: _0x542b97, chart: _0x391d48 },
      _0x4733d5 = [
        { id: l.id, params: _0x31ddc3 },
        { id: u.id, params: _0x1f5961 },
      ],
      _0x37365e = [
        { id: u.id, params: _0x4abafe },
        { id: s.id, params: _0x2a759f },
      ];
    return (0, n.sequenceExecute)(_0x4733d5, _0x564d80.get(n.ICommandService))
      .result
      ? (_0x564d80
          .get(n.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x542b97,
            undoMutations: _0x37365e,
            redoMutations: _0x4733d5,
          }),
        true)
      : false;
  },
};
var H = "@univerjs-pro/boards-chart",
  U = "1.0.0-insiders.20260907-70fc579";
function W(_0x585816) {
  "@babel/helpers - typeof";
  return (
    (W =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x517758) {
            return typeof _0x517758;
          }
        : function (_0x2201d7) {
            return _0x2201d7 &&
              typeof Symbol == "function" &&
              _0x2201d7.constructor === Symbol &&
              _0x2201d7 !== Symbol.prototype
              ? "symbol"
              : typeof _0x2201d7;
          }),
    W(_0x585816)
  );
}
function G(_0xb71024, _0x494864) {
  if (W(_0xb71024) != "object" || !_0xb71024) return _0xb71024;
  var _0x2fc212 = _0xb71024[Symbol.toPrimitive];
  if (_0x2fc212 !== undefined) {
    var _0x4f09ae = _0x2fc212.call(_0xb71024, _0x494864 || "default");
    if (W(_0x4f09ae) != "object") return _0x4f09ae;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x494864 === "string" ? String : Number)(_0xb71024);
}
function K(_0x59d91e) {
  var _0x3a9724 = G(_0x59d91e, "string");
  return W(_0x3a9724) == "symbol" ? _0x3a9724 : _0x3a9724 + "";
}
function q(_0x1d0ddd, _0x446e46, _0x5d86dd) {
  return (
    (_0x446e46 = K(_0x446e46)) in _0x1d0ddd
      ? Object.defineProperty(_0x1d0ddd, _0x446e46, {
          value: _0x5d86dd,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x1d0ddd[_0x446e46] = _0x5d86dd),
    _0x1d0ddd
  );
}
let J = class extends n.Disposable {
  constructor(_0x2eed1e, _0x1c28a5, _0x5321e7) {
    (super(),
      (this._resourceManagerService = _0x2eed1e),
      (this._resourceService = _0x1c28a5),
      (this._modelService = _0x5321e7),
      q(this, "_resourceDisposable", null),
      this._initResource());
  }
  _initResource() {
    ((this._resourceDisposable = this._resourceManagerService[
      "registerPluginResource"
    ]({
      pluginName: "BOARD_CHART_PLUGIN",
      businesses: [n.UniverInstanceType["UNIVER_BOARD"]],
      toJson: (_0x9d73fa) => this._resourceService["serializeUnit"](_0x9d73fa),
      parseJson: (_0x427812) => JSON.parse(_0x427812),
      onLoad: (_0xc80ca6, _0x14619f) => {
        this._resourceService["loadUnit"](_0xc80ca6, _0x14619f);
      },
      onUnLoad: (_0x46ce0c) => {
        (this._modelService["removeUnit"](_0x46ce0c),
          this._resourceService["unloadUnit"](_0x46ce0c));
      },
    })),
      this.disposeWithMe(this._resourceDisposable));
  }
};
J = y(
  [
    v(0, n.IResourceManagerService),
    v(1, (0, n.Inject)(o)),
    v(2, (0, n.Inject)(L)),
  ],
  J,
);
let Y = class extends n.Plugin {
  constructor(_0x4b99be = _, _0x1d4eb8, _0x982f04, _0x1f32e6) {
    (super(),
      (this._config = _0x4b99be),
      (this._injector = _0x1d4eb8),
      (this._commandService = _0x982f04),
      (this._configService = _0x1f32e6),
      q(this, "_adapterDisposable", null));
    let { ..._0x71aac9 } = (0, n.merge)({}, _, this._config);
    (this._configService["setConfig"]("boards-chart.config", _0x71aac9),
      this._initCommands());
  }
  onStarting() {
    ([[o], [L], [J], [b]].forEach((_0x2e093d) =>
      this._injector["add"](_0x2e093d),
    ),
      (0, n.touchDependencies)(this._injector, [[o], [L], [J], [b]]));
    let _0x5a4ea0 = this._injector["get"](e.IBoardChartAdapterService),
      _0xd2517a = this._injector["get"](b);
    ((this._adapterDisposable = _0x5a4ea0.registerAdapter(_0xd2517a)),
      this.disposeWithMe(this._adapterDisposable));
  }
  _initCommands() {
    [M, I, F, V, l, s, u, c].forEach((_0x1c91f2) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x1c91f2));
    });
  }
};
(q(Y, "type", n.UniverInstanceType["UNIVER_BOARD"]),
  q(Y, "pluginName", "UniverBoardsChartPlugin"),
  q(Y, "packageName", H),
  q(Y, "version", U),
  (Y = y(
    [
      (0, n.DependentOn)(
        t.UniverChartPlugin,
        a.UniverLicensePlugin,
        e.UniverBoardsPlugin,
      ),
      v(1, (0, n.Inject)(n.Injector)),
      v(2, n.ICommandService),
      v(3, n.IConfigService),
    ],
    Y,
  )),
  Object.defineProperty(exports, "BoardChartAdapter", {
    enumerable: true,
    get: function () {
      return b;
    },
  }),
  (exports.BoardChartConfigAdapter = R),
  Object.defineProperty(exports, "BoardChartModelService", {
    enumerable: true,
    get: function () {
      return L;
    },
  }),
  (exports.BoardChartResourceService = o),
  (exports.ChangeBoardChartDataSourceCommand = M),
  (exports.DEFAULT_BOARD_CHART_ELEMENT_HEIGHT = 320),
  (exports.DEFAULT_BOARD_CHART_ELEMENT_WIDTH = 480),
  (exports.DEFAULT_BOARD_CHART_STROKE = g),
  (exports.DEFAULT_BOARD_CHART_VALUES = d),
  (exports.DuplicateBoardChartDataSourceCommand = V),
  (exports.RemoveBoardChartDataSourceMutation = s),
  (exports.RemoveBoardChartSnapshotMutation = c),
  (exports.SetBoardChartDataSourceMutation = l),
  (exports.SetBoardChartSnapshotMutation = u),
  Object.defineProperty(exports, "UniverBoardsChartPlugin", {
    enumerable: true,
    get: function () {
      return Y;
    },
  }),
  (exports.UpdateBoardChartConfigCommand = F),
  (exports.UpdateBoardChartDataSourceCommand = I));
