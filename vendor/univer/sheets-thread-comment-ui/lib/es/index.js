import { CommandType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, LocaleService, Plugin, RANGE_TYPE, Range, Rectangle, RxDisposable, ThemeService, Tools, UniverInstanceType, UserManagerService, merge, toDisposable } from "@univerjs/core";
import { IDrawingManagerService, UniverDrawingPlugin, getDrawingShapeKeyByDrawingSearch } from "@univerjs/drawing";
import { INTERCEPTOR_POINT, RangeProtectionPermissionViewPoint, SetWorksheetActiveOperation, SheetInterceptorService, SheetPermissionCheckController, SheetsSelectionsService, UniverSheetsPlugin, WorkbookCommentPermission, WorksheetViewPermission, getSheetCommandTarget } from "@univerjs/sheets";
import { SheetsThreadCommentModel, UniverSheetsThreadCommentPlugin } from "@univerjs/sheets-thread-comment";
import { AddCommentCommand, AddCommentMutation, DeleteCommentCommand, DeleteCommentMutation, DeleteCommentTreeCommand, IThreadCommentDataSourceService, ResolveCommentCommand, ThreadCommentAnchorKind, ThreadCommentModel, UniverThreadCommentPlugin, UpdateCommentCommand, deserializeThreadCommentAnchor, serializeThreadCommentAnchor } from "@univerjs/thread-comment";
import { SetActiveCommentOperation, ThreadCommentCanvasOverlay, ThreadCommentDraftService, ThreadCommentPanel, ThreadCommentPanelService, ThreadCommentTree, ThreadCommentTreeLocation, UniverThreadCommentMobileUIPlugin, UniverThreadCommentUIPlugin } from "@univerjs/thread-comment-ui";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, FloatingObjectToolbarPosition, IMenuManagerService, IShortcutService, ISidebarService, IconManager, KeyCode, MenuItemType, MetaKeys, RibbonInsertGroup, UniverMobileUIPlugin, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { COPY_TYPE, CellPopupManagerService, HoverManagerService, IEditorBridgeService, IMarkSelectionService, ISheetClipboardService, ScrollToRangeOperation, SheetCanvasPopManagerService, SheetSkeletonManagerService, UniverSheetsMobileUIPlugin, UniverSheetsUIPlugin, getCurrentRangeDisable$, whenSheetEditorFocused } from "@univerjs/sheets-ui";
import { BehaviorSubject, combineLatest, debounceTime, map, startWith } from "rxjs";
import { IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { serializeRange, singleReferenceToGrid } from "@univerjs/engine-formula";
import { CommentIcon, InsertCommentDoubleIcon } from "@univerjs/icons";
import { jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef } from "react";

//#region src/types/const.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const SHEETS_THREAD_COMMENT_MODAL = "univer.sheet.thread-comment-modal";
const SHEETS_THREAD_COMMENT_PANEL = "univer.sheet.thread-comment-panel";
const PLUGIN_NAME = "SHEET_THREAD_COMMENT_UI_PLUGIN";

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/decorateParam.js
function __decorateParam(paramIndex, decorator) {
	return function(target, key) {
		decorator(target, key, paramIndex);
	};
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}

//#endregion
//#region src/services/sheets-thread-comment-popup.service.ts
let SheetsThreadCommentPopupService = class SheetsThreadCommentPopupService extends Disposable {
	get activePopup() {
		return this._activePopup;
	}
	constructor(_canvasPopupManagerService, _cellPopupManagerService) {
		super();
		this._canvasPopupManagerService = _canvasPopupManagerService;
		this._cellPopupManagerService = _cellPopupManagerService;
		_defineProperty(this, "_lastPopup", null);
		_defineProperty(this, "_activePopup", void 0);
		_defineProperty(this, "_activePopup$", new BehaviorSubject(null));
		_defineProperty(this, "activePopup$", this._activePopup$.asObservable());
		this.disposeWithMe(() => {
			this._activePopup$.complete();
		});
	}
	dispose() {
		super.dispose();
		this.hidePopup();
	}
	showPopup(location, onHide) {
		var _this$activePopup;
		const { row, col, unitId, subUnitId } = location;
		if (this._activePopup && row === this._activePopup.row && col === this._activePopup.col && unitId === this._activePopup.unitId && subUnitId === ((_this$activePopup = this.activePopup) === null || _this$activePopup === void 0 ? void 0 : _this$activePopup.subUnitId)) {
			this._activePopup = location;
			this._activePopup$.next(location);
			return;
		}
		if (this._lastPopup) this._lastPopup.dispose();
		this._activePopup = location;
		this._activePopup$.next(location);
		const popupDisposable = this._cellPopupManagerService.showPopup({
			row,
			col,
			unitId,
			subUnitId
		}, {
			componentKey: SHEETS_THREAD_COMMENT_MODAL,
			onClickOutside: () => {
				this.hidePopup();
			},
			direction: "horizontal",
			excludeOutside: [...Array.from(document.querySelectorAll(".univer-thread-comment")), document.getElementById("thread-comment-add")].filter(Boolean),
			priority: 2
		});
		if (!popupDisposable) throw new Error("[SheetsThreadCommentPopupService]: cannot show popup!");
		const disposableCollection = new DisposableCollection();
		disposableCollection.add(popupDisposable);
		disposableCollection.add({ dispose: () => {
			onHide === null || onHide === void 0 || onHide();
		} });
		this._lastPopup = disposableCollection;
	}
	hidePopup() {
		if (!this._activePopup) return;
		if (this._lastPopup) this._lastPopup.dispose();
		this._lastPopup = null;
		this._activePopup = null;
		this._activePopup$.next(null);
	}
	persistPopup() {
		if (!this._activePopup || !this._activePopup.temp) return;
		this._activePopup = {
			...this._activePopup,
			temp: false
		};
		this._activePopup$.next(this._activePopup);
	}
};
SheetsThreadCommentPopupService = __decorate([__decorateParam(0, Inject(SheetCanvasPopManagerService)), __decorateParam(1, Inject(CellPopupManagerService))], SheetsThreadCommentPopupService);

//#endregion
//#region src/commands/operations/comment.operation.ts
const ShowAddSheetCommentModalOperation = {
	type: CommandType.OPERATION,
	id: "sheet.operation.show-comment-modal",
	handler(accessor) {
		var _selectionManagerServ;
		const selectionManagerService = accessor.get(SheetsSelectionsService);
		const univerInstanceService = accessor.get(IUniverInstanceService);
		const sheetsThreadCommentPopupService = accessor.get(SheetsThreadCommentPopupService);
		const threadCommentPanelService = accessor.get(ThreadCommentPanelService);
		const activeCell = (_selectionManagerServ = selectionManagerService.getCurrentLastSelection()) === null || _selectionManagerServ === void 0 ? void 0 : _selectionManagerServ.primary;
		const model = accessor.get(SheetsThreadCommentModel);
		if (!activeCell) return false;
		const result = getSheetCommandTarget(univerInstanceService);
		if (!result) return false;
		const { workbook, worksheet, unitId, subUnitId } = result;
		const location = {
			workbook,
			worksheet,
			unitId,
			subUnitId,
			row: activeCell.startRow,
			col: activeCell.startColumn
		};
		sheetsThreadCommentPopupService.showPopup(location);
		const rootId = model.getByLocation(unitId, subUnitId, activeCell.startRow, activeCell.startColumn);
		if (rootId) threadCommentPanelService.setActiveComment({
			unitId,
			subUnitId,
			commentId: rootId,
			trigger: "context-menu"
		});
		return true;
	}
};
const ToggleSheetCommentPanelOperation = {
	id: "sheet.operation.toggle-comment-panel",
	type: CommandType.OPERATION,
	handler(accessor) {
		const sidebarService = accessor.get(ISidebarService);
		const panelService = accessor.get(ThreadCommentPanelService);
		if (panelService.panelVisible) {
			sidebarService.close();
			panelService.setPanelVisible(false);
		} else openSheetCommentPanel(sidebarService, panelService);
		return true;
	}
};
const OpenSheetCommentPanelOperation = {
	id: "sheet.operation.open-comment-panel",
	type: CommandType.OPERATION,
	handler(accessor) {
		openSheetCommentPanel(accessor.get(ISidebarService), accessor.get(ThreadCommentPanelService));
		return true;
	}
};
function openSheetCommentPanel(sidebarService, panelService) {
	var _sidebarService$optio;
	if (!panelService.panelVisible || ((_sidebarService$optio = sidebarService.options.children) === null || _sidebarService$optio === void 0 ? void 0 : _sidebarService$optio.label) !== "univer.sheet.thread-comment-panel") sidebarService.open({
		header: { title: "sheets-thread-comment-ui.panel.title" },
		children: { label: SHEETS_THREAD_COMMENT_PANEL },
		width: 360,
		onClose: () => panelService.setPanelVisible(false)
	});
	panelService.setPanelVisible(true);
}
const AddSheetDrawingCommentOperation = {
	id: "sheet.operation.add-drawing-comment",
	type: CommandType.OPERATION,
	handler(accessor) {
		var _workbook$getActiveSh;
		const drawing = accessor.get(IDrawingManagerService).getFocusDrawings()[0];
		const workbook = accessor.get(IUniverInstanceService).getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET);
		if (!drawing || !workbook || drawing.unitId !== workbook.getUnitId() || drawing.subUnitId !== ((_workbook$getActiveSh = workbook.getActiveSheet()) === null || _workbook$getActiveSh === void 0 ? void 0 : _workbook$getActiveSh.getSheetId())) return false;
		accessor.get(ThreadCommentDraftService).place({
			unitId: drawing.unitId,
			subUnitId: drawing.subUnitId,
			anchor: {
				kind: ThreadCommentAnchorKind.SHEET_DRAWING,
				pageId: drawing.subUnitId,
				elementId: drawing.drawingId
			}
		});
		const panelService = accessor.get(ThreadCommentPanelService);
		accessor.get(ISidebarService).open({
			header: { title: "sheets-thread-comment-ui.panel.title" },
			children: { label: SHEETS_THREAD_COMMENT_PANEL },
			width: 360,
			onClose: () => panelService.setPanelVisible(false)
		});
		panelService.setPanelVisible(true);
		return true;
	}
};

