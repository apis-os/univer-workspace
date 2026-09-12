import { BuildTextUtils, ColorKit, CommandType, CustomRangeType, DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY, DOCS_NORMAL_EDITOR_UNIT_ID_KEY, DataStreamTreeTokenType, DataValidationType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IContextService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, ObjectMatrix, Plugin, RANGE_TYPE, Range, Rectangle, ThemeService, Tools, UniverInstanceType, generateRandomId, isSafeUrl, isValidRange, merge } from "@univerjs/core";
import { AUTO_FILL_APPLY_TYPE, AutoFillTools, ClearSelectionAllCommand, ClearSelectionContentCommand, ClearSelectionFormatCommand, IAutoFillService, RangeProtectionPermissionEditPoint, RangeProtectionPermissionViewPoint, SetSelectionsOperation, SetWorksheetActiveOperation, SheetPermissionCheckController, SheetsSelectionsService, UniverSheetsPlugin, WorkbookCopyPermission, WorkbookEditablePermission, WorkbookViewPermission, WorksheetCopyPermission, WorksheetEditPermission, WorksheetInsertHyperlinkPermission, WorksheetSetCellValuePermission, WorksheetViewPermission, getSheetCommandTarget, rangeToDiscreteRange } from "@univerjs/sheets";
import { COPY_TYPE, HoverManagerService, HoverRenderController, IEditorBridgeService, IMarkSelectionService, ISheetClipboardService, PREDEFINED_HOOK_NAME_PASTE, ScrollToRangeOperation, SheetCanvasPopManagerService, SheetSkeletonManagerService, UniverSheetsUIPlugin, getCurrentRangeDisable$, getCustomRangePosition, getEditingCustomRangePosition, getRepeatRange, virtualizeDiscreteRanges, whenSheetEditorFocused } from "@univerjs/sheets-ui";
import { DocSelectionManagerService, UniverDocsPlugin } from "@univerjs/docs";
import { DocEventManagerService, DocSelectionRenderService, UniverDocsUIPlugin, calcDocRangePositions } from "@univerjs/docs-ui";
import { IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, IDialogService, IMenuManagerService, IMessageService, IShortcutService, IconManager, KeyCode, MOBILE_UI_MODE, MenuItemType, MetaKeys, RibbonInsertGroup, getMenuHiddenObservable, useDependency, useEvent, useObservable } from "@univerjs/ui";
import { BehaviorSubject, Subject, combineLatest, debounceTime, map, of, switchMap } from "rxjs";
import { ActionRow, Button, ConfigContext, FormLayout, Input, MessageType, MobileActionRow, Select, Tooltip, borderClassName, clsx } from "@univerjs/design";
import { IDefinedNamesService, UniverFormulaEnginePlugin, deserializeRangeWithSheet, serializeRange, serializeRangeToRefString, serializeRangeWithSheet } from "@univerjs/engine-formula";
import { RangeSelector } from "@univerjs/sheets-formula-ui";
import { AddHyperLinkCommand, AddHyperLinkMutation, AddRichHyperLinkCommand, CancelHyperLinkCommand, CancelRichHyperLinkCommand, ERROR_RANGE, HyperLinkModel, RemoveHyperLinkMutation, SheetHyperLinkType, SheetsHyperLinkParserService, UniverSheetsHyperLinkPlugin, UpdateHyperLinkCommand, UpdateRichHyperLinkCommand } from "@univerjs/sheets-hyper-link";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AllBorderIcon, CopyIcon, LinkIcon, SheetsMultiIcon, UnlinkIcon, WriteIcon } from "@univerjs/icons";
import { SheetDataValidationModel } from "@univerjs/sheets-data-validation";

//#region src/common/util.ts
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
function isLegalLink(link) {
	return Tools.isLegalUrl(link);
}
function hasProtocol(urlString) {
	return /^[a-zA-Z]+:\/\//.test(urlString);
}
function isEmail(url) {
	return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(url);
}
function serializeUrl(urlStr) {
	if (isLegalLink(urlStr)) {
		const transformedUrl = hasProtocol(urlStr) ? urlStr : isEmail(urlStr) ? `mailto://${urlStr}` : `http://${urlStr}`;
		let url;
		try {
			url = new URL(transformedUrl);
		} catch {
			return urlStr;
		}
		if (url.hostname === location.hostname && url.port === location.port && url.protocol === location.protocol && url.pathname === location.pathname && url.hash && !url.search) return url.hash;
		return transformedUrl;
	}
	return urlStr;
}

//#endregion
//#region src/config/config.ts
const SHEETS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY = "sheets-hyper-link-ui.config";
const configSymbol = Symbol(SHEETS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {};

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
//#region src/services/resolver.service.ts
function getContainRange(range, worksheet) {
	const mergedCells = worksheet.getMergeData();
	const maxCol = worksheet.getMaxColumns() - 1;
	const maxRow = worksheet.getMaxRows() - 1;
	if (maxCol < range.endColumn) range.endColumn = maxCol;
	if (maxRow < range.endRow) range.endRow = maxRow;
	if (range.rangeType === RANGE_TYPE.COLUMN || RANGE_TYPE.ROW) return range;
	const relativeCells = [];
	mergedCells.forEach((cell) => {
		if (Rectangle.intersects(range, cell)) relativeCells.push(cell);
	});
	return Rectangle.realUnion(range, ...relativeCells);
}
let SheetsHyperLinkResolverService = class SheetsHyperLinkResolverService {
	constructor(_univerInstanceService, _commandService, _definedNamesService, _messageService, _localeService, _configService) {
		this._univerInstanceService = _univerInstanceService;
		this._commandService = _commandService;
		this._definedNamesService = _definedNamesService;
		this._messageService = _messageService;
		this._localeService = _localeService;
		this._configService = _configService;
	}
	navigate(info) {
		switch (info.type) {
			case SheetHyperLinkType.URL:
				this.navigateToOtherWebsite(info.url);
				break;
			default: this._navigateToUniver(info.searchObj);
		}
	}
	_navigateToUniver(params) {
		const { gid, range, rangeid } = params;
		const workbook = this._univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET);
		if (!workbook) return;
		const unitId = workbook.getUnitId();
		if (rangeid) {
			const item = this._definedNamesService.getValueById(unitId, rangeid);
			if (!item) return;
			const { formulaOrRefString } = item;
			const worksheet = this._definedNamesService.getWorksheetByRef(unitId, formulaOrRefString);
			if (!worksheet) {
				this._messageService.show({
					content: this._localeService.t("sheets-hyper-link-ui.message.refError"),
					type: MessageType.Error
				});
				return;
			}
			if (worksheet.isSheetHidden()) {
				this._messageService.show({
					content: this._localeService.t("sheets-hyper-link-ui.message.hiddenSheet"),
					type: MessageType.Error
				});
				return;
			}
			this.navigateToDefineName(unitId, rangeid);
		}
		if (!gid) return;
		if (range) {
			const rangeInfo = deserializeRangeWithSheet(range);
			if (isValidRange(rangeInfo.range) && range !== ERROR_RANGE) this.navigateToRange(unitId, gid, rangeInfo.range);
			return;
		}
		this.navigateToSheetById(unitId, gid);
	}
	async navigateToRange(unitId, subUnitId, range, forceTop) {
		const worksheet = await this.navigateToSheetById(unitId, subUnitId);
		if (worksheet) {
			const realRange = getContainRange(range, worksheet);
			await this._commandService.executeCommand(SetSelectionsOperation.id, {
				unitId,
				subUnitId,
				selections: [{
					range: realRange,
					primary: null
				}]
			});
			await this._commandService.executeCommand(ScrollToRangeOperation.id, {
				range: realRange,
				forceTop
			});
		}
	}
	async navigateToSheetById(unitId, subUnitId) {
		const workbook = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_SHEET);
		if (!workbook) return false;
		const worksheet = workbook.getActiveSheet();
		if (!worksheet) return false;
		if (worksheet.getSheetId() === subUnitId) return worksheet;
		const targetSheet = workbook.getSheetBySheetId(subUnitId);
		if (!targetSheet) {
			this._messageService.show({
				content: this._localeService.t("sheets-hyper-link-ui.message.noSheet"),
				type: MessageType.Error
			});
			return false;
		}
		if (workbook.getHiddenWorksheets().indexOf(subUnitId) > -1) {
			this._messageService.show({
				content: this._localeService.t("sheets-hyper-link-ui.message.hiddenSheet"),
				type: MessageType.Error
			});
			return false;
		}
		if (await this._commandService.executeCommand(SetWorksheetActiveOperation.id, {
			unitId,
			subUnitId
		})) return targetSheet;
		return false;
	}
	async navigateToDefineName(unitId, rangeId) {
		this._definedNamesService.focusRange(unitId, rangeId);
		return true;
	}
	async navigateToOtherWebsite(url) {
		var _config$urlHandler;
		if (!isSafeUrl(url)) return;
		const config = this._configService.getConfig(SHEETS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY);
		if (config === null || config === void 0 || (_config$urlHandler = config.urlHandler) === null || _config$urlHandler === void 0 ? void 0 : _config$urlHandler.navigateToOtherWebsite) return config.urlHandler.navigateToOtherWebsite(url);
		window.open(url, "_blank", "noopener noreferrer");
	}
};
SheetsHyperLinkResolverService = __decorate([
	__decorateParam(0, IUniverInstanceService),
	__decorateParam(1, ICommandService),
	__decorateParam(2, IDefinedNamesService),
	__decorateParam(3, IMessageService),
	__decorateParam(4, Inject(LocaleService)),
	__decorateParam(5, IConfigService)
], SheetsHyperLinkResolverService);

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
//#region src/services/side-panel.service.ts
var SheetsHyperLinkSidePanelService = class extends Disposable {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "_customHyperLinks", /* @__PURE__ */ new Map());
	}
	isBuiltInLinkType(type) {
		return type !== SheetHyperLinkType.URL;
	}
	getOptions() {
		return Array.from(this._customHyperLinks.values()).map(({ option }) => option);
	}
	findCustomHyperLink(link) {
		return Array.from(this._customHyperLinks.values()).find((item) => item.match(link));
	}
	registerCustomHyperLink(customHyperLink) {
		this._customHyperLinks.set(customHyperLink.type, customHyperLink);
	}
	getCustomHyperLink(type) {
		return this._customHyperLinks.get(type);
	}
	removeCustomHyperLink(type) {
		const { _customHyperLinks } = this;
		_customHyperLinks.delete(type);
	}
	dispose() {
		super.dispose();
		this._customHyperLinks.clear();
	}
};

//#endregion
//#region src/views/CellLinkEdit/utils.ts
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
function isBlankInput(value) {
	return value.trim().length === 0;
}
function resolveRangePayload(rangeText, defaultSheetName) {
	const [range] = rangeText.split(",").map(deserializeRangeWithSheet);
	if (!range || !isValidRange(range.range)) return "";
	if (!range.sheetName) range.sheetName = defaultSheetName;
	return serializeRangeToRefString(range);
}

