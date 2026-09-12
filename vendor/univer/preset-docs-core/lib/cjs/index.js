Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_docs = require("@univerjs/docs");
let _univerjs_docs_ui = require("@univerjs/docs-ui");
let _univerjs_engine_formula = require("@univerjs/engine-formula");
let _univerjs_engine_render = require("@univerjs/engine-render");
let _univerjs_network = require("@univerjs/network");
let _univerjs_ui = require("@univerjs/ui");
require("@univerjs/network/facade");
require("@univerjs/docs-ui/facade");

//#region src/preset.ts
function UniverDocsCorePreset(config = {}) {
	const { container = "app", header, footer, toolbar, ribbonType, menu, contextMenu, disableAutoFocus } = config;
	return { plugins: [
		_univerjs_network.UniverNetworkPlugin,
		_univerjs_docs.UniverDocsPlugin,
		_univerjs_engine_render.UniverRenderEnginePlugin,
		[_univerjs_ui.UniverUIPlugin, {
			container,
			header,
			footer,
			toolbar,
			ribbonType,
			menu,
			contextMenu,
			disableAutoFocus
		}],
		_univerjs_docs_ui.UniverDocsUIPlugin,
		_univerjs_engine_formula.UniverFormulaEnginePlugin
	] };
}

//#endregion
exports.UniverDocsCorePreset = UniverDocsCorePreset;
var _univerjs_design = require("@univerjs/design");
Object.keys(_univerjs_design).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_design[k]; }
  });
});

Object.keys(_univerjs_docs).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_docs[k]; }
  });
});

Object.keys(_univerjs_docs_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_docs_ui[k]; }
  });
});

Object.keys(_univerjs_engine_formula).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_engine_formula[k]; }
  });
});

Object.keys(_univerjs_engine_render).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_engine_render[k]; }
  });
});

Object.keys(_univerjs_network).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_network[k]; }
  });
});

Object.keys(_univerjs_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_ui[k]; }
  });
});
