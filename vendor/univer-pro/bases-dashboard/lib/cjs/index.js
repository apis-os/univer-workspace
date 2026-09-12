Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/bases"),
  t = require("@univerjs/core"),
  n = require("rxjs"),
  r = require("@univerjs-pro/engine-chart"),
  i = require("@univerjs-pro/engine-pivot"),
  a = require("@univerjs-pro/engine-shape"),
  o = require("@univerjs-pro/license"),
  s = require("@univerjs-pro/shape-editor"),
  c = require("@univerjs/rpc");
function l(_0x1d71e1, _0x1285ef, _0x3a3b19) {
  return (0, e.canEditBaseTargets)(_0x1d71e1, _0x1285ef, [
    (0, e.getBaseDashboardPermissionObjectId)(_0x3a3b19),
  ]);
}
function u(_0x4d4864, _0x10088c, _0x4db996, _0x1148d7) {
  return (0, e.canEditBaseTargets)(_0x4d4864, _0x10088c, [
    (0, e.getBaseTablePermissionObjectId)(_0x4db996),
    (0, e.getBaseViewPermissionObjectId)(_0x4db996, _0x1148d7),
  ]);
}
const d = {
    id: "base-dashboard.mutation.request-pivot-calculation",
    type: t.CommandType["MUTATION"],
    handler: () => true,
  },
  f = {
    id: "base-dashboard.mutation.respond-pivot-calculation",
    type: t.CommandType["MUTATION"],
    handler: () => true,
  };