//#endregion
//#region src/views/CellLinkEdit.tsx
const CellLinkEdit = () => {
	const [id, setId] = useState("");
	const [hide, setHide] = useState(false);
	const [display, _setDisplay] = useState("");
	const [showLabel, setShowLabel] = useState(true);
	const [type, setType] = useState(SheetHyperLinkType.URL);
	const [payload, setPayload] = useState("");
	const localeService = useDependency(LocaleService);
	const { mobile } = useContext(ConfigContext);
	const definedNameService = useDependency(IDefinedNamesService);
	const editorBridgeService = useDependency(IEditorBridgeService);
	const univerInstanceService = useDependency(IUniverInstanceService);
	const popupService = useDependency(SheetsHyperLinkPopupService);
	const editing = useObservable(popupService.currentEditing$);
	const parserService = useDependency(SheetsHyperLinkParserService);
	const resolverService = useDependency(SheetsHyperLinkResolverService);
	const commandService = useDependency(ICommandService);
	const sidePanelService = useDependency(SheetsHyperLinkSidePanelService);
	const sidePanelOptions = useMemo(() => sidePanelService.getOptions(), [sidePanelService]);
	const renderManagerService = useDependency(IRenderManagerService);
	const markSelectionService = useDependency(IMarkSelectionService);
	const textSelectionService = useDependency(DocSelectionManagerService);
	const themeService = useDependency(ThemeService);
	const [selectorDialogVisible, setSelectorDialogVisible] = useState(false);
	const sheetsSelectionService = useDependency(SheetsSelectionsService);
	const selections = useMemo(() => sheetsSelectionService.getCurrentSelections(), []);
	const customHyperLinkSidePanel = useMemo(() => {
		if (sidePanelService.isBuiltInLinkType(type)) return;
		return sidePanelService.getCustomHyperLink(type);
	}, [sidePanelService, type]);
	const [showError, setShowError] = useState(false);
	const [isFocusRangeSelector, setIsFocusRangeSelector] = useState(false);
	const isDisplaySyncedWithPayloadRef = useRef(false);
	const getIsDisplaySyncedWithPayload = useEvent(() => isDisplaySyncedWithPayloadRef.current);
	const setDisplaySyncedWithPayload = useEvent((synced) => {
		isDisplaySyncedWithPayloadRef.current = synced;
	});
	const workbook = univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET);
	const subUnitId = (workbook === null || workbook === void 0 ? void 0 : workbook.getActiveSheet().getSheetId()) || "";
	const setDisplay = useCallback((value) => {
		_setDisplay(value.replaceAll(DataStreamTreeTokenType.CUSTOM_RANGE_START, "").replaceAll(DataStreamTreeTokenType.CUSTOM_RANGE_END, ""));
	}, [_setDisplay]);
	useEffect(() => {
		if ((editing === null || editing === void 0 ? void 0 : editing.row) !== void 0 && editing.col !== void 0) {
			const { customRange, row, col } = editing;
			let { label } = editing;
			if (typeof label === "number") label = `${label}`;
			let link;
			if (customRange) {
				var _customRange$properti;
				link = {
					id: (customRange === null || customRange === void 0 ? void 0 : customRange.rangeId) ?? "",
					display: label ?? "",
					payload: (customRange === null || customRange === void 0 || (_customRange$properti = customRange.properties) === null || _customRange$properti === void 0 ? void 0 : _customRange$properti.url) ?? "",
					row,
					column: col
				};
			} else if (editing.type === "viewing") {
				var _cell$p, _cell$p2, _range$properties2;
				const workbook = univerInstanceService.getUnit(editing.unitId);
				const worksheet = workbook === null || workbook === void 0 ? void 0 : workbook.getSheetBySheetId(editing.subUnitId);
				const cell = worksheet === null || worksheet === void 0 ? void 0 : worksheet.getCellRaw(editing.row, editing.col);
				const range = cell === null || cell === void 0 || (_cell$p = cell.p) === null || _cell$p === void 0 || (_cell$p = _cell$p.body) === null || _cell$p === void 0 || (_cell$p = _cell$p.customRanges) === null || _cell$p === void 0 ? void 0 : _cell$p.find((range) => {
					var _range$properties;
					return range.rangeType === CustomRangeType.HYPERLINK && ((_range$properties = range.properties) === null || _range$properties === void 0 ? void 0 : _range$properties.url);
				});
				const cellValue = cell === null || cell === void 0 ? void 0 : cell.v;
				if (cell && (!BuildTextUtils.transform.isEmptyDocument((_cell$p2 = cell.p) === null || _cell$p2 === void 0 || (_cell$p2 = _cell$p2.body) === null || _cell$p2 === void 0 ? void 0 : _cell$p2.dataStream) || Tools.isDefine(cellValue))) setShowLabel(false);
				link = {
					id: "",
					display: "",
					payload: (range === null || range === void 0 || (_range$properties2 = range.properties) === null || _range$properties2 === void 0 ? void 0 : _range$properties2.url) ?? "",
					row,
					column: col
				};
			} else {
				var _BuildTextUtils$custo, _customRange$properti2;
				const doc = univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC);
				const currentSelection = textSelectionService.getActiveTextRange();
				const body = doc === null || doc === void 0 ? void 0 : doc.getBody();
				const selection = currentSelection && body ? currentSelection : null;
				const customRange = selection && ((_BuildTextUtils$custo = BuildTextUtils.customRange.getCustomRangesInterestsWithSelection(selection, (body === null || body === void 0 ? void 0 : body.customRanges) ?? [])) === null || _BuildTextUtils$custo === void 0 ? void 0 : _BuildTextUtils$custo[0]);
				setShowLabel(false);
				link = {
					id: "",
					display: label ?? "",
					payload: (customRange === null || customRange === void 0 || (_customRange$properti2 = customRange.properties) === null || _customRange$properti2 === void 0 ? void 0 : _customRange$properti2.url) ?? "",
					row,
					column: col
				};
			}
			setId(link.id);
			const customLink = sidePanelService.findCustomHyperLink(link);
			if (customLink) {
				const customLinkInfo = customLink.convert(link);
				setType(customLinkInfo.type);
				setPayload(customLinkInfo.payload);
				setDisplay(customLinkInfo.display);
				return;
			}
			setDisplay(link.display);
			const linkInfo = parserService.parseHyperLink(link.payload);
			setType(linkInfo.type === SheetHyperLinkType.INVALID ? SheetHyperLinkType.RANGE : linkInfo.type);
			switch (linkInfo.type) {
				case SheetHyperLinkType.URL:
					setPayload(linkInfo.url);
					if (linkInfo.url === link.display) setDisplaySyncedWithPayload(true);
					break;
				case SheetHyperLinkType.RANGE: {
					var _univerInstanceServic;
					const params = linkInfo.searchObj;
					const payload = serializeRangeWithSheet(params.gid ? ((_univerInstanceServic = univerInstanceService.getUnit(editing.unitId)) === null || _univerInstanceServic === void 0 || (_univerInstanceServic = _univerInstanceServic.getSheetBySheetId(params.gid)) === null || _univerInstanceServic === void 0 ? void 0 : _univerInstanceServic.getName()) ?? "" : "", deserializeRangeWithSheet(params.range).range);
					setPayload(payload);
					if (payload === link.display) setDisplaySyncedWithPayload(true);
					break;
				}
				case SheetHyperLinkType.SHEET: {
					const params = linkInfo.searchObj;
					setPayload(params.gid);
					break;
				}
				case SheetHyperLinkType.DEFINE_NAME: {
					const params = linkInfo.searchObj;
					setPayload(params.rangeid);
					break;
				}
				default:
					setPayload("");
					break;
			}
		}
	}, [
		editing,
		resolverService,
		sidePanelService,
		textSelectionService,
		univerInstanceService
	]);
	useEffect(() => {
		let id = null;
		if (editing && !editing.customRangeId && editing.type === "viewing" && Tools.isDefine(editing.row) && Tools.isDefine(editing.col)) {
			const workbook = univerInstanceService.getUnit(editing.unitId, UniverInstanceType.UNIVER_SHEET);
			const worksheet = workbook === null || workbook === void 0 ? void 0 : workbook.getSheetBySheetId(editing.subUnitId);
			const mergeInfo = worksheet === null || worksheet === void 0 ? void 0 : worksheet.getMergedCell(editing.row, editing.col);
			const color = new ColorKit(themeService.getColorFromTheme("primary.600")).toRgb();
			id = markSelectionService.addShape({
				range: mergeInfo ?? {
					startColumn: editing.col,
					endColumn: editing.col,
					startRow: editing.row,
					endRow: editing.row
				},
				style: {
					fill: `rgb(${color.r}, ${color.g}, ${color.b}, 0.12)`,
					strokeWidth: 1,
					stroke: "#FFBD37",
					widgets: {}
				},
				primary: null
			}, [], -1);
		}
		return () => {
			if (id) markSelectionService.removeShape(id);
		};
	}, [
		editing,
		markSelectionService,
		themeService,
		univerInstanceService
	]);
	useEffect(() => {
		setIsFocusRangeSelector(type === SheetHyperLinkType.RANGE);
	}, [type]);
	useEffect(() => {
		const render = renderManagerService.getRenderUnitById(editorBridgeService.getCurrentEditorId());
		const disposeCollection = new DisposableCollection();
		if (render) {
			const selectionRenderService = render.with(DocSelectionRenderService);
			selectionRenderService.setReserveRangesStatus(true);
			disposeCollection.add(() => {
				selectionRenderService.setReserveRangesStatus(false);
			});
		}
		return () => {
			editorBridgeService.disableForceKeepVisible();
			disposeCollection.dispose();
		};
	}, [editorBridgeService, renderManagerService]);
	useEffect(() => {
		if (isFocusRangeSelector) popupService.setIsKeepVisible(isFocusRangeSelector);
		popupService.setIsKeepVisible(selectorDialogVisible);
		return () => {
			popupService.setIsKeepVisible(false);
		};
	}, [
		isFocusRangeSelector,
		selectorDialogVisible,
		popupService
	]);
	useEffect(() => {
		if (isFocusRangeSelector) {
			editorBridgeService.enableForceKeepVisible();
			return () => {
				editorBridgeService.disableForceKeepVisible();
			};
		}
	}, [isFocusRangeSelector, editorBridgeService]);
	const linkTypeOptions = [
		{
			label: localeService.t("sheets-hyper-link-ui.form.link"),
			value: SheetHyperLinkType.URL
		},
		{
			label: localeService.t("sheets-hyper-link-ui.form.range"),
			value: SheetHyperLinkType.RANGE
		},
		{
			label: localeService.t("sheets-hyper-link-ui.form.worksheet"),
			value: SheetHyperLinkType.SHEET
		},
		{
			label: localeService.t("sheets-hyper-link-ui.form.definedName"),
			value: SheetHyperLinkType.DEFINE_NAME
		},
		...sidePanelOptions
	];
	const handleRangeChange = useEvent((rangeText) => {
		var _workbook$getActiveSh;
		const newPayload = resolveRangePayload(rangeText, (workbook === null || workbook === void 0 || (_workbook$getActiveSh = workbook.getActiveSheet()) === null || _workbook$getActiveSh === void 0 ? void 0 : _workbook$getActiveSh.getName()) || "");
		if (!newPayload) {
			setPayload("");
			return;
		}
		setPayload(newPayload);
		if (getIsDisplaySyncedWithPayload() || !display) {
			setDisplay(newPayload);
			setDisplaySyncedWithPayload(true);
		}
	});
	if (!workbook) return;
	const hiddens = workbook.getHiddenWorksheets();
	const sheetsOption = workbook.getSheets().map((sheet) => ({
		label: sheet.getName(),
		value: sheet.getSheetId()
	})).filter((opt) => hiddens.indexOf(opt.value) === -1);
	const definedNames = Object.values(definedNameService.getDefinedNameMap(workbook.getUnitId()) ?? {}).map((value) => ({
		label: value.name,
		value: value.id
	}));
	const formatUrl = (type, payload) => {
		if (type === SheetHyperLinkType.URL) return serializeUrl(payload);
		if (type === SheetHyperLinkType.RANGE) {
			const info = deserializeRangeWithSheet(payload);
			const worksheet = workbook.getSheetBySheetName(info.sheetName);
			if (worksheet) return `#gid=${worksheet.getSheetId()}&range=${serializeRange(info.range)}`;
		}
		return `#${type}=${payload}`;
	};
	const handleSubmit = async () => {
		if (showLabel && isBlankInput(display) || !payload || type === SheetHyperLinkType.URL && !isLegalLink(payload)) {
			setShowError(true);
			return;
		}
		if (editing) if (id) {
			const commandId = editing.type === "editing" ? UpdateRichHyperLinkCommand.id : UpdateHyperLinkCommand.id;
			await commandService.executeCommand(commandId, {
				id,
				unitId: editing.unitId,
				subUnitId: editing.subUnitId,
				payload: {
					display: showLabel ? display : "",
					payload: formatUrl(type, payload)
				},
				row: editing.row,
				column: editing.col,
				documentId: editorBridgeService.getCurrentEditorId()
			});
		} else {
			const commandId = editing.type === "editing" ? AddRichHyperLinkCommand.id : AddHyperLinkCommand.id;
			await commandService.executeCommand(commandId, {
				unitId: editing.unitId,
				subUnitId: editing.subUnitId,
				link: {
					id: generateRandomId(),
					row: editing.row,
					column: editing.col,
					payload: formatUrl(type, payload),
					display: showLabel ? display : ""
				},
				documentId: editorBridgeService.getCurrentEditorId()
			});
		}
		if ((editing === null || editing === void 0 ? void 0 : editing.type) === "viewing") {
			await commandService.executeCommand(SetWorksheetActiveOperation.id, {
				unitId: editing.unitId,
				subUnitId: editing.subUnitId
			});
			const GAP = 1;
			await commandService.executeCommand(ScrollToRangeOperation.id, { range: {
				startRow: Math.max(editing.row - GAP, 0),
				endRow: editing.row + GAP,
				startColumn: Math.max(editing.col - GAP, 0),
				endColumn: editing.col + GAP
			} });
		}
		commandService.executeCommand(CloseHyperLinkPopupOperation.id);
	};
	if (!editing) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: clsx("univer-box-border univer-bg-gray-0 dark:!univer-bg-gray-900", mobile ? "univer-w-full univer-p-0" : clsx("univer-w-[296px] univer-rounded-xl univer-p-4 univer-shadow-md", borderClassName)),
		children: [
			showLabel ? /* @__PURE__ */ jsx(FormLayout, {
				label: localeService.t("sheets-hyper-link-ui.form.label"),
				error: showError && isBlankInput(display) ? localeService.t("sheets-hyper-link-ui.form.inputError") : "",
				children: /* @__PURE__ */ jsx(Input, {
					value: display,
					onChange: (v) => {
						setDisplay(v);
						setDisplaySyncedWithPayload(false);
					},
					placeholder: localeService.t("sheets-hyper-link-ui.form.labelPlaceholder"),
					autoFocus: true,
					onKeyDown: (e) => {
						if (e.keyCode === KeyCode.ENTER) handleSubmit();
					}
				})
			}) : null,
			/* @__PURE__ */ jsx(FormLayout, {
				label: localeService.t("sheets-hyper-link-ui.form.type"),
				children: /* @__PURE__ */ jsx(Select, {
					className: "univer-w-full",
					options: linkTypeOptions,
					value: type,
					onChange: (newType) => {
						setType(newType);
						setPayload("");
					}
				})
			}),
			type === SheetHyperLinkType.URL && /* @__PURE__ */ jsx(FormLayout, {
				error: showError ? !payload ? localeService.t("sheets-hyper-link-ui.form.inputError") : !isLegalLink(payload) ? localeService.t("sheets-hyper-link-ui.form.linkError") : "" : "",
				children: /* @__PURE__ */ jsx(Input, {
					value: payload,
					onChange: (newLink) => {
						setPayload(newLink);
						if (newLink && (getIsDisplaySyncedWithPayload() || !display || display === newLink)) {
							setDisplay(newLink);
							setDisplaySyncedWithPayload(true);
						}
					},
					placeholder: localeService.t("sheets-hyper-link-ui.form.linkPlaceholder"),
					autoFocus: true,
					onKeyDown: (e) => {
						if (e.keyCode === KeyCode.ENTER) handleSubmit();
					}
				})
			}),
			type === SheetHyperLinkType.RANGE && /* @__PURE__ */ jsx(FormLayout, {
				error: showError && !payload ? localeService.t("sheets-hyper-link-ui.form.inputError") : "",
				children: /* @__PURE__ */ jsx(RangeSelector, {
					unitId: workbook.getUnitId(),
					subUnitId,
					maxRangeCount: 1,
					supportAcrossSheet: true,
					initialValue: payload,
					resetRange: selections,
					onChange: (_, text) => handleRangeChange(text),
					onRangeSelectorDialogVisibleChange: async (visible) => {
						setSelectorDialogVisible(visible);
						if (visible) {
							if (editing.type !== "viewing") editorBridgeService.enableForceKeepVisible();
							setHide(true);
						} else {
							await resolverService.navigateToRange(editing.unitId, editing.subUnitId, {
								startRow: editing.row,
								endRow: editing.row,
								startColumn: editing.col,
								endColumn: editing.col
							}, true);
							editorBridgeService.disableForceKeepVisible();
							setHide(false);
						}
					},
					onFocusChange: (focus) => setIsFocusRangeSelector(focus)
				})
			}),
			type === SheetHyperLinkType.SHEET && /* @__PURE__ */ jsx(FormLayout, {
				error: showError && !payload ? localeService.t("sheets-hyper-link-ui.form.selectError") : "",
				children: /* @__PURE__ */ jsx(Select, {
					className: "univer-w-full",
					options: sheetsOption,
					value: payload,
					onChange: (newPayload) => {
						var _sheetsOption$find, _sheetsOption$find2;
						setPayload(newPayload);
						const label = (_sheetsOption$find = sheetsOption.find((i) => i.value === newPayload)) === null || _sheetsOption$find === void 0 ? void 0 : _sheetsOption$find.label;
						const oldLabel = (_sheetsOption$find2 = sheetsOption.find((i) => i.value === payload)) === null || _sheetsOption$find2 === void 0 ? void 0 : _sheetsOption$find2.label;
						if (label && (getIsDisplaySyncedWithPayload() || !display || display === oldLabel)) {
							setDisplay(label);
							setDisplaySyncedWithPayload(true);
						}
					}
				})
			}),
			type === SheetHyperLinkType.DEFINE_NAME && /* @__PURE__ */ jsx(FormLayout, {
				error: showError && !payload ? localeService.t("sheets-hyper-link-ui.form.selectError") : "",
				children: /* @__PURE__ */ jsx(Select, {
					className: "univer-w-full",
					options: definedNames,
					value: payload,
					onChange: (newValue) => {
						var _definedNames$find, _definedNames$find2;
						setPayload(newValue);
						const label = (_definedNames$find = definedNames.find((i) => i.value === newValue)) === null || _definedNames$find === void 0 ? void 0 : _definedNames$find.label;
						const oldLabel = (_definedNames$find2 = definedNames.find((i) => i.value === payload)) === null || _definedNames$find2 === void 0 ? void 0 : _definedNames$find2.label;
						if (label && (getIsDisplaySyncedWithPayload() || !display || display === oldLabel)) {
							setDisplay(label);
							setDisplaySyncedWithPayload(true);
						}
					}
				})
			}),
			(customHyperLinkSidePanel === null || customHyperLinkSidePanel === void 0 ? void 0 : customHyperLinkSidePanel.Form) && /* @__PURE__ */ jsx(customHyperLinkSidePanel.Form, {
				linkId: id,
				payload,
				display,
				showError,
				getIsDisplaySyncedWithPayload,
				setDisplaySyncedWithPayload,
				setDisplay: (newLink) => {
					setDisplay(newLink);
					setDisplaySyncedWithPayload(true);
				},
				setPayload
			}),
			/* @__PURE__ */ jsxs(ActionRow, {
				className: clsx("univer-flex univer-flex-row univer-justify-end univer-gap-2", mobile && "univer-mt-5 univer-w-full"),
				children: [/* @__PURE__ */ jsx(Button, {
					onClick: () => {
						if (editing) resolverService.navigateToRange(editing.unitId, editing.subUnitId, {
							startRow: editing.row,
							endRow: editing.row,
							startColumn: editing.col,
							endColumn: editing.col
						}, true);
						commandService.executeCommand(CloseHyperLinkPopupOperation.id);
					},
					children: localeService.t("sheets-hyper-link-ui.form.cancel")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					onClick: async () => {
						handleSubmit();
					},
					children: localeService.t("sheets-hyper-link-ui.form.ok")
				})]
			})
		]
	});
};
CellLinkEdit.componentKey = "univer.sheet.cell-link-edit";

