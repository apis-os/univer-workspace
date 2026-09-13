import { DOCS_LIST_MORE_BULLETS, DOCS_LIST_PLUGIN, DocsListDemoteCommand, DocsListPromoteCommand, DocsListSelectionMode, DocsListSetGlyphSymbolCommand, DocsListSetGlyphTypeCommand, DocsListSetPrefixSuffixCommand, DocsListSetStartNumberCommand, UniverDocsListPlugin } from "@univerjs-pro/docs-list";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, Inject, Injector, ListGlyphType, LocaleService, PRESET_LIST_TYPE, Plugin, PresetListType, UniverInstanceType, merge } from "@univerjs/core";
import { DocSelectionManagerService, UniverDocsPlugin, canEditDocumentTargets } from "@univerjs/docs";
import { DocCanvasPopManagerService, DocEventManagerService, UniverDocsUIPlugin, getListMarkerFallbackBound } from "@univerjs/docs-ui";
import { IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { ComponentManager, IContextMenuService, useDependency } from "@univerjs/ui";
import { Button, Checkbox, Input, InputNumber, Separator } from "@univerjs/design";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { BehaviorSubject } from "rxjs";
const N = {},
  P = "docs-list-ui.context-menu",
  F = [{
    label: "1",
    type: ListGlyphType.DECIMAL
  }, {
    label: "A",
    type: ListGlyphType.UPPER_LETTER
  }, {
    label: "a",
    type: ListGlyphType.LOWER_LETTER
  }, {
    label: "I",
    type: ListGlyphType.UPPER_ROMAN
  }, {
    label: "i",
    type: ListGlyphType.LOWER_ROMAN
  }],
  I = ["●", "○", "■", "➢", "★"];
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.popup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269.extraProps,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 = useDependency(LocaleService);
  return jsxs("section", {
    className: "univer-box-border\x20univer-w-48\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-py-1.5\x20univer-text-xs\x20univer-shadow-lg",
    "data-u-comp": P,
    children: [jsx("div", {
      className: "univer-grid univer-grid-cols-5 univer-justify-items-center univer-gap-1 univer-px-2.5 univer-py-1",
      children: F.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 => jsx(Button, {
        size: "small",
        type: "button",
        disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.readOnly,
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46;
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onSetGlyphType) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.type);
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.label
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.label))
    }), jsx(Separator, {}), jsx("div", {
      className: "univer-grid\x20univer-grid-cols-5\x20univer-justify-items-center\x20univer-gap-1\x20univer-px-2.5\x20univer-py-1",
      children: I.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => jsx(Button, {
        size: "small",
        type: "button",
        disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.readOnly,
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462;
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onSetGlyphSymbol) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650);
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650))
    }), jsx(Separator, {}), jsx(R, {
      disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.readOnly,
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onMoreBullets,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.t("docs-list-ui.moreBullets")
    }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.showNumberingControls) && jsxs(Fragment, {
      children: [jsx(R, {
        disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.readOnly,
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onEditPrefixSuffix,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.t("docs-list-ui.editPrefixSuffix")
      }), jsx(R, {
        disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.readOnly,
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651;
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onSetStartNumber) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270, 1);
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.t("docs-list-ui.restartNumbering")
      }), jsx(R, {
        disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.readOnly,
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onRestartAt,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.t("docs-list-ui.restartAt")
      })]
    }), jsx(R, {
      disabled: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.readOnly) || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.canPromote),
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onPromote,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.t("docs-list-ui.promote")
    }), jsx(R, {
      disabled: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.readOnly) || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.canDemote),
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onDemote,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.t("docs-list-ui.demote")
    }), jsx(Separator, {}), jsx(R, {
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onSelectItem,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.t("docs-list-ui.selectListItem")
    }), jsx(R, {
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onSelectCurrentLevel,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.t("docs-list-ui.selectCurrentLevel")
    }), jsx(R, {
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.onSelectCurrentList,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.t("docs-list-ui.selectCurrentList")
    })]
  });
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276) {
  return jsx(Button, {
    size: "small",
    variant: "ghost",
    type: "button",
    className: "univer-w-full univer-justify-start",
    disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.disabled,
    onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.preventDefault(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.onClick) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276);
    },
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.children
  });
}
const z = "docs-list-ui.more-bullets-dialog";
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.popup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279.extraProps,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = useMemo(() => DOCS_LIST_MORE_BULLETS.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) => ({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465,
      symbol: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464
    })), []);
  return jsxs("section", {
    className: "univer-box-border\x20univer-w-[420px]\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-4\x20univer-text-sm\x20univer-shadow-lg",
    "data-u-comp": z,
    children: [jsxs("header", {
      className: "univer-mb-3 univer-flex univer-items-center univer-justify-between",
      children: [jsx("h2", {
        className: "univer-m-0\x20univer-text-lg\x20univer-font-medium\x20univer-text-gray-900",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.t("docs-list-ui.moreBullets")
      }), jsx(Button, {
        type: "button",
        size: "icon",
        variant: "ghost",
        className: "univer-text-xl",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.onClose,
        "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.t("docs-list-ui.close"),
        children: "×"
      })]
    }), jsx("div", {
      className: "univer-grid univer-max-h-[260px] univer-grid-cols-10 univer-gap-1 univer-overflow-y-auto univer-pr-1",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.map(({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657,
        symbol: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658
      }) => jsx(Button, {
        type: "button",
        size: "icon",
        className: "univer-text-base",
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466;
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.onSelect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658);
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657))
    })]
  });
}
const B = "docs-list-ui.prefix-suffix-dialog";
function ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.popup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289.extraProps,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 = useDependency(LocaleService),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293] = useState(""),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295] = useState("."),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297] = useState(true);
  return jsxs("form", {
    className: "univer-box-border univer-w-[456px] univer-rounded-xl univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-6 univer-text-sm univer-shadow-xl",
    onSubmit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.onApply) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 ? DocsListSelectionMode.List : DocsListSelectionMode.Level);
    },
    children: [jsx("h2", {
      className: "univer-m-0\x20univer-mb-6\x20univer-text-3xl\x20univer-font-medium\x20univer-text-gray-900",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.t("docs-list-ui.prefixAndSuffix")
    }), jsxs("div", {
      className: "univer-flex univer-items-end univer-gap-4",
      children: [jsxs("label", {
        className: "univer-flex univer-w-44 univer-flex-none univer-flex-col univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700",
        children: [jsx("span", {
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.t("docs-list-ui.prefix")
        }), jsx(Input, {
          size: "large",
          inputClass: "univer-h-16\x20univer-text-xl",
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293,
          placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.t("docs-list-ui.noPrefix")
        })]
      }), jsx("span", {
        className: "univer-w-6 univer-flex-none univer-pb-5 univer-text-center univer-text-xl univer-text-gray-700",
        children: "A"
      }), jsxs("label", {
        className: "univer-flex univer-w-44 univer-flex-none univer-flex-col univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700",
        children: [jsx("span", {
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.t("docs-list-ui.suffix")
        }), jsx(Input, {
          size: "large",
          inputClass: "univer-h-16 univer-text-xl",
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295
        })]
      })]
    }), jsx(Checkbox, {
      className: "univer-mt-6 univer-text-xl",
      checked: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297(!!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663),
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.t("docs-list-ui.applyToEntireList")
    }), jsxs("footer", {
      className: "univer-mt-10 univer-flex univer-items-center univer-justify-end univer-gap-4",
      children: [jsx(Button, {
        type: "button",
        variant: "default",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.onClose,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.t("docs-list-ui.cancel")
      }), jsx(Button, {
        type: "submit",
        variant: "primary",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.t("docs-list-ui.ok")
      })]
    })]
  });
}
const V = "docs-list-ui.start-number-dialog";
function ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.popup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.extraProps,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 = useDependency(LocaleService),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313] = useState(1);
  return jsxs("section", {
    className: "univer-box-border univer-w-[260px] univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-4 univer-text-sm univer-shadow-lg",
    "data-u-comp": V,
    children: [jsx("h2", {
      className: "univer-m-0 univer-mb-3 univer-text-lg univer-font-medium univer-text-gray-900",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.t("docs-list-ui.restartAt")
    }), jsx(InputNumber, {
      className: "univer-w-full",
      min: 1,
      step: 1,
      precision: 0,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313
    }), jsxs("footer", {
      className: "univer-mt-4 univer-flex univer-justify-end univer-gap-2",
      children: [jsx(Button, {
        type: "button",
        variant: "default",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.onClose,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.t("docs-list-ui.cancel")
      }), jsx(Button, {
        type: "button",
        variant: "primary",
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664;
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.onApply) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 ?? 1));
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.t("docs-list-ui.ok")
      })]
    })]
  });
}
let W = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](P, L)), this.disposeWithMe(this._componentManager["register"](z, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F)), this.disposeWithMe(this._componentManager["register"](B, ve)), this.disposeWithMe(this._componentManager["register"](V, ye));
  }
};
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338) {
  "@babel/helpers - typeof";

  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674;
  }, G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338);
}
function be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341) {
  if (G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 || "default");
    if (G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340);
}
function xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 = be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, "string");
  return G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 + "";
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 = xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352;
}
const q = {
  marker: null,
  anchor: null,
  open: false
};
var J = class {
  constructor() {
    K(this, "_menuState$", new BehaviorSubject(q)), K(this, "_markerSelection$", new BehaviorSubject(null)), K(this, "menuState$", this._menuState$["asObservable"]()), K(this, "markerSelection$", this._markerSelection$["asObservable"]());
  }
  get menuState() {
    return this._menuState$["value"];
  }
  get markerSelection() {
    return this._markerSelection$["value"];
  }
  nextClickMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 = this.markerSelection;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 && this._getMarkerGroupKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.marker) === this._getMarkerGroupKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676) ? DocsListSelectionMode.Item : DocsListSelectionMode.Level;
  }
  contextMenuMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = this.markerSelection;
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 || this._getMarkerListKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.marker) !== this._getMarkerListKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) ? DocsListSelectionMode.Level : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.mode === "list" ? DocsListSelectionMode.List : this._getMarkerGroupKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.marker) === this._getMarkerGroupKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.mode : DocsListSelectionMode.Level;
  }
  openMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) {
    this._menuState$["next"]({
      marker: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684,
      anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685,
      open: true
    });
  }
  closeMenu() {
    this._menuState$["next"](q);
  }
  setMarkerSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689) {
    this._markerSelection$["next"]({
      marker: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688,
      mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689
    });
  }
  clearMarkerSelection() {
    this._markerSelection$["next"](null);
  }
  _getMarkerGroupKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) {
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.segmentId ?? "") + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.listId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.nestingLevel;
  }
  _getMarkerListKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694) {
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.segmentId ?? "") + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.listId;
  }
};
let Y = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, this._docSelectionManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, this._docEventManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, this._docCanvasPopManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100, this._contextMenuService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, this._selectionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, K(this, "_menuDisposable", null), K(this, "_docRangesBeforeMarkerPointer", null), K(this, "_ignoreTextSelectionBefore", 0), K(this, "_openContextMenuTimer", null), this._initMarkerPointerSelectionPreserve(), this._initMarkerClick(), this._initMarkerContextMenu(), this._initMarkerSelectionRender(), this._initTextSelectionClear(), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => this._closeContextMenu()));
  }
  _initMarkerPointerSelectionPreserve() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = this._context["mainComponent"] ?? this._context["scene"];
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.onPointerDown$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468]) => {
        this._docEventManagerService["isPointerOnBullet"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.offsetY) ? this._docRangesBeforeMarkerPointer = [...(this._docSelectionManagerService["getDocRanges"]() ?? [])] : this._docRangesBeforeMarkerPointer = null;
      },
      priority: -12000
    }));
  }
  _initMarkerClick() {
    this.disposeWithMe(this._docEventManagerService["clickBullets$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = this._toMarkerInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610);
      if (!Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.listType)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = this._selectionService["nextClickMode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611);
      this._selectMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
    }));
  }
  _initMarkerContextMenu() {
    this.disposeWithMe(this._docEventManagerService["contextMenuBullets$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = this._toMarkerInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
      Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.listType) && this._openMarkerContextMenuFromOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.y);
    }));
  }
  _openMarkerContextMenuFromOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, this._context["scene"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = this._selectionService["contextMenuMode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114);
    this._selectionService["openMenu"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117), this._selectMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118), this._scheduleOpenContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.y);
  }
  _scheduleOpenContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126) {
    this._clearOpenContextMenuTimer(), this._openContextMenuTimer = setTimeout(() => {
      this._openContextMenuTimer = null, this._openContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126);
    }, 0);
  }
  _initMarkerSelectionRender() {
    this.disposeWithMe(this._selectionService["markerSelection$"].subscribe(() => this._makeDirty())), this.disposeWithMe(this._context["scene"].afterRender$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 = this._selectionService["markerSelection"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.getContext();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 && this._drawMarkerSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622);
    }));
  }
  _initTextSelectionClear() {
    this.disposeWithMe(this._docSelectionManagerService["textSelection$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => {
      Date.now() < this._ignoreTextSelectionBefore || this._selectionService["markerSelection"] && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.textRanges["length"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.rectRanges["length"]) && this._selectionService["clearMarkerSelection"]();
    }));
  }
  _openContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132) {
    this._contextMenuService["hideContextMenu"](), this._closeContextMenu(), this._menuDisposable = this._docCanvasPopManagerService["attachPopupToRect"]({
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131,
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132
    }, {
      componentKey: P,
      direction: "bottom-left",
      extraProps: {
        marker: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130,
        readOnly: !this._canEditDocument(),
        canDemote: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.nestingLevel < 8,
        canPromote: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.nestingLevel > 0,
        showNumberingControls: this._isOrderedMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130),
        onClose: () => this._closeContextMenu(),
        onDemote: () => this._executeMarkerCommand(DocsListDemoteCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130),
        onEditPrefixSuffix: () => this._openPrefixSuffixDialog(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132),
        onMoreBullets: () => this._openMoreBulletsDialog(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132),
        onPromote: () => this._executeMarkerCommand(DocsListPromoteCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130),
        onRestartAt: () => this._openStartNumberDialog(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132),
        onSelectCurrentLevel: () => this._selectMarkerAndClose(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, DocsListSelectionMode.Level),
        onSelectCurrentList: () => this._selectMarkerAndClose(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, DocsListSelectionMode.List),
        onSelectItem: () => this._selectMarkerAndClose(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, DocsListSelectionMode.Item),
        onSetGlyphSymbol: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => this._executeMarkerCommand(DocsListSetGlyphSymbolCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, {
          symbol: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628
        }),
        onSetGlyphType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 => this._executeMarkerCommand(DocsListSetGlyphTypeCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, {
          glyphType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629
        }),
        onSetPrefixSuffix: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) => this._executeMarkerCommand(DocsListSetPrefixSuffixCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, {
          prefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630,
          suffix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631
        }),
        onSetStartNumber: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => this._executeMarkerCommand(DocsListSetStartNumberCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 === 1 ? {
          restartFromPrevious: true,
          startNumber: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632
        } : {
          startNumber: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632
        })
      },
      onClickOutside: () => this._closeContextMenu(),
      onContextMenu: () => this._closeContextMenu()
    }, this._context["unitId"]);
  }
  _openMoreBulletsDialog(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138) {
    this._closeContextMenu(), this._menuDisposable = this._docCanvasPopManagerService["attachPopupToRect"](this._getAnchorRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138), {
      componentKey: z,
      direction: "bottom-left",
      extraProps: {
        onClose: () => this._closeContextMenu(),
        onSelect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 => this._executeMarkerCommand(DocsListSetGlyphSymbolCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136, {
          symbol: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633
        })
      },
      onClickOutside: () => this._closeContextMenu(),
      onContextMenu: () => this._closeContextMenu()
    }, this._context["unitId"]);
  }
  _openPrefixSuffixDialog(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144) {
    this._isOrderedMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142) && (this._closeContextMenu(), this._menuDisposable = this._docCanvasPopManagerService["attachPopupToRect"](this._getAnchorRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144), {
      componentKey: B,
      direction: "bottom-left",
      extraProps: {
        onApply: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) => this._executeMarkerCommand(DocsListSetPrefixSuffixCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, {
          prefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634,
          suffix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635,
          mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636
        }),
        onClose: () => this._closeContextMenu()
      },
      onClickOutside: () => this._closeContextMenu(),
      onContextMenu: () => this._closeContextMenu()
    }, this._context["unitId"]));
  }
  _openStartNumberDialog(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150) {
    this._closeContextMenu(), this._menuDisposable = this._docCanvasPopManagerService["attachPopupToRect"](this._getAnchorRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150), {
      componentKey: V,
      direction: "bottom-left",
      extraProps: {
        onApply: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 => this._executeMarkerCommand(DocsListSetStartNumberCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, {
          startNumber: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637
        }),
        onClose: () => this._closeContextMenu()
      },
      onClickOutside: () => this._closeContextMenu(),
      onContextMenu: () => this._closeContextMenu()
    }, this._context["unitId"]);
  }
  _closeContextMenu() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154;
    this._clearOpenContextMenuTimer(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = this._menuDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.dispose(), this._menuDisposable = null, this._selectionService["closeMenu"]();
  }
  _canEditDocument() {
    return canEditDocumentTargets(this._permissionService, this._context["unitId"], []);
  }
  _clearOpenContextMenuTimer() {
    this._openContextMenuTimer != null && (clearTimeout(this._openContextMenuTimer), this._openContextMenuTimer = null);
  }
  _executeMarkerCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = {}) {
    this._commandService["executeCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, {
      paragraphStartIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.paragraphStartIndex,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.segmentId,
      mode: this._getCommandMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.mode),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158
    }), this._closeContextMenu();
  }
  _getCommandMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 === DocsListSelectionMode.Item || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 === DocsListSelectionMode.Level || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 === DocsListSelectionMode.List) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = this._selectionService["markerSelection"];
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.marker["listId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.listId || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.marker["segmentId"] ?? "") !== (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.segmentId ?? "") ? DocsListSelectionMode.Level : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.mode;
  }
  _selectMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = this._docRangesBeforeMarkerPointer ?? [...(this._docSelectionManagerService["getDocRanges"]() ?? [])];
    this._ignoreTextSelectionBefore = Date.now() + 400, this._selectionService["setMarkerSelection"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169), this._makeDirty(), this._docRangesBeforeMarkerPointer = null, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length && queueMicrotask(() => {
      this._docSelectionManagerService["replaceDocRanges"](var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, {
        unitId: this._context["unitId"],
        subUnitId: this._context["unitId"]
      }, false, {
        forceFocus: false
      });
    });
  }
  _selectMarkerAndClose(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173) {
    this._selectMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173), this._closeContextMenu();
  }
  _drawMarkerSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 = this._getSelectedBulletBounds();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.length && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.fillStyle = "#8ab4f8", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.globalAlpha = 0.45, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 = this._getMarkerSelectionRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.fillRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.height);
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.restore());
  }
  _getMarkerSelectionRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.rect, this._context["scene"]),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = this._isBulletMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.height * 0.72 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.height * 1.15;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181,
      width: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.width, Math.max(8, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D))
    };
  }
  _isBulletMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.paragraph["bullet"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.listType,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.paragraph["bullet"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.nestingLevel) ?? 0,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 && (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = this._context["unit"].lists) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189]) ?? PRESET_LIST_TYPE[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189]) || null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.nestingLevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2];
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.glyphType) === ListGlyphType.BULLET || !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.glyphSymbol);
  }
  _isOrderedMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 = this._context["unit"].lists) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.listType]) ?? PRESET_LIST_TYPE[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.listType],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.nestingLevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.nestingLevel];
    return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.glyphType !== ListGlyphType.BULLET && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.glyphSymbol);
  }
  _getSelectedBulletBounds() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = this._selectionService["markerSelection"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210) return [];
    let {
      marker: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211,
      mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210;
    return Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.listType) ? this._getSelectedFallbackBulletBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212).concat(this._docEventManagerService["getBulletBounds"]().filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => this._isMarkerBoundSelected(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212) && !this._hasFallbackBoundForMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.paragraph["startIndex"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.segmentId))) : [];
  }
  _getSelectedFallbackBulletBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218;
    return (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = this._context["unit"].getBody()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.paragraphs) ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => this._isParagraphSelected(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 = this._docEventManagerService["findParagraphBoundByIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.startIndex);
      return X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645) ? getListMarkerFallbackBound(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) : null;
    }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 != null);
  }
  _hasFallbackBoundForMarker(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 = this._docEventManagerService["findParagraphBoundByIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222);
    return X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.segmentId ?? "") === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 ?? "");
  }
  _isMarkerBoundSelected(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230) {
    return this._isParagraphSelected(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.paragraph, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.segmentId ?? "") === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.segmentId ?? "");
  }
  _isParagraphSelected(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.bullet;
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.listId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.listId || !Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.listType) ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 === "item" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.startIndex === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.paragraphStartIndex : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 === "list" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.nestingLevel === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.nestingLevel;
  }
  _makeDirty() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = this._context["mainComponent"]) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.makeDirty(true), this._context["scene"].makeDirty();
  }
  _getAnchorRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245) {
    return {
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244,
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245
    };
  }
  _toMarkerInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251;
    return {
      paragraphStartIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.paragraph["startIndex"],
      listId: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.paragraph["bullet"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.listId) ?? "",
      listType: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.paragraph["bullet"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.listType) ?? "",
      nestingLevel: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.paragraph["bullet"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.nestingLevel) ?? 0,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.segmentId
    };
  }
};
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 == "object" && "tableId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358);
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 !== PresetListType.CHECK_LIST && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 !== PresetListType.CHECK_LIST_CHECKED;
}
function Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.right, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.bottom, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363);
  return {
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.y,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.x,
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.y
  };
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372) {
  let {
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.getAncestorScale(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.getViewport("viewMain");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 ? {
    x: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.viewportScrollX) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373,
    y: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.viewportScrollY) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374
  } : {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371
  };
}
function Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384) {
  let {
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.getAncestorScale(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.getViewport("viewMain");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 ? {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.viewportScrollX,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.viewportScrollY
  } : {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383
  };
}
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = N, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259;
    let {
      menu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261
    } = merge({}, N, this._config);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 && this._configService["setConfig"]("menu", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, {
      merge: true
    }), this._configService["setConfig"]("docs-list-ui.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261);
  }
  onStarting() {
    this._injector["add"]([W]), this._injector["add"]([J]), this._injector["get"](J), this._injector["get"](W);
  }
  onRendered() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_DOC, [Y]));
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 as UniverDocsListUIPlugin };
export { W, Y, J, K };
