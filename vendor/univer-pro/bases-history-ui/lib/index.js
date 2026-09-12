import {
  BasesHistoryDiffService as _0x1f1b42,
  UniverBasesHistoryPlugin as _0x1f4b5e,
} from "@univerjs-pro/bases-history";
import {
  ActivateBaseTableOperation as _0x31e1aa,
  ActivateBaseViewOperation as _0x23ce1b,
  BASE_CANVAS_COMPONENT_KEY as _0x59084c,
  BASE_TOOLBAR_EXTRA_ACTIONS as _0x46579f,
  BaseCanvasRenderComponent as _0x40744e,
  IBaseCanvasRootResolverService as _0x11b414,
  IBaseUIStateService as _0x10fde5,
  UniverBasesUIPlugin as _0x31174b,
  createScopedBaseCanvasRootResolverService as _0x59bfa5,
} from "@univerjs-pro/bases-ui";
import {
  AuthzIoHttpService as _0xc673e1,
  COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY as _0x2dba41,
  CollaborationController as _0x2d8d3a,
  DataLoaderService as _0x1853bc,
  SnapshotServerOverHTTPService as _0x36864f,
  UniverCollaborationClientPlugin as _0x188f18,
} from "@univerjs-pro/collaboration-client";
import {
  LS_CONFIG_KEY as _0x4b2309,
  UniverLicensePlugin as _0x548f90,
} from "@univerjs-pro/license";
import {
  BaseViewType as _0x37aebe,
  CommandType as _0x517c9c,
  DependentOn as _0x117a9a,
  Disposable as _0x2a3df2,
  DisposableCollection as _0x11f839,
  IAuthzIoService as _0x2224aa,
  ICommandService as _0x4a21c4,
  IConfigService as _0x1a1d5d,
  ILogService as _0x53e82c,
  IUniverInstanceService as _0x4c84d4,
  Inject as _0x2e85a5,
  Injector as _0x5baa29,
  LocaleService as _0x3f3966,
  Plugin as _0x42c3dc,
  ThemeService as _0x5810cd,
  Univer as _0x303719,
  UniverInstanceType as _0x2b6c89,
  merge as _0x11e3d8,
  registerDependencies as _0x43da4d,
  toDisposable as _0x5339b1,
} from "@univerjs/core";
import {
  HistoryRestoreService as _0x150c37,
  HistoryUnitAdapterRegistryService as _0x52a649,
  UniverEditHistoryPlugin as _0x503747,
  isHistoryRestoreAcknowledgement as _0x361796,
} from "@univerjs-pro/edit-history";
import {
  UnitAction as _0x43309b,
  UnitObject as _0x5cdd93,
} from "@univerjs/protocol";
import {
  ComponentManager as _0x4fd21b,
  ICanvasPopupService as _0x245233,
  IUIPartsService as _0x59a66a,
  UI_PLUGIN_CONFIG_KEY as _0x48ae2c,
  UniverUIPlugin as _0x5a88ec,
  connectInjector as _0x4dff7e,
  useDependency as _0x13d577,
} from "@univerjs/ui";
import {
  ApplyBaseJson1Mutation as _0x142f23,
  BaseHistoryAction as _0x2b8074,
  BatchCreateBaseRecordsCommand as _0x4edb02,
  BatchDeleteBaseRecordsCommand as _0x34c0b6,
  ChangeBaseFieldTypeCommand as _0x1d037b,
  CreateBaseChildRecordCommand as _0x47737d,
  CreateBaseFieldCommand as _0xb2aca8,
  CreateBaseRecordCommand as _0x1a9506,
  CreateBaseTableCommand as _0x1342f5,
  CreateBaseViewCommand as _0x5ddcaa,
  DeleteBaseFieldCommand as _0x57c5e6,
  DeleteBaseRecordCommand as _0x556294,
  DeleteBaseTableCommand as _0x10d2e7,
  DeleteBaseViewCommand as _0x59cf59,
  DuplicateBaseFieldCommand as _0x4df0cd,
  DuplicateBaseRecordCommand as _0x354a99,
  EnsureBaseTemporalViewDateFieldsCommand as _0x289a5e,
  MoveBaseFieldCommand as _0x325b80,
  MoveBaseHierarchyRecordCommand as _0x31c9f0,
  MoveBaseViewCommand as _0x1b8a68,
  RenameBaseTableCommand as _0x5d1d83,
  RenameBaseViewCommand as _0x209f1c,
  SetBaseKanbanGroupFieldCommand as _0x18717e,
  SetBaseNameCommand as _0x312d19,
  SetBaseRangeValuesCommand as _0x378fbe,
  SetBaseRecordValuesCommand as _0x3a65ba,
  SetBaseTableHierarchyFieldCommand as _0x17e4db,
  SetBaseViewFieldOrderCommand as _0x33e881,
  SetBaseViewFieldVisibleCommand as _0x5f4316,
  SetBaseViewFieldWidthCommand as _0x4640a3,
  SetBaseViewFilterCommand as _0x8f1e4,
  SetBaseViewGroupCommand as _0x54237d,
  SetBaseViewSortCommand as _0xd16fd5,
  UniverBasesPlugin as _0x49d362,
  UpdateBaseCellCommand as _0x2b7c23,
  UpdateBaseFieldCommand as _0x1c02cb,
  UpdateBaseFieldDescriptionCommand as _0x20a67c,
  UpdateBaseKanbanConfigCommand as _0xb5c27a,
  UpdateBaseRecordOrderCommand as _0xd91d50,
  UpdateBaseViewConditionalColorRulesCommand as _0x699d18,
  UpdateBaseViewConfigCommand as _0x58d1e1,
} from "@univerjs-pro/bases";
import {
  BaseDashboardHistoryAction as _0x336bd7,
  BaseDashboardWidgetType as _0x2c84d7,
  CreateBaseDashboardCommand as _0xb1c4e,
  DeleteBaseDashboardCommand as _0x2c9ad1,
  RemoveBaseDashboardWidgetCommand as _0x17ee31,
  UniverBaseDashboardPlugin as _0x1f53d9,
  UpdateBaseDashboardCommand as _0xb745e4,
  UpdateBasePivotViewCommand as _0x2658a6,
  UpsertBaseDashboardWidgetCommand as _0x35a2ee,
} from "@univerjs-pro/bases-dashboard";
import { UniverBaseDashboardUIPlugin as _0x3e3160 } from "@univerjs-pro/bases-dashboard-ui";
import {
  CollaborationEvent as _0x195d74,
  ISnapshotServerService as _0x54bf93,
  SnapshotService as _0x2aafeb,
  UniverCollaborationPlugin as _0x49acf7,
} from "@univerjs-pro/collaboration";
import { UniverProFormulaEnginePlugin as _0x58625a } from "@univerjs-pro/engine-formula";
import {
  IRenderManagerService as _0x47903d,
  UniverRenderEnginePlugin as _0x1314d3,
} from "@univerjs/engine-render";
import { UniverNetworkPlugin as _0x1d2052 } from "@univerjs/network";
import {
  BehaviorSubject as _0x4558b1,
  Subject as _0x24a13d,
  distinctUntilChanged as _0x59d9f8,
  filter as _0x7fd9ee,
  firstValueFrom as _0x43f184,
  map as _0x2fee59,
  takeUntil as _0x324a5a,
  timeout as _0x3a9b7c,
} from "rxjs";
import {
  HistoryActionSummaryService as _0x3bcec4,
  HistoryCanvasHighlightService as _0x389616,
  HistoryRenderAdapterRegistryService as _0x15f631,
  UniverEditHistoryUIPlugin as _0x5ea4ae,
} from "@univerjs-pro/edit-history-ui";
import {
  Badge as _0x11aa1f,
  Button as _0x2445bb,
  Tooltip as _0x258d38,
} from "@univerjs/design";
import { jsx as _0x5dd894, jsxs as _0x7ae7ae } from "react/jsx-runtime";
import { HistoryIcon as _0x590f52 } from "@univerjs/icons";
const I = "bases-history-ui.config",
  zt = { historyServerUrl: "/universer-api/history" };
var Bt = "@univerjs-pro/bases-history-ui",
  Vt = "1.0.0-insiders.20260907-70fc579";
