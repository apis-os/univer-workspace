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
function Gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803) {
  let {
    unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804,
    mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803;
  return {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805[0].params["subUnitId"] : null
  };
}
let Kt = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553) {
    this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551, this._transformService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552, this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553;
  }
  transformSelections(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 = this._injector["get"](SheetsSelectionsService),
      {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562
      } = Gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560.getWorkbookSelections(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561).getCurrentSelections(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.getActiveSheet()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.getSheetId();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563.length === 0 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = [{
        id: SetSelectionsOperation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564,
          selections: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563)
        }
      }],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 = this._transformService["transformMutationsWithChangeset"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16);
    if (!isTransformMutationsWithChangesetSuccess(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565)) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565.error;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565.m2Prime[0]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.params) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.selections;
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.length) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.length === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16[0].params["selections"].length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) => Rectangle.equals(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.range, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16[0].params["selections"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634].range))) return;
      this._injector["get"](ICommandService).executeCommand(SetSelectionsOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564,
        selections: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566
      });
    }
  }
};
export { Kt as SheetTransformSelectionsService };
