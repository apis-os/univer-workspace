Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_pro_engine_formula = require("@univerjs-pro/engine-formula");
let _univerjs_pro_exchange_client = require("@univerjs-pro/exchange-client");
let _univerjs_pro_license = require("@univerjs-pro/license");
let _univerjs_pro_sheets_chart = require("@univerjs-pro/sheets-chart");
let _univerjs_pro_sheets_chart_ui = require("@univerjs-pro/sheets-chart-ui");
let _univerjs_pro_sheets_exchange_client = require("@univerjs-pro/sheets-exchange-client");
let _univerjs_pro_sheets_outline = require("@univerjs-pro/sheets-outline");
let _univerjs_pro_sheets_outline_ui = require("@univerjs-pro/sheets-outline-ui");
let _univerjs_pro_sheets_pivot = require("@univerjs-pro/sheets-pivot");
let _univerjs_pro_sheets_pivot_ui = require("@univerjs-pro/sheets-pivot-ui");
let _univerjs_pro_sheets_print = require("@univerjs-pro/sheets-print");
let _univerjs_pro_sheets_shape = require("@univerjs-pro/sheets-shape");
let _univerjs_pro_sheets_shape_ui = require("@univerjs-pro/sheets-shape-ui");
let _univerjs_pro_sheets_sparkline = require("@univerjs-pro/sheets-sparkline");
let _univerjs_pro_sheets_sparkline_ui = require("@univerjs-pro/sheets-sparkline-ui");
require("@univerjs-pro/engine-shape/facade");
require("@univerjs-pro/engine-chart/facade");
require("@univerjs-pro/sheets-pivot/facade");
require("@univerjs-pro/engine-formula/facade");
require("@univerjs-pro/sheets-print/facade");
require("@univerjs-pro/sheets-chart/facade");
require("@univerjs-pro/chart-ui/facade");
require("@univerjs-pro/sheets-outline/facade");
require("@univerjs-pro/sheets-shape/facade");
require("@univerjs-pro/sheets-sparkline/facade");
require("@univerjs-pro/exchange-client/facade");
require("@univerjs-pro/sheets-exchange-client/facade");

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
		[_univerjs_pro_license.UniverLicensePlugin, { license }],
		[_univerjs_pro_sheets_pivot.UniverSheetsPivotTablePlugin, {
			notExecuteFormula: useWorker,
			maxLimitItemCount: pivot === null || pivot === void 0 ? void 0 : pivot.maxLimitItemCount
		}],
		_univerjs_pro_sheets_pivot_ui.UniverSheetsPivotTableUIPlugin,
		[_univerjs_pro_engine_formula.UniverProFormulaEnginePlugin, {
			notExecuteFormula: useWorker,
			function: formula === null || formula === void 0 ? void 0 : formula.function
		}],
		[_univerjs_pro_sheets_print.UniverSheetsPrintPlugin, { enforceWatermark: print === null || print === void 0 ? void 0 : print.enforceWatermark }],
		_univerjs_pro_sheets_chart.UniverSheetsChartPlugin,
		_univerjs_pro_sheets_chart_ui.UniverSheetsChartUIPlugin,
		_univerjs_pro_sheets_outline.UniverSheetsOutlinePlugin,
		_univerjs_pro_sheets_outline_ui.UniverSheetsOutlineUIPlugin,
		_univerjs_pro_sheets_shape.UniverSheetsShapePlugin,
		_univerjs_pro_sheets_shape_ui.UniverSheetsShapeUIPlugin,
		_univerjs_pro_sheets_sparkline.UniverSheetSparklinePlugin,
		_univerjs_pro_sheets_sparkline_ui.UniverSheetSparklineUIPlugin,
		[_univerjs_pro_exchange_client.UniverExchangeClientPlugin, {
			uploadFileServerUrl: `${serverEndpoint}/universer-api/stream/file/upload`,
			getTaskServerUrl: `${serverEndpoint}/universer-api/exchange/task/{taskID}`,
			signUrlServerUrl: `${serverEndpoint}/universer-api/file/{fileID}/sign-url`,
			importServerUrl: `${serverEndpoint}/universer-api/exchange/{type}/import`,
			exportServerUrl: `${serverEndpoint}/universer-api/exchange/{type}/export`,
			downloadEndpointUrl: `${serverEndpoint}/`
		}],
		[_univerjs_pro_sheets_exchange_client.UniverSheetsExchangeClientPlugin, exchangeClientOptions]
	].filter((v) => !!v) };
}

//#endregion
exports.UniverSheetsAdvancedPreset = UniverSheetsAdvancedPreset;
var _univerjs_pro_engine_chart = require("@univerjs-pro/engine-chart");
Object.keys(_univerjs_pro_engine_chart).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_engine_chart[k]; }
  });
});

Object.keys(_univerjs_pro_engine_formula).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_engine_formula[k]; }
  });
});

var _univerjs_pro_engine_shape = require("@univerjs-pro/engine-shape");
Object.keys(_univerjs_pro_engine_shape).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_engine_shape[k]; }
  });
});

Object.keys(_univerjs_pro_exchange_client).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_exchange_client[k]; }
  });
});

Object.keys(_univerjs_pro_license).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_license[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_chart).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_chart[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_chart_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_chart_ui[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_exchange_client).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_exchange_client[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_outline).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_outline[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_outline_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_outline_ui[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_pivot).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_pivot[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_pivot_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_pivot_ui[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_print).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_print[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_shape).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_shape[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_shape_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_shape_ui[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_sparkline).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_sparkline[k]; }
  });
});

Object.keys(_univerjs_pro_sheets_sparkline_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_sheets_sparkline_ui[k]; }
  });
});
