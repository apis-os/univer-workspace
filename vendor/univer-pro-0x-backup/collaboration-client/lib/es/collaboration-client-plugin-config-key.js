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
const R="collaboration-client.config",mt={},ht="ws://127.0.0.1:8000/universer-api/comb/connect",gt="/universer-api/user/session-ticket",var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62="HEARTBEAT_INTERVAL",vt="HEARTBEAT_TIMEOUT",yt="RETRY_CONNECTING_MAX_COUNT",bt="LOCAL_CACHE_INTERVAL",xt=1000,St="REMOTE_UNISCRIPT_EXECUTION_ENDPOINT",Ct="/universer-api/uniscript";

export { R as COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, ht as DEFAULT_COLLAB_WEB_SOCKET_URL, gt as DEFAULT_WS_SESSION_TICKET_URL, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 as HEARTBEAT_INTERVAL_KEY, vt as HEARTBEAT_TIMEOUT_KEY, yt as RETRY_CONNECTING_MAX_COUNT_KEY, bt as LOCAL_CACHE_INTERVAL_KEY, xt as LOCAL_CACHE_INTERVAL, St as REMOTE_UNISCRIPT_EXECUTION_ENDPOINT_KEY, Ct as DEFAULT_REMOTE_UNISCRIPT_EXECUTION_ENDPOINT };

export { mt };
