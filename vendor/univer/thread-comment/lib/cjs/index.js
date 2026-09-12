Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_core = require("@univerjs/core");
let rxjs = require("rxjs");

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
//#region src/services/tc-datasource.service.ts
/**
* Preserve for import async comment system
*/
var ThreadCommentDataSourceService = class extends _univerjs_core.Disposable {
	set dataSource(dataSource) {
		this._dataSource = dataSource;
	}
	get dataSource() {
		return this._dataSource;
	}
	constructor() {
		super();
		_defineProperty(this, "_dataSource", null);
		_defineProperty(this, "_pendingAdds", /* @__PURE__ */ new Map());
		_defineProperty(this, "syncUpdateMutationToColla", true);
	}
	async getThreadComment(unitId, subUnitId, threadId) {
		if (this._dataSource) return (await this._dataSource.listComments(unitId, subUnitId, [threadId]))[0];
		return null;
	}
	addComment(comment) {
		const key = `${comment.unitId}\0${comment.subUnitId}\0${comment.id}`;
		const pending = this._pendingAdds.get(key);
		if (pending) return pending;
		const request = (async () => {
			const savedComment = this._dataSource ? await this._dataSource.addComment(comment) : comment;
			return {
				...savedComment,
				threadId: savedComment.threadId || savedComment.id
			};
		})();
		this._pendingAdds.set(key, request);
		request.finally(() => {
			if (this._pendingAdds.get(key) === request) this._pendingAdds.delete(key);
		}).catch(() => void 0);
		return request;
	}
	async updateComment(comment) {
		if (this._dataSource) return this._dataSource.updateComment(comment);
		return true;
	}
	async resolveComment(comment) {
		if (this._dataSource) return this._dataSource.resolveComment(comment);
		return true;
	}
	async deleteComment(unitId, subUnitId, threadId, commentId) {
		if (this._dataSource) return this._dataSource.deleteComment(unitId, subUnitId, threadId, commentId);
		return true;
	}
	async deleteThread(unitId, subUnitId, threadId) {
		var _this$_dataSource;
		if ((_this$_dataSource = this._dataSource) === null || _this$_dataSource === void 0 ? void 0 : _this$_dataSource.deleteThread) return this._dataSource.deleteThread(unitId, subUnitId, threadId);
		return this.deleteComment(unitId, subUnitId, threadId, threadId);
	}
	async listThreadComments(unitId, subUnitId, threadIds) {
		if (this.dataSource) return this.dataSource.listComments(unitId, subUnitId, threadIds);
		return false;
	}
	saveToSnapshot(unitComments, _unitId) {
		if (this._dataSource) {
			const map = {};
			Object.keys(unitComments).forEach((subUnitId) => {
				const comments = unitComments[subUnitId];
				map[subUnitId] = comments.map(this.dataSource.saveCommentToSnapshot);
			});
			return map;
		}
		return unitComments;
	}
};
const IThreadCommentDataSourceService = (0, _univerjs_core.createIdentifier)("univer.thread-comment.data-source-service");

