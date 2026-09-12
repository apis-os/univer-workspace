Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/sheets-chart"),
  t = require("@univerjs/core"),
  n = require("@univerjs/drawing"),
  r = require("@univerjs/sheets-drawing"),
  i = require("@univerjs/sheets-drawing-ui"),
  a = require("@univerjs/sheets-ui"),
  o = require("@univerjs/ui"),
  s = require("rxjs"),
  c = require("@univerjs-pro/chart-ui"),
  l = require("@univerjs-pro/engine-chart"),
  u = require("@univerjs/sheets"),
  d = require("@univerjs/engine-formula"),
  f = require("@univerjs/drawing-ui"),
  p = require("@univerjs/engine-render"),
  m = require("react"),
  h = require("@univerjs/design"),
  g = require("@univerjs/sheets-formula-ui"),
  _ = require("react/jsx-runtime"),
  v = require("@univerjs-pro/license"),
  y = require("@univerjs/icons");
const b = "sheets-chart-ui.config",
  x = { enableChartElementFloatMenu: true },
  S = {
    type: t.CommandType["OPERATION"],
    id: "sheet.operation.hide-chart-panel",
    handler() {
      return true;
    },
  },
  C = {
    type: t.CommandType["OPERATION"],
    id: "sheet.operation.open-chart-panel",
    handler() {
      return true;
    },
  };
function w(_0x569b44) {
  let _0x20a8de = _0x569b44.get(r.ISheetDrawingService).getFocusDrawings();
  if (_0x20a8de.length !== 1) return null;
  let _0x2ae82a = _0x20a8de[0];
  return _0x2ae82a.drawingType === t.DrawingTypeEnum["DRAWING_CHART"]
    ? _0x2ae82a
    : null;
}
function T(_0x1b5a5f, _0x35e94c) {
  let _0x59170e = document.createElement("a");
  ((_0x59170e.href = _0x1b5a5f),
    (_0x59170e.download = _0x35e94c),
    _0x59170e.click());
}
const E = {
    id: "sheet.command.chart.open-focused-panel",
    type: t.CommandType["COMMAND"],
    handler: (_0x899bef, _0x34132c) => {
      let _0x221a0f = w(_0x899bef);
      return _0x221a0f
        ? _0x899bef
            .get(t.ICommandService)
            .executeCommand(C.id, {
              unitId: _0x221a0f.unitId,
              subUnitId: _0x221a0f.subUnitId,
              drawingId: _0x221a0f.drawingId,
              ...(_0x34132c != null && _0x34132c.route
                ? { route: _0x34132c.route }
                : {}),
            })
        : false;
    },
  },
  D = {
    id: "sheet.command.chart.copy-focused-chart",
    type: t.CommandType["COMMAND"],
    handler: (_0x1277cd) =>
      w(_0x1277cd)
        ? _0x1277cd
            .get(t.ICommandService)
            .executeCommand(a.SheetCopyCommand["id"])
        : false,
  },
  O = {
    id: "sheet.command.chart.export-focused-image",
    type: t.CommandType["COMMAND"],
    handler: async (_0x3958e6) => {
      let _0x29af6b = w(_0x3958e6);
      if (!_0x29af6b) return false;
      let _0x572633 = await _0x3958e6
        .get(c.ChartImageExportService)
        .exportImage({
          unitId: _0x29af6b.unitId,
          subUnitId: _0x29af6b.subUnitId,
          getId: () => _0x29af6b.drawingId,
        });
      return _0x572633
        ? (T(_0x572633, _0x29af6b.drawingId + ".png"), true)
        : false;
    },
  },
  k = {
    id: "sheet.command.chart.delete-focused-chart",
    type: t.CommandType["COMMAND"],
    handler: (_0x965cd5) => {
      let _0x477099 = w(_0x965cd5);
      return _0x477099
        ? _0x965cd5
            .get(t.ICommandService)
            .executeCommand(r.RemoveSheetDrawingCommand["id"], {
              unitId: _0x477099.unitId,
              drawings: [
                {
                  unitId: _0x477099.unitId,
                  subUnitId: _0x477099.subUnitId,
                  drawingId: _0x477099.drawingId,
                  drawingType: t.DrawingTypeEnum["DRAWING_CHART"],
                },
              ],
            })
        : false;
    },
  },
  A = {
    type: t.CommandType["COMMAND"],
    id: "sheet.command.menu-insert-chart",
    handler: async (_0x1b8465, _0x11e7c9) => {
      let _0x29c1d6 = (0, u.getSheetCommandTarget)(
        _0x1b8465.get(t.IUniverInstanceService),
      );
      if (!_0x29c1d6) return false;
      let _0x251700 = _0x1b8465
        .get(u.SheetsSelectionsService)
        .getCurrentLastSelection();
      if (!_0x251700) return false;
      let { range: _0x459f4c } = _0x251700,
        _0x2fbce7 = _0x1b8465.get(t.ICommandService),
        { unitId: _0x543be3, subUnitId: _0x332a4e } = _0x29c1d6,
        { pieSecondaryPlotType: _0x1dad43, value: _0x4f9fa7 } = _0x11e7c9,
        _0x41088e = _0x1dad43 !== undefined;
      if (
        _0x41088e &&
        (_0x4f9fa7 !== l.ChartTypeBits["Pie"] ||
          (_0x1dad43 !== l.PieSecondaryPlotType["Pie"] &&
            _0x1dad43 !== l.PieSecondaryPlotType["Bar"]))
      )
        return false;
      let _0x28de23 = _0x41088e ? (0, t.generateRandomId)() : undefined;
      return _0x2fbce7.executeCommand(e.InsertChartCommand["id"], {
        unitId: _0x543be3,
        subUnitId: _0x332a4e,
        chartType: _0x4f9fa7,
        ...(_0x28de23 && _0x1dad43
          ? {
              chartId: _0x28de23,
              config: {
                unitId: _0x543be3,
                chartModelId: _0x28de23,
                style: {
                  pie: {
                    composite: {
                      enabled: true,
                      secondaryPlot: { type: _0x1dad43 },
                    },
                  },
                },
              },
            }
          : {}),
        source: {
          rangeInfo: {
            unitId: _0x459f4c.unitId ?? _0x543be3,
            subUnitId: _0x459f4c.sheetId ?? _0x332a4e,
            range: _0x459f4c,
          },
        },
      });
    },
  };
