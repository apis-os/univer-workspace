Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_core = require("@univerjs/core");
let _univerjs_docs_drawing = require("@univerjs/docs-drawing");
let _univerjs_docs_drawing_ui = require("@univerjs/docs-drawing-ui");
let _univerjs_drawing = require("@univerjs/drawing");
let _univerjs_drawing_ui = require("@univerjs/drawing-ui");
require("@univerjs/docs-drawing/facade");

//#region src/preset.ts
function UniverDocsDrawingPreset(config = {}) {
	const { collaboration = false } = config;
	return { plugins: [
		[_univerjs_drawing.UniverDrawingPlugin, { override: collaboration ? [[_univerjs_core.IImageIoService, null]] : [] }],
		_univerjs_drawing_ui.UniverDrawingUIPlugin,
		_univerjs_docs_drawing.UniverDocsDrawingPlugin,
		_univerjs_docs_drawing_ui.UniverDocsDrawingUIPlugin
	].filter((v) => !!v) };
}

//#endregion
exports.UniverDocsDrawingPreset = UniverDocsDrawingPreset;
Object.keys(_univerjs_docs_drawing).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_docs_drawing[k]; }
  });
});

Object.keys(_univerjs_docs_drawing_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_docs_drawing_ui[k]; }
  });
});

Object.keys(_univerjs_drawing).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_drawing[k]; }
  });
});

Object.keys(_univerjs_drawing_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_drawing_ui[k]; }
  });
});
