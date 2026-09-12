Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_core = require("@univerjs/core");
let _univerjs_docs = require("@univerjs/docs");
let _univerjs_docs_thread_comment = require("@univerjs/docs-thread-comment");
let _univerjs_thread_comment_ui = require("@univerjs/thread-comment-ui");
let _univerjs_docs_ui = require("@univerjs/docs-ui");
let _univerjs_drawing = require("@univerjs/drawing");
let _univerjs_engine_render = require("@univerjs/engine-render");
let _univerjs_thread_comment = require("@univerjs/thread-comment");
let _univerjs_ui = require("@univerjs/ui");
let rxjs = require("rxjs");
let _univerjs_protocol = require("@univerjs/protocol");
let _univerjs_icons = require("@univerjs/icons");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");

//#region src/commands/commands/add-doc-comment.command.ts
/** Adds a document comment and activates it in the UI comment panel. */
const AddDocCommentComment = {
	id: "docs.command.add-comment",
	type: _univerjs_core.CommandType.COMMAND,
	async handler(accessor, params) {
		if (!params) return false;
		const prepared = await (0, _univerjs_docs_thread_comment.prepareDocTextRangeComment)(accessor, params);
		if (!prepared) return false;
		const activeOperation = {
			id: _univerjs_thread_comment_ui.SetActiveCommentOperation.id,
			params: {
				unitId: prepared.comment.unitId,
				subUnitId: prepared.comment.subUnitId,
				commentId: prepared.comment.id
			}
		};
		const decorationMutation = {
			id: _univerjs_docs.RichTextEditingMutation.id,
			params: {
				...prepared.decorationMutationParams,
				textRanges: null,
				noNeedSetTextRange: true
			}
		};
		return (await (0, _univerjs_core.sequenceExecute)([
			prepared.commentMutation,
			decorationMutation,
			activeOperation
		], accessor.get(_univerjs_core.ICommandService))).result;
	}
};

//#endregion
//#region src/commands/commands/delete-doc-comment.command.ts
const DeleteDocCommentComment = {
	id: "docs.command.delete-comment",
	type: _univerjs_core.CommandType.COMMAND,
	async handler(accessor, params) {
		if (!params) return false;
		const { commentId, unitId } = params;
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const doMutation = (0, _univerjs_docs_ui.deleteCustomDecorationFactory)(accessor, {
			id: commentId,
			unitId
		});
		if (doMutation) return (await (0, _univerjs_core.sequenceExecute)([doMutation], commandService)).result;
		return false;
	}
};

//#endregion
//#region src/common/const.ts
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
const DOCS_THREAD_COMMENT_PANEL = "univer.doc.thread-comment-panel";
const PLUGIN_NAME = "DOC_THREAD_COMMENT_UI_PLUGIN";

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
//#region src/services/doc-thread-comment.service.ts
let DocThreadCommentService = class DocThreadCommentService extends _univerjs_core.Disposable {
	get addingComment() {
		return this._addingComment$.getValue();
	}
	constructor(_sidebarService, _threadCommentPanelService) {
		super();
		this._sidebarService = _sidebarService;
		this._threadCommentPanelService = _threadCommentPanelService;
		_defineProperty(this, "_addingComment$", new rxjs.BehaviorSubject(void 0));
		_defineProperty(this, "addingComment$", this._addingComment$.asObservable());
		this.disposeWithMe(() => {
			this._addingComment$.complete();
		});
	}
	startAdd(comment) {
		this._addingComment$.next(comment);
	}
	endAdd() {
		this._addingComment$.next(void 0);
	}
};
DocThreadCommentService = __decorate([__decorateParam(0, _univerjs_ui.ISidebarService), __decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_thread_comment_ui.ThreadCommentPanelService))], DocThreadCommentService);

