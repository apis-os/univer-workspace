Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
  [e.UnitComparisonEntityType["SLIDE_TRANSITION_REFERENCE"]]:
    "transitionReference",
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
  [e.UnitComparisonEntityType["BOARD_TABLE"]]: "table",
};
function d(_0x405247) {
  return "edit-history-ui.comparison." + _0x405247;
}
function f(_0x5302cc) {
  let _0x4f2a8d = _0x5302cc.split(":")[0];
  return D(u[_0x4f2a8d] ?? "content");
}
const p = Object.fromEntries(
    Object.entries({
      type: "type t kind subType rangeType pageType autoFitType hRule capType lineJoinType",
      valueType: "valueType",
      dataType: "dataType\x20fieldDataType\x20dataFieldType",
      displayName:
        "displayName\x20displayNameRecord\x20label\x20placeholder\x20description\x20sourceName",
      metadata:
        "meta custom system managed resources context dataModel sourceModel structureRevision structureScopeId structured semanticRole modeId version customFields",
      identity: "id uid cfId paragraphId sectionId __record_id",
      reference:
        "unitId subUnitId sheetId tableId fieldId fieldIds dataFieldId parentId parentNodeId childNodeId shapeId listId primaryFieldId startDateFieldId layoutPageId masterPageId connectionSiteId rangeKey orderKey",
      property: "property\x20properties",
      field:
        "field fields fieldSettings fieldsConfig fieldOrder columnFields rowFields valueFields filterFields hiddenFields",
      record: "record records dataRecordCount",
      settings:
        "config options settings renderConfig controls showDataAs valuePosition valueFilter",
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
      range:
        "range ranges rangeInfo sourceRangeInfo mergeData endAbsoluteRefType startAbsoluteRefType",
      theme: "theme tableStyleId palette branchColorKey",
      layout:
        "geometry transform sheetTransform axisAlignSheetTransform layout rect groupBaseBoundIsLocal customGeometry pathLst adjustValues adj textRectPadding",
      paragraph:
        "paragraph paragraphs paragraphStyle bullet listType nestingLevel zeroWidthParagraphBreak",
      section: "section sectionBreaks",
      header: "header columnHeader rowHeader showHeader repeatHeaderRow",
      footer: "footer showFooter",
      code: "code language",
      columns: "columns column col columnOffset",
      table: "table\x20tables\x20tableRows\x20tableCells\x20cells",
      shape: "shape\x20shapeData\x20drawings\x20drawingsOrder\x20shapeType",
      chart:
        "chart\x20chartType\x20seriesIndexes\x20dimension\x20measure\x20subtotal",
      transition: "transition",
      duration: "duration",
      direction:
        "direction\x20textDirection\x20rightToLeft\x20flipX\x20flipY\x20isHorizontal\x20horizontalAlign\x20verticalAlign\x20ht\x20vt\x20ha\x20va\x20side",
      gradient: "gradientStops gradientAngle gradientType",
      connector:
        "connectorData routing routingMode endMarker startMarker fallbackPoint waypoints points curveData tension",
      mindmap: "mindmap",
      swimlane: "swimlane lanes containerData",
      brush: "ink\x20tool",
      attachment: "attachments attachmentSets customBlocks",
      readOnly: "readonly",
      offset:
        "offset rowOffset columnOffset scrollLeft scrollTop xSplit ySplit x y position left top right bottom l r b",
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
      textType:
        "body\x20doc\x20documentStyle\x20shapeText\x20textData\x20textRuns\x20textStyle\x20ts\x20st\x20ed\x20v\x20val\x20value\x20values\x20content\x20customRanges\x20customDecorations\x20decorations\x20data\x20text",
      enabled:
        "visible selectable showDropDown showGridlines stopIfTrue showMasterSp isEmpty isCustom isRichText isTextBox freeze frozenFieldCount",
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
      isEmpty: "isEmpty",
    }).flatMap(([_0x47aa9, _0x5d500d]) =>
      _0x5d500d.split("\x20").map((_0x3fbacd) => [_0x3fbacd, _0x47aa9]),
    ),
  ),
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
    latex: "formula",
  },
  h = {
    startRow: ["start", "row"],
    endRow: ["end", "row"],
    startColumn: ["start", "column"],
    endColumn: ["end", "column"],
  };
function g(_0x4e1162) {
  return _0x4e1162.length === 0
    ? [D("item")]
    : _0x4e1162.flatMap((_0x4fa186) =>
        /^\d+$/u.test(_0x4fa186)
          ? D("itemNumber", String(Number(_0x4fa186) + 1))
          : (h[_0x4fa186] ?? [m[_0x4fa186] ?? p[_0x4fa186] ?? "unknown"]).map(
              (_0x2ad0e9) => D(_0x2ad0e9),
            ),
      );
}
const _ = new Set(
    "bl it hd ia hidden readonly visible selectable collapsed showHeader showFooter showGridlines showDropDown stopIfTrue showMasterSp repeatHeaderRow flipX flipY rightToLeft isEmpty isCustom isRichText isTextBox isHorizontal managed pageOverThenDown pageWrap zeroWidthParagraphBreak groupBaseBoundIsLocal"[
      "split"
    ]("\x20"),
  ),
  v = new Set([
    "type",
    "kind",
    "subType",
    "dataType",
    "fieldDataType",
    "valueType",
    "shapeType",
    "pageType",
    "routingMode",
  ]),
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
    containsErrors: "error",
  },
  b = {
    [t.CellValueType["STRING"]]: "textType",
    [t.CellValueType["NUMBER"]]: "numberType",
    [t.CellValueType["BOOLEAN"]]: "booleanType",
    [t.CellValueType["FORCE_STRING"]]: "forceString",
  },
  x = {
    [t.HorizontalAlign["UNSPECIFIED"]]: "automatic",
    [t.HorizontalAlign["LEFT"]]: "left",
    [t.HorizontalAlign["CENTER"]]: "center",
    [t.HorizontalAlign["RIGHT"]]: "right",
    [t.HorizontalAlign["JUSTIFIED"]]: "justified",
    [t.HorizontalAlign["BOTH"]]: "justified",
    [t.HorizontalAlign["DISTRIBUTED"]]: "distributed",
  },
  S = {
    [t.VerticalAlign["UNSPECIFIED"]]: "automatic",
    [t.VerticalAlign["TOP"]]: "top",
    [t.VerticalAlign["MIDDLE"]]: "middle",
    [t.VerticalAlign["BOTTOM"]]: "bottom",
  },
  C = {
    [t.WrapStrategy["UNSPECIFIED"]]: "automatic",
    [t.WrapStrategy["WRAP"]]: "wrap",
    [t.WrapStrategy["OVERFLOW"]]: "overflow",
    [t.WrapStrategy["CLIP"]]: "clip",
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
      5: "image",
    },
    lineStrokeType: { 1: "empty", 2: "solid", 3: "gradient" },
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
      1879048196: "percentStackedBarChart",
    },
  };