function p(_0x8e75e3) {
  "@babel/helpers - typeof";
  return (
    (p =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5c49a9) {
            return typeof _0x5c49a9;
          }
        : function (_0x45a4d0) {
            return _0x45a4d0 &&
              typeof Symbol == "function" &&
              _0x45a4d0.constructor === Symbol &&
              _0x45a4d0 !== Symbol.prototype
              ? "symbol"
              : typeof _0x45a4d0;
          }),
    p(_0x8e75e3)
  );
}
function ee(_0x1b9e51, _0x380dba) {
  if (p(_0x1b9e51) != "object" || !_0x1b9e51) return _0x1b9e51;
  var _0x3291e9 = _0x1b9e51[Symbol.toPrimitive];
  if (_0x3291e9 !== undefined) {
    var _0x1e6b95 = _0x3291e9.call(_0x1b9e51, _0x380dba || "default");
    if (p(_0x1e6b95) != "object") return _0x1e6b95;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x380dba === "string" ? String : Number)(_0x1b9e51);
}
function te(_0x53edcb) {
  var _0x77b8f1 = ee(_0x53edcb, "string");
  return p(_0x77b8f1) == "symbol" ? _0x77b8f1 : _0x77b8f1 + "";
}
function m(_0x1ec40a, _0x3b689c, _0x22cff5) {
  return (
    (_0x3b689c = te(_0x3b689c)) in _0x1ec40a
      ? Object.defineProperty(_0x1ec40a, _0x3b689c, {
          value: _0x22cff5,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x1ec40a[_0x3b689c] = _0x22cff5),
    _0x1ec40a
  );
}
function h(_0x2f6546, _0x4daa7b) {
  return function (_0x472f75, _0x56febc) {
    _0x4daa7b(_0x472f75, _0x56febc, _0x2f6546);
  };
}
function g(_0x69f41a, _0x1e5eb6, _0x53a5d5, _0x27eda0) {
  var _0x64e37 = arguments.length,
    _0x5e136d =
      _0x64e37 < 3
        ? _0x1e5eb6
        : _0x27eda0 === null
          ? (_0x27eda0 = Object.getOwnPropertyDescriptor(_0x1e5eb6, _0x53a5d5))
          : _0x27eda0,
    _0x1302c3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5e136d = Reflect.decorate(_0x69f41a, _0x1e5eb6, _0x53a5d5, _0x27eda0);
  else {
    for (var _0x2ef442 = _0x69f41a.length - 1; _0x2ef442 >= 0; _0x2ef442--)
      (_0x1302c3 = _0x69f41a[_0x2ef442]) &&
        (_0x5e136d =
          (_0x64e37 < 3
            ? _0x1302c3(_0x5e136d)
            : _0x64e37 > 3
              ? _0x1302c3(_0x1e5eb6, _0x53a5d5, _0x5e136d)
              : _0x1302c3(_0x1e5eb6, _0x53a5d5)) || _0x5e136d);
  }
  return (
    _0x64e37 > 3 &&
      _0x5e136d &&
      Object.defineProperty(_0x1e5eb6, _0x53a5d5, _0x5e136d),
    _0x5e136d
  );
}
let _ = class extends t.Disposable {
  constructor(_0x5be58c) {
    (super(),
      (this._commandService = _0x5be58c),
      m(this, "_pending", new Map()));
  }
  calculate(_0x1231d1) {
    let _0xa24034 = (0, t.generateRandomId)();
    return new Promise((_0x174a03, _0x4cf3a5) => {
      let _0x40c241 = setTimeout(() => {
        (this._pending["delete"](_0xa24034),
          _0x4cf3a5(
            Error("Base pivot calculation timed out: " + _0x1231d1.viewId),
          ));
      }, 30000);
      (this._pending["set"](_0xa24034, {
        resolve: _0x174a03,
        reject: _0x4cf3a5,
        timeout: _0x40c241,
      }),
        this._commandService["executeCommand"](
          d.id,
          { ..._0x1231d1, requestId: _0xa24034 },
          { onlyLocal: true },
        )
          .then((_0x176db2) => {
            _0x176db2 ||
              this._reject(
                _0xa24034,
                Error(
                  "Unable to request Base pivot calculation: " +
                    _0x1231d1.viewId,
                ),
              );
          })
          .catch((_0x3eb87f) => {
            this._reject(
              _0xa24034,
              _0x3eb87f instanceof Error ? _0x3eb87f : Error(String(_0x3eb87f)),
            );
          }));
    });
  }
  handleResponse(_0x4d45bc) {
    let _0x235c9e = this._pending["get"](_0x4d45bc.requestId);
    _0x235c9e &&
      (clearTimeout(_0x235c9e.timeout),
      this._pending["delete"](_0x4d45bc.requestId),
      _0x235c9e.resolve(_0x4d45bc));
  }
  dispose() {
    for (let _0x33c0de of this._pending["values"]())
      (clearTimeout(_0x33c0de.timeout),
        _0x33c0de.reject(Error("Base pivot calculation service disposed.")));
    (this._pending["clear"](), super.dispose());
  }
  _reject(_0xa6e0c9, _0x543835) {
    let _0x4bd312 = this._pending["get"](_0xa6e0c9);
    _0x4bd312 &&
      (clearTimeout(_0x4bd312.timeout),
      this._pending["delete"](_0xa6e0c9),
      _0x4bd312.reject(_0x543835));
  }
};
_ = g([h(0, (0, t.Inject)(t.ICommandService))], _);
const ne = {
  id: "base-dashboard.command.calculate-pivot",
  type: t.CommandType["COMMAND"],
  handler: (_0x6696bd, _0x4d2d0a) => {
    var _0xf86366;
    if (!_0x4d2d0a) throw Error("Pivot calculation parameters are required.");
    let _0x22a021 = _0x6696bd
        .get(t.IUniverInstanceService)
        .getUnit(_0x4d2d0a.unitId, t.UniverInstanceType["UNIVER_BASE"]),
      _0x355572 =
        _0x22a021 == null ||
        (_0xf86366 = _0x22a021.getSnapshot().tables[_0x4d2d0a.tableId]) == null
          ? undefined
          : _0xf86366.views[_0x4d2d0a.viewId];
    if (!re(_0x355572))
      throw Error("Pivot view not found: " + _0x4d2d0a.viewId);
    return _0x6696bd
      .get(_)
      .calculate({
        unitId: _0x4d2d0a.unitId,
        tableId: _0x4d2d0a.tableId,
        viewId: _0x4d2d0a.viewId,
        pivot: _0x355572.config["pivot"],
        filters: [_0x355572.filter ?? null, ...(_0x4d2d0a.filters ?? [])],
      });
  },
};
function re(_0xd6dcb4) {
  return (
    (_0xd6dcb4 == null ? undefined : _0xd6dcb4.type) ===
      t.BaseViewType["Pivot"] &&
    typeof _0xd6dcb4.config == "object" &&
    _0xd6dcb4.config !== null &&
    "pivot" in _0xd6dcb4.config &&
    "chart" in _0xd6dcb4.config
  );
}
const v = "BASE_DASHBOARD_PLUGIN";
var y = class extends t.Disposable {
  constructor(..._0x1b25bc) {
    (super(..._0x1b25bc),
      m(this, "_resources", new Map()),
      m(this, "_change$", new n["BehaviorSubject"](null)),
      m(this, "change$", this._change$["asObservable"]()));
  }
  getResource(_0x41b1e6) {
    let _0x42e215 = this._resources["get"](_0x41b1e6);
    return (
      _0x42e215 ||
        ((_0x42e215 = b()), this._resources["set"](_0x41b1e6, _0x42e215)),
      t.Tools["deepClone"](_0x42e215)
    );
  }
  getDashboard(_0x589eaf, _0x22b93a) {
    var _0x4bffc4;
    let _0x1c0fff =
      (_0x4bffc4 = this._resources["get"](_0x589eaf)) == null
        ? undefined
        : _0x4bffc4.dashboards[_0x22b93a];
    return _0x1c0fff ? t.Tools["deepClone"](_0x1c0fff) : undefined;
  }
  setDashboard(_0x4242dd, _0x2123f3, _0x107ec0) {
    let _0x2bec9c = this._getMutableResource(_0x4242dd),
      _0x36783b = !!_0x2bec9c.dashboards[_0x2123f3.id];
    if (
      ((_0x2bec9c.dashboards[_0x2123f3.id] = t.Tools["deepClone"](_0x2123f3)),
      !_0x36783b)
    ) {
      let _0x25d37f =
        _0x107ec0 === undefined
          ? _0x2bec9c.dashboardOrder["length"]
          : Math.max(
              0,
              Math.min(_0x107ec0, _0x2bec9c.dashboardOrder["length"]),
            );
      _0x2bec9c.dashboardOrder["splice"](_0x25d37f, 0, _0x2123f3.id);
    }
    this._change$["next"]({ unitId: _0x4242dd, dashboardId: _0x2123f3.id });
  }
  removeDashboard(_0x2feb5f, _0x27a7d0) {
    let _0x267460 = this._getMutableResource(_0x2feb5f);
    if (!_0x267460.dashboards[_0x27a7d0]) return false;
    delete _0x267460.dashboards[_0x27a7d0];
    let _0x4340dd = _0x267460.dashboardOrder["indexOf"](_0x27a7d0);
    return (
      _0x4340dd >= 0 && _0x267460.dashboardOrder["splice"](_0x4340dd, 1),
      this._change$["next"]({ unitId: _0x2feb5f, dashboardId: _0x27a7d0 }),
      true
    );
  }
  loadUnit(_0x128005, _0xa329de) {
    (this._resources["set"](_0x128005, t.Tools["deepClone"](_0xa329de)),
      this._change$["next"]({ unitId: _0x128005 }));
  }
  unloadUnit(_0x318af9) {
    (this._resources["delete"](_0x318af9),
      this._change$["next"]({ unitId: _0x318af9 }));
  }
  serializeUnit(_0x41d563) {
    return JSON.stringify(this._getMutableResource(_0x41d563));
  }
  dispose() {
    (this._resources["clear"](), this._change$["complete"](), super.dispose());
  }
  _getMutableResource(_0x27ce5b) {
    let _0x381a87 = this._resources["get"](_0x27ce5b);
    return (
      _0x381a87 ||
        ((_0x381a87 = b()), this._resources["set"](_0x27ce5b, _0x381a87)),
      _0x381a87
    );
  }
};
function b() {
  return { version: 1, dashboardOrder: [], dashboards: {} };
}
const x = {
    id: "base-dashboard.mutation.remove-dashboard",
    type: t.CommandType["MUTATION"],
    handler: (_0x5d7ed2, _0x41030f) =>
      !!(
        _0x41030f &&
        _0x5d7ed2
          .get(y)
          .removeDashboard(_0x41030f.unitId, _0x41030f.dashboardId)
      ),
  },
  S = {
    id: "base-dashboard.mutation.set-dashboard",
    type: t.CommandType["MUTATION"],
    handler: (_0x4eb4da, _0x390d97) =>
      _0x390d97
        ? (_0x4eb4da
            .get(y)
            .setDashboard(
              _0x390d97.unitId,
              _0x390d97.dashboard,
              _0x390d97.index,
            ),
          true)
        : false,
  };
function C(_0x4e783c, _0x879aa6, _0x9ea2e7, _0x85fbcf) {
  return (0, t.sequenceExecute)(_0x9ea2e7, _0x4e783c.get(t.ICommandService))
    .result
    ? (_0x4e783c
        .get(t.IUndoRedoService)
        .pushUndoRedo({
          unitID: _0x879aa6,
          redoMutations: _0x9ea2e7,
          undoMutations: _0x85fbcf,
        }),
      true)
    : false;
}
const w = {
  id: "base-dashboard.command.create-dashboard",
  type: t.CommandType["COMMAND"],
  handler: (_0x294d92, _0x2264a9) => {
    if (
      !_0x2264a9 ||
      !ie(_0x294d92.get(t.IUniverInstanceService), _0x2264a9.unitId) ||
      _0x294d92.get(y).getDashboard(_0x2264a9.unitId, _0x2264a9.dashboard["id"])
    )
      return false;
    let _0x5388a6 = [
        {
          id: S.id,
          params: {
            unitId: _0x2264a9.unitId,
            dashboard: _0x2264a9.dashboard,
            index: _0x2264a9.index,
          },
        },
      ],
      _0x65f227 = [
        {
          id: x.id,
          params: {
            unitId: _0x2264a9.unitId,
            dashboardId: _0x2264a9.dashboard["id"],
          },
        },
      ];
    return C(_0x294d92, _0x2264a9.unitId, _0x5388a6, _0x65f227);
  },
};
function ie(_0x31f060, _0x3b5f4d) {
  return !!_0x31f060.getUnit(_0x3b5f4d, t.UniverInstanceType["UNIVER_BASE"]);
}
const T = {
    id: "base-dashboard.command.delete-dashboard",
    type: t.CommandType["COMMAND"],
    handler: (_0x48013c, _0xacf1d3) => {
      if (!_0xacf1d3) return false;
      let _0x501cb5 = _0x48013c.get(y).getResource(_0xacf1d3.unitId),
        _0x409d88 = _0x501cb5.dashboards[_0xacf1d3.dashboardId],
        _0x5bde50 = _0x501cb5.dashboardOrder["indexOf"](_0xacf1d3.dashboardId);
      if (!_0x409d88 || _0x5bde50 < 0) return false;
      let _0x51c5ff = [
          {
            id: x.id,
            params: {
              unitId: _0xacf1d3.unitId,
              dashboardId: _0xacf1d3.dashboardId,
            },
          },
        ],
        _0x51f203 = [
          {
            id: S.id,
            params: {
              unitId: _0xacf1d3.unitId,
              dashboard: _0x409d88,
              index: _0x5bde50,
            },
          },
        ];
      return C(_0x48013c, _0xacf1d3.unitId, _0x51c5ff, _0x51f203);
    },
  },
  E = {
    PivotChart: "pivot-chart",
    TableFilter: "table-filter",
    Text: "text",
    Image: "image",
    FormulaShape: "formula-shape",
  };
let ae = (function (_0x42a734) {
  return (
    (_0x42a734.CreateWidget = "create-widget"),
    (_0x42a734.RenameDashboard = "rename-dashboard"),
    (_0x42a734.ReorderWidgets = "reorder-widgets"),
    (_0x42a734.UpdateWidget = "update-widget"),
    (_0x42a734.RemoveWidget = "remove-widget"),
    _0x42a734
  );
})({});
const D = {
    id: "base-dashboard.mutation.patch-dashboard",
    type: t.CommandType["MUTATION"],
    handler: (_0x114a32, _0x12f557) => {
      if (!_0x12f557) return false;
      let _0x586dad = _0x114a32.get(y),
        _0x3f1ac0 = _0x586dad.getDashboard(
          _0x12f557.unitId,
          _0x12f557.dashboardId,
        );
      if (!_0x3f1ac0) return false;
      let _0x5e5aaa = { ..._0x3f1ac0.widgets },
        _0xcf4965 = [..._0x3f1ac0.widgetOrder];
      if (
        (Object.entries(_0x12f557.patch["widgets"] ?? {}).forEach(
          ([_0xa048c2, _0x3880c5]) => {
            _0x3880c5 === null
              ? (delete _0x5e5aaa[_0xa048c2],
                (_0xcf4965 = _0xcf4965.filter(
                  (_0x33a296) => _0x33a296 !== _0xa048c2,
                )))
              : ((_0x5e5aaa[_0xa048c2] = _0x3880c5),
                _0xcf4965.includes(_0xa048c2) || _0xcf4965.push(_0xa048c2));
          },
        ),
        _0x12f557.patch["widgetOrder"])
      ) {
        let _0x36f1ca = _0x12f557.patch["widgetOrder"].filter(
            (_0x242654) => _0x5e5aaa[_0x242654],
          ),
          _0x4d008b = new Set(_0x36f1ca);
        _0xcf4965 = [
          ..._0x36f1ca,
          ..._0xcf4965.filter(
            (_0x2c4f50) => _0x5e5aaa[_0x2c4f50] && !_0x4d008b.has(_0x2c4f50),
          ),
        ];
      }
      return (
        _0x586dad.setDashboard(_0x12f557.unitId, {
          ..._0x3f1ac0,
          ...(_0x12f557.patch["name"] === undefined
            ? null
            : { name: _0x12f557.patch["name"] }),
          widgetOrder: _0xcf4965,
          widgets: _0x5e5aaa,
        }),
        true
      );
    },
  },
  O = {
    id: "base-dashboard.command.remove-widget",
    type: t.CommandType["COMMAND"],
    handler: (_0x3f3629, _0x5cf6b0) => {
      if (!_0x5cf6b0) return false;
      let _0x367b4b = _0x3f3629
          .get(y)
          .getDashboard(_0x5cf6b0.unitId, _0x5cf6b0.dashboardId),
        _0x3c9541 =
          _0x367b4b == null ? undefined : _0x367b4b.widgets[_0x5cf6b0.widgetId];
      if (!_0x367b4b || !_0x3c9541) return false;
      let _0x5ad4af = [
          {
            id: D.id,
            params: {
              unitId: _0x5cf6b0.unitId,
              dashboardId: _0x5cf6b0.dashboardId,
              historyAction: "remove-widget",
              historyWidgetType: _0x3c9541.type,
              patch: { widgets: { [_0x5cf6b0.widgetId]: null } },
            },
          },
        ],
        _0x479578 = [
          {
            id: D.id,
            params: {
              unitId: _0x5cf6b0.unitId,
              dashboardId: _0x5cf6b0.dashboardId,
              historyAction: "create-widget",
              historyWidgetType: _0x3c9541.type,
              patch: {
                widgetOrder: _0x367b4b.widgetOrder,
                widgets: {
                  [_0x5cf6b0.widgetId]: _0x367b4b.widgets[_0x5cf6b0.widgetId],
                },
              },
            },
          },
        ];
      return C(_0x3f3629, _0x5cf6b0.unitId, _0x5ad4af, _0x479578);
    },
  },
  k = {
    id: "base-dashboard.command.update-dashboard",
    type: t.CommandType["COMMAND"],
    handler: (_0x4caec2, _0x5a8c7f) => {
      if (!_0x5a8c7f) return false;
      let _0x5e8306 = _0x4caec2
        .get(y)
        .getDashboard(_0x5a8c7f.unitId, _0x5a8c7f.dashboard["id"]);
      if (!_0x5e8306) return false;
      let _0x4bd6c9 = oe(_0x5e8306, _0x5a8c7f.dashboard),
        _0xbb1ca0 = oe(_0x5a8c7f.dashboard, _0x5e8306);
      if (!_0x4bd6c9) return false;
      let _0x4bedf2 = ce(_0x5e8306, _0x5a8c7f.dashboard),
        _0x2111c2 = se(_0x5e8306, _0x5a8c7f.dashboard, _0x4bedf2),
        _0x228259 = [
          {
            id: D.id,
            params: {
              unitId: _0x5a8c7f.unitId,
              dashboardId: _0x5a8c7f.dashboard["id"],
              historyActions: _0x2111c2,
              historyWidgetTypes: _0x4bedf2,
              patch: _0x4bd6c9,
            },
          },
        ],
        _0x91e7af = [
          {
            id: D.id,
            params: {
              unitId: _0x5a8c7f.unitId,
              dashboardId: _0x5a8c7f.dashboard["id"],
              historyActions: _0x2111c2,
              historyWidgetTypes: _0x4bedf2,
              patch: _0xbb1ca0,
            },
          },
        ];
      return C(_0x4caec2, _0x5a8c7f.unitId, _0x228259, _0x91e7af);
    },
  };
function oe(_0x3c3ca6, _0x2e9e25) {
  let _0x3a4d0b = {};
  (_0x3c3ca6.name !== _0x2e9e25.name && (_0x3a4d0b.name = _0x2e9e25.name),
    JSON.stringify(_0x3c3ca6.widgetOrder) !==
      JSON.stringify(_0x2e9e25.widgetOrder) &&
      (_0x3a4d0b.widgetOrder = _0x2e9e25.widgetOrder));
  let _0x141a36 = {};
  return (
    new Set([
      ...Object.keys(_0x3c3ca6.widgets),
      ...Object.keys(_0x2e9e25.widgets),
    ]).forEach((_0x3f7650) => {
      let _0x37b4bc = _0x3c3ca6.widgets[_0x3f7650],
        _0xab03c4 = _0x2e9e25.widgets[_0x3f7650];
      JSON.stringify(_0x37b4bc) !== JSON.stringify(_0xab03c4) &&
        (_0x141a36[_0x3f7650] = _0xab03c4 ?? null);
    }),
    Object.keys(_0x141a36).length > 0 && (_0x3a4d0b.widgets = _0x141a36),
    Object.keys(_0x3a4d0b).length > 0 ? _0x3a4d0b : null
  );
}
function se(_0xbe221, _0x57ae6b, _0x56b1ed) {
  let _0x16f3c9 = [];
  return (
    _0xbe221.name !== _0x57ae6b.name && _0x16f3c9.push("rename-dashboard"),
    JSON.stringify(_0xbe221.widgetOrder) !==
      JSON.stringify(_0x57ae6b.widgetOrder) &&
      _0x16f3c9.push("reorder-widgets"),
    _0x56b1ed.length > 0 && _0x16f3c9.push("update-widget"),
    _0x16f3c9
  );
}
function ce(_0x2064ff, _0x6ba8ff) {
  let _0x494954 = new Set();
  return (
    new Set([
      ...Object.keys(_0x2064ff.widgets),
      ...Object.keys(_0x6ba8ff.widgets),
    ]).forEach((_0x2d183a) => {
      let _0x524dc9 = _0x2064ff.widgets[_0x2d183a],
        _0x2caf2c = _0x6ba8ff.widgets[_0x2d183a];
      JSON.stringify(_0x524dc9) !== JSON.stringify(_0x2caf2c) &&
        (_0x524dc9 && _0x494954.add(_0x524dc9.type),
        _0x2caf2c && _0x494954.add(_0x2caf2c.type));
    }),
    [..._0x494954]
  );
}
const A = {
    id: "base-dashboard.command.update-pivot-view",
    type: t.CommandType["COMMAND"],
    handler: (_0x5458c2, _0x2ca7d6) => {
      var _0x6be84b;
      if (!_0x2ca7d6) return false;
      let _0xbdca12 = _0x5458c2
          .get(t.IUniverInstanceService)
          .getUnit(_0x2ca7d6.unitId, t.UniverInstanceType["UNIVER_BASE"]),
        _0x1b6031 =
          _0xbdca12 == null ||
          (_0x6be84b = _0xbdca12.getSnapshot().tables[_0x2ca7d6.tableId]) ==
            null
            ? undefined
            : _0x6be84b.views[_0x2ca7d6.viewId];
      if (
        !_0xbdca12 ||
        (_0x1b6031 == null ? undefined : _0x1b6031.type) !==
          t.BaseViewType["Pivot"]
      )
        return false;
      let _0x980ce6 = _0xbdca12.getSnapshot(),
        _0x3883ce = new e.BaseJson1OpFactory().updateViewConfig(
          _0x980ce6,
          _0x2ca7d6.tableId,
          _0x2ca7d6.viewId,
          _0x2ca7d6.patch,
        ),
        _0x4fb2a8 = new e["BaseJson1OpApplier"]().invertOp(
          _0x980ce6,
          _0x3883ce,
        ),
        _0xb9fdb5 = { unitId: _0x2ca7d6.unitId, op: _0x3883ce },
        _0x886616 = { unitId: _0x2ca7d6.unitId, op: _0x4fb2a8 };
      return _0x5458c2
        .get(t.ICommandService)
        .syncExecuteCommand(e.ApplyBaseJson1Mutation["id"], _0xb9fdb5)
        ? (_0x5458c2
            .get(t.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x2ca7d6.unitId,
              redoMutations: [
                { id: e.ApplyBaseJson1Mutation["id"], params: _0xb9fdb5 },
              ],
              undoMutations: [
                { id: e.ApplyBaseJson1Mutation["id"], params: _0x886616 },
              ],
            }),
          true)
        : false;
    },
  },
  j = {
    id: "base-dashboard.command.upsert-widget",
    type: t.CommandType["COMMAND"],
    handler: (_0x26601a, _0x3adb8b) => {
      if (!_0x3adb8b) return false;
      let _0x56c18a = _0x26601a
          .get(y)
          .getDashboard(_0x3adb8b.unitId, _0x3adb8b.dashboardId),
        _0x37516a = _0x26601a
          .get(t.IUniverInstanceService)
          .getUnit(_0x3adb8b.unitId, t.UniverInstanceType["UNIVER_BASE"]);
      if (!_0x56c18a || !_0x37516a || !le(_0x37516a, _0x3adb8b.widget))
        return false;
      let _0x1747cf = _0x56c18a.widgetOrder["indexOf"](_0x3adb8b.widget["id"]),
        _0x3ed09e = _0x56c18a.widgets[_0x3adb8b.widget["id"]],
        _0x2e3fbe = _0x56c18a.widgetOrder["filter"](
          (_0x2630b3) => _0x2630b3 !== _0x3adb8b.widget["id"],
        ),
        _0x4e55b8 = _0x1747cf >= 0 ? _0x1747cf : _0x2e3fbe.length;
      (_0x3adb8b.index !== undefined &&
        (_0x4e55b8 = Math.max(0, Math.min(_0x3adb8b.index, _0x2e3fbe.length))),
        _0x2e3fbe.splice(_0x4e55b8, 0, _0x3adb8b.widget["id"]));
      let _0x2cc524 = _0x3adb8b.index !== undefined && _0x4e55b8 !== _0x1747cf,
        _0x2acc65 = [
          {
            id: D.id,
            params: {
              unitId: _0x3adb8b.unitId,
              dashboardId: _0x3adb8b.dashboardId,
              historyAction: _0x1747cf >= 0 ? "update-widget" : "create-widget",
              historyWidgetType: _0x3adb8b.widget["type"],
              patch: {
                widgets: { [_0x3adb8b.widget["id"]]: _0x3adb8b.widget },
                ...(_0x2cc524 ? { widgetOrder: _0x2e3fbe } : null),
              },
            },
          },
        ],
        _0x2128a4 = [
          {
            id: D.id,
            params: {
              unitId: _0x3adb8b.unitId,
              dashboardId: _0x3adb8b.dashboardId,
              historyAction: _0x1747cf >= 0 ? "update-widget" : "remove-widget",
              historyWidgetType:
                (_0x3ed09e == null ? undefined : _0x3ed09e.type) ??
                _0x3adb8b.widget["type"],
              patch: {
                widgets: {
                  [_0x3adb8b.widget["id"]]:
                    _0x56c18a.widgets[_0x3adb8b.widget["id"]] ?? null,
                },
                ...(_0x2cc524 ? { widgetOrder: _0x56c18a.widgetOrder } : null),
              },
            },
          },
        ];
      return C(_0x26601a, _0x3adb8b.unitId, _0x2acc65, _0x2128a4);
    },
  };