//#endregion
//#region src/commands/operations/show-comment-panel.operation.ts
const ShowCommentPanelOperation = {
	id: "docs.operation.show-comment-panel",
	type: _univerjs_core.CommandType.OPERATION,
	handler(accessor, params) {
		var _sidebarService$optio;
		const panelService = accessor.get(_univerjs_thread_comment_ui.ThreadCommentPanelService);
		const sidebarService = accessor.get(_univerjs_ui.ISidebarService);
		if (!panelService.panelVisible || ((_sidebarService$optio = sidebarService.options.children) === null || _sidebarService$optio === void 0 ? void 0 : _sidebarService$optio.label) !== "univer.doc.thread-comment-panel") {
			sidebarService.open({
				header: { title: "docs-thread-comment-ui.panel.title" },
				children: { label: DOCS_THREAD_COMMENT_PANEL },
				width: 320,
				onClose: () => panelService.setPanelVisible(false)
			});
			panelService.setPanelVisible(true);
		}
		if (params) panelService.setActiveComment(params === null || params === void 0 ? void 0 : params.activeComment);
		return true;
	}
};
const ToggleCommentPanelOperation = {
	id: "docs.operation.toggle-comment-panel",
	type: _univerjs_core.CommandType.OPERATION,
	handler(accessor) {
		var _sidebarService$optio2;
		const panelService = accessor.get(_univerjs_thread_comment_ui.ThreadCommentPanelService);
		const sidebarService = accessor.get(_univerjs_ui.ISidebarService);
		if (!panelService.panelVisible || ((_sidebarService$optio2 = sidebarService.options.children) === null || _sidebarService$optio2 === void 0 ? void 0 : _sidebarService$optio2.label) !== "univer.doc.thread-comment-panel") {
			sidebarService.open({
				header: { title: "docs-thread-comment-ui.panel.title" },
				children: { label: DOCS_THREAD_COMMENT_PANEL },
				width: 320,
				onClose: () => panelService.setPanelVisible(false)
			});
			panelService.setPanelVisible(true);
		} else {
			sidebarService.close();
			panelService.setPanelVisible(false);
			panelService.setActiveComment(null);
		}
		return true;
	}
};
const StartAddCommentOperation = {
	id: "docs.operation.start-add-comment",
	type: _univerjs_core.CommandType.OPERATION,
	handler(accessor) {
		var _renderManagerService, _doc$getBody;
		const panelService = accessor.get(_univerjs_thread_comment_ui.ThreadCommentPanelService);
		const doc = accessor.get(_univerjs_core.IUniverInstanceService).getCurrentUnitOfType(_univerjs_core.UniverInstanceType.UNIVER_DOC);
		const docSelectionManagerService = accessor.get(_univerjs_docs.DocSelectionManagerService);
		const renderManagerService = accessor.get(_univerjs_engine_render.IRenderManagerService);
		const userManagerService = accessor.get(_univerjs_core.UserManagerService);
		const docCommentService = accessor.get(DocThreadCommentService);
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const sidebarService = accessor.get(_univerjs_ui.ISidebarService);
		const textRange = docSelectionManagerService.getActiveTextRange();
		if (!doc || !textRange) return false;
		const docSelectionRenderManager = (_renderManagerService = renderManagerService.getRenderUnitById(doc.getUnitId())) === null || _renderManagerService === void 0 ? void 0 : _renderManagerService.with(_univerjs_docs_ui.DocSelectionRenderService);
		docSelectionRenderManager === null || docSelectionRenderManager === void 0 || docSelectionRenderManager.setReserveRangesStatus(true);
		if (textRange.collapsed) {
			if (panelService.panelVisible) {
				panelService.setPanelVisible(false);
				sidebarService.close();
			} else commandService.executeCommand(ShowCommentPanelOperation.id);
			return true;
		}
		commandService.executeCommand(ShowCommentPanelOperation.id);
		const unitId = doc.getUnitId();
		const dataStream = (((_doc$getBody = doc.getBody()) === null || _doc$getBody === void 0 ? void 0 : _doc$getBody.dataStream) ?? "").slice(textRange.startOffset, textRange.endOffset);
		const text = _univerjs_core.BuildTextUtils.transform.getPlainText(dataStream);
		const subUnitId = _univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID;
		const commentId = "";
		const comment = {
			unitId,
			subUnitId,
			id: commentId,
			ref: text,
			dT: (0, _univerjs_thread_comment.getDT)(),
			personId: userManagerService.getCurrentUser().userID,
			text: { dataStream: "\r\n" },
			startOffset: textRange.startOffset,
			endOffset: textRange.endOffset,
			collapsed: true,
			threadId: commentId
		};
		docSelectionRenderManager === null || docSelectionRenderManager === void 0 || docSelectionRenderManager.blur();
		docCommentService.startAdd(comment);
		panelService.setActiveComment({
			unitId,
			subUnitId,
			commentId
		});
		return true;
	}
};
const AddDocDrawingCommentOperation = {
	id: "docs.operation.add-drawing-comment",
	type: _univerjs_core.CommandType.OPERATION,
	handler(accessor) {
		const drawing = accessor.get(_univerjs_drawing.IDrawingManagerService).getFocusDrawings()[0];
		const doc = accessor.get(_univerjs_core.IUniverInstanceService).getCurrentUnitOfType(_univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (!drawing || !doc || drawing.unitId !== doc.getUnitId()) return false;
		accessor.get(_univerjs_thread_comment_ui.ThreadCommentDraftService).place({
			unitId: drawing.unitId,
			subUnitId: drawing.subUnitId,
			anchor: {
				kind: _univerjs_thread_comment.ThreadCommentAnchorKind.DOC_DRAWING,
				pageId: drawing.subUnitId,
				elementId: drawing.drawingId
			}
		});
		const panelService = accessor.get(_univerjs_thread_comment_ui.ThreadCommentPanelService);
		accessor.get(_univerjs_ui.ISidebarService).open({
			header: { title: "docs-thread-comment-ui.panel.title" },
			children: { label: DOCS_THREAD_COMMENT_PANEL },
			width: 320,
			onClose: () => panelService.setPanelVisible(false)
		});
		panelService.setPanelVisible(true);
		return true;
	}
};

//#endregion
//#region src/menu/menu.ts
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
function getCommentPermissionDisabled$(accessor) {
	const instanceService = accessor.get(_univerjs_core.IUniverInstanceService);
	const permissionService = accessor.get(_univerjs_core.IPermissionService);
	return (0, rxjs.combineLatest)([instanceService.getCurrentTypeOfUnit$(_univerjs_core.UniverInstanceType.UNIVER_DOC), permissionService.permissionPointUpdate$.pipe((0, rxjs.startWith)(void 0))]).pipe((0, rxjs.map)(([document]) => !document || !(0, _univerjs_docs.getDocumentPermissionValue)(permissionService, document.getUnitId(), document.getUnitId(), _univerjs_protocol.UnitAction.Comment)));
}
function AddDocDrawingCommentMenuItemFactory(accessor) {
	return {
		id: AddDocDrawingCommentOperation.id,
		type: _univerjs_ui.MenuItemType.BUTTON,
		icon: "InsertCommentDoubleIcon",
		title: "docs-thread-comment-ui.panel.addComment",
		tooltip: "docs-thread-comment-ui.panel.addComment",
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC),
		disabled$: getCommentPermissionDisabled$(accessor)
	};
}
const shouldDisableAddComment = (accessor) => {
	var _withCurrentTypeOfRen;
	const renderManagerService = accessor.get(_univerjs_engine_render.IRenderManagerService);
	const docSelectionManagerService = accessor.get(_univerjs_docs.DocSelectionManagerService);
	const instanceService = accessor.get(_univerjs_core.IUniverInstanceService);
	const permissionService = accessor.get(_univerjs_core.IPermissionService);
	const document = instanceService.getCurrentUnitOfType(_univerjs_core.UniverInstanceType.UNIVER_DOC);
	if (!document || !(0, _univerjs_docs.getDocumentPermissionValue)(permissionService, document.getUnitId(), document.getUnitId(), _univerjs_protocol.UnitAction.Comment)) return true;
	const skeleton = (_withCurrentTypeOfRen = (0, _univerjs_engine_render.withCurrentTypeOfRenderer)(_univerjs_core.UniverInstanceType.UNIVER_DOC, _univerjs_docs.DocSkeletonManagerService, instanceService, renderManagerService)) === null || _withCurrentTypeOfRen === void 0 ? void 0 : _withCurrentTypeOfRen.getSkeleton();
	const editArea = skeleton === null || skeleton === void 0 ? void 0 : skeleton.getViewModel().getEditArea();
	if (editArea === _univerjs_engine_render.DocumentEditArea.FOOTER || editArea === _univerjs_engine_render.DocumentEditArea.HEADER) return true;
	const range = docSelectionManagerService.getActiveTextRange();
	if (range == null || range.collapsed) return true;
	return false;
};
function AddDocCommentMenuItemFactory(accessor) {
	return {
		id: StartAddCommentOperation.id,
		type: _univerjs_ui.MenuItemType.BUTTON,
		icon: "InsertCommentDoubleIcon",
		title: "docs-thread-comment-ui.panel.addComment",
		tooltip: "docs-thread-comment-ui.panel.addComment",
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC, void 0, _univerjs_core.SHEET_EDITOR_UNITS),
		disabled$: (0, rxjs.combineLatest)([accessor.get(_univerjs_docs.DocSelectionManagerService).textSelection$.pipe((0, rxjs.debounceTime)(16), (0, rxjs.map)(() => shouldDisableAddComment(accessor)), (0, rxjs.startWith)(shouldDisableAddComment(accessor))), getCommentPermissionDisabled$(accessor)]).pipe((0, rxjs.map)(([selectionDisabled, permissionDisabled]) => selectionDisabled || permissionDisabled))
	};
}
function ToolbarDocCommentMenuItemFactory(accessor) {
	return {
		id: ToggleCommentPanelOperation.id,
		type: _univerjs_ui.MenuItemType.BUTTON,
		icon: "CommentIcon",
		title: "docs-thread-comment-ui.panel.openComments",
		tooltip: "docs-thread-comment-ui.panel.openComments",
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}

//#endregion
//#region src/menu/schema.ts
const menuSchema = {
	[_univerjs_ui.RibbonInsertGroup.MEDIA]: {
		[ToggleCommentPanelOperation.id]: {
			order: 3,
			gridLayout: {
				row: 1,
				column: 4,
				showLabel: true
			},
			menuItemFactory: ToolbarDocCommentMenuItemFactory
		},
		[StartAddCommentOperation.id]: {
			order: 3.1,
			gridLayout: {
				row: 2,
				column: 4,
				showLabel: true
			},
			menuItemFactory: AddDocCommentMenuItemFactory
		}
	},
	[_univerjs_docs_ui.FLOAT_TOOLBAR_MENU_POSITION]: { [StartAddCommentOperation.id]: {
		order: 21,
		menuItemFactory: AddDocCommentMenuItemFactory
	} },
	[_univerjs_ui.FloatingObjectToolbarPosition.DOC]: { [AddDocDrawingCommentOperation.id]: {
		order: 10,
		menuItemFactory: AddDocDrawingCommentMenuItemFactory
	} },
	[_univerjs_ui.ContextMenuPosition.MAIN_AREA]: { [_univerjs_ui.ContextMenuGroup.DATA]: { [StartAddCommentOperation.id]: {
		order: 1,
		menuItemFactory: AddDocCommentMenuItemFactory
	} } },
	[_univerjs_ui.ContextMenuPosition.DRAWING]: { [_univerjs_ui.ContextMenuGroup.DATA]: { [AddDocDrawingCommentOperation.id]: {
		order: 1,
		menuItemFactory: AddDocDrawingCommentMenuItemFactory
	} } }
};

//#endregion
//#region package.json
var name = "@univerjs/docs-thread-comment-ui";
var version = "1.0.0-insiders.20260907-70fc579";

//#endregion
//#region src/config/config.ts
const DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = "docs-thread-comment-ui.config";
const configSymbol = Symbol(DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {};

//#endregion
//#region src/views/DocThreadCommentPanel.tsx
function getDocCommentPanelSubUnitId(draft, unitId) {
	return draft && draft.unitId === unitId ? draft.subUnitId : _univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID;
}
const DocThreadCommentPanel = () => {
	const univerInstanceService = (0, _univerjs_ui.useDependency)(_univerjs_core.IUniverInstanceService);
	const injector = (0, _univerjs_ui.useDependency)(_univerjs_core.Injector);
	const doc = (0, _univerjs_ui.useObservable)((0, react.useMemo)(() => univerInstanceService.getCurrentTypeOfUnit$(_univerjs_core.UniverInstanceType.UNIVER_DOC).pipe((0, rxjs.filter)((doc) => !!doc && !(0, _univerjs_core.isInternalEditorID)(doc.getUnitId()))), [univerInstanceService]));
	const draftService = (0, _univerjs_ui.useDependency)(_univerjs_thread_comment_ui.ThreadCommentDraftService);
	const drawingDraft = (0, _univerjs_ui.useObservable)(draftService.draft$, draftService.draft);
	const subUnitId$ = (0, react.useMemo)(() => new rxjs.Observable((sub) => sub.next(getDocCommentPanelSubUnitId(drawingDraft, doc === null || doc === void 0 ? void 0 : doc.getUnitId()))), [doc, drawingDraft]);
	const docSelectionManagerService = (0, _univerjs_ui.useDependency)(_univerjs_docs.DocSelectionManagerService);
	const selectionChange$ = (0, react.useMemo)(() => docSelectionManagerService.textSelection$.pipe((0, rxjs.debounceTime)(16)), [docSelectionManagerService.textSelection$]);
	const permissionService = (0, _univerjs_ui.useDependency)(_univerjs_core.IPermissionService);
	const disableAddChange$ = (0, react.useMemo)(() => (0, rxjs.merge)(selectionChange$, permissionService.permissionPointUpdate$), [permissionService.permissionPointUpdate$, selectionChange$]);
	const disableAdd = (0, _univerjs_ui.useObservable)(() => disableAddChange$.pipe((0, rxjs.map)(() => shouldDisableAddComment(injector))), shouldDisableAddComment(injector), false, [disableAddChange$, injector]);
	const commandService = (0, _univerjs_ui.useDependency)(_univerjs_core.ICommandService);
	const threadCommentModel = (0, _univerjs_ui.useDependency)(_univerjs_thread_comment.ThreadCommentModel);
	(0, _univerjs_ui.useObservable)(threadCommentModel.commentUpdate$);
	const docCommentService = (0, _univerjs_ui.useDependency)(DocThreadCommentService);
	const textTempComment = (0, _univerjs_ui.useObservable)(docCommentService.addingComment$);
	const userManagerService = (0, _univerjs_ui.useDependency)(_univerjs_core.UserManagerService);
	const drawingTempComment = (drawingDraft === null || drawingDraft === void 0 ? void 0 : drawingDraft.anchor.kind) === _univerjs_thread_comment.ThreadCommentAnchorKind.DOC_DRAWING && drawingDraft.unitId === (doc === null || doc === void 0 ? void 0 : doc.getUnitId()) ? {
		id: "",
		threadId: "",
		unitId: drawingDraft.unitId,
		subUnitId: drawingDraft.subUnitId,
		ref: (0, _univerjs_thread_comment.serializeThreadCommentAnchor)(drawingDraft.anchor),
		dT: "",
		personId: userManagerService.getCurrentUser().userID,
		text: { dataStream: "\r\n" }
	} : null;
	const tempComment = drawingTempComment ?? textTempComment;
	const drawingIds = new Set(Object.keys((doc === null || doc === void 0 ? void 0 : doc.getSnapshot().drawings) ?? {}));
	const isDrawingComment = (comment) => {
		const anchor = (0, _univerjs_thread_comment.deserializeThreadCommentAnchor)(comment.ref);
		return (anchor === null || anchor === void 0 ? void 0 : anchor.kind) === _univerjs_thread_comment.ThreadCommentAnchorKind.DOC_DRAWING || comment.ref.startsWith("#") && drawingIds.has(comment.ref.slice(1));
	};
	const drawingCommentIds = doc ? threadCommentModel.getUnit(doc.getUnitId()).filter((thread) => isDrawingComment(thread.root)).map((thread) => thread.root.id) : [];
	const [commentIds, setCommentIds] = (0, react.useState)([]);
	(0, react.useEffect)(() => {
		const set = /* @__PURE__ */ new Set();
		const customRanges = doc === null || doc === void 0 ? void 0 : doc.getCustomDecorations();
		setCommentIds((customRanges === null || customRanges === void 0 ? void 0 : customRanges.map((r) => r.id).filter((i) => {
			const hasRepeat = set.has(i);
			set.add(i);
			return !hasRepeat;
		})) ?? []);
		const dispose = commandService.onCommandExecuted((command) => {
			if (command.id === _univerjs_docs.RichTextEditingMutation.id) {
				const set = /* @__PURE__ */ new Set();
				const customRanges = doc === null || doc === void 0 ? void 0 : doc.getCustomDecorations();
				setCommentIds((customRanges === null || customRanges === void 0 ? void 0 : customRanges.map((r) => r.id).filter((i) => {
					const hasRepeat = set.has(i);
					set.add(i);
					return !hasRepeat;
				})) ?? []);
			}
		});
		return () => {
			dispose.dispose();
		};
	}, [commandService, doc]);
	if (!doc) return null;
	const unitId = doc.getUnitId();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_thread_comment_ui.ThreadCommentPanel, {
		unitId,
		subUnitId$,
		type: _univerjs_core.UniverInstanceType.UNIVER_DOC,
		onAdd: () => {
			commandService.executeCommand(StartAddCommentOperation.id);
		},
		getSubUnitName: () => "",
		disableAdd,
		tempComment,
		onAddComment: async (comment) => {
			if (drawingTempComment && !comment.parentId) return true;
			if (!comment.parentId) {
				const params = {
					unitId,
					range: textTempComment,
					comment
				};
				if (!await commandService.executeCommand(AddDocCommentComment.id, params)) throw new Error("Failed to add document comment.");
				docCommentService.endAdd();
				return false;
			}
			return true;
		},
		onAfterDeleteComment: async (comment) => {
			if (!comment.parentId) {
				if (isDrawingComment(comment)) return;
				const params = {
					unitId,
					commentId: comment.id
				};
				await commandService.executeCommand(DeleteDocCommentComment.id, params);
			}
		},
		showComments: [...commentIds, ...drawingCommentIds],
		onTempCommentClose: () => draftService.cancel(),
		formatRef: (comment) => {
			const anchor = (0, _univerjs_thread_comment.deserializeThreadCommentAnchor)(comment.ref);
			return (anchor === null || anchor === void 0 ? void 0 : anchor.kind) === _univerjs_thread_comment.ThreadCommentAnchorKind.DOC_DRAWING ? `#${anchor.elementId}` : comment.ref;
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
let ComponentsController = class ComponentsController extends _univerjs_core.Disposable {
	constructor(_componentManager, _iconManager) {
		super();
		this._componentManager = _componentManager;
		this._iconManager = _iconManager;
		this._registerComponents();
		this._registerIcons();
	}
	_registerComponents() {
		[[DOCS_THREAD_COMMENT_PANEL, DocThreadCommentPanel]].forEach(([id, comp]) => {
			this.disposeWithMe(this._componentManager.register(id, comp));
		});
	}
	_registerIcons() {
		this.disposeWithMe(this._iconManager.register({
			CommentIcon: _univerjs_icons.CommentIcon,
			InsertCommentDoubleIcon: _univerjs_icons.InsertCommentDoubleIcon
		}));
	}
};
ComponentsController = __decorate([__decorateParam(0, (0, _univerjs_core.Inject)(_univerjs_ui.ComponentManager)), __decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_ui.IconManager))], ComponentsController);

//#endregion
//#region src/controllers/doc-thread-comment-selection.controller.ts
let DocThreadCommentSelectionController = class DocThreadCommentSelectionController extends _univerjs_core.Disposable {
	constructor(_threadCommentPanelService, _univerInstanceService, _commandService, _docThreadCommentService, _renderManagerService, _threadCommentModel) {
		super();
		this._threadCommentPanelService = _threadCommentPanelService;
		this._univerInstanceService = _univerInstanceService;
		this._commandService = _commandService;
		this._docThreadCommentService = _docThreadCommentService;
		this._renderManagerService = _renderManagerService;
		this._threadCommentModel = _threadCommentModel;
		this._initSelectionChange();
		this._initActiveCommandChange();
	}
	_initSelectionChange() {
		let lastSelection;
		this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
			if (commandInfo.id === _univerjs_docs.SetTextSelectionsOperation.id) {
				const { unitId, ranges } = commandInfo.params;
				if ((0, _univerjs_core.isInternalEditorID)(unitId)) return;
				const doc = this._univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
				const primary = ranges[0];
				if ((lastSelection === null || lastSelection === void 0 ? void 0 : lastSelection.startOffset) === (primary === null || primary === void 0 ? void 0 : primary.startOffset) && (lastSelection === null || lastSelection === void 0 ? void 0 : lastSelection.endOffset) === (primary === null || primary === void 0 ? void 0 : primary.endOffset)) return;
				lastSelection = primary;
				if (primary && doc) {
					const { startOffset, endOffset, collapsed } = primary;
					const selectionEnd = collapsed ? startOffset : endOffset - 1;
					const customRange = this._findActiveCommentDecoration(doc, unitId, startOffset, selectionEnd);
					if (customRange) {
						this._commandService.executeCommand(ShowCommentPanelOperation.id, { activeComment: {
							unitId,
							subUnitId: _univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID,
							commentId: customRange.id
						} });
						return;
					}
				}
				if (!this._threadCommentPanelService.activeCommentId) return;
				const addingComment = this._docThreadCommentService.addingComment;
				const activeComment = this._threadCommentPanelService.activeCommentId;
				if (addingComment && (activeComment === null || activeComment === void 0 ? void 0 : activeComment.unitId) === addingComment.unitId && (activeComment === null || activeComment === void 0 ? void 0 : activeComment.subUnitId) === _univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID && (activeComment === null || activeComment === void 0 ? void 0 : activeComment.commentId) === addingComment.id) return;
				this._commandService.executeCommand(_univerjs_thread_comment_ui.SetActiveCommentOperation.id);
			}
		}));
	}
	_findActiveCommentDecoration(doc, unitId, selectionStart, selectionEnd) {
		var _doc$getBody;
		return [...((_doc$getBody = doc.getBody()) === null || _doc$getBody === void 0 ? void 0 : _doc$getBody.customDecorations) ?? []].reverse().filter((decoration) => decoration.type === _univerjs_core.CustomDecorationType.COMMENT && decoration.startIndex <= selectionStart && decoration.endIndex >= selectionEnd).sort((left, right) => left.endIndex - left.startIndex - (right.endIndex - right.startIndex)).find((decoration) => {
			const comment = this._threadCommentModel.getComment(unitId, _univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID, decoration.id);
			return comment && !comment.resolved;
		});
	}
	_initActiveCommandChange() {
		this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe((activeComment) => {
			var _this$_docThreadComme;
			if (activeComment) {
				const doc = this._univerInstanceService.getUnit(activeComment.unitId);
				if (doc) {
					var _this$_renderManagerS, _doc$getBody2;
					const backScrollController = (_this$_renderManagerS = this._renderManagerService.getRenderUnitById(activeComment.unitId)) === null || _this$_renderManagerS === void 0 ? void 0 : _this$_renderManagerS.with(_univerjs_docs_ui.DocBackScrollRenderController);
					const customRange = (_doc$getBody2 = doc.getBody()) === null || _doc$getBody2 === void 0 || (_doc$getBody2 = _doc$getBody2.customDecorations) === null || _doc$getBody2 === void 0 ? void 0 : _doc$getBody2.find((range) => range.id === activeComment.commentId);
					if (customRange && backScrollController) backScrollController.scrollToRange({
						startOffset: customRange.startIndex,
						endOffset: customRange.endIndex,
						collapsed: false
					});
				}
			}
			if (!activeComment || activeComment.commentId !== ((_this$_docThreadComme = this._docThreadCommentService.addingComment) === null || _this$_docThreadComme === void 0 ? void 0 : _this$_docThreadComme.id)) this._docThreadCommentService.endAdd();
		}));
	}
};
DocThreadCommentSelectionController = __decorate([
	__decorateParam(0, (0, _univerjs_core.Inject)(_univerjs_thread_comment_ui.ThreadCommentPanelService)),
	__decorateParam(1, _univerjs_core.IUniverInstanceService),
	__decorateParam(2, _univerjs_core.ICommandService),
	__decorateParam(3, (0, _univerjs_core.Inject)(DocThreadCommentService)),
	__decorateParam(4, _univerjs_engine_render.IRenderManagerService),
	__decorateParam(5, (0, _univerjs_core.Inject)(_univerjs_thread_comment.ThreadCommentModel))
], DocThreadCommentSelectionController);

