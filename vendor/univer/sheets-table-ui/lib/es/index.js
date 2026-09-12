import { AddSheetTableCommand, AddTableThemeCommand, DeleteSheetTableCommand, RemoveTableThemeCommand, SHEET_TABLE_CUSTOM_THEME_PREFIX, SetSheetTableCommand, SetSheetTableFilterCommand, SheetTableInsertColCommand, SheetTableInsertColumnAtCommand, SheetTableInsertRowAtCommand, SheetTableInsertRowCommand, SheetTableRemoveColCommand, SheetTableRemoveColumnAtCommand, SheetTableRemoveRowCommand, SheetTableService, SheetsTableController, SheetsTableSortStateEnum, TABLE_FILTER_EMPTY_VALUE, TableColumnFilterTypeEnum, TableConditionTypeEnum, TableDateCompareTypeEnum, TableManager, TableNumberCompareTypeEnum, TableStringCompareTypeEnum, UniverSheetsTablePlugin, customEmptyThemeWithBorderStyle, getExistingNamesSet, isConditionFilter, isManualTableFilter, processStyleWithBorderStyle, validateSheetTableName } from "@univerjs/sheets-table";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, IDialogService, IMenuManagerService, ISidebarService, IconManager, MOBILE_UI_MODE, MenuItemType, RibbonDataGroup, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { ColorKit, CommandType, DependentOn, Disposable, ErrorService, ICommandService, IConfigService, IContextService, IPermissionService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, LocaleService, ObjectMatrix, Plugin, Rectangle, RxDisposable, UniverInstanceType, VerticalAlign, cellToRange, fromCallback, merge, registerDependencies, toDisposable, touchDependencies } from "@univerjs/core";
import { INTERCEPTOR_POINT, RangeThemeStyle, SelectRangeCommand, SetRangeThemeMutation, SetRangeValuesMutation, SetSelectionsOperation, SetVerticalTextAlignCommand, SheetInterceptorService, SheetRangeThemeModel, SheetsSelectionsService, UniverSheetsPlugin, WorkbookEditablePermission, WorkbookPermissionService, expandToContinuousRange, getPrimaryForRange, getSheetCommandTarget, isSingleCellSelection } from "@univerjs/sheets";
import { ExpandSelectionCommand, ISheetSelectionRenderService, MoveSelectionCommand, MoveSelectionEnterAndTabCommand, SHEET_VIEW_KEY, SelectAllCommand, SetScrollOperation, SetZoomRatioOperation, SheetCanvasPopManagerService, SheetSkeletonManagerService, UniverSheetsUIPlugin, getCoordByCell, getCurrentRangeDisable$, getTransformCoord } from "@univerjs/sheets-ui";
import { Subject, distinctUntilChanged, filter, map, merge as merge$1, of, startWith, switchMap, takeUntil } from "rxjs";
import { CURSOR_TYPE, DEFAULT_FONTFACE_PLANE, IRenderManagerService, Shape, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { AscendingIcon, CloseIcon, DeleteColumnDoubleIcon, DescendingIcon, DownIcon, IncreaseIcon, LeftInsertColumnDoubleIcon, MoreDownIcon, RightInsertColumnDoubleIcon, TableIcon } from "@univerjs/icons";
import { ActionRow, Button, ButtonGroup, CascaderList, Checkbox, ColorPicker, ConfigContext, DatePicker, DateRangePicker, Dropdown, DropdownMenu, Input, InputNumber, MobileActionRow, Segmented, Select, borderClassName, clsx, scrollbarClassName } from "@univerjs/design";
import { SortRangeCommand, SortType } from "@univerjs/sheets-sort";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { IDefinedNamesService, deserializeRangeWithSheet, serializeRange } from "@univerjs/engine-formula";
import { RangeSelector } from "@univerjs/sheets-formula-ui";

//#region src/const.ts
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
const PLUGIN_NAME = "SHEET_TABLE_UI_PLUGIN";
const SHEETS_TABLE_FILTER_PANEL_OPENED_KEY = "SHEETS_TABLE_FILTER_PANEL_OPENED_KEY";
const UNIVER_SHEET_TABLE_FILTER_PANEL_ID = "UNIVER_SHEET_Table_FILTER_PANEL_ID";
const TABLE_SELECTOR_DIALOG = "TABLE_SELECTOR_DIALOG";
const SHEET_TABLE_RENAME_DIALOG = "SHEET_TABLE_RENAME_DIALOG";
const SHEET_TABLE_RENAME_DIALOG_ID = "SHEET_TABLE_RENAME_DIALOG_ID";
const SHEET_TABLE_THEME_PANEL_ID = "SHEET_TABLE_THEME_PANEL_ID";
const SHEET_TABLE_THEME_PANEL = "SHEET_TABLE_THEME_PANEL";
const SHEET_TABLE_MENU = "SHEET_TABLE_MENU";
const TABLE_CUSTOM_NAME_PREFIX = "table-custom-";
const TABLE_DEFAULT_NAME_PREFIX = "table-default-";
const TABLE_DEFAULT_BG_COLOR = "rgb(255, 255, 255)";
const TABLE_BORDER_NONE = "none";
const TABLE_BORDER_DEFAULT = "1px solid rgb(var(--grey-200))";

//#endregion
//#region src/commands/operations/open-table-selector.operation.ts
const OpenTableSelectorOperation = {
	type: CommandType.OPERATION,
	id: "sheet.operation.open-table-selector",
	async handler(accessor) {
		const univerInstanceService = accessor.get(IUniverInstanceService);
		const commandService = accessor.get(ICommandService);
		const target = getSheetCommandTarget(univerInstanceService);
		if (!target) return false;
		const { unitId, subUnitId, worksheet } = target;
		const lastSelection = accessor.get(SheetsSelectionsService).getCurrentLastSelection();
		const range = (lastSelection === null || lastSelection === void 0 ? void 0 : lastSelection.range) ?? {
			startRow: 0,
			endRow: 0,
			startColumn: 0,
			endColumn: 0
		};
		const rangeInfo = await openRangeSelector(accessor, unitId, subUnitId, isSingleCellSelection(lastSelection) ? expandToContinuousRange(range, {
			up: true,
			left: true,
			right: true,
			down: true
		}, worksheet) : range);
		if (!rangeInfo) return false;
		commandService.executeCommand(AddSheetTableCommand.id, { ...rangeInfo });
		return true;
	}
};
async function openRangeSelector(accessor, unitId, subUnitId, range, tableId) {
	const dialogService = accessor.get(IDialogService);
	const localeService = accessor.get(LocaleService);
	return new Promise((resolve) => {
		const dialogProps = {
			unitId,
			subUnitId,
			range,
			tableId,
			onConfirm: (info) => {
				resolve(info);
				dialogService.close(TABLE_SELECTOR_DIALOG);
			},
			onCancel: () => {
				resolve(null);
				dialogService.close(TABLE_SELECTOR_DIALOG);
			}
		};
		dialogService.open({
			id: TABLE_SELECTOR_DIALOG,
			title: { title: localeService.t("sheets-table-ui.selectRange") },
			draggable: true,
			mask: false,
			maskClosable: false,
			children: { label: {
				name: TABLE_SELECTOR_DIALOG,
				props: dialogProps
			} },
			width: 300,
			onClose: () => {
				resolve(null);
				dialogService.close(TABLE_SELECTOR_DIALOG);
			}
		});
	});
}

//#endregion
//#region src/menu/menu.ts
const SHEET_TABLE_CONTEXT_INSERT_MENU_ID = "sheet.table.context-insert_menu-id";
const SHEET_TABLE_CONTEXT_REMOVE_MENU_ID = "sheet.table.context-remove_menu-id";
function sheetTableToolbarInsertMenuFactory(accessor) {
	return {
		id: OpenTableSelectorOperation.id,
		type: MenuItemType.BUTTON,
		icon: "TableIcon",
		tooltip: "sheets-table-ui.title",
		title: "sheets-table-ui.title",
		hidden$: getMenuHiddenObservable(accessor, UniverInstanceType.UNIVER_SHEET),
		disabled$: getCurrentRangeDisable$(accessor, {}, true)
	};
}
function SheetTableInsertContextMenuFactory(accessor) {
	return {
		id: SHEET_TABLE_CONTEXT_INSERT_MENU_ID,
		type: MenuItemType.SUBITEMS,
		icon: "InsertDoubleIcon",
		title: "sheets-table-ui.insert.main",
		hidden$: getSheetTableRowColOperationHidden$(accessor)
	};
}
function SheetTableRemoveContextMenuFactory(accessor) {
	return {
		id: SHEET_TABLE_CONTEXT_REMOVE_MENU_ID,
		type: MenuItemType.SUBITEMS,
		icon: "ReduceDoubleIcon",
		title: "sheets-table-ui.remove.main",
		hidden$: getSheetTableRowColOperationHidden$(accessor)
	};
}
function SheetTableInsertRowMenuFactory(accessor) {
	return {
		id: SheetTableInsertRowCommand.id,
		type: MenuItemType.BUTTON,
		title: "sheets-table-ui.insert.row",
		hidden$: getSheetTableHeaderOperationHidden$(accessor)
	};
}
function SheetTableInsertColMenuFactory() {
	return {
		id: SheetTableInsertColCommand.id,
		title: "sheets-table-ui.insert.col",
		type: MenuItemType.BUTTON
	};
}
function SheetTableRemoveRowMenuFactory(accessor) {
	return {
		id: SheetTableRemoveRowCommand.id,
		type: MenuItemType.BUTTON,
		title: "sheets-table-ui.remove.row",
		hidden$: getSheetTableHeaderOperationHidden$(accessor)
	};
}
function SheetTableRemoveColMenuFactory() {
	return {
		id: SheetTableRemoveColCommand.id,
		title: "sheets-table-ui.remove.col",
		type: MenuItemType.BUTTON
	};
}
function getSheetTableRowColOperationHidden$(accessor) {
	const sheetsSelectionsService = accessor.get(SheetsSelectionsService);
	return accessor.get(IUniverInstanceService).getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SHEET).pipe(switchMap((workbook) => {
		if (!workbook) return of(true);
		return workbook.activeSheet$.pipe(switchMap((sheet) => {
			if (!sheet) return of(true);
			return sheetsSelectionsService.selectionMoveEnd$.pipe(startWith(sheetsSelectionsService.getCurrentSelections()), switchMap((selections) => {
				if (!selections.length || selections.length > 1) return of(true);
				const range = selections[0].range;
				return of(!accessor.get(SheetsTableController).getContainerTableWithRange(workbook.getUnitId(), sheet.getSheetId(), range));
			}));
		}));
	}));
}
function getSheetTableHeaderOperationHidden$(accessor) {
	const sheetsSelectionsService = accessor.get(SheetsSelectionsService);
	return accessor.get(IUniverInstanceService).getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SHEET).pipe(switchMap((workbook) => {
		if (!workbook) return of(true);
		return workbook.activeSheet$.pipe(switchMap((sheet) => {
			if (!sheet) return of(true);
			return sheetsSelectionsService.selectionMoveEnd$.pipe(startWith(sheetsSelectionsService.getCurrentSelections()), switchMap((selections) => {
				if (!selections.length || selections.length > 1) return of(true);
				const range = selections[0].range;
				const isInTable = accessor.get(SheetsTableController).getContainerTableWithRange(workbook.getUnitId(), sheet.getSheetId(), range);
				if (!isInTable) return of(true);
				const tableRange = isInTable.getRange();
				if (range.startRow === tableRange.startRow) return of(true);
				return of(false);
			}));
		}));
	}));
}

//#endregion
//#region src/menu/schema.ts
const menuSchema = {
	[RibbonDataGroup.ORGANIZATION]: { [OpenTableSelectorOperation.id]: {
		order: 0,
		gridLayout: {
			row: 1,
			column: 1
		},
		menuItemFactory: sheetTableToolbarInsertMenuFactory
	} },
	[ContextMenuPosition.MAIN_AREA]: { [ContextMenuGroup.LAYOUT]: {
		[SHEET_TABLE_CONTEXT_INSERT_MENU_ID]: {
			order: 5,
			menuItemFactory: SheetTableInsertContextMenuFactory,
			[SheetTableInsertRowCommand.id]: {
				order: 1,
				menuItemFactory: SheetTableInsertRowMenuFactory
			},
			[SheetTableInsertColCommand.id]: {
				order: 2,
				menuItemFactory: SheetTableInsertColMenuFactory
			}
		},
		[SHEET_TABLE_CONTEXT_REMOVE_MENU_ID]: {
			order: 6,
			menuItemFactory: SheetTableRemoveContextMenuFactory,
			[SheetTableRemoveRowCommand.id]: {
				order: 1,
				menuItemFactory: SheetTableRemoveRowMenuFactory
			},
			[SheetTableRemoveColCommand.id]: {
				order: 2,
				menuItemFactory: SheetTableRemoveColMenuFactory
			}
		}
	} }
};

//#endregion
//#region package.json
var name = "@univerjs/sheets-table-ui";
var version = "1.0.0-insiders.20260907-70fc579";

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
//#region src/controllers/sheet-table-component.controller.ts
let SheetsTableComponentController = class SheetsTableComponentController extends Disposable {
	constructor(_contextService, _sheetCanvasPopupService, _dialogService) {
		super();
		this._contextService = _contextService;
		this._sheetCanvasPopupService = _sheetCanvasPopupService;
		this._dialogService = _dialogService;
		_defineProperty(this, "_popupDisposable", void 0);
		_defineProperty(this, "_currentTableFilterInfo", null);
		this._initUIPopup();
	}
	setCurrentTableFilterInfo(info) {
		this._currentTableFilterInfo = info;
	}
	openOrToggleFilterPanel(info) {
		const opened = this._contextService.getContextValue(SHEETS_TABLE_FILTER_PANEL_OPENED_KEY);
		if (opened && this._isSameFilterPanelInfo(this._currentTableFilterInfo, info)) {
			this.closeFilterPanel();
			return;
		}
		this.setCurrentTableFilterInfo(info);
		if (opened) {
			var _this$_popupDisposabl;
			(_this$_popupDisposabl = this._popupDisposable) === null || _this$_popupDisposabl === void 0 || _this$_popupDisposabl.dispose();
			this._popupDisposable = null;
			this._openFilterPopup();
			return;
		}
		this._contextService.setContextValue(SHEETS_TABLE_FILTER_PANEL_OPENED_KEY, true);
	}
	clearCurrentTableFilterInfo() {
		this._currentTableFilterInfo = null;
	}
	getCurrentTableFilterInfo() {
		return this._currentTableFilterInfo;
	}
	_initUIPopup() {
		this.disposeWithMe(this._contextService.subscribeContextValue$(SHEETS_TABLE_FILTER_PANEL_OPENED_KEY).pipe(startWith(void 0), distinctUntilChanged()).subscribe((open) => {
			if (open) this._openFilterPopup();
			else if (open === false) this._closeFilterPopup();
		}));
	}
	closeFilterPanel() {
		this._contextService.setContextValue(SHEETS_TABLE_FILTER_PANEL_OPENED_KEY, false);
	}
	_openFilterPopup() {
		const currentFilterModel = this._currentTableFilterInfo;
		if (!currentFilterModel) throw new Error("[SheetsFilterUIController]: no filter model when opening filter popup!");
		const { row: startRow, column: col } = currentFilterModel;
		if (this._contextService.getContextValue(MOBILE_UI_MODE)) {
			this._dialogService.open({
				id: UNIVER_SHEET_TABLE_FILTER_PANEL_ID,
				title: { title: "sheets-table-ui.filter.by-values" },
				children: { label: SHEETS_TABLE_FILTER_PANEL_OPENED_KEY },
				onClose: () => {
					this._contextService.setContextValue(SHEETS_TABLE_FILTER_PANEL_OPENED_KEY, false);
				}
			});
			return;
		}
		this._popupDisposable = this._sheetCanvasPopupService.attachPopupToCell(startRow, col, {
			componentKey: SHEETS_TABLE_FILTER_PANEL_OPENED_KEY,
			direction: "horizontal",
			onClickOutside: () => {
				this._dialogService.close(UNIVER_SHEET_TABLE_FILTER_PANEL_ID);
				this._contextService.setContextValue(SHEETS_TABLE_FILTER_PANEL_OPENED_KEY, false);
			},
			offset: [5, 0],
			portal: true
		});
	}
	_closeFilterPopup() {
		var _this$_popupDisposabl2;
		this._dialogService.close(UNIVER_SHEET_TABLE_FILTER_PANEL_ID);
		(_this$_popupDisposabl2 = this._popupDisposable) === null || _this$_popupDisposabl2 === void 0 || _this$_popupDisposabl2.dispose();
		this._popupDisposable = null;
		this.clearCurrentTableFilterInfo();
	}
	_isSameFilterPanelInfo(a, b) {
		return Boolean(a && a.unitId === b.unitId && a.subUnitId === b.subUnitId && a.tableId === b.tableId && a.column === b.column && a.row === b.row);
	}
};
SheetsTableComponentController = __decorate([
	__decorateParam(0, IContextService),
	__decorateParam(1, Inject(SheetCanvasPopManagerService)),
	__decorateParam(2, Inject(IDialogService))
], SheetsTableComponentController);

