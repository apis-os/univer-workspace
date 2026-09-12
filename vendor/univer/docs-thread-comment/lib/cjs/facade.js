//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let _univerjs_core = require("@univerjs/core");
let _univerjs_docs_thread_comment = require("@univerjs/docs-thread-comment");
_univerjs_docs_thread_comment = __toESM(_univerjs_docs_thread_comment);
let _univerjs_docs_facade = require("@univerjs/docs/facade");
_univerjs_docs_facade = __toESM(_univerjs_docs_facade);
let _univerjs_thread_comment = require("@univerjs/thread-comment");
_univerjs_thread_comment = __toESM(_univerjs_thread_comment);

//#region src/facade/f-document-text-range.ts
var FDocumentTextRangeThreadCommentMixin = class extends _univerjs_docs_facade.FDocumentTextRange {
	_initialize(injector) {
		this._threadCommentCommandService = injector.get(_univerjs_core.ICommandService);
		let commentService;
		Object.defineProperty(this, "_threadCommentFacadeService", { get: () => commentService ??= injector.get(_univerjs_thread_comment.ThreadCommentFacadeService) });
	}
	/** @inheritdoc */
	createCommentAsync(content, options = {}) {
		return this._threadCommentCommandService.executeCommand(_univerjs_docs_thread_comment.CreateDocTextRangeCommentCommand.id, {
			...options,
			unitId: this._document.getId(),
			range: {
				...this.getRange(),
				collapsed: false
			},
			content
		});
	}
	/** @inheritdoc */
	getComments() {
		const range = this.getRange();
		const commentIds = this._getOverlappingCommentIds(range);
		return this._threadCommentFacadeService.getComments({
			unitIds: [this._document.getId()],
			subUnitIds: [_univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID],
			anchorKinds: [_univerjs_thread_comment.ThreadCommentAnchorKind.DOC_TEXT_RANGE]
		}).filter((comment) => commentIds.has(comment.root.id));
	}
	/** @inheritdoc */
	async listCommentsAsync() {
		const range = this.getRange();
		const commentIds = this._getOverlappingCommentIds(range);
		return (await this._threadCommentFacadeService.listCommentsAsync({
			unitIds: [this._document.getId()],
			subUnitIds: [_univerjs_docs_thread_comment.DEFAULT_DOC_SUBUNIT_ID],
			anchorKinds: [_univerjs_thread_comment.ThreadCommentAnchorKind.DOC_TEXT_RANGE]
		})).filter((comment) => commentIds.has(comment.root.id));
	}
	_getOverlappingCommentIds(range) {
		const decorations = this._document.getBody(range.segmentId).customDecorations ?? [];
		return new Set(decorations.filter((decoration) => decoration.type === _univerjs_core.CustomDecorationType.COMMENT && decoration.startIndex < range.endOffset && decoration.endIndex >= range.startOffset).map((decoration) => decoration.id));
	}
};
_univerjs_docs_facade.FDocumentTextRange.extend(FDocumentTextRangeThreadCommentMixin);

//#endregion