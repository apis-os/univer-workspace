import {
  ISlideDrawingService as _0x5e6760,
  SlideModel as _0x22b823,
  getSlideElementDisplayName as _0x890590,
  getSlidePermissionValue as _0x541b47,
} from "@univerjs-pro/slides";
import {
  ISlidePlaybackService as _0x516285,
  SLIDE_PAGE_RECT_KEY as _0x5820f1,
  SLIDE_SHAPE_FORMAT_RIBBON_GROUP_ADVANCED as _0x537055,
  SLIDE_SHAPE_FORMAT_RIBBON_TAB as _0x1f245d,
  SLIDE_THUMBNAIL_OVERLAY_PART as _0xd47071,
  SlideContextMenuPosition as _0x1f39e7,
  SlideHitTestService as _0x27dc47,
  SlideInsertService as _0x578dbc,
  UniverSlidesUIPlugin as _0x4ecaa1,
  buildDrawingOKey as _0x486413,
} from "@univerjs-pro/slides-ui";
import {
  CommandType as _0x88ad3,
  DependentOn as _0x224336,
  Disposable as _0x444d9e,
  ICommandService as _0x4794c4,
  IConfigService as _0x11e889,
  IPermissionService as _0x2076a9,
  IUniverInstanceService as _0x3554a9,
  Inject as _0x1ea475,
  Injector as _0x17df49,
  LocaleService as _0x4aee60,
  Plugin as _0x2d1ba5,
  RxDisposable as _0x404fb1,
  ThemeService as _0x2dcdd8,
  UniverInstanceType as _0x563095,
  UserManagerService as _0xa52641,
  merge as _0x409f7b,
  toDisposable as _0x1f2a73,
} from "@univerjs/core";
import {
  ThreadCommentAnchorKind as _0xa68f97,
  ThreadCommentModel as _0x102aa1,
  deserializeThreadCommentAnchor as _0x5052bf,
  serializeThreadCommentAnchor as _0x21fe29,
} from "@univerjs/thread-comment";
import {
  ThreadCommentCanvasOverlay as _0x35254e,
  ThreadCommentDraftService as _0x34312e,
  ThreadCommentPanel as _0x23e96d,
  ThreadCommentPanelService as _0x13cca1,
  UniverThreadCommentUIPlugin as _0x209774,
} from "@univerjs/thread-comment-ui";
import {
  ComponentManager as _0x53cae4,
  ContextMenuGroup as _0x41c730,
  FloatingObjectToolbarPosition as _0x9a0338,
  IMenuManagerService as _0x165395,
  ISidebarService as _0x52f641,
  IUIPartsService as _0x5945fe,
  IconManager as _0x1f430f,
  MenuItemType as _0x7d723c,
  MenuManagerPosition as _0x39d4d9,
  RibbonStartGroup as _0x285c37,
  getMenuHiddenObservable as _0x5dd7e8,
  useDependency as _0x3dd551,
  useObservable as _0x47954e,
} from "@univerjs/ui";
import { UniverLicensePlugin as _0x447eaf } from "@univerjs-pro/license";
import { UniverSlidesThreadCommentPlugin as _0x5ad4fe } from "@univerjs-pro/slides-thread-comment";
import {
  IRenderManagerService as _0x1e20eb,
  UniverRenderEnginePlugin as _0x24d2fa,
  Vector2 as _0x3bc3df,
} from "@univerjs/engine-render";
import {
  CommentIcon as _0x416c0f,
  InsertCommentDoubleIcon as _0x6603a5,
} from "@univerjs/icons";
import { UnitAction as _0x2ecd03 } from "@univerjs/protocol";
import { useMemo as _0x2407b3 } from "react";
import {
  combineLatest as _0x1f0761,
  filter as _0x373c34,
  map as _0x1d7661,
  of as _0x41140d,
  startWith as _0x178a5c,
  takeUntil as _0x14413e,
} from "rxjs";
import { jsx as _0x2a7cfa } from "react/jsx-runtime";
const F = "univer.slide.thread-comment-panel";
function I(_0x150fa7) {
  let _0xa7005c = _0x150fa7.get(_0x13cca1);
  (_0x150fa7
    .get(_0x52f641)
    .open({
      header: { title: "slides-thread-comment-ui.addComment" },
      children: { label: F },
      width: 320,
      onClose: () => _0xa7005c.setPanelVisible(false),
    }),
    _0xa7005c.setPanelVisible(true));
}
const L = {
    id: "slide.operation.open-comment-panel",
    type: _0x88ad3.OPERATION,
    handler(_0x13beb6) {
      return (I(_0x13beb6), true);
    },
  },
  R = {
    id: "slide.operation.start-comment-placement",
    type: _0x88ad3.OPERATION,
    handler(_0x1575a8) {
      let _0x5a1c42 = _0x1575a8
        .get(_0x3554a9)
        .getCurrentUnitOfType(_0x563095.UNIVER_SLIDE);
      return _0x5a1c42 != null && _0x5a1c42.pageManager["getActiveSlide"]()
        ? (_0x1575a8.get(_0x578dbc).cancelPendingInsert(),
          _0x1575a8
            .get(_0x34312e)
            .startPlacement(_0x563095.UNIVER_SLIDE, _0x5a1c42.getUnitId()),
          true)
        : false;
    },
  },
  z = {
    id: "slide.operation.add-element-comment",
    type: _0x88ad3.OPERATION,
    handler(_0xdf7de8) {
      var _0x3dee11;
      let _0x315ba8 = _0xdf7de8.get(_0x5e6760).getFocusDrawings()[0],
        _0x178760 = _0xdf7de8
          .get(_0x3554a9)
          .getCurrentUnitOfType(_0x563095.UNIVER_SLIDE);
      return !_0x315ba8 ||
        !_0x178760 ||
        _0x315ba8.unitId !== _0x178760.getUnitId() ||
        _0x315ba8.subUnitId !==
          ((_0x3dee11 = _0x178760.pageManager["getActiveSlide"]()) == null
            ? undefined
            : _0x3dee11.getId())
        ? false
        : (_0xdf7de8
            .get(_0x34312e)
            .place({
              unitId: _0x315ba8.unitId,
              subUnitId: _0x315ba8.subUnitId,
              anchor: {
                kind: _0xa68f97.SLIDE_ELEMENT,
                pageId: _0x315ba8.subUnitId,
                elementId: _0x315ba8.drawingId,
              },
            }),
          I(_0xdf7de8),
          true);
    },
  },
  B = "slides-thread-comment-ui.config",
  V = {};
