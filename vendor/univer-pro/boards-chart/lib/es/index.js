import {
  AddBoardElementMutation as _0x49f012,
  BoardElementType as _0x1dc8a5,
  IBoardChartAdapterService as _0x30cb5b,
  IBoardElementService as _0x3a8e4f,
  RemoveBoardElementCommand as _0x54c2ef,
  RemoveBoardElementMutation as _0x273e1a,
  ReorderBoardElementsOperation as _0x15059b,
  UniverBoardsPlugin as _0x3d0cfc,
  UpdateBoardElementCommand as _0x5bd895,
  UpdateBoardElementMutation as _0x33de31,
  createAddBoardElementsMutationInfos as _0x2f580c,
} from "@univerjs-pro/boards";
import {
  ChartDataSourceRuntimeStatus as _0x1ba6ff,
  ChartResourceRepository as _0x1f8291,
  ChartResourceRuntimeService as _0x41d791,
  ChartTypeBits as _0x28b1d5,
  DEFAULT_CHART_RESOURCE_HEADER_ROW as _0x35a557,
  IChartDataSourceRuntimeService as _0x923a7,
  ResourceRefChartDataSourceAdapter as _0x5581f2,
  UniverChartPlugin as _0x33296a,
  buildChartDataSetFromValues as _0x1a38ba,
  buildChartPreviewData as _0x1adff6,
  buildOrientedChartDataSet as _0xeb1c64,
  chartConfigInterpreter as _0x3b7e35,
  createChartStarterRows as _0x1648ca,
  describeChartModel as _0x444e2f,
  isInlineChartDataSource as _0x8e8224,
  isReferencedChartDataSource as _0x5df111,
  omitUndefinedFields as _0x3c1973,
  toChartCreateConfigSnapshot as _0x536dbf,
  toChartModelConfigReplacement as _0x2146de,
  toChartModelUpdate as _0x573763,
} from "@univerjs-pro/engine-chart";
import {
  ArrangeTypeEnum as _0x317f9d,
  CommandType as _0x210a32,
  DependentOn as _0x30afc9,
  Disposable as _0x52f6ae,
  ICommandService as _0xed5613,
  IConfigService as _0x45e003,
  IResourceManagerService as _0x56b15a,
  IUndoRedoService as _0x1d7ceb,
  Inject as _0x4ccb20,
  Injector as _0x688496,
  Plugin as _0x3b93d9,
  Tools as _0x2e73a3,
  UniverInstanceType as _0x352681,
  generateRandomId as _0x2a26ba,
  getDrawingOrderIndex as _0x3deb83,
  merge as _0x3d50da,
  normalizeDrawingOrderIndex as _0x21da3a,
  sequenceExecute as _0x414e26,
  touchDependencies as _0x526f7a,
} from "@univerjs/core";
import { filter as _0x18e206, firstValueFrom as _0x17289d } from "rxjs";
import { ShapeLineTypeEnum as _0x58a3e6 } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin as _0x20a443 } from "@univerjs-pro/license";
var N = class extends _0x1f8291 {};
const P = {
    id: "board.mutation.remove-board-chart-data-source",
    type: _0x210a32.MUTATION,
    handler: (_0x1643d5, _0x1aafa9) =>
      _0x1aafa9
        ? _0x1643d5
            .get(N)
            .removeDataSource(_0x1aafa9.unitId, _0x1aafa9.dataSourceId)
        : false,
  },
  F = {
    id: "board.mutation.remove-board-chart-snapshot",
    type: _0x210a32.MUTATION,
    handler: (_0x464f66, _0x5cd277) =>
      _0x5cd277
        ? _0x464f66
            .get(N)
            .removeChart(_0x5cd277.unitId, _0x5cd277.chartId, {
              cleanupDataSource: _0x5cd277.cleanupDataSource,
            }) != null
        : false,
  },
  I = {
    id: "board.mutation.set-board-chart-data-source",
    type: _0x210a32.MUTATION,
    handler: (_0x3b5b96, _0x33159b) =>
      _0x33159b
        ? (_0x3b5b96
            .get(N)
            .setDataSource(_0x33159b.unitId, _0x33159b.dataSource),
          true)
        : false,
  },
  L = {
    id: "board.mutation.set-board-chart-snapshot",
    type: _0x210a32.MUTATION,
    handler: (_0x4d57bb, _0xe7f921) =>
      _0xe7f921
        ? (_0x4d57bb.get(N).setChart(_0xe7f921.unitId, _0xe7f921.chart), true)
        : false,
  },
  xe = 480,
  Se = 320,
  R = [
    ["Category", "Value"],
    ["A", 12],
    ["B", 18],
    ["C", 9],
  ],
  Ce = [
    ["Hierarchy 1", "Hierarchy 2", "Value"],
    ..._0x1648ca(_0x28b1d5.Treemap),
  ],
  we = [
    ["Hierarchy 1", "Hierarchy 2", "Value"],
    ..._0x1648ca(_0x28b1d5.Sunburst),
  ],
  Te = [["Label", "Value"], ..._0x1648ca(_0x28b1d5.Gauge)],
  Ee = [["Source", "Target", "Value"], ..._0x1648ca(_0x28b1d5.Chord)],
  z = {
    lineStrokeType: _0x58a3e6.SolidLine,
    width: 1,
    color: "#d1d5db",
    opacity: 1,
  },
  B = {};