function le(_0x3d86ab, _0x168a1c) {
  if (_0x168a1c.type === E.Text || _0x168a1c.type === E.Image) return true;
  let _0x3a43b9 = _0x3d86ab.getSnapshot().tables[_0x168a1c.tableId];
  if (!_0x3a43b9) return false;
  if (_0x168a1c.type === E.PivotChart) {
    var _0x58feea;
    return (
      ((_0x58feea = _0x3a43b9.views[_0x168a1c.pivotViewId]) == null
        ? undefined
        : _0x58feea.type) === t.BaseViewType["Pivot"]
    );
  }
  return true;
}
var ue = class extends i.DataFieldManager {
  constructor(_0x4a173c, _0x3c20f7, _0xb4decf) {
    (super(),
      (this._fieldIds = _0x4a173c),
      (this._headers = _0x3c20f7),
      (this._data = _0xb4decf),
      m(this, "_fieldIndex", 0));
  }
  createDataFieldId() {
    let _0x1c6016 = this._fieldIds[this._fieldIndex];
    return ((this._fieldIndex += 1), _0x1c6016 ?? super.createDataFieldId());
  }
  getRangeData() {
    return { header: this._headers, data: this._data };
  }
};
function de(_0x53a9b1) {
  let { collection: _0x7c1285 } = P(_0x53a9b1),
    _0x1ade7e = new i["PivotTable"](_0x7c1285),
    _0x1b8dc1 = _0x53a9b1.fieldOrder["find"]((_0x27f88d) =>
      _e(_0x53a9b1, _0x27f88d),
    ),
    _0x5f4102 = _0x53a9b1.fieldOrder["find"]((_0x81d558) =>
      ve(_0x53a9b1, _0x81d558),
    );
  return (
    _0x1b8dc1 &&
      _0x1ade7e.addFieldWithSourceId(
        _0x1b8dc1,
        i.PivotTableFiledAreaEnum["Row"],
        undefined,
        "row-" + _0x1b8dc1,
      ),
    _0x5f4102 &&
      _0x1ade7e.addFieldWithSourceId(
        _0x5f4102,
        i.PivotTableFiledAreaEnum["Value"],
        undefined,
        "value-" + _0x5f4102,
      ),
    _0x1ade7e.toJSON()
  );
}
function M(_0x3a2e8b) {
  return {
    pivot: de(_0x3a2e8b),
    chart: { type: r.ChartTypeBits["Column"], orient: "column" },
    displayMode: "chart-and-table",
  };
}
function N(_0x5d1480) {
  let _0x1e73a3 = pe(_0x5d1480.table, _0x5d1480.filters ?? []),
    { collection: _0x2a9bcd } = P(_0x5d1480.table, _0x1e73a3),
    _0x59c928 = new i["PivotTable"](_0x2a9bcd);
  return (_0x59c928.fromJSON(_0x5d1480.pivot), _0x59c928.query().toJSON());
}
function fe(_0x4e220a, _0x565f48) {
  let { collection: _0x5cd467 } = P(_0x4e220a),
    _0x304ee3 = new i.PivotTable(_0x5cd467);
  return (_0x565f48 && _0x304ee3.fromJSON(_0x565f48), _0x304ee3);
}
function P(_0x1db5c7, _0x3af700 = F(_0x1db5c7)) {
  let _0x1ed493 = _0x1db5c7.fieldOrder["flatMap"]((_0x87a624) => {
      let _0x2163cd = _0x1db5c7.fields[_0x87a624];
      return _0x2163cd ? [_0x2163cd] : [];
    }),
    _0x66ba8b = new ue(
      _0x1ed493.map((_0x446e25) => _0x446e25.id),
      _0x1ed493.map((_0x509520) => _0x509520.name),
      _0x3af700.map((_0x52be02) =>
        _0x1ed493.map((_0x8b7678) =>
          he(_0x52be02.values[_0x8b7678.id], _0x8b7678),
        ),
      ),
    );
  return {
    manager: _0x66ba8b,
    collection: _0x66ba8b.createCollection(_0x1db5c7.id, {
      tableId: _0x1db5c7.id,
    }),
  };
}
function F(_0xa51928) {
  return (
    _0xa51928.recordOrder ??
    Object.values(_0xa51928.records)
      .sort((_0x2c5189, _0x572347) =>
        _0x2c5189.orderKey["localeCompare"](_0x572347.orderKey),
      )
      .map((_0xe2cfba) => _0xe2cfba.id)
  )
    .map((_0x5330d2) => _0xa51928.records[_0x5330d2])
    .filter((_0x129f2a) => _0x129f2a !== undefined);
}
function pe(_0x1ca7b5, _0x277b04) {
  let _0x3fa258 = _0x277b04.filter(
    (_0xe3fb07) => !!(_0xe3fb07 != null && _0xe3fb07.conditions["length"]),
  );
  return _0x3fa258.length === 0
    ? F(_0x1ca7b5)
    : F(_0x1ca7b5).filter((_0x46bd6d) =>
        _0x3fa258.every((_0x176a84) => me(_0x1ca7b5, _0x46bd6d, _0x176a84)),
      );
}
function me(_0x3d3f11, _0x235be0, _0x31df86) {
  let _0x35d095 = _0x31df86.conditions["map"]((_0x364abf) => {
    let _0x295921 = _0x3d3f11.fields[_0x364abf.fieldId];
    return _0x295921
      ? (0, e.matchesBaseCondition)(
          _0x235be0.values[_0x364abf.fieldId],
          _0x364abf.operator,
          _0x364abf.operand,
          _0x295921,
        )
      : false;
  });
  return _0x31df86.conjunction === t.BaseFilterConjunction["OR"]
    ? _0x35d095.some(Boolean)
    : _0x35d095.every(Boolean);
}
function he(_0x537208, _0x2e0025) {
  if (ge(_0x2e0025)) {
    let _0x2955b0 = (0, e.normalizeBaseDateSerial)(_0x537208);
    if (_0x2955b0 === null) return null;
    let _0x3f3cf6 = (0, e.resolveBaseDateFieldConfig)(_0x2e0025.config),
      _0x1930f9 = _0x3f3cf6.hourCycle === "h12" ? " h:mm AM/PM" : " hh:mm";
    return {
      v: _0x2955b0,
      f: "" + _0x3f3cf6.pattern + (_0x3f3cf6.includeTime ? _0x1930f9 : ""),
    };
  }
  return _0x537208 == null ||
    typeof _0x537208 == "string" ||
    typeof _0x537208 == "number" ||
    typeof _0x537208 == "boolean"
    ? _0x537208
    : Array.isArray(_0x537208)
      ? _0x537208.map(I).join(",\x20")
      : I(_0x537208);
}
function ge(_0xeb1dad) {
  return (
    _0xeb1dad.type === t.BaseFieldType["Date"] ||
    _0xeb1dad.type === t.BaseFieldType["CreatedAt"] ||
    _0xeb1dad.type === t.BaseFieldType["UpdatedAt"]
  );
}
function I(_0x3bc0c1) {
  if (_0x3bc0c1 == null) return "";
  if (
    typeof _0x3bc0c1 == "string" ||
    typeof _0x3bc0c1 == "number" ||
    typeof _0x3bc0c1 == "boolean"
  )
    return String(_0x3bc0c1);
  if (Array.isArray(_0x3bc0c1)) return _0x3bc0c1.map(I).join(",\x20");
  if (typeof _0x3bc0c1 == "object") {
    let _0x30657a = Reflect.get(_0x3bc0c1, "label");
    if (typeof _0x30657a == "string") return _0x30657a;
    let _0x2ff857 = Reflect.get(_0x3bc0c1, "name");
    if (typeof _0x2ff857 == "string") return _0x2ff857;
  }
  return String(_0x3bc0c1);
}
function _e(_0x4b8fa1, _0x132c42) {
  let _0x30b1f6 = _0x4b8fa1.fields[_0x132c42];
  return !!(
    _0x30b1f6 &&
    _0x30b1f6.system !== true &&
    _0x30b1f6.type !== t.BaseFieldType["RecordId"] &&
    _0x30b1f6.type !== t.BaseFieldType["Attachment"] &&
    _0x30b1f6.type !== t.BaseFieldType["Formula"]
  );
}
function ve(_0x43f59b, _0x33df8b) {
  var _0x31ab3c;
  let _0x2979b8 =
    (_0x31ab3c = _0x43f59b.fields[_0x33df8b]) == null
      ? undefined
      : _0x31ab3c.type;
  return (
    _0x2979b8 === t.BaseFieldType["Number"] ||
    _0x2979b8 === t.BaseFieldType["Currency"] ||
    _0x2979b8 === t.BaseFieldType["Progress"] ||
    _0x2979b8 === t.BaseFieldType["Rating"]
  );
}
function L(_0x5d6682) {
  return _0x5d6682 !== "row";
}
function R(_0x55589c, _0x4fd98c = {}) {
  let _0x262050 = new i["PivotView"]();
  _0x262050.formJSON(_0x55589c);
  let _0x2a15f4 = z(
      _0x262050.rowView["info"],
      _0x262050.dataView["getRowCount"](),
    ),
    _0x558f8e = z(
      _0x262050.colView["info"],
      _0x262050.dataView["getColCount"](),
    ),
    _0x496be6 = _0x2a15f4.reduce((_0x451117, _0x3dfb1c) => {
      var _0x58e504;
      return Math.max(
        _0x451117,
        ((_0x58e504 = _0x262050.rowView["info"][_0x3dfb1c]) == null
          ? undefined
          : _0x58e504.paths["length"]) ?? 0,
      );
    }, 0),
    _0x10497d = Math.max(_0x496be6, 1),
    _0x1b5640 = Array.from({ length: _0x10497d }, (_0x19ade5, _0x38c13e) => {
      var _0x4b9742;
      return (
        ((_0x4b9742 = _0x4fd98c.rowDimensionNames) == null
          ? undefined
          : _0x4b9742[_0x38c13e]) ?? "Category " + (_0x38c13e + 1)
      );
    }),
    _0xa8dab3 = [],
    _0x382f52 = [];
  for (let _0x337541 of _0x558f8e) {
    let _0x3d1d9e = _0x262050.colView["info"][_0x337541],
      _0x534ce9 =
        (_0x3d1d9e == null
          ? undefined
          : _0x3d1d9e.paths["filter"](Boolean).join(" / ")) ||
        "Value " + (_0x337541 + 1);
    _0x1b5640.push(_0x534ce9);
  }
  for (let _0x1fcf15 of _0x2a15f4) {
    var _0x18712e;
    let _0x5656ed =
        ((_0x18712e = _0x262050.rowView["info"][_0x1fcf15]) == null
          ? undefined
          : _0x18712e.paths) ?? [],
      _0x479f0d = [],
      _0x7fb0d = [];
    for (let _0x48ca28 = 0; _0x48ca28 < _0x10497d; _0x48ca28++) {
      let _0x5923de =
        _0x5656ed[_0x48ca28] ??
        (_0x48ca28 === 0 ? (_0x4fd98c.emptyCategoryLabel ?? "") : "");
      (_0x479f0d.push(_0x5923de), _0x7fb0d.push(_0x5923de));
    }
    for (let _0x2a7b08 of _0x558f8e) {
      let _0x4294a6 = ye(_0x262050.dataView["getValue"](_0x1fcf15, _0x2a7b08));
      (_0x479f0d.push(_0x4294a6),
        _0x7fb0d.push(_0x4294a6 == null ? "" : String(_0x4294a6)));
    }
    (_0xa8dab3.push(_0x479f0d), _0x382f52.push(_0x7fb0d));
  }
  return { dimensions: _0x1b5640, source: _0xa8dab3, sourceLabels: _0x382f52 };
}
function z(_0xc1ecb7, _0x234f4f) {
  let _0x1089ca = [];
  for (let _0x3659ad = 0; _0x3659ad < _0x234f4f; _0x3659ad++) {
    let _0x2681e4 = _0xc1ecb7[_0x3659ad];
    !(_0x2681e4 != null && _0x2681e4.isBottomTotal) &&
      !(_0x2681e4 != null && _0x2681e4.isTopTotal) &&
      !(_0x2681e4 != null && _0x2681e4.isSubtotal) &&
      _0x1089ca.push(_0x3659ad);
  }
  return _0x1089ca.length > 0
    ? _0x1089ca
    : Array.from({ length: _0x234f4f }, (_0x41129b, _0x2c8020) => _0x2c8020);
}
function ye(_0x3ff27b) {
  return (0, i.isPrefixValue)(_0x3ff27b)
    ? _0x3ff27b.value
    : (0, i.isErrorValue)(_0x3ff27b)
      ? null
      : (_0x3ff27b ?? null);
}
var B = "@univerjs-pro/bases-dashboard",
  be = "1.0.0-insiders.20260907-70fc579";
