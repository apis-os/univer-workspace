import { UniverSheetsThreadCommentPlugin } from "@univerjs/sheets-thread-comment";
import { UniverSheetsThreadCommentUIPlugin } from "@univerjs/sheets-thread-comment-ui";
import { UniverThreadCommentUIPlugin } from "@univerjs/thread-comment-ui";
import "@univerjs/sheets-thread-comment/facade";

export * from "@univerjs/sheets-thread-comment"

export * from "@univerjs/sheets-thread-comment-ui"

export * from "@univerjs/thread-comment-ui"

//#region src/preset.ts
/**
* This preset add thread comment features into your application.
*
* @param {Partial<IUniverSheetsThreadCommentPresetConfig>} config - The configuration object.
*/
function UniverSheetsThreadCommentPreset(_config = {}) {
	return { plugins: [
		UniverThreadCommentUIPlugin,
		UniverSheetsThreadCommentPlugin,
		UniverSheetsThreadCommentUIPlugin
	] };
}

//#endregion
export { UniverSheetsThreadCommentPreset };