//#endregion
//#region src/views/MobileCellLinkPopup.tsx
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
function MobileCellLinkPopup(props) {
	return /* @__PURE__ */ jsxs("div", {
		className: "univer-flex univer-flex-col univer-gap-2",
		children: [
			/* @__PURE__ */ jsx(MobileActionRow, {
				title: /* @__PURE__ */ jsx("span", {
					className: "univer-truncate",
					children: props.name
				}),
				"aria-label": props.name,
				variant: "subtle",
				disabled: props.invalid,
				onClick: props.onNavigate
			}),
			props.copyPermission && /* @__PURE__ */ jsx(MobileActionRow, {
				title: props.copyText,
				"aria-label": props.copyText,
				variant: "subtle",
				disabled: props.invalid,
				onClick: props.onCopy
			}),
			props.editPermission && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(MobileActionRow, {
				title: props.editText,
				"aria-label": props.editText,
				variant: "subtle",
				onClick: props.onEdit
			}), /* @__PURE__ */ jsx(MobileActionRow, {
				title: props.removeText,
				"aria-label": props.removeText,
				variant: "subtle",
				onClick: props.onRemove
			})] })
		]
	});
}

//#endregion
//#region src/views/CellLinkPopup.tsx
const iconsMap = {
	[SheetHyperLinkType.URL]: /* @__PURE__ */ jsx(LinkIcon, {}),
	[SheetHyperLinkType.SHEET]: /* @__PURE__ */ jsx(SheetsMultiIcon, { className: "univer-text-green-500" }),
	[SheetHyperLinkType.RANGE]: /* @__PURE__ */ jsx(AllBorderIcon, {}),
	[SheetHyperLinkType.DEFINE_NAME]: /* @__PURE__ */ jsx(AllBorderIcon, {}),
	[SheetHyperLinkType.INVALID]: /* @__PURE__ */ jsx(AllBorderIcon, {})
};
const CellLinkPopupPure = (props) => {
	var _customRange$properti;
	const popupService = useDependency(SheetsHyperLinkPopupService);
	const commandService = useDependency(ICommandService);
	const messageService = useDependency(IMessageService);
	const localeService = useDependency(LocaleService);
	const resolverService = useDependency(SheetsHyperLinkResolverService);
	const editorBridgeService = useDependency(IEditorBridgeService);
	const parserHyperLinkService = useDependency(SheetsHyperLinkParserService);
	const { mobile } = useContext(ConfigContext);
	const { customRange, row, col, unitId, subUnitId, editPermission, copyPermission, type } = props;
	if (!(customRange === null || customRange === void 0 || (_customRange$properti = customRange.properties) === null || _customRange$properti === void 0 ? void 0 : _customRange$properti.url)) return null;
	const linkObj = parserHyperLinkService.parseHyperLink(customRange.properties.url ?? "");
	const isError = linkObj.type === SheetHyperLinkType.INVALID;
	if (mobile) {
		const close = () => popupService.hideCurrentPopup(void 0, true);
		return /* @__PURE__ */ jsx(MobileCellLinkPopup, {
			name: linkObj.name,
			invalid: isError,
			copyPermission: Boolean(copyPermission),
			editPermission: Boolean(editPermission),
			copyText: localeService.t("sheets-hyper-link-ui.popup.copy"),
			editText: localeService.t("sheets-hyper-link-ui.popup.edit"),
			removeText: localeService.t("sheets-hyper-link-ui.popup.cancel"),
			onNavigate: () => {
				resolverService.navigate(linkObj);
				close();
			},
			onCopy: () => {
				if (linkObj.type !== SheetHyperLinkType.URL) {
					const url = new URL(window.location.href);
					url.hash = linkObj.url.slice(1);
					navigator.clipboard.writeText(url.href);
				} else navigator.clipboard.writeText(linkObj.url);
				messageService.show({
					content: localeService.t("sheets-hyper-link-ui.message.coped"),
					type: MessageType.Info
				});
				close();
			},
			onEdit: () => {
				close();
				commandService.executeCommand(OpenHyperLinkEditPanelOperation.id, {
					unitId,
					subUnitId,
					row,
					col,
					customRangeId: customRange.rangeId,
					type
				});
			},
			onRemove: () => {
				const commandId = type === "editing" ? CancelRichHyperLinkCommand.id : CancelHyperLinkCommand.id;
				if (commandService.syncExecuteCommand(commandId, {
					unitId,
					subUnitId,
					id: customRange.rangeId,
					row,
					column: col,
					documentId: editorBridgeService.getCurrentEditorId()
				})) close();
			}
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: clsx("univer-mb-1 univer-flex univer-max-w-80 univer-flex-row univer-items-center univer-justify-between univer-gap-2 univer-overflow-hidden univer-rounded-lg univer-bg-gray-0 univer-p-2 univer-shadow-md dark:!univer-bg-gray-900", borderClassName),
		onClick: () => popupService.hideCurrentPopup(),
		children: [/* @__PURE__ */ jsxs("div", {
			className: clsx("univer-flex univer-h-6 univer-flex-1 univer-cursor-pointer univer-flex-row univer-items-center univer-gap-1 univer-truncate univer-text-sm univer-leading-5 univer-text-primary-600", { "univer-text-red-500": isError }),
			onClick: () => {
				if (isError) return;
				resolverService.navigate(linkObj);
			},
			children: [/* @__PURE__ */ jsx("div", {
				className: "univer-flex univer-size-5 univer-flex-none univer-items-center univer-justify-center univer-text-base univer-text-gray-900 dark:!univer-text-gray-0",
				children: iconsMap[linkObj.type]
			}), /* @__PURE__ */ jsx(Tooltip, {
				showIfEllipsis: true,
				title: linkObj.name,
				asChild: true,
				children: /* @__PURE__ */ jsx("span", {
					className: "univer-flex-1 univer-truncate",
					children: linkObj.name
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "univer-flex univer-h-6 univer-flex-none univer-flex-row univer-items-center univer-justify-center univer-gap-2",
			children: [/* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "text",
				size: "small",
				"data-u-comp": "cell-link-popup-copy",
				"aria-label": localeService.t("sheets-hyper-link-ui.popup.copy"),
				className: clsx("!univer-flex univer-size-6 !univer-rounded !univer-border-0 !univer-p-0 !univer-text-base !univer-font-normal disabled:!univer-pointer-events-auto", { "univer-text-red-500": isError }),
				disabled: !copyPermission || isError,
				onClick: () => {
					if (linkObj.type !== SheetHyperLinkType.URL) {
						const url = new URL(window.location.href);
						url.hash = linkObj.url.slice(1);
						navigator.clipboard.writeText(url.href);
					} else navigator.clipboard.writeText(linkObj.url);
					messageService.show({
						content: localeService.t("sheets-hyper-link-ui.message.coped"),
						type: MessageType.Info
					});
				},
				children: /* @__PURE__ */ jsx(Tooltip, {
					placement: "bottom",
					title: localeService.t("sheets-hyper-link-ui.popup.copy"),
					children: /* @__PURE__ */ jsx(CopyIcon, { className: "dark:!univer-text-gray-0" })
				})
			}), editPermission && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				"data-u-comp": "cell-link-popup-edit",
				className: "univer-flex univer-size-6 univer-cursor-pointer univer-flex-row univer-items-center univer-justify-center univer-rounded univer-text-base hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
				onClick: () => {
					commandService.executeCommand(OpenHyperLinkEditPanelOperation.id, {
						unitId,
						subUnitId,
						row,
						col,
						customRangeId: customRange.rangeId,
						type
					});
				},
				children: /* @__PURE__ */ jsx(Tooltip, {
					placement: "bottom",
					title: localeService.t("sheets-hyper-link-ui.popup.edit"),
					children: /* @__PURE__ */ jsx(WriteIcon, { className: "dark:!univer-text-gray-0" })
				})
			}), /* @__PURE__ */ jsx("div", {
				"data-u-comp": "cell-link-popup-remove",
				className: "univer-flex univer-size-6 univer-cursor-pointer univer-flex-row univer-items-center univer-justify-center univer-rounded univer-text-base hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
				onClick: () => {
					const commandId = type === "editing" ? CancelRichHyperLinkCommand.id : CancelHyperLinkCommand.id;
					if (commandService.syncExecuteCommand(commandId, {
						unitId,
						subUnitId,
						id: customRange.rangeId,
						row,
						column: col,
						documentId: editorBridgeService.getCurrentEditorId()
					})) popupService.hideCurrentPopup(void 0, true);
				},
				children: /* @__PURE__ */ jsx(Tooltip, {
					placement: "bottom",
					title: localeService.t("sheets-hyper-link-ui.popup.cancel"),
					children: /* @__PURE__ */ jsx(UnlinkIcon, { className: "dark:!univer-text-gray-0" })
				})
			})] })]
		})]
	});
};
const CellLinkPopup = () => {
	const popupService = useDependency(SheetsHyperLinkPopupService);
	const currentPopup = useObservable(popupService.currentPopup$, popupService.currentPopup);
	const univerInstanceService = useDependency(IUniverInstanceService);
	if (!currentPopup) return null;
	if (currentPopup.showAll) {
		var _cell$p;
		const workbook = univerInstanceService.getUnit(currentPopup.unitId, UniverInstanceType.UNIVER_SHEET);
		const worksheet = workbook === null || workbook === void 0 ? void 0 : workbook.getSheetBySheetId(currentPopup.subUnitId);
		const cell = worksheet === null || worksheet === void 0 ? void 0 : worksheet.getCell(currentPopup.row, currentPopup.col);
		const customRanges = cell === null || cell === void 0 || (_cell$p = cell.p) === null || _cell$p === void 0 || (_cell$p = _cell$p.body) === null || _cell$p === void 0 ? void 0 : _cell$p.customRanges;
		return (customRanges === null || customRanges === void 0 ? void 0 : customRanges.length) ? /* @__PURE__ */ jsx("div", { children: customRanges.map((customRange) => {
			return /* @__PURE__ */ jsx(CellLinkPopupPure, {
				...currentPopup,
				customRange
			}, customRange.rangeId);
		}) }) : null;
	}
	return /* @__PURE__ */ jsx(CellLinkPopupPure, { ...currentPopup });
};
CellLinkPopup.componentKey = "univer.sheet.cell-link-popup";

