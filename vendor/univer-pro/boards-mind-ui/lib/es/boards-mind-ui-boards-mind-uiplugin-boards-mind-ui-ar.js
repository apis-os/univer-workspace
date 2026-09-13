import { BoardElementType, BoardToolType, IBoardElementService, IBoardMindMapAdapterService, UniverBoardsPlugin, documentTextStyleToBoardShapeTextStyle, offsetBoardConnectorGeometry, resolveBoardElementWorldBounds } from "@univerjs-pro/boards";
import { AddMindMapChildOperation, AddMindMapSiblingOperation, ChangeMindMapBranchLineTypeOperation, ChangeMindMapLayoutOperation, CopyMindMapNodeOperation, DeleteMindMapNodeOperation, DetachMindMapNodeOperation, ExportMindMapOpmlOperation, IMindMapClipboardService, ImportMindMapOpmlOperation, InsertBoardMindMapOperation, LayoutMindMapOperation, MIND_MAP_DEFAULT_LAYOUT, MIND_MAP_DEFAULT_NODE_SIZE, MIND_MAP_DEFAULT_NODE_TEXT, MIND_MAP_LAYOUT_SPACING_LIMITS, PasteMindMapAsNewMindMapOperation, PasteMindMapNodeOperation, PromoteMindMapNodeOperation, ReparentMindMapNodeOperation, ToggleMindMapNodeCollapseOperation, TranslateMindMapOperation, UniverBoardsMindPlugin, UpdateMindMapIncomingConnectorOperation, UpdateMindMapNodeOperation, compareMindMapOrderKey, getMindMapConnectorMeta, getMindMapContainerMeta, getMindMapDefaultChildOrderKey, getMindMapNodeMeta, isMindMapPlainStructureKind, resolveMindMapBranchLineTypeForStructure, resolveMindMapLayoutPreview, resolveMindMapNodeHostSize } from "@univerjs-pro/boards-mind";
import { BOARDS_UI_PLUGIN_CONFIG_KEY, BOARD_RENDER_LAYER_INDEX, BOARD_RENDER_OBJECT_Z_INDEX, BOARD_SHORTCUT_BINDINGS, BoardCanvasPopManagerService, BoardInteractionSurfaceService, BoardShapeIntrinsicSizeService, BoardTextEditingService, IBoardElementStateService, IBoardUIStateService, UniverBoardsUIPlugin, areBoardShapeTextValuesEquivalent, getBoardElementRenderObjectKey, parseBoardElementRenderObjectKey, resolveBoardFloatingToolbarSelection, syncBoardElementRenderObject } from "@univerjs-pro/boards-ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, IContextService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, RxDisposable, UniverInstanceType, VerticalAlign, generateRandomId, merge, toDisposable } from "@univerjs/core";
import { BaseObject, IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { Subject, takeUntil } from "rxjs";
import { ComponentManager, IDialogService, IShortcutService, KeyCode, MetaKeys, UndoRedoGroupService, useDependency } from "@univerjs/ui";
import { SHAPE_FLOATING_TOOLBAR_DEFAULT_STROKE_COLOR, SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_BACKGROUND_COLOR, SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_COLOR, SHAPE_TEXT_EDITOR_QUOTE_COMMAND_ID, ShapeFillButton, ShapeFloatingToolbarContent, ShapeFloatingToolbarDropdownTrigger, ShapeFloatingToolbarFontSizeSelect, ShapeFloatingToolbarIcon, ShapeFloatingToolbarMenuItem, ShapeFloatingToolbarMenuPanel, ShapeStrokePanelButton, ShapeStrokePanelContent, TextFillButton, TypographyPanelButton, buildShapeTextDataUpdate } from "@univerjs-pro/shape-editor-ui";
import { ShapeLineDashEnum, ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { Button, Dropdown, Input, InputNumber, Segmented, Separator, Textarea, borderClassName, clsx } from "@univerjs/design";
import { AlignBottomIcon, AlignTextBothIcon, AlignTopIcon, HorizontallyIcon, LeftJustifyingIcon, MoreHorizontalIcon, RightJustifyingIcon, SearchIcon, ShapeLineIcon, VerticalCenterIcon } from "@univerjs/icons";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { G } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-g.js";
import { Vt, X, Y } from "./boards-mind-ui-boards-mind-uiplugin-internal-core-endo.js";
const Kn = "board-mind-map-pending-insert-object",
  qn = BOARD_RENDER_LAYER_INDEX.preview;
function Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062 ?? []).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222.side ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063].push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221), {
    left: [],
    right: [],
    top: [],
    bottom: []
  });
}
function Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066 === "tree-left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066 === "tree-right" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066 === "tree-alternate";
}
function Xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068 === "timeline-horizontal" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068 === "timeline-vertical";
}
function Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072 === "tree-left" ? "left" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072 === "tree-right" ? "right" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.side === "left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.side === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.side : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071 % 2 == 0 ? "left" : "right";
}
function Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.root["children"]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076 ?? [];
}
var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264 = class extends BaseObject {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223 = Kn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223), G(this, "_state", {
      point: null,
      children: []
    }), this.evented = false, this.zIndex = BOARD_RENDER_OBJECT_Z_INDEX.transientPreview, this.updateState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224);
  }
  updateState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227) {
    this._state = {
      ...this._state,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227
    }, this._state["point"] ? this.show() : this.hide(), this.makeDirty(true);
  }
  isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229) {
    return false;
  }
  render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233 = this._state["point"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233 || !this.visible) return this.makeDirty(false), this;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88 = Number.isFinite(this._state["zoomRatio"]) && (this._state["zoomRatio"] ?? 0) > 0 ? this._state["zoomRatio"] : 1,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234 = MIND_MAP_DEFAULT_NODE_SIZE.rootWidth,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235 = MIND_MAP_DEFAULT_NODE_SIZE.rootHeight,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 = MIND_MAP_DEFAULT_NODE_SIZE.nodeWidth,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 = MIND_MAP_DEFAULT_NODE_SIZE.nodeHeight,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 = MIND_MAP_DEFAULT_LAYOUT.horizontalGap,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239 = MIND_MAP_DEFAULT_LAYOUT.siblingGap,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 = this._state["structureKind"] === "mindmap-vertical",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240 = Jn(this._state["children"], var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 ? "bottom" : "right"),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234 / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235 / 2;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.globalAlpha = Y.objectAlpha, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineWidth = Y.lineWidthScreen / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.strokeStyle = Y.primaryColor, Xn(this._state["structureKind"])) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290 = Qn(this._state["children"], this._state["blueprint"]),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = this._state["structureKind"] === "timeline-horizontal";
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.length > 0) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.beginPath(), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = MIND_MAP_DEFAULT_LAYOUT.timelineAxisGap,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.y,
            var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB53 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234,
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 / 2,
            var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB54 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB53, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB54, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617) => {
            let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB54 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 > 0) {
              let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB54 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 - 1) * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669);
            }
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669);
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621) => {
            X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB54 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, Y.ghostRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillStyle = Y.ghostFillColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke();
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) => {
            if (!("children" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.children["length"] === 0) return;
            let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB54 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668),
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 / 2,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.side === "bottom" ? "bottom" : "top",
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.children["slice"](0, 2),
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.length * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 + MIND_MAP_DEFAULT_LAYOUT.branchGap,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 === "top" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D / 2;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 === "top" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) => {
              let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 / 2;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1);
            }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) => {
              let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239);
              X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, Y.ghostRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillStyle = Y.ghostFillColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke();
            });
          });
        } else {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.x,
            var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = MIND_MAP_DEFAULT_LAYOUT.timelineAxisGap,
            var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671,
            var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB57 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.length - 1) * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 / 2;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB57), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) => {
            let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 / 2,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.side === "right" ? "right" : "left",
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 + MIND_MAP_DEFAULT_LAYOUT.branchGap : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 - MIND_MAP_DEFAULT_LAYOUT.branchGap - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 === "right" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23);
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) => {
            let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671);
            X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.side === "right" ? "right" : "left") == "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 + MIND_MAP_DEFAULT_LAYOUT.branchGap : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 - MIND_MAP_DEFAULT_LAYOUT.branchGap - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237, Y.ghostRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillStyle = Y.ghostFillColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke();
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) => {
            if (!("children" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.children["length"] === 0) return;
            let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 / 2,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.side === "right" ? "right" : "left",
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.children["slice"](0, 2),
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.length * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 + MIND_MAP_DEFAULT_LAYOUT.branchGap : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 - MIND_MAP_DEFAULT_LAYOUT.branchGap - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 === "right" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236,
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 / 2,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB37 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 === "right" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB38 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 === "right" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB37, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB38, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469) => {
              let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 / 2;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB38, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 === "right" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5);
            }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613) => {
              let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239);
              X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237, Y.ghostRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillStyle = Y.ghostFillColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke();
            });
          });
        }
      }
    } else {
      if (Yn(this._state["structureKind"])) {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = this._state["children"] ?? [],
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.x;
        if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length > 0) {
          let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 + (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length - 1) * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 / 2;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645) => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, this._state["structureKind"]),
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239),
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236,
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 / 2;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 === "right" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB46 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB46 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47);
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke(), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, this._state["structureKind"]),
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239);
            X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237, Y.ghostRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillStyle = Y.ghostFillColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke();
          });
        }
      } else var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 && ["top", "bottom"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109];
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.length === 0) return;
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.length * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.x - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 / 2,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB63 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 === "bottom" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB64 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 === "bottom" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB63 + MIND_MAP_DEFAULT_LAYOUT.branchGap : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB63 - MIND_MAP_DEFAULT_LAYOUT.branchGap,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 === "bottom" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.x, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB63), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.x, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB64), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.length > 1 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 / 2, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB64), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 / 2, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB64)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673) => {
          let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 / 2;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB64), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 === "bottom" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237);
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) => {
          X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237, Y.ghostRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillStyle = Y.ghostFillColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke();
        });
      });
    }
    (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 || Yn(this._state["structureKind"]) || Xn(this._state["structureKind"]) ? [] : ["left", "right"]).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.length === 0) return;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.length * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.y - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB83 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 === "right" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 === "right" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB83 + MIND_MAP_DEFAULT_LAYOUT.branchGap : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB83 - MIND_MAP_DEFAULT_LAYOUT.branchGap,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 === "right" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB83, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.y), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.y), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.length > 1 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 / 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 / 2)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) => {
        let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB69 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 / 2;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB69), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 === "right" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB69);
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) => {
        let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB71 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239);
        X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB71, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237, Y.ghostRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillStyle = Y.ghostFillColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke();
      });
    }), X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235, Y.rootRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillStyle = Y.primaryColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillStyle = Y.rootTextColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.font = Vt(Y.rootFontWeight, Y.rootFontSize, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.textAlign = "center", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.textBaseline = "middle";
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D91 = Y.textPaddingScreen / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.fillText(MIND_MAP_DEFAULT_NODE_TEXT, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.y, Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D91 * 2)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.restore(), this.makeDirty(false), this;
  }
};
function nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D126 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081.zoomRatio) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081.zoomRatio > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081.zoomRatio : 1;
  return {
    x: Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080.offsetX - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081.panOffset["x"]) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D126),
    y: Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080.offsetY - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081.panOffset["y"]) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D126)
  };
}
function rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084.dispose) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084.dispose();
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084.unsubscribe) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084);
}
function ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088.activeTool === BoardToolType.MindMap && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088.pendingInsert) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089.type) === BoardToolType.MindMap;
}
let ar = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279, this._instanceSrv = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280, this._stateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282, this._insertStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283, this._elementStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284, this._boardTextEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285, G(this, "_previewObject", null), G(this, "_lastPoint", null), this._init();
  }
  _init() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293;
    let {
        scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295
      } = this._renderContext,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 = this._instanceSrv["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295, UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294.onPointerMove$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293.subscribeEvent({
        priority: 4,
        next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300]) => this._handlePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300)
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294.onPointerDown$["subscribeEvent"]({
        priority: 4,
        next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302]) => this._handlePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302)
      });
    this.disposeWithMe(toDisposable(() => rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297))), this.disposeWithMe(toDisposable(() => rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298)));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 = this._stateService["state$"].subscribe(() => this._syncPreviewObject());
    this.disposeWithMe(toDisposable(() => rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299))), this.disposeWithMe(toDisposable(() => {
      this._removePreviewObject();
    })), this._syncPreviewObject();
  }
  _syncPreviewObject() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309 = this._stateService["getState"]();
    if (!ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309)) {
      this._removePreviewObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310 = this._ensurePreviewObject(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311 = this._insertStateService["getTemplate"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310.updateState({
      point: this._lastPoint,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.structureKind,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.children,
      blueprint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.blueprint,
      zoomRatio: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309.zoomRatio
    }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308, true);
  }
  _ensurePreviewObject() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318;
    if (this._previewObject) return this._previewObject;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319 = this._insertStateService["getTemplate"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320 = new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264(Kn, {
        point: this._lastPoint,
        structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.structureKind,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.children,
        blueprint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.blueprint,
        zoomRatio: this._stateService["getState"]().zoomRatio
      });
    return this._previewObject = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318 = this._renderContext["scene"]).addObject) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320, qn), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320;
  }
  _removePreviewObject() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328;
    if (!this._previewObject) {
      this._lastPoint = null;
      return;
    }
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 = this._renderContext["scene"]).removeObjects) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326, [this._previewObject]), this._previewObject = null, this._lastPoint = null, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328, true);
  }
  _getPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334 = this._stateService["getState"]();
    return nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333, {
      panOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.viewportPanOffset,
      zoomRatio: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.zoomRatio
    });
  }
  _resolveRootTopLeft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337) {
    return {
      left: Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337.x - MIND_MAP_DEFAULT_NODE_SIZE.rootWidth / 2),
      top: Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337.y - MIND_MAP_DEFAULT_NODE_SIZE.rootHeight / 2)
    };
  }
  _handlePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340) {
    ir(this._stateService["getState"]()) && (this._lastPoint = this._getPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339), this._syncPreviewObject(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340.stopPropagation());
  }
  _handlePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347 = this._stateService["getState"](),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344.button ?? 0;
    if (!ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 !== 0) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348 = this._getPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349 = this._resolveRootTopLeft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350 = this._insertStateService["getTemplate"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351 = generateRandomId(6),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353 = this._commandService["executeCommand"](InsertBoardMindMapOperation.id, {
        unitId: this._renderContext["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.left,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.top,
        rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351,
        rootText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.rootText,
        structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.structureKind,
        branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.branchLineType,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.children,
        blueprint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.blueprint
      });
    Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303) return;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
        unitId: this._renderContext["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352
      };
      this._elementStateService["selectElements"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351), this._boardTextEditingService["ignoreExternalFocusChanges"](), this._boardTextEditingService["setEditing"]({
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351,
        shapeKey: getBoardElementRenderObjectKey(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351),
        visible: true
      });
    }), this._stateService["setActiveTool"](BoardToolType.Select), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345.stopPropagation(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344);
  }
};
export { ar };
