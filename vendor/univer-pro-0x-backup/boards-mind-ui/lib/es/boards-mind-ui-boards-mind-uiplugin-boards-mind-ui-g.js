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
function It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718) {
  "@babel/helpers - typeof";

  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403;
  }, It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718);
}
function Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721) {
  if (It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721 || "default");
    if (It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720);
}
function Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729 = Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728, "string");
  return It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729 + "";
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733 = Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732;
}
export { G };
