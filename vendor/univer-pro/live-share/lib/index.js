import { CollaborationEvent as var_core_value_sigE627, parseProtocolChangeset as var_core_value_sigEF3E } from "@univerjs-pro/collaboration";
import { CollaborationSessionService as var_core_value_sig273D, SessionStatus as var_core_value_sig9A0D, UniverCollaborationClientPlugin as var_core_value_sigA319 } from "@univerjs-pro/collaboration-client";
import { CommandType as var_core_value_sig2D58, DependentOn as var_core_value_sig223F, Disposable as var_core_value_sigD749, DisposableCollection as var_core_value_sigCFFA, ICommandService as var_core_value_sig58C1, IConfigService as var_core_value_sig5090, IUniverInstanceService as var_core_value_sigC368, Inject as var_core_value_sigAD56, Injector as var_core_value_sigDB4A, Plugin as var_core_value_sig6418, RxDisposable as var_core_value_sig1896, UniverInstanceType as var_core_value_sig0285, merge as var_core_value_sig777D, mergeOverrideWithDependencies as var_core_value_sig3F4C, registerDependencies as var_core_value_sigD65A, toDisposable as var_core_value_sig5A13, touchDependencies as var_core_value_sigF593 } from "@univerjs/core";
import { InsertSheetMutation as var_core_value_sig3607, SetWorksheetActiveOperation as var_core_value_sigB512 } from "@univerjs/sheets";
import { BehaviorSubject as var_core_value_sigF2E6, Subject as var_core_value_sig34C8, defer as var_core_value_sigB744, from as var_core_value_sigEAE2, of as var_core_value_sigE68A } from "rxjs";
import { takeUntil as var_core_value_sig3E68, throttleTime as var_core_value_sigF4C5 } from "rxjs/operators";
import { UniverLicensePlugin as var_core_value_sig5410 } from "@univerjs-pro/license";
import { SetScrollOperation as var_core_value_sig492F, SetZoomRatioOperation as var_core_value_sig8EA0 } from "@univerjs/sheets-ui";
import { BuiltInUIPart as var_core_value_sigA6F6, IUIPartsService as var_core_value_sigCDDA, connectInjector as var_core_value_sigE243, useDependency as var_core_value_sig74A8, useObservable as var_core_value_sig21B2 } from "@univerjs/ui";
import { Button as var_core_value_sigDE08, Dropdown as var_core_value_sigACCB } from "@univerjs/design";
import { LiveShareIcon as var_core_value_sig7F33 } from "@univerjs/icons";
import { useMemo as var_core_value_sig0C53 } from "react";
import { Fragment as var_core_value_sigEA04, jsx as var_core_value_sig7A62, jsxs as var_core_value_sig8109 } from "react/jsx-runtime";
function z(var_core_value_sigA942) {
  "@babel/helpers - typeof";

  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig186C) {
    return typeof var_core_value_sig186C;
  } : function (var_core_value_sigD955) {
    return var_core_value_sigD955 && typeof Symbol == "function" && var_core_value_sigD955.constructor === Symbol && var_core_value_sigD955 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigD955;
  }, z(var_core_value_sigA942);
}
function B(var_core_value_sigA621, var_core_value_sigBBFF) {
  if (z(var_core_value_sigA621) != "object" || !var_core_value_sigA621) return var_core_value_sigA621;
  var var_core_value_sig8889 = var_core_value_sigA621[Symbol.toPrimitive];
  if (var_core_value_sig8889 !== undefined) {
    var var_core_value_sig32F8 = var_core_value_sig8889.call(var_core_value_sigA621, var_core_value_sigBBFF || "default");
    if (z(var_core_value_sig32F8) != "object") return var_core_value_sig32F8;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigBBFF === "string" ? String : Number)(var_core_value_sigA621);
}
function V(var_core_value_sig5B67) {
  var var_core_value_sig1758 = B(var_core_value_sig5B67, "string");
  return z(var_core_value_sig1758) == "symbol" ? var_core_value_sig1758 : var_core_value_sig1758 + "";
}
function H(var_core_value_sig4805, var_core_value_sigE67E, var_core_value_sig2902) {
  return (var_core_value_sigE67E = V(var_core_value_sigE67E)) in var_core_value_sig4805 ? Object.defineProperty(var_core_value_sig4805, var_core_value_sigE67E, {
    value: var_core_value_sig2902,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig4805[var_core_value_sigE67E] = var_core_value_sig2902, var_core_value_sig4805;
}
var U = class extends var_core_value_sigD749 {
  constructor(...var_core_value_sig48BD) {
    super(...var_core_value_sig48BD), H(this, "_sharedOperations", new Set()), H(this, "_reporters", new Set());
  }
  registerSharedOperation(var_core_value_sig429F) {
    return this._sharedOperations["add"](var_core_value_sig429F), var_core_value_sig5A13(() => this._sharedOperations["delete"](var_core_value_sig429F));
  }
  registerInitialStateReporter(var_core_value_sigF62A) {
    return this._reporters["add"](var_core_value_sigF62A), var_core_value_sig5A13(() => this._reporters["delete"](var_core_value_sigF62A));
  }
  shouldShareOperation(var_core_value_sig8178) {
    return this._sharedOperations["has"](var_core_value_sig8178);
  }
  getInitialStates(var_core_value_sigE9ED) {
    return Array.from(this._reporters).map(var_core_value_sig8061 => var_core_value_sig8061(var_core_value_sigE9ED));
  }
};
function W(var_core_value_sig9989, var_core_value_sig698E) {
  return function (var_core_value_sigB577, var_core_value_sig9572) {
    var_core_value_sig698E(var_core_value_sigB577, var_core_value_sig9572, var_core_value_sig9989);
  };
}
function G(var_core_value_sig2809, var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8) {
  var var_core_value_sigE9A7 = arguments.length,
    var_core_value_sigBECE = var_core_value_sigE9A7 < 3 ? var_core_value_sig2DAB : var_core_value_sig20C8 === null ? var_core_value_sig20C8 = Object.getOwnPropertyDescriptor(var_core_value_sig2DAB, var_core_value_sig877E) : var_core_value_sig20C8,
    var_core_value_sig1B22;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigBECE = Reflect.decorate(var_core_value_sig2809, var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8);else {
    for (var var_core_value_sig7F72 = var_core_value_sig2809.length - 1; var_core_value_sig7F72 >= 0; var_core_value_sig7F72--) (var_core_value_sig1B22 = var_core_value_sig2809[var_core_value_sig7F72]) && (var_core_value_sigBECE = (var_core_value_sigE9A7 < 3 ? var_core_value_sig1B22(var_core_value_sigBECE) : var_core_value_sigE9A7 > 3 ? var_core_value_sig1B22(var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sigBECE) : var_core_value_sig1B22(var_core_value_sig2DAB, var_core_value_sig877E)) || var_core_value_sigBECE);
  }
  return var_core_value_sigE9A7 > 3 && var_core_value_sigBECE && Object.defineProperty(var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sigBECE), var_core_value_sigBECE;
}
let K = class extends var_core_value_sig1896 {
  constructor(var_core_value_sigD873, var_core_value_sigA12B, var_core_value_sigF230) {
    super(), this._univerInstanceService = var_core_value_sigD873, this._injector = var_core_value_sigA12B, this._collabSessionService = var_core_value_sigF230, H(this, "_entities", new Map()), this._init();
  }
  async getLiveShareCoordinator(var_core_value_sig09B8) {
    return this._entities["has"](var_core_value_sig09B8) || (await this._startLiveShareCoordinator(var_core_value_sig09B8)), this._entities["get"](var_core_value_sig09B8);
  }
  getLiveShareCoordinatorSync(var_core_value_sig6F91) {
    return this._entities["get"](var_core_value_sig6F91) ?? null;
  }
  _init() {
    this._univerInstanceService["getTypeOfUnitAdded$"](var_core_value_sig0285.UNIVER_SHEET).pipe(var_core_value_sig3E68(this.dispose$)).subscribe(async var_core_value_sig4D4C => {
      let var_core_value_sigC9E0 = var_core_value_sig4D4C.unit["getUnitId"]();
      this._entities["has"](var_core_value_sigC9E0) || this._startLiveShareCoordinator(var_core_value_sigC9E0);
    }), this._univerInstanceService["getTypeOfUnitDisposed$"](var_core_value_sig0285.UNIVER_SHEET).pipe(var_core_value_sig3E68(this.dispose$)).subscribe(var_core_value_sig76BA => {
      let var_core_value_sigFBFA = var_core_value_sig76BA.getUnitId(),
        var_core_value_sigF602 = this._entities["get"](var_core_value_sigFBFA);
      var_core_value_sigF602 == null || var_core_value_sigF602.dispose();
    });
  }
  async _startLiveShareCoordinator(var_core_value_sigF9C7) {
    let var_core_value_sig8895 = await this._collabSessionService["requireSession"](var_core_value_sigF9C7),
      var_core_value_sigC80B = this._injector["createInstance"](J, var_core_value_sigF9C7, var_core_value_sig8895);
    return var_core_value_sigC80B.init(), this._entities["set"](var_core_value_sigF9C7, var_core_value_sigC80B), var_core_value_sigC80B;
  }
};
K = G([W(0, var_core_value_sigC368), W(1, var_core_value_sigAD56(var_core_value_sigDB4A)), W(2, var_core_value_sigAD56(var_core_value_sig273D))], K);
let q = function (var_core_value_sig7B2A) {
    return var_core_value_sig7B2A.OFFLINE = "offline", var_core_value_sig7B2A.IDLE = "idle", var_core_value_sig7B2A.FOLLOWING = "following", var_core_value_sig7B2A.NOT_FOLLOWING = "not-following", var_core_value_sig7B2A.PRESENTING = "presenting", var_core_value_sig7B2A;
  }({}),
  J = class extends var_core_value_sig1896 {
    get _status() {
      return this._status$["getValue"]();
    }
    constructor(var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632, var_core_value_sig12F2, var_core_value_sig2259) {
      super(), this._unitID = var_core_value_sig284F, this._collabSession = var_core_value_sigE154, this._configService = var_core_value_sig4632, this._liveShareService = var_core_value_sig12F2, this._commandService = var_core_value_sig2259, H(this, "_status$", new var_core_value_sigF2E6("idle")), H(this, "status$", this._status$["asObservable"]()), H(this, "_init", false), H(this, "_commandDisposable", null), H(this, "_presenter", null);
    }
    dispose() {
      var var_core_value_sig9E2F;
      (var_core_value_sig9E2F = this._commandDisposable) == null || var_core_value_sig9E2F.dispose(), this._status$["next"]("idle"), this._status$["complete"]();
    }
    getStatus() {
      return this._status;
    }
    init() {
      this._init || (this._init = true, this._collabSession["sessionStatus$"].pipe(var_core_value_sig3E68(this.dispose$)).subscribe(var_core_value_sig1BBD => {
        switch (var_core_value_sig1BBD) {
          case var_core_value_sig9A0D.OFFLINE:
            this._handleOffline();
            break;
          case var_core_value_sig9A0D.ONLINE:
            this._handleOnline();
            break;
          default:
        }
      }), this._collabSession["event$"].pipe(var_core_value_sig3E68(this.dispose$)).subscribe(var_core_value_sigF704 => {
        let {
          eventID: var_core_value_sig2BCF
        } = var_core_value_sigF704;
        switch (var_core_value_sig2BCF) {
          case var_core_value_sigE627.LIVESHARE_NEW_HOST:
            this._handleNewHost(var_core_value_sigF704);
            break;
          case var_core_value_sigE627.LIVESHARE_OPERATION:
            this._handleOperation(var_core_value_sigF704);
            break;
          case var_core_value_sigE627.LIVESHARE_TERMINATE:
            this._handleTerminate();
            break;
          case var_core_value_sigE627.NEW_CHANGESETS:
            this._handleNewChangeSets(var_core_value_sigF704);
            break;
          default:
        }
      }));
    }
    tryStartPresenting() {
      this._collabSession["send"]({
        eventID: var_core_value_sigE627.LIVESHARE_REQUEST_HOST,
        data: {
          unitID: this._unitID,
          userID: this._collabSession["getMemberID"]()
        }
      }, this._unitID);
    }
    stopPresenting() {
      this._status === "presenting" && (this._status$["next"]("idle"), this._collabSession["send"]({
        eventID: var_core_value_sigE627.LIVESHARE_TERMINATE,
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
    _handleNewHost(var_core_value_sigD082) {
      let {
          presenter: var_core_value_sigDBB7
        } = var_core_value_sigD082.data,
        var_core_value_sigD0A8 = this._collabSession["getMemberID"]();
      this._presenter = var_core_value_sigDBB7, var_core_value_sigDBB7 === var_core_value_sigD0A8 ? (this._stopFollowing(), this._startPresenting()) : this._status !== "not-following" && (this._stopPresenting(), this._startFollowing());
    }
    _fetchOperations() {
      let var_core_value_sigF4B9 = {
        eventID: var_core_value_sigE627.LIVESHARE_FETCH_OPERATIONS
      };
      this._collabSession["send"](var_core_value_sigF4B9, this._unitID);
    }
    _handleTerminate() {
      this._presenter = null, this._status !== "presenting" && this._beIdle();
    }
    _handleNewChangeSets(var_core_value_sig5CEE) {
      if (this._status === "following" && this._presenter === var_core_value_sig5CEE.data["memberID"]) {
        let var_core_value_sig0D69 = var_core_value_sigEF3E(var_core_value_sig5CEE.data).mutations["reverse"]().find(var_core_value_sig2AD8 => var_core_value_sig2AD8.id === var_core_value_sig3607.id);
        if (var_core_value_sig0D69) {
          let var_core_value_sig2AD0 = var_core_value_sig0D69.params["unitId"],
            var_core_value_sig3EEE = var_core_value_sig0D69.params["sheet"].id;
          setTimeout(() => {
            this._commandService["executeCommand"](var_core_value_sigB512.id, {
              unitId: var_core_value_sig2AD0,
              subUnitId: var_core_value_sig3EEE
            }, {
              fromCollab: true
            });
          });
        }
      }
    }
    _startPresenting() {
      var var_core_value_sigE92A;
      (var_core_value_sigE92A = this._commandDisposable) == null || var_core_value_sigE92A.dispose(), this._status$["next"]("presenting");
      let var_core_value_sig362B = new Map(),
        var_core_value_sig5CA5 = this._commandDisposable = new var_core_value_sigCFFA();
      var_core_value_sig5CA5.add(var_core_value_sig5A13(() => {
        var_core_value_sig362B.forEach(({
          subject: var_core_value_sigBC46,
          subscription: var_core_value_sig3D7D
        }) => {
          var_core_value_sig3D7D.unsubscribe(), var_core_value_sigBC46.complete();
        }), var_core_value_sig362B.clear();
      })), var_core_value_sig5CA5.add(this._commandService["onCommandExecuted"](var_core_value_sig480E => {
        if (var_core_value_sig480E.type !== var_core_value_sig2D58.OPERATION || !this._liveShareService["shouldShareOperation"](var_core_value_sig480E.id)) return;
        let {
            id: var_core_value_sig26DB
          } = var_core_value_sig480E,
          var_core_value_sigF0F9;
        if (var_core_value_sig362B.has(var_core_value_sig26DB)) var_core_value_sigF0F9 = var_core_value_sig362B.get(var_core_value_sig26DB).subject;else {
          var_core_value_sigF0F9 = new var_core_value_sig34C8();
          let var_core_value_sig27E5 = var_core_value_sigF0F9.pipe(var_core_value_sigF4C5(this._configService["getConfig"]("SAME_OPERATION_SHARE_INTERVAL") ?? 200, undefined, {
            trailing: true,
            leading: true
          })).subscribe(var_core_value_sig7524 => {
            this._collabSession["send"]({
              eventID: var_core_value_sigE627.LIVESHARE_OPERATION,
              data: {
                unitID: this._unitID,
                operations: {
                  [var_core_value_sig7524.id]: {
                    id: var_core_value_sig7524.id,
                    params: JSON.stringify(var_core_value_sig7524.params)
                  }
                }
              }
            }, this._unitID);
          });
          var_core_value_sig362B.set(var_core_value_sig26DB, {
            subject: var_core_value_sigF0F9,
            subscription: var_core_value_sig27E5
          });
        }
        var_core_value_sigF0F9.next(var_core_value_sig480E);
      })), this._liveShareService["getInitialStates"](this._unitID).forEach(var_core_value_sig1A0F => this._collabSession["send"]({
        eventID: var_core_value_sigE627.LIVESHARE_OPERATION,
        data: {
          unitID: this._unitID,
          operations: {
            [var_core_value_sig1A0F.id]: {
              id: var_core_value_sig1A0F.id,
              params: JSON.stringify(var_core_value_sig1A0F.params)
            }
          }
        }
      }, this._unitID));
    }
    _stopPresenting() {
      var var_core_value_sigE90F;
      this._status$["next"]("idle"), (var_core_value_sigE90F = this._commandDisposable) == null || var_core_value_sigE90F.dispose(), this._commandDisposable = null;
    }
    _startFollowing() {
      var var_core_value_sigEFD4;
      (var_core_value_sigEFD4 = this._commandDisposable) == null || var_core_value_sigEFD4.dispose(), this._status$["next"]("following");
    }
    _beIdle() {
      var var_core_value_sig861B;
      this._status$["next"]("idle"), (var_core_value_sig861B = this._commandDisposable) == null || var_core_value_sig861B.dispose(), this._commandDisposable = null;
    }
    _stopFollowing() {
      var var_core_value_sig5237;
      this._status$["next"]("not-following"), (var_core_value_sig5237 = this._commandDisposable) == null || var_core_value_sig5237.dispose();
    }
    _handleOperation(var_core_value_sigBB00) {
      if (["presenting", "not-following", "offline"].includes(this._status) || !var_core_value_sigBB00.data["presenter"] || var_core_value_sigBB00.data["presenter"] === this._collabSession["getMemberID"]()) return;
      this._status === "idle" && this._startFollowing();
      let var_core_value_sig7E54 = var_core_value_sigBB00.data["operations"];
      Object.values(var_core_value_sig7E54).forEach(var_core_value_sigFBA4 => {
        this._commandService["executeCommand"](var_core_value_sigFBA4.id, var_core_value_sigFBA4.params ? JSON.parse(var_core_value_sigFBA4.params) : null, {
          fromCollab: true
        });
      });
    }
    _handleOffline() {
      var var_core_value_sig9A8D;
      this._status$["next"]("offline"), (var_core_value_sig9A8D = this._commandDisposable) == null || var_core_value_sig9A8D.dispose();
    }
    _handleOnline() {
      this._status$["next"]("idle"), this._fetchOperations();
    }
  };
J = G([W(2, var_core_value_sig5090), W(3, var_core_value_sigAD56(U)), W(4, var_core_value_sig58C1)], J);
var se = "@univerjs-pro/live-share",
  ce = "1.0.0-insiders.20260907-70fc579";
const Y = {};
let X = class extends var_core_value_sigD749 {
  constructor(var_core_value_sigC259) {
    super(), this._liveShareService = var_core_value_sigC259, this._init();
  }
  _init() {
    [var_core_value_sig8EA0.id, var_core_value_sig492F.id, var_core_value_sigB512.id].forEach(var_core_value_sig4383 => {
      this.disposeWithMe(this._liveShareService["registerSharedOperation"](var_core_value_sig4383));
    });
  }
};
X = G([W(0, var_core_value_sigAD56(U))], X);
function Z() {
  let var_core_value_sig06CD = var_core_value_sig74A8(K),
    var_core_value_sigA5F1 = var_core_value_sig74A8(var_core_value_sigC368),
    var_core_value_sig97A2 = var_core_value_sig21B2(() => var_core_value_sigA5F1.getCurrentTypeOfUnit$(var_core_value_sig0285.UNIVER_SHEET), undefined, false, []),
    var_core_value_sig07E9 = var_core_value_sig21B2(var_core_value_sig0C53(() => var_core_value_sig97A2 ? var_core_value_sigB744(() => var_core_value_sigEAE2(var_core_value_sig06CD.getLiveShareCoordinator(var_core_value_sig97A2.getUnitId()))) : var_core_value_sigE68A(null), [var_core_value_sig97A2, var_core_value_sig06CD]), null),
    var_core_value_sig4F59 = var_core_value_sig21B2(var_core_value_sig07E9 ? () => var_core_value_sig07E9.status$ : null, "idle", false, [var_core_value_sig07E9]);
  return var_core_value_sig07E9 ? var_core_value_sig7A62(var_core_value_sigACCB, {
    align: "end",
    disabled: var_core_value_sig4F59 === "offline",
    className: "univer-box-border univer-min-w-60 univer-bg-gray-900 univer-px-4 univer-py-3 univer-text-gray-900 dark:!univer-bg-gray-0 dark:!univer-text-gray-0",
    overlay: var_core_value_sig7A62(le, {
      status: var_core_value_sig4F59,
      coordinator: var_core_value_sig07E9
    }),
    children: var_core_value_sig7A62(var_core_value_sigDE08, {
      size: "icon",
      variant: "text",
      disabled: var_core_value_sig4F59 === "offline",
      type: "button",
      children: var_core_value_sig7A62(var_core_value_sig7F33, {})
    })
  }) : null;
}
function le(var_core_value_sigF564) {
  let {
    status: var_core_value_sig8CFA,
    coordinator: var_core_value_sig2E11
  } = var_core_value_sigF564;
  switch (var_core_value_sig8CFA) {
    case "idle":
      return var_core_value_sig7A62(ue, {
        coordinator: var_core_value_sig2E11
      });
    case "following":
      return var_core_value_sig7A62(de, {
        coordinator: var_core_value_sig2E11
      });
    case "not-following":
      return var_core_value_sig7A62(fe, {
        coordinator: var_core_value_sig2E11
      });
    case "offline":
      return var_core_value_sig7A62(me, {});
    case "presenting":
      return var_core_value_sig7A62(pe, {
        coordinator: var_core_value_sig2E11
      });
    default:
      return null;
  }
}
function ue(var_core_value_sig5B69) {
  let {
    coordinator: var_core_value_sigB098
  } = var_core_value_sig5B69;
  return var_core_value_sig8109(var_core_value_sigEA04, {
    children: [var_core_value_sig7A62("div", {
      className: "univer-mb-3\x20univer-w-full\x20univer-text-sm",
      children: "Present this document"
    }), var_core_value_sig7A62(var_core_value_sigDE08, {
      onClick: () => var_core_value_sigB098.tryStartPresenting(),
      children: "Start"
    })]
  });
}
function de(var_core_value_sigCE71) {
  let {
    coordinator: var_core_value_sig21D8
  } = var_core_value_sigCE71;
  return var_core_value_sig8109(var_core_value_sigEA04, {
    children: [var_core_value_sig7A62("div", {
      className: "univer-mb-3 univer-w-full univer-text-sm",
      children: "You're following the presenter"
    }), var_core_value_sig7A62(var_core_value_sigDE08, {
      onClick: () => var_core_value_sig21D8.stopFollowing(),
      children: "Stop following"
    })]
  });
}
function fe(var_core_value_sig2B65) {
  let {
    coordinator: var_core_value_sigD7EA
  } = var_core_value_sig2B65;
  return var_core_value_sig8109(var_core_value_sigEA04, {
    children: [var_core_value_sig7A62("div", {
      className: "univer-mb-3 univer-w-full univer-text-sm",
      children: "You're not following the presenter"
    }), var_core_value_sig7A62(var_core_value_sigDE08, {
      variant: "text",
      onClick: () => var_core_value_sigD7EA.startFollowing(),
      children: "Start following"
    })]
  });
}
function pe(var_core_value_sigB33B) {
  let {
    coordinator: var_core_value_sig24B9
  } = var_core_value_sigB33B;
  return var_core_value_sig8109(var_core_value_sigEA04, {
    children: [var_core_value_sig7A62("div", {
      className: "univer-mb-3 univer-w-full univer-text-sm",
      children: "You're presenting the document"
    }), var_core_value_sig7A62(var_core_value_sigDE08, {
      variant: "default",
      onClick: () => var_core_value_sig24B9.stopPresenting(),
      children: "Stop presenting"
    })]
  });
}
function me() {
  return var_core_value_sig7A62(var_core_value_sigEA04, {
    children: "You'are offline."
  });
}
let Q = class extends var_core_value_sigD749 {
  constructor(var_core_value_sig9C9F, var_core_value_sigFDEA) {
    super(), this._injector = var_core_value_sig9C9F, this._uiPartsService = var_core_value_sigFDEA, this._mountLiveShare();
  }
  _mountLiveShare() {
    this.disposeWithMe(this._uiPartsService["registerComponent"](var_core_value_sigA6F6.HEADER_MENU, () => var_core_value_sigE243(Z, this._injector)));
  }
};
Q = G([W(0, var_core_value_sigAD56(var_core_value_sigDB4A)), W(1, var_core_value_sigCDDA)], Q);
let $ = class extends var_core_value_sig6418 {
  constructor(var_core_value_sig86D0 = Y, var_core_value_sig4CD2, var_core_value_sig48CA) {
    super(), this._config = var_core_value_sig86D0, this._injector = var_core_value_sig4CD2, this._configService = var_core_value_sig48CA;
    let {
      ...var_core_value_sig50AF
    } = var_core_value_sig777D({}, Y, this._config);
    this._configService["setConfig"]("live-share.config", var_core_value_sig50AF);
  }
  onStarting() {
    var_core_value_sigD65A(this._injector, var_core_value_sig3F4C([[U], [K], [X], [Q]], this._config["override"])), var_core_value_sigF593(this._injector, [[X]]);
  }
  onRendered() {
    var_core_value_sigF593(this._injector, [[Q]]);
  }
};
H($, "type", var_core_value_sig0285.UNIVER_UNKNOWN), H($, "pluginName", "UNIVER_LIVE_SHARE_PLUGIN"), H($, "packageName", se), H($, "version", ce), $ = G([var_core_value_sig223F(var_core_value_sig5410, var_core_value_sigA319), W(1, var_core_value_sigAD56(var_core_value_sigDB4A)), W(2, var_core_value_sig5090)], $);
export { K as LiveShareController, q as LiveShareStatus, $ as UniverLiveSharePlugin };