function ee(_0x2a8bb0, _0x42e655) {
  if (_0x2a8bb0 == null) return "";
  if (Array.isArray(_0x2a8bb0)) {
    var _0xa0ed40;
    let _0x1d459e =
      (_0xa0ed40 = _0x2a8bb0[0]) == null ? undefined : _0xa0ed40.range;
    return _0x1d459e ? te(_0x1d459e, _0x42e655) : "";
  } else return te(_0x2a8bb0.rangeInfo, _0x42e655);
}
function te(_0x75f748, _0x3c15fe) {
  var _0x4202ea;
  let { unitId: _0x236832, subUnitId: _0x4efebf, range: _0x5d8f01 } = _0x75f748,
    _0x476d13 =
      (_0x4202ea = _0x3c15fe.getUnit(_0x236832)) == null
        ? undefined
        : _0x4202ea.getSheetBySheetId(_0x4efebf);
  return _0x476d13
    ? (0, d.serializeRangeWithSheet)(_0x476d13.getName(), _0x5d8f01)
    : "";
}
const ne = c.CHART_TYPE_CATALOG["map"]((_0x24b2dc) => ({
  id: "id" in _0x24b2dc ? _0x24b2dc.id : undefined,
  labelId: _0x24b2dc.labelId,
  pieSecondaryPlotType:
    "pieSecondaryPlotType" in _0x24b2dc
      ? _0x24b2dc.pieSecondaryPlotType
      : undefined,
  value: _0x24b2dc.value,
  icon: _0x24b2dc.iconName,
}));
function re(_0x802bf6 = ne) {
  return _0x802bf6.map(
    ({ id: _0x34ee0e, icon: _0x2c0537, value: _0x233006 }) => {
      let _0x49b808 = (0, c.resolveChartCreationIntent)(
          _0x34ee0e ?? String(_0x233006),
        ),
        _0x3f89f6 = _0x49b808
          ? {
              value: _0x49b808.chartType,
              ...(_0x49b808.pieSecondaryPlotType
                ? { pieSecondaryPlotType: _0x49b808.pieSecondaryPlotType }
                : {}),
            }
          : { value: _0x233006 };
      return {
        icon: _0x2c0537,
        value: _0x34ee0e ?? _0x233006,
        params: _0x3f89f6,
      };
    },
  );
}
const ie = (_0xe04358, _0x574912) => {
  if (_0x574912.length === 1 && _0x574912[0] === "all") return _0xe04358;
  if (_0x574912.length > 1) {
    let _0x3ab2dd = new Set();
    for (let _0x100ba2 of _0x574912) _0x3ab2dd.add(Number(_0x100ba2));
    return _0xe04358.filter((_0x2c13de) => _0x3ab2dd.has(_0x2c13de.value));
  }
  return [];
};
function ae(_0x3f4b23) {
  let _0x4bdf7d = _0x3f4b23.get(t.IUniverInstanceService),
    _0xed546d = (0, e.getAllowedChartTypes)(_0x3f4b23),
    _0x505226 = ie(ne.concat(), _0xed546d),
    _0x27432a = re(_0x505226).map((_0x36620a, _0x173830) => ({
      icon: _0x36620a.icon,
      value: _0x36620a.value,
      params: _0x36620a.params,
      label: "sheets-chart-ui.chartTypes." + _0x505226[_0x173830].labelId,
    }));
  return {
    id: A.id,
    type: o.MenuItemType["SELECTOR"],
    selectionsCommandId: A.id,
    selections: _0x27432a,
    icon: "ChartIcon",
    tooltip: "sheets-chart-ui.common.insertChart",
    activated$: (0, a.deriveStateFromActiveSheet$)(
      _0x4bdf7d,
      false,
      () =>
        new s.Observable((_0x1c2624) => {
          _0x1c2624.next(false);
        }),
    ),
    hidden$: (0, o.getMenuHiddenObservable)(
      _0x3f4b23,
      t.UniverInstanceType["UNIVER_SHEET"],
    ),
    disabled$: (0, a.getCurrentRangeDisable$)(_0x3f4b23),
  };
}
function j(_0x2be452) {
  let _0x116240 = _0x2be452.get(r.ISheetDrawingService);
  return _0x116240.focus$["pipe"](
    (0, s.startWith)(_0x116240.getFocusDrawings()),
    (0, s.map)(() => w(_0x2be452) == null),
  );
}
function oe(_0x29695c) {
  return {
    id: E.id,
    commandId: E.id,
    type: o.MenuItemType["BUTTON"],
    title: _0x29695c
      .get(t.LocaleService)
      .t("sheets-chart-ui.common.openChartPanel"),
    icon: "PenIcon",
    hidden$: j(_0x29695c),
  };
}
function se(_0x3bd0ad) {
  return {
    id: D.id,
    commandId: D.id,
    type: o.MenuItemType["BUTTON"],
    title: _0x3bd0ad.get(t.LocaleService).t("sheets-chart-ui.common.copy"),
    icon: "CopyDoubleIcon",
    hidden$: j(_0x3bd0ad),
  };
}
function ce(_0x4d356b) {
  return {
    id: O.id,
    commandId: O.id,
    type: o.MenuItemType["BUTTON"],
    title: _0x4d356b
      .get(t.LocaleService)
      .t("sheets-chart-ui.common.exportImage"),
    icon: "DownloadImageIcon",
    hidden$: j(_0x4d356b),
  };
}
function le(_0x13e53d) {
  return {
    id: k.id,
    commandId: k.id,
    type: o.MenuItemType["BUTTON"],
    title: _0x13e53d
      .get(t.LocaleService)
      .t("sheets-chart-ui.common.deleteChart"),
    icon: "DeleteIcon",
    hidden$: j(_0x13e53d),
  };
}
const ue = {
  [o.RibbonInsertGroup["MEDIA"]]: { [A.id]: { order: 4, menuItemFactory: ae } },
  [o.ContextMenuPosition["DRAWING"]]: {
    [o.ContextMenuGroup["OTHERS"]]: {
      [E.id]: { order: 0, menuItemFactory: oe },
      [D.id]: { order: 1, menuItemFactory: se },
      [O.id]: { order: 3, menuItemFactory: ce },
      [k.id]: { order: 4, menuItemFactory: le },
    },
  },
};
function de(_0x3e4bac) {
  return (
    _0x3e4bac === l.ChartTypeBits["Combination"] ||
    _0x3e4bac === l.ChartTypeBits["Radar"] ||
    _0x3e4bac === l.ChartTypeBits["Boxplot"] ||
    l.chartBitsUtils["baseOn"](_0x3e4bac, l.ChartTypeBits["Line"]) ||
    l.chartBitsUtils["baseOn"](_0x3e4bac, l.ChartTypeBits["Column"]) ||
    l.chartBitsUtils["baseOn"](_0x3e4bac, l.ChartTypeBits["Area"]) ||
    l.chartBitsUtils["baseOn"](_0x3e4bac, l.ChartTypeBits["Scatter"])
  );
}
function fe(_0x58af11) {
  return (
    de(_0x58af11) ||
    l.chartBitsUtils["baseOn"](_0x58af11, l.ChartTypeBits["Pie"]) ||
    l.chartBitsUtils["baseOn"](_0x58af11, l.ChartTypeBits["Pareto"]) ||
    l.chartBitsUtils["baseOn"](_0x58af11, l.ChartTypeBits["Waterfall"])
  );
}
function pe(_0x412f50, _0x8c3f1c) {
  let _0x57fb89 = (0, c.resolveChartElementSelection)(_0x412f50, _0x8c3f1c),
    _0x35d6e4 = _0x57fb89
      ? (0, c.resolveChartEditPanelRoute)(_0x57fb89.target)
      : undefined;
  if (!(!_0x57fb89 || !_0x35d6e4))
    return {
      ..._0x57fb89,
      route: _0x35d6e4,
      showFloatMenu: fe(_0x412f50.chartType) && _0x57fb89.showFloatMenu,
    };
}
function me(_0x5de79d, _0x4a4db2 = 1) {
  return {
    width: Math.max(_0x4a4db2, _0x5de79d.width),
    height: Math.max(_0x4a4db2, _0x5de79d.height),
  };
}
function he(_0x5d5edd, _0x301e2a = {}, _0x41e5b8 = { left: 0, top: 0 }) {
  let _0x456db7 = _0x301e2a.scaleX ?? 1,
    _0x41aeda = _0x301e2a.scaleY ?? 1,
    _0x40720b = c.ChartFrameLayout["resolve"]({
      logicalOuterRect: {
        left: _0x41e5b8.left > 0 ? -_0x41e5b8.left : 0,
        top: _0x41e5b8.top > 0 ? -_0x41e5b8.top : 0,
        ...me(_0x5d5edd),
      },
      scale: { scaleX: _0x456db7, scaleY: _0x41aeda },
      hostStyle: {},
      contentMode: c.ChartFrameContentMode["Overlay"],
    });
  return {
    left: _0x40720b.logicalOuterRect["left"],
    top: _0x40720b.logicalOuterRect["top"],
    width: _0x40720b.logicalOuterRect["width"],
    height: _0x40720b.logicalOuterRect["height"],
    scaleX: _0x456db7,
    scaleY: _0x41aeda,
  };
}
function M(_0x4b320d) {
  "@babel/helpers - typeof";
  return (
    (M =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x41011d) {
            return typeof _0x41011d;
          }
        : function (_0x46b439) {
            return _0x46b439 &&
              typeof Symbol == "function" &&
              _0x46b439.constructor === Symbol &&
              _0x46b439 !== Symbol.prototype
              ? "symbol"
              : typeof _0x46b439;
          }),
    M(_0x4b320d)
  );
}
function ge(_0xa7d994, _0x2bac47) {
  if (M(_0xa7d994) != "object" || !_0xa7d994) return _0xa7d994;
  var _0x4208f5 = _0xa7d994[Symbol.toPrimitive];
  if (_0x4208f5 !== undefined) {
    var _0x5589cd = _0x4208f5.call(_0xa7d994, _0x2bac47 || "default");
    if (M(_0x5589cd) != "object") return _0x5589cd;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x2bac47 === "string" ? String : Number)(_0xa7d994);
}
function _e(_0xaa9fe) {
  var _0x3ea7f9 = ge(_0xaa9fe, "string");
  return M(_0x3ea7f9) == "symbol" ? _0x3ea7f9 : _0x3ea7f9 + "";
}
function N(_0x12891, _0x53fc5a, _0x2351c1) {
  return (
    (_0x53fc5a = _e(_0x53fc5a)) in _0x12891
      ? Object.defineProperty(_0x12891, _0x53fc5a, {
          value: _0x2351c1,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x12891[_0x53fc5a] = _0x2351c1),
    _0x12891
  );
}
function ve(_0x4a8bd7) {
  switch (_0x4a8bd7.type) {
    case l.ChartImageSourceType["Canvas"]:
      return _0x4a8bd7.canvas;
    case l.ChartImageSourceType["ImageBitmap"]:
      return _0x4a8bd7.imageBitmap;
    default:
      return;
  }
}
var ye = class extends p.Rect {
  constructor(
    _0x551a35,
    _0x553ebd,
    _0x41b44e,
    _0x336e6e = () => false,
    _0x2556f0 = () => {},
  ) {
    (super(_0x551a35, { ..._0x553ebd, evented: _0x553ebd.evented ?? true }),
      (this._getImage = _0x41b44e),
      (this._shouldSuppressRender = _0x336e6e),
      (this._disposeImage = _0x2556f0),
      N(this, "_urlImage", null),
      N(this, "_url", null),
      N(this, "_requestedUrl", null),
      N(this, "_pendingUrlImage", null),
      this.setObjectType(p.ObjectType["CHART"]));
  }
  dispose() {
    (this._clearPendingUrlImage(),
      (this._urlImage = null),
      (this._url = null),
      (this._requestedUrl = null),
      this._disposeImage(),
      super.dispose());
  }
  render(_0x29fedb, _0x53f3ff) {
    if (!this.visible) return (this.makeDirty(false), this);
    if (this._shouldSuppressRender()) {
      let _0x531f52 = this._getImage();
      return (
        _0x531f52 && this._getDrawable(_0x531f52),
        this.makeDirty(false),
        this
      );
    }
    if (!this.transform) return this;
    let {
      width: _0x3cf29d,
      height: _0x4f0968,
      left: _0x41e2ac,
      top: _0x5b4423,
    } = this.getRealBound();
    if (this.isRender(_0x53f3ff)) {
      let {
        top: _0x5c0d20,
        left: _0xb1eab8,
        bottom: _0x4c420b,
        right: _0x3f1838,
      } = _0x53f3ff.viewBound;
      if (
        _0x3cf29d + this.strokeWidth + _0x41e2ac < _0xb1eab8 ||
        _0x3f1838 < _0x41e2ac ||
        _0x4f0968 + this.strokeWidth + _0x5b4423 < _0x5c0d20 ||
        _0x4c420b < _0x5b4423
      )
        return this;
    }
    let _0x42a797 = this.transform["getMatrix"]();
    _0x29fedb.save();
    let _0x41634a = _0x41e2ac + _0x3cf29d / 2,
      _0x288c1b = _0x5b4423 + _0x4f0968 / 2;
    return (
      _0x29fedb.transform(
        _0x42a797[0],
        _0x42a797[1],
        _0x42a797[2],
        _0x42a797[3],
        _0x41634a,
        _0x288c1b,
      ),
      this.opacity !== 1 && (_0x29fedb.globalAlpha = this.opacity),
      this._draw(_0x29fedb, undefined, _0x3cf29d, _0x4f0968),
      _0x29fedb.restore(),
      this.makeDirty(false),
      this
    );
  }
  _draw(_0x4a81ed, _0x23943b, _0x5e4f1c = this.width, _0x18014f = this.height) {
    (this._drawChartFrame(_0x4a81ed, _0x5e4f1c, _0x18014f, {
      stroke: undefined,
      strokeWidth: 0,
    }),
      this._drawChartImage(_0x4a81ed, _0x5e4f1c, _0x18014f),
      this._drawChartFrame(_0x4a81ed, _0x5e4f1c, _0x18014f, {
        fill: undefined,
      }));
  }
  _drawChartFrame(_0x37798c, _0x322def, _0x3597e5, _0x2b1c22) {
    (_0x37798c.save(),
      _0x37798c.translate(-_0x322def / 2, -_0x3597e5 / 2),
      p.Rect["drawWith"](_0x37798c, be(this, _0x322def, _0x3597e5, _0x2b1c22)),
      _0x37798c.restore());
  }
  isHit(_0x2c36f6) {
    let {
        left: _0x497879,
        top: _0x1b56d3,
        width: _0x471a97,
        height: _0x5d0fe9,
      } = this.getRealBound(),
      _0x4ca9b = _0x497879 + _0x471a97 / 2,
      _0x3bda8d = _0x1b56d3 + _0x5d0fe9 / 2,
      _0x5c146f = this.transform["getMatrix"](),
      _0x1e4695 = new p["Transform"]([
        _0x5c146f[0],
        _0x5c146f[1],
        _0x5c146f[2],
        _0x5c146f[3],
        _0x4ca9b,
        _0x3bda8d,
      ]),
      _0x757b19 = this.getParent(),
      _0x21d0cd = (
        this.isInGroup &&
        (_0x757b19 == null ? undefined : _0x757b19.classType) ===
          p.RENDER_CLASS_TYPE["GROUP"]
          ? _0x757b19.ancestorTransform["multiply"](_0x1e4695)
          : _0x1e4695
      )
        .invert()
        .applyPoint(_0x2c36f6),
      _0x13244e = _0x471a97 / 2,
      _0xcffe83 = _0x5d0fe9 / 2;
    return (
      _0x21d0cd.x >= -_0x13244e - this.strokeWidth / 2 &&
      _0x21d0cd.x <= _0x13244e + this.strokeWidth / 2 &&
      _0x21d0cd.y >= -_0xcffe83 - this.strokeWidth / 2 &&
      _0x21d0cd.y <= _0xcffe83 + this.strokeWidth / 2
    );
  }
  _drawChartImage(_0x54fae6, _0x4499d6, _0x82f3ac) {
    let _0x2a4b86 = this._getImage(),
      _0x45d896 = _0x2a4b86 ? this._getDrawable(_0x2a4b86) : undefined;
    if (!_0x45d896) return;
    let { width: _0x41bc65, height: _0x326de6 } = me(
      { width: _0x4499d6, height: _0x82f3ac },
      0,
    );
    _0x41bc65 !== 0 &&
      _0x326de6 !== 0 &&
      (_0x54fae6.save(),
      _0x54fae6.translate(-_0x4499d6 / 2, -_0x82f3ac / 2),
      xe(_0x54fae6, _0x41bc65, _0x326de6, this.radius),
      _0x54fae6.clip(),
      _0x54fae6.drawImage(_0x45d896, 0, 0, _0x41bc65, _0x326de6),
      _0x54fae6.restore());
  }
  _getDrawable(_0x230b43) {
    var _0x3465bd;
    let _0x1c3a26 = ve(_0x230b43);
    if (_0x1c3a26) return _0x1c3a26;
    if (
      _0x230b43.type === l.ChartImageSourceType["Url"] &&
      (this._requestedUrl !== _0x230b43.url &&
        ((this._requestedUrl = _0x230b43.url),
        this._clearPendingUrlImage(),
        this._url !== _0x230b43.url && this._loadUrlImage(_0x230b43.url)),
      (_0x3465bd = this._urlImage) != null &&
        _0x3465bd.complete &&
        this._urlImage["naturalWidth"] > 0 &&
        this._urlImage["naturalHeight"] > 0)
    )
      return this._urlImage;
  }
  _loadUrlImage(_0x59b875) {
    let _0x161d92 = document.createElement("img");
    ((this._pendingUrlImage = _0x161d92),
      (_0x161d92.crossOrigin = "anonymous"),
      (_0x161d92.onload = () => {
        this._requestedUrl === _0x59b875 &&
          this._pendingUrlImage === _0x161d92 &&
          (_0x161d92.naturalWidth > 0 &&
            _0x161d92.naturalHeight > 0 &&
            ((this._url = _0x59b875), (this._urlImage = _0x161d92)),
          this._clearPendingUrlImage(),
          this.makeDirty(true));
      }),
      (_0x161d92.onerror = () => {
        this._pendingUrlImage === _0x161d92 && this._clearPendingUrlImage();
      }),
      (_0x161d92.src = _0x59b875));
  }
  _clearPendingUrlImage() {
    this._pendingUrlImage &&=
      ((this._pendingUrlImage["onload"] = null),
      (this._pendingUrlImage["onerror"] = null),
      null);
  }
};
function be(_0xf1eb8b, _0xfdeb93, _0x39a9ff, _0x135f6a) {
  let _0x321b1f = Object.create(_0xf1eb8b);
  return (
    Object.defineProperty(_0x321b1f, "width", { value: _0xfdeb93 }),
    Object.defineProperty(_0x321b1f, "height", { value: _0x39a9ff }),
    Object.keys(_0x135f6a).forEach((_0x7eb25c) => {
      Object.defineProperty(_0x321b1f, _0x7eb25c, {
        value: _0x135f6a[_0x7eb25c],
      });
    }),
    _0x321b1f
  );
}
function xe(_0x3a0fc7, _0x436163, _0x5ffde8, _0x11dd4a) {
  let _0x221b4f = Math.min(_0x11dd4a || 0, _0x436163 / 2, _0x5ffde8 / 2);
  if ((_0x3a0fc7.beginPath(), !_0x221b4f)) {
    (_0x3a0fc7.rect(0, 0, _0x436163, _0x5ffde8), _0x3a0fc7.closePath());
    return;
  }
  (_0x3a0fc7.moveTo(_0x221b4f, 0),
    _0x3a0fc7.lineTo(_0x436163 - _0x221b4f, 0),
    _0x3a0fc7.arc(
      _0x436163 - _0x221b4f,
      _0x221b4f,
      _0x221b4f,
      (Math.PI * 3) / 2,
      0,
      false,
    ),
    _0x3a0fc7.lineTo(_0x436163, _0x5ffde8 - _0x221b4f),
    _0x3a0fc7.arc(
      _0x436163 - _0x221b4f,
      _0x5ffde8 - _0x221b4f,
      _0x221b4f,
      0,
      Math.PI / 2,
      false,
    ),
    _0x3a0fc7.lineTo(_0x221b4f, _0x5ffde8),
    _0x3a0fc7.arc(
      _0x221b4f,
      _0x5ffde8 - _0x221b4f,
      _0x221b4f,
      Math.PI / 2,
      Math.PI,
      false,
    ),
    _0x3a0fc7.lineTo(0, _0x221b4f),
    _0x3a0fc7.arc(
      _0x221b4f,
      _0x221b4f,
      _0x221b4f,
      Math.PI,
      (Math.PI * 3) / 2,
      false,
    ),
    _0x3a0fc7.closePath());
}
function P(_0x5272d9) {
  (_0x5272d9 == null ? undefined : _0x5272d9.type) ===
    l.ChartImageSourceType["ImageBitmap"] && _0x5272d9.imageBitmap["close"]();
}
function F(_0x46cfb2) {
  return (
    _0x46cfb2.unitId + "#-#" + _0x46cfb2.subUnitId + "#-#" + _0x46cfb2.chartId
  );
}
var Se = class extends t.Disposable {
  constructor(..._0x26defb) {
    (super(..._0x26defb), N(this, "_entries", new Map()));
  }
  nextVersion(_0x41cf02) {
    let _0x57a1ca = F(_0x41cf02),
      _0x2c7786 = this._entries["get"](_0x57a1ca) ?? { version: 0 };
    return (
      (_0x2c7786.version += 1),
      this._entries["set"](_0x57a1ca, _0x2c7786),
      _0x2c7786.version
    );
  }
  isLatest(_0x2e958e, _0xc43424) {
    var _0x3a6e9d;
    return (
      ((_0x3a6e9d = this._entries["get"](F(_0x2e958e))) == null
        ? undefined
        : _0x3a6e9d.version) === _0xc43424
    );
  }
  setImage(_0x3fa5b3, _0x61b360, _0x459bd0) {
    if (!this.isLatest(_0x3fa5b3, _0x459bd0)) return (P(_0x61b360), false);
    let _0x1bd63f = F(_0x3fa5b3),
      _0x5e1a59 = this._entries["get"](_0x1bd63f) ?? { version: _0x459bd0 },
      _0x1715e0 = _0x5e1a59.image;
    return (
      (_0x5e1a59.image = _0x61b360),
      (_0x5e1a59.version = _0x459bd0),
      this._entries["set"](_0x1bd63f, _0x5e1a59),
      _0x1715e0 !== _0x61b360 && P(_0x1715e0),
      true
    );
  }
  getImage(_0x2510c5) {
    var _0x55f6af;
    return (_0x55f6af = this._entries["get"](F(_0x2510c5))) == null
      ? undefined
      : _0x55f6af.image;
  }
  clearImage(_0x209a65) {
    let _0x157d08 = F(_0x209a65),
      _0x198ba0 = this._entries["get"](_0x157d08);
    _0x198ba0 && (P(_0x198ba0.image), this._entries["delete"](_0x157d08));
  }
  clearChart(_0x205df7) {
    for (let [_0x4567ee, _0x7155ff] of this._entries)
      _0x4567ee.endsWith("#-#" + _0x205df7) &&
        (P(_0x7155ff.image), this._entries["delete"](_0x4567ee));
  }
  dispose() {
    (this._entries["forEach"]((_0x59e9c9) => P(_0x59e9c9.image)),
      this._entries["clear"](),
      super.dispose());
  }
};
function Ce(_0x125bd1, _0x28bf75 = 2000) {
  let _0x11848f = null,
    _0x263c6d = null,
    _0x5f02b7 = false,
    _0x5554d0 = () => {},
    _0x187fe1 = () => {
      (_0x11848f != null && (clearInterval(_0x11848f), (_0x11848f = null)),
        _0x263c6d != null && (clearTimeout(_0x263c6d), (_0x263c6d = null)));
    };
  return {
    promise: new Promise((_0x421cb5, _0x36d9ce) => {
      _0x5554d0 = _0x36d9ce;
      let _0x2db11e = () => {
        let _0x381f5d = document.getElementById(_0x125bd1);
        !_0x381f5d ||
          _0x5f02b7 ||
          ((_0x5f02b7 = true), _0x187fe1(), _0x421cb5(_0x381f5d));
      };
      (_0x2db11e(),
        !_0x5f02b7 &&
          ((_0x11848f = setInterval(_0x2db11e, 16.666666666666668)),
          (_0x263c6d = setTimeout(() => {
            _0x5f02b7 ||
              ((_0x5f02b7 = true),
              _0x187fe1(),
              _0x36d9ce(
                Error(
                  'Timed out waiting for float dom host "' +
                    _0x125bd1 +
                    "\x22.",
                ),
              ));
          }, _0x28bf75))));
    }),
    cancel: () => {
      _0x5f02b7 ||
        ((_0x5f02b7 = true),
        _0x187fe1(),
        _0x5554d0(
          Error('Canceled waiting for float dom host "' + _0x125bd1 + "\x22."),
        ));
    },
  };
}
var we = class extends t.Disposable {
    constructor(
      _0x1ee733,
      _0x133c66,
      _0x52fcd5,
      _0x17d6cd,
      _0x38a495,
      _0x23b868,
      _0xeb2b2a,
    ) {
      (super(),
        (this.chartId = _0x1ee733),
        (this._getFloatDomInfo = _0x133c66),
        (this._getPlacement = _0x52fcd5),
        (this._setHostStyle = _0x17d6cd),
        (this._isProviderDisposed = _0x38a495),
        (this._markReady = _0x23b868),
        (this._markNotReady = _0xeb2b2a),
        N(this, "mode", l.ChartRenderMode["Dom"]),
        N(this, "_domFrame", null),
        N(this, "_managed", false),
        N(this, "_pendingToken", null),
        N(this, "_pendingHost", null),
        N(this, "_waiter", null),
        N(this, "_hostStyle", {}),
        N(this, "_savedWrapperStyle", null),
        N(this, "_dataUpdateAnimationDuration", null));
    }
    isManaged() {
      return this._managed;
    }
    markUnmanaged() {
      this._managed = false;
    }
    getRect() {
      let _0xc11810 = this._getPlacement();
      return _0xc11810
        ? { width: _0xc11810.width, height: _0xc11810.height }
        : null;
    }
    setStyle(_0x366809) {
      ((this._hostStyle = _0x366809),
        this._setHostStyle(_0x366809),
        this._applyHostStyle());
    }
    async ensureHandle() {
      if (this._disposed || this._isProviderDisposed())
        throw Error("Fail to create float dom");
      let _0x53e2d0 = this._getFloatDomInfo(),
        _0x28df59 =
          (_0x53e2d0 == null ? undefined : _0x53e2d0.domId) ?? this.chartId,
        _0x2a6cef = document.getElementById(_0x28df59);
      if (
        this._domFrame &&
        _0x2a6cef != null &&
        _0x2a6cef.contains(this._domFrame["mountNode"])
      )
        return {
          mountNode: this._domFrame["mountNode"],
          dispose: () => {
            (this.dispose(),
              _0x53e2d0 == null || _0x53e2d0.dispose["dispose"]());
          },
        };
      if (this._pendingHost) return this._pendingHost;
      let _0x4f5f75 = this._createHost();
      return (
        (this._pendingHost = _0x4f5f75),
        _0x4f5f75.then(
          () => {
            this._pendingHost === _0x4f5f75 && (this._pendingHost = null);
          },
          () => {
            this._pendingHost === _0x4f5f75 && (this._pendingHost = null);
          },
        ),
        _0x4f5f75
      );
    }
    async ensureMount() {
      try {
        return (await this.ensureHandle()).mountNode;
      } catch {
        return null;
      }
    }
    checkMounted() {
      let _0x15f0d2 = this._getFloatDomInfo(),
        _0x3852de =
          (_0x15f0d2 == null ? undefined : _0x15f0d2.domId) ?? this.chartId,
        _0x1c7f8b = document.getElementById(_0x3852de);
      return !!(
        this._domFrame &&
        _0x1c7f8b != null &&
        _0x1c7f8b.contains(this._domFrame["mountNode"])
      );
    }
    syncLayout() {
      if (!this._domFrame) return;
      let _0x56d3ee = this._getPlacement();
      _0x56d3ee &&
        this._domFrame["update"](
          this._resolveLayout(_0x56d3ee),
          this._frameStyle(),
        );
    }
    markReady() {
      this._markReady();
    }
    markNotReady() {
      this._markNotReady();
    }
    setDataUpdateAnimation(_0x28e311) {
      this._dataUpdateAnimationDuration = _0x28e311;
      let _0x375138 = this._getFloatDomInfo(),
        _0x50b13b = document.getElementById(
          (_0x375138 == null ? undefined : _0x375138.domId) ?? this.chartId,
        );
      _0x50b13b && this._applyHostInteractionState(_0x50b13b);
    }
    dispose() {
      var _0x5921fd;
      this._disposed ||
        (this.markNotReady(),
        (this._pendingToken = null),
        (this._pendingHost = null),
        this._cancelHostWait(),
        (this._managed = false),
        (this._dataUpdateAnimationDuration = null),
        (_0x5921fd = this._domFrame) == null || _0x5921fd.dispose(),
        (this._domFrame = null),
        this._restoreHostWrapper(),
        super.dispose());
    }
    async _createHost() {
      let _0x10b413 = this._getFloatDomInfo();
      if (!_0x10b413) throw Error("Fail to create float dom");
      let _0x5998bb = _0x10b413.domId ?? this.chartId,
        _0x50d4a0 = Ce(_0x5998bb),
        _0x32d59a = Symbol(this.chartId);
      ((this._pendingToken = _0x32d59a), (this._waiter = _0x50d4a0));
      try {
        let _0x41d373 = await _0x50d4a0.promise,
          _0x212c23 = this._getFloatDomInfo(),
          _0x3a5c8a =
            (_0x212c23 == null ? undefined : _0x212c23.domId) ?? this.chartId;
        if (
          this._disposed ||
          this._isProviderDisposed() ||
          this._pendingToken !== _0x32d59a ||
          !_0x212c23 ||
          _0x3a5c8a !== _0x5998bb ||
          document.getElementById(_0x5998bb) !== _0x41d373 ||
          !_0x41d373.isConnected
        )
          throw Error("Fail\x20to\x20create\x20float\x20dom");
        let _0x368757 = this._getPlacement();
        if (!_0x368757) throw Error("Fail to create float dom");
        let _0x5455ff = new c["ChartDomFrame"](_0x41d373);
        return (
          _0x5455ff.update(this._resolveLayout(_0x368757), this._frameStyle()),
          this._activateHostWrapper(_0x41d373),
          (this._domFrame = _0x5455ff),
          (this._managed = true),
          {
            mountNode: _0x5455ff.mountNode,
            dispose: () => {
              (this.dispose(), _0x10b413.dispose["dispose"]());
            },
          }
        );
      } finally {
        (this._waiter === _0x50d4a0 && (this._waiter = null),
          this._pendingToken === _0x32d59a && (this._pendingToken = null));
      }
    }
    _cancelHostWait() {
      let _0x2be530 = this._waiter;
      _0x2be530 && (_0x2be530.cancel(), (this._waiter = null));
    }
    _applyHostStyle() {
      let _0x28f3b2 = this._getPlacement();
      this._domFrame &&
        _0x28f3b2 &&
        this._domFrame["update"](
          this._resolveLayout(_0x28f3b2),
          this._frameStyle(),
        );
    }
    _resolveLayout(_0x4fcc9b) {
      return c.ChartFrameLayout["resolve"]({
        logicalOuterRect: {
          left: _0x4fcc9b.left,
          top: _0x4fcc9b.top,
          width: _0x4fcc9b.width,
          height: _0x4fcc9b.height,
        },
        scale: { scaleX: _0x4fcc9b.scaleX, scaleY: _0x4fcc9b.scaleY },
        hostStyle: this._frameStyle(),
        contentMode: c.ChartFrameContentMode["Overlay"],
      });
    }
    _frameStyle() {
      return { ...this._hostStyle, radius: c.CHART_HOST_BORDER_RADIUS };
    }
    _activateHostWrapper(_0x25a930) {
      let _0x2c4103 = _0x25a930.parentElement;
      _0x2c4103 &&
        ((this._savedWrapperStyle ||= {
          zIndex: _0x2c4103.style["zIndex"],
          pointerEvents: _0x2c4103.style["pointerEvents"],
        }),
        (_0x2c4103.style["zIndex"] = "1000"),
        this._applyHostInteractionState(_0x25a930));
    }
    _applyHostInteractionState(_0x28e519) {
      let _0x3ef1fb = _0x28e519.parentElement;
      if (!_0x3ef1fb) return;
      let _0x522728 = this._dataUpdateAnimationDuration;
      if (_0x522728 != null) {
        ((_0x28e519.dataset["sheetChartDataAnimation"] = "true"),
          (_0x28e519.dataset["sheetChartDataAnimationDuration"] =
            String(_0x522728)),
          (_0x3ef1fb.style["pointerEvents"] = "none"));
        return;
      }
      (delete _0x28e519.dataset["sheetChartDataAnimation"],
        delete _0x28e519.dataset["sheetChartDataAnimationDuration"],
        (_0x3ef1fb.style["pointerEvents"] = "auto"));
    }
    _restoreHostWrapper() {
      if (!this._savedWrapperStyle) return;
      let _0xe4fd13 = this._getFloatDomInfo(),
        _0x2c71fd =
          (_0xe4fd13 == null ? undefined : _0xe4fd13.domId) ?? this.chartId,
        _0x289601 = document.getElementById(_0x2c71fd);
      (_0x289601 == null || delete _0x289601.dataset["sheetChartDataAnimation"],
        _0x289601 == null ||
          delete _0x289601.dataset["sheetChartDataAnimationDuration"]);
      let _0x4cf752 = _0x289601 == null ? undefined : _0x289601.parentElement;
      (_0x4cf752 &&
        ((_0x4cf752.style["zIndex"] = this._savedWrapperStyle["zIndex"]),
        (_0x4cf752.style["pointerEvents"] =
          this._savedWrapperStyle["pointerEvents"])),
        (this._savedWrapperStyle = null));
    }
  },
  Te = class extends l.ImageChartHost {
    constructor(
      _0x12a319,
      _0x3f7020,
      _0x4818b3,
      _0xcdd566,
      _0xb50ef2,
      _0x357896,
    ) {
      (super(_0x12a319),
        (this._getOuterRect = _0x3f7020),
        (this._setHostStyle = _0x4818b3),
        (this._snapshotKey = _0xcdd566),
        (this._snapshotStore = _0xb50ef2),
        (this._requestPaint = _0x357896));
    }
    getRect() {
      let _0x2fb151 = this._getOuterRect();
      return _0x2fb151 ? me(_0x2fb151) : null;
    }
    setStyle(_0x422a30) {
      this._setHostStyle(_0x422a30);
    }
    nextVersion() {
      return this._snapshotStore["nextVersion"](this._snapshotKey);
    }
    commitSnapshot(_0x483ea7, _0x1c1115) {
      return this._snapshotStore["setImage"](
        this._snapshotKey,
        _0x483ea7,
        _0x1c1115,
      );
    }
    requestPaint() {
      this._requestPaint();
    }
    invalidateSnapshot() {
      this._snapshotStore["nextVersion"](this._snapshotKey);
    }
  };
function I(_0x4c87b1, _0x63487) {
  return function (_0x24d855, _0x5cd1a0) {
    _0x63487(_0x24d855, _0x5cd1a0, _0x4c87b1);
  };
}
function L(_0x3358cc, _0x50e90e, _0x269e84, _0x44050f) {
  var _0x123bb0 = arguments.length,
    _0x124c20 =
      _0x123bb0 < 3
        ? _0x50e90e
        : _0x44050f === null
          ? (_0x44050f = Object.getOwnPropertyDescriptor(_0x50e90e, _0x269e84))
          : _0x44050f,
    _0x4319dc;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x124c20 = Reflect.decorate(_0x3358cc, _0x50e90e, _0x269e84, _0x44050f);
  else {
    for (var _0x3395a4 = _0x3358cc.length - 1; _0x3395a4 >= 0; _0x3395a4--)
      (_0x4319dc = _0x3358cc[_0x3395a4]) &&
        (_0x124c20 =
          (_0x123bb0 < 3
            ? _0x4319dc(_0x124c20)
            : _0x123bb0 > 3
              ? _0x4319dc(_0x50e90e, _0x269e84, _0x124c20)
              : _0x4319dc(_0x50e90e, _0x269e84)) || _0x124c20);
  }
  return (
    _0x123bb0 > 3 &&
      _0x124c20 &&
      Object.defineProperty(_0x50e90e, _0x269e84, _0x124c20),
    _0x124c20
  );
}
const Ee = 0.5;
function De(_0xb863bf) {
  let _0x39e1ed = Math.max(_0xb863bf.endX - _0xb863bf.startX, 0),
    _0x1a52dd = Math.max(_0xb863bf.endY - _0xb863bf.startY, 0),
    _0x6a2781 = _0xb863bf.absolute["left"] && _0xb863bf.width - _0x39e1ed > Ee,
    _0x1ff301 = _0xb863bf.absolute["top"] && _0xb863bf.height - _0x1a52dd > Ee;
  return !_0x6a2781 && !_0x1ff301
    ? _0xb863bf
    : {
        ..._0xb863bf,
        absolute: {
          left: !_0x6a2781 && _0xb863bf.absolute["left"],
          top: !_0x1ff301 && _0xb863bf.absolute["top"],
        },
      };
}
function Oe(_0x3a8698) {
  if (!Object.prototype["hasOwnProperty"].call(_0x3a8698, "border"))
    return _0x3a8698;
  let { border: _0x2359f7, ..._0xc4e608 } = _0x3a8698;
  return {
    ..._0xc4e608,
    stroke: (_0x2359f7 == null ? undefined : _0x2359f7.color) ?? "transparent",
    strokeWidth: (_0x2359f7 == null ? undefined : _0x2359f7.width) ?? 0,
  };
}
let ke = class extends t.Disposable {
  constructor(_0x4c5261, _0x5e1f49, _0x599678, _0x211f13) {
    (super(),
      (this._sheetCanvasFloatDomManagerService = _0x4c5261),
      (this._renderManagerService = _0x5e1f49),
      (this._chartSnapshotStoreService = _0x599678),
      (this._canvasFloatDomService = _0x211f13),
      N(this, "_chartHostMap", new Map()),
      N(this, "_activeDomReadyChartIds", new Set()),
      N(this, "_removeHost$", new s.Subject()),
      N(this, "removeHost$", this._removeHost$["asObservable"]()),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["remove$"].subscribe(
          (_0x48508a) => {
            let _0x303e4f = this._chartHostMap["get"](_0x48508a.id);
            _0x303e4f != null &&
              _0x303e4f.isManaged() &&
              (_0x303e4f.markUnmanaged(),
              this._removeHost$["next"](_0x48508a.id));
          },
        ),
      ));
  }
  _getSceneAndTransformerByDrawingSearch(_0x2da61b) {
    if (_0x2da61b == null) return;
    let _0x5d4f50 = this._renderManagerService["getRenderUnitById"](_0x2da61b),
      _0x540e2d = _0x5d4f50 == null ? undefined : _0x5d4f50.scene;
    return _0x5d4f50 == null || _0x540e2d == null
      ? null
      : {
          scene: _0x540e2d,
          transformer: _0x540e2d.getTransformerByCreate(),
          renderUnit: _0x5d4f50,
          canvas: _0x5d4f50.engine["getCanvasElement"](),
        };
  }
  setBorder(_0x242db5, _0x3c7467) {
    let _0x3e0d36 = this._sheetCanvasFloatDomManagerService,
      _0x309691 = _0x3c7467 || "transparent",
      _0x4b7b39 = _0x3e0d36.getFloatDomInfo(_0x242db5);
    if (_0x4b7b39) {
      let { unitId: _0x43c382, subUnitId: _0x2253a0 } = _0x4b7b39;
      _0x3e0d36.updateFloatDomProps(_0x43c382, _0x2253a0, _0x242db5, {
        stroke: _0x309691,
      });
    }
  }
  setHostStyle(_0x13aa28, _0x3f406b) {
    let _0x442bbe = this._sheetCanvasFloatDomManagerService,
      _0x8669bc = _0x442bbe.getFloatDomInfo(_0x13aa28);
    if (_0x8669bc) {
      let { unitId: _0x47081d, subUnitId: _0x1ebc8a } = _0x8669bc;
      _0x442bbe.updateFloatDomProps(
        _0x47081d,
        _0x1ebc8a,
        _0x13aa28,
        Oe(_0x3f406b),
      );
    }
  }
  getHostSize(_0x299595) {
    let _0x8a6a55 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x299595);
    return _0x8a6a55 ? _0x8a6a55.rect : null;
  }
  getHostClientRect(_0x4808fa) {
    let _0x51f219 =
        this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x4808fa),
      _0x206bf9 = document.getElementById(
        (_0x51f219 == null ? undefined : _0x51f219.domId) ?? _0x4808fa,
      );
    return (
      (_0x206bf9 == null ? undefined : _0x206bf9.getBoundingClientRect()) ??
      null
    );
  }
  setDataUpdateAnimation(_0x58961f, _0x3602dc) {
    var _0x13bbfb;
    (_0x13bbfb = this._chartHostMap["get"](_0x58961f)) == null ||
      _0x13bbfb.setDataUpdateAnimation(_0x3602dc);
  }
  checkHost(_0x34102c) {
    var _0x100a61;
    return (
      ((_0x100a61 = this._chartHostMap["get"](_0x34102c)) == null
        ? undefined
        : _0x100a61.checkMounted()) ?? false
    );
  }
  syncHostLayout(_0x334fa2) {
    var _0x1ca274;
    (_0x1ca274 = this._chartHostMap["get"](_0x334fa2)) == null ||
      _0x1ca274.syncLayout();
  }
  removeHost(_0x41a372) {
    let _0x4859d3 = this._chartHostMap["get"](_0x41a372);
    (_0x4859d3 == null || _0x4859d3.dispose(),
      this._chartHostMap["delete"](_0x41a372));
  }
  async ensureHost(_0x3c0509, _0x25d588) {
    if (_0x25d588 === l.ChartRenderMode["Image"])
      return this._createImageChartHost(_0x3c0509);
    if (_0x25d588 === l.ChartRenderMode["Dom"])
      return this._getOrCreateSheetChartHost(_0x3c0509);
    let _0x5b0192 = this._getOrCreateSheetChartHost(_0x3c0509);
    if (!_0x5b0192) throw Error("Fail to create float dom");
    return _0x5b0192.ensureHandle();
  }
  isDomReady(_0x5ada02) {
    var _0x1eface;
    return this._activeDomReadyChartIds["has"](_0x5ada02)
      ? (_0x1eface = this._chartHostMap["get"](_0x5ada02)) != null &&
        _0x1eface.checkMounted()
        ? true
        : (this._activeDomReadyChartIds["delete"](_0x5ada02),
          this._restoreFloatDomPositionStream(_0x5ada02),
          false)
      : false;
  }
  markHostNotReady(_0x376308) {
    this._activeDomReadyChartIds["delete"](_0x376308) &&
      (this._restoreFloatDomPositionStream(_0x376308),
      this._requestChartCanvasRender(_0x376308));
  }
  invalidateSnapshot(_0x4cc1c2) {
    let _0x3af21 = this._getChartSnapshotKey(_0x4cc1c2);
    _0x3af21 && this._chartSnapshotStoreService["nextVersion"](_0x3af21);
  }
  _createImageChartHost(_0x5e1982) {
    let _0x29c265 = this._getChartSnapshotKey(_0x5e1982);
    return !_0x29c265 || !this.getHostSize(_0x5e1982)
      ? null
      : new Te(
          _0x5e1982,
          () => this.getHostSize(_0x5e1982),
          (_0x56b947) => this.setHostStyle(_0x5e1982, _0x56b947),
          _0x29c265,
          this._chartSnapshotStoreService,
          () => this._requestChartCanvasRender(_0x5e1982),
        );
  }
  _getOrCreateSheetChartHost(_0x568857) {
    if (!this.getHostSize(_0x568857)) return null;
    this._canvasFloatDomService["updateFloatDom"](_0x568857, {
      contentBox: { wrapperInset: 0, contentInset: 0 },
    });
    let _0x298852 = this._chartHostMap["get"](_0x568857);
    if (_0x298852) return _0x298852;
    let _0xa4cd7a = new we(
      _0x568857,
      () =>
        this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x568857),
      () => this._getHostPlacement(_0x568857),
      (_0x3dd7cc) => this.setHostStyle(_0x568857, _0x3dd7cc),
      () => this._disposed,
      () => this._markHostReady(_0x568857),
      () => this.markHostNotReady(_0x568857),
    );
    return (this._chartHostMap["set"](_0x568857, _0xa4cd7a), _0xa4cd7a);
  }
  _markHostReady(_0x2328a7) {
    this._activeDomReadyChartIds["has"](_0x2328a7) ||
      (this._activeDomReadyChartIds["add"](_0x2328a7),
      this._alignFloatDomPositionWithSceneRender(_0x2328a7),
      this._requestChartCanvasRender(_0x2328a7));
  }
  _alignFloatDomPositionWithSceneRender(_0x8c5a02) {
    var _0x8dacb8;
    let _0x2efa93 =
        this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x8c5a02),
      _0xc0c1ba = _0x2efa93
        ? (_0x8dacb8 = this._renderManagerService["getRenderUnitById"](
            _0x2efa93.unitId,
          )) == null
          ? undefined
          : _0x8dacb8.scene
        : null;
    if (!_0x2efa93 || !_0xc0c1ba) return;
    let _0x5dfc18 = (0, s.merge)(
      _0x2efa93.position$["pipe"]((0, s.take)(1)),
      _0xc0c1ba.afterRender$["pipe"](
        (0, s.withLatestFrom)(_0x2efa93.position$),
        (0, s.map)(([, _0x592521]) => _0x592521),
      ),
    ).pipe((0, s.distinctUntilChanged)(), (0, s.map)(De));
    this._canvasFloatDomService["updateFloatDom"](_0x8c5a02, {
      position$: _0x5dfc18,
    });
  }
  _restoreFloatDomPositionStream(_0x319088) {
    let _0x248449 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x319088);
    _0x248449 &&
      this._canvasFloatDomService["updateFloatDom"](_0x319088, {
        position$: _0x248449.position$,
      });
  }
  _getChartSnapshotKey(_0x5be456) {
    let _0x3a18cb =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x5be456);
    return _0x3a18cb
      ? {
          unitId: _0x3a18cb.unitId,
          subUnitId: _0x3a18cb.subUnitId,
          chartId: _0x5be456,
        }
      : null;
  }
  _requestChartCanvasRender(_0x3705d1) {
    var _0x5b71e7, _0x27af28, _0x4ccac3;
    let _0x3807d5 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x3705d1);
    if (!_0x3807d5) return;
    let _0x108da2 =
        (_0x5b71e7 = this._renderManagerService["getRenderUnitById"](
          _0x3807d5.unitId,
        )) == null
          ? undefined
          : _0x5b71e7.scene,
      _0xd68c6b =
        (_0x108da2 == null ||
        (_0x27af28 = _0x108da2.getObjectIncludeInGroup) == null
          ? undefined
          : _0x27af28.call(
              _0x108da2,
              (0, n.getDrawingShapeKeyByDrawingSearch)({
                unitId: _0x3807d5.unitId,
                subUnitId: _0x3807d5.subUnitId,
                drawingId: _0x3705d1,
              }),
            )) ??
        (_0x108da2 == null
          ? undefined
          : _0x108da2.getObject(
              (0, n.getDrawingShapeKeyByDrawingSearch)({
                unitId: _0x3807d5.unitId,
                subUnitId: _0x3807d5.subUnitId,
                drawingId: _0x3705d1,
              }),
            )) ??
        null;
    (_0xd68c6b == null ||
      (_0x4ccac3 = _0xd68c6b.makeDirty) == null ||
      _0x4ccac3.call(_0xd68c6b, true),
      _0x108da2 == null || _0x108da2.makeDirty(true));
  }
  _getHostPlacement(_0x3d3012) {
    let _0x727d53 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x3d3012);
    if (!_0x727d53) return null;
    let _0x6dda43 = this._getSceneAndTransformerByDrawingSearch(
        _0x727d53.unitId,
      ),
      _0x5ce125 = _0x6dda43 == null ? undefined : _0x6dda43.scene,
      _0x152a45 = document.getElementById(_0x727d53.domId ?? _0x3d3012);
    return he(
      _0x727d53.rect,
      {
        scaleX: (_0x5ce125 == null ? undefined : _0x5ce125.scaleX) ?? 1,
        scaleY: (_0x5ce125 == null ? undefined : _0x5ce125.scaleY) ?? 1,
      },
      _0x152a45
        ? { left: _0x152a45.offsetLeft, top: _0x152a45.offsetTop }
        : undefined,
    );
  }
  dispose() {
    this._disposed ||
      (this._chartHostMap["forEach"]((_0x17ddbe) => _0x17ddbe.dispose()),
      this._chartHostMap["clear"](),
      this._activeDomReadyChartIds["clear"](),
      this._removeHost$["complete"](),
      super.dispose());
  }
};
ke = L(
  [
    I(0, (0, t.Inject)(i.SheetCanvasFloatDomManagerService)),
    I(1, (0, t.Inject)(p.IRenderManagerService)),
    I(2, (0, t.Inject)(Se)),
    I(3, (0, t.Inject)(o.CanvasFloatDomService)),
  ],
  ke,
);
const R = (0, t.createIdentifier)("sheets-chart-ui.host.provider"),
  Ae = l.ChartRenderMode["Image"];
