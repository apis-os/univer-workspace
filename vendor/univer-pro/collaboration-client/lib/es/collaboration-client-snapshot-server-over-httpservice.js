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
import { R } from "./collaboration-client-plugin-config-key.js";
let tr = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602) {
    this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601, this._httpService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602;
  }
  async getUnitOnRev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607;
    let {
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609,
        revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610 = 0
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB38 = this.getSnapshotAPIPath() + "/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609 + "/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608 + "/rev/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 = (await this._httpService["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB38)).body,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611.snapshot) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607.workbook;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.originalMeta;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.originalMeta = textEncoder.encode(b64DecodeUnicode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444)), Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.sheets).forEach(([, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109]) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.originalMeta;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.originalMeta = textEncoder.encode(b64DecodeUnicode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110));
      });
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611;
  }
  async getSheetBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461622) {
    let {
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624,
        blockID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461622,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40 = this._getAPIPrefix() + "/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624 + "/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623 + "/block/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625;
    return (await this._httpService["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40)).body;
  }
  async getDeserializedSheetBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632) {
    let {
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634,
        blockID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB42 = this._getAPIPrefix() + "/block/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634 + "/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633 + "/block/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635;
    return (await this._httpService["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB42)).body;
  }
  async fetchMissingChangesets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642) {
    let {
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644,
        from: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645,
        to: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB44 = this._getAPIPrefix() + "/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644 + "/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643 + "/fetchmissing?from=" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645 + "&to=" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646;
    return (await this._httpService["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB44)).body;
  }
  getSnapshotAPIPath() {
    return this._configService["getConfig"]("SNAPSHOT_URL_KEY") ?? this._getAPIPrefix();
  }
  _getAPIPrefix() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 = this._configService["getConfig"](R);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653.snapshotServerUrl) ?? "/universer-api/snapshot";
  }
  async getResourcesRequest(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB46 = "/universer-api/snapshot/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656.type + "/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656.unitID + "/resources";
    return (await this._httpService["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB46, {
      params: {
        resourceId: JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656.resourceIDs)
      }
    })).body;
  }
  saveSnapshot() {
    throw Error("This method should not be called on the client side!");
  }
  updateSnapshot() {
    throw Error("This method should not be called on the client side!");
  }
  saveSheetBlock() {
    throw Error("This method should not be called on the client side!");
  }
  saveChangeset() {
    throw Error("This\x20method\x20should\x20not\x20be\x20called\x20on\x20the\x20client\x20side!");
  }
  copyFileMeta() {
    throw Error("This method should not be called on the client side!");
  }
  getLatestCsReqIdBySid() {
    throw Error("This method should not be called on the client side!");
  }
};
export { tr as SnapshotServerOverHTTPService };
