import { BoardsHistoryDiffService, UniverBoardsHistoryPlugin } from "@univerjs-pro/boards-history";
import { BoardWorkbench, IBoardSettingsMenuContributionService, UniverBoardsUIPlugin, getBoardElementRenderObjectKey } from "@univerjs-pro/boards-ui";
import { AuthzIoHttpService, COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, CollaborationController, CollaborationImageIoService, DataLoaderService, SnapshotServerOverHTTPService, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { LS_CONFIG_KEY, UniverLicensePlugin } from "@univerjs-pro/license";
import { CommandType, DependentOn, Disposable, DisposableCollection, IAuthzIoService, ICommandService, IConfigService, IImageIoService, ILogService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, ThemeService, Univer, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { HistoryIcon } from "@univerjs/icons";
import { AddBoardElementMutation, AddBoardElementOperation, AddBoardElementsOperation, BeginBoardContainerOperation, BeginBoardSwimlaneOperation, BoardElementType, CommitBoardContainerTransformOperation, DisbandBoardContainerOperation, FitBoardContainerToContentOperation, InsertBoardChartCommand, InsertBoardTableOperation, NormalizeBoardConnectorRoutingCommand, RemoveBoardConnectorLabelCommand, RemoveBoardElementCommand, RemoveBoardElementMutation, RemoveBoardElementOperation, RemoveBoardElementsOperation, RemoveBoardSwimlaneLaneOperation, ReorderBoardElementsOperation, ReorderBoardObjectListElementOperation, ReparentBoardElementsOperation, SetBoardConnectorLabelStyleCommand, SetBoardConnectorLabelTextCommand, SetBoardContainerAutoResizeOperation, SetBoardContainerMembershipLockOperation, SetBoardElementsMetadataOperation, SetBoardNameCommand, SetBoardPageBackgroundCommand, SetBoardSwimlaneLaneSizeOperation, SetBoardSwimlaneLanesOperation, SetBoardThemeOperation, UniverBoardsPlugin, UpdateBoardElementCommand, UpdateBoardElementMutation, UpdateBoardElementsCommand, WrapBoardElementsInContainerOperation, getBoardsEmptySnapshot } from "@univerjs-pro/boards";
import { ChangeBoardChartDataSourceCommand, DuplicateBoardChartDataSourceCommand, UniverBoardsChartPlugin, UpdateBoardChartConfigCommand, UpdateBoardChartDataSourceCommand } from "@univerjs-pro/boards-chart";
import { UniverBoardsChartUIPlugin } from "@univerjs-pro/boards-chart-ui";
import { AddMindMapChildOperation, AddMindMapSiblingOperation, ChangeMindMapBranchLineTypeOperation, ChangeMindMapLayoutOperation, DeleteMindMapNodeOperation, DetachMindMapNodeOperation, ImportMindMapOpmlOperation, InsertBoardMindMapOperation, LayoutMindMapOperation, PasteMindMapAsNewMindMapOperation, PasteMindMapNodeOperation, PromoteMindMapNodeOperation, ReflowMindMapCommand, ReparentMindMapNodeOperation, SetMindMapElementMutation, ToggleMindMapNodeCollapseOperation, TranslateMindMapOperation, UniverBoardsMindPlugin, UpdateMindMapIncomingConnectorOperation, UpdateMindMapNodeOperation, UpdateMindMapNodesOperation, getMindMapContainerMeta, getMindMapNodeMeta } from "@univerjs-pro/boards-mind";
import { UniverBoardsMindUIPlugin } from "@univerjs-pro/boards-mind-ui";
import { DeleteBoardTableColumnsCommand, DeleteBoardTableRowsCommand, InsertBoardTableColumnsCommand, InsertBoardTableRowsCommand, MergeBoardTableCellsCommand, MoveBoardTableColumnsCommand, MoveBoardTableRowsCommand, RemoveBoardTableCommand, ResizeBoardTableColumnsCommand, ResizeBoardTableRowsCommand, SetBoardTableBorderPresetCommand, SetBoardTableCellStyleCommand, SetBoardTableCellTextCommand, UniverBoardsTablePlugin, UnmergeBoardTableCellsCommand, UpdateBoardTableCommand } from "@univerjs-pro/boards-table";
import { UniverBoardsTableUIPlugin } from "@univerjs-pro/boards-table-ui";
import { CollaborationEvent, ISnapshotServerService, SnapshotService, UniverCollaborationPlugin } from "@univerjs-pro/collaboration";
import { UniverDocsLatexPlugin } from "@univerjs-pro/docs-latex";
import { UniverDocsLatexUIPlugin } from "@univerjs-pro/docs-latex-ui";
import { HistoryRestoreService, HistoryUnitAdapterRegistryService, UniverEditHistoryPlugin, isHistoryRestoreAcknowledgement } from "@univerjs-pro/edit-history";
import { UniverInkPlugin } from "@univerjs-pro/ink";
import { UniverInkUIPlugin } from "@univerjs-pro/ink-ui";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverDrawingPlugin } from "@univerjs/drawing";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverNetworkPlugin } from "@univerjs/network";
import { BuiltInUIPart, IUIPartsService, UI_PLUGIN_CONFIG_KEY, UniverUIPlugin, connectInjector } from "@univerjs/ui";
import { Subject, filter, firstValueFrom, takeUntil, timeout } from "rxjs";
import { HistoryActionSummaryService, HistoryCanvasHighlightService, HistoryRenderAdapterRegistryService, UniverEditHistoryUIPlugin } from "@univerjs-pro/edit-history-ui";
import { jsx } from "react/jsx-runtime";
const F = "boards-history-ui.config",
  I = {
    historyServerUrl: "/universer-api/history"
  };
export { F as BOARDS_HISTORY_UI_PLUGIN_CONFIG_KEY };
export { I };
