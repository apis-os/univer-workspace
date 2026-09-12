Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_sheets_table = require("@univerjs/sheets-table");
let _univerjs_sheets_table_ui = require("@univerjs/sheets-table-ui");
require("@univerjs/sheets-table/facade");

//#region src/preset.ts
function UniverSheetsTablePreset() {
	return { plugins: [_univerjs_sheets_table.UniverSheetsTablePlugin, _univerjs_sheets_table_ui.UniverSheetsTableUIPlugin].filter((v) => !!v) };
}

//#endregion
exports.UniverSheetsTablePreset = UniverSheetsTablePreset;
Object.keys(_univerjs_sheets_table).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_sheets_table[k]; }
  });
});

Object.keys(_univerjs_sheets_table_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_sheets_table_ui[k]; }
  });
});
