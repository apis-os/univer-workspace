import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DependentOn, Disposable, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, LocaleService, LocaleType, ObjectMatrix, Plugin, Range, RegionService, ThemeService, UniverInstanceType, currencySymbols, getNumfmtLocaleTag, getNumfmtParseValueFilter, isDefaultFormat, isTextFormat, merge, numfmt, registerDependencies, sequenceExecute, touchDependencies } from "@univerjs/core";
import { INTERCEPTOR_POINT, INumfmtService, InterceptCellContentPriority, RemoveNumfmtMutation, SetNumfmtMutation, SetRangeValuesMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, checkCellValueType, factoryRemoveNumfmtUndoMutation, factorySetNumfmtUndoMutation, getSheetCommandTarget, rangeMerge, transformCellsToRange } from "@univerjs/sheets";
import { stripErrorMargin } from "@univerjs/engine-formula";
import { BehaviorSubject, merge as merge$1, of, skip, switchMap } from "rxjs";

//#region src/base/const/currency-symbols.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const localeCurrencySymbolMap = /* @__PURE__ */ new Map([
	[LocaleType.EN_US, "$"],
	[LocaleType.RU_RU, "₽"],
	[LocaleType.VI_VN, "₫"],
	[LocaleType.ZH_CN, "¥"],
	[LocaleType.ZH_TW, "NT$"],
	[LocaleType.ZH_HK, "HK$"],
	[LocaleType.FR_FR, "€"],
	[LocaleType.FA_IR, "﷼"],
	[LocaleType.KO_KR, "₩"],
	[LocaleType.ES_ES, "€"],
	[LocaleType.CA_ES, "€"],
	[LocaleType.SK_SK, "€"],
	[LocaleType.JA_JP, "¥"],
	[LocaleType.PT_BR, "R$"],
	[LocaleType.DE_DE, "€"],
	[LocaleType.IT_IT, "€"],
	[LocaleType.ID_ID, "Rp"],
	[LocaleType.PL_PL, "zł"],
	[LocaleType.AR_SA, "﷼"]
]);
/**
* Get the currency symbol icon based on the locale.
*/
function getCurrencySymbolIconByLocale(locale) {
	switch (locale) {
		case LocaleType.CA_ES:
		case LocaleType.DE_DE:
		case LocaleType.ES_ES:
		case LocaleType.FR_FR:
		case LocaleType.IT_IT:
		case LocaleType.SK_SK: return {
			icon: "EuroIcon",
			symbol: localeCurrencySymbolMap.get(locale) || "€",
			locale
		};
		case LocaleType.RU_RU: return {
			icon: "RoubleIcon",
			symbol: localeCurrencySymbolMap.get(locale) || "₽",
			locale
		};
		case LocaleType.JA_JP:
		case LocaleType.ZH_CN: return {
			icon: "RmbIcon",
			symbol: localeCurrencySymbolMap.get(locale) || "¥",
			locale
		};
		case LocaleType.VI_VN: return {
			icon: "DongIcon",
			symbol: localeCurrencySymbolMap.get(locale) || "₫",
			locale
		};
		case LocaleType.AR_SA:
		case LocaleType.FA_IR: return {
			icon: "RialIcon",
			symbol: localeCurrencySymbolMap.get(locale) || "﷼",
			locale
		};
		case LocaleType.KO_KR: return {
			icon: "WonIcon",
			symbol: localeCurrencySymbolMap.get(locale) || "₩",
			locale
		};
		case LocaleType.ID_ID: return {
			icon: "RupiahIcon",
			symbol: localeCurrencySymbolMap.get(locale) || "Rp",
			locale
		};
		case LocaleType.PL_PL: return {
			icon: "ZlotyIcon",
			symbol: localeCurrencySymbolMap.get(locale) || "zł",
			locale
		};
		case LocaleType.EN_US:
		case LocaleType.PT_BR:
		case LocaleType.ZH_HK:
		case LocaleType.ZH_TW:
		default: return {
			icon: "DollarIcon",
			symbol: localeCurrencySymbolMap.get(locale) || "$",
			locale
		};
	}
}
/**
* Get the currency symbol by locale.
*/
function getCurrencySymbolByLocale(locale) {
	return localeCurrencySymbolMap.get(locale) || "$";
}
/**
* Get the currency format string based on the locale and number of digits.
*/
function getCurrencyFormat(locale, numberDigits = 2) {
	let _numberDigits = numberDigits;
	if (numberDigits > 127) _numberDigits = 127;
	let decimal = "";
	if (_numberDigits > 0) decimal = `.${"0".repeat(_numberDigits)}`;
	return `"${getCurrencySymbolByLocale(locale)}"#,##0${decimal}_);[Red]("${getCurrencySymbolByLocale(locale)}"#,##0${decimal})`;
}

