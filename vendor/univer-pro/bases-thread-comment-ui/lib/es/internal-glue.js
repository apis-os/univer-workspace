import { UniverBasesPlugin, getBasePermissionValue } from "@univerjs-pro/bases";
import { UniverBasesThreadCommentPlugin } from "@univerjs-pro/bases-thread-comment";
import { BASE_TOOLBAR_BEFORE_EXTRA_ACTIONS, IBaseRecordActionService, IBaseUIStateService, UniverBasesUIPlugin } from "@univerjs-pro/bases-ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BaseDataModel, CommandType, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, UserManagerService, merge } from "@univerjs/core";
import { ThreadCommentDraftService, ThreadCommentPanel, ThreadCommentPanelService, UniverThreadCommentUIPlugin } from "@univerjs/thread-comment-ui";
import { ComponentManager, ISidebarService, useDependency, useObservable } from "@univerjs/ui";
import { Button, Tooltip } from "@univerjs/design";
import { CommentIcon } from "@univerjs/icons";
import { jsx } from "react/jsx-runtime";
import { ThreadCommentAnchorKind, ThreadCommentModel, deserializeThreadCommentAnchor, serializeThreadCommentAnchor } from "@univerjs/thread-comment";
import { map, merge as mergeLocal } from "rxjs";
import { UnitAction } from "@univerjs/protocol";
import { X, Y, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149 } from "./bases-thread-comment-ui-thread-comment-uiplugin.js";
var B = "@univerjs-pro/bases-thread-comment-ui",
  V = "1.0.0-insiders.20260907-70fc579";
function q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46107, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46108) {
  return function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4639, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4640) {
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46108(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4639, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4640, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46107);
  };
}
function J(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = arguments.length,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115 < 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114 === null ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = Object.getOwnPropertyDescriptor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = Reflect.decorate(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114);else {
    for (var var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111.length - 1; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115 < 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115 > 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113)) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116);
  }
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115 > 3 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116 && Object.defineProperty(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116;
}
Y = J([q(0, Inject(ComponentManager))], Y);
X = J([q(0, ICommandService), q(1, IBaseRecordActionService), q(2, Inject(ThreadCommentModel)), q(3, Inject(ThreadCommentDraftService)), q(4, Inject(ThreadCommentPanelService)), q(5, IPermissionService), q(6, ISidebarService)], X);
function Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46129) {
  "@babel/helpers - typeof";

  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659) {
    return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659;
  } : function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661) {
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661 && typeof Symbol == "function" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661.constructor === Symbol && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661 !== Symbol.prototype ? "symbol" : typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661;
  }, Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46129);
}
function ae(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132) {
  if (Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131) != "object" || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131;
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131[Symbol.toPrimitive];
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133 !== undefined) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133.call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132 || "default");
    if (Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46134) != "object") return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46134;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132 === "string" ? String : Number)(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131);
}
function oe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46139) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46140 = ae(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46139, "string");
  return Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46140) == "symbol" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46140 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46140 + "";
}
function Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46145) {
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46144 = oe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46144)) in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46143 ? Object.defineProperty(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46144, {
    value: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46145,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46143[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46144] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46145, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46143;
}
Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149, "pluginName", "UNIVER_BASES_THREAD_COMMENT_UI_PLUGIN"), Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149, "packageName", B), Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149, "version", V), Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149, "type", UniverInstanceType.UNIVER_BASE), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = J([DependentOn(UniverBasesPlugin, UniverBasesThreadCommentPlugin, UniverBasesUIPlugin, UniverLicensePlugin, UniverThreadCommentUIPlugin), q(1, Inject(Injector)), q(2, IConfigService)], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149);
