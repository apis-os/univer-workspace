Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/boards-ui"),
  n = require("@univerjs/core"),
  r = require("@univerjs/protocol"),
  i = require("@univerjs/thread-comment"),
  a = require("@univerjs/thread-comment-ui"),
  o = require("@univerjs/ui"),
  s = require("@univerjs-pro/boards-thread-comment"),
  c = require("@univerjs-pro/license"),
  l = require("@univerjs/engine-render"),
  u = require("@univerjs/icons"),
  d = require("react"),
  f = require("rxjs"),
  p = require("react/jsx-runtime");
const m = "univer.board.thread-comment-panel";
function h(_0x24e03a) {
  let _0x4deaef = _0x24e03a.get(a.ThreadCommentPanelService);
  (_0x24e03a
    .get(o.ISidebarService)
    .open({
      header: { title: "boards-thread-comment-ui.addComment" },
      children: { label: m },
      width: 320,
      onClose: () => _0x4deaef.setPanelVisible(false),
    }),
    _0x4deaef.setPanelVisible(true));
}
const g = {
    id: "board.operation.open-comment-panel",
    type: n.CommandType["OPERATION"],
    handler(_0x19b12a) {
      return (h(_0x19b12a), true);
    },
  },
  _ = {
    id: "board.operation.start-comment-placement",
    type: n.CommandType["OPERATION"],
    handler(_0x1b6e24) {
      let _0x1ac0c4 = _0x1b6e24
        .get(n.IUniverInstanceService)
        .getCurrentUnitOfType(n.UniverInstanceType["UNIVER_BOARD"]);
      return !_0x1ac0c4 ||
        !(0, e.getBoardPermissionValue)(
          _0x1b6e24.get(n.IPermissionService),
          _0x1ac0c4.getUnitId(),
          _0x1ac0c4.getUnitId(),
          r.UnitAction["Comment"],
        )
        ? false
        : (_0x1b6e24
            .get(t.IBoardUIStateService)
            .setActiveTool(e.BoardToolType["Select"]),
          _0x1b6e24
            .get(a.ThreadCommentDraftService)
            .startPlacement(
              n.UniverInstanceType["UNIVER_BOARD"],
              _0x1ac0c4.getUnitId(),
            ),
          true);
    },
  },
  v = {
    id: "board.operation.add-element-comment",
    type: n.CommandType["OPERATION"],
    handler(_0x1e886e) {
      var _0x130aea;
      let _0x937b6e = _0x1e886e
          .get(n.IUniverInstanceService)
          .getCurrentUnitOfType(n.UniverInstanceType["UNIVER_BOARD"]),
        _0x4541a1 = _0x1e886e.get(t.IBoardElementStateService).getSnapshot(),
        _0x2b850d = _0x937b6e == null ? undefined : _0x937b6e.getActivePageId(),
        _0x1cf5d6 =
          _0x4541a1.focusedId ??
          _0x4541a1.selectedIds[_0x4541a1.selectedIds["length"] - 1];
      return !_0x937b6e ||
        !_0x2b850d ||
        !_0x1cf5d6 ||
        ((_0x130aea = _0x4541a1.context) == null
          ? undefined
          : _0x130aea.unitId) !== _0x937b6e.getUnitId() ||
        _0x4541a1.context["subUnitId"] !== _0x2b850d ||
        !(0, e.getBoardPermissionValue)(
          _0x1e886e.get(n.IPermissionService),
          _0x937b6e.getUnitId(),
          _0x937b6e.getUnitId(),
          r.UnitAction["Comment"],
        )
        ? false
        : (_0x1e886e
            .get(a.ThreadCommentDraftService)
            .place({
              unitId: _0x937b6e.getUnitId(),
              subUnitId: _0x2b850d,
              anchor: {
                kind: i.ThreadCommentAnchorKind["BOARD_ELEMENT"],
                pageId: _0x2b850d,
                elementId: _0x1cf5d6,
              },
            }),
          h(_0x1e886e),
          true);
    },
  },
  y = "boards-thread-comment-ui.config",
  b = {};
var x = "@univerjs-pro/boards-thread-comment-ui",
  S = "1.0.0-insiders.20260907-70fc579";
