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
import { J, K, W, Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 } from "./docs-list-ui-docs-list-uiplugin.js";
var j = "@univerjs-pro/docs-list-ui",
  M = "1.0.0-insiders.20260907-70fc579";
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320);
  };
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329;
}
W = U([H(0, Inject(ComponentManager))], W);
Y = U([H(1, ICommandService), H(2, Inject(DocSelectionManagerService)), H(3, Inject(DocEventManagerService)), H(4, Inject(DocCanvasPopManagerService)), H(5, IContextMenuService), H(6, Inject(J)), H(7, IPermissionService)], Y);
K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, "pluginName", DOCS_LIST_PLUGIN + "_UI_PLUGIN"), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, "packageName", j), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, "version", M), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, "type", UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 = U([DependentOn(UniverLicensePlugin, UniverDocsPlugin, UniverRenderEnginePlugin, UniverDocsUIPlugin, UniverDocsListPlugin), H(1, Inject(Injector)), H(2, IRenderManagerService), H(3, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394);
