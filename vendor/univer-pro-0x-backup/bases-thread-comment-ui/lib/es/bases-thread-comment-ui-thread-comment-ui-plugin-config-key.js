import{UniverBasesPlugin,getBasePermissionValue}from"@univerjs-pro/bases";
import{UniverBasesThreadCommentPlugin}from"@univerjs-pro/bases-thread-comment";
import{BASE_TOOLBAR_BEFORE_EXTRA_ACTIONS,IBaseRecordActionService,IBaseUIStateService,UniverBasesUIPlugin}from"@univerjs-pro/bases-ui";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{BaseDataModel,CommandType,DependentOn,Disposable,ICommandService,IConfigService,IPermissionService,IUniverInstanceService,Inject,Injector,LocaleService,Plugin,UniverInstanceType,UserManagerService,merge}from"@univerjs/core";
import{ThreadCommentDraftService,ThreadCommentPanel,ThreadCommentPanelService,UniverThreadCommentUIPlugin}from"@univerjs/thread-comment-ui";
import{ComponentManager,ISidebarService,useDependency,useObservable}from"@univerjs/ui";
import{Button,Tooltip}from"@univerjs/design";
import{CommentIcon}from"@univerjs/icons";
import{jsx}from"react/jsx-runtime";
import{ThreadCommentAnchorKind,ThreadCommentModel,deserializeThreadCommentAnchor,serializeThreadCommentAnchor}from"@univerjs/thread-comment";
import{map,merge as mergeLocal}from"rxjs";
import{UnitAction}from"@univerjs/protocol";
const R="bases-thread-comment-ui.config",z={};

export { R as BASES_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY };

export { z };