//#endregion
//#region src/commands/operations/open-table-filter-dialog.opration.ts
const OpenTableFilterPanelOperation = {
	type: CommandType.OPERATION,
	id: "sheet.operation.open-table-filter-panel",
	async handler(accessor, params) {
		if (!params) return false;
		const { row, col, unitId, subUnitId, tableId } = params;
		const tableManager = accessor.get(TableManager);
		const sheetsTableComponentController = accessor.get(SheetsTableComponentController);
		if (!tableManager.getTable(unitId, tableId)) return false;
		sheetsTableComponentController.openOrToggleFilterPanel({
			unitId,
			subUnitId,
			row,
			tableId,
			column: col
		});
		return true;
	}
};

//#endregion
//#region src/config/config.ts
const SHEETS_TABLE_UI_PLUGIN_CONFIG_KEY = "sheets-table-ui.config";
const configSymbol = Symbol(SHEETS_TABLE_UI_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {
	anchorHeight: 24,
	anchorBackgroundColor: "rgb(134,139,156)"
};

//#endregion
//#region src/services/sheets-table-ui.service.ts
let SheetsTableUiService = class SheetsTableUiService extends Disposable {
	constructor(_tableManager, _sheetTableService, _univerInstanceService, _commandService, _localeService) {
		super();
		this._tableManager = _tableManager;
		this._sheetTableService = _sheetTableService;
		this._univerInstanceService = _univerInstanceService;
		this._commandService = _commandService;
		this._localeService = _localeService;
		_defineProperty(this, "_itemsCache", /* @__PURE__ */ new Map());
		this._registerTableFilterChangeEvent();
	}
	_registerTableFilterChangeEvent() {
		this._commandService.onCommandExecuted((command) => {
			if (command.id === SetRangeValuesMutation.id) {
				const { unitId, subUnitId, cellValue } = command.params;
				const tables = this._tableManager.getTablesBySubunitId(unitId, subUnitId);
				if (!tables.length) return;
				new ObjectMatrix(cellValue).forValue((row, col, _value) => {
					const cellRange = cellToRange(row, col);
					const overlapTable = tables.find((table) => {
						const tableRange = table.getTableFilterRange();
						return Rectangle.intersects(tableRange, cellRange);
					});
					if (overlapTable) {
						const colIndex = col - overlapTable.getRange().startColumn;
						this._itemsCache.delete(overlapTable.getId() + colIndex);
					}
				});
			} else if (command.id === SetSheetTableFilterCommand.id) {
				const { unitId, tableId } = command.params;
				const table = this._tableManager.getTable(unitId, tableId);
				if (!table) return;
				const subUnitId = table.getSubunitId();
				this._tableManager.getTablesBySubunitId(unitId, subUnitId).forEach((table) => {
					const range = table.getRange();
					for (let i = range.startColumn; i <= range.endColumn; i++) this._itemsCache.delete(table.getId() + i);
				});
			}
		});
	}
	getTableFilterPanelInitProps(unitId, subUnitId, tableId, column) {
		const table = this._tableManager.getTable(unitId, tableId);
		const tableRange = table.getRange();
		const tableFilter = table.getTableFilterColumn(column - tableRange.startColumn);
		return {
			unitId,
			subUnitId,
			tableFilter,
			currentFilterBy: isConditionFilter(tableFilter) ? "condition" : "items",
			tableId,
			columnIndex: column - tableRange.startColumn
		};
	}
	getTableFilterCheckedItems(unitId, tableId, columnIndex) {
		const table = this._tableManager.getTable(unitId, tableId);
		const checkedItems = [];
		if (table) {
			const filter = table.getTableFilterColumn(columnIndex);
			if (filter && isManualTableFilter(filter)) checkedItems.push(...filter.values.map((value) => value === TABLE_FILTER_EMPTY_VALUE ? this._localeService.t("sheets-table-ui.condition.empty") : value));
		}
		return checkedItems;
	}
	setTableFilter(unitId, tableId, columnIndex, tableFilter) {
		if (!this._tableManager.getTable(unitId, tableId)) return;
		const setTableFilterParams = {
			unitId,
			tableId,
			column: columnIndex,
			tableFilter
		};
		this._commandService.executeCommand(SetSheetTableFilterCommand.id, setTableFilterParams);
	}
	getTableFilterItems(unitId, subUnitId, tableId, columnIndex) {
		var _this$_univerInstance;
		if (this._itemsCache.has(tableId + columnIndex)) return this._itemsCache.get(tableId + columnIndex) || {
			data: [],
			itemsCountMap: /* @__PURE__ */ new Map(),
			allItemsCount: 0
		};
		const table = this._tableManager.getTable(unitId, tableId);
		if (!table) return {
			data: [],
			itemsCountMap: /* @__PURE__ */ new Map(),
			allItemsCount: 0
		};
		const tableRange = table.getTableFilterRange();
		const { startRow, endRow, startColumn } = tableRange;
		const column = startColumn + columnIndex;
		const worksheet = (_this$_univerInstance = this._univerInstanceService.getUnit(unitId)) === null || _this$_univerInstance === void 0 ? void 0 : _this$_univerInstance.getSheetBySheetId(subUnitId);
		if (!worksheet) return {
			data: [],
			itemsCountMap: /* @__PURE__ */ new Map(),
			allItemsCount: 0
		};
		const data = [];
		const map = /* @__PURE__ */ new Map();
		const filteredRowsByOtherColumns = /* @__PURE__ */ new Set();
		const tableFilters = table.getTableFilters();
		for (let i = tableRange.startColumn; i <= tableRange.endColumn; i++) {
			const currentColumnIndex = i - tableRange.startColumn;
			if (currentColumnIndex !== columnIndex && table.getTableFilterColumn(currentColumnIndex)) tableFilters.doColumnFilter(worksheet, tableRange, currentColumnIndex, filteredRowsByOtherColumns);
		}
		let allItemsCount = 0;
		for (let row = startRow; row <= endRow; row++) {
			if (filteredRowsByOtherColumns.has(row)) continue;
			let stringItem = this._sheetTableService.getCellValueWithConditionType(worksheet, row, column);
			if (stringItem == null) stringItem = this._localeService.t("sheets-table-ui.condition.empty");
			if (!map.has(stringItem)) data.push({
				title: stringItem,
				key: `${column}_${row}`,
				leaf: true
			});
			allItemsCount++;
			map.set(stringItem, (map.get(stringItem) || 0) + 1);
		}
		this._itemsCache.set(tableId + columnIndex, {
			data,
			itemsCountMap: map,
			allItemsCount
		});
		return {
			data,
			itemsCountMap: map,
			allItemsCount
		};
	}
};
SheetsTableUiService = __decorate([
	__decorateParam(0, Inject(TableManager)),
	__decorateParam(1, Inject(SheetTableService)),
	__decorateParam(2, Inject(IUniverInstanceService)),
	__decorateParam(3, ICommandService),
	__decorateParam(4, Inject(LocaleService))
], SheetsTableUiService);

//#endregion
//#region src/views/components/util.ts
function getCascaderListOptions(injector) {
	const localeService = injector.get(LocaleService);
	return [
		{
			value: TableConditionTypeEnum.String,
			label: localeService.t(`sheets-table-ui.condition.${TableConditionTypeEnum.String}`),
			children: [
				{
					value: TableStringCompareTypeEnum.Equal,
					label: localeService.t(`sheets-table-ui.string.compare.${TableStringCompareTypeEnum.Equal}`)
				},
				{
					value: TableStringCompareTypeEnum.NotEqual,
					label: localeService.t(`sheets-table-ui.string.compare.${TableStringCompareTypeEnum.NotEqual}`)
				},
				{
					value: TableStringCompareTypeEnum.Contains,
					label: localeService.t(`sheets-table-ui.string.compare.${TableStringCompareTypeEnum.Contains}`)
				},
				{
					value: TableStringCompareTypeEnum.NotContains,
					label: localeService.t(`sheets-table-ui.string.compare.${TableStringCompareTypeEnum.NotContains}`)
				},
				{
					value: TableStringCompareTypeEnum.StartsWith,
					label: localeService.t(`sheets-table-ui.string.compare.${TableStringCompareTypeEnum.StartsWith}`)
				},
				{
					value: TableStringCompareTypeEnum.EndsWith,
					label: localeService.t(`sheets-table-ui.string.compare.${TableStringCompareTypeEnum.EndsWith}`)
				}
			]
		},
		{
			value: TableConditionTypeEnum.Number,
			label: localeService.t(`sheets-table-ui.condition.${TableConditionTypeEnum.Number}`),
			children: [
				{
					value: TableNumberCompareTypeEnum.Equal,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.Equal}`)
				},
				{
					value: TableNumberCompareTypeEnum.NotEqual,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.NotEqual}`)
				},
				{
					value: TableNumberCompareTypeEnum.GreaterThan,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.GreaterThan}`)
				},
				{
					value: TableNumberCompareTypeEnum.GreaterThanOrEqual,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.GreaterThanOrEqual}`)
				},
				{
					value: TableNumberCompareTypeEnum.LessThan,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.LessThan}`)
				},
				{
					value: TableNumberCompareTypeEnum.LessThanOrEqual,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.LessThanOrEqual}`)
				},
				{
					value: TableNumberCompareTypeEnum.Between,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.Between}`)
				},
				{
					value: TableNumberCompareTypeEnum.NotBetween,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.NotBetween}`)
				},
				{
					value: TableNumberCompareTypeEnum.Above,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.Above}`)
				},
				{
					value: TableNumberCompareTypeEnum.Below,
					label: localeService.t(`sheets-table-ui.number.compare.${TableNumberCompareTypeEnum.Below}`)
				}
			]
		},
		{
			value: TableConditionTypeEnum.Date,
			label: localeService.t(`sheets-table-ui.condition.${TableConditionTypeEnum.Date}`),
			children: [
				{
					value: TableDateCompareTypeEnum.Equal,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Equal}`)
				},
				{
					value: TableDateCompareTypeEnum.NotEqual,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.NotEqual}`)
				},
				{
					value: TableDateCompareTypeEnum.After,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.After}`)
				},
				{
					value: TableDateCompareTypeEnum.AfterOrEqual,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.AfterOrEqual}`)
				},
				{
					value: TableDateCompareTypeEnum.Before,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Before}`)
				},
				{
					value: TableDateCompareTypeEnum.BeforeOrEqual,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.BeforeOrEqual}`)
				},
				{
					value: TableDateCompareTypeEnum.Between,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Between}`)
				},
				{
					value: TableDateCompareTypeEnum.NotBetween,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.NotBetween}`)
				},
				{
					value: TableDateCompareTypeEnum.Today,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Today}`)
				},
				{
					value: TableDateCompareTypeEnum.Yesterday,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Yesterday}`)
				},
				{
					value: TableDateCompareTypeEnum.Tomorrow,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Tomorrow}`)
				},
				{
					value: TableDateCompareTypeEnum.ThisWeek,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.ThisWeek}`)
				},
				{
					value: TableDateCompareTypeEnum.LastWeek,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.LastWeek}`)
				},
				{
					value: TableDateCompareTypeEnum.NextWeek,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.NextWeek}`)
				},
				{
					value: TableDateCompareTypeEnum.ThisMonth,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.ThisMonth}`)
				},
				{
					value: TableDateCompareTypeEnum.LastMonth,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.LastMonth}`)
				},
				{
					value: TableDateCompareTypeEnum.NextMonth,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.NextMonth}`)
				},
				{
					value: TableDateCompareTypeEnum.ThisYear,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.ThisYear}`)
				},
				{
					value: TableDateCompareTypeEnum.LastYear,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.LastYear}`)
				},
				{
					value: TableDateCompareTypeEnum.NextYear,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.NextYear}`)
				},
				{
					value: TableDateCompareTypeEnum.Quarter,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Quarter}`)
				},
				{
					value: TableDateCompareTypeEnum.Month,
					label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Month}`)
				}
			]
		}
	];
}
function getConditionDateSelect(injector, dateType) {
	if (!dateType) return [];
	const localeService = injector.get(LocaleService);
	switch (dateType) {
		case TableDateCompareTypeEnum.Quarter: return [
			{
				value: TableDateCompareTypeEnum.Q1,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Q1}`)
			},
			{
				value: TableDateCompareTypeEnum.Q2,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Q2}`)
			},
			{
				value: TableDateCompareTypeEnum.Q3,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Q3}`)
			},
			{
				value: TableDateCompareTypeEnum.Q4,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.Q4}`)
			}
		];
		case TableDateCompareTypeEnum.Month: return [
			{
				value: TableDateCompareTypeEnum.M1,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M1}`)
			},
			{
				value: TableDateCompareTypeEnum.M2,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M2}`)
			},
			{
				value: TableDateCompareTypeEnum.M3,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M3}`)
			},
			{
				value: TableDateCompareTypeEnum.M4,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M4}`)
			},
			{
				value: TableDateCompareTypeEnum.M5,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M5}`)
			},
			{
				value: TableDateCompareTypeEnum.M6,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M6}`)
			},
			{
				value: TableDateCompareTypeEnum.M7,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M7}`)
			},
			{
				value: TableDateCompareTypeEnum.M8,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M8}`)
			},
			{
				value: TableDateCompareTypeEnum.M9,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M9}`)
			},
			{
				value: TableDateCompareTypeEnum.M10,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M10}`)
			},
			{
				value: TableDateCompareTypeEnum.M11,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M11}`)
			},
			{
				value: TableDateCompareTypeEnum.M12,
				label: localeService.t(`sheets-table-ui.date.compare.${TableDateCompareTypeEnum.M12}`)
			}
		];
		default: return [];
	}
}
const datePickerSet = /* @__PURE__ */ new Set([
	TableDateCompareTypeEnum.Equal,
	TableDateCompareTypeEnum.NotEqual,
	TableDateCompareTypeEnum.After,
	TableDateCompareTypeEnum.AfterOrEqual,
	TableDateCompareTypeEnum.Before,
	TableDateCompareTypeEnum.BeforeOrEqual
]);
function getSubComponentType(type, compare) {
	if (!compare) return "None";
	if (type === TableConditionTypeEnum.String) return "Input";
	else if (type === TableConditionTypeEnum.Number) if (compare === TableNumberCompareTypeEnum.Between || compare === TableNumberCompareTypeEnum.NotBetween) return "Inputs";
	else return "Input";
	else if (type === TableConditionTypeEnum.Date) {
		if (compare === TableDateCompareTypeEnum.Between || compare === TableDateCompareTypeEnum.NotBetween) return "DateRange";
		else if (compare === TableDateCompareTypeEnum.Quarter || compare === TableDateCompareTypeEnum.Month) return "Select";
		else if (datePickerSet.has(compare)) return "DatePicker";
		return "None";
	}
	return "None";
}
function getInitConditionInfo(tableFilter) {
	if (!tableFilter || tableFilter.filterType !== "condition") return {
		type: TableConditionTypeEnum.String,
		compare: TableStringCompareTypeEnum.Equal,
		info: {}
	};
	const filterInfo = tableFilter.filterInfo;
	const { conditionType, compareType } = filterInfo;
	if (conditionType === TableConditionTypeEnum.Date) if (compareType === TableDateCompareTypeEnum.Between || compareType === TableDateCompareTypeEnum.NotBetween) {
		let dateRange;
		if (Array.isArray(filterInfo.expectedValue)) dateRange = filterInfo.expectedValue.map((i) => typeof i === "string" ? new Date(i) : i);
		return {
			type: conditionType,
			compare: compareType,
			info: { dateRange }
		};
	} else if (compareType === TableDateCompareTypeEnum.Today || compareType === TableDateCompareTypeEnum.Yesterday || compareType === TableDateCompareTypeEnum.Tomorrow || compareType === TableDateCompareTypeEnum.ThisWeek || compareType === TableDateCompareTypeEnum.LastWeek || compareType === TableDateCompareTypeEnum.NextWeek || compareType === TableDateCompareTypeEnum.ThisMonth || compareType === TableDateCompareTypeEnum.LastMonth || compareType === TableDateCompareTypeEnum.NextMonth || compareType === TableDateCompareTypeEnum.ThisYear || compareType === TableDateCompareTypeEnum.LastYear || compareType === TableDateCompareTypeEnum.NextYear) return {
		type: conditionType,
		compare: compareType,
		info: {}
	};
	else if (datePickerSet.has(compareType)) {
		let date;
		if (typeof filterInfo.expectedValue === "string") date = new Date(filterInfo.expectedValue);
		else if (Array.isArray(filterInfo.expectedValue)) {
			for (let i = 0; i < filterInfo.expectedValue.length; i++) if (typeof filterInfo.expectedValue[i] === "string") filterInfo.expectedValue[i] = new Date(filterInfo.expectedValue[i]);
		}
		return {
			type: conditionType,
			compare: compareType,
			info: { date }
		};
	} else if ((/* @__PURE__ */ new Set([
		TableDateCompareTypeEnum.Q1,
		TableDateCompareTypeEnum.Q2,
		TableDateCompareTypeEnum.Q3,
		TableDateCompareTypeEnum.Q4
	])).has(compareType)) return {
		type: conditionType,
		compare: TableDateCompareTypeEnum.Quarter,
		info: { dateSelect: filterInfo.compareType }
	};
	else return {
		type: conditionType,
		compare: TableDateCompareTypeEnum.Month,
		info: { dateSelect: filterInfo.compareType }
	};
	else if (conditionType === TableConditionTypeEnum.Number) if (compareType === TableNumberCompareTypeEnum.Between || compareType === TableNumberCompareTypeEnum.NotBetween) return {
		type: conditionType,
		compare: compareType,
		info: { numberRange: filterInfo.expectedValue }
	};
	else return {
		type: conditionType,
		compare: compareType,
		info: { number: filterInfo.expectedValue }
	};
	else if (conditionType === TableConditionTypeEnum.String) return {
		type: conditionType,
		compare: compareType,
		info: { string: filterInfo.expectedValue }
	};
	return {
		type: TableConditionTypeEnum.String,
		compare: TableStringCompareTypeEnum.Equal,
		info: {}
	};
}

