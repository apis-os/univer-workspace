import {
  CreateBaseViewCommand as _0x377ba9,
  DeleteBaseViewCommand as _0x4e41fb,
  RenameBaseViewCommand as _0x1594e6,
  getBaseDashboardPermissionObjectId as _0x53cea5,
  getBaseTablePermissionObjectId as _0x78d1c1,
  getBaseViewPermissionObjectId as _0x506b69,
} from "@univerjs-pro/bases";
import {
  BaseDashboardAPIContextService as _0x1c2fba,
  BaseDashboardWidgetType as _0x456956,
  CalculateBasePivotCommand as _0xb151a2,
  CreateBaseDashboardCommand as _0x2bc32d,
  DeleteBaseDashboardCommand as _0x3d1ddc,
  RemoveBaseDashboardWidgetCommand as _0x3dfe40,
  UpdateBaseDashboardCommand as _0x32657c,
  UpdateBasePivotViewCommand as _0x39b22d,
  UpsertBaseDashboardWidgetCommand as _0x2b4876,
  createBasePivotTable as _0x1b1c31,
  createDefaultBasePivotViewConfig as _0x2d2177,
} from "@univerjs-pro/bases-dashboard";
import {
  FBase as _0x30afc4,
  FBaseObjectPermission as _0x54a1f4,
} from "@univerjs-pro/bases/facade";
import {
  BASE_RECORD_ID_FIELD_ID as _0x6c1841,
  BaseViewType as _0x22a3a6,
  Tools as _0x23547f,
  UniverInstanceType as _0x5c5b08,
  generateRandomId as _0x3161c6,
} from "@univerjs/core";
var w = class {
  constructor(_0x841f3f, _0x1cc190, _0x509ac6) {
    ((this._unitId = _0x841f3f),
      (this._dashboardId = _0x1cc190),
      (this._context = _0x509ac6));
  }
  getId() {
    return this._dashboardId;
  }
  getPermission() {
    return new _0x54a1f4(
      this._unitId,
      _0x53cea5(this._dashboardId),
      [],
      this._context["commandService"],
      this._context["permissionService"],
    );
  }
  getSnapshot() {
    let _0xd43a97 = this._context["resourceService"].getDashboard(
      this._unitId,
      this._dashboardId,
    );
    if (!_0xd43a97) throw Error("Dashboard not found: " + this._dashboardId);
    return _0xd43a97;
  }
  getName() {
    return this.getSnapshot().name;
  }
  getWidgets() {
    let _0x4d9cc9 = this.getSnapshot();
    return _0x4d9cc9.widgetOrder["flatMap"]((_0x2e9088) =>
      _0x4d9cc9.widgets[_0x2e9088] ? [_0x4d9cc9.widgets[_0x2e9088]] : [],
    );
  }
  getWidgetById(_0x103648) {
    return this.getSnapshot().widgets[_0x103648] ?? null;
  }
  setName(_0x28c19a) {
    return this._context["commandService"].syncExecuteCommand(_0x32657c.id, {
      unitId: this._unitId,
      dashboard: { ...this.getSnapshot(), name: _0x28c19a },
    });
  }
  upsertWidget(_0x44d0ac, _0x2dde6b) {
    return this._context["commandService"].syncExecuteCommand(_0x2b4876.id, {
      unitId: this._unitId,
      dashboardId: this._dashboardId,
      widget: _0x23547f.deepClone(_0x44d0ac),
      index: _0x2dde6b,
    });
  }
  addPivotChart(_0xa1b885, _0x3b5d7d, _0x1ab254) {
    let _0x299a43 = {
      id: _0x1ab254.id ?? "pivot-chart-" + _0x3161c6(8),
      type: _0x456956.PivotChart,
      tableId: _0xa1b885,
      pivotViewId: _0x3b5d7d,
      layout: _0x23547f.deepClone(_0x1ab254.layout),
      ...(_0x1ab254.title === undefined ? null : { title: _0x1ab254.title }),
      ...(_0x1ab254.chart === undefined
        ? null
        : { chart: _0x23547f.deepClone(_0x1ab254.chart) }),
    };
    return this._addWidget(_0x299a43, _0x1ab254.index);
  }
  addTableFilter(_0x3fd118, _0xc8fc32) {
    let _0x3f021b = {
      id: _0xc8fc32.id ?? "table-filter-" + _0x3161c6(8),
      type: _0x456956.TableFilter,
      tableId: _0x3fd118,
      filter: _0x23547f.deepClone(_0xc8fc32.filter ?? null),
      layout: _0x23547f.deepClone(_0xc8fc32.layout),
      ...(_0xc8fc32.title === undefined ? null : { title: _0xc8fc32.title }),
    };
    return this._addWidget(_0x3f021b, _0xc8fc32.index);
  }
  addText(_0x898232) {
    let _0x8350fc = {
      id: _0x898232.id ?? "text-" + _0x3161c6(8),
      type: _0x456956.Text,
      document: _0x23547f.deepClone(_0x898232.document),
      layout: _0x23547f.deepClone(_0x898232.layout),
      ...(_0x898232.title === undefined ? null : { title: _0x898232.title }),
      ...(_0x898232.appearance === undefined
        ? null
        : { appearance: _0x23547f.deepClone(_0x898232.appearance) }),
    };
    return this._addWidget(_0x8350fc, _0x898232.index);
  }
  addImage(_0x3a3cc3) {
    let _0xde0c36 = {
      id: _0x3a3cc3.id ?? "image-" + _0x3161c6(8),
      type: _0x456956.Image,
      source: _0x3a3cc3.source,
      sourceType: _0x3a3cc3.sourceType,
      displayMode: _0x3a3cc3.displayMode ?? "cover",
      layout: _0x23547f.deepClone(_0x3a3cc3.layout),
      ...(_0x3a3cc3.title === undefined ? null : { title: _0x3a3cc3.title }),
      ...(_0x3a3cc3.alt === undefined ? null : { alt: _0x3a3cc3.alt }),
    };
    return this._addWidget(_0xde0c36, _0x3a3cc3.index);
  }
  addFormulaShape(_0x5b9c73, _0x3bc4f5) {
    let _0x56af1b = {
      id: _0x3bc4f5.id ?? "formula-shape-" + _0x3161c6(8),
      type: _0x456956.FormulaShape,
      tableId: _0x5b9c73,
      shapeType: _0x3bc4f5.shapeType,
      shapeData: _0x23547f.deepClone(_0x3bc4f5.shapeData),
      layout: _0x23547f.deepClone(_0x3bc4f5.layout),
      ...(_0x3bc4f5.title === undefined ? null : { title: _0x3bc4f5.title }),
      ...(_0x3bc4f5.description === undefined
        ? null
        : { description: _0x3bc4f5.description }),
      ...(_0x3bc4f5.appearance === undefined
        ? null
        : { appearance: _0x23547f.deepClone(_0x3bc4f5.appearance) }),
    };
    return this._addWidget(_0x56af1b, _0x3bc4f5.index);
  }
  moveWidget(_0x39e5c3, _0xcfa1c0) {
    let _0x2feb79 = this.getWidgetById(_0x39e5c3);
    return _0x2feb79
      ? this._context["commandService"].syncExecuteCommand(_0x2b4876.id, {
          unitId: this._unitId,
          dashboardId: this._dashboardId,
          widget: _0x2feb79,
          index: _0xcfa1c0,
        })
      : false;
  }
  removeWidget(_0x43260c) {
    return this._context["commandService"].syncExecuteCommand(_0x3dfe40.id, {
      unitId: this._unitId,
      dashboardId: this._dashboardId,
      widgetId: _0x43260c,
    });
  }
  delete() {
    return this._context["commandService"].syncExecuteCommand(_0x3d1ddc.id, {
      unitId: this._unitId,
      dashboardId: this._dashboardId,
    });
  }
  _addWidget(_0xf2460c, _0x440635) {
    if (
      !this._context["commandService"].syncExecuteCommand(_0x2b4876.id, {
        unitId: this._unitId,
        dashboardId: this._dashboardId,
        widget: _0x23547f.deepClone(_0xf2460c),
        index: _0x440635,
      })
    )
      throw Error(
        "Failed to add Dashboard " +
          _0xf2460c.type +
          ' widget "' +
          _0xf2460c.id +
          '". Verify that the Dashboard and referenced Base tables or Pivot Views exist.',
      );
    return _0x23547f.deepClone(_0xf2460c);
  }
};
function T(_0xb08b25, _0xa5b2f7, _0x6bfc5b, _0x1d0996) {
  let _0x765feb =
      (_0x1d0996 == null ? undefined : _0x1d0996.id) ??
      "dashboard-" + _0x3161c6(8),
    _0x4634f8 = {
      unitId: _0xa5b2f7,
      dashboard: {
        id: _0x765feb,
        name: _0x6bfc5b,
        widgetOrder: [],
        widgets: {},
      },
      index: _0x1d0996 == null ? undefined : _0x1d0996.index,
    };
  if (!_0xb08b25.commandService["syncExecuteCommand"](_0x2bc32d.id, _0x4634f8))
    throw Error("Failed to create dashboard: " + _0x6bfc5b);
  return new w(_0xa5b2f7, _0x765feb, _0xb08b25);
}
var E = class {
  constructor(
    _0x223833,
    _0x46e6a4,
    _0x3963f8,
    _0xf71115,
    _0x15f708,
    _0x4cee3b,
  ) {
    ((this._unitId = _0x223833),
      (this._tableId = _0x46e6a4),
      (this._viewId = _0x3963f8),
      (this._instanceService = _0xf71115),
      (this._commandService = _0x15f708),
      (this._permissionService = _0x4cee3b));
  }
  getId() {
    return this._viewId;
  }
  getPermission() {
    return new _0x54a1f4(
      this._unitId,
      _0x506b69(this._tableId, this._viewId),
      [_0x78d1c1(this._tableId)],
      this._commandService,
      this._permissionService,
    );
  }
  getTableId() {
    return this._tableId;
  }
  getName() {
    return this._getView().name;
  }
  setName(_0x118236) {
    return this._commandService["syncExecuteCommand"](_0x1594e6.id, {
      unitId: this._unitId,
      tableId: this._tableId,
      viewId: this._viewId,
      name: _0x118236,
    });
  }
  getSnapshot() {
    return _0x23547f.deepClone(this._getView());
  }
  getConfig() {
    return _0x23547f.deepClone(this._getView().config);
  }
  getPivotTable() {
    return _0x1b1c31(this._getTable(), this._getView().config["pivot"]);
  }
  updateConfig(_0x745dd2) {
    return this._commandService["syncExecuteCommand"](_0x39b22d.id, {
      unitId: this._unitId,
      tableId: this._tableId,
      viewId: this._viewId,
      patch: _0x23547f.deepClone(_0x745dd2),
    });
  }
  calculate(_0xc5d4aa = []) {
    return this._commandService["executeCommand"](_0xb151a2.id, {
      unitId: this._unitId,
      tableId: this._tableId,
      viewId: this._viewId,
      filters: _0xc5d4aa,
    });
  }
  delete() {
    return this._commandService["syncExecuteCommand"](_0x4e41fb.id, {
      unitId: this._unitId,
      tableId: this._tableId,
      viewId: this._viewId,
    });
  }
  _getBase() {
    let _0xeaba31 = this._instanceService["getUnit"](
      this._unitId,
      _0x5c5b08.UNIVER_BASE,
    );
    if (!_0xeaba31) throw Error("Base\x20not\x20found:\x20" + this._unitId);
    return _0xeaba31;
  }
  _getTable() {
    let _0x19a37a = this._getBase().getSnapshot().tables[this._tableId];
    if (!_0x19a37a) throw Error("Table not found: " + this._tableId);
    return _0x19a37a;
  }
  _getView() {
    let _0x2404b6 = this._getTable().views[this._viewId];
    if (!D(_0x2404b6))
      throw Error("Pivot\x20View\x20not\x20found:\x20" + this._viewId);
    return _0x2404b6;
  }
};
function D(_0x2f2886) {
  return (
    (_0x2f2886 == null ? undefined : _0x2f2886.type) === _0x22a3a6.Pivot &&
    typeof _0x2f2886.config == "object" &&
    _0x2f2886.config !== null &&
    "pivot" in _0x2f2886.config &&
    "chart" in _0x2f2886.config
  );
}
const O = new WeakMap();
var k = class extends _0x30afc4 {
  getDashboards() {
    let _0xb15836 = this._getDashboardFacadeContext(),
      _0x9292c6 = this.getId(),
      _0x207bf4 = _0xb15836.resourceService["getResource"](_0x9292c6);
    return _0x207bf4.dashboardOrder["flatMap"]((_0x42fa09) =>
      _0x207bf4.dashboards[_0x42fa09]
        ? [new w(_0x9292c6, _0x42fa09, _0xb15836)]
        : [],
    );
  }
  getDashboardById(_0x1dcacf) {
    let _0x46dc55 = this._getDashboardFacadeContext(),
      _0xffe228 = this.getId();
    return _0x46dc55.resourceService["getDashboard"](_0xffe228, _0x1dcacf)
      ? new w(_0xffe228, _0x1dcacf, _0x46dc55)
      : null;
  }
  createDashboard(_0x511db1, _0x3824f5) {
    return T(
      this._getDashboardFacadeContext(),
      this.getId(),
      _0x511db1,
      _0x3824f5,
    );
  }
  getPivotViews(_0x3b3cba) {
    let _0x1b1ef8 = this._getDashboardFacadeContext(),
      _0x2b04dd = this.getBase().getSnapshot().tables[_0x3b3cba];
    return _0x2b04dd
      ? _0x2b04dd.viewOrder["flatMap"]((_0x18c13e) => {
          var _0x503208;
          return ((_0x503208 = _0x2b04dd.views[_0x18c13e]) == null
            ? undefined
            : _0x503208.type) === _0x22a3a6.Pivot
            ? [
                new E(
                  this.getId(),
                  _0x3b3cba,
                  _0x18c13e,
                  _0x1b1ef8.instanceService,
                  _0x1b1ef8.commandService,
                  _0x1b1ef8.permissionService,
                ),
              ]
            : [];
        })
      : [];
  }
  getPivotView(_0x5e4211, _0x23ae36) {
    var _0x5c1692;
    let _0x399372 = this._getDashboardFacadeContext(),
      _0x347dbf =
        (_0x5c1692 = this.getBase().getSnapshot().tables[_0x5e4211]) == null
          ? undefined
          : _0x5c1692.views[_0x23ae36];
    return (_0x347dbf == null ? undefined : _0x347dbf.type) === _0x22a3a6.Pivot
      ? new E(
          this.getId(),
          _0x5e4211,
          _0x23ae36,
          _0x399372.instanceService,
          _0x399372.commandService,
          _0x399372.permissionService,
        )
      : null;
  }
  createPivotView(_0x58f781, _0x5495d6, _0x4ba555) {
    var _0x22e277, _0x3819e2, _0x3226d5;
    let _0xb3e3d5 = this._getDashboardFacadeContext(),
      _0x2b9676 = this.getBase().getSnapshot().tables[_0x5495d6];
    if (!_0x2b9676)
      throw Error(
        'Cannot create Pivot View "' +
          _0x58f781 +
          "\x22:\x20table\x20not\x20found:\x20" +
          _0x5495d6,
      );
    let _0x50b3be = _0x2d2177(_0x2b9676),
      _0x19ebae = {
        pivot:
          (_0x4ba555 == null || (_0x22e277 = _0x4ba555.config) == null
            ? undefined
            : _0x22e277.pivot) ?? _0x50b3be.pivot,
        chart: {
          ..._0x50b3be.chart,
          ...(_0x4ba555 == null || (_0x3819e2 = _0x4ba555.config) == null
            ? undefined
            : _0x3819e2.chart),
        },
        displayMode:
          (_0x4ba555 == null || (_0x3226d5 = _0x4ba555.config) == null
            ? undefined
            : _0x3226d5.displayMode) ?? _0x50b3be.displayMode,
      },
      _0x4c8f2c =
        (_0x4ba555 == null ? undefined : _0x4ba555.id) ??
        "pivot-" + _0x3161c6(8),
      _0x2116c3 = {
        id: _0x4c8f2c,
        tableId: _0x5495d6,
        name: _0x58f781,
        type: _0x22a3a6.Pivot,
        config: _0x19ebae,
        fieldOrder: [..._0x2b9676.fieldOrder],
        fieldSettings: { [_0x6c1841]: { hidden: true } },
      };
    if (
      !_0xb3e3d5.commandService["syncExecuteCommand"](_0x377ba9.id, {
        unitId: this.getId(),
        tableId: _0x5495d6,
        view: _0x2116c3,
        index: _0x4ba555 == null ? undefined : _0x4ba555.index,
      })
    )
      throw Error(
        'Failed to create Pivot View "' +
          _0x58f781 +
          '" in table: ' +
          _0x5495d6,
      );
    return new E(
      this.getId(),
      _0x5495d6,
      _0x4c8f2c,
      _0xb3e3d5.instanceService,
      _0xb3e3d5.commandService,
      _0xb3e3d5.permissionService,
    );
  }
  _getDashboardFacadeContext() {
    let _0x529f16 = O.get(this);
    return (
      _0x529f16 ||
        ((_0x529f16 = this._injector["get"](_0x1c2fba)),
        O.set(this, _0x529f16)),
      _0x529f16
    );
  }
};
_0x30afc4.extend(k);
export { w as FBaseDashboard, E as FBasePivotView };