function V(_0x32de15, _0x167dc0) {
  return function (_0x33feb2, _0x25d6e0) {
    _0x167dc0(_0x33feb2, _0x25d6e0, _0x32de15);
  };
}
function H(_0x1a1b96, _0x4d8655, _0x4c093b, _0x1751ac) {
  var _0x89ca27 = arguments.length,
    _0x3ec5eb =
      _0x89ca27 < 3
        ? _0x4d8655
        : _0x1751ac === null
          ? (_0x1751ac = Object.getOwnPropertyDescriptor(_0x4d8655, _0x4c093b))
          : _0x1751ac,
    _0x575cff;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3ec5eb = Reflect.decorate(_0x1a1b96, _0x4d8655, _0x4c093b, _0x1751ac);
  else {
    for (var _0x6edff5 = _0x1a1b96.length - 1; _0x6edff5 >= 0; _0x6edff5--)
      (_0x575cff = _0x1a1b96[_0x6edff5]) &&
        (_0x3ec5eb =
          (_0x89ca27 < 3
            ? _0x575cff(_0x3ec5eb)
            : _0x89ca27 > 3
              ? _0x575cff(_0x4d8655, _0x4c093b, _0x3ec5eb)
              : _0x575cff(_0x4d8655, _0x4c093b)) || _0x3ec5eb);
  }
  return (
    _0x89ca27 > 3 &&
      _0x3ec5eb &&
      Object.defineProperty(_0x4d8655, _0x4c093b, _0x3ec5eb),
    _0x3ec5eb
  );
}
let U = class {
  constructor(_0x1d9379, _0x3d6871, _0x99e2e, _0x1d1fd0, _0x569cba) {
    ((this._commandService = _0x1d9379),
      (this._undoRedoService = _0x3d6871),
      (this._resourceService = _0x99e2e),
      (this._elementService = _0x1d1fd0),
      (this._configService = _0x569cba));
  }
  changeChartDataSource(_0x3d5a24) {
    let _0x2898cb = this._resourceService["getChart"](
        _0x3d5a24.unitId,
        _0x3d5a24.chartId,
      ),
      _0x752116 = _0x2898cb
        ? this._resourceService["getDataSource"](
            _0x3d5a24.unitId,
            _0x2898cb.dataSourceId,
          )
        : undefined;
    if (!_0x2898cb || !_0x752116) return false;
    let _0x5926bf = this._resourceService["isDataSourceShared"](
        _0x3d5a24.unitId,
        _0x752116.id,
      ),
      _0x57c1b6 = _0x5926bf
        ? (_0x3d5a24.duplicateDataSourceId ?? _0x2a26ba())
        : _0x752116.id,
      _0x516488 = ke(
        _0x57c1b6,
        _0x3d5a24.dataSource,
        _0x3d5a24.name ?? _0x752116.name,
      ),
      _0x47e646 = {
        id: I.id,
        params: { unitId: _0x3d5a24.unitId, dataSource: _0x516488 },
      },
      _0x297dd8 = [_0x47e646],
      _0x27ed6c = [
        {
          id: I.id,
          params: { unitId: _0x3d5a24.unitId, dataSource: _0x752116 },
        },
      ];
    if (
      !this._commandService["syncExecuteCommand"](
        _0x47e646.id,
        _0x47e646.params,
      )
    )
      return false;
    if (_0x5926bf) {
      let _0x4e8bec = {
          id: L.id,
          params: {
            unitId: _0x3d5a24.unitId,
            chart: { ..._0x2898cb, dataSourceId: _0x57c1b6 },
          },
        },
        _0x4fdd27 = {
          id: P.id,
          params: { unitId: _0x3d5a24.unitId, dataSourceId: _0x57c1b6 },
        };
      if (
        !this._commandService["syncExecuteCommand"](
          _0x4e8bec.id,
          _0x4e8bec.params,
        )
      )
        return (
          this._commandService["syncExecuteCommand"](
            _0x4fdd27.id,
            _0x4fdd27.params,
          ),
          false
        );
      (_0x297dd8.push(_0x4e8bec),
        _0x27ed6c.splice(
          0,
          1,
          { id: L.id, params: { unitId: _0x3d5a24.unitId, chart: _0x2898cb } },
          _0x4fdd27,
        ));
    }
    return (
      this._undoRedoService["pushUndoRedo"]({
        unitID: _0x3d5a24.unitId,
        undoMutations: _0x27ed6c,
        redoMutations: _0x297dd8,
      }),
      true
    );
  }
  getInsertChartMutationInfos(_0x13a79c) {
    var _0x98e08b;
    if (!Me(_0x13a79c)) return null;
    let _0x103967 = De(
      _0x13a79c,
      (_0x98e08b = this._configService["getConfig"]("boards-chart.config")) ==
        null
        ? undefined
        : _0x98e08b.defaultChartSize,
    );
    if (!_0x103967) return null;
    let _0x24245a = _0x2f580c({
      unitId: _0x13a79c.unitId,
      subUnitId: _0x13a79c.subUnitId,
      elements: [_0x103967.element],
      insertIndex: _0x13a79c.insertIndex,
      elementData: this._elementService["getElementData"](
        _0x13a79c.unitId,
        _0x13a79c.subUnitId,
      ),
      elementOrder: this._elementService["getElementOrder"](
        _0x13a79c.unitId,
        _0x13a79c.subUnitId,
      ),
    });
    return _0x24245a ? Oe(_0x13a79c.unitId, _0x103967, _0x24245a) : null;
  }
  getRemoveChartMutationInfos(_0x3b3167) {
    let _0x3b49f7 = this._resourceService["getChart"](
      _0x3b3167.unitId,
      _0x3b3167.element["chartId"],
    );
    if (!_0x3b49f7) return { redoMutations: [], undoMutations: [] };
    let _0xefe6d8 = this._resourceService["getDataSource"](
        _0x3b3167.unitId,
        _0x3b49f7.dataSourceId,
      ),
      _0x52ae9c =
        this._resourceService["getDataSourceSharingCount"](
          _0x3b3167.unitId,
          _0x3b49f7.dataSourceId,
        ) <= 1,
      _0x2f08e0 = [
        {
          id: F.id,
          params: {
            unitId: _0x3b3167.unitId,
            chartId: _0x3b3167.element["chartId"],
          },
        },
      ],
      _0x1123ad = [
        { id: L.id, params: { unitId: _0x3b3167.unitId, chart: _0x3b49f7 } },
      ];
    return (
      _0x52ae9c &&
        _0xefe6d8 &&
        (_0x2f08e0.push({
          id: P.id,
          params: {
            unitId: _0x3b3167.unitId,
            dataSourceId: _0x3b49f7.dataSourceId,
          },
        }),
        _0x1123ad.unshift({
          id: I.id,
          params: { unitId: _0x3b3167.unitId, dataSource: _0xefe6d8 },
        })),
      { redoMutations: _0x2f08e0, undoMutations: _0x1123ad }
    );
  }
};
U = H(
  [
    V(0, _0xed5613),
    V(1, _0x1d7ceb),
    V(2, _0x4ccb20(N)),
    V(3, _0x3a8e4f),
    V(4, _0x45e003),
  ],
  U,
);
function De(_0x5162cd, _0x2ca3ce) {
  var _0x109cf3, _0x2c6588;
  let _0xaa0c05 = Ae(_0x5162cd.options),
    _0xb1e9db = _0x5162cd.chartId ?? _0x2a26ba(6),
    _0x1f3db9 = _0x5162cd.dataSourceId ?? _0x2a26ba(6),
    _0x279ccb = je(_0xaa0c05.data, _0xaa0c05.chartType);
  if (_0x279ccb.length === 0) return null;
  let _0x47f62a =
    (_0x109cf3 = _0xaa0c05.dataSource) != null && _0x109cf3.source
      ? { id: _0x1f3db9, source: _0xaa0c05.dataSource["source"] }
      : {
          id: _0x1f3db9,
          name:
            typeof _0xaa0c05.data == "object" && !Array.isArray(_0xaa0c05.data)
              ? _0xaa0c05.data["name"]
              : undefined,
          values: _0x279ccb,
        };
  _0x47f62a.name ?? delete _0x47f62a.name;
  let _0xa8c964 = {
    id: _0xb1e9db,
    dataSourceId: _0x1f3db9,
    chartType: _0xaa0c05.chartType ?? _0x28b1d5.Column,
    style: _0xaa0c05.style,
    context: {
      ..._0xaa0c05.context,
      headerRow:
        ((_0x2c6588 = _0xaa0c05.context) == null
          ? undefined
          : _0x2c6588.headerRow) ?? _0x35a557,
    },
    state: _0xaa0c05.state,
    dataAggregation: _0xaa0c05.dataAggregation,
  };
  Ne(_0xa8c964);
  let _0x17c5f1 = W(
      _0x5162cd.width ?? (_0x2ca3ce == null ? undefined : _0x2ca3ce.width),
      480,
    ),
    _0x40e05c = W(
      _0x5162cd.height ?? (_0x2ca3ce == null ? undefined : _0x2ca3ce.height),
      320,
    );
  return {
    chart: _0xa8c964,
    dataSource: _0x47f62a,
    element: {
      id: _0x5162cd.elementId ?? _0x2a26ba(6),
      type: _0x1dc8a5.Chart,
      chartId: _0xb1e9db,
      parentId: _0x5162cd.parentId,
      laneId: _0x5162cd.laneId,
      stroke: z,
      transform: {
        left: _0x5162cd.left,
        top: _0x5162cd.top,
        width: _0x17c5f1,
        height: _0x40e05c,
        rotation: 0,
      },
    },
  };
}
function Oe(_0x2e39f6, _0x56c5c2, _0x488f00) {
  let { chart: _0xd98199, dataSource: _0x611020 } = _0x56c5c2,
    _0x1b25a2 = {
      id: P.id,
      params: { unitId: _0x2e39f6, dataSourceId: _0x611020.id },
    },
    _0x4539be = {
      id: F.id,
      params: { unitId: _0x2e39f6, chartId: _0xd98199.id },
    };
  return {
    redoMutations: [
      { id: I.id, params: { unitId: _0x2e39f6, dataSource: _0x611020 } },
      { id: L.id, params: { unitId: _0x2e39f6, chart: _0xd98199 } },
      ..._0x488f00.redoMutations,
    ],
    undoMutations: [..._0x488f00.undoMutations, _0x4539be, _0x1b25a2],
    rollbackMutationGroups: [
      [_0x1b25a2],
      [_0x4539be],
      ...Pe(_0x488f00.redoMutations, _0x488f00.undoMutations),
    ],
  };
}
function ke(_0xc7e893, _0x4af692, _0x4215f2) {
  let _0x2c00b8 = _0x8e8224(_0x4af692)
    ? { id: _0xc7e893, name: _0x4215f2, values: _0x4af692.values }
    : { id: _0xc7e893, name: _0x4215f2, source: _0x4af692.source };
  return (_0x2c00b8.name ?? delete _0x2c00b8.name, _0x2c00b8);
}
function Ae(_0xc1dcf6) {
  return _0xc1dcf6 && typeof _0xc1dcf6 == "object" ? _0xc1dcf6 : {};
}
function je(_0x17cedf, _0x117da3) {
  let _0x2d5ffd = Array.isArray(_0x17cedf)
      ? _0x17cedf
      : _0x17cedf == null
        ? undefined
        : _0x17cedf.values,
    _0x43344b;
  switch (_0x117da3) {
    case _0x28b1d5.Treemap:
      _0x43344b = Ce;
      break;
    case _0x28b1d5.Sunburst:
      _0x43344b = we;
      break;
    case _0x28b1d5.Gauge:
      _0x43344b = Te;
      break;
    case _0x28b1d5.Chord:
      _0x43344b = Ee;
      break;
    default:
      _0x43344b = R;
  }
  return (_0x2d5ffd ?? _0x43344b).map((_0x3a1bde) => [..._0x3a1bde]);
}
function Me(_0xeb3c16) {
  return (
    !!_0xeb3c16.unitId &&
    !!_0xeb3c16.subUnitId &&
    Number.isFinite(_0xeb3c16.left) &&
    Number.isFinite(_0xeb3c16.top)
  );
}
function W(_0x5b12e2, _0x3eb29d) {
  return _0x5b12e2 !== undefined && Number.isFinite(_0x5b12e2) && _0x5b12e2 > 0
    ? _0x5b12e2
    : _0x3eb29d;
}
function Ne(_0x1e70d2) {
  Object.keys(_0x1e70d2).forEach((_0x5afba9) => {
    _0x1e70d2[_0x5afba9] === undefined && delete _0x1e70d2[_0x5afba9];
  });
}
function Pe(_0x5b362c, _0x525093) {
  let _0x47d4e0 = [..._0x525093],
    _0x470785 = _0x5b362c.map(() => []);
  for (let _0x1ba3b7 = _0x5b362c.length - 1; _0x1ba3b7 >= 0; _0x1ba3b7--) {
    let _0x2019fb = _0x5b362c[_0x1ba3b7],
      _0xeb62c6 = _0x47d4e0.findIndex((_0x4e0494) => Fe(_0x2019fb, _0x4e0494));
    _0xeb62c6 < 0 || (_0x470785[_0x1ba3b7] = _0x47d4e0.splice(_0xeb62c6, 1));
  }
  return _0x470785;
}
function Fe(_0x53834b, _0x3883d6) {
  let _0x3004dc =
      _0x53834b.id === _0x49f012.id && _0x3883d6.id === _0x273e1a.id,
    _0x107f43 = _0x53834b.id === _0x33de31.id && _0x3883d6.id === _0x33de31.id;
  return (_0x3004dc || _0x107f43) && G(_0x53834b) === G(_0x3883d6);
}
function G(_0x3c2955) {
  var _0x4ed62d;
  let _0x556f14 = _0x3c2955.params;
  return (
    ((_0x4ed62d = _0x556f14.element) == null ? undefined : _0x4ed62d.id) ??
    _0x556f14.elementId
  );
}
const K = {
    id: "board.command.change-chart-data-source",
    type: _0x210a32.COMMAND,
    handler: (_0x54a0cd, _0x52d048) =>
      _0x52d048 ? _0x54a0cd.get(U).changeChartDataSource(_0x52d048) : false,
  },
  Ie = Symbol("ReplaceBoardChartConfig");
