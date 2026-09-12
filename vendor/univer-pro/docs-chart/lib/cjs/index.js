Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-chart"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs-drawing"),
  r = require("rxjs"),
  i = require("@univerjs/docs"),
  a = require("@univerjs-pro/license");
const o = {
    id: "doc.mutation.remove-doc-chart-data-source",
    type: t.CommandType["MUTATION"],
    handler: (_0x19cac7, _0x30d722) =>
      _0x19cac7
        .get(e.ChartResourceRepository)
        .removeDataSource(_0x30d722.unitId, _0x30d722.dataSourceId),
  },
  s = {
    id: "doc.mutation.set-doc-chart-data-source",
    type: t.CommandType["MUTATION"],
    handler: (_0x2443d3, _0x442e40) => (
      _0x2443d3
        .get(e.ChartResourceRepository)
        .setDataSource(_0x442e40.unitId, _0x442e40.dataSource),
      true
    ),
  },
  c = {
    id: "doc.mutation.set-doc-chart-snapshot",
    type: t.CommandType["MUTATION"],
    handler: (_0x2ef983, _0x5d37f9) => (
      _0x2ef983
        .get(e.ChartResourceRepository)
        .setChart(_0x5d37f9.unitId, _0x5d37f9.chart),
      true
    ),
  },
  l = {
    id: "doc.command.change-chart-data-source",
    type: t.CommandType["COMMAND"],
    handler: (_0x1aed95, _0x22caf9) => {
      if (!_0x22caf9) return false;
      let _0x2ac666 = _0x1aed95.get(e.ChartResourceRepository),
        _0x1904f9 = _0x2ac666.getChart(_0x22caf9.unitId, _0x22caf9.chartId),
        _0x355b33 = _0x1904f9
          ? _0x2ac666.getDataSource(_0x22caf9.unitId, _0x1904f9.dataSourceId)
          : undefined;
      if (!_0x1904f9 || !_0x355b33) return false;
      let _0x2af01c = _0x2ac666.isDataSourceShared(
          _0x22caf9.unitId,
          _0x355b33.id,
        ),
        _0x31f3ab = _0x2af01c
          ? (_0x22caf9.duplicateDataSourceId ?? (0, t.generateRandomId)())
          : _0x355b33.id,
        _0x3ea241 = u(
          _0x31f3ab,
          _0x22caf9.dataSource,
          _0x22caf9.name ?? _0x355b33.name,
        ),
        _0x2a002f = _0x1aed95.get(t.ICommandService),
        _0x2bf9b9 = {
          id: s.id,
          params: { unitId: _0x22caf9.unitId, dataSource: _0x3ea241 },
        },
        _0x4c72dc = [_0x2bf9b9],
        _0x512efb = [
          {
            id: s.id,
            params: { unitId: _0x22caf9.unitId, dataSource: _0x355b33 },
          },
        ];
      if (!_0x2a002f.syncExecuteCommand(_0x2bf9b9.id, _0x2bf9b9.params))
        return false;
      if (_0x2af01c) {
        let _0x13589a = {
            id: c.id,
            params: {
              unitId: _0x22caf9.unitId,
              chart: { ..._0x1904f9, dataSourceId: _0x31f3ab },
            },
          },
          _0xcd8b18 = {
            id: o.id,
            params: { unitId: _0x22caf9.unitId, dataSourceId: _0x31f3ab },
          };
        if (!_0x2a002f.syncExecuteCommand(_0x13589a.id, _0x13589a.params))
          return (
            _0x2a002f.syncExecuteCommand(_0xcd8b18.id, _0xcd8b18.params),
            false
          );
        (_0x4c72dc.push(_0x13589a),
          _0x512efb.splice(
            0,
            1,
            {
              id: c.id,
              params: { unitId: _0x22caf9.unitId, chart: _0x1904f9 },
            },
            _0xcd8b18,
          ));
      }
      let _0xdc40d9 = _0x1aed95.get(t.IUndoRedoService),
        _0xd047bf = _0xdc40d9.__tempBatchingUndoRedo(_0x22caf9.unitId);
      return (
        _0xdc40d9.pushUndoRedo({
          unitID: _0x22caf9.unitId,
          undoMutations: _0x512efb,
          redoMutations: _0x4c72dc,
        }),
        _0xd047bf.dispose(),
        true
      );
    },
  };
function u(_0x4d0d88, _0x1705f2, _0x3587e2) {
  let _0x2a3d79 = (0, e.isInlineChartDataSource)(_0x1705f2)
    ? { id: _0x4d0d88, name: _0x3587e2, values: _0x1705f2.values }
    : { id: _0x4d0d88, name: _0x3587e2, source: _0x1705f2.source };
  return (_0x2a3d79.name ?? delete _0x2a3d79.name, _0x2a3d79);
}
const d = {
    id: "doc.mutation.remove-doc-chart-snapshot",
    type: t.CommandType["MUTATION"],
    handler: (_0x28a185, _0x1961b9) =>
      _0x28a185
        .get(e.ChartResourceRepository)
        .removeChart(_0x1961b9.unitId, _0x1961b9.chartId, {
          cleanupDataSource: _0x1961b9.cleanupDataSource,
        }) != null,
  },
  f = {
    id: "doc.command.remove-doc-chart",
    type: t.CommandType["COMMAND"],
    handler: (_0x10341, _0x5c524e) => {
      var _0x2938e7;
      if (!_0x5c524e) return false;
      let { unitId: _0x57ea6a, drawingId: _0x583d83 } = _0x5c524e,
        _0x5a9c79 = _0x57ea6a,
        _0xf8975f = _0x10341
          .get(t.IUniverInstanceService)
          .getUnit(_0x57ea6a, t.UniverInstanceType["UNIVER_DOC"]),
        _0x4aa2c0 =
          _0xf8975f == null || (_0x2938e7 = _0xf8975f.getDrawings()) == null
            ? undefined
            : _0x2938e7[_0x583d83];
      if (
        !p(_0x4aa2c0) ||
        (_0x5c524e.chartId && _0x4aa2c0.chartId !== _0x5c524e.chartId)
      )
        return false;
      let _0x13f588 = _0x10341.get(e.ChartResourceRepository),
        _0x33c0d9 = _0x13f588.getChart(_0x57ea6a, _0x4aa2c0.chartId);
      if (!_0x33c0d9) return false;
      let _0x420b14 = _0x10341.get(t.ICommandService);
      return _0x420b14.syncExecuteCommand("doc.command.remove-doc-image", {
        unitId: _0x57ea6a,
        drawings: [
          {
            unitId: _0x57ea6a,
            subUnitId: _0x5a9c79,
            drawingId: _0x583d83,
            drawingType: t.DrawingTypeEnum["DRAWING_CHART"],
          },
        ],
      })
        ? !_0x13f588.getChart(_0x57ea6a, _0x33c0d9.id) ||
            (0, t.sequenceExecute)(
              [
                {
                  id: d.id,
                  params: {
                    unitId: _0x57ea6a,
                    chartId: _0x33c0d9.id,
                    cleanupDataSource:
                      _0x13f588.getDataSourceSharingCount(
                        _0x57ea6a,
                        _0x33c0d9.dataSourceId,
                      ) <= 1,
                  },
                },
              ],
              _0x420b14,
            ).result
        : false;
    },
  };