//#endregion
//#region src/views/components/SheetTableConditionPanel.tsx
const SheetTableConditionPanel = (props) => {
	var _conditionInfo$info$d, _conditionInfo$info$d2, _conditionInfo$info$n, _conditionInfo$info$n3;
	const { conditionInfo, onChange } = props;
	const localeService = useDependency(LocaleService);
	const [conditionVisible, setConditionVisible] = useState(false);
	const injector = useDependency(Injector);
	const cascaderOptions = getCascaderListOptions(injector);
	const handleConditionInfo = (info, type, compare) => {
		onChange({
			type: type ?? conditionInfo.type,
			compare: compare ?? conditionInfo.compare,
			info
		});
	};
	const handleChange = (value) => {
		const type = value[0];
		const compare = value[1];
		if (compare) setConditionVisible(false);
		const info = {};
		if (type === TableConditionTypeEnum.Date) if (compare === TableDateCompareTypeEnum.Quarter) info.dateSelect = TableDateCompareTypeEnum.Q1;
		else if (compare === TableDateCompareTypeEnum.Month) info.dateSelect = TableDateCompareTypeEnum.M1;
		else if (datePickerSet.has(compare)) info.date = /* @__PURE__ */ new Date();
		else info.dateRange = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
		else if (type === TableConditionTypeEnum.Number) info.number = 0;
		else if (type === TableConditionTypeEnum.String) info.string = "";
		handleConditionInfo(info, value[0], value[1] ?? TableStringCompareTypeEnum.Equal);
	};
	const subComponentType = getSubComponentType(conditionInfo.type, conditionInfo.compare);
	let selectType = "";
	if (conditionInfo.compare) selectType = `${localeService.t(`sheets-table-ui.condition.${conditionInfo.type}`)} - ${localeService.t(`sheets-table-ui.${conditionInfo.type}.compare.${conditionInfo.compare}`)}`;
	else selectType = localeService.t(`sheets-table-ui.condition.${conditionInfo.type}`);
	const conditionDateOptions = getConditionDateSelect(injector, conditionInfo.compare);
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Dropdown, {
		align: "start",
		open: conditionVisible,
		onOpenChange: setConditionVisible,
		overlay: /* @__PURE__ */ jsx(CascaderList, {
			value: [conditionInfo.type, conditionInfo.compare],
			options: cascaderOptions,
			onChange: handleChange,
			contentClassName: "univer-flex-1",
			wrapperClassName: "!univer-h-[150px]"
		}),
		children: /* @__PURE__ */ jsxs("div", {
			className: clsx("univer-box-border univer-flex univer-h-8 univer-w-full univer-items-center univer-justify-between univer-rounded-md univer-bg-gray-0 univer-px-2 univer-text-sm univer-transition-colors univer-duration-200 hover:univer-border-primary-600 focus:univer-border-primary-600 focus:univer-outline-none focus:univer-ring-2 dark:!univer-bg-gray-700 dark:!univer-text-gray-0", borderClassName),
			children: [/* @__PURE__ */ jsx("span", { children: selectType }), /* @__PURE__ */ jsx(MoreDownIcon, {})]
		})
	}), /* @__PURE__ */ jsxs("div", {
		className: "univer-mt-3 univer-w-full",
		children: [
			subComponentType === "Input" && /* @__PURE__ */ jsx(Fragment, { children: conditionInfo.type === TableConditionTypeEnum.String ? /* @__PURE__ */ jsx(Input, {
				className: "univer-w-full",
				placeholder: localeService.t("sheets-table-ui.filter.input-values-placeholder"),
				value: conditionInfo.info.string,
				onChange: (v) => handleConditionInfo({ string: v })
			}) : /* @__PURE__ */ jsx(InputNumber, {
				className: "univer-h-7 univer-w-full",
				value: conditionInfo.info.number,
				controls: false,
				onChange: (v) => {
					if (v !== null) handleConditionInfo({ number: v });
				}
			}) }),
			!!(subComponentType === "DatePicker") && /* @__PURE__ */ jsx("div", {
				id: "univer-table-date-picker-wrapper",
				children: /* @__PURE__ */ jsx(DatePicker, {
					className: "univer-w-full",
					value: conditionInfo.info.date ?? /* @__PURE__ */ new Date(),
					onValueChange: (v) => handleConditionInfo({ date: v })
				})
			}),
			!!(subComponentType === "DateRange") && /* @__PURE__ */ jsx("div", {
				id: "univer-table-date-range-wrapper",
				children: /* @__PURE__ */ jsx(DateRangePicker, {
					className: "univer-w-full",
					value: [((_conditionInfo$info$d = conditionInfo.info.dateRange) === null || _conditionInfo$info$d === void 0 ? void 0 : _conditionInfo$info$d[0]) ?? /* @__PURE__ */ new Date(), ((_conditionInfo$info$d2 = conditionInfo.info.dateRange) === null || _conditionInfo$info$d2 === void 0 ? void 0 : _conditionInfo$info$d2[1]) ?? /* @__PURE__ */ new Date()],
					onValueChange: (v) => {
						if (v) handleConditionInfo({ dateRange: v });
						else handleConditionInfo({});
					}
				})
			}),
			subComponentType === "Inputs" && /* @__PURE__ */ jsxs("div", {
				className: "univer-flex univer-items-center univer-gap-2",
				children: [
					/* @__PURE__ */ jsx(InputNumber, {
						className: "univer-w-full",
						value: (_conditionInfo$info$n = conditionInfo.info.numberRange) === null || _conditionInfo$info$n === void 0 ? void 0 : _conditionInfo$info$n[0],
						onChange: (v) => {
							if (v !== null) {
								var _conditionInfo$info$n2;
								handleConditionInfo({ numberRange: [v, (_conditionInfo$info$n2 = conditionInfo.info.numberRange) === null || _conditionInfo$info$n2 === void 0 ? void 0 : _conditionInfo$info$n2[1]] });
							}
						},
						controls: false
					}),
					/* @__PURE__ */ jsx("span", { children: " - " }),
					/* @__PURE__ */ jsx(InputNumber, {
						className: "univer-w-full",
						value: (_conditionInfo$info$n3 = conditionInfo.info.numberRange) === null || _conditionInfo$info$n3 === void 0 ? void 0 : _conditionInfo$info$n3[1],
						controls: false,
						onChange: (v) => {
							if (v !== null) {
								var _conditionInfo$info$n4;
								handleConditionInfo({ numberRange: [(_conditionInfo$info$n4 = conditionInfo.info.numberRange) === null || _conditionInfo$info$n4 === void 0 ? void 0 : _conditionInfo$info$n4[0], v] });
							}
						}
					})
				]
			}),
			!!(subComponentType === "Select") && /* @__PURE__ */ jsx(Select, {
				className: "univer-w-full",
				value: conditionInfo.info.dateSelect ?? conditionDateOptions[0].value,
				options: conditionDateOptions,
				onChange: (v) => handleConditionInfo({ dateSelect: v })
			})
		]
	})] });
};

//#endregion
//#region src/views/components/SheetTableItemsFilterPanel.tsx
const getCheckedItemCount = (map, checkedItemSet) => {
	let count = 0;
	checkedItemSet.forEach((item) => {
		count += map.get(item) ?? 0;
	});
	return count;
};
function SheetTableItemsFilterPanel(props) {
	const { unitId, tableId, subUnitId, columnIndex, checkedItemSet, setCheckedItemSet, tableFilter } = props;
	const localeService = useDependency(LocaleService);
	const { data: items, itemsCountMap, allItemsCount } = useDependency(SheetsTableUiService).getTableFilterItems(unitId, subUnitId, tableId, columnIndex);
	const [allChecked, setAllChecked] = useState(tableFilter === void 0 ? true : checkedItemSet.size === itemsCountMap.size);
	const [checkedCount, setCheckedCount] = useState(() => allChecked ? allItemsCount : getCheckedItemCount(itemsCountMap, checkedItemSet));
	const indeterminate = !allChecked && checkedItemSet.size > 0;
	const [searchText, setSearchText] = useState("");
	const displayItems = useMemo(() => {
		return searchText ? items.filter((item) => {
			return String(item.title).toLowerCase().includes(searchText.toLowerCase());
		}) : items;
	}, [searchText, items]);
	const onCheckAllToggled = useCallback(() => {
		if (allChecked) {
			checkedItemSet.clear();
			setCheckedItemSet(new Set(checkedItemSet));
			setAllChecked(false);
		} else {
			displayItems.forEach((item) => {
				checkedItemSet.add(item.title);
			});
			setCheckedItemSet(new Set(checkedItemSet));
			setAllChecked(true);
		}
	}, [allChecked]);
	const onSearchValueChange = useCallback((str) => {
		if (str === "") {
			setAllChecked(true);
			items.forEach((item) => {
				checkedItemSet.add(item.title);
			});
			setCheckedCount(allItemsCount);
		} else {
			checkedItemSet.clear();
			setAllChecked(false);
			setCheckedCount(0);
		}
		setSearchText(str);
	}, []);
	const onCheckItemToggled = (key) => {
		if (allChecked) {
			setAllChecked(false);
			const newSet = /* @__PURE__ */ new Set();
			for (const { title } of items) if (key !== title) newSet.add(title);
			setCheckedCount(allItemsCount - itemsCountMap.get(key));
			setCheckedItemSet(newSet);
		} else {
			if (checkedItemSet.has(key)) {
				checkedItemSet.delete(key);
				setCheckedCount(checkedCount - itemsCountMap.get(key));
			} else {
				checkedItemSet.add(key);
				setCheckedCount(checkedCount + itemsCountMap.get(key));
			}
			setCheckedItemSet(new Set(checkedItemSet));
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "univer-flex univer-h-full univer-flex-col",
		children: [/* @__PURE__ */ jsx(Input, {
			autoFocus: true,
			value: searchText,
			placeholder: localeService.t("sheets-table-ui.filter.search-placeholder"),
			onChange: onSearchValueChange
		}), /* @__PURE__ */ jsx("div", {
			className: clsx("univer-mt-2 univer-box-border univer-flex univer-h-[180px] univer-max-h-[180px] univer-flex-grow univer-flex-col univer-overflow-hidden univer-rounded-md univer-py-1.5 univer-pl-2", borderClassName),
			children: /* @__PURE__ */ jsx("div", {
				className: clsx("univer-h-40 univer-min-w-0 univer-overflow-y-auto univer-py-1 univer-pl-2", scrollbarClassName),
				children: /* @__PURE__ */ jsxs("div", {
					className: "univer-h-full",
					children: [/* @__PURE__ */ jsx("div", {
						className: "univer-flex univer-items-center univer-px-2 univer-py-1",
						children: /* @__PURE__ */ jsx(Checkbox, {
							className: "univer-min-w-0 univer-flex-1",
							contentClassName: "univer-flex-1 univer-min-w-0",
							indeterminate,
							disabled: items.length === 0,
							checked: allChecked,
							onChange: onCheckAllToggled,
							children: /* @__PURE__ */ jsxs("div", {
								className: "univer-flex univer-h-5 univer-flex-1 univer-items-center univer-text-sm",
								children: [/* @__PURE__ */ jsx("span", {
									className: "univer-flex-1 univer-truncate",
									children: `${localeService.t("sheets-table-ui.filter.select-all")}`
								}), /* @__PURE__ */ jsx("span", {
									className: "univer-ml univer-text-gray-400",
									children: `(${checkedCount}/${searchText ? displayItems.length : allItemsCount})`
								})]
							})
						})
					}), displayItems.map((item) => {
						return /* @__PURE__ */ jsx("div", {
							className: "univer-flex univer-items-center univer-px-2 univer-py-1",
							children: /* @__PURE__ */ jsx(Checkbox, {
								className: "univer-min-w-0 univer-flex-1",
								contentClassName: "univer-flex-1 univer-min-w-0",
								checked: allChecked || checkedItemSet.has(item.title),
								onChange: () => {
									onCheckItemToggled(item.title);
								},
								children: /* @__PURE__ */ jsxs("span", {
									className: "univer-flex univer-h-5 univer-flex-1 univer-items-center univer-text-sm",
									children: [/* @__PURE__ */ jsx("span", {
										className: "univer-flex-1 univer-truncate",
										children: item.title
									}), /* @__PURE__ */ jsx("span", {
										className: "univer-ml-1 univer-inline-flex univer-h-full univer-items-center univer-text-gray-400",
										children: `(${itemsCountMap.get(item.title) || 0})`
									})]
								})
							})
						}, item.key);
					})]
				})
			})
		})]
	});
}

