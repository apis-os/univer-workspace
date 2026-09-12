import { UniverDocsHyperLinkPlugin } from "@univerjs/docs-hyper-link";
import { UniverDocsHyperLinkUIPlugin } from "@univerjs/docs-hyper-link-ui";

export * from "@univerjs/docs-hyper-link"

export * from "@univerjs/docs-hyper-link-ui"

//#region src/preset.ts
function UniverDocsHyperLinkPreset() {
	return { plugins: [UniverDocsHyperLinkPlugin, UniverDocsHyperLinkUIPlugin].filter((v) => !!v) };
}

//#endregion
export { UniverDocsHyperLinkPreset };