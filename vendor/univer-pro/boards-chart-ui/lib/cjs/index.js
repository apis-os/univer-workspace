Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/boards-ui"),
  n = require("@univerjs/core"),
  r = require("rxjs"),
  i = require("@univerjs-pro/boards-chart"),
  a = require("@univerjs-pro/chart-ui"),
  o = require("@univerjs-pro/shape-editor-ui"),
  s = require("@univerjs/design"),
  c = require("@univerjs/icons"),
  l = require("@univerjs/ui"),
  u = require("react"),
  d = require("react/jsx-runtime"),
  f = require("@univerjs-pro/engine-chart"),
  p = require("@univerjs-pro/license"),
  m = require("@univerjs/engine-render");
const h = "boards-chart-ui.config",
  g = {};
function _(_0x416a74) {
  "@babel/helpers - typeof";
  return (
    (_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4263bd) {
            return typeof _0x4263bd;
          }
        : function (_0xa554fd) {
            return _0xa554fd &&
              typeof Symbol == "function" &&
              _0xa554fd.constructor === Symbol &&
              _0xa554fd !== Symbol.prototype
              ? "symbol"
              : typeof _0xa554fd;
          }),
    _(_0x416a74)
  );
}
function v(_0x9701e2, _0x1140f0) {
  if (_(_0x9701e2) != "object" || !_0x9701e2) return _0x9701e2;
  var _0x8672ad = _0x9701e2[Symbol.toPrimitive];
  if (_0x8672ad !== undefined) {
    var _0x5eb28e = _0x8672ad.call(_0x9701e2, _0x1140f0 || "default");
    if (_(_0x5eb28e) != "object") return _0x5eb28e;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x1140f0 === "string" ? String : Number)(_0x9701e2);
}
function y(_0x48e821) {
  var _0x29bb03 = v(_0x48e821, "string");
  return _(_0x29bb03) == "symbol" ? _0x29bb03 : _0x29bb03 + "";
}
function b(_0x33d4de, _0x35c0d6, _0x2c0610) {
  return (
    (_0x35c0d6 = y(_0x35c0d6)) in _0x33d4de
      ? Object.defineProperty(_0x33d4de, _0x35c0d6, {
          value: _0x2c0610,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x33d4de[_0x35c0d6] = _0x2c0610),
    _0x33d4de
  );
}
function x(_0x44d573, _0x36cc87) {
  return function (_0x570b21, _0x5ba57c) {
    _0x36cc87(_0x570b21, _0x5ba57c, _0x44d573);
  };
}
function S(_0x5bbb52, _0xd529, _0x2dc063, _0x287780) {
  var _0x505a97 = arguments.length,
    _0x5bcd72 =
      _0x505a97 < 3
        ? _0xd529
        : _0x287780 === null
          ? (_0x287780 = Object.getOwnPropertyDescriptor(_0xd529, _0x2dc063))
          : _0x287780,
    _0xd1aaa8;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5bcd72 = Reflect.decorate(_0x5bbb52, _0xd529, _0x2dc063, _0x287780);
  else {
    for (var _0x335c9b = _0x5bbb52.length - 1; _0x335c9b >= 0; _0x335c9b--)
      (_0xd1aaa8 = _0x5bbb52[_0x335c9b]) &&
        (_0x5bcd72 =
          (_0x505a97 < 3
            ? _0xd1aaa8(_0x5bcd72)
            : _0x505a97 > 3
              ? _0xd1aaa8(_0xd529, _0x2dc063, _0x5bcd72)
              : _0xd1aaa8(_0xd529, _0x2dc063)) || _0x5bcd72);
  }
  return (
    _0x505a97 > 3 &&
      _0x5bcd72 &&
      Object.defineProperty(_0xd529, _0x2dc063, _0x5bcd72),
    _0x5bcd72
  );
}
function C(_0x247bc4, _0x4cc1ee) {
  return (
    (_0x247bc4 == null ? undefined : _0x247bc4.tab) ===
      (_0x4cc1ee == null ? undefined : _0x4cc1ee.tab) &&
    (_0x247bc4 == null ? undefined : _0x247bc4.section) ===
      (_0x4cc1ee == null ? undefined : _0x4cc1ee.section) &&
    (_0x247bc4 == null ? undefined : _0x247bc4.titleKey) ===
      (_0x4cc1ee == null ? undefined : _0x4cc1ee.titleKey) &&
    (_0x247bc4 == null ? undefined : _0x247bc4.axisId) ===
      (_0x4cc1ee == null ? undefined : _0x4cc1ee.axisId) &&
    (_0x247bc4 == null ? undefined : _0x247bc4.seriesId) ===
      (_0x4cc1ee == null ? undefined : _0x4cc1ee.seriesId)
  );
}
function w(_0x26bd12, _0x56f2b4) {
  return (
    (_0x26bd12 == null ? undefined : _0x26bd12.unitId) === _0x56f2b4.unitId &&
    _0x26bd12.subUnitId === _0x56f2b4.subUnitId &&
    _0x26bd12.elementId === _0x56f2b4.elementId &&
    _0x26bd12.chartId === _0x56f2b4.chartId &&
    _0x26bd12.source === _0x56f2b4.source &&
    C(_0x26bd12.route, _0x56f2b4.route)
  );
}
let T = class extends n.Disposable {
  constructor(_0x52a32f, _0x2276d7) {
    (super(),
      (this._elementStateService = _0x52a32f),
      (this._boardElementService = _0x2276d7),
      b(this, "_activeSession$", new r.BehaviorSubject(null)),
      b(this, "activeSession$", this._activeSession$["asObservable"]()),
      this.disposeWithMe(
        this._elementStateService["state$"].subscribe((_0x281cf0) =>
          this._syncSelectionState(_0x281cf0),
        ),
      ),
      this.disposeWithMe(
        this._boardElementService["elementRemove$"].subscribe((_0x8f036a) => {
          let _0x2caccc = this.getActiveSession();
          _0x2caccc &&
            _0x8f036a.some(
              (_0x30b850) =>
                _0x30b850.unitId === _0x2caccc.unitId &&
                _0x30b850.subUnitId === _0x2caccc.subUnitId &&
                _0x30b850.elementId === _0x2caccc.elementId,
            ) &&
            this.close("elementRemoved");
        }),
      ));
  }
  dispose() {
    (this.close("dispose"),
      this._activeSession$["complete"](),
      super.dispose());
  }
  getActiveSession() {
    return this._activeSession$["getValue"]();
  }
  open(_0x913fb5) {
    let _0x3de29a = { ..._0x913fb5 };
    w(this.getActiveSession(), _0x3de29a) ||
      this._activeSession$["next"](_0x3de29a);
  }
  close(_0x14f312) {
    this.getActiveSession() && this._activeSession$["next"](null);
  }
  _syncSelectionState(_0x29a581) {
    let _0x39b394 = this.getActiveSession();
    if (!_0x39b394) return;
    if (_0x29a581.isTransforming) {
      this.close("transformStart");
      return;
    }
    if (!_0x29a581.context) {
      this.close("selectionChange");
      return;
    }
    if (_0x29a581.context["unitId"] !== _0x39b394.unitId) {
      this.close("selectionChange");
      return;
    }
    if (_0x29a581.context["subUnitId"] !== _0x39b394.subUnitId) {
      this.close("pageChange");
      return;
    }
    if (
      _0x29a581.selectedIds["length"] !== 1 ||
      _0x29a581.focusedId !== _0x39b394.elementId
    ) {
      this.close("selectionChange");
      return;
    }
    let _0x2f5cc6 = this._boardElementService["getElementById"](
      _0x39b394.unitId,
      _0x39b394.subUnitId,
      _0x39b394.elementId,
    );
    (!_0x2f5cc6 ||
      _0x2f5cc6.element["type"] !== e.BoardElementType["Chart"] ||
      _0x2f5cc6.element["chartId"] !== _0x39b394.chartId) &&
      this.close("selectionChange");
  }
};
T = S([x(0, t.IBoardElementStateService), x(1, e.IBoardElementService)], T);
const E = (0, n.createIdentifier)("board-chart.ui.service");
let D = class extends a.ChartUIService {
  constructor(_0xab2534, _0x4ca85f, _0xefebc7, _0x2a66dc) {
    (super(_0x2a66dc),
      (this._modelService = _0xab2534),
      (this._resourceService = _0x4ca85f),
      (this._commandService = _0xefebc7));
  }
  get activeRuntimeModel() {
    return this._modelService["activeRuntimeModel"];
  }
  get activeRuntimeModel$() {
    return this._modelService["activeRuntimeModel$"];
  }
  get resourceService() {
    return this._resourceService;
  }
  executeChartUpdateConfig(_0x1f3e2c) {
    let _0x22f360 = this._modelService["activeRuntimeModel"],
      _0xd74f03 =
        _0x1f3e2c.unitId ?? (_0x22f360 == null ? undefined : _0x22f360.unitId),
      _0x33600a =
        _0x1f3e2c.chartId ??
        (_0x22f360 == null ? undefined : _0x22f360.chartId);
    !_0xd74f03 ||
      !_0x33600a ||
      this._commandService["executeCommand"](
        i.UpdateBoardChartConfigCommand["id"],
        { ..._0x1f3e2c, unitId: _0xd74f03, chartId: _0x33600a },
      );
  }
};
D = S(
  [
    x(0, (0, n.Inject)(i.BoardChartModelService)),
    x(1, (0, n.Inject)(i.BoardChartResourceService)),
    x(2, n.ICommandService),
    x(3, (0, n.Inject)(a.ChartViewStateRegistry)),
  ],
  D,
);
const O = "board.chart.floating-toolbar";
function ee(_0x3e2421) {
  _0x3e2421.stopPropagation();
}
function te(_0x1e0d4a) {
  let _0x20d7ec = (0, l.useDependency)(n.ICommandService),
    _0x2979fe = (0, l.useDependency)(n.LocaleService),
    _0xaea994 = (0, l.useDependency)(i.BoardChartModelService),
    _0x11dbfa = (0, l.useDependency)(T),
    _0x1c803a = (0, a.useChartTypeFieldState)(_0x1e0d4a.typeOptions),
    { extraProps: _0xdafb32 } = _0x1e0d4a;
  return (0, d.jsxs)("div", {
    className: (0, s.clsx)(
      "univer-box-border\x20univer-flex\x20univer-h-12\x20univer-items-center\x20univer-gap-1\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-px-2\x20univer-py-1.5\x20univer-text-gray-700\x20univer-shadow-lg\x20dark:!univer-bg-gray-900\x20dark:!univer-text-gray-100",
      s.borderClassName,
    ),
    "data-u-comp": "board-chart-floating-toolbar",
    role: "toolbar",
    onMouseDown: ee,
    onPointerDown: ee,
    children: [
      (0, d.jsx)(s.Select, {
        "aria-label": _0x2979fe.t("boards-chart-ui.common.chartType"),
        className: "!univer-w-36 !univer-min-w-0",
        value: _0x1c803a.value,
        options: _0x1e0d4a.typeOptions,
        onChange: (_0x1c8c71) => {
          (_0xaea994.setActiveChartById(_0xdafb32.unitId, _0xdafb32.chartId),
            _0x1c803a.setValue(_0x1c8c71));
        },
      }),
      (0, d.jsx)(s.Separator, { orientation: "vertical" }),
      (0, d.jsx)(s.Button, {
        size: "small",
        variant: "ghost",
        type: "button",
        "aria-label": _0x2979fe.t("boards-chart-ui.common.editChart"),
        title: _0x2979fe.t("boards-chart-ui.common.editChart"),
        "data-toolbar-item": "edit-chart",
        onClick: () => {
          _0x11dbfa.open({
            chartId: _0xdafb32.chartId,
            elementId: _0xdafb32.elementId,
            source: "quickToolbar",
            subUnitId: _0xdafb32.subUnitId,
            unitId: _0xdafb32.unitId,
          });
        },
        children: (0, d.jsx)(c.PenIcon, {}),
      }),
      (0, d.jsx)(o.ShapeFloatingToolbarMenuActions, {
        position: l.FloatingObjectToolbarPosition["BOARD"],
      }),
      (0, d.jsx)(s.Button, {
        size: "small",
        variant: "ghost",
        type: "button",
        "aria-label": _0x2979fe.t("boards-chart-ui.common.deleteChart"),
        title: _0x2979fe.t("boards-chart-ui.common.deleteChart"),
        "data-toolbar-item": "delete-chart",
        onClick: () =>
          _0x20d7ec.executeCommand(t.BoardDeleteSelectionOperation["id"]),
        children: (0, d.jsx)(c.DeleteIcon, {}),
      }),
    ],
  });
}
function ne(_0x4a6c44) {
  let _0x329386 = (0, l.useDependency)(n.Injector),
    _0x3ce4cd = (0, l.useDependency)(n.IUniverInstanceService),
    _0x10ae06 = (0, l.useDependency)(n.LocaleService),
    _0x566a0e = (0, l.useDependency)(i.BoardChartModelService),
    _0x4d4177 = (0, l.useDependency)(E),
    _0x75b2f5 = (0, u.useMemo)(
      () => _0x566a0e.ensureChartModel(_0x4a6c44.unitId, _0x4a6c44.chartId),
      [_0x4a6c44.chartId, _0x4a6c44.unitId, _0x566a0e],
    ),
    _0x30aad9 = (0, u.useMemo)(() => {
      let _0x5eca01 = _0x3ce4cd.getUnit(
        _0x4a6c44.unitId,
        n.UniverInstanceType["UNIVER_BOARD"],
      );
      return !_0x75b2f5 || !_0x5eca01
        ? null
        : new a["ChartHostAdapter"](
            _0x75b2f5.model,
            new i["BoardChartConfigAdapter"]({
              unitId: _0x4a6c44.unitId,
              pageId: _0x4a6c44.subUnitId,
              chartId: _0x4a6c44.chartId,
              elementId: _0x4a6c44.elementId,
              boardModel: _0x5eca01,
              injector: _0x329386,
            }),
          );
    }, [_0x4a6c44, _0x329386, _0x75b2f5, _0x3ce4cd]),
    _0x3ec9b4 = (0, u.useMemo)(
      () =>
        (0, a.buildChartTypeSelectOptions)(
          a.CHART_TYPE_CATALOG["map"]((_0x3cac0b) => ({
            ..._0x3cac0b,
            label: _0x10ae06.t(
              "boards-chart-ui.chartTypes." + _0x3cac0b.labelId,
            ),
          })),
        ),
      [_0x10ae06],
    );
  return !_0x75b2f5 || !_0x30aad9
    ? null
    : (0, d.jsx)(a.ChartEditorProvider, {
        chartUIService: _0x4d4177,
        hostAdapter: _0x30aad9,
        children: (0, d.jsx)(te, {
          extraProps: _0x4a6c44,
          typeOptions: _0x3ec9b4,
        }),
      });
}
function re(_0x186059) {
  let _0xa9525e = _0x186059.popup["extraProps"];
  return _0xa9525e ? (0, d.jsx)(ne, { ..._0xa9525e }) : null;
}
let k = class extends n.RxDisposable {
  constructor(
    _0x424c36,
    _0xe830c3,
    _0x4e7850,
    _0x3398de,
    _0x464e4f,
    _0x211823,
    _0x11b8ae,
  ) {
    (super(),
      (this._renderContext = _0x424c36),
      (this._boardCanvasPopManagerService = _0xe830c3),
      (this._boardElementService = _0x4e7850),
      (this._elementStateService = _0x3398de),
      (this._uiStateService = _0x464e4f),
      (this._editSessionService = _0x211823),
      (this._interactionSurfaceService = _0x11b8ae),
      b(this, "_popupDisposable", null),
      b(this, "_popupSelectionKey", null),
      this._init());
  }
  dispose() {
    (this._clearPopup(), super.dispose());
  }
  _init() {
    let _0x585539 = this._renderContext["scene"].getTransformerByCreate();
    (this.disposeWithMe(
      (0, n.toDisposable)(
        _0x585539.createControl$["pipe"](
          (0, r.takeUntil)(this.dispose$),
        ).subscribe(() => {
          this._showPopupForSelection();
        }),
      ),
    ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          _0x585539.clearControl$["pipe"](
            (0, r.takeUntil)(this.dispose$),
          ).subscribe(() => {
            this._clearPopupIfSelectionChanged();
          }),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          _0x585539.changeStart$["pipe"](
            (0, r.takeUntil)(this.dispose$),
          ).subscribe(() => {
            this._clearPopup();
          }),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          _0x585539.changeEnd$["pipe"](
            (0, r.takeUntil)(this.dispose$),
          ).subscribe(() => {
            setTimeout(() => this._showPopupForSelection(), 0);
          }),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._elementStateService["state$"]
            .pipe((0, r.takeUntil)(this.dispose$))
            .subscribe(() => {
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._uiStateService["state$"]
            .pipe((0, r.takeUntil)(this.dispose$))
            .subscribe(() => {
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._editSessionService["activeSession$"]
            .pipe((0, r.takeUntil)(this.dispose$))
            .subscribe((_0x497422) => {
              if (_0x497422) {
                this._clearPopup();
                return;
              }
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._interactionSurfaceService["interactionSurfaceActive$"]
            .pipe((0, r.takeUntil)(this.dispose$))
            .subscribe((_0x3e5ef6) => {
              if (_0x3e5ef6) {
                this._clearPopup();
                return;
              }
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ));
  }
  _clearPopup() {
    var _0x482d95;
    ((_0x482d95 = this._popupDisposable) == null || _0x482d95.dispose(),
      (this._popupDisposable = null),
      (this._popupSelectionKey = null));
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let _0x2873be = this._elementStateService["getSnapshot"]();
    return !_0x2873be.context || _0x2873be.selectedIds["length"] !== 1
      ? false
      : this._popupSelectionKey ===
          this._buildPopupSelectionKey(
            _0x2873be.context["unitId"],
            _0x2873be.context["subUnitId"],
            _0x2873be.selectedIds[0],
          );
  }
  _buildPopupSelectionKey(_0x5b2651, _0x464e0d, _0x5cffb3) {
    return _0x5b2651 + ":" + _0x464e0d + ":" + _0x5cffb3;
  }
  _showPopupForSelection() {
    if (
      this._interactionSurfaceService["isInteractionSurfaceActive"] ||
      this._editSessionService["getActiveSession"]()
    ) {
      this._clearPopup();
      return;
    }
    let _0x4bae68 = this._elementStateService["getSnapshot"](),
      _0x37180b = this._uiStateService["getState"]();
    if (
      _0x4bae68.isTransforming ||
      _0x37180b.pendingInsert ||
      (_0x37180b.activeTool !== null &&
        _0x37180b.activeTool !== e.BoardToolType["Select"]) ||
      !_0x4bae68.context ||
      _0x4bae68.context["unitId"] !== this._renderContext["unitId"] ||
      _0x4bae68.selectedIds["length"] !== 1 ||
      _0x4bae68.focusedId == null
    ) {
      this._clearPopup();
      return;
    }
    let _0x570e6a = this._boardElementService["getElementById"](
      _0x4bae68.context["unitId"],
      _0x4bae68.context["subUnitId"],
      _0x4bae68.focusedId,
    );
    if (
      !_0x570e6a ||
      _0x570e6a.element["type"] !== e.BoardElementType["Chart"]
    ) {
      this._clearPopup();
      return;
    }
    let _0x1fb93c = this._resolveElementObject(_0x570e6a);
    if (!_0x1fb93c) {
      this._clearPopup();
      return;
    }
    let _0x2e1c07 = this._buildPopupSelectionKey(
      _0x570e6a.unitId,
      _0x570e6a.subUnitId,
      _0x570e6a.elementId,
    );
    (this._popupDisposable && this._popupSelectionKey === _0x2e1c07) ||
      (this._clearPopup(),
      (this._popupDisposable = this.disposeWithMe(
        this._boardCanvasPopManagerService["attachPopupToObject"](
          _0x570e6a.unitId,
          _0x570e6a.subUnitId,
          _0x1fb93c,
          {
            componentKey: O,
            direction: "top-center",
            offset: [0, 36],
            anchorBoundResolver: t.resolveRotatedBoardObjectAnchorBound,
            extraProps: {
              unitId: _0x570e6a.unitId,
              subUnitId: _0x570e6a.subUnitId,
              elementId: _0x570e6a.elementId,
              chartId: _0x570e6a.element["chartId"],
            },
          },
        ),
      )),
      (this._popupSelectionKey = _0x2e1c07));
  }
  _resolveElementObject(_0x1973b5) {
    var _0x582f85;
    let _0x4e2df6 = (0, t.getBoardElementRenderObjectKey)(
        _0x1973b5.unitId,
        _0x1973b5.elementId,
      ),
      _0xb2ea39 = this._renderContext["scene"];
    return (
      ((_0x582f85 = _0xb2ea39.getObjectIncludeInGroup) == null
        ? undefined
        : _0x582f85.call(_0xb2ea39, _0x4e2df6)) ??
      _0xb2ea39.getObject(_0x4e2df6) ??
      null
    );
  }
};
k = S(
  [
    x(1, (0, n.Inject)(t.BoardCanvasPopManagerService)),
    x(2, e.IBoardElementService),
    x(3, t.IBoardElementStateService),
    x(4, t.IBoardUIStateService),
    x(5, (0, n.Inject)(T)),
    x(6, (0, n.Inject)(t.BoardInteractionSurfaceService)),
  ],
  k,
);
let A = class extends n.RxDisposable {
  constructor(
    _0x6bfce5,
    _0xec5988,
    _0x5e1f3d,
    _0x48b3ad,
    _0x476647,
    _0x519a29,
  ) {
    (super(),
      (this._renderContext = _0x6bfce5),
      (this._instanceService = _0xec5988),
      (this._boardElementService = _0x5e1f3d),
      (this._elementStateService = _0x48b3ad),
      (this._uiStateService = _0x476647),
      (this._editSessionService = _0x519a29),
      b(this, "_attachScheduled", false),
      b(this, "_objectDblclickDisposables", null),
      this._init());
  }
  _init() {
    let { unitId: _0x301b33 } = this._renderContext,
      _0x1d2ee1 = this._instanceService["getUnit"](
        _0x301b33,
        n.UniverInstanceType["UNIVER_BOARD"],
      );
    (this.disposeWithMe(
      (0, n.toDisposable)(() => {
        var _0x3ba765;
        return (_0x3ba765 = this._objectDblclickDisposables) == null
          ? undefined
          : _0x3ba765.dispose();
      }),
    ),
      _0x1d2ee1 &&
        (this._scheduleAttachObjectDoubleClicks(_0x1d2ee1),
        this.disposeWithMe(
          this._boardElementService["elementAdd$"].subscribe((_0x1c307b) => {
            _0x1c307b.some((_0x3fa2a2) => _0x3fa2a2.unitId === _0x301b33) &&
              this._scheduleAttachObjectDoubleClicks(_0x1d2ee1);
          }),
        ),
        this.disposeWithMe(
          this._boardElementService["elementUpdate$"].subscribe((_0x32800b) => {
            _0x32800b.some((_0x3825d3) => _0x3825d3.unitId === _0x301b33) &&
              this._scheduleAttachObjectDoubleClicks(_0x1d2ee1);
          }),
        ),
        this.disposeWithMe(
          this._boardElementService["elementRemove$"].subscribe((_0x4f5109) => {
            _0x4f5109.some((_0x5f18c3) => _0x5f18c3.unitId === _0x301b33) &&
              this._scheduleAttachObjectDoubleClicks(_0x1d2ee1);
          }),
        ),
        this.disposeWithMe(
          this._elementStateService["state$"].subscribe((_0x426464) => {
            var _0x21f4b0;
            ((_0x21f4b0 = _0x426464.context) == null
              ? undefined
              : _0x21f4b0.unitId) === _0x301b33 &&
              this._scheduleAttachObjectDoubleClicks(_0x1d2ee1);
          }),
        )));
  }
  _scheduleAttachObjectDoubleClicks(_0x23b017) {
    this._attachScheduled ||
      ((this._attachScheduled = true),
      Promise.resolve().then(() => this._attachObjectDoubleClicks(_0x23b017)));
  }
  _attachObjectDoubleClicks(_0x32e42d) {
    var _0x5bbb84;
    this._attachScheduled = false;
    let { scene: _0x463f39, unitId: _0x4df55f } = this._renderContext,
      _0x4ef879 = _0x32e42d.getActivePageId(),
      _0xf8a6fe = this._boardElementService["getElementOrder"](
        _0x4df55f,
        _0x4ef879,
      ),
      _0x413c2b = new n["DisposableCollection"]();
    ((_0x5bbb84 = this._objectDblclickDisposables) == null ||
      _0x5bbb84.dispose(),
      (this._objectDblclickDisposables = _0x413c2b),
      _0xf8a6fe.forEach((_0x328e35) => {
        var _0x1cf0d6;
        let _0x31b0b5 = this._boardElementService["getElementById"](
          _0x4df55f,
          _0x4ef879,
          _0x328e35,
        );
        if (
          !_0x31b0b5 ||
          _0x31b0b5.element["type"] !== e.BoardElementType["Chart"]
        )
          return;
        let _0x4e269f = (0, t.getBoardElementRenderObjectKey)(
            _0x4df55f,
            _0x328e35,
          ),
          _0x417866 =
            ((_0x1cf0d6 = _0x463f39.getObjectIncludeInGroup) == null
              ? undefined
              : _0x1cf0d6.call(_0x463f39, _0x4e269f)) ??
            _0x463f39.getObject(_0x4e269f);
        _0x417866 &&
          _0x413c2b.add(
            (0, n.toDisposable)(
              _0x417866.onDblclick$["subscribeEvent"](
                (_0x57e494, _0x2827ad) => {
                  this._openEditSession(_0x31b0b5, _0x57e494, _0x2827ad);
                },
              ),
            ),
          );
      }));
  }
  _openEditSession(_0x4ccfcc, _0x18583d, _0x30c4f0) {
    var _0x5a3052;
    if (
      this._uiStateService["getState"]().interactionMode === "viewing" ||
      this._uiStateService["getState"]().pendingInsert ||
      this._elementStateService["getSnapshot"]().isTransforming ||
      _0x4ccfcc.element["type"] !== e.BoardElementType["Chart"]
    )
      return;
    let _0x23bf43 = {
      unitId: _0x4ccfcc.unitId,
      subUnitId: _0x4ccfcc.subUnitId,
    };
    (this._elementStateService["selectElements"](
      _0x23bf43,
      [_0x4ccfcc.elementId],
      _0x4ccfcc.elementId,
    ),
      this._elementStateService["setFocusedSwimlaneLane"](_0x23bf43, null),
      this._editSessionService["open"]({
        chartId: _0x4ccfcc.element["chartId"],
        elementId: _0x4ccfcc.elementId,
        source: "doubleClick",
        subUnitId: _0x4ccfcc.subUnitId,
        unitId: _0x4ccfcc.unitId,
      }),
      _0x30c4f0 && (_0x30c4f0.skipNextObservers = true),
      _0x18583d == null ||
        (_0x5a3052 = _0x18583d.preventDefault) == null ||
        _0x5a3052.call(_0x18583d));
  }
};
A = S(
  [
    x(1, n.IUniverInstanceService),
    x(2, e.IBoardElementService),
    x(3, t.IBoardElementStateService),
    x(4, t.IBoardUIStateService),
    x(5, (0, n.Inject)(T)),
  ],
  A,
);
let j = class extends n.Disposable {
  constructor(_0x4b363d, _0x1507fd, _0x5a2c07) {
    (super(),
      (this._resourceService = _0x4b363d),
      (this._modelService = _0x1507fd),
      (this._commandService = _0x5a2c07));
  }
  getDataEditState(_0x394688, _0x5db039) {
    let _0xe29050 = this._resourceService["getChart"](_0x394688, _0x5db039),
      _0x1fb661 = _0xe29050
        ? this._resourceService["getDataSource"](
            _0x394688,
            _0xe29050.dataSourceId,
          )
        : undefined;
    return !_0xe29050 || !_0x1fb661
      ? null
      : {
          chartId: _0x5db039,
          chartType: _0xe29050.chartType,
          dataSource: _0x1fb661,
          sharingCount: this._resourceService["getDataSourceSharingCount"](
            _0x394688,
            _0x1fb661.id,
          ),
          unitId: _0x394688,
        };
  }
  async updateDataForChart(_0x1f775f) {
    var _0x1fcb97;
    if (
      !this.getDataEditState(_0x1f775f.unitId, _0x1f775f.chartId) ||
      _0x1f775f.values["length"] === 0
    )
      return false;
    let _0x430e86 =
      (_0x1fcb97 = this._resourceService["getChart"](
        _0x1f775f.unitId,
        _0x1f775f.chartId,
      )) == null
        ? undefined
        : _0x1fcb97.chartType;
    if (_0x430e86 === undefined) return false;
    let _0x438a79 = (0, a.tryPrepareInlineChartData)(
      _0x430e86,
      _0x1f775f.values,
    );
    if (!_0x438a79.ok) return false;
    let _0x5be98a = await this.changeDataSource(
      _0x1f775f.unitId,
      _0x1f775f.chartId,
      { values: _0x438a79.values },
    );
    return (
      _0x5be98a &&
        this._modelService["refreshChartModel"](
          _0x1f775f.unitId,
          _0x1f775f.chartId,
        ),
      !!_0x5be98a
    );
  }
  changeDataSource(_0x20363a, _0x4cde2f, _0x588f69) {
    return this._commandService["executeCommand"](
      i.ChangeBoardChartDataSourceCommand["id"],
      { unitId: _0x20363a, chartId: _0x4cde2f, dataSource: _0x588f69 },
    );
  }
};
j = S(
  [
    x(0, (0, n.Inject)(i.BoardChartResourceService)),
    x(1, (0, n.Inject)(i.BoardChartModelService)),
    x(2, n.ICommandService),
  ],
  j,
);
const ie = "board-chart.data-editor-dialog";
function ae(_0x432aa9) {
  let _0x17cb95 = (0, l.useDependency)(j),
    _0x5e9553 = (0, l.useDependency)(n.LocaleService),
    _0x204584 = _0x17cb95.getDataEditState(_0x432aa9.unitId, _0x432aa9.chartId),
    [_0x409e21, _0x21457f] = (0, u.useState)(() =>
      (0, f.isInlineChartDataSource)(
        _0x204584 == null ? undefined : _0x204584.dataSource,
      )
        ? _0x204584.dataSource["values"].map((_0x4ea4b7) => [..._0x4ea4b7])
        : [],
    ),
    [_0x4af02c, _0xfdb77] = (0, u.useState)(() =>
      (0, f.isReferencedChartDataSource)(
        _0x204584 == null ? undefined : _0x204584.dataSource,
      )
        ? "referenced"
        : "inline",
    ),
    [_0x387a0f, _0x2a0c84] = (0, u.useState)(null),
    [_0x562918, _0x59e412] = (0, u.useState)(null),
    _0x3f1075 = {
      [a.InlineChartCreationIssueCode["UnknownOption"]]: _0x5e9553.t(
        "boards-chart-ui.common.insertChartFailed",
      ),
      [a.InlineChartCreationIssueCode["EmptyData"]]: _0x5e9553.t(
        "boards-chart-ui.common.tableDataEmpty",
      ),
      [a.InlineChartCreationIssueCode["InvalidCandlestickData"]]: _0x5e9553.t(
        "boards-chart-ui.candlestick.columnsError",
      ),
    };
  if (!_0x204584)
    return (0, d.jsx)("div", {
      className:
        "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
      children: _0x5e9553.t("boards-chart-ui.dataEditor.unavailable"),
    });
  let _0x6514fd = async (_0x3907ac) => {
    var _0x588a38;
    if (_0x4af02c === "referenced") {
      var _0x44abe0;
      if (!_0x387a0f) return;
      if (
        !(await _0x17cb95.changeDataSource(
          _0x432aa9.unitId,
          _0x432aa9.chartId,
          _0x387a0f,
        ))
      ) {
        _0x59e412(_0x5e9553.t("boards-chart-ui.dataEditor.updateFailed"));
        return;
      }
      (_0x59e412(null),
        (_0x44abe0 = _0x432aa9.onClose) == null || _0x44abe0.call(_0x432aa9));
      return;
    }
    let _0x3423a0 = (0, a.tryPrepareInlineChartData)(
      _0x204584.chartType,
      _0x409e21,
    );
    if (!_0x3423a0.ok) {
      _0x59e412(_0x3f1075[_0x3423a0.issue["code"]]);
      return;
    }
    if (
      !(await _0x17cb95.updateDataForChart({
        chartId: _0x432aa9.chartId,
        name: _0x204584.dataSource["name"],
        unitId: _0x432aa9.unitId,
        updateShared: _0x3907ac,
        values: _0x3423a0.values,
      }))
    ) {
      _0x59e412(_0x5e9553.t("boards-chart-ui.dataEditor.updateFailed"));
      return;
    }
    (_0x59e412(null),
      (_0x588a38 = _0x432aa9.onClose) == null || _0x588a38.call(_0x432aa9));
  };
  return (0, d.jsxs)("div", {
    className:
      "univer-flex\x20univer-h-full\x20univer-min-h-0\x20univer-w-full\x20univer-flex-col\x20univer-gap-4\x20univer-p-1",
    children: [
      (0, d.jsx)("div", {
        className:
          "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-overscroll-contain univer-pr-1",
        children: (0, d.jsx)(a.ChartReferencedDataSourceEditor, {
          mode: _0x4af02c,
          initialSource: (0, f.isReferencedChartDataSource)(
            _0x204584.dataSource,
          )
            ? _0x204584.dataSource["source"]
            : undefined,
          inlineContent: (0, d.jsx)(a.ChartInlineTableEditor, {
            values: _0x409e21,
            parsePastedText: f.parseInlineChartTable,
            onChange: _0x21457f,
          }),
          onModeChange: (_0x20eca8) => {
            (_0xfdb77(_0x20eca8), _0x2a0c84(null));
          },
          onPreviewChange: (_0x45d3f5, _0x1e7e79) =>
            _0x2a0c84(
              _0x45d3f5 &&
                _0x1e7e79.status === f.ChartDataSourceRuntimeStatus["READY"]
                ? { source: _0x45d3f5 }
                : null,
            ),
        }),
      }),
      _0x562918 &&
        (0, d.jsx)("div", {
          className:
            "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
          children: _0x562918,
        }),
      (0, d.jsxs)("div", {
        className:
          "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
        children: [
          _0x432aa9.onClose &&
            (0, d.jsx)(s.Button, {
              type: "button",
              variant: "default",
              onClick: _0x432aa9.onClose,
              children: _0x5e9553.t("boards-chart-ui.common.cancel"),
            }),
          (0, d.jsx)(s.Button, {
            type: "button",
            variant: "primary",
            disabled: _0x4af02c === "referenced" && !_0x387a0f,
            onClick: () => _0x6514fd(true),
            children: _0x5e9553.t("boards-chart-ui.common.apply"),
          }),
        ],
      }),
    ],
  });
}
const oe = {
    id: "board.operation.chart.open-data-editor",
    type: n.CommandType["OPERATION"],
    handler: (_0x4ceebe, _0x11f8a7) => {
      if (
        !_0x11f8a7 ||
        !_0x4ceebe
          .get(j)
          .getDataEditState(_0x11f8a7.unitId, _0x11f8a7.chartId) ||
        !_0x4ceebe.get(l.ComponentManager).get("board-chart.data-editor-dialog")
      )
        return false;
      let _0x2fe6e7 = _0x4ceebe.get(l.IDialogService),
        _0x4c8eed = _0x4ceebe.get(n.LocaleService),
        _0x193743 = null,
        _0x22d628 = () => {
          (_0x193743 == null || _0x193743.dispose(), (_0x193743 = null));
        };
      return (
        (_0x193743 = _0x2fe6e7.open({
          id: "board-chart.dialog.data-editor",
          title: { title: _0x4c8eed.t("boards-chart-ui.common.editData") },
          width: "min(1120px,\x20calc(100vw\x20-\x2032px))",
          draggable: false,
          mask: true,
          maskClosable: false,
          children: {
            label: { name: ie, props: { ..._0x11f8a7, onClose: _0x22d628 } },
          },
          onClose: _0x22d628,
        })),
        true
      );
    },
  },
  M = "board-chart.edit-panel",
  se = "column",
  N = {
    axis: {
      ...a.DEFAULT_CHART_AXIS_VALUES,
      primaryGridLineVisible: false,
      secondaryGridLineVisible: true,
    },
    legend: a.DEFAULT_CHART_LEGEND_VALUES,
    lineAndArea: a.DEFAULT_CHART_LINE_AND_AREA_VALUES,
    pareto: a.DEFAULT_CHART_PARETO_VALUES,
    funnel: a.DEFAULT_CHART_FUNNEL_VALUES,
    heatmap: a.DEFAULT_CHART_HEATMAP_VALUES,
    indicatorLine: a.DEFAULT_CHART_INDICATOR_LINE_VALUES,
    pie: { ...a.DEFAULT_CHART_PIE_VALUES, doughnutHole: 0, pieHole: 0 },
    relation: {
      ...a.DEFAULT_CHART_RELATION_VALUES,
      useValueAsSymbolSize: true,
    },
    radar: a.DEFAULT_CHART_RADAR_VALUES,
    series: {
      ...a.DEFAULT_CHART_SERIES_VALUES,
      radarFillOpacity: 1,
      rightAxis: { ltr: false, rtl: false },
    },
    style: a.DEFAULT_CHART_STYLE_VALUES,
    titles: a.DEFAULT_CHART_TITLE_VALUES,
    trendline: a.DEFAULT_CHART_TRENDLINE_VALUES,
    waterfall: {
      ...a.DEFAULT_CHART_WATERFALL_SETUP_VALUES,
      useSubtotal: false,
    },
    waterfallStyle: a.DEFAULT_CHART_WATERFALL_STYLE_VALUES,
    wordCloud: a.DEFAULT_CHART_WORD_CLOUD_VALUES,
  },
  ce = [
    f.ChartTypeBits["Line"],
    f.ChartTypeBits["Radar"],
    f.ChartTypeBits["WordCloud"],
    f.ChartTypeBits["Scatter"],
    f.ChartTypeBits["Relation"],
    f.ChartTypeBits["Sankey"],
    f.ChartTypeBits["Heatmap"],
    f.ChartTypeBits["Boxplot"],
    f.ChartTypeBits["Candlestick"],
    f.ChartTypeBits["Histogram"],
    f.ChartTypeBits["Treemap"],
    f.ChartTypeBits["Sunburst"],
    f.ChartTypeBits["Gauge"],
    f.ChartTypeBits["Chord"],
  ];
function le(_0x366ac8) {
  let _0x56b8e7 = (0, l.useDependency)(n.LocaleService);
  return (0, d.jsxs)("div", {
    children: [
      (0, d.jsx)(a.ChartEditBlockTitle, {
        title: _0x56b8e7.t("boards-chart-ui.common.data"),
      }),
      (0, d.jsx)(s.Button, {
        type: "button",
        variant: "default",
        className: "univer-w-full univer-justify-start",
        onClick: _0x366ac8.onEditData,
        children: _0x56b8e7.t("boards-chart-ui.common.editData"),
      }),
    ],
  });
}
function ue() {
  let _0x4775f2 = (0, a.useChartEditorChartType)();
  return (0, d.jsx)(a.ChartGradientFillField, {
    visible: ce.every(
      (_0x1034cc) => !f.chartBitsUtils["baseOn"](_0x4775f2, _0x1034cc),
    ),
  });
}
function de(_0x4b1a1e) {
  return (0, d.jsxs)(a.ChartSectionAccordionItem, {
    id: _0x4b1a1e.id,
    children: [
      (0, d.jsx)(a.ChartSectionAccordionTrigger, { children: _0x4b1a1e.label }),
      (0, d.jsx)(a.ChartSectionAccordionContent, {
        children: _0x4b1a1e.children,
      }),
    ],
  });
}
function fe(_0x6232e2, _0x1cf90e) {
  let _0x35b7fd = _0x6232e2 === f.ChartTypeBits["WordCloud"],
    _0x57a3b2 = f.chartBitsUtils["baseOn"](
      _0x6232e2,
      f.ChartTypeBits["Bubble"],
    ),
    _0x211f1b = _0x6232e2 === f.ChartTypeBits["Funnel"],
    _0x1af12f = _0x6232e2 === f.ChartTypeBits["Relation"],
    _0x5ead8f = _0x6232e2 === f.ChartTypeBits["Heatmap"],
    _0x49249e = f.chartBitsUtils["baseOn"](_0x6232e2, f.ChartTypeBits["Pie"]),
    _0x2e7339 = _0x6232e2 === f.ChartTypeBits["Radar"],
    _0x267a5b = _0x6232e2 === f.ChartTypeBits["Waterfall"],
    _0x4213e4 = _0x6232e2 === f.ChartTypeBits["Pareto"],
    _0x47fc5e = _0x6232e2 === f.ChartTypeBits["Candlestick"],
    _0x2c64e9 = _0x6232e2 === f.ChartTypeBits["Histogram"],
    _0x57cf35 = _0x6232e2 === f.ChartTypeBits["Treemap"],
    _0xfdb1e8 = _0x6232e2 === f.ChartTypeBits["Sunburst"],
    _0x4cf8d8 = _0x6232e2 === f.ChartTypeBits["Gauge"],
    _0x947285 = _0x6232e2 === f.ChartTypeBits["Chord"],
    _0x359a6c = [
      a.ChartEditPanelSection["ChartStyle"],
      a.ChartEditPanelSection["ChartAndAxisTitles"],
    ];
  return (
    _0x35b7fd && _0x359a6c.push(a.ChartEditPanelSection["WordCloud"]),
    (0, a.chartTypeSupportsCapability)(
      _0x6232e2,
      a.ChartEditorCapability["GeneralSeries"],
    ) &&
      !_0x57a3b2 &&
      !_0x4213e4 &&
      _0x359a6c.push(a.ChartEditPanelSection["Series"]),
    _0x267a5b && _0x359a6c.push(a.ChartEditPanelSection["WaterfallSeries"]),
    _0x4213e4 &&
      _0x359a6c.push(
        a.ChartEditPanelSection["ParetoBarSeries"],
        a.ChartEditPanelSection["ParetoLineSeries"],
      ),
    _0x49249e && _0x359a6c.push(a.ChartEditPanelSection["PieStyle"]),
    _0x2e7339 && _0x359a6c.push(a.ChartEditPanelSection["Radar"]),
    _0x211f1b && _0x359a6c.push(a.ChartEditPanelSection["Funnel"]),
    _0x5ead8f && _0x359a6c.push(a.ChartEditPanelSection["Heatmap"]),
    _0x1af12f && _0x359a6c.push(a.ChartEditPanelSection["Relation"]),
    (0, a.chartTypeSupportsLineAndAreaStyle)(_0x6232e2) &&
      _0x359a6c.push(a.ChartEditPanelSection["LineAndArea"]),
    (0, a.chartTypeSupportsCapability)(
      _0x6232e2,
      a.ChartEditorCapability["Legend"],
    ) && _0x359a6c.push(a.ChartEditPanelSection["Legend"]),
    (0, a.chartTypeSupportsCapability)(
      _0x6232e2,
      a.ChartEditorCapability["Axes"],
    ) &&
      (_0x359a6c.push(
        a.ChartEditPanelSection["HorizontalAxis"],
        a.ChartEditPanelSection["VerticalAxis"],
      ),
      _0x1cf90e && _0x359a6c.push(a.ChartEditPanelSection["RightVerticalAxis"]),
      _0x359a6c.push(a.ChartEditPanelSection["GridlinesAndTicks"])),
    (0, a.chartTypeSupportsCapability)(
      _0x6232e2,
      a.ChartEditorCapability["IndicatorLine"],
    ) && _0x359a6c.push(a.ChartEditPanelSection["IndicatorLine"]),
    (0, f.chartTypeCanUseTrendLine)(_0x6232e2) &&
      _0x359a6c.push(a.ChartEditPanelSection["Trendline"]),
    _0x47fc5e && _0x359a6c.push(a.ChartEditPanelSection["Candlestick"]),
    _0x2c64e9 && _0x359a6c.push(a.ChartEditPanelSection["Histogram"]),
    _0x57cf35 && _0x359a6c.push(a.ChartEditPanelSection["Treemap"]),
    _0xfdb1e8 && _0x359a6c.push(a.ChartEditPanelSection["Sunburst"]),
    _0x4cf8d8 && _0x359a6c.push(a.ChartEditPanelSection["Gauge"]),
    _0x947285 && _0x359a6c.push(a.ChartEditPanelSection["Chord"]),
    _0x359a6c
  );
}
function pe(_0x41d0c0) {
  var _0x1fedc8, _0x1b0343, _0x496ed3;
  let _0x4b71fc = (0, l.useDependency)(n.LocaleService),
    _0x884cd4 = (0, a.useChartEditorChartType)(),
    _0x165b69 = (0, a.useChartEditorHasRightAxis)(),
    [_0x124209, _0x5ad232] = (0, u.useState)(null),
    _0x326791 = fe(_0x884cd4, _0x165b69),
    _0x4b5126 = (0, d.jsx)(a.ChartTypeSpecificStyleSection, {}),
    _0x45aed2 = {
      [a.ChartEditPanelSection["Candlestick"]]: _0x4b71fc.t(
        "boards-chart-ui.section.candlestick",
      ),
      [a.ChartEditPanelSection["ChartAndAxisTitles"]]: _0x4b71fc.t(
        "boards-chart-ui.common.chartAndAxisTitles",
      ),
      [a.ChartEditPanelSection["ChartStyle"]]: _0x4b71fc.t(
        "boards-chart-ui.common.chartStyle",
      ),
      [a.ChartEditPanelSection["Chord"]]: _0x4b71fc.t(
        "boards-chart-ui.section.chord",
      ),
      [a.ChartEditPanelSection["Funnel"]]: _0x4b71fc.t(
        "boards-chart-ui.section.funnel",
      ),
      [a.ChartEditPanelSection["Gauge"]]: _0x4b71fc.t(
        "boards-chart-ui.section.gauge",
      ),
      [a.ChartEditPanelSection["GridlinesAndTicks"]]: _0x4b71fc.t(
        "boards-chart-ui.section.gridlinesAndTicks",
      ),
      [a.ChartEditPanelSection["Heatmap"]]: _0x4b71fc.t(
        "boards-chart-ui.common.heatmap",
      ),
      [a.ChartEditPanelSection["Histogram"]]: _0x4b71fc.t(
        "boards-chart-ui.section.histogram",
      ),
      [a.ChartEditPanelSection["HorizontalAxis"]]: _0x4b71fc.t(
        "boards-chart-ui.common.horizontalAxis",
      ),
      [a.ChartEditPanelSection["IndicatorLine"]]: _0x4b71fc.t(
        "boards-chart-ui.section.indicatorLine",
      ),
      [a.ChartEditPanelSection["Legend"]]: _0x4b71fc.t(
        "boards-chart-ui.common.legend",
      ),
      [a.ChartEditPanelSection["LineAndArea"]]: _0x4b71fc.t(
        "boards-chart-ui.section.lineAndArea",
      ),
      [a.ChartEditPanelSection["ParetoBarSeries"]]: _0x4b71fc.t(
        "boards-chart-ui.section.paretoBar",
      ),
      [a.ChartEditPanelSection["ParetoLineSeries"]]: _0x4b71fc.t(
        "boards-chart-ui.section.paretoLine",
      ),
      [a.ChartEditPanelSection["PieStyle"]]: _0x4b71fc.t(
        "boards-chart-ui.section.pie",
      ),
      [a.ChartEditPanelSection["Radar"]]: _0x4b71fc.t(
        "boards-chart-ui.section.radar",
      ),
      [a.ChartEditPanelSection["Relation"]]: _0x4b71fc.t(
        "boards-chart-ui.section.relation",
      ),
      [a.ChartEditPanelSection["RightVerticalAxis"]]: _0x4b71fc.t(
        "boards-chart-ui.common.rightVerticalAxis",
      ),
      [a.ChartEditPanelSection["Series"]]: _0x4b71fc.t(
        "boards-chart-ui.common.series",
      ),
      [a.ChartEditPanelSection["Sunburst"]]: _0x4b71fc.t(
        "boards-chart-ui.section.sunburst",
      ),
      [a.ChartEditPanelSection["Treemap"]]: _0x4b71fc.t(
        "boards-chart-ui.section.treemap",
      ),
      [a.ChartEditPanelSection["Trendline"]]: _0x4b71fc.t(
        "boards-chart-ui.common.trendline",
      ),
      [a.ChartEditPanelSection["VerticalAxis"]]: _0x4b71fc.t(
        "boards-chart-ui.common.verticalAxis",
      ),
      [a.ChartEditPanelSection["WaterfallSeries"]]: _0x4b71fc.t(
        "boards-chart-ui.section.waterfall",
      ),
      [a.ChartEditPanelSection["WordCloud"]]: _0x4b71fc.t(
        "boards-chart-ui.section.wordCloud",
      ),
    };
  (0, u.useEffect)(() => {
    var _0x3dce78;
    (_0x3dce78 = _0x41d0c0.route) != null &&
      _0x3dce78.section &&
      _0x5ad232(_0x41d0c0.route["section"]);
  }, [_0x41d0c0.route]);
  let _0x5445a0 = {
    [a.ChartEditPanelSection["ChartStyle"]]: (0, d.jsx)(a.ChartStyleSection, {
      defaultValues: N.style,
    }),
    [a.ChartEditPanelSection["ChartAndAxisTitles"]]: (0, d.jsx)(
      a.ChartTitlesSection,
      {
        commitMode: "change",
        defaultValues: N.titles,
        selectedTitleKey:
          (_0x1fedc8 = _0x41d0c0.route) == null
            ? undefined
            : _0x1fedc8.titleKey,
      },
    ),
    [a.ChartEditPanelSection["Series"]]: (0, d.jsxs)(a.ChartSeriesRoot, {
      defaultValues: N.series,
      NumberFormatField: a.ChartNumberFormatTextField,
      selectedSeriesId:
        (_0x1b0343 = _0x41d0c0.route) == null ? undefined : _0x1b0343.seriesId,
      children: [
        (0, d.jsx)(a.ChartSeriesSelector, {}),
        (0, d.jsx)(a.ChartSeriesTypeField, { individualOnly: true }),
        (0, d.jsx)(a.ChartSeriesFillFields, {}),
        (0, d.jsx)(a.ChartSeriesBorderFields, {}),
        (0, d.jsx)(a.ChartSeriesPointFields, {}),
        (0, d.jsx)(a.ChartSeriesRightAxisField, {}),
        (0, d.jsx)(a.ChartSeriesDataLabelFields, {}),
        (0, d.jsx)(a.ChartSeriesDataPointFields, {}),
      ],
    }),
    [a.ChartEditPanelSection["WaterfallSeries"]]: (0, d.jsx)(
      a.ChartWaterfallStyleSection,
      {
        defaultValues: N.waterfallStyle,
        NumberFormatField: a.ChartNumberFormatTextField,
        selectedSeriesId:
          (_0x496ed3 = _0x41d0c0.route) == null
            ? undefined
            : _0x496ed3.seriesId,
        showBucketName: () => true,
      },
    ),
    [a.ChartEditPanelSection["ParetoBarSeries"]]: (0, d.jsx)(
      a.ChartParetoSeriesSection,
      {
        defaultValues: N.pareto,
        NumberFormatField: a.ChartNumberFormatTextField,
        showDataPointEditor: true,
        target: "barStyle",
      },
    ),
    [a.ChartEditPanelSection["ParetoLineSeries"]]: (0, d.jsx)(
      a.ChartParetoSeriesSection,
      {
        defaultValues: N.pareto,
        NumberFormatField: a.ChartNumberFormatTextField,
        showDataPointEditor: true,
        target: "cumulativeLineStyle",
      },
    ),
    [a.ChartEditPanelSection["PieStyle"]]: (0, d.jsx)(a.ChartPieStyleSection, {
      defaultValues: N.pie,
      NumberFormatField: a.ChartNumberFormatTextField,
    }),
    [a.ChartEditPanelSection["WordCloud"]]: (0, d.jsxs)(a.ChartWordCloudRoot, {
      children: [
        (0, d.jsx)(a.ChartWordCloudShapeField, { defaultValues: N.wordCloud }),
        (0, d.jsx)(a.ChartWordCloudMaskImageIdField, {}),
        (0, d.jsx)(a.ChartWordCloudRepeatField, { defaultValues: N.wordCloud }),
      ],
    }),
    [a.ChartEditPanelSection["Radar"]]: (0, d.jsx)(a.ChartRadarStyleSection, {
      defaultValues: N.radar,
    }),
    [a.ChartEditPanelSection["Funnel"]]: (0, d.jsx)(a.ChartFunnelStyleSection, {
      defaultValues: N.funnel,
      gapControl: "number",
    }),
    [a.ChartEditPanelSection["Heatmap"]]: (0, d.jsx)(
      a.ChartHeatmapStyleSection,
      { defaultValues: N.heatmap },
    ),
    [a.ChartEditPanelSection["Relation"]]: (0, d.jsx)(
      a.ChartRelationStyleSection,
      { defaultValues: N.relation },
    ),
    [a.ChartEditPanelSection["LineAndArea"]]: (0, d.jsx)(
      a.ChartLineAndAreaSection,
      { defaultValues: N.lineAndArea, lineStyleControl: "select" },
    ),
    [a.ChartEditPanelSection["Legend"]]: (0, d.jsx)(a.ChartLegendSection, {
      defaultValues: N.legend,
    }),
    [a.ChartEditPanelSection["HorizontalAxis"]]: (0, d.jsx)(
      a.ChartAxisSection,
      {
        axis: "x",
        defaultValues: N.axis,
        NumberFormatField: a.ChartNumberFormatTextField,
      },
    ),
    [a.ChartEditPanelSection["VerticalAxis"]]: (0, d.jsx)(a.ChartAxisSection, {
      axis: "y",
      defaultValues: N.axis,
      NumberFormatField: a.ChartNumberFormatTextField,
    }),
    [a.ChartEditPanelSection["RightVerticalAxis"]]: (0, d.jsx)(
      a.ChartAxisSection,
      {
        axis: "rightY",
        defaultValues: N.axis,
        NumberFormatField: a.ChartNumberFormatTextField,
      },
    ),
    [a.ChartEditPanelSection["GridlinesAndTicks"]]: (0, d.jsx)(
      a.ChartGridlinesAndTicksSection,
      { defaultValues: N.axis },
    ),
    [a.ChartEditPanelSection["IndicatorLine"]]: (0, d.jsx)(
      a.ChartIndicatorLineSection,
      { defaultValues: N.indicatorLine },
    ),
    [a.ChartEditPanelSection["Trendline"]]: (0, d.jsx)(
      a.ChartTrendlineSection,
      { defaultValues: N.trendline },
    ),
    [a.ChartEditPanelSection["Candlestick"]]: _0x4b5126,
    [a.ChartEditPanelSection["Histogram"]]: _0x4b5126,
    [a.ChartEditPanelSection["Treemap"]]: _0x4b5126,
    [a.ChartEditPanelSection["Sunburst"]]: _0x4b5126,
    [a.ChartEditPanelSection["Gauge"]]: _0x4b5126,
    [a.ChartEditPanelSection["Chord"]]: _0x4b5126,
  };
  return (0, d.jsx)(a.ChartSectionAccordion, {
    value: _0x124209,
    onChange: _0x5ad232,
    children: _0x326791.map((_0x5f4f2d) =>
      (0, d.jsx)(
        de,
        {
          id: _0x5f4f2d,
          label: _0x45aed2[_0x5f4f2d],
          children: _0x5445a0[_0x5f4f2d],
        },
        _0x5f4f2d,
      ),
    ),
  });
}
function me({
  unitId: _0x2679ea,
  subUnitId: _0x449508,
  elementId: _0x4854eb,
  chartId: _0x3bca79,
}) {
  let _0x67a2a1 = (0, l.useDependency)(i.BoardChartModelService),
    _0x2ed720 = (0, l.useDependency)(i.BoardChartResourceService),
    _0x26758a = (0, l.useDependency)(E),
    _0x10ad23 = (0, l.useDependency)(n.LocaleService),
    _0x32fc81 = (0, l.useDependency)(n.ICommandService),
    _0x5ded88 = (0, l.useDependency)(n.Injector),
    _0x59c199 = (0, l.useDependency)(n.IUniverInstanceService),
    _0x3121a6 = (0, l.useDependency)(T),
    _0x11a3eb = (0, l.useObservable)(
      _0x67a2a1.activeRuntimeModel$,
      _0x67a2a1.activeRuntimeModel,
    ),
    _0x1780bf = (0, l.useObservable)(
      _0x3121a6.activeSession$,
      _0x3121a6.getActiveSession(),
    ),
    [_0x55d680, _0x20f0dd] = (0, u.useState)(a.ChartEditPanelTab["Data"]),
    _0x33c7b3 =
      (_0x1780bf == null ? undefined : _0x1780bf.unitId) === _0x2679ea &&
      _0x1780bf.chartId === _0x3bca79 &&
      _0x1780bf.elementId === _0x4854eb
        ? _0x1780bf.route
        : undefined;
  ((0, u.useEffect)(() => {
    _0x67a2a1.setActiveChartById(_0x2679ea, _0x3bca79);
  }, [_0x3bca79, _0x67a2a1, _0x2679ea]),
    (0, u.useEffect)(() => {
      _0x33c7b3 != null && _0x33c7b3.tab && _0x20f0dd(_0x33c7b3.tab);
    }, [_0x33c7b3]));
  let _0x43ee2c =
      (_0x11a3eb == null ? undefined : _0x11a3eb.unitId) === _0x2679ea &&
      _0x11a3eb.chartId === _0x3bca79,
    _0x3e945a = (0, u.useMemo)(() => {
      if (!_0x43ee2c) return null;
      let _0x57a492 = _0x59c199.getUnit(
        _0x2679ea,
        n.UniverInstanceType["UNIVER_BOARD"],
      );
      return _0x57a492
        ? new a["ChartHostAdapter"](
            _0x11a3eb.model,
            new i["BoardChartConfigAdapter"]({
              unitId: _0x2679ea,
              pageId: _0x449508,
              chartId: _0x3bca79,
              elementId: _0x4854eb,
              boardModel: _0x57a492,
              injector: _0x5ded88,
            }),
          )
        : null;
    }, [
      _0x11a3eb,
      _0x3bca79,
      _0x4854eb,
      _0x5ded88,
      _0x43ee2c,
      _0x449508,
      _0x2679ea,
      _0x59c199,
    ]),
    _0x42c373 = (0, u.useMemo)(
      () =>
        (0, a.buildChartTypeSelectOptions)(
          a.CHART_TYPE_CATALOG["map"]((_0xf50976) => ({
            ..._0xf50976,
            label: _0x10ad23.t(
              "boards-chart-ui.chartTypes." + _0xf50976.labelId,
            ),
          })),
        ),
      [_0x10ad23],
    );
  return !_0x43ee2c || !_0x3e945a
    ? null
    : (0, d.jsx)(a.ChartEditorProvider, {
        chartUIService: _0x26758a,
        hostAdapter: _0x3e945a,
        children: (0, d.jsxs)("div", {
          className:
            "univer-flex\x20univer-h-0\x20univer-min-h-full\x20univer-w-full\x20univer-flex-col\x20univer-overflow-hidden\x20univer-bg-gray-0\x20dark:!univer-bg-gray-900",
          children: [
            (0, d.jsx)(a.ChartEditPanelTabs, {
              ariaLabel: _0x10ad23.t("boards-chart-ui.common.editChart"),
              className: "univer-shrink-0 univer-px-3",
              items: [
                {
                  label: _0x10ad23.t("boards-chart-ui.common.setup"),
                  panelId: P,
                  value: a.ChartEditPanelTab["Data"],
                },
                {
                  label: _0x10ad23.t("boards-chart-ui.common.customize"),
                  panelId: F,
                  value: a.ChartEditPanelTab["Style"],
                },
              ],
              value: _0x55d680,
              onChange: _0x20f0dd,
            }),
            _0x55d680 === a.ChartEditPanelTab["Data"]
              ? (0, d.jsx)(a.ChartEditPanel, {
                  id: P,
                  label: _0x10ad23.t("boards-chart-ui.common.setup"),
                  children: (0, d.jsxs)("div", {
                    className:
                      "univer-flex\x20univer-flex-col\x20univer-gap-3\x20univer-px-4\x20univer-pb-5",
                    children: [
                      (0, d.jsx)(a.ChartTypeField, { options: _0x42c373 }),
                      (0, d.jsx)(a.ChartTypeSpecificSetupSection, {}),
                      (0, d.jsx)(a.ChartThemeField, {}),
                      (0, d.jsx)(ue, {}),
                      (0, d.jsx)(a.ChartStackField, {}),
                      (0, d.jsx)(le, {
                        onEditData: () =>
                          _0x32fc81.executeCommand(oe.id, {
                            unitId: _0x2679ea,
                            chartId: _0x3bca79,
                          }),
                      }),
                      (0, d.jsx)(a.ChartCommonDataMappingSection, {
                        orientationControl: (0, d.jsx)(s.Button, {
                          size: "small",
                          onClick: () => {
                            var _0x18b235;
                            return _0x26758a.executeChartUpdateConfig({
                              patch: {
                                context: {
                                  orient:
                                    ((_0x18b235 = _0x2ed720.getChart(
                                      _0x2679ea,
                                      _0x3bca79,
                                    )) == null ||
                                    (_0x18b235 = _0x18b235.context) == null
                                      ? undefined
                                      : _0x18b235.orient) === se
                                      ? "row"
                                      : se,
                                },
                              },
                            });
                          },
                          children: _0x10ad23.t(
                            "boards-chart-ui.common.switchRowColumn",
                          ),
                        }),
                      }),
                      (0, d.jsx)(a.ChartTypeSpecificDataSection, {}),
                      (0, d.jsx)(a.ChartWaterfallSetupFields, {
                        defaultValues: N.waterfall,
                      }),
                    ],
                  }),
                })
              : (0, d.jsx)(a.ChartEditPanel, {
                  id: F,
                  label: _0x10ad23.t("boards-chart-ui.common.customize"),
                  children: (0, d.jsx)(pe, { route: _0x33c7b3 }),
                }),
          ],
        }),
      });
}
const P = "board-chart-setup-panel",
  F = "board-chart-style-panel",
  he = f.CHART_HOST_DEFAULT_BORDER_COLOR,
  I = f.CHART_HOST_DEFAULT_BORDER_RADIUS;
function L(_0x512740) {
  var _0x4eaffe, _0x247917;
  let _0x3daeb9 = _0x512740.chartStyle ?? {},
    _0x2fbb9a =
      _0x3daeb9.borderWidth === 0
        ? 0
        : ve(
            _0x3daeb9.borderWidth,
            ve(
              (_0x4eaffe = _0x512740.chartElement) == null ||
                (_0x4eaffe = _0x4eaffe.stroke) == null
                ? undefined
                : _0x4eaffe.width,
              1,
            ),
          );
  return {
    fill:
      _0x512740.hostFill ??
      _0x3daeb9.backgroundColor ??
      f.defaultChartConfig["backgroundColor"],
    stroke:
      _0x3daeb9.borderColor ??
      ((_0x247917 = _0x512740.chartElement) == null ||
      (_0x247917 = _0x247917.stroke) == null
        ? undefined
        : _0x247917.color) ??
      _0x512740.themeBorderColor ??
      (_0x512740.isDarkMode ? "rgba(255, 255, 255, 0.18)" : he),
    strokeWidth: _0x2fbb9a,
    radius: I,
  };
}
function ge(_0x2373e7, _0x964167) {
  let _0x4868bd = Math.max(0, _0x964167.strokeWidth);
  return {
    left: _0x4868bd,
    top: _0x4868bd,
    width: Math.max(1, _0x2373e7.width - _0x4868bd * 2),
    height: Math.max(1, _0x2373e7.height - _0x4868bd * 2),
  };
}
function _e(_0x491600, _0x1050f8) {
  let _0x7a2087 = -1 / 2;
  return {
    left: _0x7a2087,
    top: _0x7a2087,
    width: Math.max(1, _0x491600.width),
    height: Math.max(1, _0x491600.height),
    radius: Math.max(0, _0x1050f8.radius - _0x1050f8.strokeWidth / 2),
  };
}
function ve(_0x3d042e, _0x5dfe60) {
  return typeof _0x3d042e == "number" &&
    Number.isFinite(_0x3d042e) &&
    _0x3d042e > 0
    ? _0x3d042e
    : _0x5dfe60;
}
function ye(_0xde152f) {
  var _0x34cce8;
  let _0x45a5a8 =
    (_0x34cce8 = _0xde152f.match(/^#([\da-f]{3}|[\da-f]{6})$/i)) == null
      ? undefined
      : _0x34cce8[1];
  if (_0x45a5a8) {
    let _0xef2362 =
      _0x45a5a8.length === 3
        ? _0x45a5a8
            .split("")
            .map((_0x316444) => "" + _0x316444 + _0x316444)
            .join("")
        : _0x45a5a8;
    return (
      "rgb(" +
      Number.parseInt(_0xef2362.slice(0, 2), 16) +
      ",\x20" +
      Number.parseInt(_0xef2362.slice(2, 4), 16) +
      ",\x20" +
      Number.parseInt(_0xef2362.slice(4, 6), 16) +
      ")"
    );
  }
  let _0x3a2629 = document.createElement("span");
  return (
    (_0x3a2629.style["color"] = _0xde152f),
    _0x3a2629.style["color"] || _0xde152f
  );
}
let R = class extends n.Disposable {
  constructor(_0x3c87e4, _0x489ec4, _0x1d951b) {
    (super(),
      (this._localeService = _0x3c87e4),
      (this._chartThemeService = _0x489ec4),
      (this._renderModelManager = _0x1d951b),
      b(this, "_chartInstanceMap", new Map()),
      b(this, "_chartElementEditMode", new Map()),
      b(this, "_chartEventHandlers", new Map()),
      b(this, "_chartEventSubscriptions", new Map()));
  }
  createChartInstance(_0x1ee2b8) {
    return _0x1ee2b8
      ? this._renderModelManager["createChartInstance"](
          _0x1ee2b8,
          this._createChartRenderInstanceContext(),
        )
      : this._renderModelManager["createChartInstance"]();
  }
  registerChartInstance(_0x4cd776, _0x10f1ef, _0x23faf4) {
    let _0x1228b5 = this._getChartRuntimeKey(_0x4cd776, _0x10f1ef),
      _0x3fc4fb = this._chartInstanceMap["get"](_0x1228b5);
    return (
      _0x3fc4fb &&
        _0x3fc4fb !== _0x23faf4 &&
        (this._disposeChartEventSubscriptions(_0x1228b5), _0x3fc4fb.dispose()),
      this._chartInstanceMap["set"](_0x1228b5, _0x23faf4),
      _0x23faf4.setElementEditMode(
        this._chartElementEditMode["get"](_0x1228b5) === true,
      ),
      this._bindChartEventHandlers(_0x1228b5, _0x23faf4),
      {
        dispose: () => {
          this._chartInstanceMap["get"](_0x1228b5) === _0x23faf4 &&
            (this._disposeChartEventSubscriptions(_0x1228b5),
            this._chartInstanceMap["delete"](_0x1228b5));
        },
      }
    );
  }
  setElementEditMode(_0x33e62c, _0x225b30, _0x10e53c) {
    var _0x35e156;
    let _0x378eee = this._getChartRuntimeKey(_0x33e62c, _0x225b30);
    (_0x10e53c
      ? this._chartElementEditMode["set"](_0x378eee, true)
      : this._chartElementEditMode["delete"](_0x378eee),
      (_0x35e156 = this._chartInstanceMap["get"](_0x378eee)) == null ||
        _0x35e156.setElementEditMode(_0x10e53c));
  }
  isElementEditModeActive(_0x94616, _0x5f16bc) {
    return (
      this._chartElementEditMode["get"](
        this._getChartRuntimeKey(_0x94616, _0x5f16bc),
      ) === true
    );
  }
  on(_0x1b2614, _0x35c13c, _0x58cc0b, _0x45f3b3) {
    let _0x23e03c = this._getChartRuntimeKey(_0x1b2614, _0x35c13c),
      _0x33f9cc = this._chartEventHandlers["get"](_0x23e03c);
    _0x33f9cc ||
      ((_0x33f9cc = new Map()),
      this._chartEventHandlers["set"](_0x23e03c, _0x33f9cc));
    let _0x140013 = _0x33f9cc.get(_0x58cc0b);
    (_0x140013 ||
      ((_0x140013 = new Set()), _0x33f9cc.set(_0x58cc0b, _0x140013)),
      _0x140013.add(_0x45f3b3));
    let _0x3ad014 = this._chartInstanceMap["get"](_0x23e03c);
    return (
      _0x3ad014 &&
        this._bindChartEventHandler(_0x23e03c, _0x3ad014, _0x58cc0b, _0x45f3b3),
      {
        dispose: () => {
          let _0x232e95 = this._chartEventHandlers["get"](_0x23e03c),
            _0x3bc131 =
              _0x232e95 == null ? undefined : _0x232e95.get(_0x58cc0b);
          (_0x3bc131 == null || _0x3bc131.delete(_0x45f3b3),
            (_0x3bc131 == null ? undefined : _0x3bc131.size) === 0 &&
              (_0x232e95 == null || _0x232e95.delete(_0x58cc0b)),
            (_0x232e95 == null ? undefined : _0x232e95.size) === 0 &&
              this._chartEventHandlers["delete"](_0x23e03c),
            this._disposeChartEventSubscription(
              _0x23e03c,
              _0x58cc0b,
              _0x45f3b3,
            ));
        },
      }
    );
  }
  createRenderInput(_0x438b01) {
    let _0x437dbc = _0x438b01.model["config"];
    if (!_0x437dbc)
      throw Error(
        "Board chart " +
          _0x438b01.chartId +
          "\x20has\x20no\x20render\x20config.",
      );
    let _0x24ba2e = this._localeService["getDirection"]();
    return {
      chartConfig: _0x437dbc,
      chartStyle: (0, f.resolveChartRuntimeStyle)(
        {
          ..._0x438b01.model["style"],
          runtime: {
            ..._0x438b01.model["getRuntimeContext"](_0x24ba2e),
            enableAdaptiveSize: true,
          },
          direction: _0x24ba2e,
        },
        _0x437dbc.type,
      ),
    };
  }
  createRenderSpec(_0x1e2e61, _0xb2eead, _0x34731f) {
    let { chartConfig: _0x1cc2b4, chartStyle: _0x2de9a5 } =
        this.createRenderInput(_0x1e2e61),
      _0x451497 = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: _0x451497.stylizeSpec(
        _0x451497.toSpec(_0x1cc2b4, _0x2de9a5),
        {
          chartConfig: _0x1cc2b4,
          chartStyle: _0x2de9a5,
          chartInstance: _0x34731f,
        },
        _0xb2eead,
      ),
      chartConfig: _0x1cc2b4,
      chartStyle: _0x2de9a5,
      hostStyle: this.getHostStyle(_0x2de9a5),
    };
  }
  getHostStyle(_0xaaa170) {
    return (0, f.resolveDefaultChartHostFrameStyle)({
      style: _0xaaa170,
      getRenderColor: (_0x4164da) =>
        this._chartThemeService["getRenderColor"](_0x4164da),
    });
  }
  applyHostStyle(_0x1adbe5, _0x474f1) {
    var _0x5be1fd;
    ((_0x1adbe5.style["border"] =
      (_0x5be1fd = _0x474f1.border) != null &&
      _0x5be1fd.color &&
      _0x474f1.border["width"]
        ? _0x474f1.border["width"] + "px solid " + ye(_0x474f1.border["color"])
        : ""),
      (_0x1adbe5.style["backgroundColor"] = ye(_0x474f1.fill ?? "transparent")),
      (_0x1adbe5.style["borderRadius"] = _0x474f1.radius
        ? _0x474f1.radius + "px"
        : I + "px"),
      (_0x1adbe5.style["overflow"] = "hidden"),
      (_0x1adbe5.style["boxSizing"] = "border-box"));
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({ style: _0x5d0162 }) => ({
        fill: this.getHostStyle(_0x5d0162).fill,
      }),
      resolveRenderBackgroundColor: ({ hostStyle: _0x50ed34 }) =>
        _0x50ed34.fill,
      prepareSpec: ({ mode: _0x32ab73, spec: _0x24d6fc }) =>
        _0x32ab73 === "image"
          ? { ..._0x24d6fc, animation: false, tooltip: { show: false } }
          : _0x24d6fc,
    };
  }
  _bindChartEventHandlers(_0xb5abf4, _0x64fdd3) {
    let _0x36f3ee = this._chartEventHandlers["get"](_0xb5abf4);
    _0x36f3ee &&
      _0x36f3ee.forEach((_0x4e5035, _0x3cf518) => {
        _0x4e5035.forEach((_0x1c0b17) =>
          this._bindChartEventHandler(
            _0xb5abf4,
            _0x64fdd3,
            _0x3cf518,
            _0x1c0b17,
          ),
        );
      });
  }
  _bindChartEventHandler(_0x2e9ca9, _0x4a9d7f, _0x2028cd, _0x390bb8) {
    let _0x4ac5c8 = this._chartEventSubscriptions["get"](_0x2e9ca9);
    _0x4ac5c8 ||
      ((_0x4ac5c8 = new Map()),
      this._chartEventSubscriptions["set"](_0x2e9ca9, _0x4ac5c8));
    let _0x559b60 = _0x4ac5c8.get(_0x2028cd);
    (_0x559b60 ||
      ((_0x559b60 = new Map()), _0x4ac5c8.set(_0x2028cd, _0x559b60)),
      !_0x559b60.has(_0x390bb8) &&
        _0x559b60.set(_0x390bb8, _0x4a9d7f.on(_0x2028cd, _0x390bb8)));
  }
  _disposeChartEventSubscription(_0x2d91cf, _0x10f870, _0x303cca) {
    var _0xfa77fe, _0x50eb5d;
    let _0x22e8f2 =
      (_0xfa77fe = this._chartEventSubscriptions["get"](_0x2d91cf)) == null
        ? undefined
        : _0xfa77fe.get(_0x10f870);
    (_0x22e8f2 == null ||
      (_0x50eb5d = _0x22e8f2.get(_0x303cca)) == null ||
      _0x50eb5d.dispose(),
      _0x22e8f2 == null || _0x22e8f2.delete(_0x303cca));
  }
  _disposeChartEventSubscriptions(_0xfe98b1) {
    let _0x497443 = this._chartEventSubscriptions["get"](_0xfe98b1);
    (_0x497443 == null ||
      _0x497443.forEach((_0x363fcf) => {
        (_0x363fcf.forEach((_0x4a5022) => _0x4a5022.dispose()),
          _0x363fcf.clear());
      }),
      this._chartEventSubscriptions["delete"](_0xfe98b1));
  }
  _getChartRuntimeKey(_0x15bb35, _0x3eec61) {
    return _0x15bb35 + "::" + _0x3eec61;
  }
  dispose() {
    (this._chartInstanceMap["forEach"]((_0x4dae74) => _0x4dae74.dispose()),
      this._chartInstanceMap["clear"](),
      this._chartElementEditMode["clear"](),
      this._chartEventHandlers["clear"](),
      Array.from(this._chartEventSubscriptions["keys"]()).forEach((_0x1b51b6) =>
        this._disposeChartEventSubscriptions(_0x1b51b6),
      ),
      super.dispose());
  }
};
R = S(
  [
    x(0, (0, n.Inject)(n.LocaleService)),
    x(1, (0, n.Inject)(f.ChartThemeService)),
    x(2, f.IChartRenderModelManagerService),
  ],
  R,
);
let z = class extends n.Disposable {
  constructor(
    _0x298da,
    _0x44d9c9,
    _0x2921b9,
    _0x4d0d34,
    _0x354880,
    _0x2a3b74,
    _0x21e902,
  ) {
    (super(),
      (this._renderContext = _0x298da),
      (this._editSessionService = _0x44d9c9),
      (this._sidePanelService = _0x2921b9),
      (this._modelService = _0x4d0d34),
      (this._renderService = _0x354880),
      (this._chartUIService = _0x2a3b74),
      (this._localeService = _0x21e902),
      b(this, "_activePanelKey", null),
      b(this, "_activePanelDisposable", null),
      b(this, "_activeEditOverlay", null),
      this.disposeWithMe(
        this._editSessionService["activeSession$"].subscribe((_0x588d8a) =>
          this._syncPanel(_0x588d8a),
        ),
      ));
  }
  dispose() {
    (this._closeActivePanel(), super.dispose());
  }
  _syncPanel(_0x435b3d) {
    var _0x10292b;
    if (!_0x435b3d || _0x435b3d.unitId !== this._renderContext["unitId"]) {
      this._closeActivePanel();
      return;
    }
    let _0x24044d = this._modelService["ensureChartModel"](
      _0x435b3d.unitId,
      _0x435b3d.chartId,
    );
    if (!_0x24044d) {
      this._closeActivePanel();
      return;
    }
    let _0x167f58 = [
      M,
      _0x435b3d.unitId,
      _0x435b3d.subUnitId,
      _0x435b3d.elementId,
    ].join(":");
    if (this._activePanelKey === _0x167f58) {
      (this._modelService["setActiveChartRuntime"](_0x24044d),
        this._setActiveEditOverlay(_0x435b3d.unitId, _0x435b3d.chartId));
      return;
    }
    ((_0x10292b = this._activePanelDisposable) == null || _0x10292b.dispose(),
      this._modelService["setActiveChartRuntime"](_0x24044d),
      this._setActiveEditOverlay(_0x435b3d.unitId, _0x435b3d.chartId),
      (this._activePanelKey = _0x167f58),
      (this._activePanelDisposable = this._sidePanelService["open"]({
        id: M,
        header: {
          title: this._localeService["t"]("boards-chart-ui.common.editChart"),
        },
        width: 388,
        children: {
          label: M,
          unitId: _0x435b3d.unitId,
          subUnitId: _0x435b3d.subUnitId,
          elementId: _0x435b3d.elementId,
          chartId: _0x435b3d.chartId,
        },
        onClose: (_0x4a9f23) => {
          this._activePanelKey === _0x167f58 &&
            ((this._activePanelKey = null),
            (this._activePanelDisposable = null),
            this._clearActiveEditOverlay(),
            this._modelService["setActiveChartRuntime"](null),
            _0x4a9f23 === "manual" &&
              this._editSessionService["close"]("manual"));
        },
      })));
  }
  _closeActivePanel() {
    var _0x5d12e9;
    if (!this._activePanelKey) {
      this._clearActiveEditOverlay();
      return;
    }
    ((_0x5d12e9 = this._activePanelDisposable) == null || _0x5d12e9.dispose(),
      (this._activePanelDisposable = null),
      (this._activePanelKey = null),
      this._clearActiveEditOverlay(),
      this._modelService["setActiveChartRuntime"](null));
  }
  _setActiveEditOverlay(_0x4db49b, _0x84309b) {
    let _0x522675 = this._activeEditOverlay;
    ((_0x522675 == null ? undefined : _0x522675.unitId) !== _0x4db49b ||
      _0x522675.chartId !== _0x84309b) &&
      (this._clearActiveEditOverlay(),
      (this._activeEditOverlay = { unitId: _0x4db49b, chartId: _0x84309b }),
      this._renderService["setElementEditMode"](_0x4db49b, _0x84309b, true));
  }
  _clearActiveEditOverlay() {
    let _0x32a608 = this._activeEditOverlay;
    _0x32a608 &&
      ((this._activeEditOverlay = null),
      this._renderService["setElementEditMode"](
        _0x32a608.unitId,
        _0x32a608.chartId,
        false,
      ));
  }
};
z = S(
  [
    x(1, (0, n.Inject)(T)),
    x(2, (0, n.Inject)(t.IBoardSidePanelService)),
    x(3, (0, n.Inject)(i.BoardChartModelService)),
    x(4, (0, n.Inject)(R)),
    x(5, E),
    x(6, (0, n.Inject)(n.LocaleService)),
  ],
  z,
);
var be = class extends n.Disposable {
  constructor(_0x4c2d74, _0x1befda, _0xec96a4) {
    (super(),
      (this.chartId = _0x4c2d74),
      (this._host = _0x1befda),
      (this._applyHostStyle = _0xec96a4),
      b(this, "mode", f.ChartRenderMode["Dom"]));
  }
  getRect() {
    return {
      width: Math.max(1, this._host["clientWidth"]),
      height: Math.max(1, this._host["clientHeight"]),
    };
  }
  setStyle(_0x3e77ad) {
    this._applyHostStyle(this._host, _0x3e77ad);
  }
  async ensureMount() {
    return this._host;
  }
  checkMounted() {
    return true;
  }
  syncLayout() {}
  markReady() {}
  markNotReady() {}
};
function xe({
  chartElement: _0x1a45dc,
  chartId: _0x1e3f3f,
  unitId: _0x40b6c0,
}) {
  let _0x495891 = (0, u.useRef)(null),
    _0x572139 = (0, l.useDependency)(i.BoardChartModelService),
    _0x13e428 = (0, l.useDependency)(R),
    _0x47a901 = (0, l.useDependency)(n.LocaleService);
  return (
    (0, u.useEffect)(() => {
      let _0x444194 = _0x495891.current;
      if (!_0x444194) return;
      let _0x2572bb = _0x572139.ensureChartModel(_0x40b6c0, _0x1e3f3f);
      if (!_0x2572bb) return;
      _0x572139.setActiveChartRuntime(_0x2572bb);
      let _0x99ddd = new be(_0x1e3f3f, _0x444194, (_0x1a132e, _0x11a755) =>
          _0x13e428.applyHostStyle(_0x1a132e, {
            fill: _0x11a755.fill ?? "transparent",
          }),
        ),
        _0x4dde15 = _0x13e428.createChartInstance(f.ChartRenderMode["Dom"]),
        _0x43a5cc = _0x13e428.registerChartInstance(
          _0x40b6c0,
          _0x1e3f3f,
          _0x4dde15,
        );
      _0x4dde15.bind(_0x99ddd);
      let _0x153965 = (0, r.combineLatest)([
        _0x2572bb.model["config$"],
        _0x2572bb.model["style$"],
        _0x47a901.direction$,
      ])
        .pipe((0, r.filter)(([_0x4bbfa3]) => _0x4bbfa3 != null))
        .subscribe(() => {
          let { chartConfig: _0xf35ded, chartStyle: _0x580ef4 } =
            _0x13e428.createRenderInput(_0x2572bb);
          (Se(_0x444194, _0x1a45dc, _0x580ef4, _0x13e428),
            _0x4dde15
              .render({
                chartId: _0x1e3f3f,
                config: _0xf35ded,
                style: _0x580ef4,
              })
              .catch(() => {}));
        });
      return () => {
        var _0x3dd105;
        (_0x153965.unsubscribe(),
          _0x43a5cc.dispose(),
          _0x4dde15.dispose(),
          _0x99ddd.dispose(),
          ((_0x3dd105 = _0x572139.activeRuntimeModel) == null
            ? undefined
            : _0x3dd105.unitId) === _0x40b6c0 &&
            _0x572139.activeRuntimeModel["chartId"] === _0x1e3f3f &&
            _0x572139.setActiveChartRuntime(null));
      };
    }, [_0x1a45dc, _0x1e3f3f, _0x47a901, _0x572139, _0x13e428, _0x40b6c0]),
    (0, d.jsx)("div", {
      className:
        "univer-relative univer-h-full univer-w-full univer-overflow-hidden",
      "data-board-chart-dom-renderer": _0x1e3f3f,
      children: (0, d.jsx)("div", {
        ref: _0x495891,
        "data-board-chart-dom-content-host": _0x1e3f3f,
      }),
    })
  );
}
function Se(_0x1c5824, _0x1643d1, _0x5bc902, _0x2f1bb7) {
  let _0x1e1e4f = _0x2f1bb7.getHostStyle(_0x5bc902).fill,
    _0x38e6c1 = L({
      chartStyle: _0x5bc902,
      chartElement: _0x1643d1,
      hostFill: _0x1e1e4f,
    }),
    _0x5028e4 = Math.max(0, _0x38e6c1.strokeWidth);
  ((_0x1c5824.style["position"] = "absolute"),
    (_0x1c5824.style["left"] = _0x5028e4 + "px"),
    (_0x1c5824.style["top"] = _0x5028e4 + "px"),
    (_0x1c5824.style["right"] = _0x5028e4 + "px"),
    (_0x1c5824.style["bottom"] = _0x5028e4 + "px"),
    (_0x1c5824.style["backgroundColor"] = _0x38e6c1.fill),
    (_0x1c5824.style["borderRadius"] =
      Math.max(0, _0x38e6c1.radius - _0x5028e4) + "px"),
    (_0x1c5824.style["overflow"] = "hidden"),
    (_0x1c5824.style["boxSizing"] = "border-box"));
}
const Ce = (0, n.createIdentifier)("board-chart.snapshot-renderer");
function we(_0x2f3e88) {
  return { ..._0x2f3e88, borderWidth: 0 };
}
var Te = class {
  constructor(_0x5f55c7, _0x5d9cfa) {
    ((this._renderService = _0x5f55c7), (this._renderModelManager = _0x5d9cfa));
  }
  async render(_0x2c2ef6, _0x20281e) {
    if (typeof document > "u")
      throw TypeError(
        "Board chart snapshot rendering requires a browser document.",
      );
    let { chartConfig: _0x2a334f, chartStyle: _0x476b77 } =
        this._renderService["createRenderInput"](_0x20281e),
      _0x5f59c5 = we(_0x476b77);
    if (_0x2c2ef6.format === f.ChartImageExportFormat["SVG"])
      return (
        await this._renderModelManager["exportImage"](
          {
            chartId: _0x20281e.chartId,
            config: _0x2a334f,
            style: _0x5f59c5,
            width: _0x2c2ef6.width,
            height: _0x2c2ef6.height,
          },
          { format: _0x2c2ef6.format },
        )
      ).dataUrl;
    let _0x39fe72 = new f.DataUrlImageChartHost(_0x20281e.chartId, {
        width: _0x2c2ef6.width,
        height: _0x2c2ef6.height,
      }),
      _0x1a97c5 = this._renderService["createChartInstance"](
        f.ChartRenderMode["Image"],
      );
    try {
      (_0x1a97c5.bind(_0x39fe72),
        await _0x1a97c5.render({
          chartId: _0x20281e.chartId,
          config: _0x2a334f,
          style: _0x5f59c5,
        }));
      let _0x4c270b = _0x39fe72.getDataUrl();
      if (!_0x4c270b)
        throw Error(
          "Failed to render board chart snapshot: " +
            _0x20281e.unitId +
            "/" +
            _0x20281e.chartId,
        );
      return _0x4c270b;
    } finally {
      (_0x1a97c5.dispose(), _0x39fe72.dispose());
    }
  }
};
let B = class extends a.ChartSnapshotQueue {
  constructor(_0x36ae4d, _0x406d58, _0x333fe9, _0x117388, _0x32f536) {
    super(_0x36ae4d, _0x406d58, _0x32f536 ?? new Te(_0x333fe9, _0x117388));
  }
  getCacheKey(_0x37bfc5) {
    let _0x3adc3c = super.getCacheKey(_0x37bfc5);
    return _0x37bfc5.format === f.ChartImageExportFormat["SVG"]
      ? _0x3adc3c + "::" + _0x37bfc5.format
      : _0x3adc3c;
  }
};
B = S(
  [
    x(0, (0, n.Inject)(n.LocaleService)),
    x(1, (0, n.Inject)(i.BoardChartModelService)),
    x(2, (0, n.Inject)(R)),
    x(3, f.IChartRenderModelManagerService),
    x(4, (0, n.Optional)(Ce)),
  ],
  B,
);
let V = class extends n.Disposable {
  constructor(_0x4e33cc, _0x156dab, _0x26403a, _0x41d829, _0x4cb539) {
    (super(),
      (this._renderContext = _0x4e33cc),
      (this._editSessionService = _0x156dab),
      (this._boardElementService = _0x26403a),
      (this._domLayerService = _0x41d829),
      (this._snapshotService = _0x4cb539),
      b(this, "_activeLayerId", null),
      b(this, "_activeLayerDisposable", null),
      b(this, "_activeChart", null),
      this.disposeWithMe(
        this._editSessionService["activeSession$"].subscribe((_0xd2b442) =>
          this._syncActiveChart(_0xd2b442),
        ),
      ));
  }
  dispose() {
    (this._clearActiveLayer(), super.dispose());
  }
  _syncActiveChart(_0x3edbb8) {
    if (!_0x3edbb8 || _0x3edbb8.unitId !== this._renderContext["unitId"]) {
      this._clearActiveLayer();
      return;
    }
    let _0x2179c4 = this._boardElementService["getElementData"](
        _0x3edbb8.unitId,
        _0x3edbb8.subUnitId,
      ),
      _0x33a4d2 = _0x2179c4[_0x3edbb8.elementId];
    if (
      !_0x33a4d2 ||
      _0x33a4d2.element["type"] !== e.BoardElementType["Chart"] ||
      _0x33a4d2.element["chartId"] !== _0x3edbb8.chartId
    ) {
      this._clearActiveLayer();
      return;
    }
    let _0x2ae5a5 = (0, e.resolveBoardElementWorldBounds)(
      _0x2179c4,
      _0x33a4d2.elementId,
    );
    if (!_0x2ae5a5) {
      this._clearActiveLayer();
      return;
    }
    let _0x3797fc = _0x33a4d2.element,
      _0x424482 = _0x3797fc.chartId,
      _0x322495 = [
        "board-chart-active",
        _0x3edbb8.unitId,
        _0x3edbb8.subUnitId,
        _0x33a4d2.elementId,
      ].join(":");
    if (this._activeLayerId === _0x322495) {
      ((this._activeChart = { chartId: _0x424482, unitId: _0x3edbb8.unitId }),
        this._domLayerService["updateItem"](_0x322495, {
          rect: _0x2ae5a5,
          content: () =>
            (0, d.jsx)(xe, {
              chartId: _0x424482,
              chartElement: _0x3797fc,
              unitId: _0x3edbb8.unitId,
            }),
        }));
      return;
    }
    (this._clearActiveLayer(),
      (this._activeLayerId = _0x322495),
      (this._activeChart = { chartId: _0x424482, unitId: _0x3edbb8.unitId }),
      (this._activeLayerDisposable = this._domLayerService["registerItem"]({
        id: _0x322495,
        unitId: _0x3edbb8.unitId,
        subUnitId: _0x3edbb8.subUnitId,
        elementId: _0x33a4d2.elementId,
        rect: _0x2ae5a5,
        interactive: true,
        zIndex: 1,
        content: () =>
          (0, d.jsx)(xe, {
            chartId: _0x424482,
            chartElement: _0x3797fc,
            unitId: _0x3edbb8.unitId,
          }),
      })));
  }
  _clearActiveLayer() {
    var _0x4ce102;
    let _0x3f8298 = this._activeChart;
    ((_0x4ce102 = this._activeLayerDisposable) == null || _0x4ce102.dispose(),
      (this._activeLayerDisposable = null),
      (this._activeLayerId = null),
      (this._activeChart = null),
      _0x3f8298 &&
        this._snapshotService["invalidateChart"](
          _0x3f8298.unitId,
          _0x3f8298.chartId,
        ));
  }
};
V = S(
  [
    x(1, (0, n.Inject)(T)),
    x(2, e.IBoardElementService),
    x(3, (0, n.Inject)(t.BoardDomLayerService)),
    x(4, (0, n.Inject)(B)),
  ],
  V,
);
let H = class extends n.Disposable {
  constructor(_0x58c297, _0x273466) {
    (super(),
      (this._snapshotService = _0x58c297),
      (this._modelService = _0x273466),
      b(this, "_runtimeStateSubscriptions", new Map()),
      this._listenRuntimeData());
  }
  _listenRuntimeData() {
    (this.disposeWithMe(
      this._modelService["chartModelAdded$"].subscribe((_0x516f23) =>
        this._bindRuntimeState(_0x516f23),
      ),
    ),
      this.disposeWithMe(
        this._modelService["chartModelRemoved$"].subscribe((_0x55d48c) =>
          this._releaseRuntimeState(_0x55d48c),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(() => {
          (this._runtimeStateSubscriptions["forEach"](
            ({ subscription: _0x6c11f }) => _0x6c11f.unsubscribe(),
          ),
            this._runtimeStateSubscriptions["clear"]());
        }),
      ));
  }
  _bindRuntimeState(_0xc4229f) {
    if (this._runtimeStateSubscriptions["has"](_0xc4229f)) return;
    let _0x2b5ef1 = _0xc4229f.model["config"] == null ? 0 : 1,
      _0x424608 = (0, r.combineLatest)([
        _0xc4229f.model["config$"].pipe(
          (0, r.filter)((_0xd6b16a) => _0xd6b16a != null),
        ),
        _0xc4229f.model["style$"],
      ])
        .pipe((0, r.skip)(_0x2b5ef1), (0, r.auditTime)(0))
        .subscribe(() =>
          this._snapshotService["invalidateChart"](
            _0xc4229f.unitId,
            _0xc4229f.chartId,
          ),
        );
    this._runtimeStateSubscriptions["set"](_0xc4229f, {
      subscription: _0x424608,
    });
  }
  _releaseRuntimeState(_0x4535d6) {
    var _0x1ab032;
    ((_0x1ab032 = this._runtimeStateSubscriptions["get"](_0x4535d6)) == null ||
      _0x1ab032.subscription["unsubscribe"](),
      this._runtimeStateSubscriptions["delete"](_0x4535d6));
  }
};
H = S(
  [x(0, (0, n.Inject)(B)), x(1, (0, n.Inject)(i.BoardChartModelService))],
  H,
);
var Ee = "@univerjs-pro/boards-chart-ui",
  De = "1.0.0-insiders.20260907-70fc579";
const U = { scaleX: 1, scaleY: 1 };
function Oe(_0x33ef51) {
  let _0x4ca953 = _0x33ef51.nativeEvent;
  return typeof MouseEvent < "u" && _0x4ca953 instanceof MouseEvent
    ? _0x4ca953
    : undefined;
}
function ke(_0x2bbe96) {
  let _0x343380 = _0x2bbe96.nativeEvent,
    _0xbd9b9f = _0x343380 == null ? undefined : _0x343380.target;
  return typeof Element < "u" && _0xbd9b9f instanceof Element
    ? _0xbd9b9f
    : undefined;
}
function Ae(_0xade5b1) {
  return _0xade5b1.width || _0xade5b1.right - _0xade5b1.left;
}
function je(_0x3b4d15) {
  return _0x3b4d15.height || _0x3b4d15.bottom - _0x3b4d15.top;
}
function W(_0x324be4, _0x25d99b) {
  let _0x4bade3 =
      _0x324be4.clientWidth ||
      (typeof HTMLElement < "u" && _0x324be4 instanceof HTMLElement
        ? _0x324be4.offsetWidth
        : 0),
    _0x1fa6f3 =
      _0x324be4.clientHeight ||
      (typeof HTMLElement < "u" && _0x324be4 instanceof HTMLElement
        ? _0x324be4.offsetHeight
        : 0),
    _0x39e7cd = Ae(_0x25d99b),
    _0x155306 = je(_0x25d99b);
  return {
    scaleX: _0x4bade3 > 0 && _0x39e7cd > 0 ? _0x39e7cd / _0x4bade3 : U.scaleX,
    scaleY: _0x1fa6f3 > 0 && _0x155306 > 0 ? _0x155306 / _0x1fa6f3 : U.scaleY,
  };
}
function Me(_0x1d42d2, _0x1b6a86, _0x390ba6) {
  return {
    left: _0x1d42d2.left + _0x1b6a86.left * _0x390ba6.scaleX,
    right: _0x1d42d2.left + _0x1b6a86.right * _0x390ba6.scaleX,
    top: _0x1d42d2.top + _0x1b6a86.top * _0x390ba6.scaleY,
    bottom: _0x1d42d2.top + _0x1b6a86.bottom * _0x390ba6.scaleY,
  };
}
function Ne(_0x56478f) {
  let _0x4d450a = ke(_0x56478f),
    _0x1cb66e = _0x56478f.hit["bounds"];
  return _0x4d450a && _0x1cb66e
    ? () => {
        let _0x1d5b7c = _0x4d450a.getBoundingClientRect();
        return Me(_0x1d5b7c, _0x1cb66e, W(_0x4d450a, _0x1d5b7c));
      }
    : () => {
        let _0x397f51 =
          _0x4d450a == null ? undefined : _0x4d450a.getBoundingClientRect();
        if (_0x4d450a && _0x397f51 && _0x1cb66e)
          return Me(_0x397f51, _0x1cb66e, W(_0x4d450a, _0x397f51));
        let _0x498c35 = Oe(_0x56478f),
          _0x119137 = _0x4d450a && _0x397f51 ? W(_0x4d450a, _0x397f51) : U,
          _0x1347c3 =
            (_0x498c35 == null ? undefined : _0x498c35.clientX) ??
            (_0x397f51
              ? _0x397f51.left + _0x56478f.localPoint["x"] * _0x119137.scaleX
              : _0x56478f.localPoint["x"]),
          _0x17ca22 =
            (_0x498c35 == null ? undefined : _0x498c35.clientY) ??
            (_0x397f51
              ? _0x397f51.top + _0x56478f.localPoint["y"] * _0x119137.scaleY
              : _0x56478f.localPoint["y"]);
        return {
          left: _0x1347c3,
          right: _0x1347c3 + 1,
          top: _0x17ca22,
          bottom: _0x17ca22 + 1,
        };
      };
}
function Pe(_0x404362) {
  return _0x404362.right <= _0x404362.left || _0x404362.bottom <= _0x404362.top
    ? false
    : typeof window > "u" ||
        (_0x404362.right > 0 &&
          _0x404362.bottom > 0 &&
          _0x404362.left < window.innerWidth &&
          _0x404362.top < window.innerHeight);
}
function Fe(_0x2e2a0b, _0x146981) {
  let _0xe012d = Ne(_0x2e2a0b),
    _0x3dfc07 = _0xe012d(),
    _0xbf2be6 = new r["BehaviorSubject"](_0x3dfc07),
    _0x4a9c78 = new n["DisposableCollection"](),
    _0x194c3a = false,
    _0x281ba6 = false;
  return (
    typeof window < "u" &&
      _0x4a9c78.add(
        (0, r.merge)(
          (0, r.fromEvent)(window, "scroll", { capture: true }),
          (0, r.fromEvent)(window, "resize"),
        )
          .pipe((0, r.throttleTime)(16))
          .subscribe(() => {
            _0x281ba6 ||
              _0x194c3a ||
              ((_0x281ba6 = true),
              queueMicrotask(() => {
                if (((_0x281ba6 = false), _0x194c3a)) return;
                let _0x2dfad1 = _0xe012d();
                if (!Pe(_0x2dfad1)) {
                  _0x146981();
                  return;
                }
                _0xbf2be6.next(_0x2dfad1);
              }));
          }),
      ),
    {
      initialRect: _0x3dfc07,
      anchorRect$: _0xbf2be6.asObservable(),
      visible: Pe(_0x3dfc07),
      dispose: () => {
        ((_0x194c3a = true), _0x4a9c78.dispose(), _0xbf2be6.complete());
      },
    }
  );
}
const Ie = "boards-chart-element-float-menu";
function G(_0xa61a65, _0xaab875) {
  return _0xa61a65 + "::" + _0xaab875;
}
let K = class extends n.Disposable {
  constructor(
    _0x5bcd46,
    _0x3b7fea,
    _0x4ba6b5,
    _0x48b90b,
    _0x3db786,
    _0x3c9051,
    _0x320c36,
    _0x4969a7,
    _0x323d6f,
  ) {
    (super(),
      (this._modelService = _0x5bcd46),
      (this._chartRenderService = _0x3b7fea),
      (this._chartUIService = _0x4ba6b5),
      (this._editSessionService = _0x48b90b),
      (this._adapterRegistry = _0x3db786),
      (this._canvasPopupService = _0x3c9051),
      (this._renderManagerService = _0x320c36),
      (this._univerInstanceService = _0x4969a7),
      (this._injector = _0x323d6f),
      b(this, "_chartEventDisposables", new Map()),
      b(this, "_popupDisposable", null),
      b(this, "_popupRuntimeKey", null),
      b(this, "_popupSessionKey", null),
      this._registerAdapter(),
      this._subscribeChartEvents());
  }
  dispose() {
    (this._closePopup(),
      this._chartEventDisposables["forEach"]((_0x33da1d) =>
        _0x33da1d.dispose(),
      ),
      this._chartEventDisposables["clear"](),
      super.dispose());
  }
  _registerAdapter() {
    let _0x5c8817 = (0, a.createChartElementFloatMenuAdapter)({
      chartUIService: this._chartUIService,
      getHostAdapter: (_0x15e58a) => {
        this._modelService["setActiveChartById"](
          _0x15e58a.unitId,
          _0x15e58a.chartId,
        );
        let _0x543b6f = this._modelService["getChartModel"](
            _0x15e58a.unitId,
            _0x15e58a.chartId,
          ),
          _0x311af8 = this._univerInstanceService["getUnit"](
            _0x15e58a.unitId,
            n.UniverInstanceType["UNIVER_BOARD"],
          ),
          _0x5984b0 = this._editSessionService["getActiveSession"]();
        if (!(!_0x543b6f || !_0x311af8 || !_0x5984b0))
          return new a["ChartHostAdapter"](
            _0x543b6f.model,
            new i["BoardChartConfigAdapter"]({
              unitId: _0x15e58a.unitId,
              pageId: _0x5984b0.subUnitId,
              chartId: _0x15e58a.chartId,
              elementId: _0x5984b0.elementId,
              boardModel: _0x311af8,
              injector: this._injector,
            }),
          );
      },
      close: () => this._closePopup(),
      openFullPanel: (_0x436d4e) => {
        this._modelService["setActiveChartById"](
          _0x436d4e.unitId,
          _0x436d4e.chartId,
        );
        let _0x36ce3c = this._editSessionService["getActiveSession"]();
        ((_0x36ce3c == null ? undefined : _0x36ce3c.unitId) ===
          _0x436d4e.unitId &&
          _0x36ce3c.chartId === _0x436d4e.chartId &&
          this._editSessionService["open"]({
            ..._0x36ce3c,
            route: (0, a.resolveChartEditPanelRoute)(_0x436d4e.target),
            source: "programmatic",
          }),
          this._closePopup());
      },
    });
    this.disposeWithMe(this._adapterRegistry["register"](Ie, _0x5c8817));
  }
  _subscribeChartEvents() {
    (this.disposeWithMe(
      this._modelService["chartModelAdded$"].subscribe((_0x17c93e) => {
        let _0x2b9508 = G(_0x17c93e.unitId, _0x17c93e.chartId);
        if (this._chartEventDisposables["has"](_0x2b9508)) return;
        let _0x2ab00d = new n["DisposableCollection"]();
        (_0x2ab00d.add(
          this._chartRenderService["on"](
            _0x17c93e.unitId,
            _0x17c93e.chartId,
            "click",
            (_0x2a0656) => {
              this._openFloatMenu(
                _0x17c93e.unitId,
                _0x17c93e.chartId,
                _0x2a0656,
              );
            },
          ),
        ),
          this._chartEventDisposables["set"](_0x2b9508, _0x2ab00d));
      }),
    ),
      this.disposeWithMe(
        this._modelService["chartModelRemoved$"].subscribe((_0x166f23) => {
          var _0x524737;
          let _0x1ffa63 = G(_0x166f23.unitId, _0x166f23.chartId);
          ((_0x524737 = this._chartEventDisposables["get"](_0x1ffa63)) ==
            null || _0x524737.dispose(),
            this._chartEventDisposables["delete"](_0x1ffa63),
            this._popupRuntimeKey === _0x1ffa63 && this._closePopup());
        }),
      ),
      this.disposeWithMe(
        this._modelService["activeRuntimeModel$"].subscribe((_0x5e8eca) => {
          let _0x4f18d2 = _0x5e8eca
            ? G(_0x5e8eca.unitId, _0x5e8eca.chartId)
            : null;
          (!_0x4f18d2 ||
            (this._popupRuntimeKey && _0x4f18d2 !== this._popupRuntimeKey)) &&
            this._closePopup();
        }),
      ));
  }
  _openFloatMenu(_0x396e09, _0x2a38b2, _0x381e3f) {
    if (
      !this._chartRenderService["isElementEditModeActive"](_0x396e09, _0x2a38b2)
    )
      return;
    let _0x4bde63 = this._modelService["getChartModel"](_0x396e09, _0x2a38b2),
      _0x30f093 = _0x4bde63
        ? (0, a.resolveChartElementSelection)(_0x4bde63.model, _0x381e3f.hit)
        : undefined;
    if (!_0x4bde63 || !_0x30f093) {
      this._closePopup();
      return;
    }
    let _0x1bae17 = JSON.stringify([_0x396e09, _0x2a38b2, _0x30f093.target]);
    if (
      (this._popupDisposable && this._popupSessionKey === _0x1bae17) ||
      (this._modelService["setActiveChartRuntime"](_0x4bde63),
      this._closePopup(),
      !_0x30f093.showFloatMenu)
    )
      return;
    let _0x49af90 = this._renderManagerService["getRenderUnitById"](_0x396e09);
    if (!_0x49af90) return;
    let _0x3d2acf = Fe(_0x381e3f, () =>
      this._clearHiddenSelectedTarget(_0x396e09, _0x2a38b2),
    );
    if (!_0x3d2acf.visible) {
      _0x3d2acf.dispose();
      return;
    }
    let _0x4c8adb = this._canvasPopupService["addPopup"]({
        componentKey: a.CHART_ELEMENT_FLOAT_MENU_COMPONENT,
        direction: "top-center",
        offset: [0, 8],
        unitId: _0x396e09,
        subUnitId: "",
        anchorRect: _0x3d2acf.initialRect,
        anchorRect$: _0x3d2acf.anchorRect$,
        canvasElement: _0x49af90.engine["getCanvasElement"](),
        extraProps: {
          unitId: _0x396e09,
          chartId: _0x2a38b2,
          element: _0x381e3f.hit,
          target: _0x30f093.target,
          adapterKey: Ie,
        },
      }),
      _0x3d97d6 = new n["DisposableCollection"]();
    (_0x3d97d6.add(_0x3d2acf),
      _0x3d97d6.add({
        dispose: () => this._canvasPopupService["removePopup"](_0x4c8adb),
      }),
      (this._popupDisposable = _0x3d97d6),
      (this._popupRuntimeKey = G(_0x396e09, _0x2a38b2)),
      (this._popupSessionKey = _0x1bae17));
  }
  _closePopup() {
    var _0x507c99;
    ((_0x507c99 = this._popupDisposable) == null || _0x507c99.dispose(),
      (this._popupDisposable = null),
      (this._popupRuntimeKey = null),
      (this._popupSessionKey = null));
  }
  _clearHiddenSelectedTarget(_0x2de14c, _0x166f3d) {
    (this._closePopup(),
      this._chartRenderService["isElementEditModeActive"](
        _0x2de14c,
        _0x166f3d,
      ) &&
        (this._chartRenderService["setElementEditMode"](
          _0x2de14c,
          _0x166f3d,
          false,
        ),
        this._chartRenderService["setElementEditMode"](
          _0x2de14c,
          _0x166f3d,
          true,
        )));
  }
};
K = S(
  [
    x(0, (0, n.Inject)(i.BoardChartModelService)),
    x(1, (0, n.Inject)(R)),
    x(2, E),
    x(3, (0, n.Inject)(T)),
    x(4, (0, n.Inject)(a.ChartElementFloatMenuAdapterRegistry)),
    x(5, (0, n.Inject)(l.ICanvasPopupService)),
    x(6, m.IRenderManagerService),
    x(7, n.IUniverInstanceService),
    x(8, (0, n.Inject)(n.Injector)),
  ],
  K,
);
function Le(_0xecc02e, _0xc5c19d, _0x493051, _0x4e4d9a, _0x2274e5) {
  let _0x146975 = {
    chartType: _0xc5c19d,
    data: _0x493051,
    ...(_0x2274e5 ? { dataSource: _0x2274e5 } : {}),
    ...(_0x4e4d9a ? { style: _0x4e4d9a } : {}),
  };
  return { ..._0xecc02e, options: _0x146975 };
}
function Re(_0x4bc13f) {
  let _0x2b6aec = (0, l.useDependency)(n.ICommandService),
    _0x4f8380 = (0, l.useDependency)(n.LocaleService),
    _0x3f8b23 = (0, u.useMemo)(
      () =>
        (0, a.buildChartTypeSelectOptions)(
          a.CHART_TYPE_CATALOG["map"]((_0x556fe4) => ({
            ..._0x556fe4,
            label: _0x4f8380.t(
              "boards-chart-ui.chartTypes." + _0x556fe4.labelId,
            ),
          })),
        ),
      [_0x4f8380],
    ),
    [_0xf7b106, _0x304d64] = (0, u.useState)(String(f.ChartTypeBits["Column"])),
    _0x1eaf4e = _0x3f8b23.find((_0x252acd) => _0x252acd.value === _0xf7b106),
    _0x521fa3 =
      (_0x1eaf4e == null ? undefined : _0x1eaf4e.chartType) ??
      f.ChartTypeBits["Column"],
    [_0x1f932f, _0x56c723] = (0, u.useState)(() =>
      i.DEFAULT_BOARD_CHART_VALUES["map"]((_0x122fb6) => [..._0x122fb6]),
    ),
    [_0x1213d9, _0x1fb54c] = (0, u.useState)("inline"),
    [_0x3607b4, _0x371907] = (0, u.useState)(null),
    [_0x442df6, _0x3737af] = (0, u.useState)([]),
    [_0x52d84d, _0x4e8c97] = (0, u.useState)(null),
    _0xda9119 = {
      [a.InlineChartCreationIssueCode["UnknownOption"]]: _0x4f8380.t(
        "boards-chart-ui.common.insertChartFailed",
      ),
      [a.InlineChartCreationIssueCode["EmptyData"]]: _0x4f8380.t(
        "boards-chart-ui.common.tableDataEmpty",
      ),
      [a.InlineChartCreationIssueCode["InvalidCandlestickData"]]: _0x4f8380.t(
        "boards-chart-ui.candlestick.columnsError",
      ),
    },
    _0x2312b5 = (_0x270e34) =>
      (0, a.createChartInlineStarterData)(_0x270e34, {
        candlestickClose: _0x4f8380.t("boards-chart-ui.candlestick.close"),
        candlestickHigh: _0x4f8380.t("boards-chart-ui.candlestick.high"),
        candlestickLow: _0x4f8380.t("boards-chart-ui.candlestick.low"),
        candlestickOpen: _0x4f8380.t("boards-chart-ui.candlestick.open"),
        category: _0x4f8380.t("boards-chart-ui.common.category"),
        chordSource: _0x4f8380.t("boards-chart-ui.chord.source"),
        chordTarget: _0x4f8380.t("boards-chart-ui.chord.target"),
        label: _0x4f8380.t("boards-chart-ui.common.label"),
        sunburstHierarchy: _0x4f8380.t("boards-chart-ui.sunburst.hierarchy"),
        value: _0x4f8380.t("boards-chart-ui.common.value"),
        valueField: _0x4f8380.t("boards-chart-ui.common.valueField"),
      });
  return (0, d.jsxs)("div", {
    className: "univer-flex univer-w-full univer-flex-col univer-gap-4",
    children: [
      (0, d.jsxs)("div", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [
          (0, d.jsx)("div", {
            className:
              "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
            children: _0x4f8380.t("boards-chart-ui.common.chartType"),
          }),
          (0, d.jsx)(s.Select, {
            className: "univer-w-full\x20!univer-min-w-0",
            value: _0xf7b106,
            options: _0x3f8b23,
            onChange: (_0x5404d0) => {
              var _0x5c1b0f;
              _0x304d64(_0x5404d0);
              let _0x2dae95 =
                  ((_0x5c1b0f = _0x3f8b23.find(
                    (_0x24b6eb) => _0x24b6eb.value === _0x5404d0,
                  )) == null
                    ? undefined
                    : _0x5c1b0f.chartType) ?? Number(_0x5404d0),
                _0x2c9fc9 = _0x2312b5(_0x2dae95);
              _0x2c9fc9 && _0x56c723(_0x2c9fc9);
            },
          }),
        ],
      }),
      (0, d.jsx)(a.ChartReferencedDataSourceEditor, {
        mode: _0x1213d9,
        inlineContent: (0, d.jsx)(a.ChartInlineTableEditor, {
          values: _0x1f932f,
          minColumns: (0, a.getChartInlineTableMinColumns)(_0x521fa3),
          parsePastedText: f.parseInlineChartTable,
          onChange: _0x56c723,
        }),
        onModeChange: (_0x216b8b) => {
          (_0x1fb54c(_0x216b8b), _0x371907(null), _0x3737af([]));
        },
        onPreviewChange: (_0x5d4fef, _0x505447) => {
          _0x5d4fef &&
          _0x505447.status === f.ChartDataSourceRuntimeStatus["READY"] &&
          _0x505447.values
            ? (_0x371907({ source: _0x5d4fef }),
              _0x3737af(_0x505447.values["map"]((_0x39e5e1) => [..._0x39e5e1])))
            : (_0x371907(null), _0x3737af([]));
        },
      }),
      _0x52d84d &&
        (0, d.jsx)("div", {
          className:
            "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
          children: _0x52d84d,
        }),
      (0, d.jsxs)("div", {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [
          _0x4bc13f.onCancel &&
            (0, d.jsx)(s.Button, {
              type: "button",
              variant: "default",
              onClick: _0x4bc13f.onCancel,
              children: _0x4f8380.t("boards-chart-ui.common.cancel"),
            }),
          (0, d.jsx)(s.Button, {
            type: "button",
            variant: "primary",
            disabled: _0x1213d9 === "referenced" && !_0x3607b4,
            onClick: async () => {
              var _0x35ce29;
              let _0x37d3dc = (0, a.tryBuildInlineChartCreationPlan)({
                optionId: _0xf7b106,
                values: _0x1213d9 === "referenced" ? _0x442df6 : _0x1f932f,
              });
              if (!_0x37d3dc.ok) {
                _0x4e8c97(_0xda9119[_0x37d3dc.issue["code"]]);
                return;
              }
              if (
                !(await _0x2b6aec.executeCommand(
                  e.InsertBoardChartCommand["id"],
                  Le(
                    _0x4bc13f.insertParams,
                    _0x37d3dc.plan["chartType"],
                    _0x37d3dc.plan["values"],
                    _0x37d3dc.plan["style"],
                    _0x1213d9 === "referenced"
                      ? (_0x3607b4 ?? undefined)
                      : undefined,
                  ),
                ))
              ) {
                _0x4e8c97(
                  _0x4f8380.t("boards-chart-ui.common.insertChartFailed"),
                );
                return;
              }
              (_0x4e8c97(null),
                (_0x35ce29 = _0x4bc13f.onInserted) == null ||
                  _0x35ce29.call(_0x4bc13f));
            },
            children: _0x4f8380.t("boards-chart-ui.common.insert"),
          }),
        ],
      }),
    ],
  });
}
let q = class extends n.Disposable {
  constructor(_0x5bb966) {
    (super(), (this._componentManager = _0x5bb966), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](M, me)),
      this.disposeWithMe(this._componentManager["register"](ie, ae)),
      this.disposeWithMe(
        this._componentManager["register"](
          t.BOARD_INSERT_CHART_PANEL_COMPONENT,
          Re,
        ),
      ),
      this.disposeWithMe(this._componentManager["register"](O, re)));
  }
};
q = S([x(0, (0, n.Inject)(l.ComponentManager))], q);
var ze = class extends m.Image {
  constructor(_0xa6a1a2, _0x21587a) {
    (super(_0xa6a1a2, _0x21587a),
      b(this, "_element", undefined),
      b(this, "_frameStyle", undefined),
      (this._element = _0x21587a.element),
      (this._frameStyle = _0x21587a.frameStyle),
      this._attachNativeLoadHandlers());
  }
  updateElement(_0xe3a19b) {
    ((this._element = _0xe3a19b), this.makeDirty(true));
  }
  updateFrameStyle(_0x12ca98) {
    Be(this._frameStyle, _0x12ca98) ||
      ((this._frameStyle = _0x12ca98), this.makeDirty(true));
  }
  getElement() {
    return this._element;
  }
  getFrameStyle() {
    return this._frameStyle;
  }
  changeChartSource(_0x401f9d) {
    (this._native ??
      ((this._native = document.createElement("img")),
      (this._native["crossOrigin"] = "anonymous")),
      this._attachNativeLoadHandlers(),
      (this._native["src"] = _0x401f9d));
  }
  _draw(_0x4e8dab, _0x312b54, _0x34cfe9 = this.width, _0x3d0fbd = this.height) {
    let _0x53dd9f = this._frameStyle,
      _0x19a384 = ge({ width: _0x34cfe9, height: _0x3d0fbd }, _0x53dd9f);
    (_0x4e8dab.save(),
      _0x4e8dab.translate(-_0x34cfe9 / 2, -_0x3d0fbd / 2),
      J(_0x4e8dab, 0, 0, _0x34cfe9, _0x3d0fbd, _0x53dd9f.radius),
      (_0x4e8dab.fillStyle = _0x53dd9f.fill),
      _0x4e8dab.fill(),
      _0x4e8dab.restore(),
      this._drawChartImage(
        _0x4e8dab,
        _0x34cfe9,
        _0x3d0fbd,
        _0x19a384,
        _0x53dd9f,
      ),
      this._drawFrameStroke(_0x4e8dab, _0x34cfe9, _0x3d0fbd, _0x53dd9f));
  }
  _drawChartImage(_0x31a1cd, _0x49d6ef, _0x455032, _0x1d54b3, _0x42895f) {
    var _0x5bb7dc;
    !((_0x5bb7dc = this._native) != null && _0x5bb7dc.complete) ||
      this._native["naturalWidth"] <= 0 ||
      this._native["naturalHeight"] <= 0 ||
      (_0x31a1cd.save(),
      _0x31a1cd.translate(-_0x49d6ef / 2, -_0x455032 / 2),
      J(
        _0x31a1cd,
        _0x1d54b3.left,
        _0x1d54b3.top,
        _0x1d54b3.width,
        _0x1d54b3.height,
        Math.max(0, _0x42895f.radius - _0x42895f.strokeWidth),
      ),
      _0x31a1cd.clip(),
      _0x31a1cd.drawImage(
        this._native,
        _0x1d54b3.left,
        _0x1d54b3.top,
        _0x1d54b3.width,
        _0x1d54b3.height,
      ),
      _0x31a1cd.restore());
  }
  _drawFrameStroke(_0xae4e1d, _0xc95362, _0x2ecb1f, _0x422d6b) {
    if (_0x422d6b.strokeWidth <= 0) return;
    let _0x537461 = _e({ width: _0xc95362, height: _0x2ecb1f }, _0x422d6b);
    (_0xae4e1d.save(),
      _0xae4e1d.translate(-_0xc95362 / 2, -_0x2ecb1f / 2),
      J(
        _0xae4e1d,
        _0x537461.left,
        _0x537461.top,
        _0x537461.width,
        _0x537461.height,
        _0x537461.radius,
      ),
      (_0xae4e1d.strokeStyle = _0x422d6b.stroke),
      (_0xae4e1d.lineWidth = _0x422d6b.strokeWidth),
      _0xae4e1d.stroke(),
      _0xae4e1d.restore());
  }
  _notifyScene() {
    let _0x198734 = this.getScene();
    (this.makeDirty(true),
      _0x198734 == null || _0x198734.onFileLoaded$["emitEvent"](this.oKey));
  }
  _attachNativeLoadHandlers() {
    this._native &&
      ((this._native["onload"] = () => {
        (this.makeDirty(true), this._notifyScene());
      }),
      (this._native["onerror"] = () => {
        this._notifyScene();
      }));
  }
};
function J(_0x5b4e34, _0x2d64c3, _0x2e6301, _0x1fbf46, _0xf09234, _0x34b249) {
  let _0x3defc9 = Math.min(_0x34b249 || 0, _0x1fbf46 / 2, _0xf09234 / 2);
  if ((_0x5b4e34.beginPath(), !_0x3defc9)) {
    (_0x5b4e34.rect(_0x2d64c3, _0x2e6301, _0x1fbf46, _0xf09234),
      _0x5b4e34.closePath());
    return;
  }
  (_0x5b4e34.moveTo(_0x2d64c3 + _0x3defc9, _0x2e6301),
    _0x5b4e34.lineTo(_0x2d64c3 + _0x1fbf46 - _0x3defc9, _0x2e6301),
    _0x5b4e34.arc(
      _0x2d64c3 + _0x1fbf46 - _0x3defc9,
      _0x2e6301 + _0x3defc9,
      _0x3defc9,
      (Math.PI * 3) / 2,
      0,
      false,
    ),
    _0x5b4e34.lineTo(_0x2d64c3 + _0x1fbf46, _0x2e6301 + _0xf09234 - _0x3defc9),
    _0x5b4e34.arc(
      _0x2d64c3 + _0x1fbf46 - _0x3defc9,
      _0x2e6301 + _0xf09234 - _0x3defc9,
      _0x3defc9,
      0,
      Math.PI / 2,
      false,
    ),
    _0x5b4e34.lineTo(_0x2d64c3 + _0x3defc9, _0x2e6301 + _0xf09234),
    _0x5b4e34.arc(
      _0x2d64c3 + _0x3defc9,
      _0x2e6301 + _0xf09234 - _0x3defc9,
      _0x3defc9,
      Math.PI / 2,
      Math.PI,
      false,
    ),
    _0x5b4e34.lineTo(_0x2d64c3, _0x2e6301 + _0x3defc9),
    _0x5b4e34.arc(
      _0x2d64c3 + _0x3defc9,
      _0x2e6301 + _0x3defc9,
      _0x3defc9,
      Math.PI,
      (Math.PI * 3) / 2,
      false,
    ),
    _0x5b4e34.closePath());
}
function Be(_0x319d2b, _0x11fe44) {
  return (
    _0x319d2b.fill === _0x11fe44.fill &&
    _0x319d2b.stroke === _0x11fe44.stroke &&
    _0x319d2b.strokeWidth === _0x11fe44.strokeWidth &&
    _0x319d2b.radius === _0x11fe44.radius
  );
}
function Ve(_0x3fdf62) {
  let { element: _0x35414b } = _0x3fdf62.elementDataItem;
  return _0x35414b.type === e.BoardElementType["Chart"] ? _0x35414b : null;
}
let Y = class {
  constructor(_0x4a67b6, _0x4b5bf3, _0x12bda3, _0x23e640) {
    ((this._themeService = _0x4a67b6),
      (this._snapshotService = _0x4b5bf3),
      (this._resourceService = _0x12bda3),
      (this._renderService = _0x23e640),
      b(this, "name", "chart"),
      b(this, "_snapshotRefreshers", new WeakMap()));
  }
  createObject(_0x55b77f) {
    let _0xe87cbe = Ve(_0x55b77f);
    if (!_0xe87cbe) return null;
    let _0x331600 = Math.max(1, _0x55b77f.bounds["width"]),
      _0x5d0669 = Math.max(1, _0x55b77f.bounds["height"]),
      _0x5d95a3 = new ze(_0x55b77f.key, {
        url: "data:image/svg+xml;charset=utf-8,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20100%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%22159%22%20height%3D%2299%22%20rx%3D%225%22%20fill%3D%22%23f8fafc%22%20stroke%3D%22%2394a3b8%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M26%2070V47M52%2070V32M78%2070V55M104%2070V40M130%2070V25%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20%2076H140%22%20stroke%3D%22%23cbd5e1%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A",
        left: _0x55b77f.bounds["left"],
        top: _0x55b77f.bounds["top"],
        width: _0x331600,
        height: _0x5d0669,
        angle: _0x55b77f.bounds["angle"],
        flipX: _0x55b77f.bounds["flipX"],
        flipY: _0x55b77f.bounds["flipY"],
        zIndex: _0x55b77f.zIndex,
        visible: _0xe87cbe.visible !== false,
        evented: true,
        forceRender: true,
        element: _0xe87cbe,
        frameStyle: this._resolveFrameStyle(_0x55b77f.unitId, _0xe87cbe),
      });
    return (
      this._watchSnapshotUpdates(
        _0x5d95a3,
        this._requestSnapshotForObject(_0x55b77f.unitId, _0x5d95a3),
        _0x55b77f.unitId,
      ),
      _0x5d95a3
    );
  }
  syncObject(_0x1501f3, _0x3afaf6) {
    var _0x3b55e1;
    if (!(_0x1501f3 instanceof ze)) return false;
    let _0x3f6d5d = Ve(_0x3afaf6);
    return _0x3f6d5d
      ? (_0x3afaf6.preserveTransform ||
          _0x1501f3.transformByState(_0x3afaf6.bounds),
        _0x1501f3.updateElement(_0x3f6d5d),
        this._updateFrameStyle(_0x3afaf6.unitId, _0x1501f3),
        (_0x3b55e1 = this._snapshotRefreshers["get"](_0x1501f3)) == null ||
          _0x3b55e1(),
        true)
      : false;
  }
  _watchSnapshotUpdates(_0x134c5a, _0x1da440, _0xaf1bf8) {
    if (!_0x1da440) return;
    let _0x175a4e = null,
      _0x2aa01a = null,
      _0x5205b4 = false,
      _0x21912f = (_0x1eeedf) => {
        if (_0x2aa01a !== _0x1eeedf) {
          if (
            (_0x175a4e == null || _0x175a4e.unsubscribe(),
            (_0x175a4e = null),
            (_0x2aa01a = _0x1eeedf),
            _0x1eeedf.status === "ready" && _0x1eeedf.dataUrl)
          ) {
            _0x134c5a.changeChartSource(_0x1eeedf.dataUrl);
            return;
          }
          _0x1eeedf.status === "pending" &&
            (_0x175a4e = this._snapshotService["snapshotUpdated$"].subscribe(
              (_0x293cd1) => {
                if (
                  _0x293cd1 !== _0x1eeedf ||
                  _0x293cd1.status !== "ready" ||
                  !_0x293cd1.dataUrl
                ) {
                  if (
                    _0x293cd1 === _0x1eeedf &&
                    _0x293cd1.status === "error" &&
                    !_0x5205b4
                  ) {
                    _0x5205b4 = true;
                    let _0x17b068 = this._requestSnapshotForObject(
                      _0xaf1bf8,
                      _0x134c5a,
                    );
                    _0x17b068 && _0x21912f(_0x17b068);
                  }
                  return;
                }
                (_0x134c5a.changeChartSource(_0x293cd1.dataUrl),
                  _0x175a4e == null || _0x175a4e.unsubscribe(),
                  (_0x175a4e = null));
              },
            ));
        }
      };
    _0x21912f(_0x1da440);
    let _0x2cbddf = () => {
      _0x5205b4 = false;
      let _0x48d141 = this._requestSnapshotForObject(_0xaf1bf8, _0x134c5a);
      _0x48d141 && _0x21912f(_0x48d141);
    };
    this._snapshotRefreshers["set"](_0x134c5a, _0x2cbddf);
    let _0x3a3735 = this._snapshotService["chartInvalidated$"].subscribe(
      (_0x2bf69f) => {
        _0x2bf69f.unitId === _0xaf1bf8 &&
          _0x2bf69f.chartId === _0x134c5a.getElement().chartId &&
          _0x2cbddf();
      },
    );
    _0x134c5a.onDispose$["subscribeEvent"](() => {
      (_0x175a4e == null || _0x175a4e.unsubscribe(),
        _0x3a3735.unsubscribe(),
        this._snapshotRefreshers["delete"](_0x134c5a));
    });
  }
  _requestSnapshotForObject(_0x51b7eb, _0xbfb1fc) {
    let _0x2f3c67 = this._updateFrameStyle(_0x51b7eb, _0xbfb1fc),
      _0x455915 = ge(
        {
          width: Math.max(1, _0xbfb1fc.width),
          height: Math.max(1, _0xbfb1fc.height),
        },
        _0x2f3c67,
      );
    return this._snapshotService["requestSnapshot"]({
      unitId: _0x51b7eb,
      chartId: _0xbfb1fc.getElement().chartId,
      width: _0x455915.width,
      height: _0x455915.height,
      mode: "main",
    });
  }
  _updateFrameStyle(_0x1a9071, _0x17e145) {
    let _0x413811 = this._resolveFrameStyle(_0x1a9071, _0x17e145.getElement());
    return (_0x17e145.updateFrameStyle(_0x413811), _0x413811);
  }
  _resolveFrameStyle(_0x4535ed, _0x22f835) {
    var _0x5aebc8;
    let _0x33d5cd =
      (_0x5aebc8 = this._resourceService["getChart"](
        _0x4535ed,
        _0x22f835.chartId,
      )) == null
        ? undefined
        : _0x5aebc8.style;
    return L({
      chartStyle: _0x33d5cd,
      chartElement: _0x22f835,
      hostFill: _0x33d5cd
        ? this._renderService["getHostStyle"](_0x33d5cd).fill
        : undefined,
      isDarkMode: this._themeService["darkMode"],
    });
  }
};
Y = S(
  [
    x(0, (0, n.Inject)(n.ThemeService)),
    x(1, (0, n.Inject)(B)),
    x(2, (0, n.Inject)(i.BoardChartResourceService)),
    x(3, (0, n.Inject)(R)),
  ],
  Y,
);
function He(_0x47534e) {
  return _0x47534e.type === e.BoardElementType["Chart"];
}
let X = class {
  constructor(_0xb63aaf) {
    ((this._resourceService = _0xb63aaf), b(this, "key", "board-chart"));
  }
  collect(_0x2aa7f5) {
    let _0x46c1cd = {},
      _0xb534de = {},
      _0x1c63c2 = {};
    return (
      _0x2aa7f5.elements["forEach"]((_0x45ad4f) => {
        if (!He(_0x45ad4f)) return;
        let _0x86e324 = this._resourceService["getChart"](
            _0x2aa7f5.unitId,
            _0x45ad4f.chartId,
          ),
          _0x2d5f58 = _0x86e324
            ? this._resourceService["getDataSource"](
                _0x2aa7f5.unitId,
                _0x86e324.dataSourceId,
              )
            : undefined;
        !_0x86e324 ||
          !_0x2d5f58 ||
          ((_0x46c1cd[_0x86e324.id] = n.Tools["deepClone"](_0x86e324)),
          (_0xb534de[_0x2d5f58.id] = _0x2d5f58),
          (_0x1c63c2[_0x45ad4f.id] = _0x86e324.id));
      }),
      Object.keys(_0x46c1cd).length === 0
        ? null
        : {
            charts: _0x46c1cd,
            dataSources: _0xb534de,
            chartIdByElementId: _0x1c63c2,
          }
    );
  }
  preparePaste(_0x2a2120) {
    if (!Ue(_0x2a2120.payload)) return null;
    let _0xd72b2f = _0x2a2120.payload,
      _0x3b1fde = new Map();
    _0x2a2120.elementIdMap["forEach"]((_0x34889c, _0x1e9a09) => {
      _0x3b1fde.set(_0x34889c, _0x1e9a09);
    });
    let _0x18b697 = new Map(),
      _0x285712 = new Map(),
      _0x5222fd = _0x2a2120.elements["map"]((_0x402abc) => {
        if (!He(_0x402abc)) return _0x402abc;
        let _0x47013b = _0x3b1fde.get(_0x402abc.id),
          _0x31fa2e = _0x47013b
            ? _0xd72b2f.chartIdByElementId[_0x47013b]
            : undefined;
        if (!_0x31fa2e || !_0xd72b2f.charts[_0x31fa2e]) return _0x402abc;
        let _0x205610 = _0x18b697.get(_0x31fa2e);
        return (
          _0x205610 ||
            ((_0x205610 = (0, n.generateRandomId)(6)),
            _0x18b697.set(_0x31fa2e, _0x205610)),
          { ..._0x402abc, chartId: _0x205610 }
        );
      });
    _0x18b697.forEach((_0x436041, _0xb2e51b) => {
      var _0x1540ff;
      let _0x276792 =
        (_0x1540ff = _0xd72b2f.charts[_0xb2e51b]) == null
          ? undefined
          : _0x1540ff.dataSourceId;
      _0x276792 &&
        !_0x285712.has(_0x276792) &&
        _0x285712.set(_0x276792, (0, n.generateRandomId)(6));
    });
    let _0x4292cf = [];
    _0x285712.forEach((_0x505a2f, _0x7ea54) => {
      let _0x95869e = _0xd72b2f.dataSources[_0x7ea54];
      _0x95869e && _0x4292cf.push({ ..._0x95869e, id: _0x505a2f });
    });
    let _0x59307b = [];
    return (
      _0x18b697.forEach((_0x3b256f, _0x1b19c2) => {
        let _0x4890af = _0xd72b2f.charts[_0x1b19c2],
          _0x392214 = _0x4890af
            ? _0x285712.get(_0x4890af.dataSourceId)
            : undefined;
        !_0x4890af ||
          !_0x392214 ||
          _0x59307b.push({
            ..._0x4890af,
            id: _0x3b256f,
            dataSourceId: _0x392214,
          });
      }),
      _0x59307b.length === 0
        ? null
        : {
            elements: _0x5222fd,
            redoMutations: [
              ..._0x4292cf.map((_0x53411a) => ({
                id: i.SetBoardChartDataSourceMutation["id"],
                params: {
                  unitId: _0x2a2120.targetUnitId,
                  dataSource: _0x53411a,
                },
              })),
              ..._0x59307b.map((_0x43e6bc) => ({
                id: i.SetBoardChartSnapshotMutation["id"],
                params: { unitId: _0x2a2120.targetUnitId, chart: _0x43e6bc },
              })),
            ],
            undoMutations: [
              ..._0x59307b.map((_0x3a67c5) => ({
                id: i.RemoveBoardChartSnapshotMutation["id"],
                params: {
                  unitId: _0x2a2120.targetUnitId,
                  chartId: _0x3a67c5.id,
                },
              })),
              ..._0x4292cf.map((_0x59ff48) => ({
                id: i.RemoveBoardChartDataSourceMutation["id"],
                params: {
                  unitId: _0x2a2120.targetUnitId,
                  dataSourceId: _0x59ff48.id,
                },
              })),
            ],
          }
    );
  }
};
X = S([x(0, (0, n.Inject)(i.BoardChartResourceService))], X);
function Ue(_0x19b9eb) {
  if (!_0x19b9eb || typeof _0x19b9eb != "object") return false;
  let _0x3797d6 = _0x19b9eb;
  return (
    !!_0x3797d6.charts &&
    !!_0x3797d6.dataSources &&
    !!_0x3797d6.chartIdByElementId
  );
}
let Z = class extends n.Disposable {
  constructor(_0x58e540, _0x3f48c9) {
    (super(),
      (this._snapshotService = _0x3f48c9),
      this.disposeWithMe(_0x58e540.register(this)));
  }
  supports(_0x1a8c3a) {
    return "unitId" in _0x1a8c3a && "getElement" in _0x1a8c3a;
  }
  exportImage(_0x316141, _0x45aabd) {
    if (!this.supports(_0x316141)) return Promise.resolve(undefined);
    let _0x4a320f = _0x316141.getInfo().size;
    return this._snapshotService["exportImage"]({
      unitId: _0x316141.unitId,
      chartId: _0x316141.getId(),
      width: Math.max(
        1,
        (_0x4a320f == null ? undefined : _0x4a320f.width) ?? 1,
      ),
      height: Math.max(
        1,
        (_0x4a320f == null ? undefined : _0x4a320f.height) ?? 1,
      ),
      format: _0x45aabd == null ? undefined : _0x45aabd.format,
      mode: "main",
    });
  }
};
Z = S(
  [x(0, (0, n.Inject)(a.ChartImageExportService)), x(1, (0, n.Inject)(B))],
  Z,
);
const We = "UNIVER_BOARDS_CHART_UI_PLUGIN";
let Q = class extends n.Plugin {
  constructor(_0x2f10dc = g, _0x6bb0cf, _0x5dd1dc, _0x34306d) {
    (super(),
      (this._config = _0x2f10dc),
      (this._injector = _0x6bb0cf),
      (this._configService = _0x5dd1dc),
      (this._renderManagerService = _0x34306d),
      b(this, "_adapter", null));
    let { ..._0x49da3b } = (0, n.merge)({}, g, this._config);
    this._configService["setConfig"](h, _0x49da3b);
  }
  onStarting() {
    (this.disposeWithMe(
      this._injector["get"](n.ICommandService).registerCommand(oe),
    ),
      [
        [R],
        [B],
        [Z],
        [E, { useClass: D }],
        [j],
        [T],
        [K],
        [Y],
        [X],
        [H],
        [q],
      ].forEach((_0x117d3c) => this._injector["add"](_0x117d3c)),
      (0, n.touchDependencies)(this._injector, [
        [R],
        [B],
        [Z],
        [E],
        [j],
        [T],
        [K],
      ]),
      this._injector["get"](q));
    let _0x1377f4 = this._injector["get"](Y);
    ((this._adapter = _0x1377f4),
      this._appendRenderAdapter(_0x1377f4),
      this.disposeWithMe(
        (0, n.toDisposable)(() => {
          (this._removeRenderAdapter(_0x1377f4), (this._adapter = null));
        }),
      ));
    let _0x15897d = this._injector["get"](
      t.IBoardClipboardResourceAdapterService,
    );
    (this.disposeWithMe(_0x15897d.registerAdapter(this._injector["get"](X))),
      this.disposeWithMe(this._injector["get"](H)));
  }
  onReady() {
    (this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        n.UniverInstanceType["UNIVER_BOARD"],
        A,
      ),
    ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          n.UniverInstanceType["UNIVER_BOARD"],
          V,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          n.UniverInstanceType["UNIVER_BOARD"],
          z,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          n.UniverInstanceType["UNIVER_BOARD"],
          k,
        ),
      ));
  }
  _appendRenderAdapter(_0x180d84) {
    var _0x287173, _0x4b39ad;
    let _0x481052 = this._getBoardsUIConfig(),
      _0x5b0635 = _0x481052.additionalRenderAdapters ?? [];
    _0x5b0635.includes(_0x180d84) ||
      this._configService["setConfig"](t.BOARDS_UI_PLUGIN_CONFIG_KEY, {
        ..._0x481052,
        additionalRenderAdapters: [..._0x5b0635, _0x180d84],
        toolbar: {
          ..._0x481052.toolbar,
          tools: {
            ...((_0x287173 = _0x481052.toolbar) == null
              ? undefined
              : _0x287173.tools),
            [e.BoardToolType["Chart"]]: $(
              (_0x4b39ad = _0x481052.toolbar) == null ||
                (_0x4b39ad = _0x4b39ad.tools) == null
                ? undefined
                : _0x4b39ad[e.BoardToolType["Chart"]],
            ),
          },
        },
      });
  }
  _removeRenderAdapter(_0x383a72) {
    var _0x4c2ff8;
    let _0x919590 = this._getBoardsUIConfig(),
      _0x55948c =
        (_0x4c2ff8 = _0x919590.additionalRenderAdapters) == null
          ? undefined
          : _0x4c2ff8.filter((_0x5a9d81) => _0x5a9d81 !== _0x383a72);
    this._configService["setConfig"](t.BOARDS_UI_PLUGIN_CONFIG_KEY, {
      ..._0x919590,
      additionalRenderAdapters: _0x55948c,
    });
  }
  _getBoardsUIConfig() {
    return (
      this._configService["getConfig"](t.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? {}
    );
  }
};
(b(Q, "pluginName", We),
  b(Q, "packageName", Ee),
  b(Q, "version", De),
  b(Q, "type", n.UniverInstanceType["UNIVER_BOARD"]),
  (Q = S(
    [
      (0, n.DependentOn)(
        p.UniverLicensePlugin,
        m.UniverRenderEnginePlugin,
        e.UniverBoardsPlugin,
        a.UniverChartUIPlugin,
        i.UniverBoardsChartPlugin,
        t.UniverBoardsUIPlugin,
      ),
      x(1, (0, n.Inject)(n.Injector)),
      x(2, n.IConfigService),
      x(3, m.IRenderManagerService),
    ],
    Q,
  )));
function $(_0x15ae57) {
  return _0x15ae57 === false
    ? false
    : typeof _0x15ae57 != "object" || {
        ..._0x15ae57,
        enabled: _0x15ae57.enabled ?? true,
      };
}
((exports.BOARDS_CHART_UI_PLUGIN_CONFIG_KEY = h),
  (exports.BOARDS_CHART_UI_PLUGIN_NAME = We),
  (exports.BOARD_CHART_SNAPSHOT_BORDER_WIDTH = 0),
  Object.defineProperty(exports, "BoardChartClipboardAdapter", {
    enumerable: true,
    get: function () {
      return X;
    },
  }),
  Object.defineProperty(exports, "BoardChartDataEditService", {
    enumerable: true,
    get: function () {
      return j;
    },
  }),
  Object.defineProperty(exports, "BoardChartEditSessionService", {
    enumerable: true,
    get: function () {
      return T;
    },
  }),
  Object.defineProperty(exports, "BoardChartFloatingToolbarRenderController", {
    enumerable: true,
    get: function () {
      return k;
    },
  }),
  Object.defineProperty(exports, "BoardChartOpenEditController", {
    enumerable: true,
    get: function () {
      return A;
    },
  }),
  Object.defineProperty(exports, "BoardChartPanelController", {
    enumerable: true,
    get: function () {
      return z;
    },
  }),
  Object.defineProperty(exports, "BoardChartRenderAdapter", {
    enumerable: true,
    get: function () {
      return Y;
    },
  }),
  Object.defineProperty(exports, "BoardChartRenderService", {
    enumerable: true,
    get: function () {
      return R;
    },
  }),
  Object.defineProperty(exports, "BoardChartSelectionController", {
    enumerable: true,
    get: function () {
      return V;
    },
  }),
  Object.defineProperty(exports, "BoardChartSnapshotRefreshController", {
    enumerable: true,
    get: function () {
      return H;
    },
  }),
  Object.defineProperty(exports, "BoardChartSnapshotRenderService", {
    enumerable: true,
    get: function () {
      return B;
    },
  }),
  Object.defineProperty(exports, "BoardChartUIService", {
    enumerable: true,
    get: function () {
      return D;
    },
  }),
  (exports.BoardDomChartHost = be),
  (exports.IBoardChartSnapshotRendererService = Ce),
  (exports.IBoardChartUIService = E),
  Object.defineProperty(exports, "UniverBoardsChartUIPlugin", {
    enumerable: true,
    get: function () {
      return Q;
    },
  }),
  (exports.enableChartTool = $),
  (exports.resolveBoardChartSnapshotStyle = we));
