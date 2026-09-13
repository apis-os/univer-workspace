import { AddSheetSparklineCommand, AddSheetSparklineMutation, PLUGIN_NAME, RemoveSheetSparklineCommand, RemoveSheetSparklineMutation, SetSheetSparklineCommand, SpacialShowAsEnum, SparklineDataSourceModel, SparklineExtremumTypeEnum, SparklinePointsNames, SparklineThemeMapping, SparklineThemeTypeEnum, SparklineTypeEnum, UniverSheetSparklinePlugin } from "@univerjs-pro/sheets-sparkline";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, IDialogService, IMenuManagerService, ISidebarService, IconManager, MenuItemType, RibbonInsertGroup, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { ColorKit, CommandType, DependentOn, Direction, Disposable, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, LocaleService, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, cellToRange, generateRandomId, isValidRange, merge, touchDependencies } from "@univerjs/core";
import { AUTO_FILL_APPLY_TYPE, IAutoFillService, RangeProtectionCache, RangeProtectionPermissionEditPoint, SetWorksheetActiveOperation, SheetPermissionCheckController, SheetsSelectionsService, UniverSheetsPlugin, WorkbookEditablePermission, WorksheetEditPermission, discreteRangeToRange, getSheetCommandTarget } from "@univerjs/sheets";
import { UnitAction } from "@univerjs/protocol";
import { COPY_TYPE, IMarkSelectionService, ISheetClipboardService, PREDEFINED_HOOK_NAME, SheetPrintInterceptorService, UniverSheetsUIPlugin, getCurrentRangeDisable$ } from "@univerjs/sheets-ui";
import { auditTime, combineLatest, distinctUntilChanged, filter, map, merge as mergeLocal, of, startWith, switchMap } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IRenderManagerService, SheetExtension, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { ColumnSparklineIcon, DeleteIcon, GroupSparklineIcon, LineSparklineIcon, MoreDownIcon, MoreRightIcon, PieChartIcon, PointColorDoubleIcon, UngroupSparklineIcon, WinlossSparklineIcon, WriteIcon } from "@univerjs/icons";
import { ActionRow, Button, Checkbox, ColorPicker, Dropdown, InputNumber, Radio, RadioGroup, Segmented, Select, borderBottomClassName, borderClassName, clsx, selectClassName } from "@univerjs/design";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { deserializeRangeWithSheet, serializeRange } from "@univerjs/engine-formula";
import { RangeSelector } from "@univerjs/sheets-formula-ui";
import { Bt, Gt, Kt, Rt, Vt, Xt, Yt, nn, rn, zt } from "./sheets-sparkline-ui-sheet-sparkline-uiplugin.js";
const ut = "SHEET_SPARKLINE_MENU",
  dt = "SHEET_SPARKLINE_SELECTOR",
  ft = "SHEET_SPARKLINE_PANEL",
  pt = "SHEET_SPARKLINE_PANEL_ID",
  mt = {
    id: "sheet.operation.open-sparkline-panel",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.get(ISidebarService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.get(LocaleService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.get(IDialogService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44 = {
          id: pt,
          header: {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.t("sheets-sparkline-ui.panel.title")
          },
          children: {
            label: ft
          },
          width: 330,
          onClose: () => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730.close(dt);
          }
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728.open(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44), true;
    }
  },
  ht = {
    type: CommandType.OPERATION,
    id: "sheet.operation.open-sparkline-selector",
    handler: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.get(IUniverInstanceService));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 = await gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.get(SheetsSelectionsService).getCurrentSelections().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413.range));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) return false;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.get(ICommandService).executeCommand(AddSheetSparklineCommand.id, {
        sourceRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.sourceRanges,
        targetRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.targetRanges,
        targetInfo: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739
        }
      }), true;
    }
  };
async function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.get(IDialogService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.get(LocaleService);
  return new Promise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26 = {
        sourceRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746,
        targetRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747,
        resetCtx: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748,
        onConfirm: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415.dispose();
        },
        onCancel: () => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415.dispose();
        }
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.open({
      id: dt,
      title: {
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.t("sheets-sparkline-ui.selector.title")
      },
      draggable: true,
      mask: false,
      maskClosable: false,
      children: {
        label: {
          name: dt,
          props: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26
        }
      },
      width: 400,
      onClose: () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415.dispose();
      }
    });
  });
}
;
;
;
;
var wt = "@univerjs-pro/sheets-sparkline-ui",
  Tt = "1.0.0-insiders.20260907-70fc579";
;
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071);
  };
}
;
function Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080;
}
Rt = Lt([fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(0, Inject(ComponentManager)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(1, Inject(IconManager))], Rt);
zt = Lt([fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(0, Inject(Injector)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(1, Inject(IUniverInstanceService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(2, Inject(IAutoFillService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(3, Inject(SparklineDataSourceModel))], zt);
Bt = Lt([fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(0, Inject(ISheetClipboardService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(1, Inject(SparklineDataSourceModel))], Bt);
Vt = Lt([fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(0, IMenuManagerService)], Vt);
;
;
;
Kt = Lt([fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(0, Inject(SheetsSelectionsService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(1, Inject(IUniverInstanceService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(2, Inject(SparklineDataSourceModel)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(3, Inject(ISidebarService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(4, Inject(IMarkSelectionService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(5, Inject(RangeProtectionCache)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(6, Inject(ICommandService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(7, Inject(IDialogService))], Kt);
;
Yt = Lt([fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(0, Inject(ICommandService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(1, Inject(LocaleService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(2, Inject(SheetPermissionCheckController)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(3, Inject(SheetsSelectionsService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(4, Inject(IUniverInstanceService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(5, Inject(SparklineDataSourceModel))], Yt);
Xt = Lt([fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(0, Inject(SheetPrintInterceptorService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(1, Inject(SparklineDataSourceModel))], Xt);
nn = Lt([fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(1, Inject(SparklineDataSourceModel)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(2, Inject(RangeProtectionCache)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(3, Inject(SheetPrintInterceptorService))], nn);
Gt(rn, "pluginName", "SHEET_SPARKLINE_UI_PLUGIN"), Gt(rn, "packageName", wt), Gt(rn, "version", Tt), Gt(rn, "type", UniverInstanceType.UNIVER_SHEET), rn = Lt([DependentOn(UniverLicensePlugin, UniverRenderEnginePlugin, UniverSheetsPlugin, UniverSheetSparklinePlugin, UniverSheetsUIPlugin), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(1, IConfigService), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(2, Inject(Injector)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(3, Inject(ICommandService)), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(4, IRenderManagerService)], rn);
export { ht, ut, mt, gt, dt, ft, pt };
