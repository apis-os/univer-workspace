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
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962 } from "./collaboration-client-collaboration-entity.js";
let wn = class extends var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221), this.unitID = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, this.type = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209;
  }
  async _init() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 = await super._init();
    return this.disposeWithMe(this._commandService["onMutationExecutedForCollab"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.type !== CommandType.MUTATION || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.fromCollab || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.onlyLocal) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.params;
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.unitId) !== this.unitID) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_SEND)([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287], this._univerInstanceService) || [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287];
      this._onLocalMutation(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12[0]);
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236;
  }
};
export { wn as PdfCollaborationEntity };
