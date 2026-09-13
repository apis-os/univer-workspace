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
import { fn, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72, hn, ln, pn, un } from "./boards-mind-ui-boards-mind-uiplugin-internal-core-endo.js";
import { cn } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-cn.js";
let vn = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941) {
    super(), this._mindMapClipboardService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, this._shortcutService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940, this._undoRedoGroupService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941, this._init();
  }
  _init() {
    this.disposeWithMe(this._commandService["registerCommand"](this._createKeyboardShortcutOperation())), this._createShortcutItems().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 => {
      this.disposeWithMe(this._shortcutService["registerShortcut"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220));
    });
  }
  _createKeyboardShortcutOperation() {
    return {
      id: fn,
      type: CommandType.OPERATION,
      handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 = yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 ? this.handleShortcut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223.action) : false;
      }
    };
  }
  _createShortcutItems() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231) => ({
        id: fn,
        binding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230,
        priority: 160,
        preconditions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.getContextValue(pn),
        staticParameters: {
          action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231
        }
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 => fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232));
    return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("copy"), {
      id: fn,
      binding: hn.paste,
      priority: 160,
      preconditions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 => !!this._mindMapClipboardService["getPayload"]() && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.getContextValue("FOCUSING_MIND_MAP_NODE"),
      staticParameters: {
        action: "paste"
      }
    }, {
      id: fn,
      binding: hn["paste-as-new"],
      priority: 150,
      preconditions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 => !!this._mindMapClipboardService["getPayload"]() && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.getContextValue("FOCUSING_MIND_MAP_BLANK_BOARD"),
      staticParameters: {
        action: "paste-as-new"
      }
    }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("add-child"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("add-sibling-or-child"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("promote"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("toggle-collapse"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("collapse-all"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("edit-text"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("open-description"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("delete"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("arrow-left"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("arrow-right"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("arrow-up"), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947("arrow-down")];
  }
  handleShortcut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950.uiStateService["getState"]().interactionMode === "viewing" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 !== "copy" ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "copy" ? this._copySelectedNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "paste" ? this._pasteUnderSelectedNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "paste-as-new" ? this._pasteAsNewMindMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "add-child" ? this._addChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "add-sibling-or-child" ? this._addSiblingOrChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "promote" ? this._executeNodeOperation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950, PromoteMindMapNodeOperation.id) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "toggle-collapse" ? this._executeNodeOperation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950, ToggleMindMapNodeCollapseOperation.id) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "collapse-all" ? this._collapseAll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "edit-text" ? this._openSelectedTextEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "open-description" ? this._openDescriptionDialog(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 === "delete" ? this._deleteSelectedNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 && bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951) ? this._navigateByTopology(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951) : false;
  }
  _copySelectedNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.commandService["executeCommand"](CopyMindMapNodeOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955.subUnitId,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955.nodeId
    }), true) : false;
  }
  _pasteUnderSelectedNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.clipboardService["getPayload"]() ? false : (this._executeAndLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, PasteMindMapNodeOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.subUnitId,
      targetNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.nodeId
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.scopeId), true);
  }
  _pasteAsNewMindMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963 = this._getBlankBoardContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.clipboardService["getPayload"]()) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.uiStateService["getState"](),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.zoomRatio) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.zoomRatio > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.zoomRatio : 1,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 = Math.round((64 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.viewportPanOffset["x"]) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84 = Math.round((64 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.viewportPanOffset["y"]) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.commandService["executeCommand"](PasteMindMapAsNewMindMapOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963.subUnitId,
      left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83,
      top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84
    }), true;
  }
  _addChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970 = generateRandomId(6);
    return this._executeCreateAndEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968, AddMindMapChildOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.subUnitId,
      parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.nodeId,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970,
      connectorId: generateRandomId(6),
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.localeService["t"]("boards-mind-ui.panel.addText")
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970), true;
  }
  _addSiblingOrChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976 = generateRandomId(6);
    return this._executeCreateAndEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975.isRoot ? AddMindMapChildOperation.id : AddMindMapSiblingOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975.subUnitId,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975.isRoot ? {
        parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975.nodeId,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976
      } : {
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975.nodeId,
        siblingNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976
      }),
      connectorId: generateRandomId(6),
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974.localeService["t"]("boards-mind-ui.panel.addText")
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976), true;
  }
  _executeNodeOperation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982 ? (this._executeAndLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.subUnitId,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.nodeId
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.scopeId), true) : false;
  }
  _deleteSelectedNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986.commandService["syncExecuteCommand"](DeleteMindMapNodeOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.subUnitId,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.nodeId
    });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986.elementStateService["clearSelection"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988;
  }
  _collapseAll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992.elementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.subUnitId),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.element);
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.scopeId && this._getMindMapChildren(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.elementId).length > 0 ? {
          nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.elementId,
          collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.collapsed
        } : null;
      }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239);
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11.length === 0) return false;
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.collapsed),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992.commandService,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996 = this._undoRedoGroupService["createRunner"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.unitId),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995.executeCommand(ToggleMindMapNodeCollapseOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.subUnitId,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.nodeId,
        collapsed: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11
      })));
    return Promise.all(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 => Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242))).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.some(Boolean) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995.executeCommand(LayoutMindMapOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.subUnitId,
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.scopeId
      }));
    }), true;
  }
  _openSelectedTextEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003) return false;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.elementStateService["selectElements"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.subUnitId
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.nodeId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.nodeId);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.textEditingService;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004.ignoreExternalFocusChanges(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004.setEditing({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.subUnitId,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.nodeId,
      shapeKey: getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.nodeId),
      visible: true
    }), true;
  }
  _openDescriptionDialog(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008.dialogService["open"]({
      id: un,
      title: {
        title: "boards-mind-ui.description"
      },
      width: 420,
      draggable: true,
      mask: false,
      maskClosable: true,
      children: {
        label: ln,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.subUnitId,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.nodeId,
        initialDescription: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.description
      }
    }), true) : false;
  }
  _navigateByTopology(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014 = this._getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012.elementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014.subUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014.nodeId],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016.element);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018 = {
      "arrow-left": "ArrowLeft",
      "arrow-right": "ArrowRight",
      "arrow-up": "ArrowUp",
      "arrow-down": "ArrowDown"
    }[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019 = this._resolveArrowNavigationTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014.nodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012.elementStateService["selectElements"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014.subUnitId
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019), true) : false;
  }
  _resolveArrowNavigationTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032 = this._getMindMapChildren(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.structureScopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.parentNodeId === null) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 === "ArrowLeft") {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659;
          return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.element)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.side) === "left";
        })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033.elementId) ?? null;
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 === "ArrowRight") {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663;
          return (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.element)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.side) ?? "right") === "right";
        })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034.elementId) ?? null;
      }
      return null;
    }
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB95 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.side ?? "right",
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB96 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB95 === "right" ? "ArrowLeft" : "ArrowRight",
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB97 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB95 === "right" ? "ArrowRight" : "ArrowLeft";
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB96) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.parentNodeId;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB97) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035.elementId) ?? null;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 === "ArrowUp" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 === "ArrowDown") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = this._getMindMapChildren(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.structureScopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.parentNodeId),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 === "ArrowUp" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 - 1] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 + 1];
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246.elementId) ?? null;
    }
    return null;
  }
  _getMindMapChildren(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046) {
    return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.element);
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.element["visible"] !== false;
    }).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.element),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.element);
      return compareMindMapOrderKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.orderKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.orderKey) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.elementId["localeCompare"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.elementId);
    });
  }
  _getSelectedMindMapContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.elementStateService["getSnapshot"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052.focusedId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052.selectedIds[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052.selectedIds["length"] !== 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052.activeEditingId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052.isTransforming) return null;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052.context ?? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.renderContext["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.renderContext["unit"].getActivePageId()
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.elementService["getElementData"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12.unitId, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12.subUnitId)[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054.element);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055 ? null : {
      unitId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12.unitId,
      subUnitId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12.subUnitId,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055.structureScopeId,
      isRoot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055.parentNodeId === null,
      description: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055.foreignAttributes) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051._note) ?? ""
    };
  }
  _getBlankBoardContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.elementStateService["getSnapshot"]();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.activeEditingId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.isTransforming || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.selectedIds["length"] > 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.focusedId ? null : {
      unitId: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063.unitId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.renderContext["unitId"],
      subUnitId: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064.subUnitId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.renderContext["unit"].getActivePageId()
    };
  }
  _executeAndLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070.commandService,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075 = this._undoRedoGroupService["createRunner"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072.unitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074.executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072));
    Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074.executeCommand(LayoutMindMapOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072.subUnitId,
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073
      }));
    });
  }
  _executeCreateAndEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.subUnitId
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084.commandService,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090 = this._undoRedoGroupService["createRunner"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.unitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086));
    Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261) return;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.executeCommand(LayoutMindMapOperation.id, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14,
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087
      })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084.elementStateService["selectElements"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084.textEditingService;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.ignoreExternalFocusChanges(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.setEditing({
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088,
        shapeKey: getBoardElementRenderObjectKey(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088),
        visible: true
      });
    });
  }
};
function yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910 = typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907.unitId) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907.unitId : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906.get(IUniverInstanceService).getCurrentUnitOfType(UniverInstanceType.UNIVER_BOARD)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.getUnitId();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910 ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906.get(IRenderManagerService).getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.with(cn)) ?? null : null;
}
function bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916 === "arrow-left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916 === "arrow-right" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916 === "arrow-up" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916 === "arrow-down";
}
export { vn };