function p(_0x46fa24) {
  return (
    (_0x46fa24 == null ? undefined : _0x46fa24.drawingType) ===
      t.DrawingTypeEnum["DRAWING_CHART"] &&
    "chartId" in _0x46fa24 &&
    typeof _0x46fa24.chartId == "string"
  );
}
const m = Symbol("ReplaceDocChartConfig"),
  h = {
    id: "doc.command.update-doc-chart-config",
    type: t.CommandType["COMMAND"],
    handler: (_0x437c14, _0x1b38ce) => {
      if (!_0x1b38ce) return false;
      let { unitId: _0x49e0ba, chartId: _0x16b1a6 } = _0x1b38ce,
        _0x49d7fc = _0x1b38ce[m] === true,
        _0x32eee9 = _0x437c14
          .get(e.ChartResourceRepository)
          .getChart(_0x49e0ba, _0x16b1a6);
      if (!_0x32eee9) return false;
      let _0x5397fd = _0x437c14.get(t.ICommandService),
        _0x1ff56d = _0x437c14.get(t.IUndoRedoService),
        _0x21bd7b = e.chartConfigInterpreter["apply"](
          _0x32eee9,
          _0x1b38ce,
          _0x49d7fc,
        );
      if (!_0x21bd7b) return false;
      let _0x2b7cdd = { unitId: _0x49e0ba, chart: _0x21bd7b },
        _0x353911 = { unitId: _0x49e0ba, chart: _0x32eee9 },
        _0x3c3924 = [{ id: c.id, params: _0x2b7cdd }],
        _0x197930 = [{ id: c.id, params: _0x353911 }];
      return (0, t.sequenceExecute)(_0x3c3924, _0x5397fd).result
        ? (_0x1ff56d.pushUndoRedo({
            unitID: _0x49e0ba,
            undoMutations: _0x197930,
            redoMutations: _0x3c3924,
          }),
          true)
        : false;
    },
  };
function g(_0xa023b2, _0x2a7c83) {
  return function (_0x5b5d10, _0x3faced) {
    _0x2a7c83(_0x5b5d10, _0x3faced, _0xa023b2);
  };
}
function _(_0x35a781, _0x26c49e, _0xeed319, _0x56e07e) {
  var _0x408f4e = arguments.length,
    _0xd643b8 =
      _0x408f4e < 3
        ? _0x26c49e
        : _0x56e07e === null
          ? (_0x56e07e = Object.getOwnPropertyDescriptor(_0x26c49e, _0xeed319))
          : _0x56e07e,
    _0xc15cfa;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xd643b8 = Reflect.decorate(_0x35a781, _0x26c49e, _0xeed319, _0x56e07e);
  else {
    for (var _0x250df4 = _0x35a781.length - 1; _0x250df4 >= 0; _0x250df4--)
      (_0xc15cfa = _0x35a781[_0x250df4]) &&
        (_0xd643b8 =
          (_0x408f4e < 3
            ? _0xc15cfa(_0xd643b8)
            : _0x408f4e > 3
              ? _0xc15cfa(_0x26c49e, _0xeed319, _0xd643b8)
              : _0xc15cfa(_0x26c49e, _0xeed319)) || _0xd643b8);
  }
  return (
    _0x408f4e > 3 &&
      _0xd643b8 &&
      Object.defineProperty(_0x26c49e, _0xeed319, _0xd643b8),
    _0xd643b8
  );
}
let v = class extends e.ChartResourceRuntimeService {
  constructor(_0x32d1d1, _0x8bdd53, _0x5d8b37) {
    super(_0x32d1d1, _0x8bdd53, e.buildChartDataSetFromValues, _0x5d8b37);
  }
};
v = _(
  [
    g(0, (0, t.Inject)(e.ChartResourceRepository)),
    g(1, (0, t.Inject)(t.Injector)),
    g(2, (0, t.Inject)(e.IChartDataSourceRuntimeService)),
  ],
  v,
);
const y = {
    id: "doc.command.duplicate-doc-chart-data-source",
    type: t.CommandType["COMMAND"],
    handler: (_0x2cfd87, _0x338f2e) => {
      if (!_0x338f2e) return false;
      let {
          unitId: _0x34e5d9,
          chartId: _0x422248,
          duplicateDataSourceId: _0x52e69b,
        } = _0x338f2e,
        _0x48b9d0 = _0x2cfd87.get(e.ChartResourceRepository),
        _0x397150 = _0x48b9d0.getChart(_0x34e5d9, _0x422248),
        _0x391ee8 = _0x397150
          ? _0x48b9d0.getDataSource(_0x34e5d9, _0x397150.dataSourceId)
          : undefined;
      if (!_0x397150 || !_0x391ee8) return false;
      let _0x3efe64 = {
          ..._0x391ee8,
          id: _0x52e69b ?? (0, t.generateRandomId)(),
        },
        _0x236897 = _0x2cfd87.get(t.ICommandService),
        _0x39a83e = _0x2cfd87.get(t.IUndoRedoService),
        _0x34e0aa = { unitId: _0x34e5d9, dataSource: _0x3efe64 },
        _0x35be6a = { unitId: _0x34e5d9, dataSourceId: _0x3efe64.id },
        _0x200bca = {
          unitId: _0x34e5d9,
          chart: { ..._0x397150, dataSourceId: _0x3efe64.id },
        },
        _0x293a3b = { unitId: _0x34e5d9, chart: _0x397150 },
        _0x519ad7 = [
          { id: s.id, params: _0x34e0aa },
          { id: c.id, params: _0x200bca },
        ],
        _0x4ca7bd = [
          { id: c.id, params: _0x293a3b },
          { id: o.id, params: _0x35be6a },
        ];
      return (0, t.sequenceExecute)(_0x519ad7, _0x236897).result
        ? (_0x39a83e.pushUndoRedo({
            unitID: _0x34e5d9,
            undoMutations: _0x4ca7bd,
            redoMutations: _0x519ad7,
          }),
          true)
        : false;
    },
  },
  b = {
    id: "doc.command.update-doc-chart-data-source",
    type: t.CommandType["COMMAND"],
    handler: (_0x221090, _0x3113d7) => {
      if (!_0x3113d7) return false;
      let {
        unitId: _0x156e5d,
        dataSourceId: _0x2b1fb5,
        values: _0xce5c0a,
        name: _0x5d886a,
      } = _0x3113d7;
      if (_0xce5c0a.length === 0) return false;
      let _0x1ad2d8 = _0x221090
        .get(e.ChartResourceRepository)
        .getDataSource(_0x156e5d, _0x2b1fb5);
      if (!_0x1ad2d8) return false;
      let _0x24336c = _0x221090.get(t.ICommandService),
        _0x47dbad = _0x221090.get(t.IUndoRedoService),
        _0x5f09e5 = {
          unitId: _0x156e5d,
          dataSource: {
            id: _0x2b1fb5,
            values: _0xce5c0a,
            name: _0x5d886a ?? _0x1ad2d8.name,
          },
        },
        _0x549d82 = { unitId: _0x156e5d, dataSource: _0x1ad2d8 },
        _0x6d926a = [{ id: s.id, params: _0x5f09e5 }],
        _0x30729d = [{ id: s.id, params: _0x549d82 }];
      return (0, t.sequenceExecute)(_0x6d926a, _0x24336c).result
        ? (_0x47dbad.pushUndoRedo({
            unitID: _0x156e5d,
            undoMutations: _0x30729d,
            redoMutations: _0x6d926a,
          }),
          true)
        : false;
    },
  },
  x = [
    ["Category", "Value"],
    ["Series\x201", 1],
  ];
