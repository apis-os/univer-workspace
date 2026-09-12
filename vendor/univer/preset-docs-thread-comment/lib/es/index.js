import { UniverDocsThreadCommentUIPlugin } from "@univerjs/docs-thread-comment-ui";
import { UniverThreadCommentUIPlugin } from "@univerjs/thread-comment-ui";

export * from "@univerjs/docs-thread-comment-ui"

export * from "@univerjs/thread-comment-ui"

//#region src/preset.ts
/**
* This preset add thread comment features into your application.
*
* @param {Partial<IUniverDocsThreadCommentPresetConfig>} config - The configuration object.
*/
function UniverDocsThreadCommentPreset(_config = {}) {
	return { plugins: [UniverThreadCommentUIPlugin, UniverDocsThreadCommentUIPlugin] };
}

//#endregion
export { UniverDocsThreadCommentPreset };