Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_docs_thread_comment_ui = require("@univerjs/docs-thread-comment-ui");
let _univerjs_thread_comment_ui = require("@univerjs/thread-comment-ui");

//#region src/preset.ts
/**
* This preset add thread comment features into your application.
*
* @param {Partial<IUniverDocsThreadCommentPresetConfig>} config - The configuration object.
*/
function UniverDocsThreadCommentPreset(_config = {}) {
	return { plugins: [_univerjs_thread_comment_ui.UniverThreadCommentUIPlugin, _univerjs_docs_thread_comment_ui.UniverDocsThreadCommentUIPlugin] };
}

//#endregion
exports.UniverDocsThreadCommentPreset = UniverDocsThreadCommentPreset;
Object.keys(_univerjs_docs_thread_comment_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_docs_thread_comment_ui[k]; }
  });
});

Object.keys(_univerjs_thread_comment_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_thread_comment_ui[k]; }
  });
});
