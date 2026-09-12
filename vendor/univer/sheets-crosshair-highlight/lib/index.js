import { ColorKit, CommandType, DependentOn, Disposable, ICommandService, IConfigService, IContextService, Inject, Injector, Plugin, RANGE_TYPE, Rectangle, ThemeService, UniverInstanceType, getIntersectRange, merge } from "@univerjs/core";
import { BehaviorSubject, combineLatest, map, merge as merge$1, startWith, tap } from "rxjs";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, IMenuManagerService, IconManager, MenuItemType, RibbonViewGroup, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { IRenderManagerService, Rect, Shape, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { IRefSelectionsService, REF_SELECTIONS_ENABLED, SheetsSelectionsService, UniverSheetsPlugin } from "@univerjs/sheets";
import { SheetSkeletonManagerService, UniverSheetsUIPlugin, getCoordByCell } from "@univerjs/sheets-ui";
import { CrossHighlightingIcon } from "@univerjs/icons";
import { borderClassName, clsx } from "@univerjs/design";
import { useCallback } from "react";
import { jsx } from "react/jsx-runtime";

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
//#region src/services/crosshair.service.ts
const CROSSHAIR_HIGHLIGHT_COLOR_THEME_PATHS = Array.from({ length: 16 }, (_, index) => `highlight.background.${index + 1}`);
const DEFAULT_CROSSHAIR_HIGHLIGHT_COLOR_THEME_PATH = CROSSHAIR_HIGHLIGHT_COLOR_THEME_PATHS[0];
function resolveCrosshairHighlightColor(themeService, tokenPath) {
	const token = themeService.getColorFromTheme(tokenPath);
	if (token == null || typeof token.color !== "string" || typeof token.alpha !== "number") throw new Error(`Theme token ${tokenPath} is required.`);
	return new ColorKit(themeService.getColorFromTheme(token.color) ?? token.color).setAlpha(token.alpha).toRgbString();
}
function resolveCrosshairHighlightColors(themeService) {
	return CROSSHAIR_HIGHLIGHT_COLOR_THEME_PATHS.map((tokenPath) => resolveCrosshairHighlightColor(themeService, tokenPath));
}
let SheetsCrosshairHighlightService = class SheetsCrosshairHighlightService extends Disposable {
	get enabled() {
		return this._enabled$.getValue();
	}
	constructor(_themeService) {
		super();
		this._themeService = _themeService;
		_defineProperty(this, "_enabled$", new BehaviorSubject(false));
		_defineProperty(this, "enabled$", this._enabled$.asObservable());
		_defineProperty(this, "_colorToken$", new BehaviorSubject(DEFAULT_CROSSHAIR_HIGHLIGHT_COLOR_THEME_PATH));
		_defineProperty(this, "colorToken$", this._colorToken$.asObservable());
		_defineProperty(this, "color$", void 0);
		_defineProperty(this, "highlightColor$", void 0);
		this.color$ = combineLatest([this._colorToken$, this._themeService.currentTheme$]).pipe(map(([tokenPath]) => resolveCrosshairHighlightColor(this._themeService, tokenPath)));
		this.highlightColor$ = this.color$;
	}
	dispose() {
		this._enabled$.complete();
		this._colorToken$.complete();
	}
	setEnabled(value) {
		this._enabled$.next(value);
	}
	setColor(value) {
		this._colorToken$.next(value);
	}
};
SheetsCrosshairHighlightService = __decorate([__decorateParam(0, Inject(ThemeService))], SheetsCrosshairHighlightService);

//#endregion
//#region src/commands/operations/operation.ts
/**
* A {@link CommandType.OPERATION} to toggle the crosshair highlight.
*/
const ToggleCrosshairHighlightOperation = {
	id: "sheet.operation.toggle-crosshair-highlight",
	type: CommandType.OPERATION,
	handler(accessor) {
		const service = accessor.get(SheetsCrosshairHighlightService);
		const turnedOn = service.enabled;
		service.setEnabled(!turnedOn);
		return true;
	}
};
/**
* A {@link CommandType.OPERATION} to set the crosshair highlight color. If the crosshair highlight is not enabled,
* it will be enabled.
*/
const SetCrosshairHighlightColorOperation = {
	id: "sheet.operation.set-crosshair-highlight-color",
	type: CommandType.OPERATION,
	handler(accessor, { value }) {
		const service = accessor.get(SheetsCrosshairHighlightService);
		if (!service.enabled) service.setEnabled(true);
		service.setColor(value);
		return true;
	}
};
/**
* A {@link CommandType.OPERATION} to enable the crosshair highlight.
*/
const EnableCrosshairHighlightOperation = {
	id: "sheet.operation.enable-crosshair-highlight",
	type: CommandType.OPERATION,
	handler(accessor) {
		const service = accessor.get(SheetsCrosshairHighlightService);
		if (service.enabled) return false;
		service.setEnabled(true);
		return true;
	}
};
/**
* A {@link CommandType.OPERATION} to disable the crosshair highlight.
*/
const DisableCrosshairHighlightOperation = {
	id: "sheet.operation.disable-crosshair-highlight",
	type: CommandType.OPERATION,
	handler(accessor) {
		const service = accessor.get(SheetsCrosshairHighlightService);
		if (!service.enabled) return false;
		service.setEnabled(false);
		return true;
	}
};

//#endregion
//#region src/menu/crosshair.menu.ts
const CROSSHAIR_HIGHLIGHT_OVERLAY_COMPONENT = "CROSSHAIR_HIGHLIGHT_OVERLAY_COMPONENT";
function CrosshairHighlightMenuItemFactory(accessor) {
	const crosshairHighlightService = accessor.get(SheetsCrosshairHighlightService);
	return {
		id: ToggleCrosshairHighlightOperation.id,
		tooltip: "sheets-crosshair-highlight.button.tooltip",
		type: MenuItemType.BUTTON_SELECTOR,
		icon: "CrossHighlightingIcon",
		selections: [{ label: {
			name: CROSSHAIR_HIGHLIGHT_OVERLAY_COMPONENT,
			hoverable: false,
			selectable: false,
			props: { embedded: true }
		} }],
		selectionsCommandId: SetCrosshairHighlightColorOperation.id,
		activated$: crosshairHighlightService.enabled$,
		hidden$: getMenuHiddenObservable(accessor, UniverInstanceType.UNIVER_SHEET)
	};
}

//#endregion
//#region src/menu/schema.ts
const menuSchema = {
	[RibbonViewGroup.VISIBILITY]: { [ToggleCrosshairHighlightOperation.id]: {
		order: 1,
		gridLayout: {
			row: 2,
			column: 1,
			showLabel: true
		},
		menuItemFactory: CrosshairHighlightMenuItemFactory
	} },
	[ContextMenuPosition.FOOTER_MENU]: { [ContextMenuGroup.OTHERS]: { [ToggleCrosshairHighlightOperation.id]: {
		order: 0,
		menuItemFactory: CrosshairHighlightMenuItemFactory
	} } }
};

//#endregion
//#region package.json
var name = "@univerjs/sheets-crosshair-highlight";
var version = "1.0.0-insiders.20260907-70fc579";

//#endregion
//#region src/config/config.ts
const SHEETS_CROSSHAIR_HIGHLIGHT_PLUGIN_CONFIG_KEY = "sheets-crosshair-highlight.config";
const configSymbol = Symbol(SHEETS_CROSSHAIR_HIGHLIGHT_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {};

//#endregion
//#region src/views/components/CrosshairHighlight.tsx
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
function CrosshairOverlay(props) {
	const { onChange } = props;
	const crosshairSrv = useDependency(SheetsCrosshairHighlightService);
	const themeService = useDependency(ThemeService);
	const currentColor = useObservable(crosshairSrv.color$);
	const colors = useObservable(() => themeService.currentTheme$.pipe(map(() => resolveCrosshairHighlightColors(themeService))), resolveCrosshairHighlightColors(themeService), false, [themeService]);
	const handleColorPicked = useCallback((tokenPath) => {
		onChange === null || onChange === void 0 || onChange(tokenPath);
	}, [onChange]);
	return /* @__PURE__ */ jsx("div", {
		className: "univer-grid univer-grid-cols-8 univer-gap-x-2 univer-gap-y-3 univer-p-1.5",
		children: colors.map((color, index) => {
			return /* @__PURE__ */ jsx("div", {
				className: clsx("hover:univer-ring-primary-600/40 univer-box-border univer-size-5 univer-cursor-pointer univer-rounded univer-ring-offset-1 univer-transition-shadow hover:univer-ring-[1.5px]", borderClassName, { "univer-ring-[1.5px] univer-ring-primary-600 hover:univer-ring-primary-600": color === currentColor }),
				style: { backgroundColor: color },
				onClick: () => handleColorPicked(CROSSHAIR_HIGHLIGHT_COLOR_THEME_PATHS[index])
			}, CROSSHAIR_HIGHLIGHT_COLOR_THEME_PATHS[index]);
		})
	});
}

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
		this.disposeWithMe(this._componentManager.register(CROSSHAIR_HIGHLIGHT_OVERLAY_COMPONENT, CrosshairOverlay));
	}
	_registerIcons() {
		this.disposeWithMe(this._iconManager.register({ CrossHighlightingIcon }));
	}
};
ComponentsController = __decorate([__decorateParam(0, Inject(ComponentManager)), __decorateParam(1, Inject(IconManager))], ComponentsController);