function T(_0x406edc, _0x2d5fe1, _0x2bad38) {
  if (_0x2bad38 == null || _0x2d5fe1.length === 0) return;
  let _0xaf2b0d = _0x406edc.split(":")[0],
    _0x3da261 = _0x2d5fe1[_0x2d5fe1.length - 1];
  if (
    _0xaf2b0d === e.UnitComparisonEntityType["RECORD"] ||
    (_0xaf2b0d === e.UnitComparisonEntityType["CELL"] &&
      !["style", "valueType"].includes(_0x2d5fe1[0])) ||
    [
      "text",
      "value",
      "formula",
      "formula1",
      "formula2",
      "name",
      "content",
      "title",
      "label",
      "url",
    ].includes(_0x3da261)
  )
    return;
  let _0x566aa0 =
      typeof _0x2bad38 == "string" && /^\d+$/u.test(_0x2bad38)
        ? Number(_0x2bad38)
        : _0x2bad38,
    _0xb26456 = E(_0xaf2b0d, _0x2d5fe1.length, _0x3da261, _0x566aa0, _0x2bad38);
  if (_0xb26456 !== undefined) return D(_0xb26456);
  if (
    _0xaf2b0d === e.UnitComparisonEntityType["TABLE"] &&
    _0x3da261 === "displayName" &&
    typeof _0x2bad38 == "string"
  ) {
    let _0x3752c6 = /^sheets-table\.columnPrefix (\d+)$/u.exec(_0x2bad38);
    if (_0x3752c6) return D("columnNumber", _0x3752c6[1]);
  }
}
function E(_0x53ed43, _0x52915b, _0x567568, _0x18e420, _0x230560) {
  var _0x1c33ca;
  if (_.has(_0x567568))
    return _0x18e420 === true ||
      _0x18e420 === t.BooleanNumber["TRUE"] ||
      _0x18e420 === "true"
      ? "enabled"
      : _0x18e420 === false ||
          _0x18e420 === t.BooleanNumber["FALSE"] ||
          _0x18e420 === "false"
        ? "disabled"
        : undefined;
  if (
    _0x53ed43 === e.UnitComparisonEntityType["CELL"] &&
    _0x52915b === 1 &&
    _0x567568 === "valueType"
  )
    return b[Number(_0x18e420)];
  let _0x4054bf =
    (_0x1c33ca = w[_0x567568]) == null
      ? undefined
      : _0x1c33ca[Number(_0x18e420)];
  if (_0x4054bf !== undefined) return _0x4054bf;
  if (v.has(_0x567568) || _0x567568 === "operator" || _0x567568 === "direction")
    return y[String(_0x230560)];
}
function D(_0x458b50, ..._0x5770dc) {
  return {
    key: d(_0x458b50),
    ...(_0x5770dc.length ? { args: _0x5770dc } : {}),
  };
}
const O = "edit-history-ui.config",
  k = { viewerMode: false, canRestore: false };
var A = "@univerjs-pro/edit-history-ui",
  j = "1.0.0-insiders.20260907-70fc579";
