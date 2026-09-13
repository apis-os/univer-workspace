import { ComponentManager, ContextMenuGroup, ContextMenuPosition, IDialogService, IMenuManagerService, IMessageService, ISidebarService, IconManager, MenuItemType, RibbonDataGroup, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { AddPivotFieldCommand, AddPivotTableCommand, MovePivotFieldCommand, PIVOT_DATE_GROUP_TYPES, PivotDisplayDataType, PivotDrillDownCommand, PositionType, RemovePivotFieldCommand, RemovePivotTableMutation, SHEETS_PIVOT_PLUGIN_CONFIG_KEY, SHEET_PIVOT_TABLE_PLUGIN, SetPivotCollapseCommand, SetPivotDateGroupCommand, SetPivotFilterCommand, SetPivotLayoutCommand, SetPivotOptionCommand, SetPivotSortCommand, SetPivotValueFilterCommand, SheetsPivotRPCService, SheetsPivotTableAdaptorModel, SheetsPivotTableConfigModel, SheetsPivotTableService, UniverSheetsPivotTablePlugin, UpdatePivotFieldSettingCommand, UpdatePivotTableSourceRangeCommand, UpdatePivotValuePositionCommand, generateSetRangeValueMutations, getPivotAppliedRanges, getPivotDateGroupContext, isPivotDateGroupTypeDisabled, isolateTextForBidiContext, mapPivotSheetColumn, mapPivotSheetRange, resolvePivotSheetCell, resolvePivotValueFieldId, resolvePivotValueFilterTarget, unionPivotViewRange } from "@univerjs-pro/sheets-pivot";
import { CommandType, CustomCommandExecutionError, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IConfirmService, ILogService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, RANGE_TYPE, Rectangle, ThemeService, UniverInstanceType, cellToRange, currencySymbols, debounce, generateRandomId, isPatternEqualWithoutDecimal, isValidRange, merge, numfmt } from "@univerjs/core";
import { AddWorksheetMergeMutation, InsertColCommand, InsertRowCommand, MergeCellController, MoveRangeCommand, RangeProtectionPermissionEditPoint, RangeProtectionPermissionViewPoint, RemoveColCommand, RemoveRowCommand, SheetInterceptorService, SheetPermissionCheckController, SheetsSelectionsService, UniverSheetsPlugin, WorkbookEditablePermission, WorksheetEditPermission, WorksheetPivotTablePermission, WorksheetViewPermission, checkRangesEditablePermission, expandToContinuousRange, getSheetCommandTarget, isSingleCellSelection } from "@univerjs/sheets";
import { ActionRow, Button, Checkbox, Dropdown, Input, InputNumber, MessageType, Radio, RadioGroup, Select, SelectList, Tooltip, borderClassName, clsx, scrollbarClassName } from "@univerjs/design";
import { deserializeRangeWithSheet, serializeRangeWithSheet } from "@univerjs/engine-formula";
import { RangeSelector } from "@univerjs/sheets-formula-ui";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Subject, auditTime, map, merge as mergeLocal, startWith } from "rxjs";
import { PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotFilterTypeEnum, PivotLayoutTypeEnum, PivotShowAsBaseItemTypeEnum, PivotShowAsTypeEnum, PivotSubtotalPositionEnum, PivotSubtotalTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, ST_PivotFilterOperatorEnum, isManualPivotFilter, isValueFilterOperator } from "@univerjs-pro/engine-pivot";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { IFormatPainterService, ISheetClipboardService, ISheetSelectionRenderService, SetCellEditVisibleOperation, SheetPrintInterceptorService, SheetSkeletonManagerService, UniverSheetsUIPlugin, getCoordByCell, getCoordByOffset, getCurrentRangeDisable$, getObservableWithExclusiveRange$, getSheetObject } from "@univerjs/sheets-ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { CURSOR_TYPE, IRenderManagerService, Rect, Shape, UniverRenderEnginePlugin, Vector2 } from "@univerjs/engine-render";
import { ArrowLeftIcon, AscendingIcon, CalendarIcon, CheckMarkIcon, ColumnIcon, DescendingIcon, FilterIcon, FunctionIcon, GripVerticalIcon, MoreDownIcon, MoreHorizontalIcon, NumberIcon, PivotTableIcon, RowIcon, SearchIcon, TextIcon } from "@univerjs/icons";
import { InsertTextCommand } from "@univerjs/docs";
import { IMEInputCommand } from "@univerjs/docs-ui";
import { Ar, Br, Dr, Hr, Nr, Or, Tr, Ur, Vr, Wr, jr, zr } from "./internal-core-endo.js";
function Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896) {
  return {
    id: Tr.id,
    type: MenuItemType.BUTTON,
    icon: "PivotTableIcon",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896, UniverInstanceType.UNIVER_SHEET),
    disabled$: getObservableWithExclusiveRange$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896, getCurrentRangeDisable$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896, {
      workbookTypes: [WorkbookEditablePermission],
      worksheetTypes: [WorksheetViewPermission, WorksheetPivotTablePermission],
      rangeTypes: [RangeProtectionPermissionViewPoint]
    })),
    tooltip: "sheets-pivot-ui.title",
    title: "sheets-pivot-ui.title"
  };
}
function Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898) {
  return {
    id: Vr,
    type: MenuItemType.SUBITEMS,
    title: "sheets-pivot-ui.dateGroup.title",
    hidden$: Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898)
  };
}
function qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 => ({
    id: Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900),
    commandId: Dr.id,
    type: MenuItemType.BUTTON,
    title: Wr[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900],
    params: {
      dateType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900
    },
    disabled$: Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900),
    activated$: Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900)
  });
}
function Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461902) {
  return "sheet.pivot.context-menu.date-group." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461902;
}
function Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904) {
  return Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904).pipe(map(() => !Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904)));
}
function Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907) {
  return Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906).pipe(map(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 || isPivotDateGroupTypeDisabled(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.dateGroupContext, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907);
  }));
}
function Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911) {
  return Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910).pipe(map(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.dateGroupContext["currentDateType"]) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911;
  }));
}
function Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914.get(SheetsSelectionsService).selectionMoveEnd$["pipe"](startWith(null));
}
const var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68 = PIVOT_DATE_GROUP_TYPES.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916 => ({
  dateType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916,
  id: Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916),
  menuItemFactory: qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916)
}));
function ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917) {
  return {
    id: Hr,
    type: MenuItemType.SUBITEMS,
    title: "sheets-pivot-ui.showValuesAs.title",
    hidden$: ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917).pipe(map(() => !Nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917)))
  };
}
function ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461919) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 => ({
    id: ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461919.type),
    commandId: jr.id,
    type: MenuItemType.BUTTON,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461919.localeKey,
    params: {
      type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461919.type
    },
    activated$: ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558).pipe(map(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = Nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558);
      return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.currentShowDataAs["type"] ?? PivotShowAsTypeEnum.normal) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461919.type);
    }))
  });
}
function ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921) {
  return "sheet.pivot.context-menu.show-data-as." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921;
}
function ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923.get(SheetsSelectionsService).selectionMoveEnd$["pipe"](startWith(null));
}
const ii = Ar.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925 => ({
  rule: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925,
  id: ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925.type),
  menuItemFactory: ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925)
}));
function ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926) {
  return {
    id: Ur,
    commandId: Br.id,
    type: MenuItemType.BUTTON,
    title: "sheets-pivot-ui.valueFilter.title",
    hidden$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.get(SheetsSelectionsService).selectionMoveEnd$["pipe"](startWith(null), map(() => !zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926)))
  };
}
const oi = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.id] = {
    order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930 + 1,
    menuItemFactory: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.menuItemFactory
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928), {}),
  si = ii.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.id] = {
    order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933 + 1,
    menuItemFactory: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.menuItemFactory
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931), {}),
  ci = {
    [RibbonDataGroup.ORGANIZATION]: {
      [Tr.id]: {
        order: 1,
        gridLayout: {
          row: 2,
          column: 1
        },
        menuItemFactory: Gr
      }
    },
    [ContextMenuPosition.MAIN_AREA]: {
      [ContextMenuGroup.DATA]: {
        [Tr.id]: {
          order: 1,
          menuItemFactory: Gr
        },
        [Vr]: {
          order: 2,
          menuItemFactory: Kr,
          ...oi
        },
        [Hr]: {
          order: 3,
          menuItemFactory: ei,
          ...si
        },
        [Ur]: {
          order: 4,
          menuItemFactory: ai
        }
      }
    },
    [ContextMenuPosition.COL_HEADER]: {
      [ContextMenuGroup.DATA]: {
        [Tr.id]: {
          order: 1,
          menuItemFactory: Gr
        },
        [Vr]: {
          order: 2,
          menuItemFactory: Kr,
          ...oi
        }
      }
    }
  };
export { ci as SheetsPivotTableUIMenuSchema };
