import { CollaborationEvent, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { CollaborationSessionService, SessionStatus, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { CommandType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, RxDisposable, UniverInstanceType, merge, mergeOverrideWithDependencies, registerDependencies, toDisposable, touchDependencies } from "@univerjs/core";
import { InsertSheetMutation, SetWorksheetActiveOperation } from "@univerjs/sheets";
import { BehaviorSubject, Subject, defer, from, of } from "rxjs";
import { takeUntil, throttleTime } from "rxjs/operators";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { SetScrollOperation, SetZoomRatioOperation } from "@univerjs/sheets-ui";
import { BuiltInUIPart, IUIPartsService, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { Button, Dropdown } from "@univerjs/design";
import { LiveShareIcon } from "@univerjs/icons";
import { useMemo } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { H } from "./internal-glue.js";
import { K } from "./live-share-live-share.js";
var U = class extends Disposable {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643), H(this, "_sharedOperations", new Set()), H(this, "_reporters", new Set());
  }
  registerSharedOperation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645) {
    return this._sharedOperations["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645), toDisposable(() => this._sharedOperations["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645));
  }
  registerInitialStateReporter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) {
    return this._reporters["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647), toDisposable(() => this._reporters["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647));
  }
  shouldShareOperation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) {
    return this._sharedOperations["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649);
  }
  getInitialStates(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) {
    return Array.from(this._reporters).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651));
  }
};
const Y = {};
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) {
    super(), this._liveShareService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, this._init();
  }
  _init() {
    [SetZoomRatioOperation.id, SetScrollOperation.id, SetWorksheetActiveOperation.id].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 => {
      this.disposeWithMe(this._liveShareService["registerSharedOperation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637));
    });
  }
};
function Z() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 = useDependency(K),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SHEET), undefined, false, []),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = useObservable(useMemo(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 ? defer(() => from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.getLiveShareCoordinator(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.getUnitId()))) : of(null), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165]), null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 ? () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.status$ : null, "idle", false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168]);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 ? jsx(Dropdown, {
    align: "end",
    disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 === "offline",
    className: "univer-box-border univer-min-w-60 univer-bg-gray-900 univer-px-4 univer-py-3 univer-text-gray-900 dark:!univer-bg-gray-0 dark:!univer-text-gray-0",
    overlay: jsx(le, {
      status: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169,
      coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168
    }),
    children: jsx(Button, {
      size: "icon",
      variant: "text",
      disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 === "offline",
      type: "button",
      children: jsx(LiveShareIcon, {})
    })
  }) : null;
}
function le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175) {
  let {
    status: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176,
    coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176) {
    case "idle":
      return jsx(ue, {
        coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177
      });
    case "following":
      return jsx(de, {
        coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177
      });
    case "not-following":
      return jsx(fe, {
        coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177
      });
    case "offline":
      return jsx(me, {});
    case "presenting":
      return jsx(pe, {
        coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177
      });
    default:
      return null;
  }
}
function ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181) {
  let {
    coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181;
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "univer-mb-3\x20univer-w-full\x20univer-text-sm",
      children: "Present this document"
    }), jsx(Button, {
      onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.tryStartPresenting(),
      children: "Start"
    })]
  });
}
function de(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185) {
  let {
    coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185;
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "univer-mb-3 univer-w-full univer-text-sm",
      children: "You're following the presenter"
    }), jsx(Button, {
      onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.stopFollowing(),
      children: "Stop following"
    })]
  });
}
function fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189) {
  let {
    coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189;
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "univer-mb-3 univer-w-full univer-text-sm",
      children: "You're not following the presenter"
    }), jsx(Button, {
      variant: "text",
      onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.startFollowing(),
      children: "Start following"
    })]
  });
}
function pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) {
  let {
    coordinator: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193;
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "univer-mb-3 univer-w-full univer-text-sm",
      children: "You're presenting the document"
    }), jsx(Button, {
      variant: "default",
      onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.stopPresenting(),
      children: "Stop presenting"
    })]
  });
}
function me() {
  return jsx(Fragment, {
    children: "You'are offline."
  });
}
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) {
    super(), this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, this._uiPartsService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, this._mountLiveShare();
  }
  _mountLiveShare() {
    this.disposeWithMe(this._uiPartsService["registerComponent"](BuiltInUIPart.HEADER_MENU, () => connectInjector(Z, this._injector)));
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120
    } = merge({}, Y, this._config);
    this._configService["setConfig"]("live-share.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120);
  }
  onStarting() {
    registerDependencies(this._injector, mergeOverrideWithDependencies([[U], [K], [X], [Q]], this._config["override"])), touchDependencies(this._injector, [[X]]);
  }
  onRendered() {
    touchDependencies(this._injector, [[Q]]);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 as UniverLiveSharePlugin };
export { U, X, Q };