const xe = {
  id: "base-dashboard.mutation.update-formula-last-value",
  type: t.CommandType["MUTATION"],
  handler: (_0x3a3bb0, _0x3a3501) => {
    var _0x163fd7;
    if (!_0x3a3501) return false;
    let _0x2b0f6f = _0x3a3bb0.get(y),
      _0x4aa3d7 = _0x2b0f6f.getDashboard(
        _0x3a3501.unitId,
        _0x3a3501.dashboardId,
      ),
      _0x3447aa =
        _0x4aa3d7 == null ? undefined : _0x4aa3d7.widgets[_0x3a3501.widgetId];
    if (
      !_0x4aa3d7 ||
      (_0x3447aa == null ? undefined : _0x3447aa.type) !== E.FormulaShape ||
      !(0, a.canApplyShapeFormulaLastValue)(
        _0x3a3bb0,
        {
          hostType: t.UniverInstanceType["UNIVER_BASE"],
          unitId: _0x3a3501.unitId,
          subUnitId: _0x3a3501.dashboardId,
          shapeId: _0x3a3501.widgetId,
        },
        (_0x163fd7 = _0x3447aa.shapeData["formulaBinding"]) == null
          ? undefined
          : _0x163fd7.formula,
        _0x3a3501.guard,
      )
    )
      return false;
    let _0x30048d = _0x3447aa.shapeData["formulaBinding"];
    return _0x30048d
      ? (_0x2b0f6f.setDashboard(_0x3a3501.unitId, {
          ..._0x4aa3d7,
          widgets: {
            ..._0x4aa3d7.widgets,
            [_0x3447aa.id]: {
              ..._0x3447aa,
              shapeData: {
                ..._0x3447aa.shapeData,
                formulaBinding: {
                  ..._0x30048d,
                  lastValue: t.Tools["deepClone"](_0x3a3501.lastValue),
                },
              },
            },
          },
        }),
        true)
      : false;
  },
};
let V = class extends t.Disposable {
  constructor(_0x3b2ea3, _0xff3f6e, _0x5895fb, _0xac5344) {
    (super(),
      (this._commandService = _0x3b2ea3),
      (this._instanceService = _0x5895fb),
      (this._resourceService = _0xac5344),
      m(this, "hostType", t.UniverInstanceType["UNIVER_BASE"]),
      m(this, "shapeChanged$", undefined),
      (this.shapeChanged$ = this._resourceService["change$"].pipe(
        (0, n.filter)((_0x5b47e1) => _0x5b47e1 !== null),
        (0, n.map)((_0x66e060) => ({ unitId: _0x66e060.unitId })),
      )),
      this.disposeWithMe(_0xff3f6e.register(this)));
  }
  getShape(_0x13c380) {
    let _0x383273 = this._getWidget(_0x13c380);
    return _0x383273 ? this._toSnapshot(_0x13c380, _0x383273) : null;
  }
  listShapes(_0xa19978) {
    let _0x4ad4e3 = this._resourceService["getDashboard"](
      _0xa19978.unitId,
      _0xa19978.subUnitId,
    );
    return (
      (_0x4ad4e3 == null
        ? undefined
        : _0x4ad4e3.widgetOrder["map"](
            (_0x444e26) => _0x4ad4e3.widgets[_0x444e26],
          )
            .filter(
              (_0x549ce8) =>
                (_0x549ce8 == null ? undefined : _0x549ce8.type) ===
                E.FormulaShape,
            )
            .map((_0x5612bf) =>
              this._toSnapshot(
                { ..._0xa19978, shapeId: _0x5612bf.id },
                _0x5612bf,
              ),
            )) ?? []
    );
  }
  listShapesInUnit(_0x36a8be) {
    return this._resourceService["getResource"](_0x36a8be).dashboardOrder[
      "flatMap"
    ]((_0x3c31fc) =>
      this.listShapes({
        hostType: this.hostType,
        unitId: _0x36a8be,
        subUnitId: _0x3c31fc,
      }),
    );
  }
  createShape(_0x67246c, _0xa0a8aa) {
    let _0x2857a7 = this._instanceService["getUnit"](
        _0x67246c.unitId,
        t.UniverInstanceType["UNIVER_BASE"],
      ),
      _0x119c2e =
        _0x2857a7 == null ? undefined : _0x2857a7.getSnapshot().tableOrder[0];
    if (
      !_0x119c2e ||
      !this._resourceService["getDashboard"](
        _0x67246c.unitId,
        _0x67246c.subUnitId,
      )
    )
      return null;
    let _0x2c0590 = Se(_0xa0a8aa.transform),
      _0x9cb266 = {
        id: "formula-shape-" + (0, t.generateRandomId)(8),
        type: E.FormulaShape,
        tableId: _0x119c2e,
        layout: Ce(_0x2c0590),
        shapeType: _0xa0a8aa.shapeType,
        shapeData: t.Tools["deepClone"](
          _0xa0a8aa.shapeData ?? (0, s.createFormulaShapeData)(),
        ),
        ...(_0xa0a8aa.name ? { title: _0xa0a8aa.name } : null),
      };
    return this._commandService["syncExecuteCommand"](j.id, {
      unitId: _0x67246c.unitId,
      dashboardId: _0x67246c.subUnitId,
      widget: _0x9cb266,
    })
      ? this._toSnapshot({ ..._0x67246c, shapeId: _0x9cb266.id }, _0x9cb266)
      : null;
  }
  updateShape(_0x5bd38d, _0x3616ac) {
    let _0x29cec8 = this._getWidget(_0x5bd38d);
    if (!_0x29cec8) return false;
    let _0xe39100 = {
        ...this._toSnapshot(_0x5bd38d, _0x29cec8).transform,
        ..._0x3616ac.transform,
      },
      _0x53b05a = {
        ..._0x29cec8,
        ...(_0x3616ac.name === undefined ? null : { title: _0x3616ac.name }),
        layout: Ce(_0xe39100),
        shapeType: _0x3616ac.shapeType ?? _0x29cec8.shapeType,
        shapeData: t.Tools["deepClone"](
          _0x3616ac.shapeData ?? _0x29cec8.shapeData,
        ),
      };
    return this._commandService["syncExecuteCommand"](j.id, {
      unitId: _0x5bd38d.unitId,
      dashboardId: _0x5bd38d.subUnitId,
      widget: _0x53b05a,
    });
  }
  createFormulaLastValueMutation(_0x13488c, _0x110bda, _0x23807d) {
    return this._getWidget(_0x13488c)
      ? {
          id: xe.id,
          params: {
            unitId: _0x13488c.unitId,
            dashboardId: _0x13488c.subUnitId,
            widgetId: _0x13488c.shapeId,
            guard: _0x110bda,
            lastValue: _0x23807d,
          },
        }
      : null;
  }
  removeShape(_0x1c5bbb) {
    return this._commandService["syncExecuteCommand"](O.id, {
      unitId: _0x1c5bbb.unitId,
      dashboardId: _0x1c5bbb.subUnitId,
      widgetId: _0x1c5bbb.shapeId,
    });
  }
  bringToFront(_0x496fa8) {
    let _0x57508f = this._resourceService["getDashboard"](
      _0x496fa8.unitId,
      _0x496fa8.subUnitId,
    );
    return _0x57508f
      ? this.setZOrder(_0x496fa8, _0x57508f.widgetOrder["length"] - 1)
      : false;
  }
  bringForward(_0x1c0a42) {
    return this._move(_0x1c0a42, 1);
  }
  sendBackward(_0x248c10) {
    return this._move(_0x248c10, -1);
  }
  sendToBack(_0x5a289e) {
    return this.setZOrder(_0x5a289e, 0);
  }
  setZOrder(_0x2e7a60, _0x4cd60c) {
    let _0x55feea = this._resourceService["getDashboard"](
      _0x2e7a60.unitId,
      _0x2e7a60.subUnitId,
    );
    if (!(_0x55feea != null && _0x55feea.widgets[_0x2e7a60.shapeId]))
      return false;
    let _0x293bf7 = _0x55feea.widgetOrder["filter"](
      (_0x4bfd48) => _0x4bfd48 !== _0x2e7a60.shapeId,
    );
    return (
      _0x293bf7.splice(
        Math.max(0, Math.min(_0x4cd60c, _0x293bf7.length)),
        0,
        _0x2e7a60.shapeId,
      ),
      this._commandService["syncExecuteCommand"](k.id, {
        unitId: _0x2e7a60.unitId,
        dashboard: { ..._0x55feea, widgetOrder: _0x293bf7 },
      })
    );
  }
  _move(_0x47453d, _0xbab7a5) {
    let _0x99a821 = this._resourceService["getDashboard"](
        _0x47453d.unitId,
        _0x47453d.subUnitId,
      ),
      _0x1d9947 =
        (_0x99a821 == null
          ? undefined
          : _0x99a821.widgetOrder["indexOf"](_0x47453d.shapeId)) ?? -1;
    return _0x1d9947 < 0
      ? false
      : this.setZOrder(_0x47453d, _0x1d9947 + _0xbab7a5);
  }
  _getWidget(_0x144a5d) {
    var _0xaf9276;
    let _0x56cc60 =
      (_0xaf9276 = this._resourceService["getDashboard"](
        _0x144a5d.unitId,
        _0x144a5d.subUnitId,
      )) == null
        ? undefined
        : _0xaf9276.widgets[_0x144a5d.shapeId];
    return (_0x56cc60 == null ? undefined : _0x56cc60.type) === E.FormulaShape
      ? _0x56cc60
      : null;
  }
  _toSnapshot(_0xf7952f, _0x20d1a1) {
    return {
      ..._0xf7952f,
      shapeType: _0x20d1a1.shapeType,
      shapeData: t.Tools["deepClone"](_0x20d1a1.shapeData),
      name: _0x20d1a1.title,
      transform: we(_0x20d1a1),
      visible: true,
      selectable: true,
    };
  }
};
V = g(
  [
    h(0, t.ICommandService),
    h(1, a.IShapeHostAdapterRegistry),
    h(2, t.IUniverInstanceService),
    h(3, (0, t.Inject)(y)),
  ],
  V,
);
function Se(_0x36280c) {
  return {
    left: (_0x36280c == null ? undefined : _0x36280c.left) ?? 0,
    top: (_0x36280c == null ? undefined : _0x36280c.top) ?? 0,
    width: (_0x36280c == null ? undefined : _0x36280c.width) ?? 4,
    height: (_0x36280c == null ? undefined : _0x36280c.height) ?? 3,
    rotation: (_0x36280c == null ? undefined : _0x36280c.rotation) ?? 0,
    flipX: (_0x36280c == null ? undefined : _0x36280c.flipX) ?? false,
    flipY: (_0x36280c == null ? undefined : _0x36280c.flipY) ?? false,
  };
}
function Ce(_0x105f46) {
  let _0x3aa80e = Math.max(0, Math.min(11, Math.round(_0x105f46.left)));
  return {
    column: _0x3aa80e,
    row: Math.max(0, Math.round(_0x105f46.top)),
    columnSpan: Math.max(
      1,
      Math.min(12 - _0x3aa80e, Math.round(_0x105f46.width)),
    ),
    rowSpan: Math.max(1, Math.round(_0x105f46.height)),
  };
}
function we(_0x1d8077) {
  return {
    left: _0x1d8077.layout["column"],
    top: _0x1d8077.layout["row"],
    width: _0x1d8077.layout["columnSpan"],
    height: _0x1d8077.layout["rowSpan"],
    rotation: 0,
    flipX: false,
    flipY: false,
  };
}
const Te = {},
  Ee = new Set([w.id, T.id, O.id, k.id, A.id, j.id, D.id, x.id, S.id]);