//#endregion
//#region src/menu/menu.ts
const drawingCommentMenuFactory = (accessor) => ({
	id: AddSheetDrawingCommentOperation.id,
	type: MenuItemType.BUTTON,
	icon: "InsertCommentDoubleIcon",
	title: "sheets-thread-comment-ui.menu.addComment",
	tooltip: "sheets-thread-comment-ui.menu.addComment",
	hidden$: getMenuHiddenObservable(accessor, UniverInstanceType.UNIVER_SHEET),
	disabled$: getCurrentRangeDisable$(accessor, {
		workbookTypes: [WorkbookCommentPermission],
		worksheetTypes: [WorksheetViewPermission]
	})
});
const threadCommentMenuFactory = (accessor) => {
	return {
		id: ShowAddSheetCommentModalOperation.id,
		type: MenuItemType.BUTTON,
		icon: "InsertCommentDoubleIcon",
		title: "sheets-thread-comment-ui.menu.addComment",
		hidden$: getMenuHiddenObservable(accessor, UniverInstanceType.UNIVER_SHEET),
		disabled$: getCurrentRangeDisable$(accessor, {
			workbookTypes: [WorkbookCommentPermission],
			worksheetTypes: [WorksheetViewPermission],
			rangeTypes: [RangeProtectionPermissionViewPoint]
		})
	};
};
const threadPanelMenuFactory = (accessor) => {
	return {
		id: ToggleSheetCommentPanelOperation.id,
		type: MenuItemType.BUTTON,
		icon: "CommentIcon",
		title: "sheets-thread-comment-ui.menu.openComments",
		tooltip: "sheets-thread-comment-ui.menu.openComments",
		disabled$: getCurrentRangeDisable$(accessor, {
			workbookTypes: [WorkbookCommentPermission],
			worksheetTypes: [WorksheetViewPermission],
			rangeTypes: [RangeProtectionPermissionViewPoint]
		}),
		hidden$: getMenuHiddenObservable(accessor, UniverInstanceType.UNIVER_SHEET)
	};
};
const AddCommentShortcut = {
	id: ShowAddSheetCommentModalOperation.id,
	binding: KeyCode.M | MetaKeys.CTRL_COMMAND | MetaKeys.ALT,
	preconditions: whenSheetEditorFocused
};

//#endregion
//#region src/menu/schema.ts
const menuSchema = {
	[RibbonInsertGroup.MEDIA]: {
		[ToggleSheetCommentPanelOperation.id]: {
			order: 2,
			gridLayout: {
				row: 1,
				column: 3,
				showLabel: true
			},
			menuItemFactory: threadPanelMenuFactory
		},
		[ShowAddSheetCommentModalOperation.id]: {
			order: 2.1,
			gridLayout: {
				row: 2,
				column: 3,
				showLabel: true
			},
			menuItemFactory: threadCommentMenuFactory
		}
	},
	[ContextMenuPosition.MAIN_AREA]: { [ContextMenuGroup.OTHERS]: { [ShowAddSheetCommentModalOperation.id]: {
		order: 0,
		menuItemFactory: threadCommentMenuFactory
	} } },
	[FloatingObjectToolbarPosition.SHEET]: { [AddSheetDrawingCommentOperation.id]: {
		order: 10,
		menuItemFactory: drawingCommentMenuFactory
	} },
	[ContextMenuPosition.DRAWING]: { [ContextMenuGroup.OTHERS]: { [AddSheetDrawingCommentOperation.id]: {
		order: 0,
		menuItemFactory: drawingCommentMenuFactory
	} } }
};