//#endregion
//#region src/views/components/SheetTableFilterPanel.tsx
const FILTER_BY_OPTIONS = [{
	label: "sheets-table-ui.filter.by-values",
	value: "items"
}, {
	label: "sheets-table-ui.filter.by-conditions",
	value: "condition"
}];
function SheetTableFilterPanel() {
	var _permissionService$ge;
	const localeService = useDependency(LocaleService);
	const filterByItems = FILTER_BY_OPTIONS.map((option) => ({
		...option,
		label: localeService.t(option.label)
	}));
	const tableUiService = useDependency(SheetsTableUiService);
	const tableManager = useDependency(TableManager);
	const commandService = useDependency(ICommandService);
	const permissionService = useDependency(IPermissionService);
	const sheetsTableComponentController = useDependency(SheetsTableComponentController);
	const tableFilterPanelInfo = sheetsTableComponentController.getCurrentTableFilterInfo();
	const props = tableUiService.getTableFilterPanelInitProps(tableFilterPanelInfo.unitId, tableFilterPanelInfo.subUnitId, tableFilterPanelInfo.tableId, tableFilterPanelInfo.column);
	const { unitId, subUnitId, tableId, tableFilter, currentFilterBy, columnIndex } = props;
	const { data } = tableUiService.getTableFilterItems(unitId, subUnitId, tableId, columnIndex);
	const checkedItems = tableUiService.getTableFilterCheckedItems(unitId, tableId, columnIndex);
	const [checkedItemSet, setCheckedItemSet] = useState(() => new Set(checkedItems));
	const [filterBy, setFilterBy] = useState(currentFilterBy || "items");
	const [conditionInfo, setConditionInfo] = useState(() => {
		const tableFilter = props.tableFilter;
		return getInitConditionInfo(tableFilter);
	});
	const table = tableManager.getTable(unitId, tableId);
	if (!table) return null;
	const tableFilters = table.getTableFilters();
	const tableRange = table.getRange();
	const sortState = tableFilters.getSortState();
	sortState.columnIndex === columnIndex && (sortState.sortState, SheetsTableSortStateEnum.Asc);
	sortState.columnIndex === columnIndex && (sortState.sortState, SheetsTableSortStateEnum.Desc);
	const absoluteColumn = tableFilterPanelInfo.column;
	const canDeleteColumn = tableRange.endColumn > tableRange.startColumn;
	const closeDialog = () => {
		sheetsTableComponentController.closeFilterPanel();
	};
	const onCancel = () => {
		closeDialog();
	};
	const applySort = (asc) => {
		const range = table.getTableFilterRange();
		commandService.executeCommand(SortRangeCommand.id, {
			unitId,
			subUnitId,
			range,
			orderRules: [{
				colIndex: columnIndex + range.startColumn,
				type: asc ? SortType.ASC : SortType.DESC
			}],
			hasTitle: false
		});
		tableFilters.setSortState(columnIndex, asc ? SheetsTableSortStateEnum.Asc : SheetsTableSortStateEnum.Desc);
		closeDialog();
	};
	const insertColumn = (side) => {
		commandService.executeCommand(SheetTableInsertColumnAtCommand.id, {
			unitId,
			subUnitId,
			tableId,
			index: side === "left" ? absoluteColumn : absoluteColumn + 1,
			count: 1
		});
		closeDialog();
	};
	const deleteColumn = () => {
		if (!canDeleteColumn) return;
		commandService.executeCommand(SheetTableRemoveColumnAtCommand.id, {
			unitId,
			subUnitId,
			tableId,
			index: absoluteColumn,
			count: 1
		});
		closeDialog();
	};
	const onApply = () => {
		if (filterBy === "items") {
			const filteredItems = [];
			const emptyLabel = localeService.t("sheets-table-ui.condition.empty");
			for (const itemInfo of data) if (checkedItemSet.has(itemInfo.title)) filteredItems.push(itemInfo.title === emptyLabel ? TABLE_FILTER_EMPTY_VALUE : itemInfo.title);
			const originFilter = table.getTableFilterColumn(columnIndex);
			if (originFilter) {
				if (originFilter.values.join(",") === filteredItems.join(",")) {
					closeDialog();
					return;
				}
			} else if (filteredItems.length === 0) {
				closeDialog();
				return;
			}
			const tableFilter = {
				filterType: TableColumnFilterTypeEnum.manual,
				values: filteredItems
			};
			tableUiService.setTableFilter(unitId, tableId, columnIndex, tableFilter);
		} else {
			let filterInfo;
			if (conditionInfo.compare === TableDateCompareTypeEnum.Quarter || conditionInfo.compare === TableDateCompareTypeEnum.Month) filterInfo = {
				conditionType: conditionInfo.type,
				compareType: Object.values(conditionInfo.info)[0]
			};
			else filterInfo = {
				conditionType: conditionInfo.type,
				compareType: conditionInfo.compare,
				expectedValue: Object.values(conditionInfo.info)[0]
			};
			const tableFilter = {
				filterType: TableColumnFilterTypeEnum.condition,
				filterInfo
			};
			tableUiService.setTableFilter(unitId, tableId, columnIndex, tableFilter);
		}
		closeDialog();
	};
	const onClearFilter = () => {
		tableUiService.setTableFilter(unitId, tableId, columnIndex, void 0);
		closeDialog();
	};
	const workbookEditableId = new WorkbookEditablePermission(unitId).id;
	return /* @__PURE__ */ jsxs("div", {
		className: "univer-box-border univer-flex univer-w-[400px] univer-flex-col univer-rounded-[10px] univer-bg-gray-0 univer-p-4 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-700",
		children: [
			((_permissionService$ge = permissionService.getPermissionPoint(workbookEditableId)) === null || _permissionService$ge === void 0 ? void 0 : _permissionService$ge.value) && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "-univer-mx-4 -univer-mt-2 univer-mb-3 univer-border-0 univer-border-b univer-border-solid univer-border-gray-200 univer-py-1",
				children: [
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "univer-box-border univer-flex univer-h-10 univer-w-full univer-cursor-pointer univer-items-center univer-gap-3 univer-border-none univer-bg-transparent univer-px-4 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 disabled:univer-cursor-not-allowed disabled:univer-text-gray-400 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
						onClick: () => insertColumn("left"),
						children: [/* @__PURE__ */ jsx(LeftInsertColumnDoubleIcon, {
							className: "univer-size-5",
							extend: { colorChannel1: "var(--univer-primary-600)" }
						}), /* @__PURE__ */ jsx("span", { children: localeService.t("sheets-table-ui.columnMenu.insert-left") })]
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "univer-box-border univer-flex univer-h-10 univer-w-full univer-cursor-pointer univer-items-center univer-gap-3 univer-border-none univer-bg-transparent univer-px-4 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 disabled:univer-cursor-not-allowed disabled:univer-text-gray-400 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
						onClick: () => insertColumn("right"),
						children: [/* @__PURE__ */ jsx(RightInsertColumnDoubleIcon, {
							className: "univer-size-5",
							extend: { colorChannel1: "var(--univer-primary-600)" }
						}), /* @__PURE__ */ jsx("span", { children: localeService.t("sheets-table-ui.columnMenu.insert-right") })]
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "univer-box-border univer-flex univer-h-10 univer-w-full univer-cursor-pointer univer-items-center univer-gap-3 univer-border-none univer-bg-transparent univer-px-4 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 disabled:univer-cursor-not-allowed disabled:univer-text-gray-400 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
						disabled: !canDeleteColumn,
						onClick: deleteColumn,
						children: [/* @__PURE__ */ jsx(DeleteColumnDoubleIcon, {
							className: "univer-size-5",
							extend: { colorChannel1: "var(--univer-primary-600)" }
						}), /* @__PURE__ */ jsx("span", { children: localeService.t("sheets-table-ui.columnMenu.delete") })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "univer-mb-3 univer-flex",
				children: /* @__PURE__ */ jsxs(ButtonGroup, {
					className: "univer-mb-3 !univer-flex univer-w-full",
					children: [/* @__PURE__ */ jsxs(Button, {
						className: "univer-w-1/2",
						onClick: () => applySort(true),
						children: [/* @__PURE__ */ jsx(AscendingIcon, { className: "univer-mr-1" }), localeService.t("sheets-table-ui.sort.sort-asc")]
					}), /* @__PURE__ */ jsxs(Button, {
						className: "univer-w-1/2",
						onClick: () => applySort(false),
						children: [/* @__PURE__ */ jsx(DescendingIcon, { className: "univer-mr-1" }), localeService.t("sheets-table-ui.sort.sort-desc")]
					})]
				})
			})] }),
			/* @__PURE__ */ jsx("div", {
				className: "univer-w-full",
				children: /* @__PURE__ */ jsx(Segmented, {
					value: filterBy,
					items: filterByItems,
					onChange: (value) => setFilterBy(value)
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "univer-z-10 univer-h-60",
				children: /* @__PURE__ */ jsx("div", {
					className: "univer-mt-3 univer-size-full",
					children: filterBy === "items" ? /* @__PURE__ */ jsx(SheetTableItemsFilterPanel, {
						tableFilter,
						unitId,
						subUnitId,
						tableId,
						columnIndex,
						checkedItemSet,
						setCheckedItemSet
					}) : /* @__PURE__ */ jsx(SheetTableConditionPanel, {
						tableFilter,
						unitId,
						subUnitId,
						tableId,
						columnIndex,
						conditionInfo,
						onChange: setConditionInfo
					})
				})
			}),
			/* @__PURE__ */ jsxs(ActionRow, {
				className: "univer-flex-wrap-nowrap univer-mt-4 univer-inline-flex univer-flex-shrink-0 univer-flex-grow-0 univer-justify-between univer-gap-6 univer-overflow-hidden",
				children: [/* @__PURE__ */ jsx(Button, {
					disabled: tableFilter === void 0,
					onClick: onClearFilter,
					children: localeService.t("sheets-table-ui.filter.clear-filter")
				}), /* @__PURE__ */ jsxs(ActionRow, {
					className: "univer-flex univer-flex-1 univer-gap-x-2",
					children: [/* @__PURE__ */ jsx(Button, {
						onClick: onCancel,
						children: localeService.t("sheets-table-ui.filter.cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "primary",
						onClick: onApply,
						children: localeService.t("sheets-table-ui.filter.confirm")
					})]
				})]
			})
		]
	});
}

//#endregion
//#region src/views/components/MobileSheetTableMenu.tsx
const ACTIONS = [
	"rename",
	"update-range",
	"set-theme",
	"delete"
];
function MobileSheetTableMenu({ menu }) {
	return /* @__PURE__ */ jsx("div", {
		className: "univer-flex univer-flex-col univer-gap-2",
		children: ACTIONS.map((action) => /* @__PURE__ */ jsx(MobileActionRow, {
			title: menu.labels[action],
			"aria-label": menu.labels[action],
			variant: "subtle",
			onClick: () => menu.onSelect(action)
		}, action))
	});
}

//#endregion
//#region src/views/components/SheetTableMenu.tsx
function SheetTableMenu({ popup }) {
	const menu = popup.extraProps;
	const { mobile } = useContext(ConfigContext);
	if (!menu) return null;
	if (mobile) return /* @__PURE__ */ jsx(MobileSheetTableMenu, { menu });
	return /* @__PURE__ */ jsx(DropdownMenu, {
		align: "start",
		className: "univer-min-w-40",
		items: [
			{
				type: "item",
				children: menu.labels.rename,
				onSelect: () => menu.onSelect("rename")
			},
			{
				type: "item",
				children: menu.labels["update-range"],
				onSelect: () => menu.onSelect("update-range")
			},
			{
				type: "item",
				children: menu.labels["set-theme"],
				onSelect: () => menu.onSelect("set-theme")
			},
			{
				type: "item",
				children: menu.labels.delete,
				variant: "destructive",
				onSelect: () => menu.onSelect("delete")
			}
		],
		open: true,
		sideOffset: 0,
		onOpenChange: (open) => {
			if (!open) menu.onClose();
		},
		children: /* @__PURE__ */ jsx("button", {
			type: "button",
			"aria-label": menu.tableName,
			className: "univer-block univer-h-px univer-opacity-0",
			style: { width: menu.anchorWidth },
			tabIndex: -1
		})
	});
}

//#endregion
//#region src/views/components/SheetTableRenameDialog.tsx
function SheetTableRenameDialog(props) {
	const { unitId, tableId, onClose } = props;
	const localeService = useDependency(LocaleService);
	const commandService = useDependency(ICommandService);
	const tableManager = useDependency(TableManager);
	const univerInstanceService = useDependency(IUniverInstanceService);
	const definedNamesService = useDependency(IDefinedNamesService);
	const table = tableManager.getTableById(unitId, tableId);
	const [value, setValue] = useState((table === null || table === void 0 ? void 0 : table.getDisplayName()) ?? "");
	const [error, setError] = useState("");
	const existingNames = useMemo(() => {
		const names = getExistingNamesSet(unitId, {
			univerInstanceService,
			tableManager,
			definedNamesService
		});
		const currentName = table === null || table === void 0 ? void 0 : table.getDisplayName().toLowerCase();
		if (currentName) names.delete(currentName);
		return names;
	}, [
		definedNamesService,
		table,
		tableManager,
		unitId,
		univerInstanceService
	]);
	const handleConfirm = () => {
		const nextName = value.trim();
		if (!table || nextName === table.getDisplayName()) {
			onClose();
			return;
		}
		if (!validateSheetTableName(nextName, existingNames).valid) {
			setError(localeService.t("sheets-table-ui.tableNameError"));
			return;
		}
		commandService.executeCommand(SetSheetTableCommand.id, {
			unitId,
			tableId,
			name: nextName
		});
		onClose();
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "univer-box-border univer-flex univer-w-full univer-flex-col univer-gap-4 univer-pb-3 univer-pt-2",
		children: [
			/* @__PURE__ */ jsx(Input, {
				size: "middle",
				value,
				placeholder: localeService.t("sheets-table-ui.renamePlaceholder"),
				onChange: (nextValue) => {
					setValue(nextValue);
					setError("");
				},
				onKeyDown: (event) => {
					if (event.key === "Enter") handleConfirm();
				},
				autoFocus: true
			}),
			error ? /* @__PURE__ */ jsx("div", {
				className: "-univer-mt-2 univer-text-sm univer-text-red-500",
				children: error
			}) : null,
			/* @__PURE__ */ jsxs(ActionRow, {
				className: "univer-flex univer-w-full univer-items-center univer-justify-end univer-gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					className: "univer-min-w-16",
					onClick: onClose,
					children: localeService.t("sheets-table-ui.cancel")
				}), /* @__PURE__ */ jsx(Button, {
					className: "univer-min-w-16",
					variant: "primary",
					onClick: handleConfirm,
					children: localeService.t("sheets-table-ui.confirm")
				})]
			})
		]
	});
}

//#endregion
//#region src/views/components/SheetTableSelector.tsx
const SheetTableSelector = (props) => {
	const { unitId, subUnitId, range, onCancel, onConfirm, tableId } = props;
	const tableManager = useDependency(TableManager);
	const [selectedRange, setSelectedRange] = useState(range);
	const [rangeError, setRangeError] = useState("");
	const localeService = useDependency(LocaleService);
	const univerInstanceService = useDependency(IUniverInstanceService);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(RangeSelector, {
			maxRangeCount: 1,
			unitId,
			subUnitId,
			initialValue: serializeRange(range),
			onChange: (_, text) => {
				const originValue = serializeRange(range);
				const newRange = deserializeRangeWithSheet(text).range;
				const target = getSheetCommandTarget(univerInstanceService, {
					unitId,
					subUnitId
				});
				if (!target) return;
				if (target.worksheet.getMergeData().some((merge) => {
					return Rectangle.intersects(newRange, merge);
				})) {
					setRangeError(localeService.t("sheets-table-ui.tableRangeWithMergeError"));
					return;
				}
				if (tableManager.getTablesBySubunitId(unitId, subUnitId).some((table) => {
					if (table.getId() === tableId) return false;
					const tableRange = table.getRange();
					return Rectangle.intersects(newRange, tableRange);
				})) {
					setRangeError(localeService.t("sheets-table-ui.tableRangeWithOtherTableError"));
					return;
				}
				const { startRow, endRow } = newRange;
				if (startRow === endRow) {
					setRangeError(localeService.t("sheets-table-ui.tableRangeSingleRowError"));
					return;
				}
				if (originValue === text) return;
				if (tableId) {
					const table = tableManager.getTableById(unitId, tableId);
					if (table) {
						const oldRange = table.getRange();
						if (Rectangle.intersects(newRange, oldRange) && oldRange.startRow === newRange.startRow) {
							setSelectedRange(newRange);
							setRangeError("");
							onConfirm({
								unitId,
								subUnitId,
								range: newRange
							});
							return;
						} else {
							setRangeError(localeService.t("sheets-table-ui.updateError"));
							return;
						}
					}
				}
				setSelectedRange(newRange);
				setRangeError("");
			},
			supportAcrossSheet: false
		}),
		rangeError && /* @__PURE__ */ jsx("div", {
			className: "univer-mt-1 univer-text-xs univer-text-red-500",
			children: rangeError
		}),
		/* @__PURE__ */ jsxs(ActionRow, {
			className: "univer-mt-4 univer-flex univer-justify-end univer-gap-2",
			children: [/* @__PURE__ */ jsx(Button, {
				onClick: onCancel,
				children: localeService.t("sheets-table-ui.cancel")
			}), /* @__PURE__ */ jsx(Button, {
				variant: "primary",
				onClick: () => {
					if (rangeError) return;
					onConfirm({
						unitId,
						subUnitId,
						range: selectedRange
					});
				},
				children: localeService.t("sheets-table-ui.confirm")
			})]
		})
	] });
};

//#endregion
//#region src/controllers/sheet-table-theme-ui.controller.ts
let SheetTableThemeUIController = class SheetTableThemeUIController extends Disposable {
	constructor(_commandService) {
		super();
		this._commandService = _commandService;
		_defineProperty(this, "_refreshTable", new Subject());
		_defineProperty(this, "refreshTable$", this._refreshTable.asObservable());
		this._initListener();
	}
	_initListener() {
		this.disposeWithMe(this._commandService.onCommandExecuted((command) => {
			if (command.id === SetRangeThemeMutation.id) {
				const { styleName } = command.params;
				if (styleName.startsWith(SHEET_TABLE_CUSTOM_THEME_PREFIX)) this._refreshTable.next(Math.random());
			}
		}));
	}
};
SheetTableThemeUIController = __decorate([__decorateParam(0, Inject(ICommandService))], SheetTableThemeUIController);

