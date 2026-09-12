Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/bases-history"),
  t = require("@univerjs-pro/bases-ui"),
  n = require("@univerjs-pro/collaboration-client"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs/core"),
  a = require("@univerjs-pro/edit-history"),
  o = require("@univerjs/protocol"),
  s = require("@univerjs/ui"),
  c = require("@univerjs-pro/bases"),
  l = require("@univerjs-pro/bases-dashboard"),
  u = require("@univerjs-pro/bases-dashboard-ui"),
  d = require("@univerjs-pro/collaboration"),
  ee = require("@univerjs-pro/engine-formula"),
  f = require("@univerjs/engine-render"),
  te = require("@univerjs/network"),
  p = require("rxjs"),
  m = require("@univerjs-pro/edit-history-ui"),
  h = require("@univerjs/design"),
  g = require("react/jsx-runtime"),
  _ = require("@univerjs/icons");
const v = "bases-history-ui.config",
  y = { historyServerUrl: "/universer-api/history" };
var b = "@univerjs-pro/bases-history-ui",
  x = "1.0.0-insiders.20260907-70fc579";
function S(_0x374f50, _0xf12d8a) {
  return function (_0x1dbb8b, _0x47c25f) {
    _0xf12d8a(_0x1dbb8b, _0x47c25f, _0x374f50);
  };
}
function C(_0x402649, _0x1f8de4, _0x98bb59, _0x1e08ab) {
  var _0x1d1b01 = arguments.length,
    _0x13c893 =
      _0x1d1b01 < 3
        ? _0x1f8de4
        : _0x1e08ab === null
          ? (_0x1e08ab = Object.getOwnPropertyDescriptor(_0x1f8de4, _0x98bb59))
          : _0x1e08ab,
    _0x1f3374;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x13c893 = Reflect.decorate(_0x402649, _0x1f8de4, _0x98bb59, _0x1e08ab);
  else {
    for (var _0x2cb080 = _0x402649.length - 1; _0x2cb080 >= 0; _0x2cb080--)
      (_0x1f3374 = _0x402649[_0x2cb080]) &&
        (_0x13c893 =
          (_0x1d1b01 < 3
            ? _0x1f3374(_0x13c893)
            : _0x1d1b01 > 3
              ? _0x1f3374(_0x1f8de4, _0x98bb59, _0x13c893)
              : _0x1f3374(_0x1f8de4, _0x98bb59)) || _0x13c893);
  }
  return (
    _0x1d1b01 > 3 &&
      _0x13c893 &&
      Object.defineProperty(_0x1f8de4, _0x98bb59, _0x13c893),
    _0x13c893
  );
}
let w = class extends i.Disposable {
  constructor(_0x282e5a, _0x2366db, _0x4a8f54, _0x51fee4) {
    (super(),
      (this._authzIoService = _0x2366db),
      (this._stateService = _0x4a8f54),
      (this._univerInstanceService = _0x51fee4),
      this.disposeWithMe(
        _0x282e5a.register({
          type: i.UniverInstanceType["UNIVER_BASE"],
          canView: (_0x229478) =>
            this._hasPermission(_0x229478, o.UnitAction["ViewHistory"]),
          canRevert: (_0x15f4e4) =>
            !!this._getBase(_0x15f4e4) &&
            this._hasPermission(_0x15f4e4, o.UnitAction["RecoverHistory"]),
          captureLocation: () => this._captureLocation(),
          restoreLocation: (_0x33a7c2, _0x54bc26) =>
            this._restoreLocation(
              _0x33a7c2,
              ne(_0x54bc26) ? _0x54bc26 : undefined,
            ),
        }),
      ));
  }
  _captureLocation() {
    let _0x18cd82 = this._stateService["getState"]();
    return {
      tableId: _0x18cd82.activeTableId,
      viewId: _0x18cd82.activeViewId,
      selection: _0x18cd82.selection,
    };
  }
  _restoreLocation(_0x1b950f, _0x29aa50) {
    let _0x55946f = this._getBase(_0x1b950f),
      _0xeb2cb3 =
        _0x29aa50 != null &&
        _0x29aa50.tableId &&
        _0x55946f != null &&
        _0x55946f.getSnapshot().tables[_0x29aa50.tableId]
          ? _0x29aa50.tableId
          : _0x55946f == null
            ? undefined
            : _0x55946f.getSnapshot().tableOrder[0];
    if (!_0xeb2cb3) return;
    let _0x2dc2a1 =
        _0x55946f == null
          ? undefined
          : _0x55946f.getSnapshot().tables[_0xeb2cb3],
      _0x93def =
        _0x29aa50 != null &&
        _0x29aa50.viewId &&
        _0x2dc2a1 != null &&
        _0x2dc2a1.views[_0x29aa50.viewId]
          ? _0x29aa50.viewId
          : _0x2dc2a1 == null
            ? undefined
            : _0x2dc2a1.viewOrder[0];
    (this._stateService["activateTable"](_0xeb2cb3),
      _0x93def && this._stateService["activateView"](_0x93def),
      this._stateService["setSelection"](
        (_0x29aa50 == null ? undefined : _0x29aa50.selection) ?? null,
      ),
      this._univerInstanceService["focusUnit"](_0x1b950f));
  }
  _getBase(_0x3f823b) {
    return (
      this._univerInstanceService["getUnit"](
        _0x3f823b,
        i.UniverInstanceType["UNIVER_BASE"],
      ) ?? null
    );
  }
  async _hasPermission(_0x3770af, _0x46fc68) {
    return (
      await this._authzIoService["allowed"]({
        unitID: _0x3770af,
        objectID: _0x3770af,
        objectType: o.UnitObject["Base"],
        actions: [_0x46fc68],
      })
    ).some((_0x38cb9f) => _0x38cb9f.action === _0x46fc68 && _0x38cb9f.allowed);
  }
};
w = C(
  [
    S(0, (0, i.Inject)(a.HistoryUnitAdapterRegistryService)),
    S(1, i.IAuthzIoService),
    S(2, t.IBaseUIStateService),
    S(3, i.IUniverInstanceService),
  ],
  w,
);
function ne(_0x233d47) {
  return typeof _0x233d47 == "object" && !!_0x233d47;
}
const T = "BASE_HISTORY_DELETION_BADGE";
function re({ popup: _0x30896e }) {
  let { count: _0xc1a016, labels: _0x1746f4 } = _0x30896e.extraProps;
  return (0, g.jsx)(h.Tooltip, {
    placement: "right",
    title: (0, g.jsxs)("div", {
      className: "univer-flex univer-max-w-80 univer-flex-col univer-gap-1",
      children: [
        _0x1746f4
          .slice(0, 10)
          .map((_0x3f0f5f) =>
            (0, g.jsx)(
              "div",
              { className: "univer-truncate", children: _0x3f0f5f },
              _0x3f0f5f,
            ),
          ),
        _0x1746f4.length > 10 &&
          (0, g.jsx)("div", { children: "+" + (_0x1746f4.length - 10) }),
      ],
    }),
    children: (0, g.jsx)("div", {
      "aria-label": _0x1746f4.join(",\x20"),
      children: (0, g.jsx)(h.Badge, {
        className:
          "!univer-border-red-800 !univer-bg-red-50 !univer-px-1.5 !univer-py-0.5 !univer-text-red-800 dark:!univer-border-red-400 dark:!univer-bg-red-950 dark:!univer-text-red-300",
        children: "−" + _0xc1a016,
      }),
    }),
  });
}
let E = class extends i.Disposable {
  constructor(_0x377049) {
    (super(), this.disposeWithMe(_0x377049.register(T, re)));
  }
};
E = C([S(0, (0, i.Inject)(s.ComponentManager))], E);
const D = new Map([
    [
      i.BaseViewType["Grid"],
      {
        create: "bases-history-ui.action.createGridView",
        delete: "bases-history-ui.action.deleteGridView",
      },
    ],
    [
      i.BaseViewType["Kanban"],
      {
        create: "bases-history-ui.action.createKanbanView",
        delete: "bases-history-ui.action.deleteKanbanView",
      },
    ],
    [
      i.BaseViewType["Calendar"],
      {
        create: "bases-history-ui.action.createCalendarView",
        delete: "bases-history-ui.action.deleteCalendarView",
      },
    ],
    [
      i.BaseViewType["Gantt"],
      {
        create: "bases-history-ui.action.createGanttView",
        delete: "bases-history-ui.action.deleteGanttView",
      },
    ],
    [
      i.BaseViewType["Gallery"],
      {
        create: "bases-history-ui.action.createGalleryView",
        delete: "bases-history-ui.action.deleteGalleryView",
      },
    ],
    [
      i.BaseViewType["Pivot"],
      {
        create: "bases-history-ui.action.createPivotView",
        delete: "bases-history-ui.action.deletePivotView",
      },
    ],
  ]),
  O = new Map([
    [
      l.BaseDashboardWidgetType["PivotChart"],
      {
        create: "bases-history-ui.action.createDashboardPivotChartWidget",
        update: "bases-history-ui.action.updateDashboardPivotChartWidget",
        remove: "bases-history-ui.action.removeDashboardPivotChartWidget",
      },
    ],
    [
      l.BaseDashboardWidgetType["TableFilter"],
      {
        create: "bases-history-ui.action.createDashboardTableFilterWidget",
        update: "bases-history-ui.action.updateDashboardTableFilterWidget",
        remove: "bases-history-ui.action.removeDashboardTableFilterWidget",
      },
    ],
    [
      l.BaseDashboardWidgetType["Text"],
      {
        create: "bases-history-ui.action.createDashboardTextWidget",
        update: "bases-history-ui.action.updateDashboardTextWidget",
        remove: "bases-history-ui.action.removeDashboardTextWidget",
      },
    ],
    [
      l.BaseDashboardWidgetType["Image"],
      {
        create: "bases-history-ui.action.createDashboardImageWidget",
        update: "bases-history-ui.action.updateDashboardImageWidget",
        remove: "bases-history-ui.action.removeDashboardImageWidget",
      },
    ],
    [
      l.BaseDashboardWidgetType["FormulaShape"],
      {
        create: "bases-history-ui.action.createDashboardFormulaShapeWidget",
        update: "bases-history-ui.action.updateDashboardFormulaShapeWidget",
        remove: "bases-history-ui.action.removeDashboardFormulaShapeWidget",
      },
    ],
  ]),
  ie = new Map([
    [c.SetBaseNameCommand["id"], "bases-history-ui.action.renameBase"],
    [c.CreateBaseTableCommand["id"], "bases-history-ui.action.createTable"],
    [c.DeleteBaseTableCommand["id"], "bases-history-ui.action.deleteTable"],
    [c.RenameBaseTableCommand["id"], "bases-history-ui.action.renameTable"],
    [c.CreateBaseViewCommand["id"], "bases-history-ui.action.createView"],
    [c.DeleteBaseViewCommand["id"], "bases-history-ui.action.deleteView"],
    [c.RenameBaseViewCommand["id"], "bases-history-ui.action.renameView"],
    [c.MoveBaseViewCommand["id"], "bases-history-ui.action.moveView"],
    [c.CreateBaseRecordCommand["id"], "bases-history-ui.action.createRecord"],
    [
      c.CreateBaseChildRecordCommand["id"],
      "bases-history-ui.action.createRecord",
    ],
    [
      c.BatchCreateBaseRecordsCommand["id"],
      "bases-history-ui.action.createRecord",
    ],
    [c.DeleteBaseRecordCommand["id"], "bases-history-ui.action.deleteRecord"],
    [
      c.BatchDeleteBaseRecordsCommand["id"],
      "bases-history-ui.action.deleteRecord",
    ],
    [
      c.DuplicateBaseRecordCommand["id"],
      "bases-history-ui.action.duplicateRecord",
    ],
    [
      c.MoveBaseHierarchyRecordCommand["id"],
      "bases-history-ui.action.moveRecord",
    ],
    [
      c.UpdateBaseRecordOrderCommand["id"],
      "bases-history-ui.action.moveRecord",
    ],
    [c.UpdateBaseCellCommand["id"], "bases-history-ui.action.updateValues"],
    [
      c.SetBaseRecordValuesCommand["id"],
      "bases-history-ui.action.updateValues",
    ],
    [c.SetBaseRangeValuesCommand["id"], "bases-history-ui.action.updateValues"],
    [c.CreateBaseFieldCommand["id"], "bases-history-ui.action.createField"],
    [c.DeleteBaseFieldCommand["id"], "bases-history-ui.action.deleteField"],
    [
      c.DuplicateBaseFieldCommand["id"],
      "bases-history-ui.action.duplicateField",
    ],
    [c.MoveBaseFieldCommand["id"], "bases-history-ui.action.moveField"],
    [
      c.ChangeBaseFieldTypeCommand["id"],
      "bases-history-ui.action.changeFieldType",
    ],
    [c.UpdateBaseFieldCommand["id"], "bases-history-ui.action.updateField"],
    [
      c.UpdateBaseFieldDescriptionCommand["id"],
      "bases-history-ui.action.updateFieldDescription",
    ],
    [
      c.SetBaseViewFieldOrderCommand["id"],
      "bases-history-ui.action.reorderFields",
    ],
    [
      c.SetBaseViewFieldVisibleCommand["id"],
      "bases-history-ui.action.updateFieldVisibility",
    ],
    [
      c.SetBaseViewFieldWidthCommand["id"],
      "bases-history-ui.action.resizeFields",
    ],
    [c.SetBaseViewFilterCommand["id"], "bases-history-ui.action.updateFilter"],
    [c.SetBaseViewGroupCommand["id"], "bases-history-ui.action.updateGroup"],
    [c.SetBaseViewSortCommand["id"], "bases-history-ui.action.updateSort"],
    [
      c.UpdateBaseViewConditionalColorRulesCommand["id"],
      "bases-history-ui.action.updateConditionalColoring",
    ],
    [
      c.UpdateBaseViewConfigCommand["id"],
      "bases-history-ui.action.configureView",
    ],
    [
      c.EnsureBaseTemporalViewDateFieldsCommand["id"],
      "bases-history-ui.action.configureView",
    ],
    [
      c.SetBaseKanbanGroupFieldCommand["id"],
      "bases-history-ui.action.configureKanban",
    ],
    [
      c.UpdateBaseKanbanConfigCommand["id"],
      "bases-history-ui.action.configureKanban",
    ],
    [
      c.SetBaseTableHierarchyFieldCommand["id"],
      "bases-history-ui.action.configureHierarchy",
    ],
    [
      l.UpdateBasePivotViewCommand["id"],
      "bases-history-ui.action.updatePivotView",
    ],
    [
      l.CreateBaseDashboardCommand["id"],
      "bases-history-ui.action.createDashboard",
    ],
    [
      l.DeleteBaseDashboardCommand["id"],
      "bases-history-ui.action.deleteDashboard",
    ],
    [
      l.UpdateBaseDashboardCommand["id"],
      "bases-history-ui.action.updateDashboard",
    ],
    [
      l.UpsertBaseDashboardWidgetCommand["id"],
      "bases-history-ui.action.updateDashboardWidget",
    ],
    [
      l.RemoveBaseDashboardWidgetCommand["id"],
      "bases-history-ui.action.removeDashboardWidget",
    ],
  ]);
let k = class extends i.Disposable {
  constructor(_0x3fc1fa, _0x1a630e) {
    (super(),
      (this._localeService = _0x1a630e),
      this.disposeWithMe(
        _0x3fc1fa.register(i.UniverInstanceType["UNIVER_BASE"], this),
      ));
  }
  resolve(_0x52acd1) {
    let _0x4740fd = oe(_0x52acd1),
      _0x127d88 = ae(_0x52acd1),
      _0x1b7025 = [
        ..._0x4740fd.map((_0x509641) => this._localeService["t"](_0x509641)),
        ..._0x127d88.map((_0x27b448) => this._localeService["t"](_0x27b448)),
        ...[..._0x52acd1.commandIds].flatMap((_0x4dbb4f) => {
          if (
            (_0x4740fd.length > 0 &&
              (_0x4dbb4f === c.CreateBaseViewCommand["id"] ||
                _0x4dbb4f === c.DeleteBaseViewCommand["id"])) ||
            (_0x127d88.length > 0 &&
              (_0x4dbb4f === l.UpsertBaseDashboardWidgetCommand["id"] ||
                _0x4dbb4f === l.RemoveBaseDashboardWidgetCommand["id"] ||
                _0x4dbb4f === l.UpdateBaseDashboardCommand["id"]))
          )
            return [];
          let _0x1dc435 = ie.get(_0x4dbb4f);
          return _0x1dc435 ? [this._localeService["t"](_0x1dc435)] : [];
        }),
      ],
      _0x2eeedd = [...new Set(_0x1b7025)];
    return _0x2eeedd.length > 0
      ? _0x2eeedd
      : _0x52acd1.commandIds["has"](c.ApplyBaseJson1Mutation["id"])
        ? [this._localeService["t"]("bases-history-ui.action.updateBase")]
        : [];
  }
};
k = C(
  [
    S(0, (0, i.Inject)(m.HistoryActionSummaryService)),
    S(1, (0, i.Inject)(i.LocaleService)),
  ],
  k,
);
function ae(_0x119c82) {
  let _0x1cb81d = _0x119c82.mutations["flatMap"]((_0x1de111) => {
    if (!M(_0x1de111.params)) return [];
    let _0x6dea24 = Array.isArray(_0x1de111.params["historyActions"])
        ? _0x1de111.params["historyActions"].filter(A)
        : [],
      _0x4809b5 = [];
    (_0x6dea24.includes(l.BaseDashboardHistoryAction["RenameDashboard"]) &&
      _0x4809b5.push("bases-history-ui.action.renameDashboard"),
      _0x6dea24.includes(l.BaseDashboardHistoryAction["ReorderWidgets"]) &&
        _0x4809b5.push("bases-history-ui.action.reorderDashboardWidgets"));
    let _0x44493d = Array.isArray(_0x1de111.params["historyWidgetTypes"])
      ? _0x1de111.params["historyWidgetTypes"].filter(j)
      : [];
    if (
      (_0x1de111.params["historyAction"] ===
        l.BaseDashboardHistoryAction["UpdateWidget"] ||
        _0x6dea24.includes(l.BaseDashboardHistoryAction["UpdateWidget"])) &&
      _0x44493d.length > 0
    )
      return (
        _0x4809b5.push(
          ..._0x44493d.flatMap((_0x26eb73) => {
            var _0x5aaf9a;
            let _0xa26477 =
              (_0x5aaf9a = O.get(_0x26eb73)) == null
                ? undefined
                : _0x5aaf9a.update;
            return _0xa26477 ? [_0xa26477] : [];
          }),
        ),
        _0x4809b5
      );
    let _0x13bd93 = j(_0x1de111.params["historyWidgetType"])
      ? O.get(_0x1de111.params["historyWidgetType"])
      : undefined;
    switch (_0x1de111.params["historyAction"]) {
      case l.BaseDashboardHistoryAction["CreateWidget"]:
        return (
          _0x4809b5.push(
            (_0x13bd93 == null ? undefined : _0x13bd93.create) ??
              "bases-history-ui.action.createDashboardWidget",
          ),
          _0x4809b5
        );
      case l.BaseDashboardHistoryAction["UpdateWidget"]:
        return (
          _0x4809b5.push(
            (_0x13bd93 == null ? undefined : _0x13bd93.update) ??
              "bases-history-ui.action.updateDashboardWidget",
          ),
          _0x4809b5
        );
      case l.BaseDashboardHistoryAction["RemoveWidget"]:
        return (
          _0x4809b5.push(
            (_0x13bd93 == null ? undefined : _0x13bd93.remove) ??
              "bases-history-ui.action.removeDashboardWidget",
          ),
          _0x4809b5
        );
      default:
        return _0x4809b5;
    }
  });
  return [...new Set(_0x1cb81d)];
}
function A(_0x2ff0c8) {
  return (
    _0x2ff0c8 === l.BaseDashboardHistoryAction["CreateWidget"] ||
    _0x2ff0c8 === l.BaseDashboardHistoryAction["RenameDashboard"] ||
    _0x2ff0c8 === l.BaseDashboardHistoryAction["ReorderWidgets"] ||
    _0x2ff0c8 === l.BaseDashboardHistoryAction["UpdateWidget"] ||
    _0x2ff0c8 === l.BaseDashboardHistoryAction["RemoveWidget"]
  );
}
function j(_0x3f34fa) {
  return (
    _0x3f34fa === l.BaseDashboardWidgetType["PivotChart"] ||
    _0x3f34fa === l.BaseDashboardWidgetType["TableFilter"] ||
    _0x3f34fa === l.BaseDashboardWidgetType["Text"] ||
    _0x3f34fa === l.BaseDashboardWidgetType["Image"] ||
    _0x3f34fa === l.BaseDashboardWidgetType["FormulaShape"]
  );
}
function oe(_0x496f01) {
  let _0x323bde = [],
    _0x5e190a = new Set();
  return (
    _0x496f01.mutations["forEach"]((_0x3a2617) => {
      if (
        _0x3a2617.id !== c.ApplyBaseJson1Mutation["id"] ||
        !M(_0x3a2617.params)
      )
        return;
      let { historyAction: _0x4b9fdc, viewType: _0x49d8b3 } = _0x3a2617.params;
      if (!se(_0x49d8b3)) return;
      let _0x3574fb = D.get(_0x49d8b3);
      if (_0x3574fb) {
        if (_0x4b9fdc === c.BaseHistoryAction["CreateView"]) {
          _0x323bde.push(_0x3574fb.create);
          return;
        }
        if (_0x4b9fdc === c.BaseHistoryAction["DeleteView"]) {
          _0x323bde.push(_0x3574fb.delete);
          return;
        }
        _0x5e190a.add(_0x49d8b3);
      }
    }),
    _0x323bde.length > 0 ||
      _0x5e190a.forEach((_0x5c43fe) => {
        let _0x3d24f5 = D.get(_0x5c43fe);
        _0x3d24f5 &&
          (_0x496f01.commandIds["has"](c.CreateBaseViewCommand["id"]) &&
            _0x323bde.push(_0x3d24f5.create),
          _0x496f01.commandIds["has"](c.DeleteBaseViewCommand["id"]) &&
            _0x323bde.push(_0x3d24f5.delete));
      }),
    [...new Set(_0x323bde)]
  );
}
function M(_0x48569b) {
  return typeof _0x48569b == "object" && !!_0x48569b;
}
function se(_0x2251d8) {
  return (
    _0x2251d8 === i.BaseViewType["Grid"] ||
    _0x2251d8 === i.BaseViewType["Kanban"] ||
    _0x2251d8 === i.BaseViewType["Calendar"] ||
    _0x2251d8 === i.BaseViewType["Gantt"] ||
    _0x2251d8 === i.BaseViewType["Gallery"] ||
    _0x2251d8 === i.BaseViewType["Pivot"]
  );
}
function N(_0x5dfdba) {
  "@babel/helpers - typeof";
  return (
    (N =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4b228c) {
            return typeof _0x4b228c;
          }
        : function (_0x29e8be) {
            return _0x29e8be &&
              typeof Symbol == "function" &&
              _0x29e8be.constructor === Symbol &&
              _0x29e8be !== Symbol.prototype
              ? "symbol"
              : typeof _0x29e8be;
          }),
    N(_0x5dfdba)
  );
}
function ce(_0x185f29, _0x1f6b01) {
  if (N(_0x185f29) != "object" || !_0x185f29) return _0x185f29;
  var _0x51f115 = _0x185f29[Symbol.toPrimitive];
  if (_0x51f115 !== undefined) {
    var _0x4e1ef2 = _0x51f115.call(_0x185f29, _0x1f6b01 || "default");
    if (N(_0x4e1ef2) != "object") return _0x4e1ef2;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x1f6b01 === "string" ? String : Number)(_0x185f29);
}
function le(_0x3e80d1) {
  var _0x5362d1 = ce(_0x3e80d1, "string");
  return N(_0x5362d1) == "symbol" ? _0x5362d1 : _0x5362d1 + "";
}
function P(_0x158445, _0x2d30b3, _0x44bacc) {
  return (
    (_0x2d30b3 = le(_0x2d30b3)) in _0x158445
      ? Object.defineProperty(_0x158445, _0x2d30b3, {
          value: _0x44bacc,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x158445[_0x2d30b3] = _0x44bacc),
    _0x158445
  );
}
let F = class extends i.Disposable {
  constructor(_0x11d755, _0x1d010d, _0x5b6f03, _0x50585b) {
    (super(),
      (this._renderManagerService = _0x11d755),
      (this._highlightService = _0x1d010d),
      (this._canvasRootResolverService = _0x5b6f03),
      (this._canvasPopupService = _0x50585b),
      P(this, "_generations", new Map()),
      P(this, "_badgeDisposables", new Map()));
  }
  async show(_0x418dd5, _0x264550) {
    let _0x5155fa = (this._generations["get"](_0x418dd5) ?? 0) + 1;
    (this._generations["set"](_0x418dd5, _0x5155fa),
      this._clearDeletionBadges(_0x418dd5));
    let _0x56c37f = await this._getCanvasComponent(_0x418dd5);
    if (this._generations["get"](_0x418dd5) !== _0x5155fa) return;
    if (!_0x56c37f) {
      await this._highlightService["show"](_0x418dd5, []);
      return;
    }
    let _0x18ff88 = _0x56c37f.getController().getHitRegions(),
      _0x2096c9 = _0x56c37f.getRealBound(),
      _0x4ba05b = [],
      _0xb0b7a0 = new Map(),
      _0xd0ae18 = ue(_0x264550);
    (_0xd0ae18
      .filter((_0x5085a5) => ve(_0x18ff88, _0x5085a5))
      .forEach((_0x165b91) => {
        let _0x10243f = K(
          _0x18ff88
            .filter(({ result: _0x3d94fb }) => _e(_0x3d94fb, _0x165b91))
            .map(({ rect: _0x420a33 }) => _0x420a33),
        );
        if (_0x10243f) {
          _0x4ba05b.push({
            id: _0x165b91.id,
            kind: _0x165b91.kind,
            bounds: {
              left: _0x2096c9.left + _0x10243f.left,
              top: _0x2096c9.top + _0x10243f.top,
              width: _0x10243f.width,
              height: _0x10243f.height,
            },
            outlineOnly: _0x165b91.kind === "delete",
          });
          return;
        }
        if (!_0x165b91.recordId && !_0x165b91.fieldId) {
          let _0x97a98b = B(_0x18ff88, _0x2096c9, _0x165b91);
          _0x4ba05b.push({
            id: "base-scope-" + I(_0x165b91),
            kind: _0x165b91.kind,
            bounds: {
              left: _0x2096c9.left + _0x97a98b.left,
              top: _0x2096c9.top + _0x97a98b.top,
              width: _0x97a98b.width,
              height: _0x97a98b.height,
            },
            outlineOnly: true,
          });
          return;
        }
        V(_0x4ba05b, _0xb0b7a0, _0x18ff88, _0x2096c9, _0xd0ae18, _0x165b91);
      }),
      await this._highlightService["show"](_0x418dd5, _0x4ba05b),
      this._generations["get"](_0x418dd5) === _0x5155fa &&
        this._showDeletionBadges(_0x418dd5, Array.from(_0xb0b7a0.values())));
  }
  clear(_0x4517b2) {
    (this._generations["set"](
      _0x4517b2,
      (this._generations["get"](_0x4517b2) ?? 0) + 1,
    ),
      this._clearDeletionBadges(_0x4517b2),
      this._highlightService["clear"](_0x4517b2));
  }
  dispose() {
    (Array.from(this._generations["keys"]()).forEach((_0x29ea3e) =>
      this.clear(_0x29ea3e),
    ),
      super.dispose());
  }
  async _getCanvasComponent(_0xee094b) {
    for (let _0x16c3bf = 0; _0x16c3bf <= 120; _0x16c3bf++) {
      let _0x2505c6 =
          this._renderManagerService["getRenderUnitById"](_0xee094b),
        _0x5d7be1 =
          _0x2505c6 == null
            ? undefined
            : _0x2505c6.scene["getObject"](t.BASE_CANVAS_COMPONENT_KEY),
        _0x4016a5 =
          _0x5d7be1 instanceof t.BaseCanvasRenderComponent
            ? _0x5d7be1
            : _0x2505c6 == null
              ? undefined
              : _0x2505c6.components["get"](t.BASE_CANVAS_COMPONENT_KEY);
      if (
        _0x4016a5 instanceof t.BaseCanvasRenderComponent &&
        _0x4016a5.getController().getHitRegions().length > 0
      )
        return _0x4016a5;
      await ye();
    }
    return null;
  }
  _showDeletionBadges(_0x2de066, _0x7be843) {
    if (_0x7be843.length === 0) return;
    let _0x4b2df2 = this._renderManagerService["getRenderUnitById"](_0x2de066),
      _0x5637e2 = this._canvasRootResolverService["getCanvasRoot"](_0x2de066);
    if (!_0x4b2df2 || !_0x5637e2) return;
    let _0x5eff02 = _0x4b2df2.engine["getCanvasElement"](),
      _0x4e8e3e = new i.DisposableCollection();
    (_0x7be843.forEach((_0x35dd4d) => {
      let _0xd28aca = me(_0x5637e2, _0x35dd4d.bounds),
        _0x2b8180 = new p.BehaviorSubject(_0xd28aca),
        _0x2a2f56 = {
          count: _0x35dd4d.changes["length"],
          labels: fe(_0x35dd4d.changes),
        },
        _0x11754e = this._canvasPopupService["addPopup"]({
          unitId: _0x2de066,
          subUnitId: _0x2de066,
          componentKey: T,
          direction: "top-left",
          anchorRect: _0xd28aca,
          anchorRect$: _0x2b8180,
          canvasElement: _0x5eff02,
          constrainToCanvas: true,
          hideOnInvisible: true,
          extraProps: _0x2a2f56,
        });
      _0x4e8e3e.add({
        dispose: () => {
          (this._canvasPopupService["removePopup"](_0x11754e),
            _0x2b8180.complete());
        },
      });
    }),
      this._badgeDisposables["set"](_0x2de066, _0x4e8e3e));
  }
  _clearDeletionBadges(_0x31e7bc) {
    var _0x9d8166;
    ((_0x9d8166 = this._badgeDisposables["get"](_0x31e7bc)) == null ||
      _0x9d8166.dispose(),
      this._badgeDisposables["delete"](_0x31e7bc));
  }
};
F = C(
  [
    S(0, f.IRenderManagerService),
    S(1, (0, i.Inject)(m.HistoryCanvasHighlightService)),
    S(2, t.IBaseCanvasRootResolverService),
    S(3, (0, i.Inject)(s.ICanvasPopupService)),
  ],
  F,
);
function ue(_0x26c29a) {
  let _0x3c6fab = new Set(
      _0x26c29a
        .filter((_0x52916c) => _0x52916c.recordId && !_0x52916c.fieldId)
        .map((_0x11b195) => L(_0x11b195)),
    ),
    _0x527e61 = new Set(
      _0x26c29a
        .filter((_0x6e392) => _0x6e392.fieldId && !_0x6e392.recordId)
        .map((_0x5c526f) => R(_0x5c526f)),
    ),
    _0xa162ba = new Map();
  return (
    _0x26c29a.forEach((_0x3940e9) => {
      if (
        _0x3940e9.recordId &&
        _0x3940e9.fieldId &&
        (_0x3c6fab.has(L(_0x3940e9)) || _0x527e61.has(R(_0x3940e9)))
      )
        return;
      let _0x4a82da = I(_0x3940e9),
        _0xaedd94 = _0xa162ba.get(_0x4a82da);
      _0xa162ba.set(
        _0x4a82da,
        _0xaedd94
          ? { ..._0xaedd94, kind: de(_0xaedd94.kind, _0x3940e9.kind) }
          : _0x3940e9,
      );
    }),
    Array.from(_0xa162ba.values())
  );
}
function de(_0x2222d3, _0x245e0b) {
  return _0x2222d3 === _0x245e0b
    ? _0x2222d3
    : _0x2222d3 === "update"
      ? _0x245e0b
      : _0x245e0b === "update"
        ? _0x2222d3
        : "update";
}
function I(_0x175860) {
  return [
    _0x175860.tableId,
    _0x175860.viewId,
    _0x175860.recordId,
    _0x175860.fieldId,
  ]
    .map((_0x3c61ad) => _0x3c61ad ?? "")
    .join(":");
}
function L(_0x40b8d0) {
  return [_0x40b8d0.tableId, _0x40b8d0.viewId, _0x40b8d0.recordId]
    .map((_0xc3ff9b) => _0xc3ff9b ?? "")
    .join(":");
}
function R(_0x304d8c) {
  return [_0x304d8c.tableId, _0x304d8c.viewId, _0x304d8c.fieldId]
    .map((_0x51be0c) => _0x51be0c ?? "")
    .join(":");
}
function z(_0x5c8bd9) {
  return [_0x5c8bd9.tableId, _0x5c8bd9.viewId]
    .map((_0x5dab1f) => _0x5dab1f ?? "")
    .join(":");
}
function B(_0x982ae2, _0x429076, _0x599e1c) {
  return (
    K(
      _0x982ae2
        .filter(({ result: _0x8631af }) => G(_0x8631af, _0x599e1c))
        .map(({ rect: _0x353686 }) => _0x353686),
    ) ?? { left: 0, top: 0, width: _0x429076.width, height: _0x429076.height }
  );
}
function V(_0x562359, _0x1cc35d, _0x3cd78a, _0x82018e, _0x33fa5f, _0xd30075) {
  let _0x34ccdb = ge(_0x33fa5f, _0xd30075),
    _0xbeedf4 = he(_0x3cd78a, _0xd30075, _0x34ccdb);
  if (_0xbeedf4) {
    let _0x36c280 = _0xd30075.recordId ? "record" : "field",
      _0x59d28f = z(_0xd30075) + ":" + _0x36c280 + ":" + _0x34ccdb,
      _0x43b309 = _0x1cc35d.get(_0x59d28f);
    if (_0x43b309) {
      _0x43b309.changes["push"](_0xd30075);
      return;
    }
    let _0x51a804 = H(_0x82018e, _0xbeedf4),
      _0x6630e1 = {
        id: "base-deletion-" + _0x59d28f,
        bounds: _0x51a804,
        changes: [_0xd30075],
      };
    (_0x1cc35d.set(_0x59d28f, _0x6630e1),
      _0x562359.push({
        id: _0x6630e1.id,
        kind: _0xd30075.kind,
        bounds: _0x51a804,
      }));
    return;
  }
  let _0x306b75 = B(_0x3cd78a, _0x82018e, _0xd30075);
  _0x562359.push({
    id: "base-missing-scope-" + _0xd30075.kind + "-" + z(_0xd30075),
    kind: _0xd30075.kind,
    bounds: H(_0x82018e, _0x306b75),
    outlineOnly: true,
  });
}
function fe(_0x455cd7) {
  return Array.from(new Set(_0x455cd7.map((_0x5083fc) => pe(_0x5083fc))));
}
function pe(_0x220e20) {
  if (_0x220e20.removedRecord) {
    let _0x1b53e7 = Object.values(_0x220e20.removedRecord["values"]).find(
      (_0x205082) => ["string", "number", "boolean"].includes(typeof _0x205082),
    );
    if (_0x1b53e7 != null) return String(_0x1b53e7);
  }
  return _0x220e20.recordId ?? _0x220e20.fieldId ?? _0x220e20.label;
}
function me(_0x1f22b7, _0x2b4dc7) {
  let _0x310916 = _0x1f22b7.getBoundingClientRect(),
    _0x21210f =
      _0x310916.width > 0 && _0x1f22b7.clientWidth > 0
        ? _0x310916.width / _0x1f22b7.clientWidth
        : 1,
    _0x46dff2 =
      _0x310916.height > 0 && _0x1f22b7.clientHeight > 0
        ? _0x310916.height / _0x1f22b7.clientHeight
        : 1,
    _0x553757 = _0x310916.left + _0x2b4dc7.left * _0x21210f,
    _0x8d62e1 = _0x310916.top + _0x2b4dc7.top * _0x46dff2;
  return {
    left: _0x553757,
    right: _0x553757 + _0x2b4dc7.width * _0x21210f,
    top: _0x8d62e1,
    bottom: _0x8d62e1 + _0x2b4dc7.height * _0x46dff2,
  };
}
function H(_0x42d3dd, _0x1fa6bb) {
  return {
    left: _0x42d3dd.left + _0x1fa6bb.left,
    top: _0x42d3dd.top + _0x1fa6bb.top,
    width: _0x1fa6bb.width,
    height: _0x1fa6bb.height,
  };
}
function he(_0x4e19fd, _0x1af462, _0x5bff59) {
  if (_0x1af462.kind !== "delete" || _0x5bff59 === null) return null;
  let _0x2aab61 = _0x4e19fd.filter(({ result: _0x8ebbdb }) =>
    G(_0x8ebbdb, _0x1af462),
  );
  if (_0x1af462.recordId) {
    let _0x3e270a = U(_0x2aab61, "recordId").sort(
        (_0xe17c5a, _0xc31a3f) => _0xe17c5a.top - _0xc31a3f.top,
      ),
      _0x43a615 = W(_0x3e270a);
    if (!_0x43a615) return null;
    let _0x26246c =
      _0x5bff59 < _0x3e270a.length
        ? _0x3e270a[_0x5bff59].top
        : _0x3e270a[_0x3e270a.length - 1].top +
          _0x3e270a[_0x3e270a.length - 1].height;
    return {
      left: _0x43a615.left,
      top: _0x26246c - 4 / 2,
      width: _0x43a615.width,
      height: 4,
    };
  }
  if (_0x1af462.fieldId) {
    let _0x6e622b = U(_0x2aab61, "fieldId").sort(
        (_0xb3cee8, _0x4594b5) => _0xb3cee8.left - _0x4594b5.left,
      ),
      _0x804046 = W(_0x6e622b);
    return _0x804046
      ? {
          left:
            (_0x5bff59 < _0x6e622b.length
              ? _0x6e622b[_0x5bff59].left
              : _0x6e622b[_0x6e622b.length - 1].left +
                _0x6e622b[_0x6e622b.length - 1].width) -
            4 / 2,
          top: _0x804046.top,
          width: 4,
          height: _0x804046.height,
        }
      : null;
  }
  return null;
}
function ge(_0x799ae7, _0x169b02) {
  let _0x2863e3;
  if (
    (_0x169b02.recordId
      ? (_0x2863e3 = _0x169b02.recordIndex)
      : _0x169b02.fieldId && (_0x2863e3 = _0x169b02.fieldIndex),
    _0x169b02.kind !== "delete" || _0x2863e3 === undefined)
  )
    return null;
  let _0x25c639 = new Set(
    _0x799ae7.flatMap((_0x31ca0f) => {
      if (
        _0x31ca0f.kind !== "delete" ||
        _0x31ca0f.tableId !== _0x169b02.tableId ||
        _0x31ca0f.viewId !== _0x169b02.viewId
      )
        return [];
      let _0x3b29c7 = _0x169b02.recordId
        ? _0x31ca0f.recordIndex
        : _0x31ca0f.fieldIndex;
      return _0x3b29c7 !== undefined && _0x3b29c7 < _0x2863e3
        ? [_0x3b29c7]
        : [];
    }),
  );
  return Math.max(0, _0x2863e3 - _0x25c639.size);
}
function U(_0x45ac18, _0x130f77) {
  let _0x160368 = new Map();
  return (
    _0x45ac18.forEach(({ rect: _0x536b03, result: _0x3c4a45 }) => {
      let _0xdd888c;
      if (
        (_0x130f77 === "recordId" && "recordId" in _0x3c4a45
          ? (_0xdd888c = _0x3c4a45.recordId)
          : _0x130f77 === "fieldId" &&
            "fieldId" in _0x3c4a45 &&
            (_0xdd888c = _0x3c4a45.fieldId),
        typeof _0xdd888c != "string")
      )
        return;
      let _0x2062b3 = _0x160368.get(_0xdd888c) ?? [];
      (_0x2062b3.push(_0x536b03), _0x160368.set(_0xdd888c, _0x2062b3));
    }),
    Array.from(_0x160368.values()).flatMap((_0x363f81) => {
      let _0x34276e = K(_0x363f81);
      return _0x34276e ? [_0x34276e] : [];
    })
  );
}
function W(_0x53f17a) {
  return K(
    _0x53f17a.map((_0x25e54b) => ({
      x: _0x25e54b.left,
      y: _0x25e54b.top,
      width: _0x25e54b.width,
      height: _0x25e54b.height,
    })),
  );
}
function _e(_0x4d9af0, _0x5259c0) {
  return !G(_0x4d9af0, _0x5259c0) ||
    (_0x5259c0.recordId &&
      (!("recordId" in _0x4d9af0) ||
        _0x4d9af0.recordId !== _0x5259c0.recordId)) ||
    (!_0x5259c0.recordId && "recordId" in _0x4d9af0) ||
    (_0x5259c0.fieldId &&
      (!("fieldId" in _0x4d9af0) || _0x4d9af0.fieldId !== _0x5259c0.fieldId))
    ? false
    : _0x5259c0.fieldId
      ? _0x5259c0.recordId !== undefined || _0x4d9af0.type["includes"]("header")
      : _0x5259c0.recordId !== undefined;
}
function G(_0x1b16ca, _0x47c58d) {
  return !(
    (_0x47c58d.tableId &&
      (!("tableId" in _0x1b16ca) || _0x1b16ca.tableId !== _0x47c58d.tableId)) ||
    (_0x47c58d.viewId &&
      (!("viewId" in _0x1b16ca) || _0x1b16ca.viewId !== _0x47c58d.viewId))
  );
}
function ve(_0x2bb671, _0x2b894d) {
  return _0x2bb671.some(({ result: _0x199d92 }) => G(_0x199d92, _0x2b894d));
}
function K(_0x33a7b8) {
  if (_0x33a7b8.length === 0) return null;
  let _0x560109 = Math.min(..._0x33a7b8.map((_0x200afe) => _0x200afe.x)),
    _0x4d3084 = Math.min(..._0x33a7b8.map((_0x1906a3) => _0x1906a3.y)),
    _0x5bb15e = Math.max(
      ..._0x33a7b8.map((_0x1f86cb) => _0x1f86cb.x + _0x1f86cb.width),
    ),
    _0x2948c5 = Math.max(
      ..._0x33a7b8.map((_0x3b1f7b) => _0x3b1f7b.y + _0x3b1f7b.height),
    );
  return {
    left: _0x560109,
    top: _0x4d3084,
    width: _0x5bb15e - _0x560109,
    height: _0x2948c5 - _0x4d3084,
  };
}
function ye() {
  return new Promise((_0x2014e3) => globalThis.setTimeout(_0x2014e3, 16));
}
let q = class extends i.Disposable {
  constructor(
    _0x46f2cf,
    _0x15555d,
    _0x19211e,
    _0x5eea45,
    _0x291bdd,
    _0x2b7df5,
    _0x51ac6e,
    _0x43119a,
  ) {
    (super(),
      (this._diffService = _0x46f2cf),
      (this._snapshotService = _0x19211e),
      (this._commandService = _0x5eea45),
      (this._univerInstanceService = _0x291bdd),
      (this._baseUIStateService = _0x2b7df5),
      (this._logService = _0x51ac6e),
      (this._highlightService = _0x43119a),
      P(this, "type", i.UniverInstanceType["UNIVER_BASE"]),
      P(this, "_changesGeneration", 0),
      P(this, "_loadGeneration", 0),
      P(this, "_loadQueue", Promise.resolve()),
      P(this, "_unitId", ""),
      P(this, "_changes", []),
      this.disposeWithMe(_0x15555d.register(this)),
      this.disposeWithMe(
        (0, i.toDisposable)(
          this._baseUIStateService["state$"]
            .pipe(
              (0, p.map)((_0x14e7ef) => ({
                tableId: _0x14e7ef.activeTableId,
                viewId: _0x14e7ef.activeViewId,
              })),
              (0, p.distinctUntilChanged)(
                (_0x19989c, _0x19eec9) =>
                  _0x19989c.tableId === _0x19eec9.tableId &&
                  _0x19989c.viewId === _0x19eec9.viewId,
              ),
            )
            .subscribe(() => {
              this._unitId &&
                this._highlightService["show"](
                  this._unitId,
                  this._changes,
                ).catch((_0x5d5e24) => {
                  this._logService["error"](
                    "[BasesHistoryRenderAdapterService]: Failed to render Base history highlights.",
                    _0x5d5e24,
                  );
                });
            }),
        ),
      ));
  }
  loadRevision(_0x5bcc64, _0x4d0f22) {
    let _0x359298 = ++this._loadGeneration,
      _0x3ceb9b = this._loadQueue["catch"](() => undefined).then(async () => {
        if (_0x359298 !== this._loadGeneration) return;
        this._getBase(_0x5bcc64) &&
          this._univerInstanceService["disposeUnit"](_0x5bcc64);
        let _0x3a0b6d = await this._snapshotService["loadBase"](
          _0x5bcc64,
          _0x4d0f22.endRevision,
        );
        if (_0x359298 !== this._loadGeneration) {
          this._getBase(_0x5bcc64) === _0x3a0b6d &&
            this._univerInstanceService["disposeUnit"](_0x5bcc64);
          return;
        }
        (await this._activateRevisionLocation(_0x3a0b6d),
          this._univerInstanceService["focusUnit"](_0x5bcc64));
      });
    return ((this._loadQueue = _0x3ceb9b), _0x3ceb9b);
  }
  async loadChanges(_0x4bdb66, _0x543a3) {
    this._unitId = _0x4bdb66;
    let _0x56a75d = ++this._changesGeneration,
      _0x4776c1 = await this._diffService["compare"](_0x4bdb66, _0x543a3);
    _0x56a75d === this._changesGeneration &&
      ((this._changes = _0x4776c1),
      await this._highlightService["show"](_0x4bdb66, _0x4776c1));
  }
  close() {
    (++this._changesGeneration,
      ++this._loadGeneration,
      (this._changes = []),
      (this._unitId &&= (this._highlightService["clear"](this._unitId), "")));
  }
  _getBase(_0x21ec45) {
    return (
      this._univerInstanceService["getUnit"](
        _0x21ec45,
        i.UniverInstanceType["UNIVER_BASE"],
      ) ?? null
    );
  }
  async _activateRevisionLocation(_0x154040) {
    let _0x5aa4be = _0x154040.getSnapshot(),
      _0x4b74d2 = this._baseUIStateService["getState"](),
      _0x4eae8f =
        _0x4b74d2.activeTableId && _0x5aa4be.tables[_0x4b74d2.activeTableId]
          ? _0x4b74d2.activeTableId
          : _0x5aa4be.tableOrder["find"](
              (_0x40010e) => _0x5aa4be.tables[_0x40010e],
            );
    if (!_0x4eae8f) return;
    await this._commandService["executeCommand"](
      t.ActivateBaseTableOperation["id"],
      { unitId: _0x154040.getUnitId(), tableId: _0x4eae8f },
    );
    let _0x45b201 = _0x5aa4be.tables[_0x4eae8f],
      _0x36184 =
        _0x4b74d2.activeViewId && _0x45b201.views[_0x4b74d2.activeViewId]
          ? _0x4b74d2.activeViewId
          : _0x45b201.viewOrder["find"](
              (_0x26d2f1) => _0x45b201.views[_0x26d2f1],
            );
    _0x36184 &&
      (await this._commandService["executeCommand"](
        t.ActivateBaseViewOperation["id"],
        { unitId: _0x154040.getUnitId(), tableId: _0x4eae8f, viewId: _0x36184 },
      ));
  }
};
q = C(
  [
    S(0, (0, i.Inject)(e.BasesHistoryDiffService)),
    S(1, (0, i.Inject)(m.HistoryRenderAdapterRegistryService)),
    S(2, (0, i.Inject)(d.SnapshotService)),
    S(3, i.ICommandService),
    S(4, i.IUniverInstanceService),
    S(5, t.IBaseUIStateService),
    S(6, i.ILogService),
    S(7, (0, i.Inject)(F)),
  ],
  q,
);
let J = class extends m.UniverEditHistoryUIPlugin {
  constructor(_0x39fb19, _0x38d654, _0x4f773e, _0x1e765c) {
    let { collaborationClientConfig: _0x102c24, ..._0xbd027c } = _0x39fb19;
    (super(_0xbd027c, _0x38d654, _0x4f773e, _0x1e765c),
      (this._injector = _0x38d654),
      _0x4f773e.setConfig(n.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, _0x102c24));
  }
  onStarting() {
    (super.onStarting(),
      (0, i.registerDependencies)(this._injector, [
        [
          d.ISnapshotServerService,
          { useClass: n.SnapshotServerOverHTTPService },
        ],
        [E],
        [k],
        [F],
        [q],
      ]),
      this._injector["get"](E),
      this._injector["get"](k),
      this._injector["get"](q));
  }
};
(P(J, "pluginName", "UNIVER_BASES_HISTORY_VIEWER_PLUGIN"),
  P(J, "packageName", b),
  P(J, "version", x),
  P(J, "type", i.UniverInstanceType["UNIVER_UNKNOWN"]),
  (J = C(
    [
      (0, i.DependentOn)(
        r.UniverLicensePlugin,
        e.UniverBasesHistoryPlugin,
        t.UniverBasesUIPlugin,
      ),
      S(1, (0, i.Inject)(i.Injector)),
      S(2, i.IConfigService),
      S(3, i.ILogService),
    ],
    J,
  )));
let Y = class extends i.Disposable {
  constructor(
    _0x16c7dc,
    _0x570ead,
    _0xbd3698,
    _0x17218b,
    _0x4c3e7b,
    _0xd0c02a,
    _0x15feb0,
    _0x350a24,
  ) {
    (super(),
      (this._configService = _0x16c7dc),
      (this._restoreService = _0x570ead),
      (this._adapterRegistry = _0xbd3698),
      (this._localeService = _0x17218b),
      (this._themeService = _0x4c3e7b),
      (this._collaborationController = _0xd0c02a),
      (this._dataLoaderService = _0x15feb0),
      (this._univerInstanceService = _0x350a24),
      P(this, "_historyUniver", null),
      P(this, "_opening", null),
      P(this, "_openGeneration", 0),
      P(this, "_sessionDisposables", new i["DisposableCollection"]()),
      P(this, "_container", null),
      P(this, "_unitId", ""),
      P(this, "_location", undefined));
  }
  open(_0x49a4ce) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let _0x24921e = ++this._openGeneration,
      _0x1ae43d = this._open(_0x49a4ce, _0x24921e).finally(() => {
        this._opening === _0x1ae43d && (this._opening = null);
      });
    return ((this._opening = _0x1ae43d), _0x1ae43d);
  }
  async _open(_0x10c989, _0x46e3b2) {
    let _0x1b908e = this._adapterRegistry["get"](
      i.UniverInstanceType["UNIVER_BASE"],
    );
    if (!_0x1b908e)
      throw Error(
        "[BasesHistoryLoaderService]: Base history adapter is not registered.",
      );
    let _0x151321 = await Promise.all([
      _0x1b908e.canView(_0x10c989),
      _0x1b908e.canRevert(_0x10c989),
    ]).catch((_0x8c2d72) => {
      if (_0x46e3b2 === this._openGeneration) throw _0x8c2d72;
      return null;
    });
    if (!_0x151321 || _0x46e3b2 !== this._openGeneration) return;
    let [_0x49e5ca, _0x2170d3] = _0x151321;
    if (!_0x49e5ca)
      throw Error(
        "[BasesHistoryLoaderService]: The current user cannot view history for this Base.",
      );
    ((this._unitId = _0x10c989),
      (this._location = _0x1b908e.captureLocation(_0x10c989)));
    let _0x7a4a69 = this._ensureContainer();
    _0x7a4a69.style["display"] = "block";
    let _0x3b9c82 = this._localeService["getCurrentLocale"](),
      _0x2f6d7a = this._localeService["getLocales"](),
      _0x49ee01 = new i.Univer({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: _0x3b9c82,
        locales: _0x2f6d7a ? { [_0x3b9c82]: _0x2f6d7a } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[i.IAuthzIoService, { useClass: n.AuthzIoHttpService }]],
      });
    ((this._historyUniver = _0x49ee01),
      this._syncViewerServices(_0x49ee01, _0x7a4a69));
    try {
      (this._registerChildPlugins(_0x49ee01, _0x2170d3, _0x7a4a69),
        this._createPlaceholder(_0x49ee01));
    } catch (_0x41c33e) {
      throw (
        _0x46e3b2 === this._openGeneration ? this.close() : _0x49ee01.dispose(),
        _0x41c33e
      );
    }
  }
  close() {
    (++this._openGeneration,
      (this._opening = null),
      this._sessionDisposables["dispose"]());
    let _0xaec088 = this._historyUniver;
    ((this._historyUniver = null),
      _0xaec088 == null || _0xaec088.dispose(),
      (this._unitId = ""),
      (this._location = undefined),
      this._container && (this._container["style"].display = "none"));
  }
  _syncViewerServices(_0x282244, _0x946f70) {
    let _0x3802c0 = _0x282244.__getInjector(),
      _0x47963a = _0x3802c0.get(i.LocaleService),
      _0x3443ea = _0x3802c0.get(i.ThemeService);
    (this._sessionDisposables["add"](
      this._themeService["darkMode$"].subscribe((_0x14de48) => {
        _0x3443ea.setDarkMode(_0x14de48);
      }),
    ),
      this._sessionDisposables["add"](
        this._themeService["currentTheme$"].subscribe((_0x3a7467) => {
          _0x3443ea.setTheme(_0x3a7467);
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["currentLocale$"].subscribe((_0x19ddcd) => {
          let _0x6a37f = this._localeService["getLocales"]();
          (_0x6a37f && _0x47963a.load({ [_0x19ddcd]: _0x6a37f }),
            _0x47963a.setLocale(_0x19ddcd));
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["direction$"].subscribe((_0xc3b793) => {
          (_0x47963a.setDirection(_0xc3b793),
            (_0x946f70.dir = _0xc3b793),
            (_0x946f70.style["direction"] = _0xc3b793));
        }),
      ));
  }
  async restore(_0x10c960) {
    var _0x50912f;
    let _0x10b98f = this._unitId,
      _0x593fd7 = this._location,
      _0x318471 = this._collaborationController["getCollabEntity"](_0x10b98f);
    if (!_0x318471)
      throw Error(
        "[BasesHistoryLoaderService]: Collaboration is not ready for this Base.",
      );
    let _0x36ace2 = new p.Subject(),
      _0x2572a9 = (0, p.firstValueFrom)(
        _0x318471.session["event$"].pipe(
          (0, p.filter)(
            (_0x349c28) =>
              _0x349c28.eventID === d.CollaborationEvent["CHANGESET_ACK"],
          ),
          (0, p.filter)((_0x559054) =>
            (0, a.isHistoryRestoreAcknowledgement)(_0x559054, _0x10c960),
          ),
          (0, p.takeUntil)(_0x36ace2),
          (0, p.timeout)(10000),
        ),
      );
    try {
      if (
        !(await this._restoreService["restore"](
          _0x10b98f,
          i.UniverInstanceType["UNIVER_BASE"],
          _0x10c960,
        ))
      )
        throw Error(
          "[BasesHistoryLoaderService]: The restore command was not accepted.",
        );
      await _0x2572a9;
    } catch (_0x2edcd0) {
      throw (
        _0x36ace2.next(),
        await _0x2572a9.catch(() => undefined),
        _0x2edcd0
      );
    } finally {
      _0x36ace2.complete();
    }
    (this.close(),
      this._univerInstanceService["disposeUnit"](_0x10b98f),
      await this._dataLoaderService["loadUnit"](
        _0x10b98f,
        i.UniverInstanceType["UNIVER_BASE"],
      ),
      await ((_0x50912f = this._adapterRegistry["get"](
        i.UniverInstanceType["UNIVER_BASE"],
      )) == null
        ? undefined
        : _0x50912f.restoreLocation(_0x10b98f, _0x593fd7)));
  }
  _ensureContainer() {
    var _0x597181;
    if (this._container) return this._container;
    let _0x69f608 = this._configService["getConfig"](v),
      _0x4cb8e8 =
        (_0x597181 = this._configService["getConfig"](
          s.UI_PLUGIN_CONFIG_KEY,
        )) == null
          ? undefined
          : _0x597181.container,
      _0x5406f0 =
        (_0x69f608 == null ? undefined : _0x69f608.univerContainerId) ??
        _0x4cb8e8,
      _0x52d879 =
        typeof _0x5406f0 == "string"
          ? document.getElementById(_0x5406f0)
          : _0x5406f0;
    if (!_0x52d879)
      throw Error(
        "[BasesHistoryLoaderService]: Configure a valid Univer container before opening history.",
      );
    let _0x539132 = document.createElement("div");
    return (
      (_0x539132.style["position"] = "absolute"),
      (_0x539132.style["inset"] = "0"),
      (_0x539132.style["zIndex"] = "49"),
      (_0x539132.style["display"] = "none"),
      _0x52d879.appendChild(_0x539132),
      (this._container = _0x539132),
      _0x539132
    );
  }
  _registerChildPlugins(_0x5c3b67, _0x28f119, _0x1e692e) {
    let _0x59567d = this._configService["getConfig"](r.LS_CONFIG_KEY),
      _0x484a67 = this._configService["getConfig"](v),
      _0x7bcc2e = [
        [
          r.UniverLicensePlugin,
          { license: _0x59567d == null ? undefined : _0x59567d.ls },
        ],
        [f.UniverRenderEnginePlugin],
        [
          s.UniverUIPlugin,
          {
            container: _0x1e692e,
            header: true,
            toolbar: false,
            footer: true,
            contextMenu: false,
          },
        ],
        [te.UniverNetworkPlugin],
        [ee.UniverProFormulaEnginePlugin, { notExecuteFormula: true }],
        [c.UniverBasesPlugin],
        [l.UniverBaseDashboardPlugin],
        [
          t.UniverBasesUIPlugin,
          {
            disableEdit: true,
            initialState: this._getInitialState(),
            override: [
              [
                t.IBaseCanvasRootResolverService,
                {
                  useValue: (0, t.createScopedBaseCanvasRootResolverService)(
                    _0x1e692e,
                  ),
                },
              ],
            ],
          },
        ],
        [u.UniverBaseDashboardUIPlugin],
        [d.UniverCollaborationPlugin],
        [
          a.UniverEditHistoryPlugin,
          {
            historyServerUrl:
              _0x484a67 == null ? undefined : _0x484a67.historyServerUrl,
          },
        ],
        [e.UniverBasesHistoryPlugin],
      ],
      _0x53f519 = new Set();
    ([
      ..._0x7bcc2e,
      ...((_0x484a67 == null ? undefined : _0x484a67.viewerPlugins) ?? []),
    ].forEach(([_0x23861d, _0x5a57e5]) => {
      if (_0x53f519.has(_0x23861d.pluginName))
        throw Error(
          "[BasesHistoryLoaderService]: Plugin " +
            _0x23861d.pluginName +
            " has already been registered.",
        );
      (_0x53f519.add(_0x23861d.pluginName),
        _0x5c3b67.registerPlugin(_0x23861d, _0x5a57e5));
    }),
      _0x5c3b67.registerPlugin(J, {
        viewerMode: true,
        descriptor: {
          unitId: this._unitId,
          type: i.UniverInstanceType["UNIVER_BASE"],
        },
        canRestore: _0x28f119,
        onClose: () => this.close(),
        onRestore: (_0x40bae9) => this.restore(_0x40bae9),
        collaborationClientConfig: this._configService["getConfig"](
          n.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY,
        ),
      }));
  }
  _createPlaceholder(_0x55977d) {
    let _0x292896 = Date.now();
    _0x55977d.createUnit(i.UniverInstanceType["UNIVER_BASE"], {
      id: this._unitId,
      name: "",
      schemaVersion: 1,
      tables: {},
      tableOrder: [],
      createdAt: _0x292896,
      updatedAt: _0x292896,
    });
  }
  _getInitialState() {
    if (!X(this._location)) return;
    let { tableId: _0x2b28a8, viewId: _0xa858bc } = this._location;
    return _0x2b28a8 || _0xa858bc
      ? { tableId: _0x2b28a8, viewId: _0xa858bc }
      : undefined;
  }
  dispose() {
    var _0x2a71a6;
    (this.close(),
      (_0x2a71a6 = this._container) == null || _0x2a71a6.remove(),
      (this._container = null),
      super.dispose());
  }
};
Y = C(
  [
    S(0, i.IConfigService),
    S(1, (0, i.Inject)(a.HistoryRestoreService)),
    S(2, (0, i.Inject)(a.HistoryUnitAdapterRegistryService)),
    S(3, (0, i.Inject)(i.LocaleService)),
    S(4, (0, i.Inject)(i.ThemeService)),
    S(5, (0, i.Inject)(n.CollaborationController)),
    S(6, (0, i.Inject)(n.DataLoaderService)),
    S(7, i.IUniverInstanceService),
  ],
  Y,
);
function X(_0x4cde34) {
  return typeof _0x4cde34 == "object" && !!_0x4cde34;
}
const Z = {
  id: "bases-history-ui.operation.open",
  type: i.CommandType["OPERATION"],
  handler: (_0x14bb2d) => {
    let _0x57d6a5 = _0x14bb2d
      .get(i.IUniverInstanceService)
      .getCurrentUnitOfType(i.UniverInstanceType["UNIVER_BASE"]);
    return _0x57d6a5
      ? (_0x14bb2d
          .get(Y)
          .open(_0x57d6a5.getUnitId())
          .catch((_0x283918) => {
            _0x14bb2d
              .get(i.ILogService)
              .error(
                "[OpenBasesHistoryOperation]: Failed to open Base history.",
                _0x283918,
              );
          }),
        true)
      : false;
  },
};
function be() {
  var _0x1c0a5d;
  let _0x1c531d = (0, s.useDependency)(i.ICommandService),
    _0x4aa1bc = (0, s.useDependency)(i.IConfigService),
    _0x157732 = (0, s.useDependency)(i.LocaleService).t(
      "bases-history-ui.menu.history",
    );
  return (_0x1c0a5d = _0x4aa1bc.getConfig("menu")) != null &&
    (_0x1c0a5d = _0x1c0a5d[Z.id]) != null &&
    _0x1c0a5d.hidden
    ? null
    : (0, g.jsx)(h.Tooltip, {
        title: _0x157732,
        placement: "top",
        children: (0, g.jsx)(h.Button, {
          type: "button",
          variant: "text",
          className: "univer-h-8 univer-w-8 univer-p-0",
          "aria-label": _0x157732,
          onClick: async () => {
            await _0x1c531d.executeCommand(Z.id);
          },
          children: (0, g.jsx)(_.HistoryIcon, {}),
        }),
      });
}
let Q = class extends i.Disposable {
  constructor(_0x1524c5, _0x3503a2, _0x58e987) {
    (super(),
      this.disposeWithMe(_0x1524c5.registerCommand(Z)),
      this.disposeWithMe(
        _0x58e987.registerComponent(t.BASE_TOOLBAR_EXTRA_ACTIONS, () =>
          (0, s.connectInjector)(be, _0x3503a2),
        ),
      ));
  }
};
Q = C(
  [
    S(0, i.ICommandService),
    S(1, (0, i.Inject)(i.Injector)),
    S(2, s.IUIPartsService),
  ],
  Q,
);
let $ = class extends i.Plugin {
  constructor(_0x213b24 = y, _0x4f6e62, _0x179811) {
    (super(),
      (this._config = _0x213b24),
      (this._injector = _0x4f6e62),
      (this._configService = _0x179811));
    let { ..._0x5675da } = (0, i.merge)({}, y, this._config);
    this._configService["setConfig"](v, _0x5675da);
  }
  onStarting() {
    ((0, i.registerDependencies)(this._injector, [[w], [Y], [Q]]),
      this._injector["get"](w),
      this._injector["get"](Q));
  }
};
(P($, "pluginName", "UNIVER_BASES_HISTORY_UI_PLUGIN"),
  P($, "packageName", b),
  P($, "version", x),
  P($, "type", i.UniverInstanceType["UNIVER_BASE"]),
  ($ = C(
    [
      (0, i.DependentOn)(
        r.UniverLicensePlugin,
        n.UniverCollaborationClientPlugin,
        e.UniverBasesHistoryPlugin,
        t.UniverBasesUIPlugin,
      ),
      S(1, (0, i.Inject)(i.Injector)),
      S(2, i.IConfigService),
    ],
    $,
  )),
  (exports.BASES_HISTORY_UI_PLUGIN_CONFIG_KEY = v),
  Object.defineProperty(exports, "UniverBasesHistoryUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
