import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { RevertRevisionMutation, UniverCollaborationPlugin, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { HTTPService } from "@univerjs/network";
import { ErrorCode } from "@univerjs/protocol";
import { BehaviorSubject } from "rxjs";
import { L } from "./internal-glue.js";
let Ze = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.Idle = "idle", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.Opening = "opening", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.Ready = "ready", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.LoadingMore = "loading-more", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.Error = "error", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.Closing = "closing", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752;
  }({}),
  Q = class extends Disposable {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299) {
      super(), this._gateway = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, L(this, "_status$", new BehaviorSubject("idle")), L(this, "status$", this._status$["asObservable"]()), L(this, "_versions$", new BehaviorSubject([])), L(this, "versions$", this._versions$["asObservable"]()), L(this, "_currentVersion$", new BehaviorSubject(null)), L(this, "currentVersion$", this._currentVersion$["asObservable"]()), L(this, "_creators$", new BehaviorSubject([])), L(this, "creators$", this._creators$["asObservable"]()), L(this, "_members$", new BehaviorSubject({})), L(this, "members$", this._members$["asObservable"]()), L(this, "_error$", new BehaviorSubject(null)), L(this, "error$", this._error$["asObservable"]()), L(this, "_descriptor", null), L(this, "_query", {}), L(this, "_hasMore", false), L(this, "_lastLabel", ""), L(this, "_sessionGeneration", 0), L(this, "_listRequestGeneration", 0), L(this, "_versionDetails", new Map()), L(this, "_versionDetailRequests", new Map());
    }
    get descriptor() {
      return this._descriptor;
    }
    get currentVersion() {
      return this._currentVersion$["value"];
    }
    get hasMore() {
      return this._hasMore;
    }
    async open(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = {}) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 = ++this._sessionGeneration,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 = ++this._listRequestGeneration;
      this._versionDetails["clear"](), this._versionDetailRequests["clear"](), this._descriptor = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, this._query = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302, this._status$["next"]("opening"), this._error$["next"](null);
      try {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = await this._gateway["fetchVersions"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 !== this._sessionGeneration || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 !== this._listRequestGeneration) return;
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = [Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.unitId)];
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.versions["length"] > 0 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.versions["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 === 0 ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611,
          isCurrent: true
        } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611)), this._versions$["next"](var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1), this._members$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.members), this._currentVersion$["next"](var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1[0]), this._hasMore = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.hasMore, this._lastLabel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.lastLabel, this._status$["next"]("ready"), this._loadCreators(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303);
      } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 !== this._sessionGeneration || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 !== this._listRequestGeneration) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5 instanceof Error ? var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5 : Error(String(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5));
        throw this._error$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648), this._status$["next"]("error"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648;
      }
    }
    _loadCreators(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310) {
      this._gateway["fetchCreators"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 === this._sessionGeneration && this._creators$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650);
      }).catch(() => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 === this._sessionGeneration && this._creators$["next"]([]);
      });
    }
    async loadMore() {
      if (!this._descriptor || !this._hasMore || !this._lastLabel || this._status$["value"] === "loading-more") return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = this._sessionGeneration,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 = ++this._listRequestGeneration;
      this._status$["next"]("loading-more"), this._error$["next"](null);
      try {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = await this._gateway["fetchVersions"](this._descriptor["unitId"], {
          ...this._query,
          lastLabel: this._lastLabel
        });
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 !== this._sessionGeneration || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 !== this._listRequestGeneration) return;
        this._versions$["next"]([...this._versions$["value"], ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.versions]), this._members$["next"]({
          ...this._members$["value"],
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.members
        }), this._hasMore = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.hasMore, this._lastLabel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.lastLabel, this._status$["next"]("ready");
      } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 !== this._sessionGeneration || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 !== this._listRequestGeneration) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52 instanceof Error ? var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52 : Error(String(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52));
        throw this._error$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653), this._status$["next"]("error"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653;
      }
    }
    async loadVersionDetails(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 = this._versionDetails["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = this._versionDetailRequests["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = this._versions$["value"].find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320) throw Error("[HistorySessionService]: Unknown history version " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 + ".");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 = this._sessionGeneration,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 = this._gateway["fetchVersionDetails"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 === this._sessionGeneration ? (this._versionDetails["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) : []).finally(() => {
          this._versionDetailRequests["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 && this._versionDetailRequests["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317);
        });
      return this._versionDetailRequests["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322;
    }
    selectVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 == "string" ? this._versions$["value"].find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330) throw Error("[HistorySessionService]:\x20Unknown\x20history\x20version\x20" + String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) + ".");
      return this._currentVersion$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330;
    }
    close() {
      ++this._sessionGeneration, ++this._listRequestGeneration, this._status$["next"]("closing"), this._descriptor = null, this._query = {}, this._hasMore = false, this._lastLabel = "", this._versionDetails["clear"](), this._versionDetailRequests["clear"](), this._versions$["next"]([]), this._currentVersion$["next"](null), this._creators$["next"]([]), this._members$["next"]({}), this._error$["next"](null), this._status$["next"]("idle");
    }
    dispose() {
      this.close(), this._status$["complete"](), this._versions$["complete"](), this._currentVersion$["complete"](), this._creators$["complete"](), this._members$["complete"](), this._error$["complete"](), super.dispose();
    }
  };
function Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754) {
  return {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754,
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754 + ":current",
    startRevision: 1,
    endRevision: 0,
    creatorName: "",
    creatorNames: [],
    isAnonymous: false,
    commands: [],
    isCurrent: true
  };
}
export { Ze as HistorySessionStatus, Q as HistorySessionService };