function Le(_0x3f2957) {
  return { ..._0x3f2957, [Ie]: true };
}
const q = {
    id: "board.command.update-board-chart-config",
    type: _0x210a32.COMMAND,
    replaceConfig: Le,
    handler: (_0x4a2284, _0x28fcd3) => {
      if (!_0x28fcd3) return false;
      let { unitId: _0x5bdd7c, chartId: _0x296dfd } = _0x28fcd3,
        _0x547d3d = _0x28fcd3[Ie] === true,
        _0x4e92ae = _0x4a2284.get(N).getChart(_0x5bdd7c, _0x296dfd);
      if (!_0x4e92ae) return false;
      let _0x263558 = _0x3b7e35.apply(_0x4e92ae, _0x28fcd3, _0x547d3d);
      if (!_0x263558) return false;
      let _0x380f6b = [
          { id: L.id, params: { unitId: _0x5bdd7c, chart: _0x263558 } },
        ],
        _0x1f8c07 = [
          { id: L.id, params: { unitId: _0x5bdd7c, chart: _0x4e92ae } },
        ];
      return _0x414e26(_0x380f6b, _0x4a2284.get(_0xed5613)).result
        ? (_0x4a2284
            .get(_0x1d7ceb)
            .pushUndoRedo({
              unitID: _0x5bdd7c,
              undoMutations: _0x1f8c07,
              redoMutations: _0x380f6b,
            }),
          true)
        : false;
    },
  },
  J = {
    id: "board.command.update-board-chart-data-source",
    type: _0x210a32.COMMAND,
    handler: (_0x4c9df4, _0x49807d) => {
      if (!_0x49807d) return false;
      let {
          unitId: _0x579d67,
          dataSourceId: _0x5e4238,
          values: _0x40a937,
          name: _0x4e0bfd,
        } = _0x49807d,
        _0x4e0404 = _0x4c9df4.get(N).getDataSource(_0x579d67, _0x5e4238);
      if (!_0x4e0404 || _0x40a937.length === 0) return false;
      let _0xd5851 = {
          unitId: _0x579d67,
          dataSource: {
            id: _0x5e4238,
            values: _0x40a937,
            name: _0x4e0bfd ?? _0x4e0404.name,
          },
        },
        _0x445e76 = { unitId: _0x579d67, dataSource: _0x4e0404 },
        _0x163509 = [{ id: I.id, params: _0xd5851 }],
        _0x3a7f10 = [{ id: I.id, params: _0x445e76 }];
      return _0x414e26(_0x163509, _0x4c9df4.get(_0xed5613)).result
        ? (_0x4c9df4
            .get(_0x1d7ceb)
            .pushUndoRedo({
              unitID: _0x579d67,
              undoMutations: _0x3a7f10,
              redoMutations: _0x163509,
            }),
          true)
        : false;
    },
  };
