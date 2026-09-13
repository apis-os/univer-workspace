Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_core = require("@univerjs/core");
let _univerjs_ui = require("@univerjs/ui");
let rxjs = require("rxjs");
let _univerjs_docs_ui = require("@univerjs/docs-ui");
let _univerjs_thread_comment = require("@univerjs/thread-comment");
let _univerjs_engine_render = require("@univerjs/engine-render");
let _univerjs_design = require("@univerjs/design");
let _univerjs_icons = require("@univerjs/icons");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");

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
//#region src/services/thread-comment-panel.service.ts
let ThreadCommentPanelService = class ThreadCommentPanelService extends _univerjs_core.Disposable {
	constructor(_sidebarService) {
		super();
		this._sidebarService = _sidebarService;
		_defineProperty(this, "_panelVisible", false);
		_defineProperty(this, "_panelVisible$", new rxjs.BehaviorSubject(false));
		_defineProperty(this, "_activeCommentId", void 0);
		_defineProperty(this, "_activeCommentId$", new rxjs.BehaviorSubject(void 0));
		_defineProperty(this, "_hoveredCommentId", void 0);
		_defineProperty(this, "_hoveredCommentId$", new rxjs.BehaviorSubject(void 0));
		_defineProperty(this, "panelVisible$", this._panelVisible$.asObservable());
		_defineProperty(this, "activeCommentId$", this._activeCommentId$.asObservable());
		_defineProperty(this, "hoveredCommentId$", this._hoveredCommentId$.asObservable());
		this._init();
		this.disposeWithMe(() => {
			this._activeCommentId$.complete();
			this._hoveredCommentId$.complete();
			this._panelVisible$.complete();
		});
	}
	_init() {
		this.disposeWithMe(this._sidebarService.sidebarOptions$.subscribe((opt) => {
			if (!opt.visible) this.setPanelVisible(false);
		}));
	}
	get panelVisible() {
		return this._panelVisible;
	}
	get activeCommentId() {
		return this._activeCommentId;
	}
	get hoveredCommentId() {
		return this._hoveredCommentId;
	}
	setPanelVisible(visible) {
		this._panelVisible = visible;
		this._panelVisible$.next(visible);
		if (!visible) this.setHoveredComment(void 0);
	}
	setActiveComment(commentInfo) {
		this._activeCommentId = commentInfo;
		this._activeCommentId$.next(commentInfo);
	}
	setHoveredComment(commentInfo) {
		this._hoveredCommentId = commentInfo;
		this._hoveredCommentId$.next(commentInfo);
	}
};
ThreadCommentPanelService = __decorate([__decorateParam(0, (0, _univerjs_core.Inject)(_univerjs_ui.ISidebarService))], ThreadCommentPanelService);

//#endregion
//#region src/commands/operations/comment.operations.ts
const SetActiveCommentOperation = {
	id: "thread-comment-ui.operation.set-active-comment",
	type: _univerjs_core.CommandType.OPERATION,
	handler(accessor, params) {
		accessor.get(ThreadCommentPanelService).setActiveComment(params);
		return true;
	}
};

//#endregion
//#region src/config/config.ts
const THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = "thread-comment-ui.config";
const configSymbol = Symbol(THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {};

//#endregion
//#region package.json
var name = "@univerjs/thread-comment-ui";
var version = "1.0.0-insiders.20260907-70fc579";

//#endregion
//#region src/services/thread-comment-draft.service.ts
let ThreadCommentDraftService = class ThreadCommentDraftService extends _univerjs_core.Disposable {
	constructor(instanceService, _userManagerService) {
		super();
		this._userManagerService = _userManagerService;
		_defineProperty(this, "_placementType$", new rxjs.BehaviorSubject(null));
		_defineProperty(this, "_draft$", new rxjs.BehaviorSubject(null));
		_defineProperty(this, "_placementUnitId", void 0);
		_defineProperty(this, "_ownerUserId", void 0);
		_defineProperty(this, "placementType$", this._placementType$.asObservable());
		_defineProperty(this, "draft$", this._draft$.asObservable());
		this.disposeWithMe(instanceService.unitDisposed$.subscribe((unit) => {
			var _this$draft;
			if (((_this$draft = this.draft) === null || _this$draft === void 0 ? void 0 : _this$draft.unitId) === unit.getUnitId() || this._placementUnitId === unit.getUnitId()) this.cancel();
		}));
		this.disposeWithMe(instanceService.focused$.subscribe((unitId) => {
			if (unitId && this._placementUnitId && unitId !== this._placementUnitId) this.cancel();
		}));
		this.disposeWithMe(this._userManagerService.currentUser$.subscribe((user) => {
			if (this._ownerUserId && (user === null || user === void 0 ? void 0 : user.userID) !== this._ownerUserId) this.cancel();
		}));
		if (typeof window !== "undefined") {
			const cancelPlacement = (event) => {
				if (event.key === "Escape" && (this.placementType || this.draft)) this.cancel();
			};
			window.addEventListener("keydown", cancelPlacement);
			this.disposeWithMe((0, _univerjs_core.toDisposable)(() => window.removeEventListener("keydown", cancelPlacement)));
		}
	}
	get placementType() {
		return this._placementType$.value;
	}
	get draft() {
		return this._draft$.value;
	}
	startPlacement(type, unitId) {
		if (this.placementType === type && this._placementUnitId === unitId) {
			this.cancel();
			return;
		}
		this._ownerUserId = this._userManagerService.getCurrentUser().userID;
		this._placementUnitId = unitId;
		this._draft$.next(null);
		this._placementType$.next(type);
	}
	place(draft) {
		this._ownerUserId = this._userManagerService.getCurrentUser().userID;
		this._placementUnitId = void 0;
		this._placementType$.next(null);
		this._draft$.next(draft);
	}
	cancel() {
		this._ownerUserId = void 0;
		this._placementUnitId = void 0;
		this._placementType$.next(null);
		this._draft$.next(null);
	}
	dispose() {
		this._placementType$.complete();
		this._draft$.complete();
		super.dispose();
	}
};
ThreadCommentDraftService = __decorate([__decorateParam(0, _univerjs_core.IUniverInstanceService), __decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_core.UserManagerService))], ThreadCommentDraftService);

//#endregion
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
const PLUGIN_NAME = "UNIVER_THREAD_COMMENT_UI_PLUGIN";