let H = class extends t.Disposable {
  constructor(_0x2c4d55, _0x838120, _0x5008f1) {
    (super(),
      (this._permissionService = _0x838120),
      (this._instanceService = _0x5008f1),
      this.disposeWithMe(
        _0x2c4d55.beforeCommandExecuted((_0x2c47ee, _0x3c4c35) =>
          this._check(_0x2c47ee, _0x3c4c35),
        ),
      ));
  }
  _check(_0x2c9aa8, _0x1dd424) {
    if (
      (_0x1dd424 != null && _0x1dd424.fromCollab) ||
      (_0x1dd424 != null && _0x1dd424.fromChangeset) ||
      !Ee.has(_0x2c9aa8.id)
    )
      return;
    let _0x347b16 = ke(_0x2c9aa8.params) ? _0x2c9aa8.params : undefined;
    if (!_0x347b16) return;
    let _0x966195 =
      typeof (_0x347b16 == null ? undefined : _0x347b16.unitId) == "string"
        ? _0x347b16.unitId
        : undefined;
    if (
      !_0x966195 ||
      this._instanceService["getUnitType"](_0x966195) !==
        t.UniverInstanceType["UNIVER_BASE"]
    )
      return;
    let _0x1c98af = _0x2c9aa8.id === A.id ? De(_0x347b16) : Oe(_0x347b16);
    if (
      !(0, e.canEditBaseTargets)(this._permissionService, _0x966195, _0x1c98af)
    )
      throw new t["CustomCommandExecutionError"](
        "Base\x20dashboard\x20edit\x20permission\x20denied.",
      );
  }
};
H = g(
  [
    h(0, t.ICommandService),
    h(1, t.IPermissionService),
    h(2, t.IUniverInstanceService),
  ],
  H,
);
function De(_0x4fcb4e) {
  let _0x37b282 =
      typeof _0x4fcb4e.tableId == "string" ? _0x4fcb4e.tableId : undefined,
    _0x2fab82 =
      typeof _0x4fcb4e.viewId == "string" ? _0x4fcb4e.viewId : undefined;
  return _0x37b282 && _0x2fab82
    ? [
        (0, e.getBaseTablePermissionObjectId)(_0x37b282),
        (0, e.getBaseViewPermissionObjectId)(_0x37b282, _0x2fab82),
      ]
    : [];
}
function Oe(_0x5e0444) {
  let _0xb55b56 =
    typeof _0x5e0444.dashboardId == "string"
      ? _0x5e0444.dashboardId
      : ke(_0x5e0444.dashboard) && typeof _0x5e0444.dashboard["id"] == "string"
        ? _0x5e0444.dashboard["id"]
        : undefined;
  return _0xb55b56
    ? [(0, e.getBaseDashboardPermissionObjectId)(_0xb55b56)]
    : [];
}
function ke(_0x280475) {
  return (
    typeof _0x280475 == "object" && !!_0x280475 && !Array.isArray(_0x280475)
  );
}
let U = class extends t.Disposable {
  constructor(_0x47b8ce, _0x1a0979) {
    (super(),
      (this._resourceManagerService = _0x47b8ce),
      (this._resourceService = _0x1a0979),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"]({
          pluginName: v,
          businesses: [t.UniverInstanceType["UNIVER_BASE"]],
          toJson: (_0x239f83) =>
            this._resourceService["serializeUnit"](_0x239f83),
          parseJson: Ae,
          onLoad: (_0x279305, _0x5980f8) =>
            this._resourceService["loadUnit"](_0x279305, _0x5980f8),
          onUnLoad: (_0x14d510) =>
            this._resourceService["unloadUnit"](_0x14d510),
        }),
      ));
  }
};
U = g([h(0, t.IResourceManagerService), h(1, (0, t.Inject)(y))], U);
function Ae(_0x196c5b) {
  let _0x26b631;
  try {
    _0x26b631 = JSON.parse(_0x196c5b);
  } catch {
    return b();
  }
  if (
    !W(_0x26b631) ||
    !Array.isArray(_0x26b631.dashboardOrder) ||
    !W(_0x26b631.dashboards)
  )
    return b();
  let _0x5297f5 = b(),
    _0x382a21 = new Set();
  for (let _0x327f3f of _0x26b631.dashboardOrder) {
    if (typeof _0x327f3f != "string" || _0x382a21.has(_0x327f3f)) continue;
    let _0x3fdf99 = _0x26b631.dashboards[_0x327f3f];
    if (
      !W(_0x3fdf99) ||
      _0x3fdf99.id !== _0x327f3f ||
      typeof _0x3fdf99.name != "string" ||
      !Array.isArray(_0x3fdf99.widgetOrder) ||
      !W(_0x3fdf99.widgets)
    )
      continue;
    let _0x4a626e = Object.fromEntries(
        Object.entries(_0x3fdf99.widgets).filter(
          (_0x2ac913) => je(_0x2ac913[1]) && _0x2ac913[0] === _0x2ac913[1].id,
        ),
      ),
      _0x3fd7f9 = new Set(Object.keys(_0x4a626e)),
      _0x5ac118 = new Set(),
      _0x3f7700 = _0x3fdf99.widgetOrder["filter"]((_0x53ea72) =>
        typeof _0x53ea72 != "string" ||
        !_0x3fd7f9.has(_0x53ea72) ||
        _0x5ac118.has(_0x53ea72)
          ? false
          : (_0x5ac118.add(_0x53ea72), true),
      );
    for (let _0x3a8c5f of _0x3fd7f9)
      _0x5ac118.has(_0x3a8c5f) || _0x3f7700.push(_0x3a8c5f);
    (_0x382a21.add(_0x327f3f),
      _0x5297f5.dashboardOrder["push"](_0x327f3f),
      (_0x5297f5.dashboards[_0x327f3f] = {
        id: _0x327f3f,
        name: _0x3fdf99.name,
        widgetOrder: _0x3f7700,
        widgets: _0x4a626e,
      }));
  }
  return _0x5297f5;
}
function W(_0x26a920) {
  return (
    typeof _0x26a920 == "object" && !!_0x26a920 && !Array.isArray(_0x26a920)
  );
}
function je(_0x4fb127) {
  if (!W(_0x4fb127) || typeof _0x4fb127.id != "string" || !Ne(_0x4fb127.layout))
    return false;
  switch (_0x4fb127.type) {
    case E.PivotChart:
      return (
        typeof _0x4fb127.tableId == "string" &&
        typeof _0x4fb127.pivotViewId == "string"
      );
    case E.TableFilter:
      return (
        typeof _0x4fb127.tableId == "string" &&
        (_0x4fb127.filter === null || Me(_0x4fb127.filter))
      );
    case E.Text:
      return W(_0x4fb127.document);
    case E.Image:
      return (
        typeof _0x4fb127.source == "string" &&
        Object.values(t.ImageSourceType).some(
          (_0xe05747) => _0xe05747 === _0x4fb127.sourceType,
        )
      );
    case E.FormulaShape:
      return (
        typeof _0x4fb127.tableId == "string" &&
        typeof _0x4fb127.shapeType == "string" &&
        W(_0x4fb127.shapeData) &&
        W(_0x4fb127.shapeData["formulaBinding"]) &&
        typeof _0x4fb127.shapeData["formulaBinding"].formula == "string"
      );
    default:
      return false;
  }
}
function Me(_0x2d6471) {
  if (
    !W(_0x2d6471) ||
    (_0x2d6471.conjunction !== t.BaseFilterConjunction["AND"] &&
      _0x2d6471.conjunction !== t.BaseFilterConjunction["OR"]) ||
    !Array.isArray(_0x2d6471.conditions)
  )
    return false;
  let _0x4f0819 = Object.values(t.BaseFilterOperator);
  return _0x2d6471.conditions["every"](
    (_0x34210c) =>
      W(_0x34210c) &&
      typeof _0x34210c.fieldId == "string" &&
      _0x4f0819.some((_0x7e20b9) => _0x7e20b9 === _0x34210c.operator),
  );
}
function Ne(_0x313289) {
  return (
    W(_0x313289) &&
    typeof _0x313289.column == "number" &&
    typeof _0x313289.row == "number" &&
    typeof _0x313289.columnSpan == "number" &&
    typeof _0x313289.rowSpan == "number"
  );
}
let G = class extends t.Disposable {
  constructor(_0x347cbf, _0x53569b) {
    (super(),
      (this._commandService = _0x347cbf),
      (this._instanceService = _0x53569b),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x251e5b) => {
          if (!Pe(_0x251e5b, d)) return;
          let _0x56b5b1 = _0x251e5b.params,
            _0x117853 = this._instanceService["getUnit"](
              _0x56b5b1.unitId,
              t.UniverInstanceType["UNIVER_BASE"],
            ),
            _0x3c39bd =
              _0x117853 == null
                ? undefined
                : _0x117853.getSnapshot().tables[_0x56b5b1.tableId];
          if (!_0x3c39bd) return;
          let _0x576c24 = N({
            table: _0x3c39bd,
            pivot: _0x56b5b1.pivot,
            filters: _0x56b5b1.filters,
          });
          return this._commandService["executeCommand"](
            f.id,
            {
              requestId: _0x56b5b1.requestId,
              unitId: _0x56b5b1.unitId,
              tableId: _0x56b5b1.tableId,
              viewId: _0x56b5b1.viewId,
              view: _0x576c24,
            },
            { onlyLocal: true },
          ).then(
            () => undefined,
            () => undefined,
          );
        }),
      ));
  }
};
G = g(
  [
    h(0, (0, t.Inject)(t.ICommandService)),
    h(1, (0, t.Inject)(t.IUniverInstanceService)),
  ],
  G,
);
function Pe(_0x190720, _0x14d7e0) {
  return _0x190720.id === _0x14d7e0.id && _0x190720.params !== undefined;
}
let K = class extends t.Disposable {
  constructor(_0x1cfa23, _0x58514b) {
    (super(),
      this.disposeWithMe(
        _0x1cfa23.onCommandExecuted((_0x5e869b) => {
          Fe(_0x5e869b, f) && _0x58514b.handleResponse(_0x5e869b.params);
        }),
      ));
  }
};
K = g([h(0, (0, t.Inject)(t.ICommandService)), h(1, (0, t.Inject)(_))], K);
function Fe(_0x59448e, _0x5547da) {
  return _0x59448e.id === _0x5547da.id && _0x59448e.params !== undefined;
}
let q = class extends t.Disposable {
  constructor(_0x928858, _0x5b5c1e) {
    super();
    let _0xdb88b2 = Ie();
    (this.disposeWithMe(_0x928858.register(_0xdb88b2)),
      this.disposeWithMe(_0x5b5c1e.registerView(_0xdb88b2)));
  }
};
q = g(
  [
    h(0, (0, t.Inject)(e.IBaseViewRegistryService)),
    h(1, (0, t.Inject)(e.IBaseProjectionService)),
  ],
  q,
);
function Ie() {
  return {
    type: t.BaseViewType["Pivot"],
    i18nKey: "bases-dashboard.pivotView.name",
    createDefaultConfig: M,
    validateConfig: (_0x46098d, _0x4bf390) => Le(_0x4bf390.config),
    buildProjection: () => ({
      type: "custom",
      viewType: t.BaseViewType["Pivot"],
    }),
    repairConfig: (_0x5ab70a, _0x11a372) =>
      Le(_0x11a372.config).valid
        ? { repaired: false, view: _0x11a372 }
        : { repaired: true, view: { ..._0x11a372, config: M(_0x5ab70a) } },
  };
}
function Le(_0x3e2248) {
  return !_0x3e2248.pivot ||
    !_0x3e2248.chart ||
    !["chart-and-table", "chart", "table"].includes(_0x3e2248.displayMode)
    ? { valid: false, reason: "invalidPivotConfig" }
    : { valid: true };
}
const J = { Loading: "loading", Ready: "ready", Error: "error" };
var Re = class extends r.StaticChartSource {
  constructor(_0x536463, _0x5b0296, _0x56afbc, _0x328d18) {
    (super(),
      (this._rpcService = _0x56afbc),
      (this._instanceService = _0x328d18),
      m(this, "_scope$", undefined),
      m(this, "_state$", new n["BehaviorSubject"]({ status: J.Loading })),
      m(this, "_result$", new n["BehaviorSubject"](null)),
      m(this, "_requestGeneration", 0),
      m(this, "_isDisposed", false),
      m(this, "scope$", undefined),
      m(this, "state$", this._state$["asObservable"]()),
      m(this, "result$", this._result$["asObservable"]()),
      (this._scope$ = new n["BehaviorSubject"](_0x536463)),
      (this.scope$ = this._scope$["asObservable"]()),
      this.updateIsRowDirection(_0x5b0296));
  }
  get scope() {
    return this._scope$["getValue"]();
  }
  get state() {
    return this._state$["getValue"]();
  }
  get result() {
    return this._result$["getValue"]();
  }
  setScope(_0x2da7d2) {
    this._isDisposed || this._scope$["next"](_0x2da7d2);
  }
  setRowDirection(_0x4414a6) {
    this._isDisposed || this.updateIsRowDirection(_0x4414a6);
  }
  async refresh() {
    let _0x29d949 = ++this._requestGeneration,
      _0x4c9255 = this.scope;
    this._state$["next"]({ status: J.Loading });
    let _0x8550db = this._getPivotView(_0x4c9255);
    if (!_0x8550db) {
      let _0x4f792c = Error("Base pivot view not found. " + _0x4c9255.viewId);
      throw (this._publishError(_0x29d949, _0x4f792c), _0x4f792c);
    }
    let _0x4c903c;
    try {
      _0x4c903c = await this._rpcService["calculate"]({
        unitId: _0x4c9255.unitId,
        tableId: _0x4c9255.tableId,
        viewId: _0x4c9255.viewId,
        pivot: _0x8550db.config["pivot"],
        filters: _0x4c9255.filters,
      });
    } catch (_0x3792f4) {
      throw (this._publishError(_0x29d949, _0x3792f4), _0x3792f4);
    }
    this._isCurrentRequest(_0x29d949) &&
      (this.initData(
        R(_0x4c903c.view, {
          rowDimensionNames: _0x8550db.config["pivot"].rowFields["map"](
            (_0x168774) => {
              var _0x3bef4d;
              return (
                ((_0x3bef4d = _0x8550db.config["pivot"].dimension[_0x168774]) ==
                null
                  ? undefined
                  : _0x3bef4d.displayName) ?? _0x168774
              );
            },
          ),
        }),
        this.isRowDirection,
      ),
      this._result$["next"](_0x4c903c),
      this._state$["next"]({ status: J.Ready }));
  }
  dispose() {
    this._isDisposed ||
      ((this._isDisposed = true),
      this._requestGeneration++,
      this._result$["next"](null),
      this._scope$["complete"](),
      this._state$["complete"](),
      this._result$["complete"](),
      super.dispose());
  }
  _getPivotView(_0x42b711) {
    var _0x52eda7;
    let _0x91fb32 = this._instanceService["getUnit"](
      _0x42b711.unitId,
      t.UniverInstanceType["UNIVER_BASE"],
    );
    return ze(
      _0x91fb32 == null ||
        (_0x52eda7 = _0x91fb32.getSnapshot().tables[_0x42b711.tableId]) == null
        ? undefined
        : _0x52eda7.views[_0x42b711.viewId],
    );
  }
  _publishError(_0x570359, _0x4b2b3d) {
    this._isCurrentRequest(_0x570359) &&
      this._state$["next"]({ status: J.Error, error: _0x4b2b3d });
  }
  _isCurrentRequest(_0x5de3e4) {
    return !this._isDisposed && this._requestGeneration === _0x5de3e4;
  }
};
function ze(_0x54e245) {
  return (_0x54e245 == null ? undefined : _0x54e245.type) ===
    t.BaseViewType["Pivot"] &&
    typeof _0x54e245.config == "object" &&
    _0x54e245.config !== null &&
    "pivot" in _0x54e245.config &&
    "chart" in _0x54e245.config
    ? _0x54e245
    : undefined;
}
let Y = class extends t.Disposable {
  constructor(_0x6869e4, _0x1e92ac, _0x5da2a0) {
    (super(),
      (this._injector = _0x6869e4),
      (this._rpcService = _0x1e92ac),
      (this._instanceService = _0x5da2a0),
      m(this, "_records", new Map()),
      this.disposeWithMe(
        this._instanceService["unitDisposed$"].subscribe((_0x47ae72) => {
          this.removeUnit(_0x47ae72.getUnitId());
        }),
      ));
  }
  acquireChartRuntime(_0x251858, _0x5d0b8f, _0x2b5d3f) {
    var _0xd20272;
    let _0x180e9c =
      _0x2b5d3f ??
      ((_0xd20272 = this._getPivotView(_0x5d0b8f)) == null
        ? undefined
        : _0xd20272.config["chart"]);
    if (!_0x180e9c) return;
    let _0x51879c = this._getRecord(_0x5d0b8f.unitId, _0x251858);
    if (_0x51879c)
      return (
        _0x51879c.consumerCount++,
        this._updateRecord(_0x51879c, _0x5d0b8f, _0x180e9c),
        _0x51879c.runtime
      );
    let _0x965040 = new Re(
        _0x5d0b8f,
        L(_0x180e9c.orient),
        this._rpcService,
        this._instanceService,
      ),
      _0xc53a9b = new r.ChartModel(
        _0x251858,
        {
          dataSource: _0x965040,
          chartType: _0x180e9c.type,
          style: _0x180e9c.style,
          dataAggregation: _0x180e9c.dataAggregation,
        },
        this._injector,
      );
    _0xc53a9b.init();
    let _0x10dd59 = {
        unitId: _0x5d0b8f.unitId,
        chartId: _0x251858,
        dataSourceId: _0x251858,
        model: _0xc53a9b,
      },
      _0x323c3a = {
        runtime: _0x10dd59,
        source: _0x965040,
        consumerCount: 1,
        refreshRevision: 0,
        authoredContext: _0x180e9c.context,
      };
    return (
      this._getOrCreateUnitRecords(_0x5d0b8f.unitId).set(_0x251858, _0x323c3a),
      this._replaceGeneratedContext(_0x323c3a, _0x180e9c.context),
      _0x10dd59
    );
  }
  getChartRuntime(_0x5fbf, _0x24d548) {
    var _0x1d8a37;
    return (_0x1d8a37 = this._getRecord(_0x5fbf, _0x24d548)) == null
      ? undefined
      : _0x1d8a37.runtime;
  }
  async refreshChartRuntime(_0x254450, _0xbf50f, _0x581bcd, _0x5dbccd) {
    var _0x3fe8f8;
    let _0x40a677 = this._getRecord(_0x254450, _0xbf50f),
      _0x57b1e9 =
        _0x5dbccd ??
        ((_0x3fe8f8 = this._getPivotView(_0x581bcd)) == null
          ? undefined
          : _0x3fe8f8.config["chart"]);
    if (!_0x40a677 || !_0x57b1e9)
      throw Error("Base chart runtime not found. " + _0xbf50f);
    this._updateRecord(_0x40a677, _0x581bcd, _0x57b1e9);
    let _0x141698 = ++_0x40a677.refreshRevision;
    return (
      await _0x40a677.source["refresh"](),
      this._getRecord(_0x254450, _0xbf50f) === _0x40a677 &&
        _0x40a677.refreshRevision === _0x141698 &&
        this._replaceGeneratedContext(_0x40a677, _0x40a677.authoredContext),
      _0x40a677.source["result"] ?? undefined
    );
  }
  releaseChartRuntime(_0x11969a, _0x13d368) {
    let _0x437778 = this._getRecord(_0x11969a, _0x13d368);
    return !_0x437778 ||
      (_0x437778.consumerCount--, _0x437778.consumerCount > 0)
      ? false
      : (this._removeRecord(_0x11969a, _0x13d368, _0x437778), true);
  }
  removeUnit(_0x56dda1) {
    let _0x2b976e = this._records["get"](_0x56dda1);
    _0x2b976e &&
      Array.from(_0x2b976e.entries()).forEach(([_0xde7c3e, _0x528ede]) => {
        this._removeRecord(_0x56dda1, _0xde7c3e, _0x528ede);
      });
  }
  dispose() {
    (Array.from(this._records["keys"]()).forEach((_0x5b1dcc) =>
      this.removeUnit(_0x5b1dcc),
    ),
      super.dispose());
  }
  _updateRecord(_0x48b396, _0xd038df, _0x5787d2) {
    ((_0x48b396.authoredContext = _0x5787d2.context),
      _0x48b396.source["setScope"](_0xd038df),
      _0x48b396.source["setRowDirection"](L(_0x5787d2.orient)),
      _0x48b396.runtime["model"].setChartType(_0x5787d2.type),
      _0x48b396.runtime["model"].setStyle(_0x5787d2.style ?? {}),
      _0x48b396.runtime["model"].setDataAggregation(
        _0x5787d2.dataAggregation ?? {},
      ),
      this._replaceGeneratedContext(_0x48b396, _0x5787d2.context));
  }
  _replaceGeneratedContext(_0xb9d0c0, _0x303868) {
    _0xb9d0c0.runtime["model"].setChartContext(
      _0x303868 === undefined
        ? (0, r.reconcileChartContext)(
            _0xb9d0c0.source["getDataSet"](),
            _0xb9d0c0.runtime["model"].context,
            _0xb9d0c0.runtime["model"].chartType,
          )
        : (0, r.generateChartContext)(
            _0xb9d0c0.source["getDataSet"](),
            _0x303868,
            false,
          ),
    );
  }
  _getPivotView(_0x2f9b3c) {
    var _0x3e10bb;
    let _0x3ae5a7 = this._instanceService["getUnit"](
      _0x2f9b3c.unitId,
      t.UniverInstanceType["UNIVER_BASE"],
    );
    return Be(
      _0x3ae5a7 == null ||
        (_0x3e10bb = _0x3ae5a7.getSnapshot().tables[_0x2f9b3c.tableId]) == null
        ? undefined
        : _0x3e10bb.views[_0x2f9b3c.viewId],
    );
  }
  _getRecord(_0x2234dd, _0x32f9e4) {
    var _0x33410c;
    return (_0x33410c = this._records["get"](_0x2234dd)) == null
      ? undefined
      : _0x33410c.get(_0x32f9e4);
  }
  _getOrCreateUnitRecords(_0x4fa20a) {
    let _0x262b68 = this._records["get"](_0x4fa20a);
    return (
      _0x262b68 ||
        ((_0x262b68 = new Map()), this._records["set"](_0x4fa20a, _0x262b68)),
      _0x262b68
    );
  }
  _removeRecord(_0x4700b8, _0x51f1a8, _0x1eec0c) {
    let _0x39b1c8 = this._records["get"](_0x4700b8);
    !_0x39b1c8 ||
      _0x39b1c8.get(_0x51f1a8) !== _0x1eec0c ||
      (_0x39b1c8.delete(_0x51f1a8),
      _0x39b1c8.size === 0 && this._records["delete"](_0x4700b8),
      _0x1eec0c.runtime["model"].dispose(),
      _0x1eec0c.source["dispose"]());
  }
};
Y = g(
  [
    h(0, (0, t.Inject)(t.Injector)),
    h(1, (0, t.Inject)(_)),
    h(2, t.IUniverInstanceService),
  ],
  Y,
);
function Be(_0x21bc3b) {
  return (_0x21bc3b == null ? undefined : _0x21bc3b.type) ===
    t.BaseViewType["Pivot"] &&
    typeof _0x21bc3b.config == "object" &&
    _0x21bc3b.config !== null &&
    "pivot" in _0x21bc3b.config &&
    "chart" in _0x21bc3b.config
    ? _0x21bc3b
    : undefined;
}
let X = class {
  constructor(_0x14a059, _0x4d41f6, _0x2787c3, _0xe7a1ec) {
    ((this.resourceService = _0x14a059),
      (this.commandService = _0x4d41f6),
      (this.permissionService = _0x2787c3),
      (this.instanceService = _0xe7a1ec));
  }
};
X = g(
  [
    h(0, (0, t.Inject)(y)),
    h(1, t.ICommandService),
    h(2, t.IPermissionService),
    h(3, t.IUniverInstanceService),
  ],
  X,
);
const Z = [d, f],
  Ve = [S, D, x, xe],
  He = [...Z, ...Ve];