function C() {
  let _0xeb9edd = (0, o.useDependency)(n.IUniverInstanceService),
    _0x19727a = (0, o.useDependency)(n.ICommandService),
    _0xf9b499 = (0, o.useDependency)(a.ThreadCommentDraftService),
    _0x367e37 = (0, o.useDependency)(n.UserManagerService),
    _0x34acc0 = (0, o.useDependency)(e.IBoardElementService),
    _0x4ce4fd = _0xeb9edd.getCurrentUnitOfType(
      n.UniverInstanceType["UNIVER_BOARD"],
    ),
    _0x3f1175 = _0x4ce4fd instanceof e.BoardModel ? _0x4ce4fd : undefined,
    _0x485db2 = (0, o.useDependency)(n.IPermissionService);
  (0, o.useObservable)(
    () => _0x485db2.permissionPointUpdate$,
    undefined,
    false,
    [_0x485db2],
  );
  let _0x53c812 = (0, o.useObservable)(_0xf9b499.draft$, _0xf9b499.draft),
    _0x1b9e1d = (0, d.useMemo)(
      () =>
        (0, f.of)(_0x3f1175 == null ? undefined : _0x3f1175.getActivePageId()),
      [_0x3f1175],
    ),
    _0x1c0054 =
      _0x53c812 &&
      _0x53c812.unitId ===
        (_0x3f1175 == null ? undefined : _0x3f1175.getUnitId())
        ? {
            id: "",
            threadId: "",
            unitId: _0x53c812.unitId,
            subUnitId: _0x53c812.subUnitId,
            ref: (0, i.serializeThreadCommentAnchor)(_0x53c812.anchor),
            dT: "",
            personId: _0x367e37.getCurrentUser().userID,
            text: { dataStream: "\x0d\x0a" },
          }
        : null;
  if (!_0x3f1175) return null;
  let _0x37284d = !(0, e.getBoardPermissionValue)(
    _0x485db2,
    _0x3f1175.getUnitId(),
    _0x3f1175.getUnitId(),
    r.UnitAction["Comment"],
  );
  return (0, p.jsx)(a.ThreadCommentPanel, {
    unitId: _0x3f1175.getUnitId(),
    subUnitId$: _0x1b9e1d,
    type: n.UniverInstanceType["UNIVER_BOARD"],
    onAdd: () => _0x19727a.executeCommand(_.id),
    disableAdd: _0x37284d,
    getSubUnitName: (_0x116d91) => {
      var _0xac2ea;
      return (
        ((_0xac2ea = _0x3f1175.getPage(_0x116d91)) == null
          ? undefined
          : _0xac2ea.name) ?? _0x116d91
      );
    },
    tempComment: _0x1c0054,
    onTempCommentClose: () => _0xf9b499.cancel(),
    formatRef: (_0x180e95) => w(_0x180e95, _0x34acc0),
  });
}
function w(_0x24247a, _0x597798) {
  let _0x2f43ff = (0, i.deserializeThreadCommentAnchor)(_0x24247a.ref);
  if (
    (_0x2f43ff == null ? undefined : _0x2f43ff.kind) ===
    i.ThreadCommentAnchorKind["BOARD_ELEMENT"]
  ) {
    var _0x252620;
    let _0x3545ff = _0x597798.getElementById(
      _0x24247a.unitId,
      _0x2f43ff.pageId ?? _0x24247a.subUnitId,
      _0x2f43ff.elementId,
    );
    return (
      (_0x3545ff == null || (_0x252620 = _0x3545ff.element["name"]) == null
        ? undefined
        : _0x252620.trim()) || _0x2f43ff.elementId
    );
  }
  return (_0x2f43ff == null ? undefined : _0x2f43ff.kind) ===
    i.ThreadCommentAnchorKind["BOARD_POSITION"]
    ? "(" + Math.round(_0x2f43ff.x) + ",\x20" + Math.round(_0x2f43ff.y) + ")"
    : _0x24247a.ref;
}
function T(_0xfc4b9, _0xca9537) {
  return function (_0x38036d, _0x5daf2e) {
    _0xca9537(_0x38036d, _0x5daf2e, _0xfc4b9);
  };
}
function E(_0xa91b5a, _0x13f6db, _0x5214a0, _0x1d40a8) {
  var _0x3478a8 = arguments.length,
    _0xc6aff6 =
      _0x3478a8 < 3
        ? _0x13f6db
        : _0x1d40a8 === null
          ? (_0x1d40a8 = Object.getOwnPropertyDescriptor(_0x13f6db, _0x5214a0))
          : _0x1d40a8,
    _0x57a1d8;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xc6aff6 = Reflect.decorate(_0xa91b5a, _0x13f6db, _0x5214a0, _0x1d40a8);
  else {
    for (var _0x28733a = _0xa91b5a.length - 1; _0x28733a >= 0; _0x28733a--)
      (_0x57a1d8 = _0xa91b5a[_0x28733a]) &&
        (_0xc6aff6 =
          (_0x3478a8 < 3
            ? _0x57a1d8(_0xc6aff6)
            : _0x3478a8 > 3
              ? _0x57a1d8(_0x13f6db, _0x5214a0, _0xc6aff6)
              : _0x57a1d8(_0x13f6db, _0x5214a0)) || _0xc6aff6);
  }
  return (
    _0x3478a8 > 3 &&
      _0xc6aff6 &&
      Object.defineProperty(_0x13f6db, _0x5214a0, _0xc6aff6),
    _0xc6aff6
  );
}
let D = class extends n.Disposable {
  constructor(_0x376742, _0x418a04) {
    (super(),
      (this._componentManager = _0x376742),
      (this._iconManager = _0x418a04),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        InsertCommentDoubleIcon: u.InsertCommentDoubleIcon,
      }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](m, C));
  }
};
D = E(
  [T(0, (0, n.Inject)(o.ComponentManager)), T(1, (0, n.Inject)(o.IconManager))],
  D,
);
function O(_0x5cb70f, _0x120a14, _0x3267a4) {
  let _0x251fd0 =
    Number.isFinite(_0x3267a4.zoomRatio) && _0x3267a4.zoomRatio > 0
      ? _0x3267a4.zoomRatio
      : 1;
  return {
    x: (_0x5cb70f - _0x3267a4.viewportPanOffset["x"]) / _0x251fd0,
    y: (_0x120a14 - _0x3267a4.viewportPanOffset["y"]) / _0x251fd0,
  };
}
function k(_0x1882c7) {
  "@babel/helpers - typeof";
  return (
    (k =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x27f9c0) {
            return typeof _0x27f9c0;
          }
        : function (_0x27fd9f) {
            return _0x27fd9f &&
              typeof Symbol == "function" &&
              _0x27fd9f.constructor === Symbol &&
              _0x27fd9f !== Symbol.prototype
              ? "symbol"
              : typeof _0x27fd9f;
          }),
    k(_0x1882c7)
  );
}
function A(_0x57e1a4, _0x20001b) {
  if (k(_0x57e1a4) != "object" || !_0x57e1a4) return _0x57e1a4;
  var _0x2dc52c = _0x57e1a4[Symbol.toPrimitive];
  if (_0x2dc52c !== undefined) {
    var _0x27954a = _0x2dc52c.call(_0x57e1a4, _0x20001b || "default");
    if (k(_0x27954a) != "object") return _0x27954a;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x20001b === "string" ? String : Number)(_0x57e1a4);
}
function j(_0x130104) {
  var _0xc7e9a5 = A(_0x130104, "string");
  return k(_0xc7e9a5) == "symbol" ? _0xc7e9a5 : _0xc7e9a5 + "";
}
function M(_0x5efd23, _0x568e01, _0x2f058f) {
  return (
    (_0x568e01 = j(_0x568e01)) in _0x5efd23
      ? Object.defineProperty(_0x5efd23, _0x568e01, {
          value: _0x2f058f,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5efd23[_0x568e01] = _0x2f058f),
    _0x5efd23
  );
}
function N(_0x562238) {
  let _0x4d57a9 = new Map();
  return (
    _0x562238.forEach((_0x203c46) => {
      let _0x5896dc = _0x203c46.x + "\x00" + _0x203c46.y,
        _0x229f38 = _0x4d57a9.get(_0x5896dc);
      if (_0x229f38) {
        ((_0x229f38.commentId = _0x203c46.commentId),
          _0x229f38.commentIds["push"](_0x203c46.commentId),
          (_0x229f38.count += 1));
        return;
      }
      _0x4d57a9.set(_0x5896dc, {
        ..._0x203c46,
        commentIds: [_0x203c46.commentId],
        count: 1,
      });
    }),
    Array.from(_0x4d57a9.values())
  );
}
let P = class extends n.RxDisposable {
  constructor(
    _0x5e5add,
    _0x34031a,
    _0x2c636b,
    _0x2ef641,
    _0x53c023,
    _0x1cd92a,
    _0x5749b6,
    _0x52fe62,
    _0x2ac903,
    _0x5cc309,
  ) {
    (super(),
      (this._renderContext = _0x5e5add),
      (this._commandService = _0x34031a),
      (this._instanceService = _0x2c636b),
      (this._elementService = _0x2ef641),
      (this._elementStateService = _0x53c023),
      (this._uiStateService = _0x1cd92a),
      (this._draftService = _0x5749b6),
      (this._commentModel = _0x52fe62),
      (this._panelService = _0x2ac903),
      (this._themeService = _0x5cc309),
      M(this, "_overlay", undefined),
      (this._overlay = new a.ThreadCommentCanvasOverlay(
        "board-thread-comment-overlay",
        { ...this._getColors(), zoomRatio: 1, markers: [], underlines: [] },
      )),
      (this._overlay["zIndex"] =
        t.BOARD_RENDER_OBJECT_Z_INDEX["transientNavigation"] + 1),
      this._renderContext["scene"].addObject(
        this._overlay,
        t.BOARD_RENDER_LAYER_INDEX["overlay"],
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._overlay["onPointerDown$"].subscribeEvent(
            (_0x396251, _0x3a5727) => this._onOverlayPointerDown(_0x3a5727),
          ),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._overlay["onPointerLeave$"].subscribeEvent(() =>
            this._overlay["clearHover"](),
          ),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._renderContext["scene"].onPointerDown$["subscribeEvent"](
            (_0x132fd1, _0x32a1af) => this._onPointerDown(_0x132fd1, _0x32a1af),
          ),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._renderContext["scene"].onPointerMove$["subscribeEvent"](
            (_0x1d4722) => this._onPointerMove(_0x1d4722),
          ),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._elementStateService["state$"]
            .pipe((0, f.pairwise)(), (0, f.takeUntil)(this.dispose$))
            .subscribe(([_0x231fe5, _0x337588]) => {
              var _0x46165c;
              this._draftService["placementType"] !==
                n.UniverInstanceType["UNIVER_BOARD"] ||
                !_0x337588.focusedId ||
                !_0x337588.context ||
                (_0x231fe5.focusedId === _0x337588.focusedId &&
                  ((_0x46165c = _0x231fe5.context) == null
                    ? undefined
                    : _0x46165c.unitId) === _0x337588.context["unitId"] &&
                  _0x231fe5.context["subUnitId"] ===
                    _0x337588.context["subUnitId"]) ||
                this._placeElement(
                  _0x337588.context["unitId"],
                  _0x337588.context["subUnitId"],
                  _0x337588.focusedId,
                );
            }),
        ),
      ),
      this.disposeWithMe(
        this._commentModel["commentUpdate$"]
          .pipe((0, f.takeUntil)(this.dispose$))
          .subscribe((_0x1ac81c) => {
            _0x1ac81c.unitId === this._renderContext["unitId"] &&
              this._syncOverlay();
          }),
      ),
      [
        this._panelService["activeCommentId$"],
        this._panelService["hoveredCommentId$"],
      ].forEach((_0xa72aee) => {
        this.disposeWithMe(
          _0xa72aee
            .pipe((0, f.takeUntil)(this.dispose$))
            .subscribe(() => this._syncOverlay()),
        );
      }),
      [
        this._elementService["elementAdd$"],
        this._elementService["elementUpdate$"],
        this._elementService["elementRemove$"],
      ].forEach((_0x45c1c3) => {
        this.disposeWithMe(
          _0x45c1c3
            .pipe((0, f.takeUntil)(this.dispose$))
            .subscribe((_0x56b0d6) => {
              _0x56b0d6.some(
                (_0x26b7df) =>
                  _0x26b7df.unitId === this._renderContext["unitId"],
              ) && this._syncOverlay();
            }),
        );
      }),
      this.disposeWithMe(
        this._uiStateService["state$"]
          .pipe(
            (0, f.distinctUntilChanged)(
              (_0xfd8771, _0x3250a3) =>
                _0xfd8771.zoomRatio === _0x3250a3.zoomRatio,
            ),
            (0, f.takeUntil)(this.dispose$),
          )
          .subscribe(() => this._syncOverlay()),
      ),
      this._listenToolSwitch(),
      this.disposeWithMe(
        this._draftService["placementType$"]
          .pipe((0, f.takeUntil)(this.dispose$))
          .subscribe((_0x54a4be) => {
            _0x54a4be !== n.UniverInstanceType["UNIVER_BOARD"] &&
              this._overlay["updateState"]({
                previewMarker: null,
                previewUnderline: null,
              });
          }),
      ),
      this.disposeWithMe(
        this._themeService["currentTheme$"]
          .pipe((0, f.takeUntil)(this.dispose$))
          .subscribe(() => this._syncOverlay()),
      ),
      this._syncOverlay());
  }
  _listenToolSwitch() {
    this.disposeWithMe(
      this._uiStateService["state$"]
        .pipe(
          (0, f.map)((_0x53228f) => _0x53228f.activeTool),
          (0, f.distinctUntilChanged)(),
          (0, f.pairwise)(),
          (0, f.takeUntil)(this.dispose$),
        )
        .subscribe(() => {
          this._draftService["placementType"] ===
            n.UniverInstanceType["UNIVER_BOARD"] &&
            this._draftService["cancel"]();
        }),
    );
  }
  _placeElement(_0x50ee00, _0x46dfa6, _0x241bf3) {
    _0x50ee00 === this._renderContext["unitId"] &&
      (this._draftService["place"]({
        unitId: _0x50ee00,
        subUnitId: _0x46dfa6,
        anchor: {
          kind: i.ThreadCommentAnchorKind["BOARD_ELEMENT"],
          pageId: _0x46dfa6,
          elementId: _0x241bf3,
        },
      }),
      this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null,
      }),
      this._commandService["executeCommand"](g.id).catch(() => undefined));
  }
  _onPointerDown(_0x3b0ae5, _0x413192) {
    if (
      this._draftService["placementType"] !==
        n.UniverInstanceType["UNIVER_BOARD"] ||
      (_0x3b0ae5.button ?? 0) !== 0
    )
      return;
    let _0xcb693a = this._getModel();
    if (!_0xcb693a) {
      this._draftService["cancel"]();
      return;
    }
    let _0xf25ebd = _0xcb693a.getActivePageId(),
      _0x1e180d = this._toBoardPoint(_0x3b0ae5.offsetX, _0x3b0ae5.offsetY),
      _0x497205 = this._hitTest(_0xcb693a, _0xf25ebd, _0x1e180d);
    (this._draftService["place"]({
      unitId: _0xcb693a.getUnitId(),
      subUnitId: _0xf25ebd,
      anchor: _0x497205
        ? {
            kind: i.ThreadCommentAnchorKind["BOARD_ELEMENT"],
            pageId: _0xf25ebd,
            elementId: _0x497205.elementId,
          }
        : {
            kind: i.ThreadCommentAnchorKind["BOARD_POSITION"],
            pageId: _0xf25ebd,
            ..._0x1e180d,
          },
    }),
      this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null,
      }),
      _0x413192.stopPropagation(),
      this._commandService["executeCommand"](g.id).catch(() => undefined));
  }
  _onPointerMove(_0x2b3417) {
    if (
      this._draftService["placementType"] !==
      n.UniverInstanceType["UNIVER_BOARD"]
    )
      return;
    let _0x1ffc81 = this._getModel();
    if (!_0x1ffc81) return;
    let _0x36a4f7 = _0x1ffc81.getActivePageId(),
      _0x3b42ff = this._toBoardPoint(_0x2b3417.offsetX, _0x2b3417.offsetY),
      _0x2b6734 = this._hitTest(_0x1ffc81, _0x36a4f7, _0x3b42ff),
      _0x509c9a = _0x2b6734
        ? this._getElementUnderline(_0x2b6734.elementId)
        : null;
    if (_0x509c9a) {
      this._overlay["updateState"]({
        previewMarker: _0x3b42ff,
        previewUnderline: _0x509c9a,
      });
      return;
    }
    this._overlay["updateState"]({
      previewMarker: _0x3b42ff,
      previewUnderline: null,
    });
  }
  _onOverlayPointerDown(_0x348193) {
    let _0x2613a7 = this._getModel(),
      _0x4ed962 = this._overlay["hitCommentId"];
    !_0x2613a7 ||
      !_0x4ed962 ||
      (this._panelService["setActiveComment"]({
        unitId: _0x2613a7.getUnitId(),
        subUnitId: _0x2613a7.getActivePageId(),
        commentId: _0x4ed962,
        trigger: "board-canvas",
      }),
      _0x348193.stopPropagation(),
      this._commandService["executeCommand"](g.id).catch(() => undefined));
  }
  _syncOverlay() {
    let _0x1f4811 = this._getModel();
    if (!_0x1f4811) {
      this._overlay["updateState"]({
        markers: [],
        underlines: [],
        focusedCommentIds: [],
        focusOutlines: [],
      });
      return;
    }
    let _0x1d4d82 = _0x1f4811.getActivePageId(),
      _0x208108 = [],
      _0x50a12a = new Map();
    (this._commentModel["query"]({
      unitIds: [_0x1f4811.getUnitId()],
      subUnitIds: [_0x1d4d82],
      anchorKinds: [
        i.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        i.ThreadCommentAnchorKind["BOARD_POSITION"],
      ],
      resolved: false,
    }).forEach(({ root: _0x4ca478 }) => {
      let _0x466ac6 = (0, i.deserializeThreadCommentAnchor)(_0x4ca478.ref);
      if (
        (_0x466ac6 == null ? undefined : _0x466ac6.kind) ===
        i.ThreadCommentAnchorKind["BOARD_POSITION"]
      )
        _0x208108.push({
          commentId: _0x4ca478.id,
          x: _0x466ac6.x,
          y: _0x466ac6.y,
        });
      else {
        if (
          (_0x466ac6 == null ? undefined : _0x466ac6.kind) ===
          i.ThreadCommentAnchorKind["BOARD_ELEMENT"]
        ) {
          let _0x25caed = this._getElementUnderline(
            _0x466ac6.elementId,
            _0x4ca478.id,
          );
          _0x25caed && _0x50a12a.set(_0x466ac6.elementId, _0x25caed);
        }
      }
    }),
      this._overlay["updateState"]({
        ...this._getColors(),
        zoomRatio: this._uiStateService["getState"]().zoomRatio,
        markers: N(_0x208108),
        underlines: Array.from(_0x50a12a.values()),
        ...this._getFocusState(_0x1f4811, _0x1d4d82),
      }));
  }
  _getElementUnderline(_0x2b6114, _0x3a331d = "") {
    let _0x2db623 = this._getElementOutline(_0x2b6114);
    if (!_0x2db623) return null;
    let _0x265c2f = this._uiStateService["getState"]().zoomRatio || 1;
    return {
      commentId: _0x3a331d,
      left: _0x2db623.left,
      top: _0x2db623.top + _0x2db623.height + 2 / _0x265c2f,
      width: _0x2db623.width,
    };
  }
  _getElementOutline(_0x3e2014) {
    var _0x1a7a09;
    let _0x36ab89 = this._getModel();
    if (!_0x36ab89) return null;
    let _0x3a493c = this._renderContext["scene"],
      _0x85dbbf = (0, t.getBoardElementRenderObjectKey)(
        _0x36ab89.getUnitId(),
        _0x3e2014,
      ),
      _0xaba014 =
        _0x3a493c.getObject(_0x85dbbf) ??
        ((_0x1a7a09 = _0x3a493c.getObjectIncludeInGroup) == null
          ? undefined
          : _0x1a7a09.call(_0x3a493c, _0x85dbbf));
    if (!_0xaba014) return null;
    let _0x2f8205 = _0xaba014.getRealBound();
    return {
      left: _0x2f8205.left,
      top: _0x2f8205.top,
      width: _0x2f8205.width,
      height: _0x2f8205.height,
    };
  }
  _getFocusState(_0x5baec1, _0x19261d) {
    let _0xf11c33 = [],
      _0x4bcca4 = new Map();
    return (
      [
        this._panelService["activeCommentId"],
        this._panelService["hoveredCommentId"],
      ].forEach((_0x43da97) => {
        if (
          !_0x43da97 ||
          _0x43da97.unitId !== _0x5baec1.getUnitId() ||
          _0x43da97.subUnitId !== _0x19261d
        )
          return;
        let _0x4213aa = this._commentModel["getComment"](
          _0x43da97.unitId,
          _0x43da97.subUnitId,
          _0x43da97.commentId,
        );
        if (!_0x4213aa) return;
        _0xf11c33.push(_0x43da97.commentId);
        let _0x2b1fa5 = (0, i.deserializeThreadCommentAnchor)(_0x4213aa.ref);
        if (
          (_0x2b1fa5 == null ? undefined : _0x2b1fa5.kind) ===
            i.ThreadCommentAnchorKind["BOARD_ELEMENT"] &&
          !_0x4bcca4.has(_0x2b1fa5.elementId)
        ) {
          let _0x2515d0 = this._getElementOutline(_0x2b1fa5.elementId);
          _0x2515d0 && _0x4bcca4.set(_0x2b1fa5.elementId, _0x2515d0);
        }
      }),
      {
        focusedCommentIds: _0xf11c33,
        focusOutlines: Array.from(_0x4bcca4.values()),
      }
    );
  }
  _hitTest(_0x505146, _0x31881b, _0x254c81) {
    return (0, t.hitTestBoardElementAtPoint)({
      elementData: this._elementService["getElementData"](
        _0x505146.getUnitId(),
        _0x31881b,
      ),
      elementOrder: this._elementService["getElementOrder"](
        _0x505146.getUnitId(),
        _0x31881b,
      ),
      point: _0x254c81,
    });
  }
  _getColors() {
    return {
      accentColor: this._themeService["getColorFromTheme"]("yellow.400"),
      foregroundColor: this._themeService["getColorFromTheme"]("gray.900"),
      outlineColor: this._themeService["getColorFromTheme"]("white"),
    };
  }
  _getModel() {
    return (
      this._instanceService["getUnit"](
        this._renderContext["unitId"],
        n.UniverInstanceType["UNIVER_BOARD"],
      ) ?? null
    );
  }
  _toBoardPoint(_0xa46a7d, _0x34bfda) {
    return O(_0xa46a7d, _0x34bfda, this._uiStateService["getState"]());
  }
};
P = E(
  [
    T(1, n.ICommandService),
    T(2, n.IUniverInstanceService),
    T(3, e.IBoardElementService),
    T(4, t.IBoardElementStateService),
    T(5, t.IBoardUIStateService),
    T(6, (0, n.Inject)(a.ThreadCommentDraftService)),
    T(7, (0, n.Inject)(i.ThreadCommentModel)),
    T(8, (0, n.Inject)(a.ThreadCommentPanelService)),
    T(9, (0, n.Inject)(n.ThemeService)),
  ],
  P,
);
function F(_0x232865) {
  let _0x2b6689 = _0x232865.get(n.IUniverInstanceService),
    _0x1c4f6f = _0x232865.get(n.IPermissionService);
  return (0, f.combineLatest)([
    _0x2b6689.getCurrentTypeOfUnit$(n.UniverInstanceType["UNIVER_BOARD"]),
    _0x1c4f6f.permissionPointUpdate$["pipe"]((0, f.startWith)(undefined)),
  ]).pipe(
    (0, f.map)(
      ([_0x2d0db7]) =>
        !_0x2d0db7 ||
        !(0, e.getBoardPermissionValue)(
          _0x1c4f6f,
          _0x2d0db7.getUnitId(),
          _0x2d0db7.getUnitId(),
          r.UnitAction["Comment"],
        ),
    ),
  );
}
function I(_0x303c48) {
  return {
    id: v.id,
    type: o.MenuItemType["BUTTON"],
    icon: "InsertCommentDoubleIcon",
    title: "boards-thread-comment-ui.addComment",
    tooltip: "boards-thread-comment-ui.addComment",
    hidden$: (0, o.getMenuHiddenObservable)(
      _0x303c48,
      n.UniverInstanceType["UNIVER_BOARD"],
    ),
    disabled$: F(_0x303c48),
  };
}
const L = {
  [t.BoardElementContextMenuPosition["ELEMENT"]]: {
    [o.ContextMenuGroup["OTHERS"]]: {
      [v.id]: { order: 0, menuItemFactory: I },
    },
  },
  [t.BoardElementContextMenuPosition["SELECTION"]]: {
    [o.ContextMenuGroup["OTHERS"]]: {
      [v.id]: { order: 0, menuItemFactory: I },
    },
  },
  [o.FloatingObjectToolbarPosition["BOARD"]]: {
    [v.id]: { order: 10, menuItemFactory: I },
  },
};
let R = class extends n.Disposable {
  constructor(
    _0x5f4d05,
    _0x314917,
    _0x3a8c1e,
    _0x4856f5,
    _0x508ef4,
    _0x163958,
  ) {
    (super(),
      [v, g, _].forEach((_0x21707d) =>
        this.disposeWithMe(_0x5f4d05.registerCommand(_0x21707d)),
      ),
      _0x314917.mergeMenu(L),
      this.disposeWithMe(
        _0x3a8c1e.register({
          id: "boards-thread-comment-ui.view-selection.add-comment",
          icon: u.CommentIcon,
          label: () => _0x4856f5.t("boards-thread-comment-ui.addComment"),
          order: 100,
          group: "auxiliary",
          placement: "view-selection",
          enabled: () => {
            let _0x5331f9 = _0x163958.getCurrentUnitOfType(
              n.UniverInstanceType["UNIVER_BOARD"],
            );
            return (
              !!_0x5331f9 &&
              (0, e.getBoardPermissionValue)(
                _0x508ef4,
                _0x5331f9.getUnitId(),
                _0x5331f9.getUnitId(),
                r.UnitAction["Comment"],
              )
            );
          },
          onClick: async (_0x58a046) => {
            await _0x58a046.executeCommand(v.id);
          },
        }),
      ),
      this.disposeWithMe(
        _0x3a8c1e.register({
          id: "boards-thread-comment-ui.top-right.open-comments",
          availableInViewing: true,
          icon: u.CommentIcon,
          label: () => _0x4856f5.t("boards-thread-comment-ui.openComments"),
          order: 100,
          group: "auxiliary",
          placement: "top-right-before-history",
          menuItemId: g.id,
          onClick: async (_0x3253a2) => {
            await _0x3253a2.executeCommand(g.id);
          },
        }),
      ),
      this.disposeWithMe(
        _0x3a8c1e.register({
          id: "boards-thread-comment-ui.toolbar.add-comment",
          availableInViewing: true,
          icon: u.InsertCommentDoubleIcon,
          label: () => _0x4856f5.t("boards-thread-comment-ui.addComment"),
          order: 100,
          group: "auxiliary",
          menuItemId: _.id,
          enabled: () => {
            let _0x1f5e83 = _0x163958.getCurrentUnitOfType(
              n.UniverInstanceType["UNIVER_BOARD"],
            );
            return (
              !!_0x1f5e83 &&
              (0, e.getBoardPermissionValue)(
                _0x508ef4,
                _0x1f5e83.getUnitId(),
                _0x1f5e83.getUnitId(),
                r.UnitAction["Comment"],
              )
            );
          },
          onClick: async (_0x5627b5) => {
            await _0x5627b5.executeCommand(_.id);
          },
        }),
      ));
  }
};
R = E(
  [
    T(0, n.ICommandService),
    T(1, o.IMenuManagerService),
    T(2, (0, n.Inject)(t.IBoardToolbarContributionService)),
    T(3, (0, n.Inject)(n.LocaleService)),
    T(4, n.IPermissionService),
    T(5, n.IUniverInstanceService),
  ],
  R,
);
const z = [[D], [R]];
let B = class extends n.Plugin {
  constructor(_0x24167e = b, _0xb2f446, _0x3fd30f, _0x355444) {
    (super(),
      (this._config = _0x24167e),
      (this._injector = _0xb2f446),
      (this._configService = _0x3fd30f),
      (this._renderManagerService = _0x355444));
    let { ..._0x169d21 } = (0, n.merge)({}, b, this._config);
    this._configService["setConfig"](y, _0x169d21);
  }
  onStarting() {
    (z.forEach((_0x35e613) => {
      this._injector["add"](_0x35e613);
    }),
      this._injector["get"](D));
  }
  onRendered() {
    (this._renderManagerService["registerRenderModule"](
      n.UniverInstanceType["UNIVER_BOARD"],
      [P],
    ),
      this._injector["get"](R));
  }
};
(M(B, "pluginName", "UNIVER_BOARDS_THREAD_COMMENT_UI_PLUGIN"),
  M(B, "packageName", x),
  M(B, "version", S),
  M(B, "type", n.UniverInstanceType["UNIVER_BOARD"]),
  (B = E(
    [
      (0, n.DependentOn)(
        e.UniverBoardsPlugin,
        s.UniverBoardsThreadCommentPlugin,
        t.UniverBoardsUIPlugin,
        c.UniverLicensePlugin,
        l.UniverRenderEnginePlugin,
        a.UniverThreadCommentUIPlugin,
      ),
      T(1, (0, n.Inject)(n.Injector)),
      T(2, n.IConfigService),
      T(3, l.IRenderManagerService),
    ],
    B,
  )),
  (exports.BOARDS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = y),
  (exports.OpenBoardCommentPanelOperation = g),
  (exports.StartBoardCommentPlacementOperation = _),
  Object.defineProperty(exports, "UniverBoardsThreadCommentUIPlugin", {
    enumerable: true,
    get: function () {
      return B;
    },
  }));
