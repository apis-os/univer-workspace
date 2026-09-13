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
const J = {
  primaryColor: SHAPE_FLOATING_TOOLBAR_DEFAULT_STROKE_COLOR,
  surfaceColor: SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_BACKGROUND_COLOR,
  textColor: SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_COLOR,
  fontFamily: DEFAULT_STYLES.ff
};
function Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 = Math.min(1, Math.max(0, Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 : 1)),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB103 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756.trim(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758 = /^#([0-9a-fA-F]{6})$/["exec"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB103);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758[1];
  return "rgba(" + Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759.slice(0, 2), 16) + ",\x20" + Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759.slice(2, 4), 16) + ",\x20" + Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759.slice(4, 6), 16) + ",\x20" + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 + ")";
}
const Y = {
  primaryColor: J.primaryColor,
  ghostFillColor: Bt(J.surfaceColor, 0.72),
  ghostTextColor: Bt(J.textColor, 0.62),
  rootTextColor: Bt(J.surfaceColor, 0.86),
  sourceHighlightFillColor: Bt(J.primaryColor, 0.12),
  sourceHighlightStrokeColor: Bt(J.primaryColor, 0.9),
  objectAlpha: 0.72,
  dragObjectAlpha: 0.78,
  connectorAlpha: 0.64,
  lineWidthScreen: 2,
  fallbackNodeWidth: MIND_MAP_DEFAULT_NODE_SIZE.nodeWidth,
  fallbackNodeHeight: MIND_MAP_DEFAULT_NODE_SIZE.nodeHeight,
  branchGap: MIND_MAP_DEFAULT_LAYOUT.branchGap,
  sourceHaloScreen: 4,
  ghostRadius: 8,
  rootRadius: 10,
  fontFamily: J.fontFamily,
  ghostFontWeight: 500,
  rootFontWeight: 600,
  rootFontSize: 18,
  textPaddingScreen: 12,
  dirtyPaddingScreen: 24,
  sourceDashScreen: [6, 4]
};
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768 / 2);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.closePath();
}
function Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776 + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778 + "px " + Y.fontFamily;
}
const ln = "board.mind-map.description-dialog",
  un = "board-mind-map-description-dialog";
const fn = "board.operation.mind-map.keyboard-shortcut",
  pn = "FOCUSING_MIND_MAP_NODE",
  mn = "FOCUSING_MIND_MAP_BLANK_BOARD",
  hn = {
    copy: BOARD_SHORTCUT_BINDINGS.copy,
    paste: BOARD_SHORTCUT_BINDINGS.paste,
    "paste-as-new": BOARD_SHORTCUT_BINDINGS.paste,
    "add-child": BOARD_SHORTCUT_BINDINGS.addChildNode,
    "add-sibling-or-child": BOARD_SHORTCUT_BINDINGS.addSiblingNode,
    promote: BOARD_SHORTCUT_BINDINGS.addParentNode,
    "toggle-collapse": BOARD_SHORTCUT_BINDINGS.foldChildNodes,
    "collapse-all": BOARD_SHORTCUT_BINDINGS.collapseAllNodes,
    "edit-text": BOARD_SHORTCUT_BINDINGS.editCurrentNode,
    "open-description": BOARD_SHORTCUT_BINDINGS.addDescription,
    delete: KeyCode.DELETE,
    "arrow-left": KeyCode.ARROW_LEFT,
    "arrow-right": KeyCode.ARROW_RIGHT,
    "arrow-up": KeyCode.ARROW_UP,
    "arrow-down": KeyCode.ARROW_DOWN
  },
  gn = {
    delete: [KeyCode.BACKSPACE]
  };
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904) {
  return [hn[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904], ...(gn[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904] ?? [])];
}
const xn = {
    min: 1,
    max: 5,
    defaultValue: 3
  },
  Sn = {
    min: 0,
    max: 100,
    defaultValue: 100
  },
  Cn = [{
    kind: "dropdown",
    titleKey: "boards-mind-ui.toolbar.primary.line",
    panel: "line"
  }, {
    kind: "fontColor",
    titleKey: "boards-mind-ui.toolbar.primary.fontColor"
  }, {
    kind: "typography",
    titleKey: "boards-mind-ui.toolbar.primary.typography"
  }, {
    kind: "dropdown",
    titleKey: "boards-mind-ui.toolbar.primary.more",
    panel: "more",
    dividerBefore: true
  }],
  wn = {
    addSibling: "add-sibling-or-child",
    addChild: "add-child",
    copy: "copy",
    paste: "paste",
    delete: "delete"
  },
  Tn = [{
    key: "mind-map",
    title: "Mind\x20map",
    items: [{
      value: "mindmap-horizontal",
      icon: "mindmap-horizontal",
      labelKey: "boards-mind-ui.panel.structureKind.mindmapHorizontal"
    }, {
      value: "mindmap-vertical",
      icon: "mindmap-vertical",
      labelKey: "boards-mind-ui.panel.structureKind.mindmapVertical"
    }]
  }, {
    key: "tree-diagram",
    title: "Tree diagram",
    items: [{
      value: "tree-right",
      icon: "tree-right",
      labelKey: "boards-mind-ui.panel.structureKind.treeRight"
    }, {
      value: "tree-left",
      icon: "tree-left",
      labelKey: "boards-mind-ui.panel.structureKind.treeLeft"
    }, {
      value: "tree-alternate",
      icon: "tree-alternate",
      labelKey: "boards-mind-ui.panel.structureKind.treeAlternate"
    }]
  }, {
    key: "timeline",
    title: "Timeline",
    items: [{
      value: "timeline-horizontal",
      icon: "timeline-horizontal",
      labelKey: "boards-mind-ui.panel.structureKind.timelineHorizontal"
    }, {
      value: "timeline-vertical",
      icon: "timeline-vertical",
      labelKey: "boards-mind-ui.panel.structureKind.timelineVertical"
    }]
  }],
  En = {
    key: "branch",
    title: "Branch",
    items: [{
      value: "curve",
      icon: "branch-curve",
      labelKey: "boards-mind-ui.panel.branchLineType.curve"
    }, {
      value: "rounded-orthogonal",
      icon: "branch-rounded-orthogonal",
      labelKey: "boards-mind-ui.panel.branchLineType.roundedOrthogonal"
    }, {
      value: "orthogonal",
      icon: "branch-orthogonal",
      labelKey: "boards-mind-ui.panel.branchLineType.orthogonal"
    }]
  },
  Dn = "board.mind-map.floating-toolbar";
export { Y, X, Vt, un, fn, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72, xn, Sn, Tn, En, wn, Cn, J, ln, Dn, pn, hn, mn };
