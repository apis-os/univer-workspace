Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/edit-history"),
  t = require("@univerjs/core"),
  n = require("@univerjs-pro/license"),
  r = require("@univerjs/ui"),
  i = require("@univerjs/design"),
  a = require("rxjs"),
  o = require("@univerjs/icons"),
  s = require("react"),
  c = require("react/jsx-runtime"),
  l = require("@univerjs/engine-render");
const u = {
  [e.UnitComparisonEntityType["UNIT"]]: "unit",
  [e.UnitComparisonEntityType["WORKBOOK"]]: "workbook",
  [e.UnitComparisonEntityType["WORKSHEET"]]: "worksheet",
  [e.UnitComparisonEntityType["CELL"]]: "cell",
  [e.UnitComparisonEntityType["ROW_COLUMN"]]: "rowColumn",
  [e.UnitComparisonEntityType["MOVE"]]: "move",
  [e.UnitComparisonEntityType["CONDITION_FORMAT"]]: "conditionFormat",
  [e.UnitComparisonEntityType["DATA_VALIDATION"]]: "dataValidation",
  [e.UnitComparisonEntityType["SPARKLINE"]]: "sparkline",
  [e.UnitComparisonEntityType["TABLE"]]: "table",
  [e.UnitComparisonEntityType["SHAPE"]]: "shape",
  [e.UnitComparisonEntityType["CHART"]]: "chart",
  [e.UnitComparisonEntityType["PIVOT"]]: "pivot",
  [e.UnitComparisonEntityType["PARAGRAPH"]]: "paragraph",
  [e.UnitComparisonEntityType["TEXT_STYLE"]]: "styles",
  [e.UnitComparisonEntityType["SECTION"]]: "section",
  [e.UnitComparisonEntityType["BLOCK_RANGE"]]: "range",
  [e.UnitComparisonEntityType["CUSTOM_RANGE"]]: "range",
  [e.UnitComparisonEntityType["TABLE_RANGE"]]: "range",
  [e.UnitComparisonEntityType["CUSTOM_BLOCK"]]: "block",
  [e.UnitComparisonEntityType["COLUMN_GROUP"]]: "columnGroup",
  [e.UnitComparisonEntityType["DRAWING"]]: "drawing",
  [e.UnitComparisonEntityType["HEADER"]]: "header",
  [e.UnitComparisonEntityType["FOOTER"]]: "footer",
  [e.UnitComparisonEntityType["DOCUMENT_STYLE"]]: "styles",
  [e.UnitComparisonEntityType["DOCUMENT_SETTING"]]: "settings",
  [e.UnitComparisonEntityType["CUSTOM_DECORATION"]]: "decoration",
  [e.UnitComparisonEntityType["DOC_HYPERLINK"]]: "link",
  [e.UnitComparisonEntityType["DOC_CALLOUT"]]: "callout",
  [e.UnitComparisonEntityType["DOC_QUOTE"]]: "quote",
  [e.UnitComparisonEntityType["DOC_CHART"]]: "chart",
  [e.UnitComparisonEntityType["DOC_CHART_DATA"]]: "chartData",
  [e.UnitComparisonEntityType["DOC_CODE"]]: "code",
  [e.UnitComparisonEntityType["DOC_LATEX"]]: "formula",
  [e.UnitComparisonEntityType["DOC_SHAPE_RESOURCE"]]: "shape",
  [e.UnitComparisonEntityType["DOC_TABLE_RESOURCE"]]: "table",
  [e.UnitComparisonEntityType["SLIDE"]]: "slide",
  [e.UnitComparisonEntityType["SLIDE_ELEMENT"]]: "slideElement",
  [e.UnitComparisonEntityType["SLIDE_TRANSITION"]]: "transition",
  [e.UnitComparisonEntityType["SLIDE_TRANSITION_REFERENCE"]]: "transitionReference",
  [e.UnitComparisonEntityType["SLIDE_MASTER"]]: "slideMaster",
  [e.UnitComparisonEntityType["SLIDE_LAYOUT"]]: "slideLayout",
  [e.UnitComparisonEntityType["SLIDE_THEME"]]: "theme",
  [e.UnitComparisonEntityType["SLIDE_CHART"]]: "chart",
  [e.UnitComparisonEntityType["SLIDE_CHART_DATA"]]: "chartData",
  [e.UnitComparisonEntityType["SLIDE_TABLE"]]: "table",
  [e.UnitComparisonEntityType["BASE"]]: "base",
  [e.UnitComparisonEntityType["FIELD"]]: "field",
  [e.UnitComparisonEntityType["RECORD"]]: "record",
  [e.UnitComparisonEntityType["VIEW"]]: "view",
  [e.UnitComparisonEntityType["BOARD_PAGE"]]: "boardPage",
  [e.UnitComparisonEntityType["BOARD_ELEMENT"]]: "boardElement",
  [e.UnitComparisonEntityType["BOARD_THEME"]]: "theme",
  [e.UnitComparisonEntityType["BOARD_CHART"]]: "chart",
  [e.UnitComparisonEntityType["BOARD_CHART_DATA"]]: "chartData",
  [e.UnitComparisonEntityType["BOARD_TABLE"]]: "table"
};
function d(var_core_value_sigB008) {
  return "edit-history-ui.comparison." + var_core_value_sigB008;
}
function f(var_core_value_sig8721) {
  let var_core_value_sig08BA = var_core_value_sig8721.split(":")[0];
  return D(u[var_core_value_sig08BA] ?? "content");
}
const p = Object.fromEntries(Object.entries({
    type: "type t kind subType rangeType pageType autoFitType hRule capType lineJoinType",
    valueType: "valueType",
    dataType: "dataType\x20fieldDataType\x20dataFieldType",
    displayName: "displayName\x20displayNameRecord\x20label\x20placeholder\x20description\x20sourceName",
    metadata: "meta custom system managed resources context dataModel sourceModel structureRevision structureScopeId structured semanticRole modeId version customFields",
    identity: "id uid cfId paragraphId sectionId __record_id",
    reference: "unitId subUnitId sheetId tableId fieldId fieldIds dataFieldId parentId parentNodeId childNodeId shapeId listId primaryFieldId startDateFieldId layoutPageId masterPageId connectionSiteId rangeKey orderKey",
    property: "property\x20properties",
    field: "field fields fieldSettings fieldsConfig fieldOrder columnFields rowFields valueFields filterFields hiddenFields",
    record: "record records dataRecordCount",
    settings: "config options settings renderConfig controls showDataAs valuePosition valueFilter",
    source: "source sourceRangeInfo from collection",
    target: "target targetCellInfo to",
    rowHeight: "h\x20ah\x20rowHeight\x20defaultRowHeight\x20trHeight",
    columnWidth: "w defaultColumnWidth",
    hidden: "hd hidden hiddenFields collapseInfo collapsed",
    rotation: "angle rotation skewX skewY",
    opacity: "opacity",
    fill: "fill fillType",
    border: "bd border borderLeft borderRight borderTop borderBottom",
    line: "stroke lineStrokeType strokeWidth lineJoinType capType cornerStyle",
    width: "width minWidth",
    height: "height\x20minHeight",
    range: "range ranges rangeInfo sourceRangeInfo mergeData endAbsoluteRefType startAbsoluteRefType",
    theme: "theme tableStyleId palette branchColorKey",
    layout: "geometry transform sheetTransform axisAlignSheetTransform layout rect groupBaseBoundIsLocal customGeometry pathLst adjustValues adj textRectPadding",
    paragraph: "paragraph paragraphs paragraphStyle bullet listType nestingLevel zeroWidthParagraphBreak",
    section: "section sectionBreaks",
    header: "header columnHeader rowHeader showHeader repeatHeaderRow",
    footer: "footer showFooter",
    code: "code language",
    columns: "columns column col columnOffset",
    table: "table\x20tables\x20tableRows\x20tableCells\x20cells",
    shape: "shape\x20shapeData\x20drawings\x20drawingsOrder\x20shapeType",
    chart: "chart\x20chartType\x20seriesIndexes\x20dimension\x20measure\x20subtotal",
    transition: "transition",
    duration: "duration",
    direction: "direction\x20textDirection\x20rightToLeft\x20flipX\x20flipY\x20isHorizontal\x20horizontalAlign\x20verticalAlign\x20ht\x20vt\x20ha\x20va\x20side",
    gradient: "gradientStops gradientAngle gradientType",
    connector: "connectorData routing routingMode endMarker startMarker fallbackPoint waypoints points curveData tension",
    mindmap: "mindmap",
    swimlane: "swimlane lanes containerData",
    brush: "ink\x20tool",
    attachment: "attachments attachmentSets customBlocks",
    readOnly: "readonly",
    offset: "offset rowOffset columnOffset scrollLeft scrollTop xSplit ySplit x y position left top right bottom l r b",
    order: "order fieldOrder pageOverThenDown valueIndex",
    size: "size fontSize fs zoomRatio dataRecordCount rowSpan columnSpan",
    spacing: "gap marginTop marginBottom marginLeft marginRight",
    revision: "rev revision",
    font: "ff font fontFamily",
    link: "url link",
    group: "group\x20children\x20parent\x20child\x20groupBaseBoundIsLocal",
    list: "list tableColumnFilterList filters filter",
    wrap: "tb wrapStrategy textWrap pageWrap",
    automatic: "ia automatic autoFitType",
    textType: "body\x20doc\x20documentStyle\x20shapeText\x20textData\x20textRuns\x20textStyle\x20ts\x20st\x20ed\x20v\x20val\x20value\x20values\x20content\x20customRanges\x20customDecorations\x20decorations\x20data\x20text",
    enabled: "visible selectable showDropDown showGridlines stopIfTrue showMasterSp isEmpty isCustom isRichText isTextBox freeze frozenFieldCount",
    automaticHeight: "ia",
    row: "row\x20rows",
    start: "start startIndex st",
    end: "end ed",
    operator: "operator",
    rule: "rule",
    color: "color rgb hexCode tabColor backgroundColor",
    title: "title titles",
    displayMode: "displayMode",
    visible: "visible",
    selectable: "selectable",
    freeze: "freeze\x20frozenFieldCount",
    stopIfTrue: "stopIfTrue",
    showGridlines: "showGridlines",
    showDropDown: "showDropDown",
    custom: "isCustom\x20custom",
    count: "count",
    isEmpty: "isEmpty"
  }).flatMap(([var_core_value_sigDBB5, var_core_value_sigCFAC]) => var_core_value_sigCFAC.split("\x20").map(var_core_value_sigF4B9 => [var_core_value_sigF4B9, var_core_value_sigDBB5]))),
  m = {
    text: "textType",
    value: "value",
    formula: "formula",
    formulaName: "formulaName",
    formula1: "formula",
    formula2: "formula",
    name: "displayName",
    language: "language",
    columns: "column",
    rowCount: "rowCount",
    columnCount: "columnCount",
    bg: "background",
    backgroundColor: "background",
    cl: "textColor",
    fs: "fontSize",
    bl: "bold",
    it: "italic",
    style: "styles",
    n: "numberFormat",
    left: "horizontalPosition",
    x: "horizontalPosition",
    top: "verticalPosition",
    y: "verticalPosition",
    sparklines: "sparkline",
    tableRows: "row",
    tableCells: "cell",
    content: "content",
    sheetName: "displayName",
    sheetId: "identity",
    pattern: "pattern",
    hexCode: "color",
    color: "color",
    startIndex: "start",
    start: "start",
    end: "end",
    count: "count",
    isEmpty: "isEmpty",
    row: "row",
    rows: "row",
    from: "source",
    to: "target",
    data: "textType",
    latex: "formula"
  },
  h = {
    startRow: ["start", "row"],
    endRow: ["end", "row"],
    startColumn: ["start", "column"],
    endColumn: ["end", "column"]
  };