//#endregion
//#region src/config/config.ts
const SHEETS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = "sheets-thread-comment.config";
const configSymbol = Symbol(SHEETS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {};

//#endregion
//#region src/controllers/sheets-thread-comment-copy-paste.controller.ts
const transformRef = (ref, source, target) => {
	const refObj = singleReferenceToGrid(ref);
	const offsetRow = target.row - source.row;
	const offsetCol = target.column - source.column;
	return serializeRange({
		startColumn: refObj.column + offsetCol,
		startRow: refObj.row + offsetRow,
		endColumn: refObj.column + offsetCol,
		endRow: refObj.row + offsetRow
	});
};
let SheetsThreadCommentCopyPasteController = class SheetsThreadCommentCopyPasteController extends Disposable {
	constructor(_sheetClipboardService, _sheetsThreadCommentModel, _threadCommentDataSourceService) {
		super();
		this._sheetClipboardService = _sheetClipboardService;
		this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
		this._threadCommentDataSourceService = _threadCommentDataSourceService;
		_defineProperty(this, "_copyInfo", void 0);
		this._initClipboardHook();
	}
	_initClipboardHook() {
		this.disposeWithMe(this._sheetClipboardService.addClipboardHook({
			id: PLUGIN_NAME,
			onBeforeCopy: (unitId, subUnitId, range) => {
				this._copyInfo = {
					unitId,
					subUnitId,
					range
				};
			},
			onPasteCells: (_pasteFrom, pasteTo, _data, payload) => {
				const { unitId: targetUnitId, subUnitId: targetSubUnitId, range } = pasteTo;
				const targetPos = {
					row: range.rows[0],
					column: range.cols[0]
				};
				if (payload.copyType === COPY_TYPE.CUT && this._copyInfo) {
					const { range, unitId: sourceUnitId, subUnitId: sourceSubUnitId } = this._copyInfo;
					const sourcePos = {
						row: range.startRow,
						column: range.startColumn
					};
					if (!(targetUnitId === sourceUnitId && targetSubUnitId === sourceSubUnitId)) {
						const roots = [];
						Range.foreach(range, (row, col) => {
							const comments = this._sheetsThreadCommentModel.getAllByLocation(sourceUnitId, sourceSubUnitId, row, col);
							if (this._threadCommentDataSourceService.syncUpdateMutationToColla) comments.forEach((comment) => {
								roots.push(comment);
							});
							else comments.forEach(({ children, ...comment }) => {
								if (!comment.parentId) roots.push(comment);
							});
						});
						const sourceRedos = [];
						const sourceUndos = [];
						const targetRedos = [];
						const targetUndos = [];
						const handleCommentItem = (item) => {
							sourceRedos.unshift({
								id: DeleteCommentMutation.id,
								params: {
									unitId: sourceUnitId,
									subUnitId: sourceSubUnitId,
									commentId: item.id
								}
							});
							targetRedos.push({
								id: AddCommentMutation.id,
								params: {
									unitId: targetUnitId,
									subUnitId: targetSubUnitId,
									comment: {
										...item,
										ref: transformRef(item.ref, sourcePos, targetPos),
										unitId: targetUnitId,
										subUnitId: targetSubUnitId
									},
									sync: true
								}
							});
							sourceUndos.push({
								id: AddCommentMutation.id,
								params: {
									unitId: sourceUnitId,
									subUnitId: sourceSubUnitId,
									comment: item,
									sync: true
								}
							});
							targetUndos.unshift({
								id: DeleteCommentMutation.id,
								params: {
									unitId: targetUnitId,
									subUnitId: targetSubUnitId,
									commentId: item.id
								}
							});
						};
						roots.forEach((root) => {
							handleCommentItem(root);
						});
						return {
							redos: [...sourceRedos, ...targetRedos],
							undos: [...targetUndos, ...sourceUndos]
						};
					}
				}
				return {
					redos: [],
					undos: []
				};
			}
		}));
	}
};
SheetsThreadCommentCopyPasteController = __decorate([
	__decorateParam(0, Inject(ISheetClipboardService)),
	__decorateParam(1, Inject(SheetsThreadCommentModel)),
	__decorateParam(2, IThreadCommentDataSourceService)
], SheetsThreadCommentCopyPasteController);

//#endregion
//#region src/controllers/sheets-thread-comment-permission.controller.ts
let SheetsThreadCommentPermissionController = class SheetsThreadCommentPermissionController extends Disposable {
	constructor(_localeService, _commandService, _sheetPermissionCheckController, _sheetsThreadCommentModel) {
		super();
		this._localeService = _localeService;
		this._commandService = _commandService;
		this._sheetPermissionCheckController = _sheetPermissionCheckController;
		this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
		this._commandExecutedListener();
	}
	_commandExecutedListener() {
		this.disposeWithMe(this._commandService.beforeCommandExecuted((command) => {
			const { id } = command;
			if (id === AddSheetDrawingCommentOperation.id || id === ShowAddSheetCommentModalOperation.id || id === ToggleSheetCommentPanelOperation.id) {
				if (!this._sheetPermissionCheckController.permissionCheckWithoutRange({
					workbookTypes: [WorkbookCommentPermission],
					worksheetTypes: [WorksheetViewPermission]
				})) this._sheetPermissionCheckController.blockExecuteWithoutPermission(this._localeService.t("sheets-thread-comment-ui.permission.commentErr"));
			} else if (id === AddCommentCommand.id) {
				const { unitId, subUnitId, comment } = command.params;
				if (!this._hasCommentPermission(unitId, subUnitId, comment.ref)) this._sheetPermissionCheckController.blockExecuteWithoutPermission(this._localeService.t("sheets-thread-comment-ui.permission.commentErr"));
			} else if (id === UpdateCommentCommand.id) {
				const { unitId, subUnitId, payload } = command.params;
				const { commentId } = payload;
				const comment = this._sheetsThreadCommentModel.getComment(unitId, subUnitId, commentId);
				if (comment && !this._hasCommentPermission(unitId, subUnitId, comment.ref)) this._sheetPermissionCheckController.blockExecuteWithoutPermission(this._localeService.t("sheets-thread-comment-ui.permission.commentErr"));
			} else if (id === ResolveCommentCommand.id || id === DeleteCommentCommand.id || id === DeleteCommentTreeCommand.id) {
				const { unitId, subUnitId, commentId } = command.params;
				const comment = this._sheetsThreadCommentModel.getComment(unitId, subUnitId, commentId);
				if (comment && !this._hasCommentPermission(unitId, subUnitId, comment.ref)) this._sheetPermissionCheckController.blockExecuteWithoutPermission(this._localeService.t("sheets-thread-comment-ui.permission.commentErr"));
			}
		}));
	}
	_hasCommentPermission(unitId, subUnitId, ref) {
		const permissionTypes = {
			workbookTypes: [WorkbookCommentPermission],
			worksheetTypes: [WorksheetViewPermission]
		};
		const anchor = deserializeThreadCommentAnchor(ref);
		if ((anchor === null || anchor === void 0 ? void 0 : anchor.kind) === ThreadCommentAnchorKind.SHEET_DRAWING) return this._sheetPermissionCheckController.permissionCheckWithoutRange(permissionTypes, unitId, subUnitId);
		const { row, column } = singleReferenceToGrid(ref);
		if (!Number.isFinite(row) || !Number.isFinite(column)) return false;
		return this._sheetPermissionCheckController.permissionCheckWithRanges({
			...permissionTypes,
			rangeTypes: [RangeProtectionPermissionViewPoint]
		}, [{
			startRow: row,
			startColumn: column,
			endRow: row,
			endColumn: column
		}], unitId, subUnitId);
	}
};
SheetsThreadCommentPermissionController = __decorate([
	__decorateParam(0, Inject(LocaleService)),
	__decorateParam(1, ICommandService),
	__decorateParam(2, Inject(SheetPermissionCheckController)),
	__decorateParam(3, Inject(SheetsThreadCommentModel))
], SheetsThreadCommentPermissionController);

//#endregion
//#region src/controllers/sheets-thread-comment-popup.controller.ts
function resolveFocusedSheetComment(activeComment, hoveredComment, unitId, subUnitId) {
	for (const comment of [hoveredComment, activeComment]) if (comment && comment.unitId === unitId && comment.subUnitId === subUnitId) return comment;
}
let SheetsThreadCommentPopupController = class SheetsThreadCommentPopupController extends Disposable {
	constructor(_commandService, _sheetsThreadCommentPopupService, _sheetsThreadCommentModel, _threadCommentPanelService, _univerInstanceService, _sheetPermissionCheckController, _markSelectionService, _sheetSelectionService, _editorBridgeService, _renderManagerService) {
		super();
		this._commandService = _commandService;
		this._sheetsThreadCommentPopupService = _sheetsThreadCommentPopupService;
		this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
		this._threadCommentPanelService = _threadCommentPanelService;
		this._univerInstanceService = _univerInstanceService;
		this._sheetPermissionCheckController = _sheetPermissionCheckController;
		this._markSelectionService = _markSelectionService;
		this._sheetSelectionService = _sheetSelectionService;
		this._editorBridgeService = _editorBridgeService;
		this._renderManagerService = _renderManagerService;
		_defineProperty(this, "_isSwitchToCommenting", false);
		_defineProperty(this, "_selectionShapeInfo", null);
		this._initCommandListener();
		this._initPanelListener();
		this._initMarkSelection();
		this._initSelectionUpdateListener();
		this._initEditorBridge();
	}
	_handleSelectionChange(selections, unitId, subUnitId) {
		var _selections$, _render$with$getSkele;
		const range = (_selections$ = selections[0]) === null || _selections$ === void 0 ? void 0 : _selections$.range;
		const render = this._renderManagerService.getRenderUnitById(unitId);
		const skeleton = render === null || render === void 0 || (_render$with$getSkele = render.with(SheetSkeletonManagerService).getSkeletonParam(subUnitId)) === null || _render$with$getSkele === void 0 ? void 0 : _render$with$getSkele.skeleton;
		if (!skeleton) return;
		if (!range) return;
		const actualCell = skeleton.getCellWithCoordByIndex(range.startRow, range.startColumn);
		if (((range.rangeType ?? RANGE_TYPE.NORMAL) !== RANGE_TYPE.NORMAL || range.endColumn - range.startColumn > 0 || range.endRow - range.startRow > 0) && !((actualCell.isMerged || actualCell.isMergedMainCell) && Rectangle.equals(actualCell.mergeInfo, range))) {
			if (this._threadCommentPanelService.activeCommentId) this._commandService.executeCommand(SetActiveCommentOperation.id);
			return;
		}
		const row = actualCell.actualRow;
		const col = actualCell.actualColumn;
		if (!this._sheetsThreadCommentModel.showCommentMarker(unitId, subUnitId, row, col)) {
			if (this._threadCommentPanelService.activeCommentId) this._commandService.executeCommand(SetActiveCommentOperation.id);
			return;
		}
		const commentId = this._sheetsThreadCommentModel.getByLocation(unitId, subUnitId, row, col);
		if (commentId) this._commandService.executeCommand(SetActiveCommentOperation.id, {
			unitId,
			subUnitId,
			commentId
		});
	}
	_initSelectionUpdateListener() {
		this.disposeWithMe(this._sheetSelectionService.selectionMoveEnd$.subscribe((selections) => {
			if (this._isSwitchToCommenting) return;
			const current = this._sheetSelectionService.currentSelectionParam;
			if (!current) return;
			this._handleSelectionChange(selections, current.unitId, current.sheetId);
		}));
	}
	_initEditorBridge() {
		this.disposeWithMe(this._editorBridgeService.visible$.subscribe((visible) => {
			if (visible.visible) this._sheetsThreadCommentPopupService.hidePopup();
		}));
	}
	_initCommandListener() {
		this._commandService.onCommandExecuted((commandInfo) => {
			if (commandInfo.id === DeleteCommentMutation.id) {
				const params = commandInfo.params;
				const active = this._sheetsThreadCommentPopupService.activePopup;
				if (!active) return;
				const { unitId, subUnitId, commentId } = active;
				if (params.unitId === unitId && params.subUnitId === subUnitId && params.commentId === commentId) this._sheetsThreadCommentPopupService.hidePopup();
			}
		});
	}
	_initPanelListener() {
		this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe(async (commentInfo) => {
			if (commentInfo) {
				var _currentUnit$getActiv;
				const { unitId, subUnitId, commentId, trigger } = commentInfo;
				const comment = this._sheetsThreadCommentModel.getComment(unitId, subUnitId, commentId);
				if (!comment || comment.resolved) return;
				const anchor = deserializeThreadCommentAnchor(comment.ref);
				if ((anchor === null || anchor === void 0 ? void 0 : anchor.kind) === ThreadCommentAnchorKind.SHEET_DRAWING) return;
				const currentUnit = this._univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET);
				if (!currentUnit) return;
				if (currentUnit.getUnitId() !== unitId) return;
				this._isSwitchToCommenting = true;
				if (((_currentUnit$getActiv = currentUnit.getActiveSheet()) === null || _currentUnit$getActiv === void 0 ? void 0 : _currentUnit$getActiv.getSheetId()) !== subUnitId) await this._commandService.executeCommand(SetWorksheetActiveOperation.id, {
					unitId,
					subUnitId
				});
				this._isSwitchToCommenting = false;
				const location = singleReferenceToGrid(comment.ref);
				const { row, column: col } = location;
				if (!this._sheetPermissionCheckController.permissionCheckWithRanges({
					workbookTypes: [WorkbookCommentPermission],
					worksheetTypes: [WorksheetViewPermission],
					rangeTypes: [RangeProtectionPermissionViewPoint]
				}, [{
					startRow: row,
					startColumn: col,
					endRow: row,
					endColumn: col
				}], unitId, subUnitId)) return;
				const GAP = 1;
				await this._commandService.executeCommand(ScrollToRangeOperation.id, { range: {
					startRow: Math.max(location.row - GAP, 0),
					endRow: location.row + GAP,
					startColumn: Math.max(location.column - GAP, 0),
					endColumn: location.column + GAP
				} });
				if (this._editorBridgeService.isVisible().visible) return;
				this._sheetsThreadCommentPopupService.showPopup({
					unitId,
					subUnitId,
					row: location.row,
					col: location.column,
					commentId: comment.id,
					trigger
				});
			} else this._sheetsThreadCommentPopupService.hidePopup();
		}));
	}
	_initMarkSelection() {
		this.disposeWithMe(combineLatest([this._threadCommentPanelService.activeCommentId$, this._threadCommentPanelService.hoveredCommentId$]).pipe(debounceTime(100)).subscribe(([activeComment, hoveredComment]) => {
			var _currentUnit$getActiv2, _this$_univerInstance;
			const currentUnit = this._univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET);
			const focusedComment = resolveFocusedSheetComment(activeComment, hoveredComment, currentUnit === null || currentUnit === void 0 ? void 0 : currentUnit.getUnitId(), currentUnit === null || currentUnit === void 0 || (_currentUnit$getActiv2 = currentUnit.getActiveSheet()) === null || _currentUnit$getActiv2 === void 0 ? void 0 : _currentUnit$getActiv2.getSheetId());
			if (!focusedComment) {
				if (this._selectionShapeInfo) {
					this._markSelectionService.removeShape(this._selectionShapeInfo.shapeId);
					this._selectionShapeInfo = null;
				}
				return;
			}
			const { unitId, subUnitId, commentId } = focusedComment;
			if (this._selectionShapeInfo) {
				this._markSelectionService.removeShape(this._selectionShapeInfo.shapeId);
				this._selectionShapeInfo = null;
			}
			const comment = this._sheetsThreadCommentModel.getComment(unitId, subUnitId, commentId);
			if (!comment) return;
			const { row, column } = singleReferenceToGrid(comment.ref);
			if (Number.isNaN(row) || Number.isNaN(column)) return null;
			const worksheet = (_this$_univerInstance = this._univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET)) === null || _this$_univerInstance === void 0 ? void 0 : _this$_univerInstance.getSheetBySheetId(subUnitId);
			const mergeInfo = (worksheet === null || worksheet === void 0 ? void 0 : worksheet.getMergedCell(row, column)) ?? {
				startColumn: column,
				endColumn: column,
				startRow: row,
				endRow: row
			};
			const shapeId = this._markSelectionService.addShape({
				range: mergeInfo,
				style: {
					fill: "rgba(255, 189, 55, 0.35)",
					strokeWidth: 1,
					stroke: "#FFBD37",
					widgets: {}
				},
				primary: null
			}, [], -1);
			if (!shapeId) return;
			this._selectionShapeInfo = {
				...focusedComment,
				shapeId
			};
		}));
	}
};
SheetsThreadCommentPopupController = __decorate([
	__decorateParam(0, ICommandService),
	__decorateParam(1, Inject(SheetsThreadCommentPopupService)),
	__decorateParam(2, Inject(SheetsThreadCommentModel)),
	__decorateParam(3, Inject(ThreadCommentPanelService)),
	__decorateParam(4, IUniverInstanceService),
	__decorateParam(5, Inject(SheetPermissionCheckController)),
	__decorateParam(6, IMarkSelectionService),
	__decorateParam(7, Inject(SheetsSelectionsService)),
	__decorateParam(8, IEditorBridgeService),
	__decorateParam(9, IRenderManagerService)
], SheetsThreadCommentPopupController);