var je = class extends l.ImageChartHost {
  constructor(_0x5d3d51, _0xf24a67) {
    (super(_0x5d3d51),
      (this._rect = _0xf24a67),
      N(this, "_version", 0),
      N(this, "_image", undefined),
      N(this, "style", {}));
  }
  getRect() {
    return this._rect;
  }
  setStyle(_0x5e954d) {
    this.style = _0x5e954d;
  }
  nextVersion() {
    return ++this._version;
  }
  commitSnapshot(_0x423928, _0x628642) {
    return _0x628642 === this._version
      ? (P(this._image), (this._image = _0x423928), true)
      : (P(_0x423928), false);
  }
  requestPaint() {}
  invalidateSnapshot() {
    this._version += 1;
  }
  takeSnapshot() {
    let _0x718cf8 = this._image;
    return ((this._image = undefined), _0x718cf8);
  }
  dispose() {
    (P(this._image), (this._image = undefined), super.dispose());
  }
};
function Me(_0x12ca41, _0x324d52, _0x19c4a8) {
  let _0x530794 = _0x12ca41.getRuntimeContext(_0x324d52);
  return (0, l.resolveChartRuntimeStyle)(
    {
      ..._0x12ca41.style,
      runtime: {
        ..._0x530794,
        layoutInset: 8,
        ...(_0x19c4a8 === undefined ? {} : { addWatermark: _0x19c4a8 }),
      },
      direction: _0x324d52,
    },
    _0x12ca41.chartType,
  );
}
let z = class extends t.Disposable {
  constructor(
    _0x364ad0,
    _0x10161a,
    _0x50d438,
    _0x587669,
    _0x2dd3df,
    _0x5a5352,
    _0x38eae2,
    _0x881b11,
    _0x53d905,
    _0x2ee076,
    _0x4346a8,
    _0x5e5dd6,
    _0x55ff97,
  ) {
    (super(),
      (this._chartHostProvider = _0x364ad0),
      (this._sheetCanvasFloatDomManagerService = _0x10161a),
      (this._chartModelService = _0x50d438),
      (this._drawingManagerService = _0x587669),
      (this._univerInstanceService = _0x2dd3df),
      (this._renderManagerService = _0x5a5352),
      (this._localeService = _0x38eae2),
      (this._injector = _0x881b11),
      (this._chartThemeService = _0x53d905),
      (this._themeService = _0x2ee076),
      (this._configService = _0x4346a8),
      (this._chartSnapshotStoreService = _0x5e5dd6),
      (this._renderModelManager = _0x55ff97),
      N(this, "_chartInstanceMap", new Map()),
      N(this, "_chartEventHandlers", new Map()),
      N(this, "_chartEventSubscriptions", new Map()),
      N(this, "_chartElementEditMode", new Map()),
      N(this, "_renderDebounceMap", new Map()),
      N(this, "_debounceHandleMap", new Map()),
      N(this, "_chartRenderMode", undefined),
      N(this, "_addWatermark", undefined),
      N(this, "_lastRenderInputMap", new Map()),
      N(this, "_dataUpdateAnimationChartIds", new Set()),
      N(this, "_dataUpdateAnimationTimers", new Map()),
      N(this, "_activeChartId", null),
      N(this, "_lastActiveSheet", null));
    let _0x34eb09 = (0, e.getAllowedChartTypes)(this._injector),
      _0x22b248 = this._configService["getConfig"](
        e.SHEETS_CHART_PLUGIN_CONFIG_KEY,
      );
    ((this._chartRenderMode =
      (_0x22b248 == null ? undefined : _0x22b248.chartRenderMode) ?? Ae),
      (this._addWatermark = _0x34eb09.length !== 1 || _0x34eb09[0] !== "all"),
      this._registerChartImageRenderObjectFactory(),
      this._initActiveChartModelListener(),
      this._initDrawingDeactivationListener(),
      this._initActiveRuntimeLayerListener(),
      this.handleActiveSubUnitChange());
  }
  getChartSnapshotImage(_0x1676b2) {
    let _0x2650cf = this._getChartSnapshotKey(_0x1676b2);
    return _0x2650cf
      ? this._chartSnapshotStoreService["getImage"](_0x2650cf)
      : undefined;
  }
  _resolveChartRenderMode(_0x4634ed) {
    var _0x1fb4d9;
    return ((_0x1fb4d9 = this._chartModelService["activeChartModel"]) == null
      ? undefined
      : _0x1fb4d9.id) === _0x4634ed
      ? l.ChartRenderMode["Dom"]
      : this._chartRenderMode;
  }
  _getChartSnapshotKey(_0x3830b4) {
    let _0x2b1e74 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x3830b4);
    return _0x2b1e74
      ? {
          unitId: _0x2b1e74.unitId,
          subUnitId: _0x2b1e74.subUnitId,
          chartId: _0x3830b4,
        }
      : null;
  }
  _registerChartImageRenderObjectFactory() {
    this._chartRenderMode === l.ChartRenderMode["Image"] &&
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["registerRenderObjectFactory"](
          t.DrawingTypeEnum["DRAWING_CHART"],
          ({
            key: _0x1fc160,
            config: _0x65ba27,
            unitId: _0x3a49aa,
            subUnitId: _0x48129f,
            drawingId: _0x1e1472,
          }) =>
            new ye(
              _0x1fc160,
              _0x65ba27,
              () =>
                this._chartSnapshotStoreService["getImage"]({
                  unitId: _0x3a49aa,
                  subUnitId: _0x48129f,
                  chartId: _0x1e1472,
                }),
              () => this._chartHostProvider["isDomReady"](_0x1e1472),
            ),
        ),
      );
  }
  _initActiveChartModelListener() {
    this.disposeWithMe(
      this._chartModelService["activeChartModel$"].subscribe((_0x16292a) => {
        let _0x2a356a = (_0x16292a == null ? undefined : _0x16292a.id) ?? null,
          _0x44b871 = this._activeChartId;
        _0x44b871 !== _0x2a356a &&
          (_0x44b871 &&
            (this._chartHostProvider["markHostNotReady"](_0x44b871),
            this._resetChartRuntimeZIndex(_0x44b871),
            this._disposeChartDomInstance(_0x44b871)),
          (this._activeChartId = _0x2a356a),
          _0x2a356a &&
            (this._deactivateDataUpdateAnimation(_0x2a356a),
            this._chartHostProvider["markHostNotReady"](_0x2a356a),
            this._applyActiveChartRuntimeZIndex(_0x2a356a),
            this._rerenderLatest(_0x2a356a)));
      }),
    );
  }
  _initDrawingDeactivationListener() {
    (this.disposeWithMe(
      this._drawingManagerService["featurePluginGroupUpdate$"].subscribe(
        (_0xdd6bcb) => {
          var _0x88ae70;
          let _0x1e0d89 =
            (_0x88ae70 = this._chartModelService["activeChartModel"]) == null
              ? undefined
              : _0x88ae70.id;
          _0x1e0d89 &&
            _0xdd6bcb.some((_0x25b5fa) =>
              _0x25b5fa.children["some"](
                (_0x4d85f6) => _0x4d85f6.drawingId === _0x1e0d89,
              ),
            ) &&
            this._chartModelService["setActiveChartModel"](null);
        },
      ),
    ),
      this.disposeWithMe(
        this._drawingManagerService["featurePluginUngroupUpdate$"].subscribe(
          (_0x281a3a) => {
            var _0x1f4ece;
            let _0x201854 =
              (_0x1f4ece = this._chartModelService["activeChartModel"]) == null
                ? undefined
                : _0x1f4ece.id;
            _0x201854 &&
              _0x281a3a.some(
                (_0x14f8b8) =>
                  _0x14f8b8.parent["drawingId"] === _0x201854 ||
                  _0x14f8b8.children["some"](
                    (_0x644b03) => _0x644b03.drawingId === _0x201854,
                  ),
              ) &&
              this._chartModelService["setActiveChartModel"](null);
          },
        ),
      ));
  }
  _initActiveRuntimeLayerListener() {
    (this.disposeWithMe(
      this._drawingManagerService["featurePluginOrderUpdate$"].subscribe(
        (_0x54b5c1) => {
          var _0x542c49;
          let _0x36b780 =
            (_0x542c49 = this._chartModelService["activeChartModel"]) == null
              ? undefined
              : _0x542c49.id;
          if (!_0x36b780) {
            _0x54b5c1.drawingIds["forEach"]((_0x37088d) => {
              this._chartModelService["getChartModel"](_0x37088d) &&
                this._resetChartRuntimeZIndex(_0x37088d);
            });
            return;
          }
          let _0x3b4380 =
            this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](
              _0x36b780,
            );
          (_0x3b4380 == null ? undefined : _0x3b4380.unitId) ===
            _0x54b5c1.unitId &&
            _0x3b4380.subUnitId === _0x54b5c1.subUnitId &&
            this._applyActiveChartRuntimeZIndex(_0x36b780);
        },
      ),
    ),
      this.disposeWithMe(
        this._drawingManagerService["add$"].subscribe((_0x500bf5) => {
          var _0x2f52c9;
          let _0x8ae81e =
            (_0x2f52c9 = this._chartModelService["activeChartModel"]) == null
              ? undefined
              : _0x2f52c9.id;
          if (!_0x8ae81e) return;
          let _0x40dd14 =
            this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](
              _0x8ae81e,
            );
          _0x40dd14 &&
            _0x500bf5.some(
              (_0x1f66c3) =>
                _0x1f66c3.unitId === _0x40dd14.unitId &&
                _0x1f66c3.subUnitId === _0x40dd14.subUnitId,
            ) &&
            this._applyActiveChartRuntimeZIndex(_0x8ae81e);
        }),
      ),
      this.disposeWithMe(
        this._chartModelService["chartModelRemoved$"].subscribe((_0xcd47c0) => {
          var _0x528e83;
          (this._deactivateDataUpdateAnimation(_0xcd47c0),
            this._lastRenderInputMap["delete"](_0xcd47c0),
            this._chartSnapshotStoreService["clearChart"](_0xcd47c0),
            this._clearChartRuntimeCache(_0xcd47c0),
            this._chartHostProvider["markHostNotReady"](_0xcd47c0),
            ((_0x528e83 = this._chartModelService["activeChartModel"]) == null
              ? undefined
              : _0x528e83.id) === _0xcd47c0
              ? this._chartModelService["setActiveChartModel"](null)
              : this._resetChartRuntimeZIndex(_0xcd47c0),
            this._disposeChartRenderInstance(_0xcd47c0));
        }),
      ));
  }
  _rerenderLatest(_0x37ea70) {
    let _0x27090a = this._lastRenderInputMap["get"](_0x37ea70);
    _0x27090a && this.render(_0x37ea70, _0x27090a.config, _0x27090a.style);
  }
  _disposeChartDomInstance(_0x3e7734) {
    let _0x2d39bb = this._chartInstanceMap["get"](_0x3e7734);
    ((_0x2d39bb == null ? undefined : _0x2d39bb.mode) === "dom" &&
      (this._disposeChartEventSubscriptions(_0x3e7734),
      _0x2d39bb.dispose(),
      this._chartInstanceMap["delete"](_0x3e7734)),
      this._chartHostProvider["markHostNotReady"](_0x3e7734),
      this._chartHostProvider["removeHost"](_0x3e7734));
  }
  _disposeChartRenderInstance(_0x19f681) {
    let _0xa7c2a = this._chartInstanceMap["get"](_0x19f681);
    (_0xa7c2a &&
      (this._disposeChartEventSubscriptions(_0x19f681),
      _0xa7c2a.dispose(),
      this._chartInstanceMap["delete"](_0x19f681)),
      this._chartHostProvider["markHostNotReady"](_0x19f681),
      this._chartHostProvider["removeHost"](_0x19f681));
  }
  _clearChartRuntimeCache(_0x4755d8) {
    var _0x4920f1, _0x2ac854;
    (_0x4920f1 = this._renderModelManager["getRenderModel"](
      l.EChartRenderEngineName,
    )) == null ||
      (_0x2ac854 = _0x4920f1.clearRuntimeCache) == null ||
      _0x2ac854.call(_0x4920f1, _0x4755d8);
  }
  _clearSheetChartRuntimeCaches(_0x420050, _0x17f5f6) {
    let _0x5cc62f = this._drawingManagerService["getDrawingData"](
      _0x420050,
      _0x17f5f6,
    );
    Object.values(_0x5cc62f ?? {}).forEach((_0x348313) => {
      _0x348313.drawingType === t.DrawingTypeEnum["DRAWING_CHART"] &&
        this._clearChartRuntimeCache(_0x348313.drawingId);
    });
  }
  _getChartRenderObject(_0x5d7185, _0x9b7464) {
    var _0xc3b8c1;
    return (
      ((_0xc3b8c1 = _0x5d7185.getObjectIncludeInGroup) == null
        ? undefined
        : _0xc3b8c1.call(_0x5d7185, _0x9b7464)) ??
      _0x5d7185.getObject(_0x9b7464) ??
      null
    );
  }
  _getChartRenderObjectContext(_0x2e41cc) {
    var _0x20f410;
    let _0x1f7ae8 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x2e41cc);
    if (!_0x1f7ae8) return null;
    let _0x446705 =
      (_0x20f410 = this._renderManagerService["getRenderUnitById"](
        _0x1f7ae8.unitId,
      )) == null
        ? undefined
        : _0x20f410.scene;
    if (!_0x446705) return null;
    let _0x5017c2 = this._getChartRenderObject(
      _0x446705,
      (0, n.getDrawingShapeKeyByDrawingSearch)({
        unitId: _0x1f7ae8.unitId,
        subUnitId: _0x1f7ae8.subUnitId,
        drawingId: _0x2e41cc,
      }),
    );
    return _0x5017c2
      ? { info: _0x1f7ae8, scene: _0x446705, chartObject: _0x5017c2 }
      : null;
  }
  _setChartRuntimeZIndex(_0x35173c, _0x379a7d) {
    var _0x2d3b50, _0x2d730f, _0x3805bc, _0x55d960;
    let _0x183fce = this._getChartRenderObjectContext(_0x35173c);
    _0x183fce &&
      ((_0x2d3b50 = (_0x2d730f = _0x183fce.chartObject).setProps) == null ||
        _0x2d3b50.call(_0x2d730f, { zIndex: _0x379a7d }),
      (_0x3805bc = (_0x55d960 = _0x183fce.chartObject).makeDirty) == null ||
        _0x3805bc.call(_0x55d960, true),
      _0x183fce.scene["makeDirty"](true));
  }
  _applyActiveChartRuntimeZIndex(_0x464364) {
    let _0x1bd275 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x464364);
    if (!_0x1bd275) return;
    let _0x2c47ee = this._drawingManagerService["getDrawingOrder"](
      _0x1bd275.unitId,
      _0x1bd275.subUnitId,
    );
    this._setChartRuntimeZIndex(_0x464364, _0x2c47ee.length);
  }
  _resetChartRuntimeZIndex(_0x4006f9) {
    let _0x499b30 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x4006f9);
    if (!_0x499b30) return;
    let _0x58cdac = this._drawingManagerService["getDrawingOrder"](
        _0x499b30.unitId,
        _0x499b30.subUnitId,
      ),
      _0x256967 = _0x58cdac.indexOf(_0x4006f9);
    this._setChartRuntimeZIndex(
      _0x4006f9,
      _0x256967 === -1 ? Math.max(_0x58cdac.length - 1, 0) : _0x256967,
    );
  }
  _resizeChart(_0x48eed1, _0x2aa871) {
    let _0x6a82f8 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x48eed1);
    if (
      _0x2aa871.width !== undefined &&
      _0x2aa871.height !== undefined &&
      _0x6a82f8
    ) {
      var _0x7209a2;
      let { subUnitId: _0x3a7958 } = _0x6a82f8,
        _0x4782a3 =
          (_0x7209a2 = this._univerInstanceService["getCurrentUnitOfType"](
            t.UniverInstanceType["UNIVER_SHEET"],
          )) == null
            ? undefined
            : _0x7209a2.getActiveSheet();
      if (
        (_0x4782a3 == null ? undefined : _0x4782a3.getSheetId()) === _0x3a7958
      ) {
        let { width: _0x1a1d3d, height: _0x239f4c } = _0x2aa871,
          _0x6f7d29 = this._chartModelService["getChartModel"](_0x48eed1),
          _0x3d91a4 = _0x6f7d29 == null ? undefined : _0x6f7d29.style;
        if (
          Math.abs(
            _0x1a1d3d -
              ((_0x3d91a4 == null ? undefined : _0x3d91a4.width) || 0),
          ) > 1 ||
          Math.abs(
            _0x239f4c -
              ((_0x3d91a4 == null ? undefined : _0x3d91a4.height) || 0),
          ) > 1
        ) {
          _0x6f7d29 == null ||
            _0x6f7d29.assignStyle({
              ..._0x3d91a4,
              width: _0x1a1d3d,
              height: _0x239f4c,
            });
          let _0x116bee = this._chartInstanceMap["get"](_0x48eed1);
          _0x116bee &&
            (this._chartHostProvider["syncHostLayout"](_0x48eed1),
            _0x116bee.resize());
        }
      }
    }
  }
  _debounceHandle(_0x43e622, _0x5ac5d4, _0x4bba6e = 0) {
    let _0xada9b = this._debounceHandleMap["get"](_0x43e622);
    (_0xada9b ||
      ((_0xada9b = (0, t.debounce)((_0x2c9425) => {
        this._resizeChart(_0x43e622, _0x2c9425);
      }, _0x4bba6e)),
      this._debounceHandleMap["set"](_0x43e622, _0xada9b)),
      _0xada9b(_0x5ac5d4));
  }
  handleActiveSubUnitChange() {
    let _0x1d64ac = this._renderDebounceMap,
      _0x759aff = (_0x9a78c0) => {
        if (!_0x1d64ac.has(_0x9a78c0)) {
          let _0x1a0665 = (0, t.debounce)(
            (_0x135ae4, _0x50d92c, _0x395fc6, _0x46e1eb) => {
              var _0x34096d, _0x4b4fa4;
              if (!_0x395fc6) return;
              ((_0x34096d = _0x395fc6.category) == null ||
                _0x34096d.items["forEach"]((_0x5572d1, _0x2f0f57) => {
                  _0x5572d1.label ||=
                    this._localeService["t"](
                      "sheets-chart-ui.common.category",
                    ) +
                    "\x20" +
                    (_0x2f0f57 + 1);
                }),
                _0x395fc6.series["forEach"]((_0x4a3836, _0x3c0e7c) => {
                  _0x4a3836.name ||=
                    this._localeService["t"]("sheets-chart-ui.chord.target") +
                    "\x20" +
                    (_0x3c0e7c + 1);
                }));
              let _0x5b446a = this.createRuntimeChartStyle(
                  _0x135ae4,
                  _0x46e1eb,
                ),
                _0x2604d7 =
                  (_0x4b4fa4 = this._univerInstanceService[
                    "getCurrentUnitOfType"
                  ](t.UniverInstanceType["UNIVER_SHEET"])) == null
                    ? undefined
                    : _0x4b4fa4.getActiveSheet();
              (_0x2604d7 == null ? undefined : _0x2604d7.getSheetId()) ===
                _0x50d92c && this.render(_0x135ae4.id, _0x395fc6, _0x5b446a);
            },
            17,
          );
          _0x1d64ac.set(_0x9a78c0, _0x1a0665);
        }
        return _0x1d64ac.get(_0x9a78c0);
      };
    (this.disposeWithMe(
      this._univerInstanceService["focused$"].subscribe((_0x1c49d4) => {
        let _0x13062c = this._univerInstanceService["getCurrentUnitOfType"](
          t.UniverInstanceType["UNIVER_SHEET"],
        );
        if (_0x1c49d4 && _0x13062c && _0x13062c.getUnitId() === _0x1c49d4) {
          var _0xc83d09;
          let _0x186939 = _0x13062c.getActiveSheet().getSheetId();
          (this._lastActiveSheet &&
            (this._lastActiveSheet["unitId"] !== _0x1c49d4 ||
              this._lastActiveSheet["subUnitId"] !== _0x186939) &&
            this._clearSheetChartRuntimeCaches(
              this._lastActiveSheet["unitId"],
              this._lastActiveSheet["subUnitId"],
            ),
            (this._lastActiveSheet = {
              unitId: _0x1c49d4,
              subUnitId: _0x186939,
            }));
          let _0x15ebff = this._drawingManagerService["getDrawingData"](
            _0x1c49d4,
            _0x186939,
          );
          if (!(
            (_0xc83d09 =
              this._renderManagerService["getRenderUnitById"](_0x1c49d4)) !=
              null &&
            _0xc83d09.with(a.SheetSkeletonManagerService).getSkeleton(_0x186939)
          ))
            return;
          if (_0x15ebff)
            for (let _0x37af33 in _0x15ebff) {
              let { drawingId: _0x162aac } = _0x15ebff[_0x37af33],
                _0x28ab6c = this._chartModelService["getChartModel"](_0x162aac);
              _0x28ab6c &&
                _0x759aff(_0x28ab6c.id)(
                  _0x28ab6c,
                  _0x186939,
                  _0x28ab6c.config,
                  this._localeService["getDirection"](),
                );
            }
        }
      }),
    ),
      this.disposeWithMe(
        this._themeService["darkMode$"].subscribe(() => {
          var _0x29540f;
          let _0x440754 = this._univerInstanceService["getCurrentUnitOfType"](
            t.UniverInstanceType["UNIVER_SHEET"],
          );
          if (!_0x440754) return;
          let _0x5721a5 = _0x440754.getUnitId(),
            _0x46d2a3 = _0x440754.getActiveSheet().getSheetId(),
            _0x12d9c2 = this._drawingManagerService["getDrawingData"](
              _0x5721a5,
              _0x46d2a3,
            );
          if (
            (_0x29540f =
              this._renderManagerService["getRenderUnitById"](_0x5721a5)) !=
              null &&
            _0x29540f
              .with(a.SheetSkeletonManagerService)
              .getSkeleton(_0x46d2a3) &&
            _0x12d9c2
          )
            for (let _0x109ef3 in _0x12d9c2) {
              let { drawingId: _0x28cad0 } = _0x12d9c2[_0x109ef3],
                _0x3ff10c = this._chartModelService["getChartModel"](_0x28cad0);
              _0x3ff10c &&
                _0x759aff(_0x3ff10c.id)(
                  _0x3ff10c,
                  _0x46d2a3,
                  _0x3ff10c.config,
                  this._localeService["getDirection"](),
                );
            }
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["add$"].subscribe((_0x5c214d) => {
          _0x5c214d.forEach((_0x114366) => {
            var _0x1817f1;
            let {
                drawingId: _0x1618c1,
                unitId: _0x122121,
                subUnitId: _0x449eeb,
              } = _0x114366,
              _0x4fd556 =
                this._renderManagerService["getRenderUnitById"](_0x122121);
            if (
              (_0x4fd556 == null ? undefined : _0x4fd556.type) !==
                t.UniverInstanceType["UNIVER_SHEET"] ||
              !_0x4fd556
                .with(a.SheetSkeletonManagerService)
                .getSkeleton(_0x449eeb)
            )
              return;
            let { drawingType: _0x1ee516 } =
              this._drawingManagerService["getDrawingByParam"](_0x114366);
            if (_0x1ee516 !== t.DrawingTypeEnum["DRAWING_CHART"]) return;
            let _0x295441 =
                this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](
                  _0x1618c1,
                ),
              _0x2b89de =
                (_0x295441 == null ? undefined : _0x295441.domId) ?? _0x1618c1,
              _0x3c0560 = _0x295441 == null ? undefined : _0x295441.rect,
              _0x5c5c04 =
                (_0x1817f1 =
                  this._renderManagerService["getRenderUnitById"](_0x122121)) ==
                null
                  ? undefined
                  : _0x1817f1.scene;
            (_0x3c0560 &&
              this.disposeWithMe(
                _0x3c0560 == null
                  ? undefined
                  : _0x3c0560.onTransformChange$["subscribeEvent"](
                      (_0x130792) => {
                        let { type: _0x4e6b9c, value: _0xf6fb66 } = _0x130792;
                        if (
                          p.TRANSFORM_CHANGE_OBSERVABLE_TYPE["resize"] ===
                            _0x4e6b9c ||
                          p.TRANSFORM_CHANGE_OBSERVABLE_TYPE["all"] ===
                            _0x4e6b9c
                        ) {
                          let { width: _0x3917eb, height: _0x3b32ee } =
                            _0xf6fb66;
                          this._debounceHandle(
                            _0x1618c1,
                            { width: _0x3917eb, height: _0x3b32ee },
                            100,
                          );
                        }
                      },
                    ),
              ),
              _0x5c5c04 &&
                this.disposeWithMe(
                  _0x5c5c04.onTransformChange$["subscribeEvent"](
                    (_0x54e3d6) => {
                      var _0x1a08e9;
                      _0x54e3d6.type ===
                        p.TRANSFORM_CHANGE_OBSERVABLE_TYPE["scale"] &&
                        (_0x1a08e9 = document.getElementById(_0x2b89de)) !=
                          null &&
                        _0x1a08e9.querySelector(".chart-host") &&
                        this._chartHostProvider["syncHostLayout"](_0x1618c1);
                    },
                  ),
                ));
            let _0x2256fa = this._chartModelService["getChartModel"](_0x1618c1);
            _0x2256fa &&
              this.disposeWithMe(
                (0, s.combineLatest)([
                  _0x2256fa.config$,
                  _0x2256fa.style$,
                  this._localeService["direction$"],
                ]).subscribe(([_0x408ad8, _0x308801, _0x56cc01]) => {
                  _0x759aff(_0x2256fa.id)(
                    _0x2256fa,
                    _0x449eeb,
                    _0x408ad8,
                    _0x56cc01,
                  );
                }),
              );
          });
        }),
      ),
      this.disposeWithMe(
        (0, s.combineLatest)([
          this._drawingManagerService["remove$"],
        ]).subscribe(([_0x17cfa4]) => {
          _0x17cfa4.forEach((_0x5c3b31) => {
            var _0x5489f6;
            let { drawingId: _0x1faecc } = _0x5c3b31;
            (((_0x5489f6 = this._chartModelService["activeChartModel"]) == null
              ? undefined
              : _0x5489f6.id) === _0x1faecc &&
              this._chartModelService["setActiveChartModel"](null),
              this._disposeChartEventSubscriptions(_0x1faecc),
              this._chartEventHandlers["delete"](_0x1faecc),
              this._chartHostProvider["markHostNotReady"](_0x1faecc),
              this._resetChartRuntimeZIndex(_0x1faecc),
              this._disposeChartRenderInstance(_0x1faecc),
              this._chartSnapshotStoreService["clearChart"](_0x1faecc),
              this._clearChartRuntimeCache(_0x1faecc),
              this._lastRenderInputMap["delete"](_0x1faecc),
              this._chartElementEditMode["delete"](_0x1faecc));
          });
        }),
      ));
  }
  setElementEditMode(_0x2673a2, _0x75c89e) {
    var _0x4cec90;
    (_0x75c89e
      ? this._chartElementEditMode["set"](_0x2673a2, true)
      : this._chartElementEditMode["delete"](_0x2673a2),
      (_0x4cec90 = this._chartInstanceMap["get"](_0x2673a2)) == null ||
        _0x4cec90.setElementEditMode(_0x75c89e));
  }
  async exportImage(_0x332695, _0x3af671) {
    var _0x43fa85;
    let _0x5cb7f2 = this._lastRenderInputMap["get"](_0x332695),
      _0x277f3a =
        (_0x43fa85 =
          this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](
            _0x332695,
          )) == null
          ? undefined
          : _0x43fa85.rect;
    if (_0x5cb7f2 && _0x277f3a)
      return (
        await this._renderModelManager["exportImage"](
          {
            chartId: _0x332695,
            config: _0x5cb7f2.config,
            style: _0x5cb7f2.style,
            width: _0x277f3a.width,
            height: _0x277f3a.height,
          },
          _0x3af671,
        )
      ).dataUrl;
    if (
      (_0x3af671 == null ? undefined : _0x3af671.format) ===
      l.ChartImageExportFormat["SVG"]
    )
      return;
    let _0x350ac = this._getCurrentSnapshotImage(_0x332695);
    return _0x350ac ? (0, l.chartImageSourceToDataUrl)(_0x350ac) : undefined;
  }
  on(_0x31b18e, _0x5ececa, _0x3da90b) {
    let _0x4f6c7b = this._chartEventHandlers["get"](_0x31b18e);
    _0x4f6c7b ||
      ((_0x4f6c7b = new Map()),
      this._chartEventHandlers["set"](_0x31b18e, _0x4f6c7b));
    let _0x14f390 = _0x4f6c7b.get(_0x5ececa);
    (_0x14f390 ||
      ((_0x14f390 = new Set()), _0x4f6c7b.set(_0x5ececa, _0x14f390)),
      _0x14f390.add(_0x3da90b));
    let _0x2d97e3 = this._chartInstanceMap["get"](_0x31b18e);
    return (
      _0x2d97e3 &&
        this._bindChartEventHandler(_0x31b18e, _0x2d97e3, _0x5ececa, _0x3da90b),
      {
        dispose: () => {
          var _0x46874c;
          ((_0x46874c = this._chartEventHandlers["get"](_0x31b18e)) == null ||
            (_0x46874c = _0x46874c.get(_0x5ececa)) == null ||
            _0x46874c.delete(_0x3da90b),
            this._disposeChartEventSubscription(
              _0x31b18e,
              _0x5ececa,
              _0x3da90b,
            ));
        },
      }
    );
  }
  _getCurrentSnapshotImage(_0x30a8f2) {
    let _0x18115f = this._univerInstanceService["getCurrentUnitOfType"](
        t.UniverInstanceType["UNIVER_SHEET"],
      ),
      _0x130c8e = _0x18115f == null ? undefined : _0x18115f.getActiveSheet(),
      _0x8ca918 = _0x18115f == null ? undefined : _0x18115f.getUnitId(),
      _0x30f325 = _0x130c8e == null ? undefined : _0x130c8e.getSheetId();
    if (!(!_0x8ca918 || !_0x30f325))
      return this._chartSnapshotStoreService["getImage"]({
        unitId: _0x8ca918,
        subUnitId: _0x30f325,
        chartId: _0x30a8f2,
      });
  }
  _bindChartEventHandlers(_0x2698a1, _0xc9892f) {
    let _0x2ccd96 = this._chartEventHandlers["get"](_0x2698a1);
    _0x2ccd96 &&
      _0x2ccd96.forEach((_0x2ffb4c, _0x11b356) => {
        _0x2ffb4c.forEach((_0x2fc4c1) =>
          this._bindChartEventHandler(
            _0x2698a1,
            _0xc9892f,
            _0x11b356,
            _0x2fc4c1,
          ),
        );
      });
  }
  _bindChartEventHandler(_0x163a8b, _0x1e84a1, _0x3b016e, _0x4c0cd0) {
    let _0x12c3fd = this._chartEventSubscriptions["get"](_0x163a8b);
    _0x12c3fd ||
      ((_0x12c3fd = new Map()),
      this._chartEventSubscriptions["set"](_0x163a8b, _0x12c3fd));
    let _0x300dd0 = _0x12c3fd.get(_0x3b016e);
    (_0x300dd0 ||
      ((_0x300dd0 = new Map()), _0x12c3fd.set(_0x3b016e, _0x300dd0)),
      !_0x300dd0.has(_0x4c0cd0) &&
        _0x300dd0.set(_0x4c0cd0, _0x1e84a1.on(_0x3b016e, _0x4c0cd0)));
  }
  _disposeChartEventSubscription(_0x9d9efa, _0x5a7eca, _0x11e9d2) {
    var _0x46dd3c, _0x5ad05e;
    let _0x582c39 =
      (_0x46dd3c = this._chartEventSubscriptions["get"](_0x9d9efa)) == null
        ? undefined
        : _0x46dd3c.get(_0x5a7eca);
    (_0x582c39 == null ||
      (_0x5ad05e = _0x582c39.get(_0x11e9d2)) == null ||
      _0x5ad05e.dispose(),
      _0x582c39 == null || _0x582c39.delete(_0x11e9d2));
  }
  _disposeChartEventSubscriptions(_0x5e1157) {
    let _0x56c266 = this._chartEventSubscriptions["get"](_0x5e1157);
    (_0x56c266 == null ||
      _0x56c266.forEach((_0xf135e0) => {
        (_0xf135e0.forEach((_0x3c7586) => _0x3c7586.dispose()),
          _0xf135e0.clear());
      }),
      this._chartEventSubscriptions["delete"](_0x5e1157));
  }
  createRuntimeChartStyle(_0x19a44c, _0x51f993) {
    return Me(_0x19a44c, _0x51f993, this._addWatermark);
  }
  checkChartCanRender(_0x126a4d) {
    return this._getChartRenderSkipReason(_0x126a4d) == null;
  }
  _getChartRenderSkipReason(_0xf20085) {
    var _0x36f03e;
    let _0x1a5b2c =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0xf20085);
    if (!_0x1a5b2c) return "missing-float-dom";
    let { subUnitId: _0x3b052b } = _0x1a5b2c,
      _0x4200ac =
        (_0x36f03e = this._univerInstanceService["getCurrentUnitOfType"](
          t.UniverInstanceType["UNIVER_SHEET"],
        )) == null
          ? undefined
          : _0x36f03e.getActiveSheet();
    if (!_0x4200ac) return "missing-active-sheet";
    if (_0x4200ac.getSheetId() !== _0x3b052b) return "inactive-sheet";
  }
  async render(_0x3e3370, _0x22d59f, _0x4e6774, _0x25a716 = {}) {
    let _0xbe3944 = this._renderModelManager["getRenderModel"](
      l.EChartRenderEngineName,
    );
    if (!_0xbe3944) return;
    let _0x490ea9 = this._lastRenderInputMap["get"](_0x3e3370);
    if (
      (this._lastRenderInputMap["set"](_0x3e3370, {
        config: _0x22d59f,
        style: _0x4e6774,
      }),
      this._getChartRenderSkipReason(_0x3e3370))
    )
      return;
    let {
      canAnimate: _0x2a28a5,
      renderMode: _0x58313e,
      shouldStartTransientAnimation: _0xea25dd,
      transientAnimationActive: _0x4483ab,
    } = this._prepareDataUpdateRender(
      _0x3e3370,
      _0x490ea9 != null,
      _0x25a716.animateDataUpdate === true,
    );
    if (_0x58313e === l.ChartRenderMode["Image"])
      this._disposeChartDomInstance(_0x3e3370);
    else {
      var _0x9578fa;
      (this._chartHostProvider["invalidateSnapshot"](_0x3e3370),
        ((_0x9578fa = this._chartModelService["activeChartModel"]) == null
          ? undefined
          : _0x9578fa.id) === _0x3e3370 &&
          this._applyActiveChartRuntimeZIndex(_0x3e3370));
    }
    let _0x3594ad =
        _0x58313e === l.ChartRenderMode["Image"]
          ? l.ChartRenderMode["Image"]
          : l.ChartRenderMode["Dom"],
      _0x32e79f = await this._chartHostProvider["ensureHost"](
        _0x3e3370,
        _0x3594ad,
      );
    if (!_0x32e79f) {
      _0xea25dd && this._deactivateDataUpdateAnimation(_0x3e3370);
      return;
    }
    this._chartHostProvider["setDataUpdateAnimation"](
      _0x3e3370,
      _0x4483ab ? l.CHART_DATA_UPDATE_ANIMATION_DURATION : null,
    );
    let _0x24a361 = this._getOrCreateChartRenderInstance(
      _0x3e3370,
      _0x3594ad,
      _0xbe3944,
    );
    _0x24a361.bind(_0x32e79f);
    try {
      let _0x21b0a3 = {
        chartId: _0x3e3370,
        config: _0x22d59f,
        style: _0x4e6774,
      };
      (_0x2a28a5 && _0x490ea9 && _0x24a361.renderTransition
        ? await _0x24a361.renderTransition(
            {
              chartId: _0x3e3370,
              config: _0x490ea9.config,
              style: _0x490ea9.style,
            },
            _0x21b0a3,
            { duration: l.CHART_DATA_UPDATE_ANIMATION_DURATION },
          )
        : await _0x24a361.render(_0x21b0a3),
        await this._cacheActiveDomChartSnapshot(
          _0x3e3370,
          _0x58313e,
          _0x24a361,
        ),
        _0x2a28a5 &&
          _0x4483ab &&
          this._scheduleDataUpdateAnimationEnd(_0x3e3370));
    } catch (_0x473d28) {
      if (
        (_0xea25dd && this._deactivateDataUpdateAnimation(_0x3e3370),
        _0x58313e !== l.ChartRenderMode["Image"])
      )
        throw _0x473d28;
    }
  }
  async _cacheActiveDomChartSnapshot(_0x354820, _0xbe7b13, _0x192e9d) {
    var _0x29030b;
    if (
      _0xbe7b13 !== l.ChartRenderMode["Dom"] ||
      ((_0x29030b = this._chartModelService["activeChartModel"]) == null
        ? undefined
        : _0x29030b.id) !== _0x354820
    )
      return;
    let _0x2d3b5b = await this._chartHostProvider["ensureHost"](
      _0x354820,
      l.ChartRenderMode["Image"],
    );
    if (!_0x2d3b5b) return;
    let _0x505112 = _0x2d3b5b.nextVersion();
    try {
      let _0xd70d4c = await _0x192e9d.exportImg();
      _0xd70d4c &&
        _0x2d3b5b.commitSnapshot(
          { type: l.ChartImageSourceType["Url"], url: _0xd70d4c },
          _0x505112,
        ) &&
        _0x2d3b5b.requestPaint();
    } catch {}
  }
  _prepareDataUpdateRender(_0x321341, _0x4fd68, _0x483635) {
    let _0x7f6f79 = this._resolveChartRenderMode(_0x321341),
      _0x160392 =
        _0x7f6f79 === l.ChartRenderMode["Dom"] &&
        _0x483635 &&
        _0x4fd68 &&
        this._canAnimateDataUpdate(_0x321341),
      _0x35bd9e = this._dataUpdateAnimationChartIds["has"](_0x321341);
    return {
      canAnimate: _0x160392,
      renderMode: _0x35bd9e ? l.ChartRenderMode["Dom"] : _0x7f6f79,
      shouldStartTransientAnimation: false,
      transientAnimationActive: _0x35bd9e,
    };
  }
  _canAnimateDataUpdate(_0x11f8b7) {
    var _0x53ac04, _0x20f999, _0x270048, _0x46efba;
    if (
      typeof document > "u" ||
      typeof window > "u" ||
      document.visibilityState === "hidden" ||
      ((_0x53ac04 = (_0x20f999 = window).matchMedia) != null &&
        (_0x53ac04 = _0x53ac04.call(
          _0x20f999,
          "(prefers-reduced-motion: reduce)",
        )) != null &&
        _0x53ac04.matches) ||
      ((_0x270048 = (_0x46efba = window).matchMedia) != null &&
        (_0x270048 = _0x270048.call(_0x46efba, "print")) != null &&
        _0x270048.matches)
    )
      return false;
    let _0x3e3a74 = this._chartHostProvider["getHostClientRect"](_0x11f8b7);
    return (
      _0x3e3a74 != null &&
      _0x3e3a74.width > 0 &&
      _0x3e3a74.height > 0 &&
      _0x3e3a74.right > 0 &&
      _0x3e3a74.bottom > 0 &&
      _0x3e3a74.left < window.innerWidth &&
      _0x3e3a74.top < window.innerHeight
    );
  }
  _activateDataUpdateAnimation(_0x54b93b) {
    let _0x1eeb42 = this._dataUpdateAnimationTimers["get"](_0x54b93b);
    (_0x1eeb42 &&
      (clearTimeout(_0x1eeb42),
      this._dataUpdateAnimationTimers["delete"](_0x54b93b)),
      this._dataUpdateAnimationChartIds["add"](_0x54b93b),
      this._chartHostProvider["setDataUpdateAnimation"](
        _0x54b93b,
        l.CHART_DATA_UPDATE_ANIMATION_DURATION,
      ));
  }
  _scheduleDataUpdateAnimationEnd(_0x3ae3ea) {
    let _0x1ad060 = this._dataUpdateAnimationTimers["get"](_0x3ae3ea);
    _0x1ad060 && clearTimeout(_0x1ad060);
    let _0x125e2e = setTimeout(() => {
      (this._dataUpdateAnimationTimers["delete"](_0x3ae3ea),
        this._dataUpdateAnimationChartIds["delete"](_0x3ae3ea) &&
          (this._chartHostProvider["setDataUpdateAnimation"](_0x3ae3ea, null),
          this._disposeChartDomInstance(_0x3ae3ea),
          this._rerenderLatest(_0x3ae3ea)));
    }, l.CHART_DATA_UPDATE_ANIMATION_DURATION);
    this._dataUpdateAnimationTimers["set"](_0x3ae3ea, _0x125e2e);
  }
  _deactivateDataUpdateAnimation(_0x2e37f0) {
    let _0x1854a7 = this._dataUpdateAnimationTimers["get"](_0x2e37f0);
    (_0x1854a7 &&
      (clearTimeout(_0x1854a7),
      this._dataUpdateAnimationTimers["delete"](_0x2e37f0)),
      this._dataUpdateAnimationChartIds["delete"](_0x2e37f0),
      this._chartHostProvider["setDataUpdateAnimation"](_0x2e37f0, null));
  }
  async renderChartsForPrinting(_0x32c578, _0x8ca282, _0x14d1b1) {
    let _0x5939e8 = this._drawingManagerService["getDrawingData"](
        _0x32c578,
        _0x8ca282,
      ),
      _0x101454 = this._drawingManagerService["getDrawingOrder"](
        _0x32c578,
        _0x8ca282,
      ),
      _0x51e38a = Object.values(_0x5939e8 ?? {}).filter(
        (_0x2cb9d8) =>
          _0x2cb9d8.drawingType === t.DrawingTypeEnum["DRAWING_CHART"] &&
          _0x2cb9d8.hidden !== true,
      );
    await Promise.allSettled(
      _0x51e38a.map(async (_0x459be2) => {
        let _0x3e135f = await this._createPrintingChartObject(
          _0x459be2,
          _0x101454,
        );
        _0x3e135f &&
          (_0x14d1b1.addObject(_0x3e135f, p.DRAWING_OBJECT_LAYER_INDEX),
          _0x459be2.groupId &&
            (0, f.insertGroupObject)(
              {
                drawingId: _0x459be2.groupId,
                unitId: _0x32c578,
                subUnitId: _0x8ca282,
              },
              _0x3e135f,
              _0x14d1b1,
              this._drawingManagerService,
            ));
      }),
    );
  }
  async _createPrintingChartObject(_0x601ecb, _0x4926a3) {
    let _0x324a7e = this._chartModelService["getChartModel"](
        _0x601ecb.drawingId,
      ),
      _0x516be3 = this._renderModelManager["getRenderModel"](
        l.EChartRenderEngineName,
      ),
      _0x44228e = _0x601ecb.transform,
      _0x594baf = _0x324a7e == null ? undefined : _0x324a7e.config;
    if (
      !_0x324a7e ||
      !_0x516be3 ||
      !_0x44228e ||
      !_0x594baf ||
      _0x44228e.width == null ||
      _0x44228e.height == null
    )
      return null;
    let _0x1ae58a = new je(_0x601ecb.drawingId, {
        width: _0x44228e.width,
        height: _0x44228e.height,
      }),
      _0x5705f2 = _0x516be3.createChartInstance(
        l.ChartRenderMode["Image"],
        this._createChartRenderInstanceContext(),
      );
    _0x5705f2.bind(_0x1ae58a);
    let _0x2c2b0a;
    try {
      await _0x5705f2.render({
        chartId: _0x601ecb.drawingId,
        config: _0x594baf,
        style: this.createRuntimeChartStyle(
          _0x324a7e,
          this._localeService["getDirection"](),
        ),
      });
    } catch (_0x378221) {
      console.error(
        "[ChartRender] Failed to render chart snapshot for printing",
        _0x378221,
      );
    } finally {
      ((_0x2c2b0a = _0x1ae58a.takeSnapshot()),
        _0x5705f2.dispose(),
        _0x1ae58a.dispose());
    }
    let _0x4d4064 = this._chartSnapshotStoreService["getImage"]({
        unitId: _0x601ecb.unitId,
        subUnitId: _0x601ecb.subUnitId,
        chartId: _0x601ecb.drawingId,
      }),
      _0x7637bc = _0x2c2b0a ?? _0x4d4064;
    if (!_0x7637bc) return null;
    let _0x38011e = _0x4926a3.indexOf(_0x601ecb.drawingId);
    return new ye(
      (0, n.getDrawingShapeKeyByDrawingSearch)(_0x601ecb),
      {
        ..._0x44228e,
        ...i.SHEET_CHART_RENDER_OBJECT_CONFIG,
        ...Oe(_0x1ae58a.style),
        visible: true,
        zIndex:
          _0x38011e === -1 ? Math.max(_0x4926a3.length - 1, 0) : _0x38011e,
      },
      () => _0x7637bc,
      undefined,
      _0x2c2b0a ? () => P(_0x2c2b0a) : undefined,
    );
  }
  _getOrCreateChartRenderInstance(_0x223fa5, _0x37d7cc, _0x270f69) {
    let _0x1c9a27 = this._chartInstanceMap["get"](_0x223fa5);
    if ((_0x1c9a27 == null ? undefined : _0x1c9a27.mode) === _0x37d7cc)
      return _0x1c9a27;
    _0x1c9a27 &&
      (this._disposeChartEventSubscriptions(_0x223fa5),
      _0x1c9a27.dispose(),
      this._chartInstanceMap["delete"](_0x223fa5));
    let _0x1eece9 = _0x270f69.createChartInstance(
      _0x37d7cc,
      this._createChartRenderInstanceContext(),
    );
    return (
      this._chartInstanceMap["set"](_0x223fa5, _0x1eece9),
      _0x1eece9.setElementEditMode(
        this._chartElementEditMode["get"](_0x223fa5) === true,
      ),
      this._bindChartEventHandlers(_0x223fa5, _0x1eece9),
      _0x1eece9
    );
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({ style: _0x3e228f }) =>
        (0, l.resolveDefaultChartHostFrameStyle)({
          style: _0x3e228f,
          getRenderColor: (_0x18ef23) =>
            this._chartThemeService["getRenderColor"](_0x18ef23),
        }),
      resolveRenderBackgroundColor: ({ style: _0x3c5a0f }) =>
        this._chartThemeService["getRenderColor"](
          (0, l.resolveChartStyleBackgroundColor)(_0x3c5a0f),
        ),
    };
  }
  _cancelDebouncedCallbacks() {
    (this._renderDebounceMap["forEach"]((_0x3a866a) => _0x3a866a.cancel()),
      this._renderDebounceMap["clear"](),
      this._debounceHandleMap["forEach"]((_0x5ba4dc) => _0x5ba4dc.cancel()),
      this._debounceHandleMap["clear"]());
  }
  dispose() {
    (this._dataUpdateAnimationTimers["forEach"]((_0x116380) =>
      clearTimeout(_0x116380),
    ),
      this._dataUpdateAnimationTimers["clear"](),
      this._dataUpdateAnimationChartIds["clear"](),
      Array.from(this._chartInstanceMap["keys"]()).forEach((_0x3d1b95) =>
        this._disposeChartRenderInstance(_0x3d1b95),
      ),
      this._chartElementEditMode["clear"](),
      this._cancelDebouncedCallbacks(),
      this._lastRenderInputMap["clear"](),
      (this._activeChartId = null),
      (this._lastActiveSheet = null),
      super.dispose());
  }
};
z = L(
  [
    I(0, R),
    I(1, (0, t.Inject)(i.SheetCanvasFloatDomManagerService)),
    I(2, (0, t.Inject)(e.ChartModelService)),
    I(3, n.IDrawingManagerService),
    I(4, t.IUniverInstanceService),
    I(5, (0, t.Inject)(p.IRenderManagerService)),
    I(6, (0, t.Inject)(t.LocaleService)),
    I(7, (0, t.Inject)(t.Injector)),
    I(8, (0, t.Inject)(l.ChartThemeService)),
    I(9, (0, t.Inject)(t.ThemeService)),
    I(10, t.IConfigService),
    I(11, (0, t.Inject)(Se)),
    I(12, l.IChartRenderModelManagerService),
  ],
  z,
);
const B = (0, t.createIdentifier)("sheets-chart.ui.service");
let V = class extends c.ChartUIService {
  constructor(_0x2bf017, _0x301977, _0x2a15c8, _0x203ecf, _0xc93e3a) {
    (super(_0xc93e3a),
      (this._chartModelService = _0x2bf017),
      (this._sheetsChartService = _0x301977),
      (this._commandService = _0x2a15c8),
      (this._univerInstanceService = _0x203ecf),
      N(this, "_rangeSelectMode", false),
      N(this, "_chartEditorOpen$", new s.BehaviorSubject(false)),
      N(this, "_panelRoute$", new s["BehaviorSubject"](null)),
      N(this, "chartEditorOpen$", this._chartEditorOpen$["asObservable"]()),
      N(this, "panelRoute$", this._panelRoute$["asObservable"]()));
  }
  get activeRuntimeModel() {
    return this._chartModelService["activeChartModel"] ?? null;
  }
  get chartEditorOpen() {
    return this._chartEditorOpen$["getValue"]();
  }
  get rangeSelectMode() {
    return this._rangeSelectMode;
  }
  setRangeSelectMode(_0x5c7c20) {
    this._rangeSelectMode = _0x5c7c20;
  }
  setChartEditorOpen(_0x9bb39c) {
    this._chartEditorOpen$["getValue"]() !== _0x9bb39c &&
      this._chartEditorOpen$["next"](_0x9bb39c);
  }
  isElementEditModeActive(_0x52d493) {
    var _0x5be3c7;
    return (
      this.chartEditorOpen &&
      ((_0x5be3c7 = this._chartModelService["activeChartModel"]) == null
        ? undefined
        : _0x5be3c7.id) === _0x52d493
    );
  }
  setPanelRoute(_0x369cac, _0x3156e0) {
    this._panelRoute$["next"]({ chartId: _0x369cac, route: _0x3156e0 });
  }
  clearPanelRoute() {
    this._panelRoute$["next"](null);
  }
  setDataRange(_0x55d524) {
    let _0x359556 = this._chartModelService["activeChartModel"];
    _0x359556 &&
      this._executeChartUpdateSourceConfig({
        chartModelId: _0x359556.id,
        range: _0x55d524,
      });
  }
  setOrientation(_0xd4ee67) {
    let _0x38e6de = this._chartModelService["activeChartModel"];
    if (!_0x38e6de) return;
    let _0x1e1f13 = this._sheetsChartService["getChartSourceSpec"](
      _0x38e6de.id,
    );
    if (!_0x1e1f13 || Array.isArray(_0x1e1f13)) return;
    let _0x2a828b = {
      ..._0x1e1f13,
      isRowDirection: _0xd4ee67 === l.DataOrientation["Row"],
    };
    this._executeChartUpdateSourceConfig({
      chartModelId: _0x38e6de.id,
      range: _0x2a828b,
    });
  }
  executeChartUpdateConfig(_0x257f11) {
    var _0x55099f;
    this._commandService["executeCommand"](e.ChartUpdateConfigCommand["id"], {
      ..._0x257f11,
      unitId:
        ((_0x55099f = this._univerInstanceService["getFocusedUnit"]()) == null
          ? undefined
          : _0x55099f.getUnitId()) ?? "",
    });
  }
  _executeChartUpdateSourceConfig(_0x5a87dc) {
    var _0x10c1c1;
    this._commandService["executeCommand"](e.ChartUpdateSourceCommand["id"], {
      ..._0x5a87dc,
      unitId:
        ((_0x10c1c1 = this._univerInstanceService["getFocusedUnit"]()) == null
          ? undefined
          : _0x10c1c1.getUnitId()) ?? "",
    });
  }
  dispose() {
    (this._chartEditorOpen$["complete"](),
      this._panelRoute$["complete"](),
      super.dispose());
  }
};
V = L(
  [
    I(0, (0, t.Inject)(e.ChartModelService)),
    I(1, (0, t.Inject)(e.SheetsChartService)),
    I(2, t.ICommandService),
    I(3, t.IUniverInstanceService),
    I(4, (0, t.Inject)(c.ChartViewStateRegistry)),
  ],
  V,
);
var Ne;
const Pe = {
    axis: {
      ...c.DEFAULT_CHART_AXIS_VALUES,
      primaryGridLineVisible: false,
      secondaryGridLineVisible: true,
    },
    funnel: c.DEFAULT_CHART_FUNNEL_VALUES,
    heatmap: c.DEFAULT_CHART_HEATMAP_VALUES,
    indicatorLine: c.DEFAULT_CHART_INDICATOR_LINE_VALUES,
    legend: c.DEFAULT_CHART_LEGEND_VALUES,
    lineAndArea: c.DEFAULT_CHART_LINE_AND_AREA_VALUES,
    pareto: c.DEFAULT_CHART_PARETO_VALUES,
    pie: c.DEFAULT_CHART_PIE_VALUES,
    relation: {
      ...c.DEFAULT_CHART_RELATION_VALUES,
      useValueAsSymbolSize: true,
    },
    radar: c.DEFAULT_CHART_RADAR_VALUES,
    series: {
      ...c.DEFAULT_CHART_SERIES_VALUES,
      radarFillOpacity: 0.2,
      rightAxis: {
        ltr: false,
        rtl:
          ((Ne = l.RTLChartStyle["allSeriesStyle"]) == null
            ? undefined
            : Ne.rightYAxis) ?? false,
      },
    },
    style: c.DEFAULT_CHART_STYLE_VALUES,
    titles: c.DEFAULT_CHART_TITLE_VALUES,
    trendline: c.DEFAULT_CHART_TRENDLINE_VALUES,
    waterfall: { ...c.DEFAULT_CHART_WATERFALL_SETUP_VALUES, useSubtotal: true },
    waterfallStyle: c.DEFAULT_CHART_WATERFALL_STYLE_VALUES,
    wordCloud: c.DEFAULT_CHART_WORD_CLOUD_VALUES,
  },
  Fe = (_0x152ec2) =>
    _0x152ec2
      .getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"])
      .getUnitId(),
  Ie = (_0x28da93) => {
    var _0x288362;
    return (_0x288362 = _0x28da93
      .getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"])
      .getActiveSheet()) == null
      ? undefined
      : _0x288362.getSheetId();
  },
  Le = [
    l.ChartTypeBits["Line"],
    l.ChartTypeBits["Radar"],
    l.ChartTypeBits["WordCloud"],
    l.ChartTypeBits["Scatter"],
    l.ChartTypeBits["Funnel"],
    l.ChartTypeBits["Relation"],
    l.ChartTypeBits["Sankey"],
    l.ChartTypeBits["Heatmap"],
    l.ChartTypeBits["Boxplot"],
    l.ChartTypeBits["Candlestick"],
    l.ChartTypeBits["Histogram"],
    l.ChartTypeBits["Treemap"],
    l.ChartTypeBits["Sunburst"],
    l.ChartTypeBits["Gauge"],
    l.ChartTypeBits["Chord"],
  ];