function g(var_core_value_sig237B) {
  return var_core_value_sig237B.length === 0 ? [D("item")] : var_core_value_sig237B.flatMap(var_core_value_sig5CEE => /^\d+$/u.test(var_core_value_sig5CEE) ? D("itemNumber", String(Number(var_core_value_sig5CEE) + 1)) : (h[var_core_value_sig5CEE] ?? [m[var_core_value_sig5CEE] ?? p[var_core_value_sig5CEE] ?? "unknown"]).map(var_core_value_sigF0F9 => D(var_core_value_sigF0F9)));
}
const _ = new Set("bl it hd ia hidden readonly visible selectable collapsed showHeader showFooter showGridlines showDropDown stopIfTrue showMasterSp repeatHeaderRow flipX flipY rightToLeft isEmpty isCustom isRichText isTextBox isHorizontal managed pageOverThenDown pageWrap zeroWidthParagraphBreak groupBaseBoundIsLocal"["split"]("\x20")),
  v = new Set(["type", "kind", "subType", "dataType", "fieldDataType", "valueType", "shapeType", "pageType", "routingMode"]),
  y = {
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
  b = {
    [t.CellValueType["STRING"]]: "textType",
    [t.CellValueType["NUMBER"]]: "numberType",
    [t.CellValueType["BOOLEAN"]]: "booleanType",
    [t.CellValueType["FORCE_STRING"]]: "forceString"
  },
  x = {
    [t.HorizontalAlign["UNSPECIFIED"]]: "automatic",
    [t.HorizontalAlign["LEFT"]]: "left",
    [t.HorizontalAlign["CENTER"]]: "center",
    [t.HorizontalAlign["RIGHT"]]: "right",
    [t.HorizontalAlign["JUSTIFIED"]]: "justified",
    [t.HorizontalAlign["BOTH"]]: "justified",
    [t.HorizontalAlign["DISTRIBUTED"]]: "distributed"
  },
  S = {
    [t.VerticalAlign["UNSPECIFIED"]]: "automatic",
    [t.VerticalAlign["TOP"]]: "top",
    [t.VerticalAlign["MIDDLE"]]: "middle",
    [t.VerticalAlign["BOTTOM"]]: "bottom"
  },
  C = {
    [t.WrapStrategy["UNSPECIFIED"]]: "automatic",
    [t.WrapStrategy["WRAP"]]: "wrap",
    [t.WrapStrategy["OVERFLOW"]]: "overflow",
    [t.WrapStrategy["CLIP"]]: "clip"
  },
  w = {
    ht: x,
    ha: x,
    horizontalAlign: x,
    vt: S,
    va: S,
    verticalAlign: S,
    tb: C,
    wrapStrategy: C,
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
function T(var_core_value_sigFEAB, var_core_value_sigE347, var_core_value_sig3C5B) {
  if (var_core_value_sig3C5B == null || var_core_value_sigE347.length === 0) return;
  let var_core_value_sig200B = var_core_value_sigFEAB.split(":")[0],
    var_core_value_sig3863 = var_core_value_sigE347[var_core_value_sigE347.length - 1];
  if (var_core_value_sig200B === e.UnitComparisonEntityType["RECORD"] || var_core_value_sig200B === e.UnitComparisonEntityType["CELL"] && !["style", "valueType"].includes(var_core_value_sigE347[0]) || ["text", "value", "formula", "formula1", "formula2", "name", "content", "title", "label", "url"].includes(var_core_value_sig3863)) return;
  let var_core_value_sigC97C = typeof var_core_value_sig3C5B == "string" && /^\d+$/u.test(var_core_value_sig3C5B) ? Number(var_core_value_sig3C5B) : var_core_value_sig3C5B,
    var_core_value_sigC4B1 = E(var_core_value_sig200B, var_core_value_sigE347.length, var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sig3C5B);
  if (var_core_value_sigC4B1 !== undefined) return D(var_core_value_sigC4B1);
  if (var_core_value_sig200B === e.UnitComparisonEntityType["TABLE"] && var_core_value_sig3863 === "displayName" && typeof var_core_value_sig3C5B == "string") {
    let var_core_value_sigE92A = /^sheets-table\.columnPrefix (\d+)$/u.exec(var_core_value_sig3C5B);
    if (var_core_value_sigE92A) return D("columnNumber", var_core_value_sigE92A[1]);
  }
}
function E(var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigE503) {
  var var_core_value_sig48DD;
  if (_.has(var_core_value_sigA937)) return var_core_value_sigCAD5 === true || var_core_value_sigCAD5 === t.BooleanNumber["TRUE"] || var_core_value_sigCAD5 === "true" ? "enabled" : var_core_value_sigCAD5 === false || var_core_value_sigCAD5 === t.BooleanNumber["FALSE"] || var_core_value_sigCAD5 === "false" ? "disabled" : undefined;
  if (var_core_value_sig1BD9 === e.UnitComparisonEntityType["CELL"] && var_core_value_sigE43E === 1 && var_core_value_sigA937 === "valueType") return b[Number(var_core_value_sigCAD5)];
  let var_core_value_sig5E6A = (var_core_value_sig48DD = w[var_core_value_sigA937]) == null ? undefined : var_core_value_sig48DD[Number(var_core_value_sigCAD5)];
  if (var_core_value_sig5E6A !== undefined) return var_core_value_sig5E6A;
  if (v.has(var_core_value_sigA937) || var_core_value_sigA937 === "operator" || var_core_value_sigA937 === "direction") return y[String(var_core_value_sigE503)];
}
function D(var_core_value_sigB7FC, ...var_core_value_sig9CD9) {
  return {
    key: d(var_core_value_sigB7FC),
    ...(var_core_value_sig9CD9.length ? {
      args: var_core_value_sig9CD9
    } : {})
  };
}
const O = "edit-history-ui.config",
  k = {
    viewerMode: false,
    canRestore: false
  };
var A = "@univerjs-pro/edit-history-ui",
  j = "1.0.0-insiders.20260907-70fc579";
function M(var_core_value_sigFD0C) {
  "@babel/helpers - typeof";

  return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig362B) {
    return typeof var_core_value_sig362B;
  } : function (var_core_value_sig5CA5) {
    return var_core_value_sig5CA5 && typeof Symbol == "function" && var_core_value_sig5CA5.constructor === Symbol && var_core_value_sig5CA5 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig5CA5;
  }, M(var_core_value_sigFD0C);
}
function ee(var_core_value_sig849B, var_core_value_sig5F1A) {
  if (M(var_core_value_sig849B) != "object" || !var_core_value_sig849B) return var_core_value_sig849B;
  var var_core_value_sigB455 = var_core_value_sig849B[Symbol.toPrimitive];
  if (var_core_value_sigB455 !== undefined) {
    var var_core_value_sig5241 = var_core_value_sigB455.call(var_core_value_sig849B, var_core_value_sig5F1A || "default");
    if (M(var_core_value_sig5241) != "object") return var_core_value_sig5241;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig5F1A === "string" ? String : Number)(var_core_value_sig849B);
}
function te(var_core_value_sigC6E5) {
  var var_core_value_sigCEFB = ee(var_core_value_sigC6E5, "string");
  return M(var_core_value_sigCEFB) == "symbol" ? var_core_value_sigCEFB : var_core_value_sigCEFB + "";
}
function N(var_core_value_sig1537, var_core_value_sigE4C6, var_core_value_sig4313) {
  return (var_core_value_sigE4C6 = te(var_core_value_sigE4C6)) in var_core_value_sig1537 ? Object.defineProperty(var_core_value_sig1537, var_core_value_sigE4C6, {
    value: var_core_value_sig4313,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig1537[var_core_value_sigE4C6] = var_core_value_sig4313, var_core_value_sig1537;
}
var P = class extends t.Disposable {
  constructor(...var_core_value_sigE90F) {
    super(...var_core_value_sigE90F), N(this, "_adapters", new Map());
  }
  register(var_core_value_sigEFD4) {
    if (this._adapters["has"](var_core_value_sigEFD4.type)) throw Error("[HistoryRenderAdapterRegistryService]:\x20Adapter\x20for\x20unit\x20type\x20" + var_core_value_sigEFD4.type + " is already registered.");
    return this._adapters["set"](var_core_value_sigEFD4.type, var_core_value_sigEFD4), (0, t.toDisposable)(() => {
      this._adapters["get"](var_core_value_sigEFD4.type) === var_core_value_sigEFD4 && this._adapters["delete"](var_core_value_sigEFD4.type);
    });
  }
  get(var_core_value_sig861B) {
    return this._adapters["get"](var_core_value_sig861B);
  }
  dispose() {
    this._adapters["clear"](), super.dispose();
  }
};
function F(var_core_value_sigFC87, var_core_value_sig156F) {
  return function (var_core_value_sig5237, var_core_value_sigBB00) {
    var_core_value_sig156F(var_core_value_sig5237, var_core_value_sigBB00, var_core_value_sigFC87);
  };
}
function I(var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sig9FBA) {
  var var_core_value_sigFE01 = arguments.length,
    var_core_value_sigA2CE = var_core_value_sigFE01 < 3 ? var_core_value_sigF057 : var_core_value_sig9FBA === null ? var_core_value_sig9FBA = Object.getOwnPropertyDescriptor(var_core_value_sigF057, var_core_value_sig72F6) : var_core_value_sig9FBA,
    var_core_value_sig1975;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigA2CE = Reflect.decorate(var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sig9FBA);else {
    for (var var_core_value_sig6EA1 = var_core_value_sigDD51.length - 1; var_core_value_sig6EA1 >= 0; var_core_value_sig6EA1--) (var_core_value_sig1975 = var_core_value_sigDD51[var_core_value_sig6EA1]) && (var_core_value_sigA2CE = (var_core_value_sigFE01 < 3 ? var_core_value_sig1975(var_core_value_sigA2CE) : var_core_value_sigFE01 > 3 ? var_core_value_sig1975(var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sigA2CE) : var_core_value_sig1975(var_core_value_sigF057, var_core_value_sig72F6)) || var_core_value_sigA2CE);
  }
  return var_core_value_sigFE01 > 3 && var_core_value_sigA2CE && Object.defineProperty(var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sigA2CE), var_core_value_sigA2CE;
}
let L = class extends t.Disposable {
  constructor(var_core_value_sig7E54, var_core_value_sig9A8D) {
    super(), this._session = var_core_value_sig7E54, this._adapterRegistry = var_core_value_sig9A8D, N(this, "_loading$", new a["BehaviorSubject"](false)), N(this, "loading$", this._loading$["asObservable"]()), N(this, "_adapter", null), N(this, "_openGeneration", 0), N(this, "_selectionGeneration", 0);
  }
  async open(var_core_value_sigC259) {
    var var_core_value_sig9C9F;
    let var_core_value_sigFDEA = this._adapterRegistry["get"](var_core_value_sigC259.type);
    if (!var_core_value_sigFDEA) throw Error("[HistoryUIService]: No render adapter is registered for unit type " + var_core_value_sigC259.type + ".");
    let var_core_value_sig86D0 = ++this._openGeneration;
    if (++this._selectionGeneration, (var_core_value_sig9C9F = this._adapter) == null || var_core_value_sig9C9F.close(), this._adapter = var_core_value_sigFDEA, await this._session["open"](var_core_value_sigC259), var_core_value_sig86D0 !== this._openGeneration) return;
    let var_core_value_sig4CD2 = this._session["currentVersion"];
    var_core_value_sig4CD2 && (await this.selectVersion(var_core_value_sig4CD2));
  }
  async selectVersion(var_core_value_sig48CA) {
    let var_core_value_sig50AF = this._session["descriptor"],
      var_core_value_sigA942 = this._adapter;
    if (!var_core_value_sig50AF || !var_core_value_sigA942) return;
    let var_core_value_sigA621 = this._session["selectVersion"](var_core_value_sig48CA),
      var_core_value_sigBBFF = ++this._selectionGeneration;
    this._loading$["next"](true);
    try {
      let var_core_value_sig1A0F = (0, e.getVersionComparison)(var_core_value_sigA621);
      if (await var_core_value_sigA942.loadRevision(var_core_value_sig50AF.unitId, var_core_value_sigA621), var_core_value_sigBBFF !== this._selectionGeneration) return;
      await var_core_value_sigA942.loadChanges(var_core_value_sig50AF.unitId, var_core_value_sig1A0F);
    } catch (var_core_value_sigFBA4) {
      if (var_core_value_sigBBFF === this._selectionGeneration) throw var_core_value_sigFBA4;
    } finally {
      var_core_value_sigBBFF === this._selectionGeneration && this._loading$["next"](false);
    }
  }
  close() {
    var var_core_value_sig8889;
    ++this._openGeneration, ++this._selectionGeneration, (var_core_value_sig8889 = this._adapter) == null || var_core_value_sig8889.close(), this._adapter = null, this._session["close"](), this._loading$["next"](false);
  }
  dispose() {
    this.close(), this._loading$["complete"](), super.dispose();
  }
};
L = I([F(0, (0, t.Inject)(e.HistorySessionService)), F(1, (0, t.Inject)(P))], L);
var R = class extends t.Disposable {
  constructor(...var_core_value_sig32F8) {
    super(...var_core_value_sig32F8), N(this, "_resolvers", new Map());
  }
  register(var_core_value_sig5B67, var_core_value_sig1758) {
    if (this._resolvers["has"](var_core_value_sig5B67)) throw Error("[HistoryActionSummaryService]: Resolver for " + var_core_value_sig5B67 + " has already been registered.");
    return this._resolvers["set"](var_core_value_sig5B67, var_core_value_sig1758), (0, t.toDisposable)(() => {
      this._resolvers["get"](var_core_value_sig5B67) === var_core_value_sig1758 && this._resolvers["delete"](var_core_value_sig5B67);
    });
  }
  resolve(var_core_value_sig4805, var_core_value_sigE67E) {
    if (var_core_value_sig4805 === undefined) return [];
    let var_core_value_sig2902 = this._resolvers["get"](var_core_value_sig4805);
    return var_core_value_sig2902 ? var_core_value_sig2902.resolve({
      version: var_core_value_sigE67E,
      commandIds: new Set(var_core_value_sigE67E.commands),
      mutations: var_core_value_sigE67E.mutations ?? []
    }).filter(Boolean) : [];
  }
  dispose() {
    this._resolvers["clear"](), super.dispose();
  }
};
function z(var_core_value_sig029F) {
  let {
      versions: var_core_value_sig3767,
      currentVersion: var_core_value_sig670B,
      loading: var_core_value_sig6912,
      onLoadDetails: var_core_value_sigE235,
      onSelectVersion: var_core_value_sig7664,
      onError: var_core_value_sig2281
    } = var_core_value_sig029F,
    [var_core_value_sig5E86, var_core_value_sig6998] = (0, s.useState)(() => new Set()),
    [var_core_value_sigF639, var_core_value_sigEAE5] = (0, s.useState)(() => new Map()),
    [var_core_value_sigE94C, var_core_value_sig6D47] = (0, s.useState)(() => new Set()),
    var_core_value_sigCB82 = (0, r.useDependency)(t.LocaleService),
    var_core_value_sigCF4E = (0, s.useMemo)(() => re(var_core_value_sig3767), [var_core_value_sig3767]),
    var_core_value_sig6CAD = async var_core_value_sig9989 => {
      if (var_core_value_sig5E86.has(var_core_value_sig9989.id)) {
        var_core_value_sig6998(var_core_value_sigC9E0 => {
          let var_core_value_sig76BA = new Set(var_core_value_sigC9E0);
          return var_core_value_sig76BA.delete(var_core_value_sig9989.id), var_core_value_sig76BA;
        });
        return;
      }
      if (!var_core_value_sigF639.has(var_core_value_sig9989.id)) {
        var_core_value_sig6D47(var_core_value_sigFBFA => new Set(var_core_value_sigFBFA).add(var_core_value_sig9989.id));
        try {
          let var_core_value_sigF602 = await var_core_value_sigE235(var_core_value_sig9989.id);
          var_core_value_sigEAE5(var_core_value_sig3D7D => new Map(var_core_value_sig3D7D).set(var_core_value_sig9989.id, var_core_value_sigF602));
        } catch (var_core_value_sig1BBD) {
          var_core_value_sig2281(var_core_value_sig1BBD);
          return;
        } finally {
          var_core_value_sig6D47(var_core_value_sig27E5 => {
            let var_core_value_sig8061 = new Set(var_core_value_sig27E5);
            return var_core_value_sig8061.delete(var_core_value_sig9989.id), var_core_value_sig8061;
          });
        }
      }
      var_core_value_sig6998(var_core_value_sig4383 => new Set(var_core_value_sig4383).add(var_core_value_sig9989.id));
    };
  return var_core_value_sig3767.length ? var_core_value_sigCF4E.map(var_core_value_sig698E => (0, c.jsxs)(s.Fragment, {
    children: [(0, c.jsx)("div", {
      className: "univer-flex univer-items-center univer-gap-2.5 univer-pt-1.5 univer-text-sm univer-font-medium",
      children: ie(var_core_value_sig698E.date, var_core_value_sigCB82)
    }), var_core_value_sig698E.versions["map"](var_core_value_sig186C => {
      let var_core_value_sigD955 = var_core_value_sig5E86.has(var_core_value_sig186C.id),
        var_core_value_sig48BD = var_core_value_sigF639.get(var_core_value_sig186C.id) ?? [];
      return (0, c.jsxs)(s.Fragment, {
        children: [(0, c.jsx)(B, {
          version: var_core_value_sig186C,
          active: (var_core_value_sig670B == null ? undefined : var_core_value_sig670B.id) === var_core_value_sig186C.id,
          expanded: var_core_value_sigD955,
          loading: var_core_value_sig6912,
          loadingDetails: var_core_value_sigE94C.has(var_core_value_sig186C.id),
          localeService: var_core_value_sigCB82,
          onSelect: var_core_value_sig7664,
          onToggle: var_core_value_sig6CAD
        }), var_core_value_sigD955 && var_core_value_sig48BD.map((var_core_value_sigF704, var_core_value_sig2BCF) => (0, c.jsxs)("div", {
          className: "univer-relative\x20!univer-mb-0\x20!univer-mt-0",
          children: [(0, c.jsx)(ne, {
            last: var_core_value_sig2BCF === var_core_value_sig48BD.length - 1
          }), (0, c.jsx)(B, {
            version: var_core_value_sigF704,
            active: (var_core_value_sig670B == null ? undefined : var_core_value_sig670B.id) === var_core_value_sigF704.id,
            loading: var_core_value_sig6912,
            localeService: var_core_value_sigCB82,
            onSelect: var_core_value_sig7664
          })]
        }, var_core_value_sigF704.id))]
      }, var_core_value_sig186C.id);
    })]
  }, var_core_value_sig698E.date)) : (0, c.jsx)("div", {
    className: "univer-flex\x20univer-flex-1\x20univer-items-center\x20univer-justify-center\x20univer-text-gray-500",
    children: (0, c.jsx)(o.LoadingMultiIcon, {
      className: "univer-size-5 univer-animate-spin"
    })
  });
}
function ne(var_core_value_sig8CF5) {
  let {
    last: var_core_value_sigDDD7
  } = var_core_value_sig8CF5;
  return (0, c.jsxs)("div", {
    className: "univer-absolute univer-left-[30px] univer-top-0 univer-h-full univer-w-2.5 rtl:univer-left-auto rtl:univer-right-[30px]",
    children: [(0, c.jsx)("div", {
      className: (0, i.clsx)("univer-absolute\x20univer-left-0\x20univer-top-0\x20univer-w-px\x20univer-bg-gray-100\x20rtl:univer-left-auto\x20rtl:univer-right-0\x20dark:!univer-bg-gray-800", var_core_value_sigDDD7 ? "univer-h-1/2" : "univer-h-full")
    }), (0, c.jsx)("div", {
      className: "univer-absolute univer-left-0 univer-top-1/2 univer-h-px univer-w-2.5 -univer-translate-y-1/2 univer-bg-gray-100 rtl:univer-left-auto rtl:univer-right-0 dark:!univer-bg-gray-800"
    })]
  });
}
function B(var_core_value_sigB2CE) {
  var var_core_value_sig443C;
  let {
      version: var_core_value_sig39B1,
      active: var_core_value_sig210D,
      loading: var_core_value_sigB4B4,
      localeService: var_core_value_sigD407,
      expanded: var_core_value_sig3BF6 = false,
      loadingDetails: var_core_value_sig38CE = false,
      onSelect: var_core_value_sig63F3,
      onToggle: var_core_value_sig6A71
    } = var_core_value_sigB2CE,
    var_core_value_sig62B7 = !!var_core_value_sig39B1.isDetail,
    var_core_value_sig37A8 = !var_core_value_sig62B7 && var_core_value_sig39B1.startRevision < var_core_value_sig39B1.endRevision,
    var_core_value_sigA90D = !!var_core_value_sig39B1.additionalFields,
    var_core_value_sig7A3C = var_core_value_sig39B1.creatorNames["filter"](Boolean),
    var_core_value_sig0511 = var_core_value_sig39B1.creatorName || var_core_value_sigD407.t("edit-history-ui.unknownUser");
  var_core_value_sig7A3C.length && (var_core_value_sig0511 = var_core_value_sig7A3C.join(",\x20"));
  let var_core_value_sig1F44 = var_core_value_sig0511;
  var_core_value_sigA90D && (var_core_value_sig1F44 = "" + var_core_value_sigD407.t("edit-history-ui.aiAssistant") + (var_core_value_sig0511 ? "\x20(" + var_core_value_sig0511 + ")" : ""));
  let var_core_value_sigCB04 = ae(var_core_value_sig39B1, var_core_value_sigD407),
    var_core_value_sig947E = (0, r.useDependency)(t.IConfigService),
    var_core_value_sig4545 = (0, r.useDependency)(R),
    var_core_value_sigF39A = (var_core_value_sig443C = var_core_value_sig947E.getConfig("edit-history-ui.config")) == null ? undefined : var_core_value_sig443C.descriptor,
    var_core_value_sigF79C = var_core_value_sig4545.resolve(var_core_value_sigF39A == null ? undefined : var_core_value_sigF39A.type, var_core_value_sig39B1),
    var_core_value_sig2E54 = var_core_value_sig2809 => {
      var_core_value_sig2809.stopPropagation(), !var_core_value_sig38CE && var_core_value_sig6A71 && var_core_value_sig6A71(var_core_value_sig39B1).catch(() => undefined);
    },
    var_core_value_sig7658 = (0, c.jsx)(o.MoreRightIcon, {
      className: "univer-size-8 univer-text-gray-400 rtl:univer-rotate-180"
    });
  return var_core_value_sig38CE ? var_core_value_sig7658 = (0, c.jsx)(o.LoadingMultiIcon, {
    className: "univer-animate-spin"
  }) : var_core_value_sig3BF6 && (var_core_value_sig7658 = (0, c.jsx)(o.MoreDownIcon, {
    className: "univer-size-8\x20univer-text-gray-400"
  })), (0, c.jsxs)("div", {
    className: (0, i.clsx)("univer-min-h-15 univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-rounded-md univer-px-1 univer-py-1.5 univer-transition-colors hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800", {
      "univer-bg-gray-50\x20dark:!univer-bg-gray-900": var_core_value_sig210D,
      "univer-ml-6\x20rtl:univer-ml-0\x20rtl:univer-mr-6": var_core_value_sig62B7,
      "univer-pointer-events-none\x20univer-opacity-60": var_core_value_sigB4B4
    }),
    onClick: () => var_core_value_sig63F3(var_core_value_sig39B1),
    children: [(0, c.jsx)("div", {
      className: "univer-flex univer-w-3 univer-items-center univer-justify-center",
      children: var_core_value_sig37A8 && (0, c.jsx)("div", {
        className: "univer-flex\x20univer-size-5\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center",
        onClick: var_core_value_sig2E54,
        children: var_core_value_sig7658
      })
    }), (0, c.jsxs)("div", {
      className: "univer-flex\x20univer-flex-1\x20univer-flex-col\x20univer-gap-1",
      children: [(0, c.jsx)("div", {
        className: "univer-flex univer-min-h-6 univer-w-full univer-items-center univer-justify-between",
        children: (0, c.jsxs)("div", {
          className: "univer-flex univer-flex-1 univer-items-center univer-gap-1.5 univer-text-sm univer-text-gray-600 dark:!univer-text-gray-200",
          children: [var_core_value_sigA90D && (0, c.jsx)(o.AiAssistantMultiIcon, {
            className: "univer-size-4 univer-shrink-0"
          }), (0, c.jsx)("span", {
            className: "univer-break-all univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
            children: var_core_value_sig1F44
          }), (0, c.jsx)("span", {
            className: "univer-text-center univer-text-gray-500 dark:!univer-text-gray-400",
            children: var_core_value_sigCB04
          }), var_core_value_sig39B1.isCurrent && (0, c.jsx)("span", {
            className: "univer-ml-1 univer-flex univer-flex-shrink-0 univer-items-center univer-justify-center univer-rounded univer-border univer-border-primary-600 univer-bg-primary-50 univer-px-1.5 univer-text-xs univer-text-primary-600",
            children: var_core_value_sigD407.t("edit-history-ui.currentVersion")
          })]
        })
      }), (0, c.jsx)("div", {
        className: "univer-text-sm\x20univer-leading-5\x20univer-text-gray-500\x20dark:!univer-text-gray-300",
        children: var_core_value_sigF79C.length ? oe(var_core_value_sigF79C, var_core_value_sigD407) : var_core_value_sigD407.t("edit-history-ui.edited")
      })]
    })]
  });
}
function re(var_core_value_sigDCF5) {
  return var_core_value_sigDCF5.reduce((var_core_value_sig2DAB, var_core_value_sig877E) => {
    let var_core_value_sig20C8 = (0, t.dateKit)(var_core_value_sig877E.startRevisionCreateTime ?? var_core_value_sig877E.createTime ?? Date.now()).format("YYYY-MM-DD"),
      var_core_value_sigE9A7 = var_core_value_sig2DAB[var_core_value_sig2DAB.length - 1];
    return (var_core_value_sigE9A7 == null ? undefined : var_core_value_sigE9A7.date) === var_core_value_sig20C8 ? var_core_value_sigE9A7.versions["push"](var_core_value_sig877E) : var_core_value_sig2DAB.push({
      date: var_core_value_sig20C8,
      versions: [var_core_value_sig877E]
    }), var_core_value_sig2DAB;
  }, []);
}
function ie(var_core_value_sigC786, var_core_value_sigC0D9) {
  let var_core_value_sigF051 = (0, t.dateKit)().format("YYYY-MM-DD");
  if (var_core_value_sigC786 === var_core_value_sigF051) return var_core_value_sigC0D9.t("edit-history-ui.today");
  let var_core_value_sig5825 = t.LOCALE_META[var_core_value_sigC0D9.getCurrentLocale()].tag,
    var_core_value_sig4EB7 = var_core_value_sigC786.slice(0, 4) === var_core_value_sigF051.slice(0, 4) ? {
      month: "numeric",
      day: "numeric"
    } : {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    };
  return (0, t.dateKit)(var_core_value_sigC786).formatIntl(var_core_value_sig5825, var_core_value_sig4EB7);
}
function V(var_core_value_sig73AF, var_core_value_sig548A) {
  return var_core_value_sig73AF ? (0, t.dateKit)(var_core_value_sig73AF).formatIntl(t.LOCALE_META[var_core_value_sig548A.getCurrentLocale()].tag, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }) : "";
}
function ae(var_core_value_sigE026, var_core_value_sig339E) {
  if (var_core_value_sigE026.isDetail) return V(var_core_value_sigE026.createTime, var_core_value_sig339E);
  let var_core_value_sig7550 = V(var_core_value_sigE026.startRevisionCreateTime ?? var_core_value_sigE026.createTime, var_core_value_sig339E),
    var_core_value_sig2983 = V(var_core_value_sigE026.endRevisionCreateTime ?? var_core_value_sigE026.createTime, var_core_value_sig339E);
  return var_core_value_sig7550 && var_core_value_sig2983 && var_core_value_sig7550 !== var_core_value_sig2983 ? var_core_value_sig7550 + " - " + var_core_value_sig2983 : var_core_value_sig7550 || var_core_value_sig2983;
}
function oe(var_core_value_sigE1B0, var_core_value_sigD4FF) {
  return new Intl["ListFormat"](t.LOCALE_META[var_core_value_sigD4FF.getCurrentLocale()].tag, {
    style: "short",
    type: "conjunction"
  }).format(var_core_value_sigE1B0);
}
function H() {
  let var_core_value_sig1E5B = (0, r.useDependency)(t.LocaleService),
    var_core_value_sigB680 = (0, r.useDependency)(t.ILogService),
    var_core_value_sig1F64 = (0, r.useDependency)(r.IMessageService),
    var_core_value_sigDD1C = (0, r.useDependency)(e.HistorySessionService),
    var_core_value_sig2C39 = (0, r.useDependency)(L),
    var_core_value_sigB7D1 = (0, r.useObservable)(var_core_value_sigDD1C.versions$, []),
    var_core_value_sig64F0 = (0, r.useObservable)(var_core_value_sigDD1C.currentVersion$, null),
    var_core_value_sig85B1 = (0, r.useObservable)(var_core_value_sig2C39.loading$, false),
    var_core_value_sig3141 = (0, r.useObservable)(var_core_value_sigDD1C.status$, e.HistorySessionStatus["Idle"]),
    var_core_value_sig2162 = (var_core_value_sigBECE, var_core_value_sig1B22) => {
      var_core_value_sigB680.error(var_core_value_sigBECE, var_core_value_sig1B22), var_core_value_sig1F64.show({
        content: var_core_value_sig1E5B.t("edit-history-ui.loadError"),
        type: i.MessageType["Error"]
      });
    };
  return (0, c.jsx)("div", {
    className: "univer-flex univer-h-full univer-flex-col univer-p-3",
    children: (0, c.jsx)("div", {
      className: "univer-flex univer-min-h-0 univer-flex-1 univer-flex-col univer-gap-1 univer-overflow-auto",
      onScroll: var_core_value_sig7F72 => {
        if (var_core_value_sig3141 !== e.HistorySessionStatus["Ready"] || !var_core_value_sigDD1C.hasMore) return;
        let {
          scrollTop: var_core_value_sig7B2A,
          scrollHeight: var_core_value_sig06CD,
          clientHeight: var_core_value_sigA5F1
        } = var_core_value_sig7F72.currentTarget;
        var_core_value_sig7B2A + var_core_value_sigA5F1 < var_core_value_sig06CD - 5 || var_core_value_sigDD1C.loadMore().catch(var_core_value_sig429F => {
          var_core_value_sig2162("[HistoryPanel]: Failed to load more history versions.", var_core_value_sig429F);
        });
      },
      children: (0, c.jsx)(z, {
        versions: var_core_value_sigB7D1,
        currentVersion: var_core_value_sig64F0,
        loading: var_core_value_sig85B1,
        onLoadDetails: var_core_value_sig97A2 => var_core_value_sigDD1C.loadVersionDetails(var_core_value_sig97A2),
        onSelectVersion: var_core_value_sig07E9 => {
          var_core_value_sig2C39.selectVersion(var_core_value_sig07E9).catch(var_core_value_sigF62A => var_core_value_sig2162("[HistoryPanel]: Failed to load the selected history version.", var_core_value_sigF62A));
        },
        onError: var_core_value_sig4F59 => var_core_value_sig2162("[HistoryPanel]: Failed to load history version details.", var_core_value_sig4F59)
      })
    })
  });
}
const U = "EDIT_HISTORY_PANEL";
let W = class extends t.Disposable {
  constructor(var_core_value_sigF564) {
    super(), this.disposeWithMe(var_core_value_sigF564.register(U, H));
  }
};
W = I([F(0, (0, t.Inject)(r.ComponentManager))], W);
let G = class extends t.Disposable {
  constructor(var_core_value_sig8CFA, var_core_value_sig2E11) {
    super();
    let var_core_value_sig5B69 = var_core_value_sig2E11.getConfig(O);
    var_core_value_sig5B69 != null && var_core_value_sig5B69.viewerMode && this.disposeWithMe(var_core_value_sig8CFA.beforeCommandExecuted((var_core_value_sig8178, var_core_value_sigE9ED) => {
      if (var_core_value_sig8178.type === t.CommandType["MUTATION"] && !(var_core_value_sigE9ED != null && var_core_value_sigE9ED.fromChangeset)) throw new t["CustomCommandExecutionError"]("[HistoryReadOnlyController]: Mutations are disabled in history viewer mode.");
    }));
  }
};
G = I([F(0, t.ICommandService), F(1, t.IConfigService)], G);
const K = {
  viewerMode: false
};
let q = class extends t.Disposable {
  constructor(var_core_value_sigB098, var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigB33B, var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sigEF3E, var_core_value_sig273D) {
    super(), this._configService = var_core_value_sigB098, this._confirmService = var_core_value_sigCE71, this._logService = var_core_value_sig21D8, this._injector = var_core_value_sig2B65, this._localeService = var_core_value_sigD7EA, this._historySessionService = var_core_value_sigB33B, this._historyUIService = var_core_value_sig24B9, this._messageService = var_core_value_sigE627, this._sidebarService = var_core_value_sigEF3E, this._uiPartsService = var_core_value_sig273D, N(this, "_sidebarDisposable", null), N(this, "_restoring", false), N(this, "_restoreGeneration", 0), N(this, "_viewerGeneration", 0), N(this, "_closing", false);
  }
  registerHeader() {
    this._getConfig().viewerMode && this.disposeWithMe(this._uiPartsService["registerComponent"](r.BuiltInUIPart["HEADER"], () => (0, r.connectInjector)(se, this._injector)));
  }
  async open() {
    let var_core_value_sig9A0D = this._getConfig();
    if (!(!var_core_value_sig9A0D.viewerMode || !var_core_value_sig9A0D.descriptor || this._sidebarDisposable)) {
      ++this._viewerGeneration, this._sidebarDisposable = this._sidebarService["open"]({
        header: {
          title: this._localeService["t"]("edit-history-ui.title")
        },
        children: {
          label: U
        },
        onClose: () => this.close()
      });
      try {
        await this._historyUIService["open"](var_core_value_sig9A0D.descriptor);
      } catch (var_core_value_sig0D69) {
        throw this.close(), var_core_value_sig0D69;
      }
    }
  }
  async restore() {
    let var_core_value_sigA319 = this._historySessionService["currentVersion"],
      var_core_value_sig2D58 = this._getConfig();
    if (var_core_value_sigA319 == null || var_core_value_sigA319.endRevision == null || var_core_value_sigA319.isCurrent || !var_core_value_sig2D58.canRestore || !var_core_value_sig2D58.onRestore || this._restoring) return;
    let var_core_value_sig223F = ++this._restoreGeneration,
      var_core_value_sigD749 = this._viewerGeneration;
    this._restoring = true;
    try {
      let var_core_value_sigB577 = var_core_value_sigA319.endRevision;
      if (!(await this._confirmService["confirm"]({
        id: "edit-history-confirm-restore",
        title: {
          title: this._localeService["t"]("edit-history-ui.restoreConfirmTitle")
        },
        children: {
          title: this._localeService["t"]("edit-history-ui.restoreConfirmText")
        },
        cancelText: this._localeService["t"]("edit-history-ui.cancel"),
        confirmText: this._localeService["t"]("edit-history-ui.confirm")
      })) || var_core_value_sig223F !== this._restoreGeneration || var_core_value_sigD749 !== this._viewerGeneration || !this._sidebarDisposable) return;
      try {
        await var_core_value_sig2D58.onRestore(var_core_value_sigB577);
      } catch (var_core_value_sig480E) {
        if (var_core_value_sig223F !== this._restoreGeneration || var_core_value_sigD749 !== this._viewerGeneration || !this._sidebarDisposable) return;
        this._logService["error"]("[HistoryViewerController]: Failed to restore history revision.", var_core_value_sig480E), this._messageService["show"]({
          content: this._localeService["t"]("edit-history-ui.restoreError"),
          type: i.MessageType["Error"]
        });
      }
    } finally {
      var_core_value_sig223F === this._restoreGeneration && (this._restoring = false);
    }
  }
  close() {
    var var_core_value_sigCFFA, var_core_value_sig58C1;
    if (this._closing) return;
    this._closing = true, ++this._viewerGeneration, ++this._restoreGeneration, this._restoring = false;
    let var_core_value_sig5090 = this._sidebarDisposable;
    this._sidebarDisposable = null, var_core_value_sig5090 == null || var_core_value_sig5090.dispose(), this._historyUIService["close"](), (var_core_value_sigCFFA = (var_core_value_sig58C1 = this._getConfig()).onClose) == null || var_core_value_sigCFFA.call(var_core_value_sig58C1), this._closing = false;
  }
  _getConfig() {
    return this._configService["getConfig"]("edit-history-ui.config") ?? K;
  }
};
q = I([F(0, t.IConfigService), F(1, t.IConfirmService), F(2, t.ILogService), F(3, (0, t.Inject)(t.Injector)), F(4, (0, t.Inject)(t.LocaleService)), F(5, (0, t.Inject)(e.HistorySessionService)), F(6, (0, t.Inject)(L)), F(7, r.IMessageService), F(8, r.ISidebarService), F(9, r.IUIPartsService)], q);
function se() {
  let var_core_value_sig2EAD = (0, r.useDependency)(t.LocaleService),
    var_core_value_sig6774 = (0, r.useDependency)(q),
    var_core_value_sig340D = (0, r.useDependency)(t.IConfigService),
    var_core_value_sig82D4 = (0, r.useObservable)((0, r.useDependency)(e.HistorySessionService).currentVersion$, null),
    var_core_value_sigBDE4 = var_core_value_sig340D.getConfig(O);
  return (0, c.jsxs)("div", {
    className: (0, i.clsx)("univer-flex univer-h-12 univer-items-center univer-justify-between univer-px-3", i.borderBottomClassName),
    children: [(0, c.jsxs)(i.Button, {
      onClick: () => var_core_value_sig6774.close(),
      children: [(0, c.jsx)(o.ArrowLeftIcon, {
        className: "univer-size-4"
      }), var_core_value_sig2EAD.t("edit-history-ui.back")]
    }), (0, c.jsx)(i.Button, {
      variant: "primary",
      disabled: !(var_core_value_sigBDE4 != null && var_core_value_sigBDE4.canRestore) || var_core_value_sig82D4 == null || var_core_value_sig82D4.isCurrent,
      onClick: () => {
        var_core_value_sig6774.restore().catch(() => undefined);
      },
      children: var_core_value_sig2EAD.t("edit-history-ui.restore")
    })]
  });
}
const J = {
  insert: "green.800",
  delete: "red.800",
  update: "blue.800"
};
let Y = class extends t.Disposable {
  constructor(var_core_value_sigC368) {
    super(), this._themeService = var_core_value_sigC368, N(this, "_styles", {
      insert: {
        fill: "",
        stroke: ""
      },
      delete: {
        fill: "",
        stroke: ""
      },
      update: {
        fill: "",
        stroke: ""
      }
    }), this.disposeWithMe(this._themeService["currentTheme$"].subscribe(() => this._refreshStyles()));
  }
  getStyle(var_core_value_sigAD56) {
    return this._styles[var_core_value_sigAD56];
  }
  _refreshStyles() {
    this._styles = {
      insert: this._createStyle("insert"),
      delete: this._createStyle("delete"),
      update: this._createStyle("update")
    };
  }
  _createStyle(var_core_value_sigDB4A) {
    let var_core_value_sig6418 = this._themeService["getColorFromTheme"](J[var_core_value_sigDB4A]);
    return {
      fill: new t["ColorKit"](var_core_value_sig6418).setAlpha(0.5).toRgbString(),
      stroke: new t["ColorKit"](var_core_value_sig6418).setAlpha(0.9).toRgbString()
    };
  }
};
Y = I([F(0, (0, t.Inject)(t.ThemeService))], Y);
const X = 1000;
let Z = class extends t.Disposable {
  constructor(var_core_value_sig1896, var_core_value_sig0285) {
    super(), this._renderManagerService = var_core_value_sig1896, this._highlightService = var_core_value_sig0285, N(this, "_overlays", new Map()), N(this, "_generations", new Map());
  }
  async show(var_core_value_sig777D, var_core_value_sig3F4C) {
    let var_core_value_sigD65A = (this._generations["get"](var_core_value_sig777D) ?? 0) + 1;
    this._generations["set"](var_core_value_sig777D, var_core_value_sigD65A), this._removeOverlays(var_core_value_sig777D);
    let var_core_value_sig5A13 = await this._resolveTargets(var_core_value_sig777D, var_core_value_sig3F4C, var_core_value_sigD65A);
    if (this._generations["get"](var_core_value_sig777D) !== var_core_value_sigD65A || !var_core_value_sig5A13) return;
    let {
        scene: var_core_value_sigF593
      } = var_core_value_sig5A13,
      var_core_value_sig3607 = ce(var_core_value_sig5A13.items),
      var_core_value_sigB512 = [];
    if (var_core_value_sig3607.forEach(({
      target: var_core_value_sig9572,
      object: var_core_value_sigD873
    }) => {
      let var_core_value_sigA12B = var_core_value_sig9572.bounds ?? (var_core_value_sigD873 == null ? undefined : var_core_value_sigD873.getRealBound());
      if (!var_core_value_sigA12B || !Q(var_core_value_sigA12B)) return;
      let var_core_value_sigF230 = this._highlightService["getStyle"](var_core_value_sig9572.kind),
        var_core_value_sig09B8 = new l.Rect("edit-history-highlight-" + var_core_value_sig9572.id, {
          left: var_core_value_sigA12B.left,
          top: var_core_value_sigA12B.top,
          width: var_core_value_sigA12B.width,
          height: var_core_value_sigA12B.height,
          angle: (var_core_value_sigD873 == null ? undefined : var_core_value_sigD873.angle) ?? 0,
          fill: var_core_value_sig9572.outlineOnly ? undefined : var_core_value_sigF230.fill,
          stroke: var_core_value_sigF230.stroke,
          strokeWidth: var_core_value_sig9572.outlineOnly ? 4 : 2,
          evented: false,
          zIndex: X
        });
      var_core_value_sigB512.push({
        target: var_core_value_sig9572,
        shape: var_core_value_sig09B8,
        object: var_core_value_sigD873,
        objectSubscription: null
      });
    }), var_core_value_sigB512.length === 0) return;
    let var_core_value_sigF2E6 = {
      scene: var_core_value_sigF593,
      bindings: var_core_value_sigB512,
      transformSubscriptions: [],
      refreshPromise: null,
      pulseInterval: null,
      pulseTimeout: null
    };
    this._overlays["set"](var_core_value_sig777D, var_core_value_sigF2E6), this._bindOverlayLifecycle(var_core_value_sig777D, var_core_value_sigF2E6), var_core_value_sigF593.addObjects(var_core_value_sigB512.map(({
      shape: var_core_value_sig6F91
    }) => var_core_value_sig6F91), X), var_core_value_sigF593.makeDirty(true), this._startPulse(var_core_value_sigF2E6);
  }
  clear(var_core_value_sig34C8) {
    this._generations["set"](var_core_value_sig34C8, (this._generations["get"](var_core_value_sig34C8) ?? 0) + 1), this._removeOverlays(var_core_value_sig34C8);
  }
  dispose() {
    Array.from(this._overlays["keys"]()).forEach(var_core_value_sigF9C7 => this.clear(var_core_value_sigF9C7)), super.dispose();
  }
  async _resolveTargets(var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A) {
    for (let var_core_value_sig8895 = 0; var_core_value_sig8895 <= 120; var_core_value_sig8895++) {
      if (this._generations["get"](var_core_value_sigB744) !== var_core_value_sigE68A) return null;
      let var_core_value_sig26DB = this._renderManagerService["getRenderUnitById"](var_core_value_sigB744);
      if (var_core_value_sig26DB) {
        let var_core_value_sig4D4C = var_core_value_sigEAE2.map(var_core_value_sig7524 => ({
          target: var_core_value_sig7524,
          object: var_core_value_sig7524.objectKey ? var_core_value_sig26DB.scene["getObjectIncludeInGroup"](var_core_value_sig7524.objectKey) ?? var_core_value_sig26DB.scene["getObject"](var_core_value_sig7524.objectKey) : null
        }));
        if (!var_core_value_sig4D4C.some(({
          target: var_core_value_sig2AD8,
          object: var_core_value_sig2AD0
        }) => !var_core_value_sig2AD8.bounds && var_core_value_sig2AD8.objectKey && !var_core_value_sig2AD0) || var_core_value_sig8895 === 120) return {
          scene: var_core_value_sig26DB.scene,
          items: var_core_value_sig4D4C.map(({
            target: var_core_value_sig3EEE,
            object: var_core_value_sigBC46
          }) => ({
            target: var_core_value_sig3EEE,
            object: var_core_value_sigBC46 ?? this._getFallbackObject(var_core_value_sig26DB.scene, var_core_value_sig26DB.mainComponent ?? null, var_core_value_sig3EEE)
          }))
        };
      }
      await ue();
    }
    return null;
  }
  _getFallbackObject(var_core_value_sig3E68, var_core_value_sigF4C5, var_core_value_sig5410) {
    return var_core_value_sig5410.fallbackObjectKey ? var_core_value_sig3E68.getObject(var_core_value_sig5410.fallbackObjectKey) ?? null : var_core_value_sigF4C5;
  }
  _removeOverlays(var_core_value_sig492F) {
    let var_core_value_sig8EA0 = this._overlays["get"](var_core_value_sig492F);
    var_core_value_sig8EA0 && (this._stopPulse(var_core_value_sig8EA0), var_core_value_sig8EA0.transformSubscriptions["forEach"](var_core_value_sigC80B => var_core_value_sigC80B.unsubscribe()), var_core_value_sig8EA0.bindings["forEach"](({
      objectSubscription: var_core_value_sig284F,
      shape: var_core_value_sigE154
    }) => {
      var_core_value_sig284F == null || var_core_value_sig284F.unsubscribe(), var_core_value_sig8EA0.scene["removeObject"](var_core_value_sigE154);
    }), var_core_value_sig8EA0.scene["makeDirty"](true), this._overlays["delete"](var_core_value_sig492F));
  }
  _bindOverlayLifecycle(var_core_value_sigA6F6, var_core_value_sigCDDA) {
    var_core_value_sigCDDA.bindings["forEach"](var_core_value_sig4632 => this._bindObjectTransform(var_core_value_sigA6F6, var_core_value_sigCDDA, var_core_value_sig4632)), var_core_value_sigCDDA.transformSubscriptions["push"](var_core_value_sigCDDA.scene["onTransformChange$"].subscribeEvent(() => this._queueOverlayRefresh(var_core_value_sigA6F6, var_core_value_sigCDDA)));
    let var_core_value_sigE243 = var_core_value_sigCDDA.scene["getEngine"]();
    var_core_value_sigE243 && var_core_value_sigCDDA.transformSubscriptions["push"](var_core_value_sigE243.onTransformChange$["subscribeEvent"](() => this._queueOverlayRefresh(var_core_value_sigA6F6, var_core_value_sigCDDA)));
  }
  _bindObjectTransform(var_core_value_sig74A8, var_core_value_sig21B2, var_core_value_sigDE08) {
    var var_core_value_sigACCB, var_core_value_sig7F33;
    (var_core_value_sigACCB = var_core_value_sigDE08.objectSubscription) == null || var_core_value_sigACCB.unsubscribe(), var_core_value_sigDE08.objectSubscription = ((var_core_value_sig7F33 = var_core_value_sigDE08.object) == null ? undefined : var_core_value_sig7F33.onTransformChange$["subscribeEvent"](() => {
      this._refreshOverlay(var_core_value_sig74A8, var_core_value_sig21B2);
    })) ?? null;
  }
  _queueOverlayRefresh(var_core_value_sig0C53, var_core_value_sigEA04) {
    var_core_value_sigEA04.refreshPromise ||= Promise.resolve().then(() => {
      var_core_value_sigEA04.refreshPromise = null, this._refreshOverlay(var_core_value_sig0C53, var_core_value_sigEA04);
    });
  }
  _refreshOverlay(var_core_value_sig7A62, var_core_value_sig8109) {
    if (this._overlays["get"](var_core_value_sig7A62) !== var_core_value_sig8109) return;
    let var_core_value_sig7565 = false;
    var_core_value_sig8109.bindings["forEach"](var_core_value_sig12F2 => {
      let var_core_value_sig2259 = this._resolveCurrentObject(var_core_value_sig8109.scene, var_core_value_sig12F2);
      var_core_value_sig2259 !== var_core_value_sig12F2.object && (var_core_value_sig12F2.object = var_core_value_sig2259, this._bindObjectTransform(var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig12F2));
      let var_core_value_sig9E2F = var_core_value_sig12F2.target["bounds"] ?? (var_core_value_sig2259 == null ? undefined : var_core_value_sig2259.getRealBound());
      !var_core_value_sig9E2F || !Q(var_core_value_sig9E2F) || (var_core_value_sig12F2.shape["transformByState"]({
        left: var_core_value_sig9E2F.left,
        top: var_core_value_sig9E2F.top,
        width: var_core_value_sig9E2F.width,
        height: var_core_value_sig9E2F.height,
        angle: (var_core_value_sig2259 == null ? undefined : var_core_value_sig2259.angle) ?? 0
      }), var_core_value_sig7565 = true);
    }), var_core_value_sig7565 && var_core_value_sig8109.scene["makeDirty"](true);
  }
  _resolveCurrentObject(var_core_value_sigD4FB, var_core_value_sig3E71) {
    if (var_core_value_sig3E71.target["bounds"]) return var_core_value_sig3E71.object;
    if (var_core_value_sig3E71.target["objectKey"]) {
      let var_core_value_sigD082 = var_core_value_sigD4FB.getObjectIncludeInGroup(var_core_value_sig3E71.target["objectKey"]) ?? var_core_value_sigD4FB.getObject(var_core_value_sig3E71.target["objectKey"]);
      if (var_core_value_sigD082) return var_core_value_sigD082;
    }
    return var_core_value_sig3E71.target["fallbackObjectKey"] ? var_core_value_sigD4FB.getObject(var_core_value_sig3E71.target["fallbackObjectKey"]) ?? var_core_value_sig3E71.object : var_core_value_sig3E71.object;
  }
  _startPulse(var_core_value_sig01B3) {
    var var_core_value_sig7442, var_core_value_sigDF87;
    if (typeof window < "u" && (var_core_value_sig7442 = (var_core_value_sigDF87 = window).matchMedia) != null && var_core_value_sig7442.call(var_core_value_sigDF87, "(prefers-reduced-motion: reduce)").matches) return;
    let var_core_value_sig9EE0 = false;
    var_core_value_sig01B3.pulseInterval = globalThis.setInterval(() => {
      var_core_value_sig9EE0 = !var_core_value_sig9EE0, this._setOverlayOpacity(var_core_value_sig01B3, var_core_value_sig9EE0 ? 0.25 : 1);
    }, 500), var_core_value_sig01B3.pulseTimeout = globalThis.setTimeout(() => {
      this._stopPulse(var_core_value_sig01B3), this._setOverlayOpacity(var_core_value_sig01B3, 1);
    }, 4000);
  }
  _stopPulse(var_core_value_sigF0511) {
    var_core_value_sigF0511.pulseInterval !== null && (globalThis.clearInterval(var_core_value_sigF0511.pulseInterval), var_core_value_sigF0511.pulseInterval = null), var_core_value_sigF0511.pulseTimeout !== null && (globalThis.clearTimeout(var_core_value_sigF0511.pulseTimeout), var_core_value_sigF0511.pulseTimeout = null);
  }
  _setOverlayOpacity(var_core_value_sig0B45, var_core_value_sig36F8) {
    var_core_value_sig0B45.bindings["forEach"](({
      shape: var_core_value_sigDBB7
    }) => var_core_value_sigDBB7.setProps({
      fillOpacity: var_core_value_sig36F8,
      strokeOpacity: var_core_value_sig36F8
    })), var_core_value_sig0B45.scene["makeDirty"](true);
  }
};
Z = I([F(0, l.IRenderManagerService), F(1, (0, t.Inject)(Y))], Z);
function ce(var_core_value_sig7DF1) {
  let var_core_value_sigDC86 = new Map();
  return var_core_value_sig7DF1.forEach(var_core_value_sig03E1 => {
    var var_core_value_sigBB57, var_core_value_sig7C4A;
    let var_core_value_sigE799 = var_core_value_sig03E1.target["bounds"] ?? ((var_core_value_sigBB57 = var_core_value_sig03E1.object) == null ? undefined : var_core_value_sigBB57.getRealBound());
    if (!var_core_value_sigE799 || !Q(var_core_value_sigE799)) return;
    let var_core_value_sigB601 = [var_core_value_sigE799.left, var_core_value_sigE799.top, var_core_value_sigE799.width, var_core_value_sigE799.height, ((var_core_value_sig7C4A = var_core_value_sig03E1.object) == null ? undefined : var_core_value_sig7C4A.angle) ?? 0].join(":"),
      var_core_value_sig8B71 = var_core_value_sigDC86.get(var_core_value_sigB601);
    if (!var_core_value_sig8B71) {
      var_core_value_sigDC86.set(var_core_value_sigB601, var_core_value_sig03E1);
      return;
    }
    var_core_value_sigDC86.set(var_core_value_sigB601, {
      object: var_core_value_sig8B71.object,
      target: {
        ...var_core_value_sig8B71.target,
        kind: le(var_core_value_sig8B71.target["kind"], var_core_value_sig03E1.target["kind"]),
        outlineOnly: var_core_value_sig8B71.target["outlineOnly"] || var_core_value_sig03E1.target["outlineOnly"]
      }
    });
  }), Array.from(var_core_value_sigDC86.values());
}
function le(var_core_value_sig0B0C, var_core_value_sigA39E) {
  return var_core_value_sig0B0C === var_core_value_sigA39E ? var_core_value_sig0B0C : var_core_value_sig0B0C === "update" ? var_core_value_sigA39E : var_core_value_sigA39E === "update" ? var_core_value_sig0B0C : "update";
}
function Q(var_core_value_sigBBEE) {
  return [var_core_value_sigBBEE.left, var_core_value_sigBBEE.top, var_core_value_sigBBEE.width, var_core_value_sigBBEE.height].every(Number.isFinite) && var_core_value_sigBBEE.width > 0 && var_core_value_sigBBEE.height > 0;
}
function ue() {
  return new Promise(var_core_value_sigAEFB => globalThis.setTimeout(var_core_value_sigAEFB, 16));
}
let $ = class extends t.Plugin {
  constructor(var_core_value_sig826B = k, var_core_value_sigCF89, var_core_value_sig00CB, var_core_value_sig77EE) {
    super(), this._config = var_core_value_sig826B, this._injector = var_core_value_sigCF89, this._configService = var_core_value_sig00CB, this._logService = var_core_value_sig77EE, N(this, "_historyViewerController", null);
    let {
      ...var_core_value_sig9F76
    } = (0, t.merge)({}, k, this._config);
    this._configService["setConfig"](O, var_core_value_sig9F76);
  }
  onStarting() {
    (0, t.registerDependencies)(this._injector, [[W], [G], [q], [R], [Z], [Y], [P], [L]]), this._injector["get"](W), this._injector["get"](G), this._historyViewerController = this._injector["get"](q), this._historyViewerController["registerHeader"]();
  }
  onRendered() {
    if (!this._historyViewerController) {
      this._logService["error"]("[UniverEditHistoryUIPlugin]:\x20History\x20viewer\x20controller\x20is\x20not\x20available.");
      return;
    }
    this._historyViewerController["open"]().catch(var_core_value_sigD0A8 => {
      this._logService["error"]("[UniverEditHistoryUIPlugin]: Failed to open history viewer.", var_core_value_sigD0A8);
    });
  }
};
N($, "pluginName", "UNIVER_EDIT_HISTORY_UI_PLUGIN"), N($, "packageName", A), N($, "version", j), N($, "type", t.UniverInstanceType["UNIVER_UNKNOWN"]), $ = I([(0, t.DependentOn)(n.UniverLicensePlugin, e.UniverEditHistoryPlugin, r.UniverUIPlugin), F(1, (0, t.Inject)(t.Injector)), F(2, t.IConfigService), F(3, t.ILogService)], $), exports.EDIT_HISTORY_UI_PLUGIN_CONFIG_KEY = O, exports.HistoryActionSummaryService = R, Object.defineProperty(exports, "HistoryCanvasHighlightService", {
  enumerable: true,
  get: function () {
    return Z;
  }
}), Object.defineProperty(exports, "HistoryHighlightService", {
  enumerable: true,
  get: function () {
    return Y;
  }
}), exports.HistoryRenderAdapterRegistryService = P, Object.defineProperty(exports, "UniverEditHistoryUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.getUnitComparisonEntityLabel = f, exports.getUnitComparisonPathLabels = g, exports.getUnitComparisonValueLabel = T, exports.unitComparisonLocaleKey = d;