//#endregion
//#region package.json
var name = "@univerjs/sheets-thread-comment-ui";
var version = "1.0.0-insiders.20260907-70fc579";

//#endregion
//#region src/views/SheetsThreadCommentCell.tsx
const SheetsThreadCommentCell = () => {
	const univerInstanceService = useDependency(IUniverInstanceService);
	const sheetsThreadCommentPopupService = useDependency(SheetsThreadCommentPopupService);
	const activePopup = useObservable(sheetsThreadCommentPopupService.activePopup$);
	const sheetThreadCommentModel = useDependency(SheetsThreadCommentModel);
	const getRootId = () => {
		if (!activePopup) return;
		const { unitId, subUnitId, row, col, commentId } = activePopup;
		const activeComment = commentId ? sheetThreadCommentModel.getAllByLocation(unitId, subUnitId, row, col).find((comment) => comment.id === commentId) : void 0;
		return activeComment && !activeComment.resolved ? activeComment.id : sheetThreadCommentModel.getByLocation(unitId, subUnitId, row, col);
	};
	const rootId = useObservable(activePopup ? () => sheetThreadCommentModel.commentUpdate$.pipe(map(() => getRootId()), startWith(getRootId())) : null, void 0, false, [activePopup, sheetThreadCommentModel]);
	if (!activePopup) return null;
	const { row, col, unitId, subUnitId, trigger } = activePopup;
	const ref = `${Tools.chatAtABC(col)}${row + 1}`;
	const onClose = () => {
		sheetsThreadCommentPopupService.hidePopup();
	};
	const getSubUnitName = (id) => {
		var _univerInstanceServic;
		return ((_univerInstanceServic = univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET)) === null || _univerInstanceServic === void 0 || (_univerInstanceServic = _univerInstanceServic.getSheetBySheetId(id)) === null || _univerInstanceServic === void 0 ? void 0 : _univerInstanceServic.getName()) ?? "";
	};
	return /* @__PURE__ */ jsx(ThreadCommentTree, {
		onClick: () => {
			sheetsThreadCommentPopupService.persistPopup();
		},
		location: ThreadCommentTreeLocation.CELL,
		id: rootId,
		unitId,
		subUnitId,
		type: UniverInstanceType.UNIVER_SHEET,
		refStr: ref,
		onClose,
		getSubUnitName,
		autoFocus: trigger === "context-menu"
	});
};