function M(_0x1c38da) {
  "@babel/helpers - typeof";
  return (
    (M =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x25972c) {
            return typeof _0x25972c;
          }
        : function (_0x35eb82) {
            return _0x35eb82 &&
              typeof Symbol == "function" &&
              _0x35eb82.constructor === Symbol &&
              _0x35eb82 !== Symbol.prototype
              ? "symbol"
              : typeof _0x35eb82;
          }),
    M(_0x1c38da)
  );
}
function ee(_0x12db1d, _0xa21d40) {
  if (M(_0x12db1d) != "object" || !_0x12db1d) return _0x12db1d;
  var _0x5d293c = _0x12db1d[Symbol.toPrimitive];
  if (_0x5d293c !== undefined) {
    var _0x5efcf9 = _0x5d293c.call(_0x12db1d, _0xa21d40 || "default");
    if (M(_0x5efcf9) != "object") return _0x5efcf9;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0xa21d40 === "string" ? String : Number)(_0x12db1d);
}
function te(_0x23514d) {
  var _0x5e713a = ee(_0x23514d, "string");
  return M(_0x5e713a) == "symbol" ? _0x5e713a : _0x5e713a + "";
}
function N(_0x313ea1, _0x518261, _0x37b3f5) {
  return (
    (_0x518261 = te(_0x518261)) in _0x313ea1
      ? Object.defineProperty(_0x313ea1, _0x518261, {
          value: _0x37b3f5,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x313ea1[_0x518261] = _0x37b3f5),
    _0x313ea1
  );
}
var P = class extends t.Disposable {
  constructor(..._0x159d46) {
    (super(..._0x159d46), N(this, "_adapters", new Map()));
  }
  register(_0x3a3352) {
    if (this._adapters["has"](_0x3a3352.type))
      throw Error(
        "[HistoryRenderAdapterRegistryService]:\x20Adapter\x20for\x20unit\x20type\x20" +
          _0x3a3352.type +
          " is already registered.",
      );
    return (
      this._adapters["set"](_0x3a3352.type, _0x3a3352),
      (0, t.toDisposable)(() => {
        this._adapters["get"](_0x3a3352.type) === _0x3a3352 &&
          this._adapters["delete"](_0x3a3352.type);
      })
    );
  }
  get(_0x322a6f) {
    return this._adapters["get"](_0x322a6f);
  }
  dispose() {
    (this._adapters["clear"](), super.dispose());
  }
};
function F(_0x5a4d59, _0x5e2d6b) {
  return function (_0x453a1f, _0x3bc6e1) {
    _0x5e2d6b(_0x453a1f, _0x3bc6e1, _0x5a4d59);
  };
}
function I(_0x4d9bab, _0x300eb, _0x3fe9bb, _0x130c84) {
  var _0x357f06 = arguments.length,
    _0x3033ad =
      _0x357f06 < 3
        ? _0x300eb
        : _0x130c84 === null
          ? (_0x130c84 = Object.getOwnPropertyDescriptor(_0x300eb, _0x3fe9bb))
          : _0x130c84,
    _0x72d3f2;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3033ad = Reflect.decorate(_0x4d9bab, _0x300eb, _0x3fe9bb, _0x130c84);
  else {
    for (var _0x3404cd = _0x4d9bab.length - 1; _0x3404cd >= 0; _0x3404cd--)
      (_0x72d3f2 = _0x4d9bab[_0x3404cd]) &&
        (_0x3033ad =
          (_0x357f06 < 3
            ? _0x72d3f2(_0x3033ad)
            : _0x357f06 > 3
              ? _0x72d3f2(_0x300eb, _0x3fe9bb, _0x3033ad)
              : _0x72d3f2(_0x300eb, _0x3fe9bb)) || _0x3033ad);
  }
  return (
    _0x357f06 > 3 &&
      _0x3033ad &&
      Object.defineProperty(_0x300eb, _0x3fe9bb, _0x3033ad),
    _0x3033ad
  );
}
let L = class extends t.Disposable {
  constructor(_0x225d0b, _0x18ecac) {
    (super(),
      (this._session = _0x225d0b),
      (this._adapterRegistry = _0x18ecac),
      N(this, "_loading$", new a["BehaviorSubject"](false)),
      N(this, "loading$", this._loading$["asObservable"]()),
      N(this, "_adapter", null),
      N(this, "_openGeneration", 0),
      N(this, "_selectionGeneration", 0));
  }
  async open(_0xa7c758) {
    var _0xff19fa;
    let _0x2e0b66 = this._adapterRegistry["get"](_0xa7c758.type);
    if (!_0x2e0b66)
      throw Error(
        "[HistoryUIService]: No render adapter is registered for unit type " +
          _0xa7c758.type +
          ".",
      );
    let _0x246b79 = ++this._openGeneration;
    if (
      (++this._selectionGeneration,
      (_0xff19fa = this._adapter) == null || _0xff19fa.close(),
      (this._adapter = _0x2e0b66),
      await this._session["open"](_0xa7c758),
      _0x246b79 !== this._openGeneration)
    )
      return;
    let _0x3acada = this._session["currentVersion"];
    _0x3acada && (await this.selectVersion(_0x3acada));
  }
  async selectVersion(_0x4cc92f) {
    let _0x30fd86 = this._session["descriptor"],
      _0x5e99c3 = this._adapter;
    if (!_0x30fd86 || !_0x5e99c3) return;
    let _0x38b86b = this._session["selectVersion"](_0x4cc92f),
      _0x5af2f8 = ++this._selectionGeneration;
    this._loading$["next"](true);
    try {
      let _0x1b7ccb = (0, e.getVersionComparison)(_0x38b86b);
      if (
        (await _0x5e99c3.loadRevision(_0x30fd86.unitId, _0x38b86b),
        _0x5af2f8 !== this._selectionGeneration)
      )
        return;
      await _0x5e99c3.loadChanges(_0x30fd86.unitId, _0x1b7ccb);
    } catch (_0x159f21) {
      if (_0x5af2f8 === this._selectionGeneration) throw _0x159f21;
    } finally {
      _0x5af2f8 === this._selectionGeneration && this._loading$["next"](false);
    }
  }
  close() {
    var _0x20e3be;
    (++this._openGeneration,
      ++this._selectionGeneration,
      (_0x20e3be = this._adapter) == null || _0x20e3be.close(),
      (this._adapter = null),
      this._session["close"](),
      this._loading$["next"](false));
  }
  dispose() {
    (this.close(), this._loading$["complete"](), super.dispose());
  }
};
L = I(
  [F(0, (0, t.Inject)(e.HistorySessionService)), F(1, (0, t.Inject)(P))],
  L,
);
var R = class extends t.Disposable {
  constructor(..._0x348d70) {
    (super(..._0x348d70), N(this, "_resolvers", new Map()));
  }
  register(_0x42baf3, _0x2b6f1d) {
    if (this._resolvers["has"](_0x42baf3))
      throw Error(
        "[HistoryActionSummaryService]: Resolver for " +
          _0x42baf3 +
          " has already been registered.",
      );
    return (
      this._resolvers["set"](_0x42baf3, _0x2b6f1d),
      (0, t.toDisposable)(() => {
        this._resolvers["get"](_0x42baf3) === _0x2b6f1d &&
          this._resolvers["delete"](_0x42baf3);
      })
    );
  }
  resolve(_0xac9caa, _0x3b8952) {
    if (_0xac9caa === undefined) return [];
    let _0x55cf68 = this._resolvers["get"](_0xac9caa);
    return _0x55cf68
      ? _0x55cf68
          .resolve({
            version: _0x3b8952,
            commandIds: new Set(_0x3b8952.commands),
            mutations: _0x3b8952.mutations ?? [],
          })
          .filter(Boolean)
      : [];
  }
  dispose() {
    (this._resolvers["clear"](), super.dispose());
  }
};
function z(_0x2103a4) {
  let {
      versions: _0x1e28c6,
      currentVersion: _0x4f90e2,
      loading: _0x12d949,
      onLoadDetails: _0x1051cc,
      onSelectVersion: _0x5df45e,
      onError: _0x51d00d,
    } = _0x2103a4,
    [_0x766b27, _0x4d69d3] = (0, s.useState)(() => new Set()),
    [_0x1ef48b, _0x3675d4] = (0, s.useState)(() => new Map()),
    [_0x34c4b3, _0x17f447] = (0, s.useState)(() => new Set()),
    _0x16b702 = (0, r.useDependency)(t.LocaleService),
    _0x583469 = (0, s.useMemo)(() => re(_0x1e28c6), [_0x1e28c6]),
    _0x2664ab = async (_0x3327cb) => {
      if (_0x766b27.has(_0x3327cb.id)) {
        _0x4d69d3((_0x5dc8e0) => {
          let _0x53e993 = new Set(_0x5dc8e0);
          return (_0x53e993.delete(_0x3327cb.id), _0x53e993);
        });
        return;
      }
      if (!_0x1ef48b.has(_0x3327cb.id)) {
        _0x17f447((_0x4182e3) => new Set(_0x4182e3).add(_0x3327cb.id));
        try {
          let _0x338eeb = await _0x1051cc(_0x3327cb.id);
          _0x3675d4((_0x445e4a) =>
            new Map(_0x445e4a).set(_0x3327cb.id, _0x338eeb),
          );
        } catch (_0x39b309) {
          _0x51d00d(_0x39b309);
          return;
        } finally {
          _0x17f447((_0x469126) => {
            let _0x1154a9 = new Set(_0x469126);
            return (_0x1154a9.delete(_0x3327cb.id), _0x1154a9);
          });
        }
      }
      _0x4d69d3((_0x17cb29) => new Set(_0x17cb29).add(_0x3327cb.id));
    };
  return _0x1e28c6.length
    ? _0x583469.map((_0x27ec07) =>
        (0, c.jsxs)(
          s.Fragment,
          {
            children: [
              (0, c.jsx)("div", {
                className:
                  "univer-flex univer-items-center univer-gap-2.5 univer-pt-1.5 univer-text-sm univer-font-medium",
                children: ie(_0x27ec07.date, _0x16b702),
              }),
              _0x27ec07.versions["map"]((_0x394ea3) => {
                let _0x16b132 = _0x766b27.has(_0x394ea3.id),
                  _0xd008a8 = _0x1ef48b.get(_0x394ea3.id) ?? [];
                return (0, c.jsxs)(
                  s.Fragment,
                  {
                    children: [
                      (0, c.jsx)(B, {
                        version: _0x394ea3,
                        active:
                          (_0x4f90e2 == null ? undefined : _0x4f90e2.id) ===
                          _0x394ea3.id,
                        expanded: _0x16b132,
                        loading: _0x12d949,
                        loadingDetails: _0x34c4b3.has(_0x394ea3.id),
                        localeService: _0x16b702,
                        onSelect: _0x5df45e,
                        onToggle: _0x2664ab,
                      }),
                      _0x16b132 &&
                        _0xd008a8.map((_0x2bf5a2, _0x449030) =>
                          (0, c.jsxs)(
                            "div",
                            {
                              className:
                                "univer-relative\x20!univer-mb-0\x20!univer-mt-0",
                              children: [
                                (0, c.jsx)(ne, {
                                  last: _0x449030 === _0xd008a8.length - 1,
                                }),
                                (0, c.jsx)(B, {
                                  version: _0x2bf5a2,
                                  active:
                                    (_0x4f90e2 == null
                                      ? undefined
                                      : _0x4f90e2.id) === _0x2bf5a2.id,
                                  loading: _0x12d949,
                                  localeService: _0x16b702,
                                  onSelect: _0x5df45e,
                                }),
                              ],
                            },
                            _0x2bf5a2.id,
                          ),
                        ),
                    ],
                  },
                  _0x394ea3.id,
                );
              }),
            ],
          },
          _0x27ec07.date,
        ),
      )
    : (0, c.jsx)("div", {
        className:
          "univer-flex\x20univer-flex-1\x20univer-items-center\x20univer-justify-center\x20univer-text-gray-500",
        children: (0, c.jsx)(o.LoadingMultiIcon, {
          className: "univer-size-5 univer-animate-spin",
        }),
      });
}
function ne(_0x3c53a2) {
  let { last: _0x362ffa } = _0x3c53a2;
  return (0, c.jsxs)("div", {
    className:
      "univer-absolute univer-left-[30px] univer-top-0 univer-h-full univer-w-2.5 rtl:univer-left-auto rtl:univer-right-[30px]",
    children: [
      (0, c.jsx)("div", {
        className: (0, i.clsx)(
          "univer-absolute\x20univer-left-0\x20univer-top-0\x20univer-w-px\x20univer-bg-gray-100\x20rtl:univer-left-auto\x20rtl:univer-right-0\x20dark:!univer-bg-gray-800",
          _0x362ffa ? "univer-h-1/2" : "univer-h-full",
        ),
      }),
      (0, c.jsx)("div", {
        className:
          "univer-absolute univer-left-0 univer-top-1/2 univer-h-px univer-w-2.5 -univer-translate-y-1/2 univer-bg-gray-100 rtl:univer-left-auto rtl:univer-right-0 dark:!univer-bg-gray-800",
      }),
    ],
  });
}
function B(_0x32866a) {
  var _0x482b50;
  let {
      version: _0x2acd50,
      active: _0x398f23,
      loading: _0x5de168,
      localeService: _0x279367,
      expanded: _0x28bbba = false,
      loadingDetails: _0x1976f7 = false,
      onSelect: _0x173290,
      onToggle: _0x347d41,
    } = _0x32866a,
    _0x1f0b02 = !!_0x2acd50.isDetail,
    _0x4b0841 = !_0x1f0b02 && _0x2acd50.startRevision < _0x2acd50.endRevision,
    _0x1b6015 = !!_0x2acd50.additionalFields,
    _0x2b4ff8 = _0x2acd50.creatorNames["filter"](Boolean),
    _0x3cbc25 =
      _0x2acd50.creatorName || _0x279367.t("edit-history-ui.unknownUser");
  _0x2b4ff8.length && (_0x3cbc25 = _0x2b4ff8.join(",\x20"));
  let _0x2d07f6 = _0x3cbc25;
  _0x1b6015 &&
    (_0x2d07f6 =
      "" +
      _0x279367.t("edit-history-ui.aiAssistant") +
      (_0x3cbc25 ? "\x20(" + _0x3cbc25 + ")" : ""));
  let _0x32c98e = ae(_0x2acd50, _0x279367),
    _0x49d8a3 = (0, r.useDependency)(t.IConfigService),
    _0x1cd886 = (0, r.useDependency)(R),
    _0x5992de =
      (_0x482b50 = _0x49d8a3.getConfig("edit-history-ui.config")) == null
        ? undefined
        : _0x482b50.descriptor,
    _0x158207 = _0x1cd886.resolve(
      _0x5992de == null ? undefined : _0x5992de.type,
      _0x2acd50,
    ),
    _0x1ff1d2 = (_0x43f523) => {
      (_0x43f523.stopPropagation(),
        !_0x1976f7 && _0x347d41 && _0x347d41(_0x2acd50).catch(() => undefined));
    },
    _0x4adb2a = (0, c.jsx)(o.MoreRightIcon, {
      className: "univer-size-8 univer-text-gray-400 rtl:univer-rotate-180",
    });
  return (
    _0x1976f7
      ? (_0x4adb2a = (0, c.jsx)(o.LoadingMultiIcon, {
          className: "univer-animate-spin",
        }))
      : _0x28bbba &&
        (_0x4adb2a = (0, c.jsx)(o.MoreDownIcon, {
          className: "univer-size-8\x20univer-text-gray-400",
        })),
    (0, c.jsxs)("div", {
      className: (0, i.clsx)(
        "univer-min-h-15 univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-rounded-md univer-px-1 univer-py-1.5 univer-transition-colors hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800",
        {
          "univer-bg-gray-50\x20dark:!univer-bg-gray-900": _0x398f23,
          "univer-ml-6\x20rtl:univer-ml-0\x20rtl:univer-mr-6": _0x1f0b02,
          "univer-pointer-events-none\x20univer-opacity-60": _0x5de168,
        },
      ),
      onClick: () => _0x173290(_0x2acd50),
      children: [
        (0, c.jsx)("div", {
          className:
            "univer-flex univer-w-3 univer-items-center univer-justify-center",
          children:
            _0x4b0841 &&
            (0, c.jsx)("div", {
              className:
                "univer-flex\x20univer-size-5\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center",
              onClick: _0x1ff1d2,
              children: _0x4adb2a,
            }),
        }),
        (0, c.jsxs)("div", {
          className:
            "univer-flex\x20univer-flex-1\x20univer-flex-col\x20univer-gap-1",
          children: [
            (0, c.jsx)("div", {
              className:
                "univer-flex univer-min-h-6 univer-w-full univer-items-center univer-justify-between",
              children: (0, c.jsxs)("div", {
                className:
                  "univer-flex univer-flex-1 univer-items-center univer-gap-1.5 univer-text-sm univer-text-gray-600 dark:!univer-text-gray-200",
                children: [
                  _0x1b6015 &&
                    (0, c.jsx)(o.AiAssistantMultiIcon, {
                      className: "univer-size-4 univer-shrink-0",
                    }),
                  (0, c.jsx)("span", {
                    className:
                      "univer-break-all univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
                    children: _0x2d07f6,
                  }),
                  (0, c.jsx)("span", {
                    className:
                      "univer-text-center univer-text-gray-500 dark:!univer-text-gray-400",
                    children: _0x32c98e,
                  }),
                  _0x2acd50.isCurrent &&
                    (0, c.jsx)("span", {
                      className:
                        "univer-ml-1 univer-flex univer-flex-shrink-0 univer-items-center univer-justify-center univer-rounded univer-border univer-border-primary-600 univer-bg-primary-50 univer-px-1.5 univer-text-xs univer-text-primary-600",
                      children: _0x279367.t("edit-history-ui.currentVersion"),
                    }),
                ],
              }),
            }),
            (0, c.jsx)("div", {
              className:
                "univer-text-sm\x20univer-leading-5\x20univer-text-gray-500\x20dark:!univer-text-gray-300",
              children: _0x158207.length
                ? oe(_0x158207, _0x279367)
                : _0x279367.t("edit-history-ui.edited"),
            }),
          ],
        }),
      ],
    })
  );
}
function re(_0x22c56a) {
  return _0x22c56a.reduce((_0x446c19, _0x244248) => {
    let _0x5c9ef9 = (0, t.dateKit)(
        _0x244248.startRevisionCreateTime ?? _0x244248.createTime ?? Date.now(),
      ).format("YYYY-MM-DD"),
      _0x13f1c5 = _0x446c19[_0x446c19.length - 1];
    return (
      (_0x13f1c5 == null ? undefined : _0x13f1c5.date) === _0x5c9ef9
        ? _0x13f1c5.versions["push"](_0x244248)
        : _0x446c19.push({ date: _0x5c9ef9, versions: [_0x244248] }),
      _0x446c19
    );
  }, []);
}
function ie(_0x9b94d3, _0x523e4e) {
  let _0x2110b2 = (0, t.dateKit)().format("YYYY-MM-DD");
  if (_0x9b94d3 === _0x2110b2) return _0x523e4e.t("edit-history-ui.today");
  let _0x41e7dc = t.LOCALE_META[_0x523e4e.getCurrentLocale()].tag,
    _0x4e7e58 =
      _0x9b94d3.slice(0, 4) === _0x2110b2.slice(0, 4)
        ? { month: "numeric", day: "numeric" }
        : { year: "numeric", month: "numeric", day: "numeric" };
  return (0, t.dateKit)(_0x9b94d3).formatIntl(_0x41e7dc, _0x4e7e58);
}
function V(_0x5aa04d, _0x208a6a) {
  return _0x5aa04d
    ? (0, t.dateKit)(_0x5aa04d).formatIntl(
        t.LOCALE_META[_0x208a6a.getCurrentLocale()].tag,
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        },
      )
    : "";
}
function ae(_0x3063b4, _0x3c377d) {
  if (_0x3063b4.isDetail) return V(_0x3063b4.createTime, _0x3c377d);
  let _0x424c7e = V(
      _0x3063b4.startRevisionCreateTime ?? _0x3063b4.createTime,
      _0x3c377d,
    ),
    _0x38cf34 = V(
      _0x3063b4.endRevisionCreateTime ?? _0x3063b4.createTime,
      _0x3c377d,
    );
  return _0x424c7e && _0x38cf34 && _0x424c7e !== _0x38cf34
    ? _0x424c7e + " - " + _0x38cf34
    : _0x424c7e || _0x38cf34;
}
function oe(_0x30aacc, _0x417edf) {
  return new Intl["ListFormat"](
    t.LOCALE_META[_0x417edf.getCurrentLocale()].tag,
    { style: "short", type: "conjunction" },
  ).format(_0x30aacc);
}
function H() {
  let _0x1a7393 = (0, r.useDependency)(t.LocaleService),
    _0x190795 = (0, r.useDependency)(t.ILogService),
    _0x59aaae = (0, r.useDependency)(r.IMessageService),
    _0x3657d0 = (0, r.useDependency)(e.HistorySessionService),
    _0xf491d3 = (0, r.useDependency)(L),
    _0x37b245 = (0, r.useObservable)(_0x3657d0.versions$, []),
    _0x2b6d06 = (0, r.useObservable)(_0x3657d0.currentVersion$, null),
    _0x51f3ff = (0, r.useObservable)(_0xf491d3.loading$, false),
    _0x4120d8 = (0, r.useObservable)(
      _0x3657d0.status$,
      e.HistorySessionStatus["Idle"],
    ),
    _0x31905c = (_0x237086, _0x3844ce) => {
      (_0x190795.error(_0x237086, _0x3844ce),
        _0x59aaae.show({
          content: _0x1a7393.t("edit-history-ui.loadError"),
          type: i.MessageType["Error"],
        }));
    };
  return (0, c.jsx)("div", {
    className: "univer-flex univer-h-full univer-flex-col univer-p-3",
    children: (0, c.jsx)("div", {
      className:
        "univer-flex univer-min-h-0 univer-flex-1 univer-flex-col univer-gap-1 univer-overflow-auto",
      onScroll: (_0x4e4293) => {
        if (_0x4120d8 !== e.HistorySessionStatus["Ready"] || !_0x3657d0.hasMore)
          return;
        let {
          scrollTop: _0x5f3487,
          scrollHeight: _0x41068d,
          clientHeight: _0x5386d5,
        } = _0x4e4293.currentTarget;
        _0x5f3487 + _0x5386d5 < _0x41068d - 5 ||
          _0x3657d0.loadMore().catch((_0xeb9ad6) => {
            _0x31905c(
              "[HistoryPanel]: Failed to load more history versions.",
              _0xeb9ad6,
            );
          });
      },
      children: (0, c.jsx)(z, {
        versions: _0x37b245,
        currentVersion: _0x2b6d06,
        loading: _0x51f3ff,
        onLoadDetails: (_0x30ef65) => _0x3657d0.loadVersionDetails(_0x30ef65),
        onSelectVersion: (_0x54aab3) => {
          _0xf491d3
            .selectVersion(_0x54aab3)
            .catch((_0x1c833d) =>
              _0x31905c(
                "[HistoryPanel]: Failed to load the selected history version.",
                _0x1c833d,
              ),
            );
        },
        onError: (_0x90664a) =>
          _0x31905c(
            "[HistoryPanel]: Failed to load history version details.",
            _0x90664a,
          ),
      }),
    }),
  });
}
const U = "EDIT_HISTORY_PANEL";
let W = class extends t.Disposable {
  constructor(_0x13cee9) {
    (super(), this.disposeWithMe(_0x13cee9.register(U, H)));
  }
};
W = I([F(0, (0, t.Inject)(r.ComponentManager))], W);
let G = class extends t.Disposable {
  constructor(_0x459d93, _0x18f785) {
    super();
    let _0x274153 = _0x18f785.getConfig(O);
    _0x274153 != null &&
      _0x274153.viewerMode &&
      this.disposeWithMe(
        _0x459d93.beforeCommandExecuted((_0x261792, _0x37916f) => {
          if (
            _0x261792.type === t.CommandType["MUTATION"] &&
            !(_0x37916f != null && _0x37916f.fromChangeset)
          )
            throw new t["CustomCommandExecutionError"](
              "[HistoryReadOnlyController]: Mutations are disabled in history viewer mode.",
            );
        }),
      );
  }
};
G = I([F(0, t.ICommandService), F(1, t.IConfigService)], G);
const K = { viewerMode: false };
let q = class extends t.Disposable {
  constructor(
    _0x1d3748,
    _0x252039,
    _0x16fc05,
    _0x58481e,
    _0x461d7c,
    _0x1152a7,
    _0x300f6f,
    _0x5aa4f0,
    _0x1f0f24,
    _0x50378c,
  ) {
    (super(),
      (this._configService = _0x1d3748),
      (this._confirmService = _0x252039),
      (this._logService = _0x16fc05),
      (this._injector = _0x58481e),
      (this._localeService = _0x461d7c),
      (this._historySessionService = _0x1152a7),
      (this._historyUIService = _0x300f6f),
      (this._messageService = _0x5aa4f0),
      (this._sidebarService = _0x1f0f24),
      (this._uiPartsService = _0x50378c),
      N(this, "_sidebarDisposable", null),
      N(this, "_restoring", false),
      N(this, "_restoreGeneration", 0),
      N(this, "_viewerGeneration", 0),
      N(this, "_closing", false));
  }
  registerHeader() {
    this._getConfig().viewerMode &&
      this.disposeWithMe(
        this._uiPartsService["registerComponent"](
          r.BuiltInUIPart["HEADER"],
          () => (0, r.connectInjector)(se, this._injector),
        ),
      );
  }
  async open() {
    let _0x3c2f7b = this._getConfig();
    if (!(
      !_0x3c2f7b.viewerMode ||
      !_0x3c2f7b.descriptor ||
      this._sidebarDisposable
    )) {
      (++this._viewerGeneration,
        (this._sidebarDisposable = this._sidebarService["open"]({
          header: { title: this._localeService["t"]("edit-history-ui.title") },
          children: { label: U },
          onClose: () => this.close(),
        })));
      try {
        await this._historyUIService["open"](_0x3c2f7b.descriptor);
      } catch (_0x1bd218) {
        throw (this.close(), _0x1bd218);
      }
    }
  }
  async restore() {
    let _0x45ffa2 = this._historySessionService["currentVersion"],
      _0x22790b = this._getConfig();
    if (
      _0x45ffa2 == null ||
      _0x45ffa2.endRevision == null ||
      _0x45ffa2.isCurrent ||
      !_0x22790b.canRestore ||
      !_0x22790b.onRestore ||
      this._restoring
    )
      return;
    let _0x1bf786 = ++this._restoreGeneration,
      _0x2e57e6 = this._viewerGeneration;
    this._restoring = true;
    try {
      let _0x247772 = _0x45ffa2.endRevision;
      if (
        !(await this._confirmService["confirm"]({
          id: "edit-history-confirm-restore",
          title: {
            title: this._localeService["t"](
              "edit-history-ui.restoreConfirmTitle",
            ),
          },
          children: {
            title: this._localeService["t"](
              "edit-history-ui.restoreConfirmText",
            ),
          },
          cancelText: this._localeService["t"]("edit-history-ui.cancel"),
          confirmText: this._localeService["t"]("edit-history-ui.confirm"),
        })) ||
        _0x1bf786 !== this._restoreGeneration ||
        _0x2e57e6 !== this._viewerGeneration ||
        !this._sidebarDisposable
      )
        return;
      try {
        await _0x22790b.onRestore(_0x247772);
      } catch (_0x55c85e) {
        if (
          _0x1bf786 !== this._restoreGeneration ||
          _0x2e57e6 !== this._viewerGeneration ||
          !this._sidebarDisposable
        )
          return;
        (this._logService["error"](
          "[HistoryViewerController]: Failed to restore history revision.",
          _0x55c85e,
        ),
          this._messageService["show"]({
            content: this._localeService["t"]("edit-history-ui.restoreError"),
            type: i.MessageType["Error"],
          }));
      }
    } finally {
      _0x1bf786 === this._restoreGeneration && (this._restoring = false);
    }
  }
  close() {
    var _0x29f0f, _0x5868f0;
    if (this._closing) return;
    ((this._closing = true),
      ++this._viewerGeneration,
      ++this._restoreGeneration,
      (this._restoring = false));
    let _0x4f4e91 = this._sidebarDisposable;
    ((this._sidebarDisposable = null),
      _0x4f4e91 == null || _0x4f4e91.dispose(),
      this._historyUIService["close"](),
      (_0x29f0f = (_0x5868f0 = this._getConfig()).onClose) == null ||
        _0x29f0f.call(_0x5868f0),
      (this._closing = false));
  }
  _getConfig() {
    return this._configService["getConfig"]("edit-history-ui.config") ?? K;
  }
};
q = I(
  [
    F(0, t.IConfigService),
    F(1, t.IConfirmService),
    F(2, t.ILogService),
    F(3, (0, t.Inject)(t.Injector)),
    F(4, (0, t.Inject)(t.LocaleService)),
    F(5, (0, t.Inject)(e.HistorySessionService)),
    F(6, (0, t.Inject)(L)),
    F(7, r.IMessageService),
    F(8, r.ISidebarService),
    F(9, r.IUIPartsService),
  ],
  q,
);
function se() {
  let _0x9fc105 = (0, r.useDependency)(t.LocaleService),
    _0x31949a = (0, r.useDependency)(q),
    _0x4ea4d4 = (0, r.useDependency)(t.IConfigService),
    _0x1a0cdf = (0, r.useObservable)(
      (0, r.useDependency)(e.HistorySessionService).currentVersion$,
      null,
    ),
    _0x12f938 = _0x4ea4d4.getConfig(O);
  return (0, c.jsxs)("div", {
    className: (0, i.clsx)(
      "univer-flex univer-h-12 univer-items-center univer-justify-between univer-px-3",
      i.borderBottomClassName,
    ),
    children: [
      (0, c.jsxs)(i.Button, {
        onClick: () => _0x31949a.close(),
        children: [
          (0, c.jsx)(o.ArrowLeftIcon, { className: "univer-size-4" }),
          _0x9fc105.t("edit-history-ui.back"),
        ],
      }),
      (0, c.jsx)(i.Button, {
        variant: "primary",
        disabled:
          !(_0x12f938 != null && _0x12f938.canRestore) ||
          _0x1a0cdf == null ||
          _0x1a0cdf.isCurrent,
        onClick: () => {
          _0x31949a.restore().catch(() => undefined);
        },
        children: _0x9fc105.t("edit-history-ui.restore"),
      }),
    ],
  });
}
const J = { insert: "green.800", delete: "red.800", update: "blue.800" };
let Y = class extends t.Disposable {
  constructor(_0x59b1c4) {
    (super(),
      (this._themeService = _0x59b1c4),
      N(this, "_styles", {
        insert: { fill: "", stroke: "" },
        delete: { fill: "", stroke: "" },
        update: { fill: "", stroke: "" },
      }),
      this.disposeWithMe(
        this._themeService["currentTheme$"].subscribe(() =>
          this._refreshStyles(),
        ),
      ));
  }
  getStyle(_0x1f2fa6) {
    return this._styles[_0x1f2fa6];
  }
  _refreshStyles() {
    this._styles = {
      insert: this._createStyle("insert"),
      delete: this._createStyle("delete"),
      update: this._createStyle("update"),
    };
  }
  _createStyle(_0x4a8b74) {
    let _0x36928d = this._themeService["getColorFromTheme"](J[_0x4a8b74]);
    return {
      fill: new t["ColorKit"](_0x36928d).setAlpha(0.5).toRgbString(),
      stroke: new t["ColorKit"](_0x36928d).setAlpha(0.9).toRgbString(),
    };
  }
};
Y = I([F(0, (0, t.Inject)(t.ThemeService))], Y);
const X = 1000;
let Z = class extends t.Disposable {
  constructor(_0x1b8cb9, _0x3e7d32) {
    (super(),
      (this._renderManagerService = _0x1b8cb9),
      (this._highlightService = _0x3e7d32),
      N(this, "_overlays", new Map()),
      N(this, "_generations", new Map()));
  }
  async show(_0x45aad8, _0x4545b8) {
    let _0x4b4cfd = (this._generations["get"](_0x45aad8) ?? 0) + 1;
    (this._generations["set"](_0x45aad8, _0x4b4cfd),
      this._removeOverlays(_0x45aad8));
    let _0x4f0a5c = await this._resolveTargets(_0x45aad8, _0x4545b8, _0x4b4cfd);
    if (this._generations["get"](_0x45aad8) !== _0x4b4cfd || !_0x4f0a5c) return;
    let { scene: _0x252a87 } = _0x4f0a5c,
      _0x587941 = ce(_0x4f0a5c.items),
      _0x65e88 = [];
    if (
      (_0x587941.forEach(({ target: _0x5bf587, object: _0x482a7e }) => {
        let _0x28b658 =
          _0x5bf587.bounds ??
          (_0x482a7e == null ? undefined : _0x482a7e.getRealBound());
        if (!_0x28b658 || !Q(_0x28b658)) return;
        let _0x500da5 = this._highlightService["getStyle"](_0x5bf587.kind),
          _0x3612e0 = new l.Rect("edit-history-highlight-" + _0x5bf587.id, {
            left: _0x28b658.left,
            top: _0x28b658.top,
            width: _0x28b658.width,
            height: _0x28b658.height,
            angle: (_0x482a7e == null ? undefined : _0x482a7e.angle) ?? 0,
            fill: _0x5bf587.outlineOnly ? undefined : _0x500da5.fill,
            stroke: _0x500da5.stroke,
            strokeWidth: _0x5bf587.outlineOnly ? 4 : 2,
            evented: false,
            zIndex: X,
          });
        _0x65e88.push({
          target: _0x5bf587,
          shape: _0x3612e0,
          object: _0x482a7e,
          objectSubscription: null,
        });
      }),
      _0x65e88.length === 0)
    )
      return;
    let _0x3337bc = {
      scene: _0x252a87,
      bindings: _0x65e88,
      transformSubscriptions: [],
      refreshPromise: null,
      pulseInterval: null,
      pulseTimeout: null,
    };
    (this._overlays["set"](_0x45aad8, _0x3337bc),
      this._bindOverlayLifecycle(_0x45aad8, _0x3337bc),
      _0x252a87.addObjects(
        _0x65e88.map(({ shape: _0x130047 }) => _0x130047),
        X,
      ),
      _0x252a87.makeDirty(true),
      this._startPulse(_0x3337bc));
  }
  clear(_0x2c28ac) {
    (this._generations["set"](
      _0x2c28ac,
      (this._generations["get"](_0x2c28ac) ?? 0) + 1,
    ),
      this._removeOverlays(_0x2c28ac));
  }
  dispose() {
    (Array.from(this._overlays["keys"]()).forEach((_0x1e44e4) =>
      this.clear(_0x1e44e4),
    ),
      super.dispose());
  }
  async _resolveTargets(_0x380fd8, _0x2d5934, _0x3e3a46) {
    for (let _0x2dcf6a = 0; _0x2dcf6a <= 120; _0x2dcf6a++) {
      if (this._generations["get"](_0x380fd8) !== _0x3e3a46) return null;
      let _0xa984e8 =
        this._renderManagerService["getRenderUnitById"](_0x380fd8);
      if (_0xa984e8) {
        let _0x283385 = _0x2d5934.map((_0x3eb65e) => ({
          target: _0x3eb65e,
          object: _0x3eb65e.objectKey
            ? (_0xa984e8.scene["getObjectIncludeInGroup"](
                _0x3eb65e.objectKey,
              ) ?? _0xa984e8.scene["getObject"](_0x3eb65e.objectKey))
            : null,
        }));
        if (
          !_0x283385.some(
            ({ target: _0x7366d2, object: _0x43bd66 }) =>
              !_0x7366d2.bounds && _0x7366d2.objectKey && !_0x43bd66,
          ) ||
          _0x2dcf6a === 120
        )
          return {
            scene: _0xa984e8.scene,
            items: _0x283385.map(
              ({ target: _0x42bd99, object: _0x43b009 }) => ({
                target: _0x42bd99,
                object:
                  _0x43b009 ??
                  this._getFallbackObject(
                    _0xa984e8.scene,
                    _0xa984e8.mainComponent ?? null,
                    _0x42bd99,
                  ),
              }),
            ),
          };
      }
      await ue();
    }
    return null;
  }
  _getFallbackObject(_0x9e5503, _0x26c2b8, _0x51d1d2) {
    return _0x51d1d2.fallbackObjectKey
      ? (_0x9e5503.getObject(_0x51d1d2.fallbackObjectKey) ?? null)
      : _0x26c2b8;
  }
  _removeOverlays(_0x5c90af) {
    let _0x29fd38 = this._overlays["get"](_0x5c90af);
    _0x29fd38 &&
      (this._stopPulse(_0x29fd38),
      _0x29fd38.transformSubscriptions["forEach"]((_0x3b299a) =>
        _0x3b299a.unsubscribe(),
      ),
      _0x29fd38.bindings["forEach"](
        ({ objectSubscription: _0x34381d, shape: _0x1248e8 }) => {
          (_0x34381d == null || _0x34381d.unsubscribe(),
            _0x29fd38.scene["removeObject"](_0x1248e8));
        },
      ),
      _0x29fd38.scene["makeDirty"](true),
      this._overlays["delete"](_0x5c90af));
  }
  _bindOverlayLifecycle(_0x4c8a40, _0x1bd1fc) {
    (_0x1bd1fc.bindings["forEach"]((_0x47ade9) =>
      this._bindObjectTransform(_0x4c8a40, _0x1bd1fc, _0x47ade9),
    ),
      _0x1bd1fc.transformSubscriptions["push"](
        _0x1bd1fc.scene["onTransformChange$"].subscribeEvent(() =>
          this._queueOverlayRefresh(_0x4c8a40, _0x1bd1fc),
        ),
      ));
    let _0x194520 = _0x1bd1fc.scene["getEngine"]();
    _0x194520 &&
      _0x1bd1fc.transformSubscriptions["push"](
        _0x194520.onTransformChange$["subscribeEvent"](() =>
          this._queueOverlayRefresh(_0x4c8a40, _0x1bd1fc),
        ),
      );
  }
  _bindObjectTransform(_0x2a46a6, _0x28cb13, _0x54dfae) {
    var _0x152703, _0x4f22dc;
    ((_0x152703 = _0x54dfae.objectSubscription) == null ||
      _0x152703.unsubscribe(),
      (_0x54dfae.objectSubscription =
        ((_0x4f22dc = _0x54dfae.object) == null
          ? undefined
          : _0x4f22dc.onTransformChange$["subscribeEvent"](() => {
              this._refreshOverlay(_0x2a46a6, _0x28cb13);
            })) ?? null));
  }
  _queueOverlayRefresh(_0x5cbe03, _0x46f886) {
    _0x46f886.refreshPromise ||= Promise.resolve().then(() => {
      ((_0x46f886.refreshPromise = null),
        this._refreshOverlay(_0x5cbe03, _0x46f886));
    });
  }
  _refreshOverlay(_0x570a98, _0x43a76f) {
    if (this._overlays["get"](_0x570a98) !== _0x43a76f) return;
    let _0x2790af = false;
    (_0x43a76f.bindings["forEach"]((_0x2ecd6a) => {
      let _0x5c32fb = this._resolveCurrentObject(_0x43a76f.scene, _0x2ecd6a);
      _0x5c32fb !== _0x2ecd6a.object &&
        ((_0x2ecd6a.object = _0x5c32fb),
        this._bindObjectTransform(_0x570a98, _0x43a76f, _0x2ecd6a));
      let _0x5d2f71 =
        _0x2ecd6a.target["bounds"] ??
        (_0x5c32fb == null ? undefined : _0x5c32fb.getRealBound());
      !_0x5d2f71 ||
        !Q(_0x5d2f71) ||
        (_0x2ecd6a.shape["transformByState"]({
          left: _0x5d2f71.left,
          top: _0x5d2f71.top,
          width: _0x5d2f71.width,
          height: _0x5d2f71.height,
          angle: (_0x5c32fb == null ? undefined : _0x5c32fb.angle) ?? 0,
        }),
        (_0x2790af = true));
    }),
      _0x2790af && _0x43a76f.scene["makeDirty"](true));
  }
  _resolveCurrentObject(_0x478f3f, _0x456522) {
    if (_0x456522.target["bounds"]) return _0x456522.object;
    if (_0x456522.target["objectKey"]) {
      let _0x24352e =
        _0x478f3f.getObjectIncludeInGroup(_0x456522.target["objectKey"]) ??
        _0x478f3f.getObject(_0x456522.target["objectKey"]);
      if (_0x24352e) return _0x24352e;
    }
    return _0x456522.target["fallbackObjectKey"]
      ? (_0x478f3f.getObject(_0x456522.target["fallbackObjectKey"]) ??
          _0x456522.object)
      : _0x456522.object;
  }
  _startPulse(_0x1add2f) {
    var _0x513816, _0xc37e01;
    if (
      typeof window < "u" &&
      (_0x513816 = (_0xc37e01 = window).matchMedia) != null &&
      _0x513816.call(_0xc37e01, "(prefers-reduced-motion: reduce)").matches
    )
      return;
    let _0x10ee83 = false;
    ((_0x1add2f.pulseInterval = globalThis.setInterval(() => {
      ((_0x10ee83 = !_0x10ee83),
        this._setOverlayOpacity(_0x1add2f, _0x10ee83 ? 0.25 : 1));
    }, 500)),
      (_0x1add2f.pulseTimeout = globalThis.setTimeout(() => {
        (this._stopPulse(_0x1add2f), this._setOverlayOpacity(_0x1add2f, 1));
      }, 4000)));
  }
  _stopPulse(_0x439abd) {
    (_0x439abd.pulseInterval !== null &&
      (globalThis.clearInterval(_0x439abd.pulseInterval),
      (_0x439abd.pulseInterval = null)),
      _0x439abd.pulseTimeout !== null &&
        (globalThis.clearTimeout(_0x439abd.pulseTimeout),
        (_0x439abd.pulseTimeout = null)));
  }
  _setOverlayOpacity(_0x3b4878, _0x28f2b3) {
    (_0x3b4878.bindings["forEach"](({ shape: _0x15eeca }) =>
      _0x15eeca.setProps({ fillOpacity: _0x28f2b3, strokeOpacity: _0x28f2b3 }),
    ),
      _0x3b4878.scene["makeDirty"](true));
  }
};
Z = I([F(0, l.IRenderManagerService), F(1, (0, t.Inject)(Y))], Z);
function ce(_0x389837) {
  let _0x5d1e12 = new Map();
  return (
    _0x389837.forEach((_0x53a060) => {
      var _0x2ad737, _0x5ecfcf;
      let _0x62351f =
        _0x53a060.target["bounds"] ??
        ((_0x2ad737 = _0x53a060.object) == null
          ? undefined
          : _0x2ad737.getRealBound());
      if (!_0x62351f || !Q(_0x62351f)) return;
      let _0x31dae7 = [
          _0x62351f.left,
          _0x62351f.top,
          _0x62351f.width,
          _0x62351f.height,
          ((_0x5ecfcf = _0x53a060.object) == null
            ? undefined
            : _0x5ecfcf.angle) ?? 0,
        ].join(":"),
        _0x15d03a = _0x5d1e12.get(_0x31dae7);
      if (!_0x15d03a) {
        _0x5d1e12.set(_0x31dae7, _0x53a060);
        return;
      }
      _0x5d1e12.set(_0x31dae7, {
        object: _0x15d03a.object,
        target: {
          ..._0x15d03a.target,
          kind: le(_0x15d03a.target["kind"], _0x53a060.target["kind"]),
          outlineOnly:
            _0x15d03a.target["outlineOnly"] || _0x53a060.target["outlineOnly"],
        },
      });
    }),
    Array.from(_0x5d1e12.values())
  );
}
function le(_0x1f5117, _0x537e0f) {
  return _0x1f5117 === _0x537e0f
    ? _0x1f5117
    : _0x1f5117 === "update"
      ? _0x537e0f
      : _0x537e0f === "update"
        ? _0x1f5117
        : "update";
}
function Q(_0xa602f2) {
  return (
    [_0xa602f2.left, _0xa602f2.top, _0xa602f2.width, _0xa602f2.height].every(
      Number.isFinite,
    ) &&
    _0xa602f2.width > 0 &&
    _0xa602f2.height > 0
  );
}
function ue() {
  return new Promise((_0x21122f) => globalThis.setTimeout(_0x21122f, 16));
}
let $ = class extends t.Plugin {
  constructor(_0x4e0ecf = k, _0x2830cd, _0x47c677, _0x451363) {
    (super(),
      (this._config = _0x4e0ecf),
      (this._injector = _0x2830cd),
      (this._configService = _0x47c677),
      (this._logService = _0x451363),
      N(this, "_historyViewerController", null));
    let { ..._0x3fc2fe } = (0, t.merge)({}, k, this._config);
    this._configService["setConfig"](O, _0x3fc2fe);
  }
  onStarting() {
    ((0, t.registerDependencies)(this._injector, [
      [W],
      [G],
      [q],
      [R],
      [Z],
      [Y],
      [P],
      [L],
    ]),
      this._injector["get"](W),
      this._injector["get"](G),
      (this._historyViewerController = this._injector["get"](q)),
      this._historyViewerController["registerHeader"]());
  }
  onRendered() {
    if (!this._historyViewerController) {
      this._logService["error"](
        "[UniverEditHistoryUIPlugin]:\x20History\x20viewer\x20controller\x20is\x20not\x20available.",
      );
      return;
    }
    this._historyViewerController["open"]().catch((_0x12fe4e) => {
      this._logService["error"](
        "[UniverEditHistoryUIPlugin]: Failed to open history viewer.",
        _0x12fe4e,
      );
    });
  }
};
(N($, "pluginName", "UNIVER_EDIT_HISTORY_UI_PLUGIN"),
  N($, "packageName", A),
  N($, "version", j),
  N($, "type", t.UniverInstanceType["UNIVER_UNKNOWN"]),
  ($ = I(
    [
      (0, t.DependentOn)(
        n.UniverLicensePlugin,
        e.UniverEditHistoryPlugin,
        r.UniverUIPlugin,
      ),
      F(1, (0, t.Inject)(t.Injector)),
      F(2, t.IConfigService),
      F(3, t.ILogService),
    ],
    $,
  )),
  (exports.EDIT_HISTORY_UI_PLUGIN_CONFIG_KEY = O),
  (exports.HistoryActionSummaryService = R),
  Object.defineProperty(exports, "HistoryCanvasHighlightService", {
    enumerable: true,
    get: function () {
      return Z;
    },
  }),
  Object.defineProperty(exports, "HistoryHighlightService", {
    enumerable: true,
    get: function () {
      return Y;
    },
  }),
  (exports.HistoryRenderAdapterRegistryService = P),
  Object.defineProperty(exports, "UniverEditHistoryUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.getUnitComparisonEntityLabel = f),
  (exports.getUnitComparisonPathLabels = g),
  (exports.getUnitComparisonValueLabel = T),
  (exports.unitComparisonLocaleKey = d));