//#endregion
//#region src/plugin.ts
let UniverThreadCommentUIPlugin = class UniverThreadCommentUIPlugin extends _univerjs_core.Plugin {
	constructor(_config = defaultPluginConfig, _injector, _commandService, _configService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._commandService = _commandService;
		this._configService = _configService;
		const { menu, ...rest } = (0, _univerjs_core.merge)({}, defaultPluginConfig, this._config);
		if (menu) this._configService.setConfig("menu", menu, { merge: true });
		this._configService.setConfig(THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY, rest);
	}
	onStarting() {
		var _this$_config;
		(0, _univerjs_core.mergeOverrideWithDependencies)([[ThreadCommentDraftService], [ThreadCommentPanelService]], (_this$_config = this._config) === null || _this$_config === void 0 ? void 0 : _this$_config.overrides).forEach((dep) => {
			this._injector.add(dep);
		});
		[SetActiveCommentOperation].forEach((command) => {
			this._commandService.registerCommand(command);
		});
	}
};
_defineProperty(UniverThreadCommentUIPlugin, "pluginName", PLUGIN_NAME);
_defineProperty(UniverThreadCommentUIPlugin, "packageName", name);
_defineProperty(UniverThreadCommentUIPlugin, "version", version);
_defineProperty(UniverThreadCommentUIPlugin, "type", _univerjs_core.UniverInstanceType.UNIVER_UNKNOWN);
UniverThreadCommentUIPlugin = __decorate([
	(0, _univerjs_core.DependentOn)(_univerjs_thread_comment.UniverThreadCommentPlugin, _univerjs_docs_ui.UniverDocsUIPlugin),
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_core.Injector)),
	__decorateParam(2, _univerjs_core.ICommandService),
	__decorateParam(3, _univerjs_core.IConfigService)
], UniverThreadCommentUIPlugin);

//#endregion
//#region src/mobile-plugin.ts
let UniverThreadCommentMobileUIPlugin = class UniverThreadCommentMobileUIPlugin extends UniverThreadCommentUIPlugin {
	constructor(config = defaultPluginConfig, injector, commandService, configService) {
		super(config, injector, commandService, configService);
	}
};
_defineProperty(UniverThreadCommentMobileUIPlugin, "pluginName", UniverThreadCommentUIPlugin.pluginName);
UniverThreadCommentMobileUIPlugin = __decorate([
	(0, _univerjs_core.DependentOn)(_univerjs_thread_comment.UniverThreadCommentPlugin, _univerjs_docs_ui.UniverDocsUIPlugin, _univerjs_ui.UniverMobileUIPlugin),
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_core.Injector)),
	__decorateParam(2, _univerjs_core.ICommandService),
	__decorateParam(3, _univerjs_core.IConfigService)
], UniverThreadCommentMobileUIPlugin);

//#endregion
//#region src/render-objects/thread-comment-canvas-overlay.ts
const MARKER_SIZE = 24;
const MARKER_IDLE_OPACITY = .58;
const MARKER_PREVIEW_OPACITY = .42;
const UNDERLINE_WIDTH = 2;
const UNDERLINE_HIT_PADDING = 4;
const OUTLINE_PADDING = 2;
var ThreadCommentCanvasOverlay = class extends _univerjs_engine_render.BaseObject {
	constructor(key, state) {
		super(key);
		_defineProperty(this, "_state", void 0);
		_defineProperty(this, "_hoveredCommentId", null);
		_defineProperty(this, "_hitCommentId", null);
		this.evented = true;
		this._state = state;
		this.show();
	}
	get hitCommentId() {
		return this._hitCommentId;
	}
	updateState(state) {
		this._state = {
			...this._state,
			...state
		};
		if (this._hitCommentId && !this._containsComment(this._hitCommentId)) this._hitCommentId = null;
		if (this._hoveredCommentId && !this._containsComment(this._hoveredCommentId)) this._hoveredCommentId = null;
		if ("previewMarker" in state || "previewUnderline" in state) this.makeDirtyNoDebounce(true);
		else this.makeDirty(true);
	}
	clearHover() {
		if (this._hoveredCommentId) {
			this._hoveredCommentId = null;
			this.makeDirty(true);
		}
		this._hitCommentId = null;
	}
	isHit(coord) {
		const zoomRatio = this._getZoomRatio();
		const halfSize = MARKER_SIZE / zoomRatio / 2;
		let marker;
		for (let index = this._state.markers.length - 1; index >= 0; index -= 1) {
			const item = this._state.markers[index];
			if (!item) continue;
			if (coord.x >= item.x - halfSize && coord.x <= item.x + halfSize && coord.y >= item.y - halfSize && coord.y <= item.y + halfSize) {
				marker = item;
				break;
			}
		}
		let underline;
		if (!marker) for (let index = this._state.underlines.length - 1; index >= 0; index -= 1) {
			const item = this._state.underlines[index];
			if (!item) continue;
			if (coord.x >= item.left && coord.x <= item.left + item.width && Math.abs(coord.y - item.top) <= UNDERLINE_HIT_PADDING / zoomRatio) {
				underline = item;
				break;
			}
		}
		const commentId = (marker === null || marker === void 0 ? void 0 : marker.commentId) ?? (underline === null || underline === void 0 ? void 0 : underline.commentId) ?? null;
		this._hitCommentId = commentId;
		if (commentId !== this._hoveredCommentId) {
			this._hoveredCommentId = commentId;
			this.makeDirty(true);
		}
		return commentId !== null;
	}
	render(ctx, _bounds) {
		var _this$_state$focusOut;
		const zoomRatio = this._getZoomRatio();
		this._state.underlines.forEach((underline) => this._renderUnderline(ctx, underline, zoomRatio, 1));
		(_this$_state$focusOut = this._state.focusOutlines) === null || _this$_state$focusOut === void 0 || _this$_state$focusOut.forEach((outline) => this._renderOutline(ctx, outline, zoomRatio));
		if (this._state.previewUnderline) this._renderUnderline(ctx, this._state.previewUnderline, zoomRatio, MARKER_PREVIEW_OPACITY);
		this._state.markers.forEach((marker) => {
			var _this$_state$focusedC;
			return this._renderMarker(ctx, marker, zoomRatio, this._markerContainsComment(marker, this._hoveredCommentId) || ((_this$_state$focusedC = this._state.focusedCommentIds) === null || _this$_state$focusedC === void 0 ? void 0 : _this$_state$focusedC.some((commentId) => this._markerContainsComment(marker, commentId))) ? 1 : MARKER_IDLE_OPACITY);
		});
		if (this._state.previewMarker) this._renderMarker(ctx, this._state.previewMarker, zoomRatio, MARKER_PREVIEW_OPACITY);
		this.makeDirty(false);
		return this;
	}
	_getZoomRatio() {
		return Number.isFinite(this._state.zoomRatio) && this._state.zoomRatio > 0 ? this._state.zoomRatio : 1;
	}
	_containsComment(commentId) {
		return this._state.markers.some((marker) => this._markerContainsComment(marker, commentId)) || this._state.underlines.some((underline) => underline.commentId === commentId);
	}
	_markerContainsComment(marker, commentId) {
		var _marker$commentIds;
		return commentId != null && (marker.commentId === commentId || ((_marker$commentIds = marker.commentIds) === null || _marker$commentIds === void 0 ? void 0 : _marker$commentIds.includes(commentId)) === true);
	}
	_renderUnderline(ctx, underline, zoomRatio, opacity) {
		ctx.save();
		ctx.globalAlpha = opacity;
		ctx.strokeStyle = this._state.accentColor;
		ctx.lineWidth = UNDERLINE_WIDTH / zoomRatio;
		ctx.beginPath();
		ctx.moveTo(underline.left, underline.top);
		ctx.lineTo(underline.left + underline.width, underline.top);
		ctx.stroke();
		ctx.restore();
	}
	_renderOutline(ctx, outline, zoomRatio) {
		const padding = OUTLINE_PADDING / zoomRatio;
		ctx.save();
		ctx.strokeStyle = this._state.accentColor;
		ctx.lineWidth = UNDERLINE_WIDTH / zoomRatio;
		ctx.strokeRect(outline.left - padding, outline.top - padding, outline.width + padding * 2, outline.height + padding * 2);
		ctx.restore();
	}
	_renderMarker(ctx, marker, zoomRatio, opacity) {
		const size = MARKER_SIZE / zoomRatio;
		const left = marker.x - size / 2;
		const top = marker.y - size / 2;
		const radius = 4 / zoomRatio;
		const tail = 4 / zoomRatio;
		ctx.save();
		ctx.globalAlpha = opacity;
		ctx.fillStyle = this._state.accentColor;
		ctx.strokeStyle = this._state.outlineColor;
		ctx.lineWidth = 1.5 / zoomRatio;
		ctx.beginPath();
		ctx.moveTo(left + radius, top);
		ctx.lineTo(left + size - radius, top);
		ctx.quadraticCurveTo(left + size, top, left + size, top + radius);
		ctx.lineTo(left + size, top + size - tail - radius);
		ctx.quadraticCurveTo(left + size, top + size - tail, left + size - radius, top + size - tail);
		ctx.lineTo(left + size / 2 + tail, top + size - tail);
		ctx.lineTo(left + size / 2, top + size);
		ctx.lineTo(left + size / 2 - tail, top + size - tail);
		ctx.lineTo(left + radius, top + size - tail);
		ctx.quadraticCurveTo(left, top + size - tail, left, top + size - tail - radius);
		ctx.lineTo(left, top + radius);
		ctx.quadraticCurveTo(left, top, left + radius, top);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.fillStyle = this._state.foregroundColor;
		if ((marker.count ?? 1) > 1) {
			ctx.font = `600 ${11 / zoomRatio}px ${_univerjs_engine_render.DEFAULT_FONTFACE_PLANE}`;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText(String(marker.count), marker.x, top + size * .42);
		} else {
			const dotRadius = 1.2 / zoomRatio;
			const dotY = top + size * .43;
			[
				.32,
				.5,
				.68
			].forEach((ratio) => {
				ctx.beginPath();
				ctx.arc(left + size * ratio, dotY, dotRadius, 0, Math.PI * 2);
				ctx.fill();
			});
		}
		ctx.restore();
	}
};

