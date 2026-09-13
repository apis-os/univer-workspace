import { DEFAULT_CALLOUT_CONFIG, DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN, DOCS_CALLOUT_BORDER_COLOR_TOKEN, DOCS_CALLOUT_PLUGIN, DocsCalloutCancelEmptyParagraphCommand, DocsCalloutConsumeBoundaryDeleteCommand, DocsCalloutDeleteCommand, DocsCalloutInsertBelowCommand, DocsCalloutInsertCommand, DocsCalloutModel, DocsCalloutResetColorsCommand, DocsCalloutSetTextColorCommand, DocsCalloutUnwrapCommand, DocsCalloutUpdateCommand, RemoveDocsCalloutConfigMutation, SetDocsCalloutConfigMutation, UniverDocsCalloutPlugin, buildCancelEmptyCalloutParagraphActions, isCalloutBoundaryDelete, normalizeDocsCalloutConfig, normalizeDocsCalloutMetadataResource } from "@univerjs-pro/docs-callout";
import { DOC_CONTENT_INSERT_MENU_ID, DOC_PARAGRAPH_T_EDIT_MENU_ID, DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID, DOC_PARAGRAPH_T_INSERT_MENU_ID, DeleteCurrentParagraphCommand, DeleteLeftCommand, DeleteRightCommand, DocAutoFormatService, DocCanvasPopManagerService, EMPTY_PARAGRAPH_MENU_ID, FLOAT_TEXT_STYLE_MENU_ID, FLOAT_TOOLBAR_MENU_POSITION, IDocClipboardPasteAdapterService, IDocClipboardService, INSERT_BELLOW_MENU_ID, UniverDocsUIPlugin, disableMenuWhenHeaderFooterEditing, hideMenuWhenSelectionInBlockRange } from "@univerjs/docs-ui";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, EMOJI_PICKER_COMPONENT, IMenuManagerService, IconManager, MenuItemType, MenuManagerPosition, RibbonInsertGroup, RibbonPosition, ToolbarButton, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { ColorKit, CommandType, DashStyleType, DependentOn, Disposable, DocumentBlockRangeType, ICommandService, IConfigService, IPermissionService, Inject, Injector, LocaleService, Plugin, ThemeService, UniverInstanceType, merge } from "@univerjs/core";
import { combineLatest, map } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DocSkeletonManagerService, UniverDocsPlugin, canEditDocumentTargets, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId } from "@univerjs/docs";
import { CURSOR_TYPE, ComponentExtension, DOCS_EXTENSION_TYPE, Documents, IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { CalloutIcon, LineNoneIcon, PaintIcon, TextIcon } from "@univerjs/icons";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { documentSkeletonLineIterator } from "@univerjs-pro/docs-column";
import { et, tt } from "./docs-callout-ui-docs-callout-uimenu-schema.js";
const it = {};
let U = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117) {
    super(), this._clipboardService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, this._pasteAdapterService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, this._model = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, this.disposeWithMe(this._clipboardService["addClipboardHook"]({
      onCopyDocData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622) => this._appendConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.sourceDocuments)
    })), this.disposeWithMe(this._pasteAdapterService["registerAdapter"]({
      getPasteMutationInfos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => this._getPasteMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623)
    }));
  }
  _appendConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {};
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.blockRanges) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.blockType !== DocumentBlockRangeType.CALLOUT) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = this._model["getCalloutConfig"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.blockId);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.blockId] = normalizeDocsCalloutConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464));
      });
    }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB).length === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121 : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121,
      resources: [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.resources ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.name !== DOCS_CALLOUT_PLUGIN), {
        name: DOCS_CALLOUT_PLUGIN,
        data: JSON.stringify({
          callouts: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB
        })
      }]
    };
  }
  _getPasteMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.doc["resources"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.name === DOCS_CALLOUT_PLUGIN),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 ? at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.data).callouts : {},
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7 = [];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.blockRangeMappings["forEach"](({
      sourceBlockRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630,
      targetBlockRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631
    }) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.blockType !== DocumentBlockRangeType.CALLOUT) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.blockId];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push({
        id: SetDocsCalloutConfigMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.unitId,
          blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.blockId,
          config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7.push({
        id: RemoveDocsCalloutConfigMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.unitId,
          blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.blockId
        }
      }));
    }), {
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6,
      undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7
    };
  }
};
function at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299) {
  try {
    return normalizeDocsCalloutMetadataResource(JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299));
  } catch {
    return {
      callouts: {}
    };
  }
}
const W = "docs-callout-ui.floating-toolbar",
  ot = ["red.500", "orange.400", "green.400", "blue.500", "primary.500", "purple.500", "pink.500"];
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301) {
  let {
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303,
      textColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.popup["extraProps"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 = useDependency(ThemeService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.currentTheme$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.getCurrentTheme(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308]),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315] = useState(false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.getColorFromTheme(DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.getColorFromTheme(DOCS_CALLOUT_BORDER_COLOR_TOKEN),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.backgroundColor || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.borderColor || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316, ...ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308)],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21 = ot.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.getColorFromTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.executeCommand(DocsCalloutUpdateCommand.id, {
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
        config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132
      })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133;
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 = async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.executeCommand(DocsCalloutSetTextColorCommand.id, {
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305,
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 ?? undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137;
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 = async () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.executeCommand(DocsCalloutResetColorsCommand.id, {
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637,
        backgroundColor: "",
        borderColor: "",
        borderOpacity: DEFAULT_CALLOUT_CONFIG.borderOpacity,
        borderStyle: DEFAULT_CALLOUT_CONFIG.borderStyle,
        borderWidth: DEFAULT_CALLOUT_CONFIG.borderWidth
      })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313(undefined)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140;
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.t("docs-callout-ui.menu.callout"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.t("docs-callout-ui.toolbar.backgroundColor"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.t("docs-callout-ui.toolbar.border"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.t("docs-callout-ui.toolbar.textColor"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.t("docs-callout-ui.toolbar.convertToParagraph"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.t("docs-callout-ui.toolbar.resetColor"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.stopPropagation();
  return jsxs("div", {
    "data-u-comp": W,
    role: "toolbar",
    className: "univer-relative univer-flex univer-items-center univer-gap-1 univer-rounded-md univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
    children: [jsx(ToolbarButton, {
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314,
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323,
      onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638),
      children: jsx(PaintIcon, {
        className: "univer-text-xl"
      })
    }), jsx(ToolbarButton, {
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327,
      onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.executeCommand(DocsCalloutUnwrapCommand.id, {
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305
      }),
      children: jsx(TextIcon, {})
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 ? jsx("div", {
      "data-u-comp": "docs-callout-color-panel",
      className: "univer-absolute univer-left-1 univer-top-full univer-z-10 univer-w-[296px] univer-rounded-lg univer-bg-gray-0 univer-p-3 univer-shadow-lg dark:!univer-bg-gray-900",
      onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
      onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
      children: jsxs("div", {
        className: "univer-flex univer-flex-col univer-gap-4",
        children: [jsxs(G, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326,
          children: [jsx(K, {
            label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
            selected: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 == null,
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321(null)
          }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 => jsx(K, {
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143,
            label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326,
            selected: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 != null && q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143),
            variant: "text",
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143)
          }, "text-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143))]
        }), jsxs(G, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325,
          children: [jsx(K, {
            label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.t("docs-callout-ui.toolbar.borderNone"),
            selected: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.borderWidth === 0,
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320({
              borderWidth: 0
            })
          }), jsx(K, {
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317,
            label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325,
            selected: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.borderWidth > 0 && q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320({
              borderColor: "",
              borderOpacity: DEFAULT_CALLOUT_CONFIG.borderOpacity,
              borderWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.borderWidth || DEFAULT_CALLOUT_CONFIG.borderWidth
            })
          }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.slice(0, 6).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 => jsx(K, {
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144,
            label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325,
            selected: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.borderWidth > 0 && q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320({
              borderColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144,
              borderOpacity: DEFAULT_CALLOUT_CONFIG.borderOpacity,
              borderWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.borderWidth || DEFAULT_CALLOUT_CONFIG.borderWidth
            })
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144))]
        }), jsx(G, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324,
          children: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) => jsx(K, {
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145,
            label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324,
            selected: q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320({
              backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 === 0 ? "" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145
            })
          }, "background-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145))
        }), jsx(ToolbarButton, {
          noIcon: true,
          className: "!univer-h-8 !univer-w-full !univer-rounded-md !univer-border !univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-px-3 univer-text-sm univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800",
          onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322,
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328
        })]
      })
    }) : null]
  });
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359) {
  return jsxs("section", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
    children: [jsx("span", {
      className: "univer-text-sm univer-font-medium univer-text-gray-800 dark:!univer-text-gray-100",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.title
    }), jsx("div", {
      className: "univer-grid univer-grid-cols-8 univer-gap-2",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.children
    })]
  });
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361) {
  let {
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363,
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364,
      selected: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
      variant: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 = "fill"
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 ? "univer-ring-2 univer-ring-primary-600 univer-ring-offset-1 dark:!univer-ring-offset-gray-900" : "";
  return jsx(ToolbarButton, {
    "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 + ":\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363,
    onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364,
    className: "\n !univer-size-7 univer-rounded univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0\n univer-text-base univer-transition-shadow\n hover:univer-ring-1 hover:univer-ring-primary-400\n dark:!univer-border-gray-700 dark:!univer-bg-gray-900\n " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 + "\n ",
    style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 === "fill" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 ? {
      backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362
    } : {
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362
    },
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 === "text" ? "A" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 ? null : jsx(LineNoneIcon, {})
  });
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373.highlight["background"]).slice(0, 15).map(({
    alpha: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147,
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148
  }) => new ColorKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.getColorFromTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148).setAlpha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147).toRgbString());
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.toUpperCase() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.toUpperCase();
}
let J = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, this._iconManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, this._registerIcons(), this._registerComponents();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      CalloutIcon: CalloutIcon
    }));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](W, st));
  }
};
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.save(), ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.borderRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.backgroundColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.globalAlpha = 0.45, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.restore();
}
function ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderWidth <= 0 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.save(), ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.lineWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.setLineDash(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderStyle === DashStyleType.DOT ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderWidth * 2] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderStyle === DashStyleType.DASH ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderWidth * 4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderWidth * 2] : []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.globalAlpha = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.borderOpacity, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.restore());
}
function dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.clipLeft == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.clipRight == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.clipRight <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.clipLeft) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.rectByPrecision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.clipLeft, -100000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.clipRight - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.clipLeft, 200000), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.clip();
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.restore(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396;
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403) {
  let {
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 / 2);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.closePath();
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415) {
  "@babel/helpers - typeof";

  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155;
  }, Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415);
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418) {
  if (Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 || "default");
    if (Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417);
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 = pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, "string");
  return Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 + "";
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 = mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429;
}
var ht = class extends ComponentExtension {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) {
    super(), this._state = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, X(this, "uKey", "DocsCalloutBackgroundExtension"), X(this, "type", DOCS_EXTENSION_TYPE.BACKGROUND), X(this, "_fragments", []), X(this, "_fragmentsByLine", new Map()), X(this, "_paintedRects", new Set());
  }
  getFragments() {
    return this._fragments;
  }
  clearCache() {
    this._fragments = this._state["getFragments"](), this._fragmentsByLine["clear"](), this._paintedRects["clear"](), this._fragments["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 => {
      let {
        triggerLine: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.rect;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) return;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = this._fragmentsByLine["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) ?? [];
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639), this._fragmentsByLine["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2);
    });
  }
  draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.parent) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.parent;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = this._fragmentsByLine["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => {
      this._paintedRects["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.rect) || (this._paintedRects["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.rect), dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.rect, () => {
        lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.rect, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.config);
      }));
    }));
  }
};
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 => {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.pageIndex >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.ed >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.st <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.endIndex);
    Array.from(new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.pageIndex))).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.pageIndex === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647);
      Array.from(new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.layoutFragment))).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.layoutFragment === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F)) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(vt)) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(Z)) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(bt)) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = yt(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) => Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) < Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461);
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push({
          blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.blockId,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610,
          pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647,
          left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D,
          top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1,
          width: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D,
          height: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1,
          firstLineTop: Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611),
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.skeletonLine ? {
            triggerLine: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.skeletonLine
          } : {})
        });
      });
    });
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.visualLeft ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.left;
}
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.visualLeft ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.left) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.visualWidth ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.width);
}
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.clipLeft).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 != null),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175.clipRight).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 != null);
  if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.length || !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27.length) return {};
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 ? {
    clipLeft: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12,
    clipRight: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13
  } : {};
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.top + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.marginTop ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.paddingTop ?? 0);
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.contentHeight == null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.height - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.marginBottom ?? 0) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.paddingBottom ?? 0) : Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.contentHeight;
}
const xt = -11000;
let St = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, this._docSkeletonManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, this._docsCalloutModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, this._docCanvasPopManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, X(this, "_iconHitRects", []), X(this, "_blockHitRects", []), X(this, "_emojiPopoverDisposable", null), X(this, "_toolbarPopoverDisposable", null), X(this, "_activeEmojiBlockId", null), X(this, "_cursorBeforeIconHover", null), this._initRender(), this._initPointer(), this.disposeWithMe(this._docsCalloutModel["change$"].subscribe(({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649
    }) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 === this._context["unitId"] && this._makeDirty();
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      this._closeEmojiPopover(), this._closeToolbarPopover(), this._restorePointerCursor();
    }));
  }
  _initRender() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = this._context["mainComponent"];
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 instanceof Documents)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = new ht({
      getFragments: () => this._collectRenderFragments()
    });
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.pageRender$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => {
      this._drawPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.getFragments());
    });
    this.disposeWithMe({
      dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.unsubscribe()
    });
  }
  _initPointer() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = this._context["mainComponent"] ?? this._context["scene"];
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.onPointerMove$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653]) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.offsetY, this._context["scene"]),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = this._hitIcon(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.y);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 && this._canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.blockId) ? this._setPointerCursor() : this._restorePointerCursor();
      },
      priority: xt
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.onPointerLeave$["subscribeEvent"](() => {
      this._restorePointerCursor();
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.onPointerDown$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660]) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.button === 2) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.offsetY, this._context["scene"]),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = this._hitIcon(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.y);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) {
          this._closeEmojiPopover();
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = this._hitBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.y);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 ? this._openToolbarPopover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615) : this._closeToolbarPopover();
          return;
        }
        this._closeToolbarPopover(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.skipNextObservers = true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659), this._openEmojiPopover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665);
      },
      priority: xt
    }));
  }
  _drawPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.length) {
      this._iconHitRects = [], this._blockHitRects = [];
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 = this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.pages) ?? []).indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.page);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 < 0) return;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 === 0 && (this._iconHitRects = [], this._blockHitRects = []);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = wt(this._context["mainComponent"]);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.rect["pageIndex"] === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6).forEach(({
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674,
      rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675
    }) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = Et({
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.blockId,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsTop,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsLeft,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsLeft,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsTop
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsLeft);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 && this._blockHitRects["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 = dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.ctx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, () => {
        if (ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.ctx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.showIcon) return null;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.ctx["save"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.ctx["font"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.iconSize + "px sans-serif", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.ctx["textBaseline"] = "top", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.ctx["fillStyle"] = this._themeService["getColorFromTheme"]("gray.900");
        let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.paddingLeft,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.firstLineTop + -3,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.ctx["measureText"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.icon).width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.iconSize);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.ctx["fillText"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.icon, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.ctx["restore"](), {
          bottom: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.iconSize,
          left: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4,
          right: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4,
          top: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5
        };
      });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = Et({
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.blockId,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.bottom + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsTop,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsLeft,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.right + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsLeft,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsTop
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.docsLeft);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 && this._iconHitRects["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678);
    });
  }
  _collectRenderFragments() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = this._context["unit"].getBody(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684.blockType === DocumentBlockRangeType.CALLOUT)) ?? [];
    if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.length) return [];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209.pages) ?? [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = gt(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12, this._collectLines(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12), 10, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = this._themeService["getColorFromTheme"](DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 = this._themeService["getColorFromTheme"](DOCS_CALLOUT_BORDER_COLOR_TOKEN);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = normalizeDocsCalloutConfig(this._docsCalloutModel["getCalloutConfig"](this._context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.blockId));
      return {
        config: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686,
          backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.backgroundColor || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211,
          borderColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.borderColor || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212
        },
        rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685
      };
    });
  }
  _collectLines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 = wt(this._context["mainComponent"]),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 = this._getCalloutParagraphOwners(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220);
    return documentSkeletonLineIterator(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219, {
      docsLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.docsLeft,
      pageMarginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.pageMarginTop,
      tableCellInsetX: 6,
      unitId: this._context["unitId"]
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.line["paragraphIndex"]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.push(Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690));
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16;
  }
  _getCalloutParagraphOwners(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228;
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = this._context["unit"].getBody()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.paragraphs) ?? [];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 => {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.startIndex > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.startIndex < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.endIndex && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.startIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693);
      });
    }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59;
  }
  _makeDirty() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = this._context["mainComponent"]) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.makeDirty(true), this._context["scene"].makeDirty();
  }
  _hitIcon(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234) {
    return this._iconHitRects["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.right && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.bottom) ?? null;
  }
  _hitBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238) {
    return this._blockHitRects["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.right && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.bottom) ?? null;
  }
  _openToolbarPopover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241) {
    if (this._closeToolbarPopover(), !this._canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.blockId)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = normalizeDocsCalloutConfig(this._docsCalloutModel["getCalloutConfig"](this._context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.blockId));
    this._toolbarPopoverDisposable = this._docCanvasPopManagerService["attachPopupToRect"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241, {
      componentKey: W,
      direction: "top-center",
      offset: [0, 8],
      extraProps: {
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.blockId,
        config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242,
        textColor: Ot(this._context["unit"].getBody(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.blockId, DocumentBlockRangeType.CALLOUT),
        unitId: this._context["unitId"]
      },
      onClickOutside: () => this._closeToolbarPopover(),
      onContextMenu: () => this._closeToolbarPopover(),
      zIndex: 101
    }, this._context["unitId"]);
  }
  _closeToolbarPopover() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = this._toolbarPopoverDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.dispose(), this._toolbarPopoverDisposable = null;
  }
  _openEmojiPopover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247) {
    if (this._closeEmojiPopover(), !this._canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.blockId)) return;
    this._activeEmojiBlockId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.blockId;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 = normalizeDocsCalloutConfig(this._docsCalloutModel["getCalloutConfig"](this._context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.blockId));
    this._emojiPopoverDisposable = this._docCanvasPopManagerService["attachPopupToRect"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, {
      componentKey: EMOJI_PICKER_COMPONENT,
      direction: "bottom-left",
      extraProps: {
        activeEmoji: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.icon,
        onSelect: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = this._activeEmojiBlockId;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 && (this._commandService["executeCommand"](DocsCalloutUpdateCommand.id, {
            blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699,
            config: {
              icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697
            }
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.keepOpen || this._closeEmojiPopover());
        }
      },
      onClickOutside: () => this._closeEmojiPopover(),
      onContextMenu: () => this._closeEmojiPopover(),
      zIndex: 102
    }, this._context["unitId"]);
  }
  _closeEmojiPopover() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251 = this._emojiPopoverDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.dispose(), this._emojiPopoverDisposable = null, this._activeEmojiBlockId = null;
  }
  _canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253) {
    return canEditDocumentTargets(this._permissionService, this._context["unitId"], [...getDocumentEntityParentPermissionObjectIds(this._context["unit"], "", "custom-block", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253), getDocumentEntityPermissionObjectId("", "custom-block", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253)]);
  }
  _setPointerCursor() {
    this._cursorBeforeIconHover ??= this._context["scene"].getCursor(), this._context["scene"].setCursor(CURSOR_TYPE.POINTER);
  }
  _restorePointerCursor() {
    this._cursorBeforeIconHover != null && (this._context["scene"].setCursor(this._cursorBeforeIconHover), this._cursorBeforeIconHover = null);
  }
};
function Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454) {
  let {
    column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455,
    line: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456,
    pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457,
    pageLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458,
    sectionTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453;
  return {
    layoutFragment: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455,
    skeletonLine: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456,
    st: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.startIndex,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.endIndex,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.left,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.top,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.width,
    clipLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.clipLeft,
    clipRight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.clipRight,
    visualLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.visualLeft,
    visualWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.visualWidth,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.lineHeight,
    contentHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.contentHeight,
    marginBottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.marginBottom,
    marginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.marginTop,
    paddingBottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.paddingBottom,
    paddingTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.paddingTop,
    pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457
  };
}
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467) {
  if (!Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467)) return {
    docsLeft: 0,
    docsTop: 0,
    pageMarginTop: 0
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.getOffsetConfig();
  return {
    docsLeft: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.docsLeft) ?? 0,
    docsTop: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.docsTop) ?? 0,
    pageMarginTop: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.pageMarginTop) ?? 0
  };
}
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 && "getOffsetConfig" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.getOffsetConfig == "function";
}
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.clipLeft == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.clipRight == null) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.clipLeft + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.right, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.clipRight + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473,
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16,
    right: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17
  } : null;
}
function Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481) {
  let {
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481.getAncestorScale(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481.getViewport("viewMain");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 ? {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.viewportScrollX,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.viewportScrollY
  } : {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480
  };
}
function Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255.blockType === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496) return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.textRuns) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.ed > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.startIndex + 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.st < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.endIndex)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.ts) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.cl) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.rgb) ?? undefined;
}
const kt = {
  id: DeleteCurrentParagraphCommand.id,
  name: "docs-callout.command.delete-current-paragraph",
  type: CommandType.COMMAND,
  multi: true,
  priority: 100,
  handler: async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.blockRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.blockType) === DocumentBlockRangeType.CALLOUT ? (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503.get(ICommandService).executeCommand(DocsCalloutDeleteCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.unitId,
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.blockRange["blockId"]
    }), true) : false;
  }
};
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259) {
    super(), this._docAutoFormatService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, this._menuManagerService["mergeMenu"](tt), this._menuManagerService["appendRootMenu"](et), this._initBoundaryDeleteGuard(), this._initCancelEmptyCalloutParagraphAutoFormat(), this.disposeWithMe(this._commandService["registerMultipleCommand"](kt));
  }
  _initBoundaryDeleteGuard() {
    [{
      id: DeleteLeftCommand.id,
      direction: "left"
    }, {
      id: DeleteRightCommand.id,
      direction: "right"
    }].forEach(({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
      direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104
    }) => {
      this.disposeWithMe(this._docAutoFormatService["registerAutoFormat"]({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
        match: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.selection["collapsed"] ? isCalloutBoundaryDelete({
          cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.selection["startOffset"],
          direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.unit["getSnapshot"]()
        }) : false,
        getMutations: () => [{
          id: DocsCalloutConsumeBoundaryDeleteCommand.id
        }],
        priority: 50
      }));
    });
  }
  _initCancelEmptyCalloutParagraphAutoFormat() {
    [DeleteLeftCommand.id, DeleteRightCommand.id].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 => {
      this.disposeWithMe(this._docAutoFormatService["registerAutoFormat"]({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
        match: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.selection["collapsed"] ? buildCancelEmptyCalloutParagraphActions({
          cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.selection["startOffset"],
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.unit["getSnapshot"]()
        }) != null : false,
        getMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => [{
          id: DocsCalloutCancelEmptyParagraphCommand.id,
          params: {
            cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.selection["startOffset"]
          }
        }],
        priority: 100
      }));
    });
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 = it, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266;
    let {
      menu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268
    } = merge({}, it, this._config);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 && this._configService["setConfig"]("menu", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, {
      merge: true
    }), this._configService["setConfig"]("docs-callout-ui.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268);
  }
  onRendered() {
    this._injector["get"](Q), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_DOC, [St]));
  }
  onStarting() {
    this._injector["add"]([J]), this._injector["add"]([U]), this._injector["get"](J), this._injector["get"](U), this._injector["add"]([Q]);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 as UniverDocsCalloutUIPlugin };
export { U, J, St, Q, X };
