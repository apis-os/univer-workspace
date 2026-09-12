import {
  ApplyBaseJson1Mutation as _0x649562,
  BaseJson1OpApplier as _0x38ba1b,
  BaseJson1OpFactory as _0x1e14b7,
  IBaseProjectionService as _0xbe07f4,
  IBaseViewRegistryService as _0x3656d5,
  UniverBasesPlugin as _0x4bfe3d,
  UniverRemoteBasesPlugin as _0x21033e,
  canEditBaseTargets as _0x22289f,
  getBaseDashboardPermissionObjectId as _0x2d0be5,
  getBaseTablePermissionObjectId as _0x5e59e2,
  getBaseViewPermissionObjectId as _0x167d33,
  matchesBaseCondition as _0x5d3587,
  normalizeBaseDateSerial as _0x13fe5f,
  resolveBaseDateFieldConfig as _0x220e13,
} from "@univerjs-pro/bases";
import {
  BaseFieldType as _0x3e61e4,
  BaseFilterConjunction as _0xffeded,
  BaseFilterOperator as _0x3120ae,
  BaseViewType as _0x5c3794,
  CommandType as _0x1e6723,
  CustomCommandExecutionError as _0xded9be,
  DependentOn as _0x3ad9e8,
  Disposable as _0x3f5960,
  ICommandService as _0x26f705,
  IConfigService as _0x448c86,
  IPermissionService as _0x577f0b,
  IResourceManagerService as _0x36aeae,
  IUndoRedoService as _0x4a2956,
  IUniverInstanceService as _0x5b4847,
  ImageSourceType as _0x36e0a5,
  Inject as _0x29d71e,
  Injector as _0x2f4f7b,
  Optional as _0x562a89,
  Plugin as _0x729070,
  Tools as _0x51972d,
  UniverInstanceType as _0x3caae3,
  generateRandomId as _0x3670e1,
  merge as _0x408b2c,
  sequenceExecute as _0x1b4d15,
  touchDependencies as _0x5a82e2,
} from "@univerjs/core";
import {
  BehaviorSubject as _0x25504d,
  filter as _0x26a000,
  map as _0x50cd7b,
} from "rxjs";
import {
  ChartModel as _0x2b641a,
  ChartTypeBits as _0x5c7c1c,
  StaticChartSource as _0x2a48af,
  UniverChartPlugin as _0x2bf356,
  generateChartContext as _0x1535d6,
  reconcileChartContext as _0x47c6e0,
} from "@univerjs-pro/engine-chart";
import {
  DataFieldManager as _0x88c5c4,
  PivotTable as _0x122c11,
  PivotTableFiledAreaEnum as _0x3c873b,
  PivotView as _0x3fdab8,
  isErrorValue as _0x2da4e2,
  isPrefixValue as _0x3046f8,
} from "@univerjs-pro/engine-pivot";
import {
  IShapeHostAdapterRegistry as _0x42460b,
  UniverShapePlugin as _0x4bf85a,
  canApplyShapeFormulaLastValue as _0x39e503,
} from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin as _0x5366df } from "@univerjs-pro/license";
import {
  UniverShapeEditorPlugin as _0x348665,
  createFormulaShapeData as _0x47c16d,
} from "@univerjs-pro/shape-editor";
import { DataSyncPrimaryController as _0x1b8139 } from "@univerjs/rpc";
function Re(_0xbc7cd7, _0x34f60c, _0x29dfb7) {
  return _0x22289f(_0xbc7cd7, _0x34f60c, [_0x2d0be5(_0x29dfb7)]);
}
function ze(_0x1f7c97, _0x69c428, _0x5863cc, _0x424482) {
  return _0x22289f(_0x1f7c97, _0x69c428, [
    _0x5e59e2(_0x5863cc),
    _0x167d33(_0x5863cc, _0x424482),
  ]);
}
const C = {
    id: "base-dashboard.mutation.request-pivot-calculation",
    type: _0x1e6723.MUTATION,
    handler: () => true,
  },
  w = {
    id: "base-dashboard.mutation.respond-pivot-calculation",
    type: _0x1e6723.MUTATION,
    handler: () => true,
  };
