import { BASES_DASHBOARD_DEFAULT_ROW_HEIGHT as var_core_value_sig4524, BASES_DASHBOARD_GRID_COLUMNS as var_core_value_sig64D5, BaseChartRuntimeService as var_core_value_sig9678, BaseDashboardResourceService as var_core_value_sig5E74, BaseDashboardWidgetType as var_core_value_sig75FC, CreateBaseDashboardCommand as var_core_value_sig639A, DeleteBaseDashboardCommand as var_core_value_sig567C, RemoveBaseDashboardWidgetCommand as var_core_value_sig825F, UniverBaseDashboardPlugin as var_core_value_sig546D, UpdateBaseDashboardCommand as var_core_value_sig8078, UpdateBasePivotViewCommand as var_core_value_sigDCED, UpsertBaseDashboardWidgetCommand as var_core_value_sig2829, canEditBaseDashboard as var_core_value_sig6EE2, canEditBasePivotView as var_core_value_sig4CCC, createBasePivotTable as var_core_value_sig6E47, resolveBasePivotChartRowDirection as var_core_value_sigB64D } from "@univerjs-pro/bases-dashboard";
import { ActivateBaseViewOperation as var_core_value_sig2407, BaseUnitCollaborationStatus as var_core_value_sigE4D0, FormulaEditorPanel as var_core_value_sigD5F1, IBaseDashboardUIExtensionRegistryService as var_core_value_sigBC19, IBaseViewUIRegistryService as var_core_value_sig4F3C, UniverBasesUIPlugin as var_core_value_sig8D44, formulaToEditorFormula as var_core_value_sig1660, normalizeEditorFormulaForConfig as var_core_value_sigEE7B, toFormulaMenuTables as var_core_value_sig44DF, toMenuFields as var_core_value_sig7E48 } from "@univerjs-pro/bases-ui";
import { CHART_TYPE_CATALOG as var_core_value_sig7B9E, ChartAxisSection as var_core_value_sig5C3B, ChartColorField as var_core_value_sig4002, ChartCommonDataMappingSection as var_core_value_sig4153, ChartEditBlockTitle as var_core_value_sig2825, ChartEditPanel as var_core_value_sig5FD0, ChartEditPanelSection as var_core_value_sigA7E3, ChartEditPanelTab as var_core_value_sigA784, ChartEditPanelTabs as var_core_value_sig4406, ChartEditorCapability as var_core_value_sig6806, ChartEditorProvider as var_core_value_sigD4AA, ChartFunnelStyleSection as var_core_value_sigDC41, ChartGradientFillField as var_core_value_sigFB47, ChartGridlinesAndTicksSection as var_core_value_sig9B3D, ChartHeatmapStyleSection as var_core_value_sigC1CF, ChartHostAdapter as var_core_value_sigEE12, ChartIndicatorLineSection as var_core_value_sigD70C, ChartLegendSection as var_core_value_sigF047, ChartLineAndAreaSection as var_core_value_sigC2F9, ChartNumberFormatAtom as var_core_value_sig1F51, ChartParetoSeriesSection as var_core_value_sig29F5, ChartPieStyleSection as var_core_value_sig5A51, ChartRadarStyleSection as var_core_value_sigF1D1, ChartRelationStyleSection as var_core_value_sig370E, ChartSectionAccordion as var_core_value_sigDE14, ChartSectionAccordionContent as var_core_value_sig02CB, ChartSectionAccordionItem as var_core_value_sig6CBB, ChartSectionAccordionTrigger as var_core_value_sig68DA, ChartSeriesSection as var_core_value_sig64D8, ChartStackField as var_core_value_sigD755, ChartStyleSection as var_core_value_sigF897, ChartThemeField as var_core_value_sigA578, ChartTitlesSection as var_core_value_sig0260, ChartTrendlineSection as var_core_value_sig034D, ChartTypeField as var_core_value_sig89EC, ChartTypeSpecificDataSection as var_core_value_sig9975, ChartTypeSpecificSetupSection as var_core_value_sigD6D9, ChartTypeSpecificStyleSection as var_core_value_sig2637, ChartUIService as var_core_value_sigAF1D, ChartViewStateRegistry as var_core_value_sigC92D, ChartWaterfallSetupFields as var_core_value_sigEA3D, ChartWaterfallStyleSection as var_core_value_sig2841, ChartWordCloudStyleSection as var_core_value_sig9FE1, DEFAULT_CHART_AXIS_VALUES as var_core_value_sig9DAA, DEFAULT_CHART_FUNNEL_VALUES as var_core_value_sig1F8A, DEFAULT_CHART_HEATMAP_VALUES as var_core_value_sigEBB4, DEFAULT_CHART_INDICATOR_LINE_VALUES as var_core_value_sig2B74, DEFAULT_CHART_LEGEND_VALUES as var_core_value_sig0483, DEFAULT_CHART_LINE_AND_AREA_VALUES as var_core_value_sig4A48, DEFAULT_CHART_PARETO_VALUES as var_core_value_sigD170, DEFAULT_CHART_PIE_VALUES as var_core_value_sig90E5, DEFAULT_CHART_RADAR_VALUES as var_core_value_sig7000, DEFAULT_CHART_RELATION_VALUES as var_core_value_sigD7C5, DEFAULT_CHART_SERIES_VALUES as var_core_value_sig3633, DEFAULT_CHART_STYLE_VALUES as var_core_value_sig1DF5, DEFAULT_CHART_TITLE_VALUES as var_core_value_sig90A3, DEFAULT_CHART_TRENDLINE_VALUES as var_core_value_sig28BE, DEFAULT_CHART_WATERFALL_SETUP_VALUES as var_core_value_sig0224, DEFAULT_CHART_WATERFALL_STYLE_VALUES as var_core_value_sig854B, DEFAULT_CHART_WORD_CLOUD_VALUES as var_core_value_sig1FF6, UniverChartUIPlugin as var_core_value_sig4B27, buildChartTypeSelectOptions as var_core_value_sig3A41, chartTypeSupportsCapability as var_core_value_sig269A, chartTypeSupportsLineAndAreaStyle as var_core_value_sigBF53, useChartEditorChartType as var_core_value_sigD9BB, useChartEditorHasRightAxis as var_core_value_sigF549 } from "@univerjs-pro/chart-ui";
import { UniverLicensePlugin as var_core_value_sigC125 } from "@univerjs-pro/license";
import { ShapeFormulaService as var_core_value_sigB63D, UniverShapeEditorPlugin as var_core_value_sig8255, createFormulaShapeData as var_core_value_sigBFC7 } from "@univerjs-pro/shape-editor";
import { BaseFieldType as var_core_value_sig933F, BaseFilterConjunction as var_core_value_sig29DE, BaseFilterOperator as var_core_value_sig4AFB, BaseViewType as var_core_value_sigC7EA, DependentOn as var_core_value_sigDAB9, Disposable as var_core_value_sig9CF7, ICommandService as var_core_value_sigCCE5, IConfigService as var_core_value_sig5933, IImageIoService as var_core_value_sig884B, ILogService as var_core_value_sig4E30, IPermissionService as var_core_value_sig9730, IUndoRedoService as var_core_value_sig8E4A, IUniverInstanceService as var_core_value_sig300B, ImageSourceType as var_core_value_sig8457, Inject as var_core_value_sigB30D, Injector as var_core_value_sigDB33, LocaleService as var_core_value_sig6C8C, Plugin as var_core_value_sig7A5E, RedoCommand as var_core_value_sig838E, ThemeService as var_core_value_sig9A5B, UndoCommand as var_core_value_sigC860, UniverInstanceType as var_core_value_sigE64C, createParagraphId as var_core_value_sigF39B, dateKit as var_core_value_sig9B88, generateRandomId as var_core_value_sig992A, merge as var_core_value_sig6281, numfmt as var_core_value_sig9B01, touchDependencies as var_core_value_sigA724 } from "@univerjs/core";
import { UniverDocsUIPlugin as var_core_value_sig385E } from "@univerjs/docs-ui";
import { AscendingIcon as var_core_value_sig10D3, CalendarIcon as var_core_value_sig41F2, ChartIcon as var_core_value_sig32DD, CloseIcon as var_core_value_sig7A88, DeleteIcon as var_core_value_sig6CFC, DescendingIcon as var_core_value_sig3EC0, ExpandIcon as var_core_value_sigEA69, FilterIcon as var_core_value_sigF42A, GripVerticalIcon as var_core_value_sig898E, IncreaseIcon as var_core_value_sigC481, MoreDownIcon as var_core_value_sig27B7, MoreHorizontalIcon as var_core_value_sig2DAD, NumberIcon as var_core_value_sig00DE, PenIcon as var_core_value_sigEF7C, PivotTableIcon as var_core_value_sig07E7, RedoIcon as var_core_value_sig6005, SearchIcon as var_core_value_sig25A4, TextIcon as var_core_value_sigB591, UndoIcon as var_core_value_sigB272 } from "@univerjs/icons";
import { combineLatest as var_core_value_sig6F52, map as var_core_value_sig09C4, merge as var_core_value_sig8E3E, skip as var_core_value_sigC3D3 } from "rxjs";
import { IAttachmentIoService as var_core_value_sig1451 } from "@univerjs-pro/collaboration-client";
import { ShapeFillEnum as var_core_value_sigAD57, ShapeLineTypeEnum as var_core_value_sig58A8, ShapeTypeEnum as var_core_value_sigEC1A } from "@univerjs-pro/engine-shape";
import { Button as var_core_value_sigBDED, Checkbox as var_core_value_sig4BFF, DatePicker as var_core_value_sig40E7, Dialog as var_core_value_sigEDBA, DropdownMenu as var_core_value_sigE863, Input as var_core_value_sig04B4, InputNumber as var_core_value_sig1C07, MultipleSelect as var_core_value_sig93D6, Segmented as var_core_value_sigDD05, Select as var_core_value_sig3932, Textarea as var_core_value_sig48B2, Tooltip as var_core_value_sig57DF, borderClassName as var_core_value_sigC985, clsx as var_core_value_sig8DA6, scrollbarClassName as var_core_value_sigCA69 } from "@univerjs/design";
import { useDependency as var_core_value_sigB77C, useObservable as var_core_value_sig9AFF } from "@univerjs/ui";
import { useCallback as var_core_value_sig3545, useEffect as var_core_value_sig5EE4, useMemo as var_core_value_sig7EAB, useRef as var_core_value_sig56B9, useState as var_core_value_sig90CF } from "react";
import { Fragment as var_core_value_sigA386, jsx as var_core_value_sigCD6E, jsxs as var_core_value_sigFD9D } from "react/jsx-runtime";
import { CHART_DATA_UPDATE_ANIMATION_DURATION as var_core_value_sigA2A4, ChartRenderMode as var_core_value_sigA1AC, ChartThemeService as var_core_value_sig6180, ChartTypeBits as var_core_value_sigB93D, ChartWaterfallStyleTarget as var_core_value_sigB17C, IChartRenderModelManagerService as var_core_value_sig69B6, RTLChartStyle as var_core_value_sig708D, chartBitsUtils as var_core_value_sig1ED2, chartTypeCanUseTrendLine as var_core_value_sig94C1, resolveChartRuntimeStyle as var_core_value_sigABAC, resolveDefaultChartHostFrameStyle as var_core_value_sigFAE6, toChartModelUpdate as var_core_value_sig06AC } from "@univerjs-pro/engine-chart";
import { PivotCellStyleTypeEnum as var_core_value_sig57E2, PivotDataFieldDataTypeEnum as var_core_value_sig01FC, PivotDataFieldSortOperatorEnum as var_core_value_sig10FC, PivotFilterTypeEnum as var_core_value_sig5374, PivotLayoutTypeEnum as var_core_value_sigB66D, PivotSubtotalPositionEnum as var_core_value_sigD0F0, PivotSubtotalTypeEnum as var_core_value_sig8E31, PivotTableFiledAreaEnum as var_core_value_sig8339, PivotTableValuePositionEnum as var_core_value_sigA01E, isErrorValue as var_core_value_sigA41E, isPrefixValue as var_core_value_sig939C } from "@univerjs-pro/engine-pivot";
var Un = "@univerjs-pro/bases-dashboard-ui",
  Wn = "1.0.0-insiders.20260907-70fc579";
const Gn = {};
function Kn(var_core_value_sig13D7, var_core_value_sig90C0) {
  let var_core_value_sigF1B2 = var_core_value_sigB77C(var_core_value_sig9730);
  return var_core_value_sig9AFF(() => var_core_value_sigF1B2.permissionPointUpdate$["pipe"](var_core_value_sig09C4(() => var_core_value_sig6EE2(var_core_value_sigF1B2, var_core_value_sig13D7, var_core_value_sig90C0))), var_core_value_sig6EE2(var_core_value_sigF1B2, var_core_value_sig13D7, var_core_value_sig90C0), false, [var_core_value_sig90C0, var_core_value_sigF1B2, var_core_value_sig13D7]);
}
function qn(var_core_value_sigC2BB, var_core_value_sigD9DB, var_core_value_sigA363) {
  let var_core_value_sigFBA5 = var_core_value_sigB77C(var_core_value_sig9730);
  return var_core_value_sig9AFF(() => var_core_value_sigFBA5.permissionPointUpdate$["pipe"](var_core_value_sig09C4(() => var_core_value_sig4CCC(var_core_value_sigFBA5, var_core_value_sigC2BB, var_core_value_sigD9DB, var_core_value_sigA363))), var_core_value_sig4CCC(var_core_value_sigFBA5, var_core_value_sigC2BB, var_core_value_sigD9DB, var_core_value_sigA363), false, [var_core_value_sigFBA5, var_core_value_sigD9DB, var_core_value_sigC2BB, var_core_value_sigA363]);
}
function Jn(var_core_value_sigAC47, var_core_value_sigA06F = "cover") {
  return {
    backgroundImage: "url(" + JSON.stringify(var_core_value_sigAC47) + ")",
    backgroundPosition: var_core_value_sigA06F === "repeat" ? "0 0" : "center",
    backgroundRepeat: var_core_value_sigA06F === "repeat" ? "repeat" : "no-repeat",
    backgroundSize: var_core_value_sigA06F === "cover" ? "cover" : "auto"
  };
}
const Yn = {
    alignment: "left",
    currency: "USD",
    decimalPlaces: 0,
    fontSize: 40,
    fontSizeMode: "auto",
    numberFormat: "general"
  },
  Xn = {
    CNY: "¥",
    EUR: "€",
    USD: "$"
  };