//#endregion
//#region src/views/SheetsThreadCommentPanel.tsx
const SheetsThreadCommentPanel = () => {
	var _workbook$getActiveSh;
	const markSelectionService = useDependency(IMarkSelectionService);
	const univerInstanceService = useDependency(IUniverInstanceService);
	const sheetsThreadCommentPopupService = useDependency(SheetsThreadCommentPopupService);
	const workbook = univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET);
	const unitId = workbook.getUnitId();
	const commandService = useDependency(ICommandService);
	const draftService = useDependency(ThreadCommentDraftService);
	const userManagerService = useDependency(UserManagerService);
	const draft = useObservable(draftService.draft$, draftService.draft);
	const tempDrawingComment = (draft === null || draft === void 0 ? void 0 : draft.anchor.kind) === ThreadCommentAnchorKind.SHEET_DRAWING && draft.unitId === unitId ? {
		id: "",
		threadId: "",
		unitId: draft.unitId,
		subUnitId: draft.subUnitId,
		ref: serializeThreadCommentAnchor(draft.anchor),
		dT: "",
		personId: userManagerService.getCurrentUser().userID,
		text: { dataStream: "\r\n" }
	} : null;
	const subUnitId$ = useMemo(() => workbook.activeSheet$.pipe(map((i) => i === null || i === void 0 ? void 0 : i.getSheetId())), [workbook.activeSheet$]);
	const subUnitId = useObservable(subUnitId$, (_workbook$getActiveSh = workbook.getActiveSheet()) === null || _workbook$getActiveSh === void 0 ? void 0 : _workbook$getActiveSh.getSheetId());
	const hoverShapeId = useRef(null);
	const panelService = useDependency(ThreadCommentPanelService);
	const activeCommentId = useObservable(panelService.activeCommentId$);
	const panelVisible = useObservable(panelService.panelVisible$, panelService.panelVisible);
	const sortComments = useCallback((comments) => {
		const worksheets = workbook.getSheets();
		const sheetIndex = {};
		worksheets.forEach((sheet, i) => {
			sheetIndex[sheet.getSheetId()] = i;
		});
		const sort = (comments) => {
			return comments.map((comment) => {
				const anchor = deserializeThreadCommentAnchor(comment.ref);
				if ((anchor === null || anchor === void 0 ? void 0 : anchor.kind) === ThreadCommentAnchorKind.SHEET_DRAWING) return {
					...comment,
					p: [
						sheetIndex[comment.subUnitId] ?? 0,
						Number.MAX_SAFE_INTEGER,
						0
					]
				};
				const ref = singleReferenceToGrid(comment.ref);
				const p = [
					sheetIndex[comment.subUnitId] ?? 0,
					ref.row,
					ref.column
				];
				return {
					...comment,
					p
				};
			}).sort((pre, aft) => {
				if (pre.p[0] === aft.p[0]) {
					if (pre.p[1] === aft.p[1]) return pre.p[2] - aft.p[2];
					return pre.p[1] - aft.p[1];
				}
				return pre.p[0] - aft.p[0];
			});
		};
		return [...sort(comments.filter((comment) => !comment.resolved)), ...sort(comments.filter((comment) => comment.resolved))];
	}, [workbook]);
	const showShape = useCallback((comment) => {
		if (deserializeThreadCommentAnchor(comment.ref)) return null;
		if (comment.unitId === unitId && comment.subUnitId === subUnitId && !comment.resolved) {
			const { row, column } = singleReferenceToGrid(comment.ref);
			const worksheet = workbook.getSheetBySheetId(comment.subUnitId);
			const mergeInfo = (worksheet === null || worksheet === void 0 ? void 0 : worksheet.getMergedCell(row, column)) ?? {
				startColumn: column,
				endColumn: column,
				startRow: row,
				endRow: row
			};
			if (!Number.isNaN(row) && !Number.isNaN(column)) return markSelectionService.addShape({
				range: mergeInfo,
				style: {
					fill: "rgb(255, 189, 55, 0.35)",
					strokeWidth: 1,
					stroke: "#FFBD37",
					widgets: {}
				},
				primary: null
			});
		}
		return null;
	}, [
		markSelectionService,
		subUnitId,
		unitId
	]);
	const getSubUnitName = (id) => {
		var _workbook$getSheetByS;
		return ((_workbook$getSheetByS = workbook.getSheetBySheetId(id)) === null || _workbook$getSheetByS === void 0 ? void 0 : _workbook$getSheetByS.getName()) ?? "";
	};
	const handleAdd = () => {
		commandService.executeCommand(ShowAddSheetCommentModalOperation.id);
	};
	const handleHover = (comment) => {
		if (hoverShapeId.current) {
			markSelectionService.removeShape(hoverShapeId.current);
			hoverShapeId.current = null;
		}
		if (activeCommentId && activeCommentId.unitId === comment.unitId && activeCommentId.subUnitId === comment.subUnitId && activeCommentId.commentId === comment.id) return;
		hoverShapeId.current = showShape(comment);
	};
	const handleLeave = () => {
		if (hoverShapeId.current) {
			markSelectionService.removeShape(hoverShapeId.current);
			hoverShapeId.current = null;
		}
	};
	const handleResolve = (id, resolved) => {
		if (resolved) sheetsThreadCommentPopupService.hidePopup();
	};
	useEffect(() => {
		if (!panelVisible && hoverShapeId.current) {
			markSelectionService.removeShape(hoverShapeId.current);
			hoverShapeId.current = null;
		}
	}, [markSelectionService, panelVisible]);
	return /* @__PURE__ */ jsx(ThreadCommentPanel, {
		unitId,
		subUnitId$,
		type: UniverInstanceType.UNIVER_SHEET,
		onAdd: handleAdd,
		getSubUnitName,
		onResolve: handleResolve,
		sortComments,
		onItemEnter: handleHover,
		onItemLeave: handleLeave,
		onDeleteComment: () => {
			handleLeave();
			return true;
		},
		tempComment: tempDrawingComment,
		onTempCommentClose: () => draftService.cancel(),
		formatRef: (comment) => {
			const anchor = deserializeThreadCommentAnchor(comment.ref);
			return (anchor === null || anchor === void 0 ? void 0 : anchor.kind) === ThreadCommentAnchorKind.SHEET_DRAWING ? `#${anchor.elementId}` : comment.ref;
		}
	});
};

