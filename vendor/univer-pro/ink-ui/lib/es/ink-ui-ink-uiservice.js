import { UniverInkPlugin } from "@univerjs-pro/ink";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, IConfigService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, createIdentifier, merge, toDisposable } from "@univerjs/core";
import { BuiltInUIPart, IUIPartsService, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { BehaviorSubject } from "rxjs";
import { ShapeFloatingToolbarMenuPanel } from "@univerjs-pro/shape-editor-ui";
import { Button, ColorPicker, Dropdown, Separator, Tooltip, clsx } from "@univerjs/design";
import { CloseIcon, ColorWheelMultiIcon, MoreDownIcon, StrokeSize1Icon, StrokeSize2Icon, StrokeSize3Icon, StrokeSize4Icon, StrokeSize5Icon } from "@univerjs/icons";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
let Y = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) {
    this._stateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635;
  }
  beginInkMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637) {
    return this._stateService["beginInkMode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637), true;
  }
  cancelInkMode() {
    this._stateService["cancelInkMode"]();
  }
};
export { Y as InkUIService };