//#endregion
//#region src/views/components/SheetTableThemePanel.tsx
const SheetTableThemePanel = (props) => {
	var _customStyle$getHeade, _customStyle$getFirst, _customStyle$getSecon, _customStyle$getLastR;
	const { unitId, subUnitId, tableId } = props;
	const commandService = useDependency(ICommandService);
	const localeService = useDependency(LocaleService);
	const tableManager = useDependency(TableManager);
	const table = tableManager.getTableById(unitId, tableId);
	const rangeThemeModel = useDependency(SheetRangeThemeModel);
	const sheetTableThemeUIController = useDependency(SheetTableThemeUIController);
	const rangeThemeMapChanged = useObservable(rangeThemeModel.rangeThemeMapChange$);
	const tableRefresh = useObservable(sheetTableThemeUIController.refreshTable$);
	const errorService = useDependency(ErrorService);
	const [, setRefresh] = useState(Math.random);
	const themeConfig = useObservable(tableManager.tableThemeChanged$, {
		theme: table === null || table === void 0 ? void 0 : table.getTableStyleId(),
		oldTheme: table === null || table === void 0 ? void 0 : table.getTableStyleId(),
		unitId,
		subUnitId,
		tableId
	});
	const defaultRangeThemes = rangeThemeModel.getRegisteredRangeThemes().filter((item) => item === null || item === void 0 ? void 0 : item.startsWith(TABLE_DEFAULT_NAME_PREFIX));
	const customRangeThemes = rangeThemeModel.getALLRegisteredTheme(unitId).filter((item) => item === null || item === void 0 ? void 0 : item.startsWith(TABLE_CUSTOM_NAME_PREFIX));
	const selectedTheme = table === null || table === void 0 ? void 0 : table.getTableStyleId();
	const customSelected = customRangeThemes.find((item) => item === selectedTheme);
	const customStyleName = customSelected || customRangeThemes[0];
	const customStyle = rangeThemeModel.getCustomRangeThemeStyle(unitId, customStyleName);
	const headerBg = (customStyle === null || customStyle === void 0 || (_customStyle$getHeade = customStyle.getHeaderRowStyle()) === null || _customStyle$getHeade === void 0 || (_customStyle$getHeade = _customStyle$getHeade.bg) === null || _customStyle$getHeade === void 0 ? void 0 : _customStyle$getHeade.rgb) ?? "rgb(255, 255, 255)";
	const firstRowBg = (customStyle === null || customStyle === void 0 || (_customStyle$getFirst = customStyle.getFirstRowStyle()) === null || _customStyle$getFirst === void 0 || (_customStyle$getFirst = _customStyle$getFirst.bg) === null || _customStyle$getFirst === void 0 ? void 0 : _customStyle$getFirst.rgb) ?? "rgb(255, 255, 255)";
	const secondRowBg = (customStyle === null || customStyle === void 0 || (_customStyle$getSecon = customStyle.getSecondRowStyle()) === null || _customStyle$getSecon === void 0 || (_customStyle$getSecon = _customStyle$getSecon.bg) === null || _customStyle$getSecon === void 0 ? void 0 : _customStyle$getSecon.rgb) ?? "rgb(255, 255, 255)";
	const lastRowBg = (customStyle === null || customStyle === void 0 || (_customStyle$getLastR = customStyle.getLastRowStyle()) === null || _customStyle$getLastR === void 0 || (_customStyle$getLastR = _customStyle$getLastR.bg) === null || _customStyle$getLastR === void 0 ? void 0 : _customStyle$getLastR.rgb) ?? "rgb(255, 255, 255)";
	const direction = useObservable(localeService.direction$, localeService.getDirection());
	const handleThemeChange = (theme) => {
		commandService.executeCommand(SetSheetTableCommand.id, {
			unitId,
			tableId,
			theme
		});
	};
	const handleAddCustomTheme = () => {
		if (customRangeThemes.length >= 11) {
			errorService.emit(localeService.t("sheets-table-ui.customTooMore"));
			return;
		}
		const lastCustomTheme = customRangeThemes[customRangeThemes.length - 1];
		let newThemeName = `${TABLE_CUSTOM_NAME_PREFIX}1`;
		if (lastCustomTheme) newThemeName = `${TABLE_CUSTOM_NAME_PREFIX}${Number(lastCustomTheme.split("-")[2]) + 1}`;
		const newTheme = new RangeThemeStyle(newThemeName, { ...customEmptyThemeWithBorderStyle });
		commandService.executeCommand(AddTableThemeCommand.id, {
			unitId,
			tableId,
			themeStyle: newTheme
		});
	};
	const setCustomTheme = (themeName, tableThemeStyle) => {
		commandService.executeCommand(SetRangeThemeMutation.id, {
			unitId,
			subUnitId,
			styleName: themeName,
			style: tableThemeStyle
		});
	};
	const removeCustomTheme = (themeName) => {
		commandService.executeCommand(RemoveTableThemeCommand.id, {
			unitId,
			tableId,
			themeName
		});
	};
	useEffect(() => {
		setRefresh(Math.random());
	}, [rangeThemeMapChanged, tableRefresh]);
	if (!table) return null;
	const headerBgIsDark = new ColorKit(headerBg).isDark();
	const firstRowBgIsDark = new ColorKit(firstRowBg).isDark();
	const secondRowBgIsDark = new ColorKit(secondRowBg).isDark();
	const lastRowBgIsDark = new ColorKit(lastRowBg).isDark();
	const customThemeRows = [
		{
			key: "header",
			label: localeService.t("sheets-table-ui.header"),
			background: headerBg,
			isDark: headerBgIsDark,
			onChange: (value) => {
				const headerRowStyle = processStyleWithBorderStyle("headerRowStyle", {
					bg: { rgb: value },
					cl: { rgb: new ColorKit(value).isDark() ? "#fff" : "#000" }
				});
				setCustomTheme(table.getTableStyleId(), { headerRowStyle });
			}
		},
		{
			key: "first-row",
			label: localeService.t("sheets-table-ui.firstLine"),
			background: firstRowBg,
			isDark: firstRowBgIsDark,
			onChange: (value) => {
				setCustomTheme(table.getTableStyleId(), { firstRowStyle: {
					bg: { rgb: value },
					cl: { rgb: new ColorKit(value).isDark() ? "#fff" : "#000" }
				} });
			}
		},
		{
			key: "second-row",
			label: localeService.t("sheets-table-ui.secondLine"),
			background: secondRowBg,
			isDark: secondRowBgIsDark,
			onChange: (value) => {
				setCustomTheme(table.getTableStyleId(), { secondRowStyle: {
					bg: { rgb: value },
					cl: { rgb: new ColorKit(value).isDark() ? "#fff" : "#000" }
				} });
			}
		},
		{
			key: "last-row",
			label: localeService.t("sheets-table-ui.footer"),
			background: lastRowBg,
			isDark: lastRowBgIsDark,
			onChange: (value) => {
				const lastRowStyle = processStyleWithBorderStyle("lastRowStyle", {
					bg: { rgb: value },
					cl: { rgb: new ColorKit(value).isDark() ? "#fff" : "#000" }
				});
				setCustomTheme(table.getTableStyleId(), { lastRowStyle });
			}
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		dir: direction,
		className: "univer-flex univer-flex-col univer-gap-5 univer-pb-4",
		children: [/* @__PURE__ */ jsxs("section", {
			className: "univer-flex univer-flex-col univer-gap-2",
			children: [/* @__PURE__ */ jsx("h5", {
				className: "univer-m-0 univer-text-xs univer-font-medium univer-text-gray-500 dark:!univer-text-gray-300",
				children: localeService.t("sheets-table-ui.defaultStyle")
			}), /* @__PURE__ */ jsx("div", {
				className: "univer-grid univer-grid-cols-6 univer-gap-2",
				children: defaultRangeThemes.map((item) => {
					var _rangeThemeItem$getHe, _rangeThemeItem$getFi, _rangeThemeItem$getSe, _rangeThemeItem$getLa;
					const rangeThemeItem = rangeThemeModel.getDefaultRangeThemeStyle(item);
					const rowBackgrounds = [
						(rangeThemeItem === null || rangeThemeItem === void 0 || (_rangeThemeItem$getHe = rangeThemeItem.getHeaderRowStyle()) === null || _rangeThemeItem$getHe === void 0 || (_rangeThemeItem$getHe = _rangeThemeItem$getHe.bg) === null || _rangeThemeItem$getHe === void 0 ? void 0 : _rangeThemeItem$getHe.rgb) || "rgb(255, 255, 255)",
						(rangeThemeItem === null || rangeThemeItem === void 0 || (_rangeThemeItem$getFi = rangeThemeItem.getFirstRowStyle()) === null || _rangeThemeItem$getFi === void 0 || (_rangeThemeItem$getFi = _rangeThemeItem$getFi.bg) === null || _rangeThemeItem$getFi === void 0 ? void 0 : _rangeThemeItem$getFi.rgb) || "rgb(255, 255, 255)",
						(rangeThemeItem === null || rangeThemeItem === void 0 || (_rangeThemeItem$getSe = rangeThemeItem.getSecondRowStyle()) === null || _rangeThemeItem$getSe === void 0 || (_rangeThemeItem$getSe = _rangeThemeItem$getSe.bg) === null || _rangeThemeItem$getSe === void 0 ? void 0 : _rangeThemeItem$getSe.rgb) || "rgb(255, 255, 255)",
						(rangeThemeItem === null || rangeThemeItem === void 0 || (_rangeThemeItem$getLa = rangeThemeItem.getLastRowStyle()) === null || _rangeThemeItem$getLa === void 0 || (_rangeThemeItem$getLa = _rangeThemeItem$getLa.bg) === null || _rangeThemeItem$getLa === void 0 ? void 0 : _rangeThemeItem$getLa.rgb) || "rgb(255, 255, 255)"
					];
					const selected = item === themeConfig.theme;
					return /* @__PURE__ */ jsx("button", {
						type: "button",
						title: item,
						"aria-label": item,
						"aria-pressed": selected,
						className: clsx("univer-flex univer-h-12 univer-w-full univer-cursor-pointer univer-flex-col univer-overflow-hidden univer-rounded-lg univer-bg-gray-0 univer-p-1 univer-shadow-sm univer-transition-all hover:univer-border-gray-400 hover:univer-shadow-md focus:univer-outline-none focus:univer-ring-2 focus:univer-ring-primary-200 dark:!univer-bg-gray-800", borderClassName, { "!univer-border-primary-500 univer-ring-2 univer-ring-primary-100": selected }),
						onClick: () => handleThemeChange(item),
						children: rowBackgrounds.map((background, index) => /* @__PURE__ */ jsx("span", {
							className: "univer-min-h-0 univer-w-full univer-flex-1",
							style: {
								background,
								border: background ? TABLE_BORDER_NONE : TABLE_BORDER_DEFAULT
							}
						}, index))
					}, item);
				})
			})]
		}), /* @__PURE__ */ jsxs("section", {
			className: "univer-flex univer-flex-col univer-gap-2",
			children: [
				/* @__PURE__ */ jsx("h5", {
					className: "univer-m-0 univer-text-xs univer-font-medium univer-text-gray-500 dark:!univer-text-gray-300",
					children: localeService.t("sheets-table-ui.customStyle")
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "univer-grid univer-grid-cols-5 univer-gap-2 univer-rounded-lg univer-bg-gray-50 univer-p-2 dark:!univer-bg-gray-800",
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						"data-u-comp": "sheet-table-theme-add",
						"aria-label": localeService.t("sheets-table-ui.setTheme"),
						className: "univer-flex univer-h-12 univer-w-full univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-lg univer-border univer-border-dashed univer-border-gray-300 univer-bg-gray-0 univer-p-0 univer-text-gray-500 univer-transition-colors hover:univer-border-primary-500 hover:univer-text-primary-600 focus:univer-outline-none focus:univer-ring-2 focus:univer-ring-primary-200 dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-300",
						onClick: handleAddCustomTheme,
						children: /* @__PURE__ */ jsx(IncreaseIcon, { className: "univer-size-4" })
					}), customRangeThemes.map((item) => {
						var _rangeThemeItem$getHe2, _rangeThemeItem$getFi2, _rangeThemeItem$getSe2, _rangeThemeItem$getLa2;
						const rangeThemeItem = rangeThemeModel.getCustomRangeThemeStyle(unitId, item);
						const rowBackgrounds = [
							rangeThemeItem === null || rangeThemeItem === void 0 || (_rangeThemeItem$getHe2 = rangeThemeItem.getHeaderRowStyle()) === null || _rangeThemeItem$getHe2 === void 0 || (_rangeThemeItem$getHe2 = _rangeThemeItem$getHe2.bg) === null || _rangeThemeItem$getHe2 === void 0 ? void 0 : _rangeThemeItem$getHe2.rgb,
							rangeThemeItem === null || rangeThemeItem === void 0 || (_rangeThemeItem$getFi2 = rangeThemeItem.getFirstRowStyle()) === null || _rangeThemeItem$getFi2 === void 0 || (_rangeThemeItem$getFi2 = _rangeThemeItem$getFi2.bg) === null || _rangeThemeItem$getFi2 === void 0 ? void 0 : _rangeThemeItem$getFi2.rgb,
							rangeThemeItem === null || rangeThemeItem === void 0 || (_rangeThemeItem$getSe2 = rangeThemeItem.getSecondRowStyle()) === null || _rangeThemeItem$getSe2 === void 0 || (_rangeThemeItem$getSe2 = _rangeThemeItem$getSe2.bg) === null || _rangeThemeItem$getSe2 === void 0 ? void 0 : _rangeThemeItem$getSe2.rgb,
							rangeThemeItem === null || rangeThemeItem === void 0 || (_rangeThemeItem$getLa2 = rangeThemeItem.getLastRowStyle()) === null || _rangeThemeItem$getLa2 === void 0 || (_rangeThemeItem$getLa2 = _rangeThemeItem$getLa2.bg) === null || _rangeThemeItem$getLa2 === void 0 ? void 0 : _rangeThemeItem$getLa2.rgb
						];
						const selected = item === themeConfig.theme;
						return /* @__PURE__ */ jsxs("div", {
							className: "univer-group univer-relative univer-h-12 univer-min-w-0",
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								title: item,
								"aria-label": item,
								"aria-pressed": selected,
								className: clsx("univer-flex univer-size-full univer-cursor-pointer univer-flex-col univer-overflow-hidden univer-rounded-lg univer-bg-gray-0 univer-p-1 univer-shadow-sm univer-transition-all hover:univer-border-gray-400 hover:univer-shadow-md focus:univer-outline-none focus:univer-ring-2 focus:univer-ring-primary-200 dark:!univer-bg-gray-900", borderClassName, { "!univer-border-primary-500 univer-ring-2 univer-ring-primary-100": selected }),
								onClick: () => handleThemeChange(item),
								children: rowBackgrounds.map((background, index) => /* @__PURE__ */ jsx("span", {
									className: "univer-min-h-0 univer-w-full univer-flex-1",
									style: {
										background: background ?? "none",
										border: background ? TABLE_BORDER_NONE : TABLE_BORDER_DEFAULT
									}
								}, index))
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								"data-u-comp": "sheet-table-theme-remove",
								"aria-label": `${localeService.t("sheets-table-ui.customStyle")} ${item}`,
								className: clsx("univer-absolute univer-right-[-6px] univer-top-[-6px] univer-z-10 univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-full univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-0 univer-text-gray-500 univer-shadow-sm univer-transition-all hover:univer-border-red-200 hover:univer-bg-red-50 hover:univer-text-red-600 focus:univer-opacity-100 focus:univer-outline-none focus:univer-ring-2 focus:univer-ring-primary-200 rtl:univer-left-[-6px] rtl:univer-right-auto dark:!univer-border-gray-600 dark:!univer-bg-gray-900", {
									"univer-opacity-100": selected,
									"univer-opacity-0 group-focus-within:univer-opacity-100 group-hover:univer-opacity-100": !selected
								}),
								onClick: (event) => {
									event.stopPropagation();
									removeCustomTheme(item);
								},
								children: /* @__PURE__ */ jsx(CloseIcon, { className: "univer-size-3" })
							})]
						}, item);
					})]
				}),
				customSelected && /* @__PURE__ */ jsx("div", {
					className: "univer-flex univer-flex-col univer-gap-2 univer-rounded-lg univer-bg-gray-50 univer-p-3 dark:!univer-bg-gray-800",
					children: customThemeRows.map((row) => /* @__PURE__ */ jsxs("div", {
						className: "univer-flex univer-h-10 univer-min-w-0 univer-gap-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: clsx("univer-flex univer-min-w-0 univer-flex-1 univer-items-center univer-rounded-md univer-px-3 univer-text-sm univer-font-medium rtl:univer-text-right", borderClassName, {
								"univer-text-gray-0": row.isDark,
								"univer-text-gray-900": !row.isDark
							}),
							style: { background: row.background },
							children: /* @__PURE__ */ jsx("span", {
								className: "univer-truncate",
								children: row.label
							})
						}), /* @__PURE__ */ jsx(Dropdown, {
							overlay: /* @__PURE__ */ jsx("div", {
								dir: direction,
								className: "univer-p-2",
								children: /* @__PURE__ */ jsx(ColorPicker, {
									value: new ColorKit(row.background).toHexString(),
									onChange: row.onChange
								})
							}),
							children: /* @__PURE__ */ jsxs("button", {
								type: "button",
								"aria-label": `${row.label} ${localeService.t("sheets-table-ui.setTheme")}`,
								className: clsx("univer-flex univer-h-10 univer-cursor-pointer univer-items-center univer-gap-2 univer-rounded-md univer-bg-gray-0 univer-px-2 univer-text-gray-600 univer-transition-colors hover:univer-bg-gray-100 focus:univer-outline-none focus:univer-ring-2 focus:univer-ring-primary-200 dark:!univer-bg-gray-900 dark:!univer-text-gray-300", borderClassName),
								children: [/* @__PURE__ */ jsx("span", {
									className: clsx("univer-size-4 univer-rounded-full", borderClassName),
									style: { background: row.background }
								}), /* @__PURE__ */ jsx(DownIcon, { className: "univer-size-3" })]
							})
						})]
					}, row.key))
				})
			]
		})]
	});
};