//#endregion
//#region src/services/popup.service.ts
const MOBILE_HYPER_LINK_EDITOR_DIALOG_ID = "sheet-mobile-hyper-link-editor";
const MOBILE_HYPER_LINK_VIEWER_DIALOG_ID = "sheet-mobile-hyper-link-viewer";
const isEqualLink = (a, b) => {
	var _a$customRange, _b$customRange;
	return a.unitId === b.unitId && a.subUnitId === b.subUnitId && a.row === b.row && a.col === b.col && ((_a$customRange = a.customRange) === null || _a$customRange === void 0 ? void 0 : _a$customRange.rangeId) === ((_b$customRange = b.customRange) === null || _b$customRange === void 0 ? void 0 : _b$customRange.rangeId) && a.type === b.type;
};
let SheetsHyperLinkPopupService = class SheetsHyperLinkPopupService extends Disposable {
	get currentPopup() {
		return this._currentPopup;
	}
	get currentEditing() {
		return this._currentEditing$.getValue();
	}
	constructor(_sheetCanvasPopManagerService, _injector, _univerInstanceService, _editorBridgeService, _textSelectionManagerService, _renderManagerService, _contextService, _dialogService) {
		super();
		this._sheetCanvasPopManagerService = _sheetCanvasPopManagerService;
		this._injector = _injector;
		this._univerInstanceService = _univerInstanceService;
		this._editorBridgeService = _editorBridgeService;
		this._textSelectionManagerService = _textSelectionManagerService;
		this._renderManagerService = _renderManagerService;
		this._contextService = _contextService;
		this._dialogService = _dialogService;
		_defineProperty(this, "_currentPopup", null);
		_defineProperty(this, "_currentPopup$", new Subject());
		_defineProperty(this, "currentPopup$", this._currentPopup$.asObservable());
		_defineProperty(this, "_currentEditingPopup", null);
		_defineProperty(this, "_currentEditing$", new BehaviorSubject(null));
		_defineProperty(this, "currentEditing$", this._currentEditing$.asObservable());
		_defineProperty(this, "_isKeepVisible", false);
		this.disposeWithMe(() => {
			this.hideCurrentPopup();
			this.endEditing();
			this._currentEditing$.complete();
			this._currentPopup$.complete();
		});
	}
	setIsKeepVisible(v) {
		this._isKeepVisible = v;
	}
	getIsKeepVisible() {
		return this._isKeepVisible;
	}
	showPopup(location) {
		if (this._currentPopup && isEqualLink(location, this._currentPopup)) return;
		this.hideCurrentPopup(void 0, true);
		const currentEditing = this._currentEditing$.getValue();
		if (currentEditing && isEqualLink(location, currentEditing)) return;
		const { unitId, subUnitId, row, col, customRangeRect, customRange } = location;
		const mobileDialogService = this._getMobileDialogService();
		if (mobileDialogService) {
			if (!location.showAll && !customRange) return;
			const disposable = {
				canDispose: () => true,
				dispose: () => mobileDialogService.close(MOBILE_HYPER_LINK_VIEWER_DIALOG_ID)
			};
			this._currentPopup = {
				unitId,
				subUnitId,
				disposable,
				row,
				col,
				editPermission: !!location.editPermission,
				copyPermission: !!location.copyPermission,
				customRange,
				type: location.type,
				showAll: location.showAll
			};
			this._currentPopup$.next(this._currentPopup);
			mobileDialogService.open({
				id: MOBILE_HYPER_LINK_VIEWER_DIALOG_ID,
				title: { title: "sheets-hyper-link-ui.form.addTitle" },
				children: { label: CellLinkPopup.componentKey },
				onClose: () => this.hideCurrentPopup(void 0, true)
			});
			return;
		}
		let disposable;
		const popup = {
			componentKey: CellLinkPopup.componentKey,
			direction: "bottom",
			onClickOutside: () => {
				this.hideCurrentPopup();
			},
			onClick: () => {
				this.hideCurrentPopup(location.type, true);
			}
		};
		if (location.type === "editing") {
			if (!customRange) return;
			disposable = customRangeRect && this._sheetCanvasPopManagerService.attachPopupToAbsolutePosition(customRangeRect, popup);
		} else if (location.showAll) disposable = this._sheetCanvasPopManagerService.attachPopupToCell(location.row, location.col, popup, unitId, subUnitId);
		else {
			if (!customRange) return;
			disposable = customRangeRect && this._sheetCanvasPopManagerService.attachPopupByPosition(customRangeRect, popup, location);
		}
		if (disposable) {
			if (this._currentPopup) {
				var _this$_currentPopup$d;
				(_this$_currentPopup$d = this._currentPopup.disposable) === null || _this$_currentPopup$d === void 0 || _this$_currentPopup$d.dispose();
			}
			this._currentPopup = {
				unitId,
				subUnitId,
				disposable,
				row,
				col,
				editPermission: !!location.editPermission,
				copyPermission: !!location.copyPermission,
				customRange,
				type: location.type,
				showAll: location.showAll
			};
			this._currentPopup$.next(this._currentPopup);
		}
	}
	hideCurrentPopup(type, force) {
		if (!this._currentPopup) return;
		if ((!type || type === this._currentPopup.type) && this._currentPopup.disposable.canDispose() || force) {
			var _this$_currentPopup;
			(_this$_currentPopup = this._currentPopup) === null || _this$_currentPopup === void 0 || (_this$_currentPopup = _this$_currentPopup.disposable) === null || _this$_currentPopup === void 0 || _this$_currentPopup.dispose();
			this._currentPopup = null;
			this._currentPopup$.next(null);
		}
	}
	dispose() {
		super.dispose();
		this.hideCurrentPopup();
		this.endEditing();
		this._currentPopup$.complete();
		this._currentEditing$.complete();
	}
	_getEditingRange() {
		const visible = this._editorBridgeService.isVisible().visible;
		const state = this._editorBridgeService.getEditCellState();
		if (visible && state) {
			var _state$documentLayout, _body$customRanges;
			const textRange = this._textSelectionManagerService.getActiveTextRange();
			const body = (_state$documentLayout = state.documentLayoutObject.documentModel) === null || _state$documentLayout === void 0 ? void 0 : _state$documentLayout.getBody();
			if (!body) return null;
			if (!textRange || textRange.collapsed) return {
				startOffset: 0,
				endOffset: body.dataStream.length - 2,
				collapsed: body.dataStream.length - 2 === 0,
				label: BuildTextUtils.transform.getPlainText(body.dataStream)
			};
			const links = BuildTextUtils.customRange.getCustomRangesInterestsWithSelection(textRange, ((_body$customRanges = body.customRanges) === null || _body$customRanges === void 0 ? void 0 : _body$customRanges.filter((i) => i.rangeType === CustomRangeType.HYPERLINK)) ?? []);
			let start = textRange.startOffset;
			let end = textRange.endOffset;
			links.forEach((link) => {
				start = Math.min(start, link.startIndex);
				end = Math.max(end, link.endIndex + 1);
			});
			return {
				startOffset: start,
				endOffset: end,
				collapsed: start === end,
				label: BuildTextUtils.transform.getPlainText(body.dataStream.slice(start, end))
			};
		}
		return null;
	}
	get _editPopup() {
		return {
			componentKey: CellLinkEdit.componentKey,
			direction: "vertical",
			onClickOutside: () => {
				this.endEditing();
			},
			onContextMenu: () => {
				this.endEditing();
			},
			hiddenType: "hide"
		};
	}
	_openMobileEditor(editing) {
		const dialogService = this._getMobileDialogService();
		if (!dialogService) return;
		this._currentEditing$.next(editing);
		dialogService.open({
			id: MOBILE_HYPER_LINK_EDITOR_DIALOG_ID,
			title: { title: "sheets-hyper-link-ui.form.addTitle" },
			children: { label: CellLinkEdit.componentKey },
			maskClosable: false,
			onClose: () => this.endEditing(editing.type)
		});
	}
	_getMobileDialogService() {
		return this._contextService.getContextValue(MOBILE_UI_MODE) ? this._dialogService : null;
	}
	startAddEditing(link) {
		const { unitId, subUnitId, type } = link;
		if (type === "editing") {
			const range = this._getEditingRange();
			if (!range) return;
			this._textSelectionManagerService.replaceDocRanges([{ ...range }], {
				unitId: DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
				subUnitId: DOCS_NORMAL_EDITOR_UNIT_ID_KEY
			});
			if (this._getMobileDialogService()) {
				this._openMobileEditor({
					...link,
					label: range.label
				});
				return;
			}
			const currentRender = this._renderManagerService.getRenderUnitById(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
			if (!currentRender) return;
			const rects = calcDocRangePositions(range, currentRender);
			if (!(rects === null || rects === void 0 ? void 0 : rects.length)) return;
			this._currentEditingPopup = this._sheetCanvasPopManagerService.attachPopupToAbsolutePosition(rects.pop(), this._editPopup, unitId, subUnitId);
			this._currentEditing$.next({
				...link,
				label: (range === null || range === void 0 ? void 0 : range.label) ?? ""
			});
		} else {
			var _cell$p$body;
			const workbook = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_SHEET);
			const worksheet = workbook === null || workbook === void 0 ? void 0 : workbook.getSheetBySheetId(subUnitId);
			const cell = worksheet === null || worksheet === void 0 ? void 0 : worksheet.getCellRaw(link.row, link.col);
			const label = (cell === null || cell === void 0 ? void 0 : cell.p) ? BuildTextUtils.transform.getPlainText(((_cell$p$body = cell.p.body) === null || _cell$p$body === void 0 ? void 0 : _cell$p$body.dataStream) ?? "") : ((cell === null || cell === void 0 ? void 0 : cell.v) ?? "").toString();
			if (this._getMobileDialogService()) {
				this._openMobileEditor({
					...link,
					label
				});
				return;
			}
			this._currentEditingPopup = this._sheetCanvasPopManagerService.attachPopupToCell(link.row, link.col, this._editPopup, unitId, subUnitId);
			this._currentEditing$.next({
				...link,
				label
			});
		}
	}
	startEditing(link) {
		var _this$_currentEditing;
		(_this$_currentEditing = this._currentEditingPopup) === null || _this$_currentEditing === void 0 || _this$_currentEditing.dispose();
		this.hideCurrentPopup(void 0, true);
		const { unitId, subUnitId } = link;
		const mobile = Boolean(this._getMobileDialogService());
		let customRange;
		let label;
		if (link.type === "editing") {
			var _customRangeInfo$rect;
			const customRangeInfo = getEditingCustomRangePosition(this._injector, link.unitId, link.subUnitId, link.row, link.col, link.customRangeId);
			if (!customRangeInfo || !((_customRangeInfo$rect = customRangeInfo.rects) === null || _customRangeInfo$rect === void 0 ? void 0 : _customRangeInfo$rect.length)) return;
			customRange = customRangeInfo.customRange;
			label = customRangeInfo.label;
			this._textSelectionManagerService.replaceDocRanges([{
				startOffset: customRange.startIndex,
				endOffset: customRange.endIndex + 1
			}]);
			if (!mobile) this._currentEditingPopup = this._sheetCanvasPopManagerService.attachPopupToAbsolutePosition(customRangeInfo.rects.pop(), this._editPopup, unitId, subUnitId);
		} else {
			var _customRangeInfo$rect2;
			const workbook = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_SHEET);
			const worksheet = workbook === null || workbook === void 0 ? void 0 : workbook.getSheetBySheetId(subUnitId);
			const cell = worksheet === null || worksheet === void 0 ? void 0 : worksheet.getCellRaw(link.row, link.col);
			const style = workbook === null || workbook === void 0 ? void 0 : workbook.getStyles().getStyleByCell(cell);
			const tr = style === null || style === void 0 ? void 0 : style.tr;
			const customRangeInfo = getCustomRangePosition(this._injector, link.unitId, link.subUnitId, link.row, link.col, link.customRangeId);
			if (!customRangeInfo || !((_customRangeInfo$rect2 = customRangeInfo.rects) === null || _customRangeInfo$rect2 === void 0 ? void 0 : _customRangeInfo$rect2.length)) return;
			customRange = customRangeInfo.customRange;
			label = customRangeInfo.label;
			if (!mobile) if (tr) this._currentEditingPopup = this._sheetCanvasPopManagerService.attachPopupToCell(link.row, link.col, this._editPopup, unitId, subUnitId);
			else this._currentEditingPopup = this._sheetCanvasPopManagerService.attachPopupByPosition(customRangeInfo.rects.pop(), this._editPopup, {
				unitId,
				subUnitId,
				row: link.row,
				col: link.col
			});
		}
		const editing = {
			...link,
			customRange,
			label
		};
		if (mobile) {
			this._openMobileEditor(editing);
			return;
		}
		this._currentEditing$.next(editing);
	}
	endEditing(type) {
		if (this.getIsKeepVisible()) return;
		const current = this._currentEditing$.getValue();
		if (current && (!type || type === current.type)) {
			var _this$_currentEditing2, _this$_getMobileDialo;
			(_this$_currentEditing2 = this._currentEditingPopup) === null || _this$_currentEditing2 === void 0 || _this$_currentEditing2.dispose();
			(_this$_getMobileDialo = this._getMobileDialogService()) === null || _this$_getMobileDialo === void 0 || _this$_getMobileDialo.close(MOBILE_HYPER_LINK_EDITOR_DIALOG_ID);
			this._currentEditing$.next(null);
		}
	}
};
SheetsHyperLinkPopupService = __decorate([
	__decorateParam(0, Inject(SheetCanvasPopManagerService)),
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, IUniverInstanceService),
	__decorateParam(3, IEditorBridgeService),
	__decorateParam(4, Inject(DocSelectionManagerService)),
	__decorateParam(5, IRenderManagerService),
	__decorateParam(6, IContextService),
	__decorateParam(7, IDialogService)
], SheetsHyperLinkPopupService);