//#endregion
//#region src/views/thread-comment-panel/util.ts
function isSameThreadCommentTarget(active, comment) {
	return (active === null || active === void 0 ? void 0 : active.unitId) === comment.unitId && active.subUnitId === comment.subUnitId && active.commentId === comment.id;
}
function shouldClearThreadCommentTarget(active, currentUnitId, commentExists) {
	if (!active) return false;
	return active.unitId !== currentUnitId || !commentExists;
}
function getThreadCommentPanelItemKey(comment, index, section) {
	if (comment.id) return comment.id;
	return [
		"thread-comment-panel-temp",
		section,
		comment.unitId,
		comment.subUnitId,
		comment.threadId,
		comment.ref,
		comment.dT,
		index
	].join("-");
}

//#endregion
//#region src/views/thread-comment-editor/util.ts
const transformDocument2TextNodesInParagraph = (doc) => {
	const { dataStream, customRanges } = doc;
	const end = dataStream.endsWith("\r\n") ? dataStream.length - 2 : dataStream.length;
	const textNodes = [];
	let lastIndex = 0;
	customRanges === null || customRanges === void 0 || customRanges.forEach((range) => {
		if (lastIndex < range.startIndex) textNodes.push({
			type: "text",
			content: dataStream.slice(lastIndex, range.startIndex)
		});
		textNodes.push({
			type: "mention",
			content: {
				label: dataStream.slice(range.startIndex, range.endIndex + 1),
				id: range.rangeId
			}
		});
		lastIndex = range.endIndex + 1;
	});
	textNodes.push({
		type: "text",
		content: dataStream.slice(lastIndex, end)
	});
	return textNodes;
};
const transformDocument2TextNodes = (doc) => {
	if (!doc) return [];
	const { paragraphs = [] } = doc;
	return paragraphs.map((paragraph, index) => {
		const body = (0, _univerjs_core.getBodySlice)(doc, index === 0 ? 0 : paragraphs[index - 1].startIndex + 1, paragraph.startIndex);
		return transformDocument2TextNodesInParagraph(body);
	});
};
const transformTextNodes2Document = (nodes) => {
	let str = "";
	const customRanges = [];
	nodes.forEach((node) => {
		switch (node.type) {
			case "text":
				str += node.content;
				break;
			case "mention": {
				const start = str.length;
				str += node.content.label;
				const end = str.length - 1;
				customRanges.push({
					rangeId: node.content.id,
					rangeType: _univerjs_core.CustomRangeType.MENTION,
					startIndex: start,
					endIndex: end,
					properties: {},
					wholeEntity: true
				});
				break;
			}
			default: break;
		}
	});
	str += "\r\n";
	return {
		textRuns: [],
		paragraphs: [{
			startIndex: str.length - 2,
			paragraphId: (0, _univerjs_core.createParagraphId)(/* @__PURE__ */ new Set()),
			paragraphStyle: {}
		}],
		sectionBreaks: [{
			sectionId: (0, _univerjs_core.createSectionId)(/* @__PURE__ */ new Set()),
			startIndex: str.length - 1
		}],
		dataStream: str,
		customRanges
	};
};
function focusThreadCommentEditor(editorService, editorId, editor) {
	editorService.focus(editorId);
	editor === null || editor === void 0 || editor.focus();
}

//#endregion
//#region src/views/thread-comment-tree/util.ts
function getThreadCommentEditorId(params) {
	const { location, unitId, subUnitId, commentId, fallbackId } = params;
	return `${_univerjs_core.DOCS_COMMENT_EDITOR_UNIT_ID_KEY}_${location}_${unitId}_${subUnitId}_${commentId || fallbackId}`;
}

