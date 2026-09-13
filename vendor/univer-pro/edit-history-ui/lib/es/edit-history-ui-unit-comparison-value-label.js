import { HistorySessionService, HistorySessionStatus, UnitComparisonEntityType, UniverEditHistoryPlugin, getVersionComparison } from "@univerjs-pro/edit-history";
import { BooleanNumber, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IConfirmService, ILogService, Inject, Injector, LOCALE_META, LocaleService, Plugin, ThemeService, UniverInstanceType, VerticalAlign, WrapStrategy, dateKit, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BuiltInUIPart, ComponentManager, IMessageService, ISidebarService, IUIPartsService, UniverUIPlugin, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { Button, MessageType, borderBottomClassName, clsx } from "@univerjs/design";
import { BehaviorSubject } from "rxjs";
import { AiAssistantMultiIcon, ArrowLeftIcon, LoadingMultiIcon, MoreDownIcon, MoreRightIcon } from "@univerjs/icons";
import { Fragment, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { IRenderManagerService, Rect } from "@univerjs/engine-render";
import { I } from "./internal-glue.js";
const Ae = new Set("bl it hd ia hidden readonly visible selectable collapsed showHeader showFooter showGridlines showDropDown stopIfTrue showMasterSp repeatHeaderRow flipX flipY rightToLeft isEmpty isCustom isRichText isTextBox isHorizontal managed pageOverThenDown pageWrap zeroWidthParagraphBreak groupBaseBoundIsLocal"["split"]("\x20")),
  je = new Set(["type", "kind", "subType", "dataType", "fieldDataType", "valueType", "shapeType", "pageType", "routingMode"]),
  Me = {
    string: "textType",
    text: "textType",
    number: "numberType",
    num: "numberType",
    boolean: "booleanType",
    date: "date",
    list: "list",
    listMultiple: "multipleList",
    checkbox: "booleanType",
    calendar: "calendar",
    grid: "grid",
    gallery: "gallery",
    kanban: "kanban",
    timeline: "timeline",
    attachment: "attachment",
    attachments: "attachment",
    rect: "rectangle",
    rectangle: "rectangle",
    ellipse: "ellipse",
    shape: "shape",
    line: "line",
    connector: "connector",
    manual: "manual",
    auto: "automatic",
    automatic: "automatic",
    inline: "inline",
    quote: "quote",
    callout: "callout",
    code: "code",
    brush: "brush",
    wipe: "wipe",
    slide: "slide",
    shapeSite: "shapeSite",
    filledTriangle: "filledTriangle",
    highlightCell: "highlightCell",
    colorScale: "colorScale",
    dataBar: "dataBar",
    iconSet: "iconSet",
    between: "between",
    notBetween: "notBetween",
    equal: "equal",
    notEqual: "notEqual",
    greaterThan: "greaterThan",
    greaterThanOrEqual: "greaterOrEqual",
    lessThan: "lessThan",
    lessThanOrEqual: "lessOrEqual",
    contains: "contains",
    notContains: "notContains",
    beginsWith: "beginsWith",
    endsWith: "endsWith",
    containsText: "contains",
    notContainsText: "notContains",
    left: "left",
    center: "center",
    right: "right",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    solid: "solid",
    dashed: "dashed",
    none: "empty",
    whole: "integer",
    decimal: "decimal",
    time: "time",
    custom: "customFormula",
    textLength: "textLength",
    any: "allValues",
    uniqueValues: "uniqueValues",
    duplicateValues: "duplicateValues",
    rank: "rank",
    average: "average",
    percent: "percent",
    percentile: "percentile",
    min: "min",
    max: "max",
    containsBlanks: "empty",
    notContainsBlanks: "notEmpty",
    containsErrors: "error"
  },
  Ne = {
    [CellValueType.STRING]: "textType",
    [CellValueType.NUMBER]: "numberType",
    [CellValueType.BOOLEAN]: "booleanType",
    [CellValueType.FORCE_STRING]: "forceString"
  },
  P = {
    [HorizontalAlign.UNSPECIFIED]: "automatic",
    [HorizontalAlign.LEFT]: "left",
    [HorizontalAlign.CENTER]: "center",
    [HorizontalAlign.RIGHT]: "right",
    [HorizontalAlign.JUSTIFIED]: "justified",
    [HorizontalAlign.BOTH]: "justified",
    [HorizontalAlign.DISTRIBUTED]: "distributed"
  },
  F = {
    [VerticalAlign.UNSPECIFIED]: "automatic",
    [VerticalAlign.TOP]: "top",
    [VerticalAlign.MIDDLE]: "middle",
    [VerticalAlign.BOTTOM]: "bottom"
  },
  Pe = {
    [WrapStrategy.UNSPECIFIED]: "automatic",
    [WrapStrategy.WRAP]: "wrap",
    [WrapStrategy.OVERFLOW]: "overflow",
    [WrapStrategy.CLIP]: "clip"
  },
  Fe = {
    ht: P,
    ha: P,
    horizontalAlign: P,
    vt: F,
    va: F,
    verticalAlign: F,
    tb: Pe,
    wrapStrategy: Pe,
    fillType: {
      1: "empty",
      2: "solid",
      3: "gradient",
      4: "pattern",
      5: "image"
    },
    lineStrokeType: {
      1: "empty",
      2: "solid",
      3: "gradient"
    },
    chartType: {
      0: "empty",
      2: "lineChart",
      4: "columnChart",
      8: "pieChart",
      16: "areaChart",
      32: "radarChart",
      64: "scatterChart",
      128: "combinationChart",
      264: "doughnutChart",
      512: "wordCloudChart",
      1024: "funnelChart",
      2048: "bubbleChart",
      4096: "relationChart",
      8192: "waterfallChart",
      16384: "paretoChart",
      32768: "sankeyChart",
      65536: "heatmapChart",
      131072: "boxplotChart",
      262144: "candlestickChart",
      524288: "histogramChart",
      1048576: "treemapChart",
      2097152: "sunburstChart",
      4194304: "gaugeChart",
      8388608: "chordChart",
      268435460: "barChart",
      1073741828: "stackedColumnChart",
      1073741840: "stackedAreaChart",
      1342177284: "stackedBarChart",
      1610612740: "percentStackedColumnChart",
      1610612752: "percentStackedAreaChart",
      1879048196: "percentStackedBarChart"
    }
  };
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.length === 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.split(":")[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.length - 1];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 === UnitComparisonEntityType.RECORD || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 === UnitComparisonEntityType.CELL && !["style", "valueType"].includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296[0]) || ["text", "value", "formula", "formula1", "formula2", "name", "content", "title", "label", "url"].includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299)) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 == "string" && /^\d+$/u.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297) ? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 = Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 !== undefined) return I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 === UnitComparisonEntityType.TABLE && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 === "displayName" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 == "string") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 = /^sheets-table\.columnPrefix (\d+)$/u.exec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658) return I("columnNumber", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658[1]);
  }
}
function Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312;
  if (Ae.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 === BooleanNumber.TRUE || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 === "true" ? "enabled" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 === BooleanNumber.FALSE || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 === "false" ? "disabled" : undefined;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 === UnitComparisonEntityType.CELL && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 === "valueType") return Ne[Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310)];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = Fe[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312[Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310)];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313;
  if (je.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 === "operator" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 === "direction") return Me[String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311)];
}
export { Ie as getUnitComparisonValueLabel };
