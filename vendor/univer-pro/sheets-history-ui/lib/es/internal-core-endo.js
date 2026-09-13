import { BooleanNumber, ColorKit, CommandType, DependentOn, Disposable, DisposableCollection, IAuthzIoService, ICommandService, IConfigService, IConfirmService, IImageIoService, ILogService, IPermissionService, IUniverInstanceService, Inject, Injector, LOCALE_META, LRUMap, LocaleService, ObjectMatrix, Plugin, RANGE_TYPE, RxDisposable, ThemeService, Univer, UniverInstanceType, Workbook, dateKit, debounce, merge, toDisposable } from "@univerjs/core";
import { AddRangeProtectionMutation, AddRangeThemeMutation, AddWorksheetMergeMutation, AddWorksheetProtectionMutation, CopyWorksheetEndMutation, DeleteRangeProtectionMutation, DeleteWorksheetProtectionMutation, DeleteWorksheetRangeThemeStyleMutation, InsertColMutation, InsertRowMutation, InsertSheetMutation, MoveColsMutation, MoveRangeMutation, MoveRowsMutation, RangeMergeUtil, RangeProtectionPermissionEditPoint, RangeProtectionRuleModel, RemoveColMutation, RemoveNumfmtMutation, RemoveRangeThemeMutation, RemoveRowMutation, RemoveSheetMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColDataMutation, SetColHiddenMutation, SetColVisibleMutation, SetFrozenMutation, SetGridlinesColorMutation, SetNumfmtMutation, SetRangeProtectionMutation, SetRangeThemeMutation, SetRangeValuesMutation, SetRowDataMutation, SetRowHiddenMutation, SetRowVisibleMutation, SetTabColorMutation, SetWorkbookNameMutation, SetWorksheetActivateCommand, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SetWorksheetColumnCountMutation, SetWorksheetDefaultStyleMutation, SetWorksheetHideMutation, SetWorksheetNameMutation, SetWorksheetOrderMutation, SetWorksheetPermissionPointsMutation, SetWorksheetProtectionMutation, SetWorksheetRangeThemeStyleMutation, SetWorksheetRightToLeftMutation, SetWorksheetRowAutoHeightMutation, SetWorksheetRowCountMutation, SetWorksheetRowHeightMutation, SetWorksheetRowIsAutoHeightMutation, SheetPermissionInitController, ToggleGridlinesMutation, UniverSheetsPlugin, WorkbookEditablePermission, WorkbookHideSheetPermission, WorkbookMoveSheetPermission, WorkbookRecoverHistoryPermission, WorkbookRenameSheetPermission, WorkbookViewHistoryPermission, WorksheetEditPermission, findAllRectangle, getSheetCommandTarget } from "@univerjs/sheets";
import { CollaborationEvent, CompressMutationService, CreateUnitMutation, ISnapshotServerService, ITransformService, RevertRevisionMutation, UniverCollaborationPlugin, isTransformMutationsSuccess, parseProtocolChangeset, transformSnapshotToWorkbookData } from "@univerjs-pro/collaboration";
import { AuthzIoHttpService, COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, CollaborationController, CollaborationImageIoService, CollaborationStatus, DataLoaderService, ILocalCacheService, SnapshotServerOverHTTPService, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { LS_CONFIG_KEY, UniverLicensePlugin } from "@univerjs-pro/license";
import { ChartUpdateConfigMutation, ChartUpdateSourceConfigMutation, InsertSheetsChartMutation, RemoveSheetsChartMutation, SheetsChartService, UniverSheetsChartPlugin } from "@univerjs-pro/sheets-chart";
import { UniverSheetsChartUIPlugin } from "@univerjs-pro/sheets-chart-ui";
import { AddPivotFieldMutation, AddPivotTableMutation, RemovePivotFieldMutation, RemovePivotTableMutation, RenamePivotFieldMutation, SetPivotCollapseMutation, SetPivotFieldFormatMutation, SetPivotFilterMutation, SetPivotOptionMutation, SetPivotPositionMutation, SetPivotSortMutation, SetPivotSubtotalTypeMutation, SetPivotValueFilterMutation, SheetsPivotTableConfigModel, UniverSheetsPivotTablePlugin, UpdateFieldPositionMutation, UpdatePivotFieldSourceInfoMutation, UpdatePivotTableSourceRangeMutation, UpdateValuePositionMutation, unionPivotViewRange } from "@univerjs-pro/sheets-pivot";
import { InsertSheetsShapeMutation, RemoveSheetsShapeMutation, UniverSheetsShapePlugin, UpdateSheetsShapeDataMutation, UpdateSheetsShapeTypeMutation } from "@univerjs-pro/sheets-shape";
import { UniverSheetsShapeUIPlugin } from "@univerjs-pro/sheets-shape-ui";
import { AddSheetSparklineMutation, RemoveSheetSparklineMutation, SetSheetSparklineMutation, SparklineDataSourceModel, UniverSheetSparklinePlugin } from "@univerjs-pro/sheets-sparkline";
import { UniverSheetSparklineUIPlugin } from "@univerjs-pro/sheets-sparkline-ui";
import { AddDataValidationMutation, RemoveDataValidationMutation, UniverDataValidationPlugin, UpdateDataValidationMutation } from "@univerjs/data-validation";
import { Button, Checkbox, Dropdown, MessageType, Segmented, Tooltip, borderBottomClassName, clsx } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { IDrawingManagerService, UniverDrawingPlugin } from "@univerjs/drawing";
import { UniverDrawingUIPlugin } from "@univerjs/drawing-ui";
import { IRenderManagerService, Rect, SHEET_VIEWPORT_KEY, Shape, UniverRenderEnginePlugin, Vector2 } from "@univerjs/engine-render";
import { HTTPService, UniverNetworkPlugin } from "@univerjs/network";
import { IRemoteInstanceService, UniverRPCMainThreadPlugin } from "@univerjs/rpc";
import { AddConditionalRuleMutation, ConditionalFormattingRuleModel, DeleteConditionalRuleMutation, MoveConditionalRuleMutation, SetConditionalRuleMutation, UniverSheetsConditionalFormattingPlugin } from "@univerjs/sheets-conditional-formatting";
import { UniverSheetsConditionalFormattingUIPlugin } from "@univerjs/sheets-conditional-formatting-ui";
import { SheetDataValidationModel, UniverSheetsDataValidationPlugin } from "@univerjs/sheets-data-validation";
import { UniverSheetsDataValidationMobileUIPlugin, UniverSheetsDataValidationUIPlugin } from "@univerjs/sheets-data-validation-ui";
import { DrawingApplyType, SetDrawingApplyMutation, UniverSheetsDrawingPlugin } from "@univerjs/sheets-drawing";
import { UniverSheetsDrawingUIPlugin } from "@univerjs/sheets-drawing-ui";
import { ReCalcSheetsFilterMutation, RemoveSheetsFilterMutation, SetSheetsFilterCriteriaMutation, SetSheetsFilterRangeMutation, SheetsFilterService, UniverSheetsFilterPlugin } from "@univerjs/sheets-filter";
import { UniverSheetsFilterUIPlugin } from "@univerjs/sheets-filter-ui";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsFormulaUIPlugin } from "@univerjs/sheets-formula-ui";
import { UniverSheetsHyperLinkPlugin } from "@univerjs/sheets-hyper-link";
import { UniverSheetsHyperLinkUIPlugin } from "@univerjs/sheets-hyper-link-ui";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { AddSheetTableMutation, DeleteSheetTableMutation, SetSheetTableFilterMutation, SetSheetTableMutation, SheetTableService, UniverSheetsTablePlugin } from "@univerjs/sheets-table";
import { ICellEditorManagerService, SheetSkeletonManagerService, UniverSheetsMobileUIPlugin, UniverSheetsUIPlugin, getCoordByCell, getCurrentRangeDisable$, getSheetObject } from "@univerjs/sheets-ui";
import { BuiltInUIPart, ComponentManager, IDialogService, IMenuManagerService, IMessageService, ISidebarService, IUIPartsService, IconManager, MenuItemType, RibbonStartGroup, UI_PLUGIN_CONFIG_KEY, UniverMobileUIPlugin, UniverUIPlugin, connectInjector, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { BehaviorSubject, Subject, combineLatest, filter, map, of, skip, switchMap, take, takeUntil, timeout } from "rxjs";
import { AiAssistantMultiIcon, ArrowLeftIcon, FunnelIcon, HistoryIcon, LoadingMultiIcon, MoreDownIcon, MoreRightIcon, RestoreIcon } from "@univerjs/icons";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ErrorCode, UnitAction, isError } from "@univerjs/protocol";
import { Fragment as fragment, jsx, jsxs } from "react/jsx-runtime";
import { IURLService, SheetCollabCursorShape, UniverCollaborationClientUIPlugin } from "@univerjs-pro/collaboration-client-ui";
import { UniverSheetsHistoryPlugin } from "@univerjs-pro/sheets-history";
import { G, W, vi } from "./sheets-history-ui-plugin-config-key.js";
import { oa, sa } from "./sheets-history-ui-toggle-edit-history-operation.js";
import { ba, fa, ma, va, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881, xa } from "./sheets-history-ui-sheets-history-mobile-uiplugin.js";
import { Ca, Sa } from "./sheets-history-ui-sheets-history-uiplugin.js";
function yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549.historyServerUrl) ?? "/universer-api/history";
}
var bi = "@univerjs-pro/sheets-history-ui",
  xi = "1.0.0-insiders.20260907-70fc579";
function Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551) {
  "@babel/helpers - typeof";

  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664;
  }, Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551);
}
function Ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554) {
  if (Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554 || "default");
    if (Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553);
}
function wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562 = Ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561, "string");
  return Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562 + "";
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566 = wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565;
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461571);
  };
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580;
}
let Y = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678) {
    super(), this._snapshotServerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, this._httpService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, this._compressMutationService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, this._sheetPermissionInitController = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, K(this, "_workbookDataCache", undefined), this._workbookDataCache = new LRUMap(60);
  }
  dispose() {
    this._workbookDataCache["clear"](), super.dispose();
  }
  async fetchCreatorList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688) {
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = (await this._httpService["get"](this._getAPIPrefix() + "/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 + "/creators")).body;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.error && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.error["code"] === ErrorCode.OK) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.creators ?? [];
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      console.error(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52);
    }
    return [];
  }
  async getVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691) {
    let {
        userIds: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6,
        lastLabel: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7,
        origin: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691 ?? {},
      var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484 = new URL();
    SearchParams();
    var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484.set("length", "20"), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 && var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484.set("lastLabel", var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 == null || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 => {
      var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484.append("userIds", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380);
    }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 && var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484.set("origin", var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.toString());
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = this._getAPIPrefix() + "/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690 + "/list?" + var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484.toString();
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = (await this._httpService["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11)).body;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.error && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.error["code"] === ErrorCode.OK) {
        let {
          hasMore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125,
          lastLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382;
        return {
          hasMore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125,
          lastLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126,
          versions: Ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382),
          members: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.entities["users"]
        };
      }
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54) {
      console.error(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54);
    }
    return null;
  }
  async getHistoryChangesets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695) {
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696,
        startRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697,
        endRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 = this._getAPIPrefix() + "/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696 + "/cs?startRevision=" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697 + "&endRevision=" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698;
    return (await this._httpService["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13)).body;
  }
  _getAPIPrefix() {
    return yi(this._configService["getConfig"](W));
  }
  _cacheKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705;
  }
  async loadSheet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 = {}) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711 = this._cacheKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712 = this._workbookDataCache["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712) {
      let {
        workbookData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383,
        changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712;
      return await this._applyWorkbookData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384), true;
    }
    let {
      snapshot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713,
      changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714,
      error: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715
    } = await this._snapshotServerService["getUnitOnRev"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710, {
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708,
      type: UniverInstanceType.UNIVER_SHEET,
      revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709
    });
    if (isError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.workbook) throw Error("[HistoryFetchService]: request snapshot error!");
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.length) ?? 0;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709 !== 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.rev + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709) throw Error("[HistoryFetchService]: wrong rev from the server!");
    let {
        workbook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716.blockMeta ? Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716.blockMeta).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.blocks ?? []) : [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717 = await transformSnapshotToWorkbookData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713, (await Promise.all(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 => this._snapshotServerService["getDeserializedSheetBlock"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710, {
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708,
        type: UniverInstanceType.UNIVER_SHEET,
        blockID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386
      }).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.block)))).filter(Boolean), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710);
    return this._workbookDataCache["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711, {
      workbookData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717,
      changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714
    }), await this._applyWorkbookData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714), true;
  }
  async _applyWorkbookData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730 = this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_SHEET);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730 && (this._univerInstanceService["disposeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730.getUnitId()), await Promise.resolve());
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728));
    this._drawingManagerService["setDrawingEditable"](false);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731 = this._createUnit(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729);
    Ti(this._permissionService, this._drawingManagerService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731), this._sheetPermissionInitController["refreshRangeProtectPermission"]();
  }
  _createUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738 = this._univerInstanceService["createUnit"](UniverInstanceType.UNIVER_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736);
    this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738.getUnitId());
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739 = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_APPLY);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.mutations["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 => ({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.id,
        params: JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.data)
      }));
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, null) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 => {
        this._commandService["hasCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.id) && this._commandService["syncExecuteCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.params, {
          fromChangeset: true
        });
      });
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738;
  }
};
Y = J([q(0, ISnapshotServerService), q(1, IUniverInstanceService), q(2, ICommandService), q(3, IPermissionService), q(4, IDrawingManagerService), q(5, IConfigService), q(6, Inject(HTTPService)), q(7, Inject(CompressMutationService)), q(8, Inject(SheetPermissionInitController))], Y);
function Ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591.getUnitId();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590.setDrawingEditable(false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589.updatePermissionPoint(new WorkbookEditablePermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592).id, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591.getSheets().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589.updatePermissionPoint(new WorksheetEditPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.getSheetId()).id, false);
  });
}
function Ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49 = [],
    {
      entities: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598,
      historyIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597,
    {
      datas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600,
      users: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603;
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.userId]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602.anonymous);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49.push({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.unitId,
        user: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A ? "" : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.userId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603.name) || "",
        users: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.userIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625;
          return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.name) || "";
        }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628),
        isAnonymous: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A,
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746,
        time: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.createTime ? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.createTime) : undefined,
        commands: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.command,
        startRev: Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.startRevision),
        endRev: Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.endRevision),
        recoverTime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.recoverTime ? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.recoverTime) : undefined,
        additionalFields: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.additionalFields,
        startRevCreateTime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.startRevCreateTime ? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.startRevCreateTime) : undefined,
        endRevCreateTime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.endRevCreateTime ? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.endRevCreateTime) : undefined
      });
    }
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49;
}
function Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 = "sheets-history-ui.viewer.action.") {
  return {
    collaboration: [{
      id: CreateUnitMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "createSheet"
    }, {
      id: RevertRevisionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "revertSheet"
    }],
    sheets: [{
      id: InsertSheetMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "insertSheet"
    }, {
      id: RemoveSheetMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeSheet"
    }, {
      id: SetWorksheetNameMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "renameSheet"
    }, {
      id: SetWorksheetOrderMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "reorderSheet"
    }, {
      id: SetWorksheetHideMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "hideSheet"
    }, {
      id: CopyWorksheetEndMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "copySheet"
    }, {
      id: SetTabColorMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setTabColor"
    }, {
      id: SetWorkbookNameMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "renameWorkbook"
    }, {
      id: InsertRowMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "insertRow"
    }, {
      id: InsertColMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "insertCol"
    }, {
      id: RemoveRowMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeRow"
    }, {
      id: RemoveColMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeCol"
    }, {
      id: MoveRowsMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "moveRows"
    }, {
      id: MoveColsMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "moveCols"
    }, {
      id: SetRowVisibleMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "showRow"
    }, {
      id: SetRowHiddenMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "hideRow"
    }, {
      id: SetColVisibleMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "showCol"
    }, {
      id: SetColHiddenMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "hideCol"
    }, {
      id: SetWorksheetRowHeightMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setRowHeight"
    }, {
      id: SetWorksheetColWidthMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setColWidth"
    }, {
      id: SetWorksheetRowAutoHeightMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setRowAutoHeight"
    }, {
      id: SetWorksheetRowIsAutoHeightMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setRowIsAutoHeight"
    }, {
      id: SetRowDataMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setRowData"
    }, {
      id: SetColDataMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setColData"
    }, {
      id: SetWorksheetRowCountMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setRowCount"
    }, {
      id: SetWorksheetColumnCountMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setColCount"
    }, {
      id: SetRangeValuesMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setRangeValues"
    }, {
      id: MoveRangeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "moveRange"
    }, {
      id: ReorderRangeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "reorderRange"
    }, {
      id: AddWorksheetMergeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "mergeCells"
    }, {
      id: RemoveWorksheetMergeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "unmergeCells"
    }, {
      id: SetFrozenMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setFrozen"
    }, {
      id: ToggleGridlinesMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "toggleGridlines"
    }, {
      id: SetGridlinesColorMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setGridlinesColor"
    }, {
      id: SetWorksheetRightToLeftMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setRightToLeft"
    }, {
      id: SetWorksheetDefaultStyleMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setDefaultStyle"
    }, {
      id: AddWorksheetProtectionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "addProtection"
    }, {
      id: SetWorksheetProtectionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setProtection"
    }, {
      id: DeleteWorksheetProtectionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "deleteProtection"
    }, {
      id: AddRangeProtectionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "addRangeProtection"
    }, {
      id: SetRangeProtectionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setRangeProtection"
    }, {
      id: DeleteRangeProtectionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "deleteRangeProtection"
    }, {
      id: SetWorksheetPermissionPointsMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setPermissionPoints"
    }, {
      id: SetNumfmtMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setNumfmt"
    }, {
      id: RemoveNumfmtMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeNumfmt"
    }, {
      id: AddRangeThemeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "addRangeTheme"
    }, {
      id: SetRangeThemeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setRangeTheme"
    }, {
      id: RemoveRangeThemeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeRangeTheme"
    }, {
      id: SetWorksheetRangeThemeStyleMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setWorksheetRangeTheme"
    }, {
      id: DeleteWorksheetRangeThemeStyleMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "deleteWorksheetRangeTheme"
    }],
    sheetsConditionalFormatting: [{
      id: AddConditionalRuleMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setCF"
    }, {
      id: SetConditionalRuleMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setCF"
    }, {
      id: DeleteConditionalRuleMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "deleteCF"
    }, {
      id: MoveConditionalRuleMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "moveCF"
    }],
    sheetsFilter: [{
      id: SetSheetsFilterRangeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setFilter"
    }, {
      id: SetSheetsFilterCriteriaMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setFilterCriteria"
    }, {
      id: RemoveSheetsFilterMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeFilter"
    }, {
      id: ReCalcSheetsFilterMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "recalcFilter"
    }],
    dataValidation: [{
      id: AddDataValidationMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setDV"
    }, {
      id: UpdateDataValidationMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setDV"
    }, {
      id: RemoveDataValidationMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeDV"
    }],
    sheetsChart: [{
      id: InsertSheetsChartMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "insertChart"
    }, {
      id: RemoveSheetsChartMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeChart"
    }, {
      id: ChartUpdateConfigMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updateChartConfig"
    }, {
      id: ChartUpdateSourceConfigMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updateChartSource"
    }],
    sheetsSparkline: [{
      id: AddSheetSparklineMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "addSparkline"
    }, {
      id: SetSheetSparklineMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setSparkline"
    }, {
      id: RemoveSheetSparklineMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeSparkline"
    }],
    sheetsPivot: [{
      id: AddPivotTableMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "addPivotTable"
    }, {
      id: RemovePivotTableMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removePivotTable"
    }, {
      id: SetPivotOptionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setPivotOption"
    }, {
      id: SetPivotPositionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setPivotPosition"
    }, {
      id: UpdatePivotTableSourceRangeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updatePivotSource"
    }, {
      id: AddPivotFieldMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "addPivotField"
    }, {
      id: RemovePivotFieldMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removePivotField"
    }, {
      id: RenamePivotFieldMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "renamePivotField"
    }, {
      id: UpdateFieldPositionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updateFieldPosition"
    }, {
      id: UpdateValuePositionMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updateValuePosition"
    }, {
      id: UpdatePivotFieldSourceInfoMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updatePivotFieldSource"
    }, {
      id: SetPivotFieldFormatMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setPivotFieldFormat"
    }, {
      id: SetPivotFilterMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setPivotFilter"
    }, {
      id: SetPivotValueFilterMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setPivotValueFilter"
    }, {
      id: SetPivotSortMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setPivotSort"
    }, {
      id: SetPivotCollapseMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setPivotCollapse"
    }, {
      id: SetPivotSubtotalTypeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setPivotSubtotalType"
    }],
    sheetsShape: [{
      id: InsertSheetsShapeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "insertShape"
    }, {
      id: RemoveSheetsShapeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeShape"
    }, {
      id: UpdateSheetsShapeDataMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updateShapeData"
    }, {
      id: UpdateSheetsShapeTypeMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updateShapeType"
    }],
    sheetsTable: [{
      id: AddSheetTableMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "addTable"
    }, {
      id: DeleteSheetTableMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "removeTable"
    }, {
      id: SetSheetTableMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updateTable"
    }, {
      id: SetSheetTableFilterMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "setTableFilter"
    }],
    sheetsDrawing: [{
      id: SetDrawingApplyMutation.id,
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + "updateDrawing"
    }]
  };
}
function Oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613 = "sheets-history-ui.viewer.action.") {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614 = Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613);
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614).flat();
}
function ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461617) {
  return LOCALE_META[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461617.getCurrentLocale()].tag;
}
const Ai = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619) return {
      date: "",
      time: ""
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621 = dateKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619);
    return {
      date: Ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621.format("YYYY-MM-DD"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620),
      time: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621.formatIntl(ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620), {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      })
    };
  },
  ji = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626) => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.commands["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 === RevertRevisionMutation.id) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.recoverTime) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748 = Ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.recoverTime, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748.date + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748.time;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626.t("sheets-history-ui.viewer.action.revertSheetPrefix") + "\x20" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626.t("sheets-history-ui.viewer.action.revertSheetSuffix");
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461627 = Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628 = Array.from(new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461627)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628.length === 1) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628[0]);else {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628.slice(0, 5).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392)).join(",\x20");
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628.length > 5 ? "" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626.t("sheets-history-ui.viewer.action.etc") : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16;
    }
    return "" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629;
  };
function Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635.commands["length"] === 0) return [""];
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27 = "sheets-history-ui.viewer.action.",
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB28 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27 + "editSheet",
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51 = Oi(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635.commands["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.id));
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51 != null && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51.length ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A51.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.action) : [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB28];
}
function Ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641] = dateKit().format("YYYY-MM-DD").split("-"),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637.split("-");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638.t("sheets-history-ui.viewer.panel.today");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645 = ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642 ? dateKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637).formatIntl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645, {
    month: "numeric",
    day: "numeric"
  }) : dateKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637).formatIntl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645, {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
}
function Pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753 = dateKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.time ?? Date.now()).format("YYYY-MM-DD"),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.startRevCreateTime ? dateKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.startRevCreateTime).format("YYYY-MM-DD") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.endRevCreateTime ? dateKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.endRevCreateTime).format("YYYY-MM-DD") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.length - 1].startDateString === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.length - 1].versions["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.push({
      dateString: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753,
      startDateString: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754,
      endDateString: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755,
      versions: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751;
  }, []) : [];
}
const Fi = "VIRTUAL_VERSION_NOW";
let X = class extends Disposable {
  _setFetching(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761) {
    this._fetching$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761);
  }
  get fetching() {
    return this._fetching$["value"];
  }
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767) {
    super(), this._messageService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763, this._confirmService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764, this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766, this._historyFetchService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767, K(this, "_versions$", new BehaviorSubject([])), K(this, "versions$", this._versions$["asObservable"]()), K(this, "_currentVersion$", new BehaviorSubject("")), K(this, "currentVersion$", this._currentVersion$["asObservable"]()), K(this, "_status$", new BehaviorSubject("entered")), K(this, "status$", this._status$["asObservable"]()), K(this, "_revertRevision$", new BehaviorSubject(0)), K(this, "revertRevision$", this._revertRevision$["asObservable"]()), K(this, "_unitId$", new BehaviorSubject("")), K(this, "unitId$", this._unitId$["asObservable"]()), K(this, "_fetching$", new BehaviorSubject(false)), K(this, "fetching$", this._fetching$["asObservable"]()), K(this, "_creators$", new BehaviorSubject([])), K(this, "creators$", this._creators$["asObservable"]()), K(this, "_openPanel$", new BehaviorSubject(false)), K(this, "openPanel$", this._openPanel$["asObservable"]()), K(this, "_detailVersionsMap", new Map()), K(this, "_loadingState$", new BehaviorSubject("init")), K(this, "loadingState$", this._loadingState$["asObservable"]()), K(this, "_lastLabel", null), K(this, "_hasMore", true), K(this, "_members", new Map()), K(this, "_canRevert", false), K(this, "_loadParams", null), K(this, "_unitCurrentVersionMap", new Map());
  }
  async triggerLoadVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774) {
    this._canRevert = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774, this._openPanel$["next"](true), await this.loadInitialVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773);
  }
  triggerCustomVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779) {
    let {
        versions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780,
        hasMore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781,
        lastLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782,
        members: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 : [{
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777,
        id: Fi,
        startRev: 1,
        endRev: 0,
        time: Date.now(),
        user: this._localeService["t"]("sheets-history-ui.viewer.panel.currentUser"),
        users: [this._localeService["t"]("sheets-history-ui.viewer.panel.currentUser")],
        commands: [],
        isAnonymous: false
      }];
    this._canRevert = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778, this._unitId$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777), this._updateVersions(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782, false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783), this._currentVersion$["next"](var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25[0].id);
  }
  async loadInitialVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792) {
    this._unitId$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791), this._loadParams = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 ?? null, this._setFetching(true);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 = await this._historyFetchService["getVersions"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792);
    if (this._setFetching(false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793) {
      let {
        versions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393,
        lastLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394,
        hasMore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395,
        members: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.length === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.push({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791,
        id: Fi,
        startRev: 1,
        endRev: 0,
        time: Date.now(),
        user: this._localeService["t"]("sheets-history-ui.viewer.panel.currentUser"),
        users: [this._localeService["t"]("sheets-history-ui.viewer.panel.currentUser")],
        commands: [],
        isAnonymous: false
      }), this._updateVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396), this._currentVersion$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393[0].id), this._unitCurrentVersionMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393[0].endRev);
    } else this._status$["next"]("error");
  }
  async loadMoreVersions() {
    if (!this._lastLabel || !this._hasMore || this.fetching) return false;
    this._setFetching(true);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797 = await this._historyFetchService["getVersions"](this.unitId, {
      lastLabel: this._lastLabel,
      ...this._loadParams
    });
    if (this._setFetching(false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797) {
      let {
        versions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397,
        lastLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398,
        hasMore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399,
        members: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797;
      this._updateVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398, true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400);
    } else this._messageService["show"]({
      content: this._localeService["t"]("sheets-history-ui.viewer.panel.listFetchError"),
      type: MessageType.Error,
      duration: 3000
    });
    return true;
  }
  async loadHistoryCreatorList() {
    let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799
    } = this;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800 = await this._historyFetchService["fetchCreatorList"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800 && this._creators$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800);
  }
  async triggerLoadSheet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803) {
    let {
      endRev: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14
    } = this.getVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803) || {};
    if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 === 0) {
      this._loadingState$["next"]("loading");
      try {
        await this._historyFetchService["loadSheet"](this.unitId, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14), this._loadingState$["next"]("loaded");
      } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
        this._logService["error"]("[HistoryManagerService]: Failed to load history revision.", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5), this._loadingState$["next"]("error"), this._status$["next"]("error");
      }
    } else this._status$["next"]("error");
  }
  async triggerRevert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 ? this.getVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805) : this.getCurrentVersion();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.endRev,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808 = Ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.time, this._localeService);
    (await this._confirmService["confirm"]({
      id: "confirm-revert-revision",
      title: {
        title: this._localeService["t"]("sheets-history-ui.viewer.panel.revertConfirm")
      },
      children: {
        title: this._localeService["t"]("sheets-history-ui.viewer.panel.revertConfirmText", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.date, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.time)
      },
      cancelText: this._localeService["t"]("sheets-history-ui.viewer.panel.cancel"),
      confirmText: this._localeService["t"]("sheets-history-ui.viewer.panel.confirm")
    })) && this._revertRevision$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807);
  }
  _updateVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817) {
    this._setVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 ? this._versions$["value"].concat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813), this._hasMore = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814, this._lastLabel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817 && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 => this._members["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401]));
  }
  getCurrentVersion() {
    return this.getVersion(this._currentVersion$["value"]);
  }
  _setVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823) {
    this._versions$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823);
  }
  getVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826 = this._versions$["value"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825)) || this._detailVersionsMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825);
  }
  registerDetailVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829) {
    this._detailVersionsMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829);
  }
  getCurrentUnitCurrentVersion() {
    if (this.unitId) return this._unitCurrentVersionMap["get"](this.unitId);
  }
  getSelectedVersionIsCurrentVersion() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 = this.getCurrentVersion()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831.endRev) === this.getCurrentUnitCurrentVersion();
  }
  getSelectedVersionCanRevert() {
    return !this.getSelectedVersionIsCurrentVersion() && this.canRevert;
  }
  getMember(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833) {
    return this._members["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833);
  }
  exitHistoryMode() {
    this._status$["next"]("exited");
  }
  set status(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835) {
    this._status$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835);
  }
  get status() {
    return this._status$["value"];
  }
  selectVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 !== this._currentVersion$["value"] && this._currentVersion$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837);
  }
  get currentVersion() {
    return this._currentVersion$["value"];
  }
  set unitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46839) {
    this._unitId$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46839);
  }
  get unitId() {
    return this._unitId$["value"];
  }
  get canRevert() {
    return this._canRevert;
  }
  get loadingState() {
    return this._loadingState$["value"];
  }
};
X = J([q(0, IMessageService), q(1, IConfirmService), q(2, ILogService), q(3, Inject(LocaleService)), q(4, Inject(Y))], X);
let Z = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853) {
    super(), this._historyManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, this._transformService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842, this._snapshotServerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843, this._rangeProtectionRuleModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, this._conditionalFormattingRuleModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845, this._dataValidationModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, this._sheetsFilterService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, this._sparklineDataSourceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848, this._sheetsPivotTableConfigModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849, this._sheetTableService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851, this._sheetsChartService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852, this._historyFetchService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853, K(this, "_diffRangesMap", new Map()), K(this, "_currentVersionDiff$", new BehaviorSubject({
      ranges: new Map(),
      active: null,
      subUnitIds: []
    })), K(this, "currentVersionDiff$", this._currentVersionDiff$["asObservable"]()), this._init();
  }
  _init() {
    this._diffRangesMap = new Map(), this.disposeWithMe(this._historyManagerService["unitId$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 && !this._diffRangesMap["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403) && this._diffRangesMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, new Map());
    })), this.disposeWithMe(this._historyManagerService["currentVersion$"].subscribe(async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406;
        await this.ensureVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405), this._currentVersionDiff$["next"](((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = this._diffRangesMap["get"](this._historyManagerService["unitId"])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405)) || {
          ranges: new Map(),
          active: null,
          subUnitIds: []
        });
      }
    }));
  }
  async ensureVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870 = this._historyManagerService["getVersion"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871 = this._historyManagerService["unitId"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872 = this._diffRangesMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872 || this._diffRangesMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871, new Map()), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868 = this._diffRangesMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871)) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870.id)) return;
    let {
      startRev: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873,
      endRev: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873 === 1) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870.id, {
        ranges: new Map(),
        active: null,
        subUnitIds: []
      });
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877 = await this._historyFetchService["getHistoryChangesets"]({}, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871,
        startRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875,
        endRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876
      });
    if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877.error) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869.code) === ErrorCode.OK) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877.changesets["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.mutations === null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.mutations === undefined) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.mutations = []), parseProtocolChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131))).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.mutations["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 => ({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
          params: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.params,
            memberId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.userID || "unknownUser"
          }
        }))).flat(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 = await this._transformMutationByOrder(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 = this._getActiveSubUnitId(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 = this._extractRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870.id, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411,
        active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410
      });
    }
  }
  getMutationActionMap() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889 = Di("sheets-history-ui.viewer.action."),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592 = new Map();
    return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889).flat().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 => {
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412.action);
    }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592;
  }
  categorizeMutationRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892) {
    return this._categorizeMutationRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892);
  }
  async _transformMutationByOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27 = [];
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15];
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.length - 1) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 + 1],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = this._transformService["transformMutations"](var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630]);
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27 = isTransformMutationsSuccess(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.m1Prime : [];
      }
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 % 10 == 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 > 0 && (await this._yieldToMain());
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27;
  }
  _yieldToMain() {
    return new Promise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 => {
      typeof requestIdleCallback == "function" ? requestIdleCallback(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414(), {
        timeout: 100
      }) : setTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414, 0);
    });
  }
  _getActiveSubUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = [];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.id === InsertSheetMutation.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.params;
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.sheet["id"]);
      } else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.id === RemoveSheetMutation.id) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.params;
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.length > 0 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.subUnitId));
        } else {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.id === SetWorksheetHideMutation.id) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.params;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.hidden ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.subUnitId) : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.subUnitId);
          } else {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.params;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.subUnitId && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.subUnitId);
          }
        }
      }
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.length - 1] : null;
  }
  _extractRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899) {
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B597 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5911 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5913 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915 = new Map(),
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994 = new Set(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900 = this.getMutationActionMap();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.params) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.memberId;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432) return;
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432) || (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B597.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5911.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5913.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, []));
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 = this._categorizeMutationRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.subUnitIds["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135)), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.allRanges), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.insertCellRanges), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.deleteCellRanges), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B597.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.updateCellRanges), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.insertBorderRanges), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.deleteBorderRanges), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.updateBorderRanges), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5911.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.arrowRowRanges), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.arrowColumnRanges), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.insertDrawings), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.deleteDrawings), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5913.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.updateDrawings);
    }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) => {
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._combineRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450)), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._combineRanges(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) || [])), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._combineRanges(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) || [])), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B597.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._combineRanges(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B597.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) || [])), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._combineRanges(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) || [])), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._combineRanges(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) || [])), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._combineRanges(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) || [])), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5911.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._combineRanges(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5911.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) || [])), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._combineRanges(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) || []));
    }), {
      ranges: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594,
      insertCellRanges: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595,
      deleteCellRanges: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596,
      updateCellRanges: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B597,
      insertBorderRanges: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598,
      deleteBorderRanges: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599,
      updateBorderRanges: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910,
      arrowRowRanges: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5911,
      arrowColumnRanges: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912,
      insertDrawings: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914,
      deleteDrawings: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915,
      updateDrawings: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5913,
      subUnitIds: Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994)
    };
  }
  _categorizeMutationRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = {
        allRanges: [],
        insertCellRanges: [],
        deleteCellRanges: [],
        updateCellRanges: [],
        insertBorderRanges: [],
        deleteBorderRanges: [],
        updateBorderRanges: [],
        arrowRowRanges: [],
        arrowColumnRanges: [],
        insertDrawings: [],
        deleteDrawings: [],
        updateDrawings: [],
        subUnitIds: []
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.id,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.params,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907 ? this._localeService["t"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907) : "";
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.subUnitId && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.subUnitIds["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.subUnitId);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455) => {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136,
        showText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17
      }));
      switch (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.allRanges["push"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455) {
        case "insert":
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertCellRanges["push"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15);
          break;
        case "delete":
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteCellRanges["push"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15);
          break;
        case "update":
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateCellRanges["push"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15);
          break;
        case "insertBorder":
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertBorderRanges["push"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15);
          break;
        case "deleteBorder":
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteBorderRanges["push"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15);
          break;
        case "updateBorder":
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateBorderRanges["push"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15);
          break;
        case "arrowRow":
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.arrowRowRanges["push"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15);
          break;
        case "arrowColumn":
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.arrowColumnRanges["push"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15);
          break;
      }
    };
    switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905) {
      case InsertRowMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.range,
              rangeType: RANGE_TYPE.ROW
            },
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.subUnitId,
            showText: "insertRow",
            highlightRow: true
          }], "insert");
          break;
        }
      case InsertColMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.range,
              rangeType: RANGE_TYPE.COLUMN
            },
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.subUnitId,
            showText: "insertCol",
            highlightColumn: true
          }], "insert");
          break;
        }
      case AddWorksheetMergeMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.subUnitId,
            showText: "mergeCells"
          })), "insert");
          break;
        }
      case SetNumfmtMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.values).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.subUnitId,
            showText: "setNumfmt"
          }))).flat(), "insert");
          break;
        }
      case RemoveWorksheetMergeMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.subUnitId,
            showText: "unmergeCells"
          })), "delete");
          break;
        }
      case RemoveNumfmtMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.subUnitId,
            showText: "removeNumfmt"
          })), "delete");
          break;
        }
      case MoveRowsMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.sourceRange,
              rangeType: RANGE_TYPE.ROW
            },
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.subUnitId,
            showText: "moveRows"
          }], "delete"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.targetRange,
              rangeType: RANGE_TYPE.ROW
            },
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.subUnitId,
            showText: "moveRows"
          }], "insert");
          break;
        }
      case MoveColsMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.sourceRange,
              rangeType: RANGE_TYPE.COLUMN
            },
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.subUnitId,
            showText: "moveCols"
          }], "delete"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.targetRange,
              rangeType: RANGE_TYPE.COLUMN
            },
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.subUnitId,
            showText: "moveCols"
          }], "insert");
          break;
        }
      case SetRowVisibleMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 => ({
            range: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637,
              rangeType: RANGE_TYPE.ROW
            },
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.subUnitId,
            showText: "showRow",
            highlightRow: true
          })), "update");
          break;
        }
      case SetRowDataMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.rowData && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.subUnitId && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.rowData).map(Number).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
              range: {
                startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
                endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
                startColumn: NaN,
                endColumn: NaN,
                rangeType: RANGE_TYPE.ROW
              },
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.subUnitId,
              showText: "setRowData",
              highlightRow: true
            }], "update");
          });
          break;
        }
      case SetColVisibleMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => ({
            range: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640,
              rangeType: RANGE_TYPE.COLUMN
            },
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.subUnitId,
            showText: "showCol",
            highlightColumn: true
          })), "update");
          break;
        }
      case SetColDataMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.columnData && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.subUnitId && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.columnData).map(Number).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
              range: {
                startRow: NaN,
                endRow: NaN,
                startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641,
                endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641,
                rangeType: RANGE_TYPE.COLUMN
              },
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.subUnitId,
              showText: "setColData",
              highlightColumn: true
            }], "update");
          });
          break;
        }
      case SetRangeValuesMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.cellValue ? Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.cellValue).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.subUnitId,
            showText: "setRangeValues"
          })) : [], "update");
          break;
        }
      case MoveRangeMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.params;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.from["value"]),
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.from["subUnitId"],
            showText: "moveRange"
          }], "delete"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.to["value"]),
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.to["subUnitId"],
            showText: "moveRange"
          }], "insert");
          break;
        }
      case ReorderRangeMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.range,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.subUnitId
          }], "update");
          break;
        }
      case SetWorksheetRowHeightMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.ranges && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.ranges["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.subUnitId,
            showText: "setRowHeight"
          })), "arrowRow");
          break;
        }
      case SetWorksheetColWidthMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.ranges && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.ranges["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.subUnitId,
            showText: "setColWidth"
          })), "arrowColumn");
          break;
        }
      case AddRangeProtectionMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.rules["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.subUnitId,
            showText: "addRangeProtection"
          }))).flat(), "insertBorder");
          break;
        }
      case AddConditionalRuleMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.rule["ranges"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.subUnitId,
            showText: "setCF"
          })), "insertBorder");
          break;
        }
      case AddDataValidationMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908((Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.rule) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.rule : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.rule]).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.subUnitId,
            showText: "setDV"
          }))).flat(), "insertBorder");
          break;
        }
      case DeleteRangeProtectionMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.unitId,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.subUnitId;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.ruleIds && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.ruleIds["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.ruleIds["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = this._rangeProtectionRuleModel["getRule"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649),
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => ({
                range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616,
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159,
                showText: "deleteRangeProtection"
              }))) || [];
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2, "deleteBorder");
          });
          break;
        }
      case DeleteConditionalRuleMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.cfId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.subUnitId) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = this._conditionalFormattingRuleModel["getRule"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.cfId);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => ({
                range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465,
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.unitId,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.subUnitId,
                showText: "deleteCF"
              }));
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617, "deleteBorder");
            }
          }
          break;
        }
      case RemoveDataValidationMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.ruleId) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.ruleId : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.ruleId];
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.subUnitId && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = this._dataValidationModel["getRuleById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654),
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => ({
                range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618,
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.unitId,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.subUnitId,
                showText: "removeDV"
              }))) || [];
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4, "deleteBorder");
          });
          break;
        }
      case SetRangeProtectionMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.rule["ranges"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.subUnitId,
            showText: "setRangeProtection"
          })), "updateBorder");
          break;
        }
      case SetWorksheetRangeThemeStyleMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.range,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.subUnitId,
            showText: "setWorksheetRangeTheme"
          }], "updateBorder");
          break;
        }
      case DeleteWorksheetRangeThemeStyleMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.range,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.subUnitId,
            showText: "deleteWorksheetRangeTheme"
          }], "updateBorder");
          break;
        }
      case SetConditionalRuleMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.rule["ranges"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.subUnitId,
            showText: "setCF"
          })), "updateBorder");
          break;
        }
      case MoveConditionalRuleMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = this._conditionalFormattingRuleModel["getRule"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.start["id"]),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = this._conditionalFormattingRuleModel["getRule"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.end["id"]);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.subUnitId,
            showText: "moveCF"
          })), "deleteBorder"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.subUnitId,
            showText: "moveCF"
          })), "insertBorder");
          break;
        }
      case SetSheetsFilterRangeMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.range,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.subUnitId,
            showText: "setFilter"
          }], "updateBorder");
          break;
        }
      case SetSheetsFilterCriteriaMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 = this._sheetsFilterService["getFilterModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.subUnitId);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.getRange();
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 ? [{
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.subUnitId,
              showText: "setFilterCriteria"
            }] : [], "updateBorder");
          }
          break;
        }
      case RemoveSheetsFilterMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 = this._sheetsFilterService["getFilterModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.subUnitId);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.getRange();
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 ? [{
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.subUnitId,
              showText: "removeFilter"
            }] : [], "updateBorder");
          }
          break;
        }
      case ReCalcSheetsFilterMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 = this._sheetsFilterService["getFilterModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.subUnitId);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175.getRange();
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 ? [{
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.subUnitId,
              showText: "removeFilter"
            }] : [], "updateBorder");
          }
          break;
        }
      case UpdateDataValidationMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 = this._dataValidationModel["getRuleById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.ruleId);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => ({
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.subUnitId,
            showText: "setDV"
          })), "updateBorder");
          break;
        }
      case AddSheetSparklineMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178.unitId,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178.subUnitId,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178.sparklineConfigMap;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178.sparklineConfigMap && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178.sparklineConfigMap).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666],
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.sparklines).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => ({
                range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619,
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180,
                showText: "addSparkline"
              }));
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6, "insert");
          });
          break;
        }
      case SetSheetSparklineMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.groupIds && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.groupIds["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.groupIds["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = this._sparklineDataSourceModel["getSparklineById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) {
              let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.sparklines["getMatrix"]()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => ({
                range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466,
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.unitId,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.subUnitId,
                showText: "setSparkline"
              }));
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, "update");
            }
          });
          break;
        }
      case RemoveSheetSparklineMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.groupIds && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.groupIds["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.groupIds["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 = this._sparklineDataSourceModel["getSparklineById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675) {
              let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.sparklines["getMatrix"]()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => ({
                range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467,
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.unitId,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.subUnitId,
                showText: "removeSparkline"
              }));
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1, "delete");
            }
          });
          break;
        }
      case AddSheetTableMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.tableId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.range,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.subUnitId,
            showText: "addTable"
          }], "insert");
          break;
        }
      case DeleteSheetTableMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.tableId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.subUnitId) {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909 = this._sheetTableService["getTableInfo"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.tableId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909.range;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.subUnitId,
              showText: "removeTable"
            }], "delete");
          }
          break;
        }
      case SetSheetTableFilterMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.params;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.tableId) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = this._sheetTableService["getTableInfo"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.tableId);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.range && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.subUnitId && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.subUnitIds["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.subUnitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.range,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.subUnitId,
              showText: "setTableFilter"
            }], "update"));
          }
          break;
        }
      case SetSheetTableMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.tableId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.subUnitId) {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910 = this._sheetTableService["getTableInfo"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.tableId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910.range;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908([{
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.subUnitId,
              showText: "updateTable"
            }], "update");
          }
          break;
        }
      case AddPivotTableMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.pivotTableId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.subUnitId) {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911 = this._sheetsPivotTableConfigModel["getPivotTableRangeInfo"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.pivotTableId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911.rangeInfo;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(unionPivotViewRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => ({
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.subUnitId,
              showText: "addPivotTable"
            })), "insert");
          }
          break;
        }
      case RemovePivotTableMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.pivotTableId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.subUnitId) {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912 = this._sheetsPivotTableConfigModel["getPivotTableRangeInfo"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.pivotTableId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912.rangeInfo;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(unionPivotViewRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => ({
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.subUnitId,
              showText: "removePivotTable"
            })), "delete");
          }
          break;
        }
      case SetPivotOptionMutation.id:
      case SetPivotPositionMutation.id:
      case UpdatePivotTableSourceRangeMutation.id:
      case AddPivotFieldMutation.id:
      case RemovePivotFieldMutation.id:
      case RenamePivotFieldMutation.id:
      case UpdateFieldPositionMutation.id:
      case UpdateValuePositionMutation.id:
      case UpdatePivotFieldSourceInfoMutation.id:
      case SetPivotFilterMutation.id:
      case SetPivotValueFilterMutation.id:
      case SetPivotSortMutation.id:
      case SetPivotCollapseMutation.id:
      case SetPivotFieldFormatMutation.id:
      case SetPivotSubtotalTypeMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "setPivotOption";
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === SetPivotOptionMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "setPivotOption" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === SetPivotPositionMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "setPivotPosition" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === UpdatePivotTableSourceRangeMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "updatePivotSource" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === AddPivotFieldMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "addPivotField" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === RemovePivotFieldMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "removePivotField" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === RenamePivotFieldMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "renamePivotField" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === UpdateFieldPositionMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "updateFieldPosition" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === UpdateValuePositionMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "updateValuePosition" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === UpdatePivotFieldSourceInfoMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "updatePivotFieldSource" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === SetPivotFilterMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "setPivotFilter" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === SetPivotValueFilterMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "setPivotValueFilter" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === SetPivotSortMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "setPivotSort" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === SetPivotCollapseMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "setPivotCollapse" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === SetPivotSubtotalTypeMutation.id ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "setPivotSubtotalType" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === SetPivotFieldFormatMutation.id && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = "setPivotFieldFormat"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.pivotTableId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.subUnitId) {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913 = this._sheetsPivotTableConfigModel["getPivotTableRangeInfo"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.pivotTableId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913.rangeInfo;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908(unionPivotViewRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => ({
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.subUnitId,
              showText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB
            })), "update");
          }
          break;
        }
      case InsertSheetsChartMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.chartId && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertDrawings["push"]({
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.chartId,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.subUnitId,
            showText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17
          });
          break;
        }
      case RemoveSheetsChartMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.chartId && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteDrawings["push"]({
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.chartId,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.subUnitId,
            showText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17
          });
          break;
        }
      case ChartUpdateConfigMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.params;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.chartModelId) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = this._sheetsChartService["getSubUnitId"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.chartModelId);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.subUnitIds["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateDrawings["push"]({
              drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.chartModelId,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684,
              showText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17
            }));
          }
          break;
        }
      case ChartUpdateSourceConfigMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.params;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.chartModelId) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = this._sheetsChartService["getSubUnitId"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.chartModelId);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.subUnitIds["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateDrawings["push"]({
              drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.chartModelId,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685,
              showText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17
            }));
          }
          break;
        }
      case InsertSheetsShapeMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.shapeId && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertDrawings["push"]({
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.shapeId,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.subUnitId,
            showText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17
          });
          break;
        }
      case RemoveSheetsShapeMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.shapeId && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteDrawings["push"]({
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.shapeId,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.subUnitId,
            showText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17
          });
          break;
        }
      case UpdateSheetsShapeDataMutation.id:
      case UpdateSheetsShapeTypeMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.shapeId && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateDrawings["push"]({
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.shapeId,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.subUnitId,
            showText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17
          });
          break;
        }
      case SetDrawingApplyMutation.id:
        {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.objects,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.type,
            var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 !== DrawingApplyType.INSERT && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 !== DrawingApplyType.REMOVE,
            var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 === DrawingApplyType.INSERT,
            var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 === DrawingApplyType.REMOVE,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 === DrawingApplyType.INSERT ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 = this._localeService["t"]("sheets-history-ui.viewer.action.insertDrawing") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 === DrawingApplyType.REMOVE && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 = this._localeService["t"]("sheets-history-ui.viewer.action.removeDrawing")), Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 => {
            if ("drawingId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.drawingId) var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateDrawings["push"]({
              drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.drawingId,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
              showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
            }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertDrawings["push"]({
              drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.drawingId,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
              showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
            }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteDrawings["push"]({
              drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.drawingId,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
              showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
            });else {
              if ("parent" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 && "children" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) {
                var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688;
                (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.parent) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.drawingId && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateDrawings["push"]({
                  drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.parent["drawingId"],
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                  showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertDrawings["push"]({
                  drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.parent["drawingId"],
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                  showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteDrawings["push"]({
                  drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.parent["drawingId"],
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                  showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                })), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.children) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.drawingId && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateDrawings["push"]({
                    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.drawingId,
                    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                    showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                  }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertDrawings["push"]({
                    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.drawingId,
                    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                    showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                  }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteDrawings["push"]({
                    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.drawingId,
                    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                    showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                  }));
                });
              }
            }
          });else {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 == "object") {
              if ("drawingIds" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.drawingIds)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.drawingIds["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => {
                var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateDrawings["push"]({
                  drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                  showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertDrawings["push"]({
                  drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                  showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteDrawings["push"]({
                  drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                  showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                });
              });else {
                if ("parent" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 && "children" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199) {
                  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915;
                  (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.parent) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914.drawingId && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateDrawings["push"]({
                    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.parent["drawingId"],
                    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                    showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                  }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertDrawings["push"]({
                    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.parent["drawingId"],
                    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                    showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                  }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteDrawings["push"]({
                    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.parent["drawingId"],
                    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                    showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                  })), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.children) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => {
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.drawingId && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.updateDrawings["push"]({
                      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.drawingId,
                      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                      showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                    }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.insertDrawings["push"]({
                      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.drawingId,
                      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                      showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                    }) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.deleteDrawings["push"]({
                      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.drawingId,
                      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.unitId,
                      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.subUnitId,
                      showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
                    }));
                  });
                }
              }
            }
          }
          break;
        }
    }
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16;
  }
  _combineRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929.length <= 1) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929;
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5928 = new Map();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460;
      if (!var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5928.has(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3)) var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5928.set(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458]);else {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5928.get(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458);
      }
    }), Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5928.values()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 => new RangeMergeUtil().add(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.range)).merge().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 => ({
      range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466[0].unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466[0].subUnitId,
      showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466[0].showText,
      highlightRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466[0].highlightRow,
      highlightColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466[0].highlightColumn
    }))).flat();
  }
};
Z = J([q(0, Inject(X)), q(1, ITransformService), q(2, ISnapshotServerService), q(3, Inject(RangeProtectionRuleModel)), q(4, Inject(ConditionalFormattingRuleModel)), q(5, Inject(SheetDataValidationModel)), q(6, Inject(SheetsFilterService)), q(7, Inject(SparklineDataSourceModel)), q(8, Inject(SheetsPivotTableConfigModel)), q(9, Inject(SheetTableService)), q(10, Inject(LocaleService)), q(11, Inject(SheetsChartService)), q(12, Inject(Y))], Z);
function Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657) {
  return new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657).getDataRange();
}
function Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461660 = new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661 = new ObjectMatrix();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461660.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932, 1);
  }), findAllRectangle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661);
}
const Ri = [{
  key: 0,
  labelKey: "sheets-history-ui.viewer.panel.filterAll"
}, {
  key: 1,
  labelKey: "sheets-history-ui.viewer.panel.filterUser"
}, {
  key: 2,
  labelKey: "sheets-history-ui.viewer.panel.filterAi"
}];
function zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665) {
  let {
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668 = useDependency(LocaleService);
  return jsx("div", {
    className: "univer-relative univer-h-8",
    children: jsx(Segmented, {
      items: Ri.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935 => ({
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935.labelKey),
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935.key
      })),
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667
    })
  });
}
function Bi() {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674 = useDependency(X),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675 = useDependency(Y),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676 = useDependency(Z),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677 = useDependency(IConfigService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.versions$),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.creators$, []),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461681] = useState(() => new Set()),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683] = useState(() => new Map()),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685] = useState(() => new Set()),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687] = useState(0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689 = useRef(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691] = useState(false),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693] = useState([]),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677.getConfig("sheets-history-ui.config")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673.historyAIassistantEnabled) ?? false,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694 = Pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696] = useState([]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461697 = useMemo(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 => ({
      key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.userId,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.name
    })), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679]);
  useEffect(() => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.loadHistoryCreatorList().catch(() => undefined);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696([]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.loadInitialVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.unitId, {
      origin: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936
    }).catch(() => undefined);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674]);
  useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689.current;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940 = () => {
        clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939 = setTimeout(() => {
          let {
            scrollTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204,
            scrollHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205,
            clientHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 - 5 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.loadMoreVersions().catch(() => undefined);
        }, 100);
      };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938.addEventListener("scroll", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940), () => {
      clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938.removeEventListener("scroll", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940);
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699 = useCallback(async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944.id;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945)) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461681(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 => {
        let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210);
        return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299;
      });
      return;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945)) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461681(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 => new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212).add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945));
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 => new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468).add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945));
    try {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.unitId;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675.getHistoryChangesets({}, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469,
        startRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944.startRev,
        endRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944.endRev
      });
      if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.error) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.code) === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.changesets) {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.changesets["reverse"]().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = parseProtocolChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.userID || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.userID,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.users) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696],
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.mutations) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.id)) || [];
          return {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945 + "-detail-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.revision,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.unitID,
            startRev: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.revision,
            endRev: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.revision,
            time: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.createTime ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.createTime * 1000 : undefined,
            user: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.name) || "",
            users: [(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.name) || ""],
            commands: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8,
            isAnonymous: false,
            isDetail: true,
            parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945,
            additionalFields: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.additionalFields
          };
        });
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 => new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104).set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.registerDetailVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105);
        });
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11) await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.ensureVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.id);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461681(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 => new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108).add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945));
      }
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56) {
      console.error("Failed to fetch version details:", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56);
    } finally {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 => {
        let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213);
        return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992;
      });
    }
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676]);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678 ? jsxs("div", {
    ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689,
    className: "univer-absolute univer-flex univer-h-[calc(100%-32px)] univer-w-[calc(100%-16px)] univer-flex-col univer-overflow-auto",
    children: [var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 && jsxs("div", {
      className: "univer-sticky univer-top-0 univer-z-10 univer-mb-3 univer-flex univer-items-center univer-gap-2 univer-bg-gray-0 dark:!univer-bg-gray-200",
      children: [jsx("div", {
        className: "univer-flex-1",
        children: jsx(zi, {
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698
        })
      }), jsx(Dropdown, {
        align: "end",
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690,
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695);
        },
        overlay: jsxs("div", {
          className: "univer-min-w-[240px]",
          children: [jsx("div", {
            className: "univer-px-3 univer-py-2 univer-text-sm univer-font-semibold",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.t("sheets-history-ui.viewer.panel.filterCollaborator")
          }), jsx("div", {
            className: "univer-border-t univer-border-gray-200 dark:!univer-border-gray-700"
          }), jsx("div", {
            className: "univer-max-h-[300px] univer-overflow-y-auto univer-py-1",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461697.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952 => {
              let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952.key);
              return jsxs("div", {
                className: "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-px-3 univer-py-2 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800",
                onClick: () => {
                  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952.key) : [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952.key];
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17);
                },
                children: [jsx(Checkbox, {
                  checked: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10
                }), jsx("span", {
                  className: "univer-text-sm",
                  children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952.label
                })]
              }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952.key);
            })
          }), jsx("div", {
            className: "univer-border-t univer-border-gray-200 dark:!univer-border-gray-700"
          }), jsxs("div", {
            className: "univer-flex univer-items-center univer-justify-end univer-gap-2 univer-p-2",
            children: [jsx(Button, {
              variant: "ghost",
              onClick: () => {
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691(false);
              },
              children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.t("sheets-history-ui.viewer.panel.filterCollaboratorCancel")
            }), jsx(Button, {
              onClick: () => {
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.loadInitialVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.unitId, {
                  origin: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686,
                  userIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692
                }).catch(() => undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691(false);
              },
              children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.t("sheets-history-ui.viewer.panel.filterCollaboratorConfirm")
            })]
          })]
        }),
        children: jsx(Button, {
          variant: "ghost",
          children: jsx(FunnelIcon, {
            className: clsx("univer-size-4", {
              "univer-text-blue-600\x20dark:!univer-text-blue-400": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.length > 0
            })
          })
        })
      })]
    }), jsx("div", {
      className: "univer-relative univer-flex-1 univer-space-y-2 univer-pb-4",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954 => jsxs(Fragment, {
        children: [jsx(Hi, {
          date: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.dateString,
          startDate: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.startDateString,
          endDate: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.endDateString
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.versions["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 => {
          let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.id),
            var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.id),
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.id) || [];
          return jsxs(Fragment, {
            children: [jsx(Ui, {
              item: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471,
              onToggleExpand: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699,
              isExpanded: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4,
              isLoadingDetail: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5
            }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217) => jsxs("div", {
              className: "univer-relative !univer-mb-0 !univer-mt-0",
              children: [jsxs("div", {
                className: "univer-absolute univer-left-[30px] univer-top-0 univer-h-full univer-w-2.5 rtl:univer-left-auto rtl:univer-right-[30px]",
                children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19.length - 1 && jsx("div", {
                  className: "univer-absolute univer-left-0 univer-top-0 univer-h-full univer-w-px univer-bg-gray-100 rtl:univer-left-auto rtl:univer-right-0 dark:!univer-bg-gray-800"
                }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19.length - 1 && jsx("div", {
                  className: "univer-absolute univer-left-0 univer-top-0 univer-h-1/2 univer-w-px univer-bg-gray-100 rtl:univer-left-auto rtl:univer-right-0 dark:!univer-bg-gray-800"
                }), jsx("div", {
                  className: "univer-absolute univer-left-0 univer-top-1/2 univer-h-px univer-w-2.5 -univer-translate-y-1/2 univer-bg-gray-100 rtl:univer-left-auto rtl:univer-right-0 dark:!univer-bg-gray-800"
                })]
              }), jsx(Ui, {
                item: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216,
                isDetail: true
              })]
            }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.id + "-detail-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.id))]
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.id);
        })]
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.dateString))
    })]
  }) : jsx(Vi, {});
}
function Vi() {
  return jsx("div", {
    className: "univer-flex univer-items-center univer-justify-center",
    children: jsx("span", {
      className: "univer-text-gray-500",
      children: jsx(LoadingMultiIcon, {
        className: "univer-m-auto\x20univer-animate-spin"
      })
    })
  });
}
function Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728 = useDependency(LocaleService),
    {
      date: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729,
      startDate: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727;
  return jsx("div", {
    className: "univer-flex univer-items-center univer-gap-2.5 univer-pt-1.5 univer-text-sm univer-font-medium",
    children: Ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728)
  });
}
function Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735) {
  let {
      item: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736,
      onToggleExpand: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737,
      isExpanded: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738,
      isLoadingDetail: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739,
      isDetail: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735,
    {
      time: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741,
      user: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742,
      startRevCreateTime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743,
      endRevCreateTime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744,
      users: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746 = useDependency(X),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747 = useDependency(Z),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.currentVersion$, "", true) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.id,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.getCurrentUnitCurrentVersion() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.endRev,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748 = !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.canRevert,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750 = Ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751 = Ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752 = Ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749.t("sheets-history-ui.viewer.panel.currentVersion"),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.startRev !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.endRev,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.additionalFields,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754 = useMemo(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749.t("sheets-history-ui.viewer.panel.unknownUser");
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473).length > 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474).join(",\x20")), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 ? "" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749.t("sheets-history-ui.viewer.panel.aiAssistant") + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 ? "\x20(" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 + ")" : "") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955;
    }, [var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755 = useCallback(async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.loadingState !== "loading" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.selectVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740 && (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.ensureVersion(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957), await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.triggerLoadSheet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957)));
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.triggerRevert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959).catch(() => undefined);
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736).catch(() => undefined);
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758 = jsx(MoreRightIcon, {
      className: "univer-size-8\x20univer-text-gray-400\x20rtl:univer-rotate-180"
    });
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758 = jsx(LoadingMultiIcon, {
    className: "univer-animate-spin"
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758 = jsx(MoreDownIcon, {
    className: "univer-size-8 univer-text-gray-400"
  }));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751.time;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.time : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751.time + " - " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752.time), jsxs("div", {
    className: clsx("univer-min-h-15 univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-rounded-md univer-px-1 univer-py-1.5 univer-transition-colors hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800", {
      "univer-bg-gray-50\x20dark:!univer-bg-gray-900": var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16,
      "univer-ml-6\x20rtl:univer-ml-0\x20rtl:univer-mr-6": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740
    }),
    onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.id).catch(() => undefined),
    children: [jsx("div", {
      className: "univer-flex\x20univer-w-3\x20univer-items-center\x20univer-justify-center",
      children: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A18 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740 && jsx("div", {
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757,
        className: "univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758
      })
    }), jsxs("div", {
      className: "univer-flex univer-flex-1 univer-flex-col univer-gap-1",
      children: [jsxs("div", {
        className: "univer-flex univer-min-h-6 univer-w-full univer-items-center univer-justify-between",
        children: [jsxs("div", {
          className: "univer-flex univer-flex-1 univer-items-center univer-gap-1.5 univer-text-sm univer-text-gray-600 dark:!univer-text-gray-200",
          children: [var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 && jsx(AiAssistantMultiIcon, {
            className: "univer-size-4 univer-shrink-0"
          }), jsx("span", {
            className: "univer-break-all univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754
          }), jsx("span", {
            className: "univer-text-center univer-text-gray-500 dark:!univer-text-gray-400",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759
          }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 && jsx("span", {
            className: "univer-ml-1 univer-flex univer-flex-shrink-0 univer-items-center univer-justify-center univer-rounded univer-border univer-border-primary-600 univer-bg-primary-50 univer-px-1.5 univer-text-xs univer-text-primary-600",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753
          })]
        }), jsx("div", {
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748 && jsx(Tooltip, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749.t("sheets-history-ui.viewer.panel.revertDesc"),
            children: jsx("div", {
              onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963 => {
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.id);
              },
              className: "univer-flex\x20univer-size-6\x20univer-items-center\x20univer-justify-center\x20univer-rounded\x20univer-text-gray-400\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700",
              children: jsx(RestoreIcon, {})
            })
          })
        })]
      }), jsx("div", {
        className: "univer-text-sm\x20univer-leading-5\x20univer-text-gray-500\x20dark:!univer-text-gray-300",
        children: ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749)
      })]
    })]
  });
}
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966) {
    super(), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965.register(vi, Bi)), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966.register({
      HistoryIcon: HistoryIcon
    }));
  }
};
Q = J([q(0, Inject(ComponentManager)), q(1, Inject(IconManager))], Q);
let Wi = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969) {
    super(), this._cellEditorManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969, this._init();
  }
  _init() {
    this.disposeWithMe(this._cellEditorManagerService["state$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.show && this._cellEditorManagerService["setState"]({
        show: false
      });
    }));
  }
};
Wi = J([q(0, ICellEditorManagerService)], Wi);
function Gi() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 = useDependency(X),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786 = useDependency(LocaleService);
  if (useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785.loadingState$, "init") !== "loading") return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786.t("sheets-history-ui.viewer.info.loading");
  return jsx("div", {
    "aria-busy": "true",
    "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787,
    className: "univer-bg-gray-0/70 dark:!univer-bg-gray-900/70 univer-fixed univer-inset-0 univer-z-[1000] univer-flex univer-cursor-wait univer-items-center univer-justify-center univer-backdrop-blur-sm",
    children: jsxs("div", {
      role: "status",
      "aria-live": "polite",
      className: "univer-flex univer-items-center univer-gap-3 univer-rounded-lg univer-bg-gray-0 univer-px-5 univer-py-4 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-bg-gray-700 dark:!univer-text-gray-0",
      children: [jsx(LoadingMultiIcon, {
        className: "univer-size-6 univer-animate-spin univer-text-gray-500"
      }), jsx("span", {
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787
      })]
    })
  });
}
function Ki() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791 = useDependency(X),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.currentVersion$),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794 = useMemo(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.getSelectedVersionCanRevert() : false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795 = useCallback(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.exitHistoryMode();
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796 = useCallback(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.triggerRevert();
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791]);
  return jsxs("div", {
    className: clsx("univer-flex univer-h-12 univer-cursor-default univer-items-center univer-justify-between univer-px-3", borderBottomClassName),
    children: [jsxs(Button, {
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795,
      children: [jsx(ArrowLeftIcon, {
        className: "univer-size-4"
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792.t("sheets-history-ui.viewer.header.back")]
    }), jsx(Button, {
      variant: "primary",
      disabled: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794,
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792.t("sheets-history-ui.viewer.header.revert")
    })]
  });
}
let qi = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977) {
    super(), this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971, this._uiPartsService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972, this._messageService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974, this._historyManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, this._init();
  }
  _init() {
    this.disposeWithMe(this._historyManagerService["currentVersion$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 && this._historyManagerService["triggerLoadSheet"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477);
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 = this._historyManagerService["unitId"];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.subType === UnitAction.Edit && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.value === true && this._permissionService["updatePermissionPoint"](new WorkbookEditablePermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480).id, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.subType === UnitAction.RenameSheet && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.value === true && this._permissionService["updatePermissionPoint"](new WorkbookRenameSheetPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480).id, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.subType === UnitAction.MoveSheet && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.value === true && this._permissionService["updatePermissionPoint"](new WorkbookMoveSheetPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480).id, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.subType === UnitAction.HideSheet && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.value === true && this._permissionService["updatePermissionPoint"](new WorkbookHideSheetPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480).id, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.subType === UnitAction.Comment && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.value === true && this._permissionService["updatePermissionPoint"](new WorkbookEditablePermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480).id, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.subType === UnitAction.FloatImg && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.value === true && this._permissionService["updatePermissionPoint"](new WorkbookEditablePermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480).id, false));
    })), this._registerHeader(), this._registerLoadingMask();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 = null;
    this.disposeWithMe(toDisposable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985.dispose())), this.disposeWithMe(this._historyManagerService["loadingState$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 === "loading" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 = this._messageService["show"]({
        type: MessageType.Info,
        content: this._localeService["t"]("sheets-history-ui.viewer.info.loading"),
        duration: 1000
      }));
    }));
  }
  _registerHeader() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987 = this._configService["getConfig"]("sheets-history-ui.config")) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.historyPanelHidden || this.disposeWithMe(this._uiPartsService["registerComponent"](BuiltInUIPart.HEADER, () => connectInjector(Ki, this._injector)));
  }
  _registerLoadingMask() {
    this.disposeWithMe(this._uiPartsService["registerComponent"](BuiltInUIPart.GLOBAL, () => connectInjector(Gi, this._injector)));
  }
};
qi = J([q(0, IPermissionService), q(1, IUIPartsService), q(2, IMessageService), q(3, Inject(LocaleService)), q(4, Inject(X)), q(5, Inject(Injector)), q(6, IConfigService)], qi);
const Ji = {
  insert: "green.800",
  delete: "red.800",
  update: "blue.800"
};
let Yi = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989) {
    super(), this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989, K(this, "_palette$", undefined), K(this, "palette$", undefined), this._palette$ = new BehaviorSubject(this._createPalette()), this.palette$ = this._palette$["asObservable"](), this.disposeWithMe(this._themeService["currentTheme$"].pipe(skip(1)).subscribe(() => {
      this._palette$["next"](this._createPalette());
    })), this.disposeWithMe(toDisposable(() => this._palette$["complete"]()));
  }
  _createPalette() {
    return {
      insert: this._createStyle("insert"),
      delete: this._createStyle("delete"),
      update: this._createStyle("update")
    };
  }
  _createStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992 = this._themeService["getColorFromTheme"](Ji[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991]);
    return {
      fill: new ColorKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992).setAlpha(0.5).toRgbString(),
      stroke: new ColorKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992).setAlpha(0.9).toRgbString()
    };
  }
};
Yi = J([q(0, Inject(ThemeService))], Yi);
var Xi = class extends Shape {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996), K(this, "_color", undefined), K(this, "_direction", undefined), K(this, "_highlight", false), K(this, "_highlightSecond", 4), K(this, "_blinkTimer", undefined), K(this, "_blinkIntervalTimer", undefined), K(this, "_isBlinkVisible", true), this._color = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996.color, this._direction = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996.direction, this.setShapeProps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996.highlight && this._startBlinking(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996.highlightSecond ?? this._highlightSecond);
  }
  setShapeProps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999) {
    this._color = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.color ?? this._color, this._direction = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.direction ?? this._direction, this._highlight = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.highlight ?? this._highlight, this._highlightSecond = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.highlightSecond ?? this._highlightSecond, this.transformByState({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.width ?? this.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.height ?? this.height
    });
  }
  triggerDblclick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001) {
    return false;
  }
  dispose() {
    this._stopBlinking(), super.dispose();
  }
  _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.globalAlpha = this._highlight && !this._isBlinkVisible ? 0.25 : 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.strokeStyle = this._color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.fillStyle = this._color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.lineWidth = 4, this._direction === "horizontal" ? this._drawHorizontalArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003) : this._drawVerticalArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.restore();
  }
  _startBlinking(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005) {
    this._stopBlinking(), this._isBlinkVisible = true, this._blinkIntervalTimer = window.setInterval(() => {
      this._isBlinkVisible = !this._isBlinkVisible, this.makeDirty(true);
    }, 500), this._blinkTimer = window.setTimeout(() => {
      this._stopBlinking(), this._isBlinkVisible = true, this.makeDirty(true);
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 * 1000);
  }
  _stopBlinking() {
    this._blinkIntervalTimer !== undefined && (window.clearInterval(this._blinkIntervalTimer), this._blinkIntervalTimer = undefined), this._blinkTimer !== undefined && (window.clearTimeout(this._blinkTimer), this._blinkTimer = undefined);
  }
  _drawHorizontalArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = this.height / 2;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.moveTo(12, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.lineTo(this.width - 12, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.moveTo(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.lineTo(12, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 - 12 / 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.lineTo(12, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 + 12 / 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.moveTo(this.width, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.lineTo(this.width - 12, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 - 12 / 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.lineTo(this.width - 12, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 + 12 / 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.fill();
  }
  _drawVerticalArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = this.width / 2;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.moveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32, 12), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32, this.height - 12), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.moveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 - 12 / 2, 12), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 + 12 / 2, 12), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.moveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32, this.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 - 12 / 2, this.height - 12), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 + 12 / 2, this.height - 12), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.fill();
  }
};
let Zi = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011, this._historyManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012, this._versionDiffService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015, this._sheetSkeletonManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019, this._diffColorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020, K(this, "_diffs", new Set()), K(this, "_borderDiffs", new Set()), K(this, "_arrowDiffs", new Set()), K(this, "_lastPointer", null), K(this, "_pointerMoveSubscription", null), this._init();
  }
  _init() {
    this._initRender(), this._initActiveSwitch();
  }
  _initRender() {
    this._initDiffRender(), this._initPointerEvents();
  }
  _initDiffRender() {
    this.disposeWithMe(combineLatest([this._historyManagerService["loadingState$"], this._sheetSkeletonManagerService["currentSkeleton$"], this._diffColorService["palette$"]]).pipe(switchMap(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487]) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485 === "loaded" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486.sheetId;
        return this._versionDiffService["currentVersionDiff$"].pipe(map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.subUnitIds["length"] === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.subUnitIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218) ? {
          skeleton: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486,
          versionDiff: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109,
          sheetID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218,
          palette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487
        } : {
          skeleton: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486,
          versionDiff: null,
          palette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487
        }));
      }
      return of({
        skeleton: null,
        versionDiff: null,
        sheetID: null,
        palette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487
      });
    })).subscribe(({
      skeleton: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491,
      versionDiff: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492,
      sheetID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493,
      palette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494
    }) => {
      this._removeDiffMarks(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493 && this._updateDiffMarks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494);
    }));
  }
  _initPointerEvents() {
    this.disposeWithMe(this._sheetSkeletonManagerService["currentSkeleton$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500;
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 = this._pointerMoveSubscription) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.unsubscribe(), this._pointerMoveSubscription = null, this._lastPointer = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 == null) return;
      let {
          skeleton: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499,
        {
          scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502
        } = this._context;
      this._pointerMoveSubscription = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.onPointerMove$["subscribeEvent"](debounce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221;
        let {
            offsetX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222,
            offsetY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219,
          {
            x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224,
            y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.getCoordRelativeToViewport(Vector2.FromArray([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223])),
          {
            scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226,
            scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.getAncestorScale(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.getViewport(SHEET_VIEWPORT_KEY.VIEW_MAIN),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.getScrollXYInfoByViewport(Vector2.FromArray([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501.getCellIndexByOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229);
        (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 = this._lastPointer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.column) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.column || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 = this._lastPointer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.row) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.row) && (this._lastPointer = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, this._diffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.evented || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.onMouseMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230);
        }));
      }, 100));
    }));
  }
  _initActiveSwitch() {
    this.disposeWithMe(combineLatest([this._historyManagerService["loadingState$"], this._versionDiffService["currentVersionDiff$"]]).subscribe(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508]) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 === "loaded" && (this._updateWorksheetVisibility(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.subUnitIds), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.active && this._commandService["syncExecuteCommand"](SetWorksheetActiveOperation.id, {
        unitId: this._context["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.active
      }));
    }));
  }
  _updateWorksheetVisibility(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032 = this._univerInstanceService["getUnit"](this._context["unitId"], UniverInstanceType.UNIVER_SHEET);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032.getSheets();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031.length === 0) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.isSheetHidden() && this._setWorksheetVisibility(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getSheetId(), BooleanNumber.FALSE);
      });
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.getSheetId(),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.isSheetHidden();
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 ? this._setWorksheetVisibility(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, BooleanNumber.FALSE) : !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 && this._setWorksheetVisibility(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, BooleanNumber.TRUE);
    });
  }
  _setWorksheetVisibility(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038) {
    this._commandService["syncExecuteCommand"](SetWorksheetHideMutation.id, {
      unitId: this._context["unitId"],
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037,
      hidden: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038
    });
  }
  _getLabelHorizontalPosition() {
    return this._localeService["getDirection"]() === "rtl" ? "left" : "right";
  }
  _updateDiffMarks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461042, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044) {
    this._diffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.makeDirty();
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045 = this._generateDiffMarks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461042, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044);
    this._diffs = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 instanceof SheetCollabCursorShape)), this._borderDiffs = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 instanceof Rect)), this._arrowDiffs = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 instanceof Xi)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045.length > 0 && this._scrollToShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045[0], this._context["scene"]);
  }
  _generateDiffMarks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054) return [];
    let {
        scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055
      } = this._context,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522 => {
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522) return new Map();
        let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map();
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246) => {
          let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052);
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.length > 0 && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12);
        }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59;
      };
    return this._renderCellRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.insertCellRanges), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.insert["fill"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), this._renderCellRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.deleteCellRanges), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.delete["fill"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), this._renderCellRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.updateCellRanges), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.update["fill"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), this._renderBorderRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.insertBorderRanges), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.insert["stroke"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), this._renderBorderRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.deleteBorderRanges), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.delete["stroke"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), this._renderBorderRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.updateBorderRanges), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.update["stroke"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), this._renderArrowRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.arrowRowRanges), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.update["fill"], "vertical", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), this._renderArrowRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.arrowColumnRanges), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.update["fill"], "horizontal", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.insertDrawings && this._renderDrawingHighlights(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.insertDrawings, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.insert["stroke"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.deleteDrawings && this._renderDrawingHighlights(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.deleteDrawings, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.delete["stroke"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.updateDrawings && this._renderDrawingHighlights(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.updateDrawings, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.update["stroke"], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), this._handleOverlappingShapes(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055.addObjects(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31, 20), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31;
  }
  hideDiffMarks() {
    this._diffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.hide();
    }), this._borderDiffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.hide();
    }), this._arrowDiffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.hide();
    });
  }
  showDiffMarks() {
    this._diffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.show();
    }), this._borderDiffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.show();
    }), this._arrowDiffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534.show();
    });
  }
  removeDiffMarks() {
    this._removeDiffMarks();
  }
  scrollToShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064) {
    this._scrollToShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064);
  }
  _renderCellRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250;
        let {
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253,
            showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = "",
            highlightColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254,
            highlightRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249,
          {
            startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257,
            startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258,
            endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259,
            endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 = getCoordByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = getCoordByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068),
          {
            columnHeaderHeightAndMarginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068,
          {
            startX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264,
            startY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261,
          {
            endX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266,
            endY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.rowHeaderWidth,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.columnHeaderHeight;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 -= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 -= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269);
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265,
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
            labelPosition: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 >= 20 ? "top" : "bottom",
            sheetID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252,
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251,
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070,
            fillAfterStrokeEnabled: true,
            backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070,
            name: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 = this._historyManagerService["getMember"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.name) + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256,
            labelHorizontalPosition: this._getLabelHorizontalPosition(),
            selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.startColumn + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.startRow + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.endColumn + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.endRow,
            left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264,
            top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265,
            width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1,
            height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
            evented: false,
            zIndex: 1000,
            highlight: true
          };
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.push(new SheetCollabCursorShape("", var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB));
      });
    });
  }
  _renderBorderRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292;
        let {
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295,
            showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 = ""
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291,
          {
            startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
            startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
            endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299,
            endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 = getCoordByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = getCoordByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078),
          {
            columnHeaderHeightAndMarginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078,
          {
            startX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304,
            startY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301,
          {
            endX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306,
            endY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305,
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
            labelPosition: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 >= 20 ? "top" : "bottom",
            sheetID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293,
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080,
            fillAfterStrokeEnabled: false,
            backgroundColor: "transparent",
            name: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 = this._historyManagerService["getMember"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.name) + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296,
            labelHorizontalPosition: this._getLabelHorizontalPosition(),
            selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.startColumn + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.startRow + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.endColumn + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.endRow,
            left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 - 12 / 2,
            top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 - 12 / 2,
            width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5,
            height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6,
            evented: false,
            zIndex: 1000,
            strokeWidth: 12,
            highlight: true
          };
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081.push(new SheetCollabCursorShape("", var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2));
      });
    });
  }
  _renderArrowRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088.rowHeaderWidth,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088.columnHeaderHeight;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 => {
        let {
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325,
          {
            startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327,
            startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
            endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
            endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 = getCoordByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 = getCoordByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088),
          {
            startX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333,
            startY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331,
          {
            endX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335,
            endY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091 === "horizontal") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = new Xi("", {
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090,
          direction: "horizontal",
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333,
          top: 2,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 - 4,
          evented: false,
          zIndex: 1001,
          highlight: true,
          highlightSecond: 4
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337);else {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = new Xi("", {
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090,
            direction: "vertical",
            left: 2,
            top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334,
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 - 4,
            height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D,
            evented: false,
            zIndex: 1001,
            highlight: true,
            highlightSecond: 4
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337);
        }
      });
    });
  }
  _renderDrawingHighlights(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107) return;
    let {
      columnHeaderHeightAndMarginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 = this._createDrawingHighlight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108, 12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352);
      });
    });
  }
  _createDrawingHighlight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121;
    let {
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124,
        showText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125 = ""
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126 = this._drawingManagerService["getDrawingByParam"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122
      });
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126.transform)) return null;
    let {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129 = 0,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130 = 0,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126.transform,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131 = new SheetCollabCursorShape("", {
        labelPosition: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118 >= 20 ? "top" : "bottom",
        sheetID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124,
        range: {
          startRow: 0,
          startColumn: 0,
          endRow: 0,
          endColumn: 0
        },
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117,
        fillAfterStrokeEnabled: false,
        backgroundColor: "transparent",
        name: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121 = this._historyManagerService["getMember"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.name) + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125,
        labelHorizontalPosition: this._getLabelHorizontalPosition(),
        selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123 + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124 + "-drawing-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119 / 2,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119 / 2,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128,
        evented: true,
        zIndex: 1000,
        strokeWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119,
        highlight: true
      });
    return this._bindDrawingHighlightHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131;
  }
  _bindDrawingHighlightHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149.onPointerEnter$["subscribeEvent"](() => this._setOverlappingShapesHovered(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150, true)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149.onPointerLeave$["subscribeEvent"](() => this._setOverlappingShapesHovered(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150, false));
  }
  _setOverlappingShapesHovered(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461155) {
    this._findOverlappingShapes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 instanceof SheetCollabCursorShape && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.setShapeProps({
        hovered: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461155
      });
    });
  }
  _removeDiffMarks() {
    this._diffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.dispose()), this._borderDiffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.dispose()), this._arrowDiffs["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.dispose()), this._diffs["clear"](), this._borderDiffs["clear"](), this._arrowDiffs["clear"]();
  }
  _handleOverlappingShapes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 instanceof SheetCollabCursorShape);
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.length === 0) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = [],
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996 = new Set();
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 => {
      if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556)) return;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.left || 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.top || 0,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.width || 0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556];
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355 => {
        if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355)) return;
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355.left || 0,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355.top || 0,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355.width || 0),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10;
        Math.abs(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1) <= 10 && Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356) <= 10 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355));
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.length > 1 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.push(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21);
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560.sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.top || 0) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.top || 0)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362) => {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 * 22;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.setOffsetY(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13);
      });
    });
  }
  _findOverlappingShapes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161.left || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161.top || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161.width || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161.height || 0,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB19 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.left || 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.top || 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.width || 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.height || 0,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23;
      return !(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB19 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 >= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 >= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8);
    });
  }
  _scrollToShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.getViewport(SHEET_VIEWPORT_KEY.VIEW_MAIN);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167) return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165.left || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165.top || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165.width || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165.height || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.width || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.height || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.viewportScrollX || 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.viewportScrollY || 0,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 <= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 <= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24) return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 = Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 / 2),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 = Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 / 2);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.scrollToViewportPos({
      viewportScrollX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50,
      viewportScrollY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51
    });
  }
  _getSheetObject() {
    return getSheetObject(this._univerInstanceService, this._renderManagerService);
  }
  dispose() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175 = this._pointerMoveSubscription) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175.unsubscribe(), this._pointerMoveSubscription = null, this._removeDiffMarks(), super.dispose();
  }
};
Zi = J([q(1, Inject(X)), q(2, Inject(Z)), q(3, IUniverInstanceService), q(4, IRenderManagerService), q(5, Inject(SheetSkeletonManagerService)), q(6, ICommandService), q(7, IDrawingManagerService), q(8, Inject(LocaleService)), q(9, Inject(Yi))], Zi);
let Qi = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180) {
    super(), this._sidebarService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178, this._historyManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180, K(this, "_sidebarDisposable", null), this._init();
  }
  _init() {
    this._initPanel();
  }
  _openPanel() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185;
    if (this._sidebarDisposable) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.historyPanelComponentKey,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
        header: {
          title: this._localeService["t"]("sheets-history-ui.viewer.panel.title")
        },
        children: {
          label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186
        },
        onClose: () => {
          this._sidebarDisposable = null, this._historyManagerService["exitHistoryMode"]();
        }
      };
    this._sidebarDisposable = this._sidebarService["open"]({
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
    });
  }
  _initPanel() {
    this.disposeWithMe(this._historyManagerService["openPanel$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 && this._openPanel();
    }));
  }
};
Qi = J([q(0, ISidebarService), q(1, Inject(LocaleService)), q(2, Inject(X)), q(3, IConfigService)], Qi);
var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 = class extends Disposable {
  constructor() {
    super(), K(this, "_dialogOptions$", new Subject());
  }
  open() {
    return toDisposable(() => {});
  }
  close() {}
  closeAll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189) {}
  getDialogs$() {
    return this._dialogOptions$["asObservable"]();
  }
};
let ea = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191 = G, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195
    } = merge({}, G, this._config);
    this._configService["setConfig"](W, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195);
  }
  onStarting() {
    [[Q], [X], [qi], [Z], [Yi], [Y], [Qi], [Wi], [ISnapshotServerService, {
      useClass: SnapshotServerOverHTTPService
    }], [IDialogService, {
      useClass: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879
    }], [IImageIoService, {
      useClass: CollaborationImageIoService
    }]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 => this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566)), this._injector["get"](qi), this._injector["get"](Q);
  }
  onRendered() {
    [[Zi]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 => {
      this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567));
    }), this._injector["get"](Wi), this._injector["get"](Qi);
  }
  onSteady() {
    this._injector["get"](Z);
  }
};
K(ea, "pluginName", "UNIVER_SHEETS_HISTORY_VIEWER_PLUGIN"), K(ea, "packageName", bi), K(ea, "version", xi), ea = J([DependentOn(UniverLicensePlugin, UniverDrawingPlugin, UniverRenderEnginePlugin, UniverNetworkPlugin, UniverSheetsFilterPlugin, UniverSheetsTablePlugin, UniverSheetsPlugin, UniverCollaborationPlugin, UniverSheetsConditionalFormattingPlugin, UniverSheetsChartPlugin, UniverSheetsPivotTablePlugin, UniverSheetSparklinePlugin, UniverSheetsUIPlugin, UniverSheetsDataValidationPlugin), q(1, Inject(Injector)), q(2, IRenderManagerService), q(3, IConfigService)], ea);
function ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803.getCurrentLocale();
  return {
    locale: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804,
    locales: {
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803.getLocales()
    },
    direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803.getDirection()
  };
}
function na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808.getDirection();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807.dir = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807.style["direction"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809;
}
function ra(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813) {
  return ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813) ? typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813.hasMore == "boolean" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813.lastLabel == "string" && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813.versions) && ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813.members) : false;
}
function ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815;
}
const aa = "univer-history-container";
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880 = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210) {
    super(), this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461204, this._messageService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206, this._selectionProtectionRuleModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207, this._dialogService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, this._sidebarService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, K(this, "_historyUniver$", new BehaviorSubject(null)), K(this, "historyUniver$", this._historyUniver$["asObservable"]()), K(this, "_disposableCollection", new DisposableCollection()), K(this, "_pluginMap", new Map()), K(this, "_internalWebWorker", null), this._init();
  }
  get historyUniver() {
    return this._historyUniver$["value"];
  }
  _init() {
    this._initContainer(), this._initPlugins();
  }
  _initContainer() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222 = this._configService["getConfig"](W),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221 = this._configService["getConfig"](UI_PLUGIN_CONFIG_KEY)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.container,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222.univerContainerId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224 == "string" ? document.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225) throw Error("[HistoryLoaderService]:\x20Configure\x20a\x20valid\x20Univer\x20container\x20before\x20opening\x20history.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226 = document.createElement("div");
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.id = aa, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.style["position"] = "absolute", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.style["top"] = "0", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.style["left"] = "0", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.style["width"] = "100%", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.style["height"] = "100%", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.style["zIndex"] = "49", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.style["display"] = "none", na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226, this._localeService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225.appendChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226);
  }
  _initPlugins() {
    [[UniverRenderEnginePlugin], [UniverUIPlugin, {
      container: aa,
      header: true,
      toolbar: false,
      footer: true,
      contextMenu: false,
      override: [[IDialogService, null]]
    }], [UniverNetworkPlugin], [UniverDrawingPlugin, {
      override: [[IImageIoService, null]]
    }], [UniverDocsPlugin, {
      hasScroll: false
    }], [UniverDocsUIPlugin], [UniverSheetsNumfmtPlugin], [UniverSheetsPlugin, {
      notExecuteFormula: true
    }], [UniverSheetsUIPlugin], [UniverSheetsFormulaPlugin], [UniverSheetsFormulaUIPlugin], [UniverCollaborationPlugin], [UniverSheetsFilterPlugin], [UniverSheetsFilterUIPlugin], [UniverSheetsConditionalFormattingPlugin], [UniverSheetsConditionalFormattingUIPlugin], [UniverSheetsHyperLinkPlugin], [UniverSheetsHyperLinkUIPlugin], [UniverDataValidationPlugin], [UniverSheetsDataValidationPlugin], [UniverSheetsDataValidationUIPlugin], [UniverProFormulaEnginePlugin, {
      notExecuteFormula: true
    }], [UniverDrawingUIPlugin], [UniverSheetsDrawingPlugin], [UniverSheetsDrawingUIPlugin], [UniverSheetSparklinePlugin], [UniverSheetSparklineUIPlugin], [UniverSheetsChartPlugin], [UniverSheetsChartUIPlugin], [UniverSheetsShapePlugin], [UniverSheetsShapeUIPlugin], [UniverSheetsPivotTablePlugin, {
      notExecuteFormula: true
    }], [UniverSheetsTablePlugin]].forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570]) => this.registerPlugin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570));
  }
  dispose() {
    super.dispose(), this.unMountHistoryContent(), this._pluginMap["clear"]();
  }
  registerPlugin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235) {
    if (this._pluginMap["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.pluginName) && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235) throw Error("[HistoryLoaderService]: Plugin " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.pluginName + "\x20has\x20been\x20registered.");
    this._pluginMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.pluginName, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234]);
  }
  getAllPlugins() {
    return Array.from(this._pluginMap["values"]());
  }
  mountHistoryContent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241 = document.getElementById(aa);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241.style["display"] = "block", this._initUniver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239, aa, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240));
  }
  unMountHistoryContent() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245;
    this._disposableCollection["dispose"](), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245 = this.historyUniver) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.dispose(), this._historyUniver$["next"](null);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246 = document.getElementById(aa);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246.style["display"] = "none", this._internalWebWorker &&= (this._internalWebWorker["terminate"](), null));
  }
  _initUniver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255;
    if (this.historyUniver) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 = new Univer({
        ...ta(this._localeService),
        override: [[IAuthzIoService, {
          useClass: AuthzIoHttpService
        }]]
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.__getInjector();
    this._syncViewerServices(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.get(IConfigService).setConfig(COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, this._configService["getConfig"](COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 = this._configService["getConfig"](LS_CONFIG_KEY);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.registerPlugin(UniverLicensePlugin, {
      license: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258.ls
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252.workerURL;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 && (this._internalWebWorker = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 instanceof Worker ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.registerPlugin(UniverRPCMainThreadPlugin, {
      workerURL: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259
    })), this._pluginMap["forEach"](([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572]) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.registerPlugin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572);
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.registerPlugin(ea, {
      historyServerUrl: yi(this._configService["getConfig"](W)),
      historyPanelComponentKey: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.historyPanelComponentKey,
      historyPanelHidden: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.historyPanelHidden,
      historyAIassistantEnabled: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255.historyAIassistantEnabled
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.invoke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575 => {
      this._initListener(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249);
    }), this._historyUniver$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.get(X),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261 = this._checkCanRevert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249);
    ra(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.triggerCustomVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.triggerLoadVersions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261).catch(() => undefined);
  }
  _syncViewerServices(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275.get(ThemeService);
    this._disposableCollection["add"](this._themeService["darkMode$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.setDarkMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577);
    })), this._disposableCollection["add"](this._themeService["currentTheme$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.setTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579);
    }));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275.get(LocaleService);
    this._disposableCollection["add"](this._localeService["currentLocale$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 = this._localeService["getLocales"]();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278.load({
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278.setLocale(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581);
    })), this._disposableCollection["add"](this._localeService["direction$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278.setDirection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 = document.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.dir = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.style["direction"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585);
    }));
  }
  _initListener(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.get(X);
    this._disposableCollection["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285.status$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 => {
      switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589) {
        case "entered":
          this._dialogService["closeAll"](), this._sidebarService["close"]();
          break;
        case "exited":
          this._commandService["executeCommand"](sa.id), this.unMountHistoryContent();
          break;
        case "error":
          this.unMountHistoryContent(), this._messageService["show"]({
            content: this._localeService["t"]("sheets-history-ui.loader.panel.listFetchError"),
            type: MessageType.Error,
            duration: 3000
          });
          break;
        default:
          break;
      }
    })), this._disposableCollection["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285.revertRevision$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591) {
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284,
          revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591
        };
        this._commandService["executeCommand"](RevertRevisionMutation.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4).catch(() => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285.status = "error";
        });
      }
    }));
  }
  _checkCanRevert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290) return false;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290.getSheets().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.getSheetId()),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291 = new WorkbookEditablePermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289).id,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594 => new WorksheetEditPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594).id),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 => this._selectionProtectionRuleModel["getSubunitRuleList"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 => new RangeProtectionPermissionEditPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365.permissionId).id)).flat(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292 = new WorkbookRecoverHistoryPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289).id;
    return this._permissionService["composePermission"]([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292]).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596.value);
  }
};
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880 = J([q(0, Inject(LocaleService)), q(1, IUniverInstanceService), q(2, IConfigService), q(3, ICommandService), q(4, IMessageService), q(5, IPermissionService), q(6, Inject(RangeProtectionRuleModel)), q(7, Inject(IDialogService)), q(8, Inject(ISidebarService)), q(9, Inject(ThemeService))], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880);
function ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821) {
  return {
    id: oa.id,
    type: MenuItemType.BUTTON,
    icon: "HistoryIcon",
    title: "sheets-history-ui.loader.panel.title",
    tooltip: "sheets-history-ui.loader.panel.title",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821, UniverInstanceType.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821, {
      workbookTypes: [WorkbookViewHistoryPermission],
      worksheetTypes: [],
      rangeTypes: []
    })
  };
}
const la = {
  [RibbonStartGroup.OTHERS]: {
    [oa.id]: {
      order: 100,
      gridLayout: {
        row: 1,
        column: 5,
        rowSpan: 2,
        columnSpan: 2,
        showLabel: true
      },
      menuItemFactory: ca
    }
  }
};
function ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823 && "unitId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823.unitId == "string" && "revision" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823.revision == "number");
}
function da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825.eventID === CollaborationEvent.CHANGESET_ACK && parseProtocolChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825.data).mutations["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.id === RevertRevisionMutation.id && ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.params) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.params["unitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.params["revision"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826.revision);
}
fa = J([q(0, ICommandService), q(1, IMenuManagerService), q(2, Inject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880)), q(3, Inject(LocaleService)), q(4, IMessageService), q(5, Inject(CollaborationController)), q(6, ILocalCacheService), q(7, Inject(DataLoaderService)), q(8, IUniverInstanceService), q(9, IURLService)], fa);
ma = J([q(0, IPermissionService), q(1, IUIPartsService), q(2, IMessageService), q(3, Inject(LocaleService)), q(4, Inject(X)), q(5, Inject(Injector)), q(6, IConfigService)], ma);
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881 = J([q(0, IUIPartsService), q(1, Inject(Injector))], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881);
K(va, "pluginName", "UNIVER_SHEETS_HISTORY_VIEWER_MOBILE_PLUGIN"), K(va, "packageName", bi), K(va, "version", xi), va = J([DependentOn(UniverLicensePlugin, UniverDrawingPlugin, UniverRenderEnginePlugin, UniverNetworkPlugin, UniverSheetsFilterPlugin, UniverSheetsTablePlugin, UniverSheetsPlugin, UniverMobileUIPlugin, UniverCollaborationPlugin, UniverSheetsConditionalFormattingPlugin, UniverSheetsChartPlugin, UniverSheetsPivotTablePlugin, UniverSheetSparklinePlugin, UniverSheetsMobileUIPlugin, UniverSheetsDataValidationPlugin), q(1, Inject(Injector)), q(2, IRenderManagerService), q(3, IConfigService)], va);
ba = J([q(0, Inject(LocaleService)), q(1, IUniverInstanceService), q(2, IConfigService), q(3, ICommandService), q(4, IMessageService), q(5, IPermissionService), q(6, Inject(RangeProtectionRuleModel)), q(7, Inject(IDialogService)), q(8, Inject(ISidebarService)), q(9, Inject(ThemeService))], ba);
K(xa, "type", UniverInstanceType.UNIVER_UNKNOWN), K(xa, "pluginName", "UNIVER_SHEETS_HISTORY_MOBILE_UI_PLUGIN"), K(xa, "packageName", bi), K(xa, "version", xi), xa = J([DependentOn(UniverLicensePlugin, UniverSheetsPlugin, UniverMobileUIPlugin, UniverCollaborationClientPlugin, UniverCollaborationClientUIPlugin), q(1, Inject(Injector)), q(2, IConfigService)], xa);
Sa = J([q(0, ICommandService), q(1, IMenuManagerService), q(2, Inject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880)), q(3, Inject(LocaleService)), q(4, IMessageService), q(5, Inject(CollaborationController)), q(6, ILocalCacheService), q(7, Inject(DataLoaderService)), q(8, IUniverInstanceService), q(9, IURLService)], Sa);
K(Ca, "pluginName", "UNIVER_SHEETS_HISTORY_UI_PLUGIN"), K(Ca, "packageName", bi), K(Ca, "version", xi), K(Ca, "type", UniverInstanceType.UNIVER_SHEET), Ca = J([DependentOn(UniverLicensePlugin, UniverSheetsPlugin, UniverSheetsHistoryPlugin, UniverCollaborationClientPlugin, UniverCollaborationClientUIPlugin), q(1, Inject(Injector)), q(2, IConfigService)], Ca);
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880, K, la, ua, da, X, Gi, Z, Ai, ji, Pi, Ni, Q, Yi, Y, Wi, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879, Zi, na, ta, yi, ra };