function S(_0x4f86f0) {
  return Number.isFinite(_0x4f86f0) && _0x4f86f0 > 0;
}
function C(_0x5e7d2b) {
  return _0x5e7d2b === undefined || S(_0x5e7d2b);
}
function w(_0x3886b) {
  if (!C(_0x3886b))
    throw Error(
      "Document chart width and height must be positive finite numbers.",
    );
}
const T = {
  id: "doc.command.update-doc-chart-drawing",
  type: t.CommandType["COMMAND"],
  handler: (_0x5688bc, _0x4676cf) => {
    var _0x53ed1e;
    if (
      !_0x4676cf ||
      !_0x4676cf.unitId ||
      !_0x4676cf.drawingId ||
      !k(_0x4676cf.layout)
    )
      return false;
    let _0x4e3626 = _0x5688bc
        .get(t.IUniverInstanceService)
        .getUnit(_0x4676cf.unitId, t.UniverInstanceType["UNIVER_DOC"]),
      _0x36868a =
        _0x4e3626 == null || (_0x53ed1e = _0x4e3626.getDrawings()) == null
          ? undefined
          : _0x53ed1e[_0x4676cf.drawingId];
    if (
      !O(_0x36868a) ||
      (_0x4676cf.chartId && _0x36868a.chartId !== _0x4676cf.chartId)
    )
      return false;
    let _0x52c43e = E(_0x36868a, _0x4676cf.layout),
      _0x4ba327 = t.JSONX["getInstance"]().replaceOp(
        ["drawings", _0x4676cf.drawingId],
        _0x36868a,
        _0x52c43e,
      );
    return _0x4ba327
      ? !!_0x5688bc
          .get(t.ICommandService)
          .syncExecuteCommand(i.RichTextEditingMutation["id"], {
            unitId: _0x4676cf.unitId,
            actions: _0x4ba327,
            textRanges: null,
            noNeedSetTextRange: true,
          })
      : false;
  },
};
function E(_0xab6bb6, _0x15751b) {
  let _0x18178c =
    _0x15751b.width !== undefined ||
    _0x15751b.height !== undefined ||
    _0x15751b.position !== undefined;
  return {
    ..._0xab6bb6,
    ...(_0x15751b.layoutType === undefined
      ? {}
      : { layoutType: _0x15751b.layoutType }),
    ...(_0x18178c
      ? { docTransform: D(_0xab6bb6.docTransform, _0x15751b) }
      : {}),
  };
}
function D(_0x20764e, _0x51e7e2) {
  if (
    _0x51e7e2.width === undefined &&
    _0x51e7e2.height === undefined &&
    _0x51e7e2.position === undefined
  )
    return _0x20764e ?? (0, i.buildDocTransform)(480, 320);
  let _0x31a2cf =
      _0x51e7e2.width ??
      (_0x20764e == null ? undefined : _0x20764e.size["width"]) ??
      480,
    _0x16c40e =
      _0x51e7e2.height ??
      (_0x20764e == null ? undefined : _0x20764e.size["height"]) ??
      320,
    _0x1aebb5 = _0x51e7e2.position;
  return {
    ...(_0x20764e ?? (0, i.buildDocTransform)(_0x31a2cf, _0x16c40e)),
    size: { width: _0x31a2cf, height: _0x16c40e },
    ...(_0x1aebb5 === undefined
      ? {}
      : {
          positionH: {
            relativeFrom: t.ObjectRelativeFromH["PAGE"],
            posOffset: _0x1aebb5.x,
          },
          positionV: {
            relativeFrom: t.ObjectRelativeFromV["PARAGRAPH"],
            posOffset: _0x1aebb5.y,
          },
        }),
  };
}
function O(_0x2ed482) {
  return (
    (_0x2ed482 == null ? undefined : _0x2ed482.drawingType) ===
      t.DrawingTypeEnum["DRAWING_CHART"] &&
    "chartId" in _0x2ed482 &&
    typeof _0x2ed482.chartId == "string"
  );
}
function k(_0x5559e0) {
  return (
    !!_0x5559e0 &&
    C(_0x5559e0.width) &&
    C(_0x5559e0.height) &&
    (_0x5559e0.position === undefined ||
      (Number.isFinite(_0x5559e0.position["x"]) &&
        Number.isFinite(_0x5559e0.position["y"])))
  );
}
let A = (function (_0x355ab9) {
  return (
    (_0x355ab9.DuplicateIfShared = "duplicateIfShared"),
    (_0x355ab9.UpdateShared = "updateShared"),
    (_0x355ab9.RejectIfShared = "rejectIfShared"),
    _0x355ab9
  );
})({});
function j(_0x3d2a65) {
  let _0x19971e = _0x3d2a65.map((_0x2202a7) => [..._0x2202a7]),
    _0x539989 = _0x19971e.length;
  for (
    ;
    _0x539989 > 0 &&
    _0x19971e[_0x539989 - 1].every(
      (_0xc1f960) => _0xc1f960 == null || _0xc1f960 === "",
    );
  )
    _0x539989--;
  let _0x1e0071 = _0x19971e.slice(0, _0x539989),
    _0x366655 = Math.max(0, ..._0x1e0071.map((_0x27b8d0) => _0x27b8d0.length));
  for (
    ;
    _0x366655 > 0 &&
    _0x1e0071.every(
      (_0x354321) =>
        _0x354321[_0x366655 - 1] == null || _0x354321[_0x366655 - 1] === "",
    );
  )
    _0x366655--;
  return _0x1e0071
    .map((_0x1e5d38) => _0x1e5d38.slice(0, _0x366655))
    .filter((_0x12cfbc) => _0x12cfbc.length > 0);
}
function M(_0x470893, _0x590d94, _0xa90376) {
  let _0x3a7c7a = j(_0x590d94);
  if (_0x3a7c7a.length === 0)
    throw Error("Document\x20chart\x20values\x20are\x20required.");
  let {
      chartId: _0x31cada,
      injector: _0x3f43fb,
      unitId: _0x11a5c9,
    } = _0x470893,
    _0x7116f8 = _0x3f43fb.get(t.ICommandService),
    _0x296660 = _0x3f43fb.get(e.ChartResourceRepository),
    _0x393aa7 = _0x296660.getChart(_0x11a5c9, _0x31cada);
  if (!_0x393aa7)
    throw Error('Document chart "' + _0x31cada + '" was not found.');
  let _0x1a0e6c =
    (_0xa90376 == null ? undefined : _0xa90376.mode) ?? "duplicateIfShared";
  if (
    _0x296660.getChartIdsByDataSource(_0x11a5c9, _0x393aa7.dataSourceId)
      .length > 1
  ) {
    if (_0x1a0e6c === "rejectIfShared")
      throw Error(
        "Document\x20chart\x20data\x20source\x20\x22" +
          _0x393aa7.dataSourceId +
          "\x22\x20is\x20shared.",
      );
    if (_0x1a0e6c === "duplicateIfShared") {
      if (
        !_0x7116f8.syncExecuteCommand(y.id, {
          unitId: _0x11a5c9,
          chartId: _0x31cada,
        })
      )
        throw Error(
          'Failed to duplicate data source for document chart "' +
            _0x31cada +
            "\x22.",
        );
      _0x393aa7 = _0x296660.getChart(_0x11a5c9, _0x31cada);
    }
  }
  if (
    !_0x393aa7 ||
    !_0x7116f8.syncExecuteCommand(b.id, {
      unitId: _0x11a5c9,
      dataSourceId: _0x393aa7.dataSourceId,
      values: _0x3a7c7a,
    })
  )
    throw Error(
      "Failed\x20to\x20update\x20document\x20chart\x20data\x20source\x20for\x20\x22" +
        _0x31cada +
        "\x22.",
    );
}
function N(_0x15d15b, _0x39f9c5) {
  (w(_0x39f9c5.width), w(_0x39f9c5.height));
  let {
    chartId: _0x343e2b,
    drawingId: _0x2f0e4e,
    injector: _0x3ec92c,
    unitId: _0x5b2bcc,
  } = _0x15d15b;
  if (
    !_0x3ec92c
      .get(t.ICommandService)
      .syncExecuteCommand(T.id, {
        unitId: _0x5b2bcc,
        drawingId: _0x2f0e4e,
        chartId: _0x343e2b,
        layout: _0x39f9c5,
      })
  )
    throw Error(
      'Failed to update document chart layout "' + _0x343e2b + "\x22.",
    );
}
var P = class {
  constructor(_0x444d37) {
    this._context = _0x444d37;
  }
  describe(_0xc7c881 = {}, _0x1fc6ff) {
    var _0x22d576, _0x4791e2, _0x525fc4;
    let {
        chartId: _0x4e40a8,
        documentDataModel: _0x4e6391,
        drawingId: _0x4196aa,
        injector: _0x2cd161,
        unitId: _0x45dd2d,
      } = this._context,
      _0x39b202 = _0x2cd161.get(v).ensureChartModel(_0x45dd2d, _0x4e40a8);
    if (!_0x39b202) throw Error("Document chart not found: " + _0x4e40a8);
    let _0x3810d2 =
        (_0x22d576 = _0x4e6391.getDrawings()) == null
          ? undefined
          : _0x22d576[_0x4196aa],
      _0x1b56e3 =
        _0x3810d2 != null && _0x3810d2.docTransform
          ? {
              width:
                (_0x4791e2 = _0x3810d2.docTransform["size"]) == null
                  ? undefined
                  : _0x4791e2.width,
              height:
                (_0x525fc4 = _0x3810d2.docTransform["size"]) == null
                  ? undefined
                  : _0x525fc4.height,
              layoutType: _0x3810d2.layoutType,
            }
          : undefined;
    return {
      ...(0, e.describeChartModel)(_0x39b202.model, _0xc7c881, _0x1fc6ff),
      layout: _0x1b56e3,
    };
  }
  getInfo() {
    var _0x2f52a4, _0xafe11b;
    let _0x387bac = this.describe(),
      _0x1f4f23 = this.getDataSource();
    if (!_0x1f4f23)
      throw Error(
        "Document chart data source not found: " + this._context["chartId"],
      );
    return {
      config: (0, e.toChartCreateConfigSnapshot)(_0x387bac),
      dataSource: (0, e.isInlineChartDataSource)(_0x1f4f23)
        ? { values: t.Tools["deepClone"](_0x1f4f23.values) }
        : (0, e.isReferencedChartDataSource)(_0x1f4f23)
          ? { source: t.Tools["deepClone"](_0x1f4f23.source) }
          : (() => {
              throw Error(
                "Invalid Document chart data source: " +
                  this._context["chartId"],
              );
            })(),
      position: t.Tools["deepClone"](
        (_0x2f52a4 = _0x387bac.layout) == null ? undefined : _0x2f52a4.position,
      ),
      size: _0x387bac.layout
        ? {
            width: _0x387bac.layout["width"] ?? 0,
            height: _0x387bac.layout["height"] ?? 0,
          }
        : undefined,
      layoutType:
        (_0xafe11b = _0x387bac.layout) == null
          ? undefined
          : _0xafe11b.layoutType,
    };
  }
  getData() {
    let {
        chartId: _0x564184,
        injector: _0x3376e5,
        unitId: _0x2015b5,
      } = this._context,
      _0x461da2 = _0x3376e5
        .get(e.ChartResourceRepository)
        .getChart(_0x2015b5, _0x564184),
      _0x211a90 = _0x461da2
        ? _0x3376e5
            .get(e.ChartResourceRepository)
            .getDataSource(_0x2015b5, _0x461da2.dataSourceId)
        : null;
    return (0, e.isInlineChartDataSource)(_0x211a90) ? _0x211a90.values : null;
  }
  getDataSource() {
    let {
        chartId: _0x10735e,
        injector: _0x216aaf,
        unitId: _0x45669f,
      } = this._context,
      _0x464e69 = _0x216aaf
        .get(e.ChartResourceRepository)
        .getChart(_0x45669f, _0x10735e);
    return (
      (_0x464e69
        ? _0x216aaf
            .get(e.ChartResourceRepository)
            .getDataSource(_0x45669f, _0x464e69.dataSourceId)
        : null) ?? null
    );
  }
  async commitDataSource(_0xdbf425) {
    let { injector: _0x3acb15 } = this._context,
      _0x48d885 = (0, e.isReferencedChartDataSource)(_0xdbf425)
        ? _0xdbf425.source
        : undefined,
      _0x572b71 = _0x48d885
        ? _0x3acb15.get(e.IChartDataSourceRuntimeService).acquire(_0x48d885)
        : null;
    try {
      if (_0x572b71) {
        let _0x2dc79c = await (0, r.firstValueFrom)(
          _0x572b71.state$["pipe"](
            (0, r.filter)(
              ({ status: _0x1a1ea5 }) =>
                _0x1a1ea5 !== e.ChartDataSourceRuntimeStatus["LOADING"],
            ),
          ),
        );
        if (_0x2dc79c.status !== e.ChartDataSourceRuntimeStatus["READY"])
          throw _0x2dc79c.error instanceof Error
            ? _0x2dc79c.error
            : Error(_0x48d885 == null ? undefined : _0x48d885.kind);
      }
      this._commitDataSource(_0xdbf425);
    } finally {
      _0x572b71 == null || _0x572b71.dispose();
    }
  }
  async commitChanges(_0x54a78d, _0x4240a2, _0x32db72, _0x7cca5d = false) {
    let { injector: _0x3e6d4b } = this._context,
      _0x2c559f = (0, e.isReferencedChartDataSource)(_0x54a78d)
        ? _0x54a78d.source
        : undefined,
      _0xa15f2f = _0x2c559f
        ? _0x3e6d4b.get(e.IChartDataSourceRuntimeService).acquire(_0x2c559f)
        : null;
    try {
      if (_0xa15f2f) {
        let _0x5d1333 = await (0, r.firstValueFrom)(
          _0xa15f2f.state$["pipe"](
            (0, r.filter)(
              ({ status: _0x4479ee }) =>
                _0x4479ee !== e.ChartDataSourceRuntimeStatus["LOADING"],
            ),
          ),
        );
        if (_0x5d1333.status !== e.ChartDataSourceRuntimeStatus["READY"])
          throw _0x5d1333.error instanceof Error
            ? _0x5d1333.error
            : Error(_0x2c559f == null ? undefined : _0x2c559f.kind);
      }
      (Object.keys(_0x4240a2).length > 0 &&
        (_0x7cca5d ? this._replaceConfig(_0x4240a2) : this.commit(_0x4240a2)),
        Object.keys(_0x32db72).length > 0 && this.commitHost(_0x32db72),
        _0x54a78d && this._commitDataSource(_0x54a78d));
    } finally {
      _0xa15f2f == null || _0xa15f2f.dispose();
    }
  }
  refreshDataSource() {
    let {
      chartId: _0x50ed68,
      injector: _0x48fb51,
      unitId: _0x4fa566,
    } = this._context;
    return _0x48fb51.get(v).refreshChartDataSource(_0x4fa566, _0x50ed68);
  }
  commit(_0x38c0c2) {
    var _0x1c61ea;
    let {
        chartId: _0x1d0f0a,
        injector: _0x5ef7d3,
        unitId: _0x2ddf6a,
      } = this._context,
      _0x4eb11e = _0x5ef7d3.get(v).ensureChartModel(_0x2ddf6a, _0x1d0f0a);
    if (!_0x4eb11e) throw Error("Document chart not found: " + _0x1d0f0a);
    let _0x545459 = (0, e.toChartModelUpdate)(_0x38c0c2, {
      series:
        (_0x1c61ea = _0x4eb11e.model["config"]) == null
          ? undefined
          : _0x1c61ea.series,
      currentChartType: _0x4eb11e.model["chartType"],
      currentStyle: _0x4eb11e.model["style"],
      currentContext: _0x4eb11e.model["context"],
      currentDataAggregation: _0x4eb11e.model["dataAggregation"],
    });
    if (
      !_0x5ef7d3
        .get(t.ICommandService)
        .syncExecuteCommand(h.id, {
          unitId: _0x2ddf6a,
          chartId: _0x1d0f0a,
          ..._0x545459,
          [m]: true,
        })
    )
      throw Error("Failed to update Document chart configuration.");
  }
  update(_0x9b7bd1) {
    let _0x57ee25 = {};
    (_0x9b7bd1.position !== undefined &&
      (_0x57ee25.position = _0x9b7bd1.position),
      _0x9b7bd1.size !== undefined &&
        ((_0x57ee25.width = _0x9b7bd1.size["width"]),
        (_0x57ee25.height = _0x9b7bd1.size["height"])),
      Object.prototype["hasOwnProperty"].call(_0x9b7bd1, "layoutType") &&
        (_0x57ee25.layoutType = _0x9b7bd1.layoutType));
    let _0xa34412 = {};
    return (
      _0x9b7bd1.anchor !== undefined && (_0xa34412.anchor = _0x9b7bd1.anchor),
      Object.keys(_0x57ee25).length > 0 && (_0xa34412.layout = _0x57ee25),
      this.commitChanges(
        _0x9b7bd1.dataSource,
        _0x9b7bd1.config,
        _0xa34412,
        true,
      )
    );
  }
  _replaceConfig(_0x1a9d7a) {
    var _0x4c10c3;
    let {
        chartId: _0x2da078,
        injector: _0x5d450e,
        unitId: _0x228932,
      } = this._context,
      _0x27cf1e = _0x5d450e.get(v).ensureChartModel(_0x228932, _0x2da078);
    if (!_0x27cf1e) throw Error("Document chart not found: " + _0x2da078);
    let _0x140c45 = (0, e.toChartModelConfigReplacement)(_0x1a9d7a, {
      series:
        (_0x4c10c3 = _0x27cf1e.model["config"]) == null
          ? undefined
          : _0x4c10c3.series,
      currentStyle: _0x27cf1e.model["style"],
    });
    if (
      !_0x5d450e
        .get(t.ICommandService)
        .syncExecuteCommand(h.id, {
          unitId: _0x228932,
          chartId: _0x2da078,
          ..._0x140c45,
          [m]: true,
        })
    )
      throw Error("Failed to update Document chart configuration.");
  }
  setDataSource(_0x26bf3f) {
    return this.commitDataSource(
      Array.isArray(_0x26bf3f)
        ? { values: _0x26bf3f }
        : {
            source:
              e.ResourceRefChartDataSourceAdapter["toReference"](_0x26bf3f),
          },
    );
  }
  setAbsolutePosition(_0x53670d, _0x3f2ddf) {
    this.commitHost({ layout: { position: { x: _0x53670d, y: _0x3f2ddf } } });
  }
  setSize(_0x1d8dbb, _0x7c1b78) {
    this.commitHost({ layout: { width: _0x1d8dbb, height: _0x7c1b78 } });
  }
  arrange(_0x21d76e) {
    let {
        documentDataModel: _0x5e69d4,
        drawingId: _0x2a7cae,
        injector: _0x45f559,
        unitId: _0x61277a,
      } = this._context,
      _0x831091 = _0x5e69d4.getDrawingsOrder() ?? [],
      _0x48b10e = _0x831091.indexOf(_0x2a7cae);
    if (_0x48b10e < 0)
      throw Error("Document chart drawing not found: " + _0x2a7cae);
    if (
      (0, t.getDrawingOrderIndex)(_0x48b10e, _0x831091.length, _0x21d76e) !==
        _0x48b10e &&
      !_0x45f559
        .get(t.ICommandService)
        .syncExecuteCommand(n.SetDocDrawingArrangeCommand["id"], {
          unitId: _0x61277a,
          subUnitId: _0x61277a,
          drawingIds: [_0x2a7cae],
          arrangeType: _0x21d76e,
        })
    )
      throw Error("Failed to arrange Document chart.");
  }
  setZOrder(_0x402907) {
    let {
        documentDataModel: _0x9dfeed,
        drawingId: _0x4d9c03,
        injector: _0x4f5ddd,
        unitId: _0x2106a1,
      } = this._context,
      _0x2f078b = _0x9dfeed.getDrawingsOrder() ?? [],
      _0x2e3625 = _0x2f078b.indexOf(_0x4d9c03);
    if (_0x2e3625 < 0)
      throw Error(
        "Document\x20chart\x20drawing\x20not\x20found:\x20" + _0x4d9c03,
      );
    if (
      (0, t.normalizeDrawingOrderIndex)(_0x402907, _0x2f078b.length) !==
        _0x2e3625 &&
      !_0x4f5ddd
        .get(t.ICommandService)
        .syncExecuteCommand(n.SetDocDrawingArrangeCommand["id"], {
          unitId: _0x2106a1,
          subUnitId: _0x2106a1,
          drawingIds: [_0x4d9c03],
          zOrder: _0x402907,
        })
    )
      throw Error("Failed\x20to\x20update\x20Document\x20chart\x20z-order.");
  }
  resolveData(_0x171760, _0x558b23) {
    let {
        chartId: _0x5883e1,
        injector: _0x433279,
        unitId: _0x35e5c8,
      } = this._context,
      _0x4be4e9 = _0x433279.get(v).ensureChartModel(_0x35e5c8, _0x5883e1);
    if (!_0x4be4e9) throw Error("Document chart not found: " + _0x5883e1);
    return (0, e.buildChartPreviewData)(_0x4be4e9.model, _0x171760, _0x558b23);
  }
  resolveDataSet(_0x3defc8) {
    var _0x42b2e9, _0x1779a9;
    let {
        chartId: _0x164f64,
        injector: _0x2a24c6,
        unitId: _0x580aa8,
      } = this._context,
      _0x4d8db9 = _0x2a24c6.get(v).ensureChartModel(_0x580aa8, _0x164f64),
      _0x22cff7 = _0x2a24c6
        .get(e.ChartResourceRepository)
        .getChart(_0x580aa8, _0x164f64);
    if (!_0x4d8db9 || !_0x22cff7)
      throw Error("Document chart not found: " + _0x164f64);
    return (0, e.buildOrientedChartDataSet)(_0x3defc8, {
      headerRow:
        ((_0x42b2e9 = _0x22cff7.context) == null
          ? undefined
          : _0x42b2e9.headerRow) ?? e.DEFAULT_CHART_RESOURCE_HEADER_ROW,
      isRowDirection:
        ((_0x1779a9 = _0x22cff7.context) == null
          ? undefined
          : _0x1779a9.orient) !== "column",
    });
  }
  commitHost(_0x2813aa) {
    let {
      chartId: _0x39aa11,
      drawingId: _0x1e1a03,
      injector: _0x363600,
      unitId: _0x47fa8b,
    } = this._context;
    if (_0x2813aa.anchor !== undefined)
      throw Error("Document chart anchor can only be set before insert().");
    (_0x2813aa.data !== undefined &&
      M(
        { unitId: _0x47fa8b, chartId: _0x39aa11, injector: _0x363600 },
        _0x2813aa.data,
      ),
      _0x2813aa.layout !== undefined &&
        N(
          {
            unitId: _0x47fa8b,
            chartId: _0x39aa11,
            drawingId: _0x1e1a03,
            injector: _0x363600,
          },
          _0x2813aa.layout,
        ));
  }
  remove() {
    let {
      chartId: _0x3c237e,
      drawingId: _0x474490,
      injector: _0x359089,
      unitId: _0x513887,
    } = this._context;
    return !!_0x359089
      .get(t.ICommandService)
      .syncExecuteCommand(f.id, {
        unitId: _0x513887,
        drawingId: _0x474490,
        chartId: _0x3c237e,
      });
  }
  _commitDataSource(_0x152d1a) {
    let {
      chartId: _0x25be5a,
      injector: _0x3a924b,
      unitId: _0x5972ad,
    } = this._context;
    if (
      !_0x3a924b
        .get(t.ICommandService)
        .syncExecuteCommand(l.id, {
          unitId: _0x5972ad,
          chartId: _0x25be5a,
          dataSource: _0x152d1a,
        })
    )
      throw Error(l.id);
  }
};
let F = (function (_0x2c3b8a) {
    return (
      (_0x2c3b8a.Selection = "selection"),
      (_0x2c3b8a.BodyOffset = "bodyOffset"),
      (_0x2c3b8a.Paragraph = "paragraph"),
      (_0x2c3b8a.TextRange = "textRange"),
      _0x2c3b8a
    );
  })({}),
  I = (function (_0x129657) {
    return (
      (_0x129657.Before = "before"),
      (_0x129657.After = "after"),
      _0x129657
    );
  })({});
