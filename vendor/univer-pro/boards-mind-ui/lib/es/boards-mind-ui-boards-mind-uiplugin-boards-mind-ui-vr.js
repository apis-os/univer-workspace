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
import { Cn, Dn, En, J, Sn, Tn, fn, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72, ln, un, wn, xn } from "./boards-mind-ui-boards-mind-uiplugin-internal-core-endo.js";
import { G } from "./boards-mind-ui-boards-mind-uiplugin-boards-mind-ui-g.js";
function dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882) {
  let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885,
      initialDescription: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886 = ""
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888 = useDependency(IDialogService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889 = useDependency(LocaleService),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892 = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888.close(un);
  return jsxs("div", {
    className: "univer-flex\x20univer-w-full\x20univer-flex-col\x20univer-gap-4",
    "data-board-mind-map-description-dialog": "true",
    children: [jsxs("label", {
      className: "univer-flex univer-flex-col univer-gap-2",
      children: [jsx("span", {
        className: "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.t("boards-mind-ui.description")
      }), jsx(Textarea, {
        autoFocus: true,
        className: "univer-h-32 univer-resize-none univer-text-sm",
        placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.t("boards-mind-ui.descriptionPlaceholder"),
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890,
        onValueChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891
      })]
    }), jsxs("div", {
      className: "univer-flex univer-justify-end univer-gap-2",
      children: [jsx(Button, {
        size: "small",
        variant: "default",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.t("boards-mind-ui.cancel")
      }), jsx(Button, {
        size: "small",
        variant: "primary",
        onClick: () => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887.executeCommand(UpdateMindMapNodeOperation.id, {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884,
            nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885,
            foreignAttributes: {
              _note: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890.trim() ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890 : null
            }
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892();
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.t("boards-mind-ui.saveDescription")
      })]
    })]
  });
}
function On(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461919) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461918.executeCommand(fn, {
    action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461919
  });
}
const kn = {
  line: ShapeLineIcon,
  more: MoreHorizontalIcon
};
function An(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922.preventDefault();
}
function jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925 = "univer-size-5", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926) {
  return jsx(ShapeFloatingToolbarIcon, {
    children: jsx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924, {
      className: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925,
      extend: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926
    })
  });
}
function Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930.shapeText) ?? {},
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.dataModel && typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.dataModel == "object" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.dataModel : {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30.doc) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.textStyle;
  return {
    color: typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.color == "string" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.color : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933.cl) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.rgb) ?? SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_COLOR,
    fontFamily: typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.fontFamily == "string" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.fontFamily : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933.ff) ?? DEFAULT_STYLES.ff,
    fontSize: typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.fontSize == "number" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.fontSize : typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933.fs) == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933.fs : DEFAULT_STYLES.fs,
    horizontalAlign: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.horizontalAlign ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30.ha ?? HorizontalAlign.LEFT,
    textFill: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.textFill && typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.textFill == "object" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.textFill : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933.textFill,
    verticalAlign: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.verticalAlign ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30.va ?? VerticalAlign.MIDDLE
  };
}
function Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940 = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940.length) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461938.getShortcutDisplay({
    id: "board.operation.mind-map.keyboard-shortcut",
    binding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100,
    staticParameters: {
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939
    }
  }) ?? undefined).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461101 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461101);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25.length ? [...new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25)].join("/") : undefined;
}
async function Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461946) {
  return (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944.executeCommand(ChangeMindMapLayoutOperation.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461946)))) ? (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944.executeCommand(LayoutMindMapOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461946.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461946.subUnitId,
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461946.scopeId
  }))), true) : false;
}
async function Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952) {
  return (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.executeCommand(ChangeMindMapBranchLineTypeOperation.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952)))) ? (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.executeCommand(LayoutMindMapOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.subUnitId,
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.scopeId
  }))), true) : false;
}
function In({
  className: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956 = "univer-size-5"
}) {
  return jsx(ShapeFloatingToolbarIcon, {
    children: jsxs("svg", {
      className: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956,
      viewBox: "0\x200\x2024\x2024",
      fill: "none",
      "aria-hidden": "true",
      children: [jsx("path", {
        d: "M4.5 7.5h4.2c1.9 0 3.3 1.5 3.3 3.3v2.4c0 1.8 1.4 3.3 3.3 3.3h4.2",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }), jsx("path", {
        d: "M19.5\x207.5h-4.2c-1.9\x200-3.3\x201.5-3.3\x203.3",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }), jsx("path", {
        d: "M4.5 16.5h4.2c1.9 0 3.3-1.5 3.3-3.3",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      })]
    })
  });
}
function Ln({
  icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958
}) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB113 = "#d8dce3",
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33 = {
      stroke: "currentColor",
      strokeWidth: 2.6,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34 = {
      stroke: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB113,
      strokeWidth: 3.2,
      strokeLinecap: "round"
    };
  return jsxs("svg", {
    className: "univer-h-9 univer-w-12",
    viewBox: "0 0 80 56",
    fill: "none",
    "aria-hidden": "true",
    children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "mindmap-horizontal" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M31 13c9 8 9 22 18 30M49 13c-9 8-9 22-18 30M31 13c-7 4-9 9-9 15s2 11 9 15M49 13c7 4 9 9 9 15s-2 11-9 15",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      }), jsx("path", {
        d: "M12 15h9M12 28h9M12 41h9M59 15h9M59 28h9M59 41h9",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "mindmap-vertical" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M21 28h38M40 11v34M28 16c7 4 10 8 12 12 2-4 5-8 12-12M28 40c7-4 10-8 12-12 2 4 5 8 12 12",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      }), jsx("path", {
        d: "M22 8h36M22 48h36M14 18v20M66 18v20",
        stroke: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB113,
        strokeWidth: 2.6,
        strokeLinecap: "round",
        strokeDasharray: "6 7"
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "tree-right" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M24 12v32M24 19c0 4 3 6 7 6h7M24 29c0 4 3 6 7 6h7M24 39c0 4 3 6 7 6h7",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      }), jsx("path", {
        d: "M47\x2025h13M47\x2035h13M47\x2045h13",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34
      }), jsx("circle", {
        cx: "24",
        cy: "12",
        r: "3",
        fill: "currentColor"
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "tree-left" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M56 12v32M56 19c0 4-3 6-7 6h-7M56 29c0 4-3 6-7 6h-7M56 39c0 4-3 6-7 6h-7",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      }), jsx("path", {
        d: "M20 25h13M20 35h13M20 45h13",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34
      }), jsx("circle", {
        cx: "56",
        cy: "12",
        r: "3",
        fill: "currentColor"
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "tree-alternate" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M42\x2012v32M42\x2020c0\x204-3\x206-7\x206h-7M42\x2030c0\x204\x203\x206\x207\x206h7M42\x2039c0\x204-3\x206-7\x206h-7",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      }), jsx("path", {
        d: "M12\x2026h11M58\x2036h11M12\x2045h11",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34
      }), jsx("circle", {
        cx: "42",
        cy: "12",
        r: "3",
        fill: "currentColor"
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "timeline-horizontal" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M15 31h50M35 31V18c0-4 3-7 8-7h9M35 31v13c0 4 3 7 8 7h9",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      }), jsx("path", {
        d: "M56 11h11M56 51h11",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34
      }), jsx("circle", {
        cx: "17",
        cy: "31",
        r: "3",
        fill: "currentColor"
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "timeline-vertical" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M40 9v40M40 20c8 0 11 4 11 11v8M40 35c-8 0-11 4-11 11v4",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      }), jsx("path", {
        d: "M56 39h11M13 50h11",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34
      }), jsx("circle", {
        cx: "40",
        cy: "9",
        r: "3",
        fill: "currentColor"
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "branch-curve" && jsx(Fragment, {
      children: jsx("path", {
        d: "M16\x2028c16\x200\x2025-13\x2043-13M16\x2028c16\x200\x2025\x2013\x2043\x2013",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      })
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "branch-rounded-orthogonal" && jsx(Fragment, {
      children: jsx("path", {
        d: "M16\x2029h18c7\x200\x2010-5\x2010-12v-3M34\x2029h10c7\x200\x2010\x205\x2010\x2012v3",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      })
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 === "branch-orthogonal" && jsx(Fragment, {
      children: jsx("path", {
        d: "M17 33h21M38 17v30M38 17h24",
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
      })
    })]
  });
}
function Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960.textStyle,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963 = documentTextStyleToBoardShapeTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37 = {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.color === undefined ? null : {
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.color
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.fontFamily === undefined ? null : {
        fontFamily: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.fontFamily
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.fontSize === undefined ? null : {
        fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.fontSize
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.bold === undefined ? null : {
        bold: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.bold
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.italic === undefined ? null : {
        italic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.italic
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.underline === undefined ? null : {
        underline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.underline
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.strikethrough === undefined ? null : {
        strikethrough: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.strikethrough
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.textFill === undefined ? null : {
        textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.textFill
      })
    };
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960.horizontalAlign !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37.horizontalAlign = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960.horizontalAlign), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960.verticalAlign !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37.verticalAlign = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960.verticalAlign), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37).length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961({
    textStyle: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37
  });
}
function zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968 ?? {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971 = buildShapeTextDataUpdate(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971.shapeText ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39.shapeText ?? {};
  return {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971,
    shapeText: {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.color === undefined ? null : {
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.color
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.fontSize === undefined ? null : {
        fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.fontSize
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.bold === undefined ? null : {
        bold: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.bold
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.italic === undefined ? null : {
        italic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.italic
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.underline === undefined ? null : {
        underline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.underline
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.strikethrough === undefined ? null : {
        strikethrough: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.strikethrough
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.horizontalAlign === undefined ? null : {
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.horizontalAlign
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.verticalAlign === undefined ? null : {
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.verticalAlign
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.textFill === undefined ? null : {
        textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.textFill
      })
    }
  };
}
function Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976.stroke;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977({
    lineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.dashType === ShapeLineDashEnum.RoundDot || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.dashType === ShapeLineDashEnum.SquareDot ? "dot" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.dashType === ShapeLineDashEnum.Dash ? "dash" : "solid",
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.width == "number" ? {
      strokeWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.width
    } : null),
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.color == "string" ? {
      stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.color
    } : null),
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.opacity == "number" ? {
      opacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.opacity
    } : null)
  });
}
function Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982[0] <= 2 ? ShapeLineDashEnum.RoundDot : ShapeLineDashEnum.Dash : ShapeLineDashEnum.Solid;
}
function Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984) {
  return {
    stroke: {
      lineStrokeType: ShapeLineTypeEnum.SolidLine,
      dashType: Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984.dash),
      color: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984.stroke) ?? SHAPE_FLOATING_TOOLBAR_DEFAULT_STROKE_COLOR,
      width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984.strokeWidth) ?? xn.defaultValue,
      opacity: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984.opacity) ?? Sn.defaultValue / 100
    }
  };
}
function Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991 = useDependency(IShortcutService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993 = useDependency(UndoRedoGroupService),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995] = useState(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461997] = useState((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461987 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986.popup["extraProps"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461987.shapeData),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986.popup["extraProps"];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998) return null;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43 = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.subUnitId
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990.executeCommand(UpdateMindMapNodeOperation.id, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.elementId,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105) => {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105 ?? {};
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461997(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 => ({
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 ?? {}),
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16
      })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999({
        ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.fill === undefined ? null : {
          fill: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.fill
        }),
        ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.stroke === undefined ? null : {
          stroke: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.stroke
        })
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990.executeCommand(UpdateMindMapIncomingConnectorOperation.id, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.elementId,
        style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002 = Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.incomingConnectorStyle),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461110 => Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461110),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111 => {
      On(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111);
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996.shapeText) ?? {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005 = Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113 => {
      Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461997(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.textStyle)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266);
      });
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27 = [{
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.alignLeft"),
      value: HorizontalAlign.LEFT,
      icon: jsx(LeftJustifyingIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.alignCenter"),
      value: HorizontalAlign.CENTER,
      icon: jsx(HorizontallyIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.alignRight"),
      value: HorizontalAlign.RIGHT,
      icon: jsx(RightJustifyingIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.alignJustify"),
      value: HorizontalAlign.JUSTIFIED,
      icon: jsx(AlignTextBothIcon, {})
    }],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28 = [{
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.alignTop"),
      value: VerticalAlign.TOP,
      icon: jsx(AlignTopIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.alignMiddle"),
      value: VerticalAlign.MIDDLE,
      icon: jsx(VerticalCenterIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.alignBottom"),
      value: VerticalAlign.BOTTOM,
      icon: jsx(AlignBottomIcon, {})
    }],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004("add-sibling-or-child");
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004("add-child");
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004("copy");
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004("paste");
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004("delete");
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.structureKind) ?? MIND_MAP_DEFAULT_LAYOUT.structureKind,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013 = resolveMindMapBranchLineTypeForStructure(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989.branchLineType) ?? MIND_MAP_DEFAULT_LAYOUT.branchLineType),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116 = resolveMindMapBranchLineTypeForStructure(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013);
      Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.createRunner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.unitId), {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43,
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.scopeId,
        structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013 ? null : {
          branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116
        })
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995(null);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119 => {
      Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.createRunner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.unitId), {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43,
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.scopeId,
        branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995(null);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124 = false) => jsx("button", {
      type: "button",
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.labelKey),
      disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124,
      className: clsx("univer-flex univer-h-12 univer-min-w-0 univer-items-center univer-justify-center univer-rounded-lg univer-border-0 univer-bg-transparent univer-p-0 univer-text-gray-900 univer-outline-none univer-transition-colors hover:univer-bg-gray-0", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 && "univer-bg-[#e8eefc] univer-text-[#2f6fed] hover:univer-bg-[#e8eefc]", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124 && "univer-cursor-not-allowed\x20univer-text-gray-300\x20hover:univer-bg-transparent"),
      onMouseDown: An,
      onPointerDown: An,
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.stopPropagation(), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123();
      },
      children: jsx(Ln, {
        icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.icon
      })
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.value),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017 = () => jsxs("div", {
      className: "univer-w-[202px] univer-rounded-xl univer-border univer-border-gray-200 univer-bg-gray-0 univer-px-4 univer-py-4 univer-shadow-lg",
      onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.stopPropagation(),
      onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.stopPropagation(),
      children: [Tn.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 => jsxs("div", {
        className: "univer-mb-4",
        children: [jsx("div", {
          className: "univer-mb-2\x20univer-text-lg\x20univer-text-gray-900",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.title
        }), jsx("div", {
          className: "univer-grid univer-h-14 univer-overflow-hidden univer-rounded-xl univer-bg-gray-100 univer-p-1",
          style: {
            gridTemplateColumns: "repeat(" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.items["length"] + ", minmax(0, 1fr))"
          },
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.items["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012, () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.value)))
        })]
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.key)), jsx(Separator, {}), jsxs("div", {
        className: "univer-mb-0",
        children: [jsx("div", {
          className: "univer-mb-2 univer-text-lg univer-text-gray-900",
          children: En.title
        }), jsx("div", {
          className: "univer-grid\x20univer-h-14\x20univer-overflow-hidden\x20univer-rounded-xl\x20univer-bg-gray-100\x20univer-p-1",
          style: {
            gridTemplateColumns: "repeat(" + En.items["length"] + ", minmax(0, 1fr))"
          },
          children: En.items["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013, () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.value === "curve" && !isMindMapPlainStructureKind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012)))
        })]
      })]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125 => {
      switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125) {
        case "line":
          return jsx(ShapeStrokePanelContent, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.panel.line"),
            shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002,
            modeOptions: ["solid", "dash", "dot"],
            showDashDropdown: false,
            widthRange: {
              min: xn.min,
              max: xn.max,
              step: 1
            },
            onUpdateShapeData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102) => {
              Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001);
            }
          });
        case "more":
          return jsx(ShapeFloatingToolbarMenuPanel, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.panel.more"),
            minWidthClassName: "univer-min-w-[240px]",
            children: jsxs("div", {
              className: "univer-flex univer-flex-col univer-gap-1",
              children: [jsx(ShapeFloatingToolbarMenuItem, {
                label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.action.addSibling"),
                shortcut: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003(wn.addSibling),
                onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007
              }), jsx(ShapeFloatingToolbarMenuItem, {
                label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.action.addChild"),
                shortcut: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003(wn.addChild),
                onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008
              }), jsx(Separator, {}), jsx(ShapeFloatingToolbarMenuItem, {
                label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.action.copy"),
                shortcut: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003(wn.copy),
                onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009
              }), jsx(ShapeFloatingToolbarMenuItem, {
                label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.action.paste"),
                shortcut: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003(wn.paste),
                onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010
              }), jsx(ShapeFloatingToolbarMenuItem, {
                label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.action.delete"),
                shortcut: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003(wn.delete),
                onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011
              })]
            })
          });
        default:
          return null;
      }
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = Cn.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127 => {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = [];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.dividerBefore && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.push(jsx(Separator, {
        orientation: "vertical"
      }, "divider-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.kind)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.kind === "typography") return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.push(jsx(TypographyPanelButton, {
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.panel.typography"),
        fontFamily: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.fontFamily,
        textStyle: {
          isBold: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44.bold === true,
          isItalic: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44.italic === true,
          isUnderline: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44.underline === true,
          isStrike: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44.strikethrough === true
        },
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.horizontalAlign,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.verticalAlign,
        horizontalAlignOptions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27,
        verticalAlignOptions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28,
        onUpdateText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.kind)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.kind === "fontColor") {
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
          fs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.fontSize,
          cl: {
            rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.color
          },
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.textFill === undefined ? null : {
            textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.textFill
          })
        };
        return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.push(jsx(TextFillButton, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.action.fontColor"),
          textStyle: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1,
          fallbackColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.color,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006({
            textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105
          })
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.kind)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.push(jsx(ShapeFloatingToolbarFontSizeSelect, {
          value: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.fontSize),
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006({
              textStyle: {
                fs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106
              }
            });
          }
        }, "mind-map-font-size")), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15;
      }
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.push(jsx(Dropdown, {
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.panel,
        overlay: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.panel),
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.panel : null),
        children: jsx("span", {
          children: jsx(ShapeFloatingToolbarDropdownTrigger, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.titleKey),
            active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.panel,
            icon: jn(kn[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.panel]),
            sizeClassName: "univer-h-7 univer-min-w-9 univer-w-auto univer-gap-1 univer-px-1.5",
            onMouseDown: An,
            onPointerDown: An
          })
        })
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.panel)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15;
    });
  return jsxs(ShapeFloatingToolbarContent, {
    maxWidthClassName: "univer-max-w-[min(760px,calc(100vw-32px))]",
    onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129.stopPropagation(),
    children: [[...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.isRootNode ? [jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994 === "layout",
      overlay: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017(),
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130 ? "layout" : null),
      children: jsx("span", {
        children: jsx(ShapeFloatingToolbarDropdownTrigger, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.action.layout"),
          active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994 === "layout",
          icon: jsx(In, {}),
          sizeClassName: "univer-h-7 univer-min-w-9 univer-w-auto univer-gap-1 univer-px-1.5",
          onMouseDown: An,
          onPointerDown: An
        })
      })
    }, "mind-map-layout-dropdown"), jsx(Separator, {
      orientation: "vertical"
    }, "layout-panel-divider")] : []), jsx(ShapeFillButton, {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.action.fill"),
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996 ?? {},
      onUpdateShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000
    }, "mind-map-fill"), jsx(ShapeStrokePanelButton, {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.t("boards-mind-ui.toolbar.action.stroke"),
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996 ?? {},
      onUpdateShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000
    }, "mind-map-stroke"), jsx(Separator, {
      orientation: "vertical"
    }, "style-divider")], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29]
  });
}
const Q = {
  radius: 18,
  addChildRadius: 14,
  siblingHoverRadius: 10,
  siblingDotRadius: 5,
  siblingDotGap: 3,
  gap: 10,
  collapsePlusMinDistance: 44,
  primaryColor: J.primaryColor,
  surfaceColor: J.surfaceColor,
  borderWidth: 2,
  glyphSize: 8,
  addChildGlyphSize: 6,
  siblingGlyphSize: 5.5,
  glyphWidth: 2.4,
  glyphHoverWidth: 3,
  badgeFontWeight: 600,
  badgeFontSize: 18,
  fontFamily: J.fontFamily
};
function ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109 = Q.radius,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110 = Q.addChildRadius,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111 = Q.siblingHoverRadius,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112 = Q.gap,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113 = Q.siblingDotRadius,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113 + Q.siblingDotGap,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 = Q.collapsePlusMinDistance,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["height"] / 2,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["width"] / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D128 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["left"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB118 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["width"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["top"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB119 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["height"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["left"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["width"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["top"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["height"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33 = [],
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "top" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "bottom",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "left" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D128 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB118,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "top" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D129 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB119 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.hasChildren && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.collapsedDescendantCount > 0) return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
    kind: "toggle-collapse",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116,
    radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109,
    badgeCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.collapsedDescendantCount
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.isRoot ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.rootChildSides ?? (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 ? ["top", "bottom"] : ["left", "right"])).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 === "top" ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
      kind: "add-child-top",
      x: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117,
      y: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D131,
      radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 === "bottom" ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
      kind: "add-child-bottom",
      x: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117,
      y: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB121,
      radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 === "left" ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
      kind: "add-child-left",
      x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D130,
      y: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116,
      radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110
    }) : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
      kind: "add-child-right",
      x: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB120,
      y: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116,
      radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110
    });
  }) : (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "left" ? "add-child-left" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "top" ? "add-child-top" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "bottom" ? "add-child-bottom" : "add-child-right",
    x: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "left" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D130 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB120,
    y: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "top" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D131 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB121 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116,
    radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110
  }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 ? (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
    kind: "add-sibling-before",
    placement: "before",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["left"] - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB115,
    y: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116,
    radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111,
    visualRadius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
    kind: "add-sibling-after",
    placement: "after",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["width"] + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB115,
    y: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116,
    radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111,
    visualRadius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113
  })) : (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
    kind: "add-sibling-before",
    placement: "before",
    x: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["top"] - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB115,
    radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111,
    visualRadius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
    kind: "add-sibling-after",
    placement: "after",
    x: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.bounds["height"] + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB115,
    radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111,
    visualRadius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113
  }))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.hasChildren) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
      kind: "toggle-collapse",
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116,
      radius: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109
    };
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322.kind === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "left" ? "add-child-left" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "top" ? "add-child-top" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "bottom" ? "add-child-bottom" : "add-child-right"));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431 && Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.x - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.y - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.y) < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "top" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "bottom" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.y = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.y + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "top" ? -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.x = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.x + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.side === "left" ? -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114));
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33;
}
const dr = "board-mind-map-node-controls-object",
  fr = BOARD_RENDER_LAYER_INDEX.connectorAffordance;
function pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.kind === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127.kind && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.x === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127.x && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.y === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127.y;
}
var mr = class extends BaseObject {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432 = dr, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432), G(this, "_state", {
      controls: []
    }), this.evented = true, this.zIndex = BOARD_RENDER_OBJECT_Z_INDEX.transientControl, this.updateState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433);
  }
  updateState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436) {
    this._state = {
      ...this._state,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436
    }, this._state["controls"].length > 0 ? this.show() : this.hide(), this.makeDirty(true);
  }
  setHoveredControl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438) {
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438 && !this._state["hoveredControl"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438 && pr(this._state["hoveredControl"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438) || (this._state = {
      ...this._state,
      hoveredControl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438
    }, this.makeDirty(true));
  }
  getHitControl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461440) {
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = this._state["controls"].length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 >= 0; --var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121 = this._state["controls"][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21];
      if (Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461440.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461440.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.y) <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.radius) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121;
    }
    return null;
  }
  isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442) {
    return !!this.getHitControl({
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442.x,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442.y
    });
  }
  render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445) {
    return !this.visible || this._state["controls"].length === 0 ? (this.makeDirty(false), this) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.save(), this._state["controls"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 = pr(this._state["hoveredControl"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.badgeCount !== undefined,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.kind === "add-child-left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.kind === "add-child-right" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.kind === "add-child-top" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.kind === "add-child-bottom",
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.kind === "add-sibling-before" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.kind === "add-sibling-after",
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.visualRadius ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.radius : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.radius;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.kind === "toggle-collapse" ? Q.surfaceColor : Q.primaryColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.strokeStyle = Q.primaryColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.lineWidth = Q.borderWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.arc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, 0, Math.PI * 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.fill(), (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.stroke(), !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 && (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324)) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.kind === "toggle-collapse" ? Q.primaryColor : Q.surfaceColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.lineWidth = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 ? Q.glyphWidth : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 ? Q.glyphHoverWidth : Q.glyphWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.lineCap = "round", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.kind === "toggle-collapse") {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = Q.glyphSize;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.y), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680);
        } else {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 ? Q.siblingGlyphSize : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? Q.addChildGlyphSize : Q.glyphSize;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.y), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.y), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681);
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.stroke();
      }
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.fillStyle = Q.primaryColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.font = Q.badgeFontWeight + "\x20" + Q.badgeFontSize + "px " + Q.fontFamily, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.textAlign = "center", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.textBaseline = "middle", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.fillText(String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.badgeCount), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.y));
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.restore(), this.makeDirty(false), this);
  }
};
function hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130 === "tree-left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130 === "tree-right" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130 === "tree-alternate";
}
function gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132 === "timeline-horizontal" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132 === "timeline-vertical";
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.zoomRatio) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.zoomRatio > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.zoomRatio : 1;
  return {
    x: Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462134.offsetX - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.panOffset["x"]) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136),
    y: Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462134.offsetY - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.panOffset["y"]) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136)
  };
}
let vr = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449, this._elementStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450, this._stateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452, this._boardTextEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454, this._previewRefreshService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455, this._undoRedoGroupService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456, G(this, "_object", null), G(this, "_objectEventDisposables", null), G(this, "_activeNodeId", null), G(this, "_activeScopeId", null), this._init();
  }
  _init() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468;
    let {
        scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469
      } = this._renderContext,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469.getTransformerByCreate) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470 && (this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470.changing$["pipe"](takeUntil(this.dispose$)).subscribe(({
      objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329
    }) => {
      this._syncControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329, {
        hideRootControls: true
      });
    }))), this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470.changeEnd$["pipe"](takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.objects;
      this._syncControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332), setTimeout(() => this._syncControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332), 0);
    })))), this.disposeWithMe(toDisposable(this._elementStateService["state$"].pipe(takeUntil(this.dispose$)).subscribe(() => this._syncControls()))), this.disposeWithMe(toDisposable(this._stateService["state$"].pipe(takeUntil(this.dispose$)).subscribe(() => this._syncControls()))), this.disposeWithMe(toDisposable(this._boardElementService["elementUpdate$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = this._elementStateService["getSnapshot"]().context;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.subUnitId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.elementId === this._activeNodeId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.elementId === this._activeScopeId)) && this._syncControls();
    }))), this.disposeWithMe(toDisposable(this._previewRefreshService["refresh$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 = this._elementStateService["getSnapshot"]().context;
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.unitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.subUnitId || this._activeScopeId && this._activeScopeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.scopeId || this._syncControls();
    }))), this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469.onPointerMove$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 => this._handlePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343)))), this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469.onPointerDown$["subscribeEvent"]({
      priority: 4,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345]) => {
        this._handlePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344) && this._consumeControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345);
      }
    }))), this.disposeWithMe(toDisposable(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469.onPointerUp$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467.subscribeEvent({
      priority: 4,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349]) => {
        this._isControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348) && this._consumeControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349);
      }
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe(toDisposable(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469.onDblclick$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468.subscribeEvent({
      priority: 4,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353]) => {
        this._isControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352) && this._consumeControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353);
      }
    })) ?? {
      dispose: () => {}
    })), this.disposeWithMe(toDisposable(() => this._removeObject())), this._syncControls();
  }
  _ensureObject() {
    return this._object ? this._object : (this._object = new mr(dr), this._attachObjectEvents(this._object), this._renderContext["scene"].addObject(this._object, fr), this._object);
  }
  _attachObjectEvents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477 = this._objectEventDisposables) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477.dispose();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478 = new DisposableCollection();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.onPointerDown$["subscribeEvent"]({
      priority: 4,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357]) => {
        this._handlePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356) && this._consumeControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357);
      }
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.onPointerUp$["subscribeEvent"]({
      priority: 4,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361]) => {
        this._isControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360) && this._consumeControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361);
      }
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.onDblclick$["subscribeEvent"]({
      priority: 4,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365]) => {
        this._isControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364) && this._consumeControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365);
      }
    })), this._objectEventDisposables = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478;
  }
  _removeObject() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482;
    this._object && (this._renderContext["scene"].removeObjects([this._object]), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482 = this._objectEventDisposables) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482.dispose(), this._objectEventDisposables = null, this._object = null, this._activeNodeId = null, this._activeScopeId = null, this._renderContext["scene"].makeDirty(true));
  }
  _syncControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487;
    if (this._stateService["getState"]().interactionMode === "viewing") {
      this._removeObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488 = this._elementStateService["getSnapshot"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.focusedId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.selectedIds[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.selectedIds["length"] !== 1) {
      this._removeObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.subUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.element);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493) {
      this._removeObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494 = getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485.hideRootControls && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.parentNodeId == null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494)) {
      this._removeObject();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495 = this._resolveControlBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495) {
      this._removeObject();
      return;
    }
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.element)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.parentNodeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490;
      }),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D98 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.collapsed ? this._countDescendants(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490) : 0;
    this._activeNodeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490, this._activeScopeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.structureScopeId;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.structureScopeId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497 = getMindMapContainerMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.custom) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487.mindmap) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487.structureKind,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.layout["structureKind"]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.parentNodeId == null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 = this._resolveControlSide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.side, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499);
    this._ensureObject().updateState({
      controls: ur({
        bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495,
        isRoot: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23,
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500,
        rootChildSides: this._resolveRootChildControlSides(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499),
        hasChildren: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.length > 0,
        collapsedDescendantCount: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D98
      })
    }), this._renderContext["scene"].makeDirty(true);
  }
  _resolveControlSide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520 === "timeline-vertical" ? !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 === "left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 === "right") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 : "bottom" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520 === "mindmap-vertical" ? !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 === "top" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 === "bottom") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 : "bottom" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 === "left" ? "left" : "right";
  }
  _resolveRootChildControlSides(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524) {
      if (hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525)) return ["bottom"];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525 === "timeline-horizontal") return ["right"];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525 === "timeline-vertical") return ["bottom"];
    }
  }
  _resolveCreateChildSide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531 = this._elementStateService["getSnapshot"]().context;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531 || !this._activeNodeId) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531.subUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533 = getMindMapNodeMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532[this._activeNodeId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529.element),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533 ? getMindMapContainerMeta((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533.structureScopeId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530.element) : null;
    if (!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533.parentNodeId) == null && (hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534.layout["structureKind"]) || gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534.layout["structureKind"])))) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 === "add-child-left" ? "left" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 === "add-child-top" ? "top" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 === "add-child-bottom" ? "bottom" : "right";
  }
  _resolveControlBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548 = getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550 = this._toFiniteBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551.getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548)) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551.getObject) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548));
    return this._toFiniteBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552) || resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544);
  }
  _toFiniteBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564 && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.left) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.top) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.width) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.height) ? {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.height
    } : null;
  }
  _countDescendants(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567) {
    return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.element)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373.parentNodeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567;
    }).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 + 1 + this._countDescendants(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.elementId), 0);
  }
  _handlePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461570) {
    if (!this._object) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461571 = this._stateService["getState"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572 = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461570, {
        panOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461571.viewportPanOffset,
        zoomRatio: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461571.zoomRatio
      });
    this._object["setHoveredControl"](this._object["getHitControl"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572));
  }
  _handlePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576) {
    if (!this._object || !this._activeNodeId || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576.button ?? 0) !== 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577 = this._elementStateService["getSnapshot"]().context;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578 = this._stateService["getState"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576, {
        panOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.viewportPanOffset,
        zoomRatio: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.zoomRatio
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580 = this._object["getHitControl"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.kind === "toggle-collapse") return this._executeAndLayout(ToggleMindMapNodeCollapseOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.subUnitId,
      nodeId: this._activeNodeId
    }), true;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.kind === "add-child-left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.kind === "add-child-right" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.kind === "add-child-top" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.kind === "add-child-bottom") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 = generateRandomId(6);
      return this._executeCreateAndEdit(AddMindMapChildOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.subUnitId,
        parentNodeId: this._activeNodeId,
        side: this._resolveCreateChildSide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.kind),
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378,
        connectorId: generateRandomId(6),
        text: this._localeService["t"]("boards-mind-ui.panel.addText")
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378), true;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.kind === "add-sibling-before" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.kind === "add-sibling-after") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = generateRandomId(6);
      return this._executeCreateAndEdit(AddMindMapSiblingOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.subUnitId,
        nodeId: this._activeNodeId,
        placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.placement ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.kind === "add-sibling-before" ? "before" : "after"),
        siblingNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379,
        connectorId: generateRandomId(6),
        text: this._localeService["t"]("boards-mind-ui.panel.addText")
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379), true;
    }
    return true;
  }
  _isControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586) {
    if (!this._object || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586.button ?? 0) !== 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587 = this._stateService["getState"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461588 = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586, {
        panOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587.viewportPanOffset,
        zoomRatio: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587.zoomRatio
      });
    return !!this._object["getHitControl"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461588);
  }
  _consumeControlEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593.stopPropagation(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592);
  }
  _executeAndLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602 = this._activeScopeId;
    this._undoRedoGroupService["run"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601.unitId, () => {
      !this._commandService["syncExecuteCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602 || (this._commandService["syncExecuteCommand"](LayoutMindMapOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601.subUnitId,
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602
      }), this._syncControls());
    });
  }
  _executeCreateAndEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607.subUnitId
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609 = this._commandService["executeCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607);
    Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 && (this._syncControls(), this._elementStateService["selectElements"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608), this._boardTextEditingService["ignoreExternalFocusChanges"](), this._boardTextEditingService["setEditing"]({
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608,
        shapeKey: getBoardElementRenderObjectKey(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608),
        visible: true
      }));
    });
  }
};
const Cr = ["structure", "layout", "importExport"];
const wr = [{
    labelKey: "boards-mind-ui.panel.spacing.parentGap",
    key: "horizontalGap",
    ...MIND_MAP_LAYOUT_SPACING_LIMITS.horizontalGap
  }, {
    labelKey: "boards-mind-ui.panel.spacing.siblingGap",
    key: "siblingGap",
    ...MIND_MAP_LAYOUT_SPACING_LIMITS.siblingGap
  }, {
    labelKey: "boards-mind-ui.panel.spacing.branchGap",
    key: "branchGap",
    ...MIND_MAP_LAYOUT_SPACING_LIMITS.branchGap
  }],
  Tr = [{
    labelKey: "boards-mind-ui.panel.layout.right",
    value: "right"
  }, {
    labelKey: "boards-mind-ui.panel.layout.left",
    value: "left"
  }, {
    labelKey: "boards-mind-ui.panel.layout.both",
    value: "both"
  }],
  Er = [{
    labelKey: "boards-mind-ui.panel.structureKind.mindmapHorizontal",
    value: "mindmap-horizontal"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.mindmapVertical",
    value: "mindmap-vertical"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.treeRight",
    value: "tree-right"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.treeLeft",
    value: "tree-left"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.treeAlternate",
    value: "tree-alternate"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.timelineHorizontal",
    value: "timeline-horizontal"
  }, {
    labelKey: "boards-mind-ui.panel.structureKind.timelineVertical",
    value: "timeline-vertical"
  }],
  Dr = [{
    labelKey: "boards-mind-ui.panel.branchLineType.curve",
    value: "curve"
  }, {
    labelKey: "boards-mind-ui.panel.branchLineType.roundedOrthogonal",
    value: "rounded-orthogonal"
  }, {
    labelKey: "boards-mind-ui.panel.branchLineType.orthogonal",
    value: "orthogonal"
  }];
function Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462139 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.structureKind) ?? MIND_MAP_DEFAULT_LAYOUT.structureKind;
  return {
    spacing: {
      horizontalGap: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.horizontalGap) ?? MIND_MAP_DEFAULT_LAYOUT.horizontalGap,
      siblingGap: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.siblingGap) ?? MIND_MAP_DEFAULT_LAYOUT.siblingGap,
      branchGap: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.branchGap) ?? MIND_MAP_DEFAULT_LAYOUT.branchGap
    },
    direction: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.direction) ?? MIND_MAP_DEFAULT_LAYOUT.direction,
    structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462139,
    branchLineType: resolveMindMapBranchLineTypeForStructure(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.branchLineType)
  };
}
async function kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143) {
  return (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.executeCommand(ChangeMindMapLayoutOperation.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143))) ? (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.executeCommand(LayoutMindMapOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143.subUnitId,
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143.scopeId
  })), true) : false;
}
async function Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147) {
  return (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.executeCommand(ChangeMindMapBranchLineTypeOperation.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147))) ? (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.executeCommand(LayoutMindMapOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.subUnitId,
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.scopeId
  })), true) : false;
}
async function jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151) {
  return (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150.executeCommand(ChangeMindMapLayoutOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.subUnitId,
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.scopeId,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.horizontalGap === undefined ? {} : {
      horizontalGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.horizontalGap
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.siblingGap === undefined ? {} : {
      siblingGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.siblingGap
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.branchGap === undefined ? {} : {
      branchGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.branchGap
    })
  }))) ? (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150.executeCommand(LayoutMindMapOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.subUnitId,
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.scopeId
  })), true) : false;
}
async function Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.nodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.targetNodeId || !(await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.executeCommand(ReparentMindMapNodeOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.subUnitId,
    nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.nodeId,
    targetNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.targetNodeId,
    referenceNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.targetNodeId,
    placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.placement
  }))) ? false : (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.executeCommand(LayoutMindMapOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.subUnitId,
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.scopeId
  })), true);
}
async function Nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159.text["trim"]();
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160 || !(await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.executeCommand(UpdateMindMapNodeOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159.subUnitId,
    nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159.nodeId,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160
  }))) ? false : (await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.executeCommand(LayoutMindMapOperation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159.subUnitId,
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159.scopeId
  })), true);
}
async function Pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165 = globalThis.navigator) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165.clipboard;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166.writeText ? (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166.writeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164), true) : false;
}
async function Fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172 = Pr) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173 = await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.executeCommand(ExportMindMapOpmlOperation.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462171));
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173 != "string" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173) return false;
  try {
    return (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173)) !== false;
  } catch {
    return false;
  }
}
async function Ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179.opml["trim"]()) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180 = await Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.executeCommand(ImportMindMapOpmlOperation.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179));
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180.success === true;
}
function Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185.trim().toLowerCase();
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB129 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640.text["toLowerCase"]().includes(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB129)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184;
}
function Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188) {
  return {
    paddingInlineStart: 8 + (Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188 : 0) * 16
  };
}
function zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462190) {
  return jsxs("section", {
    className: clsx("univer-border-b\x20univer-border-gray-200\x20univer-p-4", borderClassName),
    "data-board-mind-map-panel-section": "true",
    children: [jsx("h3", {
      className: "univer-mb-3 univer-text-sm univer-font-semibold univer-text-gray-900 dark:!univer-text-gray-100",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462190.title
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462190.children]
  });
}
function Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462193 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 = useDependency(IBoardElementStateService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195 = useDependency(LocaleService),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.outlineItems ?? [],
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197] = useState(""),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199] = useState(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201] = useState(""),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202 = Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.layout),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202.spacing),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462206] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202.direction),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462208] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202.structureKind),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202.branchLineType),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212] = useState({
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.layout,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.scopeId
    }),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214] = useState(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216] = useState("structure"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217 = Lr(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47 = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.subUnitId,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.scopeId
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36 = Cr.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641 => ({
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.tab." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641),
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641
    })),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37 = Dr.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642.value !== "curve" || isMindMapPlainStructureKind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462207)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462206(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643), kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462193, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47,
        direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643
      });
    };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.layout !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.layout || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.scopeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.scopeId) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645 = Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.layout);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212({
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.layout,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.scopeId
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645.spacing), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462206(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645.direction), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462208(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645.structureKind), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645.branchLineType);
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647 = resolveMindMapBranchLineTypeForStructure(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462209);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462208(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647), kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462193, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47,
        structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462209 ? null : {
          branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647
        })
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462220 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651 = resolveMindMapBranchLineTypeForStructure(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651), Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462193, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47,
        branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462221 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655) => {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203,
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655
      };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25), jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462193, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47,
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222 = () => {
      Ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462193, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.subUnitId,
        left: 120,
        top: 120,
        opml: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200
      }).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201("");
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223 = () => {
      Fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462193, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199({
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198 && Nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462193, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198.nodeId,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198.text
      }).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199(null);
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462226 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.preventDefault(), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.currentTarget["getBoundingClientRect"](),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.clientY < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.height / 2 ? "before" : "after";
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214(null), Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462193, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213,
        targetNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663,
        placement: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB101
      });
    };
  return jsxs("div", {
    className: "univer-size-full\x20univer-bg-gray-0\x20univer-text-sm\x20univer-text-gray-700\x20dark:!univer-bg-gray-900\x20dark:!univer-text-gray-200",
    "data-board-mind-map-panel": "true",
    children: [jsx("div", {
      className: clsx("univer-border-b univer-border-gray-200 univer-p-3", borderClassName),
      "data-board-mind-map-panel-tabs": "true",
      children: jsx(Segmented, {
        className: "univer-w-full univer-text-xs",
        items: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36,
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668)
      })
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215 === "structure" && jsx(zr, {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.tab.structure"),
      children: jsxs("div", {
        children: [jsx(Input, {
          slot: jsx(SearchIcon, {}),
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196,
          placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.searchNodes"),
          className: "univer-mb-3 univer-w-full",
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217.length ? jsx("ol", {
          className: "univer-space-y-1",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669 => jsx("li", {
            draggable: true,
            className: "univer-flex univer-items-center univer-gap-1 univer-truncate univer-rounded univer-py-1 univer-text-left univer-text-gray-800",
            style: Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.depth),
            onDragStart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 => {
              var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.nodeId), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.dataTransfer) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.setData("text/plain", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.nodeId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.dataTransfer && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.dataTransfer["effectAllowed"] = "move");
            },
            onDragOver: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 => {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.dataTransfer && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.dataTransfer["dropEffect"] = "move");
            },
            onDrop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462226(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.nodeId),
            onDragEnd: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214(null),
            children: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198.nodeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.nodeId ? jsxs("div", {
              className: "univer-flex univer-min-w-0 univer-flex-1 univer-items-center univer-gap-1",
              children: [jsx(Input, {
                autoFocus: true,
                size: "small",
                value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198.text,
                onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199({
                  nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.nodeId,
                  text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397
                }),
                onKeyDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398 => {
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398.key === "Enter" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398.key === "Escape" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199(null);
                }
              }), jsx(Button, {
                size: "small",
                variant: "primary",
                disabled: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198.text["trim"](),
                onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225,
                children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.rename")
              }), jsx(Button, {
                size: "small",
                variant: "default",
                onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199(null),
                children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.cancel")
              })]
            }) : jsxs(Fragment, {
              children: [jsx(Button, {
                size: "small",
                variant: "ghost",
                className: "univer-min-w-0 univer-flex-1 univer-justify-start univer-truncate univer-text-left",
                onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.selectElements({
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.unitId,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462192.subUnitId
                }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.nodeId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.nodeId),
                children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.text
              }), jsx(Button, {
                className: "univer-text-xs univer-text-gray-500",
                size: "small",
                variant: "default",
                onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.nodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.text),
                children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.rename")
              })]
            })
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.nodeId))
        }) : jsx("div", {
          className: "univer-text-xs univer-text-gray-400 dark:!univer-text-gray-500",
          "data-board-mind-map-panel-empty-state": "true",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.emptyNodes")
        })]
      })
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215 === "layout" && jsx(zr, {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.tab.layout"),
      children: jsxs("div", {
        className: "univer-space-y-3",
        children: [jsx("div", {
          className: "univer-flex\x20univer-gap-2",
          children: jsx(Segmented, {
            className: "univer-w-full\x20univer-text-xs",
            items: Er.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670 => ({
              label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670.labelKey),
              value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670.value
            })),
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462207,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671)
          })
        }), jsx("div", {
          className: "univer-flex univer-gap-2",
          children: jsx(Segmented, {
            className: "univer-w-full univer-text-xs",
            items: Tr.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672 => ({
              label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.labelKey),
              value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.value
            })),
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462205,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673)
          })
        }), jsx("div", {
          className: "univer-flex\x20univer-gap-2",
          children: jsx(Segmented, {
            className: "univer-w-full univer-text-xs",
            items: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674 => ({
              label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.labelKey),
              value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.value
            })),
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462209,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462220(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675)
          })
        }), jsx("div", {
          className: "univer-space-y-2",
          children: wr.map(({
            labelKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676,
            key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677,
            min: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678,
            max: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679
          }) => jsxs("label", {
            className: "univer-flex univer-items-center univer-gap-2 univer-text-xs univer-text-gray-600",
            children: [jsx("span", {
              className: "univer-w-20 univer-shrink-0",
              children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676)
            }), jsx(InputNumber, {
              min: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678,
              max: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679,
              step: 4,
              value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677],
              precision: 0,
              className: "univer-w-24",
              onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462221(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677, Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678))
            })]
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677))
        })]
      })
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215 === "importExport" && jsx(zr, {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.tab.importExport"),
      children: jsxs("div", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [jsx(Textarea, {
          className: "univer-h-28 univer-resize-none univer-text-xs",
          placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.pasteOPML"),
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200,
          onValueChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201
        }), jsxs("div", {
          className: "univer-flex\x20univer-gap-2",
          children: [jsx(Button, {
            size: "small",
            variant: "primary",
            disabled: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.trim(),
            onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222,
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.importOPML")
          }), jsx(Button, {
            size: "small",
            variant: "default",
            onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223,
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.t("boards-mind-ui.panel.exportOPML")
          })]
        })]
      })
    })]
  });
}
let Vr = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](ln, dn)), this.disposeWithMe(this._componentManager["register"](Dn, Un)), this.disposeWithMe(this._componentManager["register"]("board.mind-map.panel", Br));
  }
};
export { vr, Vr };