//#endregion
//#region src/types/comment-anchor.ts
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
let ThreadCommentAnchorKind = /* @__PURE__ */ function(ThreadCommentAnchorKind) {
	/** A cell comment managed by the Sheets range Facade. */
	ThreadCommentAnchorKind["SHEET_CELL"] = "sheet-cell";
	/** A Sheet image, chart, Shape, or other drawing element. */
	ThreadCommentAnchorKind["SHEET_DRAWING"] = "sheet-drawing";
	/** A fixed text range comment managed by the Docs text range Facade. */
	ThreadCommentAnchorKind["DOC_TEXT_RANGE"] = "doc-text-range";
	/** A Document image, chart, Shape, or other drawing element. */
	ThreadCommentAnchorKind["DOC_DRAWING"] = "doc-drawing";
	/** A Slide page element identified by a stable element ID. */
	ThreadCommentAnchorKind["SLIDE_ELEMENT"] = "slide-element";
	/** A free position normalized to the Slide page size. */
	ThreadCommentAnchorKind["SLIDE_POSITION"] = "slide-position";
	/** A Board element identified by a stable element ID. */
	ThreadCommentAnchorKind["BOARD_ELEMENT"] = "board-element";
	/** A free position in Board world coordinates. */
	ThreadCommentAnchorKind["BOARD_POSITION"] = "board-position";
	/** A Base record identified by stable table and record IDs. */
	ThreadCommentAnchorKind["BASE_RECORD"] = "base-record";
	return ThreadCommentAnchorKind;
}({});
const THREAD_COMMENT_ANCHOR_PREFIX = "univer-comment-anchor:";
function isNonEmptyString(value) {
	return typeof value === "string" && value.length > 0;
}
function isOptionalString(value) {
	return value === void 0 || isNonEmptyString(value);
}
function isFiniteNumber(value) {
	return typeof value === "number" && Number.isFinite(value);
}
function isThreadCommentAnchor(value) {
	if (!value || typeof value !== "object") return false;
	switch (Reflect.get(value, "kind")) {
		case "sheet-drawing":
		case "doc-drawing":
		case "slide-element":
		case "board-element": return isNonEmptyString(Reflect.get(value, "elementId")) && isOptionalString(Reflect.get(value, "pageId"));
		case "slide-position":
		case "board-position": return isFiniteNumber(Reflect.get(value, "x")) && isFiniteNumber(Reflect.get(value, "y")) && isOptionalString(Reflect.get(value, "pageId"));
		case "base-record": return isNonEmptyString(Reflect.get(value, "tableId")) && isNonEmptyString(Reflect.get(value, "recordId"));
		default: return false;
	}
}
function serializeThreadCommentAnchor(anchor) {
	if (!isThreadCommentAnchor(anchor)) throw new TypeError("Invalid thread comment anchor");
	return `${THREAD_COMMENT_ANCHOR_PREFIX}${JSON.stringify({
		v: 1,
		anchor
	})}`;
}
function deserializeThreadCommentAnchor(ref) {
	if (!ref.startsWith(THREAD_COMMENT_ANCHOR_PREFIX)) return null;
	try {
		const value = JSON.parse(ref.slice(22));
		if (!value || typeof value !== "object" || Reflect.get(value, "v") !== 1) return null;
		const anchor = Reflect.get(value, "anchor");
		return isThreadCommentAnchor(anchor) ? anchor : null;
	} catch {
		return null;
	}
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
//#region src/models/thread-comment.model.ts
let ThreadCommentModel = class ThreadCommentModel extends _univerjs_core.Disposable {
	constructor(_dataSourceService, _lifecycleService, _univerInstanceService) {
		super();
		this._dataSourceService = _dataSourceService;
		this._lifecycleService = _lifecycleService;
		this._univerInstanceService = _univerInstanceService;
		_defineProperty(this, "_commentsMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "_threadMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "_syncVersions", /* @__PURE__ */ new Map());
		_defineProperty(this, "_nextSyncVersion", 0);
		_defineProperty(this, "_commentUpdate$", new rxjs.Subject());
		_defineProperty(this, "commentUpdate$", this._commentUpdate$.asObservable());
		_defineProperty(this, "_tasks", []);
		this.disposeWithMe(() => {
			this._commentUpdate$.complete();
		});
		this.disposeWithMe(this._lifecycleService.lifecycle$.subscribe((stage) => {
			const taskMap = /* @__PURE__ */ new Map();
			if (stage === _univerjs_core.LifecycleStages.Rendered) {
				this._tasks.forEach(({ unitId, subUnitId, threadIds }) => {
					let unitMap = taskMap.get(unitId);
					if (!unitMap) {
						unitMap = /* @__PURE__ */ new Map();
						taskMap.set(unitId, unitMap);
					}
					let subUnitMap = unitMap.get(subUnitId);
					if (!subUnitMap) {
						subUnitMap = /* @__PURE__ */ new Set();
						unitMap.set(subUnitId, subUnitMap);
					}
					for (const threadId of threadIds) subUnitMap.add(threadId);
				});
				this._tasks = [];
				taskMap.forEach((subUnitMap, unitId) => {
					subUnitMap.forEach((threadIds, subUnitId) => {
						this.syncThreadComments(unitId, subUnitId, Array.from(threadIds));
					});
				});
			}
		}));
	}
	_ensureCommentMap(unitId, subUnitId) {
		let unitMap = this._commentsMap.get(unitId);
		if (!unitMap) {
			unitMap = /* @__PURE__ */ new Map();
			this._commentsMap.set(unitId, unitMap);
		}
		let subUnitMap = unitMap.get(subUnitId);
		if (!subUnitMap) {
			subUnitMap = /* @__PURE__ */ new Map();
			unitMap.set(subUnitId, subUnitMap);
		}
		return subUnitMap;
	}
	ensureMap(unitId, subUnitId) {
		return this._ensureCommentMap(unitId, subUnitId);
	}
	_ensureThreadMap(unitId, subUnitId) {
		let unitMap = this._threadMap.get(unitId);
		if (!unitMap) {
			unitMap = /* @__PURE__ */ new Map();
			this._threadMap.set(unitId, unitMap);
		}
		let subUnitMap = unitMap.get(subUnitId);
		if (!subUnitMap) {
			subUnitMap = /* @__PURE__ */ new Map();
			unitMap.set(subUnitId, subUnitMap);
		}
		return subUnitMap;
	}
	_syncKey(unitId, subUnitId, threadId) {
		return `${unitId}\0${subUnitId}\0${threadId}`;
	}
	_invalidateSync(unitId, subUnitId, threadId) {
		this._syncVersions.delete(this._syncKey(unitId, subUnitId, threadId));
	}
	_replaceComment(unitId, subUnitId, comment) {
		const commentMap = this._ensureCommentMap(unitId, subUnitId);
		const currentComment = commentMap.get(comment.id);
		if (!currentComment) {
			if ("ref" in comment && typeof comment.ref === "string") this.addComment(unitId, subUnitId, {
				...comment,
				ref: comment.ref
			});
			return;
		}
		const { children = [], ...rest } = comment;
		const seenChildIds = /* @__PURE__ */ new Set([comment.id]);
		const safeChildren = children.filter((child) => {
			const current = commentMap.get(child.id);
			if (child.threadId !== comment.threadId || seenChildIds.has(child.id) || current && current.threadId !== comment.threadId) return false;
			seenChildIds.add(child.id);
			return true;
		});
		const newComment = {
			...rest,
			ref: currentComment.ref
		};
		commentMap.set(comment.id, newComment);
		if (!newComment.parentId) this._ensureThreadMap(unitId, subUnitId).set(newComment.threadId, newComment);
		const remoteCommentIds = /* @__PURE__ */ new Set([comment.id, ...safeChildren.map((child) => child.id)]);
		commentMap.forEach((localComment, commentId) => {
			if (localComment.threadId === comment.threadId && !remoteCommentIds.has(commentId)) this._deleteComment(unitId, subUnitId, commentId);
		});
		safeChildren.forEach((child) => {
			commentMap.set(child.id, {
				...child,
				parentId: comment.id,
				ref: ""
			});
		});
		this._commentUpdate$.next({
			unitId,
			subUnitId,
			type: "syncUpdate",
			payload: newComment
		});
		if (Boolean(comment.resolved) !== Boolean(currentComment.resolved)) this._commentUpdate$.next({
			unitId,
			subUnitId,
			type: "resolve",
			payload: {
				commentId: comment.id,
				resolved: Boolean(comment.resolved)
			}
		});
	}
	async syncThreadComments(unitId, subUnitId, threadIds) {
		if (this._lifecycleService.stage < _univerjs_core.LifecycleStages.Rendered) {
			this._tasks.push({
				unitId,
				subUnitId,
				threadIds
			});
			return;
		}
		const versions = new Map(threadIds.map((threadId) => {
			const key = this._syncKey(unitId, subUnitId, threadId);
			const version = ++this._nextSyncVersion;
			this._syncVersions.set(key, version);
			return [threadId, {
				key,
				version
			}];
		}));
		const releaseVersions = () => versions.forEach(({ key, version }) => {
			if (this._syncVersions.get(key) === version) this._syncVersions.delete(key);
		});
		let comments;
		try {
			comments = await this._dataSourceService.listThreadComments(unitId, subUnitId, threadIds);
		} catch (error) {
			releaseVersions();
			throw error;
		}
		if (!comments) {
			releaseVersions();
			return;
		}
		const deleteThreads = new Set(threadIds.filter((threadId) => {
			const request = versions.get(threadId);
			return this._syncVersions.get(request.key) === request.version;
		}));
		if (!deleteThreads.size) {
			releaseVersions();
			return;
		}
		const threadMap = this._ensureThreadMap(unitId, subUnitId);
		const commentMap = this._ensureCommentMap(unitId, subUnitId);
		comments.forEach((comment) => {
			if (!deleteThreads.has(comment.threadId)) return;
			this._replaceComment(unitId, subUnitId, comment);
			deleteThreads.delete(comment.threadId);
		});
		deleteThreads.forEach((id) => {
			threadMap.delete(id);
			commentMap.forEach((comment, commentId) => {
				if (comment.threadId === id) this._deleteComment(unitId, subUnitId, commentId);
			});
		});
		releaseVersions();
	}
	addComment(unitId, subUnitId, origin, shouldSync) {
		const commentMap = this._ensureCommentMap(unitId, subUnitId);
		if (commentMap.has(origin.id)) return true;
		const { parentId, children = [], ...rest } = origin;
		const comment = {
			...rest,
			parentId: parentId === origin.id ? void 0 : parentId
		};
		if (!comment.threadId) comment.threadId = comment.parentId || comment.id;
		this._invalidateSync(unitId, subUnitId, comment.threadId);
		const addCommentItem = (item) => {
			commentMap.set(item.id, item);
			this._commentUpdate$.next({
				unitId,
				subUnitId,
				type: "add",
				payload: item,
				isRoot: !item.parentId
			});
		};
		addCommentItem(comment);
		const threadMap = this._ensureThreadMap(unitId, subUnitId);
		if (!comment.parentId) {
			threadMap.set(comment.threadId, comment);
			for (const child of children) {
				if (child.id === comment.id || child.threadId !== comment.threadId || commentMap.has(child.id)) continue;
				addCommentItem({
					...child,
					parentId: comment.id,
					ref: ""
				});
			}
		}
		if (shouldSync) this.syncThreadComments(unitId, subUnitId, [comment.threadId]);
		return true;
	}
	updateComment(unitId, subUnitId, payload, silent) {
		const oldComment = this._ensureCommentMap(unitId, subUnitId).get(payload.commentId);
		if (!oldComment) return false;
		this._invalidateSync(unitId, subUnitId, oldComment.threadId);
		oldComment.updated = true;
		oldComment.text = payload.text;
		oldComment.attachments = payload.attachments;
		oldComment.updateT = payload.updateT;
		this._commentUpdate$.next({
			unitId,
			subUnitId,
			type: "update",
			payload,
			silent
		});
		return true;
	}
	updateCommentRef(unitId, subUnitId, payload, silent) {
		const oldComment = this._ensureCommentMap(unitId, subUnitId).get(payload.commentId);
		if (!oldComment) return false;
		this._invalidateSync(unitId, subUnitId, oldComment.threadId);
		oldComment.ref = payload.ref;
		this._commentUpdate$.next({
			unitId,
			subUnitId,
			type: "updateRef",
			payload,
			silent,
			threadId: oldComment.threadId
		});
		return true;
	}
	resolveComment(unitId, subUnitId, commentId, resolved) {
		const oldComment = this._ensureCommentMap(unitId, subUnitId).get(commentId);
		if (!oldComment) return false;
		this._invalidateSync(unitId, subUnitId, oldComment.threadId);
		oldComment.resolved = resolved;
		this._commentUpdate$.next({
			unitId,
			subUnitId,
			type: "resolve",
			payload: {
				commentId,
				resolved
			}
		});
		return true;
	}
	getComment(unitId, subUnitId, commentId) {
		return this._ensureCommentMap(unitId, subUnitId).get(commentId);
	}
	getRootComment(unitId, subUnitId, threadId) {
		return this._ensureThreadMap(unitId, subUnitId).get(threadId);
	}
	getThread(unitId, subUnitId, threadId) {
		const commentMap = this._ensureCommentMap(unitId, subUnitId);
		const comments = Array.from(commentMap.values()).filter((comment) => comment.threadId === threadId);
		let root;
		const children = [];
		const relativeUsers = /* @__PURE__ */ new Set();
		for (const comment of comments) {
			if (!comment.parentId) root = comment;
			else children.push(comment);
			relativeUsers.add(comment.personId);
		}
		if (!root) return;
		return {
			root,
			children,
			relativeUsers,
			unitId,
			subUnitId,
			threadId
		};
	}
	getCommentWithChildren(unitId, subUnitId, commentId) {
		const comment = this.getComment(unitId, subUnitId, commentId);
		if (!comment) return;
		return this.getThread(unitId, subUnitId, comment.threadId);
	}
	_deleteComment(unitId, subUnitId, commentId) {
		const commentMap = this._ensureCommentMap(unitId, subUnitId);
		const current = commentMap.get(commentId);
		if (!current) return;
		this._invalidateSync(unitId, subUnitId, current.threadId);
		commentMap.delete(commentId);
		this._commentUpdate$.next({
			unitId,
			subUnitId,
			type: "delete",
			payload: {
				commentId,
				isRoot: !current.parentId,
				comment: current
			}
		});
	}
	deleteThread(unitId, subUnitId, threadId) {
		this._invalidateSync(unitId, subUnitId, threadId);
		this._ensureThreadMap(unitId, subUnitId).delete(threadId);
		this._ensureCommentMap(unitId, subUnitId).forEach((comment) => {
			if (comment.threadId === threadId) this._deleteComment(unitId, subUnitId, comment.id);
		});
	}
	deleteComment(unitId, subUnitId, commentId) {
		const current = this._ensureCommentMap(unitId, subUnitId).get(commentId);
		if (!current) return true;
		if (current.parentId) this._deleteComment(unitId, subUnitId, commentId);
		else this.deleteThread(unitId, subUnitId, current.threadId);
		return true;
	}
	deleteUnit(unitId) {
		const unitMap = this._commentsMap.get(unitId);
		unitMap === null || unitMap === void 0 || unitMap.forEach((subUnitMap, subUnitId) => {
			subUnitMap.forEach((comment) => {
				this.deleteComment(unitId, subUnitId, comment.id);
			});
		});
		this._commentsMap.delete(unitId);
		this._threadMap.delete(unitId);
		this._tasks = this._tasks.filter((task) => task.unitId !== unitId);
		const syncPrefix = `${unitId}\0`;
		this._syncVersions.forEach((_version, key) => {
			if (key.startsWith(syncPrefix)) this._syncVersions.delete(key);
		});
	}
	getUnit(unitId) {
		const unitMap = this._commentsMap.get(unitId);
		if (!unitMap) return [];
		const threads = [];
		unitMap.forEach((commentMap, subUnitId) => {
			const threadInfos = /* @__PURE__ */ new Map();
			commentMap.forEach((comment) => {
				let thread = threadInfos.get(comment.threadId);
				if (!thread) {
					thread = {
						unitId,
						subUnitId,
						threadId: comment.threadId,
						children: [],
						relativeUsers: /* @__PURE__ */ new Set()
					};
					threadInfos.set(comment.threadId, thread);
				}
				if (comment.parentId) thread.children.push(comment);
				else thread.root = comment;
				thread.relativeUsers.add(comment.personId);
			});
			threadInfos.forEach((thread) => {
				if (thread.root) threads.push({
					...thread,
					root: thread.root
				});
			});
		});
		return threads;
	}
	getAll() {
		const all = [];
		this._commentsMap.forEach((unitMap, unitId) => {
			all.push({
				unitId,
				threads: this.getUnit(unitId)
			});
		});
		return all;
	}
	getAnchorKind(unitId, ref) {
		const anchor = deserializeThreadCommentAnchor(ref);
		if (anchor) return anchor.kind;
		switch (this._univerInstanceService.getUnitType(unitId)) {
			case _univerjs_core.UniverInstanceType.UNIVER_SHEET: return "sheet-cell";
			case _univerjs_core.UniverInstanceType.UNIVER_DOC: return "doc-text-range";
			default: return null;
		}
	}
	query(query = {}) {
		const unitIds = query.unitIds ? new Set(query.unitIds) : null;
		const subUnitIds = query.subUnitIds ? new Set(query.subUnitIds) : null;
		const anchorKinds = query.anchorKinds ? new Set(query.anchorKinds) : null;
		const authorIds = query.authorIds ? new Set(query.authorIds) : null;
		return this.getAll().flatMap(({ unitId, threads }) => {
			if (unitIds && !unitIds.has(unitId)) return [];
			return threads.filter((thread) => {
				if (subUnitIds && !subUnitIds.has(thread.subUnitId)) return false;
				if (query.resolved !== void 0 && Boolean(thread.root.resolved) !== query.resolved) return false;
				if (anchorKinds) {
					const anchorKind = this.getAnchorKind(unitId, thread.root.ref);
					if (!anchorKind || !anchorKinds.has(anchorKind)) return false;
				}
				if (authorIds && ![thread.root, ...thread.children].some((comment) => authorIds.has(comment.personId))) return false;
				return true;
			});
		});
	}
};
ThreadCommentModel = __decorate([
	__decorateParam(0, (0, _univerjs_core.Inject)(IThreadCommentDataSourceService)),
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_core.LifecycleService)),
	__decorateParam(2, _univerjs_core.IUniverInstanceService)
], ThreadCommentModel);