const L = {},
  R = {
    id: "doc.command.insert-doc-chart",
    type: t.CommandType["COMMAND"],
    handler: (_0x1f5927, _0x3a644c) => {
      var _0x4209a8, _0x1eddb1, _0x22a637, _0x10aed9, _0x273e7a, _0x5ca6e7;
      if (!_0x3a644c || !_0x3a644c.unitId) return false;
      let _0x5dc6ae = t.Tools["deepClone"](_0x3a644c.chart);
      if (
        !_0x5dc6ae.chartType ||
        (((_0x4209a8 = _0x3a644c.textRange) == null
          ? undefined
          : _0x4209a8.segmentId) != null &&
          _0x3a644c.textRange["segmentId"] !== "") ||
        !C(_0x3a644c.width) ||
        !C(_0x3a644c.height) ||
        (_0x3a644c.position &&
          (!Number.isFinite(_0x3a644c.position["x"]) ||
            !Number.isFinite(_0x3a644c.position["y"])))
      )
        return false;
      ((_0x5dc6ae.id = _0x5dc6ae.id ?? (0, t.generateRandomId)(6)),
        (_0x5dc6ae.context = {
          ..._0x5dc6ae.context,
          headerRow:
            ((_0x1eddb1 = _0x5dc6ae.context) == null
              ? undefined
              : _0x1eddb1.headerRow) ?? e.DEFAULT_CHART_RESOURCE_HEADER_ROW,
        }));
      let _0x10e988 = z(_0x3a644c.dataSource);
      _0x5dc6ae.dataSourceId = _0x10e988.id;
      let _0x14831c =
          (_0x22a637 = _0x1f5927
            .get(t.IConfigService)
            .getConfig("docs-chart.config")) == null
            ? undefined
            : _0x22a637.defaultChartSize,
        _0x39bc1a =
          (_0x10aed9 = _0x3a644c.drawing) == null
            ? undefined
            : _0x10aed9.docTransform,
        _0x463a37 =
          _0x3a644c.width ??
          (_0x39bc1a == null ? undefined : _0x39bc1a.size["width"]) ??
          (_0x14831c == null ? undefined : _0x14831c.width) ??
          480,
        _0x1dd56a =
          _0x3a644c.height ??
          (_0x39bc1a == null ? undefined : _0x39bc1a.size["height"]) ??
          (_0x14831c == null ? undefined : _0x14831c.height) ??
          320,
        _0x5aeb5c = {
          ...(_0x39bc1a ?? (0, i.buildDocTransform)(_0x463a37, _0x1dd56a)),
          size: { width: _0x463a37, height: _0x1dd56a },
          ...(_0x3a644c.position === undefined
            ? {}
            : {
                positionH: {
                  relativeFrom: t.ObjectRelativeFromH["PAGE"],
                  posOffset: _0x3a644c.position["x"],
                },
                positionV: {
                  relativeFrom: t.ObjectRelativeFromV["PARAGRAPH"],
                  posOffset: _0x3a644c.position["y"],
                },
              }),
        },
        _0x55ccfb = B({
          unitId: _0x3a644c.unitId,
          chartId: _0x5dc6ae.id,
          drawing: _0x3a644c.drawing,
          docTransform: _0x5aeb5c,
        });
      if (
        !S(
          ((_0x273e7a = _0x55ccfb.docTransform) == null
            ? undefined
            : _0x273e7a.size["width"]) ?? NaN,
        ) ||
        !S(
          ((_0x5ca6e7 = _0x55ccfb.docTransform) == null
            ? undefined
            : _0x5ca6e7.size["height"]) ?? NaN,
        )
      )
        return false;
      let _0x17c44b = { unitId: _0x3a644c.unitId, dataSource: _0x10e988 },
        _0xccdc65 = { unitId: _0x3a644c.unitId, chart: _0x5dc6ae },
        _0x3d201c = { unitId: _0x3a644c.unitId, chartId: _0x5dc6ae.id },
        _0x5a685f = { unitId: _0x3a644c.unitId, dataSourceId: _0x10e988.id },
        _0x11a6fd = [
          { id: s.id, params: _0x17c44b },
          { id: c.id, params: _0xccdc65 },
        ],
        _0x4e8b2f = [
          { id: d.id, params: _0x3d201c },
          { id: o.id, params: _0x5a685f },
        ],
        _0x4301e9 = _0x1f5927.get(t.ICommandService),
        _0x3f8e53 = _0x1f5927.get(t.IUndoRedoService),
        _0x2b2466 = (0, t.sequenceExecute)(_0x11a6fd, _0x4301e9);
      if (!_0x2b2466.result)
        return (
          (0, t.sequenceExecute)(
            _0x4e8b2f.slice(_0x4e8b2f.length - _0x2b2466.index),
            _0x4301e9,
          ),
          false
        );
      let _0x46a1f6 =
          "doc-chart-insert-resource:" + _0x3a644c.unitId + ":" + _0x5dc6ae.id,
        _0xea1f4a = _0x3f8e53.__tempBatchingUndoRedo(_0x3a644c.unitId);
      _0x3f8e53.pushUndoRedo({
        unitID: _0x3a644c.unitId,
        redoMutations: _0x11a6fd,
        undoMutations: _0x4e8b2f,
        id: _0x46a1f6,
      });
      let _0x33215e = { unitId: _0x3a644c.unitId, drawings: [_0x55ccfb] };
      if (
        (_0x3a644c.textRange != null &&
          (_0x33215e.textRange = (0, i.normalizeTextRange)(
            _0x3a644c.textRange,
          )),
        !_0x4301e9.syncExecuteCommand(
          n.InsertDocDrawingCommand["id"],
          _0x33215e,
        ))
      )
        return (
          _0xea1f4a.dispose(),
          _0x3f8e53.rollback(_0x46a1f6, _0x3a644c.unitId),
          false
        );
      if (_0x3a644c.focus !== false)
        try {
          _0x1f5927
            .get(n.IDocDrawingService)
            .focusDrawing([
              {
                unitId: _0x3a644c.unitId,
                subUnitId: _0x3a644c.unitId,
                drawingId: _0x55ccfb.drawingId,
              },
            ]);
        } catch {}
      return (
        _0xea1f4a.dispose(),
        {
          chartId: _0x5dc6ae.id,
          dataSourceId: _0x10e988.id,
          drawingId: _0x55ccfb.drawingId,
        }
      );
    },
  };
