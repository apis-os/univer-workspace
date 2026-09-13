import { CustomDecorationType, ICommandService } from "@univerjs/core";
import * as DocsThreadComment from "@univerjs/docs-thread-comment";
import * as DocsFacade from "@univerjs/docs/facade";
import * as ThreadComment from "@univerjs/thread-comment";

//#region src/facade/f-document-text-range.ts
var FDocumentTextRangeThreadCommentMixin = class extends DocsFacade.FDocumentTextRange {
	_initialize(injector) {
		this._threadCommentCommandService = injector.get(ICommandService);
		let commentService;
		Object.defineProperty(this, "_threadCommentFacadeService", { get: () => commentService ??= injector.get(ThreadComment.ThreadCommentFacadeService) });
	}
	/** @inheritdoc */
	createCommentAsync(content, options = {}) {
		return this._threadCommentCommandService.executeCommand(DocsThreadComment.CreateDocTextRangeCommentCommand.id, {
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
			subUnitIds: [DocsThreadComment.DEFAULT_DOC_SUBUNIT_ID],
			anchorKinds: [ThreadComment.ThreadCommentAnchorKind.DOC_TEXT_RANGE]
		}).filter((comment) => commentIds.has(comment.root.id));
	}
	/** @inheritdoc */
	async listCommentsAsync() {
		const range = this.getRange();
		const commentIds = this._getOverlappingCommentIds(range);
		return (await this._threadCommentFacadeService.listCommentsAsync({
			unitIds: [this._document.getId()],
			subUnitIds: [DocsThreadComment.DEFAULT_DOC_SUBUNIT_ID],
			anchorKinds: [ThreadComment.ThreadCommentAnchorKind.DOC_TEXT_RANGE]
		})).filter((comment) => commentIds.has(comment.root.id));
	}
	_getOverlappingCommentIds(range) {
		const decorations = this._document.getBody(range.segmentId).customDecorations ?? [];
		return new Set(decorations.filter((decoration) => decoration.type === CustomDecorationType.COMMENT && decoration.startIndex < range.endOffset && decoration.endIndex >= range.startOffset).map((decoration) => decoration.id));
	}
};
DocsFacade.FDocumentTextRange.extend(FDocumentTextRangeThreadCommentMixin);

//#endregion
export {  };