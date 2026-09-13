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
const er = {
  children: [{
    text: MIND_MAP_DEFAULT_NODE_TEXT,
    orderKey: getMindMapDefaultChildOrderKey(0),
    side: "right"
  }, {
    text: MIND_MAP_DEFAULT_NODE_TEXT,
    orderKey: getMindMapDefaultChildOrderKey(1),
    side: "right"
  }, {
    text: MIND_MAP_DEFAULT_NODE_TEXT,
    orderKey: getMindMapDefaultChildOrderKey(2),
    side: "right"
  }]
};
var tr = class extends Disposable {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251), G(this, "_template", er);
  }
  setTemplate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.children) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.blueprint) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.root["children"]);
    this._template = {
      rootText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.rootText,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.structureKind,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.branchLineType,
      children: this._normalizeChildren(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.structureKind),
      blueprint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.blueprint ? this._cloneBlueprint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.blueprint) : undefined
    };
  }
  getTemplate() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259;
    return {
      rootText: this._template["rootText"],
      structureKind: this._template["structureKind"],
      branchLineType: this._template["branchLineType"],
      children: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 = this._template["children"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295
      })),
      blueprint: this._template["blueprint"] ? this._cloneBlueprint(this._template["blueprint"]) : undefined
    };
  }
  _cloneBlueprint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261) {
    return {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261.title,
      root: this._cloneBlueprintNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261.root)
    };
  }
  _cloneBlueprintNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263) {
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263,
      foreignAttributes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.foreignAttributes ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.foreignAttributes
      } : undefined,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.children["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 => this._cloneBlueprintNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296))
    };
  }
  _normalizeChildren(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266) {
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265 ?? er.children;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298) => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.text ?? MIND_MAP_DEFAULT_NODE_TEXT,
      side: this._resolveChildSide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.side, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19)
    }));
  }
  _resolveChildSide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 === "mindmap-vertical" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 ? "bottom" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 ?? "bottom" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 === "tree-left" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 ? "left" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 ?? "left" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 === "tree-right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 ? "right" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 ?? "right" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 === "tree-alternate" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 % 2 == 0 ? "left" : "right" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 % 2 == 0 ? "left" : "right") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 === "timeline-horizontal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 % 2 == 0 ? "top" : "bottom" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 % 2 == 0 ? "top" : "bottom") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 === "timeline-vertical" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 % 2 == 0 ? "left" : "right" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 % 2 == 0 ? "left" : "right") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271;
  }
};
export { tr };
