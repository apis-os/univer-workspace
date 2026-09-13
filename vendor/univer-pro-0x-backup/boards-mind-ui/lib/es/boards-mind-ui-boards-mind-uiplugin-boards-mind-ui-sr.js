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
import { mn, pn } from "./boards-mind-ui-boards-mind-uiplugin-internal-core-endo.js";
import { G } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-g.js";
const yr = "FOCUSING_MIND_MAP_TEXT_EDITOR";
const xr = [pn, mn, yr];
let Sr = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461622) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619, this._elementStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620, this._textEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621, this._contextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461622, G(this, "_isActive", false), this.disposeWithMe(toDisposable(this._renderContext["activated$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 => {
      this._isActive = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, this._syncContext();
    }))), this.disposeWithMe(toDisposable(this._elementStateService["state$"].pipe(takeUntil(this.dispose$)).subscribe(() => {
      this._syncContext();
    }))), this.disposeWithMe(toDisposable(this._textEditingService["editingParams$"].pipe(takeUntil(this.dispose$)).subscribe(() => {
      this._syncContext();
    }))), this._syncContext();
  }
  _syncContext() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630 = this._elementStateService["getSnapshot"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631 = this._textEditingService["getEditing"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631.visible ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631.shapeId : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.activeEditingId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.focusedId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.selectedIds[0],
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.context ?? {
        unitId: this._renderContext["unitId"],
        subUnitId: this._renderContext["unit"].getActivePageId()
      },
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25 = this._isActive && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.selectedIds["length"] === 1 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.isTransforming,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = this._isActive ? this._boardElementService["getElementData"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.unitId, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.subUnitId) : {};
    this._contextService["setContextValue"](pn, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25 && !!getMindMapNodeMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628.element)), this._contextService["setContextValue"](mn, this._isActive && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.selectedIds["length"] === 0 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.focusedId && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.isTransforming), this._contextService["setContextValue"](yr, !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632 && !!getMindMapNodeMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629.element));
  }
  dispose() {
    this._resetContext(), super.dispose();
  }
  _resetContext() {
    xr.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 => this._contextService["setContextValue"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385, false));
  }
};
export { Sr };