function Zn(var_core_value_sig770E) {
  var var_core_value_sig4654;
  let var_core_value_sigB26B = tr(((var_core_value_sig4654 = var_core_value_sig770E.shapeData["formulaBinding"]) == null || (var_core_value_sig4654 = var_core_value_sig4654.numberFormat) == null ? undefined : var_core_value_sig4654.pattern) ?? "");
  return {
    ...Yn,
    ...var_core_value_sigB26B,
    ...var_core_value_sig770E.appearance
  };
}
function Qn(var_core_value_sig019B, var_core_value_sigC6BC) {
  let var_core_value_sig8EC2 = {
      ...var_core_value_sig019B.appearance,
      ...var_core_value_sigC6BC
    },
    var_core_value_sigA8C3 = Zn({
      ...var_core_value_sig019B,
      appearance: var_core_value_sig8EC2
    }),
    var_core_value_sig5276 = var_core_value_sig019B.shapeData["formulaBinding"] ?? {
      formula: ""
    };
  return {
    ...var_core_value_sig019B,
    appearance: var_core_value_sig8EC2,
    shapeData: {
      ...var_core_value_sig019B.shapeData,
      formulaBinding: {
        ...var_core_value_sig5276,
        numberFormat: {
          pattern: $n(var_core_value_sigA8C3.numberFormat, var_core_value_sigA8C3.decimalPlaces, var_core_value_sigA8C3.currency)
        }
      }
    }
  };
}
function $n(var_core_value_sig031B, var_core_value_sig9DC0, var_core_value_sig95F0) {
  let var_core_value_sig9CCB = Math.max(0, Math.min(8, Math.round(var_core_value_sig9DC0))),
    var_core_value_sigE718 = var_core_value_sig9CCB ? "." + "0"["repeat"](var_core_value_sig9CCB) : "";
  switch (var_core_value_sig031B) {
    case "number":
      return "0" + var_core_value_sigE718;
    case "percent":
      return "0" + var_core_value_sigE718 + "%";
    case "currency":
      return (Xn[var_core_value_sig95F0] ?? var_core_value_sig95F0) + "#,##0" + var_core_value_sigE718;
    case "grouped":
      return "#,##0" + var_core_value_sigE718;
    case "compact":
    case "general":
      return "General";
  }
}
function er(var_core_value_sigAEC8, var_core_value_sigB977, var_core_value_sig2949) {
  return var_core_value_sig2949.numberFormat !== "compact" || typeof var_core_value_sigB977 != "number" || !Number.isFinite(var_core_value_sigB977) ? var_core_value_sigAEC8 : new Intl["NumberFormat"](undefined, {
    notation: "compact",
    minimumFractionDigits: var_core_value_sig2949.decimalPlaces ?? 0,
    maximumFractionDigits: var_core_value_sig2949.decimalPlaces ?? 0
  }).format(var_core_value_sigB977);
}
function tr(var_core_value_sig308A) {
  var var_core_value_sig528D, var_core_value_sigA309;
  if (!var_core_value_sig308A || var_core_value_sig308A === "General") return {};
  let var_core_value_sig9E20 = var_core_value_sig308A.match(/\.([0#]+)/),
    var_core_value_sig26BB = (var_core_value_sig9E20 == null || (var_core_value_sig528D = var_core_value_sig9E20[1]) == null ? undefined : var_core_value_sig528D.length) ?? 0;
  if (var_core_value_sig308A.includes("%")) return {
    decimalPlaces: var_core_value_sig26BB,
    numberFormat: "percent"
  };
  let var_core_value_sig19B4 = (var_core_value_sigA309 = Object.entries(Xn).find(([, var_core_value_sig08BA]) => var_core_value_sig308A.includes(var_core_value_sig08BA))) == null ? undefined : var_core_value_sigA309[0];
  return var_core_value_sig19B4 ? {
    currency: var_core_value_sig19B4,
    decimalPlaces: var_core_value_sig26BB,
    numberFormat: "currency"
  } : {
    decimalPlaces: var_core_value_sig26BB,
    numberFormat: var_core_value_sig308A.includes(",") ? "grouped" : "number"
  };
}
const nr = {
  center: "center",
  left: "flex-start",
  right: "flex-end"
};
function rr({
  dashboardId: var_core_value_sig218A,
  unitId: var_core_value_sig14CB,
  widget: var_core_value_sigFDEE
}) {
  var var_core_value_sigA676, var_core_value_sigC27E, var_core_value_sigA70D, var_core_value_sigCE10, var_core_value_sigA3861, var_core_value_sigCD82, var_core_value_sig44DD, var_core_value_sig96FA, var_core_value_sigAB68;
  let var_core_value_sig040A = var_core_value_sigB77C(var_core_value_sigB63D),
    var_core_value_sig2AE0 = var_core_value_sigB77C(var_core_value_sig884B),
    var_core_value_sigC349 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig9D96 = var_core_value_sig7EAB(() => ({
      hostType: var_core_value_sigE64C.UNIVER_BASE,
      unitId: var_core_value_sig14CB,
      subUnitId: var_core_value_sig218A,
      shapeId: var_core_value_sigFDEE.id
    }), [var_core_value_sig218A, var_core_value_sig14CB, var_core_value_sigFDEE.id]),
    [var_core_value_sig2776, var_core_value_sig6FB2] = var_core_value_sig90CF(() => var_core_value_sig040A.getPresentation(var_core_value_sig9D96)),
    [var_core_value_sigEB43, var_core_value_sig4186] = var_core_value_sig90CF(() => {
      var var_core_value_sigDBB5;
      return (var_core_value_sigDBB5 = var_core_value_sig040A.getResult(var_core_value_sig9D96)) == null ? undefined : var_core_value_sigDBB5.value;
    }),
    [var_core_value_sigF963, var_core_value_sigB608] = var_core_value_sig90CF(),
    var_core_value_sigF866 = var_core_value_sig56B9(null),
    var_core_value_sig5EFB = var_core_value_sig56B9(null),
    var_core_value_sig3A85 = Zn(var_core_value_sigFDEE);
  var_core_value_sig5EE4(() => {
    let var_core_value_sigCFAC = var_core_value_sig040A.presentationChanged$["subscribe"](var_core_value_sigA12B => {
      var_core_value_sigA12B.unitId === var_core_value_sig14CB && var_core_value_sigA12B.subUnitId === var_core_value_sig218A && var_core_value_sigA12B.shapeId === var_core_value_sigFDEE.id && (var_core_value_sig6FB2(var_core_value_sigA12B.presentation), var_core_value_sig4186(var_core_value_sigA12B.result["value"]));
    });
    return () => var_core_value_sigCFAC.unsubscribe();
  }, [var_core_value_sig218A, var_core_value_sig040A, var_core_value_sig9D96, var_core_value_sig14CB, var_core_value_sigFDEE.id]), var_core_value_sig5EE4(() => {
    let var_core_value_sig237B = var_core_value_sig3A85.backgroundImage;
    if (!var_core_value_sig237B || var_core_value_sig237B.sourceType !== var_core_value_sig8457.UUID) return;
    let var_core_value_sigFEAB = var_core_value_sig2AE0.getImageSourceCache(var_core_value_sig237B.source, var_core_value_sig237B.sourceType);
    if (var_core_value_sigFEAB != null && var_core_value_sigFEAB.src) return;
    let var_core_value_sigE347 = true;
    return var_core_value_sig2AE0.getImage(var_core_value_sig237B.source).then(var_core_value_sigF230 => {
      var_core_value_sigE347 && var_core_value_sigB608({
        source: var_core_value_sig237B.source,
        value: var_core_value_sigF230
      });
    }).catch(() => undefined), () => {
      var_core_value_sigE347 = false;
    };
  }, [var_core_value_sig3A85.backgroundImage, var_core_value_sig2AE0]);
  let var_core_value_sig2682 = ((var_core_value_sigA676 = var_core_value_sig3A85.backgroundImage) == null ? undefined : var_core_value_sigA676.sourceType) === var_core_value_sig8457.UUID ? ((var_core_value_sigC27E = var_core_value_sig2AE0.getImageSourceCache(var_core_value_sig3A85.backgroundImage["source"], var_core_value_sig3A85.backgroundImage["sourceType"])) == null ? undefined : var_core_value_sigC27E.src) ?? ((var_core_value_sigF963 == null ? undefined : var_core_value_sigF963.source) === var_core_value_sig3A85.backgroundImage["source"] ? var_core_value_sigF963.value : "") : ((var_core_value_sigA70D = var_core_value_sig3A85.backgroundImage) == null ? undefined : var_core_value_sigA70D.source) ?? "",
    var_core_value_sig4BB5 = var_core_value_sigFDEE.shapeData["shapeText"],
    var_core_value_sig6709 = var_core_value_sig4BB5 && "dataModel" in var_core_value_sig4BB5 ? (var_core_value_sigCE10 = var_core_value_sig4BB5.dataModel) == null ? undefined : var_core_value_sigCE10.doc : undefined,
    var_core_value_sig52CA = er((var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.text) ?? "", var_core_value_sigEB43, var_core_value_sig3A85),
    var_core_value_sigC030 = var_core_value_sigFDEE.shapeData["fill"],
    var_core_value_sig88F6 = var_core_value_sigFDEE.shapeData["stroke"],
    var_core_value_sig37DB = var_core_value_sig6709 == null || (var_core_value_sigA3861 = var_core_value_sig6709.documentStyle) == null ? undefined : var_core_value_sigA3861.textStyle,
    var_core_value_sig5542 = var_core_value_sigFDEE.description ?? var_core_value_sigFDEE.title ?? "";
  return var_core_value_sig5EE4(() => {
    let var_core_value_sig3C5B = var_core_value_sigF866.current,
      var_core_value_sig200B = var_core_value_sig5EFB.current;
    if (!var_core_value_sig3C5B || !var_core_value_sig200B) return;
    let var_core_value_sig3863 = () => {
      if (var_core_value_sig3A85.fontSizeMode === "custom" || !var_core_value_sig3C5B.clientWidth || !var_core_value_sig3C5B.clientHeight) {
        var_core_value_sig200B.style["fontSize"] = var_core_value_sig3A85.fontSize + "px";
        return;
      }
      let var_core_value_sig09B8 = 1,
        var_core_value_sig6F91 = 72,
        var_core_value_sigF9C7 = var_core_value_sig09B8;
      for (; var_core_value_sig09B8 <= var_core_value_sig6F91;) {
        let var_core_value_sig2AD0 = Math.floor((var_core_value_sig09B8 + var_core_value_sig6F91) / 2);
        var_core_value_sig200B.style["fontSize"] = var_core_value_sig2AD0 + "px", var_core_value_sig200B.scrollWidth <= var_core_value_sig3C5B.clientWidth && var_core_value_sig200B.scrollHeight <= var_core_value_sig3C5B.clientHeight ? (var_core_value_sigF9C7 = var_core_value_sig2AD0, var_core_value_sig09B8 = var_core_value_sig2AD0 + 1) : var_core_value_sig6F91 = var_core_value_sig2AD0 - 1;
      }
      var_core_value_sig200B.style["fontSize"] = var_core_value_sigF9C7 + "px";
    };
    if (var_core_value_sig3863(), typeof ResizeObserver > "u") return;
    let var_core_value_sigC97C = new ResizeObserver(var_core_value_sig3863);
    return var_core_value_sigC97C.observe(var_core_value_sig3C5B), () => var_core_value_sigC97C.disconnect();
  }, [var_core_value_sig3A85.fontSize, var_core_value_sig3A85.fontSizeMode, var_core_value_sig52CA]), var_core_value_sigFD9D("div", {
    "data-dashboard-formula-shape": var_core_value_sigFDEE.id,
    className: "univer-relative\x20univer-box-border\x20univer-flex\x20univer-h-full\x20univer-w-full\x20univer-flex-col\x20univer-justify-center\x20univer-overflow-hidden\x20univer-bg-gray-0\x20univer-p-4\x20univer-text-gray-1000\x20dark:!univer-bg-gray-900\x20dark:!univer-text-gray-50",
    style: {
      backgroundColor: ((var_core_value_sigCD82 = var_core_value_sigFDEE.appearance) == null ? undefined : var_core_value_sigCD82.backgroundColor) ?? ((var_core_value_sigC030 == null ? undefined : var_core_value_sigC030.fillType) === var_core_value_sigAD57.SolidFill ? var_core_value_sigC030.color ?? undefined : undefined),
      border: (var_core_value_sig88F6 == null ? undefined : var_core_value_sig88F6.lineStrokeType) === var_core_value_sig58A8.SolidLine ? (var_core_value_sig88F6.width ?? 1) + "px solid " + (var_core_value_sig88F6.color ?? "currentColor") : undefined,
      borderRadius: var_core_value_sigFDEE.shapeType === var_core_value_sigEC1A.RoundRect ? 12 : undefined,
      color: ((var_core_value_sig44DD = var_core_value_sigFDEE.appearance) == null ? undefined : var_core_value_sig44DD.textColor) ?? (var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.color) ?? (var_core_value_sig37DB == null || (var_core_value_sig96FA = var_core_value_sig37DB.cl) == null ? undefined : var_core_value_sig96FA.rgb) ?? undefined,
      fontWeight: var_core_value_sig37DB != null && var_core_value_sig37DB.bl ? 600 : undefined,
      textAlign: var_core_value_sig3A85.alignment
    },
    children: [var_core_value_sig2682 && var_core_value_sigCD6E("img", {
      src: var_core_value_sig2682,
      alt: "",
      "aria-hidden": "true",
      className: "univer-pointer-events-none univer-absolute univer-inset-0 univer-h-full univer-w-full",
      style: {
        objectFit: ((var_core_value_sigAB68 = var_core_value_sig3A85.backgroundImage) == null ? undefined : var_core_value_sigAB68.fit) ?? "cover"
      }
    }), var_core_value_sigFD9D("div", {
      className: "univer-relative univer-z-10 univer-flex univer-min-h-0 univer-w-full univer-flex-1",
      children: [var_core_value_sig5542 && var_core_value_sigCD6E("div", {
        "data-dashboard-formula-description": true,
        className: "univer-absolute univer-inset-x-0 univer-top-0 univer-w-full univer-truncate univer-text-sm univer-font-medium univer-opacity-80",
        children: var_core_value_sig5542
      }), var_core_value_sigCD6E("div", {
        ref: var_core_value_sigF866,
        "data-dashboard-formula-value": true,
        "aria-label": var_core_value_sig5542 || var_core_value_sigC349.t("bases-dashboard-ui.dashboard.formulaShape"),
        className: "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-1 univer-items-center univer-overflow-hidden",
        style: {
          justifyContent: nr[var_core_value_sig3A85.alignment]
        },
        children: var_core_value_sigCD6E("span", {
          ref: var_core_value_sig5EFB,
          "data-dashboard-formula-value-text": true,
          "data-font-size-mode": var_core_value_sig3A85.fontSizeMode,
          className: "univer-inline-block univer-max-w-full univer-whitespace-nowrap univer-leading-none",
          children: var_core_value_sig52CA
        })
      })]
    })]
  });
}
function ir(var_core_value_sigE0A9, var_core_value_sigA73E, var_core_value_sig7620, var_core_value_sigB9FC) {
  let var_core_value_sig5055 = {
    ...var_core_value_sigE0A9
  };
  if (var_core_value_sigA73E.includes("w")) {
    let var_core_value_sigC4B1 = var_core_value_sigE0A9.column + var_core_value_sigE0A9.columnSpan;
    var_core_value_sig5055.column = Math.max(0, Math.min(var_core_value_sigC4B1 - 1, var_core_value_sigE0A9.column + var_core_value_sig7620)), var_core_value_sig5055.columnSpan = var_core_value_sigC4B1 - var_core_value_sig5055.column;
  } else var_core_value_sigA73E.includes("e") && (var_core_value_sig5055.columnSpan = Math.max(1, Math.min(var_core_value_sig64D5 - var_core_value_sigE0A9.column, var_core_value_sigE0A9.columnSpan + var_core_value_sig7620)));
  if (var_core_value_sigA73E.includes("n")) {
    let var_core_value_sig1BD9 = var_core_value_sigE0A9.row + var_core_value_sigE0A9.rowSpan;
    var_core_value_sig5055.row = Math.max(0, Math.min(var_core_value_sig1BD9 - 1, var_core_value_sigE0A9.row + var_core_value_sigB9FC)), var_core_value_sig5055.rowSpan = var_core_value_sig1BD9 - var_core_value_sig5055.row;
  } else var_core_value_sigA73E.includes("s") && (var_core_value_sig5055.rowSpan = Math.max(1, var_core_value_sigE0A9.rowSpan + var_core_value_sigB9FC));
  return var_core_value_sig5055;
}
function ar(var_core_value_sig3801) {
  let var_core_value_sig45F0 = Math.max(1, Math.min(var_core_value_sig64D5, Math.round(var_core_value_sig3801.columnSpan)));
  return {
    column: Math.max(0, Math.min(var_core_value_sig64D5 - var_core_value_sig45F0, Math.round(var_core_value_sig3801.column))),
    row: Math.max(0, Math.round(var_core_value_sig3801.row)),
    columnSpan: var_core_value_sig45F0,
    rowSpan: Math.max(1, Math.round(var_core_value_sig3801.rowSpan))
  };
}
function or(var_core_value_sigBC91, var_core_value_sigCB88, var_core_value_sig8D65) {
  let var_core_value_sig8122 = new Map(var_core_value_sigBC91),
    var_core_value_sigEDC6 = ar(var_core_value_sig8D65);
  var_core_value_sig8122.set(var_core_value_sigCB88, var_core_value_sigEDC6);
  let var_core_value_sig611A = [[var_core_value_sigCB88, var_core_value_sigEDC6]];
  for (let [var_core_value_sigE43E, var_core_value_sigA937] of var_core_value_sig8122) {
    if (var_core_value_sigE43E === var_core_value_sigCB88) continue;
    let var_core_value_sig8895 = ar(var_core_value_sigA937);
    for (; var_core_value_sig611A.some(([, var_core_value_sig3EEE]) => cr(var_core_value_sig8895, var_core_value_sig3EEE));) var_core_value_sig8895 = {
      ...var_core_value_sig8895,
      row: var_core_value_sig8895.row + 1
    };
    for (; var_core_value_sig8895.row > 0;) {
      let var_core_value_sigBC46 = {
        ...var_core_value_sig8895,
        row: var_core_value_sig8895.row - 1
      };
      if (var_core_value_sig611A.some(([, var_core_value_sig7524]) => cr(var_core_value_sigBC46, var_core_value_sig7524))) break;
      var_core_value_sig8895 = var_core_value_sigBC46;
    }
    var_core_value_sig611A.push([var_core_value_sigE43E, var_core_value_sig8895]), var_core_value_sig8122.set(var_core_value_sigE43E, var_core_value_sig8895);
  }
  return var_core_value_sig8122;
}
function sr(var_core_value_sig6BD9, var_core_value_sig7E56, var_core_value_sig4161, var_core_value_sig7580 = 56, var_core_value_sig1F18 = 22) {
  return var_core_value_sig6BD9 < var_core_value_sig7E56 + var_core_value_sig7580 ? -Math.ceil(var_core_value_sig1F18 * (1 - Math.max(0, var_core_value_sig6BD9 - var_core_value_sig7E56) / var_core_value_sig7580)) : var_core_value_sig6BD9 > var_core_value_sig4161 - var_core_value_sig7580 ? Math.ceil(var_core_value_sig1F18 * (1 - Math.max(0, var_core_value_sig4161 - var_core_value_sig6BD9) / var_core_value_sig7580)) : 0;
}
function cr(var_core_value_sigD5A0, var_core_value_sig81B2) {
  return var_core_value_sigD5A0.column < var_core_value_sig81B2.column + var_core_value_sig81B2.columnSpan && var_core_value_sigD5A0.column + var_core_value_sigD5A0.columnSpan > var_core_value_sig81B2.column && var_core_value_sigD5A0.row < var_core_value_sig81B2.row + var_core_value_sig81B2.rowSpan && var_core_value_sigD5A0.row + var_core_value_sigD5A0.rowSpan > var_core_value_sig81B2.row;
}
const lr = [{
  direction: "nw",
  className: "univer-left-px\x20univer-top-px\x20-univer-translate-x-1/2\x20-univer-translate-y-1/2\x20univer-cursor-nwse-resize"
}, {
  direction: "n",
  className: "-univer-top-1\x20univer-left-2\x20univer-right-2\x20univer-h-2\x20univer-cursor-ns-resize"
}, {
  direction: "ne",
  className: "univer-right-px\x20univer-top-px\x20univer-translate-x-1/2\x20-univer-translate-y-1/2\x20univer-cursor-nesw-resize"
}, {
  direction: "e",
  className: "-univer-right-1 univer-bottom-2 univer-top-2 univer-w-2 univer-cursor-ew-resize"
}, {
  direction: "se",
  className: "univer-bottom-px univer-right-px univer-translate-x-1/2 univer-translate-y-1/2 univer-cursor-nwse-resize"
}, {
  direction: "s",
  className: "-univer-bottom-1 univer-left-2 univer-right-2 univer-h-2 univer-cursor-ns-resize"
}, {
  direction: "sw",
  className: "univer-bottom-px univer-left-px -univer-translate-x-1/2 univer-translate-y-1/2 univer-cursor-nesw-resize"
}, {
  direction: "w",
  className: "-univer-left-1 univer-bottom-2 univer-top-2 univer-w-2 univer-cursor-ew-resize"
}];
function ur({
  dashboard: var_core_value_sigA0A5,
  dragLabel: var_core_value_sig10AA,
  editable: var_core_value_sig18E0 = true,
  onLayoutsCommit: var_core_value_sigE6D0,
  onSelectWidget: var_core_value_sig8E91,
  renderWidget: var_core_value_sig00BE,
  renderWidgetActions: var_core_value_sig7BB5,
  resizeLabel: var_core_value_sig6AAD,
  selectedWidgetId: var_core_value_sig1157,
  widgetLabel: var_core_value_sigA694
}) {
  let var_core_value_sig0428 = var_core_value_sig56B9(null),
    var_core_value_sigBE07 = var_core_value_sig56B9(null),
    [var_core_value_sig555F, var_core_value_sig3D6F] = var_core_value_sig90CF(false),
    var_core_value_sig336C = var_core_value_sig7EAB(() => new Map(var_core_value_sigA0A5.widgetOrder["flatMap"](var_core_value_sigC80B => {
      let var_core_value_sig284F = var_core_value_sigA0A5.widgets[var_core_value_sigC80B];
      return var_core_value_sig284F ? [[var_core_value_sigC80B, var_core_value_sig284F.layout]] : [];
    })), [var_core_value_sigA0A5]),
    [var_core_value_sig6E68, var_core_value_sig8DFE] = var_core_value_sig90CF(var_core_value_sig336C);
  var_core_value_sig5EE4(() => {
    var_core_value_sigBE07.current || var_core_value_sig8DFE(var_core_value_sig336C);
  }, [var_core_value_sig336C]), var_core_value_sig5EE4(() => {
    if (!var_core_value_sig555F) return;
    let var_core_value_sigCAD5 = var_core_value_sigE154 => {
        let var_core_value_sig4632 = var_core_value_sig0428.current;
        if (!var_core_value_sig4632) return null;
        let var_core_value_sig12F2 = var_core_value_sig4632.getBoundingClientRect(),
          var_core_value_sig2259 = Math.max(1, (var_core_value_sig12F2.width - 8 * (var_core_value_sig64D5 - 1)) / var_core_value_sig64D5),
          var_core_value_sig9E2F = Math.round((var_core_value_sig4632.scrollTop - var_core_value_sigE154.startScrollTop) / (var_core_value_sig4524 + 8)),
          var_core_value_sigD082 = Math.round((var_core_value_sigE154.pointerX - var_core_value_sigE154.startX) / (var_core_value_sig2259 + 8)),
          var_core_value_sigDBB7 = Math.round((var_core_value_sigE154.pointerY - var_core_value_sigE154.startY) / (var_core_value_sig4524 + 8)) + var_core_value_sig9E2F,
          var_core_value_sigD0A8 = var_core_value_sigE154.mode === "move" ? {
            ...var_core_value_sigE154.initial,
            column: var_core_value_sigE154.initial["column"] + var_core_value_sigD082,
            row: var_core_value_sigE154.initial["row"] + var_core_value_sigDBB7
          } : ir(var_core_value_sigE154.initial, var_core_value_sigE154.resizeDirection ?? "se", var_core_value_sigD082, var_core_value_sigDBB7),
          var_core_value_sigF4B9 = or(var_core_value_sigE154.initialLayouts, var_core_value_sigE154.id, var_core_value_sigD0A8);
        return var_core_value_sig8DFE(var_core_value_sigF4B9), var_core_value_sigF4B9;
      },
      var_core_value_sigE503 = var_core_value_sig5CEE => {
        let var_core_value_sigE92A = var_core_value_sigBE07.current;
        if (!var_core_value_sigE92A) return;
        let var_core_value_sig362B = {
          ...var_core_value_sigE92A,
          pointerX: var_core_value_sig5CEE.clientX,
          pointerY: var_core_value_sig5CEE.clientY
        };
        var_core_value_sigBE07.current = var_core_value_sig362B;
      },
      var_core_value_sig48DD = () => {
        let var_core_value_sig5CA5 = var_core_value_sigBE07.current,
          var_core_value_sigE90F = var_core_value_sig5CA5 ? var_core_value_sigCAD5(var_core_value_sig5CA5) : null;
        var_core_value_sigBE07.current = null, var_core_value_sig3D6F(false), var_core_value_sigE90F && var_core_value_sigE6D0(var_core_value_sigE90F);
      },
      var_core_value_sig5E6A = 0,
      var_core_value_sigB7FC = () => {
        let var_core_value_sigEFD4 = var_core_value_sig0428.current,
          var_core_value_sig861B = var_core_value_sigBE07.current;
        if (var_core_value_sigEFD4 && var_core_value_sig861B) {
          let var_core_value_sigC9E0 = var_core_value_sigEFD4.getBoundingClientRect(),
            var_core_value_sig76BA = sr(var_core_value_sig861B.pointerY, var_core_value_sigC9E0.top, var_core_value_sigC9E0.bottom);
          var_core_value_sig76BA !== 0 && (var_core_value_sigEFD4.scrollTop += var_core_value_sig76BA), var_core_value_sigCAD5(var_core_value_sig861B), var_core_value_sig5E6A = requestAnimationFrame(var_core_value_sigB7FC);
        }
      };
    return var_core_value_sig5E6A = requestAnimationFrame(var_core_value_sigB7FC), window.addEventListener("pointermove", var_core_value_sigE503), window.addEventListener("pointerup", var_core_value_sig48DD), () => {
      cancelAnimationFrame(var_core_value_sig5E6A), window.removeEventListener("pointermove", var_core_value_sigE503), window.removeEventListener("pointerup", var_core_value_sig48DD);
    };
  }, [var_core_value_sig555F, var_core_value_sigE6D0]);
  let var_core_value_sig48EA = Math.max(8, ...Array.from(var_core_value_sig6E68.values()).map(var_core_value_sig9CD9 => var_core_value_sig9CD9.row + var_core_value_sig9CD9.rowSpan)),
    var_core_value_sig5E16 = (var_core_value_sigFD0C, var_core_value_sig849B, var_core_value_sig5F1A, var_core_value_sigB455) => {
      var_core_value_sigFD0C.preventDefault(), var_core_value_sigFD0C.stopPropagation();
      let var_core_value_sig5241 = var_core_value_sig0428.current,
        var_core_value_sigC6E5 = {
          id: var_core_value_sig849B.id,
          mode: var_core_value_sig5F1A,
          pointerX: var_core_value_sigFD0C.clientX,
          pointerY: var_core_value_sigFD0C.clientY,
          startX: var_core_value_sigFD0C.clientX,
          startY: var_core_value_sigFD0C.clientY,
          startScrollTop: (var_core_value_sig5241 == null ? undefined : var_core_value_sig5241.scrollTop) ?? 0,
          initial: var_core_value_sig6E68.get(var_core_value_sig849B.id) ?? var_core_value_sig849B.layout,
          initialLayouts: new Map(var_core_value_sig6E68),
          resizeDirection: var_core_value_sigB455
        };
      var_core_value_sigBE07.current = var_core_value_sigC6E5, var_core_value_sig3D6F(true);
    };
  return var_core_value_sigCD6E("div", {
    ref: var_core_value_sig0428,
    "data-dashboard-scroll-container": true,
    className: var_core_value_sig8DA6("univer-h-full univer-min-h-0 univer-overflow-auto univer-bg-gray-100 univer-p-3 dark:!univer-bg-gray-950", var_core_value_sigCA69),
    onClick: var_core_value_sig18E0 ? var_core_value_sigCEFB => {
      if (!(var_core_value_sigCEFB.target instanceof Node) || !var_core_value_sigCEFB.currentTarget["contains"](var_core_value_sigCEFB.target)) return;
      let var_core_value_sig1537 = var_core_value_sigCEFB.target instanceof Element ? var_core_value_sigCEFB.target : var_core_value_sigCEFB.target["parentElement"];
      var_core_value_sig1537 != null && var_core_value_sig1537.closest("[data-dashboard-widget]") || var_core_value_sig8E91 == null || var_core_value_sig8E91();
    } : undefined,
    children: var_core_value_sigCD6E("div", {
      "data-dashboard-grid": true,
      className: "univer-grid univer-grid-cols-12 univer-pb-6",
      style: {
        gap: 8,
        gridAutoRows: var_core_value_sig4524,
        minHeight: var_core_value_sig48EA * (var_core_value_sig4524 + 8)
      },
      children: var_core_value_sigA0A5.widgetOrder["map"](var_core_value_sigE4C6 => {
        var var_core_value_sig4313;
        let var_core_value_sigFC87 = var_core_value_sigA0A5.widgets[var_core_value_sigE4C6],
          var_core_value_sig156F = var_core_value_sig6E68.get(var_core_value_sigE4C6);
        return !var_core_value_sigFC87 || !var_core_value_sig156F ? null : var_core_value_sigFD9D("article", {
          "data-dashboard-widget": var_core_value_sigFC87.id,
          "aria-label": var_core_value_sigFC87.title ?? var_core_value_sigA694(var_core_value_sigFC87),
          className: var_core_value_sig8DA6("univer-group univer-relative univer-flex univer-min-h-0 univer-flex-col univer-overflow-visible univer-rounded-lg univer-border univer-shadow-sm univer-transition-shadow", var_core_value_sigFC87.type === var_core_value_sig75FC.Image || var_core_value_sigFC87.type === var_core_value_sig75FC.FormulaShape ? "univer-bg-transparent dark:!univer-bg-transparent" : "univer-bg-gray-0 dark:!univer-bg-gray-900", var_core_value_sig18E0 && var_core_value_sig1157 === var_core_value_sigFC87.id ? "univer-z-10\x20univer-border-primary-500\x20univer-ring-1\x20univer-ring-primary-500" : "univer-border-gray-200\x20dark:!univer-border-gray-700"),
          style: {
            gridColumn: var_core_value_sig156F.column + 1 + " / span " + var_core_value_sig156F.columnSpan,
            gridRow: var_core_value_sig156F.row + 1 + "\x20/\x20span\x20" + var_core_value_sig156F.rowSpan
          },
          tabIndex: var_core_value_sig18E0 ? 0 : undefined,
          onClick: var_core_value_sig18E0 ? () => var_core_value_sig8E91 == null ? undefined : var_core_value_sig8E91(var_core_value_sigFC87.id) : undefined,
          onFocus: var_core_value_sig18E0 ? () => var_core_value_sig8E91 == null ? undefined : var_core_value_sig8E91(var_core_value_sigFC87.id) : undefined,
          children: [var_core_value_sig18E0 && var_core_value_sigCD6E("button", {
            type: "button",
            "aria-label": var_core_value_sig10AA,
            "data-dashboard-drag-handle": var_core_value_sigFC87.id,
            className: var_core_value_sig8DA6("univer-pointer-events-none univer-absolute univer-left-1/2 univer-top-1 univer-z-20 univer-flex univer-h-5 univer-w-8 -univer-translate-x-1/2 univer-appearance-none univer-items-center univer-justify-center univer-border-0 univer-bg-transparent univer-p-0 univer-text-gray-400 univer-opacity-0 univer-shadow-none univer-outline-none univer-transition-opacity group-hover:univer-pointer-events-auto group-hover:univer-opacity-100 focus:univer-pointer-events-auto focus:univer-opacity-100 [@media(hover:none)]:univer-pointer-events-auto [@media(hover:none)]:univer-opacity-100", var_core_value_sig555F && ((var_core_value_sig4313 = var_core_value_sigBE07.current) == null ? undefined : var_core_value_sig4313.id) === var_core_value_sigFC87.id && var_core_value_sigBE07.current["mode"] === "move" ? "univer-cursor-grabbing" : "univer-cursor-grab"),
            onPointerDown: var_core_value_sig5237 => var_core_value_sig5E16(var_core_value_sig5237, var_core_value_sigFC87, "move"),
            children: var_core_value_sigCD6E(var_core_value_sig898E, {
              className: "univer-size-5 univer-rotate-90",
              "aria-hidden": "true"
            })
          }), var_core_value_sig18E0 && var_core_value_sigCD6E("div", {
            className: "univer-pointer-events-none univer-absolute univer-right-1 univer-top-1 univer-z-20 univer-flex univer-items-center univer-opacity-0 univer-transition-opacity focus-within:univer-pointer-events-auto focus-within:univer-opacity-100 group-hover:univer-pointer-events-auto group-hover:univer-opacity-100 [@media(hover:none)]:univer-pointer-events-auto [@media(hover:none)]:univer-opacity-100",
            children: var_core_value_sig7BB5 == null ? undefined : var_core_value_sig7BB5(var_core_value_sigFC87)
          }), var_core_value_sigCD6E("div", {
            className: "univer-relative\x20univer-min-h-0\x20univer-flex-1\x20univer-overflow-hidden\x20univer-rounded-lg",
            children: var_core_value_sig00BE(var_core_value_sigFC87)
          }), var_core_value_sig18E0 && lr.map(({
            className: var_core_value_sigBB00,
            direction: var_core_value_sig7E54
          }) => {
            let var_core_value_sig9A8D = var_core_value_sig7E54.length === 2;
            return var_core_value_sigCD6E("button", {
              type: "button",
              "aria-label": var_core_value_sig6AAD,
              "data-dashboard-resize-handle": var_core_value_sig7E54,
              "data-dashboard-resize-control": var_core_value_sig9A8D ? var_core_value_sig7E54 : undefined,
              "data-dashboard-resize-edge": var_core_value_sig9A8D ? undefined : var_core_value_sig7E54,
              className: var_core_value_sig8DA6("univer-pointer-events-none\x20univer-absolute\x20univer-z-30\x20univer-appearance-none\x20univer-p-0\x20univer-opacity-0\x20!univer-shadow-none\x20univer-outline-none\x20univer-transition-opacity\x20group-hover:univer-pointer-events-auto\x20group-hover:univer-opacity-100\x20focus:univer-pointer-events-auto\x20focus:univer-opacity-100\x20[@media(hover:none)]:univer-pointer-events-auto\x20[@media(hover:none)]:univer-opacity-100", var_core_value_sig9A8D ? "univer-box-content\x20univer-size-1.5\x20univer-rounded-full\x20!univer-border-2\x20!univer-border-solid\x20!univer-border-white\x20!univer-bg-primary-600" : "univer-border-0\x20univer-bg-transparent", var_core_value_sigBB00, var_core_value_sig1157 === var_core_value_sigFC87.id && "univer-pointer-events-auto univer-opacity-100"),
              onPointerDown: var_core_value_sigFBFA => var_core_value_sig5E16(var_core_value_sigFBFA, var_core_value_sigFC87, "resize", var_core_value_sig7E54)
            }, var_core_value_sig7E54);
          })]
        }, var_core_value_sigFC87.id);
      })
    })
  });
}
const dr = {
  alignment: "left",
  fontSize: 18,
  fontSizeMode: "auto"
};
function fr(var_core_value_sig09F3) {
  return {
    ...dr,
    ...var_core_value_sig09F3.appearance
  };
}
function pr(var_core_value_sig4592) {
  var var_core_value_sigC5C4;
  return ((var_core_value_sigC5C4 = var_core_value_sig4592.body) == null ? undefined : var_core_value_sigC5C4.dataStream["replace"](/\r\n$/, "").replace(/\r/g, "\x0a")) ?? "";
}
function mr(var_core_value_sig1617, var_core_value_sig4169) {
  var var_core_value_sig6D19;
  let var_core_value_sig279C = var_core_value_sig4169.replace(/\r\n|\r/g, "\x0a").split("\x0a"),
    var_core_value_sigAC51 = var_core_value_sig279C.join("\x0d") + "\x0d\x0a",
    var_core_value_sig8986 = ((var_core_value_sig6D19 = var_core_value_sig1617.body) == null ? undefined : var_core_value_sig6D19.paragraphs) ?? [],
    var_core_value_sigCAF7 = new Set(var_core_value_sig8986.map(var_core_value_sigDD51 => var_core_value_sigDD51.paragraphId)),
    var_core_value_sigED1C = 0,
    var_core_value_sig726E = var_core_value_sig279C.map((var_core_value_sigF057, var_core_value_sig72F6) => {
      var_core_value_sigED1C += var_core_value_sigF057.length;
      let var_core_value_sig9FBA = {
        ...(var_core_value_sig8986[var_core_value_sig72F6] ?? {
          startIndex: var_core_value_sigED1C,
          paragraphId: var_core_value_sigF39B(var_core_value_sigCAF7)
        }),
        startIndex: var_core_value_sigED1C
      };
      return var_core_value_sigED1C += 1, var_core_value_sig9FBA;
    });
  return {
    ...var_core_value_sig1617,
    body: {
      ...var_core_value_sig1617.body,
      dataStream: var_core_value_sigAC51,
      paragraphs: var_core_value_sig726E,
      textRuns: []
    }
  };
}
function hr(var_core_value_sig2CD3) {
  "@babel/helpers - typeof";

  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigFE01) {
    return typeof var_core_value_sigFE01;
  } : function (var_core_value_sigA2CE) {
    return var_core_value_sigA2CE && typeof Symbol == "function" && var_core_value_sigA2CE.constructor === Symbol && var_core_value_sigA2CE !== Symbol.prototype ? "symbol" : typeof var_core_value_sigA2CE;
  }, hr(var_core_value_sig2CD3);
}
function gr(var_core_value_sig038E, var_core_value_sigAA1E) {
  if (hr(var_core_value_sig038E) != "object" || !var_core_value_sig038E) return var_core_value_sig038E;
  var var_core_value_sigC9F5 = var_core_value_sig038E[Symbol.toPrimitive];
  if (var_core_value_sigC9F5 !== undefined) {
    var var_core_value_sig7EEA = var_core_value_sigC9F5.call(var_core_value_sig038E, var_core_value_sigAA1E || "default");
    if (hr(var_core_value_sig7EEA) != "object") return var_core_value_sig7EEA;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigAA1E === "string" ? String : Number)(var_core_value_sig038E);
}
function _r(var_core_value_sig59CE) {
  var var_core_value_sig33C8 = gr(var_core_value_sig59CE, "string");
  return hr(var_core_value_sig33C8) == "symbol" ? var_core_value_sig33C8 : var_core_value_sig33C8 + "";
}
function vr(var_core_value_sig957F, var_core_value_sig803B, var_core_value_sig5830) {
  return (var_core_value_sig803B = _r(var_core_value_sig803B)) in var_core_value_sig957F ? Object.defineProperty(var_core_value_sig957F, var_core_value_sig803B, {
    value: var_core_value_sig5830,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig957F[var_core_value_sig803B] = var_core_value_sig5830, var_core_value_sig957F;
}
function X(var_core_value_sig4A7C, var_core_value_sigF975) {
  return function (var_core_value_sig1975, var_core_value_sig6EA1) {
    var_core_value_sigF975(var_core_value_sig1975, var_core_value_sig6EA1, var_core_value_sig4A7C);
  };
}
function yr(var_core_value_sigCDAF, var_core_value_sigA298, var_core_value_sig0B40, var_core_value_sig330B) {
  var var_core_value_sig3625 = arguments.length,
    var_core_value_sig0B4E = var_core_value_sig3625 < 3 ? var_core_value_sigA298 : var_core_value_sig330B === null ? var_core_value_sig330B = Object.getOwnPropertyDescriptor(var_core_value_sigA298, var_core_value_sig0B40) : var_core_value_sig330B,
    var_core_value_sig0E9F;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig0B4E = Reflect.decorate(var_core_value_sigCDAF, var_core_value_sigA298, var_core_value_sig0B40, var_core_value_sig330B);else {
    for (var var_core_value_sigE5BA = var_core_value_sigCDAF.length - 1; var_core_value_sigE5BA >= 0; var_core_value_sigE5BA--) (var_core_value_sig0E9F = var_core_value_sigCDAF[var_core_value_sigE5BA]) && (var_core_value_sig0B4E = (var_core_value_sig3625 < 3 ? var_core_value_sig0E9F(var_core_value_sig0B4E) : var_core_value_sig3625 > 3 ? var_core_value_sig0E9F(var_core_value_sigA298, var_core_value_sig0B40, var_core_value_sig0B4E) : var_core_value_sig0E9F(var_core_value_sigA298, var_core_value_sig0B40)) || var_core_value_sig0B4E);
  }
  return var_core_value_sig3625 > 3 && var_core_value_sig0B4E && Object.defineProperty(var_core_value_sigA298, var_core_value_sig0B40, var_core_value_sig0B4E), var_core_value_sig0B4E;
}
let br = class extends var_core_value_sigAF1D {
  constructor(var_core_value_sig029F) {
    super(var_core_value_sig029F), vr(this, "activeRuntimeModel", null);
  }
  executeChartUpdateConfig(var_core_value_sig3767) {}
};
br = yr([X(0, var_core_value_sigB30D(var_core_value_sigC92D))], br);
var xr;
const Z = {
    axis: {
      ...var_core_value_sig9DAA,
      primaryGridLineVisible: false,
      secondaryGridLineVisible: true
    },
    funnel: var_core_value_sig1F8A,
    heatmap: var_core_value_sigEBB4,
    indicatorLine: var_core_value_sig2B74,
    legend: var_core_value_sig0483,
    lineAndArea: var_core_value_sig4A48,
    pareto: var_core_value_sigD170,
    pie: var_core_value_sig90E5,
    radar: var_core_value_sig7000,
    relation: {
      ...var_core_value_sigD7C5,
      useValueAsSymbolSize: true
    },
    series: {
      ...var_core_value_sig3633,
      radarFillOpacity: 0.2,
      rightAxis: {
        ltr: false,
        rtl: ((xr = var_core_value_sig708D.allSeriesStyle) == null ? undefined : xr.rightYAxis) ?? false
      }
    },
    style: var_core_value_sig1DF5,
    titles: var_core_value_sig90A3,
    trendline: var_core_value_sig28BE,
    waterfall: {
      ...var_core_value_sig0224,
      useSubtotal: true
    },
    waterfallStyle: var_core_value_sig854B,
    wordCloud: var_core_value_sig1FF6
  },
  Sr = [var_core_value_sigB93D.Line, var_core_value_sigB93D.Radar, var_core_value_sigB93D.WordCloud, var_core_value_sigB93D.Scatter, var_core_value_sigB93D.Funnel, var_core_value_sigB93D.Relation, var_core_value_sigB93D.Sankey, var_core_value_sigB93D.Heatmap, var_core_value_sigB93D.Boxplot, var_core_value_sigB93D.Candlestick, var_core_value_sigB93D.Histogram, var_core_value_sigB93D.Treemap, var_core_value_sigB93D.Sunburst, var_core_value_sigB93D.Gauge, var_core_value_sigB93D.Chord];
function Cr(var_core_value_sig4A83) {
  let {
      config: var_core_value_sig58AA,
      onChange: var_core_value_sig84C4,
      runtime: var_core_value_sigB6F7,
      tableName: var_core_value_sigB495
    } = var_core_value_sig4A83,
    var_core_value_sig70D0 = var_core_value_sigB77C(br),
    var_core_value_sig2A8A = var_core_value_sigB77C(var_core_value_sig6C8C),
    [var_core_value_sig3782, var_core_value_sigD22E] = var_core_value_sig90CF(var_core_value_sigA784.Data),
    var_core_value_sig3455 = var_core_value_sig7EAB(() => new var_core_value_sigEE12(var_core_value_sigB6F7.model, {
      commit: var_core_value_sigC259 => {
        var var_core_value_sig9C9F;
        let var_core_value_sigFDEA = var_core_value_sigB6F7.model,
          var_core_value_sig86D0 = var_core_value_sig06AC(var_core_value_sigC259, {
            series: (var_core_value_sig9C9F = var_core_value_sigFDEA.config) == null ? undefined : var_core_value_sig9C9F.series,
            currentChartType: var_core_value_sigFDEA.chartType,
            currentStyle: var_core_value_sigFDEA.style,
            currentContext: var_core_value_sigFDEA.context,
            currentDataAggregation: var_core_value_sigFDEA.dataAggregation
          });
        var_core_value_sig84C4({
          chart: wr(var_core_value_sig58AA.chart, var_core_value_sig86D0)
        });
      }
    }), [var_core_value_sig58AA.chart, var_core_value_sig84C4, var_core_value_sigB6F7]),
    var_core_value_sig5CEF = var_core_value_sig7EAB(() => var_core_value_sig3A41(var_core_value_sig7B9E.map(var_core_value_sig4CD2 => ({
      ...var_core_value_sig4CD2,
      label: var_core_value_sig2A8A.t(Or(var_core_value_sig4CD2.labelId))
    }))), [var_core_value_sig2A8A]);
  return var_core_value_sigCD6E(var_core_value_sigD4AA, {
    chartUIService: var_core_value_sig70D0,
    hostAdapter: var_core_value_sig3455,
    children: var_core_value_sigFD9D("div", {
      className: "univer-flex univer-min-h-full univer-flex-col univer-bg-gray-0 dark:!univer-bg-gray-900",
      children: [var_core_value_sigCD6E(var_core_value_sig4406, {
        ariaLabel: var_core_value_sig2A8A.t("bases-dashboard-ui.chart.common.editChart"),
        className: "univer-shrink-0 univer-px-3",
        items: [{
          label: var_core_value_sig2A8A.t("bases-dashboard-ui.chart.common.setup"),
          panelId: "base-pivot-chart-setup",
          value: var_core_value_sigA784.Data
        }, {
          label: var_core_value_sig2A8A.t("bases-dashboard-ui.chart.common.customize"),
          panelId: "base-pivot-chart-style",
          value: var_core_value_sigA784.Style
        }],
        value: var_core_value_sig3782,
        onChange: var_core_value_sigD22E
      }), var_core_value_sig3782 === var_core_value_sigA784.Data ? var_core_value_sigCD6E(var_core_value_sig5FD0, {
        id: "base-pivot-chart-setup",
        label: var_core_value_sig2A8A.t("bases-dashboard-ui.chart.common.setup"),
        children: var_core_value_sigFD9D("div", {
          className: "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
          children: [var_core_value_sigCD6E(var_core_value_sig89EC, {
            options: var_core_value_sig5CEF
          }), var_core_value_sigCD6E(var_core_value_sigD6D9, {}), var_core_value_sigCD6E(var_core_value_sigA578, {}), var_core_value_sigCD6E(Tr, {}), var_core_value_sigCD6E(var_core_value_sigD755, {}), var_core_value_sigFD9D("div", {
            children: [var_core_value_sigCD6E(var_core_value_sig2825, {
              title: var_core_value_sig2A8A.t("bases-dashboard-ui.pivot.dataSource")
            }), var_core_value_sigCD6E(var_core_value_sig04B4, {
              disabled: true,
              value: var_core_value_sigB495
            })]
          }), var_core_value_sigCD6E(var_core_value_sig4153, {
            orientationControl: var_core_value_sigCD6E(var_core_value_sigBDED, {
              size: "small",
              onClick: () => var_core_value_sig84C4({
                chart: {
                  ...var_core_value_sig58AA.chart,
                  orient: var_core_value_sig58AA.chart["orient"] === "row" ? "column" : "row"
                }
              }),
              children: var_core_value_sig2A8A.t("bases-dashboard-ui.chart.common.switchRowColumn")
            })
          }), var_core_value_sigCD6E(var_core_value_sig9975, {}), var_core_value_sigCD6E(var_core_value_sigEA3D, {
            defaultValues: Z.waterfall
          }), var_core_value_sigFD9D("div", {
            children: [var_core_value_sigCD6E(var_core_value_sig2825, {
              title: var_core_value_sig2A8A.t("bases-dashboard-ui.pivot.display")
            }), var_core_value_sigCD6E(var_core_value_sig3932, {
              value: var_core_value_sig58AA.displayMode,
              options: [{
                value: "chart-and-table",
                label: var_core_value_sig2A8A.t("bases-dashboard-ui.pivot.chartAndTable")
              }, {
                value: "chart",
                label: var_core_value_sig2A8A.t("bases-dashboard-ui.pivot.chartOnly")
              }, {
                value: "table",
                label: var_core_value_sig2A8A.t("bases-dashboard-ui.pivot.tableOnly")
              }],
              onChange: var_core_value_sig670B => {
                (var_core_value_sig670B === "chart-and-table" || var_core_value_sig670B === "chart" || var_core_value_sig670B === "table") && var_core_value_sig84C4({
                  displayMode: var_core_value_sig670B
                });
              }
            })]
          })]
        })
      }) : var_core_value_sigCD6E(var_core_value_sig5FD0, {
        id: "base-pivot-chart-style",
        label: var_core_value_sig2A8A.t("bases-dashboard-ui.chart.common.customize"),
        children: var_core_value_sigCD6E(Er, {})
      })]
    })
  });
}
function wr(var_core_value_sig43D5, var_core_value_sig1395) {
  return {
    ...var_core_value_sig43D5,
    type: var_core_value_sig1395.chartType ?? var_core_value_sig43D5.type,
    style: var_core_value_sig1395.style ?? var_core_value_sig43D5.style,
    context: var_core_value_sig1395.context ?? var_core_value_sig43D5.context,
    dataAggregation: var_core_value_sig1395.dataAggregation ?? var_core_value_sig43D5.dataAggregation
  };
}
function Tr() {
  let var_core_value_sig9FA0 = var_core_value_sigD9BB();
  return var_core_value_sigCD6E(var_core_value_sigFB47, {
    visible: Sr.every(var_core_value_sig6912 => !var_core_value_sig1ED2.baseOn(var_core_value_sig9FA0, var_core_value_sig6912))
  });
}
function Q(var_core_value_sig055E) {
  return var_core_value_sigFD9D(var_core_value_sig6CBB, {
    id: var_core_value_sig055E.id,
    children: [var_core_value_sigCD6E(var_core_value_sig68DA, {
      children: var_core_value_sig055E.label
    }), var_core_value_sigCD6E(var_core_value_sig02CB, {
      children: var_core_value_sig055E.children
    })]
  });
}
function Er() {
  let var_core_value_sig7C77 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig9578 = var_core_value_sigD9BB(),
    var_core_value_sigA2D3 = var_core_value_sigF549(),
    [var_core_value_sigC218, var_core_value_sigADEC] = var_core_value_sig90CF(null),
    var_core_value_sig3D8E = var_core_value_sig1ED2.baseOn(var_core_value_sig9578, var_core_value_sigB93D.Pie),
    var_core_value_sig37E5 = var_core_value_sig9578 === var_core_value_sigB93D.Radar,
    var_core_value_sigF079 = var_core_value_sig9578 === var_core_value_sigB93D.WordCloud,
    var_core_value_sigFCA0 = var_core_value_sig9578 === var_core_value_sigB93D.Funnel,
    var_core_value_sigC84D = var_core_value_sig1ED2.baseOn(var_core_value_sig9578, var_core_value_sigB93D.Bubble),
    var_core_value_sigF2BC = var_core_value_sig9578 === var_core_value_sigB93D.Relation,
    var_core_value_sigD37B = var_core_value_sig9578 === var_core_value_sigB93D.Waterfall,
    var_core_value_sigFA28 = var_core_value_sig9578 === var_core_value_sigB93D.Pareto,
    var_core_value_sig93BE = var_core_value_sig9578 === var_core_value_sigB93D.Heatmap,
    var_core_value_sigABEC = var_core_value_sig269A(var_core_value_sig9578, var_core_value_sig6806.GeneralSeries) && !var_core_value_sigC84D && !var_core_value_sigFA28,
    var_core_value_sig2712 = Dr(var_core_value_sig9578, var_core_value_sig7C77),
    var_core_value_sig0B9E = var_core_value_sigE235 => var_core_value_sig7C77.t("bases-dashboard-ui.chart." + var_core_value_sigE235);
  return var_core_value_sigFD9D(var_core_value_sigDE14, {
    value: var_core_value_sigC218,
    onChange: var_core_value_sigADEC,
    children: [var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.ChartStyle,
      label: var_core_value_sig0B9E("common.chartStyle"),
      children: var_core_value_sigCD6E(var_core_value_sigF897, {
        defaultValues: Z.style
      })
    }), var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.ChartAndAxisTitles,
      label: var_core_value_sig0B9E("common.chartAndAxisTitles"),
      children: var_core_value_sigCD6E(var_core_value_sig0260, {
        commitMode: "blur",
        defaultValues: Z.titles
      })
    }), var_core_value_sigABEC && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.Series,
      label: var_core_value_sig0B9E("common.series"),
      children: var_core_value_sigCD6E(var_core_value_sig64D8, {
        defaultValues: Z.series,
        NumberFormatField: var_core_value_sig1F51
      })
    }), var_core_value_sigD37B && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.WaterfallSeries,
      label: var_core_value_sig0B9E("section.waterfall"),
      children: var_core_value_sigCD6E(var_core_value_sig2841, {
        defaultValues: Z.waterfallStyle,
        getDefaultBucketName: ({
          seriesName: var_core_value_sig7664,
          target: var_core_value_sig2281
        }) => var_core_value_sig2281 === var_core_value_sigB17C.Subtotal ? var_core_value_sig0B9E("waterfall.subtotal") : var_core_value_sig7664 ? var_core_value_sig7664 + "-(" + var_core_value_sig0B9E(var_core_value_sig2281 === var_core_value_sigB17C.Positive ? "waterfall.positive" : "waterfall.negative") + ")" : "",
        NumberFormatField: var_core_value_sig1F51
      })
    }), var_core_value_sigFA28 && var_core_value_sigFD9D(var_core_value_sigA386, {
      children: [var_core_value_sigCD6E(Q, {
        id: var_core_value_sigA7E3.ParetoBarSeries,
        label: var_core_value_sig0B9E("section.paretoBar"),
        children: var_core_value_sigCD6E(var_core_value_sig29F5, {
          defaultValues: Z.pareto,
          NumberFormatField: var_core_value_sig1F51,
          showDataPointEditor: true,
          target: "barStyle"
        })
      }), var_core_value_sigCD6E(Q, {
        id: var_core_value_sigA7E3.ParetoLineSeries,
        label: var_core_value_sig0B9E("section.paretoLine"),
        children: var_core_value_sigCD6E(var_core_value_sig29F5, {
          defaultValues: Z.pareto,
          NumberFormatField: var_core_value_sig1F51,
          showDataPointEditor: false,
          target: "cumulativeLineStyle"
        })
      })]
    }), var_core_value_sig3D8E && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.PieStyle,
      label: var_core_value_sig0B9E("section.pie"),
      children: var_core_value_sigCD6E(var_core_value_sig5A51, {
        defaultValues: Z.pie,
        NumberFormatField: var_core_value_sig1F51
      })
    }), var_core_value_sigF079 && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.WordCloud,
      label: var_core_value_sig0B9E("section.wordCloud"),
      children: var_core_value_sigCD6E(var_core_value_sig9FE1, {
        defaultValues: Z.wordCloud
      })
    }), var_core_value_sig37E5 && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.Radar,
      label: var_core_value_sig0B9E("section.radar"),
      children: var_core_value_sigCD6E(var_core_value_sigF1D1, {
        defaultValues: Z.radar
      })
    }), var_core_value_sigFCA0 && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.Funnel,
      label: var_core_value_sig0B9E("section.funnel"),
      children: var_core_value_sigCD6E(var_core_value_sigDC41, {
        defaultValues: Z.funnel,
        gapControl: "select"
      })
    }), var_core_value_sig93BE && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.Heatmap,
      label: var_core_value_sig0B9E("common.heatmap"),
      children: var_core_value_sigCD6E(var_core_value_sigC1CF, {
        defaultValues: Z.heatmap
      })
    }), var_core_value_sigF2BC && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.Relation,
      label: var_core_value_sig0B9E("section.relation"),
      children: var_core_value_sigCD6E(var_core_value_sig370E, {
        defaultValues: Z.relation
      })
    }), var_core_value_sigBF53(var_core_value_sig9578) && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.LineAndArea,
      label: var_core_value_sig0B9E("section.lineAndArea"),
      children: var_core_value_sigCD6E(var_core_value_sigC2F9, {
        defaultValues: Z.lineAndArea,
        lineStyleControl: "segmented"
      })
    }), var_core_value_sig269A(var_core_value_sig9578, var_core_value_sig6806.Legend) && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.Legend,
      label: var_core_value_sig0B9E("common.legend"),
      children: var_core_value_sigCD6E(var_core_value_sigF047, {
        defaultValues: Z.legend
      })
    }), var_core_value_sig269A(var_core_value_sig9578, var_core_value_sig6806.Axes) && var_core_value_sigFD9D(var_core_value_sigA386, {
      children: [var_core_value_sigCD6E(Q, {
        id: var_core_value_sigA7E3.HorizontalAxis,
        label: var_core_value_sig0B9E("common.horizontalAxis"),
        children: var_core_value_sigCD6E(var_core_value_sig5C3B, {
          axis: "x",
          defaultValues: Z.axis,
          NumberFormatField: var_core_value_sig1F51
        })
      }), var_core_value_sigCD6E(Q, {
        id: var_core_value_sigA7E3.VerticalAxis,
        label: var_core_value_sig0B9E("common.verticalAxis"),
        children: var_core_value_sigCD6E(var_core_value_sig5C3B, {
          axis: "y",
          defaultValues: Z.axis,
          NumberFormatField: var_core_value_sig1F51
        })
      }), var_core_value_sigA2D3 && var_core_value_sigCD6E(Q, {
        id: var_core_value_sigA7E3.RightVerticalAxis,
        label: var_core_value_sig0B9E("common.rightVerticalAxis"),
        children: var_core_value_sigCD6E(var_core_value_sig5C3B, {
          axis: "rightY",
          defaultValues: Z.axis,
          NumberFormatField: var_core_value_sig1F51
        })
      }), var_core_value_sigCD6E(Q, {
        id: var_core_value_sigA7E3.GridlinesAndTicks,
        label: var_core_value_sig0B9E("section.gridlinesAndTicks"),
        children: var_core_value_sigCD6E(var_core_value_sig9B3D, {
          defaultValues: Z.axis
        })
      })]
    }), var_core_value_sig269A(var_core_value_sig9578, var_core_value_sig6806.IndicatorLine) && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.IndicatorLine,
      label: var_core_value_sig0B9E("section.indicatorLine"),
      children: var_core_value_sigCD6E(var_core_value_sigD70C, {
        defaultValues: Z.indicatorLine
      })
    }), var_core_value_sig94C1(var_core_value_sig9578) && var_core_value_sigCD6E(Q, {
      id: var_core_value_sigA7E3.Trendline,
      label: var_core_value_sig0B9E("common.trendline"),
      children: var_core_value_sigCD6E(var_core_value_sig034D, {
        defaultValues: Z.trendline
      })
    }), var_core_value_sig2712 && var_core_value_sigCD6E(Q, {
      id: var_core_value_sig2712.id,
      label: var_core_value_sig2712.label,
      children: var_core_value_sigCD6E(var_core_value_sig2637, {})
    })]
  });
}
function Dr(var_core_value_sigC545, var_core_value_sig12A7) {
  let var_core_value_sig6F4E = {
    [var_core_value_sigB93D.Candlestick]: {
      id: var_core_value_sigA7E3.Candlestick,
      localeKey: "bases-dashboard-ui.chart.section.candlestick"
    },
    [var_core_value_sigB93D.Histogram]: {
      id: var_core_value_sigA7E3.Histogram,
      localeKey: "bases-dashboard-ui.chart.section.histogram"
    },
    [var_core_value_sigB93D.Treemap]: {
      id: var_core_value_sigA7E3.Treemap,
      localeKey: "bases-dashboard-ui.chart.section.treemap"
    },
    [var_core_value_sigB93D.Sunburst]: {
      id: var_core_value_sigA7E3.Sunburst,
      localeKey: "bases-dashboard-ui.chart.section.sunburst"
    },
    [var_core_value_sigB93D.Gauge]: {
      id: var_core_value_sigA7E3.Gauge,
      localeKey: "bases-dashboard-ui.chart.section.gauge"
    },
    [var_core_value_sigB93D.Chord]: {
      id: var_core_value_sigA7E3.Chord,
      localeKey: "bases-dashboard-ui.chart.section.chord"
    }
  }[var_core_value_sigC545];
  return var_core_value_sig6F4E ? {
    id: var_core_value_sig6F4E.id,
    label: var_core_value_sig12A7.t(var_core_value_sig6F4E.localeKey)
  } : null;
}
function Or(var_core_value_sigA021) {
  return "bases-dashboard-ui.chart.chartTypes." + var_core_value_sigA021;
}
function kr({
  onChange: var_core_value_sig49D9,
  onEditData: var_core_value_sig320C,
  runtime: var_core_value_sigE7F0,
  sourceChart: var_core_value_sigE837,
  sourceName: var_core_value_sig34F4,
  widget: var_core_value_sigA45D
}) {
  let var_core_value_sig1BC7 = var_core_value_sigB77C(br),
    var_core_value_sig4956 = var_core_value_sigB77C(var_core_value_sig6C8C),
    [var_core_value_sigCC9E, var_core_value_sig444C] = var_core_value_sig90CF(var_core_value_sigA784.Data),
    var_core_value_sigE42E = var_core_value_sigA45D.chart ?? var_core_value_sigE837,
    var_core_value_sigF039 = var_core_value_sig7EAB(() => new var_core_value_sigEE12(var_core_value_sigE7F0.model, {
      commit: var_core_value_sig48CA => {
        var var_core_value_sig50AF;
        let var_core_value_sigA942 = var_core_value_sigE7F0.model,
          var_core_value_sigA621 = var_core_value_sig06AC(var_core_value_sig48CA, {
            series: (var_core_value_sig50AF = var_core_value_sigA942.config) == null ? undefined : var_core_value_sig50AF.series,
            currentChartType: var_core_value_sigA942.chartType,
            currentStyle: var_core_value_sigA942.style,
            currentContext: var_core_value_sigA942.context,
            currentDataAggregation: var_core_value_sigA942.dataAggregation
          });
        var_core_value_sig49D9({
          ...var_core_value_sigA45D,
          chart: wr(var_core_value_sigE42E, var_core_value_sigA621)
        }).catch(() => undefined);
      }
    }), [var_core_value_sigE42E, var_core_value_sig49D9, var_core_value_sigE7F0, var_core_value_sigA45D]),
    var_core_value_sigA321 = var_core_value_sig7EAB(() => var_core_value_sig3A41(var_core_value_sig7B9E.map(var_core_value_sigBBFF => ({
      ...var_core_value_sigBBFF,
      label: var_core_value_sig4956.t(Ar(var_core_value_sigBBFF.labelId))
    }))), [var_core_value_sig4956]),
    var_core_value_sigBF4C = var_core_value_sig5E86 => var_core_value_sig4956.t("bases-dashboard-ui.dashboardInspector." + var_core_value_sig5E86);
  return var_core_value_sigCD6E(var_core_value_sigD4AA, {
    chartUIService: var_core_value_sig1BC7,
    hostAdapter: var_core_value_sigF039,
    children: var_core_value_sigFD9D("div", {
      "data-dashboard-chart-inspector": true,
      className: "univer-flex\x20univer-min-h-0\x20univer-flex-1\x20univer-flex-col",
      children: [var_core_value_sigCD6E(var_core_value_sig4406, {
        ariaLabel: var_core_value_sig4956.t("bases-dashboard-ui.chart.common.editChart"),
        className: "univer-shrink-0 univer-px-3",
        items: [{
          label: var_core_value_sig4956.t("bases-dashboard-ui.chart.common.setup"),
          panelId: "dashboard-chart-setup",
          value: var_core_value_sigA784.Data
        }, {
          label: var_core_value_sig4956.t("bases-dashboard-ui.chart.common.customize"),
          panelId: "dashboard-chart-style",
          value: var_core_value_sigA784.Style
        }],
        value: var_core_value_sigCC9E,
        onChange: var_core_value_sig444C
      }), var_core_value_sigCC9E === var_core_value_sigA784.Data ? var_core_value_sigCD6E(var_core_value_sig5FD0, {
        id: "dashboard-chart-setup",
        label: var_core_value_sig4956.t("bases-dashboard-ui.chart.common.setup"),
        children: var_core_value_sigFD9D("div", {
          className: "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
          children: [var_core_value_sigCD6E(var_core_value_sig89EC, {
            options: var_core_value_sigA321
          }), var_core_value_sigCD6E(var_core_value_sigD6D9, {}), var_core_value_sigCD6E(var_core_value_sigA578, {}), var_core_value_sigCD6E(Tr, {}), var_core_value_sigCD6E(var_core_value_sigD755, {}), var_core_value_sigFD9D("div", {
            children: [var_core_value_sigCD6E(var_core_value_sig2825, {
              title: var_core_value_sigBF4C("dataSource")
            }), var_core_value_sigCD6E(var_core_value_sig04B4, {
              disabled: true,
              value: var_core_value_sig34F4
            }), var_core_value_sigCD6E(var_core_value_sigBDED, {
              className: "univer-mt-2 univer-w-full",
              onClick: var_core_value_sig320C,
              children: var_core_value_sigBF4C("editData")
            })]
          })]
        })
      }) : var_core_value_sigCD6E(var_core_value_sig5FD0, {
        id: "dashboard-chart-style",
        label: var_core_value_sig4956.t("bases-dashboard-ui.chart.common.customize"),
        children: var_core_value_sigCD6E(Er, {})
      })]
    })
  });
}
function Ar(var_core_value_sig3457) {
  return "bases-dashboard-ui.chart.chartTypes." + var_core_value_sig3457;
}
const jr = ["general", "number", "percent", "currency", "grouped", "compact"];
function Mr({
  base: var_core_value_sig4A08,
  onChange: var_core_value_sig1BC4,
  onSelectBackgroundImage: var_core_value_sig9EAB,
  widget: var_core_value_sigA5C3
}) {
  var var_core_value_sig3A1E;
  let var_core_value_sigDC92 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig3515 = var_core_value_sigB77C(var_core_value_sig9A5B),
    var_core_value_sigC2A0 = var_core_value_sig9AFF(() => var_core_value_sig3515.currentTheme$, var_core_value_sig3515.getCurrentTheme(), false, [var_core_value_sig3515]),
    var_core_value_sig7C65 = var_core_value_sig9AFF(() => var_core_value_sig3515.darkMode$, var_core_value_sig3515.darkMode, false, [var_core_value_sig3515]),
    [var_core_value_sig7F05, var_core_value_sig41F3] = var_core_value_sig90CF("data"),
    [var_core_value_sigF455, var_core_value_sig6E78] = var_core_value_sig90CF(false),
    var_core_value_sigB3EE = Zn(var_core_value_sigA5C3),
    var_core_value_sigC50A = var_core_value_sig6998 => var_core_value_sigDC92.t("bases-dashboard-ui.dashboardInspector." + var_core_value_sig6998),
    var_core_value_sig11D0 = var_core_value_sig4A08.getSnapshot().tables[var_core_value_sigA5C3.tableId],
    var_core_value_sigB8ED = var_core_value_sig11D0 == null ? undefined : var_core_value_sig11D0.viewOrder["find"](var_core_value_sigF639 => var_core_value_sig11D0.views[var_core_value_sigF639]),
    var_core_value_sig8EAE = var_core_value_sigB8ED ? var_core_value_sig11D0 == null ? undefined : var_core_value_sig11D0.views[var_core_value_sigB8ED] : undefined,
    var_core_value_sig1CDD = var_core_value_sig11D0 && var_core_value_sig8EAE ? var_core_value_sig44DF(var_core_value_sig4A08.getSnapshot(), var_core_value_sig11D0, var_core_value_sig8EAE).map(var_core_value_sigEAE5 => ({
      ...var_core_value_sigEAE5,
      current: false
    })) : [],
    var_core_value_sig0DB1 = ((var_core_value_sig3A1E = var_core_value_sigA5C3.shapeData["formulaBinding"]) == null ? undefined : var_core_value_sig3A1E.formula) ?? "",
    var_core_value_sig68A2 = var_core_value_sigE94C => var_core_value_sig1BC4(Qn(var_core_value_sigA5C3, var_core_value_sigE94C)).catch(() => undefined),
    var_core_value_sigCC17 = var_core_value_sig6D47 => var_core_value_sig1BC4({
      ...var_core_value_sigA5C3,
      description: var_core_value_sig6D47
    }).catch(() => undefined);
  return var_core_value_sigFD9D("div", {
    "data-dashboard-formula-inspector": true,
    className: "univer-flex univer-min-h-0 univer-flex-1 univer-flex-col",
    children: [var_core_value_sigCD6E(var_core_value_sigDD05, {
      className: "univer-m-3",
      items: [{
        value: "data",
        label: var_core_value_sigC50A("data")
      }, {
        value: "style",
        label: var_core_value_sigC50A("style")
      }],
      value: var_core_value_sig7F05,
      onChange: var_core_value_sig41F3
    }), var_core_value_sigCD6E("div", {
      className: "univer-min-h-0 univer-flex-1 univer-overflow-y-auto univer-p-4",
      children: var_core_value_sig7F05 === "data" ? var_core_value_sigFD9D("div", {
        className: "univer-grid univer-gap-4",
        children: [var_core_value_sigCD6E($, {
          label: var_core_value_sigC50A("description"),
          children: var_core_value_sigCD6E(var_core_value_sig04B4, {
            value: var_core_value_sigA5C3.description ?? var_core_value_sigA5C3.title ?? "",
            onChange: var_core_value_sigCC17,
            onBlur: var_core_value_sigCB82 => var_core_value_sigCC17(var_core_value_sigCB82.target["value"])
          })
        }), var_core_value_sigCD6E($, {
          label: var_core_value_sigC50A("dataSource"),
          children: var_core_value_sigCD6E(var_core_value_sig04B4, {
            disabled: true,
            value: (var_core_value_sig11D0 == null ? undefined : var_core_value_sig11D0.name) ?? var_core_value_sigC50A("sourceUnavailable")
          })
        }), var_core_value_sigFD9D($, {
          label: var_core_value_sigC50A("formula"),
          children: [var_core_value_sigCD6E(var_core_value_sig04B4, {
            disabled: true,
            value: var_core_value_sig1660(var_core_value_sig0DB1, var_core_value_sig1CDD)
          }), var_core_value_sigCD6E(var_core_value_sigBDED, {
            className: "univer-mt-2\x20univer-w-full",
            onClick: () => var_core_value_sig6E78(true),
            children: var_core_value_sigC50A("editFormula")
          })]
        })]
      }) : var_core_value_sigFD9D("div", {
        className: "univer-grid univer-gap-4",
        children: [var_core_value_sigCD6E(var_core_value_sig4002, {
          emptyLabel: var_core_value_sigC50A("backgroundColor"),
          label: var_core_value_sigC50A("backgroundColor"),
          pickerFallbackValue: var_core_value_sig7C65 ? var_core_value_sigC2A0.gray[900] : var_core_value_sigC2A0.gray[0],
          resetLabel: var_core_value_sigC50A("reset"),
          value: var_core_value_sigB3EE.backgroundColor ?? null,
          onChange: var_core_value_sigCF4E => var_core_value_sig68A2({
            backgroundColor: var_core_value_sigCF4E ?? undefined
          })
        }), var_core_value_sigFD9D($, {
          label: var_core_value_sigC50A("backgroundImage"),
          children: [var_core_value_sigFD9D("div", {
            className: "univer-flex\x20univer-gap-2",
            children: [var_core_value_sigFD9D(var_core_value_sigBDED, {
              className: "univer-flex-1",
              onClick: () => {
                var_core_value_sig9EAB().then(var_core_value_sig8889 => {
                  if (var_core_value_sig8889) {
                    var var_core_value_sig32F8;
                    return var_core_value_sig68A2({
                      backgroundImage: {
                        ...var_core_value_sig8889,
                        fit: ((var_core_value_sig32F8 = var_core_value_sigB3EE.backgroundImage) == null ? undefined : var_core_value_sig32F8.fit) ?? "cover"
                      }
                    });
                  }
                }).catch(() => undefined);
              },
              children: [var_core_value_sigCD6E(var_core_value_sigC481, {}), var_core_value_sigB3EE.backgroundImage ? var_core_value_sigC50A("replaceImage") : var_core_value_sigC50A("uploadImage")]
            }), var_core_value_sigB3EE.backgroundImage && var_core_value_sigCD6E(var_core_value_sigBDED, {
              "aria-label": var_core_value_sigC50A("removeImage"),
              title: var_core_value_sigC50A("removeImage"),
              onClick: () => var_core_value_sig68A2({
                backgroundImage: undefined
              }),
              children: var_core_value_sigCD6E(var_core_value_sig6CFC, {})
            })]
          }), var_core_value_sigB3EE.backgroundImage && var_core_value_sigCD6E(var_core_value_sigDD05, {
            className: "univer-mt-2",
            items: [{
              value: "cover",
              label: var_core_value_sigC50A("cover")
            }, {
              value: "contain",
              label: var_core_value_sigC50A("contain")
            }],
            value: var_core_value_sigB3EE.backgroundImage["fit"],
            onChange: var_core_value_sig6CAD => var_core_value_sig68A2({
              backgroundImage: var_core_value_sigB3EE.backgroundImage ? {
                ...var_core_value_sigB3EE.backgroundImage,
                fit: var_core_value_sig6CAD
              } : undefined
            })
          })]
        }), var_core_value_sigCD6E(var_core_value_sig4002, {
          emptyLabel: var_core_value_sigC50A("textColor"),
          label: var_core_value_sigC50A("textColor"),
          pickerFallbackValue: var_core_value_sig7C65 ? var_core_value_sigC2A0.gray[50] : var_core_value_sigC2A0.gray[1000],
          resetLabel: var_core_value_sigC50A("reset"),
          value: var_core_value_sigB3EE.textColor ?? null,
          onChange: var_core_value_sig8CF5 => var_core_value_sig68A2({
            textColor: var_core_value_sig8CF5 ?? undefined
          })
        }), var_core_value_sigCD6E($, {
          label: var_core_value_sigC50A("alignment"),
          children: var_core_value_sigCD6E(var_core_value_sigDD05, {
            items: [{
              value: "left",
              label: var_core_value_sigC50A("left")
            }, {
              value: "center",
              label: var_core_value_sigC50A("center")
            }, {
              value: "right",
              label: var_core_value_sigC50A("right")
            }],
            value: var_core_value_sigB3EE.alignment,
            onChange: var_core_value_sigDDD7 => var_core_value_sig68A2({
              alignment: var_core_value_sigDDD7
            })
          })
        }), var_core_value_sigFD9D($, {
          label: var_core_value_sigC50A("textSize"),
          children: [var_core_value_sigCD6E(var_core_value_sigDD05, {
            items: [{
              value: "auto",
              label: var_core_value_sigC50A("autoFit")
            }, {
              value: "custom",
              label: var_core_value_sigC50A("custom")
            }],
            value: var_core_value_sigB3EE.fontSizeMode,
            onChange: var_core_value_sigB2CE => var_core_value_sig68A2({
              fontSizeMode: var_core_value_sigB2CE
            })
          }), var_core_value_sigB3EE.fontSizeMode === "custom" && var_core_value_sigCD6E(var_core_value_sig1C07, {
            className: "univer-mt-2",
            min: 12,
            max: 120,
            value: var_core_value_sigB3EE.fontSize,
            onChange: var_core_value_sig443C => var_core_value_sig68A2({
              fontSize: var_core_value_sig443C ?? 40,
              fontSizeMode: "custom"
            })
          })]
        }), var_core_value_sigCD6E($, {
          label: var_core_value_sigC50A("numberFormat"),
          children: var_core_value_sigCD6E(var_core_value_sig3932, {
            value: var_core_value_sigB3EE.numberFormat,
            options: [{
              value: "general",
              label: var_core_value_sigC50A("general")
            }, {
              value: "number",
              label: var_core_value_sigC50A("number")
            }, {
              value: "percent",
              label: var_core_value_sigC50A("percent")
            }, {
              value: "currency",
              label: var_core_value_sigC50A("currency")
            }, {
              value: "grouped",
              label: var_core_value_sigC50A("grouped")
            }, {
              value: "compact",
              label: var_core_value_sigC50A("compact")
            }],
            onChange: var_core_value_sig39B1 => {
              let var_core_value_sig210D = jr.find(var_core_value_sig5B67 => var_core_value_sig5B67 === var_core_value_sig39B1);
              var_core_value_sig210D && var_core_value_sig68A2({
                numberFormat: var_core_value_sig210D
              });
            }
          })
        }), var_core_value_sigB3EE.numberFormat === "currency" && var_core_value_sigCD6E($, {
          label: var_core_value_sigC50A("currencyCode"),
          children: var_core_value_sigCD6E(var_core_value_sig04B4, {
            value: var_core_value_sigB3EE.currency,
            onChange: var_core_value_sigB4B4 => var_core_value_sig68A2({
              currency: var_core_value_sigB4B4.slice(0, 3).toUpperCase()
            })
          })
        }), var_core_value_sigB3EE.numberFormat !== "general" && var_core_value_sigCD6E($, {
          label: var_core_value_sigC50A("decimalPlaces"),
          children: var_core_value_sigCD6E(var_core_value_sig1C07, {
            min: 0,
            max: 8,
            value: var_core_value_sigB3EE.decimalPlaces,
            onChange: var_core_value_sigD407 => var_core_value_sig68A2({
              decimalPlaces: var_core_value_sigD407 ?? 0
            })
          })
        })]
      })
    }), var_core_value_sigF455 && var_core_value_sigCD6E(var_core_value_sigEDBA, {
      open: true,
      width: 760,
      footer: null,
      closable: false,
      maskClosable: false,
      children: var_core_value_sigCD6E(var_core_value_sigD5F1, {
        tables: var_core_value_sig1CDD,
        formula: var_core_value_sig1660(var_core_value_sig0DB1, var_core_value_sig1CDD),
        onCancel: () => var_core_value_sig6E78(false),
        onSave: var_core_value_sig63F3 => {
          let var_core_value_sig6A71 = var_core_value_sigA5C3.shapeData["formulaBinding"] ?? {
            formula: ""
          };
          return var_core_value_sig1BC4({
            ...var_core_value_sigA5C3,
            shapeData: {
              ...var_core_value_sigA5C3.shapeData,
              formulaBinding: {
                ...var_core_value_sig6A71,
                formula: var_core_value_sigEE7B(var_core_value_sig63F3, var_core_value_sig1CDD)
              }
            }
          }).then(() => var_core_value_sig6E78(false)).catch(() => undefined);
        }
      })
    })]
  });
}
function $({
  children: var_core_value_sig32AE,
  label: var_core_value_sigC753
}) {
  return var_core_value_sigFD9D("div", {
    role: "group",
    "aria-label": var_core_value_sigC753,
    className: "univer-grid\x20univer-gap-2\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-700\x20dark:!univer-text-gray-200",
    children: [var_core_value_sigCD6E("span", {
      children: var_core_value_sigC753
    }), var_core_value_sig32AE]
  });
}
const Nr = {
  [var_core_value_sig4AFB.IS]: "bases-dashboard-ui.operators.is",
  [var_core_value_sig4AFB.IS_NOT]: "bases-dashboard-ui.operators.isNot",
  [var_core_value_sig4AFB.CONTAINS]: "bases-dashboard-ui.operators.contains",
  [var_core_value_sig4AFB.NOT_CONTAINS]: "bases-dashboard-ui.operators.notContains",
  [var_core_value_sig4AFB.IS_EMPTY]: "bases-dashboard-ui.operators.isEmpty",
  [var_core_value_sig4AFB.IS_NOT_EMPTY]: "bases-dashboard-ui.operators.isNotEmpty",
  [var_core_value_sig4AFB.GREATER_THAN]: "bases-dashboard-ui.operators.greaterThan",
  [var_core_value_sig4AFB.GREATER_THAN_OR_EQUAL]: "bases-dashboard-ui.operators.greaterThanOrEqual",
  [var_core_value_sig4AFB.LESS_THAN]: "bases-dashboard-ui.operators.lessThan",
  [var_core_value_sig4AFB.LESS_THAN_OR_EQUAL]: "bases-dashboard-ui.operators.lessThanOrEqual",
  [var_core_value_sig4AFB.BEFORE]: "bases-dashboard-ui.operators.before",
  [var_core_value_sig4AFB.AFTER]: "bases-dashboard-ui.operators.after"
};
function Pr({
  disabled: var_core_value_sigFFD1,
  fields: var_core_value_sig81AE,
  filter: var_core_value_sigF79F,
  onChange: var_core_value_sig0E54
}) {
  let var_core_value_sig3B17 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig6C4A = (var_core_value_sigF79F == null ? undefined : var_core_value_sigF79F.conditions) ?? [];
  return var_core_value_sig6C4A.length ? var_core_value_sigCD6E("div", {
    className: "univer-grid univer-h-full univer-content-start univer-gap-2 univer-overflow-auto univer-p-3",
    children: var_core_value_sig6C4A.map((var_core_value_sig3BF6, var_core_value_sig38CE) => {
      let var_core_value_sig62B7 = var_core_value_sig81AE.find(var_core_value_sig1758 => var_core_value_sig1758.id === var_core_value_sig3BF6.fieldId);
      return var_core_value_sigFD9D("div", {
        className: "univer-bg-gray-50/80 dark:!univer-bg-gray-800/70 univer-grid univer-gap-2 univer-rounded-xl univer-border univer-border-gray-200 univer-p-3 dark:!univer-border-gray-700",
        children: [var_core_value_sigFD9D("div", {
          className: "univer-flex\x20univer-min-w-0\x20univer-items-center\x20univer-gap-2",
          children: [var_core_value_sigCD6E("span", {
            className: "univer-min-w-0 univer-flex-1 univer-truncate univer-text-sm univer-font-medium",
            children: (var_core_value_sig62B7 == null ? undefined : var_core_value_sig62B7.name) ?? var_core_value_sig3BF6.fieldId
          }), var_core_value_sigCD6E("span", {
            className: "univer-shrink-0\x20univer-rounded-full\x20univer-bg-gray-200\x20univer-px-2\x20univer-py-0.5\x20univer-text-xs\x20univer-text-gray-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-gray-300",
            children: var_core_value_sig3B17.t(Nr[var_core_value_sig3BF6.operator])
          })]
        }), Hr(var_core_value_sig3BF6.operator) && var_core_value_sigCD6E(Ir, {
          disabled: var_core_value_sigFFD1,
          field: var_core_value_sig62B7,
          value: var_core_value_sig3BF6.operand,
          onChange: var_core_value_sig4805 => var_core_value_sig0E54(zr(var_core_value_sigF79F, var_core_value_sig38CE, {
            operand: var_core_value_sig4805
          }))
        })]
      }, Gr(var_core_value_sig6C4A, var_core_value_sig3BF6, var_core_value_sig38CE));
    })
  }) : var_core_value_sigFD9D("div", {
    className: "univer-grid univer-h-full univer-place-content-center univer-gap-2 univer-text-center univer-text-gray-400",
    children: [var_core_value_sigCD6E(var_core_value_sigF42A, {
      className: "univer-mx-auto\x20univer-size-6"
    }), var_core_value_sigCD6E("span", {
      className: "univer-text-sm",
      children: var_core_value_sig3B17.t("bases-dashboard-ui.dashboard.tableFilter")
    })]
  });
}
function Fr({
  fields: var_core_value_sig73D9,
  filter: var_core_value_sigEAF8,
  onChange: var_core_value_sig0455,
  onClear: var_core_value_sig737C
}) {
  let var_core_value_sig5AF5 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig9DE4 = (var_core_value_sigEAF8 == null ? undefined : var_core_value_sigEAF8.conditions) ?? [];
  return var_core_value_sigFD9D("div", {
    "data-dashboard-filter-inspector": true,
    className: "univer-grid univer-min-h-0 univer-flex-1 univer-content-start univer-gap-3 univer-overflow-auto univer-p-4",
    children: [var_core_value_sig9DE4.map((var_core_value_sig37A8, var_core_value_sigA90D) => {
      let var_core_value_sig7A3C = var_core_value_sig73D9.find(var_core_value_sigE67E => var_core_value_sigE67E.id === var_core_value_sig37A8.fieldId) ?? var_core_value_sig73D9[0],
        var_core_value_sig0511 = Br(var_core_value_sig7A3C);
      return var_core_value_sigFD9D("section", {
        className: "univer-grid\x20univer-gap-3\x20univer-rounded-xl\x20univer-border\x20univer-border-gray-200\x20univer-bg-gray-50\x20univer-p-3\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-800",
        children: [var_core_value_sigFD9D("div", {
          className: "univer-grid univer-grid-cols-[minmax(0,1fr)_32px] univer-gap-2",
          children: [var_core_value_sigCD6E(var_core_value_sig3932, {
            value: var_core_value_sig37A8.fieldId,
            options: var_core_value_sig73D9.map(var_core_value_sig2902 => ({
              value: var_core_value_sig2902.id,
              label: var_core_value_sig2902.name
            })),
            onChange: var_core_value_sig9989 => {
              let var_core_value_sig698E = var_core_value_sig73D9.find(var_core_value_sigF602 => var_core_value_sigF602.id === var_core_value_sig9989);
              if (!var_core_value_sig698E) return;
              let var_core_value_sig2809 = Br(var_core_value_sig698E)[0];
              var_core_value_sig0455(zr(var_core_value_sigEAF8, var_core_value_sigA90D, Rr(var_core_value_sig698E, var_core_value_sig2809)));
            }
          }), var_core_value_sigCD6E(var_core_value_sigBDED, {
            type: "button",
            variant: "text",
            "aria-label": var_core_value_sig5AF5.t("bases-dashboard-ui.dashboardInspector.delete"),
            className: "univer-size-8\x20univer-p-0\x20univer-text-red-500",
            onClick: () => var_core_value_sig0455(Lr(var_core_value_sigEAF8, var_core_value_sig9DE4.filter((var_core_value_sig1BBD, var_core_value_sigF704) => var_core_value_sigF704 !== var_core_value_sigA90D))),
            children: var_core_value_sigCD6E(var_core_value_sig7A88, {})
          })]
        }), var_core_value_sigCD6E(var_core_value_sig3932, {
          value: var_core_value_sig37A8.operator,
          options: var_core_value_sig0511.map(var_core_value_sig2DAB => ({
            value: var_core_value_sig2DAB,
            label: var_core_value_sig5AF5.t(Nr[var_core_value_sig2DAB])
          })),
          onChange: var_core_value_sig877E => {
            let var_core_value_sig20C8 = var_core_value_sig0511.find(var_core_value_sig2BCF => var_core_value_sig2BCF === var_core_value_sig877E);
            var_core_value_sig20C8 && var_core_value_sig0455(zr(var_core_value_sigEAF8, var_core_value_sigA90D, {
              operator: var_core_value_sig20C8,
              operand: Vr(var_core_value_sig7A3C)
            }));
          }
        }), Hr(var_core_value_sig37A8.operator) && var_core_value_sigCD6E(Ir, {
          field: var_core_value_sig7A3C,
          value: var_core_value_sig37A8.operand,
          onChange: var_core_value_sigE9A7 => var_core_value_sig0455(zr(var_core_value_sigEAF8, var_core_value_sigA90D, {
            operand: var_core_value_sigE9A7
          }))
        })]
      }, Gr(var_core_value_sig9DE4, var_core_value_sig37A8, var_core_value_sigA90D));
    }), var_core_value_sigFD9D(var_core_value_sigBDED, {
      type: "button",
      variant: "text",
      className: "univer-w-full\x20univer-justify-start\x20univer-text-primary-600",
      disabled: !var_core_value_sig73D9.length,
      onClick: () => {
        let var_core_value_sig1F44 = var_core_value_sig73D9[0];
        if (!var_core_value_sig1F44) return;
        let var_core_value_sigCB04 = Br(var_core_value_sig1F44)[0];
        var_core_value_sig0455(Lr(var_core_value_sigEAF8, [...var_core_value_sig9DE4, Rr(var_core_value_sig1F44, var_core_value_sigCB04)]));
      },
      children: [var_core_value_sigCD6E(var_core_value_sigC481, {}), var_core_value_sig5AF5.t("bases-dashboard-ui.dashboardInspector.newCondition")]
    }), var_core_value_sig9DE4.length > 0 && var_core_value_sigCD6E(var_core_value_sigBDED, {
      type: "button",
      variant: "text",
      className: "univer-w-full",
      onClick: var_core_value_sig737C,
      children: var_core_value_sig5AF5.t("bases-dashboard-ui.dashboardInspector.clear")
    })]
  });
}
function Ir({
  disabled: var_core_value_sig77FA,
  field: var_core_value_sigA4A7,
  onChange: var_core_value_sigA4DF,
  value: var_core_value_sigCC9D
}) {
  let var_core_value_sig90F5 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sigD2BA = var_core_value_sigA4A7 == null ? undefined : var_core_value_sigA4A7.type;
  if (var_core_value_sigD2BA === var_core_value_sig933F.Checkbox) {
    let var_core_value_sig947E = var_core_value_sigCC9D === true || var_core_value_sigCC9D === "true";
    return var_core_value_sigFD9D(var_core_value_sigBDED, {
      type: "button",
      variant: "default",
      disabled: var_core_value_sig77FA,
      className: "univer-w-full univer-justify-start",
      onClick: () => var_core_value_sigA4DF(!var_core_value_sig947E),
      children: [var_core_value_sigCD6E(var_core_value_sig4BFF, {
        checked: var_core_value_sig947E,
        disabled: var_core_value_sig77FA,
        onChange: () => undefined
      }), var_core_value_sig947E ? var_core_value_sig90F5.t("bases-dashboard-ui.dashboardInspector.checked") : var_core_value_sig90F5.t("bases-dashboard-ui.dashboardInspector.unchecked")]
    });
  }
  return Kr(var_core_value_sigD2BA) ? var_core_value_sig77FA ? var_core_value_sigCD6E(var_core_value_sigBDED, {
    type: "button",
    variant: "default",
    className: "univer-w-full",
    disabled: true,
    children: var_core_value_sig9B88(var_core_value_sigCC9D == null || var_core_value_sigCC9D === "" ? undefined : String(var_core_value_sigCC9D)).format("YYYY-MM-DD")
  }) : var_core_value_sigCD6E(var_core_value_sig40E7, {
    className: "univer-w-full",
    value: var_core_value_sig9B88(var_core_value_sigCC9D == null || var_core_value_sigCC9D === "" ? undefined : String(var_core_value_sigCC9D)).toDate(),
    onValueChange: var_core_value_sig4545 => var_core_value_sigA4DF(var_core_value_sig9B88(var_core_value_sig4545).format("YYYY-MM-DD"))
  }) : Jr(var_core_value_sigA4A7) ? var_core_value_sigCD6E(var_core_value_sig93D6, {
    className: "univer-w-full",
    disabled: var_core_value_sig77FA,
    value: Array.isArray(var_core_value_sigCC9D) ? var_core_value_sigCC9D.map(String) : [],
    options: Ur(var_core_value_sigA4A7),
    onChange: var_core_value_sigA4DF
  }) : var_core_value_sigD2BA === var_core_value_sig933F.SingleSelect || var_core_value_sigD2BA === var_core_value_sig933F.Group || var_core_value_sigD2BA === var_core_value_sig933F.Person ? var_core_value_sigCD6E(var_core_value_sig3932, {
    className: "univer-w-full",
    disabled: var_core_value_sig77FA,
    value: String(var_core_value_sigCC9D ?? ""),
    options: [{
      value: "",
      label: var_core_value_sig90F5.t("bases-dashboard-ui.dashboardInspector.selectOption")
    }, ...Ur(var_core_value_sigA4A7)],
    onChange: var_core_value_sigA4DF
  }) : qr(var_core_value_sigD2BA) ? var_core_value_sigCD6E(var_core_value_sig1C07, {
    className: "univer-w-full",
    allowEmpty: true,
    disabled: var_core_value_sig77FA,
    value: Number.isFinite(Number(var_core_value_sigCC9D)) ? Number(var_core_value_sigCC9D) : null,
    onChange: var_core_value_sigF39A => var_core_value_sigA4DF(var_core_value_sigF39A ?? "")
  }) : var_core_value_sigCD6E(var_core_value_sig04B4, {
    disabled: var_core_value_sig77FA,
    value: String(var_core_value_sigCC9D ?? ""),
    placeholder: var_core_value_sig90F5.t("bases-dashboard-ui.dashboardInspector.enterValue"),
    onChange: var_core_value_sigA4DF
  });
}
function Lr(var_core_value_sigCD3A, var_core_value_sig519D) {
  return {
    conjunction: (var_core_value_sigCD3A == null ? undefined : var_core_value_sigCD3A.conjunction) ?? var_core_value_sig29DE.AND,
    conditions: var_core_value_sig519D
  };
}
function Rr(var_core_value_sigC7E7, var_core_value_sig6E1C) {
  return Hr(var_core_value_sig6E1C) ? {
    fieldId: var_core_value_sigC7E7.id,
    operator: var_core_value_sig6E1C,
    operand: Vr(var_core_value_sigC7E7)
  } : {
    fieldId: var_core_value_sigC7E7.id,
    operator: var_core_value_sig6E1C
  };
}
function zr(var_core_value_sigFABC, var_core_value_sig413D, var_core_value_sig5BCE) {
  return Lr(var_core_value_sigFABC, ((var_core_value_sigFABC == null ? undefined : var_core_value_sigFABC.conditions) ?? []).map((var_core_value_sigF79C, var_core_value_sig2E54) => var_core_value_sig2E54 === var_core_value_sig413D ? {
    ...var_core_value_sigF79C,
    ...var_core_value_sig5BCE
  } : var_core_value_sigF79C));
}
function Br(var_core_value_sig8EF0) {
  let var_core_value_sig78AC = [var_core_value_sig4AFB.IS_EMPTY, var_core_value_sig4AFB.IS_NOT_EMPTY];
  switch (var_core_value_sig8EF0 == null ? undefined : var_core_value_sig8EF0.type) {
    case var_core_value_sig933F.Number:
    case var_core_value_sig933F.Currency:
    case var_core_value_sig933F.Progress:
    case var_core_value_sig933F.Rating:
      return [var_core_value_sig4AFB.IS, var_core_value_sig4AFB.IS_NOT, var_core_value_sig4AFB.GREATER_THAN, var_core_value_sig4AFB.LESS_THAN, ...var_core_value_sig78AC];
    case var_core_value_sig933F.Date:
    case var_core_value_sig933F.CreatedAt:
    case var_core_value_sig933F.UpdatedAt:
      return [var_core_value_sig4AFB.IS, var_core_value_sig4AFB.IS_NOT, var_core_value_sig4AFB.BEFORE, var_core_value_sig4AFB.AFTER, ...var_core_value_sig78AC];
    case var_core_value_sig933F.Checkbox:
      return [var_core_value_sig4AFB.IS, var_core_value_sig4AFB.IS_NOT];
    default:
      return [var_core_value_sig4AFB.IS, var_core_value_sig4AFB.IS_NOT, var_core_value_sig4AFB.CONTAINS, var_core_value_sig4AFB.NOT_CONTAINS, ...var_core_value_sig78AC];
  }
}
function Vr(var_core_value_sig4CEF) {
  return var_core_value_sig4CEF ? var_core_value_sig4CEF.type === var_core_value_sig933F.Checkbox ? false : Kr(var_core_value_sig4CEF.type) ? var_core_value_sig9B88().format("YYYY-MM-DD") : Jr(var_core_value_sig4CEF) ? [] : "" : "";
}
function Hr(var_core_value_sigD57D) {
  return var_core_value_sigD57D !== var_core_value_sig4AFB.IS_EMPTY && var_core_value_sigD57D !== var_core_value_sig4AFB.IS_NOT_EMPTY;
}
function Ur(var_core_value_sig2CC7) {
  var var_core_value_sig4784;
  return (Array.isArray(var_core_value_sig2CC7 == null || (var_core_value_sig4784 = var_core_value_sig2CC7.config) == null ? undefined : var_core_value_sig4784.options) ? var_core_value_sig2CC7.config["options"] : []).map((var_core_value_sig7658, var_core_value_sigDCF5) => {
    if (typeof var_core_value_sig7658 == "string") return {
      label: var_core_value_sig7658,
      value: var_core_value_sig7658
    };
    if (!Wr(var_core_value_sig7658)) return {
      label: String(var_core_value_sigDCF5 + 1),
      value: String(var_core_value_sigDCF5 + 1)
    };
    let var_core_value_sigC786 = var_core_value_sig7658,
      var_core_value_sigC0D9 = String(var_core_value_sigC786.name ?? var_core_value_sigC786.id ?? var_core_value_sigDCF5 + 1),
      var_core_value_sigF051 = String(var_core_value_sigC786.id ?? var_core_value_sigC0D9);
    return {
      label: var_core_value_sigC0D9,
      value: /^opt-\d+$/["test"](var_core_value_sigF051) ? var_core_value_sigC0D9 : var_core_value_sigF051
    };
  });
}
function Wr(var_core_value_sigC39E) {
  return typeof var_core_value_sigC39E == "object" && !!var_core_value_sigC39E;
}
function Gr(var_core_value_sig16C7, var_core_value_sig7481, var_core_value_sig08A3) {
  let var_core_value_sig77D8 = JSON.stringify(var_core_value_sig7481);
  return var_core_value_sig77D8 + "-" + var_core_value_sig16C7.slice(0, var_core_value_sig08A3).filter(var_core_value_sig5825 => JSON.stringify(var_core_value_sig5825) === var_core_value_sig77D8).length;
}
function Kr(var_core_value_sig78A3) {
  return var_core_value_sig78A3 === var_core_value_sig933F.Date || var_core_value_sig78A3 === var_core_value_sig933F.CreatedAt || var_core_value_sig78A3 === var_core_value_sig933F.UpdatedAt;
}
function qr(var_core_value_sig649B) {
  return var_core_value_sig649B === var_core_value_sig933F.Number || var_core_value_sig649B === var_core_value_sig933F.Currency || var_core_value_sig649B === var_core_value_sig933F.Progress || var_core_value_sig649B === var_core_value_sig933F.Rating;
}
function Jr(var_core_value_sig6256) {
  var var_core_value_sigE7A6;
  return (var_core_value_sig6256 == null ? undefined : var_core_value_sig6256.type) === var_core_value_sig933F.MultiSelect || (var_core_value_sig6256 == null ? undefined : var_core_value_sig6256.type) === var_core_value_sig933F.Group || (var_core_value_sig6256 == null ? undefined : var_core_value_sig6256.type) === var_core_value_sig933F.Person && ((var_core_value_sigE7A6 = var_core_value_sig6256.config) == null ? undefined : var_core_value_sigE7A6.allowMultiple) === true;
}
function Yr({
  base: var_core_value_sigB505,
  chartRuntime: var_core_value_sig7428,
  onChange: var_core_value_sig1DCE,
  onClose: var_core_value_sig0567,
  onSelectBackgroundImage: var_core_value_sigA7F3,
  onSelectImage: var_core_value_sigEACD,
  unitId: var_core_value_sig901E,
  widget: var_core_value_sigF7BB
}) {
  let var_core_value_sigFA38 = var_core_value_sigB77C(var_core_value_sigCCE5),
    var_core_value_sig102B = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sigA7DB = var_core_value_sigB505.getSnapshot(),
    var_core_value_sig5EEE = "tableId" in var_core_value_sigF7BB ? var_core_value_sigA7DB.tables[var_core_value_sigF7BB.tableId] : undefined,
    var_core_value_sig65B4 = var_core_value_sigF7BB.type === var_core_value_sig75FC.PivotChart ? var_core_value_sig5EEE == null ? undefined : var_core_value_sig5EEE.views[var_core_value_sigF7BB.pivotViewId] : undefined,
    var_core_value_sigF98E = var_core_value_sig102B.t(ni(var_core_value_sigF7BB)),
    var_core_value_sigA470 = var_core_value_sig4EB7 => var_core_value_sig102B.t("bases-dashboard-ui.dashboardInspector." + var_core_value_sig4EB7);
  return var_core_value_sigFD9D("aside", {
    "data-dashboard-inspector": true,
    className: "univer-flex\x20univer-h-full\x20univer-w-[380px]\x20univer-shrink-0\x20univer-flex-col\x20univer-border-l\x20univer-border-gray-200\x20univer-bg-gray-0\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
    children: [var_core_value_sigFD9D("header", {
      className: "univer-flex\x20univer-h-12\x20univer-shrink-0\x20univer-items-center\x20univer-border-b\x20univer-border-gray-200\x20univer-px-4\x20dark:!univer-border-gray-700",
      children: [var_core_value_sigCD6E("h3", {
        className: "univer-m-0 univer-min-w-0 univer-flex-1 univer-truncate univer-text-base univer-font-semibold",
        children: var_core_value_sigF98E
      }), var_core_value_sigCD6E(var_core_value_sigBDED, {
        type: "button",
        size: "small",
        variant: "text",
        "aria-label": var_core_value_sigA470("close"),
        onClick: var_core_value_sig0567,
        children: var_core_value_sigCD6E(var_core_value_sig7A88, {})
      })]
    }), var_core_value_sigF7BB.type === var_core_value_sig75FC.PivotChart && (ti(var_core_value_sig65B4) && var_core_value_sig7428 ? var_core_value_sigCD6E(kr, {
      runtime: var_core_value_sig7428,
      sourceChart: var_core_value_sig65B4.config["chart"],
      sourceName: ((var_core_value_sig5EEE == null ? undefined : var_core_value_sig5EEE.name) ?? "") + " / " + var_core_value_sig65B4.name,
      widget: var_core_value_sigF7BB,
      onChange: var_core_value_sig1DCE,
      onEditData: () => {
        var_core_value_sigFA38.executeCommand(var_core_value_sig2407.id, {
          unitId: var_core_value_sig901E,
          tableId: var_core_value_sigF7BB.tableId,
          viewId: var_core_value_sigF7BB.pivotViewId
        }).catch(() => undefined);
      }
    }) : var_core_value_sigCD6E($r, {
      message: ti(var_core_value_sig65B4) ? var_core_value_sigA470("loading") : var_core_value_sigA470("sourceUnavailable")
    })), var_core_value_sigF7BB.type === var_core_value_sig75FC.FormulaShape && var_core_value_sigCD6E(Mr, {
      base: var_core_value_sigB505,
      widget: var_core_value_sigF7BB,
      onChange: var_core_value_sig1DCE,
      onSelectBackgroundImage: var_core_value_sigA7F3
    }), var_core_value_sigF7BB.type === var_core_value_sig75FC.TableFilter && var_core_value_sigCD6E(Zr, {
      base: var_core_value_sigB505,
      onChange: var_core_value_sig1DCE,
      widget: var_core_value_sigF7BB
    }), var_core_value_sigF7BB.type === var_core_value_sig75FC.Text && var_core_value_sigCD6E(Qr, {
      label: var_core_value_sigA470,
      onChange: var_core_value_sig1DCE,
      widget: var_core_value_sigF7BB
    }), var_core_value_sigF7BB.type === var_core_value_sig75FC.Image && var_core_value_sigCD6E(Xr, {
      label: var_core_value_sigA470,
      onChange: var_core_value_sig1DCE,
      onSelectImage: var_core_value_sigEACD,
      widget: var_core_value_sigF7BB
    })]
  });
}
function Xr({
  label: var_core_value_sig19A1,
  onChange: var_core_value_sig81F7,
  onSelectImage: var_core_value_sigBE51,
  widget: var_core_value_sigAAD1
}) {
  return var_core_value_sigFD9D("div", {
    className: "univer-grid univer-gap-4 univer-p-4",
    children: [var_core_value_sigFD9D(var_core_value_sigBDED, {
      className: "univer-w-full",
      onClick: () => var_core_value_sigBE51().then(var_core_value_sigBECE => var_core_value_sigBECE && var_core_value_sig81F7({
        ...var_core_value_sigAAD1,
        source: var_core_value_sigBECE.source,
        sourceType: var_core_value_sigBECE.sourceType,
        alt: var_core_value_sigBECE.name
      })).catch(() => undefined),
      children: [var_core_value_sigCD6E(var_core_value_sigC481, {}), var_core_value_sig19A1("replaceImage")]
    }), var_core_value_sigFD9D("label", {
      className: "univer-grid univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
      children: [var_core_value_sigCD6E("span", {
        children: var_core_value_sig19A1("backgroundImage")
      }), var_core_value_sigCD6E(var_core_value_sigDD05, {
        items: [{
          value: "cover",
          label: var_core_value_sig19A1("cover")
        }, {
          value: "repeat",
          label: var_core_value_sig19A1("repeat")
        }, {
          value: "original",
          label: var_core_value_sig19A1("originalSize")
        }],
        value: var_core_value_sigAAD1.displayMode ?? "cover",
        onChange: var_core_value_sig73AF => var_core_value_sig81F7({
          ...var_core_value_sigAAD1,
          displayMode: var_core_value_sig73AF
        }).catch(() => undefined)
      })]
    })]
  });
}
function Zr({
  base: var_core_value_sigBC1A,
  onChange: var_core_value_sig3F3A,
  widget: var_core_value_sigA984
}) {
  let var_core_value_sigA504 = var_core_value_sigBC1A.getSnapshot().tables[var_core_value_sigA984.tableId],
    var_core_value_sig05FF = var_core_value_sigA504 == null ? undefined : var_core_value_sigA504.viewOrder["find"](var_core_value_sig548A => var_core_value_sigA504.views[var_core_value_sig548A]),
    var_core_value_sigFBF0 = var_core_value_sig05FF ? var_core_value_sigA504 == null ? undefined : var_core_value_sigA504.views[var_core_value_sig05FF] : undefined;
  return var_core_value_sigCD6E(Fr, {
    fields: var_core_value_sigA504 && var_core_value_sigFBF0 ? var_core_value_sig7E48(var_core_value_sigA504, var_core_value_sigFBF0) : [],
    filter: var_core_value_sigA984.filter,
    onChange: var_core_value_sigE026 => var_core_value_sig3F3A({
      ...var_core_value_sigA984,
      filter: var_core_value_sigE026
    }).catch(() => undefined),
    onClear: () => var_core_value_sig3F3A({
      ...var_core_value_sigA984,
      filter: null
    }).catch(() => undefined)
  });
}
function Qr({
  label: var_core_value_sig2F95,
  onChange: var_core_value_sigF0E1,
  widget: var_core_value_sig2D8D
}) {
  let var_core_value_sigE5A6 = var_core_value_sigB77C(var_core_value_sig9A5B),
    var_core_value_sigF449 = var_core_value_sig9AFF(() => var_core_value_sigE5A6.currentTheme$, var_core_value_sigE5A6.getCurrentTheme(), false, [var_core_value_sigE5A6]),
    var_core_value_sig38C5 = fr(var_core_value_sig2D8D),
    var_core_value_sigC87D = var_core_value_sig339E => var_core_value_sigF0E1({
      ...var_core_value_sig2D8D,
      appearance: {
        ...var_core_value_sig38C5,
        ...var_core_value_sig339E
      }
    }).catch(() => undefined);
  return var_core_value_sigFD9D("div", {
    className: "univer-grid univer-gap-4 univer-overflow-y-auto univer-p-4",
    children: [var_core_value_sigCD6E(var_core_value_sig48B2, {
      defaultValue: pr(var_core_value_sig2D8D.document),
      rows: 8,
      onBlur: var_core_value_sig7550 => var_core_value_sigF0E1({
        ...var_core_value_sig2D8D,
        document: mr(var_core_value_sig2D8D.document, var_core_value_sig7550.target["value"])
      }).catch(() => undefined)
    }), var_core_value_sigCD6E(var_core_value_sig4002, {
      emptyLabel: var_core_value_sig2F95("backgroundColor"),
      label: var_core_value_sig2F95("backgroundColor"),
      pickerFallbackValue: var_core_value_sigF449.gray[0],
      resetLabel: var_core_value_sig2F95("reset"),
      value: var_core_value_sig38C5.backgroundColor ?? null,
      onChange: var_core_value_sig2983 => var_core_value_sigC87D({
        backgroundColor: var_core_value_sig2983 ?? undefined
      })
    }), var_core_value_sigCD6E(var_core_value_sig4002, {
      emptyLabel: var_core_value_sig2F95("textColor"),
      label: var_core_value_sig2F95("textColor"),
      pickerFallbackValue: var_core_value_sigF449.gray[1000],
      resetLabel: var_core_value_sig2F95("reset"),
      value: var_core_value_sig38C5.textColor ?? null,
      onChange: var_core_value_sigE1B0 => var_core_value_sigC87D({
        textColor: var_core_value_sigE1B0 ?? undefined
      })
    }), var_core_value_sigCD6E(ei, {
      label: var_core_value_sig2F95("alignment"),
      children: var_core_value_sigCD6E(var_core_value_sigDD05, {
        items: [{
          value: "left",
          label: var_core_value_sig2F95("left")
        }, {
          value: "center",
          label: var_core_value_sig2F95("center")
        }, {
          value: "right",
          label: var_core_value_sig2F95("right")
        }],
        value: var_core_value_sig38C5.alignment,
        onChange: var_core_value_sigD4FF => var_core_value_sigC87D({
          alignment: var_core_value_sigD4FF
        })
      })
    }), var_core_value_sigFD9D(ei, {
      label: var_core_value_sig2F95("textSize"),
      children: [var_core_value_sigCD6E(var_core_value_sigDD05, {
        items: [{
          value: "auto",
          label: var_core_value_sig2F95("autoFit")
        }, {
          value: "custom",
          label: var_core_value_sig2F95("custom")
        }],
        value: var_core_value_sig38C5.fontSizeMode,
        onChange: var_core_value_sig1E5B => var_core_value_sigC87D({
          fontSizeMode: var_core_value_sig1E5B
        })
      }), var_core_value_sig38C5.fontSizeMode === "custom" && var_core_value_sigCD6E(var_core_value_sig1C07, {
        className: "univer-mt-2",
        min: 10,
        max: 120,
        value: var_core_value_sig38C5.fontSize,
        onChange: var_core_value_sigB680 => var_core_value_sigC87D({
          fontSize: var_core_value_sigB680 ?? 18,
          fontSizeMode: "custom"
        })
      })]
    })]
  });
}
function $r({
  message: var_core_value_sigCCDC
}) {
  return var_core_value_sigCD6E("div", {
    className: "univer-grid univer-min-h-40 univer-place-items-center univer-p-4 univer-text-sm univer-text-gray-500",
    children: var_core_value_sigCCDC
  });
}
function ei({
  children: var_core_value_sigC310,
  label: var_core_value_sigA4E8
}) {
  return var_core_value_sigFD9D("div", {
    role: "group",
    "aria-label": var_core_value_sigA4E8,
    className: "univer-grid univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
    children: [var_core_value_sigCD6E("span", {
      children: var_core_value_sigA4E8
    }), var_core_value_sigC310]
  });
}
function ti(var_core_value_sigDC07) {
  return (var_core_value_sigDC07 == null ? undefined : var_core_value_sigDC07.type) === var_core_value_sigC7EA.Pivot && typeof var_core_value_sigDC07.config == "object" && var_core_value_sigDC07.config !== null && "pivot" in var_core_value_sigDC07.config && "chart" in var_core_value_sigDC07.config;
}
function ni(var_core_value_sig3474) {
  switch (var_core_value_sig3474.type) {
    case var_core_value_sig75FC.PivotChart:
      return "bases-dashboard-ui.dashboard.pivotChart";
    case var_core_value_sig75FC.TableFilter:
      return "bases-dashboard-ui.dashboard.tableFilter";
    case var_core_value_sig75FC.Text:
      return "bases-dashboard-ui.dashboard.text";
    case var_core_value_sig75FC.Image:
      return "bases-dashboard-ui.dashboard.image";
    case var_core_value_sig75FC.FormulaShape:
      return "bases-dashboard-ui.dashboard.formulaShape";
  }
}
let ri = class {
  constructor(var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig2C39) {
    this._localeService = var_core_value_sig1F64, this._chartThemeService = var_core_value_sigDD1C, this._renderModelManager = var_core_value_sig2C39;
  }
  createDomChartInstance() {
    return this._renderModelManager["createChartInstance"](var_core_value_sigA1AC.Dom, this._createContext());
  }
  createRenderInput(var_core_value_sigB7D1) {
    let var_core_value_sig64F0 = var_core_value_sigB7D1.model["config"];
    if (!var_core_value_sig64F0) throw Error("Base\x20dashboard\x20chart\x20" + var_core_value_sigB7D1.chartId + " has no render config.");
    let var_core_value_sig85B1 = this._localeService["getDirection"]();
    return {
      config: var_core_value_sig64F0,
      style: var_core_value_sigABAC({
        ...var_core_value_sigB7D1.model["style"],
        runtime: var_core_value_sigB7D1.model["getRuntimeContext"](var_core_value_sig85B1),
        direction: var_core_value_sig85B1
      }, var_core_value_sig64F0.type)
    };
  }
  _createContext() {
    return {
      resolveHostStyle: ({
        style: var_core_value_sig1B22
      }) => var_core_value_sigFAE6({
        style: var_core_value_sig1B22,
        getRenderColor: var_core_value_sig0D69 => this._chartThemeService["getRenderColor"](var_core_value_sig0D69)
      }),
      resolveRenderBackgroundColor: ({
        hostStyle: var_core_value_sig7F72
      }) => var_core_value_sig7F72.fill
    };
  }
};
ri = yr([X(0, var_core_value_sigB30D(var_core_value_sig6C8C)), X(1, var_core_value_sigB30D(var_core_value_sig6180)), X(2, var_core_value_sig69B6)], ri);
function ii(var_core_value_sig4E80, var_core_value_sigD23B) {
  var var_core_value_sig2B2A;
  var_core_value_sig4E80.style["backgroundColor"] = var_core_value_sigD23B.fill ?? "transparent", var_core_value_sig4E80.style["border"] = (var_core_value_sig2B2A = var_core_value_sigD23B.border) != null && var_core_value_sig2B2A.color && var_core_value_sigD23B.border["width"] ? var_core_value_sigD23B.border["width"] + "px solid " + var_core_value_sigD23B.border["color"] : "", var_core_value_sig4E80.style["borderRadius"] = var_core_value_sigD23B.radius ? var_core_value_sigD23B.radius + "px" : "", var_core_value_sig4E80.style["overflow"] = "hidden", var_core_value_sig4E80.style["boxSizing"] = "border-box";
}
var ai = class extends var_core_value_sig9CF7 {
  constructor(var_core_value_sig3141, var_core_value_sig2162) {
    super(), this.chartId = var_core_value_sig3141, this._element = var_core_value_sig2162, vr(this, "mode", var_core_value_sigA1AC.Dom);
  }
  getRect() {
    return {
      width: Math.max(1, this._element["clientWidth"]),
      height: Math.max(1, this._element["clientHeight"])
    };
  }
  setStyle(var_core_value_sig2EAD) {
    ii(this._element, var_core_value_sig2EAD);
  }
  async ensureMount() {
    return this._element;
  }
  checkMounted() {
    return this._element["isConnected"];
  }
  syncLayout() {}
  markReady() {}
  markNotReady() {}
};
function oi({
  isRowDirection: var_core_value_sig0B5C,
  runtime: var_core_value_sig7D42
}) {
  let var_core_value_sig8FDE = var_core_value_sig56B9(null),
    var_core_value_sig78E6 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig541F = var_core_value_sigB77C(var_core_value_sig4E30),
    var_core_value_sig417B = var_core_value_sigB77C(ri),
    var_core_value_sigAA90 = var_core_value_sigB77C(var_core_value_sig9A5B);
  return var_core_value_sig5EE4(() => {
    let var_core_value_sig6774 = var_core_value_sig8FDE.current;
    if (!var_core_value_sig6774) return;
    var_core_value_sig6774.replaceChildren();
    let {
        chartId: var_core_value_sig340D,
        model: var_core_value_sig82D4
      } = var_core_value_sig7D42,
      var_core_value_sigBDE4 = var_core_value_sig82D4.dataSource,
      var_core_value_sig7DF1 = new ai(var_core_value_sig340D, var_core_value_sig6774),
      var_core_value_sigDC86 = var_core_value_sig417B.createDomChartInstance(),
      var_core_value_sig0B0C = false,
      var_core_value_sigA39E = null,
      var_core_value_sigBBEE = null,
      var_core_value_sig011D = null,
      var_core_value_sig6167 = null,
      var_core_value_sig65A1 = false,
      var_core_value_sig7F19 = false,
      var_core_value_sig7827 = Promise.resolve();
    var_core_value_sigDC86.bind(var_core_value_sig7DF1);
    let var_core_value_sig652C = () => {
        var var_core_value_sig7B2A, var_core_value_sig06CD, var_core_value_sigA5F1, var_core_value_sig97A2;
        if (document.visibilityState === "hidden" || (var_core_value_sig7B2A = (var_core_value_sig06CD = window).matchMedia) != null && (var_core_value_sig7B2A = var_core_value_sig7B2A.call(var_core_value_sig06CD, "(prefers-reduced-motion:\x20reduce)")) != null && var_core_value_sig7B2A.matches || (var_core_value_sigA5F1 = (var_core_value_sig97A2 = window).matchMedia) != null && (var_core_value_sigA5F1 = var_core_value_sigA5F1.call(var_core_value_sig97A2, "print")) != null && var_core_value_sigA5F1.matches || !var_core_value_sig6774.isConnected) return false;
        let var_core_value_sig07E9 = var_core_value_sig6774.getBoundingClientRect();
        return var_core_value_sig07E9.width > 0 && var_core_value_sig07E9.height > 0 && var_core_value_sig07E9.right > 0 && var_core_value_sig07E9.bottom > 0 && var_core_value_sig07E9.left < window.innerWidth && var_core_value_sig07E9.top < window.innerHeight;
      },
      var_core_value_sig7E32 = () => {
        var_core_value_sigBBEE !== null && clearTimeout(var_core_value_sigBBEE), var_core_value_sig6774.dataset["baseChartDataAnimation"] = "true", var_core_value_sig6774.dataset["baseChartDataAnimationDuration"] = String(var_core_value_sigA2A4), var_core_value_sigBBEE = setTimeout(() => {
          var_core_value_sigBBEE = null, delete var_core_value_sig6774.dataset["baseChartDataAnimation"], delete var_core_value_sig6774.dataset["baseChartDataAnimationDuration"];
        }, var_core_value_sigA2A4);
      },
      var_core_value_sig4C07 = var_core_value_sig4F59 => {
        if (var_core_value_sigA39E !== null && (clearTimeout(var_core_value_sigA39E), var_core_value_sigA39E = null), !var_core_value_sig82D4.config) {
          var_core_value_sig7F19 ||= var_core_value_sig4F59;
          return;
        }
        var_core_value_sig6774.dataset["chartType"] = String(var_core_value_sig82D4.chartType), var_core_value_sig6774.dataset["chartRowDirection"] = String(var_core_value_sig0B5C);
        let var_core_value_sigF564 = var_core_value_sig417B.createRenderInput(var_core_value_sig7D42),
          var_core_value_sig8CFA = {
            chartId: var_core_value_sig340D,
            config: var_core_value_sigF564.config,
            style: var_core_value_sigF564.style
          };
        var_core_value_sig7827 = var_core_value_sig7827.then(async () => {
          var_core_value_sig0B0C || (var_core_value_sig6774.dataset["renderRevision"] = String(Number(var_core_value_sig6774.dataset["renderRevision"] ?? 0) + 1), var_core_value_sig4F59 && var_core_value_sig011D && var_core_value_sigDC86.renderTransition && var_core_value_sig652C() ? (await var_core_value_sigDC86.renderTransition(var_core_value_sig011D, var_core_value_sig8CFA, {
            duration: var_core_value_sigA2A4
          }), var_core_value_sig7E32()) : await var_core_value_sigDC86.render(var_core_value_sig8CFA), var_core_value_sig011D = var_core_value_sig8CFA);
        }).catch(var_core_value_sig480E => var_core_value_sig541F.error("[BasePivotChart] Failed to render chart.", var_core_value_sig480E));
      },
      var_core_value_sig79AB = (var_core_value_sig2E11 = false) => {
        var_core_value_sig7F19 ||= var_core_value_sig2E11, !var_core_value_sig65A1 && (var_core_value_sig65A1 = true, queueMicrotask(() => {
          var_core_value_sig65A1 = false;
          let var_core_value_sig26DB = var_core_value_sig7F19;
          var_core_value_sig7F19 = false, var_core_value_sig4C07(var_core_value_sig26DB);
        }));
      },
      var_core_value_sig8E74 = [var_core_value_sigBDE4.data$["subscribe"](var_core_value_sig5B69 => {
        let var_core_value_sigB098 = JSON.stringify(var_core_value_sig5B69);
        var_core_value_sig6167 != null && var_core_value_sig6167 !== var_core_value_sigB098 && var_core_value_sig79AB(true), var_core_value_sig6167 = var_core_value_sigB098;
      }), var_core_value_sig82D4.config$["subscribe"](var_core_value_sigCE71 => {
        var_core_value_sigCE71 && var_core_value_sig79AB();
      }), var_core_value_sig82D4.style$["subscribe"](() => var_core_value_sig79AB()), var_core_value_sig78E6.direction$["subscribe"](() => var_core_value_sig79AB()), var_core_value_sig6F52([var_core_value_sigAA90.currentTheme$, var_core_value_sigAA90.darkMode$]).pipe(var_core_value_sigC3D3(1)).subscribe(() => var_core_value_sig79AB())],
      var_core_value_sig104C = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => {
        var_core_value_sig0B0C || (var_core_value_sig7DF1.syncLayout(), var_core_value_sigA39E !== null && clearTimeout(var_core_value_sigA39E), var_core_value_sigA39E = setTimeout(() => var_core_value_sig79AB(), 100));
      });
    return var_core_value_sig104C == null || var_core_value_sig104C.observe(var_core_value_sig6774), () => {
      var_core_value_sig0B0C = true, var_core_value_sigA39E !== null && clearTimeout(var_core_value_sigA39E), var_core_value_sigBBEE !== null && clearTimeout(var_core_value_sigBBEE), delete var_core_value_sig6774.dataset["baseChartDataAnimation"], delete var_core_value_sig6774.dataset["baseChartDataAnimationDuration"], var_core_value_sig104C == null || var_core_value_sig104C.disconnect(), var_core_value_sig8E74.forEach(var_core_value_sigF0F9 => var_core_value_sigF0F9.unsubscribe()), var_core_value_sigDC86.dispose(), var_core_value_sig7DF1.dispose(), var_core_value_sig6774.replaceChildren();
    };
  }, [var_core_value_sig0B5C, var_core_value_sig78E6, var_core_value_sig541F, var_core_value_sig417B, var_core_value_sig7D42, var_core_value_sigAA90]), var_core_value_sigCD6E("div", {
    ref: var_core_value_sig8FDE,
    "data-u-comp": "base-pivot-chart",
    className: "univer-absolute univer-inset-0 univer-overflow-hidden"
  });
}
function si({
  filters: var_core_value_sigE92D,
  onRuntimeChange: var_core_value_sig9940,
  unitId: var_core_value_sig682D,
  widget: var_core_value_sig1435
}) {
  let var_core_value_sig4082 = var_core_value_sigB77C(var_core_value_sig300B),
    var_core_value_sigC049 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sigE5C3 = var_core_value_sigB77C(var_core_value_sig4E30),
    var_core_value_sigCCAA = var_core_value_sigB77C(var_core_value_sig9678),
    [var_core_value_sigF32D, var_core_value_sig9427] = var_core_value_sig90CF(null),
    [var_core_value_sig21F4, var_core_value_sigA345] = var_core_value_sig90CF(false),
    [var_core_value_sigA468, var_core_value_sig1561] = var_core_value_sig90CF(null),
    var_core_value_sigDF14 = var_core_value_sig56B9("base-dashboard-pivot-chart-" + var_core_value_sig992A(8)),
    var_core_value_sig842F = var_core_value_sig4082.getUnit(var_core_value_sig682D, var_core_value_sigE64C.UNIVER_BASE),
    var_core_value_sigC4C0 = var_core_value_sig842F == null ? undefined : var_core_value_sig842F.getSnapshot().tables[var_core_value_sig1435.tableId],
    var_core_value_sig214A = var_core_value_sigC4C0 == null ? undefined : var_core_value_sigC4C0.views[var_core_value_sig1435.pivotViewId],
    var_core_value_sigCCC3 = ci(var_core_value_sig214A);
  if (var_core_value_sig5EE4(() => {
    if (!var_core_value_sigCCC3) return;
    let var_core_value_sig841D = var_core_value_sigDF14.current;
    return var_core_value_sigCCAA.acquireChartRuntime(var_core_value_sig841D, {
      unitId: var_core_value_sig682D,
      tableId: var_core_value_sig1435.tableId,
      viewId: var_core_value_sig1435.pivotViewId,
      filters: []
    }), () => {
      var_core_value_sigCCAA.releaseChartRuntime(var_core_value_sig682D, var_core_value_sig841D), var_core_value_sig9940 == null || var_core_value_sig9940(var_core_value_sig1435.id, null);
    };
  }, [var_core_value_sigCCC3, var_core_value_sig9940, var_core_value_sigCCAA, var_core_value_sig682D, var_core_value_sig1435.id, var_core_value_sig1435.pivotViewId, var_core_value_sig1435.tableId]), var_core_value_sig5EE4(() => {
    if (!ci(var_core_value_sig214A)) return;
    let var_core_value_sig90CB = true,
      var_core_value_sigBDF5 = var_core_value_sig1435.chart ?? var_core_value_sig214A.config["chart"],
      var_core_value_sigACC6 = {
        unitId: var_core_value_sig682D,
        tableId: var_core_value_sig1435.tableId,
        viewId: var_core_value_sig1435.pivotViewId,
        filters: [var_core_value_sig214A.filter ?? null, ...var_core_value_sigE92D]
      };
    return var_core_value_sigCCAA.refreshChartRuntime(var_core_value_sig682D, var_core_value_sigDF14.current, var_core_value_sigACC6, var_core_value_sigBDF5).then(var_core_value_sig21D8 => {
      if (!var_core_value_sig90CB || !var_core_value_sig21D8) return;
      let var_core_value_sig2B65 = var_core_value_sigCCAA.getChartRuntime(var_core_value_sig682D, var_core_value_sigDF14.current) ?? null;
      var_core_value_sig9427(var_core_value_sig21D8), var_core_value_sig1561(var_core_value_sig2B65), var_core_value_sigA345(false), var_core_value_sig9940 == null || var_core_value_sig9940(var_core_value_sig1435.id, var_core_value_sig2B65);
    }).catch(var_core_value_sigD7EA => {
      var_core_value_sigE5C3.error("[DashboardPivotChartWidget] Failed to calculate the pivot result.", var_core_value_sigD7EA), var_core_value_sig90CB && (var_core_value_sig9427(null), var_core_value_sigA345(true));
    }), () => {
      var_core_value_sig90CB = false;
    };
  }, [var_core_value_sigE92D, var_core_value_sigE5C3, var_core_value_sig9940, var_core_value_sigCCAA, var_core_value_sig682D, var_core_value_sig214A, var_core_value_sig1435.chart, var_core_value_sig1435.id, var_core_value_sig1435.pivotViewId, var_core_value_sig1435.tableId]), !ci(var_core_value_sig214A)) return var_core_value_sigCD6E("div", {
    className: "univer-grid univer-h-full univer-place-items-center univer-text-xs univer-text-gray-500",
    children: var_core_value_sigC049.t("bases-dashboard-ui.dashboardInspector.sourceUnavailable")
  });
  let var_core_value_sig986E = var_core_value_sigCCAA.getChartRuntime(var_core_value_sig682D, var_core_value_sigDF14.current) === var_core_value_sigA468 ? var_core_value_sigA468 : null;
  return var_core_value_sigF32D && var_core_value_sig986E ? var_core_value_sigCD6E(oi, {
    isRowDirection: var_core_value_sigB64D((var_core_value_sig1435.chart ?? var_core_value_sig214A.config["chart"]).orient),
    runtime: var_core_value_sig986E
  }) : var_core_value_sigCD6E("div", {
    className: "univer-grid\x20univer-h-full\x20univer-place-items-center\x20univer-text-xs\x20univer-text-gray-500",
    children: var_core_value_sigC049.t(var_core_value_sig21F4 ? "bases-dashboard-ui.pivot.calculationFailed" : "bases-dashboard-ui.pivot.calculating")
  });
}
function ci(var_core_value_sig537C) {
  return (var_core_value_sig537C == null ? undefined : var_core_value_sig537C.type) === var_core_value_sigC7EA.Pivot && typeof var_core_value_sig537C.config == "object" && var_core_value_sig537C.config !== null && "pivot" in var_core_value_sig537C.config && "chart" in var_core_value_sig537C.config;
}
function li({
  widget: var_core_value_sigBBBC
}) {
  let var_core_value_sig5440 = var_core_value_sigB77C(var_core_value_sig9A5B),
    var_core_value_sigE28B = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig0FD9 = var_core_value_sig9AFF(() => var_core_value_sig5440.currentTheme$, var_core_value_sig5440.getCurrentTheme(), false, [var_core_value_sig5440]),
    var_core_value_sig5649 = var_core_value_sig56B9(null),
    var_core_value_sigAF82 = var_core_value_sig56B9(null),
    var_core_value_sig21A2 = fr(var_core_value_sigBBBC),
    var_core_value_sig5C1D = var_core_value_sig21A2.backgroundColor ?? var_core_value_sig0FD9.gray[0],
    var_core_value_sig4CBA = var_core_value_sig21A2.textColor ?? var_core_value_sig0FD9.gray[1000],
    var_core_value_sig8E65 = pr(var_core_value_sigBBBC.document);
  return var_core_value_sig5EE4(() => {
    let var_core_value_sig1614 = var_core_value_sig5649.current,
      var_core_value_sig85C3 = var_core_value_sigAF82.current;
    if (!var_core_value_sig1614 || !var_core_value_sig85C3) return;
    let var_core_value_sigB996 = () => {
      if (var_core_value_sig21A2.fontSizeMode === "custom" || !var_core_value_sig1614.clientWidth || !var_core_value_sig1614.clientHeight) {
        var_core_value_sig85C3.style["fontSize"] = var_core_value_sig21A2.fontSize + "px";
        return;
      }
      let var_core_value_sigB33B = 8,
        var_core_value_sig24B9 = 72,
        var_core_value_sigE627 = var_core_value_sigB33B;
      for (; var_core_value_sigB33B <= var_core_value_sig24B9;) {
        let var_core_value_sig3D7D = Math.floor((var_core_value_sigB33B + var_core_value_sig24B9) / 2);
        var_core_value_sig85C3.style["fontSize"] = var_core_value_sig3D7D + "px", var_core_value_sig85C3.scrollWidth <= var_core_value_sig1614.clientWidth && var_core_value_sig85C3.scrollHeight <= var_core_value_sig1614.clientHeight ? (var_core_value_sigE627 = var_core_value_sig3D7D, var_core_value_sigB33B = var_core_value_sig3D7D + 1) : var_core_value_sig24B9 = var_core_value_sig3D7D - 1;
      }
      var_core_value_sig85C3.style["fontSize"] = var_core_value_sigE627 + "px";
    };
    if (var_core_value_sigB996(), typeof ResizeObserver > "u") return;
    let var_core_value_sig4BBA = new ResizeObserver(var_core_value_sigB996);
    return var_core_value_sig4BBA.observe(var_core_value_sig1614), () => var_core_value_sig4BBA.disconnect();
  }, [var_core_value_sig21A2.fontSize, var_core_value_sig21A2.fontSizeMode, var_core_value_sig8E65]), var_core_value_sigCD6E("div", {
    "data-dashboard-text-widget": var_core_value_sigBBBC.id,
    className: "univer-box-border\x20univer-flex\x20univer-h-full\x20univer-w-full\x20univer-items-center\x20univer-overflow-hidden\x20univer-p-4",
    style: {
      backgroundColor: var_core_value_sig5C1D,
      color: var_core_value_sig4CBA
    },
    children: var_core_value_sigCD6E("div", {
      ref: var_core_value_sig5649,
      "data-dashboard-text-content": true,
      "aria-label": var_core_value_sigE28B.t("bases-dashboard-ui.dashboard.text"),
      className: "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-items-center univer-overflow-hidden",
      children: var_core_value_sigCD6E("div", {
        ref: var_core_value_sigAF82,
        "data-dashboard-text-value": true,
        "data-font-size-mode": var_core_value_sig21A2.fontSizeMode,
        className: "univer-w-full\x20univer-whitespace-pre-wrap\x20univer-break-words\x20univer-leading-normal",
        style: {
          textAlign: var_core_value_sig21A2.alignment
        },
        children: var_core_value_sig8E65
      })
    })
  });
}
function ui({
  onDelete: var_core_value_sig772C,
  onEdit: var_core_value_sigF309
}) {
  let var_core_value_sig44F9 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sigE532 = var_core_value_sig44F9.t("bases-dashboard-ui.dashboard.editWidget"),
    var_core_value_sigF381 = var_core_value_sig44F9.t("bases-dashboard-ui.dashboard.deleteWidget"),
    var_core_value_sigCB92 = var_core_value_sig44F9.t("bases-dashboard-ui.dashboard.widgetActions");
  return var_core_value_sigCD6E(var_core_value_sigE863, {
    items: [{
      type: "item",
      children: var_core_value_sigFD9D("span", {
        className: "univer-flex\x20univer-items-center\x20univer-gap-2",
        children: [var_core_value_sigCD6E(var_core_value_sigEF7C, {
          className: "univer-size-4",
          "aria-hidden": "true"
        }), var_core_value_sigCD6E("span", {
          children: var_core_value_sigE532
        })]
      }),
      onSelect: var_core_value_sigF309
    }, {
      type: "separator"
    }, {
      type: "item",
      variant: "destructive",
      children: var_core_value_sigFD9D("span", {
        className: "univer-flex univer-items-center univer-gap-2",
        children: [var_core_value_sigCD6E(var_core_value_sig6CFC, {
          className: "univer-size-4",
          "aria-hidden": "true"
        }), var_core_value_sigCD6E("span", {
          children: var_core_value_sigF381
        })]
      }),
      onSelect: var_core_value_sig772C
    }],
    children: var_core_value_sigCD6E(var_core_value_sigBDED, {
      type: "button",
      size: "small",
      variant: "text",
      title: var_core_value_sigCB92,
      "aria-label": var_core_value_sigCB92,
      className: "univer-size-6 !univer-border !univer-border-solid !univer-border-gray-200 !univer-bg-gray-0 univer-p-0 !univer-shadow-none hover:!univer-bg-gray-100 dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:hover:!univer-bg-gray-800",
      children: var_core_value_sigCD6E(var_core_value_sig2DAD, {
        className: "univer-size-4",
        "aria-hidden": "true"
      })
    })
  });
}
function di({
  dashboardId: var_core_value_sigC844,
  presentation: var_core_value_sig0477 = false,
  unitId: var_core_value_sig2ED4
}) {
  let var_core_value_sig6FDF = var_core_value_sigB77C(var_core_value_sigCCE5),
    var_core_value_sig27C4 = var_core_value_sigB77C(var_core_value_sig1451),
    var_core_value_sig3E1A = var_core_value_sigB77C(var_core_value_sig884B),
    var_core_value_sig7FB0 = var_core_value_sigB77C(var_core_value_sig300B),
    var_core_value_sig5215 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig5204 = var_core_value_sigB77C(var_core_value_sig5E74),
    var_core_value_sig5E11 = var_core_value_sigB77C(var_core_value_sig8E4A),
    var_core_value_sig4D58 = var_core_value_sig56B9(null),
    [var_core_value_sig2DBD, var_core_value_sig424E] = var_core_value_sig90CF(false),
    [var_core_value_sigF481, var_core_value_sigD7F2] = var_core_value_sig90CF(),
    [var_core_value_sig7CF3, var_core_value_sig9DC6] = var_core_value_sig90CF(false),
    [var_core_value_sig6643, var_core_value_sig4124] = var_core_value_sig90CF(() => new Map()),
    var_core_value_sigBF1C = var_core_value_sig3545((var_core_value_sig6201, var_core_value_sig5151) => {
      var_core_value_sig4124(var_core_value_sigEF3E => {
        let var_core_value_sig273D = new Map(var_core_value_sigEF3E);
        return var_core_value_sig5151 ? var_core_value_sig273D.set(var_core_value_sig6201, var_core_value_sig5151) : var_core_value_sig273D.delete(var_core_value_sig6201), var_core_value_sig273D;
      });
    }, []),
    var_core_value_sigEEEF = var_core_value_sig9AFF(() => var_core_value_sig5204.change$["pipe"](var_core_value_sig09C4(() => var_core_value_sig5204.getDashboard(var_core_value_sig2ED4, var_core_value_sigC844))), var_core_value_sig5204.getDashboard(var_core_value_sig2ED4, var_core_value_sigC844), false, [var_core_value_sigC844, var_core_value_sig5204, var_core_value_sig2ED4]),
    var_core_value_sig9A01 = var_core_value_sig7FB0.getUnit(var_core_value_sig2ED4, var_core_value_sigE64C.UNIVER_BASE),
    var_core_value_sig674F = var_core_value_sig9AFF(() => var_core_value_sig5E11.undoRedoStatus$, {
      undos: 0,
      redos: 0
    }, false, [var_core_value_sig5E11]),
    var_core_value_sigC8F6 = Kn(var_core_value_sig2ED4, var_core_value_sigC844);
  if (var_core_value_sig5EE4(() => {
    var_core_value_sig7FB0.setCurrentUnitForType(var_core_value_sig2ED4), var_core_value_sig7FB0.focusUnit(var_core_value_sig2ED4);
  }, [var_core_value_sig7FB0, var_core_value_sig2ED4]), var_core_value_sig5EE4(() => {
    let var_core_value_sigB542 = var_core_value_sig4D58.current,
      var_core_value_sigBB6C = var_core_value_sigB542 == null ? undefined : var_core_value_sigB542.ownerDocument;
    if (!var_core_value_sigB542 || !var_core_value_sigBB6C) return;
    let var_core_value_sigE2BF = () => var_core_value_sig9DC6(var_core_value_sigBB6C.fullscreenElement === var_core_value_sigBB6C.documentElement),
      var_core_value_sigB8C7 = var_core_value_sig9A0D => {
        var_core_value_sig9A0D.key === "Escape" && var_core_value_sig9DC6(false);
      };
    return var_core_value_sigBB6C.addEventListener("fullscreenchange", var_core_value_sigE2BF), var_core_value_sigBB6C.addEventListener("keydown", var_core_value_sigB8C7), () => {
      var_core_value_sigBB6C.removeEventListener("fullscreenchange", var_core_value_sigE2BF), var_core_value_sigBB6C.removeEventListener("keydown", var_core_value_sigB8C7);
    };
  }, []), !var_core_value_sigEEEF || !var_core_value_sig9A01) return null;
  let var_core_value_sig8A26 = var_core_value_sigA56E => var_core_value_sig6FDF.executeCommand(var_core_value_sig2829.id, {
      unitId: var_core_value_sig2ED4,
      dashboardId: var_core_value_sigC844,
      widget: var_core_value_sigA56E
    }).catch(() => undefined),
    var_core_value_sigD073 = (var_core_value_sig1998, var_core_value_sigFF19, var_core_value_sig43B8) => {
      let var_core_value_sigD98F = Math.max(0, ...var_core_value_sigEEEF.widgetOrder["flatMap"](var_core_value_sigA319 => {
          var var_core_value_sig2D58;
          let var_core_value_sig223F = (var_core_value_sig2D58 = var_core_value_sigEEEF.widgets[var_core_value_sigA319]) == null ? undefined : var_core_value_sig2D58.layout;
          return var_core_value_sig223F ? [var_core_value_sig223F.row + var_core_value_sig223F.rowSpan] : [];
        })),
        var_core_value_sig66C0 = "dashboard-widget-" + var_core_value_sig992A(8),
        var_core_value_sig9D15 = {
          column: 0,
          row: var_core_value_sigD98F,
          columnSpan: var_core_value_sigFF19,
          rowSpan: var_core_value_sig43B8
        };
      switch (var_core_value_sig1998.type) {
        case var_core_value_sig75FC.PivotChart:
          return var_core_value_sig8A26({
            ...var_core_value_sig1998,
            id: var_core_value_sig66C0,
            layout: var_core_value_sig9D15
          });
        case var_core_value_sig75FC.TableFilter:
          return var_core_value_sig8A26({
            ...var_core_value_sig1998,
            id: var_core_value_sig66C0,
            layout: var_core_value_sig9D15
          });
        case var_core_value_sig75FC.Text:
          return var_core_value_sig8A26({
            ...var_core_value_sig1998,
            id: var_core_value_sig66C0,
            layout: var_core_value_sig9D15
          });
        case var_core_value_sig75FC.Image:
          return var_core_value_sig8A26({
            ...var_core_value_sig1998,
            id: var_core_value_sig66C0,
            layout: var_core_value_sig9D15
          });
        case var_core_value_sig75FC.FormulaShape:
          return var_core_value_sig8A26({
            ...var_core_value_sig1998,
            id: var_core_value_sig66C0,
            layout: var_core_value_sig9D15
          });
      }
    },
    var_core_value_sigF631 = var_core_value_sig9A01.getSnapshot(),
    var_core_value_sig2278 = var_core_value_sigF631.tableOrder["flatMap"](var_core_value_sigB785 => {
      let var_core_value_sig130F = var_core_value_sigF631.tables[var_core_value_sigB785];
      if (!var_core_value_sig130F) return [];
      let var_core_value_sigC0E3 = var_core_value_sig130F.viewOrder["flatMap"](var_core_value_sigD749 => {
        let var_core_value_sigCFFA = var_core_value_sig130F.views[var_core_value_sigD749];
        return yi(var_core_value_sigCFFA) ? [{
          type: "item",
          children: var_core_value_sigCFFA.name,
          onSelect: () => var_core_value_sigD073({
            type: var_core_value_sig75FC.PivotChart,
            tableId: var_core_value_sigB785,
            pivotViewId: var_core_value_sigD749,
            chart: {
              ...var_core_value_sigCFFA.config["chart"]
            }
          }, 6, 10)
        }] : [];
      });
      return [{
        type: "subItem",
        children: var_core_value_sig130F.name,
        options: [...var_core_value_sigC0E3, ...(var_core_value_sigC0E3.length ? [{
          type: "separator"
        }] : []), {
          type: "item",
          children: var_core_value_sig5215.t("bases-dashboard-ui.dashboard.tableFilter"),
          onSelect: () => var_core_value_sigD073({
            type: var_core_value_sig75FC.TableFilter,
            tableId: var_core_value_sigB785,
            filter: null
          }, 6, 8)
        }]
      }];
    }),
    var_core_value_sig7053 = [...var_core_value_sig2278, ...(var_core_value_sig2278.length ? [{
      type: "separator"
    }] : []), {
      type: "item",
      children: var_core_value_sig5215.t("bases-dashboard-ui.dashboard.text"),
      onSelect: () => var_core_value_sigD073({
        type: var_core_value_sig75FC.Text,
        document: hi()
      }, 4, 6)
    }, {
      type: "item",
      children: var_core_value_sig5215.t("bases-dashboard-ui.dashboard.image"),
      onSelect: () => gi(var_core_value_sig27C4).then(var_core_value_sig58C1 => var_core_value_sig58C1 && var_core_value_sigD073({
        type: var_core_value_sig75FC.Image,
        source: var_core_value_sig58C1.source,
        sourceType: var_core_value_sig58C1.sourceType,
        alt: var_core_value_sig58C1.name,
        displayMode: "cover"
      }, 4, 6))
    }, {
      type: "item",
      children: var_core_value_sig5215.t("bases-dashboard-ui.dashboard.formulaShape"),
      onSelect: () => {
        let var_core_value_sig52F7 = var_core_value_sigF631.tableOrder["find"](var_core_value_sig5090 => var_core_value_sigF631.tables[var_core_value_sig5090]);
        var_core_value_sig52F7 && var_core_value_sigD073({
          type: var_core_value_sig75FC.FormulaShape,
          tableId: var_core_value_sig52F7,
          shapeType: var_core_value_sigEC1A.RoundRect,
          shapeData: var_core_value_sigBFC7(),
          description: var_core_value_sig5215.t("bases-dashboard-ui.dashboard.formulaShape")
        }, 4, 6);
      }
    }],
    var_core_value_sig52F1 = var_core_value_sigF481 ? var_core_value_sigEEEF.widgets[var_core_value_sigF481] : undefined,
    var_core_value_sig1E74 = async () => {
      let var_core_value_sig866F = var_core_value_sig4D58.current;
      if (!var_core_value_sig866F) return;
      let var_core_value_sigDE3D = var_core_value_sig866F.ownerDocument;
      if (var_core_value_sigDE3D.fullscreenElement === var_core_value_sigDE3D.documentElement) {
        await var_core_value_sigDE3D.exitFullscreen();
        return;
      }
      await var_core_value_sigDE3D.documentElement["requestFullscreen"]();
    },
    var_core_value_sig1E84 = var_core_value_sig0477 || var_core_value_sig7CF3,
    var_core_value_sig133B = var_core_value_sigC8F6 && !var_core_value_sig1E84;
  return var_core_value_sigFD9D("div", {
    ref: var_core_value_sig4D58,
    className: "\n univer-flex univer-h-full univer-min-h-0 univer-flex-col univer-bg-gray-0\n dark:!univer-bg-gray-900\n " + (var_core_value_sig7CF3 ? "univer-fixed\x20univer-inset-0\x20univer-z-[1000]" : "univer-relative univer-z-10") + "\n ",
    children: [!var_core_value_sig1E84 && var_core_value_sigFD9D("header", {
      className: "univer-flex univer-h-12 univer-shrink-0 univer-items-center univer-gap-3 univer-border-b univer-border-gray-200 univer-bg-gray-0 univer-px-4 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      children: [var_core_value_sigCD6E(var_core_value_sig32DD, {
        className: "univer-size-5 univer-text-primary-600"
      }), var_core_value_sigCD6E("h2", {
        className: "univer-m-0\x20univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-base\x20univer-font-semibold",
        children: var_core_value_sigEEEF.name
      }), var_core_value_sigCD6E(var_core_value_sigE4D0, {
        unitId: var_core_value_sig2ED4
      }), var_core_value_sigCD6E(var_core_value_sigBDED, {
        type: "button",
        size: "small",
        variant: "text",
        "aria-label": var_core_value_sig5215.t("bases-dashboard-ui.dashboard.undo"),
        disabled: !var_core_value_sigC8F6 || var_core_value_sig674F.undos === 0,
        onClick: () => var_core_value_sig6FDF.executeCommand(var_core_value_sigC860.id).catch(() => undefined),
        children: var_core_value_sigCD6E(var_core_value_sigB272, {})
      }), var_core_value_sigCD6E(var_core_value_sigBDED, {
        type: "button",
        size: "small",
        variant: "text",
        "aria-label": var_core_value_sig5215.t("bases-dashboard-ui.dashboard.redo"),
        disabled: !var_core_value_sigC8F6 || var_core_value_sig674F.redos === 0,
        onClick: () => var_core_value_sig6FDF.executeCommand(var_core_value_sig838E.id).catch(() => undefined),
        children: var_core_value_sigCD6E(var_core_value_sig6005, {})
      }), var_core_value_sigCD6E(var_core_value_sigBDED, {
        type: "button",
        size: "small",
        variant: "text",
        "aria-label": var_core_value_sig5215.t("bases-dashboard-ui.dashboard.fullScreen"),
        onClick: () => var_core_value_sig1E74().catch(() => undefined),
        children: var_core_value_sigCD6E(var_core_value_sigEA69, {})
      }), var_core_value_sigCD6E(var_core_value_sigE863, {
        items: var_core_value_sig7053,
        children: var_core_value_sigFD9D(var_core_value_sigBDED, {
          variant: "primary",
          disabled: !var_core_value_sigC8F6,
          children: [var_core_value_sigCD6E(var_core_value_sigC481, {}), var_core_value_sig5215.t("bases-dashboard-ui.dashboard.addWidget")]
        })
      })]
    }), var_core_value_sigFD9D("div", {
      className: "univer-flex univer-min-h-0 univer-flex-1",
      children: [var_core_value_sigCD6E("div", {
        className: "univer-min-w-0 univer-flex-1",
        children: var_core_value_sigCD6E(ur, {
          dashboard: var_core_value_sigEEEF,
          dragLabel: var_core_value_sig5215.t("bases-dashboard-ui.dashboardInspector.dragWidget"),
          editable: var_core_value_sig133B,
          resizeLabel: var_core_value_sig5215.t("bases-dashboard-ui.dashboard.resizeWidget"),
          widgetLabel: var_core_value_sigF175 => var_core_value_sig5215.t(vi(var_core_value_sigF175.type)),
          selectedWidgetId: var_core_value_sig133B ? var_core_value_sigF481 : undefined,
          onSelectWidget: var_core_value_sig133B ? var_core_value_sig6A18 => {
            var_core_value_sigD7F2(var_core_value_sig6A18), var_core_value_sig6A18 || var_core_value_sig424E(false);
          } : undefined,
          onLayoutsCommit: var_core_value_sig4E3D => {
            let var_core_value_sig49B0 = {
              ...var_core_value_sigEEEF.widgets
            };
            var_core_value_sig4E3D.forEach((var_core_value_sigC368, var_core_value_sigAD56) => {
              let var_core_value_sigDB4A = var_core_value_sig49B0[var_core_value_sigAD56];
              var_core_value_sigDB4A && (var_core_value_sig49B0[var_core_value_sigAD56] = {
                ...var_core_value_sigDB4A,
                layout: var_core_value_sigC368
              });
            }), var_core_value_sig6FDF.executeCommand(var_core_value_sig8078.id, {
              unitId: var_core_value_sig2ED4,
              dashboard: {
                ...var_core_value_sigEEEF,
                widgets: var_core_value_sig49B0
              }
            }).catch(() => undefined);
          },
          renderWidget: var_core_value_sig2547 => var_core_value_sigCD6E(fi, {
            base: var_core_value_sig9A01,
            dashboard: var_core_value_sigEEEF,
            unitId: var_core_value_sig2ED4,
            widget: var_core_value_sig2547,
            editable: var_core_value_sigC8F6,
            onChange: var_core_value_sig8A26,
            onChartRuntimeChange: var_core_value_sigBF1C
          }),
          renderWidgetActions: var_core_value_sigBCA9 => var_core_value_sigCD6E(ui, {
            onEdit: () => {
              var_core_value_sigD7F2(var_core_value_sigBCA9.id), var_core_value_sig424E(true);
            },
            onDelete: () => {
              var_core_value_sigF481 === var_core_value_sigBCA9.id && (var_core_value_sigD7F2(undefined), var_core_value_sig424E(false)), var_core_value_sig6FDF.executeCommand(var_core_value_sig825F.id, {
                unitId: var_core_value_sig2ED4,
                dashboardId: var_core_value_sigC844,
                widgetId: var_core_value_sigBCA9.id
              }).catch(() => undefined);
            }
          })
        })
      }), var_core_value_sig133B && var_core_value_sig2DBD && var_core_value_sig52F1 && var_core_value_sigCD6E(Yr, {
        base: var_core_value_sig9A01,
        chartRuntime: var_core_value_sig6643.get(var_core_value_sig52F1.id),
        unitId: var_core_value_sig2ED4,
        widget: var_core_value_sig52F1,
        onChange: var_core_value_sig8A26,
        onClose: () => var_core_value_sig424E(false),
        onSelectBackgroundImage: () => _i(var_core_value_sig3E1A),
        onSelectImage: () => gi(var_core_value_sig27C4)
      })]
    })]
  });
}
function fi({
  base: var_core_value_sig69B8,
  dashboard: var_core_value_sig983D,
  editable: var_core_value_sig9A03,
  onChange: var_core_value_sig3363,
  onChartRuntimeChange: var_core_value_sigF64A,
  unitId: var_core_value_sig25EC,
  widget: var_core_value_sigA790
}) {
  let var_core_value_sig9A5E = var_core_value_sig7EAB(() => var_core_value_sig983D.widgetOrder["flatMap"](var_core_value_sig6418 => {
    let var_core_value_sig1896 = var_core_value_sig983D.widgets[var_core_value_sig6418];
    return (var_core_value_sig1896 == null ? undefined : var_core_value_sig1896.type) === var_core_value_sig75FC.TableFilter && var_core_value_sig1896.tableId === ("tableId" in var_core_value_sigA790 ? var_core_value_sigA790.tableId : "") && var_core_value_sig1896.filter ? [var_core_value_sig1896.filter] : [];
  }), [var_core_value_sig983D, var_core_value_sigA790]);
  switch (var_core_value_sigA790.type) {
    case var_core_value_sig75FC.PivotChart:
      return var_core_value_sigCD6E(si, {
        filters: var_core_value_sig9A5E,
        unitId: var_core_value_sig25EC,
        widget: var_core_value_sigA790,
        onRuntimeChange: var_core_value_sigF64A
      });
    case var_core_value_sig75FC.TableFilter:
      return var_core_value_sigCD6E(Pr, {
        disabled: !var_core_value_sig9A03,
        fields: pi(var_core_value_sig69B8, var_core_value_sigA790.tableId),
        filter: var_core_value_sigA790.filter,
        onChange: var_core_value_sig0285 => var_core_value_sig3363({
          ...var_core_value_sigA790,
          filter: var_core_value_sig0285
        }).catch(() => undefined)
      });
    case var_core_value_sig75FC.Text:
      return var_core_value_sigCD6E(li, {
        widget: var_core_value_sigA790
      });
    case var_core_value_sig75FC.Image:
      return var_core_value_sigCD6E(mi, {
        widget: var_core_value_sigA790
      });
    case var_core_value_sig75FC.FormulaShape:
      return var_core_value_sigCD6E(rr, {
        dashboardId: var_core_value_sig983D.id,
        unitId: var_core_value_sig25EC,
        widget: var_core_value_sigA790
      });
  }
}
function pi(var_core_value_sig01B9, var_core_value_sigD6A9) {
  let var_core_value_sig0FCF = var_core_value_sig01B9.getSnapshot().tables[var_core_value_sigD6A9],
    var_core_value_sigCF96 = var_core_value_sig0FCF == null ? undefined : var_core_value_sig0FCF.viewOrder["find"](var_core_value_sig4CDF => var_core_value_sig0FCF.views[var_core_value_sig4CDF]),
    var_core_value_sigC4E9 = var_core_value_sigCF96 ? var_core_value_sig0FCF == null ? undefined : var_core_value_sig0FCF.views[var_core_value_sigCF96] : undefined;
  return var_core_value_sig0FCF && var_core_value_sigC4E9 ? var_core_value_sig7E48(var_core_value_sig0FCF, var_core_value_sigC4E9) : [];
}
function mi({
  widget: var_core_value_sigF612
}) {
  let var_core_value_sigAA6C = var_core_value_sigB77C(var_core_value_sig1451),
    [var_core_value_sig8BFA, var_core_value_sig236B] = var_core_value_sig90CF(var_core_value_sigF612.sourceType === var_core_value_sig8457.UUID ? "" : var_core_value_sigF612.source);
  return var_core_value_sig5EE4(() => {
    let var_core_value_sig3F79 = true;
    return var_core_value_sigAA6C.getAttachmentUrl(var_core_value_sigF612.source, var_core_value_sigF612.sourceType).then(var_core_value_sig777D => {
      var_core_value_sig3F79 && var_core_value_sig236B(var_core_value_sig777D);
    }).catch(() => undefined), () => {
      var_core_value_sig3F79 = false;
    };
  }, [var_core_value_sigAA6C, var_core_value_sigF612.source, var_core_value_sigF612.sourceType]), var_core_value_sig8BFA ? var_core_value_sigCD6E("div", {
    role: var_core_value_sigF612.alt ? "img" : undefined,
    "aria-label": var_core_value_sigF612.alt || undefined,
    "data-dashboard-image": var_core_value_sigF612.id,
    className: "univer-h-full univer-w-full univer-bg-transparent",
    style: Jn(var_core_value_sig8BFA, var_core_value_sigF612.displayMode)
  }) : null;
}
function hi() {
  let var_core_value_sig1951 = var_core_value_sigF39B(new Set());
  return {
    id: "dashboard-text-" + var_core_value_sig992A(8),
    body: {
      dataStream: "\x0d\x0a",
      textRuns: [],
      paragraphs: [{
        startIndex: 0,
        paragraphId: var_core_value_sig1951
      }]
    },
    documentStyle: {}
  };
}
function gi(var_core_value_sigFEA0) {
  return new Promise(var_core_value_sig880E => {
    let var_core_value_sigC9ED = document.createElement("input");
    var_core_value_sigC9ED.type = "file", var_core_value_sigC9ED.accept = "image/*", var_core_value_sigC9ED.addEventListener("change", () => {
      var var_core_value_sig3F4C;
      let var_core_value_sigD65A = (var_core_value_sig3F4C = var_core_value_sigC9ED.files) == null ? undefined : var_core_value_sig3F4C[0];
      if (!var_core_value_sigD65A) {
        var_core_value_sig880E(null);
        return;
      }
      var_core_value_sigFEA0.saveAttachment(var_core_value_sigD65A).then(var_core_value_sig1A0F => {
        if (!var_core_value_sig1A0F.source || var_core_value_sig1A0F.sourceType === undefined) {
          var_core_value_sig880E(null);
          return;
        }
        var_core_value_sig880E({
          name: var_core_value_sig1A0F.name,
          source: var_core_value_sig1A0F.source,
          sourceType: var_core_value_sig1A0F.sourceType
        });
      }).catch(() => var_core_value_sig880E(null));
    }, {
      once: true
    }), var_core_value_sigC9ED.click();
  });
}
function _i(var_core_value_sig931A) {
  return new Promise(var_core_value_sigB57B => {
    let var_core_value_sig780B = document.createElement("input");
    var_core_value_sig780B.type = "file", var_core_value_sig780B.accept = "image/*", var_core_value_sig780B.addEventListener("change", () => {
      var var_core_value_sig5A13;
      let var_core_value_sigF593 = (var_core_value_sig5A13 = var_core_value_sig780B.files) == null ? undefined : var_core_value_sig5A13[0];
      if (!var_core_value_sigF593) {
        var_core_value_sigB57B(null);
        return;
      }
      var_core_value_sig931A.saveImage(var_core_value_sigF593).then(var_core_value_sigFBA4 => {
        if (!(var_core_value_sigFBA4 != null && var_core_value_sigFBA4.source)) {
          var_core_value_sigB57B(null);
          return;
        }
        if (var_core_value_sigFBA4.base64Cache) {
          let var_core_value_sig27E5 = new Image();
          var_core_value_sig27E5.src = var_core_value_sigFBA4.base64Cache, var_core_value_sig931A.addImageSourceCache(var_core_value_sigFBA4.source, var_core_value_sigFBA4.imageSourceType, var_core_value_sig27E5);
        }
        var_core_value_sigB57B({
          source: var_core_value_sigFBA4.source,
          sourceType: var_core_value_sigFBA4.imageSourceType
        });
      }).catch(() => var_core_value_sigB57B(null));
    }, {
      once: true
    }), var_core_value_sig780B.click();
  });
}
function vi(var_core_value_sigEE7D) {
  switch (var_core_value_sigEE7D) {
    case var_core_value_sig75FC.PivotChart:
      return "bases-dashboard-ui.dashboard.pivotChart";
    case var_core_value_sig75FC.TableFilter:
      return "bases-dashboard-ui.dashboard.tableFilter";
    case var_core_value_sig75FC.Text:
      return "bases-dashboard-ui.dashboard.text";
    case var_core_value_sig75FC.Image:
      return "bases-dashboard-ui.dashboard.image";
    case var_core_value_sig75FC.FormulaShape:
      return "bases-dashboard-ui.dashboard.formulaShape";
  }
}
function yi(var_core_value_sig3585) {
  return (var_core_value_sig3585 == null ? undefined : var_core_value_sig3585.type) === var_core_value_sigC7EA.Pivot && typeof var_core_value_sig3585.config == "object" && var_core_value_sig3585.config !== null && "pivot" in var_core_value_sig3585.config && "chart" in var_core_value_sig3585.config;
}
const bi = [{
    area: var_core_value_sig8339.Filter,
    key: "filterFields",
    label: "bases-dashboard-ui.pivot.filters"
  }, {
    area: var_core_value_sig8339.Column,
    key: "columnFields",
    label: "bases-dashboard-ui.pivot.columns"
  }, {
    area: var_core_value_sig8339.Row,
    key: "rowFields",
    label: "bases-dashboard-ui.pivot.rows"
  }, {
    area: var_core_value_sig8339.Value,
    key: "valueFields",
    label: "bases-dashboard-ui.pivot.values"
  }],
  xi = [{
    value: var_core_value_sig8E31.sum,
    localeKey: "bases-dashboard-ui.pivot.sum"
  }, {
    value: var_core_value_sig8E31.count,
    localeKey: "bases-dashboard-ui.pivot.count"
  }, {
    value: var_core_value_sig8E31.countNums,
    localeKey: "bases-dashboard-ui.pivot.countNumbers"
  }, {
    value: var_core_value_sig8E31.average,
    localeKey: "bases-dashboard-ui.pivot.average"
  }, {
    value: var_core_value_sig8E31.max,
    localeKey: "bases-dashboard-ui.pivot.max"
  }, {
    value: var_core_value_sig8E31.min,
    localeKey: "bases-dashboard-ui.pivot.min"
  }, {
    value: var_core_value_sig8E31.product,
    localeKey: "bases-dashboard-ui.pivot.product"
  }, {
    value: var_core_value_sig8E31.stdDev,
    localeKey: "bases-dashboard-ui.pivot.stdDev"
  }, {
    value: var_core_value_sig8E31.stdDevp,
    localeKey: "bases-dashboard-ui.pivot.stdDevPopulation"
  }, {
    value: var_core_value_sig8E31.var,
    localeKey: "bases-dashboard-ui.pivot.variance"
  }, {
    value: var_core_value_sig8E31.varp,
    localeKey: "bases-dashboard-ui.pivot.variancePopulation"
  }];
