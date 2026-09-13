import { CollaborationEvent, CompressMutationService, EmptyMutationInfo, ISnapshotServerService, ITransformService, RevisionService, SnapshotService, UniverCollaborationPlugin, b64DecodeUnicode, isTransformChangesetsSuccess, isTransformMutationsWithChangesetFailure, isTransformMutationsWithChangesetSuccess, mapDocumentTypeToUniverInstanceType, parseChangesetToProtocol, parseProtocolChangeset, textEncoder, uuidv4 } from "@univerjs-pro/collaboration";
import { CommandType, DependentOn, Disposable, DisposableCollection, IAuthzIoService, ICommandService, IConfigService, IContextService, IImageIoService, ILogService, IMentionIOService, IPermissionService, IUndoRedoService, IUniverInstanceService, ImageSourceType, ImageUploadStatusType, Inject, Injector, JSONX, LocalUndoRedoService, LocaleService, MentionType, Optional, Plugin, Quantity, Rectangle, RxDisposable, Tools, UniverInstanceType, UserManagerService, Workbook, createIdentifier, generateRandomId, isInternalEditorID, merge, mergeOverrideWithDependencies, registerDependencies, resolveWithBasePath, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { DocStateChangeManagerService, RichTextEditingMutation } from "@univerjs/docs";
import { InsertSheetMutation, SetSelectionsOperation, SheetPermissionInitController, SheetsSelectionsService, WorkbookEditablePermission } from "@univerjs/sheets";
import { BehaviorSubject, ReplaySubject, Subject, concatMap, firstValueFrom, map, merge as mergeLocal, of, shareReplay, take, takeUntil } from "rxjs";
import { CmdRspCode, CombCmd, ErrorCode, FileSource, UnitAction, UnitObject } from "@univerjs/protocol";
import { ITelemetryService } from "@univerjs/telemetry";
import { delay, filter, map as mapLocal, take as takeLocal, takeUntil as takeUntilLocal } from "rxjs/operators";
import { AddSlidePageMutation, EnsureSlideMasterPageMutation, MoveSlidePageMutation, RemoveSlidePageMutation } from "@univerjs-pro/slides";
import { HTTPRequest, HTTPService, ISocketService, MergeInterceptorFactory, ThresholdInterceptorFactory, UniverNetworkPlugin } from "@univerjs/network";
import { UniverLicensePlugin, getGlobalObject } from "@univerjs-pro/license";
import { cbc } from "@noble/ciphers/aes.js";
import { concatBytes, randomBytes, utf8ToBytes } from "@noble/ciphers/utils.js";
import { DRAWING_IMAGE_ALLOW_IMAGE_LIST, getDrawingImageAllowSize } from "@univerjs/drawing";
import { En } from "./collaboration-client-deserialize-to-comb-response.js";
import { Dn } from "./collaboration-client-comb-request.js";
import { R } from "./collaboration-client-plugin-config-key.js";
function kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461919 + "/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920 + "/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921 + "/new_changes";
}
let An = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242) {
    super(), this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238, this._httpService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240, this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241, this._snapshotServerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242;
  }
  _doCreateSocket(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 = this._injector["get"](ISocketService);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249) throw Error("[CollaborationSocketService]: failed to get web socket factory!");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249.createSocket(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250) throw Error("[CollaborationSocketService]: failed to create socket!");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 = new DisposableCollection(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252 = new Subject();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.close$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.add(toDisposable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252.complete()));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 = new Subject();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.error$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.add(toDisposable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.complete()));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254 = new Subject();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.message$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = En(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299);
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.add(toDisposable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.complete()));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 = () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.next(new Event("connection error")), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252.next(new Event("connection error")), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255.close();
      };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255 = {
      memberID: "",
      close$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252.asObservable(),
      error$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.asObservable(),
      open$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.open$,
      message$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.asObservable(),
      send: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.cmd === CombCmd.INGEST) {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.data["eventID"] === CollaborationEvent.SUBMIT_CHANGESET) {
            this._submitChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.data).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
              this._logService["error"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256();
            });
            return;
          }
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.data["eventID"] === CollaborationEvent.FETCH_MISSING) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.data;
            this._fetchMissChangesets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.next({
                cmd: CombCmd.RECV,
                code: CmdRspCode.OK,
                routeKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.data["unitID"],
                routeType: "",
                data: {
                  eventID: CollaborationEvent.PSEUDO_FETCH_MISSING_RESULT,
                  data: {
                    changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464
                  }
                }
              });
            }).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => {
              this._logService["error"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256();
            });
            return;
          }
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.send(Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302));
      },
      close: () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.close(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.dispose();
      }
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255;
  }
  async _submitChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267) {
    let {
        unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268,
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269,
        changeset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267.data,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269,
        memberID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266.memberID,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268,
        changeset: parseChangesetToProtocol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270)
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 = this._configService["getConfig"](R),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 = kn((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271.collabSubmitChangesetUrl) ?? "/universer-api/comb", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269);
    try {
      await this._httpService["post"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272, {
        body: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13
      });
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC518) {
      throw this._logService["error"]("[CollaborationSession]", "submit changeset error!"), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC518;
    }
  }
  async _fetchMissChangesets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280) {
    let {
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281,
      from: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282,
      to: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283,
      unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.data;
    return (await this._snapshotServerService["fetchMissingChangesets"]({
      metadata: undefined
    }, {
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281,
      type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284,
      from: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282,
      to: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283
    })).changesets["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 => ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304.mutations === null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304.mutations === undefined) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304.mutations = []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304));
  }
};
export { An as CollaborationSocketService };
