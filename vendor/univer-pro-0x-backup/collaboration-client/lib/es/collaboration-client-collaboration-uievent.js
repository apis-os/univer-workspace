import{CollaborationEvent,CompressMutationService,EmptyMutationInfo,ISnapshotServerService,ITransformService,RevisionService,SnapshotService,UniverCollaborationPlugin,b64DecodeUnicode,isTransformChangesetsSuccess,isTransformMutationsWithChangesetFailure,isTransformMutationsWithChangesetSuccess,mapDocumentTypeToUniverInstanceType,parseChangesetToProtocol,parseProtocolChangeset,textEncoder,uuidv4}from"@univerjs-pro/collaboration";
import{CommandType,DependentOn,Disposable,DisposableCollection,IAuthzIoService,ICommandService,IConfigService,IContextService,IImageIoService,ILogService,IMentionIOService,IPermissionService,IUndoRedoService,IUniverInstanceService,ImageSourceType,ImageUploadStatusType,Inject,Injector,JSONX,LocalUndoRedoService,LocaleService,MentionType,Optional,Plugin,Quantity,Rectangle,RxDisposable,Tools,UniverInstanceType,UserManagerService,Workbook,createIdentifier,generateRandomId,isInternalEditorID,merge,mergeOverrideWithDependencies,registerDependencies,resolveWithBasePath,sequenceExecute,toDisposable,touchDependencies}from"@univerjs/core";
import{DocStateChangeManagerService,RichTextEditingMutation}from"@univerjs/docs";
import{InsertSheetMutation,SetSelectionsOperation,SheetPermissionInitController,SheetsSelectionsService,WorkbookEditablePermission}from"@univerjs/sheets";
import{BehaviorSubject,ReplaySubject,Subject,concatMap,firstValueFrom,map,merge as mergeLocal,of,shareReplay,take,takeUntil}from"rxjs";
import{CmdRspCode,CombCmd,ErrorCode,FileSource,UnitAction,UnitObject}from"@univerjs/protocol";
import{ITelemetryService}from"@univerjs/telemetry";
import{delay,filter,map as mapLocal,take as takeLocal,takeUntil as takeUntilLocal}from"rxjs/operators";
import{AddSlidePageMutation,EnsureSlideMasterPageMutation,MoveSlidePageMutation,RemoveSlidePageMutation}from"@univerjs-pro/slides";
import{HTTPRequest,HTTPService,ISocketService,MergeInterceptorFactory,ThresholdInterceptorFactory,UniverNetworkPlugin}from"@univerjs/network";
import{UniverLicensePlugin,getGlobalObject}from"@univerjs-pro/license";
import{cbc}from"@noble/ciphers/aes.js";
import{concatBytes,randomBytes,utf8ToBytes}from"@noble/ciphers/utils.js";
import{DRAWING_IMAGE_ALLOW_IMAGE_LIST,getDrawingImageAllowSize}from"@univerjs/drawing";
import { z } from "./internal-glue.js";
var B=class{constructor(){z(this,"_event$",new Subject()),z(this,"event$",this._event$["asObservable"]());}emitEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451){this._event$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451);}},kt=class{constructor(){z(this,"_commentUpdate$",new Subject()),z(this,"commentUpdate$",this._commentUpdate$["asObservable"]());}onCommentUpdate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453){this._commentUpdate$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453);}};

export { B as CollaborationUIEventService, kt as CommentService };