//#endregion
//#region src/commands/mutations/comment.mutation.ts
const AddCommentMutation = {
	id: "thread-comment.mutation.add-comment",
	type: _univerjs_core.CommandType.MUTATION,
	handler(accessor, params, options) {
		if (!params) return false;
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const { unitId, subUnitId, comment, sync } = params;
		const shouldSync = sync || (options === null || options === void 0 ? void 0 : options.fromChangeset) && !comment.parentId;
		return threadCommentModel.addComment(unitId, subUnitId, comment, shouldSync);
	}
};
const UpdateCommentMutation = {
	id: "thread-comment.mutation.update-comment",
	type: _univerjs_core.CommandType.MUTATION,
	handler(accessor, params) {
		if (!params) return false;
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const { unitId, subUnitId, payload, silent } = params;
		return threadCommentModel.updateComment(unitId, subUnitId, payload, silent);
	}
};
const UpdateCommentRefMutation = {
	id: "thread-comment.mutation.update-comment-ref",
	type: _univerjs_core.CommandType.MUTATION,
	handler(accessor, params) {
		if (!params) return false;
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const { unitId, subUnitId, payload, silent } = params;
		return threadCommentModel.updateCommentRef(unitId, subUnitId, payload, silent);
	}
};
const ResolveCommentMutation = {
	id: "thread-comment.mutation.resolve-comment",
	type: _univerjs_core.CommandType.MUTATION,
	handler(accessor, params) {
		if (!params) return false;
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const { unitId, subUnitId, resolved, commentId } = params;
		return threadCommentModel.resolveComment(unitId, subUnitId, commentId, resolved);
	}
};
const DeleteCommentMutation = {
	id: "thread-comment.mutation.delete-comment",
	type: _univerjs_core.CommandType.MUTATION,
	handler(accessor, params) {
		if (!params) return false;
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const { unitId, subUnitId, commentId } = params;
		return threadCommentModel.deleteComment(unitId, subUnitId, commentId);
	}
};

