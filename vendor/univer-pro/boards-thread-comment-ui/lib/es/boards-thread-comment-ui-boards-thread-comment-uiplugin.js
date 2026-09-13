import { BoardModel, BoardToolType, IBoardElementService, UniverBoardsPlugin, getBoardPermissionValue } from "@univerjs-pro/boards";
import { BOARD_RENDER_LAYER_INDEX, BOARD_RENDER_OBJECT_Z_INDEX, BoardElementContextMenuPosition, IBoardElementStateService, IBoardToolbarContributionService, IBoardUIStateService, UniverBoardsUIPlugin, getBoardElementRenderObjectKey, hitTestBoardElementAtPoint } from "@univerjs-pro/boards-ui";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, RxDisposable, ThemeService, UniverInstanceType, UserManagerService, merge, toDisposable } from "@univerjs/core";
import { UnitAction } from "@univerjs/protocol";
import { ThreadCommentAnchorKind, ThreadCommentModel, deserializeThreadCommentAnchor, serializeThreadCommentAnchor } from "@univerjs/thread-comment";
import { ThreadCommentCanvasOverlay, ThreadCommentDraftService, ThreadCommentPanel, ThreadCommentPanelService, UniverThreadCommentUIPlugin } from "@univerjs/thread-comment-ui";
import { ComponentManager, ContextMenuGroup, FloatingObjectToolbarPosition, IMenuManagerService, ISidebarService, IconManager, MenuItemType, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { UniverBoardsThreadCommentPlugin } from "@univerjs-pro/boards-thread-comment";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { CommentIcon, InsertCommentDoubleIcon } from "@univerjs/icons";
import { useMemo } from "react";
import { combineLatest, distinctUntilChanged, map, of, pairwise, startWith, takeUntil } from "rxjs";
import { jsx } from "react/jsx-runtime";
import { B, H, U, V, z } from "./boards-thread-comment-ui-open-board-comment-panel-operation.js";
import { L } from "./internal-glue.js";
function je() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 = useDependency(ThreadCommentDraftService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 = useDependency(UserManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 = useDependency(IBoardElementService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.getCurrentUnitOfType(UniverInstanceType.UNIVER_BOARD),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 instanceof BoardModel ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = useDependency(IPermissionService);
  useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.permissionPointUpdate$, undefined, false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.draft$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.draft),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 = useMemo(() => of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.getActivePageId()), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217]),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.unitId === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.getUnitId()) ? {
      id: "",
      threadId: "",
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.subUnitId,
      ref: serializeThreadCommentAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.anchor),
      dT: "",
      personId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.getCurrentUser().userID,
      text: {
        dataStream: "\x0d\x0a"
      }
    } : null;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217) return null;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = !getBoardPermissionValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.getUnitId(), UnitAction.Comment);
  return jsx(ThreadCommentPanel, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.getUnitId(),
    subUnitId$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220,
    type: UniverInstanceType.UNIVER_BOARD,
    onAdd: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.executeCommand(B.id),
    disableAdd: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A,
    getSubUnitName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.getPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.name) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650;
    },
    tempComment: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB,
    onTempCommentClose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.cancel(),
    formatRef: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 => Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215)
  });
}
function Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = deserializeThreadCommentAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.ref);
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.kind) === ThreadCommentAnchorKind.BOARD_ELEMENT) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.pageId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.elementId);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.element["name"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.trim()) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.elementId;
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.kind) === ThreadCommentAnchorKind.BOARD_POSITION ? "(" + Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.x) + ",\x20" + Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.y) + ")" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.ref;
}
let K = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, this._iconManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, this._registerIcons(), this._registerComponents();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      InsertCommentDoubleIcon: InsertCommentDoubleIcon
    }));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](L, je));
  }
};
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.zoomRatio) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.zoomRatio > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.zoomRatio : 1;
  return {
    x: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.viewportPanOffset["x"]) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4,
    y: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.viewportPanOffset["y"]) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4
  };
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263) {
  "@babel/helpers - typeof";

  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666;
  }, J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263);
}
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266) {
  if (J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 || "default");
    if (J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265);
}
function Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 = Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, "string");
  return J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 + "";
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 = Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277;
}
function Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594 = new Map();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.x + "\x00" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.y,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.get(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.commentId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.commentId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.commentIds["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.commentId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.count += 1;
      return;
    }
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.set(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668,
      commentIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.commentId],
      count: 1
    });
  }), Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.values());
}
let X = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673, this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, this._elementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, this._elementStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, this._uiStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, this._draftService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, this._commentModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, this._panelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, Y(this, "_overlay", undefined), this._overlay = new ThreadCommentCanvasOverlay("board-thread-comment-overlay", {
      ...this._getColors(),
      zoomRatio: 1,
      markers: [],
      underlines: []
    }), this._overlay["zIndex"] = BOARD_RENDER_OBJECT_Z_INDEX.transientNavigation + 1, this._renderContext["scene"].addObject(this._overlay, BOARD_RENDER_LAYER_INDEX.overlay), this.disposeWithMe(toDisposable(this._overlay["onPointerDown$"].subscribeEvent((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) => this._onOverlayPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466)))), this.disposeWithMe(toDisposable(this._overlay["onPointerLeave$"].subscribeEvent(() => this._overlay["clearHover"]()))), this.disposeWithMe(toDisposable(this._renderContext["scene"].onPointerDown$["subscribeEvent"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) => this._onPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468)))), this.disposeWithMe(toDisposable(this._renderContext["scene"].onPointerMove$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => this._onPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469)))), this.disposeWithMe(toDisposable(this._elementStateService["state$"].pipe(pairwise(), takeUntil(this.dispose$)).subscribe(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611]) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612;
      this._draftService["placementType"] !== UniverInstanceType.UNIVER_BOARD || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.focusedId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.context || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.focusedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.focusedId && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.context["unitId"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.context["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.context["subUnitId"] || this._placeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.context["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.focusedId);
    }))), this.disposeWithMe(this._commentModel["commentUpdate$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.unitId === this._renderContext["unitId"] && this._syncOverlay();
    })), [this._panelService["activeCommentId$"], this._panelService["hoveredCommentId$"]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => {
      this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.pipe(takeUntil(this.dispose$)).subscribe(() => this._syncOverlay()));
    }), [this._elementService["elementAdd$"], this._elementService["elementUpdate$"], this._elementService["elementRemove$"]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => {
      this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.unitId === this._renderContext["unitId"]) && this._syncOverlay();
      }));
    }), this.disposeWithMe(this._uiStateService["state$"].pipe(distinctUntilChanged((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.zoomRatio === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.zoomRatio), takeUntil(this.dispose$)).subscribe(() => this._syncOverlay())), this._listenToolSwitch(), this.disposeWithMe(this._draftService["placementType$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 !== UniverInstanceType.UNIVER_BOARD && this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null
      });
    })), this.disposeWithMe(this._themeService["currentTheme$"].pipe(takeUntil(this.dispose$)).subscribe(() => this._syncOverlay())), this._syncOverlay();
  }
  _listenToolSwitch() {
    this.disposeWithMe(this._uiStateService["state$"].pipe(map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.activeTool), distinctUntilChanged(), pairwise(), takeUntil(this.dispose$)).subscribe(() => {
      this._draftService["placementType"] === UniverInstanceType.UNIVER_BOARD && this._draftService["cancel"]();
    }));
  }
  _placeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 === this._renderContext["unitId"] && (this._draftService["place"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693,
      anchor: {
        kind: ThreadCommentAnchorKind.BOARD_ELEMENT,
        pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694
      }
    }), this._overlay["updateState"]({
      previewMarker: null,
      previewUnderline: null
    }), this._commandService["executeCommand"](z.id).catch(() => undefined));
  }
  _onPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699) {
    if (this._draftService["placementType"] !== UniverInstanceType.UNIVER_BOARD || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.button ?? 0) !== 0) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = this._getModel();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) {
      this._draftService["cancel"]();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = this._toBoardPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.offsetY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = this._hitTest(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102);
    this._draftService["place"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.getUnitId(),
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101,
      anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 ? {
        kind: ThreadCommentAnchorKind.BOARD_ELEMENT,
        pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.elementId
      } : {
        kind: ThreadCommentAnchorKind.BOARD_POSITION,
        pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102
      }
    }), this._overlay["updateState"]({
      previewMarker: null,
      previewUnderline: null
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.stopPropagation(), this._commandService["executeCommand"](z.id).catch(() => undefined);
  }
  _onPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110) {
    if (this._draftService["placementType"] !== UniverInstanceType.UNIVER_BOARD) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = this._getModel();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = this._toBoardPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.offsetY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = this._hitTest(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 ? this._getElementUnderline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.elementId) : null;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115) {
      this._overlay["updateState"]({
        previewMarker: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
        previewUnderline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115
      });
      return;
    }
    this._overlay["updateState"]({
      previewMarker: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
      previewUnderline: null
    });
  }
  _onOverlayPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = this._getModel(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = this._overlay["hitCommentId"];
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 || (this._panelService["setActiveComment"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.getUnitId(),
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.getActivePageId(),
      commentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124,
      trigger: "board-canvas"
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.stopPropagation(), this._commandService["executeCommand"](z.id).catch(() => undefined));
  }
  _syncOverlay() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 = this._getModel();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) {
      this._overlay["updateState"]({
        markers: [],
        underlines: [],
        focusedCommentIds: [],
        focusOutlines: []
      });
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.getActivePageId(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [],
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map();
    this._commentModel["query"]({
      unitIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.getUnitId()],
      subUnitIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129],
      anchorKinds: [ThreadCommentAnchorKind.BOARD_ELEMENT, ThreadCommentAnchorKind.BOARD_POSITION],
      resolved: false
    }).forEach(({
      root: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627
    }) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = deserializeThreadCommentAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.ref);
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.kind) === ThreadCommentAnchorKind.BOARD_POSITION) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.push({
        commentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.id,
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.x,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.y
      });else {
        if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.kind) === ThreadCommentAnchorKind.BOARD_ELEMENT) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = this._getElementUnderline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.elementId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.id);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.elementId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461);
        }
      }
    }), this._overlay["updateState"]({
      ...this._getColors(),
      zoomRatio: this._uiStateService["getState"]().zoomRatio,
      markers: Fe(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A),
      underlines: Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.values()),
      ...this._getFocusState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129)
    });
  }
  _getElementUnderline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = "") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = this._getElementOutline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134) return null;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = this._uiStateService["getState"]().zoomRatio || 1;
    return {
      commentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.height + 2 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.width
    };
  }
  _getElementOutline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 = this._getModel();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142 = getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.getRealBound();
    return {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.height
    };
  }
  _getFocusState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [],
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592 = new Map();
    return [this._panelService["activeCommentId"], this._panelService["hoveredCommentId"]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.getUnitId() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = this._commentModel["getComment"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.commentId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632) return;
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.commentId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = deserializeThreadCommentAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.ref);
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.kind) === ThreadCommentAnchorKind.BOARD_ELEMENT && !var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.elementId)) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = this._getElementOutline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.elementId);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.elementId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464);
      }
    }), {
      focusedCommentIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2,
      focusOutlines: Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.values())
    };
  }
  _hitTest(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158) {
    return hitTestBoardElementAtPoint({
      elementData: this._elementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157),
      elementOrder: this._elementService["getElementOrder"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157),
      point: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158
    });
  }
  _getColors() {
    return {
      accentColor: this._themeService["getColorFromTheme"]("yellow.400"),
      foregroundColor: this._themeService["getColorFromTheme"]("gray.900"),
      outlineColor: this._themeService["getColorFromTheme"]("white")
    };
  }
  _getModel() {
    return this._instanceService["getUnit"](this._renderContext["unitId"], UniverInstanceType.UNIVER_BOARD) ?? null;
  }
  _toBoardPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) {
    return q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, this._uiStateService["getState"]());
  }
};
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.get(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.get(IPermissionService);
  return combineLatest([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_BOARD), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.permissionPointUpdate$["pipe"](startWith(undefined))]).pipe(map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166]) => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 || !getBoardPermissionValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.getUnitId(), UnitAction.Comment)));
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291) {
  return {
    id: V.id,
    type: MenuItemType.BUTTON,
    icon: "InsertCommentDoubleIcon",
    title: "boards-thread-comment-ui.addComment",
    tooltip: "boards-thread-comment-ui.addComment",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291, UniverInstanceType.UNIVER_BOARD),
    disabled$: Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291)
  };
}
const Le = {
  [BoardElementContextMenuPosition.ELEMENT]: {
    [ContextMenuGroup.OTHERS]: {
      [V.id]: {
        order: 0,
        menuItemFactory: Z
      }
    }
  },
  [BoardElementContextMenuPosition.SELECTION]: {
    [ContextMenuGroup.OTHERS]: {
      [V.id]: {
        order: 0,
        menuItemFactory: Z
      }
    }
  },
  [FloatingObjectToolbarPosition.BOARD]: {
    [V.id]: {
      order: 10,
      menuItemFactory: Z
    }
  }
};
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) {
    super(), [V, z, B].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 => this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.registerCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.mergeMenu(Le), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.register({
      id: "boards-thread-comment-ui.view-selection.add-comment",
      icon: CommentIcon,
      label: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.t("boards-thread-comment-ui.addComment"),
      order: 100,
      group: "auxiliary",
      placement: "view-selection",
      enabled: () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.getCurrentUnitOfType(UniverInstanceType.UNIVER_BOARD);
        return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 && getBoardPermissionValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.getUnitId(), UnitAction.Comment);
      },
      onClick: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => {
        await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.executeCommand(V.id);
      }
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.register({
      id: "boards-thread-comment-ui.top-right.open-comments",
      availableInViewing: true,
      icon: CommentIcon,
      label: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.t("boards-thread-comment-ui.openComments"),
      order: 100,
      group: "auxiliary",
      placement: "top-right-before-history",
      menuItemId: z.id,
      onClick: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => {
        await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.executeCommand(z.id);
      }
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.register({
      id: "boards-thread-comment-ui.toolbar.add-comment",
      availableInViewing: true,
      icon: InsertCommentDoubleIcon,
      label: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.t("boards-thread-comment-ui.addComment"),
      order: 100,
      group: "auxiliary",
      menuItemId: B.id,
      enabled: () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.getCurrentUnitOfType(UniverInstanceType.UNIVER_BOARD);
        return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 && getBoardPermissionValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.getUnitId(), UnitAction.Comment);
      },
      onClick: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => {
        await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.executeCommand(B.id);
      }
    }));
  }
};
const Re = [[K], [Q]];
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = U, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183
    } = merge({}, U, this._config);
    this._configService["setConfig"](H, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183);
  }
  onStarting() {
    Re.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 => {
      this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648);
    }), this._injector["get"](K);
  }
  onRendered() {
    this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, [X]), this._injector["get"](Q);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 as UniverBoardsThreadCommentUIPlugin };
export { K, X, Q, Y };