function L(_0x40850e, _0x5eca20) {
  return function (_0x55236b, _0xd26fec) {
    _0x5eca20(_0x55236b, _0xd26fec, _0x40850e);
  };
}
function R(_0x594c56, _0x2e95f0, _0x1fb653, _0x6ca67e) {
  var _0x223f70 = arguments.length,
    _0x3bb83c =
      _0x223f70 < 3
        ? _0x2e95f0
        : _0x6ca67e === null
          ? (_0x6ca67e = Object.getOwnPropertyDescriptor(_0x2e95f0, _0x1fb653))
          : _0x6ca67e,
    _0x460c59;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3bb83c = Reflect.decorate(_0x594c56, _0x2e95f0, _0x1fb653, _0x6ca67e);
  else {
    for (var _0xa0e18b = _0x594c56.length - 1; _0xa0e18b >= 0; _0xa0e18b--)
      (_0x460c59 = _0x594c56[_0xa0e18b]) &&
        (_0x3bb83c =
          (_0x223f70 < 3
            ? _0x460c59(_0x3bb83c)
            : _0x223f70 > 3
              ? _0x460c59(_0x2e95f0, _0x1fb653, _0x3bb83c)
              : _0x460c59(_0x2e95f0, _0x1fb653)) || _0x3bb83c);
  }
  return (
    _0x223f70 > 3 &&
      _0x3bb83c &&
      Object.defineProperty(_0x2e95f0, _0x1fb653, _0x3bb83c),
    _0x3bb83c
  );
}
let z = class extends _0x2a3df2 {
  constructor(_0x82e1ac, _0x266a5e, _0x32255d, _0x203ef5) {
    (super(),
      (this._authzIoService = _0x266a5e),
      (this._stateService = _0x32255d),
      (this._univerInstanceService = _0x203ef5),
      this.disposeWithMe(
        _0x82e1ac.register({
          type: _0x2b6c89.UNIVER_BASE,
          canView: (_0x27b20c) =>
            this._hasPermission(_0x27b20c, _0x43309b.ViewHistory),
          canRevert: (_0x3d7d84) =>
            !!this._getBase(_0x3d7d84) &&
            this._hasPermission(_0x3d7d84, _0x43309b.RecoverHistory),
          captureLocation: () => this._captureLocation(),
          restoreLocation: (_0x43dd42, _0x2b9c1e) =>
            this._restoreLocation(
              _0x43dd42,
              Ht(_0x2b9c1e) ? _0x2b9c1e : undefined,
            ),
        }),
      ));
  }
  _captureLocation() {
    let _0x328e72 = this._stateService["getState"]();
    return {
      tableId: _0x328e72.activeTableId,
      viewId: _0x328e72.activeViewId,
      selection: _0x328e72.selection,
    };
  }
  _restoreLocation(_0x2d9130, _0x15070d) {
    let _0x3f0d88 = this._getBase(_0x2d9130),
      _0x4449bf =
        _0x15070d != null &&
        _0x15070d.tableId &&
        _0x3f0d88 != null &&
        _0x3f0d88.getSnapshot().tables[_0x15070d.tableId]
          ? _0x15070d.tableId
          : _0x3f0d88 == null
            ? undefined
            : _0x3f0d88.getSnapshot().tableOrder[0];
    if (!_0x4449bf) return;
    let _0x3e2a38 =
        _0x3f0d88 == null
          ? undefined
          : _0x3f0d88.getSnapshot().tables[_0x4449bf],
      _0x17c088 =
        _0x15070d != null &&
        _0x15070d.viewId &&
        _0x3e2a38 != null &&
        _0x3e2a38.views[_0x15070d.viewId]
          ? _0x15070d.viewId
          : _0x3e2a38 == null
            ? undefined
            : _0x3e2a38.viewOrder[0];
    (this._stateService["activateTable"](_0x4449bf),
      _0x17c088 && this._stateService["activateView"](_0x17c088),
      this._stateService["setSelection"](
        (_0x15070d == null ? undefined : _0x15070d.selection) ?? null,
      ),
      this._univerInstanceService["focusUnit"](_0x2d9130));
  }
  _getBase(_0x33cfe3) {
    return (
      this._univerInstanceService["getUnit"](
        _0x33cfe3,
        _0x2b6c89.UNIVER_BASE,
      ) ?? null
    );
  }
  async _hasPermission(_0x1c33e3, _0x17df28) {
    return (
      await this._authzIoService["allowed"]({
        unitID: _0x1c33e3,
        objectID: _0x1c33e3,
        objectType: _0x5cdd93.Base,
        actions: [_0x17df28],
      })
    ).some((_0x119bca) => _0x119bca.action === _0x17df28 && _0x119bca.allowed);
  }
};
z = R(
  [
    L(0, _0x2e85a5(_0x52a649)),
    L(1, _0x2224aa),
    L(2, _0x10fde5),
    L(3, _0x4c84d4),
  ],
  z,
);
function Ht(_0x5b2a56) {
  return typeof _0x5b2a56 == "object" && !!_0x5b2a56;
}
const Ut = "BASE_HISTORY_DELETION_BADGE";
function Wt({ popup: _0x5003d8 }) {
  let { count: _0x3526d3, labels: _0x1c67bc } = _0x5003d8.extraProps;
  return _0x5dd894(_0x258d38, {
    placement: "right",
    title: _0x7ae7ae("div", {
      className:
        "univer-flex\x20univer-max-w-80\x20univer-flex-col\x20univer-gap-1",
      children: [
        _0x1c67bc
          .slice(0, 10)
          .map((_0x13ab64) =>
            _0x5dd894(
              "div",
              { className: "univer-truncate", children: _0x13ab64 },
              _0x13ab64,
            ),
          ),
        _0x1c67bc.length > 10 &&
          _0x5dd894("div", { children: "+" + (_0x1c67bc.length - 10) }),
      ],
    }),
    children: _0x5dd894("div", {
      "aria-label": _0x1c67bc.join(",\x20"),
      children: _0x5dd894(_0x11aa1f, {
        className:
          "!univer-border-red-800 !univer-bg-red-50 !univer-px-1.5 !univer-py-0.5 !univer-text-red-800 dark:!univer-border-red-400 dark:!univer-bg-red-950 dark:!univer-text-red-300",
        children: "−" + _0x3526d3,
      }),
    }),
  });
}
let B = class extends _0x2a3df2 {
  constructor(_0x27db35) {
    (super(), this.disposeWithMe(_0x27db35.register(Ut, Wt)));
  }
};
B = R([L(0, _0x2e85a5(_0x4fd21b))], B);
const Gt = new Map([
    [
      _0x37aebe.Grid,
      {
        create: "bases-history-ui.action.createGridView",
        delete: "bases-history-ui.action.deleteGridView",
      },
    ],
    [
      _0x37aebe.Kanban,
      {
        create: "bases-history-ui.action.createKanbanView",
        delete: "bases-history-ui.action.deleteKanbanView",
      },
    ],
    [
      _0x37aebe.Calendar,
      {
        create: "bases-history-ui.action.createCalendarView",
        delete: "bases-history-ui.action.deleteCalendarView",
      },
    ],
    [
      _0x37aebe.Gantt,
      {
        create: "bases-history-ui.action.createGanttView",
        delete: "bases-history-ui.action.deleteGanttView",
      },
    ],
    [
      _0x37aebe.Gallery,
      {
        create: "bases-history-ui.action.createGalleryView",
        delete: "bases-history-ui.action.deleteGalleryView",
      },
    ],
    [
      _0x37aebe.Pivot,
      {
        create: "bases-history-ui.action.createPivotView",
        delete: "bases-history-ui.action.deletePivotView",
      },
    ],
  ]),
  Kt = new Map([
    [
      _0x2c84d7.PivotChart,
      {
        create: "bases-history-ui.action.createDashboardPivotChartWidget",
        update: "bases-history-ui.action.updateDashboardPivotChartWidget",
        remove: "bases-history-ui.action.removeDashboardPivotChartWidget",
      },
    ],
    [
      _0x2c84d7.TableFilter,
      {
        create: "bases-history-ui.action.createDashboardTableFilterWidget",
        update: "bases-history-ui.action.updateDashboardTableFilterWidget",
        remove: "bases-history-ui.action.removeDashboardTableFilterWidget",
      },
    ],
    [
      _0x2c84d7.Text,
      {
        create: "bases-history-ui.action.createDashboardTextWidget",
        update: "bases-history-ui.action.updateDashboardTextWidget",
        remove: "bases-history-ui.action.removeDashboardTextWidget",
      },
    ],
    [
      _0x2c84d7.Image,
      {
        create: "bases-history-ui.action.createDashboardImageWidget",
        update: "bases-history-ui.action.updateDashboardImageWidget",
        remove: "bases-history-ui.action.removeDashboardImageWidget",
      },
    ],
    [
      _0x2c84d7.FormulaShape,
      {
        create: "bases-history-ui.action.createDashboardFormulaShapeWidget",
        update: "bases-history-ui.action.updateDashboardFormulaShapeWidget",
        remove: "bases-history-ui.action.removeDashboardFormulaShapeWidget",
      },
    ],
  ]),
  qt = new Map([
    [_0x312d19.id, "bases-history-ui.action.renameBase"],
    [_0x1342f5.id, "bases-history-ui.action.createTable"],
    [_0x10d2e7.id, "bases-history-ui.action.deleteTable"],
    [_0x5d1d83.id, "bases-history-ui.action.renameTable"],
    [_0x5ddcaa.id, "bases-history-ui.action.createView"],
    [_0x59cf59.id, "bases-history-ui.action.deleteView"],
    [_0x209f1c.id, "bases-history-ui.action.renameView"],
    [_0x1b8a68.id, "bases-history-ui.action.moveView"],
    [_0x1a9506.id, "bases-history-ui.action.createRecord"],
    [_0x47737d.id, "bases-history-ui.action.createRecord"],
    [_0x4edb02.id, "bases-history-ui.action.createRecord"],
    [_0x556294.id, "bases-history-ui.action.deleteRecord"],
    [_0x34c0b6.id, "bases-history-ui.action.deleteRecord"],
    [_0x354a99.id, "bases-history-ui.action.duplicateRecord"],
    [_0x31c9f0.id, "bases-history-ui.action.moveRecord"],
    [_0xd91d50.id, "bases-history-ui.action.moveRecord"],
    [_0x2b7c23.id, "bases-history-ui.action.updateValues"],
    [_0x3a65ba.id, "bases-history-ui.action.updateValues"],
    [_0x378fbe.id, "bases-history-ui.action.updateValues"],
    [_0xb2aca8.id, "bases-history-ui.action.createField"],
    [_0x57c5e6.id, "bases-history-ui.action.deleteField"],
    [_0x4df0cd.id, "bases-history-ui.action.duplicateField"],
    [_0x325b80.id, "bases-history-ui.action.moveField"],
    [_0x1d037b.id, "bases-history-ui.action.changeFieldType"],
    [_0x1c02cb.id, "bases-history-ui.action.updateField"],
    [_0x20a67c.id, "bases-history-ui.action.updateFieldDescription"],
    [_0x33e881.id, "bases-history-ui.action.reorderFields"],
    [_0x5f4316.id, "bases-history-ui.action.updateFieldVisibility"],
    [_0x4640a3.id, "bases-history-ui.action.resizeFields"],
    [_0x8f1e4.id, "bases-history-ui.action.updateFilter"],
    [_0x54237d.id, "bases-history-ui.action.updateGroup"],
    [_0xd16fd5.id, "bases-history-ui.action.updateSort"],
    [_0x699d18.id, "bases-history-ui.action.updateConditionalColoring"],
    [_0x58d1e1.id, "bases-history-ui.action.configureView"],
    [_0x289a5e.id, "bases-history-ui.action.configureView"],
    [_0x18717e.id, "bases-history-ui.action.configureKanban"],
    [_0xb5c27a.id, "bases-history-ui.action.configureKanban"],
    [_0x17e4db.id, "bases-history-ui.action.configureHierarchy"],
    [_0x2658a6.id, "bases-history-ui.action.updatePivotView"],
    [_0xb1c4e.id, "bases-history-ui.action.createDashboard"],
    [_0x2c9ad1.id, "bases-history-ui.action.deleteDashboard"],
    [_0xb745e4.id, "bases-history-ui.action.updateDashboard"],
    [_0x35a2ee.id, "bases-history-ui.action.updateDashboardWidget"],
    [_0x17ee31.id, "bases-history-ui.action.removeDashboardWidget"],
  ]);
