import { CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { InsertColCommand, InsertRowCommand, MoveColsCommand, MoveRowsCommand, RemoveColCommand, RemoveRowCommand, SetColHiddenMutation, SetColVisibleMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetPermissionCheckController, UniverSheetsPlugin, WorkbookViewPermission, WorksheetViewPermission, getSheetCommandTarget } from "@univerjs/sheets";
import { Subject, of } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { UniverLicensePlugin } from "@univerjs-pro/license";
const W = "SHEET_OUTLINE_PLUGIN";
export { W as SHEET_OUTLINE_PLUGIN };