let Y = class extends _0x41d791 {
  constructor(_0x5dfa00, _0x56cf0f, _0xc7327b) {
    super(_0x5dfa00, _0x56cf0f, _0x1a38ba, _0xc7327b);
  }
};
Y = H(
  [V(0, _0x4ccb20(N)), V(1, _0x4ccb20(_0x688496)), V(2, _0x4ccb20(_0x923a7))],
  Y,
);
var Re = class e {
  static isRowRecordDirection(_0x165974) {
    return _0x165974 !== "column";
  }
  constructor(_0x2aee91) {
    this._context = _0x2aee91;
  }
  describe(_0x2fefea = {}, _0x287e9c) {
    var _0x3d5c74, _0x319da9;
    let {
        boardModel: _0x2c7ed6,
        chartId: _0x398b17,
        elementId: _0x17e4bd,
        injector: _0x47a66a,
        pageId: _0x282426,
        unitId: _0x452a95,
      } = this._context,
      _0x1eba25 = _0x47a66a.get(Y).ensureChartModel(_0x452a95, _0x398b17),
      _0x5cd60a = _0x47a66a.get(N).getChart(_0x452a95, _0x398b17),
      _0x14827c =
        (_0x3d5c74 = _0x2c7ed6.getSnapshot().pages[_0x282426]) == null
          ? undefined
          : _0x3d5c74.elements[_0x17e4bd];
    if (!_0x1eba25 || !_0x5cd60a || !_0x14827c)
      throw Error("Board chart not found: " + _0x398b17);
    let _0x3d2181 =
      ((_0x319da9 = _0x2c7ed6.getSnapshot().pages[_0x282426]) == null
        ? undefined
        : _0x319da9.elementOrder["indexOf"](_0x17e4bd)) ?? -1;
    return _0x3c1973({
      ..._0x444e2f(_0x1eba25.model, _0x2fefea, _0x287e9c),
      id: _0x398b17,
      position: {
        x: _0x14827c.transform["left"] ?? 0,
        y: _0x14827c.transform["top"] ?? 0,
      },
      size: {
        width: _0x14827c.transform["width"] ?? 0,
        height: _0x14827c.transform["height"] ?? 0,
      },
      containerId: _0x14827c.parentId,
      laneId: _0x14827c.laneId,
      zOrder: _0x3d2181 < 0 ? undefined : _0x3d2181,
    });
  }
  getInfo() {
    var _0x3563f5;
    let _0x2dbe92 = this.describe(),
      _0x21ed52 = this.getDataSource();
    if (!_0x21ed52)
      throw Error(
        "Board chart data source not found: " + this._context["chartId"],
      );
    let _0x1758a0 =
      ((_0x3563f5 =
        this._context["boardModel"].getSnapshot().pages[
          this._context["pageId"]
        ]) == null
        ? undefined
        : _0x3563f5.elementOrder["indexOf"](this._context["elementId"])) ?? -1;
    return {
      config: _0x536dbf(_0x2dbe92),
      dataSource: _0x8e8224(_0x21ed52)
        ? { values: _0x2e73a3.deepClone(_0x21ed52.values) }
        : _0x5df111(_0x21ed52)
          ? { source: _0x2e73a3.deepClone(_0x21ed52.source) }
          : (() => {
              throw Error(
                "Invalid Board chart data source: " + this._context["chartId"],
              );
            })(),
      position: _0x2e73a3.deepClone(_0x2dbe92.position),
      size: _0x2e73a3.deepClone(_0x2dbe92.size),
      containerId: _0x2dbe92.containerId ?? undefined,
      laneId: _0x2dbe92.laneId ?? undefined,
      zOrder: _0x1758a0 < 0 ? undefined : _0x1758a0,
    };
  }
  getData() {
    let {
        chartId: _0x1baf15,
        injector: _0x3571e3,
        unitId: _0x17a431,
      } = this._context,
      _0x1ea75d = _0x3571e3.get(N).getChart(_0x17a431, _0x1baf15),
      _0x59af15 = _0x1ea75d
        ? _0x3571e3.get(N).getDataSource(_0x17a431, _0x1ea75d.dataSourceId)
        : null;
    return _0x8e8224(_0x59af15) ? _0x59af15.values : null;
  }
  getDataSource() {
    let {
        chartId: _0x4d8d83,
        injector: _0x4f67ac,
        unitId: _0x1aec29,
      } = this._context,
      _0x16b775 = _0x4f67ac.get(N).getChart(_0x1aec29, _0x4d8d83);
    return (
      (_0x16b775
        ? _0x4f67ac.get(N).getDataSource(_0x1aec29, _0x16b775.dataSourceId)
        : null) ?? null
    );
  }
  async commitDataSource(_0x4a7f8c) {
    let { injector: _0x315d8e } = this._context,
      _0x451722 = _0x5df111(_0x4a7f8c) ? _0x4a7f8c.source : undefined,
      _0x27b9ac = _0x451722 ? _0x315d8e.get(_0x923a7).acquire(_0x451722) : null;
    try {
      if (_0x27b9ac) {
        let _0x460513 = await _0x17289d(
          _0x27b9ac.state$["pipe"](
            _0x18e206(
              ({ status: _0x532172 }) => _0x532172 !== _0x1ba6ff.LOADING,
            ),
          ),
        );
        if (_0x460513.status !== _0x1ba6ff.READY)
          throw _0x460513.error instanceof Error
            ? _0x460513.error
            : Error(_0x451722 == null ? undefined : _0x451722.kind);
      }
      this._commitDataSource(_0x4a7f8c);
    } finally {
      _0x27b9ac == null || _0x27b9ac.dispose();
    }
  }
  async commitChanges(_0x5325b8, _0x448b5d, _0x219018, _0x5ad0c5 = false) {
    let { injector: _0x506eef } = this._context,
      _0x4c854a = _0x5df111(_0x5325b8) ? _0x5325b8.source : undefined,
      _0x58f257 = _0x4c854a ? _0x506eef.get(_0x923a7).acquire(_0x4c854a) : null;
    try {
      if (_0x58f257) {
        let _0x23e0c3 = await _0x17289d(
          _0x58f257.state$["pipe"](
            _0x18e206(
              ({ status: _0x59d4a4 }) => _0x59d4a4 !== _0x1ba6ff.LOADING,
            ),
          ),
        );
        if (_0x23e0c3.status !== _0x1ba6ff.READY)
          throw _0x23e0c3.error instanceof Error
            ? _0x23e0c3.error
            : Error(_0x4c854a == null ? undefined : _0x4c854a.kind);
      }
      (Object.keys(_0x448b5d).length > 0 &&
        (_0x5ad0c5 ? this._replaceConfig(_0x448b5d) : this.commit(_0x448b5d)),
        Object.keys(_0x219018).length > 0 && this.commitHost(_0x219018),
        _0x5325b8 && this._commitDataSource(_0x5325b8));
    } finally {
      _0x58f257 == null || _0x58f257.dispose();
    }
  }
  refreshDataSource() {
    let {
      chartId: _0x207151,
      injector: _0x9f70ed,
      unitId: _0x458479,
    } = this._context;
    return _0x9f70ed.get(Y).refreshChartDataSource(_0x458479, _0x207151);
  }
  commit(_0x5013fa) {
    var _0x55c6db;
    let {
        chartId: _0x1ce5cc,
        injector: _0x3e6faf,
        unitId: _0x5d67ec,
      } = this._context,
      _0x34ca4a = _0x3e6faf.get(Y).ensureChartModel(_0x5d67ec, _0x1ce5cc);
    if (!_0x34ca4a) throw Error("Board chart not found: " + _0x1ce5cc);
    let _0x573853 = _0x573763(_0x5013fa, {
      series:
        (_0x55c6db = _0x34ca4a.model["config"]) == null
          ? undefined
          : _0x55c6db.series,
      currentChartType: _0x34ca4a.model["chartType"],
      currentStyle: _0x34ca4a.model["style"],
      currentContext: _0x34ca4a.model["context"],
      currentDataAggregation: _0x34ca4a.model["dataAggregation"],
    });
    if (
      !_0x3e6faf
        .get(_0xed5613)
        .syncExecuteCommand(
          q.id,
          q.replaceConfig({
            unitId: _0x5d67ec,
            chartId: _0x1ce5cc,
            ..._0x573853,
          }),
        )
    )
      throw Error("Failed to update Board chart configuration.");
  }
  update(_0x4b52c2) {
    let _0x4df099 = {};
    return (
      _0x4b52c2.position !== undefined &&
        (_0x4df099.position = _0x4b52c2.position),
      _0x4b52c2.size !== undefined && (_0x4df099.size = _0x4b52c2.size),
      Object.prototype["hasOwnProperty"].call(_0x4b52c2, "containerId") &&
        (_0x4df099.containerId = _0x4b52c2.containerId ?? null),
      Object.prototype["hasOwnProperty"].call(_0x4b52c2, "laneId") &&
        (_0x4df099.laneId = _0x4b52c2.laneId ?? null),
      _0x4b52c2.zOrder !== undefined && (_0x4df099.zOrder = _0x4b52c2.zOrder),
      this.commitChanges(
        _0x4b52c2.dataSource,
        _0x4b52c2.config,
        _0x4df099,
        true,
      )
    );
  }
  _replaceConfig(_0x31edc4) {
    var _0x49b18c;
    let {
        chartId: _0x237363,
        injector: _0x36040d,
        unitId: _0x42cdad,
      } = this._context,
      _0x531824 = _0x36040d.get(Y).ensureChartModel(_0x42cdad, _0x237363);
    if (!_0x531824)
      throw Error("Board\x20chart\x20not\x20found:\x20" + _0x237363);
    let _0x90654c = _0x2146de(_0x31edc4, {
      series:
        (_0x49b18c = _0x531824.model["config"]) == null
          ? undefined
          : _0x49b18c.series,
      currentStyle: _0x531824.model["style"],
    });
    if (
      !_0x36040d
        .get(_0xed5613)
        .syncExecuteCommand(
          q.id,
          q.replaceConfig({
            unitId: _0x42cdad,
            chartId: _0x237363,
            ..._0x90654c,
          }),
        )
    )
      throw Error("Failed to update Board chart configuration.");
  }
  setDataSource(_0x45a429) {
    return this.commitDataSource(
      Array.isArray(_0x45a429)
        ? { values: _0x45a429 }
        : { source: _0x5581f2.toReference(_0x45a429) },
    );
  }
  setAbsolutePosition(_0x5394df, _0x5e66a7) {
    this.commitHost({ position: { x: _0x5394df, y: _0x5e66a7 } });
  }
  setSize(_0x180100, _0xef7595) {
    this.commitHost({ size: { width: _0x180100, height: _0xef7595 } });
  }
  arrange(_0x19c4b9) {
    var _0x244cbf;
    let {
        boardModel: _0x1325c9,
        elementId: _0x22299f,
        injector: _0x446e23,
        pageId: _0x46238b,
        unitId: _0x2915aa,
      } = this._context,
      _0x4a05c7 =
        ((_0x244cbf = _0x1325c9.getSnapshot().pages[_0x46238b]) == null
          ? undefined
          : _0x244cbf.elementOrder) ?? [],
      _0x49e258 = _0x4a05c7.indexOf(_0x22299f);
    if (_0x49e258 < 0)
      throw Error("Board chart element not found: " + _0x22299f);
    if (
      _0x3deb83(_0x49e258, _0x4a05c7.length, _0x19c4b9) !== _0x49e258 &&
      !_0x446e23
        .get(_0xed5613)
        .syncExecuteCommand(_0x15059b.id, {
          unitId: _0x2915aa,
          subUnitId: _0x46238b,
          elementIds: [_0x22299f],
          placement: Be(_0x19c4b9),
        })
    )
      throw Error("Failed to arrange Board chart.");
  }
  setZOrder(_0x435d63) {
    this._commitZOrder(_0x435d63);
  }
  resolveData(_0x21da25, _0x29687e) {
    let {
        chartId: _0x16cfa0,
        injector: _0x500d42,
        unitId: _0x538fff,
      } = this._context,
      _0x1eeb59 = _0x500d42.get(Y).ensureChartModel(_0x538fff, _0x16cfa0);
    if (!_0x1eeb59) throw Error("Board chart not found: " + _0x16cfa0);
    return _0x1adff6(_0x1eeb59.model, _0x21da25, _0x29687e);
  }
  resolveDataSet(_0x337ed4) {
    var _0x2ab5f2, _0x4dd96d;
    let {
        chartId: _0x1df93f,
        injector: _0x547292,
        unitId: _0x21ad17,
      } = this._context,
      _0x1a3b43 = _0x547292.get(Y).ensureChartModel(_0x21ad17, _0x1df93f),
      _0x2a04de = _0x547292.get(N).getChart(_0x21ad17, _0x1df93f);
    if (!_0x1a3b43 || !_0x2a04de)
      throw Error("Board chart not found: " + _0x1df93f);
    return _0xeb1c64(_0x337ed4, {
      headerRow:
        ((_0x2ab5f2 = _0x2a04de.context) == null
          ? undefined
          : _0x2ab5f2.headerRow) ?? _0x35a557,
      isRowDirection: e.isRowRecordDirection(
        (_0x4dd96d = _0x2a04de.context) == null ? undefined : _0x4dd96d.orient,
      ),
    });
  }
  commitHost(_0x24362e) {
    (this._commitData(_0x24362e.data),
      this._commitElement(_0x24362e),
      this._commitZOrder(_0x24362e.zOrder));
  }
  remove() {
    let {
      elementId: _0x3b24c7,
      injector: _0x39d19b,
      pageId: _0x8f57f7,
      unitId: _0x50f39b,
    } = this._context;
    return _0x39d19b
      .get(_0xed5613)
      .syncExecuteCommand(_0x54c2ef.id, {
        unitId: _0x50f39b,
        subUnitId: _0x8f57f7,
        elementId: _0x3b24c7,
      });
  }
  _commitData(_0x2bceec) {
    if (_0x2bceec === undefined) return;
    let {
        chartId: _0x740306,
        injector: _0x574b67,
        unitId: _0x316c23,
      } = this._context,
      _0x269f97 = _0x574b67.get(N).getChart(_0x316c23, _0x740306);
    if (!(
      _0x269f97 &&
      _0x574b67
        .get(_0xed5613)
        .syncExecuteCommand(J.id, {
          unitId: _0x316c23,
          dataSourceId: _0x269f97.dataSourceId,
          values: _0x2bceec,
        })
    ))
      throw Error("Failed to update Board chart data.");
  }
  _commitDataSource(_0x2cfb1e) {
    let {
      chartId: _0x218342,
      injector: _0x4ae27d,
      unitId: _0x4ad714,
    } = this._context;
    if (
      !_0x4ae27d
        .get(_0xed5613)
        .syncExecuteCommand(K.id, {
          unitId: _0x4ad714,
          chartId: _0x218342,
          dataSource: _0x2cfb1e,
        })
    )
      throw Error(K.id);
  }
  _commitElement({
    containerId: _0x81d26d,
    position: _0x4b7ed4,
    size: _0x11fdd7,
    laneId: _0x184061,
  }) {
    var _0x458819;
    if (
      !ze({
        containerId: _0x81d26d,
        position: _0x4b7ed4,
        size: _0x11fdd7,
        laneId: _0x184061,
      })
    )
      return;
    let {
        boardModel: _0x12f55a,
        elementId: _0x2bcaae,
        injector: _0xca2210,
        pageId: _0x4f2aaf,
        unitId: _0x491565,
      } = this._context,
      _0x3d479c =
        (_0x458819 = _0x12f55a.getSnapshot().pages[_0x4f2aaf]) == null
          ? undefined
          : _0x458819.elements[_0x2bcaae];
    if (!_0x3d479c) throw Error("Board chart element not found: " + _0x2bcaae);
    let _0x191d89 = {
      ..._0x3d479c,
      parentId:
        _0x81d26d === undefined ? _0x3d479c.parentId : (_0x81d26d ?? undefined),
      laneId:
        _0x184061 === undefined ? _0x3d479c.laneId : (_0x184061 ?? undefined),
      transform: {
        ..._0x3d479c.transform,
        left:
          (_0x4b7ed4 == null ? undefined : _0x4b7ed4.x) ??
          _0x3d479c.transform["left"],
        top:
          (_0x4b7ed4 == null ? undefined : _0x4b7ed4.y) ??
          _0x3d479c.transform["top"],
        width:
          (_0x11fdd7 == null ? undefined : _0x11fdd7.width) ??
          _0x3d479c.transform["width"],
        height:
          (_0x11fdd7 == null ? undefined : _0x11fdd7.height) ??
          _0x3d479c.transform["height"],
      },
    };
    if (
      !_0xca2210
        .get(_0xed5613)
        .syncExecuteCommand(_0x5bd895.id, {
          unitId: _0x491565,
          subUnitId: _0x4f2aaf,
          elementId: _0x2bcaae,
          element: _0x191d89,
          transform: {
            left: _0x191d89.transform["left"],
            top: _0x191d89.transform["top"],
            width: _0x191d89.transform["width"],
            height: _0x191d89.transform["height"],
            angle: _0x191d89.transform["rotation"] ?? 0,
            flipX: _0x191d89.transform["flipX"],
            flipY: _0x191d89.transform["flipY"],
          },
        })
    )
      throw Error("Failed to update Board chart element.");
  }
  _commitZOrder(_0x1f8332) {
    if (_0x1f8332 === undefined) return;
    let {
        boardModel: _0x26a866,
        elementId: _0x52f945,
        injector: _0x4f2848,
        pageId: _0x31f365,
        unitId: _0x26e548,
      } = this._context,
      _0x18982a = _0x26a866.getSnapshot().pages[_0x31f365];
    if (!_0x18982a) throw Error("Board page not found: " + _0x31f365);
    let _0x7bf423 = _0x18982a.elementOrder["indexOf"](_0x52f945);
    if (_0x7bf423 < 0)
      throw Error("Board chart element not found: " + _0x52f945);
    if (
      _0x21da3a(_0x1f8332, _0x18982a.elementOrder["length"]) !== _0x7bf423 &&
      !_0x4f2848
        .get(_0xed5613)
        .syncExecuteCommand(_0x15059b.id, {
          unitId: _0x26e548,
          subUnitId: _0x31f365,
          elementIds: [_0x52f945],
          zOrder: _0x1f8332,
        })
    )
      throw Error("Failed\x20to\x20update\x20Board\x20chart\x20z-order.");
  }
};
function ze({
  containerId: _0x2d20a6,
  laneId: _0x417b7b,
  position: _0x534a62,
  size: _0x14f3fc,
}) {
  return !!(
    _0x534a62 ||
    _0x14f3fc ||
    _0x2d20a6 !== undefined ||
    _0x417b7b !== undefined
  );
}
function Be(_0x87982f) {
  return _0x87982f === _0x317f9d.front
    ? "front"
    : _0x87982f === _0x317f9d.forward
      ? "forward"
      : _0x87982f === _0x317f9d.backward
        ? "backward"
        : "back";
}
const Ve = {
  id: "board.command.duplicate-board-chart-data-source",
  type: _0x210a32.COMMAND,
  handler: (_0x183b2f, _0x65eb24) => {
    if (!_0x65eb24) return false;
    let {
        unitId: _0x5ec387,
        chartId: _0x59642a,
        duplicateDataSourceId: _0x14b2c3,
      } = _0x65eb24,
      _0x58abec = _0x183b2f.get(N),
      _0x2a4cc2 = _0x58abec.getChart(_0x5ec387, _0x59642a),
      _0x557769 = _0x2a4cc2
        ? _0x58abec.getDataSource(_0x5ec387, _0x2a4cc2.dataSourceId)
        : undefined;
    if (!_0x2a4cc2 || !_0x557769) return false;
    let _0xfb23f0 = { ..._0x557769, id: _0x14b2c3 ?? _0x2a26ba() },
      _0x4a6ea7 = { ..._0x2a4cc2, dataSourceId: _0xfb23f0.id },
      _0x583301 = { unitId: _0x5ec387, dataSource: _0xfb23f0 },
      _0x2a543a = { unitId: _0x5ec387, dataSourceId: _0xfb23f0.id },
      _0x501c1e = { unitId: _0x5ec387, chart: _0x4a6ea7 },
      _0x1e0b01 = { unitId: _0x5ec387, chart: _0x2a4cc2 },
      _0x14616b = [
        { id: I.id, params: _0x583301 },
        { id: L.id, params: _0x501c1e },
      ],
      _0x53ef36 = [
        { id: L.id, params: _0x1e0b01 },
        { id: P.id, params: _0x2a543a },
      ];
    return _0x414e26(_0x14616b, _0x183b2f.get(_0xed5613)).result
      ? (_0x183b2f
          .get(_0x1d7ceb)
          .pushUndoRedo({
            unitID: _0x5ec387,
            undoMutations: _0x53ef36,
            redoMutations: _0x14616b,
          }),
        true)
      : false;
  },
};
var He = "@univerjs-pro/boards-chart",
  Ue = "1.0.0-insiders.20260907-70fc579";