//#endregion
//#region src/base/const/formatdetail.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const DATEFMTLISG = [
	{
		label: "1930-08-05",
		suffix: "yyyy-MM-dd"
	},
	{
		label: "1930/08/05",
		suffix: "yyyy/MM/dd"
	},
	{
		label: "1930年08月05日",
		suffix: "yyyy\"年\"MM\"月\"dd\"日\""
	},
	{
		label: "08-05",
		suffix: "MM-dd"
	},
	{
		label: "8月5日",
		suffix: "M\"月\"d\"日\""
	},
	{
		label: "13:30:30",
		suffix: "h:mm:ss"
	},
	{
		label: "13:30",
		suffix: "h:mm"
	},
	{
		label: "下午01:30",
		suffix: "A/P hh:mm"
	},
	{
		label: "下午1:30",
		suffix: "A/P h:mm"
	},
	{
		label: "下午1:30:30",
		suffix: "A/P h:mm:ss"
	},
	{
		label: "08-05 下午 01:30",
		suffix: "MM-dd A/P hh:mm"
	}
];
const NUMBERFORMAT = [
	{
		label: "(1,235)",
		suffix: "#,##0_);(#,##0)"
	},
	{
		label: "(1,235) ",
		suffix: "#,##0_);[Red](#,##0)",
		color: "red"
	},
	{
		label: "1,234.56",
		suffix: "#,##0.00_);#,##0.00"
	},
	{
		label: "1,234.56",
		suffix: "#,##0.00_);[Red]#,##0.00",
		color: "red"
	},
	{
		label: "-1,234.56",
		suffix: "#,##0.00_);-#,##0.00"
	},
	{
		label: "-1,234.56",
		suffix: "#,##0.00_);[Red]-#,##0.00",
		color: "red"
	}
];
const CURRENCYFORMAT = [
	{
		label: (suffix) => `${suffix}1,235`,
		suffix: (suffix) => `"${suffix}"#,##0.00_);"${suffix}"#,##0.00`
	},
	{
		label: (suffix) => `${suffix}1,235`,
		suffix: (suffix) => `"${suffix}"#,##0.00_);[Red]"${suffix}"#,##0.00`,
		color: "red"
	},
	{
		label: (suffix) => `(${suffix}1,235)`,
		suffix: (suffix) => `"${suffix}"#,##0.00_);("${suffix}"#,##0.00)`
	},
	{
		label: (suffix) => `(${suffix}1,235)`,
		suffix: (suffix) => `"${suffix}"#,##0.00_);[Red]("${suffix}"#,##0.00)`,
		color: "red"
	},
	{
		label: (suffix) => `-${suffix}1,235`,
		suffix: (suffix) => `"${suffix}"#,##0.00_);-"${suffix}"#,##0.00`
	},
	{
		label: (suffix) => `-${suffix}1,235`,
		suffix: (suffix) => `"${suffix}"#,##0.00_);[Red]-"${suffix}"#,##0.00`,
		color: "red"
	}
];