//#endregion
//#region src/commands/commands/comment.command.ts
const latestWriteVersions = /* @__PURE__ */ new WeakMap();
function startCommentWrite(comment, kind) {
	const versions = latestWriteVersions.get(comment) ?? {
		resolve: 0,
		update: 0
	};
	const version = versions[kind] + 1;
	versions[kind] = version;
	latestWriteVersions.set(comment, versions);
	return version;
}
function isLatestCommentWrite(comment, kind, version) {
	var _latestWriteVersions$;
	return ((_latestWriteVersions$ = latestWriteVersions.get(comment)) === null || _latestWriteVersions$ === void 0 ? void 0 : _latestWriteVersions$[kind]) === version;
}
const AddCommentCommand = {
	id: "thread-comment.command.add-comment",
	type: _univerjs_core.CommandType.COMMAND,
	async handler(accessor, params) {
		var _threadCommentModel$g, _threadCommentModel$g2;
		if (!params) return false;
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const dataSourceService = accessor.get(IThreadCommentDataSourceService);
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const { comment: originComment } = params;
		const isRoot = !originComment.parentId;
		if (!isRoot && ((_threadCommentModel$g = threadCommentModel.getRootComment(params.unitId, params.subUnitId, originComment.threadId)) === null || _threadCommentModel$g === void 0 ? void 0 : _threadCommentModel$g.id) !== originComment.parentId) return false;
		const comment = {
			...await dataSourceService.addComment(originComment),
			unitId: params.unitId,
			subUnitId: params.subUnitId,
			ref: originComment.ref,
			parentId: originComment.parentId,
			...!isRoot ? { threadId: originComment.threadId } : {}
		};
		const syncUpdateMutationToColla = dataSourceService.syncUpdateMutationToColla;
		if (!isRoot && ((_threadCommentModel$g2 = threadCommentModel.getRootComment(params.unitId, params.subUnitId, originComment.threadId)) === null || _threadCommentModel$g2 === void 0 ? void 0 : _threadCommentModel$g2.id) !== originComment.parentId) {
			try {
				await dataSourceService.deleteComment(params.unitId, params.subUnitId, comment.threadId, comment.id);
			} catch {}
			return false;
		}
		const redo = {
			id: AddCommentMutation.id,
			params: {
				...params,
				comment
			}
		};
		if (isRoot) return await commandService.executeCommand(redo.id, redo.params);
		return commandService.executeCommand(redo.id, redo.params, { onlyLocal: !syncUpdateMutationToColla });
	}
};
const UpdateCommentCommand = {
	id: "thread-comment.command.update-comment",
	type: _univerjs_core.CommandType.COMMAND,
	async handler(accessor, params) {
		if (!params) return false;
		const { unitId, subUnitId, payload } = params;
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const dataSourceService = accessor.get(IThreadCommentDataSourceService);
		const syncUpdateMutationToColla = dataSourceService.syncUpdateMutationToColla;
		const current = threadCommentModel.getComment(unitId, subUnitId, payload.commentId);
		if (!current) return false;
		const { children, ...currentComment } = current;
		const writeVersion = startCommentWrite(current, "update");
		if (!await dataSourceService.updateComment({
			...currentComment,
			...payload
		}) || threadCommentModel.getComment(unitId, subUnitId, payload.commentId) !== current || !isLatestCommentWrite(current, "update", writeVersion)) return false;
		const redo = {
			id: UpdateCommentMutation.id,
			params
		};
		return commandService.executeCommand(redo.id, redo.params, { onlyLocal: !syncUpdateMutationToColla });
	}
};
const ResolveCommentCommand = {
	id: "thread-comment.command.resolve-comment",
	type: _univerjs_core.CommandType.COMMAND,
	async handler(accessor, params) {
		if (!params) return false;
		const { unitId, subUnitId, resolved, commentId } = params;
		const dataSourceService = accessor.get(IThreadCommentDataSourceService);
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const currentComment = threadCommentModel.getComment(unitId, subUnitId, commentId);
		const syncUpdateMutationToColla = dataSourceService.syncUpdateMutationToColla;
		if (!currentComment) return false;
		const writeVersion = startCommentWrite(currentComment, "resolve");
		if (!await dataSourceService.resolveComment({
			...currentComment,
			resolved
		}) || threadCommentModel.getComment(unitId, subUnitId, commentId) !== currentComment || !isLatestCommentWrite(currentComment, "resolve", writeVersion)) return false;
		return accessor.get(_univerjs_core.ICommandService).executeCommand(ResolveCommentMutation.id, params, { onlyLocal: !syncUpdateMutationToColla });
	}
};
/**
* Delete Reply
*/
const DeleteCommentCommand = {
	id: "thread-comment.command.delete-comment",
	type: _univerjs_core.CommandType.COMMAND,
	async handler(accessor, params) {
		if (!params) return false;
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const dataSourceService = accessor.get(IThreadCommentDataSourceService);
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const { unitId, subUnitId, commentId } = params;
		const syncUpdateMutationToColla = dataSourceService.syncUpdateMutationToColla;
		const comment = threadCommentModel.getComment(unitId, subUnitId, commentId);
		if (!comment) return false;
		if (!await dataSourceService.deleteComment(unitId, subUnitId, comment.threadId, commentId)) return false;
		const redo = {
			id: DeleteCommentMutation.id,
			params
		};
		return commandService.executeCommand(redo.id, redo.params, { onlyLocal: !syncUpdateMutationToColla });
	}
};
const DeleteCommentTreeCommand = {
	id: "thread-comment.command.delete-comment-tree",
	type: _univerjs_core.CommandType.COMMAND,
	async handler(accessor, params) {
		if (!params) return false;
		const threadCommentModel = accessor.get(ThreadCommentModel);
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const dataSourceService = accessor.get(IThreadCommentDataSourceService);
		const { unitId, subUnitId, commentId } = params;
		const commentWithChildren = threadCommentModel.getCommentWithChildren(unitId, subUnitId, commentId);
		if (!commentWithChildren) return false;
		if (!(dataSourceService.deleteThread ? await dataSourceService.deleteThread(unitId, subUnitId, commentWithChildren.root.threadId) : await dataSourceService.deleteComment(unitId, subUnitId, commentWithChildren.root.threadId, commentWithChildren.root.id))) return false;
		return await commandService.executeCommand(DeleteCommentMutation.id, {
			unitId,
			subUnitId,
			commentId: commentWithChildren.root.id
		});
	}
};