function X(_0x54057d) {
  "@babel/helpers - typeof";
  return (
    (X =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1dc1d4) {
            return typeof _0x1dc1d4;
          }
        : function (_0x2a85c9) {
            return _0x2a85c9 &&
              typeof Symbol == "function" &&
              _0x2a85c9.constructor === Symbol &&
              _0x2a85c9 !== Symbol.prototype
              ? "symbol"
              : typeof _0x2a85c9;
          }),
    X(_0x54057d)
  );
}
function We(_0x406a28, _0x3cea01) {
  if (X(_0x406a28) != "object" || !_0x406a28) return _0x406a28;
  var _0x41fdc6 = _0x406a28[Symbol.toPrimitive];
  if (_0x41fdc6 !== undefined) {
    var _0x28a071 = _0x41fdc6.call(_0x406a28, _0x3cea01 || "default");
    if (X(_0x28a071) != "object") return _0x28a071;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3cea01 === "string" ? String : Number)(_0x406a28);
}
function Ge(_0x446d55) {
  var _0x47cbc2 = We(_0x446d55, "string");
  return X(_0x47cbc2) == "symbol" ? _0x47cbc2 : _0x47cbc2 + "";
}
function Z(_0x46f6be, _0x1e1201, _0x20569c) {
  return (
    (_0x1e1201 = Ge(_0x1e1201)) in _0x46f6be
      ? Object.defineProperty(_0x46f6be, _0x1e1201, {
          value: _0x20569c,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x46f6be[_0x1e1201] = _0x20569c),
    _0x46f6be
  );
}
let Q = class extends _0x52f6ae {
  constructor(_0x1240aa, _0x229daa, _0x5ab93f) {
    (super(),
      (this._resourceManagerService = _0x1240aa),
      (this._resourceService = _0x229daa),
      (this._modelService = _0x5ab93f),
      Z(this, "_resourceDisposable", null),
      this._initResource());
  }
  _initResource() {
    ((this._resourceDisposable = this._resourceManagerService[
      "registerPluginResource"
    ]({
      pluginName: "BOARD_CHART_PLUGIN",
      businesses: [_0x352681.UNIVER_BOARD],
      toJson: (_0x165716) => this._resourceService["serializeUnit"](_0x165716),
      parseJson: (_0x2416dc) => JSON.parse(_0x2416dc),
      onLoad: (_0x5499de, _0x35e25a) => {
        this._resourceService["loadUnit"](_0x5499de, _0x35e25a);
      },
      onUnLoad: (_0x163fea) => {
        (this._modelService["removeUnit"](_0x163fea),
          this._resourceService["unloadUnit"](_0x163fea));
      },
    })),
      this.disposeWithMe(this._resourceDisposable));
  }
};
Q = H([V(0, _0x56b15a), V(1, _0x4ccb20(N)), V(2, _0x4ccb20(Y))], Q);
let $ = class extends _0x3b93d9 {
  constructor(_0x279c57 = B, _0x26a3d6, _0x29b3d6, _0x509f9f) {
    (super(),
      (this._config = _0x279c57),
      (this._injector = _0x26a3d6),
      (this._commandService = _0x29b3d6),
      (this._configService = _0x509f9f),
      Z(this, "_adapterDisposable", null));
    let { ..._0x28d07f } = _0x3d50da({}, B, this._config);
    (this._configService["setConfig"]("boards-chart.config", _0x28d07f),
      this._initCommands());
  }
  onStarting() {
    ([[N], [Y], [Q], [U]].forEach((_0x29ef87) =>
      this._injector["add"](_0x29ef87),
    ),
      _0x526f7a(this._injector, [[N], [Y], [Q], [U]]));
    let _0x27977b = this._injector["get"](_0x30cb5b),
      _0x36be48 = this._injector["get"](U);
    ((this._adapterDisposable = _0x27977b.registerAdapter(_0x36be48)),
      this.disposeWithMe(this._adapterDisposable));
  }
  _initCommands() {
    [K, J, q, Ve, I, P, L, F].forEach((_0x201d0d) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x201d0d));
    });
  }
};
(Z($, "type", _0x352681.UNIVER_BOARD),
  Z($, "pluginName", "UniverBoardsChartPlugin"),
  Z($, "packageName", He),
  Z($, "version", Ue),
  ($ = H(
    [
      _0x30afc9(_0x33296a, _0x20a443, _0x3d0cfc),
      V(1, _0x4ccb20(_0x688496)),
      V(2, _0xed5613),
      V(3, _0x45e003),
    ],
    $,
  )));
export {
  U as BoardChartAdapter,
  Re as BoardChartConfigAdapter,
  Y as BoardChartModelService,
  N as BoardChartResourceService,
  K as ChangeBoardChartDataSourceCommand,
  Se as DEFAULT_BOARD_CHART_ELEMENT_HEIGHT,
  xe as DEFAULT_BOARD_CHART_ELEMENT_WIDTH,
  z as DEFAULT_BOARD_CHART_STROKE,
  R as DEFAULT_BOARD_CHART_VALUES,
  Ve as DuplicateBoardChartDataSourceCommand,
  P as RemoveBoardChartDataSourceMutation,
  F as RemoveBoardChartSnapshotMutation,
  I as SetBoardChartDataSourceMutation,
  L as SetBoardChartSnapshotMutation,
  $ as UniverBoardsChartPlugin,
  q as UpdateBoardChartConfigCommand,
  J as UpdateBoardChartDataSourceCommand,
};
