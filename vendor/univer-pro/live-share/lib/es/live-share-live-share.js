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
import { J } from "./live-share-status.js";
let K = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) {
    super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, this._collabSessionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659, H(this, "_entities", new Map()), this._init();
  }
  async getLiveShareCoordinator(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) {
    return this._entities["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) || (await this._startLiveShareCoordinator(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663)), this._entities["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663);
  }
  getLiveShareCoordinatorSync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) {
    return this._entities["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) ?? null;
  }
  _init() {
    this._univerInstanceService["getTypeOfUnitAdded$"](UniverInstanceType.UNIVER_SHEET).pipe(takeUntil(this.dispose$)).subscribe(async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.unit["getUnitId"]();
      this._entities["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) || this._startLiveShareCoordinator(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
    }), this._univerInstanceService["getTypeOfUnitDisposed$"](UniverInstanceType.UNIVER_SHEET).pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.getUnitId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = this._entities["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.dispose();
    });
  }
  async _startLiveShareCoordinator(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = await this._collabSessionService["requireSession"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = this._injector["createInstance"](J, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.init(), this._entities["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669;
  }
};
export { K as LiveShareController };
