Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_pro_engine_formula = require("@univerjs-pro/engine-formula");
let _univerjs_pro_license = require("@univerjs-pro/license");
let _univerjs_pro_sheets_pivot = require("@univerjs-pro/sheets-pivot");

//#region src/worker.ts
function UniverSheetsAdvancedWorkerPreset(config = { license: "" }) {
	const { license } = config;
	return { plugins: [
		[_univerjs_pro_license.UniverLicensePlugin, { license }],
		_univerjs_pro_engine_formula.UniverProFormulaEnginePlugin,
		[_univerjs_pro_sheets_pivot.UniverSheetsPivotTablePlugin, { notExecuteFormula: false }]
	] };
}

//#endregion
exports.UniverSheetsAdvancedWorkerPreset = UniverSheetsAdvancedWorkerPreset;