//#endregion
//#region src/utils/decimal.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* the function decimal just use positive,negative configuration ignored
*/
const getDecimalFromPattern = (pattern, defaultValue = 0) => {
	if (!pattern) return defaultValue;
	return numfmt.getFormatInfo(pattern).maxDecimals ?? defaultValue;
};
const getDecimalString = (length) => new Array(Math.min(Math.max(0, Number(length)), 30)).fill(0).join("");
const setPatternDecimal = (patterns, decimalLength) => {
	return patterns.split(";").map((pattern) => {
		if (/\.0?/.test(pattern)) return pattern.replace(/\.0*/g, `${decimalLength > 0 ? "." : ""}${getDecimalString(Number(decimalLength || 0))}`);
		if (/0([^0]?)|0$/.test(pattern)) return pattern.replace(/0([^0]+)|0$/, `0${decimalLength > 0 ? "." : ""}${getDecimalString(Number(decimalLength || 0))}$1`);
		return pattern;
	}).join(";");
};
const isPatternHasDecimal = (pattern) => /\.0?/.test(pattern) || /0([^0]?)|0$/.test(pattern);

//#endregion
//#region src/utils/pattern.ts
const getPatternType = (pattern) => {
	const type = numfmt.getFormatInfo(pattern).type || "unknown";
	if (type === "general" && numfmt.tokenize(pattern).some((token) => token.type === numfmt.tokenTypes.CONDITION)) return "number";
	return type;
};
const getPatternPreview = (pattern, value, locale = "en", dateSystem) => {
	try {
		const formatColor = numfmt.formatColor(pattern, value);
		const color = formatColor ? String(formatColor) : void 0;
		const result = numfmt.format(pattern, value, {
			locale,
			dateSystem,
			throws: false
		});
		if (value < 0) return {
			result,
			color
		};
		return { result };
	} catch (e) {
		console.warn("getPatternPreview error:", pattern, e);
	}
	return { result: String(value) };
};
const getPatternPreviewIgnoreGeneral = (pattern, value, locale, dateSystem) => {
	if (pattern === DEFAULT_NUMBER_FORMAT) return { result: String(stripErrorMargin(value)) };
	return getPatternPreview(pattern, value, locale, dateSystem);
};

//#endregion
//#region src/utils/scientific-notation.ts
function isScientificNotationNumericCell(cell) {
	return (cell === null || cell === void 0 ? void 0 : cell.t) === CellValueType.NUMBER && cell.v !== void 0 && cell.v !== null && /e/i.test(String(cell.v));
}
function getScientificNotationFormatFromCell(cell) {
	const text = String(cell === null || cell === void 0 ? void 0 : cell.v);
	const eIndex = text.search(/e/i);
	const decimalIndex = text.indexOf(".");
	const decimalLength = eIndex > -1 && decimalIndex > -1 ? eIndex - decimalIndex - 1 : 0;
	return `0.${"0".repeat(Math.max(2, decimalLength))}E+00`;
}
function isAllowedPatternForScientificNotationNumber(pattern) {
	return isDefaultFormat(pattern) || isTextFormat(pattern) || getPatternType(pattern) === "scientific";
}