let Q = class extends t.Plugin {
  constructor(_0x23cd51 = Te, _0x53beed, _0x278f13, _0x13f1b4, _0x43302b) {
    (super(),
      (this._config = _0x23cd51),
      (this._injector = _0x53beed),
      (this._commandService = _0x278f13),
      (this._configService = _0x13f1b4),
      (this._dataSyncPrimaryController = _0x43302b));
    let { ..._0x3c2c2b } = (0, t.merge)({}, Te, this._config);
    (this._configService["setConfig"]("bases-dashboard.config", _0x3c2c2b),
      this._registerCommands());
  }
  onStarting() {
    let _0x133d9c = this._config["notExecuteCalculation"],
      _0x616064;
    ((_0x616064 =
      _0x133d9c === true
        ? [[y], [U], [H], [q], [_], [Y], [K], [V], [X]]
        : _0x133d9c === false
          ? [[G]]
          : [[y], [U], [H], [q], [_], [Y], [K], [V], [X], [G]]),
      _0x616064.forEach((_0x338962) => this._injector["add"](_0x338962)),
      _0x133d9c !== false &&
        (0, t.touchDependencies)(this._injector, [
          [y],
          [U],
          [H],
          [q],
          [_],
          [Y],
          [K],
          [V],
          [X],
        ]),
      _0x133d9c !== true && (0, t.touchDependencies)(this._injector, [[G]]));
  }
  _registerCommands() {
    ([ne, w, k, T, j, O, A, ...He].forEach((_0x3eca0d) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x3eca0d)),
    ),
      Z.forEach((_0x1e1f88) => {
        var _0x5ed7ca;
        return (_0x5ed7ca = this._dataSyncPrimaryController) == null
          ? undefined
          : _0x5ed7ca.registerSyncingMutations(_0x1e1f88);
      }));
  }
};
(m(Q, "type", t.UniverInstanceType["UNIVER_BASE"]),
  m(Q, "pluginName", v),
  m(Q, "packageName", B),
  m(Q, "version", be),
  (Q = g(
    [
      (0, t.DependentOn)(
        e.UniverBasesPlugin,
        r.UniverChartPlugin,
        o.UniverLicensePlugin,
        s.UniverShapeEditorPlugin,
        a.UniverShapePlugin,
      ),
      h(1, (0, t.Inject)(t.Injector)),
      h(2, (0, t.Inject)(t.ICommandService)),
      h(3, t.IConfigService),
      h(4, (0, t.Optional)(c.DataSyncPrimaryController)),
    ],
    Q,
  )));