//#endregion
//#region src/controllers/components.controller.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let ComponentsController = class ComponentsController extends Disposable {
	constructor(_componentManager, _iconManager) {
		super();
		this._componentManager = _componentManager;
		this._iconManager = _iconManager;
		this._registerComponents();
		this._registerIcons();
	}
	_registerComponents() {
		[[SHEETS_THREAD_COMMENT_MODAL, SheetsThreadCommentCell], [SHEETS_THREAD_COMMENT_PANEL, SheetsThreadCommentPanel]].forEach(([key, comp]) => {
			this.disposeWithMe(this._componentManager.register(key, comp));
		});
	}
	_registerIcons() {
		this.disposeWithMe(this._iconManager.register({
			CommentIcon,
			InsertCommentDoubleIcon
		}));
	}
};
ComponentsController = __decorate([__decorateParam(0, Inject(ComponentManager)), __decorateParam(1, Inject(IconManager))], ComponentsController);

//#endregion
//#region src/controllers/render-controllers/drawing.render-controller.ts
const SHEET_COMMENT_DRAWING_OVERLAY_KEY = "sheet-thread-comment-drawing-overlay";
const SHEET_COMMENT_DRAWING_OVERLAY_LAYER_INDEX = 10100;
let SheetsThreadCommentDrawingRenderController = class SheetsThreadCommentDrawingRenderController extends RxDisposable {
	constructor(_context, _commandService, _drawingManagerService, _commentModel, _panelService, _themeService) {
		super();
		this._context = _context;
		this._commandService = _commandService;
		this._drawingManagerService = _drawingManagerService;
		this._commentModel = _commentModel;
		this._panelService = _panelService;
		this._themeService = _themeService;
		_defineProperty(this, "_overlay", void 0);
		this._overlay = new ThreadCommentCanvasOverlay(SHEET_COMMENT_DRAWING_OVERLAY_KEY, {
			...this._getColors(),
			zoomRatio: 1,
			markers: [],
			underlines: []
		});
		this._context.scene.addObject(this._overlay, SHEET_COMMENT_DRAWING_OVERLAY_LAYER_INDEX);
		this.disposeWithMe(toDisposable(this._overlay.onPointerDown$.subscribeEvent((_event, state) => this._onOverlayPointerDown(state))));
		this.disposeWithMe(toDisposable(this._context.engine.onTransformChange$.subscribeEvent(() => this._syncOverlay())));
		this.disposeWithMe(this._context.unit.activeSheet$.subscribe(() => this._syncOverlay()));
		this.disposeWithMe(this._commentModel.commentUpdate$.subscribe((update) => {
			if (update.unitId === this._context.unitId) this._syncOverlay();
		}));
		[this._panelService.activeCommentId$, this._panelService.hoveredCommentId$].forEach((observable) => this.disposeWithMe(observable.subscribe(() => this._syncOverlay())));
		[
			this._drawingManagerService.add$,
			this._drawingManagerService.update$,
			this._drawingManagerService.remove$
		].forEach((observable) => this.disposeWithMe(observable.subscribe((drawings) => {
			if (drawings.some((drawing) => drawing.unitId === this._context.unitId)) this._syncOverlay();
		})));
		this.disposeWithMe(this._themeService.currentTheme$.subscribe(() => this._syncOverlay()));
		this._syncOverlay();
	}
	_onOverlayPointerDown(state) {
		var _this$_context$unit$g;
		const commentId = this._overlay.hitCommentId;
		const subUnitId = (_this$_context$unit$g = this._context.unit.getActiveSheet()) === null || _this$_context$unit$g === void 0 ? void 0 : _this$_context$unit$g.getSheetId();
		if (!commentId || !subUnitId) return;
		state.stopPropagation();
		this._panelService.setActiveComment({
			unitId: this._context.unitId,
			subUnitId,
			commentId,
			trigger: "sheet-canvas"
		});
		this._commandService.executeCommand(OpenSheetCommentPanelOperation.id).catch(() => void 0);
	}
	_syncOverlay() {
		const worksheet = this._context.unit.getActiveSheet();
		const subUnitId = worksheet === null || worksheet === void 0 ? void 0 : worksheet.getSheetId();
		if (!worksheet || !subUnitId) {
			this._overlay.updateState({
				markers: [],
				underlines: [],
				focusedCommentIds: [],
				focusOutlines: []
			});
			return;
		}
		const underlines = /* @__PURE__ */ new Map();
		this._commentModel.query({
			unitIds: [this._context.unitId],
			subUnitIds: [subUnitId],
			anchorKinds: [ThreadCommentAnchorKind.SHEET_DRAWING],
			resolved: false
		}).forEach(({ root }) => {
			const anchor = deserializeThreadCommentAnchor(root.ref);
			if ((anchor === null || anchor === void 0 ? void 0 : anchor.kind) !== ThreadCommentAnchorKind.SHEET_DRAWING) return;
			const outline = this._getDrawingOutline(subUnitId, anchor.elementId);
			if (outline) underlines.set(anchor.elementId, {
				commentId: root.id,
				left: outline.left,
				top: outline.top + outline.height + 2 / worksheet.getZoomRatio(),
				width: outline.width
			});
		});
		const focusedCommentIds = [];
		const focusOutlines = /* @__PURE__ */ new Map();
		[this._panelService.activeCommentId, this._panelService.hoveredCommentId].forEach((target) => {
			if (!target || target.unitId !== this._context.unitId || target.subUnitId !== subUnitId) return;
			const comment = this._commentModel.getComment(target.unitId, target.subUnitId, target.commentId);
			const anchor = comment && deserializeThreadCommentAnchor(comment.ref);
			if ((anchor === null || anchor === void 0 ? void 0 : anchor.kind) !== ThreadCommentAnchorKind.SHEET_DRAWING) return;
			focusedCommentIds.push(target.commentId);
			const outline = this._getDrawingOutline(subUnitId, anchor.elementId);
			if (outline) focusOutlines.set(anchor.elementId, outline);
		});
		this._overlay.updateState({
			...this._getColors(),
			zoomRatio: worksheet.getZoomRatio(),
			markers: [],
			underlines: Array.from(underlines.values()),
			focusedCommentIds,
			focusOutlines: Array.from(focusOutlines.values())
		});
	}
	_getDrawingOutline(subUnitId, drawingId) {
		var _this$_context$scene$, _this$_context$scene;
		const objectKey = getDrawingShapeKeyByDrawingSearch({
			unitId: this._context.unitId,
			subUnitId,
			drawingId
		});
		const object = ((_this$_context$scene$ = (_this$_context$scene = this._context.scene).getObjectIncludeInGroup) === null || _this$_context$scene$ === void 0 ? void 0 : _this$_context$scene$.call(_this$_context$scene, objectKey)) ?? this._context.scene.getObject(objectKey);
		if (!object) return null;
		const bounds = object.getRealBound();
		return {
			left: bounds.left,
			top: bounds.top,
			width: bounds.width,
			height: bounds.height
		};
	}
	_getColors() {
		return {
			accentColor: this._themeService.getColorFromTheme("yellow.400"),
			foregroundColor: this._themeService.getColorFromTheme("gray.900"),
			outlineColor: this._themeService.getColorFromTheme("white")
		};
	}
};
SheetsThreadCommentDrawingRenderController = __decorate([
	__decorateParam(1, ICommandService),
	__decorateParam(2, IDrawingManagerService),
	__decorateParam(3, Inject(ThreadCommentModel)),
	__decorateParam(4, Inject(ThreadCommentPanelService)),
	__decorateParam(5, Inject(ThemeService))
], SheetsThreadCommentDrawingRenderController);