//#endregion
//#region src/commands/commands/set-numfmt.command.ts
const SetNumfmtCommand = {
	id: "sheet.command.numfmt.set.numfmt",
	type: CommandType.COMMAND,
	handler: (accessor, params) => {
		if (!params) return false;
		const commandService = accessor.get(ICommandService);
		const univerInstanceService = accessor.get(IUniverInstanceService);
		const undoRedoService = accessor.get(IUndoRedoService);
		const target = getSheetCommandTarget(univerInstanceService, params);
		if (!target) return false;
		const { unitId, subUnitId, worksheet } = target;
		const values = params.values.filter((value) => {
			return !isScientificNotationNumericCell(worksheet.getCellRaw(value.row, value.col)) || isAllowedPatternForScientificNotationNumber(value.pattern);
		});
		const setCells = values.filter((value) => !!value.pattern);
		const removeCells = values.filter((value) => !value.pattern);
		if (!setCells.length && !removeCells.length) return false;
		const setRedos = transformCellsToRange(unitId, subUnitId, setCells);
		const removeRedos = {
			unitId,
			subUnitId,
			ranges: removeCells.map((cell) => ({
				startColumn: cell.col,
				startRow: cell.row,
				endColumn: cell.col,
				endRow: cell.row
			}))
		};
		const redos = [];
		const undos = [];
		if (setCells.length) {
			const setCellTypeObj = setCells.reduce((pre, cur) => {
				if (isTextFormat(cur.pattern)) pre.setValue(cur.row, cur.col, { t: CellValueType.STRING });
				const cell = worksheet.getCellRaw(cur.row, cur.col);
				if (cell) {
					const type = checkCellValueType(cell.v);
					if (type !== cell.t) pre.setValue(cur.row, cur.col, { t: type });
				}
				return pre;
			}, new ObjectMatrix()).getMatrix();
			const undoSetCellTypeObj = new ObjectMatrix();
			new ObjectMatrix(setCellTypeObj).forValue((row, col) => {
				const cell = worksheet.getCellRaw(row, col);
				if (cell) undoSetCellTypeObj.setValue(row, col, { t: cell.t });
				else undoSetCellTypeObj.setValue(row, col, { t: void 0 });
			});
			Object.keys(setRedos.values).forEach((key) => {
				const v = setRedos.values[key];
				v.ranges = rangeMerge(v.ranges);
			});
			redos.push({
				id: SetNumfmtMutation.id,
				params: setRedos
			});
			const undo = factorySetNumfmtUndoMutation(accessor, setRedos);
			undos.push(...undo);
		}
		if (removeCells.length) {
			removeRedos.ranges = rangeMerge(removeRedos.ranges);
			const setCellTypeObj = removeCells.reduce((pre, cur) => {
				const cell = worksheet.getCellRaw(cur.row, cur.col);
				if (cell) {
					const type = checkCellValueType(cell.v);
					if (type !== cell.t) pre.setValue(cur.row, cur.col, { t: type });
				}
				return pre;
			}, new ObjectMatrix()).getMatrix();
			const undoSetCellTypeObj = new ObjectMatrix();
			new ObjectMatrix(setCellTypeObj).forValue((row, col) => {
				const cell = worksheet.getCellRaw(row, col);
				if (cell) undoSetCellTypeObj.setValue(row, col, { t: cell.t });
				else undoSetCellTypeObj.setValue(row, col, { t: void 0 });
			});
			redos.push({
				id: RemoveNumfmtMutation.id,
				params: removeRedos
			}, {
				id: SetRangeValuesMutation.id,
				params: {
					unitId,
					subUnitId,
					cellValue: setCellTypeObj
				}
			});
			const undo = factoryRemoveNumfmtUndoMutation(accessor, removeRedos);
			undos.push({
				id: SetRangeValuesMutation.id,
				params: {
					unitId,
					subUnitId,
					cellValue: undoSetCellTypeObj.getMatrix()
				}
			}, ...undo);
		}
		const result = sequenceExecute(redos, commandService).result;
		if (result) undoRedoService.pushUndoRedo({
			unitID: unitId,
			undoMutations: undos,
			redoMutations: redos
		});
		return result;
	}
};