//#endregion
//#region src/utils/index.ts
const disables = /* @__PURE__ */ new Set([
	DataValidationType.CHECKBOX,
	DataValidationType.LIST,
	DataValidationType.LIST_MULTIPLE
]);
const getShouldDisableCellLink = (accessor, worksheet, row, col) => {
	var _cell$p, _cell$p2;
	const cell = worksheet.getCell(row, col);
	if ((cell === null || cell === void 0 ? void 0 : cell.f) || (cell === null || cell === void 0 ? void 0 : cell.si)) return 1;
	if (cell === null || cell === void 0 || (_cell$p = cell.p) === null || _cell$p === void 0 || (_cell$p = _cell$p.body) === null || _cell$p === void 0 || (_cell$p = _cell$p.customBlocks) === null || _cell$p === void 0 ? void 0 : _cell$p.length) return 1;
	const dataValidationModel = accessor.has(SheetDataValidationModel) ? accessor.get(SheetDataValidationModel) : null;
	const rule = dataValidationModel === null || dataValidationModel === void 0 ? void 0 : dataValidationModel.getRuleByLocation(worksheet.getUnitId(), worksheet.getSheetId(), row, col);
	if (rule && disables.has(rule.type)) return true;
	if (cell === null || cell === void 0 || (_cell$p2 = cell.p) === null || _cell$p2 === void 0 || (_cell$p2 = _cell$p2.drawingsOrder) === null || _cell$p2 === void 0 ? void 0 : _cell$p2.length) return 2;
	return 0;
};
const getShouldDisableCurrentCellLink = (accessor) => {
	const unit = accessor.get(IUniverInstanceService).getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET);
	if (!unit) return true;
	const worksheet = unit.getActiveSheet();
	const selections = accessor.get(SheetsSelectionsService).getCurrentSelections();
	if (!selections.length) return true;
	const row = selections[0].range.startRow;
	const col = selections[0].range.startColumn;
	return getShouldDisableCellLink(accessor, worksheet, row, col) === 1;
};
const shouldDisableAddLink = (accessor) => {
	var _doc$getSelfOrHeaderF;
	const textSelectionService = accessor.get(DocSelectionManagerService);
	const univerInstanceService = accessor.get(IUniverInstanceService);
	const textRanges = textSelectionService.getTextRanges();
	if (!(textRanges === null || textRanges === void 0 ? void 0 : textRanges.length)) return true;
	const doc = univerInstanceService.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC);
	if (!doc || textRanges.every((range) => range.collapsed)) return true;
	if (!((_doc$getSelfOrHeaderF = doc.getSelfOrHeaderFooterModel(textRanges[0].segmentId)) === null || _doc$getSelfOrHeaderF === void 0 ? void 0 : _doc$getSelfOrHeaderF.getBody())) return true;
	return false;
};