//#endregion
//#region src/controllers/crosshair.controller.ts
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
let SheetsCrosshairHighlightController = class SheetsCrosshairHighlightController extends Disposable {
	constructor(_menuManagerService, _cmdSrv) {
		super();
		this._menuManagerService = _menuManagerService;
		this._cmdSrv = _cmdSrv;
		this._initCommands();
		this._initMenus();
	}
	_initCommands() {
		[
			ToggleCrosshairHighlightOperation,
			SetCrosshairHighlightColorOperation,
			EnableCrosshairHighlightOperation,
			DisableCrosshairHighlightOperation
		].forEach((c) => this._cmdSrv.registerCommand(c));
	}
	_initMenus() {
		this._menuManagerService.mergeMenu(menuSchema);
	}
};
SheetsCrosshairHighlightController = __decorate([__decorateParam(0, IMenuManagerService), __decorateParam(1, ICommandService)], SheetsCrosshairHighlightController);

//#endregion
//#region src/util.ts
var CrossHairRangeCollection = class {
	constructor() {
		_defineProperty(this, "_selectedRanges", []);
		_defineProperty(this, "_ranges", []);
	}
	addRange(range) {
		if (range.rangeType === RANGE_TYPE.COLUMN || range.rangeType === RANGE_TYPE.ROW || range.rangeType === RANGE_TYPE.ALL) return;
		const intersects = this._getIntersects(range);
		const splitRanges = this._getSplitRanges(range, intersects);
		if (splitRanges.length > 0) this._ranges.push(...splitRanges);
	}
	setSelectedRanges(selectedRange) {
		this._selectedRanges = selectedRange;
	}
	_getSplitRanges(range, intersects) {
		let splitRanges = [range];
		for (const intersect of intersects.concat(this._selectedRanges)) {
			const newRanges = [];
			for (const splitRange of splitRanges) {
				const split = Rectangle.subtract(splitRange, intersect);
				if (split && split.length > 0) newRanges.push(...split);
			}
			splitRanges = newRanges;
		}
		return splitRanges.filter((range) => range.startRow <= range.endRow && range.startColumn <= range.endColumn);
	}
	_getIntersects(addRange) {
		const intersects = [];
		for (const range of this._ranges) {
			const intersect = getIntersectRange(range, addRange);
			if (intersect) intersects.push(intersect);
		}
		return intersects;
	}
	getRanges() {
		return this._ranges;
	}
	reset() {
		this._ranges = [];
		this._selectedRanges = [];
	}
};