//#endregion
//#region src/commands/commands/add-decimal.command.ts
const AddDecimalCommand = {
	id: "sheet.command.numfmt.add.decimal.command",
	type: CommandType.COMMAND,
	handler: async (accessor) => {
		const commandService = accessor.get(ICommandService);
		const selectionManagerService = accessor.get(SheetsSelectionsService);
		const numfmtService = accessor.get(INumfmtService);
		const univerInstanceService = accessor.get(IUniverInstanceService);
		const selections = selectionManagerService.getCurrentSelections();
		if (!selections || !selections.length) return false;
		const target = getSheetCommandTarget(univerInstanceService);
		if (!target) return false;
		const { unitId, subUnitId } = target;
		let maxDecimals = 0;
		selections.forEach((selection) => {
			Range.foreach(selection.range, (row, col) => {
				const numfmtValue = numfmtService.getValue(unitId, subUnitId, row, col);
				if (!numfmtValue) {
					const cell = target.worksheet.getCellRaw(row, col);
					if (isScientificNotationNumericCell(cell)) {
						maxDecimals = Math.max(maxDecimals, getDecimalFromPattern(getScientificNotationFormatFromCell(cell)));
						return;
					}
					if (!maxDecimals && cell && cell.t === CellValueType.NUMBER && cell.v) {
						const regResult = /\.(\d*)$/.exec(String(cell.v));
						if (regResult) {
							const length = regResult[1].length;
							if (!length) return;
							maxDecimals = Math.max(maxDecimals, length);
						}
					}
					return;
				}
				const decimals = getDecimalFromPattern(numfmtValue.pattern);
				maxDecimals = decimals > maxDecimals ? decimals : maxDecimals;
			});
		});
		const decimals = maxDecimals + 1;
		const defaultPattern = setPatternDecimal(`0${decimals > 0 ? ".0" : ""}`, decimals);
		const values = [];
		selections.forEach((selection) => {
			Range.foreach(selection.range, (row, col) => {
				const numfmtValue = numfmtService.getValue(unitId, subUnitId, row, col);
				if (isDefaultFormat(numfmtValue === null || numfmtValue === void 0 ? void 0 : numfmtValue.pattern)) {
					const cell = target.worksheet.getCellRaw(row, col);
					values.push({
						row,
						col,
						pattern: isScientificNotationNumericCell(cell) ? setPatternDecimal(getScientificNotationFormatFromCell(cell), decimals) : defaultPattern
					});
				} else {
					const decimals = getDecimalFromPattern(numfmtValue.pattern);
					const pattern = setPatternDecimal(numfmtValue.pattern, decimals + 1);
					pattern !== numfmtValue.pattern && values.push({
						row,
						col,
						pattern
					});
				}
			});
		});
		if (values.length) return await commandService.executeCommand(SetNumfmtCommand.id, { values });
		return false;
	}
};

//#endregion
//#region src/commands/commands/set-currency.command.ts
/**
* This command is triggered by clicking the currency symbol icon in the menu.
* So the currency format is determined by the currency symbol icon.
*/
const SetCurrencyCommand = {
	id: "sheet.command.numfmt.set.currency",
	type: CommandType.COMMAND,
	handler: async (accessor) => {
		const commandService = accessor.get(ICommandService);
		const selectionManagerService = accessor.get(SheetsSelectionsService);
		const regionService = accessor.get(RegionService);
		const selections = selectionManagerService.getCurrentSelections();
		if (!selections || !selections.length) return false;
		const values = [];
		const currencyFormat = getCurrencyFormat(getCurrencySymbolIconByLocale(regionService.getCurrentRegion()).locale);
		selections.forEach((selection) => {
			Range.foreach(selection.range, (row, col) => {
				values.push({
					row,
					col,
					pattern: currencyFormat,
					type: "currency"
				});
			});
		});
		return await commandService.executeCommand(SetNumfmtCommand.id, { values });
	}
};

//#endregion
//#region src/commands/commands/set-percent.command.ts
const SetPercentCommand = {
	id: "sheet.command.numfmt.set.percent",
	type: CommandType.COMMAND,
	handler: async (accessor) => {
		const commandService = accessor.get(ICommandService);
		const selections = accessor.get(SheetsSelectionsService).getCurrentSelections();
		if (!selections || !selections.length) return false;
		const values = [];
		const suffix = "0%";
		selections.forEach((selection) => {
			Range.foreach(selection.range, (row, col) => {
				values.push({
					row,
					col,
					pattern: suffix,
					type: "percent"
				});
			});
		});
		return await commandService.executeCommand(SetNumfmtCommand.id, { values });
	}
};

