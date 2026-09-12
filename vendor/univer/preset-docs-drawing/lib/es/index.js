import { IImageIoService } from "@univerjs/core";
import { UniverDocsDrawingPlugin } from "@univerjs/docs-drawing";
import { UniverDocsDrawingUIPlugin } from "@univerjs/docs-drawing-ui";
import { UniverDrawingPlugin } from "@univerjs/drawing";
import { UniverDrawingUIPlugin } from "@univerjs/drawing-ui";
import "@univerjs/docs-drawing/facade";

export * from "@univerjs/docs-drawing"

export * from "@univerjs/docs-drawing-ui"

export * from "@univerjs/drawing"

export * from "@univerjs/drawing-ui"

//#region src/preset.ts
function UniverDocsDrawingPreset(config = {}) {
	const { collaboration = false } = config;
	return { plugins: [
		[UniverDrawingPlugin, { override: collaboration ? [[IImageIoService, null]] : [] }],
		UniverDrawingUIPlugin,
		UniverDocsDrawingPlugin,
		UniverDocsDrawingUIPlugin
	].filter((v) => !!v) };
}

//#endregion
export { UniverDocsDrawingPreset };