function z(_0x1b3848) {
  let _0x111256 =
      (_0x1b3848 == null ? undefined : _0x1b3848.id) ??
      (0, t.generateRandomId)(6),
    _0x2fc0d3 = _0x1b3848 == null ? undefined : _0x1b3848.name,
    _0x2ebae2 =
      _0x1b3848 != null && _0x1b3848.source
        ? { id: _0x111256, name: _0x2fc0d3, source: _0x1b3848.source }
        : {
            id: _0x111256,
            name: _0x2fc0d3,
            values: V((_0x1b3848 == null ? undefined : _0x1b3848.values) ?? x),
          };
  return (_0x2ebae2.name ?? delete _0x2ebae2.name, _0x2ebae2);
}
function B(_0x18aa4d) {
  let {
    unitId: _0xaaf854,
    chartId: _0x4cc51e,
    drawing: _0x24efbc,
    docTransform: _0x5d80fe,
  } = _0x18aa4d;
  return {
    ..._0x24efbc,
    unitId: _0xaaf854,
    subUnitId: _0xaaf854,
    drawingId:
      (_0x24efbc == null ? undefined : _0x24efbc.drawingId) ??
      (0, t.generateRandomId)(6),
    drawingType: t.DrawingTypeEnum["DRAWING_CHART"],
    chartId: _0x4cc51e,
    docTransform: _0x5d80fe,
    behindDoc:
      (_0x24efbc == null ? undefined : _0x24efbc.behindDoc) ??
      t.BooleanNumber["FALSE"],
    title: (_0x24efbc == null ? undefined : _0x24efbc.title) ?? "",
    description: (_0x24efbc == null ? undefined : _0x24efbc.description) ?? "",
    layoutType:
      (_0x24efbc == null ? undefined : _0x24efbc.layoutType) ??
      t.PositionedObjectLayoutType["INLINE"],
    wrapText:
      (_0x24efbc == null ? undefined : _0x24efbc.wrapText) ??
      t.WrapTextType["BOTH_SIDES"],
    distB: (_0x24efbc == null ? undefined : _0x24efbc.distB) ?? 0,
    distL: (_0x24efbc == null ? undefined : _0x24efbc.distL) ?? 0,
    distR: (_0x24efbc == null ? undefined : _0x24efbc.distR) ?? 0,
    distT: (_0x24efbc == null ? undefined : _0x24efbc.distT) ?? 0,
    allowTransform:
      (_0x24efbc == null ? undefined : _0x24efbc.allowTransform) ?? true,
  };
}
function V(_0x332905) {
  return _0x332905.map((_0x290b7a) => [..._0x290b7a]);
}
const H = {
  id: "doc.command.update-doc-chart-snapshot",
  type: t.CommandType["COMMAND"],
  handler: (_0x154afe, _0x49f287) => {
    if (!_0x49f287) return false;
    let { unitId: _0x4f6e1e, chartId: _0x4e7a56, patch: _0xafedd5 } = _0x49f287,
      _0xfd59ac = _0x154afe
        .get(e.ChartResourceRepository)
        .getChart(_0x4f6e1e, _0x4e7a56);
    if (!_0xfd59ac) return false;
    let _0x36ab24 = _0x154afe.get(t.ICommandService),
      _0x584e7b = _0x154afe.get(t.IUndoRedoService),
      _0x4f86b2 = { unitId: _0x4f6e1e, chart: { ..._0xfd59ac, ..._0xafedd5 } },
      _0x43cf6d = { unitId: _0x4f6e1e, chart: _0xfd59ac },
      _0x2ae891 = [{ id: c.id, params: _0x4f86b2 }],
      _0x5b4491 = [{ id: c.id, params: _0x43cf6d }];
    return (0, t.sequenceExecute)(_0x2ae891, _0x36ab24).result
      ? (_0x584e7b.pushUndoRedo({
          unitID: _0x4f6e1e,
          undoMutations: _0x5b4491,
          redoMutations: _0x2ae891,
        }),
        true)
      : false;
  },
};
var U = "@univerjs-pro/docs-chart",
  W = "1.0.0-insiders.20260907-70fc579";