//#endregion
//#region src/commands/commands/subtract-decimal.command.ts
const SubtractDecimalCommand = {
	id: "sheet.command.numfmt.subtract.decimal.command",
	type: CommandType.COMMAND,
	handler: async (accessor) => {
		const commandService = accessor.get(ICommandService);
		const selectionManagerService = accessor.get(SheetsSelectionsService);
		const numfmtService = accessor.get(INumfmtService);
		const univerInstanceService = accessor.get(IUniverInstanceService);
		const selections = selectionManagerService.getCurrentSelections();
		if (!selections || !selections.length) return false;
		const target = getSheetCommandTarget(univerInstanceService);
		if (!target) return false;
		const { unitId, subUnitId } = target;
		let maxDecimals = 0;
		selections.forEach((selection) => {
			Range.foreach(selection.range, (row, col) => {
				const numfmtValue = numfmtService.getValue(unitId, subUnitId, row, col);
				if (!numfmtValue) {
					const cell = target.worksheet.getCellRaw(row, col);
					if (isScientificNotationNumericCell(cell)) {
						maxDecimals = Math.max(maxDecimals, getDecimalFromPattern(getScientificNotationFormatFromCell(cell)));
						return;
					}
					if (!maxDecimals && cell && cell.t === CellValueType.NUMBER && cell.v) {
						const regResult = /\.(\d*)$/.exec(String(cell.v));
						if (regResult) {
							const length = regResult[1].length;
							if (!length) return;
							maxDecimals = Math.max(maxDecimals, length);
						}
					}
					return;
				}
				const decimals = getDecimalFromPattern(numfmtValue.pattern);
				maxDecimals = decimals > maxDecimals ? decimals : maxDecimals;
			});
		});
		const decimals = maxDecimals - 1;
		const defaultPattern = setPatternDecimal(`0${decimals > 0 ? ".0" : "."}`, decimals);
		const values = [];
		selections.forEach((selection) => {
			Range.foreach(selection.range, (row, col) => {
				const numfmtValue = numfmtService.getValue(unitId, subUnitId, row, col);
				if (isDefaultFormat(numfmtValue === null || numfmtValue === void 0 ? void 0 : numfmtValue.pattern)) {
					const cell = target.worksheet.getCellRaw(row, col);
					values.push({
						row,
						col,
						pattern: isScientificNotationNumericCell(cell) ? setPatternDecimal(getScientificNotationFormatFromCell(cell), decimals) : defaultPattern
					});
				} else {
					const decimals = getDecimalFromPattern(numfmtValue.pattern);
					values.push({
						row,
						col,
						pattern: setPatternDecimal(numfmtValue.pattern, decimals - 1)
					});
				}
			});
		});
		return await commandService.executeCommand(SetNumfmtCommand.id, { values });
	}
};