function Re() {
  let _0xfeb1b5 = (0, c.useChartEditorChartType)();
  return (0, _.jsx)(c.ChartGradientFillField, {
    visible: Le.every(
      (_0xb4cd4d) => !l.chartBitsUtils["baseOn"](_0xfeb1b5, _0xb4cd4d),
    ),
  });
}
const ze = (_0x3f1462) => {
  var _0xe21dc3;
  let _0xb4e07 = (0, o.useDependency)(B),
    _0x8ce6e4 = (0, o.useDependency)(e.ChartModelService),
    _0x2bb293 = (0, o.useDependency)(t.LocaleService),
    _0x32b882 = (0, e.getAllowedChartTypes)((0, o.useDependency)(t.Injector)),
    _0x34e7f9 = (0, m.useMemo)(
      () =>
        (0, c.buildChartTypeSelectOptions)(
          ie(ne.concat(), _0x32b882).map((_0x47b6f9) => ({
            id: _0x47b6f9.id,
            label: _0x2bb293.t(
              "sheets-chart-ui.chartTypes." + _0x47b6f9.labelId,
            ),
            pieSecondaryPlotType: _0x47b6f9.pieSecondaryPlotType,
            value: _0x47b6f9.value,
          })),
        ),
      [_0x32b882, _0x2bb293],
    ),
    _0x2af726 = (0, o.useObservable)(
      _0x8ce6e4.activeChartModel$,
      _0x8ce6e4.activeChartModel,
    ),
    _0x1e7f6f = (0, o.useObservable)(
      _0x2af726 == null ? undefined : _0x2af726.dataSource$,
      _0x2af726 == null ? undefined : _0x2af726.dataSource,
    ),
    _0x1e53a2 = (0, o.useObservable)(
      _0x1e7f6f == null ? undefined : _0x1e7f6f.rangeInfo$,
      _0x1e7f6f == null ? undefined : _0x1e7f6f.getRangeInfo(),
    ),
    _0x874322 = Array.isArray(_0x1e53a2),
    _0x406039 =
      _0x1e53a2 && !_0x874322 && _0x1e53a2.isRowDirection
        ? l.DataOrientation["Row"]
        : l.DataOrientation["Column"],
    _0x395422 = _0x874322
      ? (_0xe21dc3 = _0x1e53a2[0]) == null
        ? undefined
        : _0xe21dc3.range
      : _0x1e53a2 == null
        ? undefined
        : _0x1e53a2.rangeInfo;
  return (0, _.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-3 univer-pb-5",
    children: [
      (0, _.jsx)(c.ChartTypeField, { options: _0x34e7f9 }),
      (0, _.jsx)(c.ChartTypeSpecificSetupSection, {}),
      (0, _.jsx)(c.ChartThemeField, {}),
      (0, _.jsx)(Re, {}),
      (0, _.jsx)(c.ChartStackField, {}),
      (0, _.jsx)(Be, { dataRange: _0x1e53a2, primaryRange: _0x395422 }),
      (0, _.jsx)(c.ChartCommonDataMappingSection, {
        categoryToggleLabel: _0x2bb293.t(
          "sheets-chart-ui.common.useAsCategoryLabels",
          _0x406039 === l.DataOrientation["Row"]
            ? _0x406039 +
                "\x20" +
                (((_0x395422 == null
                  ? undefined
                  : _0x395422.range["startRow"]) ?? 0) +
                  1)
            : _0x406039 +
                "\x20" +
                (0, t.numberToABC)(
                  (_0x395422 == null
                    ? undefined
                    : _0x395422.range["startColumn"]) ?? 0,
                ),
        ),
        orientationControl: _0x874322
          ? undefined
          : (0, _.jsx)(h.Button, {
              size: "small",
              onClick: () =>
                _0xb4e07.setOrientation(
                  _0x406039 === l.DataOrientation["Row"]
                    ? l.DataOrientation["Column"]
                    : l.DataOrientation["Row"],
                ),
              children: _0x2bb293.t("sheets-chart-ui.common.switchRowColumn"),
            }),
      }),
      (0, _.jsx)(c.ChartTypeSpecificDataSection, {}),
      (0, _.jsx)(c.ChartWaterfallSetupFields, {
        defaultValues: _0x3f1462.defaultValues["waterfall"],
      }),
    ],
  });
};
function Be(_0x11980e) {
  let { dataRange: _0x51ab93, primaryRange: _0x4672ca } = _0x11980e,
    _0x200354 = (0, o.useDependency)(B),
    _0x2a1513 = (0, o.useDependency)(t.LocaleService),
    _0x4f096e = (0, o.useDependency)(t.IUniverInstanceService),
    _0x1031b3 = (0, o.useDependency)(t.IContextService),
    [_0x27914f, _0x30f70c] = (0, m.useState)(false),
    [_0x31099e, _0x5190c1] = (0, m.useState)(false),
    [_0x38d23b, _0x2c9c40] = (0, m.useState)(),
    _0x4897a9 = Fe(_0x4f096e),
    _0x155477 = Ie(_0x4f096e),
    _0x4dfa4f = _0x51ab93 ? ee(_0x51ab93, _0x4f096e) : "",
    _0x47f986 = (0, m.useRef)(_0x4dfa4f),
    _0x24ed47 = (0, m.useRef)(undefined),
    _0x3b95b6 = (0, m.useRef)(null);
  ((0, m.useEffect)(() => {
    (_0x200354.setRangeSelectMode(_0x27914f),
      _0x1031b3.setContextValue(t.FOCUSING_PANEL_EDITOR, _0x27914f));
  }, [_0x1031b3, _0x27914f, _0x200354]),
    (0, m.useEffect)(
      () => () => {
        (_0x200354.setRangeSelectMode(false),
          _0x1031b3.setContextValue(t.FOCUSING_PANEL_EDITOR, false));
      },
      [_0x1031b3, _0x200354],
    ));
  let _0x2ca849 = (0, m.useCallback)(
      (_0x1f4af4) => {
        var _0x3525a4;
        if (ee(_0x51ab93, _0x4f096e) === _0x1f4af4)
          return (_0x2c9c40(undefined), true);
        let _0x673e30 = _0x1f4af4.split(d.matchToken["COMMA"]);
        if (
          !_0x1f4af4.trim() ||
          _0x673e30.length !== 1 ||
          !((_0x3525a4 = _0x3b95b6.current) != null && _0x3525a4.verify())
        )
          return (
            _0x2c9c40(_0x2a1513.t("sheets-chart-ui.common.invalidDataRange")),
            false
          );
        let {
            unitId: _0x40f5fc,
            sheetName: _0xde912,
            range: _0xa1f906,
          } = (0, d.deserializeRangeWithSheet)(_0x673e30[0]),
          _0x5185fd = _0x40f5fc || _0x4897a9,
          _0x88b75d = _0x4f096e.getUnit(_0x5185fd),
          _0x58dec6 =
            (_0x4672ca == null ? undefined : _0x4672ca.unitId) === _0x5185fd
              ? _0x4672ca.subUnitId
              : _0x155477,
          _0x4fd77a = _0xde912
            ? _0x88b75d == null
              ? undefined
              : _0x88b75d.getSheetBySheetName(_0xde912)
            : _0x88b75d == null
              ? undefined
              : _0x88b75d.getSheetBySheetId(_0x58dec6 ?? "");
        return !_0x88b75d ||
          !_0x4fd77a ||
          !(0, t.isValidRange)(_0xa1f906, _0x4fd77a)
          ? (_0x2c9c40(_0x2a1513.t("sheets-chart-ui.common.invalidDataRange")),
            false)
          : (_0x2c9c40(undefined),
            _0x200354.setDataRange({
              rangeInfo: {
                range: _0xa1f906,
                unitId: _0x5185fd,
                subUnitId: _0x4fd77a.getSheetId(),
              },
            }),
            true);
      },
      [
        _0x51ab93,
        _0x2a1513,
        _0x4672ca,
        _0x200354,
        _0x155477,
        _0x4897a9,
        _0x4f096e,
      ],
    ),
    _0x232cf2 = (0, m.useMemo)(
      () => ({
        keyCodes: [
          {
            keyCode: o.KeyCode["ENTER"],
            nativeTextEditorBehavior:
              o.NativeTextEditorShortcutBehavior["OVERRIDE_NATIVE"],
          },
        ],
        handler: (_0x13f3dd) => {
          _0x13f3dd === o.KeyCode["ENTER"] &&
            _0x2ca849(_0x47f986.current) &&
            (_0x24ed47.current = _0x47f986.current);
        },
      }),
      [_0x2ca849],
    );
  return (0, _.jsx)("div", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: (0, _.jsxs)("div", {
      children: [
        (0, _.jsx)(c.ChartEditBlockTitle, {
          title: _0x2a1513.t("sheets-chart-ui.common.dataRange"),
        }),
        (0, _.jsx)(g.RangeSelector, {
          supportAcrossSheet: true,
          keepSheetReference: true,
          maxRangeCount: 1,
          unitId: _0x4897a9,
          subUnitId: _0x155477,
          initialValue: _0x4dfa4f,
          keyboardEventConfig: _0x232cf2,
          selectorRef: _0x3b95b6,
          onChange: (_0x1b8dea, _0xf23eaf) => {
            ((_0x47f986.current = _0xf23eaf),
              _0x31099e &&
                _0x24ed47.current !== _0xf23eaf &&
                _0x2ca849(_0xf23eaf) &&
                (_0x24ed47.current = _0xf23eaf));
          },
          onFocusChange: (_0x2a36a7, _0x4cf8f9) => {
            if (
              (_0x4cf8f9 !== undefined && (_0x47f986.current = _0x4cf8f9),
              _0x31099e || _0x30f70c(_0x2a36a7),
              _0x2a36a7)
            )
              _0x24ed47.current = _0x47f986.current;
            else {
              let _0x3f507a = _0x24ed47.current;
              ((_0x24ed47.current = undefined),
                _0x3f507a !== undefined &&
                  _0x47f986.current !== _0x3f507a &&
                  _0x2ca849(_0x47f986.current));
            }
          },
          onRangeSelectorDialogVisibleChange: (_0x1fab9f) => {
            (_0x5190c1(_0x1fab9f), _0x30f70c(_0x1fab9f));
          },
        }),
        _0x38d23b
          ? (0, _.jsx)("div", {
              className: "univer-my-1 univer-text-xs univer-text-red-500",
              children: _0x38d23b,
            })
          : null,
      ],
    }),
  });
}
function H(_0x3434dd) {
  return (0, _.jsxs)(c.ChartSectionAccordionItem, {
    id: _0x3434dd.id,
    children: [
      (0, _.jsx)(c.ChartSectionAccordionTrigger, { children: _0x3434dd.label }),
      (0, _.jsx)(c.ChartSectionAccordionContent, {
        children: _0x3434dd.children,
      }),
    ],
  });
}
const Ve = (_0x13b824) => {
  let _0x4c443e = (0, o.useDependency)(t.LocaleService),
    _0x423708 = (0, o.useDependency)(B),
    _0x2561bf = (0, o.useDependency)(e.ChartModelService),
    _0x16dd5d = (0, o.useObservable)(
      _0x2561bf.activeChartModel$,
      _0x2561bf.activeChartModel,
    ),
    _0x12d899 = (0, o.useObservable)(_0x423708.panelRoute$, null),
    _0xd3b383 =
      _0x12d899 &&
      _0x12d899.chartId === (_0x16dd5d == null ? undefined : _0x16dd5d.id)
        ? _0x12d899.route
        : null,
    _0x102bbe = (0, c.useChartEditorChartType)(),
    _0x26d77f = (0, c.useChartEditorHasRightAxis)(),
    [_0x237812, _0x491d9b] = (0, m.useState)(null);
  (0, m.useEffect)(() => {
    _0xd3b383 != null && _0xd3b383.section && _0x491d9b(_0xd3b383.section);
  }, [_0xd3b383]);
  let _0x1a6789 = l.chartBitsUtils["baseOn"](_0x102bbe, l.ChartTypeBits["Pie"]),
    _0x1d49f4 = _0x102bbe === l.ChartTypeBits["Radar"],
    _0x30aeed = _0x102bbe === l.ChartTypeBits["WordCloud"],
    _0x8cbe83 = _0x102bbe === l.ChartTypeBits["Funnel"],
    _0x57f22e = l.chartBitsUtils["baseOn"](
      _0x102bbe,
      l.ChartTypeBits["Bubble"],
    ),
    _0x52d65b = _0x102bbe === l.ChartTypeBits["Relation"],
    _0x4354b5 = _0x102bbe === l.ChartTypeBits["Waterfall"],
    _0x850d7a = _0x102bbe === l.ChartTypeBits["Pareto"],
    _0x9fd11f = _0x102bbe === l.ChartTypeBits["Heatmap"],
    _0x247591,
    _0x472cfe;
  switch (_0x102bbe) {
    case l.ChartTypeBits["Candlestick"]:
      ((_0x247591 = c.ChartEditPanelSection["Candlestick"]),
        (_0x472cfe = _0x4c443e.t("sheets-chart-ui.section.candlestick")));
      break;
    case l.ChartTypeBits["Histogram"]:
      ((_0x247591 = c.ChartEditPanelSection["Histogram"]),
        (_0x472cfe = _0x4c443e.t("sheets-chart-ui.section.histogram")));
      break;
    case l.ChartTypeBits["Treemap"]:
      ((_0x247591 = c.ChartEditPanelSection["Treemap"]),
        (_0x472cfe = _0x4c443e.t("sheets-chart-ui.section.treemap")));
      break;
    case l.ChartTypeBits["Sunburst"]:
      ((_0x247591 = c.ChartEditPanelSection["Sunburst"]),
        (_0x472cfe = _0x4c443e.t("sheets-chart-ui.section.sunburst")));
      break;
    case l.ChartTypeBits["Gauge"]:
      ((_0x247591 = c.ChartEditPanelSection["Gauge"]),
        (_0x472cfe = _0x4c443e.t("sheets-chart-ui.section.gauge")));
      break;
    case l.ChartTypeBits["Chord"]:
      ((_0x247591 = c.ChartEditPanelSection["Chord"]),
        (_0x472cfe = _0x4c443e.t("sheets-chart-ui.section.chord")));
      break;
  }
  let _0x45936f =
    (0, c.chartTypeSupportsCapability)(
      _0x102bbe,
      c.ChartEditorCapability["GeneralSeries"],
    ) &&
    !_0x57f22e &&
    !_0x850d7a;
  return (0, _.jsxs)(c.ChartSectionAccordion, {
    value: _0x237812,
    onChange: _0x491d9b,
    children: [
      (0, _.jsx)(H, {
        id: c.ChartEditPanelSection["ChartStyle"],
        label: _0x4c443e.t("sheets-chart-ui.common.chartStyle"),
        children: (0, _.jsx)(c.ChartStyleSection, {
          defaultValues: _0x13b824.defaultValues["style"],
        }),
      }),
      (0, _.jsx)(H, {
        id: c.ChartEditPanelSection["ChartAndAxisTitles"],
        label: _0x4c443e.t("sheets-chart-ui.common.chartAndAxisTitles"),
        children: (0, _.jsx)(c.ChartTitlesSection, {
          commitMode: "blur",
          defaultValues: _0x13b824.defaultValues["titles"],
          selectedTitleKey: _0xd3b383 == null ? undefined : _0xd3b383.titleKey,
        }),
      }),
      _0x45936f &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["Series"],
          label: _0x4c443e.t("sheets-chart-ui.common.series"),
          children: (0, _.jsx)(c.ChartSeriesSection, {
            defaultValues: _0x13b824.defaultValues["series"],
            NumberFormatField: c.ChartNumberFormatAtom,
            selectedSeriesId:
              _0xd3b383 == null ? undefined : _0xd3b383.seriesId,
          }),
        }),
      _0x4354b5 &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["WaterfallSeries"],
          label: _0x4c443e.t("sheets-chart-ui.section.waterfall"),
          children: (0, _.jsx)(c.ChartWaterfallStyleSection, {
            defaultValues: _0x13b824.defaultValues["waterfallStyle"],
            getDefaultBucketName: ({
              seriesName: _0x4ee1e7,
              target: _0x563837,
            }) =>
              _0x563837 === l.ChartWaterfallStyleTarget["Subtotal"]
                ? _0x4c443e.t("sheets-chart-ui.waterfall.subtotal")
                : _0x4ee1e7
                  ? _0x4ee1e7 +
                    "-(" +
                    _0x4c443e.t(
                      _0x563837 === l.ChartWaterfallStyleTarget["Positive"]
                        ? "sheets-chart-ui.waterfall.positive"
                        : "sheets-chart-ui.waterfall.negative",
                    ) +
                    ")"
                  : "",
            NumberFormatField: c.ChartNumberFormatAtom,
            selectedSeriesId:
              _0xd3b383 == null ? undefined : _0xd3b383.seriesId,
          }),
        }),
      _0x850d7a &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(H, {
              id: c.ChartEditPanelSection["ParetoBarSeries"],
              label: _0x4c443e.t("sheets-chart-ui.section.paretoBar"),
              children: (0, _.jsx)(c.ChartParetoSeriesSection, {
                defaultValues: _0x13b824.defaultValues["pareto"],
                NumberFormatField: c.ChartNumberFormatAtom,
                showDataPointEditor: true,
                target: "barStyle",
              }),
            }),
            (0, _.jsx)(H, {
              id: c.ChartEditPanelSection["ParetoLineSeries"],
              label: _0x4c443e.t("sheets-chart-ui.section.paretoLine"),
              children: (0, _.jsx)(c.ChartParetoSeriesSection, {
                defaultValues: _0x13b824.defaultValues["pareto"],
                NumberFormatField: c.ChartNumberFormatAtom,
                showDataPointEditor: false,
                target: "cumulativeLineStyle",
              }),
            }),
          ],
        }),
      _0x1a6789 &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["PieStyle"],
          label: _0x4c443e.t("sheets-chart-ui.section.pie"),
          children: (0, _.jsx)(c.ChartPieStyleSection, {
            defaultValues: _0x13b824.defaultValues["pie"],
            NumberFormatField: c.ChartNumberFormatAtom,
          }),
        }),
      _0x30aeed &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["WordCloud"],
          label: _0x4c443e.t("sheets-chart-ui.section.wordCloud"),
          children: (0, _.jsx)(c.ChartWordCloudStyleSection, {
            defaultValues: _0x13b824.defaultValues["wordCloud"],
          }),
        }),
      _0x1d49f4 &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["Radar"],
          label: _0x4c443e.t("sheets-chart-ui.section.radar"),
          children: (0, _.jsx)(c.ChartRadarStyleSection, {
            defaultValues: _0x13b824.defaultValues["radar"],
          }),
        }),
      _0x8cbe83 &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["Funnel"],
          label: _0x4c443e.t("sheets-chart-ui.section.funnel"),
          children: (0, _.jsx)(c.ChartFunnelStyleSection, {
            defaultValues: _0x13b824.defaultValues["funnel"],
            gapControl: "select",
          }),
        }),
      _0x9fd11f &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["Heatmap"],
          label: _0x4c443e.t("sheets-chart-ui.common.heatmap"),
          children: (0, _.jsx)(c.ChartHeatmapStyleSection, {
            defaultValues: _0x13b824.defaultValues["heatmap"],
          }),
        }),
      _0x52d65b &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["Relation"],
          label: _0x4c443e.t("sheets-chart-ui.section.relation"),
          children: (0, _.jsx)(c.ChartRelationStyleSection, {
            defaultValues: _0x13b824.defaultValues["relation"],
          }),
        }),
      (0, c.chartTypeSupportsLineAndAreaStyle)(_0x102bbe) &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["LineAndArea"],
          label: _0x4c443e.t("sheets-chart-ui.section.lineAndArea"),
          children: (0, _.jsx)(c.ChartLineAndAreaSection, {
            defaultValues: _0x13b824.defaultValues["lineAndArea"],
            lineStyleControl: "segmented",
          }),
        }),
      (0, c.chartTypeSupportsCapability)(
        _0x102bbe,
        c.ChartEditorCapability["Legend"],
      ) &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["Legend"],
          label: _0x4c443e.t("sheets-chart-ui.common.legend"),
          children: (0, _.jsx)(c.ChartLegendSection, {
            defaultValues: _0x13b824.defaultValues["legend"],
          }),
        }),
      (0, c.chartTypeSupportsCapability)(
        _0x102bbe,
        c.ChartEditorCapability["Axes"],
      ) &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(H, {
              id: c.ChartEditPanelSection["HorizontalAxis"],
              label: _0x4c443e.t("sheets-chart-ui.common.horizontalAxis"),
              children: (0, _.jsx)(c.ChartAxisSection, {
                axis: "x",
                defaultValues: _0x13b824.defaultValues["axis"],
                NumberFormatField: c.ChartNumberFormatAtom,
              }),
            }),
            (0, _.jsx)(H, {
              id: c.ChartEditPanelSection["VerticalAxis"],
              label: _0x4c443e.t("sheets-chart-ui.common.verticalAxis"),
              children: (0, _.jsx)(c.ChartAxisSection, {
                axis: "y",
                defaultValues: _0x13b824.defaultValues["axis"],
                NumberFormatField: c.ChartNumberFormatAtom,
              }),
            }),
            _0x26d77f &&
              (0, _.jsx)(H, {
                id: c.ChartEditPanelSection["RightVerticalAxis"],
                label: _0x4c443e.t("sheets-chart-ui.common.rightVerticalAxis"),
                children: (0, _.jsx)(c.ChartAxisSection, {
                  axis: "rightY",
                  defaultValues: _0x13b824.defaultValues["axis"],
                  NumberFormatField: c.ChartNumberFormatAtom,
                }),
              }),
            (0, _.jsx)(H, {
              id: c.ChartEditPanelSection["GridlinesAndTicks"],
              label: _0x4c443e.t("sheets-chart-ui.section.gridlinesAndTicks"),
              children: (0, _.jsx)(c.ChartGridlinesAndTicksSection, {
                defaultValues: _0x13b824.defaultValues["axis"],
              }),
            }),
          ],
        }),
      (0, c.chartTypeSupportsCapability)(
        _0x102bbe,
        c.ChartEditorCapability["IndicatorLine"],
      ) &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["IndicatorLine"],
          label: _0x4c443e.t("sheets-chart-ui.section.indicatorLine"),
          children: (0, _.jsx)(c.ChartIndicatorLineSection, {
            defaultValues: _0x13b824.defaultValues["indicatorLine"],
          }),
        }),
      (0, l.chartTypeCanUseTrendLine)(_0x102bbe) &&
        (0, _.jsx)(H, {
          id: c.ChartEditPanelSection["Trendline"],
          label: _0x4c443e.t("sheets-chart-ui.common.trendline"),
          children: (0, _.jsx)(c.ChartTrendlineSection, {
            defaultValues: _0x13b824.defaultValues["trendline"],
          }),
        }),
      _0x247591 &&
        _0x472cfe &&
        (0, _.jsx)(H, {
          id: _0x247591,
          label: _0x472cfe,
          children: (0, _.jsx)(c.ChartTypeSpecificStyleSection, {}),
        }),
    ],
  });
};
function He(_0x1fe3a0) {
  let { className: _0x516a61 } = _0x1fe3a0,
    [_0x2ea192, _0x548994] = (0, m.useState)(c.ChartEditPanelTab["Data"]),
    _0x1a5dd2 = (0, o.useDependency)(t.Injector),
    _0x56adde = (0, o.useDependency)(t.LocaleService),
    _0x4b215e = (0, o.useDependency)(B),
    _0x5da166 = (0, o.useDependency)(e.ChartModelService),
    _0x36f199 = (0, o.useDependency)(e.SheetsChartService),
    _0x5225fb = (0, o.useObservable)(
      _0x5da166.activeChartModel$,
      _0x5da166.activeChartModel,
    ),
    _0x2199a3 = (0, o.useObservable)(_0x4b215e.panelRoute$, null),
    _0x13d63e = (0, m.useMemo)(() => {
      var _0x5e29b9;
      if (!_0x5225fb) return null;
      let _0x24fc49 = _0x36f199.getChartSourceSpec(_0x5225fb.id);
      if (!_0x24fc49) return null;
      let _0x380032 = Array.isArray(_0x24fc49)
        ? (_0x5e29b9 = _0x24fc49[0]) == null
          ? undefined
          : _0x5e29b9.range
        : _0x24fc49.rangeInfo;
      return _0x380032
        ? new c["ChartHostAdapter"](
            _0x5225fb,
            new e["SheetChartConfigAdapter"]({
              unitId: _0x380032.unitId,
              subUnitId: _0x380032.subUnitId,
              chartId: _0x5225fb.id,
              injector: _0x1a5dd2,
            }),
          )
        : null;
    }, [_0x5225fb, _0x1a5dd2, _0x36f199]);
  return (
    (0, m.useEffect)(() => {
      var _0x39a06d, _0x31cf32;
      !_0x5225fb ||
        (_0x2199a3 == null ? undefined : _0x2199a3.chartId) !== _0x5225fb.id ||
        (((_0x39a06d = _0x2199a3.route) == null ? undefined : _0x39a06d.tab) ===
          c.ChartEditPanelTab["Style"] &&
          _0x548994(c.ChartEditPanelTab["Style"]),
        ((_0x31cf32 = _0x2199a3.route) == null ? undefined : _0x31cf32.tab) ===
          c.ChartEditPanelTab["Data"] &&
          _0x548994(c.ChartEditPanelTab["Data"]));
    }, [_0x5225fb, _0x2199a3]),
    _0x13d63e
      ? (0, _.jsx)(c.ChartEditorProvider, {
          chartUIService: _0x4b215e,
          hostAdapter: _0x13d63e,
          children: (0, _.jsxs)("div", {
            className:
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20univer-flex\x20univer-h-0\x20univer-min-h-full\x20univer-w-full\x20univer-flex-col\x20univer-bg-gray-0\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dark:!univer-bg-gray-900\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              (_0x2ea192 === c.ChartEditPanelTab["Style"]
                ? "univer-overflow-visible"
                : "univer-overflow-hidden") +
              "\n " +
              (_0x516a61 ?? "") +
              "\n ",
            children: [
              (0, _.jsx)(c.ChartEditPanelTabs, {
                ariaLabel: _0x56adde.t("sheets-chart-ui.common.editChart"),
                className: "univer-shrink-0",
                items: [
                  {
                    label: _0x56adde.t("sheets-chart-ui.common.setup"),
                    panelId: We,
                    value: c.ChartEditPanelTab["Data"],
                  },
                  {
                    label: _0x56adde.t("sheets-chart-ui.common.customize"),
                    panelId: Ge,
                    value: c.ChartEditPanelTab["Style"],
                  },
                ],
                value: _0x2ea192,
                onChange: _0x548994,
              }),
              _0x2ea192 === c.ChartEditPanelTab["Data"]
                ? (0, _.jsx)(c.ChartEditPanel, {
                    id: We,
                    label: _0x56adde.t("sheets-chart-ui.common.setup"),
                    children: (0, _.jsx)(ze, { defaultValues: Pe }),
                  })
                : (0, _.jsx)(c.ChartEditPanel, {
                    id: Ge,
                    className: "-univer-mx-4",
                    label: _0x56adde.t("sheets-chart-ui.common.customize"),
                    children: (0, _.jsx)(Ve, { defaultValues: Pe }),
                  }),
            ],
          }),
        })
      : null
  );
}
const Ue = "sheet.chart.edit.panel",
  We = "sheet-chart-setup-panel",
  Ge = "sheet-chart-style-panel";
