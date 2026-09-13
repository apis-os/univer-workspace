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
import { Dn } from "./boards-mind-ui-boards-mind-uiplugin-internal-core-endo.js";
function Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052) {
  let {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052;
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053,
    right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054 - 56,
    bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056
  };
}
let Gn = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461136) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131, this._boardCanvasPopManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133, this._elementStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134, this._boardTextEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135, this._interactionSurfaceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461136, G(this, "_popupDisposable", null), G(this, "_popupSelectionKey", null), this._init();
  }
  dispose() {
    this._clearPopup(), super.dispose();
  }
  _init() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143 = this._renderContext["scene"].getTransformerByCreate();
    this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.createControl$["pipe"](takeUntil(this.dispose$)).subscribe(() => this._showPopupForSelection()))), this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.clearControl$["pipe"](takeUntil(this.dispose$)).subscribe(() => this._clearPopupIfSelectionChanged()))), this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.changeStart$["pipe"](takeUntil(this.dispose$)).subscribe(() => this._clearPopup()))), this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.changeEnd$["pipe"](takeUntil(this.dispose$)).subscribe(() => setTimeout(() => this._showPopupForSelection(), 0)))), this.disposeWithMe(toDisposable(this._elementStateService["state$"].pipe(takeUntil(this.dispose$)).subscribe(() => setTimeout(() => this._showPopupForSelection(), 0)))), this.disposeWithMe(toDisposable(this._interactionSurfaceService["interactionSurfaceActive$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275) {
        this._clearPopup();
        return;
      }
      setTimeout(() => this._showPopupForSelection(), 0);
    }))), this.disposeWithMe(toDisposable(this._boardTextEditingService["editingParams$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 => {
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId) === this._renderContext["unitId"]) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.visible) {
          this._clearPopup();
          return;
        }
        setTimeout(() => this._showPopupForSelection(), 0);
      }
    })));
  }
  _clearPopup() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145 = this._popupDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.dispose(), this._popupDisposable = null, this._popupSelectionKey = null;
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147 = this._elementStateService["getSnapshot"]();
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.context && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.selectedIds["length"] > 0 && this._popupSelectionKey === this._buildPopupSelectionKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.context["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.selectedIds);
  }
  _buildPopupSelectionKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151.join(",");
  }
  _resolveIncomingConnectorStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461158) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 = getMindMapConnectorMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279.element);
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.childNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461158;
      });
    if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160 || !("connectorData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.element))) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.element["connectorData"].style;
  }
  _showPopupForSelection() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169;
    if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170 = this._boardTextEditingService["getEditing"]();
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170.visible) === true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170.unitId === this._renderContext["unitId"]) {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171 = this._elementStateService["getSnapshot"]();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.isTransforming) {
      this._clearPopup();
      return;
    }
    if (resolveBoardFloatingToolbarSelection({
      context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.context,
      selectedIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.selectedIds,
      getElementById: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285) => this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285)
    }).owner !== "mind-map") {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 = this._renderContext["scene"].getTransformerByCreate().getSelectedObjectMap(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.values()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 => this._resolveSelectedEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 => !!getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.elementData["element"])),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289.elementData["elementId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.focusedId) ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17[0] ?? this._resolveSelectedMindMapEntryFromState();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173) {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["element"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174) {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["subUnitId"])[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.structureScopeId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176 = getMindMapContainerMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175.custom) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168.mindmap) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168.structureKind,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176.layout["structureKind"]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177) === "mindmap-vertical" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.parentNodeId === null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.side === "top"),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.parentNodeId !== null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.side !== "top" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.side !== "bottom",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["unitId"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.context["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["subUnitId"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.selectedIds["length"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.selectedIds : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["elementId"]],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179 = this._buildPopupSelectionKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["subUnitId"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18);
    this._popupDisposable && this._popupSelectionKey === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179 || (this._clearPopup(), this._popupDisposable = this.disposeWithMe(this._boardCanvasPopManagerService["attachPopupToObject"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.object, {
      componentKey: Dn,
      direction: "top-center",
      offset: [0, 8],
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178 ? {
        anchorBoundResolver: Wn
      } : null),
      extraProps: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["subUnitId"],
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["elementId"],
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.structureScopeId,
        isRootNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.parentNodeId === null,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["element"].transform["left"] ?? 0,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["element"].transform["top"] ?? 0,
        shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["element"].type === BoardElementType.Shape ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["element"].shapeData : undefined,
        layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176.layout,
        incomingConnectorStyle: this._resolveIncomingConnectorStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.structureScopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.elementData["elementId"])
      }
    })), this._popupSelectionKey = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179);
  }
  _resolveSelectedMindMapEntryFromState() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194 = this._elementStateService["getSnapshot"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194.context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461196 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194.focusedId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194.selectedIds[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461196) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461197 = this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461196);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461197 || !getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461197.element)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461198 = getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461196),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199.getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461198)) ?? this._renderContext["scene"].getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461198);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200 ? {
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461197
    } : null;
  }
  _resolveSelectedEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211 = parseBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209.oKey);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212 = this._elementStateService["getSnapshot"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211.unitId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212.context["subUnitId"] : undefined;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214 = this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211.elementId);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214 ? {
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214
    } : null;
  }
};
export { Gn };
