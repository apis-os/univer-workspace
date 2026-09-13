import { UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverSheetsPivotTablePlugin } from "@univerjs-pro/sheets-pivot";

//#region src/worker.ts
function UniverSheetsAdvancedWorkerPreset(config = { license: "" }) {
	const { license } = config;
	return { plugins: [
		[UniverLicensePlugin, { license }],
		UniverProFormulaEnginePlugin,
		[UniverSheetsPivotTablePlugin, { notExecuteFormula: false }]
	] };
}

//#endregion
export { UniverSheetsAdvancedWorkerPreset };