function Ke(_0x42dca3) {
  if (_0x42dca3.length !== 1) return false;
  let _0x3ac84d = _0x42dca3[0];
  return (
    _0x3ac84d.drawingType === t.DrawingTypeEnum["DRAWING_CHART"] &&
    !_0x3ac84d.groupId
  );
}
let U = class extends t.Disposable {
  constructor(
    _0x3b65b0,
    _0x58e035,
    _0x334e28,
    _0x4f882c,
    _0x4cae02,
    _0xab990e,
    _0x453017,
    _0x5d6816,
    _0x4e6a5d,
    _0x5b8301,
    _0x5d4b7a,
    _0x29422a,
    _0x1da83b,
    _0x58be43,
  ) {
    var _0x1aae4a;
    (super(),
      (this._drawingManagerService = _0x3b65b0),
      (this._univerInstanceService = _0x58e035),
      (this._chartModelService = _0x334e28),
      (this._chartRenderService = _0x4f882c),
      (this._sheetDrawingHitTestService = _0x4cae02),
      (this._sidebarService = _0xab990e),
      (this._menuManagerService = _0x453017),
      (this._sheetCanvasFloatDomManagerService = _0x5d6816),
      (this._sheetCanvasPopManagerService = _0x4e6a5d),
      (this._commandService = _0x5b8301),
      (this._sheetsChartUIService = _0x5d4b7a),
      (this._contextService = _0x29422a),
      (this._localeService = _0x1da83b),
      N(this, "_sidebarDisposable", null),
      N(this, "_isChartElementEditEnabled", undefined),
      (this._isChartElementEditEnabled =
        ((_0x1aae4a = _0x58be43.getConfig("sheets-chart-ui.config")) == null
          ? undefined
          : _0x1aae4a.enableChartElementFloatMenu) === true),
      this._initMenus(),
      this.disposeWithMe(
        this._univerInstanceService["getCurrentTypeOfUnit$"](
          t.UniverInstanceType["UNIVER_SHEET"],
        ).subscribe((_0xc405f2) => {
          var _0x506a7c;
          _0xc405f2 ||
            (_0x506a7c = this._sidebarDisposable) == null ||
            _0x506a7c.dispose();
        }),
      ),
      this.disposeWithMe(
        (0, t.toDisposable)(
          this._sheetDrawingHitTestService["onDoubleClick$"].subscribe(
            async ({ drawing: _0x1d0288 }) => {
              await this._handleDrawingDoubleClick(_0x1d0288);
            },
          ),
        ),
      ));
  }
  _openPanel() {
    this._sidebarDisposable = this._sidebarService["open"]({
      id: Ue,
      header: {
        title: this._localeService["t"]("sheets-chart-ui.common.editChart"),
      },
      width: 340,
      children: { label: Ue },
      onClose: () => {
        ((this._sidebarDisposable = null),
          this._deactivateEditPanelState(),
          this._chartModelService["activeChartModel"] &&
            this._chartModelService["setActiveChartModel"](null),
          this._drawingManagerService["focusDrawing"](null),
          this._contextService["setContextValue"](
            t.FOCUSING_COMMON_DRAWINGS,
            false,
          ));
      },
    });
  }
  hidePanel() {
    let _0x3f57cf = this._sidebarDisposable;
    ((this._sidebarDisposable = null),
      this._deactivateEditPanelState(),
      this._chartModelService["activeChartModel"] &&
        this._chartModelService["setActiveChartModel"](null),
      _0x3f57cf == null || _0x3f57cf.dispose());
  }
  initPanel() {
    let _0xe28515 = this._univerInstanceService["getCurrentUnitOfType"](
      t.UniverInstanceType["UNIVER_SHEET"],
    );
    (this.disposeWithMe(
      this._sidebarService["sidebarOptions$"].subscribe((_0x854492) => {
        _0x854492.id === "sheet.chart.edit.panel" &&
          (_0x854492.visible ||
            this._sidebarService["sidebarOptions$"].next({ visible: false }));
      }),
    ),
      this.disposeWithMe(
        (0, s.combineLatest)([
          this._chartModelService["activeChartModel$"],
          this._sheetsChartUIService["chartEditorOpen$"],
        ])
          .pipe(
            (0, s.map)(([_0x1bd6d8, _0x4162f9]) =>
              _0x4162f9
                ? ((_0x1bd6d8 == null ? undefined : _0x1bd6d8.id) ?? null)
                : null,
            ),
            (0, s.distinctUntilChanged)(),
            (0, s.startWith)(null),
            (0, s.pairwise)(),
          )
          .subscribe(([_0x28638e, _0x4761ea]) => {
            this._syncActiveEditChart(_0x28638e, _0x4761ea);
          }),
      ),
      this.disposeWithMe(
        this._chartModelService["activeChartModel$"].subscribe((_0x5dac15) => {
          !_0x5dac15 && this._sidebarDisposable && this.hidePanel();
        }),
      ),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x1ed33e) => {
          if (_0x1ed33e.id === C.id) {
            let _0x33e098 = _0x1ed33e.params;
            this.openChartPanelById(_0x33e098.drawingId, _0x33e098.route);
          }
          if (
            (_0x1ed33e.id === S.id && this.hidePanel(),
            _0x1ed33e.id === e.RemoveSheetsChartMutation["id"])
          ) {
            var _0x19eb58;
            (_0x1ed33e.params["chartId"] ===
              ((_0x19eb58 = this._chartModelService["activeChartModel"]) == null
                ? undefined
                : _0x19eb58.id) && this.hidePanel(),
              this._contextService["getContextValue"](
                t.FOCUSING_COMMON_DRAWINGS,
              ) &&
                (this._contextService["setContextValue"](
                  t.FOCUSING_COMMON_DRAWINGS,
                  false,
                ),
                this._drawingManagerService["focusDrawing"](null)));
          }
        }),
      ),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["remove$"].subscribe(
          ({ id: _0x1959a6 }) => {
            this._sheetsChartUIService["isElementEditModeActive"](_0x1959a6) &&
              this.hidePanel();
          },
        ),
      ),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["transformChange$"].subscribe(
          ({ id: _0x1db83d }) => {
            this._sheetsChartUIService["isElementEditModeActive"](_0x1db83d) &&
              (this._sheetsChartUIService["clearPanelRoute"](),
              this._chartRenderService["setElementEditMode"](_0x1db83d, false),
              this._shouldEnableChartElementEdit(_0x1db83d) &&
                this._chartRenderService["setElementEditMode"](
                  _0x1db83d,
                  true,
                ));
          },
        ),
      ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x125f1f) => {
          let _0x304b56 = _0x125f1f[0];
          if (!this._sheetsChartUIService["rangeSelectMode"]) {
            if (Ke(_0x125f1f)) {
              var _0x233ec4;
              let _0x353097 = this._chartModelService["getChartModel"](
                _0x304b56.drawingId,
              );
              _0x353097 &&
                ((_0x233ec4 = this._chartModelService["activeChartModel"]) ==
                null
                  ? undefined
                  : _0x233ec4.id) !== _0x353097.id &&
                this._chartModelService["setActiveChartModel"](_0x353097);
              return;
            }
            (this._chartModelService["activeChartModel"] &&
              this._chartModelService["setActiveChartModel"](null),
              !_0x304b56 &&
                !this._sheetsChartUIService["rangeSelectMode"] &&
                this.hidePanel());
          }
        }),
      ),
      _0xe28515 &&
        (this.disposeWithMe(
          _0xe28515.sheetDisposed$["subscribe"](() => {
            this.hidePanel();
          }),
        ),
        this.disposeWithMe(
          _0xe28515.activeSheet$["subscribe"](() => {
            this.hidePanel();
          }),
        )));
  }
  async _handleDrawingDoubleClick(_0x4a8837) {
    this._sheetsChartUIService["chartEditorOpen"] ||
      (_0x4a8837.drawingType === t.DrawingTypeEnum["DRAWING_CHART"] &&
        (await this._openEditPanelByDoubleClick(
          _0x4a8837.unitId,
          _0x4a8837.subUnitId,
          _0x4a8837.drawingId,
        )));
  }
  async _openEditPanelByDoubleClick(_0x1a65fc, _0x3b9998, _0x5048e4) {
    let _0x89f732 = this._chartModelService["getChartModel"](_0x5048e4);
    _0x89f732 &&
      (this._chartModelService["setActiveChartModel"](_0x89f732),
      await this._commandService["executeCommand"](C.id, {
        unitId: _0x1a65fc,
        subUnitId: _0x3b9998,
        drawingId: _0x5048e4,
      }));
  }
  openChartPanelById(_0x5aa5cd, _0x50eae9) {
    let _0x135fb9 = this._chartModelService["getChartModel"](_0x5aa5cd);
    _0x135fb9 &&
      (this._chartModelService["setActiveChartModel"](_0x135fb9),
      this._openPanel(),
      this._activateEditPanelState(_0x5aa5cd, _0x50eae9 ?? null));
  }
  _activateEditPanelState(_0x25e340, _0x1ed8d9) {
    (this._sheetsChartUIService["setChartEditorOpen"](true),
      this._sheetsChartUIService["setPanelRoute"](_0x25e340, _0x1ed8d9));
  }
  _deactivateEditPanelState() {
    this._sheetsChartUIService["setChartEditorOpen"](false);
  }
  _syncActiveEditChart(_0x2e14b6, _0x3ea2eb) {
    _0x2e14b6 !== _0x3ea2eb &&
      (_0x2e14b6 &&
        this._chartRenderService["setElementEditMode"](_0x2e14b6, false),
      this._sheetsChartUIService["clearPanelRoute"](),
      _0x3ea2eb &&
        (this._sheetsChartUIService["setPanelRoute"](_0x3ea2eb, null),
        this._chartRenderService["setElementEditMode"](
          _0x3ea2eb,
          this._shouldEnableChartElementEdit(_0x3ea2eb),
        )));
  }
  _initMenus() {
    (this._menuManagerService["mergeMenu"](ue),
      this._sheetCanvasPopManagerService["registerFeatureMenu"](
        t.DrawingTypeEnum["DRAWING_CHART"],
        this.getChartPopupMenus["bind"](this),
      ));
  }
  _shouldEnableChartElementEdit(_0x1f91ad) {
    let _0x27448a = this._chartModelService["getChartModel"](_0x1f91ad);
    return !this._isChartElementEditEnabled || !_0x27448a
      ? false
      : fe(_0x27448a.chartType);
  }
  getChartPopupMenus(_0x1fc2d2, _0x5149fb, _0x21ce2c, _0x5f490b) {
    return [
      {
        label: this._localeService["t"](
          "sheets-chart-ui.common.openChartPanel",
        ),
        index: 0,
        commandId: C.id,
        commandParams: {
          unitId: _0x1fc2d2,
          subUnitId: _0x5149fb,
          drawingId: _0x21ce2c,
        },
        disable: _0x5f490b !== t.DrawingTypeEnum["DRAWING_CHART"],
      },
      {
        label: this._localeService["t"]("sheets-chart-ui.common.deleteChart"),
        index: 1,
        commandId: r.RemoveSheetDrawingCommand["id"],
        commandParams: {
          unitId: _0x1fc2d2,
          drawings: [
            {
              unitId: _0x1fc2d2,
              subUnitId: _0x5149fb,
              drawingId: _0x21ce2c,
              drawingType: _0x5f490b,
            },
          ],
        },
        disable: false,
      },
      {
        label: this._localeService["t"](
          "sheets-chart-ui.common.hideChartPanel",
        ),
        index: 2,
        commandId: S.id,
        commandParams: {
          unitId: _0x1fc2d2,
          subUnitId: _0x5149fb,
          drawingId: _0x21ce2c,
        },
        disable: false,
      },
    ];
  }
};
U = L(
  [
    I(0, n.IDrawingManagerService),
    I(1, t.IUniverInstanceService),
    I(2, (0, t.Inject)(e.ChartModelService)),
    I(3, (0, t.Inject)(z)),
    I(4, (0, t.Inject)(i.SheetDrawingHitTestService)),
    I(5, (0, t.Inject)(o.ISidebarService)),
    I(6, o.IMenuManagerService),
    I(7, (0, t.Inject)(i.SheetCanvasFloatDomManagerService)),
    I(8, (0, t.Inject)(a.SheetCanvasPopManagerService)),
    I(9, t.ICommandService),
    I(10, B),
    I(11, t.IContextService),
    I(12, (0, t.Inject)(t.LocaleService)),
    I(13, t.IConfigService),
  ],
  U,
);
var qe = "@univerjs-pro/sheets-chart-ui",
  Je = "1.0.0-insiders.20260907-70fc579";
