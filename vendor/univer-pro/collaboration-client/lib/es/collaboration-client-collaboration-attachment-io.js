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
let Bn = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419) {
    this._httpService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419;
  }
  getUploadOptions() {
    return this._getConfig().attachment ?? {};
  }
  async saveAttachment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424 = this.getUploadOptions();
    if (Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.upload) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.upload(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425 = await this._upload(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423);
    return {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.name,
      mimeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.type,
      size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.size,
      sourceType: ImageSourceType.UUID,
      source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425
    };
  }
  async getAttachmentUrl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430 !== ImageSourceType.UUID) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431 = (await this._httpService["get"](this._getSignURL().replace("{fileID}", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429))).body;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.error && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.error["code"] !== ErrorCode.OK) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.error;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.url) throw Error("[CollaborationAttachmentIoService]:\x20failed\x20to\x20resolve\x20attachment\x20URL.");
    return resolveWithBasePath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.url, this._getDownloadEndpointURL());
  }
  async _upload(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436 = this._univerInstanceService["getFocusedUnit"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436.getUnitId();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437) throw Error("[CollaborationAttachmentIoService]: unitId is not found.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438 = new FormData();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438.append("file", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435);
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = this._getUploadFileURL() + "?size=" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435.size["toString"]() + "&source=" + FileSource.UnitEmbedded + "&assign=" + encodeURIComponent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439 = (await this._httpService["post"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10, {
        body: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438
      })).body["FileId"];
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439 != "string" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439) throw Error("[CollaborationAttachmentIoService]: failed to upload attachment.");
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439;
  }
  _getUploadFileURL() {
    return this._getConfig().uploadFileServerUrl ?? "/universer-api/stream/file/upload";
  }
  _getSignURL() {
    return this._getConfig().signUrlServerUrl ?? "/universer-api/file/{fileID}/sign-url";
  }
  _getDownloadEndpointURL() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445 = this._getConfig();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445.downloadEndpointUrl ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445.downloadEndpointUrl : typeof location < "u" ? location.origin : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445.uploadFileServerUrl ?? "";
  }
  _getConfig() {
    return this._configService["getConfig"]("collaboration-client.config") ?? {};
  }
};
function Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461937;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936.maxSize != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461935.size > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936.maxSize) throw Error("[CollaborationAttachmentIoService]: attachment exceeds max size.");
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461937 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936.accept) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461937.length && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936.accept["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461935.type === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461935.name["endsWith"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.endsWith("/*") && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461935.type["startsWith"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.slice(0, -1)))) throw Error("[CollaborationAttachmentIoService]: attachment type is not accepted.");
}
export { Bn as CollaborationAttachmentIoService };