//#endregion
//#region src/commands/operations/popup.operations.ts
const OpenHyperLinkEditPanelOperation = {
	type: CommandType.OPERATION,
	id: "sheet.operation.open-hyper-link-edit-panel",
	handler(accessor, params) {
		if (!params) return false;
		const popupService = accessor.get(SheetsHyperLinkPopupService);
		if (!params.customRangeId) popupService.startAddEditing(params);
		else popupService.startEditing(params);
		return true;
	}
};
const CloseHyperLinkPopupOperation = {
	type: CommandType.OPERATION,
	id: "sheet.operation.close-hyper-link-popup",
	handler(accessor) {
		accessor.get(SheetsHyperLinkPopupService).endEditing();
		return true;
	}
};
const InsertHyperLinkOperation = {
	type: CommandType.OPERATION,
	id: "sheet.operation.insert-hyper-link",
	handler(accessor) {
		const target = getSheetCommandTarget(accessor.get(IUniverInstanceService));
		const editorBridgeService = accessor.get(IEditorBridgeService);
		if (!target) return false;
		const commandService = accessor.get(ICommandService);
		const selection = accessor.get(SheetsSelectionsService).getCurrentLastSelection();
		if (!selection) return false;
		const row = selection.range.startRow;
		const col = selection.range.startColumn;
		const visible = editorBridgeService.isVisible();
		return commandService.executeCommand(OpenHyperLinkEditPanelOperation.id, {
			unitId: target.unitId,
			subUnitId: target.subUnitId,
			row,
			col,
			type: visible.visible ? "editing" : "viewing"
		});
	}
};
const InsertHyperLinkToolbarOperation = {
	type: CommandType.OPERATION,
	id: "sheet.operation.insert-hyper-link-toolbar",
	handler(accessor) {
		if (getShouldDisableCurrentCellLink(accessor)) return false;
		const commandService = accessor.get(ICommandService);
		if (accessor.get(SheetsHyperLinkPopupService).currentEditing) return commandService.executeCommand(CloseHyperLinkPopupOperation.id);
		else return commandService.executeCommand(InsertHyperLinkOperation.id);
	}
};

//#endregion
//#region src/types/const.ts
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
const SHEET_HYPER_LINK_UI_PLUGIN = "SHEET_HYPER_LINK_UI_PLUGIN";

//#endregion
//#region src/controllers/copy-paste.controller.ts
let SheetsHyperLinkCopyPasteController = class SheetsHyperLinkCopyPasteController extends Disposable {
	registerPlainTextFilter(filter) {
		this._plainTextFilter.add(filter);
	}
	removePlainTextFilter(filter) {
		this._plainTextFilter.delete(filter);
	}
	_filterPlainText(text) {
		return Array.from(this._plainTextFilter).every((filter) => filter(text));
	}
	constructor(_sheetClipboardService, _hyperLinkModel, _injector, _resolverService) {
		super();
		this._sheetClipboardService = _sheetClipboardService;
		this._hyperLinkModel = _hyperLinkModel;
		this._injector = _injector;
		this._resolverService = _resolverService;
		_defineProperty(this, "_plainTextFilter", /* @__PURE__ */ new Set());
		_defineProperty(this, "_copyInfo", void 0);
		this._initCopyPaste();
		this.disposeWithMe(() => {
			this._plainTextFilter.clear();
		});
	}
	_initCopyPaste() {
		this._sheetClipboardService.addClipboardHook({
			id: SHEET_HYPER_LINK_UI_PLUGIN,
			onBeforeCopy: (unitId, subUnitId, range) => this._collect(unitId, subUnitId, range),
			onPasteCells: (pasteFrom, pasteTo, data, payload) => {
				const { copyType = COPY_TYPE.COPY, pasteType } = payload;
				const { range: copyRange } = pasteFrom || {};
				const { range: pastedRange, unitId, subUnitId } = pasteTo;
				return this._generateMutations(pastedRange, {
					copyType,
					pasteType,
					copyRange,
					unitId,
					subUnitId
				});
			},
			onPastePlainText: (pasteTo, clipText) => {
				const filterResult = this._filterPlainText(clipText);
				if (isLegalLink(clipText) && filterResult) {
					const { range, unitId, subUnitId } = pasteTo;
					const { ranges: [pasteToRange], mapFunc } = virtualizeDiscreteRanges([range]);
					const redos = [];
					const undos = [];
					Range.foreach(pasteToRange, (originRow, originCol) => {
						const { row, col: column } = mapFunc(originRow, originCol);
						const link = this._hyperLinkModel.getHyperLinkByLocation(unitId, subUnitId, row, column);
						if (link) redos.push({
							id: RemoveHyperLinkMutation.id,
							params: {
								unitId,
								subUnitId,
								id: link.id
							}
						});
						if (link) undos.push({
							id: AddHyperLinkMutation.id,
							params: {
								unitId,
								subUnitId,
								link
							}
						});
					});
					return {
						redos,
						undos
					};
				}
				return {
					undos: [],
					redos: []
				};
			},
			priority: 99
		});
	}
	_collect(unitId, subUnitId, range) {
		const matrix = new ObjectMatrix();
		this._copyInfo = {
			unitId,
			subUnitId,
			matrix
		};
		const discreteRange = this._injector.invoke((accessor) => {
			return rangeToDiscreteRange(range, accessor, unitId, subUnitId);
		});
		if (!discreteRange) return;
		const { rows, cols } = discreteRange;
		rows.forEach((row, rowIndex) => {
			cols.forEach((col, colIndex) => {
				const link = this._hyperLinkModel.getHyperLinkByLocation(unitId, subUnitId, row, col);
				matrix.setValue(rowIndex, colIndex, (link === null || link === void 0 ? void 0 : link.id) ?? "");
			});
		});
	}
	_generateMutations(pastedRange, copyInfo) {
		if (!this._copyInfo) return {
			redos: [],
			undos: []
		};
		if (!this._copyInfo || !this._copyInfo.matrix.getSizeOf() || !copyInfo.copyRange) return {
			redos: [],
			undos: []
		};
		if ([
			PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_COL_WIDTH,
			PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_VALUE,
			PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_FORMAT,
			PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_FORMULA
		].includes(copyInfo.pasteType)) return {
			redos: [],
			undos: []
		};
		const { unitId, subUnitId } = this._copyInfo;
		const redos = [];
		const undos = [];
		const { ranges: [vCopyRange, vPastedRange], mapFunc } = virtualizeDiscreteRanges([copyInfo.copyRange, pastedRange]);
		getRepeatRange(vCopyRange, vPastedRange, true).forEach(({ startRange }) => {
			var _this$_copyInfo;
			(_this$_copyInfo = this._copyInfo) === null || _this$_copyInfo === void 0 || _this$_copyInfo.matrix.forValue((row, col, ruleId) => {
				const range = Rectangle.getPositionRange({
					startRow: row,
					endRow: row,
					startColumn: col,
					endColumn: col
				}, startRange);
				const oldLink = this._hyperLinkModel.getHyperLink(unitId, subUnitId, ruleId);
				const { row: startRow, col: startColumn } = mapFunc(range.startRow, range.startColumn);
				const currentLink = this._hyperLinkModel.getHyperLinkByLocation(copyInfo.unitId, copyInfo.subUnitId, startRow, startColumn);
				const id = generateRandomId();
				if (currentLink) redos.push({
					id: RemoveHyperLinkMutation.id,
					params: {
						unitId: copyInfo.unitId,
						subUnitId: copyInfo.subUnitId,
						id: currentLink.id
					}
				});
				if (oldLink) {
					redos.push({
						id: AddHyperLinkMutation.id,
						params: {
							unitId: copyInfo.unitId,
							subUnitId: copyInfo.subUnitId,
							link: {
								...oldLink,
								id,
								row: startRow,
								column: startColumn
							}
						}
					});
					undos.push({
						id: RemoveHyperLinkMutation.id,
						params: {
							unitId: copyInfo.unitId,
							subUnitId: copyInfo.subUnitId,
							id
						}
					});
				}
				if (currentLink) undos.push({
					id: AddHyperLinkMutation.id,
					params: {
						unitId: copyInfo.unitId,
						subUnitId: copyInfo.subUnitId,
						link: currentLink
					}
				});
			});
		});
		return {
			redos,
			undos
		};
	}
};
SheetsHyperLinkCopyPasteController = __decorate([
	__decorateParam(0, ISheetClipboardService),
	__decorateParam(1, Inject(HyperLinkModel)),
	__decorateParam(2, Inject(Injector)),
	__decorateParam(3, Inject(SheetsHyperLinkResolverService))
], SheetsHyperLinkCopyPasteController);

//#endregion
//#region src/menu/menu.ts
const getEditingLinkDisable$ = (accessor, unitId = DOCS_NORMAL_EDITOR_UNIT_ID_KEY) => {
	var _accessor$get$getRend;
	const univerInstanceService = accessor.get(IUniverInstanceService);
	const docSelctionService = (_accessor$get$getRend = accessor.get(IRenderManagerService).getRenderUnitById(unitId)) === null || _accessor$get$getRend === void 0 ? void 0 : _accessor$get$getRend.with(DocSelectionRenderService);
	if (!docSelctionService) return of(true);
	return docSelctionService.textSelectionInner$.pipe(map(() => {
		const state = accessor.get(IEditorBridgeService).getEditCellState();
		if (!state) return true;
		const target = getSheetCommandTarget(univerInstanceService, {
			unitId: state.unitId,
			subUnitId: state.sheetId
		});
		if (!(target === null || target === void 0 ? void 0 : target.worksheet)) return true;
		if (getShouldDisableCellLink(accessor, target.worksheet, state.row, state.column) === 1) return true;
		return shouldDisableAddLink(accessor);
	}));
};
const getLinkDisable$ = (accessor) => {
	const univerInstanceService = accessor.get(IUniverInstanceService);
	const editorBridgeService = accessor.has(IEditorBridgeService) ? accessor.get(IEditorBridgeService) : null;
	return ((editorBridgeService === null || editorBridgeService === void 0 ? void 0 : editorBridgeService.currentEditCellState$.pipe(map((state) => {
		if (!state) return 1;
		const target = getSheetCommandTarget(univerInstanceService, {
			unitId: state.unitId,
			subUnitId: state.sheetId
		});
		if (!target) return 1;
		return getShouldDisableCellLink(accessor, target.worksheet, state.row, state.column);
	}), switchMap((disableCell) => {
		if (disableCell === 1) return of(true);
		return combineLatest([editorBridgeService ? editorBridgeService.visible$ : of(null), univerInstanceService.getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_DOC)]).pipe(switchMap(([editing, focusingDoc]) => {
			return (editing === null || editing === void 0 ? void 0 : editing.visible) ? (focusingDoc === null || focusingDoc === void 0 ? void 0 : focusingDoc.getUnitId()) === DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY ? of(true) : getEditingLinkDisable$(accessor, DOCS_NORMAL_EDITOR_UNIT_ID_KEY) : of(disableCell !== 0);
		}));
	}))) ?? of(true)).pipe(switchMap((disableCell) => {
		if (disableCell) return of(true);
		else return getCurrentRangeDisable$(accessor, {
			workbookTypes: [WorkbookEditablePermission],
			worksheetTypes: [
				WorksheetEditPermission,
				WorksheetSetCellValuePermission,
				WorksheetInsertHyperlinkPermission
			],
			rangeTypes: [RangeProtectionPermissionEditPoint]
		}, true);
	}));
};
const insertLinkMenuFactory = (accessor) => {
	return {
		commandId: InsertHyperLinkOperation.id,
		type: MenuItemType.BUTTON,
		title: "sheets-hyper-link-ui.menu.add",
		icon: "LinkIcon",
		id: InsertHyperLinkOperation.id,
		hidden$: getMenuHiddenObservable(accessor, UniverInstanceType.UNIVER_SHEET),
		disabled$: getLinkDisable$(accessor)
	};
};
const insertLinkMenuToolbarFactory = (accessor) => {
	return {
		tooltip: "sheets-hyper-link-ui.form.addTitle",
		commandId: InsertHyperLinkToolbarOperation.id,
		type: MenuItemType.BUTTON,
		icon: "LinkIcon",
		id: InsertHyperLinkToolbarOperation.id,
		hidden$: getMenuHiddenObservable(accessor, UniverInstanceType.UNIVER_SHEET),
		disabled$: getLinkDisable$(accessor)
	};
};
const InsertLinkShortcut = {
	id: InsertHyperLinkToolbarOperation.id,
	binding: KeyCode.K | MetaKeys.CTRL_COMMAND,
	preconditions: whenSheetEditorFocused
};

