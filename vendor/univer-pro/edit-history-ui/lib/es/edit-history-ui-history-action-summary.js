import { HistorySessionService, HistorySessionStatus, UnitComparisonEntityType, UniverEditHistoryPlugin, getVersionComparison } from "@univerjs-pro/edit-history";
import { BooleanNumber, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IConfirmService, ILogService, Inject, Injector, LOCALE_META, LocaleService, Plugin, ThemeService, UniverInstanceType, VerticalAlign, WrapStrategy, dateKit, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BuiltInUIPart, ComponentManager, IMessageService, ISidebarService, IUIPartsService, UniverUIPlugin, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { Button, MessageType, borderBottomClassName, clsx } from "@univerjs/design";
import { BehaviorSubject } from "rxjs";
import { AiAssistantMultiIcon, ArrowLeftIcon, LoadingMultiIcon, MoreDownIcon, MoreRightIcon } from "@univerjs/icons";
import { Fragment, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { IRenderManagerService, Rect } from "@univerjs/engine-render";
import { z } from "./internal-glue.js";
var W = class extends Disposable {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699), z(this, "_resolvers", new Map());
  }
  register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102) {
    if (this._resolvers["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101)) throw Error("[HistoryActionSummaryService]: Resolver for " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 + "\x20has\x20already\x20been\x20registered.");
    return this._resolvers["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102), toDisposable(() => {
      this._resolvers["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 && this._resolvers["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101);
    });
  }
  resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 === undefined) return [];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = this._resolvers["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.resolve({
      version: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106,
      commandIds: new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.commands),
      mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.mutations ?? []
    }).filter(Boolean) : [];
  }
  dispose() {
    this._resolvers["clear"](), super.dispose();
  }
};
export { W as HistoryActionSummaryService };
