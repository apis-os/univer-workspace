import {
  HistorySessionService as _0x582707,
  HistorySessionStatus as _0x3ba7be,
  UnitComparisonEntityType as _0xb33e08,
  UniverEditHistoryPlugin as _0x26bc1b,
  getVersionComparison as _0x2e3c99,
} from "@univerjs-pro/edit-history";
import {
  BooleanNumber as _0x36c3e8,
  CellValueType as _0x5b56ad,
  ColorKit as _0x370dbb,
  CommandType as _0x4b45c8,
  CustomCommandExecutionError as _0x5c6769,
  DependentOn as _0x4bbb87,
  Disposable as _0x56c6b5,
  HorizontalAlign as _0x4662d7,
  ICommandService as _0x17c823,
  IConfigService as _0x4cd16d,
  IConfirmService as _0x1b8308,
  ILogService as _0x4fa885,
  Inject as _0x1c56bb,
  Injector as _0x2de5ef,
  LOCALE_META as _0x25582d,
  LocaleService as _0x4fb05a,
  Plugin as _0x5d7241,
  ThemeService as _0x3acc86,
  UniverInstanceType as _0x1baa2f,
  VerticalAlign as _0xd2f9c4,
  WrapStrategy as _0x5cf7f4,
  dateKit as _0x37bedf,
  merge as _0x590275,
  registerDependencies as _0x2a8a56,
  toDisposable as _0x2dfc74,
} from "@univerjs/core";
import { UniverLicensePlugin as _0x52acd8 } from "@univerjs-pro/license";
import {
  BuiltInUIPart as _0x17ddca,
  ComponentManager as _0x26bdca,
  IMessageService as _0x833354,
  ISidebarService as _0x2314a8,
  IUIPartsService as _0x17e5c8,
  UniverUIPlugin as _0x420c21,
  connectInjector as _0x113679,
  useDependency as _0x1e428e,
  useObservable as _0x10f1ef,
} from "@univerjs/ui";
import {
  Button as _0x24dddf,
  MessageType as _0x300761,
  borderBottomClassName as _0x2dfed0,
  clsx as _0x3404aa,
} from "@univerjs/design";
import { BehaviorSubject as _0x19fc31 } from "rxjs";
import {
  AiAssistantMultiIcon as _0xb5f74b,
  ArrowLeftIcon as _0x406b1a,
  LoadingMultiIcon as _0x5438f6,
  MoreDownIcon as _0x42ead3,
  MoreRightIcon as _0x3db48f,
} from "@univerjs/icons";
import {
  Fragment as _0x4f8ae1,
  useMemo as _0x2d91cb,
  useState as _0x104187,
} from "react";
import { jsx as _0x5f5cb9, jsxs as _0x333e16 } from "react/jsx-runtime";
import {
  IRenderManagerService as _0x417cc8,
  Rect as _0x5d77c6,
} from "@univerjs/engine-render";
const we = {
  [_0xb33e08.UNIT]: "unit",
  [_0xb33e08.WORKBOOK]: "workbook",
  [_0xb33e08.WORKSHEET]: "worksheet",
  [_0xb33e08.CELL]: "cell",
  [_0xb33e08.ROW_COLUMN]: "rowColumn",
  [_0xb33e08.MOVE]: "move",
  [_0xb33e08.CONDITION_FORMAT]: "conditionFormat",
  [_0xb33e08.DATA_VALIDATION]: "dataValidation",
  [_0xb33e08.SPARKLINE]: "sparkline",
  [_0xb33e08.TABLE]: "table",
  [_0xb33e08.SHAPE]: "shape",
  [_0xb33e08.CHART]: "chart",
  [_0xb33e08.PIVOT]: "pivot",
  [_0xb33e08.PARAGRAPH]: "paragraph",
  [_0xb33e08.TEXT_STYLE]: "styles",
  [_0xb33e08.SECTION]: "section",
  [_0xb33e08.BLOCK_RANGE]: "range",
  [_0xb33e08.CUSTOM_RANGE]: "range",
  [_0xb33e08.TABLE_RANGE]: "range",
  [_0xb33e08.CUSTOM_BLOCK]: "block",
  [_0xb33e08.COLUMN_GROUP]: "columnGroup",
  [_0xb33e08.DRAWING]: "drawing",
  [_0xb33e08.HEADER]: "header",
  [_0xb33e08.FOOTER]: "footer",
  [_0xb33e08.DOCUMENT_STYLE]: "styles",
  [_0xb33e08.DOCUMENT_SETTING]: "settings",
  [_0xb33e08.CUSTOM_DECORATION]: "decoration",
  [_0xb33e08.DOC_HYPERLINK]: "link",
  [_0xb33e08.DOC_CALLOUT]: "callout",
  [_0xb33e08.DOC_QUOTE]: "quote",
  [_0xb33e08.DOC_CHART]: "chart",
  [_0xb33e08.DOC_CHART_DATA]: "chartData",
  [_0xb33e08.DOC_CODE]: "code",
  [_0xb33e08.DOC_LATEX]: "formula",
  [_0xb33e08.DOC_SHAPE_RESOURCE]: "shape",
  [_0xb33e08.DOC_TABLE_RESOURCE]: "table",
  [_0xb33e08.SLIDE]: "slide",
  [_0xb33e08.SLIDE_ELEMENT]: "slideElement",
  [_0xb33e08.SLIDE_TRANSITION]: "transition",
  [_0xb33e08.SLIDE_TRANSITION_REFERENCE]: "transitionReference",
  [_0xb33e08.SLIDE_MASTER]: "slideMaster",
  [_0xb33e08.SLIDE_LAYOUT]: "slideLayout",
  [_0xb33e08.SLIDE_THEME]: "theme",
  [_0xb33e08.SLIDE_CHART]: "chart",
  [_0xb33e08.SLIDE_CHART_DATA]: "chartData",
  [_0xb33e08.SLIDE_TABLE]: "table",
  [_0xb33e08.BASE]: "base",
  [_0xb33e08.FIELD]: "field",
  [_0xb33e08.RECORD]: "record",
  [_0xb33e08.VIEW]: "view",
  [_0xb33e08.BOARD_PAGE]: "boardPage",
  [_0xb33e08.BOARD_ELEMENT]: "boardElement",
  [_0xb33e08.BOARD_THEME]: "theme",
  [_0xb33e08.BOARD_CHART]: "chart",
  [_0xb33e08.BOARD_CHART_DATA]: "chartData",
  [_0xb33e08.BOARD_TABLE]: "table",
};
function N(_0x2e9092) {
  return "edit-history-ui.comparison." + _0x2e9092;
}
function Te(_0xa941d6) {
  let _0x178b9d = _0xa941d6.split(":")[0];
  return I(we[_0x178b9d] ?? "content");
}
const Ee = Object.fromEntries(
    Object.entries({
      type: "type t kind subType rangeType pageType autoFitType hRule capType lineJoinType",
      valueType: "valueType",
      dataType: "dataType fieldDataType dataFieldType",
      displayName:
        "displayName displayNameRecord label placeholder description sourceName",
      metadata:
        "meta custom system managed resources context dataModel sourceModel structureRevision structureScopeId structured semanticRole modeId version customFields",
      identity: "id uid cfId paragraphId sectionId __record_id",
      reference:
        "unitId subUnitId sheetId tableId fieldId fieldIds dataFieldId parentId parentNodeId childNodeId shapeId listId primaryFieldId startDateFieldId layoutPageId masterPageId connectionSiteId rangeKey orderKey",
      property: "property properties",
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
      height: "height minHeight",
      range:
        "range ranges rangeInfo sourceRangeInfo mergeData endAbsoluteRefType startAbsoluteRefType",
      theme: "theme tableStyleId palette branchColorKey",
      layout:
        "geometry\x20transform\x20sheetTransform\x20axisAlignSheetTransform\x20layout\x20rect\x20groupBaseBoundIsLocal\x20customGeometry\x20pathLst\x20adjustValues\x20adj\x20textRectPadding",
      paragraph:
        "paragraph paragraphs paragraphStyle bullet listType nestingLevel zeroWidthParagraphBreak",
      section: "section\x20sectionBreaks",
      header:
        "header\x20columnHeader\x20rowHeader\x20showHeader\x20repeatHeaderRow",
      footer: "footer\x20showFooter",
      code: "code\x20language",
      columns: "columns column col columnOffset",
      table: "table\x20tables\x20tableRows\x20tableCells\x20cells",
      shape: "shape shapeData drawings drawingsOrder shapeType",
      chart: "chart chartType seriesIndexes dimension measure subtotal",
      transition: "transition",
      duration: "duration",
      direction:
        "direction textDirection rightToLeft flipX flipY isHorizontal horizontalAlign verticalAlign ht vt ha va side",
      gradient: "gradientStops gradientAngle gradientType",
      connector:
        "connectorData\x20routing\x20routingMode\x20endMarker\x20startMarker\x20fallbackPoint\x20waypoints\x20points\x20curveData\x20tension",
      mindmap: "mindmap",
      swimlane: "swimlane lanes containerData",
      brush: "ink tool",
      attachment: "attachments attachmentSets customBlocks",
      readOnly: "readonly",
      offset:
        "offset rowOffset columnOffset scrollLeft scrollTop xSplit ySplit x y position left top right bottom l r b",
      order: "order fieldOrder pageOverThenDown valueIndex",
      size: "size fontSize fs zoomRatio dataRecordCount rowSpan columnSpan",
      spacing: "gap\x20marginTop\x20marginBottom\x20marginLeft\x20marginRight",
      revision: "rev revision",
      font: "ff font fontFamily",
      link: "url link",
      group: "group children parent child groupBaseBoundIsLocal",
      list: "list\x20tableColumnFilterList\x20filters\x20filter",
      wrap: "tb wrapStrategy textWrap pageWrap",
      automatic: "ia automatic autoFitType",
      textType:
        "body\x20doc\x20documentStyle\x20shapeText\x20textData\x20textRuns\x20textStyle\x20ts\x20st\x20ed\x20v\x20val\x20value\x20values\x20content\x20customRanges\x20customDecorations\x20decorations\x20data\x20text",
      enabled:
        "visible selectable showDropDown showGridlines stopIfTrue showMasterSp isEmpty isCustom isRichText isTextBox freeze frozenFieldCount",
      automaticHeight: "ia",
      row: "row rows",
      start: "start startIndex st",
      end: "end ed",
      operator: "operator",
      rule: "rule",
      color: "color rgb hexCode tabColor backgroundColor",
      title: "title titles",
      displayMode: "displayMode",
      visible: "visible",
      selectable: "selectable",
      freeze: "freeze frozenFieldCount",
      stopIfTrue: "stopIfTrue",
      showGridlines: "showGridlines",
      showDropDown: "showDropDown",
      custom: "isCustom custom",
      count: "count",
      isEmpty: "isEmpty",
    }).flatMap(([_0x2ffea2, _0x17f161]) =>
      _0x17f161.split("\x20").map((_0x3077e0) => [_0x3077e0, _0x2ffea2]),
    ),
  ),
  De = {
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
  Oe = {
    startRow: ["start", "row"],
    endRow: ["end", "row"],
    startColumn: ["start", "column"],
    endColumn: ["end", "column"],
  };
function ke(_0x344ebd) {
  return _0x344ebd.length === 0
    ? [I("item")]
    : _0x344ebd.flatMap((_0x362982) =>
        /^\d+$/u.test(_0x362982)
          ? I("itemNumber", String(Number(_0x362982) + 1))
          : (
              Oe[_0x362982] ?? [De[_0x362982] ?? Ee[_0x362982] ?? "unknown"]
            ).map((_0x4efe60) => I(_0x4efe60)),
      );
}
const Ae = new Set(
    "bl it hd ia hidden readonly visible selectable collapsed showHeader showFooter showGridlines showDropDown stopIfTrue showMasterSp repeatHeaderRow flipX flipY rightToLeft isEmpty isCustom isRichText isTextBox isHorizontal managed pageOverThenDown pageWrap zeroWidthParagraphBreak groupBaseBoundIsLocal"[
      "split"
    ]("\x20"),
  ),
  je = new Set([
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
    containsErrors: "error",
  },
  Ne = {
    [_0x5b56ad.STRING]: "textType",
    [_0x5b56ad.NUMBER]: "numberType",
    [_0x5b56ad.BOOLEAN]: "booleanType",
    [_0x5b56ad.FORCE_STRING]: "forceString",
  },
  P = {
    [_0x4662d7.UNSPECIFIED]: "automatic",
    [_0x4662d7.LEFT]: "left",
    [_0x4662d7.CENTER]: "center",
    [_0x4662d7.RIGHT]: "right",
    [_0x4662d7.JUSTIFIED]: "justified",
    [_0x4662d7.BOTH]: "justified",
    [_0x4662d7.DISTRIBUTED]: "distributed",
  },
  F = {
    [_0xd2f9c4.UNSPECIFIED]: "automatic",
    [_0xd2f9c4.TOP]: "top",
    [_0xd2f9c4.MIDDLE]: "middle",
    [_0xd2f9c4.BOTTOM]: "bottom",
  },
  Pe = {
    [_0x5cf7f4.UNSPECIFIED]: "automatic",
    [_0x5cf7f4.WRAP]: "wrap",
    [_0x5cf7f4.OVERFLOW]: "overflow",
    [_0x5cf7f4.CLIP]: "clip",
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
function Ie(_0x184f94, _0xe18c76, _0x4d5ed8) {
  if (_0x4d5ed8 == null || _0xe18c76.length === 0) return;
  let _0xe9fd7f = _0x184f94.split(":")[0],
    _0x21a413 = _0xe18c76[_0xe18c76.length - 1];
  if (
    _0xe9fd7f === _0xb33e08.RECORD ||
    (_0xe9fd7f === _0xb33e08.CELL &&
      !["style", "valueType"].includes(_0xe18c76[0])) ||
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
    ].includes(_0x21a413)
  )
    return;
  let _0x432556 =
      typeof _0x4d5ed8 == "string" && /^\d+$/u.test(_0x4d5ed8)
        ? Number(_0x4d5ed8)
        : _0x4d5ed8,
    _0x4f1756 = Le(
      _0xe9fd7f,
      _0xe18c76.length,
      _0x21a413,
      _0x432556,
      _0x4d5ed8,
    );
  if (_0x4f1756 !== undefined) return I(_0x4f1756);
  if (
    _0xe9fd7f === _0xb33e08.TABLE &&
    _0x21a413 === "displayName" &&
    typeof _0x4d5ed8 == "string"
  ) {
    let _0x5c0a9b = /^sheets-table\.columnPrefix (\d+)$/u.exec(_0x4d5ed8);
    if (_0x5c0a9b) return I("columnNumber", _0x5c0a9b[1]);
  }
}
function Le(_0x19d145, _0x572538, _0x34e2e7, _0x175228, _0x140740) {
  var _0x51f615;
  if (Ae.has(_0x34e2e7))
    return _0x175228 === true ||
      _0x175228 === _0x36c3e8.TRUE ||
      _0x175228 === "true"
      ? "enabled"
      : _0x175228 === false ||
          _0x175228 === _0x36c3e8.FALSE ||
          _0x175228 === "false"
        ? "disabled"
        : undefined;
  if (
    _0x19d145 === _0xb33e08.CELL &&
    _0x572538 === 1 &&
    _0x34e2e7 === "valueType"
  )
    return Ne[Number(_0x175228)];
  let _0x3e9f1c =
    (_0x51f615 = Fe[_0x34e2e7]) == null
      ? undefined
      : _0x51f615[Number(_0x175228)];
  if (_0x3e9f1c !== undefined) return _0x3e9f1c;
  if (
    je.has(_0x34e2e7) ||
    _0x34e2e7 === "operator" ||
    _0x34e2e7 === "direction"
  )
    return Me[String(_0x140740)];
}
function I(_0x156283, ..._0x5aec5f) {
  return {
    key: N(_0x156283),
    ...(_0x5aec5f.length ? { args: _0x5aec5f } : {}),
  };
}
const L = "edit-history-ui.config",
  Re = { viewerMode: false, canRestore: false };
var ze = "@univerjs-pro/edit-history-ui",
  Be = "1.0.0-insiders.20260907-70fc579";
function R(_0x137e8c) {
  "@babel/helpers - typeof";
  return (
    (R =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x9cd811) {
            return typeof _0x9cd811;
          }
        : function (_0x5ec2dc) {
            return _0x5ec2dc &&
              typeof Symbol == "function" &&
              _0x5ec2dc.constructor === Symbol &&
              _0x5ec2dc !== Symbol.prototype
              ? "symbol"
              : typeof _0x5ec2dc;
          }),
    R(_0x137e8c)
  );
}
function Ve(_0x4224ac, _0x5e78ac) {
  if (R(_0x4224ac) != "object" || !_0x4224ac) return _0x4224ac;
  var _0x3c1859 = _0x4224ac[Symbol.toPrimitive];
  if (_0x3c1859 !== undefined) {
    var _0x3e8b54 = _0x3c1859.call(_0x4224ac, _0x5e78ac || "default");
    if (R(_0x3e8b54) != "object") return _0x3e8b54;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5e78ac === "string" ? String : Number)(_0x4224ac);
}
function He(_0x5af741) {
  var _0x87145e = Ve(_0x5af741, "string");
  return R(_0x87145e) == "symbol" ? _0x87145e : _0x87145e + "";
}
function z(_0x35b74b, _0x1df349, _0x30692) {
  return (
    (_0x1df349 = He(_0x1df349)) in _0x35b74b
      ? Object.defineProperty(_0x35b74b, _0x1df349, {
          value: _0x30692,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x35b74b[_0x1df349] = _0x30692),
    _0x35b74b
  );
}
var B = class extends _0x56c6b5 {
  constructor(..._0x322bfa) {
    (super(..._0x322bfa), z(this, "_adapters", new Map()));
  }
  register(_0x2fa118) {
    if (this._adapters["has"](_0x2fa118.type))
      throw Error(
        "[HistoryRenderAdapterRegistryService]:\x20Adapter\x20for\x20unit\x20type\x20" +
          _0x2fa118.type +
          " is already registered.",
      );
    return (
      this._adapters["set"](_0x2fa118.type, _0x2fa118),
      _0x2dfc74(() => {
        this._adapters["get"](_0x2fa118.type) === _0x2fa118 &&
          this._adapters["delete"](_0x2fa118.type);
      })
    );
  }
  get(_0x494c04) {
    return this._adapters["get"](_0x494c04);
  }
  dispose() {
    (this._adapters["clear"](), super.dispose());
  }
};
function V(_0x1374d2, _0x347044) {
  return function (_0x3d7fbf, _0x2f8d8e) {
    _0x347044(_0x3d7fbf, _0x2f8d8e, _0x1374d2);
  };
}
function H(_0xde0ccc, _0x2d6ede, _0x32356e, _0x2eeb61) {
  var _0x479bea = arguments.length,
    _0x1fe234 =
      _0x479bea < 3
        ? _0x2d6ede
        : _0x2eeb61 === null
          ? (_0x2eeb61 = Object.getOwnPropertyDescriptor(_0x2d6ede, _0x32356e))
          : _0x2eeb61,
    _0x5262f7;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1fe234 = Reflect.decorate(_0xde0ccc, _0x2d6ede, _0x32356e, _0x2eeb61);
  else {
    for (var _0x4e2b45 = _0xde0ccc.length - 1; _0x4e2b45 >= 0; _0x4e2b45--)
      (_0x5262f7 = _0xde0ccc[_0x4e2b45]) &&
        (_0x1fe234 =
          (_0x479bea < 3
            ? _0x5262f7(_0x1fe234)
            : _0x479bea > 3
              ? _0x5262f7(_0x2d6ede, _0x32356e, _0x1fe234)
              : _0x5262f7(_0x2d6ede, _0x32356e)) || _0x1fe234);
  }
  return (
    _0x479bea > 3 &&
      _0x1fe234 &&
      Object.defineProperty(_0x2d6ede, _0x32356e, _0x1fe234),
    _0x1fe234
  );
}
let U = class extends _0x56c6b5 {
  constructor(_0x586447, _0x4614b3) {
    (super(),
      (this._session = _0x586447),
      (this._adapterRegistry = _0x4614b3),
      z(this, "_loading$", new _0x19fc31(false)),
      z(this, "loading$", this._loading$["asObservable"]()),
      z(this, "_adapter", null),
      z(this, "_openGeneration", 0),
      z(this, "_selectionGeneration", 0));
  }
  async open(_0x3514f2) {
    var _0x1a219b;
    let _0x14ed6b = this._adapterRegistry["get"](_0x3514f2.type);
    if (!_0x14ed6b)
      throw Error(
        "[HistoryUIService]: No render adapter is registered for unit type " +
          _0x3514f2.type +
          ".",
      );
    let _0x4b6c7d = ++this._openGeneration;
    if (
      (++this._selectionGeneration,
      (_0x1a219b = this._adapter) == null || _0x1a219b.close(),
      (this._adapter = _0x14ed6b),
      await this._session["open"](_0x3514f2),
      _0x4b6c7d !== this._openGeneration)
    )
      return;
    let _0x268a94 = this._session["currentVersion"];
    _0x268a94 && (await this.selectVersion(_0x268a94));
  }
  async selectVersion(_0x15bbc4) {
    let _0x166e1e = this._session["descriptor"],
      _0x48b371 = this._adapter;
    if (!_0x166e1e || !_0x48b371) return;
    let _0x419a21 = this._session["selectVersion"](_0x15bbc4),
      _0x34f390 = ++this._selectionGeneration;
    this._loading$["next"](true);
    try {
      let _0x461213 = _0x2e3c99(_0x419a21);
      if (
        (await _0x48b371.loadRevision(_0x166e1e.unitId, _0x419a21),
        _0x34f390 !== this._selectionGeneration)
      )
        return;
      await _0x48b371.loadChanges(_0x166e1e.unitId, _0x461213);
    } catch (_0x5dc8c4) {
      if (_0x34f390 === this._selectionGeneration) throw _0x5dc8c4;
    } finally {
      _0x34f390 === this._selectionGeneration && this._loading$["next"](false);
    }
  }
  close() {
    var _0x23834c;
    (++this._openGeneration,
      ++this._selectionGeneration,
      (_0x23834c = this._adapter) == null || _0x23834c.close(),
      (this._adapter = null),
      this._session["close"](),
      this._loading$["next"](false));
  }
  dispose() {
    (this.close(), this._loading$["complete"](), super.dispose());
  }
};
U = H([V(0, _0x1c56bb(_0x582707)), V(1, _0x1c56bb(B))], U);
var W = class extends _0x56c6b5 {
  constructor(..._0x274b73) {
    (super(..._0x274b73), z(this, "_resolvers", new Map()));
  }
  register(_0xfc7c2b, _0x5ce786) {
    if (this._resolvers["has"](_0xfc7c2b))
      throw Error(
        "[HistoryActionSummaryService]: Resolver for " +
          _0xfc7c2b +
          "\x20has\x20already\x20been\x20registered.",
      );
    return (
      this._resolvers["set"](_0xfc7c2b, _0x5ce786),
      _0x2dfc74(() => {
        this._resolvers["get"](_0xfc7c2b) === _0x5ce786 &&
          this._resolvers["delete"](_0xfc7c2b);
      })
    );
  }
  resolve(_0x3a136b, _0x1e7f4d) {
    if (_0x3a136b === undefined) return [];
    let _0x341e81 = this._resolvers["get"](_0x3a136b);
    return _0x341e81
      ? _0x341e81
          .resolve({
            version: _0x1e7f4d,
            commandIds: new Set(_0x1e7f4d.commands),
            mutations: _0x1e7f4d.mutations ?? [],
          })
          .filter(Boolean)
      : [];
  }
  dispose() {
    (this._resolvers["clear"](), super.dispose());
  }
};
function Ue(_0x564266) {
  let {
      versions: _0x1ab1f4,
      currentVersion: _0x1c004e,
      loading: _0x13b42e,
      onLoadDetails: _0x434061,
      onSelectVersion: _0x31d036,
      onError: _0x30d7cf,
    } = _0x564266,
    [_0xbe6c89, _0x419611] = _0x104187(() => new Set()),
    [_0x38a2cd, _0x56f4d4] = _0x104187(() => new Map()),
    [_0x4923c3, _0x179997] = _0x104187(() => new Set()),
    _0x215f04 = _0x1e428e(_0x4fb05a),
    _0x4479c4 = _0x2d91cb(() => Ke(_0x1ab1f4), [_0x1ab1f4]),
    _0x16f3fc = async (_0x4741ba) => {
      if (_0xbe6c89.has(_0x4741ba.id)) {
        _0x419611((_0x1f16eb) => {
          let _0x598d27 = new Set(_0x1f16eb);
          return (_0x598d27.delete(_0x4741ba.id), _0x598d27);
        });
        return;
      }
      if (!_0x38a2cd.has(_0x4741ba.id)) {
        _0x179997((_0x3fac72) => new Set(_0x3fac72).add(_0x4741ba.id));
        try {
          let _0x37c1bc = await _0x434061(_0x4741ba.id);
          _0x56f4d4((_0x1524e1) =>
            new Map(_0x1524e1).set(_0x4741ba.id, _0x37c1bc),
          );
        } catch (_0x2f1901) {
          _0x30d7cf(_0x2f1901);
          return;
        } finally {
          _0x179997((_0xcd2e3e) => {
            let _0x38ba82 = new Set(_0xcd2e3e);
            return (_0x38ba82.delete(_0x4741ba.id), _0x38ba82);
          });
        }
      }
      _0x419611((_0x5a02b1) => new Set(_0x5a02b1).add(_0x4741ba.id));
    };
  return _0x1ab1f4.length
    ? _0x4479c4.map((_0x4e2bfa) =>
        _0x333e16(
          _0x4f8ae1,
          {
            children: [
              _0x5f5cb9("div", {
                className:
                  "univer-flex\x20univer-items-center\x20univer-gap-2.5\x20univer-pt-1.5\x20univer-text-sm\x20univer-font-medium",
                children: qe(_0x4e2bfa.date, _0x215f04),
              }),
              _0x4e2bfa.versions["map"]((_0x1f73c5) => {
                let _0x28a93c = _0xbe6c89.has(_0x1f73c5.id),
                  _0x3a4a14 = _0x38a2cd.get(_0x1f73c5.id) ?? [];
                return _0x333e16(
                  _0x4f8ae1,
                  {
                    children: [
                      _0x5f5cb9(Ge, {
                        version: _0x1f73c5,
                        active:
                          (_0x1c004e == null ? undefined : _0x1c004e.id) ===
                          _0x1f73c5.id,
                        expanded: _0x28a93c,
                        loading: _0x13b42e,
                        loadingDetails: _0x4923c3.has(_0x1f73c5.id),
                        localeService: _0x215f04,
                        onSelect: _0x31d036,
                        onToggle: _0x16f3fc,
                      }),
                      _0x28a93c &&
                        _0x3a4a14.map((_0x276524, _0x84e1d7) =>
                          _0x333e16(
                            "div",
                            {
                              className:
                                "univer-relative\x20!univer-mb-0\x20!univer-mt-0",
                              children: [
                                _0x5f5cb9(We, {
                                  last: _0x84e1d7 === _0x3a4a14.length - 1,
                                }),
                                _0x5f5cb9(Ge, {
                                  version: _0x276524,
                                  active:
                                    (_0x1c004e == null
                                      ? undefined
                                      : _0x1c004e.id) === _0x276524.id,
                                  loading: _0x13b42e,
                                  localeService: _0x215f04,
                                  onSelect: _0x31d036,
                                }),
                              ],
                            },
                            _0x276524.id,
                          ),
                        ),
                    ],
                  },
                  _0x1f73c5.id,
                );
              }),
            ],
          },
          _0x4e2bfa.date,
        ),
      )
    : _0x5f5cb9("div", {
        className:
          "univer-flex univer-flex-1 univer-items-center univer-justify-center univer-text-gray-500",
        children: _0x5f5cb9(_0x5438f6, {
          className: "univer-size-5\x20univer-animate-spin",
        }),
      });
}
function We(_0x1f29ab) {
  let { last: _0x589d76 } = _0x1f29ab;
  return _0x333e16("div", {
    className:
      "univer-absolute univer-left-[30px] univer-top-0 univer-h-full univer-w-2.5 rtl:univer-left-auto rtl:univer-right-[30px]",
    children: [
      _0x5f5cb9("div", {
        className: _0x3404aa(
          "univer-absolute\x20univer-left-0\x20univer-top-0\x20univer-w-px\x20univer-bg-gray-100\x20rtl:univer-left-auto\x20rtl:univer-right-0\x20dark:!univer-bg-gray-800",
          _0x589d76 ? "univer-h-1/2" : "univer-h-full",
        ),
      }),
      _0x5f5cb9("div", {
        className:
          "univer-absolute\x20univer-left-0\x20univer-top-1/2\x20univer-h-px\x20univer-w-2.5\x20-univer-translate-y-1/2\x20univer-bg-gray-100\x20rtl:univer-left-auto\x20rtl:univer-right-0\x20dark:!univer-bg-gray-800",
      }),
    ],
  });
}
function Ge(_0x1e1b44) {
  var _0x5b9de3;
  let {
      version: _0x576628,
      active: _0x17e105,
      loading: _0x24f7e6,
      localeService: _0x5a38cf,
      expanded: _0x706253 = false,
      loadingDetails: _0x15ff72 = false,
      onSelect: _0x1dbb44,
      onToggle: _0x55edef,
    } = _0x1e1b44,
    _0x2512f6 = !!_0x576628.isDetail,
    _0x4ef929 = !_0x2512f6 && _0x576628.startRevision < _0x576628.endRevision,
    _0x19db44 = !!_0x576628.additionalFields,
    _0x5a14c2 = _0x576628.creatorNames["filter"](Boolean),
    _0x5d94ad =
      _0x576628.creatorName || _0x5a38cf.t("edit-history-ui.unknownUser");
  _0x5a14c2.length && (_0x5d94ad = _0x5a14c2.join(",\x20"));
  let _0x2aea54 = _0x5d94ad;
  _0x19db44 &&
    (_0x2aea54 =
      "" +
      _0x5a38cf.t("edit-history-ui.aiAssistant") +
      (_0x5d94ad ? "\x20(" + _0x5d94ad + ")" : ""));
  let _0x475423 = Je(_0x576628, _0x5a38cf),
    _0x28914c = _0x1e428e(_0x4cd16d),
    _0x4ce056 = _0x1e428e(W),
    _0xdcfcd9 =
      (_0x5b9de3 = _0x28914c.getConfig("edit-history-ui.config")) == null
        ? undefined
        : _0x5b9de3.descriptor,
    _0x3173f8 = _0x4ce056.resolve(
      _0xdcfcd9 == null ? undefined : _0xdcfcd9.type,
      _0x576628,
    ),
    _0x481141 = (_0x41b471) => {
      (_0x41b471.stopPropagation(),
        !_0x15ff72 && _0x55edef && _0x55edef(_0x576628).catch(() => undefined));
    },
    _0x3f24bd = _0x5f5cb9(_0x3db48f, {
      className: "univer-size-8 univer-text-gray-400 rtl:univer-rotate-180",
    });
  return (
    _0x15ff72
      ? (_0x3f24bd = _0x5f5cb9(_0x5438f6, { className: "univer-animate-spin" }))
      : _0x706253 &&
        (_0x3f24bd = _0x5f5cb9(_0x42ead3, {
          className: "univer-size-8 univer-text-gray-400",
        })),
    _0x333e16("div", {
      className: _0x3404aa(
        "univer-min-h-15\x20univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-gap-2\x20univer-rounded-md\x20univer-px-1\x20univer-py-1.5\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-800",
        {
          "univer-bg-gray-50\x20dark:!univer-bg-gray-900": _0x17e105,
          "univer-ml-6\x20rtl:univer-ml-0\x20rtl:univer-mr-6": _0x2512f6,
          "univer-pointer-events-none\x20univer-opacity-60": _0x24f7e6,
        },
      ),
      onClick: () => _0x1dbb44(_0x576628),
      children: [
        _0x5f5cb9("div", {
          className:
            "univer-flex univer-w-3 univer-items-center univer-justify-center",
          children:
            _0x4ef929 &&
            _0x5f5cb9("div", {
              className:
                "univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center",
              onClick: _0x481141,
              children: _0x3f24bd,
            }),
        }),
        _0x333e16("div", {
          className:
            "univer-flex\x20univer-flex-1\x20univer-flex-col\x20univer-gap-1",
          children: [
            _0x5f5cb9("div", {
              className:
                "univer-flex univer-min-h-6 univer-w-full univer-items-center univer-justify-between",
              children: _0x333e16("div", {
                className:
                  "univer-flex univer-flex-1 univer-items-center univer-gap-1.5 univer-text-sm univer-text-gray-600 dark:!univer-text-gray-200",
                children: [
                  _0x19db44 &&
                    _0x5f5cb9(_0xb5f74b, {
                      className: "univer-size-4 univer-shrink-0",
                    }),
                  _0x5f5cb9("span", {
                    className:
                      "univer-break-all univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
                    children: _0x2aea54,
                  }),
                  _0x5f5cb9("span", {
                    className:
                      "univer-text-center univer-text-gray-500 dark:!univer-text-gray-400",
                    children: _0x475423,
                  }),
                  _0x576628.isCurrent &&
                    _0x5f5cb9("span", {
                      className:
                        "univer-ml-1 univer-flex univer-flex-shrink-0 univer-items-center univer-justify-center univer-rounded univer-border univer-border-primary-600 univer-bg-primary-50 univer-px-1.5 univer-text-xs univer-text-primary-600",
                      children: _0x5a38cf.t("edit-history-ui.currentVersion"),
                    }),
                ],
              }),
            }),
            _0x5f5cb9("div", {
              className:
                "univer-text-sm\x20univer-leading-5\x20univer-text-gray-500\x20dark:!univer-text-gray-300",
              children: _0x3173f8.length
                ? Ye(_0x3173f8, _0x5a38cf)
                : _0x5a38cf.t("edit-history-ui.edited"),
            }),
          ],
        }),
      ],
    })
  );
}
function Ke(_0x2d76d9) {
  return _0x2d76d9.reduce((_0x12d327, _0x49cdf6) => {
    let _0x2e5a10 = _0x37bedf(
        _0x49cdf6.startRevisionCreateTime ?? _0x49cdf6.createTime ?? Date.now(),
      ).format("YYYY-MM-DD"),
      _0x41c8bb = _0x12d327[_0x12d327.length - 1];
    return (
      (_0x41c8bb == null ? undefined : _0x41c8bb.date) === _0x2e5a10
        ? _0x41c8bb.versions["push"](_0x49cdf6)
        : _0x12d327.push({ date: _0x2e5a10, versions: [_0x49cdf6] }),
      _0x12d327
    );
  }, []);
}
function qe(_0x329e9f, _0x53df59) {
  let _0x4dbb81 = _0x37bedf().format("YYYY-MM-DD");
  if (_0x329e9f === _0x4dbb81) return _0x53df59.t("edit-history-ui.today");
  let _0x4c6053 = _0x25582d[_0x53df59.getCurrentLocale()].tag,
    _0x3beea2 =
      _0x329e9f.slice(0, 4) === _0x4dbb81.slice(0, 4)
        ? { month: "numeric", day: "numeric" }
        : { year: "numeric", month: "numeric", day: "numeric" };
  return _0x37bedf(_0x329e9f).formatIntl(_0x4c6053, _0x3beea2);
}
function G(_0x26f8e1, _0x140e33) {
  return _0x26f8e1
    ? _0x37bedf(_0x26f8e1).formatIntl(
        _0x25582d[_0x140e33.getCurrentLocale()].tag,
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        },
      )
    : "";
}
function Je(_0x5e75b8, _0x54b206) {
  if (_0x5e75b8.isDetail) return G(_0x5e75b8.createTime, _0x54b206);
  let _0x13019c = G(
      _0x5e75b8.startRevisionCreateTime ?? _0x5e75b8.createTime,
      _0x54b206,
    ),
    _0x2b999c = G(
      _0x5e75b8.endRevisionCreateTime ?? _0x5e75b8.createTime,
      _0x54b206,
    );
  return _0x13019c && _0x2b999c && _0x13019c !== _0x2b999c
    ? _0x13019c + "\x20-\x20" + _0x2b999c
    : _0x13019c || _0x2b999c;
}
function Ye(_0x3a8a29, _0x2d5788) {
  return new Intl["ListFormat"](_0x25582d[_0x2d5788.getCurrentLocale()].tag, {
    style: "short",
    type: "conjunction",
  }).format(_0x3a8a29);
}
function Xe() {
  let _0x2ccec6 = _0x1e428e(_0x4fb05a),
    _0x1ed507 = _0x1e428e(_0x4fa885),
    _0x55c763 = _0x1e428e(_0x833354),
    _0x28c1ab = _0x1e428e(_0x582707),
    _0x585dc6 = _0x1e428e(U),
    _0x96a3d6 = _0x10f1ef(_0x28c1ab.versions$, []),
    _0x28240e = _0x10f1ef(_0x28c1ab.currentVersion$, null),
    _0x52a7b3 = _0x10f1ef(_0x585dc6.loading$, false),
    _0x43f7b9 = _0x10f1ef(_0x28c1ab.status$, _0x3ba7be.Idle),
    _0x2171d4 = (_0xa6d611, _0x18cc5e) => {
      (_0x1ed507.error(_0xa6d611, _0x18cc5e),
        _0x55c763.show({
          content: _0x2ccec6.t("edit-history-ui.loadError"),
          type: _0x300761.Error,
        }));
    };
  return _0x5f5cb9("div", {
    className: "univer-flex univer-h-full univer-flex-col univer-p-3",
    children: _0x5f5cb9("div", {
      className:
        "univer-flex univer-min-h-0 univer-flex-1 univer-flex-col univer-gap-1 univer-overflow-auto",
      onScroll: (_0xf74d70) => {
        if (_0x43f7b9 !== _0x3ba7be.Ready || !_0x28c1ab.hasMore) return;
        let {
          scrollTop: _0x586330,
          scrollHeight: _0x2b56f2,
          clientHeight: _0x2ecacd,
        } = _0xf74d70.currentTarget;
        _0x586330 + _0x2ecacd < _0x2b56f2 - 5 ||
          _0x28c1ab.loadMore().catch((_0x16a824) => {
            _0x2171d4(
              "[HistoryPanel]: Failed to load more history versions.",
              _0x16a824,
            );
          });
      },
      children: _0x5f5cb9(Ue, {
        versions: _0x96a3d6,
        currentVersion: _0x28240e,
        loading: _0x52a7b3,
        onLoadDetails: (_0x5c10e3) => _0x28c1ab.loadVersionDetails(_0x5c10e3),
        onSelectVersion: (_0xf53e9d) => {
          _0x585dc6
            .selectVersion(_0xf53e9d)
            .catch((_0xc872ae) =>
              _0x2171d4(
                "[HistoryPanel]: Failed to load the selected history version.",
                _0xc872ae,
              ),
            );
        },
        onError: (_0x41f850) =>
          _0x2171d4(
            "[HistoryPanel]: Failed to load history version details.",
            _0x41f850,
          ),
      }),
    }),
  });
}
const Ze = "EDIT_HISTORY_PANEL";
let K = class extends _0x56c6b5 {
  constructor(_0x398d97) {
    (super(), this.disposeWithMe(_0x398d97.register(Ze, Xe)));
  }
};
K = H([V(0, _0x1c56bb(_0x26bdca))], K);
let q = class extends _0x56c6b5 {
  constructor(_0x2de5be, _0x4c59b7) {
    super();
    let _0x5bad1f = _0x4c59b7.getConfig(L);
    _0x5bad1f != null &&
      _0x5bad1f.viewerMode &&
      this.disposeWithMe(
        _0x2de5be.beforeCommandExecuted((_0x243163, _0x58603a) => {
          if (
            _0x243163.type === _0x4b45c8.MUTATION &&
            !(_0x58603a != null && _0x58603a.fromChangeset)
          )
            throw new _0x5c6769(
              "[HistoryReadOnlyController]:\x20Mutations\x20are\x20disabled\x20in\x20history\x20viewer\x20mode.",
            );
        }),
      );
  }
};
q = H([V(0, _0x17c823), V(1, _0x4cd16d)], q);
const Qe = { viewerMode: false };
let J = class extends _0x56c6b5 {
  constructor(
    _0x49c765,
    _0x35d60b,
    _0x208998,
    _0x34c585,
    _0x2e27bf,
    _0xa0c94c,
    _0x489f3b,
    _0x333ebf,
    _0x488b6f,
    _0xc78a29,
  ) {
    (super(),
      (this._configService = _0x49c765),
      (this._confirmService = _0x35d60b),
      (this._logService = _0x208998),
      (this._injector = _0x34c585),
      (this._localeService = _0x2e27bf),
      (this._historySessionService = _0xa0c94c),
      (this._historyUIService = _0x489f3b),
      (this._messageService = _0x333ebf),
      (this._sidebarService = _0x488b6f),
      (this._uiPartsService = _0xc78a29),
      z(this, "_sidebarDisposable", null),
      z(this, "_restoring", false),
      z(this, "_restoreGeneration", 0),
      z(this, "_viewerGeneration", 0),
      z(this, "_closing", false));
  }
  registerHeader() {
    this._getConfig().viewerMode &&
      this.disposeWithMe(
        this._uiPartsService["registerComponent"](_0x17ddca.HEADER, () =>
          _0x113679($e, this._injector),
        ),
      );
  }
  async open() {
    let _0x3800fd = this._getConfig();
    if (!(
      !_0x3800fd.viewerMode ||
      !_0x3800fd.descriptor ||
      this._sidebarDisposable
    )) {
      (++this._viewerGeneration,
        (this._sidebarDisposable = this._sidebarService["open"]({
          header: { title: this._localeService["t"]("edit-history-ui.title") },
          children: { label: Ze },
          onClose: () => this.close(),
        })));
      try {
        await this._historyUIService["open"](_0x3800fd.descriptor);
      } catch (_0x21402f) {
        throw (this.close(), _0x21402f);
      }
    }
  }
  async restore() {
    let _0x335cff = this._historySessionService["currentVersion"],
      _0x373e8f = this._getConfig();
    if (
      _0x335cff == null ||
      _0x335cff.endRevision == null ||
      _0x335cff.isCurrent ||
      !_0x373e8f.canRestore ||
      !_0x373e8f.onRestore ||
      this._restoring
    )
      return;
    let _0x48172f = ++this._restoreGeneration,
      _0x55c171 = this._viewerGeneration;
    this._restoring = true;
    try {
      let _0x2bd531 = _0x335cff.endRevision;
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
        _0x48172f !== this._restoreGeneration ||
        _0x55c171 !== this._viewerGeneration ||
        !this._sidebarDisposable
      )
        return;
      try {
        await _0x373e8f.onRestore(_0x2bd531);
      } catch (_0x114838) {
        if (
          _0x48172f !== this._restoreGeneration ||
          _0x55c171 !== this._viewerGeneration ||
          !this._sidebarDisposable
        )
          return;
        (this._logService["error"](
          "[HistoryViewerController]: Failed to restore history revision.",
          _0x114838,
        ),
          this._messageService["show"]({
            content: this._localeService["t"]("edit-history-ui.restoreError"),
            type: _0x300761.Error,
          }));
      }
    } finally {
      _0x48172f === this._restoreGeneration && (this._restoring = false);
    }
  }
  close() {
    var _0x5b38d3, _0x328884;
    if (this._closing) return;
    ((this._closing = true),
      ++this._viewerGeneration,
      ++this._restoreGeneration,
      (this._restoring = false));
    let _0x49a72e = this._sidebarDisposable;
    ((this._sidebarDisposable = null),
      _0x49a72e == null || _0x49a72e.dispose(),
      this._historyUIService["close"](),
      (_0x5b38d3 = (_0x328884 = this._getConfig()).onClose) == null ||
        _0x5b38d3.call(_0x328884),
      (this._closing = false));
  }
  _getConfig() {
    return this._configService["getConfig"]("edit-history-ui.config") ?? Qe;
  }
};
J = H(
  [
    V(0, _0x4cd16d),
    V(1, _0x1b8308),
    V(2, _0x4fa885),
    V(3, _0x1c56bb(_0x2de5ef)),
    V(4, _0x1c56bb(_0x4fb05a)),
    V(5, _0x1c56bb(_0x582707)),
    V(6, _0x1c56bb(U)),
    V(7, _0x833354),
    V(8, _0x2314a8),
    V(9, _0x17e5c8),
  ],
  J,
);
function $e() {
  let _0x5c515e = _0x1e428e(_0x4fb05a),
    _0x4679b2 = _0x1e428e(J),
    _0x5aef50 = _0x1e428e(_0x4cd16d),
    _0x7110a5 = _0x10f1ef(_0x1e428e(_0x582707).currentVersion$, null),
    _0x2278ee = _0x5aef50.getConfig(L);
  return _0x333e16("div", {
    className: _0x3404aa(
      "univer-flex univer-h-12 univer-items-center univer-justify-between univer-px-3",
      _0x2dfed0,
    ),
    children: [
      _0x333e16(_0x24dddf, {
        onClick: () => _0x4679b2.close(),
        children: [
          _0x5f5cb9(_0x406b1a, { className: "univer-size-4" }),
          _0x5c515e.t("edit-history-ui.back"),
        ],
      }),
      _0x5f5cb9(_0x24dddf, {
        variant: "primary",
        disabled:
          !(_0x2278ee != null && _0x2278ee.canRestore) ||
          _0x7110a5 == null ||
          _0x7110a5.isCurrent,
        onClick: () => {
          _0x4679b2.restore().catch(() => undefined);
        },
        children: _0x5c515e.t("edit-history-ui.restore"),
      }),
    ],
  });
}
const et = { insert: "green.800", delete: "red.800", update: "blue.800" };
let Y = class extends _0x56c6b5 {
  constructor(_0x1a83ff) {
    (super(),
      (this._themeService = _0x1a83ff),
      z(this, "_styles", {
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
  getStyle(_0x1a5ec0) {
    return this._styles[_0x1a5ec0];
  }
  _refreshStyles() {
    this._styles = {
      insert: this._createStyle("insert"),
      delete: this._createStyle("delete"),
      update: this._createStyle("update"),
    };
  }
  _createStyle(_0x296a81) {
    let _0x605085 = this._themeService["getColorFromTheme"](et[_0x296a81]);
    return {
      fill: new _0x370dbb(_0x605085).setAlpha(0.5).toRgbString(),
      stroke: new _0x370dbb(_0x605085).setAlpha(0.9).toRgbString(),
    };
  }
};
Y = H([V(0, _0x1c56bb(_0x3acc86))], Y);
const X = 1000;
let Z = class extends _0x56c6b5 {
  constructor(_0x20da5e, _0x18636f) {
    (super(),
      (this._renderManagerService = _0x20da5e),
      (this._highlightService = _0x18636f),
      z(this, "_overlays", new Map()),
      z(this, "_generations", new Map()));
  }
  async show(_0x3187cd, _0x5b3422) {
    let _0x3e4d1b = (this._generations["get"](_0x3187cd) ?? 0) + 1;
    (this._generations["set"](_0x3187cd, _0x3e4d1b),
      this._removeOverlays(_0x3187cd));
    let _0x5ef717 = await this._resolveTargets(_0x3187cd, _0x5b3422, _0x3e4d1b);
    if (this._generations["get"](_0x3187cd) !== _0x3e4d1b || !_0x5ef717) return;
    let { scene: _0x22771a } = _0x5ef717,
      _0x48a0d0 = tt(_0x5ef717.items),
      _0xe8cf30 = [];
    if (
      (_0x48a0d0.forEach(({ target: _0xbdbfc2, object: _0x26e984 }) => {
        let _0x1892bd =
          _0xbdbfc2.bounds ??
          (_0x26e984 == null ? undefined : _0x26e984.getRealBound());
        if (!_0x1892bd || !Q(_0x1892bd)) return;
        let _0x1f13ae = this._highlightService["getStyle"](_0xbdbfc2.kind),
          _0x1d1ada = new _0x5d77c6("edit-history-highlight-" + _0xbdbfc2.id, {
            left: _0x1892bd.left,
            top: _0x1892bd.top,
            width: _0x1892bd.width,
            height: _0x1892bd.height,
            angle: (_0x26e984 == null ? undefined : _0x26e984.angle) ?? 0,
            fill: _0xbdbfc2.outlineOnly ? undefined : _0x1f13ae.fill,
            stroke: _0x1f13ae.stroke,
            strokeWidth: _0xbdbfc2.outlineOnly ? 4 : 2,
            evented: false,
            zIndex: X,
          });
        _0xe8cf30.push({
          target: _0xbdbfc2,
          shape: _0x1d1ada,
          object: _0x26e984,
          objectSubscription: null,
        });
      }),
      _0xe8cf30.length === 0)
    )
      return;
    let _0x8d7c20 = {
      scene: _0x22771a,
      bindings: _0xe8cf30,
      transformSubscriptions: [],
      refreshPromise: null,
      pulseInterval: null,
      pulseTimeout: null,
    };
    (this._overlays["set"](_0x3187cd, _0x8d7c20),
      this._bindOverlayLifecycle(_0x3187cd, _0x8d7c20),
      _0x22771a.addObjects(
        _0xe8cf30.map(({ shape: _0xbb9053 }) => _0xbb9053),
        X,
      ),
      _0x22771a.makeDirty(true),
      this._startPulse(_0x8d7c20));
  }
  clear(_0x4cc2a6) {
    (this._generations["set"](
      _0x4cc2a6,
      (this._generations["get"](_0x4cc2a6) ?? 0) + 1,
    ),
      this._removeOverlays(_0x4cc2a6));
  }
  dispose() {
    (Array.from(this._overlays["keys"]()).forEach((_0x4d6dd1) =>
      this.clear(_0x4d6dd1),
    ),
      super.dispose());
  }
  async _resolveTargets(_0xbaec11, _0x5aa26c, _0x153922) {
    for (let _0xeddfa2 = 0; _0xeddfa2 <= 120; _0xeddfa2++) {
      if (this._generations["get"](_0xbaec11) !== _0x153922) return null;
      let _0x294e75 =
        this._renderManagerService["getRenderUnitById"](_0xbaec11);
      if (_0x294e75) {
        let _0x236dd5 = _0x5aa26c.map((_0x5d92bc) => ({
          target: _0x5d92bc,
          object: _0x5d92bc.objectKey
            ? (_0x294e75.scene["getObjectIncludeInGroup"](
                _0x5d92bc.objectKey,
              ) ?? _0x294e75.scene["getObject"](_0x5d92bc.objectKey))
            : null,
        }));
        if (
          !_0x236dd5.some(
            ({ target: _0x4567bf, object: _0x3dad86 }) =>
              !_0x4567bf.bounds && _0x4567bf.objectKey && !_0x3dad86,
          ) ||
          _0xeddfa2 === 120
        )
          return {
            scene: _0x294e75.scene,
            items: _0x236dd5.map(
              ({ target: _0x32145d, object: _0x295e0a }) => ({
                target: _0x32145d,
                object:
                  _0x295e0a ??
                  this._getFallbackObject(
                    _0x294e75.scene,
                    _0x294e75.mainComponent ?? null,
                    _0x32145d,
                  ),
              }),
            ),
          };
      }
      await rt();
    }
    return null;
  }
  _getFallbackObject(_0x512480, _0x1bdc61, _0x216815) {
    return _0x216815.fallbackObjectKey
      ? (_0x512480.getObject(_0x216815.fallbackObjectKey) ?? null)
      : _0x1bdc61;
  }
  _removeOverlays(_0x13aa8e) {
    let _0xdac02c = this._overlays["get"](_0x13aa8e);
    _0xdac02c &&
      (this._stopPulse(_0xdac02c),
      _0xdac02c.transformSubscriptions["forEach"]((_0x37e217) =>
        _0x37e217.unsubscribe(),
      ),
      _0xdac02c.bindings["forEach"](
        ({ objectSubscription: _0x2c78d3, shape: _0xf19086 }) => {
          (_0x2c78d3 == null || _0x2c78d3.unsubscribe(),
            _0xdac02c.scene["removeObject"](_0xf19086));
        },
      ),
      _0xdac02c.scene["makeDirty"](true),
      this._overlays["delete"](_0x13aa8e));
  }
  _bindOverlayLifecycle(_0x264bc2, _0x9d832c) {
    (_0x9d832c.bindings["forEach"]((_0x4e9156) =>
      this._bindObjectTransform(_0x264bc2, _0x9d832c, _0x4e9156),
    ),
      _0x9d832c.transformSubscriptions["push"](
        _0x9d832c.scene["onTransformChange$"].subscribeEvent(() =>
          this._queueOverlayRefresh(_0x264bc2, _0x9d832c),
        ),
      ));
    let _0x2e31dc = _0x9d832c.scene["getEngine"]();
    _0x2e31dc &&
      _0x9d832c.transformSubscriptions["push"](
        _0x2e31dc.onTransformChange$["subscribeEvent"](() =>
          this._queueOverlayRefresh(_0x264bc2, _0x9d832c),
        ),
      );
  }
  _bindObjectTransform(_0x295668, _0x2454b8, _0x3094b4) {
    var _0x2a80e2, _0x442a3e;
    ((_0x2a80e2 = _0x3094b4.objectSubscription) == null ||
      _0x2a80e2.unsubscribe(),
      (_0x3094b4.objectSubscription =
        ((_0x442a3e = _0x3094b4.object) == null
          ? undefined
          : _0x442a3e.onTransformChange$["subscribeEvent"](() => {
              this._refreshOverlay(_0x295668, _0x2454b8);
            })) ?? null));
  }
  _queueOverlayRefresh(_0x271756, _0x5c9241) {
    _0x5c9241.refreshPromise ||= Promise.resolve().then(() => {
      ((_0x5c9241.refreshPromise = null),
        this._refreshOverlay(_0x271756, _0x5c9241));
    });
  }
  _refreshOverlay(_0x5a1797, _0x4c2070) {
    if (this._overlays["get"](_0x5a1797) !== _0x4c2070) return;
    let _0x53c19f = false;
    (_0x4c2070.bindings["forEach"]((_0x68769) => {
      let _0x380a7d = this._resolveCurrentObject(_0x4c2070.scene, _0x68769);
      _0x380a7d !== _0x68769.object &&
        ((_0x68769.object = _0x380a7d),
        this._bindObjectTransform(_0x5a1797, _0x4c2070, _0x68769));
      let _0x505cc0 =
        _0x68769.target["bounds"] ??
        (_0x380a7d == null ? undefined : _0x380a7d.getRealBound());
      !_0x505cc0 ||
        !Q(_0x505cc0) ||
        (_0x68769.shape["transformByState"]({
          left: _0x505cc0.left,
          top: _0x505cc0.top,
          width: _0x505cc0.width,
          height: _0x505cc0.height,
          angle: (_0x380a7d == null ? undefined : _0x380a7d.angle) ?? 0,
        }),
        (_0x53c19f = true));
    }),
      _0x53c19f && _0x4c2070.scene["makeDirty"](true));
  }
  _resolveCurrentObject(_0x256f59, _0x1c1afd) {
    if (_0x1c1afd.target["bounds"]) return _0x1c1afd.object;
    if (_0x1c1afd.target["objectKey"]) {
      let _0x79526 =
        _0x256f59.getObjectIncludeInGroup(_0x1c1afd.target["objectKey"]) ??
        _0x256f59.getObject(_0x1c1afd.target["objectKey"]);
      if (_0x79526) return _0x79526;
    }
    return _0x1c1afd.target["fallbackObjectKey"]
      ? (_0x256f59.getObject(_0x1c1afd.target["fallbackObjectKey"]) ??
          _0x1c1afd.object)
      : _0x1c1afd.object;
  }
  _startPulse(_0x921643) {
    var _0x5da21a, _0x116948;
    if (
      typeof window < "u" &&
      (_0x5da21a = (_0x116948 = window).matchMedia) != null &&
      _0x5da21a.call(_0x116948, "(prefers-reduced-motion: reduce)").matches
    )
      return;
    let _0x1dd623 = false;
    ((_0x921643.pulseInterval = globalThis.setInterval(() => {
      ((_0x1dd623 = !_0x1dd623),
        this._setOverlayOpacity(_0x921643, _0x1dd623 ? 0.25 : 1));
    }, 500)),
      (_0x921643.pulseTimeout = globalThis.setTimeout(() => {
        (this._stopPulse(_0x921643), this._setOverlayOpacity(_0x921643, 1));
      }, 4000)));
  }
  _stopPulse(_0x4d0992) {
    (_0x4d0992.pulseInterval !== null &&
      (globalThis.clearInterval(_0x4d0992.pulseInterval),
      (_0x4d0992.pulseInterval = null)),
      _0x4d0992.pulseTimeout !== null &&
        (globalThis.clearTimeout(_0x4d0992.pulseTimeout),
        (_0x4d0992.pulseTimeout = null)));
  }
  _setOverlayOpacity(_0x107eea, _0x454b75) {
    (_0x107eea.bindings["forEach"](({ shape: _0x3f63e0 }) =>
      _0x3f63e0.setProps({ fillOpacity: _0x454b75, strokeOpacity: _0x454b75 }),
    ),
      _0x107eea.scene["makeDirty"](true));
  }
};
Z = H([V(0, _0x417cc8), V(1, _0x1c56bb(Y))], Z);
function tt(_0x52817c) {
  let _0x43622b = new Map();
  return (
    _0x52817c.forEach((_0x3574e3) => {
      var _0x504627, _0x470635;
      let _0x461e29 =
        _0x3574e3.target["bounds"] ??
        ((_0x504627 = _0x3574e3.object) == null
          ? undefined
          : _0x504627.getRealBound());
      if (!_0x461e29 || !Q(_0x461e29)) return;
      let _0x3335ef = [
          _0x461e29.left,
          _0x461e29.top,
          _0x461e29.width,
          _0x461e29.height,
          ((_0x470635 = _0x3574e3.object) == null
            ? undefined
            : _0x470635.angle) ?? 0,
        ].join(":"),
        _0x1d5b90 = _0x43622b.get(_0x3335ef);
      if (!_0x1d5b90) {
        _0x43622b.set(_0x3335ef, _0x3574e3);
        return;
      }
      _0x43622b.set(_0x3335ef, {
        object: _0x1d5b90.object,
        target: {
          ..._0x1d5b90.target,
          kind: nt(_0x1d5b90.target["kind"], _0x3574e3.target["kind"]),
          outlineOnly:
            _0x1d5b90.target["outlineOnly"] || _0x3574e3.target["outlineOnly"],
        },
      });
    }),
    Array.from(_0x43622b.values())
  );
}
function nt(_0x5d06d0, _0x2e7e5c) {
  return _0x5d06d0 === _0x2e7e5c
    ? _0x5d06d0
    : _0x5d06d0 === "update"
      ? _0x2e7e5c
      : _0x2e7e5c === "update"
        ? _0x5d06d0
        : "update";
}
function Q(_0x53891b) {
  return (
    [_0x53891b.left, _0x53891b.top, _0x53891b.width, _0x53891b.height].every(
      Number.isFinite,
    ) &&
    _0x53891b.width > 0 &&
    _0x53891b.height > 0
  );
}
function rt() {
  return new Promise((_0xc7cec1) => globalThis.setTimeout(_0xc7cec1, 16));
}
let $ = class extends _0x5d7241 {
  constructor(_0x1221a8 = Re, _0x26657f, _0x3164f4, _0x147aec) {
    (super(),
      (this._config = _0x1221a8),
      (this._injector = _0x26657f),
      (this._configService = _0x3164f4),
      (this._logService = _0x147aec),
      z(this, "_historyViewerController", null));
    let { ..._0x1a82f6 } = _0x590275({}, Re, this._config);
    this._configService["setConfig"](L, _0x1a82f6);
  }
  onStarting() {
    (_0x2a8a56(this._injector, [[K], [q], [J], [W], [Z], [Y], [B], [U]]),
      this._injector["get"](K),
      this._injector["get"](q),
      (this._historyViewerController = this._injector["get"](J)),
      this._historyViewerController["registerHeader"]());
  }
  onRendered() {
    if (!this._historyViewerController) {
      this._logService["error"](
        "[UniverEditHistoryUIPlugin]:\x20History\x20viewer\x20controller\x20is\x20not\x20available.",
      );
      return;
    }
    this._historyViewerController["open"]().catch((_0x417132) => {
      this._logService["error"](
        "[UniverEditHistoryUIPlugin]: Failed to open history viewer.",
        _0x417132,
      );
    });
  }
};
(z($, "pluginName", "UNIVER_EDIT_HISTORY_UI_PLUGIN"),
  z($, "packageName", ze),
  z($, "version", Be),
  z($, "type", _0x1baa2f.UNIVER_UNKNOWN),
  ($ = H(
    [
      _0x4bbb87(_0x52acd8, _0x26bc1b, _0x420c21),
      V(1, _0x1c56bb(_0x2de5ef)),
      V(2, _0x4cd16d),
      V(3, _0x4fa885),
    ],
    $,
  )));
export {
  L as EDIT_HISTORY_UI_PLUGIN_CONFIG_KEY,
  W as HistoryActionSummaryService,
  Z as HistoryCanvasHighlightService,
  Y as HistoryHighlightService,
  B as HistoryRenderAdapterRegistryService,
  $ as UniverEditHistoryUIPlugin,
  Te as getUnitComparisonEntityLabel,
  ke as getUnitComparisonPathLabels,
  Ie as getUnitComparisonValueLabel,
  N as unitComparisonLocaleKey,
};
