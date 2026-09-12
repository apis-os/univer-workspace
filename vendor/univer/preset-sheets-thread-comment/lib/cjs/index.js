Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_sheets_thread_comment = require("@univerjs/sheets-thread-comment");
let _univerjs_sheets_thread_comment_ui = require("@univerjs/sheets-thread-comment-ui");
let _univerjs_thread_comment_ui = require("@univerjs/thread-comment-ui");
require("@univerjs/sheets-thread-comment/facade");

//#region src/preset.ts
/**
* This preset add thread comment features into your application.
*
* @param {Partial<IUniverSheetsThreadCommentPresetConfig>} config - The configuration object.
*/
function UniverSheetsThreadCommentPreset(_config = {}) {
	return { plugins: [
		_univerjs_thread_comment_ui.UniverThreadCommentUIPlugin,
		_univerjs_sheets_thread_comment.UniverSheetsThreadCommentPlugin,
		_univerjs_sheets_thread_comment_ui.UniverSheetsThreadCommentUIPlugin
	] };
}

//#endregion
exports.UniverSheetsThreadCommentPreset = UniverSheetsThreadCommentPreset;
Object.keys(_univerjs_sheets_thread_comment).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_sheets_thread_comment[k]; }
  });
});

Object.keys(_univerjs_sheets_thread_comment_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_sheets_thread_comment_ui[k]; }
  });
});

Object.keys(_univerjs_thread_comment_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_thread_comment_ui[k]; }
  });
});
