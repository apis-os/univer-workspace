Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/collaboration-client"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/core"),
  r = require("@univerjs-pro/collaboration"),
  i = require("rxjs");
var a = class extends t.FEnum {
  get CollaborationStatus() {
    return e.CollaborationStatus;
  }
};
t.FEnum["extend"](a);
var o = class extends t.FEventName {
  get CollaborationStatusChanged() {
    return "CollaborationStatusChanged";
  }
};
t.FEventName["extend"](o);
function s(var_core_value_sigFDEA, var_core_value_sig86D0) {
  return function (var_core_value_sig4383, var_core_value_sig186C) {
    var_core_value_sig86D0(var_core_value_sig4383, var_core_value_sig186C, var_core_value_sigFDEA);
  };
}
function c(var_core_value_sig4CD2, var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigA942) {
  var var_core_value_sigA621 = arguments.length,
    var_core_value_sigBBFF = var_core_value_sigA621 < 3 ? var_core_value_sig48CA : var_core_value_sigA942 === null ? var_core_value_sigA942 = Object.getOwnPropertyDescriptor(var_core_value_sig48CA, var_core_value_sig50AF) : var_core_value_sigA942,
    var_core_value_sig8889;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigBBFF = Reflect.decorate(var_core_value_sig4CD2, var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigA942);else {
    for (var var_core_value_sig32F8 = var_core_value_sig4CD2.length - 1; var_core_value_sig32F8 >= 0; var_core_value_sig32F8--) (var_core_value_sig8889 = var_core_value_sig4CD2[var_core_value_sig32F8]) && (var_core_value_sigBBFF = (var_core_value_sigA621 < 3 ? var_core_value_sig8889(var_core_value_sigBBFF) : var_core_value_sigA621 > 3 ? var_core_value_sig8889(var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigBBFF) : var_core_value_sig8889(var_core_value_sig48CA, var_core_value_sig50AF)) || var_core_value_sigBBFF);
  }
  return var_core_value_sigA621 > 3 && var_core_value_sigBBFF && Object.defineProperty(var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigBBFF), var_core_value_sigBBFF;
}
let l = class extends t.FBase {
  constructor(var_core_value_sigD955, var_core_value_sig48BD, var_core_value_sig429F, var_core_value_sigF62A, var_core_value_sig8178) {
    super(), this._handler = var_core_value_sigD955, this._injector = var_core_value_sig48BD, this._univerInstanceService = var_core_value_sig429F, this._snapshotService = var_core_value_sigF62A, this._collaborationController = var_core_value_sig8178;
  }
  async loadSheetAsync(var_core_value_sigE9ED, var_core_value_sigB577) {
    return (await this._snapshotService["loadSheet"](var_core_value_sigE9ED, 0, var_core_value_sigB577)) ? (await this._collaborationController["readyForCollab"](var_core_value_sigE9ED), this._handler["getWorkbook"](var_core_value_sigE9ED)) : null;
  }
  async loadDocAsync(var_core_value_sig9572, var_core_value_sigD873) {
    return (await this._snapshotService["loadDoc"](var_core_value_sig9572, 0, var_core_value_sigD873)) ? (await this._collaborationController["readyForCollab"](var_core_value_sig9572), this._handler["getDocument"](var_core_value_sig9572)) : null;
  }
  async loadBaseAsync(var_core_value_sigA12B, var_core_value_sigF230) {
    return (await this._snapshotService["loadBase"](var_core_value_sigA12B, 0, var_core_value_sigF230)) ? (await this._collaborationController["readyForCollab"](var_core_value_sigA12B), this._handler["getBase"](var_core_value_sigA12B)) : null;
  }
  async loadSlideAsync(var_core_value_sig09B8, var_core_value_sig6F91) {
    return (await this._snapshotService["loadSlide"](var_core_value_sig09B8, 0, var_core_value_sig6F91)) ? (await this._collaborationController["readyForCollab"](var_core_value_sig09B8), this._handler["getPresentation"](var_core_value_sig09B8)) : null;
  }
  async loadBoardAsync(var_core_value_sigF9C7, var_core_value_sig8895) {
    return (await this._snapshotService["loadBoard"](var_core_value_sigF9C7, 0, var_core_value_sig8895)) ? (await this._collaborationController["readyForCollab"](var_core_value_sigF9C7), this._handler["getBoard"](var_core_value_sigF9C7)) : null;
  }
  async loadPdfAsync(var_core_value_sigC80B, var_core_value_sig284F) {
    return (await this._snapshotService["loadPdf"](var_core_value_sigC80B, 0, var_core_value_sig284F)) ? (await this._collaborationController["readyForCollab"](var_core_value_sigC80B), this._handler["getPdf"](var_core_value_sigC80B)) : null;
  }
  subscribeCollaborators(var_core_value_sigE154, var_core_value_sig4632) {
    return (0, n.toDisposable)(this._injector["get"](e.MemberService).waitForRoom$(var_core_value_sigE154).pipe((0, i.switchMap)(var_core_value_sig27E5 => var_core_value_sig27E5.members$)).subscribe(var_core_value_sig8061 => var_core_value_sig4632(Array.from(var_core_value_sig8061.values()))));
  }
  getCollaborationStatus(var_core_value_sig12F2) {
    let var_core_value_sig2259 = this._resolveUnitId(var_core_value_sig12F2);
    if (!var_core_value_sig2259) return e.CollaborationStatus["NOT_COLLAB"];
    let var_core_value_sig9E2F = this._collaborationController["getCollabEntity"](var_core_value_sig2259);
    return (var_core_value_sig9E2F == null ? undefined : var_core_value_sig9E2F.state["status"]) ?? e.CollaborationStatus["NOT_COLLAB"];
  }
  flush(var_core_value_sigD082, var_core_value_sigDBB7 = {}) {
    let var_core_value_sigD0A8 = this._resolveUnitId(var_core_value_sigD082);
    if (!var_core_value_sigD0A8) return Promise.reject(Error("[FCollaboration]: Cannot flush because no unit is focused or specified."));
    let var_core_value_sigF4B9 = this._collaborationController["getCollabEntity"](var_core_value_sigD0A8);
    if (!var_core_value_sigF4B9) return Promise.reject(Error("[FCollaboration]:\x20Unit\x20\x22" + var_core_value_sigD0A8 + '" is not in collaboration mode.'));
    let var_core_value_sig5CEE = var_core_value_sigF4B9.state["status"];
    if (var_core_value_sig5CEE === e.CollaborationStatus["SYNCED"]) return Promise.resolve();
    let var_core_value_sigE92A = u(var_core_value_sigD0A8, var_core_value_sig5CEE);
    if (var_core_value_sigE92A) return Promise.reject(var_core_value_sigE92A);
    let var_core_value_sig362B = var_core_value_sigDBB7.timeout ?? 30000;
    return new Promise((var_core_value_sig4D4C, var_core_value_sigC9E0) => {
      let var_core_value_sig76BA = false,
        var_core_value_sigFBFA = null,
        var_core_value_sigF602 = setTimeout(() => {
          var_core_value_sig76BA = true, var_core_value_sigFBFA == null || var_core_value_sigFBFA.unsubscribe(), var_core_value_sigC9E0(Error('[FCollaboration]: Timed out flushing unit "' + var_core_value_sigD0A8 + "\x22\x20after\x20" + var_core_value_sig362B + "ms."));
        }, var_core_value_sig362B),
        var_core_value_sig1BBD = () => {
          var_core_value_sig76BA = true, clearTimeout(var_core_value_sigF602), var_core_value_sigFBFA == null || var_core_value_sigFBFA.unsubscribe();
        };
      var_core_value_sigFBFA = var_core_value_sigF4B9.status$["subscribe"](var_core_value_sig2AD0 => {
        if (var_core_value_sig76BA) return;
        if (var_core_value_sig2AD0 === e.CollaborationStatus["SYNCED"]) {
          var_core_value_sig1BBD(), var_core_value_sig4D4C();
          return;
        }
        let var_core_value_sig3EEE = u(var_core_value_sigD0A8, var_core_value_sig2AD0);
        var_core_value_sig3EEE && (var_core_value_sig1BBD(), var_core_value_sigC9E0(var_core_value_sig3EEE));
      });
    });
  }
  _resolveUnitId(var_core_value_sig5CA5) {
    var var_core_value_sigE90F;
    return var_core_value_sig5CA5 || ((var_core_value_sigE90F = this._univerInstanceService["getFocusedUnit"]()) == null ? undefined : var_core_value_sigE90F.getUnitId());
  }
};
l = c([s(1, (0, n.Inject)(n.Injector)), s(2, n.IUniverInstanceService), s(3, (0, n.Inject)(r.SnapshotService)), s(4, (0, n.Inject)(e.CollaborationController))], l);
function u(var_core_value_sig5B67, var_core_value_sig1758) {
  return var_core_value_sig1758 === e.CollaborationStatus["CONFLICT"] || var_core_value_sig1758 === e.CollaborationStatus["NOT_COLLAB"] ? Error("[FCollaboration]:\x20Cannot\x20flush\x20unit\x20\x22" + var_core_value_sig5B67 + '" while collaboration status is ' + var_core_value_sig1758 + ".") : null;
}
var d = class extends t.FUniver {
  _initialize(var_core_value_sigEFD4) {
    let var_core_value_sig861B = var_core_value_sigEFD4.get(e.CollaborationController);
    this.disposeWithMe(this.registerEventHandler(this.Event["CollaborationStatusChanged"], () => {
      let var_core_value_sigF704 = new n["DisposableCollection"](),
        var_core_value_sig2BCF = var_core_value_sig861B.entityInit$["subscribe"](var_core_value_sigBC46 => {
          let var_core_value_sig3D7D = var_core_value_sigBC46.status$["subscribe"](var_core_value_sig7524 => {
            let var_core_value_sig2AD8 = {
              unitId: var_core_value_sigBC46.unitID,
              status: var_core_value_sig7524
            };
            this.fireEvent(this.Event["CollaborationStatusChanged"], var_core_value_sig2AD8);
          });
          var_core_value_sigF704.add((0, n.toDisposable)(var_core_value_sig3D7D));
        });
      return var_core_value_sigF704.add((0, n.toDisposable)(var_core_value_sig2BCF)), var_core_value_sigF704;
    }));
  }
  getCollaboration() {
    return this._injector["createInstance"](l, {
      getWorkbook: var_core_value_sig0D69 => this.getWorkbook(var_core_value_sig0D69),
      getDocument: var_core_value_sig480E => this.getDocument(var_core_value_sig480E),
      getPresentation: var_core_value_sig26DB => this.getPresentation(var_core_value_sig26DB),
      getBase: var_core_value_sigF0F9 => this.getBase(var_core_value_sigF0F9),
      getBoard: var_core_value_sig1A0F => this.getBoard(var_core_value_sig1A0F),
      getPdf: var_core_value_sigFBA4 => this.getPdf(var_core_value_sigFBA4)
    });
  }
  loadServerUnit(var_core_value_sig5237, var_core_value_sigBB00, var_core_value_sig7E54) {
    return this._injector["get"](e.DataLoaderService).loadUnit(var_core_value_sig5237, var_core_value_sigBB00, var_core_value_sig7E54);
  }
  loadServerUnitOfRevision(var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig9C9F) {
    return this._injector["get"](e.DataLoaderService).loadUnitOfRevision(var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig9C9F);
  }
};
t.FUniver["extend"](d), Object.defineProperty(exports, "FCollaboration", {
  enumerable: true,
  get: function () {
    return l;
  }
});
