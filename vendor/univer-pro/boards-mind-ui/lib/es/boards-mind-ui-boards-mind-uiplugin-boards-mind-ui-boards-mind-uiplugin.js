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
import { cn } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-cn.js";
import { Sr } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-sr.js";
import { tr } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-tr.js";
import { or } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-or.js";
import { Hr } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-hr.js";
import { vn } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-vn.js";
import { br } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-br.js";
import { Vr, vr } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-vr.js";
import { ar } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-ar.js";
import { Gn } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-gn.js";
import { sn } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-sn.js";
import { zt } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-zt.js";
import { lr } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-lr.js";
const Ft = {};
const Ur = [cn],
  Wr = [Sr];
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462265 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698 = Ft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702
    } = merge({}, Ft, this._config);
    this._configService["setConfig"]("boards-mind-ui.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702);
  }
  onStarting() {
    UniverBoardsUIPlugin.registerRuntimeScopedDependencies(this._injector, [[tr], [or]]), this._injector["add"]([tr]), this._injector["add"]([or]), this._injector["add"]([Hr]), this._injector["add"]([vn]), this._injector["add"]([br]), this._injector["add"]([Vr]);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708 = this._injector["get"](Hr),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709 = this._injector["get"](IBoardMindMapAdapterService);
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708)), this.disposeWithMe(this._injector["get"](vn)), this.disposeWithMe(this._injector["get"](br)), this.disposeWithMe(this._injector["get"](Vr)), this._enableMindMapToolbarTool();
  }
  onReady() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, Ur)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, Wr)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, ar)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, vr)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, Gn)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, sn)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, zt)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, lr));
  }
  _enableMindMapToolbarTool() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714 = this._getBoardsUIConfig();
    this._configService["setConfig"](BOARDS_UI_PLUGIN_CONFIG_KEY, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714,
      toolbar: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.toolbar,
        tools: {
          ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.toolbar) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.tools),
          [BoardToolType.MindMap]: Gr((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.toolbar) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713.tools) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713[BoardToolType.MindMap])
        }
      }
    });
  }
  _getBoardsUIConfig() {
    return this._configService["getConfig"](BOARDS_UI_PLUGIN_CONFIG_KEY) ?? {};
  }
};
function Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262 === false ? false : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262 != "object" || {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262,
    enabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262.enabled ?? true
  };
}
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462265 as UniverBoardsMindUIPlugin };