//#endregion
//#region src/controllers/render-controllers/render.controller.ts
let SheetsThreadCommentRenderController = class SheetsThreadCommentRenderController extends Disposable {
	constructor(_sheetInterceptorService, _sheetsThreadCommentModel, _univerInstanceService, _renderManagerService) {
		super();
		this._sheetInterceptorService = _sheetInterceptorService;
		this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
		this._univerInstanceService = _univerInstanceService;
		this._renderManagerService = _renderManagerService;
		this._initViewModelIntercept();
		this._initSkeletonChange();
	}
	_initViewModelIntercept() {
		this.disposeWithMe(this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
			effect: InterceptorEffectEnum.Style,
			handler: (cell, pos, next) => {
				const { row, col, unitId, subUnitId } = pos;
				if (this._sheetsThreadCommentModel.showCommentMarker(unitId, subUnitId, row, col)) {
					if (!cell || cell === pos.rawData) cell = { ...pos.rawData };
					cell.markers = {
						...cell === null || cell === void 0 ? void 0 : cell.markers,
						tr: {
							color: "#FFBD37",
							size: 6
						}
					};
					return next(cell);
				}
				return next(cell);
			},
			priority: 100
		}));
	}
	_initSkeletonChange() {
		const markSkeletonDirty = () => {
			var _currentRender$mainCo;
			const workbook = this._univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET);
			if (!workbook) return;
			const unitId = workbook.getUnitId();
			const currentRender = this._renderManagerService.getRenderUnitById(unitId);
			currentRender === null || currentRender === void 0 || (_currentRender$mainCo = currentRender.mainComponent) === null || _currentRender$mainCo === void 0 || _currentRender$mainCo.makeForceDirty();
		};
		this.disposeWithMe(this._sheetsThreadCommentModel.commentUpdate$.pipe(debounceTime(16)).subscribe(() => {
			markSkeletonDirty();
		}));
	}
};
SheetsThreadCommentRenderController = __decorate([
	__decorateParam(0, Inject(SheetInterceptorService)),
	__decorateParam(1, Inject(SheetsThreadCommentModel)),
	__decorateParam(2, IUniverInstanceService),
	__decorateParam(3, IRenderManagerService)
], SheetsThreadCommentRenderController);