//#endregion
//#region src/views/widgets/crosshair-highlight-shape.ts
var SheetCrossHairHighlightShape = class extends Shape {
	constructor(key, props) {
		super(key, props);
		_defineProperty(this, "_color", void 0);
		if (props) this.setShapeProps(props);
	}
	setShapeProps(props) {
		if (typeof props.color !== "undefined") this._color = props.color;
		this.transformByState({
			width: props.width,
			height: props.height
		});
	}
	_draw(ctx) {
		var _this$_color;
		const color = `rgba(${this._color.r}, ${this._color.g}, ${this._color.b}, ${((_this$_color = this._color) === null || _this$_color === void 0 ? void 0 : _this$_color.a) ?? .5})`;
		Rect.drawWith(ctx, {
			width: this.width,
			height: this.height,
			fill: color,
			stroke: void 0,
			strokeWidth: 0,
			evented: false
		});
	}
};

//#endregion
//#region src/views/widgets/crosshair-highlight.render-controller.ts
let SheetCrosshairHighlightRenderController = class SheetCrosshairHighlightRenderController extends Disposable {
	constructor(_context, _sheetSkeletonManagerService, _sheetsSelectionsService, _sheetsCrosshairHighlightService, _contextService, _refSelectionsService) {
		super();
		this._context = _context;
		this._sheetSkeletonManagerService = _sheetSkeletonManagerService;
		this._sheetsSelectionsService = _sheetsSelectionsService;
		this._sheetsCrosshairHighlightService = _sheetsCrosshairHighlightService;
		this._contextService = _contextService;
		this._refSelectionsService = _refSelectionsService;
		_defineProperty(this, "_shapes", []);
		_defineProperty(this, "_rangeCollection", new CrossHairRangeCollection());
		_defineProperty(this, "_color", "rgba(255,0,0,0.5)");
		this._initRenderListener();
	}
	_transformSelection(selectionData, sheet) {
		if (!selectionData) return;
		const rowCount = sheet.getRowCount();
		const columnCount = sheet.getColumnCount();
		const ranges = [];
		for (const selection of selectionData) {
			const { startRow, endRow, startColumn, endColumn } = selection.range;
			if (endRow - startRow + 1 === rowCount || endColumn - startColumn + 1 === columnCount) continue;
			ranges.push(selection.range);
		}
		this._rangeCollection.setSelectedRanges(ranges);
		for (const range of ranges) this.addSelection(range, sheet);
	}
	_initRenderListener() {
		const workbook = this._context.unit;
		this.disposeWithMe(combineLatest([
			this._contextService.subscribeContextValue$(REF_SELECTIONS_ENABLED).pipe(startWith(false)),
			this._sheetSkeletonManagerService.currentSkeleton$,
			this._sheetsCrosshairHighlightService.enabled$,
			this._sheetsCrosshairHighlightService.highlightColor$.pipe(tap((color) => this._color = color)),
			merge$1(this._sheetsSelectionsService.selectionMoveStart$, this._sheetsSelectionsService.selectionMoving$, this._sheetsSelectionsService.selectionMoveEnd$, this._sheetsSelectionsService.selectionSet$, workbook.activeSheet$.pipe(map(() => this._sheetsSelectionsService.getCurrentSelections()))),
			merge$1(this._refSelectionsService.selectionMoveStart$, this._refSelectionsService.selectionMoving$, this._refSelectionsService.selectionMoveEnd$, this._sheetsSelectionsService.selectionSet$, workbook.activeSheet$.pipe(map(() => this._refSelectionsService.getCurrentSelections())))
		]).subscribe(([refSelectionEnabled, _, enabled, _color, normalSelections, refSelection]) => {
			this._clear();
			if (!enabled) return;
			const selections = refSelectionEnabled ? refSelection : normalSelections;
			this._rangeCollection.reset();
			this._transformSelection(selections, workbook.getActiveSheet());
			this.render(this._rangeCollection.getRanges());
		}));
	}
	addSelection(range, sheet) {
		if (range.rangeType === RANGE_TYPE.COLUMN || range.rangeType === RANGE_TYPE.ROW || range.rangeType === RANGE_TYPE.ALL) return;
		const maxRow = sheet.getRowCount();
		const maxColumn = sheet.getColumnCount();
		const { startRow, endRow, startColumn, endColumn } = range;
		const left = {
			startRow,
			endRow,
			startColumn: 0,
			endColumn: startColumn - 1
		};
		const right = {
			startRow,
			endRow,
			startColumn: endColumn + 1,
			endColumn: maxColumn
		};
		const top = {
			startRow: 0,
			endRow: startRow - 1,
			startColumn,
			endColumn
		};
		const bottom = {
			startRow: endRow + 1,
			endRow: maxRow,
			startColumn,
			endColumn
		};
		for (const range of [
			left,
			right,
			top,
			bottom
		]) if (range.startRow <= range.endRow && range.startColumn <= range.endColumn) this._rangeCollection.addRange(range);
	}
	_clear() {
		this._shapes.forEach((shape) => {
			shape.dispose();
		});
		this._shapes = [];
	}
	_addShapes(range, index, scene, skeleton) {
		const { startRow, endRow, startColumn, endColumn } = range;
		const startPosition = getCoordByCell(startRow, startColumn, scene, skeleton);
		const endPosition = getCoordByCell(endRow, endColumn, scene, skeleton);
		const { startX, startY } = startPosition;
		const { endX, endY } = endPosition;
		const width = endX - startX;
		const height = endY - startY;
		const shapeProps = {
			left: startX,
			top: startY,
			color: new ColorKit(this._color).toRgb(),
			width,
			height,
			zIndex: 1,
			evented: false
		};
		const currentShapes = new SheetCrossHairHighlightShape(`crosshair-${index}`, shapeProps);
		this._shapes.push(currentShapes);
		scene.addObject(currentShapes);
	}
	render(ranges) {
		const skeleton = this._sheetSkeletonManagerService.getCurrentSkeleton();
		if (!skeleton) return;
		const { scene } = this._context;
		this._clear();
		for (let i = 0; i < ranges.length; i++) {
			const range = ranges[i];
			this._addShapes(range, i, scene, skeleton);
		}
		scene.makeDirty(true);
	}
	async dispose() {
		super.dispose();
	}
};
SheetCrosshairHighlightRenderController = __decorate([
	__decorateParam(1, Inject(SheetSkeletonManagerService)),
	__decorateParam(2, Inject(SheetsSelectionsService)),
	__decorateParam(3, Inject(SheetsCrosshairHighlightService)),
	__decorateParam(4, Inject(IContextService)),
	__decorateParam(5, IRefSelectionsService)
], SheetCrosshairHighlightRenderController);

