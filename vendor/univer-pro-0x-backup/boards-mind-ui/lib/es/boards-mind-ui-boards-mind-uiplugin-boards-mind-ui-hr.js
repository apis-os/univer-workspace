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
import { tr } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-tr.js";
let Hr = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684) {
    this._stateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682, this._insertStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684;
  }
  beginMindMapMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689 = this._renderManagerService["getRenderUnitById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.unitId)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689.getInjector) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691.get(IBoardUIStateService)) ?? this._stateService;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691.get(tr)) ?? this._insertStateService).setTemplate({
      rootText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.rootText,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.structureKind,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.branchLineType,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.children,
      blueprint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.blueprint
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.setShapeSidebarOpen(false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.clearPendingInsert(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.setActiveTool(BoardToolType.MindMap), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.setPendingInsert({
      type: BoardToolType.MindMap
    }), true;
  }
};
export { Hr };