let $ = class extends t.Plugin {
  constructor(_0xe4c11b = {}, _0x464c03, _0x46328f) {
    (super(),
      (this._injector = _0x464c03),
      Z.forEach((_0x1db2ba) => {
        this.disposeWithMe(_0x46328f.registerCommand(_0x1db2ba));
      }));
  }
  onStarting() {
    (this._injector["add"]([G]),
      (0, t.touchDependencies)(this._injector, [[G]]));
  }
};
(m($, "type", t.UniverInstanceType["UNIVER_BASE"]),
  m($, "pluginName", "REMOTE_BASES_DASHBOARD_PLUGIN"),
  m($, "packageName", B),
  m($, "version", be),
  ($ = g(
    [
      (0, t.DependentOn)(e.UniverRemoteBasesPlugin),
      h(1, (0, t.Inject)(t.Injector)),
      h(2, (0, t.Inject)(t.ICommandService)),
    ],
    $,
  )),
  (exports.BASES_DASHBOARD_DEFAULT_ROW_HEIGHT = 32),
  (exports.BASES_DASHBOARD_GRID_COLUMNS = 12),
  (exports.BASES_DASHBOARD_PLUGIN = v),
  (exports.BASES_DASHBOARD_RESOURCE_VERSION = 1),
  Object.defineProperty(exports, "BaseChartRuntimeService", {
    enumerable: true,
    get: function () {
      return Y;
    },
  }),
  Object.defineProperty(exports, "BaseDashboardAPIContextService", {
    enumerable: true,
    get: function () {
      return X;
    },
  }),
  (exports.BaseDashboardHistoryAction = ae),
  (exports.BaseDashboardResourceService = y),
  (exports.BaseDashboardWidgetType = E),
  Object.defineProperty(exports, "BasePivotRPCService", {
    enumerable: true,
    get: function () {
      return _;
    },
  }),
  (exports.CalculateBasePivotCommand = ne),
  (exports.CreateBaseDashboardCommand = w),
  (exports.DeleteBaseDashboardCommand = T),
  (exports.RemoveBaseDashboardWidgetCommand = O),
  Object.defineProperty(exports, "UniverBaseDashboardPlugin", {
    enumerable: true,
    get: function () {
      return Q;
    },
  }),
  Object.defineProperty(exports, "UniverRemoteBaseDashboardPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.UpdateBaseDashboardCommand = k),
  (exports.UpdateBasePivotViewCommand = A),
  (exports.UpsertBaseDashboardWidgetCommand = j),
  (exports.adaptPivotViewToChartDataSet = R),
  (exports.calculateBasePivot = N),
  (exports.canEditBaseDashboard = l),
  (exports.canEditBasePivotView = u),
  (exports.createBasePivotTable = fe),
  (exports.createDefaultBasePivotSnapshot = de),
  (exports.createDefaultBasePivotViewConfig = M),
  (exports.resolveBasePivotChartRowDirection = L));