//#endregion
//#region src/plugin.ts
let UniverSheetsCrosshairHighlightPlugin = class UniverSheetsCrosshairHighlightPlugin extends Plugin {
	constructor(_config = defaultPluginConfig, _injector, _renderManagerService, _configService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._renderManagerService = _renderManagerService;
		this._configService = _configService;
		const { ...rest } = merge({}, defaultPluginConfig, this._config);
		this._configService.setConfig(SHEETS_CROSSHAIR_HIGHLIGHT_PLUGIN_CONFIG_KEY, rest);
	}
	onStarting() {
		[
			[ComponentsController],
			[SheetsCrosshairHighlightService],
			[SheetsCrosshairHighlightController]
		].forEach((d) => this._injector.add(d));
	}
	onReady() {
		[[SheetCrosshairHighlightRenderController]].forEach((d) => this._injector.add(d));
		this._injector.get(ComponentsController);
		this._injector.get(SheetsCrosshairHighlightController);
		this._renderManagerService.registerRenderModule(UniverInstanceType.UNIVER_SHEET, [SheetCrosshairHighlightRenderController]);
	}
};
_defineProperty(UniverSheetsCrosshairHighlightPlugin, "pluginName", "SHEET_CROSSHAIR_HIGHLIGHT_PLUGIN");
_defineProperty(UniverSheetsCrosshairHighlightPlugin, "packageName", name);
_defineProperty(UniverSheetsCrosshairHighlightPlugin, "version", version);
_defineProperty(UniverSheetsCrosshairHighlightPlugin, "type", UniverInstanceType.UNIVER_SHEET);
UniverSheetsCrosshairHighlightPlugin = __decorate([
	DependentOn(UniverRenderEnginePlugin, UniverSheetsPlugin, UniverSheetsUIPlugin),
	__decorateParam(1, Inject(Injector)),
	__decorateParam(2, IRenderManagerService),
	__decorateParam(3, IConfigService)
], UniverSheetsCrosshairHighlightPlugin);

//#endregion
export { DisableCrosshairHighlightOperation, EnableCrosshairHighlightOperation, SetCrosshairHighlightColorOperation, menuSchema as SheetsCrosshairHighlightMenuSchema, SheetsCrosshairHighlightService, ToggleCrosshairHighlightOperation, UniverSheetsCrosshairHighlightPlugin };