//#endregion
//#region src/controllers/render-controllers/render.controller.ts
const DOC_COMMENT_DRAWING_OVERLAY_KEY = "doc-thread-comment-drawing-overlay";
const DOC_COMMENT_DRAWING_OVERLAY_LAYER_INDEX = 10100;
let DocThreadCommentRenderController = class DocThreadCommentRenderController extends _univerjs_core.Disposable {
	constructor(_context, _docInterceptorService, _threadCommentPanelService, _univerInstanceService, _threadCommentModel, _commandService, _drawingManagerService, _themeService) {
		super();
		this._context = _context;
		this._docInterceptorService = _docInterceptorService;
		this._threadCommentPanelService = _threadCommentPanelService;
		this._univerInstanceService = _univerInstanceService;
		this._threadCommentModel = _threadCommentModel;
		this._commandService = _commandService;
		this._drawingManagerService = _drawingManagerService;
		this._themeService = _themeService;
		_defineProperty(this, "_drawingOverlay", void 0);
		_defineProperty(this, "_drawingCommentSubUnits", /* @__PURE__ */ new Map());
		this._drawingOverlay = new _univerjs_thread_comment_ui.ThreadCommentCanvasOverlay(DOC_COMMENT_DRAWING_OVERLAY_KEY, {
			...this._getDrawingOverlayColors(),
			zoomRatio: 1,
			markers: [],
			underlines: []
		});
		this._context.scene.addObject(this._drawingOverlay, DOC_COMMENT_DRAWING_OVERLAY_LAYER_INDEX);
		this._interceptorViewModel();
		this._initReRender();
		this._initSyncComments();
		this._initDrawingOverlay();
	}
	_initReRender() {
		[this._threadCommentPanelService.activeCommentId$, this._threadCommentPanelService.hoveredCommentId$].forEach((observable) => this.disposeWithMe(observable.pipe((0, rxjs.skip)(1), (0, rxjs.startWith)(void 0), (0, rxjs.pairwise)()).subscribe(([previous, current]) => {
			var _this$_univerInstance;
			const currentUnitId = (_this$_univerInstance = this._univerInstanceService.getCurrentUnitOfType(_univerjs_core.UniverInstanceType.UNIVER_DOC)) === null || _this$_univerInstance === void 0 ? void 0 : _this$_univerInstance.getUnitId();
			if ((/* @__PURE__ */ new Set([
				previous === null || previous === void 0 ? void 0 : previous.unitId,
				current === null || current === void 0 ? void 0 : current.unitId,
				currentUnitId
			])).has(this._context.unitId)) {
				var _this$_context$mainCo;
				(_this$_context$mainCo = this._context.mainComponent) === null || _this$_context$mainCo === void 0 || _this$_context$mainCo.makeDirty(true);
			}
		})));
		this.disposeWithMe(this._threadCommentModel.commentUpdate$.subscribe((update) => {
			if (update.type === "resolve" && update.unitId === this._context.unitId) {
				var _this$_context$mainCo2;
				(_this$_context$mainCo2 = this._context.mainComponent) === null || _this$_context$mainCo2 === void 0 || _this$_context$mainCo2.makeDirty(true);
			}
			if (update.unitId === this._context.unitId) this._syncDrawingOverlay();
		}));
	}
	_initDrawingOverlay() {
		this.disposeWithMe((0, _univerjs_core.toDisposable)(this._drawingOverlay.onPointerDown$.subscribeEvent((_event, state) => {
			const commentId = this._drawingOverlay.hitCommentId;
			const subUnitId = commentId && this._drawingCommentSubUnits.get(commentId);
			if (!commentId || !subUnitId) return;
			state.stopPropagation();
			this._commandService.executeCommand(ShowCommentPanelOperation.id, { activeComment: {
				unitId: this._context.unitId,
				subUnitId,
				commentId,
				trigger: "doc-canvas"
			} });
		})));
		this.disposeWithMe((0, _univerjs_core.toDisposable)(this._context.engine.onTransformChange$.subscribeEvent(() => this._syncDrawingOverlay())));
		[this._threadCommentPanelService.activeCommentId$, this._threadCommentPanelService.hoveredCommentId$].forEach((observable) => this.disposeWithMe(observable.subscribe(() => this._syncDrawingOverlay())));
		[
			this._drawingManagerService.add$,
			this._drawingManagerService.update$,
			this._drawingManagerService.remove$
		].forEach((observable) => this.disposeWithMe(observable.subscribe((drawings) => {
			if (drawings.some((drawing) => drawing.unitId === this._context.unitId)) this._syncDrawingOverlay();
		})));
		this.disposeWithMe(this._themeService.currentTheme$.subscribe(() => this._syncDrawingOverlay()));
		this._syncDrawingOverlay();
	}
	_syncDrawingOverlay() {
		const underlines = /* @__PURE__ */ new Map();
		this._drawingCommentSubUnits.clear();
		this._threadCommentModel.query({
			unitIds: [this._context.unitId],
			anchorKinds: [_univerjs_thread_comment.ThreadCommentAnchorKind.DOC_DRAWING],
			resolved: false
		}).forEach(({ root, subUnitId }) => {
			const anchor = (0, _univerjs_thread_comment.deserializeThreadCommentAnchor)(root.ref);
			if ((anchor === null || anchor === void 0 ? void 0 : anchor.kind) !== _univerjs_thread_comment.ThreadCommentAnchorKind.DOC_DRAWING) return;
			const outline = this._getDrawingOutline(anchor.pageId ?? subUnitId, anchor.elementId);
			if (!outline) return;
			this._drawingCommentSubUnits.set(root.id, subUnitId);
			underlines.set(`${anchor.pageId ?? subUnitId}\0${anchor.elementId}`, {
				commentId: root.id,
				left: outline.left,
				top: outline.top + outline.height + 2,
				width: outline.width
			});
		});
		const focusedCommentIds = [];
		const focusOutlines = /* @__PURE__ */ new Map();
		[this._threadCommentPanelService.activeCommentId, this._threadCommentPanelService.hoveredCommentId].forEach((target) => {
			if (!target || target.unitId !== this._context.unitId) return;
			const comment = this._threadCommentModel.getComment(target.unitId, target.subUnitId, target.commentId);
			const anchor = comment && (0, _univerjs_thread_comment.deserializeThreadCommentAnchor)(comment.ref);
			if ((anchor === null || anchor === void 0 ? void 0 : anchor.kind) !== _univerjs_thread_comment.ThreadCommentAnchorKind.DOC_DRAWING) return;
			focusedCommentIds.push(target.commentId);
			const outline = this._getDrawingOutline(anchor.pageId ?? target.subUnitId, anchor.elementId);
			if (outline) focusOutlines.set(`${anchor.pageId ?? target.subUnitId}\0${anchor.elementId}`, outline);
		});
		this._drawingOverlay.updateState({
			...this._getDrawingOverlayColors(),
			markers: [],
			underlines: Array.from(underlines.values()),
			focusedCommentIds,
			focusOutlines: Array.from(focusOutlines.values())
		});
	}
	_getDrawingOutline(subUnitId, drawingId) {
		var _this$_context$scene$, _this$_context$scene;
		const objectKey = (0, _univerjs_drawing.getDrawingShapeKeyByDrawingSearch)({
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
	_getDrawingOverlayColors() {
		return {
			accentColor: this._themeService.getColorFromTheme("yellow.400"),
			foregroundColor: this._themeService.getColorFromTheme("gray.900"),
			outlineColor: this._themeService.getColorFromTheme("white")
		};
	}
	_interceptorViewModel() {
		this._docInterceptorService.intercept(_univerjs_docs.DOC_INTERCEPTOR_POINT.CUSTOM_DECORATION, { handler: (data, pos, next) => {
			if (!data) return next(data);
			const { unitId } = pos;
			const focusedComments = [this._threadCommentPanelService.activeCommentId, this._threadCommentPanelService.hoveredCommentId];
			const comment = this._threadCommentModel.getComment(unitId, _univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID, data.id);
			if (!comment) return next({
				...data,
				show: false
			});
			const isActive = focusedComments.some((focusedComment) => (focusedComment === null || focusedComment === void 0 ? void 0 : focusedComment.unitId) === unitId && focusedComment.subUnitId === _univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID && focusedComment.commentId === data.id);
			return next({
				...data,
				active: isActive,
				show: !comment.resolved
			});
		} });
	}
	_initSyncComments() {
		var _this$_context$unit$g;
		const unitId = this._context.unit.getUnitId();
		const subUnitId = _univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID;
		const threadIds = ((_this$_context$unit$g = this._context.unit.getBody()) === null || _this$_context$unit$g === void 0 || (_this$_context$unit$g = _this$_context$unit$g.customDecorations) === null || _this$_context$unit$g === void 0 ? void 0 : _this$_context$unit$g.filter((i) => i.type === _univerjs_core.CustomDecorationType.COMMENT).map((i) => i.id)) ?? [];
		threadIds.length && this._threadCommentModel.syncThreadComments(this._context.unit.getUnitId(), _univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID, threadIds);
		let prevThreadIds = threadIds.sort();
		this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
			if (commandInfo.id === _univerjs_docs.RichTextEditingMutation.id) {
				var _this$_context$unit$g2;
				if (commandInfo.params.unitId !== this._context.unit.getUnitId()) return;
				const currentThreadIds = ((_this$_context$unit$g2 = this._context.unit.getBody()) === null || _this$_context$unit$g2 === void 0 || (_this$_context$unit$g2 = _this$_context$unit$g2.customDecorations) === null || _this$_context$unit$g2 === void 0 ? void 0 : _this$_context$unit$g2.filter((i) => i.type === _univerjs_core.CustomDecorationType.COMMENT).map((i) => i.id)) ?? [];
				const currentThreadIdsSorted = currentThreadIds.sort();
				if (JSON.stringify(prevThreadIds) !== JSON.stringify(currentThreadIdsSorted)) {
					const preIds = new Set(prevThreadIds);
					const addIds = /* @__PURE__ */ new Set();
					currentThreadIds.forEach((id) => {
						if (!preIds.has(id)) addIds.add(id);
					});
					prevThreadIds = currentThreadIdsSorted;
					this._threadCommentModel.syncThreadComments(unitId, subUnitId, [...addIds]);
				}
			}
		}));
	}
};
DocThreadCommentRenderController = __decorate([
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_docs.DocInterceptorService)),
	__decorateParam(2, (0, _univerjs_core.Inject)(_univerjs_thread_comment_ui.ThreadCommentPanelService)),
	__decorateParam(3, _univerjs_core.IUniverInstanceService),
	__decorateParam(4, (0, _univerjs_core.Inject)(_univerjs_thread_comment.ThreadCommentModel)),
	__decorateParam(5, _univerjs_core.ICommandService),
	__decorateParam(6, _univerjs_drawing.IDrawingManagerService),
	__decorateParam(7, (0, _univerjs_core.Inject)(_univerjs_core.ThemeService))
], DocThreadCommentRenderController);