//#endregion
//#region src/controllers/components.controller.ts
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
let ComponentsController = class ComponentsController extends Disposable {
	constructor(_componentManager, _iconManager) {
		super();
		this._componentManager = _componentManager;
		this._iconManager = _iconManager;
		this._registerComponents();
		this._registerIcons();
	}
	_registerComponents() {
		[
			[SHEETS_TABLE_FILTER_PANEL_OPENED_KEY, SheetTableFilterPanel],
			[SHEET_TABLE_MENU, SheetTableMenu],
			[SHEET_TABLE_RENAME_DIALOG, SheetTableRenameDialog]
		].forEach(([key, comp]) => {
			this.disposeWithMe(this._componentManager.register(key, comp));
		});
		[[TABLE_SELECTOR_DIALOG, SheetTableSelector], [SHEET_TABLE_THEME_PANEL, SheetTableThemePanel]].forEach(([key, comp]) => {
			this.disposeWithMe(this._componentManager.register(key, comp));
		});
	}
	_registerIcons() {
		this.disposeWithMe(this._iconManager.register({ TableIcon }));
	}
};
ComponentsController = __decorate([__decorateParam(0, Inject(ComponentManager)), __decorateParam(1, Inject(IconManager))], ComponentsController);

//#endregion
//#region src/views/widgets/table-controls-util.ts
function isPointInTableControlRegion(region, x, y) {
	return x >= region.left && x <= region.left + region.width && y >= region.top && y <= region.top + region.height;
}
function hitTestTableControl(regions, x, y) {
	for (let i = regions.length - 1; i >= 0; i--) if (isPointInTableControlRegion(regions[i], x, y)) return regions[i];
	return null;
}
function buildCenteredPlusSegments(centerX, centerY, size) {
	const halfSize = size / 2;
	return [{
		fromX: centerX - halfSize,
		fromY: centerY,
		toX: centerX + halfSize,
		toY: centerY
	}, {
		fromX: centerX,
		fromY: centerY - halfSize,
		toX: centerX,
		toY: centerY + halfSize
	}];
}

//#endregion
//#region src/views/widgets/table-controls.shape.ts
const ANCHOR_MIN_WIDTH = 122;
const ANCHOR_MAX_WIDTH = 240;
const ANCHOR_PADDING_X = 12;
const ANCHOR_TOGGLE_WIDTH = 30;
const ANCHOR_OFFSET_Y = 0;
const ANCHOR_BORDER = "rgba(0, 0, 0, 0.22)";
const ANCHOR_DIVIDER = "rgba(0, 0, 0, 0.20)";
const ANCHOR_TOGGLE_BG_ACTIVE = "rgba(0, 0, 0, 0.12)";
const INSERT_BUTTON_VISUAL_SIZE = 18;
const INSERT_BUTTON_PLUS_SIZE = 8;
var SheetTableControlsShape = class extends Shape {
	constructor(key, _getSkeleton) {
		super(key, {
			evented: true,
			fill: "rgba(0, 0, 0, 0)",
			zIndex: 5001
		});
		this._getSkeleton = _getSkeleton;
		_defineProperty(this, "_items", []);
		_defineProperty(this, "_regions", []);
		_defineProperty(this, "_openedMenuTableId", null);
		_defineProperty(this, "_hoveredRegion", null);
		_defineProperty(this, "_hoveredInsertRegion", null);
	}
	setItems(items) {
		this._items = items;
		this.makeDirty(true);
	}
	setOpenedMenuTableId(tableId) {
		if (this._openedMenuTableId === tableId) return;
		this._openedMenuTableId = tableId;
		this.makeDirty(true);
	}
	getOpenedMenuTableId() {
		return this._openedMenuTableId;
	}
	getAnchorRegion(tableId) {
		return this._regions.find((region) => region.type === "anchor-main" && region.tableId === tableId) ?? null;
	}
	setHoveredRegion(region) {
		if (this._hoveredRegion === region) return;
		this._hoveredRegion = region;
		this.makeDirty(true);
	}
	setHoveredInsertRegion(region) {
		if (this._hoveredInsertRegion === region) return;
		this._hoveredInsertRegion = region;
		this.makeDirty(true);
	}
	hitTest(x, y) {
		return hitTestTableControl(this._regions, x, y);
	}
	isHit(coord) {
		return this.hitTest(coord.x, coord.y) != null;
	}
	refreshBounds() {
		const skeleton = this._getSkeleton();
		if (!skeleton) {
			this.hide();
			return;
		}
		this.show();
		this.transformByState({
			left: 0,
			top: 0,
			width: skeleton.rowHeaderWidth + skeleton.columnTotalWidth,
			height: skeleton.columnHeaderHeight + skeleton.rowTotalHeight
		});
	}
	_draw(ctx) {
		this._regions = [];
		const skeleton = this._getSkeleton();
		if (!skeleton) return;
		ctx.save();
		ctx.textBaseline = "middle";
		for (const item of this._items) this._drawAnchor(ctx, skeleton, item);
		if (this._hoveredInsertRegion) {
			const item = this._items.find((renderItem) => {
				var _this$_hoveredInsertR;
				return renderItem.tableId === ((_this$_hoveredInsertR = this._hoveredInsertRegion) === null || _this$_hoveredInsertR === void 0 ? void 0 : _this$_hoveredInsertR.tableId);
			});
			this._drawInsertButton(ctx, this._hoveredInsertRegion, (item === null || item === void 0 ? void 0 : item.fill) ?? "#355bb7");
			this._regions.push(this._hoveredInsertRegion);
		}
		ctx.restore();
	}
	_drawAnchor(ctx, skeleton, item) {
		const position = skeleton.getNoMergeCellWithCoordByIndex(item.range.startRow, item.range.startColumn);
		const left = position.startX;
		const rawTop = position.startY - 28 - ANCHOR_OFFSET_Y;
		const top = Math.max(0, rawTop);
		const width = Math.max(ANCHOR_MIN_WIDTH, Math.min(ANCHOR_MAX_WIDTH, item.tableName.length * 8.5 + ANCHOR_PADDING_X * 2 + ANCHOR_TOGGLE_WIDTH));
		const toggleRegion = {
			type: "anchor-menu-toggle",
			tableId: item.tableId,
			left: left + width - ANCHOR_TOGGLE_WIDTH,
			top,
			width: ANCHOR_TOGGLE_WIDTH,
			height: 28
		};
		ctx.save();
		ctx.translateWithPrecision(left, top);
		this._drawTopRoundedRect(ctx, width, 28, 14, item.fill, ANCHOR_BORDER);
		this._drawAnchorToggle(ctx, width, item.text, this._openedMenuTableId === item.tableId || this._isSameRegion(this._hoveredRegion, toggleRegion));
		ctx.font = `600 13px ${DEFAULT_FONTFACE_PLANE}`;
		ctx.fillStyle = item.text;
		ctx.textAlign = "left";
		ctx.fillText(item.tableName, ANCHOR_PADDING_X, 28 / 2);
		ctx.restore();
		this._regions.push({
			type: "anchor-main",
			tableId: item.tableId,
			left,
			top,
			width,
			height: 28
		});
		this._regions.push(toggleRegion);
	}
	_drawAnchorToggle(ctx, anchorWidth, color, active) {
		const toggleLeft = anchorWidth - ANCHOR_TOGGLE_WIDTH;
		if (active) this._drawRightTopRoundedRect(ctx, toggleLeft, anchorWidth, 28, 14, ANCHOR_TOGGLE_BG_ACTIVE);
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = ANCHOR_DIVIDER;
		ctx.lineWidth = 1;
		ctx.moveTo(toggleLeft + .5, 5);
		ctx.lineTo(toggleLeft + .5, 28 - 5);
		ctx.stroke();
		ctx.restore();
		const centerX = anchorWidth - ANCHOR_TOGGLE_WIDTH / 2;
		const centerY = 28 / 2;
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 1.6;
		ctx.lineCap = "round";
		ctx.moveTo(centerX - 5, centerY - 4);
		ctx.lineTo(centerX + 5, centerY - 4);
		ctx.moveTo(centerX - 5, centerY);
		ctx.lineTo(centerX + 5, centerY);
		ctx.moveTo(centerX - 5, centerY + 4);
		ctx.lineTo(centerX + 5, centerY + 4);
		ctx.stroke();
		ctx.restore();
	}
	_drawTopRoundedRect(ctx, width, height, radius, fill, stroke) {
		const r = Math.min(radius, width / 2, height);
		ctx.beginPath();
		ctx.moveTo(0, height);
		ctx.lineTo(0, r);
		ctx.arcTo(0, 0, r, 0, r);
		ctx.lineTo(width - r, 0);
		ctx.arcTo(width, 0, width, r, r);
		ctx.lineTo(width, height);
		ctx.closePath();
		ctx.fillStyle = fill;
		ctx.fill();
		if (stroke) {
			ctx.strokeStyle = stroke;
			ctx.lineWidth = 1;
			ctx.stroke();
		}
	}
	_drawRightTopRoundedRect(ctx, left, width, height, radius, fill) {
		const r = Math.min(radius, width - left, height);
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(left, height);
		ctx.lineTo(left, 0);
		ctx.lineTo(width - r, 0);
		ctx.arcTo(width, 0, width, r, r);
		ctx.lineTo(width, height);
		ctx.closePath();
		ctx.fillStyle = fill;
		ctx.fill();
		ctx.restore();
	}
	_drawInsertButton(ctx, region, fill) {
		const centerX = region.left + region.width / 2;
		const centerY = region.top + region.height / 2;
		const radius = INSERT_BUTTON_VISUAL_SIZE / 2;
		ctx.save();
		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
		ctx.fillStyle = "#fff";
		ctx.fill();
		ctx.strokeStyle = fill;
		ctx.stroke();
		ctx.beginPath();
		ctx.strokeStyle = fill;
		ctx.lineWidth = 1;
		ctx.lineCap = "round";
		for (const segment of buildCenteredPlusSegments(centerX, centerY, INSERT_BUTTON_PLUS_SIZE)) {
			ctx.moveTo(segment.fromX, segment.fromY);
			ctx.lineTo(segment.toX, segment.toY);
		}
		ctx.stroke();
		ctx.restore();
	}
	_isSameRegion(a, b) {
		return Boolean(a && a.type === b.type && a.tableId === b.tableId && a.index === b.index);
	}
};