function Si(var_core_value_sig31A8) {
  let {
      config: var_core_value_sigA4DA,
      onChange: var_core_value_sig6FC0,
      table: var_core_value_sig6217
    } = var_core_value_sig31A8,
    var_core_value_sigB805 = var_core_value_sigB77C(var_core_value_sig6C8C),
    [var_core_value_sig4FAE, var_core_value_sig1FCC] = var_core_value_sig90CF("fields"),
    [var_core_value_sigB7F9, var_core_value_sigB1A2] = var_core_value_sig90CF(""),
    [var_core_value_sig526D, var_core_value_sigBDB5] = var_core_value_sig90CF(null),
    [var_core_value_sig59CE1, var_core_value_sig3AD7] = var_core_value_sig90CF(null),
    [var_core_value_sig04E4, var_core_value_sigD8F0] = var_core_value_sig90CF(null),
    [var_core_value_sig1475, var_core_value_sig08B7] = var_core_value_sig90CF(null),
    var_core_value_sig2008 = var_core_value_sig56B9(null),
    var_core_value_sig496B = var_core_value_sig7EAB(() => var_core_value_sig6217.fieldOrder["flatMap"](var_core_value_sig3607 => {
      let var_core_value_sigB512 = var_core_value_sig6217.fields[var_core_value_sig3607];
      return var_core_value_sigB512 && var_core_value_sigB512.system !== true && var_core_value_sigB512.type !== var_core_value_sig933F.RecordId ? [var_core_value_sigB512] : [];
    }).filter(var_core_value_sigF2E6 => var_core_value_sigF2E6.name["toLocaleLowerCase"]().includes(var_core_value_sigB7F9.trim().toLocaleLowerCase())), [var_core_value_sigB7F9, var_core_value_sig6217]),
    var_core_value_sig7161 = var_core_value_sig7D1B => {
      let var_core_value_sig7BE0 = var_core_value_sig6E47(var_core_value_sig6217, var_core_value_sigA4DA.pivot);
      try {
        var_core_value_sig7D1B(var_core_value_sig7BE0), var_core_value_sig6FC0({
          pivot: var_core_value_sig7BE0.toJSON()
        });
      } finally {
        var_core_value_sig7BE0.dispose();
      }
    },
    var_core_value_sig2AB8 = (var_core_value_sig7D40, var_core_value_sig6C7E) => {
      var_core_value_sig526D && (var_core_value_sig7161(var_core_value_sig34C8 => {
        if (var_core_value_sig526D.kind === "field") {
          let var_core_value_sig4383 = var_core_value_sig34C8.getFieldPositionInfoById(var_core_value_sig526D.id),
            var_core_value_sig186C = var_core_value_sig4383.area === var_core_value_sig7D40 && var_core_value_sig4383.index < var_core_value_sig6C7E ? var_core_value_sig6C7E - 1 : var_core_value_sig6C7E;
          var_core_value_sig34C8.updateFieldPosition(var_core_value_sig526D.id, var_core_value_sig7D40, var_core_value_sig186C);
          return;
        }
        Ai(var_core_value_sig34C8, var_core_value_sig526D.id, var_core_value_sig7D40, var_core_value_sig6C7E);
      }), var_core_value_sigBDB5(null), var_core_value_sig3AD7(null));
    };
  return var_core_value_sigFD9D("div", {
    className: "univer-flex univer-min-h-full univer-flex-col",
    children: [var_core_value_sigCD6E(var_core_value_sig4406, {
      ariaLabel: var_core_value_sigB805.t("bases-dashboard-ui.pivot.pivotConfiguration"),
      className: "univer-shrink-0 univer-px-3",
      items: [{
        label: var_core_value_sigB805.t("bases-dashboard-ui.pivot.fields"),
        panelId: "base-pivot-fields",
        value: "fields"
      }, {
        label: var_core_value_sigB805.t("bases-dashboard-ui.pivot.options"),
        panelId: "base-pivot-options",
        value: "options"
      }],
      value: var_core_value_sig4FAE,
      onChange: var_core_value_sig1FCC
    }), var_core_value_sigCD6E("div", {
      ref: var_core_value_sig2008,
      className: var_core_value_sig8DA6("univer-min-h-0 univer-flex-1 univer-overflow-y-auto univer-p-3", var_core_value_sigCA69),
      onDragOver: var_core_value_sig68BE => {
        let var_core_value_sig04C6 = var_core_value_sig2008.current;
        if (!var_core_value_sig04C6) return;
        let var_core_value_sigCA05 = var_core_value_sig04C6.getBoundingClientRect();
        var_core_value_sig68BE.clientY < var_core_value_sigCA05.top + 48 ? var_core_value_sig04C6.scrollTop -= 16 : var_core_value_sig68BE.clientY > var_core_value_sigCA05.bottom - 48 && (var_core_value_sig04C6.scrollTop += 16);
      },
      children: var_core_value_sig4FAE === "options" ? var_core_value_sigCD6E(ki, {
        config: var_core_value_sigA4DA,
        commit: var_core_value_sig7161
      }) : var_core_value_sigFD9D("div", {
        className: "univer-flex univer-flex-col univer-gap-4",
        children: [var_core_value_sigFD9D("div", {
          children: [var_core_value_sigCD6E("div", {
            className: "univer-mb-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
            children: var_core_value_sigB805.t("bases-dashboard-ui.pivot.sourceFields")
          }), var_core_value_sigCD6E(var_core_value_sig04B4, {
            allowClear: true,
            slot: var_core_value_sigCD6E(var_core_value_sig25A4, {}),
            value: var_core_value_sigB7F9,
            placeholder: var_core_value_sigB805.t("bases-dashboard-ui.pivot.searchFields"),
            onChange: var_core_value_sigB1A2
          }), var_core_value_sigCD6E("div", {
            className: "univer-mt-2 univer-flex univer-max-h-60 univer-flex-col univer-overflow-y-auto",
            children: var_core_value_sig496B.map(var_core_value_sig2F2B => var_core_value_sigCD6E(Ci, {
              config: var_core_value_sigA4DA,
              field: var_core_value_sig2F2B,
              onAdd: var_core_value_sigB744 => var_core_value_sig7161(var_core_value_sigD955 => Ai(var_core_value_sigD955, var_core_value_sig2F2B.id, var_core_value_sigB744, var_core_value_sigD955.getFieldCountByArea(var_core_value_sigB744))),
              onCheckedChange: var_core_value_sigEAE2 => var_core_value_sig7161(var_core_value_sig48BD => {
                let var_core_value_sig429F = var_core_value_sig48BD.getTableFieldsByDataFieldId(var_core_value_sig2F2B.id);
                if (!var_core_value_sigEAE2) {
                  var_core_value_sig429F.forEach(var_core_value_sig2AD8 => var_core_value_sig48BD.removeField(var_core_value_sig2AD8.getId()));
                  return;
                }
                if (var_core_value_sig429F.length === 0) {
                  let var_core_value_sig8061 = Mi(var_core_value_sig2F2B) ? var_core_value_sig8339.Value : var_core_value_sig8339.Row;
                  var_core_value_sig48BD.addFieldWithSourceId(var_core_value_sig2F2B.id, var_core_value_sig8061);
                }
              }),
              onDragStart: () => var_core_value_sigBDB5({
                kind: "source",
                id: var_core_value_sig2F2B.id
              })
            }, var_core_value_sig2F2B.id))
          })]
        }), var_core_value_sigCD6E("div", {
          className: "univer-grid univer-grid-cols-2 univer-gap-3",
          children: bi.map(var_core_value_sig70AF => var_core_value_sigCD6E(Ti, {
            area: var_core_value_sig70AF.area,
            dropTarget: var_core_value_sig59CE1,
            fields: var_core_value_sigA4DA.pivot[var_core_value_sig70AF.key],
            label: var_core_value_sigB805.t(var_core_value_sig70AF.label),
            snapshot: var_core_value_sigA4DA.pivot,
            onDragEnd: () => {
              var_core_value_sigBDB5(null), var_core_value_sig3AD7(null);
            },
            onDragStart: var_core_value_sigE68A => var_core_value_sigBDB5({
              kind: "field",
              id: var_core_value_sigE68A,
              area: var_core_value_sig70AF.area
            }),
            onDragOver: var_core_value_sig3E68 => var_core_value_sig3AD7({
              area: var_core_value_sig70AF.area,
              index: var_core_value_sig3E68
            }),
            onDrop: var_core_value_sigF4C5 => var_core_value_sig2AB8(var_core_value_sig70AF.area, var_core_value_sigF4C5),
            onFilter: var_core_value_sigD8F0,
            onRemove: var_core_value_sig5410 => var_core_value_sig7161(var_core_value_sigF62A => var_core_value_sigF62A.removeField(var_core_value_sig5410)),
            onSettings: var_core_value_sig08B7
          }, var_core_value_sig70AF.area))
        }), var_core_value_sig04E4 && var_core_value_sigCD6E(Di, {
          fieldId: var_core_value_sig04E4,
          snapshot: var_core_value_sigA4DA.pivot,
          table: var_core_value_sig6217,
          onCancel: () => var_core_value_sigD8F0(null),
          onCommit: (var_core_value_sigD04E, var_core_value_sigB99B) => {
            var_core_value_sig7161(var_core_value_sig492F => {
              let var_core_value_sig8EA0 = var_core_value_sig492F.getDataFieldByTableId(var_core_value_sig04E4),
                var_core_value_sigA6F6 = (var_core_value_sig8EA0 == null ? undefined : var_core_value_sig8EA0.items) ?? [];
              var_core_value_sig492F.setLabelFilterInfo(var_core_value_sig04E4, {
                type: var_core_value_sig5374.ManualFilter,
                list: var_core_value_sigD04E,
                isAll: var_core_value_sigD04E.length === var_core_value_sigA6F6.length
              }), var_core_value_sig492F.setSortInfo(var_core_value_sig04E4, var_core_value_sigB99B === undefined ? undefined : {
                type: var_core_value_sigB99B
              });
            }), var_core_value_sigD8F0(null);
          }
        }, var_core_value_sig04E4), var_core_value_sig1475 && var_core_value_sigCD6E(Oi, {
          field: var_core_value_sigA4DA.pivot["measure"][var_core_value_sig1475],
          onCancel: () => var_core_value_sig08B7(null),
          onCommit: (var_core_value_sig5A75, var_core_value_sig7BAF, var_core_value_sig8F69) => {
            var_core_value_sig7161(var_core_value_sigCDDA => {
              var_core_value_sigCDDA.renameField(var_core_value_sig1475, var_core_value_sig5A75), var_core_value_sigCDDA.setSubtotalType(var_core_value_sig1475, var_core_value_sig7BAF), var_core_value_sigCDDA.setFieldFormat(var_core_value_sig1475, var_core_value_sig8F69 || undefined);
            }), var_core_value_sig08B7(null);
          }
        }, var_core_value_sig1475)]
      })
    })]
  });
}
function Ci(var_core_value_sig3FCF) {
  let {
      config: var_core_value_sig675A,
      field: var_core_value_sig837F,
      onAdd: var_core_value_sig9D6E,
      onCheckedChange: var_core_value_sigB205,
      onDragStart: var_core_value_sigBF78
    } = var_core_value_sig3FCF,
    var_core_value_sig8AF3 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sigA0CC = [...Object.values(var_core_value_sig675A.pivot["dimension"]), ...Object.values(var_core_value_sig675A.pivot["measure"])].some(var_core_value_sig6884 => var_core_value_sig6884.dataFieldId === var_core_value_sig837F.id),
    var_core_value_sigB3A1 = bi.map(var_core_value_sig066E => ({
      type: "item",
      children: var_core_value_sig8AF3.t(Ni(var_core_value_sig066E.area)),
      onSelect: () => var_core_value_sig9D6E(var_core_value_sig066E.area)
    }));
  return var_core_value_sigFD9D("div", {
    draggable: true,
    className: "univer-group\x20univer-flex\x20univer-h-8\x20univer-items-center\x20univer-gap-2\x20univer-rounded-md\x20univer-px-1\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700",
    onDragStart: var_core_value_sigBF78,
    children: [var_core_value_sigCD6E(var_core_value_sig898E, {
      className: "univer-text-gray-400"
    }), var_core_value_sigCD6E(var_core_value_sig4BFF, {
      checked: var_core_value_sigA0CC,
      onChange: var_core_value_sig9B0D => var_core_value_sigB205(!!var_core_value_sig9B0D)
    }), var_core_value_sigCD6E(wi, {
      field: var_core_value_sig837F
    }), var_core_value_sigCD6E("span", {
      className: "univer-min-w-0 univer-flex-1 univer-truncate univer-text-xs",
      children: var_core_value_sig837F.name
    }), var_core_value_sigCD6E(var_core_value_sigE863, {
      align: "end",
      items: var_core_value_sigB3A1,
      children: var_core_value_sigCD6E("span", {
        className: "univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center",
        children: var_core_value_sigCD6E(var_core_value_sig27B7, {})
      })
    })]
  });
}
function wi({
  field: var_core_value_sig1FB9
}) {
  return Mi(var_core_value_sig1FB9) ? var_core_value_sigCD6E(var_core_value_sig00DE, {
    className: "univer-text-gray-400"
  }) : var_core_value_sig1FB9.type === var_core_value_sig933F.Date || var_core_value_sig1FB9.type === var_core_value_sig933F.CreatedAt || var_core_value_sig1FB9.type === var_core_value_sig933F.UpdatedAt ? var_core_value_sigCD6E(var_core_value_sig41F2, {
    className: "univer-text-gray-400"
  }) : var_core_value_sigCD6E(var_core_value_sigB591, {
    className: "univer-text-gray-400"
  });
}
function Ti(var_core_value_sig53A9) {
  let {
      area: var_core_value_sigDACD,
      dropTarget: var_core_value_sig691E,
      fields: var_core_value_sigD6D6,
      label: var_core_value_sig0347,
      snapshot: var_core_value_sig52A3
    } = var_core_value_sig53A9,
    var_core_value_sigAD91 = var_core_value_sigB77C(var_core_value_sig6C8C);
  return var_core_value_sigFD9D("section", {
    className: var_core_value_sig8DA6("univer-min-h-32\x20univer-rounded-lg\x20univer-border\x20univer-bg-gray-50\x20univer-p-2\x20dark:!univer-bg-gray-800", var_core_value_sigC985),
    onDragOver: var_core_value_sig3D2C => {
      var_core_value_sig3D2C.preventDefault(), var_core_value_sig53A9.onDragOver(var_core_value_sigD6D6.length);
    },
    onDrop: var_core_value_sigC56D => {
      var_core_value_sigC56D.preventDefault(), var_core_value_sig53A9.onDrop((var_core_value_sig691E == null ? undefined : var_core_value_sig691E.area) === var_core_value_sigDACD ? var_core_value_sig691E.index : var_core_value_sigD6D6.length);
    },
    children: [var_core_value_sigCD6E("div", {
      className: "univer-mb-2 univer-text-xs univer-font-medium univer-text-gray-600 dark:!univer-text-gray-300",
      children: var_core_value_sig0347
    }), var_core_value_sigFD9D("div", {
      className: "univer-flex univer-flex-col",
      children: [var_core_value_sigD6D6.map((var_core_value_sig3A17, var_core_value_sig938F) => {
        let var_core_value_sigD948 = var_core_value_sig52A3.dimension[var_core_value_sig3A17] ?? var_core_value_sig52A3.measure[var_core_value_sig3A17];
        return var_core_value_sigD948 ? var_core_value_sigFD9D("div", {
          onDragOver: var_core_value_sigE243 => {
            var_core_value_sigE243.preventDefault(), var_core_value_sigE243.stopPropagation();
            let var_core_value_sig74A8 = var_core_value_sigE243.currentTarget["getBoundingClientRect"]();
            var_core_value_sig53A9.onDragOver(var_core_value_sig938F + +(var_core_value_sigE243.clientY > var_core_value_sig74A8.top + var_core_value_sig74A8.height / 2));
          },
          onDrop: var_core_value_sig21B2 => {
            var_core_value_sig21B2.preventDefault(), var_core_value_sig21B2.stopPropagation(), var_core_value_sig53A9.onDrop((var_core_value_sig691E == null ? undefined : var_core_value_sig691E.area) === var_core_value_sigDACD ? var_core_value_sig691E.index : var_core_value_sig938F);
          },
          children: [(var_core_value_sig691E == null ? undefined : var_core_value_sig691E.area) === var_core_value_sigDACD && var_core_value_sig691E.index === var_core_value_sig938F && var_core_value_sigCD6E("div", {
            className: "univer-h-0.5 univer-rounded univer-bg-primary-600"
          }), var_core_value_sigCD6E(Ei, {
            area: var_core_value_sigDACD,
            field: var_core_value_sigD948,
            onDragEnd: var_core_value_sig53A9.onDragEnd,
            onDragStart: () => var_core_value_sig53A9.onDragStart(var_core_value_sig3A17),
            onFilter: () => var_core_value_sig53A9.onFilter(var_core_value_sig3A17),
            onRemove: () => var_core_value_sig53A9.onRemove(var_core_value_sig3A17),
            onSettings: () => var_core_value_sig53A9.onSettings(var_core_value_sig3A17)
          })]
        }, var_core_value_sig3A17) : null;
      }), (var_core_value_sig691E == null ? undefined : var_core_value_sig691E.area) === var_core_value_sigDACD && var_core_value_sig691E.index === var_core_value_sigD6D6.length && var_core_value_sigCD6E("div", {
        className: "univer-h-0.5 univer-rounded univer-bg-primary-600"
      }), var_core_value_sigD6D6.length === 0 && var_core_value_sigCD6E("div", {
        className: "univer-grid univer-h-20 univer-place-items-center univer-text-center univer-text-xs univer-text-gray-400",
        children: var_core_value_sigAD91.t("bases-dashboard-ui.pivot.dropFieldsHere")
      })]
    })]
  });
}
function Ei(var_core_value_sigF64E) {
  let var_core_value_sig9B3D1 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sigB217 = var_core_value_sigF64E.area === var_core_value_sig8339.Value,
    var_core_value_sig1FE6 = [{
      type: "item",
      children: var_core_value_sig9B3D1.t("bases-dashboard-ui.pivot.removeField"),
      onSelect: var_core_value_sigF64E.onRemove
    }, {
      type: "item",
      children: var_core_value_sig9B3D1.t(var_core_value_sigB217 ? "bases-dashboard-ui.pivot.fieldSettings" : "bases-dashboard-ui.pivot.filterField"),
      onSelect: var_core_value_sigB217 ? var_core_value_sigF64E.onSettings : var_core_value_sigF64E.onFilter
    }];
  return var_core_value_sigFD9D("div", {
    draggable: true,
    className: "univer-my-1 univer-flex univer-h-8 univer-items-center univer-gap-2 univer-rounded-md univer-border univer-border-gray-200 univer-bg-gray-0 univer-px-2 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onDragEnd: var_core_value_sigF64E.onDragEnd,
    onDragStart: var_core_value_sigF64E.onDragStart,
    children: [var_core_value_sigCD6E(var_core_value_sig898E, {
      className: "univer-text-gray-400"
    }), var_core_value_sigCD6E(var_core_value_sig57DF, {
      title: var_core_value_sigF64E.field["displayName"],
      children: var_core_value_sigCD6E("span", {
        className: "univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-xs",
        children: var_core_value_sigF64E.field["displayName"]
      })
    }), var_core_value_sigCD6E(var_core_value_sigE863, {
      align: "end",
      items: var_core_value_sig1FE6,
      children: var_core_value_sigCD6E("span", {
        className: "univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center",
        children: var_core_value_sigCD6E(var_core_value_sig27B7, {})
      })
    })]
  });
}
function Di(var_core_value_sig2471) {
  var var_core_value_sigD1FC, var_core_value_sigE2F9;
  let var_core_value_sigD689 = var_core_value_sigB77C(var_core_value_sig6C8C),
    {
      format: var_core_value_sig7AE3,
      items: var_core_value_sig1EB3,
      itemTypes: var_core_value_sigE120
    } = var_core_value_sig7EAB(() => {
      let var_core_value_sigBE5E = var_core_value_sig6E47(var_core_value_sig2471.table, var_core_value_sig2471.snapshot);
      try {
        let var_core_value_sigDE08 = var_core_value_sigBE5E.getDataFieldByTableId(var_core_value_sig2471.fieldId);
        return {
          format: var_core_value_sigDE08 == null ? undefined : var_core_value_sigDE08.format,
          items: [...((var_core_value_sigDE08 == null ? undefined : var_core_value_sigDE08.items) ?? [])],
          itemTypes: [...((var_core_value_sigDE08 == null ? undefined : var_core_value_sigDE08.itemTypes) ?? [])]
        };
      } finally {
        var_core_value_sigBE5E.dispose();
      }
    }, [var_core_value_sig2471.fieldId, var_core_value_sig2471.snapshot, var_core_value_sig2471.table]),
    var_core_value_sigD6E7 = (var_core_value_sigD1FC = var_core_value_sig2471.snapshot["dimension"][var_core_value_sig2471.fieldId]) == null ? undefined : var_core_value_sigD1FC.filterInfo,
    [var_core_value_sig3669, var_core_value_sig5CBC] = var_core_value_sig90CF((var_core_value_sigD6E7 == null ? undefined : var_core_value_sigD6E7.type) === var_core_value_sig5374.ManualFilter ? var_core_value_sigD6E7.list : var_core_value_sig1EB3),
    [var_core_value_sig20BE, var_core_value_sig6BD0] = var_core_value_sig90CF((var_core_value_sigE2F9 = var_core_value_sig2471.snapshot["dimension"][var_core_value_sig2471.fieldId]) == null || (var_core_value_sigE2F9 = var_core_value_sigE2F9.sortInfo) == null ? undefined : var_core_value_sigE2F9.type),
    var_core_value_sig8C15 = var_core_value_sig3669.length === var_core_value_sig1EB3.length;
  return var_core_value_sigFD9D("section", {
    className: var_core_value_sig8DA6("univer-rounded-lg univer-border univer-bg-gray-0 univer-p-3 dark:!univer-bg-gray-900", var_core_value_sigC985),
    children: [var_core_value_sigCD6E("div", {
      className: "univer-mb-3 univer-text-sm univer-font-medium",
      children: var_core_value_sigD689.t("bases-dashboard-ui.pivot.filterField")
    }), var_core_value_sigFD9D("div", {
      className: "univer-flex",
      children: [var_core_value_sigFD9D(var_core_value_sigBDED, {
        className: "univer-flex-1",
        variant: var_core_value_sig20BE === var_core_value_sig10FC.ascending ? "primary" : "default",
        onClick: () => var_core_value_sig6BD0(var_core_value_sig10FC.ascending),
        children: [var_core_value_sigCD6E(var_core_value_sig10D3, {}), var_core_value_sigD689.t("bases-dashboard-ui.pivot.ascending")]
      }), var_core_value_sigFD9D(var_core_value_sigBDED, {
        className: "univer-flex-1",
        variant: var_core_value_sig20BE === var_core_value_sig10FC.descending ? "primary" : "default",
        onClick: () => var_core_value_sig6BD0(var_core_value_sig10FC.descending),
        children: [var_core_value_sigCD6E(var_core_value_sig3EC0, {}), var_core_value_sigD689.t("bases-dashboard-ui.pivot.descending")]
      })]
    }), var_core_value_sigFD9D("div", {
      className: "univer-my-3\x20univer-max-h-64\x20univer-overflow-y-auto",
      children: [var_core_value_sigFD9D("label", {
        className: "univer-flex\x20univer-h-7\x20univer-items-center\x20univer-gap-2\x20univer-text-sm",
        children: [var_core_value_sigCD6E(var_core_value_sig4BFF, {
          checked: var_core_value_sig8C15,
          indeterminate: var_core_value_sig3669.length > 0 && !var_core_value_sig8C15,
          onChange: () => var_core_value_sig5CBC(var_core_value_sig8C15 ? [] : var_core_value_sig1EB3)
        }), var_core_value_sigD689.t("bases-dashboard-ui.pivot.selectAll")]
      }), var_core_value_sig1EB3.map((var_core_value_sig0281, var_core_value_sigED71) => var_core_value_sigFD9D("label", {
        className: "univer-flex\x20univer-h-7\x20univer-items-center\x20univer-gap-2\x20univer-text-sm",
        children: [var_core_value_sigCD6E(var_core_value_sig4BFF, {
          checked: var_core_value_sig3669.includes(var_core_value_sig0281),
          onChange: () => var_core_value_sig5CBC(var_core_value_sig8178 => var_core_value_sig8178.includes(var_core_value_sig0281) ? var_core_value_sig8178.filter(var_core_value_sig4D4C => var_core_value_sig4D4C !== var_core_value_sig0281) : [...var_core_value_sig8178, var_core_value_sig0281])
        }), var_core_value_sigCD6E("span", {
          className: "univer-truncate",
          children: ji(var_core_value_sig0281, var_core_value_sigE120[var_core_value_sigED71], var_core_value_sig7AE3, var_core_value_sigD689.t("bases-dashboard-ui.pivot.blank"))
        })]
      }, var_core_value_sig0281))]
    }), var_core_value_sigFD9D("div", {
      className: "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-gap-2",
      children: [var_core_value_sigCD6E(var_core_value_sigBDED, {
        variant: "link",
        onClick: () => var_core_value_sig2471.onCommit(var_core_value_sig1EB3, var_core_value_sig20BE),
        children: var_core_value_sigD689.t("bases-dashboard-ui.pivot.clearFilter")
      }), var_core_value_sigFD9D("div", {
        className: "univer-flex\x20univer-gap-2",
        children: [var_core_value_sigCD6E(var_core_value_sigBDED, {
          onClick: var_core_value_sig2471.onCancel,
          children: var_core_value_sigD689.t("bases-dashboard-ui.pivot.cancel")
        }), var_core_value_sigCD6E(var_core_value_sigBDED, {
          variant: "primary",
          disabled: var_core_value_sig3669.length === 0,
          onClick: () => var_core_value_sig2471.onCommit(var_core_value_sig3669, var_core_value_sig20BE),
          children: var_core_value_sigD689.t("bases-dashboard-ui.pivot.confirm")
        })]
      })]
    })]
  });
}
function Oi(var_core_value_sig6DF7) {
  var var_core_value_sigB411, var_core_value_sigA81B, var_core_value_sigFE8D;
  let var_core_value_sig8595 = var_core_value_sigB77C(var_core_value_sig6C8C),
    [var_core_value_sigF8DE, var_core_value_sigFE76] = var_core_value_sig90CF(((var_core_value_sigB411 = var_core_value_sig6DF7.field) == null ? undefined : var_core_value_sigB411.displayName) ?? ""),
    [var_core_value_sig84C8, var_core_value_sig80C0] = var_core_value_sig90CF(((var_core_value_sigA81B = var_core_value_sig6DF7.field) == null ? undefined : var_core_value_sigA81B.subtotal) ?? var_core_value_sig8E31.sum),
    [var_core_value_sig22B4, var_core_value_sigBB37] = var_core_value_sig90CF(((var_core_value_sigFE8D = var_core_value_sig6DF7.field) == null ? undefined : var_core_value_sigFE8D.format) ?? "");
  return var_core_value_sig6DF7.field ? var_core_value_sigFD9D("section", {
    className: var_core_value_sig8DA6("univer-flex univer-flex-col univer-gap-3 univer-rounded-lg univer-border univer-bg-gray-0 univer-p-3 dark:!univer-bg-gray-900", var_core_value_sigC985),
    children: [var_core_value_sigCD6E("div", {
      className: "univer-text-sm univer-font-medium",
      children: var_core_value_sig8595.t("bases-dashboard-ui.pivot.fieldSettings")
    }), var_core_value_sigFD9D("label", {
      className: "univer-flex univer-flex-col univer-gap-1 univer-text-xs",
      children: [var_core_value_sig8595.t("bases-dashboard-ui.pivot.displayName"), var_core_value_sigCD6E(var_core_value_sig04B4, {
        value: var_core_value_sigF8DE,
        onChange: var_core_value_sigFE76
      })]
    }), var_core_value_sigFD9D("label", {
      className: "univer-flex univer-flex-col univer-gap-1 univer-text-xs",
      children: [var_core_value_sig8595.t("bases-dashboard-ui.pivot.summarizeBy"), var_core_value_sigCD6E(var_core_value_sig3932, {
        value: String(var_core_value_sig84C8),
        options: xi.map(var_core_value_sig281C => ({
          value: String(var_core_value_sig281C.value),
          label: var_core_value_sig8595.t(var_core_value_sig281C.localeKey)
        })),
        onChange: var_core_value_sig3C92 => {
          let var_core_value_sigB16B = xi.find(var_core_value_sigACCB => String(var_core_value_sigACCB.value) === var_core_value_sig3C92);
          var_core_value_sigB16B && var_core_value_sig80C0(var_core_value_sigB16B.value);
        }
      })]
    }), var_core_value_sigFD9D("label", {
      className: "univer-flex univer-flex-col univer-gap-1 univer-text-xs",
      children: [var_core_value_sig8595.t("bases-dashboard-ui.pivot.numberFormat"), var_core_value_sigCD6E(var_core_value_sig04B4, {
        value: var_core_value_sig22B4,
        onChange: var_core_value_sigBB37
      })]
    }), var_core_value_sigFD9D("div", {
      className: "univer-flex univer-justify-end univer-gap-2",
      children: [var_core_value_sigCD6E(var_core_value_sigBDED, {
        onClick: var_core_value_sig6DF7.onCancel,
        children: var_core_value_sig8595.t("bases-dashboard-ui.pivot.cancel")
      }), var_core_value_sigCD6E(var_core_value_sigBDED, {
        variant: "primary",
        disabled: !var_core_value_sigF8DE.trim(),
        onClick: () => var_core_value_sig6DF7.onCommit(var_core_value_sigF8DE.trim(), var_core_value_sig84C8, var_core_value_sig22B4),
        children: var_core_value_sig8595.t("bases-dashboard-ui.pivot.confirm")
      })]
    })]
  }) : null;
}
function ki(var_core_value_sig0C51) {
  let {
      config: var_core_value_sigADA4,
      commit: var_core_value_sig0E48
    } = var_core_value_sig0C51,
    var_core_value_sig495B = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig310C = var_core_value_sigADA4.pivot["options"],
    var_core_value_sig759E = var_core_value_sig585D => var_core_value_sig0E48(var_core_value_sig7F33 => var_core_value_sig7F33.setOptions({
      ...var_core_value_sig7F33.getOptions(),
      ...var_core_value_sig585D
    }));
  return var_core_value_sigFD9D("div", {
    className: "univer-flex univer-flex-col univer-gap-4",
    children: [var_core_value_sigFD9D("label", {
      className: "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
      children: [var_core_value_sig495B.t("bases-dashboard-ui.pivot.layout"), var_core_value_sigCD6E(var_core_value_sig3932, {
        className: "univer-w-36",
        value: String(var_core_value_sigADA4.pivot["layout"]),
        options: [{
          value: String(var_core_value_sigB66D.tabular),
          label: var_core_value_sig495B.t("bases-dashboard-ui.pivot.layoutTabular")
        }, {
          value: String(var_core_value_sigB66D.compact),
          label: var_core_value_sig495B.t("bases-dashboard-ui.pivot.layoutCompact")
        }, {
          value: String(var_core_value_sigB66D.outline),
          label: var_core_value_sig495B.t("bases-dashboard-ui.pivot.layoutOutline")
        }],
        onChange: var_core_value_sigE722 => {
          let var_core_value_sig062A = [var_core_value_sigB66D.tabular, var_core_value_sigB66D.compact, var_core_value_sigB66D.outline].find(var_core_value_sig0C53 => String(var_core_value_sig0C53) === var_core_value_sigE722);
          var_core_value_sig062A !== undefined && var_core_value_sig0E48(var_core_value_sigEA04 => var_core_value_sigEA04.setLayout(var_core_value_sig062A));
        }
      })]
    }), [{
      key: "repeatRowLabels",
      label: "bases-dashboard-ui.pivot.repeatRowLabels",
      defaultValue: false
    }, {
      key: "repeatColLabels",
      label: "bases-dashboard-ui.pivot.repeatColumnLabels",
      defaultValue: false
    }, {
      key: "showRowSubtotal",
      label: "bases-dashboard-ui.pivot.showRowSubtotal",
      defaultValue: true
    }, {
      key: "showRowGrandTotal",
      label: "bases-dashboard-ui.pivot.showRowGrandTotal",
      defaultValue: true
    }, {
      key: "showColSubtotal",
      label: "bases-dashboard-ui.pivot.showColumnSubtotal",
      defaultValue: true
    }, {
      key: "showColGrandTotal",
      label: "bases-dashboard-ui.pivot.showColumnGrandTotal",
      defaultValue: true
    }].map(var_core_value_sig050A => var_core_value_sigFD9D("label", {
      className: "univer-flex univer-items-center univer-gap-2 univer-text-sm",
      children: [var_core_value_sigCD6E(var_core_value_sig4BFF, {
        checked: !!(var_core_value_sig310C[var_core_value_sig050A.key] ?? var_core_value_sig050A.defaultValue),
        disabled: var_core_value_sig050A.key === "repeatRowLabels" && var_core_value_sigADA4.pivot["layout"] === var_core_value_sigB66D.compact,
        onChange: var_core_value_sig7A62 => var_core_value_sig759E({
          [var_core_value_sig050A.key]: !!var_core_value_sig7A62
        })
      }), var_core_value_sig495B.t(var_core_value_sig050A.label)]
    }, var_core_value_sig050A.key)), var_core_value_sigADA4.pivot["layout"] === var_core_value_sigB66D.outline && var_core_value_sigFD9D("label", {
      className: "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
      children: [var_core_value_sig495B.t("bases-dashboard-ui.pivot.rowSubtotalPosition"), var_core_value_sigCD6E(var_core_value_sig3932, {
        className: "univer-w-36",
        value: String(var_core_value_sig310C.rowSubtotalPosition ?? var_core_value_sigD0F0.top),
        options: [{
          value: String(var_core_value_sigD0F0.top),
          label: var_core_value_sig495B.t("bases-dashboard-ui.pivot.top")
        }, {
          value: String(var_core_value_sigD0F0.bottom),
          label: var_core_value_sig495B.t("bases-dashboard-ui.pivot.bottom")
        }],
        onChange: var_core_value_sig8B32 => {
          let var_core_value_sig870F = [var_core_value_sigD0F0.top, var_core_value_sigD0F0.bottom].find(var_core_value_sig8109 => String(var_core_value_sig8109) === var_core_value_sig8B32);
          var_core_value_sig870F !== undefined && var_core_value_sig759E({
            rowSubtotalPosition: var_core_value_sig870F
          });
        }
      })]
    }), var_core_value_sigFD9D("label", {
      className: "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
      children: [var_core_value_sig495B.t("bases-dashboard-ui.pivot.valuePosition"), var_core_value_sigCD6E(var_core_value_sig3932, {
        className: "univer-w-36",
        value: String(var_core_value_sigADA4.pivot["valuePosition"] === var_core_value_sigA01E.None ? var_core_value_sigA01E.Column : var_core_value_sigADA4.pivot["valuePosition"]),
        options: [{
          value: String(var_core_value_sigA01E.Column),
          label: var_core_value_sig495B.t("bases-dashboard-ui.pivot.columns")
        }, {
          value: String(var_core_value_sigA01E.Row),
          label: var_core_value_sig495B.t("bases-dashboard-ui.pivot.rows")
        }],
        onChange: var_core_value_sigB683 => {
          let var_core_value_sig26EC = [var_core_value_sigA01E.Column, var_core_value_sigA01E.Row].find(var_core_value_sig7565 => String(var_core_value_sig7565) === var_core_value_sigB683);
          var_core_value_sig26EC !== undefined && var_core_value_sig0E48(var_core_value_sigD4FB => var_core_value_sigD4FB.updateValuePosition(var_core_value_sig26EC, var_core_value_sigD4FB.getValueIndex() < 0 ? 0 : var_core_value_sigD4FB.getValueIndex()));
        }
      })]
    }), var_core_value_sigFD9D("label", {
      className: "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
      children: [var_core_value_sig495B.t("bases-dashboard-ui.pivot.pageWrap"), var_core_value_sigCD6E(var_core_value_sig1C07, {
        className: "univer-w-24",
        min: 1,
        max: 20,
        value: var_core_value_sig310C.pageWrap ?? 1,
        onChange: var_core_value_sigEEDB => {
          let var_core_value_sig36E7 = Number(var_core_value_sigEEDB);
          Number.isFinite(var_core_value_sig36E7) && var_core_value_sig36E7 >= 1 && var_core_value_sig759E({
            pageWrap: var_core_value_sig36E7
          });
        }
      })]
    }), var_core_value_sigFD9D("label", {
      className: "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
      children: [var_core_value_sig495B.t("bases-dashboard-ui.pivot.pageDirection"), var_core_value_sigCD6E(var_core_value_sig3932, {
        className: "univer-w-36",
        value: String(var_core_value_sig310C.pageOverThenDown ?? false),
        options: [{
          value: "false",
          label: var_core_value_sig495B.t("bases-dashboard-ui.pivot.downThenAcross")
        }, {
          value: "true",
          label: var_core_value_sig495B.t("bases-dashboard-ui.pivot.acrossThenDown")
        }],
        onChange: var_core_value_sig6A78 => var_core_value_sig759E({
          pageOverThenDown: var_core_value_sig6A78 === "true"
        })
      })]
    })]
  });
}
function Ai(var_core_value_sig6C80, var_core_value_sig6B99, var_core_value_sig6ADC, var_core_value_sig41AD) {
  let var_core_value_sigDBC2 = var_core_value_sig6C80.getTableFieldsByDataFieldId(var_core_value_sig6B99).find(var_core_value_sigF7EF => var_core_value_sig6C80.getFieldPositionInfoById(var_core_value_sigF7EF.getId()).area !== var_core_value_sig8339.Value);
  if (var_core_value_sig6ADC !== var_core_value_sig8339.Value && var_core_value_sigDBC2) {
    var_core_value_sig6C80.updateFieldPosition(var_core_value_sigDBC2.getId(), var_core_value_sig6ADC, var_core_value_sig41AD);
    return;
  }
  var_core_value_sig6C80.addFieldWithSourceId(var_core_value_sig6B99, var_core_value_sig6ADC, var_core_value_sig41AD);
}
function ji(var_core_value_sig7739, var_core_value_sig4040, var_core_value_sig1AAA, var_core_value_sig58DB) {
  return var_core_value_sig4040 === var_core_value_sig01FC.blank ? var_core_value_sig58DB : var_core_value_sig4040 === var_core_value_sig01FC.date && var_core_value_sig1AAA ? var_core_value_sig9B01.format(var_core_value_sig1AAA, Number(var_core_value_sig7739)) : var_core_value_sig7739;
}
function Mi(var_core_value_sig4840) {
  return var_core_value_sig4840.type === var_core_value_sig933F.Number || var_core_value_sig4840.type === var_core_value_sig933F.Currency || var_core_value_sig4840.type === var_core_value_sig933F.Progress || var_core_value_sig4840.type === var_core_value_sig933F.Rating;
}
function Ni(var_core_value_sigB76D) {
  switch (var_core_value_sigB76D) {
    case var_core_value_sig8339.Row:
      return "bases-dashboard-ui.pivot.addToRow";
    case var_core_value_sig8339.Column:
      return "bases-dashboard-ui.pivot.addToColumn";
    case var_core_value_sig8339.Value:
      return "bases-dashboard-ui.pivot.addToValue";
    default:
      return "bases-dashboard-ui.pivot.addToFilter";
  }
}
function Pi({
  config: var_core_value_sig1015,
  onChange: var_core_value_sig6223,
  runtime: var_core_value_sigC6B6,
  table: var_core_value_sig498A
}) {
  let var_core_value_sigEF45 = var_core_value_sigB77C(var_core_value_sig6C8C),
    [var_core_value_sig36FE, var_core_value_sig3AF5] = var_core_value_sig90CF("chart");
  return var_core_value_sigFD9D("aside", {
    className: "univer-flex univer-h-full univer-min-h-0 univer-w-96 univer-shrink-0 univer-flex-col univer-border-l univer-border-gray-200 univer-bg-gray-0 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    children: [var_core_value_sigCD6E(var_core_value_sig4406, {
      ariaLabel: var_core_value_sigEF45.t("bases-dashboard-ui.pivot.name"),
      className: "univer-mx-auto univer-mt-4 univer-shrink-0",
      items: [{
        label: var_core_value_sigEF45.t("bases-dashboard-ui.pivot.chartConfiguration"),
        panelId: "base-pivot-chart-configuration",
        value: "chart"
      }, {
        label: var_core_value_sigEF45.t("bases-dashboard-ui.pivot.pivotConfiguration"),
        panelId: "base-pivot-table-configuration",
        value: "pivot"
      }],
      value: var_core_value_sig36FE,
      variant: "segmented",
      onChange: var_core_value_sig3AF5
    }), var_core_value_sigCD6E("div", {
      className: "univer-min-h-0\x20univer-flex-1\x20univer-overflow-auto",
      children: var_core_value_sig36FE === "chart" ? var_core_value_sigC6B6 && var_core_value_sigCD6E(Cr, {
        config: var_core_value_sig1015,
        runtime: var_core_value_sigC6B6,
        tableName: var_core_value_sig498A.name,
        onChange: var_core_value_sig6223
      }) : var_core_value_sigCD6E(Si, {
        config: var_core_value_sig1015,
        table: var_core_value_sig498A,
        onChange: var_core_value_sig6223
      })
    })]
  });
}
function Fi({
  pivot: var_core_value_sig14E6,
  view: var_core_value_sig8690
}) {
  let var_core_value_sigDF29 = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sigC0F8 = var_core_value_sig7EAB(() => Ii(var_core_value_sig8690, var_core_value_sig14E6, var_core_value_sigDF29.t("bases-dashboard-ui.pivot.grandTotal")), [var_core_value_sigDF29, var_core_value_sig14E6, var_core_value_sig8690]);
  return var_core_value_sigFD9D("div", {
    className: "univer-h-full univer-overflow-auto univer-bg-gray-0 univer-p-2 dark:!univer-bg-gray-900",
    children: [var_core_value_sigC0F8.pageRows["length"] > 0 && var_core_value_sigCD6E("table", {
      className: "univer-mb-2\x20univer-border-collapse\x20univer-text-sm",
      children: var_core_value_sigCD6E("tbody", {
        children: Li(var_core_value_sigC0F8.pageRows)
      })
    }), var_core_value_sigFD9D("table", {
      className: "univer-min-w-full univer-border-collapse univer-text-sm",
      children: [var_core_value_sigC0F8.headerRowCount > 0 && var_core_value_sigCD6E("thead", {
        className: "univer-sticky\x20univer-top-0\x20univer-z-10\x20univer-bg-gray-50\x20dark:!univer-bg-gray-800",
        children: Li(var_core_value_sigC0F8.rows["slice"](0, var_core_value_sigC0F8.headerRowCount))
      }), var_core_value_sigCD6E("tbody", {
        children: Li(var_core_value_sigC0F8.rows["slice"](var_core_value_sigC0F8.headerRowCount))
      })]
    })]
  });
}
function Ii(var_core_value_sig3C75, var_core_value_sig992D, var_core_value_sigE4E4) {
  let var_core_value_sigA4B0 = var_core_value_sig3C75.colView["rowCount"],
    var_core_value_sig5F50 = var_core_value_sig3C75.rowView["colCount"],
    var_core_value_sig4494 = var_core_value_sig3C75.dataView["rowCount"],
    var_core_value_sigFFAF = var_core_value_sig3C75.dataView["colCount"],
    var_core_value_sig478B = Array.from({
      length: var_core_value_sigA4B0 + var_core_value_sig4494
    }, (var_core_value_sig27F9, var_core_value_sig393E) => Array.from({
      length: var_core_value_sig5F50 + var_core_value_sigFFAF
    }, (var_core_value_sig3E71, var_core_value_sig01B3) => {
      var var_core_value_sig7442, var_core_value_sigDF87;
      if (var_core_value_sig393E < var_core_value_sigA4B0 && var_core_value_sig01B3 < var_core_value_sig5F50) return Ri(var_core_value_sig3C75.cornerView, var_core_value_sig393E, var_core_value_sig01B3, undefined, var_core_value_sigE4E4, true, false, "corner:" + var_core_value_sig393E + ":" + var_core_value_sig01B3);
      if (var_core_value_sig393E < var_core_value_sigA4B0) {
        var var_core_value_sig9EE0;
        let var_core_value_sigE9ED = var_core_value_sig01B3 - var_core_value_sig5F50,
          var_core_value_sigB577 = (var_core_value_sig9EE0 = var_core_value_sig3C75.colView["headerMap"][var_core_value_sig393E]) == null ? undefined : var_core_value_sig9EE0.tableFieldId;
        return Ri(var_core_value_sig3C75.colView, var_core_value_sig393E, var_core_value_sigE9ED, var_core_value_sigB577 ? var_core_value_sig3C75.formatMap[var_core_value_sigB577] : undefined, var_core_value_sigE4E4, true, Vi(var_core_value_sig3C75.colView["info"][var_core_value_sigE9ED]), "column:" + var_core_value_sig393E + ":" + var_core_value_sigE9ED);
      }
      if (var_core_value_sig01B3 < var_core_value_sig5F50) {
        var var_core_value_sigF0511;
        let var_core_value_sig9572 = var_core_value_sig393E - var_core_value_sigA4B0,
          var_core_value_sigD873 = (var_core_value_sigF0511 = var_core_value_sig3C75.rowView["headerMap"][var_core_value_sig01B3]) == null ? undefined : var_core_value_sigF0511.tableFieldId;
        return Ri(var_core_value_sig3C75.rowView, var_core_value_sig9572, var_core_value_sig01B3, var_core_value_sigD873 ? var_core_value_sig3C75.formatMap[var_core_value_sigD873] : undefined, var_core_value_sigE4E4, true, Vi(var_core_value_sig3C75.rowView["info"][var_core_value_sig9572]), "row:" + var_core_value_sig9572 + ":" + var_core_value_sig01B3);
      }
      let var_core_value_sig0B45 = var_core_value_sig393E - var_core_value_sigA4B0,
        var_core_value_sig36F8 = var_core_value_sig01B3 - var_core_value_sig5F50,
        var_core_value_sig03E1 = Math.max(((var_core_value_sig7442 = var_core_value_sig3C75.rowView["info"][var_core_value_sig0B45]) == null ? undefined : var_core_value_sig7442.valueIndex) ?? -1, ((var_core_value_sigDF87 = var_core_value_sig3C75.colView["info"][var_core_value_sig36F8]) == null ? undefined : var_core_value_sigDF87.valueIndex) ?? -1),
        var_core_value_sigBB57 = var_core_value_sig992D.valueFields[var_core_value_sig03E1 < 0 ? 0 : var_core_value_sig03E1];
      return Ri(var_core_value_sig3C75.dataView, var_core_value_sig0B45, var_core_value_sig36F8, var_core_value_sigBB57 ? var_core_value_sig3C75.formatMap[var_core_value_sigBB57] : undefined, var_core_value_sigE4E4, false, Vi(var_core_value_sig3C75.rowView["info"][var_core_value_sig0B45]) || Vi(var_core_value_sig3C75.colView["info"][var_core_value_sig36F8]), "data:" + var_core_value_sig0B45 + ":" + var_core_value_sig36F8);
    }));
  return {
    headerColumnCount: var_core_value_sig5F50,
    headerRowCount: var_core_value_sigA4B0,
    pageRows: var_core_value_sig3C75.pageView["lastRow"] < 0 || var_core_value_sig3C75.pageView["lastCol"] < 0 ? [] : Array.from({
      length: var_core_value_sig3C75.pageView["lastRow"] + 1
    }, (var_core_value_sigB609, var_core_value_sig390D) => Array.from({
      length: var_core_value_sig3C75.pageView["lastCol"] + 1
    }, (var_core_value_sig7C4A, var_core_value_sigE799) => Ri(var_core_value_sig3C75.pageView, var_core_value_sig390D, var_core_value_sigE799, undefined, var_core_value_sigE4E4, true, false, "page:" + var_core_value_sig390D + ":" + var_core_value_sigE799))),
    rows: var_core_value_sig478B
  };
}
function Li(var_core_value_sig1E21) {
  return var_core_value_sig1E21.map(var_core_value_sigC928 => {
    var var_core_value_sig39B7;
    return var_core_value_sigCD6E("tr", {
      children: var_core_value_sigC928.map(var_core_value_sigB601 => var_core_value_sigCD6E(var_core_value_sigB601.isHeader ? "th" : "td", {
        className: "\n univer-whitespace-nowrap univer-border univer-border-gray-200 univer-px-3 univer-py-2\n univer-text-left\n dark:!univer-border-gray-700\n " + (var_core_value_sigB601.isTotal ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20univer-bg-gray-50\x20univer-font-semibold\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dark:!univer-bg-gray-800\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" : "") + "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" + (var_core_value_sigB601.isHeader ? "" : "univer-text-right") + "\n ",
        children: var_core_value_sigB601.value
      }, var_core_value_sigB601.key))
    }, (var_core_value_sig39B7 = var_core_value_sigC928[0]) == null ? undefined : var_core_value_sig39B7.key);
  });
}
function Ri(var_core_value_sig9DBF, var_core_value_sig36CC, var_core_value_sigA568, var_core_value_sigD22D, var_core_value_sig85D5, var_core_value_sig5D2E, var_core_value_sig7221, var_core_value_sig0A5A) {
  var var_core_value_sigE6D6;
  let var_core_value_sig8507 = (var_core_value_sigE6D6 = var_core_value_sig9DBF.data[var_core_value_sig36CC]) == null ? undefined : var_core_value_sigE6D6[var_core_value_sigA568],
    var_core_value_sig8A7F = var_core_value_sig8507 == null ? undefined : var_core_value_sig8507.s,
    var_core_value_sig9E81 = var_core_value_sig7221 || var_core_value_sig8A7F === var_core_value_sig57E2.GrandTotal || var_core_value_sig8A7F === var_core_value_sig57E2.MultipleGrandTotal;
  return {
    isHeader: var_core_value_sig5D2E,
    isTotal: var_core_value_sig9E81 || var_core_value_sig8A7F === var_core_value_sig57E2.Subtotal,
    key: var_core_value_sig0A5A,
    style: var_core_value_sig8A7F,
    value: var_core_value_sig9E81 && Bi(var_core_value_sig8507 == null ? undefined : var_core_value_sig8507.v) ? var_core_value_sig85D5 : zi(var_core_value_sig8507, var_core_value_sigD22D)
  };
}
function zi(var_core_value_sig8295, var_core_value_sigA975) {
  let var_core_value_sig1263 = var_core_value_sig8295 == null ? undefined : var_core_value_sig8295.v;
  return var_core_value_sig939C(var_core_value_sig1263) ? String(var_core_value_sig1263.value ?? var_core_value_sig1263.prefix ?? "") : var_core_value_sigA41E(var_core_value_sig1263) ? "#" + var_core_value_sig1263.errorType : var_core_value_sigA975 && typeof var_core_value_sig1263 == "number" ? var_core_value_sig9B01.format(var_core_value_sigA975, var_core_value_sig1263) : String(var_core_value_sig1263 ?? "");
}
function Bi(var_core_value_sig457C) {
  return var_core_value_sig457C === undefined || var_core_value_sig457C === "";
}
function Vi(var_core_value_sigA4E6) {
  return !!(var_core_value_sigA4E6 != null && var_core_value_sigA4E6.isBottomTotal || var_core_value_sigA4E6 != null && var_core_value_sigA4E6.isTopTotal || var_core_value_sigA4E6 != null && var_core_value_sigA4E6.isSubtotal || (var_core_value_sigA4E6 == null ? undefined : var_core_value_sigA4E6.rowType) === "grandTotal");
}
function Hi({
  tableId: var_core_value_sig934F,
  unitId: var_core_value_sig74A7,
  viewId: var_core_value_sig3685
}) {
  let var_core_value_sigC621 = var_core_value_sigB77C(var_core_value_sigCCE5),
    var_core_value_sig86D7 = var_core_value_sigB77C(var_core_value_sig300B),
    var_core_value_sig431B = var_core_value_sigB77C(var_core_value_sig4E30),
    var_core_value_sig5C7C = var_core_value_sigB77C(var_core_value_sig6C8C),
    var_core_value_sig87E2 = var_core_value_sigB77C(var_core_value_sig9678),
    [var_core_value_sig2E04, var_core_value_sig2EDD] = var_core_value_sig90CF(null),
    [var_core_value_sig27D2, var_core_value_sig355D] = var_core_value_sig90CF(null),
    var_core_value_sig8B21 = var_core_value_sig56B9("base-pivot-chart-" + var_core_value_sig992A(8)),
    [var_core_value_sigEB36, var_core_value_sig5C27] = var_core_value_sig90CF(false),
    var_core_value_sigD494 = var_core_value_sig86D7.getUnit(var_core_value_sig74A7, var_core_value_sigE64C.UNIVER_BASE),
    var_core_value_sigBF6D = var_core_value_sigD494 == null ? undefined : var_core_value_sigD494.getSnapshot().tables[var_core_value_sig934F],
    var_core_value_sigD051 = var_core_value_sigBF6D == null ? undefined : var_core_value_sigBF6D.views[var_core_value_sig3685],
    var_core_value_sig16D9 = Ui(var_core_value_sigD051),
    var_core_value_sigF378 = qn(var_core_value_sig74A7, var_core_value_sig934F, var_core_value_sig3685);
  if (var_core_value_sig5EE4(() => {
    if (!var_core_value_sig16D9) return;
    let var_core_value_sig18E01 = var_core_value_sig8B21.current;
    return var_core_value_sig87E2.acquireChartRuntime(var_core_value_sig18E01, {
      unitId: var_core_value_sig74A7,
      tableId: var_core_value_sig934F,
      viewId: var_core_value_sig3685,
      filters: []
    }), () => {
      var_core_value_sig87E2.releaseChartRuntime(var_core_value_sig74A7, var_core_value_sig18E01);
    };
  }, [var_core_value_sig16D9, var_core_value_sig87E2, var_core_value_sig934F, var_core_value_sig74A7, var_core_value_sig3685]), var_core_value_sig5EE4(() => {
    if (!Ui(var_core_value_sigD051)) return;
    let var_core_value_sigE161 = true,
      var_core_value_sigBDEE = {
        unitId: var_core_value_sig74A7,
        tableId: var_core_value_sig934F,
        viewId: var_core_value_sig3685,
        filters: [var_core_value_sigD051.filter ?? null]
      };
    return var_core_value_sig87E2.refreshChartRuntime(var_core_value_sig74A7, var_core_value_sig8B21.current, var_core_value_sigBDEE).then(var_core_value_sig8B71 => {
      !var_core_value_sigE161 || !var_core_value_sig8B71 || (var_core_value_sig2EDD(var_core_value_sig8B71), var_core_value_sig355D(var_core_value_sig87E2.getChartRuntime(var_core_value_sig74A7, var_core_value_sig8B21.current) ?? null), var_core_value_sig5C27(false));
    }).catch(var_core_value_sigAEFB => {
      var_core_value_sig431B.error("[BasePivotView] Failed to calculate the pivot result.", var_core_value_sigAEFB), var_core_value_sigE161 && (var_core_value_sig2EDD(null), var_core_value_sig5C27(true));
    }), () => {
      var_core_value_sigE161 = false;
    };
  }, [var_core_value_sig431B, var_core_value_sig87E2, var_core_value_sig934F, var_core_value_sig74A7, var_core_value_sigD051, var_core_value_sig3685]), !var_core_value_sigBF6D || !Ui(var_core_value_sigD051)) return null;
  let var_core_value_sig5F6C = var_core_value_sig87E2.getChartRuntime(var_core_value_sig74A7, var_core_value_sig8B21.current) === var_core_value_sig27D2 ? var_core_value_sig27D2 : null;
  return var_core_value_sigFD9D("div", {
    className: "univer-flex\x20univer-h-full\x20univer-min-h-0\x20univer-w-full\x20univer-bg-gray-50\x20dark:!univer-bg-gray-950",
    children: [var_core_value_sigCD6E("div", {
      className: "univer-min-h-0 univer-min-w-0 univer-flex-1",
      children: var_core_value_sig2E04 ? var_core_value_sigFD9D("div", {
        className: "univer-grid\x20univer-h-full\x20univer-min-h-0\x20univer-gap-2\x20univer-p-2",
        style: {
          gridTemplateRows: var_core_value_sigD051.config["displayMode"] === "chart-and-table" ? "minmax(240px, 3fr) minmax(180px, 2fr)" : "minmax(0,\x201fr)"
        },
        children: [var_core_value_sigD051.config["displayMode"] !== "table" && var_core_value_sig5F6C && var_core_value_sigCD6E("div", {
          className: "univer-relative univer-min-h-0 univer-overflow-hidden univer-rounded-lg univer-border univer-border-gray-200 dark:!univer-border-gray-700",
          children: var_core_value_sigCD6E(oi, {
            isRowDirection: var_core_value_sigB64D(var_core_value_sigD051.config["chart"].orient),
            runtime: var_core_value_sig5F6C
          })
        }), var_core_value_sigD051.config["displayMode"] !== "chart" && var_core_value_sigCD6E("div", {
          className: "univer-min-h-0 univer-overflow-hidden univer-rounded-lg univer-border univer-border-gray-200 dark:!univer-border-gray-700",
          children: var_core_value_sigCD6E(Fi, {
            pivot: var_core_value_sigD051.config["pivot"],
            view: var_core_value_sig2E04.view
          })
        })]
      }) : var_core_value_sigCD6E("div", {
        className: "univer-grid univer-h-full univer-place-items-center univer-text-sm univer-text-gray-500",
        children: var_core_value_sigEB36 ? var_core_value_sig5C7C.t("bases-dashboard-ui.pivot.calculationFailed") : var_core_value_sig5C7C.t("bases-dashboard-ui.pivot.calculating")
      })
    }), var_core_value_sigF378 && var_core_value_sigCD6E(Pi, {
      config: var_core_value_sigD051.config,
      runtime: var_core_value_sig5F6C,
      table: var_core_value_sigBF6D,
      onChange: var_core_value_sig1F40 => {
        var_core_value_sigC621.executeCommand(var_core_value_sigDCED.id, {
          unitId: var_core_value_sig74A7,
          tableId: var_core_value_sig934F,
          viewId: var_core_value_sig3685,
          patch: var_core_value_sig1F40
        }).catch(var_core_value_sig826B => var_core_value_sig431B.error("[BasePivotView]\x20Failed\x20to\x20update\x20the\x20pivot\x20view.", var_core_value_sig826B));
      }
    })]
  });
}
function Ui(var_core_value_sig7E85) {
  return (var_core_value_sig7E85 == null ? undefined : var_core_value_sig7E85.type) === var_core_value_sigC7EA.Pivot && typeof var_core_value_sig7E85.config == "object" && var_core_value_sig7E85.config !== null && "pivot" in var_core_value_sig7E85.config && "chart" in var_core_value_sig7E85.config && "displayMode" in var_core_value_sig7E85.config;
}
let Wi = class extends var_core_value_sig9CF7 {
  constructor(var_core_value_sig3FC7, var_core_value_sig1E1B, var_core_value_sig3B10, var_core_value_sig89E6, var_core_value_sig4743, var_core_value_sigEB6A) {
    super(), this.disposeWithMe(var_core_value_sig1E1B.register({
      type: var_core_value_sigC7EA.Pivot,
      renderMode: "dom",
      icon: var_core_value_sig07E7,
      component: Hi,
      menu: {
        get label() {
          return var_core_value_sigEB6A.t("bases-dashboard-ui.pivot.name");
        },
        get description() {
          return var_core_value_sigEB6A.t("bases-dashboard-ui.pivot.description");
        },
        get defaultName() {
          return var_core_value_sigEB6A.t("bases-dashboard-ui.pivot.defaultName");
        }
      }
    })), this.disposeWithMe(var_core_value_sig3FC7.register(Gi(var_core_value_sig3B10, var_core_value_sig89E6, var_core_value_sig4743, var_core_value_sigEB6A)));
  }
};
Wi = yr([X(0, var_core_value_sigBC19), X(1, var_core_value_sig4F3C), X(2, var_core_value_sigB30D(var_core_value_sig5E74)), X(3, var_core_value_sigCCE5), X(4, var_core_value_sig9730), X(5, var_core_value_sigB30D(var_core_value_sig6C8C))], Wi);
function Gi(var_core_value_sigF204, var_core_value_sig7A15, var_core_value_sigEEA6, var_core_value_sigEAE1) {
  return {
    change$: var_core_value_sig8E3E(var_core_value_sigF204.change$, var_core_value_sigEEA6.permissionPointUpdate$),
    component: di,
    get labels() {
      return {
        add: var_core_value_sigEAE1.t("bases-dashboard-ui.dashboard.add"),
        configure: var_core_value_sigCF89 => var_core_value_sigEAE1.t("bases-dashboard-ui.dashboard.configure", var_core_value_sigCF89),
        delete: var_core_value_sigEAE1.t("bases-dashboard-ui.dashboard.delete"),
        new: var_core_value_sigEAE1.t("bases-dashboard-ui.dashboard.new"),
        rename: var_core_value_sigEAE1.t("bases-dashboard-ui.dashboard.rename"),
        search: var_core_value_sigEAE1.t("bases-dashboard-ui.dashboard.search"),
        section: var_core_value_sigEAE1.t("bases-dashboard-ui.dashboard.section")
      };
    },
    getItems: var_core_value_sig3D46 => {
      let var_core_value_sigCC93 = var_core_value_sigF204.getResource(var_core_value_sig3D46);
      return var_core_value_sigCC93.dashboardOrder["flatMap"](var_core_value_sig00CB => {
        let var_core_value_sig77EE = var_core_value_sigCC93.dashboards[var_core_value_sig00CB];
        return var_core_value_sig77EE ? [{
          id: var_core_value_sig77EE.id,
          name: var_core_value_sig77EE.name,
          readonly: !var_core_value_sig6EE2(var_core_value_sigEEA6, var_core_value_sig3D46, var_core_value_sig77EE.id)
        }] : [];
      });
    },
    create: async var_core_value_sig5964 => {
      let var_core_value_sig808B = var_core_value_sigF204.getResource(var_core_value_sig5964),
        var_core_value_sig2A26 = "dashboard-" + var_core_value_sig992A(8),
        var_core_value_sig1179 = Ki(var_core_value_sig808B.dashboardOrder["flatMap"](var_core_value_sig9F76 => {
          let var_core_value_sigB008 = var_core_value_sig808B.dashboards[var_core_value_sig9F76];
          return var_core_value_sigB008 ? [var_core_value_sigB008.name] : [];
        }), var_core_value_sig8721 => var_core_value_sigEAE1.t("bases-dashboard-ui.dashboard.defaultName", String(var_core_value_sig8721)));
      return (await var_core_value_sig7A15.executeCommand(var_core_value_sig639A.id, {
        unitId: var_core_value_sig5964,
        dashboard: {
          id: var_core_value_sig2A26,
          name: var_core_value_sig1179,
          widgetOrder: [],
          widgets: {}
        }
      })) ? var_core_value_sig2A26 : null;
    },
    rename: async (var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5) => {
      let var_core_value_sig7100 = var_core_value_sigF204.getDashboard(var_core_value_sigEA92, var_core_value_sig8FD9);
      return !!(var_core_value_sig7100 && (await var_core_value_sig7A15.executeCommand(var_core_value_sig8078.id, {
        unitId: var_core_value_sigEA92,
        dashboard: {
          ...var_core_value_sig7100,
          name: var_core_value_sig1AE5
        }
      })));
    },
    remove: (var_core_value_sigA19A, var_core_value_sigD3F5) => var_core_value_sig7A15.executeCommand(var_core_value_sig567C.id, {
      unitId: var_core_value_sigA19A,
      dashboardId: var_core_value_sigD3F5
    })
  };
}
function Ki(var_core_value_sigC69F, var_core_value_sig0442) {
  let var_core_value_sig697A = new Set(var_core_value_sigC69F),
    var_core_value_sigDB65 = var_core_value_sig697A.size + 1,
    var_core_value_sig045E = var_core_value_sig0442(var_core_value_sigDB65);
  for (; var_core_value_sig697A.has(var_core_value_sig045E);) var_core_value_sigDB65 += 1, var_core_value_sig045E = var_core_value_sig0442(var_core_value_sigDB65);
  return var_core_value_sig045E;
}
let qi = class extends var_core_value_sig7A5E {
  constructor(var_core_value_sig3082 = Gn, var_core_value_sigF5D1, var_core_value_sig8775) {
    super(), this._config = var_core_value_sig3082, this._injector = var_core_value_sigF5D1, this._configService = var_core_value_sig8775;
    let {
      ...var_core_value_sig481B
    } = var_core_value_sig6281({}, Gn, this._config);
    this._configService["setConfig"]("bases-dashboard-ui.config", var_core_value_sig481B);
  }
  onStarting() {
    this._injector["add"]([ri]), this._injector["add"]([br]), this._injector["add"]([Wi]);
  }
  onReady() {
    var_core_value_sigA724(this._injector, [[ri], [br], [Wi]]);
  }
};
vr(qi, "type", var_core_value_sigE64C.UNIVER_BASE), vr(qi, "pluginName", "BASE_DASHBOARD_UI_PLUGIN"), vr(qi, "packageName", Un), vr(qi, "version", Wn), qi = yr([var_core_value_sigDAB9(var_core_value_sigC125, var_core_value_sig546D, var_core_value_sig8D44, var_core_value_sig4B27, var_core_value_sig8255, var_core_value_sig385E), X(1, var_core_value_sigB30D(var_core_value_sigDB33)), X(2, var_core_value_sig5933)], qi);
export { qi as UniverBaseDashboardUIPlugin };
