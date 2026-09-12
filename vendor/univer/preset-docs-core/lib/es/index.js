import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverNetworkPlugin } from "@univerjs/network";
import { UniverUIPlugin } from "@univerjs/ui";
import "@univerjs/network/facade";
import "@univerjs/docs-ui/facade";

export * from "@univerjs/docs"

export * from "@univerjs/docs-ui"

export * from "@univerjs/engine-formula"

export * from "@univerjs/engine-render"

export * from "@univerjs/network"

export * from "@univerjs/ui"

export * from "@univerjs/design"

//#region src/preset.ts
function UniverDocsCorePreset(config = {}) {
	const { container = "app", header, footer, toolbar, ribbonType, menu, contextMenu, disableAutoFocus } = config;
	return { plugins: [
		UniverNetworkPlugin,
		UniverDocsPlugin,
		UniverRenderEnginePlugin,
		[UniverUIPlugin, {
			container,
			header,
			footer,
			toolbar,
			ribbonType,
			menu,
			contextMenu,
			disableAutoFocus
		}],
		UniverDocsUIPlugin,
		UniverFormulaEnginePlugin
	] };
}

//#endregion
export { UniverDocsCorePreset };