function T(_0x24b0bc) {
  "@babel/helpers - typeof";
  return (
    (T =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3e75b8) {
            return typeof _0x3e75b8;
          }
        : function (_0x31ca20) {
            return _0x31ca20 &&
              typeof Symbol == "function" &&
              _0x31ca20.constructor === Symbol &&
              _0x31ca20 !== Symbol.prototype
              ? "symbol"
              : typeof _0x31ca20;
          }),
    T(_0x24b0bc)
  );
}
function Be(_0x3417b4, _0x551b0f) {
  if (T(_0x3417b4) != "object" || !_0x3417b4) return _0x3417b4;
  var _0xfb3596 = _0x3417b4[Symbol.toPrimitive];
  if (_0xfb3596 !== undefined) {
    var _0x734855 = _0xfb3596.call(_0x3417b4, _0x551b0f || "default");
    if (T(_0x734855) != "object") return _0x734855;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x551b0f === "string" ? String : Number)(_0x3417b4);
}
function Ve(_0x44ef61) {
  var _0x4136f3 = Be(_0x44ef61, "string");
  return T(_0x4136f3) == "symbol" ? _0x4136f3 : _0x4136f3 + "";
}
function E(_0xcd86f4, _0x3e6847, _0x3e03a0) {
  return (
    (_0x3e6847 = Ve(_0x3e6847)) in _0xcd86f4
      ? Object.defineProperty(_0xcd86f4, _0x3e6847, {
          value: _0x3e03a0,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xcd86f4[_0x3e6847] = _0x3e03a0),
    _0xcd86f4
  );
}
function D(_0x2f0bbc, _0x58eb15) {
  return function (_0x4c1154, _0x18ea1b) {
    _0x58eb15(_0x4c1154, _0x18ea1b, _0x2f0bbc);
  };
}
function O(_0x52b678, _0xb3e65a, _0x58a471, _0x2ea510) {
  var _0x792536 = arguments.length,
    _0x188903 =
      _0x792536 < 3
        ? _0xb3e65a
        : _0x2ea510 === null
          ? (_0x2ea510 = Object.getOwnPropertyDescriptor(_0xb3e65a, _0x58a471))
          : _0x2ea510,
    _0x4c2b96;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x188903 = Reflect.decorate(_0x52b678, _0xb3e65a, _0x58a471, _0x2ea510);
  else {
    for (var _0x941a00 = _0x52b678.length - 1; _0x941a00 >= 0; _0x941a00--)
      (_0x4c2b96 = _0x52b678[_0x941a00]) &&
        (_0x188903 =
          (_0x792536 < 3
            ? _0x4c2b96(_0x188903)
            : _0x792536 > 3
              ? _0x4c2b96(_0xb3e65a, _0x58a471, _0x188903)
              : _0x4c2b96(_0xb3e65a, _0x58a471)) || _0x188903);
  }
  return (
    _0x792536 > 3 &&
      _0x188903 &&
      Object.defineProperty(_0xb3e65a, _0x58a471, _0x188903),
    _0x188903
  );
}
let k = class extends _0x3f5960 {
  constructor(_0x367ae5) {
    (super(),
      (this._commandService = _0x367ae5),
      E(this, "_pending", new Map()));
  }
  calculate(_0x1df2b2) {
    let _0xb4fbf6 = _0x3670e1();
    return new Promise((_0x52a3cc, _0x1e8874) => {
      let _0x45a601 = setTimeout(() => {
        (this._pending["delete"](_0xb4fbf6),
          _0x1e8874(
            Error("Base pivot calculation timed out: " + _0x1df2b2.viewId),
          ));
      }, 30000);
      (this._pending["set"](_0xb4fbf6, {
        resolve: _0x52a3cc,
        reject: _0x1e8874,
        timeout: _0x45a601,
      }),
        this._commandService["executeCommand"](
          C.id,
          { ..._0x1df2b2, requestId: _0xb4fbf6 },
          { onlyLocal: true },
        )
          .then((_0x335cb0) => {
            _0x335cb0 ||
              this._reject(
                _0xb4fbf6,
                Error(
                  "Unable to request Base pivot calculation: " +
                    _0x1df2b2.viewId,
                ),
              );
          })
          .catch((_0x55b66d) => {
            this._reject(
              _0xb4fbf6,
              _0x55b66d instanceof Error ? _0x55b66d : Error(String(_0x55b66d)),
            );
          }));
    });
  }
  handleResponse(_0xc06474) {
    let _0x44f0af = this._pending["get"](_0xc06474.requestId);
    _0x44f0af &&
      (clearTimeout(_0x44f0af.timeout),
      this._pending["delete"](_0xc06474.requestId),
      _0x44f0af.resolve(_0xc06474));
  }
  dispose() {
    for (let _0x6c7b1b of this._pending["values"]())
      (clearTimeout(_0x6c7b1b.timeout),
        _0x6c7b1b.reject(
          Error("Base\x20pivot\x20calculation\x20service\x20disposed."),
        ));
    (this._pending["clear"](), super.dispose());
  }
  _reject(_0x3906fb, _0x41d371) {
    let _0x5046e9 = this._pending["get"](_0x3906fb);
    _0x5046e9 &&
      (clearTimeout(_0x5046e9.timeout),
      this._pending["delete"](_0x3906fb),
      _0x5046e9.reject(_0x41d371));
  }
};
k = O([D(0, _0x29d71e(_0x26f705))], k);
const He = {
  id: "base-dashboard.command.calculate-pivot",
  type: _0x1e6723.COMMAND,
  handler: (_0xffd907, _0x22f449) => {
    var _0x41ffcf;
    if (!_0x22f449)
      throw Error("Pivot\x20calculation\x20parameters\x20are\x20required.");
    let _0x3040c8 = _0xffd907
        .get(_0x5b4847)
        .getUnit(_0x22f449.unitId, _0x3caae3.UNIVER_BASE),
      _0x1886ff =
        _0x3040c8 == null ||
        (_0x41ffcf = _0x3040c8.getSnapshot().tables[_0x22f449.tableId]) == null
          ? undefined
          : _0x41ffcf.views[_0x22f449.viewId];
    if (!Ue(_0x1886ff))
      throw Error("Pivot view not found: " + _0x22f449.viewId);
    return _0xffd907
      .get(k)
      .calculate({
        unitId: _0x22f449.unitId,
        tableId: _0x22f449.tableId,
        viewId: _0x22f449.viewId,
        pivot: _0x1886ff.config["pivot"],
        filters: [_0x1886ff.filter ?? null, ...(_0x22f449.filters ?? [])],
      });
  },
};
function Ue(_0x3976b6) {
  return (
    (_0x3976b6 == null ? undefined : _0x3976b6.type) === _0x5c3794.Pivot &&
    typeof _0x3976b6.config == "object" &&
    _0x3976b6.config !== null &&
    "pivot" in _0x3976b6.config &&
    "chart" in _0x3976b6.config
  );
}
const We = "BASE_DASHBOARD_PLUGIN",
  Ge = 1,
  Ke = 12,
  qe = 32;
var A = class extends _0x3f5960 {
  constructor(..._0x3cd76c) {
    (super(..._0x3cd76c),
      E(this, "_resources", new Map()),
      E(this, "_change$", new _0x25504d(null)),
      E(this, "change$", this._change$["asObservable"]()));
  }
  getResource(_0x588fdf) {
    let _0xf571d = this._resources["get"](_0x588fdf);
    return (
      _0xf571d ||
        ((_0xf571d = j()), this._resources["set"](_0x588fdf, _0xf571d)),
      _0x51972d.deepClone(_0xf571d)
    );
  }
  getDashboard(_0x3dd5e5, _0x26859f) {
    var _0x2036c1;
    let _0x33c8bf =
      (_0x2036c1 = this._resources["get"](_0x3dd5e5)) == null
        ? undefined
        : _0x2036c1.dashboards[_0x26859f];
    return _0x33c8bf ? _0x51972d.deepClone(_0x33c8bf) : undefined;
  }
  setDashboard(_0x299d8d, _0x4ecda7, _0x2294bf) {
    let _0x226254 = this._getMutableResource(_0x299d8d),
      _0x2293fb = !!_0x226254.dashboards[_0x4ecda7.id];
    if (
      ((_0x226254.dashboards[_0x4ecda7.id] = _0x51972d.deepClone(_0x4ecda7)),
      !_0x2293fb)
    ) {
      let _0x529024 =
        _0x2294bf === undefined
          ? _0x226254.dashboardOrder["length"]
          : Math.max(
              0,
              Math.min(_0x2294bf, _0x226254.dashboardOrder["length"]),
            );
      _0x226254.dashboardOrder["splice"](_0x529024, 0, _0x4ecda7.id);
    }
    this._change$["next"]({ unitId: _0x299d8d, dashboardId: _0x4ecda7.id });
  }
  removeDashboard(_0x5c6829, _0x426fb3) {
    let _0x262d4d = this._getMutableResource(_0x5c6829);
    if (!_0x262d4d.dashboards[_0x426fb3]) return false;
    delete _0x262d4d.dashboards[_0x426fb3];
    let _0x47cd38 = _0x262d4d.dashboardOrder["indexOf"](_0x426fb3);
    return (
      _0x47cd38 >= 0 && _0x262d4d.dashboardOrder["splice"](_0x47cd38, 1),
      this._change$["next"]({ unitId: _0x5c6829, dashboardId: _0x426fb3 }),
      true
    );
  }
  loadUnit(_0x5a7f3f, _0x181347) {
    (this._resources["set"](_0x5a7f3f, _0x51972d.deepClone(_0x181347)),
      this._change$["next"]({ unitId: _0x5a7f3f }));
  }
  unloadUnit(_0x8eca9c) {
    (this._resources["delete"](_0x8eca9c),
      this._change$["next"]({ unitId: _0x8eca9c }));
  }
  serializeUnit(_0x278aea) {
    return JSON.stringify(this._getMutableResource(_0x278aea));
  }
  dispose() {
    (this._resources["clear"](), this._change$["complete"](), super.dispose());
  }
  _getMutableResource(_0x86c88a) {
    let _0x254068 = this._resources["get"](_0x86c88a);
    return (
      _0x254068 ||
        ((_0x254068 = j()), this._resources["set"](_0x86c88a, _0x254068)),
      _0x254068
    );
  }
};
function j() {
  return { version: 1, dashboardOrder: [], dashboards: {} };
}
const M = {
    id: "base-dashboard.mutation.remove-dashboard",
    type: _0x1e6723.MUTATION,
    handler: (_0xed3576, _0x4c41f4) =>
      !!(
        _0x4c41f4 &&
        _0xed3576
          .get(A)
          .removeDashboard(_0x4c41f4.unitId, _0x4c41f4.dashboardId)
      ),
  },
  N = {
    id: "base-dashboard.mutation.set-dashboard",
    type: _0x1e6723.MUTATION,
    handler: (_0x314578, _0x2b35ff) =>
      _0x2b35ff
        ? (_0x314578
            .get(A)
            .setDashboard(
              _0x2b35ff.unitId,
              _0x2b35ff.dashboard,
              _0x2b35ff.index,
            ),
          true)
        : false,
  };
function P(_0x344ab6, _0x5b4628, _0x273bab, _0x4037e7) {
  return _0x1b4d15(_0x273bab, _0x344ab6.get(_0x26f705)).result
    ? (_0x344ab6
        .get(_0x4a2956)
        .pushUndoRedo({
          unitID: _0x5b4628,
          redoMutations: _0x273bab,
          undoMutations: _0x4037e7,
        }),
      true)
    : false;
}
const Je = {
  id: "base-dashboard.command.create-dashboard",
  type: _0x1e6723.COMMAND,
  handler: (_0x18c56e, _0x3ee3ad) => {
    if (
      !_0x3ee3ad ||
      !Ye(_0x18c56e.get(_0x5b4847), _0x3ee3ad.unitId) ||
      _0x18c56e.get(A).getDashboard(_0x3ee3ad.unitId, _0x3ee3ad.dashboard["id"])
    )
      return false;
    let _0x68906c = [
        {
          id: N.id,
          params: {
            unitId: _0x3ee3ad.unitId,
            dashboard: _0x3ee3ad.dashboard,
            index: _0x3ee3ad.index,
          },
        },
      ],
      _0x170365 = [
        {
          id: M.id,
          params: {
            unitId: _0x3ee3ad.unitId,
            dashboardId: _0x3ee3ad.dashboard["id"],
          },
        },
      ];
    return P(_0x18c56e, _0x3ee3ad.unitId, _0x68906c, _0x170365);
  },
};
function Ye(_0x10a81d, _0x795ff3) {
  return !!_0x10a81d.getUnit(_0x795ff3, _0x3caae3.UNIVER_BASE);
}
const Xe = {
    id: "base-dashboard.command.delete-dashboard",
    type: _0x1e6723.COMMAND,
    handler: (_0x41246f, _0x2e7654) => {
      if (!_0x2e7654) return false;
      let _0x42d78f = _0x41246f.get(A).getResource(_0x2e7654.unitId),
        _0xd47970 = _0x42d78f.dashboards[_0x2e7654.dashboardId],
        _0x41a3d8 = _0x42d78f.dashboardOrder["indexOf"](_0x2e7654.dashboardId);
      if (!_0xd47970 || _0x41a3d8 < 0) return false;
      let _0x53c9ea = [
          {
            id: M.id,
            params: {
              unitId: _0x2e7654.unitId,
              dashboardId: _0x2e7654.dashboardId,
            },
          },
        ],
        _0x4ddcf9 = [
          {
            id: N.id,
            params: {
              unitId: _0x2e7654.unitId,
              dashboard: _0xd47970,
              index: _0x41a3d8,
            },
          },
        ];
      return P(_0x41246f, _0x2e7654.unitId, _0x53c9ea, _0x4ddcf9);
    },
  },
  F = {
    PivotChart: "pivot-chart",
    TableFilter: "table-filter",
    Text: "text",
    Image: "image",
    FormulaShape: "formula-shape",
  };
let Ze = (function (_0x58aa15) {
  return (
    (_0x58aa15.CreateWidget = "create-widget"),
    (_0x58aa15.RenameDashboard = "rename-dashboard"),
    (_0x58aa15.ReorderWidgets = "reorder-widgets"),
    (_0x58aa15.UpdateWidget = "update-widget"),
    (_0x58aa15.RemoveWidget = "remove-widget"),
    _0x58aa15
  );
})({});
const I = {
    id: "base-dashboard.mutation.patch-dashboard",
    type: _0x1e6723.MUTATION,
    handler: (_0x374186, _0x2193d2) => {
      if (!_0x2193d2) return false;
      let _0x2f2e00 = _0x374186.get(A),
        _0x785c22 = _0x2f2e00.getDashboard(
          _0x2193d2.unitId,
          _0x2193d2.dashboardId,
        );
      if (!_0x785c22) return false;
      let _0x1844c0 = { ..._0x785c22.widgets },
        _0x21832a = [..._0x785c22.widgetOrder];
      if (
        (Object.entries(_0x2193d2.patch["widgets"] ?? {}).forEach(
          ([_0x56d01c, _0x30b9ce]) => {
            _0x30b9ce === null
              ? (delete _0x1844c0[_0x56d01c],
                (_0x21832a = _0x21832a.filter(
                  (_0x4859dc) => _0x4859dc !== _0x56d01c,
                )))
              : ((_0x1844c0[_0x56d01c] = _0x30b9ce),
                _0x21832a.includes(_0x56d01c) || _0x21832a.push(_0x56d01c));
          },
        ),
        _0x2193d2.patch["widgetOrder"])
      ) {
        let _0x2217d9 = _0x2193d2.patch["widgetOrder"].filter(
            (_0x2a607e) => _0x1844c0[_0x2a607e],
          ),
          _0x665a08 = new Set(_0x2217d9);
        _0x21832a = [
          ..._0x2217d9,
          ..._0x21832a.filter(
            (_0x527d5e) => _0x1844c0[_0x527d5e] && !_0x665a08.has(_0x527d5e),
          ),
        ];
      }
      return (
        _0x2f2e00.setDashboard(_0x2193d2.unitId, {
          ..._0x785c22,
          ...(_0x2193d2.patch["name"] === undefined
            ? null
            : { name: _0x2193d2.patch["name"] }),
          widgetOrder: _0x21832a,
          widgets: _0x1844c0,
        }),
        true
      );
    },
  },
  L = {
    id: "base-dashboard.command.remove-widget",
    type: _0x1e6723.COMMAND,
    handler: (_0x77045b, _0x5f4e48) => {
      if (!_0x5f4e48) return false;
      let _0x5ba2f0 = _0x77045b
          .get(A)
          .getDashboard(_0x5f4e48.unitId, _0x5f4e48.dashboardId),
        _0x1027df =
          _0x5ba2f0 == null ? undefined : _0x5ba2f0.widgets[_0x5f4e48.widgetId];
      if (!_0x5ba2f0 || !_0x1027df) return false;
      let _0x4a12c3 = [
          {
            id: I.id,
            params: {
              unitId: _0x5f4e48.unitId,
              dashboardId: _0x5f4e48.dashboardId,
              historyAction: "remove-widget",
              historyWidgetType: _0x1027df.type,
              patch: { widgets: { [_0x5f4e48.widgetId]: null } },
            },
          },
        ],
        _0x4e4d09 = [
          {
            id: I.id,
            params: {
              unitId: _0x5f4e48.unitId,
              dashboardId: _0x5f4e48.dashboardId,
              historyAction: "create-widget",
              historyWidgetType: _0x1027df.type,
              patch: {
                widgetOrder: _0x5ba2f0.widgetOrder,
                widgets: {
                  [_0x5f4e48.widgetId]: _0x5ba2f0.widgets[_0x5f4e48.widgetId],
                },
              },
            },
          },
        ];
      return P(_0x77045b, _0x5f4e48.unitId, _0x4a12c3, _0x4e4d09);
    },
  },
  R = {
    id: "base-dashboard.command.update-dashboard",
    type: _0x1e6723.COMMAND,
    handler: (_0x5a46c2, _0x11786c) => {
      if (!_0x11786c) return false;
      let _0x1a860a = _0x5a46c2
        .get(A)
        .getDashboard(_0x11786c.unitId, _0x11786c.dashboard["id"]);
      if (!_0x1a860a) return false;
      let _0x389324 = Qe(_0x1a860a, _0x11786c.dashboard),
        _0x2ca29f = Qe(_0x11786c.dashboard, _0x1a860a);
      if (!_0x389324) return false;
      let _0xff6708 = et(_0x1a860a, _0x11786c.dashboard),
        _0x4d2bed = $e(_0x1a860a, _0x11786c.dashboard, _0xff6708),
        _0x4be8ff = [
          {
            id: I.id,
            params: {
              unitId: _0x11786c.unitId,
              dashboardId: _0x11786c.dashboard["id"],
              historyActions: _0x4d2bed,
              historyWidgetTypes: _0xff6708,
              patch: _0x389324,
            },
          },
        ],
        _0x135f4b = [
          {
            id: I.id,
            params: {
              unitId: _0x11786c.unitId,
              dashboardId: _0x11786c.dashboard["id"],
              historyActions: _0x4d2bed,
              historyWidgetTypes: _0xff6708,
              patch: _0x2ca29f,
            },
          },
        ];
      return P(_0x5a46c2, _0x11786c.unitId, _0x4be8ff, _0x135f4b);
    },
  };
function Qe(_0x4d39fa, _0x5be7f9) {
  let _0x513aa7 = {};
  (_0x4d39fa.name !== _0x5be7f9.name && (_0x513aa7.name = _0x5be7f9.name),
    JSON.stringify(_0x4d39fa.widgetOrder) !==
      JSON.stringify(_0x5be7f9.widgetOrder) &&
      (_0x513aa7.widgetOrder = _0x5be7f9.widgetOrder));
  let _0x56551c = {};
  return (
    new Set([
      ...Object.keys(_0x4d39fa.widgets),
      ...Object.keys(_0x5be7f9.widgets),
    ]).forEach((_0x418c81) => {
      let _0x4afcd2 = _0x4d39fa.widgets[_0x418c81],
        _0x205a06 = _0x5be7f9.widgets[_0x418c81];
      JSON.stringify(_0x4afcd2) !== JSON.stringify(_0x205a06) &&
        (_0x56551c[_0x418c81] = _0x205a06 ?? null);
    }),
    Object.keys(_0x56551c).length > 0 && (_0x513aa7.widgets = _0x56551c),
    Object.keys(_0x513aa7).length > 0 ? _0x513aa7 : null
  );
}
function $e(_0xd2d238, _0x49d906, _0x456ce0) {
  let _0x53e578 = [];
  return (
    _0xd2d238.name !== _0x49d906.name && _0x53e578.push("rename-dashboard"),
    JSON.stringify(_0xd2d238.widgetOrder) !==
      JSON.stringify(_0x49d906.widgetOrder) &&
      _0x53e578.push("reorder-widgets"),
    _0x456ce0.length > 0 && _0x53e578.push("update-widget"),
    _0x53e578
  );
}
function et(_0x2afec5, _0x3af0c1) {
  let _0x22686c = new Set();
  return (
    new Set([
      ...Object.keys(_0x2afec5.widgets),
      ...Object.keys(_0x3af0c1.widgets),
    ]).forEach((_0x524bc3) => {
      let _0x210041 = _0x2afec5.widgets[_0x524bc3],
        _0x4907dd = _0x3af0c1.widgets[_0x524bc3];
      JSON.stringify(_0x210041) !== JSON.stringify(_0x4907dd) &&
        (_0x210041 && _0x22686c.add(_0x210041.type),
        _0x4907dd && _0x22686c.add(_0x4907dd.type));
    }),
    [..._0x22686c]
  );
}
const z = {
    id: "base-dashboard.command.update-pivot-view",
    type: _0x1e6723.COMMAND,
    handler: (_0x50d760, _0x26c169) => {
      var _0xaf883;
      if (!_0x26c169) return false;
      let _0x59fd0e = _0x50d760
          .get(_0x5b4847)
          .getUnit(_0x26c169.unitId, _0x3caae3.UNIVER_BASE),
        _0x4da460 =
          _0x59fd0e == null ||
          (_0xaf883 = _0x59fd0e.getSnapshot().tables[_0x26c169.tableId]) == null
            ? undefined
            : _0xaf883.views[_0x26c169.viewId];
      if (
        !_0x59fd0e ||
        (_0x4da460 == null ? undefined : _0x4da460.type) !== _0x5c3794.Pivot
      )
        return false;
      let _0x4e0182 = _0x59fd0e.getSnapshot(),
        _0x25fd67 = new _0x1e14b7().updateViewConfig(
          _0x4e0182,
          _0x26c169.tableId,
          _0x26c169.viewId,
          _0x26c169.patch,
        ),
        _0x24fc70 = new _0x38ba1b().invertOp(_0x4e0182, _0x25fd67),
        _0xa44bc6 = { unitId: _0x26c169.unitId, op: _0x25fd67 },
        _0x1a0987 = { unitId: _0x26c169.unitId, op: _0x24fc70 };
      return _0x50d760
        .get(_0x26f705)
        .syncExecuteCommand(_0x649562.id, _0xa44bc6)
        ? (_0x50d760
            .get(_0x4a2956)
            .pushUndoRedo({
              unitID: _0x26c169.unitId,
              redoMutations: [{ id: _0x649562.id, params: _0xa44bc6 }],
              undoMutations: [{ id: _0x649562.id, params: _0x1a0987 }],
            }),
          true)
        : false;
    },
  },
  B = {
    id: "base-dashboard.command.upsert-widget",
    type: _0x1e6723.COMMAND,
    handler: (_0x3cc516, _0x56396a) => {
      if (!_0x56396a) return false;
      let _0x39cb40 = _0x3cc516
          .get(A)
          .getDashboard(_0x56396a.unitId, _0x56396a.dashboardId),
        _0x281f4a = _0x3cc516
          .get(_0x5b4847)
          .getUnit(_0x56396a.unitId, _0x3caae3.UNIVER_BASE);
      if (!_0x39cb40 || !_0x281f4a || !tt(_0x281f4a, _0x56396a.widget))
        return false;
      let _0x2efbd0 = _0x39cb40.widgetOrder["indexOf"](_0x56396a.widget["id"]),
        _0x4686db = _0x39cb40.widgets[_0x56396a.widget["id"]],
        _0x327ec2 = _0x39cb40.widgetOrder["filter"](
          (_0x21c62d) => _0x21c62d !== _0x56396a.widget["id"],
        ),
        _0x340376 = _0x2efbd0 >= 0 ? _0x2efbd0 : _0x327ec2.length;
      (_0x56396a.index !== undefined &&
        (_0x340376 = Math.max(0, Math.min(_0x56396a.index, _0x327ec2.length))),
        _0x327ec2.splice(_0x340376, 0, _0x56396a.widget["id"]));
      let _0x104768 = _0x56396a.index !== undefined && _0x340376 !== _0x2efbd0,
        _0x425e7d = [
          {
            id: I.id,
            params: {
              unitId: _0x56396a.unitId,
              dashboardId: _0x56396a.dashboardId,
              historyAction: _0x2efbd0 >= 0 ? "update-widget" : "create-widget",
              historyWidgetType: _0x56396a.widget["type"],
              patch: {
                widgets: { [_0x56396a.widget["id"]]: _0x56396a.widget },
                ...(_0x104768 ? { widgetOrder: _0x327ec2 } : null),
              },
            },
          },
        ],
        _0x2a647d = [
          {
            id: I.id,
            params: {
              unitId: _0x56396a.unitId,
              dashboardId: _0x56396a.dashboardId,
              historyAction: _0x2efbd0 >= 0 ? "update-widget" : "remove-widget",
              historyWidgetType:
                (_0x4686db == null ? undefined : _0x4686db.type) ??
                _0x56396a.widget["type"],
              patch: {
                widgets: {
                  [_0x56396a.widget["id"]]:
                    _0x39cb40.widgets[_0x56396a.widget["id"]] ?? null,
                },
                ...(_0x104768 ? { widgetOrder: _0x39cb40.widgetOrder } : null),
              },
            },
          },
        ];
      return P(_0x3cc516, _0x56396a.unitId, _0x425e7d, _0x2a647d);
    },
  };
function tt(_0x182f73, _0x2ce7ac) {
  if (_0x2ce7ac.type === F.Text || _0x2ce7ac.type === F.Image) return true;
  let _0x106dbc = _0x182f73.getSnapshot().tables[_0x2ce7ac.tableId];
  if (!_0x106dbc) return false;
  if (_0x2ce7ac.type === F.PivotChart) {
    var _0x53b679;
    return (
      ((_0x53b679 = _0x106dbc.views[_0x2ce7ac.pivotViewId]) == null
        ? undefined
        : _0x53b679.type) === _0x5c3794.Pivot
    );
  }
  return true;
}
var nt = class extends _0x88c5c4 {
  constructor(_0x3780f5, _0x19d65d, _0x26d5df) {
    (super(),
      (this._fieldIds = _0x3780f5),
      (this._headers = _0x19d65d),
      (this._data = _0x26d5df),
      E(this, "_fieldIndex", 0));
  }
  createDataFieldId() {
    let _0x44e2b4 = this._fieldIds[this._fieldIndex];
    return ((this._fieldIndex += 1), _0x44e2b4 ?? super.createDataFieldId());
  }
  getRangeData() {
    return { header: this._headers, data: this._data };
  }
};
function rt(_0x44ea66) {
  let { collection: _0x439deb } = st(_0x44ea66),
    _0x446968 = new _0x122c11(_0x439deb),
    _0x3fda5f = _0x44ea66.fieldOrder["find"]((_0x2af572) =>
      mt(_0x44ea66, _0x2af572),
    ),
    _0xbdbd37 = _0x44ea66.fieldOrder["find"]((_0x1ee001) =>
      ht(_0x44ea66, _0x1ee001),
    );
  return (
    _0x3fda5f &&
      _0x446968.addFieldWithSourceId(
        _0x3fda5f,
        _0x3c873b.Row,
        undefined,
        "row-" + _0x3fda5f,
      ),
    _0xbdbd37 &&
      _0x446968.addFieldWithSourceId(
        _0xbdbd37,
        _0x3c873b.Value,
        undefined,
        "value-" + _0xbdbd37,
      ),
    _0x446968.toJSON()
  );
}
function it(_0x33f58a) {
  return {
    pivot: rt(_0x33f58a),
    chart: { type: _0x5c7c1c.Column, orient: "column" },
    displayMode: "chart-and-table",
  };
}
function at(_0x56a086) {
  let _0x12456b = lt(_0x56a086.table, _0x56a086.filters ?? []),
    { collection: _0x45b735 } = st(_0x56a086.table, _0x12456b),
    _0x3a470f = new _0x122c11(_0x45b735);
  return (_0x3a470f.fromJSON(_0x56a086.pivot), _0x3a470f.query().toJSON());
}
function ot(_0x4cc950, _0x66b70f) {
  let { collection: _0x2bfa86 } = st(_0x4cc950),
    _0x5ed015 = new _0x122c11(_0x2bfa86);
  return (_0x66b70f && _0x5ed015.fromJSON(_0x66b70f), _0x5ed015);
}
function st(_0x49a054, _0x384a65 = ct(_0x49a054)) {
  let _0x39b1e1 = _0x49a054.fieldOrder["flatMap"]((_0x543501) => {
      let _0x404462 = _0x49a054.fields[_0x543501];
      return _0x404462 ? [_0x404462] : [];
    }),
    _0x44ed86 = new nt(
      _0x39b1e1.map((_0x1b6e53) => _0x1b6e53.id),
      _0x39b1e1.map((_0x475631) => _0x475631.name),
      _0x384a65.map((_0x580b9b) =>
        _0x39b1e1.map((_0x41ec98) =>
          dt(_0x580b9b.values[_0x41ec98.id], _0x41ec98),
        ),
      ),
    );
  return {
    manager: _0x44ed86,
    collection: _0x44ed86.createCollection(_0x49a054.id, {
      tableId: _0x49a054.id,
    }),
  };
}
function ct(_0x592a3b) {
  return (
    _0x592a3b.recordOrder ??
    Object.values(_0x592a3b.records)
      .sort((_0x400977, _0x5540ba) =>
        _0x400977.orderKey["localeCompare"](_0x5540ba.orderKey),
      )
      .map((_0x262fa8) => _0x262fa8.id)
  )
    .map((_0x303489) => _0x592a3b.records[_0x303489])
    .filter((_0x25a332) => _0x25a332 !== undefined);
}
function lt(_0x268d30, _0x2e6491) {
  let _0x18fc5a = _0x2e6491.filter(
    (_0x308efb) => !!(_0x308efb != null && _0x308efb.conditions["length"]),
  );
  return _0x18fc5a.length === 0
    ? ct(_0x268d30)
    : ct(_0x268d30).filter((_0x429ffd) =>
        _0x18fc5a.every((_0x26d968) => ut(_0x268d30, _0x429ffd, _0x26d968)),
      );
}
function ut(_0x38cfeb, _0x223afd, _0x3d6557) {
  let _0x32ebd0 = _0x3d6557.conditions["map"]((_0x265df7) => {
    let _0x4933db = _0x38cfeb.fields[_0x265df7.fieldId];
    return _0x4933db
      ? _0x5d3587(
          _0x223afd.values[_0x265df7.fieldId],
          _0x265df7.operator,
          _0x265df7.operand,
          _0x4933db,
        )
      : false;
  });
  return _0x3d6557.conjunction === _0xffeded.OR
    ? _0x32ebd0.some(Boolean)
    : _0x32ebd0.every(Boolean);
}
function dt(_0x2478b6, _0x588eb8) {
  if (ft(_0x588eb8)) {
    let _0x359ebb = _0x13fe5f(_0x2478b6);
    if (_0x359ebb === null) return null;
    let _0x5be426 = _0x220e13(_0x588eb8.config),
      _0x304649 = _0x5be426.hourCycle === "h12" ? " h:mm AM/PM" : " hh:mm";
    return {
      v: _0x359ebb,
      f: "" + _0x5be426.pattern + (_0x5be426.includeTime ? _0x304649 : ""),
    };
  }
  return _0x2478b6 == null ||
    typeof _0x2478b6 == "string" ||
    typeof _0x2478b6 == "number" ||
    typeof _0x2478b6 == "boolean"
    ? _0x2478b6
    : Array.isArray(_0x2478b6)
      ? _0x2478b6.map(pt).join(",\x20")
      : pt(_0x2478b6);
}
function ft(_0x4a1333) {
  return (
    _0x4a1333.type === _0x3e61e4.Date ||
    _0x4a1333.type === _0x3e61e4.CreatedAt ||
    _0x4a1333.type === _0x3e61e4.UpdatedAt
  );
}
function pt(_0x26d632) {
  if (_0x26d632 == null) return "";
  if (
    typeof _0x26d632 == "string" ||
    typeof _0x26d632 == "number" ||
    typeof _0x26d632 == "boolean"
  )
    return String(_0x26d632);
  if (Array.isArray(_0x26d632)) return _0x26d632.map(pt).join(",\x20");
  if (typeof _0x26d632 == "object") {
    let _0x1378c9 = Reflect.get(_0x26d632, "label");
    if (typeof _0x1378c9 == "string") return _0x1378c9;
    let _0x3eaa05 = Reflect.get(_0x26d632, "name");
    if (typeof _0x3eaa05 == "string") return _0x3eaa05;
  }
  return String(_0x26d632);
}
function mt(_0x372075, _0x5371cd) {
  let _0x5135fa = _0x372075.fields[_0x5371cd];
  return !!(
    _0x5135fa &&
    _0x5135fa.system !== true &&
    _0x5135fa.type !== _0x3e61e4.RecordId &&
    _0x5135fa.type !== _0x3e61e4.Attachment &&
    _0x5135fa.type !== _0x3e61e4.Formula
  );
}
function ht(_0x48fb3a, _0x4689fc) {
  var _0x59c2e0;
  let _0x28b61d =
    (_0x59c2e0 = _0x48fb3a.fields[_0x4689fc]) == null
      ? undefined
      : _0x59c2e0.type;
  return (
    _0x28b61d === _0x3e61e4.Number ||
    _0x28b61d === _0x3e61e4.Currency ||
    _0x28b61d === _0x3e61e4.Progress ||
    _0x28b61d === _0x3e61e4.Rating
  );
}
function gt(_0x1d2276) {
  return _0x1d2276 !== "row";
}
function _t(_0x22c714, _0x298fb4 = {}) {
  let _0x3bad20 = new _0x3fdab8();
  _0x3bad20.formJSON(_0x22c714);
  let _0x9064d2 = vt(
      _0x3bad20.rowView["info"],
      _0x3bad20.dataView["getRowCount"](),
    ),
    _0x1f5374 = vt(
      _0x3bad20.colView["info"],
      _0x3bad20.dataView["getColCount"](),
    ),
    _0x225f21 = _0x9064d2.reduce((_0x20de2b, _0x111e2b) => {
      var _0xde1329;
      return Math.max(
        _0x20de2b,
        ((_0xde1329 = _0x3bad20.rowView["info"][_0x111e2b]) == null
          ? undefined
          : _0xde1329.paths["length"]) ?? 0,
      );
    }, 0),
    _0x9cd263 = Math.max(_0x225f21, 1),
    _0x503f7d = Array.from({ length: _0x9cd263 }, (_0x3c28d9, _0xd4cbc1) => {
      var _0x38da9b;
      return (
        ((_0x38da9b = _0x298fb4.rowDimensionNames) == null
          ? undefined
          : _0x38da9b[_0xd4cbc1]) ?? "Category " + (_0xd4cbc1 + 1)
      );
    }),
    _0x167f86 = [],
    _0x5d4f0f = [];
  for (let _0x1c4744 of _0x1f5374) {
    let _0x42ca73 = _0x3bad20.colView["info"][_0x1c4744],
      _0x3da67c =
        (_0x42ca73 == null
          ? undefined
          : _0x42ca73.paths["filter"](Boolean).join(" / ")) ||
        "Value\x20" + (_0x1c4744 + 1);
    _0x503f7d.push(_0x3da67c);
  }
  for (let _0x330709 of _0x9064d2) {
    var _0x5860a4;
    let _0xc1fd88 =
        ((_0x5860a4 = _0x3bad20.rowView["info"][_0x330709]) == null
          ? undefined
          : _0x5860a4.paths) ?? [],
      _0x47997e = [],
      _0x3f7064 = [];
    for (let _0x2e2d03 = 0; _0x2e2d03 < _0x9cd263; _0x2e2d03++) {
      let _0x3a654a =
        _0xc1fd88[_0x2e2d03] ??
        (_0x2e2d03 === 0 ? (_0x298fb4.emptyCategoryLabel ?? "") : "");
      (_0x47997e.push(_0x3a654a), _0x3f7064.push(_0x3a654a));
    }
    for (let _0x2eb8ed of _0x1f5374) {
      let _0x249ceb = yt(_0x3bad20.dataView["getValue"](_0x330709, _0x2eb8ed));
      (_0x47997e.push(_0x249ceb),
        _0x3f7064.push(_0x249ceb == null ? "" : String(_0x249ceb)));
    }
    (_0x167f86.push(_0x47997e), _0x5d4f0f.push(_0x3f7064));
  }
  return { dimensions: _0x503f7d, source: _0x167f86, sourceLabels: _0x5d4f0f };
}
function vt(_0x31278d, _0x5c2c2a) {
  let _0x2cd6ef = [];
  for (let _0x2a0819 = 0; _0x2a0819 < _0x5c2c2a; _0x2a0819++) {
    let _0x5a1c3e = _0x31278d[_0x2a0819];
    !(_0x5a1c3e != null && _0x5a1c3e.isBottomTotal) &&
      !(_0x5a1c3e != null && _0x5a1c3e.isTopTotal) &&
      !(_0x5a1c3e != null && _0x5a1c3e.isSubtotal) &&
      _0x2cd6ef.push(_0x2a0819);
  }
  return _0x2cd6ef.length > 0
    ? _0x2cd6ef
    : Array.from({ length: _0x5c2c2a }, (_0x15a19a, _0x532166) => _0x532166);
}
function yt(_0x184f54) {
  return _0x3046f8(_0x184f54)
    ? _0x184f54.value
    : _0x2da4e2(_0x184f54)
      ? null
      : (_0x184f54 ?? null);
}
var bt = "@univerjs-pro/bases-dashboard",
  xt = "1.0.0-insiders.20260907-70fc579";
const St = {
  id: "base-dashboard.mutation.update-formula-last-value",
  type: _0x1e6723.MUTATION,
  handler: (_0xb24b41, _0x50de6d) => {
    var _0x439433;
    if (!_0x50de6d) return false;
    let _0x5abdfa = _0xb24b41.get(A),
      _0x49d60d = _0x5abdfa.getDashboard(
        _0x50de6d.unitId,
        _0x50de6d.dashboardId,
      ),
      _0x2cb0b5 =
        _0x49d60d == null ? undefined : _0x49d60d.widgets[_0x50de6d.widgetId];
    if (
      !_0x49d60d ||
      (_0x2cb0b5 == null ? undefined : _0x2cb0b5.type) !== F.FormulaShape ||
      !_0x39e503(
        _0xb24b41,
        {
          hostType: _0x3caae3.UNIVER_BASE,
          unitId: _0x50de6d.unitId,
          subUnitId: _0x50de6d.dashboardId,
          shapeId: _0x50de6d.widgetId,
        },
        (_0x439433 = _0x2cb0b5.shapeData["formulaBinding"]) == null
          ? undefined
          : _0x439433.formula,
        _0x50de6d.guard,
      )
    )
      return false;
    let _0x111886 = _0x2cb0b5.shapeData["formulaBinding"];
    return _0x111886
      ? (_0x5abdfa.setDashboard(_0x50de6d.unitId, {
          ..._0x49d60d,
          widgets: {
            ..._0x49d60d.widgets,
            [_0x2cb0b5.id]: {
              ..._0x2cb0b5,
              shapeData: {
                ..._0x2cb0b5.shapeData,
                formulaBinding: {
                  ..._0x111886,
                  lastValue: _0x51972d.deepClone(_0x50de6d.lastValue),
                },
              },
            },
          },
        }),
        true)
      : false;
  },
};
let V = class extends _0x3f5960 {
  constructor(_0x493378, _0x52cc46, _0xab8fff, _0x25abd7) {
    (super(),
      (this._commandService = _0x493378),
      (this._instanceService = _0xab8fff),
      (this._resourceService = _0x25abd7),
      E(this, "hostType", _0x3caae3.UNIVER_BASE),
      E(this, "shapeChanged$", undefined),
      (this.shapeChanged$ = this._resourceService["change$"].pipe(
        _0x26a000((_0x820b47) => _0x820b47 !== null),
        _0x50cd7b((_0x4f6113) => ({ unitId: _0x4f6113.unitId })),
      )),
      this.disposeWithMe(_0x52cc46.register(this)));
  }
  getShape(_0x52fb98) {
    let _0x350bbf = this._getWidget(_0x52fb98);
    return _0x350bbf ? this._toSnapshot(_0x52fb98, _0x350bbf) : null;
  }
  listShapes(_0x18fa0f) {
    let _0x3a175f = this._resourceService["getDashboard"](
      _0x18fa0f.unitId,
      _0x18fa0f.subUnitId,
    );
    return (
      (_0x3a175f == null
        ? undefined
        : _0x3a175f.widgetOrder["map"](
            (_0x531f2d) => _0x3a175f.widgets[_0x531f2d],
          )
            .filter(
              (_0xa5972d) =>
                (_0xa5972d == null ? undefined : _0xa5972d.type) ===
                F.FormulaShape,
            )
            .map((_0x23a399) =>
              this._toSnapshot(
                { ..._0x18fa0f, shapeId: _0x23a399.id },
                _0x23a399,
              ),
            )) ?? []
    );
  }
  listShapesInUnit(_0x4e4675) {
    return this._resourceService["getResource"](_0x4e4675).dashboardOrder[
      "flatMap"
    ]((_0x4d155f) =>
      this.listShapes({
        hostType: this.hostType,
        unitId: _0x4e4675,
        subUnitId: _0x4d155f,
      }),
    );
  }
  createShape(_0x5cfdcf, _0x54b4de) {
    let _0x3e48a5 = this._instanceService["getUnit"](
        _0x5cfdcf.unitId,
        _0x3caae3.UNIVER_BASE,
      ),
      _0x2256d6 =
        _0x3e48a5 == null ? undefined : _0x3e48a5.getSnapshot().tableOrder[0];
    if (
      !_0x2256d6 ||
      !this._resourceService["getDashboard"](
        _0x5cfdcf.unitId,
        _0x5cfdcf.subUnitId,
      )
    )
      return null;
    let _0x595875 = Ct(_0x54b4de.transform),
      _0x3b2592 = {
        id: "formula-shape-" + _0x3670e1(8),
        type: F.FormulaShape,
        tableId: _0x2256d6,
        layout: wt(_0x595875),
        shapeType: _0x54b4de.shapeType,
        shapeData: _0x51972d.deepClone(_0x54b4de.shapeData ?? _0x47c16d()),
        ...(_0x54b4de.name ? { title: _0x54b4de.name } : null),
      };
    return this._commandService["syncExecuteCommand"](B.id, {
      unitId: _0x5cfdcf.unitId,
      dashboardId: _0x5cfdcf.subUnitId,
      widget: _0x3b2592,
    })
      ? this._toSnapshot({ ..._0x5cfdcf, shapeId: _0x3b2592.id }, _0x3b2592)
      : null;
  }
  updateShape(_0x444bdf, _0x599397) {
    let _0x14b598 = this._getWidget(_0x444bdf);
    if (!_0x14b598) return false;
    let _0xb1146e = {
        ...this._toSnapshot(_0x444bdf, _0x14b598).transform,
        ..._0x599397.transform,
      },
      _0x3a5faa = {
        ..._0x14b598,
        ...(_0x599397.name === undefined ? null : { title: _0x599397.name }),
        layout: wt(_0xb1146e),
        shapeType: _0x599397.shapeType ?? _0x14b598.shapeType,
        shapeData: _0x51972d.deepClone(
          _0x599397.shapeData ?? _0x14b598.shapeData,
        ),
      };
    return this._commandService["syncExecuteCommand"](B.id, {
      unitId: _0x444bdf.unitId,
      dashboardId: _0x444bdf.subUnitId,
      widget: _0x3a5faa,
    });
  }
  createFormulaLastValueMutation(_0x206a56, _0x63fbc2, _0x5a09e4) {
    return this._getWidget(_0x206a56)
      ? {
          id: St.id,
          params: {
            unitId: _0x206a56.unitId,
            dashboardId: _0x206a56.subUnitId,
            widgetId: _0x206a56.shapeId,
            guard: _0x63fbc2,
            lastValue: _0x5a09e4,
          },
        }
      : null;
  }
  removeShape(_0x342b34) {
    return this._commandService["syncExecuteCommand"](L.id, {
      unitId: _0x342b34.unitId,
      dashboardId: _0x342b34.subUnitId,
      widgetId: _0x342b34.shapeId,
    });
  }
  bringToFront(_0x2d134f) {
    let _0x33d21b = this._resourceService["getDashboard"](
      _0x2d134f.unitId,
      _0x2d134f.subUnitId,
    );
    return _0x33d21b
      ? this.setZOrder(_0x2d134f, _0x33d21b.widgetOrder["length"] - 1)
      : false;
  }
  bringForward(_0x4ed98e) {
    return this._move(_0x4ed98e, 1);
  }
  sendBackward(_0x3956a5) {
    return this._move(_0x3956a5, -1);
  }
  sendToBack(_0x13f8c3) {
    return this.setZOrder(_0x13f8c3, 0);
  }
  setZOrder(_0x372ea1, _0x1fe9b1) {
    let _0x47fab8 = this._resourceService["getDashboard"](
      _0x372ea1.unitId,
      _0x372ea1.subUnitId,
    );
    if (!(_0x47fab8 != null && _0x47fab8.widgets[_0x372ea1.shapeId]))
      return false;
    let _0x57f439 = _0x47fab8.widgetOrder["filter"](
      (_0x1306e9) => _0x1306e9 !== _0x372ea1.shapeId,
    );
    return (
      _0x57f439.splice(
        Math.max(0, Math.min(_0x1fe9b1, _0x57f439.length)),
        0,
        _0x372ea1.shapeId,
      ),
      this._commandService["syncExecuteCommand"](R.id, {
        unitId: _0x372ea1.unitId,
        dashboard: { ..._0x47fab8, widgetOrder: _0x57f439 },
      })
    );
  }
  _move(_0x5d527d, _0x22997b) {
    let _0x45db36 = this._resourceService["getDashboard"](
        _0x5d527d.unitId,
        _0x5d527d.subUnitId,
      ),
      _0x443245 =
        (_0x45db36 == null
          ? undefined
          : _0x45db36.widgetOrder["indexOf"](_0x5d527d.shapeId)) ?? -1;
    return _0x443245 < 0
      ? false
      : this.setZOrder(_0x5d527d, _0x443245 + _0x22997b);
  }
  _getWidget(_0x27a838) {
    var _0x3889c5;
    let _0x5cf390 =
      (_0x3889c5 = this._resourceService["getDashboard"](
        _0x27a838.unitId,
        _0x27a838.subUnitId,
      )) == null
        ? undefined
        : _0x3889c5.widgets[_0x27a838.shapeId];
    return (_0x5cf390 == null ? undefined : _0x5cf390.type) === F.FormulaShape
      ? _0x5cf390
      : null;
  }
  _toSnapshot(_0xfb9da5, _0x35cff6) {
    return {
      ..._0xfb9da5,
      shapeType: _0x35cff6.shapeType,
      shapeData: _0x51972d.deepClone(_0x35cff6.shapeData),
      name: _0x35cff6.title,
      transform: Tt(_0x35cff6),
      visible: true,
      selectable: true,
    };
  }
};
V = O(
  [D(0, _0x26f705), D(1, _0x42460b), D(2, _0x5b4847), D(3, _0x29d71e(A))],
  V,
);
function Ct(_0x275017) {
  return {
    left: (_0x275017 == null ? undefined : _0x275017.left) ?? 0,
    top: (_0x275017 == null ? undefined : _0x275017.top) ?? 0,
    width: (_0x275017 == null ? undefined : _0x275017.width) ?? 4,
    height: (_0x275017 == null ? undefined : _0x275017.height) ?? 3,
    rotation: (_0x275017 == null ? undefined : _0x275017.rotation) ?? 0,
    flipX: (_0x275017 == null ? undefined : _0x275017.flipX) ?? false,
    flipY: (_0x275017 == null ? undefined : _0x275017.flipY) ?? false,
  };
}
function wt(_0x5e6a5f) {
  let _0x2f0152 = Math.max(0, Math.min(11, Math.round(_0x5e6a5f.left)));
  return {
    column: _0x2f0152,
    row: Math.max(0, Math.round(_0x5e6a5f.top)),
    columnSpan: Math.max(
      1,
      Math.min(12 - _0x2f0152, Math.round(_0x5e6a5f.width)),
    ),
    rowSpan: Math.max(1, Math.round(_0x5e6a5f.height)),
  };
}
function Tt(_0x533ffa) {
  return {
    left: _0x533ffa.layout["column"],
    top: _0x533ffa.layout["row"],
    width: _0x533ffa.layout["columnSpan"],
    height: _0x533ffa.layout["rowSpan"],
    rotation: 0,
    flipX: false,
    flipY: false,
  };
}
const Et = {},
  Dt = new Set([Je.id, Xe.id, L.id, R.id, z.id, B.id, I.id, M.id, N.id]);
let H = class extends _0x3f5960 {
  constructor(_0x371d96, _0x4096f0, _0x122bf4) {
    (super(),
      (this._permissionService = _0x4096f0),
      (this._instanceService = _0x122bf4),
      this.disposeWithMe(
        _0x371d96.beforeCommandExecuted((_0x5852a8, _0x2cfc21) =>
          this._check(_0x5852a8, _0x2cfc21),
        ),
      ));
  }
  _check(_0x18c7b4, _0x4767c7) {
    if (
      (_0x4767c7 != null && _0x4767c7.fromCollab) ||
      (_0x4767c7 != null && _0x4767c7.fromChangeset) ||
      !Dt.has(_0x18c7b4.id)
    )
      return;
    let _0x22a03e = At(_0x18c7b4.params) ? _0x18c7b4.params : undefined;
    if (!_0x22a03e) return;
    let _0x25e1f7 =
      typeof (_0x22a03e == null ? undefined : _0x22a03e.unitId) == "string"
        ? _0x22a03e.unitId
        : undefined;
    if (
      !_0x25e1f7 ||
      this._instanceService["getUnitType"](_0x25e1f7) !== _0x3caae3.UNIVER_BASE
    )
      return;
    let _0xa65c7c = _0x18c7b4.id === z.id ? Ot(_0x22a03e) : kt(_0x22a03e);
    if (!_0x22289f(this._permissionService, _0x25e1f7, _0xa65c7c))
      throw new _0xded9be("Base dashboard edit permission denied.");
  }
};
H = O([D(0, _0x26f705), D(1, _0x577f0b), D(2, _0x5b4847)], H);
function Ot(_0x28616e) {
  let _0x4d8995 =
      typeof _0x28616e.tableId == "string" ? _0x28616e.tableId : undefined,
    _0x56f5f9 =
      typeof _0x28616e.viewId == "string" ? _0x28616e.viewId : undefined;
  return _0x4d8995 && _0x56f5f9
    ? [_0x5e59e2(_0x4d8995), _0x167d33(_0x4d8995, _0x56f5f9)]
    : [];
}
function kt(_0x36380d) {
  let _0x2358b1 =
    typeof _0x36380d.dashboardId == "string"
      ? _0x36380d.dashboardId
      : At(_0x36380d.dashboard) && typeof _0x36380d.dashboard["id"] == "string"
        ? _0x36380d.dashboard["id"]
        : undefined;
  return _0x2358b1 ? [_0x2d0be5(_0x2358b1)] : [];
}
function At(_0x43f7fc) {
  return (
    typeof _0x43f7fc == "object" && !!_0x43f7fc && !Array.isArray(_0x43f7fc)
  );
}
let U = class extends _0x3f5960 {
  constructor(_0x24968d, _0x4a05df) {
    (super(),
      (this._resourceManagerService = _0x24968d),
      (this._resourceService = _0x4a05df),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"]({
          pluginName: We,
          businesses: [_0x3caae3.UNIVER_BASE],
          toJson: (_0x1c832c) =>
            this._resourceService["serializeUnit"](_0x1c832c),
          parseJson: jt,
          onLoad: (_0x4f25dd, _0x3740ce) =>
            this._resourceService["loadUnit"](_0x4f25dd, _0x3740ce),
          onUnLoad: (_0x23a170) =>
            this._resourceService["unloadUnit"](_0x23a170),
        }),
      ));
  }
};
U = O([D(0, _0x36aeae), D(1, _0x29d71e(A))], U);
function jt(_0x5a8f53) {
  let _0x572668;
  try {
    _0x572668 = JSON.parse(_0x5a8f53);
  } catch {
    return j();
  }
  if (
    !W(_0x572668) ||
    !Array.isArray(_0x572668.dashboardOrder) ||
    !W(_0x572668.dashboards)
  )
    return j();
  let _0x3f3dce = j(),
    _0x5e9d5c = new Set();
  for (let _0x3e0fbc of _0x572668.dashboardOrder) {
    if (typeof _0x3e0fbc != "string" || _0x5e9d5c.has(_0x3e0fbc)) continue;
    let _0x1644f3 = _0x572668.dashboards[_0x3e0fbc];
    if (
      !W(_0x1644f3) ||
      _0x1644f3.id !== _0x3e0fbc ||
      typeof _0x1644f3.name != "string" ||
      !Array.isArray(_0x1644f3.widgetOrder) ||
      !W(_0x1644f3.widgets)
    )
      continue;
    let _0x255d99 = Object.fromEntries(
        Object.entries(_0x1644f3.widgets).filter(
          (_0x3b065b) => Mt(_0x3b065b[1]) && _0x3b065b[0] === _0x3b065b[1].id,
        ),
      ),
      _0x116867 = new Set(Object.keys(_0x255d99)),
      _0x5ba364 = new Set(),
      _0x59de0a = _0x1644f3.widgetOrder["filter"]((_0x674446) =>
        typeof _0x674446 != "string" ||
        !_0x116867.has(_0x674446) ||
        _0x5ba364.has(_0x674446)
          ? false
          : (_0x5ba364.add(_0x674446), true),
      );
    for (let _0x3a42f4 of _0x116867)
      _0x5ba364.has(_0x3a42f4) || _0x59de0a.push(_0x3a42f4);
    (_0x5e9d5c.add(_0x3e0fbc),
      _0x3f3dce.dashboardOrder["push"](_0x3e0fbc),
      (_0x3f3dce.dashboards[_0x3e0fbc] = {
        id: _0x3e0fbc,
        name: _0x1644f3.name,
        widgetOrder: _0x59de0a,
        widgets: _0x255d99,
      }));
  }
  return _0x3f3dce;
}
function W(_0x5ab400) {
  return (
    typeof _0x5ab400 == "object" && !!_0x5ab400 && !Array.isArray(_0x5ab400)
  );
}
function Mt(_0x21e443) {
  if (!W(_0x21e443) || typeof _0x21e443.id != "string" || !Pt(_0x21e443.layout))
    return false;
  switch (_0x21e443.type) {
    case F.PivotChart:
      return (
        typeof _0x21e443.tableId == "string" &&
        typeof _0x21e443.pivotViewId == "string"
      );
    case F.TableFilter:
      return (
        typeof _0x21e443.tableId == "string" &&
        (_0x21e443.filter === null || Nt(_0x21e443.filter))
      );
    case F.Text:
      return W(_0x21e443.document);
    case F.Image:
      return (
        typeof _0x21e443.source == "string" &&
        Object.values(_0x36e0a5).some(
          (_0xec26ba) => _0xec26ba === _0x21e443.sourceType,
        )
      );
    case F.FormulaShape:
      return (
        typeof _0x21e443.tableId == "string" &&
        typeof _0x21e443.shapeType == "string" &&
        W(_0x21e443.shapeData) &&
        W(_0x21e443.shapeData["formulaBinding"]) &&
        typeof _0x21e443.shapeData["formulaBinding"].formula == "string"
      );
    default:
      return false;
  }
}
function Nt(_0x18c208) {
  if (
    !W(_0x18c208) ||
    (_0x18c208.conjunction !== _0xffeded.AND &&
      _0x18c208.conjunction !== _0xffeded.OR) ||
    !Array.isArray(_0x18c208.conditions)
  )
    return false;
  let _0x29e049 = Object.values(_0x3120ae);
  return _0x18c208.conditions["every"](
    (_0x4719ff) =>
      W(_0x4719ff) &&
      typeof _0x4719ff.fieldId == "string" &&
      _0x29e049.some((_0x28a8b5) => _0x28a8b5 === _0x4719ff.operator),
  );
}
function Pt(_0x13876f) {
  return (
    W(_0x13876f) &&
    typeof _0x13876f.column == "number" &&
    typeof _0x13876f.row == "number" &&
    typeof _0x13876f.columnSpan == "number" &&
    typeof _0x13876f.rowSpan == "number"
  );
}
let G = class extends _0x3f5960 {
  constructor(_0x385d9d, _0x410cea) {
    (super(),
      (this._commandService = _0x385d9d),
      (this._instanceService = _0x410cea),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x1266a3) => {
          if (!Ft(_0x1266a3, C)) return;
          let _0x2760e5 = _0x1266a3.params,
            _0x1d1266 = this._instanceService["getUnit"](
              _0x2760e5.unitId,
              _0x3caae3.UNIVER_BASE,
            ),
            _0x166292 =
              _0x1d1266 == null
                ? undefined
                : _0x1d1266.getSnapshot().tables[_0x2760e5.tableId];
          if (!_0x166292) return;
          let _0x2aa5a6 = at({
            table: _0x166292,
            pivot: _0x2760e5.pivot,
            filters: _0x2760e5.filters,
          });
          return this._commandService["executeCommand"](
            w.id,
            {
              requestId: _0x2760e5.requestId,
              unitId: _0x2760e5.unitId,
              tableId: _0x2760e5.tableId,
              viewId: _0x2760e5.viewId,
              view: _0x2aa5a6,
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
G = O([D(0, _0x29d71e(_0x26f705)), D(1, _0x29d71e(_0x5b4847))], G);
function Ft(_0x1da6cd, _0x174d49) {
  return _0x1da6cd.id === _0x174d49.id && _0x1da6cd.params !== undefined;
}
let K = class extends _0x3f5960 {
  constructor(_0x49dd60, _0x61b138) {
    (super(),
      this.disposeWithMe(
        _0x49dd60.onCommandExecuted((_0x34530e) => {
          It(_0x34530e, w) && _0x61b138.handleResponse(_0x34530e.params);
        }),
      ));
  }
};
K = O([D(0, _0x29d71e(_0x26f705)), D(1, _0x29d71e(k))], K);
function It(_0x1d083d, _0x172ffd) {
  return _0x1d083d.id === _0x172ffd.id && _0x1d083d.params !== undefined;
}
let q = class extends _0x3f5960 {
  constructor(_0xfb86ab, _0x20f46b) {
    super();
    let _0xeebd5c = Lt();
    (this.disposeWithMe(_0xfb86ab.register(_0xeebd5c)),
      this.disposeWithMe(_0x20f46b.registerView(_0xeebd5c)));
  }
};
q = O([D(0, _0x29d71e(_0x3656d5)), D(1, _0x29d71e(_0xbe07f4))], q);
function Lt() {
  return {
    type: _0x5c3794.Pivot,
    i18nKey: "bases-dashboard.pivotView.name",
    createDefaultConfig: it,
    validateConfig: (_0x1a465e, _0x4da145) => Rt(_0x4da145.config),
    buildProjection: () => ({ type: "custom", viewType: _0x5c3794.Pivot }),
    repairConfig: (_0x189f5a, _0x28f8b6) =>
      Rt(_0x28f8b6.config).valid
        ? { repaired: false, view: _0x28f8b6 }
        : { repaired: true, view: { ..._0x28f8b6, config: it(_0x189f5a) } },
  };
}
function Rt(_0x4f9dfb) {
  return !_0x4f9dfb.pivot ||
    !_0x4f9dfb.chart ||
    !["chart-and-table", "chart", "table"].includes(_0x4f9dfb.displayMode)
    ? { valid: false, reason: "invalidPivotConfig" }
    : { valid: true };
}
const J = { Loading: "loading", Ready: "ready", Error: "error" };
var zt = class extends _0x2a48af {
  constructor(_0x592027, _0x443ec8, _0x33682a, _0xa34c1c) {
    (super(),
      (this._rpcService = _0x33682a),
      (this._instanceService = _0xa34c1c),
      E(this, "_scope$", undefined),
      E(this, "_state$", new _0x25504d({ status: J.Loading })),
      E(this, "_result$", new _0x25504d(null)),
      E(this, "_requestGeneration", 0),
      E(this, "_isDisposed", false),
      E(this, "scope$", undefined),
      E(this, "state$", this._state$["asObservable"]()),
      E(this, "result$", this._result$["asObservable"]()),
      (this._scope$ = new _0x25504d(_0x592027)),
      (this.scope$ = this._scope$["asObservable"]()),
      this.updateIsRowDirection(_0x443ec8));
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
  setScope(_0x4006e0) {
    this._isDisposed || this._scope$["next"](_0x4006e0);
  }
  setRowDirection(_0x2483d8) {
    this._isDisposed || this.updateIsRowDirection(_0x2483d8);
  }
  async refresh() {
    let _0x3aea65 = ++this._requestGeneration,
      _0x54c01e = this.scope;
    this._state$["next"]({ status: J.Loading });
    let _0x1cbdbb = this._getPivotView(_0x54c01e);
    if (!_0x1cbdbb) {
      let _0x2f0bf8 = Error(
        "Base\x20pivot\x20view\x20not\x20found.\x20" + _0x54c01e.viewId,
      );
      throw (this._publishError(_0x3aea65, _0x2f0bf8), _0x2f0bf8);
    }
    let _0x2e860e;
    try {
      _0x2e860e = await this._rpcService["calculate"]({
        unitId: _0x54c01e.unitId,
        tableId: _0x54c01e.tableId,
        viewId: _0x54c01e.viewId,
        pivot: _0x1cbdbb.config["pivot"],
        filters: _0x54c01e.filters,
      });
    } catch (_0x932c84) {
      throw (this._publishError(_0x3aea65, _0x932c84), _0x932c84);
    }
    this._isCurrentRequest(_0x3aea65) &&
      (this.initData(
        _t(_0x2e860e.view, {
          rowDimensionNames: _0x1cbdbb.config["pivot"].rowFields["map"](
            (_0x17b408) => {
              var _0x5c56be;
              return (
                ((_0x5c56be = _0x1cbdbb.config["pivot"].dimension[_0x17b408]) ==
                null
                  ? undefined
                  : _0x5c56be.displayName) ?? _0x17b408
              );
            },
          ),
        }),
        this.isRowDirection,
      ),
      this._result$["next"](_0x2e860e),
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
  _getPivotView(_0x2ed9ee) {
    var _0x7ca595;
    let _0xcca52 = this._instanceService["getUnit"](
      _0x2ed9ee.unitId,
      _0x3caae3.UNIVER_BASE,
    );
    return Bt(
      _0xcca52 == null ||
        (_0x7ca595 = _0xcca52.getSnapshot().tables[_0x2ed9ee.tableId]) == null
        ? undefined
        : _0x7ca595.views[_0x2ed9ee.viewId],
    );
  }
  _publishError(_0x4d605e, _0x443547) {
    this._isCurrentRequest(_0x4d605e) &&
      this._state$["next"]({ status: J.Error, error: _0x443547 });
  }
  _isCurrentRequest(_0x9d45d6) {
    return !this._isDisposed && this._requestGeneration === _0x9d45d6;
  }
};
function Bt(_0x31e826) {
  return (_0x31e826 == null ? undefined : _0x31e826.type) === _0x5c3794.Pivot &&
    typeof _0x31e826.config == "object" &&
    _0x31e826.config !== null &&
    "pivot" in _0x31e826.config &&
    "chart" in _0x31e826.config
    ? _0x31e826
    : undefined;
}
let Y = class extends _0x3f5960 {
  constructor(_0xbcfeee, _0x13099f, _0x2219ca) {
    (super(),
      (this._injector = _0xbcfeee),
      (this._rpcService = _0x13099f),
      (this._instanceService = _0x2219ca),
      E(this, "_records", new Map()),
      this.disposeWithMe(
        this._instanceService["unitDisposed$"].subscribe((_0x91f3b3) => {
          this.removeUnit(_0x91f3b3.getUnitId());
        }),
      ));
  }
  acquireChartRuntime(_0x5ae30e, _0xf8cd7e, _0x3f49e2) {
    var _0x14ee2e;
    let _0x57f2d0 =
      _0x3f49e2 ??
      ((_0x14ee2e = this._getPivotView(_0xf8cd7e)) == null
        ? undefined
        : _0x14ee2e.config["chart"]);
    if (!_0x57f2d0) return;
    let _0x574a8e = this._getRecord(_0xf8cd7e.unitId, _0x5ae30e);
    if (_0x574a8e)
      return (
        _0x574a8e.consumerCount++,
        this._updateRecord(_0x574a8e, _0xf8cd7e, _0x57f2d0),
        _0x574a8e.runtime
      );
    let _0x8dbcea = new zt(
        _0xf8cd7e,
        gt(_0x57f2d0.orient),
        this._rpcService,
        this._instanceService,
      ),
      _0xfadcdd = new _0x2b641a(
        _0x5ae30e,
        {
          dataSource: _0x8dbcea,
          chartType: _0x57f2d0.type,
          style: _0x57f2d0.style,
          dataAggregation: _0x57f2d0.dataAggregation,
        },
        this._injector,
      );
    _0xfadcdd.init();
    let _0x5e0de3 = {
        unitId: _0xf8cd7e.unitId,
        chartId: _0x5ae30e,
        dataSourceId: _0x5ae30e,
        model: _0xfadcdd,
      },
      _0x4fa032 = {
        runtime: _0x5e0de3,
        source: _0x8dbcea,
        consumerCount: 1,
        refreshRevision: 0,
        authoredContext: _0x57f2d0.context,
      };
    return (
      this._getOrCreateUnitRecords(_0xf8cd7e.unitId).set(_0x5ae30e, _0x4fa032),
      this._replaceGeneratedContext(_0x4fa032, _0x57f2d0.context),
      _0x5e0de3
    );
  }
  getChartRuntime(_0x58032b, _0x51a83d) {
    var _0x2c4f61;
    return (_0x2c4f61 = this._getRecord(_0x58032b, _0x51a83d)) == null
      ? undefined
      : _0x2c4f61.runtime;
  }
  async refreshChartRuntime(_0x257fd3, _0x2f1e01, _0x261fe5, _0x268b0a) {
    var _0x2efa09;
    let _0x21bf9e = this._getRecord(_0x257fd3, _0x2f1e01),
      _0x5f1498 =
        _0x268b0a ??
        ((_0x2efa09 = this._getPivotView(_0x261fe5)) == null
          ? undefined
          : _0x2efa09.config["chart"]);
    if (!_0x21bf9e || !_0x5f1498)
      throw Error("Base chart runtime not found. " + _0x2f1e01);
    this._updateRecord(_0x21bf9e, _0x261fe5, _0x5f1498);
    let _0x5ba32f = ++_0x21bf9e.refreshRevision;
    return (
      await _0x21bf9e.source["refresh"](),
      this._getRecord(_0x257fd3, _0x2f1e01) === _0x21bf9e &&
        _0x21bf9e.refreshRevision === _0x5ba32f &&
        this._replaceGeneratedContext(_0x21bf9e, _0x21bf9e.authoredContext),
      _0x21bf9e.source["result"] ?? undefined
    );
  }
  releaseChartRuntime(_0x4dd079, _0x265dec) {
    let _0x38d644 = this._getRecord(_0x4dd079, _0x265dec);
    return !_0x38d644 ||
      (_0x38d644.consumerCount--, _0x38d644.consumerCount > 0)
      ? false
      : (this._removeRecord(_0x4dd079, _0x265dec, _0x38d644), true);
  }
  removeUnit(_0x1b3bcf) {
    let _0x2821cc = this._records["get"](_0x1b3bcf);
    _0x2821cc &&
      Array.from(_0x2821cc.entries()).forEach(([_0x4c1f43, _0x2b8f71]) => {
        this._removeRecord(_0x1b3bcf, _0x4c1f43, _0x2b8f71);
      });
  }
  dispose() {
    (Array.from(this._records["keys"]()).forEach((_0x2edd51) =>
      this.removeUnit(_0x2edd51),
    ),
      super.dispose());
  }
  _updateRecord(_0x41c4cf, _0x97526d, _0x41d528) {
    ((_0x41c4cf.authoredContext = _0x41d528.context),
      _0x41c4cf.source["setScope"](_0x97526d),
      _0x41c4cf.source["setRowDirection"](gt(_0x41d528.orient)),
      _0x41c4cf.runtime["model"].setChartType(_0x41d528.type),
      _0x41c4cf.runtime["model"].setStyle(_0x41d528.style ?? {}),
      _0x41c4cf.runtime["model"].setDataAggregation(
        _0x41d528.dataAggregation ?? {},
      ),
      this._replaceGeneratedContext(_0x41c4cf, _0x41d528.context));
  }
  _replaceGeneratedContext(_0x4f1b26, _0x3238b2) {
    _0x4f1b26.runtime["model"].setChartContext(
      _0x3238b2 === undefined
        ? _0x47c6e0(
            _0x4f1b26.source["getDataSet"](),
            _0x4f1b26.runtime["model"].context,
            _0x4f1b26.runtime["model"].chartType,
          )
        : _0x1535d6(_0x4f1b26.source["getDataSet"](), _0x3238b2, false),
    );
  }
  _getPivotView(_0x164884) {
    var _0x3dc4ed;
    let _0x50261a = this._instanceService["getUnit"](
      _0x164884.unitId,
      _0x3caae3.UNIVER_BASE,
    );
    return Vt(
      _0x50261a == null ||
        (_0x3dc4ed = _0x50261a.getSnapshot().tables[_0x164884.tableId]) == null
        ? undefined
        : _0x3dc4ed.views[_0x164884.viewId],
    );
  }
  _getRecord(_0x34cc8d, _0x398132) {
    var _0x4e0d81;
    return (_0x4e0d81 = this._records["get"](_0x34cc8d)) == null
      ? undefined
      : _0x4e0d81.get(_0x398132);
  }
  _getOrCreateUnitRecords(_0x1b155e) {
    let _0x759a15 = this._records["get"](_0x1b155e);
    return (
      _0x759a15 ||
        ((_0x759a15 = new Map()), this._records["set"](_0x1b155e, _0x759a15)),
      _0x759a15
    );
  }
  _removeRecord(_0x54bd28, _0x2f6b43, _0x5c4b27) {
    let _0x382580 = this._records["get"](_0x54bd28);
    !_0x382580 ||
      _0x382580.get(_0x2f6b43) !== _0x5c4b27 ||
      (_0x382580.delete(_0x2f6b43),
      _0x382580.size === 0 && this._records["delete"](_0x54bd28),
      _0x5c4b27.runtime["model"].dispose(),
      _0x5c4b27.source["dispose"]());
  }
};
Y = O([D(0, _0x29d71e(_0x2f4f7b)), D(1, _0x29d71e(k)), D(2, _0x5b4847)], Y);
function Vt(_0x226dce) {
  return (_0x226dce == null ? undefined : _0x226dce.type) === _0x5c3794.Pivot &&
    typeof _0x226dce.config == "object" &&
    _0x226dce.config !== null &&
    "pivot" in _0x226dce.config &&
    "chart" in _0x226dce.config
    ? _0x226dce
    : undefined;
}
let X = class {
  constructor(_0x31e4e1, _0x44ff8a, _0x445b3e, _0x52abd3) {
    ((this.resourceService = _0x31e4e1),
      (this.commandService = _0x44ff8a),
      (this.permissionService = _0x445b3e),
      (this.instanceService = _0x52abd3));
  }
};
X = O(
  [D(0, _0x29d71e(A)), D(1, _0x26f705), D(2, _0x577f0b), D(3, _0x5b4847)],
  X,
);
const Z = [C, w],
  Ht = [N, I, M, St],
  Ut = [...Z, ...Ht];
let Q = class extends _0x729070 {
  constructor(_0x327fa5 = Et, _0x1ba386, _0x12bffe, _0x988d6a, _0x201e8d) {
    (super(),
      (this._config = _0x327fa5),
      (this._injector = _0x1ba386),
      (this._commandService = _0x12bffe),
      (this._configService = _0x988d6a),
      (this._dataSyncPrimaryController = _0x201e8d));
    let { ..._0x217638 } = _0x408b2c({}, Et, this._config);
    (this._configService["setConfig"]("bases-dashboard.config", _0x217638),
      this._registerCommands());
  }
  onStarting() {
    let _0x1984a6 = this._config["notExecuteCalculation"],
      _0x5a2d00;
    ((_0x5a2d00 =
      _0x1984a6 === true
        ? [[A], [U], [H], [q], [k], [Y], [K], [V], [X]]
        : _0x1984a6 === false
          ? [[G]]
          : [[A], [U], [H], [q], [k], [Y], [K], [V], [X], [G]]),
      _0x5a2d00.forEach((_0x35ca41) => this._injector["add"](_0x35ca41)),
      _0x1984a6 !== false &&
        _0x5a82e2(this._injector, [
          [A],
          [U],
          [H],
          [q],
          [k],
          [Y],
          [K],
          [V],
          [X],
        ]),
      _0x1984a6 !== true && _0x5a82e2(this._injector, [[G]]));
  }
  _registerCommands() {
    ([He, Je, R, Xe, B, L, z, ...Ut].forEach((_0x141127) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x141127)),
    ),
      Z.forEach((_0x269180) => {
        var _0x9b64;
        return (_0x9b64 = this._dataSyncPrimaryController) == null
          ? undefined
          : _0x9b64.registerSyncingMutations(_0x269180);
      }));
  }
};
(E(Q, "type", _0x3caae3.UNIVER_BASE),
  E(Q, "pluginName", We),
  E(Q, "packageName", bt),
  E(Q, "version", xt),
  (Q = O(
    [
      _0x3ad9e8(_0x4bfe3d, _0x2bf356, _0x5366df, _0x348665, _0x4bf85a),
      D(1, _0x29d71e(_0x2f4f7b)),
      D(2, _0x29d71e(_0x26f705)),
      D(3, _0x448c86),
      D(4, _0x562a89(_0x1b8139)),
    ],
    Q,
  )));
let $ = class extends _0x729070 {
  constructor(_0x5b275b = {}, _0x9eb5f9, _0x1cf9dd) {
    (super(),
      (this._injector = _0x9eb5f9),
      Z.forEach((_0x408118) => {
        this.disposeWithMe(_0x1cf9dd.registerCommand(_0x408118));
      }));
  }
  onStarting() {
    (this._injector["add"]([G]), _0x5a82e2(this._injector, [[G]]));
  }
};
(E($, "type", _0x3caae3.UNIVER_BASE),
  E($, "pluginName", "REMOTE_BASES_DASHBOARD_PLUGIN"),
  E($, "packageName", bt),
  E($, "version", xt),
  ($ = O(
    [
      _0x3ad9e8(_0x21033e),
      D(1, _0x29d71e(_0x2f4f7b)),
      D(2, _0x29d71e(_0x26f705)),
    ],
    $,
  )));
export {
  qe as BASES_DASHBOARD_DEFAULT_ROW_HEIGHT,
  Ke as BASES_DASHBOARD_GRID_COLUMNS,
  We as BASES_DASHBOARD_PLUGIN,
  Ge as BASES_DASHBOARD_RESOURCE_VERSION,
  Y as BaseChartRuntimeService,
  X as BaseDashboardAPIContextService,
  Ze as BaseDashboardHistoryAction,
  A as BaseDashboardResourceService,
  F as BaseDashboardWidgetType,
  k as BasePivotRPCService,
  He as CalculateBasePivotCommand,
  Je as CreateBaseDashboardCommand,
  Xe as DeleteBaseDashboardCommand,
  L as RemoveBaseDashboardWidgetCommand,
  Q as UniverBaseDashboardPlugin,
  $ as UniverRemoteBaseDashboardPlugin,
  R as UpdateBaseDashboardCommand,
  z as UpdateBasePivotViewCommand,
  B as UpsertBaseDashboardWidgetCommand,
  _t as adaptPivotViewToChartDataSet,
  at as calculateBasePivot,
  Re as canEditBaseDashboard,
  ze as canEditBasePivotView,
  ot as createBasePivotTable,
  rt as createDefaultBasePivotSnapshot,
  it as createDefaultBasePivotViewConfig,
  gt as resolveBasePivotChartRowDirection,
};
