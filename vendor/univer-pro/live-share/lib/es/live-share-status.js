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
let q = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.OFFLINE = "offline", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.IDLE = "idle", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.FOLLOWING = "following", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.NOT_FOLLOWING = "not-following", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.PRESENTING = "presenting", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163;
  }({}),
  J = class extends RxDisposable {
    get _status() {
      return this._status$["getValue"]();
    }
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) {
      super(), this._unitID = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673, this._collabSession = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, this._liveShareService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, H(this, "_status$", new BehaviorSubject("idle")), H(this, "status$", this._status$["asObservable"]()), H(this, "_init", false), H(this, "_commandDisposable", null), H(this, "_presenter", null);
    }
    dispose() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = this._commandDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.dispose(), this._status$["next"]("idle"), this._status$["complete"]();
    }
    getStatus() {
      return this._status;
    }
    init() {
      this._init || (this._init = true, this._collabSession["sessionStatus$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => {
        switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621) {
          case SessionStatus.OFFLINE:
            this._handleOffline();
            break;
          case SessionStatus.ONLINE:
            this._handleOnline();
            break;
          default:
        }
      }), this._collabSession["event$"].pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => {
        let {
          eventID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623;
        switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624) {
          case CollaborationEvent.LIVESHARE_NEW_HOST:
            this._handleNewHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
            break;
          case CollaborationEvent.LIVESHARE_OPERATION:
            this._handleOperation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
            break;
          case CollaborationEvent.LIVESHARE_TERMINATE:
            this._handleTerminate();
            break;
          case CollaborationEvent.NEW_CHANGESETS:
            this._handleNewChangeSets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
            break;
          default:
        }
      }));
    }
    tryStartPresenting() {
      this._collabSession["send"]({
        eventID: CollaborationEvent.LIVESHARE_REQUEST_HOST,
        data: {
          unitID: this._unitID,
          userID: this._collabSession["getMemberID"]()
        }
      }, this._unitID);
    }
    stopPresenting() {
      this._status === "presenting" && (this._status$["next"]("idle"), this._collabSession["send"]({
        eventID: CollaborationEvent.LIVESHARE_TERMINATE,
        data: {
          unitID: this._unitID
        }
      }, this._unitID));
    }
    startFollowing() {
      this._status === "not-following" && (this._status$["next"]("following"), this._startFollowing());
    }
    stopFollowing() {
      this._status === "following" && this._stopFollowing();
    }
    _handleNewHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) {
      let {
          presenter: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.data,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = this._collabSession["getMemberID"]();
      this._presenter = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 ? (this._stopFollowing(), this._startPresenting()) : this._status !== "not-following" && (this._stopPresenting(), this._startFollowing());
    }
    _fetchOperations() {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
        eventID: CollaborationEvent.LIVESHARE_FETCH_OPERATIONS
      };
      this._collabSession["send"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, this._unitID);
    }
    _handleTerminate() {
      this._presenter = null, this._status !== "presenting" && this._beIdle();
    }
    _handleNewChangeSets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691) {
      if (this._status === "following" && this._presenter === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.data["memberID"]) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = parseProtocolChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.data).mutations["reverse"]().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.id === InsertSheetMutation.id);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.params["unitId"],
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.params["sheet"].id;
          setTimeout(() => {
            this._commandService["executeCommand"](SetWorksheetActiveOperation.id, {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464
            }, {
              fromCollab: true
            });
          });
        }
      }
    }
    _startPresenting() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = this._commandDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.dispose(), this._status$["next"]("presenting");
      let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = this._commandDisposable = new DisposableCollection();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.add(toDisposable(() => {
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.forEach(({
          subject: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465,
          subscription: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466
        }) => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.complete();
        }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.clear();
      })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.add(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.type !== CommandType.OPERATION || !this._liveShareService["shouldShareOperation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.id)) return;
        let {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630;
        if (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629).subject;else {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = new Subject();
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.pipe(throttleTime(this._configService["getConfig"]("SAME_OPERATION_SHARE_INTERVAL") ?? 200, undefined, {
            trailing: true,
            leading: true
          })).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => {
            this._collabSession["send"]({
              eventID: CollaborationEvent.LIVESHARE_OPERATION,
              data: {
                unitID: this._unitID,
                operations: {
                  [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.id]: {
                    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.id,
                    params: JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.params)
                  }
                }
              }
            }, this._unitID);
          });
          var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, {
            subject: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630,
            subscription: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469
          });
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628);
      })), this._liveShareService["getInitialStates"](this._unitID).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 => this._collabSession["send"]({
        eventID: CollaborationEvent.LIVESHARE_OPERATION,
        data: {
          unitID: this._unitID,
          operations: {
            [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.id]: {
              id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.id,
              params: JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.params)
            }
          }
        }
      }, this._unitID));
    }
    _stopPresenting() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697;
      this._status$["next"]("idle"), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = this._commandDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.dispose(), this._commandDisposable = null;
    }
    _startFollowing() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = this._commandDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.dispose(), this._status$["next"]("following");
    }
    _beIdle() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101;
      this._status$["next"]("idle"), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = this._commandDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.dispose(), this._commandDisposable = null;
    }
    _stopFollowing() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103;
      this._status$["next"]("not-following"), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = this._commandDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.dispose();
    }
    _handleOperation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105) {
      if (["presenting", "not-following", "offline"].includes(this._status) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.data["presenter"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.data["presenter"] === this._collabSession["getMemberID"]()) return;
      this._status === "idle" && this._startFollowing();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.data["operations"];
      Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => {
        this._commandService["executeCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.params ? JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.params) : null, {
          fromCollab: true
        });
      });
    }
    _handleOffline() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109;
      this._status$["next"]("offline"), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = this._commandDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.dispose();
    }
    _handleOnline() {
      this._status$["next"]("idle"), this._fetchOperations();
    }
  };
export { q as LiveShareStatus };
export { J };