//#endregion
//#region src/views/ThreadCommentEditor.tsx
function getSnapshot(body) {
	return {
		id: "d",
		body,
		documentStyle: {}
	};
}
const ThreadCommentEditor = (0, react.forwardRef)((props, ref) => {
	const { comment, onSave, id, onCancel, autoFocus, unitId, type, editorId } = props;
	const commandService = (0, _univerjs_ui.useDependency)(_univerjs_core.ICommandService);
	const localeService = (0, _univerjs_ui.useDependency)(_univerjs_core.LocaleService);
	const [editing, setEditing] = (0, react.useState)(false);
	const [submitting, setSubmitting] = (0, react.useState)(false);
	const submittingRef = (0, react.useRef)(false);
	const mountedRef = (0, react.useRef)(true);
	const editorService = (0, _univerjs_ui.useDependency)(_univerjs_docs_ui.IEditorService);
	const editorRef = (0, react.useRef)(null);
	const rootEditorId = type === _univerjs_core.UniverInstanceType.UNIVER_DOC ? _univerjs_core.DOCS_NORMAL_EDITOR_UNIT_ID_KEY : unitId;
	const [canSubmit, setCanSubmit] = (0, react.useState)(() => {
		var _comment$text;
		return _univerjs_core.BuildTextUtils.transform.getPlainText((comment === null || comment === void 0 || (_comment$text = comment.text) === null || _comment$text === void 0 ? void 0 : _comment$text.dataStream) ?? "");
	});
	const keyboardEventConfig = (0, react.useMemo)(() => ({
		keyCodes: [
			{ keyCode: _univerjs_ui.KeyCode.ENTER },
			{ keyCode: _univerjs_ui.KeyCode.BACKSPACE },
			{ keyCode: _univerjs_ui.KeyCode.DELETE }
		],
		handler: (keyCode) => {
			let commandId;
			switch (keyCode) {
				case _univerjs_ui.KeyCode.ENTER:
					commandId = _univerjs_docs_ui.BreakLineCommand.id;
					break;
				case _univerjs_ui.KeyCode.BACKSPACE:
					commandId = _univerjs_docs_ui.DeleteLeftCommand.id;
					break;
				case _univerjs_ui.KeyCode.DELETE:
					commandId = _univerjs_docs_ui.DeleteRightCommand.id;
					break;
				default: return;
			}
			focusThreadCommentEditor(editorService, editorId, editorRef.current);
			commandService.executeCommand(commandId).then(() => {
				if (keyCode !== _univerjs_ui.KeyCode.ENTER && mountedRef.current) {
					var _editorRef$current;
					const dataStream = ((_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 || (_editorRef$current = _editorRef$current.getDocumentData().body) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.dataStream) ?? "";
					setCanSubmit(_univerjs_core.BuildTextUtils.transform.getPlainText(dataStream));
				}
			});
		}
	}), [
		commandService,
		editorId,
		editorService
	]);
	(0, react.useImperativeHandle)(ref, () => ({ reply(text) {
		var _editorRef$current2;
		if (!editorRef.current) return;
		focusThreadCommentEditor(editorService, editorId, editorRef.current);
		const documentData = getSnapshot(text);
		(_editorRef$current2 = editorRef.current) === null || _editorRef$current2 === void 0 || _editorRef$current2.setDocumentData(documentData, [{
			startOffset: documentData.body.dataStream.length - 2,
			endOffset: documentData.body.dataStream.length - 2,
			collapsed: true
		}]);
		setCanSubmit(_univerjs_core.BuildTextUtils.transform.getPlainText(documentData.body.dataStream));
		setEditing(true);
	} }));
	const handleSave = async () => {
		const currentEditor = editorRef.current;
		if (!currentEditor || submittingRef.current) return;
		const newText = _univerjs_core.Tools.deepClone(currentEditor.getDocumentData().body);
		submittingRef.current = true;
		setSubmitting(true);
		try {
			if (await (onSave === null || onSave === void 0 ? void 0 : onSave({
				...comment,
				text: newText
			})) === false) return;
			if (!mountedRef.current) return;
			currentEditor.blur();
			currentEditor.replaceText("", false);
			currentEditor.setSelectionRanges([], false);
			setCanSubmit("");
			setEditing(false);
		} catch {
			return;
		} finally {
			submittingRef.current = false;
			if (mountedRef.current) setSubmitting(false);
		}
	};
	const handleEditorMouseDown = () => {
		focusThreadCommentEditor(editorService, editorId, editorRef.current);
		setEditing(true);
	};
	(0, react.useEffect)(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, []);
	(0, react.useEffect)(() => {
		if (!autoFocus) return;
		const timer = setTimeout(() => {
			focusThreadCommentEditor(editorService, editorId, editorRef.current);
		});
		return () => clearTimeout(timer);
	}, [
		autoFocus,
		editorId,
		editorService
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		onClick: (e) => e.preventDefault(),
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			onMouseDown: handleEditorMouseDown,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_docs_ui.RichTextEditor, {
				className: "univer-w-full",
				editorRef,
				editorId,
				preserveHostFocus: true,
				autoFocus,
				keyboardEventConfig,
				placeholder: localeService.t("thread-comment-ui.editor.placeholder"),
				initialValue: (comment === null || comment === void 0 ? void 0 : comment.text) && getSnapshot(comment.text),
				onChange: (data) => {
					var _data$body;
					return setCanSubmit(_univerjs_core.BuildTextUtils.transform.getPlainText(((_data$body = data.body) === null || _data$body === void 0 ? void 0 : _data$body.dataStream) ?? ""));
				},
				onFocusChange: (isFocus) => isFocus && setEditing(isFocus),
				isSingle: false,
				maxHeight: 64,
				onClickOutside: () => {
					setTimeout(() => {
						editorService.focus(rootEditorId);
					}, 30);
				}
			})
		}), editing ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_univerjs_design.ActionRow, {
			className: "univer-mt-3 univer-flex univer-flex-row univer-justify-end univer-gap-2",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Button, {
				type: "button",
				onClick: () => {
					const currentEditor = editorRef.current;
					currentEditor === null || currentEditor === void 0 || currentEditor.blur();
					currentEditor === null || currentEditor === void 0 || currentEditor.replaceText("", false);
					currentEditor === null || currentEditor === void 0 || currentEditor.setSelectionRanges([], false);
					setCanSubmit("");
					onCancel === null || onCancel === void 0 || onCancel();
					setEditing(false);
					commandService.executeCommand(SetActiveCommentOperation.id);
				},
				children: localeService.t("thread-comment-ui.editor.cancel")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Button, {
				type: "button",
				variant: "primary",
				disabled: !canSubmit || submitting,
				onClick: handleSave,
				children: localeService.t(id ? "thread-comment-ui.editor.save" : "thread-comment-ui.editor.reply")
			})]
		}) : null]
	});
});

