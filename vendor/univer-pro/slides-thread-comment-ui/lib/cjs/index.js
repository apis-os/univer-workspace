Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/slides"),
  t = require("@univerjs-pro/slides-ui"),
  n = require("@univerjs/core"),
  r = require("@univerjs/thread-comment"),
  i = require("@univerjs/thread-comment-ui"),
  a = require("@univerjs/ui"),
  o = require("@univerjs-pro/license"),
  s = require("@univerjs-pro/slides-thread-comment"),
  c = require("@univerjs/engine-render"),
  l = require("@univerjs/icons"),
  u = require("@univerjs/protocol"),
  d = require("react"),
  f = require("rxjs"),
  p = require("react/jsx-runtime");
const m = "univer.slide.thread-comment-panel";
function h(_0x43ba2b) {
  let _0x1b513c = _0x43ba2b.get(i.ThreadCommentPanelService);
  (_0x43ba2b
    .get(a.ISidebarService)
    .open({
      header: { title: "slides-thread-comment-ui.addComment" },
      children: { label: m },
      width: 320,
      onClose: () => _0x1b513c.setPanelVisible(false),
    }),
    _0x1b513c.setPanelVisible(true));
}
const g = {
    id: "slide.operation.open-comment-panel",
    type: n.CommandType["OPERATION"],
    handler(_0x226d7e) {
      return (h(_0x226d7e), true);
    },
  },
  _ = {
    id: "slide.operation.start-comment-placement",
    type: n.CommandType["OPERATION"],
    handler(_0x53448a) {
      let _0x334a94 = _0x53448a
        .get(n.IUniverInstanceService)
        .getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SLIDE"]);
      return _0x334a94 != null && _0x334a94.pageManager["getActiveSlide"]()
        ? (_0x53448a.get(t.SlideInsertService).cancelPendingInsert(),
          _0x53448a
            .get(i.ThreadCommentDraftService)
            .startPlacement(
              n.UniverInstanceType["UNIVER_SLIDE"],
              _0x334a94.getUnitId(),
            ),
          true)
        : false;
    },
  },
  v = {
    id: "slide.operation.add-element-comment",
    type: n.CommandType["OPERATION"],
    handler(_0x5bf5f1) {
      var _0x3e1b89;
      let _0x562a1c = _0x5bf5f1
          .get(e.ISlideDrawingService)
          .getFocusDrawings()[0],
        _0x5dd945 = _0x5bf5f1
          .get(n.IUniverInstanceService)
          .getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SLIDE"]);
      return !_0x562a1c ||
        !_0x5dd945 ||
        _0x562a1c.unitId !== _0x5dd945.getUnitId() ||
        _0x562a1c.subUnitId !==
          ((_0x3e1b89 = _0x5dd945.pageManager["getActiveSlide"]()) == null
            ? undefined
            : _0x3e1b89.getId())
        ? false
        : (_0x5bf5f1
            .get(i.ThreadCommentDraftService)
            .place({
              unitId: _0x562a1c.unitId,
              subUnitId: _0x562a1c.subUnitId,
              anchor: {
                kind: r.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
                pageId: _0x562a1c.subUnitId,
                elementId: _0x562a1c.drawingId,
              },
            }),
          h(_0x5bf5f1),
          true);
    },
  },
  y = "slides-thread-comment-ui.config",
  b = {};
var x = "@univerjs-pro/slides-thread-comment-ui",
  S = "1.0.0-insiders.20260907-70fc579";