//#endregion
//#region src/common/utils.ts
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
function getDT(date) {
	return (0, _univerjs_core.dateKit)(date).format("YYYY/MM/DD HH:mm");
}

//#endregion
//#region src/services/thread-comment-api.service.ts
const DOCUMENT_BODY_ARRAY_FIELDS = [
	"renderedPageBreaks",
	"textRuns",
	"paragraphs",
	"sectionBreaks",
	"customBlocks",
	"tables",
	"columnGroups",
	"blockRanges",
	"customRanges",
	"customDecorations"
];
function isThreadCommentDocumentBody(value) {
	if (!value || typeof value !== "object") return false;
	if (typeof Reflect.get(value, "dataStream") !== "string") return false;
	if (DOCUMENT_BODY_ARRAY_FIELDS.some((field) => {
		const fieldValue = Reflect.get(value, field);
		return fieldValue !== void 0 && !Array.isArray(fieldValue);
	})) return false;
	const payloads = Reflect.get(value, "payloads");
	return payloads === void 0 || payloads !== null && typeof payloads === "object" && !Array.isArray(payloads) && Object.values(payloads).every((item) => typeof item === "string");
}
function normalizeThreadCommentContent(content) {
	if (typeof content !== "string") {
		if (!isThreadCommentDocumentBody(content)) throw new TypeError("Invalid thread comment content");
		if (!content.dataStream.replace(/[\r\n]/g, "").trim()) throw new TypeError("Thread comment content cannot be empty");
		return content;
	}
	if (!content.trim()) throw new TypeError("Thread comment content cannot be empty");
	return { dataStream: content.replace(/\r\n?|\n/g, "\r").replace(/\r*$/, "\r\n") };
}
function toFacadeInfo(thread, anchorKind) {
	return {
		unitId: thread.unitId,
		subUnitId: thread.subUnitId,
		threadId: thread.threadId,
		root: thread.root,
		children: thread.children,
		anchorKind,
		anchor: deserializeThreadCommentAnchor(thread.root.ref),
		relativeUserIds: Array.from(thread.relativeUsers)
	};
}
let ThreadCommentFacadeService = class ThreadCommentFacadeService {
	constructor(_commandService, _model, _userManagerService) {
		this._commandService = _commandService;
		this._model = _model;
		this._userManagerService = _userManagerService;
	}
	createCommentAsync(options) {
		const id = options.id ?? (0, _univerjs_core.generateRandomId)();
		const threadId = options.threadId ?? id;
		const personId = options.personId ?? this._userManagerService.getCurrentUser().userID;
		return this._commandService.executeCommand(AddCommentCommand.id, {
			unitId: options.unitId,
			subUnitId: options.subUnitId,
			comment: {
				id,
				threadId,
				unitId: options.unitId,
				subUnitId: options.subUnitId,
				ref: serializeThreadCommentAnchor(options.anchor),
				text: normalizeThreadCommentContent(options.content),
				attachments: options.attachments ?? [],
				dT: getDT(options.dateTime),
				personId
			}
		});
	}
	replyCommentAsync(options) {
		const root = this._model.getRootComment(options.unitId, options.subUnitId, options.threadId);
		if (!root) return Promise.resolve(false);
		return this._commandService.executeCommand(AddCommentCommand.id, {
			unitId: options.unitId,
			subUnitId: options.subUnitId,
			comment: {
				id: options.id ?? (0, _univerjs_core.generateRandomId)(),
				threadId: options.threadId,
				parentId: root.id,
				unitId: options.unitId,
				subUnitId: options.subUnitId,
				ref: root.ref,
				text: normalizeThreadCommentContent(options.content),
				attachments: options.attachments ?? [],
				dT: getDT(options.dateTime),
				personId: options.personId ?? this._userManagerService.getCurrentUser().userID
			}
		});
	}
	updateCommentAsync(options) {
		return this._commandService.executeCommand(UpdateCommentCommand.id, {
			unitId: options.unitId,
			subUnitId: options.subUnitId,
			payload: {
				commentId: options.commentId,
				text: normalizeThreadCommentContent(options.content),
				attachments: options.attachments,
				updateT: getDT(options.dateTime)
			}
		});
	}
	deleteCommentAsync(options) {
		return this._commandService.executeCommand(options.deleteThread ? DeleteCommentTreeCommand.id : DeleteCommentCommand.id, {
			unitId: options.unitId,
			subUnitId: options.subUnitId,
			commentId: options.commentId
		});
	}
	resolveCommentAsync(options) {
		return this._commandService.executeCommand(ResolveCommentCommand.id, {
			unitId: options.unitId,
			subUnitId: options.subUnitId,
			commentId: options.commentId,
			resolved: options.resolved ?? true
		});
	}
	getComments(query = {}) {
		return this._model.query(query).map((thread) => toFacadeInfo(thread, this._model.getAnchorKind(thread.unitId, thread.root.ref)));
	}
	async listCommentsAsync(query = {}) {
		const knownThreads = this._model.query({
			unitIds: query.unitIds,
			subUnitIds: query.subUnitIds
		});
		const groups = /* @__PURE__ */ new Map();
		knownThreads.forEach((thread) => {
			const key = `${thread.unitId}\0${thread.subUnitId}`;
			const group = groups.get(key) ?? {
				unitId: thread.unitId,
				subUnitId: thread.subUnitId,
				threadIds: []
			};
			group.threadIds.push(thread.threadId);
			groups.set(key, group);
		});
		await Promise.all(Array.from(groups.values()).map((group) => this._model.syncThreadComments(group.unitId, group.subUnitId, group.threadIds)));
		return this._model.query(query).map((thread) => toFacadeInfo(thread, this._model.getAnchorKind(thread.unitId, thread.root.ref)));
	}
};
ThreadCommentFacadeService = __decorate([
	__decorateParam(0, (0, _univerjs_core.Inject)(_univerjs_core.ICommandService)),
	__decorateParam(1, (0, _univerjs_core.Inject)(ThreadCommentModel)),
	__decorateParam(2, (0, _univerjs_core.Inject)(_univerjs_core.UserManagerService))
], ThreadCommentFacadeService);