//#endregion
//#region src/menu/schema.ts
const menuSchema = {
	[RibbonInsertGroup.MEDIA]: { [InsertHyperLinkToolbarOperation.id]: {
		order: 1,
		gridLayout: {
			row: 1,
			column: 2,
			rowSpan: 2,
			showLabel: true
		},
		menuItemFactory: insertLinkMenuToolbarFactory
	} },
	[ContextMenuPosition.MAIN_AREA]: { [ContextMenuGroup.OTHERS]: {
		order: 1,
		[InsertHyperLinkToolbarOperation.id]: {
			order: 0,
			menuItemFactory: insertLinkMenuFactory
		}
	} }
};

//#endregion
//#region package.json
var name = "@univerjs/sheets-hyper-link-ui";
var version = "1.0.0-insiders.20260907-70fc579";

//#endregion
//#region src/controllers/auto-fill.controller.ts
let SheetsHyperLinkAutoFillController = class SheetsHyperLinkAutoFillController extends Disposable {
	constructor(_autoFillService, _hyperLinkModel) {
		super();
		this._autoFillService = _autoFillService;
		this._hyperLinkModel = _hyperLinkModel;
		this._initAutoFill();
	}
	_initAutoFill() {
		const noopReturnFunc = () => ({
			redos: [],
			undos: []
		});
		const generalApplyFunc = (location, applyType) => {
			const { source: sourceRange, target: targetRange, unitId, subUnitId } = location;
			const virtualRange = virtualizeDiscreteRanges([sourceRange, targetRange]);
			const [vSourceRange, vTargetRange] = virtualRange.ranges;
			const { mapFunc } = virtualRange;
			const sourceStartCell = {
				row: vSourceRange.startRow,
				col: vSourceRange.startColumn
			};
			const repeats = AutoFillTools.getAutoFillRepeatRange(vSourceRange, vTargetRange);
			const redos = [];
			const undos = [];
			repeats.forEach((repeat) => {
				const targetStartCell = repeat.repeatStartCell;
				const relativeRange = repeat.relativeRange;
				const sourceRange = {
					startRow: sourceStartCell.row,
					startColumn: sourceStartCell.col,
					endColumn: sourceStartCell.col,
					endRow: sourceStartCell.row
				};
				const targetRange = {
					startRow: targetStartCell.row,
					startColumn: targetStartCell.col,
					endColumn: targetStartCell.col,
					endRow: targetStartCell.row
				};
				Range.foreach(relativeRange, (row, col) => {
					const sourcePositionRange = Rectangle.getPositionRange({
						startRow: row,
						startColumn: col,
						endColumn: col,
						endRow: row
					}, sourceRange);
					const { row: sourceRow, col: sourceCol } = mapFunc(sourcePositionRange.startRow, sourcePositionRange.startColumn);
					const link = this._hyperLinkModel.getHyperLinkByLocation(unitId, subUnitId, sourceRow, sourceCol);
					const targetPositionRange = Rectangle.getPositionRange({
						startRow: row,
						startColumn: col,
						endColumn: col,
						endRow: row
					}, targetRange);
					const { row: targetRow, col: targetCol } = mapFunc(targetPositionRange.startRow, targetPositionRange.startColumn);
					const id = generateRandomId();
					const currentLink = this._hyperLinkModel.getHyperLinkByLocation(unitId, subUnitId, targetRow, targetCol);
					if (currentLink) redos.push({
						id: RemoveHyperLinkMutation.id,
						params: {
							unitId,
							subUnitId,
							id: currentLink.id
						}
					});
					if ((AUTO_FILL_APPLY_TYPE.COPY === applyType || AUTO_FILL_APPLY_TYPE.SERIES === applyType) && link) {
						redos.push({
							id: AddHyperLinkMutation.id,
							params: {
								unitId,
								subUnitId,
								link: {
									...link,
									id,
									row: targetRow,
									column: targetCol
								}
							}
						});
						undos.push({
							id: RemoveHyperLinkMutation.id,
							params: {
								unitId,
								subUnitId,
								id
							}
						});
					}
					if (currentLink) undos.push({
						id: AddHyperLinkMutation.id,
						params: {
							unitId,
							subUnitId,
							link: currentLink
						}
					});
				});
			});
			return {
				undos,
				redos
			};
		};
		const hook = {
			id: SHEET_HYPER_LINK_UI_PLUGIN,
			onFillData: (location, direction, applyType) => {
				if (applyType === AUTO_FILL_APPLY_TYPE.COPY || applyType === AUTO_FILL_APPLY_TYPE.ONLY_FORMAT || applyType === AUTO_FILL_APPLY_TYPE.SERIES) return generalApplyFunc(location, applyType);
				return noopReturnFunc();
			}
		};
		this.disposeWithMe(this._autoFillService.addHook(hook));
	}
};
SheetsHyperLinkAutoFillController = __decorate([__decorateParam(0, IAutoFillService), __decorateParam(1, Inject(HyperLinkModel))], SheetsHyperLinkAutoFillController);

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
		[[CellLinkPopup.componentKey, CellLinkPopup], [CellLinkEdit.componentKey, CellLinkEdit]].forEach(([key, comp]) => {
			this._componentManager.register(key, comp);
		});
	}
	_registerIcons() {
		this.disposeWithMe(this._iconManager.register({ LinkIcon }));
	}
};
ComponentsController = __decorate([__decorateParam(0, Inject(ComponentManager)), __decorateParam(1, Inject(IconManager))], ComponentsController);

//#endregion
//#region src/controllers/hyper-link-permission.controller.ts
let SheetsHyperLinkPermissionController = class SheetsHyperLinkPermissionController extends Disposable {
	constructor(_localeService, _commandService, _sheetPermissionCheckController) {
		super();
		this._localeService = _localeService;
		this._commandService = _commandService;
		this._sheetPermissionCheckController = _sheetPermissionCheckController;
		this._commandExecutedListener();
	}
	_commandExecutedListener() {
		this.disposeWithMe(this._commandService.beforeCommandExecuted((command) => {
			if (command.id === InsertLinkShortcut.id) {
				if (!this._sheetPermissionCheckController.permissionCheckWithRanges({
					workbookTypes: [WorkbookEditablePermission],
					rangeTypes: [RangeProtectionPermissionEditPoint],
					worksheetTypes: [
						WorksheetEditPermission,
						WorksheetSetCellValuePermission,
						WorksheetInsertHyperlinkPermission
					]
				})) this._sheetPermissionCheckController.blockExecuteWithoutPermission(this._localeService.t("sheets-hyper-link-ui.permission.hyperLinkErr"));
			}
		}));
	}
};
SheetsHyperLinkPermissionController = __decorate([
	__decorateParam(0, Inject(LocaleService)),
	__decorateParam(1, ICommandService),
	__decorateParam(2, Inject(SheetPermissionCheckController))
], SheetsHyperLinkPermissionController);

