import { UniverSheetsTablePlugin } from "@univerjs/sheets-table";
import { UniverSheetsTableUIPlugin } from "@univerjs/sheets-table-ui";
import "@univerjs/sheets-table/facade";

export * from "@univerjs/sheets-table"

export * from "@univerjs/sheets-table-ui"

//#region src/preset.ts
function UniverSheetsTablePreset() {
	return { plugins: [UniverSheetsTablePlugin, UniverSheetsTableUIPlugin].filter((v) => !!v) };
}

//#endregion
export { UniverSheetsTablePreset };