//#endregion
//#region src/config/config.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const SHEETS_NUMFMT_PLUGIN_CONFIG_KEY = "sheets-numfmt.config";
const configSymbol = Symbol(SHEETS_NUMFMT_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {};

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/decorateParam.js
function __decorateParam(paramIndex, decorator) {
	return function(target, key) {
		decorator(target, key, paramIndex);
	};
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}

//#endregion
//#region src/controllers/numfmt-cell-content.controller.ts
const TEXT_FORMAT_MARK = { tl: {
	size: 6,
	color: "#409f11"
} };
let SheetsNumfmtCellContentController = class SheetsNumfmtCellContentController extends Disposable {
	constructor(_instanceService, _sheetInterceptorService, _themeService, _commandService, _numfmtService, _localeService, _configService) {
		super();
		this._instanceService = _instanceService;
		this._sheetInterceptorService = _sheetInterceptorService;
		this._themeService = _themeService;
		this._commandService = _commandService;
		this._numfmtService = _numfmtService;
		this._localeService = _localeService;
		this._configService = _configService;
		_defineProperty(this, "_locale$", new BehaviorSubject(null));
		_defineProperty(this, "locale$", this._locale$.asObservable());
		this._initInterceptorCellContent();
	}
	get locale() {
		return this.getLocale();
	}
	getLocale(workbook) {
		return this._locale$.getValue() ?? getNumfmtLocaleTag((workbook === null || workbook === void 0 ? void 0 : workbook.getSnapshot().locale) ?? this._localeService.getCurrentLocale());
	}
	_initInterceptorCellContent() {
		const renderCache = new ObjectMatrix();
		this.disposeWithMe(merge$1(this._locale$, this._localeService.currentLocale$).subscribe(() => {
			renderCache.reset();
		}));
		this.disposeWithMe(this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
			effect: InterceptorEffectEnum.Value | InterceptorEffectEnum.Style,
			handler: (cell, location, next) => {
				if (!cell || cell.v === void 0 || cell.v === null || cell.t === CellValueType.BOOLEAN || cell.t === CellValueType.FORCE_STRING) return next(cell);
				const unitId = location.unitId;
				const sheetId = location.subUnitId;
				const locale = this.getLocale(location.workbook);
				const dateSystem = location.workbook.getDateSystem();
				let numfmtValue;
				if (cell === null || cell === void 0 ? void 0 : cell.s) {
					const style = location.workbook.getStyles().get(cell.s);
					if (style === null || style === void 0 ? void 0 : style.n) numfmtValue = style.n;
				}
				if (!numfmtValue) numfmtValue = this._numfmtService.getValue(unitId, sheetId, location.row, location.col);
				if (isDefaultFormat(numfmtValue === null || numfmtValue === void 0 ? void 0 : numfmtValue.pattern)) return next(cell);
				if (cell.t !== CellValueType.NUMBER) {
					var _getNumfmtParseValueF;
					if (checkCellValueType(cell.v, cell.t) !== CellValueType.NUMBER && !(isTextFormat(numfmtValue === null || numfmtValue === void 0 ? void 0 : numfmtValue.pattern) && typeof cell.v === "string" && typeof ((_getNumfmtParseValueF = getNumfmtParseValueFilter(cell.v, {
						locale,
						dateSystem
					})) === null || _getNumfmtParseValueF === void 0 ? void 0 : _getNumfmtParseValueF.v) === "number")) return next(cell);
				}
				const originCellValue = cell;
				if (!cell || cell === location.rawData) cell = { ...location.rawData };
				if (isTextFormat(numfmtValue === null || numfmtValue === void 0 ? void 0 : numfmtValue.pattern)) {
					var _this$_configService$;
					if ((_this$_configService$ = this._configService.getConfig("sheets-numfmt.config")) === null || _this$_configService$ === void 0 ? void 0 : _this$_configService$.disableTextFormatMark) {
						cell.t = CellValueType.STRING;
						return next(cell);
					}
					cell.t = CellValueType.STRING;
					cell.markers = {
						...cell === null || cell === void 0 ? void 0 : cell.markers,
						...TEXT_FORMAT_MARK
					};
					return next(cell);
				}
				const cacheParameters = `${unitId}_${sheetId}_${originCellValue.v}_${numfmtValue === null || numfmtValue === void 0 ? void 0 : numfmtValue.pattern}_${locale}_${dateSystem}`;
				const cache = renderCache.getValue(location.row, location.col);
				if (cache && cache.parameters === cacheParameters) return next({
					...cell,
					...cache.result
				});
				const info = getPatternPreviewIgnoreGeneral(numfmtValue === null || numfmtValue === void 0 ? void 0 : numfmtValue.pattern, Number(originCellValue.v), locale, dateSystem);
				const numfmtRes = info.result;
				const res = {
					v: numfmtRes,
					t: CellValueType.NUMBER
				};
				if (numfmtRes === "") res.coverable = false;
				if (info.color) {
					const color = this._themeService.getColorFromTheme(`${info.color}.500`) ?? info.color;
					if (color) res.interceptorStyle = { cl: { rgb: color } };
				}
				renderCache.setValue(location.row, location.col, {
					result: res,
					parameters: cacheParameters
				});
				Object.assign(cell, res);
				return next(cell);
			},
			priority: InterceptCellContentPriority.NUMFMT
		}));
		this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
			if (commandInfo.id === SetNumfmtMutation.id) {
				const params = commandInfo.params;
				Object.keys(params.values).forEach((key) => {
					params.values[key].ranges.forEach((range) => {
						Range.foreach(range, (row, col) => {
							renderCache.realDeleteValue(row, col);
						});
					});
				});
			} else if (commandInfo.id === SetRangeValuesMutation.id) {
				const params = commandInfo.params;
				new ObjectMatrix(params.cellValue).forValue((row, col) => {
					renderCache.realDeleteValue(row, col);
				});
			}
		}));
		this.disposeWithMe(this._instanceService.getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SHEET).pipe(switchMap((workbook) => (workbook === null || workbook === void 0 ? void 0 : workbook.activeSheet$) ?? of(null)), skip(1)).subscribe(() => renderCache.reset()));
	}
	setNumfmtLocal(locale) {
		this._locale$.next(locale);
	}
};
SheetsNumfmtCellContentController = __decorate([
	__decorateParam(0, IUniverInstanceService),
	__decorateParam(1, Inject(SheetInterceptorService)),
	__decorateParam(2, Inject(ThemeService)),
	__decorateParam(3, Inject(ICommandService)),
	__decorateParam(4, Inject(INumfmtService)),
	__decorateParam(5, Inject(LocaleService)),
	__decorateParam(6, IConfigService)
], SheetsNumfmtCellContentController);