//#endregion
//#region src/common/tc-resource.ts
function isStringArray(value) {
	return Array.isArray(value) && value.every((item) => typeof item === "string");
}
function isSnapshotComment(value, allowChildren = true) {
	if (!value || typeof value !== "object") return false;
	const comment = value;
	return typeof comment.id === "string" && comment.id.length > 0 && typeof comment.threadId === "string" && comment.threadId.length > 0 && typeof comment.ref === "string" && (comment.text === void 0 || isThreadCommentDocumentBody(comment.text)) && (comment.attachments === void 0 || isStringArray(comment.attachments)) && (comment.mentions === void 0 || isStringArray(comment.mentions)) && (!allowChildren || comment.children === void 0 || Array.isArray(comment.children) && comment.children.every((child) => isSnapshotComment(child, false)));
}
function createThreadCommentResourceHook(threadCommentModel, threadCommentDataSourceService, pluginName, businesses) {
	return {
		pluginName,
		businesses,
		toJson: (unitID) => {
			const map = threadCommentModel.getUnit(unitID);
			const resultMap = {};
			map.forEach((info) => {
				const subUnitComments = resultMap[info.subUnitId] ?? [];
				subUnitComments.push({
					...info.root,
					children: info.children
				});
				resultMap[info.subUnitId] = subUnitComments;
			});
			return JSON.stringify(threadCommentDataSourceService.saveToSnapshot(resultMap, unitID));
		},
		parseJson: (json) => {
			if (!json) return {};
			try {
				const value = JSON.parse(json);
				if (!value || typeof value !== "object" || Array.isArray(value)) return {};
				return Object.fromEntries(Object.entries(value).flatMap(([subUnitId, comments]) => Array.isArray(comments) ? [[subUnitId, comments.filter((comment) => isSnapshotComment(comment))]] : []));
			} catch {
				return {};
			}
		},
		onUnLoad: (unitID) => {
			threadCommentModel.deleteUnit(unitID);
		},
		onLoad: (unitID, value) => {
			Object.keys(value).forEach((subunitId) => {
				const commentList = value[subunitId];
				commentList.forEach((comment) => {
					var _comment$children;
					const seenIds = /* @__PURE__ */ new Set([comment.id]);
					const children = (_comment$children = comment.children) === null || _comment$children === void 0 ? void 0 : _comment$children.filter((child) => {
						if (child.threadId !== comment.threadId || seenIds.has(child.id)) return false;
						seenIds.add(child.id);
						return true;
					}).map((child) => ({
						...child,
						unitId: unitID,
						subUnitId: subunitId
					}));
					threadCommentModel.addComment(unitID, subunitId, {
						...comment,
						unitId: unitID,
						subUnitId: subunitId,
						children
					});
				});
				threadCommentModel.syncThreadComments(unitID, subunitId, commentList.map((i) => i.threadId));
			});
		}
	};
}

