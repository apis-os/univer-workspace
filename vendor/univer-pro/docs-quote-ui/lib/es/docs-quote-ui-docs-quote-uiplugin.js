import { DOCS_QUOTE_LINE_COLOR_TOKEN, DOCS_QUOTE_LINE_WIDTH, DOCS_QUOTE_PLUGIN, DocsQuoteCancelEmptyParagraphCommand, DocsQuoteExitCommand, DocsQuoteInsertBelowCommand, DocsQuoteInsertCommand, DocsQuoteRemoveCommand, DocsQuoteUnwrapCommand, DocsQuoteUpdateStyleCommand, UniverDocsQuotePlugin, buildCancelEmptyQuoteParagraphActions, buildExitQuoteActions } from "@univerjs-pro/docs-quote";
import { DOC_CONTENT_INSERT_MENU_ID, DOC_PARAGRAPH_T_EDIT_MENU_ID, DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID, DOC_PARAGRAPH_T_INSERT_MENU_ID, DeleteCurrentParagraphCommand, DeleteLeftCommand, DeleteRightCommand, DocAutoFormatService, DocCanvasPopManagerService, EMPTY_PARAGRAPH_MENU_ID, EnterCommand, FLOAT_TEXT_STYLE_MENU_ID, FLOAT_TOOLBAR_MENU_POSITION, INSERT_BELLOW_MENU_ID, UniverDocsUIPlugin, disableMenuWhenHeaderFooterEditing, hideMenuWhenSelectionInBlockRange } from "@univerjs/docs-ui";
import { COLOR_PICKER_COMPONENT, ComponentManager, ContextMenuGroup, ContextMenuPosition, IMenuManagerService, IconManager, MenuItemType, MenuManagerPosition, RibbonInsertGroup, RibbonPosition, ToolbarButton, getMenuHiddenObservable, useDependency } from "@univerjs/ui";
import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, DocumentBlockRangeType, ICommandService, IConfigService, IPermissionService, Inject, Injector, LocaleService, Plugin, ThemeService, UniverInstanceType, merge } from "@univerjs/core";
import { combineLatest, map } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DocSkeletonManagerService, UniverDocsPlugin, canEditDocumentTargets, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId } from "@univerjs/docs";
import { Documents, IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { FontColorDoubleIcon, LeftBorderDoubleIcon, QuoteIcon, TextIcon } from "@univerjs/icons";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { documentSkeletonLineIterator } from "@univerjs-pro/docs-column";
import { Be, V } from "./docs-quote-ui-docs-quote-uimenu-schema.js";
const H = {},
  U = "docs-quote-ui.floating-toolbar";
function Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165) {
  let {
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166,
      lineColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167,
      textColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.popup["extraProps"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 = useDependency(ComponentManager).get(COLOR_PICKER_COMPONENT),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178] = useState(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.executeCommand(DocsQuoteUpdateStyleCommand.id, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.lineColor != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.lineColor), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.textColor != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.textColor), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652;
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.t("docs-quote-ui.toolbar.lineColor"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.t("docs-quote-ui.toolbar.textColor"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.t("docs-quote-ui.toolbar.convertToParagraph");
  return jsxs("div", {
    "data-u-comp": U,
    role: "toolbar",
    className: "univer-relative univer-flex univer-items-center univer-gap-1 univer-rounded-md univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.stopPropagation(),
    children: [jsx(ToolbarButton, {
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 === "line",
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181,
      onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179("line"),
      children: jsx(LeftBorderDoubleIcon, {
        extend: {
          colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173
        }
      })
    }), jsx(ToolbarButton, {
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 === "text",
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182,
      onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179("text"),
      children: jsx(FontColorDoubleIcon, {
        extend: {
          colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175
        }
      })
    }), jsx(ToolbarButton, {
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183,
      onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.executeCommand(DocsQuoteUnwrapCommand.id, {
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169
      }),
      children: jsx(TextIcon, {})
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 ? jsx("div", {
      className: "univer-absolute univer-left-0 univer-top-full univer-z-10 univer-mt-1 univer-rounded-lg univer-bg-gray-0 univer-p-4 univer-shadow-lg dark:!univer-bg-gray-900",
      children: jsx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, {
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 === "line" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 === "line" ? {
          lineColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656
        } : {
          textColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656
        })
      })
    }) : null]
  });
}
let K = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, this._iconManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, this._registerIcons(), this._registerComponents();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      QuoteIcon: QuoteIcon
    }));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](U, Ue));
  }
};
function We(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.pageIndex >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.ed >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.st <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.endIndex);
    Array.from(new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.pageIndex))).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.pageIndex === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619);
      Array.from(new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.layoutFragment))).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.layoutFragment === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.top + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.marginTop ?? 0))),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.height - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.marginBottom ?? 0))),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.left)),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.width)),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = Ge(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A);
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.push({
          blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.blockId,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
          pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619,
          lineX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224,
          left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
          width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
          top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223,
          height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 * 2
        });
      });
    });
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14;
}
function Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.clipLeft).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 != null),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.clipRight).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 != null);
  if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.length || !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17.length) return {};
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 ? {
    clipLeft: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12,
    clipRight: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13
  } : {};
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231) {
  "@babel/helpers - typeof";

  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673;
  }, q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231);
}
function Ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234) {
  if (q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 || "default");
    if (q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233);
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = Ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241, "string");
  return q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 + "";
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245;
}
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, this._docSkeletonManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, this._docCanvasPopManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, Y(this, "_hitRects", []), Y(this, "_toolbarPopoverDisposable", null), this._initRender(), this._initPointer(), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => this._closeToolbarPopover()));
  }
  _initPointer() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = this._context["scene"];
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.onPointerDown$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621]) => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.button === 2) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 = Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.offsetY, this._context["scene"]),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = this._hitRects["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.x >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.x <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.right && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.y >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.y <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.bottom);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) {
          this._closeToolbarPopover();
          return;
        }
        this._openToolbarPopover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
      },
      priority: -11000
    }));
  }
  _initRender() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = this._context["mainComponent"];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 instanceof Documents && this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.pageRender$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 => this._drawPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627)));
  }
  _drawPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = this._context["unit"].getBody()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.blockType === DocumentBlockRangeType.QUOTE)) ?? [];
    if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.length) {
      this._hitRects = [];
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.pages) ?? [],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.page);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 < 0) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = We(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6, this._collectLines(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6), 4, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = Z(this._context["mainComponent"]);
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 === 0 && (this._hitRects = []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.pageIndex === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = this._getQuoteLineColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.blockId);
      Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.ctx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, () => Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.ctx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.lineX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631)), this._hitRects["push"]({
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.blockId,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.docsTop,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.docsLeft,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.docsLeft,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.docsTop
      });
    });
  }
  _collectLines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = this._getQuoteParagraphOwners(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = Z(this._context["mainComponent"]);
    return documentSkeletonLineIterator(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, {
      docsLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.docsLeft,
      pageMarginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.pageMarginTop,
      unitId: this._context["unitId"]
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.line["paragraphIndex"]);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.clipLeft != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.clipRight != null) {
          let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.pageLeft + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.column["left"],
            var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.column["width"];
          if (Math.min(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.clipRight) <= Math.max(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.clipLeft)) return;
        }
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.push(qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635));
      }
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10;
  }
  _getQuoteParagraphOwners(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108;
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = this._context["unit"].getBody()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.paragraphs) ?? [];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.startIndex > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.startIndex < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.endIndex && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.startIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638);
      });
    }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59;
  }
  _getQuoteLineColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = this._context["unit"].getBody(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.blockType === DocumentBlockRangeType.QUOTE),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.paragraphs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.startIndex > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.startIndex < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.endIndex);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.paragraphStyle) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.borderLeft) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.color["rgb"]) ?? this._themeService["getColorFromTheme"](DOCS_QUOTE_LINE_COLOR_TOKEN);
  }
  _openToolbarPopover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125) {
    this._closeToolbarPopover(), this._canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.blockId) && (this._toolbarPopoverDisposable = this._docCanvasPopManagerService["attachPopupToRect"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, {
      componentKey: U,
      direction: "top-center",
      offset: [0, 8],
      extraProps: {
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.blockId,
        lineColor: this._getQuoteLineColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.blockId),
        textColor: this._getQuoteTextColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.blockId),
        unitId: this._context["unitId"]
      },
      onClickOutside: () => this._closeToolbarPopover(),
      onContextMenu: () => this._closeToolbarPopover(),
      zIndex: 101
    }, this._context["unitId"]));
  }
  _closeToolbarPopover() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 = this._toolbarPopoverDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.dispose(), this._toolbarPopoverDisposable = null;
  }
  _canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129) {
    return canEditDocumentTargets(this._permissionService, this._context["unitId"], [...getDocumentEntityParentPermissionObjectIds(this._context["unit"], "", "custom-block", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129), getDocumentEntityPermissionObjectId("", "custom-block", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129)]);
  }
  _getQuoteTextColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = this._context["unit"].getBody(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.blockType === DocumentBlockRangeType.QUOTE);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.textRuns) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.ed > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135.startIndex + 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.st < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135.endIndex)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.ts) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.cl) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.rgb) ?? DEFAULT_STYLES.cl["rgb"] : DEFAULT_STYLES.cl["rgb"];
  }
};
function qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253) {
  let {
    column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254,
    line: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255,
    pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256,
    pageLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257,
    sectionTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251;
  return {
    layoutFragment: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254,
    st: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.startIndex,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.endIndex,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.left,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255.top,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.lineWidth,
    clipLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.clipLeft ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.clipLeft),
    clipRight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.clipRight ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.clipRight),
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255.lineHeight,
    marginBottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255.marginBottom,
    marginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255.marginTop,
    pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256
  };
}
function Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.clipLeft == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.clipRight == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.clipRight <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.clipLeft) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.rectByPrecision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.clipLeft, -100000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.clipRight - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.clipLeft, 200000), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.clip();
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.restore(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270;
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275) {
  if (!Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275)) return {
    docsLeft: 0,
    docsTop: 0,
    pageMarginTop: 0
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.getOffsetConfig();
  return {
    docsLeft: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.docsLeft) ?? 0,
    docsTop: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.docsTop) ?? 0,
    pageMarginTop: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.pageMarginTop) ?? 0
  };
}
function Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 && "getOffsetConfig" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279.getOffsetConfig == "function";
}
function Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.lineCap = "round", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.lineWidth = DOCS_QUOTE_LINE_WIDTH, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.restore();
}
function Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293) {
  let {
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.getAncestorScale(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.getViewport("viewMain");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 ? {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.viewportScrollX,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.viewportScrollY
  } : {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292
  };
}
const Qe = {
  id: DeleteCurrentParagraphCommand.id,
  name: "docs-quote.command.delete-current-paragraph",
  type: CommandType.COMMAND,
  multi: true,
  priority: 100,
  handler: async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304.blockRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305.blockType) === DocumentBlockRangeType.QUOTE ? (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.get(ICommandService).executeCommand(DocsQuoteRemoveCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304.unitId,
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304.blockRange["blockId"]
    }), true) : false;
  }
};
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) {
    super(), this._docAutoFormatService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, this._menuManagerService["mergeMenu"](V), this._menuManagerService["appendRootMenu"](Be), this._initExitQuoteAutoFormat(), this._initCancelEmptyQuoteParagraphAutoFormat(), this.disposeWithMe(this._commandService["registerMultipleCommand"](Qe));
  }
  _initExitQuoteAutoFormat() {
    this.disposeWithMe(this._docAutoFormatService["registerAutoFormat"]({
      id: EnterCommand.id,
      match: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.selection["collapsed"] ? buildExitQuoteActions({
        cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.selection["startOffset"],
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.unit["getSnapshot"]()
      }) != null : false,
      getMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => [{
        id: DocsQuoteExitCommand.id,
        params: {
          cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.selection["startOffset"]
        }
      }],
      priority: 100
    }));
  }
  _initCancelEmptyQuoteParagraphAutoFormat() {
    [DeleteLeftCommand.id, DeleteRightCommand.id].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => {
      this.disposeWithMe(this._docAutoFormatService["registerAutoFormat"]({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646,
        match: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.selection["collapsed"] ? buildCancelEmptyQuoteParagraphActions({
          cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.selection["startOffset"],
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.unit["getSnapshot"]()
        }) != null : false,
        getMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => [{
          id: DocsQuoteCancelEmptyParagraphCommand.id,
          params: {
            cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.selection["startOffset"]
          }
        }],
        priority: 100
      }));
    });
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = H, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150;
    let {
      menu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152
    } = merge({}, H, this._config);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 && this._configService["setConfig"]("menu", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, {
      merge: true
    }), this._configService["setConfig"]("docs-quote-ui.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152);
  }
  onStarting() {
    this._injector["add"]([K]), this._injector["get"](K), this._injector["add"]([Q]), this._injector["get"](Q);
  }
  onRendered() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_DOC, [X]));
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 as UniverDocsQuoteUIPlugin };
export { K, X, Q, Y };