let V = class extends _0x2a3df2 {
  constructor(_0x25763d, _0x429901) {
    (super(),
      (this._localeService = _0x429901),
      this.disposeWithMe(_0x25763d.register(_0x2b6c89.UNIVER_BASE, this)));
  }
  resolve(_0x297151) {
    let _0x3c81b1 = Zt(_0x297151),
      _0x4df827 = Jt(_0x297151),
      _0x518141 = [
        ..._0x3c81b1.map((_0x5dcec8) => this._localeService["t"](_0x5dcec8)),
        ..._0x4df827.map((_0x404758) => this._localeService["t"](_0x404758)),
        ...[..._0x297151.commandIds].flatMap((_0x1b7be0) => {
          if (
            (_0x3c81b1.length > 0 &&
              (_0x1b7be0 === _0x5ddcaa.id || _0x1b7be0 === _0x59cf59.id)) ||
            (_0x4df827.length > 0 &&
              (_0x1b7be0 === _0x35a2ee.id ||
                _0x1b7be0 === _0x17ee31.id ||
                _0x1b7be0 === _0xb745e4.id))
          )
            return [];
          let _0x3bc9f9 = qt.get(_0x1b7be0);
          return _0x3bc9f9 ? [this._localeService["t"](_0x3bc9f9)] : [];
        }),
      ],
      _0x29a401 = [...new Set(_0x518141)];
    return _0x29a401.length > 0
      ? _0x29a401
      : _0x297151.commandIds["has"](_0x142f23.id)
        ? [this._localeService["t"]("bases-history-ui.action.updateBase")]
        : [];
  }
};
V = R([L(0, _0x2e85a5(_0x3bcec4)), L(1, _0x2e85a5(_0x3f3966))], V);
function Jt(_0x52f4e7) {
  let _0x22ebe5 = _0x52f4e7.mutations["flatMap"]((_0x2840db) => {
    if (!Qt(_0x2840db.params)) return [];
    let _0x3d9811 = Array.isArray(_0x2840db.params["historyActions"])
        ? _0x2840db.params["historyActions"].filter(Yt)
        : [],
      _0x484172 = [];
    (_0x3d9811.includes(_0x336bd7.RenameDashboard) &&
      _0x484172.push("bases-history-ui.action.renameDashboard"),
      _0x3d9811.includes(_0x336bd7.ReorderWidgets) &&
        _0x484172.push("bases-history-ui.action.reorderDashboardWidgets"));
    let _0x3cfa60 = Array.isArray(_0x2840db.params["historyWidgetTypes"])
      ? _0x2840db.params["historyWidgetTypes"].filter(Xt)
      : [];
    if (
      (_0x2840db.params["historyAction"] === _0x336bd7.UpdateWidget ||
        _0x3d9811.includes(_0x336bd7.UpdateWidget)) &&
      _0x3cfa60.length > 0
    )
      return (
        _0x484172.push(
          ..._0x3cfa60.flatMap((_0x1a873f) => {
            var _0x12546e;
            let _0x5c64b7 =
              (_0x12546e = Kt.get(_0x1a873f)) == null
                ? undefined
                : _0x12546e.update;
            return _0x5c64b7 ? [_0x5c64b7] : [];
          }),
        ),
        _0x484172
      );
    let _0x3886ba = Xt(_0x2840db.params["historyWidgetType"])
      ? Kt.get(_0x2840db.params["historyWidgetType"])
      : undefined;
    switch (_0x2840db.params["historyAction"]) {
      case _0x336bd7.CreateWidget:
        return (
          _0x484172.push(
            (_0x3886ba == null ? undefined : _0x3886ba.create) ??
              "bases-history-ui.action.createDashboardWidget",
          ),
          _0x484172
        );
      case _0x336bd7.UpdateWidget:
        return (
          _0x484172.push(
            (_0x3886ba == null ? undefined : _0x3886ba.update) ??
              "bases-history-ui.action.updateDashboardWidget",
          ),
          _0x484172
        );
      case _0x336bd7.RemoveWidget:
        return (
          _0x484172.push(
            (_0x3886ba == null ? undefined : _0x3886ba.remove) ??
              "bases-history-ui.action.removeDashboardWidget",
          ),
          _0x484172
        );
      default:
        return _0x484172;
    }
  });
  return [...new Set(_0x22ebe5)];
}
function Yt(_0x19315a) {
  return (
    _0x19315a === _0x336bd7.CreateWidget ||
    _0x19315a === _0x336bd7.RenameDashboard ||
    _0x19315a === _0x336bd7.ReorderWidgets ||
    _0x19315a === _0x336bd7.UpdateWidget ||
    _0x19315a === _0x336bd7.RemoveWidget
  );
}
function Xt(_0x58ba7a) {
  return (
    _0x58ba7a === _0x2c84d7.PivotChart ||
    _0x58ba7a === _0x2c84d7.TableFilter ||
    _0x58ba7a === _0x2c84d7.Text ||
    _0x58ba7a === _0x2c84d7.Image ||
    _0x58ba7a === _0x2c84d7.FormulaShape
  );
}
function Zt(_0x4051a2) {
  let _0x52a971 = [],
    _0x3f8787 = new Set();
  return (
    _0x4051a2.mutations["forEach"]((_0x477ff0) => {
      if (_0x477ff0.id !== _0x142f23.id || !Qt(_0x477ff0.params)) return;
      let { historyAction: _0x2c5e3d, viewType: _0x55ea43 } = _0x477ff0.params;
      if (!$t(_0x55ea43)) return;
      let _0x2e392a = Gt.get(_0x55ea43);
      if (_0x2e392a) {
        if (_0x2c5e3d === _0x2b8074.CreateView) {
          _0x52a971.push(_0x2e392a.create);
          return;
        }
        if (_0x2c5e3d === _0x2b8074.DeleteView) {
          _0x52a971.push(_0x2e392a.delete);
          return;
        }
        _0x3f8787.add(_0x55ea43);
      }
    }),
    _0x52a971.length > 0 ||
      _0x3f8787.forEach((_0x1ad4cf) => {
        let _0x206d5d = Gt.get(_0x1ad4cf);
        _0x206d5d &&
          (_0x4051a2.commandIds["has"](_0x5ddcaa.id) &&
            _0x52a971.push(_0x206d5d.create),
          _0x4051a2.commandIds["has"](_0x59cf59.id) &&
            _0x52a971.push(_0x206d5d.delete));
      }),
    [...new Set(_0x52a971)]
  );
}
function Qt(_0xff698) {
  return typeof _0xff698 == "object" && !!_0xff698;
}
function $t(_0x405ccc) {
  return (
    _0x405ccc === _0x37aebe.Grid ||
    _0x405ccc === _0x37aebe.Kanban ||
    _0x405ccc === _0x37aebe.Calendar ||
    _0x405ccc === _0x37aebe.Gantt ||
    _0x405ccc === _0x37aebe.Gallery ||
    _0x405ccc === _0x37aebe.Pivot
  );
}
function H(_0x22011a) {
  "@babel/helpers - typeof";
  return (
    (H =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4eae61) {
            return typeof _0x4eae61;
          }
        : function (_0x2f3518) {
            return _0x2f3518 &&
              typeof Symbol == "function" &&
              _0x2f3518.constructor === Symbol &&
              _0x2f3518 !== Symbol.prototype
              ? "symbol"
              : typeof _0x2f3518;
          }),
    H(_0x22011a)
  );
}
function en(_0x21f5dc, _0x104335) {
  if (H(_0x21f5dc) != "object" || !_0x21f5dc) return _0x21f5dc;
  var _0x160cc3 = _0x21f5dc[Symbol.toPrimitive];
  if (_0x160cc3 !== undefined) {
    var _0x1ce507 = _0x160cc3.call(_0x21f5dc, _0x104335 || "default");
    if (H(_0x1ce507) != "object") return _0x1ce507;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x104335 === "string" ? String : Number)(_0x21f5dc);
}
function tn(_0x51687f) {
  var _0x5875d8 = en(_0x51687f, "string");
  return H(_0x5875d8) == "symbol" ? _0x5875d8 : _0x5875d8 + "";
}
function U(_0x25cc72, _0x4175c8, _0x395fd1) {
  return (
    (_0x4175c8 = tn(_0x4175c8)) in _0x25cc72
      ? Object.defineProperty(_0x25cc72, _0x4175c8, {
          value: _0x395fd1,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x25cc72[_0x4175c8] = _0x395fd1),
    _0x25cc72
  );
}
let W = class extends _0x2a3df2 {
  constructor(_0x54d4f0, _0x5821be, _0x433758, _0x4c4d82) {
    (super(),
      (this._renderManagerService = _0x54d4f0),
      (this._highlightService = _0x5821be),
      (this._canvasRootResolverService = _0x433758),
      (this._canvasPopupService = _0x4c4d82),
      U(this, "_generations", new Map()),
      U(this, "_badgeDisposables", new Map()));
  }
  async show(_0x4961c7, _0x40de11) {
    let _0x3b121c = (this._generations["get"](_0x4961c7) ?? 0) + 1;
    (this._generations["set"](_0x4961c7, _0x3b121c),
      this._clearDeletionBadges(_0x4961c7));
    let _0xf0150c = await this._getCanvasComponent(_0x4961c7);
    if (this._generations["get"](_0x4961c7) !== _0x3b121c) return;
    if (!_0xf0150c) {
      await this._highlightService["show"](_0x4961c7, []);
      return;
    }
    let _0x307815 = _0xf0150c.getController().getHitRegions(),
      _0x1755fa = _0xf0150c.getRealBound(),
      _0x3319bf = [],
      _0x4c629f = new Map(),
      _0x271a88 = nn(_0x40de11);
    (_0x271a88
      .filter((_0x4d3b8b) => yn(_0x307815, _0x4d3b8b))
      .forEach((_0x74cb51) => {
        let _0x38e5a0 = q(
          _0x307815
            .filter(({ result: _0x1a32f4 }) => vn(_0x1a32f4, _0x74cb51))
            .map(({ rect: _0x2732e4 }) => _0x2732e4),
        );
        if (_0x38e5a0) {
          _0x3319bf.push({
            id: _0x74cb51.id,
            kind: _0x74cb51.kind,
            bounds: {
              left: _0x1755fa.left + _0x38e5a0.left,
              top: _0x1755fa.top + _0x38e5a0.top,
              width: _0x38e5a0.width,
              height: _0x38e5a0.height,
            },
            outlineOnly: _0x74cb51.kind === "delete",
          });
          return;
        }
        if (!_0x74cb51.recordId && !_0x74cb51.fieldId) {
          let _0x25695e = G(_0x307815, _0x1755fa, _0x74cb51);
          _0x3319bf.push({
            id: "base-scope-" + an(_0x74cb51),
            kind: _0x74cb51.kind,
            bounds: {
              left: _0x1755fa.left + _0x25695e.left,
              top: _0x1755fa.top + _0x25695e.top,
              width: _0x25695e.width,
              height: _0x25695e.height,
            },
            outlineOnly: true,
          });
          return;
        }
        ln(_0x3319bf, _0x4c629f, _0x307815, _0x1755fa, _0x271a88, _0x74cb51);
      }),
      await this._highlightService["show"](_0x4961c7, _0x3319bf),
      this._generations["get"](_0x4961c7) === _0x3b121c &&
        this._showDeletionBadges(_0x4961c7, Array.from(_0x4c629f.values())));
  }
  clear(_0x1ac60a) {
    (this._generations["set"](
      _0x1ac60a,
      (this._generations["get"](_0x1ac60a) ?? 0) + 1,
    ),
      this._clearDeletionBadges(_0x1ac60a),
      this._highlightService["clear"](_0x1ac60a));
  }
  dispose() {
    (Array.from(this._generations["keys"]()).forEach((_0xcc440d) =>
      this.clear(_0xcc440d),
    ),
      super.dispose());
  }
  async _getCanvasComponent(_0x584cb7) {
    for (let _0x228593 = 0; _0x228593 <= 120; _0x228593++) {
      let _0x1edb11 =
          this._renderManagerService["getRenderUnitById"](_0x584cb7),
        _0x22b704 =
          _0x1edb11 == null
            ? undefined
            : _0x1edb11.scene["getObject"](_0x59084c),
        _0x724322 =
          _0x22b704 instanceof _0x40744e
            ? _0x22b704
            : _0x1edb11 == null
              ? undefined
              : _0x1edb11.components["get"](_0x59084c);
      if (
        _0x724322 instanceof _0x40744e &&
        _0x724322.getController().getHitRegions().length > 0
      )
        return _0x724322;
      await bn();
    }
    return null;
  }
  _showDeletionBadges(_0x30088c, _0x217b0d) {
    if (_0x217b0d.length === 0) return;
    let _0x2ce3e9 = this._renderManagerService["getRenderUnitById"](_0x30088c),
      _0x152738 = this._canvasRootResolverService["getCanvasRoot"](_0x30088c);
    if (!_0x2ce3e9 || !_0x152738) return;
    let _0x53b892 = _0x2ce3e9.engine["getCanvasElement"](),
      _0x407e10 = new _0x11f839();
    (_0x217b0d.forEach((_0x2e0339) => {
      let _0x172292 = fn(_0x152738, _0x2e0339.bounds),
        _0x1148af = new _0x4558b1(_0x172292),
        _0x20ab9e = {
          count: _0x2e0339.changes["length"],
          labels: un(_0x2e0339.changes),
        },
        _0x550712 = this._canvasPopupService["addPopup"]({
          unitId: _0x30088c,
          subUnitId: _0x30088c,
          componentKey: Ut,
          direction: "top-left",
          anchorRect: _0x172292,
          anchorRect$: _0x1148af,
          canvasElement: _0x53b892,
          constrainToCanvas: true,
          hideOnInvisible: true,
          extraProps: _0x20ab9e,
        });
      _0x407e10.add({
        dispose: () => {
          (this._canvasPopupService["removePopup"](_0x550712),
            _0x1148af.complete());
        },
      });
    }),
      this._badgeDisposables["set"](_0x30088c, _0x407e10));
  }
  _clearDeletionBadges(_0x28fad0) {
    var _0x49ab11;
    ((_0x49ab11 = this._badgeDisposables["get"](_0x28fad0)) == null ||
      _0x49ab11.dispose(),
      this._badgeDisposables["delete"](_0x28fad0));
  }
};
W = R(
  [
    L(0, _0x47903d),
    L(1, _0x2e85a5(_0x389616)),
    L(2, _0x11b414),
    L(3, _0x2e85a5(_0x245233)),
  ],
  W,
);
function nn(_0x5158df) {
  let _0x5b07e2 = new Set(
      _0x5158df
        .filter((_0x1b1fda) => _0x1b1fda.recordId && !_0x1b1fda.fieldId)
        .map((_0x55df8c) => on(_0x55df8c)),
    ),
    _0x5de87c = new Set(
      _0x5158df
        .filter((_0x19a8b9) => _0x19a8b9.fieldId && !_0x19a8b9.recordId)
        .map((_0x24a004) => sn(_0x24a004)),
    ),
    _0x27333 = new Map();
  return (
    _0x5158df.forEach((_0x1f6a75) => {
      if (
        _0x1f6a75.recordId &&
        _0x1f6a75.fieldId &&
        (_0x5b07e2.has(on(_0x1f6a75)) || _0x5de87c.has(sn(_0x1f6a75)))
      )
        return;
      let _0x501c10 = an(_0x1f6a75),
        _0x354ac5 = _0x27333.get(_0x501c10);
      _0x27333.set(
        _0x501c10,
        _0x354ac5
          ? { ..._0x354ac5, kind: rn(_0x354ac5.kind, _0x1f6a75.kind) }
          : _0x1f6a75,
      );
    }),
    Array.from(_0x27333.values())
  );
}
function rn(_0x3ed0b3, _0x1b405c) {
  return _0x3ed0b3 === _0x1b405c
    ? _0x3ed0b3
    : _0x3ed0b3 === "update"
      ? _0x1b405c
      : _0x1b405c === "update"
        ? _0x3ed0b3
        : "update";
}
function an(_0x3a98da) {
  return [
    _0x3a98da.tableId,
    _0x3a98da.viewId,
    _0x3a98da.recordId,
    _0x3a98da.fieldId,
  ]
    .map((_0x57c8c6) => _0x57c8c6 ?? "")
    .join(":");
}
function on(_0x442581) {
  return [_0x442581.tableId, _0x442581.viewId, _0x442581.recordId]
    .map((_0x56ef9b) => _0x56ef9b ?? "")
    .join(":");
}
function sn(_0xef7bf4) {
  return [_0xef7bf4.tableId, _0xef7bf4.viewId, _0xef7bf4.fieldId]
    .map((_0xc4b370) => _0xc4b370 ?? "")
    .join(":");
}
function cn(_0x58fe26) {
  return [_0x58fe26.tableId, _0x58fe26.viewId]
    .map((_0x106074) => _0x106074 ?? "")
    .join(":");
}
function G(_0x4ec34b, _0x50ac26, _0x581802) {
  return (
    q(
      _0x4ec34b
        .filter(({ result: _0x48be7c }) => K(_0x48be7c, _0x581802))
        .map(({ rect: _0x22fddf }) => _0x22fddf),
    ) ?? { left: 0, top: 0, width: _0x50ac26.width, height: _0x50ac26.height }
  );
}
function ln(_0x59e4bf, _0x437f74, _0x10a412, _0x5e795e, _0x6ac41d, _0x34a26c) {
  let _0x554caa = hn(_0x6ac41d, _0x34a26c),
    _0x22ff21 = mn(_0x10a412, _0x34a26c, _0x554caa);
  if (_0x22ff21) {
    let _0x8ab2b1 = _0x34a26c.recordId ? "record" : "field",
      _0x2f7efe = cn(_0x34a26c) + ":" + _0x8ab2b1 + ":" + _0x554caa,
      _0x5b74ec = _0x437f74.get(_0x2f7efe);
    if (_0x5b74ec) {
      _0x5b74ec.changes["push"](_0x34a26c);
      return;
    }
    let _0x1e4dc9 = pn(_0x5e795e, _0x22ff21),
      _0x4bfb51 = {
        id: "base-deletion-" + _0x2f7efe,
        bounds: _0x1e4dc9,
        changes: [_0x34a26c],
      };
    (_0x437f74.set(_0x2f7efe, _0x4bfb51),
      _0x59e4bf.push({
        id: _0x4bfb51.id,
        kind: _0x34a26c.kind,
        bounds: _0x1e4dc9,
      }));
    return;
  }
  let _0x288037 = G(_0x10a412, _0x5e795e, _0x34a26c);
  _0x59e4bf.push({
    id: "base-missing-scope-" + _0x34a26c.kind + "-" + cn(_0x34a26c),
    kind: _0x34a26c.kind,
    bounds: pn(_0x5e795e, _0x288037),
    outlineOnly: true,
  });
}
function un(_0x499593) {
  return Array.from(new Set(_0x499593.map((_0xda5e32) => dn(_0xda5e32))));
}
function dn(_0x5188bb) {
  if (_0x5188bb.removedRecord) {
    let _0x4a25e9 = Object.values(_0x5188bb.removedRecord["values"]).find(
      (_0x349537) => ["string", "number", "boolean"].includes(typeof _0x349537),
    );
    if (_0x4a25e9 != null) return String(_0x4a25e9);
  }
  return _0x5188bb.recordId ?? _0x5188bb.fieldId ?? _0x5188bb.label;
}
function fn(_0x2acfaa, _0x3b52a9) {
  let _0xade75f = _0x2acfaa.getBoundingClientRect(),
    _0xdbf257 =
      _0xade75f.width > 0 && _0x2acfaa.clientWidth > 0
        ? _0xade75f.width / _0x2acfaa.clientWidth
        : 1,
    _0x7f6e4e =
      _0xade75f.height > 0 && _0x2acfaa.clientHeight > 0
        ? _0xade75f.height / _0x2acfaa.clientHeight
        : 1,
    _0x422c80 = _0xade75f.left + _0x3b52a9.left * _0xdbf257,
    _0x2e6f81 = _0xade75f.top + _0x3b52a9.top * _0x7f6e4e;
  return {
    left: _0x422c80,
    right: _0x422c80 + _0x3b52a9.width * _0xdbf257,
    top: _0x2e6f81,
    bottom: _0x2e6f81 + _0x3b52a9.height * _0x7f6e4e,
  };
}
function pn(_0x104a41, _0x2055bf) {
  return {
    left: _0x104a41.left + _0x2055bf.left,
    top: _0x104a41.top + _0x2055bf.top,
    width: _0x2055bf.width,
    height: _0x2055bf.height,
  };
}
function mn(_0x587ca9, _0x3d8b1c, _0x18d748) {
  if (_0x3d8b1c.kind !== "delete" || _0x18d748 === null) return null;
  let _0x334da6 = _0x587ca9.filter(({ result: _0x263e74 }) =>
    K(_0x263e74, _0x3d8b1c),
  );
  if (_0x3d8b1c.recordId) {
    let _0x2576bf = gn(_0x334da6, "recordId").sort(
        (_0x39a5c4, _0xd164ee) => _0x39a5c4.top - _0xd164ee.top,
      ),
      _0x1ea93b = _n(_0x2576bf);
    if (!_0x1ea93b) return null;
    let _0x407d49 =
      _0x18d748 < _0x2576bf.length
        ? _0x2576bf[_0x18d748].top
        : _0x2576bf[_0x2576bf.length - 1].top +
          _0x2576bf[_0x2576bf.length - 1].height;
    return {
      left: _0x1ea93b.left,
      top: _0x407d49 - 4 / 2,
      width: _0x1ea93b.width,
      height: 4,
    };
  }
  if (_0x3d8b1c.fieldId) {
    let _0xcb01d0 = gn(_0x334da6, "fieldId").sort(
        (_0x50e3cf, _0x4f49b9) => _0x50e3cf.left - _0x4f49b9.left,
      ),
      _0x4436e6 = _n(_0xcb01d0);
    return _0x4436e6
      ? {
          left:
            (_0x18d748 < _0xcb01d0.length
              ? _0xcb01d0[_0x18d748].left
              : _0xcb01d0[_0xcb01d0.length - 1].left +
                _0xcb01d0[_0xcb01d0.length - 1].width) -
            4 / 2,
          top: _0x4436e6.top,
          width: 4,
          height: _0x4436e6.height,
        }
      : null;
  }
  return null;
}
function hn(_0x4e10c9, _0x1ded99) {
  let _0x1286f3;
  if (
    (_0x1ded99.recordId
      ? (_0x1286f3 = _0x1ded99.recordIndex)
      : _0x1ded99.fieldId && (_0x1286f3 = _0x1ded99.fieldIndex),
    _0x1ded99.kind !== "delete" || _0x1286f3 === undefined)
  )
    return null;
  let _0x396879 = new Set(
    _0x4e10c9.flatMap((_0x25ca7e) => {
      if (
        _0x25ca7e.kind !== "delete" ||
        _0x25ca7e.tableId !== _0x1ded99.tableId ||
        _0x25ca7e.viewId !== _0x1ded99.viewId
      )
        return [];
      let _0x29fc65 = _0x1ded99.recordId
        ? _0x25ca7e.recordIndex
        : _0x25ca7e.fieldIndex;
      return _0x29fc65 !== undefined && _0x29fc65 < _0x1286f3
        ? [_0x29fc65]
        : [];
    }),
  );
  return Math.max(0, _0x1286f3 - _0x396879.size);
}
function gn(_0x3f0509, _0x1297c7) {
  let _0x1cf53f = new Map();
  return (
    _0x3f0509.forEach(({ rect: _0x527e24, result: _0x184016 }) => {
      let _0x3cf3da;
      if (
        (_0x1297c7 === "recordId" && "recordId" in _0x184016
          ? (_0x3cf3da = _0x184016.recordId)
          : _0x1297c7 === "fieldId" &&
            "fieldId" in _0x184016 &&
            (_0x3cf3da = _0x184016.fieldId),
        typeof _0x3cf3da != "string")
      )
        return;
      let _0x2513ce = _0x1cf53f.get(_0x3cf3da) ?? [];
      (_0x2513ce.push(_0x527e24), _0x1cf53f.set(_0x3cf3da, _0x2513ce));
    }),
    Array.from(_0x1cf53f.values()).flatMap((_0x3007a5) => {
      let _0x18b036 = q(_0x3007a5);
      return _0x18b036 ? [_0x18b036] : [];
    })
  );
}
function _n(_0x78a95) {
  return q(
    _0x78a95.map((_0x2d3b50) => ({
      x: _0x2d3b50.left,
      y: _0x2d3b50.top,
      width: _0x2d3b50.width,
      height: _0x2d3b50.height,
    })),
  );
}
function vn(_0x209082, _0x1c9425) {
  return !K(_0x209082, _0x1c9425) ||
    (_0x1c9425.recordId &&
      (!("recordId" in _0x209082) ||
        _0x209082.recordId !== _0x1c9425.recordId)) ||
    (!_0x1c9425.recordId && "recordId" in _0x209082) ||
    (_0x1c9425.fieldId &&
      (!("fieldId" in _0x209082) || _0x209082.fieldId !== _0x1c9425.fieldId))
    ? false
    : _0x1c9425.fieldId
      ? _0x1c9425.recordId !== undefined || _0x209082.type["includes"]("header")
      : _0x1c9425.recordId !== undefined;
}
function K(_0x355ceb, _0x1d6915) {
  return !(
    (_0x1d6915.tableId &&
      (!("tableId" in _0x355ceb) || _0x355ceb.tableId !== _0x1d6915.tableId)) ||
    (_0x1d6915.viewId &&
      (!("viewId" in _0x355ceb) || _0x355ceb.viewId !== _0x1d6915.viewId))
  );
}
function yn(_0x5cbf1a, _0x5f4d34) {
  return _0x5cbf1a.some(({ result: _0x1ffb02 }) => K(_0x1ffb02, _0x5f4d34));
}
function q(_0x519f29) {
  if (_0x519f29.length === 0) return null;
  let _0x337c6e = Math.min(..._0x519f29.map((_0xb10444) => _0xb10444.x)),
    _0x1bbff8 = Math.min(..._0x519f29.map((_0x2bbda5) => _0x2bbda5.y)),
    _0xcb282 = Math.max(
      ..._0x519f29.map((_0x28f6d3) => _0x28f6d3.x + _0x28f6d3.width),
    ),
    _0x17fca9 = Math.max(
      ..._0x519f29.map((_0x3acfc2) => _0x3acfc2.y + _0x3acfc2.height),
    );
  return {
    left: _0x337c6e,
    top: _0x1bbff8,
    width: _0xcb282 - _0x337c6e,
    height: _0x17fca9 - _0x1bbff8,
  };
}
function bn() {
  return new Promise((_0x451550) => globalThis.setTimeout(_0x451550, 16));
}
let J = class extends _0x2a3df2 {
  constructor(
    _0x1b2de8,
    _0x4fd7cc,
    _0x4a907d,
    _0x135962,
    _0x4aa6d3,
    _0x1717d8,
    _0x23ca3b,
    _0x17df0f,
  ) {
    (super(),
      (this._diffService = _0x1b2de8),
      (this._snapshotService = _0x4a907d),
      (this._commandService = _0x135962),
      (this._univerInstanceService = _0x4aa6d3),
      (this._baseUIStateService = _0x1717d8),
      (this._logService = _0x23ca3b),
      (this._highlightService = _0x17df0f),
      U(this, "type", _0x2b6c89.UNIVER_BASE),
      U(this, "_changesGeneration", 0),
      U(this, "_loadGeneration", 0),
      U(this, "_loadQueue", Promise.resolve()),
      U(this, "_unitId", ""),
      U(this, "_changes", []),
      this.disposeWithMe(_0x4fd7cc.register(this)),
      this.disposeWithMe(
        _0x5339b1(
          this._baseUIStateService["state$"]
            .pipe(
              _0x2fee59((_0x1dd6ee) => ({
                tableId: _0x1dd6ee.activeTableId,
                viewId: _0x1dd6ee.activeViewId,
              })),
              _0x59d9f8(
                (_0x325025, _0x7f12c9) =>
                  _0x325025.tableId === _0x7f12c9.tableId &&
                  _0x325025.viewId === _0x7f12c9.viewId,
              ),
            )
            .subscribe(() => {
              this._unitId &&
                this._highlightService["show"](
                  this._unitId,
                  this._changes,
                ).catch((_0x2562ad) => {
                  this._logService["error"](
                    "[BasesHistoryRenderAdapterService]: Failed to render Base history highlights.",
                    _0x2562ad,
                  );
                });
            }),
        ),
      ));
  }
  loadRevision(_0x250762, _0x56d19d) {
    let _0x7c2be5 = ++this._loadGeneration,
      _0x2f8d92 = this._loadQueue["catch"](() => undefined).then(async () => {
        if (_0x7c2be5 !== this._loadGeneration) return;
        this._getBase(_0x250762) &&
          this._univerInstanceService["disposeUnit"](_0x250762);
        let _0x53afad = await this._snapshotService["loadBase"](
          _0x250762,
          _0x56d19d.endRevision,
        );
        if (_0x7c2be5 !== this._loadGeneration) {
          this._getBase(_0x250762) === _0x53afad &&
            this._univerInstanceService["disposeUnit"](_0x250762);
          return;
        }
        (await this._activateRevisionLocation(_0x53afad),
          this._univerInstanceService["focusUnit"](_0x250762));
      });
    return ((this._loadQueue = _0x2f8d92), _0x2f8d92);
  }
  async loadChanges(_0x200906, _0x537447) {
    this._unitId = _0x200906;
    let _0x1659b5 = ++this._changesGeneration,
      _0x304753 = await this._diffService["compare"](_0x200906, _0x537447);
    _0x1659b5 === this._changesGeneration &&
      ((this._changes = _0x304753),
      await this._highlightService["show"](_0x200906, _0x304753));
  }
  close() {
    (++this._changesGeneration,
      ++this._loadGeneration,
      (this._changes = []),
      (this._unitId &&= (this._highlightService["clear"](this._unitId), "")));
  }
  _getBase(_0x44bc67) {
    return (
      this._univerInstanceService["getUnit"](
        _0x44bc67,
        _0x2b6c89.UNIVER_BASE,
      ) ?? null
    );
  }
  async _activateRevisionLocation(_0x1ab08c) {
    let _0x30ebcf = _0x1ab08c.getSnapshot(),
      _0x37ceb0 = this._baseUIStateService["getState"](),
      _0x198a56 =
        _0x37ceb0.activeTableId && _0x30ebcf.tables[_0x37ceb0.activeTableId]
          ? _0x37ceb0.activeTableId
          : _0x30ebcf.tableOrder["find"](
              (_0x3422eb) => _0x30ebcf.tables[_0x3422eb],
            );
    if (!_0x198a56) return;
    await this._commandService["executeCommand"](_0x31e1aa.id, {
      unitId: _0x1ab08c.getUnitId(),
      tableId: _0x198a56,
    });
    let _0x225132 = _0x30ebcf.tables[_0x198a56],
      _0x5f41f0 =
        _0x37ceb0.activeViewId && _0x225132.views[_0x37ceb0.activeViewId]
          ? _0x37ceb0.activeViewId
          : _0x225132.viewOrder["find"](
              (_0x342f27) => _0x225132.views[_0x342f27],
            );
    _0x5f41f0 &&
      (await this._commandService["executeCommand"](_0x23ce1b.id, {
        unitId: _0x1ab08c.getUnitId(),
        tableId: _0x198a56,
        viewId: _0x5f41f0,
      }));
  }
};
J = R(
  [
    L(0, _0x2e85a5(_0x1f1b42)),
    L(1, _0x2e85a5(_0x15f631)),
    L(2, _0x2e85a5(_0x2aafeb)),
    L(3, _0x4a21c4),
    L(4, _0x4c84d4),
    L(5, _0x10fde5),
    L(6, _0x53e82c),
    L(7, _0x2e85a5(W)),
  ],
  J,
);
let Y = class extends _0x5ea4ae {
  constructor(_0xb19adb, _0x3551ff, _0x3dd441, _0x82be92) {
    let { collaborationClientConfig: _0x8d4fd3, ..._0x533c3d } = _0xb19adb;
    (super(_0x533c3d, _0x3551ff, _0x3dd441, _0x82be92),
      (this._injector = _0x3551ff),
      _0x3dd441.setConfig(_0x2dba41, _0x8d4fd3));
  }
  onStarting() {
    (super.onStarting(),
      _0x43da4d(this._injector, [
        [_0x54bf93, { useClass: _0x36864f }],
        [B],
        [V],
        [W],
        [J],
      ]),
      this._injector["get"](B),
      this._injector["get"](V),
      this._injector["get"](J));
  }
};
(U(Y, "pluginName", "UNIVER_BASES_HISTORY_VIEWER_PLUGIN"),
  U(Y, "packageName", Bt),
  U(Y, "version", Vt),
  U(Y, "type", _0x2b6c89.UNIVER_UNKNOWN),
  (Y = R(
    [
      _0x117a9a(_0x548f90, _0x1f4b5e, _0x31174b),
      L(1, _0x2e85a5(_0x5baa29)),
      L(2, _0x1a1d5d),
      L(3, _0x53e82c),
    ],
    Y,
  )));
let X = class extends _0x2a3df2 {
  constructor(
    _0x2f7b6a,
    _0x499ff2,
    _0x90a2f4,
    _0x1c66ff,
    _0x1e27b7,
    _0x4b6e61,
    _0x22d2f8,
    _0x473095,
  ) {
    (super(),
      (this._configService = _0x2f7b6a),
      (this._restoreService = _0x499ff2),
      (this._adapterRegistry = _0x90a2f4),
      (this._localeService = _0x1c66ff),
      (this._themeService = _0x1e27b7),
      (this._collaborationController = _0x4b6e61),
      (this._dataLoaderService = _0x22d2f8),
      (this._univerInstanceService = _0x473095),
      U(this, "_historyUniver", null),
      U(this, "_opening", null),
      U(this, "_openGeneration", 0),
      U(this, "_sessionDisposables", new _0x11f839()),
      U(this, "_container", null),
      U(this, "_unitId", ""),
      U(this, "_location", undefined));
  }
  open(_0x5872f0) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let _0x4c6393 = ++this._openGeneration,
      _0x2b279b = this._open(_0x5872f0, _0x4c6393).finally(() => {
        this._opening === _0x2b279b && (this._opening = null);
      });
    return ((this._opening = _0x2b279b), _0x2b279b);
  }
  async _open(_0x59f6dc, _0x24b11c) {
    let _0xda3889 = this._adapterRegistry["get"](_0x2b6c89.UNIVER_BASE);
    if (!_0xda3889)
      throw Error(
        "[BasesHistoryLoaderService]: Base history adapter is not registered.",
      );
    let _0x581722 = await Promise.all([
      _0xda3889.canView(_0x59f6dc),
      _0xda3889.canRevert(_0x59f6dc),
    ]).catch((_0x4e7baa) => {
      if (_0x24b11c === this._openGeneration) throw _0x4e7baa;
      return null;
    });
    if (!_0x581722 || _0x24b11c !== this._openGeneration) return;
    let [_0x4ab645, _0x3b1103] = _0x581722;
    if (!_0x4ab645)
      throw Error(
        "[BasesHistoryLoaderService]: The current user cannot view history for this Base.",
      );
    ((this._unitId = _0x59f6dc),
      (this._location = _0xda3889.captureLocation(_0x59f6dc)));
    let _0x4cba27 = this._ensureContainer();
    _0x4cba27.style["display"] = "block";
    let _0x233823 = this._localeService["getCurrentLocale"](),
      _0x388e6f = this._localeService["getLocales"](),
      _0x3814ca = new _0x303719({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: _0x233823,
        locales: _0x388e6f ? { [_0x233823]: _0x388e6f } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[_0x2224aa, { useClass: _0xc673e1 }]],
      });
    ((this._historyUniver = _0x3814ca),
      this._syncViewerServices(_0x3814ca, _0x4cba27));
    try {
      (this._registerChildPlugins(_0x3814ca, _0x3b1103, _0x4cba27),
        this._createPlaceholder(_0x3814ca));
    } catch (_0x118d69) {
      throw (
        _0x24b11c === this._openGeneration ? this.close() : _0x3814ca.dispose(),
        _0x118d69
      );
    }
  }
  close() {
    (++this._openGeneration,
      (this._opening = null),
      this._sessionDisposables["dispose"]());
    let _0x218846 = this._historyUniver;
    ((this._historyUniver = null),
      _0x218846 == null || _0x218846.dispose(),
      (this._unitId = ""),
      (this._location = undefined),
      this._container && (this._container["style"].display = "none"));
  }
  _syncViewerServices(_0x34380d, _0xbf508) {
    let _0x2cac30 = _0x34380d.__getInjector(),
      _0x14cf7c = _0x2cac30.get(_0x3f3966),
      _0x5615ac = _0x2cac30.get(_0x5810cd);
    (this._sessionDisposables["add"](
      this._themeService["darkMode$"].subscribe((_0x431ffd) => {
        _0x5615ac.setDarkMode(_0x431ffd);
      }),
    ),
      this._sessionDisposables["add"](
        this._themeService["currentTheme$"].subscribe((_0x1af6e6) => {
          _0x5615ac.setTheme(_0x1af6e6);
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["currentLocale$"].subscribe((_0x3712e3) => {
          let _0x2873bd = this._localeService["getLocales"]();
          (_0x2873bd && _0x14cf7c.load({ [_0x3712e3]: _0x2873bd }),
            _0x14cf7c.setLocale(_0x3712e3));
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["direction$"].subscribe((_0x24e5e4) => {
          (_0x14cf7c.setDirection(_0x24e5e4),
            (_0xbf508.dir = _0x24e5e4),
            (_0xbf508.style["direction"] = _0x24e5e4));
        }),
      ));
  }
  async restore(_0x23dfaa) {
    var _0x18ef4a;
    let _0x4c7cdb = this._unitId,
      _0x17d38b = this._location,
      _0x5acbc3 = this._collaborationController["getCollabEntity"](_0x4c7cdb);
    if (!_0x5acbc3)
      throw Error(
        "[BasesHistoryLoaderService]: Collaboration is not ready for this Base.",
      );
    let _0x2b2196 = new _0x24a13d(),
      _0x3c8dd0 = _0x43f184(
        _0x5acbc3.session["event$"].pipe(
          _0x7fd9ee(
            (_0x28adb0) => _0x28adb0.eventID === _0x195d74.CHANGESET_ACK,
          ),
          _0x7fd9ee((_0x5b5e13) => _0x361796(_0x5b5e13, _0x23dfaa)),
          _0x324a5a(_0x2b2196),
          _0x3a9b7c(10000),
        ),
      );
    try {
      if (
        !(await this._restoreService["restore"](
          _0x4c7cdb,
          _0x2b6c89.UNIVER_BASE,
          _0x23dfaa,
        ))
      )
        throw Error(
          "[BasesHistoryLoaderService]:\x20The\x20restore\x20command\x20was\x20not\x20accepted.",
        );
      await _0x3c8dd0;
    } catch (_0xc1ca80) {
      throw (
        _0x2b2196.next(),
        await _0x3c8dd0.catch(() => undefined),
        _0xc1ca80
      );
    } finally {
      _0x2b2196.complete();
    }
    (this.close(),
      this._univerInstanceService["disposeUnit"](_0x4c7cdb),
      await this._dataLoaderService["loadUnit"](
        _0x4c7cdb,
        _0x2b6c89.UNIVER_BASE,
      ),
      await ((_0x18ef4a = this._adapterRegistry["get"](
        _0x2b6c89.UNIVER_BASE,
      )) == null
        ? undefined
        : _0x18ef4a.restoreLocation(_0x4c7cdb, _0x17d38b)));
  }
  _ensureContainer() {
    var _0x19a405;
    if (this._container) return this._container;
    let _0x3d24fe = this._configService["getConfig"](I),
      _0x4b2b2c =
        (_0x19a405 = this._configService["getConfig"](_0x48ae2c)) == null
          ? undefined
          : _0x19a405.container,
      _0x17344c =
        (_0x3d24fe == null ? undefined : _0x3d24fe.univerContainerId) ??
        _0x4b2b2c,
      _0x46c3f1 =
        typeof _0x17344c == "string"
          ? document.getElementById(_0x17344c)
          : _0x17344c;
    if (!_0x46c3f1)
      throw Error(
        "[BasesHistoryLoaderService]: Configure a valid Univer container before opening history.",
      );
    let _0x14470e = document.createElement("div");
    return (
      (_0x14470e.style["position"] = "absolute"),
      (_0x14470e.style["inset"] = "0"),
      (_0x14470e.style["zIndex"] = "49"),
      (_0x14470e.style["display"] = "none"),
      _0x46c3f1.appendChild(_0x14470e),
      (this._container = _0x14470e),
      _0x14470e
    );
  }
  _registerChildPlugins(_0x14af7b, _0x50243e, _0x1b88ff) {
    let _0x736706 = this._configService["getConfig"](_0x4b2309),
      _0x54998f = this._configService["getConfig"](I),
      _0x1053e4 = [
        [_0x548f90, { license: _0x736706 == null ? undefined : _0x736706.ls }],
        [_0x1314d3],
        [
          _0x5a88ec,
          {
            container: _0x1b88ff,
            header: true,
            toolbar: false,
            footer: true,
            contextMenu: false,
          },
        ],
        [_0x1d2052],
        [_0x58625a, { notExecuteFormula: true }],
        [_0x49d362],
        [_0x1f53d9],
        [
          _0x31174b,
          {
            disableEdit: true,
            initialState: this._getInitialState(),
            override: [[_0x11b414, { useValue: _0x59bfa5(_0x1b88ff) }]],
          },
        ],
        [_0x3e3160],
        [_0x49acf7],
        [
          _0x503747,
          {
            historyServerUrl:
              _0x54998f == null ? undefined : _0x54998f.historyServerUrl,
          },
        ],
        [_0x1f4b5e],
      ],
      _0x2848e7 = new Set();
    ([
      ..._0x1053e4,
      ...((_0x54998f == null ? undefined : _0x54998f.viewerPlugins) ?? []),
    ].forEach(([_0x37318d, _0x3ab60f]) => {
      if (_0x2848e7.has(_0x37318d.pluginName))
        throw Error(
          "[BasesHistoryLoaderService]:\x20Plugin\x20" +
            _0x37318d.pluginName +
            " has already been registered.",
        );
      (_0x2848e7.add(_0x37318d.pluginName),
        _0x14af7b.registerPlugin(_0x37318d, _0x3ab60f));
    }),
      _0x14af7b.registerPlugin(Y, {
        viewerMode: true,
        descriptor: { unitId: this._unitId, type: _0x2b6c89.UNIVER_BASE },
        canRestore: _0x50243e,
        onClose: () => this.close(),
        onRestore: (_0xb3cb63) => this.restore(_0xb3cb63),
        collaborationClientConfig: this._configService["getConfig"](_0x2dba41),
      }));
  }
  _createPlaceholder(_0x8afa26) {
    let _0x101f5d = Date.now();
    _0x8afa26.createUnit(_0x2b6c89.UNIVER_BASE, {
      id: this._unitId,
      name: "",
      schemaVersion: 1,
      tables: {},
      tableOrder: [],
      createdAt: _0x101f5d,
      updatedAt: _0x101f5d,
    });
  }
  _getInitialState() {
    if (!xn(this._location)) return;
    let { tableId: _0x2f3c65, viewId: _0x1a80c1 } = this._location;
    return _0x2f3c65 || _0x1a80c1
      ? { tableId: _0x2f3c65, viewId: _0x1a80c1 }
      : undefined;
  }
  dispose() {
    var _0xefeeb7;
    (this.close(),
      (_0xefeeb7 = this._container) == null || _0xefeeb7.remove(),
      (this._container = null),
      super.dispose());
  }
};
X = R(
  [
    L(0, _0x1a1d5d),
    L(1, _0x2e85a5(_0x150c37)),
    L(2, _0x2e85a5(_0x52a649)),
    L(3, _0x2e85a5(_0x3f3966)),
    L(4, _0x2e85a5(_0x5810cd)),
    L(5, _0x2e85a5(_0x2d8d3a)),
    L(6, _0x2e85a5(_0x1853bc)),
    L(7, _0x4c84d4),
  ],
  X,
);
function xn(_0x42f948) {
  return typeof _0x42f948 == "object" && !!_0x42f948;
}
const Z = {
  id: "bases-history-ui.operation.open",
  type: _0x517c9c.OPERATION,
  handler: (_0x33991d) => {
    let _0x318dac = _0x33991d
      .get(_0x4c84d4)
      .getCurrentUnitOfType(_0x2b6c89.UNIVER_BASE);
    return _0x318dac
      ? (_0x33991d
          .get(X)
          .open(_0x318dac.getUnitId())
          .catch((_0x10507e) => {
            _0x33991d
              .get(_0x53e82c)
              .error(
                "[OpenBasesHistoryOperation]:\x20Failed\x20to\x20open\x20Base\x20history.",
                _0x10507e,
              );
          }),
        true)
      : false;
  },
};
function Sn() {
  var _0x48933b;
  let _0xcb8072 = _0x13d577(_0x4a21c4),
    _0x2416bd = _0x13d577(_0x1a1d5d),
    _0x5ae33a = _0x13d577(_0x3f3966).t("bases-history-ui.menu.history");
  return (_0x48933b = _0x2416bd.getConfig("menu")) != null &&
    (_0x48933b = _0x48933b[Z.id]) != null &&
    _0x48933b.hidden
    ? null
    : _0x5dd894(_0x258d38, {
        title: _0x5ae33a,
        placement: "top",
        children: _0x5dd894(_0x2445bb, {
          type: "button",
          variant: "text",
          className: "univer-h-8 univer-w-8 univer-p-0",
          "aria-label": _0x5ae33a,
          onClick: async () => {
            await _0xcb8072.executeCommand(Z.id);
          },
          children: _0x5dd894(_0x590f52, {}),
        }),
      });
}
let Q = class extends _0x2a3df2 {
  constructor(_0x1eb7c7, _0x49761e, _0x42f425) {
    (super(),
      this.disposeWithMe(_0x1eb7c7.registerCommand(Z)),
      this.disposeWithMe(
        _0x42f425.registerComponent(_0x46579f, () => _0x4dff7e(Sn, _0x49761e)),
      ));
  }
};
Q = R([L(0, _0x4a21c4), L(1, _0x2e85a5(_0x5baa29)), L(2, _0x59a66a)], Q);
let $ = class extends _0x42c3dc {
  constructor(_0x4bdbd3 = zt, _0x471fb5, _0x119c80) {
    (super(),
      (this._config = _0x4bdbd3),
      (this._injector = _0x471fb5),
      (this._configService = _0x119c80));
    let { ..._0xe5bef } = _0x11e3d8({}, zt, this._config);
    this._configService["setConfig"](I, _0xe5bef);
  }
  onStarting() {
    (_0x43da4d(this._injector, [[z], [X], [Q]]),
      this._injector["get"](z),
      this._injector["get"](Q));
  }
};
(U($, "pluginName", "UNIVER_BASES_HISTORY_UI_PLUGIN"),
  U($, "packageName", Bt),
  U($, "version", Vt),
  U($, "type", _0x2b6c89.UNIVER_BASE),
  ($ = R(
    [
      _0x117a9a(_0x548f90, _0x188f18, _0x1f4b5e, _0x31174b),
      L(1, _0x2e85a5(_0x5baa29)),
      L(2, _0x1a1d5d),
    ],
    $,
  )));
export {
  I as BASES_HISTORY_UI_PLUGIN_CONFIG_KEY,
  $ as UniverBasesHistoryUIPlugin,
};