//#endregion
//#region src/controllers/sheets-thread-comment-hover.controller.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let SheetsThreadCommentHoverController = class SheetsThreadCommentHoverController extends Disposable {
	constructor(_hoverManagerService, _sheetsThreadCommentPopupService, _sheetsThreadCommentModel, _sheetPermissionCheckController) {
		super();
		this._hoverManagerService = _hoverManagerService;
		this._sheetsThreadCommentPopupService = _sheetsThreadCommentPopupService;
		this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
		this._sheetPermissionCheckController = _sheetPermissionCheckController;
		this._initHoverEvent();
	}
	_initHoverEvent() {
		this.disposeWithMe(this._hoverManagerService.currentCell$.pipe(debounceTime(100)).subscribe((cell) => {
			const currentPopup = this._sheetsThreadCommentPopupService.activePopup;
			if (cell && (currentPopup && currentPopup.temp || !currentPopup)) {
				const { location } = cell;
				const { unitId, subUnitId, row, col } = location;
				const commentId = this._sheetsThreadCommentModel.getByLocation(unitId, subUnitId, row, col);
				if (commentId) {
					if (!this._sheetPermissionCheckController.permissionCheckWithRanges({
						workbookTypes: [WorkbookCommentPermission],
						worksheetTypes: [WorksheetViewPermission],
						rangeTypes: [RangeProtectionPermissionViewPoint]
					}, [{
						startRow: row,
						startColumn: col,
						endRow: row,
						endColumn: col
					}], unitId, subUnitId)) return;
					const comment = this._sheetsThreadCommentModel.getComment(unitId, subUnitId, commentId);
					if (comment && !comment.resolved) this._sheetsThreadCommentPopupService.showPopup({
						unitId,
						subUnitId,
						row,
						col,
						commentId,
						temp: true
					});
				} else if (currentPopup) this._sheetsThreadCommentPopupService.hidePopup();
			}
		}));
	}
};
SheetsThreadCommentHoverController = __decorate([
	__decorateParam(0, Inject(HoverManagerService)),
	__decorateParam(1, Inject(SheetsThreadCommentPopupService)),
	__decorateParam(2, Inject(SheetsThreadCommentModel)),
	__decorateParam(3, Inject(SheetPermissionCheckController))
], SheetsThreadCommentHoverController);

//#endregion
//#region src/controllers/sheets-thread-comment.controller.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let SheetsThreadCommentController = class SheetsThreadCommentController extends Disposable {
	constructor(_menuManagerService, _shortcutService) {
		super();
		this._menuManagerService = _menuManagerService;
		this._shortcutService = _shortcutService;
		this._initMenu();
		this._initShortcut();
	}
	_initShortcut() {
		this._shortcutService.registerShortcut(AddCommentShortcut);
	}
	_initMenu() {
		this._menuManagerService.mergeMenu(menuSchema);
	}
};
SheetsThreadCommentController = __decorate([__decorateParam(0, IMenuManagerService), __decorateParam(1, IShortcutService)], SheetsThreadCommentController);

//#endregion
//#region src/plugin.ts
let UniverSheetsThreadCommentUIPlugin = class UniverSheetsThreadCommentUIPlugin extends Plugin {
	constructor(_config = defaultPluginConfig, _injector, _commandService, _renderManagerService, _configService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._commandService = _commandService;
		this._renderManagerService = _renderManagerService;
		this._configService = _configService;
		const { menu, ...rest } = merge({}, defaultPluginConfig, this._config);
		if (menu) this._configService.setConfig("menu", menu, { merge: true });
		this._configService.setConfig(SHEETS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY, rest);
	}
	onStarting() {
		this._injector.add([ComponentsController]);
		this._injector.get(ComponentsController);
		[
			[SheetsThreadCommentController],
			[SheetsThreadCommentRenderController],
			[SheetsThreadCommentCopyPasteController],
			[SheetsThreadCommentHoverController],
			[SheetsThreadCommentPopupController],
			[SheetsThreadCommentPopupService],
			[SheetsThreadCommentPermissionController]
		].forEach((dep) => {
			this._injector.add(dep);
		});
		[
			AddSheetDrawingCommentOperation,
			OpenSheetCommentPanelOperation,
			ShowAddSheetCommentModalOperation,
			ToggleSheetCommentPanelOperation
		].forEach((command) => {
			this._commandService.registerCommand(command);
		});
		this._injector.get(SheetsThreadCommentController);
	}
	onReady() {
		this._injector.get(SheetsThreadCommentRenderController);
	}
	onRendered() {
		this._renderManagerService.registerRenderModule(UniverInstanceType.UNIVER_SHEET, [SheetsThreadCommentDrawingRenderController]);
		this._injector.get(SheetsThreadCommentCopyPasteController);
		this._injector.get(SheetsThreadCommentHoverController);
		this._injector.get(SheetsThreadCommentPopupController);
		this._injector.get(SheetsThreadCommentPermissionController);
	}
};
_defineProperty(UniverSheetsThreadCommentUIPlugin, "pluginName", PLUGIN_NAME);
_defineProperty(UniverSheetsThreadCommentUIPlugin, "packageName", name);
_defineProperty(UniverSheetsThreadCommentUIPlugin, "version", version);
_defineProperty(UniverSheetsThreadCommentUIPlugin, "type", UniverInstanceType.UNIVER_SHEET);
UniverSheetsThreadCommentUIPlugin = __decorate([
	DependentOn(UniverRenderEnginePlugin, UniverThreadCommentPlugin, UniverDrawingPlugin, UniverSheetsPlugin, UniverThreadCommentUIPlugin, UniverSheetsThreadCommentPlugin, UniverSheetsUIPlugin),
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, Inject(ICommandService)),
	__decorateParam(3, IRenderManagerService),
	__decorateParam(4, IConfigService)
], UniverSheetsThreadCommentUIPlugin);

//#endregion
//#region src/mobile-plugin.ts
let UniverSheetsThreadCommentMobileUIPlugin = class UniverSheetsThreadCommentMobileUIPlugin extends UniverSheetsThreadCommentUIPlugin {
	constructor(config = defaultPluginConfig, injector, commandService, renderManagerService, configService) {
		super(config, injector, commandService, renderManagerService, configService);
	}
	onRendered() {
		this._injector.get(SheetsThreadCommentCopyPasteController);
		this._injector.get(SheetsThreadCommentPopupController);
		this._injector.get(SheetsThreadCommentPermissionController);
	}
};
_defineProperty(UniverSheetsThreadCommentMobileUIPlugin, "pluginName", UniverSheetsThreadCommentUIPlugin.pluginName);
UniverSheetsThreadCommentMobileUIPlugin = __decorate([
	DependentOn(UniverRenderEnginePlugin, UniverThreadCommentPlugin, UniverSheetsPlugin, UniverThreadCommentMobileUIPlugin, UniverSheetsThreadCommentPlugin, UniverMobileUIPlugin, UniverSheetsMobileUIPlugin),
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, Inject(ICommandService)),
	__decorateParam(3, IRenderManagerService),
	__decorateParam(4, IConfigService)
], UniverSheetsThreadCommentMobileUIPlugin);

//#endregion
export { SheetsThreadCommentPopupService, menuSchema as SheetsThreadCommentUIMenuSchema, ShowAddSheetCommentModalOperation, ToggleSheetCommentPanelOperation, UniverSheetsThreadCommentMobileUIPlugin, UniverSheetsThreadCommentUIPlugin };