//#endregion
//#region src/views/ThreadCommentTree.tsx
let ThreadCommentTreeLocation = /* @__PURE__ */ function(ThreadCommentTreeLocation) {
	ThreadCommentTreeLocation["CELL"] = "CELL";
	ThreadCommentTreeLocation["PANEL"] = "PANEL";
	return ThreadCommentTreeLocation;
}({});
const MOCK_ID = "__mock__";
function formatCommentDateTime(value, region) {
	const date = (0, _univerjs_core.dateKit)(value);
	const regionTag = _univerjs_core.LOCALE_META[region].tag;
	return date.formatIntl(regionTag, {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
		numberingSystem: "latn"
	});
}
const ThreadCommentItem = (props) => {
	const { item, unitId, subUnitId, editing, onEditingChange, onReply, resolved, isRoot, onClose, onDeleteComment, onAfterDeleteComment, type, threadCommentEditorId } = props;
	const commandService = (0, _univerjs_ui.useDependency)(_univerjs_core.ICommandService);
	const localeService = (0, _univerjs_ui.useDependency)(_univerjs_core.LocaleService);
	const regionService = (0, _univerjs_ui.useDependency)(_univerjs_core.RegionService);
	const userManagerService = (0, _univerjs_ui.useDependency)(_univerjs_core.UserManagerService);
	const user = userManagerService.getUser(item.personId);
	const currentUser = (0, _univerjs_ui.useObservable)(userManagerService.currentUser$);
	const isCommentBySelf = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userID) === item.personId;
	const isMock = item.id === MOCK_ID;
	const [showReply, setShowReply] = (0, react.useState)(false);
	const uiConfig = (0, _univerjs_ui.useConfigValue)(_univerjs_ui.UI_PLUGIN_CONFIG_KEY);
	const avatarFallback = uiConfig === null || uiConfig === void 0 ? void 0 : uiConfig.avatarFallback;
	const currentRegion = (0, _univerjs_ui.useObservable)(regionService.currentRegion$, regionService.getCurrentRegion());
	const direction = (0, _univerjs_ui.useObservable)(localeService.direction$, localeService.getDirection());
	const dateText = isMock ? null : formatCommentDateTime(item.dT, currentRegion);
	const handleDeleteItem = async () => {
		if ((onDeleteComment === null || onDeleteComment === void 0 ? void 0 : onDeleteComment(item)) === false) return;
		try {
			if (await commandService.executeCommand(isRoot ? _univerjs_thread_comment.DeleteCommentTreeCommand.id : _univerjs_thread_comment.DeleteCommentCommand.id, {
				unitId,
				subUnitId,
				commentId: item.id
			})) {
				try {
					await (onAfterDeleteComment === null || onAfterDeleteComment === void 0 ? void 0 : onAfterDeleteComment(item));
				} catch {}
				if (isRoot) onClose === null || onClose === void 0 || onClose();
			}
		} catch {}
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: "univer-relative univer-mb-3 univer-pl-[30px] rtl:univer-pl-0 rtl:univer-pr-[30px]",
		onMouseLeave: () => setShowReply(false),
		onMouseEnter: () => setShowReply(true),
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "univer-absolute univer-left-0 univer-top-0 univer-size-6 univer-rounded-full univer-bg-cover univer-bg-center univer-bg-no-repeat rtl:univer-left-auto rtl:univer-right-0",
				style: { backgroundImage: `url(${(user === null || user === void 0 ? void 0 : user.avatar) || avatarFallback})` }
			}),
			user ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "univer-mb-1 univer-flex univer-h-6 univer-items-center univer-justify-between",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "univer-text-sm univer-font-medium univer-leading-5",
					children: (user === null || user === void 0 ? void 0 : user.name) || " "
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [isMock || resolved ? null : showReply && user ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": localeService.t("thread-comment-ui.editor.reply"),
					className: "univer-ml-1 univer-inline-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-sm univer-border-0 univer-bg-transparent univer-p-0 univer-text-base hover:univer-bg-gray-50 rtl:univer-ml-0 rtl:univer-mr-1 dark:hover:!univer-bg-gray-800",
					onClick: () => onReply(user),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_icons.ReplyToCommentIcon, {})
				}) : null, isCommentBySelf && !isMock && !resolved ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Dropdown, {
					overlay: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						dir: direction,
						className: "univer-rounded-lg",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
							className: "univer-m-0 univer-box-border univer-grid univer-list-none univer-p-1.5 univer-text-sm rtl:univer-text-right [&_button]:univer-block [&_button]:univer-w-full [&_button]:univer-cursor-pointer [&_button]:univer-rounded [&_button]:univer-border-0 [&_button]:univer-bg-transparent [&_button]:univer-px-2 [&_button]:univer-py-1.5 [&_button]:univer-text-left [&_button]:univer-transition-colors rtl:[&_button]:univer-text-right",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hover:univer-bg-gray-200",
								onClick: () => onEditingChange === null || onEditingChange === void 0 ? void 0 : onEditingChange(true),
								children: localeService.t("thread-comment-ui.item.edit")
							}) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hover:univer-bg-gray-200",
								onClick: handleDeleteItem,
								children: localeService.t("thread-comment-ui.item.delete")
							}) })]
						})
					}),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": localeService.t("thread-comment-ui.item.more"),
						className: "univer-ml-1 univer-inline-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-sm univer-border-0 univer-bg-transparent univer-p-0 univer-text-base hover:univer-bg-gray-50 rtl:univer-ml-0 rtl:univer-mr-1 dark:hover:!univer-bg-gray-800",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_icons.MoreHorizontalIcon, {})
					})
				}) : null] })]
			}) : null,
			dateText && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", {
				className: "univer-mb-1 univer-block univer-text-xs/normal univer-text-gray-600 rtl:univer-text-right dark:!univer-text-gray-200",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("bdo", {
					dir: "ltr",
					children: dateText
				})
			}),
			editing ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThreadCommentEditor, {
				type,
				id: item.id,
				comment: item,
				onCancel: () => onEditingChange === null || onEditingChange === void 0 ? void 0 : onEditingChange(false),
				autoFocus: true,
				unitId,
				subUnitId,
				editorId: threadCommentEditorId,
				onSave: async ({ text, attachments }) => {
					const success = await commandService.executeCommand(_univerjs_thread_comment.UpdateCommentCommand.id, {
						unitId,
						subUnitId,
						payload: {
							commentId: item.id,
							text,
							attachments
						}
					});
					if (success) onEditingChange === null || onEditingChange === void 0 || onEditingChange(false);
					return success;
				}
			}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "univer-text-sm univer-text-gray-900 dark:!univer-text-gray-0",
				children: transformDocument2TextNodes(item.text).map((paragraph, paragraphIndex) => {
					var _item$text$paragraphs;
					let offset = 0;
					return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "univer-break-words",
						children: paragraph.map((node) => {
							const key = offset;
							offset += node.type === "mention" ? node.content.label.length : node.content.length;
							switch (node.type) {
								case "mention": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("a", {
									className: "univer-text-primary-600",
									children: [node.content.label, " "]
								}, key);
								default: return node.content;
							}
						})
					}, (_item$text$paragraphs = item.text.paragraphs) === null || _item$text$paragraphs === void 0 || (_item$text$paragraphs = _item$text$paragraphs[paragraphIndex]) === null || _item$text$paragraphs === void 0 ? void 0 : _item$text$paragraphs.paragraphId);
				})
			})
		]
	});
};
const ThreadCommentTree = (props) => {
	const { id, unitId, subUnitId, refStr, displayRef, showEdit = true, onClick, showHighlight, onClose, getSubUnitName, location, autoFocus, onMouseEnter, onMouseLeave, onAddComment, onDeleteComment, onAfterDeleteComment, onResolve, type, style, full } = props;
	const threadCommentModel = (0, _univerjs_ui.useDependency)(_univerjs_thread_comment.ThreadCommentModel);
	const [isHover, setIsHover] = (0, react.useState)(false);
	const [editingId, setEditingId] = (0, react.useState)("");
	const updte$ = (0, react.useMemo)(() => threadCommentModel.commentUpdate$.pipe((0, rxjs.debounceTime)(16)), [threadCommentModel]);
	const comments = (0, _univerjs_ui.useObservable)(() => id ? updte$.pipe((0, rxjs.map)(() => threadCommentModel.getCommentWithChildren(unitId, subUnitId, id)), (0, rxjs.startWith)(threadCommentModel.getCommentWithChildren(unitId, subUnitId, id))) : (0, rxjs.of)(null), null, false, [
		id,
		subUnitId,
		threadCommentModel,
		unitId,
		updte$
	]);
	const commandService = (0, _univerjs_ui.useDependency)(_univerjs_core.ICommandService);
	const localeService = (0, _univerjs_ui.useDependency)(_univerjs_core.LocaleService);
	const userManagerService = (0, _univerjs_ui.useDependency)(_univerjs_core.UserManagerService);
	const resolved = comments === null || comments === void 0 ? void 0 : comments.root.resolved;
	const currentUser = (0, _univerjs_ui.useObservable)(userManagerService.currentUser$);
	const editorRef = (0, react.useRef)(null);
	const fallbackEditorId = (0, react.useMemo)(() => (0, _univerjs_core.generateRandomId)(6), []);
	const renderComments = [...comments ? [comments.root] : [{
		id: MOCK_ID,
		text: { dataStream: "\n\r" },
		personId: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userID) ?? "",
		ref: refStr ?? "",
		dT: "",
		unitId,
		subUnitId,
		threadId: ""
	}], ...(comments === null || comments === void 0 ? void 0 : comments.children) ?? []];
	const scrollerRef = (0, react.useRef)(null);
	const handleMouseLeave = (0, _univerjs_ui.useEvent)(onMouseLeave);
	const handleResolve = async (e) => {
		e.stopPropagation();
		try {
			if (!await commandService.executeCommand(_univerjs_thread_comment.ResolveCommentCommand.id, {
				unitId,
				subUnitId,
				commentId: id,
				resolved: !resolved
			})) return;
			await commandService.executeCommand(SetActiveCommentOperation.id, resolved ? {
				unitId,
				subUnitId,
				commentId: id
			} : void 0);
			onResolve === null || onResolve === void 0 || onResolve(!resolved);
		} catch {}
	};
	const handleDeleteRoot = async (e) => {
		e.stopPropagation();
		const root = comments === null || comments === void 0 ? void 0 : comments.root;
		if (!root || (onDeleteComment === null || onDeleteComment === void 0 ? void 0 : onDeleteComment(root)) === false) return;
		try {
			if (await commandService.executeCommand(_univerjs_thread_comment.DeleteCommentTreeCommand.id, {
				unitId,
				subUnitId,
				commentId: id
			})) {
				try {
					await (onAfterDeleteComment === null || onAfterDeleteComment === void 0 ? void 0 : onAfterDeleteComment(root));
				} catch {}
				await commandService.executeCommand(SetActiveCommentOperation.id);
				onClose === null || onClose === void 0 || onClose();
			}
		} catch {}
	};
	(0, react.useEffect)(() => {
		return handleMouseLeave;
	}, [handleMouseLeave]);
	const subUnitName = getSubUnitName((comments === null || comments === void 0 ? void 0 : comments.root.subUnitId) ?? subUnitId);
	const editorVisible = showEdit && !editingId && !resolved;
	const title = `${displayRef ?? refStr ?? (comments === null || comments === void 0 ? void 0 : comments.root.ref) ?? ""}${subUnitName ? " · " : ""}${subUnitName}`;
	const threadCommentEditorId = getThreadCommentEditorId({
		location,
		unitId,
		subUnitId,
		commentId: id,
		fallbackId: fallbackEditorId
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		id: `${location}-${unitId}-${subUnitId}-${id}`,
		className: (0, _univerjs_design.clsx)("univer-relative univer-box-border univer-rounded-md univer-bg-gray-0 univer-p-4 univer-text-gray-900 dark:!univer-bg-gray-900 dark:!univer-text-gray-0", _univerjs_design.borderClassName, {
			"univer-w-[278px]": !full,
			"univer-w-full": full,
			"univer-shadow": !resolved && (showHighlight || isHover || location === "CELL")
		}),
		style,
		onClick,
		onMouseEnter: () => {
			onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter();
			setIsHover(true);
		},
		onMouseLeave: () => {
			onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave();
			setIsHover(false);
		},
		children: [
			!resolved && showHighlight && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "univer-absolute univer-left-0 univer-right-0 univer-top-0 univer-h-1.5 univer-rounded-t-md univer-bg-yellow-400" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "univer-mb-4 univer-flex univer-flex-row univer-items-center univer-justify-between univer-text-sm univer-leading-5",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "univer-flex univer-flex-1 univer-flex-row univer-items-center univer-overflow-hidden",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "univer-mr-2 univer-h-3.5 univer-w-[3px] univer-flex-shrink-0 univer-flex-grow-0 univer-rounded-sm univer-bg-yellow-500 rtl:univer-ml-2 rtl:univer-mr-0" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Tooltip, {
						showIfEllipsis: true,
						title,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "univer-flex-1 univer-truncate",
							children: title
						})
					})]
				}), !!comments && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "univer-flex univer-flex-shrink-0 univer-flex-grow-0 univer-flex-row",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": localeService.t(resolved ? "thread-comment-ui.filter.status.unsolved" : "thread-comment-ui.filter.status.resolved"),
						className: (0, _univerjs_design.clsx)("univer-ml-1 univer-inline-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-[3px] univer-border-0 univer-bg-transparent univer-p-0 univer-text-base hover:univer-bg-gray-50 rtl:univer-ml-0 rtl:univer-mr-1 dark:hover:!univer-bg-gray-800", { "univer-text-green-500": resolved }),
						onClick: handleResolve,
						children: resolved ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_icons.SuccessIcon, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_icons.SuccessOutlineIcon, {})
					}), (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userID) === comments.root.personId ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": localeService.t("thread-comment-ui.item.delete"),
						className: "univer-ml-1 univer-inline-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-[3px] univer-border-0 univer-bg-transparent univer-p-0 univer-text-base hover:univer-bg-gray-50 rtl:univer-ml-0 rtl:univer-mr-1 dark:hover:!univer-bg-gray-800",
						onClick: handleDeleteRoot,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_icons.DeleteIcon, {})
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				ref: scrollerRef,
				className: (0, _univerjs_design.clsx)("univer-max-h-80 univer-overflow-y-auto univer-overflow-x-hidden", _univerjs_design.scrollbarClassName, location === "PANEL" && "-univer-mx-4 univer-px-4"),
				children: renderComments.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThreadCommentItem, {
					unitId,
					subUnitId,
					item,
					isRoot: item.id === (comments === null || comments === void 0 ? void 0 : comments.root.id),
					editing: editingId === item.id,
					resolved: comments === null || comments === void 0 ? void 0 : comments.root.resolved,
					type,
					threadCommentEditorId,
					onClose,
					onEditingChange: (editing) => {
						if (editing) setEditingId(item.id);
						else setEditingId("");
					},
					onReply: (user) => {
						if (!user) return;
						requestAnimationFrame(() => {
							var _editorRef$current;
							(_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 || _editorRef$current.reply(transformTextNodes2Document([{
								type: "mention",
								content: {
									id: user.userID,
									label: `@${user.name}`
								}
							}, {
								type: "text",
								content: " "
							}]));
						});
					},
					onDeleteComment,
					onAfterDeleteComment
				}, item.id))
			}),
			editorVisible && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThreadCommentEditor, {
				ref: editorRef,
				type,
				unitId,
				subUnitId,
				editorId: threadCommentEditorId,
				onSave: async ({ text, attachments }) => {
					const comment = {
						text,
						attachments,
						dT: (0, _univerjs_thread_comment.getDT)(),
						id: (0, _univerjs_core.generateRandomId)(),
						ref: refStr,
						personId: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userID) ?? "",
						parentId: comments === null || comments === void 0 ? void 0 : comments.root.id,
						unitId,
						subUnitId,
						threadId: (comments === null || comments === void 0 ? void 0 : comments.root.threadId) ?? ""
					};
					if (await (onAddComment === null || onAddComment === void 0 ? void 0 : onAddComment(comment)) === false) {
						if (!comments) onClose === null || onClose === void 0 || onClose();
						return true;
					}
					const success = await commandService.executeCommand(_univerjs_thread_comment.AddCommentCommand.id, {
						unitId,
						subUnitId,
						comment
					});
					if (success && scrollerRef.current) scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
					if (success && !comments) onClose === null || onClose === void 0 || onClose();
					return success;
				},
				autoFocus: autoFocus || !comments,
				onCancel: () => {
					if (!comments) onClose === null || onClose === void 0 || onClose();
				}
			}, `${autoFocus}`) })
		]
	});
};

