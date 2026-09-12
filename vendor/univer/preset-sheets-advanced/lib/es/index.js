import { UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { UniverExchangeClientPlugin } from "@univerjs-pro/exchange-client";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverSheetsChartPlugin } from "@univerjs-pro/sheets-chart";
import { UniverSheetsChartUIPlugin } from "@univerjs-pro/sheets-chart-ui";
import { UniverSheetsExchangeClientPlugin } from "@univerjs-pro/sheets-exchange-client";
import { UniverSheetsOutlinePlugin } from "@univerjs-pro/sheets-outline";
import { UniverSheetsOutlineUIPlugin } from "@univerjs-pro/sheets-outline-ui";
import { UniverSheetsPivotTablePlugin } from "@univerjs-pro/sheets-pivot";
import { UniverSheetsPivotTableUIPlugin } from "@univerjs-pro/sheets-pivot-ui";
import { UniverSheetsPrintPlugin } from "@univerjs-pro/sheets-print";
import { UniverSheetsShapePlugin } from "@univerjs-pro/sheets-shape";
import { UniverSheetsShapeUIPlugin } from "@univerjs-pro/sheets-shape-ui";
import { UniverSheetSparklinePlugin } from "@univerjs-pro/sheets-sparkline";
import { UniverSheetSparklineUIPlugin } from "@univerjs-pro/sheets-sparkline-ui";
import "@univerjs-pro/engine-shape/facade";
import "@univerjs-pro/engine-chart/facade";
import "@univerjs-pro/sheets-pivot/facade";
import "@univerjs-pro/engine-formula/facade";
import "@univerjs-pro/sheets-print/facade";
import "@univerjs-pro/sheets-chart/facade";
import "@univerjs-pro/chart-ui/facade";
import "@univerjs-pro/sheets-outline/facade";
import "@univerjs-pro/sheets-shape/facade";
import "@univerjs-pro/sheets-sparkline/facade";
import "@univerjs-pro/exchange-client/facade";
import "@univerjs-pro/sheets-exchange-client/facade";

export * from "@univerjs-pro/engine-formula"

export * from "@univerjs-pro/exchange-client"

export * from "@univerjs-pro/license"

export * from "@univerjs-pro/sheets-chart"

export * from "@univerjs-pro/sheets-chart-ui"

export * from "@univerjs-pro/sheets-exchange-client"

export * from "@univerjs-pro/sheets-outline"

export * from "@univerjs-pro/sheets-outline-ui"

export * from "@univerjs-pro/sheets-pivot"

export * from "@univerjs-pro/sheets-pivot-ui"

export * from "@univerjs-pro/sheets-print"

export * from "@univerjs-pro/sheets-shape"

export * from "@univerjs-pro/sheets-shape-ui"

export * from "@univerjs-pro/sheets-sparkline"

export * from "@univerjs-pro/sheets-sparkline-ui"

export * from "@univerjs-pro/engine-chart"

export * from "@univerjs-pro/engine-shape"

//#region src/preset.ts
/**
* This preset helps you create Univer Sheets with advanced features.
*/
function UniverSheetsAdvancedPreset(config = {
	license: "",
	universerEndpoint: ""
}) {
	const { license, universerEndpoint, useWorker, formula, exchangeClientOptions, print, pivot } = config;
	const serverEndpoint = universerEndpoint ?? `${window.location.protocol}//${window.location.host}`;
	return { plugins: [
		[UniverLicensePlugin, { license }],
		[UniverSheetsPivotTablePlugin, {
			notExecuteFormula: useWorker,
			maxLimitItemCount: pivot === null || pivot === void 0 ? void 0 : pivot.maxLimitItemCount
		}],
		UniverSheetsPivotTableUIPlugin,
		[UniverProFormulaEnginePlugin, {
			notExecuteFormula: useWorker,
			function: formula === null || formula === void 0 ? void 0 : formula.function
		}],
		[UniverSheetsPrintPlugin, { enforceWatermark: print === null || print === void 0 ? void 0 : print.enforceWatermark }],
		UniverSheetsChartPlugin,
		UniverSheetsChartUIPlugin,
		UniverSheetsOutlinePlugin,
		UniverSheetsOutlineUIPlugin,
		UniverSheetsShapePlugin,
		UniverSheetsShapeUIPlugin,
		UniverSheetSparklinePlugin,
		UniverSheetSparklineUIPlugin,
		[UniverExchangeClientPlugin, {
			uploadFileServerUrl: `${serverEndpoint}/universer-api/stream/file/upload`,
			getTaskServerUrl: `${serverEndpoint}/universer-api/exchange/task/{taskID}`,
			signUrlServerUrl: `${serverEndpoint}/universer-api/file/{fileID}/sign-url`,
			importServerUrl: `${serverEndpoint}/universer-api/exchange/{type}/import`,
			exportServerUrl: `${serverEndpoint}/universer-api/exchange/{type}/export`,
			downloadEndpointUrl: `${serverEndpoint}/`
		}],
		[UniverSheetsExchangeClientPlugin, exchangeClientOptions]
	].filter((v) => !!v) };
}

//#endregion
export { UniverSheetsAdvancedPreset };