const W = { scaleX: 1, scaleY: 1 };
function Ye(_0x4a9582) {
  let _0x370ede = _0x4a9582.nativeEvent;
  return _0x370ede instanceof MouseEvent ? _0x370ede : undefined;
}
function Xe(_0x4f7236) {
  let _0x24766d = _0x4f7236.nativeEvent,
    _0x1df0e1 = _0x24766d == null ? undefined : _0x24766d.target;
  return _0x1df0e1 instanceof Element ? _0x1df0e1 : undefined;
}
function Ze(_0x8b4062) {
  var _0x358e7e;
  return (_0x358e7e = Xe(_0x8b4062)) == null
    ? undefined
    : _0x358e7e.getBoundingClientRect();
}
function Qe(_0x351759) {
  return _0x351759.width || _0x351759.right - _0x351759.left;
}
function $e(_0x4c969c) {
  return _0x4c969c.height || _0x4c969c.bottom - _0x4c969c.top;
}
function et(_0x33ff96, _0x215c53) {
  let _0x464b3e =
      _0x33ff96.clientWidth ||
      (_0x33ff96 instanceof HTMLElement ? _0x33ff96.offsetWidth : 0),
    _0x276bac =
      _0x33ff96.clientHeight ||
      (_0x33ff96 instanceof HTMLElement ? _0x33ff96.offsetHeight : 0),
    _0x345876 = Qe(_0x215c53),
    _0x3cc1d0 = $e(_0x215c53);
  return {
    scaleX: _0x464b3e > 0 && _0x345876 > 0 ? _0x345876 / _0x464b3e : W.scaleX,
    scaleY: _0x276bac > 0 && _0x3cc1d0 > 0 ? _0x3cc1d0 / _0x276bac : W.scaleY,
  };
}
function tt(_0x1368c1, _0x3dfcba, _0x3e4a90) {
  return {
    left: _0x1368c1.left + _0x3dfcba.left * _0x3e4a90.scaleX,
    right: _0x1368c1.left + _0x3dfcba.right * _0x3e4a90.scaleX,
    top: _0x1368c1.top + _0x3dfcba.top * _0x3e4a90.scaleY,
    bottom: _0x1368c1.top + _0x3dfcba.bottom * _0x3e4a90.scaleY,
  };
}
function nt(_0x385a7d) {
  let _0x55c413 = Xe(_0x385a7d),
    _0x22da77 = _0x385a7d.hit["bounds"];
  return _0x55c413 && _0x22da77
    ? () => {
        let _0x173980 = _0x55c413.getBoundingClientRect();
        return tt(_0x173980, _0x22da77, et(_0x55c413, _0x173980));
      }
    : () => {
        let _0x101959 = Ze(_0x385a7d);
        if (_0x101959 && _0x22da77)
          return tt(
            _0x101959,
            _0x22da77,
            _0x55c413 ? et(_0x55c413, _0x101959) : W,
          );
        let _0x453de2 = Ye(_0x385a7d),
          _0x107b7e = _0x55c413 && _0x101959 ? et(_0x55c413, _0x101959) : W,
          _0x3dd85d =
            (_0x453de2 == null ? undefined : _0x453de2.clientX) ??
            (_0x101959
              ? _0x101959.left + _0x385a7d.localPoint["x"] * _0x107b7e.scaleX
              : _0x385a7d.localPoint["x"]),
          _0x2ee088 =
            (_0x453de2 == null ? undefined : _0x453de2.clientY) ??
            (_0x101959
              ? _0x101959.top + _0x385a7d.localPoint["y"] * _0x107b7e.scaleY
              : _0x385a7d.localPoint["y"]);
        return {
          left: _0x3dd85d,
          right: _0x3dd85d + 1,
          top: _0x2ee088,
          bottom: _0x2ee088 + 1,
        };
      };
}
function G(_0x218379) {
  return typeof _0x218379 == "number" && Number.isFinite(_0x218379);
}
function rt(_0x58853b) {
  if (!_0x58853b || typeof _0x58853b != "object") return true;
  let {
    startX: _0x52eb5c,
    endX: _0x11b2d3,
    startY: _0x142ab2,
    endY: _0x491a25,
  } = _0x58853b;
  return (
    !G(_0x52eb5c) ||
    !G(_0x11b2d3) ||
    !G(_0x142ab2) ||
    !G(_0x491a25) ||
    (_0x11b2d3 - _0x52eb5c > 2 && _0x491a25 - _0x142ab2 > 2)
  );
}
function it(_0x54f752) {
  return _0x54f752.right <= _0x54f752.left || _0x54f752.bottom <= _0x54f752.top
    ? false
    : typeof window > "u" ||
        (_0x54f752.right > 0 &&
          _0x54f752.bottom > 0 &&
          _0x54f752.left < window.innerWidth &&
          _0x54f752.top < window.innerHeight);
}
function at(_0x244c07) {
  var _0x13bc93;
  return _0x244c07 == null || (_0x13bc93 = _0x244c07.getValue) == null
    ? undefined
    : _0x13bc93.call(_0x244c07);
}
function ot(_0x45ead8, _0x4d860b, _0x468050) {
  let _0x3ff983 = nt(_0x45ead8),
    _0x45516a = at(_0x4d860b),
    _0x10c788 = _0x3ff983(),
    _0x27044f = new s["BehaviorSubject"](_0x10c788),
    _0x1b78ac = new t["DisposableCollection"](),
    _0x1cd50b = false,
    _0x325ca8 = false,
    _0x5fb7de = (_0x497025) => rt(_0x45516a) && it(_0x497025),
    _0x10da13 = () => {
      _0x325ca8 ||
        _0x1cd50b ||
        ((_0x325ca8 = true),
        queueMicrotask(() => {
          if (((_0x325ca8 = false), !_0x1cd50b)) {
            let _0x283ed8 = _0x3ff983();
            if (!_0x5fb7de(_0x283ed8)) {
              _0x468050();
              return;
            }
            _0x27044f.next(_0x283ed8);
          }
        }));
    };
  return (
    _0x4d860b &&
      _0x1b78ac.add(
        _0x4d860b.subscribe((_0x47cedc) => {
          ((_0x45516a = _0x47cedc), _0x10da13());
        }),
      ),
    typeof window < "u" &&
      _0x1b78ac.add(
        (0, s.merge)(
          (0, s.fromEvent)(window, "scroll", { capture: true }),
          (0, s.fromEvent)(window, "resize"),
        )
          .pipe((0, s.throttleTime)(16))
          .subscribe(_0x10da13),
      ),
    {
      initialRect: _0x10c788,
      anchorRect$: _0x27044f.asObservable(),
      visible: _0x5fb7de(_0x10c788),
      dispose: () => {
        ((_0x1cd50b = true), _0x1b78ac.dispose(), _0x27044f.complete());
      },
    }
  );
}
const st = "sheets-chart-element-float-menu";
let K = class extends t.Disposable {
  constructor(
    _0x42bbbc,
    _0x29af61,
    _0x484dc8,
    _0x470fa9,
    _0x4a05a5,
    _0x3ef19f,
    _0x1327a0,
    _0x29cdcd,
    _0x1531a4,
    _0x1b6053,
  ) {
    (super(),
      (this._chartModelService = _0x42bbbc),
      (this._chartRenderService = _0x29af61),
      (this._chartHostProvider = _0x484dc8),
      (this._sheetCanvasPopManagerService = _0x470fa9),
      (this._sheetCanvasFloatDomManagerService = _0x4a05a5),
      (this._chartUIService = _0x3ef19f),
      (this._adapterRegistry = _0x1327a0),
      (this._commandService = _0x29cdcd),
      (this._injector = _0x1531a4),
      (this._contextService = _0x1b6053),
      N(this, "_popupDisposable", null),
      N(this, "_popupChartId", null),
      N(this, "_popupSessionKey", null),
      this._registerAdapter(),
      this._subscribeChartEvents());
  }
  dispose() {
    (this._closePopup(), super.dispose());
  }
  _registerAdapter() {
    let _0x590017 = (0, c.createChartElementFloatMenuAdapter)({
      chartUIService: this._chartUIService,
      getHostAdapter: (_0x2ad398) => {
        let _0x37f820 = this._chartModelService["getChartModel"](
          _0x2ad398.chartId,
        );
        if (!(!_0x37f820 || !_0x2ad398.subUnitId))
          return new c["ChartHostAdapter"](
            _0x37f820,
            new e["SheetChartConfigAdapter"]({
              unitId: _0x2ad398.unitId,
              subUnitId: _0x2ad398.subUnitId,
              chartId: _0x2ad398.chartId,
              injector: this._injector,
            }),
          );
      },
      close: () => this._closePopup(),
      openFullPanel: (_0x3c6a0c) => {
        let {
            unitId: _0x586767,
            subUnitId: _0x308295,
            drawingId: _0x29e420,
            chartId: _0x3169a8,
          } = _0x3c6a0c,
          _0x194691 = (0, c.resolveChartEditPanelRoute)(_0x3c6a0c.target);
        this._commandService["executeCommand"](C.id, {
          unitId: _0x586767,
          subUnitId: _0x308295 ?? "",
          drawingId: _0x29e420 ?? _0x3169a8,
          ...(_0x194691 ? { route: _0x194691 } : {}),
        });
      },
    });
    this.disposeWithMe(this._adapterRegistry["register"](st, _0x590017));
  }
  _subscribeChartEvents() {
    (this.disposeWithMe(
      this._chartModelService["chartModelAdded$"].subscribe((_0xfe1c0e) => {
        let _0x5154e5 = new t.DisposableCollection();
        (_0x5154e5.add(
          this._chartRenderService["on"](_0xfe1c0e.id, "click", (_0x215692) => {
            this._openFloatMenu(_0xfe1c0e.id, _0x215692);
          }),
        ),
          _0x5154e5.add(
            this._chartRenderService["on"](_0xfe1c0e.id, "dblclick", () => {
              this._openEditPanelByDoubleClick(_0xfe1c0e.id);
            }),
          ),
          _0xfe1c0e.onDispose(() => {
            (_0x5154e5.dispose(), this._clearSelectedTarget(_0xfe1c0e.id));
          }),
          this.disposeWithMe(_0x5154e5));
      }),
    ),
      this.disposeWithMe(
        (0, s.combineLatest)([
          this._chartModelService["activeChartModel$"],
          this._chartUIService["chartEditorOpen$"],
        ]).subscribe(([_0x3c8538, _0x529e0a]) => {
          (!_0x529e0a ||
            (this._popupChartId &&
              (_0x3c8538 == null ? undefined : _0x3c8538.id) !==
                this._popupChartId)) &&
            this._closePopup();
        }),
      ),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["transformChange$"].subscribe(
          ({ id: _0x19a897 }) => {
            this._clearSelectedTarget(_0x19a897);
          },
        ),
      ),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["remove$"].subscribe(
          ({ id: _0x523aea }) => {
            this._clearSelectedTarget(_0x523aea);
          },
        ),
      ),
      this.disposeWithMe(
        this._chartHostProvider["removeHost$"].subscribe((_0x3aac01) => {
          this._clearSelectedTarget(_0x3aac01);
        }),
      ));
  }
  _openEditPanelByDoubleClick(_0x430fce) {
    if (this._chartUIService["chartEditorOpen"]) return;
    let _0x55816f = this._chartModelService["getChartModel"](_0x430fce),
      _0x5a3d41 =
        this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x430fce);
    !_0x55816f ||
      !_0x5a3d41 ||
      this._commandService["executeCommand"](C.id, {
        unitId: _0x5a3d41.unitId,
        subUnitId: _0x5a3d41.subUnitId ?? "",
        drawingId: _0x430fce,
      });
  }
  _openFloatMenu(_0x5ab919, _0x491f08) {
    if (!this._chartUIService["isElementEditModeActive"](_0x5ab919)) return;
    let _0x15fc3f = this._chartModelService["getChartModel"](_0x5ab919),
      _0x2e1ff6 = _0x15fc3f ? pe(_0x15fc3f, _0x491f08.hit) : undefined;
    if (!_0x2e1ff6) {
      (this._chartUIService["clearPanelRoute"](), this._closePopup());
      return;
    }
    let _0x40e6ac =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x5ab919);
    if (!_0x15fc3f || !_0x40e6ac) {
      (this._chartUIService["clearPanelRoute"](), this._closePopup());
      return;
    }
    if (this._isMobileRuntime()) {
      (this._chartUIService["setPanelRoute"](_0x5ab919, _0x2e1ff6.route),
        this._closePopup(),
        this._commandService["executeCommand"](C.id, {
          unitId: _0x40e6ac.unitId,
          subUnitId: _0x40e6ac.subUnitId ?? "",
          drawingId: _0x5ab919,
          route: _0x2e1ff6.route,
        }));
      return;
    }
    let _0x401edb = JSON.stringify([
      _0x40e6ac.unitId,
      _0x40e6ac.subUnitId,
      _0x5ab919,
      _0x2e1ff6.target,
    ]);
    if (
      (this._popupDisposable && this._popupSessionKey === _0x401edb) ||
      (this._chartUIService["setPanelRoute"](_0x5ab919, _0x2e1ff6.route),
      this._closePopup(),
      !_0x2e1ff6.showFloatMenu)
    )
      return;
    let _0x5d7a26 = ot(_0x491f08, _0x40e6ac.position$, () =>
      this._clearHiddenSelectedTarget(_0x5ab919),
    );
    if (!_0x5d7a26.visible) {
      _0x5d7a26.dispose();
      return;
    }
    let _0x4dbdc5 =
      this._sheetCanvasPopManagerService[
        "attachPopupToDynamicAbsolutePosition"
      ](
        _0x5d7a26.initialRect,
        _0x5d7a26.anchorRect$,
        {
          componentKey: c.CHART_ELEMENT_FLOAT_MENU_COMPONENT,
          constrainToCanvas: true,
          direction: "top-center",
          offset: [0, 8],
          extraProps: {
            unitId: _0x40e6ac.unitId,
            subUnitId: _0x40e6ac.subUnitId,
            chartId: _0x5ab919,
            drawingId: _0x5ab919,
            element: _0x491f08.hit,
            target: _0x2e1ff6.target,
            adapterKey: st,
          },
        },
        _0x40e6ac.unitId,
        _0x40e6ac.subUnitId,
      ) ?? null;
    if (!_0x4dbdc5) {
      _0x5d7a26.dispose();
      return;
    }
    let _0x5d2617 = new t["DisposableCollection"]();
    (_0x5d2617.add(_0x4dbdc5),
      _0x5d2617.add(_0x5d7a26),
      (this._popupDisposable = _0x5d2617),
      (this._popupChartId = _0x5ab919),
      (this._popupSessionKey = _0x401edb));
  }
  _closePopup() {
    var _0x349dca;
    ((_0x349dca = this._popupDisposable) == null || _0x349dca.dispose(),
      (this._popupDisposable = null),
      (this._popupChartId = null),
      (this._popupSessionKey = null));
  }
  _isMobileRuntime() {
    return this._contextService["getContextValue"](o.MOBILE_UI_MODE);
  }
  _clearSelectedTarget(_0x307abd) {
    (!this._chartUIService["isElementEditModeActive"](_0x307abd) &&
      this._popupChartId !== _0x307abd) ||
      (this._chartUIService["clearPanelRoute"](),
      this._popupChartId === _0x307abd && this._closePopup());
  }
  _clearHiddenSelectedTarget(_0x4e5e5c) {
    (this._clearSelectedTarget(_0x4e5e5c),
      this._chartUIService["isElementEditModeActive"](_0x4e5e5c) &&
        (this._chartRenderService["setElementEditMode"](_0x4e5e5c, false),
        this._chartRenderService["setElementEditMode"](_0x4e5e5c, true)));
  }
};
K = L(
  [
    I(0, (0, t.Inject)(e.ChartModelService)),
    I(1, (0, t.Inject)(z)),
    I(2, R),
    I(3, (0, t.Inject)(a.SheetCanvasPopManagerService)),
    I(4, (0, t.Inject)(i.SheetCanvasFloatDomManagerService)),
    I(5, B),
    I(6, (0, t.Inject)(c.ChartElementFloatMenuAdapterRegistry)),
    I(7, t.ICommandService),
    I(8, (0, t.Inject)(t.Injector)),
    I(9, t.IContextService),
  ],
  K,
);
let q = class extends t.Disposable {
  constructor(_0x2235d9, _0x5420aa) {
    (super(),
      (this._chartHostProviderService = _0x2235d9),
      (this._chartModelService = _0x5420aa),
      this._init());
  }
  _init() {
    this.disposeWithMe(
      this._chartHostProviderService["removeHost$"].subscribe((_0x539490) => {
        this._chartModelService["removeChartModel"](_0x539490);
      }),
    );
  }
};
q = L([I(0, R), I(1, (0, t.Inject)(e.ChartModelService))], q);
let J = class extends t.Disposable {
  constructor(
    _0x401842,
    _0x35e465,
    _0x5693a3,
    _0x2b28ba,
    _0x2a31d5,
    _0x53e0f5,
  ) {
    (super(),
      (this._chartModelService = _0x401842),
      (this._chartRenderService = _0x35e465),
      (this._localeService = _0x5693a3),
      (this._chartUIService = _0x2b28ba),
      (this._commandService = _0x2a31d5),
      (this._sheetPrintInterceptorService = _0x53e0f5),
      N(this, "_pendingMutationConfigRenders", new Map()),
      N(this, "_pendingDataUpdateChartIds", new Set()),
      this._init(),
      this._listenChartUpdateMutations(),
      this._initPrinting());
  }
  _initPrinting() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_COMPONENT_COLLECT,
        {
          handler: (_0x57f783, _0x563014, _0x359a5f) => {
            let _0x5ca65b = this._chartRenderService["renderChartsForPrinting"](
              _0x563014.unitId,
              _0x563014.subUnitId,
              _0x563014.scene,
            );
            return (
              _0x563014.resourceCollector["add"](_0x5ca65b),
              _0x359a5f(_0x57f783)
            );
          },
        },
      ),
    );
  }
  _init() {
    this.disposeWithMe(
      this._chartModelService["chartModelAdded$"].subscribe((_0x2a5ca2) => {
        if (_0x2a5ca2) {
          let _0x87794a = new t["DisposableCollection"]();
          (_0x87794a.add(
            _0x2a5ca2.dataSource["data$"].pipe((0, s.skip)(1)).subscribe(() => {
              this._pendingDataUpdateChartIds["add"](_0x2a5ca2.id);
            }),
          ),
            _0x87794a.add(
              _0x2a5ca2.config$["pipe"](
                (0, s.combineLatestWith)(_0x2a5ca2.style$),
                (0, s.combineLatestWith)(this._localeService["direction$"]),
                (0, s.debounceTime)(100),
              ).subscribe(([[_0x597cc6, _0xc47b06], _0x48dd78]) => {
                var _0x4f6b0d;
                if (!_0x597cc6) return;
                ((_0x4f6b0d = _0x597cc6.category) == null ||
                  _0x4f6b0d.items["forEach"]((_0x2a71e7, _0x33523a) => {
                    _0x2a71e7.label ||=
                      this._localeService["t"](
                        "sheets-chart-ui.common.category",
                      ) +
                      "\x20" +
                      (_0x33523a + 1);
                  }),
                  _0x597cc6.series["forEach"]((_0x105302, _0x319154) => {
                    _0x105302.name ||=
                      this._localeService["t"]("sheets-chart-ui.chord.target") +
                      "\x20" +
                      (_0x319154 + 1);
                  }));
                let _0x1adad8 = this._chartRenderService[
                    "createRuntimeChartStyle"
                  ](_0x2a5ca2, _0x48dd78),
                  _0x3a5cbb = this._pendingDataUpdateChartIds["delete"](
                    _0x2a5ca2.id,
                  );
                this._chartRenderService["render"](
                  _0x2a5ca2.id,
                  _0x597cc6,
                  _0x1adad8,
                  { animateDataUpdate: _0x3a5cbb },
                );
              }),
            ),
            _0x2a5ca2.onDispose(() => {
              (this._pendingDataUpdateChartIds["delete"](_0x2a5ca2.id),
                _0x87794a.dispose());
            }));
        }
      }),
    );
  }
  _listenChartUpdateMutations() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0xb1d1b7) => {
        if (_0xb1d1b7.id !== e.ChartUpdateConfigMutation["id"]) return;
        let _0x3ab6b6 = _0xb1d1b7.params;
        _0x3ab6b6 != null &&
          _0x3ab6b6.chartModelId &&
          Promise.resolve().then(() =>
            this._renderAfterChartUpdateMutation(_0x3ab6b6),
          );
      }),
    );
  }
  _renderAfterChartUpdateMutation(_0x3b6047) {
    let _0x4e6847 = this._chartModelService["getChartModel"](
      _0x3b6047.chartModelId,
    );
    if (!_0x4e6847 || _0x4e6847.chartType !== l.ChartTypeBits["WordCloud"])
      return;
    let _0x140874 = _0x4e6847.config;
    if (!_0x140874) {
      this._renderWhenConfigReady(_0x4e6847);
      return;
    }
    this._renderChartModel(_0x4e6847, _0x140874);
  }
  _renderWhenConfigReady(_0x46d4b4) {
    if (this._pendingMutationConfigRenders["get"](_0x46d4b4.id)) return;
    let _0x150e31 = _0x46d4b4.config$["pipe"](
      (0, s.filter)((_0x539cc4) => _0x539cc4 != null),
      (0, s.take)(1),
    ).subscribe((_0x28864a) => {
      (this._pendingMutationConfigRenders["delete"](_0x46d4b4.id),
        this._renderChartModel(_0x46d4b4, _0x28864a));
    });
    (this._pendingMutationConfigRenders["set"](_0x46d4b4.id, _0x150e31),
      _0x46d4b4.onDispose(() => {
        (_0x150e31.unsubscribe(),
          this._pendingMutationConfigRenders["delete"](_0x46d4b4.id));
      }));
  }
  _renderChartModel(_0x5c4db1, _0x21481c) {
    let _0x10714d = this._chartRenderService["createRuntimeChartStyle"](
      _0x5c4db1,
      this._localeService["getDirection"](),
    );
    this._chartRenderService["render"](_0x5c4db1.id, _0x21481c, _0x10714d);
  }
};
J = L(
  [
    I(0, (0, t.Inject)(e.ChartModelService)),
    I(1, (0, t.Inject)(z)),
    I(2, (0, t.Inject)(t.LocaleService)),
    I(3, B),
    I(4, t.ICommandService),
    I(5, (0, t.Inject)(a.SheetPrintInterceptorService)),
  ],
  J,
);
function ct(_0x30be58, _0x3dbb54) {
  return _0x30be58.unitId !== _0x3dbb54.unitId ||
    _0x30be58.subUnitId !== _0x3dbb54.sourceSubUnitId
    ? _0x30be58
    : { ..._0x30be58, subUnitId: _0x3dbb54.targetSubUnitId };
}
function lt(_0xcd6f53, _0x7b80c) {
  let { rangeInfo: _0x1f9c4e } = _0xcd6f53;
  return Array.isArray(_0x1f9c4e)
    ? {
        ..._0xcd6f53,
        rangeInfo: _0x1f9c4e.map((_0x4b9a72) => ({
          ..._0x4b9a72,
          ...(_0x4b9a72.header
            ? { header: ct(_0x4b9a72.header, _0x7b80c) }
            : {}),
          range: ct(_0x4b9a72.range, _0x7b80c),
        })),
      }
    : {
        ..._0xcd6f53,
        rangeInfo: {
          ..._0x1f9c4e,
          rangeInfo: ct(_0x1f9c4e.rangeInfo, _0x7b80c),
        },
      };
}
function ut(_0x79799a, _0x439011, _0x1172ba, _0x549c2e) {
  let _0x5e1fae = (0, n.getOrCreateDrawingCopyPlan)(
      _0x79799a,
      _0x439011,
      _0x1172ba,
    ),
    _0xf5305c = [];
  for (let _0xd2fda9 of _0x439011) {
    let _0x5ce871 = _0x5e1fae.idMap["get"](_0xd2fda9.drawingId),
      _0x37ad26 = _0x549c2e(_0xd2fda9);
    !_0x5ce871 ||
      !_0x37ad26 ||
      _0xf5305c.push({
        targetChartId: _0x5ce871,
        source: lt(_0x37ad26, _0x1172ba),
      });
  }
  return _0xf5305c;
}
let Y = class extends t.Disposable {
  constructor(_0x49440d, _0x18542f, _0x477519, _0x23c982, _0x2b6af3) {
    (super(),
      (this._univerInstanceService = _0x49440d),
      (this._sheetInterceptorService = _0x18542f),
      (this._sheetDrawingService = _0x477519),
      (this._chartModelService = _0x23c982),
      (this._sheetsChartService = _0x2b6af3),
      this._initSheetChange());
  }
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x11c6e6) => {
          if (_0x11c6e6.id === u.RemoveSheetCommand["id"]) {
            let _0x1a4671 = (0, u.getSheetCommandTarget)(
              this._univerInstanceService,
              _0x11c6e6.params,
            );
            if (!_0x1a4671) return { redos: [], undos: [] };
            let { unitId: _0x2136fb, subUnitId: _0x18d51b } = _0x1a4671,
              _0x246c6b = this._sheetDrawingService["getDrawingData"](
                _0x2136fb,
                _0x18d51b,
              ),
              _0x5d7370 = Object.values(_0x246c6b).filter(
                (_0x1ab04d) =>
                  _0x1ab04d.drawingType === t.DrawingTypeEnum["DRAWING_CHART"],
              );
            if (_0x5d7370.length === 0) return { redos: [], undos: [] };
            let _0x2490f5 = [],
              _0x5c9ce3 = [];
            for (let _0x3ba3c4 = 0; _0x3ba3c4 < _0x5d7370.length; _0x3ba3c4++) {
              let _0x13cd3b = _0x5d7370[_0x3ba3c4],
                _0x525d8f = this._chartModelService["getChartModel"](
                  _0x13cd3b.drawingId,
                );
              if (!_0x525d8f) continue;
              let _0x3bc22a = this._sheetsChartService["getChartSourceSpec"](
                _0x525d8f.id,
              );
              if (!_0x3bc22a) continue;
              let {
                chartType: _0x567816,
                context: _0x1070c4,
                style: _0x524f3e,
                dataAggregation: _0x3efc90,
              } = _0x525d8f.serialize();
              (_0x2490f5.push({
                id: e.RemoveSheetsChartMutation["id"],
                params: {
                  unitId: _0x2136fb,
                  subUnitId: _0x18d51b,
                  chartId: _0x13cd3b.drawingId,
                },
              }),
                _0x5c9ce3.push({
                  id: e.InsertSheetsChartMutation["id"],
                  params: {
                    unitId: _0x2136fb,
                    subUnitId: _0x18d51b,
                    chartId: _0x13cd3b.drawingId,
                    chartType: _0x567816,
                    ...(0, e.toInsertChartMutationSource)(_0x3bc22a),
                    context: _0x1070c4,
                    style: _0x524f3e,
                    dataAggregation: _0x3efc90,
                  },
                }));
            }
            return { redos: _0x2490f5, undos: _0x5c9ce3 };
          } else {
            if (_0x11c6e6.id === u.CopySheetCommand["id"]) {
              let {
                unitId: _0x89dab1,
                subUnitId: _0x128a7d,
                targetSubUnitId: _0x38b0fc,
                copyContext: _0x5a04a1,
              } = _0x11c6e6.params;
              if (!_0x89dab1 || !_0x128a7d || !_0x38b0fc)
                return { redos: [], undos: [] };
              let _0x52ca53 = this._sheetDrawingService["getDrawingData"](
                  _0x89dab1,
                  _0x128a7d,
                ),
                _0x5bace7 = Object.values(_0x52ca53).filter(
                  (_0x3f71a8) =>
                    _0x3f71a8.drawingType ===
                    t.DrawingTypeEnum["DRAWING_CHART"],
                );
              if (_0x5bace7.length === 0) return { redos: [], undos: [] };
              let _0xb6959 = ut(
                  _0x5a04a1,
                  _0x5bace7,
                  {
                    unitId: _0x89dab1,
                    sourceSubUnitId: _0x128a7d,
                    targetSubUnitId: _0x38b0fc,
                  },
                  (_0x357e51) => {
                    let _0x587207 = this._chartModelService["getChartModel"](
                      _0x357e51.drawingId,
                    );
                    if (!_0x587207) return;
                    let _0x19d4dd = this._sheetsChartService[
                      "getChartSourceSpec"
                    ](_0x587207.id);
                    if (!_0x19d4dd) return;
                    let {
                      chartType: _0x4404f9,
                      context: _0x266daa,
                      style: _0x25d9a1,
                      dataAggregation: _0x5c88bd,
                    } = _0x587207.serialize();
                    return {
                      rangeInfo: _0x19d4dd,
                      chartType: _0x4404f9,
                      context: _0x266daa,
                      style: _0x25d9a1,
                      dataAggregation: _0x5c88bd,
                    };
                  },
                ),
                _0x2c8069 = [],
                _0x1e77e7 = [];
              for (let {
                targetChartId: _0x26a99e,
                source: _0x4718d6,
              } of _0xb6959) {
                let {
                  rangeInfo: _0x34d782,
                  chartType: _0x3ee90f,
                  context: _0xf8a094,
                  style: _0x3cbcc2,
                  dataAggregation: _0x27742c,
                } = _0x4718d6;
                (_0x2c8069.push({
                  id: e.InsertSheetsChartMutation["id"],
                  params: {
                    unitId: _0x89dab1,
                    subUnitId: _0x38b0fc,
                    chartId: _0x26a99e,
                    chartType: _0x3ee90f,
                    ...(0, e.toInsertChartMutationSource)(_0x34d782),
                    context: _0xf8a094,
                    style: _0x3cbcc2,
                    dataAggregation: _0x27742c,
                  },
                }),
                  _0x1e77e7.push({
                    id: e.RemoveSheetsChartMutation["id"],
                    params: {
                      unitId: _0x89dab1,
                      subUnitId: _0x38b0fc,
                      chartId: _0x26a99e,
                    },
                  }));
              }
              return { redos: _0x2c8069, undos: _0x1e77e7 };
            }
          }
          return { redos: [], undos: [] };
        },
      }),
    );
  }
};
Y = L(
  [
    I(0, (0, t.Inject)(t.IUniverInstanceService)),
    I(1, (0, t.Inject)(u.SheetInterceptorService)),
    I(2, (0, t.Inject)(r.ISheetDrawingService)),
    I(3, (0, t.Inject)(e.ChartModelService)),
    I(4, (0, t.Inject)(e.SheetsChartService)),
  ],
  Y,
);
let X = class extends t.Disposable {
  constructor(_0xc769ef, _0x357648) {
    (super(),
      (this._componentManager = _0xc769ef),
      (this._iconManager = _0x357648),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({ PenIcon: y.PenIcon }));
  }
  _registerComponents() {
    [[Ue, He]].forEach(([_0x53203d, _0x1392ee]) => {
      this.disposeWithMe(
        this._componentManager["register"](_0x53203d, _0x1392ee),
      );
    });
  }
};
X = L(
  [I(0, (0, t.Inject)(o.ComponentManager)), I(1, (0, t.Inject)(o.IconManager))],
  X,
);
let Z = class extends t.Disposable {
  constructor(_0x503616, _0x2aa8ac, _0x4f24f7, _0x595e0f, _0x390d3c) {
    (super(),
      (this._sheetSkeletonService = _0x503616),
      (this._sheetClipboardService = _0x2aa8ac),
      (this._sheetDrawingService = _0x4f24f7),
      (this._chartModelService = _0x595e0f),
      (this._sheetsChartService = _0x390d3c),
      N(this, "_copyInfo", undefined),
      this._initCopyPaste());
  }
  get _focusedDrawings() {
    return this._sheetDrawingService["getFocusDrawings"]();
  }
  _initCopyPaste() {
    this.disposeWithMe(
      this._sheetClipboardService["addClipboardHook"]({
        id: e.SHEETS_CHART_PLUGIN_NAME,
        onBeforeCopyFocusedObject: (_0x49333e, _0x256818, _0x4bf4ab) => {
          this._copyInfo = null;
          let _0x3f756c = this._focusedDrawings["filter"](
            (_0x1aebc9) =>
              _0x1aebc9.drawingType === t.DrawingTypeEnum["DRAWING_CHART"],
          );
          return _0x3f756c.length === 0
            ? false
            : ((this._copyInfo = {
                unitId: _0x49333e,
                subUnitId: _0x256818,
                copyType: _0x4bf4ab,
                drawings: _0x3f756c,
              }),
              true);
        },
        onBeforeCopy: (_0x3a4fc5, _0x16cd1b, _0x34c7e6, _0x58f68b) => {
          ((this._copyInfo = null),
            this._createCopyInfoByRange(
              _0x3a4fc5,
              _0x16cd1b,
              _0x34c7e6,
              _0x58f68b,
            ));
        },
        onPasteCells: (_0x8cc952, _0x5e37c9, _0x54734c, _0x5a08ba) => {
          if (!_0x5a08ba.copyId || !_0x8cc952 || !this._copyInfo)
            return { redos: [], undos: [] };
          let { pasteType: _0x413ed4 } = _0x5a08ba;
          return _0x413ed4 === a.PREDEFINED_HOOK_NAME["DEFAULT_PASTE"]
            ? this._generatePasteMutations(
                _0x5e37c9,
                this._copyInfo["copyType"] === a.COPY_TYPE["CUT"],
              )
            : { redos: [], undos: [] };
        },
      }),
    );
  }
  _createCopyInfoByRange(_0x172a8e, _0x5d4c32, _0x42732f, _0x326a9c) {
    let _0x459d2b = this._sheetSkeletonService["getSkeleton"](
      _0x172a8e,
      _0x5d4c32,
    );
    if (!_0x459d2b) return;
    let _0x1f24a7 = (0, u.attachRangeWithCoord)(_0x459d2b, _0x42732f);
    if (!_0x1f24a7) return;
    let {
        startX: _0x1a8615,
        endX: _0x2702a7,
        startY: _0x1cabf3,
        endY: _0x1755ca,
      } = _0x1f24a7,
      _0x2c3329 = this._sheetDrawingService["getDrawingData"](
        _0x172a8e,
        _0x5d4c32,
      ),
      _0x148533 = [];
    for (let [_0x36a3e4, _0x327bdc] of Object.entries(_0x2c3329)) {
      if (_0x327bdc.drawingType !== t.DrawingTypeEnum["DRAWING_CHART"])
        continue;
      let { transform: _0x24ef40 } = _0x327bdc;
      if (!_0x24ef40) continue;
      let {
        left: _0x1377ed = 0,
        top: _0x226764 = 0,
        width: _0x3515b4 = 0,
        height: _0x44203c = 0,
      } = _0x24ef40;
      _0x1a8615 <= _0x1377ed &&
        _0x2702a7 >= _0x1377ed + _0x3515b4 &&
        _0x1cabf3 <= _0x226764 &&
        _0x1755ca >= _0x226764 + _0x44203c &&
        _0x148533.push(_0x327bdc);
    }
    _0x148533.length > 0 &&
      (this._copyInfo = {
        unitId: _0x172a8e,
        subUnitId: _0x5d4c32,
        copyType: _0x326a9c,
        copyRange: _0x42732f,
        drawings: _0x148533,
      });
  }
  _generatePasteMutations(_0x29f6ea, _0x34190d) {
    let {
        unitId: _0x5a0daf,
        subUnitId: _0x359c44,
        range: _0x154963,
      } = _0x29f6ea,
      _0x53a60b = this._sheetSkeletonService["getSkeleton"](
        _0x5a0daf,
        _0x359c44,
      );
    if (!_0x53a60b) return { redos: [], undos: [] };
    let _0x30c08f = (0, u.discreteRangeToRange)(_0x154963),
      {
        unitId: _0x2d54e0,
        subUnitId: _0x47eb46,
        copyRange: _0x7b943e,
        drawings: _0x33d185,
      } = this._copyInfo,
      _0x367c4a = this._sheetSkeletonService["getSkeleton"](
        _0x2d54e0,
        _0x47eb46,
      );
    if (!_0x367c4a) return { redos: [], undos: [] };
    let _0x266f62 = [],
      _0x47a25a = [];
    for (let _0x54264e of _0x33d185) {
      let {
          drawingId: _0x4eef17,
          transform: _0x396f86,
          sheetTransform: _0x5dbd44,
        } = _0x54264e,
        _0x300348 = this._chartModelService["getChartModel"](_0x4eef17);
      if (!_0x300348 || !_0x396f86 || !_0x5dbd44) continue;
      let _0x389c1c = this._updateTransform(
        { transform: _0x396f86, sheetTransform: _0x5dbd44 },
        { skeleton: _0x367c4a, range: _0x7b943e },
        { skeleton: _0x53a60b, range: _0x30c08f },
      );
      if (_0x34190d) {
        let { redos: _0x1371df, undos: _0xa2fe63 } =
          this._generateCutPasteMutations(
            {
              fromUnitId: _0x2d54e0,
              fromSubUnitId: _0x47eb46,
              toUnitId: _0x5a0daf,
              toSubUnitId: _0x359c44,
              drawing: _0x54264e,
              newTransforms: _0x389c1c,
            },
            _0x300348,
          );
        (_0x266f62.push(..._0x1371df), _0x47a25a.push(..._0xa2fe63));
        continue;
      }
      let { redos: _0x4843e5, undos: _0x44273d } =
        this._generateCopyPasteMutations(
          {
            toUnitId: _0x5a0daf,
            toSubUnitId: _0x359c44,
            drawing: _0x54264e,
            newTransforms: _0x389c1c,
          },
          _0x300348,
        );
      (_0x266f62.push(..._0x4843e5), _0x47a25a.push(..._0x44273d));
    }
    return { redos: _0x266f62, undos: _0x47a25a };
  }
  _generateCutPasteMutations(_0x31bcec, _0x25bec9) {
    let {
        fromUnitId: _0xd6738f,
        fromSubUnitId: _0x37e508,
        toUnitId: _0x21ead9,
        toSubUnitId: _0x49c42d,
        drawing: _0x575ae1,
        newTransforms: _0x53323e,
      } = _0x31bcec,
      _0x48b106 = {
        ..._0x575ae1,
        unitId: _0x21ead9,
        subUnitId: _0x49c42d,
        transform: _0x53323e.transform,
        sheetTransform: _0x53323e.sheetTransform,
      };
    if (_0x21ead9 === _0xd6738f && _0x49c42d === _0x37e508) {
      let {
        redo: _0x52a005,
        undo: _0x516d11,
        objects: _0x2bac51,
      } = this._sheetDrawingService["getBatchUpdateOp"]([_0x48b106]);
      return {
        redos: [
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x21ead9,
              subUnitId: _0x49c42d,
              type: r.DrawingApplyType["UPDATE"],
              op: _0x52a005,
              objects: _0x2bac51,
            },
          },
        ],
        undos: [
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x21ead9,
              subUnitId: _0x49c42d,
              type: r.DrawingApplyType["UPDATE"],
              op: _0x516d11,
              objects: _0x2bac51,
            },
          },
        ],
      };
    } else {
      let _0x766e7f = this._sheetDrawingService["getBatchRemoveOp"]([
          _0x575ae1,
        ]),
        _0x5e72e6 = this._sheetDrawingService["getBatchAddOp"]([_0x48b106]),
        _0x5de547 = this._sheetsChartService["getChartSourceSpec"](
          _0x25bec9.id,
        );
      if (!_0x5de547) return { redos: [], undos: [] };
      let {
        chartType: _0x8811ed,
        context: _0x3a2bb8,
        style: _0x3ba238,
        dataAggregation: _0x2e8421,
      } = _0x25bec9.serialize();
      return {
        redos: [
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0xd6738f,
              subUnitId: _0x37e508,
              type: r.DrawingApplyType["REMOVE"],
              op: _0x766e7f.redo,
              objects: _0x766e7f.objects,
            },
          },
          {
            id: e.RemoveSheetsChartMutation["id"],
            params: {
              unitId: _0xd6738f,
              subUnitId: _0x37e508,
              chartId: _0x575ae1.drawingId,
            },
          },
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x21ead9,
              subUnitId: _0x49c42d,
              type: r.DrawingApplyType["INSERT"],
              op: _0x5e72e6.redo,
              objects: _0x5e72e6.objects,
            },
          },
          {
            id: e.InsertSheetsChartMutation["id"],
            params: {
              unitId: _0x21ead9,
              subUnitId: _0x49c42d,
              chartId: _0x575ae1.drawingId,
              chartType: _0x8811ed,
              ...(0, e.toInsertChartMutationSource)(_0x5de547),
              context: _0x3a2bb8,
              style: _0x3ba238,
              dataAggregation: _0x2e8421,
            },
          },
        ],
        undos: [
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0xd6738f,
              subUnitId: _0x37e508,
              type: r.DrawingApplyType["INSERT"],
              op: _0x766e7f.undo,
              objects: _0x766e7f.objects,
            },
          },
          {
            id: e.InsertSheetsChartMutation["id"],
            params: {
              unitId: _0xd6738f,
              subUnitId: _0x37e508,
              chartId: _0x575ae1.drawingId,
              chartType: _0x8811ed,
              ...(0, e.toInsertChartMutationSource)(_0x5de547),
              context: _0x3a2bb8,
              style: _0x3ba238,
              dataAggregation: _0x2e8421,
            },
          },
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x21ead9,
              subUnitId: _0x49c42d,
              type: r.DrawingApplyType["REMOVE"],
              op: _0x5e72e6.undo,
              objects: _0x5e72e6.objects,
            },
          },
          {
            id: e.RemoveSheetsChartMutation["id"],
            params: {
              unitId: _0x21ead9,
              subUnitId: _0x49c42d,
              chartId: _0x575ae1.drawingId,
            },
          },
        ],
      };
    }
  }
  _generateCopyPasteMutations(_0x154f65, _0x377885) {
    let {
        toUnitId: _0x340b63,
        toSubUnitId: _0x4d6350,
        drawing: _0x3ba981,
        newTransforms: _0x2a4b2a,
      } = _0x154f65,
      _0x385fad = (0, t.generateRandomId)(),
      _0x446c26 = {
        ..._0x3ba981,
        unitId: _0x340b63,
        subUnitId: _0x4d6350,
        drawingId: _0x385fad,
        transform: _0x2a4b2a.transform,
        sheetTransform: _0x2a4b2a.sheetTransform,
      },
      {
        redo: _0x47e312,
        undo: _0x11acca,
        objects: _0x51e676,
      } = this._sheetDrawingService["getBatchAddOp"]([_0x446c26]),
      _0x4c0e2f = this._sheetsChartService["getChartSourceSpec"](_0x377885.id);
    if (!_0x4c0e2f) return { redos: [], undos: [] };
    let {
      chartType: _0x55dfed,
      context: _0x38c746,
      style: _0x41e063,
      dataAggregation: _0x555033,
    } = _0x377885.serialize();
    return {
      redos: [
        {
          id: r.SetDrawingApplyMutation["id"],
          params: {
            unitId: _0x340b63,
            subUnitId: _0x4d6350,
            type: r.DrawingApplyType["INSERT"],
            op: _0x47e312,
            objects: _0x51e676,
          },
        },
        {
          id: e.InsertSheetsChartMutation["id"],
          params: {
            unitId: _0x340b63,
            subUnitId: _0x4d6350,
            chartId: _0x385fad,
            chartType: _0x55dfed,
            ...(0, e.toInsertChartMutationSource)(_0x4c0e2f),
            context: _0x38c746,
            style: _0x41e063,
            dataAggregation: _0x555033,
          },
        },
      ],
      undos: [
        {
          id: r.SetDrawingApplyMutation["id"],
          params: {
            unitId: _0x340b63,
            subUnitId: _0x4d6350,
            type: r.DrawingApplyType["REMOVE"],
            op: _0x11acca,
            objects: _0x51e676,
          },
        },
        {
          id: e.RemoveSheetsChartMutation["id"],
          params: {
            unitId: _0x340b63,
            subUnitId: _0x4d6350,
            chartId: _0x385fad,
          },
        },
      ],
    };
  }
  _updateTransform(_0x44388f, _0x50c828, _0x264a9e) {
    let { range: _0x42839a, skeleton: _0x48384c } = _0x50c828,
      { range: _0x145619, skeleton: _0x952489 } = _0x264a9e,
      { transform: _0x33531c, sheetTransform: _0x13811e } = _0x44388f,
      _0x1299e8 = { ..._0x33531c };
    if (_0x42839a) {
      let _0x5d9c3f = (0, u.attachRangeWithCoord)(_0x48384c, _0x42839a),
        _0x2e2a26 = (0, u.attachRangeWithCoord)(_0x952489, _0x145619);
      if (_0x5d9c3f && _0x2e2a26) {
        let _0x45d9a8 = _0x2e2a26.startX - _0x5d9c3f.startX,
          _0x294870 = _0x2e2a26.startY - _0x5d9c3f.startY;
        ((_0x1299e8.left = (_0x1299e8.left ?? 0) + _0x45d9a8),
          (_0x1299e8.top = (_0x1299e8.top ?? 0) + _0x294870));
      }
    } else {
      let _0x9c23bf = (0, u.attachRangeWithCoord)(_0x952489, _0x145619);
      ((_0x1299e8.left = _0x9c23bf == null ? undefined : _0x9c23bf.startX),
        (_0x1299e8.top = _0x9c23bf == null ? undefined : _0x9c23bf.startY));
    }
    return {
      transform: _0x1299e8,
      sheetTransform:
        (0, r.transformToDrawingPosition)(_0x1299e8, _0x952489) ?? _0x13811e,
    };
  }
};
Z = L(
  [
    I(0, (0, t.Inject)(u.SheetSkeletonService)),
    I(1, (0, t.Inject)(a.ISheetClipboardService)),
    I(2, (0, t.Inject)(r.ISheetDrawingService)),
    I(3, (0, t.Inject)(e.ChartModelService)),
    I(4, (0, t.Inject)(e.SheetsChartService)),
  ],
  Z,
);
let Q = class extends t.Disposable {
  constructor(_0x1a8f98, _0x29668a, _0x526a9d, _0xd589cf) {
    (super(),
      (this._commandService = _0x1a8f98),
      (this._localeService = _0x29668a),
      (this._sheetPermissionCheckController = _0x526a9d),
      (this._sheetsChartService = _0xd589cf),
      this._initPermission());
  }
  _initPermission() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x2d6f2b) => {
        let _0x15b0b0, _0x2734a0;
        if (_0x2d6f2b.id === e.InsertChartCommand["id"]) {
          let _0x42c30f = _0x2d6f2b.params;
          ((_0x15b0b0 = _0x42c30f.unitId), (_0x2734a0 = _0x42c30f.subUnitId));
        } else {
          if (
            _0x2d6f2b.id === e.ChartUpdateConfigCommand["id"] ||
            _0x2d6f2b.id === e.ChartUpdateSourceCommand["id"]
          ) {
            let _0x2b6fc7 = _0x2d6f2b.params;
            ((_0x15b0b0 = _0x2b6fc7.unitId),
              (_0x2734a0 = this._sheetsChartService["getSubUnitId"](
                _0x2b6fc7.unitId,
                _0x2b6fc7.chartModelId,
              )));
          }
        }
        !_0x15b0b0 ||
          !_0x2734a0 ||
          this._sheetPermissionCheckController["permissionCheckWithoutRange"](
            {
              workbookTypes: [u.WorkbookEditablePermission],
              worksheetTypes: [u.WorksheetEditPermission],
            },
            _0x15b0b0,
            _0x2734a0,
          ) ||
          this._sheetPermissionCheckController["blockExecuteWithoutPermission"](
            this._localeService["t"]("sheets-chart-ui.permission.editErr"),
          );
      }),
    );
  }
};
Q = L(
  [
    I(0, (0, t.Inject)(t.ICommandService)),
    I(1, (0, t.Inject)(t.LocaleService)),
    I(2, (0, t.Inject)(u.SheetPermissionCheckController)),
    I(3, (0, t.Inject)(e.SheetsChartService)),
  ],
  Q,
);
let dt = class extends t.Disposable {
  constructor(_0x5e165c, _0xc18c15) {
    (super(),
      (this._renderService = _0xc18c15),
      this.disposeWithMe(_0x5e165c.register(this)));
  }
  supports(_0x38e2f9) {
    return "unitId" in _0x38e2f9 && "subUnitId" in _0x38e2f9;
  }
  exportImage(_0x3c441c, _0x2d6c5c) {
    return this._renderService["exportImage"](_0x3c441c.getId(), _0x2d6c5c);
  }
};
dt = L(
  [I(0, (0, t.Inject)(c.ChartImageExportService)), I(1, (0, t.Inject)(z))],
  dt,
);
let $ = class extends t.Plugin {
  constructor(_0x53ffdc = x, _0x523174, _0x46e1d2, _0x490862) {
    (super(),
      (this._config = _0x53ffdc),
      (this._injector = _0x523174),
      (this._configService = _0x46e1d2),
      (this._commandService = _0x490862),
      N(this, "_resolvedConfig", undefined));
    let { ..._0x280bef } = (0, t.merge)({}, x, this._config);
    ((this._resolvedConfig = _0x280bef),
      this._configService["setConfig"](b, _0x280bef),
      this._initCommands());
  }
  onStarting() {
    (this._injector["add"]([X]), this._injector["get"](X));
    let _0x4c913b = this._injector,
      _0x4d7a12 = [
        [B, { useClass: V }],
        [R, { useClass: ke }],
        [Se],
        [z],
        [dt],
        [U],
        [q],
        [J],
        [Z],
        [Y],
        [Q],
      ],
      _0x5bd1b9 = [[U], [J], [q], [dt], [B], [Z], [Y], [Q]];
    (this._resolvedConfig["enableChartElementFloatMenu"] &&
      (_0x4d7a12.push([K]), _0x5bd1b9.push([K])),
      _0x4d7a12.forEach((_0x1d3634) => _0x4c913b.add(_0x1d3634)),
      (0, t.touchDependencies)(this._injector, _0x5bd1b9));
  }
  onRendered() {
    var _0x3bacf1;
    (_0x3bacf1 = this._injector["get"](U)) == null || _0x3bacf1.initPanel();
  }
  _initCommands() {
    [A, E, D, O, k, C, S].forEach((_0x10c711) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x10c711)),
    );
  }
};
(N($, "type", t.UniverInstanceType["UNIVER_SHEET"]),
  N($, "pluginName", "UniverSheetsChartUIPlugin"),
  N($, "packageName", qe),
  N($, "version", Je),
  ($ = L(
    [
      (0, t.DependentOn)(
        v.UniverLicensePlugin,
        n.UniverDrawingPlugin,
        p.UniverRenderEnginePlugin,
        u.UniverSheetsPlugin,
        r.UniverSheetsDrawingPlugin,
        c.UniverChartUIPlugin,
        e.UniverSheetsChartPlugin,
        i.UniverSheetsDrawingUIPlugin,
        a.UniverSheetsUIPlugin,
      ),
      I(1, (0, t.Inject)(t.Injector)),
      I(2, t.IConfigService),
      I(3, t.ICommandService),
    ],
    $,
  )),
  (exports.ISheetsChartUIService = B),
  (exports.SHEETS_CHART_UI_PLUGIN_CONFIG_KEY = b),
  Object.defineProperty(exports, "SheetsChartUIController", {
    enumerable: true,
    get: function () {
      return U;
    },
  }),
  (exports.SheetsChartUIMenuSchema = ue),
  Object.defineProperty(exports, "SheetsChartUIService", {
    enumerable: true,
    get: function () {
      return V;
    },
  }),
  Object.defineProperty(exports, "UniverSheetsChartUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