function C() {
  let _0x519a3d = (0, a.useDependency)(n.IUniverInstanceService),
    _0x1a9cd2 = (0, a.useDependency)(n.ICommandService),
    _0x4a82d9 = (0, a.useDependency)(i.ThreadCommentDraftService),
    _0x3b79cb = (0, a.useDependency)(n.UserManagerService),
    _0x2d1934 = (0, a.useDependency)(e.ISlideDrawingService),
    _0x4b7e1b = _0x519a3d.getCurrentUnitOfType(
      n.UniverInstanceType["UNIVER_SLIDE"],
    ),
    _0x4ee86d = _0x4b7e1b instanceof e.SlideModel ? _0x4b7e1b : undefined,
    _0x310192 = (0, a.useDependency)(n.IPermissionService);
  (0, a.useObservable)(
    () => _0x310192.permissionPointUpdate$,
    undefined,
    false,
    [_0x310192],
  );
  let _0x3fb519 = (0, a.useObservable)(_0x4a82d9.draft$, _0x4a82d9.draft),
    _0x17577f = (0, d.useMemo)(
      () =>
        (_0x4ee86d == null
          ? undefined
          : _0x4ee86d.pageManager["activeSlideId$"]) ?? (0, f.of)(undefined),
      [_0x4ee86d],
    ),
    _0x124bb7 =
      _0x3fb519 &&
      _0x3fb519.unitId ===
        (_0x4ee86d == null ? undefined : _0x4ee86d.getUnitId())
        ? {
            id: "",
            threadId: "",
            unitId: _0x3fb519.unitId,
            subUnitId: _0x3fb519.subUnitId,
            ref: (0, r.serializeThreadCommentAnchor)(_0x3fb519.anchor),
            dT: "",
            personId: _0x3b79cb.getCurrentUser().userID,
            text: { dataStream: "\x0d\x0a" },
          }
        : null;
  if (!_0x4ee86d) return null;
  let _0x4b930c = !(0, e.getSlidePermissionValue)(
    _0x310192,
    _0x4ee86d.getUnitId(),
    _0x4ee86d.getUnitId(),
    u.UnitAction["Comment"],
  );
  return (0, p.jsx)(i.ThreadCommentPanel, {
    unitId: _0x4ee86d.getUnitId(),
    subUnitId$: _0x17577f,
    type: n.UniverInstanceType["UNIVER_SLIDE"],
    onAdd: () => _0x1a9cd2.executeCommand(_.id),
    disableAdd: _0x4b930c,
    getSubUnitName: (_0x42d551) => {
      var _0x3d082c;
      return (
        ((_0x3d082c = _0x4ee86d.pageManager["getPage"](_0x42d551)) == null
          ? undefined
          : _0x3d082c.name) ?? ""
      );
    },
    tempComment: _0x124bb7,
    onTempCommentClose: () => _0x4a82d9.cancel(),
    formatRef: (_0x5cb66b) => w(_0x5cb66b, _0x2d1934),
  });
}
function w(_0x142280, _0x259524) {
  let _0x148247 = (0, r.deserializeThreadCommentAnchor)(_0x142280.ref);
  if (
    (_0x148247 == null ? undefined : _0x148247.kind) ===
    r.ThreadCommentAnchorKind["SLIDE_ELEMENT"]
  ) {
    let _0x3564fc = _0x259524.getDrawingData(
      _0x142280.unitId,
      _0x148247.pageId ?? _0x142280.subUnitId,
    )[_0x148247.elementId];
    return _0x3564fc
      ? (0, e.getSlideElementDisplayName)(_0x3564fc.element)
      : _0x148247.elementId;
  }
  return (_0x148247 == null ? undefined : _0x148247.kind) ===
    r.ThreadCommentAnchorKind["SLIDE_POSITION"]
    ? Math.round(_0x148247.x * 100) +
        "%, " +
        Math.round(_0x148247.y * 100) +
        "%"
    : _0x142280.ref;
}
function T(_0xf47b63, _0x572bfe) {
  return function (_0xd6a619, _0x32bdc8) {
    _0x572bfe(_0xd6a619, _0x32bdc8, _0xf47b63);
  };
}
function E(_0x595451, _0x105148, _0x4fdb63, _0x4fc0a3) {
  var _0x2d610b = arguments.length,
    _0x5a6681 =
      _0x2d610b < 3
        ? _0x105148
        : _0x4fc0a3 === null
          ? (_0x4fc0a3 = Object.getOwnPropertyDescriptor(_0x105148, _0x4fdb63))
          : _0x4fc0a3,
    _0x3546ab;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5a6681 = Reflect.decorate(_0x595451, _0x105148, _0x4fdb63, _0x4fc0a3);
  else {
    for (var _0x4429f0 = _0x595451.length - 1; _0x4429f0 >= 0; _0x4429f0--)
      (_0x3546ab = _0x595451[_0x4429f0]) &&
        (_0x5a6681 =
          (_0x2d610b < 3
            ? _0x3546ab(_0x5a6681)
            : _0x2d610b > 3
              ? _0x3546ab(_0x105148, _0x4fdb63, _0x5a6681)
              : _0x3546ab(_0x105148, _0x4fdb63)) || _0x5a6681);
  }
  return (
    _0x2d610b > 3 &&
      _0x5a6681 &&
      Object.defineProperty(_0x105148, _0x4fdb63, _0x5a6681),
    _0x5a6681
  );
}
let D = class extends n.Disposable {
  constructor(_0x38e8d3, _0x364e05) {
    (super(),
      (this._componentManager = _0x38e8d3),
      (this._iconManager = _0x364e05),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        CommentIcon: l.CommentIcon,
        InsertCommentDoubleIcon: l.InsertCommentDoubleIcon,
      }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](m, C));
  }
};
D = E(
  [T(0, (0, n.Inject)(a.ComponentManager)), T(1, (0, n.Inject)(a.IconManager))],
  D,
);
function O(_0x5b758a, _0x52dbc4, _0x4cad5d, _0x358ad8) {
  return {
    x: _0x4cad5d > 0 ? Math.max(0, Math.min(1, _0x5b758a / _0x4cad5d)) : 0,
    y: _0x358ad8 > 0 ? Math.max(0, Math.min(1, _0x52dbc4 / _0x358ad8)) : 0,
  };
}
function k(_0x10509e) {
  "@babel/helpers - typeof";
  return (
    (k =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5664f0) {
            return typeof _0x5664f0;
          }
        : function (_0x32a9de) {
            return _0x32a9de &&
              typeof Symbol == "function" &&
              _0x32a9de.constructor === Symbol &&
              _0x32a9de !== Symbol.prototype
              ? "symbol"
              : typeof _0x32a9de;
          }),
    k(_0x10509e)
  );
}
function A(_0x5e623b, _0x3d1710) {
  if (k(_0x5e623b) != "object" || !_0x5e623b) return _0x5e623b;
  var _0x296c37 = _0x5e623b[Symbol.toPrimitive];
  if (_0x296c37 !== undefined) {
    var _0x45c023 = _0x296c37.call(_0x5e623b, _0x3d1710 || "default");
    if (k(_0x45c023) != "object") return _0x45c023;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3d1710 === "string" ? String : Number)(_0x5e623b);
}
function j(_0x46d14c) {
  var _0x51b4d7 = A(_0x46d14c, "string");
  return k(_0x51b4d7) == "symbol" ? _0x51b4d7 : _0x51b4d7 + "";
}
function M(_0x3dd721, _0x3099aa, _0x1d65f9) {
  return (
    (_0x3099aa = j(_0x3099aa)) in _0x3dd721
      ? Object.defineProperty(_0x3dd721, _0x3099aa, {
          value: _0x1d65f9,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3dd721[_0x3099aa] = _0x1d65f9),
    _0x3dd721
  );
}
function N(_0x199b2b) {
  let _0x499cdc = new Map();
  return (
    _0x199b2b.forEach((_0x1beba7) => {
      let _0x599ae7 = _0x1beba7.x + "\x00" + _0x1beba7.y,
        _0x366542 = _0x499cdc.get(_0x599ae7);
      if (_0x366542) {
        ((_0x366542.commentId = _0x1beba7.commentId),
          _0x366542.commentIds["push"](_0x1beba7.commentId),
          (_0x366542.count += 1));
        return;
      }
      _0x499cdc.set(_0x599ae7, {
        ..._0x1beba7,
        commentIds: [_0x1beba7.commentId],
        count: 1,
      });
    }),
    Array.from(_0x499cdc.values())
  );
}
function P(_0x7f9b3f, _0x3907c9) {
  return !_0x7f9b3f.active || _0x7f9b3f.unitId !== _0x3907c9;
}
let F = class extends n.RxDisposable {
  constructor(
    _0x25b418,
    _0x4df203,
    _0x21c1c3,
    _0x58e0ad,
    _0x29274b,
    _0x333e53,
    _0x27be51,
    _0x72bd6a,
    _0x2336e3,
    _0x5d406c,
    _0x326f38,
  ) {
    (super(),
      (this._renderContext = _0x25b418),
      (this._commandService = _0x4df203),
      (this._instanceService = _0x21c1c3),
      (this._drawingService = _0x58e0ad),
      (this._draftService = _0x29274b),
      (this._commentModel = _0x333e53),
      (this._panelService = _0x27be51),
      (this._hitTestService = _0x72bd6a),
      (this._insertService = _0x2336e3),
      (this._playbackService = _0x5d406c),
      (this._themeService = _0x326f38),
      M(this, "_overlay", undefined),
      M(this, "_commentsVisible", undefined),
      (this._commentsVisible = P(
        this._playbackService["getSnapshot"](),
        this._renderContext["unitId"],
      )),
      (this._overlay = new i["ThreadCommentCanvasOverlay"](
        "slide-thread-comment-overlay",
        { ...this._getColors(), zoomRatio: 1, markers: [], underlines: [] },
      )),
      this._commentsVisible || this._overlay["hide"](),
      this._renderContext["scene"].addObject(this._overlay, 10100),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._overlay["onPointerDown$"].subscribeEvent(
            (_0x23b75c, _0x4ac3d7) => this._onOverlayPointerDown(_0x4ac3d7),
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
            (_0x275e71, _0x1eae3d) => this._onPointerDown(_0x275e71, _0x1eae3d),
          ),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._renderContext["scene"].onPointerMove$["subscribeEvent"](
            (_0x493f4a) => this._onPointerMove(_0x493f4a),
          ),
        ),
      ),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._hitTestService["onPointerDown$"].subscribe((_0x14844e) => {
            this._onDrawingPointerDown(_0x14844e);
          }),
        ),
      ));
    let _0x3d4065 = this._getModel();
    (_0x3d4065 &&
      (this.disposeWithMe(
        _0x3d4065.pageManager["activeSlideId$"]
          .pipe((0, f.takeUntil)(this.dispose$))
          .subscribe(() => this._syncOverlay()),
      ),
      this.disposeWithMe(
        _0x3d4065.zoomRatio$["pipe"]((0, f.takeUntil)(this.dispose$)).subscribe(
          () => this._syncOverlay(),
        ),
      )),
      this.disposeWithMe(
        (0, n.toDisposable)(
          this._renderContext["engine"].onTransformChange$["subscribeEvent"](
            () =>
              queueMicrotask(() => {
                this._disposed || this._syncOverlay();
              }),
          ),
        ),
      ),
      this.disposeWithMe(
        this._commentModel["commentUpdate$"]
          .pipe((0, f.takeUntil)(this.dispose$))
          .subscribe((_0x456d2d) => {
            _0x456d2d.unitId === this._renderContext["unitId"] &&
              this._syncOverlay();
          }),
      ),
      [
        this._panelService["activeCommentId$"],
        this._panelService["hoveredCommentId$"],
      ].forEach((_0xb6bc3a) => {
        this.disposeWithMe(
          _0xb6bc3a
            .pipe((0, f.takeUntil)(this.dispose$))
            .subscribe(() => this._syncOverlay()),
        );
      }),
      [
        this._drawingService["add$"],
        this._drawingService["update$"],
        this._drawingService["remove$"],
      ].forEach((_0xc1af24) => {
        this.disposeWithMe(
          _0xc1af24
            .pipe((0, f.takeUntil)(this.dispose$))
            .subscribe((_0x52d03d) => {
              _0x52d03d.some(
                (_0x204a21) =>
                  _0x204a21.unitId === this._renderContext["unitId"],
              ) && this._syncOverlay();
            }),
        );
      }),
      this.disposeWithMe(
        this._draftService["placementType$"]
          .pipe((0, f.takeUntil)(this.dispose$))
          .subscribe((_0x378f8b) => {
            _0x378f8b !== n.UniverInstanceType["UNIVER_SLIDE"] &&
              this._overlay["updateState"]({
                previewMarker: null,
                previewUnderline: null,
              });
          }),
      ),
      this.disposeWithMe(
        this._insertService["pendingInsert$"]
          .pipe((0, f.takeUntil)(this.dispose$))
          .subscribe((_0xd7bf40) => {
            _0xd7bf40 &&
              this._draftService["placementType"] ===
                n.UniverInstanceType["UNIVER_SLIDE"] &&
              this._draftService["cancel"]();
          }),
      ),
      this.disposeWithMe(
        this._themeService["currentTheme$"]
          .pipe((0, f.takeUntil)(this.dispose$))
          .subscribe(() => this._syncOverlay()),
      ),
      this._initPlaybackVisibility(),
      this._syncOverlay());
  }
  _initPlaybackVisibility() {
    this.disposeWithMe(
      this._playbackService["state$"]
        .pipe((0, f.takeUntil)(this.dispose$))
        .subscribe((_0x2b6af7) => {
          let _0x13b9cf = P(_0x2b6af7, this._renderContext["unitId"]);
          if (_0x13b9cf !== this._commentsVisible) {
            if (((this._commentsVisible = _0x13b9cf), _0x13b9cf)) {
              (this._overlay["show"](), this._syncOverlay());
              return;
            }
            (this._draftService["placementType"] ===
              n.UniverInstanceType["UNIVER_SLIDE"] &&
              this._draftService["cancel"](),
              this._overlay["clearHover"](),
              this._overlay["updateState"]({
                markers: [],
                underlines: [],
                focusedCommentIds: [],
                focusOutlines: [],
                previewMarker: null,
                previewUnderline: null,
              }),
              this._overlay["hide"]());
          }
        }),
    );
  }
  _onDrawingPointerDown(_0xc9775) {
    !this._commentsVisible ||
      this._draftService["placementType"] !==
        n.UniverInstanceType["UNIVER_SLIDE"] ||
      (_0xc9775.nativeEvent["button"] ?? 0) !== 0 ||
      (this._draftService["place"]({
        unitId: _0xc9775.drawing["unitId"],
        subUnitId: _0xc9775.drawing["subUnitId"],
        anchor: {
          kind: r.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
          pageId: _0xc9775.drawing["subUnitId"],
          elementId: _0xc9775.drawing["drawingId"],
        },
      }),
      this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null,
      }),
      this._commandService["executeCommand"](g.id).catch(() => undefined));
  }
  _onPointerDown(_0x3f0ed1, _0x4e85d4) {
    if (
      !this._commentsVisible ||
      this._draftService["placementType"] !==
        n.UniverInstanceType["UNIVER_SLIDE"] ||
      (_0x3f0ed1.button ?? 0) !== 0
    )
      return;
    let _0x3e5d3c = this._getModel(),
      _0x222436 =
        _0x3e5d3c == null
          ? undefined
          : _0x3e5d3c.pageManager["getActiveSlide"]();
    if (!_0x3e5d3c || !_0x222436) {
      this._draftService["cancel"]();
      return;
    }
    let _0x4aaeb9 = this._hitTestService["hitTest"](
        _0x3f0ed1.offsetX,
        _0x3f0ed1.offsetY,
      ),
      _0x5812f1 = _0x222436.getId(),
      _0x39e5cc = this._toScenePoint(_0x3f0ed1.offsetX, _0x3f0ed1.offsetY),
      _0x3371b9 = this._getPageRect(_0x3e5d3c),
      _0x4e25e5 = O(
        _0x39e5cc.x - _0x3371b9.left,
        _0x39e5cc.y - _0x3371b9.top,
        _0x3371b9.width,
        _0x3371b9.height,
      );
    (this._draftService["place"]({
      unitId: _0x3e5d3c.getUnitId(),
      subUnitId: _0x5812f1,
      anchor: _0x4aaeb9
        ? {
            kind: r.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
            pageId: _0x5812f1,
            elementId: _0x4aaeb9.drawing["drawingId"],
          }
        : {
            kind: r.ThreadCommentAnchorKind["SLIDE_POSITION"],
            pageId: _0x5812f1,
            ..._0x4e25e5,
          },
    }),
      this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null,
      }),
      _0x4e85d4.stopPropagation(),
      this._commandService["executeCommand"](g.id).catch(() => undefined));
  }
  _onPointerMove(_0x2c95ac) {
    if (
      !this._commentsVisible ||
      this._draftService["placementType"] !==
        n.UniverInstanceType["UNIVER_SLIDE"]
    )
      return;
    let _0x274b14 = this._hitTestService["hitTest"](
        _0x2c95ac.offsetX,
        _0x2c95ac.offsetY,
      ),
      _0x31d3a8 = _0x274b14
        ? this._getElementUnderline(_0x274b14.drawing["drawingId"])
        : null,
      _0x4a15f1 = this._toScenePoint(_0x2c95ac.offsetX, _0x2c95ac.offsetY);
    if (_0x31d3a8) {
      this._overlay["updateState"]({
        previewMarker: _0x4a15f1,
        previewUnderline: _0x31d3a8,
      });
      return;
    }
    this._overlay["updateState"]({
      previewMarker: _0x4a15f1,
      previewUnderline: null,
    });
  }
  _onOverlayPointerDown(_0x5312eb) {
    var _0x157ca;
    if (!this._commentsVisible) return;
    let _0x45efb3 = this._getModel(),
      _0x2bbeef =
        _0x45efb3 == null ||
        (_0x157ca = _0x45efb3.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x157ca.getId(),
      _0x28807a = this._overlay["hitCommentId"];
    !_0x45efb3 ||
      !_0x2bbeef ||
      !_0x28807a ||
      (this._panelService["setActiveComment"]({
        unitId: _0x45efb3.getUnitId(),
        subUnitId: _0x2bbeef,
        commentId: _0x28807a,
        trigger: "slide-canvas",
      }),
      _0x5312eb.stopPropagation(),
      this._commandService["executeCommand"](g.id).catch(() => undefined));
  }
  _syncOverlay() {
    var _0x290ac7;
    if (!this._commentsVisible) return;
    let _0x44d162 = this._getModel(),
      _0x161a9d =
        _0x44d162 == null ||
        (_0x290ac7 = _0x44d162.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x290ac7.getId();
    if (!_0x44d162 || !_0x161a9d) {
      this._overlay["updateState"]({
        markers: [],
        underlines: [],
        focusedCommentIds: [],
        focusOutlines: [],
      });
      return;
    }
    let _0x3dec23 = this._getPageRect(_0x44d162),
      _0x4e6e0b = [],
      _0x4fc439 = new Map();
    (this._commentModel["query"]({
      unitIds: [_0x44d162.getUnitId()],
      subUnitIds: [_0x161a9d],
      anchorKinds: [
        r.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
        r.ThreadCommentAnchorKind["SLIDE_POSITION"],
      ],
      resolved: false,
    }).forEach(({ root: _0x4057a0 }) => {
      let _0x5eaa54 = (0, r.deserializeThreadCommentAnchor)(_0x4057a0.ref);
      if (
        (_0x5eaa54 == null ? undefined : _0x5eaa54.kind) ===
        r.ThreadCommentAnchorKind["SLIDE_POSITION"]
      )
        _0x4e6e0b.push({
          commentId: _0x4057a0.id,
          x: _0x3dec23.left + _0x5eaa54.x * _0x3dec23.width,
          y: _0x3dec23.top + _0x5eaa54.y * _0x3dec23.height,
        });
      else {
        if (
          (_0x5eaa54 == null ? undefined : _0x5eaa54.kind) ===
          r.ThreadCommentAnchorKind["SLIDE_ELEMENT"]
        ) {
          let _0x188f76 = this._getElementUnderline(
            _0x5eaa54.elementId,
            _0x4057a0.id,
          );
          _0x188f76 && _0x4fc439.set(_0x5eaa54.elementId, _0x188f76);
        }
      }
    }),
      this._overlay["updateState"]({
        ...this._getColors(),
        zoomRatio: _0x44d162.getZoomRatio(),
        markers: N(_0x4e6e0b),
        underlines: Array.from(_0x4fc439.values()),
        ...this._getFocusState(_0x44d162, _0x161a9d),
      }));
  }
  _getElementUnderline(_0x373765, _0x1d1e13 = "") {
    let _0x5f0ae0 = this._getElementOutline(_0x373765),
      _0x37c35e = this._getModel();
    return !_0x37c35e || !_0x5f0ae0
      ? null
      : {
          commentId: _0x1d1e13,
          left: _0x5f0ae0.left,
          top: _0x5f0ae0.top + _0x5f0ae0.height + 2 / _0x37c35e.getZoomRatio(),
          width: _0x5f0ae0.width,
        };
  }
  _getElementOutline(_0x13e80c) {
    var _0x5a203a, _0x30f569;
    let _0x5dc1bd = this._getModel(),
      _0x5bbd80 =
        _0x5dc1bd == null ||
        (_0x5a203a = _0x5dc1bd.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x5a203a.getId();
    if (!_0x5dc1bd || !_0x5bbd80) return null;
    let _0x141169 = this._renderContext["scene"],
      _0x2b063d = (0, t.buildDrawingOKey)(
        _0x5dc1bd.getUnitId(),
        _0x5bbd80,
        _0x13e80c,
      ),
      _0x16f17a =
        ((_0x30f569 = _0x141169.getObjectIncludeInGroup) == null
          ? undefined
          : _0x30f569.call(_0x141169, _0x2b063d)) ??
        _0x141169.getObject(_0x2b063d);
    if (!_0x16f17a) return null;
    let _0x44868f = _0x16f17a.getRealBound();
    return {
      left: _0x44868f.left,
      top: _0x44868f.top,
      width: _0x44868f.width,
      height: _0x44868f.height,
    };
  }
  _getFocusState(_0x15e5c6, _0x2b06be) {
    let _0x2fe5e6 = [],
      _0x7cc2f2 = new Map();
    return (
      [
        this._panelService["activeCommentId"],
        this._panelService["hoveredCommentId"],
      ].forEach((_0x219559) => {
        if (
          !_0x219559 ||
          _0x219559.unitId !== _0x15e5c6.getUnitId() ||
          _0x219559.subUnitId !== _0x2b06be
        )
          return;
        let _0x12d1e5 = this._commentModel["getComment"](
          _0x219559.unitId,
          _0x219559.subUnitId,
          _0x219559.commentId,
        );
        if (!_0x12d1e5) return;
        _0x2fe5e6.push(_0x219559.commentId);
        let _0x4afbf8 = (0, r.deserializeThreadCommentAnchor)(_0x12d1e5.ref);
        if (
          (_0x4afbf8 == null ? undefined : _0x4afbf8.kind) ===
            r.ThreadCommentAnchorKind["SLIDE_ELEMENT"] &&
          !_0x7cc2f2.has(_0x4afbf8.elementId)
        ) {
          let _0x42f9eb = this._getElementOutline(_0x4afbf8.elementId);
          _0x42f9eb && _0x7cc2f2.set(_0x4afbf8.elementId, _0x42f9eb);
        }
      }),
      {
        focusedCommentIds: _0x2fe5e6,
        focusOutlines: Array.from(_0x7cc2f2.values()),
      }
    );
  }
  _getPageRect(_0x31ada7) {
    let _0x4aa596 = this._renderContext["scene"].getObject(
        t.SLIDE_PAGE_RECT_KEY,
      ),
      _0x1f1ad8 = _0x31ada7.getSnapshot().defaultPageSize;
    return {
      left: (_0x4aa596 == null ? undefined : _0x4aa596.left) ?? 0,
      top: (_0x4aa596 == null ? undefined : _0x4aa596.top) ?? 0,
      width:
        (_0x4aa596 == null ? undefined : _0x4aa596.width) ?? _0x1f1ad8.width,
      height:
        (_0x4aa596 == null ? undefined : _0x4aa596.height) ?? _0x1f1ad8.height,
    };
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
        n.UniverInstanceType["UNIVER_SLIDE"],
      ) ?? null
    );
  }
  _toScenePoint(_0x26312a, _0x51e991) {
    var _0x162d66, _0x51cef6, _0x250ffa;
    let _0xde3a43 = new c["Vector2"](_0x26312a, _0x51e991),
      _0x5dbd21 = this._renderContext["scene"],
      _0x313225 =
        ((_0x162d66 = _0x5dbd21.getActiveViewportByCoord) == null
          ? undefined
          : _0x162d66.call(_0x5dbd21, _0xde3a43)) ??
        ((_0x51cef6 = _0x5dbd21.getMainViewport) == null
          ? undefined
          : _0x51cef6.call(_0x5dbd21));
    return (
      (_0x313225 == null ||
      (_0x250ffa = _0x313225.transformVector2SceneCoord) == null
        ? undefined
        : _0x250ffa.call(_0x313225, _0xde3a43)) ?? _0xde3a43
    );
  }
};
F = E(
  [
    T(1, n.ICommandService),
    T(2, n.IUniverInstanceService),
    T(3, (0, n.Inject)(e.ISlideDrawingService)),
    T(4, (0, n.Inject)(i.ThreadCommentDraftService)),
    T(5, (0, n.Inject)(r.ThreadCommentModel)),
    T(6, (0, n.Inject)(i.ThreadCommentPanelService)),
    T(7, (0, n.Inject)(t.SlideHitTestService)),
    T(8, (0, n.Inject)(t.SlideInsertService)),
    T(9, t.ISlidePlaybackService),
    T(10, (0, n.Inject)(n.ThemeService)),
  ],
  F,
);
function I(_0x5abb71) {
  let _0x290a03 = _0x5abb71.get(n.IUniverInstanceService),
    _0x260eab = _0x5abb71.get(n.IPermissionService);
  return (0, f.combineLatest)([
    _0x290a03.getCurrentTypeOfUnit$(n.UniverInstanceType["UNIVER_SLIDE"]),
    _0x260eab.permissionPointUpdate$["pipe"]((0, f.startWith)(undefined)),
  ]).pipe(
    (0, f.map)(
      ([_0x45cc8d]) =>
        !_0x45cc8d ||
        !(0, e.getSlidePermissionValue)(
          _0x260eab,
          _0x45cc8d.getUnitId(),
          _0x45cc8d.getUnitId(),
          u.UnitAction["Comment"],
        ),
    ),
  );
}
function L(_0x1bda84) {
  return {
    id: g.id,
    type: a.MenuItemType["BUTTON"],
    icon: "CommentIcon",
    title: "slides-thread-comment-ui.openComments",
    tooltip: "slides-thread-comment-ui.openComments",
    hidden$: (0, a.getMenuHiddenObservable)(
      _0x1bda84,
      n.UniverInstanceType["UNIVER_SLIDE"],
    ),
  };
}
function R(_0x3bf4da) {
  return {
    id: _.id,
    type: a.MenuItemType["BUTTON"],
    icon: "InsertCommentDoubleIcon",
    title: "slides-thread-comment-ui.addComment",
    tooltip: "slides-thread-comment-ui.addComment",
    hidden$: (0, a.getMenuHiddenObservable)(
      _0x3bf4da,
      n.UniverInstanceType["UNIVER_SLIDE"],
    ),
    disabled$: I(_0x3bf4da),
  };
}
function z(_0x47f99c) {
  return {
    id: v.id,
    type: a.MenuItemType["BUTTON"],
    icon: "InsertCommentDoubleIcon",
    title: "slides-thread-comment-ui.addComment",
    tooltip: "slides-thread-comment-ui.addComment",
    disabled$: I(_0x47f99c),
  };
}
const B = {
    [a.MenuManagerPosition["RIBBON"]]: {
      [t.SLIDE_SHAPE_FORMAT_RIBBON_TAB]: {
        [t.SLIDE_SHAPE_FORMAT_RIBBON_GROUP_ADVANCED]: {
          [v.id]: {
            order: 2,
            gridLayout: { row: 1, column: 2, rowSpan: 2, showLabel: true },
            menuItemFactory: z,
          },
        },
      },
    },
  },
  V = {
    [a.RibbonStartGroup["OTHERS"]]: {
      [g.id]: {
        order: 10,
        gridLayout: { row: 1, column: 10, showLabel: true },
        menuItemFactory: L,
      },
      [_.id]: {
        order: 10.1,
        gridLayout: { row: 2, column: 10, showLabel: true },
        menuItemFactory: R,
      },
    },
    [t.SlideContextMenuPosition["DRAWING"]]: {
      [a.ContextMenuGroup["OTHERS"]]: {
        [v.id]: { order: 0, menuItemFactory: z },
      },
    },
    [a.FloatingObjectToolbarPosition["SLIDE"]]: {
      [v.id]: { order: 10, menuItemFactory: z },
    },
  };