//#endregion
//#region package.json
var name = "@univerjs/sheets-numfmt";
var version = "1.0.0-insiders.20260907-70fc579";

//#endregion
//#region src/base/const/plugin-name.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const SHEET_NUMFMT_PLUGIN = "SHEET_NUMFMT_PLUGIN";

//#endregion
//#region src/plugin.ts
let UniverSheetsNumfmtPlugin = class UniverSheetsNumfmtPlugin extends Plugin {
	constructor(_config = defaultPluginConfig, _injector, _configService, _commandService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._configService = _configService;
		this._commandService = _commandService;
		const { ...rest } = merge({}, defaultPluginConfig, this._config);
		this._configService.setConfig(SHEETS_NUMFMT_PLUGIN_CONFIG_KEY, rest);
	}
	onStarting() {
		registerDependencies(this._injector, [[SheetsNumfmtCellContentController]]);
		touchDependencies(this._injector, [[SheetsNumfmtCellContentController]]);
		[
			AddDecimalCommand,
			SubtractDecimalCommand,
			SetCurrencyCommand,
			SetPercentCommand,
			SetNumfmtCommand
		].forEach((config) => {
			this.disposeWithMe(this._commandService.registerCommand(config));
		});
	}
};
_defineProperty(UniverSheetsNumfmtPlugin, "pluginName", SHEET_NUMFMT_PLUGIN);
_defineProperty(UniverSheetsNumfmtPlugin, "packageName", name);
_defineProperty(UniverSheetsNumfmtPlugin, "version", version);
_defineProperty(UniverSheetsNumfmtPlugin, "type", UniverInstanceType.UNIVER_SHEET);
UniverSheetsNumfmtPlugin = __decorate([
	DependentOn(UniverSheetsPlugin),
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, IConfigService),
	__decorateParam(3, ICommandService)
], UniverSheetsNumfmtPlugin);

//#endregion
//#region src/utils/currency.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const getCurrencyType = (pattern) => {
	return currencySymbols.find((code) => pattern.includes(code));
};

//#endregion
//#region src/utils/options.ts
/**
* Copyright 2023-present DreamNum Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const getCurrencyOptions = () => currencySymbols.map((item) => ({
	label: item,
	value: item
}));
const getCurrencyFormatOptions = (suffix) => CURRENCYFORMAT.map((item) => ({
	label: item.label(suffix),
	value: item.suffix(suffix),
	color: item.color
}));
const getDateFormatOptions = () => DATEFMTLISG.map((item) => ({
	label: item.label,
	value: item.suffix
}));
const getNumberFormatOptions = () => NUMBERFORMAT.map((item) => ({
	label: item.label,
	value: item.suffix,
	color: item.color
}));

//#endregion
export { AddDecimalCommand, CURRENCYFORMAT, DATEFMTLISG, NUMBERFORMAT, SHEETS_NUMFMT_PLUGIN_CONFIG_KEY, SetCurrencyCommand, SetNumfmtCommand, SetPercentCommand, SheetsNumfmtCellContentController, SubtractDecimalCommand, UniverSheetsNumfmtPlugin, getCurrencyFormat, getCurrencyFormatOptions, getCurrencyOptions, getCurrencySymbolByLocale, getCurrencySymbolIconByLocale, getCurrencyType, getDateFormatOptions, getDecimalFromPattern, getDecimalString, getNumberFormatOptions, getPatternPreview, getPatternPreviewIgnoreGeneral, getPatternType, isPatternHasDecimal, localeCurrencySymbolMap, setPatternDecimal };