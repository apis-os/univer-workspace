Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/bases"),
  t = require("@univerjs-pro/bases-dashboard"),
  n = require("@univerjs-pro/bases/facade"),
  r = require("@univerjs/core");
var i = class {
  constructor(_0x1b03c6, _0x3263ff, _0x4153e4) {
    ((this._unitId = _0x1b03c6),
      (this._dashboardId = _0x3263ff),
      (this._context = _0x4153e4));
  }
  getId() {
    return this._dashboardId;
  }
  getPermission() {
    return new n["FBaseObjectPermission"](
      this._unitId,
      (0, e.getBaseDashboardPermissionObjectId)(this._dashboardId),
      [],
      this._context["commandService"],
      this._context["permissionService"],
    );
  }
  getSnapshot() {
    let _0x482b37 = this._context["resourceService"].getDashboard(
      this._unitId,
      this._dashboardId,
    );
    if (!_0x482b37)
      throw Error("Dashboard\x20not\x20found:\x20" + this._dashboardId);
    return _0x482b37;
  }
  getName() {
    return this.getSnapshot().name;
  }
  getWidgets() {
    let _0x1d5a27 = this.getSnapshot();
    return _0x1d5a27.widgetOrder["flatMap"]((_0xe9d574) =>
      _0x1d5a27.widgets[_0xe9d574] ? [_0x1d5a27.widgets[_0xe9d574]] : [],
    );
  }
  getWidgetById(_0x3e4403) {
    return this.getSnapshot().widgets[_0x3e4403] ?? null;
  }
  setName(_0x33a1cf) {
    return this._context["commandService"].syncExecuteCommand(
      t.UpdateBaseDashboardCommand["id"],
      {
        unitId: this._unitId,
        dashboard: { ...this.getSnapshot(), name: _0x33a1cf },
      },
    );
  }
  upsertWidget(_0x1563d7, _0x3c5c0d) {
    return this._context["commandService"].syncExecuteCommand(
      t.UpsertBaseDashboardWidgetCommand["id"],
      {
        unitId: this._unitId,
        dashboardId: this._dashboardId,
        widget: r.Tools["deepClone"](_0x1563d7),
        index: _0x3c5c0d,
      },
    );
  }
  addPivotChart(_0x1028f9, _0x108e3a, _0x1f3bcc) {
    let _0x1d2bfc = {
      id: _0x1f3bcc.id ?? "pivot-chart-" + (0, r.generateRandomId)(8),
      type: t.BaseDashboardWidgetType["PivotChart"],
      tableId: _0x1028f9,
      pivotViewId: _0x108e3a,
      layout: r.Tools["deepClone"](_0x1f3bcc.layout),
      ...(_0x1f3bcc.title === undefined ? null : { title: _0x1f3bcc.title }),
      ...(_0x1f3bcc.chart === undefined
        ? null
        : { chart: r.Tools["deepClone"](_0x1f3bcc.chart) }),
    };
    return this._addWidget(_0x1d2bfc, _0x1f3bcc.index);
  }
  addTableFilter(_0x4e54d6, _0xc59d2d) {
    let _0x1c1dd2 = {
      id: _0xc59d2d.id ?? "table-filter-" + (0, r.generateRandomId)(8),
      type: t.BaseDashboardWidgetType["TableFilter"],
      tableId: _0x4e54d6,
      filter: r.Tools["deepClone"](_0xc59d2d.filter ?? null),
      layout: r.Tools["deepClone"](_0xc59d2d.layout),
      ...(_0xc59d2d.title === undefined ? null : { title: _0xc59d2d.title }),
    };
    return this._addWidget(_0x1c1dd2, _0xc59d2d.index);
  }
  addText(_0x8b0e28) {
    let _0x42959c = {
      id: _0x8b0e28.id ?? "text-" + (0, r.generateRandomId)(8),
      type: t.BaseDashboardWidgetType["Text"],
      document: r.Tools["deepClone"](_0x8b0e28.document),
      layout: r.Tools["deepClone"](_0x8b0e28.layout),
      ...(_0x8b0e28.title === undefined ? null : { title: _0x8b0e28.title }),
      ...(_0x8b0e28.appearance === undefined
        ? null
        : { appearance: r.Tools["deepClone"](_0x8b0e28.appearance) }),
    };
    return this._addWidget(_0x42959c, _0x8b0e28.index);
  }
  addImage(_0x6c8775) {
    let _0x4bc474 = {
      id: _0x6c8775.id ?? "image-" + (0, r.generateRandomId)(8),
      type: t.BaseDashboardWidgetType["Image"],
      source: _0x6c8775.source,
      sourceType: _0x6c8775.sourceType,
      displayMode: _0x6c8775.displayMode ?? "cover",
      layout: r.Tools["deepClone"](_0x6c8775.layout),
      ...(_0x6c8775.title === undefined ? null : { title: _0x6c8775.title }),
      ...(_0x6c8775.alt === undefined ? null : { alt: _0x6c8775.alt }),
    };
    return this._addWidget(_0x4bc474, _0x6c8775.index);
  }
  addFormulaShape(_0x512d9e, _0x441f7b) {
    let _0x40e021 = {
      id: _0x441f7b.id ?? "formula-shape-" + (0, r.generateRandomId)(8),
      type: t.BaseDashboardWidgetType["FormulaShape"],
      tableId: _0x512d9e,
      shapeType: _0x441f7b.shapeType,
      shapeData: r.Tools["deepClone"](_0x441f7b.shapeData),
      layout: r.Tools["deepClone"](_0x441f7b.layout),
      ...(_0x441f7b.title === undefined ? null : { title: _0x441f7b.title }),
      ...(_0x441f7b.description === undefined
        ? null
        : { description: _0x441f7b.description }),
      ...(_0x441f7b.appearance === undefined
        ? null
        : { appearance: r.Tools["deepClone"](_0x441f7b.appearance) }),
    };
    return this._addWidget(_0x40e021, _0x441f7b.index);
  }
  moveWidget(_0x53b34c, _0x4ffbc5) {
    let _0x2f4109 = this.getWidgetById(_0x53b34c);
    return _0x2f4109
      ? this._context["commandService"].syncExecuteCommand(
          t.UpsertBaseDashboardWidgetCommand["id"],
          {
            unitId: this._unitId,
            dashboardId: this._dashboardId,
            widget: _0x2f4109,
            index: _0x4ffbc5,
          },
        )
      : false;
  }
  removeWidget(_0x117c23) {
    return this._context["commandService"].syncExecuteCommand(
      t.RemoveBaseDashboardWidgetCommand["id"],
      {
        unitId: this._unitId,
        dashboardId: this._dashboardId,
        widgetId: _0x117c23,
      },
    );
  }
  delete() {
    return this._context["commandService"].syncExecuteCommand(
      t.DeleteBaseDashboardCommand["id"],
      { unitId: this._unitId, dashboardId: this._dashboardId },
    );
  }
  _addWidget(_0x2db1d2, _0x527959) {
    if (
      !this._context["commandService"].syncExecuteCommand(
        t.UpsertBaseDashboardWidgetCommand["id"],
        {
          unitId: this._unitId,
          dashboardId: this._dashboardId,
          widget: r.Tools["deepClone"](_0x2db1d2),
          index: _0x527959,
        },
      )
    )
      throw Error(
        "Failed to add Dashboard " +
          _0x2db1d2.type +
          ' widget "' +
          _0x2db1d2.id +
          '". Verify that the Dashboard and referenced Base tables or Pivot Views exist.',
      );
    return r.Tools["deepClone"](_0x2db1d2);
  }
};
function a(_0x2eb27d, _0x5392e8, _0x35f33d, _0x3e934d) {
  let _0x17554b =
      (_0x3e934d == null ? undefined : _0x3e934d.id) ??
      "dashboard-" + (0, r.generateRandomId)(8),
    _0x45f489 = {
      unitId: _0x5392e8,
      dashboard: {
        id: _0x17554b,
        name: _0x35f33d,
        widgetOrder: [],
        widgets: {},
      },
      index: _0x3e934d == null ? undefined : _0x3e934d.index,
    };
  if (
    !_0x2eb27d.commandService["syncExecuteCommand"](
      t.CreateBaseDashboardCommand["id"],
      _0x45f489,
    )
  )
    throw Error("Failed to create dashboard: " + _0x35f33d);
  return new i(_0x5392e8, _0x17554b, _0x2eb27d);
}
var o = class {
  constructor(_0x1d589, _0x58c71b, _0x466ce8, _0x2d217a, _0x3673d1, _0x47a256) {
    ((this._unitId = _0x1d589),
      (this._tableId = _0x58c71b),
      (this._viewId = _0x466ce8),
      (this._instanceService = _0x2d217a),
      (this._commandService = _0x3673d1),
      (this._permissionService = _0x47a256));
  }
  getId() {
    return this._viewId;
  }
  getPermission() {
    return new n["FBaseObjectPermission"](
      this._unitId,
      (0, e.getBaseViewPermissionObjectId)(this._tableId, this._viewId),
      [(0, e.getBaseTablePermissionObjectId)(this._tableId)],
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
  setName(_0x1ea779) {
    return this._commandService["syncExecuteCommand"](
      e.RenameBaseViewCommand["id"],
      {
        unitId: this._unitId,
        tableId: this._tableId,
        viewId: this._viewId,
        name: _0x1ea779,
      },
    );
  }
  getSnapshot() {
    return r.Tools["deepClone"](this._getView());
  }
  getConfig() {
    return r.Tools["deepClone"](this._getView().config);
  }
  getPivotTable() {
    return (0, t.createBasePivotTable)(
      this._getTable(),
      this._getView().config["pivot"],
    );
  }
  updateConfig(_0x3bd9c2) {
    return this._commandService["syncExecuteCommand"](
      t.UpdateBasePivotViewCommand["id"],
      {
        unitId: this._unitId,
        tableId: this._tableId,
        viewId: this._viewId,
        patch: r.Tools["deepClone"](_0x3bd9c2),
      },
    );
  }
  calculate(_0x2a1c9a = []) {
    return this._commandService["executeCommand"](
      t.CalculateBasePivotCommand["id"],
      {
        unitId: this._unitId,
        tableId: this._tableId,
        viewId: this._viewId,
        filters: _0x2a1c9a,
      },
    );
  }
  delete() {
    return this._commandService["syncExecuteCommand"](
      e.DeleteBaseViewCommand["id"],
      { unitId: this._unitId, tableId: this._tableId, viewId: this._viewId },
    );
  }
  _getBase() {
    let _0x36e3d3 = this._instanceService["getUnit"](
      this._unitId,
      r.UniverInstanceType["UNIVER_BASE"],
    );
    if (!_0x36e3d3) throw Error("Base not found: " + this._unitId);
    return _0x36e3d3;
  }
  _getTable() {
    let _0x451973 = this._getBase().getSnapshot().tables[this._tableId];
    if (!_0x451973) throw Error("Table not found: " + this._tableId);
    return _0x451973;
  }
  _getView() {
    let _0x501b6d = this._getTable().views[this._viewId];
    if (!s(_0x501b6d))
      throw Error("Pivot\x20View\x20not\x20found:\x20" + this._viewId);
    return _0x501b6d;
  }
};
function s(_0x1b9cd5) {
  return (
    (_0x1b9cd5 == null ? undefined : _0x1b9cd5.type) ===
      r.BaseViewType["Pivot"] &&
    typeof _0x1b9cd5.config == "object" &&
    _0x1b9cd5.config !== null &&
    "pivot" in _0x1b9cd5.config &&
    "chart" in _0x1b9cd5.config
  );
}
const c = new WeakMap();
var l = class extends n.FBase {
  getDashboards() {
    let _0x18570f = this._getDashboardFacadeContext(),
      _0xea410f = this.getId(),
      _0x4b6aa4 = _0x18570f.resourceService["getResource"](_0xea410f);
    return _0x4b6aa4.dashboardOrder["flatMap"]((_0x34574b) =>
      _0x4b6aa4.dashboards[_0x34574b]
        ? [new i(_0xea410f, _0x34574b, _0x18570f)]
        : [],
    );
  }
  getDashboardById(_0xc6072) {
    let _0x2dd229 = this._getDashboardFacadeContext(),
      _0x5b6229 = this.getId();
    return _0x2dd229.resourceService["getDashboard"](_0x5b6229, _0xc6072)
      ? new i(_0x5b6229, _0xc6072, _0x2dd229)
      : null;
  }
  createDashboard(_0x58d89e, _0x4ae213) {
    return a(
      this._getDashboardFacadeContext(),
      this.getId(),
      _0x58d89e,
      _0x4ae213,
    );
  }
  getPivotViews(_0x2912e4) {
    let _0x431e73 = this._getDashboardFacadeContext(),
      _0x4fb739 = this.getBase().getSnapshot().tables[_0x2912e4];
    return _0x4fb739
      ? _0x4fb739.viewOrder["flatMap"]((_0x471bd5) => {
          var _0x4ab094;
          return ((_0x4ab094 = _0x4fb739.views[_0x471bd5]) == null
            ? undefined
            : _0x4ab094.type) === r.BaseViewType["Pivot"]
            ? [
                new o(
                  this.getId(),
                  _0x2912e4,
                  _0x471bd5,
                  _0x431e73.instanceService,
                  _0x431e73.commandService,
                  _0x431e73.permissionService,
                ),
              ]
            : [];
        })
      : [];
  }
  getPivotView(_0x160868, _0x3549d0) {
    var _0x9cd4d;
    let _0x325049 = this._getDashboardFacadeContext(),
      _0x106728 =
        (_0x9cd4d = this.getBase().getSnapshot().tables[_0x160868]) == null
          ? undefined
          : _0x9cd4d.views[_0x3549d0];
    return (_0x106728 == null ? undefined : _0x106728.type) ===
      r.BaseViewType["Pivot"]
      ? new o(
          this.getId(),
          _0x160868,
          _0x3549d0,
          _0x325049.instanceService,
          _0x325049.commandService,
          _0x325049.permissionService,
        )
      : null;
  }
  createPivotView(_0x468dce, _0x3323ed, _0xd34e0) {
    var _0x445c68, _0x1737e4, _0x34f24c;
    let _0xa33098 = this._getDashboardFacadeContext(),
      _0x5b32bf = this.getBase().getSnapshot().tables[_0x3323ed];
    if (!_0x5b32bf)
      throw Error(
        'Cannot create Pivot View "' +
          _0x468dce +
          '": table not found: ' +
          _0x3323ed,
      );
    let _0x4f0cbd = (0, t.createDefaultBasePivotViewConfig)(_0x5b32bf),
      _0x599724 = {
        pivot:
          (_0xd34e0 == null || (_0x445c68 = _0xd34e0.config) == null
            ? undefined
            : _0x445c68.pivot) ?? _0x4f0cbd.pivot,
        chart: {
          ..._0x4f0cbd.chart,
          ...(_0xd34e0 == null || (_0x1737e4 = _0xd34e0.config) == null
            ? undefined
            : _0x1737e4.chart),
        },
        displayMode:
          (_0xd34e0 == null || (_0x34f24c = _0xd34e0.config) == null
            ? undefined
            : _0x34f24c.displayMode) ?? _0x4f0cbd.displayMode,
      },
      _0xe4868e =
        (_0xd34e0 == null ? undefined : _0xd34e0.id) ??
        "pivot-" + (0, r.generateRandomId)(8),
      _0x245593 = {
        id: _0xe4868e,
        tableId: _0x3323ed,
        name: _0x468dce,
        type: r.BaseViewType["Pivot"],
        config: _0x599724,
        fieldOrder: [..._0x5b32bf.fieldOrder],
        fieldSettings: { [r.BASE_RECORD_ID_FIELD_ID]: { hidden: true } },
      };
    if (
      !_0xa33098.commandService["syncExecuteCommand"](
        e.CreateBaseViewCommand["id"],
        {
          unitId: this.getId(),
          tableId: _0x3323ed,
          view: _0x245593,
          index: _0xd34e0 == null ? undefined : _0xd34e0.index,
        },
      )
    )
      throw Error(
        'Failed to create Pivot View "' +
          _0x468dce +
          '" in table: ' +
          _0x3323ed,
      );
    return new o(
      this.getId(),
      _0x3323ed,
      _0xe4868e,
      _0xa33098.instanceService,
      _0xa33098.commandService,
      _0xa33098.permissionService,
    );
  }
  _getDashboardFacadeContext() {
    let _0x2cf9f7 = c.get(this);
    return (
      _0x2cf9f7 ||
        ((_0x2cf9f7 = this._injector["get"](t.BaseDashboardAPIContextService)),
        c.set(this, _0x2cf9f7)),
      _0x2cf9f7
    );
  }
};
(n.FBase["extend"](l),
  (exports.FBaseDashboard = i),
  (exports.FBasePivotView = o));
