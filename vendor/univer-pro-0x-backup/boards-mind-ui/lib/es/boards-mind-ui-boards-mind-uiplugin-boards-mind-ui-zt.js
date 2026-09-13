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
let zt = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411, G(this, "_nodeSizeByKey", new Map()), G(this, "_queuedLayouts", new Map()), G(this, "_layoutFlushScheduled", false), this._init();
  }
  _init() {
    this._seedExistingNodeSizes(), this.disposeWithMe(toDisposable(this._boardElementService["elementAdd$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.elementId);
        this._rememberNodeSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683);
      });
    }))), this.disposeWithMe(toDisposable(this._boardElementService["elementUpdate$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 => this._handleElementUpdate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686));
    })));
  }
  _seedExistingNodeSizes() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 = this._renderContext["unitId"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = this._boardElementService["getElementDataForUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415);
    Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128]) => {
      Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.data).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 => {
        this._rememberNodeSize({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.elementId
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687);
      });
    });
  }
  _handleElementUpdate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.unitId !== this._renderContext["unitId"]) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 = this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.elementId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.element),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 = this._resolveNodeSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422) {
      this._nodeSizeByKey["delete"](this._getElementKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419));
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 = this._getElementKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 = this._nodeSizeByKey["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423);
    this._nodeSizeByKey["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422), !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.width === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.width && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.height === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.height) && this._queueLayout({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.subUnitId,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.structureScopeId
    });
  }
  _rememberNodeSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.unitId !== this._renderContext["unitId"]) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.element),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 = this._resolveNodeSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432);
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 || this._nodeSizeByKey["set"](this._getElementKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434);
  }
  _resolveNodeSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439.transform) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439.element["transform"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.width,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.height;
    return !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442) ? null : {
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442
    };
  }
  _queueLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447) {
    this._queuedLayouts["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.unitId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.subUnitId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447), !this._layoutFlushScheduled && (this._layoutFlushScheduled = true, Promise.resolve().then(() => {
      this._layoutFlushScheduled = false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = Array.from(this._queuedLayouts["values"]());
      this._queuedLayouts["clear"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 => {
        this._executeRootAnchoredLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689);
      });
    }));
  }
  _executeRootAnchoredLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.scopeId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = getMindMapContainerMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.element)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.rootNodeId;
    this._commandService["executeCommand"](LayoutMindMapOperation.id, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449,
      skipUndo: true,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 ? {
        anchorNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452
      } : null)
    });
  }
  _getElementKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.unitId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.subUnitId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.elementId;
  }
};
export { zt };