function G(_0x1cc8b4) {
  "@babel/helpers - typeof";
  return (
    (G =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x50a4e2) {
            return typeof _0x50a4e2;
          }
        : function (_0x511395) {
            return _0x511395 &&
              typeof Symbol == "function" &&
              _0x511395.constructor === Symbol &&
              _0x511395 !== Symbol.prototype
              ? "symbol"
              : typeof _0x511395;
          }),
    G(_0x1cc8b4)
  );
}
function K(_0xaee902, _0x129565) {
  if (G(_0xaee902) != "object" || !_0xaee902) return _0xaee902;
  var _0x9af4b9 = _0xaee902[Symbol.toPrimitive];
  if (_0x9af4b9 !== undefined) {
    var _0x4e0834 = _0x9af4b9.call(_0xaee902, _0x129565 || "default");
    if (G(_0x4e0834) != "object") return _0x4e0834;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x129565 === "string" ? String : Number)(_0xaee902);
}
function q(_0x28121f) {
  var _0x5eb96c = K(_0x28121f, "string");
  return G(_0x5eb96c) == "symbol" ? _0x5eb96c : _0x5eb96c + "";
}
function J(_0x434f67, _0x35cc5a, _0x259ed4) {
  return (
    (_0x35cc5a = q(_0x35cc5a)) in _0x434f67
      ? Object.defineProperty(_0x434f67, _0x35cc5a, {
          value: _0x259ed4,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x434f67[_0x35cc5a] = _0x259ed4),
    _0x434f67
  );
}
let Y = class extends t.Disposable {
  constructor(_0x25371d, _0x41cfcb, _0x5d28e8) {
    (super(),
      (this._resourceManagerService = _0x25371d),
      (this._resourceService = _0x41cfcb),
      (this._modelService = _0x5d28e8),
      J(this, "_resourceDisposable", null),
      this._initResource());
  }
  _initResource() {
    ((this._resourceDisposable = this._resourceManagerService[
      "registerPluginResource"
    ]({
      pluginName: "DOC_CHART_PLUGIN",
      businesses: [t.UniverInstanceType["UNIVER_DOC"]],
      toJson: (_0x458b49) => this._resourceService["serializeUnit"](_0x458b49),
      parseJson: (_0xc807dc) => JSON.parse(_0xc807dc),
      onLoad: (_0x2fd30a, _0x587812) => {
        this._resourceService["loadUnit"](_0x2fd30a, _0x587812);
      },
      onUnLoad: (_0x26e7c0) => {
        (this._modelService["removeUnit"](_0x26e7c0),
          this._resourceService["unloadUnit"](_0x26e7c0));
      },
    })),
      this.disposeWithMe(this._resourceDisposable));
  }
};
Y = _(
  [
    g(0, t.IResourceManagerService),
    g(1, (0, t.Inject)(e.ChartResourceRepository)),
    g(2, (0, t.Inject)(v)),
  ],
  Y,
);
let X = class {
  constructor(_0x2e6c55) {
    this._resourceService = _0x2e6c55;
  }
  getRemoveDrawingMutationInfos(_0x39d0de) {
    let _0x6a208d = Z(_0x39d0de.drawing);
    if (!_0x6a208d) return null;
    let _0x17718e = this._resourceService["getChart"](
      _0x39d0de.unitId,
      _0x6a208d.chartId,
    );
    if (!_0x17718e) return null;
    let _0x24a1b7 = this._resourceService["getDataSource"](
        _0x39d0de.unitId,
        _0x17718e.dataSourceId,
      ),
      _0x421f64 = this._shouldCleanupDataSource(
        _0x39d0de,
        _0x17718e.dataSourceId,
      );
    return {
      redoMutations: [
        {
          id: d.id,
          params: {
            unitId: _0x39d0de.unitId,
            chartId: _0x17718e.id,
            cleanupDataSource: _0x421f64,
          },
        },
      ],
      undoMutations: [
        ...(_0x421f64 && _0x24a1b7
          ? [
              {
                id: s.id,
                params: { unitId: _0x39d0de.unitId, dataSource: _0x24a1b7 },
              },
            ]
          : []),
        { id: c.id, params: { unitId: _0x39d0de.unitId, chart: _0x17718e } },
      ],
    };
  }
  _shouldCleanupDataSource(_0x6c260c, _0x2cb007) {
    let _0x3550de = new Set(
      _0x6c260c.removeDrawings["map"]((_0x6eecc0) => {
        var _0x48148f;
        return (_0x48148f = Z(_0x6eecc0)) == null
          ? undefined
          : _0x48148f.chartId;
      }).filter((_0x3d30dd) => _0x3d30dd != null),
    );
    return (
      this._resourceService["getChartIdsByDataSource"](
        _0x6c260c.unitId,
        _0x2cb007,
      ).filter((_0x18b0ba) => !_0x3550de.has(_0x18b0ba)).length === 0
    );
  }
};
X = _([g(0, (0, t.Inject)(e.ChartResourceRepository))], X);
function Z(_0xe17613) {
  let _0x15992a = _0xe17613;
  return _0x15992a.drawingType === t.DrawingTypeEnum["DRAWING_CHART"] &&
    typeof _0x15992a.chartId == "string"
    ? _0x15992a
    : null;
}
let Q = class extends t.Plugin {
  constructor(_0x3b8e8d = L, _0x32f20b, _0x31500d, _0x21beb7) {
    (super(),
      (this._config = _0x3b8e8d),
      (this._injector = _0x32f20b),
      (this._configService = _0x31500d),
      (this._commandService = _0x21beb7));
    let { ..._0x2bd74b } = (0, t.merge)({}, L, this._config);
    (this._configService["setConfig"]("docs-chart.config", _0x2bd74b),
      this._initCommands());
  }
  onStarting() {
    let _0xcd18ed = this._injector;
    ([[e.ChartResourceRepository], [v], [X], [Y]].forEach((_0x35cec3) =>
      _0xcd18ed.add(_0x35cec3),
    ),
      this.disposeWithMe(
        _0xcd18ed
          .get(n.IDocDrawingAdapterService)
          .registerAdapter(_0xcd18ed.get(X)),
      ),
      (0, t.touchDependencies)(_0xcd18ed, [
        [e.ChartResourceRepository],
        [v],
        [X],
        [Y],
      ]));
  }
  _initCommands() {
    [R, l, H, b, h, T, y, f, s, o, c, d].forEach((_0x43a3ca) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x43a3ca));
    });
  }
};
(J(Q, "type", t.UniverInstanceType["UNIVER_DOC"]),
  J(Q, "pluginName", "UniverDocsChartPlugin"),
  J(Q, "packageName", U),
  J(Q, "version", W),
  (Q = _(
    [
      (0, t.DependentOn)(
        e.UniverChartPlugin,
        a.UniverLicensePlugin,
        n.UniverDocsDrawingPlugin,
      ),
      g(1, (0, t.Inject)(t.Injector)),
      g(2, t.IConfigService),
      g(3, t.ICommandService),
    ],
    Q,
  )),
  (exports.ChangeDocChartDataSourceCommand = l),
  (exports.DEFAULT_DOC_CHART_ELEMENT_HEIGHT = 320),
  (exports.DEFAULT_DOC_CHART_ELEMENT_WIDTH = 480),
  (exports.DEFAULT_DOC_CHART_VALUES = x),
  (exports.DocChartDataEditMode = A),
  Object.defineProperty(exports, "DocChartDrawingAdapter", {
    enumerable: true,
    get: function () {
      return X;
    },
  }),
  (exports.DocChartInsertAnchorKind = F),
  Object.defineProperty(exports, "DocChartModelService", {
    enumerable: true,
    get: function () {
      return v;
    },
  }),
  (exports.DocChartParagraphPosition = I),
  (exports.DocumentChartConfigAdapter = P),
  (exports.DuplicateDocChartDataSourceCommand = y),
  (exports.InsertDocChartCommand = R),
  (exports.RemoveDocChartCommand = f),
  (exports.RemoveDocChartDataSourceMutation = o),
  (exports.RemoveDocChartSnapshotMutation = d),
  (exports.SetDocChartDataSourceMutation = s),
  (exports.SetDocChartSnapshotMutation = c),
  Object.defineProperty(exports, "UniverDocsChartPlugin", {
    enumerable: true,
    get: function () {
      return Q;
    },
  }),
  (exports.UpdateDocChartConfigCommand = h),
  (exports.UpdateDocChartDataSourceCommand = b),
  (exports.UpdateDocChartDrawingCommand = T),
  (exports.UpdateDocChartSnapshotCommand = H),
  (exports.assertValidOptionalDocChartSize = w),
  (exports.normalizeDocumentChartValues = j),
  (exports.updateDocumentChartData = M),
  (exports.updateDocumentChartLayout = N));