//#endregion
//#region src/controllers/sheet-table-controls-render.controller.ts
const TABLE_CONTROLS_LAYER_INDEX = 5002;
const TABLE_CONTROL_GAP_ROW = 0;
const SHEET_TABLE_MOBILE_MENU_DIALOG_ID = "sheet-table-mobile-menu";
const TABLE_RENDER_REFRESH_COMMANDS = /* @__PURE__ */ new Set([SetScrollOperation.id, SetZoomRatioOperation.id]);
const SELECTION_ONLY_COMMANDS = /* @__PURE__ */ new Set([
	MoveSelectionCommand.id,
	MoveSelectionEnterAndTabCommand.id,
	ExpandSelectionCommand.id,
	SelectAllCommand.id,
	SelectRangeCommand.id
]);
function isSameTopGap(left, right) {
	if (left === null || right === null) return left === right;
	return left.size === right.size && left.color === right.color && left.stripeColor === right.stripeColor;
}
let SheetTableControlsRenderController = class SheetTableControlsRenderController extends Disposable {
	constructor(_context, _injector, _sheetSkeletonManagerService, _commandService, _tableManager, _rangeThemeModel, _workbookPermissionService, _permissionService, _sheetsSelectionsService, _selectionRenderService, _sheetTableThemeUIController, _localeService, _contextService, _dialogService, _sidebarService, _sheetCanvasPopupService) {
		super();
		this._context = _context;
		this._injector = _injector;
		this._sheetSkeletonManagerService = _sheetSkeletonManagerService;
		this._commandService = _commandService;
		this._tableManager = _tableManager;
		this._rangeThemeModel = _rangeThemeModel;
		this._workbookPermissionService = _workbookPermissionService;
		this._permissionService = _permissionService;
		this._sheetsSelectionsService = _sheetsSelectionsService;
		this._selectionRenderService = _selectionRenderService;
		this._sheetTableThemeUIController = _sheetTableThemeUIController;
		this._localeService = _localeService;
		this._contextService = _contextService;
		this._dialogService = _dialogService;
		this._sidebarService = _sidebarService;
		this._sheetCanvasPopupService = _sheetCanvasPopupService;
		_defineProperty(this, "_shape", void 0);
		_defineProperty(this, "_topGapBaseBySkeleton", /* @__PURE__ */ new WeakMap());
		_defineProperty(this, "_menuPopup", null);
		this._shape = new SheetTableControlsShape("SheetTableControlsShape", () => this._sheetSkeletonManagerService.getCurrentSkeleton() || null);
		this._initShape();
		this._initRefresh();
		this._refresh();
	}
	_initShape() {
		var _this$_context$compon;
		this._context.scene.addObjects([this._shape], TABLE_CONTROLS_LAYER_INDEX);
		this.disposeWithMe(toDisposable(() => {
			this._closeFloatingControls();
			this._context.scene.removeObjects([this._shape]);
		}));
		this.disposeWithMe(this._shape.onPointerMove$.subscribeEvent((evt, state) => {
			this._handlePointerMove(evt, state);
		}));
		this.disposeWithMe(this._shape.onPointerLeave$.subscribeEvent((_evt, state) => {
			this._handlePointerLeave(state);
		}));
		this.disposeWithMe(this._shape.onPointerDown$.subscribeEvent((evt, state) => {
			this._handlePointerDown(evt, state);
		}));
		this.disposeWithMe(((_this$_context$compon = this._context.components.get(SHEET_VIEW_KEY.MAIN)) === null || _this$_context$compon === void 0 ? void 0 : _this$_context$compon.onPointerMove$.subscribeEvent((evt) => {
			const point = this._getLocalPoint(evt);
			const insertRegion = this._getInsertRegionFromPoint(point.x, point.y);
			this._shape.setHoveredInsertRegion(insertRegion);
		})) ?? toDisposable(() => {}));
	}
	_initRefresh() {
		const commandExecuted$ = fromCallback(this._commandService.onCommandExecuted.bind(this._commandService)).pipe(filter(([command]) => {
			if (command.id.startsWith("doc.") || SELECTION_ONLY_COMMANDS.has(command.id)) return false;
			if (command.type === CommandType.OPERATION && TABLE_RENDER_REFRESH_COMMANDS.has(command.id)) {
				this._closeFloatingControls();
				return true;
			}
			return command.type === CommandType.MUTATION || command.type === CommandType.COMMAND;
		}));
		this.disposeWithMe(merge$1(this._context.unit.activeSheet$, this._sheetSkeletonManagerService.currentSkeleton$, this._tableManager.tableAdd$, this._tableManager.tableDelete$, this._tableManager.tableNameChanged$, this._tableManager.tableRangeChanged$, this._tableManager.tableThemeChanged$, this._sheetTableThemeUIController.refreshTable$, this._workbookPermissionService.unitPermissionInitStateChange$, this._permissionService.permissionPointUpdate$, commandExecuted$).subscribe(() => {
			this._closeFloatingControls();
			this._refresh();
		}));
		this.disposeWithMe(this._sheetsSelectionsService.selectionChanged$.subscribe(() => {
			this._closeFloatingControls();
			this._refresh(false);
		}));
	}
	_refresh(invalidateScene = true) {
		const skeleton = this._sheetSkeletonManagerService.getCurrentSkeleton();
		const worksheet = this._context.unit.getActiveSheet();
		if (!skeleton || !worksheet || !this._canEditWorkbook()) {
			this._shape.setItems([]);
			this._shape.refreshBounds();
			this._shape.makeDirty(true);
			if (invalidateScene) this._context.scene.makeDirty();
			return;
		}
		this._syncTopTableGap(skeleton);
		const unitId = this._context.unit.getUnitId();
		const subUnitId = worksheet.getSheetId();
		const items = this._tableManager.getTablesBySubunitId(unitId, subUnitId).map((table) => {
			var _rangeTheme$getHeader, _rangeTheme$getHeader2;
			const rangeTheme = this._rangeThemeModel.getRangeThemeStyle(unitId, table.getTableStyleId());
			return {
				tableId: table.getId(),
				tableName: table.getDisplayName(),
				range: table.getRange(),
				fill: (rangeTheme === null || rangeTheme === void 0 || (_rangeTheme$getHeader = rangeTheme.getHeaderRowStyle()) === null || _rangeTheme$getHeader === void 0 || (_rangeTheme$getHeader = _rangeTheme$getHeader.bg) === null || _rangeTheme$getHeader === void 0 ? void 0 : _rangeTheme$getHeader.rgb) ?? "rgb(53,91,183)",
				text: (rangeTheme === null || rangeTheme === void 0 || (_rangeTheme$getHeader2 = rangeTheme.getHeaderRowStyle()) === null || _rangeTheme$getHeader2 === void 0 || (_rangeTheme$getHeader2 = _rangeTheme$getHeader2.cl) === null || _rangeTheme$getHeader2 === void 0 ? void 0 : _rangeTheme$getHeader2.rgb) ?? "rgb(255,255,255)"
			};
		});
		this._shape.setItems(items);
		this._shape.refreshBounds();
		this._shape.makeDirty(true);
		if (invalidateScene) this._context.scene.makeDirty();
	}
	_canEditWorkbook() {
		var _this$_permissionServ;
		const unitId = this._context.unit.getUnitId();
		return ((_this$_permissionServ = this._permissionService.getPermissionPoint(new WorkbookEditablePermission(unitId).id)) === null || _this$_permissionServ === void 0 ? void 0 : _this$_permissionServ.value) !== false;
	}
	_handlePointerMove(evt, state) {
		const point = this._getLocalPoint(evt);
		const hit = this._shape.hitTest(point.x, point.y);
		const insertRegion = this._isInsertHit(hit) ? hit : hit ? null : this._getInsertRegionFromPoint(point.x, point.y);
		const activeHit = hit ?? insertRegion;
		this._shape.setHoveredRegion(this._isInsertHit(hit) ? null : hit);
		this._shape.setHoveredInsertRegion(insertRegion);
		if (activeHit) {
			state.stopPropagation();
			this._context.scene.setCursor(CURSOR_TYPE.POINTER);
		} else this._context.scene.resetCursor();
	}
	_isInsertHit(hit) {
		return (hit === null || hit === void 0 ? void 0 : hit.type) === "insert-row" || (hit === null || hit === void 0 ? void 0 : hit.type) === "insert-column";
	}
	_handlePointerLeave(state) {
		state.stopPropagation();
		this._shape.setHoveredRegion(null);
		this._shape.setHoveredInsertRegion(null);
		this._context.scene.resetCursor();
	}
	_handlePointerDown(evt, state) {
		if (evt.button === 2) return;
		const point = this._getLocalPoint(evt);
		const hit = this._shape.hitTest(point.x, point.y) ?? this._getInsertRegionFromPoint(point.x, point.y);
		if (!hit) {
			this._closeFloatingControls();
			return;
		}
		state.stopPropagation();
		evt.stopPropagation();
		evt.preventDefault();
		this._handleHit(hit);
	}
	_handleHit(hit) {
		const worksheet = this._context.unit.getActiveSheet();
		if (!worksheet) return;
		const unitId = this._context.unit.getUnitId();
		const subUnitId = worksheet.getSheetId();
		if (hit.type === "anchor-menu-toggle" || hit.type === "anchor-main") {
			this._toggleTableMenu(unitId, subUnitId, hit.tableId);
			return;
		}
		if (hit.type === "insert-row") {
			this._commandService.executeCommand(SheetTableInsertRowAtCommand.id, {
				unitId,
				subUnitId,
				tableId: hit.tableId,
				index: hit.index,
				count: 1
			});
			this._closeFloatingControls();
			return;
		}
		if (hit.type === "insert-column") {
			this._commandService.executeCommand(SheetTableInsertColumnAtCommand.id, {
				unitId,
				subUnitId,
				tableId: hit.tableId,
				index: hit.index,
				count: 1
			});
			this._closeFloatingControls();
		}
	}
	_toggleTableMenu(unitId, subUnitId, tableId) {
		if (this._shape.getOpenedMenuTableId() === tableId) {
			this._closeFloatingControls();
			return;
		}
		const table = this._tableManager.getTableById(unitId, tableId);
		const anchor = this._shape.getAnchorRegion(tableId);
		if (!table || !anchor) return;
		this._closeFloatingControls();
		this._shape.setOpenedMenuTableId(tableId);
		const range = table.getRange();
		const extraProps = {
			anchorWidth: anchor.width,
			tableName: table.getDisplayName(),
			labels: {
				rename: this._localeService.t("sheets-table-ui.rename"),
				"update-range": this._localeService.t("sheets-table-ui.updateRange"),
				"set-theme": this._localeService.t("sheets-table-ui.setTheme"),
				delete: this._localeService.t("sheets-table-ui.removeTable")
			},
			onSelect: (action) => this._handleTableMenuAction(action, unitId, subUnitId, tableId),
			onClose: () => this._closeFloatingControls()
		};
		if (this._contextService.getContextValue(MOBILE_UI_MODE)) {
			this._dialogService.open({
				id: SHEET_TABLE_MOBILE_MENU_DIALOG_ID,
				title: { title: table.getDisplayName() },
				children: { label: {
					name: SHEET_TABLE_MENU,
					props: { popup: { extraProps } }
				} },
				onClose: () => this._closeFloatingControls()
			});
			this._menuPopup = toDisposable(() => this._dialogService.close(SHEET_TABLE_MOBILE_MENU_DIALOG_ID));
			return;
		}
		this._menuPopup = this._sheetCanvasPopupService.attachPopupByPosition({
			left: anchor.left,
			right: anchor.left + anchor.width,
			top: anchor.top,
			bottom: anchor.top + anchor.height
		}, {
			componentKey: "SHEET_TABLE_MENU",
			direction: "bottom-left",
			extraProps
		}, {
			unitId,
			subUnitId,
			row: range.startRow,
			col: range.startColumn
		}) ?? null;
		if (!this._menuPopup) this._shape.setOpenedMenuTableId(null);
	}
	_handleTableMenuAction(action, unitId, subUnitId, tableId) {
		this._closeFloatingControls();
		switch (action) {
			case "rename":
				this._openRenameDialog(unitId, tableId);
				break;
			case "update-range": return this._openRangeSelector(unitId, subUnitId, tableId);
			case "set-theme":
				this._openThemePanel(unitId, subUnitId, tableId);
				break;
			case "delete":
				this._commandService.executeCommand(DeleteSheetTableCommand.id, {
					tableId,
					subUnitId,
					unitId
				});
				break;
		}
	}
	_openRenameDialog(unitId, tableId) {
		this._dialogService.open({
			id: SHEET_TABLE_RENAME_DIALOG_ID,
			title: { title: this._localeService.t("sheets-table-ui.rename") },
			draggable: true,
			mask: true,
			children: { label: {
				name: SHEET_TABLE_RENAME_DIALOG,
				props: {
					unitId,
					tableId,
					onClose: () => this._dialogService.close(SHEET_TABLE_RENAME_DIALOG_ID)
				}
			} },
			width: 360,
			onClose: () => this._dialogService.close(SHEET_TABLE_RENAME_DIALOG_ID)
		});
	}
	async _openRangeSelector(unitId, subUnitId, tableId) {
		const table = this._tableManager.getTableById(unitId, tableId);
		if (!table) return;
		const selection = await openRangeSelector(this._injector, unitId, subUnitId, table.getRange(), tableId);
		if (!selection) return;
		this._commandService.executeCommand(SetSheetTableCommand.id, {
			tableId,
			unitId,
			updateRange: { newRange: selection.range }
		});
	}
	_openThemePanel(unitId, subUnitId, tableId) {
		const table = this._tableManager.getTableById(unitId, tableId);
		if (!table) return;
		this._sidebarService.open({
			id: SHEET_TABLE_THEME_PANEL_ID,
			header: { title: this._localeService.t("sheets-table-ui.tableStyle") },
			children: { label: {
				name: SHEET_TABLE_THEME_PANEL,
				props: {
					oldConfig: table.getTableConfig(),
					unitId,
					subUnitId,
					tableId
				}
			} },
			width: 330
		});
	}
	_getInsertRegionFromPoint(x, y) {
		const skeleton = this._sheetSkeletonManagerService.getCurrentSkeleton();
		const worksheet = this._context.unit.getActiveSheet();
		if (!skeleton || !worksheet) return null;
		const unitId = this._context.unit.getUnitId();
		const subUnitId = worksheet.getSheetId();
		const tables = this._tableManager.getTablesBySubunitId(unitId, subUnitId);
		for (const table of tables) {
			const range = table.getRange();
			const tableBounds = this._getRangeBounds(skeleton, range);
			if (x < tableBounds.left || x > tableBounds.right || y < tableBounds.top || y > tableBounds.bottom) continue;
			if (y > this._getRangeBounds(skeleton, {
				...range,
				endRow: range.startRow
			}).bottom) for (let row = range.startRow + 1; row <= range.endRow; row++) {
				const cell = skeleton.getNoMergeCellWithCoordByIndex(row, range.startColumn);
				if (y >= cell.startY && y <= cell.endY) return {
					type: "insert-row",
					tableId: table.getId(),
					index: row + 1,
					left: tableBounds.left - 22 / 2,
					top: cell.endY - 22 / 2,
					width: 22,
					height: 22
				};
			}
		}
		return null;
	}
	_getRangeBounds(skeleton, range) {
		const startCell = skeleton.getNoMergeCellWithCoordByIndex(range.startRow, range.startColumn);
		const endCell = skeleton.getNoMergeCellWithCoordByIndex(range.endRow, range.endColumn);
		return {
			left: startCell.startX,
			top: startCell.startY,
			right: endCell.endX,
			bottom: endCell.endY
		};
	}
	_syncTopTableGap(skeleton) {
		const worksheet = this._context.unit.getActiveSheet();
		if (!worksheet) return;
		const unitId = this._context.unit.getUnitId();
		const subUnitId = worksheet.getSheetId();
		const hasTopTable = this._tableManager.getTablesBySubunitId(unitId, subUnitId).some((table) => table.getRange().startRow === 0);
		const current = skeleton.gapConfig;
		const rowGaps = { ...current.rowGaps };
		const previousTopGap = rowGaps[TABLE_CONTROL_GAP_ROW] ? { ...rowGaps[TABLE_CONTROL_GAP_ROW] } : null;
		let shouldSync = false;
		if (hasTopTable) {
			if (!this._topGapBaseBySkeleton.has(skeleton)) this._topGapBaseBySkeleton.set(skeleton, rowGaps[TABLE_CONTROL_GAP_ROW] ? { ...rowGaps[TABLE_CONTROL_GAP_ROW] } : null);
			const baseGap = this._topGapBaseBySkeleton.get(skeleton);
			rowGaps[TABLE_CONTROL_GAP_ROW] = {
				...baseGap ?? rowGaps[TABLE_CONTROL_GAP_ROW],
				size: ((baseGap === null || baseGap === void 0 ? void 0 : baseGap.size) ?? 0) + 32
			};
			shouldSync = true;
		} else if (this._topGapBaseBySkeleton.has(skeleton)) {
			const baseGap = this._topGapBaseBySkeleton.get(skeleton);
			if (baseGap) rowGaps[TABLE_CONTROL_GAP_ROW] = { ...baseGap };
			else delete rowGaps[TABLE_CONTROL_GAP_ROW];
			this._topGapBaseBySkeleton.delete(skeleton);
			shouldSync = true;
		}
		if (!shouldSync) return;
		if (isSameTopGap(previousTopGap, rowGaps[TABLE_CONTROL_GAP_ROW] ? { ...rowGaps[TABLE_CONTROL_GAP_ROW] } : null)) return;
		skeleton.setGapConfig({
			...current,
			rowGaps
		});
		this._refreshSelections();
	}
	_refreshSelections() {
		this._selectionRenderService.resetSelectionsByModelData(this._sheetsSelectionsService.getCurrentSelections());
	}
	_closeFloatingControls() {
		const menuPopup = this._menuPopup;
		this._menuPopup = null;
		menuPopup === null || menuPopup === void 0 || menuPopup.dispose();
		this._shape.setOpenedMenuTableId(null);
		this._shape.setHoveredInsertRegion(null);
		this._shape.setHoveredRegion(null);
	}
	_getLocalPoint(evt) {
		const skeleton = this._sheetSkeletonManagerService.getCurrentSkeleton();
		if (skeleton) return getTransformCoord(evt.offsetX, evt.offsetY, this._context.scene, skeleton);
		return {
			x: evt.offsetX,
			y: evt.offsetY
		};
	}
};
SheetTableControlsRenderController = __decorate([
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, Inject(SheetSkeletonManagerService)),
	__decorateParam(3, ICommandService),
	__decorateParam(4, Inject(TableManager)),
	__decorateParam(5, Inject(SheetRangeThemeModel)),
	__decorateParam(6, Inject(WorkbookPermissionService)),
	__decorateParam(7, Inject(IPermissionService)),
	__decorateParam(8, Inject(SheetsSelectionsService)),
	__decorateParam(9, ISheetSelectionRenderService),
	__decorateParam(10, Inject(SheetTableThemeUIController)),
	__decorateParam(11, Inject(LocaleService)),
	__decorateParam(12, IContextService),
	__decorateParam(13, IDialogService),
	__decorateParam(14, ISidebarService),
	__decorateParam(15, Inject(SheetCanvasPopManagerService))
], SheetTableControlsRenderController);

//#endregion
//#region src/views/widgets/table-filter-button.shape.ts
const FILTER_ICON_SIZE = 16;
const FILTER_TRIGGER_HOVER_RADIUS = 4;
let SheetsTableFilterButtonShape = class SheetsTableFilterButtonShape extends Shape {
	constructor(key, props, _commandService) {
		super(key, props);
		this._commandService = _commandService;
		_defineProperty(this, "_cellWidth", 0);
		_defineProperty(this, "_cellHeight", 0);
		_defineProperty(this, "_filterParams", void 0);
		_defineProperty(this, "_iconColor", "#fff");
		_defineProperty(this, "_hoverBackground", "rgba(255, 255, 255, 0.92)");
		_defineProperty(this, "_hoverIconColor", "#202124");
		_defineProperty(this, "_hovered", false);
		this.setShapeProps(props);
		this.onPointerDown$.subscribeEvent((evt) => this.onPointerDown(evt));
		this.onPointerEnter$.subscribeEvent(() => this.onPointerEnter());
		this.onPointerLeave$.subscribeEvent(() => this.onPointerLeave());
	}
	setShapeProps(props) {
		if (typeof props.cellHeight !== "undefined") this._cellHeight = props.cellHeight;
		if (typeof props.cellWidth !== "undefined") this._cellWidth = props.cellWidth;
		if (typeof props.filterParams !== "undefined") this._filterParams = props.filterParams;
		if (typeof props.iconColor !== "undefined") this._iconColor = props.iconColor;
		if (typeof props.hoverBackground !== "undefined") this._hoverBackground = props.hoverBackground;
		if (typeof props.hoverIconColor !== "undefined") this._hoverIconColor = props.hoverIconColor;
		this.transformByState({
			width: props.width,
			height: props.height
		});
	}
	_draw(ctx) {
		const cellHeight = this._cellHeight;
		const cellWidth = this._cellWidth;
		const left = 16 - cellWidth;
		const top = 16 - cellHeight;
		ctx.save();
		const cellRegion = new Path2D();
		cellRegion.rect(left, top, cellWidth, cellHeight);
		ctx.clip(cellRegion);
		if (this._hovered) {
			var _ctx$roundRect;
			ctx.save();
			ctx.fillStyle = this._hoverBackground;
			ctx.beginPath();
			(_ctx$roundRect = ctx.roundRect) === null || _ctx$roundRect === void 0 || _ctx$roundRect.call(ctx, 0, 0, 16, 16, FILTER_TRIGGER_HOVER_RADIUS);
			if (!ctx.roundRect) ctx.rect(0, 0, 16, 16);
			ctx.fill();
			ctx.restore();
		}
		this._drawChevron(ctx, this._hovered ? this._hoverIconColor : this._iconColor);
		ctx.restore();
	}
	_drawChevron(ctx, color) {
		const centerX = 16 / 2;
		const centerY = 16 / 2;
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 1.8;
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.moveTo(centerX - 4.5, centerY - 2.5);
		ctx.lineTo(centerX, 10);
		ctx.lineTo(12.5, centerY - 2.5);
		ctx.stroke();
		ctx.restore();
	}
	onPointerDown(evt) {
		if (evt.button === 2) return;
		const { row, col, unitId, subUnitId, tableId } = this._filterParams;
		if (!this._commandService.hasCommand(OpenTableFilterPanelOperation.id)) return;
		setTimeout(() => {
			const cmdParams = {
				row,
				col,
				unitId,
				subUnitId,
				tableId
			};
			this._commandService.executeCommand(OpenTableFilterPanelOperation.id, cmdParams);
		}, 200);
	}
	onPointerEnter() {
		this._hovered = true;
		this.makeDirty(true);
	}
	onPointerLeave() {
		this._hovered = false;
		this.makeDirty(true);
	}
};
SheetsTableFilterButtonShape = __decorate([__decorateParam(2, ICommandService)], SheetsTableFilterButtonShape);