//#endregion
//#region package.json
var name = "@univerjs/thread-comment";
var version = "1.0.0-insiders.20260907-70fc579";

//#endregion
//#region src/config/config.ts
const THREAD_COMMENT_PLUGIN_CONFIG_KEY = "thread-comment.config";
const configSymbol = Symbol(THREAD_COMMENT_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {};

//#endregion
//#region src/types/const/index.ts
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
const TC_PLUGIN_NAME = "UNIVER_THREAD_COMMENT_PLUGIN";

//#endregion
//#region src/plugin.ts
let UniverThreadCommentPlugin = class UniverThreadCommentPlugin extends _univerjs_core.Plugin {
	constructor(_config = defaultPluginConfig, _injector, _commandService, _configService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._commandService = _commandService;
		this._configService = _configService;
		const { ...rest } = (0, _univerjs_core.merge)({}, defaultPluginConfig, this._config);
		this._configService.setConfig(THREAD_COMMENT_PLUGIN_CONFIG_KEY, rest);
	}
	onStarting() {
		var _this$_config;
		(0, _univerjs_core.mergeOverrideWithDependencies)([
			[IThreadCommentDataSourceService, { useClass: ThreadCommentDataSourceService }],
			[ThreadCommentModel],
			[ThreadCommentFacadeService]
		], (_this$_config = this._config) === null || _this$_config === void 0 ? void 0 : _this$_config.overrides).forEach((d) => {
			this._injector.add(d);
		});
		[
			AddCommentCommand,
			UpdateCommentCommand,
			DeleteCommentCommand,
			ResolveCommentCommand,
			DeleteCommentTreeCommand,
			AddCommentMutation,
			UpdateCommentMutation,
			UpdateCommentRefMutation,
			DeleteCommentMutation,
			ResolveCommentMutation
		].forEach((command) => {
			this._commandService.registerCommand(command);
		});
	}
};
_defineProperty(UniverThreadCommentPlugin, "pluginName", TC_PLUGIN_NAME);
_defineProperty(UniverThreadCommentPlugin, "packageName", name);
_defineProperty(UniverThreadCommentPlugin, "version", version);
_defineProperty(UniverThreadCommentPlugin, "type", _univerjs_core.UniverInstanceType.UNIVER_UNKNOWN);
UniverThreadCommentPlugin = __decorate([
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_core.Injector)),
	__decorateParam(2, _univerjs_core.ICommandService),
	__decorateParam(3, _univerjs_core.IConfigService)
], UniverThreadCommentPlugin);

