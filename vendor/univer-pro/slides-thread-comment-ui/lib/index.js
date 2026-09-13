import { ISlideDrawingService as var_core_value_sig3C5B, SlideModel as var_core_value_sig200B, getSlideElementDisplayName as var_core_value_sig3863, getSlidePermissionValue as var_core_value_sigC97C } from "@univerjs-pro/slides";
import { ISlidePlaybackService as var_core_value_sigC4B1, SLIDE_PAGE_RECT_KEY as var_core_value_sig1BD9, SLIDE_SHAPE_FORMAT_RIBBON_GROUP_ADVANCED as var_core_value_sigE43E, SLIDE_SHAPE_FORMAT_RIBBON_TAB as var_core_value_sigA937, SLIDE_THUMBNAIL_OVERLAY_PART as var_core_value_sigCAD5, SlideContextMenuPosition as var_core_value_sigE503, SlideHitTestService as var_core_value_sig48DD, SlideInsertService as var_core_value_sig5E6A, UniverSlidesUIPlugin as var_core_value_sigB7FC, buildDrawingOKey as var_core_value_sig9CD9 } from "@univerjs-pro/slides-ui";
import { CommandType as var_core_value_sigFD0C, DependentOn as var_core_value_sig849B, Disposable as var_core_value_sig5F1A, ICommandService as var_core_value_sigB455, IConfigService as var_core_value_sig5241, IPermissionService as var_core_value_sigC6E5, IUniverInstanceService as var_core_value_sigCEFB, Inject as var_core_value_sig1537, Injector as var_core_value_sigE4C6, LocaleService as var_core_value_sig4313, Plugin as var_core_value_sigFC87, RxDisposable as var_core_value_sig156F, ThemeService as var_core_value_sigDD51, UniverInstanceType as var_core_value_sigF057, UserManagerService as var_core_value_sig72F6, merge as var_core_value_sig9FBA, toDisposable as var_core_value_sigFE01 } from "@univerjs/core";
import { ThreadCommentAnchorKind as var_core_value_sigA2CE, ThreadCommentModel as var_core_value_sig1975, deserializeThreadCommentAnchor as var_core_value_sig6EA1, serializeThreadCommentAnchor as var_core_value_sig029F } from "@univerjs/thread-comment";
import { ThreadCommentCanvasOverlay as var_core_value_sig3767, ThreadCommentDraftService as var_core_value_sig670B, ThreadCommentPanel as var_core_value_sig6912, ThreadCommentPanelService as var_core_value_sigE235, UniverThreadCommentUIPlugin as var_core_value_sig7664 } from "@univerjs/thread-comment-ui";
import { ComponentManager as var_core_value_sig2281, ContextMenuGroup as var_core_value_sig5E86, FloatingObjectToolbarPosition as var_core_value_sig6998, IMenuManagerService as var_core_value_sigF639, ISidebarService as var_core_value_sigEAE5, IUIPartsService as var_core_value_sigE94C, IconManager as var_core_value_sig6D47, MenuItemType as var_core_value_sigCB82, MenuManagerPosition as var_core_value_sigCF4E, RibbonStartGroup as var_core_value_sig6CAD, getMenuHiddenObservable as var_core_value_sig8CF5, useDependency as var_core_value_sigDDD7, useObservable as var_core_value_sigB2CE } from "@univerjs/ui";
import { UniverLicensePlugin as var_core_value_sig443C } from "@univerjs-pro/license";
import { UniverSlidesThreadCommentPlugin as var_core_value_sig39B1 } from "@univerjs-pro/slides-thread-comment";
import { IRenderManagerService as var_core_value_sig210D, UniverRenderEnginePlugin as var_core_value_sigB4B4, Vector2 as var_core_value_sigD407 } from "@univerjs/engine-render";
import { CommentIcon as var_core_value_sig63F3, InsertCommentDoubleIcon as var_core_value_sig6A71 } from "@univerjs/icons";
import { UnitAction as var_core_value_sig3BF6 } from "@univerjs/protocol";
import { useMemo as var_core_value_sig38CE } from "react";
import { combineLatest as var_core_value_sig62B7, filter as var_core_value_sig37A8, map as var_core_value_sigA90D, of as var_core_value_sig7A3C, startWith as var_core_value_sig0511, takeUntil as var_core_value_sig1F44 } from "rxjs";
import { jsx as var_core_value_sigCB04 } from "react/jsx-runtime";
const F = "univer.slide.thread-comment-panel";
function I(var_core_value_sigCFFA) {
  let var_core_value_sig58C1 = var_core_value_sigCFFA.get(var_core_value_sigE235);
  var_core_value_sigCFFA.get(var_core_value_sigEAE5).open({
    header: {
      title: "slides-thread-comment-ui.addComment"
    },
    children: {
      label: F
    },
    width: 320,
    onClose: () => var_core_value_sig58C1.setPanelVisible(false)
  }), var_core_value_sig58C1.setPanelVisible(true);
}
const L = {
    id: "slide.operation.open-comment-panel",
    type: var_core_value_sigFD0C.OPERATION,
    handler(var_core_value_sig5090) {
      return I(var_core_value_sig5090), true;
    }
  },
  R = {
    id: "slide.operation.start-comment-placement",
    type: var_core_value_sigFD0C.OPERATION,
    handler(var_core_value_sigC368) {
      let var_core_value_sigAD56 = var_core_value_sigC368.get(var_core_value_sigCEFB).getCurrentUnitOfType(var_core_value_sigF057.UNIVER_SLIDE);
      return var_core_value_sigAD56 != null && var_core_value_sigAD56.pageManager["getActiveSlide"]() ? (var_core_value_sigC368.get(var_core_value_sig5E6A).cancelPendingInsert(), var_core_value_sigC368.get(var_core_value_sig670B).startPlacement(var_core_value_sigF057.UNIVER_SLIDE, var_core_value_sigAD56.getUnitId()), true) : false;
    }
  },
  z = {
    id: "slide.operation.add-element-comment",
    type: var_core_value_sigFD0C.OPERATION,
    handler(var_core_value_sigDB4A) {
      var var_core_value_sig6418;
      let var_core_value_sig1896 = var_core_value_sigDB4A.get(var_core_value_sig3C5B).getFocusDrawings()[0],
        var_core_value_sig0285 = var_core_value_sigDB4A.get(var_core_value_sigCEFB).getCurrentUnitOfType(var_core_value_sigF057.UNIVER_SLIDE);
      return !var_core_value_sig1896 || !var_core_value_sig0285 || var_core_value_sig1896.unitId !== var_core_value_sig0285.getUnitId() || var_core_value_sig1896.subUnitId !== ((var_core_value_sig6418 = var_core_value_sig0285.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sig6418.getId()) ? false : (var_core_value_sigDB4A.get(var_core_value_sig670B).place({
        unitId: var_core_value_sig1896.unitId,
        subUnitId: var_core_value_sig1896.subUnitId,
        anchor: {
          kind: var_core_value_sigA2CE.SLIDE_ELEMENT,
          pageId: var_core_value_sig1896.subUnitId,
          elementId: var_core_value_sig1896.drawingId
        }
      }), I(var_core_value_sigDB4A), true);
    }
  },
  B = "slides-thread-comment-ui.config",
  V = {};
var Pe = "@univerjs-pro/slides-thread-comment-ui",
  Fe = "1.0.0-insiders.20260907-70fc579";
function Ie() {
  let var_core_value_sig777D = var_core_value_sigDDD7(var_core_value_sigCEFB),
    var_core_value_sig3F4C = var_core_value_sigDDD7(var_core_value_sigB455),
    var_core_value_sigD65A = var_core_value_sigDDD7(var_core_value_sig670B),
    var_core_value_sig5A13 = var_core_value_sigDDD7(var_core_value_sig72F6),
    var_core_value_sigF593 = var_core_value_sigDDD7(var_core_value_sig3C5B),
    var_core_value_sig3607 = var_core_value_sig777D.getCurrentUnitOfType(var_core_value_sigF057.UNIVER_SLIDE),
    var_core_value_sigB512 = var_core_value_sig3607 instanceof var_core_value_sig200B ? var_core_value_sig3607 : undefined,
    var_core_value_sigF2E6 = var_core_value_sigDDD7(var_core_value_sigC6E5);
  var_core_value_sigB2CE(() => var_core_value_sigF2E6.permissionPointUpdate$, undefined, false, [var_core_value_sigF2E6]);
  let var_core_value_sig34C8 = var_core_value_sigB2CE(var_core_value_sigD65A.draft$, var_core_value_sigD65A.draft),
    var_core_value_sigB744 = var_core_value_sig38CE(() => (var_core_value_sigB512 == null ? undefined : var_core_value_sigB512.pageManager["activeSlideId$"]) ?? var_core_value_sig7A3C(undefined), [var_core_value_sigB512]),
    var_core_value_sigEAE2 = var_core_value_sig34C8 && var_core_value_sig34C8.unitId === (var_core_value_sigB512 == null ? undefined : var_core_value_sigB512.getUnitId()) ? {
      id: "",
      threadId: "",
      unitId: var_core_value_sig34C8.unitId,
      subUnitId: var_core_value_sig34C8.subUnitId,
      ref: var_core_value_sig029F(var_core_value_sig34C8.anchor),
      dT: "",
      personId: var_core_value_sig5A13.getCurrentUser().userID,
      text: {
        dataStream: "\x0d\x0a"
      }
    } : null;
  if (!var_core_value_sigB512) return null;
  let var_core_value_sigE68A = !var_core_value_sigC97C(var_core_value_sigF2E6, var_core_value_sigB512.getUnitId(), var_core_value_sigB512.getUnitId(), var_core_value_sig3BF6.Comment);
  return var_core_value_sigCB04(var_core_value_sig6912, {
    unitId: var_core_value_sigB512.getUnitId(),
    subUnitId$: var_core_value_sigB744,
    type: var_core_value_sigF057.UNIVER_SLIDE,
    onAdd: () => var_core_value_sig3F4C.executeCommand(R.id),
    disableAdd: var_core_value_sigE68A,
    getSubUnitName: var_core_value_sig48BD => {
      var var_core_value_sig429F;
      return ((var_core_value_sig429F = var_core_value_sigB512.pageManager["getPage"](var_core_value_sig48BD)) == null ? undefined : var_core_value_sig429F.name) ?? "";
    },
    tempComment: var_core_value_sigEAE2,
    onTempCommentClose: () => var_core_value_sigD65A.cancel(),
    formatRef: var_core_value_sigF62A => Le(var_core_value_sigF62A, var_core_value_sigF593)
  });
}
function Le(var_core_value_sig3E68, var_core_value_sigF4C5) {
  let var_core_value_sig5410 = var_core_value_sig6EA1(var_core_value_sig3E68.ref);
  if ((var_core_value_sig5410 == null ? undefined : var_core_value_sig5410.kind) === var_core_value_sigA2CE.SLIDE_ELEMENT) {
    let var_core_value_sig8178 = var_core_value_sigF4C5.getDrawingData(var_core_value_sig3E68.unitId, var_core_value_sig5410.pageId ?? var_core_value_sig3E68.subUnitId)[var_core_value_sig5410.elementId];
    return var_core_value_sig8178 ? var_core_value_sig3863(var_core_value_sig8178.element) : var_core_value_sig5410.elementId;
  }
  return (var_core_value_sig5410 == null ? undefined : var_core_value_sig5410.kind) === var_core_value_sigA2CE.SLIDE_POSITION ? Math.round(var_core_value_sig5410.x * 100) + "%, " + Math.round(var_core_value_sig5410.y * 100) + "%" : var_core_value_sig3E68.ref;
}
function H(var_core_value_sig492F, var_core_value_sig8EA0) {
  return function (var_core_value_sigE9ED, var_core_value_sigB577) {
    var_core_value_sig8EA0(var_core_value_sigE9ED, var_core_value_sigB577, var_core_value_sig492F);
  };
}
function U(var_core_value_sigA6F6, var_core_value_sigCDDA, var_core_value_sigE243, var_core_value_sig74A8) {
  var var_core_value_sig21B2 = arguments.length,
    var_core_value_sigDE08 = var_core_value_sig21B2 < 3 ? var_core_value_sigCDDA : var_core_value_sig74A8 === null ? var_core_value_sig74A8 = Object.getOwnPropertyDescriptor(var_core_value_sigCDDA, var_core_value_sigE243) : var_core_value_sig74A8,
    var_core_value_sigACCB;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigDE08 = Reflect.decorate(var_core_value_sigA6F6, var_core_value_sigCDDA, var_core_value_sigE243, var_core_value_sig74A8);else {
    for (var var_core_value_sig7F33 = var_core_value_sigA6F6.length - 1; var_core_value_sig7F33 >= 0; var_core_value_sig7F33--) (var_core_value_sigACCB = var_core_value_sigA6F6[var_core_value_sig7F33]) && (var_core_value_sigDE08 = (var_core_value_sig21B2 < 3 ? var_core_value_sigACCB(var_core_value_sigDE08) : var_core_value_sig21B2 > 3 ? var_core_value_sigACCB(var_core_value_sigCDDA, var_core_value_sigE243, var_core_value_sigDE08) : var_core_value_sigACCB(var_core_value_sigCDDA, var_core_value_sigE243)) || var_core_value_sigDE08);
  }
  return var_core_value_sig21B2 > 3 && var_core_value_sigDE08 && Object.defineProperty(var_core_value_sigCDDA, var_core_value_sigE243, var_core_value_sigDE08), var_core_value_sigDE08;
}
let W = class extends var_core_value_sig5F1A {
  constructor(var_core_value_sig9572, var_core_value_sigD873) {
    super(), this._componentManager = var_core_value_sig9572, this._iconManager = var_core_value_sigD873, this._registerIcons(), this._registerComponents();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      CommentIcon: var_core_value_sig63F3,
      InsertCommentDoubleIcon: var_core_value_sig6A71
    }));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](F, Ie));
  }
};
W = U([H(0, var_core_value_sig1537(var_core_value_sig2281)), H(1, var_core_value_sig1537(var_core_value_sig6D47))], W);
function Re(var_core_value_sig0C53, var_core_value_sigEA04, var_core_value_sig7A62, var_core_value_sig8109) {
  return {
    x: var_core_value_sig7A62 > 0 ? Math.max(0, Math.min(1, var_core_value_sig0C53 / var_core_value_sig7A62)) : 0,
    y: var_core_value_sig8109 > 0 ? Math.max(0, Math.min(1, var_core_value_sigEA04 / var_core_value_sig8109)) : 0
  };
}
function G(var_core_value_sig7565) {
  "@babel/helpers - typeof";

  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigA12B) {
    return typeof var_core_value_sigA12B;
  } : function (var_core_value_sigF230) {
    return var_core_value_sigF230 && typeof Symbol == "function" && var_core_value_sigF230.constructor === Symbol && var_core_value_sigF230 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigF230;
  }, G(var_core_value_sig7565);
}
function ze(var_core_value_sigD4FB, var_core_value_sig3E71) {
  if (G(var_core_value_sigD4FB) != "object" || !var_core_value_sigD4FB) return var_core_value_sigD4FB;
  var var_core_value_sig01B3 = var_core_value_sigD4FB[Symbol.toPrimitive];
  if (var_core_value_sig01B3 !== undefined) {
    var var_core_value_sig7442 = var_core_value_sig01B3.call(var_core_value_sigD4FB, var_core_value_sig3E71 || "default");
    if (G(var_core_value_sig7442) != "object") return var_core_value_sig7442;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig3E71 === "string" ? String : Number)(var_core_value_sigD4FB);
}
function Be(var_core_value_sigDF87) {
  var var_core_value_sig9EE0 = ze(var_core_value_sigDF87, "string");
  return G(var_core_value_sig9EE0) == "symbol" ? var_core_value_sig9EE0 : var_core_value_sig9EE0 + "";
}
function K(var_core_value_sigF051, var_core_value_sig0B45, var_core_value_sig36F8) {
  return (var_core_value_sig0B45 = Be(var_core_value_sig0B45)) in var_core_value_sigF051 ? Object.defineProperty(var_core_value_sigF051, var_core_value_sig0B45, {
    value: var_core_value_sig36F8,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigF051[var_core_value_sig0B45] = var_core_value_sig36F8, var_core_value_sigF051;
}
function Ve(var_core_value_sig03E1) {
  let var_core_value_sigBB57 = new Map();
  return var_core_value_sig03E1.forEach(var_core_value_sig09B8 => {
    let var_core_value_sig6F91 = var_core_value_sig09B8.x + "\x00" + var_core_value_sig09B8.y,
      var_core_value_sigF9C7 = var_core_value_sigBB57.get(var_core_value_sig6F91);
    if (var_core_value_sigF9C7) {
      var_core_value_sigF9C7.commentId = var_core_value_sig09B8.commentId, var_core_value_sigF9C7.commentIds["push"](var_core_value_sig09B8.commentId), var_core_value_sigF9C7.count += 1;
      return;
    }
    var_core_value_sigBB57.set(var_core_value_sig6F91, {
      ...var_core_value_sig09B8,
      commentIds: [var_core_value_sig09B8.commentId],
      count: 1
    });
  }), Array.from(var_core_value_sigBB57.values());
}
function q(var_core_value_sig7C4A, var_core_value_sigE799) {
  return !var_core_value_sig7C4A.active || var_core_value_sig7C4A.unitId !== var_core_value_sigE799;
}
let J = class extends var_core_value_sig156F {
  constructor(var_core_value_sig8895, var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632, var_core_value_sig12F2, var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7, var_core_value_sigD0A8) {
    super(), this._renderContext = var_core_value_sig8895, this._commandService = var_core_value_sigC80B, this._instanceService = var_core_value_sig284F, this._drawingService = var_core_value_sigE154, this._draftService = var_core_value_sig4632, this._commentModel = var_core_value_sig12F2, this._panelService = var_core_value_sig2259, this._hitTestService = var_core_value_sig9E2F, this._insertService = var_core_value_sigD082, this._playbackService = var_core_value_sigDBB7, this._themeService = var_core_value_sigD0A8, K(this, "_overlay", undefined), K(this, "_commentsVisible", undefined), this._commentsVisible = q(this._playbackService["getSnapshot"](), this._renderContext["unitId"]), this._overlay = new var_core_value_sig3767("slide-thread-comment-overlay", {
      ...this._getColors(),
      zoomRatio: 1,
      markers: [],
      underlines: []
    }), this._commentsVisible || this._overlay["hide"](), this._renderContext["scene"].addObject(this._overlay, 10100), this.disposeWithMe(var_core_value_sigFE01(this._overlay["onPointerDown$"].subscribeEvent((var_core_value_sigBC46, var_core_value_sig3D7D) => this._onOverlayPointerDown(var_core_value_sig3D7D)))), this.disposeWithMe(var_core_value_sigFE01(this._overlay["onPointerLeave$"].subscribeEvent(() => this._overlay["clearHover"]()))), this.disposeWithMe(var_core_value_sigFE01(this._renderContext["scene"].onPointerDown$["subscribeEvent"]((var_core_value_sig27E5, var_core_value_sig8061) => this._onPointerDown(var_core_value_sig27E5, var_core_value_sig8061)))), this.disposeWithMe(var_core_value_sigFE01(this._renderContext["scene"].onPointerMove$["subscribeEvent"](var_core_value_sig4D4C => this._onPointerMove(var_core_value_sig4D4C)))), this.disposeWithMe(var_core_value_sigFE01(this._hitTestService["onPointerDown$"].subscribe(var_core_value_sigC9E0 => {
      this._onDrawingPointerDown(var_core_value_sigC9E0);
    })));
    let var_core_value_sigF4B9 = this._getModel();
    var_core_value_sigF4B9 && (this.disposeWithMe(var_core_value_sigF4B9.pageManager["activeSlideId$"].pipe(var_core_value_sig1F44(this.dispose$)).subscribe(() => this._syncOverlay())), this.disposeWithMe(var_core_value_sigF4B9.zoomRatio$["pipe"](var_core_value_sig1F44(this.dispose$)).subscribe(() => this._syncOverlay()))), this.disposeWithMe(var_core_value_sigFE01(this._renderContext["engine"].onTransformChange$["subscribeEvent"](() => queueMicrotask(() => {
      this._disposed || this._syncOverlay();
    })))), this.disposeWithMe(this._commentModel["commentUpdate$"].pipe(var_core_value_sig1F44(this.dispose$)).subscribe(var_core_value_sig76BA => {
      var_core_value_sig76BA.unitId === this._renderContext["unitId"] && this._syncOverlay();
    })), [this._panelService["activeCommentId$"], this._panelService["hoveredCommentId$"]].forEach(var_core_value_sigFBFA => {
      this.disposeWithMe(var_core_value_sigFBFA.pipe(var_core_value_sig1F44(this.dispose$)).subscribe(() => this._syncOverlay()));
    }), [this._drawingService["add$"], this._drawingService["update$"], this._drawingService["remove$"]].forEach(var_core_value_sigF602 => {
      this.disposeWithMe(var_core_value_sigF602.pipe(var_core_value_sig1F44(this.dispose$)).subscribe(var_core_value_sig2AD0 => {
        var_core_value_sig2AD0.some(var_core_value_sig7524 => var_core_value_sig7524.unitId === this._renderContext["unitId"]) && this._syncOverlay();
      }));
    }), this.disposeWithMe(this._draftService["placementType$"].pipe(var_core_value_sig1F44(this.dispose$)).subscribe(var_core_value_sig1BBD => {
      var_core_value_sig1BBD !== var_core_value_sigF057.UNIVER_SLIDE && this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null
      });
    })), this.disposeWithMe(this._insertService["pendingInsert$"].pipe(var_core_value_sig1F44(this.dispose$)).subscribe(var_core_value_sigF704 => {
      var_core_value_sigF704 && this._draftService["placementType"] === var_core_value_sigF057.UNIVER_SLIDE && this._draftService["cancel"]();
    })), this.disposeWithMe(this._themeService["currentTheme$"].pipe(var_core_value_sig1F44(this.dispose$)).subscribe(() => this._syncOverlay())), this._initPlaybackVisibility(), this._syncOverlay();
  }
  _initPlaybackVisibility() {
    this.disposeWithMe(this._playbackService["state$"].pipe(var_core_value_sig1F44(this.dispose$)).subscribe(var_core_value_sig2BCF => {
      let var_core_value_sig0D69 = q(var_core_value_sig2BCF, this._renderContext["unitId"]);
      if (var_core_value_sig0D69 !== this._commentsVisible) {
        if (this._commentsVisible = var_core_value_sig0D69, var_core_value_sig0D69) {
          this._overlay["show"](), this._syncOverlay();
          return;
        }
        this._draftService["placementType"] === var_core_value_sigF057.UNIVER_SLIDE && this._draftService["cancel"](), this._overlay["clearHover"](), this._overlay["updateState"]({
          markers: [],
          underlines: [],
          focusedCommentIds: [],
          focusOutlines: [],
          previewMarker: null,
          previewUnderline: null
        }), this._overlay["hide"]();
      }
    }));
  }
  _onDrawingPointerDown(var_core_value_sig5CEE) {
    !this._commentsVisible || this._draftService["placementType"] !== var_core_value_sigF057.UNIVER_SLIDE || (var_core_value_sig5CEE.nativeEvent["button"] ?? 0) !== 0 || (this._draftService["place"]({
      unitId: var_core_value_sig5CEE.drawing["unitId"],
      subUnitId: var_core_value_sig5CEE.drawing["subUnitId"],
      anchor: {
        kind: var_core_value_sigA2CE.SLIDE_ELEMENT,
        pageId: var_core_value_sig5CEE.drawing["subUnitId"],
        elementId: var_core_value_sig5CEE.drawing["drawingId"]
      }
    }), this._overlay["updateState"]({
      previewMarker: null,
      previewUnderline: null
    }), this._commandService["executeCommand"](L.id).catch(() => undefined));
  }
  _onPointerDown(var_core_value_sigE92A, var_core_value_sig362B) {
    if (!this._commentsVisible || this._draftService["placementType"] !== var_core_value_sigF057.UNIVER_SLIDE || (var_core_value_sigE92A.button ?? 0) !== 0) return;
    let var_core_value_sig5CA5 = this._getModel(),
      var_core_value_sigE90F = var_core_value_sig5CA5 == null ? undefined : var_core_value_sig5CA5.pageManager["getActiveSlide"]();
    if (!var_core_value_sig5CA5 || !var_core_value_sigE90F) {
      this._draftService["cancel"]();
      return;
    }
    let var_core_value_sigEFD4 = this._hitTestService["hitTest"](var_core_value_sigE92A.offsetX, var_core_value_sigE92A.offsetY),
      var_core_value_sig861B = var_core_value_sigE90F.getId(),
      var_core_value_sig5237 = this._toScenePoint(var_core_value_sigE92A.offsetX, var_core_value_sigE92A.offsetY),
      var_core_value_sigBB00 = this._getPageRect(var_core_value_sig5CA5),
      var_core_value_sig7E54 = Re(var_core_value_sig5237.x - var_core_value_sigBB00.left, var_core_value_sig5237.y - var_core_value_sigBB00.top, var_core_value_sigBB00.width, var_core_value_sigBB00.height);
    this._draftService["place"]({
      unitId: var_core_value_sig5CA5.getUnitId(),
      subUnitId: var_core_value_sig861B,
      anchor: var_core_value_sigEFD4 ? {
        kind: var_core_value_sigA2CE.SLIDE_ELEMENT,
        pageId: var_core_value_sig861B,
        elementId: var_core_value_sigEFD4.drawing["drawingId"]
      } : {
        kind: var_core_value_sigA2CE.SLIDE_POSITION,
        pageId: var_core_value_sig861B,
        ...var_core_value_sig7E54
      }
    }), this._overlay["updateState"]({
      previewMarker: null,
      previewUnderline: null
    }), var_core_value_sig362B.stopPropagation(), this._commandService["executeCommand"](L.id).catch(() => undefined);
  }
  _onPointerMove(var_core_value_sig9A8D) {
    if (!this._commentsVisible || this._draftService["placementType"] !== var_core_value_sigF057.UNIVER_SLIDE) return;
    let var_core_value_sigC259 = this._hitTestService["hitTest"](var_core_value_sig9A8D.offsetX, var_core_value_sig9A8D.offsetY),
      var_core_value_sig9C9F = var_core_value_sigC259 ? this._getElementUnderline(var_core_value_sigC259.drawing["drawingId"]) : null,
      var_core_value_sigFDEA = this._toScenePoint(var_core_value_sig9A8D.offsetX, var_core_value_sig9A8D.offsetY);
    if (var_core_value_sig9C9F) {
      this._overlay["updateState"]({
        previewMarker: var_core_value_sigFDEA,
        previewUnderline: var_core_value_sig9C9F
      });
      return;
    }
    this._overlay["updateState"]({
      previewMarker: var_core_value_sigFDEA,
      previewUnderline: null
    });
  }
  _onOverlayPointerDown(var_core_value_sig86D0) {
    var var_core_value_sig4CD2;
    if (!this._commentsVisible) return;
    let var_core_value_sig48CA = this._getModel(),
      var_core_value_sig50AF = var_core_value_sig48CA == null || (var_core_value_sig4CD2 = var_core_value_sig48CA.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sig4CD2.getId(),
      var_core_value_sigA942 = this._overlay["hitCommentId"];
    !var_core_value_sig48CA || !var_core_value_sig50AF || !var_core_value_sigA942 || (this._panelService["setActiveComment"]({
      unitId: var_core_value_sig48CA.getUnitId(),
      subUnitId: var_core_value_sig50AF,
      commentId: var_core_value_sigA942,
      trigger: "slide-canvas"
    }), var_core_value_sig86D0.stopPropagation(), this._commandService["executeCommand"](L.id).catch(() => undefined));
  }
  _syncOverlay() {
    var var_core_value_sigA621;
    if (!this._commentsVisible) return;
    let var_core_value_sigBBFF = this._getModel(),
      var_core_value_sig8889 = var_core_value_sigBBFF == null || (var_core_value_sigA621 = var_core_value_sigBBFF.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sigA621.getId();
    if (!var_core_value_sigBBFF || !var_core_value_sig8889) {
      this._overlay["updateState"]({
        markers: [],
        underlines: [],
        focusedCommentIds: [],
        focusOutlines: []
      });
      return;
    }
    let var_core_value_sig32F8 = this._getPageRect(var_core_value_sigBBFF),
      var_core_value_sig5B67 = [],
      var_core_value_sig1758 = new Map();
    this._commentModel["query"]({
      unitIds: [var_core_value_sigBBFF.getUnitId()],
      subUnitIds: [var_core_value_sig8889],
      anchorKinds: [var_core_value_sigA2CE.SLIDE_ELEMENT, var_core_value_sigA2CE.SLIDE_POSITION],
      resolved: false
    }).forEach(({
      root: var_core_value_sig480E
    }) => {
      let var_core_value_sig26DB = var_core_value_sig6EA1(var_core_value_sig480E.ref);
      if ((var_core_value_sig26DB == null ? undefined : var_core_value_sig26DB.kind) === var_core_value_sigA2CE.SLIDE_POSITION) var_core_value_sig5B67.push({
        commentId: var_core_value_sig480E.id,
        x: var_core_value_sig32F8.left + var_core_value_sig26DB.x * var_core_value_sig32F8.width,
        y: var_core_value_sig32F8.top + var_core_value_sig26DB.y * var_core_value_sig32F8.height
      });else {
        if ((var_core_value_sig26DB == null ? undefined : var_core_value_sig26DB.kind) === var_core_value_sigA2CE.SLIDE_ELEMENT) {
          let var_core_value_sig2AD8 = this._getElementUnderline(var_core_value_sig26DB.elementId, var_core_value_sig480E.id);
          var_core_value_sig2AD8 && var_core_value_sig1758.set(var_core_value_sig26DB.elementId, var_core_value_sig2AD8);
        }
      }
    }), this._overlay["updateState"]({
      ...this._getColors(),
      zoomRatio: var_core_value_sigBBFF.getZoomRatio(),
      markers: Ve(var_core_value_sig5B67),
      underlines: Array.from(var_core_value_sig1758.values()),
      ...this._getFocusState(var_core_value_sigBBFF, var_core_value_sig8889)
    });
  }
  _getElementUnderline(var_core_value_sig4805, var_core_value_sigE67E = "") {
    let var_core_value_sig2902 = this._getElementOutline(var_core_value_sig4805),
      var_core_value_sig9989 = this._getModel();
    return !var_core_value_sig9989 || !var_core_value_sig2902 ? null : {
      commentId: var_core_value_sigE67E,
      left: var_core_value_sig2902.left,
      top: var_core_value_sig2902.top + var_core_value_sig2902.height + 2 / var_core_value_sig9989.getZoomRatio(),
      width: var_core_value_sig2902.width
    };
  }
  _getElementOutline(var_core_value_sig698E) {
    var var_core_value_sig2809, var_core_value_sig2DAB;
    let var_core_value_sig877E = this._getModel(),
      var_core_value_sig20C8 = var_core_value_sig877E == null || (var_core_value_sig2809 = var_core_value_sig877E.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sig2809.getId();
    if (!var_core_value_sig877E || !var_core_value_sig20C8) return null;
    let var_core_value_sigE9A7 = this._renderContext["scene"],
      var_core_value_sigBECE = var_core_value_sig9CD9(var_core_value_sig877E.getUnitId(), var_core_value_sig20C8, var_core_value_sig698E),
      var_core_value_sig1B22 = ((var_core_value_sig2DAB = var_core_value_sigE9A7.getObjectIncludeInGroup) == null ? undefined : var_core_value_sig2DAB.call(var_core_value_sigE9A7, var_core_value_sigBECE)) ?? var_core_value_sigE9A7.getObject(var_core_value_sigBECE);
    if (!var_core_value_sig1B22) return null;
    let var_core_value_sig7F72 = var_core_value_sig1B22.getRealBound();
    return {
      left: var_core_value_sig7F72.left,
      top: var_core_value_sig7F72.top,
      width: var_core_value_sig7F72.width,
      height: var_core_value_sig7F72.height
    };
  }
  _getFocusState(var_core_value_sig7B2A, var_core_value_sig06CD) {
    let var_core_value_sigA5F1 = [],
      var_core_value_sig97A2 = new Map();
    return [this._panelService["activeCommentId"], this._panelService["hoveredCommentId"]].forEach(var_core_value_sigF0F9 => {
      if (!var_core_value_sigF0F9 || var_core_value_sigF0F9.unitId !== var_core_value_sig7B2A.getUnitId() || var_core_value_sigF0F9.subUnitId !== var_core_value_sig06CD) return;
      let var_core_value_sig1A0F = this._commentModel["getComment"](var_core_value_sigF0F9.unitId, var_core_value_sigF0F9.subUnitId, var_core_value_sigF0F9.commentId);
      if (!var_core_value_sig1A0F) return;
      var_core_value_sigA5F1.push(var_core_value_sigF0F9.commentId);
      let var_core_value_sigFBA4 = var_core_value_sig6EA1(var_core_value_sig1A0F.ref);
      if ((var_core_value_sigFBA4 == null ? undefined : var_core_value_sigFBA4.kind) === var_core_value_sigA2CE.SLIDE_ELEMENT && !var_core_value_sig97A2.has(var_core_value_sigFBA4.elementId)) {
        let var_core_value_sig3EEE = this._getElementOutline(var_core_value_sigFBA4.elementId);
        var_core_value_sig3EEE && var_core_value_sig97A2.set(var_core_value_sigFBA4.elementId, var_core_value_sig3EEE);
      }
    }), {
      focusedCommentIds: var_core_value_sigA5F1,
      focusOutlines: Array.from(var_core_value_sig97A2.values())
    };
  }
  _getPageRect(var_core_value_sig07E9) {
    let var_core_value_sig4F59 = this._renderContext["scene"].getObject(var_core_value_sig1BD9),
      var_core_value_sigF564 = var_core_value_sig07E9.getSnapshot().defaultPageSize;
    return {
      left: (var_core_value_sig4F59 == null ? undefined : var_core_value_sig4F59.left) ?? 0,
      top: (var_core_value_sig4F59 == null ? undefined : var_core_value_sig4F59.top) ?? 0,
      width: (var_core_value_sig4F59 == null ? undefined : var_core_value_sig4F59.width) ?? var_core_value_sigF564.width,
      height: (var_core_value_sig4F59 == null ? undefined : var_core_value_sig4F59.height) ?? var_core_value_sigF564.height
    };
  }
  _getColors() {
    return {
      accentColor: this._themeService["getColorFromTheme"]("yellow.400"),
      foregroundColor: this._themeService["getColorFromTheme"]("gray.900"),
      outlineColor: this._themeService["getColorFromTheme"]("white")
    };
  }
  _getModel() {
    return this._instanceService["getUnit"](this._renderContext["unitId"], var_core_value_sigF057.UNIVER_SLIDE) ?? null;
  }
  _toScenePoint(var_core_value_sig8CFA, var_core_value_sig2E11) {
    var var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sigCE71;
    let var_core_value_sig21D8 = new var_core_value_sigD407(var_core_value_sig8CFA, var_core_value_sig2E11),
      var_core_value_sig2B65 = this._renderContext["scene"],
      var_core_value_sigD7EA = ((var_core_value_sig5B69 = var_core_value_sig2B65.getActiveViewportByCoord) == null ? undefined : var_core_value_sig5B69.call(var_core_value_sig2B65, var_core_value_sig21D8)) ?? ((var_core_value_sigB098 = var_core_value_sig2B65.getMainViewport) == null ? undefined : var_core_value_sigB098.call(var_core_value_sig2B65));
    return (var_core_value_sigD7EA == null || (var_core_value_sigCE71 = var_core_value_sigD7EA.transformVector2SceneCoord) == null ? undefined : var_core_value_sigCE71.call(var_core_value_sigD7EA, var_core_value_sig21D8)) ?? var_core_value_sig21D8;
  }
};
J = U([H(1, var_core_value_sigB455), H(2, var_core_value_sigCEFB), H(3, var_core_value_sig1537(var_core_value_sig3C5B)), H(4, var_core_value_sig1537(var_core_value_sig670B)), H(5, var_core_value_sig1537(var_core_value_sig1975)), H(6, var_core_value_sig1537(var_core_value_sigE235)), H(7, var_core_value_sig1537(var_core_value_sig48DD)), H(8, var_core_value_sig1537(var_core_value_sig5E6A)), H(9, var_core_value_sigC4B1), H(10, var_core_value_sig1537(var_core_value_sigDD51))], J);
function Y(var_core_value_sigB601) {
  let var_core_value_sig8B71 = var_core_value_sigB601.get(var_core_value_sigCEFB),
    var_core_value_sigAEFB = var_core_value_sigB601.get(var_core_value_sigC6E5);
  return var_core_value_sig62B7([var_core_value_sig8B71.getCurrentTypeOfUnit$(var_core_value_sigF057.UNIVER_SLIDE), var_core_value_sigAEFB.permissionPointUpdate$["pipe"](var_core_value_sig0511(undefined))]).pipe(var_core_value_sigA90D(([var_core_value_sigB33B]) => !var_core_value_sigB33B || !var_core_value_sigC97C(var_core_value_sigAEFB, var_core_value_sigB33B.getUnitId(), var_core_value_sigB33B.getUnitId(), var_core_value_sig3BF6.Comment)));
}
function He(var_core_value_sig826B) {
  return {
    id: L.id,
    type: var_core_value_sigCB82.BUTTON,
    icon: "CommentIcon",
    title: "slides-thread-comment-ui.openComments",
    tooltip: "slides-thread-comment-ui.openComments",
    hidden$: var_core_value_sig8CF5(var_core_value_sig826B, var_core_value_sigF057.UNIVER_SLIDE)
  };
}
function Ue(var_core_value_sigCF89) {
  return {
    id: R.id,
    type: var_core_value_sigCB82.BUTTON,
    icon: "InsertCommentDoubleIcon",
    title: "slides-thread-comment-ui.addComment",
    tooltip: "slides-thread-comment-ui.addComment",
    hidden$: var_core_value_sig8CF5(var_core_value_sigCF89, var_core_value_sigF057.UNIVER_SLIDE),
    disabled$: Y(var_core_value_sigCF89)
  };
}
function X(var_core_value_sig00CB) {
  return {
    id: z.id,
    type: var_core_value_sigCB82.BUTTON,
    icon: "InsertCommentDoubleIcon",
    title: "slides-thread-comment-ui.addComment",
    tooltip: "slides-thread-comment-ui.addComment",
    disabled$: Y(var_core_value_sig00CB)
  };
}
const We = {
    [var_core_value_sigCF4E.RIBBON]: {
      [var_core_value_sigA937]: {
        [var_core_value_sigE43E]: {
          [z.id]: {
            order: 2,
            gridLayout: {
              row: 1,
              column: 2,
              rowSpan: 2,
              showLabel: true
            },
            menuItemFactory: X
          }
        }
      }
    }
  },
  Ge = {
    [var_core_value_sig6CAD.OTHERS]: {
      [L.id]: {
        order: 10,
        gridLayout: {
          row: 1,
          column: 10,
          showLabel: true
        },
        menuItemFactory: He
      },
      [R.id]: {
        order: 10.1,
        gridLayout: {
          row: 2,
          column: 10,
          showLabel: true
        },
        menuItemFactory: Ue
      }
    },
    [var_core_value_sigE503.DRAWING]: {
      [var_core_value_sig5E86.OTHERS]: {
        [z.id]: {
          order: 0,
          menuItemFactory: X
        }
      }
    },
    [var_core_value_sig6998.SLIDE]: {
      [z.id]: {
        order: 10,
        menuItemFactory: X
      }
    }
  };
function Ke(var_core_value_sig77EE, var_core_value_sig9F76, var_core_value_sigB008) {
  return var_core_value_sig77EE.query({
    unitIds: [var_core_value_sig9F76],
    subUnitIds: [var_core_value_sigB008],
    resolved: false
  }).length;
}
function Z({
  unitId: var_core_value_sig8721,
  pageId: var_core_value_sig08BA,
  setActivePage: var_core_value_sigDBB5
}) {
  let var_core_value_sigCFAC = var_core_value_sigDDD7(var_core_value_sigB455),
    var_core_value_sig237B = var_core_value_sigDDD7(var_core_value_sig1975),
    var_core_value_sigFEAB = var_core_value_sigDDD7(var_core_value_sig4313);
  var_core_value_sigB2CE(() => var_core_value_sig237B.commentUpdate$["pipe"](var_core_value_sig37A8(var_core_value_sig4383 => var_core_value_sig4383.unitId === var_core_value_sig8721 && var_core_value_sig4383.subUnitId === var_core_value_sig08BA)), undefined, false, [var_core_value_sig237B, var_core_value_sig08BA, var_core_value_sig8721]);
  let var_core_value_sigE347 = Ke(var_core_value_sig237B, var_core_value_sig8721, var_core_value_sig08BA);
  return var_core_value_sigE347 === 0 ? null : var_core_value_sigCB04("button", {
    type: "button",
    "aria-label": var_core_value_sigFEAB.t("slides-thread-comment-ui.addComment"),
    title: var_core_value_sigFEAB.t("slides-thread-comment-ui.addComment"),
    onClick: var_core_value_sig24B9 => {
      var_core_value_sig24B9.stopPropagation(), var_core_value_sigDBB5(var_core_value_sig08BA), var_core_value_sigCFAC.executeCommand(L.id);
    },
    className: "univer-absolute -univer-right-1.5 -univer-top-1.5 univer-z-[4] univer-flex univer-h-7 univer-min-w-7 univer-cursor-pointer univer-select-none univer-items-center univer-justify-center univer-rounded-lg univer-border-2 univer-border-solid univer-border-gray-0 univer-bg-yellow-400 univer-px-1.5 univer-text-sm univer-font-semibold univer-leading-none univer-text-gray-0 univer-transition hover:univer-brightness-95 focus-visible:univer-outline-none focus-visible:univer-ring-2 focus-visible:univer-ring-primary-500",
    children: var_core_value_sigE347
  });
}
let Q = class extends var_core_value_sig5F1A {
  constructor(var_core_value_sigE627, var_core_value_sigEF3E, var_core_value_sig273D) {
    super(), [z, L, R].forEach(var_core_value_sig186C => this.disposeWithMe(var_core_value_sigE627.registerCommand(var_core_value_sig186C))), var_core_value_sigEF3E.mergeMenu(Ge), var_core_value_sigEF3E.mergeMenu(We), this.disposeWithMe(var_core_value_sig273D.registerComponent(var_core_value_sigCAD5, () => Z));
  }
};
Q = U([H(0, var_core_value_sigB455), H(1, var_core_value_sigF639), H(2, var_core_value_sigE94C)], Q);
const qe = [[W], [Q]];
let $ = class extends var_core_value_sigFC87 {
  constructor(var_core_value_sig9A0D = V, var_core_value_sigA319, var_core_value_sig2D58, var_core_value_sig223F) {
    super(), this._config = var_core_value_sig9A0D, this._injector = var_core_value_sigA319, this._configService = var_core_value_sig2D58, this._renderManagerService = var_core_value_sig223F;
    let {
      ...var_core_value_sigD749
    } = var_core_value_sig9FBA({}, V, this._config);
    this._configService["setConfig"](B, var_core_value_sigD749);
  }
  onStarting() {
    qe.forEach(var_core_value_sigD955 => {
      this._injector["add"](var_core_value_sigD955);
    }), this._injector["get"](W);
  }
  onRendered() {
    this._renderManagerService["registerRenderModule"](var_core_value_sigF057.UNIVER_SLIDE, [J]), this._injector["get"](Q);
  }
};
K($, "pluginName", "UNIVER_SLIDES_THREAD_COMMENT_UI_PLUGIN"), K($, "packageName", Pe), K($, "version", Fe), K($, "type", var_core_value_sigF057.UNIVER_SLIDE), $ = U([var_core_value_sig849B(var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sigB7FC, var_core_value_sigB4B4, var_core_value_sig7664), H(1, var_core_value_sig1537(var_core_value_sigE4C6)), H(2, var_core_value_sig5241), H(3, var_core_value_sig210D)], $);
export { L as OpenSlideCommentPanelOperation, B as SLIDES_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY, R as StartSlideCommentPlacementOperation, $ as UniverSlidesThreadCommentUIPlugin };