//#endregion
//#region src/controllers/popup.controller.ts
let SheetsHyperLinkPopupController = class SheetsHyperLinkPopupController extends Disposable {
	constructor(_hoverManagerService, _sheetsHyperLinkPopupService, _renderManagerService, _permissionService, _sheetPermissionCheckController, _commandService, _editorBridgeService, _textSelectionManagerService, _univerInstanceService) {
		super();
		this._hoverManagerService = _hoverManagerService;
		this._sheetsHyperLinkPopupService = _sheetsHyperLinkPopupService;
		this._renderManagerService = _renderManagerService;
		this._permissionService = _permissionService;
		this._sheetPermissionCheckController = _sheetPermissionCheckController;
		this._commandService = _commandService;
		this._editorBridgeService = _editorBridgeService;
		this._textSelectionManagerService = _textSelectionManagerService;
		this._univerInstanceService = _univerInstanceService;
		this._initHoverListener();
		this._initCommandListener();
		this._initHoverEditingListener();
		this._initTextSelectionListener();
	}
	_getLinkPermission(location) {
		const { unitId, subUnitId, row: currentRow, col: currentCol } = location;
		const workbook = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_SHEET);
		const worksheet = workbook === null || workbook === void 0 ? void 0 : workbook.getSheetBySheetId(subUnitId);
		if (!worksheet) return {
			viewPermission: false,
			editPermission: false,
			copyPermission: false
		};
		const viewPermission = this._sheetPermissionCheckController.permissionCheckWithRanges({
			workbookTypes: [WorkbookViewPermission],
			worksheetTypes: [WorksheetViewPermission],
			rangeTypes: [RangeProtectionPermissionViewPoint]
		}, [{
			startRow: currentRow,
			startColumn: currentCol,
			endRow: currentRow,
			endColumn: currentCol
		}], unitId, subUnitId);
		let editPermission = this._sheetPermissionCheckController.permissionCheckWithRanges({
			workbookTypes: [WorkbookEditablePermission],
			worksheetTypes: [WorksheetEditPermission, WorksheetInsertHyperlinkPermission],
			rangeTypes: [RangeProtectionPermissionEditPoint]
		}, [{
			startRow: currentRow,
			startColumn: currentCol,
			endRow: currentRow,
			endColumn: currentCol
		}], unitId, subUnitId);
		const cell = worksheet.getCellRaw(currentRow, currentCol);
		if ((cell === null || cell === void 0 ? void 0 : cell.f) && cell.f.startsWith("=HYPERLINK(")) editPermission = false;
		const copyPermission = this._permissionService.composePermission([new WorkbookCopyPermission(unitId).id, new WorksheetCopyPermission(unitId, subUnitId).id]).every((permission) => permission.value);
		return {
			viewPermission,
			editPermission,
			copyPermission
		};
	}
	_initHoverListener() {
		this.disposeWithMe(this._hoverManagerService.currentRichText$.pipe(debounceTime(200)).subscribe((currentCell) => {
			var _currentCell$customRa, _renderer$with$getSke, _style$tr;
			if (!currentCell || ((_currentCell$customRa = currentCell.customRange) === null || _currentCell$customRa === void 0 ? void 0 : _currentCell$customRa.rangeType) !== CustomRangeType.HYPERLINK) {
				this._sheetsHyperLinkPopupService.hideCurrentPopup();
				return;
			}
			const { unitId, subUnitId, row, col } = currentCell;
			const renderer = this._renderManagerService.getRenderUnitById(unitId);
			if (!renderer) return;
			const workbook = this._univerInstanceService.getUnit(unitId, UniverInstanceType.UNIVER_SHEET);
			const worksheet = workbook === null || workbook === void 0 ? void 0 : workbook.getSheetBySheetId(subUnitId);
			if (!worksheet) return;
			if (!renderer.with(HoverRenderController).active) {
				this._sheetsHyperLinkPopupService.hideCurrentPopup("viewing");
				return;
			}
			const skeleton = renderer === null || renderer === void 0 || (_renderer$with$getSke = renderer.with(SheetSkeletonManagerService).getSkeletonParam(subUnitId)) === null || _renderer$with$getSke === void 0 ? void 0 : _renderer$with$getSke.skeleton;
			const currentCol = col;
			const currentRow = row;
			let targetRow = currentRow;
			let targetCol = currentCol;
			if (skeleton) skeleton.overflowCache.forValue((row, col, value) => {
				if (Rectangle.contains(value, {
					startColumn: currentCol,
					endColumn: currentCol,
					startRow: currentRow,
					endRow: currentRow
				})) {
					targetRow = row;
					targetCol = col;
				}
			});
			const { viewPermission, editPermission, copyPermission } = this._getLinkPermission(currentCell);
			if (!viewPermission) {
				this._sheetsHyperLinkPopupService.hideCurrentPopup();
				return;
			}
			const cell = worksheet.getCellStyleOnly(targetRow, targetCol);
			const style = workbook.getStyles().getStyleByCell(cell);
			const tr = style === null || style === void 0 || (_style$tr = style.tr) === null || _style$tr === void 0 ? void 0 : _style$tr.a;
			if (!tr && !currentCell.customRange) {
				this._sheetsHyperLinkPopupService.hideCurrentPopup();
				return;
			}
			this._sheetsHyperLinkPopupService.showPopup({
				row: targetRow,
				col: targetCol,
				editPermission,
				copyPermission,
				customRange: currentCell.customRange,
				customRangeRect: currentCell.rect,
				type: "viewing",
				unitId,
				subUnitId,
				showAll: Boolean(tr)
			});
		}));
	}
	_initHoverEditingListener() {
		let subscribe = null;
		this.disposeWithMe(this._editorBridgeService.currentEditCellState$.pipe(switchMap((state) => this._editorBridgeService.visible$.pipe(map((visible) => ({
			visible,
			state
		}))))).subscribe(({ visible, state }) => {
			if (!state) return;
			if (state.editorUnitId !== DOCS_NORMAL_EDITOR_UNIT_ID_KEY) return;
			if (!visible.visible) {
				subscribe === null || subscribe === void 0 || subscribe.unsubscribe();
				this._sheetsHyperLinkPopupService.hideCurrentPopup("editing");
				this._sheetsHyperLinkPopupService.endEditing("editing");
				return;
			}
			const { editorUnitId, unitId, sheetId, row, column } = state;
			const renderer = this._renderManagerService.getRenderUnitById(editorUnitId);
			if (!renderer) return;
			const { editPermission, viewPermission, copyPermission } = this._getLinkPermission({
				unitId,
				subUnitId: sheetId,
				row,
				col: column
			});
			const docEventService = renderer.with(DocEventManagerService);
			if (!viewPermission) return;
			subscribe === null || subscribe === void 0 || subscribe.unsubscribe();
			subscribe = docEventService.hoverCustomRanges$.pipe(debounceTime(200)).subscribe((customRanges) => {
				var _this$_renderManagerS;
				const customRange = customRanges.find((customRange) => customRange.range.rangeType === CustomRangeType.HYPERLINK);
				if (!customRange) {
					this._sheetsHyperLinkPopupService.hideCurrentPopup();
					return;
				}
				const rect = customRange.rects[customRange.rects.length - 1];
				if (!((_this$_renderManagerS = this._renderManagerService.getRenderUnitById(unitId)) === null || _this$_renderManagerS === void 0 || (_this$_renderManagerS = _this$_renderManagerS.with(SheetSkeletonManagerService).getSkeletonParam(sheetId)) === null || _this$_renderManagerS === void 0 ? void 0 : _this$_renderManagerS.skeleton) || !rect) return;
				const canvasClientRect = renderer.engine.getCanvasElement().getBoundingClientRect();
				this._sheetsHyperLinkPopupService.showPopup({
					unitId,
					subUnitId: sheetId,
					row,
					col: column,
					customRange: customRange.range,
					customRangeRect: {
						left: rect.left + canvasClientRect.left,
						top: rect.top + canvasClientRect.top,
						bottom: rect.bottom + canvasClientRect.top,
						right: rect.right + canvasClientRect.left
					},
					editPermission,
					copyPermission,
					type: "editing"
				});
			});
		}));
		this.disposeWithMe(() => {
			subscribe === null || subscribe === void 0 || subscribe.unsubscribe();
		});
	}
	_initTextSelectionListener() {
		this.disposeWithMe(this._textSelectionManagerService.textSelection$.subscribe((selection) => {
			if (selection && selection.unitId === DOCS_NORMAL_EDITOR_UNIT_ID_KEY) this._sheetsHyperLinkPopupService.endEditing("editing");
		}));
	}
	_initCommandListener() {
		const HIDE_COMMAND_LIST = [
			ClearSelectionContentCommand.id,
			ClearSelectionAllCommand.id,
			ClearSelectionFormatCommand.id
		];
		this.disposeWithMe(this._commandService.onCommandExecuted((command) => {
			if (HIDE_COMMAND_LIST.includes(command.id)) this._sheetsHyperLinkPopupService.hideCurrentPopup();
		}));
	}
};
SheetsHyperLinkPopupController = __decorate([
	__decorateParam(0, Inject(HoverManagerService)),
	__decorateParam(1, Inject(SheetsHyperLinkPopupService)),
	__decorateParam(2, Inject(IRenderManagerService)),
	__decorateParam(3, Inject(IPermissionService)),
	__decorateParam(4, Inject(SheetPermissionCheckController)),
	__decorateParam(5, ICommandService),
	__decorateParam(6, IEditorBridgeService),
	__decorateParam(7, Inject(DocSelectionManagerService)),
	__decorateParam(8, IUniverInstanceService)
], SheetsHyperLinkPopupController);

//#endregion
//#region src/controllers/render-controllers/render.controller.ts
let SheetsHyperLinkRenderController = class SheetsHyperLinkRenderController extends Disposable {
	constructor(_context, _hyperLinkModel) {
		super();
		this._context = _context;
		this._hyperLinkModel = _hyperLinkModel;
		this._initSkeletonChange();
	}
	_initSkeletonChange() {
		const markSkeletonDirty = () => {
			var _this$_context$mainCo;
			(_this$_context$mainCo = this._context.mainComponent) === null || _this$_context$mainCo === void 0 || _this$_context$mainCo.makeForceDirty();
		};
		this.disposeWithMe(this._hyperLinkModel.linkUpdate$.pipe(debounceTime(16)).subscribe(() => {
			markSkeletonDirty();
		}));
	}
};
SheetsHyperLinkRenderController = __decorate([__decorateParam(1, Inject(HyperLinkModel))], SheetsHyperLinkRenderController);

//#endregion
//#region src/controllers/ui.controller.ts
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
let SheetsHyperLinkUIController = class SheetsHyperLinkUIController extends Disposable {
	constructor(_commandService, _menuManagerService, _shortcutService) {
		super();
		this._commandService = _commandService;
		this._menuManagerService = _menuManagerService;
		this._shortcutService = _shortcutService;
		this._initCommands();
		this._initMenus();
		this._initShortCut();
	}
	_initCommands() {
		[
			OpenHyperLinkEditPanelOperation,
			CloseHyperLinkPopupOperation,
			InsertHyperLinkOperation,
			InsertHyperLinkToolbarOperation
		].forEach((command) => {
			this._commandService.registerCommand(command);
		});
	}
	_initMenus() {
		this._menuManagerService.mergeMenu(menuSchema);
	}
	_initShortCut() {
		this._shortcutService.registerShortcut(InsertLinkShortcut);
	}
};
SheetsHyperLinkUIController = __decorate([
	__decorateParam(0, ICommandService),
	__decorateParam(1, IMenuManagerService),
	__decorateParam(2, Inject(IShortcutService))
], SheetsHyperLinkUIController);

//#endregion
//#region src/controllers/url.controller.ts
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
let SheetHyperLinkUrlController = class SheetHyperLinkUrlController extends Disposable {
	constructor(_parserService, _resolverService) {
		super();
		this._parserService = _parserService;
		this._resolverService = _resolverService;
		this._handleInitUrl();
	}
	_handleInitUrl() {
		const hash = location.hash;
		if (hash) {
			const linkInfo = this._parserService.parseHyperLink(hash);
			this._resolverService.navigate(linkInfo);
		}
	}
};
SheetHyperLinkUrlController = __decorate([__decorateParam(0, Inject(SheetsHyperLinkParserService)), __decorateParam(1, Inject(SheetsHyperLinkResolverService))], SheetHyperLinkUrlController);

//#endregion
//#region src/plugin.ts
let UniverSheetsHyperLinkUIPlugin = class UniverSheetsHyperLinkUIPlugin extends Plugin {
	constructor(_config = defaultPluginConfig, _injector, _configService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._configService = _configService;
		const { menu, ...rest } = merge({}, defaultPluginConfig, this._config);
		if (menu) this._configService.setConfig("menu", menu, { merge: true });
		this._configService.setConfig(SHEETS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY, rest);
	}
	onStarting() {
		this._injector.add([ComponentsController]);
		this._injector.get(ComponentsController);
		[
			[SheetsHyperLinkResolverService],
			[SheetsHyperLinkPopupService],
			[SheetsHyperLinkSidePanelService],
			[SheetsHyperLinkPopupController],
			[SheetsHyperLinkUIController],
			[SheetsHyperLinkAutoFillController],
			[SheetsHyperLinkCopyPasteController],
			[SheetsHyperLinkPermissionController],
			[SheetHyperLinkUrlController]
		].forEach((dep) => this._injector.add(dep));
	}
	onReady() {
		this._injector.get(IRenderManagerService).registerRenderModule(UniverInstanceType.UNIVER_SHEET, [SheetsHyperLinkRenderController]);
		this._injector.get(SheetsHyperLinkAutoFillController);
		this._injector.get(SheetsHyperLinkCopyPasteController);
		this._injector.get(SheetsHyperLinkUIController);
	}
	onRendered() {
		this._injector.get(SheetsHyperLinkPermissionController);
		this._injector.get(SheetHyperLinkUrlController);
		this._injector.get(SheetsHyperLinkPopupController);
	}
};
_defineProperty(UniverSheetsHyperLinkUIPlugin, "pluginName", SHEET_HYPER_LINK_UI_PLUGIN);
_defineProperty(UniverSheetsHyperLinkUIPlugin, "packageName", name);
_defineProperty(UniverSheetsHyperLinkUIPlugin, "version", version);
_defineProperty(UniverSheetsHyperLinkUIPlugin, "type", UniverInstanceType.UNIVER_SHEET);
UniverSheetsHyperLinkUIPlugin = __decorate([
	DependentOn(UniverDocsPlugin, UniverFormulaEnginePlugin, UniverRenderEnginePlugin, UniverSheetsPlugin, UniverDocsUIPlugin, UniverSheetsHyperLinkPlugin, UniverSheetsUIPlugin),
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, IConfigService)
], UniverSheetsHyperLinkUIPlugin);

//#endregion
export { CloseHyperLinkPopupOperation, InsertHyperLinkOperation, InsertLinkShortcut, OpenHyperLinkEditPanelOperation, SheetsHyperLinkCopyPasteController, SheetsHyperLinkPopupService, SheetsHyperLinkResolverService, SheetsHyperLinkSidePanelService, menuSchema as SheetsHyperLinkUIMenuSchema, UniverSheetsHyperLinkUIPlugin };