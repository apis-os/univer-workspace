import { CollaborationController, CollaborationStatus, DataLoaderService, MemberService } from "@univerjs-pro/collaboration-client";
import { FBase, FEnum, FEventName, FUniver } from "@univerjs/core/facade";
import { DisposableCollection, IUniverInstanceService, Inject, Injector, toDisposable } from "@univerjs/core";
import { SnapshotService } from "@univerjs-pro/collaboration";
import { switchMap } from "rxjs";
let y = class extends FBase {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) {
    super(), this._handler = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, this._snapshotService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639, this._collaborationController = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640;
  }
  async loadSheetAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) {
    return (await this._snapshotService["loadSheet"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647)) ? (await this._collaborationController["readyForCollab"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646), this._handler["getWorkbook"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646)) : null;
  }
  async loadDocAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) {
    return (await this._snapshotService["loadDoc"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651)) ? (await this._collaborationController["readyForCollab"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650), this._handler["getDocument"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650)) : null;
  }
  async loadBaseAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655) {
    return (await this._snapshotService["loadBase"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655)) ? (await this._collaborationController["readyForCollab"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654), this._handler["getBase"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654)) : null;
  }
  async loadSlideAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) {
    return (await this._snapshotService["loadSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659)) ? (await this._collaborationController["readyForCollab"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658), this._handler["getPresentation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658)) : null;
  }
  async loadBoardAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) {
    return (await this._snapshotService["loadBoard"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663)) ? (await this._collaborationController["readyForCollab"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662), this._handler["getBoard"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662)) : null;
  }
  async loadPdfAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
    return (await this._snapshotService["loadPdf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667)) ? (await this._collaborationController["readyForCollab"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666), this._handler["getPdf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666)) : null;
  }
  subscribeCollaborators(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) {
    return toDisposable(this._injector["get"](MemberService).waitForRoom$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670).pipe(switchMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.members$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671(Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.values()))));
  }
  getCollaborationStatus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 = this._resolveUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675) return CollaborationStatus.NOT_COLLAB;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = this._collaborationController["getCollabEntity"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.state["status"]) ?? CollaborationStatus.NOT_COLLAB;
  }
  flush(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = {}) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = this._resolveUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) return Promise.reject(Error("[FCollaboration]: Cannot flush because no unit is focused or specified."));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = this._collaborationController["getCollabEntity"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683) return Promise.reject(Error('[FCollaboration]: Unit "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 + '" is not in collaboration mode.'));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.state["status"];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 === CollaborationStatus.SYNCED) return Promise.resolve();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) return Promise.reject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685);
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.timeout ?? 30000;
    return new Promise((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613) => {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = null,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = setTimeout(() => {
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613(Error('[FCollaboration]: Timed out flushing unit "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 + "\x22\x20after\x20" + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D + "ms."));
        }, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = () => {
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true, clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.unsubscribe();
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.status$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
        if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A) return;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 === CollaborationStatus.SYNCED) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612();
          return;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463));
      });
    });
  }
  _resolveUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = this._univerInstanceService["getFocusedUnit"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.getUnitId());
  }
};
function b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 === CollaborationStatus.CONFLICT || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 === CollaborationStatus.NOT_COLLAB ? Error('[FCollaboration]: Cannot flush unit "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 + "\x22\x20while\x20collaboration\x20status\x20is\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 + ".") : null;
}
export { y as FCollaboration };