//#endregion
//#region src/controllers/sheet-table-filter-button-render.controller.ts
const SHEETS_FILTER_BUTTON_Z_INDEX = 5e3;
const computeIconTop = (startY, endY, cellHeight, verticalAlign) => {
	switch (verticalAlign) {
		case VerticalAlign.TOP: return startY + 1;
		case VerticalAlign.MIDDLE: return startY + Math.max(0, (cellHeight - 16) / 2);
		case VerticalAlign.BOTTOM:
		default: return endY - 16 - 1;
	}
};
let SheetsTableFilterButtonRenderController = class SheetsTableFilterButtonRenderController extends RxDisposable {
	constructor(_context, _injector, _sheetSkeletonManagerService, _sheetInterceptorService, _tableManager, _rangeThemeModel, _commandService) {
		super();
		this._context = _context;
		this._injector = _injector;
		this._sheetSkeletonManagerService = _sheetSkeletonManagerService;
		this._sheetInterceptorService = _sheetInterceptorService;
		this._tableManager = _tableManager;
		this._rangeThemeModel = _rangeThemeModel;
		this._commandService = _commandService;
		_defineProperty(this, "_buttonRenderDisposable", null);
		_defineProperty(this, "_tableFilterButtonShapes", []);
		this._initRenderer();
		this._initCommandExecuted();
	}
	dispose() {
		super.dispose();
		this._disposeRendering();
	}
	_initRenderer() {
		const tableManager = this._tableManager;
		this._sheetSkeletonManagerService.currentSkeleton$.pipe(switchMap((skeletonParams) => {
			var _workbook$getActiveSh;
			if (!skeletonParams) return of(null);
			const { unit: workbook, unitId } = this._context;
			const worksheetId = ((_workbook$getActiveSh = workbook.getActiveSheet()) === null || _workbook$getActiveSh === void 0 ? void 0 : _workbook$getActiveSh.getSheetId()) || "";
			const getParams = () => ({
				unitId,
				worksheetId,
				tableFilterRanges: this._tableManager.getSheetFilterRangeWithState(workbook.getUnitId(), worksheetId),
				skeleton: skeletonParams.skeleton
			});
			return merge$1(tableManager.tableAdd$, tableManager.tableNameChanged$, tableManager.tableRangeChanged$, tableManager.tableThemeChanged$, tableManager.tableDelete$, tableManager.tableFilterChanged$).pipe(map(() => getParams()), startWith(getParams()));
		}), takeUntil(this.dispose$)).subscribe((renderParams) => {
			this._disposeRendering();
			if (!renderParams || !renderParams.tableFilterRanges) return;
			this._renderButtons(renderParams);
		});
	}
	_initCommandExecuted() {
		this.disposeWithMe(this._commandService.onCommandExecuted((command) => {
			var _workbook$getActiveSh2;
			if (command.id !== SetVerticalTextAlignCommand.id) return;
			const { unit: workbook, unitId } = this._context;
			const worksheetId = ((_workbook$getActiveSh2 = workbook.getActiveSheet()) === null || _workbook$getActiveSh2 === void 0 ? void 0 : _workbook$getActiveSh2.getSheetId()) || "";
			const skeleton = this._sheetSkeletonManagerService.getCurrentSkeleton();
			if (!skeleton) return;
			const renderParams = {
				unitId,
				worksheetId,
				tableFilterRanges: this._tableManager.getSheetFilterRangeWithState(workbook.getUnitId(), worksheetId),
				skeleton
			};
			this._disposeRendering();
			if (!renderParams || !renderParams.tableFilterRanges) return;
			this._renderButtons(renderParams);
		}));
	}
	_renderButtons(params) {
		const { tableFilterRanges, unitId, skeleton, worksheetId } = params;
		const { unit: workbook, scene } = this._context;
		const worksheet = workbook.getSheetBySheetId(worksheetId);
		if (!worksheet) return;
		for (const { range, states, tableId } of tableFilterRanges) {
			var _this$_rangeThemeMode, _headerStyle$cl, _headerStyle$bg;
			const { startRow, startColumn, endColumn } = range;
			const table = this._tableManager.getTableById(unitId, tableId);
			const headerStyle = table ? (_this$_rangeThemeMode = this._rangeThemeModel.getRangeThemeStyle(unitId, table.getTableStyleId())) === null || _this$_rangeThemeMode === void 0 ? void 0 : _this$_rangeThemeMode.getHeaderRowStyle() : null;
			const iconColor = (headerStyle === null || headerStyle === void 0 || (_headerStyle$cl = headerStyle.cl) === null || _headerStyle$cl === void 0 ? void 0 : _headerStyle$cl.rgb) ?? "#fff";
			const hoverIconColor = (headerStyle === null || headerStyle === void 0 || (_headerStyle$bg = headerStyle.bg) === null || _headerStyle$bg === void 0 ? void 0 : _headerStyle$bg.rgb) ?? "#202124";
			this._interceptCellContent(unitId, worksheetId, range);
			for (let col = startColumn; col <= endColumn; col++) {
				const key = `sheets-table-filter-button-${startRow}-${col}`;
				const startPosition = getCoordByCell(startRow, col, scene, skeleton);
				const cellStyle = worksheet.getCellStyle(startRow, col);
				const verticalAlign = (cellStyle === null || cellStyle === void 0 ? void 0 : cellStyle.vt) || VerticalAlign.BOTTOM;
				const { startX, startY, endX, endY } = startPosition;
				const cellWidth = endX - startX;
				const cellHeight = endY - startY;
				if (cellHeight <= 1 || cellWidth <= 1) continue;
				const state = states[col - startColumn];
				const props = {
					left: endX - 16 - 1,
					top: computeIconTop(startY, endY, cellHeight, verticalAlign),
					height: 16,
					width: 16,
					zIndex: SHEETS_FILTER_BUTTON_Z_INDEX,
					iconColor,
					hoverBackground: iconColor,
					hoverIconColor,
					cellHeight,
					cellWidth,
					filterParams: {
						unitId,
						subUnitId: worksheetId,
						row: startRow,
						col,
						buttonState: state,
						tableId
					}
				};
				const buttonShape = this._injector.createInstance(SheetsTableFilterButtonShape, key, props);
				this._tableFilterButtonShapes.push(buttonShape);
			}
		}
		scene.addObjects(this._tableFilterButtonShapes);
		scene.makeDirty();
	}
	_interceptCellContent(workbookId, worksheetId, range) {
		const { startRow, startColumn, endColumn } = range;
		this._buttonRenderDisposable = this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
			effect: InterceptorEffectEnum.Style,
			handler: (cell, pos, next) => {
				const { row, col, unitId, subUnitId } = pos;
				if (unitId !== workbookId || subUnitId !== worksheetId || row !== startRow || col < startColumn || col > endColumn) return next(cell);
				if (!cell || cell === pos.rawData) cell = { ...pos.rawData };
				cell.fontRenderExtension = {
					...cell === null || cell === void 0 ? void 0 : cell.fontRenderExtension,
					rightOffset: 16 + 1 + 2
				};
				return next(cell);
			},
			priority: 10
		});
	}
	_disposeRendering() {
		var _this$_buttonRenderDi;
		this._tableFilterButtonShapes.forEach((s) => s.dispose());
		(_this$_buttonRenderDi = this._buttonRenderDisposable) === null || _this$_buttonRenderDi === void 0 || _this$_buttonRenderDi.dispose();
		this._buttonRenderDisposable = null;
		this._tableFilterButtonShapes = [];
	}
};
SheetsTableFilterButtonRenderController = __decorate([
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, Inject(SheetSkeletonManagerService)),
	__decorateParam(3, Inject(SheetInterceptorService)),
	__decorateParam(4, Inject(TableManager)),
	__decorateParam(5, Inject(SheetRangeThemeModel)),
	__decorateParam(6, ICommandService)
], SheetsTableFilterButtonRenderController);

//#endregion
//#region src/controllers/sheet-table-render.controller.ts
let SheetsTableRenderController = class SheetsTableRenderController extends RxDisposable {
	constructor(_context, _injector, _sheetSkeletonManagerService, _tableManager, _sheetTableThemeUIController) {
		super();
		this._context = _context;
		this._injector = _injector;
		this._sheetSkeletonManagerService = _sheetSkeletonManagerService;
		this._tableManager = _tableManager;
		this._sheetTableThemeUIController = _sheetTableThemeUIController;
		this._initListener();
	}
	_dirtySkeleton() {
		var _this$_context$mainCo;
		(_this$_context$mainCo = this._context.mainComponent) === null || _this$_context$mainCo === void 0 || _this$_context$mainCo.makeDirty();
		const currentParam = this._sheetSkeletonManagerService.getCurrentParam();
		if (currentParam) {
			const param = {
				...currentParam,
				dirty: true
			};
			this._sheetSkeletonManagerService.reCalculate(param);
		}
	}
	_initListener() {
		const tableManager = this._tableManager;
		const dirtySkeleton = this._dirtySkeleton.bind(this);
		this.disposeWithMe(merge$1(tableManager.tableAdd$, tableManager.tableDelete$, tableManager.tableNameChanged$, tableManager.tableRangeChanged$, tableManager.tableThemeChanged$, tableManager.tableFilterChanged$, tableManager.tableInitStatus$, this._sheetTableThemeUIController.refreshTable$).subscribe(dirtySkeleton));
	}
};
SheetsTableRenderController = __decorate([
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, Inject(SheetSkeletonManagerService)),
	__decorateParam(3, Inject(TableManager)),
	__decorateParam(4, Inject(SheetTableThemeUIController))
], SheetsTableRenderController);

//#endregion
//#region src/controllers/sheet-table-selection.controller.ts
let SheetTableSelectionController = class SheetTableSelectionController extends Disposable {
	constructor(_sheetInterceptorService, _univerInstanceService, _tableManager) {
		super();
		this._sheetInterceptorService = _sheetInterceptorService;
		this._univerInstanceService = _univerInstanceService;
		this._tableManager = _tableManager;
		this._initSelectionChange();
	}
	_initSelectionChange() {
		this.disposeWithMe(this._sheetInterceptorService.interceptCommand({ getMutations: (command) => {
			if (command.id === SelectAllCommand.id) {
				const target = getSheetCommandTarget(this._univerInstanceService);
				if (!target) return {
					redos: [],
					undos: []
				};
				const { range } = command.params;
				const { unitId, subUnitId, worksheet } = target;
				const overlapTable = this._tableManager.getTablesBySubunitId(unitId, subUnitId).find((table) => {
					const tableRange = table.getRange();
					return Rectangle.contains(tableRange, range);
				});
				if (overlapTable) {
					const tableRange = overlapTable.getRange();
					const tableRangeWithoutHeader = {
						...tableRange,
						startRow: tableRange.startRow + 1
					};
					if (Rectangle.equals(tableRange, range)) return {
						undos: [],
						redos: []
					};
					else if (Rectangle.equals(tableRangeWithoutHeader, range)) return {
						undos: [],
						redos: [{
							id: SetSelectionsOperation.id,
							params: {
								unitId,
								subUnitId,
								selections: [{
									range: tableRange,
									primary: getPrimaryForRange(tableRange, worksheet)
								}]
							}
						}]
					};
					else return {
						undos: [],
						redos: [{
							id: SetSelectionsOperation.id,
							params: {
								unitId,
								subUnitId,
								selections: [{
									range: tableRangeWithoutHeader,
									primary: getPrimaryForRange(tableRangeWithoutHeader, worksheet)
								}]
							}
						}]
					};
				}
			}
			return {
				redos: [],
				undos: []
			};
		} }));
	}
};
SheetTableSelectionController = __decorate([
	__decorateParam(0, Inject(SheetInterceptorService)),
	__decorateParam(1, Inject(IUniverInstanceService)),
	__decorateParam(2, Inject(TableManager))
], SheetTableSelectionController);

//#endregion
//#region src/menu/sheet-table-menu.controller.ts
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
let SheetTableMenuController = class SheetTableMenuController extends Disposable {
	constructor(_menuManagerService) {
		super();
		this._menuManagerService = _menuManagerService;
		this._initMenu();
	}
	_initMenu() {
		this._menuManagerService.mergeMenu(menuSchema);
	}
};
SheetTableMenuController = __decorate([__decorateParam(0, Inject(IMenuManagerService))], SheetTableMenuController);

//#endregion
//#region src/plugin.ts
let UniverSheetsTableUIPlugin = class UniverSheetsTableUIPlugin extends Plugin {
	constructor(_config = defaultPluginConfig, _injector, _commandService, _configService, _renderManagerService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._commandService = _commandService;
		this._configService = _configService;
		this._renderManagerService = _renderManagerService;
		const { menu, ...rest } = merge({}, defaultPluginConfig, this._config);
		if (menu) this._configService.setConfig("menu", menu, { merge: true });
		this._configService.setConfig(SHEETS_TABLE_UI_PLUGIN_CONFIG_KEY, rest);
		this._initRegisterCommand();
	}
	onStarting() {
		this._injector.add([ComponentsController]);
		this._injector.get(ComponentsController);
		registerDependencies(this._injector, [
			[SheetsTableComponentController],
			[SheetsTableUiService],
			[SheetTableMenuController],
			[SheetTableThemeUIController],
			[SheetTableSelectionController]
		]);
	}
	onReady() {
		touchDependencies(this._injector, [
			[SheetsTableComponentController],
			[SheetsTableUiService],
			[SheetTableMenuController],
			[SheetTableThemeUIController],
			[SheetTableSelectionController]
		]);
	}
	onRendered() {
		this._registerRenderModules();
	}
	_registerRenderModules() {
		const renderDependencies = [];
		if (this._config.hideAnchor !== true) renderDependencies.push([SheetTableControlsRenderController]);
		renderDependencies.push([SheetsTableFilterButtonRenderController], [SheetsTableRenderController]);
		renderDependencies.forEach((m) => {
			this.disposeWithMe(this._renderManagerService.registerRenderModule(UniverInstanceType.UNIVER_SHEET, m));
		});
	}
	_initRegisterCommand() {
		[OpenTableFilterPanelOperation, OpenTableSelectorOperation].forEach((m) => this._commandService.registerCommand(m));
	}
};
_defineProperty(UniverSheetsTableUIPlugin, "pluginName", PLUGIN_NAME);
_defineProperty(UniverSheetsTableUIPlugin, "packageName", name);
_defineProperty(UniverSheetsTableUIPlugin, "version", version);
_defineProperty(UniverSheetsTableUIPlugin, "type", UniverInstanceType.UNIVER_SHEET);
UniverSheetsTableUIPlugin = __decorate([
	DependentOn(UniverRenderEnginePlugin, UniverSheetsPlugin, UniverSheetsTablePlugin, UniverSheetsUIPlugin),
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, Inject(ICommandService)),
	__decorateParam(3, IConfigService),
	__decorateParam(4, IRenderManagerService)
], UniverSheetsTableUIPlugin);

//#endregion
export { menuSchema as SheetsTableUIMenuSchema, UniverSheetsTableUIPlugin };