//#endregion
//#region src/views/ThreadCommentPanel.tsx
const ThreadCommentPanel = (props) => {
	const { unitId, subUnitId$, type, onAdd, getSubUnitName, onResolve, sortComments, onItemLeave, onItemEnter, disableAdd, tempComment, onAddComment, onDeleteComment, onAfterDeleteComment, showComments, formatRef, onTempCommentClose } = props;
	const [unit, setUnit] = (0, react.useState)("all");
	const [status, setStatus] = (0, react.useState)("all");
	const localeService = (0, _univerjs_ui.useDependency)(_univerjs_core.LocaleService);
	const userService = (0, _univerjs_ui.useDependency)(_univerjs_core.UserManagerService);
	const threadCommentModel = (0, _univerjs_ui.useDependency)(_univerjs_thread_comment.ThreadCommentModel);
	const panelService = (0, _univerjs_ui.useDependency)(ThreadCommentPanelService);
	const activeCommentId = (0, _univerjs_ui.useObservable)(panelService.activeCommentId$);
	(0, _univerjs_ui.useObservable)(threadCommentModel.commentUpdate$);
	const unitComments = threadCommentModel.getUnit(unitId);
	const scopedTempComment = (tempComment === null || tempComment === void 0 ? void 0 : tempComment.unitId) === unitId ? tempComment : null;
	const shouldClearActiveTarget = shouldClearThreadCommentTarget(activeCommentId, unitId, activeCommentId ? Boolean(threadCommentModel.getComment(activeCommentId.unitId, activeCommentId.subUnitId, activeCommentId.commentId) || scopedTempComment && isSameThreadCommentTarget(activeCommentId, scopedTempComment)) : false);
	const commandService = (0, _univerjs_ui.useDependency)(_univerjs_core.ICommandService);
	const subUnitId = (0, _univerjs_ui.useObservable)(subUnitId$);
	const shouldScrollRef = (0, react.useRef)(true);
	const location = "PANEL";
	const currentUser = (0, _univerjs_ui.useObservable)(userService.currentUser$);
	const comments = (0, react.useMemo)(() => {
		const allComments = unit === "all" && type !== _univerjs_core.UniverInstanceType.UNIVER_SLIDE ? unitComments : unitComments.filter((i) => i.subUnitId === subUnitId);
		const sort = sortComments ?? ((a) => a);
		const res = allComments.map((i) => ({
			...i.root,
			children: i.children ?? [],
			users: i.relativeUsers
		}));
		if (showComments) {
			const map = /* @__PURE__ */ new Map();
			res.forEach((comment) => {
				map.set(comment.id, comment);
			});
			return [...showComments, ""].map((id) => map.get(id)).filter(Boolean);
		} else return sort(res);
	}, [
		showComments,
		unit,
		unitComments,
		sortComments,
		subUnitId,
		type
	]);
	const commentsSorted = (0, react.useMemo)(() => [...comments.filter((comment) => !comment.resolved), ...comments.filter((comment) => comment.resolved)], [comments]);
	const statuedComments = (0, react.useMemo)(() => {
		if (status === "resolved") return commentsSorted.filter((comment) => comment.resolved);
		if (status === "unsolved") return commentsSorted.filter((comment) => !comment.resolved);
		if (status === "concern_me") {
			if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.userID)) return commentsSorted;
			return commentsSorted.filter((comment) => comment === null || comment === void 0 ? void 0 : comment.users.has(currentUser.userID));
		}
		return commentsSorted;
	}, [
		commentsSorted,
		currentUser === null || currentUser === void 0 ? void 0 : currentUser.userID,
		status
	]);
	const renderComments = scopedTempComment ? [scopedTempComment, ...statuedComments] : statuedComments;
	const unSolvedComments = renderComments.filter((comment) => !comment.resolved);
	const solvedComments = renderComments.filter((comment) => comment.resolved);
	const isFiltering = status !== "all" || unit !== "all";
	const onReset = () => {
		setStatus("all");
		setUnit("all");
	};
	(0, react.useEffect)(() => {
		if (shouldClearActiveTarget) panelService.setActiveComment(void 0);
	}, [panelService, shouldClearActiveTarget]);
	(0, react.useEffect)(() => {
		if (tempComment && (tempComment.unitId !== unitId || subUnitId && tempComment.subUnitId !== subUnitId)) onTempCommentClose === null || onTempCommentClose === void 0 || onTempCommentClose();
	}, [
		onTempCommentClose,
		subUnitId,
		tempComment,
		unitId
	]);
	(0, react.useEffect)(() => {
		if (!activeCommentId) return;
		const handlePointerDown = (event) => {
			const activeComment = panelService.activeCommentId;
			const target = event.target;
			if (event.button !== 0 || !activeComment || !(target instanceof Element)) return;
			const activeElement = document.getElementById(`${location}-${activeComment.unitId}-${activeComment.subUnitId}-${activeComment.commentId}`);
			if ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.contains(target)) || target.closest("button, input, textarea, select, a, [contenteditable=\"true\"], [role=\"menu\"], [role=\"menuitem\"], [role=\"option\"], [role=\"listbox\"], [role=\"combobox\"], [role=\"separator\"]")) return;
			commandService.executeCommand(SetActiveCommentOperation.id);
			if (scopedTempComment && isSameThreadCommentTarget(activeComment, scopedTempComment)) onTempCommentClose === null || onTempCommentClose === void 0 || onTempCommentClose();
		};
		document.addEventListener("pointerdown", handlePointerDown, true);
		return () => document.removeEventListener("pointerdown", handlePointerDown, true);
	}, [
		activeCommentId,
		commandService,
		location,
		onTempCommentClose,
		panelService,
		scopedTempComment
	]);
	(0, react.useEffect)(() => {
		var _document$getElementB;
		if (!activeCommentId) return;
		if (!shouldScrollRef.current) {
			shouldScrollRef.current = true;
			return;
		}
		const { unitId, subUnitId, commentId } = activeCommentId;
		const id = `${location}-${unitId}-${subUnitId}-${commentId}`;
		(_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 || _document$getElementB.scrollIntoView({ block: "center" });
	}, [activeCommentId, location]);
	const renderComment = (section) => (comment, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThreadCommentTree, {
		full: true,
		location,
		getSubUnitName,
		id: comment.id,
		unitId: comment.unitId,
		subUnitId: comment.subUnitId,
		refStr: comment.ref,
		displayRef: formatRef === null || formatRef === void 0 ? void 0 : formatRef(comment),
		type,
		showEdit: !comment.id || isSameThreadCommentTarget(activeCommentId, comment),
		showHighlight: isSameThreadCommentTarget(activeCommentId, comment),
		onClick: () => {
			shouldScrollRef.current = false;
			if (!comment.resolved) commandService.executeCommand(SetActiveCommentOperation.id, {
				unitId: comment.unitId,
				subUnitId: comment.subUnitId,
				commentId: comment.id,
				temp: false
			});
			else commandService.executeCommand(SetActiveCommentOperation.id);
		},
		onMouseEnter: () => {
			panelService.setHoveredComment({
				unitId: comment.unitId,
				subUnitId: comment.subUnitId,
				commentId: comment.id,
				trigger: "panel-hover"
			});
			onItemEnter === null || onItemEnter === void 0 || onItemEnter(comment);
		},
		onMouseLeave: () => {
			if (isSameThreadCommentTarget(panelService.hoveredCommentId, comment)) panelService.setHoveredComment(void 0);
			onItemLeave === null || onItemLeave === void 0 || onItemLeave(comment);
		},
		onAddComment,
		onDeleteComment,
		onAfterDeleteComment,
		onResolve: (resolved) => onResolve === null || onResolve === void 0 ? void 0 : onResolve(comment.id, resolved),
		onClose: !comment.id ? onTempCommentClose : void 0
	}, getThreadCommentPanelItemKey(comment, index, section));
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: "univer-flex univer-min-h-full univer-flex-col univer-pb-3",
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "univer-mt-3 univer-flex univer-flex-row univer-justify-between",
			children: [type === _univerjs_core.UniverInstanceType.UNIVER_SHEET ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Select, {
				borderless: true,
				value: unit,
				options: [{
					value: "current",
					label: localeService.t("thread-comment-ui.filter.sheet.current")
				}, {
					value: "all",
					label: localeService.t("thread-comment-ui.filter.sheet.all")
				}],
				onChange: setUnit
			}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Select, {
				borderless: true,
				value: status,
				options: [
					{
						value: "all",
						label: localeService.t("thread-comment-ui.filter.status.all")
					},
					{
						value: "resolved",
						label: localeService.t("thread-comment-ui.filter.status.resolved")
					},
					{
						value: "unsolved",
						label: localeService.t("thread-comment-ui.filter.status.unsolved")
					},
					{
						value: "concern_me",
						label: localeService.t("thread-comment-ui.filter.status.concernMe")
					}
				],
				onChange: setStatus
			})]
		}), renderComments.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "univer-flex univer-flex-1 univer-flex-col univer-items-center univer-justify-center univer-text-sm univer-text-gray-600 dark:!univer-text-gray-200",
			children: [localeService.t("thread-comment-ui.panel.empty"), isFiltering ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.ActionRow, {
				className: "univer-mt-2 univer-flex univer-flex-row",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Button, {
					onClick: onReset,
					children: localeService.t("thread-comment-ui.panel.reset")
				})
			}) : !disableAdd ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.ActionRow, {
				className: "univer-mt-2 univer-flex univer-flex-row",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_univerjs_design.Button, {
					onClick: onAdd,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_icons.IncreaseIcon, { className: "univer-mr-1.5" }), localeService.t("thread-comment-ui.panel.addComment")]
				})
			}) : null]
		}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "univer-mt-3 univer-flex univer-flex-col univer-gap-3",
			children: [
				unSolvedComments.map(renderComment("unsolved")),
				solvedComments.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "univer-text-xs",
					children: localeService.t("thread-comment-ui.panel.solved")
				}),
				solvedComments.map(renderComment("solved"))
			]
		})]
	});
};

//#endregion
exports.SetActiveCommentOperation = SetActiveCommentOperation;
exports.ThreadCommentCanvasOverlay = ThreadCommentCanvasOverlay;
Object.defineProperty(exports, 'ThreadCommentDraftService', {
  enumerable: true,
  get: function () {
    return ThreadCommentDraftService;
  }
});
exports.ThreadCommentPanel = ThreadCommentPanel;
Object.defineProperty(exports, 'ThreadCommentPanelService', {
  enumerable: true,
  get: function () {
    return ThreadCommentPanelService;
  }
});
exports.ThreadCommentTree = ThreadCommentTree;
exports.ThreadCommentTreeLocation = ThreadCommentTreeLocation;
Object.defineProperty(exports, 'UniverThreadCommentMobileUIPlugin', {
  enumerable: true,
  get: function () {
    return UniverThreadCommentMobileUIPlugin;
  }
});
Object.defineProperty(exports, 'UniverThreadCommentUIPlugin', {
  enumerable: true,
  get: function () {
    return UniverThreadCommentUIPlugin;
  }
});