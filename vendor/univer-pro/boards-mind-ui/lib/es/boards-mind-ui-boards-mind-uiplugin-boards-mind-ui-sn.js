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
import { Vt, X, Y } from "./boards-mind-ui-boards-mind-uiplugin-internal-core-endo.js";
import { G } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-g.js";
const Ht = "board-mind-map-drag-preview-object",
  Ut = BOARD_RENDER_LAYER_INDEX.preview;
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783;
}
function Wt() {
  return Y.fallbackNodeWidth;
}
function Gt() {
  return Y.fallbackNodeHeight;
}
function Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786 === 1 ? "left" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786 === 3 ? "right" : "center";
}
function qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790 === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790 === 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789 / 2;
}
var Jt = class extends BaseObject {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 = Ht, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459), G(this, "_state", {
      ghostBounds: null,
      parentBounds: null,
      side: "right",
      zoomRatio: 1
    }), this.evented = false, this.zIndex = BOARD_RENDER_OBJECT_Z_INDEX.transientPreviewForeground, this.updateState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460);
  }
  updateState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463) {
    if (this._state = {
      ...this._state,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463
    }, this._state["ghostBounds"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = this._resolveDirtyBounds();
      this.transformByState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133), this.show();
    } else this.hide();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464 = this;
    typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.makeDirtyNoDebounce == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.makeDirtyNoDebounce(true) : this.makeDirty(true);
  }
  isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467) {
    return false;
  }
  render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 = this._state["ghostBounds"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 || !this.visible) return this.makeDirty(false), this;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = Number.isFinite(this._state["zoomRatio"]) && (this._state["zoomRatio"] ?? 0) > 0 ? this._state["zoomRatio"] : 1,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.left, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.top, 0),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.width, Wt())),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.height, Gt()));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.globalAlpha = Y.dragObjectAlpha, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.lineWidth = Y.lineWidthScreen / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.strokeStyle = Y.primaryColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.fillStyle = Y.ghostFillColor, this._drawConnectorPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473,
      width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23,
      height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24
    }, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22), this._drawSourceHighlight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22), this._state["renderGhostNode"] === false) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.restore(), this.makeDirty(false), this;
    X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24, Y.ghostRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.stroke();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 = this._state["textStyle"],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.fontSize) && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.fontSize) ?? 0) > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.fontSize : 16,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = Y.textPaddingScreen / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.fillStyle = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.color) ?? Y.ghostTextColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.font = Vt(Y.ghostFontWeight, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.textAlign = Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.horizontalAlign), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.textBaseline = "middle", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.fillText((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.text) || MIND_MAP_DEFAULT_NODE_TEXT, qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.horizontalAlign, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 / 2, Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 * 2)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.restore(), this.makeDirty(false), this;
  }
  _resolveDirtyBounds() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481 = this._state["ghostBounds"],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = Number.isFinite(this._state["zoomRatio"]) && (this._state["zoomRatio"] ?? 0) > 0 ? this._state["zoomRatio"] : 1,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 = Y.dirtyPaddingScreen / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481) return {
      left: 0,
      top: 0,
      width: 1,
      height: 1
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481.left, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481.top, 0),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481.width, Wt())),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481.height, Gt())),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = this._state["sourceBounds"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485 = this._state["parentBounds"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.width, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34)),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.height, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33;
      return {
        left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11,
        top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12,
        width: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11,
        height: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12
      };
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.width, Wt())),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.height, Gt())),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB89 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB90 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33;
    return {
      left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40,
      top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41,
      width: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB89 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40,
      height: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB90 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41
    };
  }
  _drawSourceHighlight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502 = this._state["sourceBounds"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502) return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 = Y.sourceHaloScreen / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.left, 0) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.top, 0) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.width, Wt())) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 * 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.height, Gt())) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 * 2;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.globalAlpha = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.lineWidth = Y.lineWidthScreen / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.strokeStyle = Y.sourceHighlightStrokeColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.fillStyle = Y.sourceHighlightFillColor, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.setLineDash) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499, Y.sourceDashScreen["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500)), X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, Y.rootRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.restore();
  }
  _drawConnectorPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510 = this._state["parentBounds"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.left, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.top, 0),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.width, Wt())),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D63 = Math.max(1, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.height, Gt())),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 = Y.branchGap,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 = this._state["side"] ?? "right";
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.globalAlpha = Y.connectorAlpha, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.strokeStyle = Y.primaryColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.lineWidth = Y.lineWidthScreen / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.lineCap = "round", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.lineJoin = "round", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.beginPath(), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 === "top" || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 === "bottom") {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB75 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.width / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 === "bottom" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D63 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 === "bottom" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.top : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.height,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 === "bottom" ? Math.min(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78) / 2) : Math.max(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78) / 2);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB75, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB75, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78);
    } else {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB79 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D63 / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB80 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.height / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB82 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.left : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.width,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 === "right" ? Math.min(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB82) / 2) : Math.max(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB82) / 2);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB79), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB79), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB80), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB82, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB80);
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.restore();
  }
};
function Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.elementId]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.element["transform"];
}
function Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 = Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801);
  return {
    x: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.left ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.width ?? 0) / 2,
    y: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.top ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.height ?? 0) / 2
  };
}
function Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807) {
  return Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807.y);
}
function Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.left ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.top ?? 0,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.width ?? 0),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB106 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D107 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810.height ?? 0),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811.left ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D109 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811.top ?? 0,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB107 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D108 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811.width ?? 0),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D109 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811.height ?? 0),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D110 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D108 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB107, 0),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D111 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D109 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB106, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D107 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108, 0);
  return Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D110, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D111);
}
function fn_L0_core_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461814, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461816) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818 = getMindMapNodeMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461814[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817.element);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818.parentNodeId;) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461816) return true;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818 = getMindMapNodeMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461814[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818.parentNodeId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819.element);
  }
  return false;
}
function en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829 = Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829.top ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D119 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829.height ?? 0;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D119 <= 0 ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.y <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D119 / 3 ? "before" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.y >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D119 * 2 / 3 ? "after" : null;
}
function tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834];
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836.left) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836.top) ? {
    kind: "detach",
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836.left,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836.top
  } : {
    kind: "detach"
  };
}
function nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843.element);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.parentNodeId && !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842.allowRootReparent)) return {
    kind: "none"
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842.boundsByElementId,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846 = Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 = Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.element);
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.parentNodeId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842.allowRootReparent && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.parentNodeId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.structureScopeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.structureScopeId || fn_L0_core_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.elementId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841) ? null : {
        item: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521,
        snapDistance: Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846, Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845)),
        center: Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845)
      };
    }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.snapDistance - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527.snapDistance || Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.center) - Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527.center))[0];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.snapDistance <= 100) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.item["element"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.parentNodeId ? en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.item, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845) : null;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.parentNodeId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529 ? {
      kind: "reparent",
      newParentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.parentNodeId,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.side ?? "right",
      referenceNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.item["elementId"],
      placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529
    } : {
      kind: "reparent",
      newParentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.item["elementId"],
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847.x < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.center["x"] ? "left" : "right"
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842.detachWhenNoSnap) return tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.parentNodeId) return {
    kind: "none"
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.parentNodeId];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849 && Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847, Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845)) > 560 ? tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845) : {
    kind: "none"
  };
}
function rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860.element)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863 = getMindMapConnectorMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860.element)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861;
}
function an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872.transform ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872.element["transform"] ?? {};
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869]: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872,
      transform: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27,
        left: (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27.left ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870,
        top: (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27.top ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871
      },
      element: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872.element,
        transform: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872.element["transform"],
          left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872.element["transform"].left ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870,
          top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872.element["transform"].top ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871
        }
      }
    }
  };
}
function on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878) {
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.liveRootBounds["left"]) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.liveRootBounds["top"]) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.rootStartBounds["left"]) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.rootStartBounds["top"])) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.liveRootBounds["left"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.rootStartBounds["left"],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.liveRootBounds["top"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.rootStartBounds["top"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 = an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.scopeId, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = [];
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.rootNodeId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.scopeId || !rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.scopeId)) return;
    if ("connectorData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.element) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.elementId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.element;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 && "connectorData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.push({
        kind: "connector",
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.elementId,
        element: offsetBoardConnectorGeometry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, {
          x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122,
          y: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123
        })
      });
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.elementId);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.push({
      kind: "bounds",
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.elementId,
      bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532
    });
  }), {
    deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122,
    deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123,
    elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879,
    items: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23
  };
}
let sn = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537, this._elementStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539, this._uiStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541, this._undoRedoGroupService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, G(this, "_dragStart", null), G(this, "_pointerDragStart", null), G(this, "_dragPreviewObject", null), G(this, "_childDragActivated", false), G(this, "_lastChildDragAction", null), G(this, "_objectPointerDisposables", null), G(this, "_attachObjectPointerScheduled", false), G(this, "_activePointerDragDisposables", null), G(this, "_childDragSelectionHidden", false), this._init();
  }
  _init() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = this._renderContext["scene"].getTransformerByCreate();
    this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.changeStart$["pipe"](takeUntil(this.dispose$)).subscribe(() => {
      this._captureDragStart();
    }))), this.disposeWithMe(toDisposable(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.changing$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 => {
      this._syncDragPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.objects);
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.changeEnd$["pipe"](takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 => {
      setTimeout(() => this._applyDragTopologyAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.objects), 0);
    }))), this.disposeWithMe(toDisposable(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551 = this._renderContext["scene"].onPointerDown$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.subscribeEvent({
      priority: 3,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140]) => this._capturePointerChildDragStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140)
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe(toDisposable(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 = this._renderContext["scene"].onPointerMove$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.subscribeEvent({
      priority: 3,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142]) => this._syncPointerChildDragPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142)
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe(toDisposable(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 = this._renderContext["scene"].onPointerUp$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.subscribeEvent({
      priority: 3,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144]) => this._applyPointerChildDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144)
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe(toDisposable(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = this._renderContext["scene"].onPointerCancel$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.subscribeEvent({
      priority: 3,
      next: ([, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145]) => this._cancelPointerChildDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145)
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe(toDisposable(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146;
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = this._objectPointerDisposables) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.dispose();
    })), this.disposeWithMe(toDisposable(() => this._disposeActivePointerDragListeners())), this._subscribeElementDataChanges(), this._scheduleAttachObjectPointerListeners(), this.disposeWithMe(toDisposable(() => this._removeDragPreviewObject()));
  }
  _subscribeElementDataChanges() {
    [this._boardElementService["elementAdd$"], this._boardElementService["elementUpdate$"], this._boardElementService["elementRemove$"]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 => {
      this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.pipe(takeUntil(this.dispose$)).subscribe(() => {
        this._scheduleAttachObjectPointerListeners();
      })));
    }), this._elementStateService["state$"] && this.disposeWithMe(toDisposable(this._elementStateService["state$"].pipe(takeUntil(this.dispose$)).subscribe(() => {
      this._scheduleAttachObjectPointerListeners();
    })));
  }
  _scheduleAttachObjectPointerListeners() {
    this._attachObjectPointerScheduled || (this._attachObjectPointerScheduled = true, Promise.resolve().then(() => this._attachObjectPointerListeners()));
  }
  _attachObjectPointerListeners() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562;
    this._attachObjectPointerScheduled = false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563 = this._resolveCurrentBoardContext(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 = this._renderContext["scene"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564.getObject != "function") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563.subUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 = new DisposableCollection();
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 = this._objectPointerDisposables) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.dispose(), this._objectPointerDisposables = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566, Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.element);
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.parentNodeId)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.elementId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564.getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154)) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564.getObject) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.onPointerDown$ && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.onPointerDown$["subscribeEvent"]({
        priority: -10,
        next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692]) => this._capturePointerChildDragStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563.subUnitId,
          nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.elementId
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692)
      }));
    });
  }
  _resolveCurrentBoardContext() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 = this._elementStateService["getSnapshot"]().context;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 = this._renderContext["unitId"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 ? this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573, UniverInstanceType.UNIVER_BOARD) : null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574.getActivePageId();
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575 ? null : {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574.getUnitId(),
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575
    };
  }
  _captureDragStart() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 = this._elementStateService["getSnapshot"]();
    this._childDragActivated = false, this._childDragSelectionHidden = false, this._lastChildDragAction = null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.focusedId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.selectedIds[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582) {
      this._dragStart = null, this._removeDragPreviewObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.subUnitId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.selectedIds["length"] > 1) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 = this._resolveCompleteSelectedScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.selectedIds);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162) {
        this._dragStart = null, this._removeDragPreviewObject();
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.rootNodeId],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.rootNodeId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.element["transform"];
      this._dragStart = {
        kind: "scope",
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.subUnitId,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.rootNodeId,
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.scopeId,
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.left) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.left ?? 0,
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.top) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.top ?? 0,
        width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.width) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.width ?? 0,
        height: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.height) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.height ?? 0,
        elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583
      };
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.element);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585) {
      this._dragStart = null, this._removeDragPreviewObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.element["transform"];
    this._dragStart = {
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.parentNodeId === null ? "root" : "child",
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.subUnitId,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.structureScopeId,
      left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.left) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.left ?? 0,
      top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.top) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.top ?? 0,
      width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.width) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.width ?? 0,
      height: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.height) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.height ?? 0,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583
    };
  }
  _resolveCompleteSelectedScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597) {
    let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.element;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.structureScopeId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = getMindMapConnectorMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.structureScopeId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 = getMindMapContainerMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.structureScopeId) ?? null;
      });
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 === null) || new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1).size !== 1) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598) return null;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.element["visible"] !== false && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.element)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598;
    });
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length === 0 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.elementId))) return null;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.element)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.parentNodeId) === null;
    });
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.length === 1 ? {
      rootNodeId: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3[0].elementId,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598
    } : null;
  }
  _capturePointerChildDragStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609;
    if (this._uiStateService["getState"]().interactionMode === "viewing" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.button ?? 0) !== 0) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 = this._elementStateService["getSnapshot"]();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.activeEditingId) {
      this._pointerDragStart = null;
      return;
    }
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.subUnitId
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.context ?? this._resolveCurrentBoardContext(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.nodeId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.selectedIds["length"] === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.focusedId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.selectedIds[0] : undefined);
    if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4) {
      this._pointerDragStart = null;
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612 = this._boardElementService["getElementData"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.unitId, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.subUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613 = this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611] : null,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.element),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 ? resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.element["transform"]) : null;
      (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.parentNodeId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 || !this._isPointInBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613, {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.left ?? 0,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.top ?? 0,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.width ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.height ?? 0
      })) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 = this._findChildNodeAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613));
    }
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611) {
      this._pointerDragStart = null;
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614.element);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614 || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.parentNodeId)) {
      this._pointerDragStart = null;
      return;
    }
    this._instanceService["focusUnit"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.unitId), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 = this._renderContext["engine"]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605.getCanvasElement) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.focus) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606, {
      preventScroll: true
    }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 = this._elementStateService).selectElements) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604.stopPropagation();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614.element["transform"],
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616.left) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.left ?? 0,
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616.top) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.top ?? 0,
        width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616.width) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.width ?? 0,
        height: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616.height) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.height ?? 0
      };
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 && !this._isPointInBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5)) {
      this._pointerDragStart = null;
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618 = this._getPointerScreenPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602);
    this._childDragActivated = false, this._childDragSelectionHidden = false, this._lastChildDragAction = null, this._pointerDragStart = {
      kind: "child",
      unitId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.unitId,
      subUnitId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.subUnitId,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.structureScopeId,
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5,
      pointerStartX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618.x,
      pointerStartY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618.y,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612
    }, this._attachActivePointerDragListeners(), this._consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604);
  }
  _syncPointerChildDragPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 = this._pointerDragStart;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.buttons !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.buttons !== 1) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 = this._getPointerLiveBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640);
    if (!this._isChildDragPastActivationThreshold(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641)) return;
    this._childDragActivated || this._hideSelectionForChildDrag(), this._childDragActivated = true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 = this._createTopologyBoundsByElementId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.nodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 = nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.nodeId, {
        boundsByElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642,
        detachWhenNoSnap: true
      });
    this._lastChildDragAction = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643, this._syncChildDragPreviewObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642), this._consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637), this._renderContext["scene"].makeDirty(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 = this._renderContext["scene"]).requestRender) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639);
  }
  _applyPointerChildDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 = this._pointerDragStart;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654) return;
    if (this._pointerDragStart = null, this._disposeActivePointerDragListeners(), this._removeDragPreviewObject(), !this._childDragActivated) {
      this._lastChildDragAction = null;
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.subUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 = this._getPointerLiveBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657 = this._createTopologyBoundsByElementId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.nodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 = nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.nodeId, {
        boundsByElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657,
        detachWhenNoSnap: true
      });
    this._lastChildDragAction = null, this._executeChildDragAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.nodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658), this._childDragSelectionHidden = false, this._consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653);
  }
  _cancelPointerChildDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 = this._pointerDragStart;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667) {
      if (this._pointerDragStart = null, this._disposeActivePointerDragListeners(), this._childDragActivated = false, this._lastChildDragAction = null, this._removeDragPreviewObject(), this._childDragSelectionHidden) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 = this._elementStateService).selectElements) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667.subUnitId
        }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667.nodeId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667.nodeId), this._childDragSelectionHidden = false;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.stopPropagation();
    }
  }
  _attachActivePointerDragListeners() {
    this._disposeActivePointerDragListeners();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 = typeof window > "u" ? null : window;
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.addEventListener)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675 = new DisposableCollection(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 => this._syncPointerChildDragPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 => this._applyPointerChildDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 = () => this._cancelPointerChildDrag();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.addEventListener("pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, {
      capture: true
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.addEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, {
      capture: true
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.addEventListener("pointercancel", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, {
      capture: true
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675.add(toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.removeEventListener("pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, {
        capture: true
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.removeEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, {
        capture: true
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.removeEventListener("pointercancel", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, {
        capture: true
      });
    })), this._activePointerDragDisposables = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675;
  }
  _findChildNodeAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684);
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 >= 0; --var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.element);
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.parentNodeId)) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.elementId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.element["transform"];
      if (this._isPointInBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685, {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.left ?? 0,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.top ?? 0,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.width ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.height ?? 0
      })) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.elementId;
    }
  }
  _disposeActivePointerDragListeners() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 = this._activePointerDragDisposables) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.dispose(), this._activePointerDragDisposables = null;
  }
  _syncDragPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691 = this._dragStart;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691) {
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.kind === "root" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.kind === "scope") && this._syncRootScopePreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.kind === "root") {
        this._syncRootReparentPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690);
        return;
      }
      this._syncChildDragPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690);
    }
  }
  _syncRootScopePreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 = this._dragStart;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.kind !== "root" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.kind !== "scope") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694.get(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.nodeId));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696 || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696.left) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696.top)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697 = on({
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.elementData,
      rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.nodeId,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.scopeId,
      rootStartBounds: {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.left,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.top
      },
      liveRootBounds: {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696.left,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696.top
      }
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 = false;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697.items["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.elementId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698.getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.kind === "connector" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.updateElement == "function") {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697.elementData), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 = true;
          return;
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.kind === "bounds" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.transformByState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.bounds), typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.makeDirtyNoDebounce == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.makeDirtyNoDebounce(true) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.makeDirty(true), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 = true);
      }
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698.makeDirty(true);
  }
  _syncRootReparentPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709 = this._dragStart;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.kind !== "root") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.get(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.nodeId));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710.left) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710.top)) {
      this._removeDragPreviewObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711 = this._getLiveObjectBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712 = this._createTopologyBoundsByElementId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.nodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713 = nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.nodeId, {
        boundsByElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712,
        allowRootReparent: true
      });
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.kind !== "reparent") {
      this._removeDragPreviewObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714 = this._ensureDragPreviewObject();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.updateState({
      ghostBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711,
      sourceBounds: null,
      parentBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.newParentNodeId],
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.side,
      textStyle: undefined,
      renderGhostNode: false
    }), this._renderContext["scene"].makeDirty(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708 = this._renderContext["scene"]).requestRender) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708));
  }
  _syncChildDragPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727 = this._dragStart;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.kind !== "child") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724.get(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.nodeId));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728) {
      this._removeDragPreviewObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729 = this._getLiveObjectBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727);
    if (!this._isChildDragPastActivationThreshold(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729)) {
      this._lastChildDragAction = null, this._removeDragPreviewObject(), this._restoreObjectToDragStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727), this._renderContext["scene"].makeDirty(true);
      return;
    }
    this._childDragActivated || this._hideSelectionForChildDrag(), this._childDragActivated = true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730 = this._createTopologyBoundsByElementId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.nodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731 = nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.nodeId, {
        boundsByElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730,
        detachWhenNoSnap: true
      });
    this._lastChildDragAction = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731, this._syncChildDragPreviewObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730), this._restoreObjectToDragStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727), this._renderContext["scene"].makeDirty(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726 = this._renderContext["scene"]).requestRender) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726);
  }
  _applyDragTopologyAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742 = this._elementStateService["getSnapshot"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742.context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742.focusedId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742.selectedIds[0];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741 = this._dragStart) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741.kind) === "scope") {
      this._removeDragPreviewObject(), this._applyScopeTranslation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740);
      return;
    }
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742.selectedIds["length"] !== 1) {
      this._removeDragPreviewObject(), this._dragStart = null;
      return;
    }
    this._removeDragPreviewObject();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.subUnitId);
    if (this._applyRootTranslation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 = this._resolveChildDragTopologyAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740);
    this._executeChildDragAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746);
  }
  _applyScopeTranslation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757 = this._dragStart;
    if (this._dragStart = null, !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.kind !== "scope" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756.get(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.nodeId)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.left) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.left ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.left : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.left,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.top) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.top ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.top : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.top,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.left,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.top;
    (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 !== 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 !== 0) && this._commandService["executeCommand"](TranslateMindMapOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.scopeId,
      deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66,
      deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67
    });
  }
  _executeChildDragAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.kind === "reparent") {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 = getMindMapNodeMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773.element),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = getMindMapNodeMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.newParentNodeId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774.element);
      this._executeAndLayout(ReparentMindMapNodeOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770,
        newParentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.newParentNodeId,
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.side,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.referenceNodeId ? {
          referenceNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.referenceNodeId
        } : null),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.placement ? {
          placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.placement
        } : null)
      }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.structureScopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.structureScopeId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770);
      return;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.kind === "detach") {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = getMindMapNodeMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775.element);
      this._executeAndLayout(DetachMindMapNodeOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770,
        ...(Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.left) ? {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.left
        } : null),
        ...(Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.top) ? {
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.top
        } : null)
      }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.structureScopeId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770);
    }
  }
  _applyRootTranslation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 = this._dragStart;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.kind) === "root" && (this._dragStart = null), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.nodeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.element);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791.parentNodeId !== null) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788.get(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.left) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.left : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.left) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.element["transform"].left ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.top) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.top : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.top) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.element["transform"].top ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.left,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.top;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 === 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73 === 0) return true;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
        left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70,
        top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71,
        width: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.width) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.width : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.width,
        height: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.height) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.height : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.height
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794 = nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786, {
        boundsByElementId: this._createTopologyBoundsByElementId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8),
        allowRootReparent: true
      });
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.kind === "reparent") return this._executeChildDragAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794), true;
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 && Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.left - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70) < 0.001 && Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.top - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71) < 0.001;
    return this._commandService["executeCommand"](TranslateMindMapOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.scopeId,
      deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72,
      deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73,
      ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 ? {
        excludeElementIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786],
        preserveExcludedWorldTransforms: true
      } : null)
    }), true;
  }
  _resolveChildDragTopologyAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811 = this._dragStart;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.kind !== "child" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.nodeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808) return {
      kind: "none"
    };
    this._dragStart = null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810.get(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808));
    if (!this._childDragActivated) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812 && this._restoreObjectToDragStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811), this._lastChildDragAction = null, {
      kind: "none"
    };
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812) {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = this._lastChildDragAction ?? {
        kind: "none"
      };
      return this._lastChildDragAction = null, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813 = this._getLiveObjectBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811);
    if (this._restoreObjectToDragStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811), !this._isChildDragPastActivationThreshold(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813)) return this._lastChildDragAction = null, {
      kind: "none"
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 = nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808, {
      boundsByElementId: this._createTopologyBoundsByElementId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813),
      detachWhenNoSnap: true
    });
    return this._lastChildDragAction = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814;
  }
  _isChildDragPastActivationThreshold(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.left ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.left) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.left,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.top ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.top) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.top;
    return Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79) >= 18;
  }
  _getPointerLiveBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830 = this._getPointerScreenPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 = this._getZoomRatio();
    return {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.left + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.pointerStartX) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.top + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.pointerStartY) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.height
    };
  }
  _getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 = this._uiStateService["getState"](),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837.viewportPanOffset) ?? {
        x: 0,
        y: 0
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838 = this._getZoomRatio();
    return {
      x: Math.round(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.offsetX ?? 0) - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.x) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838),
      y: Math.round(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.offsetY ?? 0) - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.y) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838)
    };
  }
  _getPointerScreenPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842) {
    return {
      x: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.clientX) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.clientX : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.offsetX ?? 0,
      y: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.clientY) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.clientY : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.offsetY ?? 0
    };
  }
  _getZoomRatio() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 = this._uiStateService["getState"]().zoomRatio;
    return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 ?? 0) > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 : 1;
  }
  _isPointInBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.x >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.x <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847.width && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.y >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.y <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847.height;
  }
  _consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851.skipNextObservers = true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850);
  }
  _hideSelectionForChildDrag() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859;
    this._childDragSelectionHidden ||= ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 = this._elementStateService).clearSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859), true);
  }
  _getLiveObjectBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863) {
    return {
      left: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.left) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.left : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.left,
      top: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.top) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.top : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.top,
      width: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.width) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.width : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.width,
      height: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.height) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.height : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.height
    };
  }
  _restoreObjectToDragStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867) {
    typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.transformByState == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.transformByState({
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867.height
    }), typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.makeDirtyNoDebounce == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.makeDirtyNoDebounce(true) : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.makeDirty == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.makeDirty(true);
  }
  _createTopologyBoundsByElementId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872) {
    return Object.fromEntries(Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204].element["transform"]]));
  }
  _ensureDragPreviewObject() {
    if (this._dragPreviewObject) return this._dragPreviewObject;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876 = this._renderContext["scene"];
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876.addObject == "function" ? (this._dragPreviewObject = new Jt(Ht), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876.addObject(this._dragPreviewObject, Ut), this._dragPreviewObject) : null;
  }
  _syncChildDragPreviewObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881 = this._ensureDragPreviewObject();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.updateState({
      ghostBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878,
      sourceBounds: this._resolvePreviewSourceBounds(),
      parentBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879.kind === "reparent" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879.newParentNodeId] : null,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879.kind === "reparent" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879.side : "right",
      textStyle: this._resolvePreviewTextStyle(),
      renderGhostNode: true
    });
  }
  _resolvePreviewSourceBounds() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886 = this._pointerDragStart ?? this._dragStart;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886 ? {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886.height
    } : null;
  }
  _resolvePreviewTextStyle() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890 = this._pointerDragStart ?? this._dragStart,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.nodeId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.shapeText;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892) return {
      text: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.text == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.text : undefined,
      fontSize: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.fontSize) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.fontSize : undefined,
      color: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.color == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.color : undefined,
      horizontalAlign: Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.horizontalAlign) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.horizontalAlign : undefined
    };
  }
  _removeDragPreviewObject() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900;
    if (!this._dragPreviewObject) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901 = this._renderContext["scene"];
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901.removeObjects) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901, [this._dragPreviewObject]), this._dragPreviewObject = null, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900, true);
  }
  _executeAndLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9 = [...new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205))],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.unitId == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.unitId : this._renderContext["unitId"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911 = this._undoRedoGroupService["createRunner"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911(() => this._commandService["executeCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907));
    Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206) {
        if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911(() => this._commandService["executeCommand"](LayoutMindMapOperation.id, {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.subUnitId,
            scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656
          }));
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.unitId == "string" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.subUnitId == "string") {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212;
          (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 = this._elementStateService).selectElements) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.subUnitId
          }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909);
        }
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = this._renderContext["scene"]).requestRender) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210);
      }
    });
  }
};
export { sn };
