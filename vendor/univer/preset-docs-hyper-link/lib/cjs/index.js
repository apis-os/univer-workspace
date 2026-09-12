Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_docs_hyper_link = require("@univerjs/docs-hyper-link");
let _univerjs_docs_hyper_link_ui = require("@univerjs/docs-hyper-link-ui");

//#region src/preset.ts
function UniverDocsHyperLinkPreset() {
	return { plugins: [_univerjs_docs_hyper_link.UniverDocsHyperLinkPlugin, _univerjs_docs_hyper_link_ui.UniverDocsHyperLinkUIPlugin].filter((v) => !!v) };
}

//#endregion
exports.UniverDocsHyperLinkPreset = UniverDocsHyperLinkPreset;
Object.keys(_univerjs_docs_hyper_link).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_docs_hyper_link[k]; }
  });
});

Object.keys(_univerjs_docs_hyper_link_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_docs_hyper_link_ui[k]; }
  });
});