var Pe = "@univerjs-pro/slides-thread-comment-ui",
  Fe = "1.0.0-insiders.20260907-70fc579";
function Ie() {
  let _0x3fc75f = _0x3dd551(_0x3554a9),
    _0x27e611 = _0x3dd551(_0x4794c4),
    _0x7ff21b = _0x3dd551(_0x34312e),
    _0x31977c = _0x3dd551(_0xa52641),
    _0x36ee00 = _0x3dd551(_0x5e6760),
    _0x346955 = _0x3fc75f.getCurrentUnitOfType(_0x563095.UNIVER_SLIDE),
    _0x129779 = _0x346955 instanceof _0x22b823 ? _0x346955 : undefined,
    _0x59cd7c = _0x3dd551(_0x2076a9);
  _0x47954e(() => _0x59cd7c.permissionPointUpdate$, undefined, false, [
    _0x59cd7c,
  ]);
  let _0x3626af = _0x47954e(_0x7ff21b.draft$, _0x7ff21b.draft),
    _0x4d0eeb = _0x2407b3(
      () =>
        (_0x129779 == null
          ? undefined
          : _0x129779.pageManager["activeSlideId$"]) ?? _0x41140d(undefined),
      [_0x129779],
    ),
    _0x290376 =
      _0x3626af &&
      _0x3626af.unitId ===
        (_0x129779 == null ? undefined : _0x129779.getUnitId())
        ? {
            id: "",
            threadId: "",
            unitId: _0x3626af.unitId,
            subUnitId: _0x3626af.subUnitId,
            ref: _0x21fe29(_0x3626af.anchor),
            dT: "",
            personId: _0x31977c.getCurrentUser().userID,
            text: { dataStream: "\x0d\x0a" },
          }
        : null;
  if (!_0x129779) return null;
  let _0x47c846 = !_0x541b47(
    _0x59cd7c,
    _0x129779.getUnitId(),
    _0x129779.getUnitId(),
    _0x2ecd03.Comment,
  );
  return _0x2a7cfa(_0x23e96d, {
    unitId: _0x129779.getUnitId(),
    subUnitId$: _0x4d0eeb,
    type: _0x563095.UNIVER_SLIDE,
    onAdd: () => _0x27e611.executeCommand(R.id),
    disableAdd: _0x47c846,
    getSubUnitName: (_0x103629) => {
      var _0x5489f4;
      return (
        ((_0x5489f4 = _0x129779.pageManager["getPage"](_0x103629)) == null
          ? undefined
          : _0x5489f4.name) ?? ""
      );
    },
    tempComment: _0x290376,
    onTempCommentClose: () => _0x7ff21b.cancel(),
    formatRef: (_0x123052) => Le(_0x123052, _0x36ee00),
  });
}
function Le(_0x44b261, _0x30b575) {
  let _0x11a7a0 = _0x5052bf(_0x44b261.ref);
  if (
    (_0x11a7a0 == null ? undefined : _0x11a7a0.kind) === _0xa68f97.SLIDE_ELEMENT
  ) {
    let _0x3279c0 = _0x30b575.getDrawingData(
      _0x44b261.unitId,
      _0x11a7a0.pageId ?? _0x44b261.subUnitId,
    )[_0x11a7a0.elementId];
    return _0x3279c0 ? _0x890590(_0x3279c0.element) : _0x11a7a0.elementId;
  }
  return (_0x11a7a0 == null ? undefined : _0x11a7a0.kind) ===
    _0xa68f97.SLIDE_POSITION
    ? Math.round(_0x11a7a0.x * 100) +
        "%, " +
        Math.round(_0x11a7a0.y * 100) +
        "%"
    : _0x44b261.ref;
}
function H(_0x251c76, _0x31ea59) {
  return function (_0x54600d, _0x1a3968) {
    _0x31ea59(_0x54600d, _0x1a3968, _0x251c76);
  };
}
function U(_0x236d57, _0x1472ac, _0x1af6b8, _0x4f467c) {
  var _0x4a1620 = arguments.length,
    _0x3fd7be =
      _0x4a1620 < 3
        ? _0x1472ac
        : _0x4f467c === null
          ? (_0x4f467c = Object.getOwnPropertyDescriptor(_0x1472ac, _0x1af6b8))
          : _0x4f467c,
    _0x509563;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3fd7be = Reflect.decorate(_0x236d57, _0x1472ac, _0x1af6b8, _0x4f467c);
  else {
    for (var _0x561393 = _0x236d57.length - 1; _0x561393 >= 0; _0x561393--)
      (_0x509563 = _0x236d57[_0x561393]) &&
        (_0x3fd7be =
          (_0x4a1620 < 3
            ? _0x509563(_0x3fd7be)
            : _0x4a1620 > 3
              ? _0x509563(_0x1472ac, _0x1af6b8, _0x3fd7be)
              : _0x509563(_0x1472ac, _0x1af6b8)) || _0x3fd7be);
  }
  return (
    _0x4a1620 > 3 &&
      _0x3fd7be &&
      Object.defineProperty(_0x1472ac, _0x1af6b8, _0x3fd7be),
    _0x3fd7be
  );
}
let W = class extends _0x444d9e {
  constructor(_0x1cf4bc, _0x1b7115) {
    (super(),
      (this._componentManager = _0x1cf4bc),
      (this._iconManager = _0x1b7115),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        CommentIcon: _0x416c0f,
        InsertCommentDoubleIcon: _0x6603a5,
      }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](F, Ie));
  }
};
W = U([H(0, _0x1ea475(_0x53cae4)), H(1, _0x1ea475(_0x1f430f))], W);
function Re(_0x318ed5, _0x94ee0, _0x3dc8d4, _0x2309ad) {
  return {
    x: _0x3dc8d4 > 0 ? Math.max(0, Math.min(1, _0x318ed5 / _0x3dc8d4)) : 0,
    y: _0x2309ad > 0 ? Math.max(0, Math.min(1, _0x94ee0 / _0x2309ad)) : 0,
  };
}
function G(_0x3a9ad2) {
  "@babel/helpers - typeof";
  return (
    (G =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3d5c81) {
            return typeof _0x3d5c81;
          }
        : function (_0x141b82) {
            return _0x141b82 &&
              typeof Symbol == "function" &&
              _0x141b82.constructor === Symbol &&
              _0x141b82 !== Symbol.prototype
              ? "symbol"
              : typeof _0x141b82;
          }),
    G(_0x3a9ad2)
  );
}
function ze(_0x1594ee, _0x30fa2f) {
  if (G(_0x1594ee) != "object" || !_0x1594ee) return _0x1594ee;
  var _0xe1d78c = _0x1594ee[Symbol.toPrimitive];
  if (_0xe1d78c !== undefined) {
    var _0x3c6259 = _0xe1d78c.call(_0x1594ee, _0x30fa2f || "default");
    if (G(_0x3c6259) != "object") return _0x3c6259;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x30fa2f === "string" ? String : Number)(_0x1594ee);
}
function Be(_0x11853f) {
  var _0x28ab16 = ze(_0x11853f, "string");
  return G(_0x28ab16) == "symbol" ? _0x28ab16 : _0x28ab16 + "";
}
function K(_0x13c209, _0x439bd2, _0x556830) {
  return (
    (_0x439bd2 = Be(_0x439bd2)) in _0x13c209
      ? Object.defineProperty(_0x13c209, _0x439bd2, {
          value: _0x556830,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x13c209[_0x439bd2] = _0x556830),
    _0x13c209
  );
}
function Ve(_0x5986cb) {
  let _0x4b91ad = new Map();
  return (
    _0x5986cb.forEach((_0x4349d7) => {
      let _0x1482fd = _0x4349d7.x + "\x00" + _0x4349d7.y,
        _0x4a13ab = _0x4b91ad.get(_0x1482fd);
      if (_0x4a13ab) {
        ((_0x4a13ab.commentId = _0x4349d7.commentId),
          _0x4a13ab.commentIds["push"](_0x4349d7.commentId),
          (_0x4a13ab.count += 1));
        return;
      }
      _0x4b91ad.set(_0x1482fd, {
        ..._0x4349d7,
        commentIds: [_0x4349d7.commentId],
        count: 1,
      });
    }),
    Array.from(_0x4b91ad.values())
  );
}
function q(_0x3abf2c, _0x3a1708) {
  return !_0x3abf2c.active || _0x3abf2c.unitId !== _0x3a1708;
}
let J = class extends _0x404fb1 {
  constructor(
    _0x30c26b,
    _0x4b77ec,
    _0x590e1b,
    _0x54ae9a,
    _0x41cf44,
    _0x13eb4d,
    _0x48ba4d,
    _0x557911,
    _0x39bf35,
    _0x1ed517,
    _0x2373da,
  ) {
    (super(),
      (this._renderContext = _0x30c26b),
      (this._commandService = _0x4b77ec),
      (this._instanceService = _0x590e1b),
      (this._drawingService = _0x54ae9a),
      (this._draftService = _0x41cf44),
      (this._commentModel = _0x13eb4d),
      (this._panelService = _0x48ba4d),
      (this._hitTestService = _0x557911),
      (this._insertService = _0x39bf35),
      (this._playbackService = _0x1ed517),
      (this._themeService = _0x2373da),
      K(this, "_overlay", undefined),
      K(this, "_commentsVisible", undefined),
      (this._commentsVisible = q(
        this._playbackService["getSnapshot"](),
        this._renderContext["unitId"],
      )),
      (this._overlay = new _0x35254e("slide-thread-comment-overlay", {
        ...this._getColors(),
        zoomRatio: 1,
        markers: [],
        underlines: [],
      })),
      this._commentsVisible || this._overlay["hide"](),
      this._renderContext["scene"].addObject(this._overlay, 10100),
      this.disposeWithMe(
        _0x1f2a73(
          this._overlay["onPointerDown$"].subscribeEvent(
            (_0x36eb59, _0x32db0d) => this._onOverlayPointerDown(_0x32db0d),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x1f2a73(
          this._overlay["onPointerLeave$"].subscribeEvent(() =>
            this._overlay["clearHover"](),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x1f2a73(
          this._renderContext["scene"].onPointerDown$["subscribeEvent"](
            (_0x377b49, _0x3af1d4) => this._onPointerDown(_0x377b49, _0x3af1d4),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x1f2a73(
          this._renderContext["scene"].onPointerMove$["subscribeEvent"](
            (_0x5d62e1) => this._onPointerMove(_0x5d62e1),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x1f2a73(
          this._hitTestService["onPointerDown$"].subscribe((_0x384f91) => {
            this._onDrawingPointerDown(_0x384f91);
          }),
        ),
      ));
    let _0x44ceec = this._getModel();
    (_0x44ceec &&
      (this.disposeWithMe(
        _0x44ceec.pageManager["activeSlideId$"]
          .pipe(_0x14413e(this.dispose$))
          .subscribe(() => this._syncOverlay()),
      ),
      this.disposeWithMe(
        _0x44ceec.zoomRatio$["pipe"](_0x14413e(this.dispose$)).subscribe(() =>
          this._syncOverlay(),
        ),
      )),
      this.disposeWithMe(
        _0x1f2a73(
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
          .pipe(_0x14413e(this.dispose$))
          .subscribe((_0x2b4246) => {
            _0x2b4246.unitId === this._renderContext["unitId"] &&
              this._syncOverlay();
          }),
      ),
      [
        this._panelService["activeCommentId$"],
        this._panelService["hoveredCommentId$"],
      ].forEach((_0x1c8d03) => {
        this.disposeWithMe(
          _0x1c8d03
            .pipe(_0x14413e(this.dispose$))
            .subscribe(() => this._syncOverlay()),
        );
      }),
      [
        this._drawingService["add$"],
        this._drawingService["update$"],
        this._drawingService["remove$"],
      ].forEach((_0x1a7bbc) => {
        this.disposeWithMe(
          _0x1a7bbc.pipe(_0x14413e(this.dispose$)).subscribe((_0x4f7b3f) => {
            _0x4f7b3f.some(
              (_0x480f2f) => _0x480f2f.unitId === this._renderContext["unitId"],
            ) && this._syncOverlay();
          }),
        );
      }),
      this.disposeWithMe(
        this._draftService["placementType$"]
          .pipe(_0x14413e(this.dispose$))
          .subscribe((_0x40a81a) => {
            _0x40a81a !== _0x563095.UNIVER_SLIDE &&
              this._overlay["updateState"]({
                previewMarker: null,
                previewUnderline: null,
              });
          }),
      ),
      this.disposeWithMe(
        this._insertService["pendingInsert$"]
          .pipe(_0x14413e(this.dispose$))
          .subscribe((_0x458962) => {
            _0x458962 &&
              this._draftService["placementType"] === _0x563095.UNIVER_SLIDE &&
              this._draftService["cancel"]();
          }),
      ),
      this.disposeWithMe(
        this._themeService["currentTheme$"]
          .pipe(_0x14413e(this.dispose$))
          .subscribe(() => this._syncOverlay()),
      ),
      this._initPlaybackVisibility(),
      this._syncOverlay());
  }
  _initPlaybackVisibility() {
    this.disposeWithMe(
      this._playbackService["state$"]
        .pipe(_0x14413e(this.dispose$))
        .subscribe((_0x408582) => {
          let _0x36cdb4 = q(_0x408582, this._renderContext["unitId"]);
          if (_0x36cdb4 !== this._commentsVisible) {
            if (((this._commentsVisible = _0x36cdb4), _0x36cdb4)) {
              (this._overlay["show"](), this._syncOverlay());
              return;
            }
            (this._draftService["placementType"] === _0x563095.UNIVER_SLIDE &&
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
  _onDrawingPointerDown(_0x2b5f60) {
    !this._commentsVisible ||
      this._draftService["placementType"] !== _0x563095.UNIVER_SLIDE ||
      (_0x2b5f60.nativeEvent["button"] ?? 0) !== 0 ||
      (this._draftService["place"]({
        unitId: _0x2b5f60.drawing["unitId"],
        subUnitId: _0x2b5f60.drawing["subUnitId"],
        anchor: {
          kind: _0xa68f97.SLIDE_ELEMENT,
          pageId: _0x2b5f60.drawing["subUnitId"],
          elementId: _0x2b5f60.drawing["drawingId"],
        },
      }),
      this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null,
      }),
      this._commandService["executeCommand"](L.id).catch(() => undefined));
  }
  _onPointerDown(_0x3d9f77, _0x3ebbc2) {
    if (
      !this._commentsVisible ||
      this._draftService["placementType"] !== _0x563095.UNIVER_SLIDE ||
      (_0x3d9f77.button ?? 0) !== 0
    )
      return;
    let _0x4ebc65 = this._getModel(),
      _0x58d038 =
        _0x4ebc65 == null
          ? undefined
          : _0x4ebc65.pageManager["getActiveSlide"]();
    if (!_0x4ebc65 || !_0x58d038) {
      this._draftService["cancel"]();
      return;
    }
    let _0x278f1b = this._hitTestService["hitTest"](
        _0x3d9f77.offsetX,
        _0x3d9f77.offsetY,
      ),
      _0x239350 = _0x58d038.getId(),
      _0x5d2dd0 = this._toScenePoint(_0x3d9f77.offsetX, _0x3d9f77.offsetY),
      _0x76b394 = this._getPageRect(_0x4ebc65),
      _0x30916e = Re(
        _0x5d2dd0.x - _0x76b394.left,
        _0x5d2dd0.y - _0x76b394.top,
        _0x76b394.width,
        _0x76b394.height,
      );
    (this._draftService["place"]({
      unitId: _0x4ebc65.getUnitId(),
      subUnitId: _0x239350,
      anchor: _0x278f1b
        ? {
            kind: _0xa68f97.SLIDE_ELEMENT,
            pageId: _0x239350,
            elementId: _0x278f1b.drawing["drawingId"],
          }
        : { kind: _0xa68f97.SLIDE_POSITION, pageId: _0x239350, ..._0x30916e },
    }),
      this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null,
      }),
      _0x3ebbc2.stopPropagation(),
      this._commandService["executeCommand"](L.id).catch(() => undefined));
  }
  _onPointerMove(_0x29798e) {
    if (
      !this._commentsVisible ||
      this._draftService["placementType"] !== _0x563095.UNIVER_SLIDE
    )
      return;
    let _0x3109e6 = this._hitTestService["hitTest"](
        _0x29798e.offsetX,
        _0x29798e.offsetY,
      ),
      _0x47e3dd = _0x3109e6
        ? this._getElementUnderline(_0x3109e6.drawing["drawingId"])
        : null,
      _0x580d0c = this._toScenePoint(_0x29798e.offsetX, _0x29798e.offsetY);
    if (_0x47e3dd) {
      this._overlay["updateState"]({
        previewMarker: _0x580d0c,
        previewUnderline: _0x47e3dd,
      });
      return;
    }
    this._overlay["updateState"]({
      previewMarker: _0x580d0c,
      previewUnderline: null,
    });
  }
  _onOverlayPointerDown(_0x6212cd) {
    var _0x1807b7;
    if (!this._commentsVisible) return;
    let _0x34e1cc = this._getModel(),
      _0x410774 =
        _0x34e1cc == null ||
        (_0x1807b7 = _0x34e1cc.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x1807b7.getId(),
      _0x51a472 = this._overlay["hitCommentId"];
    !_0x34e1cc ||
      !_0x410774 ||
      !_0x51a472 ||
      (this._panelService["setActiveComment"]({
        unitId: _0x34e1cc.getUnitId(),
        subUnitId: _0x410774,
        commentId: _0x51a472,
        trigger: "slide-canvas",
      }),
      _0x6212cd.stopPropagation(),
      this._commandService["executeCommand"](L.id).catch(() => undefined));
  }
  _syncOverlay() {
    var _0x37473a;
    if (!this._commentsVisible) return;
    let _0x261921 = this._getModel(),
      _0x53247d =
        _0x261921 == null ||
        (_0x37473a = _0x261921.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x37473a.getId();
    if (!_0x261921 || !_0x53247d) {
      this._overlay["updateState"]({
        markers: [],
        underlines: [],
        focusedCommentIds: [],
        focusOutlines: [],
      });
      return;
    }
    let _0x4b6ee3 = this._getPageRect(_0x261921),
      _0x27d8bf = [],
      _0x72e02b = new Map();
    (this._commentModel["query"]({
      unitIds: [_0x261921.getUnitId()],
      subUnitIds: [_0x53247d],
      anchorKinds: [_0xa68f97.SLIDE_ELEMENT, _0xa68f97.SLIDE_POSITION],
      resolved: false,
    }).forEach(({ root: _0x3770ae }) => {
      let _0x234fb2 = _0x5052bf(_0x3770ae.ref);
      if (
        (_0x234fb2 == null ? undefined : _0x234fb2.kind) ===
        _0xa68f97.SLIDE_POSITION
      )
        _0x27d8bf.push({
          commentId: _0x3770ae.id,
          x: _0x4b6ee3.left + _0x234fb2.x * _0x4b6ee3.width,
          y: _0x4b6ee3.top + _0x234fb2.y * _0x4b6ee3.height,
        });
      else {
        if (
          (_0x234fb2 == null ? undefined : _0x234fb2.kind) ===
          _0xa68f97.SLIDE_ELEMENT
        ) {
          let _0x36b80b = this._getElementUnderline(
            _0x234fb2.elementId,
            _0x3770ae.id,
          );
          _0x36b80b && _0x72e02b.set(_0x234fb2.elementId, _0x36b80b);
        }
      }
    }),
      this._overlay["updateState"]({
        ...this._getColors(),
        zoomRatio: _0x261921.getZoomRatio(),
        markers: Ve(_0x27d8bf),
        underlines: Array.from(_0x72e02b.values()),
        ...this._getFocusState(_0x261921, _0x53247d),
      }));
  }
  _getElementUnderline(_0x1b828c, _0x34f219 = "") {
    let _0x10a042 = this._getElementOutline(_0x1b828c),
      _0x4dbfbd = this._getModel();
    return !_0x4dbfbd || !_0x10a042
      ? null
      : {
          commentId: _0x34f219,
          left: _0x10a042.left,
          top: _0x10a042.top + _0x10a042.height + 2 / _0x4dbfbd.getZoomRatio(),
          width: _0x10a042.width,
        };
  }
  _getElementOutline(_0x1d8b6b) {
    var _0xcdd15d, _0x227e36;
    let _0x399377 = this._getModel(),
      _0x1fa3e0 =
        _0x399377 == null ||
        (_0xcdd15d = _0x399377.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0xcdd15d.getId();
    if (!_0x399377 || !_0x1fa3e0) return null;
    let _0x2818ba = this._renderContext["scene"],
      _0x35abce = _0x486413(_0x399377.getUnitId(), _0x1fa3e0, _0x1d8b6b),
      _0x234b36 =
        ((_0x227e36 = _0x2818ba.getObjectIncludeInGroup) == null
          ? undefined
          : _0x227e36.call(_0x2818ba, _0x35abce)) ??
        _0x2818ba.getObject(_0x35abce);
    if (!_0x234b36) return null;
    let _0x456abc = _0x234b36.getRealBound();
    return {
      left: _0x456abc.left,
      top: _0x456abc.top,
      width: _0x456abc.width,
      height: _0x456abc.height,
    };
  }
  _getFocusState(_0x11a809, _0x34ebfb) {
    let _0x28b0aa = [],
      _0x341332 = new Map();
    return (
      [
        this._panelService["activeCommentId"],
        this._panelService["hoveredCommentId"],
      ].forEach((_0x272d4c) => {
        if (
          !_0x272d4c ||
          _0x272d4c.unitId !== _0x11a809.getUnitId() ||
          _0x272d4c.subUnitId !== _0x34ebfb
        )
          return;
        let _0x2434c0 = this._commentModel["getComment"](
          _0x272d4c.unitId,
          _0x272d4c.subUnitId,
          _0x272d4c.commentId,
        );
        if (!_0x2434c0) return;
        _0x28b0aa.push(_0x272d4c.commentId);
        let _0x13ebdb = _0x5052bf(_0x2434c0.ref);
        if (
          (_0x13ebdb == null ? undefined : _0x13ebdb.kind) ===
            _0xa68f97.SLIDE_ELEMENT &&
          !_0x341332.has(_0x13ebdb.elementId)
        ) {
          let _0x82f0a0 = this._getElementOutline(_0x13ebdb.elementId);
          _0x82f0a0 && _0x341332.set(_0x13ebdb.elementId, _0x82f0a0);
        }
      }),
      {
        focusedCommentIds: _0x28b0aa,
        focusOutlines: Array.from(_0x341332.values()),
      }
    );
  }
  _getPageRect(_0x234fd7) {
    let _0x36a4db = this._renderContext["scene"].getObject(_0x5820f1),
      _0x2c26c4 = _0x234fd7.getSnapshot().defaultPageSize;
    return {
      left: (_0x36a4db == null ? undefined : _0x36a4db.left) ?? 0,
      top: (_0x36a4db == null ? undefined : _0x36a4db.top) ?? 0,
      width:
        (_0x36a4db == null ? undefined : _0x36a4db.width) ?? _0x2c26c4.width,
      height:
        (_0x36a4db == null ? undefined : _0x36a4db.height) ?? _0x2c26c4.height,
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
        _0x563095.UNIVER_SLIDE,
      ) ?? null
    );
  }
  _toScenePoint(_0x37d642, _0x3c683f) {
    var _0xc92e3d, _0x40e479, _0x4821c5;
    let _0x563f6d = new _0x3bc3df(_0x37d642, _0x3c683f),
      _0x25b268 = this._renderContext["scene"],
      _0x45180c =
        ((_0xc92e3d = _0x25b268.getActiveViewportByCoord) == null
          ? undefined
          : _0xc92e3d.call(_0x25b268, _0x563f6d)) ??
        ((_0x40e479 = _0x25b268.getMainViewport) == null
          ? undefined
          : _0x40e479.call(_0x25b268));
    return (
      (_0x45180c == null ||
      (_0x4821c5 = _0x45180c.transformVector2SceneCoord) == null
        ? undefined
        : _0x4821c5.call(_0x45180c, _0x563f6d)) ?? _0x563f6d
    );
  }
};
J = U(
  [
    H(1, _0x4794c4),
    H(2, _0x3554a9),
    H(3, _0x1ea475(_0x5e6760)),
    H(4, _0x1ea475(_0x34312e)),
    H(5, _0x1ea475(_0x102aa1)),
    H(6, _0x1ea475(_0x13cca1)),
    H(7, _0x1ea475(_0x27dc47)),
    H(8, _0x1ea475(_0x578dbc)),
    H(9, _0x516285),
    H(10, _0x1ea475(_0x2dcdd8)),
  ],
  J,
);
function Y(_0x1af832) {
  let _0x5d35c7 = _0x1af832.get(_0x3554a9),
    _0x4206d4 = _0x1af832.get(_0x2076a9);
  return _0x1f0761([
    _0x5d35c7.getCurrentTypeOfUnit$(_0x563095.UNIVER_SLIDE),
    _0x4206d4.permissionPointUpdate$["pipe"](_0x178a5c(undefined)),
  ]).pipe(
    _0x1d7661(
      ([_0x31ac0b]) =>
        !_0x31ac0b ||
        !_0x541b47(
          _0x4206d4,
          _0x31ac0b.getUnitId(),
          _0x31ac0b.getUnitId(),
          _0x2ecd03.Comment,
        ),
    ),
  );
}
function He(_0xf64ba4) {
  return {
    id: L.id,
    type: _0x7d723c.BUTTON,
    icon: "CommentIcon",
    title: "slides-thread-comment-ui.openComments",
    tooltip: "slides-thread-comment-ui.openComments",
    hidden$: _0x5dd7e8(_0xf64ba4, _0x563095.UNIVER_SLIDE),
  };
}
function Ue(_0x71eac) {
  return {
    id: R.id,
    type: _0x7d723c.BUTTON,
    icon: "InsertCommentDoubleIcon",
    title: "slides-thread-comment-ui.addComment",
    tooltip: "slides-thread-comment-ui.addComment",
    hidden$: _0x5dd7e8(_0x71eac, _0x563095.UNIVER_SLIDE),
    disabled$: Y(_0x71eac),
  };
}
function X(_0x101fc5) {
  return {
    id: z.id,
    type: _0x7d723c.BUTTON,
    icon: "InsertCommentDoubleIcon",
    title: "slides-thread-comment-ui.addComment",
    tooltip: "slides-thread-comment-ui.addComment",
    disabled$: Y(_0x101fc5),
  };
}
const We = {
    [_0x39d4d9.RIBBON]: {
      [_0x1f245d]: {
        [_0x537055]: {
          [z.id]: {
            order: 2,
            gridLayout: { row: 1, column: 2, rowSpan: 2, showLabel: true },
            menuItemFactory: X,
          },
        },
      },
    },
  },
  Ge = {
    [_0x285c37.OTHERS]: {
      [L.id]: {
        order: 10,
        gridLayout: { row: 1, column: 10, showLabel: true },
        menuItemFactory: He,
      },
      [R.id]: {
        order: 10.1,
        gridLayout: { row: 2, column: 10, showLabel: true },
        menuItemFactory: Ue,
      },
    },
    [_0x1f39e7.DRAWING]: {
      [_0x41c730.OTHERS]: { [z.id]: { order: 0, menuItemFactory: X } },
    },
    [_0x9a0338.SLIDE]: { [z.id]: { order: 10, menuItemFactory: X } },
  };
function Ke(_0x3c8be1, _0x692047, _0x53c43e) {
  return _0x3c8be1.query({
    unitIds: [_0x692047],
    subUnitIds: [_0x53c43e],
    resolved: false,
  }).length;
}
function Z({ unitId: _0x3de7bf, pageId: _0x4204cf, setActivePage: _0x198fe7 }) {
  let _0x214f78 = _0x3dd551(_0x4794c4),
    _0x31a7eb = _0x3dd551(_0x102aa1),
    _0x3f5dd0 = _0x3dd551(_0x4aee60);
  _0x47954e(
    () =>
      _0x31a7eb.commentUpdate$["pipe"](
        _0x373c34(
          (_0x1611f0) =>
            _0x1611f0.unitId === _0x3de7bf && _0x1611f0.subUnitId === _0x4204cf,
        ),
      ),
    undefined,
    false,
    [_0x31a7eb, _0x4204cf, _0x3de7bf],
  );
  let _0x2ebbab = Ke(_0x31a7eb, _0x3de7bf, _0x4204cf);
  return _0x2ebbab === 0
    ? null
    : _0x2a7cfa("button", {
        type: "button",
        "aria-label": _0x3f5dd0.t("slides-thread-comment-ui.addComment"),
        title: _0x3f5dd0.t("slides-thread-comment-ui.addComment"),
        onClick: (_0x22f19e) => {
          (_0x22f19e.stopPropagation(),
            _0x198fe7(_0x4204cf),
            _0x214f78.executeCommand(L.id));
        },
        className:
          "univer-absolute -univer-right-1.5 -univer-top-1.5 univer-z-[4] univer-flex univer-h-7 univer-min-w-7 univer-cursor-pointer univer-select-none univer-items-center univer-justify-center univer-rounded-lg univer-border-2 univer-border-solid univer-border-gray-0 univer-bg-yellow-400 univer-px-1.5 univer-text-sm univer-font-semibold univer-leading-none univer-text-gray-0 univer-transition hover:univer-brightness-95 focus-visible:univer-outline-none focus-visible:univer-ring-2 focus-visible:univer-ring-primary-500",
        children: _0x2ebbab,
      });
}
let Q = class extends _0x444d9e {
  constructor(_0x287b2a, _0x2690b2, _0x271071) {
    (super(),
      [z, L, R].forEach((_0xe33c7d) =>
        this.disposeWithMe(_0x287b2a.registerCommand(_0xe33c7d)),
      ),
      _0x2690b2.mergeMenu(Ge),
      _0x2690b2.mergeMenu(We),
      this.disposeWithMe(_0x271071.registerComponent(_0xd47071, () => Z)));
  }
};
Q = U([H(0, _0x4794c4), H(1, _0x165395), H(2, _0x5945fe)], Q);
const qe = [[W], [Q]];
let $ = class extends _0x2d1ba5 {
  constructor(_0x422cfa = V, _0x52a182, _0xbe884d, _0x21b32d) {
    (super(),
      (this._config = _0x422cfa),
      (this._injector = _0x52a182),
      (this._configService = _0xbe884d),
      (this._renderManagerService = _0x21b32d));
    let { ..._0x5c6f78 } = _0x409f7b({}, V, this._config);
    this._configService["setConfig"](B, _0x5c6f78);
  }
  onStarting() {
    (qe.forEach((_0x4fa56e) => {
      this._injector["add"](_0x4fa56e);
    }),
      this._injector["get"](W));
  }
  onRendered() {
    (this._renderManagerService["registerRenderModule"](
      _0x563095.UNIVER_SLIDE,
      [J],
    ),
      this._injector["get"](Q));
  }
};
(K($, "pluginName", "UNIVER_SLIDES_THREAD_COMMENT_UI_PLUGIN"),
  K($, "packageName", Pe),
  K($, "version", Fe),
  K($, "type", _0x563095.UNIVER_SLIDE),
  ($ = U(
    [
      _0x224336(_0x447eaf, _0x5ad4fe, _0x4ecaa1, _0x24d2fa, _0x209774),
      H(1, _0x1ea475(_0x17df49)),
      H(2, _0x11e889),
      H(3, _0x1e20eb),
    ],
    $,
  )));
export {
  L as OpenSlideCommentPanelOperation,
  B as SLIDES_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY,
  R as StartSlideCommentPlacementOperation,
  $ as UniverSlidesThreadCommentUIPlugin,
};
