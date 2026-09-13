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
let nr = class extends LocalUndoRedoService {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662), this._transformService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663, this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664;
  }
  transformUndoRedo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673 = this._getUndoStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673) try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 = this._transformStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672);
      this._substituteUndoStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC524) {
      this._logService["error"]("[CollaborationUndoRedoService]", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC524), this._clearUndo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671);
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674 = this._getRedoStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674) try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 = this._transformStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672);
      this._substituteRedoStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC526) {
      this._logService["error"](var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC526), this._clearRedo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671);
    }
  }
  _clearUndo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680 = this._getUndoStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680.length = 0, this._updateStatus());
  }
  _clearRedo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684 = this._getRedoStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.length = 0, this._updateStatus());
  }
  _substituteUndoStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688) {
    this._undoStacks["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688), this._updateStatus();
  }
  _substituteRedoStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692) {
    this._redoStacks["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692), this._updateStatus();
  }
  _transformStack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461697 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2--) {
      let {
          unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
          undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
          redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = this._transformService["transformMutationsWithChangeset"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = this._transformService["transformMutationsWithChangeset"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115);
      if (isTransformMutationsWithChangesetFailure(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116) || isTransformMutationsWithChangesetFailure(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117)) {
        this._logService["error"]("[CollaborationUndoRedoService]", "transformStack\x20failed!", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117);
        break;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461697 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.c1Prime, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.c1Prime, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
        undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.m2Prime,
        redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.m2Prime
      });
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.reverse();
  }
};
export { nr as CollaborativeUndoRedoService };
