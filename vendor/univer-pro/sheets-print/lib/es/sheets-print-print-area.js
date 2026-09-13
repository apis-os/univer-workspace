import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime, isLocalCheck } from '@univerjs-pro/license';
import { IPrintPreparationService, PRINT_CANVAS_CLASS, PRINT_CONTAINER_CLASS, PaperMarginMap, PrintAlign, PrintDirection, PrintPaperMargin, PrintPreparationService, PrintScale, createPrintStyle } from '@univerjs-pro/print';
import { BuildTextUtils, CommandType, CustomRangeType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, ILocalStorageService, IPermissionService, IUniverInstanceService, Inject, Injector, JSONX, LocaleService, PAGE_SIZE, PaperType, Plugin, Quantity, RichTextBuilder, Tools, UniverInstanceType, UserManagerService, awaitTime, createIdentifier, dateKit, generateRandomId, merge, registerDependencies, touchDependencies } from '@univerjs/core';
import { RangeProtectionPermissionViewPoint, SheetsSelectionsService, UniverSheetsPlugin, WorkbookCopyPermission, WorkbookPrintPermission, WorkbookViewPermission, WorksheetCopyPermission, WorksheetViewPermission, getSheetCommandTarget } from '@univerjs/sheets';
import { BuiltInUIPart, ComponentManager, ContextMenuGroup, ContextMenuPosition, IDialogService, IMenuManagerService, IMessageService, IShortcutService, ISidebarService, IUIPartsService, IconManager, KeyCode, MenuItemType, MetaKeys, RibbonStartGroup, connectInjector, getMenuHiddenObservable, useDependency, useEvent, useObservable, useVirtualList } from '@univerjs/ui';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { CanvasRenderMode, DEFAULT_FONTFACE_PLANE, Engine, IRenderManagerService, IWatermarkTypeEnum, SHEET_VIEWPORT_KEY, Scene, SheetExtension, Spreadsheet, SpreadsheetColumnHeader, SpreadsheetRowHeader, UNIVER_WATERMARK_STORAGE_KEY, UniverRenderEnginePlugin, Viewport, fixLineWidthByScale, renderWatermark } from '@univerjs/engine-render';
import { SheetPrintInterceptorService, SheetPrintingResourceCollector, SheetSkeletonManagerService, UniverSheetsUIPlugin, getCurrentRangeDisable$, whenSheetEditorFocused } from '@univerjs/sheets-ui';
import { Button, Checkbox, CheckboxGroup, Dropdown, FormLayout, Input, MessageType, Radio, RadioGroup, Select, borderBottomClassName, borderClassName, clsx, scrollbarClassName } from '@univerjs/design';
import { CalendarIcon, ClockIcon, DocSettingIcon, IncreaseIcon, LoadingMultiIcon, MoreDownIcon, PrintIcon, ReduceIcon, SheetIcon, TextIcon } from '@univerjs/icons';
import { forwardRef, memo, useEffect, useMemo, useRef, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { RichTextEditingMutation } from '@univerjs/docs';
import { IEditorService, RichTextEditor } from '@univerjs/docs-ui';
let Vt = function (localeService) {
    return localeService.CurrentSheet = 'CurrentSheet', localeService.workbook = 'Workbook', localeService.CurrentSelection = 'CurrentSelection', localeService.AllSelection = "AllSelection", localeService;
  }({}),
  Ht = function (pAGE_SIZE) {
    return pAGE_SIZE.PageSize = "PageSize", pAGE_SIZE.WorkbookTitle = "WorkbookTitle", pAGE_SIZE.WorksheetTitle = "WorksheetTitle", pAGE_SIZE.Date = "Date", pAGE_SIZE.Time = "Time", pAGE_SIZE;
  }({}),
  Ut = function (paperType) {
    return paperType.Row = "Row", paperType.Column = "Column", paperType;
  }({}),
  Wt = function (plugin) {
    return plugin.WorkbookTitle = "@WorkbookTitle", plugin.WorksheetTitle = "@WorksheetTitle", plugin.DateA = "@DateA", plugin.DateB = "@DateB", plugin.DateC = '@DateC', plugin.DateD = "@DateD", plugin.DateE = "@DateE", plugin.TimeA = "@TimeA", plugin.TimeB = "@TimeB", plugin.TimeC = '@TimeC', plugin.TimeD = "@TimeD", plugin.Page = "@Page", plugin.SheetPage = "@SheetPage", plugin.PageTotal = "@TotalPage", plugin.SheetPageTotal = "@TotalSheetPage", plugin;
  }({});
export { Vt as PrintArea, Ht as PrintHeaderFooter, Ut as PrintFreeze, Wt as PrintHeaderFooterSymbol };