function H(_0x3b0439, _0x1e59de, _0x2620a7) {
  return _0x3b0439.query({
    unitIds: [_0x1e59de],
    subUnitIds: [_0x2620a7],
    resolved: false,
  }).length;
}
function U({ unitId: _0x1a38d5, pageId: _0x182886, setActivePage: _0x17c5c8 }) {
  let _0x3ecac2 = (0, a.useDependency)(n.ICommandService),
    _0x44435 = (0, a.useDependency)(r.ThreadCommentModel),
    _0x309cde = (0, a.useDependency)(n.LocaleService);
  (0, a.useObservable)(
    () =>
      _0x44435.commentUpdate$["pipe"](
        (0, f.filter)(
          (_0x3bc5ef) =>
            _0x3bc5ef.unitId === _0x1a38d5 && _0x3bc5ef.subUnitId === _0x182886,
        ),
      ),
    undefined,
    false,
    [_0x44435, _0x182886, _0x1a38d5],
  );
  let _0xac9c0c = H(_0x44435, _0x1a38d5, _0x182886);
  return _0xac9c0c === 0
    ? null
    : (0, p.jsx)("button", {
        type: "button",
        "aria-label": _0x309cde.t("slides-thread-comment-ui.addComment"),
        title: _0x309cde.t("slides-thread-comment-ui.addComment"),
        onClick: (_0x12a824) => {
          (_0x12a824.stopPropagation(),
            _0x17c5c8(_0x182886),
            _0x3ecac2.executeCommand(g.id));
        },
        className:
          "univer-absolute -univer-right-1.5 -univer-top-1.5 univer-z-[4] univer-flex univer-h-7 univer-min-w-7 univer-cursor-pointer univer-select-none univer-items-center univer-justify-center univer-rounded-lg univer-border-2 univer-border-solid univer-border-gray-0 univer-bg-yellow-400 univer-px-1.5 univer-text-sm univer-font-semibold univer-leading-none univer-text-gray-0 univer-transition hover:univer-brightness-95 focus-visible:univer-outline-none focus-visible:univer-ring-2 focus-visible:univer-ring-primary-500",
        children: _0xac9c0c,
      });
}
let W = class extends n.Disposable {
  constructor(_0x127fd0, _0x5b99f4, _0x42e5c7) {
    (super(),
      [v, g, _].forEach((_0x5ca44c) =>
        this.disposeWithMe(_0x127fd0.registerCommand(_0x5ca44c)),
      ),
      _0x5b99f4.mergeMenu(V),
      _0x5b99f4.mergeMenu(B),
      this.disposeWithMe(
        _0x42e5c7.registerComponent(t.SLIDE_THUMBNAIL_OVERLAY_PART, () => U),
      ));
  }
};
W = E(
  [
    T(0, n.ICommandService),
    T(1, a.IMenuManagerService),
    T(2, a.IUIPartsService),
  ],
  W,
);
const G = [[D], [W]];
let K = class extends n.Plugin {
  constructor(_0x24e43e = b, _0x3b313c, _0x350639, _0x5498cb) {
    (super(),
      (this._config = _0x24e43e),
      (this._injector = _0x3b313c),
      (this._configService = _0x350639),
      (this._renderManagerService = _0x5498cb));
    let { ..._0x15bf54 } = (0, n.merge)({}, b, this._config);
    this._configService["setConfig"](y, _0x15bf54);
  }
  onStarting() {
    (G.forEach((_0x524f08) => {
      this._injector["add"](_0x524f08);
    }),
      this._injector["get"](D));
  }
  onRendered() {
    (this._renderManagerService["registerRenderModule"](
      n.UniverInstanceType["UNIVER_SLIDE"],
      [F],
    ),
      this._injector["get"](W));
  }
};
(M(K, "pluginName", "UNIVER_SLIDES_THREAD_COMMENT_UI_PLUGIN"),
  M(K, "packageName", x),
  M(K, "version", S),
  M(K, "type", n.UniverInstanceType["UNIVER_SLIDE"]),
  (K = E(
    [
      (0, n.DependentOn)(
        o.UniverLicensePlugin,
        s.UniverSlidesThreadCommentPlugin,
        t.UniverSlidesUIPlugin,
        c.UniverRenderEnginePlugin,
        i.UniverThreadCommentUIPlugin,
      ),
      T(1, (0, n.Inject)(n.Injector)),
      T(2, n.IConfigService),
      T(3, c.IRenderManagerService),
    ],
    K,
  )),
  (exports.OpenSlideCommentPanelOperation = g),
  (exports.SLIDES_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = y),
  (exports.StartSlideCommentPlacementOperation = _),
  Object.defineProperty(exports, "UniverSlidesThreadCommentUIPlugin", {
    enumerable: true,
    get: function () {
      return K;
    },
  }));
