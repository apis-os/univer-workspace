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
let Zn = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557) {
    this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556, this._HTTPService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557;
  }
  _getAPIPrefixPath() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560 = this._configService["getConfig"](R);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560.authzUrl) ?? "/universer-api/authz";
  }
  async list(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36 = this._getAPIPrefixPath() + "/collaborator";
    return {
      list: [{
        title: "People",
        mentions: (await this._HTTPService["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36, {
          params: {
            objectID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562.unitId,
            unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562.unitId
          }
        })).body["collaborators"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 => ({
          objectId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.id,
          name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.subject["name"],
          metadata: {
            icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.subject["avatar"]
          },
          label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.subject["name"],
          objectType: MentionType.PERSON
        })),
        metadata: {},
        type: MentionType.PERSON
      }]
    };
  }
};
export { Zn as MentionIoHttpService };
