import { ISlideDrawingService, SlideModel, getSlideElementDisplayName, getSlidePermissionValue } from "@univerjs-pro/slides";
import { ISlidePlaybackService, SLIDE_PAGE_RECT_KEY, SLIDE_SHAPE_FORMAT_RIBBON_GROUP_ADVANCED, SLIDE_SHAPE_FORMAT_RIBBON_TAB, SLIDE_THUMBNAIL_OVERLAY_PART, SlideContextMenuPosition, SlideHitTestService, SlideInsertService, UniverSlidesUIPlugin, buildDrawingOKey } from "@univerjs-pro/slides-ui";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, RxDisposable, ThemeService, UniverInstanceType, UserManagerService, merge, toDisposable } from "@univerjs/core";
import { ThreadCommentAnchorKind, ThreadCommentModel, deserializeThreadCommentAnchor, serializeThreadCommentAnchor } from "@univerjs/thread-comment";
import { ThreadCommentCanvasOverlay, ThreadCommentDraftService, ThreadCommentPanel, ThreadCommentPanelService, UniverThreadCommentUIPlugin } from "@univerjs/thread-comment-ui";
import { ComponentManager, ContextMenuGroup, FloatingObjectToolbarPosition, IMenuManagerService, ISidebarService, IUIPartsService, IconManager, MenuItemType, MenuManagerPosition, RibbonStartGroup, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverSlidesThreadCommentPlugin } from "@univerjs-pro/slides-thread-comment";
import { IRenderManagerService, UniverRenderEnginePlugin, Vector2 } from "@univerjs/engine-render";
import { CommentIcon, InsertCommentDoubleIcon } from "@univerjs/icons";
import { UnitAction } from "@univerjs/protocol";
import { useMemo } from "react";
import { combineLatest, filter, map, of, startWith, takeUntil } from "rxjs";
import { jsx } from "react/jsx-runtime";
import { J, K, Q, W, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 } from "./slides-thread-comment-ui-slides-thread-comment-uiplugin.js";
const F = "univer.slide.thread-comment-panel";
var Pe = "@univerjs-pro/slides-thread-comment-ui",
  Fe = "1.0.0-insiders.20260907-70fc579";
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247);
  };
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256;
}
W = U([H(0, Inject(ComponentManager)), H(1, Inject(IconManager))], W);
J = U([H(1, ICommandService), H(2, IUniverInstanceService), H(3, Inject(ISlideDrawingService)), H(4, Inject(ThreadCommentDraftService)), H(5, Inject(ThreadCommentModel)), H(6, Inject(ThreadCommentPanelService)), H(7, Inject(SlideHitTestService)), H(8, Inject(SlideInsertService)), H(9, ISlidePlaybackService), H(10, Inject(ThemeService))], J);
Q = U([H(0, ICommandService), H(1, IMenuManagerService), H(2, IUIPartsService)], Q);
K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, "pluginName", "UNIVER_SLIDES_THREAD_COMMENT_UI_PLUGIN"), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, "packageName", Pe), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, "version", Fe), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, "type", UniverInstanceType.UNIVER_SLIDE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 = U([DependentOn(UniverLicensePlugin, UniverSlidesThreadCommentPlugin, UniverSlidesUIPlugin, UniverRenderEnginePlugin, UniverThreadCommentUIPlugin), H(1, Inject(Injector)), H(2, IConfigService), H(3, IRenderManagerService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331);
export { F };
