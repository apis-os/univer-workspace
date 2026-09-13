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
function sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092 > 0;
}
function cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097.element);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099 = resolveMindMapNodeHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097.transform ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097.element["transform"];
  return resolveMindMapLayoutPreview({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095]: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097,
      transform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099.height
      },
      element: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097.element,
        transform: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097.element["transform"],
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099.height
        }
      }
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.structureScopeId);
}
let lr = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461374) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369, this._intrinsicSizeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371, this._textEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372, this._previewRefreshService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461374, G(this, "_activePreview", null), G(this, "_provider", {
      match: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305.unitId === this._renderContext["unitId"] && !!getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305.element),
      resolveHostSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 => this._resolveHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306),
      previewHostSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 => this._previewHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307),
      updateHostSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 => this._updateHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308),
      updateShapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 => this._updateShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309)
    }), this.disposeWithMe(this._intrinsicSizeService["registerProvider"](this._provider)), this._initEditingRestore(), this.disposeWithMe(toDisposable(() => this._restoreActivePreview()));
  }
  _updateHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381) {
    return this._previewHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381);
  }
  _updateShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.params["hostSize"] ? this._resolveHostSize({
        elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.elementData,
        params: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.params["hostSize"]
      }) : null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.elementData["transform"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.elementData["element"].transform;
    return !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.width !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.height !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.height)) && areBoardShapeTextValuesEquivalent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.params["shapeText"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.params["oldShapeText"]) ? true : this._commandService["syncExecuteCommand"](UpdateMindMapNodeOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.params["unitId"],
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.params["subUnitId"],
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.params["shapeId"],
      shapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.params["shapeText"],
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384 ? {
        hostSize: {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.height
        }
      } : null)
    });
  }
  _previewHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390 = this._resolveHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389.elementData["transform"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389.elementData["element"].transform;
    return !this._activePreview && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461391.width === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390.width && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461391.height === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390.height || this._syncLayoutPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390), true;
  }
  _resolveHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395) {
    return !sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.params["width"]) || !sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.params["height"]) ? null : resolveMindMapNodeHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.elementData, {
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.params["width"],
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.params["height"]
    });
  }
  _initEditingRestore() {
    this.disposeWithMe(toDisposable(this._textEditingService["editingParams$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 || this._restoreActivePreview();
    })));
  }
  _syncLayoutPreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.params["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.params["subUnitId"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401 = cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.params["shapeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 = getMindMapNodeMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.params["shapeId"]]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399.element);
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 || (this._activePreview = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.params["unitId"],
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.params["subUnitId"],
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.structureScopeId
    }, this._syncElementDataToScene(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.structureScopeId) && this._previewRefreshService["notify"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.params["unitId"],
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.params["subUnitId"],
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.params["shapeId"],
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.structureScopeId
    }));
  }
  _restoreActivePreview() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409 = this._activePreview;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409) return;
    this._activePreview = null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.subUnitId);
    this._syncElementDataToScene(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.scopeId) && this._previewRefreshService["notify"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.subUnitId,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.scopeId,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.scopeId
    });
  }
  _syncElementDataToScene(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414) {
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 = false;
    if (Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.element),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.element["custom"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.structured;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.elementId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314.structureScopeId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.structureScopeId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 = this._getSceneObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.elementId);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 = syncBoardElementRenderObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, {
        elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413,
        unitId: this._renderContext["unitId"]
      }) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21);
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416;
      this._renderContext["scene"].makeDirty(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416 = this._renderContext["scene"]).requestRender) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416);
    }
    return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21;
  }
  _getSceneObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423 = getBoardElementRenderObjectKey(this._renderContext["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424 = this._renderContext["scene"];
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423)) ?? this._renderContext["scene"].getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423) ?? null;
  }
};
export { lr };