//#endregion
//#region src/controllers/ui.controller.ts
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
let DocThreadCommentUIController = class DocThreadCommentUIController extends _univerjs_core.Disposable {
	constructor(_commandService, _menuManagerService) {
		super();
		this._commandService = _commandService;
		this._menuManagerService = _menuManagerService;
		this._initCommands();
		this._initMenus();
	}
	_initCommands() {
		[
			AddDocDrawingCommentOperation,
			AddDocCommentComment,
			DeleteDocCommentComment,
			ShowCommentPanelOperation,
			StartAddCommentOperation,
			ToggleCommentPanelOperation
		].forEach((command) => {
			this.disposeWithMe(this._commandService.registerCommand(command));
		});
	}
	_initMenus() {
		this._menuManagerService.appendRootMenu({ [_univerjs_docs_ui.FLOAT_TOOLBAR_MENU_POSITION]: {} });
		this._menuManagerService.mergeMenu(menuSchema);
	}
};
DocThreadCommentUIController = __decorate([__decorateParam(0, _univerjs_core.ICommandService), __decorateParam(1, _univerjs_ui.IMenuManagerService)], DocThreadCommentUIController);

//#endregion
//#region src/plugin.ts
const STARTING_DEPENDENCIES = [
	[DocThreadCommentUIController],
	[DocThreadCommentSelectionController],
	[DocThreadCommentService]
];
let UniverDocsThreadCommentUIPlugin = class UniverDocsThreadCommentUIPlugin extends _univerjs_core.Plugin {
	constructor(_config = defaultPluginConfig, _injector, _renderManagerSrv, _configService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._renderManagerSrv = _renderManagerSrv;
		this._configService = _configService;
		const { menu, ...rest } = (0, _univerjs_core.merge)({}, defaultPluginConfig, this._config);
		if (menu) this._configService.setConfig("menu", menu, { merge: true });
		this._configService.setConfig(DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY, rest);
	}
	onStarting() {
		this._injector.add([ComponentsController]);
		this._injector.get(ComponentsController);
		STARTING_DEPENDENCIES.forEach((dep) => {
			this._injector.add(dep);
		});
	}
	onRendered() {
		this._initRenderModule();
		this._injector.get(DocThreadCommentSelectionController);
		this._injector.get(DocThreadCommentUIController);
	}
	_initRenderModule() {
		this._renderManagerSrv.registerRenderModule(_univerjs_core.UniverInstanceType.UNIVER_DOC, [DocThreadCommentRenderController]);
	}
};
_defineProperty(UniverDocsThreadCommentUIPlugin, "pluginName", PLUGIN_NAME);
_defineProperty(UniverDocsThreadCommentUIPlugin, "packageName", name);
_defineProperty(UniverDocsThreadCommentUIPlugin, "version", version);
_defineProperty(UniverDocsThreadCommentUIPlugin, "type", _univerjs_core.UniverInstanceType.UNIVER_DOC);
UniverDocsThreadCommentUIPlugin = __decorate([
	(0, _univerjs_core.DependentOn)(_univerjs_docs.UniverDocsPlugin, _univerjs_docs_thread_comment.UniverDocsThreadCommentPlugin, _univerjs_thread_comment.UniverThreadCommentPlugin, _univerjs_drawing.UniverDrawingPlugin, _univerjs_engine_render.UniverRenderEnginePlugin, _univerjs_docs_ui.UniverDocsUIPlugin, _univerjs_thread_comment_ui.UniverThreadCommentUIPlugin),
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_core.Injector)),
	__decorateParam(2, _univerjs_engine_render.IRenderManagerService),
	__decorateParam(3, _univerjs_core.IConfigService)
], UniverDocsThreadCommentUIPlugin);

//#endregion
exports.AddDocCommentComment = AddDocCommentComment;
exports.DeleteDocCommentComment = DeleteDocCommentComment;
exports.DocsThreadCommentUIMenuSchema = menuSchema;
exports.ShowCommentPanelOperation = ShowCommentPanelOperation;
exports.StartAddCommentOperation = StartAddCommentOperation;
Object.defineProperty(exports, 'UniverDocsThreadCommentUIPlugin', {
  enumerable: true,
  get: function () {
    return UniverDocsThreadCommentUIPlugin;
  }
});