//#endregion
exports.AddCommentCommand = AddCommentCommand;
exports.AddCommentMutation = AddCommentMutation;
exports.DeleteCommentCommand = DeleteCommentCommand;
exports.DeleteCommentMutation = DeleteCommentMutation;
exports.DeleteCommentTreeCommand = DeleteCommentTreeCommand;
exports.IThreadCommentDataSourceService = IThreadCommentDataSourceService;
exports.ResolveCommentCommand = ResolveCommentCommand;
exports.ResolveCommentMutation = ResolveCommentMutation;
exports.TC_PLUGIN_NAME = TC_PLUGIN_NAME;
exports.ThreadCommentAnchorKind = ThreadCommentAnchorKind;
exports.ThreadCommentDataSourceService = ThreadCommentDataSourceService;
Object.defineProperty(exports, 'ThreadCommentFacadeService', {
  enumerable: true,
  get: function () {
    return ThreadCommentFacadeService;
  }
});
Object.defineProperty(exports, 'ThreadCommentModel', {
  enumerable: true,
  get: function () {
    return ThreadCommentModel;
  }
});
Object.defineProperty(exports, 'UniverThreadCommentPlugin', {
  enumerable: true,
  get: function () {
    return UniverThreadCommentPlugin;
  }
});
exports.UpdateCommentCommand = UpdateCommentCommand;
exports.UpdateCommentMutation = UpdateCommentMutation;
exports.UpdateCommentRefMutation = UpdateCommentRefMutation;
exports.createThreadCommentResourceHook = createThreadCommentResourceHook;
exports.deserializeThreadCommentAnchor = deserializeThreadCommentAnchor;
exports.getDT = getDT;
exports.isThreadCommentAnchor = isThreadCommentAnchor;
exports.isThreadCommentDocumentBody = isThreadCommentDocumentBody;
exports.normalizeThreadCommentContent = normalizeThreadCommentContent;
exports.serializeThreadCommentAnchor = serializeThreadCommentAnchor;